# NervLock CTA 제거 후 위험 등급 재평가 보고서

날짜: 2026-07-20
범위: 1차 CTA 제거 작업(46개 파일)이 완료된 이후, 기존 74개 콘텐츠 전체의 A/B/C/D 등급을 재평가.
전제: 이번 작업은 조사·재평가·보고서 생성만 수행했다. 콘텐츠는 추가로 수정하지 않았다(peripheral-neuropathy/말초신경병증 본문에 남은 NervLock Nerve Care 문구 포함, 저자명·메타데이터·canonical·hreflang·구조화 데이터·카테고리·sitemap 전부 미수정).

---

## 1. 요약 (Executive Summary)

CTA 배너(`<div class="cta-banner">`) 46개 전체가 실제로 제거되었음을 파일 단위로 재확인했다(전수 재스캔, 잔존 0건). 이에 따라 D1(폐기·미승인 제품 CTA), D2(질환·증상 직접 연결), D4(미확정 제품 확정 노출)는 **46건 중 44건에서 구조적으로 완전히 해소**되었다. 다만 46건을 각각 다시 열어 CTA 주변 본문(특히 커큐민/Aflapin/NF-κB/5-LOX 기전 설명 문단)을 재검토한 결과, **2건(peripheral-neuropathy EN, 말초신경병증 KR)은 본문 자체에 특정 제품명("NervLock Nerve Care"/"너브케어")을 명시한 문장이 독립적으로 남아 있어 CTA 제거만으로는 위험이 해소되지 않았다.** 추가로 1건(herpes-zoster-neuralgia EN)은 브랜드명은 없지만 "이 기전적 시너지가 [제품의] 복합 처방 근거"라는 취지의 문장이 남아 있어 애매한 위험이 있다고 판단해 C로 재분류했다.

이번 재평가는 D→B 43건, D→C 1건, D 유지 2건이라는 결론에 도달했다. A/B로 이미 분류되어 있던 28건은 이번 재분류 로직(CTA 제거 효과 판정)의 대상이 아니지만, 지시에 따라 rTG 오메가3·포스파티딜세린·브레인포그·파킨슨 클러스터에 속하는 두 건(brain-nutrition, parkinson-glutathione — 둘 다 원래 B, CTA 없음)을 추가로 본문 재확인했고, 둘 다 적절히 헤지된 서술로 확인되어 등급 변경이 필요하지 않았다.

---

## 2. 재평가 후 A/B/C/D 개수

**⚠️ 아래 표는 이 문서 작성 시점(CTA 제거 직후, 문장 삭제 전)의 스냅샷입니다. 2026-07-20에 남은 3개 문장이 삭제되어 최종 현황이 달라졌습니다 — 최신 수치는 §9를 참고하십시오.**

| 등급 | 원래(1차 감사) | CTA 제거 직후(본 재평가) | 최종(2026-07-20 문장 삭제 후, §9) |
|---|---|---|---|
| A | 11 | 11 (변경 없음) | 11 (변경 없음) |
| B | 17 | 60 | **63** |
| C | 0 | 1 | **0** |
| D | 46 | 2 | **0** |
| **합계** | 74 | 74 | 74 |

- **D → B: 43건** (CTA 제거만으로 해소, 본 재평가 시점)
- **D → C: 1건** (CTA 제거만으로 해소, 본 재평가 시점) → **2026-07-20 문장 삭제로 C → B 추가 해소 (§9)**
- **CTA 제거 시점에 여전히 D였던 2건** → **2026-07-20 문장 삭제로 D → B 추가 해소 (§9)**

---

## 3. 항목별 재평가 결과 (9개 기준)

### 3-1. D1(폐기·미승인 제품 CTA) 해소 여부
46개 파일 전체를 재스캔한 결과 `<div class="cta-banner">` 태그가 **0건** 남아 있음을 확인했다(가정이 아니라 파일을 직접 열어 재확인). D1은 **46/46 구조적으로 해소**되었다.

