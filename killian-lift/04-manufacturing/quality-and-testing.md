# Quality and Testing

## 1. Strategy

Every Killian Lift and every Killian Smart Kit ships with a serialized factory test certificate. The certificate is also pushed to the cloud against the device's serial number, so the support team can pull it up on a returns call.

There are three test levels:

1. **Component incoming inspection** at the CM
2. **Sub-assembly test** at the CM
3. **Final unit functional test** at the 3PL or Killian QC

All test data is stored against the serial number for the life of the product.

## 2. Component Incoming Inspection

| Component | Inspection | Method | Frequency |
|---|---|---|---|
| Motor | Run at 50% rated load for 60s, measure current and bearing temp | Bench dyno | 1 in 25 |
| Gearbox | Backlash check and run-in 30s | Manual | 1 in 50 |
| Cable | Pull test 10% of cable bundle to MBS | Universal test machine (subcontracted to vendor) | Per lot |
| Brake | Holding torque 10 cycles at rated | Bench fixture | 1 in 25 |
| Load cell | 5-point cal verification | Traceable masses | 1 in 100 |
| Tilt sensor | Zero offset on level fixture | Granite plate | 1 in 50 |
| PCBA | ICT + AOI | EMS standard | 100% (ICT), 100% (AOI) |
| Battery sled mold parts | Dimensional inspection | CMM | First article + 1 in 500 |
| Bracket | Dimensional + finish | Caliper + visual | First article + 1 in 100 |

Defects above 1% AQL trigger a containment action and a CM corrective action notice.

## 3. Sub-assembly Test

### 3.1 Control box test

After PCBA + housing assembly:

- Power-on self-test (firmware boot, sensor handshake, brake coil resistance, motor halls dummy)
- Inject simulated CAN traffic, verify supervisor responds
- Pendant emulation: simulate UP, DOWN, AUX, E-STOP, verify expected commands
- Telemetry: connect to a test WiFi, verify upload to staging cloud
- Pass criteria: no faults, all checks green, total time < 60 s
- Output: test record stored to MAC-tied serial in cloud

### 3.2 Pendant test

After housing + button + OLED + cable assembly:

- Continuity check on all 5 pins of M12 connector
- Each button press verified
- E-stop verified to open the e-stop loop
- OLED runs through a test pattern
- LED ring runs through colors
- Buzzer test
- Pass: all signals correct, no shorts, no opens

### 3.3 Motor + gearbox sub-assembly test

After mating motor to gearbox:

- Hand-rotate output shaft, verify gearbox is free, no binding
- Energize motor at 25% rated, verify smooth rotation in both directions for 30 s
- Measure no-load current (must be within +/- 10% of nominal)
- Measure output shaft TIR (< 0.005 in)
- Pass: stored against motor + gearbox serial pair

### 3.4 Bracket and powder coat

- Dimensional inspection (4 critical dimensions)
- Finish inspection (mil thickness, adhesion tape test)

## 4. Final Unit Functional Test (Smart Kit)

Every kit is functionally tested before pack:

1. Assemble the kit on a Sumner R-250 test mule (one is permanently fixtured at Killian QC).
2. Run automatic self-test (15 s).
3. Lift 100 lb to 6 ft and back (verify motion, brake, no faults).
4. Lift 1,000 lb (calibration mass) to 6 ft and back (verify load cell reading within +/- 3%, verify smooth motion).
5. Trigger E-stop while driving up at 50% load. Verify stop within 100 ms and brake engagement.
6. Verify tilt cutoff: tilt the test mule fixture to 1.6 deg, attempt to lift above 10 ft, verify cutoff.
7. Verify telemetry upload to staging cloud.
8. Print and laminate the test certificate. Affix sticker to the kit's control box.
9. Pack.

Test cycle: ~8 minutes per kit. Two test mules in parallel = 15 kits/hour throughput.

## 5. Final Unit Functional Test (Full Killian Lift v1)

Every full lift is tested at the CM with Killian QC oversight:

