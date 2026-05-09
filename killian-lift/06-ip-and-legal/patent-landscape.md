# Patent Landscape

This document is the freedom-to-operate analysis for the Killian Lift. It is not legal advice. A formal FTO opinion letter from patent counsel is required before final launch.

## 1. Topic Areas Searched

1. Drill-driven winches and chuck-driven hoists
2. Telescoping mast lift architectures
3. Tilt cutoff and tilt sensor safety on lifts
4. Smart lift telemetry, GPS, and theft recovery
5. Load cell integrated cutoff
6. Sumner Roust-A-Bout and Sumner-held patents
7. Genie / Terex Superlift patents
8. Battery sled / cordless tool battery interfaces

## 2. Drill-driven Winches

The concept of using a cordless drill chuck to drive a winch is **commercially well-established and largely unprotected as a generic concept**. Multiple manufacturers sell drill-powered portable winches openly:

- Anbull drill winch on Amazon: https://www.amazon.com/Anbull-Portable-Capacity-Lifting-Dragging/dp/B097QXG74D
- Amucolo drill winch at Home Depot: https://www.homedepot.com/p/Drill-Winch-Hoist-Portable-Drill-Winch-of-750-LB-Capacity-with-40-ft-Steel-Wire-Drill-Winch-for-Lifting-and-Dragging-Yead-CYD0-I4J/328134772
- Warn Drill-Powered Portable Winch: https://www.jlconline.com/tools/warn-drill-powered-portable-winch_o
- Thern + DeWalt right-angle drill kit: https://www.gmesupply.com/dewalt-heavy-duty-right-angle-cordless-drill-kit-designed-for-thern-hand-winches

JET Tools added drill-drive material lifts (JML-X family) in October 2025, validating the concept at the OEM level.

Patent searches for "drill driven winch" + "drill chuck" surface old expired drill chuck patents (US1056076, US1109121 from 1913-1914; US3807745A from the 1970s; US4389146 from 1983), none of which constrain a new lift.

**FTO conclusion:** A material lift driven by a cordless drill or by a brushless DC motor with an integrated 7/16 hex backup is **clear of any known blocking patent**. We design our own clutch / coupler / gear stack to avoid copying any specific competitor implementation.

## 3. Telescoping Mast Architecture

Genie publicly states the **Superlift Advantage** uses a "patented telescoping mast system." The most relevant identified patent is:

- **US 7,966,777 B2 - Mechanical lift, fully nesting, telescoping mast** (Terex / Genie). Priority 2004; published 2007 as US20070028532A1; granted 2011. Describes concentric telescoping cylinders with internal strap-and-pulley actuation. **With a 2004 priority date, the 20-year term expires in 2024**, so as of May 2026 this patent is **effectively expired** for utility purposes.
- https://patents.google.com/patent/US7966777B2/en
- https://patents.google.com/patent/US20070028532

Also relevant but **still in force**:

- **US 9,505,596 - Mast lift with screw drive and gas strut** (issued Nov 29, 2016). https://patents.justia.com/patent/9505596 - in force until ~2034. Avoid the specific screw-drive-plus-gas-strut combination in our design.
- **US 8,505,688 B2 - Mast lift and mast lift system** (with US20100294594A1 publication). https://patents.google.com/patent/US8505688?oq=lift - in force until ~2030. Describes an overload clutch combined with overrun and emergency brakes. Avoid copying that specific architecture.

**FTO conclusion:** The original Genie Superlift telescoping mast architecture (US 7,966,777) is now expired and copyable. Our design specifically avoids the screw-drive + gas-strut of US 9,505,596 (we use cable + drum) and the overload clutch + overrun brake of US 8,505,688 (we use load cell electronic cutoff + spring-applied brake).

## 4. Tilt Cutoff and Tilt Sensor

Tilt-sensor cutoffs are **standard commodity safety equipment** on aerial and material lifts. Both JLG and Genie use Rieker-brand dual-axis tilt sensors as off-the-shelf parts:

- JLG dual-axis sensor part #1810140
- Genie tilt sensor TS146462

Sources:

