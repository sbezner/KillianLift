# Specifications

Complete spec sheet for the Killian Lift v1 (full product) and the Killian Smart Kit (retrofit). All dimensions in imperial primary, metric secondary. Tolerances per ASME Y14.5.

## 1. Killian Lift v1 (Full Product)

### 1.1 Capacity and Performance

| Parameter | Value | Tolerance / Note |
|---|---|---|
| Rated capacity | 1,500 lb / 680 kg | At any height up to max extension |
| Maximum lift height (fork floor) | 25 ft / 7,620 mm | +/- 1 in at full extension |
| Minimum lift height (fork floor) | 6 in / 152 mm | Carriage stowed |
| Lift time, no load to 25 ft | 30 s | At nominal battery voltage |
| Lift time, 1,500 lb to 25 ft | 50 s | S3 25% duty |
| Descent time, no load | 25 s | Regenerative |
| Descent time, 1,500 lb | 35 s | Regenerative, brake-controlled |
| Cycles per battery (FlexVolt 12 Ah) | 18 to 25 | At rated load, 0 to 25 ft |
| Cycles per battery (M18 12 Ah) | 14 to 20 | At rated load, 0 to 25 ft |

### 1.2 Dimensions

| Parameter | Imperial | Metric |
|---|---|---|
| Stowed length | 62 in | 1,575 mm |
| Stowed width | 31.5 in | 800 mm |
| Stowed height | 76 in | 1,930 mm |
| Deployed footprint, length | 52 in | 1,321 mm |
| Deployed footprint, width | 48 in | 1,219 mm |
| Outrigger arm extension (each) | 17 in | 432 mm |
| Mast cross section | 4.0 x 4.0 in (outer) | 102 x 102 mm |
| Mast sections (telescoping) | 4 | 4 |
| Fork tine length | 24 in | 610 mm |
| Fork carriage width | 24 in (24 in std, 36 in opt) | 610 mm |
| Transport wheels (rear) | 8 in dia solid rubber | 203 mm |
| Casters (front, swivel) | 4 in dia | 102 mm |

### 1.3 Mass

| Component | Mass |
|---|---|
| Base assembly with outriggers | 95 lb / 43 kg |
| Mast assembly (4 sections) | 102 lb / 46 kg |
| Carriage and fork | 28 lb / 13 kg |
| Winch assembly with motor | 14.5 lb / 6.6 kg |
| Battery sled, control box, harness | 12 lb / 5.4 kg |
| Pendant + cable | 4 lb / 1.8 kg |
| **Total machine weight (no battery)** | **256 lb / 116 kg** |
| FlexVolt 12 Ah battery (each) | 3.7 lb / 1.7 kg |
| M18 12 Ah battery (each) | 3.0 lb / 1.4 kg |
| **Total operating weight (with one battery)** | **<260 lb / 118 kg** |

Target machine weight is under 280 lb; current design comes in at 260 lb with margin for production variation.

### 1.4 Power

| Parameter | Value |
|---|---|
| Battery interface | DeWalt FlexVolt (60V auto-switch) and Milwaukee M18 (18V) sleds, swappable |
| Number of battery bays | 2 (parallel for runtime, hot-swappable) |
| Motor type | 3-phase BLDC, sensored (3 hall) |
| Motor rated power | 1,200 W continuous, 2,400 W peak |
| Motor rated speed | 4,500 rpm no-load |
| Gearbox | 50:1 single-stage planetary, AGMA 9 |
| Output torque at drum | 130 N-m / 95 ft-lb |
| Backup drive interface | 7/16 in (11.1 mm) hex socket on free end of drum shaft |
| Backup drive ratio | 1:1 to drum (5 sec/ft cordless drill at 500 rpm under load) |

### 1.5 Cable and Sheaves

