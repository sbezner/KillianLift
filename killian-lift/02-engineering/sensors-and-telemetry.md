# Sensors and Telemetry

## 1. Sensor Inventory

| Sensor | Part | Interface | Purpose |
|---|---|---|---|
| Load cell, primary | Custom 3,000 lb shear-pin, 4-arm strain gauge bridge | Analog, ratiometric | Real-time load weight |
| Load cell ADC | TI HX711 24-bit | I2C-like 2-wire | Drives load reading |
| Tilt sensor | Rieker M8 dual-axis or TE 0729-1759-99 | I2C | Tilt cutoff |
| Mast position | AMS AS5048A magnetic | SPI | Cable position from drum rotation |
| Outrigger limits (4) | Honeywell ZW7 sealed micro-switch | Discrete N.O. | All-deployed interlock |
| Mast end-of-travel (2) | Honeywell ZW7 | Discrete N.C. | Top and bottom |
| Cable spool | Honeywell ZW7 | Discrete N.C. | 2-dead-wrap detect |
| Battery NTC | 10k thermistor in cradle pin | Analog (battery comm pin) | Thermal limit |
| Bus current | TI INA226 | I2C | SoC + cycle energy |
| Motor temp | NTC in stator winding | Analog | Thermal foldback |
| GPS (option) | u-blox MAX-M10S | UART | Location, theft recovery |

## 2. Load Cell

A 3,000 lb shear-pin load cell replaces the OEM cable anchor at the carriage. The pin form factor allows a drop-in replacement of the standard cable termination without redesigning the carriage.

Specifications:

- Range 0 to 3,000 lb, working range 0 to 1,800 lb
- Linearity 0.1% full scale
- Repeatability 0.05% full scale
- Temperature compensation -10 deg C to +60 deg C
- Output: 2 mV/V at full scale
- Excitation: 5 V (from HX711)
- Cable: 4-conductor shielded, M8 4-pin connector

Calibration: factory 5-point calibration stored on a small EEPROM in the connector. Field re-cal kit available with a 1,500 lb known mass.

The HX711 samples at 10 Hz. Median-of-3 filtering rejects transient bumps (load swing, jolts when starting). The processed value drives:

- Pendant display (1 Hz update)
- 90% threshold alarm
- 105% threshold cutoff
- Telemetry record

## 3. Tilt Sensor

The Rieker M8 is the de facto standard on aerial lifts including Genie and JLG products (per `06-ip-and-legal/patent-landscape.md`, this is commodity equipment). Specifications:

- Dual axis, +/-30 deg
- 0.1 deg resolution
- 0.05 deg/deg C drift
- I2C output, 100 Hz update
- IP67 housing
- 12 V powered

Mounted on the inside of the base body, leveled on the manufacturing fixture. Calibration zero is recorded at end-of-line test and stored in supervisor flash.

The cutoff logic:

- If mast height (from encoder) is < 10 ft, no tilt cutoff. The lift can be used to balance loads on uneven slabs at low height.
- If mast height >= 10 ft and instantaneous tilt > 1.5 deg on either axis: immediate soft-stop. Operator must lower below 10 ft and re-verify level before lifting again.

This logic is calibrated against the stability calculations in `02-engineering/load-calculations.md`.

## 4. Mast Position Encoder

An AMS AS5048A magnetic encoder reads a diametrically magnetized magnet on the drum shaft. 14-bit absolute position per revolution. The supervisor counts revolutions to derive cable payout, then computes mast height with the known sheave reeving ratio (1:1 for single-line).

Calibration: at boot, if the bottom limit switch is closed, mast height is set to 0. The encoder counts revolutions during operation. End-of-shift, the lift descends to bottom limit to re-zero.

Why not a tape-style draw-wire encoder? Because the encoder must survive a 5-year service life on a rental fleet and a draw wire is one more thing to fail. Magnetic encoder on the existing drum shaft adds zero parts to the cable path.

## 5. Outrigger and Position Limit Switches

Six identical Honeywell ZW7 sealed micro-switches:

- 4x at outrigger cam-locks: switch is closed when cam-lock is engaged. Wired in series + parallel to give a single discrete signal that requires all four to be closed simultaneously.
- 2x at mast top and bottom: end-of-travel cutoff in the firmware.

