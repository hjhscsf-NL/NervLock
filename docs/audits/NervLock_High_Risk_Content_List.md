# NervLock High-Risk Content List (C and D Grade Only)

**Date:** 2026-07-20
**Total high-risk items:** 46 (all D-grade; 0 C-grade — see methodology note in `NervLock_Blog_Content_Audit.md`)

All 46 items below share the same root defect and the same required governance citations, so they are grouped by cluster. Each entry lists the specific URL, file path, and the exact banner text found on that page; the shared risk rationale, governance basis, recommendation, and human-decision requirement are stated once per cluster to avoid repeating identical text 46 times, per the instruction to keep this report focused and usable.

---

## Cluster 1 — "NervLock Nerve Care" / "너브케어" CTA (34 pages)

### Risk phrase / CTA (verbatim, EN template)
> **Support Your Neural Health with NervLock Nerve Care**
> Formulated by a neurologist with curcumin + Aflapin® — the two most evidence-backed ingredients for neural inflammatory balance.
> NervLock's first product is launching soon.
> [Get Launch Notification]

### Risk phrase / CTA (verbatim, KR template)
> **NervLock 너브케어로 신경 건강을 지원하세요**
> [ingredient sentence varies by article] · NervLock 브랜드의 첫 번째 제품이 곧 출시됩니다.
> [출시 알림 신청하기]

### Why this is high risk
1. **Undocumented/legacy product name.** "Nerve Care" / "너브케어" appears nowhere in `W01_Product_Roadmap.md` (which recognizes only "Brain Core Capsule" and "Brain Oil Softgel") and nowhere on the live homepage's Solutions section (which shows only "NervLock Brain Energy"). It is disconnected from every current source of truth.
2. **Product CTA embedded directly in disease/symptom education.** Several of these articles are specifically about Parkinson's disease, peripheral neuropathy, or postherpetic neuralgia — the exact "Disease fear → mechanism → ingredient → purchase CTA" structure `04_Regulatory_Compliance.md` §14 names as a pattern to avoid.
3. **Mechanism-to-benefit overreach.** The copy asserts curcumin + Aflapin® are "the two most evidence-backed ingredients for neural inflammatory balance" and describes a "mechanistic synergy" underpinning their "co-formulation" — citing an in-vitro/animal pharmacology review and a head-to-head ingredient comparison study, neither of which demonstrates clinical benefit for the *finished, unlaunched product*. This is the exact prohibited conversion named in `03_Medical_Evidence_Standard.md` §36 ("Ingredient evidence" → "Finished product is effective") and violates `W01_Product_Roadmap.md` §8.6 ("No Unsupported Synergy").
4. **False urgency/certainty about an unapproved product.** "NervLock's first product is launching soon" directly contradicts `W01_Product_Roadmap.md` §6.3 and §61: "No NervLock consumer product has final launch approval" / "No formula, dose, label, product page, or launch date is final."

### Governance basis
`04_Regulatory_Compliance.md` §6 (Commercial Nexus Test), §14 (Disease Language), §26 (Clinically Proven claims); `03_Medical_Evidence_Standard.md` §17, §36, §46; `10_Website_Guide.md` §14, §19, §32, §42; `09_Blog_Workflow.md` §37–§38; `W01_Product_Roadmap.md` §2, §6.3, §61.

### Recommended action
Remove or hold the CTA banner pending a human product-naming decision (see below). Do not delete or rewrite the surrounding medical education content — the defect is isolated to the CTA block itself.

### Human decision required
**Yes.** Requires (a) confirmation of whether "Nerve Care" is a discontinued strategy that should be fully removed, and (b) what CTA, if any, should replace it (educational CTA per `07_Content_Writing_Guide.md` §26, or none).

### Affected pages