### 3-2. D2(질환·증상과 제품 CTA 직접 연결) 해소 여부
CTA가 사라졌으므로 "질환 교육 글 하단에 제품 CTA가 붙어 있다"는 원래의 D2 문제는 46건 모두 해소되었다. 다만 본문 자체에 독립적으로 질환·증상과 제품을 연결하는 서술이 남아 있는지 별도로 확인했고, **peripheral-neuropathy(EN)/말초신경병증(KR) 2건에서만** 그런 서술을 발견했다(§3-9 참고). 나머지 44건은 본문에 제품명 자체가 전혀 남아 있지 않다(전수 재검색: `Nerve Care|너브케어|신경 케어|Brain Energy` 패턴으로 46개 파일 재검색 결과 매치 2건뿐).

### 3-3. D3(기전→임상효능 과잉 연결)가 CTA만의 문제였는지, 본문에 독립적 위험이 남아 있는지
46개 파일의 커큐민/Aflapin/NF-κB/5-LOX/신경염증/항염/산화 스트레스/뇌세포 보호 관련 문단을 다시 읽었다. 대표적으로 다음을 확인했다:
- **phosphatidylserine-memory(EN) / 포스파티딜세린-기억력(KR):** "may reduce the risk of dementia" 표현은 **미국 FDA 2003년 Qualified Health Claim**을 그대로 인용하고 "very limited and preliminary evidence"라는 헤지 문구를 포함하며, 한국어판도 식약처 고시형 기능성 원료 인정 문구("기억력 개선에 도움을 줄 수 있음")와 "치료나 예방이 아닌" 이라는 명시적 구분을 포함한다. **독립적 과장 없음.**
- **rtg-omega3-bioavailability(EN) / rTG-오메가3-차이(KR):** "124%"/"2배" 흡수율 수치는 **Dyerberg et al. (2010), Prostaglandins, Leukotrienes and Essential Fatty Acids** 특정 연구를 본문에 명시적으로 인용한 결과다. **독립적 과장 없음** (단, 해당 연구의 실재·정확성은 이번 재평가 범위 밖 — 05_Reference_Policy.md 기준 별도 문헌 검증 필요, §7 참고).
- **peripheral-neuropathy(EN) / 말초신경병증(KR):** "이 기전적 시너지가 NervLock 너브케어에서의 복합 처방 근거입니다"라는 문장이 남아 있어, **독립적으로 D3(및 D2/D4) 위험이 잔존**한다.
- **herpes-zoster-neuralgia(EN):** 브랜드명은 없으나 "This mechanistic complementarity is the rationale for their co-formulation"이라는 유사한 문장이 남아 있어, 브랜드명 없이도 실제 제품의 처방 근거처럼 읽히는 모호함이 있다. **C로 재분류.**
- 그 외 41개 파일은 커큐민/Aflapin/NF-κB/5-LOX를 언급하더라도 "~에 관여한다", "~를 억제한다" 같은 순수 기전 설명 수준에 그치고, 임상 효능이나 제품 처방 근거로 연결하는 문장이 없음을 확인했다.

### 3-4. D4(미확정 제품 확정 노출) 해소 여부
CTA 안의 "NervLock Brain Energy가 곧 출시됩니다"/"launching soon" 문구가 44건에서 사라졌으므로 D4는 해소되었다. peripheral-neuropathy/말초신경병증 2건은 본문이 여전히 특정 제품의 실제 처방 근거를 기정사실처럼 서술하므로 D4가 독립적으로 남아 있다.

### 3-5. D5(저자·검수 정보 문제) — 별도 유지
CTA 제거와 무관한 사안이므로 그대로 유지했다. 46건 전체에서 `medical_reviewer`/`reviewed_date` 필드가 비어 있고, 그중 영어 22건은 저자명이 `Dr. Claire Ham (Jeehyun Ham, M.D.)`로 표준(`Jeehyun Ham, M.D.`)과 불일치한다(한국어 24건은 이미 표준과 일치).

### 3-6. D6(SEO·기술 문제) — 별도 유지
46건 전체가 hreflang과 구조화 데이터(JSON-LD)가 없다. CTA 제거와 무관하므로 그대로 남겨두었다.

