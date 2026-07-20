# 작업 트리 상태 스냅샷 — 2026-07-20

**HEAD**: `c86c90c126053c521902d8946bc42a8536727f10` ("feat(blog): add bilingual autonomic symptoms article")
**브랜치**: `main`, `origin/main`과 동일 커밋 기준 최신 (unpushed 커밋 없음)
**커밋/푸시/배포 상태**: **커밋되지 않음, 푸시되지 않음, 배포되지 않음.** 아래 모든 변경사항은 작업 트리(working tree)에만 존재합니다.

---

## 1. 현재 modified 파일 전체 목록 (63개, 추적된 파일)

### 1-A. 오늘(2026-07-20) 저자명 표준화 작업으로 변경된 파일 — 42개

**영어 아티클 33개**: alpha-lipoic-acid-nerve, alpha-lipoic-acid, autonomic-dysfunction-symptoms, brain-fog-neuroscience, dementia-modifiable-risk-factors, dementia-preclinical-stage, foods-nerve-health, herpes-zoster-neuralgia, homocysteine-dementia-b-vitamins, levodopa-long-term-misconceptions, nerve-health-foods, nocturnal-nerve-discomfort, parkinson-caregiver-guide, parkinson-constipation, parkinson-dopamine-neuroinflammation, parkinson-dyskinesia, parkinson-early-signs, parkinson-exercise-therapy, parkinson-genetics, parkinson-glutathione, parkinson-medication-dosage, parkinson-medication-management, parkinson-pain-management, parkinson-plus-syndromes, parkinson-rem-sleep-disorder, parkinsonism-differential-causes, peripheral-neuropathy, phosphatidylserine-memory, postherpetic-neuralgia, rtg-omega3-bioavailability, sleep-memory-focus, vitamin-b12-methylcobalamin, vitamin-b12-nerve

**한국어 아티클 5개**: 대상포진-신경통, 비타민B12-신경, 신경-건강-음식, 알파리포산, 야간-신경-불편감

**홈페이지·목록 4개**: blog/index.html, en/blog/index.html, index.html, en/index.html

내용: `Dr. Claire Ham`/`Claire Ham`/`Dr.H`/`Dr. Ham Jeehyun, M.D.`/`Ham Jeehyun`(JSON-LD) → 승인된 표준(`Jeehyun Ham, M.D.` 또는 `함지현`)으로 208건 문자열 치환. 검증 완료(잔존 0건, git diff --check clean).

### 1-B. 이전 세션부터 있던 무관 WIP (이번 저자명 작업과 무관, 손대지 않음)

**CTA 제거 대상 46개 중 오늘 저자명 작업 대상(42개)과 겹치지 않는 19개 파일** — CTA 배너 제거·(해당 시) 잔존 문장 삭제만 적용된 상태이며, 저자명 관련 변경은 없음:
rTG-오메가3-차이, 말초신경병증, 브레인포그-신경과학, 수면-기억력-집중력, 자율신경-무너졌을때, 치매-10년전-신호, 치매-위험-생활습관, 파킨슨-REM수면장애, 파킨슨-글루타치온, 파킨슨-변비, 파킨슨-보호자, 파킨슨-약물치료, 파킨슨-운동치료, 파킨슨-원인-도파민, 파킨슨-이상운동증, 파킨슨-초기증상, 파킨슨-통증, 포스파티딜세린-기억력, 호모시스테인-치매-B비타민

(참고: 46개 CTA 대상 중 나머지 27개는 오늘 저자명 작업 대상과 겹쳐 두 작업의 diff가 함께 누적되어 있음 — §3 참고.)

- `blog/자율신경-조절/index.html` — 별도 진행 중이던 EN pillar 대응 작업(콘텐츠 재작성 + lang-toggle), 157줄 삽입/200줄 삭제 규모, 이번 세션 어느 작업과도 무관, 미착수 상태 그대로.
- `sitemap.xml` — 이전 세션에서 추가된 URL 항목들(자율신경-조절 관련 + 팔피테이션 아티클), 오늘 작업으로 추가 변경 없음.

---

## 2. 현재 untracked 파일·디렉터리 전체 목록

| 경로 | 상태 |
|---|---|
| `blog/what-does-the-autonomic-nervous-system-control/` | 이전 세션의 EN pillar 초안(미발행), 이번 세션에서 손대지 않음 |
| `docs/audits/` | 감사 보고서 전체(아래 §5) — Git 미추적 디렉터리 |
| `docs/governance/` | 승인된 거버넌스 문서 17개 — Git 미추적 디렉터리 |
| `docs/working/` | 승인된 워킹 문서 5개 — Git 미추적 디렉터리 |
| `docs/worklogs/2026-07-20-blog-content-audit.md` | 전체 콘텐츠 감사 워크로그 |
| `docs/worklogs/2026-07-20-current-working-tree-snapshot.md` | 본 문서(신규) |

---

## 3. CTA 제거 대상 46개 파일 현황

