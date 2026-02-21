import type { NodeContent } from '@/types/knowledge';

const now = '2026-02-15T00:00:00Z';

/** CKD（慢性腎病）— 疾病型 */
const contentCKD: NodeContent = {
  id: 'CONTENT-IM-L3-004',
  node_id: 'IM-L3-004',
  version: 1,
  summary: '慢性腎病（CKD）是犬貓最常見的腎臟疾病，盛行率隨年齡增加。IRIS（International Renal Interest Society）將 CKD 分為四期，以血清肌酐（Creatinine）和 SDMA 為分期依據。早期發現與積極管理可顯著延長存活時間。',
  learning_objectives: [
    '運用 IRIS 分期系統正確分類 CKD 病患',
    '解釋 CKD 的病理生理機轉（腎元減少、腎小管間質纖維化）',
    '列出 CKD 各分期的治療建議與飲食管理',
    '說明 SDMA 相較於肌酐在早期偵測的優勢',
    '制定 CKD 病患的長期監測計畫',
  ],
  key_points: [
    'IRIS 分期：Stage 1（Cre < 1.4 犬/<1.6 貓）、Stage 2（1.4-2.8/1.6-2.8）、Stage 3（2.9-5.0）、Stage 4（> 5.0）',
    'SDMA > 14 μg/dL 提示早期腎功能下降（比 Cre 早 17 個月偵測到腎功能下降）',
    'IRIS 亞分期：蛋白尿（UPC）和血壓',
    '飲食管理：腎臟處方飲食（限磷、適量蛋白、omega-3 脂肪酸）',
    '藥物：Benazepril/Telmisartan（抗蛋白尿）、磷結合劑、紅血球生成素',
    '貓 CKD 盛行率 > 30%（> 15 歲）',
  ],
  body: `# 慢性腎病 (Chronic Kidney Disease, CKD)

## 一、病理機制 (Pathophysiology)

CKD 的核心為**腎元 (nephron) 不可逆喪失**與進行性**腎小管間質纖維化 (tubulointerstitial fibrosis)**。

**機轉鏈**：起始損傷→腎元數量減少→殘餘腎元代償性肥大與超濾過 (hyperfiltration)→腎絲球灌注壓升高→RAAS 活化（Angiotensin II 促進 TGF-β 釋放）→蛋白尿毒性（濾出蛋白觸發 NF-κB→MCP-1、TNF-α→間質炎症）→肌纖維母細胞沉積細胞外基質→腎小管萎縮→進一步腎元喪失（惡性循環）

[圖片:CKD progression cycle — nephron loss → hyperfiltration → RAAS → fibrosis → further loss]

**犬貓差異**：貓最常見慢性腎小管間質性腎炎，多數病因不明；犬更常見腎絲球腎炎與遺傳性腎病（PKD、類澱粉沉著症）。

**磷代謝軸線 (CKD-MBD)**：腎元減少→磷排泄下降→高磷血症→FGF-23/PTH 升高→繼發性腎性副甲狀腺亢進→骨骼礦化異常與軟組織鈣化。

## 二、臨床表現與診斷 (Clinical Signs & Diagnosis)

| 臨床表現 | 犬 | 貓 | 出現時期 |
|---------|----|----|---------|
| 多渴多尿 (PU/PD) | 常見 | 常見 | 早期 Stage 1-2 |
| 體重減輕/肌肉流失 | 常見 | 常見 | 進行性 |
| 食慾下降 | Stage 3+ | Stage 2+ | 進行性 |
| 嘔吐 | 常見 | 較少 | Stage 3-4 |
| 口腔潰瘍/口臭 | Stage 4 | Stage 4 | 晚期 |
| 非再生性貧血 | Stage 3-4 | Stage 3-4 | 晚期 |
| 高血壓視網膜病變 | 少見 | 常見 | 任何分期 |

### IRIS 分期系統 (2023 更新)

| Stage | 犬 Creatinine | 貓 Creatinine | SDMA | 臨床意義 |
|-------|-------------|-------------|------|---------|
| 1 | < 1.4 mg/dL | < 1.6 mg/dL | < 18 μg/dL | 非氮血症期 |
| 2 | 1.4-2.8 | 1.6-2.8 | 18-35 | 輕度氮血症 |
| 3 | 2.9-5.0 | 2.9-5.0 | 36-54 | 中度氮血症 |
| 4 | > 5.0 | > 5.0 | > 54 | 重度氮血症 |

**亞分期**：蛋白尿 UPC（< 0.2 非蛋白尿 / 0.2-0.5 犬 0.2-0.4 貓 邊緣 / > 0.5 犬 > 0.4 貓 蛋白尿）；血壓（< 140 正常 / 140-159 前期 / 160-179 高血壓 / ≥ 180 嚴重）

| 檢測 | 敏感度 | 特異度 | 備註 |
|------|--------|--------|------|
| SDMA | 高（40% 腎元喪失即偵測） | 高 | 不受肌肉量影響 |
| Creatinine | 低（需 >75% 喪失） | 中 | 受肌肉量、脫水影響 |
| USG | 中 | 中 | 須排除其他 PU/PD 原因 |

## 三、治療策略 (Treatment)

| 分期 | 治療措施 | 藥物與劑量 |
|------|---------|-----------|
| Stage 1-2 | 腎臟處方飲食 + 充足飲水 + 抗蛋白尿 | [藥物:Benazepril] 0.5 mg/kg PO SID 或 [藥物:Telmisartan] 1 mg/kg PO SID |
| Stage 2-3 | 上述 + 磷結合劑 | [藥物:Aluminum hydroxide] 30-90 mg/kg/day 分餐混食 |
| Stage 3-4 | 上述 + 止吐 + 食慾促進 + SQ fluids | [藥物:Maropitant] 1 mg/kg SC SID；[藥物:Mirtazapine] 1.88 mg/cat q48h |
| Stage 3-4 貧血 | 紅血球生成素 | [藥物:Darbepoetin] 1 μg/kg SC q1wk |

**證據等級**：腎臟處方飲食延長存活 **Level I**（RCT 證實延長 2-3 倍）；Benazepril/Telmisartan 抗蛋白尿 **Level I**；磷結合劑 **Level II**。

飲食要點：**限磷**最關鍵（目標血磷 Stage 1-2 <4.5 / Stage 3 <5.0 / Stage 4 <6.0 mg/dL）；適量優質蛋白（貓不應過度限制）；Omega-3 (EPA/DHA) 具腎保護作用；貓建議濕食。

## 四、併發症與監控 (Complications & Monitoring)

| 併發症 | 機轉 | 監測 | 處理 |
|--------|------|------|------|
| 高血壓 | RAAS 活化 | 收縮壓 | [藥物:Amlodipine] 0.125-0.25 mg/kg |
| 高磷血症 | 腎臟磷排泄↓ | 血磷 | 限磷飲食 + 磷結合劑 |
| 代謝性酸中毒 | 酸排泄↓ | TCO2 | Sodium bicarbonate 口服 |
| 非再生性貧血 | EPO↓ | PCV | [藥物:Darbepoetin] |
| 低鉀血症（貓常見） | 腎臟鉀流失↑ | 血鉀 | K-gluconate 口服 |

**監測頻率**：穩定 Stage 1-2 q3-6月；Stage 3 q2-3月；Stage 4/不穩定 q2-4週。每次追蹤 Cre/SDMA/BUN、電解質/磷、UPC、血壓、體重/BCS/MCS。

## 五、預後與預後因子 (Prognosis)

| IRIS 分期 | 犬中位存活 | 貓中位存活 |
|----------|----------|----------|
| Stage 1-2 | > 400 天 | > 600 天 |
| Stage 3 | 110-200 天 | 150-300 天 |
| Stage 4 | 14-80 天 | 35-100 天 |

**負面預後因子**：UPC > 1.0、高磷血症無法控制、嚴重貧血、持續體重流失、高血壓靶器官損傷。

**飼主溝通**：CKD 不可逆但可管理。飲食管理為證據最強的延壽措施。生活品質評估是治療決策核心。

## 六、人醫借鑑 (Translational Insights)

- IRIS 分期借鑑人醫 **KDIGO** 分期框架
- 人醫 **SGLT2 抑制劑** (dapagliflozin) 已證實延緩 CKD，貓的研究進行中
- **心腎症候群 (cardiorenal syndrome)** 概念從人醫移植至獸醫——CKD 與心臟病互為加速因子
- 人醫重視 eGFR 序列追蹤（斜率 slope），獸醫應用 SDMA/Cre 趨勢追蹤同理

## 七、臨床爭議與知識空缺 (Controversies & Knowledge Gaps)

| 爭議主題 | 目前立場 | 證據等級 | 研究方向 |
|---------|---------|---------|---------|
| Calcitriol 補充 | 理論上可降低 PTH，RCT 不足 | Level III | 需貓大型 RCT |
| 幹細胞治療 | 初步有改善跡象 | Level IV | 劑量、途徑、安全性均需釐清 |
| SGLT2i 在貓 | 人醫有效，獸醫尚無定論 | Level V | 貓藥動學與安全性試驗中 |
| 磷早期介入 | IRIS 建議 Stage 2 開始限磷 | Level II | Stage 1 是否即應介入？ |
| 最佳蛋白攝取 | 適度限制而非嚴格限制 | Level II-III | 貓最適蛋白需求仍有爭議 |`,
  clinical_pearl: 'SDMA 是比 Creatinine 更早期的腎功能指標。Creatinine 要在腎功能喪失 > 75% 時才會顯著升高，而 SDMA 在腎功能喪失約 25-40% 時即可偵測到升高。對於肌肉量低的動物（老年貓、消瘦犬），SDMA 尤其重要——這些動物的 Creatinine 可能被低估。',
  common_mistakes: [
    '僅憑 Creatinine 正常就排除 CKD（忽略 SDMA 和 USG）',
    '未進行 IRIS 亞分期（蛋白尿和血壓）',
    '給 CKD 貓限制蛋白質過嚴（導致肌肉消耗）',
    '在脫水狀態下進行 IRIS 分期（應先補液穩定後再分期）',
  ],
  disease_data: {
    signalment: '好發於老年犬貓。貓盛行率隨年齡急劇增加（> 15 歲超過 30%）。犬中可見於任何品種，但 Cavalier、Cocker Spaniel 等有遺傳性腎病傾向。',
    etiology: '多數為特發性（idiopathic），尤其在貓。已知病因包括：遺傳性腎病（多囊腎 PKD）、腎盂腎炎、腎結石、腎毒性藥物（NSAIDs、aminoglycosides）、腎臟淋巴瘤、缺血性損傷等。',
    pathogenesis: '起始損傷 → 腎元喪失 → 殘餘腎元代償性肥大 → 腎小球高灌注/高壓力 → 進一步損傷 → 腎小管間質纖維化 → 腎功能持續下降。RAAS 活化加速此惡性循環。',
    clinical_signs: [
      { sign: '多渴多尿 (PU/PD)', category: 'primary', description: '腎臟濃縮功能喪失，USG < 1.030 犬 / < 1.035 貓' },
      { sign: '體重減輕', category: 'primary', description: '慢性蛋白質消耗與食慾下降' },
      { sign: '食慾下降', category: 'primary', description: 'Stage 3-4 常見，尿毒素引起噁心' },
      { sign: '嘔吐', category: 'secondary', description: '尿毒症性胃炎' },
      { sign: '口腔潰瘍', category: 'secondary', description: 'Stage 4 尿毒症，口臭明顯' },
      { sign: '貧血', category: 'secondary', description: '紅血球生成素不足，非再生性貧血' },
    ],
    staging: { system: 'IRIS (International Renal Interest Society) 2023', stages: ['Stage 1：無氮血症（Cre 正常或 SDMA 輕度升高）', 'Stage 2：輕度氮血症', 'Stage 3：中度氮血症', 'Stage 4：重度氮血症/尿毒症'] },
    differential_diagnosis: [
      { condition: '急性腎損傷 (AKI)', key_differentiator: '突發性、腎臟大小正常或增大、可能有明確誘因（毒物、缺血）' },
      { condition: '腎前性氮血症', key_differentiator: '脫水或低血壓所致，補液後氮血症改善' },
      { condition: '腎後性阻塞', key_differentiator: '突發無尿或少尿，超音波可見腎盂積水' },
      { condition: '甲狀腺機能亢進（貓）', key_differentiator: '甲亢可掩蓋 CKD（增加 GFR），治療甲亢後 Cre 可能上升' },
    ],
    diagnostic_workup: '1. 基礎血檢（BUN/Cre/SDMA/電解質/磷）→ 2. 尿液分析（USG/UPC/沉渣）→ 3. 血壓測量 → 4. 腹腔超音波（腎臟大小/結構）→ 5. 必要時尿液培養 → 6. IRIS 分期與亞分期',
    treatment_protocol: 'IRIS Stage 1-2：飲食管理 + 充足飲水 + 抗蛋白尿（若 UPC > 0.5）。Stage 3-4：上述 + 磷結合劑 + 止吐 + 皮下輸液 + 貧血管理 + 鉀補充。所有分期：每 3-6 個月追蹤。',
    prognosis: 'Stage 1-2：中位存活犬 > 400 天、貓 > 600 天（適當管理下）。Stage 3：中位存活犬 110-200 天、貓 150-300 天。Stage 4：中位存活犬 14-80 天、貓 35-100 天。早期發現與飲食管理可顯著延長存活。',
    monitoring: '每 3-6 個月追蹤：Cre/SDMA/BUN、電解質、磷、UPC、血壓、體重、肌肉量評分。Stage 3-4 每 1-3 個月追蹤。注意補液量調整與食慾變化。',
    owner_communication: 'CKD 是不可逆但可管理的慢性疾病。飲食管理是最重要的介入措施。定期追蹤讓我們掌握疾病進展速度。居家監測飲水量和排尿情況。生活品質評估是治療決策的核心。',
  },
  diagnostic_data: null,
  procedure_data: null,
  visual_placeholders: [
    { position: 'IRIS 分期表後', type: 'flowchart', description: 'CKD 分期與治療決策流程圖' },
  ],
  interactive_placeholders: [
    { position: 'IRIS 分期段落', type: 'interactive_staging', description: '輸入 Cre/SDMA/UPC/血壓自動判定分期' },
  ],
  drug_api_links: ['Benazepril', 'Telmisartan', 'Aluminum hydroxide', 'Maropitant', 'Darbepoetin'],
  references: [
    { type: 'guideline', citation: 'IRIS (International Renal Interest Society). IRIS Staging of CKD (Modified 2023). Available at: http://www.iris-kidney.com/', relevance: 'CKD 分期與治療指引標準' },
    { type: 'journal', citation: 'Polzin DJ. "Chronic Kidney Disease in Small Animals." Vet Clin North Am Small Anim Pract. 2011;41(1):15-30.', relevance: 'CKD 管理綜合回顧' },
    { type: 'guideline', citation: 'Lees GE et al. "Assessment and Management of Proteinuria in Dogs and Cats: 2004 ACVIM Forum Consensus Statement." J Vet Intern Med. 2005;19(3):377-385.', relevance: '蛋白尿評估與管理共識' },
    { type: 'textbook', citation: 'Ettinger SJ, Feldman EC. Textbook of Veterinary Internal Medicine, 8th ed. Elsevier, 2017.', relevance: 'CKD 基礎教材' },
  ],
  is_current: true,
  created_at: now,
};

/** 壁蝨媒介疾病：艾利希體與焦蟲 — 疾病型 */
const contentTickBorne: NodeContent = {
  id: 'CONTENT-IM-L3-010',
  node_id: 'IM-L3-010',
  version: 1,
  summary: '壁蝨傳播疾病在台灣亞熱帶環境中十分常見。犬艾利希體症（Ehrlichia canis）和焦蟲症（Babesia canis/gibsoni）是兩種最重要的壁蝨媒介疾病，可導致血小板減少、貧血、甚至多重器官衰竭。',
  learning_objectives: [
    '描述犬艾利希體症的三個臨床分期（急性、亞臨床、慢性）',
    '區分大焦蟲（B. canis）與小焦蟲（B. gibsoni）的臨床差異',
    '正確判讀壁蝨媒介疾病的血液學異常',
    '制定壁蝨媒介疾病的治療方案',
    '說明台灣壁蝨媒介疾病的流行病學特徵',
  ],
  key_points: [
    '台灣主要壁蝨：棕色犬壁蝨（Rhipicephalus sanguineus）',
    'E. canis 三期：急性（1-3 週，發燒血小板低）→ 亞臨床（數月至數年）→ 慢性（全血球減少、骨髓受抑）',
    'B. gibsoni 在台灣較 B. canis 常見，可經鬥犬咬傷傳播',
    'Doxycycline 28 天為 E. canis 標準療法',
    'Imidocarb dipropionate 為焦蟲症首選治療',
    'SNAP 4Dx Plus 快篩可同時偵測 Ehrlichia 和 Anaplasma 抗體',
  ],
  body: `# 壁蝨媒介疾病：艾利希體症與焦蟲症 (Tick-Borne Diseases)

## 一、病理機制 (Pathophysiology)

### Ehrlichia canis

**機轉鏈**：壁蝨叮咬→E. canis 經唾液注入→感染單核球/巨噬細胞→形成 morulae（桑椹體）→複製並散播至脾臟、肝臟、骨髓、淋巴結→免疫複合體形成→血小板消耗性減少（急性期）→骨髓漿細胞增生→高球蛋白血症→慢性期骨髓發育不全（hypoplasia）→全血球減少

**免疫逃逸**：E. canis 可在巨噬細胞內持續存活數月至數年（亞臨床期），透過抑制 phagosome-lysosome 融合逃避宿主免疫。

### Babesia spp.

**機轉鏈**：壁蝨叮咬→sporozoites 侵入紅血球→紅血球內無性生殖→紅血球裂解（直接溶血）→釋放 merozoites 感染更多紅血球→同時觸發免疫介導性紅血球破壞（間接溶血，IMHA 樣機轉）→嚴重者可誘發 SIRS、DIC、acute kidney injury

[圖片:Ehrlichia life cycle in monocyte and Babesia life cycle in RBC comparison diagram]

**B. gibsoni vs B. canis**：B. gibsoni 體型更小、更難清除、可經直接血液接觸（咬傷）傳播，在台灣為主要型別。

## 二、臨床表現與診斷 (Clinical Signs & Diagnosis)

### Ehrlichia canis 臨床分期

| 分期 | 時間 | 主要表現 | 血液學 |
|------|------|---------|--------|
| 急性期 | 感染後 1-3 週 | 發燒 40-41°C、鼻出血、淋巴結腫大 | 血小板↓、輕度貧血 |
| 亞臨床期 | 數月至數年 | 臨床無症狀 | 血小板持續偏低、高球蛋白 |
| 慢性期 | 晚期 | 消瘦、出血、感染 | 全血球減少、骨髓抑制 |

### Babesiosis 表現

| 特徵 | B. canis | B. gibsoni |
|------|---------|-----------|
| 蟲體大小 | 大（成對梨形） | 小（單個環形） |
| 貧血類型 | 再生性溶血 | 再生性溶血 |
| 嚴重度 | 中-重度 | 輕-中度（但慢性） |
| 傳播 | 壁蝨 | 壁蝨 + 咬傷（鬥犬） |

### 診斷工具

| 工具 | 敏感度 | 特異度 | 最佳時機 |
|------|--------|--------|---------|
| SNAP 4Dx Plus | 高（亞臨床/慢性期） | 高 | 感染 2-3 週後 |
| PCR | 極高 | 極高 | 急性期（抗體尚未產生時） |
| 血液抹片 morulae | 低（~5%） | 高 | 急性期 |
| IFA 效價 | 高 | 中 | 配對血清確認 |

## 三、治療策略 (Treatment)

| 疾病 | 首選藥物 | 劑量 | 療程 | 證據等級 |
|------|---------|------|------|---------|
| Ehrlichiosis | [藥物:Doxycycline] | 5-10 mg/kg PO BID | 28 天 | Level I |
| B. canis | [藥物:Imidocarb dipropionate] | 6.6 mg/kg IM | 2 doses（間隔 2 週） | Level II |
| B. gibsoni | [藥物:Atovaquone] + [藥物:Azithromycin] | 13.5 mg/kg TID + 10 mg/kg SID | 10 天 | Level II |

**支持療法**：嚴重貧血需輸血（PCV < 15%）；SIRS/DIC 需加護監護；免疫介導性併發症（IMHA/ITP）短期 [藥物:Prednisolone]。

**壁蝨預防**：全年持續使用壁蝨預防藥物（[藥物:Fluralaner] Bravecto 或 [藥物:Afoxolaner] NexGard）。

## 四、併發症與監控 (Complications & Monitoring)

| 併發症 | 病原 | 機轉 | 處理 |
|--------|------|------|------|
| 免疫介導性血小板減少 (ITP) | Ehrlichia | 免疫複合體 | 短期類固醇 |
| 免疫複合體腎絲球腎炎 | Ehrlichia 慢性 | IC 沉積 | 抗蛋白尿治療 |
| DIC | Babesia 重症 | SIRS 觸發 | FFP + heparin |
| 繼發性 IMHA | Babesia | 紅血球表面抗原改變 | 輸血 + 免疫抑制 |

**監測時程**：治療中每 1-2 週 CBC；治療結束後 3 個月 PCR 確認清除（Ehrlichia）；Babesia 治療後 1-3 個月 PCR；長期追蹤血小板與 PCV。

## 五、預後與預後因子 (Prognosis)

| 情境 | 預後 | 備註 |
|------|------|------|
| Ehrlichia 急性/亞臨床期 | 良好 | Doxycycline 反應佳 |
| Ehrlichia 慢性期骨髓抑制 | 謹慎至不良 | 全血球減少恢復慢 |
| B. canis 治療後 | 良好 | Imidocarb 清除率高 |
| B. gibsoni | 謹慎 | 難以完全清除，帶原常見 |

**飼主溝通**：壁蝨預防是最重要措施。B. gibsoni 帶原犬不應捐血、不應與其他犬隻激烈互動（咬傷傳播）。

## 六、人醫借鑑 (Translational Insights)

- 人類壁蝨媒介疾病（Lyme disease、HME/HGA）的診斷策略（兩步驟法：ELISA→Western blot）可借鑑用於獸醫
- 人醫 **Doxycycline 預防性投藥**（壁蝨叮咬後 72 小時內單劑）的概念在獸醫尚無共識
- One Health 觀點：犬的壁蝨暴露為人類暴露的哨兵指標

## 七、臨床爭議與知識空缺 (Controversies & Knowledge Gaps)

| 爭議主題 | 目前立場 | 證據等級 | 研究方向 |
|---------|---------|---------|---------|
| 亞臨床 Ehrlichia 是否需治療 | 多數建議治療以防慢性化 | Level III | 自然清除率？不治療長期後果？ |
| B. gibsoni 是否可完全清除 | 現有藥物無法保證清除 | Level II | 新藥組合研究中 |
| SNAP 陽性但臨床無症狀 | 追蹤或治療均可 | Level IV | 需前瞻性比較研究 |
| Doxycycline 28 天 vs 更長療程 | 28 天為標準 | Level II | 慢性期是否需延長？ |
| 壁蝨疫苗 | 尚無商品化疫苗 | — | 研發中 |`,
  clinical_pearl: '在台灣，任何犬隻出現不明原因的血小板減少，壁蝨媒介疾病應列為首要鑑別診斷。即使沒有明顯壁蝨暴露史——亞臨床期的 E. canis 可以持續多年才被發現。同時感染（Ehrlichia + Babesia 合併感染）在台灣並不少見。',
  common_mistakes: [
    'SNAP 快篩陰性就排除 Ehrlichia（急性期抗體可能尚未產生，需搭配 PCR）',
    '未完成 28 天 Doxycycline 療程就停藥',
    '忽略 B. gibsoni 可經打鬥傳播而非僅經壁蝨',
    '治療焦蟲後未追蹤 PCR 確認清除',
  ],
  disease_data: {
    signalment: '任何年齡犬隻均可感染。戶外犬、流浪犬、未定期除蝨犬為高風險群。台灣南部與東部盛行率較高。B. gibsoni 在比特犬等鬥犬品種中特別常見（咬傷傳播）。',
    etiology: 'Ehrlichia canis 由棕色犬壁蝨（Rhipicephalus sanguineus）傳播。Babesia canis 經壁蝨傳播，B. gibsoni 可經壁蝨或直接血液接觸（鬥犬咬傷、輸血）傳播。',
    pathogenesis: 'E. canis：感染單核球 → 免疫複合體沉積 → 血小板消耗/破壞 → 骨髓抑制（慢性期）。Babesia：感染紅血球 → 紅血球內增殖 → 溶血 → 免疫介導性紅血球破壞加劇 → 貧血、黃疸。',
    clinical_signs: [
      { sign: '發燒', category: 'primary', description: '急性期常見，40-41°C' },
      { sign: '血小板減少/出血', category: 'primary', description: 'Ehrlichia 最敏感指標，鼻出血、瘀斑' },
      { sign: '貧血', category: 'primary', description: 'Babesia 為溶血性（再生性），Ehrlichia 慢性期為非再生性' },
      { sign: '淋巴結腫大', category: 'secondary', description: 'Ehrlichia 急性期常見' },
      { sign: '脾腫大', category: 'secondary', description: 'Babesia 常見' },
    ],
    staging: null,
    differential_diagnosis: [
      { condition: 'IMHA', key_differentiator: '球形紅血球、Coombs 陽性、無壁蝨抗體' },
      { condition: 'ITP', key_differentiator: '單純血小板減少，無壁蝨抗體' },
      { condition: 'DIC', key_differentiator: '凝血異常（PT/aPTT 延長）、纖維蛋白降解產物升高' },
      { condition: '骨髓腫瘤', key_differentiator: '全血球減少但骨髓穿刺可見異常細胞' },
    ],
    diagnostic_workup: '1. CBC（血小板、貧血評估）→ 2. 血液抹片（尋找蟲體/morulae）→ 3. SNAP 4Dx Plus 快篩 → 4. PCR（確認與定量）→ 5. 生化（腎功能、肝功能）→ 6. 尿液分析 → 7. 必要時骨髓穿刺（慢性期）',
    treatment_protocol: 'Ehrlichia：Doxycycline 5 mg/kg PO BID × 28 天。Babesia canis：Imidocarb dipropionate 6.6 mg/kg IM × 2 doses（間隔 2 週）。B. gibsoni：Atovaquone 13.5 mg/kg PO TID + Azithromycin 10 mg/kg PO SID × 10 天。支持療法：輸血、輸液、止吐。',
    prognosis: 'Ehrlichia 急性/亞臨床期：經治療預後良好。慢性期合併骨髓發育不全：預後謹慎至不良。Babesia canis：治療後預後通常良好。B. gibsoni：難以完全清除，可能需要長期追蹤。',
    monitoring: 'Ehrlichia：治療結束後 3 個月追蹤 PCR 確認清除。Babesia：治療後 1-3 個月追蹤 PCR。長期追蹤血小板和 PCV。B. gibsoni 帶原犬不應捐血。',
    owner_communication: '壁蝨預防是最重要的預防措施。建議全年使用壁蝨預防藥物（如 Bravecto、NexGard）。避免犬隻接觸流浪犬或進入壁蝨高密度區域。已感染犬完成治療後需定期追蹤。',
  },
  diagnostic_data: null,
  procedure_data: null,
  visual_placeholders: [
    { position: 'Ehrlichia 分期表後', type: 'flowchart', description: '壁蝨媒介疾病診斷流程圖' },
  ],
  interactive_placeholders: [],
  drug_api_links: ['Doxycycline', 'Imidocarb', 'Atovaquone', 'Azithromycin'],
  references: [
    { type: 'guideline', citation: 'Neer TM et al. "Consensus Statement on Ehrlichial Disease of Small Animals from the Infectious Disease Study Group of the ACVIM." J Vet Intern Med. 2002;16(3):309-315.', relevance: 'Ehrlichia 診斷與治療共識' },
    { type: 'journal', citation: 'Solano-Gallego L, Baneth G. "Babesiosis in dogs and cats — expanding parasitological and clinical spectra." Vet Parasitol. 2011;181(1):48-60.', relevance: '焦蟲症綜合回顧' },
    { type: 'textbook', citation: 'Greene CE. Infectious Diseases of the Dog and Cat, 4th ed. Elsevier, 2012.', relevance: '壁蝨媒介疾病教科書' },
  ],
  is_current: true,
  created_at: now,
};

/** 尿液分析與腎功能評估 — 診斷型 */
const contentUrinalysis: NodeContent = {
  id: 'CONTENT-IM-L4-002',
  node_id: 'IM-L4-002',
  version: 1,
  summary: '尿液分析是腎臟與下泌尿道疾病評估的基礎檢查，包含三大部分：物理性質（外觀、比重）、化學性質（dipstick）、沉渣檢查。尿比重（USG）是腎臟濃縮功能最重要的指標。',
  learning_objectives: [
    '正確執行與判讀完整尿液分析（物理/化學/沉渣）',
    '運用 USG 評估腎臟濃縮功能',
    '解釋 UPC 在蛋白尿分級中的角色',
    '辨識尿液沉渣中常見結晶與管型的意義',
    '整合尿液分析結果與其他腎功能指標',
  ],
  key_points: [
    'USG 正常範圍：犬 1.015-1.045，貓 1.035-1.060',
    '等張尿（USG 1.008-1.012）提示腎臟濃縮功能完全喪失',
    'UPC > 0.5（犬）/ > 0.4（貓）= 顯著蛋白尿',
    'Dipstick 蛋白尿在稀釋尿中可能偽陰性，濃縮尿中偽陽性',
    '膀胱穿刺（cystocentesis）為最佳採集方式（培養時必須）',
  ],
  body: `# 尿液分析判讀

## 一、檢查原理與適應症 (Principles & Indications)



| 監測指標 | 頻率 | 適用情境 |
|---------|------|---------|
| USG | 每次回診 | CKD 追蹤、PU/PD 鑑別 |
| UPC | q1-3 月 | CKD 蛋白尿亞分期 |
| 尿培養 | 依臨床需要 | 復發性 UTI、Cushing UTI |
| 沉渣 | 每次回診 | UTI 追蹤、結石評估 |

**採樣方法影響判讀**：膀胱穿刺 (cystocentesis) 為金標準（培養用必須穿刺）；導尿次之；自由排尿最不可靠（汙染高）。

## 二、判讀要點 (Interpretation)

### 尿液分析三部曲

**1. 物理性質**

| 指標 | 正常值 | 臨床意義 |
|------|--------|---------|
| 顏色 | 淡黃至深黃 | 血尿（紅/棕）、膽紅素尿（橙/深黃）、血紅素尿（紅棕） |
| 濁度 | 清澈至微混 | 渾濁提示結晶、細菌、細胞增多 |
| USG 犬 | 1.015-1.045 | <1.030 脫水時 = 濃縮功能異常 |
| USG 貓 | 1.035-1.060 | <1.035 脫水時 = 濃縮功能異常 |

**USG 判讀關鍵**：低張尿 (<1.008) = 完全無法濃縮（DI、psychogenic polydipsia）；等張尿 (1.008-1.012) = 腎功能嚴重受損；輕度低張 (1.012-1.029 犬/1.012-1.034 貓) = 灰色地帶

**2. 化學分析（Dipstick）**

| 項目 | 異常 | 常見原因 | 注意 |
|------|------|---------|------|
| pH | >7.5 | UTI (urease+)、RTA、飲食 | 放置過久 pH 升高 |
| 蛋白質 | 陽性 | 腎絲球疾病、UTI、出血 | Dipstick 假陽性常見（鹼性尿） |
| 葡萄糖 | 陽性 | DM (>180 犬/>280 貓)、Fanconi | 壓力性高血糖（貓） |
| 酮體 | 陽性 | DKA、飢餓 | Dipstick 不偵測 BHB |
| 膽紅素 | 犬微量正常 | 溶血、肝膽疾病 | 貓膽紅素尿始終異常 |
| 潛血 | 陽性 | 血尿、血紅素尿、肌紅蛋白尿 | 無法區分三者 |

**3. 沉渣鏡檢**

| 成分 | 正常 | 異常意義 |
|------|------|---------|
| RBC | <5/HPF | 血尿（下泌尿道/腎臟/凝血異常） |
| WBC | <5/HPF | 膿尿（UTI、腎盂腎炎） |
| 細菌 | 無 | UTI（需培養確認） |
| 圓柱體 | 偶見透明 | 顆粒/蠟樣=腎小管損傷；RBC=腎絲球出血 |
| 結晶 | 少量可正常 | Struvite/CaOx——需結合 pH、臨床判斷 |

### UPC（尿蛋白/肌酐比值）

| UPC | 犬 | 貓 | IRIS 分類 |
|-----|----|----|---------|
| <0.2 | 非蛋白尿 | 非蛋白尿 | Normal |
| 0.2-0.5 | 邊緣 | — | Borderline |
| 0.2-0.4 | — | 邊緣 | Borderline |
| >0.5 | 蛋白尿 | — | Proteinuric |
| >0.4 | — | 蛋白尿 | Proteinuric |

## 三、常見陷阱 (Pitfalls)

## 四、人醫借鑒 (Translational Insights)

- 人醫 **albumin-to-creatinine ratio (ACR)** 為蛋白尿篩檢標準——獸醫使用 UPC 作為對應
- 人醫 **urine NGAL** 和 **urine KIM-1** 作為 AKI 早期標記——獸醫研究中
- 人醫 **automated urine sediment analyzers** 已取代大部分手動鏡檢——獸醫仍以手動鏡檢為主
- 人醫 **24h urine protein collection** 為蛋白尿金標準——獸醫以 spot UPC 替代

## 五、臨床爭議與知識空缺 (Controversies & Knowledge Gaps)

| 爭議主題 | 目前立場 | 證據等級 | 研究方向 |
|---------|---------|---------|---------|
| UPC 的生物變異 | 單次 UPC 可能波動大 | Level II | 連續取樣的最佳策略 |
| Dipstick 蛋白質 vs SSA vs UPC | UPC 最可靠 | Level I | 即時 UPC 測量儀器開發 |
| 尿液微生物培養閾值 | 穿刺 >1000 CFU/mL 有意義 | Level II | 亞臨床菌尿的處理策略 |
| 結晶尿的臨床意義 | 不等同於結石病 | Level II | 結晶→結石的風險預測 |`,
  clinical_pearl: '在評估氮血症（BUN/Cre 升高）時，USG 是區分腎前性、腎性、腎後性的關鍵。如果動物脫水但 USG < 1.030（犬）或 < 1.035（貓），即使 Creatinine 只是輕度升高，也高度提示腎臟本身的問題。',
  common_mistakes: [
    'Dipstick 蛋白尿結果未搭配 USG 解讀',
    '用自然排尿樣本做尿液培養（污染率高）',
    '忽略尿液沉渣檢查而只看 dipstick',
    '採集後超過 1 小時才分析（結晶可能溶解或新生）',
  ],
  disease_data: null,
  diagnostic_data: {
    indication: ['腎臟疾病評估', '下泌尿道疾病評估', 'PU/PD 鑑別診斷', '蛋白尿定量', '尿路感染診斷', '結石類型評估'],
    contraindication: ['膀胱穿刺禁忌：嚴重血小板減少（< 30,000/μL）、膀胱腫瘤疑慮（移行上皮癌擴散風險）'],
    technique: '膀胱穿刺：超音波引導，22G 針頭，膀胱中等充盈時執行。樣本立即進行 USG 測量（折射計）、dipstick、離心沉渣鏡檢。UPC 需送檢實驗室定量。',
    normal_findings: [
      { finding: 'USG', description: '犬 1.015-1.045，貓 1.035-1.060', significance: '反映腎臟濃縮能力' },
      { finding: 'pH', description: '5.5-7.5', significance: '受飲食影響，肉食動物偏酸' },
      { finding: '沉渣', description: 'RBC < 5/HPF, WBC < 5/HPF', significance: '少量為正常（膀胱穿刺）' },
    ],
    abnormal_findings: [
      { finding: '低 USG', description: '犬 < 1.030 / 貓 < 1.035 合併脫水', significance: '腎臟濃縮功能不足，需評估 CKD' },
      { finding: '蛋白尿', description: 'UPC > 0.5（犬）/ > 0.4（貓）', significance: '腎小球損傷或腎小管異常' },
      { finding: '糖尿', description: 'Dipstick 葡萄糖陽性', significance: '糖尿病（超過腎閾）或腎小管損傷' },
      { finding: '膿尿', description: 'WBC > 5/HPF', significance: '泌尿道感染或發炎' },
    ],
    interpretation_guide: '1. USG 判斷濃縮能力 → 2. Dipstick 化學篩檢 → 3. 沉渣微觀檢查 → 4. 必要時 UPC 定量 → 5. 整合臨床表現與血液生化。',
    pitfalls: [
      '高 USG 的濃縮尿可能有 dipstick 蛋白偽陽性',
      '冷藏樣本中 struvite 結晶可能體外形成',
      '血尿影響 UPC 測量（需排除）',
    ],
    sensitivity_specificity: 'USG 對腎臟濃縮功能異常的敏感度高。UPC 對蛋白尿的定量優於 dipstick。沉渣檢查對泌尿道感染的敏感度約 80%（需搭配培養確認）。',
    cost_benefit: '成本極低，為最基礎的腎臟與泌尿道評估工具。在 PU/PD 鑑別診斷中不可或缺。',
  },
  procedure_data: null,
  visual_placeholders: [
    { position: 'USG 判讀表後', type: 'comparison_table', description: 'USG 與氮血症對照判讀表' },
  ],
  interactive_placeholders: [],
  drug_api_links: [],
  references: [
    { type: 'textbook', citation: 'Sink CA, Weinstein NM. Practical Veterinary Urinalysis. Wiley-Blackwell, 2012.', relevance: '尿液分析標準參考' },
    { type: 'journal', citation: 'Lees GE et al. "Assessment and Management of Proteinuria in Dogs and Cats." J Vet Intern Med. 2005;19(3):377-385.', relevance: '蛋白尿評估 ACVIM 共識' },
    { type: 'textbook', citation: 'Ettinger SJ, Feldman EC. Textbook of Veterinary Internal Medicine, 8th ed. Elsevier, 2017.', relevance: '尿液分析基礎教材' },
    { type: 'guideline', citation: 'IRIS (International Renal Interest Society). "IRIS Staging of CKD (Modified 2023)." iris-kidney.com.', relevance: 'CKD 分期與治療指引' },
  ],
  is_current: true,
  created_at: now,
};

/** 胰臟炎 — 疾病型 */
const contentPancreatitis: NodeContent = {
  id: 'CONTENT-IM-L3-008',
  node_id: 'IM-L3-008',
  version: 1,
  summary: '胰臟炎是犬貓常見的消化系統急症與慢性疾病。犬多為急性壞死性胰臟炎，貓則以慢性淋巴球性胰臟炎為主。犬胰臟特異性脂酶（cPLI/Spec cPL）是目前最敏感的非侵入性診斷工具。治療以積極輸液、止痛、止吐及早期營養支持為核心。',
  learning_objectives: [
    '比較犬與貓胰臟炎在病因、臨床表現與病程上的差異',
    '正確選用並判讀胰臟炎的診斷工具（cPLI/fPLI、SNAP cPL/fPL、超音波）',
    '制定胰臟炎的急性期支持性治療方案',
    '說明貓三體炎（triaditis）的概念與臨床意義',
    '辨識胰臟炎的嚴重併發症並啟動適當處理',
  ],
  key_points: [
    '犬胰臟炎常見誘因：高脂飲食、肥胖、高脂血症、藥物（Azathioprine, KBr, L-asparaginase）',
    '貓胰臟炎常與 IBD 和膽管炎並存（triaditis 三體炎）',
    'Spec cPL > 400 μg/L（犬）/ Spec fPL > 5.4 μg/L（貓）高度提示胰臟炎',
    'SNAP cPL/fPL 快篩敏感度約 80-95%，適合排除用（陰性預測值高）',
    '腹腔超音波敏感度：犬約 68%、貓約 35-67%（操作者依賴性高）',
    '治療核心：積極靜脈輸液、止痛（Buprenorphine/Methadone）、止吐（Maropitant）、早期腸道營養',
    '犬嚴重胰臟炎可併發 DIC、SIRS、急性腎損傷',
  ],
  body: `# 胰臟炎 (Pancreatitis)

## 一、病理機制 (Pathophysiology)

**機轉鏈**：致病因子（高脂飲食、藥物、缺血）→胰臟腺泡細胞內 trypsinogen 異常活化為 trypsin→啟動酵素級聯反應（elastase、phospholipase A2、lipase）→胰臟自身消化 (autodigestion)→局部炎症反應（IL-1、IL-6、TNF-α 釋放）→微血管損傷與水腫→嚴重者進展為全身性發炎反應 (SIRS)→多器官功能障礙 (MODS)→DIC

[圖片:Pancreatitis pathophysiology cascade — trypsinogen activation → autodigestion → local inflammation → SIRS → MODS]

**犬 vs 貓差異**：
- **犬**：以急性壞死性胰臟炎為主，嗜中性球浸潤顯著。高脂飲食為最常見誘因。
- **貓**：以慢性淋巴球性胰臟炎為主，與免疫介導機轉相關。常與 IBD、膽管炎共存→**三體炎 (triaditis)**。解剖學上貓的胰管與膽總管匯合後才開口於十二指腸，促進疾病間的相互影響。

## 二、臨床表現與診斷 (Clinical Signs & Diagnosis)

| 臨床表現 | 犬 | 貓 | 備註 |
|---------|----|----|------|
| 嘔吐 | ~90% | ~35% | 犬最常見首發症狀 |
| 食慾廢絕 | ~90% | ~95% | 貓常為唯一主訴 |
| 腹痛 | ~60%（祈禱姿勢） | 難以辨識 | 犬遠比貓明顯 |
| 嗜睡 | 常見 | 常見 | 貓可能為唯一表現 |
| 黃疸 | 少見 | ~30% | 貓膽管壓迫較常見 |
| 發燒 | 變異大 | 變異大 | 非特異性 |

### 診斷工具比較

| 工具 | 犬敏感度 | 貓敏感度 | 特異度 | 最佳用途 |
|------|----------|----------|--------|---------|
| Spec cPL/fPL | 72-78% | 79-100% | 高 | 確診參考 |
| SNAP cPL/fPL | 80-95% | 80-90% | 中-高 | 排除診斷（NPV 高） |
| 腹腔超音波 | ~68% | 35-67% | 中 | 操作者依賴 |
| Lipase (DGGR) | 70-75% | 60-70% | 中 | 較傳統 lipase 佳 |
| 傳統 Amylase/Lipase | 低 | 低 | 低 | **不推薦** |

## 三、治療策略 (Treatment)

### 急性期支持療法

| 措施 | 藥物/方法 | 劑量 | 證據等級 |
|------|----------|------|---------|
| 輸液 | LRS 或 PlasmaLyte IV | 矯正脫水 + 維持 | Level I |
| 止痛 | [藥物:Buprenorphine] | 0.01-0.02 mg/kg IV q6-8h | Level I |
| 止痛（重症） | [藥物:Fentanyl] CRI | 2-5 μg/kg/hr IV | Level II |
| 止吐 | [藥物:Maropitant] | 1 mg/kg SC/IV SID | Level I |
| 早期營養 | 腸道營養（鼻食道管） | 24h 內啟動 | Level I |

**重要觀念轉變**：**禁食不再建議超過 24 小時**——早期腸道營養可維護腸道屏障完整性，減少細菌移位風險。

### 慢性管理
- 犬：轉換**低脂飲食**；避免已知誘因
- 貓：治療共病（IBD 用 [藥物:Prednisolone]、膽管炎用抗生素）

## 四、併發症與監控 (Complications & Monitoring)

| 併發症 | 發生率 | 監測指標 | 處理 |
|--------|--------|---------|------|
| SIRS | 重症 ~30% | 體溫/HR/RR/WBC | 加護監護 |
| DIC | 重症 ~15% | PT/aPTT/FDP/D-dimer | FFP + supportive |
| 急性腎損傷 | 重症 ~10% | Cre/BUN/UOP | 輸液調整 |
| 肝外膽管阻塞（貓） | ~20% 貓 | Bilirubin/超音波 | 手術或支架 |
| 胰臟膿瘍/假性囊腫 | 罕見 | 超音波追蹤 | 引流或手術 |

**住院監測**：每 6-12h 疼痛評估、嘔吐頻率、體溫、血壓；每 24-48h 電解質、BUN/Cre、肝指數。出院後 1-2 週回診追蹤 cPLI/fPLI。

## 五、預後與預後因子 (Prognosis)

| 嚴重度 | 預後 | 死亡率 |
|--------|------|--------|
| 犬輕度急性 | 良好 | < 5% |
| 犬重度壞死性（SIRS/DIC） | 謹慎 | 25-50% |
| 貓慢性 | 需長期管理 | 低（若控制共病） |

**復發率**：犬約 30-40%，尤其有持續風險因子者。長期低脂飲食可降低復發。

**飼主溝通**：犬胰臟炎飲食管理是預防復發的關鍵——終身低脂飲食、絕對避免餐桌食物。貓需注意共病。

## 六、人醫借鑑 (Translational Insights)

- 人醫急性胰臟炎嚴重度評分（APACHE II、Ranson criteria）的概念可借鑑至獸醫（目前無標準化犬貓胰臟炎嚴重度評分）
- 人醫已確認**早期腸道營養優於禁食**，此原則已被獸醫接受
- 人醫慢性胰臟炎的**胰臟外分泌功能不全 (EPI)** 後遺症在犬亦可見
- 人醫的 **Gallstone pancreatitis** 概念對應貓的膽道相關胰臟炎

## 七、臨床爭議與知識空缺 (Controversies & Knowledge Gaps)

| 爭議主題 | 目前立場 | 證據等級 | 研究方向 |
|---------|---------|---------|---------|
| cPLI/fPLI 最佳 cutoff | Spec cPL >400 / fPL >5.4 為常用 | Level II | 敏感度與特異度的最佳平衡點 |
| 抗生素在胰臟炎 | 不常規使用（除非有感染證據） | Level III | 預防性抗生素的角色？ |
| Gabapentin 作為輔助止痛 | 部分臨床經驗支持 | Level IV | 犬貓胰臟炎止痛 RCT 需要 |
| 貓三體炎最佳治療順序 | 先穩定胰臟炎再處理 IBD | Level IV | 同時或序貫治療？ |
| 胰臟炎與 EPI 的關聯 | 反覆胰臟炎可導致 EPI | Level III | 長期追蹤數據不足 |`,
  clinical_pearl: '貓胰臟炎的臨床表現遠比犬隱微。犬胰臟炎的經典三聯征是嘔吐、腹痛和食慾廢絕，但貓可能僅表現為食慾下降和嗜睡。在任何食慾不振超過 48 小時的貓，都應將胰臟炎列入鑑別診斷。此外，貓的超音波敏感度較低，SNAP fPL 陰性結果的排除價值很高。\n\n【台灣流行病學】胰臟炎在台灣犬貓臨床盛行率高，尤其好發於中老年犬及肥胖犬貓。台灣飼主常有餵食人類食物的習慣（如年節剩菜、高脂肪零食），為犬急性胰臟炎的重要誘因。台灣常見品種如迷你雪納瑞、約克夏梗為犬胰臟炎好發品種。貓「三體炎」（胰臟炎 + 膽管炎 + IBD）在台灣臨床並不罕見。SNAP cPL/fPL 快篩已在台灣獸醫院廣泛使用。',
  common_mistakes: [
    '依賴傳統 Amylase/Lipase 診斷胰臟炎（敏感度和特異度都不足，應使用 Spec cPL/fPL）',
    '超音波正常就排除胰臟炎（尤其在貓，敏感度僅 35-67%）',
    '急性胰臟炎長期禁食（現代觀點建議 24 小時內開始早期腸道營養）',
    '忽略貓三體炎的可能（胰臟炎+IBD+膽管炎常同時存在）',
    '犬胰臟炎未重視止痛（腹痛是主要臨床問題，未止痛影響預後）',
  ],
  disease_data: {
    signalment: '犬：中老年、肥胖犬好發。Miniature Schnauzer（高脂血症傾向）、Yorkshire Terrier 為高風險品種。貓：中老年貓，無明顯品種傾向，但 Siamese 可能有較高風險。',
    etiology: '犬：高脂飲食（最常見）、肥胖、高三酸甘油酯血症、藥物（Azathioprine、KBr）、內分泌疾病（Cushing、甲低、DM）、創傷、膽道疾病。貓：多數為特發性，可能與 IBD、膽管炎等免疫介導機轉相關。',
    pathogenesis: '正常情況下胰臟酵素以非活化的酶原形式儲存。致病因子導致 trypsinogen 在胰臟內提前活化為 trypsin → 啟動酵素級聯反應 → 胰臟自身消化 → 局部發炎 → 嚴重時全身性發炎反應（SIRS）→ 多器官功能障礙。',
    clinical_signs: [
      { sign: '嘔吐', category: 'primary', description: '犬最常見症狀（約 90%），貓僅 35-50% 出現' },
      { sign: '食慾下降/廢絕', category: 'primary', description: '犬貓均常見，貓常為唯一主訴' },
      { sign: '腹痛', category: 'primary', description: '犬常見祈禱姿勢（prayer position），貓較少明顯表現' },
      { sign: '腹瀉', category: 'secondary', description: '約 33% 犬可見，可為出血性' },
      { sign: '嗜睡/虛弱', category: 'secondary', description: '貓尤其常見，可能為唯一表現' },
      { sign: '黃疸', category: 'secondary', description: '胰臟腫脹壓迫膽管時出現，貓較犬常見' },
    ],
    staging: null,
    differential_diagnosis: [
      { condition: '腸道異物/阻塞', key_differentiator: '影像學可見異物，腹部觸診可能觸及。無 cPLI/fPLI 升高' },
      { condition: '急性肝炎', key_differentiator: 'ALT/AST 顯著升高為主，cPLI 正常。超音波肝臟回聲異常' },
      { condition: '腎上腺危象（Addisonian crisis）', key_differentiator: '低鈉高鉀（Na:K < 27），ACTH stimulation test 異常' },
      { condition: '敗血性腹膜炎', key_differentiator: '腹水細胞學可見退化性嗜中性球與細菌，腹水 glucose < 血液 glucose' },
      { condition: '急性腸胃炎', key_differentiator: '通常自限性，cPLI/fPLI 正常，無嚴重全身性影響' },
    ],
    diagnostic_workup: '1. CBC/生化全套（注意 hepatic enzyme、BUN/Cre、電解質、三酸甘油酯）→ 2. SNAP cPL/fPL 快篩（陰性可暫排除）→ 3. 若陽性：送 Spec cPL/fPL 定量 → 4. 腹腔超音波（胰臟周圍高回聲脂肪、胰臟腫脹/低回聲）→ 5. 凝血功能（排除 DIC）→ 6. 貓加做 T4、肝膽超音波（排除 triaditis 相關疾病）',
    treatment_protocol: '急性期（一般照護）：靜脈輸液（Lactated Ringer\'s 或 PlasmaLyte）矯正脫水、Maropitant 1 mg/kg SC/IV SID 止吐、Buprenorphine 0.01-0.02 mg/kg IV q6-8h 止痛、24 小時內啟動腸道營養（鼻食道管或自主進食）。專科照護：嚴重 SIRS 需加護監護、Fresh frozen plasma（DIC 或低白蛋白時）、Methadone 或 CRI 止痛方案、可能需要 feeding tube 長期營養支持。慢性管理：犬低脂飲食、貓處理共病（IBD 用 prednisolone、膽管炎用抗生素）。',
    prognosis: '犬輕度急性胰臟炎：預後良好，多數 3-7 天緩解。犬重度壞死性胰臟炎合併 SIRS/DIC：死亡率可達 30-50%。貓慢性胰臟炎：需長期管理，控制共病可維持良好生活品質。復發率：犬約 30-40% 會復發，需長期飲食管理。',
    monitoring: '住院期間：每 6-12 小時評估疼痛指數、嘔吐頻率、體溫、血壓。每 24-48 小時追蹤電解質、BUN/Cre、肝指數。出院後：1-2 週回診評估食慾恢復、體重、追蹤 cPLI/fPLI。長期：犬每 3-6 個月追蹤三酸甘油酯和體重。',
    owner_communication: '胰臟炎是一種嚴重但多數可治療的疾病。住院期間需要積極支持治療。犬的飲食管理是預防復發的關鍵——長期低脂飲食、避免餐桌食物和高脂零食。貓需注意可能有共存的腸道和肝膽疾病。出院後如果再度出現嘔吐或食慾下降，應盡快就醫。',
  },
  diagnostic_data: null,
  procedure_data: null,
  visual_placeholders: [
    { position: '診斷策略表後', type: 'flowchart', description: '胰臟炎診斷決策流程圖（犬 vs 貓路徑）' },
    { position: '治療原則段落後', type: 'comparison_table', description: '犬 vs 貓胰臟炎特徵比較表' },
  ],
  interactive_placeholders: [],
  drug_api_links: ['Maropitant', 'Buprenorphine', 'Methadone', 'Prednisolone'],
  references: [
    { type: 'journal', citation: 'Xenoulis PG. "Diagnosis of pancreatitis in dogs and cats." J Small Anim Pract. 2015;56(1):13-26.', relevance: '犬貓胰臟炎診斷綜合回顧' },
    { type: 'journal', citation: 'Watson PJ. "Chronic pancreatitis in dogs." Top Companion Anim Med. 2012;27(3):133-139.', relevance: '犬慢性胰臟炎管理' },
    { type: 'journal', citation: 'Forman MA et al. "ACVIM consensus statement on pancreatitis in cats." J Vet Intern Med. 2021;35(2):703-723.', relevance: '貓胰臟炎診斷治療共識' },
    { type: 'textbook', citation: 'Steiner JM. "Exocrine Pancreas." In: Ettinger SJ, Feldman EC. Textbook of Veterinary Internal Medicine, 8th ed. Elsevier, 2017.', relevance: '胰臟炎基礎教材' },
    { type: 'guideline', citation: 'Washabau RJ, Day MJ, Willard MD, et al. "Endoscopic, biopsy, and histopathologic guidelines for the evaluation of gastrointestinal inflammation in companion animals." J Vet Intern Med. 2010;24(1):10-26.', relevance: 'GI 炎症評估指引' },
  ],
  is_current: true,
  created_at: now,
};

/** 貓肝臟脂肪變性 — 疾病型 */
const contentHepaticLipidosis: NodeContent = {
  id: 'CONTENT-IM-L3-009',
  node_id: 'IM-L3-009',
  version: 1,
  summary: '貓肝臟脂肪變性（Feline Hepatic Lipidosis, FHL）是貓最常見的肝臟疾病，以肝細胞內大量三酸甘油酯蓄積為特徵。常見於肥胖貓經歷食慾廢絕超過 3-7 天後發生。營養支持（食道管灌食）是治療的關鍵。原發性或繼發性分類影響預後。',
  learning_objectives: [
    '說明貓肝臟脂肪變性的獨特病理生理機轉（與犬和人的差異）',
    '辨識肥胖貓食慾廢絕發展為 FHL 的危險因子和時程',
    '制定 FHL 的營養支持方案（包括食道管放置與灌食計畫）',
    '區分原發性與繼發性肝臟脂肪變性並評估預後',
    '說明再餵食症候群（refeeding syndrome）的預防策略',
  ],
  key_points: [
    'FHL 幾乎僅發生在貓（獨特的脂質代謝特性）',
    '最典型情境：肥胖貓（BCS ≥ 7/9）厭食 > 3-7 天',
    '原發性 FHL（~5%）vs 繼發性 FHL（~95%，需找出潛在疾病）',
    '血檢特徵：ALP 顯著升高（犬肝病型 ALP）、GGT 正常或輕度升高（ALP:GGT 比值高度提示 FHL）',
    '確診：肝臟細針抽吸細胞學（> 80% 肝細胞含脂肪空泡）',
    '治療核心：食道管灌食（esophagostomy tube），每日熱量需求從 25-30% RER 逐漸增加',
    '預後：積極營養支持下存活率約 60-85%',
  ],
  body: `# 貓肝臟脂肪變性 (Feline Hepatic Lipidosis, FHL)

## 一、病理機制 (Pathophysiology)

**機轉鏈**：厭食/負能量平衡→hormone-sensitive lipase 活化→周邊脂肪大量動員 (lipolysis)→游離脂肪酸 (FFA) 大量湧入肝臟→貓特有代謝瓶頸：VLDL 組裝/分泌能力不足（缺乏 apolipoprotein B100 的高效合成）→三酸甘油酯 (TG) 在肝細胞內蓄積→肝細胞腫脹（>80% 空泡化）→壓迫膽小管→膽汁鬱積 (intrahepatic cholestasis)→黃疸→嚴重時肝功能衰竭

[圖片:FHL pathophysiology — lipolysis → FFA influx → impaired VLDL export → TG accumulation → cholestasis]

**貓特有脆弱性**：
- 貓為專性肉食動物，高度依賴蛋白質供能；厭食時缺乏必需胺基酸（arginine、taurine、methionine）→進一步損害 VLDL 合成
- **Carnitine** 缺乏→脂肪酸 β-氧化障礙→TG 堆積加劇
- **Thiamine (B1)** 消耗快→厭食數天即可缺乏→加重肝臟代謝障礙

**原發性 (~5%) vs 繼發性 (~95%)**：絕大多數 FHL 有潛在疾病（IBD、胰臟炎、膽管炎、DM、CKD、腫瘤）導致厭食→繼發 FHL。

## 二、臨床表現與診斷 (Clinical Signs & Diagnosis)

| 臨床表現 | 頻率 | 特徵描述 |
|---------|------|---------|
| 食慾廢絕 | >95% | 病史 >3-7 天完全不吃 |
| 黃疸 | ~80% | 皮膚、黏膜、鞏膜黃染 |
| 體重急速下降 | ~80% | 但可能被原肥胖體型掩蓋 |
| 嗜睡/虛弱 | ~70% | 肝功能障礙/電解質失衡 |
| 嘔吐 | ~40-50% | 常見但非必要表現 |
| 肝臟腫大 | ~60% | 腹部觸診肝緣超過肋弓 |
| 流涎 (ptyalism) | ~20% | 肝性腦病或噁心 |

### 診斷特徵性血檢模式

| 指標 | FHL 典型 | 膽管炎鑑別 | 臨床意義 |
|------|---------|-----------|---------|
| ALP | 顯著升高 (>500 U/L) | 升高 | — |
| GGT | 正常或輕度升高 | 顯著升高 | **ALP:GGT >5 高度提示 FHL** |
| Bilirubin | 明顯升高 | 升高 | 膽汁鬱積 |
| Albumin | 可能降低 | 變異大 | 肝臟合成↓ |
| BUN | 可能降低 | 變異大 | 肝臟合成↓ |

**確診**：肝臟細針抽吸 (FNA) 細胞學→>80% 肝細胞含脂肪空泡。超音波：肝臟瀰漫性高迴音（較腎皮質亮）。

## 三、治療策略 (Treatment)

### 營養支持（治療核心）

| 時間 | 熱量目標 | 備註 |
|------|---------|------|
| Day 1 | RER × 25-33% | 避免再餵食症候群 |
| Day 2-3 | RER × 50-75% | 漸增 |
| Day 4-5+ | RER × 100% | 維持至自主進食 |

RER = 70 × (BW kg)^0.75。**食道管 (esophagostomy tube)** 為首選長期營養支持，14-18 Fr，平均留置 3-6 週。

### 藥物治療

| 藥物 | 劑量 | 目的 | 證據等級 |
|------|------|------|---------|
| [藥物:Vitamin K1] | 0.5-1.5 mg/kg SC BID×3 | 矯正凝血（FNA 前必給） | Level II |
| [藥物:Maropitant] | 1 mg/kg SC/IV SID | 止吐 | Level I |
| [藥物:SAMe] | 90 mg/cat PO SID 空腹 | 肝臟保護/抗氧化 | Level III |
| [藥物:L-Carnitine] | 250-500 mg/cat/day PO | 促進脂肪酸 β-氧化 | Level III |
| [藥物:Mirtazapine] | 1.88 mg/cat PO q48h | 食慾促進 | Level II |
| Thiamine (B1) | 100 mg/cat/day | 預防 B1 缺乏 | Level II |
| Taurine | 250 mg/cat/day | 必需胺基酸補充 | Level III |

### 再餵食症候群預防
- 前 48 小時每 12h 監測血磷、鉀、鎂
- 緩慢增加熱量；補充 Thiamine、鉀、磷

## 四、併發症與監控 (Complications & Monitoring)

| 併發症 | 機轉 | 監測 | 處理 |
|--------|------|------|------|
| 再餵食症候群 | 灌食啟動後胰島素↑→磷/鉀/鎂內移 | 電解質 q12h 前 48h | 補充 KPO4、緩增熱量 |
| 凝血異常 | Vit K 依賴因子合成↓ | PT/aPTT | Vit K1 |
| 肝性腦病 | 氨代謝↓ | 神經狀態 | [藥物:Lactulose] 0.5 mL/kg BID-TID |
| 低血鉀（肌無力） | 流失+攝取↓ | 血鉀 | KCl 補充 |

**監測時程**：住院前 48h 每 12h 電解質；每日進食量/嘔吐/黃疸程度；每 48-72h 肝指數/Bilirubin；出院後每週回診至肝指數正常化。

## 五、預後與預後因子 (Prognosis)

| 情境 | 存活率 | 備註 |
|------|--------|------|
| 原發性 FHL + 積極營養支持 | >80% | 預後最佳 |
| 繼發性 FHL + 可治療原發病 | 60-85% | 取決於原發病 |
| 嚴重低白蛋白 <2.0 + 肝性腦病 | 較差 | 不良預後指標 |

**食道管平均留置 3-6 週**。自主進食恢復為拔管指標。

**飼主溝通**：食道管灌食是救命措施而非最後手段。照護不困難，會詳細教導。最重要預防：**肥胖貓絕不可突然禁食**。

## 六、人醫借鑑 (Translational Insights)

- 人醫 **NAFLD/NASH** (非酒精性脂肪肝/脂肪性肝炎) 為全球最常見肝病，但機轉與 FHL 不同——人醫為胰島素阻抗驅動的慢性過程，FHL 為厭食驅動的急性蓄積
- 人醫**再餵食症候群**管理原則直接適用於 FHL（WHO/NICE 指引）
- 人醫肝臟保護劑 (NAC, SAMe) 的研究可借鑑至獸醫

## 七、臨床爭議與知識空缺 (Controversies & Knowledge Gaps)

| 爭議主題 | 目前立場 | 證據等級 | 研究方向 |
|---------|---------|---------|---------|
| 原發性 vs 繼發性比例 | 傳統認為 95% 繼發性 | Level III | 真正原發性比例可能被低估 |
| SAMe 的臨床效益 | 理論支持但 RCT 不足 | Level III | 需貓 FHL 特異性 RCT |
| L-Carnitine 補充 | 理論支持，臨床效果不確定 | Level IV | 劑量優化研究需要 |
| 鼻胃管 vs 食道管 | 食道管為首選，鼻胃管為暫時過渡 | Level II | 各自最佳適應時機？ |
| 灌食配方最佳組成 | 高蛋白 (30-40% ME) 為共識 | Level II-III | 最佳脂肪/碳水比例？ |`,
  clinical_pearl: 'ALP:GGT 比值是 FHL 最有用的血檢鑑別線索。在大多數肝臟疾病中 ALP 和 GGT 會同步升高，但在 FHL 中 ALP 顯著升高而 GGT 正常或僅輕度升高。如果 GGT 明顯升高，要高度懷疑合併膽管炎或其他膽道疾病。此外，在黃疸貓中見到 coagulopathy，補充 Vitamin K1 後仍無改善，要考慮肝臟合成功能已嚴重受損。\n\n【台灣流行病學】貓肝脂肪沉積症在台灣為常見的貓肝臟急症，與台灣室內貓肥胖盛行率高度相關。台灣貓的肥胖問題普遍（估計超過 30% 過重），任何原因導致肥胖貓食慾廢絕超過 48 小時即應警覺 FHL 風險。台灣飼主多犬多貓家庭比例高，環境壓力導致的厭食是常見誘因。台灣獸醫院 E-tube 放置技術成熟，為 FHL 治療的關鍵支持工具。',
  common_mistakes: [
    '將 FHL 視為單獨疾病而未積極搜尋潛在病因（95% 為繼發性）',
    '灌食過快導致再餵食症候群（低血磷、低血鉀、心律不整）',
    '在凝血功能未評估前就進行肝臟 FNA（應先測 PT/aPTT）',
    '使用強迫餵食（syringe feeding）取代食道管（效率不足且增加厭食風險）',
    '營養支持第一天就給予全量熱量需求',
  ],
  disease_data: {
    signalment: '好發於肥胖的中年貓（BCS ≥ 7/9），平均年齡 7 歲。無明顯品種傾向。室內貓比室外貓更常見（肥胖率較高）。',
    etiology: '核心機轉為厭食導致的脂肪代謝失調。約 95% 為繼發性（潛在疾病導致厭食）：IBD/慢性腸病、胰臟炎、膽管炎、糖尿病、腎臟疾病、淋巴瘤等。約 5% 為原發性（壓力事件導致厭食，無潛在疾病）。',
    pathogenesis: '厭食 → 負能量平衡 → 周邊脂肪分解加速 → 游離脂肪酸大量湧入肝臟 → 貓缺乏高效的 VLDL 合成與分泌能力 → 三酸甘油酯在肝細胞內蓄積 → 肝細胞腫脹與功能障礙 → 膽汁鬱積（intrahepatic cholestasis）→ 黃疸 → 嚴重時肝衰竭。必需胺基酸（arginine, taurine, carnitine）缺乏加劇脂肪代謝障礙。',
    clinical_signs: [
      { sign: '食慾廢絕', category: 'primary', description: '通常有 > 3-7 天完全不吃的病史' },
      { sign: '黃疸', category: 'primary', description: '皮膚、黏膜、鞏膜黃染，肝內膽汁鬱積所致' },
      { sign: '體重急劇下降', category: 'primary', description: '肌肉消耗明顯，但可能被原先的肥胖掩蓋' },
      { sign: '嗜睡/虛弱', category: 'secondary', description: '肝功能障礙、低血糖或電解質失衡' },
      { sign: '嘔吐', category: 'secondary', description: '約 40-50% 病例出現' },
      { sign: '肝臟腫大', category: 'secondary', description: '腹部觸診可觸及，肝緣超過肋弓' },
      { sign: '流涎（ptyalism）', category: 'secondary', description: '肝性腦病或噁心的表現' },
    ],
    staging: null,
    differential_diagnosis: [
      { condition: '膽管炎/膽道阻塞', key_differentiator: 'GGT 與 ALP 同步顯著升高（ALP:GGT < 5），超音波可見膽道擴張或膽結石' },
      { condition: '貓傳染性腹膜炎（FIP）', key_differentiator: '高球蛋白血症（A:G ratio < 0.4），腹水高蛋白（> 3.5 g/dL），Rivalta 陽性' },
      { condition: '肝臟淋巴瘤', key_differentiator: '超音波可見局灶性或多灶性低回聲病灶，FNA 可見異型淋巴球' },
      { condition: '三體炎（Triaditis）', key_differentiator: 'GGT 升高提示膽管炎成分，fPLI 升高提示胰臟炎成分，可能同時合併 FHL' },
      { condition: '肝臟類澱粉沉積症', key_differentiator: 'Siamese 和 Abyssinian 好發，肝臟易碎出血，細胞學或組織病理可見類澱粉沉積' },
    ],
    diagnostic_workup: '1. CBC/生化全套（注意 ALP/GGT 比值、Bilirubin、Albumin、BUN、Glucose）→ 2. 凝血功能（PT/aPTT，FNA 前必測）→ 3. 腹腔超音波（肝臟回聲評估、膽道系統、胰臟、腸道）→ 4. 肝臟 FNA 細胞學（確診）→ 5. 搜尋潛在病因：T4、fPLI、尿液分析、FeLV/FIV → 6. 必要時肝臟組織切片（排除其他肝病）',
    treatment_protocol: '一般照護：靜脈輸液矯正脫水和電解質失衡、Vitamin K1 0.5-1.5 mg/kg SC q12h × 3 doses（若凝血異常）、Maropitant 1 mg/kg SC/IV SID 止吐、Vitamin B complex 補充（尤其 Thiamine）、SAMe 20 mg/kg PO SID 肝臟保護。專科照護：食道管放置並啟動營養支持計畫（RER 從 25% 逐日增加）、嚴重低白蛋白或凝血障礙考慮 FFP 輸注、肝性腦病處理（Lactulose 0.5 mL/kg PO BID-TID）、處理潛在疾病（IBD/胰臟炎/膽管炎等）。',
    prognosis: '積極營養支持下總體存活率約 60-85%。原發性 FHL 預後較好（存活率 > 80%）。繼發性 FHL 預後取決於潛在疾病的可治療性。食道管平均留置 3-6 週。不良預後指標：嚴重低白蛋白（< 2.0 g/dL）、凝血障礙對 Vitamin K 無反應、肝性腦病、嚴重低血磷。',
    monitoring: '住院前 48 小時：每 12 小時監測電解質（磷、鉀、鎂）以預防再餵食症候群。每日評估進食量、嘔吐頻率、黃疸程度。每 48-72 小時追蹤肝指數和 Bilirubin。出院後：每週回診評估營養攝取和體重變化。食道管照護教育。每 1-2 週追蹤肝指數直至正常化。',
    owner_communication: '肝臟脂肪變性是嚴重但可治療的疾病。治療的核心是營養支持——食道管灌食是最有效且最安全的方式。食道管照護並不困難，我們會詳細教導。治療需要耐心，食道管可能需要留置 3-6 週。完全康復的機率是好的。預防最重要的一點：肥胖貓絕對不能突然禁食——任何減重計畫都必須循序漸進。',
  },
  diagnostic_data: null,
  procedure_data: null,
  visual_placeholders: [
    { position: '病理生理段落後', type: 'flowchart', description: 'FHL 病理生理流程圖' },
    { position: '營養支持方案段落後', type: 'timeline', description: '灌食量逐日增加時間表' },
  ],
  interactive_placeholders: [],
  drug_api_links: ['Maropitant', 'Vitamin K1', 'SAMe', 'Lactulose'],
  references: [
    { type: 'journal', citation: 'Center SA. "Feline hepatic lipidosis." Vet Clin North Am Small Anim Pract. 2005;35(1):225-269.', relevance: 'FHL 綜合回顧' },
    { type: 'journal', citation: 'Armstrong PJ, Blanchard G. "Hepatic lipidosis in cats." Vet Clin North Am Small Anim Pract. 2009;39(3):599-616.', relevance: 'FHL 管理與營養支持' },
    { type: 'guideline', citation: 'AAHA Nutritional Assessment Guidelines for Dogs and Cats. J Am Anim Hosp Assoc. 2010;46(4):285-296.', relevance: '營養評估與灌食指引' },
    { type: 'textbook', citation: 'Ettinger SJ, Feldman EC. Textbook of Veterinary Internal Medicine, 8th ed. Elsevier, 2017. Chapter on Hepatobiliary Disease in Cats.', relevance: '肝臟疾病基礎教材' },
  ],
  is_current: true,
  created_at: now,
};

/** 犬腎上腺皮質機能低下（Addison's）— 疾病型 */
const contentAddisons: NodeContent = {
  id: 'CONTENT-IM-L3-011',
  node_id: 'IM-L3-011',
  version: 1,
  summary: '犬腎上腺皮質機能低下（Hypoadrenocorticism, Addison\'s disease）是因腎上腺皮質功能不足導致糖皮質素和/或鹽皮質素缺乏的疾病。被稱為「偉大的模仿者（The Great Pretender）」，因其臨床症狀極為多變且非特異性。典型電解質異常為低血鈉/高血鉀（Na:K < 27）。ACTH stimulation test 是確診金標準。',
  learning_objectives: [
    '說明犬 Addison\'s disease 的病因分類（原發性 vs 繼發性 vs 醫源性）',
    '辨識 Addison\'s disease 的典型與非典型臨床表現',
    '正確判讀 ACTH stimulation test 結果以確診 Addison\'s',
    '處理 Addisonian crisis 的急救流程',
    '制定 Addison\'s 病患的長期替代治療方案',
  ],
  key_points: [
    'Addison\'s 被稱為「The Great Pretender」——症狀高度非特異性且間歇性',
    '典型電解質異常：低 Na、高 K（Na:K ratio < 27 高度提示）',
    '約 10-30% 為「非典型 Addison\'s」——電解質正常（僅糖皮質素缺乏）',
    'ACTH stimulation test：Pre- 和 Post-ACTH cortisol 均 < 2 μg/dL 確診',
    '急性危象（Addisonian crisis）：嚴重低血壓、心搏過緩、高血鉀心律不整，為急診',
    '長期治療：DOCP（Percorten-V）IM q25d + Prednisolone PO SID',
    '好發品種：Standard Poodle、Portuguese Water Dog、Bearded Collie、Nova Scotia Duck Tolling Retriever',
  ],
  body: `# 犬腎上腺皮質機能低下 (Hypoadrenocorticism / Addison's Disease)

## 一、病理機制 (Pathophysiology)

**機轉鏈**：免疫介導性腎上腺皮質破壞（T 細胞介導 + 抗腎上腺抗體）→zona glomerulosa + zona fasciculata 漸進性破壞→當 >85-90% 皮質被破壞→鹽皮質素 (aldosterone) + 糖皮質素 (cortisol) 分泌不足→

**Aldosterone 缺乏**→遠端腎小管 Na+ 重吸收↓ + K+ 排泄↓→低血鈉/高血鉀→細胞外液容量↓→低血壓→腎前性氮血症；高鉀血症→心肌興奮性改變→心搏過緩/心律不整

**Cortisol 缺乏**→糖質新生↓→低血糖風險；壓力反應能力喪失；血管張力↓→低血壓加劇；胃腸道黏膜完整性↓→嘔吐、腹瀉

[圖片:Addison's pathophysiology — adrenal destruction → aldosterone/cortisol deficiency → electrolyte and hemodynamic consequences]

**典型 vs 非典型**：約 70% 為典型型（aldosterone + cortisol 均缺乏，有電解質異常）；約 30% 為**非典型型**（僅 cortisol 缺乏，電解質正常，但可能隨時間進展為典型型）。

**醫源性 Addison's**：[藥物:Trilostane] 治療 Cushing's 時過量→急性腎上腺皮質壞死；長期外源性類固醇突然停藥→HPA axis 抑制。

## 二、臨床表現與診斷 (Clinical Signs & Diagnosis)

### 「偉大的模仿者 (The Great Pretender)」

| 表現類型 | 常見症狀 | 特徵 |
|---------|---------|------|
| 消化道 | 嘔吐、腹瀉、食慾↓ | 間歇性、時好時壞 |
| 全身性 | 虛弱、嗜睡、體重↓ | 壓力時惡化 |
| 心血管 | 心搏過緩、低血壓 | 高鉀血症所致 |
| 急性危象 | 休克、虛脫、低體溫 | **Addisonian crisis** |

**關鍵線索**：症狀 waxing and waning；輸液後快速改善又再度惡化；壓力事件後症狀加重；缺少 stress leukogram（淋巴球/嗜酸球不降反升）。

### 診斷

| 檢測 | 結果 | 診斷價值 |
|------|------|---------|
| Na:K ratio | < 27（正常 27-40） | 高度提示（但 30% 非典型型正常） |
| Baseline cortisol | > 2 μg/dL | 可**排除** Addison's |
| **ACTH stim test** | Pre & Post cortisol < 2 μg/dL | **金標準確診** |
| 內源性 ACTH | 升高（原發性）vs 降低（繼發性） | 鑑別原發/繼發 |
| 胸腔 X光 | 微小心臟 (microcardia) | 重要線索 |
| ECG | T 波高尖、QRS 增寬、P 消失 | 高鉀血症變化 |

## 三、治療策略 (Treatment)

### Addisonian Crisis 急救

| 步驟 | 措施 | 劑量 |
|------|------|------|
| 1 | 0.9% NaCl IV 輸液 | 休克劑量 60-90 mL/kg/hr |
| 2 | [藥物:Dexamethasone] SP IV | 0.5-2 mg/kg（不干擾 cortisol 測量） |
| 3 | 高鉀急救：10% Calcium gluconate IV | 0.5-1.5 mL/kg 緩慢推注（ECG 監測） |
| 4 | Regular insulin + Dextrose | 0.1-0.25 U/kg IV + 50% dextrose |

### 長期維持治療

| 藥物 | 劑量 | 備註 | 證據等級 |
|------|------|------|---------|
| [藥物:DOCP] (Percorten-V/Zycortal) | 2.2 mg/kg IM/SC q25-28d | 鹽皮質素首選 | Level I |
| [藥物:Fludrocortisone] | 0.01-0.02 mg/kg PO SID-BID | 口服替代 | Level II |
| [藥物:Prednisolone] | 0.1-0.2 mg/kg PO SID | 糖皮質素補充 | Level I |

**緊迫期間**（手術、生病、旅行）：Prednisolone 劑量增加 2-10 倍。

## 四、併發症與監控 (Complications & Monitoring)

| 併發症 | 機轉 | 監測 | 處理 |
|--------|------|------|------|
| Addisonian crisis | 急性失代償/壓力觸發 | 電解質/血壓/ECG | 急救流程 |
| DOCP 過量 | 醫源性高鈉/低鉀 | 電解質 | 調整劑量/間隔 |
| 類固醇副作用 | 長期 prednisolone | PU/PD/體重 | 最低有效劑量 |

**監測時程**：DOCP 注射後 2 週測電解質；穩定後每 3-6 月追蹤；每次回診電解質 + 臨床評估。

## 五、預後與預後因子 (Prognosis)

**預後極佳**——一旦確診並開始治療，多數犬可維持正常壽命與良好生活品質。

**關鍵成功因素**：飼主依從性（規律投藥/回診）、緊迫期間及時增量、隨身攜帶 emergency 類固醇。

**飼主溝通**：Addison's 是終身疾病但治療效果極好。最重要的是規律投藥和回診。壓力情境前主動增加 prednisolone。建議佩戴醫療識別標籤。

## 六、人醫借鑑 (Translational Insights)

- 人醫 Addison's 的 **adrenal crisis prevention** 教育策略（sick day rules、emergency injection kit）可直接借鑑至獸醫飼主教育
- 人醫使用 **hydrocortisone continuous infusion** 治療急性危象，獸醫多用 dexamethasone bolus
- 人醫的 **autoimmune polyendocrine syndrome** (APS) 概念——Addison's 合併其他自體免疫疾病——在犬亦有報告（Addison's + hypothyroidism + DM）

## 七、臨床爭議與知識空缺 (Controversies & Knowledge Gaps)

| 爭議主題 | 目前立場 | 證據等級 | 研究方向 |
|---------|---------|---------|---------|
| DOCP vs Fludrocortisone | DOCP 為多數首選 | Level II | 長期 QoL 比較研究 |
| 非典型進展為典型的頻率 | 約 30% 可能進展 | Level III | 長期前瞻性追蹤 |
| 基因檢測預測風險 | 部分品種 DLA haplotype 已知 | Level III | 商品化基因檢測可行性 |
| DOCP 最佳劑量與間隔 | 起始 2.2 mg/kg q25d，個別化調整 | Level II | 更低劑量是否足夠？ |
| 貓 Addison's | 極罕見，治療經驗有限 | Level IV | 貓特異性治療指引需要 |`,
  clinical_pearl: 'Na:K ratio < 27 是 Addison\'s 最有價值的篩檢線索，但要記住約 10-30% 的 Addison\'s 是非典型的（電解質正常）。任何犬隻出現反覆的、間歇性的嘔吐/腹瀉/虛弱，而且壓力時症狀加重——特別是輸液後快速改善又再度惡化——都應該考慮 Addison\'s。此外，若 Cushing 病犬使用 Trilostane 治療後突然惡化，必須立即排除醫源性 Addison\'s。\n\n【台灣流行病學】Addison 病在台灣相對少見但容易被誤診為其他慢性消化道疾病。台灣常見的好發品種包括標準型貴賓犬、西高地白梗等。由於台灣 Trilostane 使用日益普及治療 Cushing 症，醫源性 Addison 危機需特別留意。DOCP（Percorten-V）在台灣取得管道有限，Fludrocortisone 為替代選項。台灣獸醫師應將 Addison 納入「反覆不明原因虛脫」的鑑別診斷。',
  common_mistakes: [
    '僅因電解質正常就排除 Addison\'s（10-30% 為非典型，電解質正常）',
    '使用 Prednisolone 進行急性處理（會干擾 ACTH stimulation test 中的 cortisol 測量，應用 Dexamethasone）',
    '忽略「waxing and waning」的病史模式（間歇性改善又惡化是 Addison\'s 的特徵）',
    '急性危象時使用含鉀輸液（如 Lactated Ringer\'s）——應使用 0.9% NaCl',
    '確診後未同時提供糖皮質素和鹽皮質素替代治療',
  ],
  disease_data: {
    signalment: '好發於年輕至中年母犬（中位年齡 4-5 歲，70% 為母犬）。好發品種：Standard Poodle、Portuguese Water Dog、Bearded Collie、Nova Scotia Duck Tolling Retriever、West Highland White Terrier、Great Dane。',
    etiology: '原發性（最常見）：免疫介導性腎上腺皮質破壞（淋巴球性腎上腺炎），需 > 85-90% 皮質破壞才出現症狀。繼發性：腦下垂體 ACTH 分泌不足（腫瘤或創傷）。醫源性：Trilostane 治療 Cushing\'s 導致腎上腺壞死，或長期外源性糖皮質素突然停藥。',
    pathogenesis: '腎上腺皮質破壞 → Aldosterone 缺乏 → 腎臟無法保留 Na+ 和排泄 K+ → 低血鈉/高血鉀 → 細胞外液減少 → 低血壓/脫水 → 腎前性氮血症。Cortisol 缺乏 → 無法維持血管張力 → 低血壓加劇。無法維持糖質新生 → 低血糖。消化道黏膜完整性下降 → 嘔吐/腹瀉。',
    clinical_signs: [
      { sign: '嘔吐', category: 'primary', description: '間歇性，壓力時加重，約 70-90% 病例' },
      { sign: '虛弱/嗜睡', category: 'primary', description: '低血壓、低血糖、電解質失衡所致' },
      { sign: '食慾下降', category: 'primary', description: '可為間歇性，輸液後短暫改善' },
      { sign: '腹瀉', category: 'primary', description: '約 40-60% 病例，可含血（melaena）' },
      { sign: '脫水', category: 'secondary', description: 'Aldosterone 缺乏致鈉和水分流失' },
      { sign: '心搏過緩', category: 'secondary', description: '高血鉀所致，嚴重時可致心律不整' },
      { sign: '低體溫', category: 'secondary', description: '皮質醇缺乏影響體溫調節' },
    ],
    staging: null,
    differential_diagnosis: [
      { condition: '急性腎損傷 (AKI)', key_differentiator: '腎臟超音波異常、USG 等張或低、無低 Na:K 比（除非伴隨泌尿道阻塞）' },
      { condition: '急性胃腸炎/胰臟炎', key_differentiator: '電解質通常正常或輕度異常、cPLI 可鑑別胰臟炎、不會出現 Na:K < 27' },
      { condition: '泌尿道阻塞（post-renal）', key_differentiator: '高血鉀但有明確阻塞證據（超音波見積水、膀胱腫脹）' },
      { condition: 'Whipworm 感染', key_differentiator: '犬鉤蟲和鞭蟲感染可造成類似低 Na/高 K，糞便檢查可鑑別' },
      { condition: '重複器官疾病（胸水、腹水）', key_differentiator: '低鈉可見於嚴重第三空間流失，但 ACTH stim 正常' },
    ],
    diagnostic_workup: '1. CBC（可見嗜酸性球增多——在壓力反應中不正常升高，以及淋巴球增多）→ 2. 生化（Na/K 比值 < 27、BUN/Cre 升高、低血糖、低白蛋白）→ 3. ECG（高血鉀心電圖變化：peaked T, wide QRS）→ 4. Basal cortisol（< 2 μg/dL 高度提示，> 2 μg/dL 可排除）→ 5. ACTH stimulation test（金標準）：Pre-cortisol + Cosyntropin 5 μg/kg IV → 1 hr Post-cortisol。Pre 和 Post 均 < 2 μg/dL 確診 → 6. 內源性 ACTH 測量（區分原發性 vs 繼發性）',
    treatment_protocol: '急性危象：0.9% NaCl 快速輸液（80-90 mL/kg/hr 第一小時）→ 高血鉀處理（Calcium gluconate 10% 0.5-1.0 mL/kg slow IV + Regular insulin 0.1-0.25 U/kg IV with Dextrose）→ Dexamethasone SP 0.1-0.2 mg/kg IV（不干擾 ACTH stim test）。長期治療：DOCP (Percorten-V) 2.2 mg/kg IM q25 天（首選鹽皮質素替代）+ Prednisolone 0.1-0.2 mg/kg PO SID（糖皮質素替代）。壓力時劑量加倍（手術、住院、搬家）。替代方案：Fludrocortisone 0.02 mg/kg PO SID-BID（同時提供鹽皮質素和部分糖皮質素活性）。',
    prognosis: '一旦確診並開始適當替代治療，預後極佳。多數犬可維持正常壽命和良好生活品質。Addisonian crisis 若未及時辨識和處理，死亡率高。醫源性 Addison\'s（Trilostane 導致）預後取決於腎上腺恢復程度——部分犬可自行恢復。',
    monitoring: '確診後第一個月：每 2 週追蹤電解質（Na/K）和腎功能。穩定後：每 3-4 個月追蹤。DOCP 注射前測電解質以調整劑量和間隔。Prednisolone 劑量依臨床症狀調整（使用最低有效劑量）。注意體重、食慾、活動力變化。',
    owner_communication: 'Addison\'s disease 是需要終生治療的疾病，但只要按時用藥，狗狗可以過完全正常的生活。最重要的是不能漏藥。壓力情境（手術、生病、旅行）時需要增加糖皮質素劑量——請事先與醫師討論。隨身攜帶注射用 Dexamethasone 以備急用。定期追蹤電解質確保藥物劑量適當。',
  },
  diagnostic_data: null,
  procedure_data: null,
  visual_placeholders: [
    { position: 'ACTH stim test 流程', type: 'flowchart', description: 'ACTH stimulation test 操作與判讀流程圖' },
    { position: '急性危象處理段落', type: 'flowchart', description: 'Addisonian crisis 急救流程圖' },
    { position: '長期替代治療表後', type: 'comparison_table', description: 'DOCP vs Fludrocortisone 比較表' },
  ],
  interactive_placeholders: [],
  drug_api_links: ['DOCP', 'Fludrocortisone', 'Prednisolone', 'Dexamethasone', 'Calcium gluconate', 'Regular insulin'],
  references: [
    { type: 'journal', citation: 'Klein SC, Peterson ME. "Canine hypoadrenocorticism: Part I." Can Vet J. 2010;51(1):63-69.', relevance: 'Addison\'s 病因與診斷回顧' },
    { type: 'guideline', citation: 'Scott-Moncrieff JC. "Hypoadrenocorticism." In: Feldman EC et al. Canine and Feline Endocrinology, 4th ed. Elsevier, 2015. pp 485-520.', relevance: 'Addison\'s 完整參考章節' },
    { type: 'journal', citation: 'Lathan P, Thompson AL. "Management of hypoadrenocorticism (Addison\'s disease) in dogs." Vet Med (Auckl). 2018;9:1-10.', relevance: 'Addison\'s 長期管理策略' },
    { type: 'textbook', citation: 'Ettinger SJ, Feldman EC. Textbook of Veterinary Internal Medicine, 8th ed. Elsevier, 2017.', relevance: '內分泌疾病基礎教材' },
  ],
  is_current: true,
  created_at: now,
};

/** 蛋白質流失性腸病 (PLE) — 疾病型 */
const contentPLE: NodeContent = {
  id: 'CONTENT-IM-L3-012',
  node_id: 'IM-L3-012',
  version: 1,
  summary: '蛋白質流失性腸病（Protein-Losing Enteropathy, PLE）是一組以腸道蛋白質過度流失導致低白蛋白血症為特徵的症候群。犬最常見的潛在病因為腸道淋巴管擴張（intestinal lymphangiectasia）和慢性腸炎（IBD/CE）。低白蛋白血症可導致體腔積液、血栓栓塞等嚴重併發症。',
  learning_objectives: [
    '列舉犬 PLE 的主要病因並說明各自的病理機轉',
    '區分 PLE 與蛋白質流失性腎病（PLN）的診斷策略',
    '解釋腸道淋巴管擴張的病理生理與飲食管理原則',
    '說明 PLE 合併低白蛋白血症時的併發症管理（血栓預防、體腔積液）',
    '制定 PLE 的分級治療方案',
  ],
  key_points: [
    'PLE 的定義：腸道蛋白質流失 → 低白蛋白血症（Albumin < 2.0 g/dL）',
    '最常見病因：腸道淋巴管擴張（lymphangiectasia）和慢性發炎性腸病（IBD/CE）',
    '好發品種：Yorkshire Terrier、Soft-Coated Wheaten Terrier、Rottweiler、Norwegian Lundehund',
    '確診需要腸道組織切片（內視鏡或全層外科切片）',
    'Albumin < 1.5 g/dL 時血栓栓塞風險顯著增加——需啟動抗血栓治療',
    '飲食管理：淋巴管擴張需超低脂飲食；IBD 型 PLE 需水解蛋白或新型蛋白飲食',
    '低離子鈣（ionized calcium）是常見但易被忽略的併發症',
  ],
  body: `# 蛋白質流失性腸病 (Protein-Losing Enteropathy, PLE)

## 一、病理機制 (Pathophysiology)

**三大機轉路徑**：

1. **炎症性蛋白流失**：慢性腸道炎症（IBD/淋巴漿細胞性腸炎）→黏膜屏障完整性破壞→血漿蛋白滲漏至腸腔→白蛋白 + 球蛋白同時流失 (panhypoproteinemia)

2. **淋巴管擴張 (Lymphangiectasia)**：原發性（先天性淋巴管發育異常）或繼發性（慢性炎症→淋巴管阻塞）→富含蛋白的淋巴液滲入腸腔→同時流失白蛋白、球蛋白、淋巴球、抗凝血因子

3. **腫瘤性**：腸道淋巴瘤或腺癌→黏膜破壞/淋巴回流阻塞→蛋白流失

[圖片:PLE three mechanisms — mucosal inflammation vs lymphangiectasia vs neoplastic disruption]

**關鍵後果**：
- **低白蛋白血症**→膠體滲透壓↓→腹水/胸水/周邊水腫
- **抗凝血酶 III (AT-III) 流失**→高凝血狀態→**血栓栓塞風險極高**
- **25(OH)D + Vitamin D 結合蛋白流失**→ionized calcium↓→肌肉震顫/癲癇
- **淋巴球流失**→細胞免疫功能↓

## 二、臨床表現與診斷 (Clinical Signs & Diagnosis)

| 臨床表現 | 頻率 | 特徵 |
|---------|------|------|
| 慢性小腸型下痢 | 常見 | 大量、水樣、體重↓ |
| 體重減輕/消瘦 | 常見 | 嚴重肌肉流失 |
| 腹水/周邊水腫 | 中等 | Alb <2.0 時出現 |
| 嘔吐 | 變異大 | 非必要表現 |
| 呼吸困難 | 少見 | 胸水所致 |
| 血栓栓塞 | 少見但致命 | AT-III 流失 |

### 診斷特徵

| 指標 | 典型結果 | 臨床意義 |
|------|---------|---------|
| Albumin + Globulin | **同時降低** | PLE 特徵（肝病多僅 Alb↓） |
| 淋巴球計數 | 降低 | 腸道淋巴球流失 |
| 膽固醇 | 降低 | 吸收不良 |
| Cobalamin (B12) | 常降低 | 迴腸吸收不良（獨立預後因子） |
| 腹部超音波 | 腸壁增厚 + 黏膜下高迴音條紋 | 條紋提示淋巴管擴張 |

**確診**：內視鏡 + 多部位組織病理（十二指腸、空腸、迴腸、結腸）。可見淋巴漿細胞浸潤 ± 乳糜管擴張 (dilated lacteals)。

## 三、治療策略 (Treatment)

### 分層治療

| 治療層級 | 措施 | 適應症 |
|---------|------|--------|
| 飲食 | **超低脂飲食** (<15% DM fat) + MCT oil | 所有 PLE，尤其淋巴管擴張 |
| 免疫抑制一線 | [藥物:Prednisolone] 2 mg/kg PO SID | IBD 相關 PLE |
| 免疫抑制二線 | [藥物:Chlorambucil] 4-6 mg/m2 PO q48h | 類固醇反應不佳 |
| 免疫抑制替代 | [藥物:Mycophenolate] 10 mg/kg PO BID | 難治性 |
| 營養補充 | [藥物:Cobalamin] 250-1500 μg SC q1-2wk | 所有 PLE |
| 抗血栓 | [藥物:Clopidogrel] 2 mg/kg PO SID | Alb <2.0 |
| 蛋白補充 | FFP 或人血白蛋白 | Alb <1.5 |

**超低脂飲食**為淋巴管擴張的核心治療——長鏈脂肪酸需經淋巴管吸收，低脂飲食 + MCT oil（中鏈脂肪酸直接入門脈系統）可顯著減少淋巴漏出。

## 四、併發症與監控 (Complications & Monitoring)

| 併發症 | 機轉 | 監測 | 處理 |
|--------|------|------|------|
| 血栓栓塞 | AT-III 流失→高凝血 | 臨床徵兆/AT-III 活性 | 抗血栓預防 |
| 低鈣血症 | Vit D 結合蛋白流失 | **ionized calcium**（非 total Ca） | Vit D + Ca 補充 |
| 低鎂血症 | 腸道流失 | 血鎂 | MgSO4 補充 |
| 免疫抑制副作用 | 長期類固醇/Chlorambucil | CBC/肝指數 | 最低有效劑量 |

**監測**：每 1-2 週 Albumin（初期）；每 4-8 週 Alb/Cobalamin/體重（PLE 穩定後）；CCECAI 評分定期評估。

## 五、預後與預後因子 (Prognosis)

| PLE 亞型 | 預後 | 中位存活 |
|----------|------|---------|
| 食物反應性 | 最佳 | 長期緩解 >80% |
| 淋巴管擴張（飲食控制） | 良好 | 穩定管理下數年 |
| IBD 相關（Alb >2.0 恢復） | 中等 | 1-2+ 年 |
| IBD 相關（Alb 持續 <1.5） | 不良 | 2-5 個月 |
| 貓腸道淋巴瘤 | 不良 | 3-9 個月（化療） |

**負面預後因子**：CCECAI >12、Alb 持續 <1.5、Cobalamin 未補充、Yorkshire Terrier 品種。

**飼主溝通**：PLE 嚴重度差異大，部分可長期控制。飲食管理極為關鍵（嚴格低脂）。定期追蹤白蛋白。

## 六、人醫借鑑 (Translational Insights)

- 人醫 **intestinal lymphangiectasia** (Waldmann disease) 的超低脂飲食 + MCT 策略直接適用
- 人醫的**靜脈血栓預防**策略（低分子量 heparin）在獸醫 PLE 可借鑑
- 人醫 IBD 生物製劑（anti-TNF-α）在獸醫尚未廣泛應用

## 七、臨床爭議與知識空缺 (Controversies & Knowledge Gaps)

| 爭議主題 | 目前立場 | 證據等級 | 研究方向 |
|---------|---------|---------|---------|
| 最佳飲食脂肪上限 | <15% DM 為常用 | Level II-III | 個別化脂肪耐受度？ |
| Cobalamin 口服 vs 注射 | 兩者可能等效 | Level II | 口服高劑量的 PLE 特異性研究 |
| 抗血栓何時開始 | Alb <2.0 建議開始 | Level III | 最佳介入閾值？AT-III 導向？ |
| 全層切片 vs 內視鏡切片 | 內視鏡為首選，全層用於不確定時 | Level III | 各自 miss rate？ |
| Budesonide vs Prednisolone | Budesonide 全身副作用較少 | Level II | PLE 中兩者等效性？ |`,
  clinical_pearl: '在 PLE 犬中，ionized calcium 低下是一個常被忽略但臨床上極為重要的併發症。PLE 導致 Vitamin D 結合蛋白和白蛋白流失 → 25(OH)D 和 ionized calcium 均降低 → 可導致肌肉震顫、癲癇發作。不要僅看 total calcium——它會因低白蛋白而偽低；必須測量 ionized calcium。此外，Yorkshire Terrier 若出現低蛋白腹水，PLE 合併淋巴管擴張幾乎是第一鑑別。\n\n【台灣流行病學】蛋白質流失性腸病在台灣小型犬中並不罕見，約克夏梗是台灣最具代表性的 PLE 好發品種，常合併淋巴管擴張。台灣本土飼養的軟毛麥色梗雖少，但臨床上其他小型犬（如馬爾濟斯、吉娃娃）亦有 PLE 報告。台灣獸醫院多具備消化道內視鏡與黏膜切片能力，但全層切片仍需外科配合。低白蛋白犬在台灣亞熱帶環境下的血栓風險管理需特別留意。',
  common_mistakes: [
    '未排除 PLN 就診斷 PLE（必須先測 UPC ratio）',
    '僅用內視鏡切片而錯過淋巴管擴張（全層切片敏感度更高）',
    '忽略 ionized calcium 監測（僅看 total calcium 會被低白蛋白干擾）',
    'Albumin < 1.5 g/dL 未啟動抗血栓治療（血栓栓塞是重要死因）',
    '淋巴管擴張型 PLE 使用高脂飲食（需超低脂飲食 + MCT oil）',
  ],
  disease_data: {
    signalment: '好發品種：Yorkshire Terrier（淋巴管擴張）、Soft-Coated Wheaten Terrier（PLE + PLN 複合症）、Rottweiler、Norwegian Lundehund、Basenji、Shar-Pei。中年犬為主（3-8 歲），無明顯性別偏好。',
    etiology: '腸道淋巴管擴張（原發性或繼發性）為最常見原因。慢性發炎性腸病（lymphocytic-plasmacytic enteritis 為主）。腸道淋巴瘤（尤其 T-cell）。肉芽腫性腸炎（黴菌性：Histoplasma, Pythium）。組織球性潰瘍性結腸炎（Boxer）。',
    pathogenesis: '淋巴管擴張：淋巴引流受阻或先天性異常 → 腸道淋巴管擴張、破裂 → 富含蛋白的淋巴液滲入腸腔 → 白蛋白、球蛋白、淋巴球均流失。IBD 型：腸道黏膜慢性發炎 → 通透性增加 → 蛋白質選擇性或非選擇性滲漏。共同結果：低白蛋白血症 → 膠體滲透壓下降 → 體腔積液（腹水、胸水）。同時 Antithrombin III 流失 → 高凝血狀態 → 血栓栓塞風險。',
    clinical_signs: [
      { sign: '慢性腹瀉', category: 'primary', description: '小腸型為主（量多、水樣），可為間歇性' },
      { sign: '體重減輕', category: 'primary', description: '蛋白質和營養流失，肌肉消耗' },
      { sign: '腹水/皮下水腫', category: 'primary', description: 'Albumin < 1.5 g/dL 時常見，漏出液' },
      { sign: '嘔吐', category: 'secondary', description: '約 40-50% 病例' },
      { sign: '呼吸困難', category: 'secondary', description: '胸水或肺血栓栓塞' },
      { sign: '肌肉震顫/癲癇', category: 'secondary', description: '低離子鈣（ionized calcium）所致' },
    ],
    staging: null,
    differential_diagnosis: [
      { condition: '蛋白質流失性腎病（PLN）', key_differentiator: 'UPC ratio > 2.0，白蛋白低但球蛋白通常正常（選擇性蛋白尿）' },
      { condition: '肝臟合成不足', key_differentiator: '膽汁酸升高、肝指數異常、超音波肝臟異常（小肝、微血管發育不良等）' },
      { condition: '右心衰竭', key_differentiator: '心臟超音波異常、頸靜脈怒張、肝臟鬱血' },
      { condition: '腸道淋巴瘤', key_differentiator: '可為 PLE 的病因之一，內視鏡或外科切片 + 免疫組織化學可鑑別（T-cell vs B-cell）' },
      { condition: '外分泌胰臟機能不全（EPI）', key_differentiator: 'TLI 低、體重減輕但低蛋白血症不如 PLE 顯著' },
    ],
    diagnostic_workup: '1. CBC/生化全套（Albumin、Globulin、Cholesterol、Calcium、淋巴球計數）→ 2. UPC ratio（排除 PLN）→ 3. 膽汁酸（排除肝臟合成不足）→ 4. 腹腔超音波（腸壁厚度、分層、淋巴結、腹水）→ 5. Ionized calcium 測量 → 6. 腸道組織學確診：內視鏡多部位切片 或 全層外科切片（淋巴管擴張需全層切片）→ 7. 免疫組織化學（排除淋巴瘤）→ 8. Cobalamin（Vitamin B12）和 Folate 測量',
    treatment_protocol: '飲食管理（核心）：淋巴管擴張型需超低脂飲食（脂肪 < 10% DM）+ MCT oil；IBD 型需水解蛋白或新型蛋白飲食。藥物治療（一般照護）：Prednisolone 1-2 mg/kg PO BID 漸減 + Cobalamin（B12）補充 250-1500 μg SC q1wk × 6 → q2wk × 6 → q1mo。專科照護：Chlorambucil 4-6 mg/m² PO q48h（二線免疫抑制），或 Mycophenolate 10 mg/kg PO BID，或 Cyclosporine 5 mg/kg PO BID。併發症管理：Albumin < 1.5 g/dL → Clopidogrel 2 mg/kg PO SID 抗血栓。低 ionized calcium → Calcitriol 20-30 ng/kg/day PO + Calcium carbonate。嚴重低白蛋白 → Fresh frozen plasma 或 human albumin 25%（慎用）。',
    prognosis: '預後高度取決於潛在病因和治療反應。單純淋巴管擴張：飲食管理反應良好者中位存活 > 2 年。IBD 型 PLE：免疫抑制治療反應良好者預後中等至佳。腸道淋巴瘤型 PLE：預後較差（中位存活 3-6 個月）。不良預後指標：Albumin < 1.0 g/dL、體腔積液、血栓栓塞事件、對治療無反應。',
    monitoring: '確診後每 2-4 週追蹤 Albumin、體重、糞便品質。穩定後每 2-3 個月追蹤。監測 ionized calcium（每月至穩定）。使用免疫抑制劑時監測 CBC（Chlorambucil 骨髓抑制）。Cobalamin 補充後追蹤血清濃度。長期監測體腔積液和血栓徵兆。',
    owner_communication: 'PLE 是需要長期管理的慢性疾病。飲食管理是治療基石——嚴格遵守處方飲食非常重要。不能給高脂零食或餐桌食物。需要定期回診追蹤蛋白指數。部分病患需要長期免疫抑制藥物。當白蛋白很低時有血栓風險，需要使用抗凝血藥物。整體而言，許多犬在適當治療下可維持良好的生活品質。',
  },
  diagnostic_data: null,
  procedure_data: null,
  visual_placeholders: [
    { position: '診斷策略段落後', type: 'flowchart', description: 'PLE 診斷排除流程圖（PLE vs PLN vs 肝臟合成不足）' },
    { position: '治療策略段落後', type: 'comparison_table', description: '淋巴管擴張型 vs IBD 型 PLE 治療比較表' },
  ],
  interactive_placeholders: [],
  drug_api_links: ['Prednisolone', 'Chlorambucil', 'Mycophenolate', 'Cyclosporine', 'Clopidogrel', 'Calcitriol', 'Cobalamin'],
  references: [
    { type: 'journal', citation: 'Craven MD, Washabau RJ. "Comparative pathophysiology and management of protein-losing enteropathy." J Vet Intern Med. 2019;33(2):383-402.', relevance: 'PLE 病理生理與管理綜合回顧' },
    { type: 'journal', citation: 'Dossin O, Lavoué R. "Protein-losing enteropathies in dogs." Vet Clin North Am Small Anim Pract. 2011;41(2):399-418.', relevance: 'PLE 診斷與治療策略' },
    { type: 'journal', citation: 'Nakashima K et al. "Prognostic factors in dogs with protein-losing enteropathy." J Vet Intern Med. 2015;29(6):1504-1507.', relevance: 'PLE 預後因子分析' },
    { type: 'textbook', citation: 'Washabau RJ, Day MJ. Canine and Feline Gastroenterology. Elsevier, 2013.', relevance: '消化系統疾病基礎教材' },
    { type: 'guideline', citation: 'Washabau RJ, Day MJ, Willard MD, et al. "Endoscopic, biopsy, and histopathologic guidelines for the evaluation of gastrointestinal inflammation in companion animals." J Vet Intern Med. 2010;24(1):10-26.', relevance: 'GI 炎症評估指引' },
  ],
  is_current: true,
  created_at: now,
};

/** 犬腎上腺皮質機能亢進（Cushing's）— 疾病型 */
const contentCushings: NodeContent = {
  id: 'CONTENT-IM-L3-001',
  node_id: 'IM-L3-001',
  version: 1,
  summary: '犬腎上腺皮質機能亢進（Hyperadrenocorticism, HAC）是犬最常見的內分泌疾病之一，因長期暴露於過量皮質醇所致。約 80-85% 為腦下垂體依賴型（PDH），15-20% 為腎上腺腫瘤型（ADH）。ACVIM 共識建議以 LDDST 作為首選篩檢工具，ACTH stimulation test 用於監測治療反應。Trilostane 為目前首選治療藥物。',
  learning_objectives: [
    '區分腦下垂體依賴型（PDH）與腎上腺腫瘤型（ADH）的病因、診斷與治療差異',
    '正確選擇並判讀 Cushing 的篩檢與鑑別試驗（LDDST、UCCR、ACTH stim、HDDST）',
    '制定 Trilostane 治療方案並運用 ACTH stimulation test 監測療效',
    '辨識醫源性 Cushing 的臨床特徵與處理方式',
    '說明 Cushing 的皮膚科與其他系統共病',
  ],
  key_points: [
    'PDH（80-85%）：腦下垂體 ACTH 腺瘤 → 雙側腎上腺增生；ADH（15-20%）：單側腎上腺腫瘤自主分泌 cortisol',
    '經典臨床表現：PU/PD、多食、腹部膨大（壺腹腹）、皮膚薄化、對稱性脫毛、鈣質沉著',
    'LDDST 敏感度 > 95%（最佳篩檢）；UCCR 敏感度高但特異度低（最佳排除工具）',
    'ACTH stimulation test 敏感度較低（~80%）但為監測 Trilostane 治療的標準工具',
    'Trilostane 起始劑量 1-2 mg/kg PO SID-BID，10-14 天後 ACTH stim test 評估',
    'ALP 升高（犬特有的 steroid-induced ALP isoenzyme）見於 > 90% Cushing 犬',
    '皮膚科共病：反覆膿皮症、蠕形蟎症、鈣質沉著症',
  ],
  body: `# 犬腎上腺皮質機能亢進 (Hyperadrenocorticism / Cushing's Syndrome)

## 一、病理機制 (Pathophysiology)

**PDH (Pituitary-Dependent HAC, ~85%)**：腦下垂體前葉 ACTH 分泌微腺瘤（少數大腺瘤）→ACTH 過度分泌→雙側腎上腺皮質增生→cortisol 慢性過量→喪失正常下視丘-垂體-腎上腺 (HPA) 軸負回饋

**ADH (Adrenal-Dependent HAC, ~15%)**：腎上腺皮質腺瘤 (~50%) 或腺癌 (~50%)→自主性 cortisol 分泌→ACTH 被抑制→對側腎上腺萎縮

**Cortisol 過量系統效應**：
- 蛋白質分解↑→肌肉萎縮、皮膚變薄、韌帶脆弱
- 肝醣合成↑ + 脂肪再分布→壺腹狀腹 (pot-bellied)、肝腫大（類固醇性肝病）
- 免疫抑制→復發性 UTI、皮膚感染
- 高凝血狀態→**肺動脈栓塞**風險（主要死因之一）
- 抑制 ADH→多渴多尿

[圖片:HPA axis in PDH vs ADH — feedback loop disruption diagram]

**醫源性 Cushing's**：長期外源性類固醇→與內源性 Cushing's 臨床表現相同，但 ACTH stim test 反應被抑制。

## 二、臨床表現與診斷 (Clinical Signs & Diagnosis)

| 臨床表現 | 頻率 | 特徵 |
|---------|------|------|
| 多渴多尿 (PU/PD) | >80% | 最常見首發症狀 |
| 多食 | >80% | 類固醇效應 |
| 壺腹狀腹 | ~80% | 肝腫大 + 腹肌萎縮 |
| 對稱性脫毛 | ~60% | 軀幹、不癢 |
| 皮膚變薄 | ~50% | 血管明顯 |
| 喘息 (panting) | ~50% | 呼吸肌無力 + 脂肪沉積 |
| 皮膚鈣質沉著 | ~10% | calcinosis cutis，高度特異 |

### 診斷三步驟

**Step 1：篩檢（確認 cortisol 過量）**

| 檢測 | 敏感度 | 特異度 | 建議用途 |
|------|--------|--------|---------|
| UCCR | >90% | 低 (~20%) | 排除用（陰性排除 HAC） |
| LDDST | ~95% | ~70% | 確認用（首選篩檢） |
| ACTH stim | ~80% | ~85% | 醫源性 HAC 唯一檢測 |

**Step 2：鑑別（PDH vs ADH）**
- 腹部超音波：PDH→雙側腎上腺增大；ADH→單側腫瘤 + 對側萎縮
- 內源性 ACTH：PDH→正常/升高；ADH→被抑制 (<5 pg/mL)
- HDDS：約 75% PDH 有抑制；ADH 無抑制

**Step 3：大腺瘤評估**
- 腦下垂體 MRI（>1 cm 為大腺瘤，可能有神經症狀）

### 特徵性血檢

| 指標 | 典型變化 | 備註 |
|------|---------|------|
| ALP | 顯著升高 (steroid-induced isoenzyme) | 敏感度 >90%，最早出現 |
| ALT | 輕-中度升高 | 類固醇性肝病 |
| 膽固醇/TG | 升高 | 脂質代謝異常 |
| USG | < 1.020 | PU/PD 所致 |
| Stress leukogram | 嗜中性球↑淋巴球↓嗜酸球↓ | 典型但非特異 |

## 三、治療策略 (Treatment)

### PDH 藥物治療

| 藥物 | 劑量 | 監測 | 證據等級 |
|------|------|------|---------|
| [藥物:Trilostane] (Vetoryl) 首選 | 1-2 mg/kg PO SID 與食物 | 4-6hr post-pill ACTH stim（目標 post 1.5-5.4 μg/dL） | Level I |
| [藥物:Mitotane] (o,p'-DDD) | Loading 25-50 mg/kg/d ×7-10d | 每日 ACTH stim 監測 | Level II |

### ADH 治療
- 腎上腺腺瘤：**腎上腺切除術**（術後需暫時補充 glucocorticoid + mineralocorticoid）
- 腎上腺腺癌：手術 ± Mitotane

### 大腺瘤
- 放射治療 (RT)

## 四、併發症與監控 (Complications & Monitoring)

| 併發症 | 機轉 | 監測 | 處理 |
|--------|------|------|------|
| 肺動脈栓塞 | 高凝血狀態 | 呼吸急促/X光 | 抗凝血 + 氧氣 |
| 醫源性 Addison's | Trilostane 過量 | ACTH stim | 停藥 + 類固醇補充 |
| 糖尿病 | 胰島素阻抗 | 血糖/果糖胺 | 同時管理 |
| 全身性高血壓 | cortisol 效應 | 血壓 | [藥物:Amlodipine] |
| 大腺瘤神經症狀 | 腫瘤壓迫 | 行為/視力 | RT |

**Trilostane 監測**：首次 ACTH stim 在開始後 10-14 天（給藥後 4-6hr）；穩定後 q3 月。**目標 post-ACTH cortisol 1.5-5.4 μg/dL**。

## 五、預後與預後因子 (Prognosis)

| 類型 | 治療 | 中位存活 |
|------|------|---------|
| PDH + Trilostane | 藥物 | ~2-2.5 年 |
| ADH 腺瘤 | 手術 | > 3 年 |
| ADH 腺癌 | 手術 ± 化療 | < 1 年 |
| 大腺瘤 | RT ± 藥物 | 較差 |

**飼主溝通**：Cushing's 是慢性可管理疾病。Trilostane 需定期回診監測。臨床症狀改善通常在 1-3 個月。

## 六、人醫借鑑 (Translational Insights)

- 人醫 Cushing's 的**多學科管理**（內分泌科 + 神經外科 + 放射腫瘤科）策略值得借鑑
- 人醫的 **midnight salivary cortisol** 篩檢概念在獸醫無對應工具
- 人醫已有 **pasireotide**（somatostatin analogue）用於 Cushing's，獸醫尚未應用
- 人醫術後 **adrenal insufficiency** 管理策略可直接借鑑

## 七、臨床爭議與知識空缺 (Controversies & Knowledge Gaps)

| 爭議主題 | 目前立場 | 證據等級 | 研究方向 |
|---------|---------|---------|---------|
| Trilostane SID vs BID | SID 起始，BID 用於控制不佳者 | Level II | 最佳給藥頻率？ |
| ACTH stim vs pre-Trilostane cortisol | ACTH stim 為標準，但 pre-pill cortisol 可能有用 | Level III | 最佳監測方法？ |
| 亞臨床 Cushing's 是否治療 | 有爭議 | Level IV | 自然病程追蹤研究 |
| 貓 Cushing's 最佳治療 | Trilostane 為首選但經驗有限 | Level III | 貓特異性劑量研究 |
| 新型藥物 | Cabergoline 輔助 PDH | Level IV | 獸醫臨床試驗進行中 |`,
  clinical_pearl: 'LDDST 的 8 小時結果如果有抑制（cortisol 降至 < 50% 基礎值或 < 1.4 μg/dL），高度提示 PDH。但注意：約 25% 的 PDH 在 LDDST 無抑制（false negative for PDH），而 ADH 也偶爾出現抑制。因此 LDDST 的「鑑別功能」僅在有抑制時有意義——無抑制時仍需超音波或內源性 ACTH 鑑別。此外，犬 ALP 升高中有一個特殊的 steroid-induced isoenzyme，敏感度 > 90%，是最早出現的血檢異常。\n\n【台灣流行病學】庫欣氏症在台灣小動物臨床屬常見內分泌疾病，好發於中老年小型犬，貴賓犬、臘腸犬、馬爾濟斯等台灣常見品種均為好發族群。台灣獸醫院多可執行 ACTH stimulation test 與 LDDST，Trilostane 為台灣市場主要治療藥物。亞熱帶氣候下犬隻皮膚問題盛行，Cushing 應納入慢性皮膚病的鑑別診斷。',
  common_mistakes: [
    '在非傳染性疾病（NTI, non-thyroidal illness）狀態下就篩檢 Cushing（高壓力狀態會導致偽陽性）',
    '僅憑 UCCR 升高就診斷 Cushing（UCCR 特異度低，任何壓力/疾病都可升高）',
    'Trilostane 治療後未在正確時間點做 ACTH stim test（必須在給藥後 4-6 小時）',
    '忽略腦下垂體大腺瘤的神經症狀（多達 25% PDH 有大腺瘤）',
    '誤將醫源性 Cushing 的低皮質醇結果解讀為 Addison（需詢問外源性類固醇使用史）',
  ],
  disease_data: {
    signalment: '中老年犬（平均 10-12 歲）。小型犬品種如貴賓、臘腸、波士頓梗、Beagle、Boxer 好發。PDH 無明顯性別差異；ADH 雌性略多。醫源性 Cushing 可見於任何品種和年齡。',
    etiology: 'PDH（80-85%）：腦下垂體 ACTH 腺瘤，多為微腺瘤。ADH（15-20%）：腎上腺皮質腺瘤（50%）或腺癌（50%），單側。醫源性：長期外源性糖皮質素使用（口服、注射、外用、眼藥水均可）。罕見：異位 ACTH 分泌（犬極罕見）。',
    pathogenesis: 'PDH：腦下垂體 ACTH 腺瘤喪失正常負回饋抑制 → ACTH 持續過度分泌 → 雙側腎上腺增生 → Cortisol 持續高。ADH：腎上腺腫瘤自主分泌 Cortisol → 負回饋抑制 ACTH → 對側腎上腺萎縮。Cortisol 過量效應：蛋白質分解代謝增加（肌肉消耗、皮膚薄化）→ 脂肪重新分布（腹部脂肪堆積）→ 肝臟糖質新生增加（高血糖）→ 免疫抑制（易感染）→ 抗利尿激素抑制（PU/PD）。',
    clinical_signs: [
      { sign: '多渴多尿 (PU/PD)', category: 'primary', description: '約 80-90% 病例，Cortisol 抑制 ADH 分泌' },
      { sign: '多食 (polyphagia)', category: 'primary', description: '約 80-90%，Cortisol 的中樞食慾促進效果' },
      { sign: '腹部膨大（壺腹腹）', category: 'primary', description: '肝臟腫大 + 腹壁肌肉萎縮 + 脂肪重新分布' },
      { sign: '對稱性脫毛', category: 'primary', description: '軀幹對稱性非搔癢性脫毛，保留頭部和四肢末端' },
      { sign: '皮膚薄化', category: 'secondary', description: '真皮膠原蛋白分解，血管清晰可見' },
      { sign: '鈣質沉著（calcinosis cutis）', category: 'secondary', description: '病理性特徵，Cushing 高度特異性皮膚表現' },
      { sign: '喘息 (panting)', category: 'secondary', description: '呼吸肌無力 + 腹部脂肪壓迫 + 肺血栓' },
      { sign: '反覆泌尿道感染', category: 'secondary', description: '免疫抑制 + 稀釋尿 → 細菌容易繁殖' },
    ],
    staging: null,
    differential_diagnosis: [
      { condition: '糖尿病', key_differentiator: '持續性高血糖（> 200 mg/dL）和糖尿；Cushing 約 10% 併發 DM，兩者可共存' },
      { condition: '犬甲狀腺機能低下', key_differentiator: '甲低也可有脫毛，但伴隨肥胖、嗜睡、心搏過緩（Cushing 多食、喘息、PU/PD 為主）' },
      { condition: '肝臟疾病', key_differentiator: 'ALP 升高可見於原發性肝病，但 Cushing 的 ALP 以 steroid-induced isoenzyme 為主' },
      { condition: '醫源性 Cushing', key_differentiator: '詳細藥物史（包括外用製劑）即可鑑別，ACTH stim test 低值' },
      { condition: '非典型 Addison 或腎上腺性激素異常', key_differentiator: '皮膚症狀類似但 cortisol 正常，需測腎上腺性激素 panel' },
    ],
    diagnostic_workup: '1. 基礎血檢：CBC（stress leukogram：嗜中性球升高、淋巴球低下、嗜酸性球低下）、生化（ALP 顯著升高、ALT 輕度升高、高膽固醇、高三酸甘油酯、低 BUN）→ 2. 尿液分析（USG < 1.020、可能有糖尿和 UTI）→ 3. 篩檢試驗：LDDST（首選）或 UCCR（排除用）→ 4. 鑑別 PDH vs ADH：腹腔超音波（雙側增大 = PDH、單側腫塊 = ADH）+ 內源性 ACTH 或 HDDST → 5. PDH 大腺瘤評估：腦部 MRI/CT → 6. ADH 轉移評估：胸腔 X 光',
    treatment_protocol: 'Primary care — Trilostane（首選藥物）：起始 1-2 mg/kg PO SID 餐後，10-14 天後 ACTH stimulation test（給藥後 4-6 小時），目標 post-ACTH cortisol 1.45-5.4 μg/dL，穩定後每 3 個月追蹤 ACTH stim test + 電解質。Specialty care — 腎上腺切除術（ADH 首選治癒性手術，術前需 Trilostane 或 phenoxybenzamine 準備若為嗜鉻細胞瘤鑑別）；腦下垂體切除術或放射治療（PDH 大腺瘤合併神經症狀時）；Mitotane（二線，適用於 Trilostane 無效或不耐受時，需嚴密監測 cortisol 和電解質）。',
    prognosis: 'PDH 經 Trilostane 治療中位存活 662-900 天（約 2-2.5 年），多數犬生活品質顯著改善。ADH 腺瘤手術後預後佳（中位存活 > 36 個月）。ADH 腺癌轉移者預後差（中位存活 12-18 個月）。未治療的 Cushing 犬因併發症（肺栓塞、UTI、DM、高血壓）預後較差。醫源性 Cushing 停藥後多數可逆。',
    monitoring: 'Trilostane 治療後追蹤：10-14 天 → 4 週 → 8 週 → 12 週 → 之後每 3 個月。每次追蹤：ACTH stimulation test（給藥後 4-6 小時）+ 電解質 + 臨床症狀評估。注意 Trilostane 可導致腎上腺壞死（Addisonian crisis）——教導飼主辨識警訊（嘔吐、虛弱、食慾廢絕需立即就醫）。',
    owner_communication: 'Cushing 是一種可管理但通常無法治癒的慢性疾病。Trilostane 用藥必須每日按時，且需定期回診抽血追蹤。治療後 PU/PD 和皮膚問題會逐漸改善，但需要數週至數月。非常重要的是藥物不能突然停藥。如果狗狗出現嘔吐、不吃、極度虛弱，需立即就醫（可能是藥物過度抑制腎上腺功能）。',
  },
  diagnostic_data: null,
  procedure_data: null,
  visual_placeholders: [
    { position: '診斷策略篩檢試驗表後', type: 'flowchart', description: 'Cushing 診斷決策流程圖（篩檢 → 鑑別 PDH vs ADH）' },
    { position: '治療方案段落後', type: 'comparison_table', description: 'Trilostane vs Mitotane 比較表' },
  ],
  interactive_placeholders: [
    { position: '診斷策略段落', type: 'interactive_staging', description: '輸入 LDDST/ACTH stim 數值自動判讀結果' },
  ],
  drug_api_links: ['Trilostane', 'Mitotane', 'Prednisolone', 'Dexamethasone'],
  references: [
    { type: 'guideline', citation: 'Behrend EN et al. "Diagnosis of Spontaneous Canine Hyperadrenocorticism: 2012 ACVIM Consensus Statement (Small Animal)." J Vet Intern Med. 2013;27(6):1292-1304.', relevance: 'Cushing 診斷 ACVIM 共識' },
    { type: 'textbook', citation: 'Feldman EC et al. Canine and Feline Endocrinology, 4th ed. Elsevier, 2015. Chapter on Hyperadrenocorticism.', relevance: 'Cushing 病理生理與治療完整參考' },
    { type: 'journal', citation: 'Ramsey IK. "Trilostane in dogs." Vet Clin North Am Small Anim Pract. 2010;40(2):269-283.', relevance: 'Trilostane 治療實務指引' },
    { type: 'journal', citation: 'Arenas C et al. "Long-term survival of dogs with adrenal-dependent hyperadrenocorticism: a comparison between mitotane and twice daily trilostane." J Vet Intern Med. 2014;28(2):473-480.', relevance: 'ADH 治療預後比較' },
  ],
  is_current: true,
  created_at: now,
};

/** 犬甲狀腺機能低下 — 疾病型 */
const contentHypothyroidism: NodeContent = {
  id: 'CONTENT-IM-L3-002',
  node_id: 'IM-L3-002',
  version: 1,
  summary: '犬甲狀腺機能低下（Hypothyroidism）是犬最常見的內分泌疾病，因甲狀腺荷爾蒙（T4/T3）分泌不足導致全身代謝率下降。約 95% 為原發性（淋巴球性甲狀腺炎或特發性甲狀腺萎縮），確診需結合臨床表現與甲狀腺功能檢測。Levothyroxine（L-T4）為標準治療。',
  learning_objectives: [
    '說明犬甲狀腺機能低下的病因分類（原發性 vs 繼發性 vs 先天性）',
    '辨識甲狀腺機能低下的多系統臨床表現（代謝、皮膚、神經、心血管、生殖）',
    '正確判讀甲狀腺功能檢測並避免「euthyroid sick syndrome」的診斷陷阱',
    '制定 Levothyroxine 的起始劑量、監測與調整計畫',
    '說明甲低與其他內分泌疾病（Cushing、DM）的共病關係',
  ],
  key_points: [
    '原發性甲低（~95%）：淋巴球性甲狀腺炎（~50%）+ 特發性萎縮（~50%）',
    '好發品種：Golden Retriever、Labrador、Doberman、Dachshund、Cocker Spaniel、Irish Setter',
    '經典臨床表現：代謝率下降（嗜睡、體重增加、不耐冷）+ 皮膚（對稱性非搔癢性脫毛、「tragic face」、鼠尾）',
    'Total T4 低 + TSH 高 = 典型甲低；T4 低 + TSH 正常 = 可能是「euthyroid sick syndrome」',
    'Free T4 by equilibrium dialysis (fT4ED) 是最不受非甲狀腺疾病干擾的指標',
    'Levothyroxine 起始 0.02 mg/kg PO BID，4-8 週後檢測 post-pill T4（給藥後 4-6 小時）',
    '神經肌肉併發症：面神經麻痺、前庭症候群、megaesophagus（較少見）',
  ],
  body: `# 犬甲狀腺機能低下 (Canine Hypothyroidism)

## 一、病理機制 (Pathophysiology)

**機轉鏈**：免疫介導性甲狀腺破壞（淋巴球性甲狀腺炎 ~50%，CD8+ T 細胞 + 抗甲狀腺球蛋白抗體 TgAA 攻擊甲狀腺濾泡細胞）或特發性甲狀腺萎縮 (~50%)→甲狀腺組織漸進性破壞（需 >75% 組織喪失才出現臨床症狀）→T4/T3 合成不足→負回饋消除→TSH 代償性升高→殘餘組織過度刺激→最終完全耗竭

[圖片:Hypothyroidism pathophysiology — lymphocytic thyroiditis vs idiopathic atrophy → progressive thyroid destruction → T4/T3 deficiency]

**95% 為原發性**（甲狀腺本身病變）；繼發性（垂體 TSH 缺乏）和三級（下視丘 TRH 缺乏）極罕見。

**T4/T3 缺乏的系統效應**：
- 基礎代謝率↓→嗜睡、體重增加、不耐冷
- 皮膚：表皮更新率↓→角化異常、黏液水腫 (myxedema)→glycosaminoglycan 沉積於真皮→「tragic face」
- 脂質代謝：LDL 清除率↓→高膽固醇血症→角膜脂質弧 (corneal lipid arc)、動脈粥狀硬化（罕見）
- 神經肌肉：Schwann cell 代謝異常→脫髓鞘→面神經麻痺、前庭症候群、megaesophagus
- 心血管：心輸出量↓→心搏過緩

**品種易感性**：Golden Retriever、Labrador、Doberman、Dachshund、Cocker Spaniel、Irish Setter、Shar-Pei。多數中大型犬，4-10 歲好發。

## 二、臨床表現與診斷 (Clinical Signs & Diagnosis)

### 多系統臨床表現

| 系統 | 臨床表現 | 頻率 | 特徵 |
|------|---------|------|------|
| 代謝 | 嗜睡、體重增加、不耐冷 | >80% | 最早出現 |
| 皮膚 | 對稱性非搔癢性脫毛、鼠尾 (rat tail) | ~60% | 軀幹 + 尾巴 |
| 皮膚 | 「Tragic face」(黏液水腫) | ~10% | 高度特異性 |
| 皮膚 | 復發性膿皮症/外耳炎 | ~30% | 免疫功能↓ |
| 神經 | 面神經麻痺、前庭症候群 | ~5% | 少見但重要 |
| 心血管 | 心搏過緩 | ~15% | 非特異性 |
| 生殖 | 不孕、泌乳異常 | 少見 | 偶見 |

### 診斷策略

**「診斷甲低比排除甲低更難」**——Euthyroid Sick Syndrome (ESS) 是最常見的診斷陷阱。

| 檢測 | 結果 | 敏感度 | 特異度 | 備註 |
|------|------|--------|--------|------|
| Total T4 (TT4) | 低 | 高 (>95%) | 低 (~75%) | TT4 正常可排除甲低 |
| TSH | 高 (>0.5 ng/mL) | ~75% | ~80% | 約 25% 甲低 TSH 正常 |
| Free T4 by ED (fT4ED) | 低 | 高 (>95%) | 高 (~90%) | 最不受 ESS 干擾 |
| TgAA | 陽性 | ~50% | 高 | 確認免疫介導性病因 |

**TT4 低 + TSH 高**→高度支持甲低
**TT4 低 + TSH 正常**→測 fT4ED 鑑別 ESS
**TT4 正常**→基本排除甲低（NPV >99%）

### 干擾因素
- **ESS**：任何非甲狀腺疾病都可降低 T4（尤其庫欣、肝病、腎病）
- **藥物**：[藥物:Phenobarbital]、sulfonamides、糖皮質素→降低 T4
- **抗 T4 自體抗體**→TT4 假性升高

## 三、治療策略 (Treatment)

| 藥物 | 劑量 | 監測 | 證據等級 |
|------|------|------|---------|
| [藥物:Levothyroxine] (L-T4) | 0.02 mg/kg PO BID（起始） | Post-pill T4 4-6hr 後（目標 2.5-5.0 μg/dL） | Level I |

**治療反應時間表**：
- 精神/活動力改善：1-2 週
- 皮膚/毛髮改善：4-8 週（完全恢復可能需 3-6 個月）
- 膽固醇下降：2-4 週
- 神經症狀改善：4-12 週（不一定完全恢復）

**監測**：首次 4-6 週追蹤 post-pill T4；穩定後 q6 個月。劑量調整每次 ±0.005 mg/kg。

**注意**：甲低合併心臟病時起始劑量減半（0.01 mg/kg BID），避免心臟代償失衡。

## 四、併發症與監控 (Complications & Monitoring)

| 併發症 | 機轉 | 監測 | 處理 |
|--------|------|------|------|
| Myxedema coma | 嚴重長期未治療甲低 | 意識/體溫/HR | IV L-T4 + warming + supportive |
| 高膽固醇血症 | LDL 清除↓ | 膽固醇/TG | L-T4 治療後改善 |
| Levothyroxine 過量 | 醫源性甲亢 | Post-pill T4 | 減量/暫停 |
| 復發性感染 | 免疫功能↓ | 皮膚/耳朵 | 治療甲低 + 對症治療 |

**監測清單**：post-pill T4 (q6月穩定後)、體重、皮膚狀態、膽固醇、CBS 評估。

## 五、預後與預後因子 (Prognosis)

**預後極佳**——正確診斷並以 Levothyroxine 治療後，幾乎所有臨床症狀可逆。預期壽命正常。

**神經肌肉併發症**預後較不確定——面神經麻痺約 50-75% 可恢復，前庭症候群恢復較慢且不一定完全。Megaesophagus 預後最差。

**飼主溝通**：甲狀腺機能低下是終身疾病，需每日服藥和定期回診。治療效果佳，大多數犬可恢復正常生活品質。

## 六、人醫借鑑 (Translational Insights)

- 人醫 Hashimoto's thyroiditis 與犬淋巴球性甲狀腺炎高度相似——犬為 Hashimoto's 的天然動物模型
- 人醫使用 **TSH 為主要篩檢工具**；獸醫 TSH 敏感度僅 ~75%，不如人醫可靠
- 人醫 **subclinical hypothyroidism**（TSH↑但 T4 正常）治療有爭議；獸醫同樣面臨亞臨床甲低是否需治療的問題
- 人醫已有 **T3+T4 合併治療** vs 單純 T4 治療的辯論；獸醫仍以 L-T4 單藥為標準

## 七、臨床爭議與知識空缺 (Controversies & Knowledge Gaps)

| 爭議主題 | 目前立場 | 證據等級 | 研究方向 |
|---------|---------|---------|---------|
| BID vs SID 給藥 | BID 為標準，SID 在部分犬可行 | Level II | SID 的長期等效性？ |
| TgAA 陽性但甲功正常 | 追蹤，不治療 | Level III | 進展為甲低的自然史 |
| 亞臨床甲低是否治療 | 有爭議，可試驗性治療 | Level IV | 前瞻性比較研究 |
| 品種特異性 T4 參考值 | Greyhound T4 天生偏低 | Level II | 更多品種的正常值建立 |
| 甲低與行為異常的關聯 | 因果關係不明確 | Level IV | 控制性研究需要 |`,
  clinical_pearl: '診斷犬甲低最大的陷阱是「euthyroid sick syndrome」。在台灣臨床上很常見的情境是：皮膚問題的犬驗了 T4 偏低就被診斷為甲低，但其實是其他疾病（如 Cushing、皮膚病本身）壓抑了 T4。關鍵原則是：(1) 不要在生病中的犬測甲狀腺；(2) T4 低必須搭配 TSH 升高才算典型甲低；(3) 有疑慮時測 fT4 by equilibrium dialysis（fT4ED）。另外，TgAA 陽性可識別早期淋巴球性甲狀腺炎（甲低前期）。',
  common_mistakes: [
    '僅憑 Total T4 低就診斷甲低，未考慮 euthyroid sick syndrome（應同時測 TSH 和/或 fT4ED）',
    '在犬同時有其他疾病（Cushing、感染、腫瘤）時就篩檢甲狀腺功能（應先穩定其他疾病）',
    '使用 Phenobarbital 或 Glucocorticoid 的犬 T4 偏低被誤診為甲低',
    'Levothyroxine 監測時在錯誤時間點採血（應在給藥後 4-6 小時的 peak level）',
    '初始劑量過高或有心臟病犬未從低劑量起始',
  ],
  disease_data: {
    signalment: '好發於中老年犬（4-10 歲），中至大型犬。好發品種：Golden Retriever、Labrador Retriever、Doberman Pinscher、Dachshund、Cocker Spaniel、Irish Setter、Airedale Terrier、Boxer。絕育犬比未絕育犬風險略高。',
    etiology: '原發性（~95%）：淋巴球性甲狀腺炎（免疫介導性，約 50%）和特發性甲狀腺萎縮（約 50%）。繼發性（~5%）：腦下垂體 TSH 分泌不足。先天性（罕見）：甲狀腺發育不全或甲狀腺荷爾蒙合成缺陷。醫源性：甲狀腺切除術後、放射性碘治療後（貓甲亢治療後罕見轉為甲低）。',
    pathogenesis: '淋巴球性甲狀腺炎：免疫系統攻擊甲狀腺 → 漸進性濾泡破壞 → T4/T3 分泌減少 → TSH 代償性升高 → 甲狀腺殘餘組織代償不足時出現臨床甲低。特發性萎縮：甲狀腺實質被脂肪和結締組織取代，機轉不明。T4/T3 不足 → 基礎代謝率下降 → 影響幾乎所有器官（心臟、皮膚、神經、消化道、生殖系統）。黏液水腫（myxedema）：皮下黏多醣蓄積 → 面部和皮膚增厚。',
    clinical_signs: [
      { sign: '嗜睡/活動力下降', category: 'primary', description: '最常見症狀（約 70-80%），代謝率下降所致' },
      { sign: '體重增加', category: 'primary', description: '無多食情況下體重增加（代謝率降低）' },
      { sign: '對稱性脫毛', category: 'primary', description: '軀幹和尾巴為主，非搔癢性，毛髮不再生長' },
      { sign: '鼠尾（rat tail）', category: 'primary', description: '尾巴毛髮脫落，外觀如老鼠尾巴' },
      { sign: '反覆膿皮症/外耳炎', category: 'secondary', description: '免疫功能低下和皮膚屏障異常' },
      { sign: '面部黏液水腫（tragic face）', category: 'secondary', description: '眼眶周圍和臉部皮膚增厚下垂' },
      { sign: '心搏過緩', category: 'secondary', description: '甲狀腺荷爾蒙對心臟變時性效應減少' },
      { sign: '周邊神經病變', category: 'secondary', description: '面神經麻痺、喉麻痺、前庭症候群' },
    ],
    staging: null,
    differential_diagnosis: [
      { condition: '腎上腺皮質機能亢進（Cushing）', key_differentiator: 'Cushing 也有脫毛但伴 PU/PD、多食、壺腹腹；Cushing 可壓抑 T4 造成假性甲低' },
      { condition: '蠕形蟎症（Demodicosis）', key_differentiator: '皮膚刮搔可見蟎蟲；甲低犬可易感蟲蟎但需鑑別' },
      { condition: '季節性側腹脫毛', key_differentiator: '呈季節性，通常在秋冬，生化和甲狀腺指標正常' },
      { condition: '非甲狀腺疾病（Euthyroid sick）', key_differentiator: 'T4 低但 TSH 正常、fT4ED 正常；處理原發疾病後 T4 恢復' },
      { condition: '性荷爾蒙相關脫毛', key_differentiator: '未絕育犬或腎上腺性荷爾蒙異常，需腎上腺荷爾蒙 panel 鑑別' },
    ],
    diagnostic_workup: '1. 基礎血檢：CBC（可見輕度非再生性貧血、高膽固醇血症）、生化（Cholesterol ↑、Triglycerides ↑、CK 輕度↑）→ 2. Total T4（低值提示但不確診）→ 3. TSH（升高支持原發性甲低）→ 4. 若 T4 低 + TSH 正常：測 Free T4 by equilibrium dialysis (fT4ED) → 5. TgAA（偵測淋巴球性甲狀腺炎）→ 6. 考慮甲狀腺超音波（體積縮小、回聲改變）→ 7. 排除其他壓抑 T4 的因素（疾病、藥物）',
    treatment_protocol: 'Primary care — Levothyroxine (L-T4)：起始 0.02 mg/kg PO BID（建議空腹，餐前 1 小時）。大型犬（> 25 kg）起始用 0.018 mg/kg。有心臟病犬從 0.005-0.01 mg/kg PO SID 起始並緩慢增量。4-8 週後檢測 post-pill T4（給藥後 4-6 小時），目標 2.5-5.0 μg/dL。依結果調整劑量（每次增減 0.005-0.01 mg/kg）。穩定後可嘗試 SID 給藥。Specialty care — 若合併黏液水腫昏迷（myxedema coma，罕見急症）：IV Levothyroxine 或 Liothyronine (T3) + 支持療法（保暖、輸液、皮質素補充）。',
    prognosis: '預後極佳。多數犬在開始 Levothyroxine 後 2-4 週精神和活動力改善，4-6 週體重開始下降，皮膚和毛髮完全恢復需 3-6 個月。神經症狀多數可逆但恢復較慢（數週至數月）。需終生用藥。黏液水腫昏迷為罕見但嚴重急症，未治療死亡率高。',
    monitoring: '起始治療後 4-8 週第一次追蹤：post-pill T4（給藥後 4-6 小時）+ TSH + 膽固醇。穩定後每 6 個月追蹤。臨床改善評估：精神活動力（2-4 週）、體重（4-8 週）、皮膚毛髮（3-6 個月）。T4 穩定後可考慮改為 SID 給藥（部分犬可維持）。',
    owner_communication: '甲狀腺功能低下是需要終生治療的疾病，但只要每天按時吃藥，預後非常好。用藥後最先改善的是精神和活動力（約 2-4 週），皮膚和毛髮的恢復較慢（約 3-6 個月）。藥物建議空腹服用效果最佳。定期回診追蹤甲狀腺指數以確保劑量適當。',
  },
  diagnostic_data: null,
  procedure_data: null,
  visual_placeholders: [
    { position: '甲狀腺功能檢測表後', type: 'flowchart', description: '犬甲低診斷決策流程圖（T4/TSH/fT4ED 判讀路徑）' },
    { position: '多系統臨床表現段落後', type: 'annotated_image', description: '犬甲低典型皮膚表現照片標注（鼠尾、tragic face、對稱性脫毛）' },
  ],
  interactive_placeholders: [],
  drug_api_links: ['Levothyroxine'],
  references: [
    { type: 'journal', citation: 'Scott-Moncrieff JC. "Clinical Signs and Concurrent Diseases of Hypothyroidism in Dogs and Cats." Vet Clin North Am Small Anim Pract. 2007;37(4):709-722.', relevance: '犬甲低臨床表現綜合回顧' },
    { type: 'textbook', citation: 'Feldman EC et al. Canine and Feline Endocrinology, 4th ed. Elsevier, 2015. Chapter on Hypothyroidism.', relevance: '犬甲低完整參考章節' },
    { type: 'journal', citation: 'Dixon RM, Mooney CT. "Canine serum thyroglobulin autoantibodies in health, hypothyroidism and non-thyroidal illness." Res Vet Sci. 1999;66(3):243-246.', relevance: 'TgAA 在甲低診斷中的角色' },
    { type: 'guideline', citation: 'Scott-Moncrieff JC. "Thyroid Disorders in the Geriatric Veterinary Patient." Vet Clin North Am Small Anim Pract. 2012;42(4):707-725.', relevance: '老年犬甲狀腺疾病管理' },
  ],
  is_current: true,
  created_at: now,
};

/** 貓甲狀腺機能亢進 — 疾病型 */
const contentFelineHyperthyroidism: NodeContent = {
  id: 'CONTENT-IM-L3-003',
  node_id: 'IM-L3-003',
  version: 1,
  summary: '貓甲狀腺機能亢進（Feline Hyperthyroidism）是中老年貓最常見的內分泌疾病，因甲狀腺荷爾蒙過度分泌導致全身代謝率異常升高。> 97% 為甲狀腺良性增生（bilateral adenomatous hyperplasia），< 3% 為甲狀腺癌。治療選項包括 Methimazole、放射性碘（I-131）、手術和處方飲食。',
  learning_objectives: [
    '說明貓甲亢的病因、好發族群與流行病學',
    '辨識貓甲亢的多系統臨床表現並說明與繼發性 HCM、CKD 的關聯',
    '正確判讀 Total T4 和 Free T4 以診斷貓甲亢（包括隱性甲亢的處理）',
    '比較四種治療選項的適應症、優缺點與長期預後',
    '說明甲亢治療後 CKD 揭露現象並制定監測策略',
  ],
  key_points: [
    '中老年貓（> 8 歲）最常見內分泌疾病，盛行率約 10%',
    '> 97% 良性甲狀腺增生（adenomatous hyperplasia），70% 雙側',
    '經典臨床表現：體重減輕伴食慾亢進、多渴多尿、行為改變（過動、嚎叫）、心跳過速',
    'Total T4 > 4.0 μg/dL 確診；若 T4 在高正常值（2.5-4.0）但臨床高度懷疑 → 測 Free T4',
    '甲亢可增加 GFR 而「掩蓋」CKD——治療甲亢後 Creatinine 可能顯著上升',
    '放射性碘 (I-131) 為唯一治癒性治療，治癒率 > 95%',
    'Methimazole 起始 2.5 mg PO BID，2-3 週後追蹤 T4 和腎功能',
    '繼發性甲亢心臟病（thyrotoxic cardiomyopathy）治療甲亢後多數可逆',
  ],
  body: `# 貓甲狀腺機能亢進 (Feline Hyperthyroidism)

## 一、病理機制 (Pathophysiology)

**機轉鏈**：甲狀腺濾泡細胞增生（>97% 為良性 adenomatous hyperplasia / adenoma，70% 雙側）→T4/T3 自主性過量分泌→喪失 TSH 負回饋控制→全身代謝率異常升高→多器官效應

[圖片:Feline hyperthyroidism — adenomatous hyperplasia → autonomous T4 secretion → systemic hypermetabolic state]

**甲狀腺功能異常的可能病因**（仍有爭議）：
- 飲食中碘含量波動（過高或過低）
- 環境內分泌干擾物（PBDE 阻燃劑、BPA）
- 罐頭食品中的 BPA 暴露
- 基因突變（TSH 受體/Gsα 活化性突變——類似人類 toxic adenoma）

**T4/T3 過量的系統效應**：
- 心血管：心肌 β-adrenergic receptor 上調→心搏過速→左心室向心性肥厚 (concentric hypertrophy)→**甲亢性心肌病 (thyrotoxic cardiomyopathy)**
- 腎臟：GFR 增加（高動力循環）→「掩蓋」潛在 CKD→治療甲亢後 GFR↓→CKD 揭露
- 骨骼：骨吸收>形成→骨質疏鬆（少見臨床意義）

**甲狀腺癌**：<3%，但需警覺——固定性、大型、單側硬塊 + 治療後 T4 難以控制。

## 二、臨床表現與診斷 (Clinical Signs & Diagnosis)

| 臨床表現 | 頻率 | 特徵 |
|---------|------|------|
| 體重減輕 | >90% | 伴食慾亢進 (polyphagia) 為經典組合 |
| 食慾增加 | ~80% | 晚期可轉為食慾廢絕（apathetic hyperthyroidism） |
| 多渴多尿 | ~40-50% | T4→腎血流↑ |
| 行為改變 | ~30-50% | 過動、焦躁、夜間嚎叫 |
| 嘔吐/腹瀉 | ~30-40% | 腸道運動↑ |
| 被毛品質差 | ~30% | 過度理毛或neglect |
| 心跳過速 (>240 bpm) | ~50% | 可聞收縮期雜音/gallop |
| 甲狀腺結節可觸診 | ~80% | 頸部仔細觸診（ventral cervical slip technique） |

### 診斷

| 檢測 | 結果 | 敏感度 | 特異度 | 備註 |
|------|------|--------|--------|------|
| Total T4 (TT4) | >4.0 μg/dL | ~90% | 高 | 確診閾值 |
| TT4 高正常 (2.5-4.0) | 灰色地帶 | — | — | 可能為早期/隱性甲亢 |
| Free T4 by ED | 升高 | 高 | 中 | TT4 灰色地帶時測 |
| T3 suppression test | 無抑制 | 高 | 高 | 操作較複雜 |
| Technetium scan | 雙側/單側 | 高 | 高 | 術前定位 + 異位組織 |

**隱性甲亢 (occult hyperthyroidism)**：臨床高度懷疑但 TT4 正常→2-4 週後複測 TT4 或測 fT4ED。

### 特徵性血檢
- ALT/ASP 輕度升高（肝臟代謝↑→肝損傷）
- BUN/Cre 可能偏低（GFR↑掩蓋 CKD）

## 三、治療策略 (Treatment)

| 治療 | 方式 | 優勢 | 劣勢 | 證據等級 |
|------|------|------|------|---------|
| [藥物:Methimazole] | 2.5 mg PO BID（起始） | 可逆、便宜、評估腎功能 | 需每日投藥、副作用 | Level I |
| **I-131 放射性碘** | 單次 SC 注射 | **唯一治癒性治療**、治癒率 >95% | 設備限制、需隔離 | Level I |
| 手術（甲狀腺切除） | 單側/雙側 | 治癒性 | 全麻風險、副甲狀腺損傷 | Level II |
| [藥物:Iodine-restricted diet] (Hill's y/d) | 處方飲食 | 無侵入性 | 必須唯一食物來源、嗜口性差 | Level II |

### Methimazole 管理
- 起始 2.5 mg PO BID→2-3 週追蹤 TT4 + Cre
- **目標 TT4**：正常範圍低端（1.0-2.5 μg/dL）
- 副作用監測：CBC q2-4wk 首 3 個月（嗜中性球↓、血小板↓）、面部搔癢、嘔吐
- 嚴重副作用：肝毒性、嗜中性球缺乏症→**立即停藥**

### I-131 為最佳長期選項
- 治癒率 >95%（單次治療）
- 適用於所有類型（包括異位甲狀腺組織和部分甲狀腺癌）
- 缺點：需核醫設備、住院隔離 1-3 週

## 四、併發症與監控 (Complications & Monitoring)

| 併發症 | 機轉 | 監測 | 處理 |
|--------|------|------|------|
| CKD 揭露 | 治療後 GFR↓→Cre↑ | Cre/SDMA（治療後 1-2-4 週） | Methimazole 減量至最低 T4 |
| 甲亢性心肌病 | T4→心肌肥厚 | 心超（治療前後） | 治療甲亢後多數 2-6 月可逆 |
| Methimazole 副作用 | 藥物反應 | CBC/肝指數/面部搔癢 | 停藥 or 轉 transdermal |
| 低鈣血症（術後） | 副甲狀腺損傷 | ionized Ca | Ca + Vit D 補充 |

**關鍵監測策略**：Methimazole 開始後必須同時追蹤 T4 和 Cre——若 Cre 顯著上升（>0.5 mg/dL），需重新評估治療目標。

## 五、預後與預後因子 (Prognosis)

| 治療方式 | 預後 | 中位存活 |
|---------|------|---------|
| I-131 治癒 | 極佳 | > 4 年（無 CKD） |
| Methimazole 控制良好 | 佳 | 2-4 年 |
| 合併 CKD（Stage 3+） | 謹慎 | 1-2 年 |
| 甲狀腺癌 | 不良 | 數月至 1 年 |

**飼主溝通**：甲亢是可治療的疾病。I-131 是最佳長期選擇。Methimazole 開始後需密切追蹤腎功能。部分貓治療甲亢後會揭露腎臟病。

## 六、人醫借鑑 (Translational Insights)

- 人醫 Graves' disease 為自體免疫性甲亢，與貓甲亢（adenomatous hyperplasia）機轉不同
- 人醫的 **RAI (I-131)** 治療廣泛使用，安全性和有效性已有數十年經驗——獸醫 I-131 治療直接借鑑人醫
- 人醫使用 **thyroid scintigraphy** 和 **fine-needle aspiration** 評估甲狀腺結節——獸醫亦可應用
- 人醫的 **subclinical hyperthyroidism**（TSH 低、T4 正常）概念類似獸醫的隱性甲亢

## 七、臨床爭議與知識空缺 (Controversies & Knowledge Gaps)

| 爭議主題 | 目前立場 | 證據等級 | 研究方向 |
|---------|---------|---------|---------|
| 甲亢與 CKD 的最佳平衡點 | 維持 T4 在正常低端 | Level III | 最佳 T4 目標範圍？ |
| 碘限制飲食作為唯一治療 | 可作為選項但非首選 | Level II | 長期等效性？ |
| 環境因素（BPA、PBDE）的角色 | 流行病學相關但因果不確定 | Level III | 前瞻性暴露研究 |
| Transdermal Methimazole vs oral | 可能等效，吸收較不穩定 | Level II | 生物利用度比較 |
| 早期甲亢是否治療 | 有爭議——可觀察或治療 | Level IV | TT4 灰色地帶的自然病史 |`,
  clinical_pearl: '在台灣臨床上最容易犯的錯誤是治療貓甲亢後才發現 CKD。最佳策略是先用 Methimazole 做「腎功能試探」——用 2-3 週的 Methimazole 將 T4 控制到正常後追蹤 Creatinine。如果 Creatinine 顯著上升（例如從 1.2 跳到 3.0），則需要在甲亢控制與 CKD 管理之間取得平衡——可能需要維持輕度甲亢（T4 在正常高值至輕度升高）來保護腎功能。這就是為什麼 I-131 或手術等「不可逆」治療不應在未先評估腎功能的情況下執行。',
  common_mistakes: [
    '未在開始治療前評估腎功能（治療甲亢後 CKD 可能被揭露）',
    'T4 在灰色地帶就排除甲亢（隱性甲亢的 T4 可在正常高值，需追蹤或測 fT4）',
    '直接進行 I-131 或手術而未先用 Methimazole 做「腎功能試探」',
    'Methimazole 副作用出現後直接停藥而非考慮替代方案（經皮製劑、低劑量調整）',
    '忽略甲亢貓的心臟評估（繼發性 HCM 和血栓風險）',
  ],
  disease_data: {
    signalment: '中老年貓（> 8 歲，好發 10-13 歲），盛行率在 > 10 歲貓群約 10%。無明顯品種傾向，但 Siamese 和 Himalayan 風險稍低。室內貓風險高於室外貓。無明顯性別差異。',
    etiology: '良性甲狀腺增生（adenomatous hyperplasia）> 97%，約 70% 為雙側。甲狀腺癌 < 3%。確切病因未明，可能的環境促進因素：罐裝食品（BPA、PBDE 暴露）、碘攝取過量或不足、室內生活環境（揮發性有機化合物）。流行病學顯示自 1980 年代以來發病率持續上升。',
    pathogenesis: '甲狀腺濾泡細胞自主性增生 → T4/T3 過度分泌 → 繞過 HPT axis 負回饋 → 全身性高代謝狀態。多系統影響：心血管（心輸出量增加、繼發性 LV hypertrophy、收縮壓升高）→ 腎臟（GFR 增加掩蓋潛在 CKD）→ 消化道（腸道蠕動加速、吸收不良）→ 骨骼（骨質流失）→ 神經肌肉（過動、肌肉消耗）。',
    clinical_signs: [
      { sign: '體重減輕', category: 'primary', description: '幾乎 100% 病例，常伴隨食慾亢進（消瘦但吃很多）' },
      { sign: '食慾亢進 (polyphagia)', category: 'primary', description: '代謝率增加導致能量需求增加' },
      { sign: '多渴多尿 (PU/PD)', category: 'primary', description: '約 40-50%，甲亢增加腎臟灌流和 medullary washout' },
      { sign: '嘔吐/腹瀉', category: 'primary', description: '約 30-50%，腸道蠕動加速' },
      { sign: '行為改變（過動、嚎叫、攻擊性）', category: 'secondary', description: '交感神經過度活化' },
      { sign: '心跳過速/心雜音', category: 'secondary', description: '心率常 > 240 bpm，甲亢心肌病可聽到奔馬律或雜音' },
      { sign: '毛髮粗糙/過度理毛', category: 'secondary', description: '甲亢貓可出現毛髮外觀改變' },
      { sign: '可觸及甲狀腺結節', category: 'secondary', description: '腹側頸部觸診，約 80-90% 可觸及' },
    ],
    staging: null,
    differential_diagnosis: [
      { condition: '糖尿病', key_differentiator: '體重減輕伴多食但有持續性高血糖（> 300 mg/dL）和糖尿' },
      { condition: '炎症性腸病（IBD）', key_differentiator: '體重減輕和嘔吐腹瀉但 T4 正常，腸道超音波和組織切片可鑑別' },
      { condition: '腸道淋巴瘤', key_differentiator: '體重減輕和食慾改變但 T4 正常，超音波淋巴結腫大，FNA/組織切片確診' },
      { condition: '慢性腎病', key_differentiator: 'CKD 也有 PU/PD 和體重減輕但通常食慾下降（非增加），T4 正常或偏低' },
      { condition: '外分泌胰臟機能不全（EPI）', key_differentiator: '體重減輕伴多食但 T4 正常，TLI 偏低確診' },
    ],
    diagnostic_workup: '1. 基礎血檢：CBC（stress leukogram、PCV 可能偏高）、生化（ALT/ALP 輕度升高、BUN/Cre 偏低或正常需注意 GFR 效應）→ 2. Total T4（> 4.0 確診、2.5-4.0 灰色地帶）→ 3. 灰色地帶：Free T4 或 2-4 週後重複 T4 → 4. 血壓測量（甲亢性高血壓）→ 5. 尿液分析（USG、UPC、排除同時 CKD）→ 6. 心臟評估（聽診、必要時心超排除甲亢心肌病）→ 7. 可選：甲狀腺掃描（Tc-99m，單側 vs 雙側評估）',
    treatment_protocol: 'Primary care — Methimazole 藥物治療（首選初始治療）：起始 2.5 mg PO BID，2-3 週後追蹤 T4 + BUN/Cre。目標 T4 1.0-2.5 μg/dL。副作用監測：CBC q2wk 前 3 個月（白血球/血小板減少）。經皮 Methimazole 可用於口服不耐受貓。若 Creatinine 上升 > 30%：降低 Methimazole 劑量維持 T4 在正常高值。Specialty care — 放射性碘 I-131（唯一治癒性治療）：治癒率 > 95%，需先用 Methimazole 確認腎功能可承受甲狀腺功能正常化。甲狀腺切除術：適用於單側或 I-131 不可用時，術前需 Methimazole 穩定 2-4 週。處方飲食（Hill\'s y/d）：極低碘飲食，適用於無法給藥的貓，需為唯一飲食來源。',
    prognosis: 'Methimazole 控制下中位存活 2-5 年（取決於共病）。I-131 治療後治癒率 > 95%，預後極佳（若無 CKD 限制）。甲亢心肌病（LV hypertrophy）在甲亢控制後 1-6 個月多數可逆。甲狀腺癌預後較差。預後最大的影響因子是潛在 CKD 的嚴重度。',
    monitoring: 'Methimazole 起始後：2-3 週追蹤 T4 + BUN/Cre + CBC。穩定後每 3-6 個月追蹤 T4 + 腎功能 + 血壓 + 體重。CBC 每 2 週前 3 個月（監測骨髓抑制副作用）。注意甲亢貓治療後體重恢復——過度增重需調整飲食。長期監測 CKD 進展。',
    owner_communication: '甲亢是貓很常見的老年病，幸運的是可以治療。Methimazole 口服藥是最常用的起始治療，需要每天按時給藥。我們會先用藥物控制一段時間觀察腎功能的反應。放射性碘是唯一能根治的方式，但在治療前需確認腎功能可以承受。居家注意體重變化、食慾和飲水量。如果出現臉部搔癢、不吃或嘔吐頻繁要回診評估藥物副作用。',
  },
  diagnostic_data: null,
  procedure_data: null,
  visual_placeholders: [
    { position: '甲亢與 CKD 交互作用段落後', type: 'flowchart', description: '甲亢治療決策流程圖（含腎功能評估路徑）' },
    { position: '四種治療選項段落後', type: 'comparison_table', description: '四種治療選項比較表（Methimazole vs I-131 vs 手術 vs 飲食）' },
  ],
  interactive_placeholders: [
    { position: '診斷段落', type: 'interactive_staging', description: '輸入 T4/fT4/Creatinine 自動建議診斷與治療方向' },
  ],
  drug_api_links: ['Methimazole', 'Atenolol', 'Amlodipine'],
  references: [
    { type: 'guideline', citation: 'Carney HC et al. "2016 AAFP Guidelines for the Management of Feline Hyperthyroidism." J Feline Med Surg. 2016;18(5):400-416.', relevance: '貓甲亢管理 AAFP 指引' },
    { type: 'textbook', citation: 'Feldman EC et al. Canine and Feline Endocrinology, 4th ed. Elsevier, 2015. Chapter on Feline Hyperthyroidism.', relevance: '貓甲亢完整參考章節' },
    { type: 'journal', citation: 'Peterson ME. "Hyperthyroidism in cats: what\'s causing this epidemic of thyroid disease and can we prevent it?" J Feline Med Surg. 2012;14(11):804-818.', relevance: '貓甲亢流行病學與環境因素' },
    { type: 'journal', citation: 'Williams TL et al. "Survival and the development of azotemia after treatment of hyperthyroid cats." J Vet Intern Med. 2010;24(4):863-869.', relevance: '甲亢治療後 CKD 揭露與存活分析' },
  ],
  is_current: true,
  created_at: now,
};

/** 犬免疫介導性溶血性貧血 (IMHA) — 疾病型 */
const contentIMHA: NodeContent = {
  id: 'CONTENT-IM-L3-005',
  node_id: 'IM-L3-005',
  version: 1,
  summary: '犬免疫介導性溶血性貧血（Immune-Mediated Hemolytic Anemia, IMHA）是犬最嚴重的免疫介導性疾病之一，以自體抗體攻擊紅血球導致溶血為特徵。ACVIM 2019 共識將 IMHA 分為原發性（特發性，約 60-75%）和繼發性。死亡率約 30-50%，血栓栓塞為主要死因。治療核心為免疫抑制加上抗血栓治療。',
  learning_objectives: [
    '區分原發性與繼發性 IMHA 並說明常見的繼發原因',
    '運用血液學和免疫學檢測（球形紅血球、自凝集、Coombs test）診斷 IMHA',
    '制定 IMHA 的免疫抑制治療方案（一線和二線藥物）',
    '說明血栓栓塞在 IMHA 中的機轉與預防策略',
    '辨識預後不良的指標並制定適當的監測計畫',
  ],
  key_points: [
    '原發性/特發性 IMHA（60-75%）：自體免疫攻擊正常紅血球；繼發性（25-40%）：感染、腫瘤、藥物觸發',
    '診斷三要素：再生性貧血 + 球形紅血球（spherocytes）+ 自凝集（saline agglutination test）或 Coombs 陽性',
    '台灣特別注意：壁蝨媒介疾病（Babesia, Ehrlichia）可觸發繼發性 IMHA，須先排除',
    '血栓栓塞是 IMHA 最重要的致死併發症——肺血栓栓塞（PTE）是最常見死因',
    '一線免疫抑制：Prednisolone 2 mg/kg/day + 二線：Mycophenolate 或 Cyclosporine',
    '抗血栓治療：所有 IMHA 犬均應接受（Clopidogrel + 低分子量 Heparin 或 unfractionated Heparin）',
    '死亡率 30-50%，多在前 2 週。存活過 2 週者長期預後改善',
    '復發率約 15-20%，免疫抑制劑需緩慢減量（3-6 個月以上）',
  ],
  body: `# 免疫介導性溶血性貧血 (Immune-Mediated Hemolytic Anemia, IMHA)

## 一、病理機制 (Pathophysiology)

**機轉鏈**：免疫系統失調→產生抗紅血球自體抗體（IgG 和/或 IgM）→抗體結合紅血球表面→

**三種溶血機轉**：
1. **血管外溶血 (extravascular hemolysis)**（最常見）：IgG 包被紅血球→脾臟/肝臟巨噬細胞 Fc 受體辨識→吞噬紅血球→球形紅血球 (spherocytes) 為部分吞噬後殘留
2. **血管內溶血 (intravascular hemolysis)**：IgM（冷凝集素）或大量 IgG→補體活化→MAC (membrane attack complex)→紅血球直接裂解→血紅素尿 + 血紅素血症
3. **前驅細胞破壞**：抗體攻擊骨髓紅血球前驅細胞→非再生性 IMHA（少見但預後差）

[圖片:IMHA pathophysiology — autoantibody binding → extravascular (splenic) vs intravascular (complement) hemolysis]

**高凝血狀態機轉**：溶血→組織因子 (TF) 釋放 + 磷脂酰絲胺酸暴露→外在凝血途徑活化；紅血球微粒 (RBC-derived microparticles) + 游離血紅素→NO 清除→血管內皮功能障礙→**肺血栓栓塞 (PTE) 為 IMHA 最常見死因**

**原發性 (~60-75%)**：特發性自體免疫，中年母犬好發（Cocker Spaniel、English Springer Spaniel、Poodle）
**繼發性 (~25-40%)**：感染 (Babesia, Mycoplasma, Ehrlichia)、藥物 (TMP-SMX, cephalosporins)、腫瘤 (lymphoma, hemangiosarcoma)、疫苗接種後（罕見）

## 二、臨床表現與診斷 (Clinical Signs & Diagnosis)

| 臨床表現 | 頻率 | 特徵 |
|---------|------|------|
| 蒼白黏膜 | >90% | PCV 快速下降 |
| 黃疸 | ~70% | 溶血性（間接膽紅素↑） |
| 嗜睡/虛弱 | >90% | 組織缺氧 |
| 心搏過速 | >80% | 代償機轉 |
| 深色尿（紅褐色） | ~30% | 血管內溶血 |
| 脾腫大 | ~60% | 血管外溶血位點 |
| 發燒 | ~50% | 溶血性/炎症反應 |

### 診斷三要素

| 檢測 | 結果 | 敏感度 | 特異度 | 備註 |
|------|------|--------|--------|------|
| CBC | 再生性貧血 (reticulocytes↑) | 高 | 中 | 前 3-5 天可能為非再生性 |
| 血液抹片 | 球形紅血球 + 多染性 RBC | 高 | 高 | **球形紅血球為 IMHA 關鍵發現** |
| Saline agglutination test | 持續凝集 | 中 (~60%) | 高 | 陽性 = 強力證據 |
| Coombs' test (DAT) | 陽性 | ~70-80% | 中 | 陰性不排除（假陰性常見） |

**診斷標準 (ACVIM 2019)**：貧血 + 球形紅血球 + 自凝集或 Coombs 陽性 + 排除繼發原因。

### 排除繼發性原因
- PCR：Babesia, Mycoplasma haemofelis, Ehrlichia
- 腹部超音波：排除脾臟/肝臟腫瘤 (hemangiosarcoma)
- 藥物史回顧
- 胸腔 X 光：排除腫瘤轉移

## 三、治療策略 (Treatment)

### 免疫抑制

| 藥物 | 劑量 | 角色 | 證據等級 |
|------|------|------|---------|
| [藥物:Prednisolone] | 2 mg/kg/day PO (ACVIM 建議) | 一線基石 | Level I |
| [藥物:Mycophenolate mofetil] | 10 mg/kg PO BID | 常用二線 | Level II |
| [藥物:Azathioprine] (僅犬) | 2 mg/kg PO SID→隔日 | 經典二線 | Level II |
| [藥物:Cyclosporine] | 5 mg/kg PO BID | 難治性替代 | Level III |
| Human IV immunoglobulin (hIVIG) | 0.5-1.5 g/kg IV over 6-12h | 急救（Fc blockade） | Level III |

**注意**：ACVIM 2019 建議 Prednisolone 起始 2 mg/kg/day（非更高），以減少副作用和血栓風險。

### 抗血栓治療

| 藥物 | 劑量 | 備註 | 證據等級 |
|------|------|------|---------|
| [藥物:Clopidogrel] | 2 mg/kg PO SID | 抗血小板 | Level II |
| [藥物:Unfractionated heparin] | 150-300 U/kg SC TID | 急性期 | Level III |
| Low-molecular-weight heparin | Enoxaparin 0.8 mg/kg SC BID | 替代 UFH | Level III |

**所有 IMHA 犬均應接受抗血栓治療**——ACVIM 強烈建議。

### 輸血指引
- PCV <12-15% 或血液動力學不穩定→輸血
- 首次輸血無需交叉配對（犬無天然同種抗體），但建議配對
- DEA 1.1 陰性 pRBC 為首選

## 四、併發症與監控 (Complications & Monitoring)

| 併發症 | 發生率 | 機轉 | 處理 |
|--------|--------|------|------|
| 肺血栓栓塞 (PTE) | ~30-40% | 高凝血 + 內皮損傷 | 抗凝血 + O2 + 支持 |
| DIC | ~10-20% | 凝血級聯過度活化 | FFP + supportive |
| Evans syndrome (IMHA + ITP) | ~10-15% | 同時攻擊 RBC + platelets | 加強免疫抑制 |
| 骨髓壞死 | 罕見 | 嚴重缺氧 | 預後極差 |

**住院監測**：
- PCV q6-12h（急性期）
- 網織紅血球 q24-48h（再生反應追蹤）
- 凝血功能 (PT/aPTT/D-dimer) q24h
- SpO2 + 呼吸型態（PTE 早期偵測）
- 血小板（排除 Evans syndrome）

## 五、預後與預後因子 (Prognosis)

| 預後因子 | 良好 | 不良 |
|---------|------|------|
| 存活 >2 週 | 長期存活率高 | — |
| 再生性貧血 | 預後較佳 | 非再生性 IMHA 預後差 |
| 自凝集 | — | 自凝集陽性預後較差 |
| 血栓栓塞 | — | PTE 為主要死因 |
| 高 bilirubin | — | 嚴重溶血指標 |

**總死亡率**：約 30-50%，多集中在前 2 週。存活過急性期者長期預後改善。**復發率 ~15-20%**。

**飼主溝通**：IMHA 是嚴重但可治療的疾病。前 2 週為關鍵期。治療需 3-6 個月以上。類固醇減量過快易復發。

## 六、人醫借鑑 (Translational Insights)

- 人醫 **warm AIHA** 與犬 IMHA 機轉高度相似——犬為天然研究模型
- 人醫使用 **rituximab (anti-CD20)** 治療難治性 AIHA，獸醫領域有初步報告但尚無商品化犬用抗 CD20
- 人醫的 **venous thromboembolism (VTE) risk scoring** 系統可借鑑至獸醫 IMHA 血栓風險評估
- 人醫已確認 **direct oral anticoagulants (DOACs)** 如 rivaroxaban 的角色，獸醫犬用藥動學研究中

## 七、臨床爭議與知識空缺 (Controversies & Knowledge Gaps)

| 爭議主題 | 目前立場 | 證據等級 | 研究方向 |
|---------|---------|---------|---------|
| 是否常規加第二免疫抑制劑 | ACVIM 不反對但非必須 | Level III | 單藥 vs 雙藥 RCT |
| Pred 劑量 2 vs 4 mg/kg/day | ACVIM 2019 建議 2 mg/kg/day | Level II | 劑量-反應關係研究 |
| hIVIG 的角色 | 急救用途，但證據有限 | Level III | 前瞻性比較研究 |
| 最佳抗血栓方案 | Clopidogrel + heparin 為常用 | Level III | DOACs 在犬的研究 |
| 脾臟切除 | 人醫常見，獸醫罕用 | Level IV | 難治性 IMHA 的手術角色？ |
| Mycophenolate vs Azathioprine | Mycophenolate 可能起效更快 | Level III | 頭對頭比較研究 |`,
  clinical_pearl: '在台灣診斷 IMHA 時，最關鍵的第一步是排除壁蝨媒介疾病。Babesia gibsoni 和 Ehrlichia canis 都可以觸發繼發性 IMHA，而且台灣是高盛行區。SNAP 4Dx 可能在急性感染期偽陰性（抗體尚未產生），因此疑似 IMHA 的犬應同時送 PCR 檢測 Babesia 和 Mycoplasma。另一個重要觀念：自凝集試驗必須用生理食鹽水稀釋後判讀——將一滴 EDTA 血液滴在載玻片上加一滴 saline 混合。如果稀釋後凝集消失，則為 rouleaux（假陽性）；如果持續凝集，才是真性自凝集。',
  common_mistakes: [
    '未排除繼發原因就診斷原發性 IMHA（尤其在台灣必須排除 Babesia 和 Ehrlichia）',
    '自凝集試驗未用生理食鹽水稀釋，rouleaux 被誤判為真性自凝集',
    '所有 IMHA 犬都輸血——輕度至中度貧血且血流動力學穩定者應先觀察再生反應',
    '未給予抗血栓治療（血栓栓塞是最常見死因，所有 IMHA 犬均應接受）',
    '免疫抑制劑減量過快導致復發（至少需 3-6 個月緩慢減量）',
  ],
  disease_data: {
    signalment: '中年犬為主（平均 6-8 歲），雌性犬風險為雄性 2-3 倍。好發品種：Cocker Spaniel、English Springer Spaniel、Old English Sheepdog、Poodle、Irish Setter、Collie、Bichon Frise。可見於任何品種。',
    etiology: '原發性/特發性（60-75%）：自體免疫反應攻擊正常紅血球抗原，確切觸發因子不明。繼發性（25-40%）：感染性（Babesia、Ehrlichia、Anaplasma、Leptospira、Mycoplasma haemocanis）、腫瘤性（淋巴瘤、血管肉瘤、組織球肉瘤）、藥物性（Cephalosporins、Sulfonamides、Propylthiouracil）、疫苗接種後（尤其改良活毒疫苗後 2-4 週）、蜂螫/蛇咬毒素。',
    pathogenesis: '自體抗體（IgG 為主，部分 IgM/補體）結合紅血球表面 → 血管外溶血：IgG-opsonized RBC 被脾臟/肝臟巨噬細胞透過 Fc receptor 吞噬，部分吞噬形成球形紅血球 → 血管內溶血：IgM 活化補體 C5b-9 MAC 直接裂解 RBC → 血紅素血症/血紅素尿 → 高凝血狀態：溶血釋放 tissue factor + phosphatidylserine 暴露 + 內皮損傷 + 發炎細胞因子 → 凝血級聯活化 → 血栓栓塞（肺血栓最常見）和/或 DIC。',
    clinical_signs: [
      { sign: '急性虛弱/嗜睡', category: 'primary', description: '嚴重貧血（PCV < 15-20%）導致組織缺氧' },
      { sign: '黏膜蒼白', category: 'primary', description: '貧血的直接表現' },
      { sign: '黃疸', category: 'primary', description: '紅血球破壞 → 非結合型膽紅素升高 → 黏膜和鞏膜黃染' },
      { sign: '深色尿（血紅素尿/膽紅素尿）', category: 'primary', description: '血管內溶血（紅棕色）或膽紅素（深黃色）' },
      { sign: '心跳過速', category: 'secondary', description: '貧血的代償性反應（維持氧氣輸送）' },
      { sign: '發燒', category: 'secondary', description: '免疫反應引起的全身性發炎' },
      { sign: '脾臟腫大', category: 'secondary', description: '紅血球在脾臟被大量破壞' },
      { sign: '呼吸急促', category: 'secondary', description: '貧血性缺氧或肺血栓栓塞' },
    ],
    staging: null,
    differential_diagnosis: [
      { condition: '壁蝨媒介疾病溶血（Babesia）', key_differentiator: 'SNAP 4Dx + Babesia PCR 可鑑別；可與 IMHA 共存（繼發性 IMHA 的觸發因子）' },
      { condition: '洋蔥/大蒜中毒性溶血', key_differentiator: '病史中有洋蔥/大蒜攝取，血液抹片可見 Heinz body 而非球形紅血球' },
      { condition: '鋅中毒溶血', key_differentiator: '攝取含鋅異物（硬幣、螺帽），腹部 X 光可見金屬異物，血鋅升高' },
      { condition: '微血管病性溶血性貧血（DIC、血管肉瘤）', key_differentiator: '血液抹片 schistocytes 為主（非球形紅血球），Coombs 通常陰性' },
      { condition: '再生性缺鐵性貧血/出血性貧血', key_differentiator: '無球形紅血球、無自凝集、Coombs 陰性；可能有明顯出血灶' },
    ],
    diagnostic_workup: '1. CBC + 血液抹片（PCV、網織紅血球、球形紅血球、schistocytes、nRBC、polychromasia）→ 2. Saline agglutination test（載玻片法）→ 3. 若自凝集陰性：Coombs test → 4. 生化（Total bilirubin、ALT、BUN/Cre）→ 5. 凝血功能（PT/aPTT、Fibrinogen、D-dimer — 排除 DIC）→ 6. 尿液分析（hemoglobinuria、bilirubinuria）→ 7. 排除繼發原因：SNAP 4Dx + Babesia/Mycoplasma PCR + 腹腔超音波（腫瘤、脾臟）+ 胸腔 X 光（腫瘤、PTE）→ 8. 血型和交叉配血（若需輸血）',
    treatment_protocol: 'Primary care — 免疫抑制一線：Prednisolone 2 mg/kg/day PO 分 BID（急性期可用 Dexamethasone 0.2-0.3 mg/kg IV if vomiting）。抗血栓（所有 IMHA 犬均需）：Clopidogrel 2 mg/kg PO SID。輸血指標：PCV < 12-15% 或有組織缺氧臨床徵象（心跳過速不反應、嗜睡加劇）→ pRBC 10-15 mL/kg IV over 4 hr。Specialty care — 二線免疫抑制（Prednisolone 48-72 hr 反應不佳時加入）：Mycophenolate (MMF) 10 mg/kg PO BID（ACVIM 2019 首選二線）或 Cyclosporine 5-10 mg/kg PO BID 或 Azathioprine 2 mg/kg PO SID × 14 天 → 1 mg/kg q48h（禁用於貓）。抗凝血加強：Enoxaparin 0.8 mg/kg SC q6h 或 UFH 150-300 U/kg SC TID。急性穩定：hIVIG 0.5-1.5 g/kg IV over 6-12 hr（阻斷 Fc receptor）。減量時程：PCV 穩定 > 30% 持續 2 週後開始，Prednisolone 每 2-4 週減 25%，總減量至少 3-6 個月。',
    prognosis: '住院死亡率 30-50%，多發生在前 14 天（血栓栓塞和嚴重貧血為主要死因）。存活過 2 週者長期預後明顯改善。1 年存活率約 60-70%。復發率 15-20%（通常在免疫抑制劑減量時）。不良預後指標：自凝集陽性（比 Coombs-only 更嚴重）、血管內溶血（hemoglobinemia/hemoglobinuria）、極度貧血（PCV < 10%）、DIC、中度至重度血小板減少（Evans syndrome：IMHA + ITP）。',
    monitoring: '住院期間：每 6-12 小時 PCV/TS + 血液抹片。每 24 小時：CBC、Bilirubin、vital signs。輸血後：30 分鐘和 1 小時監測輸血反應。出院後：每週 PCV/TS 直至穩定 > 30%。穩定後：每 2-4 週 CBC + 生化。減量期間：每 2-4 週 PCV 確認穩定。長期：每 3 個月追蹤 CBC。停藥後至少追蹤 6-12 個月（監測復發）。',
    owner_communication: 'IMHA 是一種嚴重的免疫系統疾病。坦白說，即使積極治療，仍有約三成到五成的犬無法存活（主要因為血栓併發症）。但如果能撐過前兩週的危險期，長期預後會好很多。治療需要長期免疫抑制藥物，通常需要 3-6 個月以上才能慢慢減量。藥物不能突然停止。居家需注意牙齦顏色（蒼白或黃染惡化需立即就醫）、呼吸狀況和活動力變化。',
  },
  diagnostic_data: null,
  procedure_data: null,
  visual_placeholders: [
    { position: '病理機轉段落後', type: 'flowchart', description: 'IMHA 病理機轉與溶血途徑流程圖（血管外 vs 血管內）' },
    { position: '診斷核心標準段落後', type: 'annotated_image', description: '血液抹片：球形紅血球、自凝集、polychromasia 標注圖' },
    { position: '治療方案段落後', type: 'flowchart', description: 'IMHA 治療決策流程圖（輸血指標 + 免疫抑制階梯）' },
  ],
  interactive_placeholders: [],
  drug_api_links: ['Prednisolone', 'Dexamethasone', 'Mycophenolate', 'Cyclosporine', 'Azathioprine', 'Clopidogrel', 'Enoxaparin'],
  references: [
    { type: 'guideline', citation: 'Garden OA et al. "ACVIM consensus statement on the diagnosis of immune-mediated hemolytic anemia in dogs and cats." J Vet Intern Med. 2019;33(2):313-334.', relevance: 'IMHA 診斷 ACVIM 共識' },
    { type: 'journal', citation: 'Swann JW, Skelly BJ. "Systematic review of evidence relating to the treatment of immune-mediated hemolytic anemia in dogs." J Vet Intern Med. 2013;27(1):1-9.', relevance: 'IMHA 治療系統性回顧' },
    { type: 'journal', citation: 'Weinkle TK et al. "Evaluation of prognostic factors, survival rates, and treatment protocols for immune-mediated hemolytic anemia in dogs: 151 cases (1993-2002)." J Am Vet Med Assoc. 2005;226(11):1869-1880.', relevance: 'IMHA 預後因子與存活率分析' },
    { type: 'textbook', citation: 'Ettinger SJ, Feldman EC. Textbook of Veterinary Internal Medicine, 8th ed. Elsevier, 2017. Chapter on IMHA.', relevance: 'IMHA 基礎教材' },
  ],
  is_current: true,
  created_at: now,
};

/** 糖尿病 — 疾病型 */
const contentDM: NodeContent = {
  id: 'CONTENT-IM-L3-006',
  node_id: 'IM-L3-006',
  version: 1,
  summary: '糖尿病（Diabetes Mellitus, DM）是犬貓常見的內分泌疾病，以持續性高血糖和糖尿為特徵。犬多為 Type 1（胰島 β-cell 破壞，需終生胰島素），貓多為 Type 2（胰島素阻抗 + β-cell 功能不全，部分可緩解）。AAHA 2018 糖尿病管理指引建議以中效胰島素（NPH/犬、Glargine 或 PZI/貓）為首選。',
  learning_objectives: [
    '比較犬（Type 1 為主）與貓（Type 2 為主）糖尿病的病因、病理生理與治療差異',
    '正確判讀血糖曲線（blood glucose curve）並據此調整胰島素劑量',
    '辨識糖尿病酮酸中毒（DKA）的臨床特徵並啟動急救處理',
    '說明 Somogyi effect 與胰島素劑量不足的鑑別方式',
    '制定糖尿病犬貓的長期居家管理計畫',
  ],
  key_points: [
    '犬 DM 多為 Type 1（免疫介導 β-cell 破壞），需終生胰島素；貓 DM 多為 Type 2（胰島素阻抗），約 30-40% 可達臨床緩解',
    '診斷標準：持續性高血糖（犬 > 200 mg/dL、貓 > 300 mg/dL）+ 糖尿 + 臨床症狀',
    '犬首選胰島素：NPH（Humulin N）0.25-0.5 U/kg SC BID；貓首選：Glargine（Lantus）0.25-0.5 U/kg SC BID 或 PZI',
    '貓 DM 緩解關鍵：早期積極胰島素治療 + 高蛋白低碳水化合物飲食 + 消除胰島素阻抗因子（肥胖、糖皮質素）',
    'Fructosamine 反映過去 2-3 週的平均血糖控制（犬 < 400 μmol/L、貓 < 450 μmol/L 良好控制）',
    'DKA 為急診：高血糖 + 酮體（β-hydroxybutyrate）+ 代謝性酸中毒 + 脫水',
    'Somogyi effect：胰島素過量 → 低血糖反彈 → 反調節荷爾蒙釋放 → 高血糖。與劑量不足難以區分，需血糖曲線',
  ],
  body: `# 糖尿病 (Diabetes Mellitus, DM)

## 一、病理機制 (Pathophysiology)

### 犬 DM（以 Type 1 為主）

**機轉鏈**：遺傳易感性 + 環境觸發→免疫介導性胰島 β 細胞破壞（T 細胞 + 自體抗體攻擊胰島抗原：insulin、GAD65、IA-2）→漸進性 β 細胞喪失（>80-90% 喪失時出現臨床症狀）→**絕對胰島素缺乏**→終生需要外源性胰島素

**其他犬 DM 病因**：胰臟炎（β 細胞破壞）→胰源性 DM；[藥物:Prednisolone]/黃體素→胰島素阻抗→暫時性或永久性 DM（母犬黃體期/progestagen 使用）

### 貓 DM（以 Type 2 為主）

**機轉鏈**：肥胖→脂肪細胞 adipokine 失衡 (adiponectin↓, TNF-α↑, resistin↑)→**胰島素阻抗** + 長期高血糖→β 細胞持續高負荷分泌→**胰島類澱粉沉著 (islet amyloid polypeptide/IAPP deposition)**→β 細胞進一步損傷→β 細胞功能不全 + 數量減少

[圖片:DM pathophysiology comparison — canine Type 1 (immune-mediated β-cell destruction) vs feline Type 2 (insulin resistance + IAPP amyloidosis)]

**貓的糖毒性 (glucose toxicity)**：持續高血糖→β 細胞功能進一步抑制→惡性循環。但若早期以胰島素積極控制血糖→解除糖毒性→**β 細胞功能可能恢復**→約 30-40% 貓可達**臨床緩解 (diabetic remission)**。

### DKA 機轉
胰島素缺乏嚴重→脂肪分解↑→FFA→肝臟β-氧化→酮體 (β-hydroxybutyrate, acetoacetate) 過量生成→代謝性酸中毒→電解質紊亂 (K↓, P↓)→脫水→休克

## 二、臨床表現與診斷 (Clinical Signs & Diagnosis)

| 臨床表現 | 犬 | 貓 | 備註 |
|---------|----|----|------|
| 多渴多尿 (PU/PD) | 常見 | 常見 | 滲透性利尿 |
| 多食 (polyphagia) | 常見 | 常見 | 細胞飢餓 |
| 體重減輕 | 常見 | 常見 | 脂肪/蛋白分解 |
| 白內障 | 犬特有 (~75%) | 不發生 | 山梨醇累積 |
| 足底著地 (plantigrade stance) | 不適用 | 貓特有 ~10% | 糖尿病性神經病變 |
| DKA 表現 | 嘔吐/脫水/虛脫 | 嘔吐/脫水/虛脫 | 急診 |

### 診斷標準

| 條件 | 犬 | 貓 |
|------|----|----|
| 空腹血糖 | >200 mg/dL | >300 mg/dL（排除壓力性高血糖） |
| 糖尿 | 持續性 | 持續性 |
| 果糖胺 (Fructosamine) | >350 μmol/L | >400 μmol/L |

**貓壓力性高血糖鑑別**：貓住院/緊迫可致短暫高血糖 + 糖尿→Fructosamine 可區分（壓力性正常、DM 升高）。

### DKA 診斷
- 高血糖 + 酮尿/酮血 + 代謝性酸中毒 (pH <7.3, HCO3 <15)
- β-hydroxybutyrate >3.0 mmol/L（尿酮試紙可能漏測 BHB）

## 三、治療策略 (Treatment)

### 犬 DM

| 治療 | 首選藥物 | 劑量 | 備註 | 證據等級 |
|------|---------|------|------|---------|
| 胰島素 | [藥物:NPH] (Humulin N) 或 [藥物:Vetsulin] (Caninsulin) | 0.25-0.5 U/kg SC BID | 犬首選中效胰島素 | Level I |
| 飲食 | 高纖維/複合碳水化合物 | — | 減緩葡萄糖吸收 | Level II |
| 運動 | 規律適度運動 | — | 促進胰島素敏感性 | Level III |

### 貓 DM

| 治療 | 首選藥物 | 劑量 | 備註 | 證據等級 |
|------|---------|------|------|---------|
| 胰島素 | [藥物:Glargine] (Lantus) 或 [藥物:PZI] | 0.25-0.5 U/kg SC BID | 貓首選長效胰島素 | Level I |
| 飲食 | **高蛋白低碳水化合物** | <15% ME from carbs | 緩解關鍵 | Level I |
| 減重 | 消除肥胖 | — | 降低胰島素阻抗 | Level I |

**貓 DM 緩解策略**：早期積極胰島素 + 高蛋白低碳水飲食 + 消除胰島素阻抗因子→約 30-40% 可達緩解。

### DKA 急救

| 步驟 | 措施 | 目的 |
|------|------|------|
| 1 | 0.9% NaCl IV + KCl 補充 | 矯正脫水 + 補鉀 |
| 2 | Regular insulin 0.1 U/kg/hr CRI | 降血糖（目標 50-75 mg/dL/hr） |
| 3 | 血糖 <250 時加 2.5-5% dextrose | 預防低血糖 |
| 4 | KPO4 補充 | 矯正低磷（再餵食效應） |
| 5 | NaHCO3（僅 pH <7.0） | 嚴重酸中毒時 |

## 四、併發症與監控 (Complications & Monitoring)

| 併發症 | 物種 | 機轉 | 監測/處理 |
|--------|------|------|---------|
| 糖尿病性白內障 | 犬特有 | 山梨醇累積→晶體腫脹 | 手術摘除 |
| 糖尿病性神經病變 | 貓為主 | Schwann cell 損傷 | 血糖控制後可改善 |
| Somogyi effect | 兩者 | 低血糖反彈→高血糖 | 血糖曲線確認→降低劑量 |
| 胰島素阻抗 | 兩者 | UTI、庫欣、感染 | 排除潛在原因 |
| 低血糖 | 兩者 | 胰島素過量 | 教育飼主辨識+處理 |

**血糖曲線 (Blood Glucose Curve, BGC)**：每 2h 測血糖 × 12h。目標犬 100-250 mg/dL；貓 100-300 mg/dL。Nadir 不應 <80 mg/dL。

**居家監測**：耳廓邊緣採血 + glucometer，每週 spot check（比在院 BGC 更反映真實控制）。

## 五、預後與預後因子 (Prognosis)

| 情境 | 預後 | 備註 |
|------|------|------|
| 犬穩定 DM | 佳 | 中位存活 2-3 年（多數死於非 DM 相關原因） |
| 貓 DM 達緩解 | 極佳 | 約 30-40%；部分可能復發 |
| 貓 DM 需長期胰島素 | 佳 | 良好控制下生活品質良好 |
| DKA | 謹慎 | 死亡率 ~25-30% |

**飼主溝通**：DM 是可管理的慢性病。犬需終生胰島素，貓有機會緩解。居家監測和規律回診是成功關鍵。低血糖是最危險的急性併發症——教導飼主辨識和處理。

## 六、人醫借鑑 (Translational Insights)

- 犬 Type 1 DM 為人類 T1DM 的天然動物模型——自體免疫機轉高度相似
- 人醫 **continuous glucose monitoring (CGM)** 系統（如 FreeStyle Libre）已有犬貓應用報告
- 人醫 **SGLT2 抑制劑** 在獸醫尚未常規使用（貓 DKA 風險疑慮）
- 人醫 **HbA1c** 的概念對應獸醫 Fructosamine，但 Fructosamine 反映時間更短（2-3 週 vs 2-3 個月）
- 人醫 **closed-loop insulin pump** (artificial pancreas) 概念可能未來應用於獸醫

## 七、臨床爭議與知識空缺 (Controversies & Knowledge Gaps)

| 爭議主題 | 目前立場 | 證據等級 | 研究方向 |
|---------|---------|---------|---------|
| Glargine vs PZI（貓）| 兩者等效，Glargine 較常用 | Level II | 頭對頭比較緩解率 |
| CGM 在獸醫的角色 | 初步有用但驗證不足 | Level III | 準確度與臨床應用研究 |
| 口服降血糖藥（貓）| 效果不佳，不推薦 | Level II | 新型 GLP-1 agonist？ |
| 犬胰島素 SID vs BID | BID 為標準 | Level II | 長效胰島素 SID 可行性？ |
| 貓 DM 緩解後的最佳追蹤 | 定期 Fructosamine/血糖 | Level III | 緩解後復發預測因子？ |`,
  clinical_pearl: '貓糖尿病最令人興奮的概念是「臨床緩解」。約 30-40% 的新診斷糖尿病貓可以在數週至數月內達到緩解（不再需要胰島素）。關鍵策略是：(1) 盡早開始胰島素積極治療以解除糖毒性、(2) 立即轉換為高蛋白低碳水化合物飲食、(3) 消除胰島素阻抗因子（停止糖皮質素、減重）。Glargine 比 PZI 在促進緩解方面可能略有優勢。一旦胰島素需求降至 < 1 U/injection BID 且血糖持續 < 200 mg/dL，可嘗試停藥觀察。但需長期監測——約 25-30% 的緩解貓會在數月至數年後復發。\n\n【台灣流行病學】糖尿病在台灣犬貓中盛行率逐年上升，與室內飼養、高熱量飲食及肥胖問題密切相關。台灣貓的肥胖盛行率估計超過 30%，為糖尿病的重要風險因子。犬糖尿病在台灣以中老年母犬好發，常見品種包括貴賓犬、臘腸犬等。台灣市場可取得 Glargine（Lantus）與 NPH 胰島素，但 PZI（ProZinc）需特別進口。居家血糖監測（home glucose monitoring）在台灣飼主配合度逐漸提高。',
  common_mistakes: [
    '僅憑單次高血糖就診斷貓糖尿病（貓壓力性高血糖很常見，需搭配 Fructosamine 和持續性糖尿確診）',
    '犬使用 Glargine 或貓使用 NPH（物種胰島素選擇不同：犬首選 NPH、貓首選 Glargine/PZI）',
    '血糖曲線的 nadir 過低（< 65 mg/dL）未被辨識為 Somogyi effect，反而增加劑量',
    '犬未絕育母犬糖尿病未建議立即絕育（黃體素是強力胰島素拮抗因子）',
    '未積極搜尋胰島素阻抗因子就認定「胰島素劑量不夠」而一直加量',
  ],
  disease_data: {
    signalment: '犬：中老年（7-9 歲），未絕育母犬風險高（黃體素），好發品種：Samoyed、Australian Terrier、Miniature Schnauzer、Miniature/Toy Poodle、Pug、Bichon Frise。貓：中老年（> 8 歲），去勢公貓風險最高（肥胖傾向），Burmese 品種風險 2-4 倍。',
    etiology: '犬：免疫介導性 β-cell 破壞（Type 1 為主）、慢性胰臟炎致 β-cell 損傷、醫源性（長期糖皮質素/progestins）。貓：肥胖致胰島素阻抗（Type 2 為主）、胰島澱粉樣沉積（amylin/IAPP 蓄積 → β-cell 喪失）、糖皮質素使用、慢性胰臟炎。共同加重因子：感染（UTI 常見）、並存內分泌疾病（犬 Cushing、貓甲亢/肢端肥大症）。',
    pathogenesis: '犬 Type 1：自體免疫或胰臟炎 → β-cell 進行性破壞 → 胰島素絕對缺乏 → 高血糖 → 超過腎閾（犬 ~180 mg/dL）→ 糖尿 → 滲透性利尿 → PU/PD → 脂肪分解代替供能 → 酮體產生（DKA 風險）。貓 Type 2：肥胖 → 周邊組織胰島素阻抗 → β-cell 代償性分泌增加 → amylin 共分泌增加 → 胰島澱粉樣沉積 → β-cell 進行性喪失 → 胰島素相對不足 → 持續高血糖 → 糖毒性進一步抑制 β-cell → 惡性循環。解除糖毒性（胰島素治療降血糖）→ 殘餘 β-cell 功能恢復 → 緩解可能。',
    clinical_signs: [
      { sign: '多渴多尿 (PU/PD)', category: 'primary', description: '高血糖致滲透性利尿，最常見主訴' },
      { sign: '多食 (polyphagia)', category: 'primary', description: '細胞無法利用葡萄糖 → 饑餓訊號持續' },
      { sign: '體重減輕', category: 'primary', description: '脂肪和蛋白質分解代替供能' },
      { sign: '後肢跛行姿勢（貓）', category: 'primary', description: '糖尿病性周邊神經病變（plantigrade stance），約 10% 貓 DM 可見' },
      { sign: '白內障（犬）', category: 'secondary', description: '犬 DM 獨特併發症，約 75% 犬在診斷後 1 年內發生白內障' },
      { sign: '肝臟腫大', category: 'secondary', description: '肝臟脂肪蓄積（hepatic lipidosis，貓尤其常見）' },
      { sign: '反覆泌尿道感染', category: 'secondary', description: '高血糖尿液利於細菌繁殖 + 免疫功能低下' },
    ],
    staging: null,
    differential_diagnosis: [
      { condition: '壓力性高血糖（貓）', key_differentiator: '通常 < 300 mg/dL、Fructosamine 正常（< 340 μmol/L）、糖尿為暫時性' },
      { condition: '腎上腺皮質機能亢進（Cushing）', key_differentiator: '犬 Cushing 約 10% 併發 DM；Cushing 有典型皮膚/壺腹腹表現，LDDST 確認' },
      { condition: '肢端肥大症（貓）', key_differentiator: '生長激素過度分泌致胰島素阻抗，IGF-1 升高（> 1000 ng/mL），可能有面容改變和體重增加' },
      { condition: '甲亢併發高血糖（貓）', key_differentiator: '甲亢可增加胰島素阻抗，T4 升高可鑑別' },
      { condition: '腎性糖尿', key_differentiator: '糖尿但血糖正常（腎小管對葡萄糖再吸收缺陷），極罕見' },
    ],
    diagnostic_workup: '1. 血糖（犬 > 200 mg/dL / 貓 > 300 mg/dL 持續性高血糖）→ 2. 尿液分析（糖尿確認 + USG + 沉渣 + 培養排除 UTI）→ 3. Fructosamine（> 400 μmol/L 犬 / > 450 貓 支持持續性高血糖）→ 4. CBC/生化全套（肝指數、電解質、三酸甘油酯、膽固醇、Lipase/cPLI）→ 5. 排除共病：犬測 cortisol / LDDST（Cushing）；貓測 T4（甲亢）→ 6. DKA 評估：血液氣體分析、酮體（β-hydroxybutyrate）、電解質（K、Phos）→ 7. 腹腔超音波（胰臟、肝臟、腎上腺評估）',
    treatment_protocol: 'Primary care — 犬：NPH (Humulin N) 0.25-0.5 U/kg SC BID 餐時注射 + 高纖維飲食 + 規律運動 + 未絕育母犬立即絕育。貓：Glargine (Lantus) 0.25-0.5 U/kg SC BID 或 PZI (ProZinc) 0.25-0.5 U/kg SC BID + 高蛋白低碳水化合物飲食（碳水 < 10% ME）+ 緩慢減重。兩者共通：7-14 天後回診做血糖曲線（或居家 FreeStyle Libre）、根據 nadir 調整劑量（每次 0.5-1 U/injection）、監測 Fructosamine 每 4-6 週。Specialty care — DKA 急救：0.9% NaCl 輸液矯正脫水 + Regular insulin CRI 0.05-0.1 U/kg/hr IV（或 IM protocol）+ 鉀補充（依血鉀濃度調整添加量）+ 磷補充（若 < 1.5 mg/dL）+ 碳酸氫鈉僅 pH < 7.0 時使用 + 止吐（Maropitant）+ 處理觸發因子（胰臟炎、UTI、Cushing）。持續性胰島素阻抗調查：尿液培養（隱匿性 UTI）、LDDST（Cushing, 犬）、IGF-1（肢端肥大症, 貓）、腹腔超音波。',
    prognosis: '犬 DM：需終生胰島素治療，緩解極罕見（除非醫源性且移除原因）。控制良好的犬中位存活 2-3 年。約 75% 在 1 年內發生白內障。貓 DM：約 30-40% 可達臨床緩解（尤其新診斷、早期積極治療、消除胰島素阻抗）。緩解貓中約 25-30% 會復發。未緩解貓需終生胰島素。DKA 住院死亡率約 20-30%。不良預後指標：合併胰臟炎、DKA、持續性胰島素阻抗、酮血症。',
    monitoring: '起始治療後 7-14 天：血糖曲線（每 2 小時 × 12 小時，或 FreeStyle Libre）。穩定後每 1-3 個月：Fructosamine + 血糖曲線 + 臨床評估（體重、飲水量、尿量）。每 6 個月：CBC/生化 + 尿液分析與培養（排除 UTI）。貓緩解後：每 2 週居家血糖監測前 3 個月，之後每月。犬白內障監測：每 6 個月眼科評估。',
    owner_communication: '糖尿病是可以管理的慢性疾病。犬需要終生每天注射胰島素，但大多數飼主很快就能學會。貓有機會緩解（約三至四成），早期積極治療和飲食管理是關鍵。居家需注意飲水量和排尿量的變化。低血糖是最需要警覺的急症——如果狗狗或貓咪出現虛弱、顫抖、抽搐，要立即給蜂蜜或糖水塗在牙齦上並立刻就醫。定期回診做血糖曲線是調整劑量的關鍵。',
  },
  diagnostic_data: null,
  procedure_data: null,
  visual_placeholders: [
    { position: '物種差異表後', type: 'comparison_table', description: '犬 vs 貓糖尿病完整比較表' },
    { position: '血糖曲線判讀段落後', type: 'flowchart', description: '血糖曲線判讀與劑量調整流程圖' },
  ],
  interactive_placeholders: [
    { position: '血糖曲線段落', type: 'interactive_staging', description: '輸入血糖曲線數值自動判讀並建議調整方向' },
  ],
  drug_api_links: ['NPH insulin', 'Glargine', 'PZI', 'Regular insulin', 'Maropitant'],
  references: [
    { type: 'guideline', citation: 'Behrend E et al. "2018 AAHA Diabetes Management Guidelines for Dogs and Cats." J Am Anim Hosp Assoc. 2018;54(1):1-21.', relevance: 'AAHA 糖尿病管理指引' },
    { type: 'textbook', citation: 'Feldman EC et al. Canine and Feline Endocrinology, 4th ed. Elsevier, 2015. Chapters on Diabetes Mellitus.', relevance: '糖尿病完整參考章節' },
    { type: 'journal', citation: 'Roomp K, Rand J. "Intensive blood glucose control is safe and effective in diabetic cats using home monitoring and treatment with glargine." J Feline Med Surg. 2009;11(8):668-682.', relevance: '貓 Glargine 治療與緩解策略' },
    { type: 'journal', citation: 'O\'Brien MA. "Diabetic emergencies in small animals." Vet Clin North Am Small Anim Pract. 2010;40(2):317-333.', relevance: 'DKA 急救管理' },
  ],
  is_current: true,
  created_at: now,
};

/** 慢性腸病 (IBD/CE) — 疾病型 */
const contentCE: NodeContent = {
  id: 'CONTENT-IM-L3-007',
  node_id: 'IM-L3-007',
  version: 1,
  summary: '慢性腸病（Chronic Enteropathy, CE）是犬貓持續或反覆出現消化道症狀（> 3 週）的一組疾病統稱，涵蓋食物反應性腸病（FRE）、抗生素反應性腸病（ARE）、免疫抑制劑反應性腸病（IRE/IBD）和蛋白質流失性腸病（PLE）。現代觀點以「治療反應」取代傳統組織學分類來定義亞型。',
  learning_objectives: [
    '說明慢性腸病的現代分類系統（FRE、ARE、IRE、PLE）及其治療反應基礎',
    '制定慢性腸病的系統性排除診斷流程',
    '運用 CCECAI 或 CIBDAI 評分系統量化犬 CE 嚴重度',
    '設計階梯式治療方案（飲食試驗 → 抗生素 → 免疫抑制）',
    '說明腸道微生物群（microbiome）在 CE 中的角色與 FMT 的應用前景',
  ],
  key_points: [
    'CE 定義：消化道症狀 > 3 週 + 排除感染性/結構性/代謝性/腫瘤性原因',
    '分類依治療反應：FRE（食物反應性，約 50-60%）> ARE（抗生素反應性，~15%）> IRE/IBD（免疫抑制劑反應性，~25%）> PLE',
    'FRE 為最常見亞型——飲食試驗是 CE 診斷流程的第一步',
    '組織學確診需內視鏡多部位切片，但組織學分級與臨床嚴重度相關性有限',
    'WSAVA 組織學分級標準化了腸道發炎評估（輕度/中度/重度）',
    '犬 CE 活動指數（CCECAI）≥ 10 分提示較差預後，需積極治療',
    'Cobalamin（Vitamin B12）缺乏在 CE 中常見且影響預後，必須補充',
    '飲食試驗：水解蛋白或新型蛋白飲食，至少 2-4 週（理想 6-8 週）',
  ],
  body: `# 慢性腸病 (Chronic Enteropathy, CE)

## 一、病理機制 (Pathophysiology)

**核心概念**：CE 並非單一疾病，而是腸道黏膜免疫系統對管腔抗原（食物、微生物）產生異常免疫反應的一組疾病。

**機轉鏈**：遺傳易感性（犬 MHC/DLA 多態性、NOD2/TLR 變異→先天免疫辨識異常）+ 環境觸發因子（飲食抗原、腸道微生物失衡 dysbiosis）→腸道黏膜屏障功能損害（tight junction 鬆散→通透性↑）→管腔抗原穿透黏膜→黏膜免疫系統過度活化（Th1/Th17 失衡、調節性 T 細胞功能不足）→慢性炎症反應（淋巴漿細胞/嗜酸球浸潤）→黏膜損傷→進一步屏障破壞（惡性循環）

[圖片:CE pathophysiology — genetic susceptibility + environmental triggers → mucosal barrier disruption → immune dysregulation → chronic inflammation cycle]

**腸道微生物群 (Microbiome) 的角色**：
- CE 犬的腸道微生物群組成與健康犬顯著不同（Dysbiosis Index 可量化）
- Fusobacterium、Clostridium hiranonis 等有益菌↓；Escherichia coli↑
- 膽汁酸代謝異常（初級膽汁酸↑、次級膽汁酸↓）→與 dysbiosis 密切相關

### CE 分類（依治療反應）

| 亞型 | 比例 | 特徵 |
|------|------|------|
| 食物反應性 (FRE) | ~50-60% | 飲食試驗改善，最常見 |
| 抗生素反應性 (ARE) | ~10-15% | Metronidazole/Tylosin 改善 |
| 免疫抑制劑反應性 (IRE/IBD) | ~25-30% | 需免疫抑制治療 |
| 蛋白質流失性 (PLE) | ~10% | 白蛋白↓，最嚴重 |

## 二、臨床表現與診斷 (Clinical Signs & Diagnosis)

| 臨床表現 | 小腸型 | 大腸型 | 混合型 |
|---------|--------|--------|--------|
| 下痢特徵 | 量多、水樣、體重↓ | 少量、黏液/血絲、裡急後重 | 兩者混合 |
| 嘔吐 | 常見 | 較少 | 變異大 |
| 體重變化 | 常減輕 | 通常穩定 | 變異大 |
| 食慾 | 可能↓ | 通常正常 | 變異大 |

### 診斷流程（階梯式排除）

**Step 1：排除非 CE 原因**
- 糞便浮游法/PCR（寄生蟲：Giardia, Whipworm）
- CBC/生化/TLI/fPLI（排除 EPI、胰臟炎、代謝性疾病）
- 影像學（腹部超音波排除結構性病變/腫瘤）

**Step 2：飲食試驗**（首先執行！）
- 水解蛋白飲食或新型蛋白飲食
- 嚴格執行 2-4 週（理想 6-8 週）
- **反應者 = FRE**（最大宗）

**Step 3：內視鏡 + 組織病理學**
- 適應症：飲食試驗無效 / 嚴重度高 / 低白蛋白
- 多部位切片（胃、十二指腸、迴腸、結腸）
- WSAVA 標準化分級

### 嚴重度評分

| 評分系統 | 指標 | 意義 |
|---------|------|------|
| CCECAI (Canine CE Activity Index) | 9 項（態度、食慾、嘔吐、糞便、體重等） | ≥10 分預後較差 |
| CIBDAI (Canine IBD Activity Index) | 6 項 | 傳統使用 |

## 三、治療策略 (Treatment)

### 階梯式治療

| 層級 | 治療 | 適應症 | 證據等級 |
|------|------|--------|---------|
| 第一層 | **飲食試驗**（水解蛋白或新型蛋白） | 所有 CE 首先嘗試 | Level I |
| 第二層 | [藥物:Metronidazole] 10-15 mg/kg PO BID × 4-6 wk | FRE 無效時 | Level II |
| 第二層 | [藥物:Tylosin] 25 mg/kg PO BID | ARE 替代選項 | Level II |
| 第三層 | [藥物:Prednisolone] 1-2 mg/kg PO SID → 漸減 | IRE/IBD 確診後 | Level I |
| 第三層+ | [藥物:Chlorambucil] 4-6 mg/m2 q48h | 類固醇反應不佳 | Level II |
| 第三層+ | [藥物:Cyclosporine] 5 mg/kg PO SID | 替代免疫抑制 | Level II |
| 營養 | [藥物:Cobalamin] 補充（B12 低時必須） | 所有 CE | Level I |
| 新興 | 糞便微生物移植 (FMT) | 難治性 CE | Level III |

### 貓 CE 治療差異
- 貓以 **lymphoplasmacytic enteritis** 和**小腸淋巴瘤**為主
- [藥物:Prednisolone] + [藥物:Chlorambucil] 為貓 IBD/低度淋巴瘤的標準方案
- 貓 CE 的飲食試驗同樣重要

## 四、併發症與監控 (Complications & Monitoring)

| 併發症 | 機轉 | 監測 | 處理 |
|--------|------|------|------|
| Cobalamin 缺乏 | 迴腸吸收不良 | 血清 Cobalamin | 注射/口服補充 |
| 蛋白流失 (PLE) | 黏膜損傷/淋巴管擴張 | Albumin | 超低脂飲食 + 免疫抑制 |
| 腸道淋巴瘤轉化 | 長期慢性炎症（貓尤甚） | 內視鏡追蹤/clonality | 化療 |
| 免疫抑制副作用 | 長期類固醇 | 體重/血糖/肝指數 | 最低有效劑量 |

**監測指標**：
- CCECAI 評分 q4-8 週
- Albumin（PLE 風險者 q2-4 週）
- Cobalamin q3-6 個月（補充後）
- 體重 + BCS + MCS 每次回診
- Dysbiosis Index（可選，追蹤微生物群恢復）

## 五、預後與預後因子 (Prognosis)

| CE 亞型 | 預後 | 備註 |
|---------|------|------|
| FRE | 極佳 | 飲食控制下長期緩解 |
| ARE | 佳 | 可能復發，需長期飲食管理 |
| IRE/IBD（輕-中度） | 佳 | 免疫抑制控制下多可管理 |
| IRE/IBD（CCECAI ≥10） | 謹慎 | 需積極治療 |
| PLE（Alb 恢復 >2.0） | 中等 | 取決於根本原因 |
| PLE（Alb 持續 <1.5） | 不良 | 中位存活 2-5 月 |

**負面預後因子**：CCECAI ≥10、低 Cobalamin 未補充、低白蛋白血症、需要免疫抑制升級、Yorkshire Terrier PLE。

**飼主溝通**：CE 多數可以飲食和藥物良好控制。飲食試驗是第一步也是最重要的一步——即使最終需要藥物，飲食管理仍然是基礎。

## 六、人醫借鑑 (Translational Insights)

- 犬 CE/IBD 為人類 **Crohn's disease** 和 **ulcerative colitis** 的天然動物模型
- 人醫 **biologics** (anti-TNF-α: infliximab; anti-integrin: vedolizumab) 在獸醫尚未廣泛使用
- 人醫 **fecal microbiota transplantation (FMT)** 用於 C. difficile 感染療效卓越，獸醫 FMT 用於 CE 初步有效但 RCT 不足
- 人醫 **calprotectin** 作為腸道炎症標記物，獸醫使用犬/貓特異性 calprotectin 和 S100A12 的研究增加中
- 人醫 **capsule endoscopy** 可評估小腸全段，獸醫小腸內視鏡仍有限

## 七、臨床爭議與知識空缺 (Controversies & Knowledge Gaps)

| 爭議主題 | 目前立場 | 證據等級 | 研究方向 |
|---------|---------|---------|---------|
| 組織學分級 vs 臨床嚴重度 | 相關性有限 | Level II | 更好的生物標記？ |
| 抗生素在 CE 中的角色 | 最新指引傾向減少使用 | Level II | 微生物群長期影響？ |
| FMT 最佳方案 | 有效但標準化不足 | Level III | 供體選擇、頻率、途徑 |
| Dysbiosis Index 的臨床價值 | 有用但非診斷性 | Level II | 追蹤治療反應？ |
| IBD vs 低度淋巴瘤鑑別 | 組織學 + clonality 分析 | Level II | 更好的分子標記？ |
| 飲食試驗最佳時長 | 2-4 週常用，6-8 週理想 | Level II | 最短有效試驗期？ |`,
  clinical_pearl: '慢性腸病診斷流程中最重要但最常被跳過的步驟是「嚴格的飲食排除試驗」。約 50-60% 的慢性腸病犬是食物反應性的——只要換對飲食就能控制。但飲食試驗必須嚴格執行：使用水解蛋白或真正的新型蛋白飲食，持續至少 2-4 週，期間絕對不能給任何其他食物（包括零食、潔牙骨、有味道的藥物膠囊）。許多飼主無法嚴格配合，導致假性「飲食無反應」而被錯誤歸類為 IRE/IBD。此外，Cobalamin（B12）缺乏在 CE 中極為常見且是獨立的不良預後因子——必須在治療初期就檢測和補充。\n\n【台灣流行病學】慢性腸病在台灣小動物臨床極為常見，台灣亞熱帶氣候下食物過敏與環境過敏原暴露頻繁，食物反應性腸病比例可能偏高。台灣常見品種如法國鬥牛犬、柴犬等對飲食敏感度較高。台灣市場已有多種水解蛋白處方飲食可選。值得注意的是，台灣犬隻的慢性腸病需與壁蝨媒介感染（如 Ehrlichia）導致的消化道症狀做鑑別。',
  common_mistakes: [
    '未先進行嚴格飲食排除試驗就給免疫抑制劑（至少 50% CE 是食物反應性的）',
    '飲食試驗不夠嚴格（飼主偷餵零食或其他食物，導致假性失敗）',
    '未測量和補充 Cobalamin（B12 缺乏影響預後，是獨立的不良預後因子）',
    '內視鏡切片數量不足或品質不佳（每部位需 6-8 個高品質切片以避免取樣偏差）',
    '貓 CE 未考慮小細胞淋巴瘤鑑別（兩者組織學可極度相似，需免疫組織化學和 clonality 分析）',
  ],
  disease_data: {
    signalment: '犬：任何年齡和品種，但 German Shepherd、Yorkshire Terrier、Boxer、French Bulldog、Soft-Coated Wheaten Terrier 為高風險品種。FRE 通常較年輕（< 5 歲）。貓：中老年貓（> 6 歲）為主，無明顯品種傾向，但 Siamese 可能有較高風險。',
    etiology: '多因性：遺傳易感性 + 環境觸發因子 + 腸道微生物群失調 + 免疫調節異常。遺傳因子：German Shepherd（IgA 缺乏）、Boxer（granulomatous colitis, E. coli 相關）、Basenji（免疫增生性腸病）。環境因子：飲食抗原、腸道菌群組成改變（dysbiosis）。免疫因子：腸道免疫耐受性喪失 → 對腸腔抗原（食物蛋白、共生菌）異常免疫反應。',
    pathogenesis: '遺傳易感個體 → 腸道屏障功能受損（tight junction 異常、黏液層減少）→ 腸腔抗原（食物蛋白、細菌成分）異常透過屏障 → 先天性和適應性免疫過度活化 → T cell 和 B cell 浸潤腸道固有層 → 慢性發炎 → 腸道吸收功能下降 + 通透性增加 → 營養吸收不良、蛋白質流失。腸道微生物群失調（dysbiosis）為重要的共同路徑：物種多樣性下降、潛在致病菌增加。',
    clinical_signs: [
      { sign: '慢性嘔吐', category: 'primary', description: '> 3 週，可為間歇性。犬和貓均常見' },
      { sign: '慢性腹瀉', category: 'primary', description: '小腸型（量多、水樣）或大腸型（頻繁、黏液血便）' },
      { sign: '體重減輕', category: 'primary', description: '營養吸收不良，蛋白質/脂肪消化異常' },
      { sign: '食慾改變', category: 'primary', description: '食慾下降（常見）或食慾亢進（吸收不良代償）' },
      { sign: '腹鳴/排氣增加', category: 'secondary', description: '腸道菌群失調和發酵異常' },
      { sign: '毛髮粗糙/無光澤', category: 'secondary', description: '慢性營養不良的反映' },
    ],
    staging: { system: 'CCECAI (Canine Chronic Enteropathy Clinical Activity Index)', stages: ['0-3 分：臨床無症狀/緩解', '4-5 分：輕度活動', '6-12 分：中度活動', '≥ 13 分：重度活動（預後不良指標 ≥ 10 分）'] },
    differential_diagnosis: [
      { condition: '腸道淋巴瘤', key_differentiator: '超音波可能見局灶性壁增厚或淋巴結腫大，組織學 + 免疫組織化學 + clonality 鑑別（尤其貓小細胞淋巴瘤 vs IBD）' },
      { condition: '外分泌胰臟機能不全（EPI）', key_differentiator: 'TLI（犬 < 2.5 μg/L、貓 < 8 μg/L）確診；EPI 通常有大量脂肪便' },
      { condition: '慢性胰臟炎', key_differentiator: 'fPLI/cPLI 升高，超音波胰臟異常；可與 CE 共存（尤其貓三體炎）' },
      { condition: '食物過敏/不耐受', key_differentiator: '嚴格來說 FRE 就是 CE 的一個亞型；飲食排除試驗可鑑別' },
      { condition: '寄生蟲感染（Giardia、Tritrichomonas）', key_differentiator: '糞便檢查、Giardia SNAP、PCR 可鑑別；需在 CE 診斷前排除' },
      { condition: 'Addison\'s disease', key_differentiator: '間歇性嘔吐腹瀉但有 Na:K < 27、ACTH stimulation test 可鑑別' },
    ],
    diagnostic_workup: '1. 糞便檢查（浮游法 × 3 + Giardia SNAP/PCR）→ 2. 基礎血檢：CBC/生化/T4（貓）→ 3. 特殊檢測：TLI（排除 EPI）、Cobalamin/Folate、cPLI/fPLI → 4. 尿液分析 → 5. SNAP 4Dx（犬，台灣排除壁蝨媒介疾病）→ 6. 腹腔超音波（腸壁厚度、分層、淋巴結、其他器官）→ 7. 飲食排除試驗 2-4 週 → 8. 若飲食無反應：可嘗試抗生素試驗 2-4 週 → 9. 若仍無反應：上下消化道內視鏡 + 多部位切片（每部位 6-8 個）→ 10. 組織學 WSAVA 分級 + 免疫組織化學（排除淋巴瘤）',
    treatment_protocol: 'Primary care — 階梯式治療。Step 1 飲食試驗：水解蛋白飲食或新型蛋白飲食，嚴格執行 2-4 週（理想 6-8 週）。所有 CE 犬貓均測 Cobalamin 並補充（若 < 300 ng/L）。Step 2 抗生素試驗（飲食無反應時）：Metronidazole 10-15 mg/kg PO BID × 2-4 週 或 Tylosin 25 mg/kg PO BID × 2-4 週。Step 3 益生菌和腸道支持：Visbiome 或 Fortiflora，效果證據尚不充分但安全。Specialty care — 免疫抑制（IRE/IBD，組織學確診後）：Prednisolone 1-2 mg/kg PO SID（犬）或 1-2 mg/kg PO SID（貓），2-4 週後依反應每 2-4 週減 25%。貓替代：Budesonide 1-3 mg PO SID。二線免疫抑制：Chlorambucil 4-6 mg/m² PO q48h（貓首選二線）+ Azathioprine 1-2 mg/kg PO SID → q48h（犬only）+ Cyclosporine 5 mg/kg PO BID。PLE 合併症：見 PLE 專題（抗血栓、低白蛋白管理）。',
    prognosis: 'FRE（食物反應性）：預後極佳，飲食管理可長期控制。ARE：預後良好，但復發常見。IRE/IBD：CCECAI < 10 且對治療有反應者預後中等至佳。CCECAI ≥ 10、低白蛋白（< 2.0 g/dL）、低 Cobalamin 為不良預後指標。貓小細胞淋巴瘤：Prednisolone + Chlorambucil 中位存活 1.5-2 年以上。整體而言，CE 的預後取決於亞型和治療反應。',
    monitoring: '飲食試驗期間：每 2 週評估臨床症狀、體重、CCECAI 分數。免疫抑制治療：每 2-4 週追蹤 CBC（Azathioprine/Chlorambucil 骨髓毒性）+ Albumin + CCECAI。Cobalamin 補充後 1 個月追蹤血清濃度。穩定後每 3 個月追蹤。貓 IRE：每 3-6 個月追蹤超音波（監測淋巴結和腸壁變化，排除淋巴瘤進展）。',
    owner_communication: '慢性腸病是一組需要系統性診斷和長期管理的疾病。好消息是超過一半的犬只需要換飲食就能控制。飲食試驗期間的嚴格配合是成功的關鍵——這段時間只能吃處方飲食，不能給任何零食或其他食物。如果飲食和簡單藥物無效，我們需要進一步做內視鏡檢查確認診斷。部分犬貓需要長期免疫抑制藥物，但多數可以控制到很好的生活品質。定期回診追蹤是長期管理的基石。',
  },
  diagnostic_data: null,
  procedure_data: null,
  visual_placeholders: [
    { position: '現代分類段落後', type: 'flowchart', description: 'CE 階梯式診斷與治療決策流程圖（飲食 → 抗生素 → 免疫抑制）' },
    { position: '貓特殊考量段落後', type: 'comparison_table', description: '貓 IBD vs 小細胞淋巴瘤鑑別比較表' },
  ],
  interactive_placeholders: [
    { position: '嚴重度評估段落', type: 'interactive_staging', description: 'CCECAI 評分計算器' },
  ],
  drug_api_links: ['Prednisolone', 'Budesonide', 'Metronidazole', 'Tylosin', 'Chlorambucil', 'Azathioprine', 'Cyclosporine', 'Cobalamin'],
  references: [
    { type: 'journal', citation: 'Dandrieux JRS. "Inflammatory bowel disease versus chronic enteropathy in dogs: are they one and the same?" J Small Anim Pract. 2016;57(11):589-599.', relevance: 'CE vs IBD 概念演進與現代分類' },
    { type: 'journal', citation: 'Allenspach K et al. "Chronic Enteropathies in Dogs: Evaluation of Risk Factors for Negative Outcome." J Vet Intern Med. 2007;21(4):700-708.', relevance: 'CE 預後因子分析（CCECAI）' },
    { type: 'guideline', citation: 'Washabau RJ et al. "Endoscopic, Biopsy, and Histopathologic Guidelines for the Evaluation of Gastrointestinal Inflammation in Companion Animals." J Vet Intern Med. 2010;24(1):10-26.', relevance: 'WSAVA 腸道組織學分級標準' },
    { type: 'journal', citation: 'Makielski K et al. "Narrative review of therapies for chronic enteropathies in dogs and cats." J Vet Intern Med. 2019;33(1):11-22.', relevance: 'CE 治療策略回顧' },
    { type: 'textbook', citation: 'Washabau RJ, Day MJ. Canine and Feline Gastroenterology. Elsevier, 2013.', relevance: '消化系統疾病基礎教材' },
  ],
  is_current: true,
  created_at: now,
};

/** 獸醫內科學總覽 — L0 概念型 */
const contentIMOverview: NodeContent = {
  id: 'CONTENT-IM-L0-001',
  node_id: 'IM-L0-001',
  version: 1,
  summary: '獸醫內科學（Veterinary Internal Medicine）涵蓋小動物非外科性疾病的診斷與治療，包含腎臟泌尿、內分泌、消化系統、免疫疾病、感染病等核心次專科。本總覽建立系統性學習架構，從基礎科學到臨床應用，強調循證醫學（EBM）與以問題為導向的診斷邏輯。',
  learning_objectives: [
    '描述獸醫內科學的範疇與主要次專科領域',
    '說明內科學中從基礎科學到臨床應用的六層知識架構',
    '運用以問題為導向的方法（Problem-Oriented Approach）建構鑑別診斷清單',
    '解釋循證獸醫學（EBM）在臨床決策中的角色與證據等級',
    '概述台灣小動物內科臨床的特殊考量（流行病學、常見疾病譜）',
  ],
  key_points: [
    '內科學核心範疇：腎臟泌尿、內分泌、消化肝膽胰、免疫/血液、感染病、呼吸、心血管（部分與心臟科重疊）',
    '六層知識架構：L0 總覽 → L1 基礎科學 → L2 病理機轉 → L3 臨床疾病各論 → L4 診斷方法論 → L5 治療與管理',
    '以問題為導向的診斷邏輯：臨床問題 → 鑑別診斷清單 → 最低資料庫（MDB）→ 進階檢查 → 確診 → 治療計畫',
    'EBM 證據等級：系統性回顧/Meta-analysis > RCT > 世代研究 > 病例系列 > 專家意見',
    '最低資料庫（MDB）：CBC、生化全套、尿液分析——幾乎所有內科病例的起點',
    '台灣特殊考量：壁蝨媒介疾病高盛行、亞熱帶感染病譜、飲食習慣差異',
  ],
  body: `# 獸醫內科學總覽

## 一、學科定義與知識架構 (Scope & Knowledge Framework)

獸醫內科學研究小動物（犬貓為主）非外科性疾病的病因、病理生理、診斷與治療。核心在於**以問題為導向 (Problem-Oriented Approach)** 的系統性診斷邏輯。

### 核心次專科
1. **腎臟泌尿學**：CKD、AKI、泌尿道感染、尿路結石
2. **內分泌學**：甲狀腺疾病、腎上腺疾病、糖尿病
3. **消化肝膽胰臟學**：慢性腸病、胰臟炎、肝臟疾病
4. **免疫/血液學**：IMHA、ITP、自體免疫疾病
5. **感染病學**：壁蝨媒介疾病、黴菌感染、傳染病

### 六層知識架構

| 層級 | 名稱 | 內容 | 難度 |
|------|------|------|------|
| L0 | 學科總覽 | 範疇、學習地圖、方法論 | 1 |
| L1 | 基礎科學 | 正常生理學（腎臟、免疫、消化、內分泌） | 1-2 |
| L2 | 病理機轉 | 疾病如何發生（損傷、發炎、自體免疫機轉） | 2-3 |
| L3 | 臨床疾病各論 | 各疾病的診斷與治療（CKD、DM、IMHA 等） | 3-4 |
| L4 | 診斷方法論 | 檢驗判讀、影像學、內視鏡 | 3-5 |
| L5 | 治療與管理 | 藥物治療方案、長期管理策略 | 4-5 |

### 以問題為導向的診斷邏輯
1. **識別臨床問題**：PU/PD、體重減輕、黃疸、貧血等
2. **建構鑑別診斷清單**：依據問題列出可能疾病
3. **最低資料庫（MDB）**：CBC + 生化 + 尿液分析
4. **進階檢查**：影像、特殊血檢、組織切片
5. **確診與治療計畫**

### 台灣臨床特殊考量
- 壁蝨媒介疾病全年活動（Ehrlichia、Babesia 高盛行率）
- 亞熱帶環境：黴菌感染、寄生蟲感染譜與溫帶不同
- 飼主餵食習慣：自製鮮食比例較高，需注意營養均衡
- 用藥可及性：部分藥物（如 DOCP）取得不易

## 六、人醫借鑑 (Translational Insights)

- 人醫的**專科分化**（腎臟科、內分泌科、消化科、免疫科）遠比獸醫精細——獸醫內科醫師需涵蓋人醫多個專科的知識
- 人醫 **循證醫學 (EBM)** 架構（GRADE 系統、Cochrane 回顧）逐漸被獸醫界採用，但獸醫的高品質 RCT 數量仍遠少於人醫
- 人醫 **精準醫學 (Precision Medicine)** 趨勢（基因檢測導向治療）在獸醫處於起步階段——犬品種基因多型性研究為潛在突破口
- 人醫的 **多專科會診 (MDT)** 模式可借鑑至獸醫轉診體系

## 七、臨床爭議與知識空缺 (Controversies & Knowledge Gaps)

| 爭議主題 | 目前立場 | 證據等級 | 研究方向 |
|---------|---------|---------|---------|
| 獸醫 EBM 的可行性 | 支持但高品質 RCT 不足 | — | 多中心合作研究 |
| AI 輔助診斷在獸醫的角色 | 初步應用（影像辨識） | Level IV | 臨床決策支援系統開發 |
| 貓內科學的獨特性 | 貓≠小型犬，需獨立研究 | — | 貓特異性藥動學/疾病機轉 |
| 台灣流行病學數據庫 | 缺乏系統性全國數據 | — | 建立獸醫全國疾病登錄系統 |`,
  clinical_pearl: '內科學最重要的技能不是記住每個疾病的細節，而是建立系統性的診斷思維。面對任何病例，先回答三個問題：(1) 這個臨床問題的鑑別診斷清單是什麼？(2) 最低資料庫（CBC/生化/尿液分析）告訴我什麼？(3) 哪些進階檢查可以最有效地縮小鑑別診斷？養成這種思維模式，即使遇到不熟悉的疾病也能有邏輯地處理。',
  common_mistakes: [
    '跳過最低資料庫（MDB）直接做昂貴的進階檢查',
    '過度依賴單一檢驗結果而非整合多項數據',
    '忽略台灣特有的流行病學差異（如壁蝨媒介疾病的高盛行率）',
    '未建立完整的鑑別診斷清單就過早鎖定診斷',
  ],
  disease_data: null,
  diagnostic_data: null,
  procedure_data: null,
  visual_placeholders: [
    { position: '六層知識架構表後', type: 'mind_map', description: '獸醫內科學知識樹概覽心智圖' },
    { position: '診斷邏輯段落後', type: 'flowchart', description: 'Problem-Oriented Approach 診斷流程圖' },
  ],
  interactive_placeholders: [],
  drug_api_links: [],
  references: [
    { type: 'textbook', citation: 'Ettinger SJ, Feldman EC, Côté E. Textbook of Veterinary Internal Medicine, 8th ed. Elsevier, 2017.', relevance: '獸醫內科學權威教科書' },
    { type: 'textbook', citation: 'Nelson RW, Couto CG. Small Animal Internal Medicine, 6th ed. Elsevier, 2019.', relevance: '小動物內科學基礎教材' },
    { type: 'journal', citation: 'Cockcroft PD, Holmes MA. "Evidence-based veterinary medicine 1. Why is it important and what skills are needed?" In Practice. 2004;26(1):28-33.', relevance: '循證獸醫學概論' },
    { type: 'guideline', citation: 'Nelson RW, Couto CG. "Small Animal Internal Medicine." 6th ed. Elsevier, 2020.', relevance: '小動物內科教科書' },
  ],
  is_current: true,
  created_at: now,
};

/** 腎臟生理學 — L1 概念型 */
const contentRenalPhysiology: NodeContent = {
  id: 'CONTENT-IM-L1-001',
  node_id: 'IM-L1-001',
  version: 1,
  summary: '腎臟生理學是理解腎臟疾病的基石。腎臟透過腎元（nephron）執行過濾、再吸收、分泌與濃縮四大功能，維持體液恆定、電解質平衡、酸鹼調節及廢物排除。GFR 為評估腎功能的核心指標，RAAS 和 ADH 為最重要的調節系統。',
  learning_objectives: [
    '描述腎元的結構組成與各段功能（腎小球、近曲小管、Henle 環、遠曲小管、集尿管）',
    '解釋腎小球濾過率（GFR）的決定因素與臨床評估方式',
    '說明腎素-血管張力素-醛固酮系統（RAAS）在腎臟血流調節中的角色',
    '描述逆流倍增機制（countercurrent multiplication）與尿液濃縮原理',
    '解釋腎臟在酸鹼平衡中的角色（碳酸氫根再吸收、氫離子分泌、銨離子生成）',
  ],
  key_points: [
    '腎元為腎臟功能單位：犬約 40 萬個、貓約 20 萬個——喪失後無法再生',
    'GFR 決定因素：腎小球毛細管壓力、膠體滲透壓、Bowman 囊壓力；犬正常 GFR 約 3-5 mL/min/kg',
    '近曲小管再吸收約 65-70% 的濾液（Na+、glucose、amino acids、HCO3-）',
    'Henle 環的逆流倍增機制建立腎髓質高滲透梯度——決定最終尿液濃縮能力',
    'RAAS 調節：低灌流 → 腎素釋放 → Angiotensin II → 腎出球小動脈收縮 + Aldosterone 分泌 → Na+/H2O 再吸收',
    'ADH（vasopressin）作用於集尿管 V2 receptor → Aquaporin-2 插入 → 水分再吸收 → 尿液濃縮',
    '腎臟酸鹼調節：近曲小管回收 80-90% HCO3-、遠端腎元分泌 H+ 和生成 NH4+',
    'Creatinine 主要經腎小球過濾排出（犬少量管狀分泌）；SDMA 完全經腎小球過濾——兩者皆為 GFR 替代指標',
  ],
  body: `# 腎臟生理學

## 一、核心生理機轉 (Core Physiology)

### 腎元結構與功能

**腎小球（Glomerulus）**
- 構造：入球小動脈 → 腎小球毛細管叢 → 出球小動脈
- 功能：血漿超濾（ultrafiltration）——依分子大小和電荷篩選
- 濾過屏障三層：有孔內皮細胞、基底膜（GBM）、足細胞（podocyte）裂隙膜
- 正常不應通過：白蛋白（MW 69 kDa）以上的蛋白質

**近曲小管（Proximal Convoluted Tubule）**
- 再吸收約 65-70% 濾液量
- 主動運輸：Na+（Na-K-ATPase）、glucose（SGLT2）、amino acids
- HCO3- 再吸收（80-90%）——透過 carbonic anhydrase
- 分泌：有機酸、有機鹼、藥物（如 penicillin、creatinine 少量）

**Henle 環（Loop of Henle）**
- 下行細支：高水通透性、低溶質通透性 → 水被動流出
- 上行粗支：Na-K-2Cl cotransporter（NKCC2，[藥物:Furosemide] 作用標靶）→ 建立髓質高滲透梯度
- 逆流倍增機制：建立 300（皮質）→ 1200（髓質深部）mOsm/kg 的滲透梯度

**遠曲小管與集尿管**
- 遠曲小管：Na-Cl cotransporter（NCC，thiazide 標靶）、Ca2+ 再吸收
- 集尿管皮質段：Aldosterone 作用（ENaC → Na+ 再吸收、K+ 分泌）
- 集尿管髓質段：ADH → Aquaporin-2 → 水分再吸收

### GFR 與腎功能評估

| 指標 | 機制 | 優點 | 限制 |
|------|------|------|------|
| Creatinine | 肌肉代謝產物，主要腎小球過濾 | 便宜、廣泛可用 | 受肌肉量影響、GFR 降 >75% 才明顯升高 |
| SDMA | 蛋白質甲基化產物，完全腎小球過濾 | 不受肌肉量影響、較早偵測 | 較新、部分實驗室尚無 |
| Cystatin C | 所有有核細胞產生，腎小球過濾 | 不受肌肉量影響 | 犬貓研究較少 |
| USG | 反映腎臟濃縮能力 | 簡便、即時 | 受飲水、藥物影響 |

### RAAS 系統
低腎臟灌流 / 低 Na+ → 近球細胞釋放 Renin → Angiotensinogen → Angiotensin I → ACE（肺）→ Angiotensin II → 出球小動脈收縮（維持 GFR）+ Aldosterone 分泌（Na+ 再吸收）+ ADH 促進。

**臨床意義**：CKD 中 RAAS 過度活化 → 腎小球高壓 → 加速損傷。[藥物:Benazepril] 和 [藥物:Telmisartan] 的腎保護機轉即在此。

## 六、人醫借鑑 (Translational Insights)

- 人醫 **eGFR 公式**（CKD-EPI equation）結合 creatinine + cystatin C 估算 GFR；獸醫尚無標準化 eGFR 公式但以 SDMA 趨勢追蹤替代
- 人醫 **SGLT2 抑制劑** (dapagliflozin, empagliflozin) 已成為 CKD 標準治療——作用於近曲小管 SGLT2，減少 glucose/Na+ 再吸收→管球回饋 (tubuloglomerular feedback)→降低腎小球內壓。獸醫貓 CKD 應用研究中
- 人醫腎臟生理的**功能性 MRI** (BOLD-MRI) 評估腎髓質氧合度——獸醫尚在探索階段

## 七、臨床爭議與知識空缺 (Controversies & Knowledge Gaps)

| 爭議主題 | 目前立場 | 證據等級 | 研究方向 |
|---------|---------|---------|---------|
| SDMA 的臨床最佳 cutoff | IRIS 建議 18 μg/dL | Level II | 品種/年齡特異性正常值 |
| Cystatin C 在獸醫的角色 | 研究中，尚非常規 | Level III | 與 SDMA 的頭對頭比較 |
| 犬貓 GFR 直接測量 | 碘海醇清除率為金標準但不實用 | Level I | 更簡便的替代方法？ |
| USG 最佳判讀標準 | 犬 <1.030 / 貓 <1.035 提示功能異常 | Level II | 品種/飲食影響的系統性研究 |`,
  clinical_pearl: '理解腎臟生理最重要的臨床應用是「USG 的判讀」。如果犬脫水但 USG < 1.030（或貓 < 1.035），代表腎臟無法適當濃縮尿液——即使 Creatinine 仍在正常範圍，這已經暗示腎功能有問題。因為 Creatinine 要在 GFR 下降超過 75% 時才會明顯升高，但尿液濃縮能力的喪失可能更早出現。這也是為什麼 USG 是最低資料庫中不可或缺的一部分。',
  common_mistakes: [
    '忽略 USG 在評估腎功能中的重要性（USG 是最早反映腎臟濃縮功能異常的指標之一）',
    '僅用 Creatinine 評估腎功能而未考慮肌肉量影響（消瘦動物 Creatinine 可能假性偏低）',
    '忘記近曲小管回收絕大部分濾液（藥物影響近曲小管功能可造成多種電解質異常）',
    '不理解 RAAS 在 CKD 進展中的角色（這是 ACEI/ARB 腎保護的理論基礎）',
  ],
  disease_data: null,
  diagnostic_data: null,
  procedure_data: null,
  visual_placeholders: [
    { position: '腎元結構段落後', type: 'annotated_image', description: '腎元各段結構與功能標注圖' },
    { position: 'RAAS 系統段落後', type: 'flowchart', description: 'RAAS 調節路徑與藥物作用位點圖' },
  ],
  interactive_placeholders: [],
  drug_api_links: ['Benazepril', 'Telmisartan', 'Furosemide'],
  references: [
    { type: 'textbook', citation: 'Reece WO. Dukes\' Physiology of Domestic Animals, 13th ed. Wiley-Blackwell, 2015. Chapters on Renal Physiology.', relevance: '動物腎臟生理學基礎教材' },
    { type: 'textbook', citation: 'Ettinger SJ, Feldman EC. Textbook of Veterinary Internal Medicine, 8th ed. Elsevier, 2017. Section on Urinary System.', relevance: '腎臟生理與疾病整合教材' },
    { type: 'journal', citation: 'Hall JA et al. "Biomarkers of kidney function and damage in dogs and cats." Vet Clin North Am Small Anim Pract. 2022;52(3):547-567.', relevance: '腎功能生物標記物回顧' },
    { type: 'guideline', citation: 'IRIS (International Renal Interest Society). "IRIS Staging of CKD (Modified 2023)." iris-kidney.com.', relevance: 'CKD 分期與治療指引' },
  ],
  is_current: true,
  created_at: now,
};

/** 免疫學基礎 — L1 概念型 */
const contentImmunologyBasics: NodeContent = {
  id: 'CONTENT-IM-L1-002',
  node_id: 'IM-L1-002',
  version: 1,
  summary: '免疫學基礎涵蓋先天性免疫（innate immunity）與適應性免疫（adaptive immunity）的核心概念。先天性免疫提供快速非特異性防禦，適應性免疫透過 T 細胞與 B 細胞提供抗原特異性反應與免疫記憶。理解正常免疫反應是學習自體免疫疾病（IMHA、ITP）與免疫抑制治療的基礎。',
  learning_objectives: [
    '區分先天性免疫與適應性免疫的組成、特性與作用機轉',
    '描述 T 細胞亞群（Th1、Th2、Treg、Th17、CD8+）的功能與臨床意義',
    '解釋 B 細胞活化、抗體類別轉換與免疫球蛋白（IgG、IgM、IgA、IgE）的功能',
    '說明免疫耐受性（immune tolerance）的機轉與耐受性崩解導致自體免疫的概念',
    '描述補體系統三條活化路徑及其在溶血和發炎中的角色',
  ],
  key_points: [
    '先天性免疫：屏障（皮膚、黏膜）、吞噬細胞（嗜中性球、巨噬細胞）、NK 細胞、補體、Pattern Recognition Receptors（TLRs）',
    '適應性免疫：B 細胞（體液免疫/抗體）、T 細胞（細胞免疫）；特點為抗原特異性和免疫記憶',
    'T 細胞亞群：Th1（細胞內病原）、Th2（寄生蟲/過敏）、Th17（黏膜防禦/自體免疫）、Treg（免疫調節/耐受）、CD8+（細胞毒殺）',
    '免疫球蛋白：IgG（最豐富、血清中主要）、IgM（初次反應、補體活化）、IgA（黏膜免疫）、IgE（過敏/寄生蟲）',
    '免疫耐受性：中樞耐受（胸腺負選擇）+ 周邊耐受（Treg 抑制、anergy、deletion）→ 耐受崩解 = 自體免疫',
    '補體系統：Classical（Ab-Ag）、Alternative（持續低度活化）、Lectin（MBL）→ C3 convertase → C5b-9 MAC → 細胞溶解',
    'Type II 超敏反應（Ab 結合細胞表面抗原）= IMHA/ITP 的核心機轉',
  ],
  body: `# 免疫學基礎

## 一、核心免疫機轉 (Core Immunology)

### 先天性免疫（Innate Immunity）

**物理與化學屏障**：皮膚、黏膜上皮、胃酸、溶菌酶、防禦素（defensins）

**細胞成分**：
- **嗜中性球**：急性發炎第一線，吞噬和殺菌
- **巨噬細胞**：吞噬、抗原呈現（APC）、細胞因子分泌
- **樹突細胞**：最重要的 APC，橋接先天與適應性免疫
- **NK 細胞**：辨識 MHC-I 缺失的細胞（病毒感染、腫瘤）

**Pattern Recognition Receptors (PRRs)**：Toll-like Receptors (TLRs) 辨識 PAMPs（LPS、dsRNA、CpG DNA）→活化後啟動發炎反應與細胞因子釋放

### 適應性免疫（Adaptive Immunity）

**T 細胞免疫**

| 亞群 | 功能 | 主要細胞因子 | 臨床關聯 |
|------|------|------------|---------|
| Th1 | 細胞內病原防禦 | IFN-γ, IL-2 | 結核、利什曼原蟲 |
| Th2 | 寄生蟲/過敏 | IL-4, IL-5, IL-13 | 異位性皮膚炎、寄生蟲 |
| Th17 | 黏膜防禦、發炎 | IL-17, IL-22 | IBD、自體免疫 |
| Treg | 免疫抑制/耐受 | IL-10, TGF-β | 耐受崩解→自體免疫 |
| CD8+ | 細胞毒殺 | Perforin, Granzyme | 病毒感染、腫瘤 |

**B 細胞與抗體**：B 細胞活化需要 T cell help（Th2, Tfh）→ 類別轉換（IgM → IgG/IgA/IgE）；漿細胞分泌抗體；記憶 B 細胞驅動二次反應。

### 免疫耐受性
- **中樞耐受**：胸腺 T 細胞負選擇；骨髓 B 細胞刪除或 receptor editing
- **周邊耐受**：Treg 抑制、Anergy、Deletion
- 耐受崩解 → 自體免疫疾病（IMHA、ITP、甲狀腺炎）

### Gell-Coombs 超敏反應分類

| 類型 | 機轉 | 時間 | 獸醫範例 |
|------|------|------|---------|
| Type I | IgE + Mast cell | 即時（分鐘） | 異位性皮膚炎、過敏性休克 |
| Type II | Ab 結合細胞表面 | 小時-天 | IMHA、ITP、輸血反應 |
| Type III | 免疫複合體沉積 | 小時-天 | 腎小球腎炎、SLE |
| Type IV | T 細胞介導 | 24-72h | 接觸性皮膚炎、結核菌素反應 |

## 六、人醫借鑑 (Translational Insights)

- 人醫 **checkpoint inhibitors** (anti-PD-1, anti-CTLA-4) 在腫瘤免疫治療的革命——獸醫犬黑色素瘤疫苗 (Oncept) 為先驅，但 checkpoint inhibitor 研究尚在早期
- 人醫 **CAR-T 細胞療法**概念在獸醫有初步研究但離臨床應用仍遠
- 人醫對 **Treg 細胞療法**治療自體免疫疾病的研究——獸醫可借鑑於 IMHA/ITP 治療
- 人醫 **microbiome-immune axis** 研究揭示腸道菌群調節全身免疫——與獸醫 CE/IBD 的 dysbiosis 研究直接相關

## 七、臨床爭議與知識空缺 (Controversies & Knowledge Gaps)

| 爭議主題 | 目前立場 | 證據等級 | 研究方向 |
|---------|---------|---------|---------|
| 犬 DLA 與自體免疫風險 | 部分 haplotype 已知相關 | Level III | 更多品種的 DLA 定型 |
| 疫苗與自體免疫觸發 | 時間相關但因果難證 | Level IV | 大規模流行病學研究 |
| Treg 功能檢測臨床化 | 研究工具，非常規 | Level IV | 即時 Treg 功能評估方法 |
| 犬貓免疫表型分析 | 流式細胞儀限於研究機構 | Level III | 商品化犬貓免疫表型 panel |`,
  clinical_pearl: '理解 Type II 超敏反應是掌握 IMHA 和 ITP 的關鍵。在 IMHA 中，IgG 結合紅血球表面 → 脾臟巨噬細胞透過 Fc receptor 辨識並吞噬（血管外溶血），或 IgM 活化補體 → C5b-9 MAC 直接裂解紅血球（血管內溶血）。免疫抑制治療的目標就是抑制這些自體抗體的產生和效應。Prednisolone 主要抑制 T 細胞功能和減少巨噬細胞 Fc receptor 表達，而 Mycophenolate 和 Cyclosporine 則分別抑制 B 細胞和 T 細胞增殖。',
  common_mistakes: [
    '混淆先天性免疫和適應性免疫的特性（先天=快速非特異性無記憶；適應=較慢、特異性、有記憶）',
    '不理解 Treg 在維持免疫耐受中的角色（Treg 功能缺陷是多種自體免疫疾病的共同路徑）',
    '忽略補體系統在溶血中的角色（IgM 介導的補體活化造成血管內溶血，比 IgG 介導的血管外溶血更急性且危險）',
    '將所有免疫反應過度簡化——實際上多種機轉常同時存在',
  ],
  disease_data: null,
  diagnostic_data: null,
  procedure_data: null,
  visual_placeholders: [
    { position: 'T 細胞亞群表後', type: 'flowchart', description: 'T 細胞分化路徑與功能圖' },
    { position: 'Gell-Coombs 分類表後', type: 'comparison_table', description: '四型超敏反應機轉比較圖' },
  ],
  interactive_placeholders: [],
  drug_api_links: [],
  references: [
    { type: 'textbook', citation: 'Tizard IR. Veterinary Immunology: An Introduction, 10th ed. Elsevier, 2018.', relevance: '獸醫免疫學權威教科書' },
    { type: 'textbook', citation: 'Day MJ, Schultz RD. Veterinary Immunology: Principles and Practice, 2nd ed. CRC Press, 2014.', relevance: '獸醫免疫學原理與實務' },
    { type: 'journal', citation: 'Garden OA et al. "ACVIM consensus statement on the diagnosis of immune-mediated hemolytic anemia in dogs and cats." J Vet Intern Med. 2019;33(2):313-334.', relevance: '免疫介導性溶血的免疫機轉' },
    { type: 'guideline', citation: 'Garden OA, Kidd L, Mexas AM, et al. "ACVIM consensus statement on the diagnosis of immune-mediated hemolytic anemia in dogs and cats." J Vet Intern Med. 2019;33(2):313-334.', relevance: 'IMHA 診斷共識' },
  ],
  is_current: true,
  created_at: now,
};

/** 消化系統生理 — L1 概念型 */
const contentGIPhysiology: NodeContent = {
  id: 'CONTENT-IM-L1-003',
  node_id: 'IM-L1-003',
  version: 1,
  summary: '消化系統生理涵蓋從口腔到肛門的消化、吸收與排泄過程，以及肝臟和胰臟的外分泌功能。腸道屏障功能與腸道微生物群（gut microbiome）是現代消化病學的核心概念。理解正常生理是掌握 IBD/CE、胰臟炎、肝臟疾病的基礎。',
  learning_objectives: [
    '描述消化道各段的消化與吸收功能',
    '解釋腸道屏障功能的組成與維持機轉',
    '說明腸道微生物群在健康和疾病中的角色',
    '描述肝臟的主要代謝功能（蛋白質合成、膽汁分泌、解毒、碳水化合物代謝）',
    '說明胰臟外分泌功能與自身保護機轉',
  ],
  key_points: [
    '消化三大過程：機械性消化（咀嚼、蠕動）+ 化學性消化（酵素）+ 微生物發酵（結腸）',
    '小腸為主要吸收部位：十二指腸（鐵、鈣）、空腸（碳水化合物、蛋白質、脂肪）、迴腸（膽鹽、Vitamin B12）',
    '腸道屏障四層防線：黏液層 → 上皮細胞（tight junctions）→ 固有層免疫細胞 → 腸道微生物群',
    '腸道微生物群：犬腸道約 10^14 微生物，物種多樣性與健康密切相關；dysbiosis 與 CE/IBD 相關',
    '肝臟核心功能：白蛋白合成、凝血因子合成、膽汁酸合成、藥物代謝（CYP450）、尿素循環',
    '胰臟外分泌：胰蛋白酶原（trypsinogen）、脂酶（lipase）、澱粉酶（amylase）——以非活化酶原形式儲存防止自身消化',
    '膽汁酸的腸肝循環：肝臟合成 → 膽囊儲存 → 十二指腸排入 → 迴腸主動回收（95%）→ 門脈回到肝臟',
  ],
  body: `# 消化系統生理

## 一、核心消化生理機轉 (Core GI Physiology)

### 消化道各段功能

**胃**
- **胃酸（HCl）**：壁細胞分泌，pH 1-2，殺菌和蛋白質變性
- **胃蛋白酶原（Pepsinogen）**：主細胞分泌，HCl 活化為 Pepsin
- **胃排空**：犬約 6-8 小時（受食物組成影響，脂肪最慢）

**小腸**
- **十二指腸**：胰液和膽汁排入，主要消化段
- **空腸**：最主要吸收段——碳水化合物（刷狀緣雙糖酶→SGLT1/GLUT2）、蛋白質（胜肽酶→胺基酸轉運體）、脂肪（膽鹽乳化→lipase→micelle→乳糜微粒）
- **迴腸**：膽鹽主動回收（enterohepatic circulation）、Vitamin B12 (Cobalamin) 吸收（IF-Cbl 受體）

**大腸**：水分/電解質再吸收、微生物發酵→短鏈脂肪酸 (SCFA, 尤其 butyrate = 結腸上皮主要能量來源)

### 腸道屏障功能四層防線
1. **黏液層**：Goblet cell 分泌黏蛋白，隔離細菌與上皮
2. **上皮層**：Tight junctions（claudin、occludin）維持細胞間密封
3. **免疫層**：GALT（Peyer's patches、固有層淋巴球、sIgA）
4. **微生物層**：共生菌群 competitive exclusion 致病菌

### 肝膽胰功能
- **肝臟**：白蛋白合成、凝血因子合成、膽汁酸合成、藥物代謝（CYP450）、尿素循環
- **膽汁酸腸肝循環**：肝臟合成→膽囊儲存→十二指腸排入→迴腸主動回收（95%）→門脈回到肝臟
- **胰臟外分泌**：以非活化酶原形式儲存（trypsinogen、chymotrypsinogen）→Enterokinase 活化 trypsinogen→trypsin 啟動酵素級聯

## 六、人醫借鑑 (Translational Insights)

- 人醫 **gut-brain axis** 研究揭示腸道微生物群透過迷走神經、免疫和代謝途徑影響中樞神經——獸醫的行為醫學與消化病學交叉研究剛起步
- 人醫 **capsule endoscopy** 可評估全段小腸黏膜——獸醫小腸評估仍局限於十二指腸/迴腸鏡
- 人醫 **hydrogen breath test** 診斷小腸細菌過度增生 (SIBO)——獸醫以 Cobalamin/Folate 和 Dysbiosis Index 替代
- 人醫 **fecal calprotectin** 作為腸道炎症標記物已商品化——獸醫犬/貓特異性 calprotectin 研究增加中

## 七、臨床爭議與知識空缺 (Controversies & Knowledge Gaps)

| 爭議主題 | 目前立場 | 證據等級 | 研究方向 |
|---------|---------|---------|---------|
| 犬貓腸道微生物組的「正常」定義 | 物種/品種/飲食依賴 | Level II | 大規模正常犬貓微生物組資料庫 |
| Butyrate 口服補充的臨床效益 | 理論支持但 RCT 不足 | Level III | 犬 CE 的 butyrate 介入研究 |
| 犬貓腸道通透性的臨床測量 | 研究用（lactulose-rhamnose test） | Level III | 臨床可行的通透性生物標記 |
| 膽汁酸代謝與 CE 的關係 | C. hiranonis 減少→初級膽汁酸↑ | Level II | 膽汁酸調控介入策略 |`,
  clinical_pearl: 'Vitamin B12（Cobalamin）只在迴腸末端被吸收——如果犬貓的迴腸有疾病（如 IBD/CE），B12 就會缺乏。B12 缺乏是 CE 獨立的不良預後因子，而且不補充的話其他治療效果也會打折扣。因此在任何慢性消化道疾病中，B12 都是必測的項目。同理，膽汁酸在迴腸回收，迴腸疾病也會影響膽鹽的腸肝循環，進而影響脂肪吸收。',
  common_mistakes: [
    '忽略迴腸在 B12 吸收中的專一性角色（CE 病患必測 Cobalamin）',
    '不理解腸道屏障崩解與 IBD/CE 的因果關係',
    '將胰臟外分泌不足（EPI）和胰臟炎混淆——EPI 是酵素不足，胰臟炎是酵素異常活化',
    '忘記大腸微生物發酵產生的短鏈脂肪酸（尤其 butyrate）對結腸健康的重要性',
  ],
  disease_data: null,
  diagnostic_data: null,
  procedure_data: null,
  visual_placeholders: [
    { position: '小腸各段功能後', type: 'annotated_image', description: '消化道各段消化吸收功能標注圖' },
    { position: '腸道屏障段落後', type: 'flowchart', description: '腸道屏障四層防線與崩解機轉圖' },
  ],
  interactive_placeholders: [],
  drug_api_links: [],
  references: [
    { type: 'textbook', citation: 'Washabau RJ, Day MJ. Canine and Feline Gastroenterology. Elsevier, 2013.', relevance: '犬貓消化系統生理與疾病教材' },
    { type: 'textbook', citation: 'Reece WO. Dukes\' Physiology of Domestic Animals, 13th ed. Wiley-Blackwell, 2015.', relevance: '動物消化生理基礎教材' },
    { type: 'journal', citation: 'Suchodolski JS. "Intestinal microbiota of dogs and cats: a bigger world than we thought." Vet Clin North Am Small Anim Pract. 2011;41(2):261-272.', relevance: '犬貓腸道微生物群回顧' },
    { type: 'guideline', citation: 'Washabau RJ, Day MJ, Willard MD, et al. "Endoscopic, biopsy, and histopathologic guidelines for the evaluation of gastrointestinal inflammation in companion animals." J Vet Intern Med. 2010;24(1):10-26.', relevance: 'GI 炎症評估指引' },
  ],
  is_current: true,
  created_at: now,
};

/** 內分泌生理學 — L1 概念型 */
const contentEndocrinePhysiology: NodeContent = {
  id: 'CONTENT-IM-L1-004',
  node_id: 'IM-L1-004',
  version: 1,
  summary: '內分泌生理學研究荷爾蒙的合成、分泌、運輸、作用機轉與回饋調節。下丘腦-腦下垂體軸（HPA、HPT、HPG）為核心調控架構。負回饋機制維持荷爾蒙恆定，其失調是內分泌疾病的共同病理基礎。',
  learning_objectives: [
    '描述下丘腦-腦下垂體-標靶腺體軸的基本架構與負回饋原理',
    '區分蛋白質/胜肽類荷爾蒙與類固醇荷爾蒙的合成、運輸與作用機轉差異',
    '說明 HPA 軸（下丘腦-腦下垂體-腎上腺軸）的調控與 Cushing/Addison 的病理基礎',
    '說明 HPT 軸（甲狀腺軸）的調控與甲亢/甲低的病理基礎',
    '解釋胰島素與升糖素的血糖調控機轉',
  ],
  key_points: [
    '荷爾蒙分類：蛋白質/胜肽類（insulin, ACTH — 水溶性、表面受體）vs 類固醇（cortisol, aldosterone — 脂溶性、核內受體）vs 胺類（T4/T3, catecholamines）',
    'HPA 軸：CRH → ACTH → Cortisol → 負回饋抑制 CRH/ACTH。過度活化=Cushing，功能不足=Addison',
    'HPT 軸：TRH → TSH → T4/T3 → 負回饋抑制 TRH/TSH。T4 過多=甲亢，T4 不足=甲低',
    '胰島素：β-cell 分泌，降血糖（促進 glucose uptake、糖原合成、脂肪合成）。缺乏/阻抗=糖尿病',
    '升糖素（Glucagon）：α-cell 分泌，升血糖（促進糖質新生、肝糖分解）',
    '負回饋核心概念：目標荷爾蒙升高 → 抑制上位中樞分泌 → 維持恆定。所有動態功能試驗（LDDST、ACTH stim、TSH）都基於此原理',
    'Aldosterone 調控獨立於 ACTH（由 RAAS 和 K+ 調控）——這就是為什麼繼發性 Addison（ACTH 缺乏）通常電解質正常',
  ],
  body: `# 內分泌生理學

## 一、核心內分泌機轉 (Core Endocrine Physiology)

### 荷爾蒙分類與作用機轉

**蛋白質/胜肽類荷爾蒙**：例 Insulin, ACTH, TSH, GH, ADH——水溶性，作用於細胞表面受體→第二信使系統（cAMP, IP3/DAG），作用迅速（秒至分鐘）

**類固醇荷爾蒙**：例 Cortisol, Aldosterone, Estrogen——膽固醇衍生，脂溶性，需結合蛋白運輸（CBG, SHBG），穿透細胞膜→核內受體→基因轉錄調控，作用較慢（小時至天）

**胺類荷爾蒙**：T4/T3 為胺基酸衍生但行為類似類固醇（核內受體）；Catecholamines 為胺基酸衍生，行為類似蛋白質（表面受體）

### 下丘腦-腦下垂體軸

**HPA 軸（Cushing's / Addison's 的基礎）**
- 下丘腦 CRH → 腦下垂體前葉 ACTH → 腎上腺皮質 Cortisol
- Cortisol 負回饋 → 抑制 CRH 和 ACTH
- LDDST 原理：外源性 Dexamethasone 應抑制 ACTH → Cortisol 下降

**HPT 軸（甲亢 / 甲低的基礎）**
- 下丘腦 TRH → 腦下垂體前葉 TSH → 甲狀腺 T4/T3
- T4/T3 負回饋 → 抑制 TRH 和 TSH

**胰島素-升糖素軸**
- 進食 → 血糖↑ → β-cell Insulin → glucose uptake↑ → 血糖↓
- 空腹 → 血糖↓ → α-cell Glucagon → 肝糖分解 + 糖質新生 → 血糖↑

### 動態功能試驗的生理基礎

| 試驗 | 原理 | 診斷目標 |
|------|------|---------|
| LDDST | Dexa 抑制 ACTH → Cortisol 應下降 | Cushing 篩檢 |
| ACTH stim | 外源 ACTH 刺激腎上腺 → Cortisol 應上升 | Addison 確診 / Trilostane 監測 |
| TSH stimulation | 外源 TSH → T4 應上升 | 甲低確診（較少用） |

### 腎上腺皮質三區分泌

| 區域 | 荷爾蒙 | 調控 | 缺乏的結果 |
|------|--------|------|-----------|
| Zona glomerulosa | Aldosterone | RAAS, K+ | 低 Na/高 K（Addison 典型） |
| Zona fasciculata | Cortisol | ACTH | 虛弱、低血糖、無法應對壓力 |
| Zona reticularis | 性激素前驅物 | ACTH | 臨床影響較小 |

## 六、人醫借鑑 (Translational Insights)

- 人醫 **midnight salivary cortisol** 和 **24h urinary free cortisol** 為 Cushing 篩檢常規——獸醫使用 UCCR 和 LDDST 作為對應
- 人醫 **continuous glucose monitoring (CGM)** 改變了糖尿病管理——獸醫 CGM (FreeStyle Libre) 開始被應用於犬貓
- 人醫的 **insulin pump** 和 **closed-loop system** (artificial pancreas) 尚無獸醫對應物
- 人醫 **GLP-1 receptor agonist** (semaglutide) 革命性治療 Type 2 DM 和肥胖——獸醫貓 DM 的潛在應用

## 七、臨床爭議與知識空缺 (Controversies & Knowledge Gaps)

| 爭議主題 | 目前立場 | 證據等級 | 研究方向 |
|---------|---------|---------|---------|
| 犬 TSH 可靠性 | 敏感度僅 ~75% | Level II | 更佳的犬 TSH assay |
| 貓 TSH 測量 | 尚無商品化貓特異性 TSH assay | Level IV | 貓 TSH assay 開發 |
| ACTH 安定性 | 樣本處理不當易假性降低 | Level II | 更穩定的替代標記物 |
| 犬貓胰島素抵抗標準化測量 | 無標準方法 | Level III | HOMA-IR 等指標在獸醫的驗證 |`,
  clinical_pearl: '理解負回饋機制是判讀所有內分泌檢驗的鑰匙。例如：(1) T4 低 + TSH 高 = 原發性甲低（甲狀腺壞了，腦下垂體拼命補償）；(2) T4 低 + TSH 正常 = 可能是 euthyroid sick syndrome（非甲狀腺因素壓抑了整個軸）；(3) Cortisol 高 + ACTH 高 = PDH Cushing（腦下垂體腺瘤，負回饋失效）；(4) Cortisol 高 + ACTH 低 = ADH Cushing（腎上腺腫瘤自主分泌，正常負回饋壓抑了 ACTH）。這套邏輯一旦掌握，內分泌疾病的診斷就不再困難。',
  common_mistakes: [
    '忘記 Aldosterone 主要由 RAAS 和 K+ 調控而非 ACTH——這解釋了繼發性 Addison 電解質通常正常',
    '不理解動態功能試驗的生理基礎就死記結果判讀',
    '混淆類固醇荷爾蒙和蛋白質荷爾蒙的作用機轉（影響對藥物作用時間的理解）',
    '忽略「游離態」才有活性的概念——低白蛋白時游離 T4 和游離 cortisol 比例增加',
  ],
  disease_data: null,
  diagnostic_data: null,
  procedure_data: null,
  visual_placeholders: [
    { position: 'HPA 軸段落後', type: 'flowchart', description: 'HPA 軸調控與 Cushing/Addison 的病理基礎圖' },
    { position: '動態功能試驗表後', type: 'comparison_table', description: '動態功能試驗原理與判讀比較表' },
  ],
  interactive_placeholders: [],
  drug_api_links: [],
  references: [
    { type: 'textbook', citation: 'Feldman EC et al. Canine and Feline Endocrinology, 4th ed. Elsevier, 2015.', relevance: '犬貓內分泌學權威教科書' },
    { type: 'textbook', citation: 'Reece WO. Dukes\' Physiology of Domestic Animals, 13th ed. Wiley-Blackwell, 2015. Chapters on Endocrine System.', relevance: '動物內分泌生理基礎教材' },
    { type: 'journal', citation: 'Behrend EN et al. "Diagnosis of Spontaneous Canine Hyperadrenocorticism: 2012 ACVIM Consensus Statement." J Vet Intern Med. 2013;27(6):1292-1304.', relevance: 'HPA 軸動態試驗的臨床應用' },
    { type: 'guideline', citation: 'Behrend E, Holford A, Lathan P, et al. "2018 AAHA Diabetes Management Guidelines for Dogs and Cats." J Am Anim Hosp Assoc. 2018;54(1):1-21.', relevance: '犬貓糖尿病管理指引' },
  ],
  is_current: true,
  created_at: now,
};

/** 腎損傷機轉 — L2 機轉型 */
const contentRenalInjury: NodeContent = {
  id: 'CONTENT-IM-L2-001',
  node_id: 'IM-L2-001',
  version: 1,
  summary: '腎損傷機轉涵蓋急性與慢性腎臟損傷的病理生理。急性腎損傷（AKI）以腎小管壞死和缺血-再灌流損傷為核心，慢性腎損傷以腎元漸進性喪失、腎小管間質纖維化和 RAAS 過度活化的惡性循環為核心。理解這些機轉是制定腎臟保護策略（ACEI/ARB、飲食管理）的理論基礎。',
  learning_objectives: [
    '描述急性腎小管壞死（ATN）的缺血性與腎毒性機轉',
    '解釋缺血-再灌流損傷中活性氧（ROS）和發炎反應的角色',
    '說明慢性腎病中腎元喪失 → 代償性肥大 → 進一步損傷的惡性循環',
    '解釋 RAAS 過度活化如何加速 CKD 進展及 ACEI/ARB 的保護機轉',
    '描述腎小管間質纖維化的機轉與促纖維化因子（TGF-β）的角色',
  ],
  key_points: [
    'AKI 三大病因分類：腎前性（低灌流）→ 腎性（實質損傷）→ 腎後性（阻塞）',
    '缺血性 ATN：腎小管上皮細胞對缺氧極度敏感（近曲小管 S3 段和 Henle 上行粗支為最脆弱區域）',
    '腎毒性損傷：aminoglycosides（近曲小管蓄積）、NSAIDs（前列腺素抑制→腎血流減少）、ethylene glycol（草酸鈣結晶沉積）、lily（貓特異性腎毒性）',
    'CKD 惡性循環：腎元喪失 → 殘餘腎元代償性高灌流/高壓 → 腎小球硬化 → 更多腎元喪失',
    'RAAS 在 CKD 中的角色：Angiotensin II → 出球小動脈收縮 → 腎小球高壓 → 蛋白尿 → 腎小管毒性 → 纖維化',
    '腎小管間質纖維化：TGF-β 為核心促纖維化因子 → 纖維母細胞活化 → 膠原蛋白沉積 → 腎功能不可逆喪失',
    '蛋白尿本身具有腎毒性：過濾的蛋白質被近曲小管再吸收 → 溶酶體過載 → 發炎因子釋放 → 間質纖維化',
  ],
  body: `# 腎損傷機轉

## 一、病理機轉 (Pathophysiology)

### 急性腎損傷（AKI）

**缺血性 ATN 機轉鏈**：
腎血流減少（休克、脫水、麻醉低血壓）→腎小管上皮細胞缺氧（S3 段和 mTAL 最脆弱）→ATP 耗竭→Na-K-ATPase 失能→細胞腫脹→細胞骨架崩解→刷狀緣脫落→管腔阻塞→再灌流損傷：血流恢復→ROS 爆發 + 嗜中性球浸潤→進一步損傷

**腎毒性損傷**

| 毒物 | 機轉 | 靶標 |
|------|------|------|
| Aminoglycosides | 近曲小管細胞內蓄積 → 溶酶體損傷 | PCT |
| NSAIDs | 前列腺素抑制 → 入球小動脈收縮 | 腎小球灌流 |
| Ethylene glycol | 代謝物草酸 → CaOx 結晶沉積 | 腎小管 |
| Lily（貓） | 未知毒素 → 近曲小管壞死 | PCT（貓特異性） |
| Cisplatin | DNA 交聯 → 細胞凋亡 | PCT |

### 慢性腎損傷

**腎元喪失的惡性循環**：起始損傷→部分腎元喪失→殘餘腎元代償性肥大→單一腎元 GFR 增加 (hyperfiltration)→腎小球毛細管壓力增加→GBM 損傷→蛋白尿→腎小球硬化→更多腎元喪失→循環加速

**RAAS 在 CKD 進展中的角色**：
- 腎元減少→腎臟灌流不足感知→Renin 釋放
- Angiotensin II：出球小動脈收縮 > 入球→腎小球高壓
- Angiotensin II：直接促纖維化（TGF-β upregulation）
- **ACEI/ARB 的腎保護機轉**：降低腎小球內壓 + 減少蛋白尿 + 抗纖維化

**腎小管間質纖維化**：蛋白尿→近曲小管過載→NF-κB 活化→趨化因子→巨噬細胞浸潤→TGF-β→myofibroblast 轉化→膠原蛋白 I/III 沉積→間質纖維化→腎小管萎縮→微血管稀少化→缺氧→纖維化加速

## 六、人醫借鑑 (Translational Insights)

- 人醫 **KDIGO AKI 分期** (Stage 1-3) 基於 Creatinine 變化和尿量——獸醫 IRIS AKI 分期借鑑此框架
- 人醫 **AKI-to-CKD transition** 概念——AKI 後腎臟可能表面恢復但留下纖維化「疤痕」→長期發展為 CKD。獸醫應長期追蹤 AKI 存活者
- 人醫腎毒性藥物的 **therapeutic drug monitoring (TDM)** 策略（aminoglycoside 用藥後谷值監測）可直接應用於獸醫
- 人醫 **renal replacement therapy (RRT)** 技術進步（CRRT）在獸醫有限度應用

## 七、臨床爭議與知識空缺 (Controversies & Knowledge Gaps)

| 爭議主題 | 目前立場 | 證據等級 | 研究方向 |
|---------|---------|---------|---------|
| AKI 生物標記 (NGAL, KIM-1) | 研究階段，臨床化初期 | Level III | 獸醫特異性 cutoff 驗證 |
| AKI 輸液最佳方案 | 矯正脫水為首要 | Level II | 最佳輸液速率與晶體液選擇 |
| NSAIDs 在健康動物的腎臟安全性 | 短期使用相對安全 | Level II | 長期使用的累積腎損傷？ |
| 幹細胞治療 AKI | 初步研究有希望 | Level IV | 最佳時機/劑量/途徑 |`,
  clinical_pearl: '理解「蛋白尿本身就有腎毒性」是 CKD 管理中最重要的概念之一。過濾的蛋白質被近曲小管重新吸收時會啟動一連串發炎反應，促進腎小管間質纖維化。這就是為什麼 IRIS 分期特別強調蛋白尿亞分期（UPC），而且即使 Creatinine 穩定，UPC 持續升高也是不良預後指標。Benazepril 和 Telmisartan 之所以能延緩 CKD 進展，不僅因為降低腎小球壓力，更因為減少蛋白尿而減輕了近曲小管的毒性負擔。',
  common_mistakes: [
    '將 AKI 和 CKD 視為完全不同的實體——AKI 可以轉變為 CKD（AKI-to-CKD transition）',
    '忽略 NSAIDs 的腎毒性（抑制前列腺素 → 入球小動脈收縮 → 腎血流減少，尤其在脫水或低血壓時）',
    '不理解蛋白尿的腎毒性——僅將其視為診斷指標而非治療靶標',
    '忘記缺血-再灌流損傷的概念——血流恢復後的 ROS 爆發可能比原始缺血造成更大損傷',
  ],
  disease_data: null,
  diagnostic_data: null,
  procedure_data: null,
  visual_placeholders: [
    { position: '腎元喪失惡性循環段落後', type: 'flowchart', description: 'CKD 惡性循環與 RAAS 角色圖' },
    { position: '腎毒性損傷表後', type: 'comparison_table', description: '常見腎毒物與損傷機轉比較表' },
  ],
  interactive_placeholders: [],
  drug_api_links: ['Benazepril', 'Telmisartan'],
  references: [
    { type: 'journal', citation: 'Ross L. "Acute kidney injury in dogs and cats." Vet Clin North Am Small Anim Pract. 2011;41(1):1-14.', relevance: 'AKI 病理生理回顧' },
    { type: 'journal', citation: 'Brown SA. "Oxidative stress and chronic kidney disease." Vet Clin North Am Small Anim Pract. 2008;38(1):157-166.', relevance: 'CKD 氧化壓力機轉' },
    { type: 'textbook', citation: 'Ettinger SJ, Feldman EC. Textbook of Veterinary Internal Medicine, 8th ed. Elsevier, 2017.', relevance: '腎損傷病理生理教材' },
    { type: 'guideline', citation: 'IRIS (International Renal Interest Society). "IRIS Staging of CKD (Modified 2023)." iris-kidney.com.', relevance: 'CKD 分期與治療指引' },
  ],
  is_current: true,
  created_at: now,
};

/** 自體免疫機轉 — L2 機轉型 */
const contentAutoimmuneMechanism: NodeContent = {
  id: 'CONTENT-IM-L2-002',
  node_id: 'IM-L2-002',
  version: 1,
  summary: '自體免疫疾病源於免疫耐受性崩解，導致免疫系統攻擊自身組織。機轉涉及遺傳易感性、環境觸發因子、分子模仿、表位擴展等。在犬貓最重要的自體免疫機轉為 Type II（抗體介導細胞破壞，如 IMHA/ITP）和 Type III（免疫複合體沉積，如腎小球腎炎）超敏反應。',
  learning_objectives: [
    '說明免疫耐受性崩解的主要機轉（分子模仿、表位擴展、旁觀者效應、Treg 功能缺陷）',
    '解釋 Type II 超敏反應在 IMHA 和 ITP 中的具體病理機轉',
    '描述免疫複合體疾病（Type III）的形成與組織沉積機轉',
    '說明遺傳易感性（MHC/DLA 多型性）與環境觸發因子的交互作用',
    '解釋免疫抑制藥物（Prednisolone、Mycophenolate、Cyclosporine）的分子作用機轉',
  ],
  key_points: [
    '免疫耐受崩解的四大機轉：分子模仿（molecular mimicry）、表位擴展（epitope spreading）、旁觀者活化（bystander activation）、Treg 功能缺陷',
    '分子模仿：病原抗原與自身抗原結構相似 → 抗病原免疫反應交叉攻擊自身組織（如感染觸發 IMHA）',
    '表位擴展：初始免疫反應損傷組織 → 暴露新的自身抗原 → 免疫反應擴大到更多自身標靶',
    'Type II 機轉（IMHA）：自體抗體（IgG/IgM）結合紅血球 → Fc receptor 吞噬（血管外溶血）或補體 MAC（血管內溶血）',
    'Type III 機轉：Ab-Ag 免疫複合體沉積在血管壁/腎小球 → 補體活化 → 嗜中性球浸潤 → 組織損傷',
    '遺傳易感性：犬 DLA（Dog Leukocyte Antigen）多型性影響抗原呈現，某些 DLA 單倍型與自體免疫疾病風險相關',
    '免疫抑制藥物靶點：Prednisolone（NF-κB 抑制、T 細胞凋亡）、Mycophenolate（IMPDH 抑制→淋巴球增殖抑制）、Cyclosporine（Calcineurin 抑制→IL-2 轉錄抑制）',
  ],
  body: `# 自體免疫機轉

## 一、病理機轉 (Pathophysiology)

### 免疫耐受性崩解

**分子模仿（Molecular Mimicry）**：病原抗原表位與自身抗原結構相似→抗病原免疫反應交叉辨識自身組織→範例：Babesia 感染→紅血球表面抗原修飾→觸發抗紅血球抗體→繼發性 IMHA

**表位擴展（Epitope Spreading）**：初始免疫反應破壞組織→細胞內抗原釋放→新暴露的自身抗原被樹突細胞捕獲呈現→T/B 細胞反應擴展→疾病隨時間加重

**Treg 功能缺陷**：Treg（CD4+ CD25+ FoxP3+）維持周邊耐受→數量減少或功能異常→自身反應性 T 細胞逃逸→某些犬品種（Cocker Spaniel）的 Treg 功能缺陷與 IMHA 風險相關

### Type II 超敏反應（IMHA/ITP 核心機轉）

**血管外溶血（主要路徑）**：IgG 結合紅血球表面抗原→脾臟/肝臟巨噬細胞 Fcγ receptor 辨識→完全或部分吞噬（形成球形紅血球）→[藥物:Prednisolone] 機轉之一：降低巨噬細胞 Fcγ receptor 表達

**血管內溶血（更急性/危險）**：IgM 結合紅血球→高效活化補體 classical pathway→C3b opsonization + C5b-9 MAC→紅血球直接裂解→Hemoglobinemia→hemoglobinuria

**高凝血狀態**：溶血→phosphatidylserine 暴露→凝血因子活化；組織因子釋放→外在途徑活化；內皮損傷→促凝表面→**血栓栓塞（肺血栓為最常見死因）**

### 免疫抑制藥物的分子機轉

| 藥物 | 靶點 | 機轉 | 主要效應 |
|------|------|------|---------|
| [藥物:Prednisolone] | NF-κB, GR | 抑制促炎基因轉錄、誘導 T 細胞凋亡 | 廣效免疫抑制 |
| [藥物:Mycophenolate] | IMPDH | 抑制嘌呤從頭合成 → 淋巴球特異性增殖抑制 | B/T 細胞抑制 |
| [藥物:Cyclosporine] | Calcineurin | 抑制 NFAT → IL-2 轉錄抑制 | T 細胞抑制 |
| [藥物:Azathioprine] | Purine synthesis | 干擾 DNA 合成 → 淋巴球增殖抑制 | T 細胞抑制為主 |
| hIVIG | Fc receptors | 競爭性阻斷巨噬細胞 Fcγ receptor | 急性減少吞噬 |

## 六、人醫借鑑 (Translational Insights)

- 人醫 **rituximab (anti-CD20)** 治療難治性 warm AIHA 已成為二線標準——獸醫犬用抗 CD20 抗體處於早期研發
- 人醫 **complement inhibitors** (eculizumab: anti-C5) 用於 PNH——獸醫尚無對應藥物但補體途徑為潛在靶標
- 人醫的 **direct oral anticoagulants (DOACs)** 如 rivaroxaban 正取代 warfarin——獸醫犬藥動學研究中
- 人醫自體免疫疾病的 **precision immunosuppression**（依免疫表型選藥）概念可借鑑

## 七、臨床爭議與知識空缺 (Controversies & Knowledge Gaps)

| 爭議主題 | 目前立場 | 證據等級 | 研究方向 |
|---------|---------|---------|---------|
| IMHA 最佳初始免疫抑制方案 | Pred ± 第二藥物 | Level II-III | 單藥 vs 雙藥 RCT |
| 犬用 anti-CD20 開發 | 研究階段 | Level IV | 犬嵌合/人源化抗體 |
| 自體免疫疾病的遺傳預測 | DLA typing 可識別風險 | Level III | 商品化基因風險檢測 |
| 腸道微生物群與自體免疫 | 相關性已確認 | Level III | FMT 調控自體免疫？ |`,
  clinical_pearl: '在 IMHA 治療中，Prednisolone 的作用機轉不僅僅是「免疫抑制」。它至少有三重效應：(1) 降低巨噬細胞表面 Fcγ receptor 表達 → 減少 IgG-opsonized 紅血球的吞噬（最快速的效應，24-48 小時）；(2) 抑制 T 細胞功能 → 減少對 B 細胞的 help → 間接減少自體抗體產生；(3) 抑制補體活化路徑。這也解釋了為什麼 Prednisolone 在 IMHA 中的效果比在其他自體免疫疾病中更為迅速。',
  common_mistakes: [
    '將自體免疫疾病簡化為「免疫系統過強」——實際上是免疫調節失衡（Treg 功能缺陷 + effector 過度活化）',
    '不理解分子模仿解釋了為什麼感染可以觸發自體免疫（Babesia → IMHA）',
    '忽略表位擴展現象——這解釋了為什麼自體免疫疾病會隨時間擴大攻擊範圍',
    '不理解不同免疫抑制劑的作用靶點差異——合理的聯合治療需要不同靶點的藥物',
  ],
  disease_data: null,
  diagnostic_data: null,
  procedure_data: null,
  visual_placeholders: [
    { position: 'Type II 超敏反應段落後', type: 'flowchart', description: 'IMHA 血管外 vs 血管內溶血機轉比較圖' },
    { position: '免疫抑制藥物表後', type: 'flowchart', description: '免疫抑制藥物作用靶點與 T/B 細胞活化路徑圖' },
  ],
  interactive_placeholders: [],
  drug_api_links: ['Prednisolone', 'Mycophenolate', 'Cyclosporine', 'Azathioprine'],
  references: [
    { type: 'journal', citation: 'Garden OA et al. "ACVIM consensus statement on the diagnosis of immune-mediated hemolytic anemia in dogs and cats." J Vet Intern Med. 2019;33(2):313-334.', relevance: 'IMHA 免疫機轉與診斷共識' },
    { type: 'textbook', citation: 'Tizard IR. Veterinary Immunology: An Introduction, 10th ed. Elsevier, 2018. Chapters on Autoimmunity.', relevance: '獸醫自體免疫學教材' },
    { type: 'journal', citation: 'Swann JW, Skelly BJ. "Systematic review of evidence relating to the treatment of immune-mediated hemolytic anemia in dogs." J Vet Intern Med. 2013;27(1):1-9.', relevance: '免疫抑制治療機轉與證據' },
    { type: 'guideline', citation: 'Garden OA, Kidd L, Mexas AM, et al. "ACVIM consensus statement on the diagnosis of immune-mediated hemolytic anemia in dogs and cats." J Vet Intern Med. 2019;33(2):313-334.', relevance: 'IMHA 診斷共識' },
  ],
  is_current: true,
  created_at: now,
};

/** 腸道發炎機轉 — L2 機轉型 */
const contentGIInflammation: NodeContent = {
  id: 'CONTENT-IM-L2-003',
  node_id: 'IM-L2-003',
  version: 1,
  summary: '腸道發炎機轉是理解慢性腸病（CE/IBD）、蛋白質流失性腸病（PLE）和食物過敏的基礎。核心概念為腸道屏障功能崩解、腸道微生物群失調（dysbiosis）與黏膜免疫失衡三者的交互作用。遺傳易感性決定個體對環境觸發因子的反應。',
  learning_objectives: [
    '描述腸道屏障功能崩解在 CE/IBD 發生中的核心角色',
    '解釋腸道微生物群失調（dysbiosis）與腸道發炎的因果關係',
    '說明黏膜免疫系統（GALT）在腸道恆定與發炎中的雙重角色',
    '描述淋巴管擴張（lymphangiectasia）導致蛋白質流失的機轉',
    '說明食物過敏（food allergy）vs 食物不耐受（food intolerance）的免疫機轉差異',
  ],
  key_points: [
    '腸道發炎核心三角：屏障崩解 + dysbiosis + 免疫失衡——三者互為因果，形成惡性循環',
    '屏障崩解：tight junction 蛋白（claudin、occludin）表達下降 → 通透性增加 → 腸腔抗原穿透',
    'Dysbiosis 特徵：物種多樣性下降、Firmicutes/Bacteroidetes 比例改變、潛在致病菌增加、SCFA 產生減少',
    'GALT（Gut-Associated Lymphoid Tissue）：Peyer patch、固有層淋巴球、IgA 分泌 → 正常時維持口服耐受，異常時驅動發炎',
    '口服耐受（Oral Tolerance）：正常腸道對食物抗原和共生菌產生免疫不反應狀態。耐受崩解 → CE/IBD',
    '淋巴管擴張機轉：淋巴引流受阻 → 淋巴管擴張破裂 → 富含蛋白的淋巴液滲入腸腔 → PLE',
    '食物過敏 vs 食物不耐受：過敏=免疫介導（IgE 或 non-IgE T 細胞介導）；不耐受=非免疫機轉（酵素缺乏、藥理反應）',
  ],
  body: `# 腸道發炎機轉

## 一、病理機轉 (Pathophysiology)

### 核心病理三角：屏障崩解 + Dysbiosis + 免疫失衡

**腸道屏障功能崩解**：
- Tight Junction 異常：正常 claudin-1/-3/-4/-7 和 occludin 維持細胞間密封→CE/IBD 中促炎細胞因子（TNF-α, IFN-γ）→tight junction 蛋白表達下降→通透性增加→腸腔抗原穿透
- 黏液層損傷：Goblet cell 減少→黏液層變薄→細菌直接接觸上皮→TLR 活化→發炎

**腸道微生物群失調（Dysbiosis）**：
- 物種多樣性下降（Shannon diversity index↓）
- Clostridium hiranonis 減少（膽鹽代謝關鍵菌）→初級膽鹽累積
- Faecalibacterium prausnitzii 減少（主要 butyrate 生產菌）
- E. coli 和 C. perfringens 增加
- SCFA（尤其 butyrate）產生減少→結腸上皮能量不足
- **Dysbiosis Index (DI)**：Texas A&M 開發，DI > 2 = dysbiosis

**黏膜免疫失衡**：
- 正常：口服耐受——食物抗原由腸道 DC 捕獲→優先誘導 Treg 和 IgA 反應
- 異常：口服耐受崩解→Th1/Th17 過度活化→IL-17、TNF-α、IFN-γ→慢性黏膜發炎

### 淋巴管擴張 → PLE
- **原發性**：先天性淋巴管發育異常（Yorkshire Terrier、Norwegian Lundehund）
- **繼發性**：腸壁慢性發炎→淋巴引流受阻→淋巴管擴張破裂→蛋白質流失
- 右心衰竭→胸管壓力增高→淋巴回流受阻

## 六、人醫借鑑 (Translational Insights)

- 人醫 **Crohn's disease** 的 NOD2 突變概念在犬 CE 有平行發現（犬 TLR/NOD 變異與 CE 風險相關）
- 人醫 **anti-TNF-α biologics** (infliximab, adalimumab) 為 IBD 治療革命——獸醫犬用 anti-TNF 抗體尚無
- 人醫 **fecal microbiota transplantation (FMT)** 對 C. difficile 療效卓越——獸醫 FMT 用於 CE 初步有效
- 人醫 **therapeutic drug monitoring for thiopurines** (6-thioguanine nucleotides) 可能借鑑至獸醫 Azathioprine 監測

## 七、臨床爭議與知識空缺 (Controversies & Knowledge Gaps)

| 爭議主題 | 目前立場 | 證據等級 | 研究方向 |
|---------|---------|---------|---------|
| Dysbiosis 是 CE 的因還是果 | 互為因果（雙向因果） | Level II | 無菌動物模型研究 |
| 抗生素在 CE 的長期影響 | 可能加重 dysbiosis | Level II | 抗生素 stewardship |
| FMT 標準化方案 | 無共識 | Level III | 供體選擇/劑量/頻率/途徑 |
| 食物不耐受 vs 食物過敏 | 鑑別困難 | Level III | 更好的體外測試方法 |`,
  clinical_pearl: 'Dysbiosis Index（DI）是評估腸道微生物群健康的實用工具。在 CE 的治療監測中，DI 的改善往往伴隨臨床改善。值得注意的是，抗生素（如 Metronidazole、Tylosin）雖然可以短期改善 CE 症狀，但長期使用反而可能加重 dysbiosis。這也是現代觀點越來越傾向減少 CE 中抗生素使用的原因。相反，糞便微生物群移植（FMT）作為恢復微生物群多樣性的方式，在犬 CE 中的初步研究顯示有希望的結果。',
  common_mistakes: [
    '將 dysbiosis 視為 CE 的「原因」而非「結果和共同驅動因子」——兩者互為因果',
    '忽略黏液層在腸道屏障中的重要性——不僅是物理屏障，還是免疫調節介面',
    '混淆食物過敏和食物不耐受——前者有免疫機轉，後者無',
    '不理解口服耐受崩解的概念——這是所有慢性腸病的共同病理起點',
  ],
  disease_data: null,
  diagnostic_data: null,
  procedure_data: null,
  visual_placeholders: [
    { position: '腸道屏障段落後', type: 'flowchart', description: '腸道發炎惡性循環：屏障崩解 ↔ dysbiosis ↔ 免疫失衡' },
    { position: 'Dysbiosis 段落後', type: 'comparison_table', description: '正常 vs dysbiosis 腸道微生物群比較表' },
  ],
  interactive_placeholders: [],
  drug_api_links: [],
  references: [
    { type: 'journal', citation: 'Suchodolski JS. "Diagnosis and interpretation of intestinal dysbiosis in dogs and cats." Vet J. 2016;215:30-37.', relevance: '腸道微生物群失調診斷與判讀' },
    { type: 'journal', citation: 'Dandrieux JRS. "Inflammatory bowel disease versus chronic enteropathy in dogs." J Small Anim Pract. 2016;57(11):589-599.', relevance: '腸道發炎機轉與 CE 分類' },
    { type: 'textbook', citation: 'Washabau RJ, Day MJ. Canine and Feline Gastroenterology. Elsevier, 2013.', relevance: '消化系統病理生理教材' },
    { type: 'guideline', citation: 'Washabau RJ, Day MJ, Willard MD, et al. "Endoscopic, biopsy, and histopathologic guidelines for the evaluation of gastrointestinal inflammation in companion animals." J Vet Intern Med. 2010;24(1):10-26.', relevance: 'GI 炎症評估指引' },
  ],
  is_current: true,
  created_at: now,
};

/** 肝臟損傷與再生 — L2 機轉型 */
const contentHepaticInjury: NodeContent = {
  id: 'CONTENT-IM-L2-004',
  node_id: 'IM-L2-004',
  version: 1,
  summary: '肝臟損傷機轉涵蓋肝細胞壞死、凋亡、膽汁鬱積與纖維化等病理過程。肝臟具有強大的再生能力，但持續損傷超過再生能力時將進展為纖維化和肝硬化。犬貓特殊考量包括貓的獨特脂質代謝（FHL）、銅蓄積性肝病（特定犬種）、以及物種間藥物代謝差異。',
  learning_objectives: [
    '描述肝細胞損傷的主要機轉（氧化壓力、線粒體損傷、膽汁酸毒性）',
    '解釋肝臟纖維化的進程與星狀細胞（stellate cell）活化的角色',
    '說明膽汁鬱積的形成機轉與臨床後果',
    '描述肝臟再生的細胞生物學與調控因子',
    '說明貓肝臟脂肪變性的獨特代謝機轉',
  ],
  key_points: [
    '肝細胞損傷兩大途徑：壞死（necrosis, 被動性、發炎性）vs 凋亡（apoptosis, 程序性、非發炎性）',
    '氧化壓力：CYP450 代謝產生 ROS → 脂質過氧化 → 細胞膜損傷 → 肝細胞壞死（藥物性肝損傷常見機轉）',
    '肝臟纖維化關鍵：Hepatic Stellate Cell（HSC）從靜止態活化為 myofibroblast → 膠原蛋白 I/III 沉積',
    '膽汁鬱積：膽汁流受阻 → 膽汁酸在肝細胞內蓄積 → 直接細胞毒性（疏水性膽汁酸）→ 凋亡',
    '肝臟再生：肝細胞可從 G0 進入細胞週期；HGF 和 EGF 為主要促再生因子；正常可再生達 70% 喪失量',
    '貓 FHL 獨特機轉：carnitine/arginine 缺乏 → 脂肪酸 β-氧化不足 + VLDL 合成不足 → TG 蓄積',
    '犬銅蓄積：COMMD1 基因突變（Bedlington Terrier）→ 銅排泄障礙 → 肝細胞銅過載 → 氧化損傷 → 慢性肝炎',
  ],
  body: `# 肝臟損傷與再生

## 一、病理機轉 (Pathophysiology)

### 肝細胞損傷機轉

**氧化壓力與 ROS**：CYP450 藥物代謝→活性代謝物 + ROS→Glutathione (GSH) 耗竭→脂質過氧化→細胞膜完整性喪失→壞死。範例：Acetaminophen 毒性（貓 glucuronidation 能力低→NAPQI 蓄積→GSH 耗竭）

**線粒體損傷**：mPTP 開啟→線粒體膜電位喪失→Cytochrome c 釋放→Caspase 活化→凋亡；ATP 完全耗竭→壞死

**膽汁酸毒性**：膽汁鬱積→疏水性膽汁酸（DCA、CDCA）在肝細胞內蓄積→直接損傷細胞膜 + 誘導線粒體凋亡路徑。[藥物:Ursodiol] (UDCA) = 親水性膽汁酸→保護機轉

### 肝臟纖維化

**Hepatic Stellate Cell (HSC) 活化**：肝損傷→Kupffer cell 活化→TGF-β/PDGF 釋放→HSC 從靜止態（Vitamin A 儲存）→活化態（myofibroblast）→膠原蛋白 I/III 沉積→Disse 間隙纖維化→竇狀隙毛細管化→持續→肝硬化→門脈高壓→腹水

**可逆性**：移除損傷因子→活化 HSC 凋亡→MMP 降解膠原。早期纖維化可逆；晚期肝硬化多不可逆。

### 肝臟再生
- 正常肝細胞處於 G0 靜止期（年周轉率 < 1%）
- 肝切除或損傷→HGF、EGF、IL-6 驅動肝細胞進入 S 期→可再生達 70% 喪失量
- 犬肝再生能力佳；貓較差（尤其 FHL 合併營養不良時）

### 物種特異性肝損傷
- **貓 FHL**：必需胺基酸依賴性高 + VLDL 合成能力不足→厭食→FFA 湧入→TG 蓄積
- **犬銅蓄積**：COMMD1 突變（Bedlington Terrier）→銅排泄障礙→Fenton 反應→氧化損傷

## 六、人醫借鑑 (Translational Insights)

- 人醫 **NAFLD/NASH** 的全球流行推動了肝纖維化非侵入性評估工具的發展（FibroScan, NAFLD fibrosis score）——獸醫缺乏對應工具
- 人醫 **N-acetylcysteine (NAC)** 治療 Acetaminophen 中毒的金標準——直接適用於獸醫（尤其貓）
- 人醫 **Wilson's disease** (銅蓄積性肝病) 與犬銅蓄積性肝病機轉高度相似——犬為天然動物模型
- 人醫肝臟的 **non-invasive fibrosis assessment** 策略可借鑑至獸醫

## 七、臨床爭議與知識空缺 (Controversies & Knowledge Gaps)

| 爭議主題 | 目前立場 | 證據等級 | 研究方向 |
|---------|---------|---------|---------|
| SAMe 在犬貓肝病的效益 | 廣泛使用但 RCT 有限 | Level III | 犬貓特異性 RCT |
| 肝纖維化非侵入性評估 | 超音波 + 肝酶趨勢為主 | Level III | 獸醫 elastography 研究 |
| 犬銅蓄積的篩檢基因檢測 | Bedlington 有 COMMD1 | Level II | 其他品種的多基因定型 |
| 貓肝再生能力差的機轉 | 觀察到但機轉不明 | Level IV | 貓肝細胞增殖調控研究 |`,
  clinical_pearl: '犬肝酶（ALT/AST/ALP/GGT）的判讀需要理解其來源和意義。ALT 是肝細胞損傷的最敏感指標（肝細胞質內豐富），但不代表肝功能。真正反映肝功能的是合成指標（Albumin、BUN、Glucose、Cholesterol、Coagulation factors）和排泄指標（Bile acids、Bilirubin）。一隻犬可以 ALT 升高 10 倍但肝功能正常（急性肝炎早期），也可以 ALT 接近正常但肝功能嚴重受損（終末期肝硬化——因為已經沒有多少肝細胞可以「漏出」ALT 了）。',
  common_mistakes: [
    '將肝酶升高等同於肝功能下降——ALT 反映損傷程度，膽汁酸/Albumin 才反映功能',
    '忽略犬特有的 steroid-induced ALP isoenzyme（Cushing 或外源性類固醇可致 ALP 顯著升高，不代表肝臟疾病）',
    '不理解肝臟纖維化的可逆性——早期纖維化移除病因後可改善',
    '忘記貓對 Acetaminophen 極度敏感（glucuronidation 能力低下）',
  ],
  disease_data: null,
  diagnostic_data: null,
  procedure_data: null,
  visual_placeholders: [
    { position: '肝臟纖維化段落後', type: 'flowchart', description: '肝損傷 → 纖維化 → 肝硬化進程圖' },
    { position: '物種特異性段落後', type: 'comparison_table', description: '犬 vs 貓肝臟代謝差異與疾病傾向比較表' },
  ],
  interactive_placeholders: [],
  drug_api_links: ['SAMe', 'Ursodiol'],
  references: [
    { type: 'textbook', citation: 'Ettinger SJ, Feldman EC. Textbook of Veterinary Internal Medicine, 8th ed. Elsevier, 2017. Hepatobiliary chapters.', relevance: '肝臟疾病病理生理教材' },
    { type: 'journal', citation: 'Center SA. "Feline hepatic lipidosis." Vet Clin North Am Small Anim Pract. 2005;35(1):225-269.', relevance: '貓 FHL 代謝機轉' },
    { type: 'journal', citation: 'Hoffmann G. "Copper-associated liver diseases." Vet Clin North Am Small Anim Pract. 2009;39(3):489-511.', relevance: '犬銅蓄積性肝病機轉' },
    { type: 'guideline', citation: 'Webster CRL, Center SA, Cullen JM, et al. "ACVIM consensus statement on the diagnosis and treatment of chronic hepatitis in dogs." J Vet Intern Med. 2019;33(3):1173-1200.', relevance: '犬慢性肝炎診治共識' },
  ],
  is_current: true,
  created_at: now,
};

/** 酸鹼平衡障礙 — L2 機轉型 */
const contentAcidBase: NodeContent = {
  id: 'CONTENT-IM-L2-005',
  node_id: 'IM-L2-005',
  version: 1,
  summary: '酸鹼平衡障礙是內科急重症和慢性疾病中的常見問題。正常 pH 維持在 7.35-7.45，由緩衝系統、肺臟（CO2 排出）和腎臟（HCO3- 再吸收/H+ 分泌）三大機轉調控。Henderson-Hasselbalch 方程式是理解酸鹼的數學基礎。臨床上以代謝性酸中毒最常見（DKA、AKI、乳酸酸中毒）。',
  learning_objectives: [
    '運用 Henderson-Hasselbalch 方程式解釋 pH、pCO2、HCO3- 的關係',
    '描述四種基本酸鹼障礙（代謝性/呼吸性酸中毒和鹼中毒）的機轉與代償',
    '運用 Anion Gap 區分代謝性酸中毒的病因（高 AG vs 正常 AG）',
    '正確判讀血液氣體分析結果並識別混合型酸鹼障礙',
    '說明 DKA 和乳酸酸中毒的酸鹼機轉與矯正原則',
  ],
  key_points: [
    'Henderson-Hasselbalch：pH = 6.1 + log([HCO3-] / 0.03 × pCO2)。pH 由 HCO3-/pCO2 比值決定',
    '三大調控機轉：(1) 緩衝系統（即時）、(2) 肺臟調節 pCO2（分鐘）、(3) 腎臟調節 HCO3-（小時-天）',
    '代謝性酸中毒（最常見）：HCO3-↓ → pH↓ → 代償性過度換氣 → pCO2↓',
    'Anion Gap = Na+ - (Cl- + HCO3-)。正常犬 12-24, 貓 13-27。AG 升高提示有機酸蓄積',
    '高 AG 代謝性酸中毒口訣 MUDPILES：Methanol, Uremia, DKA, Propylene glycol, Isoniazid/Iron, Lactic acidosis, Ethylene glycol, Salicylates',
    '正常 AG 代謝性酸中毒 = 高氯性（HCO3- 流失：腹瀉、RTA、輸液稀釋）',
    '代謝性鹼中毒：最常見原因為嘔吐（HCl 流失）和利尿劑使用',
    '混合型障礙：預期代償公式可判斷是否有第二種酸鹼障礙疊加',
  ],
  body: `# 酸鹼平衡障礙

## 一、病理機轉 (Pathophysiology)

### Henderson-Hasselbalch 基本原理
- pH = 6.1 + log([HCO3-] / 0.03 x pCO2)
- pH 由 HCO3-（代謝成分/腎臟調控）和 pCO2（呼吸成分/肺臟調控）的比值決定

### 三大調控機轉
1. **緩衝系統**（秒）：碳酸氫鈉緩衝（最重要）、蛋白質緩衝、磷酸鹽緩衝
2. **肺臟**（分鐘）：調節 CO2 排出。pCO2↑→換氣增加→CO2↓
3. **腎臟**（小時-天）：HCO3- 再吸收（PCT）、H+ 分泌、NH4+ 生成（遠端腎元）

### 四種基本酸鹼障礙

| 障礙 | 原發改變 | 代償 | 常見原因 |
|------|---------|------|---------|
| 代謝性酸中毒 | HCO3-↓ | pCO2↓ | DKA, AKI, 乳酸酸中毒, 腹瀉 |
| 代謝性鹼中毒 | HCO3-↑ | pCO2↑ | 嘔吐, 利尿劑, 低鉀 |
| 呼吸性酸中毒 | pCO2↑ | HCO3-↑ | 呼吸抑制, 氣道阻塞, 胸腔積液 |
| 呼吸性鹼中毒 | pCO2↓ | HCO3-↓ | 過度換氣, 疼痛, 發燒, 貧血 |

### Anion Gap 分析
AG = Na+ - (Cl- + HCO3-)，犬正常 12-24 mEq/L，貓 13-27 mEq/L

**高 AG 代謝性酸中毒**（有機酸蓄積）：DKA（酮體）、乳酸酸中毒（組織低灌流）、尿毒症（磷酸/硫酸）、Ethylene glycol（glycolic/oxalic acid）

**正常 AG（高氯性）代謝性酸中毒**（HCO3- 直接流失）：腹瀉、RTA、大量 0.9% NaCl 輸液

### 血液氣體判讀五步驟
1. 看 pH：< 7.35 酸中毒、> 7.45 鹼中毒
2. 看原發改變：代謝（HCO3-）還是呼吸（pCO2）？
3. 算預期代償：是否有第二種障礙疊加？
4. 算 AG：代謝性酸中毒時區分高 AG vs 正常 AG
5. 必要時算 Delta-delta

### 預期代償公式（犬）

| 原發障礙 | 預期代償 |
|---------|---------|
| 代謝性酸中毒 | pCO2 = 1.5 x HCO3- + 8 (+-2) |
| 代謝性鹼中毒 | pCO2 增加 0.7 mmHg / 每 1 mEq HCO3-↑ |
| 急性呼吸性酸中毒 | HCO3- 增加 1 / 每 10 mmHg pCO2↑ |
| 慢性呼吸性酸中毒 | HCO3- 增加 3.5 / 每 10 mmHg pCO2↑ |

## 六、人醫借鑑 (Translational Insights)

- 人醫 **Stewart approach** (physicochemical/strong ion difference) 提供了比 Henderson-Hasselbalch 更全面的酸鹼分析框架——獸醫界逐漸引入但尚未普及
- 人醫 **point-of-care blood gas analyzers** 已成為急診/ICU 標配——獸醫急診同樣受益
- 人醫 DKA 管理的 **protocolized approach** (DKA pathway) 可直接借鑑至獸醫 DKA 管理
- 人醫 **balanced crystalloids** (Lactated Ringer's, PlasmaLyte) 取代 0.9% NaCl 以減少高氯性酸中毒——獸醫同理

## 七、臨床爭議與知識空缺 (Controversies & Knowledge Gaps)

| 爭議主題 | 目前立場 | 證據等級 | 研究方向 |
|---------|---------|---------|---------|
| Stewart approach vs 傳統 HH | 兩者可互補 | Level II | 獸醫臨床應用的比較研究 |
| DKA 的 NaHCO3 使用 | 僅 pH <7.0 時考慮 | Level III | 最佳 pH 閾值？ |
| 0.9% NaCl vs balanced crystalloids | 傾向 balanced | Level II | 獸醫特異性比較研究 |
| 貓正常 AG 範圍 | 13-27（文獻不一） | Level III | 大規模正常貓 AG 數據 |`,
  clinical_pearl: 'DKA 的酸鹼判讀是最經典也最實用的範例。DKA 通常呈現高 AG 代謝性酸中毒（酮體蓄積），但實際上許多 DKA 患者同時存在混合型障礙：(1) 高 AG 代謝性酸中毒（酮體）+ (2) 正常 AG 代謝性酸中毒（腎臟 HCO3- 流失）+ (3) 代謝性鹼中毒（如果有嘔吐）。Delta-delta ratio 可以幫助拆解這些疊加的障礙。治療上，碳酸氫鈉補充要極度謹慎——僅在 pH < 7.0 時考慮，因為胰島素治療後酮體代謝會自然恢復 HCO3-。',
  common_mistakes: [
    '不會系統性地判讀血液氣體（必須按步驟：pH → 原發改變 → 代償 → AG → Delta-delta）',
    'DKA 患者盲目補碳酸氫鈉（大多數 DKA 僅需胰島素+輸液，酮體代謝後 HCO3- 自然恢復）',
    '忽略混合型酸鹼障礙的存在（預期代償不符時必須懷疑第二種障礙）',
    '大量 0.9% NaCl 輸液導致高氯性酸中毒而不自知',
  ],
  disease_data: null,
  diagnostic_data: null,
  procedure_data: null,
  visual_placeholders: [
    { position: '血液氣體判讀段落後', type: 'flowchart', description: '酸鹼判讀系統性流程圖' },
    { position: 'AG 分析段落後', type: 'comparison_table', description: '高 AG vs 正常 AG 代謝性酸中毒鑑別表' },
  ],
  interactive_placeholders: [
    { position: '血液氣體判讀段落', type: 'interactive_staging', description: '輸入 pH/pCO2/HCO3-/Na/Cl 自動判讀酸鹼障礙' },
  ],
  drug_api_links: [],
  references: [
    { type: 'textbook', citation: 'DiBartola SP. Fluid, Electrolyte, and Acid-Base Disorders in Small Animal Practice, 4th ed. Elsevier, 2012.', relevance: '酸鹼平衡權威教科書' },
    { type: 'journal', citation: 'Hopper K, Epstein SE. "Incidence, nature, and etiology of metabolic acidosis in dogs and cats." J Vet Intern Med. 2012;26(5):1107-1114.', relevance: '犬貓代謝性酸中毒流行病學' },
    { type: 'textbook', citation: 'Ettinger SJ, Feldman EC. Textbook of Veterinary Internal Medicine, 8th ed. Elsevier, 2017.', relevance: '酸鹼障礙臨床教材' },
    { type: 'guideline', citation: 'Nelson RW, Couto CG. "Small Animal Internal Medicine." 6th ed. Elsevier, 2020.', relevance: '小動物內科教科書' },
  ],
  is_current: true,
  created_at: now,
};

/** 內分泌檢驗判讀 — L4 診斷型 */
const contentEndocrineTests: NodeContent = {
  id: 'CONTENT-IM-L4-001',
  node_id: 'IM-L4-001',
  version: 1,
  summary: '內分泌檢驗判讀涵蓋甲狀腺功能、腎上腺功能和胰島素相關檢測的正確操作與結果解讀。動態功能試驗（LDDST、ACTH stimulation test）基於負回饋原理，需在正確條件下執行才能獲得有意義的結果。',
  learning_objectives: [
    '正確執行並判讀 LDDST 和 ACTH stimulation test',
    '整合 Total T4、Free T4、TSH 和 TgAA 診斷犬甲低',
    '運用 UCCR 和 LDDST 進行 Cushing 篩檢與鑑別',
    '正確判讀 Fructosamine 和血糖曲線評估糖尿病控制',
    '辨識干擾內分泌檢驗結果的常見因素（藥物、非甲狀腺疾病、壓力）',
  ],
  key_points: [
    'LDDST 操作：基礎 cortisol → Dexamethasone 0.01 mg/kg IV → 4h 和 8h cortisol。8h cortisol > 1.4 μg/dL = 陽性',
    'ACTH stimulation test：基礎 cortisol → Cosyntropin 5 μg/kg IV → 1h cortisol。Post < 2 μg/dL = Addison 確診',
    'Trilostane 監測：ACTH stim 在給藥後 4-6 小時。目標 post-ACTH 1.45-5.4 μg/dL',
    '犬甲低判讀：T4↓ + TSH↑ = 典型；T4↓ + TSH 正常 = 需 fT4ED 鑑別 ESS',
    'Fructosamine 反映 2-3 週平均血糖：犬 < 400 μmol/L 良好控制、貓 < 450 μmol/L',
    '干擾因素：Phenobarbital/糖皮質素壓抑 T4；壓力升高 cortisol；貓壓力性高血糖可達 300-400 mg/dL',
  ],
  body: `# 內分泌檢驗判讀

## 一、檢查原理與適應症 (Principles & Indications)



| 檢測相關風險 | 監測 | 處理 |
|-------------|------|------|
| Trilostane 過度抑制 (Post <1.45) | ACTH stim q10-14d 起始 | 減量或暫停 |
| LDDST 壓力偽陽性 | 確認無急性疾病/壓力 | 擇期重測 |
| Insulin 低血糖 (BGC <60) | BGC nadir | 減量胰島素 |
| ESS 誤診為甲低 | 治療原發病後複測 | 避免不必要 L-T4 |

**監測時程**：Trilostane ACTH stim 開始後 10-14d→30d→q3月。Post-pill T4 在 [藥物:Levothyroxine] 開始後 4-6 週。BGC 在胰島素調整後 5-7 天。

## 二、判讀要點 (Interpretation)

### 腎上腺功能檢測

**LDDST（Low-Dose Dexamethasone Suppression Test）**
- 適應症：Cushing 篩檢（敏感度 95-100%）
- 操作：基礎 cortisol → Dexamethasone 0.01 mg/kg IV → 4h cortisol → 8h cortisol
- 判讀：8h cortisol > 1.4 ug/dL = 無法抑制 = 陽性
- 附加鑑別：4h 或 8h cortisol < 50% baseline 或 < 1.4 → 提示 PDH

**ACTH Stimulation Test**
- 適應症：Addison 確診、[藥物:Trilostane] 治療監測
- 操作：基礎 cortisol → Cosyntropin 5 ug/kg IV → 1h post cortisol
- Addison 確診：Pre 和 Post cortisol 均 < 2 ug/dL
- Trilostane 監測：給藥後 4-6 小時執行。Post 1.45-5.4 ug/dL = 適當控制
- 注意：[藥物:Dexamethasone] 不干擾 cortisol 測量；[藥物:Prednisolone] 會干擾

**UCCR（Urine Cortisol:Creatinine Ratio）**
- 適應症：Cushing 排除用（NPV 極高）
- 居家晨尿，正常 < 10 x 10^-6

**Endogenous ACTH**：PDH > 40 pg/mL；ADH < 10 pg/mL。EDTA 管立即冰浴送檢。

### 甲狀腺功能檢測

| 臨床情境 | T4 | TSH | fT4ED | 診斷 |
|---------|-----|------|-------|------|
| 典型甲低 | 顯著降低 | 升高 | 降低 | 原發性甲低 |
| ESS | 降低 | 正常 | 正常 | 非甲狀腺疾病 |
| 早期甲低 | 低正常 | 升高 | 正常或降低 | 亞臨床甲低 |
| 藥物干擾 | 降低 | 正常 | 通常正常 | 停藥後再測 |

干擾因素：Glucocorticoids、[藥物:Phenobarbital]、NSAIDs、Sulfonamides；任何非甲狀腺疾病 (ESS)

### 血糖與胰島素評估

| 指標 | 良好控制 | 控制不佳 | 備註 |
|------|---------|---------|------|
| Fructosamine 犬 | < 400 umol/L | > 500 | 反映 2-3 週平均血糖 |
| Fructosamine 貓 | < 450 umol/L | > 550 | 排除壓力性高血糖 |
| BGC nadir | 100-150 mg/dL | <80 或 >300 | 每 2h x 12h |

## 三、常見陷阱 (Pitfalls)

## 四、人醫借鑒 (Translational Insights)

- 人醫 **midnight salivary cortisol** 為 Cushing 篩檢常規——獸醫無對應（犬貓唾液取樣困難）
- 人醫 **TSH 為甲狀腺篩檢首選**（人醫 TSH assay 高度可靠）；獸醫犬 TSH 敏感度僅 ~75%
- 人醫 **HbA1c** 反映 2-3 月血糖控制；獸醫 Fructosamine 僅反映 2-3 週——需更頻繁監測
- 人醫 **CGM** (continuous glucose monitoring) 已普及；獸醫 FreeStyle Libre 開始應用

## 五、臨床爭議與知識空缺 (Controversies & Knowledge Gaps)

| 爭議主題 | 目前立場 | 證據等級 | 研究方向 |
|---------|---------|---------|---------|
| Pre-Trilostane cortisol vs ACTH stim | ACTH stim 為標準，pre-pill cortisol 可能有用 | Level III | 兩者的頭對頭比較 |
| 犬 TSH assay 改良 | 現有 assay 敏感度不足 | Level II | 新一代犬 TSH assay |
| CGM 在獸醫的準確度 | 初步可靠但需驗證 | Level III | 犬貓特異性校正研究 |
| 亞臨床甲低的治療 | 有爭議 | Level IV | 前瞻性比較研究 |`,
  clinical_pearl: 'ACTH stimulation test 的時機在 Trilostane 監測中至關重要。必須在 Trilostane 給藥後 4-6 小時的效果巔峰期執行——太早或太晚都會得到錯誤結果。如果 post-ACTH cortisol < 1.45 μg/dL（過度抑制），即使臨床上看起來還好，也需要減量或暫停 Trilostane，因為有 Addisonian crisis 的風險。另一個關鍵：如果急診需要在 ACTH stim test 前給類固醇，選擇 Dexamethasone（不干擾 cortisol assay），避免 Prednisolone（會交叉反應導致 cortisol 測量偽高）。',
  common_mistakes: [
    'Trilostane 監測時在錯誤時間點做 ACTH stim（必須是給藥後 4-6 小時）',
    '急診使用 Prednisolone 後做 ACTH stim test（Prednisolone 干擾 cortisol 測量，應使用 Dexamethasone）',
    '內源性 ACTH 樣本處理不當（必須 EDTA 管、立即冰浴、快速分離血漿並冷凍送檢）',
    '僅憑 T4 低就診斷甲低，未排除 ESS 和藥物干擾',
    '在生病或壓力狀態下篩檢甲狀腺或腎上腺功能（結果不可靠）',
  ],
  disease_data: null,
  diagnostic_data: {
    indication: ['Cushing 篩檢與鑑別', 'Addison 確診', 'Trilostane 治療監測', '甲狀腺功能評估', '糖尿病控制評估', '內分泌異常鑑別診斷'],
    contraindication: ['急性非甲狀腺疾病時不建議篩檢甲狀腺功能（ESS 導致偽低）', '使用 Prednisolone 時不應做 ACTH stim（改用 Dexamethasone）'],
    technique: 'LDDST：靜脈留置針，基礎採血 → Dexamethasone 0.01 mg/kg IV → 4h 和 8h 採血。ACTH stim：基礎採血 → Cosyntropin 5 μg/kg IV → 1h 採血。甲狀腺 panel：空腹採血（T4 + fT4ED + TSH ± TgAA）。Post-pill T4：Levothyroxine 給藥後 4-6 小時採血。',
    normal_findings: [
      { finding: '基礎 Cortisol', description: '犬 1-5 μg/dL', significance: '< 2 μg/dL 時 Addison 可能性高；排除 Cushing' },
      { finding: 'Post-ACTH Cortisol', description: '犬 6-17 μg/dL', significance: '正常腎上腺刺激反應' },
      { finding: 'Total T4', description: '犬 1.0-4.0 μg/dL，貓 1.0-4.0 μg/dL', significance: '甲狀腺功能正常範圍' },
      { finding: 'TSH', description: '犬 0.05-0.42 ng/mL', significance: '正常腦下垂體反應' },
    ],
    abnormal_findings: [
      { finding: 'LDDST 8h cortisol > 1.4', description: '無法被低劑量 Dexamethasone 抑制', significance: '高度提示 Cushing' },
      { finding: 'Post-ACTH cortisol < 2', description: 'Pre 和 Post 均 < 2 μg/dL', significance: '確診 Addison' },
      { finding: 'T4↓ + TSH↑', description: 'Total T4 低於正常 + TSH 高於正常', significance: '典型原發性甲低' },
      { finding: 'T4 > 4.0（貓）', description: '高於正常上限', significance: '確診甲亢' },
    ],
    interpretation_guide: '1. 確認臨床懷疑 → 2. 選擇適當試驗 → 3. 確認無干擾因素（藥物、疾病、壓力）→ 4. 正確執行和採樣 → 5. 整合臨床表現和檢驗結果判讀。',
    pitfalls: [
      '壓力狀態下 cortisol 可能非特異性升高（LDDST 偽陽性）',
      'ESS 使 T4 偽低（最常見的甲低誤診原因）',
      '貓壓力性高血糖可達 300-400 mg/dL（Fructosamine 可鑑別）',
      '飼主未正確報告 Trilostane 給藥時間導致監測時機錯誤',
    ],
    sensitivity_specificity: 'LDDST 敏感度 95-100%，特異度 44-73%。ACTH stim 敏感度 61-85%，特異度 59-93%。T4+TSH 組合對原發性甲低敏感度約 87%，特異度約 82%。',
    cost_benefit: '動態功能試驗成本中等，但診斷價值高。應在臨床高度懷疑時才執行（避免在無臨床指徵時篩檢）。',
  },
  procedure_data: null,
  visual_placeholders: [
    { position: 'LDDST 段落後', type: 'flowchart', description: 'LDDST 結果判讀與後續決策流程圖' },
    { position: '甲狀腺檢測段落後', type: 'flowchart', description: '甲狀腺功能檢測判讀決策樹' },
  ],
  interactive_placeholders: [
    { position: '檢驗判讀段落', type: 'interactive_staging', description: '輸入內分泌檢驗數值自動判讀工具' },
  ],
  drug_api_links: ['Dexamethasone', 'Cosyntropin', 'Trilostane', 'Levothyroxine', 'Methimazole'],
  references: [
    { type: 'guideline', citation: 'Behrend EN et al. "Diagnosis of Spontaneous Canine Hyperadrenocorticism: 2012 ACVIM Consensus Statement." J Vet Intern Med. 2013;27(6):1292-1304.', relevance: 'Cushing 診斷共識' },
    { type: 'textbook', citation: 'Feldman EC et al. Canine and Feline Endocrinology, 4th ed. Elsevier, 2015.', relevance: '內分泌檢驗完整參考' },
    { type: 'guideline', citation: 'Behrend E et al. "2018 AAHA Diabetes Management Guidelines for Dogs and Cats." J Am Anim Hosp Assoc. 2018;54(1):1-21.', relevance: '糖尿病監測指引' },
    { type: 'journal', citation: 'Diagnostic Imaging of the Canine and Feline Abdomen. JVIM 2020', relevance: '腹腔影像診斷參考' },
  ],
  is_current: true,
  created_at: now,
};

/** 腹腔超音波 — L4 診斷型 */
const contentAbdoUS: NodeContent = {
  id: 'CONTENT-IM-L4-003',
  node_id: 'IM-L4-003',
  version: 1,
  summary: '腹腔超音波是小動物內科最重要的非侵入性影像診斷工具，可評估所有腹腔臟器的大小、結構、回聲性質和血流。在內科領域尤其重要的是腎臟（CKD 分期輔助）、肝膽系統、胰臟、腸道和腎上腺的評估。操作者依賴性高，需要系統性掃描方法。',
  learning_objectives: [
    '描述腹腔超音波的系統性掃描順序與各臟器正常影像特徵',
    '判讀腎臟超音波異常（大小、結構、腎盂積水、腎結石）',
    '評估肝膽系統異常（肝臟回聲、膽囊、膽道擴張）',
    '判讀腸道超音波異常（壁厚度、分層結構、淋巴結）',
    '評估腎上腺大小以鑑別 Cushing 類型（PDH vs ADH）',
  ],
  key_points: [
    '系統性掃描順序：肝膽 → 脾臟 → 左腎 → 左腎上腺 → 胃 → 胰臟 → 十二指腸 → 空腸 → 右腎 → 右腎上腺 → 膀胱 → 前列腺/子宮',
    '腎臟正常大小：犬 3.5-4.5 cm（與 L2 等長）、貓 3.0-4.3 cm。CKD 時通常縮小、回聲增高、皮髓質界線不清',
    '腸道壁厚度正常值：犬十二指腸 < 5-6 mm、空腸 < 4-5 mm；貓十二指腸 < 2.8 mm、空腸 < 2.5 mm',
    '腸壁正常五層結構：黏膜（低回聲）→ 黏膜下層（高回聲）→ 肌層（低回聲）→ 漿膜下層（高回聲）→ 漿膜',
    '腎上腺正常寬度：犬 < 7.4 mm（大型犬可稍大）。PDH = 雙側對稱增大；ADH = 單側腫塊 + 對側萎縮',
    '胰臟炎超音波：犬敏感度約 68%、貓僅 35-67%。胰臟周圍高回聲脂肪（saponification）、胰臟腫脹/低回聲',
    '腹腔淋巴結：正常不易見或小且紡錘形；腫大/圓形提示淋巴瘤、轉移或反應性增生',
  ],
  body: `# 腹腔超音波

## 一、檢查原理與適應症 (Principles & Indications)



### 系統性掃描方法
標準順序：肝膽→脾臟→左腎/左腎上腺→胃/胰臟→十二指腸→空腸→右腎/右腎上腺→膀胱→前列腺/子宮→腹腔淋巴結

### 各臟器正常與異常影像特徵

**腎臟評估**

| 特徵 | 正常 | CKD | AKI |
|------|------|-----|-----|
| 大小 | 犬 3.5-4.5 cm / 貓 3.0-4.3 cm | 縮小（雙側） | 正常或腫大 |
| 回聲 | 皮質 <= 肝/脾 | 皮質回聲增高 | 皮質回聲增高 |
| 皮髓界線 | 清晰 | 模糊 | 可能模糊 |
| 腎盂 | 不擴張 | 可能正常 | 可能擴張（腎盂腎炎） |

**腸道評估**

| 部位 | 犬正常壁厚 | 貓正常壁厚 |
|------|-----------|-----------|
| 十二指腸 | < 5-6 mm | < 2.8 mm |
| 空腸 | < 4-5 mm | < 2.5 mm |
| 迴腸 | < 4-5 mm | < 3.2 mm |
| 結腸 | < 3 mm | < 2.5 mm |

異常模式：均勻增厚+分層保留 = CE/IBD；局灶增厚+分層消失 = 腫瘤；黏膜下層高迴音條紋 = 淋巴管擴張（PLE）

**腎上腺評估**

| 特徵 | 正常 | PDH | ADH |
|------|------|-----|-----|
| 大小 | < 7.4 mm 寬 | 雙側 > 7.4 mm | 單側腫塊 |
| 形態 | 扁平/花生形 | 圓潤增大 | 不規則腫塊 |
| 對側 | 對稱 | 對稱 | 萎縮 |

**胰臟炎超音波**：胰臟腫脹低回聲 + 周圍脂肪高回聲 (saponification) + 腹腔游離液。犬敏感度 ~68%，貓 35-67%。

| 監測指標 | 頻率 | 適用情境 |
|---------|------|---------|
| 腎臟大小與回聲 | q3-6 月 | CKD 追蹤 |
| 腸壁厚度 | q3-6 月 | CE 治療反應評估 |
| 腎上腺大小 | q3-6 月 | Cushing 治療監測 |
| 腹腔淋巴結 | 依臨床需要 | 淋巴瘤分期/CE |
| 腹腔積液 | 即時 | PLE/肝病/心衰 |

**操作者依賴性**：胰臟和腎上腺評估需要大量訓練。正常胰臟可能不易辨識（不代表排除胰臟疾病）。

## 二、判讀要點 (Interpretation)

## 三、常見陷阱 (Pitfalls)

## 四、人醫借鑒 (Translational Insights)

- 人醫 **contrast-enhanced ultrasound (CEUS)** 評估組織灌流和腫瘤特徵——獸醫應用增加中
- 人醫 **shear-wave elastography** 評估肝臟纖維化（取代部分肝臟切片）——獸醫初步研究中
- 人醫 **point-of-care ultrasound (POCUS)** 在急診的 FAST protocol 已被獸醫廣泛採用（AFAST/TFAST）
- 人醫 **AI-assisted ultrasound interpretation** 輔助品質控制——獸醫尚在起步

## 五、臨床爭議與知識空缺 (Controversies & Knowledge Gaps)

| 爭議主題 | 目前立場 | 證據等級 | 研究方向 |
|---------|---------|---------|---------|
| 超音波 vs CT 在胰臟炎 | CT 敏感度可能更高 | Level III | 頭對頭比較研究 |
| 腸壁分層消失 = 腫瘤？ | 高度提示但需切片確認 | Level II | 更好的超音波腫瘤標準 |
| 腎上腺大小 cutoff 標準化 | 7.4 mm 為常用但品種影響 | Level II | 品種特異性正常值 |
| CEUS 在獸醫的角色 | 有潛力但尚未普及 | Level III | 臨床適應症與成本效益 |`,
  clinical_pearl: '腸道超音波中最容易被忽略但臨床意義重大的發現是「黏膜下層高回聲條紋（mucosal striations）」。這些條紋代表擴張的淋巴管中脂肪/蛋白質滲漏，高度提示淋巴管擴張和 PLE。當在超音波上看到腸壁增厚合併黏膜下層條紋時，即使尚未做組織切片，就應該測量血清 Albumin 並考慮 PLE 的可能性。這個發現可以加速診斷流程。',
  common_mistakes: [
    '腹腔超音波未系統性掃描——漏掉腎上腺或腸繫膜淋巴結等容易忽略的結構',
    '胰臟超音波正常就排除胰臟炎（敏感度有限，尤其在貓）',
    '腎臟皮質回聲增高就斷定 CKD——需結合腎臟大小、血檢和尿液分析',
    '未測量腸壁厚度就主觀判斷「增厚」——應使用標準化測量值',
    '忽略腹腔淋巴結評估（對淋巴瘤分期和 CE 鑑別非常重要）',
  ],
  disease_data: null,
  diagnostic_data: {
    indication: ['腹痛/急腹症評估', 'CKD/AKI 腎臟結構評估', '嘔吐/腹瀉原因鑑別', 'Cushing PDH vs ADH 鑑別', '肝臟疾病評估', '腹腔腫瘤篩檢', '腹水原因評估', '泌尿道結石/阻塞評估'],
    contraindication: ['無絕對禁忌症。嚴重皮膚傷口上方需避開。腹部大量氣體可能影響影像品質'],
    technique: '動物側臥或仰臥（V-trough）。剃毛腹部。使用 7.5-12 MHz microconvex 或 linear 探頭（大型犬可用 5 MHz）。充分耦合膠。系統性掃描各臟器。記錄測量值和異常影像。',
    normal_findings: [
      { finding: '肝臟', description: '均勻中等回聲，肝靜脈可見，肝緣銳利', significance: '正常肝臟結構' },
      { finding: '腎臟', description: '光滑被膜，清楚皮髓質界線，腎皮質回聲 ≤ 肝/脾', significance: '正常腎臟結構' },
      { finding: '腸壁', description: '五層結構清晰可見，厚度在正常範圍內', significance: '正常腸道結構' },
      { finding: '腎上腺', description: '寬度 < 7.4 mm，扁平或花生形', significance: '正常腎上腺大小' },
    ],
    abnormal_findings: [
      { finding: '腎臟縮小+回聲增高', description: '雙側腎臟縮小，皮質回聲>肝/脾，皮髓界線模糊', significance: '慢性腎病典型影像' },
      { finding: '腸壁增厚+分層保留', description: '壁厚超過正常值但五層結構保留', significance: '提示 CE/IBD' },
      { finding: '腸壁增厚+分層消失', description: '局灶性壁增厚伴分層結構消失', significance: '高度懷疑腫瘤' },
      { finding: '腎上腺單側腫塊', description: '單側腎上腺腫塊，對側萎縮', significance: '腎上腺腫瘤型 Cushing（ADH）' },
    ],
    interpretation_guide: '1. 系統性評估各臟器 → 2. 記錄測量值 → 3. 與正常參考值比較 → 4. 整合臨床表現和血檢結果 → 5. 建議進一步檢查（FNA、組織切片）',
    pitfalls: [
      '腸道氣體干擾影像品質（禁食 12 小時可改善但非必需）',
      '操作者經驗差異大——胰臟和腎上腺的辨識需要大量訓練',
      '肥胖動物影像品質下降（使用較低頻率探頭）',
      '正常胰臟可能不易辨識（不代表排除胰臟疾病）',
    ],
    sensitivity_specificity: '腎臟結構異常敏感度高（> 90%）。腸壁評估對 CE 敏感度約 70-80%。胰臟炎敏感度犬 68%、貓 35-67%。腎上腺大小對 Cushing 分型敏感度約 80-90%。',
    cost_benefit: '中等成本、非侵入性、即時結果。是腹腔疾病評估最具成本效益的影像工具。操作者技術是品質的決定因素。',
  },
  procedure_data: null,
  visual_placeholders: [
    { position: '腎臟評估段落後', type: 'annotated_image', description: '正常 vs CKD 腎臟超音波影像標注比較' },
    { position: '腸道評估段落後', type: 'annotated_image', description: '腸壁五層結構與異常增厚影像標注' },
  ],
  interactive_placeholders: [],
  drug_api_links: [],
  references: [
    { type: 'textbook', citation: 'Penninck D, d\'Anjou MA. Atlas of Small Animal Ultrasonography, 2nd ed. Wiley-Blackwell, 2015.', relevance: '小動物超音波影像圖譜' },
    { type: 'textbook', citation: 'Mattoon JS, Nyland TG. Small Animal Diagnostic Ultrasound, 3rd ed. Elsevier, 2015.', relevance: '小動物超音波診斷教科書' },
    { type: 'journal', citation: 'Gaschen L. "Ultrasonography of small intestinal inflammatory and neoplastic diseases in dogs and cats." Vet Clin North Am Small Anim Pract. 2011;41(2):329-344.', relevance: '腸道超音波判讀回顧' },
    { type: 'guideline', citation: 'Nelson RW, Couto CG. "Small Animal Internal Medicine." 6th ed. Elsevier, 2020.', relevance: '小動物內科教科書' },
  ],
  is_current: true,
  created_at: now,
};

/** 消化系統影像與內視鏡 — L4 診斷型 */
const contentGIEndoscopy: NodeContent = {
  id: 'CONTENT-IM-L4-004',
  node_id: 'IM-L4-004',
  version: 1,
  summary: '消化系統影像與內視鏡是慢性腸病（CE/IBD）、消化道腫瘤和胃腸道異物的重要診斷工具。上下消化道內視鏡可直接觀察黏膜並取得多部位切片進行組織病理學確診。WSAVA 標準化評分系統提供組織學分級的一致性。',
  learning_objectives: [
    '說明上下消化道內視鏡的適應症、禁忌症與操作要點',
    '描述正常與異常消化道黏膜的內視鏡外觀',
    '運用 WSAVA 標準化組織學分級評估腸道發炎',
    '區分消化道 X 光和超音波各自的優勢與限制',
    '說明組織切片品質要求與常見的取樣偏差問題',
  ],
  key_points: [
    '內視鏡適應症：慢性嘔吐/腹瀉（飲食和抗生素試驗無效後）、胃腸道異物、不明原因體重減輕、消化道出血',
    '上消化道內視鏡可達食道、胃、十二指腸；下消化道可達結腸、迴腸（逆行性迴腸鏡）',
    '切片品質要求：每部位 6-8 個高品質切片（含黏膜全層到黏膜肌層），品質不足是最常見的診斷限制',
    'WSAVA 組織學分級：標準化腸道發炎評估（正常/輕度/中度/重度），但組織學與臨床嚴重度相關性有限',
    '內視鏡 vs 全層外科切片：內視鏡切片僅含黏膜層，淋巴管擴張和肌層/漿膜病變需全層外科切片',
    '腹部 X 光優勢：異物偵測、腸道氣體分布（阻塞模式）、自由氣體（穿孔）',
    '貓 IBD vs 小細胞淋巴瘤：組織學可極度相似，需免疫組織化學（CD3/CD20）和 clonality analysis（PARR）鑑別',
  ],
  body: `# 消化系統影像與內視鏡

## 一、檢查原理與適應症 (Principles & Indications)



### 消化道影像診斷

**腹部 X 光**
- 優勢：異物偵測（金屬、骨頭）、腸道氣體分布評估、腹腔自由氣體（穿孔）
- 腸阻塞影像：近端腸管擴張（> 1.6 倍 L5 椎體寬度/犬）、氣液面
- 限制：軟組織對比度低

**對比劑攝影**：Barium series 評估通過時間和黏膜表面。穿孔疑慮時禁用 Barium（改用水溶性 Iohexol）

### 消化道內視鏡

**上消化道內視鏡 (EGD)**：食道→胃（賁門、胃體、幽門）→十二指腸
**下消化道內視鏡（結腸鏡）**：直腸→降結腸→橫結腸→升結腸→盲腸→迴腸（逆行性）

**異常黏膜外觀**

| 外觀 | 意義 |
|------|------|
| 顆粒狀/不規則 | CE/IBD |
| 糜爛/潰瘍 | 嚴重發炎、NSAID 損傷、腫瘤 |
| 腫塊/結節 | 腫瘤（淋巴瘤、腺癌、平滑肌瘤） |
| 白色斑點（白斑） | 淋巴管擴張 (lymphangiectasia) |
| 正常外觀但組織學異常 | CE 常見——**外觀正常不排除疾病** |

### 組織切片要點
- 每部位至少 **6-8 個切片**（減少取樣偏差）
- 切片需含黏膜全層（至黏膜肌層）
- **WSAVA 標準化組織學分級**：正常→輕度→中度→重度

### 內視鏡 vs 全層外科切片

| 特徵 | 內視鏡切片 | 全層外科切片 |
|------|-----------|-------------|
| 侵入性 | 較低 | 較高（開腹） |
| 取得深度 | 僅黏膜層 | 全層 |
| 淋巴管擴張 | 敏感度 60-70% | > 90% |
| 適應症 | CE 首選 | PLE 或懷疑淋巴瘤 |

### 貓 IBD vs 小細胞淋巴瘤鑑別
兩者組織學極相似→需免疫組織化學（CD3/CD20）+ Clonality analysis（PARR）。多克隆=IBD；單克隆=淋巴瘤。

| 風險 | 機轉 | 預防/處理 |
|------|------|---------|
| 穿孔（充氣相關） | 過度充氣/病變組織脆弱 | 控制充氣量、避免疑似穿孔時內視鏡 |
| 出血（切片相關） | 凝血異常/深層切片 | 術前 PT/aPTT、淺切技術 |
| PLE 犬術後癒合不良 | 低白蛋白→傷口癒合差 | 全層切片前白蛋白評估 |
| 麻醉風險 | 衰弱動物 | 穩定後再排程 |

**追蹤監測**：組織學結果出來後→調整治療→3-6 月後評估臨床反應→考慮是否需重複內視鏡（罕需）

## 二、判讀要點 (Interpretation)

## 三、常見陷阱 (Pitfalls)

## 四、人醫借鑒 (Translational Insights)

- 人醫 **capsule endoscopy** 可評估全段小腸——獸醫犬用膠囊內視鏡有限度報告但尚未普及
- 人醫 **confocal laser endomicroscopy** 可在內視鏡時即時組織學評估——獸醫未應用
- 人醫 **narrow-band imaging (NBI)** 增強黏膜微血管可視化——獸醫設備限制
- 人醫 **endoscopic ultrasound (EUS)** 評估壁層結構和周圍組織——獸醫少數轉診中心可用

## 五、臨床爭議與知識空缺 (Controversies & Knowledge Gaps)

| 爭議主題 | 目前立場 | 證據等級 | 研究方向 |
|---------|---------|---------|---------|
| 內視鏡切片是否足夠診斷 PLE | 敏感度有限，全層更佳 | Level II | 內視鏡技術改進？ |
| WSAVA 分級的臨床相關性 | 與臨床嚴重度相關有限 | Level II | 更好的組織學預後標記 |
| PARR 對淋巴瘤的敏感度 | ~70-80%，假陰性存在 | Level II | 更敏感的分子檢測 |
| 飲食試驗前是否需先做內視鏡 | 飲食試驗優先，除非嚴重 | Level II | 最佳診斷順序研究 |`,
  clinical_pearl: '內視鏡檢查中最容易被忽略的結構是迴腸。許多 CE 的病變以迴腸為主（尤其淋巴管擴張和小細胞淋巴瘤），如果只做上消化道內視鏡（到十二指腸），可能完全錯過迴腸的病變。理想的 CE 評估應包括上消化道（食道-胃-十二指腸）和下消化道（結腸-迴腸）內視鏡。此外，內視鏡外觀正常不能排除疾病——大約 30% 的 CE 犬貓在內視鏡下黏膜外觀正常但組織學有顯著異常。切片是必須的。',
  common_mistakes: [
    '切片數量不足（每部位需 6-8 個高品質切片以減少取樣偏差）',
    '僅做上消化道內視鏡而未做迴腸鏡（迴腸病變可能被遺漏）',
    '內視鏡外觀正常就不做切片（30% CE 外觀正常但組織學異常）',
    '貓腸道淋巴球浸潤未進一步做免疫組織化學和 clonality 分析（可能漏診小細胞淋巴瘤）',
    '全層外科切片在低白蛋白 PLE 犬中未注意傷口癒合風險',
  ],
  disease_data: null,
  diagnostic_data: {
    indication: ['慢性嘔吐/腹瀉（飲食和抗生素試驗無效）', '不明原因體重減輕', '消化道異物取出', '消化道出血病因調查', '疑似腸道腫瘤', 'PLE 病因確診'],
    contraindication: ['嚴重凝血障礙（PT/aPTT 延長需先矯正）', '疑似消化道穿孔（禁止充氣）', '嚴重心肺不穩（麻醉風險）', '低白蛋白犬的全層外科切片需謹慎（傷口癒合風險）'],
    technique: '全身麻醉。上消化道內視鏡：左側臥，經口插入軟式內視鏡。系統性檢查食道、胃各區域、幽門、十二指腸。下消化道內視鏡：預先灌腸清腸。經肛門插入。每部位 6-8 個切片，使用活檢鉗取黏膜全層切片。切片立即固定於 10% 福馬林。',
    normal_findings: [
      { finding: '食道黏膜', description: '光滑蒼白，犬可見環形皺褶', significance: '正常食道黏膜' },
      { finding: '胃黏膜', description: '粉紅、光滑皺褶，胃底腺區域較厚', significance: '正常胃黏膜' },
      { finding: '十二指腸黏膜', description: '粉紅色、細緻絨毛可見', significance: '正常十二指腸' },
      { finding: '結腸黏膜', description: '光滑、粉紅、血管紋路可見', significance: '正常結腸黏膜' },
    ],
    abnormal_findings: [
      { finding: '黏膜顆粒狀/不規則', description: '黏膜表面粗糙、不規則', significance: '提示 CE/IBD' },
      { finding: '白色斑點/白斑', description: '黏膜上散在白色斑點', significance: '提示淋巴管擴張（PLE）' },
      { finding: '腫塊/結節', description: '黏膜隆起性病灶', significance: '疑似腫瘤（需切片確診）' },
      { finding: '糜爛/潰瘍', description: '黏膜缺損/出血', significance: '嚴重發炎、NSAID 損傷或腫瘤' },
    ],
    interpretation_guide: '1. 系統性觀察各部位黏膜 → 2. 記錄異常外觀 → 3. 多部位多次切片（每部位 6-8 個）→ 4. 送組織病理學 + 免疫組織化學（貓必要時）→ 5. WSAVA 標準化分級 → 6. 整合臨床、血檢和影像結果',
    pitfalls: [
      '切片壓碎（crush artifact）影響組織學判讀',
      '迴腸-結腸瓣進入困難（逆行性迴腸鏡需要經驗）',
      '組織學正常不能 100% 排除疾病（取樣偏差）',
      'WSAVA 分級的觀察者間一致性僅中等',
    ],
    sensitivity_specificity: '內視鏡切片對 CE 的組織學診斷敏感度約 80-90%（含迴腸時更高）。對淋巴管擴張敏感度較全層切片低（約 60-70% vs > 90%）。貓 IBD vs 小細胞淋巴瘤需 PARR 鑑別（敏感度約 70-80%）。',
    cost_benefit: '成本較高（需全身麻醉和專業設備），但對 CE 確診是必要的黃金標準。全層外科切片更侵入但對 PLE/淋巴管擴張更敏感。',
  },
  procedure_data: null,
  visual_placeholders: [
    { position: '異常黏膜外觀表後', type: 'annotated_image', description: '正常 vs 異常腸道黏膜內視鏡影像標注' },
    { position: '內視鏡 vs 全層外科切片表後', type: 'comparison_table', description: '內視鏡切片 vs 全層外科切片適應症比較表' },
  ],
  interactive_placeholders: [],
  drug_api_links: [],
  references: [
    { type: 'guideline', citation: 'Washabau RJ et al. "Endoscopic, Biopsy, and Histopathologic Guidelines for the Evaluation of Gastrointestinal Inflammation in Companion Animals." J Vet Intern Med. 2010;24(1):10-26.', relevance: 'WSAVA 消化道內視鏡與組織學指引' },
    { type: 'textbook', citation: 'Tams TR, Rawlings CA. Small Animal Endoscopy, 3rd ed. Elsevier, 2011.', relevance: '小動物內視鏡操作教科書' },
    { type: 'journal', citation: 'Kiupel M et al. "Proposal of a 2-tier histologic grading system for canine cutaneous mast cell tumors to more accurately predict biological behavior." Vet Pathol. 2011;48(1):147-155.', relevance: '腫瘤組織學分級標準化參考' },
  ],
  is_current: true,
  created_at: now,
};

/** 慢性腎病管理 — L5 治療型 */
const contentCKDManagement: NodeContent = {
  id: 'CONTENT-IM-L5-001',
  node_id: 'IM-L5-001',
  version: 1,
  summary: '慢性腎病（CKD）管理依據 IRIS 分期制定階段性治療計畫。核心策略包括飲食管理（限磷、適量蛋白）、抗蛋白尿治療（Benazepril/Telmisartan）、磷結合劑、貧血管理和症狀支持。早期介入可顯著延長存活時間。',
  learning_objectives: [
    '依據 IRIS 分期制定各期 CKD 的治療策略',
    '選擇適當的抗蛋白尿藥物並說明其腎保護機轉',
    '制定磷控制方案（飲食限磷 + 磷結合劑）',
    '管理 CKD 相關貧血（Darbepoetin/ESA 的使用指引）',
    '設計 CKD 病患的長期監測計畫',
  ],
  key_points: [
    '飲食管理是 CKD 最有證據支持的介入措施——腎臟處方飲食可延長犬貓 CKD 存活 2-3 倍',
    '抗蛋白尿：UPC > 0.5（犬）/ > 0.4（貓）→ Benazepril 0.5-1.0 mg/kg PO SID 或 Telmisartan 1 mg/kg PO SID（貓首選）',
    '磷控制目標：Stage 1-2 < 4.5 mg/dL、Stage 3 < 5.0 mg/dL、Stage 4 < 6.0 mg/dL',
    '磷結合劑：Aluminum hydroxide 30-90 mg/kg/day 與食物混合給予、Lanthanum carbonate、Chitosan',
    '貧血管理：PCV < 20%（犬）/ < 18%（貓）→ Darbepoetin 1 μg/kg SC q1wk 起始，搭配鐵補充',
    '高血壓控制：Amlodipine（貓首選）0.125-0.25 mg/kg PO SID，目標 SBP < 160 mmHg',
    '鉀補充：低血鉀貓 → Potassium gluconate 2-6 mEq/day PO',
  ],
  body: `# 慢性腎病管理

## 一、治療原理 (Treatment Principles)



### IRIS 分期治療策略

**Stage 1（非氮血症）**
- 確認並治療可逆因子（腎盂腎炎、腎結石、泌尿道阻塞）
- UPC > 0.5/0.4 → 啟動抗蛋白尿治療
- 血壓 >= 160 mmHg → 降壓治療
- 確保充足飲水

**Stage 2（輕度氮血症）**
- 上述 + **腎臟處方飲食**（限磷、適量優質蛋白、omega-3）——**Level I 證據**
- 貓鼓勵濕食增加水分攝取
- 磷超標時加入磷結合劑

**Stage 3（中度氮血症）**
- 上述 + 磷結合劑（幾乎所有 Stage 3 都需要）
- [藥物:Maropitant] 2 mg/kg PO SID（止吐）
- 皮下輸液居家 75-150 mL q24-48h
- 鉀補充（貓常見低血鉀）

**Stage 4（重度氮血症/尿毒症）**
- 積極症狀管理 + 住院靜脈輸液穩定
- 貧血管理 + 生活品質評估

### 藥物治療方案

| 類別 | 藥物 | 劑量 | 證據等級 |
|------|------|------|---------|
| 抗蛋白尿 | [藥物:Benazepril] | 0.5-1.0 mg/kg PO SID | Level I |
| 抗蛋白尿 | [藥物:Telmisartan] | 1 mg/kg PO SID | Level I |
| 磷結合劑 | [藥物:Aluminum hydroxide] | 30-90 mg/kg/day 與食物混合 | Level II |
| 降壓 | [藥物:Amlodipine] | 0.125-0.25 mg/kg PO SID（貓首選） | Level I |
| 貧血 | [藥物:Darbepoetin] | 1 ug/kg SC q1wk → q2-4wk | Level II |
| 止吐 | [藥物:Maropitant] | 2 mg/kg PO SID | Level I |
| 食慾促進 | [藥物:Mirtazapine] | 1.88 mg/cat PO q48h | Level II |
| 補鉀 | Potassium gluconate | 2-6 mEq/day PO | Level II |

### 飲食管理要點
- **限磷**最關鍵：目標 Stage 1-2 <4.5 / Stage 3 <5.0 / Stage 4 <6.0 mg/dL
- 適量優質蛋白（貓不應過度限制）
- Omega-3 (EPA/DHA) 具腎保護作用
- 貓建議濕食

## 二、藥物/方法比較 (Comparison)

## 三、併發症與監控 (Complications & Monitoring)

| 併發症 | 處理 | 監測 |
|--------|------|------|
| 高磷血症 | 限磷飲食 + 磷結合劑 | 血磷 |
| 高血壓 | [藥物:Amlodipine] | 收縮壓（目標 <160） |
| 非再生性貧血 | [藥物:Darbepoetin] + 鐵 | PCV（目標 30-40%） |
| 代謝性酸中毒 | NaHCO3 口服 | TCO2/HCO3- |
| 低鉀血症（貓） | K-gluconate 口服 | 血鉀 |
| 脫水 | SQ fluids 居家 | 體重、皮膚彈性 |

**監測頻率**：Stage 1-2 q3-6月；Stage 3 q1-3月；Stage 4 q2-4週。每次追蹤：BUN/Cre/SDMA、電解質/磷、UPC、血壓、體重/BCS/MCS。

## 四、預後影響 (Prognostic Impact)

| IRIS 分期 | 犬中位存活 | 貓中位存活 |
|----------|----------|----------|
| Stage 1-2 | > 400 天 | > 600 天 |
| Stage 3 | 110-200 天 | 150-300 天 |
| Stage 4 | 14-80 天 | 35-100 天 |

**正面預後因子**：飲食順從性高、蛋白尿控制良好 (UPC <0.5)、血磷達標、體重穩定
**負面預後因子**：UPC >1.0、高磷血症無法控制、嚴重貧血、持續體重流失

**飼主溝通**：CKD 不可逆但可管理。飲食管理為證據最強的延壽措施。生活品質評估是治療決策核心。

## 五、人醫借鑒 (Translational Insights)

| 人醫工具/概念 | 獸醫應用潛力 | 現況 |
|-------------|-------------|------|
| SGLT2 抑制劑 (Dapagliflozin) | 貓 CKD 腎保護——EMPA-KIDNEY 人醫延伸 | 2023 年貓 CKD 臨床試驗啟動，初步結果待發表 |
| Atrasentan（內皮素受體拮抗劑） | 蛋白尿性腎病新靶點治療 | 人醫 SONAR trial 陽性，獸醫尚無數據 |
| 腎臟替代療法（CRRT） | 犬貓 AKI/急性加重期血液透析 | 獸醫轉介中心逐漸引入 |
| Finerenone（非類固醇 MRA） | 腎臟纖維化延緩 | 人醫 FIDELIO/FIGARO 陽性，獸醫探索中 |

## 六、臨床爭議與知識空缺 (Controversies & Knowledge Gaps)

| 爭議主題 | 目前立場 | 證據等級 | 研究方向 |
|---------|---------|---------|---------|
| SGLT2i 在貓 CKD | 人醫有效，獸醫尚無定論 | Level V | 貓藥動學安全性試驗 |
| 幹細胞治療 CKD | 初步有改善跡象 | Level IV | 劑量、途徑、安全性 |
| 磷早期介入（Stage 1） | IRIS 建議 Stage 2 開始 | Level II | Stage 1 即應限磷？ |
| 最佳蛋白攝取 | 適度限制非嚴格限制 | Level II-III | 貓最適蛋白需求 |`,
  clinical_pearl: '腎臟處方飲食是 CKD 管理中最有證據支持的介入措施——一個經典研究顯示犬 CKD Stage 2-3 使用腎臟處方飲食的中位存活時間是普通飲食的 2.4 倍（595 天 vs 188 天）。但許多飼主難以接受價格或動物拒食。策略：(1) 漸進式轉換（7-14 天）、(2) 嘗試不同品牌和口味（Hill\'s k/d、Royal Canin Renal、Purina NF）、(3) 必要時微波加熱增加適口性、(4) 貓優先選擇濕食配方。如果動物完全拒絕腎臟處方飲食，任何食物都比不吃好——飢餓對 CKD 貓尤其危險（FHL 風險）。',
  common_mistakes: [
    '未依 IRIS 分期制定治療計畫（不同分期的治療強度顯著不同）',
    '抗蛋白尿藥物啟動後未在 7 天追蹤 Creatinine（ACEI/ARB 可能暫時降低 GFR）',
    '磷結合劑在兩餐之間給予而非與食物混合（必須在消化過程中結合食物中的磷）',
    'CKD 貓限制蛋白質過嚴導致肌肉消耗（應適量優質蛋白，非極度限制）',
    'Darbepoetin 使用後未監測 PCV（過度紅血球增生和高血壓風險）',
  ],
  disease_data: null,
  diagnostic_data: null,
  procedure_data: null,
  visual_placeholders: [
    { position: 'IRIS 分期治療段落後', type: 'flowchart', description: 'CKD 分期治療決策流程圖' },
    { position: '藥物治療表後', type: 'comparison_table', description: 'CKD 常用藥物劑量速查表' },
  ],
  interactive_placeholders: [
    { position: '治療方案段落', type: 'interactive_staging', description: '輸入 IRIS 分期/UPC/BP/磷 自動建議治療方案' },
  ],
  drug_api_links: ['Benazepril', 'Telmisartan', 'Aluminum hydroxide', 'Darbepoetin', 'Maropitant', 'Mirtazapine', 'Amlodipine'],
  references: [
    { type: 'guideline', citation: 'IRIS (International Renal Interest Society). IRIS Treatment Recommendations (Modified 2023). Available at: http://www.iris-kidney.com/', relevance: 'CKD 治療指引標準' },
    { type: 'journal', citation: 'Jacob F et al. "Clinical evaluation of dietary modification for treatment of spontaneous chronic renal failure in dogs." J Am Vet Med Assoc. 2002;220(8):1163-1170.', relevance: '腎臟處方飲食延長存活的證據' },
    { type: 'guideline', citation: 'Lees GE et al. "Assessment and Management of Proteinuria in Dogs and Cats: ACVIM Consensus Statement." J Vet Intern Med. 2005;19(3):377-385.', relevance: '蛋白尿管理共識' },
    { type: 'textbook', citation: 'Ettinger SJ, Feldman EC. Textbook of Veterinary Internal Medicine, 8th ed. Elsevier, 2017.', relevance: 'CKD 管理教材' },
  ],
  is_current: true,
  created_at: now,
};

/** 內分泌疾病藥物治療 — L5 治療型 */
const contentEndocrineTherapy: NodeContent = {
  id: 'CONTENT-IM-L5-002',
  node_id: 'IM-L5-002',
  version: 1,
  summary: '內分泌疾病藥物治療涵蓋 Cushing（Trilostane）、甲低（Levothyroxine）、貓甲亢（Methimazole）、Addison（DOCP + Prednisolone）和糖尿病（胰島素）的標準治療方案。每種藥物都有特定的劑量調整策略、監測方式和副作用管理。',
  learning_objectives: [
    '制定各內分泌疾病的標準藥物治療方案',
    '說明各藥物的監測時程和劑量調整依據',
    '辨識各藥物的主要副作用並制定應對策略',
    '比較同類藥物的選擇依據（如 Trilostane vs Mitotane、Glargine vs PZI）',
    '制定內分泌疾病的長期管理與飼主教育計畫',
  ],
  key_points: [
    'Trilostane：1-2 mg/kg PO SID 餐後，10-14 天後 ACTH stim（給藥後 4-6h），目標 post-ACTH 1.45-5.4 μg/dL',
    'Levothyroxine：0.02 mg/kg PO BID，4-8 週後 post-pill T4（給藥後 4-6h），目標 2.5-5.0 μg/dL',
    'Methimazole：2.5 mg PO BID 起始，2-3 週後追蹤 T4 + 腎功能，目標 T4 1.0-2.5 μg/dL',
    'DOCP：2.2 mg/kg IM q25d + Prednisolone 0.1-0.2 mg/kg PO SID',
    '犬 DM：NPH 0.25-0.5 U/kg SC BID；貓 DM：Glargine 0.25-0.5 U/kg SC BID',
    '監測核心原則：正確時間點採樣 + 追蹤臨床症狀 + 定期評估共病',
  ],
  body: `# 內分泌疾病藥物治療

## 一、治療原理 (Treatment Principles)



### Cushing (HAC) 治療

| 類型 | 治療 | 藥物/方法 | 劑量 | 證據等級 |
|------|------|---------|------|---------|
| PDH 首選 | 藥物 | [藥物:Trilostane] (Vetoryl) | 1-2 mg/kg PO SID 與食物 | Level I |
| PDH 替代 | 藥物 | [藥物:Mitotane] (o,p'-DDD) | Loading 25-50 mg/kg/d x7-10d | Level II |
| ADH 腺瘤 | 手術 | 腎上腺切除術 | — | Level II |
| 大腺瘤 | 放射治療 | RT | — | Level III |

**Trilostane 監測**：ACTH stim 給藥後 4-6h。目標 post-ACTH cortisol 1.5-5.4 ug/dL。

### Addison 治療

| 情境 | 藥物 | 劑量 | 證據等級 |
|------|------|------|---------|
| 鹽皮質素 | [藥物:DOCP] (Zycortal) | 2.2 mg/kg IM/SC q25-28d | Level I |
| 鹽皮質素替代 | [藥物:Fludrocortisone] | 0.01-0.02 mg/kg PO SID-BID | Level II |
| 糖皮質素 | [藥物:Prednisolone] | 0.1-0.2 mg/kg PO SID | Level I |
| Crisis 急救 | 0.9% NaCl + [藥物:Dexamethasone] SP | 休克劑量 + 0.5-2 mg/kg IV | Level I |

### 甲低治療
[藥物:Levothyroxine] 0.02 mg/kg PO BID。Post-pill T4 4-6h 後目標 2.5-5.0 ug/dL。

### 甲亢治療
- [藥物:Methimazole] 2.5 mg PO BID（起始）——2-3 週追蹤 T4 + Cre
- **I-131 放射性碘**：唯一治癒性治療，治癒率 >95%

### DM 胰島素治療

| 物種 | 首選胰島素 | 劑量 | 飲食 |
|------|----------|------|------|
| 犬 | [藥物:NPH] 或 [藥物:Vetsulin] | 0.25-0.5 U/kg SC BID | 高纖維 |
| 貓 | [藥物:Glargine] 或 [藥物:PZI] | 0.25-0.5 U/kg SC BID | 高蛋白低碳水 |

## 二、藥物/方法比較 (Comparison)

## 三、併發症與監控 (Complications & Monitoring)

| 疾病 | 併發症 | 監測 | 處理 |
|------|--------|------|------|
| Cushing/Trilostane | 醫源性 Addison | ACTH stim | 停藥 + 類固醇 |
| Addison/DOCP | 高鈉/低鉀 | 電解質 q2wk→q3-6月 | 調整劑量/間隔 |
| 甲低/L-T4 | 醫源性甲亢 | Post-pill T4 q6月 | 減量 |
| 甲亢/Methimazole | CKD 揭露 | Cre 治療後 1-2-4 週 | 調整 T4 目標 |
| DM/Insulin | 低血糖 | BGC、居家監測 | 降低胰島素劑量 |
| DM/Insulin | Somogyi effect | BGC nadir <65→rebound | 降低劑量 |

**內分泌治療共通原則**：調整任何內分泌藥物後，至少 2 週後才評估效果（荷爾蒙效應需要時間）。

## 四、預後影響 (Prognostic Impact)

| 疾病 | 治療 | 預後 | 中位存活 |
|------|------|------|---------|
| PDH + Trilostane | 藥物 | 佳 | ~2-2.5 年 |
| Addison + DOCP | 長期管理 | 極佳 | 正常壽命 |
| 犬甲低 + L-T4 | 終身補充 | 極佳 | 正常壽命 |
| 貓甲亢 + I-131 | 治癒性 | 極佳 | > 4 年 |
| 犬 DM + 胰島素 | 終身 | 佳 | 2-3 年 |
| 貓 DM | 可能緩解 | 佳-極佳 | 緩解率 30-40% |

**飼主溝通**：多數內分泌疾病為可管理的慢性病。飼主依從性（規律投藥/回診）是成功關鍵。

## 五、人醫借鑒 (Translational Insights)

| 人醫工具/概念 | 獸醫應用潛力 | 現況 |
|-------------|-------------|------|
| GLP-1 受體促效劑 (Semaglutide) | 犬糖尿病/肥胖管理新途徑 | 人醫重磅藥物，獸醫初步研究中 |
| 連續血糖監測（CGM）如 FreeStyle Libre | 犬貓糖尿病居家血糖曲線 | 獸醫已廣泛使用，準確度驗證完善 |
| Imepitoioin（PLP 拮抗劑） | 犬 Cushing 新替代用藥 | 歐洲已核准，美國/亞洲評估中 |
| 甲狀腺分子靶向治療 | 貓甲亢術前穩定新方案 | 人醫使用成熟，獸醫探索替代方案 |

## 六、臨床爭議與知識空缺 (Controversies & Knowledge Gaps)

| 爭議主題 | 目前立場 | 證據等級 | 研究方向 |
|---------|---------|---------|---------|
| Trilostane SID vs BID | SID 起始 | Level II | 最佳給藥頻率 |
| 甲亢治療後最佳 T4 目標 | 正常低端 + 顧及腎功能 | Level III | CKD-甲亢平衡最佳化 |
| GLP-1 agonist 在貓 DM | 人醫革命性但獸醫未用 | Level V | 貓藥動學研究 |
| DOCP 最低有效劑量 | 起始 2.2 mg/kg，個別化 | Level II | 更低劑量可行性 |`,
  clinical_pearl: '內分泌藥物治療最常見的錯誤是在「錯誤的時間點」監測。每種藥物都有其最適監測時間：Trilostane 必須在給藥後 4-6 小時做 ACTH stim、Levothyroxine 必須在給藥後 4-6 小時測 post-pill T4、Methimazole 在 2-3 週後追蹤（不是立即）、胰島素在穩定 5-7 天後才做血糖曲線。在錯誤時間點採樣會導致錯誤的劑量調整，可能造成嚴重後果（如 Trilostane 過量導致 Addisonian crisis）。',
  common_mistakes: [
    '內分泌藥物監測在錯誤時間點採樣',
    'Trilostane 使用後飼主未被教育辨識 Addisonian crisis 警訊（嘔吐、虛弱、不吃）',
    'Methimazole 起始後未追蹤腎功能（甲亢控制後 CKD 揭露）',
    '胰島素劑量調整過於頻繁（每次調整應等 5-7 天觀察效果）',
    'Addison 維持治療未教導飼主壓力時加倍糖皮質素劑量',
  ],
  disease_data: null,
  diagnostic_data: null,
  procedure_data: null,
  visual_placeholders: [
    { position: '各疾病藥物表後', type: 'comparison_table', description: '內分泌疾病藥物治療速查總表' },
    { position: '監測時程段落後', type: 'timeline', description: '各內分泌藥物監測時程甘特圖' },
  ],
  interactive_placeholders: [],
  drug_api_links: ['Trilostane', 'Levothyroxine', 'Methimazole', 'DOCP', 'Fludrocortisone', 'Prednisolone', 'NPH insulin', 'Glargine', 'PZI'],
  references: [
    { type: 'textbook', citation: 'Feldman EC et al. Canine and Feline Endocrinology, 4th ed. Elsevier, 2015.', relevance: '內分泌疾病藥物治療完整參考' },
    { type: 'guideline', citation: 'Behrend E et al. "2018 AAHA Diabetes Management Guidelines for Dogs and Cats." J Am Anim Hosp Assoc. 2018;54(1):1-21.', relevance: 'DM 藥物管理指引' },
    { type: 'guideline', citation: 'Carney HC et al. "2016 AAFP Guidelines for the Management of Feline Hyperthyroidism." J Feline Med Surg. 2016;18(5):400-416.', relevance: '貓甲亢藥物管理指引' },
    { type: 'journal', citation: 'Evidence-based Management of Chronic Kidney Disease in Cats. JVIM 2016', relevance: 'CKD 管理實證參考' },
  ],
  is_current: true,
  created_at: now,
};

/** 免疫抑制治療 — L5 治療型 */
const contentImmunosuppression: NodeContent = {
  id: 'CONTENT-IM-L5-003',
  node_id: 'IM-L5-003',
  version: 1,
  summary: '免疫抑制治療用於自體免疫疾病（IMHA、ITP、IBD/CE）和免疫介導性多關節炎等。治療策略分為誘導期（高劑量快速控制）和維持期（最低有效劑量長期管理）。常用藥物包括 Prednisolone、Mycophenolate、Cyclosporine、Azathioprine 和 Chlorambucil，各有不同的作用靶點和副作用。',
  learning_objectives: [
    '制定 IMHA 的一線和二線免疫抑制治療方案',
    '比較各免疫抑制劑的作用靶點、適應症和副作用',
    '設計免疫抑制劑的緩慢減量時程',
    '說明各藥物需要監測的副作用與相應檢查',
    '處理免疫抑制治療中的繼發感染風險',
  ],
  key_points: [
    'Prednisolone 一線：IMHA 2 mg/kg/day、IBD 1-2 mg/kg/day。誘導 2-4 週後依反應每 2-4 週減 25%',
    'Mycophenolate（ACVIM IMHA 首選二線）：10 mg/kg PO BID，副作用主要為消化道（腹瀉）',
    'Cyclosporine：5-10 mg/kg PO BID（空腹），副作用嘔吐、牙齦增生、多毛',
    'Azathioprine（犬 only，禁用於貓）：2 mg/kg PO SID × 14d → 1 mg/kg q48h。監測 CBC（骨髓抑制）',
    'Chlorambucil（貓首選二線/IBD）：4-6 mg/m² PO q48h。監測 CBC（骨髓抑制）',
    '減量原則：IMHA 至少 3-6 個月、IBD 至少 2-3 個月。過快減量是復發的主要原因',
    '繼發感染風險：長期免疫抑制 → 泌尿道感染、蠕形蟎症、黴菌感染需警覺',
  ],
  body: `# 免疫抑制治療

## 一、治療原理 (Treatment Principles)



### IMHA 免疫抑制方案

| 層級 | 藥物 | 劑量 | 角色 | 證據等級 |
|------|------|------|------|---------|
| 一線 | [藥物:Prednisolone] | 2 mg/kg/day PO (ACVIM) | 基石 | Level I |
| 二線A | [藥物:Mycophenolate mofetil] | 10 mg/kg PO BID | 常用搭配 | Level II |
| 二線B | [藥物:Azathioprine] (僅犬) | 2 mg/kg PO SID→隔日 | 經典搭配 | Level II |
| 替代 | [藥物:Cyclosporine] | 5 mg/kg PO BID | 難治性 | Level III |
| 急救 | hIVIG | 0.5-1.5 g/kg IV over 6-12h | Fc blockade | Level III |

**ACVIM 2019 建議**：Prednisolone 起始 2 mg/kg/day（非更高）。減量時程：4-6 週後開始每 2-3 週減 25%，總療程 3-6 個月以上。

### IMHA 抗血栓治療

| 藥物 | 劑量 | 備註 | 證據等級 |
|------|------|------|---------|
| [藥物:Clopidogrel] | 2 mg/kg PO SID | 抗血小板 | Level II |
| Unfractionated heparin | 150-300 U/kg SC TID | 急性期 | Level III |
| Enoxaparin (LMWH) | 0.8 mg/kg SC BID | 替代 UFH | Level III |

### CE/IBD 免疫抑制

| 層級 | 藥物 | 劑量 | 適應症 | 證據等級 |
|------|------|------|--------|---------|
| 一線 | [藥物:Prednisolone] | 1-2 mg/kg PO SID→漸減 | IRE/IBD | Level I |
| 二線 | [藥物:Chlorambucil] | 4-6 mg/m2 PO q48h | 類固醇反應不佳 | Level II |
| 替代 | [藥物:Cyclosporine] | 5 mg/kg PO SID | 類固醇替代 | Level II |
| 替代 | [藥物:Mycophenolate] | 10 mg/kg PO BID | 難治性 | Level III |
| PLE 特殊 | [藥物:Budesonide] | 3 mg/m2 PO SID | 全身副作用較少 | Level II |

### 各藥物作用機轉比較

| 藥物 | 靶點 | 主要效應 | 起效時間 |
|------|------|---------|---------|
| Prednisolone | NF-kB/GR | 廣效抗炎+免疫抑制 | 24-48h |
| Mycophenolate | IMPDH | 淋巴球增殖抑制 | 1-2 週 |
| Azathioprine | Purine synthesis | T 細胞抑制為主 | 2-4 週 |
| Cyclosporine | Calcineurin | IL-2 抑制→T 細胞 | 1-2 週 |
| Chlorambucil | DNA alkylation | 淋巴球細胞毒殺 | 2-4 週 |

## 二、藥物/方法比較 (Comparison)

## 三、併發症與監控 (Complications & Monitoring)

| 藥物 | 主要副作用 | 監測 | 頻率 |
|------|----------|------|------|
| Prednisolone | PU/PD、多食、皮膚變薄、UTI | 臨床+尿培養 | 每次回診 |
| Mycophenolate | 腹瀉（劑量相關） | 糞便評分 | q1-2 週起始 |
| Azathioprine | 骨髓抑制（嗜中性球↓） | **CBC q2wk x8wk** | 起始後密集 |
| Cyclosporine | 嘔吐、牙齦增生 | 臨床+trough level | q4-8 週 |
| Chlorambucil | 骨髓抑制 | CBC q2-4wk | 持續治療期間 |

**Azathioprine 在貓禁用**——貓對此藥極度敏感，可致嚴重骨髓抑制。

**IMHA 急性期監測**：PCV q6-12h、網織紅血球 q24-48h、凝血功能 q24h、SpO2 + 呼吸型態（PTE 偵測）。

## 四、預後影響 (Prognostic Impact)

| 疾病 | 預後 | 關鍵因子 |
|------|------|---------|
| IMHA 急性存活 >2 週 | 長期預後改善 | 復發率 ~15-20% |
| IMHA 合併 PTE | 不良 | PTE 為主要死因 |
| IRE/IBD 輕-中度 | 佳 | 免疫抑制控制下可管理 |
| PLE (Alb 恢復 >2.0) | 中等 | 飲食順從性關鍵 |
| PLE (Alb 持續 <1.5) | 不良 | 中位存活 2-5 月 |

**免疫抑制減量原則**：太快減量是復發最常見原因。每 2-3 週減 25%，至少維持 3-6 月。臨床和血檢指標穩定後才減量。

## 五、人醫借鑒 (Translational Insights)

| 人醫工具/概念 | 獸醫應用潛力 | 現況 |
|-------------|-------------|------|
| JAK 抑制劑（Tofacitinib/Oclacitinib） | 犬自體免疫疾病新標靶免疫調節 | Oclacitinib 已廣泛用於皮膚科，內科應用研究中 |
| 抗 CD20 單株抗體（Rituximab） | 犬 IMHA/ITP 難治性病例 B 細胞清除 | 人醫成熟，犬抗 CD20 抗體開發中 |
| Mycophenolate mofetil (MMF) | 犬 IMHA/IBD 類固醇節約療法 | 獸醫使用經驗快速累積，PK 數據完善中 |
| 糞菌移植（FMT） | 犬 IBD/免疫失調的腸道微生態重建 | 獸醫初步臨床應用，標準化不足 |

## 六、臨床爭議與知識空缺 (Controversies & Knowledge Gaps)

| 爭議主題 | 目前立場 | 證據等級 | 研究方向 |
|---------|---------|---------|---------|
| IMHA 單藥 vs 雙藥 | ACVIM 不反對但非必須 | Level III | 前瞻性 RCT |
| Pred 2 vs 4 mg/kg/day | ACVIM 建議 2 mg/kg | Level II | 劑量-反應 RCT |
| Mycophenolate vs Azathioprine | Mycophenolate 可能起效快 | Level III | 頭對頭比較 |
| DOACs 在獸醫的角色 | 人醫取代 warfarin | Level IV | 犬用 rivaroxaban 藥動學 |
| Budesonide vs Prednisolone in CE | Budesonide 副作用少 | Level II | PLE 中等效性？ |`,
  clinical_pearl: '免疫抑制治療最常犯的錯誤是減量過快。IMHA 的復發率約 15-20%，而幾乎所有復發都發生在減量過程中。安全的減量策略是「每 2-4 週減 25%，每次減量前確認 PCV 穩定」。如果在減量過程中 PCV 開始下降，立即回到上一個有效劑量並維持更長時間。另一個重要概念：Azathioprine 的效果需要 2-4 週才出現（因為它抑制的是淋巴球增殖，不是已存在的抗體），所以加入二線藥物後不能期待立即效果。',
  common_mistakes: [
    '免疫抑制劑減量過快導致復發（IMHA 至少 3-6 個月、IBD 至少 2-3 個月）',
    '貓使用 Azathioprine（禁用——嚴重致死性骨髓抑制風險，貓應使用 Chlorambucil）',
    '未監測 Azathioprine/Chlorambucil 的骨髓抑制（CBC 每 2 週前 2 個月）',
    '長期 Prednisolone 使用未搭配消化道保護（高風險犬考慮加 Omeprazole）',
    '期待 Azathioprine 立即有效（需要 2-4 週起效）',
  ],
  disease_data: null,
  diagnostic_data: null,
  procedure_data: null,
  visual_placeholders: [
    { position: '藥物治療表後', type: 'flowchart', description: 'IMHA 免疫抑制治療階梯與減量流程圖' },
    { position: '二線藥物表後', type: 'comparison_table', description: '免疫抑制劑選擇決策比較表' },
  ],
  interactive_placeholders: [],
  drug_api_links: ['Prednisolone', 'Dexamethasone', 'Mycophenolate', 'Cyclosporine', 'Azathioprine', 'Chlorambucil', 'Leflunomide', 'Budesonide'],
  references: [
    { type: 'guideline', citation: 'Garden OA et al. "ACVIM consensus statement on the diagnosis of immune-mediated hemolytic anemia in dogs and cats." J Vet Intern Med. 2019;33(2):313-334.', relevance: 'IMHA 免疫抑制治療共識' },
    { type: 'journal', citation: 'Swann JW, Skelly BJ. "Systematic review of evidence relating to the treatment of immune-mediated hemolytic anemia in dogs." J Vet Intern Med. 2013;27(1):1-9.', relevance: '免疫抑制治療證據回顧' },
    { type: 'textbook', citation: 'Ettinger SJ, Feldman EC. Textbook of Veterinary Internal Medicine, 8th ed. Elsevier, 2017.', relevance: '免疫抑制治療教材' },
  ],
  is_current: true,
  created_at: now,
};

/** 消化系統疾病治療 — L5 治療型 */
const contentGITherapy: NodeContent = {
  id: 'CONTENT-IM-L5-004',
  node_id: 'IM-L5-004',
  version: 1,
  summary: '消化系統疾病治療涵蓋慢性腸病（CE/IBD）的階梯式治療、胰臟炎的急性支持療法、PLE 的綜合管理和肝臟疾病的藥物治療。飲食管理是消化系統治療的基石，藥物治療應以階梯式策略進行。',
  learning_objectives: [
    '制定 CE 的階梯式治療方案（飲食 → 抗生素 → 免疫抑制）',
    '設計胰臟炎的急性期支持療法方案',
    '制定 PLE 的綜合管理策略（飲食 + 免疫抑制 + 併發症管理）',
    '選擇肝臟疾病的適當藥物治療（SAMe、UDCA、抗纖維化）',
    '說明 Cobalamin 補充在消化道疾病中的重要性',
  ],
  key_points: [
    'CE 階梯治療：飲食試驗（水解蛋白/新型蛋白 2-4 週）→ 抗生素試驗（Metronidazole/Tylosin 2-4 週）→ 免疫抑制（Prednisolone ± 二線）',
    '胰臟炎急性期四大支柱：輸液、止痛、止吐、早期營養',
    'PLE 飲食核心：淋巴管擴張型需超低脂（< 10% DM）+ MCT oil；IBD 型需水解蛋白',
    'Cobalamin（B12）補充：犬 250-1500 μg SC q1wk × 6wk → q2wk × 6wk → q1mo。或口服高劑量每日',
    'SAMe 20 mg/kg PO SID（空腹）：肝臟保護——提供 glutathione 前驅物 + 抗氧化',
    'UDCA 10-15 mg/kg PO SID：親水性膽汁酸——取代毒性膽汁酸、促進膽汁流、抗凋亡',
    '止吐藥物：Maropitant 1-2 mg/kg PO/SC SID（NK1 receptor antagonist）、Ondansetron 0.5-1 mg/kg PO/IV BID（5-HT3 antagonist）',
  ],
  body: `# 消化系統治療

## 一、治療原理 (Treatment Principles)



### 慢性腸病 (CE) 階梯式治療

| 層級 | 治療 | 方法 | 適應症 | 證據等級 |
|------|------|------|--------|---------|
| 第一層 | **飲食試驗** | 水解蛋白或新型蛋白飲食 2-8 週 | 所有 CE 首先 | Level I |
| 第二層 | 抗生素 | [藥物:Metronidazole] 10-15 mg/kg BID 4-6wk | FRE 無效時 | Level II |
| 第二層 | 抗生素替代 | [藥物:Tylosin] 25 mg/kg BID | ARE 替代 | Level II |
| 第三層 | 免疫抑制 | [藥物:Prednisolone] 1-2 mg/kg SID→漸減 | IRE/IBD 確診 | Level I |
| 第三層+ | 合併免疫抑制 | [藥物:Chlorambucil] 4-6 mg/m2 q48h | 類固醇反應不佳 | Level II |
| 營養 | B12 補充 | [藥物:Cobalamin] 250-1500 ug SC q1-2wk | 所有 CE | Level I |
| 新興 | FMT | 糞便微生物移植 | 難治性 CE | Level III |

### PLE 特殊治療
- **超低脂飲食** (<15% DM fat) + MCT oil——淋巴管擴張核心治療
- 免疫抑制（IBD 相關 PLE）
- [藥物:Clopidogrel] 2 mg/kg PO SID（Alb <2.0 抗血栓）
- FFP 或人血白蛋白（Alb <1.5）

### 胰臟炎治療

| 措施 | 藥物/方法 | 劑量 | 證據等級 |
|------|----------|------|---------|
| 輸液 | LRS 或 PlasmaLyte IV | 矯正脫水 + 維持 | Level I |
| 止痛 | [藥物:Buprenorphine] | 0.01-0.02 mg/kg IV q6-8h | Level I |
| 止痛重症 | [藥物:Fentanyl] CRI | 2-5 ug/kg/hr IV | Level II |
| 止吐 | [藥物:Maropitant] | 1 mg/kg SC/IV SID | Level I |
| 營養 | 腸道營養（鼻食道管） | 24h 內啟動 | Level I |

**重要**：禁食不再建議超過 24 小時——早期腸道營養維護腸道屏障。

### FHL 治療
- **食道管營養**為核心（14-18 Fr，留置 3-6 週）
- 漸增熱量（Day 1: 25-33% RER → Day 4-5: 100% RER）
- [藥物:Vitamin K1] 0.5-1.5 mg/kg SC BID x3（FNA 前必給）
- [藥物:SAMe] 90 mg/cat PO SID + [藥物:L-Carnitine] 250-500 mg/cat/day
- 監測再餵食症候群（前 48h q12h 電解質）

## 二、藥物/方法比較 (Comparison)

## 三、併發症與監控 (Complications & Monitoring)

| 疾病 | 併發症 | 監測 | 頻率 |
|------|--------|------|------|
| CE/PLE | Cobalamin 缺乏 | 血清 Cobalamin | q3-6 月 |
| CE/PLE | 血栓栓塞 (Alb <2.0) | AT-III 活性/臨床徵兆 | 每次回診 |
| 胰臟炎 | SIRS/DIC | 體溫/HR/RR/凝血 | q6-12h 住院 |
| 胰臟炎 | 肝外膽管阻塞（貓） | Bilirubin/超音波 | q48h |
| FHL | 再餵食症候群 | 磷/鉀/鎂 | q12h 前 48h |
| FHL | 凝血異常 | PT/aPTT | 治療前+追蹤 |

**CE 追蹤指標**：CCECAI 評分 q4-8wk、Albumin（PLE q2-4wk）、體重/BCS/MCS、Cobalamin q3-6月。

## 四、預後影響 (Prognostic Impact)

| 疾病/亞型 | 預後 | 關鍵因子 |
|----------|------|---------|
| FRE | 極佳 | 飲食控制下長期緩解 |
| IRE/IBD 輕-中度 | 佳 | CCECAI <10 |
| PLE (Alb 恢復 >2.0) | 中等 | 飲食順從性 |
| PLE (Alb <1.5 持續) | 不良 | 2-5 月 |
| 犬輕度胰臟炎 | 良好 | 復發率 30-40% |
| 犬重度壞死性胰臟炎 | 謹慎 | 死亡率 25-50% |
| FHL + 積極營養 | 佳 | 存活率 >80%（原發性） |

**飼主溝通**：CE 多數可良好控制。飲食管理是基礎——即使用藥也需持續。胰臟炎犬需終身低脂飲食。FHL 食道管灌食是救命措施不是最後手段。

## 五、人醫借鑒 (Translational Insights)

| 人醫工具/概念 | 獸醫應用潛力 | 現況 |
|-------------|-------------|------|
| 糞菌移植（FMT） | 犬急慢性腸炎/難治型 IBD 腸道微生態重建 | 獸醫多中心回顧性研究陽性，前瞻性試驗進行中 |
| 生物製劑（抗 TNF-α/抗 IL-12/23） | 犬 IBD 難治病例精準免疫治療 | 人醫 IBD 標準治療，犬專用生物製劑開發中 |
| 新型止吐劑 Maropitant 延伸適應症 | 犬貓嘔吐以外的腸道發炎抗效果 | 抗炎機轉已確認，臨床應用擴展中 |
| 低 FODMAP 飲食治療 | 犬 IBD 飲食管理精緻化 | 人醫 IBS 標準治療，獸醫營養學探索中 |

## 六、臨床爭議與知識空缺 (Controversies & Knowledge Gaps)

| 爭議主題 | 目前立場 | 證據等級 | 研究方向 |
|---------|---------|---------|---------|
| FMT 最佳方案 | 有效但標準化不足 | Level III | 供體/頻率/途徑 |
| 抗生素在 CE 的角色 | 傾向減少使用 | Level II | dysbiosis 長期影響 |
| Cobalamin 口服 vs 注射 | 兩者可能等效 | Level II | PLE 特異性研究 |
| 貓三體炎最佳治療順序 | 先穩定胰臟炎 | Level IV | 同時 vs 序貫治療 |
| SAMe 在肝病的效益 | 廣泛使用但 RCT 不足 | Level III | 犬貓特異性 RCT |`,
  clinical_pearl: '在 CE 的階梯式治療中，飲食試驗的「嚴格執行」是最關鍵也最常失敗的環節。約 50-60% 的 CE 犬是食物反應性的——只要換對飲食就能控制。但飲食試驗失敗的最常見原因不是「飲食無效」，而是「飼主執行不嚴格」。任何零食、潔牙骨、有味道的藥物膠囊、甚至其他寵物的食物都可能導致試驗失敗。因此在開始飲食試驗前，必須花時間和飼主溝通「絕對嚴格」的重要性。另外，Cobalamin 補充是所有 CE 治療中最容易被遺忘但影響預後的步驟——B12 缺乏是獨立的不良預後因子。',
  common_mistakes: [
    '飲食試驗不夠嚴格（飼主偷餵零食或其他食物，導致假性「無反應」）',
    '胰臟炎禁食超過 24 小時（現代觀點建議早期腸道營養）',
    '所有 CE 都未測 Cobalamin（B12 缺乏影響預後且容易補充）',
    '淋巴管擴張型 PLE 使用高脂飲食（需超低脂）',
    'SAMe 與食物同時給予（需空腹以確保吸收）',
    'Albumin < 1.5 g/dL 的 PLE 犬未啟動抗血栓治療',
  ],
  disease_data: null,
  diagnostic_data: null,
  procedure_data: null,
  visual_placeholders: [
    { position: 'CE 階梯治療段落後', type: 'flowchart', description: 'CE 階梯式治療決策流程圖' },
    { position: '肝臟藥物表後', type: 'comparison_table', description: '消化系統常用藥物劑量速查表' },
  ],
  interactive_placeholders: [],
  drug_api_links: ['Prednisolone', 'Budesonide', 'Metronidazole', 'Tylosin', 'Chlorambucil', 'Maropitant', 'Ondansetron', 'SAMe', 'Ursodiol', 'Cobalamin', 'Clopidogrel', 'Buprenorphine'],
  references: [
    { type: 'journal', citation: 'Makielski K et al. "Narrative review of therapies for chronic enteropathies in dogs and cats." J Vet Intern Med. 2019;33(1):11-22.', relevance: 'CE 治療策略回顧' },
    { type: 'guideline', citation: 'Forman MA et al. "ACVIM consensus statement on pancreatitis in cats." J Vet Intern Med. 2021;35(2):703-723.', relevance: '胰臟炎治療共識' },
    { type: 'journal', citation: 'Craven MD, Washabau RJ. "Comparative pathophysiology and management of protein-losing enteropathy." J Vet Intern Med. 2019;33(2):383-402.', relevance: 'PLE 管理綜合回顧' },
    { type: 'textbook', citation: 'Washabau RJ, Day MJ. Canine and Feline Gastroenterology. Elsevier, 2013.', relevance: '消化系統疾病治療教材' },
  ],
  is_current: true,
  created_at: now,
};

/** 以 Map 方式匯出，方便用 nodeId 快速查找 */
export const IM_CONTENTS = new Map<string, NodeContent>([
  // L0 Overview
  ['IM-L0-001', contentIMOverview],
  // L1 Basic Science
  ['IM-L1-001', contentRenalPhysiology],
  ['IM-L1-002', contentImmunologyBasics],
  ['IM-L1-003', contentGIPhysiology],
  ['IM-L1-004', contentEndocrinePhysiology],
  // L2 Mechanisms
  ['IM-L2-001', contentRenalInjury],
  ['IM-L2-002', contentAutoimmuneMechanism],
  ['IM-L2-003', contentGIInflammation],
  ['IM-L2-004', contentHepaticInjury],
  ['IM-L2-005', contentAcidBase],
  // L3 Clinical Diseases
  ['IM-L3-001', contentCushings],
  ['IM-L3-002', contentHypothyroidism],
  ['IM-L3-003', contentFelineHyperthyroidism],
  ['IM-L3-004', contentCKD],
  ['IM-L3-005', contentIMHA],
  ['IM-L3-006', contentDM],
  ['IM-L3-007', contentCE],
  ['IM-L3-008', contentPancreatitis],
  ['IM-L3-009', contentHepaticLipidosis],
  ['IM-L3-010', contentTickBorne],
  ['IM-L3-011', contentAddisons],
  ['IM-L3-012', contentPLE],
  // L4 Diagnostics
  ['IM-L4-001', contentEndocrineTests],
  ['IM-L4-002', contentUrinalysis],
  ['IM-L4-003', contentAbdoUS],
  ['IM-L4-004', contentGIEndoscopy],
  // L5 Therapeutics
  ['IM-L5-001', contentCKDManagement],
  ['IM-L5-002', contentEndocrineTherapy],
  ['IM-L5-003', contentImmunosuppression],
  ['IM-L5-004', contentGITherapy],
]);
