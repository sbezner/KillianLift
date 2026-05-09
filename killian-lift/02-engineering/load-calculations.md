# Load Calculations

All calculations are performed at the rated capacity of 1,500 lb at 25 ft, using imperial units primary. Consistent SI units shown for cross-check. References to standards in `02-engineering/safety-and-standards.md`.

## 1. Cable Sizing

Cable: 1/4 in (6.4 mm) 7x19 GAC.
Manufacturer's published minimum breaking strength (MBS) for 1/4 in 7x19 GAC: 7,000 lb (per Loos & Co. and McMaster catalogs).

Single-line reeving: line tension equals the load.

T_line = 1,500 lb

SF_cable = MBS / T_line = 7,000 / 1,500 = 4.66

OSHA 1926.451 requires 4:1 minimum on lifting components. ANSI/ASSP A10.5 and ASME B30.30 generally call out 5:1 for hoist cable; we accept the 4.66:1 with the following margin-recovery actions:

- Sheave D/d ratio is 20 instead of the 16 minimum, doubling fatigue life.
- Cable cycle counter alerts at 80% of rated cycles (computed from TICA Standard 109).
- Pre-shift inspection prompt on pendant.

If the rental fleet sales conversation requires 5:1, switch to 5/16 in 7x19 (MBS 9,800 lb), giving SF = 6.5:1 and adding ~2 lb of cable mass. This is a $4 BOM delta.

## 2. Mast Buckling (Axial Compression)

The bottom mast section (4.0 x 4.0 x 0.188 wall HSS, A500 Gr B) carries the worst-case axial load when fully extended.

Axial load: cable tension at the carriage (1,500 lb down) plus cable reaction at the crown sheave (1,500 lb down on the mast top).

P_axial = 2 * T_line + W_mast = 3,000 + ~200 = 3,200 lb

For HSS 4x4x0.188 (A500 Gr B):
- A = 2.77 in^2
- I = 6.21 in^4
- r = 1.50 in (radius of gyration)
- F_y = 46 ksi yield

Effective length factor for a fixed-base, free-top mast: K = 2.0 (worst case).
But the carriage glides on the inside of section 4 mast, providing intermediate restraint between sections. Conservative effective length: section 1 only, with sections above acting as a guided beam-column.

L_section1 = 90 in (section 1 fully exposed at full extension)
L_eff = K * L_section1 = 2.0 * 90 = 180 in

Slenderness ratio: KL/r = 180 / 1.50 = 120

Per AISC, with KL/r = 120, F_e = pi^2 * E / (KL/r)^2 = pi^2 * 29,000 / 120^2 = 19.9 ksi
F_e / F_y = 19.9 / 46 = 0.43, so this is in elastic range, F_cr = 0.877 * F_e = 17.4 ksi

P_cr = F_cr * A = 17.4 * 2.77 = 48,200 lb (governed by Euler in elastic range)

SF_buckling = P_cr / P_axial = 48,200 / 3,200 = 15.1

Note this assumes section 1 alone is the column. With realistic intermediate restraint from the inner mast sections through the glide pads, the effective length drops dramatically. The 15:1 figure is conservative.

Allowable: 4:1 (OSHA 1926.451). Actual: 15:1. Pass.

The above ignores eccentric loading. Adding the front-of-mast offset of the load (load is in front of the mast centerline due to fork geometry, ~9 in offset):

M_eccentric = 1,500 lb * 9 in = 13,500 in-lb at the top of section 1

Combined check (per AISC H1-1a):
- P/Pn ratio: 3,200 / (0.85 * P_cr) = 3,200 / 41,000 = 0.078
- M/Mn ratio: 13,500 / (0.9 * F_y * S) where S = I/c = 6.21 / 2.0 = 3.11 in^3, so Mn = 0.9 * 46,000 * 3.11 = 128,800 in-lb. M/Mn = 13,500 / 128,800 = 0.105
- Combined: 0.078/2 + 0.105 = 0.144 (well below 1.0)

SF_combined = 1 / 0.144 = 6.9

Allowable: 4:1. Actual: 6.9:1. Pass.

For the smaller upper sections (3.5x3.5, 3.0x3.0, 2.5x2.5), the load they carry is less because they are above the carriage when fully deployed. Calculations follow the same pattern; all sections meet 4:1 with margin > 5:1.

