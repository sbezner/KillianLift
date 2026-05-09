# Pain Points Research

Documented complaints from operators, mechanics, fleet managers, and incident reports. These are the failure modes the Killian Lift and Smart Kit are designed to fix.

Sources are cited inline. Quotes are verbatim where indicated; otherwise paraphrased.

## 1. Hand-crank fatigue

The dominant pain point in the category. JET designed its entire October 2025 product line around it: the JML-24X marketing copy says the "drill drivable winch eliminates fatigue and improves safety" (https://jettools.com/24-ft-material-lift-jml-24x). The JET launch press release frames the redesign explicitly around contractor exhaustion from manual cranking (https://www.constructionowners.com/press-release/jet-tools-launches-new-generation-of-material-lifts).

A typical Sumner R-250 lift to 25 ft requires 90 to 120 seconds of continuous cranking by an operator who often started the day with a 15 minute push to the work area.

**Fix in Killian:** brushless drive. Operator presses a button. Time to 25 ft drops from 100 s of cranking to 50 s of standing.

## 2. Stuck mid-extension or refusal to lower

JustAnswer thread on a Genie SLA-15: "lifts up but won't lower past 3 feet" (https://www.justanswer.com/industrial-equipment/epnsc-genie-lift-go-up-when-3ft-hight-doesn-t.html). On the SLC-24: "tapered pins can become stuck, preventing the unit from moving up or down" (https://www.justanswer.com/industrial-equipment/78nbx-genie-slc-24-duct-lift-when-extend-10.html).

Root causes are airlocks in fluid systems, contaminated grease, and worn brake disks.

**Fix in Killian:** dry mechanical drive (no hydraulic fluid), spring-applied power-released brake with proper duty cycle, BLDC controller with regenerative braking on the way down so the load is always under positive control.

## 3. Cable does not retract when laid horizontal for transport

SLA-20 owner: "the cable loosens but doesn't retract because the weight distribution prevents proper winding" when the unit is laid horizontal in a van or pickup bed (https://www.justanswer.com/industrial-equipment/p1pm9-genie-superlift-advantage-sla-20that-almost.html). Field workaround is to pre-spool the cable manually before transport.

**Fix in Killian:** cable spool switch (KL diagram-007). The system detects when 2 dead wraps remain and refuses to pay out further. A "transport mode" button on the pendant pre-tensions the cable before laying down.

## 4. Cable wear, fraying, frequent replacement

Genie's own service docs require operators to "Inspect the Cable and Cable Pulleys" on every shift and explicitly forbid use "with a worn, frayed, kinked or damaged cable" (https://manuals.genielift.com/parts%20and%20service%20manuals/data/Service/Material%20and%20Small%20Personnel%20Lifts/33953.pdf, https://manuals.genielift.com/parts%20and%20service%20manuals/data/Service/Material%20and%20Small%20Personnel%20Lifts/115409.pdf).

JLG factory rep on Practical Machinist: "Cable flexing in linkages is where 50% of trouble starts, with the rest in switches" (https://www.practicalmachinist.com/forum/threads/genie-s60-boomlift-electrical-issues-no-start.390216/).

**Fix in Killian:** D/d ratio of 20 (industry minimum is 16) on all sheaves, increasing cable bend radius and extending fatigue life roughly 3x. Telemetry counts cycles automatically and pushes a maintenance alert at 80% of expected cable life.

## 5. Brake and friction-disk wear

Genie SLA service manual schedules "Replace the Winch Friction Disks" and "Inspect the Safety Brake System" as routine items. The Genie tech tip on releasing a stuck mast brake exists because operators encounter brakes that won't release: https://www.genielift.com/docs/default-source/tech-tips/aerial-work-platforms/mast-brake-release-sla.pdf. Aftermarket Genie SLA Safety Brake Assemblies are stocked items at HTS Spares (https://www.htsspares.com/catalogue/plant/genie-sla-material-lift-parts/show/genie-sla-safety-brake-assembly-oem-35101gt), indicating field replacement is common.

**Fix in Killian:** spring-applied / power-released brake on the gearbox output shaft, not on the cable drum. Brake is sized to ASME B30.7 (holds 200% of rated line pull) and is engaged by default whenever the motor is not actively driving. No friction disks in the cable path.

## 6. Tip-overs from missing or improper stabilizer use

NY State FACE report on a fatal Genie SLA tip-over: the investigation found "the interlock safety feature that was designed to ensure use of the stabilizing device was found to be inoperable" (https://www.health.ny.gov/environmental/investigations/face/docs/03ny034.pdf). Genie's own safety page calls out tip-over and the requirement that "outriggers, stabilizers, or wheel chocks should be used as necessary" (https://www.genielift.com/en/support/safety, https://sielift.com/2024/05/10-safety-tips-for-genie-lifts/).

**Fix in Killian:** captive cam-lock outriggers (cannot be lost, cannot be left at the shop), four limit switches that confirm all four are deployed before lift function enables, tilt sensor with hard cutoff above 1.5 deg when mast is above 10 ft. Software interlock cannot be defeated without physically removing the controller, leaving forensic evidence.

## 7. Loading into a pickup truck is dangerous and often a 2-person job

Genie SLA-25 weighs 405 lb (https://www.access-platforms.com/item/Genie-SLA25-Superlift-Advantage-Standard-Base-Material-Lift). Sumner R-250 weighs 381 lb (https://www.amazon.com/Sumner-R-250-381-Pound-Roust-A-Bout-Lift/dp/B002PAQ2VE). NIOSH and OSHA flag that "lifting loads heavier than about 50 pounds will increase the risk of injury" (https://www.osha.gov/otm/section-7-ergonomics/chapter-1, https://ehs.unc.edu/topics/ergonomics/lifting-and-material-handling/).

HVAC contractors discuss this routinely: https://hvac-talk.com/vbb/threads/2213997-Small-material-lifts, https://www.hvac-talk.com/threads/anyone-own-their-own-lift-s.1647271/.

**Fix in Killian:** target <280 lb at 25 ft / 1,500 lb capacity through aluminum base components and weight-optimized HSS mast sections. The result is a 30% weight reduction compared to the SLA-25 while increasing capacity 2.3x.

## 8. Slow deployment / disassembly

The Sumner Roust-A-Bout family is marketed as "quickly breaks down for easy storage and transportation" but reviews note multi-piece disassembly to fit a service van, vs. one-piece Genie SLAs that fold but don't break down (https://sumner.com/products/lifts/roust-a-bout/). Multi-piece reassembly on site costs minutes per setup, dozens of times per week.

**Fix in Killian:** captive everything. Outriggers fold on hinges. Mast collapses in place. No removable parts to lose, label, or hunt for.

## 9. Long shop turnaround for repair and inspection

HVAC-Talk thread: an operator stated for Genie brand lifts, every time a lift goes to the shop it takes at least three weeks to get fixed, and even annual safety inspections take at least a week (paraphrase from https://www.hvac-talk.com/threads/anyone-own-their-own-lift-s.1647271/).

**Fix in Killian:** modular replaceable assemblies (winch unit, controller, pendant, battery sled) all swap with hand tools in minutes. Telemetry pushes diagnostic codes to the cloud so the shop knows exactly what part to pull from inventory before the lift arrives.

## 10. Missing and damaged parts on rentals

eBay rental-fleet listings show Sumner 2020 contractor lifts sold "for parts or not working" with missing handles, forks, or stabilizers (https://www.ebay.com/itm/126361083792). Genie's published service manual 33953 lists routine "missing pin/lock pin" and stabilizer-set inspection failures as fleet issues. Anecdotal reports from contractors on hvac-talk and ContractorTalk consistently mention receiving rental Genie SLAs with missing forks or stabilizer pins (https://www.contractortalk.com/threads/genie-manlift.155826/).

**Fix in Killian:** zero removable parts. Outriggers, forks, pendant, and battery sled are all captive. The rental counter cannot lose what it cannot remove.

## 11. HVAC-specific: 650 lb capacity ceiling

HVAC techs lifting RTU components: "anything higher than 4 feet requires a Genie lift, while anything higher than 15 feet requires a crane" (https://hvac-talk.com/vbb/threads/1008631-Lifting-of-outdoor-unit-onto-roof). The 650 lb Genie SLA ceiling is the dominant complaint when handling water-source heat pumps, condenser sections, or larger blower modules.

**Fix in Killian:** 1,500 lb capacity at 25 ft. Same physical envelope as a Genie SLA, double the capacity, no upcharge to a SkyHyker or SmartRig.

## 12. Pipefitter-specific: 60 x 60 in base does not fit through doors

Sumner's R-Series is the de facto pipefitter lift because the dual-winch design lets one person both raise mast and walk a Victaulic spool into a pipe rack. But the 1,500 lb R-250 weighs 381 lb itself (https://www.amazon.com/Sumner-R-250-381-Pound-Roust-A-Bout-Lift/dp/B002PAQ2VE) and the 60 in x 60 in deployed base often will not fit through standard doorways or between condenser benches. Sumner's own buying guide explicitly says the R-100's narrow base exists because the wider Roust-A-Bout doesn't fit confined spaces (https://sumneroutlet.com/blogs/news/sumner-material-lift-buying-guide-find-the-right-model-for-the-job).

**Fix in Killian:** 31.5 in stowed width clears a 36 in doorway. Deployed footprint of 48 x 52 in maintains adequate stability margin while keeping the lift usable in mechanical rooms and equipment closets.

## 13. CO2 / nitrogen lift conversion as field workaround

Several techs in the same hvac-talk thread reported converting CO2-driven Genies to nitrogen for run-cost reasons. This is a market signal: operators are willing to modify their lifts to reduce operating cost.

**Fix in Killian:** native cordless tool battery operation. Operators already buy DeWalt and Milwaukee batteries for their other tools. The Killian Lift's marginal energy cost is essentially zero.

## 14. No load awareness, no overload feedback

None of the existing manual lifts have load cells. Operators learn by feel when a load is at the limit. The Sumner manual says "do not exceed rated load" but provides no instrument to know. Mechanical slip clutches in some models eventually engage but only after sustained abuse.

**Fix in Killian:** 24-bit load cell on the cable anchor. 90% audible alarm, 105% hard cutoff. Pendant displays current load in real time.

## Summary: Pain to Fix Mapping

| Pain | Source | Killian Fix |
|---|---|---|
| Hand-crank fatigue | JET marketing, all forums | Brushless DC drive |
| Stuck mid-extension | JustAnswer | Dry mechanical drive, BLDC regen |
| Cable won't retract horizontal | JustAnswer | Cable spool switch + transport mode |
| Cable fraying | Genie service manual | D/d 20 sheaves, cycle telemetry |
| Brake failure | Genie tech tip, HTS Spares | Spring-applied gearbox brake |
| Tip-over / interlock defeat | NY FACE 03NY034, OSHA | Captive outriggers + tilt cutoff |
| Truck loading | OSHA ergonomics, HVAC-Talk | Sub-280 lb design |
| Slow deployment | Sumner reviews | Captive folding mechanisms |
| Repair turnaround | HVAC-Talk | Modular assemblies + diag telemetry |
| Missing parts | eBay listings, ContractorTalk | Zero removable parts |
| 650 lb ceiling (HVAC) | HVAC-Talk | 1,500 lb capacity |
| 60x60 base (pipefitters) | Sumner buying guide | 31.5 in stowed, 48x52 deployed |
| Operator workarounds | HVAC-Talk CO2/N2 | Native cordless battery |
| No load awareness | Manual review | Load cell + display + cutoff |

## Sources

- https://www.constructionowners.com/press-release/jet-tools-launches-new-generation-of-material-lifts
- https://jettools.com/24-ft-material-lift-jml-24x
- https://www.justanswer.com/industrial-equipment/p1pm9-genie-superlift-advantage-sla-20that-almost.html
- https://www.justanswer.com/industrial-equipment/epnsc-genie-lift-go-up-when-3ft-hight-doesn-t.html
- https://www.justanswer.com/industrial-equipment/78nbx-genie-slc-24-duct-lift-when-extend-10.html
- https://manuals.genielift.com/parts%20and%20service%20manuals/data/Service/Material%20and%20Small%20Personnel%20Lifts/33953.pdf
- https://manuals.genielift.com/parts%20and%20service%20manuals/data/Service/Material%20and%20Small%20Personnel%20Lifts/115409.pdf
- https://www.genielift.com/docs/default-source/tech-tips/aerial-work-platforms/mast-brake-release-sla.pdf
- https://www.htsspares.com/catalogue/plant/genie-sla-material-lift-parts/show/genie-sla-safety-brake-assembly-oem-35101gt
- https://www.health.ny.gov/environmental/investigations/face/docs/03ny034.pdf
- https://www.genielift.com/en/support/safety
- https://sielift.com/2024/05/10-safety-tips-for-genie-lifts/
- https://hvac-talk.com/vbb/threads/2213997-Small-material-lifts
- https://www.hvac-talk.com/threads/anyone-own-their-own-lift-s.1647271/
- https://hvac-talk.com/vbb/threads/1008631-Lifting-of-outdoor-unit-onto-roof
- https://www.amazon.com/Sumner-R-250-381-Pound-Roust-A-Bout-Lift/dp/B002PAQ2VE
- https://sumneroutlet.com/blogs/news/sumner-material-lift-buying-guide-find-the-right-model-for-the-job
- https://www.osha.gov/otm/section-7-ergonomics/chapter-1
- https://ehs.unc.edu/topics/ergonomics/lifting-and-material-handling/
- https://www.contractortalk.com/threads/genie-manlift.155826/
- https://www.ebay.com/itm/126361083792
- https://www.practicalmachinist.com/forum/threads/genie-s60-boomlift-electrical-issues-no-start.390216/
