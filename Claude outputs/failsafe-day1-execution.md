# Failsafe — Day 1 Execution Pack
**16 September 2026. Objective: get into conversations. Sell one $200 scan if possible.**

---

## ⚠️ Read this first — I could not deliver the 20 operating companies

You asked for 30 agencies and 20 operating companies. I built the agencies. **I could not verify twenty operating companies, and I'm not going to invent them.**

What I tried: LinkedIn content search for ops people describing their own automation breakage (returned n8n ambassadors, educators and node builders — supply side, not buyers), and a Reddit-wide search for business-owner-side automation failure (returned nothing relevant at all).

**That absence is a finding, not a gap in effort.** Operating companies don't post about their broken automations in public. It's the same structure you hit with DO-178C: the pain is confidential, so there's no public signal to mine. It means the operating-company segment can only be reached by cold outbound with no warm hook — which is the exact channel that failed for you at ~300 touches on Quarterdeck.

**What to do tomorrow:** build those 20 yourself in 45 minutes with the Sales Navigator search in step 4 below. It's mechanical, it needs your logged-in Sales Nav, and it will tell you fast whether that segment is reachable at all. Treat it as the cheapest possible test of Challenge A, not as your main list.

Everything below that I *have* verified, I read personally. Every quote is verbatim. Every "unknown" is genuinely unknown.

---

# 1. Day 1 checklist — 4 hours 45 minutes

| Time | Task | Output |
|---|---|---|
| **09:00–09:15** | Set up tracking sheet. Columns from the plan. Paste in the 36 verified prospects below. | Sheet exists |
| **09:15–09:30** | Create a Reddit account posting identity if yours is thin — check your profile reads like a person who builds automations, not a vendor. No links, no pitch in bio. | Profile ready |
| **09:30–10:30** | **Reddit: 5 replies.** Top 5 messages below, posted in-thread. This is the highest-value hour of your day. | 5 posted |
| **10:30–11:15** | **Sales Navigator: build the 20 operating companies.** Search spec in §4. Don't message yet, just build. | 20 rows |
| **11:15–12:15** | **LinkedIn: 15 connection requests** to agency prospects with personalised notes. | 15 sent |
| **12:15–12:45** | Break. Actually take it. | — |
| **12:45–13:30** | **Email: 8 agencies** from the n8n directory that publish an address. Message in §4. | 8 sent |
| **13:30–14:00** | **Write the three scan scripts** (§6). About 100 lines total. Only if outreach is done. | Scripts run locally |
| **14:00–14:15** | Check replies. Respond to everything within the hour. Log every response verbatim. | Sheet updated |

**The rule for tomorrow:** if you're behind, cut the scripts, not the messages. Nobody has asked for a scan yet.

---

# 2. Verified prospect list

## Column key
`—` means I verified there is nothing there. `unknown` means I did not verify it and you shouldn't assume.

## A. Reddit prospects (24) — all verified, quotes verbatim

