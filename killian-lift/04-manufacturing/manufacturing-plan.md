# Manufacturing Plan

The Killian Lift and Killian Smart Kit are produced via a contract-manufacturer-led model with selective in-house final assembly. The plan is organized into three phases tied to the product roadmap.

## 1. Phase 1: Bench prototype to pilot run (Q2-Q3 2026)

Volume: 1 prototype, 10 pilot units.

### Smart Kit
- Bez assembles the first 5 kits on the bench at energizedengines.com using off-the-shelf motors, gearboxes, and a hand-bent steel bracket.
- PCBAs: JLCPCB or PCBWay, 5-piece assembled prototype run, 2 week lead time.
- 3D-printed control box housing (PETG or ABS) for fit check; aluminum extrusion ordered for pilot.
- Field test with 10 friendly contractors recruited via energizedengines.com mailing list and HVAC/pipefitter forums.

### Full lift
- Not started in Phase 1. The full lift v1 begins layout in Phase 2.

### Tooling cost in Phase 1: $0 (no tooling, all 3D-printed and machined-from-stock)

## 2. Phase 2: First production run (Q3-Q4 2026)

Volume: 200 to 500 kits, no full lifts yet.

### Contract manufacturer selection criteria

| Criterion | Weight |
|---|---|
| Located in TX, OK, or LA (Bez can drive to plant in <6 hours) | High |
| Experience with industrial assembly + cable harnesses + PCBA integration | High |
| MOQ <= 100 units | High |
| Pricing transparency | Medium |
| Has a UL-listed paint line | Medium |
| Has experience with battery packs (recommended but not required) | Low |

Three target CMs to qualify:
1. **Houston-area: a smaller industrial assembler** (Bez to identify based on existing energizedengines vendor network)
2. **Tijuana / San Diego cross-border**: established for low-volume industrial product (e.g. firms that supply oilfield instrumentation)
3. **Vietnam or Taiwan**: a backup option only if domestic CMs cannot meet pricing for Phase 3 scale

For Phase 2, prefer domestic. The 200-unit pilot is a learning run; supply chain visibility and rapid issue resolution matter more than unit cost.

### Production split

The Smart Kit is sub-assembled by the CM and final-packed by Killian (or a 3PL).

- CM does: PCBA + control box assembly, motor procurement, gearbox procurement, harness manufacture, bracket fabrication and powder coat, kit-of-parts assembly to pre-pack stage.
- Killian does (or 3PL): final test, calibration, label and serialize, box, ship from a 3PL warehouse (Houston).

### PCBA strategy

PCBA done by JLCPCB or NextPCB or PCBWay through 5,000 unit volume. Above 5K, switch to a domestic EMS like Sanmina or Benchmark.

### Tooling cost in Phase 2

| Item | Cost |
|---|---|
| Battery sled injection mold (PA6-GF30) | $14,000 |
| Pendant housing injection mold | $9,500 |
| Mounting bracket laser nest + bend dies (no hard tooling, just programs) | $0 |
| Control box extrusion die | $4,000 |
| Test fixtures (motor, load cell, pendant) | $6,000 |
| Initial inventory of long-lead components (motors, gearboxes) | $40,000 |
| **Total Phase 2 tooling and inventory** | **$73,500** |

## 3. Phase 3: Volume production (Q1 2027 onward)

Volume: 2,000 to 10,000 kits per year, 200 to 1,000 full lifts per year.

### Full lift production

The full lift adds:

- Cast aluminum base (sand cast, low-pressure or gravity die cast). Pattern + core boxes ~$22,000. Tooling break-even at 380 units.
- Larger drum and brake assembly. Tooling minimal because parts are turned from stock.
- Mast section laser-cut and welded sub-assembly. Welding fixture ~$8,000. Standard equipment at any tube fabricator.
- Powder coat line (existing CM)
- Carton, foam, pallet (Uline)

### Tooling cost in Phase 3

| Item | Cost |
|---|---|
| Cast aluminum base pattern + core boxes | $22,000 |
| Welding fixtures for mast and carriage | $8,000 |
| Test fixture for full-lift load test (125% static x 10 min) | $11,000 |
| Battery sled mold revisions (mature versions) | $4,000 |
| Inventory of long-lead components | $80,000 |
| **Total Phase 3 tooling and inventory** | **$125,000** |

### Volume cost target

At 5,000 kits per year and 1,000 full lifts per year:

