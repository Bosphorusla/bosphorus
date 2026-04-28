/* shared.js — Gardena Motors */

/* ── GRAIN TEXTURE ── */
(function () {
  const el = document.createElement('div');
  el.setAttribute('aria-hidden', 'true');
  el.style.cssText = [
    'position:fixed', 'inset:0', 'pointer-events:none', 'z-index:9998',
    'opacity:0.042',
    'background-image:url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'200\' height=\'200\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.8\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'200\' height=\'200\' filter=\'url(%23n)\'/%3E%3C/svg%3E")',
    'background-repeat:repeat',
    'background-size:200px 200px'
  ].join(';');
  document.body.appendChild(el);
})();

/* ── CONFIG SYSTEM ── */
function applyConfig(cfg) {
  /* text content */
  document.querySelectorAll('[data-cfg]').forEach(el => {
    const v = cfg[el.dataset.cfg];
    if (v !== undefined) el.textContent = v;
  });
  /* innerHTML (supports HTML like <em>, <br>) */
  document.querySelectorAll('[data-cfg-html]').forEach(el => {
    const v = cfg[el.dataset.cfgHtml];
    if (v !== undefined) el.innerHTML = v;
  });
  /* href attribute */
  document.querySelectorAll('[data-cfg-href]').forEach(el => {
    const v = cfg[el.dataset.cfgHref];
    if (v !== undefined) el.href = v;
  });

  /* rendered lists */
  const statsEl = document.getElementById('cfg-stats');
  if (statsEl && cfg.stats) statsEl.innerHTML = cfg.stats.map(s =>
    `<div><div class="stat-n">${s.n}</div><div class="stat-l">${s.l}</div></div>`
  ).join('');

  const pillarsEl = document.getElementById('cfg-pillars');
  if (pillarsEl && cfg.pillars) pillarsEl.innerHTML = cfg.pillars.map(p =>
    `<div class="pillar"><div class="pillar-n">${p.n}</div><div class="pillar-l">${p.l}</div></div>`
  ).join('');

  const reviewsEl = document.getElementById('cfg-reviews');
  if (reviewsEl && cfg.reviews) reviewsEl.innerHTML = cfg.reviews.map(r =>
    `<div class="review">
      <div class="review-stars">★★★★★</div>
      <p class="review-text">"${r.text}"</p>
      <p class="review-by">${r.author} · ${r.location}</p>
    </div>`
  ).join('');
}

function loadConfig() {
  return fetch('config.json')
    .then(r => r.json())
    .then(cfg => { applyConfig(cfg); return cfg; })
    .catch(() => console.warn('config.json not found — using default text'));
}

/* ── HELPERS ── */
function fmt(p) { return '$' + p.toLocaleString(); }
function mo(p)  { const r = 0.079/12, n = 60; return '$' + Math.round(p * r * Math.pow(1+r,n) / (Math.pow(1+r,n)-1)) + '/mo'; }
function bgStyle(g) { return `background:linear-gradient(145deg,${g[0]}60 0%,${g[1]}A0 100%)`; }