| # | Username | Type | Platform | Why they fit | Evidence (verbatim) | Source | Pri |
|---|---|---|---|---|---|---|---|
| 1 | **Ahmiii_83** | Agency | n8n | Runs client estates, asked the exact commercial question, got a partial answer | "Building the automation is the easy part. The part I don't see anyone talking about is the six months after handover." + "Do you charge for monitoring separately, bundle it into a retainer…?" | [r/n8n 1w18bh9](https://www.reddit.com/r/n8n/comments/1w18bh9/) | **A** |
| 2 | **makeprohacks** | Agency | Make | Agency owner who stated he wants this. May already have bought from sidmish. | "I run my agency and use make a lot for some of the processes, I do think having someone maintaining my critical automations." | [r/automation 1v8n5gq](https://www.reddit.com/r/automation/comments/1v8n5gq/) | **A** |
| 3 | **joshuahasideas** | Agency/practitioner | n8n + Zapier | Already does the checks manually and said so | "Manually right now. The ranges are written down but I'm the one looking at them, which doesn't scale." | [r/automation 1v9dyko](https://www.reddit.com/r/automation/comments/1v9dyko/) | **A** |
| 4 | **ChuchOnTheMove13** | Agency | n8n | Client workflow dead 17 days; runs multiple client n8n instances | "It sat like that for 17 days while every dashboard I had showed green." | [r/n8n 1w02g0o](https://www.reddit.com/r/n8n/comments/1w02g0o/) | **A** |
| 5 | **Spare-Importance-247** | **Operating company** | unknown | The only verified prospect with quantified money consequence | "we got a string of zero-row hours… the warehouse API changed their date format… Without that monitor we would've waited for the angry emails to roll in." | [r/automation 1v9dyko](https://www.reddit.com/r/automation/comments/1v9dyko/) | **A** |
| 6 | **dima_automation** | Agency/practitioner | n8n | States detection lag as his core problem | "Time-to-detection honestly is the whole game… Silent ones I've caught days late." | [community.n8n.io 300723](https://community.n8n.io/t/how-do-you-monitor-n8n-workflows-in-production-and-detect-failures-early/300723) | **A** |
| 7 | **ExpensivePop1523** | Agency | Make | Actively asking about monetising maintenance | "Do you charge maintenance as a flat retainer or per fix" | [r/automation 1v8n5gq](https://www.reddit.com/r/automation/comments/1v8n5gq/) | **B+** |
| 8 | **Ok-Category2729** | Practitioner | n8n | Built schema validation, found real failures fast | "i added a JSON schema validator at a switch node… caught 3 silent loops in the first week." | r/n8n 1w02g0o + r/n8n 1w18bh9 | **B+** |
| 9 | **Gold_Message6901** | Practitioner | n8n + Zapier | Deepest technical commenter found; likely runs client work | "Count the records the trigger saw before the filter, not after." | [r/automation 1v9dyko](https://www.reddit.com/r/automation/comments/1v9dyko/) | **B** |
| 10 | **XRay-Tech** | Practitioner | unknown | Describes repeated silent failures across clients | "I have seen this happen so many times where you think an output is successful." | [r/automation 1v9dyko](https://www.reddit.com/r/automation/comments/1v9dyko/) | **B** |
| 11 | **zhonglin** | Practitioner | n8n | Three-watermark model; sophisticated | "A useful split is three watermarks, not one" | r/n8n 1w02g0o | **B** |
| 12 | **nightly_runs** | Practitioner | n8n | Monitor died silently with its host box | "Nothing paged because the thing that pages was the thing that died." | r/n8n 1w02g0o | **B** |
| 13 | **SufyanZahid86** | Practitioner | n8n | Volume-assertion advocate | "It's the 'worked but only partly' runs that sit there for weeks." | r/n8n 1w02g0o | **B** |
| 14 | **Dimon19900** | Practitioner | n8n | Reprocessing failure mode | "nothing looks wrong for a week" | r/automation 1v9dyko | **B** |
| 15 | **Intelligent-Meat-984** | Practitioner | Make + n8n | Appears in 2 threads; API-change blindness | "that one just breaks silently, and you find out from a client instead of before them." | 1v9dyko + 1v8n5gq | **B** |
| 16 | **CODE_HEIST** | Practitioner | Make + n8n | Canary advocate, appears in 2 threads | "add one dead man check outside the workflow" | 1v9dyko + 1v8n5gq | **B** |
| 17 | **ibrahim_40** | Agency/practitioner | Make | Maintenance-first mindset | "Building the scenario is usually the easy part - keeping it reliable is the real work." | r/automation 1v8n5gq | **B** |
| 18 | **Lazy-Science9772** | Practitioner | unknown | Receipts + cross-check discipline | "Monitoring tells you the job ran. The cross-check tells you it ran correctly." | r/automation 1vl6skf | **B** |
| 19 | **BarracudaMean9308** | Practitioner | unknown | Vivid silent-failure story | "i was just carefully archiving empty text files." | r/automation 1vl6skf | **B** |
| 20 | **spoki-app** | Company account | unknown | Shifted to post-run integrity checks; notes dev cost | "it still means extra dev time to build them." | r/automation 1vl6skf | **B** |
| 21 | **Samueljesus** | Practitioner | n8n | Started the monitoring thread | "a workflow can show as successful while still producing no useful result" | community.n8n.io 300723 | **B** |
| 22 | **achamm** | Practitioner | n8n | Named the core insight | "silent failures bite hardest because they look green" | community.n8n.io 300723 | **B** |
| 23 | **Fit-Lengthiness-9672** | Practitioner | Make | Asks about schema-diff alerting | "do you alert on schema diff or just on failures?" | r/automation 1v8n5gq | **C** |
| 24 | **Grouchy-Conflict-211** | Practitioner | unknown | **Contrarian** — deleted his monitoring. Worth one conversation to test the objection. | "So I deleted it. All of it." | r/automation 1vl6skf | **C** |

**Reddit profile URL pattern:** `https://www.reddit.com/user/USERNAME` — valid for all of the above.

### ⛔ Do NOT contact — competitors
| Username | Why |
|---|---|
| **sidmish** | Sells your exact offer: "I do offer a monthly audit and error handling service." Study his posts. Don't pitch him. |
| **0xGich** | Founder of **YieldCue**, an outcome-monitoring product, currently in testing |
| **MoneyWithJJ** | "I say that as someone shipping the unsupervised version" |
| **Calm-Dimension3422** | Posts on behalf of **Fabren** |
| **Thunderbit_HQ** | Vendor account |
| **Content-Conference25** | Disqualified himself: "I can't justify retainers on pure maintenance just yet. I'm not on that level yet." |

## B. n8n directory agencies (12 verified with websites)

All from https://experts.n8n.io/ (48 partners total, verified). LinkedIn URLs: **unknown for all** — 2 minutes each to find, do it as you send.

| # | Company | Website | Country | Platform | Why they fit / budget signal | Pri |
|---|---|---|---|---|---|---|
| 25 | **2V Automation** | 2vautomation.ai | US (NYC, Boston, Miami, Toronto, London) | n8n | Multi-office but not enterprise; does migrations, so inherits other people's estates. Positions on durability: "we build systems that don't break when you scale" | **A** |
| 26 | **Spalato Consulting** (Alexandra Spalato) | spalatoconsulting.com | Spain | n8n | **Sells audits to agencies already** — "We run AI Opportunity Audits." Either your best customer or your best referral partner. Budget band starts $1–5k. | **A** |
| 27 | **PulpSense** | pulpsense.com | US (Wyoming) | n8n | Budget band starts at $1,000 = right size. "Trusted by 100+ businesses" = large estate count | **B** |
| 28 | **Dots & Arrows** | dotsandarrows.eu | Belgium / Netherlands | n8n | End-to-end projects "to deployment and training" — no stated post-deployment support | **B** |
| 29 | **Hyperstack Studio** | hyperstack.studio | France / US | n8n + Make + Airtable | Multi-platform estates. Budget $5k–100k+ | **B** |
| 30 | **Symplytics** | unknown | Canada | n8n | Mid-sized clients in manufacturing, logistics, retail, finance | **B** |
| 31 | **DataFix B.V.** | unknown | Netherlands | n8n | **Explicitly does retainers**: "We work on one time projects but also on retainer." 5 yrs n8n, 5.0 rating | **B** |
| 32 | **Forward.Deployed.Engineer** | forward.deployed.engineer | UK (+ India, UAE) | n8n | Founder Viraj was n8n's first commercial lead. Budget starts $5k. | **B** |
| 33 | **Agent Studio** | unknown | unknown | n8n | Product studio, MVP work, 5.0 (4 reviews) | **B** |
| 34 | **AI Automation Engineering** | unknown | unknown | n8n | Queue-mode scaling specialists — bigger estates | **B** |
| 35 | **Ovidius AI** | unknown | unknown | n8n | "we build things that actually run in production" | **B** |
| 36 | **TrueHorizon AI** | unknown | unknown | n8n | Agentic systems, 5.0 rating | **B** |

### Directory names verified but not researched (use as list filler)
`ED` · `Easy8` · `Data4Prime Srl` · `Varegos` · `RapidDev` · `Relyon AG` · `WidthAI` · `Ipanemads AI Agency` · `Propelling Tech` · `AIAdvisors` · `MakeItFuture` · `DigitalCubeAI` · `Cloudvox` · `Agenix AI` · `Octionic` · `Molia` · `KajoAI Oy` · `Wotai` · `Ennoia GmbH`

### ⛔ Skip from the directory — too large or already competing
**Exxeta** (1,200 staff, €135M rev) · **SVA** (4,000 staff) · **Deutsche Telekom** · **onepoint** · **Vertica** (150) · **AOE Group** (lists observability as a strength) · **cimt** · **Bitovi** · **InfoGrab** · **ATHEO** · **SYNERGY** · **Bounteous** · **Avanai** (sells "Agent Ops — run, monitor, continuously improve") · **MakeAutomation** (sells "monitoring and maintenance" — direct competitor) · **Goodspeed** ($10k minimum)

## C. Operating companies — build these yourself, 45 minutes

Sales Navigator, exactly this:

- **Job title:** `Head of Operations` OR `Operations Manager` OR `RevOps Manager` OR `Head of Business Systems` OR `Business Operations Lead`
- **Profile keywords:** `n8n` OR `"Make.com"` OR `Zapier` OR `"workflow automation"`
- **Company headcount:** 11–200
- **Geography:** United States, United Kingdom, Germany, Netherlands, Australia, Canada
- **Posted on LinkedIn:** Last 30 days
- **Exclude:** anyone in your Quarterdeck history

Record: name, company, title, headcount, LinkedIn URL, which automation tool their profile mentions. Mark `evidence_of_pain = none` for all of them — because there won't be any, and that's the point of the test.

---

# 3. Your first 10, ranked

| Rank | Prospect | Why they're first |
|---|---|---|
| **1** | **Ahmiii_83** | He asked your sales question in public and nobody answered it properly. He asked how to charge for monitoring, whether to bundle it, and where to draw the alerting line — and got one reply that told him it's the client's problem. He is the single warmest person in this entire research. |
| **2** | **makeprohacks** | The only person who said out loud that he wants to buy this: *"I do think having someone maintaining my critical automations."* Caveat — he DM'd sidmish two months ago, so he may be taken. Find out; if sidmish didn't close him, he's sitting there. |
| **3** | **joshuahasideas** | Already does your checks by hand and has said the quiet part: *"which doesn't scale."* He's defined the problem, built the manual version, and hit the wall. That's a buyer three-quarters of the way down the path. |
| **4** | **ChuchOnTheMove13** | Highest-severity story in the research and he runs client instances. Risk: he's technically strong and has already built his fix, so he may be a peer rather than a customer. Worth one message to find out which. |
| **5** | **Spare-Importance-247** | Your only verified operating-company prospect with money attached to the failure. Worth contacting purely to test whether that segment converts differently — a sample of one beats a sample of none. |
| **6** | **dima_automation** | *"Silent ones I've caught days late."* Username suggests automation is the business. Detection lag is his stated pain and it's exactly what you sell. |
| **7** | **2V Automation** | Directory-verified, five offices, does migrations — meaning they inherit estates built by other people, which is the worst kind to monitor. Their own positioning is about things not breaking, so the pitch lands on their existing message. |
| **8** | **Spalato Consulting** | Already sells audits *to agencies*. Two possible outcomes, both good: she buys the scan to resell, or she becomes a referral channel into a client base that is exactly your ICP. |
| **9** | **ExpensivePop1523** | Asked the pricing question — flat retainer or per fix. Anyone asking how to price maintenance is thinking about selling it, which means they're thinking about buying the thing that makes it sellable. |
| **10** | **Ok-Category2729** | Found three silent completions in his first week of checking. He has proof the problem is real and is active in two of your threads. Warm, credible, and likely knows others. |

---

# 4. The exact first messages

**Reddit rule:** these are **public thread replies**, not DMs. Reply where their comment lives. No product name, no link, no pitch. Let your profile do the work. DM only if a thread is over a month old, and then reference the thread.

---

### 1 — Ahmiii_83 · reply in [r/n8n 1w18bh9](https://www.reddit.com/r/n8n/comments/1w18bh9/)

> Your three commercial questions got one answer and it was "that's the client's problem," which I don't think is right once you're past a handful of estates.
>
> The thing that decides whether it's sellable is that working monitoring is invisible — nothing happening looks identical to nothing being watched. So it doesn't survive a renewal conversation unless the client gets something monthly with a number on it in their units. Deals synced, invoices processed, whatever they actually count. The alerts are for you. The number is for them.
>
> On the technical side your external-cron design is right for the reason you gave. The gap it still leaves is the run that happened and produced nothing — node returns 200 with an empty body, canary clears its row on schedule, everything green.
>
> How many estates are you at now?

---

### 2 — makeprohacks · reply in [r/automation 1v8n5gq](https://www.reddit.com/r/automation/comments/1v8n5gq/)

> You said you'd want someone maintaining your critical Make scenarios — did you end up getting that set up, or is it still on the list?
>
> Asking because the failure mode that usually justifies it isn't the one people expect. It's not the scenario that errors, it's the one that runs clean and writes nothing. Connector auth silently changes, module returns 200, operations counter looks normal.
>
> What does your critical set look like — how many scenarios across how many clients?

---

### 3 — joshuahasideas · reply in [r/automation 1v9dyko](https://www.reddit.com/r/automation/comments/1v9dyko/)

> The "manually right now, which doesn't scale" bit is the real problem in this thread, more than the criteria themselves.
>
> One thing that made the manual version cheaper for me before automating it: measure the count at the trigger rather than the output. A quiet day is 4 in and 4 out. A renamed field is 300 in and 0 out. At the output they're the same number, and you can't tell "nothing to do" from "broken" — which was your 0-record problem from earlier in the thread. The input count separates them without any range tuning at all.
>
> How many workflows are you eyeballing manually at the moment?

---

### 4 — ChuchOnTheMove13 · reply in [r/n8n 1w02g0o](https://www.reddit.com/r/n8n/comments/1w02g0o/)

> The propose-then-bless compromise is the right call, and it's the part most people skip because it isn't automatable.
>
> The thing it creates, though, is a standing job nobody owns. Every workflow edit invalidates its own baseline, so the blessing has to happen again, and in an agency that's a task that quietly rots until the expectations mean nothing and everything reads green again. Which is roughly where you started.
>
> Across your client instances, who does the re-blessing — you, or has it ended up unowned?

---

### 5 — Spare-Importance-247 · reply in [r/automation 1v9dyko](https://www.reddit.com/r/automation/comments/1v9dyko/)

> Per-hour throughput instead of daily totals is underrated and the warehouse date-format story is the best argument for it I've read — 15 minutes to detection instead of however long the angry emails take.
>
> The one it still misses is the partial. Orders flowing at roughly normal volume while one segment silently drops out, so the hourly count stays in band. Distinct count on the key plus the max timestamp of what actually landed catches it, where a volume check won't.
>
> Is the throughput monitor something you built in-house, or does it come with your pipeline tooling?

---

### 6 — dima_automation · reply in [community.n8n.io 300723](https://community.n8n.io/t/how-do-you-monitor-n8n-workflows-in-production-and-detect-failures-early/300723)

> "Time-to-detection is the whole game" is the right frame, and the days-late ones are days late for a structural reason: nothing in the execution record is wrong, so there's nothing for a monitor to find. The record says success because the graph ran.
>
> The only thing I've seen close that gap is comparing each node's output against what that node normally emits, rather than against a status. Expensive to set up, and the baseline dies every time someone edits the workflow.
>
> Do you have anything catching those now, or is it still mostly discovering them after the fact?

---

### 7 — 2V Automation · LinkedIn connection note (≤300 chars)

> You describe building systems that don't break when you scale — the failure I keep seeing on inherited estates is the one that doesn't break loudly. Token revoked, HTTP node still returns 200, workflow goes green. On migrations, how do you verify the new estate is actually doing the work?

---

### 8 — Spalato Consulting (Alexandra) · LinkedIn or via spalatoconsulting.com

> Hi Alexandra — you run AI Opportunity Audits for marketing agencies, so you're probably looking at more live n8n estates than most people.
>
> Question rather than a pitch: when you go into an agency's existing workflows, do you check whether the ones already running are actually producing output? I keep finding workflows that report success and write nothing — lapsed API quota returning 200 with an empty body, that kind of thing — and the executions list looks perfectly healthy.
>
> Curious whether that shows up in your audits or whether it sits outside the scope.
>
> Kanthipriya

---

### 9 — ExpensivePop1523 · reply in [r/automation 1v8n5gq](https://www.reddit.com/r/automation/comments/1v8n5gq/)

> On flat retainer versus per fix — the thing that seems to decide it is whether the client can see anything happening. Per-fix is easy to justify because there's a visible broken thing. A retainer for monitoring is invisible by design, so it gets cut at the first budget review unless something lands in their inbox monthly with a number they care about.
>
> Your point about logging every scenario touching a third-party API is the bit most people skip. That list is also the one that ages worst.
>
> How many third-party connectors are you tracking across clients?

---

### 10 — Ok-Category2729 · reply in [r/n8n 1w18bh9](https://www.reddit.com/r/n8n/comments/1w18bh9/)

> Three silent completions in the first week is the number that should make people stop and check their own. It's not a rare failure, it's a constant one that nobody's looking for.
>
> Agree the downstream verification is the harder half. The cheap approximation I've used: compare the node's output count against its own recent history rather than against an absolute expectation. Doesn't prove the write landed, but it catches "this node used to emit 50 things and now emits 0" without needing a source of truth on the other side.
>
> Is the schema validator something you put on every client build now, or only where you've been burned?

---

# 5. The $200 scan — exact wording

When someone asks *"what exactly are you offering?"*, send this. Don't edit it shorter.

> **Silent Failure Scan — $200, 48 hours.**
>
> You give me a read-only API key to one n8n instance. I run three checks across every active workflow:
>
> 1. **Stale** — workflows that have stopped running and thrown no error, because a run that never starts produces no record to alert on.
> 2. **Empty success** — executions marked successful where the final node emitted nothing, or emitted a null in a field something downstream depends on.
> 3. **Volume collapse** — workflows whose output dropped off a cliff and stayed there, including the ones where the trigger is still seeing plenty of records and the filter is throwing them all away.
>
> You get back a plain list: workflow name, what's wrong, the execution IDs proving it, and the number that should be there next to the number that is. You can verify every single line yourself. No report, no scorecard, no recommendations section.
>
> Read-only throughout. I never trigger, retry or modify anything, and I don't store payloads — counts, timestamps and execution IDs only. Key gets revoked when I hand the findings over.
>
> **If I find nothing, you get your $200 back and I'll tell you your estate is clean.**
>
> Pick your messiest client and I'll start when the key lands.

**If they ask about NotiLens or any $29 tool:** don't argue features.

> Those are good at telling you a run failed. None of them knows this workflow should produce 40–60 rows on a weekday, or that "Hi ," is a broken merge field rather than a valid greeting. That part is someone looking at your workflow and deciding what correct means — that's what the scan is, and it's why it's a person and not a subscription.

---

# 6. The scan, technically

**Scope: n8n only. Read-only. Three scripts. No database, no dashboard, no deployment.**

## Access

n8n public REST API. Header `X-N8N-API-KEY`. **GET requests only** — if you find yourself typing `requests.post`, stop.

Ask them for: the instance base URL, and an API key. On n8n Cloud and self-hosted, keys are created in Settings → n8n API.

## Data to pull

| Endpoint | What you need from it |
|---|---|
| `GET /api/v1/workflows` | id, name, active, nodes (for trigger config / cron expression) |
| `GET /api/v1/executions?workflowId=X&limit=250` | id, workflowId, status, startedAt, stoppedAt, mode |
| `GET /api/v1/executions/{id}?includeData=true` | run data → **item counts per node only** |

⚠️ **`includeData=true` returns actual payloads.** Extract `len(items)` per node and discard the rest in the same function. Never write a payload to disk. This is the single thing that could turn a $200 job into a liability problem.

## Check 1 — `stale.py`

For each workflow where `active == true`:
- Find `max(startedAt)` across its executions
- Derive expected interval from the trigger node (cron expression, or `Schedule Trigger` config). If it's a webhook trigger, infer the interval from the median gap between recent executions instead.
- **Flag if `now − last_run > 2 × expected_interval`**
- **Also flag any active workflow with zero executions in 30 days** — that's ChuchOnTheMove13's 17-day case, and it's the highest-value finding you can hand someone

## Check 2 — `empty_success.py`

For each execution where `status == "success"`:
- Pull with `includeData=true`, take the item count of the **final** node
- **Flag where final node item count == 0**
- Where you can identify a required field cheaply, flag nulls in it
- Group by workflow and report the ratio: "14 of 61 successful runs produced nothing"

## Check 3 — `volume.py`

For each workflow, over 30 days:
- Series of items-out per execution
- **Flag a step change:** median of last 7 days < 30% of median of the prior 23
- **Where the run data exposes it, capture item count entering the first filter node and leaving it.** Big in / zero out is broken. Small in / small out is a quiet day. This is the check nothing off-the-shelf does, and it's the one that will make the scan look like magic.

## Output

One CSV: `workflow_name, check, severity, evidence_execution_ids, expected, actual`.

Read it yourself. Write the findings by hand in plain sentences. **Do not generate the summary with an LLM** — the evidence is the product, and the moment you hand over generated prose you're selling the thing that got DocGen and Quarterdeck killed.

## What you are NOT building tomorrow
No cron. No Supabase. No Slack integration. No web UI. No repo structure. No tests. Three scripts in one folder, run from your terminal, output to CSV. Roughly 100 lines total.

---

# 7. Day 1 success criterion

Measured at 14:15 tomorrow. Binary — you either hit the number or you don't.

| Metric | Minimum | Good |
|---|---|---|
| Reddit replies posted | **5** | 5 |
| LinkedIn connection requests sent | **15** | 15 |
| Emails sent | **8** | 8 |
| **Total outbound touches** | **28** | 28 |
| Operating-company rows built in Sales Nav | **20** | 20 |
| Prospects logged in sheet | **50** | 56 |
| Replies received | 0 is fine | 1+ |
| Scans sold | 0 is fine | 1 |

**Day 1 is a pass if you sent 28 messages and logged 50 prospects.** Nothing else counts. Replies are a Day 2–4 phenomenon; nobody answers a Reddit comment in four hours.

**Day 1 is a fail if:** you sent fewer than 20 messages, *or* you wrote any code before the messages went out, *or* you spent any time on a landing page, a logo, or the name.

**The most likely way tomorrow goes wrong** is that you spend three hours perfecting the scan scripts because writing Python is comfortable and posting on Reddit as yourself is not. The scripts are worth nothing until someone has said yes. Messages first.
