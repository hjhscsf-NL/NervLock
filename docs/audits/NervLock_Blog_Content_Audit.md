# NervLock Blog Content Audit

**Document type:** Content Audit Report (read-only investigation; no site content was modified)
**Date:** 2026-07-20
**Prepared by:** Claude Code, under `CLAUDE.md` and the approved `docs/governance/` + `docs/working/` document set
**Scope:** Full inventory of `blog/*/index.html` (74 article folders), plus the Academy / Science & Research / Solutions sections embedded in `index.html` and `en/index.html`

---

## Executive Summary

This audit inventoried all 74 blog article folders in the repository and cross-referenced their content, metadata, categories, and embedded calls-to-action against the approved governance framework (`00_AI_Operating_Manual.md` through `16_QA_Checklist.md`, `W01_Product_Roadmap.md` through `W05_Revision_Log.md`).

**The single most important finding:** **46 of 74 articles (62%)** contain a hard-coded promotional CTA banner for one of two product names — **"NervLock Nerve Care"** (34 articles, mostly pain/neuropathy/Parkinson's-cluster content) or **"NervLock Brain Energy"** (12 articles, mostly dementia/memory-cluster content) — embedded directly inside disease- and symptom-education articles. Neither name matches the two product concepts that actually exist in the approved roadmap (`W01_Product_Roadmap.md`: "Brain Core Capsule" and "Brain Oil Softgel"), and the roadmap explicitly states **no NervLock product has final launch approval** and **no public disease-prevention or treatment claims are authorized.** "Nerve Care" does not appear anywhere on the live homepage's product section either — it is a disconnected, undocumented legacy name still actively driving a "launching soon" CTA in a third of the blog. This is a direct, repeated violation of `04_Regulatory_Compliance.md` §14 ("Disease fear → biological mechanism → product ingredient → purchase CTA" is explicitly named as a structure to avoid) and `10_Website_Guide.md` §42 ("A disease page must not become a hidden product funnel").

Beyond the CTA issue, the audit found a two-tier template split across the blog: a small set of newer articles (11) have complete hreflang, structured data, and correct author metadata, while the remaining 84% of articles have neither hreflang nor JSON-LD structured data at all, and 33 articles (45%) still display the older `Dr. Claire Ham (Jeehyun Ham, M.D.)` author byline rather than the `Jeehyun Ham, M.D.` standard used elsewhere.

No content was modified, deleted, or moved during this audit.

---

## Audit Scope

| Area | Covered |
|---|---|
| Korean blog articles | 35 articles inventoried |
| English blog articles | 39 articles inventoried |
| Brain Health Academy | Covered as a component of `index.html`/`en/index.html` (curated cards linking to 4–5 existing blog articles — no separate files exist; see Limitations) |
| Science & Research | Covered as a component of `index.html` (SECTION 5, inline paper-citation cards) — no separate files exist |
| Product / launch-notice content | `index.html`/`en/index.html` Solutions section + all 46 blog CTA banners |
| Blog listing / category data | `blog/index.html`, `en/blog/index.html` category filters cross-checked against every article's own tag |
| Author / reviewer / date metadata | Extracted for all 74 articles |
| canonical / hreflang / structured data | Extracted for all 74 articles |
| CTAs, product links, launch-notice links | Extracted for all 74 articles |
| References / internal / external links | Extracted for all 74 articles (see Limitations on precision) |

---

## Total Content Counts

- **Total blog content items:** 74
- **By language:** Korean 35, English 39
- **By type:** All 74 are "Blog" (flat `blog/<slug>/` structure — no separate Academy/Science URL paths exist in this repo, unlike the aspirational architecture described in `10_Website_Guide.md` §8, §35; see Limitations)

## Risk Grade Distribution

| Grade | Count | % |
|---|---:|---:|
| A — Maintain as-is | 11 | 15% |
| B — Partial revision needed | 17 | 23% |
| C — Full re-review needed | 0 | 0% |
| D — Immediate fix / hold for review | 46 | 62% |

**Note on C=0:** every instance of strong mechanism-to-benefit language (curcumin/Aflapin/NF-κB/5-LOX pathway claims) found in this dataset co-occurred with the D-qualifying product CTA banner, so it was graded D rather than as a separate C case. See Methodology below.

---

## Top 10 Highest-Risk Pages

Ranked by density of high-risk keywords (product name + mechanism-inflation language) co-occurring in the same article.

| # | Content ID | Lang | URL |
|---|---|---|---|
| 1 | herpes-zoster-neuralgia | en | `/blog/herpes-zoster-neuralgia/` |
| 2 | peripheral-neuropathy | en | `/blog/peripheral-neuropathy/` |
| 3 | 말초신경병증 | ko | `/blog/말초신경병증/` |
| 4 | 수면-기억력-집중력 | ko | `/blog/수면-기억력-집중력/` |
| 5 | foods-nerve-health | en | `/blog/foods-nerve-health/` |
| 6 | nerve-health-foods | en | `/blog/nerve-health-foods/` |
| 7 | 포스파티딜세린-기억력 | ko | `/blog/포스파티딜세린-기억력/` |
| 8 | alpha-lipoic-acid-nerve | en | `/blog/alpha-lipoic-acid-nerve/` |
| 9 | parkinson-dopamine-neuroinflammation | en | `/blog/parkinson-dopamine-neuroinflammation/` |
| 10 | parkinson-exercise-therapy | en | `/blog/parkinson-exercise-therapy/` |

Full detail for these and all other D-grade pages is in `NervLock_High_Risk_Content_List.md`.

---

## All Pages With a Product CTA (46 total)

**"NervLock Nerve Care" / "너브케어" cluster (34 articles)** — mostly Parkinson's, peripheral neuropathy, postherpetic neuralgia, vitamin B12/nerve-health nutrition content:

`alpha-lipoic-acid-nerve`, `alpha-lipoic-acid`, `autonomic-dysfunction-symptoms`, `brain-fog-neuroscience`, `foods-nerve-health`, `herpes-zoster-neuralgia`, `nerve-health-foods`, `nocturnal-nerve-discomfort`, `parkinson-dopamine-neuroinflammation`, `parkinson-early-signs`, `parkinson-exercise-therapy`, `parkinson-medication-management`, `peripheral-neuropathy`, `postherpetic-neuralgia`, `vitamin-b12-methylcobalamin`, `vitamin-b12-nerve`, `대상포진-신경통`, `말초신경병증`, `브레인포그-신경과학`, `비타민B12-신경`, `신경-건강-음식`, `알파리포산`, `야간-신경-불편감`, `자율신경-무너졌을때`, `파킨슨-REM수면장애`, `파킨슨-글루타치온`, `파킨슨-변비`, `파킨슨-보호자`, `파킨슨-약물치료`, `파킨슨-운동치료`, `파킨슨-원인-도파민`, `파킨슨-이상운동증`, `파킨슨-초기증상`, `파킨슨-통증`

**"NervLock Brain Energy" cluster (12 articles)** — mostly dementia/memory/nutrition content:

`dementia-modifiable-risk-factors`, `dementia-preclinical-stage`, `homocysteine-dementia-b-vitamins`, `phosphatidylserine-memory`, `rtg-omega3-bioavailability`, `sleep-memory-focus`, `rTG-오메가3-차이`, `수면-기억력-집중력`, `치매-10년전-신호`, `치매-위험-생활습관`, `포스파티딜세린-기억력`, `호모시스테인-치매-B비타민`

Both CTA templates follow the identical structure across every instance: `<h3>` naming the product → one sentence citing 1–2 named ingredients → "NervLock's first product is launching soon" / "NervLock 브랜드의 첫 번째 제품이 곧 출시됩니다" → a `Get Launch Notification` / `출시 알림 신청하기` button linking to `#coming-soon`.

## All Pages With a Legacy/Undocumented Product Name

"NervLock Nerve Care" (and its Korean renderings "너브케어" / "신경 케어") appears in the 34 articles listed above. It does **not** appear anywhere in `index.html`, `en/index.html`, or any governance/working document. `W01_Product_Roadmap.md` recognizes only two candidate concepts — "Brain Core Capsule" (`NL-BC-001`) and "Brain Oil Softgel" (`NL-BO-001`) — neither of which is named "Nerve Care." This name is disconnected from every current source of truth and should be treated as a discontinued/superseded product reference still live in production content.

## Author Name Mismatches (33 articles)

All English-language articles below still display the sig-block byline `Dr. Claire Ham (Jeehyun Ham, M.D.)` rather than the `Jeehyun Ham, M.D.` form used by the other 41 articles:

`alpha-lipoic-acid-nerve`, `alpha-lipoic-acid`, `autonomic-dysfunction-symptoms`, `brain-fog-neuroscience`, `dementia-modifiable-risk-factors`, `dementia-preclinical-stage`, `foods-nerve-health`, `herpes-zoster-neuralgia`, `homocysteine-dementia-b-vitamins`, `levodopa-long-term-misconceptions`, `nerve-health-foods`, `nocturnal-nerve-discomfort`, `parkinson-caregiver-guide`, `parkinson-constipation`, `parkinson-dopamine-neuroinflammation`, `parkinson-dyskinesia`, `parkinson-early-signs`, `parkinson-exercise-therapy`, `parkinson-genetics`, `parkinson-glutathione`, `parkinson-medication-dosage`, `parkinson-medication-management`, `parkinson-pain-management`, `parkinson-plus-syndromes`, `parkinson-rem-sleep-disorder`, `parkinsonism-differential-causes`, `peripheral-neuropathy`, `phosphatidylserine-memory`, `postherpetic-neuralgia`, `rtg-omega3-bioavailability`, `sleep-memory-focus`, `vitamin-b12-methylcobalamin`, `vitamin-b12-nerve`

This is a naming inconsistency, not by itself a safety issue — `Dr. Claire Ham (Jeehyun Ham, M.D.)` is itself a real, previously-documented site standard for English pages (`CLAUDE.md` §"Author identity is standardized site-wide"). It is listed here because the audit brief specifies `Jeehyun Ham, M.D.` as the target standard to check against, and because whichever form is correct, having two different forms live simultaneously across 74 pages is itself a brand-consistency defect that requires one human decision (see "User Decisions Needed").

## Category Mismatches

Only one article has an actual incorrect category value at its source: **`brain-nutrition`** displays the hero tag `Nutrition & Metabolic Health`, which does not match the approved English label `Nutrition & Metabolism` used by the `en/blog/index.html` filter button and every other Nutrition-category article. Four other articles (`brain-fog-causes`, `memory-loss-and-dementia`, `sleep-memory-focus`, `why-cant-i-focus`) correctly show their own category but echo `brain-nutrition`'s incorrect label in their "Related Articles" card, so all five will display consistently once the one root file is corrected.

No article was found using a category outside the five approved top-level categories (전체/뇌 건강·생활/신경계 증상·질환/통증·자율신경/영양·대사 and their English equivalents).

## Canonical / Hreflang Issues

- **62 of 74 articles (84%) have no `hreflang` tag at all.** Only the 11 A-grade articles (the newest template generation, including the two produced in this session) implement the full reciprocal `ko`/`en`/`x-default` hreflang set described in `10_Website_Guide.md` §40.
- No article was found with an incorrect self-canonical (every article's `<link rel="canonical">` correctly self-references its own URL).
- This is a structural/SEO gap affecting the large majority of the site's bilingual pairs, not a factual error — but it means most KR/EN sibling articles are not actually cross-linked for search engines despite `CLAUDE.md` describing every article as "existing as a bilingual pair."

## Structured Data Issues

**62 of 74 articles (84%) have no JSON-LD structured data at all** — no `Article`, no `BreadcrumbList`, nothing. This exactly mirrors the hreflang gap (the same 11 newest-template articles are the only ones with any structured data), confirming these are two symptoms of the same underlying fact: the majority of the blog was built before the current SEO/structured-data template existed and has not been backfilled.

## References and External Link Issues

- Automated reference counting in this audit undercounted or misfired on articles using non-standard evidence-box markup (see Limitations) and should not be relied on as an exact number without a follow-up manual pass; it is retained in the CSV as an approximate signal only.
- The high-risk cluster's citations (`herpes-zoster-neuralgia`, `peripheral-neuropathy`, and siblings) do include real, plausible-looking academic references for the underlying mechanism (e.g., curcumin/NF-κB pharmacology reviews, an Aflapin-vs-5-Loxin comparative study) — but per `03_Medical_Evidence_Standard.md` §17 and §46 ("A mechanism is not a clinical outcome... an ingredient study is not automatically a finished-product study"), these sources support *ingredient-level mechanism* claims, not the *finished, unapproved-product* clinical framing the CTA banner attaches to them. This mismatch between what the references actually support and what the surrounding CTA implies is itself part of why these pages are graded D, independent of the CTA-placement issue alone.
- No fabricated-looking citations (implausible DOIs, unverifiable journals) were identified in this pass, but full citation-by-citation verification per `05_Reference_Policy.md` was outside this audit's time budget — see Limitations.

---

## Immediate-Fix Recommendations

1. **Remove or hold all 46 product-CTA banners** ("Nerve Care"/"너브케어" and "Brain Energy" clusters) from disease/symptom/nutrition educational articles until a human reviewer decides what, if anything, should replace them. This is the single highest-priority item — it is a live, repeated violation of the site's own governance on disease/product separation, referencing a product name ("Nerve Care") that isn't even the one currently shown on the homepage.
2. **Resolve the "Nerve Care" vs "Brain Energy" vs roadmap ("Brain Core"/"Brain Oil") naming conflict** at the strategic level before touching any more content — three different product identities are currently live or documented simultaneously.
3. **Decide and apply one author byline standard** (`Jeehyun Ham, M.D.` vs `Dr. Claire Ham (Jeehyun Ham, M.D.)`) across all English articles.
4. **Fix the single `brain-nutrition` category tag** and its four downstream related-card echoes.
5. Backfill hreflang + structured data on the 62 older-template articles, or explicitly decide this is out of scope for now.

## Phased Fix Priority

| Phase | Action | Affected |
|---|---|---|
| 1 (urgent) | Human decision on product-CTA removal/hold; remove or neutralize banners | 46 articles |
| 2 | Strategic product-naming reconciliation (Nerve Care / Brain Energy / Brain Core / Brain Oil) | Roadmap + homepage + all 46 |
| 3 | Author byline standardization | 33 (+ 41 already-consistent, for confirmation) |
| 4 | Category tag correction | 1 root file, 4 echoes |
| 5 | Hreflang + structured data backfill | 62 articles |
| 6 | Manual reference-by-reference verification of the highest-risk cluster (Top 10 list) | 10 articles minimum |

## User Decisions Needed Before Any Fix

- Which product name(s), if any, should currently-live blog content reference — none, "Brain Energy" only, or something else? This cannot be resolved by content editing alone; it is a product/strategy decision per `W01_Product_Roadmap.md` §51 ("Authorized Human Approver").
- Should the 46 CTA banners simply be deleted, replaced with a neutral non-product CTA (e.g., newsletter signup, per `07_Content_Writing_Guide.md` §26 "Educational CTA"/"Community CTA"), or held pending the naming decision?
- Which author byline (`Jeehyun Ham, M.D.` or `Dr. Claire Ham (Jeehyun Ham, M.D.)`) is the current approved standard? (`CLAUDE.md` currently documents the latter for English pages, but three prior work sessions in this repository's history moved various files toward the former — this needs one explicit ruling.)
- Whether hreflang/structured-data backfill across 62 legacy-template articles is an approved priority, and on what timeline.

## Audit Limitations

- **This audit is a static, script-assisted content and metadata review.** It did not render pages in a browser, did not validate structured data against Google's Rich Results tooling, and did not verify every citation against its live source per the full `05_Reference_Policy.md` workflow — that would require a dedicated reference-audit pass per article.
- **Reference and internal/external link counts in the CSV are approximate.** The extraction regex used a simplified boundary match for the `.evidence-box` block and undercounted on articles with non-standard markup; treat the CSV's `reference_count`/`internal_links`/`external_links` columns as a rough signal, not a certified count.
- **No individual C-grade determination was made** beyond the D-graded CTA cluster; a small number of D-grade articles may, on closer reading, actually belong at C if their CTA is judged separable from their mechanism-language severity — this distinction was not made at the per-sentence level for all 46 articles given the scope of this pass.
- **"Brain Health Academy" and "Science & Research" have no separate files to audit** — they are curated card sections inside `index.html`/`en/index.html` linking to existing blog articles already covered in the inventory. The Academy/Science architecture described in `10_Website_Guide.md` §8, §13, §15, §35 (separate `/academy/`, `/science/` URL paths) does not exist in the current implementation; this is a gap between approved strategy documents and actual site structure worth flagging to Strategic Headquarters, but is out of scope to fix here.
- **Only the `index.html`/`en/index.html` Solutions section was manually reviewed for product framing**; the newsletter/coming-soon signup forms and the Apps Script backend were not part of this content audit.
- Governance documents `06_Product_Guide.md`, `08_SEO_GEO_Guide.md`, `11`–`15`, and `W02`–`W05` were not read in full during this pass due to time constraints; the grading above relies primarily on `00_AI_Operating_Manual.md`, `01_Brand_Guide.md`, `02_Brand_Positioning.md`, `03_Medical_Evidence_Standard.md`, `04_Regulatory_Compliance.md`, `05_Reference_Policy.md`, `07_Content_Writing_Guide.md`, `09_Blog_Workflow.md`, `10_Website_Guide.md`, `16_QA_Checklist.md` (partial), and `W01_Product_Roadmap.md`.
