# Sales Channels

## 1. Channel Map

| Channel | Phase 1 (Q3 2026) | Phase 2 (Q4 2026 - Q1 2027) | Phase 3 (Q2 2027+) |
|---|---|---|---|
| Direct online (energizedengines.com Shopify) | Primary, 100% of kits | Primary, ~85% of kits | Primary, ~70% of kits, ~30% of full lifts |
| Direct enterprise sales (rental fleets) | None | Pilots starting | Primary, ~70% of full lifts |
| Distributor / dealer | None | None | Selective, ~10 to 15% of total |
| Trade shows | None | Lead generation | Lead generation + closes |
| Marketplace (Amazon, Home Depot) | None | None | Evaluate, likely no |

## 2. Direct Online (energizedengines.com Shopify)

### 2.1 Why this channel first

- Bez already operates a Shopify storefront for Sumner replacement parts. The customer database overlaps perfectly with kit buyers (R-250 owners ordering replacement cables, sheaves, hand crank handles).
- No new infrastructure required. Add a product page, a checkout flow, a Cloudflare Worker for the kit serial registration, and ship.
- 0% channel commission. 3% Shopify payment processing.
- Fastest time-to-customer-feedback.

### 2.2 Setup

1. New product collection on energizedengines.com: "Killian Lift" with 6 SKUs to start (KSK-R250, KSK-R250-PRO, KSK-R150, KSK-R150-PRO, plus replacement parts).
2. Founder pre-order page with $599 first-200 pricing.
3. Email list segmentation: R-250 buyers vs R-150 vs Series 2000 vs Genie buyers, separate email campaigns.
4. Killian-branded landing page at killianlift.com (subdomain or separate site that links to the energizedengines.com checkout).
5. Cloudflare Worker for device registration and dashboard onboarding.
6. Mobile app (iOS + Android) for BLE provisioning and operator view.

### 2.3 Funnel

| Stage | Volume target Q3 2026 |
|---|---|
| Email opens (announcement) | 6,000 |
| Click to product page | 1,200 |
| Add to cart | 350 |
| Complete checkout | 200 |
| Activate device (cloud connection) | 160 |

### 2.4 Operations

- Orders fulfilled by Houston 3PL within 2 business days.
- UPS Ground or FedEx Ground for kits ($25 to $40 in shipping cost, customer pays).
- LTL freight for full lifts ($150 to $300, customer pays).
- Returns within 30 days no-questions-asked, with $25 restocking fee.
- Warranty 2 years from purchase, RMA via support@killianlift.com.

## 3. Direct Enterprise Sales (Rental Fleets)

### 3.1 Why this channel matters

National rental fleets are ~80% of the long-term revenue opportunity for the full Killian Lift. Sunbelt has ~1,300 branches; United has ~1,400; Herc has ~440. Each fleet typically operates 50,000+ material handling units. Even 10% Killian penetration in 3 years is 5,000+ unit annual run rate.

### 3.2 Approach

Phase 2 (Q4 2026 to Q1 2027):

1. Identify product manager for material lifts in each of: Sunbelt, United, Herc, LGH, plus 2 to 3 regional fleets (e.g. National Lift Equipment, RSC Equipment Rental remnants, Brundage-Bone Equipment).
2. Cold outreach via LinkedIn + warm intro via Bez's energizedengines.com customer network.
3. Initial pitch: 60 minute demo, includes the kit installed on an R-250 they recognize, the dashboard live, and 30 days of telemetry data from real customers.
4. Pilot offer: 50 units free for 3 months. Killian collects telemetry and reports KPIs at 30, 60, 90 days.
5. Pilot KPIs: theft recovery rate, utilization rate, counter return time, customer satisfaction.

Phase 3 (Q2 2027+):

1. Pilot conversion to first 200 to 500 unit PO.
2. Pricing: $2,400 per full lift wholesale, with 12% volume discount above 500 units (effective $2,112).
3. Multi-year supply agreement at 25% discount on retail (effective $2,625 retail / $2,000 wholesale) for >=1,000 unit annual commit.
4. Killian-branded units on the rental counter, with day-rate premium of $5 to $15 over Genie SLA equivalent.