- JLG 1930ES manual: https://csapps.jlg.com/OnlineManuals/Manuals/JLG/JLG%20Scissor%20Lifts/ES%20Scissors/1930ES_MOL70/Operation%20Manuals/31215913_B_ES%20Scissor%20MOL70_JLG_Operation_English.pdf
- Genie level / tilt sensor: https://www.forkliftpartsworld.com/GENIE_AERIAL_LEVEL_TILT_SENSOR_p/40836.htm
- Genie level-sensor repair PDF: https://www.genielift.com/docs/default-source/tech-tips/slab-and-rough-terrain-scissors/level-sensor-repair.pdf?sfvrsn=3fa4ccc_14
- Genie chassis tilt feature: https://www.genielift.com/en-gb/aerialpros/get-familiar-with-built-in-performance-features-on-genie-booms

**FTO conclusion:** Implementing a generic "if tilt > X degrees, disable lift function" using a Rieker, Bosch, or TE Connectivity inclinometer module wired through a relay or MCU is **freely practiced**. No royalty exposure.

## 5. Smart Lift Telemetry and Theft Recovery

Telematics is broadly practiced and not protected by a dominant patent. Multiple commercial offerings:

- Tenna construction theft prevention: https://www.tenna.com/use-cases/construction-theft-prevention/
- Radius asset tracking: https://www.radius.com/en-us/telematics/asset-tracking/construction/
- Spytec construction theft GPS: https://spytec.com/blogs/news/construction-equipment-theft-gps-tracking
- Trackstar resources: https://www.trackstar.com/resources/preventing-equipment-theft-with-gps-telematics
- PassTime equipment theft: https://passtimegps.com/how-to-prevent-theft-and-misuse-with-gps-equipment-tracking/

LoJack-style cellular / RF recovery patents are largely expired. Modern features (geofencing, cloud dashboards, BLE pairing) are commodity software patterns.

**FTO conclusion:** Adding a cell modem + GPS + accelerometer + cloud dashboard for theft recovery and usage telemetry is **freely implementable**. We avoid copying competitor UI claims verbatim and any third-party SDK that imposes patent grants or restrictions.

## 6. Load Cell Overload Cutoff

Foundational patents are long expired:

- **US 3,728,502 - Electric hoist overload protection device** (1973): https://patents.google.com/patent/US3728502A/en. Expired.
- **US 3,219,154 - Overload protection device for hoists with axial load brake** (1965): https://patents.google.com/patent/US3219154. Expired.

Modern commercial load-limit modules ship without IP encumbrance:

- CSLL-2 hoist load limiter: https://www.800loadcel.com/electronics/signal-conditioners/csll-2-hoist-load-limiter.html
- FUTEK portable crane weighing: https://www.futek.com/applications/Portable-Crane-Weighing

Active **Genie US 8,505,688 B2** does claim an overload clutch combined with overrun brake on a personnel/mast lift. We design around it by using a load-cell + electronic relay cutoff (no mechanical clutch overload mechanism). We also use a spring-applied / power-released brake on the gearbox output, not a clutch in the cable path.

**FTO conclusion:** A strain-gauge load cell feeding an MCU that opens the lift-direction relay above a setpoint is **clear prior art**. Free to use.

## 7. Sumner Roust-A-Bout

- Sumner Manufacturing (founded 1965, Houston) commercialized the Roust-A-Bout in the 1960s-70s era.
- Now part of the SFE Group: https://sfe-brands.com/brands/sumner/
- Public search returned **no active utility patents** assigned to Sumner for the basic Roust-A-Bout architecture. The design predates any enforceable patent term.

**FTO conclusion:** The classic Roust-A-Bout dual-winch + telescoping mast layout is **almost certainly free for any competitor to use**. The brand "Roust-A-Bout" is a Sumner trademark; we do not use it as our brand. We may reference it descriptively for compatibility (e.g. "Killian Smart Kit for Sumner Roust-A-Bout R-250") under nominative fair use doctrine.

## 8. Battery Sled and Cordless Tool Interfaces

### 8.1 DeWalt 20V Max / FlexVolt

