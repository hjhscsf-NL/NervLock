# NervLock 잔존 고위험 3개 페이지 정밀 검수 보고서

**작성일**: 2026-07-20
**선행 문서**: `NervLock_Post_CTA_Removal_Reaudit.md`, `NervLock_Post_CTA_Removal_Grades.csv`
**성격**: 문제 문장 식별 + 대체 문구 제안만 수행. **이 문서 작성 과정에서 콘텐츠 파일은 전혀 수정하지 않았습니다.**
**대상 확정 경위**: 사용자가 최초 지정한 3번째 페이지("alpha-lipoic-acid")는 직접 재확인 결과 해당 위험 문구가 존재하지 않아, 사용자 확인을 거쳐 실제 남은 C등급 페이지인 `herpes-zoster-neuralgia`(영어)로 교체했습니다.

---

## 1. 영어 `peripheral-neuropathy` 페이지

**1. 파일 경로**: `blog/peripheral-neuropathy/index.html`
**2. 공개 URL**: `https://nervlocklab.com/blog/peripheral-neuropathy/` (canonical 자기참조 확인)
**3. 문제 문장의 정확한 원문** (본문 §7.2, 마지막 문장):
> "The dual-pathway approach — curcumin targeting NF-κB, Aflapin® targeting 5-LOX — provides complementary inhibition of the two principal pro-inflammatory cascades implicated in peripheral neuroinflammation. **This mechanistic synergy underpins their co-formulation in NervLock Nerve Care.**"

**4. 앞뒤 문맥**: §7 "Nutritional Support: A Neurologist's Perspective" → §7.1 Curcumin(NF-κB) → §7.2 Aflapin®(5-LOX). 두 절 모두 개별 성분의 기전을 개별적으로 설명한 뒤, 7.2절 마지막에 위 문장으로 두 성분을 하나로 묶어 특정 브랜드명("NervLock Nerve Care")의 제품 근거로 직접 연결합니다. 바로 다음은 `evidence-box`(참고문헌)로 넘어갑니다.

**5. 문제가 되는 이유**:
- **의료·과학**: 커큐민(NF-κB)과 애플라핀(5-LOX) 각각의 개별 기전 근거는 실제 문헌(Anand 2008, Sengupta 2010 등)에 기반하지만, "두 기전의 시너지가 이 제품의 배합 근거"라는 결론은 **개별 성분 근거를 완제품 조합 효능으로 확대**하는 문장이며, 이 조합 자체를 검증한 임상 데이터가 인용되어 있지 않습니다.
- **규제**: `04_Regulatory_Compliance.md` §9 Claim Ladder 기준으로 개별 기전 서술 자체는 **Level 2(Mechanistic Statement, "moderate risk, mechanism does not prove clinical benefit")**로 허용 범위이나, 이 문장은 §6 Commercial Nexus Test의 위험 요인("Product-specific mechanism", "Product-specific ingredient discussion", "Disease content followed by a product recommendation")에 정확히 해당하여 전체 인상이 §8 **Orange("Strong mechanism-to-benefit inference", "product linked to disease content")** 로 격상됩니다.
- **브랜드**: `docs/working/W01_Product_Roadmap.md` §5 "Current Portfolio Position"은 "As of this roadmap version, no NervLock consumer product has final launch approval"라고 명시하며, 실제 현재 후보는 **Brain Oil Softgel / Brain Core Capsule** 2종뿐입니다. "NervLock Nerve Care"는 이 로드맵·의사결정 로그 어디에도 등장하지 않는 **폐기된 과거 제품명**이며, 홈페이지(`index.html`/`en/index.html`)에도 전혀 노출되지 않습니다(재확인 결과 0건). 즉 존재하지 않는 제품을 확정된 것처럼 이름으로 지목하고 있습니다.

**6. 관련 거버넌스 기준**: `04_Regulatory_Compliance.md` §6(Commercial Nexus Test), §7(Overall-Impression Rule), §8(Orange 등급), §9(Claim Ladder Level 2); `docs/working/W01_Product_Roadmap.md` §5(포트폴리오 현황).

