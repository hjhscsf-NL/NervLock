# 블로그 카테고리 택소노미 개편 — 작업 지시서

작성일: 2026-07-17
상태: 승인 대기 (구현 금지 — 조사 및 계획 보고 전용 문서)

이 문서는 NervLock 블로그의 상위 카테고리를 최종 확정된 4개 체계로 교체하고,
연구 관련 콘텐츠는 별도 상위 카테고리 대신 "콘텐츠 유형 배지"로 표시하도록
변경하기 위한 지시서다. 아래 절차를 순서대로 따르고, **7번(승인)까지는
어떤 코드 파일도 수정하지 않는다.**

---

## 0. 사전 확인 (이미 완료된 조사 — 재확인만 할 것)

이 문서를 작성하기 전에 다음을 실제 코드베이스에서 확인했다. 구현 시작 전에
동일한 사실이 여전히 유효한지 다시 한번 확인한다 (그 사이 다른 커밋이
있었을 수 있으므로).

### 0.1 관련 파일 경로

| 파일 | 역할 |
|---|---|
| `blog/index.html` | 한국어 블로그 목록 페이지 (필터 + 28개 카드) |
| `en/blog/index.html` | 영어 블로그 목록 페이지 (필터 + 28개 카드, 공식 28개 글만) |
| `blog/<한글슬러그>/index.html` × 28 | 한국어 개별 글 (본문 내 `.article-tag` 또는 `.hero-category`에 자체 카테고리 라벨 존재) |
| `blog/<영문슬러그>/index.html` × 32 (공식 28 + 중복후보 4) | 영어 개별 글 |
| `index.html` (루트) | 홈페이지. `#research` 섹션에 Science & Research 플레이스홀더 3개 카드 존재 (실제 논문 데이터 없음, 블로그 글과 연결된 카드 없음) |
| `en/index.html` | 영어 홈페이지. 동일 구조의 `#research` 플레이스홀더 |
| `sitemap.xml` | 전체 URL 목록 (카테고리 정보 없음, 변경 불필요 예상) |

**데이터 구조 관련 중요 사실**: 이 저장소는 빌드 스텝이 없는 완전 정적 사이트다
(`package.json`, lint 설정 없음 — CLAUDE.md 참조). 카테고리는 별도 데이터
파일(JSON 등)로 관리되지 않고, `blog/index.html`과 `en/blog/index.html`
안에 각 카드가 `data-category="brain|pain|functional"` (KR) /
`data-category="neuro|pain|functional"` (EN) 속성으로 하드코딩되어 있다.
따라서 "데이터 구조"는 곧 이 두 HTML 파일의 카드 마크업 자체다.

### 0.2 현재 필터 상태

- 한국어(`blog/index.html`): 전체 · 뇌신경질환(`brain`) · 통증(`pain`) · 기능의학(`functional`) — 4개
- 영어(`en/blog/index.html`): All · Neurological Disorders(`neuro`) · Pain(`pain`) · Functional Medicine(`functional`) — 4개
- `연구·근거` / `Research` 라는 이름의 블로그 필터는 **존재하지 않는다**
  (내비게이션의 "Science & Research"는 홈페이지 `#research` 섹션으로 가는
  링크일 뿐, 블로그 필터가 아니다). → 지시서 2번 항목 중 "연구·근거 필터가
  존재한다면 제거" 조건은 **해당 없음**으로 확인됨.

### 0.3 현재 카테고리 분포 (실제 코드에서 추출)

**한국어 28개**: 뇌신경질환(brain) 18 · 기능의학(functional) 7 · 통증(pain) 3

**영어 28개**(공식본만, 중복후보 4개 제외): Neurological Disorders(neuro) 17 · Functional Medicine(functional) 7 · Pain(pain) 4

### 0.4 발견된 기존 데이터 이슈 (신규 개편과 별개로 존재하던 문제)