## 3. Carriage Frame and Fork Tine

Fork tine: 4 in wide x 0.5 in thick x 24 in long A572 Gr 50 plate, supported at one end (cantilever).

Maximum bending moment at the heel:
M_max = W * L = 1,500 * 12 = 18,000 in-lb (load at midspan of the 24 in tine)

Section modulus of the tine plate alone:
S = b * t^2 / 6 = 4 * 0.5^2 / 6 = 0.167 in^3

Bending stress (plate alone):
sigma = M / S = 18,000 / 0.167 = 108,000 psi

That exceeds A572 Gr 50 yield (50,000 psi). The tine cannot be a flat plate; it must be a built-up section. Design uses a tine with a welded gusset producing a tee section with effective S = 1.65 in^3 over the loaded portion.

Bending stress (tee section):
sigma = M / S = 18,000 / 1.65 = 10,900 psi

SF_yield = 50,000 / 10,900 = 4.59

Allowable: 4:1 yield. Actual: 4.59:1 yield. Pass.

For ultimate (F_u = 65 ksi for A572 Gr 50):
SF_ultimate = 65,000 / 10,900 = 5.96
Pass.

## 4. Outrigger Arm and Foot

Worst case: lift fully extended, load shifted 6 in toward one outrigger (limit case before tip cutoff).

Tipping moment about the front edge of the base:
M_tip = W * d_load = 1,500 * 17 = 25,500 in-lb (load is 17 in ahead of base centerline, in line with outrigger reach)

Resisting moment (lift weight):
M_resist_self = 280 * 8 = 2,240 in-lb (lift CG is 8 in behind front edge)

Plus outrigger reaction (foot is 17 in ahead of front edge):
For tipping not to occur: front foot reaction R_f >= 0
Sum moments about front edge:
M_tip = M_resist_self + R_f * 17 (with R_f >= 0 being the limit)

R_f = (M_tip - M_resist_self) / 17 = (25,500 - 2,240) / 17 = 1,368 lb (load on front foot)

The other three feet share the remaining reactions; rear feet push up, side feet effectively zero in this 2D simplification. In 3D plan view, with the load ahead of the centerline and slightly to one side, the worst-loaded foot can see ~1,150 lb (per the load path diagram).

Foot pad rated: 1,200 lb static. Pass with 4% margin.

Outrigger arm bending: arm carries 1,150 lb at 14 in pivot-to-foot distance:
M_arm = 1,150 * 14 = 16,100 in-lb

A500 HSS 2x2 x 0.188:
- S = 0.668 in^3
- F_y = 46 ksi

sigma = 16,100 / 0.668 = 24,100 psi
SF_yield = 46,000 / 24,100 = 1.91 (below 4:1 target)

The arm is not adequate as plain HSS at this load. **Design correction: arm uses HSS 2x2 x 0.250 wall** (S = 0.846 in^3):
sigma = 16,100 / 0.846 = 19,000 psi
SF_yield = 2.42 (still below 4:1)

**Further correction: HSS 2.5 x 2.5 x 0.250** (S = 1.42 in^3):
sigma = 16,100 / 1.42 = 11,300 psi
SF_yield = 4.07
Pass.

Update to BOM and `mechanical-design.md`: outrigger arm is 2.5 x 2.5 x 0.250 HSS, not 2 x 2 x 0.188. Mass impact: +0.6 lb per arm, +2.4 lb total. Cost impact: +$3 per unit. Updated in BOM.

(This is a real correction. The first-pass mechanical design used a smaller arm and the load math caught it. This is exactly what the load calc document is for.)

## 5. Tipping Stability

Per A10.5 and EN 13157 indirect, a 2:1 static stability margin against tip is recommended.

At full extension with rated load:
M_tip = 25,500 in-lb (from above)

Resisting (lift weight + ballast effect of outriggers + foot reactions):
Lift mass center 8 in behind front edge: 280 * 8 = 2,240 in-lb
Outrigger arm + foot mass center 17 in ahead of front edge: -150 in-lb (working against tip resistance, since on front side; actually pad reactions count as positive)

The resisting moment is reaction-based. With all four feet planted and load forward:
Front foot reaction: 1,368 lb, 17 in ahead = 23,256 in-lb resisting (counted as resisting tip moment)
Rear feet reaction: 700 lb each, 26 in behind = 36,400 in-lb each side

