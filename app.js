/* แฟ้มผลงานและการประเมินครู — app.js (เฟส 1) · ES5 เท่านั้น */
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
    var t = themeOf(yearOf(S.fy)), L = !!t.pastel || lum(t.cv) > 0.45;
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
      '<p class="small muted">ค่าที่เลือกจำไว้ในเบราว์เซอร์เครื่องนี้ ไม่กระทบผู้ชมคนอื่น</p>';
  }
  function openA11y() { openModal('การแสดงผล', a11yControls(), '<button class="btn primary" data-act="close-modal">เสร็จแล้ว</button>'); }

  /* ---------- ค่าคงที่และสถานะ ---------- */
  var CFG = window.APP_CONFIG || {};
  var GAS_URL = String(CFG.GAS_URL || '');
  var CACHE_KEY = 'tp-public-v1', TOKEN_KEY = 'tp-token';
  var FOOTER = 'พัฒนาโดย นายชิติพัทธ์ นิลวรรณ ตำแหน่ง ครู โรงเรียนบ้านละลม สพป.ศรีสะเกษ เขต 3';
  var REDUCED = !!(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  var D = { settings: null, education: [], career: [], years: [], logs: [], version: '', admin: null };
  var S = {
    admin: false, token: '', authPending: false, fy: 0, pages: {}, pageInfo: {},
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
    saveToken(''); S.admin = false; D.admin = null; S.draft = null; S.dirty = {};
    S.loginErr = 'หมดเวลาการเข้าสู่ระบบ กรุณาเข้าสู่ระบบใหม่';
    if (route().indexOf('admin') === 0) location.hash = 'login'; else render();
  }
  function setPublic(data, fromCache) {
    D.settings = data.settings; D.education = data.education || []; D.career = data.career || []; D.years = data.years || []; D.version = data.version || '';
    if (!S.fy || !yearOf(S.fy)) S.fy = +D.settings.defaultFy || (D.years[0] && D.years[0].fy) || fyNow(new Date());
    if (!fromCache) { try { localStorage.setItem(CACHE_KEY, JSON.stringify(data)); } catch (e) { } }
  }
  function setAdmin(data) {
    D.admin = { logs: data.logs || [], mustChange: !!data.mustChange, sheetUrl: data.sheetUrl, folderUrl: data.folderUrl };
    D.logs = data.logs || [];
    setPublic({ settings: data.settings, education: data.education, career: data.career, years: data.years, version: data.version });
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
    try { localStorage.setItem(CACHE_KEY, JSON.stringify({ settings: D.settings, education: D.education.map(function (e) { var x = clone(e); delete x.logoId; return x; }), career: D.career, years: D.years, version: D.version })); } catch (e) { }
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
    edu: { w: 400, h: 400, png: true, max: 2, label: 'โลโก้สถานศึกษา' }
  };
  function doUpload(kind, file, extra, cb) {
    var u = UP[kind];
    if (!file) return;
    if (!/^image\/(jpeg|png|webp|gif)$/.test(file.type) || (file.type === 'image/gif' && kind !== 'cover')) { toast('รองรับเฉพาะ JPG PNG WebP' + (kind === 'cover' ? ' และ GIF' : '')); return; }
    if (file.type === 'image/gif' && file.size > u.max * 1048576) { toast('ไฟล์ GIF ใหญ่เกิน ' + u.max + ' MB'); return; }
    if (file.size > 30 * 1048576) { toast('ไฟล์ใหญ่เกินไป'); return; }
    showLoader('กำลังเตรียมไฟล์');
    prepImage(file, u.w, u.h, u.png, function (err, img) {
      hideLoader();
      if (err) { toast(err); return; }
      if (img.size > u.max * 1048576) { toast(u.label + ' ใหญ่เกิน ' + u.max + ' MB หลังย่อขนาด'); return; }
      var data = { kind: kind, mime: img.mime, b64: img.b64, stillB64: img.stillB64 || '', name: file.name.replace(/\.[^.]+$/, '') };
      for (var k in extra || {}) data[k] = extra[k];
      api('upload', data, {}, function (e2, res) {
        if (e2) { toast(e2); return; }
        var keys = ['cover', 'coverId', 'coverType', 'coverSize', 'coverStill', 'coverStillId', 'logo', 'logoId', 'avatar', 'avatarId'];
        D.settings = res.settings;
        if (S.draft) keys.forEach(function (k2) { S.draft.s[k2] = res.settings[k2]; });
        cachePublic(); cb(res); toast('อัปโหลด' + u.label + 'แล้ว');
      });
    });
  }
  function imgFallback(e) {
    var t = e.target;
    if (!t || t.tagName !== 'IMG' || t.getAttribute('data-fb')) return;
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
    var n = list.length, pages = Math.max(1, Math.ceil(n / per)), p = Math.min(Math.max(1, S.pages[key] || 1), pages);
    S.pages[key] = p; S.pageInfo[key] = { n: n, per: per, p: p, pages: pages };
    return list.slice((p - 1) * per, p * per);
  }
  function pagerNav(key) {
    var f = S.pageInfo[key]; if (!f || !f.n) return '';
    var a = (f.p - 1) * f.per + 1, b = Math.min(f.n, f.p * f.per);
    var info = '<span class="small muted">แสดง ' + a + '–' + b + ' จาก ' + f.n + ' รายการ</span>';
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

  /* ---------- วงแหวนโหลด modal toast ---------- */
  var loaderN = 0;
  function showLoader(msg, noCount) {
    if (!noCount) loaderN++;
    var el = $('loader'); if (!el) return;
    if (D.settings && D.settings.fxLoader === false) { el.className = 'loader on quiet'; el.innerHTML = ''; return; }
    el.innerHTML = '<div class="ring-wrap"><div class="ring"><span class="core">' + seal() + '</span></div><div class="loader-t">' + esc(msg || 'กำลังโหลดข้อมูล') + '<span class="dots"><i>.</i><i>.</i><i>.</i></span></div></div>';
    el.className = 'loader on';
  }
  function hideLoader(force) { loaderN = force ? 0 : Math.max(0, loaderN - 1); if (loaderN) return; var el = $('loader'); if (el) el.className = 'loader'; }
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
  var NAV = [['home', 'หน้าหลัก'], ['profile', 'ประวัติ']];
  var GLYPHS = '<div class="cover-glyphs" aria-hidden="true"><span style="left:4%;top:6%">π</span><span style="left:52%;top:2%;font-size:160px">∑</span><span style="right:5%;top:22%">√x</span><span style="left:30%;top:30%;font-size:92px">a² + b² = c²</span><span style="right:24%;bottom:14%;font-size:84px">÷</span><span style="left:8%;bottom:40%;font-size:70px">%</span></div>';

  function siteHead(r) {
    var s = D.settings;
    var nav = NAV.map(function (it) { return '<a href="#' + it[0] + '" class="' + (r === it[0] ? 'on' : '') + '">' + it[1] + '</a>'; }).join('');
    var right = fySelect('fy-sel') + (S.admin ? '<a class="btn primary login-ic" href="#admin" aria-label="หลังบ้าน" title="หลังบ้าน">' + ic('grid', 18) + '</a>' : '<a class="btn login-ic" href="#login" aria-label="เข้าสู่ระบบ" title="เข้าสู่ระบบ">' + ic('lock', 18) + '</a>');
    return '<div class="info-strip"><div class="wrap">' + clock() + '<span>ปีงบประมาณปัจจุบัน <b class="js-fy"></b> · <span class="js-sem"></span></span><button class="strip-btn" data-act="a11y" aria-label="การแสดงผล ขนาดตัวอักษร และโหมดสี">' + ic('sun', 15) + ' การแสดงผล</button></div></div>' +
      '<header class="site-head"><div class="wrap"><a class="brand" href="#home" aria-label="แฟ้มผลงานครู หน้าหลัก">' + seal() + '<span class="brand-t"><b>แฟ้มผลงานครู</b><span>' + esc(s.school) + ' ' + esc(s.area) + '</span></span></a><nav class="nav" aria-label="เมนูหลัก">' + nav + '</nav>' + right + '</div></header>';
  }
  function siteFoot() {
    return '<footer class="foot"><div class="wrap"><span>' + FOOTER + '</span><span>Vercel + Google Apps Script + Google Sheets</span></div></footer>';
  }
  function pub(r, inner, top) { return siteHead(r) + (top || '') + '<main class="pub"><div class="wrap">' + inner + '</div></main>' + siteFoot(); }

  function avatarHtml(cls) {
    var s = D.settings;
    return '<div class="avatar ' + (cls || '') + '">' + (s.avatar ? '<img src="' + esc(s.avatar) + '" alt="รูป ' + esc(s.name) + '">' : esc((s.nick || s.name || 'ครู').replace(/^ครู/, '').slice(0, 2)) + '<small>รูปครู</small>') + '</div>';
  }
  function cover() {
    var s = D.settings;
    var isGif = s.cover && s.coverType === 'image/gif', src = (isGif && S.coverPaused && s.coverStill) ? s.coverStill : s.cover;
    return '<section class="cover" aria-label="ภาพปก"><div class="cover-bg">' + (s.cover ? '<img src="' + esc(src) + '" alt="">' : '') + '</div>' + (s.cover ? '' : GLYPHS) + '<div class="cover-shade"></div>' +
      '<div class="cover-cap">' + (s.coverCaption ? '<span>' + ic('image', 13) + ' ' + esc(s.coverCaption) + '</span>' : '<span></span>') + (isGif && s.coverStill ? '<button class="btn on-dark" data-act="cover-pause" aria-pressed="' + (S.coverPaused ? 'true' : 'false') + '">' + ic(S.coverPaused ? 'play' : 'x', 14) + ' ' + (S.coverPaused ? 'เล่นภาพเคลื่อนไหว' : 'หยุดภาพเคลื่อนไหว') + '</button>' : '') + '</div>' +
      '<div class="cover-in">' + avatarHtml() + '<div class="cover-t"><span class="eyebrow-d">แฟ้มสะสมผลงานครู · ปีงบประมาณ ' + S.fy + '</span><h1>' + esc(s.name) + '</h1>' + (s.tagline ? '<p class="tag">' + esc(s.tagline) + '</p>' : '') +
      '<div class="cover-chips"><span>ตำแหน่ง ' + esc(s.position) + '</span>' + (s.subject ? '<span>' + esc(s.subject) + '</span>' : '') + '<span>' + esc(s.school) + ' ' + esc(s.area) + '</span></div>' +
      '<div class="row" style="margin-top:8px"><a class="btn light" href="#profile">' + ic('user', 16) + ' ประวัติส่วนตัว</a></div></div></div></section>';
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
      '<section class="grid3" style="align-items:start">' +
        '<div class="card"><div class="sec-h"><h3>' + ic('user', 18) + ' ข้อมูลส่วนตัว</h3><a href="#profile" class="small">ประวัติเต็ม ' + ic('chev', 13) + '</a></div>' + fieldsHtml(7) + '</div>' +
        '<div class="card"><div class="sec-h"><h3>' + ic('grad', 18) + ' ประวัติการศึกษา</h3></div><div class="tline" style="margin-top:14px">' + eduHtml() + '</div></div>' +
        '<div class="card"><div class="sec-h"><h3>' + ic('brief', 18) + ' ประวัติการทำงาน</h3></div><div class="tline" style="margin-top:14px">' + careerHtml() + '</div></div>' +
      '</section>' +
      (s.philosophy || skills ? '<section class="sec"><div class="grid2" style="align-items:start">' +
        (s.philosophy ? '<div class="card"><h3>ปรัชญาการสอน</h3><blockquote class="quote">' + blank(s.philosophy) + '</blockquote></div>' : '') +
        (skills ? '<div class="card"><h3>ความเชี่ยวชาญ</h3><div class="row" style="gap:6px;margin-top:10px">' + skills + '</div></div>' : '') +
      '</div></section>' : ''),
      cover());
  }

  function pProfile() {
    var s = D.settings, skills = skillsHtml();
    return pub('profile',
      '<div class="card raised hero-main">' + avatarHtml() + '<div class="hero-t"><span class="eyebrow">ประวัติส่วนตัว</span><h1>' + esc(s.name) + '</h1>' + (s.tagline ? '<p class="muted">' + esc(s.tagline) + '</p>' : '') + (s.bio ? '<p>' + esc(s.bio) + '</p>' : '') + '</div></div>' +
      '<section class="sec"><div class="prof-grid"><div style="display:flex;flex-direction:column;gap:16px">' +
        '<div class="card"><h3>' + ic('user', 18) + ' ข้อมูลส่วนตัว</h3>' + fieldsHtml() + '</div>' +
        (s.philosophy ? '<div class="card"><h3>ปรัชญาการสอน</h3><blockquote class="quote">' + blank(s.philosophy) + '</blockquote></div>' : '') +
        (skills ? '<div class="card"><h3>ความเชี่ยวชาญ</h3><div class="row" style="gap:6px;margin-top:10px">' + skills + '</div></div>' : '') + '</div>' +
      '<div style="display:flex;flex-direction:column;gap:16px">' +
        '<div class="card"><h3>' + ic('grad', 18) + ' ประวัติการศึกษา</h3><div class="tline" style="margin-top:14px">' + eduHtml() + '</div></div>' +
        '<div class="card"><h3>' + ic('brief', 18) + ' ประวัติการทำงาน</h3><div class="tline" style="margin-top:14px">' + careerHtml() + '</div></div></div></div></section>');
  }

  function pLogin() {
    var s = D.settings;
    return '<div class="login-wrap"><div class="login-art"><div class="brand" style="color:#fff">' + seal() + '<span class="brand-t"><b>แฟ้มผลงานและการประเมินครู</b><span style="color:#cfe6df">' + esc(s.school) + '</span></span></div>' +
      '<div style="display:flex;flex-direction:column;gap:14px"><h1>จัดการแฟ้มผลงานและการประเมินได้ในที่เดียว</h1><ul><li>แก้ประวัติ ภาพปก และการศึกษาได้เอง</li><li>ตั้งปีงบประมาณและธีมสีของแต่ละปี</li><li>ทุกการแก้ไขถูกบันทึกไว้ตรวจย้อนหลังได้</li></ul></div>' +
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
      '<p>เปิดไฟล์ <span class="mono">config.js</span> แล้ววางลิงก์ Web App ที่ได้จาก Apps Script (ลงท้ายด้วย <span class="mono">/exec</span>) ในช่อง <span class="mono">GAS_URL</span> จากนั้นอัปโหลดไฟล์ขึ้น GitHub อีกครั้ง Vercel จะอัปเดตเว็บให้เอง</p>' +
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
    function L(id, icon, t, cnt) { return '<a href="#' + id + '" class="' + (r === id ? 'on' : '') + '">' + ic(icon, 18) + ' ' + t + (cnt ? '<span class="cnt">' + cnt + '</span>' : '') + '</a>'; }
    var must = D.admin && D.admin.mustChange;
    return '<div class="admin"><nav class="aside" aria-label="เมนูหลังบ้าน"><a class="brand" href="#admin">' + seal() + '<span class="brand-t"><b>หลังบ้าน</b><span>แฟ้มผลงานและการประเมิน</span></span></a>' +
      '<div class="grp">ภาพรวม</div>' + L('admin', 'grid', 'แดชบอร์ด') +
      '<div class="grp">ข้อมูลครู</div>' + L('admin-profile', 'user', 'หน้าปกและประวัติ') +
      '<div class="grp">ระบบ</div>' + L('admin-years', 'cal', 'ปีงบประมาณและธีม') + L('admin-settings', 'gear', 'ตั้งค่า', must ? '!' : 0) + L('admin-logs', 'list', 'บันทึกการใช้งาน') +
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
    var next = [['2', 'คลังผลงาน อัลบั้มภาพ วิดีโอ รางวัล/อบรม ระบบที่จัดทำ'], ['3', 'แฟ้ม PA 2 รอบต่อปี รูป 6 ช่อง ประเด็นท้าทาย'], ['4', 'รอบประเมิน กรรมการ ลายเซ็น เลื่อนเงินเดือน แบบประเมินครู'], ['5', 'รายงาน PDF สถิติ โหมดนำเสนอ QR ตรวจสอบ'], ['6', 'LINE OA ปฏิทิน ผู้ช่วย AI สำรองข้อมูล ความปลอดภัย']];
    return adminShell('admin', 'สวัสดีครับ ' + esc(s.nick || s.name), 'ภาพรวมของแฟ้มผลงาน · ปีงบประมาณที่แสดงในหน้าหลัก ' + (s.defaultFy || '-'), '<a class="btn" href="#home">' + ic('eye', 16) + ' ดูหน้าสาธารณะ</a>',
      '<div class="grid4"><div class="kpi"><span class="l">ความครบของหน้าประวัติ</span><span class="v">' + sc.pct + '%</span><div class="prog"><i style="width:' + sc.pct + '%"></i></div></div>' +
      '<div class="kpi"><span class="l">ประวัติการศึกษา</span><span class="v">' + D.education.length + ' <small class="muted" style="font-size:15px">ระดับ</small></span></div>' +
      '<div class="kpi"><span class="l">ปีงบประมาณในระบบ</span><span class="v">' + D.years.length + '</span></div>' +
      '<div class="kpi"><span class="l">เข้าสู่ระบบครั้งก่อน</span><span class="v" style="font-size:18px">' + (prevIn ? fdt(prevIn.at) : 'ครั้งแรก') + '</span></div></div>' +
      '<div class="stat-grid" style="margin-top:16px"><div class="card"><h3 style="margin-bottom:6px">สิ่งที่ควรทำต่อ</h3>' + (todo || '<p class="small muted">ข้อมูลหน้าประวัติครบแล้ว</p>') + '</div>' +
      '<div class="card"><div class="sec-h"><h3>การใช้งานล่าสุด</h3><a class="small" href="#admin-logs">ดูทั้งหมด</a></div>' + (logs.map(function (l) { return '<div class="todo"><span class="small muted num" style="white-space:nowrap">' + fdt(l.at) + '</span><span style="flex:1">' + esc(l.action) + '<span class="small muted"> ' + esc(l.detail) + '</span></span></div>'; }).join('') || '<p class="small muted">ยังไม่มี</p>') + '</div>' +
      '<div class="card"><h3 style="margin-bottom:6px">ไฟล์ข้อมูลของระบบ</h3>' + (D.admin && D.admin.sheetUrl ? '<a class="todo" href="' + esc(D.admin.sheetUrl) + '" target="_blank" rel="noopener">' + ic('list', 16) + '<span style="flex:1">Google Sheet ฐานข้อมูล</span>' + ic('ext', 14) + '</a>' : '') + (D.admin && D.admin.folderUrl ? '<a class="todo" href="' + esc(D.admin.folderUrl) + '" target="_blank" rel="noopener">' + ic('folder', 16) + '<span style="flex:1">โฟลเดอร์ไฟล์ใน Google Drive</span>' + ic('ext', 14) + '</a>' : '') + '<p class="small muted" style="margin-top:8px">เวอร์ชันระบบ ' + esc(D.version) + '</p></div>' +
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
        '<div class="grid2"><div class="field"><label for="b-tagline">ข้อความใต้ชื่อ</label><input id="b-tagline" class="inp" data-b="s.tagline" value="' + esc(s.tagline) + '"></div><div class="field"><label for="b-cap">คำอธิบายภาพปก (ไม่บังคับ)</label><input id="b-cap" class="inp" data-b="s.coverCaption" value="' + esc(s.coverCaption) + '"></div></div></div>' +
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
      var rounds = [1, 2].map(function (r) {
        var g = roundRange(y.fy, r);
        return '<label class="yr-round" style="cursor:pointer"><b>รอบที่ ' + r + '</b><span class="small muted">' + fd(g[0]) + ' – ' + fd(g[1]) + '</span><span class="row small" style="gap:6px"><input type="radio" name="dr-' + y.fy + '" data-act="set-defround" data-fy="' + y.fy + '" data-r="' + r + '"' + (y.defaultRound === r ? ' checked' : '') + ' style="accent-color:var(--accent)"> เปิดรอบนี้ก่อนเมื่อเลือกปีนี้</span></label>';
      }).join('');
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
    return adminShell('admin-settings', 'ตั้งค่า', 'ข้อมูลเจ้าของแฟ้ม โลโก้ เอฟเฟค และรหัสผ่าน', '<button class="btn primary" data-act="draft-save">' + ic('check', 16) + ' บันทึกการตั้งค่า</button>',
      '<div class="grid2" style="align-items:start"><div style="display:flex;flex-direction:column;gap:14px">' + (must ? pw : '') +
      '<div class="card" style="display:flex;flex-direction:column;gap:12px"><h3>ข้อมูลเจ้าของแฟ้ม</h3>' + inp('name', 'ชื่อ–สกุล') + '<div class="grid2">' + inp('nick', 'ชื่อที่แสดง') + inp('position', 'ตำแหน่ง/วิทยฐานะ') + '</div>' + inp('subject', 'กลุ่มสาระ') + '<div class="grid2">' + inp('school', 'โรงเรียน') + inp('area', 'สังกัด') + '</div>' + inp('duty', 'หน้าที่') + '</div>' +
      '<div class="card" style="display:flex;flex-direction:column;gap:12px"><h3>โลโก้โรงเรียน</h3><div class="row" style="gap:16px">' + seal('big') + '<div style="display:flex;flex-direction:column;gap:8px"><div class="row"><label class="btn" for="logo-up">' + ic('upload', 16) + ' อัปโหลดโลโก้</label><input id="logo-up" type="file" data-up="logo" accept="image/png,image/jpeg,image/webp" style="display:none">' + (s.logo ? '<button class="btn danger" data-act="img-del" data-k="logo">' + ic('trash', 16) + ' ลบโลโก้</button>' : '') + '</div><span class="hint small muted">PNG พื้นหลังโปร่งใส ไม่เกิน 2 MB ใช้ที่หัวเว็บ หลังบ้าน หน้าเข้าสู่ระบบ วงแหวนโหลด และไอคอนแท็บ</span></div></div>' + inp('initials', 'อักษรย่อเมื่อไม่มีโลโก้') + '</div></div>' +
      '<div style="display:flex;flex-direction:column;gap:14px"><div class="card" style="display:flex;flex-direction:column;gap:12px"><h3>การแสดงผลและเอฟเฟค (ทุกคนเห็น)</h3>' +
        '<label class="row small" style="gap:8px"><input type="checkbox" data-b="s.fxGlow"' + (s.fxGlow ? ' checked' : '') + ' style="width:18px;height:18px;accent-color:var(--accent)"> เอฟเฟคเรืองแสง (ปุ่ม การ์ด และภาพปก)</label>' +
        '<label class="row small" style="gap:8px"><input type="checkbox" data-b="s.fxLoader"' + (s.fxLoader ? ' checked' : '') + ' style="width:18px;height:18px;accent-color:var(--accent)"> วงแหวนกำลังโหลดข้อมูล</label>' +
        '<div class="field"><label>เอฟเฟครูปภาพเมื่อชี้เมาส์</label><div class="seg" role="group">' + fx.map(function (o) { return '<button type="button" data-act="phfx-set" data-v="' + o[0] + '" class="' + (s.phFx === o[0] ? 'on' : '') + '">' + o[1] + '</button>'; }).join('') + '</div><span class="hint">ลองชี้เมาส์ที่รูปตัวอย่างด้านล่าง (เห็นผลจริงในเฟส 2 เมื่อมีภาพกิจกรรม)</span></div>' +
        '<div class="ind-photos phfx-prev">' + [['ค่ายคณิตศาสตร์', 168], ['กิจกรรมกลุ่ม', 30], ['รับเกียรติบัตร', 260]].map(function (p) { return '<button type="button" tabindex="-1">' + ph(p[1], 'image', p[0]) + '</button>'; }).join('') + '</div>' +
        '<div class="grid2"><div class="field"><label for="b-perpub">รายการต่อหน้า (หน้าสาธารณะ)</label><select id="b-perpub" class="inp" data-b="s.perPublic">' + [4, 6, 8, 9, 12, 16, 24].map(function (n) { return '<option value="' + n + '"' + (+s.perPublic === n ? ' selected' : '') + '>' + n + '</option>'; }).join('') + '</select></div><div class="field"><label for="b-peradm">แถวต่อหน้า (หลังบ้าน)</label><select id="b-peradm" class="inp" data-b="s.perAdmin">' + [5, 10, 20, 50].map(function (n) { return '<option value="' + n + '"' + (+s.perAdmin === n ? ' selected' : '') + '>' + n + '</option>'; }).join('') + '</select></div></div>' +
        '<div><button class="btn" data-act="loader-test">' + ic('eye', 16) + ' ทดลองวงแหวนโหลด</button></div></div>' +
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
     เส้นทางหน้าและการวาดหน้า
     ===================================================================== */
  var ADMIN_PAGES = { 'admin': aDash, 'admin-profile': aProfile, 'admin-years': aYears, 'admin-settings': aSettings, 'admin-logs': aLogs };
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
    else if (r === 'profile') html = pProfile();
    else if (r === 'login') html = pLogin();
    else html = pHome();
    $('app').innerHTML = html;
    var s = st();
    applyTheme();
    document.body.classList.toggle('fx-glow', !!s.fxGlow);
    ['zoom', 'pop', 'spot', 'off'].forEach(function (k) { document.body.classList.toggle('phfx-' + k, s.phFx === k); });
    document.title = (r.indexOf('admin') === 0 ? 'หลังบ้าน · ' : '') + 'แฟ้มผลงานครู · ' + (D.settings.name || '');
    setFavicon(); tick();
    if (r !== S.lastRoute) { window.scrollTo(0, 0); S.lastRoute = r; }
  }

  /* ---------- ผูกค่าจากช่องกรอกกับฉบับร่าง ---------- */
  function bindInput(el) {
    var b = el.getAttribute('data-b'); if (!b) return;
    var d = ensureDraft(), p = b.split('.'), v = el.type === 'checkbox' ? el.checked : el.value;
    if (p[0] === 's') { var k = p[1]; d.s[k] = (k === 'perPublic' || k === 'perAdmin') ? +v : v; markDirty('s.' + k); if (k === 'fxGlow') document.body.classList.toggle('fx-glow', !!v); return; }
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
      case 'page': if (el.disabled) break; S.pages[k] = +el.getAttribute('data-p'); render(); break;
      case 'a11y': openA11y(); break;
      case 'a11y-set': S.a11y[k] = el.getAttribute('data-v'); applyA11y(); if ($('modal-root').innerHTML) openA11y(); else render(); break;
      case 'toggle-pass': var pi = $('lg-pass'); pi.type = pi.type === 'password' ? 'text' : 'password'; break;
      case 'cover-pause': S.coverPaused = !S.coverPaused; render(); break;
      case 'logout':
        confirmBox('ออกจากระบบหลังบ้าน?' + (dirtyCount() ? ' <b>การแก้ไขที่ยังไม่บันทึกจะหายไป</b>' : ''), 'ออกจากระบบ', function () {
          api('logout', {}, { loader: 'กำลังออกจากระบบ' }, function () { saveToken(''); S.admin = false; D.admin = null; discardDraft(); location.hash = 'home'; render(); toast('ออกจากระบบแล้ว'); });
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
      case 'loader-test': showLoader('ทดลองวงแหวนโหลด'); setTimeout(hideLoader, 1800); break;
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
    if (e.key === 'Escape' && $('modal-root').innerHTML) closeModal();
    if ((e.ctrlKey || e.metaKey) && (e.key === 's' || e.key === 'S') && S.admin && dirtyCount()) { e.preventDefault(); saveDraft(); }
  });
  window.addEventListener('beforeunload', function (e) { if (dirtyCount()) { e.preventDefault(); e.returnValue = ''; } });
  window.addEventListener('hashchange', function () { closeModal(); render(); });

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