1. **글 본문 내부 카테고리 라벨과 목록 페이지 카테고리가 서로 다르다.**
   예: `블로그/파킨슨-초기증상/index.html`은 본문 안에서 자신을 `신경과학`
   이라 표시하지만, `blog/index.html` 카드에서는 `뇌신경질환`(brain)으로
   분류되어 있다. 오래된 파킨슨 글 다수가 이런 불일치를 갖고 있다
   (일부는 이미 `뇌신경질환`/`통증`/`기능의학`으로 갱신되어 있음).
2. **한국어·영어 분류가 서로 다른 경우가 있다.** 예: 파킨슨 통증 관련 글이
   한국어에서는 `뇌신경질환`(brain)으로, 영어에서는 `Pain`으로 분류되어
   있다 (`파킨슨-통증` vs `parkinson-pain-management`).
3. **현재의 "배지"는 사실 카테고리 라벨 그 자체다.** `.blog-card-badge`
   슬롯에 지금은 `뇌신경질환` 같은 카테고리명이 들어가 있다. 새 체계에서
   "콘텐츠 유형 배지"(연구 해설·가이드라인 등)를 추가하려면 이 슬롯을
   재정의하거나 새 슬롯을 만들어야 한다 — 카테고리 배지와 콘텐츠 유형
   배지를 같은 시각 요소로 재사용하면 안 된다 (지시서 9번 요구사항과 직결).
4. **개별 글 페이지 자체에는 구조화 데이터(JSON-LD)가 전혀 없다**
   (Article/BlogPosting 스키마 없음). `/en/blog/` 목록 페이지에만
   CollectionPage + BreadcrumbList가 있다. 따라서 "articleSection 유지"
   요구사항은 현재는 적용 대상이 없다 — 이번 작업으로 신규 구조화 데이터를
   추가할지는 범위 밖이며, 별도 결정 필요.
5. **중복 후보 4개 글**(`alpha-lipoic-acid`, `alpha-lipoic-acid-nerve`,
   `herpes-zoster-neuralgia`, `nerve-health-foods`)은 이전 작업에서
   "대표 URL이 아니며 목록에서 제외"로 처리됨. 이번 카테고리 개편에서도
   동일 원칙 유지 — 목록에는 미표시, 파일은 보존.

---

## 1. 목적

블로그 상위 카테고리를 아래 4개로 교체한다. `연구·근거`는 Science & Research
영역과 역할이 겹치므로 상위 카테고리로 만들지 않는다.

## 2. 최종 필터 (정확히 5개 버튼)

1. 전체 (all)
2. 뇌 건강·생활 (`brain-health-lifestyle`)
3. 신경계 증상·질환 (`neurological-symptoms-conditions`)
4. 통증·자율신경 (`pain-autonomic`)
5. 영양·대사 (`nutrition-metabolism`)

제거 대상: `뇌신경질환` / `통증` / `기능의학` (3개 필터 전부 교체).
`연구·근거` 필터는 0.2에서 확인했듯 애초에 존재하지 않으므로 제거 작업
불필요.

## 3~5. 카테고리 범위 / 연구 콘텐츠 처리 / 콘텐츠 유형 배지

원본 지시(사용자 제공) 그대로 확정. 아래 표만 참고.

| 카테고리 | 내부 값 |
|---|---|
| 뇌 건강·생활 | `brain-health-lifestyle` |
| 신경계 증상·질환 | `neurological-symptoms-conditions` |
| 통증·자율신경 | `pain-autonomic` |
| 영양·대사 | `nutrition-metabolism` |

| 배지 | 내부 값 |
|---|---|
| 연구 해설 | `research-explainer` |
| 가이드라인 | `guideline` |
| 메타분석 | `meta-analysis` |
| 근거 검토 | `evidence-review` |
| 최신 연구 | `recent-research` (게시일/검토일 병기 필수) |

카테고리(`primaryCategory`)와 배지(`contentTypeBadge`)는 **서로 다른 HTML
속성/필드**로 관리한다 (예: `data-category="..."` 는 유지하고 배지는
`data-badge="..."` 같은 별도 속성 + 별도 시각 요소로 구현). 현재 존재하는
`.blog-card-badge` 슬롯을 배지 용도로 전용하지 말 것 — 카테고리 표시 자리가
없어지기 때문. 구체적 마크업 설계(새 클래스명 등)는 구현 단계에서 결정한다.

