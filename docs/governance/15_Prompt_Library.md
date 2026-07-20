# NervLock Prompt Library and AI Task Specification Standard

**Document ID:** 15_Prompt_Library.md  
**Version:** 1.0  
**Status:** Core AI Prompting and Task-Specification Document  
**Last Updated:** 2026-07-17  
**Primary Use:** ChatGPT, Claude, Claude Code, image-generation systems, video-generation systems, and approved future AI tools  
**Document Owner:** NervLock Strategic Headquarters  
**Approved By:** Authorized NervLock Human Reviewer  
**Review Cycle:** At least every 3 months, and immediately when the AI workflow, governance documents, tool capabilities, regulatory environment, website architecture, product strategy, or publishing process materially changes  

**Related Documents:**

- 00_AI_Operating_Manual.md
- 01_Brand_Guide.md
- 02_Brand_Positioning.md
- 03_Medical_Evidence_Standard.md
- 04_Regulatory_Compliance.md
- 05_Reference_Policy.md
- 06_Product_Guide.md
- 07_Content_Writing_Guide.md
- 08_SEO_GEO_Guide.md
- 09_Blog_Workflow.md
- 10_Website_Guide.md
- 11_Image_Style_Guide.md
- 12_SNS_Guide.md
- 13_YouTube_Guide.md
- 14_Content_Repurposing.md
- 16_QA_Checklist.md
- W01_Product_Roadmap.md
- W02_Content_Calendar.md
- W03_Current_Priorities.md
- W04_Decision_Log.md
- W05_Revision_Log.md

---

## 1. Purpose

This document provides approved prompt structures for recurring NervLock work.

It is intended to improve:

- Task clarity
- Role clarity
- Scientific accuracy
- Medical safety
- Regulatory caution
- Reference integrity
- Brand consistency
- Output consistency
- Traceability
- Version control
- Review efficiency
- Collaboration among ChatGPT, Claude, Claude Code, designers, and editors

This library contains reusable prompts for:

- Strategy
- Scientific literature review
- Medical evidence appraisal
- Regulatory review
- Brand review
- Blog planning
- Blog writing
- SEO and GEO
- Website implementation
- Instagram and social media
- Image generation
- YouTube
- Product development
- Content repurposing
- Quality assurance
- Corrections
- Incident response
- Decision logging

These prompts are templates.

They do not replace professional judgment, current evidence verification, legal review, or final human approval.

---

## 2. Governing Prompt Principle

NervLock follows one central prompting rule:

> A strong prompt must define the objective, governing sources, audience, risk, evidence standard, prohibited actions, required output, and approval boundary before asking an AI system to create public-facing work.

A prompt should not merely ask:

- “Write an article”
- “Make this viral”
- “Improve the website”
- “Create a medical image”
- “Summarize the research”
- “Make this more persuasive”

A NervLock prompt should specify:

1. What is being created
2. Why it is being created
3. Who it is for
4. Where it will be used
5. Which governance documents apply
6. What evidence is required
7. What risks exist
8. What must not be changed
9. What must be included
10. What review status the output should carry

---

## 3. Prompt Authority

This library does not override:

- Applicable law
- Public safety
- Medical evidence
- Regulatory requirements
- Reference integrity
- Approved brand strategy
- Final human decisions

When a prompt conflicts with a governing document, the governing document takes priority.

The AI must not silently follow a lower-priority task instruction that conflicts with:

- `00_AI_Operating_Manual.md`
- `03_Medical_Evidence_Standard.md`
- `04_Regulatory_Compliance.md`
- `05_Reference_Policy.md`
- `01_Brand_Guide.md`
- `02_Brand_Positioning.md`

---

## 4. Prompt Classification

Every prompt should be classified before use.

### 4.1 Internal Administrative Prompt

Examples:

- File organization
- Task list
- Meeting summary
- Version comparison

### 4.2 Strategic Prompt

Examples:

- Brand positioning
- Website architecture
- Channel strategy
- Product roadmap

### 4.3 Evidence Prompt

Examples:

- Literature review
- Evidence table
- Guideline synthesis
- Safety review

### 4.4 Public-Facing Draft Prompt

Examples:

- Blog article
- Social caption
- Video script
- Product education page

### 4.5 Technical Implementation Prompt

Examples:

- Claude Code website task
- Structured data
- Redirect map
- Accessibility implementation

### 4.6 High-Risk Commercial Prompt

Examples:

- Product page
- Paid advertisement
- Physician product endorsement
- Influencer script

### 4.7 Correction or Incident Prompt

Examples:

- Medical correction
- Product safety update
- Regulatory incident response

The prompt classification determines the required review depth.

---

## 5. Mandatory Prompt Header

For substantive work, use this header.

```text
TASK TYPE:
[Strategy / Evidence Review / Public-Facing Draft / Technical Implementation / QA / Correction]

OBJECTIVE:
[What must be achieved]

PRIMARY AUDIENCE:
[One primary audience]

PUBLICATION CHANNEL:
[Website / Blog / Naver Blog / Instagram / Facebook / Threads / YouTube / Newsletter / Product Page / Internal]

LANGUAGE:
[Korean / English / Bilingual]

RISK LEVEL:
[Level 0 / Level 1 / Level 2 / Level 3 / Level 4]

GOVERNING DOCUMENTS:
[List the applicable NervLock documents]

APPROVED SOURCE MATERIAL:
[List files, URLs, evidence tables, approved copy, or source IDs]

NON-NEGOTIABLE REQUIREMENTS:
[List requirements]

PROHIBITED CHANGES:
[List what the AI must not change]

REQUIRED OUTPUT:
[Exact deliverable and format]

OUTPUT STATUS:
[Internal Draft / Strategic Proposal / Public-Facing Draft / Implementation Instruction / QA Report]
```

---

## 6. Universal NervLock Context Block

Use this block when a tool does not already have NervLock project context.

```text
NervLock is an evidence-based Brain Health Platform designed to grow into an integrated Brain Health Ecosystem.

NervLock is not a supplement company.

The required strategic sequence is:

Brain Health
→ Education
→ Science
→ Trust
→ Products

Education, scientific credibility, medical responsibility, and long-term trust take priority over promotion and sales.

Write like an experienced neurologist speaking to an intelligent reader.

Be professional, calm, clear, evidence-based, and respectful.

Never use fear, sensationalism, unsupported certainty, disease-treatment claims, guaranteed outcomes, fabricated citations, fake testimonials, or physician authority as a substitute for evidence.

Always distinguish:

- Established evidence
- Supported but qualified evidence
- Emerging evidence
- Expert interpretation
- Hypothesis
- Uncertainty

All public-facing outputs require final human approval.
```

---

## 7. Universal Evidence Block

Use for medical, scientific, or product tasks.

```text
Use an evidence-first process.

Before writing the conclusion:

1. Define the exact question.
2. Identify the appropriate evidence type.
3. Prioritize current clinical guidelines, systematic reviews, randomized trials, major observational studies, and official safety sources as appropriate.
4. Check contradictory evidence.
5. Distinguish human clinical outcomes from biomarkers, mechanisms, animal studies, and in vitro findings.
6. Separate association from causation.
7. State the certainty of evidence.
8. State the main limitations.
9. State whether the evidence applies to the intended population, dose, formulation, and duration.
10. Never fabricate references, DOI numbers, PMID numbers, statistics, or quotations.

Confidence in language must not exceed confidence in evidence.
```

