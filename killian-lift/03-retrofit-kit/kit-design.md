# Killian Smart Kit - Design

The Killian Smart Kit is the v1 product. It is the lowest-friction sale in the category: existing Sumner Roust-A-Bout owners (and later Genie owners) who pay $700 to convert their lift into a battery-powered, sensor-equipped, telemetry-enabled smart lift in 30 minutes.

This document describes the kit at the assembly level. Installation steps are in `03-retrofit-kit/installation-guide.md`. BOM is in `03-retrofit-kit/bom-retrofit-kit.csv`. Mounting and wiring drawings are in `03-retrofit-kit/diagrams/`.

## 1. Strategy

A retrofit kit ships before the full lift because:

1. The unit economics are favorable: $200 cost target, $700 retail = 71% gross margin.
2. The R&D cost is ~10% of the full lift, since most of the kit's components carry over to the full lift v1.
3. There are an estimated 80,000 to 150,000 Sumner Roust-A-Bouts in the field. Even 1% adoption is 800 to 1,500 units in the first 18 months.
4. Demand validation: every kit sold is direct evidence of how much someone will pay to fix the pain. This data informs the v2 full-lift pricing decision.
5. Distribution: ships through energizedengines.com using the existing Shopify storefront. No new sales channel required.

## 2. Compatibility

| Host product | Kit P/N | Status | Year supported |
|---|---|---|---|
| Sumner Roust-A-Bout R-150 | KSK-R150 | v1.0 | Q3 2026 |
| Sumner Roust-A-Bout R-250 | KSK-R250 | v1.0 | Q3 2026 |
| Sumner Series 2000 (2010/2015/2020/2025) | KSK-S2 | v1.1 | Q4 2026 |
| Genie SLC-12/18/24 | KSK-GSLC | v1.2 | Q1 2027 |
| Genie SLA-25 / SLA-20 | KSK-GSLA | v1.3 | Q2 2027 |

The R-250 is the launch SKU because Bez has bench experience with the platform and it is the highest-margin opportunity (each R-250 is a $7,500 lift; a $700 kit is 9% of that price).

## 3. What's in the Box

| Item | Description |
|---|---|
| BLDC motor + 20:1 planetary gearbox | Bolted assembly, pre-aligned |
| Mounting bracket | Powder-coated steel, fits stock holes on host product |
| Battery sled (one type chosen at order) | FlexVolt or M18 |
| Control box | ESP32-S3 + STM32G474 + 3-phase FET bridge + sensors interface |
| Pendant + 12 ft coiled cable | Pre-terminated, plug-and-play |
| Load cell shear-pin (replaces OEM cable anchor) | Factory-calibrated |
| Tilt sensor | Pre-mounted in control box, factory-calibrated |
| Wiring harnesses (motor, sensors, pendant, battery) | All pre-terminated, color-coded, IP67 |
| Hardware kit | M10 SHCS + Loctite + spacers + replacement cable swage if needed |
| Installation card + QR to install video | Laminated, attached to the box |
| Optional: GPS / LTE-M telemetry option board | $150 add-on |
| Killian sticker | One per box |

## 4. How It Works

The kit replaces the hand crank on the host product's load winch with a brushless DC motor. The motor's gearbox output shaft mates to the OEM winch shaft via a square coupler. The OEM winch, drum, and cable are unchanged.

The control box mounts to the same bracket. It takes battery power from the sled, drives the motor, reads the load cell and tilt sensor, and talks to the pendant.

The pendant has UP, DOWN, AUX, LIGHT, E-STOP, a variable speed pot, and an OLED display. It connects via a single keyed M12 cable.

The 7/16 in hex backup is preserved on the new gearbox output shaft. If batteries die or the controller faults, an operator can chuck a cordless drill into the hex (or use a hand crank) to lift or lower.

A lift fitted with the kit:

- Lifts ~2x faster than manual cranking
- Has a load cell with 90% audible alarm and 105% hard cutoff
- Has a tilt sensor cutoff above 1.5 deg when above 10 ft
- Has E-stop on the pendant
- Reports cycle count, load history, and faults to the cloud
- Optionally reports GPS location and accepts geofence alerts

A lift fitted with the kit does **not** gain:

- Captive outriggers (this requires a chassis change, only in the full Killian Lift v2)
- Lower machine weight (host weight is unchanged plus 14 lb of kit)
- Faster transport (host fold geometry is unchanged)

## 5. Why 30 Minute Install

The kit is engineered for speed of install because the buyer is the operator, not a contracted technician.

Design choices that hit 30 minutes:

