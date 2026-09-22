# FINAL KILL TEST — Walmart APDP deduction software
**16 September 2026**

**Verdict: SURVIVES.** Walmart is measurably more deterministic than Target. One step remains unproven and it is named at the end.

**Evidence labelling used throughout:** VERIFIED = read from an official retailer source. THIRD-PARTY = supplier-education or vendor source. INFERENCE = my reasoning. MISSING = could not obtain.

---

# 1. Walmart APDP outcome data

## The number the whole thesis rests on

**THIRD-PARTY** — [SPS Commerce / SupplierWiki, "Redisputing Walmart AP Deductions"](https://www.spscommerce.com/community/articles/redisputing-walmart-ap-deductions):

| Attempt | Success rate |
|---|---|
| **First dispute** | **74% win rate** |
| Attempts 2–5 | >12% each |
| 6+ attempts | Substantially lower |
| Overall redispute success | ~20–30% |

Walmart permits multiple redisputes per claim. Redisputing covers disputes that were "canceled, denied, or pending supplier action." What suppliers change between attempts: additional documentation (BOL, POD) and explanations addressing Walmart's stated feedback.

**MISSING:** the article does not address whether different reviewers produce different outcomes on identical cases. That was the smoking gun in the Target evidence and I could not find its Walmart equivalent either way.

## What determines success

**THIRD-PARTY** — [SPS Commerce, "Best Practices when Disputing a Deduction"](https://help.supplypike.com/en/articles/3449569-best-practices-when-disputing-a-deduction). Three practices, and the second one is the critical finding of this entire test:

1. *"Be sure to include all relevant documentation with your disputes, such as the Purchase Order, Invoice, Shipping Documents, related emails, etc."*
2. **"For initial disputes, auto-populated text typically suffices."** For appeals, write *"1-2 sentences under Dispute Description addressing the Walmart comments (if applicable) and explaining why the claim you received is invalid."*
3. Dispute through APDP first.

**INFERENCE:** if the auto-populated text suffices for initial disputes, and initial disputes win 74% of the time, then **roughly three-quarters of Walmart disputes are won without any human writing anything.** The persuasion requirement attaches only to appeals.

**MISSING:** no denial-reason breakdown by code, no primary Walmart source for any of these rates.

---

# 2. Walmart vs Target — factual comparison

| | **Walmart** | **Target** |
|---|---|---|
| First-attempt approval | **74%** | **30–40%** |
| Explanation required initially | **"Auto-populated text typically suffices"** | Detailed, specific guidance valued: *"make sure to look at page two of the b o l, the third row"* |
| Resubmission behaviour | Permitted; >12% per attempt through attempt 5; declines sharply after 6 | Permitted; value from persistence; no penalty until ~6–7 attempts |
| Reviewer discretion | **No evidence found either way** | **Explicit:** *"cases may be reviewed by different teams with variable criteria"* |
| Documentation requirements | Code-specific and enumerable (see §3) | Chargeback copy, invoice, BOL/POD, delivery receipt, packing slips, PO, emails |
| Bulk submission | APDP supports **"Attach Proof for Multi Lines"** batch upload | **Discouraged:** *"Target would prefer you to do them individually"* |
| Dispute window | 12 months of history auditable | 18 months standard; 90 days compliance |

**This is not a marginal difference.** Walmart's first-pass win rate is roughly double Target's, initial disputes need no written argument, and the portal supports batch document attachment rather than discouraging batching. On every axis that matters for automation, Walmart behaves more like a rules engine and Target more like a review panel.

---

# 3. Inside ClearChain's Walmart work — the most revealing evidence

**THIRD-PARTY** — [ClearChain's Walmart deduction recovery page](https://useclearchain.com/services/walmart-deduction-recovery). Their process: **Connect** (read-only Retail Link and APDP access, no admin rights, no software installation) → **Audit** (map 12 months of remittance and APDP history by reason code) → **File** (**200–600 disputes per quarter**) → **Fix** (root-cause tracing with the supplier's 3PL or carrier).

Their own description of the work, by code:

| Code | Meaning | ClearChain's stated method |
|---|---|---|
| **22** | Billed but not shipped | *"Disputed with POD and signed BOL"* |
| **24** | Carton shortage | *"Disputed with packing list, BOL, weighed shipment records"* |
| **25** | No merchandise received | *"Re-presented with retailer DC stamp"* |

**This is a lookup table.** Reason code → required document set. Written by the incumbent, on their own sales page, describing what their $5,000/month human operator does.

On OTIF they say they *"dispute the disputable ones (carrier exceptions, retailer receiving errors, missed dock appointments) and trace the rest back to root cause"* — also a classification rule, not a negotiation.

**Their language emphasises systematic documentation and root-cause analysis. It does not describe persuasive advocacy, retailer relationships, negotiation, or undisclosed retailer knowledge.** They claim a 94% career chargeback win rate and $5M+ recovered or protected — unverified vendor claims, treat as marketing.

**INFERENCE, and it cuts both ways:** 200–600 disputes per quarter is 2–7 per working day. That is not a high-volume labour operation. The $5,000/month is therefore not buying many hours — it is buying knowing which document proves which code, and the confidence to file 600 of them. **That is exactly the knowledge that encodes into software, and it is also why the price may not survive automation.**

---

# 4. Other Walmart deduction providers — what they sell

| Provider | Value proposition emphasis | Classification |
|---|---|---|
| **ClearChain** | Code→document mapping, 12-month audit, volume filing, root cause | **A — data processing and evidence assembly** |
| **SupplyPike / SPS Commerce** | Software app inside Retail Link, "Deductions Navigator", batch document attachment | **A** |
| **iNymbus** | *"our automation technology takes care of claim creation"* — mechanism unspecified, does not claim direct submission | **A, with an undisclosed manual step** |
| **Vendormint, OverDeduct, Glimpse, Woodridge, Accu-Track** | Contingency recovery, 25–35% | **C — both**, insufficiently documented to separate |

**MISSING:** I found no Walmart-focused provider whose marketing leads with "recovery experts", "negotiation", "retailer relationships" or "dispute strategy" in the way the dental credentialing and PPO fee-negotiation vendors did. That absence is meaningful — those words appear where persuasion is the product, and they are not here.

---

# 5. The 13-step workflow, honestly classified

| # | Step | Classification | Basis |
|---|---|---|---|
| 1 | Ingest deduction | **AUTOMATABLE** | **VERIFIED** — Walmart's official Invoices & Payments API exposes "adjustments applied to invoices, including reasons and amounts" |
| 2 | Identify reason code | **AUTOMATABLE** | Present in the API payload |
| 3 | Match PO | **AUTOMATABLE** | Supplier ERP |
| 4 | Match ASN | **AUTOMATABLE** | EDI 856 |
| 5 | Match invoice | **AUTOMATABLE** | EDI 810 / ERP |
| 6 | Match proof of delivery | **AUTOMATABLE WITH RULES** | **Weakest technical link.** Lives in 3PL/carrier systems of varying quality; signed BOLs often need OCR. Varies per supplier. |
| 7 | Determine validity | **AUTOMATABLE WITH RULES** | ClearChain's own code→document mapping proves the rule structure exists |
| 8 | Assemble evidence | **AUTOMATABLE** | Within APDP's 30-file / 25MB / PDF-JPG-TIF-DOC-XLS limits |
| 9 | Write explanation | **AUTOMATABLE (initial) / HUMAN JUDGMENT (appeal)** | *"For initial disputes, auto-populated text typically suffices"* |
| 10 | **Submit** | **UNPROVEN** | Bot accounts with token auth are sanctioned since 7 Jun 2023, but no source confirms APDP dispute submission via that route |
| 11 | Interpret response | **AUTOMATABLE WITH RULES (status) / HUMAN JUDGMENT (denial reasoning)** | Approved/denied is structured; Walmart's comments are free text |
| 12 | Decide whether/how to resubmit | **HUMAN JUDGMENT** | Where the 20–30% redispute success lives |
| 13 | Close and reconcile recovery | **AUTOMATABLE** | Remittance matching |

### Realistic full-automation estimate

**65–75% of cases could complete end-to-end without human intervention** — the 74% that win on first attempt, adjusted down for POD-retrieval failures and validly-denied claims that software should correctly abandon, adjusted up slightly because correctly *not* disputing is also a rule.

I am not inflating this. It rests directly on the 74% first-pass figure and falls apart if that figure is wrong. **Steps 11 and 12 are irreducibly human** and they govern roughly a quarter of cases.

---

# 6. Model A or Model B?

**Model B, conditionally.**

The test is whether humans *regularly* decide, argue, resubmit or negotiate. On the evidence:
- Three-quarters of cases are won on documentation alone, with system-generated text
- The validity determination is a published code→document mapping
- No provider markets negotiation or relationships
- The human concentrates in the redispute tail — genuinely the exceptional case

**What would make it Model A instead:** if POD retrieval turns out to require manual gathering for most suppliers, step 6 becomes a per-customer human task and the economics collapse. That is the quiet risk and it is supplier-specific rather than Walmart-specific.

---

# 7. Kill test answers

**Q1 — Credible evidence Walmart is substantially more deterministic than Target?**
**YES.** 74% vs 30–40% first-attempt approval. Auto-populated text sufficient vs detailed argument valued. Batch attachment supported vs bulk discouraged. Three independent third-party documents, consistent. No primary Walmart source — the weakness of the answer, not of the direction.

**Q2 — Can software reasonably predict whether a deduction should be disputed?**
**YES**, for the dominant codes. The question reduces to "do I hold the document set this code requires," and ClearChain published that mapping for codes 22, 24 and 25 themselves.

**Q3 — Can it generate a successful dispute without human-written persuasion in most normal cases?**
**YES for initial disputes** — explicitly stated that auto-populated text typically suffices, and those win 74% of the time. **NO for appeals.**

**Q4 — Can it submit through Walmart's sanctioned bot mechanism?**
**UNKNOWN.** Bot accounts with token authentication are officially sanctioned (effective 7 June 2023, bot automations no longer work on individual user accounts). **No source confirms anyone submits APDP disputes this way, and I cannot test it.** This is the single unresolved question.

**Q5 — After submission, can software decide what to do next without human interpretation?**
**PARTIALLY.** Status transitions are structured and machine-readable. Walmart's denial comments are free text, and the redispute decision — worth a second attempt at >12%, worth a sixth at much less — is judgement.

**Q6 — Realistic full-automation percentage?**
**65–75%**, contingent on POD retrieval and bot submission.

---

# VERDICT: **SURVIVES**

Walmart does not behave like Target. The difference is large, consistent across three independent sources, and visible in the incumbent's own published method. The human-judgement component is concentrated in the redispute tail rather than spread across every case, which is the definition of Model B.

I am not telling you to build it, and three things should temper this:

**The entire verdict rests on one third-party number.** The 74% first-attempt win rate appears in a single SPS Commerce article. Every conclusion above compounds from it. It is not a Walmart source and I could not corroborate it independently.

**The submission step is completely unproven.** Sanctioned bot accounts exist; nobody documents using them for APDP dispute submission. It is entirely possible the bot programme covers reporting and data extraction but not transactional submission.

**ClearChain's volume undermines the price.** 200–600 disputes a quarter is a few per day. The $5,000/month buys judgement and confidence, not hours — so automating the hours may not let you charge anything close to it.

## The one piece of evidence that resolves this

**Can an APDP dispute — including document attachment and final submission — be completed through a Retail Link bot account using token authentication?**

Nothing else matters until that is answered. Every upstream step is conventional software you can already write, and the 74% figure only pays off if the submission crosses the boundary without a person.

It cannot be answered by more searching. It requires a real supplier's Retail Link credentials and one test submission. **That makes your next task finding one Walmart supplier willing to let you try it — not writing code, and not more research.**
