# Patentability Assessment

What is novel in the Killian Lift, and what should we file as provisional patent applications during Phase 2 (Q3-Q4 2026).

This document is not legal advice. Final decisions on filing and claim drafting must be made with patent counsel.

## 1. Provisional Application Strategy

A provisional patent application costs ~$2,500 in attorney fees. It establishes priority for 12 months and gives us "patent pending" status. Within 12 months, we either:

- Convert to a non-provisional (~$8,000 to $15,000 in fees through grant)
- File a PCT application for international protection (~$5,000)
- Let the provisional lapse (no harm, just no priority date)

We file provisionals on the genuinely novel claims now and decide which to convert based on commercial traction.

## 2. Candidate Inventions

### 2.1 Integrated Smart Lift Control Architecture (Invention A)

**What is novel:** the specific combination of:

1. A portable material lift with a brushless DC drive
2. A load cell on the cable anchor that gates lift function via electronic relay
3. A tilt sensor with height-conditional cutoff (1.5 deg above 10 ft)
4. Captive outrigger limit switches that gate lift function
5. ESP32-based telemetry that reports load, height, tilt, and faults to a cloud dashboard
6. A 7/16 hex backup that bypasses electronic control without disabling sensors

The combination of all 6 in a single product is not seen in the prior art. Individual elements are commodity (load cells, tilt sensors, telemetry); the integrated state machine that coordinates them is the novelty.

**Claim direction:** apparatus claims for the combined system, plus method claims for the interlock state machine.

**Risk if we don't file:** a fast follower (likely JET, possibly Genie) could file first and force us into a defensive position.

**Recommendation:** **File.** This is the umbrella patent that protects the product category we are creating.

### 2.2 Captive Cam-Lock Outrigger with Deployment Confirmation (Invention B)

**What is novel:** outrigger arms that:

1. Are non-removable (captive) on the base via permanently retained pivot
2. Include a cam-lock mechanism that engages a sealed micro-switch in the deployed position
3. Cross-validate deployment state with the firmware tilt-cutoff logic before enabling lift function

Existing material lifts (Genie, Sumner) use removable stabilizer pins that can be lost. JLG aerial lifts use captive outriggers but without the cam-lock + switch + firmware integration.

**Claim direction:** apparatus claim on the captive cam-lock with embedded confirmation switch; system claim on the firmware-validated deployment state preventing lift function.

**Recommendation:** **File.** Tightly defensible, and the rental fleet sales pitch ("nothing to lose at the counter") rests on this.

### 2.3 Telemetry-Driven Predictive Cable Replacement (Invention C)

**What is novel:** a method of:

1. Counting load cycles weighted by load magnitude per ASME B30.30 / TICA Std 109
2. Storing the cumulative cycle count against a cable lot identifier
3. Predicting cable end-of-life based on cycle count and observed load distribution
4. Notifying the operator and fleet manager at predetermined thresholds (e.g. 80% expected life)

No commercial material lift uses telemetry to predict cable replacement. JLG aerial lifts and some industrial cranes have manual cycle counters; none integrate cycle-weighted predictive analytics with cloud reporting.

**Claim direction:** method claims on the cycle-weighting and life-prediction algorithm; system claims on the cloud + device combination.

**Recommendation:** **File.** Software / method claims have a wider potential moat than apparatus claims here.

### 2.4 Retrofit Kit Architecture (Invention D)

**What is novel:** a retrofit kit for a manual material lift comprising:

1. A mounting bracket that uses existing OEM threaded holes without drilling or welding
2. A square-coupler interface that mates a brushless DC drive output to the OEM hand-crank shaft
3. A load cell shear-pin that physically replaces the OEM cable anchor
4. A pre-terminated, color-coded harness with keyed connectors for installation in <30 minutes
5. Reversible installation that does not modify the host product's load-bearing structure

The reversibility argument is the most novel piece. A retrofit that adds smart-lift compliance without invalidating the host product's certifications is not seen in any prior art search.

**Claim direction:** apparatus claims on the kit architecture; system claims on the kit + cloud combination; method claims on the install procedure.

**Recommendation:** **File.** This is the v1 product. Patenting it is essential.