---

## 8. Universal Regulatory Block

Use for public-facing health, product, advertising, or physician-related content.

```text
Apply conservative Korean regulatory reasoning.

Scientific support does not automatically create legal permission to advertise a claim.

Review the overall impression created by:

- Headline
- Body copy
- Image
- Product placement
- Physician identity
- CTA
- Hashtags
- Metadata
- Structured data
- Pinned comments
- External links

Do not use:

- Disease prevention claims
- Disease treatment claims
- Cure or reversal claims
- Guaranteed outcomes
- Medicine-like implications for food or supplements
- Unsupported symptom-improvement claims
- Unsupported superiority
- False urgency
- Fear-based marketing
- Unverified testimonials
- Misleading before-and-after content

A disclaimer cannot repair a prohibited or misleading main claim.

When uncertain, use the more conservative wording and flag the issue for specialist review.
```

---

## 9. Universal Reference Block

```text
For every material factual claim:

- Use a real and verifiable source.
- Confirm that the source supports the exact claim.
- Confirm the population, intervention or exposure, outcome, dose, formulation, direction, and certainty.
- Record whether full text, abstract only, or metadata only was reviewed.
- Check retractions, corrections, expressions of concern, and updates.
- Do not cite search snippets, AI-generated references, or press releases as proof when primary or official sources are available.
- Place citations close to the supported claim.
- Identify conflicting evidence where material.
```

---

## 10. Universal Output Status Block

Use at the end of high-risk prompts.

```text
Do not label the result as approved or publication-ready.

Label the output as one of:

- Internal Draft
- Strategic Proposal
- Evidence Summary
- Regulatory Review Draft
- Public-Facing Draft
- Technical Implementation Instruction
- QA Review

Final publication requires authorized human approval.
```

---

# PART I — STRATEGY PROMPTS

## 11. Brand Strategy Review Prompt

```text
Review the following proposal for alignment with NervLock’s approved brand strategy.

PROPOSAL:
[Paste proposal]

GOVERNING DOCUMENTS:
- 01_Brand_Guide.md
- 02_Brand_Positioning.md
- 00_AI_Operating_Manual.md

Evaluate:

1. Whether NervLock is positioned as an evidence-based Brain Health Platform rather than a supplement company
2. Whether the sequence Education → Science → Trust → Products is preserved
3. Whether products are subordinate to the ecosystem
4. Whether the proposal strengthens long-term credibility
5. Whether the proposal creates category confusion
6. Whether the physician role is educational rather than coercive
7. Whether the proposal depends on trends, fear, or unsupported authority
8. Whether it is suitable for Korean and international audiences

Return:

- Strategic decision: Approve / Approve With Conditions / Revise / Reject
- Main strengths
- Main risks
- Required revisions
- Final recommended strategic wording
- Items requiring human decision

Status: Strategic Review Draft.
```

---

## 12. New Initiative Evaluation Prompt

```text
Evaluate the following proposed NervLock initiative.

INITIATIVE:
[Describe initiative]

Assess:

- Strategic fit
- Audience need
- Educational value
- Medical risk
- Regulatory risk
- Brand risk
- Resource burden
- Maintenance burden
- Search and content value
- Product dependence
- Long-term trust impact

Use the decision framework:

- Proceed
- Proceed With Conditions
- Revise Concept
- Hold
- Stop

For each decision, explain the evidence and assumptions.

Do not recommend proceeding solely because the initiative may generate traffic, followers, or revenue.
```

---

## 13. Competitive Positioning Prompt

```text
Analyze the competitive position of NervLock in the following market.

MARKET:
[Define market]

Compare competitors based on:

- Primary category
- Educational depth
- Medical authority
- Evidence transparency
- Product dependence
- Claim aggressiveness
- Content ecosystem
- Search authority
- Community strength
- Trust risks

Identify:

1. Market saturation
2. Unmet educational needs
3. White-space opportunities
4. Areas NervLock should avoid
5. Differentiation that does not require unsupported superiority claims
6. A conservative positioning recommendation

Do not use “best,” “No. 1,” or “most trusted” as public claims unless objectively substantiated.
```

---

## 14. Decision Memo Prompt

```text
Prepare a NervLock decision memo.

DECISION:
[State decision]

BACKGROUND:
[Provide context]

OPTIONS:
[List options]

Evaluate each option for:

- Strategic fit
- Scientific integrity
- Regulatory risk
- Brand consistency
- User experience
- Operational feasibility
- Cost
- Reversibility
- Long-term trust

Return:

1. Executive summary
2. Recommended option
3. Reasons
4. Rejected options and reasons
5. Key assumptions
6. Risks
7. Mitigations
8. Implementation conditions
9. Review date
10. Decision-log entry
```

---

# PART II — EVIDENCE AND RESEARCH PROMPTS

## 15. Focused Evidence Review Prompt

```text
Conduct a focused medical evidence review.

QUESTION:
[Exact question]

POPULATION:
[Population]

INTERVENTION OR EXPOSURE:
[Intervention or exposure]

COMPARATOR:
[Comparator]

OUTCOMES:
[Patient-important outcomes and safety outcomes]

TIME FRAME:
[Time frame]

INTENDED USE:
[Blog / Product Development / Professional Review / Public Education]

Follow this process:

1. Define PICO, PECO, diagnostic, prognostic, mechanistic, or safety framework.
2. Prioritize current guidelines and systematic reviews.
3. Identify pivotal primary studies.
4. Review benefits and harms.
5. Assess risk of bias, inconsistency, indirectness, imprecision, and publication bias.
6. Distinguish clinical outcomes from surrogate outcomes.
7. Identify conflicting evidence.
8. Check applicability to the target population, dose, form, and duration.
9. Check retractions and corrections.
10. Assign certainty: High / Moderate / Low / Very Low.

Return:

- Bottom-line conclusion
- Evidence certainty
- Main supporting evidence
- Main contradictory evidence
- Benefits
- Harms
- Applicability
- Limitations
- Unresolved questions
- Safe public wording
- Wording to avoid
- Verified reference list
- Evidence cutoff date

Status: Evidence Summary — Human Review Required.
```

---

## 16. Clinical Guideline Review Prompt

```text
Review the following clinical guideline for NervLock use.

GUIDELINE:
[Title or link]

Extract and evaluate:

- Issuing organization
- Year and version
- Target population
- Jurisdiction
- Methodology
- Search date
- Recommendation strength
- Evidence certainty
- Major recommendations
- Major changes from prior version
- Applicability to Korea
- Conflicts of interest
- Important limitations
- Areas of disagreement with other guidelines

Return:

1. Executive summary
2. Recommendations table
3. Evidence-strength table
4. What changed
5. What remains unchanged
6. Korean applicability
7. Safe public-facing summary
8. Claims that should not be made
9. Update triggers
10. Verified official reference
```

---

## 17. Single-Study Appraisal Prompt