### 3-7. D→B 또는 D→C 재분류 가능 페이지
- **D→B (43건):** D1/D2/D4가 CTA 제거로 해소되고 본문에 독립적 D3 위험이 없는 파일. 남은 이슈는 D5(저자명·검수자·검토일)와 D6(hreflang·구조화 데이터)뿐이며, 이는 B등급 정의("일부 표현·저자명·카테고리·메타데이터·내부 링크·참고문헌 보완 필요, 핵심 결론은 유지 가능")에 정확히 부합한다.
- **D→C (1건, herpes-zoster-neuralgia):** 브랜드명 없는 모호한 "co-formulation" 문장으로 인해 완전히 깨끗하다고 볼 수 없어 전면 재검수 등급으로 분류.

### 3-8. 여전히 D로 유지해야 하는 페이지와 정확한 이유
**2건, peripheral-neuropathy(EN) / 말초신경병증(KR).** 이유: CTA는 제거되었으나 본문(§7.2/6.2 소단원)에 "이 기전적 시너지가 NervLock 너브케어에서의 복합 처방 근거입니다"라는 문장이 독립적으로 남아 있다. 이는 (a) 질환 교육(말초신경병증)과 특정 제품을 본문에서 직접 연결하고(D2), (b) 출시되지 않은/미확정 제품의 실제 처방 근거가 있는 것처럼 서술하며(D4), (c) 기전 설명을 제품 효능·처방 근거로 확장한다(D3)는 점에서 CTA 제거와 무관하게 세 가지 원인이 동시에 남아 있는 사실상 유일한 사례다. 사용자 지시에 따라 이 문장은 **수정하지 않고 그대로 보존**했다(§3-9).

### 3-9. peripheral-neuropathy / 말초신경병증 잔존 문구 상세

**영어판** (`blog/peripheral-neuropathy/index.html`, 245~249번째 줄, "7.1 Curcumin" / "7.2 Aflapin®: Selective 5-LOX Inhibition" 소단원 안):
> "The principal limitation of standard curcumin preparations is poor oral bioavailability. Phospholipid complex (phytosome) technology substantially enhances curcumin absorption, making it the preferred formulation for clinical application."
> "Aflapin® is a proprietary Boswellia serrata extract standardized for high concentrations of acetyl-11-keto-β-boswellic acid (AKBA)... AKBA acts as a selective 5-lipoxygenase (5-LOX) inhibitor..."
> **"The dual-pathway approach — curcumin targeting NF-κB, Aflapin® targeting 5-LOX — provides complementary inhibition of the two principal pro-inflammatory cascades implicated in peripheral neuroinflammation. This mechanistic synergy underpins their co-formulation in NervLock Nerve Care."**

**한국어판** (`blog/말초신경병증/index.html`, 231~235번째 줄, "7.2 애플라핀®: 선택적 5-LOX 억제" 소단원 안):
> "표준 커큐민 제제의 주요 한계는 낮은 구강 생체이용률입니다. 인지질 복합체(파이토솜) 기술이 커큐민 흡수를 상당히 향상시켜 임상 적용에 선호되는 제형이 됩니다."
> "애플라핀®은... 아세틸-11-케토-β-보스웰산(AKBA) 고함량으로 표준화된 보스웰리아 세라타 특허 추출물입니다..."
> **"커큐민이 NF-κB를, 애플라핀®이 5-LOX를 표적으로 하는 이중 경로 접근법은 말초 신경 염증에 관여하는 두 가지 주요 전염증성 연쇄반응에 대한 상호 보완적 억제를 제공합니다. 이러한 기전적 시너지가 NervLock 너브케어에서의 복합 처방 근거입니다."**

두 문장은 정확히 대응하는 번역 쌍이다. 다른 44개 파일에는 커큐민/Aflapin이 언급되더라도 이런 "이것이 [제품]의 처방 근거" 식의 결론 문장이 없다 — 이 2개 파일만 유독 7.1/7.2(영문)·7.2(국문) 번호가 매겨진 전용 소단원으로 두 성분의 기전을 상세히 설명한 뒤 제품명으로 결론짓는 독특한 구조를 갖고 있다. **이번 작업에서는 지시에 따라 이 문장을 수정하지 않았다.**

---

## 4. 추가로 발견된 경계 사례 — herpes-zoster-neuralgia / 대상포진-신경통

