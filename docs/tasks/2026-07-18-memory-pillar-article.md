# Memory Pillar Article (KR + EN) — 구현 작업 문서

작성일: 2026-07-18
상태: 구현 완료

## 목적

의학·법률 검수가 완료된 최종 승인 원고(한국어/영어)를 NervLock Brain
Health Academy의 신규 Memory Pillar 글로 구현한다. 콘텐츠 작성/의학
재검토가 아닌 기술 구현 작업으로, 승인된 본문은 수정하지 않는다.

이 Pillar는 기존에 발행되어 있던 Memory/치매 대표 글
(`blog/치매-10년전-신호/`, `blog/dementia-preclinical-stage/`)을
대체하지 않는 **신규 추가 콘텐츠**다. 기존 글은 삭제·수정 없이 그대로
보존한다.

## 최종 URL

- KR: `https://nervlocklab.com/blog/기억력-치매-차이/`
- EN: `https://nervlocklab.com/blog/memory-loss-and-dementia/`

## URL 충돌 검토

리포지토리에는 "기억력" 또는 "memory-loss"를 슬러그로 쓰는 기존 글이
없음을 `Glob` 검색으로 사전 확인. Academy "Memory" 카드가 실제로
가리키던 기존 대표 글은 `블로그/치매-10년전-신호/`
(EN: `dementia-preclinical-stage`)였으며, 신규 슬러그와 충돌하지 않는다.

원고 자체의 EN frontmatter가 제안한 `/en/academy/memory-loss-and-dementia/`
경로는 Sleep/Focus/Brain Fog Pillar와 동일한 사유로 채택하지 않고, 사이트
전역 관례인 `/blog/<slug>/`를 그대로 적용.

## 구현 범위

- 신규 파일: `blog/기억력-치매-차이/index.html`, `blog/memory-loss-and-dementia/index.html`
- 수정 파일:
  - `blog/index.html` (KR 카드 추가, 목록 최상단)
  - `en/blog/index.html` (EN 카드 추가, 목록 최상단)
  - `index.html` (Academy Memory 카드를 신규 Pillar로 연결)
  - `en/index.html` (Academy Memory 카드를 신규 Pillar로 연결)
  - `sitemap.xml` (URL 2건 추가, 기존 70개 URL 무변경)
  - 상호 내부링크 추가(아래 참조): `blog/why-concentration-declines-dopamine-sleep-adhd/index.html`,
    `blog/why-cant-i-focus/index.html`, `blog/수면-기억력-집중력/index.html`,
    `blog/sleep-memory-focus/index.html`, `blog/브레인포그-원인/index.html`,
    `blog/brain-fog-causes/index.html`

## 판단이 필요했던 지점 — Academy 카드 리다이렉트

Brain Fog Pillar 때와 동일한 패턴: 기존 Memory Academy 카드가 이미
실존 글(`치매-10년전-신호`/`dementia-preclinical-stage`)을 가리키고
있었다. Pillar 글이 Academy의 대표 콘텐츠 역할을 하는 기존 3개 Pillar와의
일관성을 위해 Academy 카드는 신규 Pillar로 연결하도록 변경했다. 기존
글의 내부링크 유입이 끊기지 않도록 신규 Pillar의 Related Articles에
기존 글을 명시적으로 추가했고, 블로그 목록 페이지에서도 계속 노출된다.

## 상호 내부링크(Internal Links) — Pillar 간 양방향 연결

지시사항의 "상호 내부링크"에 따라 신규 Memory Pillar와 현재 공개된
3개 Pillar(Brain Fog, Focus, Sleep — Nutrition Pillar는 아직 미발행이라
제외) 사이에 양방향 링크를 구성했다.

- Memory Pillar(KR/EN) → Brain Fog Pillar, Focus Pillar, Sleep Pillar,
  기존 Memory 글(치매-10년전-신호/dementia-preclinical-stage) — 4개 카드
- Brain Fog Pillar(KR/EN) → 기존 Related Articles에 Memory Pillar 카드
  추가 (4번째 카드)
- Focus Pillar(KR/EN) → 기존 Related Articles에 Memory Pillar 카드
  추가 (3번째 카드)
- Sleep Pillar(KR/EN) → 기존 Related Articles에 Memory Pillar 카드
  추가 (3번째 카드)

Nutrition Pillar는 `포스파티딜세린-기억력`/`phosphatidylserine-memory`가
Academy "Nutrition" 카드에 연결되어 있지만 breadcrumb·JSON-LD 등 Pillar
전용 구조가 없는 일반 글이므로, 지시사항의 "아직 공개되지 않은 글에는
링크하지 않는다" 원칙에 따라 상호링크 대상에서 제외했다.

## 원고 콘텐츠 노트

영어 원고 본문 중 "Semantic and Episodic Memory" 섹션 도입부에 명백한
전송 오류로 보이는 텍스트 뭉개짐이 있었다("**ing an appointment /
- TurningSemantic memory** includes..." 형태로 이전 리스트 항목과
뒤섞임). 한국어 원고의 동일 섹션("의미기억은 단어의 뜻, 일반 지식과
개념에 관한 기억입니다.")과 대조해 의도된 원문이 "**Semantic memory**
includes general knowledge, concepts, and the meanings of words."임을
확인하고 이 복원된 형태로 반영했다. 별도의 요약·재작성이 아니라 명백한
전송 오류 복원임을 명시한다.

## 원고 무결성 검증

KR/EN 모두 H1 1개, H2 16개, 참고문헌 15개로 일치. H3 개수는 KR 43개,
EN 46개로 차이가 있으나, 이는 두 원고 자체의 소제목(###) 구조가 다른
지점(예: "SCD-plus" 특성, "나이에 따른 변화" 두 목록)에서 기인하며
번역 과정의 누락이 아니라 원문 그대로 반영한 결과다. JSON-LD 2블록
(Article, BreadcrumbList) 모두 유효.
