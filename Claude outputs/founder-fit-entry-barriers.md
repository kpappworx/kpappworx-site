# Founder-Fit & Entry-Barrier Pass — Four Verified Markets
**16 September 2026 · No ranking · No recommendation**

Sources cited inline. Where I could not verify something this session, I say so rather than filling the gap. Domain-concept lists are my structured knowledge of each regime, not this session's search results — treat them as a study plan to verify, not as citations.

---

# 1. CERTIFIED PAYROLL / PREVAILING WAGE

### A. Domain learning

**What a domain-new founder must learn** — the federal Davis-Bacon Act and its state equivalents ("little Davis-Bacon" laws), and how a contractor proves, weekly, that it paid the legally required wage on a public project.

The concepts that matter:
1. Davis-Bacon Act and when it applies (federally funded construction over $2,000)
2. **Wage determinations** — the published rate schedules, by county and by construction type
3. Classification of workers into trades, and why misclassification is the most common violation
4. Prevailing wage = base rate **plus** fringe benefits, and the rules for paying fringes in cash versus into a plan
5. Form **WH-347** and its statement of compliance
6. Weekly filing cadence and the certification signature
7. Apprentice ratios and registered apprenticeship programmes
8. Overtime under Davis-Bacon vs FLSA interaction
9. Site-of-work rules and what counts as covered
10. Truck drivers, owner-operators and material delivery — a notorious grey area
11. State variants: California DIR/DAS-140/142, New York, Washington, each with its own forms and portals
12. **Upload formats** required by LCPtracker, eMars, Elation and agency portals
13. Certified payroll for multiple projects in one pay period
14. Restitution and withholding when errors are found
15. Debarment as the ultimate penalty

**Realistic time to MVP competence:** 8–12 weeks of concentrated study for someone technically strong but domain-new — mostly because the rules are published and the DOL guidance is thorough, but the state variants are where the real work is. Building a nationally correct product is a multi-year undertaking; **building a correct product for one or two states is a quarter's work.**

**Common newcomer mistakes:** treating fringe benefits as a flat add-on rather than a calculation with offset rules; assuming a single federal wage determination applies to a whole project; ignoring that many agencies mandate a specific upload format and that producing a beautiful PDF is useless if the portal wants a fixed-width file; underestimating California, which has its own parallel regime.

### B. Entry barriers

The barrier is **knowledge, encoded correctly** — not data, not certification, not network effects. Wage determinations are public. No licence is required to sell software that produces a form; the legal obligation sits with the contractor who signs it.

**A solo founder can overcome:** the rules learning, form generation, state-by-state expansion (incrementally), portal format compatibility.
**A solo founder cannot overcome:** nothing structural. This is the only one of the four markets with no hard wall.

### C. Incumbent weaknesses

