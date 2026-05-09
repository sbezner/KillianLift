# Tooling and Capital Expense

## 1. Summary

Total capex to ship the Smart Kit (Phase 1 and 2): **$73,500**.
Total capex to add the full Killian Lift (Phase 3): **+$125,000**.

Cumulative: $198,500 to be in production with both products at 5K kits / 1K lifts annual run rate.

## 2. Phase 1 (Bench prototype, Q2-Q3 2026)

| Item | Cost |
|---|---|
| 3D printer filament + resin | $300 |
| Hand tools and bench equipment Bez may already have | $0 (sunk) |
| Initial PCBAs (5 sets, each MCU + supervisor + FET) | $1,200 |
| Off-the-shelf motor + gearbox samples (3 candidates) | $750 |
| Off-the-shelf brake samples (2 candidates) | $300 |
| Load cell samples (2 candidates) | $250 |
| Tilt sensor samples | $150 |
| Bracket prototype laser cuts (2 iterations) | $200 |
| Wire harness fabrication (cable + connectors) | $250 |
| Existing ESP32 dev kits and instrumentation Bez owns | $0 |
| **Phase 1 capex** | **$3,400** |

## 3. Phase 2 (Pilot to first production, Q3-Q4 2026)

### Tooling

| Item | Cost | Lead time | Owner |
|---|---|---|---|
| Battery sled injection mold (PA6-GF30, hardened steel for 1M shots) | $14,000 | 8 weeks | Killian (mold lives at CM) |
| Pendant housing injection mold (ABS+PC, hardened steel) | $9,500 | 8 weeks | Killian |
| Control box extrusion die (6063-T5) | $4,000 | 4 weeks | Killian |
| Bracket laser-cut + bend program | $0 (no hard tooling) | 1 day | n/a |
| Powder coat racks for bracket | $400 | 1 week | CM |
| Final-test fixture (motor dyno) | $4,500 | 4 weeks | Killian |
| Final-test fixture (load cell calibration with traceable masses) | $2,800 | 4 weeks | Killian |
| Final-test fixture (pendant function) | $1,200 | 2 weeks | Killian |
| ESD-safe workbench for kit final assembly | $2,500 | 1 week | Killian or 3PL |
| **Phase 2 tooling subtotal** | **$38,900** | | |

### Inventory

| Item | Cost | Notes |
|---|---|---|
| Initial inventory of motors (200 units at $82) | $16,400 | 90-day buffer |
| Initial inventory of gearboxes (200 units at $98) | $19,600 | 90-day buffer |
| Initial inventory of load cells (100 units at $68) | $6,800 | 90-day buffer |
| Initial inventory of brakes (100 units at $68) | $6,800 | 90-day buffer |
| **Phase 2 inventory subtotal** | **$49,600** | (offsets first revenue) |

### Other

| Item | Cost |
|---|---|
| FCC pre-compliance lab time (2 days) | $4,500 |
| FCC formal test for radio module | $0 (use pre-cert module) |
| FCC SDoC certification (Subpart B) | $1,500 |
| CE pre-compliance | $5,000 |
| EU Declaration of Conformity preparation (lawyer) | $2,000 |
| Operator manual professional layout + translation | $4,500 |
| Initial product liability insurance bind | $8,000 |
| **Phase 2 other subtotal** | **$25,500** |

**Phase 2 total capex (excluding inventory which becomes COGS): $64,400.**
**Phase 2 working capital (inventory): $49,600.**

## 4. Phase 3 (Volume production, Q1 2027 onward)

### Tooling for full lift