- Kit FOB cost: drops from $640 to $200 with negotiated component pricing
- Full lift FOB cost: $1,421 (per BOM) drops to ~$1,150 at this volume

These targets are achievable based on motor and gearbox volume break points (motor $50 at 5K vs $82 at 100; gearbox $60 vs $118; load cell $28 vs $68; brake $30 vs $84; PCBAs $45 vs $82 combined).

## 4. Make vs Buy

| Component | Make / Buy | Rationale |
|---|---|---|
| Cast aluminum base | Buy (Eck Industries or domestic foundry) | No core competency in casting |
| HSS mast sections | Buy (Atlas Tube, machined locally) | Commodity steel |
| BLDC motor | Buy (Lin Engineering or similar) | High-volume commodity above 1k units |
| Planetary gearbox | Buy (Apex Dynamics, Neugart) | Commodity |
| Load cell | Buy (Interface Force or Vishay) | Specialty supplier |
| Brake | Buy (Mayr) | Specialty supplier, certified |
| PCBAs | Buy (CM) | EMS handles |
| Pendant | Make (final assembly, programming) + Buy (housing, components) | Killian-specific UI / firmware |
| Battery sled | Make (final integration) + Buy (mold parts, contact metal) | Killian-specific |
| Wiring harnesses | Buy (TE Connectivity-class shop) | Standard practice |
| Cable assembly | Buy (Loos & Co) | Specialty supplier with traceability |
| Final assembly (kit) | Make (Killian or 3PL contract pack) | Quality control + serialization |
| Final assembly (full lift) | Make at CM with Killian QC presence | Quality |
| Calibration and final test | Make (Killian or 3PL) | Critical for warranty |

## 5. Quality Strategy

See `04-manufacturing/quality-and-testing.md` for full QA protocol. Headlines:

- 100% functional test on every kit and every full lift before ship
- 100% load cell calibration on every unit, 5-point traceable
- 100% brake function test
- 1-in-100 destructive sample (cable swage pull test, PCBA solder joint inspection)
- Sample ICT and AOI on all PCBAs at the EMS

## 6. Logistics

- Inbound: components ship to CM (TX or MX). CM does sub-assembly, ships finished kits to Houston 3PL for pack-and-ship.
- Outbound: 3PL ships direct to consumer via UPS Ground (kits) or LTL (full lifts). Order is taken on energizedengines.com via Shopify.
- Returns: managed by 3PL, with Killian QC inspection on warranty returns.

## 7. Key Risks

| Risk | Mitigation |
|---|---|
| Motor vendor single-source | Qualify second source (Mean Well or similar) before Phase 3 |
| Battery cell counterfeit risk | Use OEM packs only; do not source bare cells |
| Cable supplier delivery slip | Stock 90 days of cable at the 3PL |
| FCC / CE delays | Engage test lab early in Phase 2; pre-compliance tests at internal chamber |
| CM going under | Maintain dual-source for high-volume parts; keep tooling owned by Killian, not CM |
| Tariff exposure | Domestic-first sourcing; if MX or VN, factor 25% tariff into pricing |

## 8. Milestones

| Milestone | Date | Owner |
|---|---|---|
| First bench prototype kit working | Jun 2026 | Bez |
| 10 pilot kits to friendlies | Jul 2026 | Bez + 3PL |
| Pilot data review | Aug 2026 | Bez |
| CM selected for Phase 2 | Aug 2026 | Bez |
| First production kit run, 200 units | Oct 2026 | CM |
| Phase 2 complete, 500 units shipped | Dec 2026 | CM + 3PL |
| Full lift v1 first prototype | Feb 2027 | Bez + CM |
| Full lift v1 production launch | Q2 2027 | CM |
| 5,000 kits shipped (cumulative) | Q4 2027 | CM + 3PL |

## 9. Open Items for Bez

1. Houston-area CM identification: who is the candidate? Recommend reaching out to existing energizedengines.com vendors first.
2. 3PL partner: Houston has multiple options. ShipBob, ShipMonk, or a regional 3PL? Recommend regional for a manufactured product (3PL gets dirty fast at volume).
3. Tooling ownership: Killian owns all tooling, never CM. This is non-negotiable for supplier independence.
4. UL listing investment: $18k + 10 weeks. Decision in Phase 2: pursue UL on the kit (boosts rental fleet sales), defer on full lift until Phase 3.