`herpes-zoster-neuralgia`(EN)는 peripheral-neuropathy와 거의 동일한 6.1/6.2 소단원 구조를 가지며, 다음 문장이 남아 있다(220~222번째 줄):
> "The dual-pathway approach — curcumin targeting NF-κB and Aflapin® targeting 5-LOX — provides complementary coverage of the two principal inflammatory cascades implicated in PHN perpetuation. **This mechanistic complementarity is the rationale for their co-formulation.**"

브랜드명("NervLock Nerve Care")이 빠져 있다는 점에서 peripheral-neuropathy보다는 약하지만, "their co-formulation"이 여전히 실제 제품의 처방 근거를 서술하는 것처럼 읽혀 완전히 안전하다고 보기 어렵다. **C등급(전면 재검수 필요)으로 재분류했다.**

반면 한국어 대응판 `대상포진-신경통`은 같은 위치에 훨씬 짧은 한 문장("이중 경로 신경 염증 관리를 지원합니다")만 있고 "처방 근거"라는 결론 문장이 없어 **B로 재분류**했다 — 같은 기사의 한/영판 사이에 위험 수준이 다르다는 점 자체가 번역·현지화 프로세스의 일관성 문제로 별도 기록해 둔다.

---

## 5. rTG 오메가3 · 포스파티딜세린 · 브레인포그 · 파킨슨 · 말초신경 클러스터 전수 점검 결과

지시에 따라 이 다섯 클러스터에 속하는 한/영 전체 기사(46건에 포함된 것과 원래 A/B였던 것 모두)를 대상으로 본문 자체의 독립적 과장 여부를 확인했다.

- **rTG 오메가3** (`rtg-omega3-bioavailability` EN, `rTG-오메가3-차이` KR): 124%/2배 수치는 Dyerberg et al. (2010) 특정 연구 인용. 본문 재검수 불필요, D→B.
- **포스파티딜세린** (`phosphatidylserine-memory` EN, `포스파티딜세린-기억력` KR): FDA/식약처 공식 인정 문구를 헤지 표현과 함께 인용. 본문 재검수 불필요, D→B.
- **브레인포그** (`brain-fog-neuroscience` EN, `브레인포그-신경과학` KR — 46건 포함 / `brain-nutrition` EN, `brain-fog-causes` EN 등 — 원래 A·B): CTA 제거 후 44건 그룹에 포함되어 D→B. `brain-nutrition`은 이번 46건에 없었으나(원래 B, CTA 없음) 지시에 따라 재확인 — "omega-3 supplements have not been shown to improve memory or prevent dementia consistently"처럼 오히려 과장을 경계하는 서술이었음을 확인, 등급 변경 불필요.
- **파킨슨병 클러스터** (14개 영문 + 15개 한글 기사): D1 매트릭스에 포함된 파일들은 대부분 D→B. `parkinson-glutathione`(원래 B, CTA 없음)은 curcumin을 "NRF2 activators" 중 하나로 "rational adjunct strategy"라고 표현 — 적절히 헤지됨, 변경 불필요.
- **말초신경** (`peripheral-neuropathy`/`말초신경병증`, `foods-nerve-health`/`신경-건강-음식`, `nerve-health-foods`, `nocturnal-nerve-discomfort`/`야간-신경-불편감`, `postherpetic-neuralgia`/`대상포진-신경통`, `herpes-zoster-neuralgia`, `alpha-lipoic-acid(-nerve)`/`알파리포산`, `vitamin-b12-*`/`비타민B12-신경`): peripheral-neuropathy/말초신경병증만 D 유지, herpes-zoster-neuralgia만 C, 나머지는 D→B.

**본문 재검수가 필요한 페이지 수: 3건** (peripheral-neuropathy, 말초신경병증, herpes-zoster-neuralgia — D 유지 2건 + C 1건).

---

## 6. 저자명·SEO 잔존 현황

- **저자명 문제만 단독으로 남은 페이지 수: 0건.** 46건 전체가 hreflang·구조화 데이터(D6)도 함께 결여하고 있어, "저자명만" 남은 경우는 존재하지 않는다.
- **SEO·기술 문제만 남은 페이지 수(=한국어판, 저자명은 이미 표준과 일치): 23건.** D→B 43건 중 한국어 23건은 저자명 불일치가 없고 hreflang·구조화 데이터 누락(D6)만 남았다. 영어 20건(D→B 43건 중 나머지)은 저자명 불일치(D5)와 D6가 함께 남아 있다.

