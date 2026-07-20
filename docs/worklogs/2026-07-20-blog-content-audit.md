# Worklog — NervLock 블로그 전체 콘텐츠 감사

날짜: 2026-07-20
유형: 조사·분류·보고서 생성만 수행 (읽기 전용, 콘텐츠 수정 없음)
관련 문서: `docs/governance/*` 17개, `docs/working/*` 5개 (2026-07-20 Source-of-Truth 동기화 완료 후 실행)

## 요약

승인된 거버넌스 문서 세트가 저장소에 정상 배치된 것을 확인한 뒤, `blog/` 하위 74개 아티클 폴더 전체와 `index.html`/`en/index.html`의 Academy·Science·Solutions 섹션을 대상으로 전수 감사를 수행했다. 스크립트 기반으로 메타데이터·카테고리·저자·canonical/hreflang/구조화데이터·키워드를 추출한 뒤, 실제 CTA 배너 문맥을 직접 확인하여 등급을 매겼다.

## 핵심 발견

**전체 74개 글 중 46개(62%)에 미승인/불일치 제품명("NervLock Nerve Care"/"너브케어" 34개, "NervLock Brain Energy" 12개)을 홍보하는 CTA 배너가 질환·증상·영양 교육 콘텐츠 안에 하드코딩되어 있음을 확인.** 두 제품명 모두 `W01_Product_Roadmap.md`가 인정하는 후보(Brain Core Capsule/Brain Oil Softgel)와 이름이 다르고, "Nerve Care"는 현재 홈페이지 Solutions 섹션에도 전혀 등장하지 않는 완전히 단절된 레거시 명칭임을 확인(`grep`으로 index.html/en/index.html 전체 재검색, 0건).

추가로:
- 84%(62/74)의 글에 hreflang·구조화 데이터가 전혀 없음 (신규 템플릿 11개만 보유)
- 45%(33/74)의 영문 글이 구형 저자 표기("Dr. Claire Ham (Jeehyun Ham, M.D.)")를 유지 중
- `brain-nutrition` 1개 파일의 카테고리 태그 오기("Nutrition & Metabolic Health")가 관련 카드로 4개 파일에 전파됨

## 방법론

1. `CLAUDE.md` + 승인된 거버넌스 문서(00, 01, 02, 03, 04, 05, 07, 09, 10, 16 전체 또는 발췌; 08, 06, 11–15, W02–W05는 시간 제약으로 미열람 — 감사 보고서 Limitations에 명시) 순서대로 읽고 등급 기준 확정.
2. Python 스크립트(`_audit_inventory.py`)로 `blog/*/index.html` 74개 파일에서 필수 조사 항목(제목/H1/메타/카테고리/저자/검수자/날짜/canonical/hreflang/구조화데이터유형/참고문헌수/내부외부링크수/키워드 40여개)을 정규식으로 추출 → `_audit_raw_inventory.csv`.
3. `_audit_grade.py`로 규칙 기반 등급 부여(제품 CTA 배너 존재 = D; hreflang/구조화데이터 결측 또는 카테고리 라벨 오기 = B; 완전한 최신 템플릿 = A) 후 `docs/audits/NervLock_Blog_Content_Inventory.csv`로 최종 저장.
4. 자동 추출로 발견된 고위험 신호(Nerve Care/Brain Energy/curcumin/Aflapin/NF-κB/5-LOX 동시 출현)에 대해 실제 파일을 `grep -B/-A`로 직접 열람하여 CTA 배너 전문과 주변 의학적 주장(기전→효능 비약, "mechanistic synergy", "가장 근거가 확실한 성분" 등)을 원문 그대로 확인.
5. 홈페이지(index.html/en/index.html)의 Academy/Science/Solutions 섹션을 직접 열람하여 "Brain Energy"만 실제로 노출되고 "Nerve Care"는 전혀 없음을 교차 확인.
6. 3종 보고서(Audit.md, Inventory.csv, High_Risk_Content_List.md) 작성.

## 등급 분포

A 11 · B 17 · C 0 · D 46 (총 74)

C가 0인 이유: 이번 데이터셋에서 발견된 "근거보다 강한 기전→효능 주장"은 전부 제품 CTA 배너와 함께 나타나 D로 통합 분류했음을 감사 보고서에 명시.

## 생성 파일 (전부 신규 생성, 기존 파일 수정 없음)

- `docs/audits/NervLock_Blog_Content_Audit.md`
- `docs/audits/NervLock_Blog_Content_Inventory.csv`
- `docs/audits/NervLock_High_Risk_Content_List.md`
- `docs/worklogs/2026-07-20-blog-content-audit.md` (본 파일)

작업 중 사용한 스크립트(`_audit_inventory.py`, `_audit_grade.py`)와 중간 산출물(`_audit_raw_inventory.csv`, `_report_lists.txt`, `_top_risk.txt`)은 저장소 루트에 임시로 생성했다가 작업 완료 후 삭제 예정(최종 산출물이 아님).

## 확인: 기존 콘텐츠 파일 미수정

`git status`/`git diff --stat`로 확인 — `blog/`, `index.html`, `en/index.html`, CSS, JavaScript, sitemap.xml, 기존 거버넌스 문서 중 어느 것도 이번 작업에서 수정되지 않았다. 이전 세션들부터 있던 무관한 미커밋 변경사항(`blog/index.html`, `en/blog/index.html`, `sitemap.xml`, `blog/자율신경-조절/index.html`, 미추적 `blog/what-does-the-autonomic-nervous-system-control/`)도 이번 감사와 무관하게 그대로 유지됨.

## 확인하지 못한 영역 (감사 보고서 Limitations와 동일)

- 참고문헌 개별 검증(05_Reference_Policy.md 전체 워크플로우) 미실시 — 자동 추출된 참고문헌/링크 수는 근사치
- 브라우저 렌더링 검증, 구조화 데이터 실제 파싱 검증(Rich Results 등) 미실시
- `06_Product_Guide.md`, `08_SEO_GEO_Guide.md`, `11`–`15`, `W02`–`W05` 미열람
- Academy/Science 섹션은 index.html 내 컴포넌트로만 확인, 별도 페이지 아키텍처(10_Website_Guide.md가 권장하는 `/academy/`, `/science/` 등 경로)는 실제로 존재하지 않음을 확인했으나 이 구조적 격차 자체의 시정은 범위 밖

## 다음 단계 권고

1. 제품 CTA 46건 처리에 대한 사용자/전략 결정(제거 vs 대체 CTA vs 보류)
2. "Nerve Care" vs "Brain Energy" vs 로드맵("Brain Core"/"Brain Oil") 네이밍 정합성 전략 결정
3. 저자 표기 통일 결정
4. 위 결정들이 내려진 후에만 실제 콘텐츠 수정 착수 — 이번 세션에서는 어떤 수정도 하지 않음
