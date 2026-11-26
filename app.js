/* แฟ้มผลงานและการประเมินครู — app.js (เฟส 2) · ES5 เท่านั้น */
(function () {
  'use strict';
  var ICON = {
    home: '<path d="M3 10.5 12 3l9 7.5V21h-6v-6H9v6H3z"/>',
    file: '<path d="M14 3H6v18h12V7z"/><path d="M14 3v4h4"/>',
    award: '<circle cx="12" cy="9" r="6"/><path d="M8.5 14 7 21l5-3 5 3-1.5-7"/>',
    image: '<rect x="3" y="5" width="18" height="14" rx="2"/><circle cx="9" cy="10" r="1.6"/><path d="m21 16-5-5-9 8"/>',
    users: '<circle cx="9" cy="8" r="3.5"/><path d="M2.5 20c.8-3.6 3.4-5.5 6.5-5.5s5.7 1.9 6.5 5.5"/><path d="M16 4.5a3.5 3.5 0 0 1 0 7"/><path d="M18 14.5c2 .6 3.2 2.5 3.5 5.5"/>',
    lock: '<rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/>',
    chart: '<path d="M3 20h18"/><path d="M6 16v-5"/><path d="M11 16V6"/><path d="M16 16v-8"/>',
    cal: '<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/>',
    gear: '<circle cx="12" cy="12" r="3.5"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9 7 7M17 17l2.1 2.1M4.9 19.1 7 17M17 7l2.1-2.1"/>',
    list: '<path d="M8 6h13M8 12h13M8 18h13M3.5 6h.01M3.5 12h.01M3.5 18h.01"/>',
    logout: '<path d="M15 4h4v16h-4"/><path d="m10 8-4 4 4 4"/><path d="M6 12h11"/>',
    plus: '<path d="M12 5v14M5 12h14"/>',
    edit: '<path d="M4 20h4L19 9l-4-4L4 16z"/>',
    trash: '<path d="M4 7h16M9 7V4h6v3"/><path d="m6 7 1 13h10l1-13"/>',
    eye: '<path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/>',
    upload: '<path d="M12 16V4M7 9l5-5 5 5M4 20h16"/>',
    download: '<path d="M12 4v12M7 11l5 5 5-5M4 20h16"/>',
    check: '<path d="m5 12.5 4.5 4.5L19 7"/>',
    x: '<path d="M6 6l12 12M18 6 6 18"/>',
    book: '<path d="M4 4.5A1.5 1.5 0 0 1 5.5 3H20v15H5.5A1.5 1.5 0 0 0 4 19.5z"/><path d="M4 19.5A1.5 1.5 0 0 0 5.5 21H20"/>',
    monitor: '<rect x="3" y="4" width="18" height="12" rx="1.5"/><path d="M8 20h8M12 16v4"/>',
    flask: '<path d="M9 3h6M10 3v6L4.5 19A1.5 1.5 0 0 0 5.8 21h12.4a1.5 1.5 0 0 0 1.3-2L14 9V3"/>',
    brief: '<rect x="3" y="7" width="18" height="13" rx="2"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 13h18"/>',
    clip: '<rect x="5" y="4" width="14" height="17" rx="2"/><path d="M9 4V3h6v1M9 11h6M9 15h4"/>',
    shield: '<path d="M12 3l8 3v6c0 4.5-3.4 8-8 9-4.6-1-8-4.5-8-9V6z"/><path d="m9 12 2 2 4-4"/>',
    search: '<circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/>',
    chev: '<path d="m9 6 6 6-6 6"/>',
    left: '<path d="m15 6-6 6 6 6"/>',
    coins: '<circle cx="12" cy="12" r="9"/><path d="M9 8h4.5a2 2 0 0 1 0 4H9h5a2 2 0 0 1 0 4H9zM11 6v2M11 16v2"/>',
    layers: '<path d="m12 3 9 5-9 5-9-5z"/><path d="m3 13 9 5 9-5"/>',
    grid: '<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>',
    folder: '<path d="M3 6a1 1 0 0 1 1-1h5l2 2h9a1 1 0 0 1 1 1v11H3z"/>',
    link: '<path d="M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1"/><path d="M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1"/>',
    video: '<rect x="3" y="6" width="13" height="12" rx="2"/><path d="m16 10 5-3v10l-5-3z"/>',
    play: '<path d="M9 6.5v11l9-5.5z" fill="currentColor"/>',
    grad: '<path d="M2 9.5 12 5l10 4.5L12 14z"/><path d="M6 11.5V16c3.5 2.5 8.5 2.5 12 0v-4.5"/><path d="M22 9.5V15"/>',
    user: '<circle cx="12" cy="8" r="4"/><path d="M4 21c1-4 4-6 8-6s7 2 8 6"/>',
    code: '<path d="m8 8-4 4 4 4M16 8l4 4-4 4M13.5 5l-3 14"/>',
    chat: '<path d="M4 5h16v11H9l-5 4z"/>',
    ext: '<path d="M14 4h6v6M20 4l-9 9"/><path d="M18 14v6H4V6h6"/>',
    spark: '<path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z"/><path d="M19 15l.8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8z"/>',
    sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',
    bell: '<path d="M6 8a6 6 0 1 1 12 0c0 7 3 8 3 8H3s3-1 3-8"/><path d="M10 20a2 2 0 0 0 4 0"/>',
    pen: '<path d="M4 20h4L19 9l-4-4L4 16z"/><path d="M14 6l4 4"/>',
    cloud: '<path d="M7 18a5 5 0 1 1 1-9.9A6 6 0 0 1 19.5 10 4 4 0 0 1 18 18z"/>',
    refresh: '<path d="M20 11a8 8 0 0 0-14.6-4.5L4 8"/><path d="M4 3v5h5"/><path d="M4 13a8 8 0 0 0 14.6 4.5L20 16"/><path d="M20 21v-5h-5"/>',
    target: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/>',
    calc: '<rect x="5" y="3" width="14" height="18" rx="2"/><path d="M8 7h8M8 12h1M12 12h1M16 12h.01M8 16h1M12 16h1M16 15v2"/>',
    slides: '<rect x="3" y="4" width="18" height="12" rx="1.5"/><path d="M12 16v4M8 20h8"/>',
    print: '<path d="M7 9V3h10v6"/><rect x="3" y="9" width="18" height="8" rx="2"/><path d="M7 14h10v7H7z"/>',
    copy: '<rect x="8" y="8" width="12" height="12" rx="2"/><path d="M16 8V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h3"/>'
  };
  function ic(n, s) {
    s = s || 18;
    return '<svg class="ic" width="' + s + '" height="' + s + '" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + (ICON[n] || '') + '</svg>';
  }
  function esc(s) {
    return String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }
  function $(id) { return document.getElementById(id); }
  var TH_M = ['ม.ค.', 'ก.พ.', 'มี.ค.', 'เม.ย.', 'พ.ค.', 'มิ.ย.', 'ก.ค.', 'ส.ค.', 'ก.ย.', 'ต.ค.', 'พ.ย.', 'ธ.ค.'];
  function fd(s) {
    if (!s) return '-';
    var p = s.split('-');
    return parseInt(p[2], 10) + ' ' + TH_M[parseInt(p[1], 10) - 1] + ' ' + ((parseInt(p[0], 10) + 543) % 100);
  }
  function beYear(s) { return parseInt(s.split('-')[0], 10) + 543; }
  function fix(n, d) { return (Math.round(n * Math.pow(10, d)) / Math.pow(10, d)).toFixed(d); }
  function uid(p) { return p + Math.random().toString(36).slice(2, 7); }
  function find(arr, key, val) { for (var i = 0; i < arr.length; i++) { if (arr[i][key] === val) return arr[i]; } return null; }
  function seeded(seed) { var s = seed; return function () { s = (s * 1103515245 + 12345) % 2147483648; return s / 2147483648; }; }

  var THEMES = {
    teal: { name: 'เขียวหยก', a: '#0c6a57', s: '#dfeee9', ad: '#4cb79c', sd: '#16332c', cv: '#0c5145', cv2: '#07362d', hi: '#a9dccd' },
    indigo: { name: 'น้ำเงินคราม', a: '#3046a8', s: '#e3e7f7', ad: '#8b9cf0', sd: '#1e2547', cv: '#1f2d6e', cv2: '#141d48', hi: '#b9c4f5' },
    crimson: { name: 'แดงเลือดหมู', a: '#9c2a3a', s: '#f6e1e4', ad: '#f08a98', sd: '#3a1a1f', cv: '#6b1d29', cv2: '#45121a', hi: '#f2b8c0' },
    amber: { name: 'ทองอำพัน', a: '#8a5a00', s: '#f6ebd3', ad: '#e3ad4f', sd: '#33270f', cv: '#5c3d05', cv2: '#3a2603', hi: '#f0d39a' },
    violet: { name: 'ม่วงพุทธรักษา', a: '#6b3fa0', s: '#ece3f6', ad: '#b892e8', sd: '#2a1f3b', cv: '#452769', cv2: '#2c1844', hi: '#d6c2f2' },
    ocean: { name: 'ฟ้าทะเล', a: '#0b6e99', s: '#ddeef6', ad: '#5fb6dc', sd: '#122f3c', cv: '#0a4a66', cv2: '#063244', hi: '#a8dcf0' },
    sakura: { name: 'ชมพูซากุระ', pastel: true, a: '#a8405f', s: '#fbe8ee', ad: '#f2a3bd', sd: '#3b2229', cv: '#f8d9e4', cv2: '#f1c0d1', hi: '#a8405f' },
    mint: { name: 'มิ้นต์', pastel: true, a: '#2a7660', s: '#e1f5ee', ad: '#86d4b8', sd: '#173229', cv: '#cfeee2', cv2: '#b3e3d0', hi: '#2a7660' },
    lavender: { name: 'ลาเวนเดอร์', pastel: true, a: '#5f4aa8', s: '#ece8fb', ad: '#b8a8f0', sd: '#26203f', cv: '#e3ddf8', cv2: '#cfc5f0', hi: '#5f4aa8' },
    peach: { name: 'พีช', pastel: true, a: '#a5532a', s: '#fdece2', ad: '#f2ac85', sd: '#3a2419', cv: '#fcdcc9', cv2: '#f7c5a8', hi: '#a5532a' },
    sky: { name: 'ฟ้าพาสเทล', pastel: true, a: '#2b6aa3', s: '#e3f0fb', ad: '#93c3ec', sd: '#172a3b', cv: '#d4e8f8', cv2: '#bcd9f2', hi: '#2b6aa3' },
    lemon: { name: 'เหลืองมะนาว', pastel: true, a: '#7a5e00', s: '#fbf4d6', ad: '#e8cf6a', sd: '#302a12', cv: '#f8eebb', cv2: '#f0e08e', hi: '#7a5e00' }
  };
  function hx(h) { h = h.replace('#', ''); if (h.length === 3) h = h.charAt(0) + h.charAt(0) + h.charAt(1) + h.charAt(1) + h.charAt(2) + h.charAt(2); return [parseInt(h.slice(0, 2), 16), parseInt(h.slice(2, 4), 16), parseInt(h.slice(4, 6), 16)]; }
  function toHex(c) { return '#' + c.map(function (v) { var t = Math.round(Math.max(0, Math.min(255, v))).toString(16); return t.length < 2 ? '0' + t : t; }).join(''); }
  function mix(a, b, t) { var x = hx(a), y = hx(b); return toHex([x[0] + (y[0] - x[0]) * t, x[1] + (y[1] - x[1]) * t, x[2] + (y[2] - x[2]) * t]); }
  function lum(h) { return hx(h).map(function (v) { v /= 255; return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4); }).reduce(function (s, v, i) { return s + v * [0.2126, 0.7152, 0.0722][i]; }, 0); }
  function contrast(a, b) { var l1 = lum(a), l2 = lum(b); return (Math.max(l1, l2) + 0.05) / (Math.min(l1, l2) + 0.05); }
  function deriveTheme(c) {
    var light = lum(c.cv) > 0.45;
    return { name: 'กำหนดเอง', custom: true, pastel: light, a: c.a, s: mix(c.a, '#ffffff', 0.88), ad: mix(c.a, '#ffffff', 0.45), sd: mix(c.a, '#000000', 0.72), cv: c.cv, cv2: light ? mix(c.cv, '#000000', 0.1) : mix(c.cv, '#000000', 0.35), hi: light ? c.a : mix(c.cv, '#ffffff', 0.62) };
  }
  function themeOf(y) { if (!y) return THEMES.teal; if (y.theme === 'custom') return deriveTheme({ a: y.customA || '#0c6a57', cv: y.customCv || '#0c5145' }); return THEMES[y.theme] || THEMES.teal; }
  function applyTheme() {
    applySkin();
    var t = activePalette(), L = !!t.pastel || lum(t.cv) > 0.45;
    var ink = contrast(t.a, '#ffffff') >= 4.5 ? '#ffffff' : '#14222a';
    var cv = L ? ';--cv-ink:#1b2430;--cv-ink2:#3a4656;--cv-glass:rgba(255,255,255,.6);--cv-border:rgba(0,0,0,.12);--cv-grid:rgba(0,0,0,.06);--cv-grid2:rgba(0,0,0,.028);--cv-glyph:rgba(0,0,0,.07);--cv-shade:linear-gradient(to top,rgba(255,255,255,.7),rgba(255,255,255,.15) 60%,rgba(255,255,255,0));--cv-btn:rgba(255,255,255,.55);--cv-btn-bd:rgba(0,0,0,.18);--cv-pbg:' + t.a + ';--cv-pfg:' + ink
      : ';--cv-ink:#ffffff;--cv-ink2:' + mix(t.cv, '#ffffff', 0.85) + ';--cv-glass:rgba(255,255,255,.14);--cv-border:rgba(255,255,255,.22);--cv-grid:rgba(255,255,255,.08);--cv-grid2:rgba(255,255,255,.035);--cv-glyph:rgba(255,255,255,.1);--cv-shade:linear-gradient(to top,' + mix(t.cv2, '#000000', 0.55) + 'e6,' + t.cv2 + '40 60%,' + t.cv2 + '0d);--cv-btn:rgba(255,255,255,.1);--cv-btn-bd:rgba(255,255,255,.4);--cv-pbg:#ffffff;--cv-pfg:' + t.cv;
    var css = ':root{--accent:' + t.a + ';--accent-ink:' + ink + ';--accent-soft:' + t.s + ';--cover:' + t.cv + ';--cover-2:' + t.cv2 + ';--cover-hi:' + t.hi + cv + '}' +
      '@media (prefers-color-scheme: dark){:root:not([data-theme="light"]){--accent:' + t.ad + ';--accent-soft:' + t.sd + '}}' +
      ':root[data-theme="dark"]{--accent:' + t.ad + ';--accent-soft:' + t.sd + '}' +
      '@media (prefers-color-scheme: dark){:root:not([data-theme="light"]){--accent-ink:#0b1418}}:root[data-theme="dark"]{--accent-ink:#0b1418}';
    var el = document.getElementById('theme-css');
    if (!el) { el = document.createElement('style'); el.id = 'theme-css'; document.head.appendChild(el); }
    el.textContent = css;
  }
  function applyA11y() {
    var r = document.documentElement, a = S.a11y;
    if (a.mode === 'auto') r.removeAttribute('data-theme'); else r.setAttribute('data-theme', a.mode);
    r.style.zoom = a.zoom === '1' ? '' : a.zoom;
    r.classList.toggle('calm', a.motion === 'off');
    r.classList.toggle('hc', a.contrast === 'high');
    try { localStorage.setItem('pa-a11y', JSON.stringify(a)); } catch (e1) {}
  }
  function a11yControls() {
    var a = S.a11y;
    function seg(key, opts) { return '<div class="seg" role="group">' + opts.map(function (o) { return '<button type="button" data-act="a11y-set" data-k="' + key + '" data-v="' + o[0] + '" class="' + (a[key] === o[0] ? 'on' : '') + '" aria-pressed="' + (a[key] === o[0]) + '">' + o[1] + '</button>'; }).join('') + '</div>'; }
    return '<div class="field"><label>โหมดสี</label>' + seg('mode', [['auto', 'ตามเครื่อง'], ['light', 'สว่าง'], ['dark', 'มืด']]) + '</div>' +
      '<div class="field"><label>ขนาดตัวอักษร</label>' + seg('zoom', [['1', 'ปกติ'], ['1.12', 'ใหญ่'], ['1.25', 'ใหญ่มาก']]) + '</div>' +
      '<div class="field"><label>ภาพเคลื่อนไหว</label>' + seg('motion', [['on', 'แสดง'], ['off', 'ลดการเคลื่อนไหว']]) + '</div>' +
      '<div class="field"><label>ความชัดของตัวอักษร</label>' + seg('contrast', [['normal', 'ปกติ'], ['high', 'เข้มขึ้น']]) + '</div>' +
      visitorSkinControl() + '<p class="small muted">ค่าที่เลือกจำไว้ในเบราว์เซอร์เครื่องนี้ ไม่กระทบผู้ชมคนอื่น</p>';
  }
  function openA11y() { openModal('การแสดงผล', a11yControls(), '<button class="btn primary" data-act="close-modal">เสร็จแล้ว</button>'); }

  /* ---------- ค่าคงที่และสถานะ ---------- */
  var CFG = window.APP_CONFIG || {};
  var GAS_URL = String(CFG.GAS_URL || '');
  var CACHE_KEY = 'tp-public-v1', TOKEN_KEY = 'tp-token';
  var FOOTER = 'พัฒนาโดย นายชิติพัทธ์ นิลวรรณ ตำแหน่ง ครู โรงเรียนบ้านละลม สพป.ศรีสะเกษ เขต 3';
  var REDUCED = !!(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  var EMPTY_CONTENT = { works: [], albums: [], photos: [], videos: [], awards: [], systems: [] };
  var D = { settings: null, education: [], career: [], years: [], content: clone(EMPTY_CONTENT), logs: [], version: '', admin: null };
  var S = {
    admin: false, token: '', authPending: false, fy: 0, pages: {}, pageInfo: {}, perKey: {}, awFilter: 'all', sysFilter: 'all', lb: null,
    loginErr: '', loadErr: '', confirmFn: null, draft: null, dirty: {}, coverPaused: REDUCED,
    a11y: { mode: 'auto', zoom: '1', motion: 'on', contrast: 'normal' }
  };
  try { var a11ySaved = JSON.parse(localStorage.getItem('pa-a11y') || 'null'); if (a11ySaved) S.a11y = a11ySaved; } catch (e0) { }

  function configured() { return /^https:\/\/script\.google\.com\/macros\/s\/[\w-]{20,}\/exec$/.test(GAS_URL); }
  function clone(o) { return JSON.parse(JSON.stringify(o)); }
  function st() { return (S.draft && S.draft.s) || D.settings || {}; }
  function yearOf(fy) { return find(D.years, 'fy', fy); }
  function roundRange(fy, r) { var y = fy - 543; return r === 1 ? [(y - 1) + '-10-01', y + '-03-31'] : [y + '-04-01', y + '-09-30']; }
  function blank(s) { return esc(s).replace(/\[([^\]]+)\]/g, '<span class="ph-blank">[$1]</span>'); }
  function nfmt(n) { return String(Math.round(n)).replace(/\B(?=(\d{3})+(?!\d))/g, ','); }
  function fdt(s) { s = String(s || ''); return s ? fd(s.slice(0, 10)) + (s.length > 10 ? ' ' + s.slice(11, 16) + ' น.' : '') : '-'; }

  /* ---------- ตัวเชื่อม GAS ---------- */
  var API_MSG = { getPublic: 'กำลังโหลดข้อมูล', login: 'กำลังตรวจสอบรหัสผ่าน', adminBoot: 'กำลังโหลดข้อมูลหลังบ้าน', upload: 'กำลังอัปโหลดไฟล์เข้า Google Drive', saveProfileAll: 'กำลังบันทึก', saveYear: 'กำลังบันทึกปีงบประมาณ', changePassword: 'กำลังเปลี่ยนรหัสผ่าน' };
  function api(action, data, opt, cb) {
    opt = opt || {};
    if (!configured()) { cb('ยังไม่ได้ใส่ GAS_URL ในไฟล์ config.js'); return; }
    var msg = opt.loader === false ? null : (opt.loader || API_MSG[action] || 'กำลังบันทึกข้อมูล');
    if (msg) showLoader(msg);
    var done = false, timer = setTimeout(function () { finish('เชื่อมต่อนานเกินไป ลองใหม่อีกครั้ง'); }, opt.timeout || 60000);
    function finish(err, res) {
      if (done) return; done = true; clearTimeout(timer); if (msg) hideLoader();
      if (err === 'AUTH') { authLost(); cb('หมดเวลาการเข้าสู่ระบบ กรุณาเข้าสู่ระบบใหม่'); return; }
      cb(err, res);
    }
    fetch(GAS_URL, { method: 'POST', headers: { 'Content-Type': 'text/plain;charset=utf-8' }, body: JSON.stringify({ action: action, token: S.token, data: data || {} }), redirect: 'follow' })
      .then(function (r) { if (!r.ok) throw new Error('HTTP ' + r.status); return r.json(); })
      .then(function (j) { if (j.ok) finish(null, j.data); else finish(j.error || 'เกิดข้อผิดพลาด'); })
      .catch(function (e) { finish('เชื่อมต่อเซิร์ฟเวอร์ไม่ได้ (' + (e && e.message ? e.message : e) + ')'); });
  }
  function saveToken(t, remember) {
    S.token = t || '';
    try { localStorage.removeItem(TOKEN_KEY); sessionStorage.removeItem(TOKEN_KEY); if (t) (remember ? localStorage : sessionStorage).setItem(TOKEN_KEY, t); } catch (e) { }
  }
  function loadToken() { try { return localStorage.getItem(TOKEN_KEY) || sessionStorage.getItem(TOKEN_KEY) || ''; } catch (e) { return ''; } }
  function authLost() {
    saveToken(''); S.admin = false; D.admin = null; D.docs = {}; S.draft = null; S.dirty = {}; S.form = null; backToPublic();
    S.loginErr = 'หมดเวลาการเข้าสู่ระบบ กรุณาเข้าสู่ระบบใหม่';
    if (route().indexOf('admin') === 0) location.hash = 'login'; else render();
  }
  function setContent(c) { var o = {}; for (var k in EMPTY_CONTENT) o[k] = (c && c[k]) || []; D.content = o; }
  function setPublic(data, fromCache) {
    D.settings = data.settings; D.education = data.education || []; D.career = data.career || []; D.years = data.years || []; D.version = data.version || '';
    if (!S.admin || !D.admin) setContent(data.content);
    if (!S.fy || !yearOf(S.fy)) S.fy = +D.settings.defaultFy || (D.years[0] && D.years[0].fy) || fyNow(new Date());
    if (!fromCache) { try { localStorage.setItem(CACHE_KEY, JSON.stringify(data)); } catch (e) { } }
  }
  function setAdmin(data) {
    D.docs = {};
    D.admin = { logs: data.logs || [], mustChange: !!data.mustChange, sheetUrl: data.sheetUrl, folderUrl: data.folderUrl };
    D.logs = data.logs || [];
    setPublic({ settings: data.settings, education: data.education, career: data.career, years: data.years, version: data.version }, true);
    setContent(data.content);
  }

  /* ---------- ฉบับร่างการแก้ไข (เก็บไว้จนกว่าจะบันทึกหรือยกเลิก) ---------- */
  function ensureDraft() {
    if (!S.draft) S.draft = { s: clone(D.settings), edu: clone(D.education), car: clone(D.career) };
    return S.draft;
  }
  function dirtyCount() { var n = 0; for (var k in S.dirty) if (S.dirty[k]) n++; return n; }
  function discardDraft() { S.draft = null; S.dirty = {}; }
  function markDirty(k) { S.dirty[k] = true; var b = $('dirty-bar'); if (b) b.outerHTML = dirtyBar(); }
  function dirtyBar() {
    var n = dirtyCount();
    if (!n) return '<div id="dirty-bar"></div>';
    return '<div id="dirty-bar" class="dirty-bar" role="status">' + ic('edit', 16) + '<span>มีการแก้ไขที่ยังไม่บันทึก ' + n + ' รายการ</span><span class="sp"></span><button class="btn sm" data-act="draft-discard">ยกเลิกการแก้ไข</button><button class="btn sm primary" data-act="draft-save">' + ic('check', 15) + ' บันทึกทั้งหมด</button></div>';
  }
  function saveDraft(cb) {
    var d = S.draft; if (!d) { if (cb) cb(); return; }
    var payload = {}, sv = {}, any = false;
    for (var k in S.dirty) { if (!S.dirty[k]) continue; if (k.indexOf('s.') === 0) { sv[k.slice(2)] = d.s[k.slice(2)]; any = true; } }
    if (any) payload.settings = sv;
    if (S.dirty.edu) payload.education = d.edu;
    if (S.dirty.car) payload.career = d.car;
    api('saveProfileAll', payload, {}, function (err, res) {
      if (err) { toast(err); return; }
      D.settings = res.settings; D.education = res.education; D.career = res.career;
      discardDraft(); cachePublic(); render(); toast('บันทึกเรียบร้อย'); if (cb) cb();
    });
  }
  function cachePublic() {
    // ข้อมูลผลงานของแอดมินมีรายการส่วนตัว จึงไม่เขียนลงแคชสาธารณะ ใช้ของเดิมที่โหลดจากหน้าสาธารณะ
    try {
      var old = JSON.parse(localStorage.getItem(CACHE_KEY) || 'null') || {}, s = clone(D.settings);
      ['coverId', 'coverStillId', 'avatarId', 'logoId'].forEach(function (k) { delete s[k]; });
      s.coverSlides = (s.coverSlides || []).map(function (x) { return { url: x.url, type: x.type, still: x.still, cap: x.cap }; });
      localStorage.setItem(CACHE_KEY, JSON.stringify({ settings: s, education: D.education.map(function (e) { var x = clone(e); delete x.logoId; return x; }), career: D.career, years: D.years, content: S.admin ? old.content : D.content, version: D.version }));
    } catch (e) { }
  }

  /* ---------- ภาพ: ย่อขนาดก่อนอัปโหลด ---------- */
  function readAsDataUrl(file, cb) { var r = new FileReader(); r.onload = function () { cb(null, String(r.result)); }; r.onerror = function () { cb('อ่านไฟล์ไม่ได้'); }; r.readAsDataURL(file); }
  function b64Of(dataUrl) { return dataUrl.slice(dataUrl.indexOf(',') + 1); }
  function prepImage(file, maxW, maxH, keepPng, cb) {
    var isGif = file.type === 'image/gif';
    readAsDataUrl(file, function (err, url) {
      if (err) return cb(err);
      var img = new Image();
      img.onload = function () {
        var w = img.naturalWidth, h = img.naturalHeight, k = Math.min(1, maxW / w, maxH / h);
        var c = document.createElement('canvas'); c.width = Math.max(1, Math.round(w * k)); c.height = Math.max(1, Math.round(h * k));
        var x = c.getContext('2d');
        if (isGif) {
          // GIF ส่งไฟล์เดิมเพื่อให้ยังเคลื่อนไหว และทำภาพนิ่งเฟรมแรกไว้ใช้ตอนหยุดภาพ
          x.drawImage(img, 0, 0, c.width, c.height);
          return cb(null, { mime: 'image/gif', b64: b64Of(url), stillB64: b64Of(c.toDataURL('image/jpeg', 0.82)), w: w, h: h, size: file.size });
        }
        var png = keepPng && file.type === 'image/png';
        if (!png) { x.fillStyle = '#ffffff'; x.fillRect(0, 0, c.width, c.height); }
        x.drawImage(img, 0, 0, c.width, c.height);
        var out = c.toDataURL(png ? 'image/png' : 'image/jpeg', 0.86);
        cb(null, { mime: png ? 'image/png' : 'image/jpeg', b64: b64Of(out), w: c.width, h: c.height, size: Math.round(b64Of(out).length * 0.75) });
      };
      img.onerror = function () { cb('ไฟล์นี้ไม่ใช่รูปภาพที่เบราว์เซอร์เปิดได้'); };
      img.src = url;
    });
  }
  var UP = {
    cover: { w: 2400, h: 1200, png: false, max: 10, label: 'ภาพปก' },
    logo: { w: 512, h: 512, png: true, max: 2, label: 'โลโก้' },
    avatar: { w: 900, h: 1100, png: false, max: 3, label: 'รูปครู' },
    edu: { w: 400, h: 400, png: true, max: 2, label: 'โลโก้สถานศึกษา' },
    slide: { w: 2400, h: 1200, png: false, max: 10, label: 'สไลด์ภาพปก' }
  };
  function doUpload(kind, file, extra, cb) {
    var u = UP[kind];
    if (!file) return;
    if (!/^image\/(jpeg|png|webp|gif)$/.test(file.type) || (file.type === 'image/gif' && kind !== 'cover' && kind !== 'slide')) { toast('รองรับเฉพาะ JPG PNG WebP' + (kind === 'cover' || kind === 'slide' ? ' และ GIF' : '')); return; }
    if (file.type === 'image/gif' && file.size > u.max * 1048576) { toast('ไฟล์ GIF ใหญ่เกิน ' + u.max + ' MB'); return; }
    if (file.size > 30 * 1048576) { toast('ไฟล์ใหญ่เกินไป'); return; }
    showLoader('กำลังเตรียมไฟล์');
    prepImage(file, u.w, u.h, u.png, function (err, img) {
      hideLoader();
      if (err) { toast(err); return; }
      if (img.size > u.max * 1048576) { toast(u.label + ' ใหญ่เกิน ' + u.max + ' MB หลังย่อขนาด'); return; }
      var data = { kind: kind, mime: img.mime, b64: img.b64, stillB64: img.stillB64 || '', name: file.name.replace(/\.[^.]+$/, '') };
      for (var k in extra || {}) if (k !== 'quiet') data[k] = extra[k];
      api('upload', data, {}, function (e2, res) {
        if (e2) { toast(e2); return; }
        var keys = ['cover', 'coverId', 'coverType', 'coverSize', 'coverStill', 'coverStillId', 'logo', 'logoId', 'avatar', 'avatarId', 'coverSlides'];
        D.settings = res.settings;
        if (S.draft) keys.forEach(function (k2) { S.draft.s[k2] = res.settings[k2]; });
        cachePublic(); cb(res); if (!extra || !extra.quiet) toast('อัปโหลด' + u.label + 'แล้ว');
      });
    });
  }
  function imgFallback(e) {
    var t = e.target;
    if (!t || t.tagName !== 'IMG' || t.getAttribute('data-fb')) return;
    if (/i\.ytimg\.com/.test(t.src || '')) { t.parentNode.classList.remove('has-img'); t.parentNode.removeChild(t); return; }
    var m = /lh3\.googleusercontent\.com\/d\/([\w-]+)/.exec(t.src || '');
    if (m) { t.setAttribute('data-fb', '1'); t.src = 'https://drive.google.com/thumbnail?id=' + m[1] + '&sz=w2000'; }
  }
  document.addEventListener('error', imgFallback, true);

  /* ---------- วันเวลา ---------- */
  var TH_DAY = ['อาทิตย์', 'จันทร์', 'อังคาร', 'พุธ', 'พฤหัสบดี', 'ศุกร์', 'เสาร์'];
  var TH_MF = ['มกราคม', 'กุมภาพันธ์', 'มีนาคม', 'เมษายน', 'พฤษภาคม', 'มิถุนายน', 'กรกฎาคม', 'สิงหาคม', 'กันยายน', 'ตุลาคม', 'พฤศจิกายน', 'ธันวาคม'];
  function p2(n) { return (n < 10 ? '0' : '') + n; }
  function thaiDate(d) { return 'วัน' + TH_DAY[d.getDay()] + 'ที่ ' + d.getDate() + ' ' + TH_MF[d.getMonth()] + ' ' + (d.getFullYear() + 543); }
  function thaiTime(d) { return p2(d.getHours()) + ':' + p2(d.getMinutes()) + ':' + p2(d.getSeconds()) + ' น.'; }
  function fyNow(d) { return d.getMonth() >= 9 ? d.getFullYear() + 544 : d.getFullYear() + 543; }
  function semNow(d) { var m = d.getMonth() + 1, y = d.getFullYear() + 543; if (m >= 5 && m <= 10) return 'ภาคเรียนที่ 1/' + y; if (m >= 11) return 'ภาคเรียนที่ 2/' + y; if (m <= 3) return 'ภาคเรียนที่ 2/' + (y - 1); return 'ปิดภาคเรียน'; }
  function clock() { return '<span class="clock">' + ic('cal', 14) + '<span class="js-date"></span><b class="js-time"></b></span>'; }
  function tick() {
    var d = new Date(), i, els;
    els = document.querySelectorAll('.js-date'); for (i = 0; i < els.length; i++) els[i].textContent = thaiDate(d);
    els = document.querySelectorAll('.js-time'); for (i = 0; i < els.length; i++) els[i].textContent = thaiTime(d);
    els = document.querySelectorAll('.js-fy'); for (i = 0; i < els.length; i++) els[i].textContent = fyNow(d);
    els = document.querySelectorAll('.js-sem'); for (i = 0; i < els.length; i++) els[i].textContent = semNow(d);
  }
  setInterval(tick, 1000);

  /* ---------- แบ่งหน้า ---------- */
  function perP() { return +st().perPublic || 8; }
  function perA() { return +st().perAdmin || 10; }
  function pageOf(list, key, per) {
    per = S.perKey[key] || per;
    var n = list.length, pages = Math.max(1, Math.ceil(n / per)), p = Math.min(Math.max(1, S.pages[key] || 1), pages);
    S.pages[key] = p; S.pageInfo[key] = { n: n, per: per, p: p, pages: pages };
    return list.slice((p - 1) * per, p * per);
  }
  function pagerNav(key) {
    var f = S.pageInfo[key]; if (!f || !f.n) return '';
    var a = (f.p - 1) * f.per + 1, b = Math.min(f.n, f.p * f.per);
    var opts = key.indexOf('a-') === 0 ? [5, 10, 20, 50] : (key.indexOf('album-') === 0 ? [12, 24, 48] : [6, 8, 9, 12, 24]);
    if (opts.indexOf(f.per) < 0) { opts.push(f.per); opts.sort(function (x, y) { return x - y; }); }
    var perSel = f.n > opts[0] ? '<label class="pg-per small muted">แสดง <select data-pp="' + key + '" aria-label="จำนวนรายการต่อหน้า">' + opts.map(function (o) { return '<option value="' + o + '"' + (o === f.per ? ' selected' : '') + '>' + o + '</option>'; }).join('') + '</select> ต่อหน้า</label>' : '';
    var info = '<span class="pg-info"><span class="small muted">แสดง ' + a + '–' + b + ' จาก ' + f.n + ' รายการ' + (f.pages > 1 ? ' · หน้า ' + f.p + '/' + f.pages : '') + '</span>' + perSel + '</span>';
    if (f.pages <= 1) return '<div class="pager" data-k="' + key + '">' + info + '</div>';
    var nums = [], last = 0;
    for (var i = 1; i <= f.pages; i++) {
      if (i === 1 || i === f.pages || Math.abs(i - f.p) <= 1) {
        if (i - last > 1) nums.push('<span class="gap">…</span>');
        nums.push('<button data-act="page" data-k="' + key + '" data-p="' + i + '" class="' + (i === f.p ? 'on' : '') + '"' + (i === f.p ? ' aria-current="page"' : '') + ' aria-label="หน้า ' + i + '">' + i + '</button>');
        last = i;
      }
    }
    return '<nav class="pager" data-k="' + key + '" aria-label="เลือกหน้า">' + info + '<div class="pg-btns"><button data-act="page" data-k="' + key + '" data-p="' + (f.p - 1) + '"' + (f.p === 1 ? ' disabled' : '') + '>' + ic('left', 14) + ' ก่อนหน้า</button>' + nums.join('') + '<button data-act="page" data-k="' + key + '" data-p="' + (f.p + 1) + '"' + (f.p === f.pages ? ' disabled' : '') + '>ถัดไป ' + ic('chev', 14) + '</button></div></nav>';
  }
  function pagerScroll(key) {
    var pg = document.querySelector('.pager[data-k="' + key + '"]'); if (!pg) return;
    var list = pg.previousElementSibling || pg.parentNode, top = list.getBoundingClientRect().top;
    if (top < 70) window.scrollTo({ top: window.pageYOffset + top - 90, behavior: motionOff() ? 'auto' : 'smooth' });
  }

  /* ---------- วงแหวนโหลด modal toast ---------- */
  function openModal(title, body, foot, wide) {
    $('modal-root').innerHTML = '<div class="ov" data-act="ov"><div class="modal ' + (wide ? 'wide' : '') + '" role="dialog" aria-modal="true" aria-label="' + esc(title) + '"><div class="modal-h"><h3>' + title + '</h3><button class="btn icon sm" data-act="close-modal" aria-label="ปิด">' + ic('x', 18) + '</button></div><div class="modal-b">' + body + '</div>' + (foot ? '<div class="modal-f">' + foot + '</div>' : '') + '</div></div>';
    var f = $('modal-root').querySelector('input:not([type=hidden]),textarea,select'); if (f) f.focus();
  }
  function closeModal() { $('modal-root').innerHTML = ''; }
  function confirmBox(msg, yesText, fn, danger) {
    S.confirmFn = fn;
    openModal('ยืนยัน', '<p>' + msg + '</p>', '<button class="btn" data-act="close-modal">ยกเลิก</button><button class="btn ' + (danger ? 'danger' : 'primary') + '" data-act="confirm-yes">' + yesText + '</button>');
  }
  function toast(msg) {
    var t = document.createElement('div'); t.textContent = msg; $('toast').appendChild(t);
    setTimeout(function () { if (t.parentNode) t.parentNode.removeChild(t); }, 3200);
  }
  function seal(cls) { var s = st(); return '<span class="seal ' + (cls || '') + '">' + (s.logo ? '<img src="' + esc(s.logo) + '" alt="โลโก้ ' + esc(s.school) + '">' : esc(s.initials || 'บล')) + '</span>'; }
  function setFavicon() {
    var l = document.getElementById('fav'), s = D.settings || {};
    if (!s.logo) { if (l) l.parentNode.removeChild(l); return; }
    if (!l) { l = document.createElement('link'); l.id = 'fav'; l.rel = 'icon'; document.head.appendChild(l); }
    l.href = s.logo;
  }
  function fySelect(id) {
    var ys = D.years.slice().sort(function (a, b) { return b.fy - a.fy; });
    if (!ys.length) return '';
    return '<label class="fy-pick" title="เปลี่ยนปีงบประมาณ"><span class="fy-dot"></span><select id="' + id + '" class="fy-sel" data-fy-sel="1" aria-label="เลือกปีงบประมาณ">' + ys.map(function (y) { return '<option value="' + y.fy + '"' + (y.fy === S.fy ? ' selected' : '') + '>ปีงบ ' + y.fy + '</option>'; }).join('') + '</select></label>';
  }
  function ph(h, icon, cap, cls, img) {
    return '<div class="ph ' + (cls || '') + '" style="--h:' + h + '">' + (img ? '<img src="' + esc(img) + '" alt="' + esc(cap || '') + '">' : ic(icon || 'image', 30)) + (cap ? '<span class="cap">' + esc(cap) + '</span>' : '') + '</div>';
  }
  function chk(id, on, label) { return '<label class="row small" style="gap:8px"><input type="checkbox" id="' + id + '"' + (on ? ' checked' : '') + ' style="width:18px;height:18px;accent-color:var(--accent)"> ' + label + '</label>'; }
  function profileScore() {
    var s = D.settings || {}, items = [
      ['ภาพปก', !!s.cover, 'admin-profile'], ['รูปครู', !!s.avatar, 'admin-profile'],
      ['ข้อมูลส่วนตัวครบ', (s.profileFields || []).length && !(s.profileFields || []).some(function (f) { return /\[/.test(f[1]) || !f[1]; }), 'admin-profile'],
      ['ปรัชญาการสอน', !!s.philosophy, 'admin-profile'], ['ความเชี่ยวชาญ', (s.skills || []).length > 0, 'admin-profile'],
      ['ประวัติการศึกษา', D.education.length > 0, 'admin-profile'], ['โลโก้สถานศึกษาครบ', D.education.length > 0 && D.education.every(function (e) { return !!e.logoUrl; }), 'admin-profile'],
      ['ประวัติการทำงาน', D.career.length > 0, 'admin-profile'], ['โลโก้โรงเรียน', !!s.logo, 'admin-settings']
    ];
    var ok = items.filter(function (x) { return x[1]; }).length;
    return { pct: Math.round(ok / items.length * 100), items: items };
  }

  /* =====================================================================
     หน้าสาธารณะ
     ===================================================================== */
  var NAV = [['home', 'หน้าหลัก'], ['profile', 'ประวัติ'], ['pa', 'แฟ้ม PA'], ['works', 'คลังผลงาน'], ['gallery', 'ภาพกิจกรรม'], ['videos', 'วิดีโอ'], ['awards', 'รางวัล/อบรม'], ['systems', 'ระบบที่จัดทำ']];
  var GLYPHS = '<div class="cover-glyphs" aria-hidden="true"><span style="left:4%;top:6%">π</span><span style="left:52%;top:2%;font-size:160px">∑</span><span style="right:5%;top:22%">√x</span><span style="left:30%;top:30%;font-size:92px">a² + b² = c²</span><span style="right:24%;bottom:14%;font-size:84px">÷</span><span style="left:8%;bottom:40%;font-size:70px">%</span></div>';

  function siteHead(r) {
    var s = D.settings;
    var nav = NAV.map(function (it) { var on = r === it[0] || (it[0] === 'gallery' && r.indexOf('album-') === 0) || (it[0] === 'pa' && (r === 'agreement' || r === 'idplan')); return '<a href="#' + it[0] + '" class="' + (on ? 'on' : '') + '"' + (on ? ' aria-current="page"' : '') + '>' + it[1] + '</a>'; }).join('');
    var right = fySelect('fy-sel') + (S.admin ? '<a class="btn primary login-ic" href="#admin" aria-label="หลังบ้าน" title="หลังบ้าน">' + ic('grid', 18) + '</a>' : '<a class="btn login-ic" href="#login" aria-label="เข้าสู่ระบบ" title="เข้าสู่ระบบ">' + ic('lock', 18) + '</a>');
    return '<div class="info-strip"><div class="wrap">' + clock() + '<span>ปีงบประมาณปัจจุบัน <b class="js-fy"></b> · <span class="js-sem"></span></span><button class="strip-btn" data-act="a11y" aria-label="การแสดงผล ขนาดตัวอักษร และโหมดสี">' + ic('sun', 15) + ' การแสดงผล</button></div></div>' +
      '<header class="site-head"><div class="wrap"><a class="brand" href="#home" aria-label="แฟ้มผลงานครู หน้าหลัก">' + seal() + '<span class="brand-t"><b>แฟ้มผลงานครู</b><span>' + esc(s.school) + ' ' + esc(s.area) + '</span></span></a><nav class="nav" aria-label="เมนูหลัก">' + nav + '</nav>' + right + '</div></header>';
  }
  function siteFoot() {
    return '<footer class="foot"><div class="wrap"><span>' + FOOTER + '</span><span>Google Apps Script + Google Sheets</span></div></footer>';
  }
  function pub(r, inner, top) { return siteHead(r) + (top || '') + '<main class="pub"><div class="wrap">' + inner + '</div></main>' + siteFoot(); }
  function slideArt(x, paused) { var src = x.type === 'image/gif' && paused && x.still ? x.still : x.url; return '<img src="' + esc(src) + '" alt="">'; }
  function coverSlides(s) { return (s.cover ? [{ url: s.cover, type: s.coverType, still: s.coverStill, cap: s.coverCaption }] : []).concat(s.coverSlides || []); }

  function avatarHtml(cls) {
    var s = D.settings;
    return '<div class="avatar ' + (cls || '') + '">' + (s.avatar ? '<img src="' + esc(s.avatar) + '" alt="รูป ' + esc(s.name) + '">' : esc((s.nick || s.name || 'ครู').replace(/^ครู/, '').slice(0, 2)) + '<small>รูปครู</small>') + '</div>';
  }
  function cover() {
    var s = st(), sl = coverSlides(s), multi = sl.length > 1 && +s.rotSec > 0;
    var anyGif = sl.some(function (x) { return x.type === 'image/gif' && x.still; });
    var bg = sl.length > 1 ? '<div class="cover-bg rot rot-kb" data-cap="cover-cap-t">' + sl.map(function (x, i) { return '<div class="rot-i' + (i === 0 ? ' on' : '') + '" data-cap="' + esc(x.cap || '') + '" aria-hidden="' + (i ? 'true' : 'false') + '">' + slideArt(x, S.coverPaused) + '</div>'; }).join('') + '</div>'
      : '<div class="cover-bg">' + (sl[0] ? slideArt(sl[0], S.coverPaused) : '') + '</div>';
    var tls = (s.taglines || []).filter(String);
    var tl = tls.length > 1 ? '<p class="tag rot rot-text">' + tls.map(function (t, i) { return '<span class="rot-i' + (i === 0 ? ' on' : '') + '">' + esc(t) + '</span>'; }).join('') + '</p>' : (s.tagline ? '<p class="tag">' + esc(s.tagline) + '</p>' : '');
    var cap0 = (sl[0] && sl[0].cap) || '';
    return '<section class="cover' + (S.coverPaused ? ' paused' : '') + '" aria-label="ภาพปก" data-rot-host="1">' + bg + (sl.length ? '' : GLYPHS) + '<div class="cover-shade"></div>' + (sl.length > 1 ? rotDots(sl.length, 'ภาพปกที่') : '') +
      '<div class="cover-cap">' + (cap0 || sl.length > 1 ? '<span>' + ic('image', 13) + ' <span id="cover-cap-t" class="cap-t">' + esc(cap0) + '</span></span>' : '<span></span>') + (anyGif || multi ? '<button class="btn on-dark" data-act="cover-pause" aria-pressed="' + (S.coverPaused ? 'true' : 'false') + '">' + ic(S.coverPaused ? 'play' : 'x', 14) + ' ' + (S.coverPaused ? 'เล่นภาพเคลื่อนไหว' : 'หยุดภาพเคลื่อนไหว') + '</button>' : '') + '</div>' +
      '<div class="cover-in">' + avatarHtml() + '<div class="cover-t"><span class="eyebrow-d">แฟ้มสะสมผลงานครู · ปีงบประมาณ ' + S.fy + '</span><h1>' + esc(s.name) + '</h1>' + tl +
      '<div class="cover-chips"><span>ตำแหน่ง ' + esc(s.position) + '</span>' + (s.subject ? '<span>' + esc(s.subject) + '</span>' : '') + '<span>' + esc(s.school) + ' ' + esc(s.area) + '</span></div>' +
      '<div class="row" style="margin-top:8px"><a class="btn light" href="#pa">' + ic('file', 16) + ' แฟ้ม PA ปีงบ ' + S.fy + '</a><a class="btn on-dark" href="#works">' + ic('folder', 16) + ' คลังผลงาน</a><a class="btn on-dark" href="#profile">' + ic('user', 16) + ' ประวัติส่วนตัว</a><a class="btn on-dark" href="#videos">' + ic('video', 16) + ' วิดีโอ</a><a class="btn on-dark" href="#awards">' + ic('award', 16) + ' รางวัล/อบรม</a><a class="btn on-dark" href="#systems">' + ic('code', 16) + ' ระบบที่จัดทำ</a></div></div></div></section>';
  }
  function eduHtml() {
    if (!D.education.length) return '<p class="small muted">ยังไม่มีข้อมูล</p>';
    return D.education.map(function (e) {
      return '<div class="tl-item edu"><span class="logo">' + (e.logoUrl ? '<img src="' + esc(e.logoUrl) + '" alt="โลโก้ ' + esc(e.inst) + '">' : ic('grad', 24)) + '</span><span class="edu-t"><span class="y">' + blank(e.year) + '</span><span class="t">' + blank(e.level) + '</span><span class="small">' + blank(e.degree) + '</span><span class="small muted">' + blank(e.inst) + '</span></span></div>';
    }).join('');
  }
  function careerHtml() {
    if (!D.career.length) return '<p class="small muted">ยังไม่มีข้อมูล</p>';
    return D.career.map(function (c) { return '<div class="tl-item"><span class="y">' + blank(c.period) + '</span><span class="t">' + blank(c.role) + '</span><span class="small muted">' + blank(c.place) + '</span></div>'; }).join('');
  }
  function fieldsHtml(n) {
    var f = (D.settings.profileFields || []).slice(0, n || 99);
    return f.length ? '<dl class="kvlist" style="margin-top:12px">' + f.map(function (x) { return '<dt>' + esc(x[0]) + '</dt><dd>' + blank(x[1]) + '</dd>'; }).join('') + '</dl>' : '<p class="small muted" style="margin-top:10px">ยังไม่มีข้อมูล</p>';
  }
  function skillsHtml() {
    return (D.settings.skills || []).map(function (k) { return '<span class="chip ind" style="font-size:13.5px;padding:4px 12px">' + esc(k) + '</span>'; }).join('');
  }

  function pHome() {
    var s = D.settings, skills = skillsHtml();
    return pub('home',
      homeStats() + '<section class="sec grid3" style="align-items:start">' +
        '<div class="card"><div class="sec-h"><h3>' + ic('user', 18) + ' ข้อมูลส่วนตัว</h3><a href="#profile" class="small">ประวัติเต็ม ' + ic('chev', 13) + '</a></div>' + fieldsHtml(7) + '</div>' +
        '<div class="card"><div class="sec-h"><h3>' + ic('grad', 18) + ' ประวัติการศึกษา</h3></div><div class="tline" style="margin-top:14px">' + eduHtml() + '</div></div>' +
        '<div class="card"><div class="sec-h"><h3>' + ic('brief', 18) + ' ประวัติการทำงาน</h3></div><div class="tline" style="margin-top:14px">' + careerHtml() + '</div></div>' +
      '</section>' +
      (s.philosophy || skills ? '<section class="sec"><div class="grid2" style="align-items:start">' +
        (s.philosophy ? '<div class="card"><h3>ปรัชญาการสอน</h3><blockquote class="quote">' + blank(s.philosophy) + '</blockquote></div>' : '') +
        (skills ? '<div class="card"><h3>ความเชี่ยวชาญ</h3><div class="row" style="gap:6px;margin-top:10px">' + skills + '</div></div>' : '') +
      '</div></section>' : '') + homeSections(),
      cover());
  }

  function pProfile() {
    var s = D.settings, skills = skillsHtml();
    var intro = C().videos.filter(function (v) { return v.type === 'intro' && shown(v); })[0];
    var aw = C().awards.filter(shown).sort(byDate);
    var awHtml = aw.slice(0, 8).map(function (w) { return '<button class="todo" data-act="open-award" data-id="' + w.id + '" style="width:100%;text-align:left;background:none;border:0;font:inherit;cursor:pointer"><span class="dot ' + (w.type === 'award' ? 'warn' : 'info') + '"></span><span style="flex:1">' + esc(w.title) + '</span><span class="small muted num">' + fd(w.date) + '</span></button>'; }).join('');
    return pub('profile',
      '<div class="card raised hero-main">' + avatarHtml() + '<div class="hero-t"><span class="eyebrow">ประวัติส่วนตัว</span><h1>' + esc(s.name) + '</h1>' + (s.tagline ? '<p class="muted">' + esc(s.tagline) + '</p>' : '') + (s.bio ? '<p>' + esc(s.bio) + '</p>' : '') + (intro ? '<div class="row"><button class="btn" data-act="open-video" data-id="' + intro.id + '">' + ic('video', 16) + ' วิดีโอแนะนำตัว</button></div>' : '') + '</div></div>' +
      '<section class="sec"><div class="prof-grid"><div style="display:flex;flex-direction:column;gap:16px">' +
        '<div class="card"><h3>' + ic('user', 18) + ' ข้อมูลส่วนตัว</h3>' + fieldsHtml() + '</div>' +
        (s.philosophy ? '<div class="card"><h3>ปรัชญาการสอน</h3><blockquote class="quote">' + blank(s.philosophy) + '</blockquote></div>' : '') +
        (skills ? '<div class="card"><h3>ความเชี่ยวชาญ</h3><div class="row" style="gap:6px;margin-top:10px">' + skills + '</div></div>' : '') + '</div>' +
      '<div style="display:flex;flex-direction:column;gap:16px">' +
        '<div class="card"><h3>' + ic('grad', 18) + ' ประวัติการศึกษา</h3><div class="tline" style="margin-top:14px">' + eduHtml() + '</div></div>' +
        '<div class="card"><h3>' + ic('brief', 18) + ' ประวัติการทำงาน</h3><div class="tline" style="margin-top:14px">' + careerHtml() + '</div></div>' +
        (awHtml ? '<div class="card"><h3>' + ic('award', 18) + ' รางวัล เกียรติบัตร และการอบรม</h3><div style="margin-top:6px">' + awHtml + '</div><a href="#awards" class="small" style="display:inline-block;margin-top:8px">ดูทั้งหมด ' + aw.length + ' รายการ ' + ic('chev', 13) + '</a></div>' : '') + '</div></div></section>');
  }

  function pLogin() {
    var s = D.settings;
    return '<div class="login-wrap"><div class="login-art"><div class="brand" style="color:#fff">' + seal() + '<span class="brand-t"><b>แฟ้มผลงานและการประเมินครู</b><span style="color:#cfe6df">' + esc(s.school) + '</span></span></div>' +
      '<div style="display:flex;flex-direction:column;gap:14px"><h1>จัดการแฟ้มผลงานและการประเมินได้ในที่เดียว</h1><ul><li>แก้ประวัติ ภาพปก และการศึกษาได้เอง</li><li>เพิ่มผลงาน ภาพกิจกรรม วิดีโอ รางวัล และระบบที่จัดทำ</li><li>ตั้งปีงบประมาณ ธีมสี และชุดธีมทั้งเว็บ</li><li>ทุกการแก้ไขถูกบันทึกไว้ตรวจย้อนหลังได้</li></ul></div>' +
      '<p class="small" style="opacity:.75">รหัสผ่านถูกแฮชพร้อม salt ที่ฝั่ง GAS · ล็อก 15 นาทีเมื่อใส่ผิด 5 ครั้ง</p></div>' +
      '<div class="login-box"><div class="login-card"><a href="#home" class="small">' + ic('left', 14) + ' กลับหน้าสาธารณะ</a><h2>เข้าสู่ระบบผู้ดูแล</h2>' +
      '<form id="login-form" class="card raised" style="display:flex;flex-direction:column;gap:14px">' + (S.loginErr ? '<div class="err">' + esc(S.loginErr) + '</div>' : '') +
      '<div class="field"><label for="lg-user">ชื่อผู้ใช้</label><input id="lg-user" class="inp" autocomplete="username" autocapitalize="off" spellcheck="false"></div>' +
      '<div class="field"><label for="lg-pass">รหัสผ่าน</label><div style="position:relative"><input id="lg-pass" type="password" class="inp" autocomplete="current-password"><button type="button" class="btn icon sm" data-act="toggle-pass" style="position:absolute;right:4px;top:4px;border:0" aria-label="แสดงรหัสผ่าน">' + ic('eye', 16) + '</button></div></div>' +
      chk('lg-remember', false, 'จำการเข้าสู่ระบบในเครื่องนี้ 7 วัน (เฉพาะเครื่องส่วนตัว)') +
      '<button class="btn primary" type="submit" id="lg-btn" style="justify-content:center">' + ic('lock', 16) + ' เข้าสู่ระบบ</button></form></div></div></div>';
  }

  /* หน้าแจ้งเมื่อยังไม่ได้ตั้งค่า หรือโหลดข้อมูลไม่ได้ */
  function pSetup() {
    return '<main class="pub"><div class="wrap" style="max-width:760px;padding-top:48px"><div class="card raised" style="display:flex;flex-direction:column;gap:12px"><span class="eyebrow">ตั้งค่าระบบ</span><h1>ยังไม่ได้เชื่อมต่อ Google Apps Script</h1>' +
      '<p>เปิดไฟล์ <span class="mono">config.js</span> แล้ววางลิงก์ Web App ที่ได้จาก Apps Script (ลงท้ายด้วย <span class="mono">/exec</span>) ในช่อง <span class="mono">GAS_URL</span> จากนั้นอัปโหลดไฟล์ขึ้น GitHub อีกครั้ง เว็บจะอัปเดตให้เองภายในไม่กี่นาที</p>' +
      '<p class="small muted">ค่าปัจจุบัน: <span class="mono">' + esc(GAS_URL || '(ว่าง)') + '</span></p></div></div></main>';
  }
  function pLoadError() {
    return '<main class="pub"><div class="wrap" style="max-width:760px;padding-top:48px"><div class="card raised" style="display:flex;flex-direction:column;gap:12px"><span class="eyebrow">โหลดข้อมูลไม่สำเร็จ</span><h1>เชื่อมต่อฐานข้อมูลไม่ได้</h1><div class="err">' + esc(S.loadErr) + '</div>' +
      '<p class="small muted">ตรวจว่า Deploy เป็น Web app แบบ Execute as: Me และ Who has access: Anyone และลิงก์ใน config.js ถูกต้อง</p><div><button class="btn primary" data-act="retry">' + ic('refresh', 16) + ' ลองใหม่</button></div></div></div></main>';
  }

  /* =====================================================================
     หลังบ้านแอดมิน
     ===================================================================== */
  function adminShell(r, title, sub, actions, inner) {
    function L(id, icon, t, cnt) { return '<a href="#' + id + '" class="' + (r === id ? 'on' : '') + '"' + (r === id ? ' aria-current="page"' : '') + '>' + ic(icon, 18) + ' ' + t + (cnt ? '<span class="cnt">' + cnt + '</span>' : '') + '</a>'; }
    var must = D.admin && D.admin.mustChange;
    return '<div class="admin"><nav class="aside" aria-label="เมนูหลังบ้าน"><a class="brand" href="#admin">' + seal() + '<span class="brand-t"><b>หลังบ้าน</b><span>แฟ้มผลงานและการประเมิน</span></span></a>' +
      '<div class="grp">ภาพรวม</div>' + L('admin', 'grid', 'แดชบอร์ด') +
      '<div class="grp">ข้อมูลครู</div>' + L('admin-profile', 'user', 'หน้าปกและประวัติ') +
      '<div class="grp">แฟ้ม PA ปีงบ ' + S.fy + '</div>' + L('admin-agreement', 'pen', 'ข้อตกลง PA') + L('admin-pa', 'file', 'แฟ้ม PA') + L('admin-idplan', 'target', 'ID Plan') +
      '<div class="grp">ผลงาน</div>' + L('admin-works', 'folder', 'คลังผลงาน', D.content.works.length) + L('admin-gallery', 'image', 'ภาพกิจกรรม', D.content.albums.length) + L('admin-videos', 'video', 'วิดีโอ', D.content.videos.length) + L('admin-awards', 'award', 'รางวัล/อบรม', D.content.awards.length) + L('admin-systems', 'code', 'ระบบที่จัดทำ', D.content.systems.length) +
      '<div class="grp">ระบบ</div>' + L('admin-years', 'cal', 'ปีงบประมาณและสีธีม') + L('admin-themes', 'spark', 'ชุดธีมและฟอนต์') + L('admin-settings', 'gear', 'ตั้งค่า', must ? '!' : 0) + L('admin-logs', 'list', 'บันทึกการใช้งาน') +
      '<a href="#home">' + ic('eye', 18) + ' ดูหน้าสาธารณะ</a><button class="lnk" data-act="logout">' + ic('logout', 18) + ' ออกจากระบบ</button></nav>' +
      '<main class="amain"><div class="ctx-bar"><b class="small">ปีงบที่ดูอยู่</b>' + fySelect('fy-sel-a') + '<span class="small muted">สีของหลังบ้านและหน้าสาธารณะเปลี่ยนตามปีงบที่เลือก</span><span class="ctx-clock">' + clock() + '</span></div>' +
      (must && r !== 'admin-settings' ? '<div class="note warn-note">' + ic('shield', 15) + ' ยังใช้รหัสผ่านชั่วคราวอยู่ <a href="#admin-settings">เปลี่ยนรหัสผ่านตอนนี้</a></div>' : '') +
      dirtyBar() + '<div class="ahead"><div><h1>' + title + '</h1>' + (sub ? '<p class="muted">' + sub + '</p>' : '') + '</div><div class="row">' + (actions || '') + '</div></div>' + inner + '</main></div>';
  }

  /* ---------- แดชบอร์ด ---------- */
  function aDash() {
    var s = D.settings, sc = profileScore(), logs = D.logs.slice(0, 6);
    var prevIn = D.logs.filter(function (l) { return l.action === 'เข้าสู่ระบบ'; })[1];
    var todo = sc.items.filter(function (x) { return !x[1]; }).map(function (x) { return '<a class="todo" href="#' + x[2] + '"><span class="dot warn"></span><span style="flex:1">เพิ่ม' + esc(x[0]) + '</span>' + ic('chev', 14) + '</a>'; }).join('');
    if (D.admin && D.admin.mustChange) todo = '<a class="todo" href="#admin-settings"><span class="dot bad"></span><span style="flex:1">เปลี่ยนรหัสผ่านชั่วคราว</span>' + ic('chev', 14) + '</a>' + todo;
    var c = D.content, fyW = c.works.filter(function (w) { return inFy(w.date, S.fy); }).length;
    var noFile = c.works.filter(function (w) { return !w.fileUrl && !w.link; }).length, noLink = c.videos.filter(function (v) { return !v.url; }).length;
    if (noFile) todo += '<a class="todo" href="#admin-works"><span class="dot warn"></span><span style="flex:1">ผลงานที่ยังไม่มีไฟล์หรือลิงก์ ' + noFile + ' รายการ</span>' + ic('chev', 14) + '</a>';
    if (noLink) todo += '<a class="todo" href="#admin-videos"><span class="dot warn"></span><span style="flex:1">วิดีโอที่ยังไม่ใส่ลิงก์ ' + noLink + ' รายการ</span>' + ic('chev', 14) + '</a>';
    var next = [ ['4', 'รอบประเมิน กรรมการ ลายเซ็น เลื่อนเงินเดือน แบบประเมินครู'], ['5', 'รายงาน PDF สถิติ โหมดนำเสนอ QR ตรวจสอบ'], ['6', 'LINE OA ปฏิทิน ผู้ช่วย AI สำรองข้อมูล ความปลอดภัย']];
    return adminShell('admin', 'สวัสดีครับ ' + esc(s.nick || s.name), 'ภาพรวมของแฟ้มผลงาน · ปีงบประมาณที่แสดงในหน้าหลัก ' + (s.defaultFy || '-'), '<a class="btn" href="#home">' + ic('eye', 16) + ' ดูหน้าสาธารณะ</a>',
      '<div class="grid4"><div class="kpi"><span class="l">ความครบของหน้าประวัติ</span><span class="v">' + sc.pct + '%</span><div class="prog"><i style="width:' + sc.pct + '%"></i></div></div>' +
      '<a class="kpi" href="#admin-works"><span class="l">ผลงานทั้งหมด</span><span class="v">' + c.works.length + '</span><span class="small muted">ปีงบ ' + S.fy + ' · ' + fyW + ' รายการ</span></a>' +
      '<a class="kpi" href="#admin-gallery"><span class="l">ภาพกิจกรรม</span><span class="v">' + c.photos.length + '</span><span class="small muted">' + c.albums.length + ' อัลบั้ม · วิดีโอ ' + c.videos.length + ' คลิป</span></a>' +
      '<a class="kpi" href="#admin-awards"><span class="l">ชั่วโมงพัฒนาตนเอง ปีงบ ' + S.fy + '</span><span class="v">' + fyHours(S.fy) + '</span><span class="small muted">รางวัล/อบรม ' + c.awards.length + ' · ระบบ ' + c.systems.length + '</span></a></div><div class="grid4" style="margin-top:12px">' +
      '<div class="kpi"><span class="l">ประวัติการศึกษา</span><span class="v">' + D.education.length + ' <small class="muted" style="font-size:15px">ระดับ</small></span></div>' +
      '<div class="kpi"><span class="l">ปีงบประมาณในระบบ</span><span class="v">' + D.years.length + '</span></div>' +
      '<div class="kpi"><span class="l">เข้าสู่ระบบครั้งก่อน</span><span class="v" style="font-size:18px">' + (prevIn ? fdt(prevIn.at) : 'ครั้งแรก') + '</span></div></div>' +
      '<div class="stat-grid" style="margin-top:16px"><div class="card"><h3 style="margin-bottom:6px">สิ่งที่ควรทำต่อ</h3>' + (todo || '<p class="small muted">ข้อมูลหน้าประวัติครบแล้ว</p>') + '</div>' +
      '<div class="card"><div class="sec-h"><h3>การใช้งานล่าสุด</h3><a class="small" href="#admin-logs">ดูทั้งหมด</a></div>' + (logs.map(function (l) { return '<div class="todo"><span class="small muted num" style="white-space:nowrap">' + fdt(l.at) + '</span><span style="flex:1">' + esc(l.action) + '<span class="small muted"> ' + esc(l.detail) + '</span></span></div>'; }).join('') || '<p class="small muted">ยังไม่มี</p>') + '</div>' +
      '<div class="card"><h3 style="margin-bottom:6px">ไฟล์ข้อมูลของระบบ</h3>' + (D.admin && D.admin.sheetUrl ? '<a class="todo" href="' + esc(D.admin.sheetUrl) + '" target="_blank" rel="noopener">' + ic('list', 16) + '<span style="flex:1">Google Sheet ฐานข้อมูล</span>' + ic('ext', 14) + '</a>' : '') + (D.admin && D.admin.folderUrl ? '<a class="todo" href="' + esc(D.admin.folderUrl) + '" target="_blank" rel="noopener">' + ic('folder', 16) + '<span style="flex:1">โฟลเดอร์ไฟล์ใน Google Drive</span>' + ic('ext', 14) + '</a>' : '') + '<p class="small muted" style="margin-top:8px">เวอร์ชันระบบ ' + esc(D.version) + '</p></div>' +
      '<div class="card"><h3 style="margin-bottom:6px">ทางลัด</h3><div class="row" style="gap:6px"><a class="btn sm" href="#admin-pa">' + ic('file', 14) + ' แฟ้ม PA</a><a class="btn sm" href="#admin-agreement">' + ic('pen', 14) + ' ข้อตกลง</a><a class="btn sm" href="#admin-idplan">' + ic('target', 14) + ' ID Plan</a><button class="btn sm" data-act="c-new" data-k="works">' + ic('plus', 14) + ' ผลงาน</button><button class="btn sm" data-act="c-new" data-k="albums">' + ic('plus', 14) + ' อัลบั้ม</button><button class="btn sm" data-act="c-new" data-k="videos">' + ic('plus', 14) + ' วิดีโอ</button><button class="btn sm" data-act="c-new" data-k="awards">' + ic('plus', 14) + ' รางวัล/อบรม</button><button class="btn sm" data-act="c-new" data-k="systems">' + ic('plus', 14) + ' ระบบ</button></div></div>' +
      '<div class="card"><h3 style="margin-bottom:6px">เฟสถัดไป</h3>' + next.map(function (n) { return '<div class="todo"><span class="chip">เฟส ' + n[0] + '</span><span class="small" style="flex:1">' + n[1] + '</span></div>'; }).join('') + '</div></div>');
  }

  /* ---------- หน้าปกและประวัติ ---------- */
  function aProfile() {
    var d = ensureDraft(), s = d.s;
    var gifTxt = s.cover ? '<span class="chip ' + (s.coverType === 'image/gif' ? 'gold' : '') + '">' + (s.coverType === 'image/gif' ? 'GIF เคลื่อนไหว' : 'ภาพนิ่ง') + ' · ' + fix((+s.coverSize || 0) / 1048576, 1) + ' MB</span>' : '';
    var prev = '<div class="cover-prev"><div class="cover-bg">' + (s.cover ? '<img src="' + esc(s.cover) + '" alt="">' : '') + '</div>' + (s.cover ? '' : GLYPHS) + '<div class="cover-shade"></div><div class="cp-t"><b>' + esc(s.name) + '</b><span class="small">' + esc(s.tagline) + '</span></div></div>';
    var pf = (s.profileFields || []).map(function (f, i) {
      return '<div class="pf-row"><input class="inp" data-b="pf.' + i + '.0" value="' + esc(f[0]) + '" aria-label="หัวข้อ แถว ' + (i + 1) + '"><input class="inp" data-b="pf.' + i + '.1" value="' + esc(f[1]) + '" aria-label="ข้อมูล แถว ' + (i + 1) + '"><span class="row" style="gap:2px;flex-wrap:nowrap">' + mv('pf', i, s.profileFields.length) + '<button class="btn icon sm danger" data-act="row-del" data-k="pf" data-i="' + i + '" aria-label="ลบแถว ' + (i + 1) + '">' + ic('trash', 15) + '</button></span></div>';
    }).join('');
    var edu = d.edu.map(function (e, i) {
      return '<div class="erow"><span style="position:relative"><label class="logo-up" for="edu-logo-' + i + '" title="อัปโหลดโลโก้">' + (e.logoUrl ? '<img src="' + esc(e.logoUrl) + '" alt="">' : ic('upload', 18)) + '<span class="sr">อัปโหลดโลโก้สถานศึกษา แถว ' + (i + 1) + '</span></label><input type="file" id="edu-logo-' + i + '" data-up="edu" data-i="' + i + '" accept="image/png,image/jpeg,image/webp" style="display:none">' + (e.logoUrl ? '<button class="iph-x" style="top:-6px;right:-6px" data-act="edu-logo-del" data-i="' + i + '" aria-label="ลบโลโก้ แถว ' + (i + 1) + '">' + ic('x', 12) + '</button>' : '') + '</span>' +
        '<input class="inp" data-b="edu.' + i + '.level" value="' + esc(e.level) + '" placeholder="ปริญญาตรี" aria-label="ระดับ แถว ' + (i + 1) + '"><input class="inp" data-b="edu.' + i + '.degree" value="' + esc(e.degree) + '" placeholder="ค.บ. คณิตศาสตร์" aria-label="วุฒิ/สาขา แถว ' + (i + 1) + '"><input class="inp" data-b="edu.' + i + '.inst" value="' + esc(e.inst) + '" placeholder="ชื่อสถานศึกษา" aria-label="สถานศึกษา แถว ' + (i + 1) + '"><input class="inp" data-b="edu.' + i + '.year" value="' + esc(e.year) + '" placeholder="2560" aria-label="ปีที่สำเร็จ แถว ' + (i + 1) + '">' +
        '<span class="row" style="gap:2px;flex-wrap:nowrap">' + mv('edu', i, d.edu.length) + '<button class="btn icon sm danger" data-act="row-del" data-k="edu" data-i="' + i + '" aria-label="ลบแถว ' + (i + 1) + '">' + ic('trash', 15) + '</button></span></div>';
    }).join('');
    var car = d.car.map(function (c, i) {
      return '<div class="erow c3"><input class="inp" data-b="car.' + i + '.period" value="' + esc(c.period) + '" placeholder="2562 – ปัจจุบัน" aria-label="ช่วงเวลา แถว ' + (i + 1) + '"><input class="inp" data-b="car.' + i + '.role" value="' + esc(c.role) + '" placeholder="ตำแหน่ง" aria-label="ตำแหน่ง แถว ' + (i + 1) + '"><input class="inp" data-b="car.' + i + '.place" value="' + esc(c.place) + '" placeholder="หน่วยงาน" aria-label="หน่วยงาน แถว ' + (i + 1) + '">' +
        '<span class="row" style="gap:2px;flex-wrap:nowrap">' + mv('car', i, d.car.length) + '<button class="btn icon sm danger" data-act="row-del" data-k="car" data-i="' + i + '" aria-label="ลบแถว ' + (i + 1) + '">' + ic('trash', 15) + '</button></span></div>';
    }).join('');
    return adminShell('admin-profile', 'หน้าปกและประวัติ', 'ภาพปก รูปครู ข้อมูลส่วนตัว ประวัติการศึกษา และประวัติการทำงาน · รูปอัปโหลดทันที ข้อความกดบันทึกครั้งเดียว', '<a class="btn" href="#profile">' + ic('eye', 16) + ' ดูหน้าประวัติ</a><button class="btn primary" data-act="draft-save">' + ic('check', 16) + ' บันทึก</button>',
      '<div class="card" style="display:flex;flex-direction:column;gap:14px"><h3>ภาพปก (Banner)</h3>' + prev +
        '<div class="row"><label class="btn" for="cover-up">' + ic('upload', 16) + ' เลือกภาพปก</label><input id="cover-up" type="file" data-up="cover" accept="image/gif,image/png,image/jpeg,image/webp" style="display:none">' + (s.cover ? '<button class="btn danger" data-act="img-del" data-k="cover">' + ic('trash', 16) + ' ใช้ลายเริ่มต้น</button>' : '') + gifTxt + '</div>' +
        '<p class="small muted">JPG PNG WebP หรือ GIF เคลื่อนไหว ไม่เกิน 10 MB · แนะนำ 1920 × 600 px · ภาพนิ่งถูกย่อก่อนอัปโหลด ส่วน GIF ส่งไฟล์เดิมเพื่อให้ยังเคลื่อนไหว</p>' +
        '<div class="field"><label for="b-cap">คำอธิบายภาพปกหลัก (ไม่บังคับ)</label><input id="b-cap" class="inp" data-b="s.coverCaption" value="' + esc(s.coverCaption) + '"></div></div>' + coverManager() +
      '<div class="card" style="display:flex;flex-direction:column;gap:14px;margin-top:16px"><h3>รูปครู</h3><div class="row" style="gap:16px;align-items:flex-start">' + avatarEdit(s) +
        '<div style="display:flex;flex-direction:column;gap:8px"><div class="row"><label class="btn" for="avatar-up">' + ic('upload', 16) + ' เลือกรูป</label><input id="avatar-up" type="file" data-up="avatar" accept="image/png,image/jpeg,image/webp" style="display:none">' + (s.avatar ? '<button class="btn danger" data-act="img-del" data-k="avatar">' + ic('trash', 16) + ' ลบรูป</button>' : '') + '</div><span class="small muted">รูปแนวตั้ง สัดส่วนประมาณ 4:5 แสดงบนภาพปกและหน้าประวัติ</span></div></div></div>' +
      '<div class="card" style="display:flex;flex-direction:column;gap:12px;margin-top:16px"><div class="sec-h"><h3>' + ic('user', 18) + ' ข้อมูลส่วนตัว</h3><button class="btn sm" data-act="row-add" data-k="pf">' + ic('plus', 15) + ' เพิ่มหัวข้อ</button></div>' +
        '<div class="pf-row h"><span>หัวข้อ</span><span>ข้อมูล</span><span></span></div>' + pf +
        '<div class="field"><label for="b-bio">แนะนำตัวสั้นๆ (หน้าประวัติ)</label><textarea id="b-bio" class="inp" data-b="s.bio">' + esc(s.bio) + '</textarea></div>' +
        '<div class="field"><label for="b-phil">ปรัชญาการสอน</label><textarea id="b-phil" class="inp" data-b="s.philosophy">' + esc(s.philosophy) + '</textarea></div>' +
        '<div class="field"><label for="b-skills">ความเชี่ยวชาญ (คั่นด้วยเครื่องหมายจุลภาค)</label><input id="b-skills" class="inp" data-b="skills" value="' + esc((s.skills || []).join(', ')) + '"></div>' +
        '<p class="small muted">หน้านี้เปิดให้บุคคลภายนอกดู ไม่ควรใส่เลขบัตรประชาชน ที่อยู่บ้าน หรือเบอร์โทรส่วนตัว · ข้อความในวงเล็บเหลี่ยม [ ] จะแสดงเป็นช่องที่ยังต้องกรอก</p></div>' +
      '<div class="card" style="display:flex;flex-direction:column;gap:10px;margin-top:16px"><div class="sec-h"><h3>' + ic('grad', 18) + ' ประวัติการศึกษา</h3><button class="btn sm" data-act="row-add" data-k="edu">' + ic('plus', 15) + ' เพิ่มแถว</button></div>' +
        (d.edu.length ? '<div class="erow h"><span>โลโก้</span><span>ระดับ</span><span>วุฒิ / สาขา</span><span>สถานศึกษา</span><span>ปีที่สำเร็จ</span><span></span></div>' + edu : '<p class="small muted">ยังไม่มี กดเพิ่มแถว</p>') +
        '<p class="small muted">โลโก้สถานศึกษา PNG พื้นโปร่งใสดีที่สุด ไม่เกิน 2 MB · เรียงจากล่าสุดไปเก่าสุด</p></div>' +
      '<div class="card" style="display:flex;flex-direction:column;gap:10px;margin-top:16px"><div class="sec-h"><h3>' + ic('brief', 18) + ' ประวัติการทำงาน</h3><button class="btn sm" data-act="row-add" data-k="car">' + ic('plus', 15) + ' เพิ่มแถว</button></div>' +
        (d.car.length ? '<div class="erow c3 h"><span>ช่วงเวลา</span><span>ตำแหน่ง</span><span>หน่วยงาน</span><span></span></div>' + car : '<p class="small muted">ยังไม่มี กดเพิ่มแถว</p>') + '</div>');
  }
  function mv(k, i, n) {
    return '<button class="btn icon sm" data-act="row-mv" data-k="' + k + '" data-i="' + i + '" data-d="-1"' + (i === 0 ? ' disabled' : '') + ' aria-label="เลื่อนขึ้น">' + ic('chev', 15).replace('<svg', '<svg style="transform:rotate(-90deg)"') + '</button><button class="btn icon sm" data-act="row-mv" data-k="' + k + '" data-i="' + i + '" data-d="1"' + (i === n - 1 ? ' disabled' : '') + ' aria-label="เลื่อนลง">' + ic('chev', 15).replace('<svg', '<svg style="transform:rotate(90deg)"') + '</button>';
  }
  function avatarEdit(s) {
    return '<div class="avatar">' + (s.avatar ? '<img src="' + esc(s.avatar) + '" alt="">' : 'รูป<small>ยังไม่มีรูป</small>') + '</div>';
  }

  /* ---------- ปีงบประมาณและธีม ---------- */
  function aYears() {
    var s = st(), maxFy = D.years.reduce(function (m, y) { return Math.max(m, y.fy); }, 0) || fyNow(new Date()) - 1;
    var cards = D.years.slice().sort(function (a, b) { return b.fy - a.fy; }).map(function (y) {
      var t = themeOf(y), isDef = +s.defaultFy === y.fy, cu = { a: y.customA || t.a, cv: y.customCv || t.cv };
      function swb(k) { var th = THEMES[k]; return '<button class="swatch' + (y.theme === k ? ' on' : '') + '" data-act="set-theme" data-fy="' + y.fy + '" data-t="' + k + '" aria-pressed="' + (y.theme === k) + '" style="--sw:' + th.a + ';--sw2:' + th.cv + '"><span class="sw-c"></span>' + th.name + '</button>'; }
      var cr = contrast(cu.a, '#ffffff');
      var sw = '<div class="sw-group"><span>สีเข้ม</span><div class="swatches">' + Object.keys(THEMES).filter(function (k) { return !THEMES[k].pastel; }).map(swb).join('') + '</div></div>' +
        '<div class="sw-group"><span>พาสเทล (ภาพปกโทนสว่าง ตัวอักษรเข้ม)</span><div class="swatches">' + Object.keys(THEMES).filter(function (k) { return THEMES[k].pastel; }).map(swb).join('') + '</div></div>' +
        '<div class="sw-group"><span>กำหนดเอง</span><div class="custom-box' + (y.theme === 'custom' ? ' on' : '') + '"><span class="sw-c" id="cust-prev-' + y.fy + '" style="--sw:' + cu.a + ';--sw2:' + cu.cv + '"></span>' +
          '<label>สีหลัก <input type="color" value="' + cu.a + '" data-cust="' + y.fy + ':a" aria-label="สีหลัก ปีงบ ' + y.fy + '"></label><label>สีภาพปก <input type="color" value="' + cu.cv + '" data-cust="' + y.fy + ':cv" aria-label="สีภาพปก ปีงบ ' + y.fy + '"></label>' +
          '<span class="cbadge ' + (cr >= 4.5 ? 'ok' : 'no') + '" id="cust-badge-' + y.fy + '">' + (cr >= 4.5 ? 'อ่านง่าย' : 'สีหลักอ่อนเกินไป') + ' ' + fix(cr, 1) + ':1</span>' +
          '<button class="btn sm' + (y.theme === 'custom' ? ' primary' : '') + '" data-act="use-custom" data-fy="' + y.fy + '">' + (y.theme === 'custom' ? ic('check', 14) + ' ใช้อยู่' : 'ใช้สีที่กำหนดเอง') + '</button></div></div>';
      var rounds = '<div class="yr-round"><b>รอบประเมิน PA (ปีละ 1 ครั้ง)</b><span class="small muted">' + fd(roundRange(y.fy, 1)[0]) + ' – ' + fd(roundRange(y.fy, 2)[1]) + '</span></div>';
      return '<div class="card year-card' + (isDef ? ' def' : '') + '" style="--yc:' + t.a + ';--ycv:' + t.cv + '"><div class="year-band" style="color:' + (lum(t.cv) > 0.45 ? '#1b2430' : '#ffffff') + '"><span class="yb-fy">ปีงบประมาณ ' + y.fy + '</span><span>' + fd(roundRange(y.fy, 1)[0]) + ' – ' + fd(roundRange(y.fy, 2)[1]) + '</span>' + (isDef ? '<span class="chip" style="background:#fff;color:' + (lum(t.cv) > 0.45 ? t.a : t.cv) + '">' + ic('home', 13) + ' แสดงในหน้าหลัก</span>' : '') + '</div>' +
        '<div class="year-body"><div class="field"><label>ธีมสีของปีนี้</label>' + sw + '</div><div class="yr-rounds">' + rounds + '</div>' +
        '<div class="row">' + (isDef ? '' : '<button class="btn primary" data-act="set-default" data-fy="' + y.fy + '">' + ic('home', 16) + ' ตั้งเป็นปีที่แสดงในหน้าหลัก</button>') + '<button class="btn" data-act="view-year" data-fy="' + y.fy + '">' + ic('eye', 16) + ' ดูหน้าหลักของปีนี้</button>' + (isDef ? '' : '<button class="btn danger" data-act="year-del" data-fy="' + y.fy + '">' + ic('trash', 16) + ' ลบปีนี้</button>') + '</div></div></div>';
    }).join('');
    return adminShell('admin-years', 'ปีงบประมาณและธีมสี', 'ปีที่ตั้งไว้จะเปิดเป็นค่าเริ่มต้นในหน้าหลัก สีของเว็บเปลี่ยนตามปีงบประมาณที่กำลังดู', '<button class="btn primary" data-act="year-add" data-fy="' + (maxFy + 1) + '">' + ic('plus', 16) + ' เพิ่มปีงบประมาณ ' + (maxFy + 1) + '</button>',
      '<div class="note">ผู้เยี่ยมชมเปลี่ยนปีได้จากปุ่มปีงบประมาณบนแถบเมนู แต่ทุกครั้งที่เปิดเว็บจะเริ่มที่ปีที่ตั้งไว้ที่นี่ · การเลือกธีมบันทึกทันที</div><div style="display:flex;flex-direction:column;gap:16px;margin-top:14px">' + (cards || '<div class="card empty">ยังไม่มีปีงบประมาณ</div>') + '</div>');
  }

  /* ---------- ตั้งค่า ---------- */
  function aSettings() {
    var s = ensureDraft().s, must = D.admin && D.admin.mustChange;
    function inp(k, label, hint) { return '<div class="field"><label for="b-' + k + '">' + label + '</label><input id="b-' + k + '" class="inp" data-b="s.' + k + '" value="' + esc(s[k]) + '">' + (hint ? '<span class="hint">' + hint + '</span>' : '') + '</div>'; }
    var fx = [['zoom', 'ขยายในกรอบ'], ['pop', 'เด้งออกมา'], ['spot', 'สปอตไลต์'], ['off', 'ปิด']];
    var pw = '<div class="card" id="pw-card" style="display:flex;flex-direction:column;gap:12px' + (must ? ';outline:2px solid var(--bad);outline-offset:2px' : '') + '"><h3>เปลี่ยนรหัสผ่าน</h3>' + (must ? '<div class="err">ตอนนี้ยังใช้รหัสผ่านชั่วคราวจากการติดตั้ง กรุณาตั้งรหัสผ่านใหม่</div>' : '') +
      '<div class="field"><label for="pw-old">รหัสผ่านปัจจุบัน</label><input id="pw-old" type="password" class="inp" autocomplete="current-password"></div><div class="grid2"><div class="field"><label for="pw-new">รหัสผ่านใหม่</label><input id="pw-new" type="password" class="inp" autocomplete="new-password"></div><div class="field"><label for="pw-new2">ยืนยันรหัสผ่านใหม่</label><input id="pw-new2" type="password" class="inp" autocomplete="new-password"></div></div>' +
      '<span class="hint">อย่างน้อย 8 ตัว มีทั้งตัวอักษรและตัวเลข · เปลี่ยนแล้วอุปกรณ์อื่นจะถูกออกจากระบบ</span><div id="pw-msg"></div><div><button class="btn primary" data-act="pw-save">' + ic('lock', 16) + ' เปลี่ยนรหัสผ่าน</button></div></div>';
    return adminShell('admin-settings', 'ตั้งค่า', 'ข้อมูลเจ้าของแฟ้ม โลโก้ ค่าเริ่มต้นของผลงาน เอฟเฟค และรหัสผ่าน · ชุดธีมและฟอนต์อยู่ที่เมนู “ชุดธีมและฟอนต์”', '<button class="btn primary" data-act="draft-save">' + ic('check', 16) + ' บันทึกการตั้งค่า</button>',
      '<div class="grid2" style="align-items:start"><div style="display:flex;flex-direction:column;gap:14px">' + (must ? pw : '') +
      '<div class="card" style="display:flex;flex-direction:column;gap:12px"><h3>ข้อมูลเจ้าของแฟ้ม</h3>' + inp('name', 'ชื่อ–สกุล') + '<div class="grid2">' + inp('nick', 'ชื่อที่แสดง') + inp('position', 'ตำแหน่ง/วิทยฐานะ') + '</div>' + inp('subject', 'กลุ่มสาระ') + '<div class="grid2">' + inp('school', 'โรงเรียน') + inp('area', 'สังกัด') + '</div>' + inp('duty', 'หน้าที่') + '</div>' +
      '<div class="card" style="display:flex;flex-direction:column;gap:12px"><h3>โลโก้โรงเรียน</h3><div class="row" style="gap:16px">' + seal('big') + '<div style="display:flex;flex-direction:column;gap:8px"><div class="row"><label class="btn" for="logo-up">' + ic('upload', 16) + ' อัปโหลดโลโก้</label><input id="logo-up" type="file" data-up="logo" accept="image/png,image/jpeg,image/webp" style="display:none">' + (s.logo ? '<button class="btn danger" data-act="img-del" data-k="logo">' + ic('trash', 16) + ' ลบโลโก้</button>' : '') + '</div><span class="hint small muted">PNG พื้นหลังโปร่งใส ไม่เกิน 2 MB ใช้ที่หัวเว็บ หลังบ้าน หน้าเข้าสู่ระบบ วงแหวนโหลด และไอคอนแท็บ</span></div></div>' + inp('initials', 'อักษรย่อเมื่อไม่มีโลโก้') + '</div>' +
      '<div class="card" style="display:flex;flex-direction:column;gap:12px"><h3>ค่าเริ่มต้นของผลงาน</h3><div class="grid2"><div class="field"><label for="b-defvis">สิทธิ์เริ่มต้นเมื่อเพิ่มรายการใหม่</label><select id="b-defvis" class="inp" data-b="s.defaultVis">' + Object.keys(VIS).map(function (k) { return '<option value="' + k + '"' + ((s.defaultVis || 'public') === k ? ' selected' : '') + '>' + VIS[k] + '</option>'; }).join('') + '</select></div>' +
        '<div class="field"><label for="b-hgoal">เป้าชั่วโมงพัฒนาตนเองต่อปี</label><input id="b-hgoal" type="number" min="0" class="inp" data-b="s.hoursGoal" value="' + (+s.hoursGoal || 20) + '"></div></div>' +
        '<b class="small">ใครเห็นเอกสาร PA ของแต่ละปีได้บ้าง</b><div class="grid3">' + [['pa', 'แฟ้ม PA'], ['agree', 'ข้อตกลง PA'], ['idp', 'ID Plan']].map(function (x) { var dv = (s.docVis || {})[x[0]] || 'public'; return '<div class="field"><label for="b-dv-' + x[0] + '">' + x[1] + '</label><select id="b-dv-' + x[0] + '" class="inp" data-b="docVis.' + x[0] + '">' + Object.keys(VIS).map(function (k) { return '<option value="' + k + '"' + (dv === k ? ' selected' : '') + '>' + VIS[k] + '</option>'; }).join('') + '</select></div>'; }).join('') + '</div></div></div>' +
      '<div style="display:flex;flex-direction:column;gap:14px"><div class="card" style="display:flex;flex-direction:column;gap:12px"><h3>การแสดงผลและเอฟเฟค (ทุกคนเห็น)</h3>' +
        '<label class="row small" style="gap:8px"><input type="checkbox" data-b="s.fxGlow"' + (s.fxGlow ? ' checked' : '') + ' style="width:18px;height:18px;accent-color:var(--accent)"> เอฟเฟคเรืองแสง (ปุ่ม การ์ด และภาพปก)</label>' +

        '<div class="field"><label>เอฟเฟครูปภาพเมื่อชี้เมาส์</label><div class="seg" role="group">' + fx.map(function (o) { return '<button type="button" data-act="phfx-set" data-v="' + o[0] + '" class="' + (s.phFx === o[0] ? 'on' : '') + '">' + o[1] + '</button>'; }).join('') + '</div><span class="hint">ลองชี้เมาส์ที่รูปตัวอย่างด้านล่าง ใช้กับภาพกิจกรรม ผลงาน และเกียรติบัตร</span></div>' +
        '<div class="ind-photos phfx-prev">' + [['ค่ายคณิตศาสตร์', 168], ['กิจกรรมกลุ่ม', 30], ['รับเกียรติบัตร', 260]].map(function (p) { return '<button type="button" tabindex="-1">' + ph(p[1], 'image', p[0]) + '</button>'; }).join('') + '</div>' +
        '<div class="grid2"><div class="field"><label for="b-perpub">รายการต่อหน้า (หน้าสาธารณะ)</label><select id="b-perpub" class="inp" data-b="s.perPublic">' + [4, 6, 8, 9, 12, 16, 24].map(function (n) { return '<option value="' + n + '"' + (+s.perPublic === n ? ' selected' : '') + '>' + n + '</option>'; }).join('') + '</select></div><div class="field"><label for="b-peradm">แถวต่อหน้า (หลังบ้าน)</label><select id="b-peradm" class="inp" data-b="s.perAdmin">' + [5, 10, 20, 50].map(function (n) { return '<option value="' + n + '"' + (+s.perAdmin === n ? ' selected' : '') + '>' + n + '</option>'; }).join('') + '</select></div></div>' +
        '</div>' + motionCard() +
      '<div class="card" style="display:flex;flex-direction:column;gap:12px"><h3>การแสดงผลบนเครื่องนี้</h3>' + a11yControls() + '</div>' + (must ? '' : pw) +
      '<div class="card small" style="display:flex;flex-direction:column;gap:6px"><h3>ข้อมูลระบบ</h3><div class="muted">เวอร์ชัน ' + esc(D.version) + '</div><div class="muted" style="word-break:break-all">GAS: <span class="mono">' + esc(GAS_URL) + '</span></div></div></div></div>');
  }

  /* ---------- บันทึกการใช้งาน ---------- */
  function aLogs() {
    var q = (S.logQ || '').toLowerCase();
    var list = D.logs.filter(function (l) { return !q || (l.action + ' ' + l.detail + ' ' + l.actor).toLowerCase().indexOf(q) > -1; });
    var rows = pageOf(list, 'a-logs', perA()).map(function (l) { return '<tr><td class="num" style="white-space:nowrap">' + esc(l.at) + '</td><td>' + esc(l.actor) + '</td><td>' + esc(l.action) + '</td><td class="muted">' + esc(l.detail) + '</td></tr>'; }).join('');
    return adminShell('admin-logs', 'บันทึกการใช้งาน', 'การเข้าสู่ระบบ การแก้ไข และการอัปโหลดทั้งหมด (ชีต Logs) แสดง 300 รายการล่าสุด', '<button class="btn" data-act="logs-refresh">' + ic('refresh', 16) + ' โหลดใหม่</button>',
      '<div class="row" style="margin-bottom:12px"><input id="log-q" class="inp" style="max-width:320px" placeholder="ค้นหา เช่น เข้าสู่ระบบ" value="' + esc(S.logQ || '') + '" aria-label="ค้นหาบันทึก"></div>' +
      '<div class="tbl-wrap"><table class="tbl"><thead><tr><th>เวลา</th><th>ผู้ทำรายการ</th><th>การกระทำ</th><th>รายละเอียด</th></tr></thead><tbody>' + (rows || '<tr><td colspan="4" class="muted">ไม่พบรายการ</td></tr>') + '</tbody></table></div>' + pagerNav('a-logs'));
  }

  /* =====================================================================
     เฟส 2: การเคลื่อนไหว · ภาพวนสลับ · วงแหวนโหลดตามธีม · ชุดธีมและฟอนต์
     ===================================================================== */
  function motionOff() { return S.a11y.motion === 'off' || REDUCED; }

  /* ---------- ภาพวนสลับ (ทุกกล่องที่มีคลาส rot) ---------- */
  function rotDots(n, label) {
    var d = ''; for (var i = 0; i < n; i++) d += '<button type="button" class="' + (i === 0 ? 'on' : '') + '" data-act="rot-go" data-i="' + i + '" aria-label="' + label + ' ' + (i + 1) + '"></button>';
    return '<div class="rot-dots">' + d + '</div>';
  }
  function rotGo(el, i) {
    var items = [], k;
    for (k = 0; k < el.children.length; k++) if (el.children[k].classList.contains('rot-i')) items.push(el.children[k]);
    if (items.length < 2) return;
    i = ((i % items.length) + items.length) % items.length;
    items.forEach(function (it, j) { it.classList.toggle('on', j === i); it.setAttribute('aria-hidden', j === i ? 'false' : 'true'); });
    el.setAttribute('data-i', i);
    var host = el.closest('[data-rot-host]') || el.parentNode, dots = host.querySelectorAll('.rot-dots button');
    for (k = 0; k < dots.length; k++) dots[k].classList.toggle('on', k === i);
    var capId = el.getAttribute('data-cap'), cap = capId && document.getElementById(capId);
    if (cap) { cap.classList.add('swap'); setTimeout(function () { cap.textContent = items[i].getAttribute('data-cap') || ''; cap.classList.remove('swap'); }, 260); }
    el.setAttribute('data-next', Date.now() + rotMs(el));
  }
  function rotMs(el) { var m = (+st().rotSec || 5) * 1000; return el.classList.contains('rot-text') ? m * 1.6 : (el.classList.contains('rot-thumb') ? m * 1.2 : m); }
  setInterval(function () {
    if (!+st().rotSec || motionOff() || document.hidden) return;
    var els = document.querySelectorAll('.rot'), now = Date.now();
    for (var i = 0; i < els.length; i++) {
      var el = els[i];
      if (el.matches(':hover') || el.closest('.paused')) continue;
      var nx = +el.getAttribute('data-next') || 0;
      if (!nx) { el.setAttribute('data-next', now + rotMs(el) + (i % 6) * 650); continue; }
      if (now >= nx) rotGo(el, (+el.getAttribute('data-i') || 0) + 1);
    }
  }, 400);

  /* ---------- เฟดปรากฏเมื่อเลื่อนมาถึง ---------- */
  var REV_SEL = '.cover-t > *, .ahead, .kpi, .card, .album, .wcard, .sys-card, .tl-item, .sec-h, .sec > h2, .todo, .vmain, .vrow';
  var revIO = window.IntersectionObserver ? new IntersectionObserver(function (entries) {
    var k = 0;
    entries.forEach(function (en) {
      if (!en.isIntersecting) return;
      var el = en.target, d = Math.min(k++, 8) * 70;
      revIO.unobserve(el);
      el.style.transitionDelay = d + 'ms';
      el.classList.add('in');
      setTimeout(function () { el.classList.remove('rv', 'in'); el.style.transitionDelay = ''; }, 900 + d);
    });
  }, { rootMargin: '0px 0px -6% 0px', threshold: 0.08 }) : null;
  function revealInit(isNew) {
    if (!isNew || st().fxReveal === false || motionOff() || !revIO) return;
    var els = document.getElementById('app').querySelectorAll(REV_SEL);
    for (var i = 0; i < els.length; i++) {
      var el = els[i];
      if (el.closest('.rv') || el.closest('.modal')) continue;
      el.classList.add('rv'); revIO.observe(el);
    }
  }

  /* ---------- วงแหวนโหลดตามธีม ---------- */
  var LD = { timer: 0, hideT: 0, pct: 0, manual: false, step: '', msg: '' }, loaderN = 0;
  function ldRing(style) {
    var C = 2 * Math.PI * 52;
    var orbs = style === 'orbit' ? '<span class="ld-orbs"><i></i><i></i><i></i></span>' : '';
    var waves = style === 'pulse' ? '<span class="ld-wave"></span><span class="ld-wave w2"></span>' : '';
    return '<div class="ld-ring ld-' + style + '">' + waves +
      '<svg viewBox="0 0 120 120" aria-hidden="true"><defs><linearGradient id="ldg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" style="stop-color:var(--cover-hi)"/><stop offset=".55" style="stop-color:var(--accent)"/><stop offset="1" style="stop-color:var(--cover)"/></linearGradient></defs>' +
      '<circle class="ld-track" cx="60" cy="60" r="52"/>' + (style === 'dual' ? '<circle class="ld-inner" cx="60" cy="60" r="41"/>' : '') +
      '<circle class="ld-spin" cx="60" cy="60" r="52" stroke-dasharray="' + (C * 0.22).toFixed(1) + ' ' + C.toFixed(1) + '"/>' +
      '<circle class="ld-prog" cx="60" cy="60" r="52" stroke-dasharray="' + C.toFixed(1) + '" stroke-dashoffset="' + C.toFixed(1) + '" data-c="' + C.toFixed(1) + '"/></svg>' +
      orbs + '<span class="ld-core">' + seal() + '</span></div>';
  }
  function ldPaint() {
    var el = $('loader'); if (!el) return;
    var p = Math.min(100, LD.pct), prog = el.querySelector('.ld-prog');
    if (prog) prog.setAttribute('stroke-dashoffset', (+prog.getAttribute('data-c') * (1 - p / 100)).toFixed(1));
    var pe = el.querySelector('.ld-pct'); if (pe) pe.textContent = Math.floor(p) + '%';
    var se = el.querySelector('.ld-step');
    if (se) se.textContent = LD.step || (p >= 100 ? 'เสร็จเรียบร้อย' : (p < 28 ? 'กำลังเชื่อมต่อ Google Apps Script' : (p < 62 ? 'กำลังรับส่งข้อมูลกับ Google Sheets' : 'กำลังจัดเตรียมหน้าจอ')));
  }
  function ldOpen(msg, manual) {
    var s = st(), el = $('loader'); if (!el) return false;
    clearTimeout(LD.hideT); clearInterval(LD.timer);
    if (s.fxLoader === false) { el.className = 'loader on quiet'; el.innerHTML = ''; return false; }
    LD.pct = 0; LD.manual = !!manual; LD.step = ''; LD.msg = msg;
    el.innerHTML = '<div class="ring-wrap ld-box">' + ldRing(s.loaderStyle || 'orbit') +
      '<div class="ld-t">' + esc(msg || 'กำลังโหลดข้อมูล') + '<span class="dots"><i>.</i><i>.</i><i>.</i></span></div>' +
      (s.loaderPct !== false ? '<div class="ld-bar"><b class="ld-pct">0%</b><span class="ld-step"></span></div>' : '') + '</div>';
    el.className = 'loader on';
    ldPaint();
    return true;
  }
  function showLoader(msg, noCount) {
    if (!noCount) loaderN++;
    var el = $('loader');
    if (el && / on/.test(' ' + el.className) && el.className.indexOf('done') < 0 && !LD.manual) { var t = el.querySelector('.ld-t'); if (t && msg) t.firstChild.textContent = msg; return; }
    if (!ldOpen(msg)) return;
    LD.timer = setInterval(function () { LD.pct += (93 - LD.pct) * 0.075; ldPaint(); }, 110);
  }
  function hideLoader(force) {
    loaderN = force ? 0 : Math.max(0, loaderN - 1);
    if (loaderN) return;
    var el = $('loader'); if (!el || el.className.indexOf('on') < 0) return;
    clearInterval(LD.timer); LD.manual = false;
    if (el.className.indexOf('quiet') > -1) { el.className = 'loader'; return; }
    LD.pct = 100; LD.step = ''; ldPaint();
    el.classList.add('done');
    clearTimeout(LD.hideT);
    LD.hideT = setTimeout(function () { el.className = 'loader'; }, 420);
  }
  /** แถบความคืบหน้าจริง (ใช้ตอนอัปโหลดหลายไฟล์) */
  function showProgress(msg) { loaderN++; ldOpen(msg, true); }
  function setProgress(p, step) { LD.pct = p; LD.step = step || ''; ldPaint(); }

  /* ---------- ชุดธีม (เปลี่ยนทั้งหน้าตา) + ฟอนต์ ---------- */
  var FONTS = [
    ['IBM Plex Sans Thai', 'ทันสมัย อ่านง่าย', '400;500;600;700'],
    ['Sarabun', 'แบบเอกสารราชการ', '400;500;600;700'],
    ['Noto Sans Thai', 'เรียบ สากล', '400;500;600;700'],
    ['Prompt', 'โมเดิร์น', '300;400;500;600;700'],
    ['Kanit', 'หนักแน่น ชัด', '300;400;500;600;700'],
    ['Mitr', 'โค้งมน เป็นมิตร', '300;400;500;600'],
    ['Bai Jamjuree', 'เทคโนโลยี', '400;500;600;700'],
    ['Chakra Petch', 'ล้ำยุค เกมมิ่ง', '400;500;600;700'],
    ['Mali', 'น่ารัก ลายมือ', '400;500;600;700'],
    ['Itim', 'ลายมือสบายๆ', '400'],
    ['Noto Serif Thai', 'มีหัว ทางการ', '400;600;700'],
    ['Pridi', 'มีหัว คลาสสิก', '400;500;600;700'],
    ['Charm', 'อักษรประดิษฐ์ (เหมาะกับหัวข้อ)', '400;700']
  ];
  var SKINS = {
    classic: { name: 'มาตรฐาน', en: 'Classic', desc: 'เรียบร้อย ทางการ ใช้สีตามปีงบประมาณ', fh: 'Noto Serif Thai', fb: 'IBM Plex Sans Thai', tags: ['สว่าง/มืดตามเครื่อง'], pal: null },
    neon: { name: 'นีออนไซเบอร์', en: 'Neon', desc: 'พื้นมืด เส้นเรืองแสงฟ้า–ชมพู ตารางกริดแบบไซไฟ', fh: 'Chakra Petch', fb: 'Bai Jamjuree', tags: ['มืด', 'เรืองแสง'], dark: true,
      pal: { name: 'นีออน', a: '#00e5ff', s: 'rgba(0,229,255,.14)', ad: '#00e5ff', sd: 'rgba(0,229,255,.14)', cv: '#170a3a', cv2: '#05020f', hi: '#ff2bd6' } },
    rgb: { name: 'RGB เกมมิ่ง', en: 'RGB', desc: 'ขอบสีรุ้งไหลวน ตัวอักษรไล่สี บรรยากาศเกมมิ่งล้ำๆ', fh: 'Kanit', fb: 'Bai Jamjuree', tags: ['มืด', 'เคลื่อนไหว'], dark: true,
      pal: { name: 'RGB', a: '#a78bfa', s: 'rgba(139,92,246,.18)', ad: '#a78bfa', sd: 'rgba(139,92,246,.18)', cv: '#120f2b', cv2: '#04030c', hi: '#22d3ee' } },
    pastel: { name: 'พาสเทลนุ่มนวล', en: 'Pastel', desc: 'สีหวาน มุมโค้งมน เงานุ่ม ฟอนต์ลายมือน่ารัก', fh: 'Mali', fb: 'Mitr', tags: ['สว่าง', 'โค้งมน'], pal: 'sakura' },
    glass: { name: 'กระจกฝ้า', en: 'Glass', desc: 'การ์ดโปร่งแสงเบลอ พื้นหลังฟุ้งตามสีธีม ดูพรีเมียม', fh: 'Prompt', fb: 'Noto Sans Thai', tags: ['สว่าง', 'โปร่งแสง'], pal: null },
    royal: { name: 'ไทยร่วมสมัย', en: 'Royal Thai', desc: 'กรมท่าตัดทอง เส้นขอบทอง ดูสง่าเป็นทางการ', fh: 'Pridi', fb: 'Sarabun', tags: ['สว่าง', 'ทางการ'],
      pal: { name: 'กรมท่าทอง', a: '#1f3a68', s: '#e5eaf3', ad: '#9db8e8', sd: '#18233a', cv: '#14274a', cv2: '#0a1630', hi: '#e2c167' } },
    paper: { name: 'เอกสารราชการ', en: 'Paper', desc: 'ขาวสะอาด เส้นบาง ไม่มีเงา ฟอนต์สารบรรณ เหมาะส่งกรรมการ', fh: 'Noto Serif Thai', fb: 'Sarabun', tags: ['สว่าง', 'เรียบ'], pal: null }
  };
  S.skinPreview = ''; S.mySkin = '';
  try { S.mySkin = localStorage.getItem('pa-skin') || ''; } catch (e9) { }
  function curSkin() { var s = st(), k = S.skinPreview || (s.visitorSkin !== false && !S.admin && S.mySkin) || s.skin || 'classic'; return SKINS[k] ? k : 'classic'; }
  function skinPal(k) { var p = SKINS[k].pal; return typeof p === 'string' ? THEMES[p] : p; }
  function activePalette() { var k = curSkin(), p = skinPal(k); return p && st().skinColors !== 'year' ? p : themeOf(yearOf(S.fy)); }
  var fontLoaded = { 'IBM Plex Sans Thai': 1, 'Noto Serif Thai': 1 };
  function loadFont(f) {
    if (!f || fontLoaded[f]) return; fontLoaded[f] = 1;
    var def = FONTS.filter(function (x) { return x[0] === f; })[0]; if (!def) return;
    var l = document.createElement('link'); l.rel = 'stylesheet';
    l.href = 'https://fonts.googleapis.com/css2?family=' + f.replace(/ /g, '+') + ':wght@' + def[2] + '&display=swap';
    document.head.appendChild(l);
  }
  function applySkin() {
    var k = curSkin(), sk = SKINS[k], r = document.documentElement, s = st();
    Object.keys(SKINS).forEach(function (x) { r.classList.toggle('skin-' + x, x === k); });
    r.classList.add('skin');
    var fh = (!S.skinPreview && s.fontH) || sk.fh, fb = (!S.skinPreview && s.fontB) || sk.fb;
    loadFont(fh); loadFont(fb);
    var el = document.getElementById('skin-font-css');
    if (!el) { el = document.createElement('style'); el.id = 'skin-font-css'; document.head.appendChild(el); }
    el.textContent = ':root.skin{--f-display:"' + fh + '","Noto Serif Thai",serif;--f-body:"' + fb + '","Sarabun","Leelawadee UI",system-ui,sans-serif}';
  }
  function palVars(t) {
    var L = !!t.pastel || lum(t.cv) > 0.45;
    return '--accent:' + t.a + ';--accent-ink:' + (contrast(t.a, '#ffffff') >= 4.5 ? '#ffffff' : '#14222a') + ';--accent-soft:' + t.s + ';--cover:' + t.cv + ';--cover-2:' + t.cv2 + ';--cover-hi:' + t.hi + ';--cv-ink:' + (L ? '#1b2430' : '#ffffff');
  }
  function skinCard(k) {
    var s = st(), sk = SKINS[k], on = (s.skin || 'classic') === k, p = skinPal(k) || themeOf(yearOf(S.fy));
    loadFont(sk.fh); loadFont(sk.fb);
    var mock = '<div class="skp skp-' + k + '" style="' + palVars(p) + ';font-family:\'' + sk.fb + '\',sans-serif" aria-hidden="true">' +
      '<div class="sp-head"><span class="sp-seal">' + esc(s.initials || 'บล') + '</span><b>แฟ้มผลงานครู</b><i></i><i></i><i></i></div>' +
      '<div class="sp-cover"><span class="sp-eb">ปีงบประมาณ ' + S.fy + '</span><b class="sp-h" style="font-family:\'' + sk.fh + '\',serif">' + esc(s.name) + '</b><span class="sp-btn">ดูผลงาน</span></div>' +
      '<div class="sp-body"><div class="sp-card"><span>ผลงาน</span><b>' + D.content.works.length + '</b></div><div class="sp-card"><span>วิดีโอ</span><b>' + D.content.videos.length + '</b></div><div class="sp-card"><span>ภาพ</span><b>' + D.content.photos.length + '</b></div></div></div>';
    return '<article class="card skin-card' + (on ? ' on' : '') + '">' + mock +
      '<div class="skin-meta"><div class="row" style="justify-content:space-between;gap:6px"><h3>' + sk.name + ' <span class="small muted">' + sk.en + '</span></h3>' + (on ? '<span class="pill good">' + ic('check', 13) + ' ใช้อยู่</span>' : '') + '</div>' +
      '<p class="small muted">' + sk.desc + '</p><div class="row small" style="gap:4px">' + sk.tags.map(function (t) { return '<span class="chip">' + t + '</span>'; }).join('') + '<span class="chip">หัวข้อ: ' + sk.fh + '</span><span class="chip">เนื้อหา: ' + sk.fb + '</span></div>' +
      '<div class="row" style="gap:6px;margin-top:4px"><button class="btn sm" data-act="skin-preview" data-k="' + k + '">' + ic('eye', 15) + ' ดูตัวอย่างทั้งหน้า</button>' + (on ? '' : '<button class="btn sm primary" data-act="skin-use" data-k="' + k + '">' + ic('check', 15) + ' ใช้ธีมนี้</button>') + '</div></div></article>';
  }
  function fontCard(f) {
    var s = st(), sk = SKINS[s.skin || 'classic'] || SKINS.classic;
    loadFont(f[0]);
    var isH = (s.fontH || sk.fh) === f[0], isB = (s.fontB || sk.fb) === f[0];
    return '<div class="font-card' + (isH || isB ? ' on' : '') + '"><div class="fc-sample" style="font-family:\'' + f[0] + '\',sans-serif"><b>แฟ้มผลงานครู ' + S.fy + '</b><span>กขคง ABC 123 ครูคณิตศาสตร์</span></div><div class="fc-meta"><b class="small">' + f[0] + '</b><span class="small muted">' + f[1] + '</span></div>' +
      '<div class="row" style="gap:4px"><button class="btn sm' + (isH ? ' primary' : '') + '" data-act="font-set" data-k="H" data-v="' + f[0] + '">' + (isH ? ic('check', 13) + ' ' : '') + 'หัวข้อ</button><button class="btn sm' + (isB ? ' primary' : '') + '" data-act="font-set" data-k="B" data-v="' + f[0] + '"' + (f[0] === 'Charm' ? ' disabled title="อ่านยากเมื่อเป็นเนื้อหายาว"' : '') + '>' + (isB ? ic('check', 13) + ' ' : '') + 'เนื้อหา</button></div></div>';
  }
  function aThemes() {
    var s = st(), k = s.skin || 'classic', sk = SKINS[k] || SKINS.classic, hasPal = !!sk.pal;
    var colorSeg = hasPal ? '<div class="seg" role="group">' + [['skin', 'สีของชุดธีม (' + (skinPal(k).name || '') + ')'], ['year', 'สีตามปีงบประมาณ']].map(function (o) { return '<button type="button" data-act="skin-colors" data-v="' + o[0] + '" class="' + (s.skinColors === o[0] ? 'on' : '') + '">' + o[1] + '</button>'; }).join('') + '</div>' : '<span class="small muted">ชุดธีมนี้ใช้สีตามปีงบประมาณ · <a href="#admin-years">เปลี่ยนสีของแต่ละปี</a></span>';
    return adminShell('admin-themes', 'หน้ารวมธีมและฟอนต์', 'เปลี่ยนหน้าตาทั้งเว็บในคลิกเดียว ทั้งสีพื้น การ์ด เงา มุมโค้ง เอฟเฟค และฟอนต์ · กดดูตัวอย่างทั้งหน้าก่อนใช้จริงได้ · บันทึกทันที', '<a class="btn" href="#admin-years">' + ic('cal', 16) + ' สีตามปีงบประมาณ</a>',
      '<div class="card theme-now"><div><span class="eyebrow">ชุดธีมที่ใช้อยู่</span><h3>' + sk.name + ' <span class="small muted">' + sk.en + '</span></h3><p class="small muted">หัวข้อ ' + (s.fontH || sk.fh) + ' · เนื้อหา ' + (s.fontB || sk.fb) + (s.fontH || s.fontB ? ' (ปรับเอง)' : ' (ตามชุดธีม)') + '</p></div>' +
        '<div style="display:flex;flex-direction:column;gap:8px"><b class="small">สีที่ใช้</b>' + colorSeg + '</div>' +
        '<div style="display:flex;flex-direction:column;gap:8px">' + chk('visitor-skin', s.visitorSkin !== false, 'ให้ผู้ชมเลือกชุดธีมเองได้ (ในปุ่ม "การแสดงผล")') + '<span class="small muted">ค่าที่ผู้ชมเลือกใช้เฉพาะเครื่องของเขา</span></div></div>' +
      '<h2 class="th-h">ชุดธีม (' + Object.keys(SKINS).length + ' แบบ)</h2><div class="skin-grid">' + Object.keys(SKINS).map(skinCard).join('') + '</div>' +
      '<div class="row" style="justify-content:space-between;margin:26px 0 10px"><h2 class="th-h" style="margin:0">ฟอนต์ (' + FONTS.length + ' แบบ)</h2>' + (s.fontH || s.fontB ? '<button class="btn sm" data-act="font-reset">' + ic('refresh', 15) + ' กลับไปใช้ฟอนต์ของชุดธีม</button>' : '') + '</div>' +
      '<p class="small muted" style="margin-bottom:10px">ฟอนต์ภาษาไทยจาก Google Fonts ใช้ฟรี · เลือกแยกหัวข้อกับเนื้อหาได้ · ฟอนต์ลายมือเหมาะกับหัวข้อ เนื้อหายาวควรใช้ฟอนต์อ่านง่าย</p><div class="font-grid">' + FONTS.map(fontCard).join('') + '</div>');
  }
  function skinBar() {
    var sk = SKINS[S.skinPreview];
    return '<div class="skin-bar" role="status">' + ic('eye', 16) + '<span>กำลังดูตัวอย่าง <b>' + sk.name + '</b> · ผู้ชมคนอื่นยังเห็นธีมเดิม</span><span style="flex:1"></span><button class="btn sm" data-act="skin-cancel">' + ic('x', 14) + ' ยกเลิก</button><button class="btn sm primary" data-act="skin-use" data-k="' + S.skinPreview + '">' + ic('check', 14) + ' ใช้ธีมนี้</button></div>';
  }
  function visitorSkinControl() {
    if (st().visitorSkin === false || S.admin) return '';
    var cur = S.mySkin || '';
    return '<div class="field"><label>ชุดธีม (เฉพาะเครื่องนี้)</label><div class="seg wrap" role="group"><button type="button" data-act="my-skin" data-v="" class="' + (!cur ? 'on' : '') + '">ตามเว็บ</button>' + Object.keys(SKINS).map(function (k) { return '<button type="button" data-act="my-skin" data-v="' + k + '" class="' + (cur === k ? 'on' : '') + '">' + SKINS[k].name + '</button>'; }).join('') + '</div></div>';
  }
  /** บันทึกค่าตั้งค่าทันที (ใช้กับปุ่มเลือกธีม ฟอนต์ สไลด์) */
  function quickSet(values, msg, cb) {
    api('saveSettings', { values: values }, { loader: 'กำลังบันทึก' }, function (err, res) {
      if (err) { toast(err); return; }
      D.settings = res.settings;
      if (S.draft) for (var k in values) { S.draft.s[k] = res.settings[k]; S.dirty['s.' + k] = false; }
      cachePublic(); render(); if (msg) toast(msg); if (cb) cb();
    });
  }

  /* ---------- การ์ดตั้งค่าการเคลื่อนไหว (หน้าตั้งค่า) ---------- */
  function motionCard() {
    var s = st();
    function seg(key, opts) { return '<div class="seg" role="group">' + opts.map(function (o) { return '<button type="button" data-act="draft-set" data-k="' + key + '" data-v="' + o[0] + '" class="' + (String(s[key]) === String(o[0]) ? 'on' : '') + '">' + o[1] + '</button>'; }).join('') + '</div>'; }
    return '<div class="card" style="display:flex;flex-direction:column;gap:12px"><h3>การเคลื่อนไหวและวงแหวนโหลด (ทุกคนเห็น)</h3>' +
      '<label class="row small" style="gap:8px"><input type="checkbox" data-b="s.fxReveal"' + (s.fxReveal !== false ? ' checked' : '') + ' style="width:18px;height:18px;accent-color:var(--accent)"> เฟดปรากฏข้อความและการ์ดเมื่อเปิดหน้าและเลื่อนลง</label>' +
      '<div class="field"><label>ภาพวนสลับ (ภาพปก อัลบั้ม ข้อความใต้ชื่อ)</label>' + seg('rotSec', [[0, 'ปิด'], [3, '3 วินาที'], [5, '5 วินาที'], [8, '8 วินาที'], [12, '12 วินาที']]) + '</div>' +
      '<div class="field"><label>แบบวงแหวนโหลด</label>' + seg('loaderStyle', [['orbit', 'วงโคจร'], ['dual', 'วงแหวนคู่'], ['pulse', 'คลื่นชีพจร']]) + '</div>' +
      '<div class="ld-prev">' + ['orbit', 'dual', 'pulse'].map(function (k) { return '<button type="button" class="ld-mini' + (s.loaderStyle === k ? ' on' : '') + '" data-act="draft-set" data-k="loaderStyle" data-v="' + k + '" aria-label="เลือกแบบวงแหวน ' + k + '">' + ldRing(k) + '</button>'; }).join('') + '</div>' +
      '<label class="row small" style="gap:8px"><input type="checkbox" data-b="s.fxLoader"' + (s.fxLoader !== false ? ' checked' : '') + ' style="width:18px;height:18px;accent-color:var(--accent)"> แสดงวงแหวนเมื่อโหลดหรือบันทึกข้อมูล</label>' +
      '<label class="row small" style="gap:8px"><input type="checkbox" data-b="s.loaderPct"' + (s.loaderPct !== false ? ' checked' : '') + ' style="width:18px;height:18px;accent-color:var(--accent)"> แสดงเปอร์เซ็นต์และขั้นตอนใต้วงแหวน</label>' +
      '<div class="row"><button class="btn" data-act="loader-test">' + ic('refresh', 16) + ' ทดลองวงแหวนโหลด</button></div>' +
      '<p class="small muted">สีวงแหวนไล่ตามธีมของปีงบที่กำลังดู · ผู้ที่ตั้งลดการเคลื่อนไหวจะเห็นแบบนิ่ง · กดบันทึกการตั้งค่าเพื่อให้ทุกคนเห็น</p></div>';
  }

  /* =====================================================================
     เฟส 2: คลังผลงาน ภาพกิจกรรม วิดีโอ รางวัล/อบรม ระบบที่จัดทำ (หน้าสาธารณะ)
     ===================================================================== */
  var SIDES = { 1: 'ด้านการจัดการเรียนรู้', 2: 'ด้านการส่งเสริมและสนับสนุนการจัดการเรียนรู้', 3: 'ด้านการพัฒนาตนเองและวิชาชีพ' };
  var IND_BASE = [
    ['1.1', 1, 'สร้างและหรือพัฒนาหลักสูตร'], ['1.2', 1, 'ออกแบบการจัดการเรียนรู้'], ['1.3', 1, 'จัดกิจกรรมการเรียนรู้'],
    ['1.4', 1, 'สร้างและหรือพัฒนาสื่อ นวัตกรรม เทคโนโลยี และแหล่งเรียนรู้'], ['1.5', 1, 'วัดและประเมินผลการเรียนรู้'],
    ['1.6', 1, 'ศึกษา วิเคราะห์ และสังเคราะห์ เพื่อแก้ปัญหาหรือพัฒนาการเรียนรู้'], ['1.7', 1, 'จัดบรรยากาศที่ส่งเสริมและพัฒนาผู้เรียน'],
    ['1.8', 1, 'อบรมและพัฒนาคุณลักษณะที่ดีของผู้เรียน'], ['2.1', 2, 'จัดทำข้อมูลสารสนเทศของผู้เรียนและรายวิชา'],
    ['2.2', 2, 'ดำเนินการตามระบบดูแลช่วยเหลือผู้เรียน'], ['2.3', 2, 'ปฏิบัติงานวิชาการ และงานอื่น ๆ ของสถานศึกษา'],
    ['2.4', 2, 'ประสานความร่วมมือกับผู้ปกครอง ภาคีเครือข่าย และหรือสถานประกอบการ'], ['3.1', 3, 'พัฒนาตนเองอย่างเป็นระบบและต่อเนื่อง'],
    ['3.2', 3, 'มีส่วนร่วมในการแลกเปลี่ยนเรียนรู้ทางวิชาชีพ (PLC)'], ['3.3', 3, 'นำความรู้ ความสามารถ ทักษะที่ได้จากการพัฒนาตนเองและวิชาชีพมาใช้']
  ].map(function (x) { return { code: x[0], side: x[1], name: x[2] }; });
  var CATS = {
    award: { label: 'เกียรติบัตร/รางวัล', icon: 'award', h: 38 },
    train: { label: 'อบรม/พัฒนาตนเอง', icon: 'book', h: 200 },
    media: { label: 'สื่อ/นวัตกรรม', icon: 'monitor', h: 165 },
    plan: { label: 'แผนการจัดการเรียนรู้', icon: 'file', h: 222 },
    research: { label: 'วิจัยในชั้นเรียน', icon: 'flask', h: 330 },
    plc: { label: 'PLC', icon: 'users', h: 140 },
    duty: { label: 'งานที่ได้รับมอบหมาย', icon: 'brief', h: 18 }
  };
  var VIS = { 'public': 'สาธารณะ', committee: 'เฉพาะกรรมการ', 'private': 'ส่วนตัว' };
  var VTYPE = { pa: 'คลิปประกอบการประเมิน', intro: 'แนะนำตัว', activity: 'กิจกรรม/ผลงาน' };
  var VSRC = { youtube: 'YouTube', drive: 'Google Drive' };
  var ATYPE = { award: 'รางวัล', cert: 'เกียรติบัตร', training: 'การอบรม' };
  var ALEVEL = ['โรงเรียน', 'กลุ่มโรงเรียน', 'เขตพื้นที่', 'จังหวัด', 'ภาค', 'ชาติ', 'นานาชาติ', 'ออนไลน์'];
  var LTYPE = {
    vercel: { t: 'Vercel', i: 'monitor' }, netlify: { t: 'Netlify', i: 'monitor' }, pages: { t: 'GitHub Pages', i: 'monitor' }, web: { t: 'เว็บไซต์', i: 'monitor' },
    github: { t: 'GitHub', i: 'code' }, gas: { t: 'GAS Web App', i: 'layers' }, sheet: { t: 'Google Sheets', i: 'grid' }, line: { t: 'LINE OA', i: 'chat' }, doc: { t: 'คู่มือ', i: 'book' }, other: { t: 'ลิงก์อื่น', i: 'link' }
  };
  var SSTATUS = { live: { t: 'ใช้งานจริง', c: 'good' }, pilot: { t: 'ทดลองใช้', c: 'info' }, dev: { t: 'กำลังพัฒนา', c: 'warn' } };
  var SCAT = { admin: 'บริหารงานโรงเรียน', learn: 'การเรียนการสอน', student: 'กิจกรรมนักเรียน' };

  function C() { return D.content; }
  function indName(code) { var x = find(IND_BASE, 'code', code); return x ? x.name : ''; }
  function hashStr(s) { var h = 7; s = String(s); for (var i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) % 100000; return h; }
  function hueOf(id) { return hashStr(id) % 360; }
  function fyRange(fy) { return [(fy - 544) + '-10-01', (fy - 543) + '-09-30']; }
  function inFy(date, fy) { var g = fyRange(fy); return date >= g[0] && date <= g[1]; }
  function canOpen(x) { return S.admin || x.vis === 'public'; }
  function shown(x) { return S.admin || x.vis !== 'private'; }
  function indChips(arr) { return (arr || []).map(function (c) { return '<span class="chip ind" title="' + esc(indName(c)) + '">' + c + '</span>'; }).join(''); }
  function visChip(v) {
    if (v === 'public') return '<span class="chip">' + ic('eye', 13) + ' สาธารณะ</span>';
    if (v === 'committee') return '<span class="chip gold">' + ic('lock', 13) + ' เฉพาะกรรมการ</span>';
    return '<span class="chip">' + ic('lock', 13) + ' ส่วนตัว</span>';
  }
  function byDate(a, b) { return a.date < b.date ? 1 : (a.date > b.date ? -1 : 0); }
  function lockNote(what) { return '<div class="note">' + ic('lock', 15) + ' ' + what + 'นี้เปิดได้เฉพาะคณะกรรมการประเมิน</div>'; }

  /* ---------- วิดีโอ ---------- */
  function ytId(u) { var m = String(u || '').match(/(?:youtu\.be\/|v=|embed\/|shorts\/|live\/)([\w-]{11})/); return m ? m[1] : ''; }
  function driveId(u) { var m = String(u || '').match(/[-\w]{25,}/); return m ? m[0] : ''; }
  function embedUrl(v) {
    if (v.src === 'youtube') { var y = ytId(v.url); return y ? 'https://www.youtube-nocookie.com/embed/' + y + '?rel=0' : ''; }
    if (v.src === 'drive') { var d = driveId(v.url); return d ? 'https://drive.google.com/file/d/' + d + '/preview' : ''; }
    return '';
  }
  function vImg(v) { if (v.thumbUrl) return v.thumbUrl; var y = v.src === 'youtube' && ytId(v.url); return y ? 'https://i.ytimg.com/vi/' + y + '/hqdefault.jpg' : ''; }
  function VIDS() { return C().videos.filter(function (v) { return shown(v) && (!v.fy || v.fy === S.fy); }); }
  function vThumb(v, size) {
    var can = canOpen(v), big = size === 'big', sm = size === 'sm', img = vImg(v);
    return '<div class="vthumb' + (sm ? ' sm' : '') + (img ? ' has-img' : '') + '" style="--h:' + hueOf(v.id) + '">' + (img ? '<img src="' + esc(img) + '" alt="" loading="lazy">' : '') +
      '<span class="play">' + ic(can ? 'play' : 'lock', big ? 30 : (sm ? 16 : 22)) + '</span>' + (v.dur ? '<span class="dur num">' + esc(v.dur) + '</span>' : '') +
      (v.vis === 'committee' ? '<span class="badge chip gold">' + ic('lock', 12) + ' เฉพาะกรรมการ</span>' : (v.vis === 'private' ? '<span class="badge chip">' + ic('lock', 12) + ' ส่วนตัว</span>' : '')) + '</div>';
  }
  function videoCard(v) {
    return '<button class="wcard" data-act="open-video" data-id="' + v.id + '">' + vThumb(v) + '<div class="t">' + esc(v.title) + '</div><div class="m"><span class="small muted">' + VTYPE[v.type] + ' · ' + fd(v.date) + '</span>' + indChips(v.ind) + '</div></button>';
  }
  function videoRow(v, sub) {
    return '<button class="vrow" data-act="open-video" data-id="' + v.id + '">' + vThumb(v, 'sm') + '<span><span class="t">' + esc(v.title) + '</span><span class="small muted">' + (sub || (VTYPE[v.type] + (v.dur ? ' · ' + esc(v.dur) : ''))) + '</span></span></button>';
  }
  function openVideo(id) {
    var v = find(C().videos, 'id', id); if (!v) return;
    var can = canOpen(v) && v.url, src = can ? embedUrl(v) : '';
    var player = src ? '<div class="vplayer-wrap"><iframe src="' + esc(src) + '" title="' + esc(v.title) + '" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen loading="lazy"></iframe></div>'
      : vThumb(v, 'big') + (v.vis === 'committee' && !S.admin ? lockNote('วิดีโอ') : '<div class="note small">ยังไม่ได้ใส่ลิงก์วิดีโอ</div>');
    openModal(esc(VTYPE[v.type]), player + '<h2>' + esc(v.title) + '</h2><div class="row small muted">' + ic('cal', 15) + ' ' + fd(v.date) + (v.dur ? ' · ความยาว ' + esc(v.dur) : '') + ' ' + (S.admin ? visChip(v.vis) : '') + '</div>' + (v.desc ? '<p>' + esc(v.desc) + '</p>' : '') +
      (v.ind.length ? '<div class="row" style="gap:6px"><b class="small">ตัวชี้วัด PA ที่เกี่ยวข้อง</b>' + indChips(v.ind) + '</div>' : ''),
      (can ? '<a class="btn" href="' + esc(v.url) + '" target="_blank" rel="noopener">' + ic('ext', 16) + ' เปิดใน ' + VSRC[v.src] + '</a>' : '') + '<button class="btn primary" data-act="close-modal">ปิด</button>', true);
  }

  /* ---------- ระบบที่จัดทำ ---------- */
  function hostOf(u) { return String(u || '').replace(/^https?:\/\//, '').split('/')[0]; }
  function showUrl(u) {
    var t = String(u || '').replace(/^https?:\/\//, '').replace(/\/$/, '');
    if (/^script\.google\.com\/macros\/s\//.test(t)) return 'script.google.com/macros/s/…/exec';
    return t.length > 46 ? t.slice(0, 44) + '…' : t;
  }
  function canSeeLink(l, sy) { return S.admin || (l.vis === 'public' && sy.vis === 'public' && l.url); }
  function primaryLink(sy) {
    var webs = ['vercel', 'netlify', 'pages', 'web'];
    for (var i = 0; i < sy.links.length; i++) { var l = sy.links[i]; if (l.url && webs.indexOf(l.type) > -1 && canSeeLink(l, sy)) return l; }
    return null;
  }
  function guessType(u) {
    u = String(u || '');
    if (/script\.google\.com/.test(u)) return 'gas';
    if (/github\.io/.test(u)) return 'pages';
    if (/github\.com/.test(u)) return 'github';
    if (/vercel\.app/.test(u)) return 'vercel';
    if (/netlify\.app/.test(u)) return 'netlify';
    if (/docs\.google\.com\/spreadsheets/.test(u)) return 'sheet';
    if (/lin\.ee|line\.me/.test(u)) return 'line';
    return 'web';
  }
  function shot(sy) {
    var pl = primaryLink(sy), first = sy.links.filter(function (l) { return l.url; })[0];
    return '<div class="shot"><div class="shot-bar"><i></i><i></i><i></i><span>' + esc(pl ? hostOf(pl.url) : (first && canSeeLink(first, sy) ? hostOf(first.url) : (sy.locked ? 'เฉพาะกรรมการ' : 'ยังไม่ได้ใส่ลิงก์เว็บ'))) + '</span></div>' +
      (sy.imgUrl ? '<img src="' + esc(sy.imgUrl) + '" alt="ภาพหน้าจอ ' + esc(sy.name) + '" loading="lazy">' : '<div class="shot-body" style="--h:' + hueOf(sy.id) + '"><span class="sb1"></span><span class="sb2"></span><span class="sb3"></span></div>') + '</div>';
  }
  function linksHtml(sy) {
    return sy.links.filter(function (l) { return S.admin ? l.url : true; }).map(function (l) {
      var T = LTYPE[l.type] || LTYPE.other;
      if (!canSeeLink(l, sy)) return '<span class="lk locked">' + ic('lock', 15) + ' <b>' + T.t + '</b><span class="host">เฉพาะกรรมการ</span></span>';
      return '<a class="lk" href="' + esc(l.url) + '" target="_blank" rel="noopener">' + ic(T.i, 15) + ' <b>' + T.t + '</b><span class="host">' + esc(showUrl(l.url)) + '</span>' + (S.admin && l.vis !== 'public' ? ' ' + visChip(l.vis) : '') + ic('ext', 14) + '</a>';
    }).join('');
  }
  function sysCard(sy) {
    var pl = primaryLink(sy), stt = SSTATUS[sy.status] || SSTATUS.live;
    return '<article class="sys-card">' + shot(sy) +
      '<div class="row" style="gap:6px"><span class="pill ' + stt.c + '">' + stt.t + '</span><span class="chip">' + (SCAT[sy.cat] || '') + '</span>' + (sy.year ? '<span class="chip">ปี ' + sy.year + '</span>' : '') + (S.admin && sy.vis !== 'public' ? visChip(sy.vis) : '') + '</div>' +
      '<h3>' + esc(sy.name) + '</h3>' + (sy.desc ? '<p class="small muted">' + esc(sy.desc) + '</p>' : '') +
      (sy.tech.length ? '<div class="row" style="gap:4px">' + sy.tech.map(function (t) { return '<span class="chip">' + esc(t) + '</span>'; }).join('') + '</div>' : '') +
      (sy.ind.length ? '<div class="row" style="gap:4px"><span class="small muted">ตัวชี้วัด PA</span>' + indChips(sy.ind) + '</div>' : '') +
      '<div class="links">' + (linksHtml(sy) || '<span class="small muted">ยังไม่มีลิงก์ที่เปิดเผย</span>') + '</div>' +
      '<div class="row">' + (pl ? '<a class="btn primary" href="' + esc(pl.url) + '" target="_blank" rel="noopener">' + ic('ext', 16) + ' เปิดระบบ</a>' : '') + (pl && sy.embed ? '<button class="btn" data-act="sys-preview" data-id="' + sy.id + '">' + ic('eye', 16) + ' ดูตัวอย่างในหน้านี้</button>' : '') + '</div></article>';
  }
  function sysPreview(id) {
    var sy = find(C().systems, 'id', id), pl = sy && primaryLink(sy); if (!pl) return;
    openModal('ตัวอย่าง: ' + esc(sy.name), '<div class="frame-live"><iframe src="' + esc(pl.url) + '" title="' + esc(sy.name) + '" loading="lazy" referrerpolicy="no-referrer"></iframe></div><p class="small muted">ถ้าหน้าต่างว่างเปล่า แปลว่าเว็บนั้นไม่อนุญาตให้ฝังในเว็บอื่น ให้กด "เปิดระบบในแท็บใหม่"</p>',
      '<a class="btn primary" href="' + esc(pl.url) + '" target="_blank" rel="noopener">' + ic('ext', 16) + ' เปิดระบบในแท็บใหม่</a><button class="btn" data-act="close-modal">ปิด</button>', true);
  }

  /* ---------- รางวัล เกียรติบัตร การอบรม ---------- */
  function certThumb(a) {
    if (a.imgUrl) return '<div class="ph cert-img" style="--h:' + hueOf(a.id) + ';aspect-ratio:4/3"><img src="' + esc(a.imgUrl) + '" alt="' + esc(a.title) + '" loading="lazy"></div>';
    return '<div class="cert' + (a.type === 'award' ? ' award' : '') + '"><span class="cert-in"><span class="cert-k">' + (a.type === 'training' ? 'วุฒิบัตร' : (a.type === 'award' ? 'รางวัล' : 'เกียรติบัตร')) + '</span><span class="cert-l"></span><span class="cert-s">' + esc(a.level) + ' · ' + fd(a.date) + '</span>' + (a.locked ? '<span class="cert-s">' + ic('lock', 12) + ' เฉพาะกรรมการ</span>' : '') + '</span></div>';
  }
  function awardCard(a) {
    return '<button class="wcard" data-act="open-award" data-id="' + a.id + '">' + certThumb(a) + '<div class="m"><span class="chip ' + (a.type === 'award' ? 'gold' : 'ind') + '">' + ATYPE[a.type] + '</span><span class="chip">' + esc(a.level) + '</span>' + (a.hours ? '<span class="chip">' + a.hours + ' ชม.</span>' : '') + (S.admin && a.vis !== 'public' ? visChip(a.vis) : '') + '</div><div class="t">' + esc(a.title) + '</div><div class="small muted">' + fd(a.date) + (a.org ? ' · ' + blank(a.org) : '') + '</div></button>';
  }
  function fyHours(fy) {
    return C().awards.reduce(function (t, x) { return t + ((x.type === 'training' || x.hours) && inFy(x.date, fy) ? (+x.hours || 0) : 0); }, 0) +
      C().works.reduce(function (t, w) { return t + (w.cat === 'train' && inFy(w.date, fy) ? (+w.hours || 0) : 0); }, 0);
  }
  function openAward(id) {
    var a = find(C().awards, 'id', id); if (!a) return;
    var can = canOpen(a);
    openModal(ATYPE[a.type], (a.imgUrl ? '<a href="' + esc(a.imgUrl) + '" target="_blank" rel="noopener" class="cert-big">' + certThumb(a) + '</a>' : certThumb(a)) + '<h2>' + esc(a.title) + '</h2><div class="row small muted" style="gap:8px">' + ic('cal', 15) + ' ' + fd(a.date) + ' · ระดับ' + esc(a.level) + (a.hours ? ' · ' + a.hours + ' ชั่วโมง' : '') + ' ' + (S.admin ? visChip(a.vis) : '') + '</div>' + (a.org ? '<p>' + blank(a.org) + '</p>' : '') +
      (a.ind.length ? '<div class="row" style="gap:6px"><b class="small">ตัวชี้วัด PA</b>' + indChips(a.ind) + '</div>' : '') + (!can && a.vis === 'committee' ? lockNote('ภาพเกียรติบัตร') : ''),
      (can && a.fileUrl ? '<a class="btn" href="' + esc(a.fileUrl) + '" target="_blank" rel="noopener">' + ic('download', 16) + ' เปิดไฟล์ PDF</a>' : '') + '<button class="btn primary" data-act="close-modal">ปิด</button>', true);
  }

  /* ---------- คลังผลงาน ---------- */
  function isImg(m) { return /^image\//.test(m || ''); }
  function workCard(w) {
    var c = CATS[w.cat] || CATS.media, img = canOpen(w) && isImg(w.fileMime) ? w.fileUrl : '';
    return '<button class="wcard" data-act="open-work" data-id="' + w.id + '">' + ph(hueOf(w.id), c.icon, c.label, '', img) +
      '<div class="t">' + esc(w.title) + '</div><div class="m"><span class="small muted">' + fd(w.date) + '</span>' + indChips(w.ind) + (S.admin && w.vis !== 'public' ? visChip(w.vis) : '') + '</div>' +
      (w.locked ? '<span class="lockline">' + ic('lock', 13) + ' เปิดไฟล์ได้เฉพาะกรรมการ</span>' : '') + '</button>';
  }
  function openWork(id) {
    var w = find(C().works, 'id', id); if (!w) return;
    var c = CATS[w.cat] || CATS.media, can = canOpen(w);
    var inds = w.ind.map(function (code) { return '<div class="row small" style="gap:8px;flex-wrap:nowrap"><span class="chip ind">' + code + '</span><span>' + esc(indName(code)) + '</span></div>'; }).join('');
    var media = can && isImg(w.fileMime) && w.fileUrl ? '<a href="' + esc(w.fileUrl) + '" target="_blank" rel="noopener">' + ph(hueOf(w.id), c.icon, '', 'work-big', w.fileUrl) + '</a>' : ph(hueOf(w.id), c.icon, '');
    var size = w.fileSize ? ' · ' + (w.fileSize > 1048576 ? fix(w.fileSize / 1048576, 1) + ' MB' : Math.max(1, Math.round(w.fileSize / 1024)) + ' KB') : '';
    openModal(esc(c.label), media + '<h2>' + esc(w.title) + '</h2><div class="row small muted">' + ic('cal', 15) + ' ' + fd(w.date) + (w.hours ? ' · ' + w.hours + ' ชั่วโมง' : '') + ' ' + (S.admin ? visChip(w.vis) : '') + '</div>' + (w.desc ? '<p style="white-space:pre-line">' + esc(w.desc) + '</p>' : '') +
      (inds ? '<div style="display:flex;flex-direction:column;gap:6px"><b class="small">ตัวชี้วัด PA ที่เกี่ยวข้อง</b>' + inds + '</div>' : '') + (w.locked ? lockNote('ไฟล์') : ''),
      (can && w.fileUrl ? '<a class="btn primary" href="' + esc(w.fileUrl) + '" target="_blank" rel="noopener">' + ic('download', 16) + ' เปิดไฟล์ ' + esc(w.fileName || '') + size + '</a>' : '') +
      (can && w.link ? '<a class="btn" href="' + esc(w.link) + '" target="_blank" rel="noopener">' + ic('link', 16) + ' เปิดลิงก์</a>' : '') + '<button class="btn" data-act="close-modal">ปิด</button>', true);
  }
  function pWorks() {
    var list = C().works.filter(shown), years = {};
    list.forEach(function (w) { years[beYear(w.date)] = 1; });
    var yopts = Object.keys(years).sort().reverse().map(function (y) { return '<option value="' + y + '">' + y + '</option>'; }).join('');
    var copts = Object.keys(CATS).map(function (k) { return '<option value="' + k + '">' + CATS[k].label + '</option>'; }).join('');
    var iopts = IND_BASE.map(function (x) { return '<option value="' + x.code + '">' + x.code + ' ' + esc(x.name.slice(0, 32)) + '</option>'; }).join('');
    var counts = Object.keys(CATS).map(function (k) {
      var n = list.filter(function (w) { return w.cat === k; }).length;
      return n ? '<button class="chip" style="cursor:pointer;border:0;font:inherit;font-size:12.5px" data-act="quick-cat" data-k="' + k + '">' + ic(CATS[k].icon, 13) + ' ' + CATS[k].label + ' <b class="num">' + n + '</b></button>' : '';
    }).join('');
    return pub('works',
      '<div class="sec-h"><div><span class="eyebrow">คลังผลงาน</span><h1>ผลงานและหลักฐานการปฏิบัติงาน</h1></div></div>' +
      (counts ? '<div class="row" style="margin-top:12px;gap:6px">' + counts + '</div>' : '') +
      '<div class="card" style="margin-top:16px"><div class="filters">' +
        '<div class="field"><label for="f-q">ค้นหา</label><input id="f-q" class="inp" placeholder="ชื่อผลงาน คำอธิบาย" value="' + esc(S.wq || '') + '"></div>' +
        '<div class="field"><label for="f-cat">ประเภท</label><select id="f-cat" class="inp"><option value="">ทุกประเภท</option>' + copts + '</select></div>' +
        '<div class="field"><label for="f-year">ปี พ.ศ.</label><select id="f-year" class="inp"><option value="">ทุกปี</option>' + yopts + '</select></div>' +
        '<div class="field"><label for="f-ind">ตัวชี้วัด PA</label><select id="f-ind" class="inp"><option value="">ทุกตัวชี้วัด</option>' + iopts + '</select></div>' +
      '</div></div><div id="works-grid" style="margin-top:16px"></div>');
  }
  function renderWorksGrid() {
    var g = $('works-grid'); if (!g) return;
    var q = (($('f-q') || {}).value || '').toLowerCase(), c = ($('f-cat') || {}).value || '', y = ($('f-year') || {}).value || '', ind = ($('f-ind') || {}).value || '';
    S.wf = { c: c, y: y, ind: ind }; S.wq = ($('f-q') || {}).value || '';
    var list = C().works.filter(function (w) {
      if (!shown(w)) return false;
      if (c && w.cat !== c) return false;
      if (y && String(beYear(w.date)) !== y) return false;
      if (ind && w.ind.indexOf(ind) < 0) return false;
      if (q && (w.title + ' ' + w.desc).toLowerCase().indexOf(q) < 0) return false;
      return true;
    }).sort(byDate);
    var items = pageOf(list, 'works', perP());
    g.innerHTML = '<p class="small muted" style="margin-bottom:10px">พบ ' + list.length + ' รายการ</p>' + (list.length ? '<div class="grid4">' + items.map(workCard).join('') + '</div>' + pagerNav('works') : '<div class="card empty">' + (C().works.length ? 'ไม่พบผลงานตามเงื่อนไข ลองล้างตัวกรอง' : 'ยังไม่มีผลงาน') + '</div>');
  }
  function restoreWorkFilters() { var f = S.wf || {}; if ($('f-cat')) $('f-cat').value = f.c || ''; if ($('f-year')) $('f-year').value = f.y || ''; if ($('f-ind')) $('f-ind').value = f.ind || ''; }

  /* ---------- ภาพกิจกรรม ---------- */
  function photosOf(aid) { return C().photos.filter(function (p) { return p.albumId === aid; }); }
  function albumCount(a) { return S.admin || a.count === undefined ? photosOf(a.id).length : a.count; }
  function albumCard(a) {
    var ps = photosOf(a.id), cov = find(ps, 'id', a.coverId) || ps[0], n = albumCount(a);
    var sl = cov ? [cov].concat(ps.filter(function (p) { return p !== cov; })).slice(0, 5) : [];
    var media = sl.length > 1 ? '<div class="alb-media"><div class="rot rot-thumb">' + sl.map(function (p, i) { return '<div class="rot-i' + (i === 0 ? ' on' : '') + '">' + ph(hueOf(a.id), 'image', '', '', p.url) + '</div>'; }).join('') + '</div><span class="alb-n">' + ic('image', 13) + ' ' + n + ' ภาพ</span></div>'
      : ph(hueOf(a.id), a.locked ? 'lock' : 'image', a.locked ? 'เฉพาะกรรมการ · ' + n + ' ภาพ' : n + ' ภาพ', '', cov && cov.url);
    return '<a class="album" href="#album-' + a.id + '">' + media + '<span class="t">' + esc(a.title) + '</span><span class="small muted">' + fd(a.date) + (a.desc ? ' · ' + esc(a.desc) : '') + '</span>' + (S.admin && a.vis !== 'public' ? '<span>' + visChip(a.vis) + '</span>' : '') + '</a>';
  }
  function pGallery() {
    var list = C().albums.filter(shown).sort(byDate);
    return pub('gallery', '<div class="sec-h"><div><span class="eyebrow">คลังภาพ</span><h1>ภาพกิจกรรมและการปฏิบัติงาน</h1></div><span class="small muted">' + list.length + ' อัลบั้ม · ' + list.reduce(function (t, a) { return t + albumCount(a); }, 0) + ' ภาพ</span></div>' +
      (list.length ? '<div class="grid3" style="margin-top:18px">' + pageOf(list, 'gallery', perP()).map(albumCard).join('') + '</div>' + pagerNav('gallery') : '<div class="card empty" style="margin-top:18px">ยังไม่มีอัลบั้มภาพ</div>'));
  }
  function pAlbum(id) {
    var a = find(C().albums, 'id', id);
    if (!a || !shown(a)) return pGallery();
    var all = photosOf(id), per = 12;
    if (a.locked && !S.admin) return pub('album-' + id, '<a href="#gallery" class="small">' + ic('left', 14) + ' ทุกอัลบั้ม</a><div class="sec-h" style="margin-top:8px"><div><span class="eyebrow">' + fd(a.date) + '</span><h1>' + esc(a.title) + '</h1><p class="muted">' + esc(a.desc) + '</p></div></div>' + lockNote('อัลบั้ม'));
    var ps = pageOf(all, 'album-' + id, per), base = (S.pageInfo['album-' + id].p - 1) * S.pageInfo['album-' + id].per;
    var grid = ps.map(function (p, j) { return '<button data-act="open-photo" data-a="' + id + '" data-i="' + (base + j) + '" aria-label="' + esc(p.caption || ('ภาพที่ ' + (base + j + 1))) + '">' + ph(hueOf(p.id), 'image', '', 'sq', p.url) + '</button>'; }).join('');
    return pub('album-' + id, '<a href="#gallery" class="small">' + ic('left', 14) + ' ทุกอัลบั้ม</a><div class="sec-h" style="margin-top:8px"><div><span class="eyebrow">' + fd(a.date) + '</span><h1>' + esc(a.title) + '</h1><p class="muted">' + (a.desc ? esc(a.desc) + ' · ' : '') + all.length + ' ภาพ</p></div>' + (S.admin ? '<a class="btn" href="#admin-gallery">' + ic('edit', 16) + ' จัดการอัลบั้ม</a>' : '') + '</div>' +
      albumHero(a, all) + (all.length ? '<div class="photos" style="margin-top:18px">' + grid + '</div>' + pagerNav('album-' + id) : '<div class="card empty" style="margin-top:16px">อัลบั้มนี้ยังไม่มีภาพ</div>'));
  }
  function albumHero(a, all) {
    var cov = find(all, 'id', a.coverId), list = (cov ? [cov].concat(all.filter(function (p) { return p !== cov; })) : all).slice(0, 12);
    if (list.length < 2) return '';
    return '<div class="alb-hero" data-rot-host="1" aria-label="สไลด์โชว์อัลบั้ม"><div class="rot rot-kb" data-cap="alb-cap-t">' + list.map(function (p, i) { return '<div class="rot-i' + (i === 0 ? ' on' : '') + '" data-cap="' + esc(p.caption) + '">' + ph(hueOf(p.id), 'image', '', '', p.url) + '</div>'; }).join('') + '</div>' +
      '<button class="alb-nav prev" data-act="rot-step" data-d="-1" aria-label="ภาพก่อนหน้า">' + ic('left', 18) + '</button><button class="alb-nav next" data-act="rot-step" data-d="1" aria-label="ภาพถัดไป">' + ic('chev', 18) + '</button>' +
      '<div class="alb-hero-cap"><span id="alb-cap-t" class="cap-t">' + esc(list[0].caption) + '</span>' + rotDots(list.length, 'ภาพที่') + '</div></div>';
  }
  function renderLightbox() {
    var root = $('modal-root');
    if (!S.lb) { root.innerHTML = ''; return; }
    var arr = S.lb.list, p = arr[S.lb.i];
    root.innerHTML = '<div class="lb" data-act="lb-close" role="dialog" aria-label="ดูภาพขนาดใหญ่"><button class="btn icon lb-x" data-act="lb-close" aria-label="ปิด">' + ic('x', 20) + '</button><button class="btn icon" data-act="lb-prev" aria-label="ก่อนหน้า">' + ic('left', 22) + '</button>' + ph(hueOf(p.id), 'image', '', '', p.url) + '<button class="btn icon" data-act="lb-next" aria-label="ถัดไป">' + ic('chev', 22) + '</button><div class="lb-cap">' + esc(p.caption || '') + ' · ' + (S.lb.i + 1) + '/' + arr.length + '<span class="lb-zoomhint"> · ชี้เมาส์ที่รูปเพื่อซูมดูรายละเอียด</span></div></div>';
  }

  /* ---------- หน้าวิดีโอ รางวัล ระบบ ---------- */
  function pVideos() {
    var groups = [['pa', 'คลิปประกอบการประเมิน PA ปีงบ ' + S.fy], ['intro', VTYPE.intro], ['activity', VTYPE.activity]].map(function (g) {
      var list = VIDS().filter(function (v) { return v.type === g[0]; }).sort(byDate);
      if (!list.length) return '';
      return '<section class="sec"><div class="sec-h"><h2>' + g[1] + '</h2><span class="small muted">' + list.length + ' คลิป</span></div><div class="grid3">' + pageOf(list, 'v-' + g[0], perP()).map(videoCard).join('') + '</div>' + pagerNav('v-' + g[0]) + '</section>';
    }).join('') || '<div class="card empty" style="margin-top:20px">ยังไม่มีวิดีโอในปีงบประมาณ ' + S.fy + '</div>';
    var locked = VIDS().some(function (v) { return v.vis === 'committee'; });
    return pub('videos', '<span class="eyebrow">วิดีโอ</span><h1>วิดีโอการจัดการเรียนรู้และผลงาน</h1><p class="muted" style="max-width:720px">คลิปการจัดการเรียนรู้ คลิปแนะนำตัว และคลิปกิจกรรม เก็บบน YouTube หรือ Google Drive แล้วฝังมาแสดงในหน้านี้ · แสดงเฉพาะปีงบประมาณ ' + S.fy + ' และคลิปที่ใช้ได้ทุกปี</p>' +
      (locked && !S.admin ? '<div class="note" style="margin-top:14px">' + ic('lock', 15) + ' คลิปที่มีป้าย "เฉพาะกรรมการ" เปิดได้เฉพาะคณะกรรมการประเมิน</div>' : '') + groups);
  }
  function pAwards() {
    var f = S.awFilter, vis = C().awards.filter(shown);
    var list = vis.filter(function (a) { return f === 'all' || a.type === f; }).sort(byDate);
    function n(t) { return vis.filter(function (a) { return a.type === t; }).length; }
    var hrs = fyHours(S.fy), goal = +st().hoursGoal || 20;
    var seg = '<div class="seg" role="group" aria-label="กรองประเภท">' + [['all', 'ทั้งหมด ' + vis.length], ['award', 'รางวัล ' + n('award')], ['cert', 'เกียรติบัตร ' + n('cert')], ['training', 'การอบรม ' + n('training')]].map(function (t) { return '<button type="button" data-act="aw-filter" data-k="' + t[0] + '" class="' + (f === t[0] ? 'on' : '') + '">' + t[1] + '</button>'; }).join('') + '</div>';
    return pub('awards', '<span class="eyebrow">รางวัล เกียรติบัตร และการอบรม</span><h1>รางวัลและการพัฒนาตนเอง</h1>' +
      '<section class="sec" style="margin-top:18px"><div class="grid4">' +
        '<div class="card stat"><span class="v">' + n('award') + '</span><span class="l">รางวัล</span></div>' +
        '<div class="card stat"><span class="v">' + n('cert') + '</span><span class="l">เกียรติบัตร</span></div>' +
        '<div class="card stat"><span class="v">' + n('training') + '</span><span class="l">หลักสูตรที่อบรม</span></div>' +
        '<div class="card stat"><span class="v">' + hrs + '<span class="small muted" style="font-weight:500"> / ' + goal + ' ชม.</span></span><span class="l">ชั่วโมงพัฒนาตนเอง ปีงบประมาณ ' + S.fy + '</span><div class="hours-bar"><i style="width:' + Math.min(100, goal ? hrs / goal * 100 : 0) + '%"></i></div></div>' +
      '</div></section>' +
      '<section class="sec"><div class="sec-h">' + seg + '<span class="small muted">กดที่การ์ดเพื่อดูภาพขนาดใหญ่</span></div>' + (list.length ? '<div class="grid3">' + pageOf(list, 'awards', perP()).map(awardCard).join('') + '</div>' + pagerNav('awards') : '<div class="card empty">ยังไม่มีรายการ</div>') + '</section>');
  }
  function pSystems() {
    var f = S.sysFilter, vis = C().systems.filter(shown);
    var list = vis.filter(function (x) { return f === 'all' || x.cat === f; });
    var live = vis.filter(function (x) { return x.status === 'live'; }).length;
    var seg = '<div class="seg" role="group" aria-label="กรองหมวด">' + [['all', 'ทั้งหมด']].concat(Object.keys(SCAT).map(function (k) { return [k, SCAT[k]]; })).map(function (t) { return '<button type="button" data-act="sys-filter" data-k="' + t[0] + '" class="' + (f === t[0] ? 'on' : '') + '">' + t[1] + '</button>'; }).join('') + '</div>';
    return pub('systems', '<span class="eyebrow">นวัตกรรม เทคโนโลยี และระบบงาน</span><h1>ระบบที่จัดทำ</h1><p class="muted" style="max-width:740px">' + vis.length + ' ระบบ ใช้งานจริง ' + live + ' ระบบ · เปิดระบบได้จากลิงก์ของแต่ละรายการ</p>' +
      '<section class="sec"><div class="sec-h">' + seg + '</div>' + (list.length ? '<div class="grid3">' + pageOf(list, 'systems', perP()).map(sysCard).join('') + '</div>' + pagerNav('systems') : '<div class="card empty">ยังไม่มีระบบในหมวดนี้</div>') + '</section>');
  }

  /* ---------- ส่วนของหน้าแรก ---------- */
  function homeStats() {
    var c = C(), fy = S.fy;
    var works = c.works.filter(function (w) { return shown(w) && inFy(w.date, fy); }).length;
    var certs = c.awards.filter(function (a) { return shown(a) && a.type !== 'training' && inFy(a.date, fy); }).length;
    var photos = c.albums.filter(shown).reduce(function (t, a) { return t + albumCount(a); }, 0);
    return '<section class="grid4">' +
      '<a class="card stat" href="#works"><span class="v">' + works + '</span><span class="l">ผลงานและหลักฐาน ปีงบ ' + fy + '</span></a>' +
      '<a class="card stat" href="#awards"><span class="v">' + certs + '</span><span class="l">เกียรติบัตรและรางวัล ปีงบ ' + fy + '</span></a>' +
      '<a class="card stat" href="#awards"><span class="v">' + fyHours(fy) + '</span><span class="l">ชั่วโมงพัฒนาตนเอง ปีงบ ' + fy + '</span></a>' +
      '<a class="card stat" href="#videos"><span class="v">' + VIDS().length + '</span><span class="l">วิดีโอ · ภาพกิจกรรม ' + photos + ' ภาพ</span></a></section>';
  }
  function homeSections() {
    var c = C(), out = '';
    var vids = VIDS().sort(byDate), mainV = vids.filter(function (v) { return v.featured && canOpen(v); })[0] || vids.filter(function (v) { return v.featured; })[0] || vids[0];
    if (mainV) {
      var side = vids.filter(function (v) { return v !== mainV && v.featured; }).concat(vids.filter(function (v) { return v !== mainV && !v.featured; })).slice(0, 3).map(function (v) { return videoRow(v); }).join('');
      out += '<section class="sec"><div class="sec-h"><div><span class="eyebrow">การจัดการเรียนรู้และผลงาน</span><h2>วิดีโอ</h2></div><a href="#videos">ดูวิดีโอทั้งหมด ' + ic('chev', 14) + '</a></div>' +
        '<div class="video-feature"><button class="vmain" data-act="open-video" data-id="' + mainV.id + '">' + vThumb(mainV, 'big') + '<span class="t">' + esc(mainV.title) + '</span><span class="row small muted" style="gap:8px">' + VTYPE[mainV.type] + (mainV.dur ? ' · ' + esc(mainV.dur) : '') + ' · ' + fd(mainV.date) + ' ' + indChips(mainV.ind) + '</span></button><div class="vside">' + (side || '<p class="small muted">ยังไม่มีคลิปอื่น</p>') + '</div></div></section>';
    }
    var sys = c.systems.filter(shown), feat = sys.filter(function (x) { return x.featured; }).concat(sys.filter(function (x) { return !x.featured; }));
    if (sys.length) out += '<section class="sec"><div class="sec-h"><div><span class="eyebrow">นวัตกรรมที่ใช้ในโรงเรียน</span><h2>ระบบที่จัดทำ</h2></div><a href="#systems">ดูทั้งหมด ' + sys.length + ' ระบบ ' + ic('chev', 14) + '</a></div><div class="grid3">' + feat.slice(0, 3).map(sysCard).join('') + '</div></section>';
    var works = c.works.filter(shown).sort(function (a, b) { return (b.featured - a.featured) || byDate(a, b); }).slice(0, 4);
    if (works.length) out += '<section class="sec"><div class="sec-h"><h2>ผลงานล่าสุด</h2><a href="#works">ดูทั้งหมด ' + ic('chev', 14) + '</a></div><div class="grid4">' + works.map(workCard).join('') + '</div></section>';
    var albums = c.albums.filter(shown).sort(function (a, b) { return (b.featured - a.featured) || byDate(a, b); }).slice(0, 3);
    if (albums.length) out += '<section class="sec"><div class="sec-h"><h2>ภาพกิจกรรม</h2><a href="#gallery">ดูทุกอัลบั้ม ' + ic('chev', 14) + '</a></div><div class="grid3">' + albums.map(albumCard).join('') + '</div></section>';
    var aw = c.awards.filter(shown).sort(byDate).slice(0, 3);
    if (aw.length) out += '<section class="sec"><div class="sec-h"><h2>รางวัลและการพัฒนาตนเอง</h2><a href="#awards">ดูทั้งหมด ' + ic('chev', 14) + '</a></div><div class="grid3">' + aw.map(awardCard).join('') + '</div></section>';
    return out;
  }

  /* =====================================================================
     เฟส 2: หลังบ้าน — ผลงาน อัลบั้มภาพ วิดีโอ รางวัล ระบบที่จัดทำ สไลด์ภาพปก
     ===================================================================== */
  var DOC_MIMES = ['application/pdf', 'image/jpeg', 'image/png', 'image/webp',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    'application/vnd.openxmlformats-officedocument.presentationml.presentation'];
  var FILE_RULE = {
    'works.file': { max: 20, mimes: DOC_MIMES, label: 'PDF รูปภาพ Word Excel หรือ PowerPoint ไม่เกิน 20 MB', img: [2000, 2000] },
    'videos.thumb': { max: 3, mimes: ['image/jpeg', 'image/png', 'image/webp'], label: 'รูป JPG/PNG สัดส่วน 16:9', img: [1280, 720] },
    'awards.img': { max: 5, mimes: ['image/jpeg', 'image/png', 'image/webp'], label: 'รูปเกียรติบัตร JPG/PNG', img: [2000, 2000] },
    'awards.file': { max: 15, mimes: ['application/pdf'], label: 'ไฟล์ PDF ไม่เกิน 15 MB' },
    'systems.img': { max: 5, mimes: ['image/jpeg', 'image/png', 'image/webp'], label: 'ภาพหน้าจอ แนะนำ 1280 × 720', img: [1600, 1000] }
  };
  function today() { var d = new Date(); return d.getFullYear() + '-' + p2(d.getMonth() + 1) + '-' + p2(d.getDate()); }
  function busy(btn, on) { if (!btn) return; btn.disabled = on; if (on) { btn.setAttribute('data-t', btn.innerHTML); btn.innerHTML = 'กำลังบันทึก…'; } else if (btn.getAttribute('data-t')) { btn.innerHTML = btn.getAttribute('data-t'); } }
  function formErr(msg) { var e = $('f-err'); if (e) e.innerHTML = msg ? '<div class="err">' + esc(msg) + '</div>' : ''; else if (msg) toast(msg); }
  function indChecks(sel) {
    return '<div class="checks">' + IND_BASE.map(function (x) { return '<label><input type="checkbox" class="f-ind" value="' + x.code + '"' + ((sel || []).indexOf(x.code) > -1 ? ' checked' : '') + '><span><b>' + x.code + '</b> ' + esc(x.name) + '</span></label>'; }).join('') + '</div>';
  }
  function readInds() { var out = [], cbs = document.querySelectorAll('.f-ind'); for (var i = 0; i < cbs.length; i++) if (cbs[i].checked) out.push(cbs[i].value); return out; }
  function opts(map, cur) { return Object.keys(map).map(function (k) { return '<option value="' + k + '"' + (cur === k ? ' selected' : '') + '>' + esc(map[k].t || map[k].label || map[k]) + '</option>'; }).join(''); }
  function visSel(cur, id) { return '<div class="field"><label for="' + (id || 'f-vis') + '">สิทธิ์การมองเห็น</label><select id="' + (id || 'f-vis') + '" class="inp">' + opts(VIS, cur) + '</select><span class="hint">เฉพาะกรรมการ = หน้าสาธารณะเห็นชื่อรายการแต่เปิดไฟล์ไม่ได้ · ส่วนตัว = ไม่แสดงเลย</span></div>'; }
  /** ช่องเลือกไฟล์ในฟอร์ม: เก็บไฟล์ไว้ใน S.form.files จนกว่าจะกดบันทึก */
  function fileField(key, label, cur, curName) {
    var r = FILE_RULE[key], f = S.form.files[key.split('.')[1]], cleared = S.form.clear.indexOf(key.split('.')[1]) > -1;
    var now = f ? ic('check', 15) + ' ' + esc(f.name) + ' (' + fix(f.size / 1048576, 1) + ' MB)' : (cur && !cleared ? ic('file', 15) + ' มีไฟล์แล้ว' + (curName ? ': ' + esc(curName) : '') + ' · คลิกเพื่อเปลี่ยน' : 'คลิกเพื่อเลือกไฟล์');
    return '<div class="field"><label>' + label + '</label><label class="drop" for="ff-' + key.replace('.', '-') + '">' + ic('upload', 22) + '<span>' + now + '</span><span class="small">' + r.label + '</span></label><input id="ff-' + key.replace('.', '-') + '" type="file" data-ff="' + key + '" accept="' + r.mimes.join(',') + '" style="display:none">' +
      (cur && !cleared && !f ? '<button class="btn sm danger" type="button" data-act="ff-clear" data-k="' + key + '" style="align-self:flex-start">' + ic('trash', 14) + ' ลบไฟล์นี้</button>' : '') + '</div>';
  }
  function prepFile(key, file, cb) {
    var r = FILE_RULE[key];
    if (r.mimes.indexOf(file.type) < 0) return cb('ไฟล์ชนิดนี้ใช้ไม่ได้ (' + (file.type || 'ไม่ทราบชนิด') + ') · ' + r.label);
    if (r.img && /^image\//.test(file.type)) return prepImage(file, r.img[0], r.img[1], true, function (err, img) { if (err) return cb(err); if (img.size > r.max * 1048576) return cb('ไฟล์ใหญ่เกิน ' + r.max + ' MB หลังย่อขนาด'); cb(null, { mime: img.mime, b64: img.b64, name: file.name }); });
    if (file.size > r.max * 1048576) return cb('ไฟล์ใหญ่เกิน ' + r.max + ' MB');
    readAsDataUrl(file, function (err, url) { if (err) return cb(err); cb(null, { mime: file.type, b64: b64Of(url), name: file.name }); });
  }
  /** บันทึกรายการพร้อมไฟล์ (ถ้ามี) ในคำขอเดียว */
  function saveContent(kind, item, btn, msg) {
    var F = S.form, fields = Object.keys(F.files).filter(function (k) { return F.files[k]; });
    function send(upload, extraUploads) {
      busy(btn, true);
      api('saveItem', { kind: kind, item: item, upload: upload, clear: F.clear }, { loader: upload ? 'กำลังอัปโหลดไฟล์และบันทึก' : 'กำลังบันทึก', timeout: 180000 }, function (err, res) {
        busy(btn, false);
        if (err) { formErr(err); return; }
        D.content[kind] = res[kind];
        if (extraUploads.length) { item.id = res.id; F.clear = []; return next(extraUploads); }
        S.form = null; closeModal(); render(); toast(msg || 'บันทึกแล้ว');
      });
    }
    function next(list) {
      var field = list.shift();
      if (!field) { send(null, []); return; }
      prepFile(kind + '.' + field, F.files[field], function (err, up) {
        if (err) { formErr(err); return; }
        F.files[field] = null; up.field = field; send(up, list);
      });
    }
    if (fields.length) next(fields); else send(null, []);
  }
  function delContent(kind, id, label) {
    var it = find(D.content[kind], 'id', id); if (!it) return;
    confirmBox('ลบ' + label + ' <b>' + esc(it.title || it.name) + '</b>?' + (kind === 'albums' ? ' ภาพทั้งหมดในอัลบั้มจะถูกย้ายไปถังขยะของ Drive' : ' ไฟล์ที่แนบจะถูกย้ายไปถังขยะของ Drive (กู้คืนได้ 30 วัน)'), 'ลบ', function () {
      api('deleteItem', { kind: kind, id: id }, { loader: 'กำลังลบ' }, function (err, res) {
        if (err) { toast(err); return; }
        D.content[kind] = res[kind]; if (res.photos) D.content.photos = res.photos;
        render(); toast('ลบแล้ว');
      });
    }, true);
  }
  function rowBtns(kind, id, extra) {
    return '<td class="r" style="white-space:nowrap">' + (extra || '') + '<button class="btn icon sm" data-act="c-edit" data-k="' + kind + '" data-id="' + id + '" aria-label="แก้ไข">' + ic('edit', 16) + '</button> <button class="btn icon sm danger" data-act="c-del" data-k="' + kind + '" data-id="' + id + '" aria-label="ลบ">' + ic('trash', 16) + '</button></td>';
  }
  function aSearch(key, ph2) { return '<div class="row" style="margin-bottom:12px"><input class="inp" data-aq="' + key + '" style="max-width:320px" placeholder="' + ph2 + '" value="' + esc((S.aq || {})[key] || '') + '" aria-label="ค้นหา"></div>'; }
  function aFilter(key, list, fn) { var q = ((S.aq || {})[key] || '').toLowerCase(); return q ? list.filter(function (x) { return fn(x).toLowerCase().indexOf(q) > -1; }) : list; }
  function emptyRow(n, msg) { return '<tr><td colspan="' + n + '" class="muted" style="padding:22px">' + msg + '</td></tr>'; }

  /* ---------- ผลงาน ---------- */
  function aWorks() {
    var list = aFilter('works', C().works.slice().sort(byDate), function (w) { return w.title + ' ' + w.desc + ' ' + w.fileName; });
    var rows = pageOf(list, 'a-works', perA()).map(function (w) {
      return '<tr><td style="min-width:260px"><b>' + esc(w.title) + '</b>' + (w.featured ? ' <span class="chip ind">หน้าแรก</span>' : '') + '<div class="small muted">' + (w.fileUrl ? '<a href="' + esc(w.fileUrl) + '" target="_blank" rel="noopener">' + ic('file', 13) + ' ' + esc(w.fileName || 'ไฟล์') + '</a>' : (w.link ? ic('link', 13) + ' ลิงก์' : 'ยังไม่มีไฟล์')) + '</div></td><td>' + (CATS[w.cat] || CATS.media).label + '</td><td class="num" style="white-space:nowrap">' + fd(w.date) + '</td><td>' + indChips(w.ind) + '</td><td>' + visChip(w.vis) + '</td>' + rowBtns('works', w.id) + '</tr>';
    }).join('');
    return adminShell('admin-works', 'คลังผลงาน', 'ผลงานและหลักฐาน อัปโหลดไฟล์ไป Google Drive แล้วผูกกับตัวชี้วัด PA', '<a class="btn" href="#works">' + ic('eye', 16) + ' ดูหน้าสาธารณะ</a><button class="btn primary" data-act="c-new" data-k="works">' + ic('plus', 16) + ' เพิ่มผลงาน</button>',
      aSearch('works', 'ค้นหาชื่อผลงาน') + '<div class="tbl-wrap"><table class="tbl"><thead><tr><th>ผลงาน</th><th>ประเภท</th><th>วันที่</th><th>ตัวชี้วัด</th><th>สิทธิ์</th><th class="r">จัดการ</th></tr></thead><tbody>' + (rows || emptyRow(6, C().works.length ? 'ไม่พบรายการ' : 'ยังไม่มีผลงาน กด “เพิ่มผลงาน”')) + '</tbody></table></div>' + pagerNav('a-works'));
  }
  function workForm(w) {
    var isNew = !w;
    w = w || { id: '', title: '', cat: 'media', date: today(), ind: [], vis: st().defaultVis || 'public', desc: '', hours: '', link: '', featured: false, fileUrl: '' };
    S.form = { kind: 'works', id: w.id, files: {}, clear: [] };
    openModal(isNew ? 'เพิ่มผลงาน' : 'แก้ไขผลงาน',
      '<div class="field"><label for="f-title">ชื่อผลงาน</label><input id="f-title" class="inp" value="' + esc(w.title) + '"></div>' +
      '<div class="grid2"><div class="field"><label for="f-cat2">ประเภท</label><select id="f-cat2" class="inp">' + opts(CATS, w.cat) + '</select></div><div class="field"><label for="f-date">วันที่</label><input id="f-date" type="date" class="inp" value="' + esc(w.date) + '"></div></div>' +
      '<div class="grid2">' + visSel(w.vis) + '<div class="field"><label for="f-hours">ชั่วโมง (ถ้าเป็นการอบรม/PLC)</label><input id="f-hours" type="number" min="0" class="inp" value="' + (w.hours || '') + '"></div></div>' +
      '<div id="ff-box">' + fileField('works.file', 'ไฟล์หลักฐาน', w.fileUrl, w.fileName) + '</div>' +
      '<div class="field"><label for="f-link">หรือลิงก์ (เช่น เว็บแอป Google Drive Canva)</label><input id="f-link" class="inp mono" placeholder="https://…" value="' + esc(w.link) + '"></div>' +
      '<div class="field"><label>ผูกกับตัวชี้วัด PA</label>' + indChecks(w.ind) + '</div>' +
      '<div class="field"><label for="f-desc">รายละเอียด</label><textarea id="f-desc" class="inp">' + esc(w.desc) + '</textarea></div>' +
      '<label class="row small" style="gap:8px"><input type="checkbox" id="f-feat"' + (w.featured ? ' checked' : '') + ' style="width:18px;height:18px;accent-color:var(--accent)"> ปักหมุดในส่วนผลงานล่าสุดของหน้าแรก</label><div id="f-err"></div>',
      '<button class="btn" data-act="close-modal">ยกเลิก</button><button class="btn primary" data-act="c-save" id="f-btn">' + ic('check', 16) + ' บันทึก</button>', true);
  }
  function saveWork(btn) {
    var title = $('f-title').value.trim(), link = $('f-link').value.trim();
    if (!title) return formErr('กรุณาใส่ชื่อผลงาน');
    if (link && !/^https:\/\/\S+$/.test(link)) return formErr('ลิงก์ต้องขึ้นต้นด้วย https://');
    saveContent('works', { id: S.form.id, title: title, cat: $('f-cat2').value, date: $('f-date').value, vis: $('f-vis').value, hours: +$('f-hours').value || 0, link: link, ind: readInds(), desc: $('f-desc').value, featured: $('f-feat').checked }, btn, 'บันทึกผลงานแล้ว');
  }

  /* ---------- วิดีโอ ---------- */
  function aVideos() {
    var list = aFilter('videos', C().videos.slice().sort(byDate), function (v) { return v.title + ' ' + v.desc; });
    var rows = pageOf(list, 'a-videos', perA()).map(function (v) {
      return '<tr><td style="width:150px;min-width:150px">' + vThumb(v, 'sm') + '</td><td style="min-width:240px"><b>' + esc(v.title) + '</b><div class="small muted">' + VTYPE[v.type] + ' · ' + VSRC[v.src] + (v.fy ? ' · ปีงบ ' + v.fy : ' · ทุกปี') + (v.pa ? ' · ประกอบ PA' : '') + (v.url ? '' : ' · <b style="color:var(--warn)">ยังไม่ใส่ลิงก์</b>') + '</div></td><td class="num" style="white-space:nowrap">' + fd(v.date) + '<div class="small muted">' + esc(v.dur || '') + '</div></td><td>' + indChips(v.ind) + '</td><td>' + visChip(v.vis) + (v.featured ? '<div style="margin-top:4px"><span class="chip ind">หน้าแรก</span></div>' : '') + '</td>' +
        rowBtns('videos', v.id, '<button class="btn icon sm" data-act="open-video" data-id="' + v.id + '" aria-label="เล่น">' + ic('play', 16) + '</button> ') + '</tr>';
    }).join('');
    return adminShell('admin-videos', 'วิดีโอ', 'วางลิงก์ YouTube หรือ Google Drive แล้วผูกกับตัวชี้วัด PA', '<a class="btn" href="#videos">' + ic('eye', 16) + ' ดูหน้าสาธารณะ</a><button class="btn primary" data-act="c-new" data-k="videos">' + ic('plus', 16) + ' เพิ่มวิดีโอ</button>',
      '<div class="note">' + ic('video', 15) + ' ไฟล์วิดีโอใหญ่เกินกว่าจะส่งผ่าน Apps Script ได้ ให้อัปโหลดขึ้น YouTube (ตั้งเป็น "ไม่เป็นสาธารณะ") หรือ Google Drive (แชร์ "ทุกคนที่มีลิงก์") แล้วนำลิงก์มาวาง · คลิป "เฉพาะกรรมการ" ระบบจะไม่ส่งลิงก์ออกไปหน้าสาธารณะ</div>' +
      aSearch('videos', 'ค้นหาชื่อวิดีโอ') + '<div class="tbl-wrap"><table class="tbl"><thead><tr><th>ตัวอย่าง</th><th>วิดีโอ</th><th>วันที่/ความยาว</th><th>ตัวชี้วัด</th><th>สิทธิ์</th><th class="r">จัดการ</th></tr></thead><tbody>' + (rows || emptyRow(6, C().videos.length ? 'ไม่พบรายการ' : 'ยังไม่มีวิดีโอ กด “เพิ่มวิดีโอ”')) + '</tbody></table></div>' + pagerNav('a-videos'));
  }
  function videoForm(v) {
    var isNew = !v;
    v = v || { id: '', fy: S.fy, title: '', type: 'pa', src: 'youtube', url: '', dur: '', date: today(), ind: [], vis: st().defaultVis || 'public', featured: false, pa: true, desc: '', thumbUrl: '' };
    S.form = { kind: 'videos', id: v.id, files: {}, clear: [] };
    openModal(isNew ? 'เพิ่มวิดีโอ' : 'แก้ไขวิดีโอ',
      '<div class="field"><label for="f-title">ชื่อวิดีโอ</label><input id="f-title" class="inp" value="' + esc(v.title) + '"></div>' +
      '<div class="grid2"><div class="field"><label for="f-type">ประเภท</label><select id="f-type" class="inp">' + opts(VTYPE, v.type) + '</select></div>' + visSel(v.vis) + '</div>' +
      '<div class="grid2"><div class="field"><label for="f-src">แหล่งวิดีโอ</label><select id="f-src" class="inp">' + opts(VSRC, v.src) + '</select></div><div class="field"><label for="f-url">ลิงก์วิดีโอ</label><input id="f-url" class="inp mono" placeholder="https://youtu.be/… หรือลิงก์ไฟล์ Drive" value="' + esc(v.url) + '"><span class="hint">ระบบแปลงเป็นลิงก์ฝังให้เอง</span></div></div>' +
      '<div class="grid2"><div class="field"><label for="f-fy">ปีงบประมาณ</label><select id="f-fy" class="inp"><option value="">แสดงทุกปี</option>' + D.years.map(function (y) { return '<option value="' + y.fy + '"' + (v.fy === y.fy ? ' selected' : '') + '>' + y.fy + '</option>'; }).join('') + '</select></div><div class="field"><label for="f-date">วันที่บันทึก</label><input id="f-date" type="date" class="inp" value="' + esc(v.date) + '"></div></div>' +
      '<div class="grid2"><div class="field"><label for="f-dur">ความยาว (นาที:วินาที)</label><input id="f-dur" class="inp num" placeholder="48:12" value="' + esc(v.dur) + '"></div><div class="field"><label>&nbsp;</label><label class="row small" style="gap:8px"><input type="checkbox" id="f-pa"' + (v.pa ? ' checked' : '') + ' style="width:18px;height:18px;accent-color:var(--accent)"> ใช้ประกอบการประเมิน PA ของปีนี้</label></div></div>' +
      '<div id="ff-box">' + fileField('videos.thumb', 'ภาพปกวิดีโอ (ไม่บังคับ · YouTube ใช้ภาพปกของคลิปให้อัตโนมัติ)', v.thumbUrl) + '</div>' +
      '<div class="field"><label>ผูกกับตัวชี้วัด PA</label>' + indChecks(v.ind) + '</div>' +
      '<label class="row small" style="gap:8px"><input type="checkbox" id="f-feat"' + (v.featured ? ' checked' : '') + ' style="width:18px;height:18px;accent-color:var(--accent)"> แสดงในส่วนวิดีโอของหน้าแรก</label>' +
      '<div class="field"><label for="f-desc">คำอธิบาย</label><textarea id="f-desc" class="inp">' + esc(v.desc) + '</textarea></div><div id="f-err"></div>',
      '<button class="btn" data-act="close-modal">ยกเลิก</button><button class="btn primary" data-act="c-save" id="f-btn">' + ic('check', 16) + ' บันทึก</button>', true);
  }
  function saveVideo(btn) {
    var title = $('f-title').value.trim(), url = $('f-url').value.trim(), src = $('f-src').value, dur = $('f-dur').value.trim();
    if (!title) return formErr('กรุณาใส่ชื่อวิดีโอ');
    if (url && !/^https:\/\//.test(url)) return formErr('ลิงก์ต้องขึ้นต้นด้วย https://');
    if (url && src === 'youtube' && !ytId(url)) return formErr('ลิงก์ YouTube ไม่ถูกต้อง ตัวอย่างที่ใช้ได้: https://youtu.be/xxxxxxxxxxx');
    if (url && src === 'drive' && !driveId(url)) return formErr('ไม่พบรหัสไฟล์ในลิงก์ Google Drive');
    if (dur && !/^\d{1,3}:[0-5]\d(:[0-5]\d)?$/.test(dur)) return formErr('ความยาวให้ใส่แบบ นาที:วินาที เช่น 48:12');
    saveContent('videos', { id: S.form.id, title: title, type: $('f-type').value, vis: $('f-vis').value, src: src, url: url, fy: $('f-fy').value ? +$('f-fy').value : '', date: $('f-date').value, dur: dur, pa: $('f-pa').checked, ind: readInds(), featured: $('f-feat').checked, desc: $('f-desc').value }, btn, 'บันทึกวิดีโอแล้ว');
  }

  /* ---------- รางวัล เกียรติบัตร การอบรม ---------- */
  function aAwards() {
    var list = aFilter('awards', C().awards.slice().sort(byDate), function (a) { return a.title + ' ' + a.org; });
    var rows = pageOf(list, 'a-awards', perA()).map(function (a) {
      return '<tr><td style="width:110px">' + certThumb(a) + '</td><td style="min-width:240px"><b>' + esc(a.title) + '</b><div class="small muted">' + blank(a.org) + (a.fileUrl ? ' · <a href="' + esc(a.fileUrl) + '" target="_blank" rel="noopener">PDF</a>' : '') + '</div></td><td><span class="chip ' + (a.type === 'award' ? 'gold' : 'ind') + '">' + ATYPE[a.type] + '</span><div class="small muted" style="margin-top:4px">' + esc(a.level) + '</div></td><td class="num" style="white-space:nowrap">' + fd(a.date) + (a.hours ? '<div class="small muted">' + a.hours + ' ชม.</div>' : '') + '</td><td>' + indChips(a.ind) + '</td><td>' + visChip(a.vis) + '</td>' + rowBtns('awards', a.id) + '</tr>';
    }).join('');
    return adminShell('admin-awards', 'รางวัล เกียรติบัตร และการอบรม', 'ชั่วโมงพัฒนาตนเองปีงบประมาณ ' + S.fy + ' รวม ' + fyHours(S.fy) + ' ชั่วโมง (นับจากการอบรมและผลงานประเภทอบรม)', '<a class="btn" href="#awards">' + ic('eye', 16) + ' ดูหน้าสาธารณะ</a><button class="btn primary" data-act="c-new" data-k="awards">' + ic('plus', 16) + ' เพิ่มรายการ</button>',
      aSearch('awards', 'ค้นหาชื่อรายการ') + '<div class="tbl-wrap"><table class="tbl"><thead><tr><th>ภาพ</th><th>รายการ</th><th>ประเภท/ระดับ</th><th>วันที่</th><th>ตัวชี้วัด</th><th>สิทธิ์</th><th class="r">จัดการ</th></tr></thead><tbody>' + (rows || emptyRow(7, C().awards.length ? 'ไม่พบรายการ' : 'ยังไม่มีรายการ กด “เพิ่มรายการ”')) + '</tbody></table></div>' + pagerNav('a-awards'));
  }
  function awardForm(a) {
    var isNew = !a;
    a = a || { id: '', type: 'cert', title: '', level: 'เขตพื้นที่', org: '', date: today(), hours: '', ind: [], vis: st().defaultVis || 'public', imgUrl: '', fileUrl: '' };
    S.form = { kind: 'awards', id: a.id, files: {}, clear: [] };
    openModal(isNew ? 'เพิ่มรางวัล/เกียรติบัตร/การอบรม' : 'แก้ไขรายการ',
      '<div class="grid2"><div class="field"><label for="f-type">ประเภท</label><select id="f-type" class="inp">' + opts(ATYPE, a.type) + '</select></div><div class="field"><label for="f-level">ระดับ</label><select id="f-level" class="inp">' + ALEVEL.map(function (k) { return '<option' + (a.level === k ? ' selected' : '') + '>' + k + '</option>'; }).join('') + '</select></div></div>' +
      '<div class="field"><label for="f-title">ชื่อรางวัล/เกียรติบัตร/หลักสูตร</label><input id="f-title" class="inp" value="' + esc(a.title) + '"></div>' +
      '<div class="field"><label for="f-org">หน่วยงานที่มอบ/ผู้จัด</label><input id="f-org" class="inp" value="' + esc(a.org) + '"></div>' +
      '<div class="grid2"><div class="field"><label for="f-date">วันที่</label><input id="f-date" type="date" class="inp" value="' + esc(a.date) + '"></div><div class="field"><label for="f-hours">จำนวนชั่วโมง (การอบรม/วิทยากร)</label><input id="f-hours" type="number" min="0" class="inp" value="' + (a.hours || '') + '"></div></div>' +
      '<div id="ff-box" class="grid2">' + fileField('awards.img', 'ภาพเกียรติบัตร', a.imgUrl) + fileField('awards.file', 'ไฟล์ PDF (ไม่บังคับ)', a.fileUrl, a.fileName) + '</div>' +
      '<div class="grid2">' + visSel(a.vis) + '</div>' +
      '<div class="field"><label>ผูกกับตัวชี้วัด PA</label>' + indChecks(a.ind) + '</div><div id="f-err"></div>',
      '<button class="btn" data-act="close-modal">ยกเลิก</button><button class="btn primary" data-act="c-save" id="f-btn">' + ic('check', 16) + ' บันทึก</button>', true);
  }
  function saveAward(btn) {
    var title = $('f-title').value.trim();
    if (!title) return formErr('กรุณาใส่ชื่อรายการ');
    saveContent('awards', { id: S.form.id, type: $('f-type').value, level: $('f-level').value, title: title, org: $('f-org').value.trim(), date: $('f-date').value, hours: +$('f-hours').value || 0, vis: $('f-vis').value, ind: readInds() }, btn, 'บันทึกแล้ว');
  }

  /* ---------- ระบบที่จัดทำ ---------- */
  function aSystems() {
    var all = C().systems, rows = pageOf(all, 'a-systems', perA()).map(function (sy) {
      var idx = all.indexOf(sy), filled = sy.links.filter(function (l) { return l.url; });
      return '<tr><td style="white-space:nowrap"><button class="btn icon sm" data-act="sys-mv" data-i="' + idx + '" data-d="-1"' + (idx === 0 ? ' disabled' : '') + ' aria-label="เลื่อนขึ้น">↑</button><button class="btn icon sm" data-act="sys-mv" data-i="' + idx + '" data-d="1"' + (idx === all.length - 1 ? ' disabled' : '') + ' aria-label="เลื่อนลง">↓</button></td>' +
        '<td style="min-width:240px"><b>' + esc(sy.name) + '</b><div class="small muted">' + (SCAT[sy.cat] || '') + (sy.year ? ' · ปี ' + sy.year : '') + (sy.featured ? ' · แสดงหน้าแรก' : '') + '</div></td><td><span class="pill ' + (SSTATUS[sy.status] || SSTATUS.live).c + '">' + (SSTATUS[sy.status] || SSTATUS.live).t + '</span></td>' +
        '<td>' + (filled.map(function (l) { return '<span class="chip" style="margin:0 4px 4px 0">' + ic(l.vis === 'public' ? (LTYPE[l.type] || LTYPE.other).i : 'lock', 12) + ' ' + (LTYPE[l.type] || LTYPE.other).t + '</span>'; }).join('') || '<span class="small" style="color:var(--warn)">ยังไม่ใส่ลิงก์</span>') + '</td><td>' + indChips(sy.ind) + '</td><td>' + visChip(sy.vis) + '</td>' + rowBtns('systems', sy.id) + '</tr>';
    }).join('');
    return adminShell('admin-systems', 'ระบบที่จัดทำ', 'ใส่ลิงก์เว็บ (Vercel / Netlify / GitHub Pages) GitHub GAS และลิงก์อื่น ๆ ของแต่ละระบบ · ลูกศรใช้เรียงลำดับในหน้าสาธารณะ', '<a class="btn" href="#systems">' + ic('eye', 16) + ' ดูหน้าสาธารณะ</a><button class="btn primary" data-act="c-new" data-k="systems">' + ic('plus', 16) + ' เพิ่มระบบ</button>',
      '<div class="note">' + ic('lock', 15) + ' ตั้งสิทธิ์ได้รายลิงก์ ลิงก์ GAS ควรตั้งเป็น "เฉพาะกรรมการ" เพื่อไม่ให้ที่อยู่ API เผยแพร่ ส่วน GitHub repo ส่วนตัวควรตั้งเป็น "ส่วนตัว"</div>' +
      '<div class="tbl-wrap"><table class="tbl"><thead><tr><th>ลำดับ</th><th>ระบบ</th><th>สถานะ</th><th>ลิงก์</th><th>ตัวชี้วัด</th><th>สิทธิ์</th><th class="r">จัดการ</th></tr></thead><tbody>' + (rows || emptyRow(7, 'ยังไม่มีระบบ กด “เพิ่มระบบ”')) + '</tbody></table></div>' + pagerNav('a-systems'));
  }
  function renderLinkRows() {
    var box = $('lk-rows'); if (!box) return;
    box.innerHTML = S.form.links.map(function (l, i) {
      return '<div class="lkrow"><select class="inp" data-lk="' + i + ':type" aria-label="ประเภทลิงก์ ' + (i + 1) + '">' + opts(LTYPE, l.type) + '</select>' +
        '<input class="inp mono" data-lk="' + i + ':url" value="' + esc(l.url) + '" placeholder="https://…" aria-label="ลิงก์ ' + (i + 1) + '">' +
        '<select class="inp" data-lk="' + i + ':vis" aria-label="สิทธิ์ลิงก์ ' + (i + 1) + '">' + opts(VIS, l.vis) + '</select>' +
        '<button class="btn icon sm danger" type="button" data-act="lk-del" data-i="' + i + '" aria-label="ลบลิงก์ ' + (i + 1) + '">' + ic('trash', 15) + '</button></div>';
    }).join('') || '<p class="small muted">ยังไม่มีลิงก์</p>';
  }
  function sysForm(sy) {
    var isNew = !sy;
    sy = sy || { id: '', name: '', desc: '', cat: 'learn', status: 'live', year: S.fy, tech: [], ind: [], featured: false, embed: true, vis: 'public', imgUrl: '', links: [{ type: 'web', url: '', vis: 'public' }, { type: 'github', url: '', vis: 'public' }, { type: 'gas', url: '', vis: 'committee' }] };
    S.form = { kind: 'systems', id: sy.id, files: {}, clear: [], links: sy.links.map(function (l) { return { type: l.type, url: l.url, vis: l.vis }; }) };
    openModal(isNew ? 'เพิ่มระบบ' : 'แก้ไขระบบ',
      '<div class="field"><label for="f-name">ชื่อระบบ</label><input id="f-name" class="inp" value="' + esc(sy.name) + '"></div>' +
      '<div class="field"><label for="f-desc">คำอธิบายสั้น</label><textarea id="f-desc" class="inp" style="min-height:64px">' + esc(sy.desc) + '</textarea></div>' +
      '<div class="grid2"><div class="field"><label for="f-scat">หมวด</label><select id="f-scat" class="inp">' + opts(SCAT, sy.cat) + '</select></div><div class="field"><label for="f-status">สถานะ</label><select id="f-status" class="inp">' + opts(SSTATUS, sy.status) + '</select></div></div>' +
      '<div class="grid2"><div class="field"><label for="f-year">ปี พ.ศ.</label><input id="f-year" type="number" class="inp" value="' + (sy.year || '') + '"></div><div class="field"><label for="f-tech">เทคโนโลยี (คั่นด้วยจุลภาค)</label><input id="f-tech" class="inp" value="' + esc(sy.tech.join(', ')) + '"></div></div>' +
      '<div class="field"><label>ลิงก์ของระบบ</label><span class="hint">วางลิงก์แล้วระบบเดาประเภทให้ (vercel.app, github.io, github.com, script.google.com …) · ลิงก์ GAS ต้องลงท้าย /exec</span><div id="lk-rows" style="display:flex;flex-direction:column;gap:8px;margin-top:6px"></div><div><button class="btn sm" type="button" data-act="lk-add" style="margin-top:6px">' + ic('plus', 15) + ' เพิ่มลิงก์</button></div></div>' +
      '<div id="ff-box">' + fileField('systems.img', 'ภาพหน้าจอระบบ', sy.imgUrl) + '</div>' +
      '<label class="row small" style="gap:8px"><input type="checkbox" id="f-embed"' + (sy.embed ? ' checked' : '') + ' style="width:18px;height:18px;accent-color:var(--accent)"> ให้กด "ดูตัวอย่างในหน้านี้" ได้ (ฝังเว็บด้วย iframe)</label>' +
      '<label class="row small" style="gap:8px"><input type="checkbox" id="f-feat"' + (sy.featured ? ' checked' : '') + ' style="width:18px;height:18px;accent-color:var(--accent)"> แสดงในหน้าแรก</label>' +
      '<div class="grid2">' + visSel(sy.vis) + '</div>' +
      '<div class="field"><label>ผูกกับตัวชี้วัด PA</label>' + indChecks(sy.ind) + '</div><div id="f-err"></div>',
      '<button class="btn" data-act="close-modal">ยกเลิก</button><button class="btn primary" data-act="c-save" id="f-btn">' + ic('check', 16) + ' บันทึก</button>', true);
    renderLinkRows();
  }
  function saveSystem(btn) {
    var name = $('f-name').value.trim(), errs = [];
    if (!name) errs.push('กรุณาใส่ชื่อระบบ');
    S.form.links.forEach(function (l, i) {
      if (!l.url) return;
      if (!/^https:\/\/[^\s]+\.[^\s]+/.test(l.url)) errs.push('ลิงก์ที่ ' + (i + 1) + ' ต้องขึ้นต้นด้วย https://');
      else if (l.type === 'gas' && !/script\.google\.com\/macros\/s\/[^\/]+\/exec/.test(l.url)) errs.push('ลิงก์ที่ ' + (i + 1) + ' ไม่ใช่ลิงก์ GAS แบบ /exec' + (/\/dev$/.test(l.url) ? ' (ลิงก์ /dev เปิดได้เฉพาะเจ้าของ)' : ''));
    });
    if (errs.length) return formErr(errs.join(' · '));
    saveContent('systems', { id: S.form.id, name: name, desc: $('f-desc').value.trim(), cat: $('f-scat').value, status: $('f-status').value, year: +$('f-year').value || '', tech: $('f-tech').value, ind: readInds(), embed: $('f-embed').checked, featured: $('f-feat').checked, vis: $('f-vis').value, links: S.form.links }, btn, 'บันทึกระบบแล้ว');
  }
  function moveSystem(i, d) {
    var ids = C().systems.map(function (s) { return s.id; }), j = i + d;
    if (j < 0 || j >= ids.length) return;
    var t = ids[i]; ids[i] = ids[j]; ids[j] = t;
    api('reorderSystems', { ids: ids }, { loader: 'กำลังเรียงลำดับ' }, function (err, res) { if (err) { toast(err); return; } D.content.systems = res.systems; render(); });
  }

  /* ---------- อัลบั้มภาพกิจกรรม ---------- */
  function aGallery() {
    var list = C().albums.slice().sort(byDate);
    var cards = pageOf(list, 'a-gallery', perA()).map(function (a) {
      var ps = photosOf(a.id), cov = find(ps, 'id', a.coverId) || ps[0];
      return '<div class="card alb-admin">' + ph(hueOf(a.id), 'image', ps.length + ' ภาพ', '', cov && cov.url) + '<div class="row" style="justify-content:space-between;gap:6px"><b>' + esc(a.title) + '</b>' + visChip(a.vis) + '</div><span class="small muted">' + fd(a.date) + (a.featured ? ' · แสดงหน้าแรก' : '') + '</span>' +
        '<div class="row" style="gap:6px"><label class="btn sm primary" for="up-' + a.id + '">' + ic('upload', 15) + ' อัปโหลดภาพ</label><input type="file" id="up-' + a.id + '" data-up-alb="' + a.id + '" accept="image/jpeg,image/png,image/webp" multiple style="display:none">' +
        '<a class="btn sm" href="#admin-album-' + a.id + '">' + ic('image', 15) + ' จัดการภาพ</a><button class="btn icon sm" data-act="c-edit" data-k="albums" data-id="' + a.id + '" aria-label="แก้ไขอัลบั้ม">' + ic('edit', 15) + '</button><button class="btn icon sm danger" data-act="c-del" data-k="albums" data-id="' + a.id + '" aria-label="ลบอัลบั้ม">' + ic('trash', 15) + '</button></div></div>';
    }).join('');
    return adminShell('admin-gallery', 'ภาพกิจกรรม', 'สร้างอัลบั้มแล้วอัปโหลดภาพได้ครั้งละหลายภาพ ระบบย่อภาพที่เบราว์เซอร์ (ด้านยาวไม่เกิน 2000 px) ก่อนส่งไป Drive', '<a class="btn" href="#gallery">' + ic('eye', 16) + ' ดูหน้าสาธารณะ</a><button class="btn primary" data-act="c-new" data-k="albums">' + ic('plus', 16) + ' สร้างอัลบั้ม</button>',
      (cards ? '<div class="grid3">' + cards + '</div>' + pagerNav('a-gallery') : '<div class="card empty">ยังไม่มีอัลบั้ม กด “สร้างอัลบั้ม”</div>'));
  }
  function albumForm(a) {
    var isNew = !a;
    a = a || { id: '', title: '', date: today(), desc: '', vis: st().defaultVis || 'public', coverId: '', featured: false };
    S.form = { kind: 'albums', id: a.id, files: {}, clear: [], coverId: a.coverId };
    openModal(isNew ? 'สร้างอัลบั้ม' : 'แก้ไขอัลบั้ม',
      '<div class="field"><label for="f-title">ชื่ออัลบั้ม</label><input id="f-title" class="inp" value="' + esc(a.title) + '"></div>' +
      '<div class="grid2"><div class="field"><label for="f-date">วันที่จัดกิจกรรม</label><input id="f-date" type="date" class="inp" value="' + esc(a.date) + '"></div>' + visSel(a.vis) + '</div>' +
      '<div class="field"><label for="f-desc">คำอธิบาย</label><textarea id="f-desc" class="inp" style="min-height:64px">' + esc(a.desc) + '</textarea></div>' +
      '<label class="row small" style="gap:8px"><input type="checkbox" id="f-feat"' + (a.featured ? ' checked' : '') + ' style="width:18px;height:18px;accent-color:var(--accent)"> ปักหมุดในส่วนภาพกิจกรรมของหน้าแรก</label>' +
      '<p class="small muted">อัลบั้มที่มีภาพนักเรียนควรเลือกภาพบรรยากาศ ไม่เห็นใบหน้าชัดหรือข้อมูลส่วนตัว · อัลบั้ม "ส่วนตัว" ภาพจะถูกปิดการแชร์ใน Drive</p><div id="f-err"></div>',
      '<button class="btn" data-act="close-modal">ยกเลิก</button><button class="btn primary" data-act="c-save" id="f-btn">' + ic('check', 16) + ' บันทึก</button>');
  }
  function saveAlbum(btn) {
    var title = $('f-title').value.trim();
    if (!title) return formErr('กรุณาใส่ชื่ออัลบั้ม');
    saveContent('albums', { id: S.form.id, title: title, date: $('f-date').value, vis: $('f-vis').value, desc: $('f-desc').value, coverId: S.form.coverId || '', featured: $('f-feat').checked }, btn, 'บันทึกอัลบั้มแล้ว');
  }
  /** อัปโหลดภาพหลายไฟล์ทีละภาพ พร้อมแถบความคืบหน้าจริง */
  function uploadPhotos(aid, files) {
    var list = Array.prototype.slice.call(files || []).filter(function (f) { return /^image\/(jpeg|png|webp)$/.test(f.type); });
    var skipped = (files ? files.length : 0) - list.length;
    if (!list.length) { toast('รองรับเฉพาะ JPG PNG WebP'); return; }
    if (list.length > 60) { toast('เลือกได้ครั้งละไม่เกิน 60 ภาพ'); list = list.slice(0, 60); }
    var total = list.length, done = 0, fails = [];
    showProgress('กำลังอัปโหลดภาพ ' + total + ' ภาพ');
    function step() {
      var f = list.shift();
      if (!f) {
        hideLoader(true); render();
        toast('อัปโหลดแล้ว ' + done + ' ภาพ' + (fails.length ? ' · ไม่สำเร็จ ' + fails.length + ' ภาพ' : '') + (skipped ? ' · ข้ามไฟล์ที่ไม่ใช่รูป ' + skipped : ''));
        return;
      }
      setProgress(done / total * 100, 'ภาพที่ ' + (done + fails.length + 1) + '/' + total + ' · ' + f.name);
      prepImage(f, 2000, 2000, false, function (err, img) {
        if (err) { fails.push(f.name); return step(); }
        api('addPhoto', { albumId: aid, mime: img.mime, b64: img.b64, name: f.name.replace(/\.[^.]+$/, ''), caption: '', w: img.w, h: img.h, last: !list.length, batch: total }, { loader: false, timeout: 120000 }, function (e2, res) {
          if (e2) { fails.push(f.name); if (/AUTH|เข้าสู่ระบบ/.test(e2)) { hideLoader(true); return; } return step(); }
          done++; D.content.photos.push(res.photo); D.content.albums = res.albums;
          setProgress(done / total * 100, 'อัปโหลดแล้ว ' + done + '/' + total);
          step();
        });
      });
    }
    step();
  }
  function aAlbum(id) {
    var a = find(C().albums, 'id', id);
    if (!a) return aGallery();
    var ps = photosOf(id);
    if (!S.pm || S.pm.id !== id) S.pm = { id: id, sel: {}, caps: {}, order: null };
    var order = S.pm.order ? S.pm.order.map(function (pid) { return find(ps, 'id', pid); }).filter(Boolean) : ps;
    ps.forEach(function (p) { if (order.indexOf(p) < 0) order.push(p); });
    var nSel = Object.keys(S.pm.sel).filter(function (k) { return S.pm.sel[k]; }).length, dirty = !!S.pm.order || Object.keys(S.pm.caps).length;
    var cards = order.map(function (p, i) {
      var cap = S.pm.caps[p.id] !== undefined ? S.pm.caps[p.id] : p.caption, isCov = (a.coverId || (ps[0] && ps[0].id)) === p.id;
      return '<div class="pm-card' + (S.pm.sel[p.id] ? ' sel' : '') + '">' + '<button type="button" class="pm-img" data-act="open-photo" data-a="' + id + '" data-i="' + ps.indexOf(p) + '" aria-label="ดูภาพ">' + ph(hueOf(p.id), 'image', '', 'sq', p.url) + '</button>' +
        (isCov ? '<span class="pm-cov chip gold">' + ic('check', 12) + ' ภาพปก</span>' : '') +
        '<label class="pm-sel"><input type="checkbox" data-pm-sel="' + p.id + '"' + (S.pm.sel[p.id] ? ' checked' : '') + ' aria-label="เลือกภาพที่ ' + (i + 1) + '"></label>' +
        '<input class="inp pm-cap" data-pm-cap="' + p.id + '" value="' + esc(cap) + '" placeholder="คำบรรยายภาพ" aria-label="คำบรรยายภาพที่ ' + (i + 1) + '">' +
        '<div class="row" style="gap:2px;justify-content:space-between"><span class="row" style="gap:2px"><button class="btn icon sm" data-act="pm-mv" data-i="' + i + '" data-d="-1"' + (i === 0 ? ' disabled' : '') + ' aria-label="เลื่อนไปก่อนหน้า">' + ic('left', 14) + '</button><button class="btn icon sm" data-act="pm-mv" data-i="' + i + '" data-d="1"' + (i === order.length - 1 ? ' disabled' : '') + ' aria-label="เลื่อนไปถัดไป">' + ic('chev', 14) + '</button></span>' +
        (isCov ? '' : '<button class="btn sm" data-act="pm-cover" data-id="' + p.id + '">ตั้งเป็นภาพปก</button>') + '</div></div>';
    }).join('');
    S.pm.list = order.map(function (p) { return p.id; });
    return adminShell('admin-gallery', esc(a.title), fd(a.date) + ' · ' + ps.length + ' ภาพ · ' + VIS[a.vis], '<a class="btn" href="#admin-gallery">' + ic('left', 16) + ' ทุกอัลบั้ม</a><a class="btn" href="#album-' + id + '">' + ic('eye', 16) + ' ดูหน้าสาธารณะ</a><label class="btn primary" for="up-pm">' + ic('upload', 16) + ' อัปโหลดภาพ</label><input type="file" id="up-pm" data-up-alb="' + id + '" accept="image/jpeg,image/png,image/webp" multiple style="display:none">',
      '<div class="pm-bar card"><span class="small">' + (nSel ? 'เลือก ' + nSel + ' ภาพ' : 'ติ๊กมุมภาพเพื่อเลือกหลายภาพ') + '</span><span class="sp" style="flex:1"></span>' +
        '<button class="btn sm" data-act="pm-all">' + ic('check', 14) + ' เลือกทั้งหมด</button>' + (nSel ? '<button class="btn sm danger" data-act="pm-del">' + ic('trash', 14) + ' ลบที่เลือก</button>' : '') +
        '<button class="btn sm primary" data-act="pm-save"' + (dirty ? '' : ' disabled') + '>' + ic('check', 14) + ' บันทึกคำบรรยายและลำดับ</button></div>' +
      (cards ? '<div class="pm-grid">' + cards + '</div>' : '<label class="card empty drop" for="up-pm" style="cursor:pointer">' + ic('upload', 26) + '<span>อัลบั้มนี้ยังไม่มีภาพ คลิกเพื่อเลือกภาพ (เลือกได้หลายภาพพร้อมกัน)</span></label>'));
  }
  function savePm() {
    var pm = S.pm, ps = photosOf(pm.id);
    var list = pm.list.map(function (pid) { var p = find(ps, 'id', pid); return { id: pid, caption: pm.caps[pid] !== undefined ? pm.caps[pid] : (p ? p.caption : '') }; });
    api('savePhotos', { albumId: pm.id, photos: list }, { loader: 'กำลังบันทึก' }, function (err, res) {
      if (err) { toast(err); return; }
      D.content.photos = res.photos; pm.caps = {}; pm.order = null; render(); toast('บันทึกคำบรรยายและลำดับภาพแล้ว');
    });
  }
  function setAlbumCover(pid) {
    var a = find(C().albums, 'id', S.pm.id); if (!a) return;
    var item = clone(a); item.coverId = pid;
    api('saveItem', { kind: 'albums', item: item }, { loader: 'กำลังตั้งภาพปก' }, function (err, res) { if (err) { toast(err); return; } D.content.albums = res.albums; render(); toast('ตั้งเป็นภาพปกอัลบั้มแล้ว'); });
  }

  /* ---------- สไลด์ภาพปก (หน้าปกและประวัติ) ---------- */
  function coverManager() {
    var s = st(), list = (D.settings.coverSlides || []);
    var rows = list.map(function (x, i) {
      return '<div class="cs-row"><div class="cs-thumb"><img src="' + esc(x.still || x.url) + '" alt=""></div><input class="inp" data-cs="' + i + '" value="' + esc(x.cap || '') + '" placeholder="คำบรรยายภาพ (ไม่บังคับ)" aria-label="คำบรรยายสไลด์ ' + (i + 2) + '">' +
        '<span class="row" style="gap:2px;flex-wrap:nowrap"><button class="btn icon sm" data-act="cs-mv" data-i="' + i + '" data-d="-1"' + (i === 0 ? ' disabled' : '') + ' aria-label="เลื่อนขึ้น">↑</button><button class="btn icon sm" data-act="cs-mv" data-i="' + i + '" data-d="1"' + (i === list.length - 1 ? ' disabled' : '') + ' aria-label="เลื่อนลง">↓</button><button class="btn icon sm danger" data-act="cs-del" data-i="' + i + '" aria-label="ลบสไลด์ ' + (i + 2) + '">' + ic('trash', 15) + '</button></span></div>';
    }).join('');
    return '<div class="card" style="display:flex;flex-direction:column;gap:12px;margin-top:16px"><div class="sec-h"><h3>สไลด์ภาพปกเพิ่มเติม (วนสลับ)</h3><span class="row"><label class="btn sm" for="cs-up">' + ic('upload', 15) + ' เพิ่มภาพ</label><input id="cs-up" type="file" accept="image/png,image/jpeg,image/webp,image/gif" multiple style="display:none"></span></div>' +
      '<p class="small muted">ภาพปกหลักด้านบนเป็นสไลด์แรก ตามด้วยรายการนี้ (สูงสุด 8 ภาพ) · เฟดสลับทุก ' + (+s.rotSec || 0) + ' วินาที ตั้งได้ที่หน้าตั้งค่า · หยุดเมื่อชี้เมาส์ค้าง · เพิ่ม ลบ เรียง และแก้คำบรรยายบันทึกทันที</p>' + (rows || '<p class="small muted">ยังไม่มีสไลด์เพิ่ม</p>') +
      '<div class="field"><label for="tl-lines">ข้อความใต้ชื่อ (บรรทัดละข้อความ ถ้ามีหลายบรรทัดจะวนสลับ)</label><textarea id="tl-lines" class="inp" rows="3" data-b="taglines">' + esc(((s.taglines || []).length ? s.taglines : [s.tagline || '']).join('\n')) + '</textarea></div></div>';
  }
  function saveSlides(list, msg) {
    api('saveSlides', { slides: list.map(function (x) { return { id: x.id, cap: x.cap || '' }; }) }, { loader: 'กำลังบันทึกสไลด์' }, function (err, res) {
      if (err) { toast(err); return; }
      D.settings = res.settings; if (S.draft) S.draft.s.coverSlides = res.settings.coverSlides; cachePublic(); render(); if (msg) toast(msg);
    });
  }
  function uploadSlides(files) {
    var list = Array.prototype.slice.call(files || []), room = 8 - (D.settings.coverSlides || []).length;
    if (room <= 0) { toast('สไลด์ภาพปกได้ไม่เกิน 8 ภาพ'); return; }
    if (list.length > room) { toast('เพิ่มได้อีก ' + room + ' ภาพ'); list = list.slice(0, room); }
    (function next() {
      var f = list.shift(); if (!f) { render(); return; }
      doUpload('slide', f, { quiet: list.length > 0, caption: '' }, function () { next(); });
    })();
  }

  /* =====================================================================
     เฟส 3: แฟ้ม PA (ปีละ 1 รอบ) · แบบข้อตกลง PA 1 · ID Plan — ผูกกับปีงบประมาณเดียวกัน
     ===================================================================== */
  var ROOMS = ['ห้องเรียนปฐมวัย', 'ห้องเรียนสายสามัญ', 'ห้องเรียนการศึกษาพิเศษ', 'ห้องเรียนสายวิชาชีพ', 'ห้องเรียนการศึกษานอกระบบ/ตามอัธยาศัย'];
  var RANKS = [['', 'ยังไม่มีวิทยฐานะ'], ['ชำนาญการ', 'ครูชำนาญการ'], ['ชำนาญการพิเศษ', 'ครูชำนาญการพิเศษ'], ['เชี่ยวชาญ', 'ครูเชี่ยวชาญ'], ['เชี่ยวชาญพิเศษ', 'ครูเชี่ยวชาญพิเศษ']];
  var OPINIONS = [['', 'ยังไม่มี'], ['เห็นชอบ', 'เห็นชอบ'], ['เห็นชอบ และให้ปรับปรุงตามข้อเสนอแนะ', 'เห็นชอบ และให้ปรับปรุง'], ['ไม่เห็นชอบ', 'ไม่เห็นชอบ']];
  var LOAD_T = [['promote', '1.2 งานส่งเสริมและสนับสนุนการจัดการเรียนรู้'], ['quality', '1.3 งานพัฒนาคุณภาพการจัดการศึกษาของสถานศึกษา'], ['policy', '1.4 งานตอบสนองนโยบายและจุดเน้น']];
  var DOC_ST = { draft: ['ร่าง', 'off'], sent: ['เสนอผู้บริหารแล้ว', 'warn'], approved: ['ผู้บริหารเห็นชอบ', 'good'], ready: ['พร้อมให้กรรมการประเมิน', 'good'] };
  var COMPS = [
    ['สมรรถนะหลัก', ['การมุ่งผลสัมฤทธิ์ในการปฏิบัติงาน', 'การบริการที่ดี', 'การพัฒนาตนเอง', 'การทำงานเป็นทีม', 'จริยธรรมและจรรยาบรรณในวิชาชีพครู']],
    ['สมรรถนะประจำสายงาน', ['การบริหารหลักสูตรและการจัดการเรียนรู้', 'การพัฒนาผู้เรียน', 'การบริหารจัดการชั้นเรียน', 'การวิเคราะห์ สังเคราะห์ และการวิจัยเพื่อพัฒนาผู้เรียน', 'ภาวะผู้นำครู', 'การสร้างความสัมพันธ์และความร่วมมือกับชุมชนเพื่อการจัดการเรียนรู้']]
  ];
  D.docs = {}; S.docsLoading = {}; S.openSide = { 1: true }; S.paTab = 'p1';

  function prog(p, cls) { return '<div class="prog ' + (cls || '') + '"><i style="width:' + Math.max(0, Math.min(100, p)) + '%"></i></div>'; }
  function sel(id, list, cur, attr) { return '<select id="' + id + '" class="inp"' + (attr || '') + '>' + list.map(function (o) { return '<option value="' + esc(o[0]) + '"' + (String(cur) === String(o[0]) ? ' selected' : '') + '>' + esc(o[1]) + '</option>'; }).join('') + '</select>'; }
  function docPill(s) { var d = DOC_ST[s] || DOC_ST.draft; return '<span class="pill ' + d[1] + '">' + d[0] + '</span>'; }
  function sumRows(rows) { return (rows || []).reduce(function (t, r) { return t + (+r[1] || 0); }, 0); }
  function loadTotal(a, ti) { return sumRows(a.teach[ti].rows) + sumRows(a.promote) + sumRows(a.quality) + sumRows(a.policy); }
  function txt(v, ph2) { return v ? esc(v) : '<span class="muted">' + (ph2 || '[ยังไม่ได้เขียน]') + '</span>'; }
  function filled(x) { return !!(x.task && x.out && x.kpi); }
  function rankName(r) { return r ? 'วิทยฐานะครู' + r : 'ยังไม่มีวิทยฐานะ'; }
  function getPath(o, path) { return path.split('.').reduce(function (x, k) { return x[isNaN(+k) ? k : +k]; }, o); }
  function setPath(o, path, v) { var p = path.split('.'), last = p.pop(), t = getPath(o, p.join('.') || ''); if (!p.length) t = o; t[isNaN(+last) ? last : +last] = v; }

  /* ---------- โหลดเอกสารของปีงบ (แยกฉบับแอดมิน/สาธารณะ) ---------- */
  function docsOf(fy) { var d = D.docs[fy]; return d && d.mode === (S.admin ? 'admin' : 'pub') ? d : null; }
  function needDocs(fy) {
    var key = fy + (S.admin ? 'a' : 'p');
    if (docsOf(fy) || S.docsLoading[key]) return;
    S.docsLoading[key] = 1;
    api(S.admin ? 'adminYearDocs' : 'getYearDocs', { fy: fy }, { loader: false }, function (err, res) {
      S.docsLoading[key] = 0;
      if (err) { if (!S.docsErr) toast('โหลดเอกสารปีงบ ' + fy + ' ไม่สำเร็จ: ' + err); S.docsErr = err; return; }
      S.docsErr = ''; setDocs(res); if (S.fy === fy) render();
    });
  }
  function setDocs(res) { res.mode = S.admin ? 'admin' : 'pub'; D.docs[res.fy] = res; S.agDraft = null; S.idpDraft = null; }
  function docsWait(r, title) {
    needDocs(S.fy);
    var body = '<div class="card" style="margin-top:16px;display:flex;flex-direction:column;gap:12px" aria-busy="true"><div class="sk" style="height:26px;width:40%"></div><div class="sk" style="height:14px;width:70%"></div><div class="sk" style="height:120px"></div>' +
      (S.docsErr ? '<div class="err">โหลดไม่สำเร็จ: ' + esc(S.docsErr) + ' <button class="btn sm" data-act="docs-retry">ลองใหม่</button></div>' : '<span class="small muted">กำลังโหลด' + esc(title) + ' ปีงบประมาณ ' + S.fy + '</span>') + '</div>';
    return r.indexOf('admin') === 0 ? adminShell(r, title + ' ปีงบประมาณ ' + S.fy, 'กำลังโหลดข้อมูลจาก Google Sheets', '', body) : pub('pa', docStrip(r) + body);
  }
  function hiddenDoc(r, d, what) {
    if (d.hidden) return pub('pa', docStrip(r) + '<div class="card empty" style="margin-top:16px">' + ic('lock', 18) + ' ' + what + 'ปีงบประมาณ ' + S.fy + ' ไม่ได้เปิดเผยต่อสาธารณะ</div>');
    return pub('pa', docStrip(r) + '<div class="card empty" style="margin-top:16px">' + ic('lock', 18) + ' ' + what + 'ปีงบประมาณ ' + S.fy + ' เปิดดูได้เฉพาะคณะกรรมการประเมิน</div>');
  }

  /* ---------- แถบเอกสารของปีงบเดียวกัน ---------- */
  function docStrip(cur) {
    var d = docsOf(S.fy) || {}, a = d.agree || {}, p = d.pa || {}, i = d.idp || {}, g = fyRange(S.fy);
    function step(id, n, t, sub, pill, href) {
      return '<a class="ds-step' + (cur === id ? ' on' : '') + '" href="#' + href + '"' + (cur === id ? ' aria-current="page"' : '') + '><span class="ds-n">' + n + '</span><span class="ds-t"><b>' + t + '</b><span class="small muted">' + sub + '</span></span>' + pill + '</a>';
    }
    function st2(x) { return x.locked || x.hidden ? '<span class="pill off">' + ic('lock', 12) + '</span>' : (x.status ? docPill(x.status) : ''); }
    var ad = S.admin ? 'admin-' : '';
    return '<nav class="doc-strip" aria-label="เอกสารประจำปีงบประมาณ ' + S.fy + '"><div class="ds-h">' + ic('cal', 16) + ' เอกสารประจำปีงบประมาณ <b>' + S.fy + '</b><span class="small muted">' + fd(g[0]) + ' – ' + fd(g[1]) + ' · เปลี่ยนปีได้จากปุ่มปีงบด้านบน</span></div><div class="ds-row">' +
      step('agreement', 1, 'ข้อตกลง PA', 'จัดทำต้นปีงบ · ภาระงานและเป้าหมาย', st2(a), ad + 'agreement') +
      step('pa', 2, 'แฟ้ม PA', 'ผลการพัฒนางาน · ประเมินปีละ 1 ครั้ง', st2(p), ad + 'pa') +
      step('idplan', 3, 'ID Plan', 'แผนพัฒนาตนเองรายบุคคล', st2(i), ad + 'idplan') + '</div></nav>';
  }
  function statusFlow(s) {
    var steps = [['draft', 'ร่าง'], ['sent', 'เสนอผู้บริหาร'], ['approved', 'ผู้บริหารเห็นชอบ']], idx = ['draft', 'sent', 'approved'].indexOf(s);
    return '<ol class="flow">' + steps.map(function (x, i) { return '<li class="' + (i < idx ? 'done' : (i === idx ? 'now' : '')) + '"><span>' + (i < idx ? ic('check', 13) : (i + 1)) + '</span>' + x[1] + '</li>'; }).join('') + '</ol>';
  }

  /* ---------- หลักฐานที่ผูกตัวชี้วัด (จากคลังผลงาน วิดีโอ รางวัล ระบบ) ---------- */
  function evidenceOf(code, fy) {
    var c = C(), out = [];
    c.works.forEach(function (w) { if (shown(w) && w.ind.indexOf(code) > -1 && inFy(w.date, fy)) out.push({ t: 'work', id: w.id, title: w.title, icon: (CATS[w.cat] || CATS.media).icon, can: canOpen(w) }); });
    c.videos.forEach(function (v) { if (shown(v) && v.ind.indexOf(code) > -1 && (v.fy ? v.fy === fy : inFy(v.date, fy))) out.push({ t: 'video', id: v.id, title: v.title, icon: 'video', can: canOpen(v) }); });
    c.awards.forEach(function (a) { if (shown(a) && a.ind.indexOf(code) > -1 && inFy(a.date, fy)) out.push({ t: 'award', id: a.id, title: a.title, icon: 'award', can: canOpen(a) }); });
    c.systems.forEach(function (s) { if (shown(s) && s.ind.indexOf(code) > -1) out.push({ t: 'system', id: s.id, title: s.name, icon: 'code', can: true }); });
    return out;
  }
  function evButtons(list) {
    return list.map(function (e) {
      var act = e.t === 'system' ? 'href="#systems"' : 'data-act="open-' + e.t + '" data-id="' + e.id + '"';
      return (e.t === 'system' ? '<a ' : '<button ') + act + ' class="' + (e.can ? '' : 'locked') + '">' + ic(e.can ? e.icon : 'lock', 14) + ' ' + esc(e.title.length > 40 ? e.title.slice(0, 40) + '…' : e.title) + (e.t === 'system' ? '</a>' : '</button>');
    }).join('');
  }
  function indPhotos(x) {
    if (!x.photos || !x.photos.length) return '';
    return '<div class="ph-label">' + ic('image', 14) + ' ภาพประกอบ ' + x.photos.length + '/6</div><div class="ind-photos">' + x.photos.map(function (p, i) {
      return '<button data-act="open-indphoto" data-k="' + x.code + '" data-i="' + i + '" aria-label="ดูภาพ ' + esc(p.cap || x.code + ' ภาพที่ ' + (i + 1)) + '">' + ph(hueOf(x.code + i), 'image', p.cap, '', p.url) + '</button>';
    }).join('') + '</div>';
  }

  /* ---------- หน้าสาธารณะ: แฟ้ม PA ---------- */
  function pPA() {
    var d = docsOf(S.fy); if (!d) return docsWait('pa', 'แฟ้ม PA');
    if (d.pa.hidden || d.pa.locked) return hiddenDoc('pa', d.pa, 'แฟ้ม PA ');
    var st2 = st(), pa = d.pa, ag = d.agree && d.agree.teach ? d.agree : null, g = fyRange(S.fy);
    var tabs = '<div class="tabs" role="tablist">' + [['p1', 'ส่วนที่ 1 งานตามมาตรฐานตำแหน่ง'], ['p2', 'ส่วนที่ 2 ประเด็นท้าทาย'], ['video', 'วิดีโอการสอน'], ['sum', 'สรุปหลักฐาน']].map(function (t) {
      return '<button role="tab" aria-selected="' + (S.paTab === t[0]) + '" data-act="pa-tab" data-k="' + t[0] + '" class="' + (S.paTab === t[0] ? 'on' : '') + '">' + t[1] + '</button>';
    }).join('') + '</div>';
    var body = '';
    if (S.paTab === 'p1') {
      body = [1, 2, 3].map(function (sd) {
        var inds = pa.ind.filter(function (x) { return indSide(x.code) === sd; });
        var rows = inds.map(function (x) {
          var ev = evButtons(evidenceOf(x.code, S.fy));
          return '<div class="indi"><span class="code">' + x.code + '</span><div><div class="nm">' + esc(indName(x.code)) + '</div>' +
            '<div class="tri"><div><b>งาน (Tasks)</b>' + txt(x.task) + '</div><div><b>ผลลัพธ์ (Outcomes)</b>' + txt(x.out) + '</div><div><b>ตัวชี้วัด (Indicators)</b>' + txt(x.kpi) + '</div></div>' +
            indPhotos(x) + '<div class="evid"><span class="small muted">หลักฐาน:</span>' + (ev || '<span class="small muted">ยังไม่มี</span>') + '</div></div></div>';
        }).join('');
        return '<div class="side-block ' + (S.openSide[sd] ? 'open' : '') + '"><button class="side-h" data-act="toggle-side" data-k="' + sd + '" aria-expanded="' + (S.openSide[sd] ? 'true' : 'false') + '"><span class="no">' + sd + '</span><span class="tt">' + SIDES[sd] + '</span><span class="small muted">' + inds.length + ' ตัวชี้วัด</span><span class="chev">' + ic('chev', 18) + '</span></button><div class="side-body">' + rows + '</div></div>';
      }).join('');
    } else if (S.paTab === 'p2') {
      var c = pa.challenge;
      body = '<div class="card" style="display:flex;flex-direction:column;gap:14px"><div><span class="eyebrow">ประเด็นท้าทาย</span><h2 style="margin-top:4px">' + txt(c.title) + '</h2></div>' +
        '<div><h4>1. สภาพปัญหาของผู้เรียนและการจัดการเรียนรู้</h4><p class="muted" style="white-space:pre-line">' + txt(c.problem) + '</p></div>' +
        '<div><h4>2. วิธีการดำเนินการให้บรรลุผล</h4>' + (c.steps.length ? '<ol class="steps">' + c.steps.map(function (s) { return '<li>' + esc(s) + '</li>'; }).join('') + '</ol>' : '<p class="muted">[ยังไม่ได้เขียน]</p>') + '</div>' +
        '<div class="grid2"><div class="note"><b>3.1 ผลลัพธ์เชิงปริมาณ</b><br>' + txt(c.quant) + '</div><div class="note"><b>3.2 ผลลัพธ์เชิงคุณภาพ</b><br>' + txt(c.qual) + '</div></div>' +
        '<div class="row" style="align-items:flex-start"><span class="pill ' + (c.result ? 'good' : 'off') + '">ผลที่เกิดขึ้นจริง</span><span style="flex:1;white-space:pre-line">' + txt(c.result, 'ยังไม่สรุปผล') + '</span></div></div>';
    } else if (S.paTab === 'video') {
      var pv = C().videos.filter(function (v) { return shown(v) && (v.fy ? v.fy === S.fy : inFy(v.date, S.fy)) && (v.pa || v.type === 'pa'); });
      body = '<p class="muted">คลิปที่ตั้งว่า "ใช้ประกอบการประเมิน PA" ของปีงบ ' + S.fy + '</p>' + (pv.length ? '<div class="grid3">' + pv.map(videoCard).join('') + '</div>' : '<div class="card empty">ยังไม่มีวิดีโอประกอบ PA ของปีงบนี้</div>');
    } else {
      body = '<div class="tbl-wrap"><table class="tbl"><thead><tr><th>ตัวชี้วัด</th><th class="r">ภาพ</th><th class="r">หลักฐาน</th><th>ความครบ</th></tr></thead><tbody>' + pa.ind.map(function (x) {
        var n = evidenceOf(x.code, S.fy).length;
        return '<tr><td><b>' + x.code + '</b> ' + esc(indName(x.code)) + '</td><td class="r num">' + x.photos.length + '/6</td><td class="r num">' + n + '</td><td>' + (filled(x) ? '<span class="pill good">เขียนครบ</span>' : '<span class="pill off">ยังไม่ครบ</span>') + (n ? '' : ' <span class="pill warn">ไม่มีหลักฐาน</span>') + '</td></tr>';
      }).join('') + '</tbody></table></div>';
    }
    var load = ag ? loadTotal(ag, 0) + ' / ' + loadTotal(ag, 1) : '-';
    return pub('pa', docStrip('pa') +
      '<div class="card raised" style="margin-top:16px"><div class="pa-head"><div><span class="eyebrow">ผลการพัฒนางานตามข้อตกลง (PA)</span><h1 style="margin-top:4px">ปีงบประมาณ ' + S.fy + '</h1><p class="muted">รอบการประเมิน ' + fd(g[0]) + ' – ' + fd(g[1]) + ' · ประเมินปีละ 1 ครั้ง</p></div><div class="row">' + docPill(pa.status) + (S.admin ? '<a class="btn primary" href="#admin-pa">' + ic('edit', 16) + ' แก้ไขแฟ้ม</a>' : '') + '</div></div>' +
      '<div class="kv"><div>ชื่อ<b>' + esc(st2.name) + '</b></div><div>ตำแหน่ง<b>' + esc(st2.position) + '</b></div><div>กลุ่มสาระ<b>' + blank(st2.subject) + '</b></div><div>ภาระงาน (ภาค 2 / ภาค 1)<b class="num">' + load + ' ชม./สัปดาห์</b></div></div></div>' +
      '<section class="sec">' + tabs + '<div style="display:flex;flex-direction:column;gap:12px">' + body + '</div></section>');
  }
  function indSide(code) { return +code.charAt(0); }

  /* ---------- หน้าสาธารณะ: แบบข้อตกลง ---------- */
  function agreeDoc(d) {
    var a = d.agree, s = st(), pa = d.pa.ind ? d.pa : null, g = fyRange(d.fy);
    function rowsTbl(rows) { return rows.map(function (r) { return '<tr><td>' + esc(r[0]) + '</td><td class="r num">' + r[1] + '</td></tr>'; }).join(''); }
    var teach = a.teach.map(function (tm) { return '<div><b class="small">ภาคเรียนที่ ' + esc(tm.term) + '</b><table class="tbl doc-tbl"><tbody>' + (tm.rows.length ? rowsTbl(tm.rows) : '<tr><td class="muted">-</td><td></td></tr>') + '<tr class="sum"><td>รวม</td><td class="r num">' + sumRows(tm.rows) + '</td></tr></tbody></table></div>'; }).join('');
    var others = LOAD_T.map(function (L) { return '<div><b class="small">' + L[1] + '</b><table class="tbl doc-tbl"><tbody>' + (a[L[0]].length ? rowsTbl(a[L[0]]) : '<tr><td class="muted">-</td><td></td></tr>') + '<tr class="sum"><td>รวม</td><td class="r num">' + sumRows(a[L[0]]) + '</td></tr></tbody></table></div>'; }).join('');
    var totals = a.teach.map(function (tm, i) { return '<div class="kpi"><span class="l">รวมภาระงาน ภาคเรียนที่ ' + esc(tm.term) + '</span><span class="v">' + loadTotal(a, i) + ' <small style="font-size:14px" class="muted">ชม./สัปดาห์</small></span></div>'; }).join('');
    var part1 = pa ? [1, 2, 3].map(function (sd) {
      return '<tr class="side-row"><td colspan="4">ด้านที่ ' + sd + ' ' + SIDES[sd] + '</td></tr>' + pa.ind.filter(function (x) { return indSide(x.code) === sd; }).map(function (x) {
        return '<tr><td><b>' + x.code + '</b> ' + esc(indName(x.code)) + '</td><td>' + txt(x.task, '-') + '</td><td>' + txt(x.out, '-') + '</td><td>' + txt(x.kpi, '-') + '</td></tr>';
      }).join('');
    }).join('') : '<tr><td colspan="4" class="muted">แฟ้ม PA ของปีนี้ไม่ได้เปิดเผย</td></tr>';
    var c = pa ? pa.challenge : { title: '', problem: '', steps: [], quant: '', qual: '' };
    return '<article class="card doc printable"><header class="doc-h">' + seal('doc-seal') + '<div><span class="eyebrow">แบบ PA 1</span><h1>แบบข้อตกลงในการพัฒนางาน (PA)</h1><p>สำหรับข้าราชการครูและบุคลากรทางการศึกษา ตำแหน่ง' + esc(s.position) + ' (' + rankName(a.rank) + ')<br>ประจำปีงบประมาณ พ.ศ. ' + d.fy + ' ระหว่างวันที่ ' + fd(g[0]) + ' ถึงวันที่ ' + fd(g[1]) + '</p></div>' + docPill(a.status) + '</header>' +
      '<section><h3>ผู้จัดทำข้อตกลง</h3><dl class="kvlist"><dt>ชื่อ–สกุล</dt><dd>' + esc(s.name) + '</dd><dt>ตำแหน่ง</dt><dd>' + esc(s.position) + ' · ' + rankName(a.rank) + '</dd><dt>สถานศึกษา</dt><dd>' + esc(s.school) + ' สังกัด ' + esc(s.area) + '</dd><dt>อัตราเงินเดือน</dt><dd class="muted">ไม่แสดงในหน้าเว็บ</dd></dl>' +
        '<div class="rooms">' + ROOMS.map(function (r) { return '<span class="room' + (a.room === r ? ' on' : '') + '">' + ic(a.room === r ? 'check' : 'x', 13) + ' ' + r + '</span>'; }).join('') + '</div></section>' +
      '<section><h3>ส่วนที่ 1 ข้อตกลงในการพัฒนางานตามมาตรฐานตำแหน่ง</h3><h4>1. ภาระงาน</h4><p class="small muted">1.1 ชั่วโมงสอนตามตารางสอน (ชั่วโมง/สัปดาห์)</p><div class="grid2" style="align-items:start">' + teach + '</div><div class="grid3" style="align-items:start;margin-top:12px">' + others + '</div><div class="grid2" style="margin-top:12px">' + totals + '</div>' +
        '<h4 style="margin-top:18px">2. งานที่จะปฏิบัติตามมาตรฐานตำแหน่ง</h4><div class="tbl-wrap"><table class="tbl doc-tbl part1"><thead><tr><th style="width:26%">ตัวชี้วัด</th><th>งาน (Tasks)</th><th>ผลลัพธ์ (Outcomes)</th><th>ตัวชี้วัด (Indicators)</th></tr></thead><tbody>' + part1 + '</tbody></table></div></section>' +
      '<section><h3>ส่วนที่ 2 ข้อตกลงในการพัฒนางานที่เป็นประเด็นท้าทายในการพัฒนาผลลัพธ์การเรียนรู้ของผู้เรียน</h3><p><b>ประเด็นท้าทาย</b> ' + txt(c.title, '-') + '</p><p style="white-space:pre-line"><b>1. สภาพปัญหา</b> ' + txt(c.problem, '-') + '</p><p><b>2. วิธีการดำเนินการให้บรรลุผล</b></p>' + (c.steps.length ? '<ol>' + c.steps.map(function (x) { return '<li>' + esc(x) + '</li>'; }).join('') + '</ol>' : '<p class="muted">-</p>') +
        '<p><b>3. ผลลัพธ์การพัฒนาที่คาดหวัง</b></p><div class="grid2"><div class="note"><b>3.1 เชิงปริมาณ</b><br>' + txt(c.quant, '-') + '</div><div class="note"><b>3.2 เชิงคุณภาพ</b><br>' + txt(c.qual, '-') + '</div></div></section>' +
      '<section class="sign-row"><div><span class="small muted">ผู้จัดทำข้อตกลง</span><div class="sig-line"></div><b>(' + esc(s.name) + ')</b><span class="small">ตำแหน่ง ' + esc(s.position) + '</span><span class="small muted">' + (a.signedAt ? 'วันที่ ' + fd(a.signedAt) : 'วันที่ ........................') + '</span></div>' +
        '<div><span class="small muted">ความเห็นของผู้บริหารสถานศึกษา</span><div class="opinion">' + (a.opinion ? ic(a.opinion === 'ไม่เห็นชอบ' ? 'x' : 'check', 15) + ' ' + esc(a.opinion) + (a.note ? ' · ' + esc(a.note) : '') : '<span class="muted">☐ เห็นชอบ ☐ ไม่เห็นชอบ</span>') + '</div><div class="sig-line"></div><b>(' + (a.approver ? esc(a.approver) : '..................................................') + ')</b><span class="small">' + esc(a.approverPos || 'ผู้อำนวยการสถานศึกษา') + '</span><span class="small muted">' + (a.approvedAt ? 'วันที่ ' + fd(a.approvedAt) : 'วันที่ ........................') + '</span></div></section></article>';
  }
  function pAgreement() {
    var d = docsOf(S.fy); if (!d) return docsWait('agreement', 'ข้อตกลง PA');
    if (d.agree.hidden || d.agree.locked) return hiddenDoc('agreement', d.agree, 'ข้อตกลง PA ');
    return pub('pa', docStrip('agreement') +
      '<div class="row" style="justify-content:space-between;margin:16px 0 10px"><div><h1 style="font-size:24px">ข้อตกลงในการพัฒนางาน ปีงบประมาณ ' + S.fy + '</h1><p class="muted small">จัดทำและเสนอผู้บริหารต้นปีงบประมาณ · ส่วนที่ 1 ข้อ 2 และส่วนที่ 2 ใช้ข้อความชุดเดียวกับแฟ้ม PA</p></div><div class="row"><button class="btn" data-act="print">' + ic('print', 16) + ' พิมพ์ / บันทึก PDF</button>' + (S.admin ? '<a class="btn primary" href="#admin-agreement">' + ic('edit', 16) + ' แก้ไข</a>' : '') + '</div></div>' + agreeDoc(d));
  }

  /* ---------- หน้าสาธารณะ: ID Plan ---------- */
  function idpScores(d) {
    return COMPS.map(function (gr, gi) {
      return '<div style="display:flex;flex-direction:column;gap:8px"><b class="small">' + gr[0] + '</b>' + gr[1].map(function (n, i) {
        var v = d.scores[gi][i];
        return '<div class="sc-show"><span class="small">' + esc(n) + '</span><span class="row" style="gap:8px;flex-wrap:nowrap"><span style="flex:1;min-width:80px">' + prog(v / 5 * 100, v >= 4 ? 'good' : '') + '</span><b class="num">' + (v || '-') + '</b></span></div>';
      }).join('') + '</div>';
    }).join('');
  }
  function pIdplan() {
    var dd = docsOf(S.fy); if (!dd) return docsWait('idplan', 'ID Plan');
    if (dd.idp.hidden || dd.idp.locked) return hiddenDoc('idplan', dd.idp, 'ID Plan ');
    var d = dd.idp, s = st(), hrs = fyHours(S.fy), hp = d.hoursTarget ? hrs / d.hoursTarget * 100 : 0;
    var trains = C().awards.filter(function (a) { return shown(a) && (a.type === 'training' || a.hours) && inFy(a.date, S.fy); }).sort(byDate);
    var goals = d.goals.map(function (g, i) {
      var p = Math.round(g.done / g.of * 100);
      return '<tr><td class="num">' + (i + 1) + '</td><td><b>' + txt(g.t, '-') + '</b><div class="small muted">' + esc(g.comp) + '</div></td><td>' + txt(g.how, '-') + '</td><td class="small" style="white-space:nowrap">' + txt(g.when, '-') + '</td><td>' + txt(g.target, '-') + '<div class="row small" style="gap:4px;margin-top:4px">' + indChips(g.ind) + '</div></td><td style="min-width:120px"><span class="small">' + g.done + '/' + g.of + ' ' + esc(g.unit) + ' · ' + p + '%</span>' + prog(p, p >= 100 ? 'good' : '') + '</td></tr>';
    }).join('');
    return pub('pa', docStrip('idplan') +
      '<div class="card raised" style="margin-top:16px"><div class="pa-head"><div><span class="eyebrow">Individual Development Plan</span><h1 style="margin-top:4px">แผนพัฒนาตนเองรายบุคคล (ID Plan)</h1><p class="muted">' + esc(d.label) + ' · ' + esc(s.name) + ' ตำแหน่ง ' + esc(s.position) + '</p></div><div class="row">' + docPill(d.status) + '<button class="btn" data-act="print">' + ic('print', 16) + ' พิมพ์</button>' + (S.admin ? '<a class="btn primary" href="#admin-idplan">' + ic('edit', 16) + ' แก้ไข</a>' : '') + '</div></div></div>' +
      '<section class="sec"><div class="grid4"><div class="kpi"><span class="l">ชั่วโมงพัฒนาตนเอง</span><span class="v">' + hrs + '<small class="muted" style="font-size:15px"> / ' + d.hoursTarget + ' ชม.</small></span>' + prog(hp, hp >= 100 ? 'good' : '') + '</div><div class="kpi"><span class="l">เป้าหมายการพัฒนา</span><span class="v">' + d.goals.filter(function (g) { return g.done >= g.of; }).length + ' / ' + d.goals.length + ' สำเร็จ</span></div><div class="kpi"><span class="l">การอบรมในปีงบนี้</span><span class="v">' + trains.length + ' รายการ</span></div><div class="kpi"><span class="l">สมรรถนะที่ประเมินตนเอง</span><span class="v">11 ด้าน</span></div></div></section>' +
      '<section class="sec"><div class="stat-grid"><div class="card"><h3>1. ประเมินตนเองตามสมรรถนะ</h3><div class="sub small muted" style="margin-bottom:10px">ระดับ 1–5 · 5 = ปฏิบัติได้ดีเยี่ยม</div><div style="display:flex;flex-direction:column;gap:16px">' + idpScores(d) + '</div></div>' +
      '<div style="display:flex;flex-direction:column;gap:14px"><div class="card"><h3>2. จุดเด่น</h3><p style="margin-top:6px;white-space:pre-line">' + txt(d.strengths, '-') + '</p></div><div class="card"><h3>3. จุดที่ต้องพัฒนา</h3><p style="margin-top:6px;white-space:pre-line">' + txt(d.improve, '-') + '</p></div><div class="card"><h3>6. การนำผลการพัฒนาไปใช้</h3><p style="margin-top:6px;white-space:pre-line">' + txt(d.use, '-') + '</p></div></div></div></section>' +
      '<section class="sec"><div class="card"><h3 style="margin-bottom:8px">4–5. เป้าหมาย วิธีการ และระยะเวลาการพัฒนา</h3>' + (goals ? '<div class="tbl-wrap"><table class="tbl"><thead><tr><th>#</th><th>เรื่องที่พัฒนา / สมรรถนะ</th><th>วิธีการพัฒนา</th><th>ช่วงเวลา</th><th>ผลที่คาดว่าจะได้รับ / ตัวชี้วัด PA</th><th>ความคืบหน้า</th></tr></thead><tbody>' + goals + '</tbody></table></div>' : '<p class="small muted">ยังไม่มีเป้าหมาย</p>') + '</div></section>' +
      '<section class="sec"><div class="card"><h3 style="margin-bottom:8px">การอบรมและพัฒนาที่นับชั่วโมงในปีงบนี้</h3>' + (trains.length ? '<div class="tbl-wrap"><table class="tbl"><thead><tr><th>วันที่</th><th>หลักสูตร</th><th>หน่วยงาน</th><th class="r">ชม.</th></tr></thead><tbody>' + trains.map(function (a) { return '<tr><td class="num" style="white-space:nowrap">' + fd(a.date) + '</td><td><button class="lnk" data-act="open-award" data-id="' + a.id + '">' + esc(a.title) + '</button></td><td class="muted">' + blank(a.org) + '</td><td class="r num">' + (a.hours || '-') + '</td></tr>'; }).join('') + '</tbody></table></div>' : '<p class="small muted">ยังไม่มีการอบรมที่บันทึกในปีงบนี้ เพิ่มได้ที่เมนูรางวัล/อบรม</p>') + '</div></section>');
  }

  /* ---------- หลังบ้าน: แฟ้ม PA ---------- */
  function aPA() {
    var d = docsOf(S.fy); if (!d) return docsWait('admin-pa', 'แฟ้ม PA');
    var pa = d.pa, nFill = pa.ind.filter(filled).length, nPh = pa.ind.reduce(function (t, x) { return t + x.photos.length; }, 0), c = pa.challenge;
    var cards = pa.ind.map(function (x) {
      var n = evidenceOf(x.code, S.fy).length, slots = '';
      for (var i = 0; i < 6; i++) {
        var p = x.photos[i];
        if (p) slots += '<div class="slot"><div class="ph" style="--h:' + hueOf(x.code + i) + '"><img src="' + esc(p.url) + '" alt="' + esc(p.cap) + '"><span class="slot-no">' + (i + 1) + '</span><button class="iph-x" data-act="ind-photo-del" data-k="' + x.code + '" data-i="' + i + '" aria-label="ลบรูปที่ ' + (i + 1) + ' ตัวชี้วัด ' + x.code + '">' + ic('x', 14) + '</button></div>' +
          '<input class="inp slot-cap" data-capk="' + x.code + '" data-capi="' + i + '" value="' + esc(p.cap) + '" placeholder="คำบรรยายภาพ" aria-label="คำบรรยายรูปที่ ' + (i + 1) + ' ตัวชี้วัด ' + x.code + '">' +
          '<span class="row" style="gap:2px"><button class="btn icon sm" data-act="ind-photo-mv" data-k="' + x.code + '" data-i="' + i + '" data-d="-1"' + (i === 0 ? ' disabled' : '') + ' aria-label="เลื่อนไปก่อนหน้า">' + ic('left', 13) + '</button><button class="btn icon sm" data-act="ind-photo-mv" data-k="' + x.code + '" data-i="' + i + '" data-d="1"' + (i === x.photos.length - 1 ? ' disabled' : '') + ' aria-label="เลื่อนไปถัดไป">' + ic('chev', 13) + '</button></span></div>';
        else slots += '<label class="slot empty" for="indup-' + x.code + '">' + ic('plus', 24) + '<span>เพิ่มรูป ช่องที่ ' + (i + 1) + '</span></label>';
      }
      return '<div class="card pa-card" id="pa-' + x.code.replace('.', '-') + '"><div class="pa-card-h"><span class="code">' + x.code + '</span><div style="flex:1;min-width:220px"><b>' + esc(indName(x.code)) + '</b><div class="small muted">' + (x.task ? esc(x.task.length > 120 ? x.task.slice(0, 120) + '…' : x.task) : '<span style="color:var(--warn)">ยังไม่ได้เขียนงาน ผลลัพธ์ ตัวชี้วัด</span>') + '</div></div>' +
        (filled(x) ? '<span class="pill good">เขียนครบ</span>' : '<span class="pill off">ยังไม่ครบ</span>') + '<span class="pill ' + (n ? 'good' : 'warn') + '">หลักฐาน ' + n + ' ชิ้น</span><button class="btn sm" data-act="pa-edit" data-k="' + x.code + '">' + ic('edit', 15) + ' เขียนข้อความ</button></div>' +
        '<div class="ph-label">' + ic('image', 14) + ' ภาพประกอบ ' + x.photos.length + '/6 · กดช่องว่างเพื่อเพิ่ม เลือกหลายรูปพร้อมกันได้</div><div class="slots">' + slots + '</div><input type="file" id="indup-' + x.code + '" data-indup="' + x.code + '" accept="image/jpeg,image/png,image/webp" multiple style="display:none"></div>';
    }).join('');
    var sideNav = '<div class="row" style="gap:4px">' + pa.ind.map(function (x) { return '<a class="chip ' + (filled(x) ? 'ind' : '') + '" href="javascript:void 0" data-act="pa-jump" data-k="' + x.code + '">' + x.code + '</a>'; }).join('') + '</div>';
    return adminShell('admin-pa', 'แฟ้ม PA ปีงบประมาณ ' + S.fy, 'งาน ผลลัพธ์ ตัวชี้วัด 15 ข้อ ภาพประกอบข้อละ 6 ช่อง และประเด็นท้าทาย · ข้อความชุดนี้ใช้ในแบบข้อตกลงด้วย',
      '<button class="btn" data-act="docs-copy" data-k="pa">' + ic('copy', 16) + ' คัดลอกข้อความจากปี ' + (S.fy - 1) + '</button><a class="btn" href="#pa">' + ic('eye', 16) + ' ดูแบบสาธารณะ</a>',
      docStrip('pa') +
      '<div class="grid4" style="margin-top:14px"><div class="kpi"><span class="l">เขียนข้อความครบ</span><span class="v">' + nFill + ' / 15</span>' + prog(nFill / 15 * 100, nFill === 15 ? 'good' : '') + '</div><div class="kpi"><span class="l">ภาพประกอบ</span><span class="v">' + nPh + ' / 90</span></div><div class="kpi"><span class="l">ประเด็นท้าทาย</span><span class="v" style="font-size:18px">' + (c.title ? 'เขียนแล้ว' : 'ยังไม่เขียน') + '</span></div>' +
        '<div class="kpi"><span class="l">สถานะแฟ้ม</span><span style="margin-top:6px">' + docPill(pa.status) + '</span><span>' + (pa.status === 'ready' ? '<button class="btn sm" data-act="pa-status" data-k="draft">กลับเป็นร่าง</button>' : '<button class="btn sm primary" data-act="pa-status" data-k="ready">' + ic('check', 14) + ' พร้อมให้ประเมิน</button>') + '</span></div></div>' +
      '<div class="card" style="margin-top:14px;display:flex;flex-direction:column;gap:8px"><div class="row" style="justify-content:space-between"><div><span class="eyebrow">ส่วนที่ 2</span><h3>ประเด็นท้าทาย: ' + txt(c.title) + '</h3></div><button class="btn primary" data-act="ch-edit">' + ic('edit', 16) + ' เขียนประเด็นท้าทาย</button></div><p class="small muted">วิธีดำเนินการ ' + c.steps.length + ' ขั้น · ผลที่เกิดขึ้นจริง: ' + (c.result ? 'สรุปแล้ว' : 'ยังไม่สรุป') + '</p></div>' +
      '<div class="card" style="margin-top:14px;padding:12px 14px"><span class="small muted">ไปที่ตัวชี้วัด</span> ' + sideNav + '</div>' +
      '<div style="display:flex;flex-direction:column;gap:14px;margin-top:14px">' + cards + '</div>');
  }
  function paIndForm(code) {
    var x = find(docsOf(S.fy).pa.ind, 'code', code); if (!x) return;
    var ev = evidenceOf(code, S.fy);
    openModal('ตัวชี้วัด ' + code + ' ' + esc(indName(code)),
      '<div class="field"><label for="pe-task">งาน (Tasks) ที่จะปฏิบัติ</label><textarea id="pe-task" class="inp" rows="4">' + esc(x.task) + '</textarea></div>' +
      '<div class="field"><label for="pe-out">ผลลัพธ์ (Outcomes) ที่คาดหวัง</label><textarea id="pe-out" class="inp" rows="3">' + esc(x.out) + '</textarea></div>' +
      '<div class="field"><label for="pe-kpi">ตัวชี้วัด (Indicators)</label><textarea id="pe-kpi" class="inp" rows="3">' + esc(x.kpi) + '</textarea></div>' +
      '<div class="note small">' + ic('folder', 14) + ' หลักฐานที่ผูกตัวชี้วัดนี้ในปีงบ ' + S.fy + ': ' + (ev.length ? ev.map(function (e) { return esc(e.title); }).join(' · ') : 'ยังไม่มี เพิ่มได้จากคลังผลงาน วิดีโอ รางวัล โดยติ๊กตัวชี้วัด ' + code) + '</div><div id="f-err"></div>',
      '<button class="btn" data-act="close-modal">ยกเลิก</button><button class="btn primary" data-act="pa-save" data-k="' + code + '">' + ic('check', 16) + ' บันทึก</button>', true);
  }
  function chForm() {
    var c = docsOf(S.fy).pa.challenge;
    openModal('ส่วนที่ 2 ประเด็นท้าทาย ปีงบ ' + S.fy,
      '<div class="field"><label for="ch-title">ประเด็นท้าทาย</label><input id="ch-title" class="inp" value="' + esc(c.title) + '"></div>' +
      '<div class="field"><label for="ch-problem">1. สภาพปัญหาของผู้เรียนและการจัดการเรียนรู้</label><textarea id="ch-problem" class="inp" rows="4">' + esc(c.problem) + '</textarea></div>' +
      '<div class="field"><label for="ch-steps">2. วิธีการดำเนินการให้บรรลุผล (บรรทัดละ 1 ขั้น)</label><textarea id="ch-steps" class="inp" rows="6">' + esc(c.steps.join('\n')) + '</textarea></div>' +
      '<div class="grid2"><div class="field"><label for="ch-quant">3.1 ผลลัพธ์เชิงปริมาณ</label><textarea id="ch-quant" class="inp" rows="3">' + esc(c.quant) + '</textarea></div><div class="field"><label for="ch-qual">3.2 ผลลัพธ์เชิงคุณภาพ</label><textarea id="ch-qual" class="inp" rows="3">' + esc(c.qual) + '</textarea></div></div>' +
      '<div class="field"><label for="ch-result">ผลที่เกิดขึ้นจริง (เขียนตอนสรุปผลปลายปี)</label><textarea id="ch-result" class="inp" rows="3">' + esc(c.result) + '</textarea></div><div id="f-err"></div>',
      '<button class="btn" data-act="close-modal">ยกเลิก</button><button class="btn primary" data-act="ch-save">' + ic('check', 16) + ' บันทึก</button>', true);
  }
  function savePAPart(data, msg, btn) {
    data.fy = S.fy;
    if (btn) busy(btn, true);
    api('savePA', data, { loader: 'กำลังบันทึกแฟ้ม PA' }, function (err, res) {
      if (btn) busy(btn, false);
      if (err) { formErr(err); return; }
      setDocs(res); closeModal(); render(); toast(msg || 'บันทึกแล้ว');
    });
  }
  function uploadIndPhotos(code, files) {
    var x = find(docsOf(S.fy).pa.ind, 'code', code), room = 6 - x.photos.length;
    var list = Array.prototype.slice.call(files || []).filter(function (f) { return /^image\/(jpeg|png|webp)$/.test(f.type); });
    if (!list.length) { toast('รองรับเฉพาะ JPG PNG WebP'); return; }
    if (room <= 0) { toast('ตัวชี้วัด ' + code + ' มีภาพครบ 6 ภาพแล้ว'); return; }
    if (list.length > room) { toast('เพิ่มได้อีก ' + room + ' ภาพ ระบบจะใช้ ' + room + ' ภาพแรก'); list = list.slice(0, room); }
    var total = list.length, done = 0, fy = S.fy;
    showProgress('กำลังอัปโหลดภาพประกอบตัวชี้วัด ' + code);
    (function step() {
      var f = list.shift();
      if (!f) { hideLoader(true); render(); toast('เพิ่มภาพประกอบ ' + done + ' ภาพ'); return; }
      setProgress(done / total * 100, 'ภาพที่ ' + (done + 1) + '/' + total + ' · ' + f.name);
      prepImage(f, 1600, 1600, false, function (err, img) {
        if (err) { toast(err); return step(); }
        api('addIndPhoto', { fy: fy, code: code, mime: img.mime, b64: img.b64, name: f.name.replace(/\.[^.]+$/, ''), caption: '', last: !list.length }, { loader: false, timeout: 120000 }, function (e2, res) {
          if (e2) { hideLoader(true); toast(e2); render(); return; }
          done++; var dd = docsOf(fy); if (dd) find(dd.pa.ind, 'code', code).photos = res.photos;
          setProgress(done / total * 100, 'อัปโหลดแล้ว ' + done + '/' + total); step();
        });
      });
    })();
  }
  function saveIndPhotos(code, photos, msg) {
    api('saveIndPhotos', { fy: S.fy, code: code, photos: photos.map(function (p) { return { id: p.id, cap: p.cap || '' }; }) }, { loader: 'กำลังบันทึกภาพ' }, function (err, res) {
      if (err) { toast(err); return; }
      find(docsOf(S.fy).pa.ind, 'code', code).photos = res.photos; render(); if (msg) toast(msg);
    });
  }

  /* ---------- หลังบ้าน: ข้อตกลง ---------- */
  function agDraft() { if (!S.agDraft || S.agDraft.fy !== S.fy) S.agDraft = { fy: S.fy, data: clone(docsOf(S.fy).agree), dirty: false }; return S.agDraft; }
  function rowsEditor(path, rows) {
    return rows.map(function (r, i) {
      return '<div class="ld-row"><input class="inp" data-ag="' + path + '.' + i + '.0" value="' + esc(r[0]) + '" aria-label="รายการ"><input class="inp num" type="number" min="0" max="40" step="0.5" data-ag="' + path + '.' + i + '.1" value="' + r[1] + '" aria-label="ชั่วโมงต่อสัปดาห์"><button class="btn icon sm danger" data-act="ag-del" data-k="' + path + '" data-i="' + i + '" aria-label="ลบแถว">' + ic('trash', 15) + '</button></div>';
    }).join('') + '<div class="row" style="justify-content:space-between"><button class="btn sm" data-act="ag-add" data-k="' + path + '">' + ic('plus', 14) + ' เพิ่มแถว</button><span class="small">รวม <b class="num" data-sum="' + path + '">' + sumRows(rows) + '</b> ชม./สัปดาห์</span></div>';
  }
  function docSaveBar(dirty, act) {
    return dirty ? '<div class="dirty-bar" role="status"><span>' + ic('edit', 16) + ' มีการแก้ไขที่ยังไม่บันทึก</span><span style="flex:1"></span><button class="btn sm" data-act="' + act + '-discard">ยกเลิกการแก้ไข</button><button class="btn sm primary" data-act="' + act + '-save">' + ic('check', 15) + ' บันทึก</button></div>' : '';
  }
  function aAgreement() {
    var dd = docsOf(S.fy); if (!dd) return docsWait('admin-agreement', 'ข้อตกลง PA');
    var dr = agDraft(), a = dr.data, nFill = dd.pa.ind.filter(filled).length;
    var teach = a.teach.map(function (tm, i) { return '<div class="card" style="display:flex;flex-direction:column;gap:8px"><h4>1.1 ชั่วโมงสอนตามตารางสอน ภาคเรียนที่ <input class="inp" data-ag="teach.' + i + '.term" value="' + esc(tm.term) + '" style="width:90px;display:inline-block;padding:3px 8px" aria-label="ภาคเรียน"></h4>' + rowsEditor('teach.' + i + '.rows', tm.rows) + '</div>'; }).join('');
    var others = LOAD_T.map(function (L) { return '<div class="card" style="display:flex;flex-direction:column;gap:8px"><h4>' + L[1] + '</h4>' + rowsEditor(L[0], a[L[0]]) + '</div>'; }).join('');
    var tot = a.teach.map(function (tm, i) { return '<div class="kpi"><span class="l">รวมภาระงาน ภาคเรียนที่ ' + esc(tm.term) + '</span><span class="v" data-total="' + i + '">' + loadTotal(a, i) + ' ชม./สัปดาห์</span></div>'; }).join('');
    var stBtns = (a.status === 'draft' ? '<button class="btn primary" data-act="ag-status" data-k="sent">' + ic('upload', 16) + ' ลงนามและเสนอผู้บริหาร</button>' : '') +
      (a.status === 'sent' ? '<button class="btn primary" data-act="ag-status" data-k="approved">' + ic('check', 16) + ' บันทึกว่าผู้บริหารเห็นชอบแล้ว</button><button class="btn" data-act="ag-status" data-k="draft">กลับไปแก้ไขร่าง</button>' : '') +
      (a.status === 'approved' ? '<button class="btn" data-act="ag-status" data-k="draft">' + ic('edit', 16) + ' เปิดแก้ไขใหม่ (ต้องเสนออีกครั้ง)</button>' : '');
    return adminShell('admin-agreement', 'ข้อตกลง PA ปีงบประมาณ ' + S.fy, 'แบบ PA 1 ที่ทำต้นปีงบ · ภาระงาน ประเภทห้องเรียน และการลงนาม',
      (a.isNew || dr.dirty ? '' : '') + '<button class="btn" data-act="docs-copy" data-k="agree">' + ic('copy', 16) + ' คัดลอกจากปี ' + (S.fy - 1) + '</button><a class="btn" href="#agreement">' + ic('eye', 16) + ' ดูหน้าเอกสาร</a><button class="btn primary" data-act="ag-save"' + (dr.dirty ? '' : ' disabled') + '>' + ic('check', 16) + ' บันทึก</button>',
      docStrip('agreement') +
      '<div class="card" style="display:flex;flex-direction:column;gap:12px;margin-top:14px"><div class="row" style="justify-content:space-between"><h3>สถานะเอกสาร</h3>' + docPill(a.status) + '</div>' + statusFlow(a.status) + '<div class="row">' + stBtns + '</div>' +
        '<div class="grid3"><div class="field"><label for="ag-rank">วิทยฐานะ</label>' + sel('ag-rank', RANKS, a.rank, ' data-ag="rank"') + '</div><div class="field"><label for="ag-room">ประเภทห้องเรียน</label>' + sel('ag-room', ROOMS.map(function (r) { return [r, r]; }), a.room, ' data-ag="room"') + '</div><div class="field"><label for="ag-signed">วันที่ลงนามผู้จัดทำ</label><input id="ag-signed" type="date" class="inp" data-ag="signedAt" value="' + a.signedAt + '"></div></div>' +
        '<div class="grid3"><div class="field"><label for="ag-apv">ชื่อผู้บริหาร</label><input id="ag-apv" class="inp" data-ag="approver" value="' + esc(a.approver) + '"></div><div class="field"><label for="ag-apvpos">ตำแหน่งผู้บริหาร</label><input id="ag-apvpos" class="inp" data-ag="approverPos" value="' + esc(a.approverPos) + '"></div><div class="field"><label for="ag-op">ความเห็นผู้บริหาร</label>' + sel('ag-op', OPINIONS, a.opinion, ' data-ag="opinion"') + '</div></div>' +
        '<div class="grid2"><div class="field"><label for="ag-apd">วันที่ผู้บริหารเห็นชอบ</label><input id="ag-apd" type="date" class="inp" data-ag="approvedAt" value="' + a.approvedAt + '"></div><div class="field"><label for="ag-note">ข้อเสนอแนะของผู้บริหาร (ถ้ามี)</label><input id="ag-note" class="inp" data-ag="note" value="' + esc(a.note) + '"></div></div></div>' +
      '<h3 style="margin:20px 0 10px">ส่วนที่ 1 ข้อ 1 ภาระงาน (ชั่วโมง/สัปดาห์)</h3><div class="grid2" style="align-items:start">' + teach + '</div><div class="grid3" style="align-items:start;margin-top:14px">' + others + '</div><div class="grid2" style="margin-top:14px">' + tot + '</div>' +
      '<div class="card" style="margin-top:16px;display:flex;flex-direction:column;gap:8px"><h3>ส่วนที่ 1 ข้อ 2 และส่วนที่ 2</h3><p class="small muted">งาน ผลลัพธ์ ตัวชี้วัด 15 ข้อ และประเด็นท้าทาย เขียนที่แฟ้ม PA ของปีนี้ที่เดียว เอกสารข้อตกลงจะดึงข้อความชุดเดียวกัน ไม่ต้องพิมพ์ซ้ำ</p><div class="row"><a class="btn" href="#admin-pa">' + ic('file', 16) + ' แก้ไขในแฟ้ม PA</a><span class="small muted">เขียนครบ ' + nFill + ' จาก 15 ข้อ</span></div></div>' + docSaveBar(dr.dirty, 'ag'));
  }
  function saveAgree(status) {
    var dr = agDraft(), body = { fy: S.fy, kind: 'agree' };
    if (dr.dirty) body.data = dr.data;
    if (status) body.status = status;
    api('saveDoc', body, { loader: 'กำลังบันทึกข้อตกลง' }, function (err, res) {
      if (err) { toast(err); return; }
      setDocs(res); render(); toast(status ? 'สถานะข้อตกลง: ' + DOC_ST[status][0] : 'บันทึกข้อตกลงแล้ว');
    });
  }

  /* ---------- หลังบ้าน: ID Plan ---------- */
  function idpDraft() { if (!S.idpDraft || S.idpDraft.fy !== S.fy) S.idpDraft = { fy: S.fy, data: clone(docsOf(S.fy).idp), dirty: false }; return S.idpDraft; }
  function aIdplan() {
    var dd = docsOf(S.fy); if (!dd) return docsWait('admin-idplan', 'ID Plan');
    var dr = idpDraft(), d = dr.data, hrs = fyHours(S.fy);
    var scores = COMPS.map(function (gr, gi) {
      return '<div><b class="small">' + gr[0] + '</b>' + gr[1].map(function (n, i) {
        return '<div class="sc-row"><span>' + esc(n) + '</span><div class="seg sm" role="group" aria-label="' + esc(n) + '">' + [1, 2, 3, 4, 5].map(function (v) { return '<button type="button" data-act="idp-score" data-k="' + gi + '.' + i + '" data-v="' + v + '" class="' + (d.scores[gi][i] === v ? 'on' : '') + '" aria-pressed="' + (d.scores[gi][i] === v) + '">' + v + '</button>'; }).join('') + '</div></div>';
      }).join('') + '</div>';
    }).join('');
    var compOpts = []; COMPS.forEach(function (g) { g[1].forEach(function (n) { compOpts.push(n); }); });
    var goals = d.goals.map(function (g, i) {
      return '<div class="card idp-edit"><div class="row" style="justify-content:space-between"><span class="eyebrow">เป้าหมายที่ ' + (i + 1) + '</span><button class="btn icon sm danger" data-act="idp-del" data-i="' + i + '" aria-label="ลบเป้าหมายที่ ' + (i + 1) + '">' + ic('trash', 15) + '</button></div>' +
        '<div class="field"><label>เรื่องที่จะพัฒนา</label><input class="inp" data-idp="goals.' + i + '.t" value="' + esc(g.t) + '"></div>' +
        '<div class="grid2"><div class="field"><label>สมรรถนะที่พัฒนา</label><select class="inp" data-idp="goals.' + i + '.comp">' + compOpts.map(function (o) { return '<option' + (o === g.comp ? ' selected' : '') + '>' + esc(o) + '</option>'; }).join('') + '</select></div><div class="field"><label>ช่วงเวลา</label><input class="inp" data-idp="goals.' + i + '.when" value="' + esc(g.when) + '" placeholder="พ.ย. 69 – ก.พ. 70"></div></div>' +
        '<div class="field"><label>วิธีการพัฒนา</label><input class="inp" data-idp="goals.' + i + '.how" value="' + esc(g.how) + '"></div>' +
        '<div class="field"><label>ผลที่คาดว่าจะได้รับ</label><input class="inp" data-idp="goals.' + i + '.target" value="' + esc(g.target) + '"></div>' +
        '<div class="grid3"><div class="field"><label>ทำแล้ว</label><input class="inp num" type="number" min="0" data-idp="goals.' + i + '.done" value="' + g.done + '"></div><div class="field"><label>เป้าหมาย</label><input class="inp num" type="number" min="1" data-idp="goals.' + i + '.of" value="' + g.of + '"></div><div class="field"><label>หน่วย</label><input class="inp" data-idp="goals.' + i + '.unit" value="' + esc(g.unit) + '"></div></div>' +
        '<div class="field"><label>ผูกตัวชี้วัด PA</label><div class="row" style="gap:4px">' + IND_BASE.map(function (x) { var on = g.ind.indexOf(x.code) > -1; return '<button type="button" class="chip' + (on ? ' ind' : '') + '" style="cursor:pointer;border:1px solid var(--line)" data-act="idp-ind" data-i="' + i + '" data-k="' + x.code + '" aria-pressed="' + on + '" title="' + esc(x.name) + '">' + x.code + '</button>'; }).join('') + '</div></div></div>';
    }).join('');
    return adminShell('admin-idplan', 'ID Plan ปีงบประมาณ ' + S.fy, 'แผนพัฒนาตนเองรายบุคคล ผูกกับปีงบเดียวกับข้อตกลงและแฟ้ม PA',
      '<button class="btn" data-act="docs-copy" data-k="idp">' + ic('copy', 16) + ' คัดลอกจากปี ' + (S.fy - 1) + '</button><a class="btn" href="#idplan">' + ic('eye', 16) + ' ดูหน้าเอกสาร</a><button class="btn primary" data-act="idp-save"' + (dr.dirty ? '' : ' disabled') + '>' + ic('check', 16) + ' บันทึก</button>',
      docStrip('idplan') +
      '<div class="grid2" style="align-items:start;margin-top:14px"><div style="display:flex;flex-direction:column;gap:14px"><div class="card" style="display:flex;flex-direction:column;gap:10px"><div class="row" style="justify-content:space-between"><h3>ข้อมูลแผน</h3>' + docPill(d.status) + '</div>' +
        '<div class="grid2"><div class="field"><label for="idp-label">ชื่อช่วงเวลาที่แสดง</label><input id="idp-label" class="inp" data-idp="label" value="' + esc(d.label) + '"><span class="hint">เช่น ปีการศึกษา 2569 · ระบบยังจัดเก็บตามปีงบ ' + S.fy + '</span></div><div class="field"><label for="idp-st">สถานะ</label>' + sel('idp-st', [['draft', 'ร่าง'], ['sent', 'เสนอผู้บริหารแล้ว'], ['approved', 'ผู้บริหารเห็นชอบ']], d.status) + '</div></div>' +
        '<div class="field"><label for="idp-hrs">เป้าหมายชั่วโมงพัฒนาตนเอง</label><input id="idp-hrs" class="inp num" type="number" min="0" data-idp="hoursTarget" value="' + d.hoursTarget + '"><span class="hint">ตอนนี้นับได้ ' + hrs + ' ชม. จากรางวัล/อบรมและผลงานประเภทอบรมในปีงบนี้</span></div>' +
        '<div class="field"><label>จุดเด่น</label><textarea class="inp" data-idp="strengths">' + esc(d.strengths) + '</textarea></div><div class="field"><label>จุดที่ต้องพัฒนา</label><textarea class="inp" data-idp="improve">' + esc(d.improve) + '</textarea></div><div class="field"><label>การนำผลการพัฒนาไปใช้</label><textarea class="inp" data-idp="use">' + esc(d.use) + '</textarea></div></div>' +
        '<div class="card" style="display:flex;flex-direction:column;gap:10px"><h3>ประเมินตนเองตามสมรรถนะ (1–5)</h3>' + scores + '</div></div>' +
      '<div style="display:flex;flex-direction:column;gap:14px">' + (goals || '<div class="card empty">ยังไม่มีเป้าหมายการพัฒนา</div>') + '<button class="btn" data-act="idp-add">' + ic('plus', 16) + ' เพิ่มเป้าหมาย</button></div></div>' + docSaveBar(dr.dirty, 'idp'));
  }
  function saveIdp(status) {
    var dr = idpDraft(), body = { fy: S.fy, kind: 'idp' };
    if (dr.dirty) body.data = dr.data;
    if (status) body.status = status;
    api('saveDoc', body, { loader: 'กำลังบันทึก ID Plan' }, function (err, res) {
      if (err) { toast(err); return; }
      setDocs(res); render(); toast(status ? 'สถานะ ID Plan: ' + DOC_ST[status][0] : 'บันทึก ID Plan แล้ว');
    });
  }
  function markDocDirty(dr, act) {
    if (dr.dirty) return; dr.dirty = true;
    var b = document.querySelector('[data-act="' + act + '-save"]'); if (b) b.disabled = false;
    if (!document.querySelector('.dirty-bar')) { var w = document.createElement('div'); w.innerHTML = docSaveBar(true, act); document.querySelector('.amain').appendChild(w.firstChild); }
  }
  function copyPrev(kind) {
    var name = { pa: 'ข้อความในแฟ้ม PA (งาน ผลลัพธ์ ตัวชี้วัด และประเด็นท้าทาย ไม่รวมภาพ)', agree: 'ภาระงานและข้อมูลผู้บริหารในข้อตกลง', idp: 'ID Plan (ความคืบหน้าเริ่มที่ 0)' }[kind];
    confirmBox('คัดลอก' + name + ' จากปีงบ ' + (S.fy - 1) + ' มาเขียนทับปีงบ ' + S.fy + '?', 'คัดลอก', function () {
      api('copyPrevDocs', { fy: S.fy, kind: kind }, { loader: 'กำลังคัดลอก' }, function (err, res) { if (err) { toast(err); return; } setDocs(res); render(); toast('คัดลอกจากปีงบ ' + (S.fy - 1) + ' แล้ว'); });
    });
  }

  /* =====================================================================
     เส้นทางหน้าและการวาดหน้า
     ===================================================================== */
  var ADMIN_PAGES = { 'admin': aDash, 'admin-profile': aProfile, 'admin-years': aYears, 'admin-settings': aSettings, 'admin-logs': aLogs,
    'admin-pa': aPA, 'admin-agreement': aAgreement, 'admin-idplan': aIdplan, 'admin-works': aWorks, 'admin-gallery': aGallery, 'admin-videos': aVideos, 'admin-awards': aAwards, 'admin-systems': aSystems, 'admin-themes': aThemes };
  var PUB_PAGES = { 'pa': pPA, 'agreement': pAgreement, 'idplan': pIdplan, 'profile': pProfile, 'works': pWorks, 'gallery': pGallery, 'videos': pVideos, 'awards': pAwards, 'systems': pSystems, 'login': pLogin };
  function route() { var h = (location.hash || '').replace('#', ''); return h || 'home'; }
  function render() {
    var r = route(), html;
    if (!configured()) { $('app').innerHTML = pSetup(); return; }
    if (!D.settings) { $('app').innerHTML = S.loadErr ? pLoadError() : ''; return; }
    if (r.indexOf('admin') === 0 && !S.admin) {
      if (S.authPending) { $('app').innerHTML = ''; showLoader('กำลังตรวจสอบสิทธิ์', true); return; }
      S.loginErr = S.loginErr || 'กรุณาเข้าสู่ระบบก่อนเข้าหลังบ้าน'; location.hash = 'login'; return;
    }
    if (r === 'login' && S.admin) { location.hash = 'admin'; return; }
    if (ADMIN_PAGES[r]) html = ADMIN_PAGES[r]();
    else if (r.indexOf('admin-album-') === 0) html = aAlbum(r.slice(12));
    else if (PUB_PAGES[r]) html = PUB_PAGES[r]();
    else if (r.indexOf('album-') === 0) html = pAlbum(r.slice(6));
    else html = pHome();
    $('app').innerHTML = html + (S.skinPreview ? skinBar() : '');
    var s = st();
    applyTheme();
    if (r === 'works') { restoreWorkFilters(); renderWorksGrid(); }
    document.body.classList.toggle('fx-glow', !!s.fxGlow);
    ['zoom', 'pop', 'spot', 'off'].forEach(function (k) { document.body.classList.toggle('phfx-' + k, s.phFx === k); });
    document.title = (r.indexOf('admin') === 0 ? 'หลังบ้าน · ' : '') + 'แฟ้มผลงานครู · ' + (D.settings.name || '');
    setFavicon(); tick();
    var isNew = r !== S.lastRoute;
    if (isNew) { window.scrollTo(0, 0); S.lastRoute = r; }
    revealInit(isNew);
  }
  /** ออกจากระบบแล้วกลับไปใช้ข้อมูลหน้าสาธารณะ (ไม่ให้รายการส่วนตัวค้างบนจอ) */
  function backToPublic() {
    try { var c = JSON.parse(localStorage.getItem(CACHE_KEY) || 'null'); setContent(c && c.content); } catch (e) { setContent(null); }
    api('getPublic', {}, { loader: false }, function (err, data) { if (!err) { setPublic(data); render(); } });
  }

  /* ---------- ผูกค่าจากช่องกรอกกับฉบับร่าง ---------- */
  function bindInput(el) {
    var b = el.getAttribute('data-b'); if (!b) return;
    var d = ensureDraft(), p = b.split('.'), v = el.type === 'checkbox' ? el.checked : el.value;
    if (p[0] === 's') { var k = p[1]; d.s[k] = (k === 'perPublic' || k === 'perAdmin' || k === 'hoursGoal') ? +v : v; markDirty('s.' + k); if (k === 'fxGlow') document.body.classList.toggle('fx-glow', !!v); return; }
    if (b.indexOf('docVis.') === 0) { d.s.docVis = clone(d.s.docVis || {}); d.s.docVis[b.slice(7)] = v; markDirty('s.docVis'); return; }
    if (b === 'taglines') { d.s.taglines = String(v).split('\n').map(function (x) { return x.trim(); }).filter(String); d.s.tagline = d.s.taglines[0] || ''; markDirty('s.taglines'); markDirty('s.tagline'); return; }
    if (b === 'skills') { d.s.skills = String(v).split(/[,،]/).map(function (x) { return x.trim(); }).filter(String); markDirty('s.skills'); return; }
    if (p[0] === 'pf') { d.s.profileFields[+p[1]][+p[2]] = v; markDirty('s.profileFields'); return; }
    if (p[0] === 'edu' || p[0] === 'car') { d[p[0]][+p[1]][p[2]] = v; markDirty(p[0]); }
  }
  function listOf(k) { var d = ensureDraft(); return k === 'pf' ? d.s.profileFields : d[k]; }
  function markList(k) { markDirty(k === 'pf' ? 's.profileFields' : k); }

  /* ---------- คลิก ---------- */
  document.addEventListener('click', function (e) {
    var el = e.target.closest ? e.target.closest('[data-act]') : null;
    if (!el) return;
    var act = el.getAttribute('data-act');
    if (act === 'ov' && e.target !== el) return;
    if (el.tagName === 'A' && act) e.preventDefault();
    var fy = +el.getAttribute('data-fy'), i = +el.getAttribute('data-i'), k = el.getAttribute('data-k');
    switch (act) {
      case 'ov': case 'close-modal': closeModal(); break;
      case 'confirm-yes': var fn = S.confirmFn; S.confirmFn = null; closeModal(); if (fn) fn(); break;
      case 'retry': S.loadErr = ''; boot(); break;
      case 'page': if (el.disabled) break; S.pages[k] = +el.getAttribute('data-p'); if (k === 'works') renderWorksGrid(); else render(); pagerScroll(k); break;
      case 'a11y': openA11y(); break;
      case 'a11y-set': S.a11y[k] = el.getAttribute('data-v'); applyA11y(); if ($('modal-root').innerHTML) openA11y(); else render(); break;
      case 'toggle-pass': var pi = $('lg-pass'); pi.type = pi.type === 'password' ? 'text' : 'password'; break;
      case 'cover-pause': S.coverPaused = !S.coverPaused; render(); break;
      case 'logout':
        confirmBox('ออกจากระบบหลังบ้าน?' + (dirtyCount() ? ' <b>การแก้ไขที่ยังไม่บันทึกจะหายไป</b>' : ''), 'ออกจากระบบ', function () {
          api('logout', {}, { loader: 'กำลังออกจากระบบ' }, function () { saveToken(''); S.admin = false; D.admin = null; D.docs = {}; discardDraft(); backToPublic(); location.hash = 'home'; render(); toast('ออกจากระบบแล้ว'); });
        });
        break;
      case 'draft-save': saveDraft(); break;
      case 'draft-discard': confirmBox('ยกเลิกการแก้ไขทั้งหมดที่ยังไม่บันทึก?', 'ยกเลิกการแก้ไข', function () { discardDraft(); render(); toast('ยกเลิกการแก้ไขแล้ว'); }, true); break;
      case 'row-add':
        var L = listOf(k);
        if (k === 'pf') L.push(['', '']); else if (k === 'edu') L.push({ id: '', level: '', degree: '', inst: '', year: '', logoUrl: '', logoId: '' }); else L.push({ id: '', period: '', role: '', place: '' });
        markList(k); render(); setTimeout(function () { var ins = document.querySelectorAll('[data-b^="' + k + '.' + (L.length - 1) + '."]'); if (ins[0]) ins[0].focus(); }, 20);
        break;
      case 'row-del': listOf(k).splice(i, 1); markList(k); render(); break;
      case 'row-mv':
        var L2 = listOf(k), j = i + (+el.getAttribute('data-d'));
        if (j < 0 || j >= L2.length) break;
        var tmp = L2[i]; L2[i] = L2[j]; L2[j] = tmp; markList(k); render(); break;
      case 'edu-logo-del': var de = ensureDraft().edu[i]; de.logoUrl = ''; de.logoId = ''; markDirty('edu'); render(); break;
      case 'img-del':
        confirmBox('ลบ' + ({ cover: 'ภาพปก (กลับไปใช้ลายเริ่มต้น)', avatar: 'รูปครู', logo: 'โลโก้โรงเรียน' })[k] + '?', 'ลบ', function () {
          api('removeImage', { kind: k }, { loader: 'กำลังลบรูป' }, function (err, res) { if (err) { toast(err); return; } D.settings = res.settings; if (S.draft) ['cover', 'coverId', 'coverType', 'coverSize', 'coverStill', 'coverStillId', 'logo', 'logoId', 'avatar', 'avatarId'].forEach(function (x) { S.draft.s[x] = res.settings[x]; }); cachePublic(); render(); toast('ลบแล้ว'); });
        }, true);
        break;
      case 'phfx-set': ensureDraft().s.phFx = el.getAttribute('data-v'); markDirty('s.phFx'); render(); break;
      /* ---------- เฟส 3 ---------- */
      case 'pa-tab': S.paTab = k; render(); break;
      case 'toggle-side': S.openSide[k] = !S.openSide[k]; render(); break;
      case 'docs-retry': S.docsErr = ''; render(); break;
      case 'open-indphoto': var ipd = docsOf(S.fy), ipx = ipd && find(ipd.pa.ind, 'code', k); if (ipx) { S.lb = { list: ipx.photos.map(function (p, j) { return { id: k + j, url: p.url, caption: p.cap }; }), i: i }; renderLightbox(); } break;
      case 'pa-edit': paIndForm(k); break;
      case 'pa-jump': var pj = document.getElementById('pa-' + k.replace('.', '-')); if (pj) pj.scrollIntoView({ behavior: motionOff() ? 'auto' : 'smooth', block: 'start' }); break;
      case 'pa-save': savePAPart({ ind: [{ code: k, task: $('pe-task').value, out: $('pe-out').value, kpi: $('pe-kpi').value }] }, 'บันทึกตัวชี้วัด ' + k + ' แล้ว', el); break;
      case 'ch-edit': chForm(); break;
      case 'ch-save': savePAPart({ challenge: { title: $('ch-title').value, problem: $('ch-problem').value, steps: $('ch-steps').value.split('\n').map(function (x) { return x.trim(); }).filter(String), quant: $('ch-quant').value, qual: $('ch-qual').value, result: $('ch-result').value } }, 'บันทึกประเด็นท้าทายแล้ว', el); break;
      case 'pa-status': savePAPart({ status: k }, k === 'ready' ? 'ตั้งแฟ้มเป็นพร้อมให้กรรมการประเมินแล้ว' : 'กลับเป็นร่างแล้ว'); break;
      case 'ind-photo-del': var ipl = find(docsOf(S.fy).pa.ind, 'code', k).photos.slice(); confirmBox('ลบภาพที่ ' + (i + 1) + ' ของตัวชี้วัด ' + k + '?', 'ลบภาพ', function () { ipl.splice(i, 1); saveIndPhotos(k, ipl, 'ลบภาพแล้ว'); }, true); break;
      case 'ind-photo-mv': var ipm = find(docsOf(S.fy).pa.ind, 'code', k).photos.slice(), ij = i + (+el.getAttribute('data-d')); if (ij < 0 || ij >= ipm.length) break; var ipt = ipm[i]; ipm[i] = ipm[ij]; ipm[ij] = ipt; saveIndPhotos(k, ipm); break;
      case 'docs-copy': copyPrev(k); break;
      case 'ag-add': var aga = agDraft(); getPath(aga.data, k).push(['', 1]); aga.dirty = true; render(); break;
      case 'ag-del': var agd = agDraft(); getPath(agd.data, k).splice(i, 1); agd.dirty = true; render(); break;
      case 'ag-save': saveAgree(); break;
      case 'ag-discard': S.agDraft = null; render(); toast('ยกเลิกการแก้ไขแล้ว'); break;
      case 'ag-status': saveAgree(k); break;
      case 'idp-save': saveIdp(); break;
      case 'idp-discard': S.idpDraft = null; render(); toast('ยกเลิกการแก้ไขแล้ว'); break;
      case 'idp-score': var isc = k.split('.'), idd = idpDraft(); idd.data.scores[+isc[0]][+isc[1]] = +el.getAttribute('data-v'); idd.dirty = true; render(); break;
      case 'idp-add': var ida = idpDraft(); ida.data.goals.push({ t: '', comp: COMPS[1][1][0], how: '', when: '', target: '', done: 0, of: 1, unit: 'ครั้ง', ind: [] }); ida.dirty = true; render(); setTimeout(function () { var ins = document.querySelectorAll('[data-idp$=".t"]'); if (ins.length) ins[ins.length - 1].focus(); }, 30); break;
      case 'idp-del': var idl = idpDraft(); confirmBox('ลบเป้าหมายที่ ' + (i + 1) + '?', 'ลบ', function () { idl.data.goals.splice(i, 1); idl.dirty = true; render(); }); break;
      case 'idp-ind': var idg = idpDraft(), gi2 = idg.data.goals[i], ix = gi2.ind.indexOf(k); if (ix > -1) gi2.ind.splice(ix, 1); else gi2.ind.push(k); gi2.ind.sort(); idg.dirty = true; render(); break;
      case 'loader-test': showLoader('ทดลองวงแหวนโหลด'); setTimeout(function () { hideLoader(); }, 2200); break;
      /* ---------- เฟส 2 ---------- */
      case 'rot-go': var rh = el.closest('[data-rot-host]'), rr = rh && rh.querySelector('.rot'); if (rr) rotGo(rr, +el.getAttribute('data-i')); break;
      case 'rot-step': var rh2 = el.closest('[data-rot-host]'), rr2 = rh2 && rh2.querySelector('.rot'); if (rr2) rotGo(rr2, (+rr2.getAttribute('data-i') || 0) + (+el.getAttribute('data-d'))); break;
      case 'draft-set': var dv = el.getAttribute('data-v'); ensureDraft().s[k] = /^\d+$/.test(dv) ? +dv : dv; markDirty('s.' + k); render(); if (k === 'loaderStyle') { showLoader('ตัวอย่างวงแหวนแบบใหม่'); setTimeout(function () { hideLoader(); }, 1600); } break;
      case 'open-work': openWork(el.getAttribute('data-id')); break;
      case 'open-video': openVideo(el.getAttribute('data-id')); break;
      case 'open-award': openAward(el.getAttribute('data-id')); break;
      case 'sys-preview': sysPreview(el.getAttribute('data-id')); break;
      case 'quick-cat': if ($('f-cat')) { $('f-cat').value = k; S.pages.works = 1; renderWorksGrid(); } break;
      case 'aw-filter': S.awFilter = k; S.pages.awards = 1; render(); break;
      case 'sys-filter': S.sysFilter = k; S.pages.systems = 1; render(); break;
      case 'open-photo': var pl = photosOf(el.getAttribute('data-a')); if (pl.length) { S.lb = { list: pl, i: Math.min(+el.getAttribute('data-i') || 0, pl.length - 1) }; renderLightbox(); } break;
      case 'lb-prev': e.stopPropagation(); S.lb.i = (S.lb.i - 1 + S.lb.list.length) % S.lb.list.length; renderLightbox(); break;
      case 'lb-next': e.stopPropagation(); S.lb.i = (S.lb.i + 1) % S.lb.list.length; renderLightbox(); break;
      case 'lb-close': S.lb = null; renderLightbox(); break;
      case 'c-new': ({ works: workForm, videos: videoForm, awards: awardForm, systems: sysForm, albums: albumForm })[k](); break;
      case 'c-edit': var ce = find(D.content[k], 'id', el.getAttribute('data-id')); if (ce) ({ works: workForm, videos: videoForm, awards: awardForm, systems: sysForm, albums: albumForm })[k](clone(ce)); break;
      case 'c-del': delContent(k, el.getAttribute('data-id'), { works: 'ผลงาน', videos: 'วิดีโอ', awards: 'รายการ', systems: 'ระบบ', albums: 'อัลบั้ม' }[k]); break;
      case 'c-save': if (S.form) ({ works: saveWork, videos: saveVideo, awards: saveAward, systems: saveSystem, albums: saveAlbum })[S.form.kind](el); break;
      case 'ff-clear': var fk = k.split('.'); if (S.form && S.form.clear.indexOf(fk[1]) < 0) S.form.clear.push(fk[1]); refreshFileBox(); break;
      case 'lk-add': S.form.links.push({ type: 'web', url: '', vis: 'public' }); renderLinkRows(); break;
      case 'lk-del': S.form.links.splice(i, 1); renderLinkRows(); break;
      case 'sys-mv': moveSystem(i, +el.getAttribute('data-d')); break;
      case 'pm-mv': var pl2 = S.pm.list.slice(), j2 = i + (+el.getAttribute('data-d')); if (j2 < 0 || j2 >= pl2.length) break; var t2 = pl2[i]; pl2[i] = pl2[j2]; pl2[j2] = t2; S.pm.order = pl2; render(); break;
      case 'pm-cover': setAlbumCover(el.getAttribute('data-id')); break;
      case 'pm-all': var allOn = S.pm.list.every(function (x) { return S.pm.sel[x]; }); S.pm.list.forEach(function (x) { S.pm.sel[x] = !allOn; }); render(); break;
      case 'pm-save': savePm(); break;
      case 'pm-del':
        var dels = S.pm.list.filter(function (x) { return S.pm.sel[x]; });
        confirmBox('ลบภาพที่เลือก ' + dels.length + ' ภาพ? ไฟล์จะถูกย้ายไปถังขยะของ Drive', 'ลบภาพ', function () {
          api('deletePhotos', { ids: dels }, { loader: 'กำลังลบภาพ' }, function (err, res) { if (err) { toast(err); return; } D.content.photos = res.photos; D.content.albums = res.albums; S.pm.sel = {}; S.pm.order = null; render(); toast('ลบแล้ว ' + dels.length + ' ภาพ'); });
        }, true);
        break;
      case 'cs-mv': var sl = clone(D.settings.coverSlides || []), cj = i + (+el.getAttribute('data-d')); if (cj < 0 || cj >= sl.length) break; var ct = sl[i]; sl[i] = sl[cj]; sl[cj] = ct; saveSlides(sl, 'เรียงสไลด์ใหม่แล้ว'); break;
      case 'cs-del': var sl2 = clone(D.settings.coverSlides || []); confirmBox('ลบสไลด์ภาพปกนี้?', 'ลบ', function () { sl2.splice(i, 1); saveSlides(sl2, 'ลบสไลด์แล้ว'); }, true); break;
      case 'skin-preview': S.skinPreview = k; applyTheme(); if (route() === 'home') render(); else location.hash = 'home'; toast('ดูตัวอย่าง ' + SKINS[k].name + ' ลองเปิดหน้าอื่นได้ กดใช้หรือยกเลิกที่แถบด้านล่าง'); break;
      case 'skin-use': S.skinPreview = ''; quickSet({ skin: k }, 'ใช้ชุดธีม ' + SKINS[k].name + ' แล้ว ผู้ชมทุกคนจะเห็นหน้าตานี้', function () { if (route() !== 'admin-themes') location.hash = 'admin-themes'; }); break;
      case 'skin-cancel': S.skinPreview = ''; applyTheme(); if (S.admin) location.hash = 'admin-themes'; else render(); toast('ยกเลิกการดูตัวอย่าง'); break;
      case 'skin-colors': quickSet({ skinColors: el.getAttribute('data-v') }, 'บันทึกแล้ว'); break;
      case 'font-set': var fv = {}; fv['font' + k] = el.getAttribute('data-v'); quickSet(fv, 'ใช้ฟอนต์ ' + el.getAttribute('data-v') + ' กับ' + (k === 'H' ? 'หัวข้อ' : 'เนื้อหา')); break;
      case 'font-reset': quickSet({ fontH: '', fontB: '' }, 'กลับไปใช้ฟอนต์ของชุดธีม'); break;
      case 'my-skin': S.mySkin = el.getAttribute('data-v'); try { localStorage.setItem('pa-skin', S.mySkin); } catch (e8) { } applyTheme(); if ($('modal-root').innerHTML) openA11y(); render(); break;

      case 'pw-save': changePw(); break;
      case 'logs-refresh':
        api('getLogs', { limit: 300 }, { loader: 'กำลังโหลดบันทึก' }, function (err, res) { if (err) { toast(err); return; } D.logs = res.list; S.pages['a-logs'] = 1; render(); });
        break;
      case 'set-theme': case 'use-custom': case 'set-defround':
        var y = clone(yearOf(fy));
        if (act === 'set-theme') y.theme = el.getAttribute('data-t');
        if (act === 'use-custom') { y.theme = 'custom'; var t0 = themeOf(yearOf(fy)); y.customA = y.customA || t0.a; y.customCv = y.customCv || t0.cv; }
        if (act === 'set-defround') y.defaultRound = +el.getAttribute('data-r');
        saveYear(y, act === 'set-defround' ? 'บันทึกรอบเริ่มต้นแล้ว' : 'เปลี่ยนธีมสีปีงบ ' + fy + ' แล้ว');
        break;
      case 'set-default':
        api('saveSettings', { values: { defaultFy: fy } }, { loader: 'กำลังบันทึก' }, function (err, res) { if (err) { toast(err); return; } D.settings = res.settings; if (S.draft) S.draft.s.defaultFy = fy; cachePublic(); render(); toast('หน้าหลักจะแสดงปีงบ ' + fy); });
        break;
      case 'view-year': S.fy = fy; location.hash = 'home'; break;
      case 'year-add': saveYear({ fy: fy, theme: 'teal', customA: '', customCv: '', defaultRound: 1, note: '' }, 'เพิ่มปีงบประมาณ ' + fy + ' แล้ว'); break;
      case 'year-del':
        confirmBox('ลบปีงบประมาณ ' + fy + '? (ข้อมูลเฟสถัดไปที่ผูกกับปีนี้จะไม่ถูกลบ แต่จะไม่แสดง)', 'ลบปี', function () {
          api('deleteYear', { fy: fy }, { loader: 'กำลังลบ' }, function (err, res) { if (err) { toast(err); return; } D.years = res.years; if (S.fy === fy) S.fy = +D.settings.defaultFy; cachePublic(); render(); toast('ลบปีงบ ' + fy + ' แล้ว'); });
        }, true);
        break;
    }
  });
  function saveYear(y, msg) {
    api('saveYear', y, {}, function (err, res) { if (err) { toast(err); return; } D.years = res.years; cachePublic(); render(); toast(msg); });
  }
  function changePw() {
    var o = $('pw-old').value, n = $('pw-new').value, n2 = $('pw-new2').value, m = $('pw-msg');
    if (!o || !n) { m.innerHTML = '<div class="err">กรอกรหัสผ่านให้ครบ</div>'; return; }
    if (n !== n2) { m.innerHTML = '<div class="err">รหัสผ่านใหม่ทั้งสองช่องไม่ตรงกัน</div>'; return; }
    if (n.length < 8) { m.innerHTML = '<div class="err">รหัสผ่านใหม่ต้องยาวอย่างน้อย 8 ตัวอักษร</div>'; return; }
    api('changePassword', { oldPass: o, newPass: n }, {}, function (err) {
      if (err) { m.innerHTML = '<div class="err">' + esc(err) + '</div>'; return; }
      if (D.admin) D.admin.mustChange = false;
      render(); toast('เปลี่ยนรหัสผ่านแล้ว');
    });
  }

  /* ---------- พิมพ์ / เลือก ---------- */
  document.addEventListener('input', function (e) {
    var t = e.target;
    if (t.getAttribute && t.getAttribute('data-b') && t.type !== 'checkbox' && t.tagName !== 'SELECT') bindInput(t);
    if (t.getAttribute && t.getAttribute('data-ag') && S.agDraft) {
      var agp = t.getAttribute('data-ag'), agn = t.type === 'number';
      setPath(S.agDraft.data, agp, agn ? (+t.value || 0) : t.value); markDocDirty(S.agDraft, 'ag');
      if (agn) { var agb = agp.replace(/\.\d+\.1$/, ''), se = document.querySelector('[data-sum="' + agb + '"]'); if (se) se.textContent = sumRows(getPath(S.agDraft.data, agb)); [0, 1].forEach(function (ti) { var te = document.querySelector('[data-total="' + ti + '"]'); if (te) te.textContent = loadTotal(S.agDraft.data, ti) + ' ชม./สัปดาห์'; }); }
    }
    if (t.getAttribute && t.getAttribute('data-idp') && S.idpDraft) { setPath(S.idpDraft.data, t.getAttribute('data-idp'), t.type === 'number' ? (+t.value || 0) : t.value); markDocDirty(S.idpDraft, 'idp'); }
    if (t.id === 'f-q') { S.pages.works = 1; renderWorksGrid(); }
    if (t.getAttribute && t.getAttribute('data-aq')) { var aqk = t.getAttribute('data-aq'); S.aq = S.aq || {}; S.aq[aqk] = t.value; S.pages['a-' + aqk] = 1; var pos0 = t.selectionStart; render(); var aqi = document.querySelector('[data-aq="' + aqk + '"]'); if (aqi) { aqi.focus(); try { aqi.setSelectionRange(pos0, pos0); } catch (e3) { } } }
    if (t.getAttribute && t.getAttribute('data-pm-cap') && S.pm) { S.pm.caps[t.getAttribute('data-pm-cap')] = t.value; var sb = document.querySelector('[data-act="pm-save"]'); if (sb) sb.disabled = false; }
    if (t.getAttribute && t.getAttribute('data-lk') && S.form && S.form.links) {
      var lp = t.getAttribute('data-lk').split(':'), lrow = S.form.links[+lp[0]];
      lrow[lp[1]] = t.value.trim();
      if (lp[1] === 'url' && lrow.url) {
        var g = guessType(lrow.url);
        if (g !== 'web' && g !== lrow.type) { lrow.type = g; if (g === 'gas') lrow.vis = 'committee'; var sel = t.parentNode.querySelector('[data-lk="' + lp[0] + ':type"]'); if (sel) sel.value = g; var vs = t.parentNode.querySelector('[data-lk="' + lp[0] + ':vis"]'); if (vs) vs.value = lrow.vis; }
      }
    }
    if (t.id === 'log-q') { S.logQ = t.value; S.pages['a-logs'] = 1; var pos = t.selectionStart; render(); var q = $('log-q'); if (q) { q.focus(); try { q.setSelectionRange(pos, pos); } catch (e2) { } } }
    if (t.getAttribute && t.getAttribute('data-cust')) {
      var p = t.getAttribute('data-cust').split(':'), y = yearOf(+p[0]); if (!y) return;
      var a = p[1] === 'a' ? t.value : (y.customA || themeOf(y).a), cv = p[1] === 'cv' ? t.value : (y.customCv || themeOf(y).cv);
      var pv = $('cust-prev-' + p[0]); if (pv) { pv.style.setProperty('--sw', a); pv.style.setProperty('--sw2', cv); }
      var cr = contrast(a, '#ffffff'), bd = $('cust-badge-' + p[0]); if (bd) { bd.className = 'cbadge ' + (cr >= 4.5 ? 'ok' : 'no'); bd.textContent = (cr >= 4.5 ? 'อ่านง่าย' : 'สีหลักอ่อนเกินไป') + ' ' + fix(cr, 1) + ':1'; }
    }
  });
  document.addEventListener('change', function (e) {
    var t = e.target;
    if (t.getAttribute && t.getAttribute('data-b') && (t.type === 'checkbox' || t.tagName === 'SELECT')) bindInput(t);
    if (t.getAttribute && t.getAttribute('data-fy-sel')) {
      S.fy = +t.value; render();
      toast('กำลังดูปีงบประมาณ ' + S.fy);
    }
    if (t.tagName === 'SELECT' && t.getAttribute('data-ag') && S.agDraft) { setPath(S.agDraft.data, t.getAttribute('data-ag'), t.value); markDocDirty(S.agDraft, 'ag'); }
    if (t.tagName === 'SELECT' && t.getAttribute('data-idp') && S.idpDraft) { setPath(S.idpDraft.data, t.getAttribute('data-idp'), t.value); markDocDirty(S.idpDraft, 'idp'); }
    if (t.id === 'idp-st') saveIdp(t.value);
    if (t.getAttribute && t.getAttribute('data-indup')) { uploadIndPhotos(t.getAttribute('data-indup'), t.files); t.value = ''; }
    if (t.getAttribute && t.getAttribute('data-capk')) { var cpk = t.getAttribute('data-capk'), cps = find(docsOf(S.fy).pa.ind, 'code', cpk).photos.slice(); cps[+t.getAttribute('data-capi')] = { id: cps[+t.getAttribute('data-capi')].id, url: '', cap: t.value }; saveIndPhotos(cpk, cps, 'บันทึกคำบรรยายภาพแล้ว'); }
    if (t.getAttribute && t.getAttribute('data-idp') && /\.(done|of)$/.test(t.getAttribute('data-idp'))) render();
    if (t.id === 'f-cat' || t.id === 'f-year' || t.id === 'f-ind') { S.pages.works = 1; renderWorksGrid(); }
    if (t.getAttribute && t.getAttribute('data-pp')) { var ppk = t.getAttribute('data-pp'); S.perKey[ppk] = +t.value; S.pages[ppk] = 1; if (ppk === 'works') renderWorksGrid(); else render(); pagerScroll(ppk); toast('แสดงหน้าละ ' + t.value + ' รายการ'); }
    if (t.getAttribute && t.getAttribute('data-lk') && S.form && S.form.links && t.tagName === 'SELECT') { var lq = t.getAttribute('data-lk').split(':'); S.form.links[+lq[0]][lq[1]] = t.value; }
    if (t.getAttribute && t.getAttribute('data-ff') && S.form) {
      var ffk = t.getAttribute('data-ff'), ff = t.files && t.files[0];
      if (ff) { var fr = FILE_RULE[ffk]; if (fr.mimes.indexOf(ff.type) < 0) toast('ไฟล์ชนิดนี้ใช้ไม่ได้ · ' + fr.label); else if (ff.size > fr.max * 1048576 && !(fr.img && /^image\//.test(ff.type))) toast('ไฟล์ใหญ่เกิน ' + fr.max + ' MB'); else { S.form.files[ffk.split('.')[1]] = ff; S.form.clear = S.form.clear.filter(function (x) { return x !== ffk.split('.')[1]; }); } }
      refreshFileBox();
    }
    if (t.getAttribute && t.getAttribute('data-up-alb')) { uploadPhotos(t.getAttribute('data-up-alb'), t.files); t.value = ''; }
    if (t.getAttribute && t.getAttribute('data-pm-sel') && S.pm) { S.pm.sel[t.getAttribute('data-pm-sel')] = t.checked; render(); }
    if (t.id === 'cs-up') { uploadSlides(t.files); t.value = ''; }
    if (t.getAttribute && t.getAttribute('data-cs')) { var sl3 = clone(D.settings.coverSlides || []); sl3[+t.getAttribute('data-cs')].cap = t.value; saveSlides(sl3, 'บันทึกคำบรรยายสไลด์แล้ว'); }
    if (t.id === 'visitor-skin') quickSet({ visitorSkin: t.checked }, t.checked ? 'ผู้ชมเลือกชุดธีมเองได้แล้ว' : 'ผู้ชมจะเห็นชุดธีมของเว็บเท่านั้น');
    if (t.getAttribute && t.getAttribute('data-up')) {
      var kind = t.getAttribute('data-up'), f = t.files && t.files[0], idx = +t.getAttribute('data-i');
      if (kind === 'edu') {
        var row = ensureDraft().edu[idx];
        doUpload('edu', f, { rowId: row.id || '' }, function (res) {
          row.logoUrl = res.file.url; row.logoId = res.file.id;
          var saved = row.id ? find(D.education, 'id', row.id) : null;
          if (saved) { saved.logoUrl = res.file.url; saved.logoId = res.file.id; } else markDirty('edu');
          render();
        });
      } else doUpload(kind, f, {}, function () { render(); });
      t.value = '';
    }
    if (t.getAttribute && t.getAttribute('data-cust')) {
      var p = t.getAttribute('data-cust').split(':'), y = clone(yearOf(+p[0]));
      if (p[1] === 'a') y.customA = t.value; else y.customCv = t.value;
      y.theme = 'custom'; y.customA = y.customA || themeOf(yearOf(+p[0])).a; y.customCv = y.customCv || themeOf(yearOf(+p[0])).cv;
      saveYear(y, 'บันทึกสีที่กำหนดเองแล้ว');
    }
  });
  document.addEventListener('submit', function (e) {
    e.preventDefault();
    if (e.target.id === 'login-form') doLogin();
  });
  document.addEventListener('keydown', function (e) {
    if (S.lb && (e.key === 'ArrowLeft' || e.key === 'ArrowRight')) { S.lb.i = (S.lb.i + (e.key === 'ArrowLeft' ? -1 : 1) + S.lb.list.length) % S.lb.list.length; renderLightbox(); return; }
    if (e.key === 'Escape' && $('modal-root').innerHTML) { S.lb = null; closeModal(); }
    if ((e.ctrlKey || e.metaKey) && (e.key === 's' || e.key === 'S') && S.admin && dirtyCount()) { e.preventDefault(); saveDraft(); }
  });
  window.addEventListener('beforeunload', function (e) { if (dirtyCount()) { e.preventDefault(); e.returnValue = ''; } });
  window.addEventListener('hashchange', function () { S.lb = null; closeModal(); render(); });
  document.addEventListener('mousemove', function (e) {
    var t = e.target && e.target.closest ? e.target.closest('.lb .ph') : null; if (!t) return;
    var b = t.getBoundingClientRect(); t.style.setProperty('--zx', ((e.clientX - b.left) / b.width * 100).toFixed(1) + '%'); t.style.setProperty('--zy', ((e.clientY - b.top) / b.height * 100).toFixed(1) + '%');
  });
  function refreshFileBox() {
    var box = $('ff-box'); if (!box || !S.form) return;
    var k = S.form.kind, it = S.form.id ? find(D.content[k], 'id', S.form.id) || {} : {};
    if (k === 'works') box.innerHTML = fileField('works.file', 'ไฟล์หลักฐาน', it.fileUrl, it.fileName);
    else if (k === 'videos') box.innerHTML = fileField('videos.thumb', 'ภาพปกวิดีโอ (ไม่บังคับ · YouTube ใช้ภาพปกของคลิปให้อัตโนมัติ)', it.thumbUrl);
    else if (k === 'awards') box.innerHTML = fileField('awards.img', 'ภาพเกียรติบัตร', it.imgUrl) + fileField('awards.file', 'ไฟล์ PDF (ไม่บังคับ)', it.fileUrl, it.fileName);
    else if (k === 'systems') box.innerHTML = fileField('systems.img', 'ภาพหน้าจอระบบ', it.imgUrl);
  }


  function deviceName() {
    var u = navigator.userAgent, b = /Edg\//.test(u) ? 'Edge' : /Chrome\//.test(u) ? 'Chrome' : /Firefox\//.test(u) ? 'Firefox' : /Safari\//.test(u) ? 'Safari' : 'เบราว์เซอร์';
    var o = /Windows/.test(u) ? 'Windows' : /Android/.test(u) ? 'Android' : /iPhone|iPad/.test(u) ? 'iOS' : /Mac OS/.test(u) ? 'macOS' : /Linux/.test(u) ? 'Linux' : '';
    return b + (o ? ' · ' + o : '');
  }
  function doLogin() {
    var u = $('lg-user').value.trim(), p = $('lg-pass').value, rem = $('lg-remember').checked, btn = $('lg-btn');
    if (!u || !p) { S.loginErr = 'กรอกชื่อผู้ใช้และรหัสผ่าน'; render(); return; }
    btn.disabled = true;
    api('login', { user: u, pass: p, remember: rem, device: deviceName() }, {}, function (err, res) {
      btn.disabled = false;
      if (err) { S.loginErr = err; render(); var f = $('lg-user'); if (f) f.value = u; return; }
      saveToken(res.token, rem); S.loginErr = '';
      api('adminBoot', {}, {}, function (e2, data) {
        if (e2) { toast(e2); return; }
        setAdmin(data); S.admin = true;
        location.hash = data.mustChange ? 'admin-settings' : 'admin';
        render(); toast(data.mustChange ? 'กรุณาเปลี่ยนรหัสผ่านชั่วคราวก่อนใช้งาน' : 'เข้าสู่ระบบแล้ว');
      });
    });
  }

  /* ---------- เริ่มทำงาน ---------- */
  function boot() {
    applyA11y();
    if (!configured()) { render(); return; }
    var cached = null;
    try { cached = JSON.parse(localStorage.getItem(CACHE_KEY) || 'null'); } catch (e) { }
    var tok = loadToken();
    if (tok) { S.token = tok; S.authPending = true; }
    if (cached && cached.settings) { setPublic(cached, true); render(); }
    api('getPublic', {}, { loader: cached ? false : 'กำลังโหลดข้อมูล' }, function (err, data) {
      if (err) { if (!cached) { S.loadErr = err; render(); } else toast('ใช้ข้อมูลที่บันทึกไว้ในเครื่อง: ' + err); }
      else { setPublic(data); if (!S.admin) render(); }
      if (!tok) return;
      api('adminBoot', {}, { loader: false }, function (e2, ad) {
        S.authPending = false; hideLoader(true);
        if (e2) { if (route().indexOf('admin') === 0) { S.loginErr = e2; location.hash = 'login'; } render(); return; }
        setAdmin(ad); S.admin = true; S.loginErr = ''; render();
      });
    });
  }
  boot();
})();
