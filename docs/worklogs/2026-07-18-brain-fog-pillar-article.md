# Worklog — Brain Fog Pillar Article (KR + EN) 구현

날짜: 2026-07-18
관련: `docs/tasks/2026-07-18-brain-fog-pillar-article.md`

## 요약

의학·법률 검수 완료 Brain Fog Pillar 원고(한국어/영어)를 Brain Health
Academy의 신규 Brain Fog 대표 글로 구현했다. 기존에 발행되어 있던 Brain
Fog 글 2개(KR: `브레인포그-신경과학`, EN: `brain-fog-neuroscience`)는
삭제·수정 없이 그대로 보존했다.

## URL 결정

기존 글과의 슬러그 충돌 없음을 사전 확인 후, 사이트 전역 관례
(`/blog/<slug>/`)를 그대로 적용해 `/blog/브레인포그-원인/` (KR),
`/blog/brain-fog-causes/` (EN)로 확정. 원고 frontmatter가 제안한
`/en/academy/brain-fog-causes/`는 FOCUS/Sleep Pillar 때와 동일한 근거로
채택하지 않음.

## 생성/수정 파일

- 신규: `blog/브레인포그-원인/index.html`, `blog/brain-fog-causes/index.html`
- 수정: `blog/index.html` (카드 추가, 목록 최상단, 2026.07.18)
- 수정: `en/blog/index.html` (카드 추가, 목록 최상단, Jul 18, 2026)
- 수정: `index.html` (Academy Brain Fog 카드 → `/blog/브레인포그-원인/`)
- 수정: `en/index.html` (Academy Brain Fog 카드 → `/blog/brain-fog-causes/`)
- 수정: `sitemap.xml` (URL 2건 추가, 총 70개)

## 내부링크(Related Articles) 처리

원고가 제안한 내부링크는 모두 미검증/미존재 경로였다. 대신 주제가 일치하는
실존 글 3개로 연결: FOCUS Pillar, Sleep Pillar, 그리고 **기존 Brain Fog
신경과학 글**. 마지막 링크는 Academy 카드가 신규 Pillar로 재연결되면서
기존 글의 내부 유입이 줄어들지 않도록 의도적으로 추가했다.

## 테스트 결과

- HTTP 200: 신규 글 2개, KR/EN 블로그 목록, KR/EN 홈페이지, 기존 Brain
  Fog 글 2개 전부 확인 (percent-encoding 필요, raw 한글 경로로 curl 호출
  시 쉘 인코딩 문제로 오탐 404 발생 → percent-encoded URL로 재확인해 해결)
- H1 1개 / H2 15개 / H3 43개 / 참고문헌 14개 — KR/EN 완전 일치
- JSON-LD 2블록(Article, BreadcrumbList) 양쪽 언어 모두 유효
- hreflang 양방향 확인: KR→EN, EN→KR lang-switch 링크 정상
- breadcrumb 배경색 오버라이드 정상 적용 확인 (`rgba(0,0,0,0)`)
- 반응형 320~1024px 전부 가로 스크롤 없음 (KR/EN 양쪽)
- 키보드 탐색(Tab) 정상
- 콘솔 오류 없음 (KR/EN 양쪽)
- 블로그 목록: KR/EN 각 31개 카드, 신규 글이 최상단에 정상 노출
- Academy 카드(KR/EN 홈페이지) 신규 Pillar로 정상 연결 확인
- `git status`/`git diff --stat`로 기존 Brain Fog 글 2개 완전 무변경 확인
  (변경 파일은 blog/index.html, en/blog/index.html, index.html,
  en/index.html, sitemap.xml 5개 + 신규 디렉터리 2개뿐)
- sitemap.xml well-formed XML 확인, 총 70개 URL (기존 68 + 신규 2)

## 미해결

- 없음. 후속 영어 글이 늘어나면 Related Articles 후보를 재검토할 수 있음.
