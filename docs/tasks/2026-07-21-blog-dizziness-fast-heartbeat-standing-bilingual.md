# Task: Bilingual blog post — "Dizzy and heart racing when standing up"

Date: 2026-07-21

## Purpose

Publish a new bilingual (Korean/English) blog post about orthostatic dizziness and a
racing heartbeat when standing up. Both the Korean and English manuscripts were
provided directly in the user's instructions as final, medically and legally
reviewed copy — not drafted or translated by the assistant.

## Manuscript source of truth

- Korean manuscript: provided in full by the user (frontmatter + body + 8 references
  + disclaimer). Used verbatim, no summarization/rewriting/translation.
- English manuscript: provided in full by the user, resubmitted once after an initial
  metadata mismatch was flagged (see "Decisions" below). Used verbatim, no
  back-translation from the Korean version. The `## Internal Links` section in the
  English manuscript was implementation guidance only ("Do not render this heading
  publicly") and was not rendered on the page — it was used solely to select `.related`
  candidates after verifying each destination was actually live.
- The English manuscript's `## Medical Disclaimer` heading/content was relocated into
  the standard `.sig-notice` slot (the container every other article on the site uses
  for this exact text) rather than kept as a body `<h2>`, matching sitewide template
  structure. The disclaimer wording itself was not altered.

## Site structure investigated before implementation

- No build step, no package manager, no framework — static `blog/<slug>/index.html`
  files, self-contained (inline CSS/JS).
- Individual article URLs are **always** `https://nervlocklab.com/blog/<slug>/`,
  regardless of language — confirmed against all ~25 existing English articles listed
  in `en/blog/index.html`. `/en/blog/` exists only as the English blog **index/listing**
  page (`en/blog/index.html`); zero individual articles live under `/en/blog/<slug>/`.
- Category taxonomy (4 pairs, confirmed via `.article-tag` across every existing post):
  뇌 건강·생활/Brain Health & Lifestyle, 신경계 증상·질환/Neurological Symptoms &
  Conditions, 통증·자율신경/**Pain & Autonomic Health**, 영양·대사/Nutrition & Metabolism.
- `.blog-card-type-badge` is a real, existing, optional component on blog-listing cards
  (e.g. "메타분석"/"Meta-Analysis", "근거 검토"/"Evidence Review") — used as the slot for
  the approved detail content-type badge on this post.
- Breadcrumb second-level name is `"Blog"` for ordinary posts and `"Brain Health
  Academy"` only for a specific set of pillar articles under the `Brain Health &
  Lifestyle` category. No precedent exists for "Academy" under `Pain & Autonomic
  Health`, so this post uses `"Blog"`.
- `evidenceReviewDate` exists only as a visible `article-meta-item` field on the page;
  it is not part of the JSON-LD `Article` schema on any existing post and was not added
  to structured data here (avoids inventing a new schema field).

## Most similar existing post (used as structural template)

- KR: `blog/두근거림-어지럼-소화불편-자율신경/index.html` —
  `https://nervlocklab.com/blog/두근거림-어지럼-소화불편-자율신경/`
- EN: `blog/palpitations-dizziness-digestive-symptoms-autonomic-nervous-system/index.html` —
  `https://nervlocklab.com/blog/palpitations-dizziness-digestive-symptoms-autonomic-nervous-system/`

Both are `Pain & Autonomic Health` / `통증·자율신경`, `"Blog"` breadcrumb — used as the
literal HTML/CSS template (nav, hero, abstract, article-body, evidence-box, related,
sig-block, footer, JSON-LD shape) for the new pages.

## Decisions made during planning (multi-round)

1. **English URL**: the user's first-choice English metadata (`/en/blog/...` or
   `/en/academy/...`) did not match any existing URL pattern on the site (confirmed:
   0/25 English articles live outside `/blog/<slug>/`). After two rounds of flagging
   this, the user gave a final decision (option "A"): keep the existing 100% site
   convention and use **different KR/EN slugs** rather than create a new `/en/blog/`
   exception.
2. **Category**: standardized to the site's real taxonomy string `Pain & Autonomic
   Health` (the manuscript's own frontmatter used `Pain & Autonomic Function`, a
   non-existent variant).
3. **contentType / breadcrumb**: treated as an ordinary `Blog` post (not `Brain Health
   Academy`), matching the closest sibling post's precedent. The approved detail badge
   text (`자율신경 증상 교육` / `Autonomic Symptom Education`) is preserved via the
   existing `.blog-card-type-badge` component on both blog-listing pages, and via a new
   (but template-consistent) `.content-type-tag` pill on the article hero itself.
4. **Author display**: KR page shows `함지현` in all visible fields (article-meta,
   sig-block, author line), matching the sitewide Korean author-name standardization
   already committed (`12d99c6`, 2026-07-21). EN page and JSON-LD `Person.name`
   everywhere (both languages) keep `Jeehyun Ham` / `Jeehyun Ham, M.D.`, per existing
   convention. The manuscript frontmatter's `author: "Jeehyun Ham, M.D."` for the
   Korean page was interpreted as the canonical/structured-data identity value, not the
   Korean visible-text instruction, consistent with every other Korean article on the
   site.
5. **Related posts**: only real, live, verified URLs used (see below); the manuscript's
   suggested EN internal links to `/en/academy/...` pages that don't exist, or to the
   still-unpublished `what-does-the-autonomic-nervous-system-control` page, were
   excluded per the manuscript's own condition ("enable only after confirming the
   destination is live").

## Final metadata

| | Korean | English |
|---|---|---|
| URL | `https://nervlocklab.com/blog/dizziness-and-palpitations-when-standing/` | `https://nervlocklab.com/blog/dizziness-and-fast-heartbeat-when-standing/` |
| Canonical | self | self |
| `lang` | `ko` | `en` |
| Category | 통증·자율신경 | Pain & Autonomic Health |
| Breadcrumb L2 | 블로그 (Blog) | Blog |
| Detail badge | 자율신경 증상 교육 | Autonomic Symptom Education |
| Author (visible) | 함지현 | Jeehyun Ham, M.D. |
| JSON-LD author/reviewedBy name | Jeehyun Ham | Jeehyun Ham |
| Published / Reviewed | 2026-07-21 | 2026-07-21 |
| Evidence review date | 2026-07-20 | 2026-07-20 |

## Files created

- `blog/dizziness-and-palpitations-when-standing/index.html`
- `blog/dizziness-and-fast-heartbeat-when-standing/index.html`

## Files modified

- `blog/index.html` — new KR listing card
- `en/blog/index.html` — new EN listing card
- `sitemap.xml` — 2 new `<url>` entries

## Related posts used (verified live before linking)

- KR: `두근거림-어지럼-소화불편-자율신경`, `자율신경-무너졌을때`
- EN: `palpitations-dizziness-digestive-symptoms-autonomic-nervous-system`,
  `autonomic-dysfunction-symptoms`

Excluded candidates: `자율신경-조절` / `what-does-the-autonomic-nervous-system-control`
(still unpublished WIP, not committed, not in sitemap).

## QA plan

No build/lint/type-check pipeline exists in this repository (static HTML, no
package.json). QA consisted of: local `python -m http.server` render check of both new
pages and both listing pages (HTTP 200), JSON-LD block parse validation, sitemap XML
well-formedness, div-tag balance check, internal-link target existence check (all 6
`/blog/...` links resolved to real directories), reference/FAQ count verification
against the approved manuscripts (KR 8 refs / 4 FAQ, EN 3 refs / 7 FAQ — no invented or
dropped items), and a diff of the excluded WIP file (`자율신경-조절/index.html`) before
and after to confirm it was not touched.

## Stop conditions checked (none triggered at implementation time)

- No duplicate slug/title found in the repository before creating files.
- Manuscripts were not truncated or malformed.
- No medical wording needed to change to implement the approved metadata.
- No references, red-flag lists, or disclaimers were dropped.
