/* KPAppWorx agency homepage: sample lead demo, cost calculator, mobile CTA bar. No dependencies. */
(function () {
  'use strict';
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- Sample lead demo ---------- */
  var root = document.querySelector('.ld');
  if (root) {
    var items = Array.prototype.slice.call(root.querySelectorAll('.ld-item'));
    var clock = root.querySelector('.ld-clock');
    var btn = root.querySelector('.ld-run');
    var feed = root.querySelector('.ld-feed');
    var END = parseFloat(root.getAttribute('data-end')) || 52;
    var SPEED = 4; // simulated seconds per real second
    var raf = 0;

    var fmt = function (s) {
      var m = Math.floor(s / 60), r = Math.floor(s % 60);
      return m + ':' + (r < 10 ? '0' : '') + r;
    };
    var finish = function () {
      cancelAnimationFrame(raf);
      root.setAttribute('data-state', 'done');
      items.forEach(function (i) { i.classList.add('is-on'); });
      clock.textContent = fmt(END);
      feed.style.minHeight = '';
      btn.disabled = false;
      btn.textContent = 'Run it again';
    };
    var play = function () {
      feed.style.minHeight = feed.offsetHeight + 'px'; // hold the finished height so nothing jumps
      root.setAttribute('data-state', 'playing');
      items.forEach(function (i) { i.classList.remove('is-on'); });
      btn.disabled = true;
      btn.textContent = 'Running…';
      var start = performance.now();
      var tick = function (now) {
        var t = Math.min(END, ((now - start) / 1000) * SPEED);
        clock.textContent = fmt(t);
        items.forEach(function (i) {
          if (parseFloat(i.getAttribute('data-t')) <= t) { i.classList.add('is-on'); }
        });
        if (t < END) { raf = requestAnimationFrame(tick); } else { finish(); }
      };
      raf = requestAnimationFrame(tick);
    };
    if (reduce) { btn.hidden = true; } else { btn.addEventListener('click', play); }
  }

  /* ---------- Cost of a slow reply ---------- */
  var calc = document.getElementById('roi');
  if (calc) {
    var $ = function (id) { return document.getElementById(id); };
    var usd = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 });
    var one = new Intl.NumberFormat('en-US', { maximumFractionDigits: 1 });
    var read = function (id, max) {
      var v = parseFloat($(id).value);
      if (!isFinite(v) || v < 0) { v = 0; }
      return max ? Math.min(v, max) : v;
    };
    var FEE = 1500;
    var update = function () {
      var inq = read('roi-inq'), late = read('roi-late', 100), book = read('roi-book', 100), job = read('roi-job');
      var missed = inq * late / 100;
      var lost = missed * book / 100;
      var month = lost * job;
      $('roi-month').textContent = usd.format(month);
      $('roi-missed').textContent = one.format(missed);
      $('roi-lost').textContent = one.format(lost);
      $('roi-year').textContent = usd.format(month * 12);
      $('roi-cover').textContent = job > 0 ? one.format(FEE / job) + (FEE / job === 1 ? ' job' : ' jobs') + ' a month' : 'Enter a job value';
    };
    calc.addEventListener('input', update);
    update();
  }

  /* ---------- Mobile CTA bar: show after the hero, hide at the closing CTA ---------- */
  var bar = document.querySelector('.ag-sticky');
  var heroCta = document.querySelector('.ag-hero .ag-ctas');
  var close = document.getElementById('close');
  if (bar && heroCta && close && 'IntersectionObserver' in window) {
    var heroGone = false, closeSeen = false;
    var sync = function () { bar.classList.toggle('show', heroGone && !closeSeen); };
    new IntersectionObserver(function (e) { heroGone = !e[0].isIntersecting && e[0].boundingClientRect.top < 0; sync(); }).observe(heroCta);
    new IntersectionObserver(function (e) { closeSeen = e[0].isIntersecting; sync(); }).observe(close);
  }
})();