**7. 최소 수정안**(권장): 두 번째 문장 전체 삭제, 첫 문장(순수 기전 비교, Level 2)만 유지.
> "The dual-pathway approach — curcumin targeting NF-κB, Aflapin® targeting 5-LOX — provides complementary inhibition of the two principal pro-inflammatory cascades implicated in peripheral neuroinflammation."

**8. 더 보수적인 대체 문구**(문장을 완전히 없애지 않고 남기고 싶을 경우):
> "This mechanistic complementarity is one reason researchers have explored combining these two compounds in nutritional formulations — though the combination itself has not been separately validated in clinical trials, and no NervLock product is currently available."
(브랜드명 제거, 제품 존재 여부에 대한 명확한 부정, 조합 자체의 임상 미검증을 명시 — 다만 이 대안은 원문에 없는 설명을 추가하므로 "최소 수정"은 아님.)

**9. 문장 삭제가 더 적절한지 여부**: **예.** 앞 문장만으로 해당 절이 완결되며(다른 여러 절도 단문 문단으로 끝남 — 구조상 이례적이지 않음), 굳이 대체 문구를 넣을 의학적 필요가 없습니다. 삭제를 1순위로 권장합니다.

**10. 참고문헌·문장 구조 영향**: 없음. 이 사이트 템플릿은 본문에 인라인 각주 번호를 쓰지 않고 `evidence-box`에 참고문헌을 별도 나열하는 방식이라(사이트 공통 관례), 삭제 대상 문장에 연결된 인용 표시가 없습니다. 삭제 후 남는 문단은 다른 절들과 동일한 단문 구조가 되어 이상하지 않습니다.

**11. 한국어·영어 대응 페이지 간 의미 일치 여부**: **완전히 일치.** 대응 페이지 `말초신경병증`(§7.2)에 토씨 하나 다르지 않게 동일한 구조·순서·의미의 문장이 존재합니다(아래 2번 항목).

**12. 수정 후 예상 등급**: **D → B.** 이 문장을 삭제하면 D1(폐기 제품명)·D2(질환 교육과 제품 직결)·D4(미확정 제품 확정 노출) 근거가 모두 사라집니다. 남는 것은 이미 43개 페이지와 동일한 D5(저자·검수 메타데이터)·D6(hreflang·구조화 데이터 없음) 뿐이며, 이는 별도 트랙에서 처리됩니다.

---

## 2. 한국어 `말초신경병증` 페이지

**1. 파일 경로**: `blog/말초신경병증/index.html`
**2. 공개 URL**: `https://nervlocklab.com/blog/말초신경병증/` (이 파일은 `<link rel="canonical">` 태그 자체가 없는 구형 템플릿 — canonical 부재는 D6로 별도 관리 중인 기존 이슈이며 이번 작업 범위 아님)
**3. 문제 문장의 정확한 원문** (본문 §7.2, 마지막 문장):
> "커큐민이 NF-κB를, 애플라핀®이 5-LOX를 표적으로 하는 이중 경로 접근법은 말초 신경 염증에 관여하는 두 가지 주요 전염증성 연쇄반응에 대한 상호 보완적 억제를 제공합니다. **이러한 기전적 시너지가 NervLock 너브케어에서의 복합 처방 근거입니다.**"

**4. 앞뒤 문맥**: 영어판과 동일한 구조 — §7 "영양학적 지원: 신경과 전문의의 시각" → §7.1 커큐민(NF-κB) → §7.2 애플라핀(5-LOX). 바로 뒤는 `evidence-box`(주요 참고 문헌).

**5. 문제가 되는 이유**: 영어판과 완전히 동일한 사유(의료·과학/규제/브랜드) — 위 1번 항목 그대로 적용. 한국 규제 맥락에서는 `04_Regulatory_Compliance.md`의 국내(대한민국) 관할 기준이 그대로 적용되며, 건강기능식품이 아닌 미승인·미출시 제품을 지목한 서술이라는 점에서 위험이 동일합니다.

