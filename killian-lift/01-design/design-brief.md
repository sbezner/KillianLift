# Design Brief

## What we are building

A portable construction material lift that lifts 1,500 lb to 25 ft, runs on the cordless tool batteries the operator already owns, and reports live load, position, and location to a cloud dashboard. Two products on a shared platform:

1. **Killian Smart Kit** (v1, Q3 2026): a $700 retrofit that replaces the hand crank on a Sumner Roust-A-Bout R-250 with a brushless DC drive plus the full sensor and telemetry stack. Bolts on in 30 minutes. No drilling, no welding, no chassis modification. Reversible.

2. **Killian Lift** (v2, Q2 2027): a clean-sheet 1,500 lb at 25 ft material lift built around the same drive and telemetry. Stowed width clears a 36 in doorway. Deployed footprint 48 x 52 in. Target machine weight under 280 lb.

## Target user

| User | Workflow | Current product | Pain |
|---|---|---|---|
| HVAC technician installing rooftop unit components | Lift condenser sections, blower modules from ground or pickup bed onto roof curb | Genie SLA-25 (650 lb) | Capacity ceiling forces 2 trips or a crane rental. 405 lb machine weight is a back injury risk to load alone. |
| Pipefitter installing Victaulic spool pieces in a mechanical room | Walk a heavy pipe section into an overhead pipe rack | Sumner R-250 (1,500 lb / 25 ft) | 60x60 in deployed base often does not fit through the door to the mechanical room. 100 s of hand cranking under load. |
| Commercial electrician installing strut, conduit, fixture | Lift assembled fixtures and bus duct sections to ceiling | Genie SLC-24 (650 lb) | Hand cranking. No load feedback. Tip-over risk on uneven slab. |
| Rental fleet manager (United, Sunbelt, Herc, LGH) | Rent lifts to all of the above | Mixed Sumner / Genie fleet | Missing parts on returns. No utilization data. No theft recovery. Quarterly inspection is a manual process. |

The HVAC tech and the pipefitter are both willing to spend $700 today on a kit that solves their primary pain (cranking and load feedback) without buying a new lift.

The fleet manager is the larger long-term buyer. They will replace whole units once the Killian Lift v2 is qualified.

## Jobs to be done

1. **Reduce the operator's physical effort to zero between deciding to lift and the load being at height.** The operator presses a button. The lift does the work.
2. **Tell the operator what the load weighs and whether it is safe.** A 1,500 lb load on a 1,500 lb lift on a 0.5 deg slope is fine. The same load on a 1.6 deg slope is not. The current category gives the operator no way to know.
3. **Make the lift cheaper to own per cycle.** Every battery the operator already owns. Telemetry-driven preventive maintenance. Replaceable modules. No proprietary cable, no special grease.
4. **Give the rental fleet a network-effect product.** Every lift in the fleet reports cycles, location, faults, and operator. The fleet's financial exposure to lost equipment drops to near zero.
5. **Drop into the existing distribution.** The kit ships through energizedengines.com. The full lift sells through the same rental fleets that already carry Genie and Sumner.

## Why this works now (and not in 2010)

- BLDC motor drives at the 1.2 kW power level are commodity and cost $80 in OEM volume.
- 18V cordless tool batteries with 12 Ah of usable energy are in every contractor's truck.
- ESP32-based telemetry with WiFi, BLE, and LTE-M support costs under $30 for the radio stack.
- LTE-M plans for industrial telemetry are $2 to $5 per device per month.
- Cloudflare Workers and Workers KV give a single founder the ability to ship a fleet management dashboard with no servers to operate.
- Genie's foundational telescoping mast patent (US 7,966,777) expired around 2024, freeing the basic architecture.

## Design parameters (not negotiable without justification)

