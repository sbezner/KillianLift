# Competitive Analysis

This document is the basis for product positioning and pricing decisions. All numbers are current as of May 2026.

## 1. Market Map

The portable construction material lift market splits into three product families:

1. **Manual hand-crank lifts** (Sumner Roust-A-Bout, Genie Superlift Advantage / Contractor). 1980s-era designs, no electronics, dominant installed base in rental fleets.
2. **Drill-drive lifts** (JET JML-X, JET S-Series, Warn Drill Winch on a frame). The new wave, only one mainstream brand (JET), launched October 2025.
3. **Specialized smart lifts** (JET SkyHyker, SmartRig M1 Global, RTU Lift Systems). Niche, high-end, target rooftop or floor-load-constrained applications.

The Killian Lift competes directly with families 1 and 2. SmartRig and SkyHyker are adjacent, not direct.

## 2. Spec Comparison

| Model | Capacity | Max Lift | Machine Wt | Stowed H | Footprint | Power | Street Price | Year |
|---|---|---|---|---|---|---|---|---|
| Sumner R-100 | 1,000 lb (1,500 wide base) | 15 ft | ~310 lb | ~76 in | 32x40 narrow | Manual chain, 4-spd | ~$6,150 | 1970s family, current |
| Sumner R-150 | 1,500 lb | 15 ft 2.5 in | 336 lb | 79 in | 40x40 wide | Manual chain, 4-spd | ~$6,250 | Current |
| Sumner R-250 | 1,500 lb | 25 ft | ~380 lb | ~80 in | 60x60 | Manual chain, 4-spd, dual winch | ~$7,500-$8,000 | Current |
| Sumner Series 2000 | 650-1,000 lb | 10-25 ft | 300-450 lb | ~80 in | A-frame fold | Hand crank | ~$2,800-$4,500 | Current |
| Genie SLC-12 | 650 lb | 12 ft 11 in | 225 lb | 7 ft 2 in | 31.5 in W | Manual hand crank | ~$3,299 | Current |
| Genie SLC-18 | 650 lb | 18 ft 6 in | ~270 lb | 7 ft 2 in | std | Manual hand crank | ~$3,899 | Current |
| Genie SLC-24 | 650 lb | 24 ft | ~315 lb | 7 ft 2 in | std | Manual hand crank | ~$4,399 | Current |
| Genie SLA-25 | 650 lb | 26 ft 0.5 in | 405 lb | 6 ft 6.5 in | captive stab. | Manual 1-spd winch | ~$4,999 | Late 1990s |
| JET JML-12X / 18X / 24X | 650 lb | 12 / 18 / 24 ft | 250-340 lb | <7.5 ft | std/straddle | **Drill drive + crank** | ~$3,000-$4,500 | Oct 2025 |
| JET SKY25 SkyHyker | 2,000 lb | 25 ft | ~600 lb | 137 in | folds, fits door | Dual winch, no-freefall | ~$6,000-$7,500 | Jul 2024 |
| **Killian Lift v1 (target)** | **1,500 lb** | **25 ft** | **<280 lb target** | **76 in** | **31.5 in W stowed / 48x52 deployed** | **Brushless DC + drill backup** | **$3,500 target retail** | **Q2 2027** |
| **Killian Smart Kit (retrofit)** | (preserves host capacity) | (preserves host height) | (adds 14 lb to host) | n/a | n/a | **Brushless DC + drill backup** | **$700 retail** | **Q3 2026** |

