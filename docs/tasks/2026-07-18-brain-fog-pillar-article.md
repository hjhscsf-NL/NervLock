# Brain Fog Pillar Article (KR + EN) — 구현 작업 문서

작성일: 2026-07-18
상태: 구현 완료

## 목적

의학·법률 검수가 완료된 최종 승인 원고(한국어/영어)를 NervLock Brain
Health Academy의 신규 Brain Fog Pillar 글로 구현한다. 콘텐츠 작성/의학
재검토가 아닌 기술 구현 작업으로, 승인된 본문은 수정하지 않는다.

이 Pillar는 기존에 발행되어 있던 Brain Fog 글(`blog/브레인포그-신경과학/`,
`blog/brain-fog-neuroscience/`)을 대체하지 않는 **신규 추가 콘텐츠**다.
기존 글은 삭제·수정 없이 그대로 보존한다.

## 최종 URL

- KR: `https://nervlocklab.com/blog/브레인포그-원인/`
- EN: `https://nervlocklab.com/blog/brain-fog-causes/`

## URL 충돌 검토

기존 KR 글 슬러그(`브레인포그-신경과학`)와 EN 글 슬러그
(`brain-fog-neuroscience`) 모두 신규 슬러그(`브레인포그-원인`,
`brain-fog-causes`)와 충돌하지 않음을 사전 확인. 원고 자체의 EN
frontmatter가 제안한 `/en/academy/brain-fog-causes/` 경로는 기존
FOCUS/Sleep Pillar와 동일한 사유로 채택하지 않고, 사이트 전역 관례인
`/blog/<slug>/`를 그대로 적용 (기존 3개 Pillar와 동일 판단 기준, 이번엔
재질문 없이 정책으로 직접 적용).

## 구현 범위

- 신규 파일: `blog/브레인포그-원인/index.html`, `blog/brain-fog-causes/index.html`
- 수정 파일:
  - `blog/index.html` (KR 카드 추가, 목록 최상단)
  - `en/blog/index.html` (EN 카드 추가, 목록 최상단)
  - `index.html` (Academy Brain Fog 카드를 신규 Pillar로 연결)
  - `en/index.html` (Academy Brain Fog 카드를 신규 Pillar로 연결)
  - `sitemap.xml` (URL 2건 추가, 기존 68개 URL 무변경)

## 판단이 필요했던 지점 — Academy 카드 리다이렉트

Sleep/Focus Pillar 때는 Academy 카드가 placeholder 또는 무관한 글을
가리키고 있어 Pillar로 교체하는 데 이견이 없었다. 이번엔 기존 Brain Fog
Academy 카드가 이미 **실존하는 정식 글**(`브레인포그-신경과학`,
`brain-fog-neuroscience`)을 가리키고 있었다는 점이 다르다.

Pillar 글이 Academy의 대표 콘텐츠 역할을 하도록 하는 기존 3개 Pillar와의
일관성을 위해 Academy 카드는 신규 Pillar로 연결하도록 변경했다. 다만
기존 글의 내부링크 유입이 끊기지 않도록, 신규 Pillar 양쪽 언어 버전의
Related Articles에 기존 글을 명시적으로 추가했다 (아래 참조). 기존 글은
블로그 목록 페이지에서도 계속 노출되며 URL/본문 모두 무변경이다.

## 기존 구조와의 충돌 및 처리 방식 (FOCUS Pillar와 동일 패턴 재사용)

1. Breadcrumb `<nav>` 태그의 전역 `nav{}` 배경 상속 버그 — 처음부터
   `.breadcrumb { position: static; background: none; backdrop-filter: none;
   border-bottom: none; }` 오버라이드를 포함해 작성.
2. Article + BreadcrumbList JSON-LD 2블록 (`inLanguage`: `ko-KR`/`en-US`,
   `articleSection`: 뇌 건강·생활 / Brain Health & Lifestyle).
3. 작성자 메타 6필드(작성자/전문분야/의학검토/게시일/검토일/근거검토일)
   전부 "Jeehyun Ham, M.D." 표기로 통일.
4. 콘텐츠 유형 배지 미적용 (승인된 배지 값에 해당 없음).
5. 제품 CTA 배너 생략.
6. Related Articles: 원고 자체가 제안한 내부링크(`/en/academy/...` 등)는
   전부 미검증·미존재 상태라 사용하지 않고, 실제로 존재하고 주제가
   일치하는 3개 글로 대체 — FOCUS Pillar, Sleep Pillar, 그리고 기존
   Brain Fog 신경과학 글.

## 원고 무결성 검증

`article-body` 구조를 KR/EN 양쪽에서 비교: H1 1개, H2 15개, H3 43개,
참고문헌 14개로 완전히 일치. JSON-LD 2블록(Article, BreadcrumbList) 모두
`json.loads()` 파싱 성공.
