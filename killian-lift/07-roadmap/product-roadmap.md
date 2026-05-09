# Product Roadmap

The Killian Lift platform is built in three product generations on a shared electronics, firmware, and cloud stack.

## Timeline

```
2026                              2027                              2028                              2029
|----- Q3 ----|---- Q4 ----|---- Q1 ----|---- Q2 ----|---- Q3 ----|---- Q4 ----|---- Q1 ----|---- Q2 ----|...
                v1 KIT                       v2 LIFT                                          v3 PLATFORM
```

## v1: Killian Smart Kit (Q3 2026)

**The retrofit that turns a Sumner Roust-A-Bout into a smart lift.**

- KSK-R250, KSK-R150 (Sumner Roust-A-Bout) ship Q3 2026
- KSK-S2 (Sumner Series 2000) ships Q4 2026
- KSK-GSLC (Genie SLC family) ships Q1 2027
- KSK-GSLA (Genie SLA family) ships Q2 2027

Goals through 2027:

- 5,000 kits cumulative shipped
- One signed national rental fleet pilot
- Cloudflare-hosted dashboard with active users at 80%+ of installed base
- Defect rate < 2%
- NPS > 70

## v2: Killian Lift v1 (Q2 2027)

**The full lift product. 1,500 lb at 25 ft. 280 lb machine weight.**

- Single SKU at launch: KL-100 (1,500 lb / 25 ft / FlexVolt + M18 sled choice at order)
- Optional accessories: 36 in fork carriage, pipe-cradle attachment, drum extension to 40 ft cable

Goals through 2028:

- 1,000 full lifts cumulative shipped
- One full rental fleet conversion (>=500 unit annual run rate)
- UL listing achieved
- CE marked, EU sales operational

## v3: Killian Fleet Platform (2028+)

**Multiple lift sizes on a shared platform plus the SaaS layer matures.**

Hardware variants:

| SKU | Capacity | Max Lift | Target buyer |
|---|---|---|---|
| KL-100 (existing) | 1,500 lb | 25 ft | General contractor, pipefitter |
| KL-50 | 650 lb | 25 ft | HVAC service, light electrical (replaces Genie SLA-25) |
| KL-200 | 2,500 lb | 20 ft | Heavy mechanical, RTU work (replaces JET SkyHyker) |
| KL-300 | 1,500 lb | 35 ft | Tall ceiling commercial, data center |

Software / platform:

- Multi-tenant fleet management dashboard with API access
- Predictive maintenance ML model based on accumulated cycle and load data
- Operator certification platform
- Insurance integration (Killian-equipped lifts get reduced rental insurance premiums)
- Marketplace for third-party accessories and consumables
- Open API for partner integrations (Procore, Autodesk Construction Cloud, Trimble)

## Year-by-Year Detail

### 2026 (Phase 1 + early Phase 2)

| Quarter | Milestone |
|---|---|
| Q3 | Launch Killian Smart Kit KSK-R250, KSK-R150 |
| Q3 | 200 unit pilot run shipped |
| Q4 | Add KSK-S2 (Sumner Series 2000 support) |
| Q4 | First fleet pilot conversation (LGH or regional) |
| Q4 | Full lift v1 design freeze |

### 2027 (Phase 2 + Phase 3 transition)

| Quarter | Milestone |
|---|---|
| Q1 | Add KSK-GSLC (Genie SLC family support) |
| Q1 | First fleet pilot ships (50 free units) |
| Q1 | Full lift v1 prototype test |
| Q2 | Add KSK-GSLA (Genie SLA family) |
| Q2 | Killian Lift v1 production launch |
| Q2 | UL listing applied |
| Q3 | First fleet conversion to paid (200 to 500 unit PO) |
| Q3 | UL listing achieved (target) |
| Q3 | KL-50 (650 lb HVAC variant) design start |
| Q4 | Hit 5,000 kits cumulative |
| Q4 | KL-50 prototype test |

### 2028 (Phase 3 scale)

| Quarter | Milestone |
|---|---|
| Q1 | KL-50 production launch |
| Q2 | KL-200 (2,500 lb heavy variant) design freeze |
| Q2 | EU sales channel opens |
| Q3 | KL-200 production launch |
| Q3 | API + partner integration launch |
| Q4 | Predictive maintenance ML model deployed |
| Q4 | Hit 13,000 cumulative units (Base case) / 24,000 (Aggressive case) |

### 2029+ (Phase 4)

- KL-300 (35 ft tall variant)
- International expansion (UK, Canada, Australia)
- Self-propelled (motorized chassis) variant exploration
- Major fleet contracts: Sunbelt or United at full scale

## Platform Components Shared Across Generations

| Component | v1 Kit | v2 Lift | v3 Variants |
|---|---|---|---|
| BLDC motor + driver MCU | Same | Same | Same |
| Supervisor MCU + telemetry stack | Same | Same | Same |
| Pendant | Same | Same | Same |
| Cloud dashboard | Same | Same | Same |
| Mobile app | Same | Same | Same |
| Firmware architecture | Same | Same | Same |
| Battery sled (FlexVolt + M18) | Same | Same | Same |
| Tilt sensor | Same | Same | Same |
| Load cell | Same | Same | Same |
| **Different per variant** | | | |
| Mechanical bracket / mast | Host-specific | Killian-specific | Per variant |
| Drum + cable spec | Per host | 1/4 in or 5/16 in | Per variant |
| Fork carriage | Host's OEM | Killian carriage | Per variant |

The shared electronics + firmware + cloud platform is the moat. Each new mechanical variant is incremental work on top.

## Decision Points That Could Change the Roadmap

1. **If the v1 kit sells fewer than 200 units in the first 90 days:** halt full lift design and re-validate the value proposition. Likely fix is messaging, pricing, or a different host product.
2. **If the first fleet pilot fails at the 90 day KPI review:** delay full lift launch by 6 months to incorporate fleet feedback.
3. **If Genie or JET launches a competing kit before Q4 2026:** accelerate the full lift launch by 3 months and price aggressively to anchor the market.
4. **If UL listing slips by more than 6 months:** continue selling without UL but lose access to two large rental fleets that require listed equipment.
5. **If Cloudflare cost or reliability degrades:** evaluate hybrid AWS / Cloudflare architecture (low priority; Cloudflare has been a stable choice).

## North Star

By end of 2029, Killian is a $50M revenue, profitable company with three product variants, two signed national fleet partners, and a SaaS dashboard with $5M+ ARR.

The roadmap is achievable on Base case financial assumptions (per `05-go-to-market/financial-model.csv`) with one bridge financing or modest equity raise in late 2027 to fund Phase 3 inventory.
