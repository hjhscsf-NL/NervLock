# 기술 SEO 수정 작업 로그 — 2026-07-20

**범위**: `NervLock_Technical_SEO_Audit.md`/`NervLock_Technical_SEO_Inventory.csv`에서 T5(인간 결정 필요, 9건)로 분류된 항목과 그 직접 연결 한국어 대응 파일을 제외한, "즉시 수정 가능" T1~T4 항목만 실행.
**커밋/푸시/배포**: 하지 않음. 작업 트리에만 반영.

---

## 1. 수정 파일 목록 (25쌍, 50개 파일)

| # | 한국어 | 영어 |
|---|---|---|
| 1 | rTG-오메가3-차이 | rtg-omega3-bioavailability |
| 2 | 레보도파-오해 | levodopa-long-term-misconceptions |
| 3 | 말초신경병증 | peripheral-neuropathy |
| 4 | 브레인포그-신경과학 | brain-fog-neuroscience |
| 5 | 야간-신경-불편감 | nocturnal-nerve-discomfort |
| 6 | 자율신경-무너졌을때 | autonomic-dysfunction-symptoms |
| 7 | 치매-10년전-신호 | dementia-preclinical-stage |
| 8 | 치매-위험-생활습관 | dementia-modifiable-risk-factors |
| 9 | 파킨슨-REM수면장애 | parkinson-rem-sleep-disorder |
| 10 | 파킨슨-감별진단 | parkinson-plus-syndromes |
| 11 | 파킨슨-글루타치온 | parkinson-glutathione |
| 12 | 파킨슨-변비 | parkinson-constipation |
| 13 | 파킨슨-보호자 | parkinson-caregiver-guide |
| 14 | 파킨슨-약물용량 | parkinson-medication-dosage |
| 15 | 파킨슨-약물치료 | parkinson-medication-management |
| 16 | 파킨슨-운동치료 | parkinson-exercise-therapy |
| 17 | 파킨슨-원인-도파민 | parkinson-dopamine-neuroinflammation |
| 18 | 파킨슨-유전 | parkinson-genetics |
| 19 | 파킨슨-이상운동증 | parkinson-dyskinesia |
| 20 | 파킨슨-초기증상 | parkinson-early-signs |
| 21 | 파킨슨-통증 | parkinson-pain-management |
| 22 | 파킨슨증-원인 | parkinsonism-differential-causes |
| 23 | 포스파티딜세린-기억력 | phosphatidylserine-memory |
| 24 | 호모시스테인-치매-B비타민 | homocysteine-dementia-b-vitamins |
| 25 | 수면-기억력-집중력 | sleep-memory-focus |

**중요**: 감사 시점에는 "즉시 수정 가능 약 65개"로 추산되었으나, Inventory와 실제 파일을 파일명·URL 기준으로 재대조한 결과 **실제 KR/EN 페어를 확정할 수 있었던 것은 25쌍(50개 파일)**이었습니다. 나머지는 T5(9건) 또는 그 직접 연결 한국어 대응 파일(4건: 대상포진-신경통·비타민B12-신경·신경-건강-음식·알파리포산)로 확인되어 이번 작업에서 전부 제외했습니다.

### 페어링 정밀 검증 (제목만으로 판단하지 않음)

파킨슨-감별진단 / 파킨슨증-원인 두 건은 제목상 유사해 슬러그만으로 잘못 매칭될 위험이 있어 **meta description을 직접 대조**하여 정정했습니다:
- `파킨슨-감별진단`("MSA, PSP, 루이소체 치매, CBS — 4가지 질환") ↔ `parkinson-plus-syndromes`("MSA, PSP, Lewy body dementia, corticobasal syndrome") — 동일한 4개 질환, 정확히 일치.
- `파킨슨증-원인`("약물, 혈관, 정상압 수두증, 파킨슨 플러스 — 4가지 원인") ↔ `parkinsonism-differential-causes`("Drug-induced, vascular, NPH, atypical Parkinson-plus") — 동일한 4개 원인, 정확히 일치.

나머지 23쌍은 제목·meta description이 명확히 대응되어 그대로 확정했습니다.

---

## 2. Canonical

- **추가 24건** (모두 한국어 파일 — 영어 파일 25개는 이미 자기 참조 canonical 보유)
- `수면-기억력-집중력`은 이미 canonical이 있어 건드리지 않음(스킵)
- 형식: `https://nervlocklab.com/blog/<slug>/`, HTTPS, trailing slash 기존 사이트 관례 그대로, 한글 URL은 다른 최근 KR 아티클과 동일하게 인코딩 없이 실제 유니코드 경로 사용(기존 사이트가 sitemap.xml에서만 percent-encoding하고 HTML `<link>` 태그 자체는 raw 유니코드를 쓰는 기존 관례를 그대로 따름 — sitemap은 이번 작업 대상이 아니므로 미변경)
- 삽입 위치: `<title>` 태그 직후, `<meta name="description">` 직전(기존 사이트에 이미 canonical이 있는 파일들의 위치와 동일)

## 3. Hreflang

- **50개 파일 전체에 추가**(25쌍 × 2 태그 = 100개 태그), 25쌍 전부 상호 참조(reciprocal) 확인
- 한국어 파일: `hreflang="ko"`(자기 참조) + `hreflang="en"`(대응 영어)
- 영어 파일: `hreflang="ko"`(대응 한국어) + `hreflang="en"`(자기 참조)
- `x-default` 추가하지 않음(지시대로)
- `en-US` 아닌 `en` 사용(지시대로)
- T5(9건) 및 연결된 한국어 4건에는 추가하지 않음(가짜 hreflang 생성 금지 원칙 준수)