/* ── TYPE-BASED CAR SILHOUETTES ── */
function getCarSVG(type, g, size) {
  size = size || 160;
  const uid = 'cs' + Math.random().toString(36).slice(2, 8);

  const defs = `<defs><linearGradient id="${uid}" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="${g[0]}"/>
    <stop offset="100%" stop-color="${g[1]}"/>
  </linearGradient></defs>`;

  const shadow = `<ellipse cx="240" cy="174" rx="182" ry="7" fill="rgba(0,0,0,0.22)"/>`;

  function wheel(cx, cy, r) {
    return `<circle cx="${cx}" cy="${cy}" r="${r}" fill="rgba(10,8,5,.94)" stroke="rgba(255,255,255,.22)" stroke-width="2"/>
            <circle cx="${cx}" cy="${cy}" r="${r * .58}" fill="none" stroke="rgba(255,255,255,.14)" stroke-width="${(r * .28).toFixed(1)}"/>
            <circle cx="${cx}" cy="${cy}" r="${r * .14}" fill="rgba(255,255,255,.24)"/>`;
  }

  let inner = '';

  if (type === 'sedan') {
    inner = `
      <path d="M34,155 Q40,140 62,116 Q82,96 115,84 L150,78 Q163,72 172,52 L174,44 L336,44 Q347,62 357,74 L382,84 Q410,98 420,124 L422,142 L422,155 Z"
            fill="url(#${uid})" opacity=".93"/>
      <path d="M153,76 Q166,56 175,46 L244,46 L239,76 Z" fill="rgba(255,255,255,.1)"/>
      <path d="M301,46 L337,46 Q348,64 354,74 L298,74 Z" fill="rgba(255,255,255,.07)"/>
      <path d="M244,46 L300,46 L296,74 L240,74 Z" fill="rgba(255,255,255,.04)"/>
      <path d="M62,130 L420,130" stroke="rgba(255,255,255,.09)" stroke-width="1.5"/>
      <path d="M74,112 Q115,92 150,80" stroke="rgba(255,255,255,.07)" stroke-width="1.5" fill="none"/>
      <rect x="37" y="128" width="22" height="9" rx="3" fill="rgba(255,228,100,.52)"/>
      <rect x="420" y="128" width="22" height="9" rx="3" fill="rgba(255,55,55,.48)"/>
      ${wheel(96, 155, 30)}
      ${wheel(372, 155, 30)}`;

  } else if (type === 'suv') {
    inner = `
      <path d="M28,155 Q34,138 54,112 Q72,92 98,80 L120,70 L120,24 L368,24 L368,70 L392,80 Q418,96 426,122 L428,140 L428,155 Z"
            fill="url(#${uid})" opacity=".93"/>
      <path d="M122,68 L126,26 L254,26 L254,68 Z" fill="rgba(255,255,255,.1)"/>
      <path d="M266,68 L266,26 L366,26 L364,68 Z" fill="rgba(255,255,255,.07)"/>
      <rect x="255" y="26" width="10" height="42" fill="${g[1]}" opacity=".55"/>
      <path d="M54,130 L425,130" stroke="rgba(255,255,255,.09)" stroke-width="1.5"/>
      <path d="M28,148 L428,148" stroke="rgba(0,0,0,.1)" stroke-width="3"/>
      <rect x="31" y="126" width="18" height="10" rx="3" fill="rgba(255,228,100,.52)"/>
      <rect x="430" y="126" width="18" height="10" rx="3" fill="rgba(255,55,55,.48)"/>
      ${wheel(96, 153, 32)}
      ${wheel(376, 153, 32)}`;

  } else if (type === 'truck') {
    inner = `
      <path d="M28,155 L30,92 L50,74 L192,74 L192,155 Z" fill="url(#${uid})" opacity=".88"/>
      <path d="M32,94 L188,86" stroke="rgba(255,255,255,.16)" stroke-width="3" stroke-linecap="round"/>
      <path d="M32,104 L188,98" stroke="rgba(255,255,255,.06)" stroke-width="1.5"/>
      <path d="M196,155 L196,68 L218,24 L376,24 L398,58 L420,98 L424,128 L424,155 Z"
            fill="url(#${uid})" opacity=".93"/>
      <path d="M222,65 L230,28 L374,28 L395,56 L395,65 Z" fill="${g[0]}" opacity=".72"/>
      <path d="M225,65 L232,30 L308,30 L308,65 Z" fill="rgba(255,255,255,.1)"/>
      <path d="M396,65 L390,32 L319,32 L319,65 Z" fill="rgba(255,255,255,.07)"/>
      <rect x="310" y="30" width="8" height="35" fill="${g[1]}" opacity=".55"/>
      <line x1="192" y1="74" x2="192" y2="155" stroke="rgba(0,0,0,.22)" stroke-width="3"/>
      <rect x="31" y="124" width="18" height="10" rx="3" fill="rgba(255,228,100,.52)"/>
      <rect x="424" y="124" width="18" height="10" rx="3" fill="rgba(255,55,55,.48)"/>
      ${wheel(96, 153, 32)}
      ${wheel(374, 153, 32)}`;

  } else {
    /* coupe — long hood, raked windshield, fastback */
    inner = `
      <path d="M36,158 Q42,142 64,116 Q86,92 120,78 L158,68 Q170,62 192,42 L194,36 L312,36 Q336,48 356,66 L386,82 Q414,100 422,130 L424,146 L424,158 Z"
            fill="url(#${uid})" opacity=".93"/>
      <path d="M162,66 Q175,46 193,38 L260,38 L252,66 Z" fill="rgba(255,255,255,.1)"/>
      <path d="M310,38 L355,66 L298,66 Z" fill="rgba(255,255,255,.07)"/>
      <path d="M253,38 L310,38 L305,66 L254,66 Z" fill="rgba(255,255,255,.04)"/>
      <path d="M64,132 L422,132" stroke="rgba(255,255,255,.09)" stroke-width="1.5"/>
      <path d="M76,114 Q120,88 158,70" stroke="rgba(255,255,255,.07)" stroke-width="1.5" fill="none"/>
      <rect x="39" y="134" width="24" height="7" rx="3" fill="rgba(255,228,100,.52)"/>
      <rect x="422" y="134" width="24" height="7" rx="3" fill="rgba(255,55,55,.48)"/>
      ${wheel(100, 158, 28)}
      ${wheel(376, 158, 28)}`;
  }

  return `<svg viewBox="0 0 480 180" fill="none" xmlns="http://www.w3.org/2000/svg" style="width:${size}px;max-width:95%;">
    ${defs}${shadow}${inner}
  </svg>`;
}

/* ── PHOTO HELPERS ── */
function carPhotos(c) {
  if (Array.isArray(c.photos)) return c.photos.filter(u => u && typeof u === 'string' && u.trim());
  return [];
}
function carHeroMedia(c, svgSize) {
  const ph = carPhotos(c);
  if (ph.length) {
    const alt = `${c.year || ''} ${c.make || ''} ${c.model || ''}`.trim();
    return `<img class="card-photo" src="${ph[0]}" alt="${alt}" loading="lazy" />`;
  }
  return `<div class="card-ph" style="${bgStyle(c.g)}">
    ${getCarSVG(c.type, c.g, svgSize || 155)}
    <span class="color-note">${c.color || ''}</span>
  </div>`;
}

/* ── CARD RENDERER (shared across all pages) ── */
function mkCard(c) {
  const bdg = c.hot
    ? `<span class="card-badge hot">Hot Deal</span>`
    : `<span class="card-badge">Available</span>`;
  return `<div class="car-card" onclick="location.href='car.html?id=${c.id}'">
    <div class="card-img">
      ${bdg}
      ${carHeroMedia(c, 155)}
    </div>
    <div class="card-body">
      <p class="card-sub">${c.year} · ${c.make}</p>
      <p class="card-name">${c.model}</p>
      <div class="card-specs">
        <span class="card-spec">
          <svg width="11" height="11" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
          ${c.miles} mi
        </span>
        <span class="card-spec">
          <svg width="11" height="11" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"/></svg>
          ${c.trans}
        </span>
      </div>
      <div class="card-foot">
        <div class="card-price">${fmt(c.price)} <sub>est. ${mo(c.price)}</sub></div>
        <button class="card-btn" onclick="event.stopPropagation();location.href='car.html?id=${c.id}'">Details</button>
      </div>
    </div>
  </div>`;
}
