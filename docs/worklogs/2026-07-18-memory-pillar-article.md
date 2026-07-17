# Worklog — Memory Pillar Article (KR + EN) 구현

날짜: 2026-07-18
관련: `docs/tasks/2026-07-18-memory-pillar-article.md`

## 요약

의학·법률 검수 완료 Memory Pillar 원고(한국어/영어)를 Brain Health
Academy의 신규 Memory 대표 글로 구현했다. 기존 Memory/치매 대표 글
2개(KR: `치매-10년전-신호`, EN: `dementia-preclinical-stage`)는
삭제·수정 없이 그대로 보존했다.

## URL 결정

리포지토리에 "기억력"/"memory-loss" 슬러그가 없음을 확인 후, 사이트
전역 관례(`/blog/<slug>/`)를 그대로 적용해 `/blog/기억력-치매-차이/`
(KR), `/blog/memory-loss-and-dementia/` (EN)로 확정.

## 생성/수정 파일

- 신규: `blog/기억력-치매-차이/index.html`, `blog/memory-loss-and-dementia/index.html`
- 수정: `blog/index.html` (카드 추가, 목록 최상단, 2026.07.18)
- 수정: `en/blog/index.html` (카드 추가, 목록 최상단, Jul 18, 2026)
- 수정: `index.html` (Academy Memory 카드 → `/blog/기억력-치매-차이/`)
- 수정: `en/index.html` (Academy Memory 카드 → `/blog/memory-loss-and-dementia/`)
- 수정: `sitemap.xml` (URL 2건 추가, 총 72개)
- 수정(상호 내부링크 추가만, 본문 무변경):
  `blog/why-concentration-declines-dopamine-sleep-adhd/index.html`,
  `blog/why-cant-i-focus/index.html`,
  `blog/수면-기억력-집중력/index.html`,
  `blog/sleep-memory-focus/index.html`,
  `blog/브레인포그-원인/index.html`,
  `blog/brain-fog-causes/index.html`

## 내부링크(Related Articles) 처리

Memory Pillar(KR/EN)는 Brain Fog Pillar, Focus Pillar, Sleep Pillar,
기존 Memory 글까지 4개 카드로 연결. 동시에 Brain Fog/Focus/Sleep
Pillar 6개 파일 모두에 Memory Pillar 카드를 추가해 양방향(상호)
내부링크를 구성했다. Nutrition Pillar는 아직 정식 Pillar 형태로
발행되지 않아(현재 "Nutrition" Academy 카드는 일반 글에 연결) 상호링크
대상에서 제외했다.

## 원고 콘텐츠 노트

EN 원고의 "Semantic and Episodic Memory" 섹션 도입부에 텍스트가 뒤섞인
전송 오류가 있어("**ing an appointment / - TurningSemantic memory**
includes..."), KR 원고의 대응 문장과 대조해 의도된 원문
("**Semantic memory** includes general knowledge, concepts, and the
meanings of words.")으로 복원해 반영했다. 임의 재작성이 아닌 명백한
전송 오류 교정임.

## 테스트 결과

- HTTP 200: 신규 글 2개, KR/EN 블로그 목록, KR/EN 홈페이지 전부 확인
- H1 1개 / 참고문헌 15개 — KR/EN 일치. H2 16개 — KR/EN 일치. H3는 KR 43개
  / EN 46개로 차이 있으나 원고 자체의 소제목 구조 차이에서 기인(원문
  검증 완료, 번역 누락 아님)
- JSON-LD 2블록(Article, BreadcrumbList) 양쪽 언어 모두 유효
- hreflang 양방향 확인: KR→EN, EN→KR lang-switch 링크 정상
- breadcrumb 배경색 오버라이드 정상 적용 확인 (`rgba(0,0,0,0)`)
- 반응형 320~1024px 전부 가로 스크롤 없음 (KR/EN 양쪽)
- 키보드 탐색(Tab) 정상
- 콘솔 오류 없음 (KR/EN 양쪽)
- 블로그 목록: KR/EN 각 32개 카드, 신규 글이 최상단에 정상 노출
- Academy 카드(KR/EN 홈페이지) 신규 Pillar로 정상 연결 확인
- 6개 형제 Pillar(Focus/Sleep/Brain Fog KR·EN) 모두 Memory Pillar
  상호링크 정상 확인 (Playwright로 related-card href 전수 검사)
- `git status`로 기존 Memory 글 2개 완전 무변경 확인 (변경 파일은 예정된
  11개 파일 + 신규 디렉터리 2개뿐)
- sitemap.xml well-formed XML 확인, 총 72개 URL (기존 70 + 신규 2)

## 미해결

- 없음. Nutrition Pillar가 향후 정식 발행되면 4개 Pillar 간 완전한
  상호링크 구조로 재검토 필요.
