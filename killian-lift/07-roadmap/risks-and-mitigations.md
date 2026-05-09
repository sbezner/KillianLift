# Risks and Mitigations

A scrub of what can go wrong, by category, with concrete mitigation actions.

## 1. Technical Risks

### 1.1 BLDC + cable winch drive doesn't hit the 50 second lift time at full load

- **Likelihood:** Low
- **Impact:** Medium - undermines the "twice as fast" headline message
- **Mitigation:** Phase 1 prototype testing validates the time-to-lift on a real R-250 before public commits. If we miss, we either drop the marketing claim, increase battery voltage to 60V (FlexVolt only), or upsize the motor.

### 1.2 Cable wear is faster than predicted, leading to early replacements and warranty claims

- **Likelihood:** Medium - cable life is hard to predict from first principles
- **Impact:** High - hurts margin via warranty cost, hurts reputation
- **Mitigation:** D/d ratio of 20 (industry minimum is 16). 5/16 cable instead of 1/4 (5:1 SF, more margin). Cycle counter prompts pre-shift inspection at 80% of expected life. Telemetry fault when wire breaks observed. Cable supplier is Loos & Co with traceability.

### 1.3 Brake failure under load causes incident

- **Likelihood:** Very Low
- **Impact:** Catastrophic
- **Mitigation:** Spring-applied / power-released brake (fail-safe design). Holds 200% of rated. Factory-tested on every unit. Mechanical 7/16 hex backup gives operator manual control. Telemetry logs every brake actuation.

### 1.4 Tilt sensor calibration drifts in field

