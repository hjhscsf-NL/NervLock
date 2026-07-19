# Worklog — 두근거림·어지럼·소화불편 자율신경 글 구현 (KR/EN)

날짜: 2026-07-19
유형: 일반 Blog article (Academy/Science & Research 아님)
카테고리: 통증·자율신경 / Pain & Autonomic Health (`pain-autonomic`, 기존 값 재사용)

## 요약

의학·법률 검수 완료 한국어·영어 최종 원고("두근거림·어지럼·소화불편이 함께
있다면 자율신경 문제일까요?" / "Do Palpitations, Dizziness, and Indigestion
Together Mean an Autonomic Problem?")를 신규 bilingual 블로그 글로 구현.
가장 유사한 기존 페어(`blog/자율신경-조절/`, 아직 미커밋 상태의
`blog/what-does-the-autonomic-nervous-system-control/`)를 템플릿으로 재사용 —
canonical + hreflang(ko/en/x-default) + OG + Twitter + lang-toggle/
lang-switch-banner + Article·BreadcrumbList JSON-LD를 모두 갖춘 현재 가장
완성된 패턴.

## URL 결정 (사용자 승인 사항)

- KR: `/blog/두근거림-어지럼-소화불편-자율신경/`
- EN: `/blog/palpitations-dizziness-digestive-symptoms-autonomic-nervous-system/`
  (원고 frontmatter와 최초 지시문 모두 `/en/blog/...`를 제안했으나, 기존
  EN 글 19개 전부가 `/blog/<slug>/` 패턴이며 `/en/blog/`는 목록 페이지
  전용임을 근거로 사용자 승인 하에 정정)
- EN slug 단어: `indigestion` 대신 `digestive-symptoms` 채택 (사용자 승인,
  자율신경 기능장애를 기정사실화하지 않기 위한 의도적 표현)

## 생성 파일

- `blog/두근거림-어지럼-소화불편-자율신경/index.html`
- `blog/palpitations-dizziness-digestive-symptoms-autonomic-nervous-system/index.html`

## 수정 파일

- `blog/index.html` — 신규 KR 카드 1개 추가 (전체 / 통증·자율신경 모두 노출)
- `en/blog/index.html` — 신규 EN 카드 1개 추가 (All / Pain & Autonomic Health
  모두 노출)
- `sitemap.xml` — URL 2건 추가 (KR은 기존 관례대로 percent-encoding 적용,
  priority 0.8, changefreq monthly, lastmod 2026-07-19)

다른 파일(Academy, 제품, 랜딩, 전역 내비게이션, 기존 다른 글)은 건드리지
않음. `blog/자율신경-조절/index.html`, `en/blog/index.html`의 기존 미커밋
변경분(별도 진행 중이던 EN pillar 작업)은 이번 작업과 무관하며 diff로
분리 확인.

## 공유 날짜

두 원고의 evidenceReviewDate가 KR 2026-07-19, EN 2026-07-18로 서로 달라
사용자에게 확인 → 양쪽 모두 **2026-07-19**로 통일 (datePublished,
dateModified, evidenceReviewDate, 화면 표시 날짜, sitemap lastmod 전부).

## Specialty 라벨

원고 메타데이터의 "Specialty: Neurology" 대신 사이트 전역 관례인
"Neurologist"를 사용 (JSON-LD jobTitle과 일치, 본문 의학 내용은 무변경).

## 내부 링크 (Related Articles)

원고(EN)가 제시한 `/en/academy/...` 링크 3건은 실제로 존재하지 않는 경로임을
확인 (repo 전체에 `/academy/` 경로 자체가 없음) — 원고 자체의 조건부 지침
("Enable only after confirming that the English route is live")에 따라
비활성 상태 유지. 사용자 승인 하에 실제 존재하는 대체 링크 사용:

- KR: `자율신경-무너졌을때` (실제 폴더명 확인 — 사용자가 제시한
  `자율신경-무너졌을-때`와 하이픈 위치가 달라 실제 경로로 정정),
  `야간-신경-불편감`
- EN: `autonomic-dysfunction-symptoms`, `peripheral-neuropathy`

## 구조화 데이터

기존 레포 전체에 `FAQPage`/`BlogPosting` schema 사용 사례가 전혀 없음을
확인 (grep 결과 0건) — "established repository pattern과 일치하는 경우에만
추가" 조건에 따라 두 스키마 모두 추가하지 않고, 기존 관례인 `Article` +
`BreadcrumbList` 2블록만 구현 (author, reviewedBy, publisher 포함).

## 검증 결과

- HTML 구조: DOCTYPE/html/body 태그 1쌍씩 정상, div 23/23, ul/li 개수 KR
  16/102, EN 10/61 모두 open/close 균형 확인 (Python 스크립트로 정적 검사)
- JSON-LD: 양쪽 파일 모두 Article, BreadcrumbList 블록 `json.loads()` 파싱
  성공 (syntax 오류 없음)
- canonical: 양쪽 페이지 모두 자기 자신을 가리킴 확인
- hreflang: ko/en 상호 참조 확인, x-default는 KR URL로 통일 (기존 관례와
  일치)
- 카테고리: 신규 카드 2개 모두 `data-category="pain-autonomic"` — KR/EN
  필터 버튼(`통증·자율신경` / `Pain & Autonomic Health`)과 일치, "전체"/
  "All" 필터에서도 노출
- 관련 링크 4건 전부 실제 파일 경로 존재 확인 (`Glob`/디렉터리 조회)
- 중복 카드 없음 (신규 슬러그 각각 blog 목록에 1회만 출현)
- 원고 대비 본문 텍스트 무변경 확인 (템플릿 소스 문자열 잔존 여부 grep,
  0건)
- git 작업트리 diff 범위 확인 — 이번 작업에서 수정한 파일은 위 3개 파일
  + 신규 폴더 2개뿐, 그 외 항목(다른 아티클, 전역 파일)은 무변경
- 빌드/린트/테스트: 레포에 build step, package manager, test suite 없음
  (CLAUDE.md 명시 사항, package.json 등 확인 결과 없음) — 해당 없음

## 2차 교정 (퍼블리케이션 블로커 해소, 2026-07-19)

최초 구현 보고 이후 사용자가 지적한 두 가지 퍼블리케이션 블로커를 좁은
범위로 수정. 대상 파일은 EN 아티클 1개뿐이며, KR 아티클과 나머지 파일
(`blog/index.html`, `en/blog/index.html`, `sitemap.xml`)은 이번 교정에서
전혀 건드리지 않음.

**1. EN 참고문헌 #4 처리** — 본문 전체를 grep한 결과 "urin"/"bladder"
관련 서술이 단 한 문장도 없음을 확인 (규칙 A 해당: 자료가 본문의 실질적
주장과 무관). 인용 앵커가 없는 사이트 관례(참고문헌은 각주가 아닌 evidence
-box 목록형)이므로 본문 삭제 없이 참고문헌 목록에서 항목 4(NIDDK "The
Urinary Tract & How It Works")만 제거하고 CDC Stroke 항목을 5→4로 재
번호 매김. KR 원고에도 대응하는 비뇨기 참고문헌이 처음부터 없었음을
확인 — 대체가 아닌 단순 제거가 맞는 처리.

**2. EN 응급/적신호 섹션 추가** — KR "즉시 응급평가가 필요한 경우" 섹션을
유일한 의미 출처로 삼아 자연스러운 미국 영어로 충실히 현지화 (119→
"Call 911 in the United States—or your local emergency number", 문항
12개 전부 그대로 대응, 신규 증상·권고 추가 없음). 배치 위치는 KR과 동일한
구조적 위치 — "When to Seek Medical Evaluation" 섹션 직후, "Key Point
About the Sympathetic and Parasympathetic Systems" 섹션 직전. 헤딩은
기존 사이트 관례("When to Seek Emergency Care", 참조 템플릿 문서에서 이미
사용 중인 표현)와 동일하게 사용. 기존 sig-notice(Medical Disclaimer)
문단은 이미 간결한 상호참조 형태였으므로 그대로 유지, 전문 반복하지 않음.

**검증**: div 23/23, ul 11/11, h2 10/10, h3 5/5 균형 확인. JSON-LD 2블록
모두 파싱 성공. 참고문헌 번호 1·2·3·4 순차 확인, urin 관련 언급 완전
제거(오탐 "during" 3건 제외) 확인. canonical/hreflang 4개 링크 전부
교정 전과 동일 유지 확인. `git diff --check` 통과(공백 오류 없음). 관련
링크 4건 재확인 결과 이상 없음.

## 미해결 / 남은 경고

1. ~~EN 원고의 참고문헌 #4(NIDDK "The Urinary Tract & How It Works")가~~
   → 2차 교정에서 제거 완료 (위 항목 참고).
2. ~~EN 원고에는 KR판과 달리 "즉시 응급평가가 필요한 경우"에 준하는~~
   → 2차 교정에서 "When to Seek Emergency Care" 섹션 추가로 해소 (위 항목
   참고).
3. 커밋/배포 전이므로 실제 배포 후 라이브 URL 접근 테스트는 아직 수행하지
   않음.
