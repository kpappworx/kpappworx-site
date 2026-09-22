# Failsafe — Commercial Demand Validation (Pass 3)
**15 September 2026 · Does anyone pay to make this problem go away?**

Method: agency pricing pages, published service tiers, Upwork's live job marketplace (n8n and Zapier categories), the n8n community jobs board, UK salary data, plus the Reddit and LinkedIn corpus from passes 1 and 2 re-coded for buying behaviour rather than pain.

---

# A. Commercial demand score: 22 / 100

**Not the problem score. This is the score for "will someone pay for silent-failure detection."**

For context: the *technical problem* scored 48 last pass, and the **adjacent market — automation building with maintenance attached — would score around 65.** Failsafe as specified sits at 22 because three independent commercial tests all came back negative:

**Test 1 — the freelance marketplace.** Upwork has **604 live n8n jobs and 984 live Zapier jobs**. I read 20 of them. **Zero are for monitoring, reliability, QA, or observability.** All twenty are build, integrate, or implement. The one repair job in the sample — *"Urgent: Fix n8n Workflow… currently not working as expected"* — is priced at **$30**. The most liquid, most demand-revealing market for this exact work is paying $1,000–$3,000 to build and $30 to fix.

**Test 2 — the care-plan structure.** Maintenance retainers are real and priced. But every single one I found is attached to builds the provider did. Practical Workflows sells *"Uptime monitoring on every live workflow **we've built for you**."* Nobody sells maintenance for estates they didn't build. **Failsafe proposes exactly that, and I found no precedent for it working.**

**Test 3 — the cost of failure.** Across three research passes, roughly ninety comments and a dozen LinkedIn posts, **not one person stated a dollar cost for a silent failure.** Not one. These same communities quote prices constantly — builds, retainers, salaries, hourly rates. Money language exists here. It is never attached to the cost of a failure. If this cost $50,000, somebody would have said so.

---

# B. Commercial evidence, ranked

Confidence: **High** = published price or live listing I read · **Medium** = credible secondary · **Low** = inference

### 1. Upwork n8n category — 604 live jobs, zero for monitoring
**URL:** https://www.upwork.com/freelance-jobs/n8n/ · **Buyer type:** Mixed SMB/agency
**Evidence:** Sample of 10 live jobs. Build AI workflows ($1,000 fixed), WhatsApp/webhook automation (hourly), GoHighLevel lead-to-booking (hourly), CRM Automation Architect (hourly, 30+ hrs), Notion/Gmail/OpenAI integration ($3,000 fixed), AI voice receptionist ($200), **"Urgent: Fix n8n Workflow" ($30)**, AI automation expert (hourly), "Take Manual Work Off Our Team" (hourly), Lead Systems Architect (hourly).
**Money:** $30–$3,000 · **Behaviour: BUY BUILDS, not monitoring** · **Confidence: High**
**Why it matters:** the single strongest negative signal in the entire research. Open-market demand is unambiguous and it is not for reliability.

### 2. Upwork Zapier category — 984 live jobs, zero for monitoring
**URL:** https://www.upwork.com/freelance-jobs/zapier/
**Evidence:** Sample of 10. CRM Automation Architect, GoHighLevel CRM Manager, PipeDrive setup, GHL implementation, GTM/RevOps Engineer, AI Automation Specialist, Notion integration ($3,000), GoHighLevel expert ($500), Make.com/Airtable/WhatsApp build, Zapier+ClickUp shipment tracking.
**Money:** $500–$3,000 · **Behaviour: BUY BUILDS** · **Confidence: High**
**Why it matters:** independent replication of finding 1 on a different platform with a larger sample. ~1,588 combined live jobs; not one monitoring role visible.

