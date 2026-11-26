/* แฟ้มผลงานและการประเมินครู — app.js (เฟส 8) · ES5 เท่านั้น */
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

  /* QR Code Generator for JavaScript · Copyright (c) 2009 Kazuhiko Arase · MIT license · ใช้สร้าง QR ของแบบประเมิน */
  var qrcode=function(){var qrcode=function(t,r){var e=t,n=c[r],o=null,i=0,a=null,u=[],f={},g=function(t,r){o=function(t){for(var r=new Array(t),e=0;e<t;e+=1){r[e]=new Array(t);for(var n=0;n<t;n+=1)r[e][n]=null}return r}(i=4*e+17),l(0,0),l(i-7,0),l(0,i-7),s(),h(),d(t,r),e>=7&&v(t),null==a&&(a=p(e,n,u)),w(a,r)},l=function(t,r){for(var e=-1;e<=7;e+=1)if(!(t+e<=-1||i<=t+e))for(var n=-1;n<=7;n+=1)r+n<=-1||i<=r+n||(o[t+e][r+n]=0<=e&&e<=6&&(0==n||6==n)||0<=n&&n<=6&&(0==e||6==e)||2<=e&&e<=4&&2<=n&&n<=4)},h=function(){for(var t=8;t<i-8;t+=1)null==o[t][6]&&(o[t][6]=t%2==0);for(var r=8;r<i-8;r+=1)null==o[6][r]&&(o[6][r]=r%2==0)},s=function(){for(var t=y.getPatternPosition(e),r=0;r<t.length;r+=1)for(var n=0;n<t.length;n+=1){var i=t[r],a=t[n];if(null==o[i][a])for(var u=-2;u<=2;u+=1)for(var f=-2;f<=2;f+=1)o[i+u][a+f]=-2==u||2==u||-2==f||2==f||0==u&&0==f}},v=function(t){for(var r=y.getBCHTypeNumber(e),n=0;n<18;n+=1){var a=!t&&1==(r>>n&1);o[Math.floor(n/3)][n%3+i-8-3]=a}for(n=0;n<18;n+=1){a=!t&&1==(r>>n&1);o[n%3+i-8-3][Math.floor(n/3)]=a}},d=function(t,r){for(var e=n<<3|r,a=y.getBCHTypeInfo(e),u=0;u<15;u+=1){var f=!t&&1==(a>>u&1);u<6?o[u][8]=f:u<8?o[u+1][8]=f:o[i-15+u][8]=f}for(u=0;u<15;u+=1){f=!t&&1==(a>>u&1);u<8?o[8][i-u-1]=f:u<9?o[8][15-u-1+1]=f:o[8][15-u-1]=f}o[i-8][8]=!t},w=function(t,r){for(var e=-1,n=i-1,a=7,u=0,f=y.getMaskFunction(r),c=i-1;c>0;c-=2)for(6==c&&(c-=1);;){for(var g=0;g<2;g+=1)if(null==o[n][c-g]){var l=!1;u<t.length&&(l=1==(t[u]>>>a&1)),f(n,c-g)&&(l=!l),o[n][c-g]=l,-1==(a-=1)&&(u+=1,a=7)}if((n+=e)<0||i<=n){n-=e,e=-e;break}}},p=function(t,r,e){for(var n=k.getRSBlocks(t,r),o=A(),i=0;i<e.length;i+=1){var a=e[i];o.put(a.getMode(),4),o.put(a.getLength(),y.getLengthInBits(a.getMode(),t)),a.write(o)}var u=0;for(i=0;i<n.length;i+=1)u+=n[i].dataCount;if(o.getLengthInBits()>8*u)throw"code length overflow. ("+o.getLengthInBits()+">"+8*u+")";for(o.getLengthInBits()+4<=8*u&&o.put(0,4);o.getLengthInBits()%8!=0;)o.putBit(!1);for(;!(o.getLengthInBits()>=8*u||(o.put(236,8),o.getLengthInBits()>=8*u));)o.put(17,8);return function(t,r){for(var e=0,n=0,o=0,i=new Array(r.length),a=new Array(r.length),u=0;u<r.length;u+=1){var f=r[u].dataCount,c=r[u].totalCount-f;n=Math.max(n,f),o=Math.max(o,c),i[u]=new Array(f);for(var g=0;g<i[u].length;g+=1)i[u][g]=255&t.getBuffer()[g+e];e+=f;var l=y.getErrorCorrectPolynomial(c),h=C(i[u],l.getLength()-1).mod(l);for(a[u]=new Array(l.getLength()-1),g=0;g<a[u].length;g+=1){var s=g+h.getLength()-a[u].length;a[u][g]=s>=0?h.getAt(s):0}}var v=0;for(g=0;g<r.length;g+=1)v+=r[g].totalCount;var d=new Array(v),w=0;for(g=0;g<n;g+=1)for(u=0;u<r.length;u+=1)g<i[u].length&&(d[w]=i[u][g],w+=1);for(g=0;g<o;g+=1)for(u=0;u<r.length;u+=1)g<a[u].length&&(d[w]=a[u][g],w+=1);return d}(o,n)};f.addData=function(t,r){var e=null;switch(r=r||"Byte"){case"Numeric":e=b(t);break;case"Alphanumeric":e=M(t);break;case"Byte":e=x(t);break;case"Kanji":e=m(t);break;default:throw"mode:"+r}u.push(e),a=null},f.isDark=function(t,r){if(t<0||i<=t||r<0||i<=r)throw t+","+r;return o[t][r]},f.getModuleCount=function(){return i},f.make=function(){if(e<1){for(var t=1;t<40;t++){for(var r=k.getRSBlocks(t,n),o=A(),i=0;i<u.length;i++){var a=u[i];o.put(a.getMode(),4),o.put(a.getLength(),y.getLengthInBits(a.getMode(),t)),a.write(o)}var c=0;for(i=0;i<r.length;i++)c+=r[i].dataCount;if(o.getLengthInBits()<=8*c)break}e=t}g(!1,function(){for(var t=0,r=0,e=0;e<8;e+=1){g(!0,e);var n=y.getLostPoint(f);(0==e||t>n)&&(t=n,r=e)}return r}())},f.createTableTag=function(t,r){t=t||2;var e="";e+='<table style="',e+=" border-width: 0px; border-style: none;",e+=" border-collapse: collapse;",e+=" padding: 0px; margin: "+(r=void 0===r?4*t:r)+"px;",e+='">',e+="<tbody>";for(var n=0;n<f.getModuleCount();n+=1){e+="<tr>";for(var o=0;o<f.getModuleCount();o+=1)e+='<td style="',e+=" border-width: 0px; border-style: none;",e+=" border-collapse: collapse;",e+=" padding: 0px; margin: 0px;",e+=" width: "+t+"px;",e+=" height: "+t+"px;",e+=" background-color: ",e+=f.isDark(n,o)?"#000000":"#ffffff",e+=";",e+='"/>';e+="</tr>"}return e+="</tbody>",e+="</table>"},f.createSvgTag=function(t,r,e,n){var o={};"object"==typeof arguments[0]&&(t=(o=arguments[0]).cellSize,r=o.margin,e=o.alt,n=o.title),t=t||2,r=void 0===r?4*t:r,(e="string"==typeof e?{text:e}:e||{}).text=e.text||null,e.id=e.text?e.id||"qrcode-description":null,(n="string"==typeof n?{text:n}:n||{}).text=n.text||null,n.id=n.text?n.id||"qrcode-title":null;var i,a,u,c,g=f.getModuleCount()*t+2*r,l="";for(c="l"+t+",0 0,"+t+" -"+t+",0 0,-"+t+"z ",l+='<svg version="1.1" xmlns="http://www.w3.org/2000/svg"',l+=o.scalable?"":' width="'+g+'px" height="'+g+'px"',l+=' viewBox="0 0 '+g+" "+g+'" ',l+=' preserveAspectRatio="xMinYMin meet"',l+=n.text||e.text?' role="img" aria-labelledby="'+B([n.id,e.id].join(" ").trim())+'"':"",l+=">",l+=n.text?'<title id="'+B(n.id)+'">'+B(n.text)+"</title>":"",l+=e.text?'<description id="'+B(e.id)+'">'+B(e.text)+"</description>":"",l+='<rect width="100%" height="100%" fill="white" cx="0" cy="0"/>',l+='<path d="',a=0;a<f.getModuleCount();a+=1)for(u=a*t+r,i=0;i<f.getModuleCount();i+=1)f.isDark(a,i)&&(l+="M"+(i*t+r)+","+u+c);return l+='" stroke="transparent" fill="black"/>',l+="</svg>"},f.createDataURL=function(t,r){t=t||2,r=void 0===r?4*t:r;var e=f.getModuleCount()*t+2*r,n=r,o=e-r;return S(e,e,function(r,e){if(n<=r&&r<o&&n<=e&&e<o){var i=Math.floor((r-n)/t),a=Math.floor((e-n)/t);return f.isDark(a,i)?0:1}return 1})},f.createImgTag=function(t,r,e){t=t||2,r=void 0===r?4*t:r;var n=f.getModuleCount()*t+2*r,o="";return o+="<img",o+=' src="',o+=f.createDataURL(t,r),o+='"',o+=' width="',o+=n,o+='"',o+=' height="',o+=n,o+='"',e&&(o+=' alt="',o+=B(e),o+='"'),o+="/>"};var B=function(t){for(var r="",e=0;e<t.length;e+=1){var n=t.charAt(e);switch(n){case"<":r+="&lt;";break;case">":r+="&gt;";break;case"&":r+="&amp;";break;case'"':r+="&quot;";break;default:r+=n}}return r};return f.createASCII=function(t,r){if((t=t||1)<2)return function(t){t=void 0===t?2:t;var r,e,n,o,i,a=1*f.getModuleCount()+2*t,u=t,c=a-t,g={"██":"█","█ ":"▀"," █":"▄","  ":" "},l={"██":"▀","█ ":"▀"," █":" ","  ":" "},h="";for(r=0;r<a;r+=2){for(n=Math.floor((r-u)/1),o=Math.floor((r+1-u)/1),e=0;e<a;e+=1)i="█",u<=e&&e<c&&u<=r&&r<c&&f.isDark(n,Math.floor((e-u)/1))&&(i=" "),u<=e&&e<c&&u<=r+1&&r+1<c&&f.isDark(o,Math.floor((e-u)/1))?i+=" ":i+="█",h+=t<1&&r+1>=c?l[i]:g[i];h+="\n"}return a%2&&t>0?h.substring(0,h.length-a-1)+Array(a+1).join("▀"):h.substring(0,h.length-1)}(r);t-=1,r=void 0===r?2*t:r;var e,n,o,i,a=f.getModuleCount()*t+2*r,u=r,c=a-r,g=Array(t+1).join("██"),l=Array(t+1).join("  "),h="",s="";for(e=0;e<a;e+=1){for(o=Math.floor((e-u)/t),s="",n=0;n<a;n+=1)i=1,u<=n&&n<c&&u<=e&&e<c&&f.isDark(o,Math.floor((n-u)/t))&&(i=0),s+=i?g:l;for(o=0;o<t;o+=1)h+=s+"\n"}return h.substring(0,h.length-1)},f.renderTo2dContext=function(t,r){r=r||2;for(var e=f.getModuleCount(),n=0;n<e;n++)for(var o=0;o<e;o++)t.fillStyle=f.isDark(n,o)?"black":"white",t.fillRect(n*r,o*r,r,r)},f};qrcode.stringToBytes=(qrcode.stringToBytesFuncs={default:function(t){for(var r=[],e=0;e<t.length;e+=1){var n=t.charCodeAt(e);r.push(255&n)}return r}}).default,qrcode.createStringToBytes=function(t,r){var e=function(){for(var e=D(t),n=function(){var t=e.read();if(-1==t)throw"eof";return t},o=0,i={};;){var a=e.read();if(-1==a)break;var u=n(),f=n()<<8|n();i[String.fromCharCode(a<<8|u)]=f,o+=1}if(o!=r)throw o+" != "+r;return i}(),n="?".charCodeAt(0);return function(t){for(var r=[],o=0;o<t.length;o+=1){var i=t.charCodeAt(o);if(i<128)r.push(i);else{var a=e[t.charAt(o)];"number"==typeof a?(255&a)==a?r.push(a):(r.push(a>>>8),r.push(255&a)):r.push(n)}}return r}};var t,r,e,n,o,i=1,a=2,u=4,f=8,c={L:1,M:0,Q:3,H:2},g=0,l=1,h=2,s=3,v=4,d=5,w=6,p=7,y=(t=[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],r=1335,e=7973,o=function(t){for(var r=0;0!=t;)r+=1,t>>>=1;return r},(n={}).getBCHTypeInfo=function(t){for(var e=t<<10;o(e)-o(r)>=0;)e^=r<<o(e)-o(r);return 21522^(t<<10|e)},n.getBCHTypeNumber=function(t){for(var r=t<<12;o(r)-o(e)>=0;)r^=e<<o(r)-o(e);return t<<12|r},n.getPatternPosition=function(r){return t[r-1]},n.getMaskFunction=function(t){switch(t){case g:return function(t,r){return(t+r)%2==0};case l:return function(t,r){return t%2==0};case h:return function(t,r){return r%3==0};case s:return function(t,r){return(t+r)%3==0};case v:return function(t,r){return(Math.floor(t/2)+Math.floor(r/3))%2==0};case d:return function(t,r){return t*r%2+t*r%3==0};case w:return function(t,r){return(t*r%2+t*r%3)%2==0};case p:return function(t,r){return(t*r%3+(t+r)%2)%2==0};default:throw"bad maskPattern:"+t}},n.getErrorCorrectPolynomial=function(t){for(var r=C([1],0),e=0;e<t;e+=1)r=r.multiply(C([1,B.gexp(e)],0));return r},n.getLengthInBits=function(t,r){if(1<=r&&r<10)switch(t){case i:return 10;case a:return 9;case u:case f:return 8;default:throw"mode:"+t}else if(r<27)switch(t){case i:return 12;case a:return 11;case u:return 16;case f:return 10;default:throw"mode:"+t}else{if(!(r<41))throw"type:"+r;switch(t){case i:return 14;case a:return 13;case u:return 16;case f:return 12;default:throw"mode:"+t}}},n.getLostPoint=function(qrcode){for(var t=qrcode.getModuleCount(),r=0,e=0;e<t;e+=1)for(var n=0;n<t;n+=1){for(var o=0,i=qrcode.isDark(e,n),a=-1;a<=1;a+=1)if(!(e+a<0||t<=e+a))for(var u=-1;u<=1;u+=1)n+u<0||t<=n+u||0==a&&0==u||i==qrcode.isDark(e+a,n+u)&&(o+=1);o>5&&(r+=3+o-5)}for(e=0;e<t-1;e+=1)for(n=0;n<t-1;n+=1){var f=0;qrcode.isDark(e,n)&&(f+=1),qrcode.isDark(e+1,n)&&(f+=1),qrcode.isDark(e,n+1)&&(f+=1),qrcode.isDark(e+1,n+1)&&(f+=1),0!=f&&4!=f||(r+=3)}for(e=0;e<t;e+=1)for(n=0;n<t-6;n+=1)qrcode.isDark(e,n)&&!qrcode.isDark(e,n+1)&&qrcode.isDark(e,n+2)&&qrcode.isDark(e,n+3)&&qrcode.isDark(e,n+4)&&!qrcode.isDark(e,n+5)&&qrcode.isDark(e,n+6)&&(r+=40);for(n=0;n<t;n+=1)for(e=0;e<t-6;e+=1)qrcode.isDark(e,n)&&!qrcode.isDark(e+1,n)&&qrcode.isDark(e+2,n)&&qrcode.isDark(e+3,n)&&qrcode.isDark(e+4,n)&&!qrcode.isDark(e+5,n)&&qrcode.isDark(e+6,n)&&(r+=40);var c=0;for(n=0;n<t;n+=1)for(e=0;e<t;e+=1)qrcode.isDark(e,n)&&(c+=1);return r+=Math.abs(100*c/t/t-50)/5*10},n),B=function(){for(var t=new Array(256),r=new Array(256),e=0;e<8;e+=1)t[e]=1<<e;for(e=8;e<256;e+=1)t[e]=t[e-4]^t[e-5]^t[e-6]^t[e-8];for(e=0;e<255;e+=1)r[t[e]]=e;var n={glog:function(t){if(t<1)throw"glog("+t+")";return r[t]},gexp:function(r){for(;r<0;)r+=255;for(;r>=256;)r-=255;return t[r]}};return n}();function C(t,r){if(void 0===t.length)throw t.length+"/"+r;var e=function(){for(var e=0;e<t.length&&0==t[e];)e+=1;for(var n=new Array(t.length-e+r),o=0;o<t.length-e;o+=1)n[o]=t[o+e];return n}(),n={getAt:function(t){return e[t]},getLength:function(){return e.length},multiply:function(t){for(var r=new Array(n.getLength()+t.getLength()-1),e=0;e<n.getLength();e+=1)for(var o=0;o<t.getLength();o+=1)r[e+o]^=B.gexp(B.glog(n.getAt(e))+B.glog(t.getAt(o)));return C(r,0)},mod:function(t){if(n.getLength()-t.getLength()<0)return n;for(var r=B.glog(n.getAt(0))-B.glog(t.getAt(0)),e=new Array(n.getLength()),o=0;o<n.getLength();o+=1)e[o]=n.getAt(o);for(o=0;o<t.getLength();o+=1)e[o]^=B.gexp(B.glog(t.getAt(o))+r);return C(e,0).mod(t)}};return n}var k=function(){var t=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12,7,37,13],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]],r=function(t,r){var e={};return e.totalCount=t,e.dataCount=r,e},e={};return e.getRSBlocks=function(e,n){var o=function(r,e){switch(e){case c.L:return t[4*(r-1)+0];case c.M:return t[4*(r-1)+1];case c.Q:return t[4*(r-1)+2];case c.H:return t[4*(r-1)+3];default:return}}(e,n);if(void 0===o)throw"bad rs block @ typeNumber:"+e+"/errorCorrectionLevel:"+n;for(var i=o.length/3,a=[],u=0;u<i;u+=1)for(var f=o[3*u+0],g=o[3*u+1],l=o[3*u+2],h=0;h<f;h+=1)a.push(r(g,l));return a},e}(),A=function(){var t=[],r=0,e={getBuffer:function(){return t},getAt:function(r){var e=Math.floor(r/8);return 1==(t[e]>>>7-r%8&1)},put:function(t,r){for(var n=0;n<r;n+=1)e.putBit(1==(t>>>r-n-1&1))},getLengthInBits:function(){return r},putBit:function(e){var n=Math.floor(r/8);t.length<=n&&t.push(0),e&&(t[n]|=128>>>r%8),r+=1}};return e},b=function(t){var r=i,e=t,n={getMode:function(){return r},getLength:function(t){return e.length},write:function(t){for(var r=e,n=0;n+2<r.length;)t.put(o(r.substring(n,n+3)),10),n+=3;n<r.length&&(r.length-n==1?t.put(o(r.substring(n,n+1)),4):r.length-n==2&&t.put(o(r.substring(n,n+2)),7))}},o=function(t){for(var r=0,e=0;e<t.length;e+=1)r=10*r+a(t.charAt(e));return r},a=function(t){if("0"<=t&&t<="9")return t.charCodeAt(0)-"0".charCodeAt(0);throw"illegal char :"+t};return n},M=function(t){var r=a,e=t,n={getMode:function(){return r},getLength:function(t){return e.length},write:function(t){for(var r=e,n=0;n+1<r.length;)t.put(45*o(r.charAt(n))+o(r.charAt(n+1)),11),n+=2;n<r.length&&t.put(o(r.charAt(n)),6)}},o=function(t){if("0"<=t&&t<="9")return t.charCodeAt(0)-"0".charCodeAt(0);if("A"<=t&&t<="Z")return t.charCodeAt(0)-"A".charCodeAt(0)+10;switch(t){case" ":return 36;case"$":return 37;case"%":return 38;case"*":return 39;case"+":return 40;case"-":return 41;case".":return 42;case"/":return 43;case":":return 44;default:throw"illegal char :"+t}};return n},x=function(t){var r=u,e=qrcode.stringToBytes(t),n={getMode:function(){return r},getLength:function(t){return e.length},write:function(t){for(var r=0;r<e.length;r+=1)t.put(e[r],8)}};return n},m=function(t){var r=f,e=qrcode.stringToBytesFuncs.SJIS;if(!e)throw"sjis not supported.";!function(){var t=e("友");if(2!=t.length||38726!=(t[0]<<8|t[1]))throw"sjis not supported."}();var n=e(t),o={getMode:function(){return r},getLength:function(t){return~~(n.length/2)},write:function(t){for(var r=n,e=0;e+1<r.length;){var o=(255&r[e])<<8|255&r[e+1];if(33088<=o&&o<=40956)o-=33088;else{if(!(57408<=o&&o<=60351))throw"illegal char at "+(e+1)+"/"+o;o-=49472}o=192*(o>>>8&255)+(255&o),t.put(o,13),e+=2}if(e<r.length)throw"illegal char at "+(e+1)}};return o},L=function(){var t=[],r={writeByte:function(r){t.push(255&r)},writeShort:function(t){r.writeByte(t),r.writeByte(t>>>8)},writeBytes:function(t,e,n){e=e||0,n=n||t.length;for(var o=0;o<n;o+=1)r.writeByte(t[o+e])},writeString:function(t){for(var e=0;e<t.length;e+=1)r.writeByte(t.charCodeAt(e))},toByteArray:function(){return t},toString:function(){var r="";r+="[";for(var e=0;e<t.length;e+=1)e>0&&(r+=","),r+=t[e];return r+="]"}};return r},D=function(t){var r=t,e=0,n=0,o=0,i={read:function(){for(;o<8;){if(e>=r.length){if(0==o)return-1;throw"unexpected end of file./"+o}var t=r.charAt(e);if(e+=1,"="==t)return o=0,-1;t.match(/^\s$/)||(n=n<<6|a(t.charCodeAt(0)),o+=6)}var i=n>>>o-8&255;return o-=8,i}},a=function(t){if(65<=t&&t<=90)return t-65;if(97<=t&&t<=122)return t-97+26;if(48<=t&&t<=57)return t-48+52;if(43==t)return 62;if(47==t)return 63;throw"c:"+t};return i},S=function(t,r,e){for(var n=function(t,r){var e=t,n=r,o=new Array(t*r),i={setPixel:function(t,r,n){o[r*e+t]=n},write:function(t){t.writeString("GIF87a"),t.writeShort(e),t.writeShort(n),t.writeByte(128),t.writeByte(0),t.writeByte(0),t.writeByte(0),t.writeByte(0),t.writeByte(0),t.writeByte(255),t.writeByte(255),t.writeByte(255),t.writeString(","),t.writeShort(0),t.writeShort(0),t.writeShort(e),t.writeShort(n),t.writeByte(0);var r=a(2);t.writeByte(2);for(var o=0;r.length-o>255;)t.writeByte(255),t.writeBytes(r,o,255),o+=255;t.writeByte(r.length-o),t.writeBytes(r,o,r.length-o),t.writeByte(0),t.writeString(";")}},a=function(t){for(var r=1<<t,e=1+(1<<t),n=t+1,i=u(),a=0;a<r;a+=1)i.add(String.fromCharCode(a));i.add(String.fromCharCode(r)),i.add(String.fromCharCode(e));var f,c,g,l=L(),h=(f=l,c=0,g=0,{write:function(t,r){if(t>>>r!=0)throw"length over";for(;c+r>=8;)f.writeByte(255&(t<<c|g)),r-=8-c,t>>>=8-c,g=0,c=0;g|=t<<c,c+=r},flush:function(){c>0&&f.writeByte(g)}});h.write(r,n);var s=0,v=String.fromCharCode(o[s]);for(s+=1;s<o.length;){var d=String.fromCharCode(o[s]);s+=1,i.contains(v+d)?v+=d:(h.write(i.indexOf(v),n),i.size()<4095&&(i.size()==1<<n&&(n+=1),i.add(v+d)),v=d)}return h.write(i.indexOf(v),n),h.write(e,n),h.flush(),l.toByteArray()},u=function(){var t={},r=0,e={add:function(n){if(e.contains(n))throw"dup key:"+n;t[n]=r,r+=1},size:function(){return r},indexOf:function(r){return t[r]},contains:function(r){return void 0!==t[r]}};return e};return i}(t,r),o=0;o<r;o+=1)for(var i=0;i<t;i+=1)n.setPixel(i,o,e(i,o));var a=L();n.write(a);for(var u=function(){var t=0,r=0,e=0,n="",o={},i=function(t){n+=String.fromCharCode(a(63&t))},a=function(t){if(t<0);else{if(t<26)return 65+t;if(t<52)return t-26+97;if(t<62)return t-52+48;if(62==t)return 43;if(63==t)return 47}throw"n:"+t};return o.writeByte=function(n){for(t=t<<8|255&n,r+=8,e+=1;r>=6;)i(t>>>r-6),r-=6},o.flush=function(){if(r>0&&(i(t<<6-r),t=0,r=0),e%3!=0)for(var o=3-e%3,a=0;a<o;a+=1)n+="="},o.toString=function(){return n},o}(),f=a.toByteArray(),c=0;c<f.length;c+=1)u.writeByte(f[c]);return u.flush(),"data:image/gif;base64,"+u};return qrcode}();qrcode.stringToBytesFuncs["UTF-8"]=function(t){return function(t){for(var r=[],e=0;e<t.length;e++){var n=t.charCodeAt(e);n<128?r.push(n):n<2048?r.push(192|n>>6,128|63&n):n<55296||n>=57344?r.push(224|n>>12,128|n>>6&63,128|63&n):(e++,n=65536+((1023&n)<<10|1023&t.charCodeAt(e)),r.push(240|n>>18,128|n>>12&63,128|n>>6&63,128|63&n))}return r}(t)};
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
      if (err === 'AUTH' && opt.com) { if (!opt.silent) comLost(); cb('หมดเวลาการเข้าระบบกรรมการ กรุณาใส่รหัสอีกครั้ง'); return; }
      if (err === 'AUTH') { authLost(); cb('หมดเวลาการเข้าสู่ระบบ กรุณาเข้าสู่ระบบใหม่'); return; }
      cb(err, res);
    }
    fetch(GAS_URL, { method: 'POST', headers: { 'Content-Type': 'text/plain;charset=utf-8' }, body: JSON.stringify({ action: action, token: opt.token || S.token, data: data || {} }), redirect: 'follow' })
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
    saveToken(''); S.admin = false; D.admin = null; D.docs = {}; S.comList = {}; S.ops = S.bk = S.sec = S.cal = S.calc = S.src = S.trend = S.notifs = S.rqDraft = null; S.rqAt = 0; S.draft = null; S.dirty = {}; S.form = null; backToPublic();
    S.loginErr = 'หมดเวลาการเข้าสู่ระบบ กรุณาเข้าสู่ระบบใหม่';
    if (route().indexOf('admin') === 0) location.hash = 'login'; else render();
  }
  function setContent(c) { var o = {}; for (var k in EMPTY_CONTENT) o[k] = (c && c[k]) || []; D.content = o; }
  function setPublic(data, fromCache) {
    D.settings = data.settings; D.education = data.education || []; D.career = data.career || []; D.years = data.years || []; D.version = data.version || ''; if ('survey' in data) D.survey = data.survey || null; if ('events' in data) D.events = data.events || [];
    if ((!S.admin || !D.admin) && !S.com) setContent(data.content);
    if (!S.fy || !yearOf(S.fy)) S.fy = +D.settings.defaultFy || (D.years[0] && D.years[0].fy) || fyNow(new Date());
    if (!fromCache) { try { localStorage.setItem(CACHE_KEY, JSON.stringify(data)); } catch (e) { } }
  }
  function setAdmin(data) {
    D.docs = {};
    D.admin = { logs: data.logs || [], evalSum: data.evalSum || { salary: [], survey: [] }, mustChange: !!data.mustChange, sheetUrl: data.sheetUrl, folderUrl: data.folderUrl, ops: data.ops, requests: data.requests || [] };
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
      localStorage.setItem(CACHE_KEY, JSON.stringify({ settings: s, education: D.education.map(function (e) { var x = clone(e); delete x.logoId; return x; }), career: D.career.map(function (c) { var x = clone(c); delete x.logoId; return x; }), years: D.years, content: S.admin || S.com ? old.content : D.content, version: D.version }));
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
    car: { w: 400, h: 400, png: true, max: 2, label: 'โลโก้ที่ทำงาน' },
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
    var nav = NAV.concat((D.events || []).length ? [['calendar', 'ปฏิทิน']] : []).concat(D.survey ? [['survey', 'ประเมินครู']] : []).map(function (it) { var on = r === it[0] || (it[0] === 'gallery' && r.indexOf('album-') === 0) || (it[0] === 'pa' && (r === 'agreement' || r === 'idplan')); return '<a href="#' + it[0] + '" class="' + (on ? 'on' : '') + '"' + (on ? ' aria-current="page"' : '') + '>' + it[1] + '</a>'; }).join('');
    var right = (S.com ? '' : fySelect('fy-sel')) + (S.com ? '<a class="btn primary login-ic" href="#committee" aria-label="หน้าให้คะแนน (กรรมการ)" title="หน้าให้คะแนน (กรรมการ)">' + ic('pen', 18) + '</a>' : '') + (S.com ? '' : S.admin ? '<a class="btn primary login-ic" href="#admin" aria-label="หลังบ้าน" title="หลังบ้าน">' + ic('grid', 18) + '</a>' : '<a class="btn login-ic" href="#login" aria-label="เข้าสู่ระบบ" title="เข้าสู่ระบบ">' + ic('lock', 18) + '</a>');
    return '<div class="info-strip"><div class="wrap">' + clock() + '<span>ปีงบประมาณปัจจุบัน <b class="js-fy"></b> · <span class="js-sem"></span></span><button class="strip-btn" data-act="a11y" aria-label="การแสดงผล ขนาดตัวอักษร และโหมดสี">' + ic('sun', 15) + ' การแสดงผล</button></div></div>' +
      '<header class="site-head"><div class="wrap"><a class="brand" href="#home" aria-label="แฟ้มผลงานครู หน้าหลัก">' + seal() + '<span class="brand-t"><b>แฟ้มผลงานครู</b><span>' + esc(s.school) + ' ' + esc(s.area) + '</span></span></a><nav class="nav" aria-label="เมนูหลัก">' + nav + '</nav>' + right + '</div></header>';
  }
  function siteFoot() {
    return '<footer class="foot"><div class="wrap"><span>' + FOOTER + '</span><span><a href="#verify">ตรวจสอบเอกสาร</a> · Google Apps Script + Google Sheets</span></div></footer>';
  }
  function pub(r, inner, top) { return siteHead(r) + comBanner(r) + (top || '') + '<main class="pub"><div class="wrap">' + inner + '</div></main>' + siteFoot(); }
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
    return D.career.map(function (c) { return '<div class="tl-item edu"><span class="logo">' + (c.logoUrl ? '<img src="' + esc(c.logoUrl) + '" alt="โลโก้ ' + esc(c.place) + '">' : ic('brief', 24)) + '</span><span class="edu-t"><span class="y">' + blank(c.period) + '</span><span class="t">' + blank(c.role) + '</span><span class="small muted">' + blank(c.place) + '</span></span></div>'; }).join('');
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
      '</section>' + homeEval() +
      (s.philosophy || skills ? '<section class="sec"><div class="grid2" style="align-items:start">' +
        (s.philosophy ? '<div class="card"><h3>ปรัชญาการสอน</h3><blockquote class="quote">' + blank(s.philosophy) + '</blockquote></div>' : '') +
        (skills ? '<div class="card"><h3>ความเชี่ยวชาญ</h3><div class="row" style="gap:6px;margin-top:10px">' + skills + '</div></div>' : '') +
      '</div></section>' : '') + homeSections() + homeSurveyCta(),
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
      '<button class="btn primary" type="submit" id="lg-btn" style="justify-content:center">' + ic('lock', 16) + ' เข้าสู่ระบบ</button></form><a class="card com-link" href="#committee">' + ic('shield', 20) + '<span><b>สำหรับคณะกรรมการประเมิน PA</b><span class="small muted">เข้าระบบด้วยรหัสกรรมการ</span></span>' + ic('chev', 16) + '</a></div></div></div>';
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
      '<div class="grp">แฟ้ม PA ปีงบ ' + S.fy + '</div>' + L('admin-agreement', 'pen', 'ข้อตกลง PA') + L('admin-pa', 'file', 'แฟ้ม PA') + L('admin-idplan', 'target', 'ID Plan') + L('admin-checklist', 'check', 'เช็กลิสต์ก่อนส่ง') + L('admin-committee', 'users', 'กรรมการและผลประเมิน') + L('admin-requests', 'chat', 'คำขอหลักฐาน', reqOpenN()) +
      '<div class="grp">การประเมินอื่น</div>' + L('admin-salary', 'coins', 'เลื่อนเงินเดือน') + L('admin-survey', 'chat', 'แบบประเมินความพึงพอใจ') +
      '<div class="grp">ผลงาน</div>' + L('admin-works', 'folder', 'คลังผลงาน', D.content.works.length) + L('admin-gallery', 'image', 'ภาพกิจกรรม', D.content.albums.length) + L('admin-videos', 'video', 'วิดีโอ', D.content.videos.length) + L('admin-awards', 'award', 'รางวัล/อบรม', D.content.awards.length) + L('admin-systems', 'code', 'ระบบที่จัดทำ', D.content.systems.length) +
      '<div class="grp">เครื่องมือ</div>' + L('admin-calendar', 'cal', 'ปฏิทิน') + L('admin-calc', 'calc', 'คำนวณผลก่อน–หลังเรียน') + L('admin-sync', 'refresh', 'เชื่อมข้อมูลจากระบบ') + L('admin-ai', 'spark', 'ผู้ช่วย AI เขียนรายงาน') + L('admin-stats', 'chart', 'สถิติและกราฟ') + L('admin-verify', 'shield', 'ตรวจสอบเอกสาร (QR)') + '<a href="#report">' + ic('print', 18) + ' รายงาน PDF</a><a href="#present">' + ic('slides', 18) + ' โหมดนำเสนอ</a>' +
      '<div class="grp">ระบบ</div>' + L('admin-years', 'cal', 'ปีงบประมาณและสีธีม') + L('admin-themes', 'spark', 'ชุดธีมและฟอนต์') + L('admin-settings', 'gear', 'ตั้งค่า', must ? '!' : 0) + L('admin-ops', 'link', 'การเชื่อมต่อ (LINE · AI)') + L('admin-backup', 'cloud', 'สำรองข้อมูล') + L('admin-security', 'shield', 'ความปลอดภัย', opsSum().twofa ? 0 : '!') + L('admin-logs', 'list', 'บันทึกการใช้งาน') +
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
    todo = reqTodo() + todo + comTodo() + evalTodo() + opsTodo();
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
      '<div class="card"><h3 style="margin-bottom:6px">ทางลัด</h3><div class="row" style="gap:6px"><a class="btn sm" href="#admin-pa">' + ic('file', 14) + ' แฟ้ม PA</a><a class="btn sm" href="#admin-agreement">' + ic('pen', 14) + ' ข้อตกลง</a><a class="btn sm" href="#admin-idplan">' + ic('target', 14) + ' ID Plan</a><a class="btn sm" href="#admin-committee">' + ic('users', 14) + ' กรรมการ</a><button class="btn sm" data-act="c-new" data-k="works">' + ic('plus', 14) + ' ผลงาน</button><button class="btn sm" data-act="c-new" data-k="albums">' + ic('plus', 14) + ' อัลบั้ม</button><button class="btn sm" data-act="c-new" data-k="videos">' + ic('plus', 14) + ' วิดีโอ</button><button class="btn sm" data-act="c-new" data-k="awards">' + ic('plus', 14) + ' รางวัล/อบรม</button><button class="btn sm" data-act="c-new" data-k="systems">' + ic('plus', 14) + ' ระบบ</button></div></div>' +
      dashExtra() + '</div>');
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
      return '<div class="erow c4"><span style="position:relative"><label class="logo-up" for="car-logo-' + i + '" title="อัปโหลดโลโก้">' + (c.logoUrl ? '<img src="' + esc(c.logoUrl) + '" alt="">' : ic('upload', 18)) + '<span class="sr">อัปโหลดโลโก้ที่ทำงาน แถว ' + (i + 1) + '</span></label><input type="file" id="car-logo-' + i + '" data-up="car" data-i="' + i + '" accept="image/png,image/jpeg,image/webp" style="display:none">' + (c.logoUrl ? '<button class="iph-x" style="top:-6px;right:-6px" data-act="car-logo-del" data-i="' + i + '" aria-label="ลบโลโก้ แถว ' + (i + 1) + '">' + ic('x', 12) + '</button>' : '') + '</span>' +
        '<input class="inp" data-b="car.' + i + '.period" value="' + esc(c.period) + '" placeholder="2562 – ปัจจุบัน" aria-label="ช่วงเวลา แถว ' + (i + 1) + '"><input class="inp" data-b="car.' + i + '.role" value="' + esc(c.role) + '" placeholder="ตำแหน่ง" aria-label="ตำแหน่ง แถว ' + (i + 1) + '"><input class="inp" data-b="car.' + i + '.place" value="' + esc(c.place) + '" placeholder="หน่วยงาน" aria-label="หน่วยงาน แถว ' + (i + 1) + '">' +
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
        (d.car.length ? '<div class="erow c4 h"><span>โลโก้</span><span>ช่วงเวลา</span><span>ตำแหน่ง</span><span>หน่วยงาน</span><span></span></div>' + car : '<p class="small muted">ยังไม่มี กดเพิ่มแถว</p>') + '</div>');
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
  function canOpen(x) { return S.admin || x.vis === 'public' || (!!S.com && x.vis === 'committee'); }
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
  function canSeeLink(l, sy) { if (S.com) return !!l.url && l.vis !== 'private' && sy.vis !== 'private'; return S.admin || (l.vis === 'public' && sy.vis === 'public' && l.url); }
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
      return '<a class="lk" href="' + esc(l.url) + '" target="_blank" rel="noopener">' + ic(T.i, 15) + ' <b>' + T.t + '</b><span class="host">' + esc(showUrl(l.url)) + '</span>' + ((S.admin || S.com) && l.vis !== 'public' ? ' ' + visChip(l.vis) : '') + ic('ext', 14) + '</a>';
    }).join('');
  }
  function sysCard(sy) {
    var pl = primaryLink(sy), stt = SSTATUS[sy.status] || SSTATUS.live;
    return '<article class="sys-card">' + shot(sy) +
      '<div class="row" style="gap:6px"><span class="pill ' + stt.c + '">' + stt.t + '</span><span class="chip">' + (SCAT[sy.cat] || '') + '</span>' + (sy.year ? '<span class="chip">ปี ' + sy.year + '</span>' : '') + ((S.admin || S.com) && sy.vis !== 'public' ? visChip(sy.vis) : '') + '</div>' +
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
    return '<button class="wcard" data-act="open-award" data-id="' + a.id + '">' + certThumb(a) + '<div class="m"><span class="chip ' + (a.type === 'award' ? 'gold' : 'ind') + '">' + ATYPE[a.type] + '</span><span class="chip">' + esc(a.level) + '</span>' + (a.hours ? '<span class="chip">' + a.hours + ' ชม.</span>' : '') + ((S.admin || S.com) && a.vis !== 'public' ? visChip(a.vis) : '') + '</div><div class="t">' + esc(a.title) + '</div><div class="small muted">' + fd(a.date) + (a.org ? ' · ' + blank(a.org) : '') + '</div></button>';
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
      '<div class="t">' + esc(w.title) + '</div><div class="m"><span class="small muted">' + fd(w.date) + '</span>' + indChips(w.ind) + ((S.admin || S.com) && w.vis !== 'public' ? visChip(w.vis) : '') + '</div>' +
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
    return '<a class="album" href="#album-' + a.id + '">' + media + '<span class="t">' + esc(a.title) + '</span><span class="small muted">' + fd(a.date) + (a.desc ? ' · ' + esc(a.desc) : '') + '</span>' + ((S.admin || S.com) && a.vis !== 'public' ? '<span>' + visChip(a.vis) + '</span>' : '') + '</a>';
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
      (locked && !S.admin && !S.com ? '<div class="note" style="margin-top:14px">' + ic('lock', 15) + ' คลิปที่มีป้าย "เฉพาะกรรมการ" เปิดได้เฉพาะคณะกรรมการประเมิน</div>' : '') + groups);
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
    out += homeCoverage();
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
  function docMode() { return S.admin ? 'admin' : (S.com ? 'com' : 'pub'); }
  function docsOf(fy) { var d = D.docs[fy]; return d && d.mode === docMode() ? d : null; }
  function needDocs(fy) {
    var key = fy + docMode();
    if (docsOf(fy) || S.docsLoading[key]) return;
    if (S.com && fy === S.com.committee.fy) { comRefresh(); return; }
    S.docsLoading[key] = 1;
    api(S.admin ? 'adminYearDocs' : 'getYearDocs', { fy: fy }, { loader: false }, function (err, res) {
      S.docsLoading[key] = 0;
      if (err) { if (!S.docsErr) toast('โหลดเอกสารปีงบ ' + fy + ' ไม่สำเร็จ: ' + err); S.docsErr = err; return; }
      S.docsErr = ''; setDocs(res); if (S.fy === fy) render();
    });
  }
  function setDocs(res) { res.mode = docMode(); D.docs[res.fy] = res; S.agDraft = null; S.idpDraft = null; }
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
      '<div class="card raised" style="margin-top:16px"><div class="pa-head"><div><span class="eyebrow">ผลการพัฒนางานตามข้อตกลง (PA)</span><h1 style="margin-top:4px">ปีงบประมาณ ' + S.fy + '</h1><p class="muted">รอบการประเมิน ' + fd(g[0]) + ' – ' + fd(g[1]) + ' · ประเมินปีละ 1 ครั้ง</p></div><div class="row">' + docPill(pa.status) + '<a class="btn" href="#present">' + ic('slides', 16) + ' โหมดนำเสนอ</a><a class="btn" href="#report">' + ic('print', 16) + ' รายงาน PDF</a>' + (S.admin ? '<a class="btn primary" href="#admin-pa">' + ic('edit', 16) + ' แก้ไขแฟ้ม</a>' : '') + '</div></div>' +
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
      aiStrip('ind', code) + '<div class="field"><label for="pe-task">งาน (Tasks) ที่จะปฏิบัติ</label><textarea id="pe-task" class="inp" rows="4">' + esc(x.task) + '</textarea></div>' +
      '<div class="field"><label for="pe-out">ผลลัพธ์ (Outcomes) ที่คาดหวัง</label><textarea id="pe-out" class="inp" rows="3">' + esc(x.out) + '</textarea></div>' +
      '<div class="field"><label for="pe-kpi">ตัวชี้วัด (Indicators)</label><textarea id="pe-kpi" class="inp" rows="3">' + esc(x.kpi) + '</textarea></div>' +
      '<div class="note small">' + ic('folder', 14) + ' หลักฐานที่ผูกตัวชี้วัดนี้ในปีงบ ' + S.fy + ': ' + (ev.length ? ev.map(function (e) { return esc(e.title); }).join(' · ') : 'ยังไม่มี เพิ่มได้จากคลังผลงาน วิดีโอ รางวัล โดยติ๊กตัวชี้วัด ' + code) + '</div><div id="f-err"></div>',
      '<button class="btn" data-act="close-modal">ยกเลิก</button><button class="btn primary" data-act="pa-save" data-k="' + code + '">' + ic('check', 16) + ' บันทึก</button>', true);
  }
  function chForm() {
    var c = docsOf(S.fy).pa.challenge;
    openModal('ส่วนที่ 2 ประเด็นท้าทาย ปีงบ ' + S.fy,
      aiStrip('ch') + '<div class="field"><label for="ch-title">ประเด็นท้าทาย</label><input id="ch-title" class="inp" value="' + esc(c.title) + '"></div>' +
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
     เฟส 4: คณะกรรมการประเมิน PA (ปีงบละ 3 คน) · เข้าระบบด้วยรหัส
     ให้คะแนนแบบ PA2 · ลงลายมือชื่อ · สรุปผล PA3 · ฉบับพิมพ์
     ===================================================================== */
  var COM_KEY = 'tp-com';
  var LV_LABEL = ['', 'ปฏิบัติได้ต่ำกว่าระดับที่คาดหวังมาก', 'ปฏิบัติได้ต่ำกว่าระดับที่คาดหวัง', 'ปฏิบัติได้ตามระดับที่คาดหวัง', 'ปฏิบัติได้สูงกว่าระดับที่คาดหวัง'];
  var EXP_LV = { '': 'ปรับประยุกต์ (Apply & Adapt)', 'ชำนาญการ': 'แก้ปัญหา', 'ชำนาญการพิเศษ': 'ริเริ่ม พัฒนา', 'เชี่ยวชาญ': 'คิดค้น ปรับเปลี่ยน', 'เชี่ยวชาญพิเศษ': 'สร้างการเปลี่ยนแปลง' };
  var P2_ITEMS = [
    { k: 'm', code: '1', name: 'วิธีดำเนินการ', max: 20, d: 'พิจารณาจากการดำเนินการที่ถูกต้อง ครบถ้วน เป็นไปตามระยะเวลาที่กำหนดไว้ในข้อตกลง และสะท้อนให้เห็นถึงระดับการปฏิบัติที่คาดหวังตามตำแหน่งและวิทยฐานะ' },
    { k: 'q', code: '2.1', name: 'เชิงปริมาณ', max: 10, d: 'พิจารณาจากการบรรลุเป้าหมายเชิงปริมาณได้ครบถ้วนตามข้อตกลง และมีความถูกต้อง เชื่อถือได้' },
    { k: 'l', code: '2.2', name: 'เชิงคุณภาพ', max: 10, d: 'พิจารณาจากการบรรลุเป้าหมายเชิงคุณภาพได้ครบถ้วน ถูกต้อง เชื่อถือได้ และปรากฏผลต่อคุณภาพผู้เรียนได้ตามข้อตกลง' }
  ];
  var COM_ROLE = { chair: 'ประธานกรรมการ', member: 'กรรมการ' };
  var COM_ST = { pending: ['ยังไม่เข้าระบบ', 'off'], draft: ['กำลังประเมิน', 'warn'], submitted: ['ส่งผลแล้ว', 'good'] };
  S.com = null; S.comDraft = null; S.comDirty = false; S.comRev = 0; S.comErr = ''; S.comPending = false;
  S.comList = {}; S.comLoading = {}; S.comListErr = ''; S.formSel = 'all';

  /* ---------- การคำนวณคะแนน ---------- */
  function scoring() {
    if (S.com && S.com.scoring) return S.com.scoring;
    var s = D.settings || {};
    return { p1Max: +s.p1Max || 60, p2Max: +s.p2Max || 40, passPct: +s.passPct || 70, acad: s.acad || '', rank: s.rank || '', salary: s.salary || '' };
  }
  function expLevel() { return EXP_LV[scoring().acad || ''] || EXP_LV['']; }
  function p2Max(it) { return it.max * scoring().p2Max / 40; }
  function emptyScore() { return { load: '', p1: {}, p2: { m: 0, q: 0, l: 0 }, notes: {}, strong: '', improve: '', comment: '' }; }
  function paCalc(d) {
    d = d || emptyScore();
    var sg = scoring(), p1s = d.p1 || {}, p2s = d.p2 || {}, s1 = 0, filled = 0, n = IND_BASE.length, p2 = 0, p2f = 0;
    IND_BASE.forEach(function (x) { var v = +p1s[x.code] || 0; s1 += v; if (v) filled++; });
    var p1 = s1 / (n * 4) * sg.p1Max;
    P2_ITEMS.forEach(function (it) { var v = +p2s[it.k] || 0; p2 += v / 4 * p2Max(it); if (v) p2f++; });
    var full = sg.p1Max + sg.p2Max, total = p1 + p2, pct = full ? total / full * 100 : 0;
    return { p1: p1, p2: p2, total: total, pct: pct, pass: pct >= sg.passPct, filled: filled, p2filled: p2f, p1sum: s1 };
  }
  function scoreMiss(d) {
    var c = paCalc(d), miss = [];
    if (!d.load) miss.push('ภาระงาน');
    if (c.filled < IND_BASE.length) miss.push('ส่วนที่ 1 อีก ' + (IND_BASE.length - c.filled) + ' ข้อ');
    if (c.p2filled < P2_ITEMS.length) miss.push('ส่วนที่ 2 อีก ' + (P2_ITEMS.length - c.p2filled) + ' ข้อ');
    return miss;
  }
  /** สรุปผลจากกรรมการที่ส่งแล้ว: ผ่านเมื่อกรรมการทุกคนให้ไม่ต่ำกว่าเกณฑ์ */
  function setRes(members) {
    var done = members.filter(function (m) { return m.status === 'submitted' && m.data; });
    if (!done.length) return null;
    var t = 0, ok = true, minPct = 101, loadBad = false;
    done.forEach(function (m) { var c = paCalc(m.data); t += c.total; if (!c.pass) ok = false; if (c.pct < minPct) minPct = c.pct; if (m.data.load === 'no') loadBad = true; });
    return { avg: t / done.length, n: done.length, of: members.length, pass: ok, complete: done.length === members.length && members.length >= 3, minPct: minPct, loadBad: loadBad };
  }
  function resPill(r) {
    if (!r) return '<span class="pill off">ยังไม่มีผล</span>';
    return '<span class="pill ' + (r.pass ? 'good">ผ่านเกณฑ์' : 'bad">ไม่ผ่านเกณฑ์') + (r.complete ? '' : ' (ผลชั่วคราว)') + '</span>';
  }
  function comPill(m) { var x = COM_ST[m.status] || COM_ST.pending; return '<span class="pill ' + x[1] + '">' + x[0] + (m.status === 'submitted' && m.submittedAt ? ' ' + fd(m.submittedAt.slice(0, 10)) : '') + '</span>'; }
  function daysLeft(due) { var p = String(due).split('-'), end = new Date(+p[0], +p[1] - 1, +p[2], 23, 59, 59).getTime(); return Math.floor((end - Date.now()) / 864e5); }
  function dueChip(due) {
    if (!due) return '';
    var d = daysLeft(due), t = d < 0 ? 'เลยกำหนดส่ง ' + (-d) + ' วัน' : (d === 0 ? 'ครบกำหนดส่งวันนี้' : 'เหลือ ' + d + ' วัน · ส่งภายใน ' + fd(due));
    return '<span class="due' + (d < 0 ? ' late' : '') + '">' + ic('cal', 13) + ' ' + t + '</span>';
  }
  function siteUrl() { return String(location.href).split('#')[0]; }
  /** รายชื่อกรรมการของปีงบที่ใช้พิมพ์และสรุปผล (แอดมินเห็นทุกคน · กรรมการเห็นคะแนนคนอื่นเมื่อส่งครบ) */
  function comMembers() {
    if (S.com) return S.com.members.map(function (m) { if (m.id !== S.com.committee.id) return m; var x = clone(m); x.status = S.com.score.status; x.data = S.com.score.data; x.sigUrl = S.com.score.sigUrl; x.submittedAt = S.com.score.submittedAt; return x; });
    var L = S.comList[S.fy];
    return L ? L.list.map(function (c) { return { id: c.id, name: c.name, pos: c.pos, role: c.role, due: c.due, code: c.code, lastLogin: c.lastLogin, status: c.score.status, data: c.score.data, sigUrl: c.score.sigUrl, submittedAt: c.score.submittedAt }; }) : null;
  }

  /* ---------- เซสชันกรรมการ (เก็บใน sessionStorage ปิดแท็บแล้วหาย) ---------- */
  function comToken() { try { return sessionStorage.getItem(COM_KEY) || ''; } catch (e) { return ''; } }
  function comSaveTok(t) { try { if (t) sessionStorage.setItem(COM_KEY, t); else sessionStorage.removeItem(COM_KEY); } catch (e) { } }
  function comApi(action, data, opt, cb) { opt = opt || {}; opt.token = S.com ? S.com.token : ''; opt.com = true; api(action, data, opt, cb); }
  function comApply(data, token) {
    var keep = S.com && S.comDirty && data.score.status !== 'submitted' && S.com.committee.id === data.committee.id;
    S.com = { token: token || S.com.token, committee: data.committee, score: data.score, members: data.members, allDone: !!data.allDone, scoring: data.scoring, requests: data.requests || [] };
    if (!keep) { S.comDraft = clone(data.score.data); S.comDirty = false; }
    setPublic({ settings: data.settings, education: data.education, career: data.career, years: data.years, version: data.version }, true);
    setContent(data.content);
    S.fy = data.committee.fy;
    var dd = data.docs || {}; dd.fy = data.committee.fy; dd.mode = 'com';
    D.docs = {}; D.docs[dd.fy] = dd; S.agDraft = null; S.idpDraft = null;
  }
  function comClear() { S.com = null; S.comDraft = null; S.comDirty = false; comSaveTok(''); D.docs = {}; clearTimeout(S.comTimer); }
  function comLost() {
    closeModal(); comClear(); backToPublic();
    S.comErr = 'หมดเวลาการเข้าระบบกรรมการ กรุณาใส่รหัสอีกครั้ง';
    if (route() !== 'committee') location.hash = 'committee'; else render();
  }
  function comResume(cb) {
    var t = comToken();
    if (!t || S.admin) { if (cb) cb(); return; }
    S.comPending = true;
    api('comBoot', {}, { loader: false, token: t, com: true, silent: true }, function (err, res) {
      S.comPending = false;
      if (err) { comSaveTok(''); if (/หมดเวลา/.test(err)) S.comErr = 'หมดเวลาการเข้าระบบกรรมการ กรุณาใส่รหัสอีกครั้ง'; }
      else comApply(res, t);
      render(); if (cb) cb();
    });
  }
  function comRefresh() {
    if (S.comRefreshing) return; S.comRefreshing = true;
    comApi('comBoot', {}, { loader: false }, function (err, res) { S.comRefreshing = false; if (err) { toast(err); return; } comApply(res); render(); });
  }
  function doComLogin() {
    var inp = $('com-code'), code = inp ? inp.value.trim() : '', btn = $('com-btn');
    if (S.admin) { toast('ออกจากระบบผู้ดูแลก่อน แล้วจึงเข้าในฐานะกรรมการ'); return; }
    if (code.replace(/[^0-9a-z]/gi, '').length < 10) { S.comErr = 'กรอกรหัสกรรมการให้ครบ เช่น PA70-ABCD-EF23'; render(); return; }
    if (btn) btn.disabled = true;
    api('comLogin', { code: code, device: deviceName() }, { loader: 'กำลังตรวจสอบรหัสกรรมการ', com: true }, function (err, res) {
      if (btn) btn.disabled = false;
      if (err) { S.comErr = err; render(); var f = $('com-code'); if (f) { f.value = code; f.focus(); } return; }
      comSaveTok(res.token); S.comErr = ''; S.comDirty = false; comApply(res, res.token); render();
      toast('ยินดีต้อนรับ ' + res.committee.name);
    });
  }
  function comLogout() {
    confirmBox('ออกจากระบบกรรมการ?' + (S.comDirty ? ' <b>คะแนนที่ยังไม่บันทึกจะหายไป</b>' : ''), 'ออกจากระบบ', function () {
      comApi('comLogout', {}, { loader: 'กำลังออกจากระบบ' }, function () { comClear(); backToPublic(); location.hash = 'committee'; render(); toast('ออกจากระบบกรรมการแล้ว'); });
    });
  }

  /* ---------- บันทึกร่าง / ส่งผล ---------- */
  function comTouch() {
    S.comDirty = true; S.comRev++; renderComSum();
    clearTimeout(S.comTimer); S.comTimer = setTimeout(function () { comSave(true); }, 20000);
  }
  function comSave(quiet, cb) {
    if (!S.com || S.com.score.status === 'submitted' || (!S.comDirty && quiet)) { if (cb) cb(); return; }
    var rev = S.comRev; clearTimeout(S.comTimer);
    comApi('comSaveScore', { data: S.comDraft }, { loader: quiet ? false : 'กำลังบันทึกร่าง' }, function (err, res) {
      if (err) { if (!quiet) toast(err); return; }
      S.com.score = res.score; S.comSavedAt = res.savedAt;
      if (S.comRev === rev) S.comDirty = false;
      var me = find(S.com.members, 'id', S.com.committee.id); if (me) { me.status = res.score.status; me.data = res.score.data; }
      renderComSum(); if (!quiet) toast('บันทึกร่างแล้ว'); if (cb) cb();
    });
  }
  function openSubmit() {
    var miss = scoreMiss(S.comDraft);
    if (miss.length) { toast('ยังให้คะแนนไม่ครบ: ' + miss.join(', ')); return; }
    var c = paCalc(S.comDraft), sg = scoring();
    openModal('ส่งผลการประเมิน',
      '<div class="sub-sum"><div><span class="small muted">คะแนนรวม</span><b class="num">' + fix(c.total, 2) + '</b><span class="small muted">/ ' + (sg.p1Max + sg.p2Max) + ' · ร้อยละ ' + fix(c.pct, 2) + '</span></div>' + (c.pass ? '<span class="pill good">ผ่านเกณฑ์ (≥ ร้อยละ ' + sg.passPct + ')</span>' : '<span class="pill bad">ไม่ผ่านเกณฑ์ (ต่ำกว่าร้อยละ ' + sg.passPct + ')</span>') + '</div>' +
      '<p class="small muted">ลงลายมือชื่อในกรอบด้วยนิ้วหรือเมาส์ ลายมือชื่อจะแสดงในแบบ PA2 และ PA3 ฉบับพิมพ์ · ถ้าไม่ลงที่นี่ ให้ลงนามด้วยปากกาบนแบบที่พิมพ์ออกมา</p><canvas id="sig-pad" class="sig-pad" aria-label="พื้นที่ลงลายมือชื่อ"></canvas>' +
      chk('com-ok', false, 'ข้าพเจ้าเป็นผู้ประเมินและยืนยันผลการประเมินนี้ ทราบว่าส่งแล้วจะแก้ไขเองไม่ได้') + '<div id="sub-err"></div>',
      '<button class="btn" data-act="sig-clear">' + ic('refresh', 16) + ' ล้างลายเซ็น</button><button class="btn" data-act="close-modal">ยกเลิก</button><button class="btn primary" data-act="com-send">' + ic('upload', 16) + ' ยืนยันส่งผล</button>');
    setTimeout(initSignPad, 40);
  }
  function initSignPad() {
    var c = $('sig-pad'); if (!c) return;
    var dpr = Math.min(2, window.devicePixelRatio || 1), b = c.getBoundingClientRect(), ctx = c.getContext('2d'), drawing = false;
    c.width = Math.round(b.width * dpr); c.height = Math.round(b.height * dpr);
    ctx.scale(dpr, dpr); ctx.lineWidth = 2.4; ctx.lineCap = 'round'; ctx.lineJoin = 'round'; ctx.strokeStyle = '#1b2a6b';
    S.sigDirty = false;
    function pt(e) { var bb = c.getBoundingClientRect(); return [(e.clientX - bb.left) * (b.width / bb.width), (e.clientY - bb.top) * (b.height / bb.height)]; }
    c.addEventListener('pointerdown', function (e) { drawing = true; var p = pt(e); ctx.beginPath(); ctx.moveTo(p[0], p[1]); ctx.lineTo(p[0] + 0.1, p[1] + 0.1); ctx.stroke(); if (c.setPointerCapture) c.setPointerCapture(e.pointerId); S.sigDirty = true; e.preventDefault(); });
    c.addEventListener('pointermove', function (e) { if (!drawing) return; var p = pt(e); ctx.lineTo(p[0], p[1]); ctx.stroke(); });
    c.addEventListener('pointerup', function () { drawing = false; });
    c.addEventListener('pointercancel', function () { drawing = false; });
  }
  /** ตัดขอบว่างของลายเซ็นแล้วส่งเป็น PNG พื้นโปร่งใส */
  function sigPng() {
    var c = $('sig-pad'); if (!c || !S.sigDirty) return '';
    var w = c.width, h = c.height, px = c.getContext('2d').getImageData(0, 0, w, h).data, x0 = w, y0 = h, x1 = -1, y1 = -1;
    for (var y = 0; y < h; y += 2) for (var x = 0; x < w; x += 2) if (px[(y * w + x) * 4 + 3] > 20) { if (x < x0) x0 = x; if (x > x1) x1 = x; if (y < y0) y0 = y; if (y > y1) y1 = y; }
    if (x1 < 0) return '';
    x0 = Math.max(0, x0 - 8); y0 = Math.max(0, y0 - 8); x1 = Math.min(w, x1 + 8); y1 = Math.min(h, y1 + 8);
    var k = Math.min(1, 600 / (x1 - x0), 200 / (y1 - y0)), o = document.createElement('canvas');
    o.width = Math.max(1, Math.round((x1 - x0) * k)); o.height = Math.max(1, Math.round((y1 - y0) * k));
    o.getContext('2d').drawImage(c, x0, y0, x1 - x0, y1 - y0, 0, 0, o.width, o.height);
    return b64Of(o.toDataURL('image/png'));
  }
  function comSend() {
    var ok = $('com-ok'), er = $('sub-err');
    if (!ok || !ok.checked) { if (er) er.innerHTML = '<div class="err">กรุณาติ๊กยืนยันผลการประเมินก่อนส่ง</div>'; return; }
    var sig = sigPng();
    if (sig && sig.length * 0.75 > 380000) { if (er) er.innerHTML = '<div class="err">ลายเซ็นมีขนาดใหญ่เกินไป กดล้างแล้วเซ็นใหม่</div>'; return; }
    comApi('comSubmit', { data: S.comDraft, confirm: true, sigB64: sig }, { loader: 'กำลังส่งผลการประเมิน', timeout: 90000 }, function (err, res) {
      if (err) { if (er) er.innerHTML = '<div class="err">' + esc(err) + '</div>'; else toast(err); return; }
      closeModal(); S.comDirty = false; comApply(res); render(); window.scrollTo(0, 0);
      toast('ส่งผลการประเมินเรียบร้อย ขอบคุณครับ');
    });
  }

  /* ---------- แถบโหมดกรรมการ (แสดงทุกหน้าสาธารณะ) ---------- */
  function comBanner(r) {
    if (!S.com) return '';
    var k = S.com.committee, done = S.com.score.status === 'submitted';
    return '<div class="com-banner" role="status"><div class="wrap"><span class="cb-t">' + ic('shield', 16) + ' โหมดกรรมการ · <b>' + esc(k.name) + '</b> · ประเมิน PA ปีงบ ' + k.fy + '</span>' + (done ? '<span class="pill good">ส่งผลแล้ว</span>' : dueChip(k.due)) +
      '<span class="sp"></span>' + (r !== 'committee' ? '<a class="btn sm primary" href="#committee">' + ic('pen', 14) + ' หน้าให้คะแนน</a>' : '') + '<a class="btn sm" href="#pa-forms">' + ic('print', 14) + ' แบบ PA2/PA3</a><button class="btn sm" data-act="com-logout">' + ic('logout', 14) + ' ออก</button></div></div>';
  }

  /* ---------- หน้า #committee ---------- */
  function pComLogin() {
    if (S.admin) return pub('committee', '<div class="card raised com-login">' + ic('shield', 22) + '<h1>ระบบคณะกรรมการประเมิน PA</h1><p class="muted">ตอนนี้เข้าสู่ระบบในฐานะผู้ดูแลอยู่ จัดการรายชื่อ รหัส และดูผลการประเมินได้ที่หลังบ้าน</p><div class="row"><a class="btn primary" href="#admin-committee">' + ic('users', 16) + ' คณะกรรมการและผลประเมิน</a><a class="btn" href="#pa-forms">' + ic('print', 16) + ' แบบ PA2 / PA3</a></div><p class="small muted">ถ้าต้องการทดลองเข้าในฐานะกรรมการ ให้ออกจากระบบผู้ดูแลก่อน หรือเปิดหน้าต่างไม่ระบุตัวตน</p></div>');
    if (S.comPending) return pub('committee', '<div class="card raised com-login" aria-busy="true"><div class="sk" style="height:26px;width:60%"></div><div class="sk" style="height:14px;width:80%"></div><span class="small muted">กำลังเปิดหน้าให้คะแนน</span></div>');
    var s = st();
    return pub('committee', '<form id="com-login-form" class="card raised com-login" autocomplete="off"><span class="eyebrow">สำหรับคณะกรรมการประเมิน</span><h1>เข้าสู่ระบบกรรมการ</h1>' +
      '<p class="muted">ประเมินผลการพัฒนางานตามข้อตกลง (PA) ของ ' + esc(s.name) + ' ' + esc(s.school) + ' · ใช้รหัสกรรมการที่ได้รับจากเจ้าของแฟ้ม</p>' +
      (S.comErr ? '<div class="err">' + esc(S.comErr) + '</div>' : '') +
      '<div class="field"><label for="com-code">รหัสกรรมการ</label><input id="com-code" class="inp mono com-code" placeholder="PA70-XXXX-XXXX" autocapitalize="characters" spellcheck="false" inputmode="text" maxlength="24"></div>' +
      '<button class="btn primary" type="submit" id="com-btn" style="justify-content:center">' + ic('lock', 16) + ' เข้าสู่ระบบ</button>' +
      '<ul class="small muted com-tips"><li>รหัสใช้ได้เฉพาะปีงบประมาณที่ได้รับเชิญ และเปิดดูหลักฐาน “เฉพาะกรรมการ” ได้</li><li>การเข้าระบบจะหมดอายุเมื่อปิดแท็บ หรือครบ 12 ชั่วโมง คะแนนที่บันทึกร่างไว้ไม่หาย</li><li>ระบบบันทึกร่างให้อัตโนมัติระหว่างให้คะแนน</li></ul></form>');
  }
  function pCommittee() {
    if (!S.com) return pComLogin();
    var k = S.com.committee, sc = S.com.score, done = sc.status === 'submitted', d = done ? sc.data : S.comDraft, dis = done ? ' disabled' : '', fy = k.fy, sg = scoring();
    d.notes = d.notes || {};
    var docs = docsOf(fy); if (!docs) needDocs(fy);
    var pa = docs && docs.pa && !docs.pa.hidden ? docs.pa : null, ag = docs && docs.agree && docs.agree.teach ? docs.agree : null;
    function lvRadios(name, kind, key, cur, label) {
      var o = '';
      for (var v = 1; v <= 4; v++) o += '<label title="' + v + ' = ' + LV_LABEL[v] + '"><input type="radio" name="' + name + '" value="' + v + '" data-sc="' + kind + '" data-k="' + key + '"' + (+cur === v ? ' checked' : '') + dis + ' aria-label="' + label + ' ระดับ ' + v + ' ' + LV_LABEL[v] + '"><span>' + v + '</span></label>';
      return '<div class="lv" role="radiogroup" aria-label="' + label + '">' + o + '</div>';
    }
    function noteIn(key, label) { return '<input class="inp note-in" data-note="' + key + '" placeholder="หมายเหตุ (ถ้ามี)" value="' + esc(d.notes[key] || '') + '"' + dis + ' maxlength="300" aria-label="หมายเหตุ ' + label + '">'; }
    var vids = C().videos.filter(function (v) { return shown(v) && (v.pa || v.type === 'pa') && (v.fy ? v.fy === fy : inFy(v.date, fy)); });
    var vcard = vids.length ? '<div class="card"><span class="eyebrow">ดูประกอบการให้คะแนน</span><h3 style="margin:2px 0 10px">วิดีโอการจัดการเรียนรู้</h3><div class="vside">' + vids.map(function (v) { return videoRow(v, (v.dur ? esc(v.dur) + ' · ' : '') + (v.ind && v.ind.length ? 'ตัวชี้วัด ' + v.ind.join(', ') : 'วิดีโอการสอน')); }).join('') + '</div></div>' : '';
    var guide = '<div class="card lv-guide"><div class="row" style="justify-content:space-between;align-items:baseline"><div><span class="eyebrow">ระดับการปฏิบัติที่คาดหวัง</span><h3 style="margin:2px 0 0">' + esc(expLevel()) + '</h3></div><span class="small muted">แบบ PA2/ส · ตำแหน่ง' + esc(st().position || 'ครู') + (sg.acad ? ' วิทยฐานะ' + esc(sg.acad) : ' (ยังไม่มีวิทยฐานะ)') + '</span></div>' +
      '<ol class="lv-key">' + [1, 2, 3, 4].map(function (v) { return '<li><b>' + v + '</b><span>' + LV_LABEL[v] + '</span></li>'; }).join('') + '</ol></div>';
    var loadTxt = ag ? ag.teach.map(function (tm, i) { return 'ภาคเรียนที่ ' + esc(tm.term) + ' รวม ' + loadTotal(ag, i) + ' ชม./สัปดาห์'; }).join(' · ') : '';
    var load = '<div class="card"><span class="eyebrow">ส่วนที่ 1 · ข้อ 1)</span><h3 style="margin:2px 0 8px">ภาระงาน</h3><div class="load-opt" role="radiogroup" aria-label="ภาระงาน">' +
      [['ok', 'เป็นไปตามที่ ก.ค.ศ. กำหนด'], ['no', 'ไม่เป็นไปตามที่ ก.ค.ศ. กำหนด']].map(function (o) { return '<label class="chk-pill"><input type="radio" name="load" value="' + o[0] + '" data-sc="load"' + (d.load === o[0] ? ' checked' : '') + dis + '> ' + o[1] + '</label>'; }).join('') +
      '</div><p class="small muted" style="margin-top:8px">' + (loadTxt ? 'ภาระงานตามข้อตกลง: ' + loadTxt + ' · ' : '') + '<a href="#agreement">ดูแบบข้อตกลง</a></p></div>';
    var rows = [1, 2, 3].map(function (sd) {
      return '<div class="card"><div class="eyebrow">ส่วนที่ 1 · ข้อ 2) ด้านที่ ' + sd + '</div><h3 style="margin:2px 0 6px">' + SIDES[sd] + '</h3>' +
        IND_BASE.filter(function (x) { return indSide(x.code) === sd; }).map(function (x) {
          var ev = evidenceOf(x.code, fy).length, pi = pa ? find(pa.ind, 'code', x.code) : null, nph = pi ? pi.photos.length : 0;
          return '<div class="srow" id="sc-' + x.code.replace('.', '-') + '"><span class="code">' + x.code + '</span><div><div>' + esc(x.name) + '</div><div class="row" style="gap:6px;margin-top:4px"><button class="btn sm" style="padding:2px 8px" data-act="ev-list" data-k="' + x.code + '">' + ic('folder', 14) + ' งาน/หลักฐาน ' + ev + ' ชิ้น' + (nph ? ' · ภาพ ' + nph : '') + '</button>' + rqBtn(x.code, done) + '</div></div>' + lvRadios('p1-' + x.code, 'p1', x.code, (d.p1 || {})[x.code], 'ตัวชี้วัด ' + x.code) + noteIn(x.code, 'ตัวชี้วัด ' + x.code) + '</div>';
        }).join('') + '</div>';
    }).join('');
    var p2 = '<div class="card"><div class="eyebrow">ส่วนที่ 2 (' + sg.p2Max + ' คะแนน)</div><h3 style="margin:2px 0 4px">ข้อตกลงที่เสนอเป็นประเด็นท้าทายในการพัฒนาผลลัพธ์การเรียนรู้ของผู้เรียน</h3><p class="small muted">' + (pa && pa.challenge.title ? esc(pa.challenge.title) + ' · ' : '') + '<a href="#pa" data-act="pa-tab-go" data-k="p2">ดูวิธีดำเนินการและผลลัพธ์</a></p>' +
      P2_ITEMS.map(function (it, i) {
        return (i === 1 ? '<div class="p2-grp">2. ผลลัพธ์การเรียนรู้ของผู้เรียนที่คาดหวัง (' + fix(p2Max(P2_ITEMS[1]) + p2Max(P2_ITEMS[2]), 0) + ' คะแนน)</div>' : '') +
          '<div class="srow"><span class="code">' + it.code + '</span><div><div><b>' + it.name + '</b> <span class="small muted">(' + fix(p2Max(it), 0) + ' คะแนน)</span></div><div class="small muted">' + it.d + '</div></div>' + lvRadios('p2-' + it.k, 'p2', it.k, (d.p2 || {})[it.k], it.name) + noteIn('p2-' + it.k, it.name) + '</div>';
      }).join('') + '</div>';
    var notes = '<div class="card"><span class="eyebrow">สรุปข้อสังเกต</span><h3 style="margin:2px 0 10px">จุดเด่น จุดที่ควรพัฒนา และข้อคิดเห็น</h3><div style="display:flex;flex-direction:column;gap:12px">' +
      [['strong', '1. จุดเด่น'], ['improve', '2. จุดที่ควรพัฒนา'], ['comment', '3. ข้อคิดเห็น']].map(function (f) { return '<div class="field"><label for="com-' + f[0] + '">' + f[1] + '</label><textarea id="com-' + f[0] + '" class="inp" rows="3" maxlength="2000" data-ctext="' + f[0] + '"' + dis + '>' + esc(d[f[0]] || '') + '</textarea></div>'; }).join('') + '</div></div>';
    var paNote = docs && docs.pa && docs.pa.hidden ? '<div class="note warn-note">' + ic('lock', 15) + ' เจ้าของแฟ้มยังไม่ได้เปิดแฟ้ม PA ให้กรรมการดู ให้คะแนนจากหลักฐานที่มีได้ หรือติดต่อเจ้าของแฟ้ม</div>' : (pa && pa.status !== 'ready' ? '<div class="note">' + ic('file', 15) + ' แฟ้ม PA ปีนี้ยังมีสถานะ “' + esc((DOC_ST[pa.status] || DOC_ST.draft)[0]) + '” เจ้าของแฟ้มอาจยังเพิ่มหลักฐานอยู่</div>' : '');
    return pub('committee',
      '<div class="card raised row com-head" style="justify-content:space-between"><div><span class="eyebrow">' + esc(COM_ROLE[k.role]) + (k.pos ? ' · ' + esc(k.pos) : '') + '</span><h2>' + esc(k.name) + '</h2><p class="small muted">ประเมิน ' + esc(st().name) + ' · ปีงบประมาณ ' + fy + ' (' + fd(fyRange(fy)[0]) + ' – ' + fd(fyRange(fy)[1]) + ')' + (k.due ? ' · ครบกำหนดส่ง ' + fd(k.due) : '') + '</p></div>' +
        '<div class="row">' + (done ? '<span class="pill good">ส่งผลแล้ว ' + fdt(sc.submittedAt) + '</span>' : (k.due ? dueChip(k.due) + cdHtml(k.due) : '<span class="pill warn">ยังไม่ส่งผล</span>')) + '<a class="btn" href="#pa">' + ic('file', 16) + ' เปิดแฟ้ม PA</a></div></div>' + paNote +
      '<div class="score-layout" style="margin-top:18px"><div style="display:flex;flex-direction:column;gap:14px">' + guide + vcard + load + rows + rqComCard() + p2 + notes + '</div>' +
        '<aside class="card raised sticky" id="com-sum">' + comSumHtml() + '</aside></div>');
  }
  function comSumHtml() {
    if (!S.com) return '';
    var sg = scoring(), sc = S.com.score, done = sc.status === 'submitted', d = done ? sc.data : S.comDraft, c = paCalc(d), n = IND_BASE.length, miss = scoreMiss(d), complete = !miss.length;
    return '<span class="eyebrow">สรุปคะแนน (แบบ PA2)</span><div class="row" style="align-items:baseline;gap:6px;margin:6px 0 10px"><span class="sum-big">' + fix(c.total, 2) + '</span><span class="muted">/ ' + (sg.p1Max + sg.p2Max) + '</span></div>' +
      '<div class="sum-line"><span>ภาระงาน</span><b>' + (d.load === 'ok' ? 'เป็นไปตามที่กำหนด' : d.load === 'no' ? '<span style="color:var(--bad)">ไม่เป็นไปตาม</span>' : '–') + '</b></div>' +
      '<div class="sum-line"><span>ส่วนที่ 1 (' + c.filled + '/' + n + ' ข้อ)</span><b class="num">' + fix(c.p1, 2) + ' / ' + sg.p1Max + '</b></div>' +
      P2_ITEMS.map(function (it) { var v = +(d.p2 || {})[it.k] || 0; return '<div class="sum-line sub"><span>' + it.code + ' ' + it.name + (v ? ' · ระดับ ' + v : '') + '</span><b class="num">' + fix(v / 4 * p2Max(it), 2) + ' / ' + fix(p2Max(it), 0) + '</b></div>'; }).join('') +
      '<div class="sum-line"><span>ส่วนที่ 2 (' + c.p2filled + '/' + P2_ITEMS.length + ' ข้อ)</span><b class="num">' + fix(c.p2, 2) + ' / ' + sg.p2Max + '</b></div>' +
      '<div class="sum-line"><span>คิดเป็นร้อยละ</span><b class="num">' + fix(c.pct, 2) + '</b></div>' +
      '<div class="sum-line"><span>เกณฑ์ผ่าน (กรรมการแต่ละคน)</span><b class="num">≥ ร้อยละ ' + sg.passPct + '</b></div>' +
      '<div style="margin:12px 0">' + (complete ? (c.pass ? '<span class="pill good">ผลของท่าน: ผ่านเกณฑ์</span>' : '<span class="pill bad">ผลของท่าน: ไม่ผ่านเกณฑ์</span>') : '<span class="pill off" style="white-space:normal">ยังไม่ครบ: ' + miss.join(', ') + '</span>') + '</div>' +
      (done ? (sc.sigUrl ? '<div class="sig-box"><img class="sig" src="' + esc(sc.sigUrl) + '" alt="ลายมือชื่อ ' + esc(S.com.committee.name) + '"><span class="small muted">ลงนามอิเล็กทรอนิกส์ ' + fdt(sc.submittedAt) + '</span></div>' : '<div class="note small">ส่งผลโดยไม่ได้ลงลายมือชื่ออิเล็กทรอนิกส์ ให้ลงนามบนแบบที่พิมพ์</div>') +
        '<p class="small muted">ส่งผลแล้ว แก้ไขเองไม่ได้ ถ้าต้องการแก้ให้ติดต่อเจ้าของแฟ้มเพื่อเปิดสิทธิ์</p><a class="btn" style="justify-content:center" href="#pa-forms">' + ic('print', 16) + ' พิมพ์แบบ PA2 ของฉัน</a>' :
        '<div style="display:flex;flex-direction:column;gap:8px"><span class="small ' + (S.comDirty ? 'warn-t' : 'muted') + '" id="com-saved">' + (S.comDirty ? 'มีการแก้ไขที่ยังไม่บันทึก' : (S.comSavedAt ? 'บันทึกร่างแล้ว ' + fdt(S.comSavedAt) : (sc.status === 'draft' ? 'บันทึกร่างไว้แล้ว' : 'ยังไม่ได้บันทึก'))) + '</span>' +
        '<button class="btn" data-act="com-save">' + ic('check', 16) + ' บันทึกร่าง</button><button class="btn primary" data-act="com-submit"' + (complete ? '' : ' disabled') + '>' + ic('upload', 16) + ' ส่งผลการประเมิน</button>' + (complete ? '' : '<span class="small muted">ให้คะแนนครบทุกข้อและเลือกภาระงานก่อนส่ง</span>') + '</div>') +
      '<p class="small muted" style="margin-top:12px">วิธีคิด: ส่วนที่ 1 = ผลรวมระดับ ' + n + ' ข้อ ÷ ' + (n * 4) + ' × ' + sg.p1Max + ' · ส่วนที่ 2 = ระดับ ÷ 4 × คะแนนเต็มของข้อ (' + P2_ITEMS.map(function (it) { return fix(p2Max(it), 0); }).join(' / ') + ') · ผลของกรรมการ 3 คนสรุปในแบบ PA3</p>';
  }
  function renderComSum() { var el = $('com-sum'); if (el && S.com) el.innerHTML = comSumHtml(); }
  function evList(code) {
    var fy = S.com ? S.com.committee.fy : S.fy, docs = docsOf(fy), pa = docs && docs.pa && !docs.pa.hidden ? docs.pa : null, x = pa ? find(pa.ind, 'code', code) : null, list = evidenceOf(code, fy);
    openModal('ตัวชี้วัด ' + code, '<p class="muted">' + esc(indName(code)) + '</p>' +
      (x ? '<div class="ev-tri"><div><b>งาน (Tasks)</b><span>' + txt(x.task) + '</span></div><div><b>ผลลัพธ์ (Outcomes)</b><span>' + txt(x.out) + '</span></div><div><b>ตัวชี้วัด (Indicators)</b><span>' + txt(x.kpi) + '</span></div></div>' : '<div class="note small">' + ic('lock', 14) + ' ไม่มีข้อความในแฟ้ม PA ให้ดู</div>') +
      '<div><b class="small">หลักฐานที่ผูกกับตัวชี้วัดนี้ (' + list.length + ')</b><div class="ev-btns" style="margin-top:6px">' + (list.length ? evButtons(list) : '<span class="small muted">ยังไม่มีหลักฐาน</span>') + '</div></div>' + (x && x.photos.length ? indPhotos(x) : ''), '', true);
  }

  /* ---------- แบบ PA2 / PA3 ฉบับพิมพ์ ---------- */
  function thDateFull(s) {
    if (!s) return 'วันที่ .......... เดือน .................... พ.ศ. ..........';
    var p = String(s).slice(0, 10).split('-');
    return 'วันที่ ' + parseInt(p[2], 10) + ' เดือน ' + TH_MF[parseInt(p[1], 10) - 1] + ' พ.ศ. ' + (parseInt(p[0], 10) + 543);
  }
  function pafCb(on) { return '<span class="paf-cb' + (on ? ' on' : '') + '" aria-hidden="true">' + (on ? '✓' : '') + '</span>'; }
  function pafPeriod(fy) { return 'ระหว่างวันที่ 1 เดือน ตุลาคม พ.ศ. ' + (fy - 1) + ' ถึงวันที่ 30 เดือน กันยายน พ.ศ. ' + fy; }
  function loadMark(ms) {
    var done = ms.filter(function (m) { return m.status === 'submitted' && m.data; }), no = done.some(function (m) { return m.data.load === 'no'; }), ok = done.length && !no;
    return pafCb(ok) + 'เป็นไปตามที่ ก.ค.ศ. กำหนด &nbsp; ' + pafCb(no) + 'ไม่เป็นไปตามที่ ก.ค.ศ. กำหนด';
  }
  function pafInfo() {
    var s = st(), sg = scoring();
    return '<div class="paf-info"><b>ข้อมูลผู้รับการประเมิน</b><div><span>ชื่อ–สกุล</span> ' + esc(s.name) + '</div><div><span>ตำแหน่ง</span> ' + esc(s.position || 'ครู') + '</div>' +
      '<div><span>สถานศึกษา</span> ' + esc(s.school) + '</div><div><span>สังกัด</span> ' + esc(s.area) + '</div>' +
      '<div><span>รับเงินเดือนในอันดับ</span> ' + (sg.rank ? esc(sg.rank) : '..................') + '</div><div><span>อัตราเงินเดือน</span> ' + (sg.salary ? esc(sg.salary) : '..................') + ' บาท</div></div>';
  }
  function pafSig(m, role, withPos) {
    var signed = m && m.status === 'submitted';
    return '<div class="paf-sig"><div class="paf-sl"><span>(ลงชื่อ)</span><span class="ln">' + (signed && m.sigUrl ? '<img src="' + esc(m.sigUrl) + '" alt="ลายมือชื่อ">' : '') + '</span><span>' + (role || 'กรรมการผู้ประเมิน') + '</span></div>' +
      '<div>(' + (m ? esc(m.name) : '..................................................') + ')</div>' + (withPos ? '<div>ตำแหน่ง ' + (m && m.pos ? esc(m.pos) : '..................................') + '</div>' : '') +
      '<div>' + thDateFull(signed ? m.submittedAt : '') + '</div></div>';
  }
  function pa3Table(ms) {
    var sg = scoring(), cs = ms.map(function (m) { return m.status === 'submitted' && m.data ? paCalc(m.data) : null; });
    while (cs.length < 3) cs.push(null);
    function cells(key, b) { return cs.map(function (c) { return '<td class="r num">' + (c ? (b ? '<b>' + fix(c[key], 2) + '</b>' : fix(c[key], 2)) : '') + '</td>'; }).join(''); }
    return '<table class="tbl paf-t"><thead><tr><th>การประเมินข้อตกลงในการพัฒนางาน</th><th style="width:62px">คะแนนเต็ม</th>' + cs.map(function (c, i) { return '<th style="width:58px">คนที่ ' + (i + 1) + '</th>'; }).join('') + '<th style="width:130px">หมายเหตุ</th></tr></thead><tbody>' +
      '<tr><td><u>ส่วนที่ 1</u> ข้อตกลงในการพัฒนางานตามมาตรฐานตำแหน่ง</td><td class="r num">' + sg.p1Max + '</td>' + cells('p1') + '<td rowspan="3" class="small">เกณฑ์ผ่านต้องได้คะแนนจากกรรมการแต่ละคนไม่ต่ำกว่าร้อยละ ' + sg.passPct + '</td></tr>' +
      '<tr><td><u>ส่วนที่ 2</u> ข้อตกลงในการพัฒนางานที่เสนอเป็นประเด็นท้าทายในการพัฒนาผลลัพธ์การเรียนรู้ของผู้เรียน</td><td class="r num">' + sg.p2Max + '</td>' + cells('p2') + '</tr>' +
      '<tr class="paf-sumrow"><td class="c">รวม</td><td class="r num">' + (sg.p1Max + sg.p2Max) + '</td>' + cells('total', true) + '</tr></tbody></table>';
  }
  function pa3Page(ms, fy) {
    var s = st(), rr = setRes(ms), chair = ms.filter(function (m) { return m.role === 'chair'; })[0] || ms[0], others = ms.filter(function (m) { return m !== chair; });
    while (others.length < 2) others.push(null);
    var fin = rr && rr.complete;
    return '<section class="a4 paf"><div class="paf-top"><span class="paf-box">สำหรับกรรมการประเมิน PA</span><span>PA3/ส</span></div>' +
      '<div class="paf-title"><b>แบบสรุปผลการประเมินการพัฒนางานตามข้อตกลง (PA)</b><b>สำหรับข้าราชการครูและบุคลากรทางการศึกษา ตำแหน่ง ' + esc(s.position || 'ครู') + '</b><b>' + esc(s.school) + ' ' + esc(s.area) + '</b><b>ประจำปีงบประมาณ พ.ศ. ' + fy + '</b><span>' + pafPeriod(fy) + '</span></div>' +
      pafInfo() + '<p><b>ภาระงาน</b> &nbsp; ' + loadMark(ms) + '</p><p><b>ผลการประเมิน</b></p><div class="a4-scroll">' + pa3Table(chair ? [chair].concat(others.filter(Boolean)) : []) + '</div>' +
      '<p class="paf-c">สรุปผลการประเมินทั้ง 2 ส่วน จากกรรมการ 3 คน &nbsp; ' + pafCb(fin && rr.pass) + 'ผ่านเกณฑ์ &nbsp; ' + pafCb(fin && !rr.pass) + 'ไม่ผ่านเกณฑ์</p>' +
      (!fin ? '<p class="paf-draft">ฉบับร่าง: กรรมการส่งผลแล้ว ' + (rr ? rr.n : 0) + ' จาก ' + Math.max(3, ms.length) + ' คน ยังไม่สรุปผล</p>' : '') +
      pafSig(chair, 'ประธานกรรมการผู้ประเมิน') +
      '<div class="paf-sigs2">' + others.slice(0, 2).map(function (m) { return pafSig(m); }).join('') + '</div></section>';
  }
  function pa2Pages(m, fy) {
    var s = st(), sg = scoring(), d = m.data || emptyScore(), notes = d.notes || {}, p1v = d.p1 || {}, p2v = d.p2 || {}, c = paCalc(d), done = m.status === 'submitted';
    var draft = done ? '' : '<p class="paf-draft">ฉบับร่าง: กรรมการยังไม่ส่งผลการประเมิน</p>';
    var head = '<div class="paf-top"><span></span><span>PA2/ส</span></div><div class="paf-title"><b>แบบประเมินผลการพัฒนางานตามข้อตกลง (PA)</b><b>สำหรับข้าราชการครูและบุคลากรทางการศึกษา ตำแหน่ง ' + esc(s.position || 'ครู') + ' (' + (sg.acad ? 'วิทยฐานะ' + esc(sg.acad) : 'ยังไม่มีวิทยฐานะ') + ')</b><b>ประจำปีงบประมาณ พ.ศ. ' + fy + '</b><span>รอบการประเมิน ' + pafPeriod(fy) + '</span></div>';
    var thead = '<thead><tr><th rowspan="2">ลักษณะงานที่ปฏิบัติตามมาตรฐานตำแหน่ง<br>ระดับการปฏิบัติที่คาดหวัง<br>' + esc(expLevel()) + '</th><th colspan="4">ผลการประเมิน</th><th rowspan="2" style="width:92px">หมายเหตุ</th></tr><tr>' +
      [1, 2, 3, 4].map(function (v) { return '<th class="lvh"><b>' + v + '</b>' + LV_LABEL[v] + '</th>'; }).join('') + '</tr></thead>';
    function lvCells(v) { var o = ''; for (var i = 1; i <= 4; i++) o += '<td class="lvc">' + (+v === i ? '✓' : '') + '</td>'; return o; }
    function side(sd) { return '<tr class="grp"><td colspan="6">' + sd + '. ' + SIDES[sd] + '</td></tr>' + IND_BASE.filter(function (x) { return indSide(x.code) === sd; }).map(function (x) { return '<tr><td>' + x.code + ' ' + esc(x.name) + '</td>' + lvCells(p1v[x.code]) + '<td class="small">' + esc(notes[x.code] || '') + '</td></tr>'; }).join(''); }
    var pg1 = '<section class="a4 paf">' + head + draft + pafInfo() + '<p class="small">ให้ทำเครื่องหมาย ✓ ในช่องที่ตรงกับผลการประเมิน หรือให้คะแนนตามระดับคุณภาพ</p>' +
      '<p><b>ส่วนที่ 1 ข้อตกลงในการพัฒนางานตามมาตรฐานตำแหน่ง (' + sg.p1Max + ' คะแนน)</b></p><p>1) ภาระงาน &nbsp; ' + pafCb(d.load === 'ok') + 'เป็นไปตามที่ ก.ค.ศ. กำหนด &nbsp; ' + pafCb(d.load === 'no') + 'ไม่เป็นไปตามที่ ก.ค.ศ. กำหนด</p><p>2) การปฏิบัติงานและผลการปฏิบัติงานตามมาตรฐานตำแหน่ง' + esc(s.position || 'ครู') + '</p>' +
      '<div class="a4-scroll"><table class="tbl paf-t">' + thead + '<tbody>' + side(1) + '</tbody></table></div></section>';
    var pg2 = '<section class="a4 paf"><div class="a4-scroll"><table class="tbl paf-t">' + thead + '<tbody>' + side(2) + side(3) +
      '<tr class="paf-sumrow"><td colspan="6">รวมคะแนนส่วนที่ 1 (ผลรวมระดับ ' + c.p1sum + ' จาก ' + (IND_BASE.length * 4) + ') = ' + fix(c.p1, 2) + ' คะแนน</td></tr></tbody></table></div></section>';
    var p2rows = P2_ITEMS.map(function (it, i) {
      var g = i === 1 ? '<tr class="grp"><td colspan="6">2. ผลลัพธ์การเรียนรู้ของผู้เรียนที่คาดหวัง (' + fix(p2Max(P2_ITEMS[1]) + p2Max(P2_ITEMS[2]), 0) + ' คะแนน)</td></tr>' : '';
      var label = i === 0 ? '<b>1. วิธีดำเนินการ (' + fix(p2Max(it), 0) + ' คะแนน)</b>' : it.code + ' ' + it.name + ' (' + fix(p2Max(it), 0) + ' คะแนน)';
      return g + '<tr' + (i === 0 ? ' class="grp-l"' : '') + '><td>' + label + '<span class="desc">' + it.d + '</span></td>' + lvCells(p2v[it.k]) + '<td class="small">' + esc(notes['p2-' + it.k] || '') + '</td></tr>';
    }).join('');
    var pg3 = '<section class="a4 paf"><p><b>ส่วนที่ 2 ข้อตกลงในการพัฒนางานที่เสนอเป็นประเด็นท้าทายในการพัฒนาผลลัพธ์การเรียนรู้ของผู้เรียน (' + sg.p2Max + ' คะแนน)</b></p><div class="a4-scroll"><table class="tbl paf-t">' + thead + '<tbody>' + p2rows +
      '<tr class="paf-sumrow"><td colspan="6">รวมผลการประเมินทั้ง 2 ส่วน = ' + fix(c.total, 2) + ' คะแนน <span class="small">(ส่วนที่ 1 = ' + fix(c.p1, 2) + ' · ส่วนที่ 2 = ' + fix(c.p2, 2) + ' · ร้อยละ ' + fix(c.pct, 2) + ')</span></td></tr></tbody></table></div>' +
      pafSig(m, 'กรรมการผู้ประเมิน', true) + '</section>';
    function lines(t) { return '<div class="paf-lines">' + (t ? esc(t) : '') + '</div>'; }
    var pg4 = '<section class="a4 paf"><div class="paf-title"><b>สรุปข้อสังเกตเกี่ยวกับ จุดเด่น จุดที่ควรพัฒนา และข้อคิดเห็น</b><span>ผู้รับการประเมิน : ' + esc(s.name) + '</span></div>' +
      '<h4>1. จุดเด่น</h4>' + lines(d.strong) + '<h4>2. จุดที่ควรพัฒนา</h4>' + lines(d.improve) + '<h4>3. ข้อคิดเห็น</h4>' + lines(d.comment) + pafSig(m, 'กรรมการผู้ประเมิน', true) + '</section>';
    return pg1 + pg2 + pg3 + pg4;
  }
  function pForms() {
    var back = S.admin ? 'admin-committee' : (S.com ? 'committee' : 'pa');
    function bar(mid) {
      return '<div class="rep-bar"><a class="btn" href="#' + back + '">' + ic('left', 16) + ' กลับ</a><b>แบบ PA2 / PA3</b>' + (mid || '') + '<span class="sp"></span>' + (S.admin ? fySelect('fy-sel-f') : '') +
        '<button class="btn primary" data-act="print">' + ic('print', 16) + ' พิมพ์ / บันทึก PDF</button></div>';
    }
    if (!S.admin && !S.com) return bar() + '<div class="rep-wrap"><div class="card empty" style="max-width:560px">' + ic('lock', 20) + ' แบบประเมิน PA2 และแบบสรุป PA3 เปิดได้เฉพาะเจ้าของแฟ้มและคณะกรรมการ · <a href="#committee">เข้าสู่ระบบกรรมการ</a></div></div>';
    var fy = S.com ? S.com.committee.fy : S.fy, ms = comMembers();
    if (!ms) { needComList(fy); return bar() + '<div class="rep-wrap"><div class="card" style="max-width:560px;width:100%;display:flex;flex-direction:column;gap:10px" aria-busy="true"><div class="sk" style="height:24px;width:50%"></div><div class="sk" style="height:160px"></div>' + (S.comListErr ? '<div class="err">' + esc(S.comListErr) + ' <button class="btn sm" data-act="com-reload">ลองใหม่</button></div>' : '<span class="small muted">กำลังโหลดผลการประเมิน</span>') + '</div></div>'; }
    var mine = S.com ? ms.filter(function (m) { return m.id === S.com.committee.id; }) : ms;
    var opts = [['all', 'ทั้งชุด'], ['pa3', 'PA3 สรุป 3 คน']].concat(mine.map(function (m) { return [m.id, 'PA2 · ' + (S.admin ? 'คนที่ ' + (ms.indexOf(m) + 1) + ' ' : 'ของฉัน ') + m.name.split(' ')[0]]; }));
    var sel = S.formSel || 'all';
    if (!opts.some(function (o) { return o[0] === sel; })) sel = 'all';
    var seg = '<div class="seg" role="group" aria-label="เลือกแบบที่จะแสดง">' + opts.map(function (o) { return '<button type="button" data-act="form-sel" data-k="' + o[0] + '" class="' + (sel === o[0] ? 'on' : '') + '">' + esc(o[1]) + '</button>'; }).join('') + '</div>';
    var html = '';
    if (!ms.length) html = '<div class="card empty" style="max-width:560px">ปีงบ ' + fy + ' ยังไม่ได้กำหนดคณะกรรมการ เพิ่มได้ที่หน้า “คณะกรรมการและผลประเมิน”</div>';
    else {
      if (S.com && S.comDirty && sel !== 'pa3') html += '<div class="note warn-note" style="max-width:210mm;width:100%">' + ic('pen', 15) + ' มีคะแนนที่ยังไม่บันทึก แบบที่พิมพ์ใช้คะแนนที่บันทึกแล้วเท่านั้น <button class="btn sm" data-act="com-save">บันทึกร่างตอนนี้</button></div>';
      if (S.com && !S.com.allDone && (sel === 'all' || sel === 'pa3')) html += '<div class="note" style="max-width:210mm;width:100%">' + ic('lock', 15) + ' คะแนนของกรรมการท่านอื่นจะแสดงในแบบ PA3 เมื่อกรรมการส่งผลครบทุกคน</div>';
      mine.forEach(function (m) { if (sel === 'all' || sel === m.id) html += pa2Pages(m, fy); });
      if (sel === 'all' || sel === 'pa3') html += pa3Page(ms, fy);
    }
    return bar(seg) + '<div class="rep-wrap">' + html + '</div>';
  }

  /* ---------- หลังบ้าน: คณะกรรมการและผลประเมิน ---------- */
  function needComList(fy, force) {
    if (!S.admin || ((S.comList[fy] || S.comLoading[fy]) && !force)) return;
    S.comLoading[fy] = 1;
    api('listCommittee', { fy: fy }, { loader: false }, function (err, res) {
      S.comLoading[fy] = 0;
      if (err) { S.comListErr = err; toast('โหลดรายชื่อกรรมการไม่สำเร็จ: ' + err); return; }
      S.comListErr = ''; S.comList[res.fy] = res;
      var r = route(); if (S.fy === fy && (r === 'admin-committee' || r === 'pa-forms' || r === 'admin')) render();
    });
  }
  function comAdminCall(action, data, msg, cb) {
    api(action, data, { loader: 'กำลังบันทึก' }, function (err, res) {
      if (err) { var fe = $('f-err'); if (fe) fe.innerHTML = '<div class="err">' + esc(err) + '</div>'; else toast(err); return; }
      S.comList[res.fy] = res; closeModal(); render(); if (msg) toast(msg); if (cb) cb(res);
    });
  }
  function comText(m) {
    var s = st();
    return 'เรียน ' + m.name + '\nขอเชิญประเมินผลการพัฒนางานตามข้อตกลง (PA) ของ ' + s.name + ' ' + s.school + ' ปีงบประมาณ ' + S.fy +
      '\nเข้าระบบที่ ' + siteUrl() + '#committee\nรหัสกรรมการ: ' + m.code + (m.due ? '\nกรุณาส่งผลภายใน ' + thDateFull(m.due).replace('วันที่ ', '') : '') + '\n(รหัสนี้ใช้เฉพาะท่าน กรุณาอย่าส่งต่อ)';
  }
  function copyText(t, msg) {
    function fb() {
      var ta = document.createElement('textarea'); ta.value = t; ta.setAttribute('readonly', ''); ta.style.position = 'fixed'; ta.style.opacity = '0'; document.body.appendChild(ta); ta.select();
      var ok = false; try { ok = document.execCommand('copy'); } catch (e) { }
      document.body.removeChild(ta); toast(ok ? msg : 'คัดลอกไม่ได้ กรุณาเลือกข้อความแล้วคัดลอกเอง');
    }
    if (navigator.clipboard && window.isSecureContext) navigator.clipboard.writeText(t).then(function () { toast(msg); }, fb); else fb();
  }
  function comForm(m) {
    m = m || { id: '', name: '', pos: '', role: '', due: '' };
    var ms = comMembers() || [], hasChair = ms.some(function (x) { return x.role === 'chair' && x.id !== m.id; }), role = m.role || (hasChair ? 'member' : 'chair');
    S.comEdit = m.id;
    openModal(m.id ? 'แก้ไขกรรมการ' : 'เพิ่มกรรมการ ปีงบ ' + S.fy,
      '<div class="field"><label for="cf-name">ชื่อ–สกุล</label><input id="cf-name" class="inp" maxlength="120" value="' + esc(m.name) + '" placeholder="นายสมชาย ใจดี"></div>' +
      '<div class="field"><label for="cf-pos">ตำแหน่ง</label><input id="cf-pos" class="inp" maxlength="120" value="' + esc(m.pos) + '" placeholder="ผู้อำนวยการโรงเรียนบ้านละลม"></div>' +
      '<div class="grid2"><div class="field"><label for="cf-role">บทบาท</label><select id="cf-role" class="inp"><option value="chair"' + (role === 'chair' ? ' selected' : '') + (hasChair ? ' disabled' : '') + '>ประธานกรรมการ' + (hasChair ? ' (มีแล้ว)' : '') + '</option><option value="member"' + (role === 'member' ? ' selected' : '') + '>กรรมการ</option></select></div>' +
      '<div class="field"><label for="cf-due">ครบกำหนดส่งผล</label><input id="cf-due" type="date" class="inp" value="' + esc(m.due) + '"></div></div>' +
      (m.id ? '' : '<p class="small muted">บันทึกแล้วระบบจะออกรหัสกรรมการให้อัตโนมัติ ส่งรหัสให้กรรมการได้จากปุ่มคัดลอกหรือแชร์</p>') + '<div id="f-err"></div>',
      '<button class="btn" data-act="close-modal">ยกเลิก</button><button class="btn primary" data-act="com-form-save">' + ic('check', 16) + ' บันทึก</button>');
  }
  function aCommittee() {
    var fy = S.fy, L = S.comList[fy];
    if (!L) {
      needComList(fy);
      return adminShell('admin-committee', 'คณะกรรมการและผลประเมิน ปีงบ ' + fy, 'กำลังโหลดข้อมูลจาก Google Sheets', '', '<div class="card" style="display:flex;flex-direction:column;gap:12px" aria-busy="true"><div class="sk" style="height:26px;width:40%"></div><div class="sk" style="height:120px"></div>' + (S.comListErr ? '<div class="err">' + esc(S.comListErr) + ' <button class="btn sm" data-act="com-reload">ลองใหม่</button></div>' : '') + '</div>');
    }
    var ms = comMembers(), rr = setRes(ms), sg = scoring(), nDone = ms.filter(function (m) { return m.status === 'submitted'; }).length, s = ensureDraft().s;
    var docs = docsOf(fy); if (!docs) needDocs(fy);
    var warn = '';
    if (docs && docs.pa && docs.pa.status !== 'ready') warn += '<div class="note warn-note">' + ic('file', 15) + ' แฟ้ม PA ปีงบ ' + fy + ' ยังไม่ได้ตั้งเป็น “พร้อมให้กรรมการประเมิน” <a href="#admin-pa">ไปที่แฟ้ม PA</a></div>';
    if (((D.settings || {}).docVis || {}).pa === 'private') warn += '<div class="note warn-note">' + ic('lock', 15) + ' ตั้งค่าให้แฟ้ม PA เป็น “ส่วนตัว” อยู่ กรรมการจะเปิดแฟ้มไม่ได้ <a href="#admin-settings">เปลี่ยนที่หน้าตั้งค่า</a></div>';
    if (ms.length && ms.length < 3) warn += '<div class="note">' + ic('users', 15) + ' แบบ PA3 ใช้กรรมการ 3 คน ตอนนี้มี ' + ms.length + ' คน</div>';
    var kpi = '<div class="grid4"><div class="kpi"><span class="l">กรรมการ</span><span class="v">' + ms.length + ' / 3</span><span class="small muted">' + (ms.some(function (m) { return m.role === 'chair'; }) ? 'มีประธานแล้ว' : 'ยังไม่มีประธาน') + '</span></div>' +
      '<div class="kpi' + (nDone < ms.length ? ' warn' : '') + '"><span class="l">ส่งผลแล้ว</span><span class="v">' + nDone + ' / ' + ms.length + '</span>' + prog(ms.length ? nDone / ms.length * 100 : 0, nDone === ms.length && ms.length ? 'good' : '') + '</div>' +
      '<div class="kpi"><span class="l">คะแนนเฉลี่ย</span><span class="v">' + (rr ? fix(rr.avg, 2) : '–') + '</span><span class="small muted">เต็ม ' + (sg.p1Max + sg.p2Max) + (rr ? ' · ต่ำสุดร้อยละ ' + fix(rr.minPct, 2) : '') + '</span></div>' +
      '<div class="kpi"><span class="l">ผลการประเมิน</span><span class="v" style="font-size:18px;margin-top:4px">' + resPill(rr) + '</span><span class="small muted">ทุกคนต้องให้ ≥ ร้อยละ ' + sg.passPct + '</span></div></div>';
    var cards = ms.map(function (m, i) {
      var c = m.data && m.status !== 'pending' ? paCalc(m.data) : null;
      return '<div class="card com-card"><div class="com-card-h"><span class="com-no">' + (i + 1) + '</span><div style="flex:1;min-width:0"><div class="row" style="gap:8px;justify-content:space-between"><span class="eyebrow">' + COM_ROLE[m.role] + '</span>' + comPill(m) + '</div><h3>' + esc(m.name) + '</h3><span class="small muted">' + esc(m.pos || '-') + '</span></div></div>' +
        '<div class="com-code-box"><span class="small muted">รหัสกรรมการ</span><b class="mono">' + esc(m.code) + '</b><span class="row" style="gap:4px"><button class="btn sm" data-act="com-copy" data-id="' + m.id + '">' + ic('copy', 14) + ' คัดลอกรหัส</button><button class="btn sm" data-act="com-share" data-id="' + m.id + '">' + ic('chat', 14) + ' ข้อความเชิญ</button></span></div>' +
        '<div class="com-meta small"><span>' + ic('cal', 13) + ' ' + (m.due ? 'ส่งภายใน ' + fd(m.due) + (m.status !== 'submitted' && daysLeft(m.due) < 0 ? ' <b style="color:var(--bad)">(เลยกำหนด)</b>' : '') : 'ไม่ได้กำหนดวันส่ง') + '</span><span>' + ic('user', 13) + ' ' + (m.lastLogin ? 'เข้าระบบล่าสุด ' + fdt(m.lastLogin) : 'ยังไม่เคยเข้าระบบ') + '</span>' + (c ? '<span>' + ic('chart', 13) + ' ' + (m.status === 'submitted' ? 'คะแนน ' : 'ร่าง ') + fix(c.total, 2) + ' (ร้อยละ ' + fix(c.pct, 1) + ')</span>' : '') + '</div>' +
        '<div class="row" style="gap:6px"><button class="btn sm" data-act="com-edit" data-id="' + m.id + '">' + ic('edit', 14) + ' แก้ไข</button><button class="btn sm" data-act="com-regen" data-id="' + m.id + '">' + ic('refresh', 14) + ' ออกรหัสใหม่</button>' + (m.status === 'submitted' ? '<button class="btn sm" data-act="com-unlock" data-id="' + m.id + '">' + ic('lock', 14) + ' เปิดให้แก้ไข</button>' : '') + '<button class="btn sm danger" data-act="com-del" data-id="' + m.id + '">' + ic('trash', 14) + ' ลบ</button></div></div>';
    }).join('');
    var addBtn = ms.length < 3 ? '<button class="btn primary" data-act="com-new">' + ic('plus', 16) + ' เพิ่มกรรมการ</button>' : '';
    var res = ms.length ? '<div class="card"><div class="sec-h"><h3>ผลการประเมินรายกรรมการ</h3><a class="btn sm" href="#pa-forms">' + ic('print', 14) + ' พิมพ์ PA2 / PA3</a></div><div class="tbl-wrap"><table class="tbl"><thead><tr><th>กรรมการ</th><th>สถานะ</th><th>ภาระงาน</th><th class="r">ส่วนที่ 1 (' + sg.p1Max + ')</th><th class="r">ส่วนที่ 2 (' + sg.p2Max + ')</th><th class="r">รวม</th><th class="r">ร้อยละ</th><th>ผล</th></tr></thead><tbody>' +
      ms.map(function (m) {
        var ok = m.status === 'submitted', c = ok ? paCalc(m.data) : null;
        return '<tr><td><b>' + esc(m.name) + '</b><br><span class="small muted">' + COM_ROLE[m.role] + '</span></td><td>' + comPill(m) + '</td><td>' + (ok ? (m.data.load === 'ok' ? 'ตามที่กำหนด' : '<span style="color:var(--bad)">ไม่ตามที่กำหนด</span>') : '–') + '</td>' +
          '<td class="r num">' + (c ? fix(c.p1, 2) : '–') + '</td><td class="r num">' + (c ? fix(c.p2, 2) : '–') + '</td><td class="r num"><b>' + (c ? fix(c.total, 2) : '–') + '</b></td><td class="r num">' + (c ? fix(c.pct, 2) : '–') + '</td><td>' + (c ? (c.pass ? '<span class="pill good">ผ่าน</span>' : '<span class="pill bad">ไม่ผ่าน</span>') : '') + '</td></tr>';
      }).join('') + (rr ? '<tr class="sum"><td colspan="5">เฉลี่ยจากกรรมการที่ส่งแล้ว ' + rr.n + ' คน</td><td class="r num"><b>' + fix(rr.avg, 2) + '</b></td><td></td><td>' + resPill(rr) + '</td></tr>' : '') + '</tbody></table></div>' +
      (rr && rr.loadBad ? '<p class="small" style="color:var(--bad);margin-top:8px">มีกรรมการเห็นว่าภาระงานไม่เป็นไปตามที่ ก.ค.ศ. กำหนด</p>' : '') +
      '<p class="small muted" style="margin-top:8px">เกณฑ์ PA3: ผ่านเมื่อคะแนนจากกรรมการ<b>แต่ละคน</b>ไม่ต่ำกว่าร้อยละ ' + sg.passPct + ' · ผลชั่วคราวจนกว่ากรรมการจะส่งครบ 3 คน · ลายมือชื่อที่ลงไว้จะแสดงในแบบที่พิมพ์</p></div>' : '';
    function nIn(k, label, min, max) { return '<div class="field"><label for="b-' + k + '">' + label + '</label><input id="b-' + k + '" type="number" min="' + min + '" max="' + max + '" class="inp" data-b="s.' + k + '" value="' + esc(s[k] === undefined || s[k] === '' ? ({ p1Max: 60, p2Max: 40, passPct: 70 })[k] : s[k]) + '"></div>'; }
    var setCard = '<div class="card" style="display:flex;flex-direction:column;gap:12px"><h3>ค่าที่ใช้ในแบบ PA2 / PA3</h3><div class="grid3">' + nIn('p1Max', 'คะแนนเต็มส่วนที่ 1', 1, 100) + nIn('p2Max', 'คะแนนเต็มส่วนที่ 2', 1, 100) + nIn('passPct', 'เกณฑ์ผ่าน (ร้อยละ)', 1, 100) + '</div>' +
      '<div class="grid3"><div class="field"><label for="b-acad">วิทยฐานะ (กำหนดระดับที่คาดหวัง)</label><select id="b-acad" class="inp" data-b="s.acad">' + RANKS.map(function (o) { return '<option value="' + esc(o[0]) + '"' + ((s.acad || '') === o[0] ? ' selected' : '') + '>' + esc(o[1]) + '</option>'; }).join('') + '</select></div>' +
      '<div class="field"><label for="b-rank">รับเงินเดือนในอันดับ</label><input id="b-rank" class="inp" data-b="s.rank" maxlength="40" value="' + esc(s.rank || '') + '" placeholder="คศ.1"></div>' +
      '<div class="field"><label for="b-salary">อัตราเงินเดือน (บาท)</label><input id="b-salary" class="inp" data-b="s.salary" inputmode="numeric" maxlength="12" value="' + esc(s.salary || '') + '" placeholder="25,140"></div></div>' +
      '<span class="hint">ระดับที่คาดหวังตอนนี้: <b>' + esc(EXP_LV[s.acad || ''] || EXP_LV['']) + '</b> · อันดับและเงินเดือนแสดงเฉพาะในแบบที่พิมพ์ ไม่แสดงในหน้าสาธารณะ · กดบันทึกที่แถบด้านบน</span></div>';
    return adminShell('admin-committee', 'คณะกรรมการและผลประเมิน ปีงบ ' + fy, 'กรรมการ 3 คนต่อปีงบ เข้าระบบด้วยรหัส ให้คะแนนแบบ PA2 ลงลายมือชื่อ แล้วสรุปเป็นแบบ PA3',
      '<button class="btn" data-act="com-reload">' + ic('refresh', 16) + ' โหลดใหม่</button><a class="btn" href="#pa-forms">' + ic('print', 16) + ' แบบ PA2 / PA3</a>' + addBtn,
      warn + kpi + '<div class="note" style="margin-top:14px">' + ic('link', 15) + ' กรรมการเข้าระบบที่ <span class="mono">' + esc(siteUrl()) + '#committee</span> แล้วใส่รหัสของตนเอง · ออกรหัสใหม่แล้วรหัสเดิมและการเข้าระบบที่ค้างอยู่จะใช้ไม่ได้ทันที</div>' +
      '<div class="com-grid">' + (cards || '<div class="card empty">ยังไม่มีกรรมการของปีงบ ' + fy + ' กด “เพิ่มกรรมการ” เพื่อเริ่ม</div>') + '</div>' +
      '<div style="display:flex;flex-direction:column;gap:16px;margin-top:16px">' + res + setCard + '</div>');
  }
  /** รายการที่ควรทำในแดชบอร์ด */
  function comTodo() {
    var L = S.comList[S.fy];
    if (!L) { needComList(S.fy); return ''; }
    var ms = comMembers(), n = ms.filter(function (m) { return m.status === 'submitted'; }).length;
    function t(dot, msg) { return '<a class="todo" href="#admin-committee"><span class="dot ' + dot + '"></span><span style="flex:1">' + msg + '</span>' + ic('chev', 14) + '</a>'; }
    if (!ms.length) return t('warn', 'ตั้งคณะกรรมการประเมิน PA ปีงบ ' + S.fy);
    var o = ms.length < 3 ? t('warn', 'กรรมการปีงบ ' + S.fy + ' ยังไม่ครบ 3 คน (มี ' + ms.length + ' คน)') : '';
    if (n < ms.length) o += t('warn', 'กรรมการส่งผลแล้ว ' + n + ' จาก ' + ms.length + ' คน');
    return o;
  }

  /* ---------- เหตุการณ์ ---------- */
  document.addEventListener('click', function (e) {
    var el = e.target.closest ? e.target.closest('[data-act]') : null;
    if (!el) return;
    var act = el.getAttribute('data-act'), k = el.getAttribute('data-k'), id = el.getAttribute('data-id'), m = id ? find(comMembers() || [], 'id', id) : null;
    switch (act) {
      case 'print': window.print(); break;
      case 'form-sel': S.formSel = k; render(); break;
      case 'pa-tab-go': S.paTab = k; location.hash = 'pa'; break;
      case 'com-logout': comLogout(); break;
      case 'com-save': comSave(false); break;
      case 'com-submit': if (S.comDirty) comSave(true); openSubmit(); break;
      case 'com-send': comSend(); break;
      case 'sig-clear': initSignPad(); break;
      case 'ev-list': evList(k); break;
      case 'com-reload': S.comListErr = ''; needComList(S.fy, true); break;
      case 'com-new': comForm(); break;
      case 'com-edit': if (m) comForm(m); break;
      case 'com-form-save':
        var nm = $('cf-name').value.trim();
        if (!nm) { $('f-err').innerHTML = '<div class="err">กรุณาใส่ชื่อกรรมการ</div>'; break; }
        comAdminCall('saveCommittee', { fy: S.fy, item: { id: S.comEdit || '', name: nm, pos: $('cf-pos').value.trim(), role: $('cf-role').value, due: $('cf-due').value } }, S.comEdit ? 'บันทึกแล้ว' : 'เพิ่มกรรมการแล้ว ส่งรหัสให้กรรมการได้จากปุ่มคัดลอก');
        break;
      case 'com-copy': if (m) copyText(m.code, 'คัดลอกรหัสของ ' + m.name + ' แล้ว'); break;
      case 'com-share':
        if (!m) break;
        var txt2 = comText(m);
        if (navigator.share) navigator.share({ title: 'เชิญประเมิน PA', text: txt2 }).catch(function () { });
        else copyText(txt2, 'คัดลอกข้อความเชิญแล้ว วางในแชตได้เลย');
        break;
      case 'com-regen': if (m) confirmBox('ออกรหัสใหม่ให้ ' + esc(m.name) + '? รหัสเดิมและการเข้าระบบที่ค้างอยู่จะใช้ไม่ได้ทันที (คะแนนที่บันทึกไว้ไม่หาย)', 'ออกรหัสใหม่', function () { comAdminCall('regenCode', { id: m.id }, 'ออกรหัสใหม่แล้ว อย่าลืมส่งรหัสใหม่ให้กรรมการ'); }); break;
      case 'com-unlock': if (m) confirmBox('เปิดให้ ' + esc(m.name) + ' แก้ไขผลการประเมิน? สถานะจะกลับเป็นร่าง ลายมือชื่อเดิมจะถูกลบ และกรรมการต้องกดส่งใหม่', 'เปิดให้แก้ไข', function () { comAdminCall('unlockScore', { id: m.id }, 'เปิดให้แก้ไขแล้ว'); }); break;
      case 'com-del': if (m) confirmBox('ลบ ' + esc(m.name) + ' ออกจากคณะกรรมการ?' + (m.status === 'submitted' ? ' <b>กรรมการคนนี้ส่งผลแล้ว คะแนนและลายมือชื่อจะถูกลบด้วย</b>' : ''), 'ลบกรรมการ', function () { comAdminCall('deleteCommittee', { id: m.id, force: true }, 'ลบแล้ว'); }, true); break;
    }
  });
  document.addEventListener('change', function (e) {
    var t = e.target, kind = t.getAttribute && t.getAttribute('data-sc');
    if (!kind || !S.comDraft || (S.com && S.com.score.status === 'submitted')) return;
    if (kind === 'load') S.comDraft.load = t.value;
    else { S.comDraft[kind] = S.comDraft[kind] || {}; S.comDraft[kind][t.getAttribute('data-k')] = +t.value; }
    comTouch();
  });
  document.addEventListener('input', function (e) {
    var t = e.target; if (!t.getAttribute || !S.comDraft) return;
    var nk = t.getAttribute('data-note'), ck = t.getAttribute('data-ctext');
    if (nk) { S.comDraft.notes = S.comDraft.notes || {}; S.comDraft.notes[nk] = t.value; comTouch(); }
    if (ck) { S.comDraft[ck] = t.value; comTouch(); }
  });
  document.addEventListener('submit', function (e) { if (e.target.id === 'com-login-form') { e.preventDefault(); doComLogin(); } });
  window.addEventListener('beforeunload', function (e) { if (S.comDirty) { e.preventDefault(); e.returnValue = ''; } });
  window.addEventListener('pagehide', function () { if (S.comDirty) comSave(true); });

  /* =====================================================================
     เฟส 5: ประเมินเพื่อเลื่อนเงินเดือน (ปีงบละ 2 รอบ) · แบบประเมินความพึงพอใจ (ตอบผ่าน QR)
     ===================================================================== */
  var SAL_LEVELS = ['ดีเด่น', 'ดีมาก', 'ดี', 'พอใช้', 'ต้องปรับปรุง'];
  var SAL_ST = { draft: ['ประเมินตนเอง (ร่าง)', 'off'], sent: ['ส่งผู้บริหารแล้ว', 'warn'], done: ['ได้รับผลแล้ว', 'good'] };
  var SAL_DEF = [
    { k: 'a1', g: 'a', label: 'ผลการปฏิบัติงานตามมาตรฐานตำแหน่ง', max: 40 }, { k: 'a2', g: 'a', label: 'ผลที่เกิดกับผู้เรียน', max: 20 }, { k: 'a3', g: 'a', label: 'งานที่ได้รับมอบหมายเพิ่มเติม', max: 10 },
    { k: 'b1', g: 'b', label: 'การรักษาวินัย', max: 10 }, { k: 'b2', g: 'b', label: 'การปฏิบัติตนตามคุณธรรม จริยธรรม', max: 10 }, { k: 'b3', g: 'b', label: 'การปฏิบัติตนตามจรรยาบรรณวิชาชีพ', max: 10 }
  ];
  var SAL_G = { a: 'องค์ประกอบที่ 1 ผลสัมฤทธิ์ของงาน', b: 'องค์ประกอบที่ 2 พฤติกรรมการปฏิบัติงาน' };
  var SV_ROLE = { student: 'นักเรียน', parent: 'ผู้ปกครอง', teacher: 'ครู/บุคลากร' };
  var SV_CLS = ['ป.1', 'ป.2', 'ป.3', 'ป.4', 'ป.5', 'ป.6', 'ม.1', 'ม.2', 'ม.3'];
  var SV_DEF = ['ครูเตรียมการสอนมาอย่างดีและอธิบายเข้าใจง่าย', 'ครูใช้สื่อหรือเทคโนโลยีที่ช่วยให้เรียนรู้ได้ดีขึ้น', 'ครูเปิดโอกาสให้ซักถามและแสดงความคิดเห็น', 'ครูวัดผลอย่างยุติธรรมและแจ้งผลชัดเจน', 'ครูเอาใจใส่และช่วยเหลือนักเรียนเป็นรายบุคคล', 'ครูตรงต่อเวลาและเป็นแบบอย่างที่ดี', 'ความพึงพอใจโดยรวมต่อการเรียนวิชานี้'];
  S.sal = {}; S.salDraft = null; S.salRound = 0; S.sv = null; S.svSel = ''; S.svAll = false; S.svPub = null; S.svDone = null;

  /* ---------- QR (สร้างในเครื่อง ไม่ต้องพึ่งบริการภายนอก) ---------- */
  function qrSvg(text, size, label) {
    var q = qrcode(0, 'M'); q.addData(text); q.make();
    var n = q.getModuleCount(), d = '';
    for (var r = 0; r < n; r++) { var c = 0; while (c < n) { if (q.isDark(r, c)) { var s = c; while (c < n && q.isDark(r, c)) c++; d += 'M' + s + ' ' + r + 'h' + (c - s) + 'v1h-' + (c - s) + 'z'; } else c++; } }
    return '<svg class="qrc" viewBox="-3 -3 ' + (n + 6) + ' ' + (n + 6) + '" width="' + size + '" height="' + size + '" role="img" aria-label="' + esc(label || 'QR code') + '" shape-rendering="crispEdges"><rect x="-3" y="-3" width="' + (n + 6) + '" height="' + (n + 6) + '" fill="#fff"/><path d="' + d + '" fill="#111"/></svg>';
  }
  function svUrl() { return siteUrl() + '#survey'; }
  function thPeriod(fy, r) { var g = roundRange(fy, r); return thDateFull(g[0]).replace('วันที่ ', '') + ' ถึง ' + thDateFull(g[1]).replace('วันที่ ', ''); }
  function roundNow() { var d = new Date(), m = d.getMonth() + 1; return { fy: fyNow(d), r: (m >= 10 || m <= 3) ? 1 : 2 }; }

  /* =====================================================================
     1) ประเมินเพื่อเลื่อนเงินเดือน
     ===================================================================== */
  function salCalc(items, sc) {
    var t = 0, max = 0, g = { a: [0, 0], b: [0, 0] };
    items.forEach(function (it) { var v = +sc[it.k] || 0; t += v; max += it.max; g[it.g][0] += v; g[it.g][1] += it.max; });
    var pct = max ? t / max * 100 : 0;
    return { total: t, max: max, pct: pct, g: g, level: pct >= 90 ? 'ดีเด่น' : pct >= 80 ? 'ดีมาก' : pct >= 70 ? 'ดี' : pct >= 60 ? 'พอใช้' : 'ต้องปรับปรุง' };
  }
  function levelCls(lv) { return { 'ดีเด่น': 'good', 'ดีมาก': 'good', 'ดี': 'info', 'พอใช้': 'warn', 'ต้องปรับปรุง': 'bad' }[lv] || 'off'; }
  function salKey() { if (!S.salRound) S.salRound = S.fy === roundNow().fy ? roundNow().r : 1; return S.fy + '-' + S.salRound; }
  function needSal(force) {
    var k = salKey(); if ((S.sal[k] && !force) || S.salLoading === k) return;
    S.salLoading = k;
    api('salaryGet', { fy: S.fy, round: S.salRound }, { loader: false }, function (err, res) {
      S.salLoading = '';
      if (err) { S.salErr = err; toast('โหลดแบบเลื่อนเงินเดือนไม่สำเร็จ: ' + err); render(); return; }
      S.salErr = ''; S.sal[res.fy + '-' + res.round] = res; if (S.salDraft && S.salDraft.key === res.fy + '-' + res.round && !S.salDraft.dirty) S.salDraft = null;
      if (route() === 'admin-salary' || route() === 'salary-print') render();
    });
  }
  function salDraft() {
    var k = salKey(), res = S.sal[k]; if (!res) return null;
    if (!S.salDraft || S.salDraft.key !== k) {
      var rec = res.rec;
      S.salDraft = { key: k, fy: res.fy, round: res.round, items: rec ? rec.items : res.items, scores: clone(rec ? rec.scores : {}), note: rec ? rec.note : '', status: rec ? rec.status : 'draft', official: clone(rec ? rec.official : { score: '', level: '', raise: '', date: '', note: '' }), useNew: false, dirty: false };
    }
    return S.salDraft;
  }
  function salSumHtml() {
    var d = S.salDraft; if (!d) return '';
    var c = salCalc(d.items, d.scores), res = S.sal[d.key];
    return '<span class="eyebrow">สรุปผลประเมินตนเอง</span><div class="row" style="align-items:baseline;gap:6px;margin:6px 0 10px"><span class="sum-big">' + fix(c.total, 2) + '</span><span class="muted">/ ' + c.max + '</span></div>' +
      ['a', 'b'].filter(function (g) { return c.g[g][1]; }).map(function (g) { return '<div class="sum-line"><span>' + SAL_G[g].replace(/^องค์ประกอบที่ \d /, '') + '</span><b class="num">' + fix(c.g[g][0], 2) + ' / ' + c.g[g][1] + '</b></div>'; }).join('') +
      '<div class="sum-line"><span>คิดเป็นร้อยละ</span><b class="num">' + fix(c.pct, 2) + '</b></div><div style="margin:10px 0"><span class="pill ' + levelCls(c.level) + '">ระดับ ' + c.level + '</span></div>' +
      (d.official.score !== '' && d.official.score != null ? '<div class="sum-line"><span>ผลจากผู้บริหาร</span><b class="num">' + fix(+d.official.score, 2) + (d.official.level ? ' · ' + esc(d.official.level) : '') + '</b></div>' : '') +
      (d.official.raise !== '' && d.official.raise != null ? '<div class="sum-line"><span>เลื่อนเงินเดือน</span><b class="num">ร้อยละ ' + fix(+d.official.raise, 2) + '</b></div>' : '') +
      '<p class="small muted" style="margin-top:8px">ดีเด่น 90–100 · ดีมาก 80–89 · ดี 70–79 · พอใช้ 60–69 · ต้องปรับปรุง ต่ำกว่า 60 (คิดจากร้อยละ)</p>' +
      (res && res.list.length ? '<h4 style="margin-top:12px">ทุกรอบที่บันทึกไว้</h4><div class="tbl-wrap" style="margin-top:6px"><table class="tbl"><tbody>' + res.list.map(function (h) { return '<tr' + (h.id === 'sal-' + d.fy + '-' + d.round ? ' class="on"' : '') + '><td class="small">' + h.fy + ' รอบ ' + h.round + '</td><td class="r num">' + fix(h.total, 1) + '</td><td class="small">' + esc(h.official && h.official.raise !== '' && h.official.raise != null ? 'เลื่อน ' + h.official.raise + '%' : h.level) + '</td></tr>'; }).join('') + '</tbody></table></div>' : '');
  }
  function renderSalSum() { var el = $('sal-sum'); if (el) el.innerHTML = salSumHtml(); }
  function aSalary() {
    var k = salKey(), res = S.sal[k];
    var seg = '<div class="seg" role="group" aria-label="รอบการประเมิน">' + [1, 2].map(function (r) { return '<button type="button" data-act="sal-round" data-k="' + r + '" class="' + (S.salRound === r ? 'on' : '') + '">รอบ ' + r + ' (' + (r === 1 ? '1 ต.ค. – 31 มี.ค.' : '1 เม.ย. – 30 ก.ย.') + ')</button>'; }).join('') + '</div>';
    if (!res) { needSal(); return adminShell('admin-salary', 'ประเมินเพื่อเลื่อนเงินเดือน ปีงบ ' + S.fy, 'ปีงบละ 2 รอบ · ข้อมูลส่วนนี้เห็นเฉพาะเจ้าของแฟ้ม', seg, '<div class="card" aria-busy="true" style="display:flex;flex-direction:column;gap:12px"><div class="sk" style="height:26px;width:40%"></div><div class="sk" style="height:140px"></div>' + (S.salErr ? '<div class="err">' + esc(S.salErr) + ' <button class="btn sm" data-act="sal-reload">ลองใหม่</button></div>' : '') + '</div>'); }
    var d = salDraft(), g = roundRange(S.fy, S.salRound), c = C();
    var works = c.works.filter(function (w) { return w.date >= g[0] && w.date <= g[1]; }).length, awards = c.awards.filter(function (a) { return a.date >= g[0] && a.date <= g[1]; }), hrs = awards.reduce(function (t, a) { return t + (+a.hours || 0); }, 0);
    var itemsChanged = res.rec && JSON.stringify(res.rec.items) !== JSON.stringify(res.items) && !d.useNew;
    function row(it, i) {
      var v = d.scores[it.k];
      return '<div class="srow sal-row"><span class="code">' + (i + 1) + '</span><div><div>' + esc(it.label) + '</div>' + (i === 0 && it.g === 'a' ? '<button class="btn sm" style="margin-top:4px;padding:2px 8px" data-act="sal-pa">' + ic('link', 14) + ' เติมจากผล PA</button>' : '') + '</div><div class="row" style="gap:6px;flex-wrap:nowrap"><input type="number" class="inp num" style="text-align:right;width:92px" min="0" max="' + it.max + '" step="0.5" data-sal="' + it.k + '" value="' + (v === undefined || v === '' ? '' : v) + '" aria-label="' + esc(it.label) + ' คะแนนเต็ม ' + it.max + '"><span class="small muted">/ ' + it.max + '</span></div></div>';
    }
    var n = 0, groups = ['a', 'b'].map(function (gk) {
      var its = d.items.filter(function (it) { return it.g === gk; }); if (!its.length) return '';
      var mx = its.reduce(function (t, it) { return t + it.max; }, 0);
      return '<div class="card"><span class="eyebrow">' + SAL_G[gk].split(' ')[0] + ' ' + SAL_G[gk].split(' ')[1] + '</span><h3>' + SAL_G[gk].replace(/^องค์ประกอบที่ \d /, '') + ' (' + mx + ' คะแนน)</h3>' + its.map(function (it) { return row(it, n++); }).join('') + '</div>';
    }).join('');
    var stSeg = '<div class="seg" role="group" aria-label="สถานะ">' + Object.keys(SAL_ST).map(function (s) { return '<button type="button" data-act="sal-status" data-k="' + s + '" class="' + (d.status === s ? 'on' : '') + '">' + SAL_ST[s][0] + '</button>'; }).join('') + '</div>';
    var o = d.official;
    var off = '<div class="card" style="display:flex;flex-direction:column;gap:12px"><span class="eyebrow">บันทึกหลังผู้บริหารแจ้งผล</span><h3>ผลการประเมินและการเลื่อนเงินเดือน</h3><div class="grid3">' +
      '<div class="field"><label for="so-score">คะแนนที่ได้รับ (เต็ม 100)</label><input id="so-score" type="number" min="0" max="100" step="0.01" class="inp num" data-salo="score" value="' + esc(o.score) + '"></div>' +
      '<div class="field"><label for="so-level">ระดับผลการประเมิน</label><select id="so-level" class="inp" data-salo="level"><option value="">ยังไม่ทราบ</option>' + SAL_LEVELS.map(function (l) { return '<option' + (o.level === l ? ' selected' : '') + '>' + l + '</option>'; }).join('') + '</select></div>' +
      '<div class="field"><label for="so-raise">ได้เลื่อนร้อยละ</label><input id="so-raise" type="number" min="0" max="10" step="0.01" class="inp num" data-salo="raise" value="' + esc(o.raise) + '" placeholder="เช่น 3.5"></div></div>' +
      '<div class="grid2"><div class="field"><label for="so-date">วันที่มีผล</label><input id="so-date" type="date" class="inp" data-salo="date" value="' + esc(o.date) + '"></div><div class="field"><label for="so-note">หมายเหตุ</label><input id="so-note" class="inp" maxlength="500" data-salo="note" value="' + esc(o.note) + '" placeholder="เช่น เลขที่คำสั่ง"></div></div></div>';
    return adminShell('admin-salary', 'ประเมินเพื่อเลื่อนเงินเดือน ปีงบ ' + S.fy, 'รอบที่ ' + S.salRound + ' · ' + thPeriod(S.fy, S.salRound) + ' · ข้อมูลส่วนนี้เห็นเฉพาะเจ้าของแฟ้ม',
      seg + '<button class="btn" data-act="sal-items">' + ic('gear', 16) + ' ปรับหัวข้อ</button><a class="btn" href="#salary-print">' + ic('print', 16) + ' พิมพ์</a><button class="btn primary" data-act="sal-save">' + ic('check', 16) + ' บันทึก</button>',
      docSaveBar(d.dirty, 'sal') +
      '<div class="note">' + ic('folder', 15) + ' ในรอบนี้มีผลงาน ' + works + ' ชิ้น · รางวัล/อบรม ' + awards.length + ' รายการ (' + hrs + ' ชม.) ใช้อ้างอิงได้ · หัวข้อและคะแนนเต็มปรับให้ตรงกับแบบที่ สพป. ใช้ได้ที่ปุ่ม “ปรับหัวข้อ”</div>' +
      (itemsChanged ? '<div class="note warn-note">' + ic('gear', 15) + ' รอบนี้บันทึกด้วยหัวข้อชุดเดิม คะแนนจึงยังคิดตามชุดเดิม <button class="btn sm" data-act="sal-newitems">เปลี่ยนเป็นหัวข้อชุดใหม่</button></div>' : '') +
      '<div class="row" style="margin:14px 0 4px;gap:10px"><b class="small">สถานะ</b>' + stSeg + '</div>' +
      '<div class="score-layout" style="margin-top:12px"><div style="display:flex;flex-direction:column;gap:14px">' + groups +
        '<div class="card"><div class="field"><label for="sal-note">หลักฐานอ้างอิง / หมายเหตุ</label><textarea id="sal-note" class="inp" rows="3" maxlength="2000" data-salnote="1" placeholder="เช่น ผลงานและรางวัลที่ใช้ประกอบรอบนี้">' + esc(d.note) + '</textarea></div></div>' + off + '</div>' +
        '<aside class="card raised sticky" id="sal-sum">' + salSumHtml() + '</aside></div>');
  }
  function salSave(cb) {
    var d = S.salDraft; if (!d) return;
    api('salarySave', { fy: d.fy, round: d.round, scores: d.scores, note: d.note, status: d.status, official: d.official, useNewItems: d.useNew }, { loader: 'กำลังบันทึก' }, function (err, res) {
      if (err) { toast(err); return; }
      S.sal[res.fy + '-' + res.round] = res; S.salDraft = null; if (D.admin && D.admin.evalSum) D.admin.evalSum.salary = res.list.slice(0, 6);
      render(); toast('บันทึกแบบประเมินเลื่อนเงินเดือนแล้ว'); if (cb) cb();
    });
  }
  function salTouch() { markDocDirty(S.salDraft, 'sal'); renderSalSum(); }
  function salItemsForm() {
    var items = (S.sal[salKey()] || {}).items || SAL_DEF;
    S.salItemsEdit = clone(items);
    openModal('หัวข้อการประเมินเพื่อเลื่อนเงินเดือน', '<div id="sal-items-box">' + salItemsRows() + '</div><div class="row" style="margin-top:10px"><button class="btn sm" data-act="sal-it-add">' + ic('plus', 14) + ' เพิ่มหัวข้อ</button><button class="btn sm" data-act="sal-it-reset">ใช้ชุดเริ่มต้น</button></div>' +
      '<p class="small muted" style="margin-top:10px">ใช้กับรอบที่ยังไม่เคยบันทึก รอบที่บันทึกแล้วยังคิดคะแนนตามหัวข้อเดิม จนกว่าจะกด “เปลี่ยนเป็นหัวข้อชุดใหม่”</p><div id="f-err"></div>',
      '<button class="btn" data-act="close-modal">ยกเลิก</button><button class="btn primary" data-act="sal-it-save">' + ic('check', 16) + ' บันทึกหัวข้อ</button>', true);
  }
  function salItemsRows() {
    var L = S.salItemsEdit, tot = L.reduce(function (t, it) { return t + (+it.max || 0); }, 0);
    return L.map(function (it, i) {
      return '<div class="sal-it"><select class="inp" data-salit="' + i + ':g" aria-label="องค์ประกอบ ข้อ ' + (i + 1) + '"><option value="a"' + (it.g === 'a' ? ' selected' : '') + '>ผลสัมฤทธิ์</option><option value="b"' + (it.g === 'b' ? ' selected' : '') + '>พฤติกรรม</option></select><input class="inp" data-salit="' + i + ':label" value="' + esc(it.label) + '" maxlength="200" aria-label="หัวข้อ ข้อ ' + (i + 1) + '"><input class="inp num" type="number" min="1" max="100" step="0.5" data-salit="' + i + ':max" value="' + it.max + '" aria-label="คะแนนเต็ม ข้อ ' + (i + 1) + '"><button class="btn icon sm danger" data-act="sal-it-del" data-i="' + i + '" aria-label="ลบหัวข้อ ' + (i + 1) + '">' + ic('trash', 14) + '</button></div>';
    }).join('') + '<p class="small ' + (tot === 100 ? 'muted' : 'warn-t') + '" style="margin-top:6px">คะแนนเต็มรวม ' + tot + (tot === 100 ? '' : ' (แบบส่วนใหญ่ใช้ 100 คะแนน)') + '</p>';
  }
  function salaryPrint() {
    var bar = '<div class="rep-bar"><a class="btn" href="#admin-salary">' + ic('left', 16) + ' กลับ</a><b>แบบประเมินตนเองเพื่อเลื่อนเงินเดือน</b><span class="sp"></span><button class="btn primary" data-act="print">' + ic('print', 16) + ' พิมพ์ / บันทึก PDF</button></div>';
    if (!S.admin) return bar + '<div class="rep-wrap"><div class="card empty" style="max-width:520px">' + ic('lock', 18) + ' เปิดได้เฉพาะเจ้าของแฟ้ม <a href="#login">เข้าสู่ระบบ</a></div></div>';
    var res = S.sal[salKey()]; if (!res) { needSal(); return bar + '<div class="rep-wrap"><div class="sk" style="width:210mm;max-width:100%;height:300px"></div></div>'; }
    var d = salDraft(), c = salCalc(d.items, d.scores), s = st(), o = d.official, n = 0;
    var rows = ['a', 'b'].map(function (gk) {
      var its = d.items.filter(function (it) { return it.g === gk; }); if (!its.length) return '';
      return '<tr class="grp"><td colspan="3">' + SAL_G[gk] + '</td><td class="r num">' + fix(c.g[gk][0], 2) + '</td></tr>' + its.map(function (it) { n++; var v = d.scores[it.k]; return '<tr><td class="c">' + n + '</td><td>' + esc(it.label) + '</td><td class="r num">' + it.max + '</td><td class="r num">' + (v === undefined || v === '' ? '' : fix(+v, 2)) + '</td></tr>'; }).join('');
    }).join('');
    function sig(name, role) { return '<div class="paf-sig"><div class="paf-sl"><span>(ลงชื่อ)</span><span class="ln"></span><span>' + role + '</span></div><div>(' + (name ? esc(name) : '..................................................') + ')</div><div>' + thDateFull('') + '</div></div>'; }
    return bar + '<div class="rep-wrap"><section class="a4 paf"><div class="paf-top"><span></span><span>ปีงบประมาณ ' + d.fy + ' รอบที่ ' + d.round + '</span></div>' +
      '<div class="paf-title"><b>แบบสรุปผลการประเมินตนเองเพื่อประกอบการพิจารณาเลื่อนเงินเดือน</b><b>ข้าราชการครูและบุคลากรทางการศึกษา ตำแหน่ง ' + esc(s.position || 'ครู') + '</b><span>รอบการประเมิน ' + thPeriod(d.fy, d.round) + '</span></div>' + pafInfo() +
      '<div class="a4-scroll"><table class="tbl paf-t"><thead><tr><th style="width:40px">ข้อ</th><th>รายการประเมิน</th><th style="width:80px">คะแนนเต็ม</th><th style="width:96px">ประเมินตนเอง</th></tr></thead><tbody>' + rows +
      '<tr class="paf-sumrow"><td colspan="2" class="c">รวม</td><td class="r num">' + c.max + '</td><td class="r num">' + fix(c.total, 2) + '</td></tr></tbody></table></div>' +
      '<p><b>สรุประดับผลการประเมินตนเอง</b> &nbsp; ' + SAL_LEVELS.map(function (l) { return pafCb(c.level === l) + l; }).join(' &nbsp; ') + ' <span class="small">(ร้อยละ ' + fix(c.pct, 2) + ')</span></p>' +
      (o.score !== '' && o.score != null || o.level || (o.raise !== '' && o.raise != null) ? '<p><b>ผลจากผู้บังคับบัญชา</b> &nbsp; ' + (o.score !== '' && o.score != null ? 'คะแนน ' + fix(+o.score, 2) + ' ' : '') + (o.level ? 'ระดับ' + esc(o.level) + ' ' : '') + (o.raise !== '' && o.raise != null ? '· เลื่อนเงินเดือนร้อยละ ' + fix(+o.raise, 2) : '') + (o.date ? ' · มีผล ' + thDateFull(o.date).replace('วันที่ ', '') : '') + (o.note ? ' · ' + esc(o.note) : '') + '</p>' : '') +
      '<h4>หลักฐานอ้างอิง / หมายเหตุ</h4><div class="paf-lines" style="min-height:104px">' + esc(d.note) + '</div>' +
      '<div class="paf-sigs2" style="margin-top:6px">' + sig(s.name, 'ผู้รับการประเมิน') + sig('', 'ผู้บังคับบัญชา/ผู้ประเมิน') + '</div>' +
      '</section></div>';
  }

  /* =====================================================================
     2) แบบประเมินความพึงพอใจ
     ===================================================================== */
  function svLevel(v) { return v >= 4.51 ? 'มากที่สุด' : v >= 3.51 ? 'มาก' : v >= 2.51 ? 'ปานกลาง' : v >= 1.51 ? 'น้อย' : v > 0 ? 'น้อยที่สุด' : '–'; }
  function svDev() { try { var v = localStorage.getItem('sv-dev'); if (!v) { v = 'd' + Math.random().toString(36).slice(2) + Date.now().toString(36); localStorage.setItem('sv-dev', v); } return v; } catch (e) { return ''; } }
  function svBars(items, per, max) {
    max = max || 5;
    return '<div class="hbars" role="list">' + items.map(function (t, i) { var v = per[i] || 0; return '<div class="hb" role="listitem" title="' + esc((i + 1) + '. ' + t + ' · ' + fix(v, 2) + ' จาก ' + max) + '"><span class="hb-l">' + (i + 1) + '. ' + esc(t) + '</span><span class="hb-t"><i style="width:' + (v / max * 100) + '%"></i></span><b class="num">' + fix(v, 2) + '</b></div>'; }).join('') + '</div>';
  }
  function needSvPub() {
    if (S.svPub || S.svPubLoading) return; S.svPubLoading = true;
    api('surveyStats', {}, { loader: false }, function (err, res) { S.svPubLoading = false; if (err) { S.svPub = { results: [], err: err }; } else { S.svPub = res; if (res.survey !== undefined) D.survey = res.survey; } if (route() === 'survey') render(); });
  }
  function pSurvey() {
    var sv = D.survey; needSvPub();
    var res = S.svPub && S.svPub.results ? S.svPub.results : [];
    var form = '';
    if (sv) {
      var done = null; try { done = localStorage.getItem('sv-done-' + sv.id); } catch (e) { }
      if (S.svDone && S.svDone.id === sv.id) form = '<div class="card raised sv-thanks"><span class="pill good">' + ic('check', 13) + ' ส่งแบบประเมินแล้ว</span><h2>ขอบคุณสำหรับความคิดเห็น</h2><p class="muted">คะแนนเฉลี่ยที่ท่านให้ <b class="num">' + fix(S.svDone.avg, 2) + '</b> จาก 5' + (S.svDone.updated ? ' · แทนคำตอบเดิมของเครื่องนี้แล้ว' : '') + '</p><div class="row"><a class="btn primary" href="#home">กลับหน้าหลัก</a><button class="btn" data-act="sv-again">ตอบใหม่</button></div></div>';
      else {
        var role = S.svRole && sv.roles.indexOf(S.svRole) > -1 ? S.svRole : sv.roles[0];
        var seg = '<div class="seg" role="radiogroup" aria-label="ผู้ประเมิน">' + sv.roles.map(function (k) { return '<button type="button" role="radio" aria-checked="' + (role === k) + '" data-act="sv-role" data-k="' + k + '" class="' + (role === k ? 'on' : '') + '">' + SV_ROLE[k] + '</button>'; }).join('') + '</div>';
        var items = sv.items.map(function (t, i) {
          var cells = ''; for (var v = 5; v >= 1; v--) cells += '<label><input type="radio" name="q' + i + '" value="' + v + '" aria-label="ข้อ ' + (i + 1) + ' ระดับ ' + v + '"></label>';
          return '<div class="lik" id="svq-' + i + '"><span>' + (i + 1) + '. ' + esc(t) + '</span>' + cells + '</div>';
        }).join('');
        form = '<form class="card" id="survey-form" style="display:flex;flex-direction:column;gap:16px" novalidate>' + (done ? '<div class="note small">' + ic('check', 14) + ' เครื่องนี้เคยส่งแบบประเมินรอบนี้แล้ว ส่งอีกครั้งจะแทนคำตอบเดิม</div>' : '') +
          '<div class="row" style="justify-content:space-between;align-items:flex-end"><div class="field"><label>ผู้ประเมิน</label>' + seg + '</div>' +
          (role !== 'teacher' ? '<div class="field" style="min-width:160px"><label for="sv-class">ระดับชั้น' + (role === 'parent' ? 'ของบุตรหลาน' : '') + '</label><select id="sv-class" class="inp"><option value="">ไม่ระบุ</option>' + SV_CLS.map(function (c) { return '<option>' + c + '</option>'; }).join('') + '</select></div>' : '') + '</div>' +
          '<div class="lik-wrap"><div class="lik h" aria-hidden="true"><span>รายการประเมิน</span><span>5<br>มากที่สุด</span><span>4<br>มาก</span><span>3<br>ปานกลาง</span><span>2<br>น้อย</span><span>1<br>น้อยที่สุด</span></div>' + items + '</div>' +
          '<div class="field"><label for="sv-comment">ข้อเสนอแนะเพิ่มเติม (ไม่บังคับ)</label><textarea id="sv-comment" class="inp" maxlength="500" placeholder="สิ่งที่อยากให้ครูทำต่อ หรือปรับปรุง"></textarea></div>' +
          '<div class="hp-field" aria-hidden="true"><label for="sv-web">เว็บไซต์</label><input id="sv-web" tabindex="-1" autocomplete="off"></div>' +
          '<div id="sv-err"></div><div class="row" style="justify-content:space-between"><span class="small muted">ไม่ต้องระบุชื่อ ระบบเก็บเฉพาะประเภทผู้ประเมินและระดับชั้น</span><button class="btn primary" type="submit" id="sv-btn">' + ic('check', 16) + ' ส่งแบบประเมิน</button></div></form>';
      }
      form = '<div><span class="eyebrow">' + esc(sv.label) + (sv.closeAt ? ' · ปิดรับ ' + fd(sv.closeAt) : '') + '</span><h1>แบบประเมินความพึงพอใจต่อการจัดการเรียนรู้</h1><p class="muted">ของ ' + esc(st().name) + ' · ' + esc(st().subject || '') + '</p>' + (sv.note ? '<p class="small">' + esc(sv.note) + '</p>' : '') + '</div>' + form;
    } else form = '<div class="card empty">' + ic('chat', 18) + ' ขณะนี้ยังไม่เปิดรับแบบประเมิน</div>';
    var results = res.length ? '<section style="display:flex;flex-direction:column;gap:14px;margin-top:22px"><div><span class="eyebrow">ผลที่เผยแพร่</span><h2>ผลการประเมินความพึงพอใจ</h2></div>' + res.map(function (r) {
      return '<div class="card"><div class="row" style="justify-content:space-between;align-items:baseline"><h3>' + esc(r.label) + '</h3><span class="small muted">ผู้ตอบ ' + r.n + ' คน' + (r.open ? ' · กำลังเปิดรับ' : '') + '</span></div><div class="sv-kpis"><div><b class="num">' + fix(r.all, 2) + '</b><span>ค่าเฉลี่ยรวม (ระดับ' + svLevel(r.all) + ')</span></div>' + Object.keys(SV_ROLE).filter(function (k) { return r.byRole[k]; }).map(function (k) { return '<div><b class="num">' + r.byRole[k] + '</b><span>' + SV_ROLE[k] + '</span></div>'; }).join('') + '</div>' + (r.n ? svBars(r.items, r.per) : '<p class="small muted">ยังไม่มีผู้ตอบ</p>') + '</div>';
    }).join('') + '</section>' : '';
    return pub('survey', '<div class="sv-wrap">' + form + results + '</div>');
  }
  function svSubmit() {
    var sv = D.survey, er = $('sv-err'), btn = $('sv-btn'); if (!sv) return;
    var role = S.svRole && sv.roles.indexOf(S.svRole) > -1 ? S.svRole : sv.roles[0], ans = [], miss = [];
    sv.items.forEach(function (t, i) { var c = document.querySelector('input[name="q' + i + '"]:checked'); if (c) ans.push(+c.value); else { ans.push(0); miss.push(i + 1); } });
    Array.prototype.forEach.call(document.querySelectorAll('.lik.miss'), function (x) { x.classList.remove('miss'); });
    if (miss.length) {
      miss.forEach(function (m) { var el = $('svq-' + (m - 1)); if (el) el.classList.add('miss'); });
      er.innerHTML = '<div class="err">ยังไม่ได้ตอบข้อ ' + miss.join(', ') + '</div>'; var f = $('svq-' + (miss[0] - 1)); if (f) f.scrollIntoView({ behavior: motionOff() ? 'auto' : 'smooth', block: 'center' }); return;
    }
    btn.disabled = true;
    api('surveySubmit', { round: sv.id, role: role, cls: ($('sv-class') || {}).value || '', ans: ans, comment: $('sv-comment').value, hp: $('sv-web').value, dev: svDev() }, { loader: 'กำลังส่งแบบประเมิน' }, function (err, res) {
      btn.disabled = false;
      if (err) { er.innerHTML = '<div class="err">' + esc(err) + '</div>'; return; }
      try { localStorage.setItem('sv-done-' + sv.id, '1'); } catch (e) { }
      S.svDone = { id: sv.id, avg: res.avg || 0, updated: res.updated }; S.svPub = null; render(); window.scrollTo(0, 0);
    });
  }

  /* ---------- หลังบ้าน: แบบประเมินความพึงพอใจ ---------- */
  function needSv(id) {
    if (S.svLoading) return; S.svLoading = true;
    api('surveyAdmin', { id: id || S.svSel || '' }, { loader: false }, function (err, res) { S.svLoading = false; if (err) { S.svErr = err; toast(err); render(); return; } svSet(res); render(); });
  }
  function svSet(res) { S.sv = res; S.svSel = res.sel; if (D.admin && D.admin.evalSum) D.admin.evalSum.survey = res.rounds.slice(0, 3); }
  function svCall(action, data, msg) {
    api(action, data, { loader: 'กำลังบันทึก' }, function (err, res) {
      if (err) { var fe = $('f-err'); if (fe) fe.innerHTML = '<div class="err">' + esc(err) + '</div>'; else toast(err); return; }
      svSet(res); closeModal(); S.svPub = null; render(); if (msg) toast(msg);
      if (action === 'saveSurveyRound') api('getPublic', {}, { loader: false }, function (e2, p) { if (!e2) D.survey = p.survey || null; });
    });
  }
  function svRoundOf(id) { return S.sv ? find(S.sv.rounds, 'id', id) : null; }
  function svStatus(r) { return r.isOpen ? '<span class="pill good">เปิดรับ</span>' : (r.open ? '<span class="pill warn">เลยวันปิดรับ</span>' : '<span class="pill off">ปิดรับ</span>'); }
  function svForm(r) {
    var def = { id: '', fy: S.fy, label: semNow(new Date()).replace('ปิดภาคเรียน', ''), items: SV_DEF, roles: ['student', 'parent', 'teacher'], open: true, closeAt: '', showPublic: false, note: '' };
    r = r || def; S.svEdit = r.id;
    var ys = D.years.slice().sort(function (a, b) { return b.fy - a.fy; });
    openModal(r.id ? 'แก้ไขรอบแบบประเมิน' : 'สร้างรอบแบบประเมินความพึงพอใจ',
      '<div class="grid2"><div class="field"><label for="sf-label">ชื่อรอบ</label><input id="sf-label" class="inp" maxlength="120" value="' + esc(r.label) + '" placeholder="ภาคเรียนที่ 2/2569"></div><div class="field"><label for="sf-fy">ปีงบประมาณ</label><select id="sf-fy" class="inp">' + ys.map(function (y) { return '<option value="' + y.fy + '"' + (y.fy === r.fy ? ' selected' : '') + '>' + y.fy + '</option>'; }).join('') + '</select></div></div>' +
      '<div class="field"><label>ผู้ประเมิน</label><div class="row" style="gap:14px">' + Object.keys(SV_ROLE).map(function (k) { return '<label class="row small" style="gap:6px"><input type="checkbox" data-sf-role="' + k + '"' + (r.roles.indexOf(k) > -1 ? ' checked' : '') + ' style="width:18px;height:18px;accent-color:var(--accent)"> ' + SV_ROLE[k] + '</label>'; }).join('') + '</div></div>' +
      '<div class="field"><label for="sf-items">ข้อคำถาม (บรรทัดละ 1 ข้อ · 3–20 ข้อ · มาตรวัด 5 ระดับ)</label><textarea id="sf-items" class="inp" rows="8">' + esc(r.items.join('\n')) + '</textarea>' + (r.id && r.n ? '<span class="hint">มีผู้ตอบแล้ว ' + r.n + ' คน แก้ถ้อยคำได้ แต่เปลี่ยนจำนวนข้อไม่ได้</span>' : '') + '</div>' +
      '<div class="field"><label for="sf-note">คำชี้แจง (ไม่บังคับ)</label><input id="sf-note" class="inp" maxlength="300" value="' + esc(r.note) + '" placeholder="เช่น สำหรับนักเรียนที่เรียนคณิตศาสตร์กับครู"></div>' +
      '<div class="grid2"><div class="field"><label for="sf-close">ปิดรับอัตโนมัติหลังวันที่ (ไม่บังคับ)</label><input id="sf-close" type="date" class="inp" value="' + esc(r.closeAt) + '"></div><div style="display:flex;flex-direction:column;gap:8px;justify-content:flex-end">' + chk('sf-open', r.open, 'เปิดรับคำตอบ (รอบอื่นจะปิดเอง)') + chk('sf-pub', r.showPublic, 'แสดงผลสรุปในหน้าสาธารณะ') + '</div></div><div id="f-err"></div>',
      '<button class="btn" data-act="close-modal">ยกเลิก</button><button class="btn primary" data-act="sf-save">' + ic('check', 16) + ' บันทึก</button>', true);
  }
  function svCsv() {
    var r = svRoundOf(S.svSel); if (!r || !S.sv) return;
    var q = function (v) { v = String(v == null ? '' : v); return /[",\n]/.test(v) ? '"' + v.replace(/"/g, '""') + '"' : v; };
    var head = ['เวลา', 'ผู้ประเมิน', 'ระดับชั้น'].concat(r.items.map(function (t, i) { return 'ข้อ ' + (i + 1); })).concat(['ข้อเสนอแนะ', 'ซ่อน']);
    var lines = [head.map(q).join(',')].concat(S.sv.resp.map(function (x) { return [x.at, SV_ROLE[x.role] || x.role, x.cls].concat(x.ans).concat([x.comment, x.hidden ? 'ใช่' : '']).map(q).join(','); }));
    var blob = new Blob(['﻿' + lines.join('\r\n')], { type: 'text/csv;charset=utf-8' }), a = document.createElement('a');
    a.href = URL.createObjectURL(blob); a.download = 'แบบประเมิน_' + r.label.replace(/[\\/:*?"<>| ]+/g, '_') + '.csv'; document.body.appendChild(a); a.click();
    setTimeout(function () { URL.revokeObjectURL(a.href); document.body.removeChild(a); }, 500);
    toast('ดาวน์โหลดไฟล์ CSV แล้ว เปิดด้วย Excel หรือ Google Sheets ได้');
  }
  function aSurvey() {
    if (!S.sv) { needSv(); return adminShell('admin-survey', 'แบบประเมินความพึงพอใจ', 'กำลังโหลดข้อมูล', '', '<div class="card" aria-busy="true" style="display:flex;flex-direction:column;gap:12px"><div class="sk" style="height:26px;width:40%"></div><div class="sk" style="height:140px"></div>' + (S.svErr ? '<div class="err">' + esc(S.svErr) + ' <button class="btn sm" data-act="sv-reload">ลองใหม่</button></div>' : '') + '</div>'); }
    var rs = S.sv.rounds, r = svRoundOf(S.svSel), stt = S.sv.stats;
    var list = rs.length ? '<div class="sv-rounds">' + rs.map(function (x) { return '<button class="sv-round' + (x.id === S.svSel ? ' on' : '') + '" data-act="sv-sel" data-id="' + x.id + '"><b>' + esc(x.label) + '</b><span class="small muted">ปีงบ ' + x.fy + ' · ผู้ตอบ ' + x.n + ' คน</span>' + svStatus(x) + '</button>'; }).join('') + '</div>' : '';
    var body = '';
    if (!r) body = '<div class="card empty" style="margin-top:14px">ยังไม่มีรอบแบบประเมิน กด “สร้างรอบใหม่” แล้วนำ QR ไปให้นักเรียนสแกน</div>';
    else {
      var hidden = S.sv.resp.filter(function (x) { return x.hidden; }).length;
      var kpi = '<div class="grid4"><div class="kpi"><span class="l">ผู้ตอบ</span><span class="v">' + stt.n + '</span><span class="small muted">' + (hidden ? 'ซ่อนไว้ ' + hidden + ' คำตอบ' : 'ไม่รวมคำตอบที่ซ่อน') + '</span></div><div class="kpi"><span class="l">ค่าเฉลี่ยรวม (เต็ม 5)</span><span class="v">' + fix(stt.all, 2) + '</span><span class="small muted">ระดับ' + svLevel(stt.all) + '</span></div>' +
        Object.keys(SV_ROLE).filter(function (k) { return r.roles.indexOf(k) > -1; }).slice(0, 2).map(function (k) { return '<div class="kpi"><span class="l">' + SV_ROLE[k] + '</span><span class="v">' + stt.byRole[k] + '</span><span class="small muted">' + (stt.byRole[k] ? 'เฉลี่ย ' + fix(stt.roleAvg[k], 2) : 'ยังไม่มี') + '</span></div>'; }).join('') + '</div>';
      var dist = stt.dist.reduce(function (a, b) { return a + b; }, 0);
      var distBars = '<div class="hbars">' + [5, 4, 3, 2, 1].map(function (v) { var c = stt.dist[v - 1], p = dist ? c / dist * 100 : 0; return '<div class="hb" title="ระดับ ' + v + ': ' + c + ' ครั้ง (' + fix(p, 1) + '%)"><span class="hb-l">ระดับ ' + v + ' · ' + ['', 'น้อยที่สุด', 'น้อย', 'ปานกลาง', 'มาก', 'มากที่สุด'][v] + '</span><span class="hb-t"><i style="width:' + p + '%"></i></span><b class="num">' + fix(p, 0) + '%</b></div>'; }).join('') + '</div>';
      var cls = Object.keys(stt.cls).sort().map(function (k) { return '<span class="chip">' + esc(k) + ' · ' + stt.cls[k] + '</span>'; }).join('');
      var shownResp = S.sv.resp.filter(function (x) { return S.svAll || x.comment; });
      var rows = pageOf(shownResp, 'a-svr', perA()).map(function (x) {
        return '<tr class="' + (x.hidden ? 'dim' : '') + '"><td class="num small" style="white-space:nowrap">' + fdt(x.at) + '</td><td class="small">' + (SV_ROLE[x.role] || '') + (x.cls ? ' ' + esc(x.cls) : '') + '</td><td class="num small">' + fix(x.ans.reduce(function (a, b) { return a + b; }, 0) / (x.ans.length || 1), 2) + '</td><td>' + (x.comment ? esc(x.comment) : '<span class="muted">–</span>') + '</td><td><button class="btn sm" data-act="sv-hide" data-id="' + x.id + '" data-k="' + (x.hidden ? '0' : '1') + '">' + (x.hidden ? ic('eye', 14) + ' นับรวม' : ic('x', 14) + ' ซ่อน') + '</button></td></tr>';
      }).join('');
      body = '<div class="card sv-head"><div class="row" style="justify-content:space-between;align-items:flex-start;gap:14px"><div style="flex:1;min-width:240px"><div class="row" style="gap:8px">' + svStatus(r) + (r.showPublic ? '<span class="chip">' + ic('eye', 13) + ' แสดงผลในหน้าสาธารณะ</span>' : '') + '</div><h2 style="margin:6px 0 2px">' + esc(r.label) + '</h2><p class="small muted">ปีงบ ' + r.fy + ' · ' + r.items.length + ' ข้อ · ' + r.roles.map(function (k) { return SV_ROLE[k]; }).join(' ') + (r.closeAt ? ' · ปิดรับหลัง ' + fd(r.closeAt) : '') + '</p>' +
        '<div class="row" style="gap:6px;margin-top:10px"><button class="btn sm ' + (r.open ? '' : 'primary') + '" data-act="sv-toggle">' + (r.open ? ic('lock', 14) + ' ปิดรับ' : ic('check', 14) + ' เปิดรับ') + '</button><button class="btn sm" data-act="sv-edit">' + ic('edit', 14) + ' แก้ไข</button><a class="btn sm" href="#survey-poster">' + ic('print', 14) + ' โปสเตอร์ QR</a><a class="btn sm" href="#survey-report">' + ic('file', 14) + ' รายงานสรุป</a><button class="btn sm" data-act="sv-csv">' + ic('download', 14) + ' CSV</button><button class="btn sm danger" data-act="sv-del">' + ic('trash', 14) + ' ลบรอบ</button></div></div>' +
        (r.isOpen ? '<div class="sv-qr">' + qrSvg(svUrl(), 132, 'QR แบบประเมิน') + '<span class="small muted">สแกนเพื่อตอบ</span><button class="btn sm" data-act="sv-copy">' + ic('copy', 14) + ' คัดลอกลิงก์</button></div>' : '') + '</div></div>' +
        kpi + '<div class="grid2" style="align-items:start;margin-top:14px"><div class="card"><h3>ค่าเฉลี่ยรายข้อ</h3><p class="small muted">เต็ม 5 คะแนน</p>' + (stt.n ? svBars(r.items, stt.per) : '<p class="small muted" style="margin-top:8px">ยังไม่มีผู้ตอบ</p>') + '</div>' +
        '<div class="card"><h3>สัดส่วนระดับที่เลือก</h3><p class="small muted">จากทุกข้อรวมกัน ' + dist + ' คำตอบ</p>' + (dist ? distBars : '') + (cls ? '<h4 style="margin-top:14px">ระดับชั้น</h4><div class="row" style="gap:6px;margin-top:6px">' + cls + '</div>' : '') + '</div></div>' +
        '<div class="card" style="margin-top:14px"><div class="sec-h"><h3>' + (S.svAll ? 'คำตอบทั้งหมด' : 'ข้อเสนอแนะ') + '</h3>' + (opsSum().ai && stt.n ? '<button class="btn sm" data-act="ai-survey">' + ic('spark', 14) + ' สรุปด้วย AI</button>' : '') + '<label class="row small" style="gap:6px"><input type="checkbox" id="sv-all"' + (S.svAll ? ' checked' : '') + ' style="width:18px;height:18px;accent-color:var(--accent)"> แสดงคำตอบที่ไม่มีข้อเสนอแนะด้วย</label></div><p class="small muted">ซ่อนคำตอบที่ไม่เหมาะสมหรือก่อกวนได้ คำตอบที่ซ่อนจะไม่ถูกนับในผลสรุป</p>' +
        '<div class="tbl-wrap" style="margin-top:8px"><table class="tbl"><thead><tr><th>เวลา</th><th>ผู้ประเมิน</th><th>เฉลี่ย</th><th>ข้อเสนอแนะ</th><th></th></tr></thead><tbody>' + (rows || '<tr><td colspan="5" class="muted">ยังไม่มี</td></tr>') + '</tbody></table></div>' + pagerNav('a-svr') + '</div>';
    }
    return adminShell('admin-survey', 'แบบประเมินความพึงพอใจ', 'นักเรียน ผู้ปกครอง และครูตอบผ่านลิงก์หรือ QR โดยไม่ต้องระบุชื่อ · ใช้เป็นหลักฐานประกอบ PA และการเลื่อนเงินเดือน',
      '<button class="btn" data-act="sv-reload">' + ic('refresh', 16) + ' โหลดใหม่</button><button class="btn primary" data-act="sv-new">' + ic('plus', 16) + ' สร้างรอบใหม่</button>', list + body);
  }
  function svPoster() {
    var bar = '<div class="rep-bar"><a class="btn" href="#admin-survey">' + ic('left', 16) + ' กลับ</a><b>โปสเตอร์ QR แบบประเมิน</b><span class="sp"></span><button class="btn primary" data-act="print">' + ic('print', 16) + ' พิมพ์</button></div>';
    var sv = D.survey, s = st();
    if (!sv) return bar + '<div class="rep-wrap"><div class="card empty" style="max-width:520px">ยังไม่มีรอบที่เปิดรับคำตอบ เปิดรับได้ที่หน้า “แบบประเมินความพึงพอใจ”</div></div>';
    return bar + '<div class="rep-wrap"><section class="a4 sv-poster">' + seal('big') + '<span class="eyebrow">' + esc(s.school) + '</span><h1>ช่วยประเมินการสอนของครูหน่อยนะ</h1><p class="sv-p-sub">แบบประเมินความพึงพอใจต่อการจัดการเรียนรู้ · ' + esc(sv.label) + '</p>' +
      '<div class="sv-p-qr">' + qrSvg(svUrl(), 320, 'QR แบบประเมิน') + '</div><ol class="sv-p-steps"><li>เปิดกล้องมือถือ สแกน QR</li><li>เลือกว่าเป็นนักเรียน ผู้ปกครอง หรือครู</li><li>ตอบ ' + sv.items.length + ' ข้อ ใช้เวลาประมาณ 2 นาที ไม่ต้องใส่ชื่อ</li></ol>' +
      '<p class="sv-p-url mono">' + esc(svUrl()) + '</p><p class="small muted">' + esc(s.name) + ' · ' + esc(s.subject || '') + (sv.closeAt ? ' · ปิดรับ ' + thDateFull(sv.closeAt).replace('วันที่ ', '') : '') + '</p></section></div>';
  }
  function svReport() {
    var bar = '<div class="rep-bar"><a class="btn" href="#admin-survey">' + ic('left', 16) + ' กลับ</a><b>รายงานสรุปแบบประเมินความพึงพอใจ</b><span class="sp"></span><button class="btn primary" data-act="print">' + ic('print', 16) + ' พิมพ์ / บันทึก PDF</button></div>';
    if (!S.admin) return bar + '<div class="rep-wrap"><div class="card empty">' + ic('lock', 18) + ' เปิดได้เฉพาะเจ้าของแฟ้ม</div></div>';
    if (!S.sv) { needSv(); return bar + '<div class="rep-wrap"><div class="sk" style="width:210mm;max-width:100%;height:300px"></div></div>'; }
    var r = svRoundOf(S.svSel), t = S.sv.stats, s = st();
    if (!r) return bar + '<div class="rep-wrap"><div class="card empty">ยังไม่มีรอบแบบประเมิน</div></div>';
    var cm = S.sv.resp.filter(function (x) { return !x.hidden && x.comment; });
    return bar + '<div class="rep-wrap"><section class="a4 paf"><div class="paf-title"><b>รายงานผลการประเมินความพึงพอใจต่อการจัดการเรียนรู้</b><b>' + esc(s.name) + ' ตำแหน่ง ' + esc(s.position || 'ครู') + ' ' + esc(s.school) + '</b><span>' + esc(r.label) + ' · ปีงบประมาณ ' + r.fy + '</span></div>' +
      '<p>ผู้ตอบแบบประเมินทั้งหมด <b>' + t.n + '</b> คน แบ่งเป็น ' + Object.keys(SV_ROLE).filter(function (k) { return r.roles.indexOf(k) > -1; }).map(function (k) { return SV_ROLE[k] + ' ' + t.byRole[k] + ' คน'; }).join(' · ') + '</p>' +
      '<div class="a4-scroll"><table class="tbl paf-t"><thead><tr><th style="width:36px">ข้อ</th><th>รายการประเมิน</th><th style="width:70px">ค่าเฉลี่ย</th><th style="width:86px">ระดับ</th></tr></thead><tbody>' + r.items.map(function (it, i) { return '<tr><td class="c">' + (i + 1) + '</td><td>' + esc(it) + '</td><td class="r num">' + fix(t.per[i], 2) + '</td><td class="c">' + svLevel(t.per[i]) + '</td></tr>'; }).join('') +
      '<tr class="paf-sumrow"><td colspan="2" class="c">ค่าเฉลี่ยรวม</td><td class="r num">' + fix(t.all, 2) + '</td><td class="c">' + svLevel(t.all) + '</td></tr></tbody></table></div>' +
      '<p class="small">เกณฑ์การแปลผล: 4.51–5.00 มากที่สุด · 3.51–4.50 มาก · 2.51–3.50 ปานกลาง · 1.51–2.50 น้อย · 1.00–1.50 น้อยที่สุด</p>' +
      '<h4>ข้อเสนอแนะ (' + cm.length + ')</h4>' + (cm.length ? '<ol class="sv-cm">' + cm.slice(0, 40).map(function (x) { return '<li>' + esc(x.comment) + ' <span class="small muted">(' + (SV_ROLE[x.role] || '') + (x.cls ? ' ' + esc(x.cls) : '') + ')</span></li>'; }).join('') + '</ol>' + (cm.length > 40 ? '<p class="small muted">และอีก ' + (cm.length - 40) + ' รายการ (ดูทั้งหมดในไฟล์ CSV)</p>' : '') : '<p class="small muted">ไม่มี</p>') +
      '<div class="paf-sig" style="margin-top:18px"><div class="paf-sl"><span>(ลงชื่อ)</span><span class="ln"></span><span>ผู้รายงาน</span></div><div>(' + esc(s.name) + ')</div><div>' + thDateFull('') + '</div></div></section></div>';
  }

  /** รายการที่ควรทำในแดชบอร์ด */
  function evalTodo() {
    var ev = D.admin && D.admin.evalSum; if (!ev) return '';
    var o = '', rn = roundNow(), has = ev.salary.some(function (x) { return x.fy === rn.fy && x.round === rn.r; });
    if (!has) o += '<a class="todo" href="#admin-salary" data-act="sal-go" data-fy="' + rn.fy + '" data-k="' + rn.r + '"><span class="dot warn"></span><span style="flex:1">ประเมินตนเองเพื่อเลื่อนเงินเดือน ปีงบ ' + rn.fy + ' รอบ ' + rn.r + '</span>' + ic('chev', 14) + '</a>';
    var op = ev.survey.filter(function (x) { return x.isOpen; })[0];
    if (op) o += '<a class="todo" href="#admin-survey"><span class="dot good"></span><span style="flex:1">แบบประเมินความพึงพอใจ “' + esc(op.label) + '” เปิดรับอยู่ · ผู้ตอบ ' + op.n + ' คน</span>' + ic('chev', 14) + '</a>';
    return o;
  }

  /* ---------- เหตุการณ์ ---------- */
  document.addEventListener('click', function (e) {
    var el = e.target.closest ? e.target.closest('[data-act]') : null;
    if (!el) return;
    var act = el.getAttribute('data-act'), k = el.getAttribute('data-k'), id = el.getAttribute('data-id'), i = +el.getAttribute('data-i'), d = S.salDraft, r = svRoundOf(S.svSel);
    switch (act) {
      case 'sal-round': if (d && d.dirty) { confirmBox('มีการแก้ไขที่ยังไม่บันทึก เปลี่ยนรอบแล้วการแก้ไขจะหายไป?', 'เปลี่ยนรอบ', function () { S.salDraft = null; S.salRound = +k; render(); }); break; } S.salDraft = null; S.salRound = +k; render(); break;
      case 'sal-go': S.fy = +el.getAttribute('data-fy'); S.salRound = +k; S.salDraft = null; location.hash = 'admin-salary'; break;
      case 'sal-reload': S.salErr = ''; needSal(true); break;
      case 'sal-save': salSave(); break;
      case 'sal-discard': S.salDraft = null; render(); toast('ยกเลิกการแก้ไขแล้ว'); break;
      case 'sal-status': if (d) { d.status = k; markDocDirty(d, 'sal'); render(); } break;
      case 'sal-newitems': if (d) { d.items = S.sal[d.key].items; d.useNew = true; markDocDirty(d, 'sal'); render(); toast('ใช้หัวข้อชุดใหม่แล้ว กดบันทึกเพื่อยืนยัน'); } break;
      case 'sal-pa':
        var res = S.sal[salKey()], ref = res && res.pa.n ? res.pa : (res && res.paPrev.n ? res.paPrev : null), first = d && d.items.filter(function (x) { return x.g === 'a'; })[0];
        if (!ref || !first) { toast('ยังไม่มีผล PA ที่กรรมการส่งแล้ว ของปีงบ ' + S.fy + ' หรือปีก่อนหน้า'); break; }
        d.scores[first.k] = Math.round(ref.pct / 100 * first.max * 2) / 2; markDocDirty(d, 'sal'); render();
        toast('เติมจากผล PA ปีงบ ' + ref.fy + ' (เฉลี่ยร้อยละ ' + fix(ref.pct, 2) + ' จากกรรมการ ' + ref.n + ' คน) = ' + d.scores[first.k] + '/' + first.max);
        break;
      case 'sal-items': salItemsForm(); break;
      case 'sal-it-add': S.salItemsEdit.push({ k: '', g: 'b', label: '', max: 10 }); $('sal-items-box').innerHTML = salItemsRows(); break;
      case 'sal-it-del': S.salItemsEdit.splice(i, 1); $('sal-items-box').innerHTML = salItemsRows(); break;
      case 'sal-it-reset': S.salItemsEdit = clone(SAL_DEF); $('sal-items-box').innerHTML = salItemsRows(); break;
      case 'sal-it-save':
        api('saveSettings', { values: { salItems: S.salItemsEdit } }, { loader: 'กำลังบันทึก' }, function (err, res2) {
          if (err) { $('f-err').innerHTML = '<div class="err">' + esc(err) + '</div>'; return; }
          D.settings = res2.settings; closeModal(); S.sal = {}; S.salDraft = null; render(); toast('บันทึกหัวข้อแล้ว');
        });
        break;
      case 'sv-role': S.svRole = k; var keep = {}; Array.prototype.forEach.call(document.querySelectorAll('#survey-form input[type=radio]:checked'), function (x) { keep[x.name] = x.value; }); var cmt = ($('sv-comment') || {}).value || '';
        render(); for (var nm in keep) { var x2 = document.querySelector('input[name="' + nm + '"][value="' + keep[nm] + '"]'); if (x2) x2.checked = true; } if ($('sv-comment')) $('sv-comment').value = cmt; break;
      case 'sv-again': S.svDone = null; render(); break;
      case 'sv-reload': S.svErr = ''; needSv(); break;
      case 'sv-sel': S.pages['a-svr'] = 1; S.svSel = id; needSv(id); break;
      case 'sv-new': svForm(); break;
      case 'sv-edit': if (r) svForm(r); break;
      case 'sf-save':
        var roles = []; Array.prototype.forEach.call(document.querySelectorAll('[data-sf-role]'), function (x) { if (x.checked) roles.push(x.getAttribute('data-sf-role')); });
        svCall('saveSurveyRound', { item: { id: S.svEdit || '', fy: +$('sf-fy').value, label: $('sf-label').value, roles: roles, items: $('sf-items').value.split('\n').map(function (t) { return t.trim(); }).filter(String), note: $('sf-note').value, closeAt: $('sf-close').value, open: $('sf-open').checked, showPublic: $('sf-pub').checked } }, S.svEdit ? 'บันทึกแล้ว' : 'สร้างรอบแบบประเมินแล้ว');
        break;
      case 'sv-toggle': if (r) svCall('saveSurveyRound', { item: { id: r.id, fy: r.fy, label: r.label, roles: r.roles, items: r.items, note: r.note, closeAt: r.open ? r.closeAt : (r.closeAt && r.closeAt < new Date().toISOString().slice(0, 10) ? '' : r.closeAt), open: !r.open, showPublic: r.showPublic } }, r.open ? 'ปิดรับคำตอบแล้ว' : 'เปิดรับคำตอบแล้ว'); break;
      case 'sv-del': if (r) confirmBox('ลบรอบ “' + esc(r.label) + '” และคำตอบทั้งหมด ' + r.n + ' รายการ? ลบแล้วกู้คืนไม่ได้ ควรดาวน์โหลด CSV เก็บไว้ก่อน', 'ลบรอบ', function () { svCall('deleteSurveyRound', { id: r.id }, 'ลบแล้ว'); }, true); break;
      case 'sv-hide': svCall('hideSurveyResp', { id: id, hidden: k === '1' }, k === '1' ? 'ซ่อนคำตอบแล้ว ไม่นับในผลสรุป' : 'นับรวมแล้ว'); break;
      case 'sv-csv': svCsv(); break;
      case 'sv-copy': copyText(svUrl(), 'คัดลอกลิงก์แบบประเมินแล้ว'); break;
    }
  });
  document.addEventListener('input', function (e) {
    var t = e.target, d = S.salDraft; if (!t.getAttribute || !d) return;
    var sk = t.getAttribute('data-sal'), so = t.getAttribute('data-salo');
    if (sk) { var it = find(d.items, 'k', sk), v = t.value === '' ? '' : Math.max(0, Math.min(it ? it.max : 100, +t.value || 0)); d.scores[sk] = v; salTouch(); }
    if (so && t.tagName !== 'SELECT') { d.official[so] = t.type === 'number' ? (t.value === '' ? '' : +t.value) : t.value; salTouch(); }
    if (t.getAttribute('data-salnote')) { d.note = t.value; markDocDirty(d, 'sal'); }
  });
  document.addEventListener('change', function (e) {
    var t = e.target; if (!t.getAttribute) return;
    if (t.getAttribute('data-sal') && S.salDraft) { var it = find(S.salDraft.items, 'k', t.getAttribute('data-sal')); if (it && +t.value > it.max) t.value = it.max; }
    if (t.tagName === 'SELECT' && t.getAttribute('data-salo') && S.salDraft) { S.salDraft.official[t.getAttribute('data-salo')] = t.value; salTouch(); }
    var si = t.getAttribute('data-salit'); if (si && S.salItemsEdit) { var p = si.split(':'), row = S.salItemsEdit[+p[0]]; row[p[1]] = p[1] === 'max' ? +t.value : t.value; if (p[1] === 'max') $('sal-items-box').innerHTML = salItemsRows(); }
    if (t.id === 'sv-all') { S.svAll = t.checked; S.pages['a-svr'] = 1; render(); }
    if (t.getAttribute('data-fy-sel') && S.salDraft && S.salDraft.dirty === false) S.salDraft = null;
  });
  document.addEventListener('submit', function (e) { if (e.target.id === 'survey-form') { e.preventDefault(); svSubmit(); } });
  window.addEventListener('beforeunload', function (e) { if (S.salDraft && S.salDraft.dirty) { e.preventDefault(); e.returnValue = ''; } });

  /* =====================================================================
     เฟส 6: สถิติและกราฟ · รายงาน PDF · โหมดนำเสนอ · ตรวจสอบเอกสารด้วย QR
     ===================================================================== */
  var PAGE_T = { home: 'หน้าหลัก', profile: 'ประวัติ', pa: 'แฟ้ม PA', agreement: 'ข้อตกลง PA', idplan: 'ID Plan', works: 'คลังผลงาน', gallery: 'ภาพกิจกรรม', videos: 'วิดีโอ', awards: 'รางวัล/อบรม', systems: 'ระบบที่จัดทำ', survey: 'แบบประเมิน', verify: 'ตรวจสอบเอกสาร', committee: 'หน้ากรรมการ', report: 'รายงาน PDF', present: 'โหมดนำเสนอ', calendar: 'ปฏิทิน' };
  var VF_TYPE = { award: 'รางวัล', cert: 'เกียรติบัตร', training: 'การอบรม' };
  S.stats = null; S.statRange = 30; S.statMode = 'all'; S.vfl = null; S.vfRes = {}; S.slide = 0; S.lastTracked = '';

  /* ---------- กราฟ SVG (ไม่ใช้ไลบรารี) ---------- */
  function dfmt(n) { return Math.abs(n - Math.round(n)) < 1e-9 ? nfmt(n) : fix(n, n < 10 ? 2 : 1); }
  function niceMax(m) { if (m <= 0) return 1; var e = Math.pow(10, Math.floor(Math.log(m) / Math.LN10)), f = m / e; return (f <= 1 ? 1 : f <= 2 ? 2 : f <= 2.5 ? 2.5 : f <= 5 ? 5 : 10) * e; }
  function intMax(m) { return Math.max(1, Math.ceil(niceMax(Math.max(m, 1) / 4))) * 4; }
  function bp(x, y, w, h, r) { if (h <= 0.5) return ''; r = Math.min(r, w / 2, h); return 'M' + x + ',' + (y + h) + 'V' + (y + r) + 'Q' + x + ',' + y + ' ' + (x + r) + ',' + y + 'H' + (x + w - r) + 'Q' + (x + w) + ',' + y + ' ' + (x + w) + ',' + (y + r) + 'V' + (y + h) + 'Z'; }
  function hbp(x, y, w, h, r) { if (w <= 0.5) return ''; r = Math.min(r, h / 2, w); return 'M' + x + ',' + y + 'H' + (x + w - r) + 'Q' + (x + w) + ',' + y + ' ' + (x + w) + ',' + (y + r) + 'V' + (y + h - r) + 'Q' + (x + w) + ',' + (y + h) + ' ' + (x + w - r) + ',' + (y + h) + 'H' + x + 'Z'; }
  function legendHtml(series) { return '<div class="legend">' + series.map(function (s) { return '<span><i style="background:' + s.color + '"></i>' + esc(s.name) + '</span>'; }).join('') + '</div>'; }
  function tableView(head, rows) {
    return '<details class="viz-table"><summary>ดูข้อมูลเป็นตาราง</summary><div class="tbl-wrap"><table class="tbl"><thead><tr>' + head.map(function (h, i) { return '<th' + (i ? ' class="r"' : '') + '>' + esc(h) + '</th>'; }).join('') + '</tr></thead><tbody>' +
      rows.map(function (r) { return '<tr>' + r.map(function (c, i) { return '<td' + (i ? ' class="r num"' : '') + '>' + esc(c) + '</td>'; }).join('') + '</tr>'; }).join('') + '</tbody></table></div></details>';
  }
  function vChart(o) {
    var n = o.cats.length, m = o.series.length, all = [];
    o.series.forEach(function (sr) { all = all.concat(sr.vals); });
    var W = o.w || Math.max(380, n * (m * 13 + 22) + 60), H = o.h || 240, L = 44, R = 12, T = 16, B = 30, iw = W - L - R, ih = H - T - B;
    var raw = Math.max.apply(null, all.concat([o.ref || 0])), mx = o.max || (o.int ? intMax(raw) : niceMax(raw)), f = o.fmt || dfmt, out = '';
    for (var k = 0; k <= 4; k++) { var y = T + ih - k / 4 * ih; out += '<line class="gl" x1="' + L + '" x2="' + (W - R) + '" y1="' + y + '" y2="' + y + '"/><text x="' + (L - 7) + '" y="' + (y + 4) + '" text-anchor="end">' + f(mx * k / 4) + '</text>'; }
    var cw = iw / n, gw = Math.min(cw * 0.74, m * 24 + (m - 1) * 2), bw = (gw - (m - 1) * 2) / m;
    o.cats.forEach(function (c, ci) {
      var x0 = L + ci * cw + (cw - gw) / 2, tip = (o.catTip ? o.catTip[ci] : c) + o.series.map(function (sr) { return '\n' + (m > 1 ? sr.name + ': ' : '') + f(sr.vals[ci] || 0) + (o.unit ? ' ' + o.unit : ''); }).join('');
      out += '<g class="col" data-tip="' + esc(tip) + '"><rect class="hit" x="' + (L + ci * cw) + '" y="' + T + '" width="' + cw + '" height="' + ih + '" rx="4"/>';
      o.series.forEach(function (sr, si) { var v = sr.vals[ci] || 0, h = v / mx * ih; out += '<path class="bar" d="' + bp(x0 + si * (bw + 2), T + ih - h, bw, h, 4) + '" fill="' + sr.color + '"/>'; });
      out += '<text x="' + (L + ci * cw + cw / 2) + '" y="' + (H - 10) + '" text-anchor="middle">' + esc(c) + '</text></g>';
    });
    if (o.ref != null) { var ry = T + ih - o.ref / mx * ih; out += '<line class="ref" x1="' + L + '" x2="' + (W - R) + '" y1="' + ry + '" y2="' + ry + '"/>'; }
    return '<svg viewBox="0 0 ' + W + ' ' + H + '" role="img" aria-label="' + esc(o.aria) + '"><line class="ax" x1="' + L + '" x2="' + (W - R) + '" y1="' + (T + ih) + '" y2="' + (T + ih) + '"/>' + out + '</svg>';
  }
  function hChart(o) {
    if (!o.items.length) return '<p class="small muted">ยังไม่มีข้อมูล</p>';
    var n = o.items.length, rowH = 30, LW = o.lw || 150, W = o.w || 470, R = 56, T = 6, H = n * rowH + T * 2, iw = W - LW - R;
    var mx = o.max || niceMax(Math.max.apply(null, o.items.map(function (x) { return x.v; }))), f = o.fmt || dfmt, out = '', cut = Math.round(LW / 7.2);
    o.items.forEach(function (it, i) {
      var y = T + i * rowH, w = it.v / mx * iw;
      out += '<g class="row" data-tip="' + esc(it.tip || (it.l + '\n' + f(it.v) + (o.unit ? ' ' + o.unit : ''))) + '"><rect class="hit" x="0" y="' + y + '" width="' + W + '" height="' + rowH + '" rx="4"/>' +
        '<text x="' + (LW - 10) + '" y="' + (y + rowH / 2 + 4) + '" text-anchor="end" style="fill:var(--ink)">' + esc(it.l.length > cut ? it.l.slice(0, cut - 1) + '…' : it.l) + '</text>' +
        '<rect x="' + LW + '" y="' + (y + 7) + '" width="' + iw + '" height="' + (rowH - 14) + '" rx="4" style="fill:var(--surface-2)"/>' +
        '<path class="bar" d="' + hbp(LW, y + 7, w, rowH - 14, 4) + '" fill="' + (it.color || o.color) + '"/>' +
        '<text class="v" x="' + (LW + w + 6) + '" y="' + (y + rowH / 2 + 4) + '">' + f(it.v) + '</text></g>';
    });
    return '<svg viewBox="0 0 ' + W + ' ' + H + '" role="img" aria-label="' + esc(o.aria) + '">' + out + '</svg>';
  }
  function arcPath(cx, cy, R, r, a0, a1) {
    if (a1 - a0 >= Math.PI * 2 - 1e-6) a1 = a0 + Math.PI * 2 - 1e-4;
    var la = a1 - a0 > Math.PI ? 1 : 0;
    function pt(rad, a) { return (cx + rad * Math.sin(a)).toFixed(2) + ',' + (cy - rad * Math.cos(a)).toFixed(2); }
    return 'M' + pt(R, a0) + 'A' + R + ',' + R + ' 0 ' + la + ' 1 ' + pt(R, a1) + 'L' + pt(r, a1) + 'A' + r + ',' + r + ' 0 ' + la + ' 0 ' + pt(r, a0) + 'Z';
  }
  function donut(o) {
    var tot = o.parts.reduce(function (t, x) { return t + x.v; }, 0), a = 0, segs = '', leg = '', gap = 0.035;
    if (!tot) return '<p class="small muted">ยังไม่มีข้อมูล</p>';
    o.parts.forEach(function (pt) {
      if (!pt.v) return;
      var a1 = a + pt.v / tot * Math.PI * 2, pc = pt.v / tot * 100, full = pt.v === tot;
      segs += '<path class="seg" d="' + arcPath(90, 90, 84, 54, a + (full ? 0 : gap / 2), a1 - (full ? 0 : gap / 2)) + '" fill="' + pt.c + '" data-tip="' + esc(pt.l + '\n' + nfmt(pt.v) + (o.unit ? ' ' + o.unit : '') + ' · ' + fix(pc, 1) + '%') + '"/>';
      a = a1;
    });
    o.parts.forEach(function (pt) { leg += '<div><i style="background:' + pt.c + '"></i><span>' + esc(pt.l) + '</span><b>' + nfmt(pt.v) + '</b><em>' + fix(pt.v / tot * 100, 1) + '%</em></div>'; });
    return '<div class="donut-wrap"><svg viewBox="0 0 180 180" role="img" aria-label="' + esc(o.aria) + '">' + segs + '<text x="90" y="88" text-anchor="middle" class="v" style="font-size:26px">' + esc(o.big) + '</text><text x="90" y="110" text-anchor="middle">' + esc(o.small) + '</text></svg><div class="donut-leg">' + leg + '</div></div>';
  }
  function meter(o) {
    var pct = Math.max(0, Math.min(1, o.v / o.max)), a0 = -Math.PI * 0.75, span = Math.PI * 1.5, a1 = a0 + span * pct, pa = a0 + span * (o.pass / o.max);
    var tick = function (rad) { return [(90 + rad * Math.sin(pa)).toFixed(1), (96 - rad * Math.cos(pa)).toFixed(1)]; }, t1 = tick(58), t2 = tick(86);
    return '<svg viewBox="0 0 180 160" role="img" aria-label="' + esc(o.aria) + '" style="max-width:240px;margin:0 auto">' +
      '<path d="' + arcPath(90, 96, 80, 62, a0, a0 + span) + '" style="fill:var(--surface-2)"/>' + (pct > 0 ? '<path d="' + arcPath(90, 96, 80, 62, a0, a1) + '" style="fill:var(--accent)" data-tip="' + esc(o.tip) + '"/>' : '') +
      '<line x1="' + t1[0] + '" y1="' + t1[1] + '" x2="' + t2[0] + '" y2="' + t2[1] + '" style="stroke:var(--bad);stroke-width:2.5"/>' +
      '<text x="90" y="98" text-anchor="middle" class="v" style="font-size:30px">' + fix(o.v, 2) + '</text><text x="90" y="118" text-anchor="middle">จาก ' + o.max + ' · เกณฑ์ ' + o.pass + '</text></svg>';
  }
  function lineChart(o) {
    var n = o.pts.length, W = o.w || 860, H = o.h || 240, L = 44, R = 46, T = 18, B = 30, iw = W - L - R, ih = H - T - B;
    var raw = Math.max.apply(null, o.pts.map(function (x) { return x.v; }).concat([o.ref || 0])), mx = o.max || (o.int ? intMax(raw) : niceMax(raw)), f = o.fmt || dfmt, out = '';
    for (var k = 0; k <= 4; k++) { var gy = T + ih - k / 4 * ih; out += '<line class="gl" x1="' + L + '" x2="' + (W - R) + '" y1="' + gy + '" y2="' + gy + '"/><text x="' + (L - 7) + '" y="' + (gy + 4) + '" text-anchor="end">' + f(mx * k / 4) + '</text>'; }
    function X(i) { return L + (n === 1 ? iw / 2 : i / (n - 1) * iw); }
    function Y(v) { return T + ih - v / mx * ih; }
    var d = o.pts.map(function (pt, i) { return (i ? 'L' : 'M') + X(i).toFixed(1) + ',' + Y(pt.v).toFixed(1); }).join('');
    var area = d + 'L' + X(n - 1).toFixed(1) + ',' + (T + ih) + 'L' + X(0).toFixed(1) + ',' + (T + ih) + 'Z';
    out += '<path d="' + area + '" style="fill:' + o.color + ';opacity:.12"/><path d="' + d + '" style="fill:none;stroke:' + o.color + ';stroke-width:2;stroke-linejoin:round"/>';
    if (o.ref != null) { var ry = Y(o.ref); out += '<line class="ref" x1="' + L + '" x2="' + (W - R) + '" y1="' + ry + '" y2="' + ry + '"/><text x="' + (W - R) + '" y="' + (ry - 6) + '" text-anchor="end" class="v">' + esc(o.refLabel || '') + '</text>'; }
    var step = Math.max(1, Math.ceil(n / (o.xTicks || 8)));
    o.pts.forEach(function (pt, i) { if ((i % step === 0 && n - 1 - i >= step / 2) || i === n - 1) out += '<text x="' + X(i) + '" y="' + (H - 10) + '" text-anchor="middle">' + esc(pt.l) + '</text>'; });
    var cw = iw / Math.max(1, n - 1);
    o.pts.forEach(function (pt, i) {
      out += '<g class="pt" data-tip="' + esc((pt.tip || pt.l) + '\n' + f(pt.v) + (o.unit ? ' ' + o.unit : '')) + '"><rect class="hit" x="' + (X(i) - cw / 2) + '" y="' + T + '" width="' + cw + '" height="' + ih + '"/><line class="guide" x1="' + X(i) + '" x2="' + X(i) + '" y1="' + T + '" y2="' + (T + ih) + '"/><circle class="dot" cx="' + X(i) + '" cy="' + Y(pt.v) + '" r="5" style="fill:' + o.color + ';stroke:var(--surface);stroke-width:2"/></g>';
    });
    var last = o.pts[n - 1];
    out += '<circle cx="' + X(n - 1) + '" cy="' + Y(last.v) + '" r="5" style="fill:' + o.color + ';stroke:var(--surface);stroke-width:2"/><text class="v" x="' + (X(n - 1) + 8) + '" y="' + (Y(last.v) + 4) + '">' + f(last.v) + '</text>';
    return '<svg viewBox="0 0 ' + W + ' ' + H + '" role="img" aria-label="' + esc(o.aria) + '"><line class="ax" x1="' + L + '" x2="' + (W - R) + '" y1="' + (T + ih) + '" y2="' + (T + ih) + '"/>' + out + '</svg>';
  }
  function tipEl() { var t = document.getElementById('viz-tip'); if (!t) { t = document.createElement('div'); t.id = 'viz-tip'; t.setAttribute('role', 'tooltip'); document.body.appendChild(t); } return t; }
  document.addEventListener('mouseover', function (e) {
    var el = e.target.closest ? e.target.closest('[data-tip]') : null, t = tipEl();
    if (!el) { t.style.display = 'none'; return; }
    t.textContent = el.getAttribute('data-tip'); t.style.display = 'block';
  });
  document.addEventListener('mousemove', function (e) {
    var t = document.getElementById('viz-tip'); if (!t || t.style.display !== 'block') return;
    var x = e.clientX + 14, y = e.clientY + 14, w = t.offsetWidth, h = t.offsetHeight;
    if (x + w > window.innerWidth - 8) x = e.clientX - w - 14;
    if (y + h > window.innerHeight - 8) y = e.clientY - h - 14;
    t.style.left = x + 'px'; t.style.top = y + 'px';
  });

  /* ---------- นับยอดเข้าชม (ไม่ระบุตัวตน · ไม่นับตอนแอดมินเข้า) ---------- */
  function beacon(action, data) {
    if (!configured()) return;
    try { fetch(GAS_URL, { method: 'POST', headers: { 'Content-Type': 'text/plain;charset=utf-8' }, body: JSON.stringify({ action: action, data: data }), keepalive: true }).catch(function () { }); } catch (e) { }
  }
  function trackPage(r) {
    if (S.admin || S.authPending || r === S.lastTracked) return;
    var p = r.indexOf('album-') === 0 ? 'gallery' : (r.indexOf('verify-') === 0 ? 'verify' : r);
    if (!PAGE_T[p]) return;
    S.lastTracked = r;
    var w = window.innerWidth, dv = w < 768 ? 'm' : (w < 1100 && 'ontouchstart' in window ? 't' : 'd'), u = 0;
    try { var t = new Date().toISOString().slice(0, 10); if (localStorage.getItem('tp-vday') !== t) { localStorage.setItem('tp-vday', t); u = 1; } } catch (e) { }
    beacon('hit', { p: p, d: dv, u: u });
  }

  /* ---------- สถิติและกราฟ (หลังบ้าน) ---------- */
  function needStats(force) {
    if ((S.stats && !force) || S.statsLoading) return; S.statsLoading = true;
    api('statsGet', { days: 400 }, { loader: false }, function (err, res) { S.statsLoading = false; if (err) { S.statsErr = err; toast(err); render(); return; } S.statsErr = ''; S.stats = res; if (route() === 'admin-stats') render(); });
  }
  function dayList(today, n) {
    var p = today.split('-'), base = Date.UTC(+p[0], +p[1] - 1, +p[2]), out = [];
    for (var i = n - 1; i >= 0; i--) out.push(new Date(base - i * 864e5).toISOString().slice(0, 10));
    return out;
  }
  function aStats() {
    var seg = function (act, cur0, opts) { return '<div class="seg" role="group">' + opts.map(function (o) { return '<button type="button" data-act="' + act + '" data-k="' + o[0] + '" class="' + (String(cur0) === String(o[0]) ? 'on' : '') + '">' + o[1] + '</button>'; }).join('') + '</div>'; };
    if (!S.stats) { needStats(); return adminShell('admin-stats', 'สถิติและกราฟ', 'กำลังโหลดข้อมูล', '', '<div class="card" aria-busy="true" style="display:flex;flex-direction:column;gap:12px"><div class="sk" style="height:26px;width:40%"></div><div class="sk" style="height:200px"></div>' + (S.statsErr ? '<div class="err">' + esc(S.statsErr) + ' <button class="btn sm" data-act="stat-reload">ลองใหม่</button></div>' : '') + '</div>'); }
    var rng = S.statRange, map = {}, SER = ['var(--s1)', 'var(--s2)', 'var(--s3)'];
    S.stats.rows.forEach(function (r) { map[r.date] = r.data; });
    var days = dayList(S.stats.today, rng * 2), cur = days.slice(rng), prev = days.slice(0, rng);
    function sum(list, k) { return list.reduce(function (t, d) { return t + ((map[d] || {})[k] || 0); }, 0); }
    function sumPrefix(list, pre) { var o = {}; list.forEach(function (d) { var x = map[d] || {}; Object.keys(x).forEach(function (k) { if (k.indexOf(pre) === 0) o[k.slice(pre.length)] = (o[k.slice(pre.length)] || 0) + x[k]; }); }); return o; }
    var tv = sum(cur, 'v'), pv = sum(prev, 'v'), tu = sum(cur, 'u'), dl = pv ? (tv - pv) / pv * 100 : null;
    var ms = comMembers(); if (!ms) needComList(S.fy);
    var rr = ms ? setRes(ms) : null, sg = scoring(), fr = fyRange(S.fy), c = C();
    var hrs = c.awards.filter(function (a) { return inFy(a.date, S.fy); }).reduce(function (t, a) { return t + (+a.hours || 0); }, 0), goal = +st().hoursGoal || 20;
    if (!S.sv) needSv();
    var svr = S.sv && S.sv.rounds.filter(function (x) { return x.fy === S.fy; })[0], svs = svr && S.sv.sel === svr.id ? S.sv.stats : null;
    var kpi = '<div class="grid4">' +
      '<div class="kpi"><span class="l">ยอดเข้าชม ' + rng + ' วัน</span><span class="v">' + nfmt(tv) + '</span><span class="small ' + (dl === null ? 'muted">ยังไม่มีข้อมูลช่วงก่อนหน้า' : (dl >= 0 ? 'delta up">▲ ' : 'delta down">▼ ') + fix(Math.abs(dl), 1) + '% จาก ' + rng + ' วันก่อนหน้า') + '</span></div>' +
      '<div class="kpi"><span class="l">ผู้เข้าชม (ไม่ซ้ำต่อวัน)</span><span class="v">' + nfmt(tu) + '</span><span class="small muted">เฉลี่ย ' + fix(tv / rng, 1) + ' ครั้งต่อวัน</span></div>' +
      '<div class="kpi' + (rr && !rr.pass ? ' warn' : '') + '"><span class="l">คะแนน PA ปีงบ ' + S.fy + '</span><span class="v">' + (rr ? fix(rr.avg, 2) : '–') + '</span><span class="small muted">กรรมการส่งผล ' + (rr ? rr.n : 0) + '/' + (ms ? ms.length : 0) + ' คน</span></div>' +
      '<div class="kpi' + (hrs < goal ? ' warn' : '') + '"><span class="l">ชั่วโมงอบรม ปีงบ ' + S.fy + '</span><span class="v">' + hrs + ' / ' + goal + '</span><span class="small muted">' + (svs ? 'ความพึงพอใจ ' + fix(svs.all, 2) + ' จาก ' + svs.n + ' คน' : 'ตัวชี้วัด 3.1') + '</span></div></div>';
    var pts = cur.map(function (d) { var p = d.split('-'), x = map[d] || {}; return { l: +p[2] + ' ' + TH_M[+p[1] - 1], v: x.v || 0, tip: fd(d) + ' · ผู้เข้าชม ' + (x.u || 0) + ' คน' }; });
    var pages = sumPrefix(cur, 'p:'), pageItems = Object.keys(pages).map(function (k) { return { l: PAGE_T[k] || k, v: pages[k] }; }).sort(function (a, b) { return b.v - a.v; }).slice(0, 10);
    var dev = sumPrefix(cur, 'd:'), wk = sumPrefix(cur, 'w:'), vk = sumPrefix(cur, 'v:');
    var topW = Object.keys(wk).map(function (id) { var w = find(c.works, 'id', id); return w ? { l: w.title, v: wk[id], tip: w.title + '\nเปิดดู ' + wk[id] + ' ครั้ง' } : null; }).filter(Boolean).sort(function (a, b) { return b.v - a.v; }).slice(0, 5);
    var topV = Object.keys(vk).map(function (id) { var v = find(c.videos, 'id', id); return v ? { l: v.title, v: vk[id], tip: v.title + '\nเปิดดู ' + vk[id] + ' ครั้ง' } : null; }).filter(Boolean).sort(function (a, b) { return b.v - a.v; }).slice(0, 5);
    var views = '<section class="sec"><div class="sec-h"><h2>ยอดการเข้าชม</h2>' + seg('stat-range', rng, [[7, '7 วัน'], [30, '30 วัน'], [90, '90 วัน']]) + '</div><div class="stat-grid">' +
      '<div class="card chart-card span2 viz"><h3>ยอดเข้าชมรายวัน</h3><p class="sub">ชี้ที่กราฟเพื่อดูยอดของแต่ละวัน · ไม่นับตอนเข้าระบบแอดมิน · ยอดของวันนี้อาจเข้ามาช้าไม่เกิน 10 นาที</p>' + lineChart({ pts: pts, color: 'var(--accent)', int: true, unit: 'ครั้ง', aria: 'ยอดเข้าชมรายวัน ' + rng + ' วัน รวม ' + nfmt(tv) + ' ครั้ง', xTicks: rng === 7 ? 7 : 8 }) + tableView(['วันที่', 'ยอดเข้าชม', 'ผู้เข้าชม'], cur.slice().reverse().map(function (d) { var x = map[d] || {}; return [fd(d), nfmt(x.v || 0), nfmt(x.u || 0)]; })) + '</div>' +
      '<div class="card chart-card viz"><h3>หน้าที่มีคนเข้าชม</h3>' + hChart({ items: pageItems, color: 'var(--accent)', unit: 'ครั้ง', aria: 'ยอดเข้าชมแยกตามหน้า', lw: 120 }) + '</div>' +
      '<div class="card chart-card viz"><h3>อุปกรณ์ที่ใช้เข้าชม</h3>' + donut({ parts: [{ l: 'มือถือ', v: dev.m || 0, c: SER[0] }, { l: 'คอมพิวเตอร์', v: dev.d || 0, c: SER[1] }, { l: 'แท็บเล็ต', v: dev.t || 0, c: SER[2] }], big: tv ? fix((dev.m || 0) / tv * 100, 0) + '%' : '–', small: 'ใช้มือถือ', unit: 'ครั้ง', aria: 'สัดส่วนอุปกรณ์ที่ใช้เข้าชม' }) + '</div>' +
      '<div class="card chart-card viz"><h3>ผลงานที่มีคนเปิดดูมากที่สุด</h3>' + hChart({ items: topW, color: 'var(--accent)', unit: 'ครั้ง', aria: 'ผลงานยอดนิยม 5 อันดับ', lw: 190 }) + '</div>' +
      '<div class="card chart-card viz"><h3>วิดีโอที่มีคนเปิดดูมากที่สุด</h3>' + hChart({ items: topV, color: 'var(--accent)', unit: 'ครั้ง', aria: 'วิดีโอยอดนิยม 5 อันดับ', lw: 190 }) + '</div></div></section>';
    // คะแนนจากกรรมการ
    var done = ms ? ms.filter(function (m) { return m.status === 'submitted' && m.data; }) : [], codes = IND_BASE.map(function (x) { return x.code; }), pa;
    if (!ms) pa = '<div class="card" aria-busy="true"><div class="sk" style="height:160px"></div></div>';
    else if (!done.length) pa = '<div class="card empty">ยังไม่มีกรรมการส่งผลในปีงบ ' + S.fy + ' <a href="#admin-committee">ไปหน้าคณะกรรมการ</a></div>';
    else {
      var mem = ms.map(function (m, i) { return { m: m, done: m.status === 'submitted' && !!m.data, color: SER[i % 3] }; });
      var avgInd = codes.map(function (cd) { var t = 0; done.forEach(function (m) { t += +m.data.p1[cd] || 0; }); return t / done.length; });
      var full = sg.p1Max + sg.p2Max, LW = 150, W = 520, iw = W - LW - 56;
      var stack = mem.map(function (x) {
        if (!x.done) return '<div class="small muted" style="padding:6px 0">' + esc(x.m.name) + ' · ยังไม่ส่งผล</div>';
        var cc = paCalc(x.m.data), w1 = cc.p1 / full * iw, w2 = cc.p2 / full * iw, gx = LW + sg.passPct / 100 * iw;
        return '<svg viewBox="0 0 ' + W + ' 34" role="img" aria-label="' + esc(x.m.name + ' รวม ' + fix(cc.total, 2)) + '"><text x="' + (LW - 10) + '" y="21" text-anchor="end" style="fill:var(--ink)">' + esc(x.m.name.length > 20 ? x.m.name.slice(0, 19) + '…' : x.m.name) + '</text><rect x="' + LW + '" y="8" width="' + iw + '" height="18" rx="4" style="fill:var(--surface-2)"/>' +
          '<path class="seg" d="' + hbp(LW, 8, Math.max(0, w1 - 1), 18, 0) + '" fill="var(--s1)" data-tip="' + esc(x.m.name + '\nส่วนที่ 1: ' + fix(cc.p1, 2) + ' / ' + sg.p1Max) + '"/><path class="seg" d="' + hbp(LW + w1 + 1, 8, Math.max(0, w2 - 1), 18, 4) + '" fill="var(--s2)" data-tip="' + esc(x.m.name + '\nส่วนที่ 2: ' + fix(cc.p2, 2) + ' / ' + sg.p2Max) + '"/>' +
          '<line x1="' + gx + '" x2="' + gx + '" y1="4" y2="30" style="stroke:var(--bad);stroke-width:1.5"/><text class="v" x="' + (LW + w1 + w2 + 6) + '" y="21">' + fix(cc.total, 2) + '</text></svg>';
      }).join('');
      var heat = '<table class="heat"><thead><tr><th></th>' + codes.map(function (cd) { return '<th>' + cd + '</th>'; }).join('') + '<th>รวม</th></tr></thead><tbody>' +
        mem.map(function (x) { return '<tr><th class="rowh"><span class="legend"><span><i style="background:' + x.color + '"></i>' + esc(x.m.name) + '</span></span></th>' + codes.map(function (cd) { var v = x.done ? +x.m.data.p1[cd] || 0 : 0; return '<td style="background:' + (v ? 'color-mix(in srgb,var(--accent) ' + (v * 25) + '%,var(--surface))' : 'var(--surface-2)') + ';color:' + (v >= 3 ? 'var(--accent-ink)' : 'var(--ink)') + '" data-tip="' + esc(x.m.name + '\nตัวชี้วัด ' + cd + ': ' + (v ? 'ระดับ ' + v : 'ยังไม่ส่ง')) + '">' + (v || '–') + '</td>'; }).join('') + '<td style="background:var(--surface-2)">' + (x.done ? fix(paCalc(x.m.data).total, 1) : '–') + '</td></tr>'; }).join('') +
        '</tbody></table><div class="legend" style="margin-top:6px">ระดับ <span><i style="background:color-mix(in srgb,var(--accent) 25%,var(--surface))"></i>1</span><span><i style="background:color-mix(in srgb,var(--accent) 50%,var(--surface))"></i>2</span><span><i style="background:color-mix(in srgb,var(--accent) 75%,var(--surface))"></i>3</span><span><i style="background:var(--accent)"></i>4</span></div>';
      var catTip = IND_BASE.map(function (x) { return x.code + ' ' + x.name; });
      var perInd = S.statMode === 'all'
        ? '<h3>ระดับเฉลี่ยรายตัวชี้วัด (รวม ' + done.length + ' คน)</h3><p class="sub">ระดับ 1–4 · เส้นประสีแดง = ระดับ 3 (ตามที่คาดหวัง)</p>' + vChart({ cats: codes, series: [{ name: 'เฉลี่ย', color: 'var(--accent)', vals: avgInd }], max: 4, ref: 3, fmt: function (v) { return fix(v, v % 1 ? 1 : 0); }, aria: 'ระดับเฉลี่ยรายตัวชี้วัด', w: 860, catTip: catTip }) + tableView(['ตัวชี้วัด', 'ระดับเฉลี่ย'], codes.map(function (cd, i) { return [cd, fix(avgInd[i], 2)]; }))
        : '<h3>ระดับรายตัวชี้วัด แยกรายกรรมการ</h3>' + legendHtml(mem.filter(function (x) { return x.done; }).map(function (x) { return { name: x.m.name, color: x.color }; })) + vChart({ cats: codes, series: mem.filter(function (x) { return x.done; }).map(function (x) { return { name: x.m.name, color: x.color, vals: codes.map(function (cd) { return +x.m.data.p1[cd] || 0; }) }; }), max: 4, fmt: function (v) { return fix(v, v % 1 ? 1 : 0); }, aria: 'ระดับรายตัวชี้วัดแยกรายกรรมการ', w: 900, catTip: catTip }) + '<div style="overflow-x:auto">' + heat + '</div>';
      pa = '<div class="stat-grid"><div class="card chart-card viz"><h3>คะแนนเฉลี่ยรวม</h3><p class="sub">ปีงบ ' + S.fy + ' · ขีดแดง = เกณฑ์ผ่าน</p>' + meter({ v: rr.avg, max: full, pass: full * sg.passPct / 100, aria: 'คะแนนเฉลี่ย ' + fix(rr.avg, 2) + ' จาก ' + full, tip: 'คะแนนเฉลี่ย ' + fix(rr.avg, 2) }) + '<div style="text-align:center">' + resPill(rr) + '<div class="small muted" style="margin-top:4px">กรรมการแต่ละคนต้องให้ไม่ต่ำกว่าร้อยละ ' + sg.passPct + '</div></div></div>' +
        '<div class="card chart-card viz"><h3>คะแนนรวมรายกรรมการ</h3><p class="sub">แท่งแบ่งเป็นส่วนที่ 1 และส่วนที่ 2 · ขีดแดง = เกณฑ์ร้อยละ ' + sg.passPct + '</p>' + legendHtml([{ name: 'ส่วนที่ 1 (เต็ม ' + sg.p1Max + ')', color: 'var(--s1)' }, { name: 'ส่วนที่ 2 (เต็ม ' + sg.p2Max + ')', color: 'var(--s2)' }]) + stack +
        tableView(['กรรมการ', 'ส่วนที่ 1', 'ส่วนที่ 2', 'รวม'], mem.map(function (x) { if (!x.done) return [x.m.name, '–', '–', 'ยังไม่ส่ง']; var cc = paCalc(x.m.data); return [x.m.name, fix(cc.p1, 2), fix(cc.p2, 2), fix(cc.total, 2)]; })) + '</div>' +
        '<div class="card chart-card span2 viz">' + perInd + '</div></div>';
    }
    var paSec = '<section class="sec"><div class="sec-h"><h2>คะแนนประเมินจากกรรมการ</h2>' + (done.length ? seg('stat-mode', S.statMode, [['all', 'รวม ' + done.length + ' คน'], ['person', 'แยกรายคน']]) : '') + '</div>' + pa + '</section>';
    // ผลงาน แบบประเมิน การพัฒนาตนเอง
    var fyW = c.works.filter(function (w) { return inFy(w.date, S.fy); });
    var byCat = Object.keys(CATS).map(function (k) { return { l: CATS[k].label, v: fyW.filter(function (w) { return w.cat === k; }).length }; }).filter(function (x) { return x.v; }).sort(function (a, b) { return b.v - a.v; });
    var months = [], mlab = [], cum = [], acc = 0;
    for (var mi = 0; mi < 12; mi++) {
      var mm = (9 + mi) % 12, yy = S.fy - 544 + (mm < 9 ? 1 : 0), key = yy + '-' + (mm < 9 ? '0' : '') + (mm + 1);
      months.push(fyW.filter(function (w) { return w.date.slice(0, 7) === key; }).length); mlab.push(TH_M[mm]);
      acc += c.awards.filter(function (a) { return a.date.slice(0, 7) === key; }).reduce(function (t, a) { return t + (+a.hours || 0); }, 0);
      if (key <= new Date().toISOString().slice(0, 7) || S.fy < fyNow(new Date())) cum.push({ l: TH_M[mm], v: acc, tip: TH_MF[mm] + ' ' + (yy + 543) + ' (สะสม)' });
    }
    var other = '<section class="sec"><h2>ผลงาน แบบประเมิน และการพัฒนาตนเอง ปีงบ ' + S.fy + '</h2><div class="stat-grid">' +
      '<div class="card chart-card viz"><h3>ผลงานแยกประเภท</h3>' + hChart({ items: byCat, color: 'var(--accent)', unit: 'ชิ้น', aria: 'จำนวนผลงานแยกประเภท', lw: 160 }) + '</div>' +
      '<div class="card chart-card viz"><h3>ผลงานที่เพิ่มรายเดือน</h3><p class="sub">ต.ค. ' + ((S.fy - 1) % 100) + ' – ก.ย. ' + (S.fy % 100) + ' · รวม ' + fyW.length + ' ชิ้น</p>' + vChart({ cats: mlab, series: [{ name: 'ผลงาน', color: 'var(--accent)', vals: months }], int: true, unit: 'ชิ้น', aria: 'จำนวนผลงานรายเดือน', w: 560, h: 220 }) + '</div>' +
      (svs ? '<div class="card chart-card viz"><h3>ผู้ตอบแบบประเมินความพึงพอใจ</h3><p class="sub">' + esc(svr.label) + '</p>' + donut({ parts: [{ l: 'นักเรียน', v: svs.byRole.student, c: SER[0] }, { l: 'ผู้ปกครอง', v: svs.byRole.parent, c: SER[1] }, { l: 'ครู/บุคลากร', v: svs.byRole.teacher, c: SER[2] }], big: String(svs.n), small: 'คน', unit: 'คน', aria: 'ผู้ตอบแบบประเมิน ' + svs.n + ' คน' }) + '</div>' +
        '<div class="card chart-card viz"><h3>ความพึงพอใจรายข้อ</h3><p class="sub">ค่าเฉลี่ยเต็ม 5</p>' + hChart({ items: svr.items.map(function (t, i) { return { l: (i + 1) + '. ' + t, v: svs.per[i], tip: t + '\n' + fix(svs.per[i], 2) + ' จาก 5' }; }), max: 5, color: 'var(--accent)', fmt: function (v) { return fix(v, 2); }, aria: 'ค่าเฉลี่ยความพึงพอใจรายข้อ', lw: 210 }) + '</div>' : '') +
      '<div class="card chart-card span2 viz"><h3>ชั่วโมงอบรมสะสม</h3><p class="sub">เส้นแดง = เป้าหมาย ' + goal + ' ชั่วโมง (ตัวชี้วัด 3.1)</p>' + (cum.length ? lineChart({ pts: cum, color: 'var(--accent)', int: true, unit: 'ชม.', ref: goal, refLabel: 'เป้า ' + goal + ' ชม.', aria: 'ชั่วโมงอบรมสะสม ' + acc + ' ชั่วโมง', xTicks: 12, h: 220 }) : '<p class="small muted">ยังไม่ถึงปีงบนี้</p>') + '</div></div></section>';
    return adminShell('admin-stats', 'สถิติและกราฟ', 'ยอดเข้าชม คะแนนกรรมการ ผลงาน แบบประเมิน และชั่วโมงอบรม · ชี้ที่กราฟเพื่อดูตัวเลข · ไม่เก็บข้อมูลส่วนบุคคลของผู้เข้าชม',
      '<button class="btn" data-act="stat-reload">' + ic('refresh', 16) + ' โหลดใหม่</button><button class="btn" data-act="stat-csv">' + ic('download', 16) + ' ส่งออก CSV</button>', kpi + views + paSec + other);
  }
  function statCsv() {
    if (!S.stats) return;
    var rows = [['วันที่', 'ยอดเข้าชม', 'ผู้เข้าชม', 'มือถือ', 'คอมพิวเตอร์', 'แท็บเล็ต'].concat(Object.keys(PAGE_T).map(function (k) { return PAGE_T[k]; }))];
    S.stats.rows.forEach(function (r) { var x = r.data; rows.push([r.date, x.v || 0, x.u || 0, x['d:m'] || 0, x['d:d'] || 0, x['d:t'] || 0].concat(Object.keys(PAGE_T).map(function (k) { return x['p:' + k] || 0; }))); });
    var blob = new Blob(['﻿' + rows.map(function (r) { return r.join(','); }).join('\r\n')], { type: 'text/csv;charset=utf-8' }), a = document.createElement('a');
    a.href = URL.createObjectURL(blob); a.download = 'สถิติการเข้าชม_' + S.stats.today + '.csv'; document.body.appendChild(a); a.click();
    setTimeout(function () { URL.revokeObjectURL(a.href); document.body.removeChild(a); }, 500);
  }

  /* ---------- ตรวจสอบเอกสาร ---------- */
  function vfUrl(code) { return siteUrl() + '#verify-' + code; }
  function sha256File(file, cb) {
    if (!window.crypto || !crypto.subtle) { cb('เบราว์เซอร์นี้คำนวณลายนิ้วมือไฟล์ไม่ได้'); return; }
    var fr = new FileReader();
    fr.onload = function () { crypto.subtle.digest('SHA-256', fr.result).then(function (buf) { var a = new Uint8Array(buf), h = ''; for (var i = 0; i < a.length; i++) h += ('0' + a[i].toString(16)).slice(-2); cb(null, h); }, function () { cb('คำนวณลายนิ้วมือไฟล์ไม่สำเร็จ'); }); };
    fr.onerror = function () { cb('อ่านไฟล์ไม่สำเร็จ'); };
    fr.readAsArrayBuffer(file);
  }
  function needVerify(code) {
    if (!code || S.vfRes[code] || S.vfLoading === code) return; S.vfLoading = code;
    api('verify', { code: code }, { loader: 'กำลังตรวจสอบ' }, function (err, res) { S.vfLoading = ''; S.vfRes[code] = err ? { kind: 'err', msg: err } : res; if (route().indexOf('verify') === 0) render(); });
  }
  function pVerify(code) {
    code = String(code || '').toUpperCase(); if (code) needVerify(code);
    var res = code ? S.vfRes[code] : null, out = '';
    function kv(rows) { return '<dl class="kvlist small">' + rows.filter(function (r) { return r[1]; }).map(function (r) { return '<dt>' + r[0] + '</dt><dd>' + r[1] + '</dd>'; }).join('') + '</dl>'; }
    function cmp(hash) {
      if (!hash) return '<p class="small muted">ต้นฉบับไม่มีลายนิ้วมือไฟล์ให้เทียบ</p>';
      var c = S.vfCmp && S.vfCmp.code === code ? S.vfCmp : null;
      return '<div class="vf-cmp"><b class="small">เทียบไฟล์ที่ได้รับกับต้นฉบับ</b><p class="small muted">เลือกไฟล์ที่ได้รับมา ระบบคำนวณลายนิ้วมือในเครื่องของท่าน ไม่อัปโหลดไฟล์ขึ้นระบบ</p><label class="btn sm" style="align-self:flex-start">' + ic('upload', 14) + ' เลือกไฟล์<input type="file" id="vf-file" hidden></label>' +
        (c ? (c.err ? '<div class="err">' + esc(c.err) + '</div>' : c.hash === hash ? '<span class="pill good">' + ic('check', 13) + ' ไฟล์ “' + esc(c.name) + '” ตรงกับต้นฉบับทุกไบต์</span>' : '<span class="pill bad">' + ic('x', 13) + ' ไฟล์ “' + esc(c.name) + '” ไม่ตรงกับต้นฉบับ อาจถูกแก้ไขหรือเป็นคนละไฟล์</span>') : '') + '</div>';
    }
    if (code && !res) out = '<div class="card" aria-busy="true"><div class="sk" style="height:120px"></div></div>';
    else if (res && res.kind === 'award') {
      out = '<div class="card raised vf-ok"><div class="vf-badge">' + ic('check', 26) + '</div><div style="flex:1;min-width:240px;display:flex;flex-direction:column;gap:10px"><span class="pill good" style="align-self:flex-start">พบเอกสารนี้ในแฟ้มผลงาน</span><h2>' + esc(res.title) + '</h2>' +
        kv([['ประเภท', esc(VF_TYPE[res.type] || res.type) + (res.level ? ' · ระดับ' + esc(res.level) : '')], ['ผู้ได้รับ', esc(res.owner.name) + ' · ' + esc(res.owner.school)], ['วันที่', fd(res.date)], ['หน่วยงานที่มอบ', esc(res.org)], ['ชั่วโมง', res.hours ? res.hours + ' ชั่วโมง' : ''], ['รหัสเอกสาร', '<span class="mono">' + esc(res.code) + '</span>'], ['ลายนิ้วมือไฟล์ (SHA-256)', res.hash ? '<span class="mono vf-hash">' + res.hash + '</span>' : '']]) +
        (res.fileUrl || res.imgUrl ? '<a class="btn sm" style="align-self:flex-start" href="' + esc(res.fileUrl || res.imgUrl) + '" target="_blank" rel="noopener">' + ic('ext', 14) + ' เปิดไฟล์ต้นฉบับ</a>' : (res.vis !== 'public' ? '<p class="small muted">' + ic('lock', 13) + ' ไฟล์ต้นฉบับไม่เปิดเผยต่อสาธารณะ</p>' : '')) + cmp(res.hash) + '</div>' + (res.imgUrl ? '<div class="vf-cert"><img src="' + esc(res.imgUrl) + '" alt="' + esc(res.title) + '"></div>' : '') + '</div>';
    } else if (res && res.kind === 'report') {
      var d = res.data || {}, cm = d.committee || {};
      out = '<div class="card raised ' + (res.revoked ? 'vf-bad' : 'vf-ok') + '"><div class="vf-badge' + (res.revoked ? ' bad' : '') + '">' + ic(res.revoked ? 'x' : 'check', 26) + '</div><div style="flex:1;min-width:240px;display:flex;flex-direction:column;gap:10px">' +
        (res.revoked ? '<span class="pill bad" style="align-self:flex-start">รหัสนี้ถูกยกเลิกแล้ว มีฉบับใหม่กว่า ติดต่อเจ้าของแฟ้ม</span>' : '<span class="pill good" style="align-self:flex-start">เอกสารออกจากระบบนี้จริง</span>') + '<h2>' + esc(res.title) + '</h2>' +
        kv([['เจ้าของแฟ้ม', esc(res.owner.name) + ' · ตำแหน่ง ' + esc(res.owner.position) + ' · ' + esc(res.owner.school)], ['ออกเอกสารเมื่อ', fdt(res.issuedAt)], ['ตัวชี้วัดที่มีข้อมูล', (d.indFilled || 0) + ' จาก 15'], ['หลักฐาน ณ วันออก', 'ผลงาน ' + (d.works || 0) + ' · รางวัล/อบรม ' + (d.awards || 0) + ' · วิดีโอ ' + (d.videos || 0) + ' · อบรม ' + (d.hours || 0) + ' ชม.'],
          ['ผลจากกรรมการ', cm.n ? 'ส่งผล ' + cm.n + '/' + cm.of + ' คน · เฉลี่ยร้อยละ ' + fix(cm.avgPct, 2) + ' · ' + (cm.pass ? 'ผ่านเกณฑ์' : 'ไม่ผ่านเกณฑ์') + (cm.complete ? '' : ' (ผลชั่วคราว)') : 'ยังไม่มีผล ณ วันออกเอกสาร'], ['รหัสเอกสาร', '<span class="mono">' + esc(res.code) + '</span>'], ['ลายนิ้วมือไฟล์ (SHA-256)', res.hash ? '<span class="mono vf-hash">' + res.hash + '</span>' + (res.hashName ? ' <span class="muted">(' + esc(res.hashName) + ')</span>' : '') : '']]) +
        '<div class="row"><a class="btn sm" href="#pa">' + ic('file', 14) + ' เปิดแฟ้ม PA ปีงบ ' + res.fy + '</a></div>' + cmp(res.hash) + '</div></div>';
    } else if (res) {
      out = '<div class="card raised vf-bad"><div class="vf-badge bad">' + ic('x', 26) + '</div><div style="flex:1"><span class="pill bad">' + (res.kind === 'err' ? esc(res.msg) : 'ไม่พบรหัสนี้ในระบบ') + '</span><p style="margin-top:8px">ตรวจสอบว่าพิมพ์รหัส <span class="mono">' + esc(code) + '</span> ถูกต้อง หรือเอกสารอาจไม่ได้ออกจากระบบนี้ ติดต่อครูเจ้าของแฟ้มเพื่อยืนยัน</p></div></div>';
    }
    return pub('verify', '<div class="vf-wrap"><div style="display:flex;flex-direction:column;gap:10px"><span class="eyebrow">สำหรับผู้รับเอกสาร</span><h1>ตรวจสอบความถูกต้องของเอกสาร</h1><p class="muted">เกียรติบัตร วุฒิบัตร และรายงาน PA ของ ' + esc(st().name) + ' มี QR และรหัสตรวจสอบ สแกน QR หรือกรอกรหัสเพื่อยืนยันว่าเอกสารมีอยู่จริงในแฟ้ม และเทียบไฟล์ที่ได้รับกับต้นฉบับได้</p></div>' +
      '<form id="vf-form" class="card raised" style="display:flex;flex-direction:column;gap:12px"><div class="field"><label for="vf-code">รหัสตรวจสอบ</label><input id="vf-code" class="inp mono" value="' + esc(code) + '" placeholder="เช่น BLL-2570-ABC234" autocomplete="off" autocapitalize="characters" spellcheck="false" style="font-size:17px;letter-spacing:.05em"></div>' +
      '<button class="btn primary" type="submit">' + ic('search', 16) + ' ตรวจสอบ</button></form></div>' + (out ? '<div style="margin-top:18px">' + out + '</div>' : ''));
  }
  /* หลังบ้าน: รหัสตรวจสอบ */
  function needVfl(force) {
    if ((S.vfl && !force) || S.vflLoading) return; S.vflLoading = true;
    api('verifyList', {}, { loader: false }, function (err, res) { S.vflLoading = false; if (err) { S.vflErr = err; toast(err); render(); return; } S.vflErr = ''; S.vfl = res; var r = route(); if (r === 'admin-verify' || r === 'report') render(); });
  }
  function vfCall(action, data, msg, cb) {
    api(action, data, { loader: 'กำลังบันทึก' }, function (err, res) { if (err) { toast(err); return; } S.vfl = res; S.vfRes = {}; closeModal(); render(); if (msg) toast(msg); if (cb) cb(res); });
  }
  function reportCode(fy) { if (!S.vfl) return null; return S.vfl.reports.filter(function (x) { return x.fy === fy && !x.revoked; })[0] || null; }
  function qrModal(code, title) {
    S.qrCode = code;
    openModal('QR ตรวจสอบเอกสาร', '<div class="qr-box">' + qrSvg(vfUrl(code), 220, 'QR ตรวจสอบ ' + code) + '<b class="mono">' + esc(code) + '</b><span class="small muted">' + esc(title) + '</span><span class="small muted mono" style="word-break:break-all">' + esc(vfUrl(code)) + '</span></div>' +
      '<p class="small muted">ดาวน์โหลด QR ไปวางบนสำเนาเอกสารก่อนส่ง ผู้รับสแกนแล้วจะเห็นข้อมูลเอกสารนี้ในแฟ้ม</p>',
      '<button class="btn" data-act="copy-vf">' + ic('copy', 16) + ' คัดลอกลิงก์</button><button class="btn primary" data-act="qr-dl">' + ic('download', 16) + ' ดาวน์โหลด QR</button>');
  }
  function qrDownload(code) {
    var svg = qrSvg(vfUrl(code), 600, 'QR ' + code).replace('<svg ', '<svg xmlns="http://www.w3.org/2000/svg" ');
    var a = document.createElement('a'); a.href = URL.createObjectURL(new Blob([svg], { type: 'image/svg+xml' })); a.download = 'QR_' + code + '.svg'; document.body.appendChild(a); a.click();
    setTimeout(function () { URL.revokeObjectURL(a.href); document.body.removeChild(a); }, 500);
  }
  function aVerify() {
    if (!S.vfl) { needVfl(); return adminShell('admin-verify', 'ตรวจสอบเอกสาร (QR)', 'กำลังโหลด', '', '<div class="card" aria-busy="true"><div class="sk" style="height:160px"></div>' + (S.vflErr ? '<div class="err">' + esc(S.vflErr) + ' <button class="btn sm" data-act="vf-reload">ลองใหม่</button></div>' : '') + '</div>'); }
    var reps = S.vfl.reports, c = C();
    var rr = reps.length ? '<div class="tbl-wrap"><table class="tbl"><thead><tr><th>รหัส</th><th>ปีงบ</th><th>ออกเมื่อ</th><th>ลายนิ้วมือไฟล์</th><th>สถานะ</th><th></th></tr></thead><tbody>' + reps.map(function (x) {
      return '<tr class="' + (x.revoked ? 'dim' : '') + '"><td class="mono">' + esc(x.code) + '</td><td>' + x.fy + '</td><td class="small">' + fdt(x.issuedAt) + '</td><td class="small">' + (x.hash ? ic('check', 13) + ' ' + esc(x.hashName || 'แนบแล้ว') : '<span class="muted">ยังไม่แนบ</span>') + '</td><td>' + (x.revoked ? '<span class="pill off">ยกเลิกแล้ว</span>' : '<span class="pill good">ใช้งาน</span>') + '</td>' +
        '<td><div class="row" style="gap:4px;flex-wrap:nowrap"><button class="btn sm" data-act="vf-qr" data-k="' + esc(x.code) + '">' + ic('search', 14) + ' QR</button><label class="btn sm" title="เลือกไฟล์ PDF ที่พิมพ์และส่งจริง ระบบเก็บเฉพาะลายนิ้วมือไฟล์">' + ic('upload', 14) + ' แนบลายนิ้วมือ<input type="file" accept="application/pdf" data-vfhash="' + esc(x.code) + '" hidden></label><button class="btn sm" data-act="vf-revoke" data-k="' + esc(x.code) + '" data-on="' + (x.revoked ? '0' : '1') + '">' + (x.revoked ? 'ใช้งานอีกครั้ง' : 'ยกเลิก') + '</button></div></td></tr>';
    }).join('') + '</tbody></table></div>' : '<p class="small muted">ยังไม่เคยออกรหัสรายงาน</p>';
    var aw = c.awards.slice().sort(function (a, b) { return a.date < b.date ? 1 : -1; });
    var arows = pageOf(aw, 'a-vfa', perA()).map(function (a) {
      var x = find(S.vfl.awards, 'id', a.id), code = x ? x.code : '';
      return '<tr><td><b>' + esc(a.title) + '</b><br><span class="small muted">' + esc(VF_TYPE[a.type] || '') + (a.level ? ' · ระดับ' + esc(a.level) : '') + ' · ' + fd(a.date) + '</span></td><td class="mono small">' + esc(code) + '</td><td>' + visChipText(a.vis) + '</td><td><div class="row" style="gap:4px;flex-wrap:nowrap"><button class="btn sm" data-act="vf-qr" data-k="' + esc(code) + '" data-t="' + esc(a.title) + '">' + ic('search', 14) + ' QR</button><a class="btn sm" href="#verify-' + esc(code) + '">ทดสอบ</a></div></td></tr>';
    }).join('');
    return adminShell('admin-verify', 'ตรวจสอบเอกสาร (QR)', 'รหัสตรวจสอบสร้างด้วยกุญแจลับในระบบ ปลอมรหัสไม่ได้ · ผู้รับเอกสารตรวจที่หน้า “ตรวจสอบเอกสาร” หรือสแกน QR',
      '<a class="btn" href="#verify">' + ic('ext', 16) + ' หน้าตรวจสอบ</a><button class="btn primary" data-act="vf-issue">' + ic('plus', 16) + ' ออกรหัสรายงาน PA ปีงบ ' + S.fy + '</button>',
      '<div class="note">' + ic('shield', 15) + ' ขั้นตอนแนะนำ: ออกรหัสรายงาน → เปิด “รายงาน PDF” แล้วพิมพ์เป็น PDF (QR จะอยู่บนปก) → กด “แนบลายนิ้วมือ” เลือกไฟล์ PDF ที่จะส่งจริง ผู้รับนำไฟล์มาเทียบได้ว่าไม่ถูกแก้ไข</div>' +
      '<section class="sec"><h2>รายงาน PA</h2>' + rr + '</section>' +
      '<section class="sec"><h2>รางวัล เกียรติบัตร และการอบรม (' + aw.length + ')</h2><p class="small muted" style="margin-bottom:8px">รหัสของแต่ละรายการคงที่ ใช้ได้ทันที ไฟล์ที่แนบไว้ในระบบคือต้นฉบับที่ใช้เทียบ</p>' +
      (aw.length ? '<div class="tbl-wrap"><table class="tbl"><thead><tr><th>รายการ</th><th>รหัส</th><th>การเปิดเผย</th><th></th></tr></thead><tbody>' + arows + '</tbody></table></div>' + pagerNav('a-vfa') : '<p class="small muted">ยังไม่มีรางวัล/อบรม</p>') + '</section>');
  }
  function visChipText(v) { return v === 'public' ? '<span class="pill good">สาธารณะ</span>' : v === 'committee' ? '<span class="pill warn">เฉพาะกรรมการ</span>' : '<span class="pill off">ส่วนตัว</span>'; }

  /* ---------- รายงาน PDF (พิมพ์จากเบราว์เซอร์) ---------- */
  function reportFy() { return S.com ? S.com.committee.fy : S.fy; }
  function pReport() {
    var fy = reportFy(), back = S.admin ? 'admin' : (S.com ? 'committee' : 'pa');
    var bar = function (mid) { return '<div class="rep-bar"><a class="btn" href="#' + back + '">' + ic('left', 16) + ' กลับ</a><b>รายงาน PDF</b>' + (mid || '') + '<span class="sp"></span>' + (S.admin ? fySelect('fy-sel-r') : '') + '<button class="btn primary" data-act="print">' + ic('print', 16) + ' พิมพ์ / บันทึก PDF</button></div>'; };
    var docs = docsOf(fy); if (!docs) { needDocs(fy); return bar() + '<div class="rep-wrap"><div class="sk" style="width:210mm;max-width:100%;height:297mm"></div></div>'; }
    if (docs.pa.hidden || docs.pa.locked) return bar() + '<div class="rep-wrap"><div class="card empty" style="max-width:560px">' + ic('lock', 18) + ' แฟ้ม PA ปีงบ ' + fy + ' ยังไม่เปิดให้ดู</div></div>';
    var canScore = S.admin || !!S.com, ms = canScore ? comMembers() : null;
    if (S.admin) { if (!ms) needComList(fy); needVfl(); }
    var s = st(), sg = scoring(), g = fyRange(fy), pa = docs.pa, ag = docs.agree && docs.agree.teach ? docs.agree : null, c = C(), vc = S.admin ? reportCode(fy) : null, code = vc ? vc.code : '';
    var pages = [];
    var verifyBox = code ? '<div class="a4-verify">' + qrSvg(vfUrl(code), 84, 'QR ตรวจสอบเอกสาร') + '<div><b>ตรวจสอบความถูกต้องของเอกสาร</b><br>สแกน QR หรือกรอกรหัส <span class="mono">' + esc(code) + '</span><br>ที่ ' + esc(siteUrl()) + '#verify</div></div>' : '<div class="a4-verify">' + qrSvg(siteUrl() + '#pa', 84, 'QR แฟ้ม PA') + '<div><b>ดูหลักฐานฉบับเต็มออนไลน์</b><br>สแกน QR เพื่อเปิดแฟ้ม PA วิดีโอ และผลงานทั้งหมด</div></div>';
    pages.push({ cover: true, b: '<div class="a4-cover">' + seal('a4-seal') + '<div><p class="a4-k">แบบรายงานผลการพัฒนางานตามข้อตกลง (PA)</p><h1>รายงานผลการปฏิบัติงานตามข้อตกลงในการพัฒนางาน</h1><p>ปีงบประมาณ ' + fy + '<br>(' + thDateFull(g[0]).replace('วันที่ ', '') + ' – ' + thDateFull(g[1]).replace('วันที่ ', '') + ')</p></div>' +
      '<div class="a4-who"><p><b>' + esc(s.name) + '</b></p><p>ตำแหน่ง ' + esc(s.position || 'ครู') + (sg.acad ? ' วิทยฐานะ' + esc(sg.acad) : '') + (s.subject ? ' · ' + esc(s.subject) : '') + '</p><p>' + esc(s.school) + ' ' + esc(s.area) + '</p></div>' + verifyBox + '</div>' });
    var ev = 0; IND_BASE.forEach(function (x) { ev += evidenceOf(x.code, fy).length; });
    var hrsList = c.awards.filter(function (a) { return inFy(a.date, fy); }), hrs = hrsList.reduce(function (t, a) { return t + (+a.hours || 0); }, 0);
    var info = [['ชื่อ–สกุล', esc(s.name)], ['ตำแหน่ง', esc(s.position || 'ครู') + (sg.acad ? ' วิทยฐานะ' + esc(sg.acad) : ' (ยังไม่มีวิทยฐานะ)')], ['สถานศึกษา', esc(s.school) + ' ' + esc(s.area)], ['กลุ่มสาระ/วิชาที่สอน', blank(s.subject)]];
    (D.education || []).slice(0, 3).forEach(function (e, i) { info.push([i ? '' : 'วุฒิการศึกษา', esc([e.level, e.degree, e.inst, e.year].filter(Boolean).join(' · '))]); });
    if (ag) ag.teach.forEach(function (t, i) { var lt = loadTotal(ag, i); info.push(['ภาระงานสอน ภาคเรียนที่ ' + esc(t.term), lt ? lt + ' ชั่วโมง/สัปดาห์' : '<span class="muted">ยังไม่ได้กรอกในแบบข้อตกลง</span>']); });
    info.push(['หลักฐานที่ผูกกับตัวชี้วัด', ev + ' รายการ'], ['ชั่วโมงอบรม/พัฒนาตนเอง', hrs + ' ชั่วโมง (เป้าหมาย ' + (+s.hoursGoal || 20) + ' ชั่วโมง)']);
    pages.push({ t: 'ข้อมูลผู้จัดทำข้อตกลง', b: '<table class="tbl"><tbody>' + info.map(function (f) { return '<tr><th style="width:34%">' + f[0] + '</th><td>' + f[1] + '</td></tr>'; }).join('') + '</tbody></table>' +
      '<h3 class="a4-sub">สารบัญ</h3><ol class="a4-toc"><li><span>ส่วนที่ 1 ข้อตกลงในการพัฒนางานตามมาตรฐานตำแหน่ง</span><b>3–5</b></li><li><span>ส่วนที่ 2 ประเด็นท้าทายในการพัฒนาผลลัพธ์การเรียนรู้ของผู้เรียน</span><b>6</b></li><li><span>การพัฒนาตนเองและหลักฐานประกอบ</span><b>7</b></li>' + (canScore ? '<li><span>สรุปผลการประเมินจากคณะกรรมการ</span><b>8</b></li>' : '') + '</ol>' });
    [1, 2, 3].forEach(function (sd) {
      pages.push({ t: 'ส่วนที่ 1 · ด้านที่ ' + sd + ' ' + SIDES[sd], b: '<div class="a4-scroll"><table class="tbl a4-tbl"><thead><tr><th style="width:40px">ข้อ</th><th>งาน (Tasks)</th><th>ผลลัพธ์ (Outcomes)</th><th>ตัวชี้วัด (Indicators)</th><th style="width:118px">หลักฐาน</th></tr></thead><tbody>' +
        pa.ind.filter(function (x) { return indSide(x.code) === sd; }).map(function (x) {
          var e = evidenceOf(x.code, fy);
          return '<tr><td><b>' + x.code + '</b></td><td><b class="a4-ind">' + esc(indName(x.code)) + '</b>' + txt(x.task) + '</td><td>' + txt(x.out) + '</td><td>' + txt(x.kpi) + '</td><td class="small">' + (e.length ? e.slice(0, 4).map(function (y) { return '• ' + esc(y.title.length > 34 ? y.title.slice(0, 33) + '…' : y.title); }).join('<br>') + (e.length > 4 ? '<br>และอีก ' + (e.length - 4) + ' รายการ' : '') : '<span class="muted">–</span>') + (x.photos.length ? '<br><span class="muted">ภาพ ' + x.photos.length + ' ภาพ</span>' : '') + '</td></tr>';
        }).join('') + '</tbody></table></div>' });
    });
    var ch = pa.challenge;
    pages.push({ t: 'ส่วนที่ 2 ประเด็นท้าทาย', b: '<h3 class="a4-sub">' + blank(ch.title) + '</h3><p><b>สภาพปัญหาของผู้เรียน</b> ' + txt(ch.problem) + '</p><p><b>วิธีการดำเนินการให้บรรลุผล</b></p>' + (ch.steps.length ? '<ol>' + ch.steps.map(function (t) { return '<li>' + esc(t) + '</li>'; }).join('') + '</ol>' : '<p class="muted">–</p>') +
      '<table class="tbl"><tbody><tr><th style="width:34%">ผลลัพธ์เชิงปริมาณ (เป้าหมาย)</th><td>' + txt(ch.quant) + '</td></tr><tr><th>ผลลัพธ์เชิงคุณภาพ (เป้าหมาย)</th><td>' + txt(ch.qual) + '</td></tr><tr><th>ผลที่เกิดขึ้นจริง</th><td>' + txt(ch.result) + '</td></tr></tbody></table>' });
    var fyW = c.works.filter(function (w) { return shown(w) && inFy(w.date, fy); });
    var byCat = Object.keys(CATS).map(function (k) { return [CATS[k].label, fyW.filter(function (w) { return w.cat === k; }).length]; }).filter(function (x) { return x[1]; });
    var svr = S.admin && S.sv ? S.sv.rounds.filter(function (x) { return x.fy === fy; })[0] : null, svs = svr && S.sv.sel === svr.id ? S.sv.stats : null;
    if (S.admin && !S.sv) needSv();
    pages.push({ t: 'การพัฒนาตนเองและหลักฐานประกอบ', b: '<h3 class="a4-sub">การอบรมและรางวัล (' + hrsList.length + ' รายการ · ' + hrs + ' ชั่วโมง)</h3>' +
      (hrsList.length ? '<table class="tbl"><thead><tr><th style="width:92px">วันที่</th><th>รายการ</th><th>หน่วยงาน</th><th style="width:60px" class="r">ชม.</th></tr></thead><tbody>' + hrsList.slice(0, 14).map(function (a) { return '<tr><td class="small">' + fd(a.date) + '</td><td>' + esc(a.title) + '</td><td class="small">' + esc(a.org) + '</td><td class="r num">' + (a.hours || '') + '</td></tr>'; }).join('') + '</tbody></table>' + (hrsList.length > 14 ? '<p class="small muted">และอีก ' + (hrsList.length - 14) + ' รายการ</p>' : '') : '<p class="muted">–</p>') +
      '<h3 class="a4-sub">ผลงานในปีงบประมาณ (' + fyW.length + ' ชิ้น)</h3><p>' + (byCat.length ? byCat.map(function (x) { return esc(x[0]) + ' ' + x[1] + ' ชิ้น'; }).join(' · ') : '–') + '</p>' +
      (svs && svs.n ? '<h3 class="a4-sub">ความพึงพอใจต่อการจัดการเรียนรู้ (' + esc(svr.label) + ')</h3><p>ผู้ตอบ ' + svs.n + ' คน · ค่าเฉลี่ยรวม <b>' + fix(svs.all, 2) + '</b> จาก 5 (ระดับ' + svLevel(svs.all) + ')</p>' : '') });
    if (canScore) {
      var rr = ms ? setRes(ms) : null, list = ms || [];
      pages.push({ t: 'สรุปผลการประเมินจากคณะกรรมการ', b: !ms ? '<div class="sk" style="height:200px"></div>' : !list.length ? '<p class="muted">ปีงบนี้ยังไม่ได้กำหนดคณะกรรมการ</p>' :
        '<div class="a4-scroll">' + pa3Table(list) + '</div><p class="small" style="margin-top:6px">ภาระงาน ' + loadMark(list) + '</p><p style="margin:6px 0"><b>สรุปผลการประเมินทั้ง 2 ส่วน จากกรรมการ ' + list.length + ' คน</b> ' + resPill(rr) + '</p>' +
        (rr && !rr.complete ? '<p class="small muted">* ยังส่งผลไม่ครบ ผลเป็นผลชั่วคราว</p>' : '') + '<p class="small muted">แบบ PA2 และ PA3 ฉบับทางการพิมพ์ได้จากหน้า “แบบ PA2 / PA3”</p>' +
        '<div class="a4-sigs">' + list.map(function (m) { var ok = m.status === 'submitted'; return '<div>' + (ok && m.sigUrl ? '<img class="sig" src="' + esc(m.sigUrl) + '" alt="ลายมือชื่อ">' : '<div class="sig-none">' + (ok ? 'ส่งผลโดยไม่ลงลายมือชื่ออิเล็กทรอนิกส์' : 'ยังไม่ส่งผล') + '</div>') + '<span>(' + esc(m.name) + ')</span><span class="small">' + COM_ROLE[m.role] + '</span><span class="small muted">' + (ok ? 'ส่งผล ' + fdt(m.submittedAt) : '') + '</span></div>'; }).join('') + '</div>' });
    }
    var n = pages.length, foot = code || ('แฟ้ม PA ปีงบ ' + fy);
    var html = pages.map(function (p, i) {
      return '<section class="a4">' + (p.cover ? '' : '<div class="a4-h"><span>' + esc(s.school) + ' · แฟ้ม PA ปีงบ ' + fy + '</span><span>' + esc(s.name) + '</span></div><h2 class="a4-t">' + p.t + '</h2>') + p.b + '<div class="a4-f"><span>' + esc(foot) + '</span><span>หน้า ' + (i + 1) + ' / ' + n + '</span></div></section>';
    }).join('');
    var mid = '<span class="small muted">A4 · ' + n + ' หน้า</span>' + (S.admin ? (vc ? '<span class="chip mono">' + ic('shield', 13) + ' ' + esc(vc.code) + '</span>' : (S.vfl ? '<button class="btn sm" data-act="vf-issue">' + ic('shield', 14) + ' ออกรหัสตรวจสอบ</button>' : '')) : '');
    return bar(mid) + (S.admin && !vc && S.vfl ? '<div class="rep-note no-print">' + ic('shield', 15) + ' ยังไม่มีรหัสตรวจสอบของปีงบ ' + fy + ' ปกจึงแสดง QR ไปที่แฟ้ม PA แทน กด “ออกรหัสตรวจสอบ” ก่อนพิมพ์ฉบับส่งจริง</div>' : '') + '<div class="rep-wrap">' + html + '</div>';
  }

  /* ---------- โหมดนำเสนอ ---------- */
  function presSlides(d) {
    var list = [{ k: 'cover' }];
    d.pa.ind.forEach(function (x) { list.push({ k: 'ind', x: x }); });
    list.push({ k: 'ch' }); list.push({ k: 'end' });
    return list;
  }
  function presTitle(s) { return s.k === 'cover' ? 'ปก' : (s.k === 'ind' ? s.x.code + ' ' + indName(s.x.code) : (s.k === 'ch' ? 'ส่วนที่ 2 ประเด็นท้าทาย' : 'ขอบคุณ')); }
  function pPresent() {
    var fy = reportFy(), d = docsOf(fy), exit = S.admin ? 'admin-pa' : 'pa';
    if (!d) { needDocs(fy); return '<div class="pres"><div class="pres-stage"><div class="slide"><div class="sl-in"><div class="sk" style="height:60%"></div></div></div></div></div>'; }
    if (d.pa.hidden || d.pa.locked) return pub('present', '<div class="card empty">' + ic('lock', 18) + ' แฟ้ม PA ปีงบ ' + fy + ' ยังไม่เปิดให้ดู</div>');
    var sl = presSlides(d), i = Math.max(0, Math.min(S.slide || 0, sl.length - 1)), sd = sl[i], s = st(), g = fyRange(fy), body;
    S.slide = i;
    var period = 'ปีงบประมาณ ' + fy + ' · ' + fd(g[0]) + ' – ' + fd(g[1]);
    function trim(t, n) { t = String(t || ''); return t.length > n ? t.slice(0, n - 1) + '…' : t; }
    if (sd.k === 'cover') {
      var ev = 0; d.pa.ind.forEach(function (x) { ev += evidenceOf(x.code, fy).length; });
      var vids = C().videos.filter(function (v) { return shown(v) && (v.pa || v.type === 'pa') && (v.fy ? v.fy === fy : inFy(v.date, fy)); }).length;
      body = '<div class="sl-cover"><div class="row" style="gap:1.4cqw">' + seal('sl-seal') + '<div><div class="sl-eb">' + esc(s.school) + ' ' + esc(s.area) + '</div><div class="sl-small">' + period + '</div></div></div>' +
        '<div><div class="sl-eb">นำเสนอผลการปฏิบัติงานตามข้อตกลงในการพัฒนางาน (PA)</div><h1>' + esc(s.name) + '</h1><p class="sl-txt">ตำแหน่ง ' + esc(s.position || 'ครู') + (s.subject ? ' · ' + esc(s.subject) : '') + '</p>' + (s.tagline ? '<p class="sl-txt muted">' + esc(s.tagline) + '</p>' : '') + '</div>' +
        '<div class="sl-stats"><div><b>' + d.pa.ind.length + '</b><span>ตัวชี้วัด</span></div><div><b>' + ev + '</b><span>หลักฐาน</span></div><div><b>' + vids + '</b><span>วิดีโอการสอน</span></div></div></div>';
    } else if (sd.k === 'ind') {
      var x = sd.x, e = evidenceOf(x.code, fy), photos = (x.photos || []).slice(0, 6), cells = '';
      for (var p = 0; p < 6; p++) cells += photos[p] ? ph(hueOf(x.code + p), 'image', photos[p].cap, '', photos[p].url) : '<div class="sl-empty">ภาพที่ ' + (p + 1) + '</div>';
      body = '<div class="sl-head"><span class="sl-code">' + x.code + '</span><div><div class="sl-eb">ด้านที่ ' + indSide(x.code) + ' ' + SIDES[indSide(x.code)] + '</div><h2>' + esc(indName(x.code)) + '</h2></div></div>' +
        '<div class="sl-grid"><div class="sl-tri"><div><b>งาน</b><p>' + esc(trim(x.task, 260)) + '</p></div><div><b>ผลลัพธ์</b><p>' + esc(trim(x.out, 220)) + '</p></div><div><b>ตัวชี้วัด</b><p>' + esc(trim(x.kpi, 220)) + '</p></div></div><div class="sl-photos">' + cells + '</div></div>' +
        '<div class="sl-ev"><span class="sl-small"><b>หลักฐาน ' + e.length + ' รายการ</b></span>' + e.slice(0, 3).map(function (w) { return '<span class="chip">' + ic(w.icon, 13) + ' ' + esc(trim(w.title, 38)) + '</span>'; }).join('') + (e.length > 3 ? '<span class="sl-small muted">และอีก ' + (e.length - 3) + ' รายการ</span>' : '') + '</div>';
    } else if (sd.k === 'ch') {
      var c = d.pa.challenge;
      body = '<div class="sl-head"><span class="sl-code">2</span><div><div class="sl-eb">ส่วนที่ 2 ประเด็นท้าทาย</div><h2>' + esc(c.title || 'ยังไม่ได้กรอกประเด็นท้าทาย') + '</h2></div></div>' +
        '<div class="sl-grid"><div class="sl-tri"><div><b>สภาพปัญหา</b><p>' + esc(trim(c.problem, 300)) + '</p></div><div><b>วิธีดำเนินการ</b><ol>' + c.steps.slice(0, 6).map(function (t) { return '<li>' + esc(trim(t, 90)) + '</li>'; }).join('') + '</ol></div></div>' +
        '<div class="sl-tri"><div><b>เป้าหมายเชิงปริมาณ</b><p>' + esc(trim(c.quant, 220)) + '</p></div><div><b>เป้าหมายเชิงคุณภาพ</b><p>' + esc(trim(c.qual, 220)) + '</p></div><div class="sl-result"><b>ผลที่เกิดขึ้น</b><p>' + esc(trim(c.result, 260)) + '</p></div></div></div>';
    } else {
      var vc = S.admin ? reportCode(fy) : null, target = vc ? vfUrl(vc.code) : siteUrl() + '#pa';
      body = '<div class="sl-end"><div><div class="sl-eb">ขอบคุณคณะกรรมการ</div><h1>ขอบคุณครับ</h1><p class="sl-txt">ดูหลักฐานทั้งหมด วิดีโอ และรายงานฉบับเต็มได้ที่เว็บแฟ้มผลงาน หรือสแกน QR</p>' + (vc ? '<p class="sl-small muted">รหัสตรวจสอบเอกสาร <span class="mono">' + esc(vc.code) + '</span></p>' : '<p class="sl-small muted mono">' + esc(siteUrl()) + '</p>') + '</div><div class="sl-qr">' + qrSvg(target, 260, 'QR แฟ้มผลงาน') + '</div></div>';
    }
    var jump = '<select class="inp pres-jump" id="pres-jump" aria-label="ไปที่สไลด์">' + sl.map(function (x, j) { var t = presTitle(x); return '<option value="' + j + '"' + (j === i ? ' selected' : '') + '>' + (j + 1) + '. ' + esc(trim(t, 40)) + '</option>'; }).join('') + '</select>';
    var dots = sl.map(function (x, j) { return '<button class="pdot' + (j === i ? ' on' : '') + '" data-act="pres-go" data-i="' + j + '" aria-label="สไลด์ ' + (j + 1) + '"></button>'; }).join('');
    return '<div class="pres"><div class="pres-top"><b>' + ic('slides', 18) + ' โหมดนำเสนอ</b><span class="small" style="opacity:.8">' + period + '</span><span class="sp"></span>' + jump +
      '<button class="btn on-dark" data-act="pres-fs">' + ic('ext', 16) + ' เต็มจอ</button><a class="btn on-dark" href="#' + exit + '">' + ic('x', 16) + ' ออก</a></div>' +
      '<div class="pres-stage"><section class="slide" aria-roledescription="สไลด์" aria-label="' + esc((i + 1) + ' จาก ' + sl.length + ': ' + presTitle(sd)) + '"><div class="sl-in">' + body + '</div><span class="sl-no">' + (i + 1) + ' / ' + sl.length + '</span></section></div>' +
      '<div class="pres-bot"><button class="btn on-dark" data-act="pres-go" data-i="' + (i - 1) + '"' + (i === 0 ? ' disabled' : '') + '>' + ic('left', 16) + ' ก่อนหน้า</button><div class="pdots">' + dots + '</div><button class="btn light" data-act="pres-go" data-i="' + (i + 1) + '"' + (i === sl.length - 1 ? ' disabled' : '') + '>ถัดไป ' + ic('chev', 16) + '</button></div>' +
      '<p class="pres-hint">ใช้ปุ่มลูกศร ← → หรือ Space เพื่อเปลี่ยนสไลด์ · Esc เพื่อออก</p></div>';
  }
  function presGo(i) { var d = docsOf(reportFy()); if (!d) return; var n = presSlides(d).length; S.slide = Math.max(0, Math.min(n - 1, i)); render(); }

  /* ---------- เหตุการณ์ ---------- */
  document.addEventListener('click', function (e) {
    var el = e.target.closest ? e.target.closest('[data-act]') : null;
    if (!el) return;
    var act = el.getAttribute('data-act'), k = el.getAttribute('data-k');
    if ((act === 'open-work' || act === 'open-video') && !S.admin) beacon('hit', { k: act === 'open-work' ? 'w' : 'v', id: el.getAttribute('data-id') });
    switch (act) {
      case 'stat-range': S.statRange = +k; render(); break;
      case 'stat-mode': S.statMode = k; render(); break;
      case 'stat-reload': S.statsErr = ''; needStats(true); break;
      case 'stat-csv': statCsv(); break;
      case 'vf-reload': S.vflErr = ''; needVfl(true); break;
      case 'vf-issue':
        confirmBox('ออกรหัสตรวจสอบสำหรับรายงาน PA ปีงบ ' + S.fy + '?' + (reportCode(S.fy) ? ' รหัสเดิมของปีนี้จะถูกยกเลิก' : '') + ' ระบบจะบันทึกสรุปข้อมูลแฟ้ม ณ วันนี้ไว้ใช้เทียบ', 'ออกรหัส', function () {
          var old = reportCode(S.fy);
          vfCall('issueReport', { fy: S.fy }, 'ออกรหัสแล้ว พิมพ์รายงานได้เลย', function (res) { if (old) vfCall('revokeReport', { code: old.code, revoked: true }, ''); });
        });
        break;
      case 'vf-qr': if (k) qrModal(k, el.getAttribute('data-t') || 'รายงาน PA'); break;
      case 'qr-dl': if (S.qrCode) qrDownload(S.qrCode); break;
      case 'copy-vf': if (S.qrCode) copyText(vfUrl(S.qrCode), 'คัดลอกลิงก์ตรวจสอบแล้ว'); break;
      case 'vf-revoke': var on = el.getAttribute('data-on') === '1'; confirmBox(on ? 'ยกเลิกรหัส ' + esc(k) + '? ผู้ที่สแกนจะเห็นว่ารหัสนี้ถูกยกเลิก' : 'ใช้งานรหัส ' + esc(k) + ' อีกครั้ง?', on ? 'ยกเลิกรหัส' : 'ใช้งาน', function () { vfCall('revokeReport', { code: k, revoked: on }, on ? 'ยกเลิกรหัสแล้ว' : 'ใช้งานรหัสแล้ว'); }, on); break;
      case 'pres-go': if (!el.disabled) presGo(+el.getAttribute('data-i')); break;
      case 'pres-fs':
        var de = document.documentElement;
        if (document.fullscreenElement) { if (document.exitFullscreen) document.exitFullscreen(); }
        else if (de.requestFullscreen) de.requestFullscreen().catch(function () { toast('เบราว์เซอร์นี้เปิดเต็มจอไม่ได้ กด F11 แทน'); });
        else toast('เบราว์เซอร์นี้เปิดเต็มจอไม่ได้ กด F11 แทน');
        break;
    }
  });
  document.addEventListener('change', function (e) {
    var t = e.target; if (!t.getAttribute) return;
    if (t.id === 'pres-jump') presGo(+t.value);
    if (t.id === 'vf-file' && t.files && t.files[0]) {
      var f = t.files[0], code = route().slice(7).toUpperCase();
      sha256File(f, function (err, h) { S.vfCmp = { code: code, name: f.name, hash: h, err: err }; render(); });
    }
    var vc = t.getAttribute('data-vfhash');
    if (vc && t.files && t.files[0]) {
      var file = t.files[0];
      sha256File(file, function (err, h) { if (err) { toast(err); return; } vfCall('setVerifyHash', { code: vc, hash: h, name: file.name }, 'บันทึกลายนิ้วมือของไฟล์ “' + file.name + '” แล้ว'); });
    }
  });
  document.addEventListener('submit', function (e) {
    if (e.target.id !== 'vf-form') return;
    e.preventDefault();
    var c = String($('vf-code').value || '').toUpperCase().replace(/\s+/g, '').replace(/[^A-Z0-9-]/g, '');
    if (!c) { toast('กรุณากรอกรหัสตรวจสอบ'); return; }
    delete S.vfRes[c]; S.vfCmp = null; location.hash = 'verify-' + c;
  });
  document.addEventListener('keydown', function (e) {
    if (route() !== 'present' || $('modal-root') && $('modal-root').innerHTML) return;
    if (e.target && /INPUT|SELECT|TEXTAREA/.test(e.target.tagName)) return;
    if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'PageDown') { e.preventDefault(); presGo(S.slide + 1); }
    else if (e.key === 'ArrowLeft' || e.key === 'PageUp') { e.preventDefault(); presGo(S.slide - 1); }
    else if (e.key === 'Home') presGo(0);
    else if (e.key === 'Escape' && !document.fullscreenElement) location.hash = S.admin ? 'admin-pa' : 'pa';
  });

  /* =====================================================================
     เฟส 7: ปฏิทิน · LINE OA · ผู้ช่วย AI · สำรองข้อมูล · ความปลอดภัย (2FA)
     ===================================================================== */
  var CAL_T = { deadline: ['กำหนดส่ง', 'var(--bad)'], meeting: ['ประชุม', 'var(--s2)'], training: ['อบรม/พัฒนา', 'var(--s3)'], teach: ['การสอน/กิจกรรม', 'var(--accent)'], personal: ['ส่วนตัว', 'var(--muted)'], sys: ['จากระบบ', 'var(--ink)'] };
  var NOTIFY_T = { committee: ['กรรมการส่งผลประเมิน', 'ทันทีที่กรรมการแต่ละคนกดส่งผล'], request: ['กรรมการขอหลักฐานเพิ่ม', 'ทันทีที่กรรมการกดขอหลักฐานในหน้าประเมิน'], digest: ['สรุปประจำวัน 07:00 น.', 'กิจกรรมวันนี้ กำหนดส่งใกล้ถึง ผู้ตอบแบบประเมินใหม่ (ส่งเฉพาะวันที่มีเรื่อง)'], security: ['ความปลอดภัย', 'เข้าสู่ระบบจากอุปกรณ์ใหม่ ใส่รหัสผิดจนถูกล็อก เปิด/ปิด 2FA กู้คืนข้อมูล'], backup: ['สำรองข้อมูลไม่สำเร็จ', 'แจ้งเมื่อการสำรองอัตโนมัติมีปัญหา'] };
  var TH_WD = ['อา', 'จ', 'อ', 'พ', 'พฤ', 'ศ', 'ส'];
  S.calMonth = ''; S.cal = null; S.ops = null; S.bk = null; S.sec = null; S.aiUndo = null;

  function opsSum() { return (D.admin && D.admin.ops) || { ai: false, line: false, twofa: false, lastBackup: 0, cron: false }; }
  function todayIso() { var d = new Date(); return d.getFullYear() + '-' + ('0' + (d.getMonth() + 1)).slice(-2) + '-' + ('0' + d.getDate()).slice(-2); }
  function isoPlus(iso, n) { var p = iso.split('-'); return new Date(Date.UTC(+p[0], +p[1] - 1, +p[2]) + n * 864e5).toISOString().slice(0, 10); }
  function daysTo(iso) { var p = iso.split('-'), t = todayIso().split('-'); return Math.round((Date.UTC(+p[0], +p[1] - 1, +p[2]) - Date.UTC(+t[0], +t[1] - 1, +t[2])) / 864e5); }
  function adminCall(action, data, msg, cb, loader) {
    api(action, data, { loader: loader === undefined ? 'กำลังบันทึก' : loader, timeout: 90000 }, function (err, res) {
      if (err) { var fe = $('f-err'); if (fe) fe.innerHTML = '<div class="err">' + esc(err) + '</div>'; else toast(err); return; }
      if (cb) cb(res); if (msg) toast(msg);
    });
  }
  function dlBlob(text, name, type) {
    var a = document.createElement('a'); a.href = URL.createObjectURL(new Blob([text], { type: type })); a.download = name; document.body.appendChild(a); a.click();
    setTimeout(function () { URL.revokeObjectURL(a.href); document.body.removeChild(a); }, 500);
  }

  /* =====================================================================
     1) ปฏิทิน
     ===================================================================== */
  function sysEvents() {
    if (!S.admin) return [];
    var out = [], fy = S.fy, L = S.comList[fy], ev = (D.admin || {}).evalSum || {};
    (L ? L.list : []).forEach(function (c) { if (c.due && c.score.status !== 'submitted') out.push({ id: 'sys-c' + c.id, date: c.due, title: 'ครบกำหนดกรรมการส่งผล: ' + c.name, type: 'sys', href: 'admin-committee' }); });
    (ev.survey || []).forEach(function (r) { if (r.isOpen && r.closeAt) out.push({ id: 'sys-s' + r.id, date: r.closeAt, title: 'ปิดรับแบบประเมิน ' + r.label, type: 'sys', href: 'admin-survey' }); });
    out.push({ id: 'sys-r1', date: (fy - 543) + '-03-31', title: 'สิ้นรอบเลื่อนเงินเดือน รอบ 1', type: 'sys', href: 'admin-salary' });
    out.push({ id: 'sys-r2', date: (fy - 543) + '-09-30', title: 'สิ้นปีงบ ' + fy + ' · สิ้นรอบ PA และเลื่อนเงินเดือน รอบ 2', type: 'sys', href: 'admin-pa' });
    return out;
  }
  function calEvents() { return (S.admin ? (S.cal ? S.cal.list : []) : (D.events || [])).concat(sysEvents()); }
  function onDay(e, iso) { return e.date <= iso && (e.end || e.date) >= iso; }
  function evChip(e) {
    var t = CAL_T[e.type] || CAL_T.teach;
    return '<button class="pc-ev' + (e.done ? ' done' : '') + (e.type === 'sys' ? ' sys' : '') + '" style="--c:' + t[1] + '" data-act="cal-open" data-id="' + esc(e.id) + '" title="' + esc(e.title) + '">' + (e.time ? '<b>' + esc(e.time.split('-')[0]) + '</b> ' : '') + esc(e.title) + '</button>';
  }
  function monthGrid(evs) {
    if (!S.calMonth) S.calMonth = todayIso().slice(0, 7);
    var p = S.calMonth.split('-'), y = +p[0], m = +p[1] - 1, first = new Date(y, m, 1).getDay(), n = new Date(y, m + 1, 0).getDate(), today = todayIso(), cells = '';
    for (var i = 0; i < first; i++) cells += '<div class="pc-d out"></div>';
    for (var d = 1; d <= n; d++) {
      var iso = S.calMonth + '-' + ('0' + d).slice(-2), list = evs.filter(function (e) { return onDay(e, iso); });
      cells += '<div class="pc-d' + (iso === today ? ' today' : '') + (list.length ? ' has' : '') + '"' + (S.admin ? ' data-act="cal-new" data-k="' + iso + '"' : '') + '><span class="pc-n">' + d + '</span>' + list.slice(0, 3).map(evChip).join('') + (list.length > 3 ? '<span class="pc-more">+' + (list.length - 3) + '</span>' : '') + '</div>';
    }
    while ((first + n) % 7) { cells += '<div class="pc-d out"></div>'; n++; }
    return '<div class="pc-bar"><button class="btn icon" data-act="cal-mon" data-k="-1" aria-label="เดือนก่อน">' + ic('left', 16) + '</button><h3>' + TH_MF[m] + ' ' + (y + 543) + '</h3><button class="btn icon" data-act="cal-mon" data-k="1" aria-label="เดือนถัดไป">' + ic('chev', 16) + '</button><button class="btn sm" data-act="cal-mon" data-k="0">วันนี้</button><span class="sp"></span>' +
      '<div class="pc-leg">' + Object.keys(CAL_T).filter(function (k) { return S.admin || k !== 'sys' && k !== 'personal'; }).map(function (k) { return '<span><i style="background:' + CAL_T[k][1] + '"></i>' + CAL_T[k][0] + '</span>'; }).join('') + '</div></div>' +
      '<div class="pc-grid" role="grid">' + TH_WD.map(function (w) { return '<div class="pc-h">' + w + '</div>'; }).join('') + cells + '</div>';
  }
  function upcoming(evs, days) {
    var t = todayIso(), lim = isoPlus(t, days), list = evs.filter(function (e) { return (e.end || e.date) >= t && e.date <= lim && !e.done; }).sort(function (a, b) { return a.date < b.date ? -1 : a.date > b.date ? 1 : 0; });
    if (!list.length) return '<p class="small muted">ไม่มีกิจกรรมใน ' + days + ' วันข้างหน้า</p>';
    return '<div class="pc-up">' + list.map(function (e) {
      var t2 = CAL_T[e.type] || CAL_T.teach, dd = daysTo(e.date), p = e.date.split('-');
      return '<button class="pc-row" data-act="cal-open" data-id="' + esc(e.id) + '"><span class="pc-date" style="--c:' + t2[1] + '"><b>' + (+p[2]) + '</b>' + TH_M[+p[1] - 1] + '</span><span style="flex:1;min-width:0"><b>' + esc(e.title) + '</b><span class="small muted">' + t2[0] + (e.time ? ' · ' + esc(e.time) + ' น.' : '') + (e.end ? ' · ถึง ' + fd(e.end) : '') + '</span></span><span class="small ' + (dd <= 3 ? 'warn-t' : 'muted') + '">' + (dd <= 0 ? 'วันนี้' : dd === 1 ? 'พรุ่งนี้' : 'อีก ' + dd + ' วัน') + '</span></button>';
    }).join('') + '</div>';
  }
  function pCalendar() {
    var evs = calEvents();
    return pub('calendar', '<div class="sec-h"><div><span class="eyebrow">' + esc(st().name) + '</span><h1>ปฏิทินกิจกรรม</h1><p class="muted">การอบรม กิจกรรมการสอน และงานสำคัญที่เปิดเผยต่อสาธารณะ</p></div></div>' +
      '<div class="pc-layout"><div class="card">' + monthGrid(evs) + '</div><aside class="card"><h3>กำลังจะมาถึง</h3>' + upcoming(evs, 60) + '</aside></div>');
  }
  function needCal(force) {
    if ((S.cal && !force) || S.calLoading) return; S.calLoading = true;
    api('calList', {}, { loader: false }, function (err, res) { S.calLoading = false; if (err) { toast(err); return; } S.cal = res; if (route() === 'admin-calendar') render(); });
  }
  function aCalendar() {
    if (!S.cal) { needCal(); return adminShell('admin-calendar', 'ปฏิทิน', 'กำลังโหลด', '', '<div class="card"><div class="sk" style="height:320px"></div></div>'); }
    if (!S.comList[S.fy]) needComList(S.fy);
    var evs = calEvents();
    return adminShell('admin-calendar', 'ปฏิทิน', 'กดวันในปฏิทินเพื่อเพิ่มกิจกรรม · ตั้งเตือนล่วงหน้าได้ ระบบสรุปส่งทาง LINE ทุกเช้า 07:00 น. · รายการ “จากระบบ” ดึงจากกรรมการ แบบประเมิน และรอบเลื่อนเงินเดือนให้อัตโนมัติ',
      '<a class="btn" href="#calendar">' + ic('eye', 16) + ' ดูแบบสาธารณะ</a><button class="btn primary" data-act="cal-new" data-k="">' + ic('plus', 16) + ' เพิ่มกิจกรรม</button>',
      (opsSum().line ? '' : '<div class="note">' + ic('bell', 15) + ' ยังไม่ได้เชื่อม LINE OA การเตือนล่วงหน้าจะยังไม่ส่ง <a href="#admin-ops">ตั้งค่าการเชื่อมต่อ</a></div>') +
      '<div class="pc-layout" style="margin-top:12px"><div class="card">' + monthGrid(evs) + '</div><aside class="card"><h3>30 วันข้างหน้า</h3>' + upcoming(evs, 30) + '</aside></div>');
  }
  function calFind(id) { return find(calEvents(), 'id', id); }
  function gcalLink(e) {
    var s = e.date.replace(/-/g, ''), en = isoPlus(e.end || e.date, 1).replace(/-/g, '');
    return 'https://calendar.google.com/calendar/render?action=TEMPLATE&text=' + encodeURIComponent(e.title) + '&dates=' + s + '/' + en + '&details=' + encodeURIComponent((e.time ? 'เวลา ' + e.time + ' น.\n' : '') + (e.note || ''));
  }
  function icsOf(e) {
    var s = e.date.replace(/-/g, ''), en = isoPlus(e.end || e.date, 1).replace(/-/g, ''), stamp = new Date().toISOString().replace(/[-:]/g, '').slice(0, 15) + 'Z';
    function q(t) { return String(t || '').replace(/\\/g, '\\\\').replace(/;/g, '\\;').replace(/,/g, '\\,').replace(/\n/g, '\\n'); }
    return ['BEGIN:VCALENDAR', 'VERSION:2.0', 'PRODID:-//WEBPA//TH', 'BEGIN:VEVENT', 'UID:' + e.id + '@webpa', 'DTSTAMP:' + stamp, 'DTSTART;VALUE=DATE:' + s, 'DTEND;VALUE=DATE:' + en, 'SUMMARY:' + q(e.title), 'DESCRIPTION:' + q((e.time ? 'เวลา ' + e.time + ' น. ' : '') + (e.note || '')), 'END:VEVENT', 'END:VCALENDAR'].join('\r\n');
  }
  function calOpen(id) {
    var e = calFind(id); if (!e) return;
    if (e.type === 'sys') { location.hash = e.href; return; }
    var t = CAL_T[e.type] || CAL_T.teach;
    openModal(esc(e.title), '<dl class="kvlist small"><dt>วันที่</dt><dd>' + fd(e.date) + (e.end ? ' – ' + fd(e.end) : '') + '</dd>' + (e.time ? '<dt>เวลา</dt><dd>' + esc(e.time) + ' น.</dd>' : '') + '<dt>ประเภท</dt><dd><span class="pill" style="background:color-mix(in srgb,' + t[1] + ' 14%,transparent);color:inherit">' + t[0] + '</span></dd>' +
      (e.note ? '<dt>รายละเอียด</dt><dd style="white-space:pre-wrap">' + esc(e.note) + '</dd>' : '') + (S.admin ? '<dt>การเปิดเผย</dt><dd>' + (e.vis === 'public' ? 'สาธารณะ' : 'ส่วนตัว') + '</dd><dt>เตือนล่วงหน้า</dt><dd>' + (e.remind === '' ? 'ไม่เตือน' : e.remind ? e.remind + ' วัน' : 'วันงาน') + '</dd>' : '') + '</dl>',
      '<a class="btn" href="' + esc(gcalLink(e)) + '" target="_blank" rel="noopener">' + ic('cal', 16) + ' Google Calendar</a><button class="btn" data-act="cal-ics" data-id="' + esc(e.id) + '">' + ic('download', 16) + ' ไฟล์ .ics</button>' +
      (S.admin ? '<button class="btn danger" data-act="cal-del" data-id="' + esc(e.id) + '">' + ic('trash', 16) + ' ลบ</button><button class="btn primary" data-act="cal-edit" data-id="' + esc(e.id) + '">' + ic('edit', 16) + ' แก้ไข</button>' : ''));
  }
  function calForm(e) {
    e = e || { id: '', date: todayIso(), end: '', time: '', title: '', type: 'teach', note: '', vis: 'private', remind: 1, done: false };
    S.calEdit = e.id;
    openModal(e.id ? 'แก้ไขกิจกรรม' : 'เพิ่มกิจกรรม',
      '<div class="field"><label for="cf-title">ชื่อกิจกรรม</label><input id="cf-title" class="inp" maxlength="150" value="' + esc(e.title) + '" placeholder="เช่น ส่งแผนการจัดการเรียนรู้"></div>' +
      '<div class="grid3"><div class="field"><label for="cf-date">วันที่</label><input id="cf-date" type="date" class="inp" value="' + esc(e.date) + '"></div><div class="field"><label for="cf-end">ถึงวันที่ (ถ้าหลายวัน)</label><input id="cf-end" type="date" class="inp" value="' + esc(e.end) + '"></div><div class="field"><label for="cf-time">เวลา</label><input id="cf-time" class="inp" value="' + esc(e.time) + '" placeholder="09:00-12:00"></div></div>' +
      '<div class="grid3"><div class="field"><label for="cf-type">ประเภท</label><select id="cf-type" class="inp">' + Object.keys(CAL_T).filter(function (k) { return k !== 'sys'; }).map(function (k) { return '<option value="' + k + '"' + (e.type === k ? ' selected' : '') + '>' + CAL_T[k][0] + '</option>'; }).join('') + '</select></div>' +
      '<div class="field"><label for="cf-remind">เตือนทาง LINE</label><select id="cf-remind" class="inp">' + [['', 'ไม่เตือน'], [0, 'เช้าวันงาน'], [1, 'ล่วงหน้า 1 วัน'], [3, 'ล่วงหน้า 3 วัน'], [7, 'ล่วงหน้า 7 วัน'], [14, 'ล่วงหน้า 14 วัน']].map(function (o) { return '<option value="' + o[0] + '"' + (String(e.remind) === String(o[0]) ? ' selected' : '') + '>' + o[1] + '</option>'; }).join('') + '</select></div>' +
      '<div class="field"><label for="cf-vis">การเปิดเผย</label><select id="cf-vis" class="inp"><option value="private"' + (e.vis !== 'public' ? ' selected' : '') + '>ส่วนตัว</option><option value="public"' + (e.vis === 'public' ? ' selected' : '') + '>สาธารณะ</option></select></div></div>' +
      '<div class="field"><label for="cf-note">รายละเอียด</label><textarea id="cf-note" class="inp" rows="3" maxlength="500">' + esc(e.note) + '</textarea></div>' + (e.id ? chk('cf-done', e.done, 'ทำเสร็จแล้ว (ไม่เตือนอีก)') : '') + '<div id="f-err"></div>',
      '<button class="btn" data-act="close-modal">ยกเลิก</button><button class="btn primary" data-act="cal-save">' + ic('check', 16) + ' บันทึก</button>');
  }

  /* =====================================================================
     2) การเชื่อมต่อ: LINE OA · ผู้ช่วย AI · งานอัตโนมัติ
     ===================================================================== */
  function needOps(force) {
    if ((S.ops && !force) || S.opsLoading) return; S.opsLoading = true;
    api('opsGet', {}, { loader: false }, function (err, res) { S.opsLoading = false; if (err) { toast(err); return; } setOps(res); if (route() === 'admin-ops') render(); });
  }
  function setOps(res) {
    S.ops = res; var o = opsSum();
    o.line = !!(res.line.token && res.line.to); o.ai = !!(res.ai.any || res.ai.key); o.cron = !!res.cron.on;
    if (D.admin) D.admin.ops = o;
  }
  /* ผู้ให้บริการ AI ที่รองรับ (key เก็บที่ฝั่ง GAS ไม่ส่งกลับมาที่หน้าเว็บ) */
  var AIP = {
    gemini: { c: '#1a73e8', ph: 'AQ.… (หรือ AIza…) จาก Google AI Studio', url: 'https://aistudio.google.com/apikey', site: 'Google AI Studio', note: 'มีโควตาใช้ฟรีรายวัน เหมาะเป็นเจ้าหลัก' },
    claude: { c: '#d97757', ph: 'sk-ant-… จาก Claude Console', url: 'https://console.anthropic.com/settings/keys', site: 'Claude Console (Anthropic)', note: 'เขียนภาษาไทยเป็นธรรมชาติ ต้องเติมเครดิตก่อนใช้' },
    grok: { c: '#111111', ph: 'xai-… จาก xAI Console', url: 'https://console.x.ai', site: 'xAI Console', note: 'ต้องเติมเครดิตก่อนใช้' },
    openai: { c: '#10a37f', ph: 'sk-… จาก OpenAI Platform', url: 'https://platform.openai.com/api-keys', site: 'OpenAI Platform', note: 'ต้องเติมเครดิตก่อนใช้' }
  };
  function aiCard(o) {
    var A = o.ai, cfg = o.cfg, provs = A.provs || [], v = S.aiView && find(provs, 'id', S.aiView) ? S.aiView : cfg.aiProvider || 'gemini', P = find(provs, 'id', v) || { id: v, name: v, key: '', model: '', models: [] }, I = AIP[v];
    var any = provs.some(function (x) { return x.key; }), main = find(provs, 'id', cfg.aiProvider) || {};
    var tabs = '<div class="seg ai-prov" role="tablist" aria-label="ผู้ให้บริการ AI">' + provs.map(function (x) { return '<button type="button" role="tab" aria-selected="' + (x.id === v) + '" data-act="op-ai-view" data-k="' + x.id + '" class="' + (x.id === v ? 'on' : '') + '"><i style="background:' + AIP[x.id].c + '"></i>' + esc(x.name) + (x.id === cfg.aiProvider ? ' ★' : '') + (x.key ? ' ✓' : '') + '</button>'; }).join('') + '</div>';
    var avail = o.available && o.testProv === v ? o.available : [], opts = P.models.concat(avail.filter(function (m) { return P.models.indexOf(m) < 0; }));
    var body = '<div class="grid2"><div class="field"><label for="op-akey">' + esc(P.name) + ' API key</label><input id="op-akey" type="password" class="inp mono" autocomplete="off" placeholder="' + (P.key ? 'บันทึกไว้แล้ว ' + esc(P.key) + ' · ใส่ใหม่เพื่อเปลี่ยน' : esc(I.ph)) + '"></div>' +
      '<div class="field"><label for="op-amodel">รุ่น AI</label><input id="op-amodel" class="inp mono" list="op-amodels" value="' + esc(P.model) + '" maxlength="60" autocomplete="off"><datalist id="op-amodels">' + opts.map(function (m) { return '<option value="' + esc(m) + '">'; }).join('') + '</datalist><span class="hint">เลือกจากรายการ หรือพิมพ์ชื่อรุ่นใหม่ได้ · กด “ทดสอบ” เพื่อดูรุ่นที่ key นี้ใช้ได้</span></div></div>' +
      (avail.length || (o.available && o.testProv === v) ? '<p class="small">' + (o.ok ? '<span class="pill good">รุ่นที่เลือกใช้ได้</span>' : '<span class="pill warn">รุ่นที่เลือกไม่อยู่ในรายการ</span>') + ' รุ่นที่บัญชีนี้ใช้ได้: ' + (avail.length ? avail.map(function (m) { return '<button class="chip" data-act="op-ai-pick" data-k="' + esc(m) + '">' + esc(m) + '</button>'; }).join(' ') : '-') + '</p>' : '') +
      chk('op-amain', v === cfg.aiProvider, 'ใช้ ' + esc(P.name) + ' เป็นผู้ช่วยหลัก') + chk('op-afb', cfg.aiFallback !== false, 'สำรองอัตโนมัติ: ถ้าเจ้าหลักใช้ไม่ได้ (โควตาเต็ม ขัดข้อง) ให้ลองเจ้าอื่นที่ใส่ key ไว้') +
      '<div class="row" style="gap:6px"><button class="btn primary" data-act="op-save-ai">' + ic('check', 16) + ' บันทึก</button><button class="btn" data-act="op-ai-test" data-k="' + v + '"' + (P.key ? '' : ' disabled') + '>' + ic('search', 16) + ' ทดสอบ</button>' + (P.key ? '<button class="btn danger" data-act="op-clear" data-k="ai-' + v + '">ลบ key</button>' : '') + '</div>' +
      '<details class="howto"><summary>วิธีขอ ' + esc(P.name) + ' API key</summary><ol><li>เข้า <a href="' + I.url + '" target="_blank" rel="noopener">' + esc(I.site) + '</a> แล้วสร้าง API key (' + esc(I.note) + ')</li><li>คัดลอก key มาวาง กดบันทึก แล้วกดทดสอบ</li><li>ระบบส่งให้ AI เฉพาะข้อความในแฟ้มที่ครูเขียนและตัวเลขสรุป ไม่ส่งชื่อนักเรียน และสั่งให้เว้นตัวเลขที่ไม่รู้เป็น [ตัวเลข]</li></ol></details>';
    return '<div class="card ops-card"><div class="ops-h"><span class="ops-ic" style="--c:var(--s1)">' + ic('spark', 20) + '</span><div style="flex:1"><h3>ผู้ช่วยเขียนด้วย AI</h3><span class="small muted">Gemini · Claude · Grok · ChatGPT · ผู้ช่วยหลักตอนนี้: <b>' + esc(main.name || '-') + '</b> ' + esc(main.model || '') + ' · ใช้วันนี้ ' + A.today + '/' + A.max + ' ครั้ง</span></div>' + (main.key ? '<span class="pill good">พร้อมใช้</span>' : (any ? '<span class="pill warn">เจ้าหลักยังไม่มี key</span>' : '<span class="pill off">ยังไม่ตั้งค่า</span>')) + '</div>' + tabs + body +
      (any ? '<div class="field" style="margin-top:6px"><label for="op-polish">ลองเกลาข้อความ</label><textarea id="op-polish" class="inp" rows="3" maxlength="3000" placeholder="วางข้อความที่อยากให้เป็นภาษาราชการ"></textarea></div><div class="row"><button class="btn" data-act="op-polish">' + ic('spark', 16) + ' เกลาภาษา</button></div><div id="op-polish-out"></div>' : '') + '</div>';
  }
  function aOps() {
    if (!S.ops) { needOps(); return adminShell('admin-ops', 'การเชื่อมต่อ', 'กำลังโหลด', '', '<div class="card"><div class="sk" style="height:300px"></div></div>'); }
    var o = S.ops, L = o.line, A = o.ai, cfg = o.cfg, lineOk = !!(L.token && L.to);
    var line = '<div class="card ops-card"><div class="ops-h"><span class="ops-ic" style="--c:#06c755">' + ic('chat', 20) + '</span><div style="flex:1"><h3>LINE OA แจ้งเตือน</h3><span class="small muted">ส่งข้อความหาครูผ่าน Messaging API · ส่งเดือนนี้แล้ว ' + L.month + ' ข้อความ (แพ็กเกจฟรีส่งได้จำกัดต่อเดือน)</span></div>' + (lineOk ? '<span class="pill good">เชื่อมแล้ว</span>' : '<span class="pill off">ยังไม่เชื่อม</span>') + '</div>' +
      '<div class="grid2"><div class="field"><label for="op-ltok">Channel access token (long-lived)</label><input id="op-ltok" type="password" class="inp mono" autocomplete="off" placeholder="' + (L.token ? 'บันทึกไว้แล้ว ' + esc(L.token) + ' · ใส่ใหม่เพื่อเปลี่ยน' : 'วางจาก LINE Developers') + '"></div>' +
      '<div class="field"><label for="op-lto">ผู้รับ (User ID หรือ Group ID)</label><input id="op-lto" class="inp mono" autocomplete="off" placeholder="' + (L.to ? esc(L.toName) + ' ' + esc(L.to) : 'U… ของครู หรือผูกด้วยรหัสด้านล่าง') + '"></div></div>' +
      '<div class="row" style="gap:6px"><button class="btn primary" data-act="op-save-line">' + ic('check', 16) + ' บันทึก</button><button class="btn" data-act="op-line-test"' + (lineOk ? '' : ' disabled') + '>' + ic('bell', 16) + ' ส่งข้อความทดสอบ</button><button class="btn" data-act="op-line-bind"' + (L.token ? '' : ' disabled') + '>' + ic('link', 16) + ' ผูกกับกลุ่ม LINE ด้วยรหัส</button>' + (L.token || L.to ? '<button class="btn danger" data-act="op-clear" data-k="line">ลบการตั้งค่า</button>' : '') + '</div><div id="op-bind"></div>' +
      '<details class="howto"><summary>วิธีตั้งค่า LINE OA (ทำครั้งเดียว ประมาณ 10 นาที)</summary><ol>' +
      '<li>เข้า <a href="https://developers.line.biz/console/" target="_blank" rel="noopener">LINE Developers Console</a> ด้วยบัญชี LINE ของครู สร้าง Provider แล้วสร้าง Channel ประเภท <b>Messaging API</b> (ได้ LINE OA มาพร้อมกัน)</li>' +
      '<li>แท็บ <b>Messaging API</b> → Channel access token (long-lived) กด Issue แล้วคัดลอกมาวางช่องแรก</li>' +
      '<li>แท็บ <b>Basic settings</b> → เลื่อนลงหา <b>Your user ID</b> (ขึ้นต้นด้วย U) คัดลอกมาวางช่องผู้รับ แล้วสแกน QR ของ OA เพิ่มเป็นเพื่อน</li>' +
      '<li>กด “บันทึก” แล้ว “ส่งข้อความทดสอบ” ถ้าได้รับข้อความในแชต OA แปลว่าใช้ได้</li>' +
      '<li>ถ้าต้องการให้แจ้งในกลุ่ม: ตั้ง Webhook URL ในแท็บ Messaging API เป็น <span class="mono small" style="word-break:break-all">' + esc(GAS_URL) + '</span> เปิด Use webhook เชิญ OA เข้ากลุ่ม แล้วกด “ผูกกับกลุ่ม LINE ด้วยรหัส” (ปุ่ม Verify ของ LINE อาจขึ้นว่าไม่สำเร็จเพราะ Apps Script ตอบแบบเปลี่ยนเส้นทาง แต่การผูกยังใช้ได้)</li></ol></details></div>';
    var notify = '<div class="card ops-card"><h3>เรื่องที่จะแจ้งเตือน</h3><div class="ops-list">' + Object.keys(NOTIFY_T).map(function (k) { return '<label class="ops-tg"><input type="checkbox" data-notify="' + k + '"' + (cfg.notify[k] ? ' checked' : '') + '><span><b>' + NOTIFY_T[k][0] + '</b><span class="small muted">' + NOTIFY_T[k][1] + '</span></span></label>'; }).join('') + '</div></div>';
    var cron = '<div class="card ops-card"><div class="ops-h"><span class="ops-ic" style="--c:var(--accent)">' + ic('refresh', 20) + '</span><div style="flex:1"><h3>งานอัตโนมัติประจำวัน 07:00 น.</h3><span class="small muted">สำรองข้อมูลทุกสัปดาห์ · ส่งสรุปทาง LINE · ล้างการเข้าระบบที่หมดอายุ · เก็บบันทึกการใช้งานล่าสุด 5,000 แถว</span></div>' + (o.cron.on ? '<span class="pill good">เปิดอยู่</span>' : '<span class="pill warn">ยังไม่เปิด</span>') + '</div>' +
      (o.cron.last ? '<p class="small">ทำงานล่าสุด ' + fdt(o.cron.last) + ' · ' + esc(o.cron.msg) + '</p>' : '<p class="small muted">ยังไม่เคยทำงาน</p>') +
      '<div class="row"><button class="btn ' + (o.cron.on ? '' : 'primary') + '" data-act="op-cron" data-k="' + (o.cron.on ? '0' : '1') + '">' + (o.cron.on ? 'ปิดงานอัตโนมัติ' : ic('check', 16) + ' เปิดงานอัตโนมัติ') + '</button></div></div>';
    var ai = aiCard(o);
    return adminShell('admin-ops', 'การเชื่อมต่อ', 'LINE OA สำหรับแจ้งเตือน · ผู้ช่วย AI · งานอัตโนมัติ · token และ key เก็บใน Script Properties ไม่แสดงกลับมาที่หน้าเว็บ', '', '<div class="ops-grid">' + line + notify + cron + ai + '</div>');
  }

  /* ---------- ผู้ช่วย AI ในหน้าแก้ไขแฟ้ม ---------- */
  function aiStrip(kind, code) {
    if (!opsSum().ai) return '<div class="ai-strip off">' + ic('spark', 15) + ' <span class="small">มีผู้ช่วย AI ช่วยร่างข้อความ</span> <a class="small" href="#admin-ops" data-act="close-modal">ตั้งค่า</a></div>';
    return '<div class="ai-strip">' + ic('spark', 15) + '<input id="ai-extra" class="inp" maxlength="600" placeholder="ข้อมูลเพิ่มเติมให้ AI เช่น ชั้น ป.5 เรื่องเศษส่วน (ไม่ใส่ชื่อนักเรียน)"><button class="btn sm primary" data-act="ai-run" data-k="' + kind + '" data-code="' + (code || '') + '">' + ic('spark', 14) + ' ร่าง/ปรับให้</button><button class="btn sm" data-act="ai-undo" id="ai-undo" hidden>ย้อนกลับ</button><span class="small muted" id="ai-msg">AI จะปรับจากข้อความที่มีอยู่ ตรวจทานก่อนบันทึก</span></div>';
  }
  function aiFill(map) {
    S.aiUndo = {}; Object.keys(map).forEach(function (id) { var el = $(id); if (el && map[id] != null) { S.aiUndo[id] = el.value; el.value = map[id]; el.classList.add('ai-new'); } });
    var u = $('ai-undo'); if (u) u.hidden = false;
  }
  function aiRun(kind, code, btn) {
    var extra = ($('ai-extra') || {}).value || '', msg = $('ai-msg'), ctx;
    if (kind === 'ind') ctx = { code: code, name: indName(code), cur: { task: $('pe-task').value, out: $('pe-out').value, kpi: $('pe-kpi').value }, ev: evidenceOf(code, S.fy).map(function (e) { return e.title; }), extra: extra };
    else ctx = { cur: { title: $('ch-title').value, problem: $('ch-problem').value, steps: $('ch-steps').value.split('\n'), quant: $('ch-quant').value, qual: $('ch-qual').value }, extra: extra };
    if (btn) btn.disabled = true; if (msg) msg.textContent = 'กำลังให้ AI เขียน ประมาณ 5–20 วินาที…';
    api('aiWrite', { task: kind, ctx: ctx }, { loader: false, timeout: 90000 }, function (err, res) {
      if (btn) btn.disabled = false;
      if (err) { if (msg) msg.innerHTML = '<span style="color:var(--bad)">' + esc(err) + '</span>'; return; }
      var d = res.data || {};
      if (kind === 'ind') aiFill({ 'pe-task': d.task, 'pe-out': d.out, 'pe-kpi': d.kpi });
      else aiFill({ 'ch-title': d.title, 'ch-problem': d.problem, 'ch-steps': d.steps ? [].concat(d.steps).join('\n') : null, 'ch-quant': d.quant, 'ch-qual': d.qual });
      if (msg) msg.textContent = 'ใส่ข้อความจาก AI แล้ว (' + (res.provName ? res.provName + ' ' : '') + res.model + (res.fallback ? ' · สำรอง' : '') + ' · เหลือ ' + res.left + ' ครั้งวันนี้) ตรวจทานและเติม [ตัวเลข] ก่อนกดบันทึก';
    });
  }
  function aiSurvey() {
    var r = svRoundOf(S.svSel), t = S.sv && S.sv.stats; if (!r || !t || !t.n) { toast('ยังไม่มีคำตอบให้สรุป'); return; }
    var cm = S.sv.resp.filter(function (x) { return !x.hidden && x.comment; }).map(function (x) { return x.comment; });
    api('aiWrite', { task: 'survey', ctx: { label: r.label, items: r.items, per: t.per, n: t.n, comments: cm } }, { loader: 'AI กำลังสรุปผล', timeout: 90000 }, function (err, res) {
      if (err) { toast(err); return; }
      S.aiText = res.text;
      openModal('สรุปผลแบบประเมินด้วย AI', '<div class="ai-out">' + esc(res.text) + '</div><p class="small muted">' + esc((res.provName ? res.provName + ' ' : '') + res.model) + ' · ตรวจทานก่อนนำไปใช้ · เหลือ ' + res.left + ' ครั้งวันนี้</p>', '<button class="btn" data-act="close-modal">ปิด</button><button class="btn primary" data-act="ai-copy">' + ic('copy', 16) + ' คัดลอก</button>', true);
    });
  }

  /* =====================================================================
     3) สำรองข้อมูล
     ===================================================================== */
  function needBk(force) {
    if ((S.bk && !force) || S.bkLoading) return; S.bkLoading = true;
    api('backupInfo', {}, { loader: false }, function (err, res) { S.bkLoading = false; if (err) { toast(err); return; } setBk(res); if (route() === 'admin-backup') render(); });
  }
  function setBk(res) { S.bk = res; if (D.admin && D.admin.ops && res.list.length) D.admin.ops.lastBackup = Date.now(); }
  function aBackup() {
    if (!S.bk) { needBk(); return adminShell('admin-backup', 'สำรองและกู้คืนข้อมูล', 'กำลังโหลด', '', '<div class="card"><div class="sk" style="height:260px"></div></div>'); }
    var b = S.bk, cfg = b.cfg;
    var rows = b.list.map(function (x, i) { return '<tr><td><b class="small">' + esc(x.name.replace('สำรอง_แฟ้มผลงาน_', '')) + '</b>' + (i === 0 ? ' <span class="pill good">ล่าสุด</span>' : '') + '</td><td class="small">' + fdt(x.at) + '</td><td><div class="row" style="gap:4px;flex-wrap:nowrap"><a class="btn sm" href="' + esc(x.url) + '" target="_blank" rel="noopener">' + ic('ext', 14) + ' เปิด</a><button class="btn sm" data-act="bk-restore" data-id="' + esc(x.id) + '" data-k="' + esc(x.name) + '">' + ic('refresh', 14) + ' กู้คืน</button></div></td></tr>'; }).join('');
    return adminShell('admin-backup', 'สำรองและกู้คืนข้อมูล', 'สำรองโดยคัดลอกสเปรดชีตทั้งไฟล์ไว้ในโฟลเดอร์ “สำรองข้อมูล” ใน Google Drive · ไฟล์รูปและเอกสารอยู่ใน Drive อยู่แล้ว',
      '<button class="btn" data-act="bk-export">' + ic('download', 16) + ' ส่งออก JSON</button><button class="btn primary" data-act="bk-run">' + ic('cloud', 16) + ' สำรองตอนนี้</button>',
      (b.db.restored ? '<div class="note warn-note">' + ic('refresh', 15) + ' ตอนนี้ใช้ฐานข้อมูลที่กู้คืนจาก ' + esc(b.db.from) + ' <button class="btn sm" data-act="bk-undo">กลับไปใช้ฐานข้อมูลเดิม</button></div>' : '') +
      '<div class="grid3"><div class="kpi' + (b.last ? '' : ' warn') + '"><span class="l">สำรองล่าสุด</span><span class="v" style="font-size:20px">' + (b.last ? fdt(b.last) : 'ยังไม่เคย') + '</span></div><div class="kpi"><span class="l">ไฟล์สำรองที่เก็บไว้</span><span class="v">' + b.list.length + ' / ' + cfg.backupKeep + '</span></div>' +
      '<div class="kpi' + (b.cron && cfg.backupAuto ? '' : ' warn') + '"><span class="l">สำรองอัตโนมัติ</span><span class="v" style="font-size:20px">' + (b.cron && cfg.backupAuto ? 'ทุก 7 วัน' : 'ปิดอยู่') + '</span>' + (b.cron ? '' : '<a class="small" href="#admin-ops">เปิดงานอัตโนมัติ</a>') + '</div></div>' +
      '<div class="card" style="margin-top:14px"><div class="sec-h"><h3>ไฟล์สำรอง</h3><a class="small" href="' + esc(b.db.url) + '" target="_blank" rel="noopener">' + ic('ext', 13) + ' เปิดฐานข้อมูลปัจจุบัน</a></div>' +
      (rows ? '<div class="tbl-wrap"><table class="tbl"><thead><tr><th>ชื่อ</th><th>เวลา</th><th></th></tr></thead><tbody>' + rows + '</tbody></table></div>' : '<p class="small muted">ยังไม่มีไฟล์สำรอง กด “สำรองตอนนี้”</p>') +
      '<p class="small muted" style="margin-top:8px">การกู้คืนไม่ลบอะไรทิ้ง: ระบบสำรองสภาพปัจจุบันก่อน แล้วสร้างสำเนาจากไฟล์ที่เลือกมาใช้เป็นฐานข้อมูลหลัก ถ้าไม่ถูกต้องกด “กลับไปใช้ฐานข้อมูลเดิม” ได้</p></div>' +
      '<div class="card" style="margin-top:14px;display:flex;flex-direction:column;gap:10px"><h3>ตัวเลือก</h3><div class="grid2">' + chk('bk-auto', cfg.backupAuto, 'สำรองอัตโนมัติทุก 7 วัน (ต้องเปิดงานอัตโนมัติ)') +
      '<div class="field"><label for="bk-keep">เก็บไฟล์สำรองล่าสุดกี่ไฟล์</label><input id="bk-keep" type="number" min="2" max="30" class="inp" value="' + cfg.backupKeep + '"></div></div><div class="row"><button class="btn" data-act="bk-cfg">' + ic('check', 16) + ' บันทึกตัวเลือก</button></div></div>');
  }

  /* =====================================================================
     4) ความปลอดภัย
     ===================================================================== */
  function needSec(force) {
    if ((S.sec && !force) || S.secLoading) return; S.secLoading = true;
    api('securityGet', {}, { loader: false }, function (err, res) { S.secLoading = false; if (err) { toast(err); return; } setSec(res); if (route() === 'admin-security') render(); });
  }
  function setSec(res) { S.sec = res; if (D.admin && D.admin.ops) D.admin.ops.twofa = res.twofa; }
  function aSecurity() {
    if (!S.sec) { needSec(); return adminShell('admin-security', 'ความปลอดภัย', 'กำลังตรวจ', '', '<div class="card"><div class="sk" style="height:300px"></div></div>'); }
    var s = S.sec, n = s.checks.length, pct = s.score / n;
    var ring = '<svg viewBox="0 0 120 120" width="120" height="120" role="img" aria-label="ผ่าน ' + s.score + ' จาก ' + n + ' ข้อ"><circle cx="60" cy="60" r="50" style="fill:none;stroke:var(--surface-2);stroke-width:12"/><circle cx="60" cy="60" r="50" style="fill:none;stroke:' + (pct >= 0.85 ? 'var(--good)' : pct >= 0.6 ? 'var(--warn)' : 'var(--bad)') + ';stroke-width:12;stroke-linecap:round" stroke-dasharray="' + (pct * 314.2).toFixed(1) + ' 400" transform="rotate(-90 60 60)"/><text x="60" y="66" text-anchor="middle" style="font-size:26px;font-weight:700;fill:var(--ink)">' + s.score + '/' + n + '</text></svg>';
    var fixLink = { pw: '#admin-settings', '2fa': '', share: '', backup: '#admin-backup', cron: '#admin-ops', alert: '#admin-ops', fails: '#admin-logs' };
    var checks = '<div class="sec-checks">' + s.checks.map(function (c) { return '<div class="sec-ck ' + (c.ok ? 'ok' : 'no') + '"><span class="sec-i">' + ic(c.ok ? 'check' : 'x', 14) + '</span><span style="flex:1"><b>' + esc(c.t) + '</b><span class="small muted">' + esc(c.v) + '</span></span>' + (!c.ok && fixLink[c.k] ? '<a class="btn sm" href="' + fixLink[c.k] + '">แก้ไข</a>' : '') + '</div>'; }).join('') + '</div>';
    var tfa = '<div class="card"><div class="ops-h"><span class="ops-ic" style="--c:var(--accent)">' + ic('shield', 20) + '</span><div style="flex:1"><h3>ยืนยันตัวตน 2 ขั้น (2FA)</h3><span class="small muted">นอกจากรหัสผ่าน ต้องใส่รหัส 6 หลักจากแอป Google Authenticator หรือ Microsoft Authenticator ในมือถือ</span></div>' + (s.twofa ? '<span class="pill good">เปิดอยู่</span>' : '<span class="pill warn">ปิดอยู่</span>') + '</div>' +
      (s.twofa ? '<div class="row"><button class="btn" data-act="tfa-codes">' + ic('refresh', 16) + ' สร้างรหัสสำรองชุดใหม่</button><button class="btn danger" data-act="tfa-off">ปิด 2FA</button></div>' : '<button class="btn primary" data-act="tfa-on">' + ic('shield', 16) + ' เปิดยืนยันตัวตน 2 ขั้น</button>') + '</div>';
    var sess = '<div class="card"><div class="sec-h"><h3>อุปกรณ์ที่เข้าระบบอยู่ (' + s.sessions.length + ')</h3>' + (s.sessions.length > 1 ? '<button class="btn sm danger" data-act="sess-all">ออกจากระบบเครื่องอื่นทั้งหมด</button>' : '') + '</div><div class="sess-list">' +
      s.sessions.map(function (x) { return '<div class="sess"><span class="ops-ic" style="--c:var(--muted)">' + ic(/มือถือ|Android|iPhone|iPad/i.test(x.dev) ? 'monitor' : 'monitor', 16) + '</span><span style="flex:1;min-width:0"><b class="small">' + esc(x.dev || 'ไม่ทราบอุปกรณ์') + '</b>' + (x.current ? ' <span class="pill good">เครื่องนี้</span>' : '') + '<span class="small muted">เข้าระบบ ' + fdt(x.at) + ' · หมดอายุ ' + fdt(x.exp) + '</span></span>' + (x.current ? '' : '<button class="btn sm" data-act="sess-kill" data-id="' + esc(x.id) + '">ออกจากระบบ</button>') + '</div>'; }).join('') + '</div>' +
      (s.comSessions ? '<p class="small muted" style="margin-top:8px">กรรมการเข้าระบบอยู่ ' + s.comSessions + ' รายการ (จัดการได้ที่หน้ากรรมการ ด้วยการออกรหัสใหม่)</p>' : '') + '</div>';
    var logins = '<div class="card"><h3>การเข้าสู่ระบบล่าสุด</h3><div class="tbl-wrap" style="margin-top:6px"><table class="tbl"><tbody>' + (s.logins.length ? s.logins.map(function (l) { var bad = /ไม่สำเร็จ/.test(l.action); return '<tr><td class="small" style="white-space:nowrap">' + fdt(l.at) + '</td><td>' + (bad ? '<span class="pill bad">' : '<span class="pill good">') + esc(l.action) + '</span></td><td class="small muted">' + esc(l.detail) + '</td></tr>'; }).join('') : '<tr><td class="muted">ยังไม่มี</td></tr>') + '</tbody></table></div></div>';
    return adminShell('admin-security', 'ความปลอดภัย', 'ตรวจการตั้งค่าที่สำคัญ · ยืนยันตัวตน 2 ขั้น · อุปกรณ์ที่เข้าระบบ', '<button class="btn" data-act="sec-reload">' + ic('refresh', 16) + ' ตรวจอีกครั้ง</button>',
      '<div class="card sec-top">' + ring + '<div style="flex:1;min-width:240px"><h3>รายการตรวจความปลอดภัย</h3>' + checks + '</div></div><div class="sec-cols">' + tfa + sess + '</div>' + logins);
  }
  function tfaStart() {
    adminCall('twofaSetup', {}, '', function (res) {
      openModal('เปิดยืนยันตัวตน 2 ขั้น', '<ol class="tfa-steps"><li>ติดตั้งแอป <b>Google Authenticator</b> หรือ <b>Microsoft Authenticator</b> ในมือถือ</li><li>ในแอปกด + แล้วสแกน QR นี้</li></ol><div class="qr-box">' + qrSvg(res.uri, 200, 'QR สำหรับแอปยืนยันตัวตน') + '<span class="small muted">สแกนไม่ได้? ใส่รหัสนี้ในแอปแทน</span><b class="mono" style="font-size:14px;user-select:all">' + esc(res.secret) + '</b></div>' +
        '<div class="field"><label for="tfa-code">3. กรอกรหัส 6 หลักที่แอปแสดง</label><input id="tfa-code" class="inp mono" inputmode="numeric" maxlength="6" autocomplete="one-time-code" style="font-size:22px;letter-spacing:.3em;text-align:center"></div><div id="f-err"></div>',
        '<button class="btn" data-act="close-modal">ยกเลิก</button><button class="btn primary" data-act="tfa-enable">' + ic('check', 16) + ' ยืนยันและเปิดใช้</button>');
    }, 'กำลังเตรียม');
  }
  function showCodes(codes, title) {
    S.tfaCodes = codes;
    openModal(title, '<p>เก็บรหัสสำรองไว้ในที่ปลอดภัย (พิมพ์หรือบันทึกไฟล์) ใช้แทนรหัส 6 หลักได้รหัสละครั้งเดียว เมื่อมือถือหายหรือเปลี่ยนเครื่อง</p><div class="tfa-codes mono">' + codes.map(function (c) { return '<span>' + c + '</span>'; }).join('') + '</div><p class="small" style="color:var(--bad)">หน้าต่างนี้แสดงรหัสครั้งเดียว ปิดแล้วดูอีกไม่ได้</p>',
      '<button class="btn" data-act="tfa-dl">' + ic('download', 16) + ' บันทึกเป็นไฟล์</button><button class="btn primary" data-act="close-modal">เก็บแล้ว</button>');
  }
  /* เข้าสู่ระบบขั้นที่ 2 */
  function askOtp(u, p, rem) {
    S.otpCred = { u: u, p: p, rem: rem };
    openModal('ยืนยันตัวตน 2 ขั้น', '<p>เปิดแอปยืนยันตัวตนในมือถือ แล้วกรอกรหัส 6 หลัก หรือใช้รหัสสำรอง (เช่น ABCD-EF23)</p><form id="otp-form"><input id="otp-code" class="inp mono" maxlength="9" autocomplete="one-time-code" inputmode="text" style="font-size:24px;letter-spacing:.25em;text-align:center"></form><div id="f-err"></div>',
      '<button class="btn" data-act="otp-cancel">ยกเลิก</button><button class="btn primary" data-act="otp-go">' + ic('lock', 16) + ' ยืนยัน</button>');
  }
  function otpGo() {
    var c = S.otpCred, code = String(($('otp-code') || {}).value || '').trim(); if (!c) return;
    if (code.length < 6) { $('f-err').innerHTML = '<div class="err">กรอกรหัส 6 หลัก หรือรหัสสำรอง</div>'; return; }
    api('login', { user: c.u, pass: c.p, remember: c.rem, device: deviceName(), devId: devId(), otp: code }, {}, function (err, res) {
      if (err) { $('f-err').innerHTML = '<div class="err">' + esc(err) + '</div>'; if (/ล็อก/.test(err)) { S.otpCred = null; } return; }
      S.otpCred = null; closeModal(); loginDone(res, c.rem);
    });
  }

  /** รายการที่ควรทำในแดชบอร์ด */
  function opsTodo() {
    var o = opsSum(), out = '';
    function t(dot, msg, href) { return '<a class="todo" href="#' + href + '"><span class="dot ' + dot + '"></span><span style="flex:1">' + msg + '</span>' + ic('chev', 14) + '</a>'; }
    if (!o.lastBackup) out += t('warn', 'ยังไม่เคยสำรองข้อมูล', 'admin-backup');
    else if (Date.now() - o.lastBackup > 8 * 864e5) out += t('warn', 'ไม่ได้สำรองข้อมูลมากกว่า 7 วัน', 'admin-backup');
    if (!o.twofa) out += t('warn', 'แนะนำให้เปิดยืนยันตัวตน 2 ขั้น', 'admin-security');
    if (!o.cron) out += t('warn', 'ยังไม่ได้เปิดงานอัตโนมัติประจำวัน', 'admin-ops');
    var soon = (S.cal ? S.cal.list : []).filter(function (e) { return !e.done && e.type === 'deadline' && daysTo(e.date) >= 0 && daysTo(e.date) <= 7; });
    soon.forEach(function (e) { out += t('warn', 'กำหนดส่ง: ' + esc(e.title) + ' (' + (daysTo(e.date) ? 'อีก ' + daysTo(e.date) + ' วัน' : 'วันนี้') + ')', 'admin-calendar'); });
    if (!S.cal) needCal();
    return out;
  }

  /* ---------- เหตุการณ์ ---------- */
  document.addEventListener('click', function (e) {
    var el = e.target.closest ? e.target.closest('[data-act]') : null;
    if (!el) return;
    var act = el.getAttribute('data-act'), k = el.getAttribute('data-k'), id = el.getAttribute('data-id');
    switch (act) {
      case 'cal-mon':
        if (k === '0') S.calMonth = todayIso().slice(0, 7);
        else { var p = S.calMonth.split('-'), d = new Date(+p[0], +p[1] - 1 + (+k), 1); S.calMonth = d.getFullYear() + '-' + ('0' + (d.getMonth() + 1)).slice(-2); }
        render(); break;
      case 'cal-open': e.stopPropagation(); calOpen(id); break;
      case 'cal-new': if (e.target.closest('.pc-ev')) break; calForm(k ? { id: '', date: k, end: '', time: '', title: '', type: 'teach', note: '', vis: 'private', remind: 1, done: false } : null); break;
      case 'cal-edit': calForm(calFind(id)); break;
      case 'cal-ics': var ev = calFind(id); if (ev) dlBlob(icsOf(ev), ev.title.replace(/[\\/:*?"<>|]+/g, '_') + '.ics', 'text/calendar;charset=utf-8'); break;
      case 'cal-del': var ev2 = calFind(id); if (ev2) confirmBox('ลบกิจกรรม “' + esc(ev2.title) + '”?', 'ลบ', function () { adminCall('calDelete', { id: id }, 'ลบแล้ว', function (res) { S.cal = res; closeModal(); render(); }); }, true); break;
      case 'cal-save':
        adminCall('calSave', { item: { id: S.calEdit || '', title: $('cf-title').value, date: $('cf-date').value, end: $('cf-end').value, time: $('cf-time').value, type: $('cf-type').value, remind: $('cf-remind').value, vis: $('cf-vis').value, note: $('cf-note').value, done: $('cf-done') ? $('cf-done').checked : false } },
          S.calEdit ? 'บันทึกแล้ว' : 'เพิ่มกิจกรรมแล้ว', function (res) { S.cal = res; closeModal(); render(); api('getPublic', {}, { loader: false }, function (e2, pd) { if (!e2) D.events = pd.events || []; }); });
        break;
      case 'op-save-line':
        var tk = $('op-ltok').value.trim(), to = $('op-lto').value.trim();
        if (!tk && !to) { toast('ใส่ token หรือผู้รับก่อน'); break; }
        adminCall('opsSave', { lineToken: tk, lineTo: to }, 'บันทึกการตั้งค่า LINE แล้ว', function (res) { setOps(res); render(); });
        break;
      case 'op-line-test': adminCall('lineTest', {}, 'ส่งข้อความทดสอบแล้ว ตรวจในแชต LINE', function (res) { setOps(res); render(); }, 'กำลังส่ง'); break;
      case 'op-line-bind':
        adminCall('lineBind', {}, '', function (res) {
          $('op-bind').innerHTML = '<div class="bind-box"><span>พิมพ์ข้อความนี้ในกลุ่มที่มี LINE OA อยู่ ภายใน 10 นาที</span><b class="mono">ผูก ' + res.code + '</b><button class="btn sm" data-act="op-bind-check">' + ic('refresh', 14) + ' ตรวจสถานะ</button></div>';
        }, 'กำลังสร้างรหัส');
        break;
      case 'op-bind-check': needOps(true); break;
      case 'op-clear': confirmBox(k === 'line' ? 'ลบ token และผู้รับ LINE? การแจ้งเตือนจะหยุดส่ง' : 'ลบ API key ของ ' + esc((find(S.ops.ai.provs || [], 'id', k.slice(3)) || { name: 'AI' }).name) + '?', 'ลบ', function () { adminCall('opsSave', { clear: [k] }, 'ลบแล้ว', function (res) { setOps(res); render(); }); }, true); break;
      case 'op-save-ai':
        var av = S.aiView && find(S.ops.ai.provs, 'id', S.aiView) ? S.aiView : S.ops.cfg.aiProvider, ak = {}, am = {}, ac = { aiFallback: $('op-afb').checked, aiModels: am };
        ak[av] = $('op-akey').value.trim(); am[av] = $('op-amodel').value.trim();
        if ($('op-amain').checked) ac.aiProvider = av; else if (av === S.ops.cfg.aiProvider) { toast('ต้องมีผู้ช่วยหลัก 1 เจ้า เลือกเจ้าอื่นเป็นหลักก่อน'); $('op-amain').checked = true; break; }
        adminCall('opsSave', { aiKeys: ak, cfg: ac }, 'บันทึกการตั้งค่า AI แล้ว', function (res) { setOps(res); render(); });
        break;
      case 'op-ai-view': S.aiView = k; render(); break;
      case 'op-ai-pick': var mi = $('op-amodel'); if (mi) { mi.value = k; mi.focus(); toast('เลือก ' + k + ' แล้ว กดบันทึกเพื่อใช้รุ่นนี้'); } break;
      case 'op-ai-test': adminCall('aiTest', { prov: k }, '', function (res) { setOps(res); render(); toast(res.ok ? 'เชื่อมต่อได้ รุ่นที่เลือกใช้ได้' : 'เชื่อมต่อได้ แต่รุ่นที่เลือกไม่อยู่ในรายการ กดเลือกรุ่นจากรายการ'); }, 'กำลังทดสอบ'); break;
      case 'op-polish':
        var tx = $('op-polish').value.trim(); if (!tx) { toast('วางข้อความก่อน'); break; }
        api('aiWrite', { task: 'polish', ctx: { text: tx } }, { loader: 'AI กำลังเกลาข้อความ', timeout: 90000 }, function (err, res) { if (err) { toast(err); return; } S.aiText = res.text; $('op-polish-out').innerHTML = '<div class="ai-out">' + esc(res.text) + '</div><button class="btn sm" data-act="ai-copy">' + ic('copy', 14) + ' คัดลอก</button>'; });
        break;
      case 'op-cron': adminCall('cronInstall', { on: k === '1' }, k === '1' ? 'เปิดงานอัตโนมัติแล้ว ทำงานทุกวัน 07:00 น.' : 'ปิดงานอัตโนมัติแล้ว', function (res) { setOps(res); S.bk = null; render(); }); break;
      case 'ai-run': aiRun(k, el.getAttribute('data-code'), el); break;
      case 'ai-undo': if (S.aiUndo) { Object.keys(S.aiUndo).forEach(function (i2) { var x = $(i2); if (x) { x.value = S.aiUndo[i2]; x.classList.remove('ai-new'); } }); S.aiUndo = null; el.hidden = true; $('ai-msg').textContent = 'กลับเป็นข้อความเดิมแล้ว'; } break;
      case 'ai-survey': aiSurvey(); break;
      case 'ai-copy': if (S.aiText) copyText(S.aiText, 'คัดลอกแล้ว'); break;
      case 'bk-run': adminCall('backupRun', {}, 'สำรองข้อมูลแล้ว', function (res) { setBk(res); render(); }, 'กำลังคัดลอกฐานข้อมูล'); break;
      case 'bk-undo': confirmBox('กลับไปใช้ฐานข้อมูลก่อนการกู้คืน?', 'กลับไปใช้ฐานข้อมูลเดิม', function () { adminCall('undoRestore', {}, 'กลับไปใช้ฐานข้อมูลเดิมแล้ว กำลังโหลดใหม่', function (res) { setBk(res); setTimeout(function () { location.reload(); }, 900); }); }); break;
      case 'bk-restore':
        S.bkPick = id;
        openModal('กู้คืนข้อมูล', '<p>กู้คืนจาก <b>' + esc(k) + '</b></p><ul class="small"><li>ระบบจะสำรองข้อมูลปัจจุบันก่อนเสมอ</li><li>ข้อมูลที่แก้หลังเวลาของไฟล์สำรองนี้จะไม่อยู่ในฐานข้อมูลที่กู้คืน</li><li>ย้อนกลับได้ด้วยปุ่ม “กลับไปใช้ฐานข้อมูลเดิม”</li></ul><div class="field"><label for="bk-confirm">พิมพ์คำว่า <b>กู้คืน</b> เพื่อยืนยัน</label><input id="bk-confirm" class="inp" autocomplete="off"></div><div id="f-err"></div>',
          '<button class="btn" data-act="close-modal">ยกเลิก</button><button class="btn danger" data-act="bk-go">' + ic('refresh', 16) + ' กู้คืน</button>');
        break;
      case 'bk-go': adminCall('restore', { id: S.bkPick, confirm: $('bk-confirm').value }, 'กู้คืนแล้ว กำลังโหลดข้อมูลใหม่', function (res) { setBk(res); closeModal(); setTimeout(function () { location.reload(); }, 900); }, 'กำลังกู้คืน อาจใช้เวลาสักครู่'); break;
      case 'bk-cfg': adminCall('opsSave', { cfg: { backupAuto: $('bk-auto').checked, backupKeep: $('bk-keep').value } }, 'บันทึกตัวเลือกแล้ว', function (res) { setOps(res); S.bk.cfg = res.cfg; render(); }); break;
      case 'bk-export': adminCall('exportAll', {}, 'ดาวน์โหลดไฟล์ JSON แล้ว', function (res) { dlBlob(JSON.stringify(res, null, 1), 'แฟ้มผลงาน_ข้อมูลทั้งหมด_' + res.at.slice(0, 10) + '.json', 'application/json'); }, 'กำลังรวบรวมข้อมูล'); break;
      case 'sec-reload': needSec(true); break;
      case 'tfa-on': tfaStart(); break;
      case 'tfa-enable': adminCall('twofaEnable', { code: $('tfa-code').value }, 'เปิดยืนยันตัวตน 2 ขั้นแล้ว', function (res) { showCodes(res.codes, 'รหัสสำรอง 8 รหัส'); S.sec = null; needSec(true); }, 'กำลังตรวจรหัส'); break;
      case 'tfa-dl': if (S.tfaCodes) dlBlob('รหัสสำรองยืนยันตัวตน 2 ขั้น · แฟ้มผลงานครู\nสร้างเมื่อ ' + new Date().toLocaleString('th-TH') + '\nใช้ได้รหัสละครั้ง\n\n' + S.tfaCodes.join('\n') + '\n', 'รหัสสำรอง_2FA.txt', 'text/plain;charset=utf-8'); break;
      case 'tfa-codes':
        openModal('สร้างรหัสสำรองชุดใหม่', '<p>รหัสสำรองชุดเดิมจะใช้ไม่ได้ทันที</p><div class="field"><label for="tfa-code">รหัส 6 หลักจากแอป</label><input id="tfa-code" class="inp mono" inputmode="numeric" maxlength="6" style="font-size:20px;letter-spacing:.3em;text-align:center"></div><div id="f-err"></div>',
          '<button class="btn" data-act="close-modal">ยกเลิก</button><button class="btn primary" data-act="tfa-codes-go">สร้างใหม่</button>');
        break;
      case 'tfa-codes-go': adminCall('twofaCodes', { code: $('tfa-code').value }, '', function (res) { showCodes(res.codes, 'รหัสสำรองชุดใหม่'); }); break;
      case 'tfa-off':
        openModal('ปิดยืนยันตัวตน 2 ขั้น', '<p>เพื่อความปลอดภัย กรอกรหัสผ่านและรหัส 6 หลัก (หรือรหัสสำรอง)</p><div class="field"><label for="tfa-pass">รหัสผ่าน</label><input id="tfa-pass" type="password" class="inp" autocomplete="current-password"></div><div class="field"><label for="tfa-code">รหัสยืนยัน</label><input id="tfa-code" class="inp mono" maxlength="9"></div><div id="f-err"></div>',
          '<button class="btn" data-act="close-modal">ยกเลิก</button><button class="btn danger" data-act="tfa-off-go">ปิด 2FA</button>');
        break;
      case 'tfa-off-go': adminCall('twofaDisable', { pass: $('tfa-pass').value, code: $('tfa-code').value }, 'ปิดยืนยันตัวตน 2 ขั้นแล้ว', function (res) { setSec(res); closeModal(); render(); }); break;
      case 'sess-kill': adminCall('sessRevoke', { id: id }, 'ออกจากระบบเครื่องนั้นแล้ว', function (res) { setSec(res); render(); }); break;
      case 'sess-all': confirmBox('ออกจากระบบทุกเครื่องยกเว้นเครื่องนี้?', 'ออกจากระบบ', function () { adminCall('sessRevoke', { all: true }, 'ออกจากระบบเครื่องอื่นแล้ว', function (res) { setSec(res); render(); }); }, true); break;
      case 'otp-go': otpGo(); break;
      case 'otp-cancel': S.otpCred = null; closeModal(); break;
    }
  });
  document.addEventListener('change', function (e) {
    var t = e.target, nk = t.getAttribute && t.getAttribute('data-notify');
    if (nk) { var n = {}; n[nk] = t.checked; adminCall('opsSave', { cfg: { notify: n } }, (t.checked ? 'เปิด' : 'ปิด') + 'การแจ้งเตือน “' + NOTIFY_T[nk][0] + '” แล้ว', function (res) { setOps(res); }, false); }
  });
  document.addEventListener('submit', function (e) { if (e.target.id === 'otp-form') { e.preventDefault(); otpGo(); } });

  /* =====================================================================
     เฟส 8: คำขอหลักฐานจากกรรมการ · คำนวณผลก่อน–หลังเรียน · เช็กลิสต์ก่อนส่ง
            เชื่อมข้อมูลจากระบบที่จัดทำ · ผู้ช่วย AI · ภาพรวมเพิ่มเติม
     ===================================================================== */
  var NOTIF_T = { committee: 'กรรมการส่งผล', request: 'คำขอหลักฐาน', digest: 'สรุปประจำวัน', security: 'ความปลอดภัย', backup: 'สำรองข้อมูล', test: 'ทดสอบ' };
  function reqs() { return (D.admin && D.admin.requests) || []; }
  function reqOpenN() { return reqs().filter(function (q) { return q.status === 'open'; }).length; }
  function setReqs(list) { if (D.admin) D.admin.requests = list || []; }
  function devId() {
    try { var v = localStorage.getItem('tp-dev'); if (!v) { v = 'dv' + Math.random().toString(36).slice(2, 12) + Date.now().toString(36); localStorage.setItem('tp-dev', v); } return v; } catch (e) { return ''; }
  }
  function injectEnd(html, extra) { var i = html.lastIndexOf('</main></div>'); return i < 0 ? html + extra : html.slice(0, i) + extra + html.slice(i); }
  function lastBy(q, by) { for (var i = q.msgs.length - 1; i >= 0; i--) if (q.msgs[i].by === by) return q.msgs[i]; return null; }

  /* ---------- 1) คำขอหลักฐาน: ส่วนที่ใช้ร่วมกัน ---------- */
  function rqPill(q) { return q.status === 'open' ? '<span class="pill warn">รอครูตอบ</span>' : (q.status === 'answered' ? '<span class="pill good">ตอบแล้ว</span>' : '<span class="pill off">ปิดแล้ว</span>'); }
  function rqAtt(a) {
    var lbl = ic(a.kind === 'link' ? 'link' : (a.kind === 'work' ? 'folder' : 'clip'), 13) + ' ' + esc(a.t);
    return a.url ? '<a class="chip" href="' + esc(a.url) + '" target="_blank" rel="noopener">' + lbl + '</a>' : '<span class="chip">' + lbl + '</span>';
  }
  function rqThread(q, viewer) {
    return '<div class="thread">' + q.msgs.map(function (m) {
      var who = m.by === 'com' ? (q.comName || 'กรรมการ') : (st().nick || 'ครู');
      return '<div class="bubble' + (m.by === viewer ? ' me' : '') + '"><span class="who">' + esc(who) + ' · ' + fdt(m.at) + '</span>' + (m.msg ? '<div class="pre">' + esc(m.msg) + '</div>' : '') +
        ((m.att || []).length ? '<div class="row" style="gap:6px;margin-top:4px">' + m.att.map(rqAtt).join('') + '</div>' : '') + '</div>';
    }).join('') + '</div>';
  }

  /* ---------- คำขอหลักฐาน: ฝั่งกรรมการ ---------- */
  function comReqs() { return (S.com && S.com.requests) || []; }
  function comReqOf(code) { return comReqs().filter(function (q) { return q.code === code && q.status !== 'closed'; })[0] || null; }
  function rqBtn(code, done) {
    var q = comReqOf(code);
    if (q) return '<button class="chip ' + (q.status === 'open' ? 'gold' : '') + '" data-act="rq-new" data-k="' + code + '" style="cursor:pointer">' + ic('chat', 13) + ' ' + (q.status === 'open' ? 'ขอเพิ่มแล้ว รอครูตอบ' : 'ครูตอบแล้ว · ดู') + '</button>';
    return done ? '' : '<button class="btn sm" style="padding:2px 8px" data-act="rq-new" data-k="' + code + '">' + ic('chat', 14) + ' ขอหลักฐานเพิ่ม</button>';
  }
  function rqComCard() {
    var mine = comReqs();
    if (!mine.length) return '';
    return '<div class="card" id="com-req"><div class="row" style="justify-content:space-between;gap:8px"><span class="eyebrow">คำขอหลักฐานเพิ่มเติมของท่าน</span><button class="btn sm" data-act="rq-refresh">' + ic('refresh', 14) + ' ดูคำตอบล่าสุด</button></div><div style="display:flex;flex-direction:column;gap:14px;margin-top:8px">' + mine.map(function (q) {
      return '<div><div class="row" style="gap:8px;margin-bottom:6px"><span class="chip ind">' + q.code + '</span>' + rqPill(q) + '<span class="small muted">' + esc(indName(q.code)) + '</span></div>' + rqThread(q, 'com') + '</div>';
    }).join('') + '</div></div>';
  }
  function rqNewModal(code) {
    var q = comReqOf(code), done = S.com && S.com.score.status === 'submitted';
    openModal('ขอหลักฐานเพิ่ม · ตัวชี้วัด ' + code, '<p class="muted">' + esc(indName(code)) + '</p>' + (q ? rqThread(q, 'com') : '') +
      (done ? '<div class="note small" style="margin-top:10px">ส่งผลการประเมินแล้ว ขอหลักฐานเพิ่มไม่ได้</div>' :
        '<div class="field" style="margin-top:12px"><label for="rq-msg">' + (q ? 'ข้อความเพิ่มเติม' : 'ต้องการหลักฐานอะไรเพิ่ม') + '</label><textarea id="rq-msg" class="inp" rows="4" maxlength="1000" placeholder="เช่น ขอภาพกิจกรรมเพิ่ม หรือขอเอกสารฉบับที่ผู้บริหารลงนาม"></textarea></div>' +
        '<div id="f-err"></div><p class="small muted">ครูได้รับแจ้งเตือนทาง LINE และตอบกลับได้ในหน้านี้ (กด “ดูคำตอบล่าสุด” ในกล่องคำขอของท่านเพื่อดูคำตอบ)</p>'),
      '<button class="btn" data-act="close-modal">ปิด</button>' + (done ? '' : '<button class="btn primary" data-act="rq-send" data-k="' + code + '">' + ic('chat', 16) + ' ส่งคำขอ</button>'));
    setTimeout(function () { var m = $('rq-msg'); if (m) m.focus(); }, 30);
  }
  function rqSend(code, btn) {
    var m = ($('rq-msg') || {}).value || '';
    if (m.trim().length < 3) { formErr('กรุณาพิมพ์ว่าต้องการหลักฐานอะไรเพิ่ม'); return; }
    if (btn) btn.disabled = true;
    comApi('comRequest', { code: code, msg: m.trim() }, { loader: 'กำลังส่งคำขอ' }, function (err, res) {
      if (btn) btn.disabled = false;
      if (err) { formErr(err); return; }
      S.com.requests = res.requests; closeModal(); render(); toast('ส่งคำขอแล้ว ครูได้รับแจ้งเตือนทาง LINE');
    });
  }
  /** นับถอยหลังถึงสิ้นวันครบกำหนด (อัปเดตทุกวินาที) */
  function cdText(due) {
    var p = String(due).split('-'), ms = new Date(+p[0], +p[1] - 1, +p[2], 23, 59, 59).getTime() - Date.now();
    if (ms <= 0) return 'หมดเวลาตามกำหนดแล้ว';
    var s = Math.floor(ms / 1000), d = Math.floor(s / 86400), h = Math.floor(s % 86400 / 3600), mi = Math.floor(s % 3600 / 60), se = s % 60;
    return 'เหลือ ' + (d ? d + ' วัน ' : '') + ('0' + h).slice(-2) + ':' + ('0' + mi).slice(-2) + ':' + ('0' + se).slice(-2);
  }
  function cdHtml(due) { return due ? '<span class="cd" data-cd="' + esc(due) + '" aria-live="off">' + ic('cal', 13) + ' <span>' + cdText(due) + '</span></span>' : ''; }
  setInterval(function () {
    var l = document.querySelectorAll('[data-cd]');
    for (var i = 0; i < l.length; i++) { var sp = l[i].querySelector('span'); if (sp) sp.textContent = cdText(l[i].getAttribute('data-cd')); }
  }, 1000);

  /* ---------- คำขอหลักฐาน: หลังบ้าน ---------- */
  function needReqs(force) {
    if (S.rqLoading || (S.rqAt && !force && Date.now() - S.rqAt < 60000)) return;
    S.rqLoading = true;
    api('reqList', {}, { loader: false }, function (err, res) { S.rqLoading = false; if (err) { toast(err); return; } S.rqAt = Date.now(); setReqs(res.requests); if (route() === 'admin-requests' || route() === 'admin') render(); });
  }
  function aRequests() {
    needReqs();
    var all = reqs(), nOpen = reqOpenN(), f = S.rqF || (nOpen ? 'open' : 'all');
    var list = all.filter(function (q) { return f === 'all' || q.status === f; });
    var segs = '<div class="seg" role="group" aria-label="กรองสถานะคำขอ">' + [['all', 'ทั้งหมด ' + all.length], ['open', 'รอตอบ ' + nOpen], ['answered', 'ตอบแล้ว'], ['closed', 'ปิดแล้ว']].map(function (o) { return '<button type="button" data-act="rq-filter" data-k="' + o[0] + '" class="' + (f === o[0] ? 'on' : '') + '">' + o[1] + '</button>'; }).join('') + '</div>';
    var pubWorks = D.content.works.filter(function (w) { return w.vis !== 'private'; });
    var cards = pageOf(list, 'a-req', perA()).map(function (q) {
      var tied = pubWorks.filter(function (w) { return w.ind.indexOf(q.code) > -1; }).slice(0, 12), other = pubWorks.filter(function (w) { return w.ind.indexOf(q.code) < 0; }), dr = (S.rqDraft || {})[q.id] || '';
      var form = q.status === 'closed' ? '' : '<div class="rq-form"><div class="field"><label for="rq-t-' + q.id + '">ตอบกลับกรรมการ</label><textarea id="rq-t-' + q.id + '" class="inp" rows="3" maxlength="2000" placeholder="เช่น แนบเอกสารฉบับที่ลงนามแล้วครับ">' + esc(dr) + '</textarea></div>' +
        '<div class="field"><label>แนบผลงานจากคลัง' + (tied.length ? ' (ที่ผูกตัวชี้วัด ' + q.code + ')' : '') + '</label><div class="row" style="gap:6px">' +
          tied.map(function (w) { return '<label class="chk-pill"><input type="checkbox" class="rq-w" data-q="' + q.id + '" value="' + w.id + '"> ' + esc(w.title.length > 46 ? w.title.slice(0, 45) + '…' : w.title) + '</label>'; }).join('') +
          '<select class="inp" id="rq-o-' + q.id + '" style="max-width:280px" aria-label="แนบผลงานอื่น"><option value="">+ ผลงานอื่น (จะผูกตัวชี้วัด ' + q.code + ' ให้)</option>' + other.map(function (w) { return '<option value="' + w.id + '">' + esc(w.title.length > 60 ? w.title.slice(0, 59) + '…' : w.title) + '</option>'; }).join('') + '</select></div>' +
          '<span class="hint">ผลงานที่ตั้งเป็นส่วนตัวจะไม่แสดงในรายการนี้ เพราะกรรมการเปิดไฟล์ไม่ได้</span></div>' +
        '<div class="grid2"><div class="field"><label for="rq-l-' + q.id + '">ลิงก์หลักฐาน (ถ้ามี)</label><input id="rq-l-' + q.id + '" class="inp" type="url" placeholder="https://"></div><div class="field"><label for="rq-f-' + q.id + '">อัปโหลดไฟล์ใหม่ (ไม่เกิน 15 MB)</label><input id="rq-f-' + q.id + '" class="inp" type="file" accept="' + DOC_MIMES.join(',') + '"></div></div>' +
        '<div class="row" style="gap:8px;justify-content:flex-end">' + (opsSum().ai ? '<button class="btn" data-act="rq-ai" data-id="' + q.id + '">' + ic('spark', 16) + ' AI ร่างคำตอบ</button>' : '') +
          (q.status === 'answered' ? '<button class="btn" data-act="rq-close" data-id="' + q.id + '">ปิดคำขอ</button>' : '') + '<button class="btn primary" data-act="rq-reply" data-id="' + q.id + '">' + ic('chat', 16) + ' ส่งคำตอบ</button></div></div>';
      return '<article class="card rq-card" id="rq-' + q.id + '"><div class="row" style="justify-content:space-between;gap:8px"><div class="row" style="gap:8px"><span class="chip ind">' + q.code + '</span>' + rqPill(q) + '<span class="small muted">ปีงบ ' + q.fy + '</span></div><span class="small muted">' + fdt(q.updatedAt) + '</span></div>' +
        '<div><b>' + esc(q.comName) + '</b><div class="small muted">' + esc(indName(q.code)) + '</div></div>' + rqThread(q, 'me') + form +
        (q.status === 'closed' ? '<div class="row" style="gap:8px;justify-content:flex-end"><button class="btn sm" data-act="rq-reopen" data-id="' + q.id + '">เปิดคำขออีกครั้ง</button><button class="btn sm danger" data-act="rq-del" data-id="' + q.id + '">' + ic('trash', 14) + ' ลบ</button></div>' : '') + '</article>';
    }).join('');
    return adminShell('admin-requests', 'คำขอหลักฐานจากกรรมการ', 'กรรมการกดขอหลักฐานเพิ่มได้จากหน้าประเมิน ครูตอบกลับพร้อมแนบผลงาน ไฟล์ หรือลิงก์ ทุกคำขอแจ้งเตือนเข้า LINE', segs + '<button class="btn" data-act="rq-reload">' + ic('refresh', 16) + ' โหลดใหม่</button>',
      '<div style="display:flex;flex-direction:column;gap:14px">' + (cards || '<div class="card empty">' + (all.length ? 'ไม่มีคำขอในสถานะนี้' : 'ยังไม่มีคำขอหลักฐานจากกรรมการ') + '</div>') + '</div>' + pagerNav('a-req'));
  }
  function rqReply(id, btn) {
    var q = find(reqs(), 'id', id); if (!q) return;
    var t = ($('rq-t-' + id) || {}).value || '', link = (($('rq-l-' + id) || {}).value || '').trim(), fi = $('rq-f-' + id), file = fi && fi.files && fi.files[0];
    var ws = []; Array.prototype.forEach.call(document.querySelectorAll('.rq-w[data-q="' + id + '"]'), function (c) { if (c.checked) ws.push(c.value); });
    var o = ($('rq-o-' + id) || {}).value; if (o) ws.push(o);
    if (link && !/^https:\/\//.test(link)) { toast('ลิงก์ต้องขึ้นต้นด้วย https://'); return; }
    if (!t.trim() && !ws.length && !link && !file) { toast('พิมพ์คำตอบหรือแนบหลักฐานอย่างน้อย 1 อย่าง'); return; }
    if (file && DOC_MIMES.indexOf(file.type) < 0) { toast('ไฟล์ชนิดนี้ใช้ไม่ได้ · PDF รูปภาพ Word Excel หรือ PowerPoint'); return; }
    if (file && file.size > 15 * 1048576) { toast('ไฟล์ใหญ่เกิน 15 MB'); return; }
    function go(up) {
      if (btn) btn.disabled = true;
      api('reqAnswer', { id: id, msg: t.trim(), workIds: ws, link: link, upload: up }, { loader: up ? 'กำลังอัปโหลดและส่งคำตอบ' : 'กำลังส่งคำตอบ', timeout: 120000 }, function (err, res) {
        if (btn) btn.disabled = false;
        if (err) { toast(err); return; }
        setReqs(res.requests); if (res.works) D.content.works = res.works; if (S.rqDraft) delete S.rqDraft[id];
        render(); toast('ส่งคำตอบแล้ว กรรมการเห็นได้ในหน้าประเมิน');
      });
    }
    if (!file) { go(null); return; }
    readAsDataUrl(file, function (er, url) { if (er) { toast(er); return; } go({ b64: b64Of(url), mime: file.type, name: file.name }); });
  }
  function rqAi(id, btn) {
    var q = find(reqs(), 'id', id); if (!q) return;
    var ask = lastBy(q, 'com'), ta = $('rq-t-' + id), ev = [];
    Array.prototype.forEach.call(document.querySelectorAll('.rq-w[data-q="' + id + '"]'), function (c) { if (c.checked) { var w = find(D.content.works, 'id', c.value); if (w) ev.push(w.title); } });
    if (btn) btn.disabled = true;
    api('aiWrite', { task: 'reply', ctx: { code: q.code, name: indName(q.code), ask: ask ? ask.msg : '', ev: ev.length ? ev : evidenceOf(q.code, q.fy).map(function (e) { return e.title; }).slice(0, 8), extra: ta ? ta.value : '', tone: 'simple', len: 'short' } }, { loader: 'AI กำลังร่างคำตอบ', timeout: 90000 }, function (err, res) {
      if (btn) btn.disabled = false;
      if (err) { toast(err); return; }
      if (ta) { ta.value = res.text; ta.classList.add('ai-new'); ta.focus(); }
      toast('ร่างคำตอบแล้ว ตรวจทานก่อนกดส่ง (เหลือ ' + res.left + ' ครั้งวันนี้)');
    });
  }
  function reqTodo() {
    var n = reqOpenN(); if (!n) return '';
    return '<a class="todo" href="#admin-requests"><span class="dot bad"></span><span style="flex:1">กรรมการขอหลักฐานเพิ่ม รอตอบ ' + n + ' รายการ</span>' + ic('chev', 14) + '</a>';
  }

  /* ---------- 2) คำนวณผลก่อน–หลังเรียน ---------- */
  function needCalc() {
    var fy = S.fy; if ((S.calc && S.calc.fy === fy) || S.calcLoading) return;
    S.calcLoading = true;
    api('calcGet', { fy: fy }, { loader: false }, function (err, res) {
      S.calcLoading = false; if (err) { toast(err); return; }
      var dd = docsOf(fy), ch = dd && dd.pa ? dd.pa.challenge : {};
      S.calc = { fy: fy, data: res.calc || { title: ch.title || '', cls: '', subject: st().subject || '', max: 20, pass: 60, target: 70, rows: [] }, at: res.updatedAt, dirty: false };
      var r = route(); if (r === 'admin-calc' || r === 'admin-ai') render();
    });
  }
  function isNum(v) { return v !== '' && v != null && isFinite(+v); }
  function calcStats(c) {
    c = c || S.calc.data;
    var cut = c.max * c.pass / 100, rows = c.rows.filter(function (r) { return isNum(r[1]) && isNum(r[2]); }), n = rows.length, sp = 0, sq = 0, pp = 0, pq = 0, up = 0, g = 0;
    rows.forEach(function (r) { var a = +r[1], b = +r[2]; sp += a; sq += b; if (a >= cut) pp++; if (b >= cut) pq++; if (b > a) up++; g += c.max - a > 0 ? (b - a) / (c.max - a) : 0; });
    return { n: n, skip: c.rows.length - n, cut: cut, max: c.max, pass: c.pass, target: c.target, mPre: n ? sp / n : 0, mPost: n ? sq / n : 0, passPre: pp, passPost: pq, pctPre: n ? pp / n * 100 : 0, pctPost: n ? pq / n * 100 : 0, up: up, gain: n ? g / n * 100 : 0, met: n && pq / n * 100 >= c.target };
  }
  function calcText(c) {
    c = c || S.calc.data; var r = calcStats(c);
    if (!r.n) return '';
    return 'นักเรียน' + (c.cls ? 'ชั้น' + c.cls + ' ' : '') + 'ร้อยละ ' + fix(r.pctPost, 2) + ' (' + r.passPost + ' จาก ' + r.n + ' คน) มีคะแนนหลังเรียนผ่านเกณฑ์ร้อยละ ' + c.pass + ' ' + (r.met ? 'บรรลุ' : 'ยังไม่บรรลุ') + 'เป้าหมายที่ตั้งไว้ร้อยละ ' + c.target +
      ' คะแนนเฉลี่ยก่อนเรียน ' + fix(r.mPre, 2) + ' หลังเรียน ' + fix(r.mPost, 2) + ' จากคะแนนเต็ม ' + c.max + ' (เพิ่มขึ้น ' + fix(r.mPost - r.mPre, 2) + ' คะแนน) นักเรียนมีพัฒนาการเฉลี่ย (normalized gain) ร้อยละ ' + fix(r.gain, 2) + ' และมีคะแนนเพิ่มขึ้น ' + r.up + ' คน';
  }
  function calcBands(c) {
    var step = c.max / 5, out = [];
    for (var b = 0; b < 5; b++) { var lo = step * b, hi = b === 4 ? c.max : step * (b + 1); out.push({ lo: lo, hi: hi, l: Math.ceil(lo) + '–' + (b === 4 ? c.max : Math.ceil(hi) - 1) }); }
    function cnt(k) { return out.map(function (bd, i) { return c.rows.filter(function (r) { if (!isNum(r[1]) || !isNum(r[2])) return false; var v = +r[k]; return v >= bd.lo && (i === 4 ? v <= bd.hi : v < bd.hi); }).length; }); }
    return { cats: out.map(function (x) { return x.l; }), pre: cnt(1), post: cnt(2) };
  }
  function calcSumHtml() {
    var c = S.calc.data, r = calcStats(c);
    if (!r.n) return '<div class="card empty">' + ic('calc', 22) + '<p>ยังไม่มีคะแนนครบทั้งก่อนและหลังเรียน วางคะแนนจาก Excel หรือ Google Sheets ทางซ้าย แล้วระบบจะคำนวณให้ทันที</p></div>';
    var bd = calcBands(c), txt2 = calcText(c);
    return '<div class="grid4"><div class="kpi"><span class="l">เฉลี่ยก่อนเรียน</span><span class="v">' + fix(r.mPre, 2) + '</span><span class="small muted">จาก ' + c.max + ' คะแนน</span></div>' +
      '<div class="kpi"><span class="l">เฉลี่ยหลังเรียน</span><span class="v">' + fix(r.mPost, 2) + '</span><span class="small" style="color:' + (r.mPost >= r.mPre ? 'var(--good)' : 'var(--bad)') + '">' + (r.mPost >= r.mPre ? '+' : '') + fix(r.mPost - r.mPre, 2) + ' คะแนน</span></div>' +
      '<div class="kpi' + (r.met ? '' : ' warn') + '"><span class="l">ผ่านเกณฑ์หลังเรียน</span><span class="v">' + fix(r.pctPost, 1) + '%</span><span class="small muted">' + r.passPost + ' จาก ' + r.n + ' คน · ก่อนเรียน ' + fix(r.pctPre, 1) + '%</span></div>' +
      '<div class="kpi"><span class="l">พัฒนาการเฉลี่ย (normalized gain)</span><span class="v">' + fix(r.gain, 1) + '%</span><span class="small muted">คะแนนเพิ่มขึ้น ' + r.up + ' จาก ' + r.n + ' คน</span></div></div>' +
      (r.skip ? '<p class="small muted" style="margin-top:8px">ไม่นับ ' + r.skip + ' แถวที่คะแนนไม่ครบทั้งก่อนและหลังเรียน</p>' : '') +
      '<div class="card chart-card" style="margin-top:14px"><h3>จำนวนนักเรียนตามช่วงคะแนน</h3><div class="sub">เกณฑ์ผ่าน = ' + fix(r.cut, 1) + ' คะแนน (ร้อยละ ' + c.pass + ' ของ ' + c.max + ')</div><div class="viz">' +
        legendHtml([{ name: 'ก่อนเรียน', color: 'var(--s1)' }, { name: 'หลังเรียน', color: 'var(--s2)' }]) +
        vChart({ cats: bd.cats, series: [{ name: 'ก่อนเรียน', vals: bd.pre, color: 'var(--s1)' }, { name: 'หลังเรียน', vals: bd.post, color: 'var(--s2)' }], int: true, unit: 'คน', w: 620, h: 250, aria: 'จำนวนนักเรียนตามช่วงคะแนนก่อนและหลังเรียน' }) +
        tableView(['ช่วงคะแนน', 'ก่อนเรียน (คน)', 'หลังเรียน (คน)'], bd.cats.map(function (l, i) { return [l, bd.pre[i], bd.post[i]]; })) + '</div></div>' +
      '<div class="card" style="margin-top:14px"><span class="eyebrow">ข้อความสำหรับส่วนที่ 2 “ผลที่เกิดขึ้น”</span><p style="margin-top:6px" id="calc-text">' + esc(txt2) + '</p><div class="row" style="margin-top:10px;gap:8px"><span class="pill ' + (r.met ? 'good' : 'warn') + '">' + (r.met ? 'บรรลุเป้าหมาย' : 'ยังไม่บรรลุเป้าหมาย') + ' ร้อยละ ' + c.target + '</span><span style="flex:1"></span>' +
        '<button class="btn" data-act="xc-copy">' + ic('copy', 16) + ' คัดลอก</button>' + (opsSum().ai ? '<button class="btn" data-act="xc-ai">' + ic('spark', 16) + ' AI เขียนผลเชิงคุณภาพต่อ</button>' : '') + '<button class="btn primary" data-act="xc-apply">' + ic('check', 16) + ' ใส่ลงประเด็นท้าทาย</button></div></div>';
  }
  function renderCalcSum() { var el = $('calc-sum'); if (el && S.calc) el.innerHTML = calcSumHtml(); }
  function aCalc() {
    needDocs(S.fy); needCalc();
    if (!S.calc || S.calc.fy !== S.fy) return adminShell('admin-calc', 'คำนวณผลก่อน–หลังเรียน', 'กำลังโหลด', '', '<div class="card"><div class="sk" style="height:320px"></div></div>');
    var c = S.calc.data, per = 15;
    var rows = pageOf(c.rows.map(function (r, i) { return { r: r, i: i }; }), 'a-calc', per).map(function (o) {
      var r = o.r, d = isNum(r[1]) && isNum(r[2]) ? +r[2] - +r[1] : null;
      return '<tr><td><input class="inp calc-in" style="width:60px;text-align:center" value="' + esc(r[0]) + '" data-calc="' + o.i + '.0" aria-label="เลขที่ แถว ' + (o.i + 1) + '"></td>' +
        '<td><input class="inp num calc-in" type="number" min="0" max="' + c.max + '" step="any" value="' + esc(r[1]) + '" data-calc="' + o.i + '.1" aria-label="ก่อนเรียน เลขที่ ' + esc(r[0]) + '"></td>' +
        '<td><input class="inp num calc-in" type="number" min="0" max="' + c.max + '" step="any" value="' + esc(r[2]) + '" data-calc="' + o.i + '.2" aria-label="หลังเรียน เลขที่ ' + esc(r[0]) + '"></td>' +
        '<td class="r num" data-diff="' + o.i + '" style="color:' + (d > 0 ? 'var(--good)' : (d < 0 ? 'var(--bad)' : 'var(--muted)')) + '">' + (d == null ? '-' : (d > 0 ? '+' : '') + fix(d, 1)) + '</td>' +
        '<td><button class="btn icon sm danger" data-act="xc-del" data-i="' + o.i + '" aria-label="ลบแถว ' + (o.i + 1) + '">' + ic('x', 14) + '</button></td></tr>';
    }).join('');
    function num(id, lbl, v, mn, mx) { return '<div class="field"><label for="' + id + '">' + lbl + '</label><input id="' + id + '" class="inp num" type="number" min="' + mn + '" max="' + mx + '" value="' + v + '" data-calcset="' + id.slice(3) + '"></div>'; }
    var setup = '<div class="card" style="display:flex;flex-direction:column;gap:12px"><h3>ตั้งค่าการคำนวณ</h3>' +
      '<div class="field"><label for="xc-title">ประเด็นท้าทาย / เรื่องที่วัด</label><input id="xc-title" class="inp" value="' + esc(c.title) + '" data-calcset="title" maxlength="200"></div>' +
      '<div class="grid2"><div class="field"><label for="xc-cls">ชั้น/ห้อง</label><input id="xc-cls" class="inp" value="' + esc(c.cls) + '" data-calcset="cls" maxlength="80" placeholder="ป.4/1"></div><div class="field"><label for="xc-subject">รายวิชา</label><input id="xc-subject" class="inp" value="' + esc(c.subject) + '" data-calcset="subject" maxlength="120"></div></div>' +
      '<div class="grid3">' + num('xc-max', 'คะแนนเต็ม', c.max, 1, 1000) + num('xc-pass', 'เกณฑ์ผ่าน (%)', c.pass, 1, 100) + num('xc-target', 'เป้าหมาย (%)', c.target, 1, 100) + '</div>' +
      '<span class="hint">เป้าหมาย = นักเรียนผ่านเกณฑ์หลังเรียนไม่น้อยกว่าร้อยละนี้ · ระบบเก็บเฉพาะเลขที่และคะแนน ไม่เก็บชื่อนักเรียน</span></div>' +
      '<div class="card" style="display:flex;flex-direction:column;gap:10px"><h3>วางคะแนนจาก Excel / Google Sheets</h3><textarea id="xc-paste" class="inp mono" rows="5" placeholder="เลขที่&#9;ก่อนเรียน&#9;หลังเรียน&#10;1&#9;8&#9;15&#10;2&#9;12&#9;18"></textarea>' +
      '<span class="hint">คัดลอก 3 คอลัมน์ (เลขที่ ก่อน หลัง) หรือ 2 คอลัมน์ (ก่อน หลัง) มาวางได้เลย ถ้ามีคอลัมน์ชื่อนักเรียนติดมา ระบบจะข้ามให้</span>' +
      '<div class="row" style="gap:8px"><button class="btn primary" data-act="xc-import">' + ic('upload', 16) + ' นำเข้า (แทนที่ทั้งหมด)</button><button class="btn" data-act="xc-import" data-k="add">ต่อท้าย</button></div></div>' +
      '<div class="card"><div class="row" style="justify-content:space-between;margin-bottom:8px"><h3>คะแนนรายคน (' + c.rows.length + ' คน)</h3><div class="row" style="gap:6px"><button class="btn sm" data-act="xc-add">' + ic('plus', 14) + ' เพิ่มแถว</button>' + (c.rows.length ? '<button class="btn sm danger" data-act="xc-clear">ล้าง</button>' : '') + '</div></div>' +
      (c.rows.length ? '<div class="tbl-wrap"><table class="tbl"><thead><tr><th>เลขที่</th><th>ก่อนเรียน</th><th>หลังเรียน</th><th class="r">ผลต่าง</th><th></th></tr></thead><tbody>' + rows + '</tbody></table></div>' + pagerNav('a-calc') : '<p class="small muted">ยังไม่มีคะแนน</p>') + '</div>';
    return adminShell('admin-calc', 'คำนวณผลก่อน–หลังเรียน ปีงบ ' + S.fy, 'กรอกหรือวางคะแนน ระบบคำนวณค่าเฉลี่ย ร้อยละผ่านเกณฑ์ และพัฒนาการ แล้วเขียนผลลงส่วนที่ 2 ให้' + (S.calc.at ? ' · บันทึกล่าสุด ' + fdt(S.calc.at) : ''),
      '<button class="btn primary" data-act="xc-save"' + (S.calc.dirty ? '' : ' disabled') + '>' + ic('check', 16) + ' บันทึกคะแนน</button>',
      '<div class="calc-layout"><div style="display:flex;flex-direction:column;gap:14px">' + setup + '</div><div id="calc-sum">' + calcSumHtml() + '</div></div>');
  }
  function calcDirty() { S.calc.dirty = true; var b = document.querySelector('[data-act="xc-save"]'); if (b) b.disabled = false; }
  function calcParse(text) {
    return String(text || '').split(/\r?\n/).map(function (ln) { return ln.split(/\t|,|;|\s{2,}/).map(function (x) { return x.trim(); }).filter(String); }).filter(function (c) { return c.length >= 2; }).map(function (c) {
      var nums = c.filter(function (x) { return isFinite(+x); });
      if (nums.length < 2) return null; // หัวตาราง
      if (nums.length === 2) return ['', +nums[0], +nums[1]];
      return [nums[0], +nums[nums.length - 2], +nums[nums.length - 1]];
    }).filter(Boolean);
  }
  function calcSave(cb) {
    api('calcSave', { fy: S.fy, data: S.calc.data }, { loader: 'กำลังบันทึกคะแนน' }, function (err, res) {
      if (err) { toast(err); return; }
      S.calc = { fy: S.fy, data: res.calc, at: res.updatedAt, dirty: false };
      if (cb) cb(); else { render(); toast('บันทึกคะแนนแล้ว'); }
    });
  }
  function calcApply(text) {
    var dd = docsOf(S.fy); if (!dd || !dd.pa) { toast('กำลังโหลดแฟ้ม PA ลองอีกครั้ง'); needDocs(S.fy); return; }
    var ch = clone(dd.pa.challenge || {}), r = calcStats();
    confirmBox('เขียน “ผลที่เกิดขึ้น” ของประเด็นท้าทายปีงบ ' + S.fy + ' ด้วยข้อความนี้?' + (ch.result ? ' <b>ข้อความเดิมจะถูกแทนที่</b>' : ''), 'ใส่ข้อความ', function () {
      ch.result = text; if (!ch.title && S.calc.data.title) ch.title = S.calc.data.title;
      function go() { savePAPart({ challenge: ch }, 'บันทึกผลที่เกิดขึ้นลงประเด็นท้าทายแล้ว' + (r.met ? ' (บรรลุเป้าหมาย)' : '')); }
      if (S.calc.dirty) calcSave(go); else go();
    });
  }

  /* ---------- 3) เช็กลิสต์ก่อนส่งแฟ้ม ---------- */
  var LIGHT_T = { g: 'พร้อมส่ง', y: 'ควรปรับ', r: 'ต้องแก้ก่อนส่ง' };
  function ckItem(s, t, go, fix2) { return { s: s, t: t, go: go || '', fix: fix2 || 'แก้ไข' }; }
  function ckInd(code, dd) {
    var x = dd && dd.pa ? find(dd.pa.ind, 'code', code) : null, it = [], fy = S.fy;
    var nTxt = x ? [x.task, x.out, x.kpi].filter(function (v) { return String(v || '').trim(); }).length : 0;
    it.push(ckItem(nTxt === 3 ? 'ok' : (nTxt ? 'warn' : 'no'), nTxt === 3 ? 'เขียนงาน ผลลัพธ์ ตัวชี้วัดครบ' : (nTxt ? 'เขียนแล้ว ' + nTxt + ' จาก 3 ช่อง' : 'ยังไม่ได้เขียนข้อความ'), 'pa:' + code));
    var c = D.content, ev = [];
    c.works.forEach(function (w) { if (w.ind.indexOf(code) > -1 && inFy(w.date, fy)) ev.push(w); });
    c.videos.forEach(function (v) { if (v.ind.indexOf(code) > -1 && (v.fy ? v.fy === fy : inFy(v.date, fy))) ev.push(v); });
    c.awards.forEach(function (a) { if (a.ind.indexOf(code) > -1 && inFy(a.date, fy)) ev.push(a); });
    c.systems.forEach(function (s) { if (s.ind.indexOf(code) > -1) ev.push(s); });
    var vis = ev.filter(function (e) { return e.vis !== 'private'; }).length, pri = ev.length - vis;
    it.push(ckItem(vis >= 2 ? 'ok' : (vis ? 'warn' : 'no'), 'หลักฐานที่กรรมการเห็น ' + vis + ' ชิ้น' + (pri ? ' · ส่วนตัว ' + pri : ''), 'admin-works', vis ? 'เพิ่มหลักฐาน' : 'ผูกหลักฐาน'));
    var nph = x ? x.photos.length : 0;
    it.push(ckItem(nph ? 'ok' : 'warn', nph ? 'ภาพประกอบ ' + nph + ' ภาพ' : 'ยังไม่มีภาพประกอบ', 'admin-pa', 'เพิ่มภาพ'));
    var rq = reqs().filter(function (q) { return q.code === code && q.fy === fy && q.status === 'open'; }).length;
    if (rq) it.push(ckItem('no', 'กรรมการขอหลักฐานเพิ่ม ' + rq + ' รายการ', 'admin-requests', 'ตอบคำขอ'));
    var light = it.some(function (i) { return i.s === 'no'; }) ? 'r' : (it.some(function (i) { return i.s === 'warn'; }) ? 'y' : 'g');
    return { it: it, light: light };
  }
  function ckGlobal(dd) {
    var out = [], pa = dd.pa || {}, ch = pa.challenge || {}, ag = dd.agree || {}, idp = dd.idp || {}, dv = (st().docVis || {});
    out.push(ckItem(ag.status === 'approved' ? 'ok' : (ag.status === 'sent' ? 'warn' : 'no'), 'ข้อตกลงในการพัฒนางาน: ' + (DOC_ST[ag.status] || DOC_ST.draft)[0], 'admin-agreement', 'เปิดข้อตกลง'));
    var chN = [ch.title, ch.problem, (ch.steps || []).length ? 'x' : '', ch.quant, ch.qual].filter(function (v) { return String(v || '').trim(); }).length;
    out.push(ckItem(chN === 5 ? 'ok' : (chN ? 'warn' : 'no'), 'ประเด็นท้าทาย (ส่วนที่ 2) เขียนแล้ว ' + chN + ' จาก 5 ส่วน', 'admin-pa', 'เขียนต่อ'));
    out.push(ckItem(String(ch.result || '').trim() ? 'ok' : 'warn', String(ch.result || '').trim() ? 'มีผลที่เกิดขึ้นของประเด็นท้าทาย' : 'ยังไม่มีผลที่เกิดขึ้นของประเด็นท้าทาย', 'admin-calc', 'คำนวณผล'));
    out.push(ckItem((idp.goals || []).length ? 'ok' : 'warn', 'ID Plan: ' + ((idp.goals || []).length ? (idp.goals.length + ' เป้าหมาย · ' + (DOC_ST[idp.status] || DOC_ST.draft)[0]) : 'ยังไม่มีเป้าหมาย'), 'admin-idplan', 'เปิด ID Plan'));
    var hrs = fyHours(S.fy), ht = +idp.hoursTarget || +st().hoursGoal || 0;
    if (ht) out.push(ckItem(hrs >= ht ? 'ok' : 'warn', 'ชั่วโมงพัฒนาตนเอง ' + hrs + ' / ' + ht + ' ชม.', 'admin-awards', 'เพิ่มการอบรม'));
    var vids = D.content.videos.filter(function (v) { return (v.pa || v.type === 'pa') && (v.fy ? v.fy === S.fy : inFy(v.date, S.fy)); });
    out.push(ckItem(vids.length ? (vids.some(function (v) { return v.vis !== 'private' && v.url; }) ? 'ok' : 'warn') : 'no', vids.length ? 'วิดีโอการสอนสำหรับ PA ' + vids.length + ' คลิป' : 'ยังไม่มีวิดีโอการสอนสำหรับ PA', 'admin-videos', 'เพิ่มวิดีโอ'));
    out.push(ckItem(dv.pa === 'private' ? 'no' : 'ok', dv.pa === 'private' ? 'แฟ้ม PA ตั้งเป็นส่วนตัว กรรมการมองไม่เห็น' : 'กรรมการเปิดแฟ้ม PA ได้', 'admin-settings', 'ตั้งค่าการแสดงผล'));
    var L = S.comList[S.fy]; if (!L) needComList(S.fy);
    var nCom = L ? L.list.length : -1;
    if (nCom >= 0) out.push(ckItem(nCom >= 3 ? 'ok' : (nCom ? 'warn' : 'no'), 'คณะกรรมการประเมิน ' + nCom + ' / 3 คน', 'admin-committee', 'ตั้งกรรมการ'));
    out.push(ckItem(pa.status === 'ready' ? 'ok' : 'warn', pa.status === 'ready' ? 'ตั้งแฟ้มเป็นพร้อมให้ประเมินแล้ว' : 'แฟ้มยังเป็นร่าง (กดพร้อมให้ประเมินเมื่อตรวจครบ)', 'admin-pa', 'เปิดแฟ้ม PA'));
    return out;
  }
  function ckChip(i) { return '<span class="chip"><span class="tl-light ' + (i.s === 'ok' ? 'g' : (i.s === 'no' ? 'r' : 'y')) + '"></span> ' + esc(i.t) + '</span>'; }
  function ckLink(i, cls) {
    if (i.go.indexOf('pa:') === 0) return '<button class="btn sm' + (cls || '') + '" data-act="pa-edit" data-k="' + i.go.slice(3) + '">' + esc(i.fix) + '</button>';
    return '<a class="btn sm' + (cls || '') + '" href="#' + i.go + '">' + esc(i.fix) + '</a>';
  }
  function aChecklist() {
    var dd = docsOf(S.fy); if (!dd) return docsWait('admin-checklist', 'เช็กลิสต์');
    var res = IND_BASE.map(function (x) { return { x: x, c: ckInd(x.code, dd) }; }), glob = ckGlobal(dd), f = S.ckF || 'all', cnt = { g: 0, y: 0, r: 0 };
    res.forEach(function (r) { cnt[r.c.light]++; });
    var score = res.reduce(function (t, r) { return t + (r.c.light === 'g' ? 1 : (r.c.light === 'y' ? 0.5 : 0)); }, 0) + glob.reduce(function (t, i) { return t + (i.s === 'ok' ? 1 : (i.s === 'warn' ? 0.5 : 0)); }, 0);
    var pct = Math.round(score / (res.length + glob.length) * 100);
    var kpis = '<div class="grid4"><div class="kpi"><span class="l">ความพร้อมก่อนส่ง</span><span class="v">' + pct + '%</span><div class="prog"><i style="width:' + pct + '%"></i></div></div>' +
      '<div class="kpi"><span class="l"><span class="tl-light g"></span> พร้อมส่ง</span><span class="v">' + cnt.g + '<small class="muted" style="font-size:15px"> / ' + res.length + ' ข้อ</small></span></div>' +
      '<div class="kpi warn"><span class="l"><span class="tl-light y"></span> ควรปรับ</span><span class="v">' + cnt.y + '</span></div>' +
      '<div class="kpi" style="border-left-color:var(--bad)"><span class="l"><span class="tl-light r"></span> ต้องแก้ก่อนส่ง</span><span class="v">' + cnt.r + '</span></div></div>';
    var gl = '<div class="card"><h3>ภาพรวมของแฟ้ม ปีงบ ' + S.fy + '</h3><div class="ck-list">' + glob.map(function (i) {
      return '<div class="ck-g"><span class="tl-light ' + (i.s === 'ok' ? 'g' : (i.s === 'no' ? 'r' : 'y')) + '" title="' + (i.s === 'ok' ? 'เรียบร้อย' : (i.s === 'no' ? 'ต้องแก้' : 'ควรปรับ')) + '"></span><span style="flex:1">' + esc(i.t) + '</span>' + (i.s === 'ok' ? '<span class="small muted">เรียบร้อย</span>' : ckLink(i)) + '</div>';
    }).join('') + '</div></div>';
    var segs = '<div class="seg" role="group" aria-label="กรองสถานะ">' + [['all', 'ทั้งหมด'], ['r', 'ต้องแก้'], ['y', 'ควรปรับ'], ['g', 'พร้อมส่ง']].map(function (o) { return '<button type="button" data-act="ck-filter" data-k="' + o[0] + '" class="' + (f === o[0] ? 'on' : '') + '">' + o[1] + (o[0] !== 'all' ? ' ' + cnt[o[0]] : '') + '</button>'; }).join('') + '</div>';
    var sides = [1, 2, 3].map(function (sd) {
      var rows = res.filter(function (r) { return indSide(r.x.code) === sd && (f === 'all' || r.c.light === f); });
      if (!rows.length) return '';
      return '<div class="card"><div class="eyebrow">ด้านที่ ' + sd + '</div><h3 style="margin:2px 0 4px">' + SIDES[sd] + '</h3>' + rows.map(function (r) {
        var bad = r.c.it.filter(function (i) { return i.s === 'no'; })[0] || r.c.it.filter(function (i) { return i.s !== 'ok'; })[0];
        return '<div class="ck-row"><span class="ck-code"><span class="tl-light ' + r.c.light + '" title="' + LIGHT_T[r.c.light] + '"></span><b>' + r.x.code + '</b></span><div><div>' + esc(r.x.name) + '</div><div class="ck-items">' + r.c.it.map(ckChip).join('') + '</div></div>' +
          '<div class="ck-act"><span class="small ' + (r.c.light === 'g' ? 'muted' : '') + '">' + LIGHT_T[r.c.light] + '</span>' + (bad ? ckLink(bad) : '') + '</div></div>';
      }).join('') + '</div>';
    }).join('');
    return adminShell('admin-checklist', 'เช็กลิสต์ก่อนส่งแฟ้ม', 'ระบบตรวจทุกตัวชี้วัดให้อัตโนมัติ ไฟเขียว = พร้อมส่ง เหลือง = ควรปรับ แดง = ต้องแก้ก่อนเปิดให้กรรมการประเมิน',
      '<a class="btn" href="#present">' + ic('slides', 16) + ' โหมดนำเสนอ</a><a class="btn primary" href="#report">' + ic('print', 16) + ' รายงาน PDF</a>',
      kpis + '<div style="margin-top:16px">' + gl + '</div><div class="row" style="justify-content:space-between;margin:18px 0 10px"><h3>รายตัวชี้วัด ปีงบ ' + S.fy + '</h3>' + segs + '</div><div style="display:flex;flex-direction:column;gap:14px">' + (sides || '<div class="card empty">ไม่มีตัวชี้วัดในสถานะนี้</div>') + '</div>');
  }

  /* ---------- 4) เชื่อมข้อมูลจากระบบที่จัดทำ ---------- */
  var SRC_MODE = { count: 'นับจำนวนแถว', sum: 'ผลรวมของคอลัมน์ตัวเลข', avg: 'ค่าเฉลี่ยของคอลัมน์ตัวเลข', month: 'นับจำนวนรายเดือน', bands: 'การกระจายของคะแนน (5 ช่วง)' };
  function needSrc(force) {
    if (S.srcLoading || (S.src && !force)) return;
    S.srcLoading = true;
    api('srcList', {}, { loader: false }, function (err, res) { S.srcLoading = false; if (err) { S.src = { list: [], err: err }; } else S.src = res; if (route() === 'admin-sync') render(); });
  }
  function srcMonth(k) { var p = k.split('-'); return p.length === 2 ? TH_M[+p[1] - 1] + ' ' + String(+p[0] + 543).slice(-2) : k; }
  function srcChart(s) {
    var L = s.last; if (!L) return '<p class="small muted">ยังไม่ได้ดึงข้อมูล</p>';
    var g = L.groups || [], unit = s.unit || (s.mode === 'count' || s.mode === 'month' || s.mode === 'bands' ? 'รายการ' : '');
    var big = '<div class="row" style="gap:14px;align-items:baseline"><span style="font-size:30px;font-weight:700" class="num">' + nfmt(L.total) + '</span><span class="small muted">' + (s.mode === 'avg' ? 'ค่าเฉลี่ยรวม' : (s.mode === 'sum' ? 'ผลรวม' : 'รวมทั้งหมด')) + (unit ? ' (' + esc(unit) + ')' : '') + ' · จาก ' + nfmt(L.rows) + ' แถว' + (L.fy ? ' ในปีงบ ' + L.fy : '') + '</span></div>';
    if (!g.length) return big;
    var ch = s.mode === 'month' ? vChart({ cats: g.map(function (x) { return srcMonth(x[0]); }), series: [{ name: s.name, vals: g.map(function (x) { return x[1]; }), color: 'var(--s1)' }], int: true, unit: unit, h: 220, aria: s.name + ' รายเดือน' })
      : (s.mode === 'bands' ? vChart({ cats: g.map(function (x) { return x[0]; }), series: [{ name: s.name, vals: g.map(function (x) { return x[1]; }), color: 'var(--s1)' }], int: true, unit: 'รายการ', h: 220, aria: s.name + ' ตามช่วงคะแนน' })
      : hChart({ items: g.slice(0, 12).map(function (x) { return { l: String(x[0]), v: x[1] }; }), color: 'var(--s1)', unit: unit, aria: s.name + ' แยกตาม ' + s.groupCol }));
    return big + '<div class="viz" style="margin-top:8px">' + ch + tableView([s.groupCol || (s.mode === 'month' ? 'เดือน' : 'ช่วง'), 'ค่า'], g.map(function (x) { return [s.mode === 'month' ? srcMonth(x[0]) : x[0], nfmt(x[1])]; })) + '</div>';
  }
  function srcSummary(s) {
    var L = s.last || {}, g = (L.groups || []).slice(0, 12);
    return 'สรุปข้อมูลจาก “' + (L.file || s.name) + '” ณ ' + fdt(L.at) + (L.fy ? ' (ปีงบประมาณ ' + L.fy + ')' : '') + '\n' + SRC_MODE[s.mode] + (s.col ? ' “' + s.col + '”' : '') + ': ' + nfmt(L.total) + (s.unit ? ' ' + s.unit : '') + ' จาก ' + nfmt(L.rows) + ' แถว' +
      (g.length ? '\n' + g.map(function (x) { return '- ' + (s.mode === 'month' ? srcMonth(x[0]) : x[0]) + ': ' + nfmt(x[1]); }).join('\n') : '');
  }
  function aSync() {
    needSrc();
    var body;
    if (!S.src) body = '<div class="card"><div class="sk" style="height:220px"></div></div>';
    else {
      var cards = S.src.list.map(function (s) {
        var sy = s.sysId ? find(D.content.systems, 'id', s.sysId) : null;
        return '<div class="card chart-card"><div class="row" style="justify-content:space-between;gap:8px"><h3>' + esc(s.name) + '</h3><span class="pill good">' + ic('link', 13) + ' เชื่อมแล้ว</span></div>' +
          '<div class="sub">' + (sy ? esc(sy.name) + ' · ' : '') + esc(SRC_MODE[s.mode]) + (s.groupCol ? ' แยกตาม “' + esc(s.groupCol) + '”' : '') + (s.last ? ' · ดึงล่าสุด ' + fdt(s.last.at) : '') + (s.ind.length ? ' · ตัวชี้วัด ' + s.ind.join(', ') : '') + '</div>' + srcChart(s) +
          '<div class="row" style="gap:8px;margin-top:6px;justify-content:flex-end"><button class="btn sm danger" data-act="src-del" data-id="' + s.id + '">' + ic('trash', 14) + '</button><button class="btn sm" data-act="src-edit" data-id="' + s.id + '">' + ic('edit', 14) + ' ตั้งค่า</button>' +
          '<button class="btn sm" data-act="src-run" data-id="' + s.id + '">' + ic('refresh', 14) + ' ดึงข้อมูลตอนนี้</button><button class="btn sm primary" data-act="src-ev" data-id="' + s.id + '"' + (s.last ? '' : ' disabled') + '>' + ic('plus', 14) + ' เพิ่มเป็นหลักฐาน</button></div></div>';
      }).join('');
      body = (S.src.err ? '<div class="err">' + esc(S.src.err) + '</div>' : '') + '<div class="note" style="margin-bottom:14px">' + ic('shield', 15) + ' ระบบอ่านชีตปลายทางอย่างเดียว และเก็บเฉพาะตัวเลขสรุป ไม่ดึงชื่อหรือข้อมูลรายบุคคลของนักเรียน (ไม่ควรเลือกคอลัมน์ชื่อนักเรียนเป็นคอลัมน์แยกกลุ่ม)</div>' +
        (cards ? '<div class="stat-grid">' + cards + '</div>' : '<div class="card empty">' + ic('link', 22) + '<p>ยังไม่ได้เชื่อมข้อมูล กด “เชื่อมชีตใหม่” แล้ววางลิงก์ Google Sheets ของระบบเช็กชื่อ ระบบส่งงาน หรือระบบประกาศผลสอบที่ทำไว้</p></div>');
    }
    return adminShell('admin-sync', 'เชื่อมข้อมูลจากระบบที่จัดทำ', 'ดึงสรุปข้อมูลจากชีตของระบบ GAS อื่นของครูมาเป็นกราฟ แล้วบันทึกเป็นหลักฐานผูกตัวชี้วัดได้ในคลิกเดียว (ไฟล์ต้องอยู่ในบัญชี Google เดียวกัน หรือแชร์สิทธิ์ให้แล้ว)',
      '<a class="btn" href="#admin-systems">' + ic('code', 16) + ' ระบบที่จัดทำ</a><button class="btn primary" data-act="src-new">' + ic('plus', 16) + ' เชื่อมชีตใหม่</button>', body);
  }
  function srcForm() {
    var f = S.srcF, it = f.item, p = f.probe;
    function colSel(id, cur, lbl, opt) { return '<div class="field"><label for="' + id + '">' + lbl + '</label><select id="' + id + '" class="inp"><option value="">' + (opt || 'ไม่ใช้') + '</option>' + (p ? p.headers : (cur ? [cur] : [])).filter(String).map(function (h) { return '<option' + (h === cur ? ' selected' : '') + '>' + esc(h) + '</option>'; }).join('') + '</select></div>'; }
    var body = '<div class="field"><label for="sf-name">ชื่อชุดข้อมูล</label><input id="sf-name" class="inp" maxlength="120" value="' + esc(it.name) + '" placeholder="เช่น การมาเรียนของนักเรียน ป.4"></div>' +
      '<div class="field"><label for="sf-sys">มาจากระบบ</label><select id="sf-sys" class="inp"><option value="">ไม่ระบุ</option>' + D.content.systems.map(function (s) { return '<option value="' + s.id + '"' + (s.id === it.sysId ? ' selected' : '') + '>' + esc(s.name) + '</option>'; }).join('') + '</select></div>' +
      '<div class="field"><label for="sf-ss">ลิงก์ Google Sheets ของระบบนั้น</label><div class="row" style="gap:6px;flex-wrap:nowrap"><input id="sf-ss" class="inp" value="' + esc(it.ssId) + '" placeholder="https://docs.google.com/spreadsheets/d/…"><button class="btn" data-act="src-probe">' + ic('search', 16) + ' ตรวจสอบ</button></div>' +
        (p ? '<span class="hint" style="color:var(--good)">' + ic('check', 13) + ' เปิดได้: ' + esc(p.title) + ' · ' + nfmt(p.rows) + ' แถว</span>' : '<span class="hint">กดตรวจสอบเพื่อเลือกแท็บและคอลัมน์</span>') + '</div>' +
      (p ? '<div class="field"><label for="sf-sheet">แท็บ</label><select id="sf-sheet" class="inp" data-act-change="src-sheet">' + p.sheets.map(function (n) { return '<option' + (n === (it.sheet || p.sheet) ? ' selected' : '') + '>' + esc(n) + '</option>'; }).join('') + '</select></div>' : '') +
      '<div class="field"><label for="sf-mode">สรุปแบบ</label><select id="sf-mode" class="inp">' + Object.keys(SRC_MODE).map(function (k) { return '<option value="' + k + '"' + (k === it.mode ? ' selected' : '') + '>' + SRC_MODE[k] + '</option>'; }).join('') + '</select></div>' +
      '<div class="grid3">' + colSel('sf-col', it.col, 'คอลัมน์ตัวเลข', 'ไม่ใช้ (นับแถว)') + colSel('sf-group', it.groupCol, 'แยกกลุ่มตาม') + colSel('sf-date', it.dateCol, 'คอลัมน์วันที่') + '</div>' +
      '<div class="grid2">' + chk('sf-fy', it.fyOnly, 'นับเฉพาะแถวในปีงบที่เลือก (ใช้คอลัมน์วันที่)') + '<div class="field"><label for="sf-unit">หน่วย</label><input id="sf-unit" class="inp" maxlength="20" value="' + esc(it.unit) + '" placeholder="คน / ครั้ง / คะแนน"></div></div>' +
      '<div class="field"><label>ผูกกับตัวชี้วัด</label>' + indChecks(it.ind) + '</div><div id="f-err"></div>';
    openModal(it.id ? 'ตั้งค่าการเชื่อมข้อมูล' : 'เชื่อมชีตใหม่', body, '<button class="btn" data-act="close-modal">ยกเลิก</button><button class="btn primary" data-act="src-save">' + ic('check', 16) + ' บันทึกและดึงข้อมูล</button>', true);
  }
  function srcRead() {
    var it = S.srcF.item;
    it.name = $('sf-name').value.trim(); it.sysId = $('sf-sys').value; it.ssId = $('sf-ss').value.trim(); it.mode = $('sf-mode').value;
    it.col = $('sf-col').value; it.groupCol = $('sf-group').value; it.dateCol = $('sf-date').value; it.fyOnly = $('sf-fy').checked; it.unit = $('sf-unit').value.trim();
    var sh = $('sf-sheet'); if (sh) it.sheet = sh.value;
    it.ind = []; Array.prototype.forEach.call(document.querySelectorAll('.f-ind'), function (c) { if (c.checked) it.ind.push(c.value); });
    return it;
  }
  function srcProbe(sheet) {
    var it = srcRead(); if (sheet) it.sheet = sheet;
    api('srcProbe', { ssId: it.ssId, sheet: sheet || it.sheet || '' }, { loader: 'กำลังเปิดชีตปลายทาง' }, function (err, res) {
      if (err) { formErr(err); return; }
      S.srcF.probe = res; it.ssId = res.ssId; it.sheet = res.sheet;
      if (!it.name) it.name = res.title;
      srcForm();
    });
  }
  function srcEvidence(s) {
    var sy = s.sysId ? find(D.content.systems, 'id', s.sysId) : null, link = sy ? (sy.links.filter(function (l) { return l.url && l.vis !== 'private'; })[0] || {}).url || '' : '';
    var item = { title: s.name + ' (สรุป ณ ' + fd(todayIso()) + ')', cat: 'media', date: todayIso(), ind: s.ind, vis: st().defaultVis === 'private' ? 'committee' : (st().defaultVis || 'committee'), desc: srcSummary(s), link: link, hours: 0, featured: false };
    confirmBox('เพิ่ม “' + esc(item.title) + '” เป็นผลงานในคลัง' + (s.ind.length ? ' ผูกตัวชี้วัด ' + s.ind.join(', ') : ' (ยังไม่ได้ผูกตัวชี้วัด แก้ภายหลังได้)') + '?', 'เพิ่มเป็นหลักฐาน', function () {
      api('saveItem', { kind: 'works', item: item }, { loader: 'กำลังบันทึกหลักฐาน' }, function (err, res) {
        if (err) { toast(err); return; }
        D.content.works = res.works; render(); toast('เพิ่มเป็นหลักฐานในคลังผลงานแล้ว');
      });
    });
  }

  /* ---------- 5) ผู้ช่วย AI เขียนรายงาน ---------- */
  var XA_TASK = {
    reflect: { t: 'บันทึกหลังสอน', i: 'pen', hint: 'เช่น สอนเรื่องการบวกเศษส่วน นักเรียนส่วนใหญ่ทำได้ แต่ [ตัวเลข] คนยังหา ค.ร.น. ไม่ได้' },
    reply: { t: 'ร่างคำตอบกรรมการ', i: 'chat', hint: 'เช่น ไฟล์สรุปผลที่ผู้อำนวยการลงนามแล้ว' },
    work: { t: 'คำอธิบายผลงาน', i: 'folder', hint: 'เช่น นักเรียนใช้ทุกวันช่วงโฮมรูม ครูในโรงเรียนนำไปใช้ต่อ' },
    result: { t: 'สรุปผลที่เกิดขึ้น (ส่วนที่ 2)', i: 'chart', hint: 'เช่น นักเรียนกล้าออกมาแสดงวิธีคิดหน้าชั้นมากขึ้น' },
    polish: { t: 'เกลาข้อความให้เป็นทางการ', i: 'spark', hint: 'คำแนะนำเพิ่มเติม เช่น ให้กระชับลง' }
  };
  function xa() { if (!S.xa) S.xa = { task: 'reflect', tone: 'formal', len: 'mid', out: '', hist: [] }; return S.xa; }
  function aAi() {
    var a = xa(), on = opsSum().ai;
    if (a.task === 'result') { needCalc(); needDocs(S.fy); }
    if (a.task === 'reply') needReqs();
    var tasks = Object.keys(XA_TASK).map(function (k) { return '<button type="button" class="ai-task' + (a.task === k ? ' on' : '') + '" data-act="xa-task" data-k="' + k + '">' + ic(XA_TASK[k].i, 18) + '<span>' + XA_TASK[k].t + '</span></button>'; }).join('');
    var pick = '';
    if (a.task === 'reflect') pick = '<div class="field"><label for="xa-lesson">เรื่องที่สอน / ชั้น</label><input id="xa-lesson" class="inp" maxlength="300" value="' + esc(a.lesson || '') + '" placeholder="เช่น ป.4/1 การบวกเศษส่วนที่ตัวส่วนไม่เท่ากัน"></div>';
    else if (a.task === 'reply') { var rl = reqs().filter(function (q) { return q.status !== 'closed'; }); pick = rl.length ? '<div class="field"><label for="xa-rq">คำขอที่จะตอบ</label><select id="xa-rq" class="inp">' + rl.map(function (q) { var m = lastBy(q, 'com'); return '<option value="' + q.id + '"' + (q.id === a.rq ? ' selected' : '') + '>' + q.code + ' · ' + esc(q.comName) + ' · ' + esc((m ? m.msg : '').slice(0, 40)) + '</option>'; }).join('') + '</select></div>' : '<div class="note small">ยังไม่มีคำขอที่รอตอบ</div>'; }
    else if (a.task === 'work') pick = '<div class="field"><label for="xa-work">ผลงาน</label><select id="xa-work" class="inp">' + D.content.works.slice(0, 80).map(function (w) { return '<option value="' + w.id + '"' + (w.id === a.work ? ' selected' : '') + '>' + esc(w.title.length > 70 ? w.title.slice(0, 69) + '…' : w.title) + '</option>'; }).join('') + '</select></div>';
    else if (a.task === 'result') { var r = S.calc && S.calc.fy === S.fy ? calcStats() : null; pick = '<div class="note small">' + (r && r.n ? 'ใช้ตัวเลขจริงจากหน้า <a href="#admin-calc">คำนวณผลก่อน–หลังเรียน</a>: ' + r.n + ' คน ผ่านเกณฑ์หลังเรียนร้อยละ ' + fix(r.pctPost, 1) : 'ยังไม่มีคะแนน ไปกรอกที่หน้า <a href="#admin-calc">คำนวณผลก่อน–หลังเรียน</a> ก่อน') + '</div>'; }
    else pick = '<div class="field"><label for="xa-text">ข้อความที่จะเกลา</label><textarea id="xa-text" class="inp" rows="5" maxlength="3000">' + esc(a.text || '') + '</textarea></div>';
    var seg = function (key, opts) { return '<div class="seg" role="group">' + opts.map(function (o) { return '<button type="button" data-act="xa-opt" data-k="' + key + '" data-v="' + o[0] + '" class="' + (a[key] === o[0] ? 'on' : '') + '">' + o[1] + '</button>'; }).join('') + '</div>'; };
    var form = '<div class="card" style="display:flex;flex-direction:column;gap:12px"><h3>ต้องการให้ช่วยเขียนอะไร</h3><div class="ai-tasks">' + tasks + '</div>' + pick +
      '<div class="field"><label for="xa-note">ข้อมูลเพิ่มเติม (ไม่บังคับ · ไม่ใส่ชื่อนักเรียน)</label><textarea id="xa-note" class="inp" rows="3" maxlength="600" placeholder="' + esc(XA_TASK[a.task].hint) + '">' + esc(a.note || '') + '</textarea></div>' +
      (a.task === 'polish' ? '' : '<div class="grid2"><div class="field"><label>ภาษา</label>' + seg('tone', [['formal', 'ทางการ'], ['simple', 'กระชับ']]) + '</div><div class="field"><label>ความยาว</label>' + seg('len', [['short', 'สั้น'], ['mid', 'กลาง'], ['long', 'ยาว']]) + '</div></div>') +
      (on ? '<button class="btn primary" data-act="xa-gen" style="justify-content:center">' + ic('spark', 16) + ' ให้ AI ช่วยร่าง</button>' : '<div class="note warn-note small">' + ic('spark', 14) + ' ยังไม่ได้ใส่ API key ของผู้ช่วย AI (Gemini · Claude · Grok · ChatGPT) <a href="#admin-ops">ตั้งค่าที่หน้าการเชื่อมต่อ</a></div>') + '</div>';
    var applyLbl = { reply: 'ใส่ลงช่องตอบกรรมการ', work: 'ใช้เป็นคำอธิบายผลงาน', result: 'ใส่ลงผลที่เกิดขึ้น (ส่วนที่ 2)' }[a.task];
    var outCard = '<div class="card ai-out-card"><div class="row" style="justify-content:space-between"><h3>' + ic('spark', 18) + ' ร่างจาก AI</h3><span class="small muted">ตรวจและแก้ก่อนนำไปใช้ทุกครั้ง</span></div>' +
      '<div id="xa-out" class="ai-out' + (a.out ? '' : ' empty') + '" contenteditable="' + (a.out ? 'true' : 'false') + '" aria-label="ข้อความที่ AI ร่าง แก้ไขได้">' + (a.out ? esc(a.out) : 'เลือกงานทางซ้าย แล้วกด “ให้ AI ช่วยร่าง” ข้อความจะขึ้นที่นี่ และแก้ไขในกรอบนี้ได้ทันที') + '</div>' +
      (a.meta ? '<span class="small muted">' + esc(a.meta) + '</span>' : '') +
      '<div class="row" style="gap:8px"' + (a.out ? '' : ' hidden') + '><button class="btn" data-act="xa-gen">' + ic('refresh', 16) + ' ร่างใหม่</button><button class="btn" data-act="xa-copy">' + ic('copy', 16) + ' คัดลอก</button>' + (applyLbl ? '<button class="btn primary" data-act="xa-apply">' + ic('check', 16) + ' ' + applyLbl + '</button>' : '') + '</div></div>';
    var hist = a.hist.map(function (h, i) { return '<button class="todo" data-act="xa-hist" data-i="' + i + '" style="width:100%;text-align:left;background:none;border:0;font:inherit;cursor:pointer"><span class="chip">' + esc(XA_TASK[h.task].t.split(' (')[0]) + '</span><span style="flex:1;min-width:0" class="small">' + esc(h.text.length > 80 ? h.text.slice(0, 79) + '…' : h.text) + '<br><span class="muted">' + esc(h.at) + '</span></span></button>'; }).join('');
    var privacy = '<div class="card small muted">' + ic('shield', 15) + ' ส่งให้ AI เฉพาะชื่อตัวชี้วัด ชื่อผลงาน ตัวเลขสรุป และข้อความที่ครูพิมพ์ ไม่ส่งชื่อหรือข้อมูลรายบุคคลของนักเรียน · ใช้ได้วันละ 150 ครั้ง</div>';
    return adminShell('admin-ai', 'ผู้ช่วย AI เขียนรายงาน', 'ร่างบันทึกหลังสอน คำตอบกรรมการ คำอธิบายผลงาน และสรุปผลประเด็นท้าทาย จากข้อมูลที่มีอยู่ในระบบ', '',
      '<div class="ai-layout"><div style="display:flex;flex-direction:column;gap:14px">' + form + privacy + '</div><div style="display:flex;flex-direction:column;gap:14px">' + outCard +
      '<div class="card"><h3 style="margin-bottom:6px">ร่างล่าสุด (เฉพาะครั้งนี้)</h3>' + (hist || '<p class="small muted">ยังไม่มี</p>') + '</div></div></div>');
  }
  function xaRead() {
    var a = xa(), g = function (id) { var e = $(id); return e ? e.value : undefined; };
    if (g('xa-lesson') !== undefined) a.lesson = g('xa-lesson');
    if (g('xa-rq') !== undefined) a.rq = g('xa-rq');
    if (g('xa-work') !== undefined) a.work = g('xa-work');
    if (g('xa-text') !== undefined) a.text = g('xa-text');
    if (g('xa-note') !== undefined) a.note = g('xa-note');
    var o = $('xa-out'); if (o && a.out) a.out = o.innerText;
    return a;
  }
  function xaGen(btn) {
    var a = xaRead(), ctx = { tone: a.tone, len: a.len, extra: a.note || '' }, task = a.task;
    if (task === 'reflect') ctx.lesson = a.lesson || '';
    else if (task === 'reply') { var q = find(reqs(), 'id', a.rq) || reqs().filter(function (x) { return x.status !== 'closed'; })[0]; if (!q) { toast('ยังไม่มีคำขอที่รอตอบ'); return; } a.rq = q.id; var m = lastBy(q, 'com'); ctx.code = q.code; ctx.name = indName(q.code); ctx.ask = m ? m.msg : ''; ctx.ev = evidenceOf(q.code, q.fy).map(function (e) { return e.title; }).slice(0, 8); }
    else if (task === 'work') { var w = find(D.content.works, 'id', a.work) || D.content.works[0]; if (!w) { toast('ยังไม่มีผลงานในคลัง'); return; } a.work = w.id; ctx.title = w.title; ctx.cat = (CATS[w.cat] || CATS.media).label; ctx.ind = w.ind.map(function (c) { return c + ' ' + indName(c); }); ctx.desc = w.desc; }
    else if (task === 'result') { if (!S.calc || S.calc.fy !== S.fy) { toast('กำลังโหลดคะแนน ลองอีกครั้ง'); needCalc(); return; } var r = calcStats(); if (!r.n) { toast('ยังไม่มีคะแนนก่อน–หลังเรียน'); return; } ctx.stats = r; ctx.title = S.calc.data.title || ((docsOf(S.fy) || { pa: { challenge: {} } }).pa.challenge.title || ''); }
    else { ctx.text = a.text || ''; if (!ctx.text.trim()) { toast('วางข้อความที่จะเกลาก่อน'); return; } }
    if (btn) btn.disabled = true;
    api('aiWrite', { task: task, ctx: ctx }, { loader: 'AI กำลังร่างข้อความ', timeout: 90000 }, function (err, res) {
      if (btn) btn.disabled = false;
      if (err) { toast(err); return; }
      a.out = res.text; a.meta = (res.provName ? res.provName + ' ' : '') + res.model + (res.fallback ? ' (ใช้เจ้าสำรอง)' : '') + ' · เหลือ ' + res.left + ' ครั้งวันนี้';
      a.hist.unshift({ task: task, text: res.text, at: fdt(todayIso() + ' ' + ('0' + new Date().getHours()).slice(-2) + ':' + ('0' + new Date().getMinutes()).slice(-2)) }); a.hist = a.hist.slice(0, 6);
      render();
    });
  }
  function xaApply() {
    var a = xaRead(), t = a.out || '';
    if (a.task === 'reply') { S.rqDraft = S.rqDraft || {}; S.rqDraft[a.rq] = t; S.rqF = 'all'; location.hash = 'admin-requests'; setTimeout(function () { var el = $('rq-' + a.rq); if (el) el.scrollIntoView({ block: 'start' }); }, 80); toast('ใส่ข้อความในช่องตอบแล้ว ตรวจทานแล้วกดส่งคำตอบ'); return; }
    if (a.task === 'work') {
      var w = find(D.content.works, 'id', a.work); if (!w) return;
      confirmBox('ใช้ข้อความนี้เป็นคำอธิบายของ “' + esc(w.title) + '”?' + (w.desc ? ' <b>คำอธิบายเดิมจะถูกแทนที่</b>' : ''), 'บันทึก', function () {
        var it = clone(w); it.desc = t;
        api('saveItem', { kind: 'works', item: it }, { loader: 'กำลังบันทึก' }, function (err, res) { if (err) { toast(err); return; } D.content.works = res.works; render(); toast('บันทึกคำอธิบายผลงานแล้ว'); });
      });
      return;
    }
    if (a.task === 'result') calcApply(t);
  }

  /* ---------- 6) หน้าหลักสาธารณะ: การประเมิน · หลักฐานตามตัวชี้วัด · ชวนทำแบบประเมิน ---------- */
  function homeEval() {
    var fy = S.fy, dd = docsOf(fy); if (!dd && !S.com) needDocs(fy);
    function row(t, sub, pill, href) { return '<a class="round-item" href="#' + href + '" style="color:inherit;text-decoration:none"><div><div class="t">' + t + '</div><div class="small muted">' + sub + '</div></div>' + pill + '</a>'; }
    function stp(d, def) { if (!d) return '<span class="sk" style="width:80px;height:20px;display:inline-block"></span>'; if (d.hidden) return '<span class="pill off">ไม่เปิดเผย</span>'; var x = DOC_ST[d.status] || DOC_ST.draft; return '<span class="pill ' + x[1] + '">' + (d.status === 'draft' || !d.status ? def || x[0] : x[0]) + '</span>'; }
    var rg = fyRange(fy), sv = D.survey;
    var rows = row('ข้อตกลงในการพัฒนางาน (PA)', 'แบบ PA1 · ปีงบประมาณ ' + fy, stp(dd && dd.agree, 'กำลังจัดทำ'), 'agreement') +
      row('แฟ้มผลงาน PA และการประเมิน', 'รอบ ' + fd(rg[0]) + ' – ' + fd(rg[1]), stp(dd && dd.pa, 'กำลังรวบรวมหลักฐาน'), 'pa') +
      row('แผนพัฒนาตนเอง (ID Plan)', 'ผูกกับข้อตกลงปีเดียวกัน', stp(dd && dd.idp, 'กำลังจัดทำ'), 'idplan') +
      (sv ? row('แบบประเมินความพึงพอใจ', esc(sv.label) + (sv.closeAt ? ' · ถึง ' + fd(sv.closeAt) : ''), '<span class="pill info">เปิดรับคำตอบ</span>', 'survey') : '');
    var codes = IND_BASE.map(function (x) { return evidenceOf(x.code, fy).length; }), ok = codes.filter(function (n) { return n >= 2; }).length, any = codes.filter(function (n) { return n > 0; }).length;
    var cov = '<div class="card"><div class="sec-h"><h3>' + ic('target', 18) + ' ความพร้อมของหลักฐาน</h3><a href="#pa" class="small">ดูแฟ้ม ' + ic('chev', 13) + '</a></div>' +
      '<div class="row" style="gap:18px;align-items:center;margin-top:12px;flex-wrap:nowrap"><div style="font-size:40px;font-weight:700;line-height:1" class="num">' + ok + '<span class="muted" style="font-size:18px"> / ' + IND_BASE.length + '</span></div><div class="small muted">ตัวชี้วัดที่มีหลักฐานตั้งแต่ 2 ชิ้นขึ้นไป · มีหลักฐานแล้ว ' + any + ' ตัวชี้วัด รวม ' + codes.reduce(function (t, n) { return t + n; }, 0) + ' ชิ้น</div></div>' +
      '<div class="prog" style="margin-top:12px"><i style="width:' + Math.round(ok / IND_BASE.length * 100) + '%"></i></div></div>';
    return '<section class="sec"><div class="grid2" style="align-items:start"><div class="card"><div class="sec-h"><h3>' + ic('file', 18) + ' การประเมิน ปีงบ ' + fy + '</h3></div><div style="margin-top:6px">' + rows + '</div></div>' + cov + '</div></section>';
  }
  function homeCoverage() {
    var fy = S.fy;
    var cov = [1, 2, 3].map(function (sd) {
      var rows = IND_BASE.filter(function (x) { return indSide(x.code) === sd; }).map(function (x) {
        var n = evidenceOf(x.code, fy).length;
        return '<div class="cov-row"><span class="c">' + x.code + '</span><div class="bar" role="img" aria-label="ตัวชี้วัด ' + x.code + ' หลักฐาน ' + n + ' ชิ้น"><i class="' + (n < 2 ? 'low' : '') + '" style="width:' + Math.min(100, n / 4 * 100) + '%"></i></div><span class="n">' + n + ' ชิ้น</span><span class="cov-name">' + esc(x.name) + '</span></div>';
      }).join('');
      return '<div class="card"><div class="eyebrow">ด้านที่ ' + sd + '</div><h3 style="margin:2px 0 12px">' + SIDES[sd] + '</h3><div class="cov">' + rows + '</div></div>';
    }).join('');
    return '<section class="sec"><div class="sec-h"><div><span class="eyebrow">PA ปีงบ ' + fy + ' · ' + IND_BASE.length + ' ตัวชี้วัด</span><h2>หลักฐานตามตัวชี้วัด</h2></div><span class="small muted">แถบสีส้ม = มีหลักฐานน้อยกว่า 2 ชิ้น</span></div><div class="grid3" style="align-items:start">' + cov + '</div></section>';
  }
  function homeSurveyCta() {
    var sv = D.survey; if (!sv) return '';
    return '<section class="sec"><div class="card raised sv-cta">' + qrSvg(siteUrl() + '#survey', 132, 'QR code แบบประเมินความพึงพอใจ') +
      '<div style="flex:1;display:flex;flex-direction:column;gap:6px;min-width:0"><span class="eyebrow">นักเรียน ผู้ปกครอง และเพื่อนครู</span><h2>ช่วยประเมินการจัดการเรียนรู้ของครู</h2><p class="muted">' + esc(sv.label) + ' · ใช้เวลาประมาณ 2 นาที ไม่ต้องระบุชื่อ ผลรวมใช้ประกอบการพัฒนาการสอนและแฟ้ม PA' + (sv.closeAt ? ' · เปิดรับถึง ' + fd(sv.closeAt) : '') + '</p><div><a class="btn primary" href="#survey">' + ic('clip', 16) + ' ทำแบบประเมิน</a></div></div></div></section>';
  }

  /* ---------- 7) ID Plan: แนวโน้มคะแนน PA ย้อนหลัง ---------- */
  function needTrend(force) {
    if (S.trendLoading || (S.trend && !force)) return;
    S.trendLoading = true;
    api('paTrend', {}, { loader: false }, function (err, res) { S.trendLoading = false; if (err) { S.trend = { list: [], past: [], err: err }; } else S.trend = res; var r = route(); if (r === 'admin-idplan' || r === 'admin') render(); });
  }
  function trendPts() {
    var t = S.trend || { list: [], past: [] }, pts = [], seen = {};
    t.list.forEach(function (x) { if (x.n) seen[x.fy] = 1; });
    t.past.forEach(function (x) { if (!seen[x[0]]) pts.push({ fy: x[0], v: x[1], tip: 'ปีงบ ' + x[0] + ' (บันทึกเอง)' }); });
    t.list.forEach(function (x) { if (x.n) pts.push({ fy: x.fy, v: x.pct, tip: 'ปีงบ ' + x.fy + ' · เฉลี่ยจากกรรมการ ' + x.n + '/' + x.of + ' คน' }); });
    pts.sort(function (a, b) { return a.fy - b.fy; });
    return pts.map(function (p) { return { l: 'ปี ' + String(p.fy).slice(2), v: p.v, tip: p.tip }; });
  }
  function paTrendCard() {
    needTrend();
    var pts = trendPts(), sg = scoring(), body;
    if (!S.trend) body = '<div class="sk" style="height:200px"></div>';
    else if (!pts.length) body = '<p class="small muted">ยังไม่มีผลประเมิน PA ที่กรรมการส่งครบ กด “คะแนนปีก่อน ๆ” เพื่อกรอกผลก่อนใช้ระบบนี้</p>';
    else body = '<div class="viz">' + lineChart({ pts: pts, color: 'var(--s1)', max: 100, ref: sg.passPct, refLabel: 'เกณฑ์ผ่าน ' + sg.passPct + '%', unit: '%', fmt: function (v) { return fix(v, 1); }, h: 230, aria: 'แนวโน้มคะแนน PA ร้อยละ ย้อนหลัง' }) +
      tableView(['ปีงบ', 'ร้อยละ'], pts.map(function (p) { return [p.l, fix(p.v, 2)]; })) + '</div>' +
      (pts.length > 1 ? '<p class="small" style="margin-top:6px">' + (pts[pts.length - 1].v >= pts[pts.length - 2].v ? 'เพิ่มขึ้น' : 'ลดลง') + ' ' + fix(Math.abs(pts[pts.length - 1].v - pts[pts.length - 2].v), 2) + ' จุดจากปีก่อน</p>' : '');
    return '<div class="card chart-card" style="margin-top:16px"><div class="row" style="justify-content:space-between;gap:8px"><div><h3>แนวโน้มคะแนน PA ย้อนหลัง</h3><div class="sub">ร้อยละของคะแนนรวม (เฉลี่ยจากกรรมการที่ส่งผลแล้ว) ใช้ตั้งเป้าหมายใน ID Plan ปีถัดไป</div></div><button class="btn sm" data-act="tr-past">' + ic('edit', 14) + ' คะแนนปีก่อน ๆ</button></div>' + body + '</div>';
  }
  function trendPastForm() {
    var past = (S.trend && S.trend.past) || [], rows = past.concat([['', '']]).slice(0, 10);
    while (rows.length < 4) rows.push(['', '']);
    openModal('คะแนน PA ก่อนใช้ระบบนี้', '<p class="small muted">กรอกร้อยละของคะแนนรวมจากผลการประเมินปีก่อน ๆ (เว้นว่างแถวที่ไม่ใช้) ปีที่กรรมการส่งผลในระบบแล้วจะใช้ค่าจากระบบแทน</p><div style="display:flex;flex-direction:column;gap:8px;margin-top:10px">' +
      rows.map(function (r, i) { return '<div class="grid2"><input class="inp num tr-y" type="number" min="2500" max="2700" placeholder="ปีงบ เช่น 2567" value="' + esc(r[0]) + '" aria-label="ปีงบ แถว ' + (i + 1) + '"><input class="inp num tr-v" type="number" min="0" max="100" step="0.01" placeholder="ร้อยละ" value="' + esc(r[1]) + '" aria-label="ร้อยละ แถว ' + (i + 1) + '"></div>'; }).join('') + '</div><div id="f-err"></div>',
      '<button class="btn" data-act="close-modal">ยกเลิก</button><button class="btn primary" data-act="tr-save">' + ic('check', 16) + ' บันทึก</button>');
  }

  /* ---------- 8) แดชบอร์ด: หลักฐานต่อตัวชี้วัด · ไทม์ไลน์รอบการประเมิน ---------- */
  function dashExtra() {
    var fy = S.fy, vals = IND_BASE.map(function (x) { return evidenceOf(x.code, fy).length; });
    var ev = '<div class="card chart-card span2"><div class="row" style="justify-content:space-between"><h3>หลักฐานต่อตัวชี้วัด ปีงบ ' + fy + '</h3><a class="small" href="#admin-checklist">เช็กลิสต์ก่อนส่ง ' + ic('chev', 13) + '</a></div><div class="sub">เส้นแดง = ควรมีอย่างน้อย 2 ชิ้นต่อตัวชี้วัด · ตัวชี้วัดที่ยังไม่ถึง ' + vals.filter(function (v) { return v < 2; }).length + ' ข้อ</div><div class="viz">' +
      vChart({ cats: IND_BASE.map(function (x) { return x.code; }), catTip: IND_BASE.map(function (x) { return x.code + ' ' + x.name; }), series: [{ name: 'หลักฐาน', vals: vals, color: 'var(--s1)' }], int: true, ref: 2, unit: 'ชิ้น', h: 230, aria: 'จำนวนหลักฐานต่อตัวชี้วัด' }) +
      tableView(['ตัวชี้วัด', 'หลักฐาน (ชิ้น)'], IND_BASE.map(function (x, i) { return [x.code + ' ' + x.name, vals[i]]; })) + '</div></div>';
    return ev + timelineCard();
  }
  function timelineCard() {
    var fy = S.fy, rg = fyRange(fy), t0 = Date.parse(rg[0]), t1 = Date.parse(rg[1]) + 864e5, span = t1 - t0, today = Date.parse(todayIso());
    function pc(iso) { return Math.max(0, Math.min(100, (Date.parse(iso) - t0) / span * 100)); }
    function track(lbl, a, b, mark, tip) {
      var l = pc(a), w = Math.max(1.2, pc(b) - l), done = Date.parse(b) < today;
      return '<div class="tl-row"><span class="small">' + lbl + '</span><div class="tl-track" data-tip="' + esc(tip || (lbl + '\n' + fd(a) + ' – ' + fd(b))) + '"><i class="' + (done ? 'done' : '') + '" style="left:' + l + '%;width:' + w + '%"></i>' + (mark ? '<b style="left:' + pc(mark) + '%" title="ครบกำหนด"></b>' : '') + '</div></div>';
    }
    var rows = track('ปีงบประมาณ / รอบ PA', rg[0], rg[1]);
    rows += track('เลื่อนเงินเดือน รอบ 1', rg[0], (fy - 543) + '-03-31') + track('เลื่อนเงินเดือน รอบ 2', (fy - 543) + '-04-01', rg[1]);
    var L = S.comList[fy], dues = L ? L.list.map(function (c) { return c.due; }).filter(String).sort() : [];
    if (dues.length) rows += track('กรรมการประเมิน PA', isoPlus(dues[0], -30) < rg[0] ? rg[0] : isoPlus(dues[0], -30), dues[dues.length - 1], dues[0], 'กรรมการส่งผลภายใน ' + fd(dues[0]));
    ((D.admin && D.admin.evalSum && D.admin.evalSum.survey) || []).filter(function (r) { return +r.fy === fy; }).slice(0, 2).forEach(function (r) {
      var a = String(r.createdAt || rg[0]).slice(0, 10), b = r.closeAt || rg[1];
      rows += track('แบบประเมิน · ' + (r.label.length > 14 ? r.label.slice(0, 13) + '…' : r.label), a < rg[0] ? rg[0] : a, b > rg[1] ? rg[1] : b);
    });
    var evs = (S.cal ? S.cal.list : (D.events || [])).filter(function (e) { return e.type === 'deadline' && inFy(e.date, fy); }).slice(0, 3);
    evs.forEach(function (e) { rows += track('กำหนดส่ง · ' + (e.title.length > 14 ? e.title.slice(0, 13) + '…' : e.title), isoPlus(e.date, -7) < rg[0] ? rg[0] : isoPlus(e.date, -7), e.date, e.date); });
    var axis = '<div class="tl-axis"><div></div><div>' + [0, 2, 4, 6, 8, 10].map(function (m) { return '<span>' + TH_M[(9 + m) % 12] + '</span>'; }).join('') + '</div></div>';
    var nowL = today >= t0 && today < t1 ? '<p class="small muted" style="margin-top:6px">วันนี้อยู่ที่ร้อยละ ' + Math.round(pc(todayIso())) + ' ของปีงบ · แถบสีเทา = ผ่านไปแล้ว · เส้นแดง = วันครบกำหนด</p>' : '';
    return '<div class="card span2"><div class="row" style="justify-content:space-between"><h3>ไทม์ไลน์รอบการประเมิน ปีงบ ' + fy + '</h3><a class="small" href="#admin-calendar">ปฏิทิน ' + ic('chev', 13) + '</a></div><div style="display:flex;flex-direction:column;gap:8px;margin-top:10px">' + rows + axis + '</div>' + nowL + '</div>';
  }

  /* ---------- 9) ประวัติการแจ้งเตือน (หน้าการเชื่อมต่อ) ---------- */
  function needNotifs(force) {
    if (S.nfLoading || (S.notifs && !force)) return;
    S.nfLoading = true;
    api('notifList', {}, { loader: false }, function (err, res) { S.nfLoading = false; S.notifs = err ? { list: [], err: err } : res; if (route() === 'admin-ops') render(); });
  }
  function notifCard() {
    needNotifs();
    var n = S.notifs, body;
    if (!n) body = '<div class="sk" style="height:120px"></div>';
    else if (!n.list.length) body = '<p class="small muted">' + (n.err ? esc(n.err) : 'ยังไม่มีการส่งแจ้งเตือน') + '</p>';
    else body = '<div class="tbl-wrap"><table class="tbl"><thead><tr><th>เวลา</th><th>เรื่อง</th><th>ข้อความ</th><th>สถานะ</th></tr></thead><tbody>' + pageOf(n.list, 'a-notif', perA()).map(function (x) {
      return '<tr><td class="num" style="white-space:nowrap">' + fdt(x.at) + '</td><td style="white-space:nowrap">' + esc(NOTIF_T[x.kind] || x.kind) + '</td><td class="small muted pre">' + esc(x.text.length > 160 ? x.text.slice(0, 159) + '…' : x.text) + '</td><td>' + (x.ok ? '<span class="pill good">ส่งแล้ว</span>' : '<span class="pill bad">ส่งไม่สำเร็จ</span><div class="small muted">' + esc(x.error) + '</div>') + '</td></tr>';
    }).join('') + '</tbody></table></div>' + pagerNav('a-notif');
    return '<div class="card" style="margin-top:16px"><div class="row" style="justify-content:space-between;margin-bottom:8px"><h3>ประวัติการแจ้งเตือน LINE</h3><button class="btn sm" data-act="nf-reload">' + ic('refresh', 14) + ' โหลดใหม่</button></div>' + body + '</div>';
  }

  /* ---------- คลิก / พิมพ์ ---------- */
  document.addEventListener('click', function (e) {
    var el = e.target.closest ? e.target.closest('[data-act]') : null;
    if (!el) return;
    var act = el.getAttribute('data-act'), k = el.getAttribute('data-k'), id = el.getAttribute('data-id'), i = +el.getAttribute('data-i');
    switch (act) {
      case 'rq-new': rqNewModal(k); break;
      case 'rq-send': rqSend(k, el); break;
      case 'rq-refresh': comRefresh(); break;
      case 'rq-filter': S.rqF = k; S.pages['a-req'] = 1; render(); break;
      case 'rq-reload': needReqs(true); break;
      case 'rq-reply': rqReply(id, el); break;
      case 'rq-ai': rqAi(id, el); break;
      case 'rq-close': adminCall('reqClose', { id: id }, 'ปิดคำขอแล้ว', function (res) { setReqs(res.requests); render(); }); break;
      case 'rq-reopen': adminCall('reqClose', { id: id, reopen: true }, 'เปิดคำขออีกครั้งแล้ว', function (res) { setReqs(res.requests); render(); }); break;
      case 'rq-del': confirmBox('ลบคำขอนี้และไฟล์ที่อัปโหลดตอบไว้? กรรมการจะไม่เห็นคำขอนี้อีก', 'ลบคำขอ', function () { adminCall('reqDelete', { id: id }, 'ลบคำขอแล้ว', function (res) { setReqs(res.requests); render(); }); }, true); break;
      case 'xc-import':
        var rows = calcParse(($('xc-paste') || {}).value);
        if (!rows.length) { toast('ไม่พบคะแนนที่อ่านได้ วางอย่างน้อย 2 คอลัมน์ (ก่อน หลัง)'); break; }
        var base = k === 'add' ? S.calc.data.rows : [];
        rows.forEach(function (r) { base.push([r[0] || String(base.length + 1), Math.min(r[1], S.calc.data.max), Math.min(r[2], S.calc.data.max)]); });
        S.calc.data.rows = base.slice(0, 400); S.calc.dirty = true; S.pages['a-calc'] = 1; render(); toast('นำเข้า ' + rows.length + ' แถวแล้ว อย่าลืมกดบันทึกคะแนน');
        break;
      case 'xc-add': S.calc.data.rows.push([String(S.calc.data.rows.length + 1), '', '']); S.calc.dirty = true; S.pages['a-calc'] = Math.ceil(S.calc.data.rows.length / 15); render(); break;
      case 'xc-del': S.calc.data.rows.splice(i, 1); S.calc.dirty = true; render(); break;
      case 'xc-clear': confirmBox('ล้างคะแนนทั้งหมดในตาราง? (ยังไม่ลบจากระบบจนกว่าจะกดบันทึก)', 'ล้างตาราง', function () { S.calc.data.rows = []; S.calc.dirty = true; render(); }, true); break;
      case 'xc-save': calcSave(); break;
      case 'xc-copy': copyText(calcText(), 'คัดลอกข้อความแล้ว'); break;
      case 'xc-apply': calcApply(calcText()); break;
      case 'xc-ai': xa().task = 'result'; location.hash = 'admin-ai'; break;
      case 'ck-filter': S.ckF = k; render(); break;
      case 'src-new': S.srcF = { item: { id: '', name: '', sysId: '', ssId: '', sheet: '', mode: 'count', col: '', groupCol: '', dateCol: '', fyOnly: false, unit: '', ind: [] }, probe: null }; srcForm(); break;
      case 'src-edit': var se = find(S.src.list, 'id', id); if (se) { S.srcF = { item: clone(se), probe: null }; srcForm(); } break;
      case 'src-probe': srcProbe(); break;
      case 'src-save':
        var si = srcRead();
        if (!si.name) { formErr('ใส่ชื่อชุดข้อมูล'); break; }
        if (!si.ssId) { formErr('ใส่ลิงก์ Google Sheets'); break; }
        if ((si.mode === 'sum' || si.mode === 'avg' || si.mode === 'bands') && !si.col) { formErr('เลือกคอลัมน์ตัวเลขสำหรับการสรุปแบบนี้'); break; }
        if ((si.mode === 'month' || si.fyOnly) && !si.dateCol) { formErr('เลือกคอลัมน์วันที่'); break; }
        api('srcSave', { fy: S.fy, item: si }, { loader: 'กำลังดึงข้อมูลจากชีตปลายทาง', timeout: 120000 }, function (err, res) { if (err) { formErr(err); return; } S.src = { list: res.list }; closeModal(); render(); toast('เชื่อมข้อมูลแล้ว'); });
        break;
      case 'src-run': api('srcRun', { id: id, fy: S.fy }, { loader: 'กำลังดึงข้อมูล', timeout: 120000 }, function (err, res) { if (err) { toast(err); return; } S.src = { list: res.list }; render(); toast('ดึงข้อมูลล่าสุดแล้ว'); }); break;
      case 'src-del': confirmBox('ลบการเชื่อมข้อมูลนี้? (ไม่กระทบชีตต้นทาง และหลักฐานที่เพิ่มไว้แล้ว)', 'ลบ', function () { adminCall('srcDelete', { id: id }, 'ลบแล้ว', function (res) { S.src = { list: res.list }; render(); }); }, true); break;
      case 'src-ev': var sv2 = find(S.src.list, 'id', id); if (sv2) srcEvidence(sv2); break;
      case 'xa-task': xaRead(); xa().task = k; xa().out = ''; xa().meta = ''; render(); break;
      case 'xa-opt': xaRead(); xa()[k] = el.getAttribute('data-v'); render(); break;
      case 'xa-gen': xaGen(el); break;
      case 'xa-copy': copyText(xaRead().out || '', 'คัดลอกแล้ว'); break;
      case 'xa-apply': xaApply(); break;
      case 'xa-hist': var h = xa().hist[i]; if (h) { xa().task = h.task; xa().out = h.text; xa().meta = ''; render(); } break;
      case 'tr-past': trendPastForm(); break;
      case 'tr-save':
        var ys = document.querySelectorAll('.tr-y'), vs = document.querySelectorAll('.tr-v'), past = [];
        for (var j = 0; j < ys.length; j++) if (ys[j].value && vs[j].value !== '') past.push([+ys[j].value, +vs[j].value]);
        if (past.some(function (p) { return p[0] < 2500 || p[0] > 2700 || p[1] < 0 || p[1] > 100; })) { formErr('ปีงบต้องเป็น พ.ศ. และร้อยละอยู่ระหว่าง 0–100'); break; }
        adminCall('paPastSave', { past: past }, 'บันทึกคะแนนย้อนหลังแล้ว', function (res) { S.trend = res; closeModal(); render(); });
        break;
      case 'nf-reload': needNotifs(true); break;
    }
  });
  document.addEventListener('input', function (e) {
    var t = e.target; if (!t.getAttribute) return;
    var cp = t.getAttribute('data-calc');
    if (cp && S.calc) {
      var p = cp.split('.'), r = S.calc.data.rows[+p[0]]; if (!r) return;
      r[+p[1]] = +p[1] === 0 ? t.value : (t.value === '' ? '' : Math.max(0, Math.min(S.calc.data.max, +t.value)));
      var df = document.querySelector('[data-diff="' + p[0] + '"]');
      if (df) { var d = isNum(r[1]) && isNum(r[2]) ? +r[2] - +r[1] : null; df.textContent = d == null ? '-' : (d > 0 ? '+' : '') + fix(d, 1); df.style.color = d > 0 ? 'var(--good)' : (d < 0 ? 'var(--bad)' : 'var(--muted)'); }
      calcDirty(); renderCalcSum();
    }
    var cs = t.getAttribute('data-calcset');
    if (cs && S.calc) { S.calc.data[cs] = /^(max|pass|target)$/.test(cs) ? (+t.value || 0) : t.value; calcDirty(); if (/^(max|pass|target)$/.test(cs) && +t.value > 0) renderCalcSum(); }
  });
  document.addEventListener('change', function (e) {
    var t = e.target;
    if (t.id === 'sf-sheet' && S.srcF) srcProbe(t.value);
    if (t.id === 'xa-rq' || t.id === 'xa-work') xaRead();
  });

  /* =====================================================================
     เส้นทางหน้าและการวาดหน้า
     ===================================================================== */
  var ADMIN_PAGES = { 'admin': aDash, 'admin-profile': aProfile, 'admin-years': aYears, 'admin-settings': aSettings, 'admin-logs': aLogs,
    'admin-pa': aPA, 'admin-agreement': aAgreement, 'admin-idplan': aIdplan, 'admin-works': aWorks, 'admin-gallery': aGallery, 'admin-videos': aVideos, 'admin-awards': aAwards, 'admin-systems': aSystems, 'admin-themes': aThemes, 'admin-committee': aCommittee, 'admin-salary': aSalary, 'admin-survey': aSurvey, 'admin-stats': aStats, 'admin-verify': aVerify, 'admin-calendar': aCalendar, 'admin-ops': aOps, 'admin-backup': aBackup, 'admin-security': aSecurity,
    // เฟส 8
    'admin-requests': aRequests, 'admin-calc': aCalc, 'admin-checklist': aChecklist, 'admin-sync': aSync, 'admin-ai': aAi };
  ADMIN_PAGES['admin-idplan'] = function () { var h = aIdplan(); return docsOf(S.fy) ? injectEnd(h, paTrendCard()) : h; };
  ADMIN_PAGES['admin-ops'] = function () { var h = aOps(); return S.ops ? injectEnd(h, notifCard()) : h; };
  var PUB_PAGES = { 'pa': pPA, 'agreement': pAgreement, 'idplan': pIdplan, 'profile': pProfile, 'works': pWorks, 'gallery': pGallery, 'videos': pVideos, 'awards': pAwards, 'systems': pSystems, 'login': pLogin, 'committee': pCommittee, 'pa-forms': pForms, 'survey': pSurvey, 'salary-print': salaryPrint, 'survey-poster': svPoster, 'survey-report': svReport, 'verify': function () { return pVerify(''); }, 'report': pReport, 'present': pPresent, 'calendar': pCalendar };
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
    else if (r.indexOf('verify-') === 0) html = pVerify(r.slice(7));
    else html = pHome();
    $('app').innerHTML = html + (S.skinPreview ? skinBar() : '');
    var s = st();
    applyTheme();
    if (r === 'works') { restoreWorkFilters(); renderWorksGrid(); }
    document.body.classList.toggle('fx-glow', !!s.fxGlow);
    ['zoom', 'pop', 'spot', 'off'].forEach(function (k) { document.body.classList.toggle('phfx-' + k, s.phFx === k); });
    document.title = (r.indexOf('admin') === 0 ? 'หลังบ้าน · ' : (S.com ? 'กรรมการ · ' : '')) + 'แฟ้มผลงานครู · ' + (D.settings.name || '');
    setFavicon(); tick();
    var isNew = r !== S.lastRoute;
    if (isNew) { window.scrollTo(0, 0); S.lastRoute = r; }
    revealInit(isNew);
    trackPage(r);
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
    if (p[0] === 's') { var k = p[1]; d.s[k] = /^(perPublic|perAdmin|hoursGoal|p1Max|p2Max|passPct)$/.test(k) ? +v : v; markDirty('s.' + k); if (k === 'fxGlow') document.body.classList.toggle('fx-glow', !!v); return; }
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
          api('logout', {}, { loader: 'กำลังออกจากระบบ' }, function () { saveToken(''); S.admin = false; D.admin = null; D.docs = {}; S.comList = {}; S.ops = S.bk = S.sec = S.cal = S.calc = S.src = S.trend = S.notifs = S.rqDraft = null; S.rqAt = 0; discardDraft(); backToPublic(); location.hash = 'home'; render(); toast('ออกจากระบบแล้ว'); });
        });
        break;
      case 'draft-save': saveDraft(); break;
      case 'draft-discard': confirmBox('ยกเลิกการแก้ไขทั้งหมดที่ยังไม่บันทึก?', 'ยกเลิกการแก้ไข', function () { discardDraft(); render(); toast('ยกเลิกการแก้ไขแล้ว'); }, true); break;
      case 'row-add':
        var L = listOf(k);
        if (k === 'pf') L.push(['', '']); else if (k === 'edu') L.push({ id: '', level: '', degree: '', inst: '', year: '', logoUrl: '', logoId: '' }); else L.push({ id: '', period: '', role: '', place: '', logoUrl: '', logoId: '' });
        markList(k); render(); setTimeout(function () { var ins = document.querySelectorAll('[data-b^="' + k + '.' + (L.length - 1) + '."]'); if (ins[0]) ins[0].focus(); }, 20);
        break;
      case 'row-del': listOf(k).splice(i, 1); markList(k); render(); break;
      case 'row-mv':
        var L2 = listOf(k), j = i + (+el.getAttribute('data-d'));
        if (j < 0 || j >= L2.length) break;
        var tmp = L2[i]; L2[i] = L2[j]; L2[j] = tmp; markList(k); render(); break;
      case 'edu-logo-del': var de = ensureDraft().edu[i]; de.logoUrl = ''; de.logoId = ''; markDirty('edu'); render(); break;
      case 'car-logo-del': var dc = ensureDraft().car[i]; dc.logoUrl = ''; dc.logoId = ''; markDirty('car'); render(); break;
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
      if (kind === 'edu' || kind === 'car') {
        var row = ensureDraft()[kind][idx];
        doUpload(kind, f, { rowId: row.id || '' }, function (res) {
          row.logoUrl = res.file.url; row.logoId = res.file.id;
          var saved = row.id ? find(kind === 'edu' ? D.education : D.career, 'id', row.id) : null;
          if (saved) { saved.logoUrl = res.file.url; saved.logoId = res.file.id; } else markDirty(kind);
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
    api('login', { user: u, pass: p, remember: rem, device: deviceName(), devId: devId() }, {}, function (err, res) {
      btn.disabled = false;
      if (err) { S.loginErr = err; render(); var f = $('lg-user'); if (f) f.value = u; return; }
      if (res.need2fa) { S.loginErr = ''; askOtp(u, p, rem); return; }
      loginDone(res, rem);
    });
  }
  function loginDone(res, rem) {
    {
      saveToken(res.token, rem); S.loginErr = ''; if (S.com) comClear();
      api('adminBoot', {}, {}, function (e2, data) {
        if (e2) { toast(e2); return; }
        setAdmin(data); S.admin = true;
        location.hash = data.mustChange ? 'admin-settings' : 'admin';
        render(); toast(data.mustChange ? 'กรุณาเปลี่ยนรหัสผ่านชั่วคราวก่อนใช้งาน' : 'เข้าสู่ระบบแล้ว');
      });
    }
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
      if (!tok) { comResume(); return; }
      api('adminBoot', {}, { loader: false }, function (e2, ad) {
        S.authPending = false; hideLoader(true);
        if (e2) { if (route().indexOf('admin') === 0) { S.loginErr = e2; location.hash = 'login'; } render(); return; }
        setAdmin(ad); S.admin = true; S.loginErr = ''; render();
      });
    });
  }
  boot();
})();
