# VetKnowledgeTree 第三輪全面品質審查 — 擴建待辦事項

> **審查日期**: 2026-02-28
> **審查委員會**: 8 位虛擬獸醫專科教授
> **基線分數**: 86.25/100（全專案加權平均）
> **目標分數**: ≥ 95/100

---

## 審查評分總覽

| 專科 | 覆蓋度 | 邊邏輯 | 內容品質 | 題目 | 案例 | 路徑 | 加權分 |
|------|--------|--------|----------|------|------|------|--------|
| CARDIO | 95 | 90 | 97 | 88 | 90 | 92 | **92** |
| IM | 80 | 85 | 95 | 88 | 85 | 88 | **87** |
| DERM | 85 | 82 | 93 | 88 | 80 | 85 | **86** |
| SURG | 80 | 75 | 92 | 87 | 82 | 84 | **83** |
| NEURO | 90 | 90 | 90 | 90 | 80 | 90 | **88** |
| ONCO | 70 | 90 | 90 | 90 | 80 | 90 | **83** |
| ECC | 80 | 80 | 90 | 90 | 80 | 90 | **85** |
| CPATH | 90 | 78 | 93 | 88 | 85 | 82 | **86** |

---

## Phase 1：修正 Critical 缺陷 + 結構邊缺失

### 1.1 Critical — 內容錯置修正

- [ ] **C-1 / C-2 — IM L1 Contents Map 錯配**
  - 檔案: `src/data/seed/im/contents.ts`
  - 問題: L1-001（內分泌生理）的 content 變數名為 `contentRenalPhysiology`，L1-002（腎臟生理）的變數名為 `contentImmunologyBasics`
  - 修正: 核實每個 NodeContent 的 `node_id` 欄位，確認內容與節點標題一致。若為變數名問題則修正變數名；若為實際內容錯配則交換內容
  - 連帶修正: `src/data/seed/im/questions.ts` — L1-001 的 GFR 題目和 L1-002 的 Type II 超敏題目的 node_id 歸屬

- [ ] **C-3 — DERM L1-003 Questions 歸屬錯誤**
  - 檔案: `src/data/seed/derm/questions.ts` (line 421-499)
  - 問題: 8 題皮膚微生物生態內容歸屬至「毛髮生長週期」(DERM-L1-003) 節點
  - 修正: 確認 DERM-L1-003 的實際涵蓋範圍，若需要則調整 node_id 或節點定義

- [ ] **C-4 — CARDIO E-015 邊 source 不一致**
  - 檔案: `src/data/seed/cardio/edges.ts`
  - 問題: 描述「心絲蟲需 X 光評估」但 source 是 CARDIO-L3-004（心包膜積液）而非 L3-005（心絲蟲）
  - 修正: 將 source_node_id 改為 'CARDIO-L3-005' 或修正描述文字

- [ ] **C-5 — CARDIO Q-MMVD-012 答案/解釋矛盾**
  - 檔案: `src/data/seed/cardio/questions.ts`
  - 問題: 答案「4 個分期」vs 解釋「A/B1/B2/C/D 共五個分期」
  - 修正: 統一為「4 個主分期（A-D），其中 B 細分為 B1 和 B2」

- [ ] **C-6 — ONCO SCC（鱗狀上皮細胞癌）缺失**
  - 檔案: `src/data/seed/onco/nodes.ts`, `edges.ts`, `contents.ts`, `questions.ts`
  - 修正: 新增 ONCO-L3-014 SCC 節點 + 邊 + 內容 + 8 題
  - 覆蓋: 貓口腔 SCC、貓鼻平面/耳尖 SCC、犬口腔 SCC、犬甲床 SCC

- [ ] **C-7 — ONCO Insulinoma 缺失**
  - 檔案: `src/data/seed/onco/nodes.ts`, `edges.ts`, `contents.ts`, `questions.ts`
  - 修正: 新增 ONCO-L3-015 Insulinoma 節點 + 邊 + 內容 + 8 題
  - 注意: 內容已存在於 L2-002 副腫瘤章節，可重構提升為獨立 L3

### 1.2 High — 結構邊缺失修正

- [ ] **H-10 — SURG 5 條 L3→L5 治療邊缺失**
  - 檔案: `src/data/seed/surg/edges.ts`
  - 新增:
    - SURG-E-060: L3-002(脾臟) → L5-001(軟組織手術)
    - SURG-E-061: L3-006(會陰疝) → L5-001
    - SURG-E-062: L3-007(骨折) → L5-002(骨科手術)
    - SURG-E-063: L3-008(MPL) → L5-002
    - SURG-E-064: L3-005(IVDD) → L5-002

- [ ] **H-11 — CPATH→CARDIO 跨科邊缺失**
  - 檔案: `src/data/seed/cross-specialty-edges.ts`
  - 新增:
    - CROSS-CPATH-CARDIO-001: L4-001(CBC) → CARDIO-L3-005(心絲蟲) prerequisite
    - CROSS-CPATH-CARDIO-002: L4-004(凝血) → CARDIO-L3-010(ATE) prerequisite
    - CROSS-CPATH-CARDIO-003: L4-002(生化) → CARDIO-L3-003(HCM) prerequisite (cardiac biomarkers)

