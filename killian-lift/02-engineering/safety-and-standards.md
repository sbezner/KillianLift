# Safety and Standards

## 1. Standards Hierarchy

**Primary US standard:** ANSI/ASSP A10.5-2020 Material Hoists. This is the controlling standard for portable construction material lifts and is invoked by OSHA 29 CFR 1926.552. https://webstore.ansi.org/standards/asse/ansiasspa102020

**Note on MH29.1:** The original concept brief listed ANSI MH29.1-2020 as a primary standard. MH29.1 is the standard for industrial scissors lifts, not portable construction material hoists. We track MH29.1 as informative only. The Killian Lift is a material hoist, regulated under A10.5 and OSHA 1926.552.

## 2. Standards Applied

| Standard | Revision | Scope | Applies to |
|---|---|---|---|
| ANSI/ASSP A10.5 | 2020 | Material hoists for construction | Full lift, kit (limited) |
| OSHA 29 CFR 1926.552 | Current | Material hoists, personnel hoists, elevators | All US jobsite use |
| OSHA 29 CFR 1926.451(a)(1) | Current | 4:1 SF for scaffold and lifting | Structural design |
| ASME B30.7 | 2021 | Winches | Winch assembly |
| EN 14492-1 | 2006+A1:2009 | Power-driven winches | CE marking |
| EN 13157 | 2004+A1:2009 | Hand-powered cranes | CE marking, hex backup mode |
| EN ISO 12100 | 2010 | Safety of machinery, risk assessment | All EU |
| EN 60204-1 | 2018 | Electrical equipment of machines | All electrical |
| EN ISO 13849-1 | 2023 | Safety control systems, PL | E-stop and interlock circuits |
| Machinery Directive | 2006/42/EC (-> Reg 2023/1230) | EU machinery | Self-declared, not Annex IV |
| EMC Directive | 2014/30/EU | EU electromagnetic compatibility | EN 61000-6-2/-4 |
| RED | 2014/53/EU | EU radio equipment | EN 300 328, EN 301 489-1/-17 |
| FCC Part 15 Subpart B | Current | US digital equipment emissions | Class A SDoC |
| FCC Part 15 Subpart C | Current | US intentional radiators | Inherited via pre-cert module |
| UL 60204-1 | Current | Machinery electrical | Optional listing path |

Source for standard summaries: ANSI Webstore, ASSP, OSHA eCFR, ASME, ETSI, EUR-Lex.

## 3. Safety Factors

Computed in `02-engineering/load-calculations.md`; summarized here.

| Element | SF Required | SF Designed | Reference |
|---|---|---|---|
| Cable | 4:1 (OSHA), 5:1 (A10.5 / ASME B30.30) | 4.66:1 | Cable section in load calcs |
| Mast (axial) | 4:1 ultimate | 5.6:1 | Buckling section |
| Carriage frame | 4:1 ultimate | 6.2:1 | Stress check |
| Fork tine | 4:1 yield in bending | 4.4:1 | Bending check |
| Outrigger arm | 4:1 ultimate | 5.1:1 | Bending + axial |
| Brake holding | 125% rated line pull | 200% | ASME B30.7 |
| Tipping resistance | 2:1 static (typical) | 2.4:1 at full extension | Stability section |
| Battery wire ampacity | 125% continuous | 250% (12 AWG, 30 A fuse, 12 A nominal) | NEC |

## 4. Factory Test Protocol

Every Killian Lift v1 ships with a factory test certificate. Every Killian Smart Kit ships with a function-test certificate. Tests:

| Test | Multiplier | Reference |
|---|---|---|
| Static proof, full lift | 125% rated x 10 minutes hold, no permanent deformation | ASME B30.7 / A10.5 |
| Dynamic operational | 110% rated through full range of motion | ASME B30.7 |
| Brake hold | 125% rated, 1 minute, no creep | OSHA 1926.552 |
| Overload alarm | Verify alarm at 90% +/- 2% | Internal |
| Overload cutoff | Verify hard stop at 105% +/- 2% | Internal |
| Tilt cutoff | Tilt to 1.6 deg with mast > 10 ft, verify cut | Internal |
| E-stop | Press during drive at 50% load, verify stop in <100 ms | EN ISO 13850 |
| EMC (sample) | Pre-compliance per EN 61000-6-4 emissions, EN 61000-6-2 immunity | One per build batch |
| Insulation (sample) | 1,000 V Hipot motor leads to chassis, 1 minute | UL 60204-1 |

EN-equivalent factory tests: 1.5x WLL static proof, 1.1x WLL dynamic. The 125% / 110% US protocol exceeds both.

## 5. Risk Assessment

Per EN ISO 12100, a hazard analysis was performed. Top hazards and their mitigations:

