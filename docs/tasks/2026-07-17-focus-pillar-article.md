# FOCUS Pillar Article — 구현 작업 문서

작성일: 2026-07-17
상태: 구현 완료 (최종 인간 승인 전제로 Technical Implementation 완료)

## 목적

의학·법률 검수가 완료된 최종 승인 원고를 NervLock Brain Health Academy의
FOCUS 대표 글로 구현한다. 콘텐츠 작성/의학 재검토가 아닌 기술 구현
작업으로, 승인된 본문은 수정하지 않는다.

## 최종 URL

`https://nervlocklab.com/blog/why-concentration-declines-dopamine-sleep-adhd/`
(확정 slug, 변경 없음)

## 구현 범위

- 신규 파일: `blog/why-concentration-declines-dopamine-sleep-adhd/index.html`
- 수정 파일: `blog/index.html`(카드 추가), `index.html`(FOCUS 카드 링크),
  `sitemap.xml`(URL 추가)
- 영어 버전: 승인된 영어 원고가 제공되지 않아 **생성하지 않음**
  (en/index.html, en/blog/index.html 무변경 확인)

## 기존 구조와의 충돌 및 처리 방식

1. **Breadcrumb 컴포넌트 부재** — 기존 어떤 블로그 글에도 화면 표시용
   breadcrumb가 없었음. 기존 색상 토큰(`--navy`, `--teal2`, `--gray2`,
   `--muted`)만 사용해 최소 형태로 신규 제작. `<nav class="breadcrumb">`
   로 마크업했다가 전역 `nav { }` 셀렉터(사이트 헤더의 sticky 남색 배경)를
   그대로 상속받는 버그 발생 → `.breadcrumb`에 `position: static;
   background: none; backdrop-filter: none; border-bottom: none;` 명시
   오버라이드로 수정.
2. **개별 글 Article/BreadcrumbList 구조화 데이터 부재** — 목록 페이지에만
   존재하던 패턴을 개별 글에 처음 적용. 기존 Organization JSON-LD와 같은
   `@context` 스타일을 재사용.
3. **작성자 메타 필드 확장** — 기존 글은 "작성자" 한 줄만 표시. 이번 글은
   지시대로 작성자·전문분야·의학검토·게시일·검토일·근거검토일 6개 필드를
   기존 `.article-meta` 영역에 추가 (새 컴포넌트 아님, 기존 flex-wrap 구조
   재사용).
4. **작성자 영문 표기** — 이 글의 상단 메타 영역, author-card, sig-block
   전체에서 "Jeehyun Ham, M.D." 표기를 일관 사용 (지시 7번 요구사항).
   기존 다른 글들의 "Dr.H (함지현)" 표기는 변경하지 않음 (범위 밖).
5. **콘텐츠 유형 배지 미적용** — 원고의 "콘텐츠 유형: 집중력·뇌 건강 교육"
   값은 승인된 5개 배지값(연구 해설/가이드라인/메타분석/근거 검토/최신
   연구) 중 어디에도 해당하지 않아, 배지를 부여하지 않음 (임의 추가 금지
   원칙 준수).
6. **CTA 생략** — 다른 글에 있는 "NervLock Brain Energy" 제품 CTA 배너를
   이 글에는 넣지 않음 (지시 5번 "제품 CTA 추가 금지"에 따름).
7. **OG/Twitter 이미지 생략** — 사이트 전체에 og:image/twitter:image
   컨벤션 자체가 없고 이미지 자산도 없어, 이미지 관련 메타 태그와 JSON-LD
   `image` 속성을 생성하지 않음 (없는 이미지를 지어내지 않는 원칙 준수).
8. **Breadcrumb의 "Focus" 항목** — 전용 Focus 허브 URL이 없어 "Brain
   Health Academy"는 실제 앵커(`/#academy`)로 연결하고, "Focus"는 링크
   없는 텍스트로 처리.

## 원고 무결성 검증

`article-body` 텍스트를 HTML에서 추출해 원고 전체에서 뽑은 14개 대표
문장(도입부·각 섹션·결론·FAQ)과 완전 일치 확인. H1 1개, H2 13개, H3 32개,
FAQ 7개, 참고문헌 12개(DOI/기관 링크 전부) 확인.