Sources: Sumner spec pages (https://sumner.com/products/lifts/roust-a-bout/, https://sumneroutlet.com/products/sumner-780303-r-250-roust-a-bout), Genie 2025 spec PDF (https://www.genielift.com/docs/default-source/product-specifications/material-lifts/en-in/2025/slc-12_slc-18_slc-24-product-specifications-(ce)-2025.pdf), Genie SLA spec (https://www.genielift.com/docs/default-source/product-specifications/material-lifts/en/2022/mlspec_sla5_sla10_sla15_sla20_sla25_en-us_na_lr.pdf), JET launches (https://www.constructionowners.com/press-release/jet-tools-launches-new-generation-of-material-lifts, https://www.jpwindustries.com/jet-tools-announces-the-launch-of-skyhyker-setting-a-new-standard-for-material-lifts/), Amazon weight references (https://www.amazon.com/Sumner-R-250-381-Pound-Roust-A-Bout-Lift/dp/B002PAQ2VE).

## 3. Feature Matrix

| Feature | Sumner R-250 | Genie SLA-25 | JET JML-24X | Killian Smart Kit | Killian Lift v1 |
|---|---|---|---|---|---|
| Power input | Manual chain | Manual winch | Drill chuck + crank | BLDC + drill backup | BLDC + drill backup |
| Drill bare-tool support | No | No | Any 1/2 in chuck drill | Yes (M18, FlexVolt sled, plus 7/16 hex) | Yes |
| Native cordless battery | No | No | No (drill is separate tool) | **Yes** | **Yes** |
| Time to 25 ft, no load | 90-120 s manual | 90-100 s manual | ~45 s with high-RPM drill | ~30 s (sled-direct) | ~30 s |
| Time to 25 ft, full load | 120-180 s | 100-120 s | ~60 s with drill | ~50 s | ~50 s |
| Overload alarm | None | None | None | **90% audible** | 90% audible |
| Overload cutoff | None (mech slip) | None (mech slip) | None | **Hard at 105%** | Hard at 105% |
| Tilt cutoff | None | None | None | **1.5 deg above 10 ft** | 1.5 deg above 10 ft |
| Telemetry | None | None | None | **ESP32 WiFi std, LTE-M opt** | ESP32 WiFi std, LTE-M opt |
| GPS / theft | None | None | None | **Standard** | Standard |
| Variable speed | 4-speed mech | 1-speed | Drill speed | **Variable, pendant pot** | Variable |
| E-stop | None | None | None | **Pendant + base** | Pendant + base |
| Captive stabilizers | No (loose pins) | No (removable set) | No (some loose) | n/a | **Yes (captive cam-lock)** |
| Lift weight | 380 lb | 405 lb | 340 lb | (host + 14 lb) | **<280 lb target** |
| Doorway clearance (stowed) | 60 in (no) | 31.5 in (yes) | varies | n/a | 31.5 in (yes) |

## 4. Price Position

- Sumner R-250: $7,500-$8,000 with 1,500 lb capacity but no smart features. The price reflects pipefitter brand loyalty, not feature parity.
- Genie SLA-25: $4,999 with 650 lb capacity. Volume rental fleet leader.
- JET JML-24X: $4,000-$4,500 with drill-drive but no battery-native operation, no telemetry, no overload protection.
- **Killian Lift v1 target $3,500**: undercuts Sumner R-250 by 50%, undercuts Genie SLA-25 by 30%, matches JET JML-24X on price while adding 2.3x capacity (1,500 vs 650 lb), telemetry, and electronic safety.
- **Killian Smart Kit at $700**: 8 to 10% of a new R-250's price, transforms an existing fleet asset into a smart lift in 30 minutes.

## 5. Distribution Channels

National rental fleets confirmed carrying competitors:

- **United Rentals** (https://www.unitedrentals.com/marketplace/equipment/material-handling/material-lifts) carries Genie SLC/SLA exclusively at the rental counter; "the largest fleet of material lift rentals."
- **Sunbelt Rentals** (https://www.sunbeltrentals.com/equipment-rental/forklifts/material-handling-equipment/duct-jacks-genie-material-lifts/) carries Genie SLA-25 and Genie SLC family.
- **Herc Rentals** (https://www.hercrentals.com/us/rentals/material-handling/material-contractor-lifts.html) carries both Sumner Roust-A-Bout and Genie material lifts. Publishes a Sumner training video on YouTube (https://www.youtube.com/watch?v=1zaeyuljdX0).
- **LGH Lifting Gear Hire** (https://rentlgh.com/material-handling-rental/material-lift-contractor-lift/) carries a "complete selection of material lifts, floor cranes, pipe rollers" across 24 warehouses.

The Smart Kit can ship through any of these as a fleet upgrade SKU because it is non-destructive and reversible.

## 6. Battery / Smart Lift Competitors

- **JET SKY25 SkyHyker** (Jul 2024): 2,000 lb, 25 ft, foldable, no-freefall worm-gear winch, but **not battery-powered**. ~$6,000-$7,500. https://www.amazon.com/SkyHyker-Material-Lifting-Capacity-SKY25/dp/B0D7XPLBG3
- **SmartRig M1 Global**: dual onboard batteries (or 115V), hydraulic boom, 2,000 lb, 20 ft 3 in hook. Niche HVAC RTU work. https://smartrigcranes.com/hvac-lift-duct-installation.php
- **RTU Lift Systems RTU-2500**: 2,500 lb modular curb-mounted screw-jack lift for RTU change-out, deliberately no electronics. https://www.rtulift.com/

**There is no direct battery-powered competitor in the 1,000 to 1,500 lb / 20 to 25 ft / push-around category as of May 2026.** This is the white space the Killian Lift targets.

## 7. Key Strategic Takeaways

1. The hand-crank-vs-drill-drive war was opened by JET in October 2025. Genie and Sumner are still 100% manual. A native-battery design leapfrogs JET as well.
2. The 380-405 lb machine weight on the SLA-25 and R-250 is the loudest unmet pain point. Killian Lift v1 must hit under 280 lb.
3. The Roust-A-Bout has captive customer loyalty among pipefitters but a 60 in x 60 in deployed footprint that does not fit through doors. The Killian Lift solves both with smart positioning.
4. Genie's foundational telescoping mast patent (US 7,966,777) expired around 2024, freeing the architecture for use without licensing exposure. See `06-ip-and-legal/patent-landscape.md`.
5. No federal rental fleet mandates ANSI/ASSP A10.5-2020 compliance today, but this will likely change in the next OSHA rulemaking window. Killian compliance from day one is a defensible moat.

## 8. Sources

- https://www.constructionowners.com/press-release/jet-tools-launches-new-generation-of-material-lifts
- https://www.jpwindustries.com/jet-tools-announces-the-launch-of-skyhyker-setting-a-new-standard-for-material-lifts/
- https://www.genielift.com/docs/default-source/product-specifications/material-lifts/en-in/2025/slc-12_slc-18_slc-24-product-specifications-(ce)-2025.pdf
- https://www.genielift.com/docs/default-source/product-specifications/material-lifts/en/2022/mlspec_sla5_sla10_sla15_sla20_sla25_en-us_na_lr.pdf
- https://sumner.com/products/lifts/roust-a-bout/
- https://sumneroutlet.com/products/sumner-780303-r-250-roust-a-bout
- https://jettools.com/24-ft-material-lift-jml-24x
- https://www.unitedrentals.com/marketplace/equipment/material-handling/material-lifts
- https://www.sunbeltrentals.com/equipment-rental/forklifts/material-handling-equipment/duct-jacks-genie-material-lifts/
- https://www.hercrentals.com/us/rentals/material-handling/material-contractor-lifts.html
- https://rentlgh.com/material-handling-rental/material-lift-contractor-lift/
- https://smartrigcranes.com/hvac-lift-duct-installation.php
- https://www.rtulift.com/
