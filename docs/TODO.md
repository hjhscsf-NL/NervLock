# TODO

## 콘텐츠/SEO

- [ ] **개별 블로그 글에 구조화 데이터(Article/BlogPosting) 추가 검토.**
      2026-07-17 카테고리 택소노미 개편 작업 중 확인한 결과, 56개 개별
      블로그 글(`blog/<slug>/index.html`) 어디에도 `application/ld+json`
      구조화 데이터가 없다. `/en/blog/`(목록 페이지)에만 CollectionPage +
      BreadcrumbList가 존재한다. Article/BlogPosting 스키마를 추가하면
      검색결과 리치 스니펫에 도움이 될 수 있으나, 이번 카테고리 개편
      범위 밖으로 두기로 사용자 승인받음. 추가 시 `articleSection`
      필드를 이번에 도입한 `primaryCategory` 값과 일치시키고,
      콘텐츠 유형 배지(`contentTypeBadge`)는 `keywords` 또는 별도
      custom property로 분리해 카테고리와 혼동되지 않게 설계할 것.
- [ ] 콘텐츠가 충분히 쌓이면 콘텐츠 유형 배지(연구 해설/가이드라인/
      메타분석/근거 검토/최신 연구) 클릭 시 필터링하는 기능 추가 검토.
      현재는 시각적 표시 전용, 별도 필터 기능 없음(의도된 설계).
- [ ] `최신 연구` 배지를 실제로 부여하는 글이 생기면, 게시일 또는
      검토일을 배지와 함께 표시하도록 마크업 확장 (`.blog-card-type-badge`
      에 날짜 텍스트를 이어붙이거나 `data-reviewed` 속성 추가).
