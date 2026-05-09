# Controls and Firmware

## 1. Architecture

Two-MCU split:

- **Driver MCU (STM32G474)** runs hard-real-time motor control: FOC, current loop, hall decoding, brake actuation. 20 kHz PWM, 5 kHz current loop, 1 kHz outer loop. No allocation, no networking, MISRA-C aligned.
- **Supervisory MCU (ESP32-S3)** runs the safety state machine, telemetry, OTA, pendant UI, CAN gateway, GPS, and cellular when fitted. ESP-IDF v5 with FreeRTOS.

Communication: CAN-FD at 500 kbps. Heartbeat at 100 Hz. Loss of heartbeat for 30 ms => driver enters safe state (motor coast, brake engaged).

## 2. Safety State Machine

States and transitions on the supervisor:

```
            POWER ON
                |
                v
+-> [SELF TEST] --(fail)--> [FAULT] <----------+
|       |                                       |
|     (pass)                                    |
|       v                                       |
+--> [IDLE] <--+                                |
        |      |                                |
   (op_request)|                                |
        v      |                                |
   [INTERLOCK CHECK] --(fail)--+                |
        |                      |                |
     (pass)                    v                |
        v               [INTERLOCK FAIL] -->----+
   [DRIVING UP]   <----- (dead-man)             |
   [DRIVING DN]                                 |
        |                                       |
   (overload OR tilt OR estop OR fault) -->-----+
        |
   (button release)
        v
     [IDLE]
```

### 2.1 Self-test (boots in 800 ms)

- Verify CAN bus to driver MCU
- Verify load cell ADC readback (zero check)
- Verify tilt sensor I2C presence
- Verify outrigger limit switches all-deployed when held closed by physical detents
- Verify pendant connection (heartbeat received)
- Verify brake coil resistance is in-range
- Verify GPS lock if present (best effort, not blocking)
- If any fail: enter FAULT, display code on pendant, halt

### 2.2 Interlock check (entered on UP / DOWN press)

All must be true to leave INTERLOCK CHECK:

| Condition | Source |
|---|---|
| All 4 outriggers deployed | 4x limit switches in series |
| Tilt within +/- 1.5 deg, OR mast position < 10 ft | Tilt sensor + mast encoder |
| Load < 105% rated | Load cell |
| E-stop not asserted | Pendant + base e-stop |
| Battery voltage > minimum (43 V FlexVolt, 14 V M18) | INA226 reading |
| No active fault on driver MCU | CAN status |

Interlock failure triggers an audible buzzer pattern (3 short beeps = which interlock) and pendant displays the faulted condition.

### 2.3 Driving states

While DRIVING UP or DRIVING DN:

- Operator must hold pendant UP or DOWN button (dead-man)
- Variable speed pot scales target velocity 10% to 100%
- Soft start ramps over 500 ms to avoid load swing
- Soft stop ramps over 300 ms to settle
- Continuous interlock check; any failure transitions to braking and IDLE
- 90% load triggers 1 Hz beep alarm but does not cut power
- 105% load triggers immediate soft-stop and IDLE
- Tilt > 1.5 deg with mast > 10 ft triggers immediate soft-stop and IDLE

### 2.4 Fault state

- Brake engaged, motor coasted
- Pendant displays fault code
- Buzzer pattern indicates class
- Telemetry uploads fault code immediately
- Recovery requires physical E-stop reset and operator confirmation on pendant

## 3. Motor Control (Driver MCU)

FOC implementation:

- Park / Clarke transforms in fixed-point Q15
- Three current shunt sense, sampled mid-PWM
- Hall sensor for low-speed startup, transitions to sensorless above 200 RPM (optional, off by default for v1)
- Speed loop bandwidth 50 Hz
- Current loop bandwidth 1 kHz
- Field weakening for high-speed descent

Regenerative braking on descent:

- Motor acts as generator, returns energy to battery bus
- Bus voltage clamp at 70 V (FlexVolt) or 22 V (M18) via brake chopper resistor (50 W, 3.3 ohm)
- If bus exceeds clamp, mechanical brake takes over

Current limit: 50 A peak, 25 A continuous. Folded back if motor temperature (NTC in winding) > 110 deg C.