**Honest limitation: I could not extract review text this pass.** The ADP Marketplace listing for [Points North Certified Payroll Reporting](https://apps.adp.com/en-US/apps/248331/points-north-certified-payroll-reporting-for-adp-workforce-now/reviews) shows **4.7/5 across 13 reviews**, but the review bodies did not come through in extraction. I have no verified complaint data for LCPtracker either — searches returned comparison content, not review pages.

**What I can say from pricing structure rather than reviews:** [CertifiedPayrollPro's comparison](https://www.certifiedpayrollpro.com/certified-payroll-services) positions software against managed services on a **$15,280 year-one saving** for a 15-worker contractor — which is an argument that the incumbent service model is overpriced for small contractors. That's a positioning claim by a competitor, so treat it accordingly.

**This is a genuine evidence gap.** Before committing here you would need to read actual LCPtracker and Points North reviews yourself.

### D. Smallest useful MVP

**Weekly WH-347 generation for single-state contractors, from a payroll export.** Contractor uploads or connects payroll, maps workers to trade classifications once, and gets a signed-ready WH-347 plus the upload file in the format their agency's portal demands. One state. One form. No project management, no time tracking, no payroll processing.

Buildable by one engineer. No proprietary dataset — wage determinations are published. No licensing.

### E. Liability / consequence

**Moderate-to-high.** If the software produces a wrong rate or classification, the contractor files a false statement of compliance — that's a signed federal certification. Consequences run from back-wage restitution and withheld contract payments to debarment from public work. The contractor signs it, not you, but you would be the proximate cause and your terms of service would be tested.

### F. Customer acquisition

**Async: plausible.** Buyers search for this — "certified payroll software", "WH-347", "Davis-Bacon" are high-intent commercial queries and an entire comparison-content industry exists around them ([davisbaconrates.com](https://davisbaconrates.com/certified-payroll-software), CertifiedPayrollPro's alternatives pages). That density of comparison content is itself evidence that buyers self-educate and self-select before purchase.

Channels: SEO on wage-determination and form queries; the **ADP Marketplace** (Points North is listed there, so the channel accepts this product category); contractor associations; state DIR/agency resource pages.

### G. Trust required

**Medium.** The contractor keeps signing the form, so they can verify output before filing. That's a meaningfully lower trust bar than a product that acts autonomously. First customers would likely run your output in parallel with their manual process for a few weeks — which is a reasonable thing to offer explicitly.

### H. Competitive gaps

1. **Small contractors priced out of managed services.** $1,000–5,000/month is absurd for a 10-person contractor. Commercially exploitable — CertifiedPayrollPro already proves it at $99/month.
2. **Producing files for portals rather than being the portal.** LCPtracker is the receiving system; contractors still need to generate compliant uploads. Exploitable, but dependent.
3. **Single-state depth over national shallowness.** Exploitable and it's the natural solo-founder wedge.
4. **Fringe benefit calculation.** The hardest part, most commonly wrong. Exploitable if you get it right, but this is also where liability concentrates.

### I. Hypothetical first customer — clearly labelled as hypothetical

A 12–20 person electrical or mechanical subcontractor in a single state, working two or three public-school or municipal projects a year. The buyer is the **office manager or bookkeeper** who also runs payroll. Today they produce WH-347s in Excel and re-key into the agency portal, losing most of a day each week. At $99–$199/month they'd be spending roughly $1,200–$2,400/yr against a documented managed-service alternative of $12,000+. Whether they would actually switch is unknown — I have no evidence of switching behaviour in this market.

### J. Strongest argument against

**You have no evidence about the incumbents' weaknesses, and the domain is entirely foreign to you.** US public-works payroll is a rule system you'd learn from zero, in a country you don't live in, for contractors who have never heard of you. The compensating factor is that it's the only one of the four with no structural wall — but "no wall" is not the same as "a way in."

---

# 2. CERTIFICATE OF INSURANCE (COI) TRACKING

### A. Domain learning

1. **ACORD forms** — 25 (liability), 27/28 (property), and why the certificate is not the policy
2. Coverage types: general liability, auto, workers' comp, umbrella/excess, professional, pollution
3. **Additional insured** status and the endorsement forms that actually grant it (CG 20 10, CG 20 37)
4. **Waiver of subrogation** and why owners demand it
5. **Primary and non-contributory** wording
6. Per-occurrence vs aggregate limits, and how aggregates erode
7. Certificate holder vs additional insured — the single most misunderstood distinction
8. Contractual insurance requirements and how they're written into subcontracts
9. Expiry, cancellation notice, and why "30 days notice" on a certificate is usually meaningless
10. Workers' comp exemptions and sole-proprietor waivers
11. Multi-tier subcontractor flow-down requirements
12. Certificates of insurance vs evidence of property insurance
13. State-specific workers' comp rules
14. Retroactive dates on claims-made policies
15. What a compliant vs non-compliant certificate actually looks like against a given contract

**Time to MVP competence:** 6–10 weeks. The forms are standardised, which helps enormously. The judgement — does *this* certificate satisfy *that* contract clause — is the hard part and it is genuinely subtle.

**Common newcomer mistakes:** treating the certificate as proof of coverage (it explicitly isn't); assuming additional-insured status exists because the box is ticked, without the endorsement; ignoring that requirements differ per contract, not per vendor.

### B. Entry barriers

Barrier is **knowledge plus trust**, not data. ACORD forms are standardised and widely available. No licensing needed — you're reading documents, not placing insurance. (If you started advising on adequacy of coverage you'd edge toward regulated territory; reading and matching against stated requirements does not.)

**Solo-overcomable:** form parsing, requirements rules engine, expiry tracking, vendor chase workflows.
**Not solo-overcomable:** the trust position. Risk managers are conservative buyers by professional disposition.

### C. Incumbent weaknesses — best evidence of the four

[myCOI on Capterra](https://www.capterra.com/p/234580/myCOI/reviews/): **4.7/5 across 47 reviews** (ease of use 4.6, customer service 4.7, as of 4 Sep 2026). Reviewer titles confirm the buyer profile precisely — Director of Risk Management, VP Risk, Contract Administrator, Compliance Coordinator, Accounts Payable Coordinator, Document Control Administrator, Controller, Analyst. Industries: real estate, construction, oil & energy, renewables.

Verbatim complaints:
- *"The language used in Insurance Industry is rather unique"* and not user-friendly — Dora A, Accounting Manager, Real Estate
- *"Lack of ability to filter the pages"* — DeMario R, Analyst
- No way to filter COIs by coverage type; bulk download impractical — Jason T, VP Risk, Construction
- *"Making changes could be a bit easier"* — Alejandra A, Controller, Construction
- *"Getting myCOI up and running with all the little nuances"* was difficult — Leslie F, Real Estate
- *"Reviews were flagged as incomplete but were complete"* — Charlotte L, Contract Administrator
- One 1-star: *"System was a mess"* — Mckinzie C, Operations Manager, Construction
- Vendors overwhelmed by email frequency — Lisa H, Renewables

**Read this honestly: 4.7/5 is a well-liked incumbent.** The complaints are filtering, bulk export, onboarding friction and jargon — real irritations, not structural failure. That is a weak basis for displacement.

### D. Smallest useful MVP

**Certificate-to-requirement matching for one vertical.** Ingest COIs for a set of vendors, hold one requirements template per contract type, flag non-compliance with the specific clause that fails and the specific endorsement missing. No vendor chase automation, no insurance-agent portal, no multi-tier flow-down.

Buildable by one engineer. ACORD forms are standardised so parsing is tractable. No dataset required.

### E. Liability / consequence

**High.** If your software says a certificate is compliant and it isn't, an uninsured subcontractor works on site. When something goes wrong there, the claim lands on the general contractor or property owner and your compliance report becomes evidence. This is the highest-consequence product of the four, and it is the closest in character to the liability you ruled out at the start of this conversation.

### F. Customer acquisition

**Async: partial.** The $800–2,000 tier implies self-serve, but the $2,500–10,000 professional tier — where the money is — is demo-gated across every vendor I found. Buyers do search: comparison content is abundant ([Vertikal RMS](https://www.vertikalrms.com/article/how-much-does-coi-tracking-software-cost-2026-pricing-guide/), Certificial, coisoftware.com, COI File), and Capterra maintains the category, which is where these buyers evaluate.

### G. Trust required

**High.** A risk manager is professionally paid to be sceptical. Handing vendor compliance to an unknown vendor from another continent, with no references in their industry, is a hard ask. Of the four, this has the widest gap between product quality and purchase likelihood.

### H. Competitive gaps

1. **Insurance jargon in the UI** — directly evidenced by a reviewer. Real gap, but **not commercially exploitable on its own**; nobody switches vendors over wording.
2. **Filtering and bulk export** — evidenced twice. Feature gaps, trivially closed by an incumbent. Not exploitable.
3. **False non-compliance flags** — evidenced once. Exploitable *if* you can demonstrably do better, but demonstrating it requires customer data you don't have.
4. **Onboarding friction** — evidenced. Exploitable for a narrower product, since less configuration means faster setup.

Honest assessment: none of these is a wedge. They are the complaint profile of a product people are broadly happy with.

### I. Hypothetical first customer — hypothetical

A regional property management firm or mid-size general contractor with 100–300 active vendors. Buyer is a **contract administrator or compliance coordinator**. They currently track certificates in a spreadsheet with calendar reminders, or use a cheaper tool they find limiting. Budget band $1,500–4,000/yr is established by MyCOI and SmartCompliance pricing. Why they would switch is the open question — and I found no evidence of switching behaviour.

### J. Strongest argument against

**The incumbents are liked, numerous and funded, and the consequence of your being wrong is somebody uninsured on a construction site.** Six-plus established vendors at 4.4–4.7 star ratings is not a market with a hole in it. You would be the seventh entrant, with the highest liability exposure of the four options, selling to the most conservative buyer, through a demo-gated motion you've said you don't want.

---

# 3. SDS AUTHORING / GHS CLASSIFICATION

### A. Domain learning

1. **GHS** — the UN Globally Harmonized System, and that each jurisdiction adopts a *version* of it
2. OSHA HazCom (29 CFR 1910.1200) in the US; **CLP** in the EU; WHMIS in Canada
3. The **16-section SDS format** and what belongs in each
4. Hazard classes and categories (flammable liquids 1–4, acute toxicity 1–5, etc.)
5. **Cut-off values and concentration limits** — when a component's hazard passes through to the mixture
6. **Mixture classification rules**: bridging principles, additivity for acute toxicity, ATE calculation
7. H-statements and P-statements, and the jurisdiction-specific selection logic
8. Signal words, pictograms (GHS01–09)
9. **Trade secret / CBI** withholding rules
10. Exposure limits — OELs, PELs, TLVs — and where they're sourced
11. Transport classification interaction (UN numbers, packing groups, ADR/DOT)
12. Substance identification: CAS, EC numbers, REACH registration
13. Revision triggers — when new data forces a re-issue
14. Language and jurisdiction requirements for the market you ship into
15. Label content derived from, but not identical to, the SDS

**Time to MVP competence:** 12–16 weeks minimum, and this is the hardest of the four. Mixture classification is genuine applied chemistry logic, not just form-filling. A newcomer can learn the rules; judging whether a classification is *defensible* takes longer.

**Common newcomer mistakes:** treating classification as a lookup rather than a calculation over the mixture; ignoring jurisdiction version differences (EU CLP ATPs move); underestimating how often the underlying substance data is missing or contradictory.

### B. Entry barriers

Barrier is **domain depth plus liability**, and partially **data** — you need substance hazard data as input, and while much is public (ECHA, PubChem, GESTIS), assembling and normalising it is substantial.

**Solo-overcomable:** the classification rules engine, the document generation, one jurisdiction.
**Not solo-overcomable:** the 17M-document SDS *library* that the management products are built on ([SDS Manager](https://sdsmanager.com/us/pricing/)). But **authoring does not need that library**, which is the whole reason this market survived the last pass.

### C. Incumbent weaknesses

[VelocityEHS on Capterra](https://www.capterra.com/p/88891/EHS-Management-Software/reviews/): **4.4/5 across 85 reviews.** Reviewers are EHS Directors, Safety Technicians, Facility Managers, Lab Technicians and Coordinators across healthcare, pharma, food production, airlines, education, chemicals and semiconductors, at 51–10,000+ employees.

Verbatim complaints, and the pricing ones are the strongest signal in this entire document:
- *"Pricing has also now outweighed the value and benefit of the platform"*
- *"Price. The cost seems to go up year after year"*
- Charged per user with viewing access rather than by storage
- *"can feel overwhelming at first due to the number of features"*
- *"Works in progress... almost have to be an expert to use features"*
- *"reports generated from audits is not good for using in a presentation"*
- *"reports function only provides limited information"*
- *"Certain fields weren't as customizable as would be helpful"*

**Price escalation resentment in a 4.4-rated product is the most exploitable complaint pattern across all four markets.** Customers who like a product but resent its pricing trajectory are the ones who take a call from a cheaper focused alternative.

Caveat: these reviews are of the broad EHS platform, not specifically the authoring product. I did not find review data for authoring tools specifically.

### D. Smallest useful MVP

**GHS classification and SDS generation for one jurisdiction and one product family.** A formulator enters a mixture composition; the tool classifies it, selects H and P statements, and generates a compliant 16-section SDS in that jurisdiction's format. One jurisdiction — probably EU CLP or US HazCom, not both.

Buildable by one engineer over a quarter. Needs substance hazard data as input, which is the main open question — that may be sourceable from public registries but I have not verified licensing terms for commercial redistribution.

### E. Liability / consequence

**Extremely high — the highest of the four.** A wrong classification means a chemical ships with a document that understates its hazard. Downstream: a worker handles it without the right controls, an emergency responder uses the wrong procedure, or a regulator finds a non-compliant SDS in the field. This is product-safety liability with physical consequences.

**This is the same category of risk you ruled out on day one of this conversation.** If that constraint still holds, this market is disqualified on that alone, regardless of its other merits.

### F. Customer acquisition

**Async: doubtful at the price point that matters.** SDS Manager offers 30-day trials without a credit card on management tiers, so the category tolerates self-serve at the low end. The $1,499–$9,299/yr authoring tiers are more consultative, and enterprise is quote-only. Buyers search — regulatory-change content drives traffic in EHS reliably.

### G. Trust required

**High.** An EHS manager putting their name to a classification produced by unknown software is taking a professional risk. Expect requests for validation against known-good examples, and possibly for evidence of professional indemnity insurance.

### H. Competitive gaps

1. **Price escalation on incumbent platforms** — strongly evidenced, and genuinely exploitable: a focused authoring tool at a stable price is a real pitch to someone whose EHS suite bill rises annually.
2. **Feature bloat / expert-only UX** — evidenced (*"almost have to be an expert to use features"*). Exploitable by a narrow product.
3. **Poor reporting output** — evidenced twice. Exploitable but minor.
4. **Small formulators underserved** — inferred from the pricing ladder, not directly evidenced. A company producing 20 SDSs doesn't need a platform. Plausible but unverified.

### I. Hypothetical first customer — hypothetical

A specialty chemical blender, cleaning-products manufacturer or cosmetics formulator with 20–200 SKUs and no in-house regulatory specialist, currently paying a consultant per SDS or wrestling with a platform priced for a much larger company. Buyer is a **quality or regulatory manager**, or the technical director in a small firm. Established price band $1,499–$9,299/yr. Whether they'd trust a new vendor with classification is exactly the open question.

### J. Strongest argument against

**It reintroduces the liability you started this conversation by ruling out, and it's the steepest learning curve of the four.** You opened by saying you didn't want deep liability exposure and then removed safety-related work entirely. Chemical hazard classification is safety-critical work by any reasonable definition — different industry, same category of consequence.

---

# 4. DOT COMPLIANCE FOR OWNER-OPERATORS / SMALL FLEETS

### A. Domain learning

1. **FMCSRs** — the Federal Motor Carrier Safety Regulations, 49 CFR Parts 350–399
2. **Driver Qualification File** (Part 391) — exactly what must be in it and for how long
3. MVR pulls, annual review of driving record, and the annual certification
4. **DOT medical certification** and the National Registry of Certified Medical Examiners
5. **Drug and alcohol testing** (Part 382): pre-employment, random, post-accident, reasonable suspicion, return-to-duty
6. **Random testing consortia** and the C/TPA role
7. **FMCSA Clearinghouse** — queries, annual limited queries, consent
8. **Hours of Service** and ELD rules
9. **CSA / BASIC scores** and how violations aggregate
10. **UCR** (Unified Carrier Registration) annual filing
11. **MCS-150** biennial update
12. **BOC-3** process agent filing
13. **IFTA** and IRP for interstate fuel and registration
14. Vehicle maintenance files and annual inspections (Part 396)
15. New Entrant Safety Audit — what a new carrier faces in its first 18 months
16. Out-of-service criteria and what triggers them

**Time to MVP competence:** 8–12 weeks for the document and filing side. Faster than SDS or COI because the requirements are enumerated rather than judgement-based — Part 391 is a checklist, not a calculation.

**Common newcomer mistakes:** conflating the document-management piece with the consortium piece (they have completely different legal requirements); underestimating Clearinghouse query mechanics; assuming a carrier's obligations are uniform when intrastate-only carriers follow different rules.

### B. Entry barriers

Two distinct barriers, and separating them is the whole analysis:

**Document/filing software:** barrier is knowledge only. No licence required. Fully solo-overcomable.

**Drug and alcohol testing consortium:** requires operating as or partnering with a **Consortium/Third-Party Administrator**, plus relationships with SAMHSA-certified labs, certified collection sites, and a Medical Review Officer. **This is a licensing-and-operations business, not a software business** — and your own kill rules exclude it.

The trap is that the market bundles them. [TenFour's comparison](https://www.tenfourcompliance.com/compare) shows the complete offers include consortium; a software-only entrant competes against bundles.

### C. Incumbent weaknesses — strongest of the four by a wide margin

[Foley on Trustpilot](https://www.trustpilot.com/review/foleyservices.com): **TrustScore 2.8/5 across 1,156 reviews.**

That number, set against myCOI at 4.7 (47 reviews) and VelocityEHS at 4.4 (85 reviews), is the sharpest competitive signal in this document. Verbatim:
- *"Dashboard is impossible to use"*
- *"The Dash Site is still extremely confusing and not easy to navigate"*
- *"requires hours of your time to use a service that is supposed to save you"*
- *"they don't do what they said they would"*
- *"internal don't communicate with each other"*
- *"$1,000 for something I completed absolutely free of charge"* — up-charging for free filings
- *"Unfair Sales practices"*; use of *"scare tactics to pressure people into paying"*

Reviewers are owner-operators, fleet managers and small trucking employees. Positive reviews consistently praise named individual staff rather than the product — which is what it looks like when service quality depends on who answers the phone.

Also from the pricing comparison: FleetDrive 360 advertises *"$5 per driver per month"* but reportedly requires *"$831 of add-ons"* to reach compliance parity — evidence of pricing opacity as an industry norm.

### D. Smallest useful MVP

**Driver qualification file management for fleets of 1–10 trucks.** Store the required Part 391 documents, track expiry on medical cards, MVRs, licences and annual reviews, generate an audit-ready packet, and send reminders. **No consortium, no Clearinghouse queries, no testing** — partner or refer for those.

Buildable by one engineer. No dataset. No licence. This is the narrowest, most tractable MVP of the four.

### E. Liability / consequence

**Moderate.** If the software misses an expiring medical card, the carrier runs a driver who isn't qualified — an out-of-service violation, a CSA score hit, fines. Serious for the carrier, but the carrier holds the legal obligation and the failure mode is a compliance violation rather than an injury. Lower than COI, much lower than SDS.

### F. Customer acquisition

**Async: strongest of the four, and it's verified rather than inferred.** 14 of 16 vendors publish self-serve pricing. Buyers evidently buy without a call. Comparison content is dense (TenFour, SafeRoad, FleetCollect, FileFlo, Vertical Identity all publish competitive comparisons), meaning buyers search and self-educate.

Channels: SEO on FMCSA-requirement queries; trucking forums (TruckersReport has active threads on exactly these vendors); OOIDA and state trucking associations; YouTube, where owner-operator content is enormous.

### G. Trust required

**Low-to-medium — the lowest of the four.** An owner-operator is a small-business buyer spending ~$100/month, not an institution. They already distrust the incumbents (2.8/5 across 1,156 reviews). They buy from comparison pages. The trust bar is "does this look competent and is the price honest," which a new vendor can clear.

**Trust calibration across the four, for reference:**
- **Low:** owner-operator buying $99/month DQF software after reading a comparison page
- **Medium:** contractor office manager buying certified payroll software they'll verify before signing
- **High:** risk manager handing vendor insurance compliance to an unknown vendor; EHS manager signing off classifications from unknown software

### H. Competitive gaps

1. **Incumbent UX is genuinely bad and customers say so, repeatedly, at scale.** 1,156 reviews at 2.8 is not an anomaly. **Commercially exploitable** — this is the only gap in this document backed by a large unhappy sample.
2. **Pricing opacity** — evidenced by the $5/driver-plus-$831-of-add-ons pattern. Exploitable: transparent all-in pricing is a positioning others have already found (TenFour), which both proves and crowds it.
3. **Aggressive sales practices creating distrust** — evidenced. Exploitable by a self-serve product with no salesperson.
4. **Service quality dependent on individual staff** — evidenced by positive reviews naming people rather than product. Exploitable by software that doesn't depend on who answers.
5. **The software-only wedge** — DQF management without consortium. Exploitable but structurally disadvantaged against bundles.

### I. Hypothetical first customer — hypothetical

An owner-operator or 3-truck fleet, one to three years into their authority, past the New Entrant audit. Buyer is the **owner**, often the driver, sometimes their spouse doing the paperwork. Today they use Foley or a spreadsheet plus a separate consortium membership. Established price band $1,188–$1,589/yr all-in; DQF-software-only would sit lower. They might switch because they dislike their current provider — which, unusually, I do have evidence for in the aggregate, though not for any individual.

### J. Strongest argument against

**Price convergence means you'd compete on customer acquisition cost, not product, and the best offers include a licensed service you can't provide.** Nine of sixteen vendors sit between $1,188 and $1,589. When a market's prices converge that tightly, the product is a commodity and the winner is whoever acquires customers most cheaply — which favours incumbents with SEO history and budget. Meanwhile the complete offers bundle the consortium, so your software-only product is structurally a partial solution. Also: at ~$1,200/yr you need 150–200 customers for a $200k business, which is the constraint-5 trade in its starkest form.

---

# Summary table

| | **Certified payroll** | **COI tracking** | **SDS authoring** | **DOT compliance (small fleets)** |
|---|---|---|---|---|
| **Domain difficulty** | Moderate — rules published, state variants are the work; 8–12 weeks | Moderate — forms standardised, judgement subtle; 6–10 weeks | Hardest — applied chemistry logic; 12–16 weeks | Lowest — enumerated checklists; 8–12 weeks |
| **Entry barrier** | Knowledge only. No wall. | Knowledge + buyer conservatism | Domain depth + input data + liability | Knowledge for software; **licensing wall (C/TPA) for consortium** |
| **Liability** | Moderate-to-high — false federal certification, back wages, debarment | **High** — uninsured sub on site; your report becomes evidence | **Extremely high** — understated chemical hazard, physical harm | **Moderate** — out-of-service violation, CSA hit, fines |
| **MVP difficulty** | Low-moderate — one state, one form, from payroll export | Moderate — ACORD parsing + requirements rules engine | High — classification engine + hazard data sourcing unverified | **Lowest** — Part 391 document tracking + expiry + audit packet |
| **Trust required** | Medium — buyer verifies before signing | **High** — professional sceptic, institutional purchase | **High** — EHS manager stakes their name on it | **Low-to-medium** — small-business buyer, already distrusts incumbents |
| **Async acquisition** | Plausible — dense comparison content, ADP Marketplace accepts the category | **Partial** — low tier self-serve, money tier demo-gated | **Doubtful** at the tiers that matter | **Verified** — 14 of 16 vendors publish self-serve pricing |
| **Existing spend** | Software $49–300/mo; managed $1,000–5,000/mo + $15–50/report | $800–$50,000/yr; manual alternative documented at $40–60k/yr | $199/SDS; $1,499–$9,299/yr authoring | $1,188–$7,364/yr, 16 vendors priced |
| **Main incumbent weakness** | **Unknown — no review data obtained.** Evidence gap. | Onboarding friction, filtering, insurance jargon — but 4.7/5 overall | **Price escalation resentment at 4.4/5** — "cost seems to go up year after year" | **2.8/5 across 1,156 reviews** — unusable dashboard, opaque billing, sales tactics |
| **Biggest trap** | Foreign domain, zero credibility, and no verified read on competitors | Seventh entrant against liked, funded incumbents; highest-consequence output | Reintroduces the safety liability you ruled out on day one | Commoditised pricing; best offers need a licence you can't hold |

---

## Two things worth stating plainly

**The evidence is uneven across the four.** DOT compliance has by far the best-evidenced competitive gap — 1,156 reviews at 2.8 is a real, large, documented sample. Certified payroll has the worst: I could not obtain any incumbent review data at all, and you should not treat "no complaints found" as "no complaints exist." Those two facts are not symmetric and shouldn't be weighted as if they were.

**Two of the four collide with constraints you set earlier in this conversation.** SDS authoring is safety-critical work by any reasonable reading — different industry, same consequence class as the DO-178C work you left. COI tracking carries the "your report becomes evidence" exposure you rejected when you killed the SBOM tool. Whether those earlier constraints still bind is your call, but they were stated as hard constraints and it would be wrong of me to present these four as if that weren't relevant.