## 6. Science & Research 관계

현재 `index.html` / `en/index.html`의 `#research` 섹션은 3개의
**플레이스홀더** 카드뿐이며 실제 논문·가이드라인 데이터나 블로그 글과의
연결이 하나도 없다. 따라서 이번 작업에서 "Science & Research 카드에서
블로그 URL로 연결"을 실제로 구현할 대상이 현재는 없다. 이 원칙은 **향후
Science & Research에 실제 카드가 추가될 때 지켜야 할 설계 원칙**으로
문서화만 하고, 이번 스코프에서 플레이스홀더 카드 자체를 수정하지는 않는다.

## 7. 데이터 마이그레이션 — 제안 매핑 (검토용 초안)

아래는 기존 28개(KR) / 28개(EN, 공식본) 글을 실제 제목·내용 기준으로
새 카테고리에 매핑한 **초안**이다. 확정된 정보구조(4개 카테고리명)는
변경하지 않되, 개별 글의 배정은 구현 착수 시 Claude Code가 본문을 다시
확인한 뒤 최종 확정한다 (아래는 그 검토를 빠르게 시작하기 위한 기준선).

### 신경계 증상·질환 (파킨슨병·치매·경도인지장애 등 질환 자체)

전 파킨슨병 시리즈(17개) + 치매 시리즈(3개) 전부 해당. 단, **통증 성격이
강한 파킨슨 글 1건은 통증·자율신경으로 이동 제안** (아래 표 참조).

| 슬러그(KR) | 슬러그(EN) | 기존 카테고리(KR/EN) | 제안 카테고리 |
|---|---|---|---|
| 파킨슨-초기증상 | parkinson-early-signs | brain/neuro | 신경계 증상·질환 |
| 파킨슨-원인-도파민 | parkinson-dopamine-neuroinflammation | brain/neuro | 신경계 증상·질환 |
| 파킨슨-약물치료 | parkinson-medication-management | brain/neuro | 신경계 증상·질환 |
| 파킨슨-운동치료 | parkinson-exercise-therapy | brain/neuro | 신경계 증상·질환 |
| 파킨슨-REM수면장애 | parkinson-rem-sleep-disorder | brain/neuro | 신경계 증상·질환 |
| 파킨슨-글루타치온 | parkinson-glutathione | brain/neuro | 신경계 증상·질환 |
| 파킨슨-보호자 | parkinson-caregiver-guide | brain/neuro | 신경계 증상·질환 |
| 파킨슨-이상운동증 | parkinson-dyskinesia | brain/neuro | 신경계 증상·질환 |
| 파킨슨-변비 | parkinson-constipation | brain/neuro | 신경계 증상·질환 |
| 파킨슨증-원인 | parkinsonism-differential-causes | brain/neuro | 신경계 증상·질환 |
| 파킨슨-유전 | parkinson-genetics | brain/neuro | 신경계 증상·질환 |
| 레보도파-오해 | levodopa-long-term-misconceptions | brain/neuro | 신경계 증상·질환 |
| 파킨슨-감별진단 | parkinson-plus-syndromes | brain/neuro | 신경계 증상·질환 |
| 파킨슨-약물용량 | parkinson-medication-dosage | brain/neuro | 신경계 증상·질환 |
| 치매-10년전-신호 | dementia-preclinical-stage | brain/neuro | 신경계 증상·질환 |
| 치매-위험-생활습관 | dementia-modifiable-risk-factors | brain/neuro | 신경계 증상·질환 (배지: 근거 검토 — 란셋 위원회 요인 정리) |
| 호모시스테인-치매-B비타민 | homocysteine-dementia-b-vitamins | brain/neuro | 신경계 증상·질환 (배지: 근거 검토 — VITACOG 임상시험 해설) |
| 파킨슨-통증 | parkinson-pain-management | brain(KR) / **pain(EN)** | **통증·자율신경** — KR/EN 불일치 존재, 통일 제안 |

