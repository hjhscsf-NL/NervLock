# Worklog — Nutrition Pillar Article (KR + EN) 구현

날짜: 2026-07-18
관련: `docs/tasks/2026-07-18-nutrition-pillar-article.md`

## 요약

의학·법률 검수 완료 Nutrition Pillar 원고(한국어/영어)를 Brain Health
Academy의 신규 Nutrition 대표 글로 구현했다. 기존 Nutrition 대표 글
2개(KR: `포스파티딜세린-기억력`, EN: `phosphatidylserine-memory`)는
삭제·수정 없이 그대로 보존했다.

## URL 결정

리포지토리에 "nutrition"/"영양" 슬러그가 없음을 확인 후, 사이트 전역
관례(`/blog/<slug>/`)를 그대로 적용해 `/blog/뇌-영양/` (KR),
`/blog/brain-nutrition/` (EN)로 확정.

## 생성/수정 파일

- 신규: `blog/뇌-영양/index.html`, `blog/brain-nutrition/index.html`
- 수정: `blog/index.html` (카드 추가, 목록 최상단, 2026.07.18)
- 수정: `en/blog/index.html` (카드 추가, 목록 최상단, Jul 18, 2026)
- 수정: `index.html` (Academy Nutrition 카드 → `/blog/뇌-영양/`)
- 수정: `en/index.html` (Academy Nutrition 카드 → `/blog/brain-nutrition/`)
- 수정: `sitemap.xml` (URL 2건 추가, 총 74개)
- 수정(상호 내부링크 추가만, 본문 무변경): Brain Fog/Memory/Focus/Sleep
  Pillar 8개 파일(KR/EN 각각)

## 내부링크(Related Articles) 처리

Nutrition Pillar(KR/EN)는 Brain Fog, Memory, Focus, Sleep Pillar +
기존 Nutrition 글까지 5개 카드로 연결. 동시에 나머지 8개 Pillar
파일 모두에 Nutrition Pillar 카드를 추가해 양방향(상호) 내부링크를
구성했다. 이번 작업으로 4개 Pillar(Brain Fog·Memory·Focus·Sleep·
Nutrition)가 전부 발행 완료되어 서로 완전히 연결된 구조가 됐다.

## 카테고리 처리

이전 3개 Pillar와 달리 Nutrition Pillar는 원고 EN frontmatter의
`category: "Nutrition & Metabolic Health"`를 따라 "영양·대사"로
분류(data-category="nutrition-metabolism"), 기존 영양 관련 글과
동일한 분류 체계를 유지했다.

## 테스트 결과

- HTTP 200: 신규 글 2개, KR/EN 블로그 목록, KR/EN 홈페이지 전부 확인
- H1 1개 / H2 20개 / H3 36개 / 참고문헌 16개 — KR/EN 완전 일치
- JSON-LD 2블록(Article, BreadcrumbList) 양쪽 언어 모두 유효
- hreflang 양방향 확인: KR→EN, EN→KR lang-switch 링크 정상
- breadcrumb 배경색 오버라이드 정상 적용 확인 (`rgba(0,0,0,0)`)
- 반응형 320~1024px 전부 가로 스크롤 없음 (KR/EN 양쪽)
- 키보드 탐색(Tab) 정상, 콘솔 오류 없음 (KR/EN 양쪽)
- 블로그 목록: KR/EN 각 33개 카드, 신규 글이 최상단에 정상 노출
- Academy 카드(KR/EN 홈페이지) 신규 Pillar로 정상 연결 확인
- 8개 형제 Pillar(Focus/Sleep/Brain Fog/Memory KR·EN) 모두 Nutrition
  Pillar 상호링크 정상 확인 (Playwright로 related-card href 전수 검사)
- `git status`로 기존 Nutrition 글 2개 완전 무변경 확인 (변경 파일은
  예정된 13개 파일 + 신규 디렉터리 2개뿐)
- sitemap.xml well-formed XML 확인, 총 74개 URL (기존 72 + 신규 2)

## 미해결

- 없음. 4개 Pillar(Brain Fog·Memory·Focus·Sleep·Nutrition) 전체가
  상호 연결된 상태로 이번 배치가 마무리됐다.
