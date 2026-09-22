# Market Discovery — Where Money Already Moves
**16 September 2026 · Evidence only · No recommendation**

Method: searched for prices, vendors, published tiers and buyer profiles *before* looking at problems. Every market below was selected because I could find money, not because the problem sounded interesting. Where I could not verify spend, I say so and kill it.

**Headline finding: I found two markets that clear your hard constraints, and one conditional. Not three clean ones.** The reason is structural and I've set it out at the end — one pair of your constraints is doing most of the killing, and you should see which.

---

# A. The 10 markets investigated

| # | Market | Buyer | Verified spend? |
|---|---|---|---|
| 1 | Certificate of insurance (COI) tracking | Compliance officer / PM, construction & property | **Yes — named vendors, exact prices** |
| 2 | Certified payroll / prevailing wage | Payroll admin, public-works contractors | **Yes — exact prices, both models** |
| 3 | Court-rules docketing & calendaring | Paralegal / practice manager, law firms | **Yes — per-user prices** |
| 4 | Freight carrier vetting / fraud | Broker operations manager | **Yes — named vendors, public acquirer** |
| 5 | Credential & licence expiry tracking | HR / compliance, multiple industries | **Yes — full public self-serve tiers** |
| 6 | Accounting practice workflow | Firm owner / practice manager | Partial — vendors real, prices not pinned |
| 7 | Property management add-ons | Property manager | **No — marketplace publishes no prices** |
| 8 | HOA / community association | Association manager, self-managed boards | **No — no add-on pricing found** |
| 9 | Healthcare provider credentialing | Credentialing specialist, practices | Partial — category real, prices not pinned |
| 10 | Generic document / contract expiry | HR, legal, finance, ops | **Yes — same evidence as #5** |

---

# B. The evidence

## 1. Certificate of insurance tracking

**Buyer:** compliance officers and project managers at construction firms, contractors and vendor-dependent businesses. Non-technical, unambiguously.

**Problem they pay to solve:** collecting, reading and expiry-tracking insurance certificates from every subcontractor or vendor, and checking coverage against contractual requirements. Getting it wrong means an uninsured sub on site.

