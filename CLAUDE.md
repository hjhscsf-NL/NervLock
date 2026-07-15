# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

NervLock (nervlocklab.com) is a static marketing/content site for a neurologist-designed brain-health supplement brand. There is no build step, no package manager, and no test suite — every page is a single, self-contained `.html` file with inline `<style>` and `<script>`. Deployment is automatic: any push to `main` triggers `.github/workflows/deploy.yml`, which uploads the repo root as-is to GitHub Pages (custom domain via `CNAME` → `nervlocklab.com`).

To preview locally, just serve the directory root and open a page — e.g. `python -m http.server 8000` from the repo root, then visit `http://localhost:8000/index.html`. There is nothing to install or compile.

## Site structure

- `index.html` — Korean landing page (main site).
- `en/index.html` — English landing page. Mirrors the Korean page's section order and `id`s exactly (`hero`, `pain`, `science`, `ingredients`, `doctor`, `reviews`, `brand-faq`, `products`, `blog`, `coming-soon`, `faq`, `cta`), just with translated copy. When adding/reordering a section on one landing page, mirror the change on the other.
- `blog/<slug>/index.html` — one folder per article, so URLs are directory-style (`/blog/parkinson-caregiver-guide/`). **Every article exists as a bilingual pair**: a Korean-slug folder (e.g. `blog/파킨슨-보호자/`) and an English-slug folder (e.g. `blog/parkinson-caregiver-guide/`) are translations of each other, cross-linked via a `.lang-switch-banner` block near the top of the article that points at the counterpart URL. When editing or adding a post, update/create both language versions and keep the cross-links in sync.
- `robots.txt` / `sitemap.xml` — sitemap is a full enumeration of every `index.html` under the repo (currently 56 URLs), not hand-maintained. Priority convention: root `/` = 1.0, `/en/` = 0.9, every `/blog/*` = 0.8 with `changefreq: monthly`. Korean slugs are percent-encoded in `<loc>`. **Regenerate this file whenever a blog post is added or removed** (walk for all `index.html` files, map to URL by path, pull `lastmod` from `git log -1 --date=short`).
- `apps-script/Code.gs` — Google Apps Script backend (deployed separately via the Apps Script editor, not by this repo's CI). Handles the email-signup form (`doPost`/`doGet`), appending rows to a `NervLock_Subscribers` Google Sheet. The frontend's `#coming-soon` signup forms POST to a hardcoded Apps Script web-app URL (`SHEET_ENDPOINT`) duplicated inline in every page that has a signup form — if the deployed script URL ever changes, it must be updated in each of those pages individually.

## Blog article template

Each blog post is a standalone HTML file (no shared partials/includes), but they all follow the same internal structure:

1. `hero` block — title, category tag, and a meta row (author byline, date, read time).
2. `.lang-switch-banner` — link to the sibling-language version of the same article.
3. Article body — headings, `.evidence-box` citation lists, occasionally an `.author-card` mid-article bio block.
4. `.related` — links to 1-2 related posts.
5. `.sig-block` — the standardized closing author-credentials block: a name/title line, a `<ul class="sig-creds">` of exactly 5 credential lines, and a `.sig-notice` disclaimer paragraph.
6. Shared footer.

**Author identity is standardized site-wide** — don't improvise variants:
- Korean pages: `Dr.H (함지현)` as the name, `함지현 원장, 신경과 전문의` as the title.
- English pages: `Dr. Claire Ham (Jeehyun Ham, M.D.)` as the name, `Claire Ham, M.D. — Neurologist` as the title.
- The 5-line credentials list is fixed (Yonsei University College of Medicine / Severance Hospital, Dept. of Neurology / member of 3 named societies) and should read identically everywhere it appears — in `.sig-block`, in `.author-card`, in `index.html`'s `doctor` section, and in the in-page blog-modal `.modal-footer` (see below).

## The Korean landing page's blog section is dual-content

`index.html`'s `blog` section renders summary cards (`.blog-card`, each with a `data-post` index) that do two different things depending on what's clicked:
- The **"전문 읽기" link** on the card navigates to the real `/blog/<slug>/` page.
- **Clicking the card body** opens an in-page JS modal (`openPost()`, wired via `data-post` in the script near the bottom of `index.html`) that renders an excerpt from a hardcoded `posts` array — including its own copy of the author signature (`.modal-footer`).

This means editing a Korean blog post's summary/byline touches up to three places: the real `/blog/` page, the card in `index.html`, and the corresponding entry in the `posts` array. `en/index.html`'s blog cards do **not** have this modal system — they link straight out to `/blog/` via "Read Article", so only two places apply there.

## Blog content production workflow

`prompt.md` documents the intended editorial/production system for planning and writing new blog posts (SEO research → evidence gathering → drafting → medical/legal fact-check → SEO/GEO optimization → visual assets → publish → repurpose → analyze). Read it before planning a new content batch or multi-post series — it defines the review gates (medical fact-check, 의료광고법/health-claim compliance review) that any new health-related content on this site should pass through before publishing.
