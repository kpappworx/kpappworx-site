# Failsafe — Day 1 to 7
**One goal: find out if anyone will pay you money for this. Build nothing.**
15 September 2026

---

# PART 0 — Two findings that change the plan

I checked two things before writing this, and both moved the answer.

## Finding 1: The n8n partner directory is not your ICP

I opened https://experts.n8n.io/ and counted. **48 partners total.** The composition:

- **Exxeta** — 1,200 people, ~€135M revenue
- **SVA System Vertrieb Alexander** — 4,000+ employees, 29 offices
- **Deutsche Telekom Geschäftskunden**
- **onepoint**, **Vertica** (150 specialists), **AOE**, **cimt**, **Bitovi**

These are enterprise system integrators. They have their own engineers. They will never buy this. Worse — some already sell it: **Avanai** lists *"Agent Ops — Run, monitor, and continuously improve agents with full lifecycle management."* **AOE** lists observability among its strengths. Those are competitors sitting in the directory I told you to prospect.

Realistically **10–15 of the 48** are your size. That's a seed list, not a channel. My earlier "10 directory contacts per week" was wrong — the whole directory runs dry in one week.

## Finding 2: The software this competes with costs $29/month

NotiLens pricing, which I couldn't get last time: **Pro $29/month. Team $99/month.** ($24 and $83 annually.)

Your $250/month retainer is between 2.5× and 8.6× the price of software that claims to do the monitoring part. **Someone will say "NotiLens is twenty-nine dollars" on a call this week.** You need an answer ready, and the answer can't be about features.

---

# PART 1 — The five challenges

## A. Are agencies the best buyer, or just the loudest Reddit users?

**Partly the latter. This is the weakest assumption in the plan.**

Look at what the evidence actually contains. The agency market is a **barbell**:

- **Top end** (the official directory): 1,200-person consultancies with in-house engineering. Too big. Some already sell monitoring.
- **Bottom end** (Reddit): solo operators. Content-Conference25 disqualified himself in public — *"I can't justify retainers on pure maintenance just yet. I'm not on that level yet."*

The 2–10 person middle you're targeting exists, but it is **thinner than the Reddit noise suggests**, because Reddit over-represents the bottom end — people with time to post are people without enough client work.

Meanwhile the only person in the entire research with a **quantified financial consequence** was not an agency. It was u/Spare-Importance-247, running an order-processing pipeline: *"a string of zero-row hours… the warehouse API changed their date format and everything was just silently bouncing. Without that monitor we would've waited for the angry emails to roll in."* Angry customer emails. Real money. An operating company, not an agency.

**So: do not commit to agencies this week.** Split your first 50 list: **30 agencies, 20 operating companies**. Same message, different framing. Cost of testing both is one afternoon. Cost of being wrong about this for 30 days is the whole month.

## B. Is $250/month realistic, or anchoring?

**Anchoring. I made it up, and the market says otherwise.**

The software anchor is $29–99/month. You cannot charge $250 for "monitoring access" against that.

But there is a real recurring cost that software structurally cannot cover, and the evidence names it precisely. MoneyWithJJ, on why baselines are hard: *"the honest cost: the baseline has to reset on every workflow edit, so anything edited weekly never accumulates one."*

**That is your retainer.** Every time the agency edits a client workflow, the expectations have to be re-set by someone who understands what the workflow is supposed to do. NotiLens can't do that. An LLM can't do that. That's ongoing human judgment, and it's the only honest justification for a monthly fee.

**What to do instead of quoting $250:** don't name a price. Ask. *"If someone kept the expectations current as you edit workflows, and sent you a monthly one-pager per client — what's that worth a month to you?"* You get price discovery instead of a defended number, and their answer is data you don't currently have. Expect to land somewhere in **$100–250**. Treat anything above $150 as a good outcome.

## C. Resell, or absorb into the existing retainer?

**Absorb is the default. Assume it until proven otherwise.**

Content-Conference25 described the agency model as *"You charge for building the project, then you charge for maintenance."* They already have a maintenance line item. That cuts both ways: there's a vehicle to sell through, but there's also an existing bucket to quietly bury your cost inside — and if they absorb it, your price is capped by whatever margin they're willing to surrender, which is small.

