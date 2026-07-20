# NervLock 저자·의료 검수 정보 표준화 사전 감사 보고서

**작성일**: 2026-07-20
**성격**: 조사·보고만 수행. 이 감사 과정에서 콘텐츠 파일은 전혀 수정하지 않았다.
**승인된 표준**: 이름 **"Jeehyun Ham, M.D."** + 직함 **"Board-Certified Neurologist"**
**조사 범위**: 블로그 아티클 74개(한국어 35 + 영어 39) + 블로그 목록 페이지 2개(`blog/index.html`, `en/blog/index.html`) + 랜딩페이지 의료진 소개 영역 2개(`index.html`, `en/index.html`) = **총 78개 항목**

---

## 1. 전체 표기 유형별 개수 (74개 아티클 기준, 문자열 등장 페이지 수)

| 표기 | 등장 페이지 수 |
|---|---|
| "Jeehyun Ham, M.D." (표준, 신용 표기 포함) | 74/74 (article-meta 또는 sig-block 중 최소 한 곳) |
| "Dr. Claire Ham" | 38 |
| "Claire Ham" (단독, 서브타이틀 포함) | 38 |
| "Jeehyun Ham" (신용 없는 단독 표기, 주로 JSON-LD) | 12 |
| "함지현" (한국어 서브타이틀, 문제 아님 — 아래 §3 참고) | 29 |
| "Ham Jeehyun" / "Dr. Ham Jeehyun" (영문명 순서 반전) | 아티클 본문 0건, **단 목록 페이지·랜딩페이지에서 다수 발견 — §4 참고** |
| "Dr. H" (단독, 완전 노출) | 0 (아티클 본문 — 목록 페이지 `blog/index.html`에서 "Dr.H" 29건 발견, §4 참고) |
| "Board-Certified Neurologist" | **아티클 0/74**, 랜딩페이지 2/2(이미 존재 — §5 참고) |

핵심 요약: 74개 아티클 중 **36개는 이미 이름이 완전히 표준과 일치**하고, **38개는 최소 한 곳 이상 "Dr. Claire Ham" 계열 구식 표기가 남아 있음**. 다만 74개 전부 직함은 새 표준 "Board-Certified Neurologist"를 아직 채택하지 않았다(기존에는 "Neurologist", "Neurologist, NervLock Founder", "신경과 전문의" 등을 사용).

---

## 2. Dr. Claire Ham 사용 페이지 (38개, 전체 목록)

**영어 33개**: alpha-lipoic-acid-nerve, alpha-lipoic-acid, autonomic-dysfunction-symptoms, brain-fog-neuroscience, dementia-modifiable-risk-factors, dementia-preclinical-stage, foods-nerve-health, herpes-zoster-neuralgia, homocysteine-dementia-b-vitamins, levodopa-long-term-misconceptions, nerve-health-foods, nocturnal-nerve-discomfort, parkinson-caregiver-guide, parkinson-constipation, parkinson-dopamine-neuroinflammation, parkinson-dyskinesia, parkinson-early-signs, parkinson-exercise-therapy, parkinson-genetics, parkinson-glutathione, parkinson-medication-dosage, parkinson-medication-management, parkinson-pain-management, parkinson-plus-syndromes, parkinson-rem-sleep-disorder, parkinsonism-differential-causes, peripheral-neuropathy, phosphatidylserine-memory, postherpetic-neuralgia, rtg-omega3-bioavailability, sleep-memory-focus, vitamin-b12-methylcobalamin, vitamin-b12-nerve

**한국어 5개 (⚠️ 신규 발견 — 이전 "Dr.H→Jeehyun Ham, M.D." 일괄 치환 작업 때 누락됨)**: 대상포진-신경통, 비타민B12-신경, 신경-건강-음식, 알파리포산, 야간-신경-불편감

이 5개 한국어 파일은 "Dr.H"라는 문자열 자체가 없었기 때문에(대신 처음부터 영문 "Dr. Claire Ham"을 한국어 아티클의 저자 표기로 사용) 이전 작업의 검색 대상에서 빠졌던 것으로 보인다. 예: `blog/대상포진-신경통/index.html` 97번째 줄 — `<strong>Dr. Claire Ham</strong> — 신경과 전문의 · NervLock 설립자` (한국어 아티클인데 저자명만 영문 "Dr. Claire Ham"으로 표기됨).

---

## 3. Jeehyun Ham, M.D. 사용 페이지 및 한국어 표기 현황