## 4. JSON-LD

- **50개 파일 전체에 신규 추가**(기존 JSON-LD 없던 파일들, 15개 "정상 템플릿"과 동일한 필드 구조 사용)
- 포함 필드: `@context`, `@type: Article`, `headline`(제목에서 " | NervLock" 접미사 제거), `description`(기존 meta description 그대로), `mainEntityOfPage`, `url`, `datePublished`/`dateModified`(페이지에 실제 표시된 게시일 그대로 파싱 — 별도 수정일 표기가 없어 게시일과 동일값 사용, 임의 생성 아님), `inLanguage`(ko-KR/en-US), `articleSection`(페이지의 실제 카테고리 태그 텍스트, `&amp;`→`&` 디코딩), `author`(name: Jeehyun Ham, jobTitle: Neurologist — 정상 템플릿과 동일, M.D. 접미사 필드 없음), `publisher`
- **제외한 필드**: `reviewedBy`(지시대로 추가하지 않음), `image`(실제 이미지 없어 생성하지 않음), `BreadcrumbList`(50개 파일 전부 화면상 breadcrumb 컴포넌트 자체가 없음을 확인 — "기존 구성 요소가 있는 경우에만" 원칙에 따라 추가하지 않음)
- **발견 및 수정한 이슈**: 5개 영어 파일(parkinson-caregiver-guide, parkinson-constipation, parkinson-dyskinesia, parkinson-glutathione, parkinson-rem-sleep-disorder)은 카테고리가 `.article-tag`가 아닌 `.hero-category`라는 다른 마크업 패턴을 사용하고 있어 최초 스크립트가 이를 놓쳐 `articleSection`이 빈 값으로 삽입됨 — 발견 즉시 실제 페이지의 `hero-category` 값("Neurological Symptoms & Conditions")으로 정정 완료.

## 5. Sitemap

**수정하지 않음.** 지시대로 그대로 두었으며, `git diff -- sitemap.xml` 결과 이번 작업으로 인한 변경 0건(기존에 있던 무관 WIP 항목만 그대로).

## 6. 백업

- 작업 전 `docs/worklogs/2026-07-20-current-working-tree-snapshot.md`로 작업 트리 상태 확인 완료
- 실행 전 대상 파일 목록(25쌍)을 스크립트 내 명시적으로 고정하여 실행
- 1개 쌍(파킨슨-감별진단/parkinson-plus-syndromes)에 대해 별도 샌드박스 디렉터리에서 dry-run 실행 후 결과 검증(JSON 파싱, 인코딩, 필드 값) — 문제 2건(EN 날짜 미검출, 카테고리 `&amp;` 미디코딩) 발견 및 스크립트 수정 후 실제 파일에 적용
- 기존 WIP(자율신경-조절, sitemap.xml, T5 관련 파일)는 전혀 건드리지 않음

---

## 7. 검증 결과

| 항목 | 결과 |
|---|---|
| 수정 파일 수 | 50/50 (25쌍 전부 변경 확인, 누락 0) |
| T5 9건 + 연결 KR 4건 제외 확인 | 13개 파일 전부 canonical/hreflang/JSON-LD 변경 없음 확인 |
| canonical 누락 재검사 | 0건 (50개 전부 보유) |
| canonical URL = 실제 URL | 50/50 일치 |
| hreflang reciprocal 검사 | 25/25 쌍 전부 상호 참조 확인 |
| hreflang 자기 참조 검사 | 50/50 정상 |
| 존재하지 않는 hreflang URL | 0건 |
| JSON-LD 전체 JSON 파싱 | 50/50 유효 |
| 필수 필드 누락 검사 | 0건 (headline/description/mainEntityOfPage/url/datePublished/dateModified/inLanguage/articleSection/author/publisher 전부 존재) |
| JSON-LD url = canonical | 50/50 일치 |
| 기존 저자 표기 유지 확인 | 변경 없음(스팟체크로 "Jeehyun Ham, M.D." 화면 표기 그대로 확인) |
| medical_reviewer/reviewedBy/reviewed_date 변경 | 0건 |
| sitemap.xml 변경 | 0건 |
| git diff --check | clean (exit 0, CRLF 안내만) |
| 예상 외 파일 변경 | 0건 (numstat 전수 교차검증: seo50 대상 50개 전부 변경 확인 / 나머지 변경 파일 18개는 전부 기존 무관 WIP로 확인) |

## 8. 미해결 문제

- T5 9건(중복 URL 클러스터 4개 + 명명 규칙 이상 1건) 및 연결된 한국어 4건은 이번 작업 범위 밖으로 그대로 남아있음 — 별도 인간 결정 필요.
- `datePublished`/`dateModified`를 동일 값으로 처리한 것은 이 사이트에 별도 "수정일" 표기 관례가 아직 없기 때문 — 향후 실제 수정이 발생하면 `dateModified`만 갱신하는 프로세스가 필요.

## 9. 롤백 방법

아직 커밋 전. `git checkout -- <경로>`로 50개 파일을 개별 또는 일괄 지정해 즉시 원복 가능. 단, 25쌍 중 일부(예: 말초신경병증, 브레인포그-신경과학 등 15개)는 오늘 이전 저자명 작업 또는 CTA 제거 작업의 diff도 함께 포함하고 있어, 파일 단위 롤백 시 이번 SEO 작업 외의 이전 변경도 함께 되돌아감에 유의.