1. Visual: paint, decals, hardware torque (audit 10% of fasteners).
2. Functional: lift 100 lb to 25 ft and back. Verify all states.
3. Static proof test: 1,875 lb (125% of rated 1,500) at 5 ft, hold 10 minutes, verify no permanent deformation, no creep on brake.
4. Dynamic test: 1,650 lb (110% of rated) full range up and down, three cycles. Verify no faults, no overload, no motion irregularity.
5. Brake hold: 1,875 lb at 25 ft, power off, hold 60 s, verify no creep.
6. Tilt cutoff verification.
7. E-stop verification.
8. Telemetry verification.
9. Cable inspection per ASME B30.7 visual.
10. Print and sign test certificate.
11. Pack.

Test cycle: 25-35 minutes per full lift. One full-test station in parallel with a separate finishing line.

## 6. Sample Destructive and Reliability Test

Conducted on prototype and on every major design change, plus quarterly samples from production:

### 6.1 Drop test

- Stowed lift dropped from 12 in onto concrete corner, three orientations
- Pass: no structural failure, all interlocks still functional

### 6.2 Cycle test

- 5,000 cycles at 1,500 lb, 0 to 25 ft and back, automated
- Inspect at 1k, 2.5k, 5k cycle marks
- Pass: cable shows no broken wires per ASME B30.30, no cracks in welds, brake still holds 125% rated

### 6.3 Environmental

- 8 hour cold soak at -20 deg F, then 1 hour function test at temp
- 8 hour heat soak at +50 deg C, then 1 hour function test
- 96 hour humidity at 95% RH at 40 deg C, then function test
- Salt fog (per ASTM B117) for 96 hours, then visual + function

### 6.4 Vibration / transport

- Random vibration per ISTA 3A profile (truck transport), 60 minutes per axis
- Pass: powered on after, all interlocks pass, no fastener loosening (audit)

### 6.5 EMC

- Pre-compliance EN 61000-6-4 emissions
- Pre-compliance EN 61000-6-2 immunity (ESD, EFT, surge, RF immunity)
- FCC Part 15 Subpart B for digital electronics
- Final formal test by accredited lab before shipment to first customer

### 6.6 Cable swage pull test

- 1 in 100 cable assemblies pulled to MBS
- Vendor reports retained on file

## 7. Calibration

Load cells are factory-calibrated with traceable masses (5 points: 0, 250, 750, 1,500, 2,500 lb). Calibration data stored in the cell's onboard EEPROM. Field re-calibration kit is available; the firmware accepts a 2-point field cal (zero + known mass) and stores it as a delta on top of the factory cal.

Tilt sensors are zeroed during sub-assembly on a granite plate and the offset stored in supervisor flash.

## 8. Records

| Document | Retention |
|---|---|
| Component incoming inspection records | 7 years |
| Sub-assembly test records | 7 years |
| Final unit test certificate | Lifetime of unit (cloud) |
| Calibration certificates | Lifetime of unit |
| Sample destructive test reports | 7 years |
| EMC and certification reports | Permanent |
| Customer warranty claims and resolutions | 7 years |
| Cable lot pull-test certificates from vendor | 7 years |

ISO 9001 certification is a Phase 3 goal (~$15k to certify, ongoing audits). Not required by any customer in Phase 1-2.

## 9. Returns and RMA

- Customer requests RMA via Shopify or email.
- Killian issues an RMA number and shipping label (cost on Killian for warranty claims).
- 3PL receives, inspects, and forwards to Killian QC.
- Killian QC records the failure mode, attempts repair if economical, and either ships a replacement or issues a refund.
- Failure mode data is logged and reviewed monthly. Anything reaching 1% of shipped volume triggers a design review.

## 10. Continuous Improvement

Monthly review of:

- Field telemetry fault codes (top 10 by frequency)
- Warranty return reasons
- Customer support tickets
- Operator survey data (sent at 30, 90, 365 days post-purchase)

Findings drive firmware OTA, design revisions, and supplier corrective actions.

## 11. Open Items

1. ISO 9001 timing: pursue in Phase 3 when first rental fleet enterprise sale is in flight.
2. UL field labeling: should we get a UL field label on early production lifts that ship before formal UL listing? Cost is $300/unit. Recommendation: no, document the path to UL and ship pre-UL units to friendly customers only.
3. PCBA conformal coating: necessary for outdoor service life. Spec is acrylic conformal coat, standard at any EMS. Specify in Phase 2 PCBA contract.