**이미 완전히 표준(article-meta/author-card/sig-block 전부 일치) — 36개**: brain-fog-causes, brain-nutrition, memory-loss-and-dementia, palpitations-dizziness-digestive-symptoms-autonomic-nervous-system, rTG-오메가3-차이, what-does-the-autonomic-nervous-system-control, why-cant-i-focus, why-concentration-declines-dopamine-sleep-adhd, 기억력-치매-차이, 뇌-영양, 두근거림-어지럼-소화불편-자율신경, 레보도파-오해, 말초신경병증, 브레인포그-신경과학, 브레인포그-원인, 수면-기억력-집중력, 자율신경-무너졌을때, 자율신경-조절, 치매-10년전-신호, 치매-위험-생활습관, 파킨슨-REM수면장애, 파킨슨-감별진단, 파킨슨-글루타치온, 파킨슨-변비, 파킨슨-보호자, 파킨슨-약물용량, 파킨슨-약물치료, 파킨슨-운동치료, 파킨슨-원인-도파민, 파킨슨-유전, 파킨슨-이상운동증, 파킨슨-초기증상, 파킨슨-통증, 파킨슨증-원인, 포스파티딜세린-기억력, 호모시스테인-치매-B비타민

**한국어 표기 현황**: 한국어 35개 아티클 중 30개는 이름이 이미 표준("Jeehyun Ham, M.D.")과 일치하고, "함지현"은 그 아래 한국어 서브타이틀("함지현 원장, 신경과 전문의")로만 사용되어 **문제가 아니다** — 이는 영문 표준명 뒤에 붙는 한국어 부제 역할이며, 저자명 자체를 대체하는 것이 아니다(EN 아티클에서 "Neurologist"가 서브타이틀로 붙는 것과 동일 패턴). 다만 위 §2에서 발견한 5개 한국어 파일만 저자명 자체가 영문 "Dr. Claire Ham"으로 잘못 표기되어 있다.

---

## 4. ⚠️ 신규 발견 — 영문명 순서 반전("Dr. Ham Jeehyun, M.D.") 및 "Dr.H" 잔존: 목록·랜딩페이지

이 문제는 개별 아티클 74개에는 없고, **목록 페이지와 랜딩페이지에서만** 발견되었다:

| 파일 | 문제 |
|---|---|
| `blog/index.html` (한국어 목록) | 블로그 카드 29개가 여전히 **"Dr.H"** 단독 표기(6개만 "Jeehyun Ham, M.D."). 이전 Dr.H 일괄 치환 작업 당시 "목록 페이지는 아티클이 아니므로 범위 밖"으로 명시적으로 제외되었던 부분 — 그대로 남아 있음. |
| `en/blog/index.html` (영어 목록) | 블로그 카드 29개가 **"Dr. Ham Jeehyun, M.D."**(성-이름 순서 반전) 표기(6개만 "Jeehyun Ham, M.D."). |
| `index.html` (한국어 랜딩, founder-card) | `founder-en-name`이 **"Dr. Ham Jeehyun, M.D."**(순서 반전). JSON-LD에는 `"name": "Ham Jeehyun"`(신용 없는 반전 표기)까지 존재. |
| `en/index.html` (영어 랜딩, founder-card) | `founder-name`이 **"Dr. Ham Jeehyun, M.D."**(순서 반전). JSON-LD도 동일하게 `"name": "Ham Jeehyun"`. |

**이 발견의 중요성**: 두 랜딩페이지의 "의료진 소개" 영역(`founder-card`)이 사이트 전체의 정본(source of truth) 역할을 하는 것으로 보이는데, **바로 이 정본 자체가 이름 순서 오류("Dr. Ham Jeehyun, M.D.")를 갖고 있다.** `en/blog/index.html`의 목록 카드 29개가 정확히 이 동일한 오표기를 쓰고 있다는 점에서, 이 오류가 랜딩페이지에서 목록 페이지로 전파되었을 가능성이 높다. 즉 **개별 아티클 38개의 "Dr. Claire Ham" 문제와, 목록·랜딩의 "Dr. Ham Jeehyun" 문제는 서로 다른 오표기 계열이며 별도로 통일 방향을 정해야 한다.**

---

## 5. "Board-Certified Neurologist" 직함 현황