- [ ] **H-12 — CPATH→NEURO 跨科邊缺失**
  - 檔案: `src/data/seed/cross-specialty-edges.ts`
  - 新增:
    - CROSS-CPATH-NEURO-001: L4-006(體液分析) → NEURO-L3-003(GME/MUO) prerequisite
    - CROSS-CPATH-NEURO-002: L4-006 → NEURO-L3-001(癲癇) prerequisite

- [ ] **H-13 — CPATH 內分泌檢測→IM 跨科邊缺失**
  - 檔案: `src/data/seed/cross-specialty-edges.ts`
  - 新增:
    - CROSS-CPATH-IM-010: L4-010(內分泌) → IM-L3-001(Cushing) prerequisite
    - CROSS-CPATH-IM-011: L4-010 → IM-L3-002(甲低) prerequisite
    - CROSS-CPATH-IM-012: L4-010 → IM-L3-003(甲亢) prerequisite
    - CROSS-CPATH-IM-013: L4-010 → IM-L3-006(DM) prerequisite

### 1.3 Medium — 錯字修正（順帶處理）

- [ ] DERM paths.ts: 「刮搖」→「刮搔」（全域替換）
- [ ] ONCO paths.ts line 71: 「乳腔」→「乳腺」
- [ ] ONCO paths.ts line 66: 「実驗室」→「實驗室」
- [ ] ECC paths.ts line 68: 「蟾蛍」→「蟾蜍」

### Phase 1 驗證標準
- [ ] TypeScript 編譯 0 errors
- [ ] 審計腳本 `audit-seed-quality.ts` 通過（≥ 98/100）
- [ ] 所有新增邊的 source/target node_id 存在且有效
- [ ] 所有修正的 questions node_id 與節點標題一致

---

## Phase 2：新增缺失節點 + 邊 + 內容

### 2.1 IM 內科擴展（+5 節點）

- [ ] **IM-L2-007**: 呼吸道發炎與氣道重塑機轉
  - 邊: IM-L1-004 → IM-L2-007 (builds_on)

- [ ] **IM-L3-020**: 貓下呼吸道疾病/貓氣喘 (Feline Asthma / FLAD)
  - 邊: IM-L2-007 → IM-L3-020 (clinical_apply), IM-L3-020 → IM-L4-xxx (clinical_apply)
  - 台灣臨床高頻，需標註物種（貓）

- [ ] **IM-L3-021**: 犬貓細菌性肺炎 (Bacterial Pneumonia)
  - 邊: IM-L2-007 → IM-L3-021 (clinical_apply)
  - 含吸入性肺炎

- [ ] **IM-L3-022**: FeLV/FIV 逆轉錄病毒感染
  - 邊: IM-L2-003 → IM-L3-022 (clinical_apply)
  - 台灣收容所盛行率資料

- [ ] **IM-L3-023**: 犬細小病毒腸炎 (CPV)
  - 邊: IM-L2-003 → IM-L3-023 (clinical_apply)
  - 跨科邊: → ECC (急診管理)

### 2.2 DERM 皮膚科擴展（+2 節點）

- [ ] **DERM-L3-014**: 肥大細胞瘤 (Mast Cell Tumor)
  - Patnaik/Kiupel 分級、c-KIT 突變、2-3 cm 手術邊界
  - 跨科邊: → ONCO-L3-002 (same_disease), → SURG (手術邊界)

- [ ] **DERM-L4-005**: 皮膚組織病理學 (Dermatohistopathology)
  - 邊: DERM-L3-010(天疱瘡) → L4-005, DERM-L3-011(藥物反應) → L4-005, DERM-L3-013(CTCL) → L4-005

### 2.3 SURG 外科擴展（+3 節點）

- [ ] **SURG-L3-016**: 泌尿外科（膀胱切開/尿道手術）
  - 修復 CASE-SURG-003 的 required_nodes 依賴

- [ ] **SURG-L3-017**: 乳腺腫瘤外科
  - 跨科邊: → ONCO-L3-006 (clinical_apply)

- [ ] **SURG-L3-018**: FHO / 髖關節外科
  - Legg-Calve-Perthes、髖關節骨折、嚴重 OA

### 2.4 NEURO 神經科擴展（+1 節點）

- [ ] **NEURO-L4-005**: EMG/電生理診斷 (Electrodiagnostics)
  - 邊: NEURO-L3-006(MG) → L4-005, NEURO-L3-005(多發性神經根炎) → L4-005

### 2.5 ONCO 腫瘤科擴展（+1 節點）

- [ ] **ONCO-L5-006**: 靶向治療/TKI (Targeted Therapy)
  - Toceranib, Masitinib
  - 邊: ONCO-L3-002(MCT) → L5-006, ONCO-L2-001 → L5-006

### 2.6 ECC 急診科擴展（+1 節點）

- [ ] **ECC-L3-014**: 急性腹部 (Acute Abdomen)
  - 外科 vs 內科腹部鑑別、AFAST 連結、手術時機
  - 跨科邊: → SURG-L3-001(GDV), → SURG-L3-003(腸道異物)