**Prices found** ([Vertikal RMS 2026 pricing guide](https://www.vertikalrms.com/article/how-much-does-coi-tracking-software-cost-2026-pricing-guide/)):

| Vendor | Annual | Per vendor tracked |
|---|---|---|
| C2COI | $800–$2,000 | $15–$40 |
| MyCOI | $1,500–$3,000 | $30–$60 |
| SmartCompliance | $2,000–$4,000 | $40–$80 |
| CertFocus (self-service) | **$7,500 minimum** | $6–$8 |
| CertFocus (full-service) | **$10,000 minimum** | $13–$29 |

Tiers: entry $800–2,000/yr (<50 vendors), professional $2,500–10,000/yr (50–500 vendors), enterprise $10,000–50,000+/yr.

**What the manual alternative costs:** administrative staff doing this by hand spend *"20+ hours per week,"* costing *"$40,000–60,000 per year in wages alone."* That is a documented, quantified budget line — the thing entirely absent from three passes of Failsafe research.

**Can the buyer DIY?** No. A construction compliance officer cannot build software, and the work requires reading ACORD forms and comparing them against contract requirements.

**Competitors with real customers:** myCOI (Capterra-listed with reviews), TrustLayer, Certificial, CertFocus, SmartCompliance, C2COI, plus several comparison sites that exist only because the category has buyers.

**Async?** Partly — the $800–2,000 tier implies self-serve; enterprise is clearly sales-led.
**>$1,000/yr?** Yes, comfortably.
**Moat?** Real — ACORD certificate parsing plus a coverage-requirements rules engine is genuine domain work, not a weekend build.

---

## 2. Certified payroll / prevailing wage

**Buyer:** payroll administrator or office manager at a contractor working public-works projects. Non-technical.

**Problem they pay to solve:** producing WH-347 certified payroll reports every week for every public project, at correct Davis-Bacon prevailing wage rates, in whatever format the awarding agency demands.

**Prices found** ([CertifiedPayrollPro comparison](https://www.certifiedpayrollpro.com/certified-payroll-services)):
- **Software: $49–$300/month.** CertifiedPayrollPro itself at **$99/month** (~$1,188/yr).
- **Managed service: $1,000–$5,000/month**, plus $15–50 per report. Example given: ~$1,200/month for a mid-sized contractor.
- Stated year-1 delta: software saves roughly **$15,280** versus managed service for a 15-worker contractor on three projects.

**Buyer segmentation is published:** software buyers are contractors with 1–50 workers on a few prevailing-wage projects; managed-service buyers are 100+ workers without dedicated payroll staff.

**Can the buyer DIY?** No. And the penalty for getting it wrong is withheld payment or debarment from public contracts.

**Competitors with real customers:** LCPtracker (CB Insights-profiled company), Points North (listed on the ADP Marketplace **with reviews**), CertifiedPayrollPro, eMars, plus Davis-Bacon comparison sites.

**Async?** **Yes at the software tier** — $99/month is a self-serve price point.
**>$1,000/yr?** Yes at $99/mo and up; managed tier is $12,000–60,000/yr.
**Moat?** Strong and unusual: Davis-Bacon wage determinations, WH-347 mechanics, 50 state variants, and the upload formats demanded by LCPtracker and eMars. This is exactly the kind of tedious, high-consequence data normalisation an engineer can build and a contractor cannot.

---

## 3. Court-rules docketing & calendaring

**Buyer:** paralegal, docketing clerk or practice manager at a litigation firm. Non-technical.

**Prices found** ([2026 legal calendar pricing](https://stealthmediamarketing.com/blog/legal-calendar-software/)): Clio $49/user/mo, MyCase $50 (rules only on the $130 Advanced tier), PracticePanther $49 (rules on $114 Business Pro), CARET Legal $79, **CosmoLex $147/user/mo with rules built in**. LawToolBox, Aderant CompuLaw, Smokeball, Tabs3/CalendarRules are all **quote-only**.

**Why they buy:** the ABA Standing Committee on Lawyers' Professional Liability documents calendar-related errors as among the most common administrative causes of malpractice claims.

**Competitors with real customers:** Aderant CompuLaw covers 2,500+ jurisdictions; every major practice-management platform sells a rules tier.

---

## 4. Freight carrier vetting / double-brokering fraud

**Buyer:** operations manager at a freight brokerage. Non-technical.

**Evidence of spend:** [Transfix and Highway announced a partnership (June 2026)](https://www.businesswire.com/news/home/20260623233493/en/Transfix-and-Highway-Partner-to-Give-Freight-Brokers-Built-In-Carrier-Vetting-and-Fraud-Protection-Inside-the-Transfix-TMS) embedding carrier vetting and fraud protection directly into a TMS. [Carrier Assure is a named partner of Descartes MyCarrierPortal](https://www.mycarrierportal.com/partners/carrier-assure/) — Descartes is a publicly traded company. Vendors do not publish prices.

---

## 5 & 10. Credential / document expiry tracking

**Buyer:** HR, compliance, legal, health & safety, finance, logistics. Explicitly non-technical.

**Prices found** ([Expiration Reminder pricing](https://www.expirationreminder.com/pricing)): Starter **$528/yr**, Professional **$1,068/yr**, Business **$1,932/yr**, Enterprise **$3,768/yr**. Add-ons $29–$199/mo.

**Async: fully self-serve.** Fourteen-day trial, no credit card, direct registration; only 300+ employee accounts need a call. **This is proof that your preferred business shape — $1,000–4,000/yr, non-technical buyer, zero sales calls — exists and works.**

**Industries served:** healthcare, construction, insurance, manufacturing, managed services, transportation, education, government, private security.

---

## 6–9. The thinner ones

**Accounting practice workflow** — TaxDome, Karbon, Financial Cents, Uku all real with review histories; I could not pin exact prices in this pass. Category is crowded with 10+ established platforms.

**Property management add-ons** — the [Buildium Marketplace](https://marketplace.buildium.com/) is real, with named partners (Property Meld, Lula, ShowDigs, AvidXchange, Obligo, Agora). It states *"There's no monthly subscription. You only pay for the integrations you use"* but **publishes no prices whatsoever**, and I could not verify partner revenue.

**HOA / community association** — Capterra maintains the category; no add-on pricing found; dominated by full platforms.

**Healthcare provider credentialing** — multiple 2026 buyer's guides exist, so the category has buyers, but prices were not pinned and the work is services-heavy.

---

# C. Kills and exact reasons

| # | Market | Killed on | Why |
|---|---|---|---|
| **3** | Court-rules docketing | **Moat is the barrier to your entry, not your advantage** | The moat is a rules database across 2,500+ jurisdictions. That's a multi-year data-acquisition programme with legal-research staff. A solo founder cannot build it, and entering without it means competing on nothing. Rules engines are also quote-only — sales-led, which violates constraint 4. |
| **4** | Freight carrier vetting | **Network-effect moat owned by incumbents; consolidating now** | The moat is proprietary fraud signals across a broker network. You cannot bootstrap a network. Descartes (public company) is acquiring in the space and Highway is embedding into TMSs — the distribution is being locked up in 2026. |
| **5 / 10** | Credential & document expiry | **No technical moat (constraint 6)** | The product is dates, reminders and document storage. Expiration Reminder's advantage is SEO and brand, not technology. Anyone can build this; you'd be competing on marketing spend, which you don't have. |
| **6** | Accounting practice workflow | **Crowded + weak moat** | 10+ funded incumbents in horizontal workflow software. No defensible technical asset. |
| **7** | Property management add-ons | **No demonstrated spending found** | The marketplace exists but publishes no prices and I could not verify a single partner's revenue. Per your rule, a marketplace listing is not evidence of demand. |
| **8** | HOA / community association | **No demonstrated spending found** | Same. Category pages, no verified add-on pricing. |
| **9** | Healthcare provider credentialing | **Services-heavy + liability** | Credentialing is largely a done-for-you service business, not SaaS. PHI handling adds the liability exposure you ruled out in this conversation's first constraint. |

---

# D. Survivors

You asked for three. **I found two that clear the constraints, and one that clears them conditionally.** Evidence only, no ranking.

## Survivor 1 — Certified payroll / prevailing wage compliance

| Constraint | Status |
|---|---|
| 1. Product not consulting | Software tier exists and is the cheaper option — buyers are explicitly steered to it |
| 2. Recurring | Monthly subscription, weekly filing cadence = high retention |
| 3. >$1,000/yr | $99/mo = $1,188/yr at the low end; $300/mo = $3,600 |
| 4. Async sales | **Yes** — $99/mo is a self-serve price point |
| 5. Few customers | 100 customers at $1,200–3,600 = $120k–360k/yr |
| 6. Technical moat | **Strong** — Davis-Bacon wage determinations, WH-347 mechanics, 50 state variants, LCPtracker/eMars upload formats |
| 7. Non-technical buyer | Contractor payroll admin / office manager |
| 8. Demonstrated spending | $49–$300/mo software; $1,000–$5,000/mo managed services |
| 9. Reachable online | Contractor associations, trade publications, SEO on wage-determination queries |
| 11. Solo-viable | No licensing required — the contractor holds the obligation, you supply the tool |

**The trap:** LCPtracker is frequently *mandated by the awarding agency*, so the receiving system isn't the contractor's choice. You'd be selling the tool that produces compliant files for upload into someone else's mandated system — a real wedge, but a dependent position. Also: the US public-works domain is entirely outside your experience, and you'd be learning Davis-Bacon from zero.

## Survivor 2 — Certificate of insurance tracking

| Constraint | Status |
|---|---|
| 1. Product not consulting | Both models exist; self-service tiers published |
| 2. Recurring | Annual subscriptions across all vendors |
| 3. >$1,000/yr | $800 floor, $2,500–10,000 typical, $50,000 ceiling |
| 4. Async sales | **Partial** — low tier implies self-serve, enterprise is sales-led |
| 5. Few customers | 50 customers at $3,000 = $150k/yr |
| 6. Technical moat | **Real** — ACORD parsing plus coverage-requirement rules |
| 7. Non-technical buyer | Compliance officer, project manager |
| 8. Demonstrated spending | Five named vendors with exact published prices |
| 9. Reachable online | Construction and risk-management publications, SEO |
| 11. Solo-viable | No licensing; you're not an insurance producer, you're reading documents |

**The trap:** the most crowded market on this list. myCOI, TrustLayer, Certificial, CertFocus, SmartCompliance and C2COI are all established, several are VC-funded, and there are enough of them to support an entire comparison-content industry. You would be the seventh entrant into a mature category with no domain credibility.

## Conditional survivor — Accounting practice workflow

Clears constraints 1, 2, 3, 7, 8, 9 and 11. **Fails 6 outright** (no technical moat in horizontal workflow software) and is questionable on 5 (per-seat pricing at firm scale usually means you need hundreds of firms). Listed only because the spend is real and the buyer is right; I would not call it a genuine survivor under your stated rules.

---

# E. The structural finding you should see

Two of your hard constraints are in tension, and they killed six of the ten markets between them:

**Constraint 6 (technical moat) versus constraint 4 (async sales), in markets with non-technical buyers.**

The pattern is consistent across everything I looked at. Markets with non-technical buyers *and* genuine technical moats — court rules, carrier fraud networks, ACORD parsing, wage determinations — have moats that took incumbents years and teams to build, and they sell through calls because the buyer needs hand-holding to trust something consequential. Markets where non-technical buyers *do* buy async at $1,000–4,000/yr — Expiration Reminder is the cleanest proof — sell products simple enough to have no moat at all, competing on SEO and brand.

The two survivors are exactly the cases where a moat happens to be made of **tedious public data rather than accumulated network or capital**: prevailing wage determinations, ACORD form structures. That is a narrow escape hatch, and it's why the list is two long rather than ten.

**If you want more than two options, the constraint to relax is 4 or 6 — not 7 or 8.** Constraints 7 (non-technical buyer) and 8 (demonstrated spend) are the two that have been correct all along and that the last three ideas violated. Keep those absolutely.

One more honest note: neither survivor is in a domain you know. Your safety-critical background gives you execution advantage on the *kind* of work — high-consequence, rule-driven, tedious data correctness — but zero credibility in US public-works payroll or construction insurance. That's a real cost and it belongs in your decision, not in a footnote.
