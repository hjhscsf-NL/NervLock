# Worklog — FOCUS Pillar Article 구현

날짜: 2026-07-17
관련 문서: `docs/tasks/2026-07-17-focus-pillar-article.md`

## 요약

의학·법률 검수 완료 원고("집중력이 떨어지는 이유: 도파민만의 문제는
아닙니다")를 Brain Health Academy의 FOCUS 대표 글로 구현했다.

## 생성/수정 파일

- 신규: `blog/why-concentration-declines-dopamine-sleep-adhd/index.html`
- 수정: `blog/index.html` (목록 카드 추가, 최신순 최상단)
- 수정: `index.html` (FOCUS Academy 카드 링크를 `/blog/`에서 실제 글로 변경)
- 수정: `sitemap.xml` (신규 URL 1건 추가)
- 무변경(의도됨): `en/index.html`, `en/blog/index.html` — 승인된 영어
  원고가 제공되지 않아 18-B 원칙에 따라 손대지 않음

## 발견 및 처리한 이슈

- Breadcrumb에 `<nav>` 태그를 사용했다가 전역 `nav{}` 스타일(sticky
  남색 헤더 배경)을 그대로 물려받는 버그 발생 → `.breadcrumb`에 배경·
  포지션·z-index를 명시적으로 리셋하여 수정, 스크린샷으로 재확인함.
- 개별 글에 Article/BreadcrumbList 구조화 데이터를 추가한 것은 이 사이트
  최초 사례 (기존엔 목록 페이지에만 존재). 기존 JSON-LD 스타일과 일관되게
  신규 도입.
- 콘텐츠 유형 배지는 원고에 적힌 값("집중력·뇌 건강 교육")이 승인된 5개
  배지값에 해당하지 않아 부여하지 않음.
- 제품 CTA, OG/Twitter 이미지는 각각 "제품 CTA 금지"·"승인 이미지 없음"
  원칙에 따라 생략.

## 테스트 결과

- HTTP 200: 신규 글, 블로그 목록, 홈페이지 전부 확인
- H1 1개 / H2 13개 / H3 32개 / FAQ 7개 / 참고문헌 12개(DOI·기관 링크
  전부) 확인
- 원고 본문 14개 대표 문장 fingerprint 대조 결과 100% 일치 (변경 없음)
- JSON-LD 2개 블록(Article, BreadcrumbList) 모두 유효한 JSON
- 반응형: 320/360/375/390/430/768/1024px 전부 가로 스크롤 없음
- 키보드 탐색: Tab으로 breadcrumb/back-link 이동 확인, `:focus-visible`
  스타일 적용
- 콘솔 오류: 없음
- Academy FOCUS 카드(한국어 홈페이지)가 신규 글로 정상 연결됨 확인
- sitemap.xml well-formed 검증 통과

## 미해결/후속 확인 필요

- 영어 최종 승인 원고 필요 (18-A 처리를 위해 대기)
- 참고문헌 4번(Cao Y et al., 2025)은 원고 본문에 인라인 인용 번호[4]로
  참조되지 않고 목록에만 존재 — 원고 자체의 특성이므로 임의 수정하지 않음