- **개별 블로그 아티클 74개**: 전부 이 직함을 쓰지 않는다. 대신 "Neurologist"(단독), "Neurologist, NervLock Founder", "신경과 전문의", "신경과 전문의 · NervLock 설립자" 등 다양한 변형을 사용 중.
- **랜딩페이지 2개**: 이미 `founder-role`/`founder-en-role`에 "Board-Certified Neurologist"가 정확히 존재한다(`index.html`, `en/index.html` 둘 다). 즉 이 직함은 완전히 새로 만드는 것이 아니라 **이미 존재하는 랜딩페이지의 정본을 개별 아티클로 전파하는 작업**이 된다.
- JSON-LD의 `jobTitle` 필드(아티클에 구조화 데이터가 있는 14개 페이지)는 현재 전부 `"Neurologist"`로 되어 있어, 이 역시 "Board-Certified Neurologist"로 바꿀지 결정이 필요하다(구조화 데이터 스펙상 `jobTitle`은 짧은 직함이 관례이므로 그대로 "Neurologist"를 유지하고 화면 표시 텍스트만 바꾸는 방안도 고려 가능 — §9 권장 표준 데이터 모델 참고).

---

## 6. 의료 검수자 표기 누락 페이지

**74개 중 60개**가 `medical_reviewer`/`검토일` 관련 필드 자체가 없다(구형 템플릿 — article-meta 3줄만 존재: 저자·게시일·읽기시간).

**74개 중 14개**만 의료 검수자 필드가 존재하며, 아래 §7의 사유로 전부 "검토 이력 확인 필요"로 분류했다: brain-fog-causes, brain-nutrition, memory-loss-and-dementia, palpitations-dizziness-digestive-symptoms-autonomic-nervous-system, sleep-memory-focus, what-does-the-autonomic-nervous-system-control, why-cant-i-focus, why-concentration-declines-dopamine-sleep-adhd, 기억력-치매-차이, 뇌-영양, 두근거림-어지럼-소화불편-자율신경, 브레인포그-원인, 수면-기억력-집중력, 자율신경-조절

## 7. reviewed_date 누락 페이지 및 "실제 검수 이력 확인이 필요한 페이지"

**60개**는 검토일(`검토일`/`Medically Reviewed`) 필드 자체가 없다(위 §6과 동일한 60개 — 구형 템플릿).

**14개**는 검토일이 존재하지만, 전수 확인 결과 다음 3가지가 예외 없이 동시에 성립한다:
1. `medical_reviewer`(또는 JSON-LD `reviewedBy`)가 **저자 본인과 완전히 동일한 이름**("Jeehyun Ham, M.D." 셀프 리뷰)
2. `게시일`과 `검토일`(및 `근거 검토일`)이 **날짜까지 완전히 동일**
3. 페이지 어디에도 실제 제3자 검수가 있었다는 별도 근거(검수 기관명, 검수 일자가 게시일과 다른 시점, 검수자 서명 등)가 없음

즉 이 14개 페이지의 "의학 검토 완료" 표시는 **저자가 스스로 작성과 동시에 자기 검수 처리한 것으로 보이며, 실제 독립적인 의료 검수 이력이 있었는지 확인이 필요하다.** 이 14개가 "실제 검수 이력 확인이 필요한 페이지" 전체 목록이다(§6 목록과 동일).

**중요**: 이 감사에서는 위 14개 페이지에 대해 `medical_reviewer`나 `reviewed_date`를 임의로 추가하거나 삭제하지 않았다 — 지시에 따라 조사·보고만 수행했다.

---

## 8. 저자명만 일괄 수정 가능한 페이지

**38개** (§2의 Dr. Claire Ham 38개 전체) — 이 페이지들은 검수자 필드가 없거나(영어 33개 중 상당수), 있더라도 저자명 문제와 무관하게 별도로 처리 가능하므로, **문자열 치환만으로 안전하게 이름을 통일할 수 있다**(의료·과학 본문 내용에는 영향 없음).

목록·랜딩페이지의 "Dr.H"(29건) / "Dr. Ham Jeehyun, M.D."(29건+2건 founder-card+2건 JSON-LD)도 성격상 단순 문자열 치환이지만, **정본(랜딩페이지) 자체를 고치는 작업이라 개별 아티클보다 파급 범위가 크므로 별도 승인 단계로 분리를 권장**한다(§10 참고).

---

## 9. 인간 결정이 필요한 항목