The outrigger interlock cannot be defeated without disassembly of the cam-lock, which leaves visible evidence and triggers a fault telemetry event.

## 6. Telemetry Cloud Architecture

### 6.1 Stack

| Layer | Technology |
|---|---|
| Device transport | HTTPS POST + WebSocket fallback (WiFi); MQTT-SN over LTE-M (option) |
| Edge ingest | Cloudflare Workers |
| Hot store | Cloudflare KV (current device state) |
| Time-series store | Cloudflare D1 (SQLite at edge) |
| Cold store | Cloudflare R2 (parquet daily rollups) |
| Auth | Per-device JWT signed by Workers |
| Web UI | React on Cloudflare Pages |
| Identity | Auth0 or Cloudflare Access |
| Mobile | React Native, BLE provisioning + offline sync |

This stack is chosen because Bez already operates on Cloudflare for energizedengines.com. No new vendors, no new bills.

### 6.2 Data model

```sql
CREATE TABLE devices (
  device_id TEXT PRIMARY KEY,
  serial TEXT NOT NULL,
  fleet_id TEXT,
  fw_version TEXT,
  registered_at INTEGER,
  last_seen INTEGER
);

CREATE TABLE events (
  device_id TEXT,
  ts INTEGER,
  state TEXT,
  load_lb REAL,
  height_ft REAL,
  tilt_deg REAL,
  battery_v REAL,
  battery_pct REAL,
  fault_code TEXT,
  lat REAL,
  lon REAL
);
CREATE INDEX idx_events_device_ts ON events(device_id, ts DESC);

CREATE TABLE faults (
  device_id TEXT,
  ts INTEGER,
  code TEXT,
  context JSON
);

CREATE TABLE fleets (
  fleet_id TEXT PRIMARY KEY,
  name TEXT,
  contact_email TEXT,
  plan TEXT
);
```

### 6.3 API surface

```
POST /v1/event             # device upload
POST /v1/fault             # device fault upload
GET  /v1/device/:id        # current state (KV)
GET  /v1/device/:id/history # paginated events (D1)
GET  /v1/fleet/:id         # fleet roll-up
POST /v1/device/:id/cmd    # OTA pin, alert thresholds
GET  /v1/firmware/:channel # OTA manifest
```

All endpoints rate-limited per device JWT. Device tokens are short-lived (24 h) and refreshed via a long-lived device key stored in eFuse.

### 6.4 Dashboard (Fleet view)

For a rental fleet manager:

- Live map of every lift in the fleet with last-seen timestamp
- Cycle count, lifetime lb-ft, faults
- Battery state for each unit
- Geofence alerts (lift left assigned site)
- Inspection due / overdue
- Click into a unit for full event history and replay

For a single contractor:

- One unit, simpler view
- Cycle count and load history
- Service alerts ("cable approaching life")
- Theft alert if movement detected outside expected hours

## 7. Privacy and Security

- Device ID is a random 64-bit value, not the serial.
- Operator ID (if BLE-paired) is opt-in per fleet; default is anonymous.
- GPS data is encrypted at rest in R2.
- Fleet customers can request data export and deletion within 30 days of fleet account closure.
- No third-party trackers. No telemetry pixel. We sell hardware and SaaS, not behavioral data.

## 8. Telemetry Pricing

| Tier | Includes | Price |
|---|---|---|
| Unit (free) | Per-device dashboard, cycle count, fault history, OTA | $0 (included with device) |
| Pro | Geofence, theft alert, BLE app, multi-unit account | $5/device/month |
| Fleet | API access, daily rollup export, SLA, dedicated support | $12/device/month + setup |

Standard WiFi telemetry is free at all tiers. LTE-M cellular is +$5/device/month for the SIM and data plan, regardless of tier.

## 9. Open Items

1. We default to Cloudflare for everything. If a rental fleet customer requires their data to live in a specific region (e.g. US-only or EU-only), Cloudflare's regional Workers and D1 already support this. Does the fleet sales pitch lead with this capability or address it on demand? Recommendation: address on demand.
2. Should the dashboard be open-source? Recommendation: no for the first 18 months, revisit when the kit ships >5,000 units.
3. The pendant has a BLE radio. Should we let the operator's phone bond to it for personal load history without involving the cloud? Recommendation: yes, builds operator loyalty independent of fleet contracts.
