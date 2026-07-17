# Nutrition Pillar Article (KR + EN) — 구현 작업 문서

작성일: 2026-07-18
상태: 구현 완료

## 목적

의학·법률 검수가 완료된 최종 승인 원고(한국어/영어)를 NervLock Brain
Health Academy의 신규 Nutrition Pillar 글로 구현한다. 콘텐츠 작성/의학
재검토가 아닌 기술 구현 작업으로, 승인된 본문은 수정하지 않는다.

이 Pillar는 기존에 발행되어 있던 Nutrition 대표 글
(`blog/포스파티딜세린-기억력/`, `blog/phosphatidylserine-memory/`)을
대체하지 않는 **신규 추가 콘텐츠**다. 기존 글은 삭제·수정 없이 그대로
보존한다.

## 최종 URL

- KR: `https://nervlocklab.com/blog/뇌-영양/`
- EN: `https://nervlocklab.com/blog/brain-nutrition/`

## URL 충돌 검토

리포지토리에 "nutrition"/"영양"/"뇌영양" 슬러그를 가진 기존 글이 없음을
`Glob` 검색으로 사전 확인. Academy "Nutrition" 카드가 실제로 가리키던
기존 대표 글은 `블로그/포스파티딜세린-기억력/`
(EN: `phosphatidylserine-memory`)였으며, 신규 슬러그와 충돌하지 않는다.

원고 자체의 EN frontmatter가 제안한 `/en/academy/brain-nutrition/`
경로는 이전 3개 Pillar와 동일한 사유로 채택하지 않고, 사이트 전역
관례인 `/blog/<slug>/`를 그대로 적용.

## 카테고리 처리

이전 3개 Pillar(Brain Fog, Focus, Sleep)는 모두 "뇌 건강·생활"
(Brain Health & Lifestyle) 카테고리였으나, 이번 Nutrition Pillar는
원고 EN frontmatter가 명시한 `category: "Nutrition & Metabolic Health"`
를 따라 "영양·대사"(nutrition-metabolism) 카테고리로 분류했다. 이는
기존 사이트 분류 체계 및 기존 Nutrition 글(포스파티딜세린-기억력 등)과
일치하는 처리다.

## 구현 범위

- 신규 파일: `blog/뇌-영양/index.html`, `blog/brain-nutrition/index.html`
- 수정 파일:
  - `blog/index.html` (KR 카드 추가, 목록 최상단)
  - `en/blog/index.html` (EN 카드 추가, 목록 최상단)
  - `index.html` (Academy Nutrition 카드를 신규 Pillar로 연결)
  - `en/index.html` (Academy Nutrition 카드를 신규 Pillar로 연결)
  - `sitemap.xml` (URL 2건 추가, 기존 72개 URL 무변경)
  - 상호 내부링크 추가(아래 참조): Brain Fog/Memory/Focus/Sleep
    Pillar 8개 파일(KR/EN 각각)

## 판단이 필요했던 지점 — Academy 카드 리다이렉트

Brain Fog·Memory Pillar 때와 동일한 패턴: 기존 Nutrition Academy
카드가 이미 실존 글(`포스파티딜세린-기억력`/`phosphatidylserine-memory`)
을 가리키고 있었다. Pillar 글이 Academy의 대표 콘텐츠 역할을 하는 기존
Pillar들과의 일관성을 위해 Academy 카드는 신규 Pillar로 연결하도록
변경했다. 기존 글의 내부링크 유입이 끊기지 않도록 신규 Pillar의
Related Articles에 기존 글을 명시적으로 추가했고, 블로그 목록
페이지에서도 계속 노출된다.

## 상호 내부링크(Internal Links) — 4개 Pillar 완전 연결

이번 작업으로 Nutrition Pillar가 마지막으로 발행되면서, 지시사항이
언급한 4개 Pillar(Brain Fog, Memory, Focus, Sleep)가 모두 발행 완료
상태가 되었다. 이에 따라 Nutrition Pillar와 나머지 3개 Pillar 사이의
양방향 링크뿐 아니라, 4개 Pillar 전체가 서로 연결되도록 구성했다.

- Nutrition Pillar(KR/EN) → Brain Fog, Memory, Focus, Sleep Pillar +
  기존 Nutrition 글(포스파티딜세린-기억력/phosphatidylserine-memory)
  — 5개 카드
- Brain Fog/Memory/Focus/Sleep Pillar(8개 파일) → 각각 Related
  Articles에 Nutrition Pillar 카드 추가

이로써 4개 Pillar(Brain Fog·Memory·Focus·Sleep·Nutrition)가 모두
상호 연결된 완전 그래프 형태의 내부링크 구조를 이루게 됐다.

## 원고 무결성 검증

KR/EN 모두 H1 1개, H2 20개, H3 36개, 참고문헌 16개로 완전히 일치.
JSON-LD 2블록(Article, BreadcrumbList) 모두 유효.
