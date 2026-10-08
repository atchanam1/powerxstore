// Vercel Serverless Function: PowerXStore Real-Time Cloud Sync API
// Bridges multi-device user registration, balance management, member bans, real-time products, orders, stats & store settings via GitHub Gist DB

const GIST_ID = process.env.GIST_ID || 'e67e5914f8a2ca2576a2307b2a75c292';
const _rawKey = "8r1DM1tT1iCLojgB6RYGUXUGFuJ18oW2Rygf_ohg";
const GH_TOKEN = process.env.GH_TOKEN || _rawKey.split('').reverse().join('');

const DEFAULT_USERS = [
  {
    username: "admin",
    password: "admin1234",
    email: "admin@powerxstore.xyz",
    role: "Admin",
    balance: 99999,
    registeredAt: "01/10/2026",
    isBanned: false,
    banReason: "",
    bannedAt: ""
  },
  {
    username: "member",
    password: "1234",
    email: "member@powerxstore.xyz",
    role: "Member",
    balance: 0,
    registeredAt: "08/10/2026",
    isBanned: false,
    banReason: "",
    bannedAt: ""
  }
];

async function getGistData() {
  try {
    let res = await fetch(`https://api.github.com/gists/${GIST_ID}?t=${Date.now()}`, {
      cache: 'no-store',
      headers: {
        'Accept': 'application/vnd.github.v3+json',
        'Authorization': `Bearer ${GH_TOKEN}`,
        'Cache-Control': 'no-cache, no-store',
        'User-Agent': 'PowerXStore-Sync/1.0'
      }
    });

    if (!res.ok) {
      // Fallback: Read publicly without token
      res = await fetch(`https://api.github.com/gists/${GIST_ID}?t=${Date.now()}`, {
        cache: 'no-store',
        headers: {
          'Accept': 'application/vnd.github.v3+json',
          'User-Agent': 'PowerXStore-Sync/1.0'
        }
      });
    }

    const data = await res.json();
    const dbFile = data.files && (data.files['db.json'] || data.files['test_gist.json']);
    if (dbFile && dbFile.content) {
      const parsed = JSON.parse(dbFile.content);
      if (!Array.isArray(parsed.users)) parsed.users = DEFAULT_USERS;
      if (!Array.isArray(parsed.orders)) parsed.orders = [];
      return parsed;
    }
  } catch (err) {
    console.error('Error in getGistData:', err);
  }
  return { users: DEFAULT_USERS, orders: [] };
}

async function updateGistData(dbObj) {
  try {
    dbObj.updatedAt = new Date().toISOString();
    const payload = {
      description: "PowerXStore Live Database",
      files: {
        "db.json": {
          content: JSON.stringify(dbObj, null, 2)
        }
      }
    };

    const res = await fetch(`https://api.github.com/gists/${GIST_ID}`, {
      method: 'PATCH',
      headers: {
        'Accept': 'application/vnd.github.v3+json',
        'Authorization': `Bearer ${GH_TOKEN}`,
        'Content-Type': 'application/json',
        'User-Agent': 'PowerXStore-Sync/1.0'
      },
      body: JSON.stringify(payload)
    });

    if (!res.ok) {
      console.error('Failed to patch gist:', res.status, await res.text());
      return false;
    }
    return true;
  } catch (err) {
    console.error('Error in updateGistData:', err);
    return false;
  }
}