### 통증·자율신경

| 슬러그(KR) | 슬러그(EN) | 기존 카테고리 | 제안 카테고리 |
|---|---|---|---|
| 말초신경병증 | peripheral-neuropathy | pain | 통증·자율신경 |
| 대상포진-신경통 | postherpetic-neuralgia | pain | 통증·자율신경 |
| 야간-신경-불편감 | nocturnal-nerve-discomfort | pain | 통증·자율신경 |
| 자율신경-무너졌을때 | autonomic-dysfunction-symptoms | functional | 통증·자율신경 (자율신경 증상 항목과 직접 일치) |

### 영양·대사

| 슬러그(KR) | 슬러그(EN) | 기존 카테고리 | 제안 카테고리 |
|---|---|---|---|
| rTG-오메가3-차이 | rtg-omega3-bioavailability | functional | 영양·대사 |
| 포스파티딜세린-기억력 | phosphatidylserine-memory | functional | 영양·대사 (성분 근거 중심 — "기억력"은 주제 키워드일 뿐 성분 리뷰 성격) |
| 비타민B12-신경 | vitamin-b12-methylcobalamin | functional | 영양·대사 |
| 알파리포산 | alpha-lipoic-acid-nerve(대표) | functional | 영양·대사 |
| 신경-건강-음식 | foods-nerve-health | functional | 영양·대사 |

### 뇌 건강·생활

| 슬러그(KR) | 슬러그(EN) | 기존 카테고리 | 제안 카테고리 |
|---|---|---|---|
| 브레인포그-신경과학 | brain-fog-neuroscience | functional | 뇌 건강·생활 (브레인포그는 이 카테고리 항목에 명시) |

**판단이 필요한 항목**: `파킨슨-통증`(KR)과 `phosphatidylserine-memory`
계열은 "신경계 증상·질환" 또는 "영양·대사"로도 볼 여지가 있어 초안에
근거를 병기했다. 승인 시 이 두 건에 대해서만 별도 확인 부탁드린다.
나머지는 사용자가 제시한 카테고리별 콘텐츠 범위 목록과 명확히 일치한다.

배지 부여 후보(모든 글에 강제 아님, 위 표에 표시한 2건 + 추가로 본문 검토
후 판단):
- `치매-위험-생활습관` → 근거 검토 (Lancet Commission 요인 정리)
- `호모시스테인-치매-B비타민` → 근거 검토 (VITACOG 임상시험 인용)
- 그 외 글은 현재 검토상 특별한 연구/가이드라인 성격이 두드러지지 않아
  배지 없음 제안 (구현 단계에서 본문 재확인 후 확정).

## 8. URL / SEO 영향

- 이번 개편은 **분류(카테고리) 값과 목록 페이지 마크업만** 바꾸는 작업이며,
  개별 글의 슬러그·URL·canonical을 변경할 이유가 없다. **URL 변경 계획 없음.**
- 카테고리 필터는 URL 쿼리 파라미터를 쓰지 않고 현재처럼 URL 해시
  (`#brain-health-lifestyle` 등) + JS `display:none` 토글 방식을 유지한다
  (이미 구현되어 있으며 검색엔진이 별도 URL로 색인하지 않는 방식). 새 카테고리
  적용 후에도 이 방식을 유지하면 "무분별한 색인 가능 URL 생성" 우려는
  발생하지 않는다.
- 개별 글에 구조화 데이터가 없으므로(0.4-4 참조) articleSection 충돌 문제도
  현재는 발생하지 않는다.
- 영어 사이트(`en/blog/index.html`)는 한국어와 별도 파일이며, 이번 승인
  범위에 **함께 포함할지 여부를 사용자가 결정**해야 한다 (지시서 10번 요구:
  "영어 사이트를 임의로 동시에 변경하지 말고 먼저 보고"). 아래 9번에서
  질문으로 남긴다.

## 9. 승인 필요 사항 (구현 착수 전 확인)

