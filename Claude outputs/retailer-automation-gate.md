# GATE: Can retailer deduction disputes be automated legitimately?
**16 September 2026 · Technical and terms-of-service gate**

**Gate result: one retailer passes, one fails, one is unknown.** The gate does not close.

**But the gate surfaced a separate problem that is not about terms of service at all, and it is more dangerous than the ToS question.** It is in §4. Read that before anything else.

**Source limitation, stated up front:** Retail Link, Vendor Central and Partners Online all sit behind supplier logins I do not have. I could read Walmart's public supplier developer portal directly. I could **not** read Amazon's official SP-API documentation — `developer-docs.amazon.com` redirected repeatedly to a malformed domain (`developer-docs.amazon`, no TLD) on every attempt. Everything about portal workflows and bot policy comes from supplier-education sources (SPS Commerce / SupplierWiki, iNymbus), which I treat as evidence of *what exists*, never as a substitute for the retailer's own terms.

---

# 1. WALMART — Retail Link / APDP

### A. Official access — partial, and better than expected
Walmart runs a public supplier developer portal at **developer.walmart.com/suppliers**. Two APIs released for 1P suppliers:
- **Invoices & Payments API** — retrieves paid and unpaid invoice details, payment status, check numbers and dates, and **"insights into any adjustments applied to invoices, including reasons and amounts."**
- **Vendor Managed Pricing API**

Access is through Walmart's **On Request Reporting Platform API**, retrieving the `INVOICES` report (Version 1), filterable by invoice status and date range.

**Deduction data is exposed through an official API.** Dispute submission is not. The documentation describes **read operations only** — a POST endpoint used to retrieve data, with no write, submit or modify operations documented.

### B. Automated browser access — officially permitted
This is the decisive finding of the gate.

