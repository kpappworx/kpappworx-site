/* Udgass visual layer: memory field (hero) and the spiral loop figure.
   Purely decorative / explanatory. No data, no network, no dependencies.
   Respects prefers-reduced-motion (draws once, static). */
(function(){
  'use strict';
  var NS = 'http://www.w3.org/2000/svg';
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  function el(n, a, p){ var e = document.createElementNS(NS, n); for (var k in a) e.setAttribute(k, a[k]); if (p) p.appendChild(e); return e; }
  function rng(s){ return function(){ s |= 0; s = s + 0x6D2B79F5 | 0; var t = Math.imul(s ^ s >>> 15, 1 | s); t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; }; }

  /* ---------------- Hero: the memory field ---------------- */
  var host = document.getElementById('memoryField');
  var lastW = 0;
  function drawField(){
    var W = host.clientWidth, H = host.clientHeight;
    if (!W || !H) return;
    lastW = W;
    host.textContent = '';
    var svg = el('svg', { viewBox: '0 0 ' + W + ' ' + H, width: W, height: H, 'aria-hidden': 'true', focusable: 'false' }, host);
    var r = rng(11), narrow = W < 760;
    var N = narrow ? 11 : 17, top = H * 0.12, bot = H * 0.92, gap = (bot - top) / (N - 1);
    var px = W * (host.getAttribute('data-center') ? 0.5 : (narrow ? 0.62 : 0.74));
    var ph = []; for (var i = 0; i < N; i++) ph.push([r() * 6.28, r() * 6.28]);
    function yAt(i, x){
      var t = x / W, a = 5 + i * 0.7;
      return top + i * gap + Math.sin(t * 5.2 + ph[i][0]) * a * 0.6 + Math.sin(t * 11 + ph[i][1]) * a * 0.22 + Math.sin(t * 2.1 + i * 0.3) * 9;
    }
    var traces = narrow ? [4, 8] : [4, 10, 14], mid = traces[Math.floor(traces.length / 2)];
    var yNow = yAt(mid, px);
    var spreadMax = H * 0.2;
    // strata: past (solid) and future (dashed, fading)
    var g = el('g', { 'class': 'mf-strata' }, svg), delay = 0;
    for (i = 0; i < N; i++){
      var d = '', x;
      for (x = 0; x <= px; x += 10) d += (x ? 'L' : 'M') + x + ',' + yAt(i, x).toFixed(1);
      var depth = i / (N - 1);
      var p = el('path', { d: d, 'class': 'mf-line' + (traces.indexOf(i) > -1 ? ' mf-trace' : ''), style: 'opacity:' + (0.35 + depth * 0.55).toFixed(2) }, g);
      if (!reduce){ var L = p.getTotalLength ? Math.ceil(p.getTotalLength()) : 2000; p.style.strokeDasharray = L; p.style.strokeDashoffset = L; p.style.animation = 'mfDraw 1.8s cubic-bezier(.2,.7,.3,1) ' + (i * 0.07).toFixed(2) + 's forwards'; }
      var f = '';
      for (x = px; x <= W; x += 10){
        var k = (x - px) / (W - px);
        var y = yNow + (yAt(i, x) - yAt(i, px)) * 0.5 + (i - mid) * gap * 0.35 * Math.pow(k, 1.1);
        f += (x === px ? 'M' : 'L') + x + ',' + y.toFixed(1);
      }
      el('path', { d: f, 'class': 'mf-fut', style: 'opacity:' + (0.5 - depth * 0.2).toFixed(2) }, g);
    }
    // the forecast fan (uncertainty widens with distance)
    var cl = 'M' + px + ',' + yNow;
    var upper = [], lower = [];
    for (x = px; x <= W; x += 14){
      var kk = (x - px) / (W - px), c = yNow + Math.sin(kk * 3.2 + 1) * H * 0.03 * kk - kk * H * 0.04, s = kk * spreadMax;
      upper.push([x, c - s]); lower.push([x, c + s]); cl += 'L' + x + ',' + c.toFixed(1);
    }
    var poly = 'M' + px + ',' + yNow;
    upper.forEach(function(pt){ poly += 'L' + pt[0] + ',' + pt[1].toFixed(1); });
    lower.reverse().forEach(function(pt){ poly += 'L' + pt[0] + ',' + pt[1].toFixed(1); });
    el('path', { d: poly + 'Z', 'class': 'mf-fan' }, svg);
    el('path', { d: cl, 'class': 'mf-fc' }, svg);
    // evidence: past moments on the trace lines that resemble now, joined to now by dotted arcs
    var ev = narrow ? [0.18, 0.4] : [0.14, 0.3, 0.44];
    var gt = el('g', { 'class': 'mf-ev' }, svg);
    traces.forEach(function(ti, n){
      var ex = px * ev[Math.min(n, ev.length - 1)] + n * 6, ey = yAt(ti, ex);
      var cy = Math.min(ey, yNow) - 40 - n * 14;
      el('path', { d: 'M' + ex + ',' + ey + ' C' + ex + ',' + cy + ' ' + px + ',' + cy + ' ' + px + ',' + yNow, 'class': 'mf-arc' }, gt);
      el('circle', { cx: ex, cy: ey, r: 4, 'class': 'mf-dot' }, gt);
    });
    // one exception, in ember
    var exx = px * 0.62, exy = yAt(5, exx);
    el('circle', { cx: exx, cy: exy, r: 9, 'class': 'mf-exring' }, gt);
    el('circle', { cx: exx, cy: exy, r: 3.5, 'class': 'mf-exdot' }, gt);
    // now
    el('line', { x1: px, y1: top - 18, x2: px, y2: bot + 18, 'class': 'mf-now' }, svg);
    el('circle', { cx: px, cy: yNow, r: 12, 'class': 'mf-nowring' }, svg);
    el('circle', { cx: px, cy: yNow, r: 4.5, 'class': 'mf-nowdot' }, svg);
  }
  if (host){
    drawField();
    var t = 0;
    window.addEventListener('resize', function(){ clearTimeout(t); t = setTimeout(function(){ if (Math.abs(host.clientWidth - lastW) > 8) drawField(); }, 150); });
  }

  /* ---------------- How: the spiral loop figure ---------------- */
  var fig = document.getElementById('loopFig');
  var list = document.querySelector('ol.ud-loop');
  if (fig && list){
    var steps = [
      ['Connect', 'm-link'], ['Remember', 'm-mem'], ['Detect', 'm-exc'], ['Diagnose', 'm-branch'],
      ['Predict', 'm-pre'], ['Recommend', 'm-dec'], ['Verify', 'm-out'], ['Learn', 'm-spiral']
    ];
    var items = list.querySelectorAll('.ud-step');
    var svg = el('svg', { viewBox: '-235 -225 470 450', role: 'group', 'aria-label': 'The loop as a spiral: each pass widens what the business remembers. Select a step to read it.' }, fig.querySelector('.ud-loopfig-svg'));
    var r0 = 40, dr = 22, a0 = -Math.PI / 2, da = Math.PI / 4;
    function pt(k){ var a = a0 + da * k, r = r0 + dr * k; return [Math.cos(a) * r, Math.sin(a) * r]; }
    // rings of memory (concentric, faint)
    [62, 107, 152, 197].forEach(function(rr){ el('circle', { cx: 0, cy: 0, r: rr, 'class': 'lf-ring' }, svg); });
    var d = '';
    for (var k = 0; k <= 7; k += 0.05){ var p = pt(k); d += (k ? 'L' : 'M') + p[0].toFixed(1) + ',' + p[1].toFixed(1); }
    el('path', { d: d, 'class': 'lf-path' }, svg);
    var d2 = '';
    for (k = 7; k <= 8.6; k += 0.05){ p = pt(k); d2 += (k > 7 ? 'L' : 'M') + p[0].toFixed(1) + ',' + p[1].toFixed(1); }
    el('path', { d: d2, 'class': 'lf-next' }, svg);
    el('circle', { cx: 0, cy: 0, r: 4, 'class': 'lf-core' }, svg);
    var cap = fig.querySelector('.ud-loopfig-cap');
    var nodes = [], active = -1;
    function setActive(i){
      active = i;
      nodes.forEach(function(n, j){ n.setAttribute('aria-pressed', j === i ? 'true' : 'false'); n.classList.toggle('on', j === i); });
      for (var j = 0; j < items.length; j++) items[j].classList.toggle('is-active', j === i);
      var it = items[i];
      cap.querySelector('.n').textContent = 'Step ' + (i + 1) + ' of 8';
      cap.querySelector('h3').textContent = steps[i][0];
      cap.querySelector('p.desc').textContent = it.querySelector('p').textContent;
    }
    steps.forEach(function(s, i){
      var q = pt(i);
      var g = el('g', { transform: 'translate(' + q[0].toFixed(1) + ',' + q[1].toFixed(1) + ')', 'class': 'lf-node' + (i === 2 ? ' exc' : ''), role: 'button', tabindex: '0', 'aria-pressed': 'false', 'aria-label': 'Step ' + (i + 1) + ': ' + s[0] }, svg);
      el('circle', { r: 21, 'class': 'lf-halo' }, g);
      el('circle', { r: 17, 'class': 'lf-disc' }, g);
      el('use', { href: '#' + s[1], x: -10, y: -10, width: 20, height: 20, 'class': 'mk' }, g);
      var a = a0 + da * i, cx = Math.cos(a), cy = Math.sin(a);
      var anc = cx > 0.35 ? 'start' : (cx < -0.35 ? 'end' : 'middle');
      var tx = el('text', { x: (cx * 30 + (anc === 'start' ? 4 : anc === 'end' ? -4 : 0)).toFixed(1), y: (cy * 30 + (cy > 0.5 ? 12 : cy < -0.5 ? -4 : 4)).toFixed(1), 'class': 'lf-lab', 'text-anchor': anc }, g);
      tx.textContent = s[0];
      g.addEventListener('click', function(){ setActive(i); });
      g.addEventListener('mouseenter', function(){ setActive(i); });
      g.addEventListener('keydown', function(e){
        if (e.key === 'Enter' || e.key === ' '){ e.preventDefault(); setActive(i); }
        else if (e.key === 'ArrowRight' || e.key === 'ArrowDown'){ e.preventDefault(); var n = (i + 1) % 8; nodes[n].focus(); setActive(n); }
        else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp'){ e.preventDefault(); var m = (i + 7) % 8; nodes[m].focus(); setActive(m); }
      });
      nodes.push(g);
    });
    fig.classList.add('ready');
    setActive(1);
  }
})();