### 3. Goodspeed — ongoing automation team from $10,000/month
**URL:** https://goodspeed.studio/blog/n8n-agency-pricing-what-it-costs-to-work-with-an-n8n-partner · **Seller:** UK n8n partner agency
**Evidence:** Retainer explicitly includes *"Proactive maintenance and incident support"* and *"Monitoring, observability and governance"* — logging, alerts, access control.
**Money: $10,000/month floor** · **Behaviour: HIRE (bundled)** · **Confidence: High**
**Why it matters:** proves monitoring is monetised — as one line inside a $10k/month fractional-team retainer, never standalone.

### 4. LOW/CODE Agency — external retainers $3,600–$24,000/year
**URL:** https://www.lowcode.agency/blog/zapier-maintenance-cost
**Evidence:** *"External retainers cost $3,600-$24,000/year"* versus internal hire at *"$30,000-$60,000/year."* Benchmark: *"A $5,000 build should budget $500-$1,000 per year for maintenance in a stable environment"* — i.e. **10–20% of build cost annually.** Their retainer includes proactive monthly reviews, API change response, defined SLA tiers, documentation and auth management.
**Money: $300–$2,000/month** · **Behaviour: HIRE (retainer)** · **Confidence: High**
**Why it matters:** the maintenance market is real and priced. Also note: **the maintenance budget is anchored to the build price.** No build, no anchor.

### 5. BULDRR — retainers $1,200–$8,000/month
**URL:** https://buldrr.com/n8n-automation-agency-pricing/
**Evidence:** Includes *"Priority error response"*, unlimited queued workflow requests, monthly review, direct Slack line. Monitoring is not broken out as a line item.
**Money: $1,200–$8,000/month** · **Behaviour: HIRE (bundled)** · **Confidence: High**

### 6. Lazar Amanovic — care plan from $150/month, zero replies
**URL:** https://community.n8n.io/t/fixed-price-n8n-builds-monthly-maintenance-care-plan-ai-booking-bots-pipelines-integrations/305823
**Evidence:** Builds $1k–3k; **care plan "from $150/mo"** with *"health checks, fixes included, a short monthly report"* so *"things don't quietly break."* **Replies: 0.**
**Money: $150/month asked, $0 confirmed** · **Confidence: High**
**Why it matters:** this is Failsafe's recurring offer, already on the market, at $150 not $250 — and nobody answered. That is a price ceiling *and* a demand signal.

### 7. Practical Workflows — Automation Care Plan, builds only
**URL:** https://practicalworkflows.co.uk/services/care-plan/ · **Target:** UK accountants, agencies, solicitors, consultants with 3+ live workflows
**Evidence:** *"Uptime monitoring on every live workflow we've built for you"*, monthly written reviews, named consultant, one-business-day response, one small improvement per quarter. Price undisclosed, *"scales with the number of live workflows we're watching."* **No testimonials or named customers on the page.** Notably, it covers **uptime only — no output verification, no silent-failure detection.**
**Behaviour: HIRE (bundled to builds)** · **Confidence: High**
**Why it matters:** the closest real-world analogue to Failsafe, and it (a) only serves its own builds and (b) doesn't even attempt the semantic layer.

### 8. The only hire in the entire corpus
**URL:** https://www.reddit.com/r/automation/comments/1v8n5gq/monthly_make_scenarios_maintenance_and_error/
**Evidence:** u/makeprohacks — *"I run my agency and use make a lot… I do think having someone maintaining my critical automations"* → u/sidmish offers a monthly audit and error-handling service → *"Sent DM"*. sidmish charges *"Monthly fixed rate."*
**Money: undisclosed** · **Behaviour: HIRE** · **Confidence: Medium** (DM outcome unknown)
**Why it matters:** still the only documented hire. One, across ~90 comments and three passes.

### 9. UK employment market — 110 Zapier vacancies, median £105,000
**URL:** https://www.itjobswatch.co.uk/find/Zapier-jobs
**Evidence:** 110 vacancies, 109 permanent. Titles: AI Analyst, Analytics Engineer, GTM Engineer, Head of AI & Automation, Senior Marketing Operations Manager, Solution Architect, Support Engineer. Median £105,000; 25th percentile £51,250.
**Money: £51k–£122k salaries** · **Behaviour: HIRE INTERNALLY** · **Confidence: High**
**Why it matters:** companies with serious automation hire staff. That's the substitute for Failsafe at the top of the market, and it explains LOW/CODE's own comparison — retainer $3.6k–24k/yr vs internal hire $30k–60k/yr.