| Parameter | Value |
|---|---|
| Cable specification | 1/4 in (6.4 mm) 7x19 GAC (galvanized aircraft cable) |
| Cable rated breaking strength | 7,000 lb minimum |
| Working load on cable | 1,500 lb |
| Safety factor on cable | 4.66:1 |
| Cable length | 60 ft / 18,300 mm |
| Drum diameter | 4.5 in / 114 mm |
| Drum length | 12 in / 305 mm usable |
| Drum flange height | 0.875 in (3.5x cable diameter, exceeds 2.5x ASME B30.7 minimum) |
| Crown sheave PCD | 5.0 in / 127 mm (D/d = 20, exceeds D/d = 16 minimum) |
| Internal sheaves PCD | 4.0 in / 102 mm (D/d = 16, at minimum) |
| Sheave bearings | 6204-2RS sealed, 20 mm bore |

### 1.6 Brake

| Parameter | Value |
|---|---|
| Brake type | Spring-applied / electrically released, on gearbox output shaft |
| Brake holding capacity | 200% of rated line pull (3,000 lb static) |
| Brake response time on power loss | <50 ms |
| Brake actuation | 12 V coil, 1.5 A nominal |
| Compliance | ASME B30.7-2021 holding requirement (>=125% of rated line pull) |

### 1.7 Sensors

| Sensor | Specification | Function |
|---|---|---|
| Load cell | 3,000 lb shear-pin, 4-arm strain gauge bridge | Real-time load weight, alarm and cutoff |
| Load cell ADC | HX711, 24-bit, 10 Hz | Drives load reading on pendant |
| Tilt sensor | Rieker M8 or equivalent dual-axis, +/-30 deg | Cutoff when chassis tilt > 1.5 deg and mast > 10 ft |
| Mast position encoder | AS5048A magnetic, 14-bit, on drum shaft | Closed-loop position, telemetry |
| Outrigger limit switches | 4x sealed micro-switch, IP67 | Confirms all 4 outriggers deployed before lift enable |
| Mast end-of-travel switches | 2x sealed micro-switch, IP67 | Top and bottom limits |
| Cable spool switch | 1x N.C. micro-switch on drum | Prevents over-pay-out (2 dead wraps minimum) |
| GPS | u-blox MAX-M10S | Optional, on telemetry option board |

### 1.8 Control

| Parameter | Value |
|---|---|
| Driver MCU | STM32G474, 170 MHz, with FOC firmware |
| Supervisory MCU | ESP32-S3 with WiFi/BLE |
| LTE-M radio (optional) | Quectel BG95 with eUICC |
| CAN bus | 500 kbps motor, 250 kbps pendant |
| Pendant | 5-button (UP, DOWN, AUX, LIGHT, E-STOP) + variable speed pot + 128x32 OLED |
| Pendant cable | 12 ft / 3.66 m coiled, M12-A 5-pin keyed |
| E-stop locations | Pendant red mushroom, base-mounted secondary |

### 1.9 Telemetry

| Parameter | Value |
|---|---|
| Standard | WiFi 2.4 GHz (site WiFi or operator hotspot) |
| Optional | LTE-M global, $3 per month per device |
| GPS | Optional u-blox MAX-M10S |
| Cloud | Cloudflare Workers + Workers KV + D1 (SQLite at edge) |
| Data uploaded | Cycle count, current load, position, tilt, faults, GPS, battery state |
| Upload cadence | 10 s when active, 1 hour when idle |
| OTA firmware | Yes, signed Ed25519 |

### 1.10 Standards

| Standard | Status |
|---|---|
| ANSI/ASSP A10.5-2020 (Material Hoists) | Primary US standard. Full compliance designed in. |
| OSHA 29 CFR 1926.552 | Brake holds 125% rated, no rider, capacity placard, manual on jobsite |
| OSHA 29 CFR 1926.451(a)(1) | 4:1 SF on ultimate strength, all structural members |
| ASME B30.7-2021 | Drum, brake, marking, factory test |
| EN 14492-1:2006+A1:2009 | Power-driven winches (CE) |
| EN 13157+A1:2009 | Hand-powered cranes (CE, applies to hex backup mode) |
| Machinery Directive 2006/42/EC | Self-declaration; not Annex IV (material lift only) |
| EMC Directive 2014/30/EU | EN 61000-6-2/-4 |
| RED 2014/53/EU | EN 300 328, EN 301 489-1/-17 (telemetry radio) |
| FCC Part 15 Subpart B | SDoC for digital electronics |
| FCC Part 15 Subpart C | Inherited from pre-certified radio module |
| UL 60204-1 | Safety of machinery, electrical equipment |
| Battery test | UN 38.3 (transport), per cell pack |

