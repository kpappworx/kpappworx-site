# TiE Problem-Discovery Research Kit

A behavior-based survey system for finding a real, recurring, painful business problem worth solving — not for validating an idea. Distributed through your TiE WhatsApp network in two stages: a 2-minute screener, then a short follow-up only for the people who surface something real.

---

## A. Stage 1 — Google Form (the screener)

### Form title
**Quick research: what's eating your time or money right now?**

### Form description (shown at the top of the form)

> I'm doing some independent research into how founders and business owners actually spend their time and money on operational headaches — not a survey about tools or technology, and not a pitch for anything. It takes about 2 minutes. There are no wrong answers; the more specific and "boring/real" your answer, the more useful it is to me. Your response is confidential and won't be shared or attributed without asking you first.

**Form settings to turn on:** Settings (gear icon) → Responses → "Collect email addresses" → set to *Verified*. This captures the respondent's email automatically and doesn't use up one of your 7 question slots — it's how you'll identify and follow up with people, since Q1 is a shared, semi-anonymous problem description rather than a personal-details question.

---

### Q1 — Open-ended anchor question
**Type:** Paragraph
**Required:** Yes

**Question text:**
"What's your company name, and what's ONE recurring task or process in running your business that eats up disproportionate time, money, or energy — and still isn't solved to your satisfaction? Be as specific and unglamorous as possible (e.g. 'chasing vendors for GST invoices every month' beats 'operations are inefficient')."

*Why this design:* asking for the company name inside the same free-text field (rather than a separate question) keeps you at 7 questions while still letting you tag each response by company later. Framing it as "recurring... still isn't solved" filters out one-off annoyances and steers people toward chronic pain rather than a random complaint of the day.

---

### Q2 — Frequency
**Type:** Multiple choice
**Required:** Yes

**Question text:** "How often does this come up?"

**Options:**
- Basically every day
- A few times a week
- About once a week
- A few times a month
- Monthly, or less often

---

### Q3 — Time / effort
**Type:** Multiple choice
**Required:** Yes

**Question text:** "Adding up everyone involved (you, your team, anyone else), roughly how many hours does this consume in a typical month?"

**Options:**
- Less than 2 hours
- 2–5 hours
- 5–15 hours
- 15–40 hours
- 40+ hours
- Hard to say / never measured it

*The last option matters — "never measured it" is itself a data point (low visibility into the cost of the problem).*

---

### Q4 — Current workaround
**Type:** Checkboxes (multi-select)
**Required:** Yes

**Question text:** "What do you currently do about it? (select all that apply)"

**Options:**
- I or someone on my team just does it manually, every time
- We use Excel / Google Sheets to manage it
- We use an off-the-shelf software tool for it
- We've hired someone (full-time or part-time) mainly because of this
- We outsource it to an agency or freelancer
- We mostly let it slide / accept the mess
- Other: [short text]

---

### Q5 — Money already being spent
**Type:** Multiple choice
**Required:** Yes

**Question text:** "Are you currently paying actual money (not just time) to deal with this — a software subscription, a contractor, extra staff, an agency, etc.?"

**Options:**
- No, nothing is currently paid for this specifically
- Yes, under ₹10,000/month
- Yes, ₹10,000–₹50,000/month
- Yes, more than ₹50,000/month
- Not sure / would have to check
- Prefer not to say

---

### Q6 — Severity
**Type:** Linear scale (1–5)
**Required:** Yes

**Question text:** "If this problem completely disappeared tomorrow, how much would it change your week?"
**Scale labels:** 1 = "Barely notice" · 5 = "Huge relief — genuinely changes how I run things"

---

### Q7 — Willingness to go deeper
**Type:** Multiple choice
**Required:** Yes

**Question text:** "Would you be open to a short (10–15 min) follow-up conversation about this specific problem sometime — walking through exactly how it plays out, with a real example?"

**Options:**
- Yes, happy to
- Maybe, depends on timing
- Probably not
- No

*This is deliberately not "would you use a tool" — it's consent to go deeper on a real workflow, which is what Stage 2 is for.*

---

### Branching logic
**Recommendation: none.** Keep the form fully linear with no sections or skip logic — that maximizes completion rate for a 2-minute form and every question is short enough to answer regardless of the previous answer. Do the filtering *after* the fact: use the Q6 (severity) and Q7 (willingness) answers to decide who gets invited to the Stage 2 form, rather than branching inside the form itself. That keeps Stage 1 simple to build, simple to fill out, and simple to analyze row-by-row.

---

## B. WhatsApp distribution message