| Hazard | Severity | Likelihood | Mitigation |
|---|---|---|---|
| Tip-over with worker beneath | Catastrophic | Low (with mitigation) | Captive outriggers, tilt cutoff, no-rider warnings |
| Cable failure under load | Severe | Very Low | 4.66:1 SF, daily inspection prompt, cycle telemetry, sheave D/d 20 |
| Brake failure on descent | Severe | Very Low | Spring-applied / power-released (fail-safe), 200% holding, redundant E-stop |
| Operator overload | Moderate | Medium without mitigation | 90% alarm, 105% hard cutoff |
| Pinch / crush during deploy | Moderate | Low | Captive outrigger pivots, no removable parts |
| Battery thermal event | Moderate | Very Low | OEM cells, BMS in pack, fuse, thermistor monitor |
| Electrical shock | Low | Very Low | 60 V max DC, IP54, no exposed conductors |
| Theft / unauthorized use | Low (financial) | Medium | GPS, geofence, RFID lockout option |
| Cyber compromise of telemetry | Low | Low | Per-device tokens, signed OTA, no remote drive command |

## 6. Marking and Labels

Required on every unit per A10.5, OSHA 1926.552, ASME B30.7, EN 14492-1, FCC, and CE:

1. **Capacity placard** at operator station: rated capacity, max height, derating chart for partial deployment and slope. Pictogram per ANSI Z535.4.
2. **Model and serial**: laser-etched on base frame, plus a separate barcode label.
3. **Date of manufacture**: month and year.
4. **Manufacturer name and address**: legal entity and US service address.
5. **No riders pictogram**: ANSI Z535.4 compliant.
6. **Pinch / crush warnings**: at outrigger pivots and mast.
7. **E-stop label**: red on yellow, EN ISO 13850 wording.
8. **Battery handling**: lithium pictogram, transport class.
9. **CE mark + Notified Body number**: for EU shipments. Self-declared, no Notified Body required because the Killian Lift is not Annex IV.
10. **FCC ID and IC ID**: on the telemetry option label, hidden behind battery sled cover.

## 7. Documentation Kit

Every unit ships with:

1. Operator manual, English (and Spanish for US, French / German / Italian / Spanish / Portuguese for EU)
2. Maintenance manual (separate booklet)
3. EU Declaration of Conformity (CE-marked units)
4. FCC Supplier's Declaration of Conformity (telemetry units)
5. Factory test certificate (signed)
6. Inspection log template (paper, plus digital in the cloud dashboard)
7. Spare parts list with vendor numbers
8. Quick-start card (laminated, attached to pendant)

## 8. Owner / Operator Training

Per A10.5 and OSHA 1926, the manufacturer must provide training material. Killian provides:

1. A 12 minute video covering setup, load placement, deployment, controls, safe operation, and shutdown. Hosted on YouTube and embedded on energizedengines.com and on the cloud dashboard.
2. A printable 1-page checklist for daily inspection.
3. A 30 minute online certification course with a quiz, free.

Rental fleet customers can require operators to pass the online certification before unlocking a unit (RFID badge integration on the pendant, see `02-engineering/controls-and-firmware.md`).

## 9. Inspections

| Interval | Activity |
|---|---|
| Pre-shift | Visual cable, sheaves, outriggers; function test |
| Quarterly | Detailed visual, cable inspection, brake function |
| Annual | Structural inspection, brake load test (110%), recertification |

The cloud dashboard tracks inspection due dates and emits alerts.

## 10. Defenses Against Liability

- Every cycle is logged with load, position, tilt, and operator (if known). In the event of an incident, the device's last 7 days of data are recoverable for analysis.
- Captive outriggers and load cell cutoff make it physically harder to operate the lift unsafely.
- The operator manual has a "Read this first" tear-off that the operator signs and returns. Rental fleets log this.
- The manufacturer carries product liability insurance; quotes secured before launch.

## 11. Key Sources

- https://webstore.ansi.org/standards/asse/ansiasspa102020 (ANSI/ASSP A10.5-2020)
- https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.552 (OSHA material hoists)
- https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.451 (OSHA scaffolds)
- https://www.asme.org/codes-standards/find-codes-standards/b30-7-winches (ASME B30.7-2021)
- https://webstore.ansi.org/Standards/BSI/bsen131572004a12009 (EN 13157)
- https://standards.globalspec.com/std/1274044/en-14492-1 (EN 14492-1)
- https://eur-lex.europa.eu/LexUriServ/LexUriServ.do?uri=OJ:L:2006:157:0024:0086:en:PDF (Machinery Directive)
- https://single-market-economy.ec.europa.eu/sectors/electrical-and-electronic-engineering-industries-eei/radio-equipment-directive-red_en (RED)
- https://www.ecfr.gov/current/title-47/chapter-I/subchapter-A/part-15 (FCC Part 15)
- https://www.health.ny.gov/environmental/investigations/face/docs/03ny034.pdf (NY FACE 03NY034 fatality)
