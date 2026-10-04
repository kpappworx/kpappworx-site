/* KPAppWorx homepage: interactive sample audit. Progressive enhancement:
   the rows and a default detail pane render without JS. All data is fictional. */
(function(){
  "use strict";
  var con = document.getElementById('console');
  if (!con) return;
  var list = document.getElementById('con-list');
  var detail = document.getElementById('con-detail');
  var beam = document.getElementById('con-beam');
  var rows = [].slice.call(list.querySelectorAll('.nv-row'));
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  var D = {
    northwind:{name:'Northwind expansion',meta:'$180,000 · Contract sent · Priya S.',v:'flag',vl:'Review first',
      says:[['Stage','Contract sent'],['Close date','Sep 30'],['Amount','$180,000']],
      shows:[['Aug 14 to Aug 29','Close date pushed (1st)','bad'],['Aug 29 to Sep 15','Close date pushed (2nd)','bad'],['Sep 15 to Sep 30','Close date pushed (3rd)','bad'],['28 days ago','Last recorded sales activity','bad']],
      verdict:'<strong>Not supported by the record.</strong> Three close-date pushes in 45 days and no recorded activity for 28 days.',
      rule:'Repeated close-date drift with no recent activity'},
    northstar:{name:'Northstar platform',meta:'$165,000 · Negotiation · Marco T.',v:'flag',vl:'Review first',
      says:[['Stage','Negotiation'],['Close date','In 12 days'],['Amount','$165,000']],
      shows:[['6 days ago','Stage moved back from Contract sent','bad'],['6 days ago','Amount $205,000 to $165,000','bad'],['Unchanged','Close date, despite both changes','']],
      verdict:'<strong>Not supported by the record.</strong> The stage went backwards and the value fell $40,000, but the close date did not move.',
      rule:'Stage regression with a material amount decrease'},
    atlas:{name:'Atlas renewal',meta:'$120,000 · Proposal · Hannah R.',v:'flag',vl:'Review first',
      says:[['Stage','Proposal'],['Status','Open'],['Close date','5 days ago']],
      shows:[['5 days ago','Close date passed, deal still open','bad'],['34 days ago','Last stage change','bad'],['19 days ago','Last recorded sales activity','']],
      verdict:'<strong>Out of date.</strong> The close date has passed and nothing in the record explains the delay.',
      rule:'Past-due close date with no recent stage change'},
    harbour:{name:'Harbour Point Group',meta:'$96,000 · Negotiation · Dev K.',v:'watch',vl:'Watch',
      says:[['Stage','Negotiation'],['Close date','In 24 days'],['Owner','Dev K.']],
      shows:[['9 days ago','Owner changed (second since June)','warn'],['2 days ago','Last recorded sales activity','good'],['Unchanged','Amount and close date','good']],
      verdict:'<strong>Timing risk, not deal risk.</strong> The deal changed hands mid-negotiation, but activity continues and nothing else moved.',
      rule:'Owner change on an active late-stage deal'},
    calder:{name:'Calder Manufacturing',meta:'$210,000 · Signature · Priya S.',v:'ok',vl:'Supported',
      says:[['Stage','Signature'],['Close date','In 9 days'],['Amount','$210,000']],
      shows:[['4 days ago','Stage advanced to Signature','good'],['2 days ago','Last recorded sales activity','good'],['Unchanged','Amount and close date for 38 days','good']],
      verdict:'<strong>Supported by the record.</strong> Stage, timing and recent activity all agree with each other.',
      rule:'No material change this week'},
    meridian:{name:'Meridian Health',meta:'$82,500 · Negotiation · Marco T.',v:'ok',vl:'Supported',
      says:[['Stage','Negotiation'],['Close date','In 19 days'],['Amount','$82,500']],
      shows:[['1 day ago','Last recorded sales activity','good'],['Unchanged','Close date for 31 days','good'],['Unchanged','Amount','good']],
      verdict:'<strong>Supported by the record.</strong> Active, on a stable date, and no material change.',
      rule:'No material change this week'},
    orbit:{name:'Orbit Freight',meta:'$40,000 · Discovery · Hannah R.',v:'ok',vl:'Supported',
      says:[['Stage','Discovery'],['Close date','In 52 days'],['Amount','$40,000']],
      shows:[['3 days ago','Last recorded sales activity','good'],['Early stage','Changes here do not affect this quarter','good']],
      verdict:'<strong>Supported by the record.</strong> Early-stage changes are suppressed unless they affect the current quarter.',
      rule:'Low-impact change suppressed'}
  };
  var RULE_ICON = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 6h16M4 12h10M4 18h6"/></svg>';
  function esc(s){ return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;'); }
  function render(id, animate){
    var d = D[id]; if (!d) return;
    var cls = d.v;
    var says = d.says.map(function(r){ return '<li>'+esc(r[0])+'<b>'+esc(r[1])+'</b></li>'; }).join('');
    var shows = d.shows.map(function(r){
      var k = r[2]==='bad'?' class="is-bad"':r[2]==='good'?' class="is-good"':'';
      return '<li'+k+'><b>'+esc(r[0])+'</b>'+esc(r[1])+'</li>'; }).join('');
    detail.innerHTML =
      '<div class="nv-d-head"><div><h3>'+esc(d.name)+'</h3><p>'+esc(d.meta)+'</p></div><span class="nv-verdict is-'+cls+'">'+esc(d.vl)+'</span></div>'+
      '<div class="nv-pair"><div class="nv-box"><h4>The CRM says</h4><ul>'+says+'</ul></div>'+
      '<div class="nv-box is-evidence"><h4>The record shows</h4><ul>'+shows+'</ul></div></div>'+
      '<p class="nv-d-verdict is-'+cls+'">'+d.verdict+'</p>'+
      '<p class="nv-d-rule">'+RULE_ICON+'Rule: '+esc(d.rule)+'</p>';
    if (animate && !reduce){ detail.classList.remove('is-swap'); void detail.offsetWidth; detail.classList.add('is-swap'); }
  }
  function select(id, animate){
    rows.forEach(function(r){ r.setAttribute('aria-pressed', r.getAttribute('data-deal')===id ? 'true':'false'); });
    render(id, animate);
  }
  rows.forEach(function(r){ r.addEventListener('click', function(){ select(r.getAttribute('data-deal'), true); }); });

  /* initial state, no motion needed */
  select('northwind', false);

  /* one orchestrated moment: the scan beam resolves each row in turn */
  if (reduce || !('IntersectionObserver' in window)) return;
  var played = false;
  function play(){
    if (played) return; played = true;
    rows.forEach(function(r){ r.classList.add('is-pending'); });
    var h = list.getBoundingClientRect().height;
    list.style.setProperty('--nv-beam-end', (h-8)+'px');
    beam.classList.add('is-running');
    var total = 2600, firstTop = rows[0].offsetTop, span = (rows[rows.length-1].offsetTop + rows[rows.length-1].offsetHeight) - firstTop;
    rows.forEach(function(r){
      var t = 420 + ((r.offsetTop - firstTop) / (h||1)) * (total-700) + 160;
      setTimeout(function(){ r.classList.remove('is-pending'); }, t);
    });
  }
  var io = new IntersectionObserver(function(es){
    es.forEach(function(e){ if (e.isIntersecting){ play(); io.disconnect(); } });
  }, {threshold:0.35});
  io.observe(con);
})();
