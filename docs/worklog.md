# Worklog

## 2026-07-17 — 블로그 카테고리 택소노미 개편

관련 지시서: `docs/tasks/2026-07-17-blog-category-taxonomy-update.md`

**변경 내용**
- 블로그 상위 필터를 3개(뇌신경질환/통증/기능의학, KR·EN 동일 구조)에서
  4개(뇌 건강·생활 / 신경계 증상·질환 / 통증·자율신경 / 영양·대사)로 교체.
  `전체`를 포함해 정확히 5개 필터 버튼.
- 한국어(`blog/index.html`)와 영어(`en/blog/index.html`) 목록 페이지에
  동일한 카테고리 체계를 동시 적용.
- 개별 블로그 글 56개(한국어 28 + 영어 32, 중복후보 4건 포함)의 본문 내
  카테고리 라벨(`.article-tag` 또는 `.hero-category`)도 새 카테고리로
  갱신. 본문·title·canonical·이미지·CSS/JS는 변경하지 않음.
- 콘텐츠 유형 배지(`contentTypeBadge`)를 카테고리와 별도 시각 요소
  (`.blog-card-type-badge`)로 신설. 이번 단계에서는 아래 2개 글(KR·EN
  대응 쌍)에만 "근거 검토"/"Evidence Review" 배지 시범 적용:
  - `치매-위험-생활습관` / `dementia-modifiable-risk-factors`
  - `호모시스테인-치매-B비타민` / `homocysteine-dementia-b-vitamins`
  배지 클릭 시 필터링 기능은 이번 범위에 포함하지 않음(요구사항대로).
- URL, canonical, sitemap.xml은 변경하지 않음 (분류 값과 라벨 텍스트만
  변경되는 작업이라 SEO 구조에 영향 없다고 판단, 사용자 승인 사항과 일치).

**확인된 사실**
- 개별 블로그 글에 구조화 데이터(Article/BlogPosting)가 전혀 없었음.
  이번 작업 범위 밖으로 두고 `docs/TODO.md`에 기록.

**마이그레이션 매핑**: 전체 매핑 결과는 완료 보고 메시지 참고.