```text
Critically appraise the following study.

STUDY:
[Full citation or document]

Assess:

- Study question
- Design
- Population
- Sample size
- Intervention or exposure
- Comparator
- Outcomes
- Follow-up
- Risk of bias
- Statistical analysis
- Effect size
- Confidence intervals
- Clinical significance
- Missing data
- Subgroup analysis
- Funding
- Conflicts of interest
- Generalizability
- Retraction or correction status

Return:

- What the study found
- What it did not establish
- Main strengths
- Main limitations
- Whether causality can be inferred
- Whether the result changes clinical practice
- Whether it can support public content
- Whether it can support a product claim
- Safe wording
- Unsafe wording
```

---

## 18. Mechanism-to-Outcome Review Prompt

```text
Evaluate whether the following mechanism can support the proposed clinical claim.

MECHANISM:
[Describe mechanism]

PROPOSED CLAIM:
[Claim]

Evaluate:

1. Evidence for the mechanism
2. Human evidence
3. Dose and formulation match
4. Target tissue relevance
5. Biomarker relevance
6. Whether patient-important outcomes were demonstrated
7. Whether the mechanism is necessary or sufficient
8. Alternative explanations
9. Safety implications
10. Regulatory permission

Return:

- Mechanistic evidence status
- Clinical outcome evidence status
- Whether the proposed claim is justified
- Conservative wording
- Prohibited wording
- Additional evidence required
```

---

## 19. Safety Review Prompt

```text
Conduct a safety review of the following intervention or ingredient.

SUBJECT:
[Ingredient / product / intervention]

PROPOSED DOSE:
[Dose]

FORM:
[Formulation]

TARGET POPULATION:
[Population]

DURATION:
[Duration]

Review:

- Common adverse effects
- Serious adverse events
- Dose dependence
- Long-term safety
- Drug interactions
- Surgery considerations
- Pregnancy and lactation
- Children and adolescents
- Older adults
- Liver disease
- Kidney disease
- Bleeding risk
- Allergy
- Polypharmacy
- Post-market signals
- Regulatory warnings

Return:

1. Safety summary
2. Contraindications
3. Caution populations
4. Interaction table
5. Monitoring considerations
6. Uncertainty
7. Safe public wording
8. Required product warnings
9. Evidence gaps
```

---

## 20. Reference Verification Prompt

```text
Verify the following references and map them to the proposed claims.

CLAIMS:
[Claim list]

REFERENCES:
[Reference list]

For each reference, verify:

- Existence
- Correct title
- Correct authors
- Journal or issuing body
- Year
- DOI
- PMID or PMCID where applicable
- Full-text or abstract-only access
- Retraction or correction status
- Exact supporting location
- Whether it supports the exact claim
- Whether the population, dose, formulation, and outcome match

Return a table:

| Claim ID | Claim | Source | Access Level | Exact Support | Limitations | Status |

Status values:

- Verified
- Verified With Qualification
- Does Not Support Claim
- Unverified
- Retracted or Corrected

Do not repair or guess missing identifiers.
```

---

# PART III — REGULATORY AND CLAIM PROMPTS

## 21. Regulatory Review Prompt

```text
Review the following public-facing content under NervLock’s Korean regulatory standard.

CONTENT:
[Paste content]

CHANNEL:
[Website / Blog / Instagram / YouTube / Newsletter / Product Page / Advertisement]

PRODUCT OR SERVICE CLASSIFICATION:
[Classification]

COMMERCIAL CONNECTION:
[None / Product name / Product image / Purchase link / Paid promotion / Sponsorship]

Evaluate:

- Overall impression
- Disease language
- Symptom claims
- Product claims
- Physician authority
- Product category confusion
- Medicine-like implication
- Testimonial risk
- Before-and-after risk
- Comparative or superiority claims
- CTA
- Disclosure
- Hashtags
- Metadata
- Structured data
- Need for self-review or specialist review

Return:

- Status: Usable / Usable With Conditions / Revision Recommended / Use Not Recommended / Prohibited
- Risk level: Green / Yellow / Orange / Red
- Problematic wording
- Reason
- Conservative replacement wording
- Required disclosure
- Additional review required

Status: Regulatory Review Draft.
```

---

## 22. Claim Ladder Prompt

```text
Classify each proposed claim using the NervLock claim ladder.

CLAIMS:
[List claims]

For each claim, assign:

- Level 0: Neutral identification
- Level 1: General education
- Level 2: Mechanism
- Level 3: Normal functional support
- Level 4: Symptom or performance benefit
- Level 5: Disease risk reduction or prevention
- Level 6: Diagnosis, treatment, cure, or replacement

Also assess:

- Scientific support
- Product-category permission
- Regulatory risk
- Required qualification
- Public usability
- Safer alternative

Return a claim matrix.
```

---

## 23. Product-Adjacent Education Review Prompt

```text
Review whether the following educational content remains genuinely educational or has become promotional.

CONTENT:
[Paste content]

PRODUCT CONNECTION:
[Describe connection]

Assess:

- Product name
- Product image
- Ingredient specificity
- Mechanism sequence
- Disease language
- Purchase link
- CTA
- Physician endorsement
- Repetition
- Retargeting or paid distribution
- Overall consumer impression

Return:

1. Classification: Pure Education / Product-Adjacent Education / Product Information / Advertisement
2. Main risk factors
3. Required separation controls
4. Wording to remove
5. Safer structure
6. Whether regulatory review is mandatory
```

---

## 24. Physician Authority Review Prompt

```text
Review the use of physician identity in the following content.

CONTENT:
[Paste content]

PHYSICIAN ROLE:
[Author / Reviewer / Founder / Endorser / Presenter]

Assess whether the physician identity is being used for:

- Accountability
- Relevant expertise
- Education
- Product persuasion
- Outcome guarantee
- Authority pressure
- Institutional implication

Return:

- Acceptable uses
- High-risk uses
- Required disclosure
- Wording to revise
- Visual elements to revise
- Final conservative recommendation
```

---

# PART IV — BLOG AND WRITING PROMPTS

## 25. Blog Topic Brief Prompt

```text
Create a NervLock blog content brief.

TOPIC:
[Topic]

PRIMARY AUDIENCE:
[Audience]

PRIMARY INTENT:
[Intent]

LANGUAGE:
[Korean / English]

CANONICAL CHANNEL:
[NervLock Lab / Naver Blog / Other]

Include:

- Content ID
- Article type
- Reader problem
- Bottom-line answer
- Primary query
- Secondary queries
- Query risk
- Search gap
- Evidence question
- Evidence category
- Key uncertainty
- Red flags
- Product proximity
- Regulatory concerns
- H2 outline
- Required references
- Internal links
- Visual requirements
- CTA
- Review level
- Update trigger

Do not write the full article.
```

---

## 26. Long-Form Blog Draft Prompt

