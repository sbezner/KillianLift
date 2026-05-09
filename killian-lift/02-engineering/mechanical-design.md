# Mechanical Design

## 1. Frame and Base

### 1.1 Base body

Cast aluminum 6061-T6 base body, machined on top and bottom mating surfaces. Cast geometry includes:

- Mast tube interface, 4.05 in square ID with 0.020 in clearance
- Four outrigger pivot bores, 0.625 in dia with sealed bushings
- Battery sled mounting boss, threaded M6 in cast bosses
- Winch motor mounting plate, 4x M10 threaded inserts
- Transport wheel axle bores, 0.875 in dia
- Caster mounting pads, 4x M8 surface pattern

Material choice: 6061-T6 aluminum reduces base mass by ~25 lb compared to A36 steel weldment of equivalent geometry. Machined-from-cast is feasible at 1,000 unit volume (see `04-manufacturing/manufacturing-plan.md`).

### 1.2 Outrigger arms

A500 Grade B HSS 2x2 x 0.188 wall, mitered and welded into a tee at the foot end. Powder-coated.

- Length, pivot to foot center: 14.0 in
- Working length, fully deployed: 17.0 in extension from base edge
- Single pivot bushing, sealed Igus iglidur G

### 1.3 Cam-lock and foot

- Cam-lock body: cast 304 stainless. Single 90 deg handle motion engages 5/16 in ground-and-hardened pin into a captive bushing on the base.
- Cam-lock includes a sealed micro-switch in the engaged position. Switch closure is required by firmware before lift function enables.
- Leveling foot: 1/2-13 ACME screw, 1/2 in travel, finger-knob top. Foot pad is 3 in dia x 0.25 in 80A polyurethane bonded to a 7075 aluminum disk.

### 1.4 Mast

Four telescoping sections. All A500 Grade B HSS. Sections are mitered, ground, and assembled with internal UHMW glide pads at corners (8 pads per joint, 4 corners x 2 levels).

| Section | Outer | Wall | ID nominal | Length |
|---|---|---|---|---|
| 1 (outer) | 4.0 x 4.0 | 0.188 | 3.62 x 3.62 | 7 ft 6 in |
| 2 | 3.5 x 3.5 | 0.180 | 3.14 x 3.14 | 7 ft 0 in |
| 3 | 3.0 x 3.0 | 0.165 | 2.67 x 2.67 | 6 ft 6 in |
| 4 (top) | 2.5 x 2.5 | 0.160 | 2.18 x 2.18 | 6 ft 0 in |

Total deployed mast length: 27 ft. Working stroke: 22 ft (6 in to 22 ft 6 in fork floor with carriage).

### 1.5 Crown

Cast aluminum sheave housing welded or pinned to top of section 4. Houses a single 5.0 in PCD sheave on a 6204-2RS bearing. Cable enters from top, departs vertically down the inside of the mast to the carriage.

### 1.6 Carriage and forks

Welded steel carriage, 24 in wide. Captive on the outside of section 4 mast via four UHMW glide blocks. Two fork tines:

- Tine: 24 in long, 4 in wide, 0.5 in thick A572 Grade 50 plate
- Heel reinforcement: gusset welded to carriage frame
- Tine spacing: adjustable in 1 in steps from 12 to 22 in
- Optional 36 in tine and pipe-cradle accessory kit (see GTM)

### 1.7 Wheels

- 8 in solid rubber transport wheels, rear, 0.875 in axle, sealed flange bearings. Static rating 600 lb each.
- 4 in steel-rim swivel casters, front, 350 lb each, locking. M8 four-bolt mount.

## 2. Materials Summary

