# Failsafe — 30-Day Validation Plan
**Goal: 3 paying agency customers. Build nothing.**
Prepared 15 September 2026 · KPAppWorx

Every recommendation below traces to a named thread from the validation research. Where I'm guessing, I say so.

---

# PART 0 — The challenge, before the plan

You asked me to challenge the positioning again. Here it is, and it changes what the 30 days are actually for.

## $10k/month is not reachable as a one-off service. Do the arithmetic.

At a $900 average engagement, $10k/month means **eleven installs every month, forever**. Solo, each one taking 5–10 working days, that's impossible past about six. There is no version of this where one-off engagements reach $10k/month with one person delivering them.

So $10k/month requires one of three things:

1. **Retainer conversion.** The install becomes $200–400/month ongoing monitoring. You'd need 25–50 agencies on retainer. At your realistic acquisition rate that's a two-year build.
2. **Moving upmarket.** Stop selling to agencies, sell $3–5k engagements directly to companies with business-critical automations. Fewer customers, harder sales cycle, procurement re-enters, and your liability constraint gets worse.
3. **The white-label play.** Agencies resell your monitoring to *their* clients and you charge per estate. 30 agencies × 10 estates × $30/estate = $9k/month. **This is the only shape that actually scales — and it requires the software you said you don't want to build yet.**

**So the honest reframe: this 30 days is not testing "can I sell an install." It's testing "is there a business underneath the install."** The one-off is the probe, not the product. Which means the single most valuable thing you can learn in 30 days is not whether three agencies will pay $900 — it's whether those same three will say yes to *"and $250/month to keep watching."* Ask every one of them. That answer decides whether Failsafe is a business or a freelance gig with a good name.

## Six things that must be true, and how confident I am in each

| Must be true | Evidence | Confidence |
|---|---|---|
| Agencies will pay for invisible value | sidmish→makeprohacks conversion is real | **Medium** — MoneyWithJJ: "the client is paying for silence unless you hand them a number every month" |
| Agencies can resell it at margin | Content-Conference25: "monitoring is a product you sell rather than something you eat" | **High** |
| You can install a 30-workflow estate in under 10 days, repeatably | None. Unproven. | **Low** — assume the first one takes 3× your estimate |
| The install converts to a retainer at >50% | None. Completely unproven. | **Unknown — this is the real experiment** |
| NotiLens/YieldCue don't commoditise detection first | Both shipping now; one free tool already exists | **Low-Medium** |
| Reddit peer channel yields 2+ qualified conversations/week | sidmish did it, but from established standing | **Medium** — your own notes put the quality-comment ceiling at ~13–15/day before the pool runs dry |

## The uncomfortable one

**You would be selling to your own competitors.** An agency that buys this watches you work for ten days and can do it themselves next time. Service-layer defensibility here is approximately zero. That's acceptable for a 30-day validation and fatal as a business — which is the third argument pointing at the same conclusion: the product is the business, the service is the research.

---

# PART 1 — The plan

## 1. Exact ICP

**Target: n8n or Make automation agencies with live client estates they've already handed over.**

| Dimension | Target |
|---|---|
| Live client workflows/scenarios under management | **10–40** |
| Headcount | **2–10** |
| Platform | n8n or Make (self-hosted n8n is easiest — real API access) |
| Commercial model | Already bills a maintenance retainer, **or is actively trying to start one** |
| Geography | US, UK, EU, Australia, Canada first |
| Trigger signal | Has posted about post-handover failures, maintenance, or monitoring in the last 90 days |

**Why these boundaries, from evidence:**

The floor is set by Content-Conference25, who disqualified himself in public: *"I don't have a team so my projects are not that complex, so I can't justify retainers on pure maintenance just yet. I'm not on that level yet."* Solo freelancers with under five clients cannot buy this.

The ceiling is Ahmiii_83's *"I can't picture it across thirty"* — thirty estates is where manual checking visibly collapses. Above ~50 workflows they hire an engineer instead.

The commercial filter is the important one. An agency that already bills maintenance has a line item to expand. An agency that doesn't has to invent one, and you'd be selling two things at once.