```text
Draft a NervLock long-form article using the approved content brief below.

APPROVED BRIEF:
[Paste brief]

APPROVED EVIDENCE SUMMARY:
[Paste summary]

APPROVED CLAIM INVENTORY:
[Paste claims]

REQUIRED STYLE:

- Write like an experienced neurologist speaking to an intelligent reader.
- Use calm, precise, evidence-based language.
- Simplify language, not science.
- State the bottom line near the top.
- Separate mechanism from clinical outcome.
- Separate association from causation.
- State uncertainty and limitations.
- Include red flags where relevant.
- Educate before promoting.
- Do not insert a product unless explicitly authorized.
- Do not fabricate references.

REQUIRED STRUCTURE:

1. Title
2. Summary
3. Main article
4. Practical meaning
5. Red flags when relevant
6. What this does not mean
7. Key takeaways
8. References
9. Author and review block
10. Medical disclaimer

Return one complete public-facing draft.

Status: Public-Facing Draft — Not Approved.
```

---

## 27. Korean Blog Editorial Prompt

```text
Edit the following Korean medical article for NervLock.

ARTICLE:
[Paste article]

Edit for:

- Natural Korean
- Professional but approachable tone
- Clear medical terminology
- Short paragraphs
- Logical headings
- Evidence-calibrated language
- Reduced repetition
- Clear uncertainty
- Clear red flags
- No fear-based wording
- No product pressure
- No stronger title than body

Do not change:

- Approved medical meaning
- Evidence certainty
- Numerical values
- References
- Regulatory wording
- Product claims

Return:

1. Revised article
2. Material changes made
3. Questions or unresolved issues
```

---

## 28. Naver Blog Adaptation Prompt

```text
Adapt the approved NervLock Lab article below for Naver Blog.

CANONICAL ARTICLE:
[Paste article or URL]

REQUIREMENTS:

- Preserve medical meaning
- Preserve uncertainty
- Preserve red flags
- Avoid exact full-text duplication
- Use a more natural Korean opening
- Use platform-appropriate headings
- Keep the title accurate and non-sensational
- Link to the canonical article where useful
- Preserve source traceability
- Do not add product promotion

Return:

1. Naver title
2. Naver post body
3. Suggested image positions
4. Source note
5. Canonical-link recommendation
6. Update relationship

Status: Public-Facing Draft — Not Approved.
```

---

## 29. Article Medical Review Prompt

```text
Conduct a medical safety review of the following article.

ARTICLE:
[Paste article]

Evaluate:

- Factual accuracy
- Differential diagnosis
- Self-diagnosis risk
- Delayed-care risk
- Red flags
- Urgent versus routine care guidance
- Medication advice
- Vulnerable populations
- Safety omissions
- Tone
- Product proximity

Return:

- Status: Usable / Usable With Qualification / Revision Required / Specialist Review Required / Not Recommended
- Material risks
- Exact revisions
- Missing red flags
- Unsafe passages
- Final medical summary
```

---

## 30. Article SEO and GEO Prompt

```text
Review the following approved medical article for SEO and GEO without changing its medical meaning.

ARTICLE:
[Paste article]

PRIMARY QUERY:
[Query]

SECONDARY QUERIES:
[Queries]

LANGUAGE AND MARKET:
[Language / Country]

Review:

- Search intent
- Title
- H1
- Summary
- Answer-first block
- Headings
- Entity clarity
- Extractable statements
- Internal links
- External links
- Metadata
- URL
- Canonical
- Hreflang
- Structured data
- Image requirements
- Author and reviewer signals
- Update date

Do not:

- Strengthen claims
- Use keyword stuffing
- Add unsafe searched phrases as claims
- Promise ranking or AI citation

Return:

1. SEO/GEO diagnosis
2. Recommended title tag
3. Recommended meta description
4. Recommended H1
5. Recommended heading changes
6. Internal-link plan
7. Structured-data recommendation
8. Technical notes
9. Items that require human approval
```

---

# PART V — WEBSITE AND CLAUDE CODE PROMPTS

## 31. Website Strategy Prompt

```text
Develop a NervLock website strategy for the following objective.

OBJECTIVE:
[Objective]

CURRENT WEBSITE:
[Current state]

TARGET AUDIENCE:
[Audience]

GOVERNING DOCUMENTS:
- 01_Brand_Guide.md
- 02_Brand_Positioning.md
- 08_SEO_GEO_Guide.md
- 10_Website_Guide.md

Preserve the required journey:

Brain Health → Education → Science → Trust → Products

Return:

1. Strategic objective
2. User journeys
3. Information architecture
4. Page hierarchy
5. Navigation
6. Content requirements
7. Trust signals
8. Product-separation controls
9. SEO/GEO requirements
10. Technical implications
11. Risks
12. Implementation phases
13. Final recommendation
```

---

## 32. Claude Code Standard Task Prompt

```text
CLAUDE.md를 준수하고 다음 작업 지시서를 읽어라.

[TASK FILE PATH]

먼저 현재 사이트 구조, 관련 템플릿, 데이터 구조, 라우팅, 메타데이터, 구조화 데이터, CSS, JavaScript, 배포 방식을 조사하라.

구현 전에 다음을 보고하라.

1. 현재 구조
2. 구현 방법
3. 수정할 파일
4. 새로 만들 파일
5. 영향을 받는 URL
6. 리디렉션 필요 여부
7. SEO 영향
8. 접근성 영향
9. 기존 콘텐츠 보존 방법
10. 백업 및 롤백 방법
11. 예상 위험
12. 테스트 계획

다음 항목은 임의로 변경하지 마라.

- 브랜드 포지셔닝
- 홈페이지 정보 위계
- 의학 문구
- 규제 문구
- 제품 주장
- 참고문헌
- 공개 URL
- Canonical
- Hreflang
- 구조화 데이터 의미
- 승인된 CTA

내 승인 전에는 구현하지 말고 조사 결과와 구현 계획만 보고하라.
```

---

## 33. Claude Code Implementation Prompt

```text
이전에 승인한 구현 계획에 따라 작업하라.

작업 지시서:
[TASK FILE PATH]

필수 조건:

1. 작업 전 백업을 생성한다.
2. 승인된 범위만 수정한다.
3. 기존 블로그 글, URL, 참고문헌, 저자, 검수 정보는 보존한다.
4. 의학 문구와 규제 문구를 임의로 다시 쓰지 않는다.
5. 개발용 파일명이 공개 URL이 되지 않도록 한다.
6. 모바일, 접근성, 성능, Canonical, Hreflang, 구조화 데이터를 검증한다.
7. 공개 전 테스트 결과를 보고한다.
8. 롤백 절차를 제공한다.

완료 후 다음 형식으로 보고하라.

- 변경한 파일
- 새로 만든 파일
- 삭제한 파일
- 변경한 URL
- 추가한 리디렉션
- 메타데이터 변경
- 구조화 데이터 변경
- CSS 변경
- JavaScript 변경
- 접근성 변경
- 성능 변경
- 테스트 결과
- 알려진 문제
- 롤백 방법

승인되지 않은 전략 변경은 제안으로만 분리해 보고하고 구현하지 마라.
```

---

## 34. Website QA Prompt