1. **Mounting bracket reuses stock holes.** No drilling required. The R-250 bracket bolts to four existing M8 holes that hold the OEM crank handle saddle.
2. **Pre-terminated harnesses.** Every connector is keyed and color-coded. The installer never strips a wire.
3. **Single mechanical coupling.** The gearbox output shaft has a square coupler that drops onto the OEM winch shaft. One grub screw secures it.
4. **Load cell is a drop-in shear-pin.** It replaces the OEM cable anchor pin. No modification to the cable, drum, or carriage.
5. **Tilt sensor is pre-mounted in the control box.** Factory-calibrated against the bracket geometry. No field calibration step.
6. **Self-test runs automatically on power-up.** The pendant guides the installer through a function check.

The reversible design is not just a feature. It is regulatory cover. Because the kit does not modify the host product's load-bearing structure, the host's existing certifications (ANSI A10.5 compliance, OSHA conformance) remain valid. The kit adds capability without removing capability.

## 6. Versioning

The kit firmware ships with a host model selector. On first power-up, the installer selects the host model (R-150, R-250, S2-2025, etc) and the firmware loads the correct gear ratio, max payload, and brake characteristics. Wrong selection triggers an audible alarm and a pendant warning.

Future host models are supported by an OTA firmware update. The mechanical bracket is the only host-specific physical part; bracket P/Ns and SKUs are unique per host model.

## 7. Service and Returns

The kit ships with a 2 year manufacturer's warranty. Returns within 30 days are full-refund. Returns beyond 30 days follow the warranty schedule.

Because the kit is reversible, return rates are expected to be very low. The customer can uninstall in 5 minutes and either return for refund or sell to another contractor.

Replacement modules:

- Motor + gearbox: $150
- Control box: $90
- Pendant: $45
- Load cell: $45
- Telemetry option board: $80

All modules are field-swappable with hand tools. Service requires no special equipment.

## 8. Pricing

| SKU | Description | Retail | Notes |
|---|---|---|---|
| KSK-R250 | R-250 retrofit, FlexVolt sled, no telemetry | $699 | Most common configuration |
| KSK-R250-M | R-250 retrofit, M18 sled, no telemetry | $699 | |
| KSK-R250-PRO | R-250 retrofit, FlexVolt or M18, with GPS + LTE-M | $849 | Adds telemetry option board |
| KSK-R150 | R-150 retrofit, sled choice | $649 | |
| KSK-R150-PRO | R-150 retrofit + telemetry | $799 | |
| Replacement bracket (any SKU) | Bracket only | $69 | |
| Replacement pendant | Pendant + cable | $79 | |
| Replacement battery sled | One sled | $39 | Lets owners switch platforms |
| Telemetry add-on board | GPS + LTE-M PCB | $129 | Field-installable in 5 min |
| Operator certification course | Online video + quiz | $0 | Free |
| Fleet dashboard tier (Pro) | Per device | $5/mo | |
| Fleet dashboard tier (Fleet) | Per device | $12/mo | |

Cost target FOB factory: $185 to $215 per kit depending on SKU. Gross margin at $699 retail and $200 cost: 71%. After channel costs and warranty reserves, contribution margin is ~55%.

## 9. Why It Will Sell

1. **JET just validated the cordless angle in October 2025** with their JML-X line. The market is now educated on drill-drive lifts; battery-direct is the next obvious step.
2. **The Roust-A-Bout has captive customer loyalty** among pipefitters. Those operators already trust the platform; they want it to suck less, not be replaced.
3. **The price is below the threshold of "I'll think about it."** $700 is petty cash for a contractor whose lift cost $7,500.
4. **The unit economics work for fleets.** A rental fleet that owns 200 R-250s spends $140k to convert all of them. The fleet recovers that in differentiated rental rates within 18 months.
5. **No competing kit exists.** As of May 2026, no aftermarket retrofit for the Roust-A-Bout includes a load cell, tilt sensor, telemetry, or battery drive. The Killian Smart Kit is the only product in the category.

## 10. Open Items for Bez

1. Confirm Sumner Roust-A-Bout R-250 is the launch SKU. If demand validation comes back showing more interest in the smaller R-150 or the wider Series 2000, swap order of operations.
2. Confirm direct sale only via energizedengines.com, or open distributor channel from day 1. Recommendation: direct only for the first 1,000 units, then open channel selectively.
3. Confirm telemetry standard or upsell. Recommendation: standard. Every unit on the network grows the dashboard's value to fleets.
4. Confirm 2 year warranty. Most competing kits in adjacent categories ship 1 year. 2 years is a competitive moat.