46개 파일 전부 CTA 배너 제거 + (해당 시) 잔존 문장 삭제까지 완료된 상태이며, 이 중 **27개는 오늘 저자명 작업 대상에도 포함**되어 두 작업의 변경이 함께 누적되어 있습니다(정상 — 서로 다른 위치를 건드려 충돌 없음, git diff로 각각 구분 가능). 나머지 19개는 §1-B 참고.

| 언어 | 파일 수 | 상태 |
|---|---|---|
| 영어 22 | CTA 배너 제거 완료. peripheral-neuropathy·herpes-zoster-neuralgia는 잔존 문장까지 삭제 완료 | 전부 완료 |
| 한국어 24 | CTA 배너 제거 완료. 말초신경병증은 잔존 문장까지 삭제 완료 | 전부 완료 |

---

## 4. 저자명 표준화 대상 42개 파일 현황

§1-A와 동일 목록. 208건 치환 전부 적용 완료, git diff --check clean, 잔존 검색 0건 확인 완료(직전 턴에서 검증 보고 완료).

---

## 5. docs/audits, docs/governance, docs/working 추적 상태

세 디렉터리 전부 **Git에 추적되지 않은 상태(untracked)**입니다. `docs/audits/`에는 다음 11개 파일이 있습니다:
- NervLock_Blog_Content_Audit.md, NervLock_Blog_Content_Inventory.csv, NervLock_High_Risk_Content_List.md (최초 감사, 보존)
- NervLock_D_Risk_Cause_Matrix.csv, NervLock_D_Risk_Review.md (D등급 원인 분석, 보존)
- NervLock_Post_CTA_Removal_Reaudit.md, NervLock_Post_CTA_Removal_Grades.csv (CTA 제거 후 재평가, 최신 상태 유지 중)
- NervLock_Remaining_High_Risk_3_Pages_Review.md (정밀 검수, 보존)
- NervLock_D_Risk_Cause_Matrix.csv — 사용자 지시에 따라 저자명 표준화 결과 미반영, 과거 이력으로 보존
- NervLock_Author_Reviewer_Audit.md, NervLock_Author_Reviewer_Inventory.csv (저자·검수 감사; Inventory.csv만 최신 저자명 결과 반영됨)

`docs/governance/`(17개), `docs/working/`(5개) 전부 정상 배치·검증 완료 상태.

---

## 6. blog/what-does-the-autonomic-nervous-system-control/ 상태

미발행 EN 초안(자율신경-조절의 영어판 후보). 이번 세션의 어떤 작업도 이 폴더를 건드리지 않았습니다. `en/blog/index.html`의 목록 카드 중 이 글을 가리키는 카드 1개가 이미 존재하나(이전 세션 WIP), 실제 파일은 여전히 미커밋·미추적 상태입니다.

---

## 7. sitemap.xml 상태

이전 세션에서 추가된 URL 항목(자율신경-조절, 두근거림-어지럼-소화불편-자율신경, palpitations-dizziness... 등)이 반영된 상태이며, 오늘 저자명 작업은 sitemap.xml을 전혀 수정하지 않았습니다(git diff 상 변경분은 이전 세션 것 그대로).

---

## 8. commit / push / deploy 여부

**커밋되지 않았습니다. 푸시되지 않았습니다. 배포되지 않았습니다.** `git log`상 마지막 커밋은 `c86c90c`이며, 이후 모든 변경은 작업 트리에만 존재합니다. `origin/main`은 여전히 `c86c90c`를 가리키고 있어 실제 라이브 사이트는 이 스냅샷의 변경사항을 전혀 반영하지 않은 상태입니다.

---

## 9. 롤백 시 주의사항

- **전체 롤백(`git restore .` 등)을 하면 오늘 작업(CTA 제거 46건 + 저자명 표준화 42건)과 이전 WIP(자율신경-조절 재작성, sitemap 추가분)가 한꺼번에 사라집니다** — 서로 다른 시점의 승인된 작업이 섞여 있으므로 일괄 롤백은 권장하지 않습니다.
- 특정 작업만 되돌리려면 파일 단위로 선택해야 합니다. 예: 저자명 표준화만 되돌리려면 §1-A의 42개 파일만 `git checkout --`로 지정 — 단, 이 중 13개는 CTA 제거 변경도 함께 포함하고 있어 파일 단위 롤백 시 CTA 제거 효과까지 함께 사라집니다(같은 파일 안의 다른 diff hunk를 분리하려면 `git apply`로 특정 hunk만 되돌리는 정밀 작업이 필요).
- `blog/자율신경-조절/index.html`과 `sitemap.xml`은 이번 스냅샷의 어떤 작업과도 무관한 별도 미완료 WIP이므로, 다른 작업을 롤백할 때 실수로 함께 되돌리지 않도록 주의해야 합니다.
- `docs/audits/`, `docs/governance/`, `docs/working/`는 Git에 전혀 추적되지 않으므로 `git` 명령으로는 롤백되지 않습니다(파일 시스템에서 직접 삭제해야 사라짐) — 이는 장점(git 롤백의 영향을 받지 않음)이자 주의점(별도로 백업 필요)입니다.