| Content ID | Lang | URL | File path |
|---|---|---|---|
| alpha-lipoic-acid-nerve | en | `/blog/alpha-lipoic-acid-nerve/` | `blog/alpha-lipoic-acid-nerve/index.html` |
| alpha-lipoic-acid | en | `/blog/alpha-lipoic-acid/` | `blog/alpha-lipoic-acid/index.html` |
| autonomic-dysfunction-symptoms | en | `/blog/autonomic-dysfunction-symptoms/` | `blog/autonomic-dysfunction-symptoms/index.html` |
| brain-fog-neuroscience | en | `/blog/brain-fog-neuroscience/` | `blog/brain-fog-neuroscience/index.html` |
| foods-nerve-health | en | `/blog/foods-nerve-health/` | `blog/foods-nerve-health/index.html` |
| herpes-zoster-neuralgia | en | `/blog/herpes-zoster-neuralgia/` | `blog/herpes-zoster-neuralgia/index.html` |
| nerve-health-foods | en | `/blog/nerve-health-foods/` | `blog/nerve-health-foods/index.html` |
| nocturnal-nerve-discomfort | en | `/blog/nocturnal-nerve-discomfort/` | `blog/nocturnal-nerve-discomfort/index.html` |
| parkinson-dopamine-neuroinflammation | en | `/blog/parkinson-dopamine-neuroinflammation/` | `blog/parkinson-dopamine-neuroinflammation/index.html` |
| parkinson-early-signs | en | `/blog/parkinson-early-signs/` | `blog/parkinson-early-signs/index.html` |
| parkinson-exercise-therapy | en | `/blog/parkinson-exercise-therapy/` | `blog/parkinson-exercise-therapy/index.html` |
| parkinson-medication-management | en | `/blog/parkinson-medication-management/` | `blog/parkinson-medication-management/index.html` |
| peripheral-neuropathy | en | `/blog/peripheral-neuropathy/` | `blog/peripheral-neuropathy/index.html` |
| postherpetic-neuralgia | en | `/blog/postherpetic-neuralgia/` | `blog/postherpetic-neuralgia/index.html` |
| vitamin-b12-methylcobalamin | en | `/blog/vitamin-b12-methylcobalamin/` | `blog/vitamin-b12-methylcobalamin/index.html` |
| vitamin-b12-nerve | en | `/blog/vitamin-b12-nerve/` | `blog/vitamin-b12-nerve/index.html` |
| 대상포진-신경통 | ko | `/blog/대상포진-신경통/` | `blog/대상포진-신경통/index.html` |
| 말초신경병증 | ko | `/blog/말초신경병증/` | `blog/말초신경병증/index.html` |
| 브레인포그-신경과학 | ko | `/blog/브레인포그-신경과학/` | `blog/브레인포그-신경과학/index.html` |
| 비타민B12-신경 | ko | `/blog/비타민B12-신경/` | `blog/비타민B12-신경/index.html` |
| 신경-건강-음식 | ko | `/blog/신경-건강-음식/` | `blog/신경-건강-음식/index.html` |
| 알파리포산 | ko | `/blog/알파리포산/` | `blog/알파리포산/index.html` |
| 야간-신경-불편감 | ko | `/blog/야간-신경-불편감/` | `blog/야간-신경-불편감/index.html` |
| 자율신경-무너졌을때 | ko | `/blog/자율신경-무너졌을때/` | `blog/자율신경-무너졌을때/index.html` |
| 파킨슨-REM수면장애 | ko | `/blog/파킨슨-REM수면장애/` | `blog/파킨슨-REM수면장애/index.html` |
| 파킨슨-글루타치온 | ko | `/blog/파킨슨-글루타치온/` | `blog/파킨슨-글루타치온/index.html` |
| 파킨슨-변비 | ko | `/blog/파킨슨-변비/` | `blog/파킨슨-변비/index.html` |
| 파킨슨-보호자 | ko | `/blog/파킨슨-보호자/` | `blog/파킨슨-보호자/index.html` |
| 파킨슨-약물치료 | ko | `/blog/파킨슨-약물치료/` | `blog/파킨슨-약물치료/index.html` |
| 파킨슨-운동치료 | ko | `/blog/파킨슨-운동치료/` | `blog/파킨슨-운동치료/index.html` |
| 파킨슨-원인-도파민 | ko | `/blog/파킨슨-원인-도파민/` | `blog/파킨슨-원인-도파민/index.html` |
| 파킨슨-이상운동증 | ko | `/blog/파킨슨-이상운동증/` | `blog/파킨슨-이상운동증/index.html` |
| 파킨슨-초기증상 | ko | `/blog/파킨슨-초기증상/` | `blog/파킨슨-초기증상/index.html` |
| 파킨슨-통증 | ko | `/blog/파킨슨-통증/` | `blog/파킨슨-통증/index.html` |

**Especially urgent within this cluster** (highest mechanism-language density, per Top 10 ranking in the main audit report): `herpes-zoster-neuralgia`, `peripheral-neuropathy`, `말초신경병증`, `foods-nerve-health`, `nerve-health-foods`, `alpha-lipoic-acid-nerve`.

---

## Cluster 2 — "NervLock Brain Energy" CTA (12 pages)

### Risk phrase / CTA (verbatim, EN template)
> **Start Your Brain Health Routine with NervLock Brain Energy**
> Formulated by a neurologist with phosphatidylserine + rTG Omega-3 — core ingredients your brain needs.
> NervLock's first product is launching soon.
> [Get Launch Notification]