### 2.7 跨科邊補強

- [ ] ONCO→ECC: 副腫瘤高鈣血症→急診、化療後 febrile neutropenia→敗血症
- [ ] ECC L4-001(ABCDE) → L4-002(AFAST) builds_on 邊
- [ ] IM-L1-002 → L2-005(酸鹼) builds_on 邊
- [ ] NEURO GME 節點標題更新為 MUO

### 2.8 每個新節點需包含

- nodes.ts: 完整節點定義（id, title, title_en, specialty, layer, difficulty, tags, estimated_minutes, species）
- edges.ts: ≥1 prerequisite 邊（來自 L1/L2）+ ≥1 clinical_apply 邊（指向 L4/L5）
- contents.ts: 完整 NodeContent（summary, learning_objectives≥3, key_points≥3, body≥500chars, clinical_pearl, common_mistakes≥2, references≥3, disease_data 11 欄位）
- questions.ts: 8 題（5 MCQ + 1 T/F + 2 case_based）

### Phase 2 驗證標準
- [ ] TypeScript 編譯 0 errors
- [ ] 審計腳本 `audit-seed-quality.ts` 通過（≥ 98/100）
- [ ] 所有新節點被 index.ts 正確匯入
- [ ] 新節點的 body 章節 ≥ 10 chars 實質內容
- [ ] 新節點的 references 含 textbook + guideline + journal

---

## Phase 3：補齊題目 + 病例 + 品質微調

### 3.1 CARDIO Phase 2A 題目補齊（+35 題）

- [ ] CARDIO-L2-004 (先天心病機轉): +5 題（至 8 題）
- [ ] CARDIO-L3-006 (先天心病): +5 題
- [ ] CARDIO-L3-007 (心律不整各論): +5 題
- [ ] CARDIO-L3-008 (心內膜炎): +5 題
- [ ] CARDIO-L3-009 (肺高壓): +5 題
- [ ] CARDIO-L3-010 (貓 ATE): +5 題
- [ ] CARDIO-L5-004 (分期管理): +5 題

### 3.2 新節點題目（~104 題）

- [ ] IM 5 新節點 × 8 題 = 40 題
- [ ] DERM 2 新節點 × 8 題 = 16 題
- [ ] SURG 3 新節點 × 8 題 = 24 題
- [ ] NEURO 1 新節點 × 8 題 = 8 題
- [ ] ONCO 1 新節點（TKI L5）× 8 題 = 8 題
- [ ] ECC 1 新節點 × 8 題 = 8 題

### 3.3 病例替換/新增

- [ ] CARDIO: 替換 CASE-008 (PDA 重複) → 心律不整急診處理 case
- [ ] SURG: 替換 CASE-002 (GDV 重複) → IVDD 手術決策 case
- [ ] ECC: 新增 CPR/RECOVER case
- [ ] ECC: 新增 DKA 管理 case
- [ ] ONCO: 新增 OSA 截肢決策 case

### 3.4 其他 Medium/Low 修正

- [ ] CARDIO: differential 邊補充（+3-5 條）
- [ ] CARDIO: 心絲蟲納入基礎路徑
- [ ] DERM: 膿皮症→治療邊新增
- [ ] DERM: L2-002 角化異常 → 膿皮症邊新增
- [ ] CPATH: L4→L5 邊補充（凝血/血氣/尿液/內分泌→整合判讀）
- [ ] IM: Addison's 加入內分泌學習路徑
- [ ] NEURO: L3-012(水腦) ← L1-003(CSF生理) prerequisite 邊
- [ ] ONCO: ONCO-L3-001 標題更新含貓淋巴瘤

### Phase 3 驗證標準
- [ ] TypeScript 編譯 0 errors
- [ ] ESLint 0 errors, 0 warnings
- [ ] 審計腳本 `audit-seed-quality.ts` = 100/100
- [ ] 審計腳本 `audit-fullstack.ts` = 200/200
- [ ] 所有新增題目有 correct_answer + explanation
- [ ] 所有新增病例有 ≥5 steps + expert_pathway

---

## 預期成果

| 指標 | 修正前 | Phase 1 後 | Phase 2 後 | Phase 3 後 |
|------|--------|-----------|-----------|-----------|
| 節點 | 233 | 235 (+2 ONCO) | ~250 (+15) | ~250 |
| 邊(科內) | 479 | 484 (+5 SURG) | ~515 (+31) | ~525 (+10) |
| 跨科邊 | 81 | 92 (+11) | ~100 (+8) | ~100 |
| 題目 | 1614 | 1630 (+16) | 1630 | ~1769 (+139) |
| 病例 | 71 | 71 | 71 | ~76 (+5) |
| 品質分數 | 86.25 | ~90 | ~93 | ≥95 |
| Critical 問題 | 7 | 0 | 0 | 0 |
| High 問題 | 22 | 15 | 0 | 0 |

---

*文件建立時間: 2026-02-28*
*執行方式: 全自動三階段 + 每階段驗證通過後才進入下一階段*