```text
Review the implemented NervLock website change against the approved specification.

APPROVED SPECIFICATION:
[Paste or link]

IMPLEMENTATION REPORT:
[Paste report]

STAGING URL OR FILES:
[Provide]

Evaluate:

- Strategy
- Information architecture
- Brand consistency
- Medical copy integrity
- Regulatory integrity
- References
- Product separation
- Mobile experience
- Accessibility
- SEO
- GEO
- Canonical
- Hreflang
- Structured data
- Redirects
- Performance
- Security
- Privacy
- Forms
- Rollback

Return:

- Pass / Conditional Pass / Fail
- Critical defects
- Major defects
- Minor defects
- Exact remediation instructions
- Retest requirements
- Publication recommendation
```

---

## 35. Homepage Review Prompt

```text
Review the NervLock homepage for strategic and UX consistency.

HOMEPAGE:
[URL or content]

Confirm the visible sequence:

1. Brain Health
2. Education
3. Science
4. Trust
5. Products

Assess:

- Hero
- Primary CTA
- Topic pathways
- Academy visibility
- Science and evidence section
- Medical leadership
- Product placement
- Trust signals
- Footer
- Mobile hierarchy
- English and Korean consistency

Return:

- Strategic alignment
- UX problems
- Medical or regulatory risks
- SEO/GEO issues
- Required section changes
- Exact Claude Code implementation instructions
```

---

# PART VI — SNS AND IMAGE PROMPTS

## 36. Instagram Content Brief Prompt

```text
Create an Instagram content brief for NervLock.

TOPIC:
[Topic]

PRIMARY AUDIENCE:
[Audience]

FORMAT:
[Carousel / Reel / Story / Static]

OBJECTIVE:
[Education / Discovery / Trust / Myth Correction / Article Promotion]

CANONICAL SOURCE:
[Source]

Include:

- Content ID
- Risk level
- Core message
- Evidence level
- Key uncertainty
- Red flags
- Hook
- Slide or scene structure
- Caption structure
- CTA
- Hashtags
- Visual direction
- Source cue
- Review requirements

Do not create a product CTA unless explicitly authorized.
```

---

## 37. Instagram Carousel Prompt

```text
Create a NervLock Instagram carousel from the approved source below.

APPROVED SOURCE:
[Paste source]

SLIDE COUNT:
[Number or flexible]

FORMAT:
1080 × 1350 portrait

REQUIREMENTS:

- One coherent lesson
- Short accurate cover
- Large text
- Low information density
- One main message per slide
- Preserve uncertainty
- Include red flags where relevant
- No disease-treatment implication
- No product pressure
- Final CTA limited to “🔖 저장” and “➕ 팔로우” when appropriate

Return:

1. Cover text
2. Slide-by-slide copy
3. Visual direction per slide
4. Caption
5. Source note
6. Alt text
7. Medical and regulatory risk notes

Status: Public-Facing Draft — Not Approved.
```

---

## 38. Instagram Story Prompt

```text
Create a four-screen Instagram Story sequence for NervLock.

TOPIC:
[Topic]

APPROVED SOURCE:
[Source]

FORMAT:
1080 × 1920, 9:16

SAFE ZONE:
- Approximately 15% left and right margins
- At least 120 px top margin
- At least 150 px bottom margin
- Keep important content in central 70%

STRUCTURE:

1. Question or hook
2. Core explanation
3. Practical meaning or red flag
4. One interaction or next step

Use large text and one main idea per screen.

Do not include several stickers or CTAs on one screen.
```

---

## 39. Reel Script Prompt

```text
Create a NervLock Reel script.

TOPIC:
[Topic]

TARGET DURATION:
[15–30 sec / 30–60 sec / 60–90 sec]

APPROVED SOURCE:
[Source]

REQUIRED STRUCTURE:

1. Accurate hook
2. Direct answer
3. One explanation or distinction
4. One qualification
5. One practical next step
6. One CTA

REQUIREMENTS:

- Calm physician voice
- No fear
- No diagnosis
- No product pressure
- Preserve red flags
- Preserve evidence uncertainty
- One main idea only

Return:

- Spoken script
- On-screen text
- Scene plan
- Cover title
- Caption
- Source cue
- Safety note
```

---

## 40. Threads Prompt

```text
Adapt the approved NervLock content below into a Threads post or short thread.

SOURCE:
[Source]

REQUIREMENTS:

- First post must remain accurate alone
- Use concise professional language
- Preserve uncertainty
- Do not hide the qualification in the final reply
- No product pressure
- Include one useful takeaway
- Link to the canonical source when appropriate

Return:

- Opening post
- Optional follow-up posts
- Final CTA
- Source note
```

---

## 41. Social Caption Review Prompt

```text
Review this social caption for NervLock.

CAPTION:
[Paste caption]

CHANNEL:
[Instagram / Facebook / Threads]

Assess:

- Accuracy
- Evidence certainty
- Medical safety
- Regulatory risk
- Hook accuracy
- Product proximity
- CTA
- Hashtags
- Tone
- Readability
- Commercial disclosure

Return:

- Usable / Revision Required / Do Not Use
- Risky phrases
- Revised caption
- Required disclaimer or red flags
- Required source note
```

---

## 42. Image Generation Prompt Standard

```text
Create a NervLock visual for the following approved content.

CHANNEL:
[Instagram Feed / Carousel / Story / Reel Cover / YouTube Thumbnail / Website]

FORMAT:
[Dimensions and aspect ratio]

PRIMARY MESSAGE:
[Message]

APPROVED WORDING:
[Exact wording — do not alter]

VISUAL STYLE:
Calm, modern, medically responsible, evidence-based, and consistent with NervLock.

COMPOSITION:
[Describe composition]

SAFE ZONE:
[Define]

MEDICAL REQUIREMENTS:
[Anatomy, labels, disease representation]

PROHIBITED ELEMENTS:
- Disease reversal
- Brain repair
- Glowing neurons implying efficacy
- Pills entering the brain as proof
- Fake diagnostic scans
- Fear imagery
- Medicine-like product implication
- Unauthorized logos
- Copyright imitation

Leave sufficient whitespace and keep important elements away from edges.

The final image requires medical, regulatory, visual, and human review.
```

---

## 43. Image Revision Prompt

```text
Revise the attached NervLock image.

PRESERVE:
- Approved wording
- Main composition
- Core subject
- Brand identity
- Medical meaning

CHANGE ONLY:
[List exact changes]

Examples:
- Increase title size by 15%
- Move main illustration upward
- Increase side margins
- Reduce icon count
- Change illustration style only
- Keep the same character and composition
- Remove product image
- Improve contrast

DO NOT CHANGE:
- Medical meaning
- Evidence level
- CTA
- Logo
- Product claim
- Red flags
```

---

## 44. Medical Image Review Prompt

```text
Review the following image for medical and regulatory accuracy.

IMAGE:
[Attach or describe]

CAPTION:
[Caption]

Assess:

- Anatomy
- Physiology
- Laterality
- Clinical plausibility
- Diagnostic implication
- Treatment implication
- Mechanism versus outcome
- Product implication
- Patient representation
- Fear level
- Text accuracy
- Copyright similarity
- Overall regulatory impression

Return:

- Usable / Usable With Qualification / Revision Required / Do Not Use
- Medical errors
- Regulatory risks
- Exact visual revisions
- Exact wording revisions
```

---

# PART VII — YOUTUBE PROMPTS

## 45. YouTube Video Brief Prompt