### 3.3 Sales team

Phase 2: Bez does all enterprise sales personally. 5 hours per week.
Phase 3: hire one enterprise rep with rental industry experience. Compensation ~$120k base + 1% of fleet revenue. Target hire: someone formerly at Sunbelt or United in equipment procurement.

## 4. Distributor and Dealer Channel

Selectively opened in Phase 3 if:

- A dealer has organic demand we cannot service (e.g. New England regional with strong Sumner relationships).
- The dealer commits to a minimum annual volume.
- Margin economics work (dealer 25% off retail, our wholesale 35% off retail leaves 10% to dealer).

Initial dealer targets:

| Dealer | Why |
|---|---|
| Cap Rents (Northeast) | Strong industrial rental position |
| Equipment Depot (TX, OK, IN) | Existing forklift and lift dealer |
| Sumner direct (if they want to private-label) | Possible white label deal |
| Toolbarn / ToolNut (online) | Reach for the contractor segment |

Distributor agreements include a price floor (no race-to-the-bottom on Amazon).

## 5. Trade Shows

| Show | When | Cost | Goal |
|---|---|---|---|
| World of Concrete | Jan 2027 | $30k | Lead gen, 200 kit qualified leads |
| AHR Expo | Jan 2027 | $25k | HVAC leads + 1 fleet warm intro |
| MCAA Convention | Mar 2027 | $15k | Mechanical contractor leads |
| Mechanical Hot Expo | May 2027 | $8k | Regional |
| The ARA Show (rental industry) | Feb 2027 | $35k | Rental fleet leads, anchor relationships |

Total Phase 3 trade show budget: ~$113k. Target: 5,000 leads, 500 sales-qualified, 100 deals (kits + lifts).

## 6. Marketplaces (Amazon, Home Depot)

Considered and currently rejected for Phase 1-3.

| Marketplace | Verdict | Reason |
|---|---|---|
| Amazon | No | 15% category fee crushes margin. Brand control loss. Counterfeit risk on a regulated lifting product. |
| Home Depot Pro | Maybe Phase 4 | Rental network is interesting; commercial relationship needed. |
| Lowe's Pro | No | Not the right contractor density |
| Grainger | Phase 4 | After 2 fleet conversions, Grainger industrial sales channel becomes interesting |

## 7. International

Phase 1-3: US only. CE-marked for EU but no formal EU sales operation.

Phase 4 (2028+):

- UK / Ireland via a single distributor
- Canada (low friction, FCC -> IC)
- EU via 1 to 2 country importers, CE marking already done
- Asia Pacific opportunistically

## 8. Marketing Mix

Phase 1 (Q3 2026):

- Email (energizedengines.com list): 60% of marketing effort
- YouTube (install video, demo) : 25%
- Forum / Reddit / Trade publications presence: 15%
- Paid ads: 0%

Phase 2 (Q4 2026 - Q1 2027):

- Email + outbound: 40%
- YouTube: 20%
- Trade press (Mechanical Engineering, ACHR News, ICCWGuide): 15%
- Paid LinkedIn ads (target: rental fleet product managers): 15%
- Industry events (smaller than full trade show): 10%
- Paid ads (Google, Facebook): 0% (not the right buyer)

Phase 3 (Q2 2027+):

- Trade shows: 25%
- Direct enterprise: 25%
- YouTube + content: 20%
- LinkedIn + outbound: 15%
- Trade press: 10%
- Email: 5%

## 9. Open Items

1. Confirm killianlift.com domain and trademark availability before launching marketing.
2. Decide on Shopify plan tier. Recommendation: Advanced ($299/month) for the additional reporting and Workflow Automation needed for industrial customers.
3. Decide on enterprise rep hire timing. Recommendation: hire after the first fleet pilot is signed, not before.
4. Verify trade show budget priorities. World of Concrete + ARA Show are non-negotiable; the rest are optional.