**6. 관련 거버넌스 기준**: 1번 항목과 동일.

**7. 최소 수정안**(권장): 두 번째 문장 삭제.
> "커큐민이 NF-κB를, 애플라핀®이 5-LOX를 표적으로 하는 이중 경로 접근법은 말초 신경 염증에 관여하는 두 가지 주요 전염증성 연쇄반응에 대한 상호 보완적 억제를 제공합니다."

**8. 더 보수적인 대체 문구**:
> "이러한 기전적 상호보완성은 두 성분을 함께 배합하는 근거로 연구되어 왔으나, 조합 자체의 임상적 효과가 별도로 검증된 것은 아니며 현재 NervLock에서 판매 중인 제품은 없습니다."

**9. 문장 삭제가 더 적절한지 여부**: **예.** 영어판과 동일한 이유로 삭제를 1순위로 권장합니다.

**10. 참고문헌·문장 구조 영향**: 없음. 영어판과 동일.

**11. 한국어·영어 대응 페이지 간 의미 일치 여부**: **완전히 일치**(위 1번 참고).

**12. 수정 후 예상 등급**: **D → B** (1번 항목과 동일 논리).

---

## 3. 영어 `herpes-zoster-neuralgia` 페이지 (herpes-zoster-neuralgia)

**1. 파일 경로**: `blog/herpes-zoster-neuralgia/index.html`
**2. 공개 URL**: ⚠️ **주의** — 이 파일의 `<link rel="canonical">`은 자기 자신이 아니라 `https://nervlocklab.com/blog/postherpetic-neuralgia/`를 가리킵니다. 즉 이 페이지는 검색엔진 기준으로는 **`postherpetic-neuralgia` 페이지의 비정규(non-canonical) 중복본**으로 선언되어 있습니다. 다만 `blog/herpes-zoster-neuralgia/index.html` 자체 URL로도 실제 접속·열람이 가능하므로, 사람이 읽는 콘텐츠로서의 규제 위험은 그대로 존재합니다. (참고로 `postherpetic-neuralgia/index.html` 본문에는 이 위험 문장이 없음을 확인했습니다 — 즉 검색엔진에 색인되는 정규 URL은 이미 깨끗하고, 비정규 중복 URL에만 위험 문장이 남아있는 상태입니다.) 이 중복 구조 자체를 어떻게 정리할지는 이번 작업 범위 밖의 별도 인간 결정 사항입니다(§ "인간 승인 필요 사항" 참고).
**3. 문제 문장의 정확한 원문** (본문 §6.2, 마지막 문장):
> "The dual-pathway approach — curcumin targeting NF-κB and Aflapin® targeting 5-LOX — provides complementary coverage of the two principal inflammatory cascades implicated in PHN perpetuation. **This mechanistic complementarity is the rationale for their co-formulation.**"

**4. 앞뒤 문맥**: §6 "Nutritional Support for Post-Herpetic Neural Health" → §6.1 Curcumin → §6.2 Aflapin® → (바로 이 문장) → §6.3 Methylcobalamin. 다른 두 페이지와 달리 **브랜드명이 명시되지 않았습니다** — "their co-formulation"이 무엇을 가리키는지 모호한 채로 남아 있어, 직접 등급을 D가 아닌 **C**로 재평가했습니다(직전 재평가 보고서 기준).

**5. 문제가 되는 이유**:
- **의료·과학**: 1·2번과 동일한 유형(개별 기전 근거 → 조합 완제품 근거로 확대)이나, 특정 제품명이 없어 상대적으로 모호합니다. 다만 "co-formulation"(공동 배합)이라는 단어 자체가 이미 "제품으로 만들어졌거나 만들어질 것"이라는 완제품 지향적 함의를 내포합니다.
- **규제**: 브랜드명이 없어도 `04_Regulatory_Compliance.md` §6의 "Product-specific mechanism", "Disease content followed by a product recommendation" 요건은 여전히 충족됩니다 — 이 문서 §7 Overall-Impression Rule에 따르면 "특정 제품명이 없어도 전체 인상(overall impression)으로 판단"하도록 명시되어 있어, 브랜드 미언급이 안전판이 되지 않습니다.
- **브랜드**: 이 페이지는 §2에서 설명한 대로 **비정규 중복 URL**이라는 별도 구조적 문제도 안고 있습니다.