```text
Create a NervLock YouTube video brief.

TOPIC:
[Topic]

FORMAT:
[Long-form / Short / Live / Interview / Research Update]

AUDIENCE:
[Audience]

CANONICAL SOURCE:
[Source]

Include:

- Video ID
- Series
- Playlist
- Risk level
- Viewer question
- Bottom-line answer
- Evidence category
- Key uncertainty
- Red flags
- Product proximity
- Hook
- Outline
- Target duration
- Visuals
- B-roll
- Thumbnail concept
- Title options
- Description requirements
- Chapters
- CTA
- Review requirements
```

---

## 46. Long-Form YouTube Script Prompt

```text
Draft a NervLock long-form YouTube script from the approved evidence and brief.

APPROVED BRIEF:
[Paste brief]

APPROVED EVIDENCE:
[Paste evidence]

TARGET DURATION:
[Duration]

REQUIREMENTS:

- State the viewer question early
- Give the bottom line within the opening
- Use conversational but precise language
- Explain terms
- Separate mechanism from outcome
- Separate association from causation
- State uncertainty
- Include practical meaning
- Include red flags where relevant
- Avoid product pressure
- Avoid long introductions
- Avoid physician authority as proof

Return:

1. Full spoken script
2. On-screen text
3. Graphics notes
4. B-roll notes
5. Chapter structure
6. Thumbnail title options
7. Video title options
8. Description draft
9. Pinned-comment draft
10. Reference list

Status: Script Draft — Not Approved for Recording.
```

---

## 47. YouTube Short Prompt

```text
Create one NervLock YouTube Short from the approved source.

SOURCE:
[Source]

TARGET DURATION:
[15–30 / 30–60 / 60–180 seconds]

Use one content atom only:

- Definition
- Misconception
- Red flag
- Evidence takeaway
- Practical distinction

Return:

- Spoken script
- On-screen text
- Visual plan
- Cover title
- Description
- CTA to long-form video or article
- Safety qualification

The Short must not become more certain than the source.
```

---

## 48. Thumbnail Review Prompt

```text
Review the following YouTube thumbnail and title as one combined medical claim.

THUMBNAIL:
[Attach or describe]

TITLE:
[Title]

VIDEO CONCLUSION:
[Actual conclusion]

Assess:

- Accuracy
- Clickbait risk
- Disease fear
- Diagnostic implication
- Product implication
- Physician authority
- Visual exaggeration
- Thumbnail-title consistency
- Script consistency

Return:

- Usable / Revision Required / Do Not Use
- Main risk
- Revised thumbnail text
- Revised title
- Visual correction instructions
```

---

## 49. Rough-Cut Review Prompt

```text
Review the rough cut of a NervLock video.

APPROVED SCRIPT:
[Script]

ROUGH CUT:
[Video or transcript]

Assess:

- Whether editing changed meaning
- Missing qualifications
- Removed red flags
- B-roll implication
- Graphic accuracy
- Product placement
- Music and emotional tone
- Subtitle accuracy
- CTA
- Total impression

Return:

- Pass / Conditional Pass / Fail
- Time-coded issues
- Exact edit instructions
- Re-review requirements
```

---

# PART VIII — PRODUCT DEVELOPMENT PROMPTS

## 50. Product Opportunity Assessment Prompt

```text
Conduct a NervLock Product Opportunity Assessment.

PRODUCT CONCEPT:
[Concept]

TARGET POPULATION:
[Population]

PROPOSED NEED:
[Need]

Assess:

- Strategic fit
- Consumer need
- Lifestyle alternatives
- Medical-care boundary
- Evidence
- Safety
- Regulatory classification
- Quality feasibility
- Manufacturing feasibility
- Competitive landscape
- Differentiation
- Cost
- Brand risk
- Educational value
- Key uncertainties

Return one recommendation:

- Proceed to Evidence Review
- Proceed With Conditions
- Revise Concept
- Hold Pending Data
- Stop Development

Do not recommend proceeding solely because of market size or ingredient popularity.
```

---

## 51. Ingredient Dossier Prompt

```text
Create an ingredient dossier for NervLock.

INGREDIENT:
[Ingredient]

PROPOSED FORM:
[Form]

PROPOSED DOSE:
[Dose]

TARGET POPULATION:
[Population]

Review:

- Identity
- Source
- Legal status
- Human evidence
- Effective dose
- Formulation relevance
- Bioavailability
- Safety
- Interactions
- Stability
- Quality risks
- Contaminants
- Supply reliability
- Regulatory function
- Claim territory
- Evidence gaps

Return:

1. Ingredient summary
2. Evidence table
3. Dose rationale
4. Safety table
5. Quality specifications
6. Regulatory assessment
7. Permitted wording
8. Prohibited wording
9. Go / Conditional / Reject recommendation
```

---

## 52. Formula Review Prompt

```text
Review the proposed NervLock formula.

FORMULA:
[List ingredients, forms, and doses]

TARGET POPULATION:
[Population]

INTENDED USE:
[Use]

Evaluate each ingredient for:

- Defined need
- Human evidence
- Dose match
- Form match
- Safety
- Interaction
- Stability
- Manufacturing burden
- Claim risk
- Label appeal versus real value

Evaluate the formula for:

- Redundancy
- Underdosing
- Excess dosing
- Capsule burden
- Interaction risk
- Cost
- Simplicity
- Finished-product evidence
- Regulatory feasibility

Return:

- Ingredient-by-ingredient decision
- Keep / Remove / Revise
- Formula-level risks
- Safer formula options
- Additional tests required
- Regulatory notes
- Final recommendation
```

---

## 53. Product Claim Matrix Prompt

```text
Create a product claim matrix.

PRODUCT:
[Product]

CLASSIFICATION:
[Classification]

FORMULA:
[Formula]

PROPOSED CLAIMS:
[List claims]

For each claim, document:

- Claim type
- Scientific support
- Evidence certainty
- Finished-product support
- Product-category permission
- Regulatory risk
- Required qualification
- Permitted wording
- Prohibited wording
- Channel restrictions
- Review status

Return a table suitable for internal governance.
```

---

## 54. Product Page Prompt

```text
Draft a NervLock product page from the approved product dossier.

APPROVED PRODUCT DOSSIER:
[Paste dossier]

APPROVED CLAIM MATRIX:
[Paste matrix]

APPROVED LABEL:
[Paste label]

REQUIRED ORDER:

1. Product name
2. Product category
3. Neutral description
4. Intended consumer need
5. Who it is for
6. Who should use caution
7. Ingredients and exact amounts
8. Ingredient rationale
9. What evidence supports
10. What remains uncertain
11. How to use
12. Safety and interactions
13. Quality and manufacturing
14. FAQ
15. References
16. Commercial information
17. Purchase CTA

Do not use disease-treatment claims, guaranteed outcomes, unsupported superiority, or doctor guarantees.

Status: Public-Facing Draft — High-Risk Review Required.
```

---

# PART IX — REPURPOSING PROMPTS

## 55. General Repurposing Prompt

