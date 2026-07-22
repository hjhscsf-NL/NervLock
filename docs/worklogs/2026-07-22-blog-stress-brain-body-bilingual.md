# Worklog: Bilingual blog post — "What Happens to the Brain and Body During Stress?"

Date: 2026-07-22
Plan: none (final metadata and decisions supplied directly in chat, no `docs/tasks/*.md` written for this task)

## Summary

Finalized and QA'd a bilingual blog post pair. The two article HTML files, the two
blog-listing insertions, and the sitemap entries were already present in the working
tree (untracked/modified) when this session started; this task verified every
required metadata field, date, related-post link, and hero icon against the final
values the user specified in chat, and confirmed nothing needed correction. Article
body prose was not touched.

## Files (already created before this session's verification pass)

- `blog/what-happens-to-brain-and-body-during-stress/index.html` (Korean)
- `blog/how-stress-affects-the-brain-and-body/index.html` (English)

## Files modified (already staged in working tree, verified not to need further changes)

- `blog/index.html` — one new card at the top of the grid (`data-category="pain-autonomic"`), 10 lines added, no other changes
- `en/blog/index.html` — one new card at the top of the grid (`data-category="pain-autonomic"`), 10 lines added, no other changes
- `sitemap.xml` — 2 new `<url>` entries appended, `priority 0.8` / `changefreq monthly` / `lastmod 2026-07-22`, matching site convention

## Final metadata (verified against user's chat instruction, no conflicts found)

- Korean: title "스트레스를 받으면 뇌와 몸에서는 어떤 일이 일어날까요?", slug
  `what-happens-to-brain-and-body-during-stress`, category `통증·자율신경`, content type
  `스트레스·자율신경 교육`
- English: title "What Happens to the Brain and Body During Stress?", slug
  `how-stress-affects-the-brain-and-body`, category `Pain & Autonomic Health`, content
  type `Stress & Autonomic Education`
- `datePublished` / `evidenceReviewDate` / `dateModified` (JSON-LD, present because the
  template requires it elsewhere) = `2026-07-22` on both pages
- Hero icon: `🧠` on both pages, reusing the existing `.article-hero::before` mechanism
  — no new icon system introduced

## Canonical / hreflang

- KR canonical → self; EN canonical → self
- Both pages carry the sitewide 3-tag hreflang pattern (`ko`, `en`, `x-default`), with
  `x-default` pointing at the Korean page, matching every other bilingual pair on the
  site

## Related posts (real URLs and titles verified against the live files on disk)

- Korean page links to:
  - "두근거림·어지럼·소화불편이 함께 있다면 자율신경 문제일까요?" — `/blog/두근거림-어지럼-소화불편-자율신경/` (title on disk matches exactly)
  - "자율신경이 무너졌을 때 — 몸이 보내는 신호들" — `/blog/자율신경-무너졌을때/` (actual on-disk slug has no dash before 때; the chat instruction's literal slug had an extra dash, so the real, existing URL was used instead, per the instruction's own "verify the actual published URL" directive)
- English page links to:
  - "Do Palpitations, Dizziness, and Indigestion Together Mean an Autonomic Problem?" — `/blog/palpitations-dizziness-digestive-symptoms-autonomic-nervous-system/`
  - "When the Autonomic Nervous System Fails: Recognizing the Clinical Spectrum of Dysautonomia" — `/blog/autonomic-dysfunction-symptoms/`
- All 4 related-post targets, plus both self/cross-language links, resolved to real,
  existing directories on disk (6/6 links checked).

## Author / credentials block

- Korean `sig-block` credentials read "세브란스병원 신경과 출신" (not the older "전
  임상연구조교수" wording) — matches the most recently published Korean articles
  (e.g. `자율신경-무너졌을때`), not the stale wording still present in
  `두근거림-어지럼-소화불편-자율신경` and the in-progress `자율신경-조절` WIP file.
- English `sig-block` credentials read "Former Clinical Research Professor, Severance
  Hospital, Dept. of Neurology" — matches the current standard used across all
  recently published English articles.
- No improvised variants introduced on either page.

## Structured data

- `Article` JSON-LD on both pages: `headline`, `description`, `mainEntityOfPage`,
  `url`, `datePublished`/`dateModified` = `2026-07-22`, `inLanguage` (`ko-KR`/`en-US`),
  `articleSection`, `author`/`reviewedBy` = `{"name": "Jeehyun Ham", "jobTitle":
  "Neurologist"}`, `publisher` = NervLock Lab.
- `BreadcrumbList` JSON-LD on both pages: Home → Blog → article title.
- Both JSON-LD blocks on both pages parse as valid JSON (4/4 blocks, verified
  programmatically).

## QA performed

This repository has no build step, package manager, or test suite (static HTML only,
per `CLAUDE.md`). QA was manual:

- `python -m http.server` local render check: both new article pages and both blog
  listing pages returned HTTP 200; `<title>` on both listing pages confirmed intact.
- JSON-LD validity: 4/4 blocks parsed successfully across both new pages.
- HTML `<div>` open/close tag balance: 23/23 on both new pages.
- All internal `/blog/...` links referenced from the two new pages (self, cross-
  language, and 4 related-post links) resolved to real, existing directories on disk.
- `sitemap.xml` parsed as well-formed XML after the additions.
- `blog/index.html` / `en/blog/index.html` diffs confirmed as exactly one 10-line card
  insertion each, at the top of the grid, with correct `data-category="pain-autonomic"`
  matching the existing filter button on both listing pages.

## Regression check against existing/unrelated content

- `git status` shows only the intended files touched: `blog/index.html`,
  `en/blog/index.html`, `sitemap.xml`, plus the two new article directories.
- The out-of-scope WIP file `blog/자율신경-조절/index.html` (KR-only post pending its
  English counterpart, see memory) was left untouched — not part of this task.
- `blog/what-does-the-autonomic-nervous-system-control/index.html` (unpublished WIP,
  already referenced from a prior commit's `en/blog/index.html` card) was left
  untouched — not part of this task.

## Unresolved issues

None. No new metadata conflicts or medical-wording changes were required.

## Deployment

Not deployed. All changes remain local/uncommitted, per instruction — no `git add`,
`commit`, or `push` performed.

## Rollback

```
git checkout -- blog/index.html en/blog/index.html sitemap.xml
rm -rf "blog/what-happens-to-brain-and-body-during-stress" "blog/how-stress-affects-the-brain-and-body"
rm docs/worklogs/2026-07-22-blog-stress-brain-body-bilingual.md
```

This restores the working tree to its state immediately before this task, without
affecting the unrelated `자율신경-조절` WIP or the unpublished
`what-does-the-autonomic-nervous-system-control` page.
