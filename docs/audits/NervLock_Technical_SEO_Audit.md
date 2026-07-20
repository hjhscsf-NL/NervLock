# NervLock 기술 SEO 감사 보고서

**작성일**: 2026-07-20
**범위**: 블로그 아티클 74개, blog/index.html, en/blog/index.html, index.html, en/index.html, sitemap.xml
**선행 문서**: CLAUDE.md, docs/governance/08_SEO_GEO_Guide.md, 09_Blog_Workflow.md, 10_Website_Guide.md, 16_QA_Checklist.md, docs/working/W04_Decision_Log.md, W05_Revision_Log.md

## Executive Summary

74개 블로그 아티클 중 canonical 태그가 아예 없는 페이지가 28개, hreflang이 아예 없는 페이지가 62개, JSON-LD 구조화 데이터가 아예 없는 페이지가 63개다. 기존 JSON-LD(15개 파일, 아티클 11개 + 특수 페이지 4개)는 전부 문법상 유효하며 필드 구성도 일관적이다(Article + BreadcrumbList 2블록, author/reviewedBy/publisher 포함). W04_Decision_Log.md, W05_Revision_Log.md에는 아래 4개 중복 클러스터에 대한 공식 결정 기록이 없다 — 즉 현재 상태는 우연히 발생한 미해결 상태이지 승인된 설계가 아니다.

가장 심각한 발견은 **4개 주제 클러스터에서 영어 아티클이 각각 2개씩 존재**하며, 그중 1개가 이미 canonical을 다른 1개로 돌려놓은 상태라는 점이다(비영어/한국어 페어링은 어느 쪽도 선언하지 않음): alpha-lipoic-acid ↔ alpha-lipoic-acid-nerve, herpes-zoster-neuralgia ↔ postherpetic-neuralgia, nerve-health-foods ↔ foods-nerve-health, vitamin-b12-nerve ↔ vitamin-b12-methylcobalamin. 이는 기계적으로 고칠 수 있는 오류가 아니라 콘텐츠 전략 결정이 필요한 사안이다(T5).

## T1~T5 개수

| 분류 | 개수 | 설명 |
|---|---|---|
| T1 명백한 canonical 오류 | **28** | 아티클에 canonical 태그 자체가 없음(자기참조든 뭐든 전무) |
| T2 hreflang 누락·오류 | **62** | 아티클에 hreflang 자체가 없음 |
| T3 JSON-LD 누락·오류 | **65** | 아티클 63개 JSON-LD 전무 + 특수 페이지 중 BreadcrumbList 누락 2건. 문법 오류(파싱 실패)는 **0건** |
| T4 sitemap 불일치 | **0** | 74개 아티클 전부 sitemap.xml에 등재되어 있음을 확인. 정식 "누락/유령 URL"은 발견되지 않음 |
| T5 인간 결정 필요 | **8개 파일(4개 클러스터)** | 아래 상세 |

(한 파일이 여러 분류에 동시 해당 가능 — 예: canonical도 없고 hreflang도 없는 파일은 T1+T2 동시 집계)

## 가장 중요한 오류 10개

1. **herpes-zoster-neuralgia canonical이 postherpetic-neuralgia를 가리킴** — 실질적으로 동일 주제의 별도 영문 아티클 2개가 존재, 어느 쪽도 한국어 페어를 hreflang으로 선언하지 않음. (T5)
2. **alpha-lipoic-acid canonical이 alpha-lipoic-acid-nerve를 가리킴** — 위와 동일한 패턴. (T5)
3. **nerve-health-foods canonical이 foods-nerve-health를 가리킴** — 위와 동일한 패턴. (T5)
4. **vitamin-b12-nerve canonical이 vitamin-b12-methylcobalamin을 가리킴** — 위와 동일한 패턴. (T5)
5. **아티클 28개에 canonical 태그가 아예 없음** — 검색엔진이 중복/우선순위를 스스로 추정해야 하는 상태, 가장 기초적인 기술 SEO 결손. (T1, 즉시 수정 가능)
6. **아티클 62개에 hreflang이 전무** — 이 중 다수는 실제로는 한/영 페어가 존재함(이번 세션에서 저자명·CTA 작업 중 확인된 KR/EN 쌍 다수 포함)에도 서로를 언어 대체판으로 선언하지 않음. (T2)
7. **아티클 63개에 JSON-LD 구조화 데이터가 전무** — Article/BreadcrumbList 없이 발행됨. (T3)
8. **`why-concentration-declines-dopamine-sleep-adhd`가 실제로는 한국어 페이지(`<html lang="ko">`)인데 영문 슬러그로 발행됨** — hreflang 자체는 기능적으로 정확(ko→이 파일, en→why-cant-i-focus, 상호 참조 확인됨)하지만, 사이트 전체에서 유일하게 한국어 콘텐츠가 영문 슬러그를 쓰는 예외 케이스. 즉각적 오류는 아니나 명명 규칙 일관성 검토 대상. (T5, 경미)
9. **JSON-LD가 존재하는 15개 파일 전체에 `image`/`ImageObject` 필드가 없음** — 08_SEO_GEO_Guide.md §56은 image를 "고려 가능한" 선택 항목으로만 규정하므로 오류는 아니나, 리치 결과 확장 여지로 기록.
10. **`blog/index.html`의 hreflang이 `ko` 1건뿐**(en/x-default 없음) — 목록 페이지 자신에 대한 완전한 hreflang 세트 결손.