| Item | Cost | Lead time |
|---|---|---|
| Cast aluminum base pattern + core boxes | $22,000 | 10 weeks |
| Welding fixture for mast section assembly | $8,000 | 6 weeks |
| Welding fixture for carriage and outrigger arms | $4,500 | 6 weeks |
| Powder coat hangers for full-lift base + mast | $1,200 | 2 weeks |
| Final-test fixture for full lift load test (125% x 10 min hold) | $11,000 | 8 weeks |
| Final-test fixture for tilt cutoff verification | $3,500 | 4 weeks |
| Final-test fixture for brake holding test | $4,000 | 4 weeks |
| Inspection and shipping equipment (carton, foam dies, pallet) | $2,500 | 4 weeks |
| **Phase 3 tooling subtotal** | **$56,700** |

### UL listing path (decision in Phase 2-3)

| Item | Cost |
|---|---|
| UL 60204-1 evaluation for full lift | $14,000 |
| UL 1004 evaluation for motor (vendor responsibility, not Killian capex) | $0 |
| UL 2580 cell-pack evaluation (battery vendor responsibility) | $0 |
| Application fees and follow-up | $4,000 |
| **UL listing subtotal** | **$18,000** |

### Inventory step-up

| Item | Cost |
|---|---|
| Step inventory to 5,000 kit run rate | $40,000 |
| Step inventory to 1,000 full lift run rate | $100,000 |
| **Phase 3 inventory subtotal** | **$140,000** |

### Other

| Item | Cost |
|---|---|
| Brand and trademark professional clearance + filings | $6,000 |
| Patent applications (3 provisional, see `06-ip-and-legal/`) | $9,000 |
| Operator video production (12 min, professional) | $8,000 |
| Trade show presence at AHR Expo or World of Concrete | $25,000 |
| **Phase 3 other subtotal** | **$48,000** |

**Phase 3 total capex (excluding inventory): $122,700.**
**Phase 3 working capital (inventory): $140,000.**

## 5. Cumulative

| Phase | Capex (tooling + other) | Inventory (working capital) | Cumulative capex | Cumulative WC |
|---|---|---|---|---|
| 1 | $3,400 | $0 | $3,400 | $0 |
| 2 | $64,400 | $49,600 | $67,800 | $49,600 |
| 3 | $122,700 | $140,000 | $190,500 | $189,600 |

## 6. Funding Implications

The Smart Kit can be self-funded at Phase 1 ($3,400). Phase 2 ($64k tooling + $50k inventory = ~$115k) is the first real raise or self-fund decision.

If kit pre-orders or pilot revenue covers Phase 2 ($115k), no outside capital is needed.
If not, Phase 2 is a $150k seed round (with reserve) to ship 500 units and validate demand.

Phase 3 ($122k capex + $140k inventory = $262k) coincides with the full lift launch and the first rental fleet conversations. This is naturally a larger raise (typical $1M to $3M Series A) or self-funded if the kit gross margin and volume are strong (~$200k of contribution margin per 500 kits at $400 contribution each).

## 7. What's Not in This Plan

- **No factory of our own.** All production is contracted. Killian owns tooling; CMs own labor and floorspace.
- **No retail packaging design or marketing photography.** These are absorbed into Phase 2 marketing budget elsewhere.
- **No software development capex.** Cloudflare costs are sub-$50/mo and scale to revenue. Mobile app development is a separate line item in marketing.
- **No physical office.** Killian is run remotely; the 3PL is the physical address for inbound/outbound.

## 8. Key Decisions for Bez

1. **Self-fund Phase 2 or raise?** Self-funding requires $115k of operator capital. Recommendation: self-fund through pre-orders if possible; preserves equity and decision authority. Use a "founders pre-order" page on energizedengines.com offering kit at $599 (vs $699 retail) to first 200 customers, payment up-front.
2. **CM contract terms.** Insist on owning all tooling and having freedom to second-source. Recommendation: pay for tooling outright at the first PO; do not let CM amortize tooling into unit price (this locks you in).
3. **UL pursuit timing.** Apply for UL listing on the kit by Q1 2027. Defer full lift UL to Q3 2027.
4. **Inventory financing.** $190k of inventory at peak. Vendor terms (30-day Net) plus consignment with the 3PL can reduce cash tied up.
