# Electrical Design

## 1. Architecture

The electrical system has five domains:

1. **Battery / power input** (60 V or 18 V DC from cordless tool sleds)
2. **Power conversion** (60 V to 12 V, 12 V to 3.3 V)
3. **Motor drive** (3-phase FET bridge to BLDC)
4. **Control and supervision** (STM32G474 + ESP32-S3)
5. **HMI and telemetry** (pendant, optional GPS / LTE-M)

Block diagram is in `01-design/diagrams/control-system-block.svg`.

## 2. Battery Sled

### 2.1 Mechanical interface

Two universal sled cradles. One slot accepts:

- DeWalt 20V Max / FlexVolt (5 Ah, 9 Ah, 12 Ah, 15 Ah)
- Milwaukee M18 RedLithium HD/HO/Forge (6 Ah, 9 Ah, 12 Ah)

Sled is changeable in 30 seconds with a hex key by swapping a single carrier plate. Order Killian Lift with FlexVolt sled or M18 sled; field-swappable kit available.

### 2.2 Electrical interface

| Pin | FlexVolt | M18 |
|---|---|---|
| B+ | 20 V or 60 V auto | 18 V nominal |
| B- | Ground | Ground |
| NTC | Read for thermal limit | Read for thermal limit |
| Comms | Floating (ignored) | Floating (ignored) |

Comms pins are not driven. Per `06-ip-and-legal/patent-landscape.md`, the kit and full lift do not implement Tool Connect or ONE-KEY protocols; we read voltage and NTC only.

### 2.3 Protection

- 30 A automotive ATO blade fuse on B+ before any internal load
- TVS diode 5KP30A across B+ to ground for transient suppression
- Reverse-polarity protection via P-FET (IRF4905-equivalent) low-side
- Thermistor read on NTC pin; system disables charge/discharge above 60 deg C cell temp

### 2.4 Hot-swap

Two parallel sleds, OR-d through ideal-diode controllers (LTC4416). Either sled can be removed under load with no interruption. Operator inserts a fresh battery without lowering the load.

## 3. Power Conversion

### 3.1 Buck converter, 60 V to 12 V

- Texas Instruments LM5160A or equivalent
- Input: 14 V to 75 V
- Output: 12 V at 3 A
- Efficiency: >92% at 1 A typical
- Output supplies brake coil (1.5 A peak), pendant (200 mA), telemetry (300 mA)

### 3.2 LDO, 12 V to 3.3 V

- AP2127K-3.3 LDO, 300 mA
- Powers MCU, sensors, OLED

### 3.3 Bus monitoring

INA226 high-side current sensor on the 60 V bus reports voltage and current to the supervisory MCU. Used for:

- Battery state of charge estimation
- Cycle energy logging
- Motor current limit cross-check

## 4. Motor Drive

### 4.1 BLDC motor

- 1,200 W rated, 2,400 W peak
- 8-pole, 12-slot, sensored
- Rated current 25 A continuous, 50 A peak
- Hall sensors: 3x AH3576Q or equivalent latching, in motor stator
- Insulation Class F (155 deg C max winding)
- IP54 housing
- Custom wind for 18 V or 60 V operation; production order targets the FlexVolt-native variant for higher line speed

### 4.2 FET bridge

Six IRFB7437 N-channel MOSFETs (40 V, 195 A, 1.5 mOhm Rds-on) in three half-bridge pairs. Higher voltage variant uses IPB048N15N5 (150 V) for FlexVolt 60 V operation.

- Gate driver: TI DRV8350 or DRV8353 with integrated charge pump and current sense amplifier
- Phase current sense: 0.5 mOhm shunt per phase, ADC-fed on the driver MCU
- DC bus capacitance: 4x 470 uF / 100 V electrolytic + 6x 1 uF / 100 V ceramic

### 4.3 Driver MCU

- STM32G474 at 170 MHz
- 6x advanced timer PWM channels at 20 kHz
- 3-phase shunt current sense via PGA + ADC
- FOC algorithm with field-weakening
- CAN-FD interface to supervisor
- Hall sensor input + optional encoder (motor variants)

### 4.4 Brake control