1. **직함 표준화 범위**: "Board-Certified Neurologist"를 74개 아티클의 화면 표시 텍스트에 전부 적용할지, 일부(예: 신규/개정 아티클만)에만 적용할지. 기존 "Neurologist, NervLock Founder"처럼 NervLock 창립자라는 정보를 함께 담고 있던 문구를 유지할지 아니면 완전히 대체할지.
2. **JSON-LD `jobTitle` 값**: "Neurologist"(현재, 14개 페이지)를 유지할지 "Board-Certified Neurologist"로 바꿀지.
3. **한국어 아티클의 영문 표준명 도입 여부**: 이미 30개 한국어 아티클이 "Jeehyun Ham, M.D."(영문)를 저자명으로 쓰고 있음 — 이 관례를 계속 유지할지, 별도의 한국어 저자명(예: 원 CLAUDE.md의 "함지현 원장")으로 회귀할지.
4. **§4의 "Dr. Ham Jeehyun, M.D." 순서 반전**을 랜딩페이지(정본)에서 먼저 고칠지, 그 결과를 목록 페이지·JSON-LD까지 함께 전파할지 — 이 4곳(index.html, en/index.html, blog/index.html, en/blog/index.html)은 74개 아티클과 별도 승인 트랙으로 분리할지 결정 필요.
5. **14개 페이지의 셀프 리뷰(§7) 처리 방향**: (a) 실제 검수자가 있었는지 확인 후 채워 넣기, (b) 검수 이력이 확인되지 않으면 `medical_reviewer`/`reviewedBy`/`검토일` 필드를 아예 제거해 "검수 완료로 오인될 정보"를 없애기, (c) 현재 상태 유지 — 이 중 어느 것을 택할지는 실제 검수 프로세스 존재 여부를 아는 사람만 결정 가능하며, 이 감사에서는 판단하지 않았다.
6. **§2에서 새로 발견된 한국어 5개 파일**("Dr. Claire Ham"이 그대로 남은 대상포진-신경통 등)을 다음 일괄 수정 시 기존 33개와 같은 배치로 처리할지, 별도 확인 후 처리할지.

---

## 10. 권장 표준 데이터 모델 (제안)

모든 블로그 아티클(신규 포함)이 다음 필드를 동일하게 가질 것을 제안한다:

```
저자(author): "Jeehyun Ham, M.D."           (모든 언어 공통, 영문 표기 유지)
저자 직함(author title, 화면 표시):
  EN: "Board-Certified Neurologist"
  KR: "신경과 전문의" 뒤에 소단위로 "Board-Certified Neurologist" 병기 여부는 인간 결정 필요(§9-1)
JSON-LD author.name: "Jeehyun Ham"
JSON-LD author.jobTitle: "Neurologist" 유지 또는 "Board-Certified Neurologist"로 통일(§9-2, 인간 결정 필요)

medical_reviewer / reviewedBy:
  실제 독립 검수 이력이 확인된 페이지에만 채운다.
  확인되지 않으면 필드 자체를 비워 두거나 생략한다(허위로 "검수 완료"처럼 보이는 정보를 절대 만들지 않는다).

reviewed_date:
  medical_reviewer가 채워진 경우에만 존재해야 하며, 반드시 게시일과 다른(실제 검토가 이루어진) 날짜여야 한다.
  게시일과 동일한 날짜를 그대로 복사해 넣는 현재 관행(14개 페이지, §7)은 지양한다.

랜딩페이지 founder-card / founder-en-name / JSON-LD Person.name:
  전체 사이트의 정본으로 취급하고, 이 값을 먼저 표준으로 고친 뒤
  블로그 목록 카드·개별 아티클이 이 정본을 참조하도록 순서를 맞춘다(§9-4).
```

---

## 11. 감사 한계

- 74개 아티클 + 목록 2개 + 랜딩 2개를 전수 조사했으나, 정규식 기반 패턴 매칭에 의존했다 — HTML 구조가 위 두 템플릿(구형 3줄 article-meta / 신형 6줄 article-meta+JSON-LD)에서 크게 벗어나는 예외 페이지가 있다면 놓쳤을 수 있다.
- CLAUDE.md가 언급하는 "in-page blog-modal `.modal-footer`"(블로그 카드 클릭 시 뜨는 모달의 저자 서명)는 현재 `index.html`에서 찾지 못했다 — 이 모달 시스템 자체가 더 이상 존재하지 않거나 클래스명이 바뀐 것으로 보이며, CLAUDE.md가 이 부분에서 최신 상태가 아닐 수 있다.
- 실제 의료 검수가 실제로 이루어졌는지(§7) 여부는 문서만으로 확인할 수 없는 사실관계이며, 이 감사는 "이력이 보이지 않는다"는 관찰만 보고했다.

---

## 12. 기존 콘텐츠 수정 여부

**수정하지 않았다.** 이번 작업에서 생성한 파일은 다음 2개뿐이다:
- `docs/audits/NervLock_Author_Reviewer_Audit.md` (본 문서)
- `docs/audits/NervLock_Author_Reviewer_Inventory.csv`

블로그·홈페이지 콘텐츠, 메타데이터, 구조화 데이터, 저자명, 검수자명, 날짜, canonical, hreflang, sitemap, CSS, JS, 기존 감사 보고서 중 어느 것도 수정하지 않았다.