---

## 7. 감사 한계 (이번 재평가 자체의 한계)

- 46개 파일 각각에 대해 **모든 문장을 한 줄씩** 재검토한 것은 아니다. 커큐민/Aflapin/NF-κB/5-LOX/신경염증/항염/흡수율/2배/124%/제품명 관련 키워드가 등장하는 문단과 그 전후 문맥을 중점적으로 재확인했다.
- Dyerberg et al. (2010) 등 본문에 인용된 특정 연구가 실제로 존재하고 정확히 인용되었는지는 이번 재평가에서 검증하지 않았다(05_Reference_Policy.md 기준의 건별 참고문헌 검증은 별도 작업으로 남아 있음).
- 원래 A/B였던 28건 중 이번 지시가 명시한 5개 클러스터(rTG, 포스파티딜세린, 브레인포그, 파킨슨, 말초신경) 밖에 있는 항목(예: 수면/집중력 A등급 기사, 자율신경 A등급 기사 등)은 이번 재평가에서 본문을 다시 읽지 않았다 — 원 등급을 그대로 유지했다.
- `docs/audits/NervLock_D_Risk_Cause_Matrix.csv`의 "위험 문구" 열에 기록된 CTA 원문을 기준선으로 삼아 "CTA 제거로 사라진 것"과 "본문에 원래부터 있던 것"을 구분했다 — 이 매트릭스 자체의 정확성에 의존한다.

---

## 8. 기존 콘텐츠 추가 수정 여부

**수정하지 않았다.** 이번 작업은 다음 2개 파일만 생성/갱신했다:
- `docs/audits/NervLock_Post_CTA_Removal_Reaudit.md` (본 문서, 신규)
- `docs/audits/NervLock_Post_CTA_Removal_Grades.csv` (신규)

기존 감사 보고서 5종(`NervLock_Blog_Content_Audit.md`, `NervLock_Blog_Content_Inventory.csv`, `NervLock_High_Risk_Content_List.md`, `NervLock_D_Risk_Cause_Matrix.csv`, `NervLock_D_Risk_Review.md`)은 열람만 하고 전혀 수정하지 않았다. peripheral-neuropathy/말초신경병증 본문의 잔존 문구도 지시대로 그대로 보존했다. 저자명, 메타데이터, canonical, hreflang, 구조화 데이터, 카테고리, sitemap, CSS, JS, 그 외 어떤 블로그·홈페이지 파일도 건드리지 않았다.

**(이 §8의 서술은 본 문서 최초 작성 시점 기준이며, 그 이후 실제로 콘텐츠가 수정되었다 — §9 참고.)**

---

## 9. 2026-07-20 후속 조치 반영 — 잔존 3개 문장 삭제 완료

이 섹션은 본 재평가 완료 이후 진행된 두 후속 작업의 결과를 반영한 갱신분이다.

**후속 작업 1 — 정밀 검수**: 남은 C·D 3개 페이지(peripheral-neuropathy EN, 말초신경병증 KR, herpes-zoster-neuralgia EN)를 대상으로 문제 문장·최소 수정안·대체 문구를 식별해 `docs/audits/NervLock_Remaining_High_Risk_3_Pages_Review.md`에 기록(콘텐츠 미수정, 보고서만 생성).

**후속 작업 2 — 문장 삭제 승인 및 실행**: 사용자 승인에 따라 아래 3개 문장을 각 파일에서 **그 문장만** 삭제(앞 문장의 기전 설명은 원문 그대로 보존, 대체 문구 추가 없음):

| 파일 | 삭제한 문장 |
|---|---|
| `blog/peripheral-neuropathy/index.html` | "This mechanistic synergy underpins their co-formulation in NervLock Nerve Care." |
| `blog/말초신경병증/index.html` | "이러한 기전적 시너지가 NervLock 너브케어에서의 복합 처방 근거입니다." |
| `blog/herpes-zoster-neuralgia/index.html` | "This mechanistic complementarity is the rationale for their co-formulation." |