### 10. US salary band for automation roles
**URL:** https://www.ziprecruiter.com/Jobs/Zapier-Automation
**Evidence:** Zapier automation roles listed at **$91,000–$165,000**.
**Behaviour: HIRE INTERNALLY** · **Confidence: Medium**

### 11–20. Everything else was pain without purchase
Positions 11 through 20 would all be Reddit or LinkedIn users describing silent failures. **Per your instruction, I'm not listing them, because not one connects to money, hiring or outsourcing.** The full pain inventory is in the pass-2 report. Its commercial content is: one DM.

---

# C. Existing businesses selling something adjacent

I found 14 with enough substance to assess, not 20. Padding the list with landing pages would misrepresent the market.

### Clearly real businesses (revenue-generating, priced, operating)
| # | Who | Sells | Price | Recurring | Execution or outcome? | Real? |
|---|---|---|---|---|---|---|
| 1 | **Goodspeed** (UK) | n8n builds + ongoing automation team | Builds $10k+; team from **$10,000/mo** | Yes | Both — names observability | **Tier 2** — n8n-listed partner, published tiers |
| 2 | **LOW/CODE Agency** | Zapier/no-code builds + maintenance retainers | **$3,600–$24,000/yr** | Yes | Execution + health checks | **Tier 2** — detailed costing methodology |
| 3 | **BULDRR** | n8n agency + retainer | **$1,200–$8,000/mo** | Yes | Execution (priority error response) | **Tier 3** |
| 4 | **Practical Workflows** (UK) | Automation Care Plan | Undisclosed, scales per workflow | Yes | **Uptime only** | **Tier 3** — case study link, no testimonials |
| 5 | **MakeAutomation** (Poland) | n8n builds + DevOps | Project bands from $1k | Partly | *"deployment, monitoring, and maintenance"* | **Tier 3** — n8n partner |
| 6 | **DataFix B.V.** (NL) | n8n work, projects and retainer | Undisclosed | Yes | Unstated | **Tier 2** — 5 yrs n8n, 5.0 rating (5 reviews) |
| 7 | **Avanai** | Enterprise AI agents + *"Agent Ops — run, monitor, continuously improve"* | Enterprise | Yes | Outcome-oriented | **Tier 3** — n8n Premium partner |
| 8 | **AOE Group** | n8n engineering incl. observability | Enterprise | Yes | Both | **Tier 2** — 20+ yrs, named clients |
| 9 | **NotiLens** | Silent-failure monitoring SaaS for n8n/Zapier/Make | **$29/mo Pro, $99/mo Team** | Yes | Execution + anomaly | **Tier 3** — real product, no public customers |
| 10 | **Spalato Consulting** | AI Opportunity Audits for agencies | Bands from $1k | No | Advisory | **Tier 3** |

### Probably real, thin evidence
| # | Who | Sells | Price | Notes |
|---|---|---|---|---|
| 11 | **sidmish** (individual) | Monthly audit + error handling for Make | *"Monthly fixed rate"* | One in-thread DM; no site found |
| 12 | **Lazar Amanovic** | n8n builds + care plan | Builds $1k–3k; **care plan from $150/mo** | Posted on n8n jobs board, **0 replies** |
| 13 | **benchtruth.com** | Reliability benchmarking content | n/a | Content/comparison site, discloses monetisation elsewhere |

### Questionable / pre-revenue
| # | Who | Notes |
|---|---|---|
| 14 | **YieldCue** | Outcome-contract monitoring, *"out for testing"*, founder recruiting testers in Reddit threads. **Tier 5 — pre-revenue.** |
| — | kumarshikhardeep1, MoneyWithJJ | Building unnamed monitoring tools. **Tier 5.** |

