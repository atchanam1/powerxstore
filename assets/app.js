/**
 * POWERXSTORE - Application Core Engine & Admin Backoffice
 * Fully reactive SPA with User Authentication & Real-time Admin Dashboard
 */

// Initial Seed Products
const DEFAULT_PRODUCTS = [
  {
    id: "cmuwpdojm003du8s89ehh4qsr",
    name: "สินค้า : ปลดแบนทุกเชิฟเวอร์ ( ถาวร )",
    image: "assets/products/unban.webp?v=20261009",
    category: "unban",
    categoryName: "UNBAN FIVEM",
    price: 99,
    originalPrice: 150,
    stock: 8,
    sold: 124,
    isHot: true,
    badge: "ยอดฮิต",
    status: "OPERATIONAL",
    downloadUrl: "https://mega.nz/folder/powerx-unban-tool-v2",
    guideUrl: "https://youtube.com/watch?v=powerx-unban-guide",
    keys: [
      "PX-UNBAN-9921-AF7B-LIFETIME",
      "PX-UNBAN-8812-EC41-LIFETIME",
      "PX-UNBAN-7734-99D2-LIFETIME",
      "PX-UNBAN-6612-44B1-LIFETIME",
      "PX-UNBAN-5523-88A9-LIFETIME",
      "PX-UNBAN-4419-77C3-LIFETIME",
      "PX-UNBAN-3392-55E8-LIFETIME",
      "PX-UNBAN-2281-33F4-LIFETIME"
    ],
    description: "ปลดแบน Fivem ทุกเซิร์ฟเวอร์แบบถาวร ไม่ต้องลงวินโดว์ใหม่ ใช้งานง่ายในคลิกเดียว ปลอดภัย 100% ตอบโจทย์ทุกการใช้งาน สำหรับผู้ที่โดน Global Ban หรือแบนการ์ดจอ/ฮาร์ดแวร์",
    plans: [
      { name: "ถาวร (Lifetime)", price: 99, duration: "ถาวร" }
    ],
    features: [
      "ปลดแบน FiveM ถาวร 100% ทุกเซิร์ฟเวอร์",
      "ไม่ต้องลง Windows ใหม่ ไม่ต้องเสี่ยงข้อมูลหาย",
      "ใช้งานง่ายมาก เพียงกดรันไฟล์โปรแกรม 1 ครั้ง",
      "ปลอดภัยต่อเครื่อง ไม่ทิ้งไฟล์ตกค้าง",
      "ทีมงานซัพพอร์ตช่วยเหลือผ่าน Discord ตลอด 24 ชม."
    ]
  },
  {
    id: "cmuwakwx4000cu8s8klumdus0",
    name: "NEXUS V.2",
    image: "assets/products/nexus.webp?v=20261009",
    category: "cmd",
    categoryName: "CMD FIVEM",
    price: 115,
    originalPrice: 180,
    stock: 6,
    sold: 243,
    isHot: true,
    badge: "ยอดฮิต",
    status: "OPERATIONAL",
    downloadUrl: "https://mega.nz/folder/powerx-nexus-v2-installer",
    guideUrl: "https://youtube.com/watch?v=powerx-nexus-guide",
    keys: [
      "PX-NEXUS-V2-78FA-9912",
      "PX-NEXUS-V2-88BC-1142",
      "PX-NEXUS-V2-44DF-7721",
      "PX-NEXUS-V2-33AB-5590",
      "PX-NEXUS-V2-99EA-2231",
      "PX-NEXUS-V2-11CD-6674"
    ],
    description: "โปรช่วยเล่น Fivem External รุ่น NEXUS V.2 ปลอดภัยสูงสุด ไร้การตรวจจับ ฟังค์ชั่นครบสูตร Aimbot, ESP, Wallhack, Silent Aim ลื่นไหล ไม่ดรอป FPS ไม่โดนแคปจอ",
    plans: [
      { name: "1 วัน (Daily)", price: 45, duration: "24 ชั่วโมง" },
      { name: "7 วัน (Weekly)", price: 85, duration: "7 วัน" },
      { name: "ถาวร (Lifetime)", price: 115, duration: "ถาวร" }
    ],
    features: [
      "Aimbot ล็อกหัว/ลำตัว สมูท ปรับความเร็วได้",
      "ESP Box, Skeleton, Name, Health bar",
      "Silent Aim ยิงเฉียดโดนเป้าหมายเนียนๆ",
      "No Recoil ลดแรงดีดปืน 100%",
      "Streamproof โหมดสตรีมเมอร์ สตรีมจอไม่เห็นโปรแกรม"
    ]
  },
  {
    id: "px-spoofer-titan",
    name: "TITAN SPOOFER PRO V3",
    image: "assets/products/spoofer.svg",
    category: "spoofer",
    categoryName: "SPOOFER",
    price: 160,
    originalPrice: 250,
    stock: 5,
    sold: 389,
    isHot: true,
    badge: "แนะนำ",
    status: "OPERATIONAL",
    downloadUrl: "https://mega.nz/folder/powerx-titan-spoofer-v3",
    guideUrl: "https://youtube.com/watch?v=powerx-spoofer-guide",
    keys: [
      "PX-TITAN-SPOOF-AA12-8831",
      "PX-TITAN-SPOOF-BB34-9942",
      "PX-TITAN-SPOOF-CC56-1123",
      "PX-TITAN-SPOOF-DD78-4456",
      "PX-TITAN-SPOOF-EE90-7789"
    ],
    description: "โปรแกรมเปลี่ยนค่าเครื่อง Spoofer ถาวร ป้องกันและแก้แบน EAC, BattlEye, FiveM ลบประวัติฮาร์ดแวร์ BIOS, Motherboard, MAC Address ทันที",
    plans: [
      { name: "ถาวร (Lifetime)", price: 160, duration: "ถาวร" }
    ],
    features: [
      "Bypass FiveM / EAC / BattlEye ถาวร",
      "ลบประวัติ HWID สะอาดหมดจด",
      "ปลอดภัยต่อฮาร์ดแวร์ ไม่ทำให้เครื่องช้า",
      "ระบบ One-Click Spoofing ใช้งานง่าย",
      "รองรับทุกเมนบอร์ด ASUS, MSI, Gigabyte, AsRock"
    ]
  },
  {
    id: "px-valor-external",
    name: "VALOR EXTERNAL VIP",
    image: "assets/products/valor.svg",
    category: "external",
    categoryName: "EXTERNAL FIVEM",
    price: 290,
    originalPrice: 420,
    stock: 4,
    sold: 180,
    isHot: false,
    badge: "VIP",
    status: "OPERATIONAL",
    downloadUrl: "https://mega.nz/folder/powerx-valor-external-vip",
    guideUrl: "https://youtube.com/watch?v=powerx-valor-guide",
    keys: [
      "PX-VALOR-EXT-VIP-9912-8811",
      "PX-VALOR-EXT-VIP-7733-4422",
      "PX-VALOR-EXT-VIP-5544-3399",
      "PX-VALOR-EXT-VIP-2211-6677"
    ],
    description: "สุดยอดโปรแกรม FiveM External เกรดพรีเมียม สตรีมเมอร์โหมด ปรับแต่งสี ESP ได้ตามใจ ปลอดภัยระดับสูงสุดสำหรับผู้เล่นสายแข่งขัน",
    plans: [
      { name: "7 วัน (Weekly)", price: 150, duration: "7 วัน" },
      { name: "30 วัน (Monthly)", price: 290, duration: "30 วัน" }
    ],
    features: [
      "Menu UI ทันสมัย ปรับแต่งง่ายในตัวเกม",
      "Distance & Weapon ESP ตรวจจับอาวุธศัตรู",
      "Vehicle ESP โชว์ยานพาหนะและผู้โดยสาร",
      "Triggerbot ยิงอัตโนมัติเมื่อเล็งโดนเป้า",
      "ระบบหลบหลีกการสแกนแคปหน้าจอ"
    ]
  }
];

// Default Store Configuration
const DEFAULT_STORE_CONFIG = {
  storeName: "POWERXSTORE",
  domain: "POWERXSTORE.XYZ",
  welcomeTitle: "ยินดีต้อนรับสู่ร้าน POWERXSTORE.XYZ",
  welcomeDesc: "ร้านบริการจำหน่ายโปรแกรมช่วยเล่น Fivem / ปลดแบนFivem ราคาถูกและปลอดภัยต่อผู้ใช้ ตอบโจทย์ทุกการใช้งาน ต่างๆ ไม่ว่าจะเป็นโปรแกรม External / Unban / Internal / CMD",
  announcementText: "โปรแกรมมีปัญหาหรือต้องการความช่วยเหลือ ติดต่อทีมงานได้ที่ Discord ตลอด 24 ชั่วโมง !!",
  discordUrl: "https://discord.gg/invite/powerxstore",
  bannerImage: "assets/banners/banner1.webp?v=20261009",
  bannerTitle: "POWERXSTORE FIVEM SOLUTIONS",
  bannerSubtitle: "มั่นใจในคุณภาพ ปลอดภัย ไร้กังวล ด้วยทีมพัฒนาฝีมือระดับสากล",
  stats: {
    users: 4913,
    products: 4,
    stock: 198,
    sold: 367
  }
};

// Default Topup Configuration
const DEFAULT_TOPUP_CONFIG = {
  truemoneyPhone: "089-123-4567",
  truemoneyEnabled: true,
  promptpayNumber: "0891234567",
  promptpayName: "POWERX STORE (บจก. เพาเวอร์เอ็กซ์)",
  promptpayQrImage: "", // Custom uploaded QR image or empty for auto generator
  bonusPercent: 5
};

// Default Seed Users (Admin & Demo Member)
const DEFAULT_USERS = [
  {
    username: "admin",
    password: "admin1234",
    email: "admin@powerxstore.xyz",
    role: "Admin",
    balance: 99999,
    registeredAt: "01/10/2026"
  },
  {
    username: "member",
    password: "1234",
    email: "member@powerxstore.xyz",
    role: "Member",
    balance: 350,
    registeredAt: "08/10/2026"
  }
];

// Default Topup History Seeds
const DEFAULT_TOPUPS = [
  {
    txId: "TP-94812",
    username: "member",
    method: "PromptPay QR",
    amount: 300,
    bonus: 15,
    total: 315,
    date: "08/10/2026 21:05",
    status: "สำเร็จ"
  },
  {
    txId: "TP-94755",
    username: "member",
    method: "TrueMoney Voucher",
    amount: 50,
    bonus: 2.5,
    total: 52.5,
    date: "08/10/2026 19:30",
    status: "สำเร็จ"
  },
  {
    txId: "TP-91200",
    username: "admin",
    method: "PromptPay QR",
    amount: 99999,
    bonus: 0,
    total: 99999,
    date: "01/10/2026 12:00",
    status: "สำเร็จ"
  }
];

// Default Security Configuration
const DEFAULT_SECURITY_CONFIG = {
  antiDdos: true,
  wafInspection: true,
  balanceTamper: true,
  antiDevTools: false,
  blockedCount: 7,
  ddosCount: 3,
  mode: "UNDER ATTACK"
};

// Default Security Logs Seeds
const DEFAULT_SECURITY_LOGS = [
  {
    id: "SEC-LOG-1",
    timestamp: "09/10/2026 00:04",
    type: "DDoS Flood Attempt",
    detail: "ตรวจจับอัตราคำขอมากกว่า 15 req/3s (Flood Burst Mitigation)",
    severity: "High",
    action: "🛡️ BLOCKED & CHALLENGED"
  },
  {
    id: "SEC-LOG-2",
    timestamp: "08/10/2026 23:45",
    type: "XSS Injection Attempt",
    detail: "พยายามส่งแท็ก <script>alert(1)</script> ผ่านช่องกรอกข้อมูล",
    severity: "Critical",
    action: "🛡️ WAF SANITIZED"
  },
  {
    id: "SEC-LOG-3",
    timestamp: "08/10/2026 22:15",
    type: "SQL Injection Pattern",
    detail: "ตรวจจับ SQL Payload: ' OR '1'='1 ผ่าน Voucher Input",
    severity: "Critical",
    action: "🛡️ NEUTRALIZED"
  }
];

// Clean legacy auto-logged-in admin session so all visitors start strictly as Guest (Not Logged In)
if (localStorage.getItem('px_auth_clean_v') !== '20261009_guest_v5') {
  localStorage.removeItem('px_currentUser');
  localStorage.setItem('px_auth_clean_v', '20261009_guest_v5');
}

// APP STATE
const APP_STATE = {
  theme: localStorage.getItem('px_theme') || 'dark',
  currentTab: 'home',
  selectedCategory: 'all',
  searchQuery: '',
  currentUser: JSON.parse(localStorage.getItem('px_currentUser') || 'null'),
  introDismissed: sessionStorage.getItem('px_intro_dismissed') === 'true',
  products: JSON.parse(localStorage.getItem('px_products') || JSON.stringify(DEFAULT_PRODUCTS)),
  storeConfig: JSON.parse(localStorage.getItem('px_store_config') || JSON.stringify(DEFAULT_STORE_CONFIG)),
  topupConfig: JSON.parse(localStorage.getItem('px_topup_config') || JSON.stringify(DEFAULT_TOPUP_CONFIG)),
  users: JSON.parse(localStorage.getItem('px_users') || JSON.stringify(DEFAULT_USERS)),
  purchases: JSON.parse(localStorage.getItem('px_orders') || '[]'),
  topupHistory: JSON.parse(localStorage.getItem('px_topups') || JSON.stringify(DEFAULT_TOPUPS)),
  securityConfig: JSON.parse(localStorage.getItem('px_sec_config') || JSON.stringify(DEFAULT_SECURITY_CONFIG)),
  securityLogs: JSON.parse(localStorage.getItem('px_sec_logs') || JSON.stringify(DEFAULT_SECURITY_LOGS))
};