```text
Repurpose the approved NervLock source below.

SOURCE:
[Paste source]

SOURCE VERSION:
[Version]

TARGET CHANNEL:
[Channel]

TARGET FORMAT:
[Format]

TARGET AUDIENCE:
[Audience]

Preserve:

- Main conclusion
- Evidence certainty
- Population
- Outcome
- Dose where relevant
- Limitations
- Red flags
- Safety
- Product status
- Disclosure

Do not:

- Strengthen the claim
- Remove material qualifications
- Add product promotion
- Add new medical advice
- Add new statistics
- Add unverified references
- Convert association into causation
- Convert mechanism into outcome

Return:

1. Derivative draft
2. Claim-fidelity check
3. Changes made
4. Items requiring new review
5. Canonical-source link

Status: Derivative Draft — Not Approved.
```

---

## 56. Repurposing Fidelity Audit Prompt

```text
Compare the source and derivative for fidelity.

SOURCE:
[Source]

DERIVATIVE:
[Derivative]

Return a matrix:

| Element | Source | Derivative | Preserved / Changed | Risk |

Review:

- Main conclusion
- Certainty
- Population
- Outcome
- Dose
- Limitations
- Red flags
- Safety
- Product status
- Disclosure
- CTA
- Commercial status

Conclude:

- Safe to proceed
- Revision required
- New evidence review required
- Regulatory reclassification required
- Do not publish
```

---

## 57. Correction Propagation Prompt

```text
A canonical NervLock source has been corrected.

SOURCE ID:
[ID]

CORRECTION:
[Describe correction]

DERIVATIVE MAP:
[Paste map]

Create a correction-propagation plan.

For every derivative, determine:

- Materiality
- Required change
- Whether publication should pause
- Whether paid promotion should stop
- Whether visible correction is required
- Whether withdrawal is required
- Reviewer
- Deadline

Return:

1. Priority order
2. Asset-by-asset action table
3. Public correction language
4. Internal incident record
5. Completion checklist
```

---

# PART X — QA, REVIEW, AND INCIDENT PROMPTS

## 58. Final Public-Facing QA Prompt

```text
Conduct a final NervLock QA review of the following public-facing asset.

ASSET:
[Paste or attach]

CHANNEL:
[Channel]

RISK LEVEL:
[Level]

Review:

- Scientific accuracy
- Medical safety
- Regulatory compliance
- Reference integrity
- Brand consistency
- Audience fit
- Readability
- SEO/GEO
- Visual accuracy
- Accessibility
- Product separation
- Disclosure
- Version control

Return:

- Final status: Pass / Conditional Pass / Fail
- Critical defects
- Major defects
- Minor defects
- Required corrections
- Re-review requirements
- Human approval required

Do not label as approved unless human approval has already been documented.
```

---

## 59. Claim Audit Prompt

```text
Audit every claim in the following asset.

ASSET:
[Paste asset]

Create a table:

| Claim ID | Exact Claim | Claim Type | Evidence | Certainty | Regulatory Risk | Required Qualification | Status |

Include:

- Title claims
- Headline claims
- Visual claims
- Numerical claims
- Mechanism claims
- Safety claims
- Product claims
- CTA implications
- Metadata claims

Flag any claim that is:

- Unsupported
- Broader than evidence
- More certain than evidence
- Inconsistent with product classification
- Misleading by overall impression
```

---

## 60. Cross-Document Consistency Prompt

```text
Review the following NervLock documents or assets for internal consistency.

DOCUMENTS:
[List documents]

Compare:

- Brand category
- Mission
- Audience
- Product role
- Evidence categories
- Claim wording
- Regulatory boundaries
- Author identity
- Product identity
- Dose
- Safety
- URLs
- Dates
- Review status

Return:

- Consistent items
- Conflicts
- Highest-priority governing source
- Required corrections
- Decision items
- Recommended version updates
```

---

## 61. Scientific Correction Prompt

```text
A possible scientific error has been identified.

CONTENT:
[Content]

POSSIBLE ERROR:
[Describe]

Evaluate:

- Whether an error exists
- Medical significance
- Regulatory significance
- Whether readers could be harmed
- Whether claims or products are affected
- Whether derivatives are affected
- Whether paid promotion should stop

Return:

1. Error classification
2. Correct interpretation
3. Immediate actions
4. Public correction language
5. Derivative update plan
6. Reference update
7. Preventive action
```

---

## 62. Product Safety Incident Prompt

```text
Prepare an internal response to a possible NervLock product safety incident.

INCIDENT:
[Describe]

PRODUCT:
[Product]

LOT:
[Lot if known]

Assess:

- Severity
- Causality uncertainty
- Reporter information needed
- Immediate safety action
- Medical escalation
- Regulatory reporting
- Product hold
- Public communication
- Social-media response
- Customer support response
- Recall threshold
- Documentation

Return:

- Immediate action plan
- Information collection checklist
- Escalation pathway
- Public holding statement
- Internal incident log entry
- Follow-up review schedule

Do not admit causality before appropriate assessment.
```

---

## 63. Crisis Communication Prompt

```text
Draft a NervLock crisis communication plan.

CRISIS:
[Describe crisis]

KNOWN FACTS:
[Facts]

UNKNOWN FACTS:
[Unknowns]

AFFECTED CHANNELS:
[Channels]

Return:

1. Situation summary
2. Immediate internal actions
3. What must not be said
4. Holding statement
5. Website notice
6. Social post
7. Customer-support response
8. Media response
9. Update cadence
10. Approval path
11. Documentation and archive plan

Do not speculate.

Do not minimize safety.

Do not create false reassurance.
```

---

# PART XI — WORKFLOW AND MANAGEMENT PROMPTS

## 64. Content Calendar Prompt

```text
Create a NervLock content calendar for the following period.

PERIOD:
[Dates]

PRIORITIES:
[Current priorities]

CHANNELS:
[Channels]

CAPACITY:
[Capacity]

Build a balanced calendar across:

- Brain health foundations
- Memory and cognitive aging
- Sleep
- Exercise and nutrition
- Stress, autonomic function, and pain
- Neurological symptoms and conditions
- Science and evidence
- Brand trust
- Product science, only when appropriate

For each item, include:

- Date
- Channel
- Format
- Topic
- Audience
- Objective
- Risk
- Canonical source
- Review requirement
- CTA
- Product proximity
- Repurposing relationship

Avoid excessive duplication, disease fear, and product clustering.
```

---

## 65. Current Priorities Prompt

```text
Update the NervLock current-priorities document.

INPUTS:
- Active projects
- Deadlines
- Dependencies
- Risks
- Resources
- Decisions required

Organize into:

1. Immediate
2. This week
3. This month
4. Next quarter
5. Waiting
6. Blocked
7. Decision required
8. Completed

For each priority, include:

- Owner
- Deadline
- Dependency
- Risk
- Next action
- Required review
```

---

## 66. Decision Log Prompt

```text
Create a NervLock decision-log entry.

DECISION:
[Decision]

DATE:
[Date]

OWNER:
[Owner]

CONTEXT:
[Context]

OPTIONS CONSIDERED:
[Options]

RATIONALE:
[Rationale]

Record:

- Final decision
- Why it was chosen
- Rejected alternatives
- Evidence or governing documents
- Risks
- Conditions
- Implementation owner
- Review trigger
- Reversal conditions
```

---