**Anti-ICP — do not pursue:**
- Pre-handover builders (no estate yet, no pain)
- Solo freelancers with under 5 clients
- Anyone who says "my clients won't pay for maintenance"
- Agencies whose estates touch payments, health data, or anything regulated — **walk away, this is your liability line**
- Enterprise AI-agent teams (LangSmith/Arize/Braintrust own that room)

**On geography, bluntly:** agencies in India, Pakistan and the Philippines will benchmark you against local rates and negotiate you toward $200. Western agencies bill their own clients in dollars and have margin to share. Start there. Revisit later if the Western channel stalls.

---

## 2. The exact offer

### Silent Failure Sweep

> I install failure detection across your client estate, prove each check fires, and hand you a monthly one-page report you can put your logo on and bill your client for.

| Tier | Scope | Price |
|---|---|---|
| **Sweep** | One client estate, up to 10 workflows | **$600** (₹50,000) |
| **Estate** | Up to 30 workflows across multiple clients | **$1,200** (₹1,00,000) |
| **Watch** *(the real test)* | Ongoing monitoring + monthly reports | **$250/month** — offer to every customer at handover |

**The positioning that makes agencies buy:** this is not a cost you're asking them to absorb. It's a billable line item you're handing them. Content-Conference25 laid out the agency mental model exactly — *"You charge for building the project, then you charge for maintenance"* — so you are not selling monitoring, you are **selling them the ability to sell monitoring**. That reframe is the entire pitch.

The monthly report is not a nice-to-have. MoneyWithJJ named why: *"The alert is the product to you. The one-line report is the product to them."* Without something the agency can forward to a client, you're selling silence, and silence doesn't renew.

---

## 3. What you actually deliver, technically

Every item below came from a practitioner describing a failure that got them. This is the community's own checklist, assembled.

### Layer 1 — Did it run at all?
- **Cadence watermark** per workflow: alert when `now − last_success` exceeds ~2× the expected interval. *(ChuchOnTheMove13, after 17 days dead)*
- **Three-clock split** rather than one: `expected_next_start`, `last_started`, `last_verified_outcome`. Tells you whether the failure is scheduling, worker, or business logic. *(zhonglin)*
- **Expectation rows created outside the client's n8n.** If n8n creates the pending row, a dead n8n creates nothing and the silence comes straight back. *(Ahmiii_83)*

### Layer 2 — Did it do the right amount?
- **Input count before the filter, not output count after it.** Quiet Tuesday is 4 in, 4 out. Renamed field is 300 in, 0 out. Identical at the output. *(Gold_Message6901 — the sharpest single technical insight in the research)*
- **Volume band assertion**: normally 40–60 records, today 2 → alert. *(SufyanZahid86)*
- **Distinct count on the key + max timestamp of landed rows**, to catch reprocessing that lands mid-range and looks healthy. *(Dimon19900)*

### Layer 3 — Was the output actually right?
- **Schema/shape validation at a switch node before any downstream action runs.** *(Ok-Category2729 — "caught 3 silent loops in the first week")*
- **Per-node output shape vs that node's own history**, which is the only thing that catches a 200-with-empty-body from a lapsed quota. *(MoneyWithJJ)*
- **Hold queue before irreversible sends.** Same checks, different position in the flow — because a range alert on emails just tells you 400 broken sends already left the building. In n8n it's an IF node feeding a NoOp plus a table write. *(Gold_Message6901)*

### Layer 4 — Who watches the watcher?
- **Watcher writes `last_poll_at` on every cycle**; a separate one-liner alerts if it goes stale. An HTTP 200 only proves something answered the socket, not that the loop is looping. *(nightly_runs)*
- **Read-only credentials for the watcher.** "Monitoring should never be able to become the outage." *(ChuchOnTheMove13)*
- **Workflow definition hash diffed against a blessed baseline**, so you hear about production edits from an alert, not from the client. *(ChuchOnTheMove13)*

### Layer 5 — The deliverables they can see
- **One daily line to their Slack** with a number that's meant to move: "X ran, Y ok, Z skipped." Not a dashboard. *(Grouchy-Conflict-211 — who deleted his dashboard and got more reliable)*
- **One monthly PDF per client estate**, white-labelled, that the agency forwards and bills against.
- **A written kill-test record** proving each check fired when you broke it on purpose.