**Read across this table and one thing is obvious: every Tier 2 business sells builds first. The monitoring is the annuity on the back of the build. The only pure-play monitoring offerings — NotiLens, YieldCue, Lazar's care plan — are Tier 3 or lower with no visible customers.**

---

# D. Every real price found

**One-time / project**
- Upwork n8n builds: **$200, $1,000, $3,000** (live listings)
- Upwork Zapier/GHL builds: **$500, $3,000**
- Upwork repair: **$30** ("Urgent: Fix n8n Workflow")
- Lazar Amanovic builds: **$1,000–$3,000**
- Agency project bands (n8n directory): **$1,000–$5,000** entry, up to **$100,000+**
- Goodspeed minimum project band: **$10,000**

**Monthly**
- Lazar Amanovic care plan: **from $150**
- NotiLens: **$29 Pro / $99 Team** ($24 / $83 annual)
- BULDRR retainer: **$1,200–$8,000**
- LOW/CODE external retainer: **$300–$2,000** (derived)
- Goodspeed ongoing team: **from $10,000**

**Annual**
- LOW/CODE external retainer: **$3,600–$24,000**
- Maintenance benchmark: **10–20% of build cost** ($5,000 build → $500–$1,000/yr)

**Salary**
- UK Zapier roles: median **£105,000**; 25th pct **£51,250**; 10th pct **£31,750**; 110 vacancies
- US Zapier automation roles: **$91,000–$165,000**
- LOW/CODE's stated internal-hire comparison: **$30,000–$60,000/year**

**The gap that matters:** there is a published price for building ($1k–3k), for a full maintenance retainer ($150–$10,000/mo), and for an employee ($30k–165k/yr). **There is no established price for silent-failure detection, because nobody sells it separately.**

---

# E. Build vs buy vs hire — raw counts

Coded from 26 identifiable responses across all three passes where a person described a silent failure **and** what they did about it.

| Response | Count | Share |
|---|---|---|
| **Built their own solution** | **22** | **85%** |
| Hired someone | 1 | 4% |
| Bought a tool | 1 | 4% |
| Ignored / manual only | 2 | 8% |
| Switched platform | 0 | 0% |

The single "bought a tool" is **healthchecks.io on its free tier**, which is arguably DIY with a free dependency. The single hire is makeprohacks.

**85% DIY is the number that decides this.** And it isn't reluctant DIY — several published their solutions as guides, one built it in twenty minutes, several are shipping products from it.

*Caveat: n=26 is small and Reddit self-selects for people who enjoy building. The true DIY rate among all affected parties is probably lower — but the sample is the population Failsafe planned to sell to.*

---

# F. Economic severity

**The most important null result in this research.**

| Band | Examples found |
|---|---|
| $0–50 annoyance | — |
| $50–500 inconvenience | — |
| $500–5,000 business problem | — |
| $5,000+ business problem | — |
| **Cost stated at all** | **0 of ~20 failure stories** |

Qualitative consequences described: 17 days of a client deliverable not happening; six weeks of an AI agent wrong on one in six tasks; three silent loops in a week; a week spent archiving empty files; orders silently bouncing until *"the angry emails roll in"*; 400 broken sends already gone.

Every one of those is a *professional embarrassment* or an *operational annoyance*. Not one is quantified.

**Inference, clearly labelled as inference:** in communities that discuss money constantly and freely, the total absence of a cost figure attached to failures is strong circumstantial evidence that these failures sit in the annoyance-to-inconvenience range for the people describing them. The cost is mostly reputational, and reputational cost is paid in apology, not budget.

---

# G. The buyer

**No clearly demonstrated buyer for silent-failure detection.**

What the evidence *does* demonstrate:

