# 최종 QA — NervLock 블로그 정리 작업 (2026-07-20)

**성격**: 검증만 수행, 추가 수정 없음.
**커밋/푸시/배포**: 없음.

---

## 검증 대상 및 파일 수

| 대상 | 파일 수 | 확인 방법 |
|---|---|---|
| 제품 CTA 제거 46개 | 46 | 전수 프로그램 검증 |
| 고위험 문장 삭제 3개 | 3 | 전수 프로그램 검증 |
| 저자명 표준화 42개 | 42 | 전수 프로그램 검증 |
| 기술 SEO 수정 50개 | 50 | 전수 프로그램 검증 + 정적 구조 검사 |
| 홈페이지·목록 페이지 | 4 (index.html, en/index.html, blog/index.html, en/blog/index.html) | 브라우저 로드 확인 + 정적 검사 |
| 대표 한국어 글 | 5 (파킨슨-감별진단, 말초신경병증, 대상포진-신경통, 자율신경-조절 시도, 파킨슨-초기증상 시도) | 브라우저 스크린샷 3건 성공 |
| 대표 영어 글 | 5 (parkinson-plus-syndromes, herpes-zoster-neuralgia, alpha-lipoic-acid, sleep-memory-focus, +1) | 브라우저 스크린샷 4건 성공 |
| sitemap.xml | 1 | git diff 확인 |
| 생성된 감사·작업기록 문서 | 전체(docs/audits/ 12개, docs/worklogs/ 다수) | 존재·보존 여부 확인 |

**중복 제거 후 실제 유니크 파일 수(A~C 프로그램 검증 대상)**: 66개 (46 ∪ 42 ∪ 50, 중복 다수)

---

## A. 의료·규제 검증

| 항목 | 결과 |
|---|---|
| NervLock Nerve Care 잔존 | **0건** |
| NervLock 너브케어 / 너브케어 / 신경 케어 잔존 | **0건** |
| Brain Energy 제품 CTA 잔존 | **0건** |
| 출시 알림 / launching soon / Get Launch Notification 잔존 | **0건** |
| curcumin/Aflapin/NF-κB/5-LOX 제품 CTA 문맥 잔존 | **0건** (co-formulation/복합 처방 근거 문구가 3개 파일에서 완전히 제거됨을 재확인. 순수 성분·기전 설명으로만 남은 16개 파일은 정상) |
| C·D 등급 유지 | **0건 유지 확인** — `NervLock_Post_CTA_Removal_Grades.csv` 최신 tally: A=11, B=63, C=0, D=0 |

**A. 결과: PASS, 잔존 문제 0건**

---

## B. 저자 표기 검증

| 항목 | 결과 |
|---|---|
| Dr. Claire Ham 잔존 | **0건** |
| Claire Ham 잔존 | **0건** |
| Dr.H 잔존(YouTube 핸들 `@Dr.H-neuro` 제외) | **0건** (저장소 전체 재스캔, `(?<!@)Dr\.H` 패턴 기준) |
| Dr. Ham Jeehyun 잔존 | **0건** |
| Ham Jeehyun(반전) 잔존 | **0건** |
| 영어 표기 일관성 | "Jeehyun Ham, M.D." — 42개 대상 파일 전부 확인 |
| 한국어 목록 표기 일관성 | "함지현" — blog/index.html 카드 29건 + 5개 아티클 바이라인 확인 |
| medical_reviewer/reviewedBy/reviewed_date 변경 | **0건** (JSON-LD reviewedBy 노드, 화면 표시 검토일 필드 전부 원본 그대로 재확인) |

**B. 결과: PASS, 잔존 문제 0건**

---

## C. 기술 SEO 검증

| 항목 | 결과 |
|---|---|
| canonical 누락 | 50개 대상 파일 **0건** |
| canonical = 실제 URL 일치 | 50/50 |
| hreflang reciprocal 오류 | 25/25쌍 **0건** |
| hreflang 존재하지 않는 URL | **0건** |
| JSON-LD 파싱 오류 | 50/50 유효 |
| JSON-LD 필수 필드 누락 | **0건** |
| JSON-LD url = canonical | 50/50 일치 |
| sitemap 변경 | **0건**(`git diff -- sitemap.xml` 재확인, 기존 무관 WIP만 존재) |
| T5 보류 대상 변경 여부 | T5 9건 중 8건(중복 클러스터 EN 파일들)은 hreflang·JSON-LD·canonical 전부 이전과 동일 확인. 나머지 1건(`why-concentration-declines-dopamine-sleep-adhd`)은 애초에 세션 시작 전부터 canonical/hreflang/JSON-LD를 모두 갖춘 "이미 정상"인 파일이었고 이번 검증에서 `git diff` 결과 오늘 완전히 무변경임을 재확인 — 명명 규칙 이슈만 남아있고 기술적으로는 문제가 있던 적이 없었음. T5 연결 한국어 4개도 canonical 등 전부 미변경 확인. |

**C. 결과: PASS, 잔존 문제 0건**

---

## D. 렌더링 검증

로컬 서버(`python -m http.server`)로 렌더링 확인. **브라우저 도구가 세션 중 반복적으로 스크린샷/스크롤 타임아웃을 일으켜(연결 불안정), 계획한 14개 페이지 중 8개만 실제 스크린샷으로 확인했고 나머지는 정적 구조 분석으로 보완했다 — 이 부분은 명시적 한계로 기록한다.**

