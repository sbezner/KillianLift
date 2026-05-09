# Killian Lift

A next-generation portable material lift designed to displace the Sumner Roust-A-Bout R-250 and Genie Superlift Contractor in construction, HVAC, and pipefitting markets.

Built and authored by Steve Bezner, energizedengines.com.

## Executive Summary

The portable material lift category is dominated by two products designed in the 1980s. The Sumner Roust-A-Bout uses a hand-cranked chain drive that takes 90 to 120 seconds of operator effort to reach 25 feet. The Genie Superlift uses a winch-and-cable design that is faster but heavier, more expensive, and notorious for tipping when outriggers are misused. Both products have no electronic intelligence: no overload protection, no tilt cutoff, no telemetry, no theft recovery.

The Killian Lift addresses these gaps with two products on a shared platform:

1. **The Killian Smart Kit** is a $700 retrofit that bolts onto an existing Sumner Roust-A-Bout in under 30 minutes. It replaces the hand crank with a brushless DC motor that accepts DeWalt FlexVolt and Milwaukee M18 batteries. It adds a load cell, tilt sensor, audible overload alarm, and ESP32 telemetry. It hits the lowest-friction sale in the category: existing Roust-A-Bout owners who already trust the platform.

2. **The Killian Lift** is a clean-sheet 1,500 lb at 25 ft material lift launched after the kit validates demand. It uses the same brushless drive, the same telemetry stack, the same battery sleds. It folds to fit through a 36 inch doorway, deploys with cam-lock outriggers, and includes a 7/16 inch hex backup input for cordless drill or hand crank operation.

This package is the design and go-to-market plan for both products.

## Critical Findings That Changed the Plan

Three findings from research directly affected the design and GTM plan. Read each before any decision:

1. **The controlling US standard is ANSI/ASSP A10.5-2020 (Material Hoists), not ANSI MH29.1.** MH29.1 is for industrial scissors lifts. The Killian Lift category is governed by A10.5, invoked by OSHA 1926.552. Documented in `02-engineering/safety-and-standards.md` and reflected in the design brief.

2. **Genie's foundational telescoping mast patent (US 7,966,777) expired around 2024.** That architecture is now copyable without licensing exposure. We avoid two related Genie patents that remain in force (US 9,505,596 screw-drive + gas-strut and US 8,505,688 overload-clutch + overrun-brake) by using cable + drum + load-cell-electronic-cutoff instead. Documented in `06-ip-and-legal/patent-landscape.md`.

3. **JET Tools launched a competing drill-drive lift family in October 2025** (JML-12X / 18X / 24X). They are bare-tool only (no native battery integration), no telemetry, no load cell. Killian's competitive moat is native battery + cloud + load cell, not just drill-drive. The "stop cranking" message wins the operator; the smart-lift positioning wins the rental fleet. Documented in `01-design/competitive-analysis.md`.

## Repository Map

```
killian-lift/
├── README.md                          (this file)
├── 01-design/                         Product definition and competitive positioning
│   ├── design-brief.md                Full design rationale, target user, jobs-to-be-done
│   ├── specifications.md              Complete spec sheet, all dimensions, capacities, tolerances
│   ├── competitive-analysis.md        Sumner R-250, Genie SLC/SLA, JET, with feature matrix
│   ├── pain-points-research.md        14 documented field complaints with sources
│   └── diagrams/                      Engineering and concept SVGs (9 drawings)
│       ├── overall-isometric.svg      KL-100-001
│       ├── overall-folded.svg         KL-100-002
│       ├── base-top-down.svg          KL-100-003
│       ├── mast-section.svg           KL-100-004
│       ├── winch-assembly.svg         KL-100-005
│       ├── outrigger-detail.svg       KL-100-006
│       ├── control-system-block.svg   KL-100-007
│       ├── load-path-diagram.svg      KL-100-008
│       └── stability-envelope.svg     KL-100-009
├── 02-engineering/                    How the product is built
│   ├── mechanical-design.md           Frame, mast, fork carriage, materials, fasteners
│   ├── electrical-design.md           18V battery sled, motor, wiring harness, fuses
│   ├── controls-and-firmware.md       MCU choice, state machine, safety interlocks, OTA
│   ├── sensors-and-telemetry.md       Load cell, encoder, tilt sensor, ESP32, LTE-M/WiFi, cloud
│   ├── safety-and-standards.md        A10.5, B30.7, EN 13157/14492-1, OSHA, CE, UL, FCC
│   ├── bom-full-product.csv           Complete BOM with vendor, P/N, unit cost
│   └── load-calculations.md           Stress, tipping, cable, gear, brake math (caught 2 design corrections)
├── 03-retrofit-kit/                   The Killian Smart Kit (v1 product)
│   ├── kit-design.md                  $699 retail, 30 min install, reversible
│   ├── installation-guide.md          11 step instructions written for the contractor
│   ├── bom-retrofit-kit.csv           Kit BOM with volume cost targets
│   └── diagrams/
│       ├── retrofit-mounting.svg      KSK-200-001 - before/after on R-250
│       └── retrofit-wiring.svg        KSK-200-002 - 8-connection schematic
├── 04-manufacturing/                  Production strategy
│   ├── manufacturing-plan.md          CM-led, three phases, make vs buy
│   ├── tooling-and-capex.md           $73.5k Phase 1+2, +$125k Phase 3
│   └── quality-and-testing.md         Component, sub-assy, final, sample destructive
├── 05-go-to-market/                   Sales, pricing, launch
│   ├── gtm-strategy.md                Phased: kit Q3 2026 -> lift Q2 2027 -> fleet 2027+
│   ├── target-customers.md            5 segments, 3 personas (Mike, Sarah, Tom)
│   ├── pricing-and-margin.md          Unit economics; $486 contribution margin per kit
│   ├── sales-channels.md              Direct online, fleet enterprise, distributor, trade shows
│   ├── positioning-and-messaging.md   3 positioning options analyzed; "The Smart Lift" recommended
│   ├── launch-plan-90-day.md          Week-by-week Sept-Nov 2026 plan
│   └── financial-model.csv            3-year P&L: Conservative, Base, Aggressive scenarios
├── 06-ip-and-legal/                   Patents and trademark
│   ├── patent-landscape.md            FTO analysis across 8 topic areas
│   ├── patentability-assessment.md    4 candidate provisional applications
│   └── trademark-and-naming.md        Killian appears clear in IC 007/009/042
└── 07-roadmap/                        Forward-looking
    ├── product-roadmap.md             v1 kit -> v2 lift -> v3 platform timeline
    └── risks-and-mitigations.md       7 risk categories with concrete mitigations
```