**6. 관련 거버넌스 기준**: `04_Regulatory_Compliance.md` §6, §7, §8(Orange).

**7. 최소 수정안**(권장): 두 번째 문장 삭제.
> "The dual-pathway approach — curcumin targeting NF-κB and Aflapin® targeting 5-LOX — provides complementary coverage of the two principal inflammatory cascades implicated in PHN perpetuation."

**8. 더 보수적인 대체 문구**:
> "This mechanistic complementarity has prompted interest in combining both compounds in nutritional formulations, although no such combination has been separately validated in clinical trials for post-herpetic neuralgia."

**9. 문장 삭제가 더 적절한지 여부**: **예**, 동일한 이유로 삭제 권장.

**10. 참고문헌·문장 구조 영향**: 없음.

**11. 한국어·영어 대응 페이지 간 의미 일치 여부**: **불일치 확인.** 이 페이지의 한국어 대응으로 추정되는 `blog/대상포진-신경통/index.html`은 커큐민·애플라핀을 §6.3 한 문단으로 훨씬 짧게 압축 서술하며, "co-formulation"에 해당하는 문장 자체가 **아예 존재하지 않습니다**. 즉 영어판에만 있는 추가 위험 문장이며, 한/영 콘텐츠가 구조적으로도 다른 상태입니다. (이 구조적 불일치 자체는 이전 재평가에서 "콘텐츠 중복 가능성"으로 이미 별도 기록된 4개 주제 중 하나이며, 이번 문장 수정과는 별개 사안입니다.)

**12. 수정 후 예상 등급**: **C → B.** 단, canonical이 자기 자신이 아니라는 구조적 이슈는 이 문장 삭제만으로 해소되지 않으며 별도 결정이 필요합니다(아래 참고).

---

## 요약

| 페이지 | 위험 문장 | 최소 수정안 | 삭제 권장 | 수정 후 예상 등급 |
|---|---|---|---|---|
| `peripheral-neuropathy`(EN) | "This mechanistic synergy underpins their co-formulation in NervLock Nerve Care." | 해당 문장 삭제 | 예 | D → B |
| `말초신경병증`(KR) | "이러한 기전적 시너지가 NervLock 너브케어에서의 복합 처방 근거입니다." | 해당 문장 삭제 | 예 | D → B |
| `herpes-zoster-neuralgia`(EN) | "This mechanistic complementarity is the rationale for their co-formulation." | 해당 문장 삭제 | 예 | C → B |

## 인간 승인 필요 사항

1. **위 3개 문장에 대해 "삭제" 또는 "보수적 대체 문구로 교체" 중 어느 쪽을 승인할지** — 이 보고서는 삭제를 1순위로 권장하되 대체 문구도 함께 제시했습니다.
2. **`herpes-zoster-neuralgia` ↔ `postherpetic-neuralgia` 비정규 중복 URL 구조를 어떻게 처리할지** — 이번 문장 수정 범위 밖이며, 유지/통합/리다이렉트 여부는 별도 결정이 필요합니다.
3. **`herpes-zoster-neuralgia`(EN)와 `대상포진-신경통`(KR) 간 구조적 콘텐츠 불일치**(EN이 더 상세하고 위험 문장을 포함, KR은 압축되어 해당 문장 없음) — 이번 작업 범위 밖이나, 향후 한/영 콘텐츠 정합성 작업 시 참고 필요.

이 보고서 작성 과정에서 제목, H1, 메타데이터, 저자, 날짜, 카테고리, canonical, hreflang, 구조화 데이터, 참고문헌, URL을 포함해 **어떤 콘텐츠 파일도 수정하지 않았습니다.**