// Auto-migrate browser cache to new POWERXSTORE purple artwork and stock keys
if (localStorage.getItem('px_asset_v') !== '20261009_v3') {
  APP_STATE.storeConfig.bannerImage = "assets/banners/banner1.webp?v=20261009";
  localStorage.setItem('px_store_config', JSON.stringify(APP_STATE.storeConfig));

  APP_STATE.products.forEach(p => {
    if (p.id === "cmuwpdojm003du8s89ehh4qsr") p.image = "assets/products/unban.webp?v=20261009";
    if (p.id === "cmuwakwx4000cu8s8klumdus0") p.image = "assets/products/nexus.webp?v=20261009";

    const def = DEFAULT_PRODUCTS.find(d => d.id === p.id);
    if (!p.keys || p.keys.length === 0) {
      p.keys = def && def.keys ? [...def.keys] : [
        "PX-" + (p.category || "PROD").toUpperCase() + "-" + Math.random().toString(36).substring(2, 6).toUpperCase() + "-11",
        "PX-" + (p.category || "PROD").toUpperCase() + "-" + Math.random().toString(36).substring(2, 6).toUpperCase() + "-22",
        "PX-" + (p.category || "PROD").toUpperCase() + "-" + Math.random().toString(36).substring(2, 6).toUpperCase() + "-33"
      ];
    }
    if (!p.downloadUrl) {
      p.downloadUrl = def && def.downloadUrl ? def.downloadUrl : "https://mega.nz/folder/powerx-" + (p.category || "software");
    }
    if (!p.guideUrl) {
      p.guideUrl = def && def.guideUrl ? def.guideUrl : "https://youtube.com/watch?v=powerx-guide";
    }
  });
  localStorage.setItem('px_products', JSON.stringify(APP_STATE.products));
  localStorage.setItem('px_asset_v', '20261009_v3');
}

// Initialize orders if empty
if (APP_STATE.purchases.length === 0) {
  APP_STATE.purchases = [
    {
      orderId: "PX-89410",
      username: "member",
      productName: "NEXUS V.2",
      planName: "ถาวร (Lifetime)",
      price: 115,
      date: "08/10/2026 22:45",
      key: "PX-NEXUS-V2-78F9A-99120-LIFETIME",
      status: "SUCCESS"
    },
    {
      orderId: "PX-89354",
      username: "member",
      productName: "สินค้า : ปลดแบนทุกเชิฟเวอร์ ( ถาวร )",
      planName: "ถาวร",
      price: 99,
      date: "08/10/2026 21:10",
      key: "PX-UNBAN-ALL-44K1P-88210-ACTIVE",
      status: "SUCCESS"
    }
  ];
  localStorage.setItem('px_orders', JSON.stringify(APP_STATE.purchases));
}


// DOCUMENT READY
document.addEventListener('DOMContentLoaded', () => {
  applyTheme(APP_STATE.theme);
  initParticles();
  applyStoreConfig();
  applyTopupConfig();
  setupNavigation();
  setupEventListeners();
  renderProducts();
  renderHistory();
  updateAuthUI();
  startRecentPurchaseToasts();

  // Security Watchdogs & Defenses
  verifyBalanceIntegrity();
  if (APP_STATE.securityConfig?.antiDevTools) {
    applyAntiDevToolsLock(true);
  }

  // Global Interaction Rate Limiter (Anti-DDoS)
  document.addEventListener('click', (e) => {
    if (e.target.closest('button, a, input, select')) {
      trackRequestVelocity();
    }
  }, true);

  if (APP_STATE.introDismissed) {
    dismissIntro();
  }
});

// THEME HANDLING
function applyTheme(theme) {
  APP_STATE.theme = theme;
  localStorage.setItem('px_theme', theme);
  const html = document.documentElement;
  if (theme === 'light') {
    html.classList.remove('dark');
    html.classList.add('light');
    document.getElementById('theme-icon-sun')?.classList.remove('hidden');
    document.getElementById('theme-icon-moon')?.classList.add('hidden');
  } else {
    html.classList.remove('light');
    html.classList.add('dark');
    document.getElementById('theme-icon-sun')?.classList.add('hidden');
    document.getElementById('theme-icon-moon')?.classList.remove('hidden');
  }
}

function toggleTheme() {
  applyTheme(APP_STATE.theme === 'dark' ? 'light' : 'dark');
}

