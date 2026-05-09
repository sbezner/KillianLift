# Pricing and Margin

## 1. Pricing Architecture

| SKU | Retail | Wholesale | FOB Cost | Gross Margin (Retail) | Gross Margin (Wholesale) |
|---|---|---|---|---|---|
| Killian Smart Kit (KSK-R250 base) | $699 | $520 | $200 (volume) | 71% | 62% |
| Killian Smart Kit Pro (KSK-R250-PRO) | $849 | $640 | $230 (volume) | 73% | 64% |
| Killian Lift v1 (full lift) | $3,500 | $2,400 | $1,150 (volume) | 67% | 52% |
| Telemetry add-on board (post-sale) | $129 | n/a | $24 | 81% | n/a |
| Replacement bracket (any host) | $69 | n/a | $14 | 80% | n/a |
| Replacement pendant | $79 | n/a | $30 | 62% | n/a |
| Service (Pro tier) | $5/device/month | n/a | ~$0.50/device/month (cloud) | 90% | n/a |
| Service (Fleet tier) | $12/device/month | n/a | ~$1.20/device/month (cloud + support overhead) | 90% | n/a |
| Cellular service (LTE-M data) | $5/device/month | n/a | $2.50/device/month (carrier) | 50% | n/a |

FOB cost includes direct material, direct labor, and allocated factory overhead. Volume cost assumes 5,000 kits / year and 1,000 full lifts / year.

## 2. Cost Structure

### 2.1 Killian Smart Kit unit economics (volume target)

| Cost item | $ per kit |
|---|---|
| Direct material | $130 |
| Direct labor | $14 |
| Factory overhead | $26 |
| Inbound freight, duties | $8 |
| Pack and ship to 3PL | $4 |
| Warranty reserve (1.5%) | $10 |
| Royalties (none) | $0 |
| **FOB factory cost** | **$192** |
| Outbound shipping to customer | (paid by customer) |
| Channel cost (direct, no distributor) | $0 |
| Payment processing (Shopify, ~3%) | $21 |
| **Total cost to deliver to customer** | **$213** |
| **Retail price** | **$699** |
| **Contribution margin per kit** | **$486** |

At 5,000 kits per year, kit revenue = $3.5M, kit contribution margin = $2.43M. At 80% to 90% utilization of contribution margin to fixed costs, this segment is durably profitable starting in Phase 2.

### 2.2 Killian Lift v1 unit economics (volume target)

| Cost item | $ per lift |
|---|---|
| Direct material | $920 |
| Direct labor (final assembly + factory test) | $80 |
| Factory overhead | $130 |
| Inbound freight, duties | $40 |
| Pack and ship to 3PL | $20 |
| Warranty reserve (2%) | $40 |
| **FOB factory cost** | **$1,230** |
| Channel cost (direct fleet sale) | $200 |
| Payment processing | $35 |
| **Total cost to deliver to customer** | **$1,465** |
| **Retail price (direct contractor)** | **$3,500** |
| **Wholesale price (rental fleet)** | **$2,400** |
| **Contribution margin per lift, retail** | **$2,035** |
| **Contribution margin per lift, wholesale** | **$935** |

### 2.3 Service unit economics (Pro tier, $5/month)

| Cost item | $ per device per month |
|---|---|
| Cloudflare Workers + KV + D1 + R2 | $0.30 |
| Mobile app maintenance and feature work (allocated) | $0.10 |
| Support overhead (allocated) | $0.10 |
| **Total cost** | **$0.50** |
| **Revenue** | **$5.00** |
| **Contribution margin** | **$4.50** (90%) |

### 2.4 Cellular service unit economics ($5/month)

| Cost item | $ per device per month |
|---|---|
| LTE-M carrier (1clickconnect, Hologram, or T-Mobile IoT) | $1.80 |
| Connectivity overhead | $0.30 |
| Support | $0.40 |
| **Total cost** | **$2.50** |
| **Revenue** | **$5.00** |
| **Contribution margin** | **$2.50** (50%) |

## 3. Discount and Promotion Policy

