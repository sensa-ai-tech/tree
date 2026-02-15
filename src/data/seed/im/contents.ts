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
  body: `# 慢性腎病 (CKD)

## 概述

慢性腎病是不可逆的腎功能進行性喪失。犬貓均好發，貓尤其常見。CKD 的核心病理為腎元（nephron）數量減少與腎小管間質纖維化。

## IRIS 分期系統 (2023 更新)

| Stage | 犬 Creatinine | 貓 Creatinine | SDMA | 臨床特徵 |
|-------|-------------|-------------|------|---------|
| 1 | < 1.4 mg/dL | < 1.6 mg/dL | < 18 | 無氮血症，可能有多渴多尿 |
| 2 | 1.4-2.8 | 1.6-2.8 | 18-35 | 輕度氮血症，多渴多尿 |
| 3 | 2.9-5.0 | 2.9-5.0 | 36-54 | 中度氮血症，食慾下降 |
| 4 | > 5.0 | > 5.0 | > 54 | 重度氮血症，尿毒症 |

### 亞分期

- **蛋白尿**：UPC < 0.2（非蛋白尿）、0.2-0.5（邊緣蛋白尿）、> 0.5（蛋白尿）
- **血壓**：< 140 mmHg（正常）、140-159（輕度升高）、160-179（中度升高）、≥ 180（重度升高）

## 治療策略

### Stage 1-2
- 腎臟處方飲食（限磷、適量優質蛋白）
- 確保充足飲水（貓建議濕食）
- 抗蛋白尿治療（UPC > 0.5）：Benazepril 0.5 mg/kg PO SID 或 Telmisartan 1 mg/kg PO SID

### Stage 3-4
- 上述 + 磷結合劑（Aluminum hydroxide、Lanthanum carbonate）
- 止吐劑（Maropitant, Ondansetron）
- 考慮皮下輸液
- 貧血管理（Darbepoetin alpha）
- 鉀補充（口服 K-citrate）`,
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
  body: `# 壁蝨媒介疾病：艾利希體症與焦蟲症

## 犬艾利希體症 (Canine Ehrlichiosis)

### 病原
- Ehrlichia canis：專性細胞內寄生菌，感染單核球

### 臨床分期
1. **急性期**（感染後 1-3 週）：發燒、血小板減少、鼻出血、淋巴結腫大
2. **亞臨床期**（數月至數年）：臨床症狀消退但持續感染，血小板持續低下
3. **慢性期**：全血球減少、骨髓發育不全、繼發免疫複合體腎病

### 診斷
- CBC：血小板減少（最敏感指標）、非再生性貧血
- 血清學：SNAP 4Dx Plus 快篩（IFA 確認）
- PCR：確認活動性感染

## 犬焦蟲症 (Canine Babesiosis)

### 病原
- B. canis（大焦蟲）：紅血球內可見成對梨形蟲體
- B. gibsoni（小焦蟲）：較小、單個環形，台灣主要型別

### 臨床表現
- 溶血性貧血（再生性）、黃疸、脾腫大
- 可合併 DIC、急性腎損傷、SIRS

## 台灣流行病學

台灣地處亞熱帶，全年均有壁蝨活動。南部與東部犬隻盛行率更高。流浪犬與未定期除蝨犬為高風險群。`,
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
  body: `# 尿液分析與腎功能評估

## 採集方式
- **膀胱穿刺（Cystocentesis）**：金標準，避免汙染
- **導尿（Catheterization）**：適用於阻塞病患
- **自然排尿（Free catch）**：適用於 USG 和 dipstick，不適合培養

## 物理性質
- **外觀**：正常為淡黃至深黃色透明
- **比重（USG）**：折射計測量。犬 1.015-1.045 正常，貓 1.035-1.060 正常

### USG 判讀重點
| USG 範圍 | 意義 |
|----------|------|
| > 1.030 犬 / > 1.035 貓 | 濃縮尿（腎功能正常） |
| 1.013-1.029 犬 / 1.013-1.034 貓 | 不適當稀釋（灰色地帶） |
| 1.008-1.012 | 等張尿（腎臟濃縮功能喪失） |
| < 1.008 | 低張尿（需排除中樞性尿崩症） |

## 化學性質（Dipstick）
- pH：犬貓 5.5-7.5
- 蛋白質：需搭配 USG 解讀（稀釋尿 trace = 不正常）
- 葡萄糖：正常陰性（犬腎閾 > 180 mg/dL，貓 > 280 mg/dL）
- 膽紅素：犬少量正常（濃縮尿中），貓任何量均異常

## 沉渣檢查
- 紅血球：< 5/HPF（膀胱穿刺）
- 白血球：< 5/HPF
- 上皮細胞：少量移行上皮正常
- 管型：透明管型少量正常，顆粒管型/蠟樣管型提示腎小管損傷
- 結晶：Struvite（MAP）和 CaOx 最常見`,
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
  ],
  is_current: true,
  created_at: now,
};

/** 以 Map 方式匯出，方便用 nodeId 快速查找 */
export const IM_CONTENTS = new Map<string, NodeContent>([
  ['IM-L3-004', contentCKD],
  ['IM-L3-010', contentTickBorne],
  ['IM-L4-002', contentUrinalysis],
]);
