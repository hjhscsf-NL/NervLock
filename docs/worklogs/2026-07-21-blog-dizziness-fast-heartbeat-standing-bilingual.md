# Worklog: Bilingual blog post — "Dizzy and heart racing when standing up"

Date: 2026-07-21
Plan: `docs/tasks/2026-07-21-blog-dizziness-fast-heartbeat-standing-bilingual.md`

## Summary

Published a new bilingual blog post pair using manuscripts supplied verbatim by the
user (medically/legally reviewed, source of truth). No sentence, medical claim,
reference, red-flag list, or disclaimer was rewritten, summarized, or translated
between languages. Three rounds of pre-implementation clarification were needed to
resolve URL/category/contentType conflicts between the manuscript metadata and the
site's actual existing structure before any file was written (see the task doc for the
full decision trail).

## Files created

- `blog/dizziness-and-palpitations-when-standing/index.html` (Korean)
- `blog/dizziness-and-fast-heartbeat-when-standing/index.html` (English)

## Files modified

- `blog/index.html` — added one new card (data-category `pain-autonomic`), 10 lines,
  no other changes
- `en/blog/index.html` — added one new card (data-category `pain-autonomic`), 10 lines,
  no other changes
- `sitemap.xml` — added 2 `<url>` entries (both new pages), no other changes

## Final URLs

- Korean: `https://nervlocklab.com/blog/dizziness-and-palpitations-when-standing/`
- English: `https://nervlocklab.com/blog/dizziness-and-fast-heartbeat-when-standing/`

## Category and content type

- Korean: category `통증·자율신경`, breadcrumb `블로그` (Blog, not Academy), detail badge
  `자율신경 증상 교육`
- English: category `Pain & Autonomic Health`, breadcrumb `Blog` (not Academy), detail
  badge `Autonomic Symptom Education`
- Detail badges appear in two places: a `.content-type-tag` pill on the article hero
  (new but template-consistent element, styled to match the existing `.article-tag`)
  and the existing `.blog-card-type-badge` component on both blog-listing cards.

## Canonical

- KR canonical → self (`.../dizziness-and-palpitations-when-standing/`)
- EN canonical → self (`.../dizziness-and-fast-heartbeat-when-standing/`)
- No cross-language canonical used on either page.

## hreflang

Both pages carry the sitewide 3-tag pattern:

```
<link rel="alternate" hreflang="ko" href=".../dizziness-and-palpitations-when-standing/" />
<link rel="alternate" hreflang="en" href=".../dizziness-and-fast-heartbeat-when-standing/" />
<link rel="alternate" hreflang="x-default" href=".../dizziness-and-palpitations-when-standing/" />
```

(x-default points at the Korean page, matching every other bilingual pair on the site.)

## Structured data

- `Article` JSON-LD on both pages: `headline`, `description`, `mainEntityOfPage`, `url`,
  `datePublished`/`dateModified` = `2026-07-21`, `inLanguage` (`ko-KR` / `en-US`),
  `articleSection` (category string), `author`/`reviewedBy` = `{"name": "Jeehyun Ham",
  "jobTitle": "Neurologist"}` on both language versions, `publisher` = NervLock Lab.
- `BreadcrumbList` JSON-LD on both pages: Home → Blog → article title.
- `evidenceReviewDate` (2026-07-20) is shown only as a visible `article-meta-item`
  field, consistent with how every existing article handles it — it is not a JSON-LD
  property anywhere on the site, so none was invented here. It was kept distinct from
  `datePublished`.
- No FAQPage schema added (none exists elsewhere on the site either).
- Both JSON-LD blocks parse as valid JSON (verified programmatically).

## Author / medical reviewer

- Korean page: `함지현` shown in all visible fields (article-meta, sig-block), matching
  the sitewide Korean author-name standardization committed earlier today (`12d99c6`).
- English page: `Jeehyun Ham, M.D.` shown in all visible fields, unchanged from
  existing convention.
- JSON-LD `Person.name` is `"Jeehyun Ham"` on **both** language versions (matches every
  existing article on the site, Korean included).