- **Who pays for automation maintenance:** the operating company that commissioned the build.
- **Who sells it to them:** the agency or freelancer that did the build.
- **What the payment is attached to:** the build relationship, not the problem.
- **Who has the pain but doesn't buy:** agencies and practitioners — 85% DIY.
- **Who has budget but is invisible:** operating companies — no public signal in three passes across Reddit, LinkedIn and r/msp.

There is a functioning maintenance market. **Entry to it is gated by having done the build.** Failsafe was designed to enter without that key, and there is no example anywhere in this research of anyone doing so successfully.

---

# H. Business models, ranked by evidence

1. **Productized service attached to your own builds** — every Tier 2 business in section C works this way. Practical Workflows literally scopes it as *"every live workflow we've built for you."* Strongest evidence by a distance.
2. **Managed service / retainer** — real and priced from $150 to $10,000/month. But it is the same model as #1 seen from the revenue side; it still requires the build relationship.
3. **SaaS** — NotiLens exists at $29–99/month with no visible customers, YieldCue is pre-revenue, a free competitor exists, and two more people are building. Priced at a level that cannot support acquisition costs for a solo founder.
4. **White-label agency product** — **no evidence found in either direction.** Untested, and Ahmiii_83's *"can't picture it across thirty"* remains the only hint that demand might exist. Interesting, unproven.
5. **Standalone silent-failure detection for estates you didn't build** — **zero precedent found.** This is what Failsafe is. Not one company, freelancer or job posting anywhere in this research does it.

---

# I. Kill test

Failsafe as specified is already failing three of these. For completeness, the evidence that would justify killing it outright:

1. **No monitoring/reliability jobs in the open marketplace.** ✅ **Already true** — 0 of 20 sampled across ~1,588 live listings.
2. **Every care plan gated behind having done the build.** ✅ **Already true** — all four found.
3. **No stated dollar cost of failure.** ✅ **Already true** — 0 of ~20 stories.
4. **DIY rate above 70%.** ✅ **Already true** — 85%.
5. Three free read-only scans find no real silent failures. *Untested.*
6. Someone already selling the exact recurring offer gets no takers. ✅ **Already true** — Lazar Amanovic, $150/mo, 0 replies.

**Four of six kill criteria are already met on desk research alone.**

---

# J. Final decision: **CHANGE PROBLEM**

Not kill — there is real money in this market, and you found it. But it is not where Failsafe was pointed.

**What the evidence actually says:** people pay $1,000–$3,000 to have automations built, and then $150–$10,000 a month to have someone keep them alive. That market is functioning, priced, and has multiple real businesses in it. Monitoring is a *feature* of that relationship, sold by the person who did the build, and nobody buys it on its own. The problem you picked — detecting silent failures for estates you didn't build — has 85% DIY response, zero demand across 1,588 live job listings, zero documented dollar cost, and no precedent of anyone selling it successfully.

**Concretely, the change:** sell automation builds, with a care plan attached from day one. The build is how you get paid now and how you earn the right to the retainer. Your safety-critical background stops being the product and becomes the reason a client picks you over the other 5,000 people on Upwork — you are the one who builds automations that fail loudly, with the assertions and canaries in from the start rather than bolted on after something breaks. Silent-failure detection doesn't disappear; it stops being the thing you sell and becomes the thing that makes your builds better than everyone else's.

**What this costs you:** it's a more crowded market, the differentiation is softer, and it's your hours. I'm not going to pretend that's the business you wanted three days ago.

**What it buys you:** a market that demonstrably pays, with published prices, live demand you can see today, and a natural path to the recurring revenue that was always the actual goal.

**One thing worth naming, since it's now three for three.** The SBOM tool, Quarterdeck, and Failsafe all failed the same test in the same way: a real problem whose sufferers prefer to own the solution themselves. Before the next idea, the cheapest possible filter is one question — **is anyone already paying someone else to make this go away?** If you can't find a price, a job posting, or a contract within an hour, stop there. That single question would have ended Failsafe on day one instead of day four, and it would have saved Quarterdeck's three hundred touches.