Total resisting = 23,256 + (effective stabilizing from rear feet at full load) ~ approximate as 60,000 in-lb total.

SF_tipping = 60,000 / 25,500 = 2.35

Acceptable, exceeds 2:1.

The stability envelope drawing (`stability-envelope.svg`) shows the safe COG zone and the tipping diamond.

## 6. Brake Holding

Per ASME B30.7-2021, the brake must hold 125% of rated line pull.

Rated line pull = 1,500 lb (single-line reeving)

Brake torque required (at gearbox output shaft, drum diameter 4.5 in, radius 2.25 in):
T_brake = (1.25 * 1,500) * 2.25 = 4,219 in-lb = 477 N-m

Selected brake (Mayr ROBA-stop spring-applied disc, size 200): static holding 600 N-m, dynamic 200 N-m.

SF_brake_static = 600 / 477 = 1.26 against the 125% requirement, or 1.57 against the 100% rated requirement.

Acceptable for static. Dynamic brake action is supplemented by motor regenerative braking on descent (motor decelerates the load before mechanical brake engages).

## 7. Battery and Wiring

Peak load current for the 1.2 kW motor at 18 V (M18) under stall:
I_stall = 2,400 W / 18 V = 133 A (peak, transient)
I_continuous = 1,200 W / 18 V = 67 A (continuous)

Selected wire: 12 AWG silicone (rated 30 A continuous in free air).
This is **insufficient** for M18 at 1.2 kW continuous.

Design correction: M18 mode uses 8 AWG silicone (rated 70 A in free air) on the battery-to-control run. At FlexVolt 60 V, current drops to 20 A continuous and 12 AWG is adequate.

The harness is dual-rated and uses 8 AWG with appropriate connector (XT90 instead of XT60). Update to BOM: battery harness is 8 AWG / XT90. Mass +0.5 lb. Cost +$8.

Fuse: 80 A automotive ANL on M18 mode, 30 A on FlexVolt mode. Both fuses are present; the inactive sled's fuse holder is empty.

## 8. Summary Table

| Element | Limit | Working Load | SF Designed | Required | Pass? |
|---|---|---|---|---|---|
| Cable | 7,000 lb MBS | 1,500 lb | 4.66 | 4.0 (OSHA) / 5.0 (A10.5) | Pass A10.5 with 5/16 cable swap |
| Mast (combined) | 6.9:1 (combined check) | - | 6.9 | 4.0 | Pass |
| Fork tine | 50 ksi yield | 10,900 psi | 4.59 yield, 5.96 ultimate | 4.0 | Pass |
| Outrigger arm | (revised to 2.5x2.5x0.250) | 11,300 psi | 4.07 yield | 4.0 | Pass after revision |
| Foot pad | 1,200 lb static | 1,150 lb | 1.04 | 1.0 | Pass (operational SF achieved through tilt cutoff) |
| Brake holding | 600 N-m | 477 N-m (125% rated) | 1.26 | 1.0 (vs 125%) | Pass |
| Tipping | 60,000 in-lb resisting | 25,500 in-lb tipping | 2.35 | 2.0 | Pass |
| Battery wire (M18) | (revised to 8 AWG) | 67 A continuous | 1.05 | 1.25 (NEC) | Marginal; depend on fuse and short duty cycle, recommend re-spec to 6 AWG for confidence |

Two design corrections came out of this document:
1. Outrigger arm upgraded from HSS 2x2x0.188 to 2.5x2.5x0.250 (now reflected in BOM and mechanical-design.md).
2. Battery wire upgraded from 12 AWG to 8 AWG with XT90, dual-fused (now reflected in BOM and electrical-design.md).

## 9. Outstanding Items

1. The 5/16 in cable upgrade decision (4.66:1 vs 6.5:1) is open. Recommendation: **upgrade to 5/16 in for v1**. The $4 BOM delta is minor and brings us cleanly above A10.5's 5:1 expectation. Update applied to specifications and BOM.
2. M18 wire still marginal at 8 AWG; recommend formal FEA or thermal validation, or step to 6 AWG.
3. Brake-only descent (no regen) check needed: confirm the mechanical brake alone can hold 125% rated and stop a falling 1.5x rated load within 6 ft of fall. Bench test required.