### Risk phrase / CTA (verbatim, KR template)
> **NervLock Brain Energy로 뇌 건강 루틴을 시작하세요**
> 신경과 전문의가 설계한 포스파티딜세린 + rTG 오메가-3 — 뇌 건강에 필요한 핵심 성분 조합.
> NervLock 브랜드의 첫 번째 제품이 곧 출시됩니다.
> [출시 알림 신청하기]

### Why this is high risk
1. **Presents an unconfirmed product as if confirmed.** "Brain Energy" *does* match the homepage's current Solutions-section product name (unlike "Nerve Care"), but the roadmap gives it no such name at all — the closest roadmap concept ("Brain Core Capsule") shares the ingredient list (PS + B vitamins + D3) but not the name, and is explicitly still at "Stage 2 — Opportunity Assessment," with "no final first-product selection... made" (`W01_Product_Roadmap.md` §6.3, §10).
2. **Embedded directly inside dementia/memory-loss disease education** (`dementia-modifiable-risk-factors`, `dementia-preclinical-stage`, `homocysteine-dementia-b-vitamins`, `치매-10년전-신호`, `치매-위험-생활습관`) — again the disease→ingredient→CTA structure `04_Regulatory_Compliance.md` §14 flags.
3. **"신경과 전문의가 설계" (physician-designed) used as persuasive authority beside an unapproved product**, matching the high-risk pattern named in `04_Regulatory_Compliance.md` §18 ("Doctor-developed, so it definitely works").
4. Same false-certainty problem as Cluster 1: "launching soon" for a product with no locked formula, label, or launch date.

### Governance basis
Same as Cluster 1, plus `04_Regulatory_Compliance.md` §18 (Physician Identity and Authority) and `W01_Product_Roadmap.md` §14–§17 (Brain Core Target Product Profile — still a working draft, not final).

### Recommended action
Same as Cluster 1 — remove or hold pending a human decision on product naming and launch-communication timing.

### Human decision required
**Yes** — additionally requires confirming whether "Brain Energy" is the name Strategic Headquarters intends to carry forward (vs. the roadmap's "Brain Core"), since the homepage and these 12 articles are currently consistent with each other but inconsistent with the roadmap.

### Affected pages

| Content ID | Lang | URL | File path |
|---|---|---|---|
| dementia-modifiable-risk-factors | en | `/blog/dementia-modifiable-risk-factors/` | `blog/dementia-modifiable-risk-factors/index.html` |
| dementia-preclinical-stage | en | `/blog/dementia-preclinical-stage/` | `blog/dementia-preclinical-stage/index.html` |
| homocysteine-dementia-b-vitamins | en | `/blog/homocysteine-dementia-b-vitamins/` | `blog/homocysteine-dementia-b-vitamins/index.html` |
| phosphatidylserine-memory | en | `/blog/phosphatidylserine-memory/` | `blog/phosphatidylserine-memory/index.html` |
| rtg-omega3-bioavailability | en | `/blog/rtg-omega3-bioavailability/` | `blog/rtg-omega3-bioavailability/index.html` |
| sleep-memory-focus | en | `/blog/sleep-memory-focus/` | `blog/sleep-memory-focus/index.html` |
| rTG-오메가3-차이 | ko | `/blog/rTG-오메가3-차이/` | `blog/rTG-오메가3-차이/index.html` |
| 수면-기억력-집중력 | ko | `/blog/수면-기억력-집중력/` | `blog/수면-기억력-집중력/index.html` |
| 치매-10년전-신호 | ko | `/blog/치매-10년전-신호/` | `blog/치매-10년전-신호/index.html` |
| 치매-위험-생활습관 | ko | `/blog/치매-위험-생활습관/` | `blog/치매-위험-생활습관/index.html` |
| 포스파티딜세린-기억력 | ko | `/blog/포스파티딜세린-기억력/` | `blog/포스파티딜세린-기억력/index.html` |
| 호모시스테인-치매-B비타민 | ko | `/blog/호모시스테인-치매-B비타민/` | `blog/호모시스테인-치매-B비타민/index.html` |

**Especially urgent within this cluster:** `수면-기억력-집중력`, `포스파티딜세린-기억력` (both also flagged in the audit's Top 10 overall).

---

## Summary Table (all 46, for quick scanning)

| Cluster | Count | Root cause | Human decision blocking fix |
|---|---:|---|---|
| Nerve Care / 너브케어 | 34 | Legacy/undocumented product name promoted inside disease education | Confirm discontinuation; decide replacement CTA |
| Brain Energy | 12 | Current-homepage product name promoted as launch-imminent inside disease education, inconsistent with roadmap naming and stage | Confirm product name/stage; decide replacement CTA |

No C-grade items exist separately from these 46 — see the audit report's methodology note.