Only sidmish showed evidence of reselling, charging a *"Monthly fixed rate."*

**This is question 7 on your qualification list and it should be asked in message three, not on the call.** If the honest answer is "I'd absorb it," you're selling a cost centre and the price ceiling drops hard.

## D. Is silent failure detection differentiated?

**The detection: no. The expectation-setting: yes.**

NotiLens does webhook-driven execution monitoring for $29. It cannot know that *this* workflow should produce 40–60 rows on a weekday. It cannot know that `Hi ,` is a broken merge field rather than a valid greeting. It cannot know to count records at the trigger rather than after the filter — Gold_Message6901's insight, and the sharpest thing in the whole research: *"Quiet Tuesday is 4 in, 4 out. Renamed field is 300 in, 0 out. Identical at the output, nothing alike at the input."*

Every one of those requires someone to look at the workflow and decide what correct means.

**So never sell "monitoring." Sell "someone who decides what correct looks like for each of your workflows, and keeps that current."** If you sell monitoring you lose to a $29 tool, deservedly.

## E. The smallest thing you can sell — and this replaces the plan

Here is the most important change. Stop leading with the $600–1,200 install. It takes ten days to deliver and you don't yet know anyone will pay anything.

**Lead with a paid Silent Failure Scan. $200. 48-hour turnaround. Read-only. Nothing installed.**

You get read-only API access to one estate, run three checks across their workflows, and return a list of what is **currently broken while showing green**, with execution IDs and actual numbers as evidence.

Why this is the right first unit:
- Sellable on day 3, not day 20
- Delivery risk near zero — you can't break anything read-only
- If they pay $200, the $600 install is a small step up, not a cold ask
- **If they won't pay $200, they will never pay $900** — and you find that out in week one instead of week four
- It's not a document-only deliverable as long as you return *evidence of real current failures*, not generic risk advice. Generic advice is what an LLM gives free. Their execution data is not.

**The install becomes the upsell, not the entry point.** The scan is the entry point.

---

# PART 2 — Day 1 to Day 7

## Day 1 (Monday) — Build the list. ~4 hours.

### Source 1 — Reddit commenter harvest (primary, ~25 names)

This is your best source, and it's the technique you've used before. These people self-identified as having the problem, in public, with a date.

Open each thread. For every commenter who describes managing client workflows or running an agency, record their username and what they said.

| Thread | URL |
|---|---|
| How do you find out a client's workflow broke | reddit.com/r/n8n/comments/1w18bh9/ |
| Workflow sat dead for 17 days | reddit.com/r/n8n/comments/1w02g0o/ |
| Failures that report success | reddit.com/r/automation/comments/1v9dyko/ |
| Monthly Make maintenance | reddit.com/r/automation/comments/1v8n5gq/ |
| Most AI automations break the same way | reddit.com/r/automation/comments/1waiqi2/ |
| Upstream API drift | reddit.com/r/n8n/comments/1we9u7j/ |
| Deleted my monitoring dashboard | reddit.com/r/automation/comments/1vl6skf/ |
| n8n forum: monitoring in production | community.n8n.io/t/…/300723 |