## Reading Order

If you only have 30 minutes, read these four documents:

1. `01-design/design-brief.md` - what we are building and why
2. `03-retrofit-kit/kit-design.md` - the v1 product
3. `05-go-to-market/gtm-strategy.md` - the launch plan
4. `07-roadmap/product-roadmap.md` - what comes after the kit

If you are an engineer evaluating feasibility, read:

1. `01-design/specifications.md`
2. `02-engineering/mechanical-design.md`
3. `02-engineering/load-calculations.md` (note: caught two design corrections during review)
4. `02-engineering/safety-and-standards.md`

If you are an operator or fleet manager, read:

1. `03-retrofit-kit/installation-guide.md`
2. `01-design/competitive-analysis.md`
3. `05-go-to-market/pricing-and-margin.md`

If you are evaluating IP risk:

1. `06-ip-and-legal/patent-landscape.md`
2. `06-ip-and-legal/patentability-assessment.md`
3. `06-ip-and-legal/trademark-and-naming.md`

## Core Design Parameters

| Parameter | Target |
|---|---|
| Capacity at full extension | 1,500 lb at 25 ft |
| Stowed width | <= 32 in (clears a 36 in doorway) |
| Deployed footprint | ~48 in x 52 in with outriggers |
| Power | 18V brushless DC, DeWalt FlexVolt and Milwaukee M18 sleds |
| Backup drive | 7/16 in hex input for cordless drill or hand crank |
| Lift time, full load to 25 ft | <= 60 s (target 50 s) |
| Telemetry | ESP32, WiFi standard, LTE-M optional, GPS optional |
| Overload protection | Audible alarm at 90% rated, hard cutoff at 105% |
| Tilt protection | Cutoff above 1.5 deg when mast above 10 ft |
| Standards | ANSI/ASSP A10.5-2020, OSHA 1926.552, ASME B30.7, EN 14492-1, CE, FCC |

## Product Sequence

```
v1 Killian Smart Kit  ->  v2 Killian Lift (full)  ->  v3 Killian Fleet (variants + SaaS)
   $699 retail            $3,500 retail              KL-50, KL-200, KL-300
   Q3 2026 launch         Q2 2027 launch             2028+
   Sumner R-250 first     280 lb / 25 ft / 1500 lb   Multi-tenant fleet platform
```

## Headline Numbers

- Kit FOB cost (volume): $200. Retail: $699. Contribution margin: $486 per unit.
- Full lift FOB cost (volume): $1,150. Retail: $3,500. Contribution margin: $2,035 per unit.
- Phase 1+2 capex (kit only): $73,500.
- Phase 3 capex (full lift addition): +$125,000.
- Base case 2028 EBITDA: $3.6M on $9.0M revenue.

## Open Questions for Bez

These need decisions before the kit prototype build proceeds. Each is reflected in the relevant doc.

1. **Self-fund Phase 2 ($115k) or take a $150k seed bridge?** Recommendation: self-fund via founder pre-order at $599 to first 200 units (`05-go-to-market/launch-plan-90-day.md`).
2. **Telemetry standard or upsell?** Recommendation: standard on every kit. Network effect grows the dashboard's value to fleet customers (`05-go-to-market/pricing-and-margin.md`).
3. **Confirm "Killian" brand and run paid trademark clearance?** Recommendation: yes, $1,500 to $2,500 budget, before public launch (`06-ip-and-legal/trademark-and-naming.md`).
4. **Contractor engineer hire by Aug 2026?** Recommendation: yes, single point of failure on Bez is a Priority-High risk (`07-roadmap/risks-and-mitigations.md`).
5. **Houston-area CM and 3PL identification.** Action: outreach to existing energizedengines.com vendor network (`04-manufacturing/manufacturing-plan.md`).
6. **5/16 in cable upgrade decision.** Recommendation: upgrade to 5/16 for v1 (5:1 SF, $4 BOM delta) - already applied in spec (`02-engineering/load-calculations.md`).
7. **UL listing pursuit timing.** Recommendation: apply Q1 2027 on the kit; defer full lift UL to Q3 2027 (`04-manufacturing/tooling-and-capex.md`).

## Status

This repository is the complete design and go-to-market package as of May 2026. It is intended to support:

1. Building the Killian Smart Kit prototype on the bench
2. Validating demand with rental fleet conversations using the GTM materials
3. Deciding whether to pursue the full lift or stay aftermarket-only

41 files: 1 README, 24 markdown documents, 4 CSV spreadsheets (BOMs and financial model), 11 SVG engineering drawings.