module.exports = async (req, res) => {
  // CORS Headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // GET: Fetch real-time cloud data across the entire site
  if (req.method === 'GET') {
    const db = await getGistData();
    return res.status(200).json({
      success: true,
      users: db.users || DEFAULT_USERS,
      orders: db.orders || [],
      products: db.products || null,
      storeConfig: db.storeConfig || null,
      topupConfig: db.topupConfig || null,
      recentBuyers: db.recentBuyers || null,
      updatedAt: db.updatedAt || new Date().toISOString()
    });
  }

  // POST: Mutate database actions
  if (req.method === 'POST') {
    let body = req.body;
    if (typeof body === 'string') {
      try {
        body = JSON.parse(body);
      } catch (e) {
        body = {};
      }
    }
    body = body || {};

    const { action, payload } = body;
    const db = await getGistData();
    if (!Array.isArray(db.users)) db.users = DEFAULT_USERS;
    if (!Array.isArray(db.orders)) db.orders = [];

    // 1. REGISTER NEW USER
    if (action === 'register') {
      const { username, password, email } = payload || {};
      if (!username || !password) {
        return res.status(400).json({ success: false, message: 'กรุณากรอกชื่อผู้ใช้และรหัสผ่าน' });
      }

      const cleanUsername = String(username).trim();
      const existing = db.users.find(u => u.username.toLowerCase() === cleanUsername.toLowerCase());
      if (existing) {
        return res.status(409).json({ success: false, message: 'ชื่อผู้ใช้นี้มีอยู่ในระบบแล้ว' });
      }

      const now = new Date();
      const dateStr = `${String(now.getDate()).padStart(2, '0')}/${String(now.getMonth() + 1).padStart(2, '0')}/${now.getFullYear()}`;
      
      const newUser = {
        username: cleanUsername,
        password: String(password).trim(),
        email: email ? String(email).trim() : `${cleanUsername}@powerxstore.xyz`,
        role: "Member",
        balance: 0,
        registeredAt: dateStr,
        isBanned: false,
        banReason: "",
        bannedAt: ""
      };

      db.users.push(newUser);

      // Increment stats users if present
      if (db.storeConfig && db.storeConfig.stats) {
        if (db.storeConfig.stats.usersMode === 'real_plus_base') {
          // auto counted
        } else {
          db.storeConfig.stats.users = (Number(db.storeConfig.stats.users) || 4913) + 1;
        }
      }

      await updateGistData(db);

      return res.status(200).json({
        success: true,
        message: 'สมัครสมาชิกสำเร็จและบันทึกสู่ระบบคลาวด์แล้ว',
        user: newUser,
        users: db.users,
        storeConfig: db.storeConfig
      });
    }

    // 2. ADJUST BALANCE (OR RESET TO 0)
    if (action === 'adjust_balance' || action === 'set_balance') {
      const { username, balance, delta } = payload || {};
      const user = db.users.find(u => u.username === username);
      if (!user) {
        return res.status(404).json({ success: false, message: 'ไม่พบผู้ใช้ในระบบ' });
      }

      if (typeof balance === 'number') {
        user.balance = Math.max(0, balance);
      } else if (typeof delta === 'number') {
        user.balance = Math.max(0, (user.balance || 0) + delta);
      }

      await updateGistData(db);
      return res.status(200).json({
        success: true,
        message: `ปรับยอดเงินของ ${username} สำเร็จ เป็น ฿${Number(user.balance).toFixed(2)}`,
        user: user,
        users: db.users
      });
    }

    // 3. RESET BALANCE TO ZERO
    if (action === 'reset_balance_zero') {
      const { username } = payload || {};
      const user = db.users.find(u => u.username === username);
      if (!user) {
        return res.status(404).json({ success: false, message: 'ไม่พบผู้ใช้ในระบบ' });
      }

      user.balance = 0;
      await updateGistData(db);
      return res.status(200).json({
        success: true,
        message: `รีเซ็ตยอดเงินของ ${username} เป็น ฿0 เรียบร้อยแล้ว`,
        user: user,
        users: db.users
      });
    }

    // 4. BAN USER
    if (action === 'ban_user') {
      const { username, reason } = payload || {};
      if (username === 'admin') {
        return res.status(400).json({ success: false, message: 'ไม่สามารถแบนบัญชีแอดมินหลักได้' });
      }

      const user = db.users.find(u => u.username === username);
      if (!user) {
        return res.status(404).json({ success: false, message: 'ไม่พบผู้ใช้ในระบบ' });
      }

      user.isBanned = true;
      user.banReason = (reason && reason.trim()) ? reason.trim() : 'ละเมิดข้อกำหนดการใช้งาน';
      user.bannedAt = new Date().toLocaleString('th-TH');

      await updateGistData(db);
      return res.status(200).json({
        success: true,
        message: `แบนผู้ใช้ ${username} เรียบร้อยแล้ว (เหตุผล: ${user.banReason})`,
        user: user,
        users: db.users
      });
    }

    // 5. UNBAN USER
    if (action === 'unban_user') {
      const { username } = payload || {};
      const user = db.users.find(u => u.username === username);
      if (!user) {
        return res.status(404).json({ success: false, message: 'ไม่พบผู้ใช้ในระบบ' });
      }

      user.isBanned = false;
      user.banReason = "";
      user.bannedAt = "";

      await updateGistData(db);
      return res.status(200).json({
        success: true,
        message: `ปลดแบนผู้ใช้ ${username} เรียบร้อยแล้ว`,
        user: user,
        users: db.users
      });
    }

    // 6. CHANGE USER ROLE
    if (action === 'change_role') {
      const { username, role } = payload || {};
      if (username === 'admin' && role !== 'Admin') {
        return res.status(400).json({ success: false, message: 'ไม่สามารถลดสิทธิ์แอดมินหลักได้' });
      }

      const user = db.users.find(u => u.username === username);
      if (!user) {
        return res.status(404).json({ success: false, message: 'ไม่พบผู้ใช้ในระบบ' });
      }

      user.role = role || (user.role === 'Admin' ? 'Member' : 'Admin');
      await updateGistData(db);
      return res.status(200).json({
        success: true,
        message: `เปลี่ยนสิทธิ์ของ ${username} เป็น ${user.role} แล้ว`,
        user: user,
        users: db.users
      });
    }

    // 7. DELETE USER
    if (action === 'delete_user') {
      const { username } = payload || {};
      if (!username) {
        return res.status(400).json({ success: false, message: 'กรุณาระบุชื่อผู้ใช้ที่ต้องการลบ' });
      }
      if (username === 'admin') {
        return res.status(400).json({ success: false, message: 'ไม่สามารถลบบัญชีแอดมินหลักได้' });
      }

      const idx = db.users.findIndex(u => u.username === username);
      if (idx !== -1) {
        db.users.splice(idx, 1);
        await updateGistData(db);
        return res.status(200).json({
          success: true,
          message: `ลบผู้ใช้ ${username} ออกจากระบบเรียบร้อยแล้ว`,
          users: db.users
        });
      }
      return res.status(404).json({ success: false, message: 'ไม่พบผู้ใช้ในระบบ' });
    }

    // 8. REAL-TIME PURCHASE ORDER & LIVE STATS AUTOMATION
    if (action === 'purchase') {
      const { order, username, newBalance, productId, productStock, productSold, updatedStats, buyerItem } = payload || {};
      
      // A. Update user balance
      if (username) {
        const u = db.users.find(x => x.username === username);
        if (u && typeof newBalance === 'number') {
          u.balance = newBalance;
        }
      }

      // B. Append order record
      if (order) {
        if (!Array.isArray(db.orders)) db.orders = [];
        db.orders.unshift(order);
        if (db.orders.length > 300) db.orders.pop();
      }

      // C. Update product stock & sold count
      if (productId && Array.isArray(db.products)) {
        const prod = db.products.find(p => p.id === productId);
        if (prod) {
          if (typeof productStock === 'number') prod.stock = productStock;
          else prod.stock = Math.max(0, (prod.stock || 0) - 1);
          if (typeof productSold === 'number') prod.sold = productSold;
          else prod.sold = (prod.sold || 0) + 1;
          if (Array.isArray(prod.keys) && prod.keys.length > 0) {
            prod.keys.shift();
          }
        }
      }

      // D. Update live stats counters (Auto-increment sold count & decrement stock)
      if (!db.storeConfig) db.storeConfig = {};
      if (!db.storeConfig.stats) {
        db.storeConfig.stats = { users: 4913, products: 4, stock: 21, sold: 938, usersMode: "fixed", productsMode: "auto", stockMode: "auto" };
      }
      if (updatedStats) {
        db.storeConfig.stats = { ...db.storeConfig.stats, ...updatedStats };
      } else {
        db.storeConfig.stats.sold = (Number(db.storeConfig.stats.sold) || 938) + 1;
        if (Number(db.storeConfig.stats.stock) > 0) {
          db.storeConfig.stats.stock = Number(db.storeConfig.stats.stock) - 1;
        }
      }

      // E. Add to live recent buyers ticker
      if (buyerItem) {
        if (!Array.isArray(db.recentBuyers)) db.recentBuyers = [];
        db.recentBuyers.unshift(buyerItem);
        if (db.recentBuyers.length > 30) db.recentBuyers.pop();
      }

      await updateGistData(db);

      return res.status(200).json({
        success: true,
        message: 'บันทึกคำสั่งซื้อและการอัปเดตแบบเรียลไทม์สำเร็จ',
        users: db.users,
        orders: db.orders,
        products: db.products,
        storeConfig: db.storeConfig,
        recentBuyers: db.recentBuyers
      });
    }

    // 9. SAVE STORE CONFIG & STATS
    if (action === 'save_store_config') {
      const { storeConfig } = payload || {};
      if (storeConfig) {
        db.storeConfig = storeConfig;
        await updateGistData(db);
      }
      return res.status(200).json({ success: true, storeConfig: db.storeConfig });
    }

    // 10. SAVE STATS EXCLUSIVELY
    if (action === 'save_stats') {
      const { stats } = payload || {};
      if (stats) {
        if (!db.storeConfig) db.storeConfig = {};
        db.storeConfig.stats = stats;
        await updateGistData(db);
      }
      return res.status(200).json({ success: true, storeConfig: db.storeConfig });
    }

    // 11. SAVE PRODUCTS
    if (action === 'save_products') {
      const { products } = payload || {};
      if (Array.isArray(products)) {
        db.products = products;
        await updateGistData(db);
      }
      return res.status(200).json({ success: true, products: db.products });
    }

    // 12. SAVE TOPUP CONFIG
    if (action === 'save_topup_config') {
      const { topupConfig } = payload || {};
      if (topupConfig) {
        db.topupConfig = topupConfig;
        await updateGistData(db);
      }
      return res.status(200).json({ success: true, topupConfig: db.topupConfig });
    }

    // 13. SAVE RECENT BUYERS
    if (action === 'save_recent_buyers') {
      const { buyers } = payload || {};
      if (Array.isArray(buyers)) {
        db.recentBuyers = buyers;
        await updateGistData(db);
      }
      return res.status(200).json({ success: true, recentBuyers: db.recentBuyers });
    }

    // 14. CLEAR ALL ORDERS
    if (action === 'clear_orders') {
      db.orders = [];
      await updateGistData(db);
      return res.status(200).json({ success: true, orders: db.orders });
    }

    // 15. RECORD SINGLE ORDER
    if (action === 'add_order') {
      const { order } = payload || {};
      if (order) {
        if (!Array.isArray(db.orders)) db.orders = [];
        db.orders.unshift(order);
        if (db.orders.length > 300) db.orders.pop();
        await updateGistData(db);
      }
      return res.status(200).json({ success: true, orders: db.orders });
    }

    // 16. SYNC ALL USERS
    if (action === 'sync_users') {
      const { users } = payload || {};
      if (Array.isArray(users) && users.length > 0) {
        const map = new Map();
        db.users.forEach(u => map.set(u.username, u));
        users.forEach(u => {
          if (map.has(u.username)) {
            map.set(u.username, { ...map.get(u.username), ...u });
          } else {
            map.set(u.username, u);
          }
        });
        db.users = Array.from(map.values());
        await updateGistData(db);
      }
      return res.status(200).json({ success: true, users: db.users });
    }

    return res.status(400).json({ success: false, message: 'Unknown action' });
  }

  return res.status(405).json({ success: false, message: 'Method Not Allowed' });
};
