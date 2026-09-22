# Track A / Track B — Second Market Pass
**16 September 2026 · Evidence only · No ranking, no recommendation**

Constraints 7 (non-technical buyer) and 8 (demonstrated spend) held fixed throughout. Track A relaxed only async sales. Track B relaxed only technical moat.

**Result: one survivor per track, not five.** The reason is arithmetic and it's in section 5 — it is not the constraint I named last time.

---

# TRACK A — moat kept, sales calls allowed

## A1. Safety data sheet authoring / GHS classification — **SURVIVES**

**Buyer:** EHS manager, regulatory affairs or compliance officer at a chemical formulator, manufacturer, or anyone who *produces* a mixture and must ship it with a compliant SDS. Non-technical in the software sense.

**Why they pay:** if you blend or repackage chemicals, you are legally required to author a GHS-compliant safety data sheet for every product, in every destination jurisdiction's format. Getting the classification wrong is a regulatory exposure, not an inconvenience.

**Verified prices** ([SDS Manager pricing](https://sdsmanager.com/us/pricing/)):

| Product line | Price |
|---|---|
| ExactSDS — pay as you go | **$199 per SDS authored** |
| ExactSDS — Basic | **$199–$1,990/yr** (1–499 SDSs) |
| ExactSDS — Standard | **$1,499–$9,299/yr** (15–300 SDSs) |
| ExactSDS — Enterprise | Custom (300+) |
| DirectSDS (distribution) | $47–$923/month by volume |
| EHS Solutions | $9.99/employee/month |

**Can the buyer DIY?** No. GHS classification is a rules engine over mixture composition, hazard thresholds and jurisdiction-specific formats. A safety manager cannot build it and would not want to own the liability of getting it wrong.

**Moat:** the classification rules, not the document library. This is the important distinction — the 17M-document SDS *search* database is a dataset moat a solo founder cannot bootstrap, but **authoring doesn't need it.** Authoring needs GHS rule logic, which is published, learnable, and enormously tedious to implement correctly. That is precisely the shape of moat your background is suited to.

**Acquisition:** EHS trade publications, regulatory-change SEO, chemical industry associations. 30-day trial without a credit card exists on the management tiers, so the category tolerates trials; the authoring tiers are more consultative.

**Likely ACV:** $1,500–$9,300 recurring.

**Trap:** regulatory correctness liability. If your classification is wrong and a product ships with a bad SDS, that is a real exposure — the same category of risk you ruled out in this conversation's first constraint. Also jurisdiction sprawl: US OSHA HazCom, EU CLP, UK, Canada WHMIS, and each has its own revision cycle.

## A2. SDS library management — **KILLED**
Verified spend ($468/yr Basic; DirectSDS $47–$923/mo). **Killed under your rule on huge proprietary datasets:** the product's value is a searchable library of **17M+ safety data sheets**. That corpus is the entire moat and a solo founder cannot assemble it.

## A3. Unclaimed property / escheatment — **KILLED**
Real money, verified: [Vendr reports Sovos at a **median annual contract value of $26,395**, range $9,177–$56,592](https://www.vendr.com/marketplace/sovos), with small-to-mid-market deals at $15,000–$60,000/yr. Moat is 50-state dormancy rules and reporting formats — genuinely good. **Killed on enterprise sales:** contract values in that band, negotiated with 20–35% discounting off initial proposals, are bought by corporate finance teams through procurement. That requires a sales function, not a longer sales cycle.

## A4. Self-storage management software — **KILLED**
Verified spend ([SoftwareConnect roundup](https://softwareconnect.com/roundups/best-self-storage-software/)): market range **$1,500–$10,000/yr**, enterprise $100,000+. Named prices: Yardi Breeze from $1/unit/month, 6Storage from $0.75/unit/month, Unit Trac $30/month + $0.70/unit, Storeganise **$90/month annually** for 1–100 units. Buyer non-technical. **Killed on moat:** this is property management software for a vertical. No rules engine, no regulatory content, no proprietary data. Also demo-gated almost universally, so it fails Track A's own premise of having something worth the call.

## A5. Veterinary practice management — **KILLED**
Partial evidence: $150–$1,500+/month, per-user $50–$200/month, legacy server systems $5,000–$20,000 upfront. **Killed on two counts:** no technical moat (it's scheduling, records and billing), and the category is entrenched behind large incumbents. I also could not verify named vendor prices or any self-serve path, which fails your evidence standard on its own.

---

# TRACK B — async kept, moat relaxed

## B1. DOT compliance for owner-operators and small fleets — **SURVIVES**

This is the best-evidenced market in either pass. [TenFour publishes a full competitive cost comparison](https://www.tenfourcompliance.com/compare) with **16 named vendors and exact annual prices** for one truck, one driver, twelve months:

| Provider | Annual | Sales model |
|---|---|---|
| TenFour | **$1,188** | Self-serve |
| Safe Haul Solutions | $1,244 | Self-serve |
| Vertical Identity | $1,297 | Self-serve |
| TruckDocsAI | $1,331 | Self-serve |
| FleetDrive 360 | $1,351 | Self-serve |
| OOIDA Business Services | $1,393 | Self-serve |
| DOT Compliance Group | $1,410 | Self-serve |
| DotFleet Compliance | $1,428 | Self-serve |
| DOT Docs | $1,589 | Self-serve |
| J. J. Keller | $1,732 | Quote |
| DOT Compliance Company | $1,925 | Self-serve, per-filing $160–$300/doc |
| Trucksafe Compliance+ | $2,380 | Self-serve |
| AIST Safety Consulting | $3,700 | Quote |
| Start 4 Truckers | $4,004 | Quote |
| SafeRoad Compliance | $7,364 | Self-serve (10 drivers) |
| Foley / Simplex | Quote only | Quote |

**14 of 16 publish self-serve pricing.** Per-driver rates across the market run $24–$49/month.

**Buyer:** owner-operator or small fleet owner running 1–6 trucks. About as far from a software engineer as a buyer gets.

**Why they pay:** driver qualification files, random drug and alcohol testing consortium membership, FMCSA Clearinghouse queries, UCR, MCS-150, BOC-3, IFTA. Failure means being placed out of service.

**Defensibility available (moat relaxed, but not absent):** FMCSA rule knowledge, filing-deadline logic, and — critically — **specialisation**. Note what this market actually is: document-expiry tracking with reminders, narrowed to one regulated vertical and wrapped in domain rules. That's the same product category as generic expiry trackers, which I killed last pass for having no defensibility. **Specialisation is what converts it from a commodity into a business.** That's a transferable structural lesson regardless of what you choose.

**Trap — two of them, and both are real:**
1. **The consortium and Clearinghouse components require registration as a Consortium/Third-Party Administrator.** That's a licensing operation, which your own kill rules exclude. There is an unlicensed wedge — pure DQF document software (FleetDrive 360, TruckDocsAI, DOT Docs live there) — but the comparison table shows bundles including consortium win on completeness, so a software-only entrant starts structurally behind.
2. **Price convergence.** Nine of sixteen vendors sit between $1,188 and $1,589 for substantively the same thing. Tight clustering like that is what a commoditised market looks like, and it means the next entrant competes on acquisition cost, not product.

## B2. Generic document / credential expiry tracking — **KILLED (again)**
Verified self-serve pricing from the prior pass (Expiration Reminder: $528 / $1,068 / $1,932 / $3,768 per year, no credit card trial). **Killed under your rule that defensibility cannot be "better marketing/SEO."** With the moat constraint relaxed, Track B still requires defensibility from workflow, data, integrations, distribution or specialisation. Generic expiry tracking has none — which is exactly why B1 exists as a separate, viable market.

## B3. Self-storage — **KILLED on async.** Demo required across essentially every vendor; no self-serve path found.

## B4. Veterinary — **KILLED.** No verified self-serve purchasing, entrenched incumbents, no defensibility.

## B5. Accounting practice workflow — **KILLED (carried over).** Real spend, right buyer, but ten-plus funded incumbents and no defensibility beyond feature parity.

---

# 4. Do certified payroll and COI still look structurally attractive?

Yes, and this pass sharpened why — by giving each a near-identical comparator.

**Certified payroll now looks structurally better than it did**, because DOT compliance is its closest twin and shows what the mature version of that market looks like. Both serve small non-technical operators under federal rules; both are document-and-filing compliance; both sit around $1,200/yr entry. The difference is **price dispersion**. DOT compliance has sixteen vendors clustered within $400 of each other — commoditised. Certified payroll still shows wide dispersion: software at $49–$300/month against managed services at $1,000–$5,000/month. **A market where the same job is priced across a 20x range has not settled yet.** That gap is where a differentiated entrant lives, and it is closed in DOT compliance and open in certified payroll.

**COI tracking holds its position but did not improve.** The documented $40,000–60,000/yr manual cost remains the single best-quantified budget line found across all research. Six-plus established competitors remains the standing objection, and nothing in this pass changed it either way.

**Neither was displaced.** SDS authoring is a genuine third option on Track A with a different risk profile — better moat, worse liability. DOT compliance is a genuine fourth on Track B with the inverse — proven async motion, weaker defensibility and a licensing wall.

---

# 5. The constraint actually blocking us — and it isn't the one I named last time

Last pass I said the tension was constraint 6 (moat) against constraint 4 (async). That was incomplete. Running both tracks separately exposed the real wall, and it's **constraint 5 — "a small number of customers is preferable to hundreds."**

Look at what the verified ACVs do:

| ACV band | Sales motion actually observed | Customers needed for $200k/yr |
|---|---|---|
| **$1,000–$2,000** | Self-serve works (DOT compliance: 14 of 16 vendors) | **100–200** |
| **$1,500–$10,000** | Demo-gated (self-storage, SDS authoring, COI mid-tier) | 20–130 |
| **$25,000+** | Procurement, negotiated discounts (Sovos: $26,395 median) | 8 |

**Async purchasing and high ACV are inversely related, with no observed exceptions.** Every market where buyers sign up without talking to anyone prices at $1,000–2,000/yr, because that is the ceiling at which a non-technical buyer will commit unseen. Every market with ACV high enough to need only a few dozen customers is gated behind a demo, and the ones high enough to need only a handful are gated behind procurement.

So the three constraints — async sales, high ACV, few customers — form an over-determined set. **You can have any two.**

- Async + few customers → requires ACV above $10,000, which nobody sells unseen. **Not observed anywhere.**
- Async + high ACV → not observed; the async ceiling is about $4,000 (Expiration Reminder Enterprise).
- **Async + low ACV + many customers** → DOT compliance, expiry tracking, certified payroll software tier. Real and verified.
- **High ACV + few customers + demos** → COI professional tier, SDS authoring, unclaimed property. Real and verified.

Constraints 7 and 8 are not the problem — they were correct all along and they are what killed the previous three ideas. The problem is that you have asked for a business with the customer count of an enterprise product and the sales motion of a self-serve one, and nothing in fourteen investigated markets does both.

**The relaxation that opens the most ground is constraint 5.** Accepting 100–200 customers at $1,200–2,000/yr keeps async sales, keeps the non-technical buyer, keeps recurring revenue, and keeps demonstrated spend — it only costs you the preference for a small customer list. Relaxing constraint 4 instead (accepting demos) opens the $5,000–10,000 band and lets you stay small, at the cost of a sales motion you said you don't want.

That's the trade. It is a real trade, not an artefact of how I searched, and I'd rather hand it to you than pick for you.

---

**Standing at four verified markets after two passes:** certified payroll, COI tracking, SDS authoring, DOT compliance for small fleets. Each has published prices, named vendors, a non-technical buyer and a documented reason the buyer cannot self-serve the work. Each also has a specific, named trap. The evidence is in the tables above; the choice is yours.