## 중복 클러스터 상세 분석

### herpes-zoster-neuralgia / postherpetic-neuralgia / 대상포진-신경통

- `blog/herpes-zoster-neuralgia/index.html`: `lang="en"`, canonical → `https://nervlocklab.com/blog/postherpetic-neuralgia/` (자기 자신이 아님), hreflang 없음, JSON-LD 없음. 25,810자.
- `blog/postherpetic-neuralgia/index.html`: `lang="en"`, canonical → 자기 자신, hreflang 없음, JSON-LD 없음. 22,010자.
- `blog/대상포진-신경통/index.html`: `lang="ko"`, canonical 없음, hreflang 없음, JSON-LD 없음.

**분석**: 두 영문 파일은 분량·구조가 다른 독립적으로 작성된 별개의 글이며, 한쪽(herpes-zoster-neuralgia)이 이미 다른 쪽을 canonical로 지정해 자신을 "비정규 버전"으로 선언한 상태다. 하지만 어느 영문 파일도 한국어 페어를 hreflang으로 선언하지 않아, 대상포진-신경통이 실제로 어느 영문판과 짝인지 코드상 확정할 수 없다. **권장**: (a) 두 영문 글을 병합하거나, (b) 하나를 완전히 별도 주제로 재포지셔닝하거나, (c) 대상포진-신경통의 진짜 짝을 확정하고 나머지 하나는 관련 아티클로만 내부 링크 처리 — 이 중 택1은 인간 결정 필요.

### alpha-lipoic-acid / alpha-lipoic-acid-nerve

두 파일 모두 `lang="en"`, hreflang 없음, JSON-LD 없음. `alpha-lipoic-acid`가 `alpha-lipoic-acid-nerve`를 canonical로 지정(25,918자 vs 20,841자). 한국어 파트너는 `알파리포산` 1개뿐(canonical·hreflang 없음). 위와 동일한 유형의 미해결 중복. 인간 결정 필요.

### nerve-health-foods / foods-nerve-health

두 파일 모두 `lang="en"`, hreflang 없음, JSON-LD 없음. `nerve-health-foods`가 `foods-nerve-health`를 canonical로 지정(27,847자 vs 24,249자). 한국어 파트너는 `신경-건강-음식` 1개뿐. 동일 유형. 인간 결정 필요.

### vitamin-b12-nerve / vitamin-b12-methylcobalamin

두 파일 모두 `lang="en"`, hreflang 없음, JSON-LD 없음. `vitamin-b12-nerve`가 `vitamin-b12-methylcobalamin`을 canonical로 지정(25,093자 vs 20,443자). 한국어 파트너는 `비타민B12-신경` 1개뿐. 동일 유형. 인간 결정 필요.

## sitemap 상태

74개 아티클 전부 sitemap.xml에 정상 등재 확인. 누락 0건. 유령/불일치 URL 0건(스캔 로직상 1건의 오탐이 있었으나 실제로는 blog listing 루트 URL이 정상 등재된 것으로 재확인함). 한국어 URL의 percent-encoding 표기 방식은 기존 관례대로 유지되고 있음.

## 즉시 수정 가능 vs 인간 결정 필요

- **즉시 수정 가능(기계적)**: canonical 자기참조 태그 추가 28건, hreflang 세트 추가(단, 정확한 KR/EN 페어 확인이 선행되어야 함) 62건, JSON-LD Article+BreadcrumbList 골격 추가 63건 — 이 세 작업은 서로 겹치는 파일이 많아 **실제 "즉시 수정 가능" 파일 수는 약 65개**(중복 클러스터 8개와 이미 완비된 13개를 제외한 나머지)로 추정.
- **인간 결정 필요**: **8개 파일**(4개 중복 클러스터) + `why-concentration-declines-dopamine-sleep-adhd` 명명 규칙 건 = 실질적으로 9개 파일.

## 이번 감사에서 수정한 콘텐츠

**없음.** 이번 작업은 조사와 `docs/audits/NervLock_Technical_SEO_Audit.md`, `NervLock_Technical_SEO_Inventory.csv` 2개 파일 생성만 수행했다. 블로그 본문, canonical, hreflang, JSON-LD, sitemap, URL, 파일명, CSS, JS, 저자·검수자·날짜 필드는 전혀 건드리지 않았다.