12 V brake coil driven by a low-side N-FET with flyback diode. Brake is energized (released) only when:

- Driver MCU is in active drive state, AND
- Supervisor MCU has not asserted E-stop, AND
- All interlocks are satisfied

Loss of any condition de-energizes the coil, and the spring engages the brake within 50 ms.

## 5. Wiring

### 5.1 Conductor sizes

| Run | Size | Color | Connector |
|---|---|---|---|
| Battery sled to control box | 12 AWG silicone | Red / Black | XT60-H |
| DC bus to FET bridge | 10 AWG silicone (internal) | Red / Black | Soldered |
| Motor phase wires | 14 AWG silicone | U V W (yellow / blue / brown) | 8-pin keyed M16 |
| Motor halls | 22 AWG shielded | Red / Black / 3x signal | (in 8-pin bundle) |
| Brake coil | 18 AWG | Brown / Blue | (in 8-pin bundle) |
| Pendant cable | 5x 22 AWG shielded coiled | M12-A 5-pin | M12 keyed, IP67 |
| Load cell | 4x 26 AWG shielded twisted | M8 4-pin | M8 keyed, IP67 |
| Tilt sensor | 4x 26 AWG shielded twisted | (internal harness) | JST GH 4-pin |
| Outrigger limit switches | 2-wire run, parallel + series logic | Yellow | M8 3-pin x4 |

### 5.2 Connectors

All field-removable connectors are IP67 keyed types. No exposed terminal blocks. No screw terminals.

- Battery to control: XT60-H (high-current quick disconnect, locking)
- Motor to control: M16 8-pin keyed (Amphenol RT0612)
- Pendant to control: M12-A 5-pin (CAN + 12 V)
- Sensors: M8 keyed (signal-only)

### 5.3 Strain relief

Every external cable exit has a sealing nut and elastomer grommet rated IP67. Coiled pendant cable has an integrated strain relief at the pendant end and a service loop at the control box.

## 6. EMC and Grounding

- Single-point ground at the battery negative bus.
- Motor frame grounded to the gearbox housing, then to the base via the mounting plate.
- Shielded cables grounded at one end only (control box end).
- DC bus filter: 1 mH common-mode choke + 4.7 nF Y-capacitors to chassis on the input
- PWM frequency 20 kHz to keep inverter noise out of the AM band
- Telemetry radio uses pre-certified module (Espressif ESP32-S3-WROOM-1U with external antenna; FCC ID 2AC7Z-ESPS3WROOM1U). FCC inheritance via labeling per OET KDB 996369.

## 7. Battery Endurance Calculations

Energy required to lift 1,500 lb to 25 ft:

E_lift = m * g * h = 680 kg * 9.81 m/s^2 * 7.62 m = 50,840 J

System efficiency (battery to load): 70% (motor 90% x gearbox 92% x cable/sheaves 92% x converter 95% = 71.5%, derate to 70%).

E_input per lift = 50,840 / 0.70 = 72,630 J

FlexVolt 12 Ah: 60 V * 12 Ah * 3,600 = 2,592,000 J usable. Divide by 72,630 = 35 maximum lifts at full load. Real-world 18 to 25 considering descent re-energizes ~30%, partial lifts, and battery derating below 50% SoC.

M18 12 Ah: 18 V * 12 Ah * 3,600 = 777,600 J. Divide by 72,630 = 10 maximum lifts. Real-world 14 to 20 with regen.

These numbers match the spec sheet in `01-design/specifications.md`.

## 8. Bill of Materials

See `02-engineering/bom-full-product.csv` for the full component-level BOM with vendors and unit cost.

## 9. Open Items

1. Confirm motor vendor between two candidates (Mean Well MW90T vs custom Lin Engineering wind). Awaiting samples.
2. Decide whether to ship LTE-M radio populated on every PCB or as a separate plug-in card. Cost delta is $24 in volume; activation rate from kit-only customers is unclear.
3. UL listing path: pursue UL 60204-1 listing for the kit and lift, or rely on FCC SDoC + manufacturer's declaration of conformity? UL listing adds ~$18k one-time and 10 weeks but eases entry into rental fleet procurement. Recommendation: apply for UL by Q1 2027 (after kit ships).
