# Software + Structured Human Last-Mile — Analogue Search
**16 September 2026 · Evidence only · No ranking**

Searched for published service prices first, then asked what the human still does and why. Seven candidates have verifiable spend and explicit residual-human evidence; two failed on verifiable price or frequency. **The common pattern is in §2 and it is the most useful thing in this document.**

---

# §1 Candidates

## A. Sales tax return filing and exception handling
**Best-quantified residual human work found anywhere in this entire research programme.**

**Human service purchased:** preparing, reviewing and filing sales tax returns across states, and handling what comes back.

**Published prices** ([Sales Tax at Scale cost breakdown](https://salestaxatscale.com/cost-of-sales-tax-compliance/what-does-it-cost-to-file-sales-tax-returns/)):
- SaaS platforms: **$20–$55 per return** (TaxJar $50–55, TaxCloud $20–39, Avalara $42–54)
- CPA firms: **$75–$250 per return**
- Managed services: **$2,000–$8,000/month** ($24,000–$96,000/yr)
- [Avalara Select](https://www.avalara.com/blog/en/north-america/2026/08/avalara-select-sales-tax-pricing-small-businesses.html): **$799/year per state** (3-state minimum) or $699/year per state with SST, bundling calculation, filing, remittance and state correspondence

**Buyer:** controller, finance manager, or small-business owner. Non-technical.

**Software penetration:** high. Avalara calculates across 12,000+ jurisdictions, files, remits and handles state notices.

**Residual human work — explicit and quantified:**
> return review before submission; exception handling — *"addressing transactions the platform flagged or could not process"*; reconciliation against internal records; notice response after filing; amendment processing when errors occur.
>
> **"5 to 15 hours per month depending on state count and complexity" — "$8,000 to $25,000 per year" in labour costs even after automation.**

For a 25-state mid-market filer, direct filing is ~$12,000/yr and total compliance cost lands at $30,000–$50,000. **The automation is the cheap part.**

**Why software hasn't eliminated it:** the counterparty is 50 state revenue departments with inconsistent systems, and the exceptions are transactions the platform could not classify — which requires knowing the business, not the tax code.

**Frequency:** monthly or quarterly per state. Continuous.
**Liability:** moderate-to-high — filing errors mean penalties and interest.
**Acquisition:** SEO, accounting-firm partnerships, e-commerce app stores.
**Productizable component:** the exception queue — classifying transactions the calculation engine flagged, and reconciling platform output against source records.
**Pricing model:** subscription and per-return. **Not contingency.**
**Evidence strength:** strongest in this document.
**Trap:** Avalara, TaxJar, TaxCloud, Sovos and Vertex are all here. You would be building the layer *around* a category leader, not competing with it.

---

## B. Construction lien and preliminary notice filing
**Contains the only direct price measurement of what the human last-mile is worth.**

**Human service purchased:** preparing, reviewing and serving preliminary notices, mechanics liens and releases within statutory deadlines.

**Published prices** ([LienItNow](https://www.lienitnow.com/prices)) — and note the structure:

| Document | DIY | Full Service | **Human premium** |
|---|---|---|---|
| Preliminary notices / notice to owner | **$24.95** | **$59.00** | **$34** |
| Mechanics lien, bond claim, stop notice | **$79.95** | **$349–$899** | **$270–$820** |
| Lien amendment | $79.95 | $349 | $269 |
| Lien extension | $79.95 | $149 | $69 |
| Lien release | $79.95 | $149–$199 | $69–$119 |

Rush service: +25%.

**This is the cleanest evidence in the entire research programme.** The vendor publishes both prices for the identical document. The difference is exactly what customers pay for the human last-mile — and per the vendor's own comparison, that last mile is *review and editing* plus *filing and service by post*. Customers create the document either way.

**Buyer:** contractor, subcontractor, material supplier. Non-technical.
**Software penetration:** substantial — Levelset (owned by Procore), CNS Lien, Northwest Lien Service, mechanicslien.com all offer document generation.
**Residual human work:** reviewing the drafted document for errors, and physically serving it — certified mail to the right parties at the right addresses within the deadline.
**Why software hasn't eliminated it:** 50 state statutes with different deadlines, parties and service methods; the recipients are property owners and county recorders reachable by post, not API; and an error voids the lien right entirely.
**Frequency:** preliminary notices at the start of every project — genuinely recurring for an active subcontractor. Liens are event-driven.
**Liability:** moderate-to-high, and **legal-adjacent** — a missed deadline destroys a payment right. Preparing lien documents for others edges toward unauthorised practice of law in some states. **Flagging explicitly.**
**Pricing model:** per-document, tiered by service level. Not contingency.
**Trap:** Procore owns Levelset. The legal-adjacency question needs a real answer before anything else.

---

## C. Accounts payable invoice exception handling

**Human service purchased:** resolving the invoices automation couldn't process.

**Published benchmarks** ([ChatFin touchless AP, 2026](https://chatfin.ai/blog/touchless-ap-straight-through-processing-finance-2026/)):
- **Top-quartile touchless rate: 80%+** — meaning 20% still need a human
- **Most finance teams run at only 30–50% touchless** — meaning half to two-thirds need a human
- Cost per invoice: **under $3.00 for top performers vs $12–15 manual**

**Residual human work, with named causes:** match discrepancies against purchase orders (quantity, price variance, missing PO); ambiguous GL coding needing business context; fraud indicators and duplicates; document quality — *"sometimes a four can be read as a six"*; disputed invoices and pricing mismatches.

**Why software hasn't eliminated it:** the exceptions are precisely the cases where the document is ambiguous or the business context isn't in any system.
**Buyer:** AP manager or controller. Non-technical.
**Frequency:** continuous.
**Liability:** low-to-moderate.
**Pricing model:** subscription, per-invoice.
**Trap — serious:** this is among the most heavily funded software categories in existence (Bill.com, Tipalti, Stampli, Ramp, AvidXchange, Coupa). The gap is real and enormous companies are already aiming at it.

---

## D. Chargeback representment *(carried from previous pass)*
Chargeflow **25% of recovered**; Disputifier **20% capped $250/case**; processor fees $15–25/dispute. Residual human work explicit: *"someone still supplies policy documents, tracking, and fulfilment data, and someone still reads the outcomes"* — **"20 to 45 minutes of somebody's attention"** per case. Continuous. Low liability. Contingency-priced.

## E. Amazon FBA reimbursement *(carried)*
Getida **25% commission per recovery**, no subscription. Software detects discrepancies; humans *"reconcile figures and gather required documentation,"* open and manage cases with Amazon, handle correspondence. Continuous. Low liability. Contingency-priced.

## F. Provider credentialing *(carried)*
Only one published price among ten surveyed vendors (Veritas, $5,995). Buyer's guide conclusion: *"Human oversight, not software efficiency, remains the differentiator in this market."* Recredentialing cycles. **Healthcare-adjacent liability flag.**

## G. Multi-state entity compliance filing *(carried)*
Harbor Compliance **$199/state/year** plus filing fees. Humans research entity statuses and determine fees. Annual per state. **Trap: Gusto acquired Mosey in July 2026 — the software layer is being absorbed by payroll platforms.**

---

# Killed

**H. Freight audit and payment — killed on unverifiable price.** The category names three pricing models (subscription, per-invoice, contingency percentage of recovered charges) but **no vendor or third-party source I opened published an actual percentage, per-invoice fee or minimum.** Real service, unverifiable spend. Fails your evidence standard.

**I. Amazon account reinstatement — killed on frequency.** Prices are published and specific: [My Amazon Guy](https://myamazonguy.com/services/account-suspension-reinstatement/) charges **$1,000 Tier 1** (order defect rate) and **$2,000 Tier 2** (fraud, verification, IP), with a claimed 94% success rate — though note the disclosed volume is only **68 orders processed, 64 successful**. Attorney-supervised prevention plans run $750/month. The human does research, plan-of-action drafting, case follow-up and catalogue changes. **But suspension is a rare, event-driven crisis, not recurring work.** No recurring workflow, so it fails your kill rule.

---

# §2 The common pattern

Across all seven survivors, the residual human work is always one of four things:

1. **Exception adjudication** — the system flagged something it couldn't decide (sales tax transactions *"the platform flagged or could not process"*; AP match discrepancies; which chargebacks are worth fighting)
2. **Correspondence with an external organisation** — state revenue departments, Amazon Seller Support, insurance payers, card networks, county recorders, secretaries of state
3. **Evidence assembly across systems the tool doesn't reach** — chargeback fulfilment data, FBA documentation, credentialing applications
4. **Outcome verification** — someone reads what came back and decides what happens next

And the structural reason is identical in every single case:

> **The automation stops at the boundary of an external organisation that does not expose an API.**

State revenue departments, county recorders, Amazon Seller Support, insurance payers, card networks, secretaries of state — every one of them is reached through portals, post, PDFs and human discretion. Software handles everything up to that boundary flawlessly. A human carries it across. That is the entire economic structure you identified, stated generally.

## Two corollaries that matter for you

**Corollary 1 — the moat in these categories is operational, not technical.** The companies winning here are not the ones with better software; they are the ones who have industrialised the boundary crossing — relationships, staff who know a payer's quirks, mail rooms, escalation paths. For a solo technical founder that is a warning, not an invitation: the defensible part of these businesses is the part that requires people.

**Corollary 2 — the pricing model tells you how much discretion the counterparty has, and this is a rule you can apply to any future candidate:**

| Counterparty discretion | Pricing model observed | Examples |
|---|---|---|
| **High** — counterparty decides, outcome genuinely uncertain | **Contingency** (20–25% of recovered) | Chargebacks, FBA reimbursement, suspension appeals |
| **Low** — counterparty must accept a correct submission | **Subscription / per-document** | Sales tax returns, lien notices, entity filings, AP |

This is why chargebacks and FBA are contingency-priced and sales tax is not. It isn't convention — it's a direct reading of whether the outcome is knowable in advance. **A category priced on contingency is telling you the buyer will not pay upfront because nobody can promise the result.** Trying to sell subscription software into a contingency market means arguing with that fact.

The practical consequence: **the subscription-shaped opportunities in this pattern are the low-discretion ones** — sales tax exceptions, lien notices, entity filings, AP exceptions. The contingency ones are structurally services businesses with software inside, which is a different company than the one you said you want to build.

---

# §3 Honest assessment of what this method produced

It worked better than the previous four methods. It produced verifiable prices for six of seven survivors, explicit statements of residual human work for five, and one category (LienItNow) where the vendor publishes the human premium as a line item. That is a materially higher evidence standard than anything earlier in this programme.

What it did not produce is a category where the software layer is both unoccupied and the buyer is reachable without competing against a funded incumbent. Sales tax has Avalara. AP has Bill.com and Ramp. Lien filing has Procore. Entity filing has Gusto buying Mosey. **In every case the pattern is real and someone large has already noticed it.**

That is not a reason to stop. It is the reason the next question should probably be about a specific counterparty boundary that is too small or too unglamorous for a funded company to industrialise — rather than about another category.