## Related posts (real URLs only, verified live before linking)

- Korean page links to:
  - 두근거림·어지럼·소화불편이 함께 있다면 자율신경 문제일까요? — `/blog/두근거림-어지럼-소화불편-자율신경/`
  - 자율신경이 무너졌을 때 — 몸이 보내는 신호들 — `/blog/자율신경-무너졌을때/`
- English page links to:
  - "Do Palpitations, Dizziness, and Indigestion Together Mean an Autonomic Problem?" — `/blog/palpitations-dizziness-digestive-symptoms-autonomic-nervous-system/`
  - "When the Autonomic Nervous System Fails: Recognizing the Clinical Spectrum of Dysautonomia" — `/blog/autonomic-dysfunction-symptoms/`
- Excluded: the manuscript's suggested `/en/academy/...` link candidates (non-existent
  path) and the "자율신경은 무엇을 조절할까요?" / "What Does the Autonomic Nervous System
  Control?" pair, because the English side of that pair (`what-does-the-autonomic-
  nervous-system-control`) is still an unpublished, uncommitted WIP file — not live, not
  in sitemap.

## Sitemap and listing reflection

- Both new URLs added to `sitemap.xml` (`priority 0.8`, `changefreq monthly`,
  `lastmod 2026-07-21`).
- Korean page appears at the top of the `통증·자율신경` filter and the full list in
  `blog/index.html`.
- English page appears at the top of the `pain-autonomic` filter and the full list in
  `en/blog/index.html`.

## Build, lint, type-check, tests

This repository has no build step, package manager, or test suite (confirmed: no
`package.json`, static HTML only; per `CLAUDE.md`). No build/lint/type-check commands
were run because none exist. QA was performed manually instead:

- `python -m http.server` local render check: both new article pages and both blog
  listing pages returned HTTP 200 and rendered the expected `<title>`.
- JSON-LD blocks on both new pages parsed as valid JSON (2/2 blocks each).
- `sitemap.xml` parsed as well-formed XML after the edit.
- HTML `<div>` open/close tag balance verified on both new files (23/23 each).
- All 6 internal `/blog/...` links referenced from the two new pages (self-links,
  cross-language links, and 4 related-post links) resolved to real, existing
  directories on disk.
- Reference-list and FAQ counts verified against the approved manuscripts exactly:
  Korean 8 references / 4 FAQ items, English 3 references / 7 FAQ items — no items
  added or removed on either side.

## Regression check against existing content

- `git status` before and after implementation shows only the intended files touched:
  `blog/index.html`, `en/blog/index.html`, `sitemap.xml`, plus the two new article
  files. No other existing blog post, page, or asset was modified.
- The previously-flagged, out-of-scope WIP file `blog/자율신경-조절/index.html` was
  diffed before and after this work — identical (161 insertions / 204 deletions
  against HEAD in both cases) — confirming it was not touched.
- `blog/what-does-the-autonomic-nervous-system-control/index.html` (unpublished WIP)
  and `blog/why-concentration-declines-dopamine-sleep-adhd/index.html` (T5 hold) were
  not modified and remain in their prior state.
- No product page, purchase link, or CTA was added anywhere.

## Unresolved issues

None. No new conflicts or medical-wording changes were required during
implementation.

## Deployment

Not deployed. All changes are local/uncommitted, consistent with this session's
practice of pausing before `git add`/`commit`/`push`. Awaiting explicit instruction to
stage and commit.

## Rollback

Since nothing has been committed or pushed, rollback is a working-tree operation only:

```
git checkout -- blog/index.html en/blog/index.html sitemap.xml
rm -rf "blog/dizziness-and-palpitations-when-standing" "blog/dizziness-and-fast-heartbeat-when-standing"
rm docs/tasks/2026-07-21-blog-dizziness-fast-heartbeat-standing-bilingual.md
rm docs/worklogs/2026-07-21-blog-dizziness-fast-heartbeat-standing-bilingual.md
```

This restores the working tree to its state immediately before this task, without
affecting the unrelated `자율신경-조절` WIP, the unpublished EN autonomic-control page,
or any previously committed content.