| Channel | Discount | Notes |
|---|---|---|
| Founder pre-order (first 200 kits) | $100 off retail | Sells at $599; ships in Q3 2026 |
| Local Union member | 10% off retail | Verified union number |
| Volume discount (5+ kits) | 5% | Direct online order |
| Volume discount (50+ kits) | 12% | Direct sales conversation |
| Rental fleet pilot (50 unit trial) | 100% (free for 90 days) | Returnable with $0 commitment |
| Rental fleet conversion (>=500 units) | 25% off retail | Multi-year supply agreement |
| Trade show (lead gen) | 5% | Order placed at booth |

The retail price is held firm. Discounts are channel-specific or volume-based.

## 4. Margin Defense

The 67% to 73% gross margins are defensible because:

1. **Custom electronics** (PCBA + firmware) are not commodity. Anyone can buy a motor, but the integrated control box with a load cell, tilt sensor, telemetry, and our firmware is a 12-month engineering effort to clone.
2. **Cloud and dashboard** is a subscription line. Even if competitors ship hardware, they don't have the data.
3. **Brand and trust** in the rental fleet channel takes years to build. First-mover advantage with one fleet creates a 24-month head start.
4. **Cycle data** owned by Killian becomes increasingly valuable for predictive maintenance, enabling a future "warranty extension" upsell at high margin.

## 5. Pricing Tradeoffs Considered

| Option | Pros | Cons | Decision |
|---|---|---|---|
| Kit at $499 | Higher volume, lower psychological barrier | Halves contribution margin, leaves money on table | Reject. Contractors will pay $699. |
| Kit at $999 | Higher unit margin | Lower volume, fewer telemetry data points | Reject. Maximize installed base for network effect. |
| Full lift at $4,500 | Higher margin to compete with R-250 ($7,500) | Slows fleet conversion | Reject. Aggressive on price, win the fleet first. |
| Full lift at $2,500 | Forces fast market share | Brutal margin squeeze, hard to recover capex | Reject. Match Genie SLA at $4,999, undercut R-250 by 50%. |
| Service free forever | Customer love | No SaaS revenue line | Reject. Free standard tier; Pro and Fleet are paid. |
| Service paywall everything | Maximum SaaS revenue | Hurts adoption, hurts NPS | Reject. Free tier covers basic value. |

## 6. Contribution Margin to Fixed Cost Coverage

Phase 2 target fixed costs (Q3-Q4 2026, ~6 months):

| Cost item | Per month | Per 6 months |
|---|---|---|
| Bez salary (drawn from contribution margin) | $12,000 | $72,000 |
| Founder + 1 contract engineer | $14,000 | $84,000 |
| Office, software, miscellaneous | $2,000 | $12,000 |
| Insurance, legal, accounting | $4,000 | $24,000 |
| Cloud and SaaS (telemetry stack) | $200 | $1,200 |
| **Total fixed costs Phase 2** | **$32,200** | **$193,200** |

Required kit volume to cover Phase 2 fixed costs at $486 contribution margin per kit: **400 kits** over 6 months = ~67 kits/month.

This is achievable with Tier 1 outreach alone. The $599 founder pre-order at 200 units pre-funds a third of Phase 2 capex; the remaining 200 to 400 kits at $699 retail in months 3 to 6 cover fixed costs and start building cash reserve.

## 7. Scenario Sensitivity

If kit FOB cost is **$250** (worse than target $192):
- Contribution margin drops to $428 per kit
- Required volume to cover fixed costs: 451 kits over 6 months
- Still achievable but tighter

If kit retail is **$649** (lower than $699):
- Contribution margin drops to $436 per kit
- Required volume: 443 kits
- Acceptable

If both: cost $250 + retail $649:
- Contribution margin: $378 per kit
- Required volume: 511 kits over 6 months
- Marginal; recommend hold price at $699

## 8. Open Items

1. Confirm $5/month Pro tier pricing. Recommendation: keep, but offer free Pro tier for first 6 months to drive adoption.
2. Confirm $12/month Fleet tier. May need flexibility on enterprise contracts (e.g. $8/month at 1000+ units).
3. Cellular reseller margin: should we mark up data more? Recommendation: no, $5/month is fair and doesn't create friction.
4. Contractor financing: should we offer Klarna or Affirm at checkout for the kit? Recommendation: yes for the full lift ($3,500 is in finance territory), no for the kit ($699 is impulse-grade).