Walmart **formally permits bot accounts on Retail Link** through token-based authentication. Per [SPS Commerce's reporting on the announcement](https://www.spscommerce.com/community/articles/walmart-announces-supplier-bot-management): Walmart is *"allowing token-based access for new and existing bot accounts on Retail Link"*, using dedicated bot accounts rather than regular user accounts. Effective **7 June 2023**, *"bot automations will not work on individual user accounts"* — suppliers must move to bot accounts with token auth.

The article characterises this as a **policy reversal**: Walmart moved from discouraging bot use to formally permitting and regulating it.

**Caveat I will not soften:** this is a third-party report of Walmart's announcement. The governing document is Walmart's own Retail Link terms and bot-account policy, behind supplier login. **You must read that yourself before writing a line of code.** But the existence of a sanctioned bot-account mechanism is a materially different starting position from "terms are silent."

### C. Portal workflow — documented in detail
APDP launched **27 September 2021** inside Retail Link, replacing Direct Commerce Inc.

- **Retrieval:** by claim number, or by date range — **maximum 10 days per search.** Invoice-based search for deductions that appear on checks without claim numbers.
- **Creation:** Create Dispute → select vendor number → choose claim or invoice method → search → select lines → **mandatory description field** → optional freight carrier, shipping method, dispute amount, load number.
- **Documents:** "Attach Proof" per line; **"Attach Proof for Multi Lines" supports batch upload.** Maximum **30 files per dispute, 25 MB each**. Accepted: PDF, JPG/JPEG, TIF/TIFF, Word, EML, Outlook MSG, XLSX/XLS.
- **MFA/CAPTCHA:** not mentioned in the workflow documentation. Unverified.

The 10-day search window is itself an argument for automation — a supplier reconstructing 12 months of deductions runs 36+ searches by hand.

### D. Existing software
SupplyPike's Deductions Navigator integrates with APDP. iNymbus states its *"automation technology takes care of claim creation, ensuring accuracy and speeding up submissions"* — but **does not specify the mechanism** and does not explicitly claim direct portal submission. On your three-way distinction, iNymbus's own language supports **"software prepares disputes,"** not **"software submits automatically."**

### E. **Classification: YELLOW, at the optimistic end**
Official API for reading deductions. Officially sanctioned automation mechanism for portal access. No official dispute-submission API, and primary terms unread.

---

# 2. AMAZON — Vendor Central

### A. Official access — no dispute API found
SP-API exists and has vendor-facing APIs. **I could not reach Amazon's official SP-API documentation** (see source limitation above). The one official AWS document I could read — [AWS Prescriptive Guidance on SP-API data](https://docs.aws.amazon.com/prescriptive-guidance/latest/strategy-gen-ai-selling-partner-api/data-sp-api.html) — covers only the Reports API and Data Kiosk API, and explicitly states it does **not** address chargebacks, deductions, disputes or shortage claims.

**No API for dispute submission appears in any source I could reach.** I am not asserting one doesn't exist; I am reporting that I could not verify one.

### B. Automated browser access — not established, and the direction is restrictive
I could not verify Vendor Central's supplier terms on automated access. What I can establish is the direction of travel, and it is the wrong way:

- Amazon **limited shortage-claim disputes to one dispute per invoice** through the Vendor Central Dispute Management portal
- Amazon **discontinued the email case creation form** for the "Shortage Claim / Pay On Receipt" issue type
- Re-disputes are permitted only for partially approved or denied disputes, and require waiting for the initial review — **up to 40 days**

([SPS Commerce help documentation on Amazon's re-disputing process](https://help.supplypike.com/en/articles/10113369-amazon-s-new-shortage-re-disputing-process))

A counterparty that removes an existing programmatic-ish channel (email case creation) and caps disputes per invoice is closing the boundary, not opening it.

### C. Portal workflow
Vendor Central Dispute Management portal. One dispute per invoice. No bulk submission documented. No API documented.

### D. Existing software
Multiple vendors market Amazon shortage-claim recovery. None I found documents direct automated submission.

### E. **Classification: RED**
No verifiable API, no verifiable permission, and demonstrable restriction of existing channels. I would not build against this boundary on current evidence.

---

# 3. TARGET — Partners Online / Synergy

### A. Official access — none found
Per [SPS Commerce's Synergy guide](https://www.spscommerce.com/community/learn/targets-synergy-101): **"No native API is mentioned."** Deductions surface in the Accounts Payable Domestic app; disputes are filed in Synergy.

### B. Automated browser access — unverified
Partners Online terms are behind partner login. Not established either way.

### C. Portal workflow — well documented
Synergy → Create New Case → select "Dispute" → enter chargeback number (**system auto-populates deduction type**, e.g. A0030) → choose full or partial amount → written explanation → attach proof documents → Submit. Status then tracked through **New → Awaiting Info → In Progress → Resolved → Closed**.

Deadlines: 18 months for standard deductions; compliance deductions have 2 weeks to request exemption and 90 days to dispute; Target's SLA is 30 days, averaging ~26.

### D. Existing software — closest thing to a direct answer
SupplyPike *"integrates with Partner Online through document scraping and EDI data aggregation, automatically pulling proof documents and creating pre-populated cases within Synergy."*

Read that precisely: **pre-populated cases**, not submitted cases. Even the most automated vendor described in the material stops at preparation. And this is a third-party description, not Target's or SupplyPike's own terms.

### E. **Classification: YELLOW**, technically — but see §4, which matters more.

---

# 4. THE FINDING THAT SHOULD CONCERN YOU MOST

This is not a terms-of-service problem. It is a problem with the premise.

You set a filter: *"If a competent human performs this correctly, is the correct action mostly determined by rules/checklists rather than persuasion, negotiation, or discretionary judgement?"* — and said to kill on persuasion.

The Target evidence answers that question badly:

- Average first-attempt approval rate is **"30 to 40%"**
- Outcomes improve through **persistent resubmission**, because *"cases may be reviewed by different teams with variable criteria"*
- There is *"no penalty for disputing"* until roughly **six or seven attempts on an identical case**
- The quality of the written explanation matters materially: *"If you can guide them in your explanation, Hey, make sure to look at page two of the b o l, the third row, right? That level of detail can be helpful."*
- And Target **explicitly discourages bulk submission**: *"Target would prefer you to do them individually. That way they can pick and choose what they approve."* Bulk submissions *"may result in denials requiring individual resubmission."*

A counterparty where the same case gets different answers from different reviewers, where success comes from resubmitting six times, and where the retailer actively prefers you not to batch — **is not applying a rules engine.** It is exercising discretion.

That places retail deductions closer to the contingency-priced categories from the previous pass (chargebacks, FBA reimbursement, suspension appeals) than to the subscription-priced ones (sales tax, lien notices). Which is consistent with what the market actually does: **25–35% contingency is the industry norm.** The pricing model was telling you this before the gate did.

It also explains ClearChain. They charge $5,000/month for a *human operator* not because they lack engineers, but plausibly because the work rewards a person who knows which A0176 auto-chargebacks are worth a fourth attempt.

---

# 5. Prototype feasibility — Walmart only

If you proceed, Walmart is the only boundary with a sanctioned automation path.

| Stage | Mechanism | Automatable? |
|---|---|---|
| Ingest deductions | **Official Invoices & Payments API** (`INVOICES` report) — adjustments with reasons and amounts | **Yes — officially** |
| Match to PO / ASN / invoice / POD | Supplier's own ERP and 3PL data | Yes |
| Classify reason code | Lookup table | Yes |
| Determine validity | Rules over documentation | Yes, mostly |
| Assemble evidence packet | PDF/image assembly within 30-file, 25MB limits | Yes |
| **Submit dispute in APDP** | **Bot account with token auth — Walmart-sanctioned, no API** | **Probably — this is the step to prototype** |
| Track status | Portal polling via the same bot account | Probably |
| Handle "awaiting info" and denials | Judgement, re-argument, resubmission decisions | **No — human** |

**The step that remains human-only is the last one**, and §4 says it is larger than it looks.

**The prototype that settles this is narrow:** register a Retail Link bot account under Walmart's token programme, pull deductions through the official Invoices API, and attempt one automated APDP submission end to end. Everything upstream is conventional software you already know how to write. The entire risk sits in that one step, and it is answerable in days, not weeks — but only with a real supplier's Retail Link account, which you do not have. **That is the actual blocker: you need a design partner before you can run the test.**

---

# 6. GATE VERDICT

> **Is there a credible path to Model B — software performs the retailer boundary crossing and humans only handle exceptions?**

| Retailer | Verdict | Evidence |
|---|---|---|
| **Walmart Retail Link** | **YES — qualified** | Official read API exposing deduction adjustments; officially sanctioned bot accounts with token auth since 7 June 2023; APDP workflow supports batch document attachment. No submission API; primary terms unread. |
| **Amazon Vendor Central** | **NO** | No verifiable dispute API; no verifiable permission for automation; Amazon has capped disputes at one per invoice and removed the email case channel. Boundary is closing. |
| **Target Partners Online** | **UNKNOWN** | No native API. Terms unverified. Third parties reach "pre-populated cases," not submitted ones. Target explicitly prefers individual over bulk submission. |

**The gate does not close — Walmart passes.** One retailer has a legitimate, officially sanctioned automation path, and that is enough to keep the boundary alive on ToS and technical grounds.

**But I am not going to tell you the premise survived intact, because it didn't.** The gate was designed to test permission and feasibility. It passed on Walmart and failed on Amazon. What it also produced, unasked, is evidence that the counterparty exercises discretion — 30–40% first-pass approval, different answers from different reviewers, value in the sixth resubmission, and an explicit retailer preference against batching. Your own deterministic-work filter is the one this boundary is now failing, and that filter exists because you have been burned three times by markets where the work turned out to be judgement rather than rules.

Two questions now sit ahead of any code, and neither is technical:

1. **Is the Walmart discretion profile different from Target's?** Target's numbers are documented; Walmart's are not. If Walmart's APDP approves clean, well-documented shortage disputes at a high and consistent rate, the deterministic thesis holds there and Walmart alone is a viable boundary. If Walmart behaves like Target, the whole category is a contingency service with software inside.
2. **Can you get a real supplier's Retail Link access to run the submission test?** Without it, the one step that matters cannot be prototyped at all.
