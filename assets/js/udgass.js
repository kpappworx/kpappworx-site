/* =========================================================================
   Udgass.ai landing page — charts, concept preview, early-access form.
   No dependencies. All chart data is SYNTHETIC and generated here from a
   seeded random generator; it is illustrative and not customer data.
   ========================================================================= */
(function(){
  'use strict';

  var NS = 'http://www.w3.org/2000/svg';
  var reduceMotion = !!(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches);

  /* ---------------------------------------------------------------------
     Synthetic demand model (illustrative only)
     --------------------------------------------------------------------- */
  var HIST = 144; // weeks of observed history: 2 years + 40 weeks, so "now" sits just ahead of the seasonal peak
  var VIEW0 = HIST - 104; // first week drawn: the last two years of history

  function rng(seed){
    return function(){
      seed |= 0; seed = seed + 0x6D2B79F5 | 0;
      var t = Math.imul(seed ^ seed >>> 15, 1 | seed);
      t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t;
      return ((t ^ t >>> 14) >>> 0) / 4294967296;
    };
  }
  function gauss(x, mu, s){ var d = (x - mu) / s; return Math.exp(-d * d / 2); }

  var PROFILES = {
    seasonal: {
      seed: 11, base: 100, trend: 0.0009, peak: 1.15, minor: 0.18, noise: 0.06, promos: [], bandB: 0.07, bandG: 0.012,
      label: 'Seasonal item',
      alt: 'Illustrative chart for a seasonal item. Demand rises into the same seasonal peak in each of the two previous years. The forecast shows a similar rise ahead, with a shaded range that widens further out.',
      patterns: [
        { t: 'Last year, same weeks', d: 'A comparable seasonal rise over the same weeks, with a similar shape.' },
        { t: 'Two years ago, same weeks', d: 'The same seasonal rise at a lower overall level. The level changed; the pattern did not.' }
      ],
      plan: 'Demand is expected to climb into the seasonal peak. Check supplier lead time against the upper edge of the range before the next replenishment order.'
    },
    steady: {
      seed: 23, base: 100, trend: 0.0016, peak: 0.08, minor: 0.04, noise: 0.045, promos: [], bandB: 0.05, bandG: 0.006,
      label: 'Steady item',
      alt: 'Illustrative chart for a steady item with little seasonality. Demand drifts gently upward and the forecast continues that trend inside a narrow shaded range.',
      patterns: [
        { t: 'Recent weeks', d: 'Little seasonal structure. In this illustration the recent trend is the main signal.' },
        { t: 'Same weeks, earlier years', d: 'These weeks resemble their surroundings, so no special seasonal adjustment is suggested.' }
      ],
      plan: 'A routine reorder cadence looks sufficient. The narrow range suggests little need for extra buffer stock.'
    },
    promo: {
      seed: 37, base: 90, trend: 0.0008, peak: 0.35, minor: 0.1, noise: 0.09, promos: [[30, 1.7], [74, 1.8], [100, 1.6]], bandB: 0.12, bandG: 0.014,
      label: 'Promotion-driven item',
      alt: 'Illustrative chart for a promotion-driven item. Three sharp promotion spikes appear in the history. The forecast follows the baseline pattern and shows a wide shaded range.',
      patterns: [
        { t: 'Past promotions', d: 'Three earlier spikes sit outside the normal demand pattern and would be treated separately.' },
        { t: 'Non-promotion weeks', d: 'Baseline demand between promotions follows a gentler seasonal shape.' }
      ],
      plan: 'Confirm whether a promotion is planned in this window. The range is wide, so plan stock against the range rather than a single number.'
    }
  };

  function model(p, h){
    var r = rng(p.seed), hist = [], fc = [], lo = [], hi = [], w, k;
    function mean(week){
      var m = week % 52;
      return p.base * (1 + p.trend * week) * (1 + p.peak * gauss(m, 46, 3.3) + p.minor * gauss(m, 22, 5));
    }
    for (w = 0; w < HIST; w++){
      var v = mean(w) * (1 + p.noise * (r() * 2 - 1));
      for (var i = 0; i < p.promos.length; i++){
        var pw = p.promos[i][0], lift = p.promos[i][1];
        if (w === pw || w === pw + 1) v *= (w === pw ? lift : 1 + (lift - 1) * 0.45);
      }
      hist.push(v);
    }
    for (k = 0; k < h; k++){
      w = HIST + k;
      var m = mean(w);
      var wd = (p.bandB + p.bandG * (k + 1)) * (1 + 0.6 * gauss(w % 52, 46, 4));
      fc.push(m); lo.push(m * (1 - wd)); hi.push(m * (1 + wd));
    }
    return { hist: hist, fc: fc, lo: lo, hi: hi };
  }

  /* ---------------------------------------------------------------------
     SVG helpers
     --------------------------------------------------------------------- */
  function el(name, attrs, parent){
    var n = document.createElementNS(NS, name);
    for (var k in attrs) if (attrs.hasOwnProperty(k)) n.setAttribute(k, attrs[k]);
    if (parent) parent.appendChild(n);
    return n;
  }
  function text(parent, x, y, str, cls, anchor){
    var t = el('text', { x: x, y: y, 'class': cls || '', 'text-anchor': anchor || 'middle' }, parent);
    t.textContent = str;
    return t;
  }
  var uid = 0;

  /* ---------------------------------------------------------------------
     Forecast chart renderer
     opts: { profile, horizon, animate }
     --------------------------------------------------------------------- */
  function renderChart(host, opts){
    var p = PROFILES[opts.profile] || PROFILES.seasonal;
    var h = opts.horizon || 26;
    var W = Math.max(280, Math.round(host.clientWidth || 600));
    var small = W < 520;
    var H = small ? 310 : (opts.tall ? 400 : 380);
    var m = { t: small ? 62 : 68, r: small ? 12 : 18, b: 30, l: small ? 12 : 18 };
    var d = model(p, h);
    var xmax = HIST + h - 1 - VIEW0;

    var ymax = 0, i;
    for (i = VIEW0; i < d.hist.length; i++) ymax = Math.max(ymax, d.hist[i]);
    for (i = 0; i < h; i++) ymax = Math.max(ymax, d.hi[i]);
    ymax *= 1.08;

    function sx(x){ return m.l + (W - m.l - m.r) * (x - VIEW0) / xmax; }
    function sy(v){ return m.t + (H - m.t - m.b) * (1 - v / ymax); }
    var base = H - m.b;

    host.textContent = '';
    var id = 'ud-area-' + (++uid);
    var svg = el('svg', { viewBox: '0 0 ' + W + ' ' + H, width: W, height: H, role: 'img', 'aria-label': p.alt, focusable: 'false' }, host);

    var defs = el('defs', {}, svg);
    var grad = el('linearGradient', { id: id, x1: 0, y1: 0, x2: 0, y2: 1 }, defs);
    el('stop', { offset: '0%', 'stop-color': '#c9d3e6', 'stop-opacity': 0.16 }, grad);
    el('stop', { offset: '100%', 'stop-color': '#c9d3e6', 'stop-opacity': 0 }, grad);

    // Grid
    for (i = 0; i <= 3; i++){
      var gy = m.t + (base - m.t) * i / 3;
      el('line', { x1: m.l, x2: W - m.r, y1: gy, y2: gy, 'class': i === 3 ? 'c-axis' : 'c-grid' }, svg);
    }

    // Retrieval: similar past windows + forecast window
    var fStart = HIST, fEnd = HIST + h - 1;
    var wins = [HIST - 104, HIST - 52];
    var fcx = (sx(fStart) + sx(fEnd)) / 2;
    var apex = m.t - 26;
    wins.forEach(function(ws){
      var we = ws + h - 1;
      el('rect', { x: sx(ws), y: m.t, width: Math.max(2, sx(we) - sx(ws)), height: base - m.t, 'class': 'c-win' }, svg);
      var cx = (sx(ws) + sx(we)) / 2;
      el('path', { d: 'M' + cx + ',' + m.t + ' C' + cx + ',' + apex + ' ' + fcx + ',' + apex + ' ' + fcx + ',' + m.t, 'class': 'c-arc' }, svg);
      text(svg, cx, 14, small ? 'Similar' : 'Similar period', 't-strong', 'middle');
    });
    var tl = small ? ['2 yrs ago', 'Last year', 'Forecast'] : ['Two years ago', 'Last year', 'Next ' + h + ' weeks'];
    text(svg, (sx(wins[0]) + sx(wins[0] + h - 1)) / 2, H - 9, tl[0], '', 'middle');
    text(svg, (sx(wins[1]) + sx(wins[1] + h - 1)) / 2, H - 9, tl[1], '', 'middle');
    text(svg, fcx, H - 9, tl[2], 't-blue', 'middle');
    el('rect', { x: sx(fStart), y: m.t, width: Math.max(2, sx(fEnd) - sx(fStart)), height: base - m.t, 'class': 'c-fwin' }, svg);
    text(svg, fcx, 14, small ? 'Forecast' : 'Forecast window', 't-blue', fcx > W - 64 ? 'end' : 'middle');

    // History
    var hp = '';
    for (i = VIEW0; i < HIST; i++) hp += (i > VIEW0 ? 'L' : 'M') + sx(i).toFixed(1) + ',' + sy(d.hist[i]).toFixed(1);
    el('path', { d: hp + 'L' + sx(HIST - 1).toFixed(1) + ',' + base + 'L' + sx(VIEW0).toFixed(1) + ',' + base + 'Z', 'class': 'c-area', fill: 'url(#' + id + ')' }, svg);
    var histPath = el('path', { d: hp, 'class': 'c-hist' }, svg);

    // Forecast band + line
    var gf = el('g', { 'class': 'g-fc' }, svg);
    var lastY = d.hist[HIST - 1];
    var bp = 'M' + sx(HIST - 1).toFixed(1) + ',' + sy(lastY).toFixed(1);
    for (i = 0; i < h; i++) bp += 'L' + sx(HIST + i).toFixed(1) + ',' + sy(d.hi[i]).toFixed(1);
    for (i = h - 1; i >= 0; i--) bp += 'L' + sx(HIST + i).toFixed(1) + ',' + sy(d.lo[i]).toFixed(1);
    el('path', { d: bp + 'Z', 'class': 'c-band' }, gf);
    var fp = 'M' + sx(HIST - 1).toFixed(1) + ',' + sy(lastY).toFixed(1);
    for (i = 0; i < h; i++) fp += 'L' + sx(HIST + i).toFixed(1) + ',' + sy(d.fc[i]).toFixed(1);
    el('path', { d: fp, 'class': 'c-fc' }, gf);

    // Peak annotation
    var pk = 0;
    for (i = 1; i < h; i++) if (d.fc[i] > d.fc[pk]) pk = i;
    var px = sx(HIST + pk), py = sy(d.fc[pk]);
    el('circle', { cx: px, cy: py, r: 4, 'class': 'c-dot' }, gf);
    var lx = px - 22, ly = py - 30;
    el('line', { x1: px - 3, y1: py - 5, x2: lx, y2: ly + 6, 'class': 'c-leader' }, gf);
    text(gf, lx, ly, small ? 'Expected peak' : 'Expected seasonal peak', 't-strong', 'end');
    if (p.peak < 0.2){ gf.lastChild.textContent = small ? 'Highest week' : 'Highest expected week'; }

    // Promotion annotation (history): label the most recent spike, to its left
    if (p.promos.length){
      var pw = p.promos[p.promos.length - 1][0];
      var ppx = sx(pw), ppy = sy(d.hist[pw]);
      el('circle', { cx: ppx, cy: ppy, r: 3.5, 'class': 'c-promo' }, svg);
      text(svg, ppx - 9, ppy + 4, 'Promotion', 't-strong', 'end');
    }

    // Animation (first paint of the hero only; never under reduced motion)
    if (opts.animate && !reduceMotion){
      var len = Math.ceil(histPath.getTotalLength ? histPath.getTotalLength() : 2400);
      svg.style.setProperty('--len', len);
      host.classList.add('ud-anim');
    } else {
      host.classList.remove('ud-anim');
    }
    return svg;
  }

  /* Re-render charts on resize (width-aware so text stays legible on phones) */
  var charts = [];
  function mountChart(host, getOpts){
    var entry = { host: host, getOpts: getOpts, lastW: 0 };
    charts.push(entry);
    function draw(animate){
      var o = getOpts(); o.animate = animate;
      entry.lastW = host.clientWidth;
      renderChart(host, o);
    }
    entry.draw = draw;
    draw(true);
    return entry;
  }
  var raf = 0;
  function onResize(){
    cancelAnimationFrame(raf);
    raf = requestAnimationFrame(function(){
      charts.forEach(function(c){
        if (Math.abs(c.host.clientWidth - c.lastW) > 2) c.draw(false);
      });
    });
  }
  if ('ResizeObserver' in window){
    var ro = new ResizeObserver(onResize);
    // observers are attached after mounting below
    window.__udObserve = function(n){ ro.observe(n); };
  } else {
    window.addEventListener('resize', onResize);
    window.__udObserve = function(){};
  }

  /* Hero chart */
  var heroHost = document.getElementById('heroChart');
  if (heroHost){
    var hero = mountChart(heroHost, function(){ return { profile: 'seasonal', horizon: 26 }; });
    window.__udObserve(heroHost);
  }

  /* ---------------------------------------------------------------------
     Concept preview (interactive, illustrative data)
     --------------------------------------------------------------------- */
  var mockHost = document.getElementById('mockChart');
  if (mockHost){
    var form = document.getElementById('mockControls');
    var patternsEl = document.getElementById('mockPatterns');
    var planEl = document.getElementById('mockPlan');
    function current(){
      var sku = form.querySelector('input[name="sku"]:checked');
      var hz = form.querySelector('input[name="hz"]:checked');
      return { profile: sku ? sku.value : 'seasonal', horizon: hz ? parseInt(hz.value, 10) : 26, tall: true };
    }
    function paintSide(){
      var o = current(), p = PROFILES[o.profile];
      patternsEl.textContent = '';
      p.patterns.forEach(function(x){
        var li = document.createElement('li');
        var b = document.createElement('b'); b.textContent = x.t;
        var s = document.createElement('span'); s.textContent = x.d;
        li.appendChild(b); li.appendChild(s); patternsEl.appendChild(li);
      });
      planEl.textContent = p.plan;
    }
    var mock = mountChart(mockHost, current);
    window.__udObserve(mockHost);
    paintSide();
    form.addEventListener('change', function(){
      mock.draw(false);
      paintSide();
      if (!reduceMotion){
        mockHost.classList.remove('is-swap'); void mockHost.offsetWidth; mockHost.classList.add('is-swap');
      }
    });
  }

  /* ---------------------------------------------------------------------
     Early-access form
     There is no signup backend or database for this site yet. Until one is
     configured, submitting opens a pre-filled email to hello@kpappworx.com
     (the same hand-off the Contact page uses) and the page says plainly that
     the request is NOT sent until the visitor sends that email.

     To connect a real endpoint later, set data-endpoint="https://…" on the
     <form id="earlyForm">. The page will then POST JSON and show a success
     message ONLY if the server answers with a 2xx response. See
     _ops/udgass-early-access.md.
     --------------------------------------------------------------------- */
  var earlyForm = document.getElementById('earlyForm');
  if (earlyForm){
    var TO = 'hello@kpappworx.com';
    var result = document.getElementById('earlyResult');
    var emailI = document.getElementById('ea-email');
    var companyI = document.getElementById('ea-company');
    var roleI = document.getElementById('ea-role');

    function setErr(input, id, msg){
      var e = document.getElementById(id);
      if (msg){ input.setAttribute('aria-invalid', 'true'); e.textContent = msg; }
      else { input.removeAttribute('aria-invalid'); e.textContent = ''; }
    }
    function validate(){
      var firstBad = null, v;
      v = emailI.value.trim();
      if (!v){ setErr(emailI, 'ea-email-err', 'Enter your work email.'); firstBad = firstBad || emailI; }
      else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v)){ setErr(emailI, 'ea-email-err', 'That doesn’t look like a valid email address.'); firstBad = firstBad || emailI; }
      else setErr(emailI, 'ea-email-err', '');
      if (!companyI.value.trim()){ setErr(companyI, 'ea-company-err', 'Enter your company name.'); firstBad = firstBad || companyI; }
      else setErr(companyI, 'ea-company-err', '');
      return firstBad;
    }
    function payload(){
      var ch = earlyForm.querySelector('input[name="challenge"]:checked');
      return {
        email: emailI.value.trim(),
        company: companyI.value.trim(),
        role: roleI.value.trim(),
        challenge: ch ? ch.value : '',
        source: 'kpappworx.com/udgass'
      };
    }
    function plain(d){
      return ['Product: Udgass.ai (early access list)', 'Work email: ' + d.email, 'Company: ' + d.company, 'Role: ' + (d.role || '—'), 'Primary forecasting challenge: ' + (d.challenge || '—')].join('\n');
    }
    function clear(node){ while (node.firstChild) node.removeChild(node.firstChild); }
    function link(label, href){
      var a = document.createElement('a'); a.href = href; a.target = '_blank'; a.rel = 'noopener'; a.textContent = label; return a;
    }
    function showResult(kind){
      result.hidden = false; result.className = 'ud-result ' + kind; clear(result);
    }

    function handoff(d, lead){
      var subject = 'Udgass early access — ' + d.company;
      var body = plain(d) + '\n\nPlease add me to the Udgass early-access list.';
      var qs = 'subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
      showResult('pending');
      var p1 = document.createElement('div');
      if (lead) { var s0 = document.createElement('p'); s0.textContent = lead; s0.style.marginBottom = '6px'; result.appendChild(s0); }
      var s1 = document.createElement('strong'); s1.textContent = 'Not sent yet. '; p1.appendChild(s1);
      p1.appendChild(document.createTextNode('Your email app should now open with these details filled in. You’re on the early-access list only once you press Send in that email.'));
      result.appendChild(p1);
      var acts = document.createElement('span'); acts.className = 'acts';
      acts.appendChild(document.createTextNode('Nothing opened? '));
      acts.appendChild(link('Compose in Gmail', 'https://mail.google.com/mail/?view=cm&fs=1&to=' + encodeURIComponent(TO) + '&' + qs));
      acts.appendChild(document.createTextNode(' · '));
      acts.appendChild(link('Outlook', 'https://outlook.live.com/mail/0/deeplink/compose?to=' + encodeURIComponent(TO) + '&' + qs));
      acts.appendChild(document.createTextNode(' · '));
      var cp = document.createElement('button'); cp.type = 'button'; cp.textContent = 'Copy details';
      cp.addEventListener('click', function(){
        var msg = 'To: ' + TO + '\nSubject: ' + subject + '\n\n' + body;
        var ok = function(){ cp.textContent = 'Copied. Paste into an email to ' + TO; };
        var bad = function(){ cp.textContent = 'Copy failed. Email ' + TO + ' directly'; };
        try { navigator.clipboard.writeText(msg).then(ok, bad); } catch (e) { bad(); }
      });
      acts.appendChild(cp);
      result.appendChild(acts);
      window.location.href = 'mailto:' + TO + '?' + qs;
    }

    earlyForm.addEventListener('submit', function(e){
      e.preventDefault();
      var bad = validate();
      if (bad){ bad.focus(); return; }
      var d = payload();
      var endpoint = earlyForm.getAttribute('data-endpoint');
      if (!endpoint){ handoff(d); return; }

      var btn = earlyForm.querySelector('button[type="submit"]');
      btn.disabled = true;
      showResult('pending'); result.textContent = 'Sending…';
      /* Google Apps Script web apps reject CORS preflight, so send JSON as text/plain (a "simple" request). */
      var isGas = /^https:\/\/script\.google(usercontent)?\.com\//.test(endpoint);
      fetch(endpoint, { method: 'POST', headers: { 'Content-Type': isGas ? 'text/plain;charset=utf-8' : 'application/json', 'Accept': 'application/json' }, body: JSON.stringify(d) })
        .then(function(res){
          btn.disabled = false;
          if (res.ok){
            showResult('ok');
            var s = document.createElement('strong'); s.textContent = 'Request received. ';
            result.appendChild(s);
            result.appendChild(document.createTextNode('Thank you. We’ll write to ' + d.email + ' about Udgass.'));
            earlyForm.reset();
          } else { throw new Error('status ' + res.status); }
        })
        .catch(function(){
          btn.disabled = false;
          handoff(d, 'We couldn’t submit this directly just now.');
        });
    });
    [emailI, companyI].forEach(function(i){
      i.addEventListener('input', function(){ if (i.getAttribute('aria-invalid')) validate(); });
    });
  }

  /* ---------------------------------------------------------------------
     Year in footer (the shared site.js also does this; harmless duplicate)
     --------------------------------------------------------------------- */
  var yr = document.getElementById('year');
  if (yr) yr.textContent = new Date().getFullYear();
})();