삭제 후 3개 파일 전체 재검색 결과 "NervLock Nerve Care"·"NervLock 너브케어"·"co-formulation"·"복합 처방 근거" 잔존 **0건**, 각 문단의 앞 문장(커큐민/애플라핀 기전 설명)은 변경 없이 보존됨을 확인했다.

**등급 변경**:
- `peripheral-neuropathy`(EN): D → **B** (D2/D3/D4 독립 잔존 사유 전부 해소, 남은 것은 D5·D6뿐)
- `말초신경병증`(KR): D → **B** (동일)
- `herpes-zoster-neuralgia`(EN): C → **B** (D3 독립 잔존 사유 해소, 남은 것은 D5·D6뿐)

**최종 전체 등급(74건)**: A=11, **B=63**, **C=0**, **D=0**.

**§6 저자명·SEO 잔존 현황 갱신**:
- SEO·기술 문제만 남은 페이지(한국어, 저자명 이미 표준 일치): 23건 → **24건** (`말초신경병증` 추가)
- 저자명 불일치 + D6가 함께 남은 페이지(영어): 20건 → **22건** (`peripheral-neuropathy`, `herpes-zoster-neuralgia` 추가)
- 저자명 문제만 단독으로 남은 페이지: 여전히 **0건** (46건 전체가 D6도 함께 가짐)

**herpes-zoster-neuralgia의 canonical 중복 문제(§4에서 발견)는 이번 작업 범위에 포함되지 않아 그대로 남아 있다** — 별도 인간 결정 필요.

이번 §9 갱신 작업에서 수정한 파일은 콘텐츠 3개(`peripheral-neuropathy`, `말초신경병증`, `herpes-zoster-neuralgia`의 각 index.html — 별도 작업으로 이미 승인·실행됨) 및 보고서 3개(`NervLock_Post_CTA_Removal_Reaudit.md`(본 문서), `NervLock_Post_CTA_Removal_Grades.csv`, `NervLock_Blog_Content_Inventory.csv`)이다. 기존 원본 감사 보고서 4종(`NervLock_Blog_Content_Audit.md`, `NervLock_High_Risk_Content_List.md`, `NervLock_D_Risk_Review.md`, `NervLock_Remaining_High_Risk_3_Pages_Review.md`)은 이력 보존을 위해 수정하지 않았다.

---

## 10. 2026-07-20 감사 데이터 동기화 — `NervLock_Blog_Content_Inventory.csv` 74건 전체

§9 작성 시점에는 `NervLock_Blog_Content_Inventory.csv`(최초 감사 원본 인벤토리)의 3개 행만 수정되어, 나머지 43개 행이 최초 감사 시점의 "D" 등급으로 남아 있는 불일치가 있었다(직전 보고에서 사용자에게 별도 보고함). 사용자 승인에 따라 `NervLock_Post_CTA_Removal_Grades.csv`를 기준선(source of truth)으로 삼아 Inventory.csv 74행 전체를 Content ID·파일 경로 기준으로 대조·동기화했다.

**동기화 결과**:
- 74행 전부 매칭 성공(매칭 실패 0건), 중복 Content ID·URL 0건
- `risk_grade`가 실제로 변경된 행: 43건(모두 D→B, CTA 제거로 이미 해소되었으나 이 파일에는 미반영 상태였던 항목)
- CTA 제거 46건 전체에 대해 `has_product_cta=N`, `product_cta_type`(공란), `mechanism_overreach_without_cta=N`으로 갱신(D1~D4 해소 반영)
- 동기화 후 `Post_CTA_Removal_Grades.csv`와의 등급 불일치: **0건**
- 최종 tally: **A=11, B=63, C=0, D=0, 합계 74** — `Post_CTA_Removal_Grades.csv`와 완전히 일치

`author_display`/`author_standard_mismatch`/`medical_reviewer`/`reviewed_date`/`canonical`/`hreflang`/`structured_data_types` 등 D5·D6 관련 필드는 손대지 않고 미해결 상태 그대로 보존했다. `published_date` 등 기존 이력 필드도 변경하지 않았다.
