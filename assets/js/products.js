/* =========================================================================
   KPAppWorx — product portfolio data
   -------------------------------------------------------------------------
   THE single source of truth for every product shown on the site.
   The homepage portfolio, /products, the nav "Products" menu, the footer
   and the Company page brand tree all render from this file.

   To add a product:
     1. Add an entry to KP_PRODUCTS below.
     2. Copy _templates/product-page.html to products/<slug>.html and fill it in.
     3. Add the URL to sitemap.xml.
   Nothing else on the site needs to change.

   Fields
     id          unique slug, also used for the CSS identity hook
     name        product name exactly as it should appear
     audience    who it is for, shown as "For <audience>"
     descriptor  short category line (e.g. "Read-only HubSpot attention system")
     summary     one sentence: the problem it solves / what it does
     status      one of: live | early-access | in-development | lab | discovery
     href        product page URL (null = card is not a link)
     accent      product identity colour, light theme
     accentDark  product identity colour, dark theme
     mark        key into KP_MARKS (product icon), or null for a monogram
     placeholder true = template entry; rendered as a clearly-marked draft
     visible     false = kept in the data but not rendered anywhere
   ========================================================================= */

window.KP_PRODUCTS = [
  {
    id: "quarterdeck",
    name: "Quarterdeck AI",
    audience: "revenue teams",
    descriptor: "Independent ROI layer for HubSpot",
    summary: "See which workflows, campaigns and AI features create pipeline and which burn budget, with every number labelled Measured, Imported, Estimated or Unavailable.",
    status: "early-access",
    href: "/products/quarterdeck",
    accent: "#0f5d58",
    accentDark: "#7cc6bb",
    mark: "quarterdeck",
    placeholder: false,
    visible: true
  },
  {
    id: "udgass",
    name: "Udgass.ai",
    audience: "planners, supply-chain teams and business leaders",
    descriptor: "Business decision intelligence engine",
    summary: "Remembers a business’s history, detects change, predicts outcomes with the uncertainty shown, and learns from results. Starting with demand and inventory. Early-access list open; no product to sign in to yet.",
    status: "in-development",
    href: "/udgass",
    accent: "#24509c",
    accentDark: "#8fb0ee",
    mark: "udgass",
    placeholder: false,
    visible: true
  },
  {
    // PRODUCT #2 — replace the bracketed values when the product is ready to be named.
    // Set visible:false to hide this card until then.
    id: "product-2",
    name: "[PRODUCT NAME]",
    audience: "[CUSTOMER / TEAM]",
    descriptor: "[Short descriptor]",
    summary: "[One-sentence description of the problem it solves.]",
    status: "in-development",
    href: null,
    accent: "#6b5a2e",
    accentDark: "#d2bd84",
    mark: null,
    placeholder: true,
    visible: false
  }
];

/* Status vocabulary — label + what the status commits us to. */
window.KP_STATUSES = {
  "discovery":      { label: "Discovery",      meaning: "Working with the people who have the problem. Often solved by hand first. No product yet." },
  "in-development": { label: "In development", meaning: "The repeatable logic is understood and being built into software." },
  "early-access":   { label: "Early access",   meaning: "Open to a small group of early users whose feedback shapes what ships next." },
  "live":           { label: "Live",           meaning: "Generally available and supported." },
  "lab":            { label: "Lab",            meaning: "An experiment or small utility. Not a commercial commitment." }
};

/* Product marks — simple inline SVG on a 24×24 grid, drawn in currentColor. */
window.KP_MARKS = {
  // Quarterdeck: two nested quarter-sweeps — the wide view, and the part that matters.
  // Udgass: a remembered curve that continues, dashed, into the forecast.
  udgass: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M3 17c2.5 0 2.5-9 5.5-9s2.5 9 5.5 9"/><path d="M14 17c1.5 0 2.6-2.4 5-6" stroke-dasharray="1.8 3"/><circle cx="20" cy="10" r="1.6" fill="currentColor" stroke="none"/></svg>',
  quarterdeck: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M4 20V5a15 15 0 0 1 15 15H4z" opacity=".38"/><path d="M4 20v-8a8 8 0 0 1 8 8H4z"/></svg>'
};
