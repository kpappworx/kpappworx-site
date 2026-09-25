(function(){
  "use strict";

  /* =======================================================================
     Portfolio rendering — everything product-related reads window.KP_PRODUCTS
     (assets/js/products.js). Pages opt in with data-kp="..." containers.
     ======================================================================= */
  var PRODUCTS = (window.KP_PRODUCTS || []).filter(function(p){ return p.visible !== false; });
  var STATUSES = window.KP_STATUSES || {};
  var MARKS = window.KP_MARKS || {};

  function esc(s){
    return String(s == null ? "" : s)
      .replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;");
  }
  function statusLabel(key){ return (STATUSES[key] && STATUSES[key].label) || key; }
  function chip(key, labelOverride){
    return '<span class="st st-' + esc(key) + '"><i aria-hidden="true"></i>' + esc(labelOverride || statusLabel(key)) + '</span>';
  }
  function accentStyle(p){
    return '--p:' + esc(p.accent || "var(--ink)") + ';--p-dark:' + esc(p.accentDark || p.accent || "var(--ink)");
  }
  function mark(p, i){
    if (p.mark && MARKS[p.mark]) return '<span class="pf-mark">' + MARKS[p.mark] + '</span>';
    var n = String(i + 1); if (n.length < 2) n = "0" + n;
    return '<span class="pf-mark pf-mark-mono" aria-hidden="true">' + n + '</span>';
  }
  var ARROW = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>';

  function card(p, i, full){
    var tag = p.href ? "a" : "div";
    var attrs = p.href ? ' href="' + esc(p.href) + '"' : "";
    var cls = "pf-card" + (p.placeholder ? " is-placeholder" : "") + (p.href ? " is-link" : "");
    return '<' + tag + ' class="' + cls + '"' + attrs + ' style="' + accentStyle(p) + '" data-product="' + esc(p.id) + '">' +
      '<span class="pf-top">' + mark(p, i) + chip(p.status) + '</span>' +
      '<span class="pf-aud">For ' + esc(p.audience) + '</span>' +
      '<span class="pf-name">' + esc(p.name) + '</span>' +
      (full ? '<span class="pf-desc">' + esc(p.descriptor) + '</span>' : '') +
      '<span class="pf-sum">' + esc(p.summary) + '</span>' +
      '<span class="pf-foot"><span class="pf-by">Built by KPAppWorx</span>' +
        (p.href ? '<span class="pf-go">View product ' + ARROW + '</span>' : '<span class="pf-go is-muted">Page coming</span>') +
      '</span>' +
    '</' + tag + '>';
  }
  function nextCard(){
    return '<div class="pf-card pf-next">' +
      '<span class="pf-top"><span class="pf-mark pf-mark-empty" aria-hidden="true"></span>' + chip("discovery", "Coming next") + '</span>' +
      '<span class="pf-name">The next product</span>' +
      '<span class="pf-sum">Products enter the portfolio when a real problem has earned the right to become software.</span>' +
      '<span class="pf-foot"><a class="pf-go" href="/#how-we-build">How a product earns its place ' + ARROW + '</a></span>' +
    '</div>';
  }

  document.querySelectorAll('[data-kp="portfolio"]').forEach(function(el){
    var full = el.getAttribute("data-variant") === "full";
    var html = PRODUCTS.map(function(p, i){ return card(p, i, full); }).join("");
    if (el.getAttribute("data-next") !== "false") html += nextCard();
    el.innerHTML = html;
  });

  document.querySelectorAll('[data-kp="nav-products"]').forEach(function(el){
    el.innerHTML = PRODUCTS.map(function(p, i){
      var inner = mark(p, i) +
        '<span class="dd-txt"><span class="dd-name">' + esc(p.name) + '</span><span class="dd-aud">For ' + esc(p.audience) + '</span></span>' +
        chip(p.status);
      return p.href
        ? '<a class="dd-prod" href="' + esc(p.href) + '" style="' + accentStyle(p) + '">' + inner + '</a>'
        : '<span class="dd-prod is-off" style="' + accentStyle(p) + '">' + inner + '</span>';
    }).join("");
  });

  document.querySelectorAll('[data-kp="mobile-products"]').forEach(function(el){
    el.innerHTML = PRODUCTS.filter(function(p){ return p.href; }).map(function(p){
      return '<a href="' + esc(p.href) + '" class="mm-sub">' + esc(p.name) + '</a>';
    }).join("");
  });

  document.querySelectorAll('[data-kp="footer-products"]').forEach(function(el){
    el.innerHTML = PRODUCTS.filter(function(p){ return p.href; }).map(function(p){
      return '<li><a href="' + esc(p.href) + '">' + esc(p.name) + '</a></li>';
    }).join("") + '<li><a href="/products">All products</a></li>';
  });

  document.querySelectorAll('[data-kp="status-legend"]').forEach(function(el){
    var order = ["discovery","in-development","early-access","live"];
    var ladder = order.map(function(k, i){
      return '<li class="lg-step"><span class="lg-n">' + (i + 1) + '</span>' + chip(k) +
        '<span class="lg-m">' + esc((STATUSES[k] || {}).meaning) + '</span></li>';
    }).join("");
    el.innerHTML = '<ol class="lg-ladder">' + ladder + '</ol>' +
      '<p class="lg-aside">' + chip("lab") + '<span>' + esc((STATUSES.lab || {}).meaning) + ' Lab work lives in <a href="/labs">Labs</a>, outside the ladder.</span></p>';
  });

  document.querySelectorAll('[data-kp="tree"]').forEach(function(el){
    el.innerHTML = PRODUCTS.map(function(p, i){
      return '<li class="tree-node" style="' + accentStyle(p) + '">' + mark(p, i) +
        '<span><b>' + esc(p.name) + '</b><em>For ' + esc(p.audience) + '</em></span>' + chip(p.status) + '</li>';
    }).join("");
  });

  document.querySelectorAll('[data-kp="product-count"]').forEach(function(el){
    var n = PRODUCTS.filter(function(p){ return !p.placeholder; }).length;
    el.textContent = n + (n === 1 ? " product" : " products");
  });

  /* ---- Mobile nav ---- */
  var toggle = document.querySelector('.nav-toggle');
  var menu = document.getElementById('mobileMenu');
  if (toggle && menu){
    toggle.addEventListener('click', function(){
      var open = menu.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    });
    menu.addEventListener('click', function(e){
      if (e.target.closest('a')){ menu.classList.remove('open'); toggle.setAttribute('aria-expanded','false'); }
    });
  }

  /* ---- Products dropdown: click/keyboard support on top of hover ---- */
  document.querySelectorAll('.nav-dd').forEach(function(dd){
    var btn = dd.querySelector('.nav-dd-btn');
    if (!btn) return;
    function set(open){ dd.classList.toggle('open', open); btn.setAttribute('aria-expanded', open ? 'true' : 'false'); }
    btn.addEventListener('click', function(e){ e.preventDefault(); set(!dd.classList.contains('open')); });
    dd.addEventListener('keydown', function(e){ if (e.key === 'Escape'){ set(false); btn.focus(); } });
    document.addEventListener('click', function(e){ if (!dd.contains(e.target)) set(false); });
  });

  /* ---- Theme toggle ---- */
  var root = document.documentElement;
  var themeBtns = document.querySelectorAll('.theme-toggle');
  function applyTheme(t){
    root.setAttribute('data-theme', t);
    try{ localStorage.setItem('kp-theme', t); }catch(e){}
    themeBtns.forEach(function(b){ b.setAttribute('aria-pressed', t === 'dark' ? 'true' : 'false'); });
  }
  themeBtns.forEach(function(btn){
    btn.setAttribute('aria-pressed', root.getAttribute('data-theme') === 'dark' ? 'true' : 'false');
    btn.addEventListener('click', function(){
      applyTheme((root.getAttribute('data-theme') || 'light') === 'dark' ? 'light' : 'dark');
    });
  });

  /* ---- Tabs (any .tabs group on the page) ---- */
  document.querySelectorAll('[role="tablist"]').forEach(function(list){
    var tabs = Array.prototype.slice.call(list.querySelectorAll('[role="tab"]'));
    function select(tab){
      tabs.forEach(function(t){
        var on = t === tab;
        t.setAttribute('aria-selected', on ? 'true' : 'false');
        t.tabIndex = on ? 0 : -1;
        var panel = document.getElementById(t.getAttribute('aria-controls'));
        if (panel) panel.hidden = !on;
      });
    }
    tabs.forEach(function(tab, i){
      tab.addEventListener('click', function(){ select(tab); });
      tab.addEventListener('keydown', function(e){
        var next = null;
        if (e.key === 'ArrowRight') next = tabs[(i + 1) % tabs.length];
        if (e.key === 'ArrowLeft') next = tabs[(i - 1 + tabs.length) % tabs.length];
        if (e.key === 'Home') next = tabs[0];
        if (e.key === 'End') next = tabs[tabs.length - 1];
        if (next){ e.preventDefault(); select(next); next.focus(); }
      });
    });
  });

  /* ---- Reveal on scroll ---- */
  var reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches){
    var io = new IntersectionObserver(function(entries){
      entries.forEach(function(en){
        if (en.isIntersecting){ en.target.classList.add('in'); io.unobserve(en.target); }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
    reveals.forEach(function(el){ io.observe(el); });
  } else {
    reveals.forEach(function(el){ el.classList.add('in'); });
  }

  /* ---- Dates ---- */
  var y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();
  var today = document.getElementById('today');
  if (today) today.textContent = new Date().toLocaleDateString('en-US', { year:'numeric', month:'long', day:'numeric' });

  /* ---- Contact form (static site — hands off to mailto) ---- */
  var form = document.getElementById('contactForm');
  if (form){
    var params = new URLSearchParams(location.search);
    var pre = params.get('reason');
    var sel = form.querySelector('#cf-reason');
    if (pre && sel){
      Array.prototype.forEach.call(sel.options, function(o){ if (o.value === pre || o.text === pre) sel.value = o.value; });
    }
    form.addEventListener('submit', function(e){
      e.preventDefault();
      var v = function(id){ return (form.querySelector(id) || {}).value || ''; };
      var name = v('#cf-name'), email = v('#cf-email'), company = v('#cf-company'), reason = v('#cf-reason'), message = v('#cf-message');
      var subject = encodeURIComponent('KPAppWorx — ' + (reason || 'Website inquiry') + ' — ' + name);
      var body = encodeURIComponent(['Name: ' + name, 'Email: ' + email, 'Company: ' + company, 'Reason: ' + reason, '', message].join('\n'));
      window.location.href = 'mailto:hello@kpappworx.com?subject=' + subject + '&body=' + body;
      var status = document.getElementById('formStatus');
      if (status){
        status.hidden = false;
        status.textContent = 'Opening your email client with this message pre-filled — send it from there and we’ll reply within one business day.';
        status.classList.add('ok');
      }
    });
  }
})();