1. 위 마이그레이션 초안(7번) 전체를 승인하는가, 아니면 표시한 2건
   (`파킨슨-통증`, `phosphatidylserine-memory` 계열)을 포함해 전체를
   다시 논의할 것인가?
2. **영어(`en/blog/index.html`) 카테고리도 이번 작업에서 한국어와 동시에
   4개 체계로 변경할 것인가?** 아니면 한국어만 먼저 적용하고 영어는 별도
   승인을 받을 것인가?
3. 개별 글 페이지 내부에 표시된 자체 카테고리 라벨(`.article-tag` /
   `.hero-category`, 0.4-1 참조)도 목록 페이지와 일치하도록 56개 파일에서
   함께 갱신할 것인가? (본문·title·canonical은 그대로 두고 카테고리 라벨
   텍스트 한 줄만 교체하는 범위로 한정 가능 — 이전 작업에서 저자 서명
   블록만 일괄 교체한 것과 동일한 방식)
4. 콘텐츠 유형 배지는 이번 단계에서 위에 제안한 2건에만 시범 적용하는가,
   아니면 사용자가 본문을 직접 검토해 배지 대상 글 목록을 확정해서
   전달할 것인가?

## 10. 구현 절차 (승인 후)

1. `blog/index.html`, `en/blog/index.html`의 CSS에 새 카테고리 4개 필터
   버튼 + (필요시) 배지용 신규 클래스 추가. 기존 `.filter-bar`,
   `.filter-btn`, `.blog-card` 구조·디자인 토큰은 재사용.
2. 각 카드의 `data-category` 값을 7번 매핑에 따라 교체하고, `.blog-card-badge`
   내용을 새 카테고리 한글/영문 라벨로 교체. 배지 대상 글에는 별도
   배지 요소 추가 (제목보다 낮은 시각 우선순위, 텍스트 라벨 필수, 최신
   연구 배지는 날짜 병기).
3. 필터 JS의 `validFilters` 배열과 해시 매핑을 새 4개 값으로 교체.
4. 빈 카테고리 발생 시 표시할 안내 문구는 기존 `.empty-state`
   ("해당 카테고리의 글이 아직 없습니다") 재사용 가능한지 확인.
5. (3번 승인 시) 56개 개별 글의 카테고리 라벨 한 줄만 교체하는 스크립트
   작성 — 이전 저자 서명 블록 수정과 동일한 "find & replace, 본문 무변경"
   방식.
6. 모바일 필터 가로 스크롤/줄바꿈, 키보드 포커스 이동, `aria-pressed`
   또는 유사 상태 속성 추가.

## 11. 테스트 계획 (승인 후 구현 시 수행)

이 저장소에는 build/lint 도구가 없으므로(0.1 참조), "build/lint 통과"는
다음으로 대체 확인한다:
- 로컬 정적 서버로 두 목록 페이지 직접 렌더링 확인
- 필터 5개(전체 포함) 클릭/키보드 선택 시 카드 필터링 정상 동작
- 카테고리별 카드 수 합산이 28(KR)/28(EN)과 일치하는지 확인
- 데스크톱/375px/320px 스크린샷
- 콘솔 오류 없음
- 모든 카드 링크 HTTP 200 (기존 URL 변경 없으므로 회귀 위주 확인)
- Academy/Science & Research 링크 정상
- (56개 라벨 교체 시) diff가 카테고리 라벨 한 줄만 변경했는지 파일별 확인

## 12. 완료 기준

사용자 원본 지시서 12번 항목 그대로 적용.

---

## 진행 방식 요약 (Claude Code 실행 순서)

1. CLAUDE.md 및 이 문서를 읽는다.
2. 0번 섹션의 사실이 현재도 유효한지 재확인한다.
3. 9번 "승인 필요 사항" 4개 질문에 대한 답을 사용자에게 확인한다.
4. 승인 전에는 어떤 파일도 수정하지 않는다.
5. 승인 후 10번 절차대로 구현한다.
6. 11번 테스트를 수행하고 결과를 보고한다.
7. 변경 파일 목록, 마이그레이션 최종 매핑, 테스트 결과를 최종 보고한다.