| Component | Material | Process |
|---|---|---|
| Base body | 6061-T6 aluminum | Sand cast, CNC machined |
| Outrigger arms | A500 Gr B HSS 2x2 x 0.188 | Mitered, MIG welded |
| Cam-lock body | 304 stainless | Investment cast |
| Cam-lock pin | 4140 Q&T, RC 38-42 | Ground |
| Foot pad | 80A PUR bonded to 7075 | Bonded |
| Mast sections | A500 Gr B HSS | Sawed, milled, deburred |
| Glide pads | UHMW-PE | CNC machined |
| Crown sheave housing | A356-T6 aluminum | Cast, machined |
| Carriage frame | A572 Gr 50 | Laser cut, MIG welded |
| Fork tines | A572 Gr 50 plate | Laser cut, hardened heel |
| Drum | 6061-T6 aluminum | Turned, knurled groove |
| Cable | 1/4 in 7x19 GAC | Vendor assembly with thimble and swaged end |
| Pendant housing | ABS+PC | Injection molded |
| Battery sled | Glass-filled nylon (PA6-GF30) | Injection molded with brass inserts |
| Control box housing | 6063-T5 aluminum | Extrusion + machined endcaps |
| Hardware | 18-8 stainless metric throughout | Off the shelf |

## 3. Joints and Fasteners

- Structural joints: M10 socket head cap screws, property class 12.9, anti-seize on threads, torqued per spec.
- Sheave axles: 12 mm shoulder bolts, sealed bearings, retained with M8 bolt and lock washer.
- Winch motor to base: 4x M10 SHCS, blue Loctite, torque 35 N-m.
- Outrigger pivot: M12 shoulder bolt, sealed bushing, lubricated for life.
- Cable termination: swaged copper sleeve at fork end, factory crimp at drum end, both per RR-W-410F.

## 4. Surface Finish

- Steel weldments: phosphated, primed, two-coat polyurethane powder coat. Color: Killian Orange #F0A000 with safety yellow accents on outriggers.
- Aluminum castings: anodized clear (machined surfaces) or hard-anodized black (wear surfaces).
- Stainless: passivated per ASTM A967.
- Pendant housing: textured ABS+PC, matte finish.

## 5. Critical Tolerances

| Feature | Tolerance | Inspection |
|---|---|---|
| Mast section straightness | 0.010 in over 6 ft | CMM at vendor |
| Mast section squareness | +/- 0.003 in across diagonal | Go/no-go gauge |
| Crown sheave PCD | 5.000 +0/-0.005 in | Machined-in spec |
| Drum bore concentricity | 0.002 in TIR | First article |
| Cable swage retention | 100% of cable breaking strength | Pull-test 1 in 100 |
| Brake clearance | 0.015 to 0.025 in | Feeler gauge per assembly |
| Outrigger pivot hole pattern | +/- 0.005 in true position | CMM first article |

## 6. Reference Drawings

| Drawing | Description |
|---|---|
| KL-100-001 | Overall isometric, deployed |
| KL-100-002 | Overall folded / transport |
| KL-100-003 | Base / outrigger top down, 2 states |
| KL-100-004 | Mast cross section + cable routing |
| KL-100-005 | Winch assembly sectioned |
| KL-100-006 | Outrigger detail |
| KL-100-007 | Control system block |
| KL-100-008 | Load path diagram |
| KL-100-009 | Stability envelope |

All in `01-design/diagrams/`.

## 7. Design Decisions Worth Noting

1. **Aluminum cast base, not steel weldment.** Saves 25 lb. Tooling cost is higher (~$22k for the pattern and core boxes), but break-even is at 380 units. Machine weight is the loudest market complaint, so this is the right place to invest.
2. **HSS mast, not aluminum extrusion.** Aluminum extrusion was considered. It saves another 18 lb but doubles material cost and creates buckling concerns at 25 ft. Steel HSS is the right call for v1; revisit for v3.
3. **Single-line cable reeving, not double.** A 1,500 lb load on a single 1/4 in 7x19 cable gives a 4.66:1 SF. Double-reeving would give 9:1 but doubles cable wear, halves drum capacity, and slows the lift. A10.5 requires 5:1 minimum on cable. Single-line just makes it; we accept the design margin and use a longer-life sheave (D/d 20 instead of 16) to compensate.
4. **Captive everything.** No removable pins. No removable forks. No removable stabilizer set. The rental fleet drove this decision.
5. **Mast pivot at base, not detachable.** Genie's mast detaches for transport. Sumner's does not. We don't, because every detachable joint is a fatigue site and a missing-part risk. The tradeoff is stowed length of 62 in (fits any pickup with the tailgate down).