- No public licensing program for third parties to make products that accept DeWalt batteries.
- The 20V Max battery interface has been reverse-engineered and documented (https://www.gearhack.com/myink/ViewPage.php?file=docs/Power+Tools/Battery+Conversion/DeWALT+20V+MAX+Power+Tools+Battery+Interface).
- DeWalt has not litigated against aftermarket adapter makers.
- Tool Connect (DeWalt's BLE telemetry platform) has no public developer SDK.
- FlexVolt voltage-switching patent: avoid copying that specific switching mechanism.

### 8.2 Milwaukee M18 / ONE-KEY

- Milwaukee holds patents on RedLithium pack chemistry / electronics and battery-tool interface, plus "M18" trademark.
- No public OEM licensing program for accepting M18 packs.
- More aggressive on counterfeit batteries than on accessory makers, but no litigation against compatible products that accept genuine M18 packs.
- ONE-KEY is integration-partner gated; no public API. https://onekey.milwaukeetool.com/data-integrations
- Milwaukee patents: https://www.protoolreviews.com/hard-chargers-history-milwaukee-tool-battery-platforms/

### 8.3 Aftermarket cradle precedent

Brands like Spekular, Godox, and dozens of camera-light makers ship products that accept genuine OEM packs via mechanical cradles. None have a license; all use nominative fair use marketing. Pattern is well-established and not litigated against.

**FTO conclusion:** Build a mechanical battery cradle that mates with the DeWalt 20V Max foot. Build a separate mechanical cradle for M18. Use genuine OEM packs (do not source counterfeits). Read voltage and NTC pins; do not drive comms pins or spoof OEM IDs. Marketing uses nominative fair use: "Compatible with Milwaukee® M18™ and DeWalt® 20V MAX*/FlexVolt® batteries (sold separately). Killian Lift is not affiliated with, endorsed by, or sponsored by Milwaukee Tool or Stanley Black & Decker."

## 9. Patentability Assessment for the Killian Lift

What is genuinely novel in our design that may merit a provisional patent application:

| Concept | Novelty | Worth filing? |
|---|---|---|
| Brushless DC drive integrated with cordless tool battery sled on a mast lift | Not novel as a concept (JET drill-drive 2025) but novel in implementation with hot-swap dual-sled and load cell cutoff | **Maybe** - file provisional for the integrated-control architecture |
| Captive cam-lock outrigger with embedded limit switch and tilt-sensor cross-validation | **Novel combination.** The integration of mechanical cam-lock + electronic deployment confirmation + tilt sensor cross-check has not been seen in the search. | **Yes** - file provisional |
| Cycle-counted predictive cable replacement based on telemetry | **Novel.** No existing material lift product uses telemetry to predict cable replacement intervals. | **Yes** - file provisional |
| Field-installable retrofit kit that adds smart-lift compliance to a non-smart manual lift | Concept exists in EV retrofits; not seen in lift industry | **Maybe** - file provisional, claims focus on the load-cell shear-pin replacing OEM cable anchor |

Recommended Phase 2 patent filings:

1. Integrated control architecture for portable material lift (load-cell + tilt + telemetry + interlock state machine)
2. Captive cam-lock outrigger with deployment confirmation switch
3. Telemetry-driven predictive cable replacement (data plus method)
4. Drop-in retrofit kit for legacy material lifts (load-cell-replacing-anchor-pin and bracket-and-coupler architecture)

Each provisional costs ~$2,500 in attorney fees. Convert to non-provisional at month 12 if the position warrants. Total Phase 2 patent investment: ~$10,000 + non-provisional conversion cost.

## 10. Key Sources

- https://patents.google.com/patent/US7966777B2/en (Genie telescoping mast, expired ~2024)
- https://patents.justia.com/patent/9505596 (Genie screw-drive + gas-strut, in force)
- https://patents.google.com/patent/US8505688?oq=lift (Genie mast lift system, in force)
- https://patents.google.com/patent/US3728502A/en (overload protection, expired)
- https://patents.google.com/patent/US3219154 (overload protection, expired)
- https://www.dewalt.com/systems/cordless-platforms/60v/flexvolt-battery-system (FlexVolt platform)
- https://www.protoolreviews.com/hard-chargers-history-milwaukee-tool-battery-platforms/ (Milwaukee patents)
- https://onekey.milwaukeetool.com/data-integrations (ONE-KEY)
- https://www.dewalt.com/en-us/jobsite-solutions/solutions-by-trade/tool-connect (Tool Connect)
- https://www.terex.com/en/company/intellectual-property/genie-patents (Genie virtual patent marking)
- https://sfe-brands.com/brands/sumner/ (Sumner ownership)
- https://www.constructionowners.com/press-release/jet-tools-launches-new-generation-of-material-lifts (JET launch Oct 2025)