> Hey everyone — doing a bit of personal research and would love 2 minutes of your time.
>
> I'm trying to understand what actually eats up founders' and operators' time/money day to day — the boring, recurring stuff, not the big strategic problems. Not selling anything, not pitching a product, just collecting real examples.
>
> If you can, think of ONE specific task or process in your business that's annoying, recurring, and still not properly solved — and answer based on that real thing, not a hypothetical. Takes about 2 mins: [FORM LINK]
>
> Really appreciate it 🙏 happy to share what I learn back with the group once I've got enough responses.

*Notes on why this works:* it names a concrete ask ("2 minutes"), explicitly disclaims a pitch, tells people to anchor on something real rather than brainstorm in the abstract, and offers reciprocity (sharing findings back) without promising anything that sounds like a product teaser.

---

## C. Stage 2 — Follow-up questionnaire (for promising responses only)

Send this only to people who scored high on severity/frequency/spend in Stage 1 and answered "Yes" or "Maybe" to Q7. Frame it as a continuation of the same research, not a new ask. This one can run 5–7 minutes since it's going to a self-selected, already-interested group.

### Form title
**A few more details on the problem you mentioned**

### Form description
> Thanks for flagging that earlier — this goes a bit deeper so I understand exactly how it works in practice. Still just research; nothing to buy or sign up for.

**Questions:**

1. **Exact workflow (Paragraph, required):** "Walk me through exactly what happens, step by step, from start to finish, the last time this came up. (e.g. 'Every Friday, X pulls data from Y, emails Z, waits 2 days, then manually reconciles in Excel.')"

2. **Who performs it (Short answer, required):** "Whose job is this, specifically? (role/title — not name required, unless you're happy to share it)"

3. **Frequency, precisely (Short answer, required):** "How many times per week/month does this specific workflow run?"

4. **Hours per occurrence (Multiple choice, required):** "Roughly how long does ONE occurrence take, start to finish?" [<15 min / 15–60 min / 1–3 hrs / 3–8 hrs / more than a day]

5. **Current tools (Checkboxes + Other, required):** "What tools/software/people are involved right now?" [Excel or Sheets / Email / WhatsApp / Specific software (name it) / An outsourced person or agency / Nothing formal, ad hoc / Other]

6. **Monthly cost (Short answer, required):** "Roughly what does this cost per month in total — software, contractor fees, agency fees? (A rough number or range is fine — this stays confidential.)"

7. **Consequences when it goes wrong (Paragraph, required):** "What actually happens when this gets missed, delayed, or done badly? Be concrete — lost money, an angry client, a compliance risk, wasted hours redoing it, etc."

8. **Prior attempts to fix it (Paragraph, required):** "Have you or anyone tried to solve or improve this before? What was tried, and why didn't it stick?"

