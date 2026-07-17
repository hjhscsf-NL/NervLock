# Worklog — EN FOCUS Pillar Article 구현

날짜: 2026-07-18
관련: `docs/tasks/2026-07-17-focus-pillar-article.md` (한국어판과 동일 이니셔티브)

## 요약

의학·법률 검수 완료 영어 원고("Why Can't I Focus? It's Not Just Dopamine")를
Brain Health Academy FOCUS 대표 글의 영문판으로 구현하고, 이미 발행된
한국어판(`why-concentration-declines-dopamine-sleep-adhd`)과 hreflang으로
상호 연결했다.

## URL 결정

원고 frontmatter(`/en/academy/why-cant-i-focus/`), 채팅 지시
(`/en/blog/why-cant-i-focus/`), 실제 사이트 관례(`/blog/<slug>/`)가 서로
달라 사용자에게 확인 후 **`/blog/why-cant-i-focus/`**로 확정. 기존 영어
글 33개 전부가 이 패턴이며, `/en/blog/`는 목록 페이지 전용, `/en/academy/`
경로는 사이트에 존재하지 않음을 근거로 제시.

## 생성/수정 파일

- 신규: `blog/why-cant-i-focus/index.html`
- 수정: `en/blog/index.html` (카드 추가, 배지 없음 — frontmatter
  `contentTypeBadge: null`)
- 수정: `en/index.html` (FOCUS 카드를 `#academy` placeholder에서 실제
  글로 연결, "coming soon" 문구 제거)
- 수정: `sitemap.xml` (URL 1건 추가)
- 수정: `blog/why-concentration-declines-dopamine-sleep-adhd/index.html`
  (hreflang 3종, lang-toggle EN 버튼, lang-switch-banner 추가 — 본문은
  건드리지 않음, diff로 확인)

## 내부링크(Related Articles) 처리

원고 frontmatter의 `internalLinks`가 제시한 4개 URL
(`/en/academy/sleep-and-brain-health/` 등)은 전부 `status: "Verify the
live English route before enabling"`로 표시되어 있었고, 실제로는 어느
것도 존재하지 않았다. 대신 제시된 앵커 텍스트("how sleep affects memory
and attention", "possible causes of brain fog")와 주제가 정확히 일치하는
**실존 EN 글 2개**(`sleep-memory-focus`, `brain-fog-neuroscience`)를
Related Articles 카드로 연결. 존재하지 않는 URL은 생성하지 않음.

## 테스트 결과

- HTTP 200: 신규 글, en 블로그 목록, en 홈페이지, KR pillar 전부 확인
- H1 1개 / H2 13개 / H3 32개 / FAQ 7개 / 참고문헌 12개 — 한국어판과 구조 일치
- 본문 14개 대표 문장 fingerprint 대조 100% 일치 (원고 무변경 확인)
- JSON-LD 2개 블록(Article, BreadcrumbList) 유효
- hreflang 양방향 확인: EN→KR lang-switch, KR→EN lang-switch 모두 정상
- 반응형 320~1024px 전부 가로 스크롤 없음
- 키보드 탐색(Tab) 정상, `:focus-visible` 적용
- 콘솔 오류 없음, sitemap well-formed(총 68개 URL)
- Academy FOCUS 카드(en/index.html)가 실제 글로 정상 연결됨 확인
- 블로그 목록 필터: Brain Health & Lifestyle 카테고리에서 3개(sleep,
  brain-fog, focus) 정상 노출

## 미해결

- Related Articles로 대체하지 못한 나머지 2개 원고 제안 링크(memory-loss
  관련, brain-nutrition 관련)에 대응하는 전용 영어 글이 아직 없음 — 향후
  해당 주제의 영어 글이 발행되면 추가 연결 검토 필요