## 4. Telemetry (Supervisor MCU)

### 4.1 Data uploaded

Every 10 seconds while active, every 1 hour while idle, immediately on fault:

```json
{
  "device_id": "KL-1234567890",
  "ts": 1715241600,
  "fw": "1.4.2",
  "state": "DRIVING_UP",
  "load_lb": 1320,
  "height_ft": 18.4,
  "tilt_deg": 0.4,
  "battery_v": 58.2,
  "battery_pct": 67,
  "cycle_count": 1842,
  "lifetime_lb_ft": 23814591,
  "fault_code": null,
  "gps": {"lat": 30.123, "lon": -95.456, "fix": "3D", "sats": 9},
  "wifi_rssi": -68
}
```

### 4.2 Transport

- Primary: WiFi to a Cloudflare Workers endpoint
- Fallback: BLE to a paired Killian iOS / Android app, which forwards over phone's connection
- Optional: LTE-M direct upload via Quectel BG95
- Buffer: 24 hours of records in flash; uploads when connection available

### 4.3 Cloud schema

Cloudflare Workers + D1 (SQLite at edge) + KV for hot lookup. The data model is documented in `02-engineering/sensors-and-telemetry.md`.

## 5. OTA Firmware

- Both MCUs OTA-able via the supervisor.
- Driver MCU firmware is signed by Killian root key (Ed25519), verified on boot. Bad signature triggers fallback to last-known-good slot.
- Supervisor uses ESP32 dual-bank OTA with rollback.
- OTA is fetched from a Cloudflare R2 bucket. Update channel is per-device (stable / beta).
- Customers can pin firmware to a version in the dashboard.

## 6. Pendant UI

128x32 OLED with three lines:

```
LOAD: 1320 lb (88%)
HT: 18.4 ft  TILT: 0.4
WIFI: OK    BAT: 67%
```

Five buttons: UP, DOWN, AUX, LIGHT, E-STOP (red mushroom). Variable speed pot. LED ring around the OLED:

- Solid green = ready
- Pulsing green = driving
- Solid yellow = warning (load > 90%)
- Solid red = fault / E-stop
- Pulsing blue = OTA in progress

## 7. Logs

- 7 day rolling local log of all state transitions, faults, and operator actions
- Telemetry uploads a daily summary plus all faults
- Logs include operator ID if BLE-paired with a phone (optional, opt-in for fleets)

## 8. Test Strategy

| Test | Scope |
|---|---|
| Unit tests (driver) | Per-module C tests on host, harness simulates motor and battery |
| Unit tests (supervisor) | Pytest against ESP-IDF host build |
| HIL bench | Real driver MCU, real motor, simulated load via brake dynamometer |
| End-to-end on real lift | Full lift cycles, captured by telemetry, replayable |
| Fault injection | E-stop during drive, battery removal, CAN cable pull, load cell short |
| EMC pre-compliance | Pre-test at internal chamber before formal lab |

## 9. Cybersecurity

The lift connects to the public internet. Threat model:

- Compromise of a single lift's telemetry feed: attacker sees load and location but cannot move the lift remotely (there is no remote drive command path; UP/DOWN are physically wired).
- Theft of OTA signing key: severe. Stored in HSM; signing requires two-person ceremony.
- Cloud account compromise: limit blast radius via per-device tokens, no global admin.
- Pendant cable cut: forces FAULT state, lift stays at current height. Manual descent via 7/16 hex backup.

The CAN bus inside the lift is not authenticated; this is acceptable because physical access is required.

## 10. Open Items

1. Should the lift accept a physical "lockout key" RFID tag that disables operation at the rental counter? Recommendation: yes, with an off-the-shelf MIFARE reader on the pendant. Adds $4 BOM, blocks unauthorized use, supports rental tier billing.
2. Audit logging policy for fleet customers: do we keep per-operator records on Cloudflare D1, or sync to the customer's data warehouse? Recommendation: store our 90 day rolling, sync to S3 / GCS for fleets paying for the Fleet tier.
3. Should the OTA channel default to "stable" or "beta"? Recommendation: "stable" with explicit opt-in to beta in the dashboard.