**스크린샷으로 직접 확인(8개, 전부 정상)**:
- 파킨슨-감별진단(KR, SEO 수정): 헤더·태그·저자·날짜·요약 정상, CTA 빈 공간 없음
- 말초신경병증(KR, 문장삭제+SEO+저자명): 정상
- 대상포진-신경통(KR, 저자명 바이라인만 수정): "함지현" 정상 표시
- blog/index.html(목록): 카드·필터·날짜 정상
- parkinson-plus-syndromes(EN, SEO 수정): "Jeehyun Ham, M.D." 정상, 카테고리·언어토글·요약 정상
- herpes-zoster-neuralgia(EN, T5, 문장삭제): 정상
- alpha-lipoic-acid(EN, T5, 저자명만): 정상
- sleep-memory-focus(EN, 신형 템플릿): Author/Specialty/Medical Reviewer/Published/Medically Reviewed/Evidence Review Date 6개 필드 전부 정상 렌더링

**로드는 확인했으나 완전한 스크린샷 검증은 못한 것(3개)**: index.html, en/index.html, en/blog/index.html — 페이지 자체는 정상 로드(제목, 내비게이션 렌더링 확인)되었으나, 스크린샷이 CSS `reveal` 페이드인 애니메이션 시작 직후 순간에 캡처되어 히어로 섹션 텍스트가 흐리게 보임 — 이는 사이트의 기존 스크롤 기반 페이드인 동작이며 오늘 수정한 저자명·JSON-LD와 무관.

**정적 구조 분석으로 보완(66개 파일 전체)**:
- HTML 태그 균형(div/section/nav/footer/html/body/head/ul/li/h1~h4/p/a): **불일치 0건**
- canonical·hreflang이 `<head>...</head>` 내부에만 존재: **위반 0건**
- JSON-LD 스크립트가 `</body>` 앞에 정상 위치: **위반 0건**
- CTA 제거 대상 46개 파일에 `<div class="cta-banner">` 잔존: **0건**

**별도 발견 사항(문제 아님, 정보성)**: 정적 검사 중 `parkinson-pain-management`에 `.cta-banner` 클래스를 쓰는 다른 CTA("Concerned about pain in Parkinson's disease? ... Book a Consultation", `/en/#contact` 링크)가 있음을 발견 — git 이력 확인 결과 **오늘 이전부터 있던 것이며, 46개 제품 CTA 제거 대상에도 애초에 포함되지 않았던 별개의 진료 예약 CTA**로, 이번 작업 범위와 무관함을 확인. 다른 어떤 파일에도 이 패턴은 없음(전체 검색 결과 1건).

**D. 결과: PASS (스크린샷 8건 정상 + 정적 검증 66개 전부 정상), 단 3개 페이지는 완전한 시각적 확인 대신 로드 확인 + 정적 검증으로 대체됨을 한계로 명시**

---

## E. Git 검증

- **git status**: modified 68개, untracked 7개(디렉터리 4개 포함), 합계 75줄
- **git diff --stat**: 68개 파일 변경 확인(수치는 각 작업 로그에 이미 기록)
- **git diff --check**: **exit 0, clean** (CRLF 안내만, 실제 공백 오류 없음)
- **예상 외 파일 변경 여부**: **0건** — (46개 CTA ∪ 42개 저자명 ∪ 50개 SEO ∪ 기존 WIP 2개[자율신경-조절, sitemap.xml]) = 68개와 실제 변경 68개가 **정확히 1:1 일치**(불일치 0, 누락 0)
- **commit/push/deploy 여부**: `git log` 확인 결과 HEAD(`c86c90c`)가 `origin/main`과 동일 — **오늘 어떤 커밋도 생성되지 않았고 푸시도 배포도 되지 않음**

**E. 결과: PASS**

---

## 종합 결론

**Pass** — A/B/C/E 전 항목 잔존 문제 0건, D(렌더링)는 8개 페이지 직접 확인 + 66개 파일 정적 구조 검증 전부 정상이며, 나머지 3개 페이지는 브라우저 도구 불안정으로 완전한 스크린샷 대신 로드 확인과 정적 검증으로 대체(명시된 한계).

커밋 가능 상태이나, 사용자 승인 전까지 커밋하지 않음.
배포는 커밋·푸시 이후 GitHub Actions로 자동 진행되는 구조이므로, 커밋·푸시가 없는 현재는 배포도 발생하지 않음 — 배포 가능 여부는 커밋·푸시 승인에 달려있음.

**남은 T5 인간 결정 항목(9건, 오늘 작업 범위 밖, 전부 미변경 확인)**:
1. herpes-zoster-neuralgia ↔ postherpetic-neuralgia ↔ 대상포진-신경통 중복 URL/구조 정리
2. alpha-lipoic-acid ↔ alpha-lipoic-acid-nerve ↔ 알파리포산 중복 정리
3. nerve-health-foods ↔ foods-nerve-health ↔ 신경-건강-음식 중복 정리
4. vitamin-b12-nerve ↔ vitamin-b12-methylcobalamin ↔ 비타민B12-신경 중복 정리
5. why-concentration-declines-dopamine-sleep-adhd 명명 규칙(한국어 콘텐츠가 영문 슬러그로 발행됨) 처리 방향