| Parameter | Target | Rationale |
|---|---|---|
| Capacity at full extension | 1,500 lb at 25 ft | Matches Sumner R-250. Drop-in replacement positioning. Beats Genie SLA-25 by 2.3x. |
| Stowed width | <= 32 in | Clears a 36 in doorway with 2 in either side margin. Door fit is the #1 pipefitter complaint about R-250. |
| Deployed footprint | ~48 x 52 in | Maintains 2.4:1 tipping safety factor at full extension with full load (see `stability-envelope.svg`). |
| Power | 18V brushless DC, FlexVolt and M18 sleds | Operator already owns the battery. Both major platforms supported. See `06-ip-and-legal/patent-landscape.md` on aftermarket cradle approach. |
| Backup drive | 7/16 in hex input | Handles cordless drill and hand crank for dead-battery jobsite recovery. |
| Lift time, full load to 25 ft | <= 60 s | 2x faster than manual. JET drill-drive is ~60 s. We match or beat. |
| Telemetry | ESP32, WiFi standard, LTE-M optional | WiFi covers most jobsites that have a hotspot. LTE-M is the rental fleet upsell. |
| Overload protection | 90% audible alarm, 105% hard cutoff | No competitor does this. |
| Tilt protection | 1.5 deg cutoff above 10 ft mast height | NY FACE 03NY034 fatality is the regulatory headline. |
| Standards | ANSI/ASSP A10.5-2020, EN 13157+A1:2009, OSHA 1926.451/1926.552, CE, UL where applicable | A10.5 is the controlling US standard for material hoists, see `02-engineering/safety-and-standards.md`. |

## Standards correction

The original concept brief listed ANSI MH29.1 as a primary standard. MH29.1 is the standard for industrial scissors lifts, not portable construction material hoists. The controlling US standard for the Killian Lift category is **ANSI/ASSP A10.5-2020 Material Hoists** (https://webstore.ansi.org/standards/asse/ansiasspa102020), invoked by OSHA 1926.552. This is reflected throughout the engineering documentation. MH29.1 is informative but not controlling.

## What we are not building

- Not a personnel lift. The Killian Lift never carries a worker. Personnel lifts trigger ANSI A92.20/A92.22, fall arrest, and a different regulatory class.
- Not a hydraulic lift. Hydraulic systems mean fluid changes, seal kits, and contamination failures. We use a mechanical screw or cable drive only.
- Not a one-size-fits-all. The Killian Lift v1 is the 1,500 lb / 25 ft model. Smaller and larger variants come in v2 and v3.
- Not a closed ecosystem. The hex backup ensures the lift works with any cordless drill or by hand. The lift is not bricked when the cloud is down.

## Open questions for Bez

These need a decision before the prototype build:

1. **Which battery platform first?** FlexVolt (60V auto-switching) gives more headroom and faster lift, but Milwaukee is more common in HVAC and pipefitting. The current plan supports both with a swappable sled. Confirm both are funded for v1.
2. **Smart Kit serial vs Smart Kit Plus?** The base kit is BLDC drive plus load cell plus tilt sensor. Should LTE-M and GPS be standard on every kit, or a $200 upsell? Recommendation is to make telemetry standard so the dashboard always works on every unit sold.
3. **Cloudflare or Shopify for the dashboard front end?** Both are in your stack. Recommendation: Cloudflare Workers + KV for the device API and data store, Shopify for sales and billing, a thin React app on Cloudflare Pages for the operator and fleet UI.
4. **Brand or co-brand?** "Killian" is apparently trademark-clear in IC 007/009/012 (see `06-ip-and-legal/trademark-and-naming.md`). Confirm the brand or pick an alternate before professional clearance is paid for.
5. **Direct sale only or distributor channel from day one?** Recommendation: direct via energizedengines.com for the kit. Rental fleet direct conversations for the full lift v2. No distributor margin yet.

## Reading order (next steps)

1. `01-design/specifications.md` for the full spec sheet.
2. `01-design/competitive-analysis.md` for who we beat and how.
3. `01-design/pain-points-research.md` for the source data behind every design decision.
4. `02-engineering/load-calculations.md` for the math behind the structural design.
5. `03-retrofit-kit/kit-design.md` for the v1 product.
6. `05-go-to-market/gtm-strategy.md` for the launch plan.