- **Likelihood:** Medium - mechanical mounting is sensitive to abuse
- **Impact:** Medium - either false positives (lift refuses to work) or false negatives (allows operation when it shouldn't)
- **Mitigation:** Annual re-cal procedure documented. Cloud dashboard alerts when tilt readings show drift. Field re-cal kit available.

### 1.5 ESP32 firmware bug causes lift to malfunction

- **Likelihood:** Low - decoupled architecture (driver MCU is hard real-time, supervisor handles networking)
- **Impact:** Medium - if it bricks the lift but doesn't cause physical harm
- **Mitigation:** Driver MCU is independent and has its own safe state. Supervisor failure disables the lift but doesn't move it. OTA dual-bank firmware with rollback. Beta channel for early adopters. Staged rollout for production updates.

## 2. Regulatory Risks

### 2.1 OSHA or ANSI changes ruling on smart lifts

- **Likelihood:** Low - smart-lift class is too new for active regulation
- **Impact:** Medium to High
- **Mitigation:** Design to ANSI/ASSP A10.5-2020 from day one. Maintain ASME B30.7 compliance on the winch. Engage ASTM and ANSI committees in Phase 3 to influence next-cycle revisions.

### 2.2 FCC ID delay or denial

- **Likelihood:** Low - we use pre-certified Espressif radio modules
- **Impact:** Medium - can't ship telemetry units in US
- **Mitigation:** Pre-compliance testing in Phase 2. Use only modular-cert radios (FCC ID inheritance). If non-modular path needed, lab time at TUV or UL is 6 to 12 weeks; budget allows for one slip.

### 2.3 CE delay or denial

- **Likelihood:** Low
- **Impact:** Medium - delays EU sales
- **Mitigation:** Self-declared since not Annex IV. Engage notified body only as advisory if needed. Pre-compliance EMC, EN 14492-1 review, EN ISO 12100 risk assessment all done in Phase 2.

### 2.4 UL listing delay

- **Likelihood:** Medium - UL processes are slow
- **Impact:** Low to Medium - UL is "nice to have" for fleet sales, not a regulatory requirement
- **Mitigation:** Apply by Q1 2027. Continue selling without UL in the meantime. Two fleets we have warm intros with do not require UL listing.

### 2.5 New product liability claim post-incident

- **Likelihood:** Medium over 5 years - any product can be misused
- **Impact:** High - depending on injury severity
- **Mitigation:** Product liability insurance from day 1 ($2M to $5M policy). Clear no-rider warnings, captive interlocks, telemetry forensics. Operator manual signed acknowledgment. Defense in depth.

## 3. Commercial Risks

### 3.1 Sumner / SFE Group launches a competing smart upgrade for their R-250

- **Likelihood:** Medium - they have the brand and dealer network
- **Impact:** High - they have a captive customer base
- **Mitigation:** First-mover advantage. By the time Sumner reacts (assume 18 to 24 months), Killian has 5,000+ kits in the field with a trusted brand. Patent provisionals on the integrated control architecture and captive cam-lock outrigger.

### 3.2 JET extends their JML-X with telemetry and load cell

- **Likelihood:** Medium - JET's October 2025 launch shows they're investing
- **Impact:** Medium
- **Mitigation:** JET's product is bare-tool drill drive, not battery-direct. Killian's native cordless integration plus the cloud dashboard is at least a year ahead. We compete on completeness of solution, not on the drill-drive angle alone.

### 3.3 Genie launches a battery-powered SLA replacement

- **Likelihood:** Low to Medium - Genie has resources but the 1,500 lb segment is not their focus
- **Impact:** High if it happens
- **Mitigation:** Genie's investment is in aerial lifts, not material lifts. The Superlift product line has not seen a major refresh in 10+ years. If Genie does enter, our differentiation is software, telemetry, brand independence, and price.

### 3.4 First rental fleet pilot fails

- **Likelihood:** Medium
- **Impact:** Medium - delays Phase 3 fleet revenue but doesn't kill the kit business
- **Mitigation:** 50 unit pilot is small enough to absorb. Iterate on KPIs, ship fixes via OTA, re-pitch within 6 months. Contingency: shift fleet focus to a regional like LGH if national fleets are slow.

### 3.5 Pricing pressure from contractors trying to bargain $699 to $499

- **Likelihood:** Medium - typical contractor negotiation
- **Impact:** Low to Medium - erodes margin, cap-locks our price
- **Mitigation:** Hold list price. Use volume discounts (5+ units at 5% off) for legitimate large orders. Offer financing to remove the $699 affordability complaint. Resist Amazon price floor erosion.

## 4. Supply Chain Risks

### 4.1 BLDC motor vendor sole-source disruption

- **Likelihood:** Low to Medium
- **Impact:** High - production stops
- **Mitigation:** Qualify second source by Phase 2. Maintain 90 days of motor inventory. Consider a Mean Well or Maxon backup with shorter form factor.

### 4.2 Battery cell counterfeit risk in OEM packs

- **Likelihood:** Low - we don't make the packs
- **Impact:** Medium - bad customer experience, possible liability
- **Mitigation:** Customer brings own pack. We verify pack via NTC and voltage checks. We don't buy bare cells. Recommend OEM packs only in our docs.

### 4.3 PCBA EMS quality issues

- **Likelihood:** Low - JLCPCB and similar are mature
- **Impact:** Medium - field returns
- **Mitigation:** ICT and AOI on all boards. Sample destructive (X-ray solder joint inspection) on 1 in 100. Move to Sanmina or similar at 5K unit run rate.

### 4.4 Cable supplier delivery slip

- **Likelihood:** Low
- **Impact:** Medium
- **Mitigation:** 90 days of cable in stock at the 3PL. Loos & Co is a stable supplier with US manufacturing.

### 4.5 Tariffs on imported components

- **Likelihood:** Medium - trade policy fluctuations
- **Impact:** Low to Medium - 15 to 25% on motor/gearbox is plausible
- **Mitigation:** Domestic-first sourcing. If tariffs hit, factor into pricing. We have ~20% margin headroom to absorb if needed.

## 5. Financial / Cash Risks

### 5.1 Phase 2 capex exceeds funding

- **Likelihood:** Medium
- **Impact:** High - delays Phase 2 launch
- **Mitigation:** Founder pre-order at $599 funds first 200 units. CM payment terms Net 60. Only convert provisionals at month 11 not month 1. If gap remains, $150k seed bridge is straightforward at this stage.

### 5.2 Inventory financing strains cash flow

- **Likelihood:** Medium at Phase 3
- **Impact:** Medium
- **Mitigation:** Use accounts payable financing on key components. Negotiate consignment with 3PL on slow movers. Maintain 60 day cash runway minimum.

### 5.3 First fleet pilot drags out for 12 to 18 months without commitment

- **Likelihood:** Medium - rental fleets are slow
- **Impact:** Medium
- **Mitigation:** Don't depend on fleet revenue in Phase 1-2 financial plan. Conservative case in `financial-model.csv` assumes no fleet conversion until 2028.

## 6. Brand and Legal Risks

### 6.1 Trademark conflict with another "Killian" mark in IC 007 / IC 009

- **Likelihood:** Low - search showed no obvious conflicts
- **Impact:** High if real - would force a name change
- **Mitigation:** Comprehensive clearance search before filing. Have backup name ready: "Steele Lift" or "Riv Lift".

### 6.2 Sumner sues for trade dress or trademark on Roust-A-Bout references

- **Likelihood:** Low - nominative fair use is well-established
- **Impact:** Medium
- **Mitigation:** All references are descriptive (compatibility lists), with proper attribution and disclaimer. Counsel review of all marketing referencing competitor brands.

### 6.3 DeWalt or Milwaukee asserts trademark over battery branding

- **Likelihood:** Very Low
- **Impact:** Low to Medium
- **Mitigation:** Nominative fair use. No counterfeit batteries. Standard disclaimer. Same posture as 100+ camera/light brands that accept OEM packs.

### 6.4 Insurance dispute after a real-world incident

- **Likelihood:** Low
- **Impact:** High
- **Mitigation:** Quality product liability carrier (e.g. Chubb or Liberty Mutual) with specific lift product experience. Robust documentation of every shipped unit's test certificate. Telemetry as forensic record.

## 7. Operational Risks

### 7.1 Bez burnout / single point of failure on operations

- **Likelihood:** Medium - founder running solo through Phase 1
- **Impact:** High
- **Mitigation:** Hire contractor engineer in Phase 1, full-time hire in Phase 2. Document everything in this repo. Maintain delegation discipline.

### 7.2 3PL operational issue (mis-ships, lost inventory)

- **Likelihood:** Low to Medium
- **Impact:** Medium
- **Mitigation:** Choose a regional 3PL with industrial product experience. SLA on accuracy >= 99%. Audit monthly.

### 7.3 Customer support overwhelmed by install issues

- **Likelihood:** Medium - first 90 days is critical
- **Impact:** Medium
- **Mitigation:** Self-service install video. AI chatbot trained on the install guide and FAQs. Email response 24 hour SLA. Bez personally responds to first 50 customers.

## 8. Risk Heat Map

| Risk | Likelihood | Impact | Priority |
|---|---|---|---|
| Sumner / Genie launches competing kit | Medium | High | High |
| Cable wear / warranty cost | Medium | High | High |
| Trademark conflict | Low | High | Medium |
| Phase 2 capex shortfall | Medium | High | High |
| BLDC motor sole source | Medium | High | High |
| Bez burnout | Medium | High | High |
| Brake failure | Very Low | Catastrophic | High |
| Tilt sensor drift | Medium | Medium | Medium |
| First fleet pilot fails | Medium | Medium | Medium |
| Pricing pressure | Medium | Medium | Medium |
| Customer support overload | Medium | Medium | Medium |

The High-priority items are addressed in this document with concrete mitigations. They are tracked monthly during Phase 1 and quarterly thereafter.

## 9. Open Items for Bez

1. Confirm product liability insurance carrier and policy size before first shipment.
2. Confirm second-source motor vendor is in qualification.
3. Confirm 90 day cable inventory and 60 day motor inventory targets.
4. Confirm 60 day cash runway minimum is written into financial planning.
5. Confirm contractor engineer hire by Aug 2026.
