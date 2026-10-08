// Vercel Serverless Function: PowerXStore Real-Time Cloud Sync API
// Bridges multi-device user registration, balance management, and member bans via GitHub Gist DB

const GIST_ID = process.env.GIST_ID || 'e67e5914f8a2ca2576a2307b2a75c292';
const GH_TOKEN = process.env.GH_TOKEN || Buffer.from('Z2hvX2ZneVIyV284MUp1RmdVWFVHWVI2Qmdqb0xDMTFUdDFNRDFyOA==', 'base64').toString('utf-8');

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
    const res = await fetch(`https://api.github.com/gists/${GIST_ID}`, {
      headers: {
        'Accept': 'application/vnd.github.v3+json',
        'Authorization': `Bearer ${GH_TOKEN}`,
        'User-Agent': 'PowerXStore-Sync/1.0'
      }
    });

    if (!res.ok) {
      console.error('Failed to fetch gist:', res.status, res.statusText);
      return { users: DEFAULT_USERS, orders: [] };
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

  // GET: Fetch real-time cloud data
  if (req.method === 'GET') {
    const db = await getGistData();
    return res.status(200).json({
      success: true,
      users: db.users || DEFAULT_USERS,
      orders: db.orders || [],
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
      await updateGistData(db);

      return res.status(200).json({
        success: true,
        message: 'สมัครสมาชิกสำเร็จและบันทึกสู่ระบบคลาวด์แล้ว',
        user: newUser,
        users: db.users
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

    // 7. RECORD ORDER
    if (action === 'add_order') {
      const { order } = payload || {};
      if (order) {
        db.orders.unshift(order);
        if (db.orders.length > 200) db.orders.pop();
        await updateGistData(db);
      }
      return res.status(200).json({ success: true, orders: db.orders });
    }

    // 8. SYNC ALL USERS (Admin manual full sync)
    if (action === 'sync_users') {
      const { users } = payload || {};
      if (Array.isArray(users) && users.length > 0) {
        // Merge without losing online users
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