9. **Permission to study it (Multiple choice, required):** "Would you be open to me looking at a real (anonymized/redacted if needed) example of this — an actual spreadsheet, email thread, or report — just to understand the shape of the problem?" [Yes, I can share a real example / Yes, but I'd need to redact details first / Not comfortable sharing an example, but happy to describe it / No]

10. **Early pilot interest (Multiple choice, required):** "If I ended up trying to solve this manually for a small group first (before any software exists), would you be interested in being one of the first to try that with me?" [Yes, interested / Maybe, tell me more when it's ready / Not right now / No]

---

## D. Analysis framework — scoring the problem, not an "idea"

Score each **distinct problem** (after you've clustered similar responses together — see Section F) on the following independent 1–5 dimensions. Do not combine them into one composite "score" — keep them side by side so you can see *which kind* of promising (or unpromising) a problem is.

| Dimension | What it measures | How to derive it from the survey |
|---|---|---|
| **Frequency** | How often the problem recurs | Map Q2 (Stage 1) to 1–5: monthly-or-less = 1, a few times/month = 2, weekly = 3, a few times/week = 4, daily = 5 |
| **Severity** | How much it hurts when it happens | Use Q6 (Stage 1) directly, 1–5, averaged across respondents reporting the same problem |
| **Time/cost (effort)** | Human hours burned | Map Q3 (Stage 1) bands to 1–5 (<2hr=1 … 40+hr=5); cross-check with Stage 2 Q4 hours-per-occurrence × frequency |
| **Existing spending** | Revealed willingness to pay, evidenced by money already spent | Map Q5 (Stage 1): nothing paid = 1, <₹10k = 2, ₹10–50k = 3, >₹50k = 4/5 depending on company size; "not sure/prefer not to say" — flag separately, don't score as zero |
| **Workaround intensity** | How much manual scaffolding already exists around the problem | Score by what Q4 (Stage 1) reveals: "let it slide" = 1, manual/ad hoc = 2, spreadsheet system = 3, dedicated tool in use = 4, dedicated hire/agency = 5 (a strong workaround means people care enough to build a process, which is a *good* signal even though it sounds like "already solved") |
| **Willingness to pay** | Not "would you pay for X" (never asked directly) but inferred from behavior: existing spend + effort invested + how they answered Stage 2 Q6/Q10 | Combine existing spending score with pilot-interest signal (Stage 2 Q10): "Yes, interested" in a pilot for something they're already paying for = high; "no" despite high spend = re-check for someone else owning the budget |
| **# of independent companies reporting it** | Whether this is one person's idiosyncratic pain or a pattern | Count distinct companies (not respondents — a company with 3 people all mentioning the same thing is still 1 data point) whose Q1 answer clusters into the same problem category |
| **Ease of reaching potential customers** | Practical go-to-market reality, independent of how painful the problem is | Score manually 1–5 based on: is this problem concentrated in an identifiable segment (e.g. "D2C brands with 3PL logistics") you can reach through TiE/LinkedIn/existing network, or is it scattered across unrelated industries with no common channel? |
| **Technical feasibility** | Can *you*, with your team's skills and time, build something that addresses this in a reasonable timeframe | Score manually 1–5 based on your own assessment — this is the one dimension the survey cannot tell you anything about |

**How to interpret this — and how not to:**

- A high score on Frequency + Severity + Existing Spending + multiple independent companies is the strongest combination — it means people already behave as if the problem matters (not just say it matters).
- A high Workaround Intensity is not disqualifying. A problem nobody has built any workaround for is often a problem that isn't actually that painful yet — the workaround itself is often the best evidence that the pain is real. What matters is whether the workaround is *fragile, expensive, or resented*, which Stage 2 Q7 (consequences when it goes wrong) and Q8 (prior attempts) will tell you.
- Low Existing Spending combined with high Severity is worth a second look, not an automatic reject — it can mean either "nobody's built a solution to sell them yet" (opportunity) or "it's not actually as painful as they said" (self-report inflation). Stage 2's request to see a real example is what disambiguates these two.
- **What this survey alone cannot prove:** that anyone will pay for a piece of software specifically, that the willing pilot group is representative of the broader market, or that a workflow described in an interview generalizes to how other companies actually run it. A survey plus a handful of interviews tells you a problem is real and that some people are behaviorally invested in it — it does not tell you that a SaaS/AI product is the right shape of solution, that you can price it profitably, or that you can acquire customers at reasonable cost. Those require the "solve it manually for a few people first" step you've already built into Stage 2 Q10, and should be treated as a separate, later validation phase — not skipped because the survey looked encouraging.

---

## E. Spreadsheet / CSV structure

Use three linked sheets/tabs rather than one flat sheet — the raw response data, the follow-up data, and a clustered "problems" view where the actual scoring happens.

**Tab 1 — `Stage1_Responses`** (one row per form submission)

```
Response_ID, Timestamp, Respondent_Email, Company_Name, Problem_Description_Raw,
Problem_Cluster_ID, Frequency_Raw, Frequency_Score, Time_Effort_Raw, Time_Effort_Score,
Workaround_Raw, Workaround_Intensity_Score, Money_Spent_Raw, Money_Spent_Score,
Severity_Score, Willingness_Raw, Willingness_Score, Invited_To_Stage2, Notes
```

**Tab 2 — `Stage2_Responses`** (one row per follow-up submission, linked back to Stage 1)

```
Response_ID, Linked_Stage1_Response_ID, Company_Name, Contact_Person, Role,
Exact_Workflow_Description, Who_Performs_It, Frequency_Precise, Hours_Per_Occurrence,
Hours_Per_Month_Estimated, Current_Tools_Used, Monthly_Cost_INR,
Consequences_When_Wrong, Tried_Solving_Before, Permission_To_Study_Workflow,
Pilot_Interest, Notes
```

**Tab 3 — `Problem_Clusters`** (one row per *distinct problem*, not per respondent — this is where your scoring framework from Section D actually lives)

```
Cluster_ID, Cluster_Name, Short_Description, Number_Of_Companies_Reporting,
Company_List, Avg_Frequency_Score, Avg_Severity_Score, Avg_Time_Effort_Score,
Avg_Money_Spent_Score, Avg_Workaround_Intensity_Score, Willingness_To_Pay_Signal,
Reach_Score, Feasibility_Score, Stage2_Responses_Count, Real_Example_Obtained_YN,
Decision, Decision_Notes
```

`Decision` should be a simple controlled value: `Investigate further`, `Park`, or `Reject` — not a numeric composite score, per your own instruction to avoid a fake "idea score."

A ready-to-use CSV template with these exact headers (three separate files, one per tab) is attached below.

---

## F. Most important — the honest read

**1. Which 3 questions are likely to produce the most valuable information**

- **Q1, the open-ended anchor question.** Everything else on the form is just structured metadata *about* whatever problem Q1 surfaces. If Q1 doesn't surface something real and specific, no amount of frequency/severity scoring on a vague answer will save it.
- **Q5, existing money spent.** This is the closest thing to a lie detector in the whole form — people will happily rate something a "5" for severity while paying nothing to fix it. Revealed spend is far harder to fake than a self-reported pain rating.
- **Stage 2, Q7 (consequences when it goes wrong) and Q8 (prior attempts).** Together these tell you whether the pain is real-but-tolerated (low urgency) or real-and-actively-fought (high urgency), and whether previous attempts failed for reasons you could actually fix — this is usually where the most concrete, usable insight shows up.

**2. Which questions were deliberately excluded, and why**

- *"Would you use a tool/app/AI for this?"* — excluded per your own instruction; it's a leading hypothetical that reliably gets a polite "yes" regardless of real intent.
- *A NPS-style "how likely are you to recommend a solution" question* — same problem, one level removed; it asks people to imagine a solution that doesn't exist yet.
- *A dedicated "budget" or "how much would you pay" question* — direct willingness-to-pay questions are notoriously unreliable (people anchor on round numbers or what they think you want to hear); existing spend (Q5) and pilot interest (Stage 2 Q10) are used instead as behavioral proxies.
- *A separate "how many people does this affect" headcount question* — interesting but not decision-relevant at screening stage, and it would have pushed the form past 7 questions for marginal value.
- *A dedicated "industry/sector" dropdown* — tempting for segmentation, but in a TiE network most people already know each other's sector, and it's recoverable later from the company name during clustering, so it wasn't worth a question slot.

**3. Response patterns that would make you investigate a problem further**

- The same underlying problem shows up, described independently and in different words, across 4+ *different companies* — not 4 people at the same company.
- Frequency is weekly-or-more AND severity is 4–5 AND there's already real money (not just time) being spent on a workaround.
- In Stage 2, at least 2–3 respondents can point to a concrete, recent, bad consequence (a specific missed deadline, a specific financial loss, a specific client complaint) rather than a vague "it's annoying."
- At least one respondent is willing to hand over or walk through a real example (spreadsheet, email thread, process doc) rather than only describing it in the abstract.
- Multiple respondents independently mention having *tried and abandoned* a fix — this usually means the market has already validated that the problem is worth solving; it's the solution attempts that failed, which is different and more useful information than "nobody's tried."

**4. Response patterns that would make you reject a problem**

- High severity ratings but zero existing spend, zero real workaround, and vague/inconsistent descriptions across respondents — this usually means "mildly annoying and easy to describe as painful in a survey," not actually urgent.
- Only one company reports it, even after several rounds of outreach — could still be real, but it's a company-specific quirk, not a market.
- When you ask for a real example in Stage 2, everyone hedges, delays, or declines — reluctance to show you the actual mess is a strong tell that the described severity was exaggerated, or that the problem is too sensitive/regulated to build a product around easily.
- The "consequences when it goes wrong" answers are abstract ("it's inefficient," "it's a headache") rather than concrete and specific.
- The problem, once described precisely, turns out to be a symptom of something un-fixable by software (a people/management problem, a pricing problem, a regulatory problem) rather than a workflow/data/coordination problem.

**5. How many responses to aim for before selecting problems for deeper validation**

Aim for **40–60 Stage 1 responses** before doing your first real clustering pass. Below ~30, clustering is mostly noise — you won't reliably tell "one loud person's pet peeve" from "a real pattern." Once you're clustering 40+, you should expect a handful of clusters (typically 3–6) with 3+ independent companies each; those are your shortlist. From there, aim to get **8–12 completed Stage 2 responses spread across your top 2–3 clusters** (not all piled on one) before deciding which 1–3 problems to commit real time to — Stage 2's depth matters more than its volume, since its job is to disqualify or confirm, not to generate statistical confidence.

---

*Files delivered alongside this document: `stage1_responses_template.csv`, `stage2_responses_template.csv`, `problem_clusters_template.csv` — pre-built with the exact column headers from Section E so you can start dropping in responses immediately.*
