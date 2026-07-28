(function(){
  "use strict";

  // ---- Mobile nav ----
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

  // ---- Theme toggle ----
  var root = document.documentElement;
  var themeBtns = document.querySelectorAll('.theme-toggle');
  function applyTheme(t){
    root.setAttribute('data-theme', t);
    try{ localStorage.setItem('kp-theme', t); }catch(e){}
    themeBtns.forEach(function(b){ b.setAttribute('aria-pressed', t === 'dark' ? 'true' : 'false'); });
  }
  themeBtns.forEach(function(btn){
    btn.addEventListener('click', function(){
      var current = root.getAttribute('data-theme') || 'light';
      applyTheme(current === 'dark' ? 'light' : 'dark');
    });
  });

  // ---- Reveal on scroll ----
  var reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches){
    var io = new IntersectionObserver(function(entries){
      entries.forEach(function(en){
        if (en.isIntersecting){ en.target.classList.add('in'); io.unobserve(en.target); }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    reveals.forEach(function(el){ io.observe(el); });
  } else {
    reveals.forEach(function(el){ el.classList.add('in'); });
  }

  // ---- Footer year ----
  var y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();
  var today = document.getElementById('today');
  if (today) today.textContent = new Date().toLocaleDateString('en-US', { year:'numeric', month:'long', day:'numeric' });

  // ---- Contact form (static site — no backend, so we hand off to mailto) ----
  var form = document.getElementById('contactForm');
  if (form){
    form.addEventListener('submit', function(e){
      e.preventDefault();
      var name = (form.querySelector('#cf-name') || {}).value || '';
      var email = (form.querySelector('#cf-email') || {}).value || '';
      var company = (form.querySelector('#cf-company') || {}).value || '';
      var reason = (form.querySelector('#cf-reason') || {}).value || '';
      var message = (form.querySelector('#cf-message') || {}).value || '';

      var subject = encodeURIComponent('KPAppWorx — ' + (reason || 'Website inquiry') + ' — ' + name);
      var bodyLines = [
        'Name: ' + name,
        'Email: ' + email,
        'Company: ' + company,
        'Reason: ' + reason,
        '',
        message
      ];
      var body = encodeURIComponent(bodyLines.join('\n'));
      var status = document.getElementById('formStatus');

      window.location.href = 'mailto:hello@kpappworx.com?subject=' + subject + '&body=' + body;

      if (status){
        status.hidden = false;
        status.textContent = 'Opening your email client with this message pre-filled — send it from there and we’ll reply within one business day.';
        status.classList.add('ok');
      }
    });
  }
})();