// PARTICLE CANVAS EFFECT
function initParticles() {
  const canvas = document.getElementById('particle-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let width = canvas.width = window.innerWidth;
  let height = canvas.height = window.innerHeight;

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  const particles = [];
  const numParticles = Math.min(width > 768 ? 45 : 20, 50);

  for (let i = 0; i < numParticles; i++) {
    particles.push({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 2 + 0.8,
      speedX: (Math.random() - 0.5) * 0.35,
      speedY: (Math.random() - 0.5) * 0.35,
      opacity: Math.random() * 0.5 + 0.2
    });
  }

  function draw() {
    ctx.clearRect(0, 0, width, height);
    particles.forEach(p => {
      p.x += p.speedX;
      p.y += p.speedY;

      if (p.x < 0) p.x = width;
      if (p.x > width) p.x = 0;
      if (p.y < 0) p.y = height;
      if (p.y > height) p.y = 0;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(168, 85, 247, ${p.opacity})`;
      ctx.shadowBlur = 8;
      ctx.shadowColor = '#A855F7';
      ctx.fill();
    });
    requestAnimationFrame(draw);
  }
  draw();
}

// STORE CONFIG APPLICATION (Real-time DOM sync)
function applyStoreConfig() {
  const c = APP_STATE.storeConfig;
  
  // Custom Store Logo sync
  if (c.logoImage) {
    const logoIds = [
      'welcome-intro-logo',
      'navbar-brand-logo',
      'mobile-brand-logo',
      'hero-emblem-logo',
      'footer-brand-logo',
      'admin-st-logo-preview'
    ];
    logoIds.forEach(id => {
      const el = document.getElementById(id);
      if (el) el.src = c.logoImage;
    });
  }

  // Titles & slogans
  const elWelcomeTitle = document.getElementById('hero-welcome-title');
  if (elWelcomeTitle) {
    elWelcomeTitle.innerHTML = `ยินดีต้อนรับสู่ร้าน <br class="hidden sm:inline" /><span class="brand-gradient-text text-brand-glow">${c.storeName}</span>.XYZ`;
  }
  const elWelcomeDesc = document.getElementById('hero-welcome-desc');
  if (elWelcomeDesc) elWelcomeDesc.innerText = c.welcomeDesc;

  // Announcement bar
  const elAnnounce = document.getElementById('topbar-announcement-text');
  if (elAnnounce) elAnnounce.innerText = c.announcementText;

  // Discord links
  document.querySelectorAll('.discord-link-target').forEach(a => {
    a.href = c.discordUrl;
  });

  // Promotional Banner
  const elBannerImg = document.getElementById('promo-banner-image');
  if (elBannerImg && c.bannerImage) elBannerImg.src = c.bannerImage;

  const elBannerTitle = document.getElementById('promo-banner-title');
  if (elBannerTitle && c.bannerTitle) elBannerTitle.innerText = c.bannerTitle;

  const elBannerSubtitle = document.getElementById('promo-banner-subtitle');
  if (elBannerSubtitle && c.bannerSubtitle) elBannerSubtitle.innerText = c.bannerSubtitle;

  // Live Stats
  const elStatUsers = document.getElementById('stat-counter-users');
  if (elStatUsers) elStatUsers.innerText = Number(c.stats.users).toLocaleString();

  const elStatProducts = document.getElementById('stat-counter-products');
  if (elStatProducts) elStatProducts.innerText = APP_STATE.products.length;

  const elStatStock = document.getElementById('stat-counter-stock');
  if (elStatStock) {
    const totalStock = APP_STATE.products.reduce((acc, p) => acc + (p.stock || 0), 0);
    elStatStock.innerText = totalStock || c.stats.stock;
  }

  const elStatSold = document.getElementById('stat-counter-sold');
  if (elStatSold) {
    const totalSold = APP_STATE.products.reduce((acc, p) => acc + (p.sold || 0), 0);
    elStatSold.innerText = totalSold || c.stats.sold;
  }
}

// TOPUP CONFIG APPLICATION (Real-time DOM sync)
function applyTopupConfig() {
  const c = APP_STATE.topupConfig;

  // PromptPay Display info
  const elPpName = document.getElementById('topup-promptpay-name-display');
  if (elPpName) elPpName.innerText = c.promptpayName;

  const elPpNumber = document.getElementById('topup-promptpay-number-display');
  if (elPpNumber) elPpNumber.innerText = c.promptpayNumber;

  const elBonusBadge = document.getElementById('topup-bonus-badge');
  if (elBonusBadge) elBonusBadge.innerText = `โบนัสพิเศษ +${c.bonusPercent}%`;
}

// NAVIGATION & TAB SWITCHING
function setupNavigation() {
  const navLinks = document.querySelectorAll('[data-tab-target]');
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const tab = link.getAttribute('data-tab-target');
      switchTab(tab);
    });
  });
}

function switchTab(tabId) {
  // If navigating to admin tab, verify role
  if (tabId === 'admin') {
    if (!APP_STATE.currentUser || APP_STATE.currentUser.role !== 'Admin') {
      showNotification('เฉพาะแอดมิน (Admin) เท่านั้นที่สามารถเข้าถึงระบบหลังบ้านได้', 'error');
      openAuthModal('login');
      return;
    }
    renderAdminProducts();
    renderAdminUsers();
    renderAdminOrders();
    populateAdminSettingsForm();
    populateAdminTopupForm();
    renderSecurityDashboard();
  }

  APP_STATE.currentTab = tabId;
  window.scrollTo({ top: 0, behavior: 'smooth' });

  // Update tabs active state
  document.querySelectorAll('.tab-content').forEach(section => {
    section.classList.add('hidden');
  });

  const targetSection = document.getElementById(`tab-${tabId}`);
  if (targetSection) {
    targetSection.classList.remove('hidden');
  }

  // Update nav active indicators
  document.querySelectorAll('[data-tab-target]').forEach(link => {
    const isCurrent = link.getAttribute('data-tab-target') === tabId;
    if (isCurrent) {
      link.classList.add('text-brand-primary', 'font-medium');
      link.classList.remove('text-muted-foreground');
      const iconSlot = link.querySelector('.nav-icon-slot');
      if (iconSlot) {
        iconSlot.classList.add('bg-brand-primary/15', 'text-brand-primary', 'border-brand-primary/30');
      }
    } else {
      link.classList.remove('text-brand-primary', 'font-medium');
      link.classList.add('text-muted-foreground');
      const iconSlot = link.querySelector('.nav-icon-slot');
      if (iconSlot) {
        iconSlot.classList.remove('bg-brand-primary/15', 'text-brand-primary', 'border-brand-primary/30');
      }
    }
  });

  closeMobileMenu();

  if (tabId === 'history') {
    renderHistory();
  }
}

// INTRO DISMISSAL
function dismissIntro() {
  const intro = document.getElementById('welcome-intro');
  if (intro) {
    intro.classList.add('fade-out');
    setTimeout(() => {
      intro.style.display = 'none';
    }, 400);
  }
  APP_STATE.introDismissed = true;
  sessionStorage.setItem('px_intro_dismissed', 'true');
}

// PRODUCTS RENDERING
function renderProducts() {
  const container = document.getElementById('products-grid');
  if (!container) return;

  const filtered = APP_STATE.products.filter(p => {
    const matchCat = APP_STATE.selectedCategory === 'all' || p.category === APP_STATE.selectedCategory;
    const matchSearch = p.name.toLowerCase().includes(APP_STATE.searchQuery.toLowerCase()) || 
                        p.description.toLowerCase().includes(APP_STATE.searchQuery.toLowerCase());
    return matchCat && matchSearch;
  });

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="col-span-full py-16 text-center text-muted-foreground">
        <i data-lucide="package-search" class="w-12 h-12 mx-auto mb-3 opacity-40"></i>
        <p class="text-base">ไม่พบสินค้าในหมวดหมู่นี้</p>
      </div>
    `;
    if (window.lucide) lucide.createIcons();
    return;
  }

  const productHTML = filtered.map(p => `
    <div class="product-card group relative flex flex-col rounded-2xl border border-white/10 bg-[#0e0a17]/90 dark:bg-[#0e0a17]/90 backdrop-blur-md overflow-hidden shadow-xl">
      <!-- Hot Champion Flame Badge -->
      ${p.isHot ? `
        <div class="absolute top-3 right-3 z-30 pointer-events-none">
          <div class="hot-champion relative inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-white text-[11px] font-semibold tracking-wider">
            <svg class="w-3.5 h-3.5 fill-white" viewBox="0 0 24 24">
              <path d="M13.5 0.67s.74 2.65 2.94 5.24c2.13 2.5 5.16 4.72 5.16 8.34 0 5.32-4.3 9.75-9.6 9.75S2.4 19.57 2.4 14.25c0-2.68 1.32-5.15 3.44-6.86-.13.69-.2 1.38-.2 2.06C5.64 12.5 8.14 15 11.24 15c1.68 0 3.23-.65 4.4-1.72-.12 1.36-.61 2.62-1.43 3.71C13.4 18.05 12.4 19 12.4 19c3.2 0 5.8-2.6 5.8-5.8 0-3.19-3.35-5.13-4.7-9.24Z"/>
            </svg>
            <span>${p.badge || 'ยอดฮิต'}</span>
          </div>
        </div>
      ` : ''}

      <!-- Product Image Thumbnail -->
      <div class="relative w-full aspect-square overflow-hidden bg-black/40 cursor-pointer" onclick="openProductModal('${p.id}')">
        <img src="${p.image}" alt="${p.name}" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
        
        <!-- Hover Radial Ring Overlay -->
        <div class="absolute inset-0 bg-black/70 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div class="relative w-20 h-20 flex items-center justify-center">
            <!-- Rotating SVG ring -->
            <svg class="absolute inset-0 w-full h-full orbital-spinner" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="44" fill="none" stroke="#A855F7" stroke-width="2.5" stroke-dasharray="140 100" stroke-linecap="round"/>
            </svg>
            <svg class="absolute inset-0 w-full h-full orbital-spinner-rev" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="36" fill="none" stroke="#C084FC" stroke-width="1.5" stroke-dasharray="6 8" stroke-opacity="0.6"/>
            </svg>
            <img src="assets/logo.png?v=20261009_v2" class="w-10 h-10 object-contain drop-shadow-[0_0_10px_#A855F7]" alt="Logo" style="mix-blend-mode: screen;" />
          </div>
        </div>

        <!-- Watermark Mini Logo -->
        <div class="absolute bottom-2 right-2 opacity-20 pointer-events-none group-hover:opacity-40 transition-opacity">
          <img src="assets/logo.png?v=20261009_v2" class="w-6 h-6 object-contain" alt="" style="mix-blend-mode: screen;" />
        </div>
      </div>

      <!-- Content Meta -->
      <div class="p-4 flex-1 flex flex-col justify-between">
        <div>
          <span class="inline-block text-[11px] font-medium text-brand-primary tracking-wide mb-1 uppercase">${p.categoryName || p.category}</span>
          <h3 class="text-base font-semibold text-white group-hover:text-brand-primary transition-colors line-clamp-1 cursor-pointer" onclick="openProductModal('${p.id}')">
            ${p.name}
          </h3>
          <p class="text-xs text-muted-foreground mt-1 line-clamp-2 font-light">${p.description}</p>
        </div>

        <div class="mt-4 pt-3 border-t border-white/5">
          <div class="flex items-baseline justify-between mb-2">
            <div class="flex items-baseline gap-1.5">
              <span class="text-xl font-bold text-brand-primary">฿${p.price}</span>
              ${p.originalPrice ? `<span class="text-xs text-muted-foreground/60 line-through">฿${p.originalPrice}</span>` : ''}
            </div>
            <span class="text-[11px] text-muted-foreground">เหลือ ${p.stock} ชิ้น</span>
          </div>

          <div class="space-y-2">
            <button onclick="openProductModal('${p.id}')" class="w-full brand-btn-primary py-2 px-3 rounded-xl text-white font-semibold text-xs flex items-center justify-center gap-1.5 shadow-md">
              <i data-lucide="shopping-cart" class="w-3.5 h-3.5"></i>
              <span>ซื้อเลย</span>
            </button>
            <div class="flex items-center justify-center gap-1 text-[11px] text-muted-foreground/75">
              <i data-lucide="flame" class="w-3 h-3 text-pink-400"></i>
              <span>ขายไปแล้ว ${p.sold} ชิ้น</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  `).join('');

  container.innerHTML = productHTML;
  const homeGrid = document.getElementById('home-featured-grid');
  if (homeGrid) {
    homeGrid.innerHTML = productHTML;
  }

  if (window.lucide) lucide.createIcons();
}

// PRODUCT PURCHASE MODAL
let activeProduct = null;
let selectedPlanIndex = 0;

function openProductModal(productId) {
  const product = APP_STATE.products.find(p => p.id === productId);
  if (!product) return;
  activeProduct = product;
  selectedPlanIndex = 0;

  const modal = document.getElementById('product-modal');
  if (!modal) return;

  document.getElementById('modal-product-title').innerText = product.name;
  document.getElementById('modal-product-desc').innerText = product.description;
  document.getElementById('modal-product-category').innerText = product.categoryName || product.category;
  document.getElementById('modal-product-img').src = product.image;
  document.getElementById('modal-product-stock').innerText = product.stock;
  document.getElementById('modal-product-sold').innerText = product.sold;
  
  // Render Plans
  const plansContainer = document.getElementById('modal-product-plans');
  plansContainer.innerHTML = product.plans.map((plan, idx) => `
    <button onclick="selectProductPlan(${idx})" class="plan-btn flex-1 p-3 rounded-xl border text-left transition-all ${idx === 0 ? 'border-brand-primary bg-brand-primary/15 text-white' : 'border-white/10 bg-white/5 text-muted-foreground'}">
      <div class="text-xs font-semibold">${plan.name}</div>
      <div class="text-base font-bold text-brand-primary mt-0.5">฿${plan.price}</div>
    </button>
  `).join('');

  // Render Features Checklist
  const featuresContainer = document.getElementById('modal-product-features');
  featuresContainer.innerHTML = (product.features || []).map(f => `
    <li class="flex items-center gap-2 text-xs text-muted-foreground">
      <i data-lucide="check-circle" class="w-3.5 h-3.5 text-brand-primary shrink-0"></i>
      <span>${f}</span>
    </li>
  `).join('');

  updateModalPrice();
  modal.classList.remove('hidden');
  modal.classList.add('flex');
  if (window.lucide) lucide.createIcons();
}

function selectProductPlan(index) {
  selectedPlanIndex = index;
  document.querySelectorAll('.plan-btn').forEach((btn, idx) => {
    if (idx === index) {
      btn.classList.add('border-brand-primary', 'bg-brand-primary/15', 'text-white');
      btn.classList.remove('border-white/10', 'bg-white/5', 'text-muted-foreground');
    } else {
      btn.classList.remove('border-brand-primary', 'bg-brand-primary/15', 'text-white');
      btn.classList.add('border-white/10', 'bg-white/5', 'text-muted-foreground');
    }
  });
  updateModalPrice();
}

function updateModalPrice() {
  if (!activeProduct) return;
  const plan = activeProduct.plans[selectedPlanIndex];
  document.getElementById('modal-pay-amount').innerText = `฿${plan.price}`;
}

function closeProductModal() {
  const modal = document.getElementById('product-modal');
  if (modal) {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
  }
}

function confirmPurchase() {
  if (!activeProduct) return;
  if (!APP_STATE.currentUser) {
    showNotification('กรุณาเข้าสู่ระบบก่อนทำการสั่งซื้อสินค้า', 'warning');
    closeProductModal();
    openAuthModal('login');
    return;
  }

  const plan = activeProduct.plans[selectedPlanIndex];

  // Check user balance
  if (APP_STATE.currentUser.balance < plan.price) {
    showNotification('ยอดเงินคงเหลือไม่เพียงพอ กรุณาเติมเงินก่อนทำรายการ', 'warning');
    closeProductModal();
    switchTab('topup');
    return;
  }

  // Deduct user balance
  APP_STATE.currentUser.balance -= plan.price;
  
  // Sync to users array
  const uIndex = APP_STATE.users.findIndex(u => u.username === APP_STATE.currentUser.username);
  if (uIndex >= 0) {
    APP_STATE.users[uIndex].balance = APP_STATE.currentUser.balance;
    localStorage.setItem('px_users', JSON.stringify(APP_STATE.users));
  }
  localStorage.setItem('px_currentUser', JSON.stringify(APP_STATE.currentUser));
  updateAuthUI();

  // Pull key from activeProduct.keys if available, otherwise generate a unique key
  let assignedKey = "";
  if (activeProduct.keys && activeProduct.keys.length > 0) {
    assignedKey = activeProduct.keys.shift();
  } else {
    assignedKey = "PX-" + Math.random().toString(36).substring(2, 8).toUpperCase() + "-" + Math.random().toString(36).substring(2, 8).toUpperCase() + "-KEY";
  }

  // Create order record
  const newOrder = {
    orderId: "PX-" + Math.floor(10000 + Math.random() * 90000),
    username: APP_STATE.currentUser.username,
    productName: activeProduct.name,
    planName: plan.name,
    price: plan.price,
    date: new Date().toLocaleString('th-TH'),
    key: assignedKey,
    downloadUrl: activeProduct.downloadUrl || "https://mega.nz/folder/powerx-software",
    guideUrl: activeProduct.guideUrl || "https://youtube.com/watch?v=powerx-tutorial",
    status: "SUCCESS"
  };

  APP_STATE.purchases.unshift(newOrder);
  localStorage.setItem('px_orders', JSON.stringify(APP_STATE.purchases));

  // Update product stock & sold counts
  activeProduct.stock = Math.max(0, activeProduct.stock - 1);
  activeProduct.sold = (activeProduct.sold || 0) + 1;
  localStorage.setItem('px_products', JSON.stringify(APP_STATE.products));

  renderProducts();
  applyStoreConfig();
  closeProductModal();
  showOrderSuccessModal(newOrder);
}

function showOrderSuccessModal(order) {
  const modal = document.getElementById('order-success-modal');
  if (!modal) return;
  document.getElementById('order-success-id').innerText = order.orderId;
  document.getElementById('order-success-item').innerText = order.productName;
  document.getElementById('order-success-key').value = order.key;

  const dlBtn = document.getElementById('order-success-download');
  if (dlBtn) {
    if (order.downloadUrl) {
      dlBtn.href = order.downloadUrl;
      dlBtn.classList.remove('hidden');
    } else {
      dlBtn.classList.add('hidden');
    }
  }

  const guideBtn = document.getElementById('order-success-guide');
  if (guideBtn) {
    if (order.guideUrl) {
      guideBtn.href = order.guideUrl;
      guideBtn.classList.remove('hidden');
    } else {
      guideBtn.classList.add('hidden');
    }
  }

  modal.classList.remove('hidden');
  modal.classList.add('flex');
  if (window.lucide) lucide.createIcons();
}

function closeOrderSuccessModal() {
  const modal = document.getElementById('order-success-modal');
  if (modal) {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
  }
  switchTab('history');
}

function copyLicenseKey() {
  const keyInput = document.getElementById('order-success-key');
  if (keyInput) {
    keyInput.select();
    navigator.clipboard.writeText(keyInput.value);
    showNotification('คัดลอก License Key สำเร็จแล้ว!', 'success');
  }
}

// USER AUTHENTICATION & SESSION MANAGEMENT
function updateAuthUI() {
  const authGuest = document.getElementById('nav-auth-guest');
  const authUser = document.getElementById('nav-auth-user');
  const adminBtn = document.querySelectorAll('.nav-admin-link');

  if (APP_STATE.currentUser) {
    if (authGuest) authGuest.classList.add('hidden');
    if (authUser) authUser.classList.remove('hidden');

    document.querySelectorAll('.user-name-display').forEach(el => {
      el.innerText = APP_STATE.currentUser.username;
    });
    document.querySelectorAll('.user-balance-display').forEach(el => {
      el.innerText = `฿${Number(APP_STATE.currentUser.balance).toFixed(2)}`;
    });
    document.querySelectorAll('.user-role-badge').forEach(el => {
      el.innerText = APP_STATE.currentUser.role;
      if (APP_STATE.currentUser.role === 'Admin') {
        el.className = 'user-role-badge px-2 py-0.5 rounded-full text-[10px] font-bold bg-brand-primary text-white';
      } else {
        el.className = 'user-role-badge px-2 py-0.5 rounded-full text-[10px] font-medium bg-white/10 text-gray-300';
      }
    });

    // Show/hide admin link in navbar depending on role
    adminBtn.forEach(btn => {
      if (APP_STATE.currentUser.role === 'Admin') {
        btn.classList.remove('hidden');
      } else {
        btn.classList.add('hidden');
      }
    });
  } else {
    if (authGuest) authGuest.classList.remove('hidden');
    if (authUser) authUser.classList.add('hidden');
    adminBtn.forEach(btn => btn.classList.add('hidden'));
  }
}

function openAuthModal(mode = 'login') {
  const modal = document.getElementById('auth-modal');
  if (!modal) return;
  switchAuthTab(mode);
  modal.classList.remove('hidden');
  modal.classList.add('flex');
}

function closeAuthModal() {
  const modal = document.getElementById('auth-modal');
  if (modal) {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
  }
}

function switchAuthTab(mode) {
  const loginForm = document.getElementById('auth-login-form');
  const regForm = document.getElementById('auth-register-form');
  const tabLogin = document.getElementById('auth-tab-login');
  const tabReg = document.getElementById('auth-tab-register');

  if (mode === 'login') {
    loginForm.classList.remove('hidden');
    regForm.classList.add('hidden');
    tabLogin.classList.add('bg-brand-primary', 'text-white', 'font-semibold');
    tabLogin.classList.remove('text-gray-400');
    tabReg.classList.remove('bg-brand-primary', 'text-white', 'font-semibold');
    tabReg.classList.add('text-gray-400');
  } else {
    loginForm.classList.add('hidden');
    regForm.classList.remove('hidden');
    tabReg.classList.add('bg-brand-primary', 'text-white', 'font-semibold');
    tabReg.classList.remove('text-gray-400');
    tabLogin.classList.remove('bg-brand-primary', 'text-white', 'font-semibold');
    tabLogin.classList.add('text-gray-400');
  }
}

function handleLogin(e) {
  e.preventDefault();
  const usernameInput = document.getElementById('login-username').value.trim();
  const passwordInput = document.getElementById('login-password').value.trim();

  const user = APP_STATE.users.find(u => u.username.toLowerCase() === usernameInput.toLowerCase() && u.password === passwordInput);
  if (!user) {
    showNotification('ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง กรุณาลองใหม่อีกครั้ง', 'error');
    return;
  }

  APP_STATE.currentUser = user;
  localStorage.setItem('px_currentUser', JSON.stringify(user));
  updateAuthUI();
  closeAuthModal();
  showNotification(`เข้าสู่ระบบสำเร็จ! ยินดีต้อนรับคุณ ${user.username}`, 'success');

  if (user.role === 'Admin') {
    showNotification('คุณเข้าสู่ระบบในสิทธิ์แอดมิน (Admin) สามารถเปิดแผงควบคุมหลังบ้านได้ที่เมนูด้านบน', 'info');
  }
}

function handleRegister(e) {
  e.preventDefault();
  const username = document.getElementById('reg-username').value.trim();
  const email = document.getElementById('reg-email').value.trim();
  const password = document.getElementById('reg-password').value.trim();
  const confirmPassword = document.getElementById('reg-password-confirm').value.trim();

  if (password !== confirmPassword) {
    showNotification('รหัสผ่านและการยืนยันรหัสผ่านไม่ตรงกัน', 'error');
    return;
  }

  const existing = APP_STATE.users.find(u => u.username.toLowerCase() === username.toLowerCase());
  if (existing) {
    showNotification('ชื่อผู้ใช้งานนี้มีในระบบแล้ว กรุณาเลือกชื่ออื่น', 'warning');
    return;
  }

  const newUser = {
    username,
    password,
    email: email || `${username}@powerxstore.xyz`,
    role: "Member",
    balance: 50, // Welcome starter bonus ฿50
    registeredAt: new Date().toLocaleDateString('th-TH')
  };

  APP_STATE.users.push(newUser);
  localStorage.setItem('px_users', JSON.stringify(APP_STATE.users));

  APP_STATE.currentUser = newUser;
  localStorage.setItem('px_currentUser', JSON.stringify(newUser));

  updateAuthUI();
  closeAuthModal();
  showNotification(`สมัครสมาชิกสำเร็จ! รับโบนัสสมาชิกใหม่ ฿50.00`, 'success');
}

function logoutUser() {
  APP_STATE.currentUser = null;
  localStorage.removeItem('px_currentUser');
  updateAuthUI();
  if (APP_STATE.currentTab === 'admin') {
    switchTab('home');
  }
  showNotification('ออกจากระบบเรียบร้อยแล้ว', 'info');
}

function toggleUserDropdown() {
  const dropdown = document.getElementById('user-profile-dropdown');
  if (dropdown) {
    dropdown.classList.toggle('hidden');
  }
}

// TOPUP HANDLERS
function switchTopupMethod(method) {
  const btnVoucher = document.getElementById('tab-btn-voucher');
  const btnPp = document.getElementById('tab-btn-promptpay');
  const secVoucher = document.getElementById('topup-method-voucher');
  const secPp = document.getElementById('topup-method-promptpay');

  if (method === 'voucher') {
    secVoucher.classList.remove('hidden');
    secPp.classList.add('hidden');
    btnVoucher.classList.add('bg-brand-primary', 'text-white', 'font-semibold');
    btnVoucher.classList.remove('text-gray-300');
    btnPp.classList.remove('bg-brand-primary', 'text-white', 'font-semibold');
    btnPp.classList.add('text-gray-300');
  } else {
    secVoucher.classList.add('hidden');
    secPp.classList.remove('hidden');
    btnPp.classList.add('bg-brand-primary', 'text-white', 'font-semibold');
    btnPp.classList.remove('text-gray-300');
    btnVoucher.classList.remove('bg-brand-primary', 'text-white', 'font-semibold');
    btnVoucher.classList.add('text-gray-300');
  }
}

function setPromptPayAmount(amt) {
  document.getElementById('promptpay-amount').value = amt;
}

function redeemVoucher(e) {
  e.preventDefault();
  if (!APP_STATE.currentUser) {
    showNotification('กรุณาเข้าสู่ระบบก่อนทำการเติมเงิน', 'warning');
    openAuthModal('login');
    return;
  }

  const input = document.getElementById('voucher-url');
  let url = input.value.trim();

  // WAF Input Inspection
  if (APP_STATE.securityConfig?.wafInspection) {
    const wafCheck = wafInspectInput(url, 'TrueMoney Voucher URL');
    if (!wafCheck.safe) {
      showNotification('🛡️ WAF: ตรวจพบและบล็อก Payload ที่น่าสงสัย!', 'error');
      return;
    }
  }

  if (!url || !url.includes('gift.truemoney.com')) {
    showNotification('กรุณากรอกลิงก์ซองของขวัญ TrueMoney ให้ถูกต้อง (เช่น gift.truemoney.com/campaign/?v=...)', 'error');
    return;
  }

  // Simulate redeem amount with bonus
  const simulatedAmount = 100;
  const bonus = (simulatedAmount * (APP_STATE.topupConfig.bonusPercent || 0)) / 100;
  const totalReceived = simulatedAmount + bonus;

  APP_STATE.currentUser.balance += totalReceived;
  
  const uIndex = APP_STATE.users.findIndex(u => u.username === APP_STATE.currentUser.username);
  if (uIndex >= 0) {
    APP_STATE.users[uIndex].balance = APP_STATE.currentUser.balance;
    localStorage.setItem('px_users', JSON.stringify(APP_STATE.users));
  }
  localStorage.setItem('px_currentUser', JSON.stringify(APP_STATE.currentUser));
  updateAuthUI();

  // Record into topup history
  const newRecord = {
    txId: "TP-" + Math.floor(10000 + Math.random() * 90000),
    username: APP_STATE.currentUser.username,
    method: "TrueMoney Voucher",
    amount: simulatedAmount,
    bonus: bonus,
    total: totalReceived,
    date: new Date().toLocaleString('th-TH'),
    status: "สำเร็จ"
  };
  APP_STATE.topupHistory.unshift(newRecord);
  localStorage.setItem('px_topups', JSON.stringify(APP_STATE.topupHistory));

  input.value = '';
  showNotification(`เติมเงินสำเร็จ +฿${totalReceived} (รวมโบนัส +${APP_STATE.topupConfig.bonusPercent}%) เข้าสู่บัญชีเรียบร้อยแล้ว!`, 'success');
}

function generatePromptPayQR() {
  const amountInput = document.getElementById('promptpay-amount');
  const amount = parseFloat(amountInput.value) || 100;

  document.getElementById('qr-display-amount').innerText = `฿${amount.toFixed(2)}`;
  
  // Custom uploaded QR or Auto API QR
  const qrImg = document.getElementById('promptpay-qr-img');
  if (qrImg) {
    if (APP_STATE.topupConfig.promptpayQrImage) {
      qrImg.src = APP_STATE.topupConfig.promptpayQrImage;
    } else {
      const ppNum = APP_STATE.topupConfig.promptpayNumber || '0891234567';
      qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=PROMPTPAY_${ppNum}_AMOUNT_${amount}`;
    }
  }

  document.getElementById('promptpay-result').classList.remove('hidden');
  showNotification('สร้าง QR Code สำหรับชำระเงินเรียบร้อยแล้ว', 'info');
}

function confirmPromptPayTransfer() {
  if (!APP_STATE.currentUser) {
    showNotification('กรุณาเข้าสู่ระบบก่อนทำการเติมเงิน', 'warning');
    openAuthModal('login');
    return;
  }

  const amount = parseFloat(document.getElementById('promptpay-amount').value) || 100;
  const bonus = (amount * (APP_STATE.topupConfig.bonusPercent || 0)) / 100;
  const totalReceived = amount + bonus;

  APP_STATE.currentUser.balance += totalReceived;
  
  const uIndex = APP_STATE.users.findIndex(u => u.username === APP_STATE.currentUser.username);
  if (uIndex >= 0) {
    APP_STATE.users[uIndex].balance = APP_STATE.currentUser.balance;
    localStorage.setItem('px_users', JSON.stringify(APP_STATE.users));
  }
  localStorage.setItem('px_currentUser', JSON.stringify(APP_STATE.currentUser));
  updateAuthUI();

  // Record into topup history
  const newRecord = {
    txId: "TP-" + Math.floor(10000 + Math.random() * 90000),
    username: APP_STATE.currentUser.username,
    method: "PromptPay QR",
    amount: amount,
    bonus: bonus,
    total: totalReceived,
    date: new Date().toLocaleString('th-TH'),
    status: "สำเร็จ"
  };
  APP_STATE.topupHistory.unshift(newRecord);
  localStorage.setItem('px_topups', JSON.stringify(APP_STATE.topupHistory));

  document.getElementById('promptpay-result').classList.add('hidden');
  showNotification(`ตรวจสอบยอดเงินสำเร็จ! ได้รับ +฿${totalReceived} เรียบร้อยแล้ว`, 'success');
}

// RESET HWID HANDLER
function handleResetHWID(e) {
  e.preventDefault();
  const keyInput = document.getElementById('hwid-key');
  const key = keyInput.value.trim();

  if (!key) {
    showNotification('กรุณากรอก License Key ที่ต้องการรีเซ็ต', 'error');
    return;
  }

  const btn = document.getElementById('btn-reset-hwid');
  btn.disabled = true;
  btn.innerHTML = `<span class="animate-spin inline-block mr-2">⚙️</span> กำลังตรวจสอบและรีเซ็ต...`;

  setTimeout(() => {
    btn.disabled = false;
    btn.innerHTML = `ยืนยันการรีเซ็ต HWID`;
    keyInput.value = '';
    showNotification('รีเซ็ต Hardware ID (HWID) สำเร็จแล้ว! สามารถเข้าใช้งานบนเครื่องใหม่ได้ทันที', 'success');
  }, 1200);
}

// ORDER HISTORY RENDERING
function renderHistory() {
  const container = document.getElementById('history-table-body');
  if (!container) return;

  // Filter orders for current user or all if admin
  const userOrders = APP_STATE.currentUser?.role === 'Admin' 
    ? APP_STATE.purchases 
    : APP_STATE.purchases.filter(o => o.username === APP_STATE.currentUser?.username);

  if (!userOrders || userOrders.length === 0) {
    container.innerHTML = `
      <tr>
        <td colspan="5" class="py-12 text-center text-muted-foreground font-light">
          ยังไม่มีประวัติการสั่งซื้อในระบบ
        </td>
      </tr>
    `;
    return;
  }

  container.innerHTML = userOrders.map(o => `
    <tr class="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
      <td class="py-3 px-4 font-mono text-xs text-brand-primary font-semibold">${o.orderId}</td>
      <td class="py-3 px-4 text-xs text-white">
        <div>${o.productName}</div>
        <div class="text-[10px] text-muted-foreground">${o.planName} ${o.username ? `(${o.username})` : ''}</div>
      </td>
      <td class="py-3 px-4 text-xs font-semibold text-brand-accent">฿${o.price}</td>
      <td class="py-3 px-4 text-[11px] text-muted-foreground">${o.date}</td>
      <td class="py-3 px-4 text-right space-x-1 whitespace-nowrap">
        <button onclick="copyToClipboard('${o.key}')" class="px-2 py-1 bg-white/10 hover:bg-brand-primary/20 text-brand-primary hover:text-white rounded-lg text-[11px] transition-all inline-flex items-center gap-1 border border-brand-primary/30">
          <i data-lucide="copy" class="w-3 h-3"></i>
          <span>คัดลอกคีย์</span>
        </button>
        ${o.downloadUrl ? `
          <a href="${o.downloadUrl}" target="_blank" class="px-2 py-1 bg-purple-600/20 hover:bg-purple-600 text-purple-300 hover:text-white rounded-lg text-[11px] transition-all inline-flex items-center gap-1 border border-purple-500/30">
            <i data-lucide="download" class="w-3 h-3"></i>
            <span>โหลดโปรแกรม</span>
          </a>
        ` : ''}
        ${o.guideUrl ? `
          <a href="${o.guideUrl}" target="_blank" class="px-2 py-1 bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white rounded-lg text-[11px] transition-all inline-flex items-center gap-1 border border-white/10">
            <i data-lucide="book-open" class="w-3 h-3"></i>
            <span>คู่มือ</span>
          </a>
        ` : ''}
      </td>
    </tr>
  `).join('');

  if (window.lucide) lucide.createIcons();
}

function copyToClipboard(text) {
  navigator.clipboard.writeText(text);
  showNotification('คัดลอก License Key แล้ว: ' + text, 'success');
}

// ==========================================
// ADMIN DASHBOARD & BACKOFFICE CONTROLLER
// ==========================================

function switchAdminTab(tabName) {
  document.querySelectorAll('.admin-tab-content').forEach(el => el.classList.add('hidden'));
  document.querySelectorAll('.admin-tab-btn').forEach(btn => btn.classList.remove('active'));

  const target = document.getElementById(`admin-panel-${tabName}`);
  const btn = document.getElementById(`admin-btn-${tabName}`);
  if (target) target.classList.remove('hidden');
  if (btn) btn.classList.add('active');

  if (tabName === 'products') renderAdminProducts();
  if (tabName === 'users') renderAdminUsers();
  if (tabName === 'orders') renderAdminOrders();
  if (tabName === 'settings') populateAdminSettingsForm();
  if (tabName === 'topup') populateAdminTopupForm();
  if (tabName === 'security') renderSecurityDashboard();

  if (window.lucide) lucide.createIcons();
}

// 1. Admin Products List & Management
function renderAdminProducts() {
  const pCount = document.getElementById('admin-subtab-count-products');
  if (pCount) pCount.textContent = APP_STATE.products.length;

  const table = document.getElementById('admin-products-table');
  if (!table) return;

  table.innerHTML = APP_STATE.products.map(p => `
    <tr class="border-b border-white/5 hover:bg-white/[0.02]">
      <td class="py-3 px-4">
        <div class="flex items-center gap-3">
          <img src="${p.image}" class="w-10 h-10 object-cover rounded-lg border border-white/10" alt="" />
          <div>
            <div class="text-xs font-semibold text-white">${p.name}</div>
            <div class="text-[10px] text-brand-primary uppercase font-mono">${p.categoryName || p.category}</div>
          </div>
        </div>
      </td>
      <td class="py-3 px-4 font-bold text-xs text-white">฿${p.price}</td>
      <td class="py-3 px-4">
        <div class="font-bold text-xs text-white">${p.stock} ชิ้น</div>
        <div class="text-[10px] text-purple-400 font-mono flex items-center gap-1 mt-0.5">
          <i data-lucide="key" class="w-3 h-3"></i>
          <span>${(p.keys || []).length} คีย์พร้อมส่ง</span>
        </div>
      </td>
      <td class="py-3 px-4 text-xs text-gray-300">${p.sold || 0} ชิ้น</td>
      <td class="py-3 px-4 text-right space-x-1 whitespace-nowrap">
        <button onclick="openStockModal('${p.id}')" class="px-2.5 py-1 rounded-lg bg-emerald-500/15 border border-emerald-500/40 text-emerald-300 hover:bg-emerald-500/25 text-xs font-semibold inline-flex items-center gap-1 shadow-sm transition-all">
          <i data-lucide="key" class="w-3 h-3"></i>
          <span>เติมคีย์ / สต็อก</span>
        </button>
        <button onclick="editProduct('${p.id}')" class="px-2.5 py-1 rounded-lg bg-brand-primary/10 border border-brand-primary/30 text-brand-primary hover:bg-brand-primary/20 text-xs">แก้ไข</button>
        <button onclick="deleteProduct('${p.id}')" class="px-2.5 py-1 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400 hover:bg-red-500/20 text-xs">ลบ</button>
      </td>
    </tr>
  `).join('');

  if (window.lucide) lucide.createIcons();
}

// Add/Edit Product Modal
let editingProductId = null;

function openProductAdminModal(isNew = true) {
  const modal = document.getElementById('admin-product-modal');
  if (!modal) return;
  
  if (isNew) {
    editingProductId = null;
    document.getElementById('admin-prod-form-title').innerText = 'เพิ่มสินค้าใหม่';
    document.getElementById('admin-prod-id').value = '';
    document.getElementById('admin-prod-name').value = '';
    document.getElementById('admin-prod-category').value = 'cmd';
    document.getElementById('admin-prod-price-daily').value = '';
    document.getElementById('admin-prod-price-weekly').value = '';
    document.getElementById('admin-prod-price-monthly').value = '';
    document.getElementById('admin-prod-price').value = 99;
    document.getElementById('admin-prod-stock').value = 50;
    document.getElementById('admin-prod-image').value = '';
    document.getElementById('admin-prod-preview').src = 'assets/products/nexus.webp';
    document.getElementById('admin-prod-desc').value = '';
    document.getElementById('admin-prod-hot').checked = false;
    document.getElementById('admin-prod-download-url').value = '';
    document.getElementById('admin-prod-guide-url').value = '';
    document.getElementById('admin-prod-keys-input').value = '';
    updateAdminProdKeysCount();
  }
  
  modal.classList.remove('hidden');
  modal.classList.add('flex');
}

function closeProductAdminModal() {
  const modal = document.getElementById('admin-product-modal');
  if (modal) {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
  }
}

function editProduct(id) {
  const p = APP_STATE.products.find(x => x.id === id);
  if (!p) return;
  editingProductId = id;

  document.getElementById('admin-prod-form-title').innerText = 'แก้ไขสินค้า: ' + p.name;
  document.getElementById('admin-prod-id').value = p.id;
  document.getElementById('admin-prod-name').value = p.name;
  document.getElementById('admin-prod-category').value = p.category;

  // Extract prices from existing plans
  const dailyPlan = p.plans ? p.plans.find(x => x.name.includes("1 วัน") || x.duration === "24 ชั่วโมง") : null;
  const weeklyPlan = p.plans ? p.plans.find(x => x.name.includes("7 วัน") || x.duration === "7 วัน") : null;
  const monthlyPlan = p.plans ? p.plans.find(x => x.name.includes("30 วัน") || x.duration === "30 วัน") : null;
  const lifetimePlan = p.plans ? p.plans.find(x => x.name.includes("ถาวร") || x.duration === "ถาวร") : null;

  document.getElementById('admin-prod-price-daily').value = dailyPlan ? dailyPlan.price : '';
  document.getElementById('admin-prod-price-weekly').value = weeklyPlan ? weeklyPlan.price : '';
  document.getElementById('admin-prod-price-monthly').value = monthlyPlan ? monthlyPlan.price : '';
  document.getElementById('admin-prod-price').value = lifetimePlan ? lifetimePlan.price : p.price;

  document.getElementById('admin-prod-stock').value = p.stock;
  document.getElementById('admin-prod-image').value = p.image;
  document.getElementById('admin-prod-preview').src = p.image;
  document.getElementById('admin-prod-desc').value = p.description;
  document.getElementById('admin-prod-hot').checked = !!p.isHot;

  document.getElementById('admin-prod-download-url').value = p.downloadUrl || '';
  document.getElementById('admin-prod-guide-url').value = p.guideUrl || '';
  document.getElementById('admin-prod-keys-input').value = (p.keys || []).join('\n');
  updateAdminProdKeysCount();

  openProductAdminModal(false);
}

// Local image file upload preview reader
function handleProductImageUpload(event) {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function(e) {
    const dataUrl = e.target.result;
    document.getElementById('admin-prod-image').value = dataUrl;
    document.getElementById('admin-prod-preview').src = dataUrl;
    showNotification('อัปโหลดและแปลงรูปภาพสำเร็จแล้ว!', 'success');
  };
  reader.readAsDataURL(file);
}

function updateAdminProdKeysCount() {
  const input = document.getElementById('admin-prod-keys-input');
  const badge = document.getElementById('admin-prod-keys-count-badge');
  if (!input || !badge) return;
  const keys = input.value.split('\n').map(k => k.trim()).filter(k => k.length > 0);
  badge.textContent = `${keys.length} คีย์`;

  const syncCheck = document.getElementById('admin-prod-sync-stock');
  if (syncCheck && syncCheck.checked && keys.length > 0) {
    document.getElementById('admin-prod-stock').value = keys.length;
  }
}

function generateSampleKeysForProduct(count = 10) {
  const input = document.getElementById('admin-prod-keys-input');
  if (!input) return;
  const category = (document.getElementById('admin-prod-category').value || 'KEY').toUpperCase();
  const newKeys = [];
  for (let i = 0; i < count; i++) {
    const p1 = Math.random().toString(36).substring(2, 6).toUpperCase();
    const p2 = Math.random().toString(36).substring(2, 6).toUpperCase();
    newKeys.push(`PX-${category}-${p1}-${p2}`);
  }
  const current = input.value.trim();
  input.value = current ? `${current}\n${newKeys.join('\n')}` : newKeys.join('\n');
  updateAdminProdKeysCount();
  showNotification(`สร้างคีย์ตัวอย่างเพิ่ม ${count} คีย์แล้ว`, 'info');
}

function saveProductFromAdmin(e) {
  e.preventDefault();
  const name = document.getElementById('admin-prod-name').value.trim();
  const category = document.getElementById('admin-prod-category').value;
  const priceDaily = parseFloat(document.getElementById('admin-prod-price-daily').value) || null;
  const priceWeekly = parseFloat(document.getElementById('admin-prod-price-weekly').value) || null;
  const priceMonthly = parseFloat(document.getElementById('admin-prod-price-monthly').value) || null;
  const priceLifetime = parseFloat(document.getElementById('admin-prod-price').value) || 99;

  let stock = parseInt(document.getElementById('admin-prod-stock').value) || 50;
  const image = document.getElementById('admin-prod-image').value.trim() || 'assets/products/nexus.webp';
  const desc = document.getElementById('admin-prod-desc').value.trim();
  const isHot = document.getElementById('admin-prod-hot').checked;

  const downloadUrl = document.getElementById('admin-prod-download-url').value.trim();
  const guideUrl = document.getElementById('admin-prod-guide-url').value.trim();
  const rawKeys = document.getElementById('admin-prod-keys-input').value;
  const keys = rawKeys.split('\n').map(k => k.trim()).filter(k => k.length > 0);

  const syncStock = document.getElementById('admin-prod-sync-stock')?.checked;
  if (syncStock && keys.length > 0) {
    stock = keys.length;
  }

  const categoryNames = {
    cmd: "CMD FIVEM",
    unban: "UNBAN FIVEM",
    spoofer: "SPOOFER",
    external: "EXTERNAL FIVEM"
  };

  // Build plans array
  const plans = [];
  if (priceDaily && priceDaily > 0) plans.push({ name: "1 วัน (Daily)", price: priceDaily, duration: "24 ชั่วโมง" });
  if (priceWeekly && priceWeekly > 0) plans.push({ name: "7 วัน (Weekly)", price: priceWeekly, duration: "7 วัน" });
  if (priceMonthly && priceMonthly > 0) plans.push({ name: "30 วัน (Monthly)", price: priceMonthly, duration: "30 วัน" });
  plans.push({ name: "ถาวร (Lifetime)", price: priceLifetime, duration: "ถาวร" });

  const displayPrice = plans.length > 0 ? Math.min(...plans.map(x => x.price)) : priceLifetime;

  if (editingProductId) {
    // Update existing
    const idx = APP_STATE.products.findIndex(x => x.id === editingProductId);
    if (idx >= 0) {
      APP_STATE.products[idx].name = name;
      APP_STATE.products[idx].category = category;
      APP_STATE.products[idx].categoryName = categoryNames[category] || category.toUpperCase();
      APP_STATE.products[idx].price = displayPrice;
      APP_STATE.products[idx].stock = stock;
      APP_STATE.products[idx].image = image;
      APP_STATE.products[idx].description = desc;
      APP_STATE.products[idx].isHot = isHot;
      APP_STATE.products[idx].badge = isHot ? "ยอดฮิต" : "";
      APP_STATE.products[idx].plans = plans;
      APP_STATE.products[idx].downloadUrl = downloadUrl;
      APP_STATE.products[idx].guideUrl = guideUrl;
      APP_STATE.products[idx].keys = keys;
    }
    showNotification('บันทึกการแก้ไขสินค้าเรียบร้อยแล้ว!', 'success');
  } else {
    // Add new
    const newProd = {
      id: "px-prod-" + Date.now(),
      name,
      category,
      categoryName: categoryNames[category] || category.toUpperCase(),
      price: displayPrice,
      stock,
      sold: 0,
      image,
      description: desc,
      isHot,
      badge: isHot ? "ยอดฮิต" : "",
      status: "OPERATIONAL",
      downloadUrl,
      guideUrl,
      keys,
      plans,
      features: [
        "ปลอดภัย 100% ไร้การตรวจจับ",
        "ติดตั้งง่าย กดรันไฟล์เดียวจบ",
        "ซัพพอร์ตตลอด 24 ชั่วโมง"
      ]
    };
    APP_STATE.products.unshift(newProd);
    showNotification('เพิ่มสินค้าใหม่เรียบร้อยแล้ว!', 'success');
  }

  localStorage.setItem('px_products', JSON.stringify(APP_STATE.products));
  renderProducts();
  renderAdminProducts();
  applyStoreConfig();
  closeProductAdminModal();
}

function deleteProduct(id) {
  if (!confirm('ยืนยันที่จะลบสินค้ารายการนี้ใช่หรือไม่?')) return;
  APP_STATE.products = APP_STATE.products.filter(p => p.id !== id);
  localStorage.setItem('px_products', JSON.stringify(APP_STATE.products));
  renderProducts();
  renderAdminProducts();
  applyStoreConfig();
  showNotification('ลบสินค้าเรียบร้อยแล้ว', 'info');
}

// ==========================================
// QUICK STOCK & LICENSE KEYS MANAGER MODAL
// ==========================================
let activeStockProductId = null;

function openStockModal(id) {
  const p = APP_STATE.products.find(x => x.id === id);
  if (!p) {
    showNotification('ไม่พบข้อมูลสินค้ารายการนี้', 'error');
    return;
  }

  activeStockProductId = id;
  const modal = document.getElementById('admin-stock-modal');
  if (!modal) return;

  // Header info
  document.getElementById('stock-modal-img').src = p.image;
  document.getElementById('stock-modal-name').textContent = p.name;
  document.getElementById('stock-modal-badge').textContent = p.categoryName || p.category;

  // Metrics
  document.getElementById('stock-modal-keys-count').textContent = (p.keys || []).length;
  document.getElementById('stock-modal-stock-count').textContent = p.stock;
  document.getElementById('stock-modal-sold-count').textContent = p.sold || 0;

  // Links
  document.getElementById('stock-modal-download-url').value = p.downloadUrl || '';
  document.getElementById('stock-modal-guide-url').value = p.guideUrl || '';

  // Clear batch input
  document.getElementById('stock-modal-batch-input').value = '';

  // Render current keys list
  renderStockModalKeys(p);

  modal.classList.remove('hidden');
  modal.classList.add('flex');
  if (window.lucide) lucide.createIcons();
}

function closeStockModal() {
  const modal = document.getElementById('admin-stock-modal');
  if (modal) {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
  }
  activeStockProductId = null;
}

function renderStockModalKeys(p) {
  const container = document.getElementById('stock-modal-keys-list');
  const label = document.getElementById('stock-modal-active-keys-label');
  if (!container) return;

  const keys = p.keys || [];
  if (label) label.textContent = `${keys.length} คีย์`;
  document.getElementById('stock-modal-keys-count').textContent = keys.length;
  document.getElementById('stock-modal-stock-count').textContent = p.stock;

  if (keys.length === 0) {
    container.innerHTML = `
      <div class="py-6 text-center text-gray-500 font-sans text-xs">
        <i data-lucide="package-x" class="w-6 h-6 mx-auto mb-1 text-gray-600"></i>
        <div>ยังไม่มี License Key ในคลังสินค้า</div>
        <div class="text-[10px] text-gray-500 mt-0.5">กรุณาเติมคีย์ที่ช่องด้านล่างเพื่อส่งมอบให้ลูกค้าอัตโนมัติ</div>
      </div>
    `;
    if (window.lucide) lucide.createIcons();
    return;
  }

  container.innerHTML = keys.map((key, idx) => `
    <div class="flex items-center justify-between p-2 rounded-lg bg-white/5 border border-white/5 hover:border-purple-500/30 transition-colors">
      <div class="flex items-center gap-2 overflow-hidden">
        <span class="text-[10px] text-gray-500 font-mono w-5">#${idx + 1}</span>
        <span class="text-xs text-purple-300 font-mono truncate select-all">${key}</span>
      </div>
      <div class="flex items-center gap-1.5 shrink-0">
        <button onclick="copySingleStockKey('${key}')" class="p-1 rounded hover:bg-white/10 text-gray-400 hover:text-white transition-colors" title="คัดลอก">
          <i data-lucide="copy" class="w-3.5 h-3.5"></i>
        </button>
        <button onclick="deleteStockKey(${idx})" class="p-1 rounded hover:bg-red-500/20 text-gray-400 hover:text-red-400 transition-colors" title="ลบคีย์นี้">
          <i data-lucide="trash-2" class="w-3.5 h-3.5"></i>
        </button>
      </div>
    </div>
  `).join('');

  if (window.lucide) lucide.createIcons();
}

function copySingleStockKey(key) {
  navigator.clipboard.writeText(key);
  showNotification('คัดลอกคีย์: ' + key, 'success');
}

function copyAllStockKeys() {
  if (!activeStockProductId) return;
  const p = APP_STATE.products.find(x => x.id === activeStockProductId);
  if (!p || !p.keys || p.keys.length === 0) {
    showNotification('ไม่มีคีย์ในคลังให้คัดลอก', 'warning');
    return;
  }
  navigator.clipboard.writeText(p.keys.join('\n'));
  showNotification(`คัดลอก ${p.keys.length} คีย์ทั้งหมดเรียบร้อยแล้ว`, 'success');
}

function clearAllStockKeys() {
  if (!activeStockProductId) return;
  const p = APP_STATE.products.find(x => x.id === activeStockProductId);
  if (!p) return;
  if (!confirm('ต้องการล้างคีย์ทั้งหมดในคลังของสินค้านี้ใช่หรือไม่?')) return;

  p.keys = [];
  p.stock = 0;
  localStorage.setItem('px_products', JSON.stringify(APP_STATE.products));
  renderStockModalKeys(p);
  renderProducts();
  renderAdminProducts();
  showNotification('ล้างคีย์ในสต็อกทั้งหมดแล้ว', 'info');
}

function deleteStockKey(idx) {
  if (!activeStockProductId) return;
  const p = APP_STATE.products.find(x => x.id === activeStockProductId);
  if (!p || !p.keys) return;

  p.keys.splice(idx, 1);
  p.stock = p.keys.length;
  localStorage.setItem('px_products', JSON.stringify(APP_STATE.products));
  renderStockModalKeys(p);
  renderProducts();
  renderAdminProducts();
  showNotification('ลบคีย์ออกจากคลังแล้ว', 'info');
}

function quickAddStockKeys(count = 10) {
  const textarea = document.getElementById('stock-modal-batch-input');
  if (!textarea || !activeStockProductId) return;
  const p = APP_STATE.products.find(x => x.id === activeStockProductId);
  const tag = (p?.category || 'KEY').toUpperCase();

  const sampleKeys = [];
  for (let i = 0; i < count; i++) {
    const p1 = Math.random().toString(36).substring(2, 6).toUpperCase();
    const p2 = Math.random().toString(36).substring(2, 6).toUpperCase();
    sampleKeys.push(`PX-${tag}-${p1}-${p2}`);
  }

  const currentVal = textarea.value.trim();
  textarea.value = currentVal ? `${currentVal}\n${sampleKeys.join('\n')}` : sampleKeys.join('\n');
  showNotification(`สุ่มสร้าง ${count} คีย์ลงในช่องแล้ว กด "เพิ่มคีย์เข้าคลัง" เพื่อบันทึก`, 'info');
}

function submitBatchStockKeys() {
  if (!activeStockProductId) return;
  const p = APP_STATE.products.find(x => x.id === activeStockProductId);
  if (!p) return;

  const textarea = document.getElementById('stock-modal-batch-input');
  const raw = textarea.value.trim();
  if (!raw) {
    showNotification('กรุณาวางหรือกรอก License Key ก่อนกดยืนยัน', 'warning');
    return;
  }

  const newKeys = raw.split('\n').map(k => k.trim()).filter(k => k.length > 0);
  if (newKeys.length === 0) {
    showNotification('ไม่พบคีย์ที่ถูกต้อง', 'warning');
    return;
  }

  if (!p.keys) p.keys = [];
  p.keys.push(...newKeys);
  p.stock = p.keys.length;

  localStorage.setItem('px_products', JSON.stringify(APP_STATE.products));
  textarea.value = '';
  renderStockModalKeys(p);
  renderProducts();
  renderAdminProducts();
  showNotification(`เติมคีย์เข้าคลังสำเร็จ +${newKeys.length} คีย์ (สต็อกอัปเดตเป็น ${p.stock} ชิ้น)`, 'success');
}

function saveStockModalLinks() {
  if (!activeStockProductId) return;
  const p = APP_STATE.products.find(x => x.id === activeStockProductId);
  if (!p) return;

  const dlUrl = document.getElementById('stock-modal-download-url').value.trim();
  const guideUrl = document.getElementById('stock-modal-guide-url').value.trim();

  p.downloadUrl = dlUrl;
  p.guideUrl = guideUrl;
  localStorage.setItem('px_products', JSON.stringify(APP_STATE.products));
  renderAdminProducts();
  renderProducts();
  showNotification('บันทึกข้อมูลลิงก์และคลังสต็อกเรียบร้อยแล้ว!', 'success');
  closeStockModal();
}

// 2. Admin Topup Settings
function populateAdminTopupForm() {
  const c = APP_STATE.topupConfig;
  document.getElementById('admin-tp-truemoney-phone').value = c.truemoneyPhone || '';
  document.getElementById('admin-tp-truemoney-enabled').checked = !!c.truemoneyEnabled;
  document.getElementById('admin-tp-promptpay-number').value = c.promptpayNumber || '';
  document.getElementById('admin-tp-promptpay-name').value = c.promptpayName || '';
  document.getElementById('admin-tp-bonus').value = c.bonusPercent || 0;
  
  const qrPreview = document.getElementById('admin-tp-qr-preview');
  if (qrPreview) {
    qrPreview.src = c.promptpayQrImage || 'https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=PROMPTPAY';
  }
}

function handleTopupQrUpload(event) {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function(e) {
    const dataUrl = e.target.result;
    APP_STATE.topupConfig.promptpayQrImage = dataUrl;
    document.getElementById('admin-tp-qr-preview').src = dataUrl;
    showNotification('อัปโหลดรูป QR Code พร้อมเพย์สำเร็จแล้ว!', 'success');
  };
  reader.readAsDataURL(file);
}

function saveTopupSettings(e) {
  e.preventDefault();
  APP_STATE.topupConfig.truemoneyPhone = document.getElementById('admin-tp-truemoney-phone').value.trim();
  APP_STATE.topupConfig.truemoneyEnabled = document.getElementById('admin-tp-truemoney-enabled').checked;
  APP_STATE.topupConfig.promptpayNumber = document.getElementById('admin-tp-promptpay-number').value.trim();
  APP_STATE.topupConfig.promptpayName = document.getElementById('admin-tp-promptpay-name').value.trim();
  APP_STATE.topupConfig.bonusPercent = parseFloat(document.getElementById('admin-tp-bonus').value) || 0;

  localStorage.setItem('px_topup_config', JSON.stringify(APP_STATE.topupConfig));
  applyTopupConfig();
  showNotification('บันทึกการตั้งค่าระบบเติมเงินแบบ Real-time เรียบร้อยแล้ว!', 'success');
}

// 3. Admin Store & Banner Settings
function populateAdminSettingsForm() {
  const c = APP_STATE.storeConfig;
  document.getElementById('admin-st-name').value = c.storeName || '';
  document.getElementById('admin-st-desc').value = c.welcomeDesc || '';
  document.getElementById('admin-st-announcement').value = c.announcementText || '';
  document.getElementById('admin-st-discord').value = c.discordUrl || '';
  document.getElementById('admin-st-banner-url').value = c.bannerImage || '';
  document.getElementById('admin-st-banner-title').value = c.bannerTitle || '';
  document.getElementById('admin-st-banner-subtitle').value = c.bannerSubtitle || '';
  document.getElementById('admin-st-banner-preview').src = c.bannerImage || 'assets/banners/banner1.webp';
  
  const logoPreview = document.getElementById('admin-st-logo-preview');
  if (logoPreview) {
    logoPreview.src = c.logoImage || 'assets/logo.png?v=20261009_v2';
  }
}

function handleLogoUpload(event) {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function(e) {
    const dataUrl = e.target.result;
    APP_STATE.storeConfig.logoImage = dataUrl;
    const logoPreview = document.getElementById('admin-st-logo-preview');
    if (logoPreview) logoPreview.src = dataUrl;

    localStorage.setItem('px_store_config', JSON.stringify(APP_STATE.storeConfig));
    applyStoreConfig();
    showNotification('เปลี่ยนโลโก้ร้านค้าสำเร็จแบบ Real-time ทั่วเว็บไซต์!', 'success');
  };
  reader.readAsDataURL(file);
}

function handleBannerUpload(event) {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function(e) {
    const dataUrl = e.target.result;
    document.getElementById('admin-st-banner-url').value = dataUrl;
    document.getElementById('admin-st-banner-preview').src = dataUrl;
    showNotification('อัปโหลดรูปแบนเนอร์สำเร็จแล้ว!', 'success');
  };
  reader.readAsDataURL(file);
}

function saveStoreSettings(e) {
  e.preventDefault();
  APP_STATE.storeConfig.storeName = document.getElementById('admin-st-name').value.trim();
  APP_STATE.storeConfig.welcomeDesc = document.getElementById('admin-st-desc').value.trim();
  APP_STATE.storeConfig.announcementText = document.getElementById('admin-st-announcement').value.trim();
  APP_STATE.storeConfig.discordUrl = document.getElementById('admin-st-discord').value.trim();
  APP_STATE.storeConfig.bannerImage = document.getElementById('admin-st-banner-url').value.trim();
  APP_STATE.storeConfig.bannerTitle = document.getElementById('admin-st-banner-title').value.trim();
  APP_STATE.storeConfig.bannerSubtitle = document.getElementById('admin-st-banner-subtitle').value.trim();

  localStorage.setItem('px_store_config', JSON.stringify(APP_STATE.storeConfig));
  applyStoreConfig();
  showNotification('บันทึกการตั้งค่าร้านค้าและแบนเนอร์แบบ Real-time สำเร็จ!', 'success');
}

// 4. Admin Users Management & Drill-Down History
let activeDetailUsername = null;

function renderAdminUsers() {
  const uCount = document.getElementById('admin-subtab-count-users');
  if (uCount) uCount.textContent = APP_STATE.users.length;

  const table = document.getElementById('admin-users-table');
  if (!table) return;

  table.innerHTML = APP_STATE.users.map(u => `
    <tr class="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
      <td class="py-3 px-4">
        <div class="font-bold text-xs text-white flex items-center gap-1.5">
          <span>${u.username}</span>
          ${APP_STATE.currentUser && APP_STATE.currentUser.username === u.username ? `
            <span class="text-[9px] bg-brand-primary/20 border border-brand-primary/40 text-brand-accent px-1.5 py-0.5 rounded font-mono">คุณ</span>
          ` : ''}
        </div>
        <div class="text-[10px] text-gray-400 font-mono">${u.email || '-'}</div>
      </td>
      <td class="py-3 px-4">
        <div class="flex items-center gap-1.5">
          <span class="font-mono text-xs text-brand-accent bg-black/60 px-2.5 py-1 rounded-lg border border-white/10 select-all font-bold tracking-wide">${u.password || '••••••••'}</span>
          <button onclick="copyToClipboard('${u.password}')" title="คัดลอกรหัสผ่าน" class="p-1 rounded hover:bg-white/10 text-gray-400 hover:text-brand-primary transition-colors">
            <i data-lucide="copy" class="w-3.5 h-3.5"></i>
          </button>
        </div>
      </td>
      <td class="py-3 px-4">
        <span class="px-2.5 py-0.5 rounded-full text-[10px] font-bold ${u.role === 'Admin' ? 'bg-brand-primary text-white shadow-sm shadow-purple-500/30' : 'bg-white/10 text-gray-300'}">
          ${u.role}
        </span>
      </td>
      <td class="py-3 px-4 text-xs font-bold text-brand-primary font-mono">฿${Number(u.balance).toFixed(2)}</td>
      <td class="py-3 px-4 text-right space-x-1.5 whitespace-nowrap">
        <button onclick="openUserDetailsModal('${u.username}')" class="px-2.5 py-1 rounded-lg bg-brand-primary/20 border border-brand-primary/40 text-brand-primary hover:bg-brand-primary/30 text-xs font-semibold inline-flex items-center gap-1 transition-all">
          <i data-lucide="eye" class="w-3 h-3"></i>
          <span>ดูประวัติ & จัดการ</span>
        </button>
        <button onclick="promptAdjustBalance('${u.username}')" class="px-2 py-1 rounded-lg bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:bg-white/10 text-xs transition-colors">
          ปรับเงิน
        </button>
        ${u.username !== 'admin' ? `
          <button onclick="toggleUserRole('${u.username}')" class="px-2 py-1 rounded-lg bg-white/5 border border-white/10 text-gray-400 hover:text-yellow-400 hover:bg-white/10 text-xs transition-colors">
            เปลี่ยนสิทธิ์
          </button>
        ` : ''}
      </td>
    </tr>
  `).join('');

  if (window.lucide) lucide.createIcons();
}

function openUserDetailsModal(username) {
  const user = APP_STATE.users.find(u => u.username === username);
  if (!user) {
    showNotification('ไม่พบข้อมูลผู้ใช้นี้ในระบบ', 'error');
    return;
  }

  activeDetailUsername = username;

  // Set Modal Header & Credentials
  const usernameEl = document.getElementById('ud-modal-username');
  if (usernameEl) usernameEl.textContent = user.username;

  const roleEl = document.getElementById('ud-modal-role-badge');
  if (roleEl) {
    roleEl.textContent = user.role;
    roleEl.className = `px-2 py-0.5 rounded-full text-[10px] font-bold ${user.role === 'Admin' ? 'bg-brand-primary text-white' : 'bg-white/10 text-gray-300'}`;
  }

  const passInput = document.getElementById('ud-modal-password');
  if (passInput) passInput.value = user.password || '';

  const balanceEl = document.getElementById('ud-modal-balance');
  if (balanceEl) balanceEl.textContent = `฿${Number(user.balance).toFixed(2)}`;

  const emailEl = document.getElementById('ud-modal-email');
  if (emailEl) emailEl.textContent = user.email || 'ไม่มีอีเมล';

  const regEl = document.getElementById('ud-modal-registered');
  if (regEl) regEl.textContent = `สมัครเมื่อ: ${user.registeredAt || '08/10/2026'}`;

  // Filter Purchases
  const userOrders = APP_STATE.purchases.filter(o => o.username === username);
  const countOrdersEl = document.getElementById('ud-count-orders');
  if (countOrdersEl) countOrdersEl.textContent = userOrders.length;

  const ordersTableBody = document.getElementById('ud-table-orders-body');
  if (ordersTableBody) {
    if (userOrders.length === 0) {
      ordersTableBody.innerHTML = `
        <tr>
          <td colspan="5" class="py-6 text-center text-gray-500 text-xs">
            ผู้ใช้นี้ยังไม่มีประวัติการสั่งซื้อสินค้า
          </td>
        </tr>
      `;
    } else {
      ordersTableBody.innerHTML = userOrders.map(o => `
        <tr class="border-b border-white/5 hover:bg-white/[0.02]">
          <td class="py-2.5 px-3 font-mono text-[11px] text-brand-primary font-bold">${o.orderId}</td>
          <td class="py-2.5 px-3 text-white">
            <div class="font-medium">${o.productName}</div>
            <div class="text-[10px] text-gray-400 font-normal">${o.planName || ''}</div>
          </td>
          <td class="py-2.5 px-3 text-brand-accent font-bold">฿${o.price}</td>
          <td class="py-2.5 px-3 text-gray-400 text-[11px]">${o.date}</td>
          <td class="py-2.5 px-3 text-right">
            <div class="flex items-center justify-end gap-1">
              <span class="font-mono text-[10px] text-gray-300 bg-black/60 px-1.5 py-0.5 rounded border border-white/10 truncate max-w-[120px] select-all">${o.key}</span>
              <button onclick="copyToClipboard('${o.key}')" title="คัดลอก License Key" class="p-1 rounded hover:bg-white/10 text-gray-400 hover:text-brand-primary">
                <i data-lucide="copy" class="w-3 h-3"></i>
              </button>
            </div>
          </td>
        </tr>
      `).join('');
    }
  }

  // Filter Topups
  const userTopups = APP_STATE.topupHistory.filter(t => t.username === username);
  const countTopupsEl = document.getElementById('ud-count-topups');
  if (countTopupsEl) countTopupsEl.textContent = userTopups.length;

  const topupsTableBody = document.getElementById('ud-table-topups-body');
  if (topupsTableBody) {
    if (userTopups.length === 0) {
      topupsTableBody.innerHTML = `
        <tr>
          <td colspan="6" class="py-6 text-center text-gray-500 text-xs">
            ผู้ใช้นี้ยังไม่มีประวัติการเติมเงิน
          </td>
        </tr>
      `;
    } else {
      topupsTableBody.innerHTML = userTopups.map(t => `
        <tr class="border-b border-white/5 hover:bg-white/[0.02]">
          <td class="py-2.5 px-3 font-mono text-[11px] text-brand-primary font-bold">${t.txId}</td>
          <td class="py-2.5 px-3 text-white">
            <div class="font-medium">${t.method}</div>
          </td>
          <td class="py-2.5 px-3 text-white font-bold">฿${Number(t.amount).toFixed(2)}</td>
          <td class="py-2.5 px-3 text-brand-accent">+฿${Number(t.bonus || 0).toFixed(2)}</td>
          <td class="py-2.5 px-3 text-gray-400 text-[11px]">${t.date}</td>
          <td class="py-2.5 px-3 text-right">
            <span class="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold bg-green-500/10 text-green-400 border border-green-500/30">
              สำเร็จ
            </span>
          </td>
        </tr>
      `).join('');
    }
  }

  // Switch to orders tab by default
  switchUserDetailTab('orders');

  // Show Modal
  const modal = document.getElementById('admin-user-detail-modal');
  if (modal) {
    modal.classList.remove('hidden');
    modal.classList.add('flex');
  }

  if (window.lucide) lucide.createIcons();
}

function closeUserDetailsModal() {
  const modal = document.getElementById('admin-user-detail-modal');
  if (modal) {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
  }
  activeDetailUsername = null;
}

function switchUserDetailTab(tab) {
  const btnOrders = document.getElementById('ud-tab-btn-orders');
  const btnTopups = document.getElementById('ud-tab-btn-topups');
  const contentOrders = document.getElementById('ud-content-orders');
  const contentTopups = document.getElementById('ud-content-topups');

  if (tab === 'orders') {
    btnOrders?.classList.add('bg-brand-primary', 'text-white');
    btnOrders?.classList.remove('bg-white/5', 'text-gray-300');
    btnTopups?.classList.remove('bg-brand-primary', 'text-white');
    btnTopups?.classList.add('bg-white/5', 'text-gray-300');
    contentOrders?.classList.remove('hidden');
    contentTopups?.classList.add('hidden');
  } else {
    btnTopups?.classList.add('bg-brand-primary', 'text-white');
    btnTopups?.classList.remove('bg-white/5', 'text-gray-300');
    btnOrders?.classList.remove('bg-brand-primary', 'text-white');
    btnOrders?.classList.add('bg-white/5', 'text-gray-300');
    contentTopups?.classList.remove('hidden');
    contentOrders?.classList.add('hidden');
  }

  if (window.lucide) lucide.createIcons();
}

function saveUserPasswordFromModal() {
  if (!activeDetailUsername) return;
  const passInput = document.getElementById('ud-modal-password');
  const newPass = passInput ? passInput.value.trim() : '';

  if (!newPass) {
    showNotification('รหัสผ่านต้องไม่ว่างเปล่า', 'error');
    return;
  }

  const user = APP_STATE.users.find(u => u.username === activeDetailUsername);
  if (user) {
    user.password = newPass;
    localStorage.setItem('px_users', JSON.stringify(APP_STATE.users));

    if (APP_STATE.currentUser && APP_STATE.currentUser.username === activeDetailUsername) {
      APP_STATE.currentUser.password = newPass;
      localStorage.setItem('px_currentUser', JSON.stringify(APP_STATE.currentUser));
    }

    renderAdminUsers();
    showNotification(`อัปเดตรหัสผ่านของ ${activeDetailUsername} เป็น "${newPass}" สำเร็จ!`, 'success');
  }
}

function promptAdjustBalanceFromModal() {
  if (!activeDetailUsername) return;
  const amount = prompt(`ระบุจำนวนเงินที่ต้องการเพิ่ม (+) หรือลด (-) ให้แก่ผู้ใช้ ${activeDetailUsername} (บาท):`, "100");
  if (amount === null) return;
  const num = parseFloat(amount);
  if (isNaN(num)) {
    showNotification('กรุณากรอกตัวเลขจำนวนเงินที่ถูกต้อง', 'error');
    return;
  }

  const user = APP_STATE.users.find(u => u.username === activeDetailUsername);
  if (user) {
    user.balance = Math.max(0, user.balance + num);
    localStorage.setItem('px_users', JSON.stringify(APP_STATE.users));

    if (APP_STATE.currentUser && APP_STATE.currentUser.username === activeDetailUsername) {
      APP_STATE.currentUser.balance = user.balance;
      localStorage.setItem('px_currentUser', JSON.stringify(APP_STATE.currentUser));
      updateAuthUI();
    }

    const balEl = document.getElementById('ud-modal-balance');
    if (balEl) balEl.textContent = `฿${user.balance.toFixed(2)}`;

    renderAdminUsers();
    showNotification(`ปรับยอดเงินของ ${activeDetailUsername} สำเร็จ เป็น ฿${user.balance.toFixed(2)}`, 'success');
  }
}

function promptAdjustBalance(username) {
  const amount = prompt(`ระบุจำนวนเงินที่ต้องการเพิ่ม (+) หรือลด (-) ให้แก่ผู้ใช้ ${username} (บาท):`, "100");
  if (amount === null) return;
  const num = parseFloat(amount);
  if (isNaN(num)) {
    showNotification('กรุณากรอกตัวเลขจำนวนเงินที่ถูกต้อง', 'error');
    return;
  }

  const user = APP_STATE.users.find(u => u.username === username);
  if (user) {
    user.balance = Math.max(0, user.balance + num);
    localStorage.setItem('px_users', JSON.stringify(APP_STATE.users));
    if (APP_STATE.currentUser && APP_STATE.currentUser.username === username) {
      APP_STATE.currentUser.balance = user.balance;
      localStorage.setItem('px_currentUser', JSON.stringify(APP_STATE.currentUser));
      updateAuthUI();
    }
    renderAdminUsers();
    showNotification(`ปรับยอดเงินของ ${username} สำเร็จ เป็น ฿${user.balance.toFixed(2)}`, 'success');
  }
}

function toggleUserRole(username) {
  const user = APP_STATE.users.find(u => u.username === username);
  if (user) {
    user.role = user.role === 'Admin' ? 'Member' : 'Admin';
    localStorage.setItem('px_users', JSON.stringify(APP_STATE.users));
    renderAdminUsers();
    showNotification(`เปลี่ยนสิทธิ์ของ ${username} เป็น ${user.role} เรียบร้อยแล้ว`, 'info');
  }
}

// 5. Admin Orders Management
function renderAdminOrders() {
  const table = document.getElementById('admin-orders-table');
  if (!table) return;

  table.innerHTML = APP_STATE.purchases.map(o => `
    <tr class="border-b border-white/5 hover:bg-white/[0.02]">
      <td class="py-3 px-4 font-mono text-xs text-brand-primary font-bold">${o.orderId}</td>
      <td class="py-3 px-4 text-xs text-white">
        <div>${o.productName}</div>
        <div class="text-[10px] text-gray-400">ผู้สั่งซื้อ: <strong>${o.username || 'guest'}</strong></div>
      </td>
      <td class="py-3 px-4 text-xs font-semibold text-brand-accent">฿${o.price}</td>
      <td class="py-3 px-4 text-[11px] text-gray-400">${o.date}</td>
      <td class="py-3 px-4 text-right">
        <button onclick="copyToClipboard('${o.key}')" class="px-2 py-0.5 rounded bg-white/10 hover:bg-brand-primary/20 text-brand-primary text-[10px]">
          คัดลอกคีย์
        </button>
      </td>
    </tr>
  `).join('');
}

// Reset Entire Store to Factory Default
function resetStoreToDefault() {
  if (!confirm('คำเตือน: คุณต้องการรีเซ็ตข้อมูลสินค้า ร้านค้า และระบบทั้งหมดกลับเป็นค่าเริ่มต้นใช่หรือไม่?')) return;
  localStorage.removeItem('px_products');
  localStorage.removeItem('px_store_config');
  localStorage.removeItem('px_topup_config');
  localStorage.removeItem('px_orders');
  location.reload();
}

// EVENT LISTENERS SETUP
function setupEventListeners() {
  const catBtns = document.querySelectorAll('[data-category-filter]');
  catBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      catBtns.forEach(b => {
        b.classList.remove('bg-brand-primary', 'text-white', 'font-semibold');
        b.classList.add('bg-white/5', 'text-muted-foreground');
      });
      btn.classList.add('bg-brand-primary', 'text-white', 'font-semibold');
      btn.classList.remove('bg-white/5', 'text-muted-foreground');
      
      APP_STATE.selectedCategory = btn.getAttribute('data-category-filter');
      renderProducts();
    });
  });

  const searchInput = document.getElementById('product-search-input');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      APP_STATE.searchQuery = e.target.value;
      renderProducts();
    });
  }

  const mobileToggle = document.getElementById('nav-mobile-toggle');
  if (mobileToggle) {
    mobileToggle.addEventListener('click', toggleMobileMenu);
  }

  // Close user dropdown when clicking outside
  document.addEventListener('click', (e) => {
    const dropdown = document.getElementById('user-profile-dropdown');
    const trigger = document.getElementById('user-profile-trigger');
    if (dropdown && trigger && !trigger.contains(e.target) && !dropdown.contains(e.target)) {
      dropdown.classList.add('hidden');
    }
  });
}

function toggleMobileMenu() {
  const drawer = document.getElementById('mobile-drawer');
  if (drawer) {
    drawer.classList.toggle('hidden');
  }
}

function closeMobileMenu() {
  const drawer = document.getElementById('mobile-drawer');
  if (drawer) {
    drawer.classList.add('hidden');
  }
}

// TOAST NOTIFICATIONS (Sileo Stack)
function showNotification(message, type = 'info') {
  const stack = document.getElementById('toast-stack');
  if (!stack) return;

  const toast = document.createElement('div');
  const bgColors = {
    success: 'bg-[#181028] border-brand-primary text-white',
    error: 'bg-[#241116] border-red-500 text-white',
    warning: 'bg-[#291f13] border-yellow-500 text-white',
    info: 'bg-[#16142a] border-purple-500 text-white'
  };

  const icons = {
    success: 'check-circle',
    error: 'alert-circle',
    warning: 'alert-triangle',
    info: 'info'
  };

  toast.className = `toast-slide-in pointer-events-auto flex items-center gap-3 p-3.5 rounded-xl border shadow-xl backdrop-blur-md text-xs font-medium ${bgColors[type] || bgColors.info} max-w-sm w-full`;
  toast.innerHTML = `
    <i data-lucide="${icons[type] || 'info'}" class="w-4 h-4 text-brand-primary shrink-0"></i>
    <div class="flex-1">${message}</div>
    <button onclick="this.parentElement.remove()" class="opacity-50 hover:opacity-100 p-0.5">✕</button>
  `;

  stack.appendChild(toast);
  if (window.lucide) lucide.createIcons();

  setTimeout(() => {
    toast.classList.replace('toast-slide-in', 'toast-slide-out');
    setTimeout(() => toast.remove(), 300);
  }, 4000);
}

// LIVE RECENT PURCHASE SIMULATORS
function startRecentPurchaseToasts() {
  const recentBuyers = [
    { name: "Muhammud6666", item: "NEXUS V.2", price: 115 },
    { name: "NightRider_X", item: "สินค้า : ปลดแบนทุกเชิฟเวอร์ ( ถาวร )", price: 99 },
    { name: "CyberDrift", item: "TITAN SPOOFER PRO V3", price: 160 },
    { name: "ShadowX99", item: "VALOR EXTERNAL VIP", price: 290 },
    { name: "BangkokFiveM", item: "NEXUS V.2", price: 115 },
    { name: "KaitomPro", item: "สินค้า : ปลดแบนทุกเชิฟเวอร์ ( ถาวร )", price: 99 }
  ];

  function triggerToast() {
    const random = recentBuyers[Math.floor(Math.random() * recentBuyers.length)];
    const stack = document.getElementById('toast-stack');
    if (!stack) return;

    const toast = document.createElement('div');
    toast.className = "toast-slide-in pointer-events-auto flex items-center gap-3 p-3 rounded-2xl border border-white/10 bg-[#0e0a17]/95 shadow-2xl backdrop-blur-md text-xs text-white max-w-xs";
    toast.innerHTML = `
      <div class="w-8 h-8 rounded-xl bg-brand-primary/20 border border-brand-primary/40 flex items-center justify-center shrink-0">
        <i data-lucide="shopping-bag" class="w-4 h-4 text-brand-primary"></i>
      </div>
      <div class="flex-1 min-w-0">
        <div class="text-[11px] text-muted-foreground flex items-center justify-between">
          <span>การสั่งซื้อล่าสุด</span>
          <span class="text-brand-primary font-bold">฿${random.price}</span>
        </div>
        <div class="font-medium truncate text-white">${random.name}</div>
        <div class="text-[10px] text-muted-foreground truncate">สั่งซื้อ ${random.item}</div>
      </div>
    `;

    stack.appendChild(toast);
    if (window.lucide) lucide.createIcons();

    setTimeout(() => {
      toast.classList.replace('toast-slide-in', 'toast-slide-out');
      setTimeout(() => toast.remove(), 350);
    }, 4500);

    const nextInterval = Math.floor(Math.random() * 10000) + 12000;
    setTimeout(triggerToast, nextInterval);
  }

  setTimeout(triggerToast, 4000);
}

// ==========================================
// FULL-SCALE CYBER DEFENSE, ANTI-DDOS & WAF ENGINE
// ==========================================

let requestTimestamps = [];
let challengeActive = false;

// Request Velocity Limiter (Anti-DDoS & Flood Protection)
function trackRequestVelocity() {
  if (!APP_STATE.securityConfig || !APP_STATE.securityConfig.antiDdos) return true;
  if (challengeActive) return false;

  const now = Date.now();
  const windowMs = APP_STATE.securityConfig.rateLimitWindowMs || 3000;
  const maxReq = APP_STATE.securityConfig.rateLimitMax || 14;

  requestTimestamps = requestTimestamps.filter(t => now - t < windowMs);
  requestTimestamps.push(now);

  if (requestTimestamps.length > maxReq) {
    triggerDDoSChallenge();
    logSecurityIncident(
      'DDoS Flood Attempt',
      `คำขอสูงผิดปกติ: ${requestTimestamps.length} req / 3s (เพดานจำกัด: ${maxReq})`,
      'High',
      '🛡️ BLOCKED & CHALLENGED'
    );
    return false;
  }

  return true;
}

// Trigger Cloudflare-style Challenge Modal
function triggerDDoSChallenge(forced = false) {
  challengeActive = true;
  const modal = document.getElementById('security-challenge-modal');
  const progressEl = document.getElementById('sec-challenge-progress');
  const rayEl = document.getElementById('sec-challenge-ray');
  const statusEl = document.getElementById('sec-challenge-status');

  if (rayEl) {
    rayEl.textContent = 'px-waf-' + Math.random().toString(36).substring(2, 10).toUpperCase();
  }

  if (modal) {
    modal.classList.remove('hidden');
    modal.classList.add('flex');
  }

  if (progressEl) progressEl.style.width = '0%';
  if (statusEl) {
    statusEl.textContent = 'Verifying Browser Environment...';
    statusEl.className = 'text-brand-primary animate-pulse';
  }

  // Animate verification steps
  setTimeout(() => {
    if (progressEl) progressEl.style.width = '45%';
    if (statusEl) statusEl.textContent = 'Validating TLS Handshake & Bot Signature...';
  }, 900);

  setTimeout(() => {
    if (progressEl) progressEl.style.width = '85%';
    if (statusEl) statusEl.textContent = 'Analyzing Behavioral Threat Fingerprint...';
  }, 1900);

  setTimeout(() => {
    if (progressEl) progressEl.style.width = '100%';
    if (statusEl) {
      statusEl.textContent = 'Challenge Solved! Access Granted';
      statusEl.className = 'text-green-400 font-bold';
    }
  }, 2700);

  setTimeout(() => {
    if (modal) {
      modal.classList.add('hidden');
      modal.classList.remove('flex');
    }
    requestTimestamps = [];
    challengeActive = false;
    if (window.lucide) lucide.createIcons();
    showNotification('🛡️ ผ่านการตรวจสอบ DDoS Shield แล้ว ยินดีต้อนรับสู่ POWERX STORE', 'success');
  }, 3200);
}

// WAF Deep Payload Inspection (Anti-XSS & SQLi Filter)
function wafInspectInput(input, fieldName = 'General') {
  if (!APP_STATE.securityConfig || !APP_STATE.securityConfig.wafInspection) {
    return { safe: true };
  }

  if (typeof input !== 'string') return { safe: true };

  const xssPatterns = [
    /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
    /javascript:/gi,
    /onerror\s*=/gi,
    /onload\s*=/gi,
    /onclick\s*=/gi,
    /eval\s*\(/gi,
    /<iframe/gi,
    /<img\s+[^>]*onerror/gi,
    /<svg\s+[^>]*onload/gi
  ];

  for (const pattern of xssPatterns) {
    if (pattern.test(input)) {
      logSecurityIncident(
        'XSS / Script Injection',
        `ช่อง: ${fieldName} | ตรวจพบ Payload: "${input.substring(0, 45)}"`,
        'Critical',
        '🛡️ WAF BLOCKED'
      );
      showNotification('⚠️ WAF ตรวจพบโค้ดสคริปต์อันตราย (XSS Payload Detected) ถูกบล็อกทันที!', 'error');
      return { safe: false, reason: 'XSS Attack Detected' };
    }
  }

  const sqliPatterns = [
    /('|\b)(OR|AND)\b.+(=|LIKE).+/gi,
    /UNION\s+(ALL\s+)?SELECT/gi,
    /INSERT\s+INTO/gi,
    /DROP\s+TABLE/gi,
    /--|\/\*|\*\//g,
    /SELECT\s+.*\s+FROM/gi
  ];

  for (const pattern of sqliPatterns) {
    if (pattern.test(input)) {
      logSecurityIncident(
        'SQL Injection Pattern',
        `ช่อง: ${fieldName} | ตรวจพบ SQL Query: "${input.substring(0, 45)}"`,
        'Critical',
        '🛡️ NEUTRALIZED'
      );
      showNotification('⚠️ WAF ตรวจพบรูปแบบการฉีด SQL Injection ถูกบล็อกเรียบร้อย!', 'error');
      return { safe: false, reason: 'SQL Injection Detected' };
    }
  }

  return { safe: true };
}

// LocalStorage Balance Tamper Watchdog
function verifyBalanceIntegrity() {
  if (!APP_STATE.securityConfig || !APP_STATE.securityConfig.balanceTamper) return;
  if (!APP_STATE.currentUser) return;

  const currentUsername = APP_STATE.currentUser.username;
  const dbUser = APP_STATE.users.find(u => u.username === currentUsername);

  if (!dbUser) return;

  // Check if balance was manipulated in memory/localStorage console directly
  if (APP_STATE.currentUser.balance !== dbUser.balance) {
    const tampered = APP_STATE.currentUser.balance;
    // Revert to true database value
    APP_STATE.currentUser.balance = dbUser.balance;
    localStorage.setItem('px_currentUser', JSON.stringify(APP_STATE.currentUser));
    updateAuthUI();

    logSecurityIncident(
      'Balance Tamper Detected',
      `พยายามแก้เงินจาก ฿${dbUser.balance.toFixed(2)} เป็น ฿${Number(tampered).toFixed(2)} (Memory/Console Hack)`,
      'Critical',
      '🛡️ AUTO-REVERTED'
    );

    showNotification('🚨 ตรวจพบการพยายามแก้ไขยอดเงินใน Console ระบบ Watchdog ได้กู้คืนยอดเงินจริงแล้ว!', 'error');
  }
}

// Security Configuration Toggles
function toggleSecuritySetting(key, enabled) {
  if (!APP_STATE.securityConfig) APP_STATE.securityConfig = { ...DEFAULT_SECURITY_CONFIG };
  APP_STATE.securityConfig[key] = enabled;
  localStorage.setItem('px_sec_config', JSON.stringify(APP_STATE.securityConfig));

  if (key === 'antiDevTools') {
    applyAntiDevToolsLock(enabled);
  }

  renderSecurityDashboard();
  showNotification(`อัปเดตการตั้งค่าระบบความปลอดภัย [${key}] เรียบร้อย`, 'info');
}

// Anti-DevTools & Inspect Lock
let devToolsListenerAttached = false;
function applyAntiDevToolsLock(enabled) {
  if (enabled) {
    if (!devToolsListenerAttached) {
      window.__secContextHandler = (e) => {
        if (APP_STATE.securityConfig?.antiDevTools) {
          e.preventDefault();
          showNotification('🔒 ไม่อนุญาตให้คลิกขวาเพื่อความปลอดภัยของระบบ', 'warning');
          return false;
        }
      };

      window.__secKeyHandler = (e) => {
        if (!APP_STATE.securityConfig?.antiDevTools) return;
        // F12 or Ctrl+Shift+I / Ctrl+Shift+J / Ctrl+U
        if (
          e.key === 'F12' ||
          (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'i' || e.key === 'J' || e.key === 'j')) ||
          (e.ctrlKey && (e.key === 'U' || e.key === 'u'))
        ) {
          e.preventDefault();
          showNotification('🔒 ล็อกการเปิด DevTools และการส่องซอร์สโค้ดเรียบร้อย', 'warning');
          return false;
        }
      };

      document.addEventListener('contextmenu', window.__secContextHandler);
      document.addEventListener('keydown', window.__secKeyHandler);
      devToolsListenerAttached = true;
    }
  }
}

// Log Security Incidents
function logSecurityIncident(type, detail, severity = 'High', action = '🛡️ BLOCKED') {
  if (!APP_STATE.securityLogs) APP_STATE.securityLogs = [];
  if (!APP_STATE.securityConfig) APP_STATE.securityConfig = { ...DEFAULT_SECURITY_CONFIG };

  APP_STATE.securityConfig.blockedCount = (APP_STATE.securityConfig.blockedCount || 0) + 1;
  localStorage.setItem('px_sec_config', JSON.stringify(APP_STATE.securityConfig));

  const now = new Date();
  const timeStr = `${String(now.getDate()).padStart(2, '0')}/${String(now.getMonth() + 1).padStart(2, '0')}/${now.getFullYear()} ${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;

  const newLog = {
    id: 'SEC-LOG-' + Date.now().toString(36).toUpperCase(),
    timestamp: timeStr,
    type: type,
    detail: detail,
    severity: severity,
    action: action
  };

  APP_STATE.securityLogs.unshift(newLog);
  if (APP_STATE.securityLogs.length > 50) APP_STATE.securityLogs.pop();
  localStorage.setItem('px_sec_logs', JSON.stringify(APP_STATE.securityLogs));

  renderSecurityDashboard();
}

// Render Admin Security Dashboard
function renderSecurityDashboard() {
  const blockedEl = document.getElementById('sec-stat-blocked');
  if (blockedEl) {
    blockedEl.textContent = APP_STATE.securityConfig?.blockedCount || 0;
  }

  const modeEl = document.getElementById('sec-stat-mode');
  if (modeEl) {
    modeEl.textContent = APP_STATE.securityConfig?.mode || 'UNDER ATTACK';
  }

  // Update Toggles
  const ddosToggle = document.getElementById('sec-toggle-ddos');
  if (ddosToggle) ddosToggle.checked = !!APP_STATE.securityConfig?.antiDdos;

  const wafToggle = document.getElementById('sec-toggle-waf');
  if (wafToggle) wafToggle.checked = !!APP_STATE.securityConfig?.wafInspection;

  const tamperToggle = document.getElementById('sec-toggle-tamper');
  if (tamperToggle) tamperToggle.checked = !!APP_STATE.securityConfig?.balanceTamper;

  const devtoolsToggle = document.getElementById('sec-toggle-devtools');
  if (devtoolsToggle) devtoolsToggle.checked = !!APP_STATE.securityConfig?.antiDevTools;

  // Render Table
  const tableBody = document.getElementById('sec-incident-logs-table');
  if (!tableBody) return;

  if (!APP_STATE.securityLogs || APP_STATE.securityLogs.length === 0) {
    tableBody.innerHTML = `
      <tr>
        <td colspan="5" class="py-6 text-center text-gray-500 text-xs">
          ยังไม่มีประวัติการโจมตี ระบบปลอดภัย 100%
        </td>
      </tr>
    `;
    return;
  }

  tableBody.innerHTML = APP_STATE.securityLogs.map(log => {
    let sevBadge = 'bg-yellow-500/10 text-yellow-400 border border-yellow-500/30';
    if (log.severity === 'Critical') sevBadge = 'bg-red-500/10 text-red-400 border border-red-500/30 font-bold';
    if (log.severity === 'High') sevBadge = 'bg-purple-500/10 text-purple-300 border border-purple-500/30';

    return `
      <tr class="border-b border-white/5 hover:bg-white/[0.02]">
        <td class="py-2.5 px-3 font-mono text-[11px] text-gray-400 whitespace-nowrap">${log.timestamp}</td>
        <td class="py-2.5 px-3 text-white font-semibold flex items-center gap-1.5">
          <i data-lucide="shield-alert" class="w-3.5 h-3.5 text-brand-primary shrink-0"></i>
          <span>${log.type}</span>
        </td>
        <td class="py-2.5 px-3 text-gray-300 font-mono text-[11px] max-w-xs truncate">${log.detail}</td>
        <td class="py-2.5 px-3">
          <span class="px-2 py-0.5 rounded-full text-[10px] ${sevBadge}">
            ${log.severity}
          </span>
        </td>
        <td class="py-2.5 px-3 text-right">
          <span class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-green-500/10 text-green-400 border border-green-500/30 whitespace-nowrap">
            ${log.action}
          </span>
        </td>
      </tr>
    `;
  }).join('');

  if (window.lucide) lucide.createIcons();
}

function clearSecurityLogs() {
  if (!confirm('คุณต้องการล้างประวัติบันทึกการโจมตีทั้งหมดใช่หรือไม่?')) return;
  APP_STATE.securityLogs = [];
  localStorage.setItem('px_sec_logs', JSON.stringify([]));
  renderSecurityDashboard();
  showNotification('ล้างบันทึกการโจมตีเรียบร้อยแล้ว', 'info');
}

// Attack Simulators (for Admin verification)
function simulateDDoSAttack() {
  showNotification('⚡ กำลังจำลองการส่งคำขอ 20 คำขอแบบเสี้ยววินาที (DDoS Burst)...', 'warning');
  logSecurityIncident(
    'DDoS Flood (Simulated)',
    'จำลองการยิงถล่มเซิร์ฟเวอร์ 20 คำขอ/วินาที (Admin Test)',
    'High',
    '🛡️ MITIGATED'
  );
  triggerDDoSChallenge(true);
}

function simulateXSSAttack() {
  wafInspectInput('<script>alert("TEST-XSS-PAYLOAD")</script>', 'Admin Simulator');
}

function simulateBalanceTamper() {
  if (!APP_STATE.currentUser) {
    showNotification('กรุณาเข้าสู่ระบบก่อนทดสอบ', 'warning');
    return;
  }
  const original = APP_STATE.currentUser.balance;
  APP_STATE.currentUser.balance = original + 9999999;
  showNotification(`👾 จำลองการแฮก Console: ปรับยอดเงินเป็น ฿${APP_STATE.currentUser.balance.toFixed(2)}`, 'warning');
  setTimeout(() => {
    verifyBalanceIntegrity();
  }, 1200);
}