## 2. Killian Smart Kit (Retrofit)

### 2.1 Compatibility

| Host product | Status |
|---|---|
| Sumner Roust-A-Bout R-150 | Supported (kit P/N KSK-R150) |
| Sumner Roust-A-Bout R-250 | Supported (kit P/N KSK-R250) |
| Sumner Series 2000 family | v1.1 (Q4 2026) |
| Genie SLC-12/18/24 | v1.2 (Q1 2027) |
| Genie SLA-25 | v1.3 (Q2 2027) |

### 2.2 Capacity

The kit preserves the host product's rated capacity. The kit does not increase capacity above the host nameplate.

### 2.3 Performance

| Parameter | Value |
|---|---|
| Lift time, host rated load to host max height | <= 50% of manual time |
| Backup operation | 7/16 hex maintained for cordless drill or hand crank |
| Battery cycles per FlexVolt 12 Ah | 18 to 25 |

### 2.4 Mass added to host

| Component | Mass |
|---|---|
| BLDC + gearbox + bracket | 8.5 lb / 3.9 kg |
| Battery sled (no battery) | 1.5 lb / 0.7 kg |
| Control box with sensors | 3.0 lb / 1.4 kg |
| Pendant + cable | 4.0 lb / 1.8 kg |
| Wiring harness | 1.0 lb / 0.5 kg |
| **Total kit mass** | **18.0 lb / 8.2 kg** |

### 2.5 Field Installation

| Metric | Target |
|---|---|
| Tools required | 4 mm hex key, 5 mm hex key, 13 mm wrench |
| Field connections | 4 (battery, motor, pendant, sensors) |
| Field calibration | Automatic on power-up |
| Installation time | 30 min by an HVAC tech, 20 min by trained installer |
| Reversibility | 5 minutes back to OEM hand crank |

### 2.6 Standards (kit)

The kit, when installed, brings the host product into compliance with:

- Overload alarm and cutoff (not in any host product OEM)
- Tilt cutoff (not in any host product OEM)
- E-stop (host products typically lack this)
- Telemetry (none of the host products have any)

The kit does not change the host product's structural rating, mast geometry, or cable specification. ANSI/ASSP A10.5-2020 compliance of the kit is documented separately. Original host product certifications remain valid because the kit does not modify load-bearing structure.

## 3. Operating Environment

| Parameter | Value |
|---|---|
| Operating temperature | -4 deg F to 122 deg F (-20 to 50 deg C) |
| Storage temperature | -40 deg F to 158 deg F (-40 to 70 deg C) |
| Humidity | 0 to 95% RH non-condensing |
| Ingress protection | IP54 (electronics housing IP65) |
| Slope | <1.5 deg fully extended; <3 deg under 10 ft height |
| Surface | Firm, level, paved or compacted gravel |
| Outdoor wind speed limit | 28 mph (12.5 m/s) when above 10 ft |

## 4. Markings

Per ANSI/ASSP A10.5-2020, OSHA 1926.552, ASME B30.7-2021, and CE / FCC requirements:

- Capacity placard: 1,500 lb at 25 ft, with derating chart for slope and partial deployment
- Model and serial: laser-etched on base frame
- Date of manufacture
- Manufacturer name and address
- "NO RIDERS" pictogram per ANSI Z535.4
- Pinch and crush hazard pictograms
- E-stop label
- CE mark
- FCC ID (telemetry option)
- IC ID (telemetry option, Canada)
- Rated load placard at the operator station

## 5. Service Life and Maintenance

| Item | Interval |
|---|---|
| Cable inspection | Pre-shift visual; cycle counter alerts at 80% of rated life |
| Sheave inspection | Quarterly |
| Brake test | Annual; load test 110% rated |
| Battery sled cleaning | Quarterly |
| Control firmware OTA | As released, signed |
| Tilt sensor verification | Annual |
| Load cell verification | Annual; field calibration kit available |
| Structural inspection | Annual per A10.5 |
| Expected service life | 7 years / 5,000 cycles at rated load |