---

## 4. Minimum stack to deliver manually

Nothing new to build. All of this you already run.

| Need | Use | Cost |
|---|---|---|
| External scheduler (must live outside client's n8n) | GitHub Actions scheduled workflows, or a €4 Hetzner box | €0–4/mo |
| Expectation rows, watermarks, baselines | Supabase free tier — you already run this | €0 |
| Polling scripts | Python against n8n `/rest/executions` and the Make API, read-only keys | €0 |
| Alerting | Client's own Slack webhook / email | €0 |
| Monthly client report | **Your existing HTML + WeasyPrint single-page PDF pipeline** | €0 |
| Shared status board | One Google Sheet per agency | €0 |
| Payments | Razorpay or Stripe payment link | ~2% |

Total running cost for the first three customers: **under €10/month.**

**Credential discipline — non-negotiable, this is your liability surface:**
- Read-only API keys only. Never write scope.
- Keys issued in the *agency's* account, not their end client's.
- Time-boxed; they revoke at handover unless they buy Watch.
- Nothing stored on your side beyond watermarks and counts. **Never store payloads or bodies.**
- Written one-paragraph scope note before any access changes hands.

---

## 5. The outcome you sell

> **In ten working days, every workflow in your estate either proves it did its job today, or someone gets woken up. And you get a one-page monthly report with your logo on it that you can bill your client for.**

Two sentences. First is the technical promise, second is the commercial one. The second is why they buy.

**The guarantee:** *"At handover I will break one of your workflows on purpose while you watch. If the alert doesn't fire, you don't pay."* This is entirely within your control, it's provable in ninety seconds, and no competitor is offering it. It comes from Ahmiii_83's own test standard: *"The test is to kill n8n for one interval and check the alert actually fires."*

Do **not** guarantee "we'll find X silent failures." You don't control that, and it makes a finding sound like the product. The installed detection is the product.

---

## 6. Landing page — kpappworx.com/failsafe

---

### Your client shouldn't be the one who tells you it broke.

**Failsafe installs silent-failure detection across your n8n and Make client estates — and hands you a monthly report you can bill for.**

A green run only proves the graph ran. It doesn't prove the message arrived.

The failures that cost you don't throw errors. A token gets revoked and the HTTP node still returns 200. A field gets renamed and the filter quietly matches zero records. A schedule stops firing and there's nothing in the executions list, because there were no executions. Every dashboard stays green. You find out six weeks later, from the client.

**What gets installed**

Cadence watermarks, so a workflow that stops being scheduled pages someone instead of sitting dead.
Volume assertions measured before the filter, not after — because 4-in-4-out is a quiet Tuesday and 300-in-0-out is a broken field, and they look identical at the output.
Output shape checks that run before anything irreversible is sent, with a hold queue instead of 400 broken emails.
A dead-man's switch that lives outside your n8n, because anything that has to run in order to report can't report that it didn't run.
A watcher that monitors itself.
One daily line in your Slack with a number that's meant to move.

**What you get to sell**

A white-labelled monthly one-pager per client estate. Your logo. Your retainer. Working monitoring is invisible by definition — this is the thing that makes it visible enough to bill for.

**How it ends**

At handover I break one of your workflows on purpose while you watch. If the alert doesn't fire, you don't pay.

**Pricing**

Sweep — one estate, up to 10 workflows — $600
Estate — up to 30 workflows — $1,200
Watch — ongoing monitoring and monthly reports — $250/month

Nine years building verification systems for software that isn't allowed to fail quietly. Same discipline, pointed at your automations.

**[ Book a 20-minute estate review ]**
*No demo, no deck. Bring one workflow you're unsure about and we'll look at it together.*

---

## 7. Where to participate — real threads, verified

These are live and I read every one. Start here, not with a search.

**Highest priority — an unanswered commercial question is sitting open:**
1. **"How do you find out a client's workflow broke, before the client does?"** — r/n8n, u/Ahmiii_83
   https://www.reddit.com/r/n8n/comments/1w18bh9/how_do_you_find_out_a_clients_workflow_broke/
   He asked three commercial questions — monitor or not, charge separately or bundle, where to draw the alerting line — and got one partial answer. **This is your single best entry point and he is your exact ICP.**

2. **"Most AI automations break the same way…"** — r/automation, ~8 Sep 2026
   https://www.reddit.com/r/automation/comments/1waiqi2/most_ai_automations_break_the_same_way_they_run/
   Recent, only 5 comments. Low competition, fresh.

3. **"Tired of production workflows breaking silently when upstream APIs drift"** — r/n8n
   https://www.reddit.com/r/n8n/comments/1we9u7j/tired_of_production_workflows_breaking_silently/

4. **"After a workflow sat dead for 17 days with zero errors"** — r/n8n, u/ChuchOnTheMove13
   https://www.reddit.com/r/n8n/comments/1w02g0o/after_a_workflow_sat_dead_for_17_days_with_zero/
   Crowded and technical. Only post if you have something genuinely new.

5. **"The automation failures that cost you are the ones that report success"** — r/automation
   https://www.reddit.com/r/automation/comments/1v9dyko/the_automation_failures_that_cost_you_are_the/
   u/joshuahasideas said *"Manually right now… which doesn't scale."* That's a buying signal left hanging.

6. **"monthly make scenarios maintenance and error handling"** — r/automation
   https://www.reddit.com/r/automation/comments/1v8n5gq/monthly_make_scenarios_maintenance_and_error/
   **Where sidmish converted makeprohacks.** Read it to learn the move. Don't post there — it's his ground.

7. **"I deleted my monitoring dashboard…"** — r/automation
   https://www.reddit.com/r/automation/comments/1vl6skf/i_deleted_my_monitoring_dashboard_and_my/
   Engage the objection honestly. He's right and agreeing with him builds more credibility than arguing.

8. **n8n Community Forum** — "How do you monitor n8n workflows in production?"
   https://community.n8n.io/t/how-do-you-monitor-n8n-workflows-in-production-and-detect-failures-early/300723
   Higher signal-to-noise than Reddit. Agency owners are here.

**Ongoing subreddits:** r/n8n (best), r/automation (second), r/Zapier. The Make subreddit is worth adding — *verify the current name yourself, it moved from r/Integromat and I haven't confirmed where it landed.* r/msp is a plausible adjacent estate-management audience but **I found no evidence there — treat as an untested guess.**

**Pacing, from your own history:** you've been rate-limited mid-batch before, and your quality ceiling runs out around 13–15 comments a day. Three to five substantive replies a day is the sustainable number here.

---

## 8. LinkedIn strategy

**First, an honest flag:** cold LinkedIn DM is a channel you already killed at ~300 touches and ~0 replies. That was end-buyers — RevOps directors who don't want to be sold to. This is a different motion: peer-to-peer, agency owner to agency owner, with a question rather than an offer. Worth re-testing on those grounds, but if week two looks like last time, cut it and put the hours into Reddit.

**Better than Sales Navigator: the platform partner directories.** n8n and Make both publish lists of their expert/partner agencies. Those are pre-qualified ICP lists — right platform, right size, running client estates commercially. Work these first; Sales Nav second.

**Sales Navigator filter stack:**

| Filter | Value |
|---|---|
| Job title | Founder, Co-Founder, Owner, Managing Director, Head of Automation |
| Keywords (profile) | `"n8n"` OR `"Make.com"` OR `"automation agency"` OR `"AI automation agency"` |
| Company headcount | 2–10, then 11–50 |
| Geography | United States, United Kingdom, Germany, Netherlands, Australia, Canada |
| Posted on LinkedIn | Last 30 days |
| Exclude | Anyone already messaged in your prior Quarterdeck campaigns |

**Highest-intent segment:** agency owners who have *themselves posted* about maintenance, handover, retainers, or client escalations in the last 90 days. Search content, not just people, and work backwards from the post to the author. That's warm, and it's how you avoid touch number 301 of a channel that already failed.

---

## 9. Three Reddit replies that aren't pitches

Your documented style: short, one observation, no credentials, ends on a workflow question. No product name in a first touch.

**Template A — someone describes a silent failure**

> The one that gets missed here is counting records at the trigger instead of after the filter. A quiet day is 4 in, 4 out. A renamed field is 300 in, 0 out. Identical at the output, nothing alike at the input — and the filter node usually has that number sitting right there in the run data.
>
> Are you measuring before or after the filter?

**Template B — someone asks how to monitor**

> Whatever you build, the thing to check is whether it can report its own death. If the monitor lives on the same instance, the instance dying takes both out quietly and nothing pages.
>
> Cheap version: watcher writes a timestamp every cycle, separate one-liner fails if that timestamp goes stale. A 200 from a health endpoint only proves something answered the socket.
>
> Where does your monitor run relative to the thing it watches?

**Template C — someone asks the commercial question (how to charge)**

> The part that made this sellable for people I've seen do it is that the client can't see monitoring working — by definition nothing happens. So it doesn't renew unless you hand them something every month with a number on it, in their units. Deals processed, invoices synced, whatever they actually care about.
>
> The alert is for you. The monthly line is for them.
>
> Are you billing it as part of the retainer or as its own line?

Rules: never name Failsafe in a first touch. Answer the question that was asked. Let them click your profile — which should say what you do. One follow-up after ~5 business days if a thread goes quiet, then stop.

---

## 10. Three LinkedIn messages

**Message 1 — connection request note (≤300 chars), to an agency owner who posted about maintenance**

> Saw your post about post-handover maintenance. I'm working on the silent-failure side of the same problem — the runs that stay green while doing nothing. Curious how you're handling detection across multiple client estates.

**Message 2 — first message after they accept**

> Thanks for connecting. Genuine question rather than a pitch: across your client workflows, how do you currently find out something stopped working — do you have something watching, or is it the client calling?
>
> Asking because the pattern I keep reading is that the expensive failures are the ones that never error. Token revoked, HTTP node still returns 200, workflow goes green, nothing alerts. Curious whether that matches what you see.

**Message 3 — follow-up if they engage, ~5 business days later**

> That matches what I've been seeing. The bit I'd be curious about from your side: if the detection existed and produced a monthly one-pager you could put your logo on and bill against — is that a line item your clients would actually pay for, or does it get absorbed into the retainer?
>
> Trying to work out whether this is a product or just good hygiene. Happy to show you what I've put together for other estates if it's useful.

Note the shape: every message ends with a question about *their* commercial model, not a request for their time. And message 3 is doing double duty — it's outreach *and* it's the retainer-willingness research from Part 0.

---

## 11. What to ask before agreeing to any engagement

**Scoping:**
1. How many live client workflows, on which platforms, and how many separate clients?
2. Self-hosted n8n or cloud? Make on which plan? *(decides API access reality)*
3. What's the expected run cadence for the busiest five workflows?
4. Which workflows do something irreversible — send email, post to a client system, move money?

**Commercial (this is the part that decides if they're a real buyer):**
5. Do you bill a maintenance retainer today? What does it cover?
6. Has a client ever found a failure before you did? What happened?
7. If this produced a monthly report you could white-label — would you bill your client for it separately, or absorb it?

**Access and liability:**
8. Can you issue me read-only API access **in your account**, not your client's?
9. Is anything in this estate touching payments, health information, or regulated data? *(if yes — decline, politely, and say why)*
10. Who signs off on my touching the estate — you, or does your client need to approve?

**Decline the engagement if:** they can't give read-only access in their own account, the estate touches regulated data, they have fewer than 5 live workflows, or question 7 gets "I'd absorb it." That last one means no margin story, which means no retainer, which means no business.

---

## 12. Sales process, end to end

| Stage | What happens | Target duration |
|---|---|---|
| **1. First contact** | Reddit reply or LinkedIn note. No pitch. A question about their setup. | — |
| **2. Conversation** | 2–4 messages. You're qualifying against §11 questions 5–7 before anything else. | 3–7 days |
| **3. Estate review call** | 20 min, free. Not a demo. They bring one workflow they're unsure about. | 20 min |
| **4. The free finding** | On the call, read-only, you check that one workflow's input-vs-output counts and last-success age. Usually there's something. | On the call |
| **5. Quote** | Fixed price, fixed scope, one page. Sweep or Estate. Kill-test guarantee stated. | Same day |
| **6. Payment** | **50% upfront via payment link**, 50% at handover. Non-negotiable — protects against ghosting. | 1–3 days |
| **7. Access** | Read-only keys, their account, written scope note. | 1 day |
| **8. Install** | Layers 1–4. Daily digest live from day 2 so they see something immediately. | 5–10 working days |
| **9. Handover call** | You break a workflow on purpose. The alert fires. They watch. Report template delivered. | 30 min |
| **10. The real ask** | *"Want me to keep watching it — $250/month?"* **Record the answer for every single customer.** | Same call |
| **11. Referral** | "Who else runs estates like yours?" Agency owners know agency owners. | Same call |

---

## 13. Demonstrating value with no SaaS

Four moves, in order of power:

**The kill test.** At handover, disable a trigger or revoke a test token while they watch. Alert fires in front of them. Ninety seconds, unfakeable, and it's the standard the community itself proposed: *"The test is to kill n8n for one interval and check the alert actually fires."* No competitor demos this.

**The free finding on the estate-review call.** Read-only, one workflow, two checks: input count vs output count, and age of last successful run. The research says these systems are riddled with this — Ok-Category2729 found three silent loops in his first week. You are not selling them a theory, you're showing them a thing that is wrong in their estate right now, live.

**The daily line, from day two.** Before the install is finished, they should already be getting one line a day in Slack with a moving number. Value that arrives on day two beats value promised on day ten.

**The white-label report.** A physical artefact with their logo that they can forward to a client. This is the only part that survives the "monitoring is invisible" problem, and it's the part you already have a pipeline for.

---

## 14. Realistic weekly targets

| Channel | Per week | Notes |
|---|---|---|
| Reddit substantive replies | 15–25 (3–5/day) | Your own ceiling is ~13–15 quality/day before the pool runs dry; you've been rate-limited before |
| n8n/Make partner directory outreach | 10 | Highest-fit list available |
| LinkedIn connection requests w/ note | 10–15 | Keep the pending backlog low |
| LinkedIn conversations advanced | 5–8 | |
| **Total touches** | **~40–55** | |

Over 30 days: roughly **170–220 touches**. At a 5–10% reply rate for warm peer-to-peer, that's **10–20 real conversations → 4–8 calls → 1–3 customers.**

Three is achievable. It is not comfortable. If you're at zero conversations by day 10, the problem is the message, not the volume — change the message before adding touches.

---

## 15. Success and failure criteria

### Success — continue and build the product
- **3+ paying customers at $600 or above**
- **2+ of them say yes to the $250/month Watch offer** ← the criterion that actually matters
- At least one referral from a customer to another agency

### Partial — extend 30 days, don't build
- 1–2 paying customers
- 5+ qualified calls with real scoping conversations
- Mixed answers on the retainer question

### Kill — stop, and don't romanticise it

1. **Week 1 fast-kill: you run free scans on 3 estates and find no silent failures.** The entire premise is that these are everywhere. If they're not, the thesis is dead on day 7 and you've saved three weeks. **Run this test first.**
2. **Zero paying customers AND fewer than 5 qualified calls by day 30.** The channel doesn't produce buyers.
3. **Over 60% of prospects say "I'd just build that myself."** DIY reflex confirmed — this is the Quarterdeck failure repeating, and you should believe it the second time.
4. **Everyone says no to the retainer.** One-offs only means there's no business here, just freelance work with extra steps.
5. **The first install takes more than 15 working days.** Unit economics are broken at $1,200. Either triple the price and test again, or stop.
6. **Prospects want it for their own internal workflows but won't resell to clients.** The white-label thesis — the only path to $10k/month — is dead. Reposition or kill.

### What is NOT a kill signal
- Slow Reddit traction in weeks 1–2. sidmish converted from established standing, which takes longer than 30 days to build. Weight LinkedIn and directories for speed, Reddit for compounding.
- Someone telling you NotiLens exists. Software competitors don't do the judgment work — deciding what "correct output" means for a specific workflow is the part that can't be automated, and it's the part you're selling.

---

## The one-line summary

Spend 30 days selling installs, but treat every install as a research instrument pointed at one question: **will an agency pay monthly to keep it running?** Three yeses to $900 makes you a freelancer. Two yeses to $250/month makes you a company.