## 3. Filing Plan

| Provisional | Title | Filing target | Cost (provisional) | Cost (non-provisional if converted) |
|---|---|---|---|---|
| A | Integrated Smart Lift Control Architecture | Sept 2026 | $2,500 | $12,000 |
| B | Captive Cam-Lock Outrigger with Deployment Confirmation | Oct 2026 | $2,500 | $10,000 |
| C | Telemetry-Driven Predictive Cable Replacement | Nov 2026 | $2,500 | $14,000 (method claims tend to require more arguing) |
| D | Retrofit Kit Architecture for Manual Material Lifts | Sept 2026 | $2,500 | $10,000 |
| **Total** | | | **$10,000 (provisionals)** | **$46,000 (full conversion)** |

Decision to convert is made at month 11 (one month before each provisional expires). At that point we have:

- Real commercial data (kits sold, fleet pilots in progress)
- Information on whether competitors are working on similar tech
- Updated FTO position

## 4. International Filing Strategy

PCT filing at the 12-month mark would extend protection to most major markets at a cost of ~$5,000 per provisional. We are unlikely to file PCTs on all four. Recommended priorities:

| Provisional | PCT? | Reasoning |
|---|---|---|
| A (Integrated Smart Lift) | Yes | Broadest claim, most defensible globally |
| B (Captive Cam-Lock) | Maybe | Geographic competitors (Genie EU subsidiaries) make this useful in EU |
| C (Predictive Cable) | Yes (US + EU) | Software / method claims are more defensible globally |
| D (Retrofit Kit) | No (US only) | Tightly market-specific to the US Roust-A-Bout / Genie installed base |

PCT cost in Year 2: ~$10,000 to $15,000.

## 5. Trade Secrets vs Patents

Some assets are better as trade secrets than patents:

| Asset | Patent or Trade Secret? | Reasoning |
|---|---|---|
| Cycle-weighting algorithm specifics | Trade secret + Patent C | Patent the method; keep the specific weights and thresholds as trade secret |
| FOC tuning parameters for the BLDC | Trade secret | Tuned per motor vendor; reverse engineering provides little value |
| Load cell calibration recipe | Trade secret | Proprietary 5-point calibration procedure |
| Cloud API design | Trade secret + open API surface | The implementation is internal; the public API is open for partners |
| Customer list and segmentation | Trade secret | Confidential under contract |
| Firmware source | Trade secret + signed binary | Source not distributed; only signed builds shipped |

## 6. Patent Watch

We monitor competitor filings monthly:

- Sumner / SFE Group
- Terex / Genie
- JET Tools / JPW Industries
- Stanley Black & Decker (DeWalt)
- TTI / Milwaukee Tool

Watch keywords: "telescoping mast", "material lift telemetry", "drill drive winch", "cordless lift battery", "load cell hoist cutoff", "tilt sensor lift". A monthly Google Patents alert (free) plus a paid Questel or PatBase subscription ($300/month) covers the active landscape.

## 7. Defensive Posture

If we are sued for patent infringement:

1. The patents found in the FTO analysis (US 9,505,596 screw-drive, US 8,505,688 mast-lift system) are the most likely vectors. We have already designed around both.
2. Our own provisional / patent portfolio is defensive countersuit material.
3. We carry product liability and IP insurance starting Phase 2.

If we sue someone for patent infringement (e.g. a fast-follower copies our captive cam-lock):

1. Notice via counsel, not directly.
2. Focus on injunctions and licensing, not damages, to keep the litigation manageable.
3. Realistic timeline: 18 to 24 months. Filing alone can deter a competitor.

## 8. Open Items

1. Engage patent counsel for provisional drafts. Recommendation: Allen Smith or Locke Lord (Texas-based IP firms with industrial product experience).
2. Confirm budget: $10k for the four provisionals in Q3-Q4 2026, plus $46k earmarked for non-provisional conversion in 2027.
3. Decide on patent watch tooling. Recommendation: free Google Patents alerts in Phase 1, $300/month Questel in Phase 2.
4. Audit existing trade secret hygiene: NDA template, employee onboarding, source control access. Recommendation: standard "do as engineering startup" hygiene applies; not a near-term risk.
