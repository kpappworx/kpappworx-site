# New Counterparty Boundary — Post-Walmart
**16 September 2026 · Retailers excluded entirely**

**One candidate survives, conditionally. One is killed. I am not padding to three.**

The surviving candidate has a problem I have not seen in any previous round, and it is the opposite of the usual one: **the software has already advanced further than expected**, which may leave too little last mile to build on. That is the uncertainty, and it is stated precisely at the end.

---

# SURVIVING CANDIDATE — Insurance carrier premium billing reconciliation

## A–C. Who pays, for what, at what price

**Buyer:** HR or finance lead at an employer; also benefits brokers, PEOs, ASOs, MEWA trusts and staffing companies. Non-technical.

**What they pay humans to do:** a **three-way match** between the carrier invoice (who the carrier thinks is covered, at what tier and rate), the HRIS enrollment record (who your system says is enrolled, with effective dates), and the payroll deduction register (what was actually withheld). ([Praisidio](https://www.praisidio.com/benefits-reconciliation/))

Described as **"a multi-day job per carrier per month"** when done in spreadsheets.

**Published price — VERIFIED:** [Tabulera](https://tabulera.com/technology/benefits-reconciliation) Starter plan, under 500 employees per EIN: **$399/month, or $319/month billed annually — $3,828–$4,788/year.** Enterprise and Pro are PEPM with volume tiers. 30-day free trial. Comfortably above your $1,000/year floor.

**Cost of the problem:** *"Industry data suggests about 5% of premium spend is tied to billing errors"* ([NIS Benefits](https://blog.nisbenefits.com/employers-guide-to-monthly-reconciliation)). A NAPEO PEO Insider article reports that in legal cases *"the average premium discrepancy was more than $7 Per Employee Per Month (PEPM) and ranged from $0.34 to $19 PEPM."*

## D. Frequency
**Monthly, per carrier.** An employer with medical, dental, vision, life and disability carriers faces five reconciliations every month, forever.

## E–G. Software penetration and what remains manual

Established vendors: Tabulera, AdminaHealth, Beneration, Benefitfocus, Employee Navigator, Praisidio.

**This is the critical number, and it is the vendor's own claim: Tabulera "auto-cleared 89%" of records**, filtering out employees with no discrepancy. It automates matching across systems, exception categorisation, simple case resolution such as rounding, and reporting.

**What remains manual, per Tabulera's own description:**
1. Reviewing the **~11% of records** with discrepancies and deciding the adjustment
2. **Carrier outreach — Tabulera "does not handle carrier outreach. Users manage follow-ups independently."**

## H. Why software hasn't eliminated it
The discrepancies are structural, not computational: terminations that reached payroll but not the carrier, new hires enrolled after the carrier's cutoff, tier changes lagging between systems, retroactive credits arriving months later **without line-level detail**, missed deductions from unpaid leave. Resolving each one requires telling the carrier what is wrong and confirming the correction lands on the next invoice.

## I–J. The counterparty, and whether it exercises discretion

**Counterparty:** the insurance carrier's billing department.

**Discretion: low — and this is the single best structural feature of this candidate.** Unlike a retailer deciding whether to approve a dispute, a carrier billing correction is a **factual matter**. If the employee terminated on 14 August, the carrier owes a credit. There is no approval panel, no variable reviewer criteria, no value in resubmitting six times. This passes the deterministic filter that Target failed.

## K–L. Can software cross the boundary?
The boundary crossing is described as low-friction: *"Many issues can be resolved with a quick call or email. After a correction is submitted, verify it appears on the next invoice to confirm the issue is closed."*

Email is automatable. Verification against next month's invoice is automatable — it is the same three-way match run again. **No portal fight, no bot-account policy, no MFA problem.** That is a materially easier boundary than anything in the retailer thread.

**But the same fact cuts the other way: an email loop is also trivially easy for Tabulera to add.**

## M–Q. Judgement, liability, distribution, price

**Human judgement remaining:** classifying the 11% — is this a termination in transit, a genuine carrier error, or an employer data problem? Some of that is rules, some is knowing the employer's situation.

**Liability: low-to-moderate, with a flag.** Errors mean money moves incorrectly, recoverable. **But enrolment data for group health plans is PII and may be HIPAA-adjacent.** This is administrative billing, not clinical — but it is closer to your healthcare exclusion than I would like, and you should decide whether it crosses your line.

**Async acquisition: yes, demonstrated.** Tabulera runs a 30-day free trial and is listed on the **PrismHR marketplace** — proof that HR-tech marketplaces distribute this category without sales calls.

**Solo founder:** the matching engine is conventional software. Competing with a vendor already at 89% is the hard part.

**Likely software-only price:** $300–400/month is established. The question is what a *narrower* product could charge.

---

# KILLED — CAM / lease reconciliation audit

Commercial tenants pay auditors to check annual CAM reconciliation statements from landlords. Counterparty is a landlord, not a retailer or government. Recurring annually.

**Killed on two counts.** First, **no published pricing anywhere I looked** — [LevelShift's CAM audit service page](https://levelshift.com/services/business-process-services/cam-reconciliation-and-cam-audit-services) publishes no fee structure and directs enquiries to contact them, and the wider category is dominated by contingency-fee lease auditors and law firms. Fails your verifiable-spend standard. Second, the outcome depends on **negotiating lease-term interpretation with a landlord** — persuasion, which your filter kills outright.

---

# Why only one

Applying your exclusions removed most of what the previous rounds found. Retailer deductions, Amazon FBA, healthcare credentialing, sales tax and entity filings (government), lien filing (legal-adjacent), certified payroll and DOT (government) are all now out of bounds. What remains are private-sector counterparties with billing relationships — utilities, carriers, telecoms, landlords, insurers — and of those, most price on contingency, which signals the discretion you are trying to avoid.

Insurance carrier billing is the one I found where the counterparty's decision is **factual rather than discretionary**. That is rare and it is why it survived.

---

# THE NEW FINAL GATE

| # | Test | Benefits reconciliation |
|---|---|---|
| 1 | Real money | **PASS** — $3,828–$4,788/yr published |
| 2 | Recurring frequency | **PASS** — monthly, per carrier |
| 3 | Deterministic workflow | **PASS** — factual corrections, no approval discretion |
| 4 | Software penetration | **CONCERN** — vendor claims 89% auto-clear |
| 5 | Residual human work | **UNRESOLVED** — 11% of records plus all carrier outreach |
| 6 | External-boundary difficulty | **PASS** — email, not portals |
| 7 | Low liability | **PASS, with flag** — PII and HIPAA-adjacency |
| 8 | Async acquisition | **PASS** — free trial, PrismHR marketplace |
| 9 | Solo-founder feasibility | **CONDITIONAL** — depends on test 5 |
| 10 | >$1,000/year | **PASS** |

**Eight pass, one concern, one unresolved.** It does not pass cleanly and I am not going to present it as if it does.

---

# The single research question

Everything now turns on one number, and it is not the 89%.

> **Of the discrepancies that do not auto-clear, what fraction are resolved by a single structured correction request to the carrier — with no investigation, no judgement about the employer's situation, and no follow-up beyond verifying the credit appears next month?**

If that fraction is high — if most of the 11% are "terminated on this date, please credit two months" — then the remaining work is a structured email loop with verification, nobody currently automates it (Tabulera explicitly does not), and there is a software product in the gap.

If that fraction is low — if most of the 11% require someone to work out *why* the employer's own data is wrong before anyone can tell the carrier anything — then the residual work is investigation, not transmission, and this is a service business with software attached. Model A. Kill it.

**How to answer it without building anything:** the people who know are benefits brokers and PEO operations staff, who handle this across many employers every month. The question is answerable in three or four conversations, and it is a question about their workday rather than a sales conversation — which makes it askable in broker communities and on LinkedIn without a pitch.

**One caution before you ask it.** Tabulera's 89% is a marketing figure describing *records*, not *effort*. Eleven per cent of a 500-employee account is roughly 55 records a month per carrier, each potentially needing a carrier email and a verification next cycle. The effort may be far more concentrated in that 11% than the headline suggests — which would be good news for this candidate. That is precisely what the question above is designed to find out, and it is why I have not killed it.