**Named priority targets already identified:** u/Ahmiii_83 (asked the commercial question, got half an answer), u/makeprohacks (said out loud he wants someone maintaining his automations), u/joshuahasideas (*"Manually right now… which doesn't scale"*), u/Spare-Importance-247 (operating company, quantified impact), u/ExpensivePop1523, u/Intelligent-Meat-984, u/sidmish (**do not pitch — he's the competitor; read his posts to learn the motion**).

Additional searches to run in each sub, sorted by new, past year:
`monitoring` · `silent` · `failed silently` · `error handling` · `broke` · `maintenance retainer` · `client workflow` · `handover`

### Source 2 — n8n partner directory (~10 names)

https://experts.n8n.io/ — all 48, two pages. **Skip anything describing itself as enterprise, or with employee counts in the hundreds.** Keep the small ones. From page 1, the ones worth a look: Agent Studio, Hyperstack Studio, Forward.Deployed.Engineer, PulpSense, Symplytics, Alexandra Spalato, AI Automation Engineering, Ovidius AI, Data4Prime, ED.

### Source 3 — Make partner directory (~10 names)

https://www.make.com/en/partners-directory — filter by country (US, UK, DE, NL, AU, CA). Larger than n8n's. Same size filter.

### Source 4 — LinkedIn content search (~5 names)

Search **content**, not people, then work back to the author:
`"n8n" maintenance client` · `automation "broke" client` · `"Make.com" retainer` · `workflow monitoring agency` · `automation handover`

Anyone who posted about maintenance or client escalations in the last 90 days is warm.

### Source 5 — Operating companies (~20 names, the A-challenge test)

LinkedIn Sales Navigator:
- Titles: **Head of Operations, RevOps Manager, Operations Manager, Head of Business Systems**
- Profile keywords: `n8n` OR `Make.com` OR `Zapier` OR `automation`
- Headcount: **11–200**
- Geography: US, UK, EU, AU, CA
- Posted in last 30 days

These are Spare-Importance-247's peers. Different framing, same product.

**Stop at 50. Do not spend Tuesday improving the list.**

---

## Day 2 (Tuesday) — First contact. ~3 hours.

- **5 Reddit replies.** Substantive, no pitch, no product name, end on a question. Reply to the threads above where you have something real to add.
- **15 LinkedIn connection requests** with the note below.
- **10 emails** where the agency site lists one.

**Pacing:** 3–5 Reddit replies a day is your ceiling before quality drops and you risk the rate limit you've hit before. Don't exceed it.

---

## Day 3–4 (Wednesday–Thursday)

- 5 Reddit replies/day
- 15 more LinkedIn requests
- Reply to every response within 4 hours
- **The moment anyone shows interest, offer the $200 scan.** Don't wait for a call.

---

## Day 5 (Friday)

- First calls, only with people who already said something real
- 5 Reddit replies
- **First paid scan should start today if anyone said yes**

---

## Day 6–7 (Weekend)

- Deliver any scan within 48 hours of access
- **Day 7 evening: run the decision in Part 6.** Honestly.

---

# PART 3 — The messages

## The first message (LinkedIn connection note, ≤300 chars)

> Saw your post about [specific thing they said]. I'm working on the silent-failure side of the same problem — the runs that stay green while doing nothing. How do you currently find out when a client workflow stops doing its job?

Why this and not something cleverer: it references something real they said (so it isn't cold), it states what you work on in one clause without pitching, and it ends on a question about their setup rather than a request for their time. No company name, no link, no "I'd love to." Those are the three things that get ignored.

**For operating companies, swap the last line:** *"How do you find out when one of your automations stops doing its job?"*

**Email version** (subject: `silent failures in client workflows`):

> Hi [name] — saw [specific thing]. I work on the silent-failure side of automation: the runs that report success while doing nothing, usually a revoked token or a renamed field that makes a filter match zero records.
>
> Quick question rather than a pitch — across your client workflows, how do you find out something stopped working? Something watching, or the client calling?
>
> Kanthipriya

## Reddit reply — the only one you need

> The one that gets missed is counting records at the trigger instead of after the filter. Quiet day is 4 in, 4 out. Renamed field is 300 in, 0 out. Identical at the output, nothing alike at the input — and the filter node usually has that number sitting in the run data already.
>
> Are you measuring before or after the filter?

Adapt the technical content to the thread. Keep the shape: one specific observation, no credentials, one question. Let your profile do the selling.

---

## PART 4 — When they reply positively

**Say this:**

> That matches what I keep seeing. Rather than talk about it in the abstract — I'll do a paid scan on one estate for $200. You give me read-only API access, I run three checks across your workflows, and within 48 hours you get a list of what's currently failing while showing green, with execution IDs so you can verify every one yourself.
>
> If I find nothing, I'll tell you that and refund it. Most estates have something.
>
> Want to try it on your messiest client?

**Why this works:** it's cheap enough to say yes without a meeting, it's concrete, the refund removes the risk, and "your messiest client" gives them permission to pick the one they're already worried about — which is also the one most likely to yield a finding.

**If they want to talk first,** the call is 20 minutes and you run it as below. **Do not push for a call.** Async is your stated preference and it's also better here — a $200 decision doesn't need a meeting, and asking for one adds friction.

---

## PART 5 — Running the 20-minute review with nothing built

**Minutes 0–3.** *"Tell me about the estate — how many workflows, how many clients, which platform?"* Listen for numbers. Record them.

**Minutes 3–8.** *"Has a client ever found a failure before you did? What happened?"* This is the whole call. Let them talk. Do not fill silences. The story they tell is the thing you will quote back to them in the quote.

**Minutes 8–12.** *"Do you bill a maintenance retainer today? What does it cover?"* Then, critically: *"If this produced a monthly one-pager you could put your logo on — would you bill your client for it separately, or would it get absorbed?"* **Write down the exact answer. This is challenge C, and it's the most valuable data point of your entire week.**

**Minutes 12–17.** Screen-share, read-only, one workflow. See below.

**Minutes 17–20.** *"I'll do a full scan of this estate for $200, back in 48 hours."* Stop talking.

---

## PART 6 — Demonstrating a real silent failure, safely

Everything below is **read-only GET requests**. You never write, never trigger, never modify. State that out loud before you start.

**Check 1 — Staleness.** Pull the execution list. For each active workflow, compare `now − last successful execution` against its expected cadence. Anything past ~2× its interval is either dead or misconfigured. This is ChuchOnTheMove13's 17-day failure, and it takes one API call.

**Check 2 — Volume collapse.** For each workflow, chart items processed per run over the last 30 days. Look for a step change — 50, 50, 48, then 2, 2, 2. That's an upstream change nobody noticed. Then, where the run data shows it, compare the item count entering the filter against the count leaving it. Big in, zero out is a broken field. Small in, small out is a quiet day.

**Check 3 — Empty success.** Find executions marked success where the final node emitted zero items or a null in a required field. This is MoneyWithJJ's lapsed quota returning 200 with an empty body, and Ok-Category2729 found three in his first week doing exactly this.

**Safety rules, non-negotiable:**
- Read-only API key, issued in **their** account
- **Never store payloads or bodies** — counts, timestamps and execution IDs only
- Never run, retry or re-trigger anything, even if they ask
- Key revoked when the scan is delivered
- One paragraph in writing before access changes hands, stating all of the above

**What you hand back:** a plain list. Workflow name, what's wrong, the execution IDs proving it, the number that should be there versus the number that is. No recommendations section. No maturity score. No PDF with a cover page. The evidence *is* the deliverable — that's what makes it something an LLM can't produce.

---

## PART 7 — When to mention price

**In the second message.** Not later.

$200 is below everyone's thinking-about-it threshold, so naming it early removes the "what's this going to cost me" hesitation that kills async conversations. Holding price back is a tactic for expensive things; for a $200 scan it just adds a round trip.

Mention the **$600–1,200 install only after you have delivered a scan and found something.** At that point you're not quoting a price, you're quoting the fix for a problem they've just seen the evidence of. Completely different conversation.

## PART 8 — When to ask about the retainer

**Ask about willingness twice, and never quote $250.**

**First — during the qualifying conversation, before any money changes hands.** Phrased as research, not a pitch: *"If someone kept the expectations current as you edit workflows and sent you a monthly one-pager, what would that be worth to you monthly?"* Ask this of everyone, including people who never buy. It's the single most valuable data point in the 30 days and it costs nothing.

**Second — at handover of the first install,** when they've just watched a check fire. That's when you quote a real number, and the number should be informed by the twenty answers you collected to the first question.

---

## PART 9 — What to build if someone says yes

**For the $200 scan — three Python scripts. That's the whole thing.**

1. `staleness.py` — pull executions, compute `now − last_success` per workflow, flag past 2× cadence
2. `volume.py` — items per run over 30 days per workflow, flag step changes
3. `empty_success.py` — successful executions with zero-item or null-field final output

Run locally. Output to CSV. Read it yourself and write the findings by hand.

**For a $600 install, add only:** a GitHub Actions cron job that runs those scripts every 15 minutes, a Supabase table for watermarks, and a Slack webhook. Plus the daily one-line digest — Grouchy-Conflict-211's format, *"X ran, Y ok, Z skipped"* — because value arriving on day two beats value promised on day ten.

**Total infrastructure cost: under €5/month.**

## PART 10 — What NOT to build this week

Not the landing page. Not a logo. Not a dashboard. Not a SaaS. Not a Notion template. Not a lead magnet. Not a demo video. Not a pricing page. Not an onboarding flow. Not a brand. Not an email sequence. Not a Failsafe logo in Figma.

**One exception, and only if a prospect asks for a link:** a single plain page with the four paragraphs of copy from the 30-day plan and your email address. Fifteen minutes in plain HTML on kpappworx.com. Do not spend an hour on it.

**The tell that you're procrastinating:** if you find yourself picking a font this week, you're avoiding the messages.

---

## PART 11 — Tracking sheet

One Google Sheet, one tab, these columns exactly:

| Column | Values |
|---|---|
| `prospect` | Name / username |
| `company` | Agency or company name |
| `type` | **Agency / Operating company** ← the A-challenge test |
| `source` | Reddit / n8n dir / Make dir / LinkedIn / Email |
| `source_detail` | Thread URL or search that found them |
| `platform` | n8n / Make / Zapier / mixed |
| `workflows` | Number, or blank |
| `clients` | Number of client estates, or blank |
| `retainer_today` | Yes / No / Unknown |
| `pain_quote` | Their exact words about a failure |
| `contacted_date` | |
| `channel` | LinkedIn / Reddit / Email |
| `response` | None / Negative / Neutral / Positive |
| `response_date` | |
| `call` | No / Scheduled / Done |
| `scan_offered` | Y/N |
| `scan_paid` | Y/N — **the number that matters** |
| `findings` | What you actually found |
| `install_quoted` | Amount |
| `outcome` | Won / Lost / Open / Dead |
| `retainer_answer` | **Their number when asked what it's worth monthly** |
| `resell_or_absorb` | **Resell / Absorb / Unknown** ← challenge C |
| `objection` | Their exact words |

The three bolded columns are the experiment. Everything else is admin.

**Add a second tab, `objections`:** date, prospect, verbatim objection. If "NotiLens is $29" or "I'd just build it myself" appears four times, that's your answer and it arrives faster than any revenue signal.

---

## PART 12 — The Day 7 decision

Measure these four numbers on Sunday evening.

| Metric | Target |
|---|---|
| Prospects contacted | 50 |
| Real replies (not "thanks") | 5+ |
| Scans offered | 3+ |
| **Scans paid** | **1+** |

### 🟢 Continue — run the full 30 days
- **1+ paid scan**, or
- 5+ real conversations **and** 2+ people asked what a scan costs
- At least 3 usable answers to the retainer-value question

### 🟠 Change positioning — don't quit, change one variable
- 5+ real replies but **zero** willingness to pay → the problem is real, the offer is wrong. Drop to a free scan on three estates to get the findings, then charge for the fix.
- Agencies engage but say "I'd absorb it" → challenge C answered badly. **Pivot the list to operating companies for week 2.** You already have 20 of them.
- Everyone points at NotiLens → you're selling monitoring instead of expectation-setting. Rewrite the message, keep the list.

### 🔴 Kill it
- **Fewer than 3 real replies out of 50.** The message doesn't land and the channel doesn't have your buyer in it.
- **You run scans on 2–3 estates and find nothing broken.** The entire premise collapses. This is the fastest kill available — chase it deliberately.
- **"I'd just build that myself" from more than 60% of responders.** This is Quarterdeck repeating. Believe it the second time.
- **You reach Day 7 with the list built and fewer than 20 messages sent.** That's not a market signal, it's avoidance — and it's the most likely failure mode, so watch for it.

### Not a kill signal
Slow Reddit traction. sidmish converted from standing built over months. Weight LinkedIn and email for speed this week; Reddit compounds later.

---

## The week in one line

Build a list of 50 on Monday, send 50 messages by Friday, sell one $200 scan, and find out on Sunday whether anyone's automations are actually broken. Everything else is procrastination wearing a business-plan costume.