## 67. Revision Log Prompt

```text
Create a revision-log entry for the following document or asset.

DOCUMENT:
[Document]

OLD VERSION:
[Version]

NEW VERSION:
[Version]

CHANGES:
[Changes]

Record:

- Date
- Author
- Reviewer
- Material changes
- Reason
- Evidence or policy trigger
- Affected assets
- Required derivative updates
- Approval status
```

---

# PART XII — TOOL-SPECIFIC ROLE PROMPTS

## 68. ChatGPT Strategic Headquarters Prompt

```text
Act as NervLock Strategic Headquarters.

Your responsibilities are:

- Strategy
- Evidence review
- Medical interpretation
- Regulatory risk review
- Brand review
- SEO/GEO review
- Implementation instruction
- Final pre-publication QA

Do not:

- Treat your output as final human approval
- Fabricate sources
- Allow marketing to override evidence
- Allow implementation convenience to change strategy
- Allow products to lead the platform

Return a decision-oriented output with:

- Recommendation
- Rationale
- Risks
- Required revisions
- Implementation instructions
- Human approval items
```

---

## 69. Claude Drafting Partner Prompt

```text
Act as a NervLock drafting and organization partner.

Use only the approved strategy, brief, evidence, and wording provided.

You may:

- Draft
- Organize
- Improve readability
- Adapt format
- Summarize approved material

You must not:

- Change brand positioning
- Strengthen medical claims
- Remove uncertainty
- Add product promotion
- Invent references
- Change regulatory wording
- Approve publication

When you identify a strategic or medical issue, flag it instead of silently changing it.

Return:

- Draft
- Changes made
- Issues requiring review
- Missing information
```

---

## 70. Claude Code Implementation Partner Prompt

```text
Act as a technical implementation partner for NervLock.

You may implement approved:

- HTML
- CSS
- JavaScript
- Components
- Metadata
- Structured data
- Canonical
- Hreflang
- Sitemap
- Redirects
- Accessibility
- Performance
- Forms
- Analytics

You must not independently alter:

- Brand positioning
- Medical copy
- Product claims
- Regulatory wording
- References
- Page hierarchy
- Public URLs
- Visual identity
- Approved CTAs

Before implementation, inspect the current system and report the plan.

After implementation, provide a complete change report, test results, and rollback instructions.
```

---

## 71. Image Tool Prompt Boundary

```text
Use the image-generation system only to execute an approved visual brief.

The system may create:

- Educational illustrations
- Social visuals
- Thumbnails
- Conceptual medical diagrams
- Backgrounds
- Product mockups before final photography

The system must not create:

- Fake patients
- Fake medical scans
- Fake testimonials
- Disease reversal
- Unsupported product effects
- Copyright imitation
- Unapproved product packaging

All outputs require human visual, medical, regulatory, and rights review.
```

---

## 72. Video Tool Prompt Boundary

```text
Use AI video tools only to execute an approved script and storyboard.

Preserve:

- Approved wording
- Medical meaning
- Evidence level
- Character consistency
- Organ-rendering consistency
- Visual style
- Caption placement
- Safe zones

Do not:

- Add unapproved scenes
- Create product efficacy
- Add dramatic fear
- Alter physician identity
- Use fake patients
- Publish automatically

Return a draft for review, not a final approved video.
```

---

# PART XIII — PROMPT QUALITY CONTROL

## 73. Prompt Completeness Checklist

Before using a prompt, confirm:

1. Objective is defined
2. Audience is defined
3. Channel is defined
4. Language is defined
5. Risk level is defined
6. Governing documents are listed
7. Approved sources are listed
8. Evidence requirements are stated
9. Regulatory requirements are stated
10. Prohibited changes are stated
11. Output format is stated
12. Output status is stated
13. Final human approval boundary is stated
14. Version or date is stated where relevant
15. Update trigger is stated where relevant

---

## 74. Prompt Failure Patterns

Avoid prompts that:

- Ask for virality without accuracy constraints
- Ask for persuasion before defining evidence
- Ask for product claims before classification
- Ask for “medical advice” without audience and safety boundaries
- Ask for research summaries without source verification
- Ask for citations without requiring verification
- Ask Claude Code to redesign strategy
- Ask an image tool to invent medical content
- Ask an AI system to approve its own work
- Ask for translation without localization review
- Ask for website changes without backup and rollback
- Ask for automated publishing of high-risk content

---

## 75. Prompt Escalation Triggers

Escalate before proceeding when:

- Product classification is unresolved
- Claim permission is unclear
- Evidence is conflicting
- Evidence is very low certainty
- A disease name is combined with a product
- A physician is combined with a purchase CTA
- A patient story may identify a person
- A dose recommendation may influence treatment
- A platform policy may have changed
- A guideline may be outdated
- A source may be retracted
- A website change may alter URLs
- An AI output contains an unverified reference
- A visual implies treatment
- A derivative changes commercial status

---

## 76. Prompt Versioning

Prompts used repeatedly should have:

- Prompt ID
- Version
- Owner
- Last updated
- Intended tool
- Risk level
- Required inputs
- Expected output
- Review cycle

Recommended format:

`NL-PROMPT-[DOMAIN]-[NUMBER]-vX.Y`

Example:

`NL-PROMPT-BLOG-001-v1.0`

Do not use ambiguous prompt names such as:

- Best prompt
- Final prompt
- Latest prompt
- New prompt
- Viral prompt

---

## 77. Prompt Storage

Approved prompts should be stored in:

- This core library
- Approved task templates
- Claude project instructions
- CLAUDE.md where appropriate
- Controlled team documentation

Do not rely solely on:

- Chat history
- Personal notes
- Screenshots
- Unversioned text files
- Platform memory

---

## 78. Prompt Review Cadence

### Every 3 Months

- Platform prompts
- Regulatory prompts
- SEO/GEO prompts
- YouTube and SNS prompts
- Product prompts

### Every 6 Months

- Evidence prompts
- Blog prompts
- Website prompts
- QA prompts

### Trigger Review

- New law
- New platform policy
- New product category
- New AI tool
- New website architecture
- Major evidence standard change
- Major incident

---

## 79. Minimum Prompt Standard

A NervLock prompt is ready for operational use only when it is:

- Specific
- Traceable
- Evidence-aware
- Risk-aware
- Channel-aware
- Brand-consistent
- Regulatorily cautious
- Explicit about prohibited changes
- Explicit about output format
- Explicit about approval status
- Version-controlled

A longer prompt is not automatically better.

A clear prompt is better than a vague long prompt.

A detailed prompt is still unsafe when it omits evidence, regulation, or human approval.

---

## 80. Final Prompt Principles

A prompt is an operating specification.

It is not merely a request for text.

A good prompt defines:

- The question
- The audience
- The evidence
- The limits
- The channel
- The risks
- The output
- The reviewer

AI may accelerate work.

AI may not redefine truth.

AI may draft.

AI may not approve itself.

AI may simplify.

AI may not remove necessary uncertainty.

AI may adapt.

AI may not strengthen claims.

AI may implement.

AI may not change strategy without approval.

The purpose of this prompt library is to make every NervLock AI task more precise, more reproducible, and safer to review.