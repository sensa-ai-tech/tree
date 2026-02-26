import type { NodeContent } from '@/types/knowledge';

const now = '2026-02-15T00:00:00Z';

/** 全血球計數判讀 — 診斷型 */
const contentCBC: NodeContent = {
  id: 'CONTENT-CPATH-L4-001',
  node_id: 'CPATH-L4-001',
  version: 1,
  summary: '全血球計數（CBC）是最基礎也最常用的血液學檢查，包含紅血球、白血球與血小板三大部分的定量與形態評估。正確判讀 CBC 是所有獸醫臨床專科的基本能力。',
  learning_objectives: [
    '解釋 CBC 各項參數的臨床意義',
    '判讀紅血球相關指標（PCV/HCT、MCV、MCHC、reticulocyte count）',
    '判讀白血球分類計數與左移（left shift）的意義',
    '評估血小板數量與形態異常',
    '整合 CBC 結果與臨床表現制定鑑別診斷',
  ],
  key_points: [
    'PCV/HCT：犬正常 37-55%，貓 30-45%',
    'MCV 分類貧血為大球、正球、小球性',
    '嗜中性球左移：band neutrophils > 1000/μL 提示急性發炎',
    '血小板 < 50,000/μL 時有自發出血風險',
    '永遠要搭配血液抹片（blood smear）確認自動分析儀結果',
  ],
  body: `# 全血球計數 (CBC) 判讀

## 一、檢查原理與適應症 (Principles & Indications)



### 概述
CBC 是臨床最常規的血液學檢查，提供紅血球系列、白血球系列與血小板的定量資訊。

### 紅血球評估
### 貧血分類
- **再生性貧血**：reticulocyte count 升高（犬 > 60,000/μL），提示溶血或失血
- **非再生性貧血**：reticulocyte count 正常或降低，提示骨髓問題或慢性疾病

### MCV 分類
| 類型 | MCV | 常見原因 |
|------|-----|---------|
| 小球性 | 降低 | 缺鐵、門體分流 |
| 正球性 | 正常 | 慢性疾病、急性失血 |
| 大球性 | 升高 | 再生性貧血、FeLV、藥物 |

### 白血球評估
### 白血球分類計數
- 嗜中性球：犬 3000-11,500/μL，貓 2500-12,500/μL
- 淋巴球：犬 1000-4800/μL，貓 1500-7000/μL
- 單核球：犬 150-1350/μL
- 嗜酸性球：犬 100-1250/μL

### Stress leukogram（皮質醇反應）
- 嗜中性球增多 + 淋巴球減少 + 嗜酸性球減少 + 單核球增多

### 血小板評估
- 正常：犬 175,000-500,000/μL，貓 175,000-600,000/μL
- < 50,000/μL：自發出血風險
- EDTA 偽性血小板減少症（貓常見）：需用枸櫞酸管複驗

## 二、判讀要點 (Interpretation)

## 三、常見陷阱 (Pitfalls)

## 四、人醫借鑒 (Translational Insights)

| 人醫工具/概念 | 獸醫應用潛力 | 現況 |
|-------------|-------------|------|
| AI 輔助血液抹片判讀（digital morphology） | 犬貓自動白血球分類與異常 flag 覆核，減少人工判讀量 | 人醫 CellaVision 等系統成熟，獸醫專用演算法開發中 |
| 網狀紅血球血紅素含量（Ret-He / CHr） | 早期偵測犬缺鐵性貧血，優於 MCV 變化速度 | 人醫已納入缺鐵診斷流程，獸醫 ADVIA/Sysmex 可提供但缺乏犬貓參考區間 |
| Immature platelet fraction（IPF） | 區分血小板減少的生成減少 vs 消耗/破壞機制 | 人醫 ITP 診斷輔助，獸醫 Sysmex 可測定，初步研究支持臨床應用 |

## 五、臨床爭議與知識空缺 (Controversies & Knowledge Gaps)

| 爭議議題 | 現況 | Evidence Level |
|---------|------|---------------|
| 自動分析儀白血球分類計數 vs 人工 100-cell differential 的臨床等效性 | 高階分析儀（Sysmex、ADVIA）對正常樣本一致性佳，但異常樣本（左移、blast）仍需人工確認 | Level II |
| 貓 EDTA 偽性血小板減少的最佳替代方案 | 枸櫞酸管複驗 vs 血液抹片估算 vs Sysmex 光學法，尚無統一共識 | Level III |
| 犬網狀紅血球計數的標準化：絕對值 vs 百分比 vs 校正值（CRC） | ASVCP 建議使用絕對值，但不同分析儀的計數方法與參考區間差異大 | Level III |`,
  clinical_pearl: '永遠不要只看數值——血液抹片是 CBC 判讀的「第六感」。自動分析儀可能將有核紅血球（nRBC）計為白血球，或將血小板聚集誤判為血小板減少。每份 CBC 報告都應搭配抹片確認。',
  common_mistakes: [
    '僅看自動分析儀數據而不確認血液抹片',
    '忽略貓的 EDTA 偽性血小板減少',
    '將皮質醇反應的 stress leukogram 誤判為感染',
    '未用 reticulocyte count 區分再生性與非再生性貧血',
  ],
  disease_data: null,
  diagnostic_data: {
    indication: ['常規健康檢查', '貧血評估', '感染/發炎評估', '出血傾向評估', '化療監測', '術前評估'],
    contraindication: ['無絕對禁忌症'],
    technique: '採集 EDTA 抗凝全血 1-2 mL。使用自動血液分析儀進行計數，同時製作血液抹片（wedge smear）進行人工確認。樣本應在採集後 4 小時內分析，或冷藏保存（4°C，24 小時內）。',
    normal_findings: [
      { finding: 'PCV/HCT', description: '犬 37-55%，貓 30-45%', significance: '紅血球容積比，評估貧血或紅血球增多' },
      { finding: 'WBC', description: '犬 5,500-16,900/μL，貓 5,500-19,500/μL', significance: '白血球總數，評估感染、發炎、壓力反應' },
      { finding: 'PLT', description: '犬 175,000-500,000/μL，貓 175,000-600,000/μL', significance: '血小板數量，評估出血風險' },
    ],
    abnormal_findings: [
      { finding: '貧血 (PCV 降低)', description: 'PCV 低於參考範圍下限', significance: '需進一步分類：再生性 vs 非再生性、小球 vs 正球 vs 大球' },
      { finding: '白血球增多', description: 'WBC 高於參考範圍上限', significance: '感染、發炎、壓力反應、腫瘤（白血病）' },
      { finding: '血小板減少', description: 'PLT < 175,000/μL', significance: '免疫介導、DIC、骨髓抑制、消耗性。< 50,000 有出血風險' },
      { finding: '左移 (Left shift)', description: 'Band neutrophils > 1000/μL', significance: '急性發炎或感染，骨髓正在釋出未成熟細胞' },
    ],
    interpretation_guide: '1. 先看 PCV/HCT 評估貧血/紅血球增多。2. 看 WBC 總數及分類計數。3. 評估血小板數量。4. 確認血液抹片形態。5. 整合臨床症狀。',
    pitfalls: [
      '脂血/溶血樣本影響自動分析儀準確性',
      '貓血小板聚集導致假性血小板減少',
      '有核紅血球（nRBC）干擾白血球計數',
      '未在血液抹片上確認自動分析儀的異常flag',
    ],
    sensitivity_specificity: 'CBC 為篩檢工具，對特定疾病的敏感度和特異度取決於所評估的參數。需結合臨床表現與其他檢查綜合判斷。',
    cost_benefit: '成本低廉，為最基礎的血液學檢查。幾乎所有臨床情境的第一線篩檢工具，CP 值極高。',
  },
  procedure_data: null,
  visual_placeholders: [
    { position: '紅血球評估段落後', type: 'comparison_table', description: '貧血分類流程圖' },
    { position: '白血球評估段落後', type: 'annotated_image', description: '血液抹片各種白血球辨識圖' },
  ],
  interactive_placeholders: [
    { position: 'CBC 判讀練習', type: 'interactive_quiz', description: '輸入 CBC 數據，判讀正常/異常並給出鑑別診斷' },
  ],
  drug_api_links: [],
  references: [
    { type: 'textbook', citation: 'Stockham SL, Scott MA. Fundamentals of Veterinary Clinical Pathology, 2nd ed. Blackwell, 2008.', relevance: 'CBC 判讀標準參考教材' },
    { type: 'textbook', citation: 'Ettinger SJ, Feldman EC. Textbook of Veterinary Internal Medicine, 8th ed. Elsevier, 2017.', relevance: '血液學異常的臨床意義' },
    { type: 'journal', citation: 'Tvedten H. "Laboratory and Clinical Diagnosis of Anemia." In: Weiss DJ, Wardrop KJ, eds. Schalm\'s Veterinary Hematology, 6th ed. 2010:152-161.', relevance: '貧血分類與診斷流程' },
    { type: 'guideline', citation: 'ASVCP Quality Assurance and Laboratory Standards Committee. "Principles of quality assurance and standards for veterinary clinical pathology." Vet Clin Pathol. 2009;38(2):141-149.', relevance: 'ASVCP 獸醫實驗室品質保證指引——CBC 品管標準' },
  ],
  is_current: true,
  created_at: now,
};

/** 血液學基礎 — 概念型 */
const contentHemaBasics: NodeContent = {
  id: 'CONTENT-CPATH-L1-001',
  node_id: 'CPATH-L1-001',
  version: 1,
  summary: '血液學基礎涵蓋造血系統的發育、血球生成調控、及各血球細胞系列的正常形態與功能。此模組為所有血液學診斷判讀的基石，適用全專科。',
  learning_objectives: [
    '描述骨髓造血的基本過程與調控因子（EPO、TPO、G-CSF）',
    '辨識犬貓周邊血液中各類正常血球的形態特徵',
    '說明紅血球、白血球與血小板的壽命與代謝途徑',
    '解釋網狀紅血球計數在評估骨髓再生能力的角色',
    '區分犬與貓血液學參數的物種差異',
  ],
  key_points: [
    '造血幹細胞（HSC）位於骨髓，分化為骨髓系與淋巴系兩大譜系',
    '紅血球生成受 erythropoietin（EPO）調控，主要由腎臟產生',
    '犬紅血球壽命約 110 天，貓約 70 天——貓的紅血球代謝較快',
    '貓的嗜中性球不含 alkaline phosphatase，染色反應與犬不同',
    '正常犬血液抹片可見少量 Howell-Jolly bodies，貓更常見',
    '貓紅血球較小（MCV 39-55 fL），正常可見輕度中央蒼白區不明顯',
    '血小板由巨核細胞胞質碎裂產生，受 thrombopoietin（TPO）調控',
    '白血球分類以嗜中性球為主（犬 60-77%，貓 35-75%）',
  ],
  body: `# 血液學基礎 (Hematology Basics)

## 一、核心概念與機轉 (Core Concept & Mechanism)



### 造血系統概述
造血（hematopoiesis）主要發生在成年動物的骨髓中。造血幹細胞（hematopoietic stem cell, HSC）具有自我更新與多能分化能力，分化為兩大譜系：

- **骨髓系（myeloid lineage）**：紅血球、顆粒球（嗜中性球、嗜酸性球、嗜鹼性球）、單核球、血小板
- **淋巴系（lymphoid lineage）**：T 淋巴球、B 淋巴球、NK 細胞

### 紅血球系列
### 正常紅血球生成
紅血球生成受腎臟分泌的 erythropoietin（EPO）調控。低氧刺激 EPO 釋放，促進骨髓紅血球前驅細胞增殖與成熟。

### 犬貓差異
| 參數 | 犬 | 貓 |
|------|-----|-----|
| RBC 壽命 | ~110 天 | ~70 天 |
| MCV | 60-74 fL | 39-55 fL |
| 網狀紅血球 | 聚集型為主 | 聚集型+點狀型 |
| Rouleaux | 輕度正常 | 明顯正常 |

貓的網狀紅血球分為聚集型（aggregate）與點狀型（punctate），臨床上以聚集型計數評估再生反應。

### 白血球系列
嗜中性球為犬貓最豐富的白血球。犬的嗜中性球壽命在組織中約 1-4 天，循環池與邊緣池比例約 1:1。貓的邊緣池較大（邊緣池:循環池 ≈ 3:1），因此貓更容易因興奮或壓力出現假性白血球增多。

### 血小板系列
血小板由骨髓巨核細胞（megakaryocyte）的胞質碎裂而來，受 thrombopoietin（TPO）調控。犬血小板直徑 3-5 μm；貓血小板可較大且變異性高，容易與小紅血球混淆。

## 二、臨床意義 (Clinical Significance)

## 三、人醫借鑒 (Translational Insights)

| 人醫工具/概念 | 獸醫應用潛力 | 現況 |
|-------------|-------------|------|
| 造血幹細胞移植（HSCT） | 犬淋巴瘤/白血病的根治性治療選項 | 人醫成熟技術，獸醫限於少數學術中心研究 |
| 單細胞 RNA 定序（scRNA-seq） | 精確描繪犬貓造血細胞分化圖譜與疾病異質性 | 人醫血液學前沿，獸醫已有犬骨髓/PBMC atlas 初步數據 |
| Thrombopoietin 受體促效劑（romiplostim） | 犬免疫介導血小板減少症（ITP）的潛在輔助治療 | 人醫 ITP 標準治療，獸醫個案報告顯示療效，缺乏大型試驗 |

## 四、臨床爭議與知識空缺 (Controversies & Knowledge Gaps)

| 爭議議題 | 現況 | Evidence Level |
|---------|------|---------------|
| 犬貓品種特異性血液學參考區間 | 灰狗 PCV 偏高/嗜中性球偏低、秋田犬 MCV 偏大、緬甸貓 MCV 偏低，通用區間不適用 | Level II |
| 貓聚集型 vs 點狀型網狀紅血球的臨床意義 | 僅聚集型反映急性再生反應，但不同分析儀對兩型的區分能力差異大 | Level III |
| 犬嗜酸性球增多症的疾病特異性閾值 | 輕度增多（< 1500/μL）非特異性，但缺乏犬貓各疾病的 ROC 切點研究 | Level IV |`,
  clinical_pearl: '貓的邊緣池白血球數量是循環池的 3 倍，因此僅因壓力或興奮就可能使 WBC 升高 2-3 倍。採血時貓掙扎造成的「假性白血球增多」是臨床最常見的判讀陷阱之一。',
  common_mistakes: [
    '忽略犬貓血液學參數的物種差異，用犬的參考範圍判讀貓的結果',
    '未區分貓網狀紅血球的聚集型與點狀型，高估再生反應',
    '將貓壓力性白血球增多（成熟嗜中性球 + 淋巴球增多）誤判為感染',
    '忽略貓紅血球較小的特性，將正常 MCV 誤判為小球性貧血',
  ],
  disease_data: null,
  diagnostic_data: null,
  procedure_data: null,
  visual_placeholders: [
    { position: '造血系統概述後', type: 'flowchart', description: '造血幹細胞分化譜系圖' },
    { position: '犬貓差異表格後', type: 'comparison_table', description: '犬貓正常血液抹片形態比較圖' },
  ],
  interactive_placeholders: [
    { position: '文末', type: 'interactive_quiz', description: '犬貓血液學參數物種差異辨識測驗' },
  ],
  drug_api_links: [],
  references: [
    { type: 'textbook', citation: 'Stockham SL, Scott MA. Fundamentals of Veterinary Clinical Pathology, 2nd ed. Blackwell, 2008.', relevance: '血液學基礎核心教材' },
    { type: 'textbook', citation: 'Weiss DJ, Wardrop KJ. Schalm\'s Veterinary Hematology, 6th ed. Wiley-Blackwell, 2010.', relevance: '造血系統與血球形態學權威參考' },
    { type: 'textbook', citation: 'Harvey JW. Veterinary Hematology: A Diagnostic Guide and Color Atlas. Elsevier, 2012.', relevance: '血球形態辨識圖譜' },
    { type: 'guideline', citation: 'Garden OA, Kidd L, Mexas AM, et al. ACVIM consensus statement on the diagnosis of immune-mediated hemolytic anemia in dogs and cats. J Vet Intern Med. 2019;33(2):313-334.', relevance: 'ACVIM 免疫介導溶血性貧血診斷共識——血液學基礎應用' },
    { type: 'journal', citation: 'Knoll JS, Rowell SL. Clinical hematology: In-clinic analysis, quality assurance, and clinical decision-making. Vet Clin North Am Small Anim Pract. 2012;42(1):1-11.', relevance: '臨床血液學品管與決策制定' },
  ],
  is_current: true,
  created_at: now,
};

/** 臨床化學基礎 — 概念型 */
const contentChemBasics: NodeContent = {
  id: 'CONTENT-CPATH-L1-002',
  node_id: 'CPATH-L1-002',
  version: 1,
  summary: '臨床化學基礎涵蓋血清生化檢驗的原理、主要器官相關酵素與代謝物的來源與代謝途徑，以及影響結果判讀的分析前因素。為所有生化判讀的前置知識。',
  learning_objectives: [
    '說明常見血清酵素（ALT、AST、ALP、GGT、CK）的組織來源與半衰期',
    '描述腎功能指標（BUN、creatinine、SDMA）的生理基礎',
    '解釋蛋白質（TP、albumin、globulin）的合成與分解途徑',
    '區分 cholestatic 與 hepatocellular 酵素模式',
    '列舉影響生化結果的主要分析前因素',
  ],
  key_points: [
    'ALT 為犬的肝細胞特異性酵素，貓的 ALT 特異性略低（肌肉也含少量）',
    'ALP 在犬有肝臟型、骨骼型與皮質醇誘導型三種同功酶；貓僅有肝臟型與骨骼型',
    'BUN 受飲食蛋白質、肝功能與腎功能共同影響，不如 creatinine 具腎臟特異性',
    'SDMA 在 GFR 下降約 25% 時即升高，比 creatinine 更早偵測腎功能損傷',
    'Albumin 僅在肝臟合成，半衰期犬約 8 天、貓約 7 天',
    '溶血最常干擾的項目：AST↑、potassium↑、bilirubin↑、lipase↑',
    '脂血干擾比色法檢測，可能造成假性升高或降低',
    '犬貓 ALP 半衰期差異大：犬約 70 小時，貓僅約 6 小時',
  ],
  body: `# 臨床化學基礎 (Clinical Chemistry Basics)

## 一、核心概念與機轉 (Core Concept & Mechanism)



### 概述
臨床化學（clinical chemistry）利用血清或血漿中的酵素活性、代謝產物濃度來評估器官功能與代謝狀態。正確判讀需先了解各指標的組織來源與生理意義。

### 肝臟相關指標
### 肝細胞損傷酵素（Hepatocellular leakage enzymes）
- **ALT（alanine aminotransferase）**：犬肝細胞高度特異性，貓特異性略低。半衰期犬約 60 小時，貓約 3.5 小時。
- **AST（aspartate aminotransferase）**：肝臟與肌肉均含。需搭配 CK 區分來源。

### 膽管酵素（Cholestatic enzymes）
- **ALP（alkaline phosphatase）**：犬有三種同功酶（肝、骨、皮質醇誘導型），因此犬 ALP 升高需綜合判斷。貓 ALP 半衰期僅約 6 小時，因此貓 ALP 升高的臨床意義更大。
- **GGT（gamma-glutamyl transferase）**：肝內膽管上皮。貓 GGT 對膽道疾病的敏感度高於 ALP。

### 腎臟相關指標
| 指標 | 來源 | GFR 下降多少時升高 | 備註 |
|------|------|-------------------|------|
| BUN | 肝臟合成 | ~75% | 受飲食、脫水影響 |
| Creatinine | 肌肉代謝 | ~75% | 受肌肉量影響 |
| SDMA | 全身細胞甲基化代謝 | ~25-40% | 較少受肌肉量影響 |

### 蛋白質
- **Total protein（TP）**= albumin + globulin
- Albumin 僅肝臟合成，是評估肝臟合成功能與營養狀態的重要指標
- Globulin 升高需考慮：慢性發炎、感染、腫瘤（多發性骨髓瘤）

### 電解質與礦物質
常規生化中的 Na⁺、K⁺、Cl⁻、Ca²⁺、P 與酸鹼平衡和多種疾病相關。Addison's disease 經典表現為 Na/K ratio < 27。

## 二、臨床意義 (Clinical Significance)

## 三、人醫借鑒 (Translational Insights)

| 人醫工具/概念 | 獸醫應用潛力 | 現況 |
|-------------|-------------|------|
| Cystatin C 腎功能標記 | 取代或輔助 creatinine 評估犬貓 GFR，不受肌肉量影響 | 人醫已納入 CKD-EPI 公式，獸醫犬 cystatin C 研究顯示有潛力但參考區間未確立 |
| 高敏感度 Troponin I（hs-cTnI） | 犬貓心肌損傷的早期偵測（心肌炎、DCM、GDV 心肌缺氧） | 人醫急性冠心症金標準，獸醫已有商業檢測但缺乏犬貓疾病特異切點 |
| Procalcitonin（PCT） | 犬貓敗血症的早期生物標記，區分感染性 vs 非感染性 SIRS | 人醫 sepsis 指引常規使用，獸醫犬 PCT 初步研究顯示前景 |

## 四、臨床爭議與知識空缺 (Controversies & Knowledge Gaps)

| 爭議議題 | 現況 | Evidence Level |
|---------|------|---------------|
| SDMA vs Creatinine 在犬貓早期 CKD 偵測的相對價值 | SDMA 對低肌肉量動物優勢明確，但是否應取代 creatinine 作為主要指標仍有爭議 | Level II |
| 溶血/脂血/黃疸（HIL）干擾指數在不同分析平台間的比較性 | 各廠牌 HIL 閾值不同，同一樣本在不同平台可能被接受或拒絕 | Level III |
| 犬 ALP 同功酶分型的臨床實用性 | 區分肝臟型、骨骼型與皮質醇誘導型有助鑑別，但同功酶分型檢測費時且非常規項目 | Level III |`,
  clinical_pearl: '貓的 ALP 半衰期僅約 6 小時（犬約 70 小時），因此貓即使輕度 ALP 升高（如 2-3 倍）也代表顯著的膽道疾病，千萬不要因為數值「看起來不高」而輕忽。',
  common_mistakes: [
    '忽略犬 ALP 有皮質醇誘導型同功酶，將類固醇引起的 ALP 升高誤判為肝病',
    '僅看 BUN 評估腎功能而未同時檢查 creatinine 與 SDMA',
    '未注意溶血、脂血、黃疸對生化結果的干擾',
    '將犬的 ALP 判讀標準套用在貓身上，低估貓輕度 ALP 升高的意義',
    '忽略 albumin 半衰期較長，急性肝損傷初期 albumin 可能仍正常',
  ],
  disease_data: null,
  diagnostic_data: null,
  procedure_data: null,
  visual_placeholders: [
    { position: '肝臟相關指標後', type: 'flowchart', description: '肝臟酵素升高的鑑別診斷流程圖' },
    { position: '腎臟相關指標後', type: 'comparison_table', description: 'BUN vs Creatinine vs SDMA 比較表' },
  ],
  interactive_placeholders: [
    { position: '文末', type: 'interactive_quiz', description: '生化數據判讀練習：辨識器官損傷模式' },
  ],
  drug_api_links: [],
  references: [
    { type: 'textbook', citation: 'Stockham SL, Scott MA. Fundamentals of Veterinary Clinical Pathology, 2nd ed. Blackwell, 2008.', relevance: '臨床化學基礎核心教材' },
    { type: 'textbook', citation: 'Ettinger SJ, Feldman EC. Textbook of Veterinary Internal Medicine, 8th ed. Elsevier, 2017.', relevance: '器官相關生化指標臨床意義' },
    { type: 'journal', citation: 'Nabity MB et al. "IRIS Canine GFR Working Group — SDMA as a biomarker." J Vet Intern Med 2015;29(4):1036-1044.', relevance: 'SDMA 作為早期腎功能指標的實證' },
    { type: 'guideline', citation: 'IRIS (International Renal Interest Society). "IRIS Staging of CKD (modified 2023)." iris-kidney.com.', relevance: 'IRIS CKD 分期指引——腎功能生化指標臨床應用標準' },
  ],
  is_current: true,
  created_at: now,
};

/** 分析前誤差與品質控管 — 機轉型 */
const contentPreAnalytical: NodeContent = {
  id: 'CONTENT-CPATH-L2-001',
  node_id: 'CPATH-L2-001',
  version: 1,
  summary: '分析前誤差（pre-analytical error）是臨床檢驗最主要的誤差來源，佔所有實驗室誤差的 60-70%。正確的採樣、處理與保存流程是確保檢驗結果可靠的第一步。',
  learning_objectives: [
    '列舉分析前、分析中、分析後三階段的常見誤差來源',
    '說明溶血、脂血、黃疸（HIL index）對不同檢驗項目的影響',
    '描述品質控管（QC）的基本原理：Levey-Jennings chart 與 Westgard rules',
    '解釋參考範圍建立的統計原理與使用限制',
    '說明正確的採樣管選擇與樣本處理流程',
  ],
  key_points: [
    '分析前誤差佔所有實驗室誤差 60-70%，是最可控也最被忽略的環節',
    '常見分析前誤差：錯誤採血管、溶血、脂血、延遲送檢、未禁食',
    'EDTA 管用於 CBC；紅頭/黃頭管用於血清生化；藍頭管（枸櫞酸鈉）用於凝血檢查',
    '溶血影響：K⁺假性↑、AST↑、LDH↑、bilirubin↑；脂血影響比色法準確度',
    'Levey-Jennings chart 用於追蹤 QC 品管檢體的趨勢與偏移',
    'Westgard rules（1-2s, 1-3s, 2-2s, R-4s 等）用於判定分析批次是否合格',
    '參考範圍通常取健康族群 95% 中間值，意味 5% 健康動物會落在範圍外',
    '抗凝劑交叉污染（如 EDTA 汙染血清管）會造成 Ca²⁺假性降低、K⁺假性升高',
  ],
  body: `# 分析前誤差與品質控管 (Pre-analytical Errors & QC)

## 一、核心概念與機轉 (Core Concept & Mechanism)



### 實驗室誤差的三階段
| 階段 | 佔比 | 常見來源 |
|------|------|---------|
| 分析前（pre-analytical） | 60-70% | 採樣、處理、運送 |
| 分析中（analytical） | 10-15% | 儀器校正、試劑問題 |
| 分析後（post-analytical） | 20-25% | 資料轉錄、判讀錯誤 |

### 分析前誤差
### 採樣相關
- **採血管選擇**：EDTA（紫頭）→ CBC；枸櫞酸鈉（藍頭）→ 凝血；肝素（綠頭）→ 急診生化；無添加劑（紅頭）/分離膠（黃頭）→ 血清生化
- **採血量不足**：凝血管需精確 9:1（血液:抗凝劑）比例
- **採血順序**：先採無添加劑管，最後採 EDTA 管，避免抗凝劑交叉污染

### 樣本干擾（HIL Index）
- **H（Hemolysis 溶血）**：細胞內容物釋出 → K⁺↑、AST↑、LDH↑
- **I（Icterus 黃疸）**：高 bilirubin 干擾比色法
- **L（Lipemia 脂血）**：光散射干擾 → 多項目不準確，可用高速離心或脂肪酶前處理

### 品質控管基本原理
### 內部品管（IQC）
每日運行已知濃度的品管檢體，繪製 Levey-Jennings chart 追蹤平均值與標準差。

### Westgard Rules 判讀
- **1-2s 警告**：一個 QC 值超過 ±2SD → 警告，檢查下一個 QC
- **1-3s 拒絕**：一個 QC 值超過 ±3SD → 批次拒絕
- **2-2s 拒絕**：連續兩個 QC 值同側超過 ±2SD → 系統性偏移

### 參考範圍的建立與限制
參考範圍取 120 頭以上健康動物中間 95% 的數值範圍。因此：
- 每 20 頭健康動物中，約有 1 頭會有某項目「異常」
- 同時檢測 20 個項目時，健康動物至少有一項「異常」的機率高達 64%
- 需結合臨床表現判讀，不能僅憑單一數值異常下診斷

## 二、臨床意義 (Clinical Significance)

## 三、人醫借鑒 (Translational Insights)

| 人醫工具/概念 | 獸醫應用潛力 | 現況 |
|-------------|-------------|------|
| 全自動尿液分析系統 | 犬貓尿沉渣 AI 辨識標準化 | 人醫自動化成熟，獸醫引入中 |
| 血氣分析 POCT 整合 | 犬貓急診床邊即時血氣+電解質+乳酸 | 獸醫急診 iSTAT 等設備普及 |

## 四、臨床爭議與知識空缺 (Controversies & Knowledge Gaps)

| 爭議議題 | 現況 | Evidence Level |
|---------|------|---------------|
| 犬貓 CRP/SAA 等急性期蛋白的臨床決策價值 | 具有發炎指標價值，但疾病特異度低 | Level III |
| 犬尿蛋白/肌酸酐比值（UPC）的採樣標準化 | 單次 vs 池尿的差異、禁食狀態影響 | Level III |`,
  clinical_pearl: '當你同時檢測 20 個生化項目時，即使完全健康的動物也有 64% 機率至少出現一項「超出參考範圍」。因此單一輕度異常如果沒有臨床症狀佐證，很可能是統計上的正常變異而非真正的病理改變。',
  common_mistakes: [
    '採血時先抽 EDTA 管再抽生化管，導致 EDTA 汙染使 Ca²⁺ 假性降低',
    '凝血管採血量不足，枸櫞酸鈉比例偏高導致 PT/aPTT 假性延長',
    '未在 30 分鐘內分離血清，造成血糖假性降低（細胞繼續代謝葡萄糖）',
    '忽略 HIL index，在嚴重溶血或脂血的樣本中信任自動分析結果',
    '將單一輕微異常值視為確定性診斷依據，未考慮參考範圍的統計限制',
  ],
  disease_data: null,
  diagnostic_data: null,
  procedure_data: null,
  visual_placeholders: [
    { position: '品質控管段落後', type: 'flowchart', description: 'Levey-Jennings chart 與 Westgard rules 圖解' },
    { position: '採樣相關段落後', type: 'comparison_table', description: '各採血管顏色、抗凝劑與適用檢查對照表' },
  ],
  interactive_placeholders: [
    { position: '文末', type: 'interactive_quiz', description: '分析前誤差情境題：判斷哪些數值可能為偽值' },
  ],
  drug_api_links: [],
  references: [
    { type: 'textbook', citation: 'Stockham SL, Scott MA. Fundamentals of Veterinary Clinical Pathology, 2nd ed. Blackwell, 2008.', relevance: '分析前因素與品質控管核心教材' },
    { type: 'journal', citation: 'Braun JP et al. "Preanalytical variables in veterinary clinical pathology." Vet Clin Pathol 2015;44(1):8-25.', relevance: '獸醫分析前誤差的系統性回顧' },
    { type: 'guideline', citation: 'ASVCP Quality Assurance and Laboratory Standards Committee. "Guidelines for veterinary laboratory quality assurance." Vet Clin Pathol 2009;38(2):141-149.', relevance: '獸醫實驗室品管指引' },
  ],
  is_current: true,
  created_at: now,
};

/** 血清生化判讀 — 診斷型 */
const contentBiochem: NodeContent = {
  id: 'CONTENT-CPATH-L4-002',
  node_id: 'CPATH-L4-002',
  version: 1,
  summary: '血清生化檢查（serum biochemistry panel）透過測定血清中酵素活性、代謝物與電解質濃度，評估肝、腎、胰臟、肌肉等器官功能。是僅次於 CBC 的最常規檢查。',
  learning_objectives: [
    '系統性判讀肝臟酵素模式（hepatocellular vs cholestatic）',
    '整合 BUN、creatinine、SDMA 與 USG 評估腎功能',
    '判讀血糖、果糖胺與胰臟酵素的臨床意義',
    '辨識電解質異常模式與相關疾病（如 Addison Na/K ratio）',
    '區分犬貓生化參數的物種差異並正確套用參考範圍',
  ],
  key_points: [
    'ALT 升高 > 2-3x：犬高度提示肝細胞損傷；貓需同時考慮肌肉來源',
    'ALP 升高：犬須排除皮質醇誘導型（Cushing、類固醇用藥）；貓 ALP 任何升高皆具臨床意義',
    'Azotemia 三分類：prerenal（脫水）、renal（腎實質）、postrenal（阻塞）',
    'SDMA > 14 μg/dL 提示早期腎功能下降（GFR 損失約 25-40%）',
    'Glucose 壓力性高血糖在貓極為常見（可達 300-400 mg/dL）',
    'Na/K ratio < 27 高度提示 hypoadrenocorticism（Addison disease）',
    'Spec cPL/fPL 為犬/貓胰臟炎特異性 lipase 檢測',
    'Total protein = albumin + globulin；A/G ratio 降低提示慢性發炎或蛋白質流失',
  ],
  body: `# 血清生化判讀 (Serum Biochemistry Interpretation)

## 一、檢查原理與適應症 (Principles & Indications)



### 肝臟評估
### 肝細胞損傷模式
- ALT ↑↑ + AST ↑ + ALP 正常或輕微↑ → 急性肝細胞損傷
- ALT 持續輕度↑ → 慢性肝病、腫瘤浸潤

### 膽汁淤積模式
- ALP ↑↑ + GGT ↑ + Bilirubin ↑ + ALT 正常或輕微↑ → 膽道阻塞或膽管炎
- 貓：GGT 比 ALP 更敏感（因貓 ALP 半衰期短）

### 肝功能評估
- Albumin ↓ + BUN ↓ + Glucose ↓ + Cholesterol ↓ → 肝功能衰竭
- Bile acids（膽汁酸）：空腹 > 25 μmol/L 或餐後 > 25 μmol/L 提示肝功能障礙或門體分流

### 腎臟評估
| 類型 | BUN | Crea | USG | SDMA |
|------|-----|------|-----|------|
| Prerenal | ↑ | ↑ | > 1.030(犬)/1.035(貓) | 正常 |
| Renal | ↑ | ↑ | 1.008-1.029(犬)/1.008-1.034(貓) | ↑ |
| Postrenal | ↑↑ | ↑↑ | 變異 | ↑ |

IRIS CKD 分期以 creatinine 與 SDMA 為基礎。

### 胰臟評估
- Spec cPL（犬）> 400 μg/L 或 fPL（貓）> 5.4 μg/L 支持胰臟炎診斷
- 傳統 amylase/lipase 對犬貓胰臟炎敏感度與特異度均不佳

### 電解質
- **高鉀血症**：腎衰竭、尿道阻塞、Addison disease、組織損傷
- **低鉀血症**：嘔吐、慢性腎病（貓）、胰島素治療
- **高鈣血症**：惡性腫瘤（lymphoma）、Addison、腎衰竭、維生素 D 中毒

## 二、判讀要點 (Interpretation)

### 系統性判讀流程
建議依器官系統逐步判讀：肝臟 → 腎臟 → 胰臟 → 蛋白質 → 電解質 → 其他。

## 三、常見陷阱 (Pitfalls)

## 四、人醫借鑒 (Translational Insights)

| 人醫工具/概念 | 獸醫應用潛力 | 現況 |
|-------------|-------------|------|
| NGAL（neutrophil gelatinase-associated lipocalin） | 犬貓急性腎損傷（AKI）的早期生物標記，比 creatinine 更早上升 | 人醫 AKI 臨床使用中，獸醫犬 NGAL 商業檢測已上市（台灣可送檢） |
| 胰臟特異性脂肪酶（Spec cPL/fPL）定量 | 取代傳統 amylase/lipase 提升犬貓胰臟炎診斷準確度 | 人醫使用 lipase isoform，獸醫 Spec cPL/fPL 已為台灣臨床常規 |
| Fibrosis-4 Index（FIB-4）肝纖維化評分 | 非侵入性評估犬肝纖維化程度，減少肝生檢需求 | 人醫 NAFLD/HCV 常規篩檢，獸醫犬肝病尚未建立驗證公式 |
| 連續血糖監測（CGM） | 犬貓糖尿病居家血糖曲線監測，取代反覆採血 | 人醫標準照護，獸醫 FreeStyle Libre 犬貓應用研究增加中 |

## 五、臨床爭議與知識空缺 (Controversies & Knowledge Gaps)

| 爭議議題 | 現況 | Evidence Level |
|---------|------|---------------|
| 犬 Spec cPL 灰色地帶（200-400 μg/L）的臨床決策 | 此區間既非確診也非排除，是否需要重複檢測或搭配影像尚無共識 | Level III |
| 犬貓 SDMA 在非腎臟因素下的變異 | 脫水、高蛋白飲食、腫瘤可能影響 SDMA，獨立於 GFR 的變異程度待釐清 | Level III |
| 禁食 vs 非禁食樣本對犬貓生化套組判讀的影響 | 禁食主要影響 triglyceride 與 glucose，但對其他項目影響程度各研究結論不一 | Level II |`,
  clinical_pearl: '犬 ALP 升高最常見的原因是類固醇誘導（exogenous 或 endogenous），而非肝病。但貓完全沒有皮質醇誘導型 ALP 同功酶，所以貓 ALP 哪怕僅升高 2 倍也必須認真追查膽道/肝臟疾病。',
  common_mistakes: [
    '貓壓力性高血糖（stress hyperglycemia）誤診為糖尿病——需搭配果糖胺確認',
    '僅用 BUN 單一指標判斷腎功能，忽略 BUN 受飲食蛋白和脫水影響',
    '犬 ALP 升高未排除皮質醇誘導型，直接下肝病診斷',
    '忽略貓 GGT 比 ALP 更能反映膽道疾病',
    '未同時評估 USG 就將 azotemia 歸類為腎性',
  ],
  disease_data: null,
  diagnostic_data: {
    indication: ['常規健康檢查', '器官功能評估', '術前評估', '疾病監測', '中毒評估', '內分泌篩檢'],
    contraindication: ['無絕對禁忌症。脂血或溶血樣本需註記並謹慎判讀。'],
    technique: '採集血清分離管（紅頭或黃頭管）2-3 mL 全血，靜置 30 分鐘後離心（3000 rpm, 10 min）分離血清。建議禁食 8-12 小時以減少脂血干擾。血清可冷藏（4°C）24 小時或冷凍（-20°C）長期保存。',
    normal_findings: [
      { finding: 'ALT', description: '犬 10-125 U/L，貓 12-130 U/L', significance: '肝細胞損傷指標' },
      { finding: 'ALP', description: '犬 23-212 U/L，貓 14-111 U/L', significance: '膽道/骨骼指標，犬有皮質醇誘導型' },
      { finding: 'Creatinine', description: '犬 0.5-1.8 mg/dL，貓 0.8-2.4 mg/dL', significance: '腎絲球過濾功能指標' },
      { finding: 'BUN', description: '犬 7-27 mg/dL，貓 16-36 mg/dL', significance: '腎功能與蛋白質代謝指標' },
      { finding: 'Glucose', description: '犬 74-143 mg/dL，貓 74-159 mg/dL', significance: '糖代謝指標，貓易壓力性升高' },
    ],
    abnormal_findings: [
      { finding: '肝細胞損傷模式', description: 'ALT ↑↑ + AST ↑', significance: '急性肝損傷、中毒、缺氧' },
      { finding: '膽汁淤積模式', description: 'ALP ↑ + GGT ↑ + Bilirubin ↑', significance: '膽道阻塞、膽管炎、胰臟炎壓迫' },
      { finding: 'Azotemia', description: 'BUN ↑ + Creatinine ↑', significance: '需分類 prerenal/renal/postrenal' },
      { finding: 'Hypoadrenocorticism 模式', description: 'Na/K < 27 + prerenal azotemia', significance: '高度提示 Addison disease' },
    ],
    interpretation_guide: '1. 檢查 HIL index（溶血/黃疸/脂血）。2. 評估肝酵素模式。3. 評估腎功能三指標。4. 檢查血糖與胰臟酵素。5. 評估蛋白質。6. 評估電解質。7. 整合臨床表現。',
    pitfalls: [
      '溶血樣本造成 AST、K⁺、bilirubin 假性升高',
      '脂血樣本干擾比色法，多項結果不可靠',
      '未禁食導致 triglyceride 和 glucose 假性升高',
      '類固醇使用導致犬 ALP 和 GGT 升高被誤判為肝病',
    ],
    sensitivity_specificity: '生化套組為廣泛篩檢工具，個別指標的敏感度與特異度因疾病而異。肝酵素對肝損傷敏感但不特異；SDMA 對早期腎損傷的敏感度優於 creatinine。',
    cost_benefit: '為最常規的生化篩檢，費用中等。搭配 CBC 可覆蓋大部分常見器官疾病的初步評估。',
  },
  procedure_data: null,
  visual_placeholders: [
    { position: '肝臟評估段落後', type: 'flowchart', description: '肝臟酵素升高鑑別診斷流程圖' },
    { position: '腎臟評估段落後', type: 'comparison_table', description: 'Azotemia 三分類鑑別表' },
  ],
  interactive_placeholders: [
    { position: '文末', type: 'interactive_quiz', description: '血清生化套組判讀：辨識器官損傷模式' },
  ],
  drug_api_links: [],
  references: [
    { type: 'textbook', citation: 'Stockham SL, Scott MA. Fundamentals of Veterinary Clinical Pathology, 2nd ed. Blackwell, 2008.', relevance: '血清生化判讀核心教材' },
    { type: 'textbook', citation: 'Ettinger SJ, Feldman EC. Textbook of Veterinary Internal Medicine, 8th ed. Elsevier, 2017.', relevance: '器官功能評估的臨床應用' },
    { type: 'guideline', citation: 'IRIS (International Renal Interest Society). "IRIS Staging of CKD." iris-kidney.com, 2023.', relevance: 'CKD 分期與腎功能評估標準' },
    { type: 'journal', citation: 'Vaden SL, Elliott J. Management of proteinuria in dogs and cats with chronic kidney disease. Vet Clin North Am Small Anim Pract. 2016;46(6):1115-1130.', relevance: '腎功能生化指標與蛋白尿管理' },
  ],
  is_current: true,
  created_at: now,
};

/** 細胞學基本原則 — 診斷型 */
const contentCytology: NodeContent = {
  id: 'CONTENT-CPATH-L4-003',
  node_id: 'CPATH-L4-003',
  version: 1,
  summary: '細胞學（cytology）是透過細針抽吸（FNA）或壓印抹片取得細胞樣本，經染色後以顯微鏡評估細胞形態的診斷方法。為腫塊快速分類與初步診斷的第一線工具。',
  learning_objectives: [
    '描述 FNA 的正確操作技術與抹片製作方法',
    '區分發炎性、增生性與腫瘤性細胞學模式',
    '辨識惡性腫瘤細胞的細胞學標準（malignancy criteria）',
    '說明常用細胞學染色法（Diff-Quik, Wright-Giemsa）的特性',
    '判斷何時細胞學結果需進一步組織病理學確認',
  ],
  key_points: [
    'FNA 為微創、快速、低成本的初步診斷工具，適用於大部分體表與可觸及腫塊',
    '樣本充足性是細胞學判讀的第一步——細胞不足（non-diagnostic）需重新採樣',
    '細胞學將腫塊分為：發炎性（inflammation）、增生性（hyperplasia）、腫瘤性（neoplasia）',
    '腫瘤性再分為：上皮性（carcinoma）、間質性（sarcoma）、圓細胞（round cell tumor）',
    '惡性標準包括：核仁異常（大小不一/數量多/形狀不規則）、N:C ratio 增大、有絲分裂像增多',
    '圓細胞腫瘤（lymphoma、mast cell tumor、histiocytoma、TVT、plasmacytoma）最適合細胞學診斷',
    'Diff-Quik 染色快速（3 分鐘），適合院內即時判讀；Wright-Giemsa 細節更佳',
    '間質性腫瘤（sarcoma）細胞學常細胞量少且分散，診斷困難，常需組織病理確認',
  ],
  body: `# 細胞學基本原則 (Basic Cytology Principles)

## 一、檢查原理與適應症 (Principles & Indications)



### FNA 操作技術
### 非抽吸技術（Non-aspiration / Woodpecker technique）
適合血管豐富的組織，減少血液汙染：
1. 使用 22-25G 針頭，不接注射器
2. 快速進出腫塊（woodpecker motion）5-10 次
3. 改變角度重複以取得代表性樣本
4. 用 10 mL 注射器將針頭內容物吹至載玻片

### 抹片製作
- **Squash prep（壓片法）**：最常用，適合大部分 FNA 樣本
- **Starfish / pull-apart technique**：適合液態樣本
- **Line smear**：適合液態樣本的濃縮

### 細胞學模式分類
| 模式 | 主要細胞 | 提示 |
|------|---------|------|
| 化膿性發炎 | 退化嗜中性球 | 細菌感染 |
| 肉芽腫性發炎 | 巨噬細胞為主 | 黴菌、分枝桿菌、異物 |
| 上皮性腫瘤 | 細胞團簇、高 N:C ratio | Carcinoma |
| 間質性腫瘤 | 梭形細胞、個別分散 | Sarcoma |
| 圓細胞腫瘤 | 均勻圓形/卵圓形 | Lymphoma, MCT 等 |

### 惡性標準（Criteria of Malignancy）
### 一般標準
- 細胞多形性（pleomorphism）
- N:C ratio 增大
- 有絲分裂像增多或異常有絲分裂

### 核的標準（最重要）
- 核仁大小不一（anisokaryosis）
- 核仁數量增多或形狀不規則
- 染色質粗糙或分布不均
- 核膜不規則

## 二、判讀要點 (Interpretation)

### 系統性判讀流程
### Step 1：低倍（4x-10x）
- 評估細胞量（cellularity）
- 辨識整體細胞排列模式
- 尋找可疑區域

### Step 2：高倍（40x-100x oil）
- 細胞形態細節
- 惡性標準評估
- 特殊結構辨識（如 mast cell granules）

## 三、常見陷阱 (Pitfalls)

## 四、人醫借鑒 (Translational Insights)

| 人醫工具/概念 | 獸醫應用潛力 | 現況 |
|-------------|-------------|------|
| AI 輔助細胞學判讀（digital cytology） | 犬貓 FNA 樣本的電腦輔助惡性標準評估與腫瘤分類 | 人醫子宮頸/甲狀腺 FNA AI 系統已上市，獸醫 AI 細胞學研究起步中 |
| 液態活檢（liquid biopsy） | 犬腫瘤 ctDNA 非侵入性偵測，作為 FNA 的替代或補充 | 人醫肺癌/乳癌已臨床應用，獸醫犬淋巴瘤/血管肉瘤液態活檢研究階段 |
| Cell block 技術 | 將 FNA 殘餘樣本製成 cell block 進行免疫組織化學染色 | 人醫常規用於甲狀腺/淋巴結 FNA，獸醫應用增加中但尚非標準流程 |

## 五、臨床爭議與知識空缺 (Controversies & Knowledge Gaps)

| 爭議議題 | 現況 | Evidence Level |
|---------|------|---------------|
| 犬貓 FNA 細胞學 vs 組織病理的整體一致率 | 因組織類型差異大——淋巴結 FNA 準確度 > 90%，脾臟/肝臟 FNA 僅 60-70% | Level II |
| 犬 MCT 細胞學分級是否可取代組織病理分級 | 細胞學可提示 high-grade，但 Kiupel/Patnaik 系統需組織病理，細胞學分級標準尚未統一 | Level III |
| FNA 抽吸技術（aspiration）vs 非抽吸技術（non-aspiration）的診斷效能比較 | 非抽吸技術血液汙染較少，但對纖維性腫瘤細胞量可能不足，最佳策略因腫瘤類型而異 | Level III |`,
  clinical_pearl: '圓細胞腫瘤（round cell tumors）是細胞學最能準確診斷的腫瘤類型。Lymphoma 的 FNA 準確率可達 90% 以上。相反地，間質性腫瘤（sarcoma）的 FNA 常因細胞量不足或細胞分散而難以確診，需要組織病理學。',
  common_mistakes: [
    '在血管豐富的腫塊使用抽吸技術導致血液嚴重汙染（hemodilution）',
    '將反應性淋巴結增生（reactive hyperplasia）誤判為淋巴瘤',
    '忽略肥大細胞的顆粒（Diff-Quik 偶爾染色不佳），漏診 mast cell tumor',
    '僅憑單一惡性標準判定惡性——需多項標準同時存在才可靠',
    '對間質性腫瘤細胞學信心過高，未建議組織病理確認',
  ],
  disease_data: null,
  diagnostic_data: {
    indication: ['體表腫塊初步診斷', '淋巴結腫大評估', '體腔積液分析', '關節液分析', '術中壓印抹片'],
    contraindication: ['凝血功能嚴重異常（相對禁忌）', '高度血管性腫瘤如血管肉瘤（出血風險）', '疑似肥大細胞瘤時需謹慎（穿刺可能引發去顆粒化反應）'],
    technique: '使用 22-25G 針頭，非抽吸技術（woodpecker）或輕度抽吸。取得樣本後以 squash prep 製作抹片，風乾後以 Diff-Quik 或 Wright-Giemsa 染色。低倍掃描評估細胞量，高倍評估細胞形態。',
    normal_findings: [
      { finding: '正常淋巴結', description: '小淋巴球為主（>90%）+ 少量中/大淋巴球 + 漿細胞 + 巨噬細胞', significance: '正常淋巴組織' },
      { finding: '正常脂肪組織', description: '大量脂肪細胞，細胞質透明空泡', significance: '脂肪瘤需與正常脂肪組織鑑別' },
    ],
    abnormal_findings: [
      { finding: '化膿性發炎', description: '大量退化嗜中性球 ± 細胞內細菌', significance: '細菌感染，需培養與藥敏' },
      { finding: '圓細胞腫瘤', description: '均勻圓形細胞群，個別分散', significance: 'Lymphoma、MCT、histiocytoma、TVT、plasmacytoma' },
      { finding: '上皮性腫瘤', description: '細胞團簇排列，N:C ratio 增大，核仁異常', significance: 'Carcinoma，需組織病理確認分級' },
      { finding: '間質性腫瘤', description: '梭形細胞分散排列', significance: 'Sarcoma，細胞學分級困難，強烈建議組織病理' },
    ],
    interpretation_guide: '1. 評估樣本充足性。2. 低倍辨識整體模式（發炎 vs 腫瘤）。3. 高倍評估細胞形態與惡性標準。4. 分類腫瘤類型（上皮/間質/圓細胞）。5. 提供可能診斷與建議下一步。',
    pitfalls: [
      '血液汙染稀釋細胞，降低診斷準確度',
      '抹片太厚導致細胞堆疊無法辨識',
      'Diff-Quik 對 mast cell granules 染色可能不佳',
      '將反應性淋巴結中增生的中/大淋巴球誤判為 lymphoma',
    ],
    sensitivity_specificity: '細胞學對圓細胞腫瘤（尤其 lymphoma）的敏感度約 85-95%。對間質性腫瘤的敏感度約 50-70%，特異度更低。整體而言，FNA 的準確率約 70-90%，取決於腫瘤類型與操作品質。',
    cost_benefit: '成本極低、即時可得結果、微創。為腫塊評估的最佳第一線工具。但間質性腫瘤及分級需求需組織病理學。',
  },
  procedure_data: null,
  visual_placeholders: [
    { position: '惡性標準段落後', type: 'annotated_image', description: '惡性標準細胞學圖片標註' },
    { position: '模式分類表格後', type: 'comparison_table', description: '發炎 vs 腫瘤細胞學模式比較圖' },
  ],
  interactive_placeholders: [
    { position: '文末', type: 'interactive_quiz', description: '細胞學圖片判讀：辨識腫瘤類型與惡性標準' },
  ],
  drug_api_links: [],
  references: [
    { type: 'textbook', citation: 'Raskin RE, Meyer DJ. Canine and Feline Cytology: A Color Atlas and Interpretation Guide, 3rd ed. Elsevier, 2016.', relevance: '細胞學判讀權威教材與圖譜' },
    { type: 'textbook', citation: 'Cowell RL et al. Diagnostic Cytology and Hematology of the Dog and Cat, 4th ed. Elsevier, 2014.', relevance: '犬貓細胞學診斷教材' },
    { type: 'journal', citation: 'Ghisleni G et al. "Correlation between fine-needle aspiration cytology and histopathology in the evaluation of cutaneous and subcutaneous masses from dogs and cats." Vet Clin Pathol 2006;35(1):24-30.', relevance: '細胞學與組織病理的相關性研究' },
    { type: 'guideline', citation: 'ASVCP Guidelines Committee. "Guidelines for cytologic preparation techniques and criteria for evaluation of samples." Vet Clin Pathol. 2017;46(1):15-28.', relevance: 'ASVCP 細胞學樣本製備與品質評估指引' },
  ],
  is_current: true,
  created_at: now,
};

/** 凝血功能檢查 — 診斷型 */
const contentCoagulation: NodeContent = {
  id: 'CONTENT-CPATH-L4-004',
  node_id: 'CPATH-L4-004',
  version: 1,
  summary: '凝血功能檢查評估初級止血（血小板）與次級止血（凝血因子瀑布）的完整性。PT、aPTT 與血小板計數是最基礎的凝血篩檢三角，可快速定位出血原因。',
  learning_objectives: [
    '說明初級止血（primary hemostasis）與次級止血（secondary hemostasis）的差異',
    '解釋 PT 與 aPTT 分別評估哪些凝血途徑',
    '判讀 PT/aPTT 的異常組合模式並列出鑑別診斷',
    '描述 DIC 的實驗室診斷標準',
    '說明抗凝劑中毒（rodenticide）的典型凝血模式',
  ],
  key_points: [
    'PT 評估外源性途徑（factor VII）+ 共同途徑（X, V, II, fibrinogen）',
    'aPTT 評估內源性途徑（XII, XI, IX, VIII）+ 共同途徑',
    '血小板減少 + PT/aPTT 均正常 → 初級止血異常（ITP、骨髓抑制）',
    '血小板正常 + PT 延長 + aPTT 正常 → Factor VII 缺乏（早期 rodenticide 中毒）',
    'PT 與 aPTT 均延長 → 共同途徑異常、DIC、嚴重肝病、rodenticide 中毒（晚期）',
    'DIC 診斷需整合：血小板↓ + PT/aPTT↑ + fibrinogen↓ + D-dimer↑ + 抹片見 schistocytes',
    'BMBT（buccal mucosal bleeding time）評估初級止血，正常犬 < 4 分鐘',
    '凝血管（藍頭，枸櫞酸鈉 3.2%）需精確 9:1 血液比例，不足會假性延長',
  ],
  body: `# 凝血功能檢查 (Coagulation Testing)

## 一、檢查原理與適應症 (Principles & Indications)



### 止血機制概述
### 初級止血（Primary hemostasis）
血管損傷 → 血小板黏附（vWF 介導）→ 血小板活化與聚集 → 初級止血栓

### 次級止血（Secondary hemostasis）
凝血因子瀑布啟動 → 凝血酶（thrombin）生成 → 纖維蛋白（fibrin）形成 → 穩固止血栓

### 凝血篩檢三角
| 檢查 | 評估對象 | 正常值 |
|------|---------|--------|
| PT | 外源性 + 共同途徑 | 犬 6-10 sec，貓 8-14 sec |
| aPTT | 內源性 + 共同途徑 | 犬 10-16 sec，貓 12-18 sec |
| PLT count | 初級止血 | 犬 175-500K，貓 175-600K |

### DIC 診斷
DIC 為消耗性凝血病變，需 ≥3 項異常才可確診：
- 血小板持續下降
- PT/aPTT 延長
- Fibrinogen 降低（< 100 mg/dL）
- D-dimer 升高
- 血液抹片見 schistocytes（紅血球碎片）
- Antithrombin（AT）降低

### 抗凝劑（Rodenticide）中毒
第二代抗凝血劑（brodifacoum, bromadiolone）抑制 vitamin K epoxide reductase，阻斷 vitamin K 依賴性因子（II, VII, IX, X）的活化。Factor VII 半衰期最短（犬 ~6h），因此 PT 最先延長。

## 二、判讀要點 (Interpretation)

### 異常模式判讀
| PT | aPTT | PLT | 可能診斷 |
|----|------|-----|---------|
| ↑ | N | N | 早期 rodenticide 中毒（Factor VII 半衰期最短 ~6h） |
| N | ↑ | N | 內源性因子缺乏（hemophilia A/B）、lupus anticoagulant |
| ↑ | ↑ | N | 晚期 rodenticide 中毒、嚴重肝病、共同途徑缺乏 |
| ↑ | ↑ | ↓ | DIC、嚴重肝病合併門脈高壓 |
| N | N | ↓ | ITP、骨髓抑制、Ehrlichia |

## 三、常見陷阱 (Pitfalls)

## 四、人醫借鑒 (Translational Insights)

| 人醫工具/概念 | 獸醫應用潛力 | 現況 |
|-------------|-------------|------|
| Viscoelastic testing（TEG/ROTEM） | 犬貓全血凝血功能的即時全貌評估（凝血、纖溶、血小板功能） | 人醫創傷/手術指引輸血，獸醫 TEG 研究快速增加，部分急診中心已採用 |
| 直接口服抗凝劑（DOAC）監測 | 犬凝血因子 Xa 抑制劑（rivaroxaban 類似物）的藥效監測 | 人醫 anti-Xa assay 常規，獸醫犬血栓疾病抗凝治療研究中 |
| Calibrated automated thrombography（CAT） | 評估犬凝血酶生成動力學，更全面反映凝血狀態 | 人醫血友病/血栓研究使用，獸醫犬 CAT 研究有限但具潛力 |

## 五、臨床爭議與知識空缺 (Controversies & Knowledge Gaps)

| 爭議議題 | 現況 | Evidence Level |
|---------|------|---------------|
| TEG/ROTEM vs 傳統 PT/aPTT 在犬 DIC 診斷的優劣 | TEG 提供更全面的凝血圖譜，但犬正常參考值因機型與試劑而異，標準化不足 | Level III |
| 犬術前凝血篩檢（PT/aPTT）的必要性 | 健康犬術前 PT/aPTT 異常率極低（< 2%），是否應常規執行仍有成本效益爭議 | Level II |
| 犬低劑量 aspirin 抗血栓預防的最佳劑量與監測 | 0.5-1 mg/kg/day vs 更高劑量，血小板功能檢測（PFA-100/Multiplate）的臨床切點尚未確立 | Level III |`,
  clinical_pearl: 'Rodenticide 中毒時 Factor VII 半衰期最短（犬約 6 小時），所以 PT 會比 aPTT 更早延長。如果犬出現不明原因出血且 PT 延長但 aPTT 仍正常，rodenticide 中毒應列為首要鑑別。治療用 Vitamin K1 而非 K3。',
  common_mistakes: [
    '凝血管採血量不足（< 90% 填充），導致枸櫞酸鈉過量，PT/aPTT 假性延長',
    '未在 1 小時內離心處理凝血樣本，Factor V 和 VIII 在室溫下不穩定',
    '將 DIC 視為獨立疾病而非基礎疾病的併發症——需尋找並治療原發病因',
    '忽略血小板計數在凝血評估中的重要性，僅關注 PT/aPTT',
    '犬 PCV < 25% 時，凝血管需調整枸櫞酸鈉用量（嚴重貧血偏差）',
  ],
  disease_data: null,
  diagnostic_data: {
    indication: ['不明原因出血', '術前凝血篩檢', 'Rodenticide 中毒疑似', 'DIC 評估', '肝病凝血功能監測', '抗凝血藥物監測'],
    contraindication: ['無絕對禁忌症。採樣時避免創傷性採血以減少組織因子（TF）汙染。'],
    technique: '使用藍頭管（3.2% 枸櫞酸鈉），精確 9:1（血液:抗凝劑）比例。避免創傷性採血。採集後輕輕翻轉混合，30 分鐘內離心分離血漿（1500g, 15 min）。如無法即時分析，血漿可冷凍（-20°C）保存。',
    normal_findings: [
      { finding: 'PT', description: '犬 6-10 sec，貓 8-14 sec', significance: '外源性與共同途徑凝血因子功能正常' },
      { finding: 'aPTT', description: '犬 10-16 sec，貓 12-18 sec', significance: '內源性與共同途徑凝血因子功能正常' },
      { finding: 'Fibrinogen', description: '犬 200-400 mg/dL，貓 150-300 mg/dL', significance: '纖維蛋白原充足，急性期反應蛋白' },
    ],
    abnormal_findings: [
      { finding: 'PT 單獨延長', description: 'PT > 正常上限 25%，aPTT 正常', significance: 'Factor VII 缺乏：早期 rodenticide 中毒首選鑑別' },
      { finding: 'aPTT 單獨延長', description: 'aPTT > 正常上限 25%，PT 正常', significance: 'Hemophilia A（VIII）或 B（IX），lupus anticoagulant' },
      { finding: 'PT + aPTT 均延長', description: '兩者均超過正常上限', significance: 'DIC、嚴重肝病、晚期 rodenticide 中毒' },
      { finding: 'D-dimer 升高', description: '> 250 ng/mL', significance: '纖維蛋白溶解增加，提示 DIC 或血栓' },
    ],
    interpretation_guide: '1. 檢查血小板數量（初級止血）。2. 評估 PT（外源性途徑）。3. 評估 aPTT（內源性途徑）。4. 如懷疑 DIC，加做 fibrinogen、D-dimer、AT。5. 整合臨床背景。',
    pitfalls: [
      '藍頭管填充不足是最常見的分析前誤差',
      '組織因子汙染（創傷性採血）使 PT 假性縮短',
      '室溫放置過久導致 Factor V/VIII 降解',
      '嚴重脂血干擾光學檢測法的 PT/aPTT 結果',
    ],
    sensitivity_specificity: 'PT/aPTT 對凝血因子活性 < 30% 時才會延長，因此正常結果不代表凝血因子完全正常。D-dimer 敏感度高但特異度低（發炎、手術後均可升高）。',
    cost_benefit: '基礎凝血篩檢（PT/aPTT/PLT）成本中等，對出血患者必不可少。D-dimer 和 AT 檢測成本較高，用於 DIC 確診。',
  },
  procedure_data: null,
  visual_placeholders: [
    { position: '止血機制概述後', type: 'flowchart', description: '凝血瀑布與 PT/aPTT 評估範圍圖' },
    { position: '異常模式判讀表後', type: 'flowchart', description: '出血患者凝血檢查判讀流程圖' },
  ],
  interactive_placeholders: [
    { position: '文末', type: 'interactive_quiz', description: '凝血檢查結果判讀：根據 PT/aPTT/PLT 組合推導鑑別診斷' },
  ],
  drug_api_links: ['vitamin-K1'],
  references: [
    { type: 'textbook', citation: 'Stockham SL, Scott MA. Fundamentals of Veterinary Clinical Pathology, 2nd ed. Blackwell, 2008.', relevance: '凝血功能檢查判讀教材' },
    { type: 'textbook', citation: 'Brooks MB, Catalfamo JL. "Coagulopathies and Thrombosis." In: Weiss DJ, Wardrop KJ, eds. Schalm\'s Veterinary Hematology, 6th ed. 2010:612-628.', relevance: '凝血疾病的血液學參考' },
    { type: 'journal', citation: 'Wiinberg B et al. "Tissue factor activated thromboelastography correlates to clinical signs of bleeding in dogs." Vet J 2009;179(1):121-129.', relevance: '凝血功能檢查與臨床出血的相關性' },
    { type: 'guideline', citation: 'deLaforcade A, Bacek L, Bhatt S, et al. ACVIM consensus statement: 2022 update on the diagnosis of immune-mediated hemolytic anemia and immune-mediated thrombocytopenia in dogs. J Vet Intern Med. 2022;36(6):1895-1913.', relevance: 'ACVIM 免疫介導血小板減少與凝血異常診斷共識' },
  ],
  is_current: true,
  created_at: now,
};

/** 血液氣體分析 — 診斷型 */
const contentBloodGas: NodeContent = {
  id: 'CONTENT-CPATH-L4-005',
  node_id: 'CPATH-L4-005',
  version: 1,
  summary: '血液氣體分析（blood gas analysis）評估酸鹼平衡與氧合狀態，是重症照護與急診醫學的核心檢查。系統性判讀需掌握 pH、pCO₂、HCO₃⁻ 與 base excess 的關係。',
  learning_objectives: [
    '執行血液氣體判讀的系統性五步驟',
    '區分四種原發性酸鹼失衡及其代償反應',
    '計算陰離子間隙（anion gap）並解釋其臨床意義',
    '判讀 PaO₂ 與 P/F ratio 評估氧合功能',
    '辨識混合性酸鹼失衡',
  ],
  key_points: [
    '正常動脈血 pH：犬/貓 7.35-7.45；pCO₂：35-45 mmHg；HCO₃⁻：20-24 mEq/L',
    '代謝性酸中毒（metabolic acidosis）最常見於腎衰竭、糖尿病酮酸中毒、乳酸酸中毒',
    '呼吸性酸中毒（respiratory acidosis）= 通氣不足 → pCO₂↑',
    'Anion gap = Na⁺ - (Cl⁻ + HCO₃⁻)，正常犬 12-24 mEq/L，貓 13-27 mEq/L',
    'High AG metabolic acidosis：DKA、乳酸中毒、ethylene glycol 中毒、尿毒症',
    'Normal AG (hyperchloremic) metabolic acidosis：腹瀉、RTA、大量生理食鹽水',
    'P/F ratio = PaO₂/FiO₂，< 300 為 ALI，< 200 為 ARDS',
    '靜脈血氣可替代動脈血氣評估酸鹼狀態，但不能評估氧合',
  ],
  body: `# 血液氣體分析 (Blood Gas Analysis)

## 一、檢查原理與適應症 (Principles & Indications)



### 靜脈血氣 vs 動脈血氣
| 項目 | 靜脈血氣 | 動脈血氣 |
|------|---------|---------|
| pH | 低 0.02-0.05 | 金標準 |
| pCO₂ | 高 3-8 mmHg | 金標準 |
| HCO₃⁻ | 相近 | 金標準 |
| PaO₂ | 不能評估 | 必須用動脈 |

臨床上靜脈血氣足以評估酸鹼狀態；但評估氧合必須使用動脈血氣或脈衝式血氧儀。

## 二、判讀要點 (Interpretation)

### 系統性五步驟判讀法
### Step 1：看 pH
- < 7.35 → acidemia
- > 7.45 → alkalemia

### Step 2：判斷原發性失衡
- pH ↓ + pCO₂ ↑ → 呼吸性酸中毒
- pH ↓ + HCO₃⁻ ↓ → 代謝性酸中毒
- pH ↑ + pCO₂ ↓ → 呼吸性鹼中毒
- pH ↑ + HCO₃⁻ ↑ → 代謝性鹼中毒

### Step 3：評估代償
| 原發失衡 | 預期代償 |
|---------|---------|
| 代謝性酸中毒 | pCO₂ = 1.5 × HCO₃⁻ + 8 ± 2（Winter's formula） |
| 代謝性鹼中毒 | pCO₂ ↑ 0.7 mmHg per 1 mEq/L HCO₃⁻ ↑ |
| 急性呼吸性酸中毒 | HCO₃⁻ ↑ 1 per 10 mmHg pCO₂ ↑ |
| 慢性呼吸性酸中毒 | HCO₃⁻ ↑ 3.5 per 10 mmHg pCO₂ ↑ |

### Step 4：計算 Anion Gap
AG = Na⁺ - (Cl⁻ + HCO₃⁻)

| AG 類型 | 提示 |
|---------|------|
| High AG (> 25) | 有機酸堆積：乳酸、酮體、ethylene glycol、uremic toxins |
| Normal AG | 高氯性：腹瀉、RTA、NS 過量輸液 |

### Step 5：評估氧合（僅動脈血氣）
- PaO₂ 正常：80-100 mmHg（room air）
- P/F ratio < 300 → acute lung injury
- P/F ratio < 200 → ARDS
- A-a gradient = [(FiO₂ × 713) - (PaCO₂/0.8)] - PaO₂

## 三、常見陷阱 (Pitfalls)

### 分析前誤差
- **氣泡殘留**：樣本中空氣氣泡使 PaO₂ 假性升高（向 150 mmHg 偏移）、PaCO₂ 假性降低。採樣後必須立即排出氣泡並密封。
- **延遲分析**：室溫放置 > 15 分鐘，白血球與紅血球持續代謝 → pH 下降、PaCO₂ 上升、PaO₂ 下降、乳酸升高。置冰上可延長至 30 分鐘。
- **肝素過量稀釋**：液態肝素殘留量過多會稀釋樣本，使 pCO₂ 與 HCO₃⁻ 假性降低（每 10% 稀釋量約使 pCO₂ 降低 5-10%）。建議使用乾燥平衡肝素注射器（dry balanced heparin syringe）。

### 判讀陷阱
- **未驗證代償**：只看 pH 和原發失衡就下結論，忽略使用 Winter's formula 或代償預期值。結果可能遺漏混合性酸鹼失衡（如 DKA + 呼吸性鹼中毒）。
- **靜脈血評氧合**：靜脈血 pO₂（通常 35-50 mmHg）反映組織氧消耗，不代表肺部氧合功能。只有動脈血 PaO₂ 與 P/F ratio 才能評估肺功能。
- **忽略體溫效應**：低體溫使 O₂ 與 CO₂ 溶解度增加，pH 升高。體溫每低 1°C，pH 約升高 0.015，未校正可能誤判為鹼血症。
- **FiO₂ 假設錯誤**：計算 A-a gradient 和 P/F ratio 時，常假設 FiO₂ = 21%（room air），但若患畜已接受氧氣治療則需使用實際 FiO₂。
- **單一時間點判斷**：趨勢比單一數值更重要。乳酸 4 mmol/L 但呈下降趨勢，比 2.5 mmol/L 但持續上升更樂觀。

## 四、人醫借鑒 (Translational Insights)

| 人醫工具/概念 | 獸醫應用潛力 | 現況 |
|-------------|-------------|------|
| Stewart 理化模型（strong ion approach） | 比傳統 Henderson-Hasselbalch 更精確解釋複雜酸鹼失衡 | 人醫 ICU 逐漸採用，獸醫研究驗證中 |
| 經皮 CO₂ 連續監測 | 減少反覆動脈穿刺，適用長期通氣監測 | 人醫新生兒/ICU 使用，獸醫初步研究 |
| Point-of-care 血氣 + i-STAT 系統 | 床邊即時結果（< 2 分鐘），提升急診決策速度 | 獸醫急診已普及 i-STAT，但成本仍偏高 |

## 五、臨床爭議與知識空缺 (Controversies & Knowledge Gaps)

| 爭議議題 | 現況 | Evidence Level |
|---------|------|---------------|
| 犬貓靜脈血氣替代動脈血氣的適用範圍 | pH 與 HCO₃⁻ 差異小可接受；pCO₂ 差異較大（3-8 mmHg），嚴重呼吸疾患可能影響判讀 | Level II |
| Stewart approach vs Henderson-Hasselbalch 在獸醫的實用性 | Stewart 可揭示隱性酸鹼失衡，但計算複雜且缺乏獸醫臨床驗證共識 | Level III |
| Base excess vs bicarbonate 作為代謝性酸中毒指標 | BE 已標準化（SBE），但不同血氣機器間仍有差異；HCO₃⁻ 為計算值非實測值 | Level III |`,
  clinical_pearl: '急診時不必等動脈血氣——靜脈血氣的 pH 和 HCO₃⁻ 與動脈極為接近（差異 < 0.05 和 < 2 mEq/L），足以快速判斷酸鹼狀態並啟動治療。只有在需要評估氧合功能（如呼吸窘迫）時才必須採動脈血。',
  common_mistakes: [
    '樣本中有氣泡未排出，導致 pO₂ 假性升高、pCO₂ 假性降低',
    '使用靜脈血氣的 pO₂ 評估氧合功能——靜脈 pO₂ 無法反映肺部氧合能力',
    '未使用 Winter\'s formula 驗證代償是否適當，遺漏混合性酸鹼失衡',
    '忽略溫度校正：體溫每低 1°C，pH 約升高 0.015',
    '將 high anion gap 酸中毒的所有原因簡化為乳酸酸中毒，未考慮 DKA 或中毒',
  ],
  disease_data: null,
  diagnostic_data: {
    indication: ['急診酸鹼評估', '呼吸窘迫氧合評估', 'DKA 監測', '麻醉中監測', '休克評估', '機械通氣調整'],
    contraindication: ['動脈採血的相對禁忌：嚴重凝血障礙（可用靜脈血氣替代酸鹼評估）'],
    technique: '動脈血氣：股動脈或背側蹠動脈穿刺，使用預含肝素的注射器採集 0.5-1 mL。排出氣泡後立即密封。靜脈血氣：任何靜脈血均可。樣本需 15 分鐘內分析或置冰上（延遲使 pH↓、pCO₂↑、pO₂↓）。',
    normal_findings: [
      { finding: 'pH（動脈）', description: '犬/貓 7.35-7.45', significance: '酸鹼平衡總指標' },
      { finding: 'pCO₂', description: '35-45 mmHg', significance: '呼吸性成分，反映通氣功能' },
      { finding: 'HCO₃⁻', description: '20-24 mEq/L', significance: '代謝性成分' },
      { finding: 'PaO₂', description: '80-100 mmHg (room air)', significance: '氧合功能指標（僅動脈血）' },
      { finding: 'Base excess', description: '-4 to +4 mEq/L', significance: '代謝性酸鹼失衡的量化指標' },
    ],
    abnormal_findings: [
      { finding: '代謝性酸中毒', description: 'pH ↓ + HCO₃⁻ ↓ + BE 負值', significance: '腎衰竭、DKA、乳酸酸中毒、中毒' },
      { finding: '呼吸性酸中毒', description: 'pH ↓ + pCO₂ ↑', significance: '通氣不足：上呼吸道阻塞、肺實質疾病、神經肌肉疾病' },
      { finding: '代謝性鹼中毒', description: 'pH ↑ + HCO₃⁻ ↑', significance: '嘔吐（失 HCl）、利尿劑、低鉀' },
      { finding: 'High AG acidosis', description: 'AG > 25 mEq/L + 代謝性酸中毒', significance: '有機酸堆積：乳酸、酮體、ethylene glycol' },
    ],
    interpretation_guide: '1. 看 pH 判斷 acidemia/alkalemia。2. 看 pCO₂ 和 HCO₃⁻ 判斷原發失衡。3. 用代償公式驗證。4. 算 AG。5. 評估 PaO₂（動脈血）。',
    pitfalls: [
      '樣本含氣泡使 pO₂ 升高、pCO₂ 降低',
      '延遲分析使 pH 降低（細胞繼續代謝）',
      '肝素過量稀釋樣本',
      '未考慮體溫對 pH 的影響',
    ],
    sensitivity_specificity: '血液氣體分析為酸鹼與氧合評估的金標準。其準確度取決於分析前因素（樣本處理），而非檢測方法本身。',
    cost_benefit: '需要 point-of-care 血氣分析儀，設備與試劑成本較高。但對重症與急診病患為不可替代的即時監測工具。',
  },
  procedure_data: null,
  visual_placeholders: [
    { position: '五步驟判讀法後', type: 'flowchart', description: '酸鹼失衡判讀流程圖' },
    { position: 'Anion Gap 段落後', type: 'comparison_table', description: 'High AG vs Normal AG 代謝性酸中毒鑑別表' },
  ],
  interactive_placeholders: [
    { position: '文末', type: 'interactive_quiz', description: '血液氣體判讀練習：給定數值判斷酸鹼失衡類型' },
  ],
  drug_api_links: ['sodium-bicarbonate'],
  references: [
    { type: 'textbook', citation: 'DiBartola SP. Fluid, Electrolyte, and Acid-Base Disorders in Small Animal Practice, 4th ed. Elsevier, 2012.', relevance: '酸鹼平衡核心教材' },
    { type: 'textbook', citation: 'Silverstein DC, Hopper K. Small Animal Critical Care Medicine, 2nd ed. Elsevier, 2015.', relevance: '急診血氣判讀與臨床應用' },
    { type: 'journal', citation: 'Hopper K et al. "Assessment of the effect of dilution of blood samples with sodium heparin on blood gas, electrolyte, and lactate measurements in dogs." Am J Vet Res 2005;66(4):656-660.', relevance: '肝素稀釋對血氣結果的影響研究' },
    { type: 'guideline', citation: 'ASVCP Quality Assurance and Laboratory Standards Committee. "Principles of quality assurance and standards for veterinary clinical pathology (blood gas analysis)." Vet Clin Pathol. 2009;38(2):141-149.', relevance: 'ASVCP 血氣分析品質保證標準' },
  ],
  is_current: true,
  created_at: now,
};

/** 體液分析 — 診斷型 */
const contentBodyFluid: NodeContent = {
  id: 'CONTENT-CPATH-L4-006',
  node_id: 'CPATH-L4-006',
  version: 1,
  summary: '體液分析涵蓋胸水、腹水、心包液、關節液與腦脊髓液（CSF）的物理性狀、化學成分與細胞學評估。正確分類體液（transudatE vs exudate）是病因診斷的關鍵第一步。',
  learning_objectives: [
    '將體腔積液分類為 pure transudate、modified transudate 與 exudate',
    '判讀體液 TP、TNCC、比重與細胞學的綜合意義',
    '辨識感染性與非感染性滲出液的特徵',
    '描述 CSF 分析的正常參數與常見異常',
    '說明關節液分析在多關節炎鑑別中的角色',
  ],
  key_points: [
    'Pure transudate：TP < 2.5 g/dL，TNCC < 1500/μL → 低白蛋白血症、早期門脈高壓',
    'Modified transudate：TP 2.5-5.0 g/dL，TNCC 1000-7000/μL → 心衰竭、腫瘤、肝病',
    'Exudate：TP > 3.0 g/dL，TNCC > 7000/μL → 感染、FIP、腫瘤、膽汁/尿液外漏',
    '貓 FIP effusion 特徵：高蛋白（> 3.5 g/dL）、低細胞數、A:G ratio < 0.4、Rivalta test 陽性',
    'Septic exudate：退化嗜中性球 + 細胞內細菌 → 立即需要引流與抗生素',
    'CSF 正常：TP < 25 mg/dL，TNCC < 5/μL；蛋白升高+細胞增多提示發炎',
    '關節液 TNCC > 3000/μL 提示關節炎；> 50,000 + 退化嗜中性球 = septic arthritis',
    'Uroabdomen 確診：腹水 creatinine/血清 creatinine > 2:1',
  ],
  body: `# 體液分析 (Body Fluid Analysis)

## 一、檢查原理與適應症 (Principles & Indications)



### 體腔積液分類
| 類型 | TP (g/dL) | TNCC (/μL) | 常見原因 |
|------|-----------|------------|---------|
| Pure transudate | < 2.5 | < 1500 | 低白蛋白、早期門脈高壓 |
| Modified transudate | 2.5-5.0 | 1000-7000 | CHF、腫瘤、肝病 |
| Exudate（非化膿性） | > 3.0 | > 7000 | FIP、腫瘤 |
| Exudate（化膿性） | > 3.0 | > 7000 | 細菌感染（pyothorax/peritonitis） |
| Hemorrhagic | > 3.0 | 類似血液 | 創傷、腫瘤出血、凝血障礙 |

### 特殊體液類型
### Chylothorax（乳糜胸）
- 外觀乳白色
- Triglyceride（胸水）> 血清 triglyceride
- Cholesterol（胸水）< 血清 cholesterol

### Uroabdomen（尿腹）
- 腹水 creatinine / 血清 creatinine > 2:1
- 腹水 K⁺ > 血清 K⁺

### Bile peritonitis（膽汁性腹膜炎）
- 腹水 bilirubin / 血清 bilirubin > 2:1

### 貓 FIP 積液特徵
- 高蛋白（> 3.5 g/dL），黏稠、淡黃色
- 低細胞數（以巨噬細胞/嗜中性球為主）
- A:G ratio < 0.4（高度提示 FIP）
- Rivalta test 陽性（1 滴積液於 8% 醋酸中不溶解）

## 二、判讀要點 (Interpretation)

### 腦脊髓液（CSF）分析
| 參數 | 正常 | 異常提示 |
|------|------|---------|
| TP | < 25 mg/dL | 升高：發炎、腫瘤 |
| TNCC | < 5/μL | 升高：meningitis/encephalitis |
| 細胞型態 | 小淋巴球為主 | 嗜中性球↑=化膿性；單核球↑=肉芽腫性/病毒性 |

### 關節液分析
- 正常：TNCC < 3000/μL，黏稠度高，透明
- 非感染性關節炎：TNCC 3000-50,000，非退化嗜中性球
- Septic arthritis：TNCC > 50,000，退化嗜中性球 ± 細胞內細菌

## 三、常見陷阱 (Pitfalls)

## 四、人醫借鑒 (Translational Insights)

| 人醫工具/概念 | 獸醫應用潛力 | 現況 |
|-------------|-------------|------|
| 自動化體液分析儀（Sysmex BF mode） | 犬貓體液 TNCC 與分類計數自動化，減少人工計數誤差 | 人醫已常規使用 body fluid mode，獸醫初步驗證顯示犬貓體液適用 |
| Biomarker panel（procalcitonin、lactate、glucose ratio） | 區分犬貓感染性 vs 非感染性滲出液，提升 septic effusion 診斷速度 | 人醫胸/腹水 glucose ratio 與 LDH 已納入 Light's criteria，獸醫驗證中 |
| 腦脊髓液 neurofilament light chain（NfL） | 犬貓 CNS 疾病活動度與預後評估的非侵入性生物標記 | 人醫 MS/AD 研究熱門，獸醫犬 CSF NfL 初步研究顯示與 CNS 疾病嚴重度相關 |

## 五、臨床爭議與知識空缺 (Controversies & Knowledge Gaps)

| 爭議議題 | 現況 | Evidence Level |
|---------|------|---------------|
| 犬貓體腔積液三分類（transudate/modified transudate/exudate）的適用性 | 此傳統分類有大量重疊區，部分學者主張改用類似人醫 Light's criteria 的多參數分類 | Level III |
| 貓 FIP 積液 Rivalta test 的診斷效能 | 敏感度高（> 90%）但特異度因研究而異（70-98%），單獨使用不足以確診 | Level II |
| CSF 採樣最佳時機：腦 MRI 前 vs 後 | MRI 後採 CSF 可能受對比劑影響蛋白質濃度，但先 MRI 可避免不必要的 CSF 採集 | Level IV |`,
  clinical_pearl: '判斷腹水是否為 uroabdomen 時，腹水 creatinine 與血清 creatinine 的比值 > 2:1 是最可靠的確診依據。但要注意，剛發生膀胱破裂時腹水可能尚未充分平衡，早期比值可能低於預期——如臨床高度懷疑應隔 1-2 小時重採。',
  common_mistakes: [
    '僅依據外觀顏色就分類體液，未做 TP 與 TNCC 的定量分析',
    '將所有高蛋白體液都歸為感染性滲出液，忽略 FIP 和腫瘤性滲出',
    '未計算胸水/血清 triglyceride 比值就排除 chylothorax',
    'CSF 採樣後未立即分析（> 30 分鐘細胞開始退化），低估 TNCC',
    '關節液分析未區分退化性與非退化性嗜中性球，誤判 septic vs immune-mediated',
  ],
  disease_data: null,
  diagnostic_data: {
    indication: ['體腔積液評估', '關節積液鑑別', 'CSF 分析（神經症狀）', 'FIP 疑似', '腹腔創傷評估（uroabdomen/bile peritonitis）'],
    contraindication: ['CSF 採集禁忌：顱內壓升高、枕骨大孔疝脫風險', '嚴重凝血障礙時體腔穿刺需謹慎'],
    technique: '體腔穿刺（thoracocentesis/abdominocentesis）採集體液。分裝：EDTA 管（細胞學）+ 無添加劑管（化學分析）+ 培養瓶（如疑感染）。CSF 經枕骨大孔或腰椎穿刺採集 0.5-1 mL。所有體液需 30 分鐘內處理分析。',
    normal_findings: [
      { finding: '正常腹膜液', description: '少量、TP < 2.5 g/dL，TNCC < 1500/μL', significance: '無顯著積液' },
      { finding: '正常 CSF', description: 'TP < 25 mg/dL，TNCC < 5/μL，透明無色', significance: '無中樞神經發炎' },
      { finding: '正常關節液', description: 'TNCC < 3000/μL，高黏稠度，透明', significance: '無關節發炎' },
    ],
    abnormal_findings: [
      { finding: 'Septic exudate', description: '退化嗜中性球為主 + 細胞內細菌', significance: '細菌感染，需緊急引流與抗生素' },
      { finding: 'FIP effusion', description: '高蛋白 + 低細胞數 + A:G < 0.4', significance: '高度支持 FIP 診斷' },
      { finding: 'Chylous effusion', description: '乳白色 + 胸水 TG > 血清 TG', significance: '乳糜胸，需查原因（心病、腫瘤、特發性）' },
      { finding: 'CSF pleocytosis', description: 'TNCC > 5/μL', significance: '中樞神經發炎，需鑑別感染性 vs 免疫介導' },
    ],
    interpretation_guide: '1. 評估外觀（顏色、透明度、黏稠度）。2. 測量 TP 與 TNCC 分類。3. 細胞學評估細胞型態。4. 必要時做化學比較（creatinine, bilirubin, triglyceride ratio）。5. 整合臨床。',
    pitfalls: [
      '採樣時血液汙染使 TP 和 TNCC 假性升高',
      'CSF 延遲處理導致細胞退化、低估 TNCC',
      '未同時採集血液做化學比較（無法計算 ratio）',
      'EDTA 管不足或凝固導致無法做細胞學',
    ],
    sensitivity_specificity: '體液分類（transudate/exudate）對病因診斷的方向性極佳，但最終確診常需結合影像學與進一步檢查。CSF 分析對 CNS 發炎的敏感度高，但特異度取決於細胞學模式。',
    cost_benefit: '採樣技術簡單、分析成本低。為體腔積液患者的必要第一線檢查，提供極高的診斷價值。',
  },
  procedure_data: null,
  visual_placeholders: [
    { position: '體腔積液分類表後', type: 'flowchart', description: '體腔積液分類判讀流程圖' },
    { position: 'CSF 分析表後', type: 'comparison_table', description: 'CSF 異常細胞模式與對應疾病' },
  ],
  interactive_placeholders: [
    { position: '文末', type: 'interactive_quiz', description: '體液數據判讀：分類體液類型並列出鑑別診斷' },
  ],
  drug_api_links: [],
  references: [
    { type: 'textbook', citation: 'Stockham SL, Scott MA. Fundamentals of Veterinary Clinical Pathology, 2nd ed. Blackwell, 2008.', relevance: '體液分析核心教材' },
    { type: 'textbook', citation: 'Cowell RL et al. Diagnostic Cytology and Hematology of the Dog and Cat, 4th ed. Elsevier, 2014.', relevance: '體液細胞學判讀參考' },
    { type: 'journal', citation: 'Dempsey SM, Ewing PJ. "A review of the pathophysiology, classification, and analysis of canine and feline cavitary effusions." J Am Anim Hosp Assoc 2011;47(1):1-11.', relevance: '體腔積液分類的病理生理學回顧' },
    { type: 'guideline', citation: 'WSAVA Liver Standardization Group. "WSAVA Standards for Clinical and Histological Diagnosis of Canine and Feline Liver Diseases." J Comp Pathol. 2006;134(Suppl 2):S1-S36.', relevance: 'WSAVA 肝臟疾病標準化指引——腹水分析在肝病中的應用' },
  ],
  is_current: true,
  created_at: now,
};

/** 骨髓抹片判讀 — 診斷型 */
const contentBoneMarrow: NodeContent = {
  id: 'CONTENT-CPATH-L4-007',
  node_id: 'CPATH-L4-007',
  version: 1,
  summary: '骨髓抹片判讀評估造血功能的質與量，是非再生性貧血、持續性血球減少症、白血病與骨髓增生異常的確診工具。需同時評估 aspiration smear 和 core biopsy。',
  learning_objectives: [
    '列舉骨髓採樣的適應症與常用採樣部位',
    '描述正常骨髓的細胞比例（M:E ratio）與成熟序列',
    '判讀骨髓 M:E ratio 異常的臨床意義',
    '辨識白血病與骨髓增生異常的骨髓特徵',
    '整合周邊血液與骨髓結果做綜合評估',
  ],
  key_points: [
    '骨髓採樣適應症：非再生性貧血/血球減少症、疑似白血病、不明原因發熱合併血球異常',
    '犬貓常用採樣部位：肱骨近端、髂骨翼、股骨粗隆',
    '正常 M:E ratio（myeloid:erythroid）：犬 0.75-2.5:1，貓 1.0-3.0:1',
    'M:E ratio ↑：骨髓系增生（感染、CML）或紅血球系減少（PRCA）',
    'M:E ratio ↓：紅血球系增生（再生性貧血的骨髓代償）或骨髓系減少',
    '巨核細胞正常每低倍視野（10x）可見 2-5 個',
    '骨髓 blast cells > 20% 為急性白血病的診斷標準（WHO 分類）',
    '骨髓採樣需同時做 aspiration（細胞形態）+ core biopsy（整體架構與細胞量）',
  ],
  body: `# 骨髓抹片判讀 (Bone Marrow Evaluation)

## 一、檢查原理與適應症 (Principles & Indications)



### 適應症
- 持續性非再生性貧血（> 3-5 天）
- 不明原因的持續性白血球減少或血小板減少
- 周邊血液出現異常幼稚細胞（blast cells）
- 不明原因發熱合併血球減少（bicytopenia/pancytopenia）
- 高鈣血症伴不明原因（疑似多發性骨髓瘤）

### 採樣與抹片製作
### 採樣部位
- **肱骨近端（proximal humerus）**：犬最常用，大型犬尤其方便
- **髂骨翼（iliac crest）**：犬貓均可，貓最常用
- **股骨粗隆（trochanteric fossa）**：替代部位

### 抹片類型
1. **Aspiration smear**：評估細胞形態、M:E ratio、成熟序列
2. **Core biopsy**：評估整體細胞量、纖維化、architecture
3. **Particle crush prep**：骨髓顆粒壓片，兼具兩者優點

### 鐵質評估
- Prussian blue 染色評估儲存鐵
- 缺鐵：儲存鐵消失 + 小球性低色素性貧血
- 慢性疾病貧血：儲存鐵正常或增加

## 二、判讀要點 (Interpretation)

### 系統性判讀
### Step 1：評估樣本品質
- 顆粒（particle）是否充足
- 是否有血液稀釋（hemodilution）

### Step 2：低倍掃描
- 整體細胞量（cellularity）：正常成年犬 25-75%
- 巨核細胞數量與形態

### Step 3：M:E Ratio
| M:E Ratio | 意義 |
|-----------|------|
| ↑ (> 3:1) | 骨髓系增生或紅血球系減少 |
| ↓ (< 0.75:1) | 紅血球系增生或骨髓系減少 |
| 正常 | 兩系列同時增生或同時減少 |

### Step 4：成熟序列評估
- 各系列是否有正常的「金字塔」成熟模式
- 成熟停滯（maturation arrest）：某階段以後的細胞明顯減少

### Step 5：異常細胞辨識
- Blast cells > 20% → 急性白血病
- 異常顆粒、雙核、環形鐵母細胞 → 骨髓增生異常症候群（MDS）
- 轉移性腫瘤細胞：成團的非造血細胞

## 三、常見陷阱 (Pitfalls)

## 四、人醫借鑒 (Translational Insights)

| 人醫工具/概念 | 獸醫應用潛力 | 現況 |
|-------------|-------------|------|
| 流式細胞術骨髓免疫表型分析 | 犬貓急性白血病的 lineage 確認（AML vs ALL）與 MRD 監測 | 人醫白血病診斷常規，獸醫犬白血病 flow cytometry panel 已有商業服務 |
| 骨髓 Next-Generation Sequencing（NGS） | 犬骨髓增生異常/白血病的突變分析與預後分層 | 人醫 MDS/AML 基因分型指引治療，獸醫犬 MDS 突變研究起步中 |
| 數位骨髓判讀（digital bone marrow analysis） | AI 輔助犬貓骨髓細胞分類計數與 M:E ratio 自動化 | 人醫數位病理骨髓判讀平台發展中，獸醫尚無專用系統 |

## 五、臨床爭議與知識空缺 (Controversies & Knowledge Gaps)

| 爭議議題 | 現況 | Evidence Level |
|---------|------|---------------|
| 犬貓骨髓抹片判讀的觀察者間一致性 | M:E ratio 與 cellularity 的主觀評估在不同判讀者間差異大，標準化計數方法待建立 | Level IV |
| 犬 MDS 的診斷標準與分類系統 | 人醫 WHO 標準在犬的適用性有限，犬專用 MDS 分類仍缺乏國際共識 | Level IV |
| 骨髓 core biopsy vs aspiration 的相對必要性 | 部分學者認為 aspiration 品質佳時可免 core biopsy，但 core 對纖維化和 architecture 評估不可替代 | Level III |`,
  clinical_pearl: '骨髓 aspiration 的最大陷阱是血液稀釋（hemodilution）——如果抽吸量超過 0.5 mL，周邊血液會大量混入，使骨髓評估失準。正確做法是快速抽吸 0.3-0.5 mL 即停，立刻製作抹片。如果 aspiration 失敗（dry tap），core biopsy 更顯重要。',
  common_mistakes: [
    '骨髓抽吸量過多（> 1 mL）導致嚴重血液稀釋，M:E ratio 不可靠',
    '僅做 aspiration 而未做 core biopsy，遺漏骨髓纖維化或腫瘤浸潤',
    '未在骨髓採樣前先完成周邊血液 CBC 與抹片，缺乏比較基準',
    '忽略巨核細胞評估（數量與形態），遺漏 ITP 的骨髓代償反應或白血病浸潤',
    '在非再生性貧血不到 3-5 天就採骨髓，此時骨髓尚未充分反應',
  ],
  disease_data: null,
  diagnostic_data: {
    indication: ['非再生性血球減少症', '疑似白血病', '不明原因全血球減少（pancytopenia）', '多發性骨髓瘤疑似', '不明原因發熱合併血球異常', '鐵質狀態評估'],
    contraindication: ['嚴重凝血障礙（相對禁忌，需先矯正）', '採樣部位感染'],
    technique: '在鎮靜或全身麻醉下，使用 Illinois 或 Jamshidi 骨髓穿刺針。先做 aspiration（快速抽吸 0.3-0.5 mL），立即製作 squash prep 抹片。再用 Jamshidi 針取 core biopsy（≥ 1 cm）。Aspiration 以 Wright-Giemsa 染色，core biopsy 以 H&E 染色。',
    normal_findings: [
      { finding: 'Cellularity', description: '成年犬 25-75%（年輕動物較高）', significance: '骨髓造血活性指標' },
      { finding: 'M:E ratio', description: '犬 0.75-2.5:1，貓 1.0-3.0:1', significance: '骨髓系與紅血球系的相對比例' },
      { finding: '巨核細胞', description: '2-5 個/低倍視野', significance: '血小板生成能力' },
      { finding: '儲存鐵', description: 'Prussian blue 染色可見含鐵巨噬細胞', significance: '鐵質儲備狀態' },
    ],
    abnormal_findings: [
      { finding: 'Blast cells > 20%', description: '大量幼稚細胞，核仁明顯', significance: '急性白血病（AML 或 ALL）' },
      { finding: 'Maturation arrest', description: '某成熟階段後細胞驟減', significance: '白血病前期、藥物毒性、感染（如 Parvovirus）' },
      { finding: 'Hypocellular marrow', description: '細胞量 < 25%', significance: '再生不良性貧血、骨髓毒性（化療、Ehrlichia）' },
      { finding: '骨髓纖維化', description: 'Core biopsy 見大量膠原纖維', significance: '骨髓纖維化症、繼發於腫瘤浸潤' },
    ],
    interpretation_guide: '1. 確認樣本品質（顆粒充足、無過度稀釋）。2. 低倍評估 cellularity 與巨核細胞。3. 計算 M:E ratio。4. 高倍評估各系列成熟序列。5. 尋找異常細胞（blast、轉移瘤）。6. 整合周邊血液結果。',
    pitfalls: [
      '血液稀釋使細胞量被低估、M:E ratio 偏向周邊血液比例',
      'Dry tap（抽不到骨髓液）可能表示骨髓纖維化或 packed marrow',
      '未做鐵染色而遺漏缺鐵性貧血',
      '僅依 aspiration 判讀而忽略 core biopsy 的 architecture 資訊',
    ],
    sensitivity_specificity: '骨髓評估為造血系統疾病的金標準檢查。對急性白血病的確診率極高（blast > 20% 為診斷標準）。但對骨髓增生異常早期的敏感度取決於判讀經驗。',
    cost_benefit: '需鎮靜/麻醉，侵入性中等。成本中高，但對非再生性血球減少症與白血病的確診不可替代。',
  },
  procedure_data: null,
  visual_placeholders: [
    { position: 'M:E Ratio 段落後', type: 'annotated_image', description: '正常骨髓抹片各系列細胞辨識標註圖' },
    { position: '異常細胞辨識段落後', type: 'comparison_table', description: '正常骨髓 vs 白血病骨髓比較圖' },
  ],
  interactive_placeholders: [
    { position: '文末', type: 'interactive_quiz', description: '骨髓抹片判讀練習：辨識正常與異常造血細胞' },
  ],
  drug_api_links: [],
  references: [
    { type: 'textbook', citation: 'Weiss DJ, Wardrop KJ. Schalm\'s Veterinary Hematology, 6th ed. Wiley-Blackwell, 2010.', relevance: '骨髓判讀權威參考教材' },
    { type: 'textbook', citation: 'Harvey JW. Veterinary Hematology: A Diagnostic Guide and Color Atlas. Elsevier, 2012.', relevance: '骨髓細胞形態辨識圖譜' },
    { type: 'journal', citation: 'Raskin RE. "Bone marrow cytologic and histologic biopsies: indications, technique, and evaluation." Vet Clin North Am Small Anim Pract 2012;42(1):23-42.', relevance: '骨髓採樣技術與判讀指引' },
    { type: 'guideline', citation: 'Garden OA, Kidd L, Mexas AM, et al. ACVIM consensus statement on the diagnosis of immune-mediated hemolytic anemia in dogs and cats. J Vet Intern Med. 2019;33(2):313-334.', relevance: 'ACVIM 共識——骨髓評估在免疫介導血球減少的角色' },
  ],
  is_current: true,
  created_at: now,
};

/** 血液分型與交叉試驗 — 診斷型 */
const contentBloodTyping: NodeContent = {
  id: 'CONTENT-CPATH-L4-008',
  node_id: 'CPATH-L4-008',
  version: 1,
  summary: '血液分型（blood typing）與交叉試驗（crossmatch）是安全輸血的必要前置檢查。犬有 DEA 系統，貓有 AB 系統。貓因天然抗體存在，首次輸血不配對即有致死性溶血反應風險。',
  learning_objectives: [
    '說明犬 DEA 血型系統與臨床最重要的血型（DEA 1）',
    '描述貓 AB 血型系統及各血型的盛行率（含台灣數據）',
    '解釋為何貓首次輸血就必須血型配對',
    '描述主交叉試驗（major）與副交叉試驗（minor）的差異與意義',
    '列舉輸血反應的類型與處置',
  ],
  key_points: [
    '犬主要血型系統：DEA 1（最具臨床意義），分 DEA 1.1 陽性與陰性',
    '犬無顯著天然抗體，首次輸血不配對通常不會立即溶血，但會致敏',
    '犬第二次輸血若不配對，DEA 1.1 陰性犬接受陽性血可發生急性溶血反應',
    '貓 AB 系統：A 型最常見（台灣 > 90%），B 型少見，AB 型極罕見',
    '貓 B 型有強力天然抗 A 抗體 → B 型貓接受 A 型血即使首次也會致命性溶血',
    '貓 A 型有弱天然抗 B 抗體 → A 型貓接受 B 型血可能有輕度反應',
    '主交叉試驗（major）：受血者血清 + 供血者紅血球 → 模擬輸入後反應',
    '副交叉試驗（minor）：供血者血清 + 受血者紅血球 → 評估供血者抗體風險',
  ],
  body: `# 血液分型與交叉試驗 (Blood Typing & Crossmatch)

## 一、檢查原理與適應症 (Principles & Indications)



### 犬血型系統
### DEA（Dog Erythrocyte Antigen）
- **DEA 1.1**：最重要，決定輸血相容性
  - DEA 1.1(+)：犬可接受 1.1(+) 或 1.1(-) 血液
  - DEA 1.1(-)：犬僅能安全接受 1.1(-) 血液（理想通用供血者）
- **DEA 4**：> 98% 犬為陽性，臨床罕需考慮
- **DEA 7**：約 40-50% 犬為陽性

### 犬輸血原則
- 首次輸血：DEA 1.1 配對為佳，但急診可先不配對（因無天然抗體）
- 第二次以後輸血：**必須**血型配對 + 交叉試驗

### 貓血型系統
### AB 系統
| 血型 | 台灣盛行率 | 天然抗體 | 臨床意義 |
|------|-----------|---------|---------|
| A | > 90% | 弱抗 B | 接受 B 型血可能輕度反應 |
| B | 3-8% | **強抗 A** | 接受 A 型血 → **致命性急性溶血** |
| AB | < 1% | 無 | 可接受 A 或 B 型（理想受血者） |

### 貓輸血原則
- **貓每次輸血都必須血型配對**（包括首次）
- B 型貓接受 A 型血的致死率極高
- 新生兒同種免疫溶血（neonatal isoerythrolysis, NI）：B 型母貓 × A 型公貓

### 交叉試驗
### Major crossmatch（主交叉）
受血者血清 + 供血者紅血球 → 37°C 孵育 15-30 分鐘 → 觀察凝集/溶血

### Minor crossmatch（副交叉）
供血者血清 + 受血者紅血球

### 判讀
- **相容**：無凝集、無溶血
- **不相容**：可見凝集或溶血 → 不可輸血
- 自體對照（patient serum + patient RBC）排除 autoagglutination

### 輸血反應分類
| 類型 | 時間 | 症狀 |
|------|------|------|
| 急性溶血反應 | 數分鐘-數小時 | 發燒、嘔吐、震顫、血紅素尿、休克 |
| 延遲性溶血反應 | 3-14 天 | PCV 緩慢下降、bilirubinemia |
| 發熱性非溶血反應 | 輸血中 | 發燒、顫抖 |
| 過敏反應 | 輸血中 | 蕁麻疹、血管性水腫、過敏性休克 |

## 二、判讀要點 (Interpretation)

## 三、常見陷阱 (Pitfalls)

## 四、人醫借鑒 (Translational Insights)

| 人醫工具/概念 | 獸醫應用潛力 | 現況 |
|-------------|-------------|------|
| Gel column 交叉試驗技術 | 犬貓交叉試驗標準化與自動化判讀，減少主觀判讀誤差 | 人醫血庫金標準，獸醫貓 gel column 研究顯示高準確度 |
| 擴展紅血球抗原基因分型（molecular typing） | 犬 DEA 系統全面基因分型，取代血清學方法的限制 | 人醫已全面基因分型，獸醫犬 DEA 基因體學快速進展，部分 DEA 已可 PCR 分型 |
| 病原減滅技術（pathogen reduction technology） | 犬貓血品的病原滅活，提升輸血安全性 | 人醫血漿/血小板製品已採用，獸醫犬全血病原減滅研究初期 |

## 五、臨床爭議與知識空缺 (Controversies & Knowledge Gaps)

| 爭議議題 | 現況 | Evidence Level |
|---------|------|---------------|
| 犬 DEA 1.1 以外血型（DEA 3, 5, 7, Dal）的臨床重要性 | Dal 血型在 Dalmatian 可引起嚴重溶血，其他 DEA 的臨床影響待系統性評估 | Level III |
| 犬首次輸血是否可安全跳過交叉試驗 | 傳統認為犬首次無天然抗體可安全輸血，但非 DEA 1 抗原也可能引發致敏，新文獻建議所有犬均做 crossmatch | Level III |
| 貓 Mik 血型抗原的臨床意義 | 2007 年發現的新抗原，A 型配對仍可能發生急性溶血反應，台灣盛行率未知 | Level IV |`,
  clinical_pearl: '貓的 B 型血雖然台灣盛行率僅 3-8%，但 B 型貓體內含有極強的天然抗 A 抗體。即使是首次輸血，B 型貓接受 A 型血就可能在數分鐘內發生致命性急性溶血反應。因此貓的血型檢測絕非可選——而是輸血前的強制項目。',
  common_mistakes: [
    '認為貓首次輸血可以不配對——貓 B 型的天然抗體使首次即可致命',
    '僅做主交叉試驗而忽略副交叉試驗',
    '犬首次輸血後未記錄血型，導致第二次輸血時無法追溯',
    '忽略新生兒同種免疫溶血（NI）的可能——B 型母貓初乳對 A 型仔貓的風險',
    '交叉試驗中未做自體對照，將自身凝集誤判為不相容',
  ],
  disease_data: null,
  diagnostic_data: {
    indication: ['輸血前血型鑑定', '輸血前交叉試驗', '新生兒溶血評估', '繁殖前血型篩檢（貓）', '重複輸血患者'],
    contraindication: ['無絕對禁忌症'],
    technique: '血型卡（typing card）或免疫層析快篩（rapid immunochromatographic test）用於院內即時血型鑑定。交叉試驗：將受血者血清與供血者紅血球（major）或反向（minor）混合，37°C 孵育 15-30 分鐘，肉眼與顯微鏡觀察凝集或溶血。需同時做自體對照。',
    normal_findings: [
      { finding: '犬 DEA 1.1(-)，貓 A 型', description: '最常見血型組合', significance: '犬 DEA 1.1(-) 為理想通用供血者；貓 A 型為最常見血型' },
      { finding: '交叉試驗相容', description: '無凝集、無溶血', significance: '可安全進行輸血' },
    ],
    abnormal_findings: [
      { finding: '交叉試驗不相容', description: '觀察到凝集或溶血', significance: '不可輸血，需更換供血者' },
      { finding: '自體凝集', description: '自體對照也出現凝集', significance: '提示 IMHA，需用 saline wash 排除 rouleaux' },
      { finding: '貓 B 型 + A 型供血', description: '主交叉強烈不相容', significance: '絕對禁止輸血，致死風險極高' },
    ],
    interpretation_guide: '1. 先做血型鑑定（typing）。2. 再做交叉試驗（crossmatch）。3. Major crossmatch 不相容 → 更換供血者。4. Minor crossmatch 不相容 → 評估風險或更換。5. 記錄結果供未來參考。',
    pitfalls: [
      '血型卡受嚴重自體凝集或貧血影響，可能判讀困難',
      '交叉試驗不能偵測低力價抗體——相容不代表 100% 無反應',
      '犬首次輸血交叉試驗可能假陰性（尚未致敏）',
      '冷凝集素（cold agglutinin）在室溫下造成假陽性，需 37°C 重測',
    ],
    sensitivity_specificity: '血型快篩卡對犬 DEA 1.1 和貓 AB 型的準確度 > 95%。交叉試驗對臨床顯著抗體的偵測率佳，但低力價抗體可能漏檢。',
    cost_benefit: '血型快篩成本低、速度快（5 分鐘）。交叉試驗需 30-45 分鐘但可避免致命性輸血反應。對貓而言為強制性檢查。',
  },
  procedure_data: null,
  visual_placeholders: [
    { position: '貓血型系統表後', type: 'comparison_table', description: '貓 AB 血型相容性矩陣圖' },
    { position: '交叉試驗段落後', type: 'flowchart', description: '輸血前檢查流程圖' },
  ],
  interactive_placeholders: [
    { position: '文末', type: 'interactive_quiz', description: '輸血相容性判斷：根據供/受血者血型判斷是否可輸血' },
  ],
  drug_api_links: [],
  references: [
    { type: 'textbook', citation: 'Wardrop KJ. "Clinical Blood Typing and Crossmatching." In: Weiss DJ, Wardrop KJ, eds. Schalm\'s Veterinary Hematology, 6th ed. 2010:1101-1105.', relevance: '血液分型與交叉試驗參考教材' },
    { type: 'guideline', citation: 'Tocci LJ, Ewing PJ. "ACVIM Consensus Statement: Guidelines for Canine and Feline Blood Transfusion." J Vet Intern Med 2021;35(6):2574-2596.', relevance: '犬貓輸血最新指引' },
    { type: 'journal', citation: 'Seth M et al. "Gel column technique for feline blood typing and crossmatching." Vet Clin Pathol 2011;40(3):307-312.', relevance: '貓血型鑑定與交叉試驗技術' },
  ],
  is_current: true,
  created_at: now,
};

/** 尿液分析完整判讀 — 診斷型 */
const contentUrinalysis: NodeContent = {
  id: 'CONTENT-CPATH-L4-009',
  node_id: 'CPATH-L4-009',
  version: 1,
  summary: '完整尿液分析（complete urinalysis）包含物理性狀、化學試紙與尿沉渣顯微鏡檢三部分。USG 是評估腎臟濃縮能力的第一線指標，尿沉渣是偵測感染、結晶與腎損傷的關鍵。',
  learning_objectives: [
    '說明三種採尿方式（cystocentesis、catheterization、voided）的優缺點與適應症',
    '正確判讀 USG 在不同臨床情境下的意義',
    '解釋化學試紙各項目的犬貓特殊注意事項',
    '辨識尿沉渣中常見結晶、細胞與管型的意義',
    '整合尿液分析與血清生化結果評估腎功能',
  ],
  key_points: [
    'Cystocentesis 為尿液培養的金標準採樣方式，避免下泌尿道汙染',
    'USG（犬 1.015-1.045，貓 1.035-1.060 為正常濃縮範圍）',
    'Isosthenuria（USG 1.008-1.012）= 腎臟完全喪失濃縮能力',
    '犬尿液試紙的 WBC 酯酶（leukocyte esterase）不可靠——犬嗜中性球不含此酵素',
    '貓尿蛋白試紙易假陽性（鹼性尿），需用 UPC ratio 確認',
    'UPC（urine protein:creatinine ratio）> 0.5（犬）/ > 0.4（貓）為異常蛋白尿',
    '尿沉渣正常：< 5 WBC/HPF、< 5 RBC/HPF、無細菌、少量上皮細胞',
    'Struvite 結晶在犬常與 UTI 相關，在貓多為 idiopathic（非感染性）',
  ],
  body: `# 尿液分析完整判讀 (Complete Urinalysis)

## 一、檢查原理與適應症 (Principles & Indications)



### 採尿方式
| 方式 | 適用 | 注意 |
|------|------|------|
| Cystocentesis | 培養、細胞學 | 金標準，最少汙染 |
| Catheterization | 阻塞解除、大量採集 | 可能引入少量下泌尿道細胞 |
| Voided（free catch） | 篩檢、USG 測量 | 最多汙染，不適合培養 |

### 第一部分：物理性狀
- **顏色**：正常淡黃至琥珀色；紅色提示血尿/血紅素尿/肌紅蛋白尿
- **透明度**：正常透明；混濁提示感染、結晶、細胞碎片

### 第二部分：化學試紙（Dipstick）
| 項目 | 犬貓注意事項 |
|------|-------------|
| pH | 犬正常 5.5-7.5；貓正常 6.0-7.0 |
| Protein | 貓鹼性尿易假陽性，需 UPC 確認 |
| Glucose | 正常陰性；陽性 = 血糖 > 腎糖閾（犬 ~180, 貓 ~280 mg/dL） |
| Bilirubin | 犬正常可有少量（1+），貓任何 bilirubin 皆異常 |
| WBC esterase | **犬不可靠**（犬嗜中性球不含此酵素） |
| Nitrite | 犬貓不可靠（尿液在膀胱停留時間短） |

### 第三部分：尿沉渣（Sediment）
### 正常範圍（40x HPF，cystocentesis 樣本）
- WBC：< 5/HPF
- RBC：< 5/HPF
- Epithelial cells：少量 transitional 可正常
- Bacteria：不應見到（cystocentesis）
- Casts：偶見少量 hyaline cast 可正常

### 結晶判讀
| 結晶類型 | 形態 | 臨床意義 |
|---------|------|---------|
| Struvite（MAP） | 棺蓋形 | 犬常伴 UTI；貓多非感染性 |
| Calcium oxalate | 信封形（dihydrate）/ 啞鈴形（monohydrate） | Ethylene glycol 中毒（monohydrate）、高鈣 |
| Urate | 棕色菱形/針狀 | 門體分流、尿酸鹽結石（Dalmatian） |
| Cystine | 六角形 | 遺傳性胱胺酸尿症 |

### 管型（Casts）判讀
- **Hyaline cast**：少量正常，大量提示輕度腎小管損傷
- **Granular cast**：腎小管細胞退化，提示急性腎損傷
- **Waxy cast**：慢性腎小管損傷
- **Cellular cast**：RBC/WBC cast 提示腎絲球/腎小管發炎

### USG 與腎功能整合
USG 需搭配水合狀態與 azotemia 判讀：
- Azotemia + USG > 1.030（犬）/ > 1.035（貓） → prerenal
- Azotemia + USG < 1.030（犬）/ < 1.035（貓） → renal（腎臟無法適當濃縮）

## 二、判讀要點 (Interpretation)

## 三、常見陷阱 (Pitfalls)

## 四、人醫借鑒 (Translational Insights)

| 人醫工具/概念 | 獸醫應用潛力 | 現況 |
|-------------|-------------|------|
| 自動化尿沉渣分析（iQ200/UF-5000） | 犬貓尿沉渣自動辨識與計數標準化，減少人工判讀變異 | 人醫已常規使用，獸醫犬貓驗證研究顯示對 RBC/WBC 計數準確，結晶辨識仍需改進 |
| 尿液代謝體學（urine metabolomics） | 犬貓腎病/膀胱腫瘤的早期生物標記篩檢 | 人醫腎病/膀胱癌研究中，獸醫犬 TCC 尿液代謝標記初步研究有前景 |
| 尿液 NGAL / KIM-1 | 犬貓急性腎損傷（AKI）的早期尿液生物標記 | 人醫 AKI 診斷輔助，獸醫犬尿 NGAL 研究顯示比 creatinine 更早偵測 AKI |

## 五、臨床爭議與知識空缺 (Controversies & Knowledge Gaps)

| 爭議議題 | 現況 | Evidence Level |
|---------|------|---------------|
| 犬貓亞臨床菌尿（subclinical bacteriuria）是否需要治療 | ISCAID 指引建議大多數亞臨床菌尿不需抗生素，但免疫抑制或 CKD 患者的處置仍有爭議 | Level II |
| 犬尿蛋白/肌酸酐比值（UPC）的採樣標準化 | 單次隨機尿 vs 多次採集平均值，禁食狀態、採樣時間對 UPC 的影響程度各研究結論不一 | Level III |
| 貓 USG 參考範圍在不同水合狀態下的解讀 | 正常貓 USG 可達 > 1.065，但 CKD 早期貓的 USG 「下降」定義（< 1.035）是否過於寬鬆仍有討論 | Level III |`,
  clinical_pearl: '犬尿液試紙上的 leukocyte esterase（白血球酯酶）項目對犬完全不可靠，因為犬的嗜中性球不含此酵素。許多獸醫習慣看這格來判斷是否有 UTI，但正確做法是看尿沉渣的 WBC 計數。同樣地，nitrite 在犬貓也不可靠。',
  common_mistakes: [
    '用犬尿液試紙的 leukocyte esterase 和 nitrite 判斷 UTI——兩者對犬貓均不可靠',
    '未根據採尿方式調整判讀標準（voided 樣本少量細菌和上皮細胞可能是汙染）',
    '忽略 USG 在判讀 azotemia 中的關鍵角色——未整合 USG 就將 azotemia 歸類',
    '將少量 struvite 結晶視為必須治療——正常尿液放置後也可能出現',
    '用試紙蛋白質結果取代 UPC ratio，在貓尤其容易假陽性',
  ],
  disease_data: null,
  diagnostic_data: {
    indication: ['腎功能評估', '下泌尿道症狀（FLUTD/LUTD）', '多尿多飲（PU/PD）鑑別', '糖尿病監測', '尿路感染篩檢', '結石評估'],
    contraindication: ['Cystocentesis 禁忌：膀胱極度擴張合併阻塞（先解阻塞）、凝血異常（相對禁忌）'],
    technique: '建議 cystocentesis 採集（22G 針頭，超音波導引）。尿液分為：1. USG 測量（refractometer）。2. 化學試紙浸泡 60 秒。3. 離心（1500 rpm, 5 min）後取沉渣做顯微鏡檢。樣本應在 30 分鐘內分析，延遲會使結晶析出與細胞退化。',
    normal_findings: [
      { finding: 'USG', description: '犬 1.015-1.045，貓 1.035-1.060', significance: '反映腎臟濃縮能力' },
      { finding: '尿沉渣', description: '< 5 WBC/HPF, < 5 RBC/HPF, 無細菌', significance: '無發炎或感染' },
      { finding: 'UPC', description: '犬 < 0.5，貓 < 0.4', significance: '無臨床顯著蛋白尿' },
    ],
    abnormal_findings: [
      { finding: 'Isosthenuria + azotemia', description: 'USG 1.008-1.012 合併 creatinine 升高', significance: '腎實質疾病（腎臟喪失濃縮能力）' },
      { finding: '菌尿 + 膿尿', description: '細菌 + WBC > 5/HPF（cystocentesis）', significance: '泌尿道感染，需培養與藥敏' },
      { finding: 'Glucosuria', description: '尿糖陽性', significance: '血糖 > 腎糖閾 → 糖尿病；正常血糖下尿糖陽性 → Fanconi syndrome' },
      { finding: 'CaOx monohydrate 結晶', description: '啞鈴或針狀結晶', significance: '高度懷疑 ethylene glycol 中毒' },
    ],
    interpretation_guide: '1. 記錄採尿方式。2. 測量 USG（refractometer，非試紙）。3. 判讀化學試紙（注意犬貓物種差異）。4. 評估尿沉渣（40x）。5. 必要時加做 UPC ratio 或培養。6. 整合血清生化。',
    pitfalls: [
      '用試紙而非折射計（refractometer）測量 USG——試紙 USG 對犬貓不準確',
      '樣本放置過久（> 30 min）導致結晶析出（假陽性）或細胞退化（假陰性）',
      '冷藏樣本未回溫就分析，低溫促進結晶析出',
      '未記錄採尿方式，影響細菌學判讀標準',
    ],
    sensitivity_specificity: 'USG 是評估腎臟濃縮能力最敏感的指標之一。尿沉渣對 UTI 的敏感度取決於採尿方式與樣本新鮮度。UPC ratio 是定量蛋白尿的金標準。',
    cost_benefit: '成本極低，為腎臟與泌尿道評估的第一線必要檢查。應與每次血清生化同時進行。',
  },
  procedure_data: null,
  visual_placeholders: [
    { position: '結晶判讀表後', type: 'annotated_image', description: '常見尿液結晶顯微鏡圖片標註' },
    { position: '管型判讀段落後', type: 'annotated_image', description: '各類管型顯微鏡辨識圖' },
  ],
  interactive_placeholders: [
    { position: '文末', type: 'interactive_quiz', description: '尿液分析綜合判讀練習：整合 USG、試紙與沉渣' },
  ],
  drug_api_links: [],
  references: [
    { type: 'textbook', citation: 'Stockham SL, Scott MA. Fundamentals of Veterinary Clinical Pathology, 2nd ed. Blackwell, 2008.', relevance: '尿液分析判讀核心教材' },
    { type: 'textbook', citation: 'Rizzi TE et al. Atlas of Canine and Feline Urinalysis. ASVCP, 2017.', relevance: '犬貓尿液分析圖譜' },
    { type: 'journal', citation: 'Callens AJ, Bartges JW. "Urinalysis." Vet Clin North Am Small Anim Pract 2015;45(4):621-637.', relevance: '尿液分析完整判讀指引' },
    { type: 'guideline', citation: 'IRIS (International Renal Interest Society). "IRIS Staging of CKD (modified 2023)." iris-kidney.com.', relevance: 'IRIS 指引——尿液分析在 CKD 分期中的角色（UPC 與 USG）' },
  ],
  is_current: true,
  created_at: now,
};

/** 內分泌功能檢測判讀 — 診斷型 */
const contentEndocrine: NodeContent = {
  id: 'CONTENT-CPATH-L4-010',
  node_id: 'CPATH-L4-010',
  version: 1,
  summary: '內分泌功能檢測透過基礎荷爾蒙濃度測定與動態刺激/抑制試驗，評估甲狀腺、腎上腺與胰島素軸的功能。正確的檢測選擇與判讀是避免誤診的關鍵。',
  learning_objectives: [
    '選擇正確的甲狀腺功能檢測方式（犬低甲 vs 貓高甲）',
    '比較 LDDS、HDDS 與 ACTH stim test 在 Cushing 診斷中的角色',
    '判讀犬 Addison disease 的確診方式（ACTH stim test）',
    '說明貓糖尿病監測中 fructosamine 與血糖曲線的應用',
    '辨識影響內分泌檢測的藥物與疾病干擾因素',
  ],
  key_points: [
    '犬 hypothyroidism 篩檢：先測 total T4，低值再加做 free T4（by equilibrium dialysis）+ TSH',
    '貓 hyperthyroidism 篩檢：total T4 > 4.0 μg/dL 高度支持；borderline 需重複或做 free T4',
    'LDDS test：Cushing 篩檢首選（敏感度 ~95%），但 PDH vs AT 鑑別需看 4hr 和 8hr 值',
    'ACTH stim test：Addison 確診金標準（cortisol post-ACTH < 2 μg/dL）+ iatrogenic Cushing 篩檢',
    'Urine cortisol:creatinine ratio（UCCR）：排除 Cushing 的最佳工具（陰性預測值 > 99%）',
    'Sick euthyroid syndrome（非甲狀腺性病態症候群）：全身性疾病可使 T4 假性降低',
    'Fructosamine 反映過去 1-3 週的平均血糖，不受壓力性高血糖影響',
    'Phenobarbital、glucocorticoids、sulfonamides 可干擾甲狀腺功能檢測結果',
  ],
  body: `# 內分泌功能檢測判讀 (Endocrine Function Testing)

## 一、檢查原理與適應症 (Principles & Indications)



### 甲狀腺功能
### 犬 Hypothyroidism 診斷流程
1. **Total T4**：正常（> 1.5 μg/dL）→ 排除；低（< 1.0 μg/dL）→ 疑似
2. **Free T4（ED）**：最準確的單一指標，低值支持診斷
3. **TSH**：升高支持原發性甲低（但約 25% 甲低犬 TSH 正常）
4. **Thyroglobulin autoantibody（TgAA）**：陽性提示淋巴球性甲狀腺炎

### 貓 Hyperthyroidism 診斷
- Total T4 > 4.0 μg/dL → 確診
- Total T4 borderline（2.5-4.0）→ 2 週後重複或做 free T4
- 早期病例 T4 可能正常波動 → 需要多次測量

### 腎上腺功能
### Cushing（Hyperadrenocorticism）診斷

| 檢測 | 用途 | 判讀 |
|------|------|------|
| LDDS (0.01 mg/kg IV) | 篩檢 + 部分鑑別 | 8hr cortisol > 1.4 μg/dL = 陽性 |
| HDDS (0.1 mg/kg IV) | PDH vs AT 鑑別 | 4hr/8hr cortisol 被抑制 > 50% = PDH |
| ACTH stim test | 篩檢（敏感度較低~80%） | Post-ACTH cortisol > 22 μg/dL = 陽性 |
| UCCR | 排除工具 | 正常 UCCR 幾乎可排除 Cushing |

### Addison（Hypoadrenocorticism）確診
- **ACTH stim test**：金標準
- Pre-ACTH cortisol < 2 μg/dL 且 post-ACTH cortisol < 2 μg/dL → 確診
- 生化線索：Na/K < 27、prerenal azotemia、低血糖、高鈣

### 糖尿病監測
### 血糖曲線（Blood glucose curve）
- 每 2 小時測血糖 × 12-24 小時
- 評估 nadir（最低值，目標 80-150 mg/dL）與持續時間

### Fructosamine
- 正常犬：225-365 μmol/L；貓：190-340 μmol/L
- > 400 → 過去 2-3 週血糖控制不佳
- 不受採樣當下壓力或進食影響

### 干擾因素
| 藥物/狀態 | 影響 |
|----------|------|
| Glucocorticoids | T4↓、cortisol↑ |
| Phenobarbital | Total T4↓，free T4 通常正常 |
| Sick euthyroid | T4↓，不代表甲低 |
| 貓壓力性高血糖 | 血糖可達 300-400，fructosamine 不受影響 |

## 二、判讀要點 (Interpretation)

## 三、常見陷阱 (Pitfalls)

## 四、人醫借鑒 (Translational Insights)

| 人醫工具/概念 | 獸醫應用潛力 | 現況 |
|-------------|-------------|------|
| 連續血糖監測（CGM / FreeStyle Libre） | 犬貓糖尿病居家血糖曲線替代反覆靜脈採血，提升依從性 | 人醫糖尿病標準照護，獸醫犬貓 CGM 臨床研究支持準確性，台灣已有獸醫使用 |
| TSH 受體抗體（TRAb）檢測 | 貓 hyperthyroidism 是否為自體免疫機制的鑑別 | 人醫 Graves 病確診工具，獸醫貓甲亢 TRAb 研究有限但具理論價值 |
| 晚唾液皮質醇（late-night salivary cortisol） | 犬 Cushing 非侵入性篩檢，替代反覆靜脈採血的動態試驗 | 人醫 Cushing 篩檢首選之一，獸醫犬唾液 cortisol 初步研究可行但標準化不足 |

## 五、臨床爭議與知識空缺 (Controversies & Knowledge Gaps)

| 爭議議題 | 現況 | Evidence Level |
|---------|------|---------------|
| 犬貓內分泌功能檢測結果在不同分析平台間的比較性 | T4/cortisol 等荷爾蒙因免疫分析方法差異（CLIA vs RIA vs ELISA），結果不可直接互換 | Level III |
| 犬 hypothyroidism 的 TSH 檢測敏感度不足 | 約 25-30% 確診甲低犬 TSH 仍在正常範圍，是否需要開發更敏感的犬 TSH assay | Level III |
| 犬 Cushing 的 UCCR 採樣標準化 | 居家採集 vs 醫院採集的 cortisol:creatinine 差異顯著（壓力效應），最佳採集方案尚未統一 | Level II |
| 貓 occult hyperthyroidism 的最佳確診策略 | 臨床症狀典型但 T4 正常/borderline 的貓，free T4、T3 抑制試驗、甲狀腺閃爍掃描的選擇尚無明確共識 | Level III |`,
  clinical_pearl: '犬 LDDS test 的敏感度（~95%）遠優於 ACTH stim test（~80%），因此 LDDS 是 Cushing 的首選篩檢。但若患犬正在使用外源性 glucocorticoids，LDDS 無法判讀（會假陽性），此時 ACTH stim test 才是正確選擇（用來偵測 iatrogenic Cushing）。',
  common_mistakes: [
    '在全身性疾病（sick euthyroid）期間測 T4 並診斷 hypothyroidism——應待病情穩定後複檢',
    '僅用 ACTH stim test 篩檢 Cushing（敏感度僅 ~80%），漏診率較高',
    '忽略 phenobarbital 會降低 total T4，在癲癇犬身上誤診甲低',
    '貓壓力性高血糖誤診糖尿病——需搭配 fructosamine 確認是否長期高血糖',
    'LDDS test 採血時間不精確（需嚴格 0hr、4hr、8hr），影響判讀',
  ],
  disease_data: null,
  diagnostic_data: {
    indication: ['疑似 hypothyroidism（犬）', '疑似 hyperthyroidism（貓）', 'Cushing syndrome 篩檢與鑑別', 'Addison disease 確診', '糖尿病監測', 'PU/PD 鑑別'],
    contraindication: ['ACTH stim test：已知 ACTH 過敏（極罕見）', 'LDDS test：不適用於正在使用外源性 glucocorticoids 的患者'],
    technique: 'T4/fT4：血清 1 mL，送外部實驗室。LDDS：0hr 採血 → IV dexamethasone 0.01 mg/kg → 4hr 採血 → 8hr 採血。ACTH stim：0hr 採血 → IV/IM cosyntropin 5 μg/kg → 1hr 採血。Fructosamine：血清 0.5 mL，不需禁食。',
    normal_findings: [
      { finding: 'Total T4', description: '犬 1.0-4.0 μg/dL，貓 1.0-4.0 μg/dL', significance: '甲狀腺功能指標' },
      { finding: 'Cortisol（post-ACTH）', description: '犬 6-17 μg/dL', significance: '腎上腺功能正常' },
      { finding: 'LDDS 8hr cortisol', description: '< 1.4 μg/dL（被抑制）', significance: '排除 Cushing' },
      { finding: 'Fructosamine', description: '犬 225-365 μmol/L，貓 190-340 μmol/L', significance: '過去 2-3 週血糖在正常範圍' },
    ],
    abnormal_findings: [
      { finding: 'Total T4 ↓ + TSH ↑', description: 'T4 < 1.0 + TSH > 0.5 ng/mL', significance: '高度支持犬原發性 hypothyroidism' },
      { finding: 'Total T4 > 4.0（貓）', description: '貓 T4 超過正常上限', significance: '確診貓 hyperthyroidism' },
      { finding: 'LDDS 8hr cortisol > 1.4', description: '未被 dexamethasone 抑制', significance: '支持 Cushing 診斷' },
      { finding: 'Post-ACTH cortisol < 2', description: '對 ACTH 刺激無反應', significance: '確診 Addison disease' },
    ],
    interpretation_guide: '1. 根據臨床疑診選擇正確檢測。2. 評估干擾因素（藥物、全身性疾病）。3. 判讀基礎值與動態試驗結果。4. 必要時以第二線檢測確認（如 fT4-ED、HDDS）。5. 整合臨床表現與影像。',
    pitfalls: [
      'Sick euthyroid syndrome 使 T4 假性降低',
      '外源性 glucocorticoids 干擾 LDDS 結果',
      'ACTH stim test 使用的 cosyntropin 需正確保存（冷凍）',
      '採血時間不精確影響動態試驗判讀',
    ],
    sensitivity_specificity: 'LDDS 對 Cushing 的敏感度 ~95%、特異度 ~70-75%。ACTH stim test 敏感度 ~80%、特異度 ~85-90%。UCCR 陰性預測值 > 99%（最佳排除工具）。fT4-ED 對犬 hypothyroidism 的準確度最高。',
    cost_benefit: '基礎荷爾蒙（T4）成本中等。動態試驗（LDDS、ACTH stim）需多次採血與藥物，成本較高但為確診所必須。',
  },
  procedure_data: null,
  visual_placeholders: [
    { position: 'Cushing 診斷表後', type: 'flowchart', description: 'Cushing syndrome 診斷流程圖' },
    { position: '甲狀腺段落後', type: 'flowchart', description: '犬 hypothyroidism 診斷演算法' },
  ],
  interactive_placeholders: [
    { position: '文末', type: 'interactive_quiz', description: '內分泌檢測結果判讀：選擇正確檢測並解讀結果' },
  ],
  drug_api_links: ['levothyroxine', 'methimazole', 'trilostane'],
  references: [
    { type: 'textbook', citation: 'Feldman EC, Nelson RW. Canine and Feline Endocrinology and Reproduction, 4th ed. Elsevier, 2015.', relevance: '內分泌功能檢測判讀權威教材' },
    { type: 'guideline', citation: 'Behrend EN et al. "ACVIM Consensus Statement: Diagnosis of Spontaneous Canine Hyperadrenocorticism." J Vet Intern Med 2013;27(6):1292-1304.', relevance: 'Cushing 診斷最新共識指引' },
    { type: 'journal', citation: 'Scott-Moncrieff JC. "Thyroid disorders in the geriatric patient." Vet Clin North Am Small Anim Pract 2012;42(4):707-725.', relevance: '甲狀腺疾病診斷在老年犬貓的特殊考量' },
  ],
  is_current: true,
  created_at: now,
};

/** 淋巴結與腫瘤細胞學 — 診斷型 */
const contentLNTumorCyto: NodeContent = {
  id: 'CONTENT-CPATH-L4-011',
  node_id: 'CPATH-L4-011',
  version: 1,
  summary: '淋巴結與腫瘤細胞學是評估淋巴結腫大與體表腫塊最快速的診斷工具。正確區分反應性增生、淋巴瘤與轉移性腫瘤，對後續治療決策有直接影響。',
  learning_objectives: [
    '區分正常、反應性增生與淋巴瘤的淋巴結細胞學特徵',
    '辨識犬五大圓細胞腫瘤（lymphoma、MCT、histiocytoma、TVT、plasmacytoma）',
    '描述惡性腫瘤細胞學的核標準（nuclear criteria of malignancy）',
    '判斷何時需要進一步 flow cytometry 或組織病理學確認',
    '說明腫瘤分級在細胞學層面的限制',
  ],
  key_points: [
    '正常淋巴結：> 90% 小淋巴球，少量中/大淋巴球、漿細胞、巨噬細胞',
    '反應性增生：小淋巴球仍為主但中/大淋巴球比例增加（< 50%）+ 漿細胞↑ + Mott cells',
    '淋巴瘤：大淋巴球 > 50%，核大且核仁明顯，單一形態（monomorphic）',
    '犬 high-grade lymphoma 細胞學準確率 > 90%；low-grade 與反應性增生不易區分',
    '肥大細胞瘤（MCT）：圓形細胞含嗜鹼性/異染性顆粒，Diff-Quik 可能染色不佳',
    '組織球瘤（histiocytoma）：大量均勻圓形細胞，淡藍色胞質，常見於年輕犬（< 3 歲）',
    'TVT（transmissible venereal tumor）：圓形細胞含特徵性胞質空泡（vacuoles in a row）',
    '淋巴結轉移性腫瘤：在淋巴球背景中出現異質性非淋巴細胞群',
  ],
  body: `# 淋巴結與腫瘤細胞學 (Lymph Node & Tumor Cytology)

## 一、檢查原理與適應症 (Principles & Indications)



### 犬五大圓細胞腫瘤
| 腫瘤 | 特徵 | 好發 |
|------|------|------|
| Lymphoma | 大型單一形態淋巴球 | 中老年犬，多中心型 |
| Mast cell tumor | 嗜鹼性/異染性顆粒 | 中老年犬，皮膚 |
| Histiocytoma | 均勻圓形，淡藍胞質 | 年輕犬（< 3 歲），頭部/耳翼 |
| TVT | 胞質空泡排成一列 | 流浪犬，外生殖器 |
| Plasmacytoma | 偏心核 + 核旁透明帶 | 中老年犬，皮膚/口腔 |

### 惡性標準在腫瘤細胞學的應用
### 核標準（最重要）
- **Anisokaryosis**：核大小不一（> 2 倍變異）
- **核仁異常**：大小/數量/形狀不規則
- **異常有絲分裂**：三極或多極分裂

### 何時需要組織病理確認？
- Low-grade lymphoma vs 反應性增生 → flow cytometry 或 PARR（PCR for antigen receptor rearrangement）
- MCT → 組織病理學分級（Patnaik/Kiupel）指導預後
- 間質性腫瘤 → 細胞學分級困難，需要組織病理

## 二、判讀要點 (Interpretation)

### 淋巴結細胞學判讀
### 正常淋巴結
- 小淋巴球 > 90%
- 少量中淋巴球、大淋巴球
- 少量漿細胞與巨噬細胞

### 反應性增生（Reactive hyperplasia）
- 小淋巴球仍佔多數（> 50%）
- 中/大淋巴球比例增加但 < 50%
- 漿細胞明顯增多（Mott cells 可見）
- 巨噬細胞增加 + tingible body macrophages
- **多形態（polymorphic）** = 多種成熟階段

### 淋巴瘤（Lymphoma）
- 大淋巴球 > 50%（high-grade 通常 > 70%）
- **單一形態（monomorphic）** = 大部分細胞大小相似
- 核仁大且明顯（multiple prominent nucleoli）
- 有絲分裂像增多
- 壞死碎片（lymphoglandular bodies）豐富

### 鑑別關鍵
| 特徵 | 反應性增生 | 淋巴瘤 |
|------|-----------|--------|
| 細胞多樣性 | 多形態（polymorphic） | 單一形態（monomorphic） |
| 大淋巴球比例 | < 50% | > 50% |
| 漿細胞 | 增多 | 通常少 |
| Tingible body macrophages | 常見 | 少見 |

## 三、常見陷阱 (Pitfalls)

## 四、人醫借鑒 (Translational Insights)

| 人醫工具/概念 | 獸醫應用潛力 | 現況 |
|-------------|-------------|------|
| PARR / PCR for Antigen Receptor Rearrangement | 犬 low-grade lymphoma vs 反應性增生的分子鑑別，補足細胞學限制 | 人醫 clonality 檢測為淋巴瘤診斷標準，獸醫犬 PARR 已有商業服務（台灣可送檢國外） |
| Flow cytometry 多色免疫表型分析 | 犬淋巴瘤 CD3/CD79a/CD34 等 marker 分型，指導預後與治療選擇 | 人醫常規 10+ marker panel，獸醫犬淋巴瘤 4-6 marker panel 已臨床可用 |
| PD-L1 免疫檢查點表達分析 | 犬腫瘤免疫治療反應預測，篩選適合 checkpoint inhibitor 的患犬 | 人醫多種腫瘤已有 companion diagnostic，獸醫犬 PD-L1 研究階段 |

## 五、臨床爭議與知識空缺 (Controversies & Knowledge Gaps)

| 爭議議題 | 現況 | Evidence Level |
|---------|------|---------------|
| 犬 low-grade T-cell lymphoma 的細胞學 vs PARR vs flow cytometry 最佳診斷組合 | 細胞學單獨敏感度不足（< 60%），PARR 與 flow 各有優缺，最佳組合策略尚未確立 | Level III |
| 犬 MCT 細胞學預後預測價值（mitotic index、Ki-67 on cytology） | 細胞學 mitotic count 與組織病理分級有中等相關，但能否取代組織病理分級作預後指標仍有爭議 | Level III |
| Sentinel lymph node（SLN）FNA 在犬腫瘤分期中的角色 | SLN FNA 的轉移偵測敏感度約 70-85%，是否可替代 SLN excisional biopsy 尚未有共識 | Level II |`,
  clinical_pearl: '區分淋巴結反應性增生與 low-grade lymphoma 是細胞學最困難的判讀之一。關鍵在於：反應性增生是「多形態」的（各成熟階段都有），而淋巴瘤是「單一形態」的。若仍無法確定，flow cytometry（CD3/CD79a）或 PARR 是最佳的下一步。',
  common_mistakes: [
    '反應性增生中中/大淋巴球增多 → 誤判為淋巴瘤（應評估是否仍為多形態分布）',
    '肥大細胞瘤在 Diff-Quik 染色下顆粒不明顯 → 漏診 MCT（需 Wright-Giemsa 或 toluidine blue 確認）',
    '引流淋巴結見到腫瘤細胞，誤判為淋巴結原發腫瘤而非轉移',
    '忽略 histiocytoma 可自行消退的特性，對年輕犬急於手術',
    'MCT 分級僅靠細胞學——MCT 的預後分級（Patnaik/Kiupel）需要組織病理',
  ],
  disease_data: null,
  diagnostic_data: {
    indication: ['淋巴結腫大評估', '體表腫塊初步分類', '腫瘤分期（sentinel LN 評估）', '治療前基線評估', '化療監測（淋巴瘤）'],
    contraindication: ['高度血管性腫瘤（如脾臟 hemangiosarcoma）FNA 有出血風險', '凝血功能嚴重異常'],
    technique: '以 22-25G 針頭行 FNA（non-aspiration technique 首選以減少血液汙染）。淋巴結需從不同角度多次取樣。製作 2-3 張 squash prep 抹片，Diff-Quik 染色。如疑 MCT 加做 Wright-Giemsa 或 toluidine blue。',
    normal_findings: [
      { finding: '正常淋巴結', description: '小淋巴球 > 90%，少量漿細胞和巨噬細胞', significance: '無病理性改變' },
    ],
    abnormal_findings: [
      { finding: '淋巴瘤', description: '單一形態大淋巴球 > 50%，核仁明顯', significance: '最常見犬造血腫瘤，需 staging 與化療' },
      { finding: '肥大細胞瘤', description: '圓細胞含嗜鹼性顆粒', significance: '犬最常見皮膚腫瘤，需組織病理分級' },
      { finding: '轉移性腫瘤', description: '淋巴球背景中出現異質性非淋巴細胞', significance: '提示原發腫瘤已擴散，影響分期' },
      { finding: '化膿性淋巴結炎', description: '大量嗜中性球 ± 細菌', significance: '感染，需培養與藥敏' },
    ],
    interpretation_guide: '1. 低倍評估細胞量與背景。2. 判斷主要細胞群（淋巴球 vs 非淋巴細胞）。3. 評估淋巴球大小分布（polymorphic vs monomorphic）。4. 尋找惡性標準。5. 分類（反應性/淋巴瘤/轉移/發炎）。',
    pitfalls: [
      '血液汙染嚴重的淋巴結 FNA 幾乎無法判讀',
      'Low-grade lymphoma 細胞與正常小淋巴球形態極為相似',
      'Diff-Quik 對 MCT granules 的染色品質不穩定',
      '局部引流區域的反應性淋巴結可能被誤判為腫瘤轉移',
    ],
    sensitivity_specificity: '細胞學對 high-grade lymphoma 的敏感度 > 90%、特異度 > 95%。對 low-grade lymphoma 敏感度降至 50-70%。MCT 的細胞學診斷準確率約 92-96%（前提是顆粒有被成功染色）。',
    cost_benefit: 'FNA 幾乎零成本、即時可得、無需鎮靜。是淋巴結與腫塊評估的最佳起點。但需了解其限制並適時轉送組織病理。',
  },
  procedure_data: null,
  visual_placeholders: [
    { position: '鑑別關鍵表後', type: 'annotated_image', description: '反應性增生 vs 淋巴瘤細胞學比較圖' },
    { position: '五大圓細胞腫瘤表後', type: 'annotated_image', description: '犬五大圓細胞腫瘤細胞學特徵圖' },
  ],
  interactive_placeholders: [
    { position: '文末', type: 'interactive_quiz', description: '淋巴結/腫瘤細胞學圖片判讀練習' },
  ],
  drug_api_links: [],
  references: [
    { type: 'textbook', citation: 'Raskin RE, Meyer DJ. Canine and Feline Cytology: A Color Atlas and Interpretation Guide, 3rd ed. Elsevier, 2016.', relevance: '淋巴結與腫瘤細胞學判讀圖譜' },
    { type: 'journal', citation: 'Avery PR et al. "Flow cytometric characterization and clinical outcome of CD4+ T-cell lymphoma in dogs." J Vet Intern Med 2014;28(2):538-546.', relevance: 'Flow cytometry 在犬淋巴瘤分型的應用' },
    { type: 'journal', citation: 'Caniatti M et al. "Diagnosis of canine lymphoma by fine-needle aspiration cytology." Vet Clin Pathol 2019;48(Suppl 1):63-77.', relevance: '犬淋巴瘤細胞學診斷的系統性回顧' },
    { type: 'guideline', citation: 'Valli VE, Kass PH, San Myint M, et al. ACVP/STP guidelines for canine cutaneous and subcutaneous lymphoma classification. Vet Pathol. 2013;50(2):256-268.', relevance: 'ACVP 犬淋巴瘤分類指引——細胞學在分型中的角色' },
  ],
  is_current: true,
  created_at: now,
};

/** 皮膚細胞學與刮搔判讀 — 診斷型 */
const contentDermCyto: NodeContent = {
  id: 'CONTENT-CPATH-L4-012',
  node_id: 'CPATH-L4-012',
  version: 1,
  summary: '皮膚細胞學與皮膚刮搔是皮膚科最基礎的院內診斷工具。壓印抹片（impression smear）快速辨識感染原，皮膚刮搔偵測外寄生蟲，兩者搭配可在 10 分鐘內提供初步診斷方向。',
  learning_objectives: [
    '描述皮膚壓印抹片、膠帶抹片與皮膚刮搔的採樣技術差異',
    '辨識皮膚細胞學中常見的感染原（Malassezia、Demodex、細菌球菌/桿菌）',
    '區分淺層刮搔與深層刮搔的適應症與技術',
    '判讀皮膚 FNA 的常見腫瘤類型（MCT、lipoma、皮脂腺腫瘤）',
    '整合皮膚細胞學結果與臨床皮膚病型態制定鑑別診斷',
  ],
  key_points: [
    '壓印抹片（impression smear）：直接將載玻片壓在病灶上，最適合滲出性/糜爛性病灶',
    '膠帶抹片（tape prep）：透明膠帶貼皮膚表面 → 染色 → 偵測 Malassezia 與表面細菌',
    '淺層刮搔（superficial scraping）：偵測表皮寄生蟲如 Sarcoptes（但敏感度僅 ~50%）',
    '深層刮搔（deep scraping）：刮至出血點（capillary oozing），偵測毛囊內的 Demodex',
    'Malassezia 判讀標準：犬 > 2 個/oil field 在非脂漏部位即有意義',
    '球菌（cocci）為犬最常見皮膚細菌感染型態，桿菌（rods）較少見但需警惕多重抗藥性',
    'Demodex canis 為長型蟲體（cigar-shaped），D. gatoi（貓）較短且生活在淺層',
    '皮膚腫塊 FNA：脂肪瘤（透明脂肪細胞）、MCT（含顆粒圓細胞）、皮脂腺腫瘤（泡沫狀細胞團簇）',
  ],
  body: `# 皮膚細胞學與刮搔判讀 (Dermatologic Cytology & Skin Scraping)

## 一、檢查原理與適應症 (Principles & Indications)



### 採樣技術
### 壓印抹片（Impression smear）
- 適用：滲出性、糜爛性、潰瘍性病灶
- 技術：載玻片直接壓在病灶上 → 風乾 → 染色
- 目的：辨識感染原（細菌、酵母菌）與發炎細胞

### 膠帶抹片（Tape preparation）
- 適用：脂漏、鱗屑、表面細菌/酵母菌評估
- 技術：透明膠帶貼皮膚 → Diff-Quik 染色 → 顯微鏡檢
- 特別適合：Malassezia 偵測

### 皮膚刮搔
| 類型 | 深度 | 目標寄生蟲 | 技術 |
|------|------|-----------|------|
| 淺層 | 表皮角質層 | Sarcoptes, Cheyletiella | 刀片平行刮數次 |
| 深層 | 真皮乳頭層（出血點） | Demodex | 擠壓皮膚 → 刀片深刮至微出血 |

### 常見感染原辨識
### 細菌
- **球菌（cocci）**：成對或四聯排列，最常見為 Staphylococcus pseudintermedius
- **桿菌（rods）**：需警惕 Pseudomonas 等多重抗藥性菌
- 重要判讀：是否有細胞內細菌（intracellular bacteria）→ 確認為真感染而非汙染

### 酵母菌
- **Malassezia pachydermatis**：花生/雪人形（budding yeast）
- 正常犬皮膚可有少量；犬耳道 > 5/oil field 或非脂漏皮膚 > 2/oil field = 過量增殖

### 皮膚寄生蟲
- **Demodex canis**：雪茄形，長 250-300 μm，毛囊內
- **Demodex gatoi**：較短型（< 200 μm），貓表面性，淺刮即可偵測
- **Sarcoptes scabiei**：卵圓形，短足，深層刮搔敏感度僅 ~50%（陰性不能排除）

### 皮膚腫塊 FNA
| 腫瘤 | 細胞學特徵 |
|------|-----------|
| 脂肪瘤 | 大量透明脂肪細胞，低細胞量 |
| MCT | 含嗜鹼性顆粒的圓細胞 |
| 皮脂腺腫瘤 | 泡沫狀上皮細胞團簇 |
| 鱗狀上皮細胞癌 | 角化異常的上皮細胞，核仁明顯 |
| Histiocytoma | 均勻圓形細胞，淡藍胞質 |

### 耳道細胞學
- 正常：少量角質化上皮，偶見少量 Malassezia
- 細菌性外耳炎：大量嗜中性球 + 球菌或桿菌
- Malassezia 外耳炎：> 5 Malassezia/oil field

## 二、判讀要點 (Interpretation)

## 三、常見陷阱 (Pitfalls)

## 四、人醫借鑒 (Translational Insights)

| 人醫工具/概念 | 獸醫應用潛力 | 現況 |
|-------------|-------------|------|
| 皮膚鏡（dermoscopy / dermatoscopy） | 犬貓皮膚病灶非侵入性評估，輔助鑑別腫瘤 vs 發炎性病灶 | 人醫皮膚科常規工具，獸醫犬皮膚鏡研究顯示對 MCT vs 脂肪瘤鑑別有價值 |
| MALDI-TOF 皮膚黴菌快速鑑定 | 犬貓 dermatophyte 菌種鑑定從 2-3 週縮短至數小時 | 人醫黴菌鑑定已常規使用，獸醫引入中但需犬貓專用資料庫 |
| 皮膚微生物組定序（skin microbiome sequencing） | 犬異位性皮膚炎的 dysbiosis 評估與個人化治療指導 | 人醫 AD microbiome 研究活躍，獸醫犬 AD 微生物組研究增加中 |

## 五、臨床爭議與知識空缺 (Controversies & Knowledge Gaps)

| 爭議議題 | 現況 | Evidence Level |
|---------|------|---------------|
| 犬 Malassezia 過量增殖的標準化計數閾值 | 不同採樣方法（壓印 vs 膠帶 vs 棉棒）的「異常」計數閾值不同，缺乏統一標準 | Level III |
| Sarcoptes 刮搔陰性時的最佳確診策略 | 刮搔敏感度僅 ~50%，血清學（IgG ELISA）敏感度 ~85% 但在台灣不易取得，trial therapy 仍為主流 | Level II |
| 犬深層膿皮症經驗性抗生素 vs 常規培養藥敏的成本效益 | MRSP 盛行率上升（台灣 ~20-30%），但每例常規 C&S 的成本效益尚無大型研究 | Level III |`,
  clinical_pearl: 'Sarcoptes scabiei 刮搔的敏感度僅約 50%，也就是一半的疥癬患犬刮搔是陰性的。因此如果臨床高度懷疑（劇烈搔癢、耳翼邊緣反射陽性、典型分布），即使刮搔陰性仍應進行試驗性治療（trial therapy with isoxazoline）。',
  common_mistakes: [
    '深層刮搔未刮到出血點就停止，遺漏深層毛囊內的 Demodex',
    '皮膚刮搔陰性就排除 Sarcoptes——敏感度僅 ~50%，應考慮 trial therapy',
    '壓印抹片染色時間不足導致 Malassezia 和細菌辨識困難',
    '耳道細胞學中少量 Malassezia 即給予抗黴菌治療——需考慮臨床症狀',
    '將 MCT 的 Diff-Quik 顆粒不明顯（poorly granulated MCT）誤判為其他圓細胞腫瘤',
  ],
  disease_data: null,
  diagnostic_data: {
    indication: ['皮膚感染評估（細菌/酵母菌）', '外寄生蟲篩檢（Demodex/Sarcoptes）', '皮膚腫塊初步診斷', '外耳炎感染原鑑別', '治療反應監測'],
    contraindication: ['無絕對禁忌症。深層刮搔在眼周需特別小心。'],
    technique: '壓印抹片：載玻片直接壓於病灶。膠帶抹片：透明膠帶貼皮膚後置於載玻片上。淺層刮搔：10 號刀片沾礦物油，平行刮表面。深層刮搔：擠壓皮膚使毛囊內容物外推，垂直方向深刮至微量出血。均以 Diff-Quik 染色（膠帶抹片僅用後兩步）。',
    normal_findings: [
      { finding: '正常皮膚壓印', description: '少量角質化上皮，無細菌或酵母菌', significance: '皮膚屏障完整' },
      { finding: '正常皮膚刮搔', description: '未見寄生蟲', significance: '無外寄生蟲感染（但 Sarcoptes 可能假陰性）' },
      { finding: '正常耳道', description: '少量角質化上皮，偶見 < 5 Malassezia/OIF', significance: '無顯著感染' },
    ],
    abnormal_findings: [
      { finding: 'Malassezia 過量增殖', description: '> 2/OIF（非脂漏皮膚）或 > 5/OIF（耳道）', significance: 'Malassezia dermatitis/otitis，常為續發（需查原發病因）' },
      { finding: 'Demodex 蟲體', description: '成蟲、幼蟲或蟲卵', significance: '犬蠕形蟲症（demodicosis），評估局部 vs 全身型' },
      { finding: '細胞內球菌', description: '嗜中性球內可見球菌', significance: '確認細菌性膿皮症（非汙染），需考慮培養' },
      { finding: 'MCT 細胞', description: '含嗜鹼性顆粒的圓形細胞', significance: '肥大細胞瘤，需組織病理分級' },
    ],
    interpretation_guide: '1. 低倍掃描整體細胞量與背景。2. 高倍辨識感染原（細菌型態與位置、Malassezia 數量、寄生蟲）。3. 評估發炎細胞類型（嗜中性球 vs 嗜酸性球）。4. 腫塊 FNA 則評估腫瘤類型。5. 整合臨床病灶分布與病史。',
    pitfalls: [
      '深層刮搔未足夠深度（需見到出血點）',
      '未在刮搔前擠壓皮膚，降低 Demodex 偵測率',
      '壓印抹片太厚無法辨識細胞',
      '耳道採樣時棉棒深入過深造成不適或損傷',
    ],
    sensitivity_specificity: 'Demodex 深層刮搔敏感度 > 90%。Sarcoptes 刮搔敏感度僅 ~50%。Malassezia 膠帶抹片法敏感度約 85-90%。皮膚 FNA 對常見腫瘤的準確率約 80-95%（取決於腫瘤類型）。',
    cost_benefit: '所有採樣技術成本極低，10 分鐘內可獲得結果。是皮膚科門診最高 CP 值的即時診斷工具。',
  },
  procedure_data: null,
  visual_placeholders: [
    { position: '常見感染原辨識段落後', type: 'annotated_image', description: 'Malassezia、球菌、Demodex 顯微鏡辨識圖' },
    { position: '皮膚腫塊 FNA 表後', type: 'annotated_image', description: '皮膚常見腫瘤細胞學比較圖' },
  ],
  interactive_placeholders: [
    { position: '文末', type: 'interactive_quiz', description: '皮膚細胞學圖片判讀：辨識感染原與腫瘤類型' },
  ],
  drug_api_links: ['isoxazoline'],
  references: [
    { type: 'textbook', citation: 'Raskin RE, Meyer DJ. Canine and Feline Cytology: A Color Atlas and Interpretation Guide, 3rd ed. Elsevier, 2016.', relevance: '皮膚細胞學判讀圖譜' },
    { type: 'textbook', citation: 'Miller WH, Griffin CE, Campbell KL. Muller & Kirk\'s Small Animal Dermatology, 7th ed. Elsevier, 2013.', relevance: '皮膚科診斷方法學教材' },
    { type: 'journal', citation: 'Saridomichelakis MN et al. "Skin cytology in dogs and cats: a comprehensive review." Vet Dermatol 2017;28(5):457-e108.', relevance: '犬貓皮膚細胞學系統性回顧' },
    { type: 'guideline', citation: 'Hillier A et al. Guidelines for the diagnosis and antimicrobial therapy of canine superficial bacterial folliculitis (AAHA/AAVD). Vet Dermatol. 2014;25(3):163-e43.', relevance: 'AAHA/AAVD 指引——皮膚細胞學在膿皮症診斷中的標準' },
  ],
  is_current: true,
  created_at: now,
};

/** 感染性疾病實驗室診斷 — 診斷型 */
const contentInfectiousDx: NodeContent = {
  id: 'CONTENT-CPATH-L4-013',
  node_id: 'CPATH-L4-013',
  version: 1,
  summary: '感染性疾病實驗室診斷整合 PCR、血清學、培養與快篩等方法，偵測病原體的核酸、抗原或宿主抗體。正確選擇檢測方法與理解其限制是避免假陽性/假陰性的關鍵。',
  learning_objectives: [
    '比較 PCR、血清學（抗體檢測）、抗原檢測與培養的優缺點',
    '解釋抗體檢測的 seroconversion window 與假陰性風險',
    '列舉台灣犬貓常見的感染性疾病快篩套組（4Dx、FeLV/FIV 等）',
    '描述何時需要培養與藥敏試驗（C&S）',
    '說明 PCR 定量（Ct value）在臨床的判讀意義',
  ],
  key_points: [
    'PCR 偵測病原核酸：高敏感度，可在感染早期（抗體尚未產生前）即偵測到',
    '血清學偵測抗體：需 seroconversion（通常感染後 2-4 週），急性期可能假陰性',
    '抗原檢測（如 FeLV p27、Heartworm Ag）：偵測病原蛋白，敏感度與特異度因試劑而異',
    '4Dx Plus 快篩：犬心絲蟲 Ag + Ehrlichia/Anaplasma/Borrelia Ab（台灣 Ehrlichia 盛行率高）',
    'FeLV/FIV combo test：FeLV 為抗原（p27），FIV 為抗體——陽性需確認試驗',
    '培養（culture）為細菌感染金標準，提供藥敏結果指導抗生素選擇',
    '真菌培養（DTM/Sabouraud）用於 dermatophytosis 確診，需 7-21 天',
    'PCR Ct value < 25 通常代表高病原量；Ct > 35 可能為汙染或極低量',
  ],
  body: `# 感染性疾病實驗室診斷 (Infectious Disease Lab Diagnosis)

## 一、檢查原理與適應症 (Principles & Indications)



### 檢測方法比較
| 方法 | 偵測對象 | 優點 | 缺點 |
|------|---------|------|------|
| PCR | 病原核酸 | 極高敏感度、早期偵測 | 不區分活菌/死菌、成本高 |
| 血清學（抗體） | 宿主免疫反應 | 簡單快速、成本低 | 有 window period、不代表現行感染 |
| 抗原檢測 | 病原蛋白 | 較高特異度 | 敏感度因病原量而異 |
| 培養 | 活病原體 | 金標準 + 藥敏 | 耗時、特殊培養需求 |
| 顯微鏡直接觀察 | 型態辨識 | 即時、低成本 | 敏感度低、需經驗 |

### 犬常見感染性疾病檢測
### 4Dx Plus 快篩（院內 SNAP test）
| 項目 | 偵測方式 | 台灣意義 |
|------|---------|---------|
| Heartworm（犬心絲蟲） | Ag | 台灣高盛行率，年度篩檢必備 |
| Ehrlichia canis | Ab | 台灣高盛行率，壁蝨傳播 |
| Anaplasma phagocytophilum | Ab | 台灣少見但需注意 |
| Borrelia burgdorferi | Ab | 台灣極少見 |

### 犬壁蝨傳播疾病（TBD）
- Ehrlichia canis：SNAP Ab + PCR 確認；急性期 PCR 較敏感
- Babesia canis/gibsoni：血液抹片 + PCR；B. gibsoni 在台灣漸增

### 犬呼吸道
- Distemper virus：結膜/血液 PCR
- Canine influenza：鼻拭子 PCR

### 貓常見感染性疾病檢測
### FeLV/FIV 快篩
| 項目 | 偵測方式 | 注意事項 |
|------|---------|---------|
| FeLV | p27 抗原（ELISA） | 陽性需 6 週後複驗或 IFA/PCR 確認 |
| FIV | 抗體 | 幼貓 < 6 月齡可能有母源抗體假陽性 |

### 貓 FIP
- FCoV 抗體效價：不能區分 FIP 和腸道冠狀病毒
- FIP 確診需結合：積液分析 + RT-PCR + 免疫組化（immunohistochemistry）
- 血清 A:G ratio < 0.4 + 高 alpha-1 acid glycoprotein 強烈提示

### 貓呼吸道複合症
- Herpesvirus（FHV-1）：PCR（結膜/口咽拭子）
- Calicivirus（FCV）：PCR 或病毒分離
- 健康帶菌者也可能 PCR 陽性——需結合臨床症狀

### 培養與藥敏（C&S）
### 何時需要培養？
- 深層膿皮症或反覆感染
- 泌尿道感染（cystocentesis 採樣）
- 外科手術部位感染
- 疑似多重抗藥性菌
- 關節液、CSF、血液培養（sepsis）

### 採樣原則
- 在開始抗生素前採樣
- 無菌操作採集
- 適當培養基與運送條件

## 二、判讀要點 (Interpretation)

### PCR 判讀要點
### Ct Value（Cycle threshold）
- Ct < 25：高病原量，臨床意義明確
- Ct 25-35：中等病原量，需結合臨床
- Ct > 35：極低量，可能為汙染或殘存核酸

### 重要注意
- PCR 陽性 ≠ 現行活動性感染（可能偵測到死菌 DNA）
- PCR 陰性在採樣不當或 window period 可能假陰性
- 定量 PCR（qPCR）比定性 PCR 提供更多臨床資訊

## 三、常見陷阱 (Pitfalls)

## 四、人醫借鑒 (Translational Insights)

| 人醫工具/概念 | 獸醫應用潛力 | 現況 |
|-------------|-------------|------|
| MALDI-TOF 微生物快速鑑定 | 犬貓臨床感染病原從培養後數小時鑑定取代傳統 24-48 hr 生化鑑定 | 人醫微生物實驗室常規，獸醫參考實驗室逐步引入，需建立犬貓病原資料庫 |
| Multiplex PCR panel（FilmArray 等） | 犬貓呼吸道/腸道感染多病原同步偵測（1 小時出結果） | 人醫急診 syndromic panel 已普及，獸醫犬呼吸道 multiplex PCR 研究增加中 |
| Metagenomic next-generation sequencing（mNGS） | 犬貓不明原因感染的無偏向病原偵測（不需預設目標） | 人醫 CSF/血液 mNGS 已有臨床服務，獸醫研究階段但對罕見病原診斷具突破性潛力 |

## 五、臨床爭議與知識空缺 (Controversies & Knowledge Gaps)

| 爭議議題 | 現況 | Evidence Level |
|---------|------|---------------|
| 犬壁蝨傳播疾病（Ehrlichia/Anaplasma）抗體陽性但無臨床症狀時是否需要治療 | 目前共識傾向不治療亞臨床感染，但部分專家認為在高盛行區（如台灣）應考慮治療 | Level III |
| FeLV 快篩陽性的確認流程標準化 | ELISA（p27）陽性需確認（IFA/qPCR），但確認試驗在台灣送檢不便，是否單次 ELISA 足以作決策尚有爭議 | Level II |
| PCR 偵測到的低量病原（Ct > 30）的臨床意義 | 可能代表過去感染殘存 DNA、環境汙染或極低量活菌，缺乏犬貓各病原的臨床 Ct 切點研究 | Level III |`,
  clinical_pearl: '台灣是 Ehrlichia canis 的高盛行區，而 4Dx 偵測的是抗體而非抗原。感染初期（acute phase，前 1-3 週）抗體可能尚未產生，此時 SNAP 可能假陰性。如果臨床高度懷疑（血小板減少 + 壁蝨暴露史 + 發燒），應直接送 PCR 或先行經驗性治療（doxycycline），不要等抗體轉陽。',
  common_mistakes: [
    'FIV 抗體快篩在 < 6 月齡幼貓陽性就診斷 FIV——可能是母源抗體',
    'FeLV 快篩單次陽性就確診——需 6 週後複驗或 IFA 確認（transient viremia 可自行清除）',
    'FCoV 抗體效價高就診斷 FIP——高效價僅代表冠狀病毒暴露，非 FIP 確診',
    'PCR 陽性直接等同於臨床疾病——需考慮帶菌者狀態和 Ct value',
    '在已使用抗生素後才採集培養樣本——降低培養敏感度',
  ],
  disease_data: null,
  diagnostic_data: {
    indication: ['疑似感染性疾病確認', '年度心絲蟲/壁蝨疾病篩檢', '新貓 FeLV/FIV 篩檢', '不明原因發熱', '反覆感染的病原鑑定與藥敏', '呼吸道/腸道感染原鑑別'],
    contraindication: ['無絕對禁忌症。部分 PCR 需特殊採樣（如結膜拭子）需注意操作技術。'],
    technique: '快篩 SNAP test：全血/血清/血漿按試劑說明操作（3-8 分鐘判讀）。PCR：依病原選擇適當採樣部位（血液、拭子、組織），專用採樣管送外部實驗室。培養：無菌採集後放入適當培養/運送培養基，室溫運送（24 小時內送達實驗室）。',
    normal_findings: [
      { finding: '4Dx 全陰性', description: '犬心絲蟲 Ag(-)、Ehrlichia Ab(-)、Anaplasma Ab(-)、Borrelia Ab(-)', significance: '無偵測到的壁蝨傳播疾病或心絲蟲感染' },
      { finding: 'FeLV/FIV 全陰性', description: 'FeLV Ag(-)、FIV Ab(-)', significance: '目前無 FeLV 或 FIV 感染（考慮 window period）' },
      { finding: '培養無生長', description: '48-72 小時無菌落生長', significance: '無細菌感染（前提是採樣前未用抗生素）' },
    ],
    abnormal_findings: [
      { finding: 'Ehrlichia Ab 陽性', description: '4Dx Ehrlichia canis 抗體陽性', significance: '曾經或現行 Ehrlichia 感染，需結合 CBC（血小板減少）與臨床評估' },
      { finding: 'FeLV Ag 陽性', description: 'p27 抗原陽性', significance: '現行 FeLV 抗原血症——需 6 週後複驗確認是否為 persistent 感染' },
      { finding: 'PCR 陽性（Ct < 25）', description: '高病原量', significance: '活動性感染可能性高，臨床意義明確' },
      { finding: '培養陽性 + 多重抗藥', description: 'MRSP 或 Pseudomonas 等', significance: '需根據藥敏結果選擇抗生素，避免經驗性廣效用藥' },
    ],
    interpretation_guide: '1. 根據臨床疑診選擇適當檢測方法。2. 考慮 window period 與採樣時機。3. 快篩陽性結果需確認試驗。4. PCR 結合 Ct value 評估病原量。5. 培養結果指導抗生素選擇。6. 整合臨床表現與實驗室結果。',
    pitfalls: [
      '抗體檢測在感染早期（window period）假陰性',
      'PCR 偵測死菌 DNA 導致假陽性（如抗生素治療後）',
      '健康帶菌者 PCR 陽性不代表臨床疾病',
      '快篩判讀時間過長或不足影響結果',
    ],
    sensitivity_specificity: '4Dx heartworm Ag 敏感度 > 99%（感染 > 5 隻成蟲時），特異度 > 99%。FeLV ELISA 敏感度 ~98%、特異度 ~98%。FIV Ab 敏感度 ~99%、特異度 ~98%（成貓）。PCR 敏感度取決於病原量與採樣品質。',
    cost_benefit: '院內快篩成本中等、10 分鐘出結果，適合篩檢。PCR 成本較高但準確度最佳。培養 + 藥敏耗時但對抗藥性感染不可或缺。',
  },
  procedure_data: null,
  visual_placeholders: [
    { position: '檢測方法比較表後', type: 'flowchart', description: '感染性疾病檢測選擇流程圖' },
    { position: 'PCR 判讀要點後', type: 'comparison_table', description: 'Ct value 與臨床意義對照表' },
  ],
  interactive_placeholders: [
    { position: '文末', type: 'interactive_quiz', description: '感染性疾病檢測選擇與結果判讀情境題' },
  ],
  drug_api_links: ['doxycycline'],
  references: [
    { type: 'textbook', citation: 'Sykes JE. Canine and Feline Infectious Diseases. Elsevier, 2014.', relevance: '犬貓感染性疾病診斷核心教材' },
    { type: 'guideline', citation: 'Littman MP et al. "ACVIM Consensus Statement on Lyme Borreliosis and Ehrlichiosis." J Vet Intern Med 2018;32(3):887-903.', relevance: '壁蝨傳播疾病診斷與治療共識' },
    { type: 'journal', citation: 'Hartmann K. "Feline leukemia virus infection." In: Greene CE, ed. Infectious Diseases of the Dog and Cat, 4th ed. Elsevier, 2012:108-136.', relevance: 'FeLV 診斷流程與確認試驗' },
    { type: 'journal', citation: 'Tasker S. "Diagnosis of feline infectious peritonitis: update on evidence supporting available tests." J Feline Med Surg 2018;20(3):228-243.', relevance: 'FIP 實驗室診斷的最新實證' },
  ],
  is_current: true,
  created_at: now,
};

/** 臨床病理學總覽 — 概念型 */
const contentCpathOverview: NodeContent = {
  id: 'CONTENT-CPATH-L0-001',
  node_id: 'CPATH-L0-001',
  version: 1,
  summary: '臨床病理學（Clinical Pathology）是獸醫學中連結臨床與實驗室的核心橋樑學科，涵蓋血液學、臨床生化與細胞學三大分支，從樣本採集到報告產出的完整流程直接影響臨床決策品質。',
  learning_objectives: [
    '定義臨床病理學的範疇及其在獸醫醫療中的角色',
    '列舉臨床病理學三大分支（血液學、臨床生化、細胞學）的核心內容',
    '描述從樣本採集到報告產出的完整工作流程',
    '說明品質管控（QC）在實驗室醫學中的重要性',
    '理解臨床病理學如何與其他臨床專科整合',
  ],
  key_points: [
    '臨床病理學三大分支：血液學（Hematology）、臨床生化（Clinical Chemistry）、細胞學（Cytology）',
    '從樣本採集（Pre-analytical）→ 分析（Analytical）→ 報告判讀（Post-analytical）的三階段品質管控',
    '參考區間（Reference Interval）依物種、品種、年齡而異，不可直接套用人醫標準',
    '院內即時檢驗（POCT）與外送參考實驗室各有優缺，需根據臨床情境選擇',
    '臨床病理是所有專科的共同語言——心臟科需要 cTnI、內科需要生化、皮膚科需要細胞學',
    '品質管控包含內部品管（IQC）與外部能力測試（EQA/PT），確保結果可靠性',
  ],
  body: `# 臨床病理學總覽 (Clinical Pathology Overview)

## 一、學科定義與範疇 (Scope & Definition)

臨床病理學是獸醫學中專注於實驗室檢查判讀的專科，透過分析動物的血液、尿液、體液及組織細胞學樣本，為臨床醫師提供客觀的診斷依據。不同於解剖病理學（Anatomic Pathology）以組織切片為主，臨床病理學著重於活體樣本的即時分析與判讀。

### 三大分支

| 分支 | 核心內容 | 主要檢查 |
|------|---------|---------|
| 血液學（Hematology） | 血球生成、形態、功能 | CBC、血液抹片、凝血功能、骨髓檢查 |
| 臨床生化（Clinical Chemistry） | 器官功能、代謝狀態 | 血清生化、電解質、血氣分析、內分泌檢查 |
| 細胞學（Cytology） | 細胞形態判讀 | FNA 細胞學、體液細胞學、皮膚細胞學 |

### 與其他專科的關係

臨床病理學是所有獸醫專科的基石：
- **內科（Internal Medicine）**：生化 panel 評估肝腎功能、電解質平衡
- **腫瘤科（Oncology）**：FNA 細胞學初篩腫塊性質、CBC 監測化療副作用
- **皮膚科（Dermatology）**：皮膚細胞學鑑別感染 vs 腫瘤 vs 自體免疫
- **心臟科（Cardiology）**：cTnI（心肌肌鈣蛋白）、NT-proBNP 生物標記
- **急診科（ECC）**：即時血氣分析、乳酸、凝血功能
- **外科（Surgery）**：術前生化 + CBC 評估手術風險

## 二、重要概念 (Key Concepts)

### 實驗室工作流程的三個階段

#### 1. 分析前階段（Pre-analytical Phase）
此階段佔實驗室錯誤的 **60-70%**，是品質管控最重要的環節：
- **樣本採集**：正確的採血管選擇（EDTA → CBC、Heparin → 生化、Citrate → 凝血）
- **樣本處理**：及時分離血清/血漿、避免溶血/脂血/黃疸干擾
- **病患準備**：禁食狀態對 Triglyceride、Glucose、Bile acids 的影響
- **運送條件**：溫度、時間、震動對樣本穩定性的影響

#### 2. 分析階段（Analytical Phase）
- **儀器校正（Calibration）**：確保量測值準確度
- **內部品管（Internal Quality Control, IQC）**：每日/每批 QC 材料檢測，Levey-Jennings 圖監控
- **Westgard 規則**：偵測系統性或隨機性誤差（1-2s、1-3s、2-2s、R-4s 等規則）
- **分析方法**：濕式化學 vs 乾式化學、阻抗法 vs 雷射流式細胞術

#### 3. 分析後階段（Post-analytical Phase）
- **參考區間（Reference Interval, RI）**：依物種、品種、年齡建立，非「正常值」
- **臨床相關性**：Delta check（與前次結果比較）、臨界值通報
- **報告撰寫**：結構化報告、臨床建議
- **結果溝通**：與臨床醫師的有效溝通是最終目標

### 參考區間的重要性

獸醫臨床病理學的一大挑戰是物種間的巨大差異：
- 犬的 ALP 正常上限遠高於貓（犬可達 200 U/L，貓通常 < 80 U/L）
- Greyhound 品種的 PCV（50-65%）和 Creatinine 高於其他犬種
- 幼年動物的 ALP 因骨骼生長而生理性升高
- 貓的 AST/ALT 正常範圍與犬不同

### 院內即時檢驗 vs 參考實驗室

| 比較項目 | 院內 POCT | 參考實驗室 |
|---------|----------|----------|
| 出結果時間 | 5-15 分鐘 | 24-72 小時 |
| 檢測項目 | 有限（常規項目） | 完整（含特殊檢查） |
| 精準度 | 中等（需定期校正） | 高（嚴格 QC） |
| 成本 | 試劑成本/test 較高 | 單價較低但有運送成本 |
| 適用情境 | 急診、術前、初篩 | 確認、特殊檢查、研究 |

## 三、常見陷阱 (Common Pitfalls)

### 分析前錯誤
- **溶血**：最常見的分析前干擾，導致 K⁺ 假性升高（犬紅血球 K⁺ 含量較低故影響較小，但 Akita 等品種例外）
- **脂血**：干擾比色法測定，導致多項生化值不準確
- **EDTA 汙染**：EDTA 管血液汙染生化管，導致 Ca²⁺ 假性降低、K⁺ 假性升高
- **採血管順序錯誤**：先採 EDTA 管再採生化管可能造成 EDTA 汙染

### 判讀錯誤
- 將單一異常值視為確定診斷——需結合臨床整體評估
- 忽略物種差異直接套用犬的參考區間於貓
- 未考慮藥物對檢驗結果的影響（如 Phenobarbital 誘導 ALP 升高）

## 四、人醫借鑒 (Translational Insights)

| 人醫工具/概念 | 獸醫應用潛力 | 現況 |
|-------------|-------------|------|
| 全面自動化實驗室（Total Lab Automation, TLA） | 大型獸醫參考實驗室的自動化流程 | 人醫已普及，獸醫因檢體量較少而導入緩慢 |
| 即時釋放（Auto-verification）系統 | 正常結果自動放行，異常結果人工審核 | 獸醫參考實驗室逐步引入中 |
| AI 輔助血液抹片判讀 | 自動分類白血球、偵測異常紅血球形態 | Sysmex DI-60 等系統已有獸醫版本研發中 |

## 五、臨床爭議與知識空缺 (Controversies & Knowledge Gaps)

| 爭議議題 | 現況 | Evidence Level |
|---------|------|---------------|
| 獸醫參考區間的標準化 | 各實驗室使用不同方法建立 RI，跨實驗室比較困難；ASVCP 持續推動標準化 | Level III |
| POCT 與參考實驗室結果互換性 | 院內與外送結果可能有系統性差異，臨床上是否可直接比較仍有爭議 | Level II |
| 貓血液學的品種特異性參考區間 | 不同貓品種（如 Birman 有生理性高 Creatinine）的品種特異性 RI 資料不足 | Level III |
| AI 在臨床病理判讀中的角色 | AI 輔助判讀的準確度提升中，但在複雜多疾病情境下仍需人類專家把關 | Level IV |`,
  clinical_pearl: '臨床病理報告最重要的不是單一數值是否「正常」，而是所有結果組合起來講述的臨床故事。一個 BUN/Creatinine 輕微升高搭配 USG < 1.030 的犬，比 BUN/Creatinine 中度升高但 USG > 1.050 的脫水犬更令人擔憂。養成「看 pattern、不看單一數值」的習慣是臨床病理判讀的核心能力。',
  common_mistakes: [
    '只看紅字（超出參考區間的值）而忽略正常範圍內的趨勢變化（delta check）',
    '未核實樣本品質（溶血、脂血、凝塊）就直接判讀結果',
    '不同實驗室或儀器的結果直接比較而未考慮方法學差異',
    '將參考區間上下限視為絕對的「正常/異常」分界線，忽略灰色地帶',
  ],
  disease_data: null,
  diagnostic_data: null,
  procedure_data: null,
  visual_placeholders: [
    { position: '三大分支表後', type: 'mind_map', description: '臨床病理學三大分支與各專科連結心智圖' },
    { position: '工作流程三階段後', type: 'flowchart', description: '樣本採集→分析→報告的完整流程圖（標示各階段常見錯誤）' },
  ],
  interactive_placeholders: [
    { position: '文末', type: 'interactive_quiz', description: '分析前錯誤辨識與品管概念測驗' },
  ],
  drug_api_links: [],
  references: [
    { type: 'textbook', citation: 'Stockham SL, Scott MA. Fundamentals of Veterinary Clinical Pathology, 2nd ed. Blackwell Publishing, 2008.', relevance: '獸醫臨床病理學最經典的全方位教科書' },
    { type: 'textbook', citation: 'Rizzi TE, Valenciano AC, Cowell RL, et al. Atlas of Canine and Feline Urinalysis. Wiley-Blackwell, 2017.', relevance: '實驗室前分析品管參考' },
    { type: 'guideline', citation: 'Friedrichs KR et al. "ASVCP reference interval guidelines: determination of de novo reference intervals in veterinary species and other related topics." Vet Clin Pathol 2012;41(4):441-453.', relevance: 'ASVCP 獸醫參考區間建立指引' },
    { type: 'journal', citation: 'Flatland B et al. "ASVCP quality assurance guidelines: control of preanalytical, analytical, and postanalytical factors for urinalysis, cytology, and clinical chemistry in veterinary laboratories." Vet Clin Pathol 2014;43(1):92-109.', relevance: '獸醫實驗室三階段品質管控指南' },
  ],
  is_current: true,
  created_at: now,
};

/** 免疫學基礎 — 概念型 */
const contentImmunology: NodeContent = {
  id: 'CONTENT-CPATH-L1-003',
  node_id: 'CPATH-L1-003',
  version: 1,
  summary: '免疫學是理解感染性疾病、自體免疫疾病與過敏反應的基礎。獸醫臨床病理學中的免疫相關檢查（如抗體檢測、免疫螢光、過敏原檢測）都建立在先天性與後天性免疫的核心機轉上，且犬貓免疫系統存在重要的物種差異。',
  learning_objectives: [
    '區分先天性免疫（Innate Immunity）與後天性免疫（Adaptive Immunity）的機制與角色',
    '列舉主要抗體類別（IgG、IgM、IgA、IgE）的結構與功能',
    '描述補體系統的三條活化途徑與臨床意義',
    '分類 Gell & Coombs 四型過敏反應並舉出犬貓臨床實例',
    '說明犬貓免疫系統的物種特異性差異',
  ],
  key_points: [
    '先天性免疫：非特異性、快速反應（分鐘至小時），包括物理屏障、吞噬細胞、補體、NK 細胞',
    '後天性免疫：抗原特異性、具記憶性，分為體液免疫（B 細胞/抗體）與細胞免疫（T 細胞）',
    '犬有 4 種 IgG 亞型（IgG1-4），貓僅有 IgG1 和 IgG2——影響抗體介導疾病的表現',
    'Type I（即時型/IgE 介導）：犬異位性皮膚炎、貓氣喘',
    'Type II（抗體介導細胞毒性）：IMHA、IMTP、新生兒等免疫溶血',
    'Type III（免疫複合物）：系統性紅斑狼瘡、血管炎',
    'Type IV（延遲型/T 細胞介導）：接觸性皮膚炎、肉芽腫',
  ],
  body: `# 免疫學基礎 (Basic Immunology)

## 一、免疫系統架構 (Immune System Architecture)

免疫系統是抵禦病原體入侵的多層次防禦網絡，分為先天性免疫（Innate Immunity）與後天性免疫（Adaptive Immunity）兩大系統。

### 先天性免疫（Innate Immunity）

先天性免疫是第一道防線，反應快速（數分鐘至數小時）但缺乏抗原特異性：

| 組成 | 機制 | 臨床相關 |
|------|------|---------|
| 物理屏障 | 皮膚、黏膜、纖毛運動 | 創傷或黏膜損傷增加感染風險 |
| 吞噬細胞 | 嗜中性球、巨噬細胞吞噬病原 | 嗜中性球減少（< 1000/μL）→ 嚴重感染風險 |
| NK 細胞 | 辨識並殺死被感染或腫瘤細胞 | 抗腫瘤免疫監視 |
| 補體系統 | 溶解病原、調理素作用、趨化 | 補體缺乏罕見但導致反覆感染 |
| 急性期蛋白 | CRP、SAA、Haptoglobin 等 | 犬 CRP 升高提示急性發炎 |
| Pattern Recognition Receptors (PRRs) | TLRs 辨識 PAMPs（病原相關分子模式） | 驅動下游發炎反應 |

### 後天性免疫（Adaptive Immunity）

後天性免疫具有抗原特異性與免疫記憶，反應較慢（數天）但精準：

#### 體液免疫（Humoral Immunity — B 細胞）
B 細胞在抗原刺激後分化為漿細胞（Plasma Cell），產生抗體（Immunoglobulin）。

#### 抗體類別

| 抗體 | 結構 | 功能 | 臨床意義 |
|------|------|------|---------|
| IgG | 單體，血清中最豐富 | 調理素作用、補體活化、穿越胎盤（犬少量） | 長期免疫、疫苗效價檢測 |
| IgM | 五聚體，分子量最大 | 初次免疫反應、強力補體活化 | 急性感染指標（IgM 先升） |
| IgA | 二聚體（分泌型） | 黏膜免疫（腸道、呼吸道、淚液） | 黏膜防禦的第一線 |
| IgE | 單體，血清含量極低 | 與肥大細胞結合→過敏反應、抗寄生蟲 | Type I 過敏（異位性皮膚炎） |

**犬貓差異**：犬有 4 種 IgG 亞型（IgG1-4），貓僅有 IgG1 和 IgG2。犬 IgG4 是非補體活化型，在某些免疫疾病中扮演調節角色。

#### 細胞免疫（Cell-mediated Immunity — T 細胞）
- **CD4+ Helper T 細胞**：Th1（細胞免疫/IFN-γ）vs Th2（體液免疫/IL-4, IL-5）平衡
- **CD8+ Cytotoxic T 細胞**：殺死被感染/腫瘤細胞
- **Regulatory T 細胞（Treg）**：抑制過度免疫反應，維持免疫耐受
- **Memory T 細胞**：長期免疫記憶基礎

### 補體系統（Complement System）

補體系統有三條活化途徑：

| 途徑 | 活化方式 | 主要特色 |
|------|---------|---------|
| 經典途徑（Classical） | 抗原-抗體複合物（IgG/IgM） | 與後天性免疫連結 |
| 替代途徑（Alternative） | 病原表面直接活化 | 先天性免疫，無需抗體 |
| 凝集素途徑（Lectin/MBL） | MBL 結合病原表面甘露糖 | 先天性免疫 |

最終共同途徑→形成 MAC（Membrane Attack Complex）→ 溶解目標細胞。

## 二、過敏反應分型 — Gell & Coombs 分類 (Hypersensitivity Reactions)

| 類型 | 機制 | 時間 | 犬貓臨床實例 |
|------|------|------|------------|
| Type I（即時型） | IgE + 肥大細胞脫顆粒 | 數分鐘 | 犬異位性皮膚炎、貓氣喘、疫苗過敏反應、蜂螫過敏 |
| Type II（細胞毒性） | IgG/IgM + 補體→目標細胞溶解 | 數小時 | IMHA、IMTP、輸血反應、新生兒等免疫溶血 |
| Type III（免疫複合物） | 抗原-抗體複合物沉積→補體活化→組織損傷 | 數小時-天 | SLE、血管炎、腎絲球腎炎、Arthus reaction |
| Type IV（延遲型） | T 細胞介導→巨噬細胞活化 | 24-72 小時 | 接觸性皮膚炎、肉芽腫（結核、黴菌）、移植排斥 |

### Type I 過敏反應詳解
犬異位性皮膚炎（Canine Atopic Dermatitis）是最常見的 Type I 過敏表現：
- 致敏階段：首次接觸過敏原→B 細胞產生 IgE→IgE 結合肥大細胞表面 FcεRI
- 激發階段：再次接觸→交聯 IgE→肥大細胞脫顆粒→釋放 Histamine、Prostaglandins、Leukotrienes
- 臨床表現：搔癢、紅斑、丘疹；犬好發於臉部、腋下、腹股溝、指間

### Type II 過敏反應詳解
免疫介導溶血性貧血（IMHA）是最重要的 Type II 實例：
- 自體抗體（IgG/IgM）結合紅血球表面
- 補體活化→血管內溶血（IgM 為主），或被巨噬細胞吞噬→血管外溶血（IgG 為主）
- 實驗室診斷：球形紅血球（Spherocyte）+ 自體凝集試驗（Saline Agglutination Test）+ Coombs test 陽性

## 三、常見陷阱 (Common Pitfalls)

### 臨床免疫學判讀陷阱
- **自體凝集 vs 緡錢排列**：滴入生理食鹽水後，自體凝集不會消散（IMHA），緡錢排列會消散
- **Coombs test 假陰性**：使用類固醇治療後可能轉陰；需在開始免疫抑制治療前採樣
- **IgE 檢測的限制**：血清過敏原特異性 IgE（ASIS）的敏感度與特異度在犬約 60-80%，陽性不等於臨床相關
- **疫苗效價判讀**：犬 CPV/CDV 抗體效價陽性代表有保護力，但效價值的高低不一定與保護程度成正比

## 四、人醫借鑒 (Translational Insights)

| 人醫工具/概念 | 獸醫應用潛力 | 現況 |
|-------------|-------------|------|
| 流式細胞術（Flow Cytometry）免疫分型 | 犬貓淋巴瘤 B vs T 細胞分型、白血病免疫表型 | 獸醫參考實驗室已提供，但台灣可近性仍有限 |
| Cytokine profiling | 犬炎症性腸病（IBD）、貓氣喘的免疫分型 | 研究階段，臨床尚未常規應用 |
| 免疫檢查點抑制劑 | 犬腫瘤免疫治療（anti-PD-1/PD-L1） | 犬 melanoma 疫苗已上市，checkpoint 抑制劑研究中 |

## 五、臨床爭議與知識空缺 (Controversies & Knowledge Gaps)

| 爭議議題 | 現況 | Evidence Level |
|---------|------|---------------|
| 犬過敏原特異性免疫治療（ASIT）的最佳方案 | 皮下注射 vs 舌下滴劑（SLIT）療效比較研究有限；整體有效率約 60-70% | Level II |
| IMHA 的自體抗原身份 | 多數犬 IMHA 的具體自體抗原仍不明，限制了標靶治療的發展 | Level III |
| 貓 IgE 在過敏疾病中的角色 | 貓的 IgE 研究遠少於犬，皮內試驗和血清 IgE 檢測的臨床相關性不明確 | Level III |
| 疫苗接種頻率與免疫持續時間 | 犬 CPV/CDV 核心疫苗保護力可能持續 5-7 年以上，但現行指引仍建議 3 年補強 | Level II |`,
  clinical_pearl: '面對疑似免疫介導疾病（如 IMHA、IMTP）時，務必在開始免疫抑制治療（Prednisolone）之前完成所有免疫學檢查（Coombs test、ANA、血液抹片）。一旦開始類固醇治療，這些檢查的敏感度會顯著降低，可能導致假陰性而喪失確診機會。',
  common_mistakes: [
    '將 Coombs test 陰性直接排除 IMHA——敏感度約 60-70%，陰性不排除',
    '在過敏原檢測中，將 IgE 陽性直接等同於臨床過敏——需結合病史與臨床表現',
    '忽略犬貓免疫球蛋白的物種差異，直接套用犬的免疫學概念於貓',
    '混淆「免疫缺陷」與「免疫抑制」——前者為先天缺陷，後者為後天因素（藥物、疾病）',
  ],
  disease_data: null,
  diagnostic_data: null,
  procedure_data: null,
  visual_placeholders: [
    { position: '抗體類別表後', type: 'comparison_table', description: '五大抗體類別結構與功能比較圖（含犬貓差異標註）' },
    { position: 'Gell & Coombs 分類表後', type: 'flowchart', description: '四型過敏反應機制示意圖' },
  ],
  interactive_placeholders: [
    { position: '文末', type: 'interactive_quiz', description: '過敏反應分型與犬貓免疫學概念測驗' },
  ],
  drug_api_links: [],
  references: [
    { type: 'textbook', citation: 'Tizard IR. Veterinary Immunology: An Introduction, 10th ed. Elsevier, 2018.', relevance: '獸醫免疫學經典教科書，涵蓋先天性與後天性免疫全貌' },
    { type: 'textbook', citation: 'Day MJ, Schultz RD. Veterinary Immunology: Principles and Practice, 2nd ed. CRC Press, 2014.', relevance: '獸醫免疫學臨床應用參考' },
    { type: 'guideline', citation: 'Day MJ et al. "WSAVA Guidelines for the Vaccination of Dogs and Cats." J Small Anim Pract 2016;57(1):E1-E45.', relevance: '犬貓疫苗免疫學基礎與接種指引' },
    { type: 'journal', citation: 'Garden OA et al. "ACVIM consensus statement on the treatment of immune-mediated hemolytic anemia in dogs." J Vet Intern Med 2019;33(3):1141-1172.', relevance: 'IMHA 免疫機制與治療共識' },
  ],
  is_current: true,
  created_at: now,
};

/** 微生物學基礎 — 概念型 */
const contentMicrobiology: NodeContent = {
  id: 'CONTENT-CPATH-L1-004',
  node_id: 'CPATH-L1-004',
  version: 1,
  summary: '微生物學是感染性疾病診斷的基礎，涵蓋細菌、真菌、病毒與寄生蟲的分類與致病機制。了解犬貓常見病原體的特性以及抗微生物抗藥性（AMR）趨勢，對臨床病理標本判讀與治療決策至關重要。',
  learning_objectives: [
    '依 Gram 染色、形態與需氧性分類常見獸醫細菌病原',
    '列舉犬貓常見的真菌感染（淺表性與深部系統性）及其診斷方法',
    '描述病毒的基本分類（DNA vs RNA、有/無套膜）與犬貓重要病毒',
    '說明抗微生物抗藥性（AMR）的機制及台灣的 MRSP/MRSA 現況',
    '解釋培養與藥敏試驗（C&S）在臨床決策中的角色',
  ],
  key_points: [
    'Gram 陽性球菌（Staphylococcus, Streptococcus, Enterococcus）是犬貓皮膚與泌尿道感染最常見病原',
    'Gram 陰性桿菌（E. coli, Pseudomonas, Proteus）在泌尿道與耳道感染中重要',
    '犬皮膚主要病原為 S. pseudintermedius（非 S. aureus），其多重抗藥型為 MRSP',
    'Malassezia pachydermatis 是犬最常見的皮膚酵母菌，在皮膚細胞學中高度常見',
    '皮癬菌（Dermatophytes）以 Microsporum canis 最常見於犬貓，具人畜共通潛力',
    '系統性真菌（Blastomyces、Histoplasma、Coccidioides）在美國多見，台灣以 Cryptococcus 為主',
    '抗生素使用前採樣培養是避免培養失敗的關鍵原則',
  ],
  body: `# 微生物學基礎 (Basic Microbiology)

## 一、細菌學 (Bacteriology)

### Gram 染色分類

Gram 染色是細菌快速分類的基石，決定經驗性抗生素選擇：

| 分類 | 常見獸醫病原 | 常見感染部位 |
|------|------------|------------|
| Gram (+) 球菌 | Staphylococcus pseudintermedius、S. aureus、Streptococcus spp.、Enterococcus spp. | 皮膚、軟組織、泌尿道 |
| Gram (+) 桿菌 | Corynebacterium spp.、Clostridium spp.（厭氧）、Nocardia spp. | 腸道（C. perfringens）、傷口 |
| Gram (−) 球菌 | Neisseria spp.（少見） | 黏膜 |
| Gram (−) 桿菌 | E. coli、Pseudomonas aeruginosa、Proteus spp.、Klebsiella spp.、Salmonella spp. | 泌尿道、耳道、腸道、呼吸道 |
| 分枝桿菌 | Mycobacterium spp. | 皮膚肉芽腫、呼吸道 |
| 螺旋體 | Leptospira spp.、Borrelia spp. | 全身性（腎臟、肝臟） |
| 立克次體 | Ehrlichia canis、Anaplasma spp. | 血液細胞內寄生 |

### 需氧性分類
- **專性需氧菌**：Pseudomonas（耳道感染的重要病原）
- **兼性厭氧菌**：多數腸內菌（E. coli, Enterococcus）
- **專性厭氧菌**：Clostridium, Bacteroides, Fusobacterium（深部傷口、腹腔感染）

### 犬貓常見細菌感染

#### 犬
- **皮膚**：S. pseudintermedius（正常菌叢可在免疫力下降時致病）
- **泌尿道**：E. coli（~50%）、Staphylococcus、Proteus、Enterococcus
- **耳道**：S. pseudintermedius、Pseudomonas（慢性/抗藥性）、Proteus
- **呼吸道**：Bordetella bronchiseptica、Mycoplasma cynos

#### 貓
- **泌尿道**：E. coli（最常見）；但貓 < 10 歲的 FLUTD 多為無菌性
- **上呼吸道**：Bordetella、Chlamydophila felis、Mycoplasma felis
- **皮膚**：S. pseudintermedius（較犬少見）、Pasteurella multocida（咬傷）
- **膿胸**：混合感染（Pasteurella + 厭氧菌常見）

## 二、真菌學 (Mycology)

### 淺表性真菌感染

| 病原 | 特色 | 診斷方法 |
|------|------|---------|
| Malassezia pachydermatis | 犬最常見皮膚酵母菌，花生/鞋印形態 | 皮膚細胞學（壓片染色） |
| Microsporum canis | 犬貓最常見皮癬菌，人畜共通 | Wood's lamp（~50% 螢光）、DTM 培養、PCR |
| Trichophyton mentagrophytes | 犬少見，貓更少 | DTM 培養 |

### 深部/系統性真菌感染

| 病原 | 地理分布 | 台灣意義 | 診斷 |
|------|---------|---------|------|
| Cryptococcus neoformans/gattii | 全球 | 台灣最重要的犬貓系統性真菌 | 乳膠凝集抗原試驗（LCA）、鼻腔/CSF 細胞學 |
| Aspergillus fumigatus | 全球 | 犬鼻腔/鼻竇麴菌病 | 內視鏡 + 培養 + 抗體檢測 |
| Histoplasma capsulatum | 美國中部 | 台灣罕見（旅行史關注） | 細胞學見巨噬細胞內酵母體 |
| Blastomyces dermatitidis | 北美 | 台灣極罕見 | 細胞學見寬基出芽酵母體 |
| Sporothrix schenckii | 全球（熱帶） | 台灣偶見，貓為主要宿主，人畜共通 | 培養（雙相型）、細胞學 |

## 三、病毒學概要 (Virology Overview)

### 犬貓重要病毒

| 病毒 | 分類 | 臨床疾病 | 診斷方法 |
|------|------|---------|---------|
| CPV-2 | DNA, 無套膜 | 犬小病毒腸炎 | 糞便抗原快篩、PCR |
| CDV | RNA, 有套膜 | 犬瘟熱 | 結膜/血液 PCR |
| CCoV | RNA, 有套膜 | 犬冠狀病毒腸炎 | 糞便 PCR |
| FPV | DNA, 無套膜 | 貓泛白血球減少症 | 糞便抗原快篩（與 CPV 交叉） |
| FeLV | RNA, 有套膜（反轉錄） | 貓白血病 | p27 抗原 ELISA + IFA/PCR 確認 |
| FIV | RNA, 有套膜（反轉錄） | 貓免疫不全病毒 | 抗體快篩 + Western blot/PCR |
| FCoV/FIPV | RNA, 有套膜 | FIP | 積液分析 + RT-PCR |
| FHV-1 | DNA, 有套膜 | 貓疱疹病毒性鼻氣管炎 | PCR（結膜拭子） |
| FCV | RNA, 無套膜 | 貓杯狀病毒 | PCR、病毒分離 |

### 病毒特性與臨床相關
- **無套膜病毒**（CPV, FPV, FCV）：環境抵抗力強，需強效消毒劑
- **有套膜病毒**（FeLV, FIV, CDV）：環境脆弱，常規消毒有效
- **反轉錄病毒**（FeLV, FIV）：可整合宿主基因體，終身感染

## 四、抗微生物抗藥性 (Antimicrobial Resistance, AMR)

### 主要抗藥機制
- **酵素降解**：β-lactamase 水解 Penicillins/Cephalosporins
- **標靶修改**：mecA 基因→PBP2a→Methicillin 抗藥性（MRSP/MRSA）
- **外排幫浦**：多重抗藥性 Pseudomonas
- **滲透障礙**：外膜 Porin 突變→Gram (−) 菌的碳青黴烯類抗藥性

### 台灣獸醫重要抗藥菌

| 抗藥菌 | 意義 | 臨床影響 |
|--------|------|---------|
| MRSP (Methicillin-resistant S. pseudintermedius) | 犬皮膚/耳道最重要的抗藥菌 | 經驗性 Cephalosporins 無效，需 C&S 指導 |
| MRSA | 人源為主，犬貓為偶然宿主 | 人畜共通風險，需感染管控 |
| ESBL 產生菌 (E. coli, Klebsiella) | 泌尿道感染 | 第三代 Cephalosporins 無效 |
| Multidrug-resistant Pseudomonas | 慢性耳道/傷口感染 | 僅少數藥物有效（需藥敏） |

### 負責任抗生素使用原則
1. 盡可能在使用抗生素**前**採樣做培養（C&S）
2. 優先選擇窄效抗生素（Narrow-spectrum first）
3. 深層或反覆感染**必須**做 C&S
4. 遵循 ISCAID（International Society for Companion Animal Infectious Diseases）用藥指引
5. 避免對無菌性疾病經驗性使用抗生素（如貓下泌尿道疾病）

## 五、臨床爭議與知識空缺 (Controversies & Knowledge Gaps)

| 爭議議題 | 現況 | Evidence Level |
|---------|------|---------------|
| 犬淺表膿皮症的第一線抗生素選擇 | ISCAID 推薦 Cephalexin/Amoxicillin-Clavulanate，但 MRSP 盛行率上升可能需調整 | Level II |
| 貓無症狀菌尿（Subclinical bacteriuria）是否需要治療 | 目前共識傾向不治療，但糖尿病貓或免疫抑制貓是否為例外仍有爭議 | Level III |
| 系統性抗真菌藥物在貓 Cryptococcosis 的最佳療程 | Fluconazole 為首選，但停藥時機（抗原效價轉陰 vs 固定療程）無統一共識 | Level III |
| 台灣犬貓 AMR 監測數據 | 相較歐美，台灣缺乏系統性的伴侶動物 AMR 監測計畫 | Level IV |`,
  clinical_pearl: '在細胞學上看到球菌（Cocci），不要自動假設是 Staphylococcus。犬皮膚的確以 S. pseudintermedius 最常見，但耳道深部的球菌可能是 Enterococcus（對 Cephalosporins 天然抗藥），而咬傷感染的桿菌通常是 Pasteurella（對 Amoxicillin 敏感）。辨識感染部位與可能的菌種，是選擇正確經驗性抗生素的第一步。',
  common_mistakes: [
    '將犬皮膚感染的病原預設為 S. aureus——犬主要為 S. pseudintermedius',
    '在已使用抗生素 3-5 天後才採樣做培養——抗生素會抑制細菌生長導致假陰性',
    '所有貓下泌尿道症狀（FLUTD）都給抗生素——年輕貓多為無菌性（idiopathic cystitis）',
    '忽略厭氧菌培養——深部傷口、腹腔感染常有厭氧菌參與，需特殊培養條件',
  ],
  disease_data: null,
  diagnostic_data: null,
  procedure_data: null,
  visual_placeholders: [
    { position: 'Gram 染色分類表後', type: 'annotated_image', description: 'Gram 染色顯微鏡照片集——Gram(+) 球菌、Gram(−) 桿菌、混合感染' },
    { position: '抗藥菌表後', type: 'flowchart', description: '抗生素選擇流程圖（從經驗性→C&S 導向的決策樹）' },
  ],
  interactive_placeholders: [
    { position: '文末', type: 'interactive_quiz', description: '細菌分類、抗藥性機制與培養判讀情境題' },
  ],
  drug_api_links: [],
  references: [
    { type: 'textbook', citation: 'Greene CE, Sykes JE. Infectious Diseases of the Dog and Cat, 4th ed. Elsevier, 2012.', relevance: '犬貓感染性疾病與微生物學核心教科書' },
    { type: 'guideline', citation: 'Hillier A et al. "Guidelines for the diagnosis and antimicrobial therapy of canine superficial bacterial folliculitis (ISCAID)." Vet Dermatol 2014;25(3):163-e43.', relevance: '犬膿皮症抗生素使用指引' },
    { type: 'journal', citation: 'Weese JS et al. "ACVIM consensus statement on therapeutic antimicrobial use in animals and antimicrobial resistance." J Vet Intern Med 2015;29(2):487-498.', relevance: '伴侶動物抗微生物抗藥性與用藥共識' },
    { type: 'journal', citation: 'Moriello KA et al. "Diagnosis and treatment of dermatophytosis in dogs and cats: Clinical Consensus Guidelines." Vet Dermatol 2017;28(3):266-e68.', relevance: '犬貓皮癬菌診治共識' },
  ],
  is_current: true,
  created_at: now,
};

/** 分析方法學與儀器原理 — 機轉型 */
const contentMethodology: NodeContent = {
  id: 'CONTENT-CPATH-L2-002',
  node_id: 'CPATH-L2-002',
  version: 1,
  summary: '臨床病理學的分析階段依賴多種儀器與方法學，包括血液學分析儀（阻抗法與雷射流式細胞術）、生化分析儀（濕式與乾式化學）、免疫分析法（ELISA、側向流動免疫層析）以及即時檢驗（POCT）設備。理解這些原理有助於判讀結果時識別方法學限制與干擾因素。',
  learning_objectives: [
    '比較血液學分析儀的阻抗法與雷射流式細胞術原理及各自限制',
    '區分濕式化學與乾式化學分析儀的技術差異及適用場景',
    '說明 ELISA 與側向流動免疫層析（Lateral Flow Assay）的原理',
    '描述院內即時檢驗（POCT）與參考實驗室的方法學差異',
    '列舉常見的分析干擾因素（溶血、脂血、黃疸）對不同方法的影響',
  ],
  key_points: [
    '阻抗法（Impedance/Coulter Principle）：依細胞體積分類，成本低但無法精確分辨白血球亞型',
    '雷射流式細胞術（Laser Flow Cytometry）：多參數分析（大小、複雜度、螢光），5-part differential 更精確',
    '濕式化學（Wet Chemistry）：液態試劑 + 比色法/酵素法，項目多但試劑需冷藏',
    '乾式化學（Dry Chemistry）：試劑預載於載片（slide），單片操作，適合院內使用',
    '免疫分析法：ELISA（定量，實驗室用）vs Lateral Flow（定性/半定量，院內快篩）',
    '方法驗證三要素：精密度（Precision）、準確度（Accuracy）、線性範圍（Linearity）',
  ],
  body: `# 分析方法學與儀器原理 (Analytical Methodology & Instrumentation)

## 一、血液學分析儀 (Hematology Analyzers)

### 阻抗法（Electrical Impedance / Coulter Principle）

阻抗法是最早且最廣泛使用的血球計數技術：
- **原理**：血球通過微孔（aperture）時改變電阻→產生脈衝→脈衝大小與細胞體積成正比
- **應用**：RBC/WBC 計數、MCV 測定、血小板計數
- **限制**：
  - 僅依體積分類，WBC 只能做 3-part differential（小細胞/中等/大細胞）
  - 大血小板可能被計入 RBC，有核紅血球（nRBC）被計入 WBC
  - 貓血小板因易聚集→計數偏低（platelet clumping artifact）

### 雷射流式細胞術（Laser Flow Cytometry）

進階血液學分析儀（如 IDEXX ProCyte Dx、Sysmex XT-2000iV）採用：
- **原理**：雷射照射單一排列通過的血球→偵測前向散射光（大小）、側向散射光（內部複雜度）、螢光（核酸含量）
- **應用**：5-part WBC differential（嗜中性球、淋巴球、單核球、嗜酸性球、嗜鹼性球）
- **優勢**：
  - 精確區分白血球亞型
  - 可偵測網狀紅血球（Reticulocyte，利用 RNA 螢光染色）
  - 有核紅血球（nRBC）偵測與校正
- **限制**：成本高、仍需血液抹片確認異常 flag

### 血液學分析儀比較

| 特性 | 阻抗法 | 雷射流式 |
|------|--------|---------|
| WBC Differential | 3-part | 5-part |
| Reticulocyte | 需手動計數 | 自動計數 |
| nRBC 校正 | 無 | 有 |
| 血小板聚集偵測 | 有限 | 較佳（但仍需抹片） |
| 成本 | 低 | 高 |
| 代表機型 | Abaxis HM5, Heska HT5 | IDEXX ProCyte Dx, Sysmex |

## 二、臨床生化分析儀 (Clinical Chemistry Analyzers)

### 濕式化學（Wet Chemistry）

- **原理**：液態試劑與樣本在反應杯中混合→比色法（Spectrophotometry）或酵素法測定
- **偵測原理**：單色光通過反應液→偵測吸光度（Absorbance）→Beer-Lambert 定律計算濃度
- **代表機型**：Beckman AU 系列、Roche Cobas、Olympus（參考實驗室用）
- **優點**：項目數多、線性範圍廣、試劑成本低
- **缺點**：需液態試劑冷藏、樣本量較大、需定期校正

### 乾式化學（Dry Chemistry）

- **原理**：試劑預載於多層薄膜載片（slide）→樣本滴入→擴散層過濾→反應層產色→反射光度法測定
- **代表機型**：IDEXX Catalyst One/Dx、Fuji DRI-CHEM（院內 POCT 常見）
- **優點**：無液態試劑、操作簡單、樣本量小（最低 ~0.1 mL）
- **缺點**：單片成本高、線性範圍窄（極高/低值可能超範圍）、部分項目受溶血/脂血影響

### 比較表

| 特性 | 濕式化學 | 乾式化學 |
|------|---------|---------|
| 試劑形式 | 液態 | 預載載片 |
| 樣本量 | 較大（0.5-1 mL） | 小（0.1-0.3 mL） |
| 項目數 | 廣泛（>40） | 有限（20-30） |
| 線性範圍 | 寬 | 窄 |
| 校正頻率 | 每日/每批 | 出廠校正 + 定期 |
| 適用場景 | 參考實驗室 | 院內 POCT |

## 三、免疫分析法 (Immunoassay Principles)

### ELISA（Enzyme-Linked Immunosorbent Assay）
- **直接/間接 ELISA**：偵測抗原或抗體
- **Sandwich ELISA**：兩層抗體夾住目標抗原→高特異度
- **競爭 ELISA**：樣本中的抗原與標記抗原競爭結合
- **應用**：T4、Cortisol、cTnI、Progesterone 等定量檢測

### 側向流動免疫層析（Lateral Flow Assay / Immunochromatography）
- **原理**：樣本沿硝酸纖維素膜毛細流動→遇標記抗體形成複合物→在 test line（固定抗體）被捕獲→顯色
- **應用**：4Dx、FeLV/FIV 快篩、Heartworm Ag、CPV Ag（院內快篩的核心技術）
- **優點**：10 分鐘、無需儀器、操作簡單
- **限制**：定性（+/−），敏感度/特異度略低於實驗室 ELISA

### 化學發光免疫分析（CLIA/ECLIA）
- **原理**：化學發光取代酵素呈色→偵測光子量
- **優勢**：極高敏感度（pg/mL 等級）、寬動態範圍
- **應用**：參考實驗室的 T4、TSH、Cortisol、cTnI 等

## 四、方法驗證與品管 (Method Validation & Quality Control)

### 方法驗證三要素

| 指標 | 定義 | 驗證方法 |
|------|------|---------|
| 精密度（Precision） | 重複測量的一致性 | 同一樣本重複 20 次→計算 CV% |
| 準確度（Accuracy） | 測量值接近真值的程度 | 與參考方法比對 |
| 線性範圍（Linearity） | 測量結果與濃度成正比的範圍 | 序列稀釋實驗 |

### Westgard 多規則品管
- **1-2s 警告規則**：一個 QC 值超過 ±2 SD→警告，不一定拒絕
- **1-3s 拒絕規則**：一個 QC 值超過 ±3 SD→拒絕此批次
- **2-2s 規則**：連續兩個 QC 值超過同側 ±2 SD→系統性偏差
- **R-4s 規則**：一批中兩個 QC 值差距 > 4 SD→隨機誤差

### 常見分析干擾

| 干擾因素 | 機制 | 受影響項目 |
|---------|------|----------|
| 溶血（Hemolysis） | 紅血球內容物釋出、分光干擾 | K⁺ ↑（假性）、LDH ↑、AST ↑、Bilirubin 干擾 |
| 脂血（Lipemia） | 光散射干擾比色法 | 多數比色法項目不準確 |
| 黃疸（Icterus） | 膽紅素吸光干擾 | Creatinine（Jaffe 法假性降低）、Cholesterol |

## 五、臨床爭議與知識空缺 (Controversies & Knowledge Gaps)

| 爭議議題 | 現況 | Evidence Level |
|---------|------|---------------|
| 院內 POCT 與參考實驗室結果的互換性 | 不同方法學可能有系統性偏差，目前缺乏獸醫 POCT 的全面比對研究 | Level III |
| 乾式化學在極端值（重度氮血症、嚴重高血糖）的可靠性 | 超出線性範圍時自動稀釋功能的準確度存疑 | Level III |
| 貓血小板計數的最佳方法 | 光學法（雷射）優於阻抗法，但血小板聚集仍導致低估；Sysmex 的螢光血小板計數可能更準確 | Level II |
| AI 輔助血液抹片數位形態學 | 人醫已有 CellaVision 等系統，獸醫版本因物種差異需大量訓練資料 | Level IV |`,
  clinical_pearl: '當院內乾式化學分析儀報告的值超出預期（如 BUN > 180 mg/dL），要注意可能已超出線性範圍。此時應用生理食鹽水手動稀釋樣本（如 1:2）重測，並將結果乘以稀釋倍數。若不確定線性範圍，查閱儀器操作手冊中每個項目的 reportable range。',
  common_mistakes: [
    '忽略阻抗法 CBC 中有核紅血球（nRBC）對 WBC 計數的假性升高——需抹片確認並手動校正',
    '將院內 POCT 與參考實驗室的結果直接比較趨勢——方法學不同可能有系統性偏差',
    '在嚴重脂血樣本上直接報告生化結果——脂血干擾比色法，應離心去脂或改用不受干擾的方法',
    '未定期執行品管（QC）就報告結果——特別是院內分析儀需每日/每批 QC',
  ],
  disease_data: null,
  diagnostic_data: null,
  procedure_data: null,
  visual_placeholders: [
    { position: '血液學分析儀比較表後', type: 'animated_diagram', description: '阻抗法 vs 雷射流式細胞術原理動畫對比' },
    { position: '免疫分析法段落後', type: 'flowchart', description: 'Sandwich ELISA 與 Lateral Flow Assay 原理示意圖' },
  ],
  interactive_placeholders: [
    { position: '文末', type: 'interactive_quiz', description: '儀器原理辨識與分析干擾判讀情境題' },
  ],
  drug_api_links: [],
  references: [
    { type: 'textbook', citation: 'Stockham SL, Scott MA. Fundamentals of Veterinary Clinical Pathology, 2nd ed. Blackwell Publishing, 2008.', relevance: '獸醫實驗室方法學與儀器原理核心教材' },
    { type: 'textbook', citation: 'Weiser G. "Laboratory Technology for Veterinary Medicine." In: Thrall MA et al. Veterinary Hematology and Clinical Chemistry, 2nd ed. Wiley-Blackwell, 2012:3-33.', relevance: '獸醫血液學與生化分析儀器技術章節' },
    { type: 'guideline', citation: 'Flatland B et al. "ASVCP quality assurance guidelines: control of preanalytical and analytical factors for hematology for mammalian and non-mammalian species, general chemistry, and urinalysis." Vet Clin Pathol 2010;39(4):441-448.', relevance: 'ASVCP 分析品質管控指引' },
    { type: 'journal', citation: 'Nabity MB et al. "IRIS Canine GFR Working Group consensus recommendations for use of SDMA as a nephropathy biomarker in dogs." J Vet Intern Med 2023.', relevance: 'SDMA 方法學驗證與院內 vs 參考實驗室比較' },
  ],
  is_current: true,
  created_at: now,
};

/** 即時檢驗判讀 — 診斷型 */
const contentPOCT: NodeContent = {
  id: 'CONTENT-CPATH-L4-014',
  node_id: 'CPATH-L4-014',
  version: 1,
  summary: '即時檢驗（Point-of-Care Testing, POCT）是獸醫院內快速獲取實驗室結果的關鍵工具，涵蓋血液學、生化、血氣、凝血與免疫快篩等。正確理解 POCT 設備的優勢與限制、與參考實驗室結果的相關性差異，是避免判讀錯誤的基礎。',
  learning_objectives: [
    '列舉獸醫院內常用的 POCT 設備類型及其適用檢查',
    '比較 POCT 與參考實驗室結果的相關性與常見差異',
    '辨識 POCT 結果中常見的干擾因素與假象（artifact）',
    '說明何時應將樣本送至參考實驗室而非僅依賴 POCT',
    '描述台灣獸醫院 POCT 設備的使用現況與可近性',
  ],
  key_points: [
    'IDEXX Catalyst One/Dx：乾式化學生化分析，院內最普及，17 分鐘出結果',
    'IDEXX ProCyte Dx：雷射流式 CBC + Reticulocyte，5-part differential，替代手動分類',
    'Abaxis VetScan VS2：離心式乾式化學，12 項 rotor panel，操作簡單',
    'i-STAT（Abbott）：手持式血氣 + 電解質 + 乳酸，急診必備',
    'POCT 優勢：速度快（5-17 分鐘）、樣本量小、即時決策支持',
    'POCT 限制：線性範圍窄、精密度略低、部分項目與參考實驗室有系統性偏差',
  ],
  body: `# 即時檢驗判讀 (Point-of-Care Testing, POCT)

## 一、檢查原理與適應症 (Principles & Indications)

### 何謂 POCT？
Point-of-Care Testing 指在病患護理現場（bedside/clinic）執行的即時檢驗，結果在數分鐘內可用，支持即時臨床決策。在獸醫學中，POCT 涵蓋血液學、生化、血氣、凝血與免疫快篩等類別。

### 獸醫院內常用 POCT 設備

#### 生化分析儀

| 設備 | 技術原理 | 項目數 | 樣本量 | 出結果時間 |
|------|---------|--------|--------|----------|
| IDEXX Catalyst One | 乾式化學（多層載片） | >30 項可選 | ~0.1 mL | ~17 min |
| IDEXX Catalyst Dx | 乾式化學 | >30 項可選 | ~0.1 mL | ~8 min |
| Abaxis VetScan VS2 | 離心式乾式化學 | 12 項/rotor | ~0.1 mL | ~12 min |
| Fuji DRI-CHEM NX600 | 乾式化學（多層薄膜） | ~20 項 | ~0.01 mL/slide | ~10 min |

#### 血液學分析儀

| 設備 | 技術原理 | Differential | 特色 |
|------|---------|-------------|------|
| IDEXX ProCyte Dx | 雷射流式 + 阻抗 | 5-part | Reticulocyte 自動計數 |
| IDEXX ProCyte One | 雷射流式 | 5-part | 新一代院內 CBC |
| Heska Element HT5 | 雷射流式 + 阻抗 | 5-part | 整合生化平台 |
| IDEXX LaserCyte Dx | 雷射流式 | 5-part | 舊型號，逐步淘汰 |

#### 血氣/電解質

| 設備 | 項目 | 適用 |
|------|------|------|
| i-STAT（Abbott） | pH, pCO2, pO2, Na, K, Cl, iCa, Lactate, Glucose, BUN, Creatinine | 急診、麻醉監測 |
| IDEXX VetStat | 血氣 + 電解質 | 院內血氣分析 |
| Epoc（Siemens） | 血氣 + 電解質 + Creatinine | 手持式血氣 |

#### 免疫快篩

| 設備/產品 | 技術 | 項目 |
|----------|------|------|
| IDEXX SNAP 系列 | 側向流動免疫層析 + ELISA | 4Dx Plus、FeLV/FIV、cPL/fPL、T4、Cortisol |
| Bionote Vcheck | 螢光免疫分析 | cTnI、T4、Progesterone、CRP |
| Heska Element i+ | 免疫螢光 | Heartworm Ag、4Dx |

### POCT 的適應症
- **急診/重症**：即時血氣、電解質、乳酸、血糖、PCV/TP
- **術前評估**：基本生化 + CBC 確認手術風險
- **初診篩檢**：基本 panel 篩查主要器官功能
- **治療監測**：糖尿病血糖曲線、ACTH stimulation test
- **傳染病篩檢**：4Dx、FeLV/FIV、CPV Ag

## 二、判讀要點 (Interpretation)

### POCT vs 參考實驗室的相關性

#### 生化項目相關性

| 項目 | 相關性 | 常見差異 | 臨床影響 |
|------|--------|---------|---------|
| BUN/Creatinine | 高 | 極高值可能超出線性範圍 | POCT 正常可信賴；異常送確認 |
| ALT/AST | 中-高 | 溶血影響 AST | 輕度升高需參考實驗室確認 |
| ALP/GGT | 中-高 | 方法學差異 | 趨勢追蹤應使用同一平台 |
| Glucose | 高 | 溶血降低、全血 vs 血漿差異 | 急診可信賴；曲線使用同一設備 |
| Electrolytes（Na/K/Cl） | 高 | 離子選擇電極法差異小 | POCT 結果可直接用於臨床 |
| Total Protein | 中 | 折射計 vs 比色法差異 | 兩種方法不完全互換 |
| SDMA | 中-高 | IDEXX Catalyst vs 參考實驗室方法 | 邊界值（14-20）需外送確認 |

#### CBC 項目相關性

| 項目 | POCT（ProCyte Dx） | 注意事項 |
|------|-------------------|---------|
| RBC/HCT | 高相關 | 可信賴 |
| WBC total | 高相關 | nRBC 可能影響（有校正） |
| Neutrophils | 中-高 | 嚴重左移時可能分類不準 |
| Lymphocytes | 中-高 | 反應性淋巴球可能被 flag |
| Platelets | 中（貓低） | 貓血小板聚集→假性低估 |
| Reticulocytes | 高 | ProCyte Dx 的重要優勢 |

### 何時應送參考實驗室？

1. **POCT 結果與臨床不符**：結果正常但臨床高度懷疑異常（或反之）
2. **邊界值需精確判讀**：如 SDMA 14-20 μg/dL、T4 borderline
3. **需要 POCT 未涵蓋的項目**：如蛋白電泳、特殊內分泌、凝血因子
4. **病例需要法律/保險文件**：參考實驗室報告具法律效力
5. **品管疑慮**：POCT QC 失敗或結果異常偏離
6. **需要病理醫師判讀**：血液抹片、細胞學、骨髓

### 台灣 POCT 使用現況

台灣獸醫院的 POCT 設備使用率高，主要品牌為 IDEXX（市佔率最高），其次為 Fuji DRI-CHEM 與 Abaxis：
- 都會區動物醫院多配備 Catalyst + ProCyte + SNAP 完整系統
- 鄉鎮區域可能僅有基本生化（VetScan 或單項機）
- 血氣分析儀（i-STAT）多見於急診/重症中心
- 外送實驗室以全國動物醫院檢驗中心、IDEXX 參考實驗室為主

## 三、常見陷阱 (Common Pitfalls)

### POCT 常見假象

| 假象 | 原因 | 影響 | 對策 |
|------|------|------|------|
| 貓血小板假性低下 | 血小板聚集（EDTA 誘發） | PLT 可低至 0 | 抹片確認聚集→手動估計 |
| K⁺ 假性升高 | 溶血、Akita/柴犬品種 | K⁺ 偏高 | 確認樣本品質、品種 |
| Glucose 假性降低 | 未及時分離血漿、WBC 消耗 | 低血糖假象 | 使用 NaF 管或立即測定 |
| Lipase 假性升高 | 1,2-o-dilauryl-rac-glycero glutaric acid-(6'-methylresorufin) ester（DGGR）法非胰臟特異性 | 非胰臟炎也可升高 | 搭配 cPLI/Spec cPL |
| HCT 偏高（乾式化學） | 離心式（VetScan）受脂血影響 | HCT 假性偏高 | 使用 CBC 分析儀的 HCT |

## 四、人醫借鑒 (Translational Insights)

| 人醫工具/概念 | 獸醫應用潛力 | 現況 |
|-------------|-------------|------|
| 連續血糖監測（CGM, Freestyle Libre） | 犬貓糖尿病血糖監測 | 已有獸醫使用 Freestyle Libre 於貓，臨床研究持續增加 |
| 床邊超音波 + POCT 整合（POCUS + labs） | 急診快速評估 | 獸醫 AFAST/TFAST + 即時血氣已成為重症標配 |
| Digital connectivity（雲端 POCT 資料管理） | IDEXX VetConnect PLUS 已實現 | 自動上傳結果到病歷系統、歷史趨勢比較 |

## 五、臨床爭議與知識空缺 (Controversies & Knowledge Gaps)

| 爭議議題 | 現況 | Evidence Level |
|---------|------|---------------|
| 院內 POCT 是否需要外部能力測試（EQA/PT） | 人醫 POCT 已強制 EQA，獸醫院內 POCT 多數無外部品管要求 | Level IV |
| Freestyle Libre CGM 在貓糖尿病的準確度 | 多數研究顯示與靜脈血糖有中度相關，低血糖區間準確度較差 | Level II |
| POCT cPLI（Spec cPL/SNAP cPL）取代 Lipase 做為胰臟炎診斷標準 | Spec cPL 敏感度/特異度優於傳統 Lipase，但仍非金標準 | Level II |
| 院內 CBC 分析儀在急診的 WBC differential 可信度 | 嚴重左移或異常細胞時自動分類不準確，是否應常規搭配抹片仍有討論 | Level III |`,
  clinical_pearl: '當 IDEXX ProCyte Dx 報告貓的血小板計數 < 100,000/μL 時，**必須**確認血液抹片的血小板聚集情況。操作步驟：在抹片尾端（feathered edge）用 100x 油鏡觀察→每個油鏡視野平均有 8-15 個血小板代表血小板數量正常（約 150,000-300,000/μL）。如果看到大團聚集，報告「血小板足量但有聚集，機器計數不可靠」。',
  common_mistakes: [
    '完全信賴 POCT 結果而不做血液抹片確認——特別是異常 flag 出現時',
    '將不同 POCT 設備（如 Catalyst vs VetScan）的結果直接比較趨勢',
    '忽略 POCT 設備的定期品管（QC）維護——液態 QC 需每日/每週執行',
    '在嚴重溶血/脂血樣本上直接報告所有 POCT 生化結果——需辨識受干擾項目',
  ],
  disease_data: null,
  diagnostic_data: {
    indication: [
      '急診/重症即時評估（血氣、電解質、乳酸、PCV/TP）',
      '術前篩檢（基本生化 + CBC）',
      '初診基本健檢（肝腎功能、血球計數）',
      '糖尿病血糖監測（血糖曲線）',
      '內分泌功能測試（T4、Cortisol ACTH stimulation）',
      '傳染病快篩（4Dx、FeLV/FIV、CPV Ag、cPL）',
    ],
    contraindication: [
      '無絕對禁忌症。但以下情況應優先送參考實驗室：需要法律文件效力的結果、POCT 未涵蓋的特殊項目、QC 失敗期間。',
    ],
    technique: '生化：IDEXX Catalyst 使用 CLIP（Catalyst CLIP）載入樣本（血清/血漿/全血），自動分配至乾式載片，約 8-17 分鐘出結果。CBC：IDEXX ProCyte Dx 使用 EDTA 全血 0.25 mL，自動進樣，雷射流式分析約 5 分鐘出結果。血氣：i-STAT 使用肝素全血注入卡匣（cartridge），2 分鐘出結果。快篩：SNAP 系列依指示加入樣本（全血/血清/血漿）+ 共軛物，按壓啟動，8-10 分鐘判讀。',
    normal_findings: [
      { finding: '生化 panel 全項正常', description: '所有項目均在參考區間內', significance: '主要器官功能（肝腎）正常——但需注意 POCT 的參考區間可能與外送不同' },
      { finding: 'CBC 正常，無 flag', description: 'RBC/WBC/PLT 正常，無異常 flag', significance: '血液學無明顯異常——仍建議高風險病例搭配抹片' },
      { finding: '血氣正常', description: 'pH 7.35-7.45, pCO2 35-45, HCO3 18-24, Lactate < 2.5', significance: '酸鹼平衡正常、無組織低灌注' },
    ],
    abnormal_findings: [
      { finding: 'SDMA 邊界升高（15-20 μg/dL）', description: 'POCT SDMA 輕度升高', significance: '可能為早期腎功能下降——建議送參考實驗室確認，並搭配 UPC、USG 綜合評估' },
      { finding: '貓 PLT < 50,000（ProCyte）', description: '貓血小板計數極低但臨床無出血傾向', significance: '高度懷疑血小板聚集假象——必須確認抹片' },
      { finding: 'Lactate > 4 mmol/L', description: '血氣分析乳酸明顯升高', significance: '組織低灌注/休克/敗血症指標——需緊急介入' },
      { finding: 'SNAP cPL 陽性', description: '犬胰臟脂肪酶免疫反應性升高', significance: '高度提示胰臟炎——搭配腹部超音波確認' },
    ],
    interpretation_guide: '1. 確認樣本品質（溶血/脂血/凝塊）。2. 確認 POCT 設備 QC 狀態。3. 將結果與臨床表現比對——不符時送參考實驗室確認。4. 注意各項目的方法學限制與已知干擾。5. POCT 適合篩檢與急診決策，確認性診斷仍應參考外送結果。6. 歷史趨勢追蹤應使用同一平台。',
    pitfalls: [
      '貓 EDTA 血小板聚集導致 PLT 假性極低',
      '溶血樣本導致 K⁺、AST、LDH 假性升高',
      '嚴重脂血干擾比色法項目',
      '超出線性範圍的極端值可能不準確',
      'SNAP test 判讀時間不正確（過早/過晚）影響結果',
    ],
    sensitivity_specificity: 'IDEXX Catalyst 生化與參考實驗室相關性：BUN r=0.98, Creatinine r=0.97, ALT r=0.95, Glucose r=0.99。ProCyte Dx CBC：WBC r=0.97, RBC r=0.99, PLT r=0.85（犬）/r=0.65（貓，受聚集影響）。SNAP 4Dx Heartworm Ag：敏感度 > 99%（≥5 成蟲）、特異度 > 99%。SNAP cPL 犬：敏感度 ~95%、特異度 ~75%。',
    cost_benefit: 'POCT 單次檢測成本高於外送（生化 panel 約 NT$800-1500 vs 外送 NT$500-800），但即時性無可取代。急診場景中 POCT 的 turnaround time（5-17 分鐘 vs 外送 24-72 小時）直接影響臨床決策時效。建議急診/手術場景使用 POCT，非急迫情況可考慮外送節省成本。',
  },
  procedure_data: null,
  visual_placeholders: [
    { position: 'POCT 設備總覽表後', type: 'comparison_table', description: '院內 POCT 設備功能與適用情境對照表' },
    { position: 'POCT vs 參考實驗室段落後', type: 'flowchart', description: 'POCT vs 外送決策流程圖' },
  ],
  interactive_placeholders: [
    { position: '文末', type: 'interactive_quiz', description: 'POCT 結果判讀與假象辨識情境題' },
  ],
  drug_api_links: [],
  references: [
    { type: 'textbook', citation: 'Sirois M. Laboratory Procedures for Veterinary Technicians, 7th ed. Elsevier, 2020.', relevance: '獸醫院內實驗室設備操作與 POCT 技術教材' },
    { type: 'guideline', citation: 'Flatland B et al. "ASVCP guidelines: allowable total error hematology." Vet Clin Pathol 2010;39(4):32-43.', relevance: 'ASVCP 血液學分析容許誤差標準' },
    { type: 'journal', citation: 'Papasouliotis K et al. "Comparison of white blood cell differential percentages determined by the LaserCyte hematology analyzer and manual counting in 381 samples from dogs and cats." Vet Clin Pathol 2006;35(3):295-302.', relevance: '院內 CBC 分析儀與手動分類的比較研究' },
    { type: 'journal', citation: 'Tramuta C et al. "Evaluation of the IDEXX Catalyst Dx analyzer for the measurement of canine and feline serum biochemistry analytes." J Vet Diagn Invest 2020;32(4):566-574.', relevance: 'Catalyst Dx 院內生化與參考實驗室比對研究' },
  ],
  is_current: true,
  created_at: now,
};

/** 整合判讀與報告撰寫 — 概念型 */
const contentIntegratedReport: NodeContent = {
  id: 'CONTENT-CPATH-L5-001',
  node_id: 'CPATH-L5-001',
  version: 1,
  summary: '整合判讀是臨床病理學的最高層次能力，將 CBC、生化、尿液分析、細胞學等多項檢查結果綜合為一個連貫的臨床敘事（clinical narrative），辨識疾病模式（pattern），並撰寫結構化報告有效傳達給臨床醫師。',
  learning_objectives: [
    '將 CBC + 生化 + 尿液分析結果整合為連貫的臨床解讀',
    '辨識常見的疾病模式（肝臟模式、腎臟模式、DIC 模式等）',
    '撰寫結構化的臨床病理報告（findings → interpretation → recommendation）',
    '說明 Delta check（歷史比較）在監測中的應用',
    '演練以病例為基礎的整合判讀流程',
  ],
  key_points: [
    '整合判讀的核心是「看 pattern」而非「看單一數值」',
    '肝臟模式：ALT/AST ↑ + ALP/GGT ↑ + Bilirubin ↑ + Albumin ↓ + BUN ↓ + Cholesterol ↓ + Glucose ↓（肝衰竭）',
    '腎臟模式：BUN/Creatinine ↑ + SDMA ↑ + Phosphorus ↑ + USG < 1.030（犬）/< 1.035（貓）+ Potassium 變化',
    'DIC 模式：PLT ↓ + PT/aPTT ↑ + Fibrinogen ↓ + D-dimer ↑ + Schistocytes（血液抹片）',
    '報告結構：Findings（客觀發現）→ Interpretation（臨床解讀）→ Recommendation（建議）',
    '永遠將實驗室結果放回臨床情境中：同樣的 Creatinine 2.5 mg/dL 在脫水犬 vs 穩定腎病犬意義完全不同',
  ],
  body: `# 整合判讀與報告撰寫 (Integrated Interpretation & Report Writing)

## 一、整合判讀的思維框架 (Framework for Integrated Interpretation)

### 系統性判讀流程

整合判讀不是逐一報告每個異常值，而是將所有結果編織成一個臨床故事。建議的判讀流程：

**Step 1：確認樣本品質**
- 溶血？脂血？黃疸？凝塊？
- 採集時間（禁食？藥物？）
- 影響哪些項目的可靠性？

**Step 2：概覽所有結果，找出 Pattern**
- 不要逐項判讀——先快速掃過所有紅字，辨識哪個器官系統受影響
- 問自己：「這組異常指向同一個器官/疾病嗎？」

**Step 3：建立鑑別診斷清單**
- 根據 Pattern 列出可能的鑑別診斷
- 用其他結果（CBC、尿液、細胞學）排除或支持

**Step 4：與臨床資訊整合**
- 病史、理學檢查、影像學結果
- 實驗室結果支持或反駁臨床懷疑？

**Step 5：撰寫報告與建議**
- 提出最可能的診斷或需要進一步確認的方向

### 整合而非孤立

| 錯誤做法 | 正確做法 |
|---------|---------|
| 「ALT 升高，建議追蹤」 | 「ALT 顯著升高（1200 U/L, >10x URL）搭配 ALP 輕度升高（220 U/L, ~2x URL），此模式提示急性肝細胞損傷而非膽汁淤積。建議排除感染性/中毒性肝炎、缺氧性損傷。建議：肝炎 panel + 腹部超音波。」 |
| 「BUN/Cr 升高，腎前性或腎性」 | 「BUN 85 mg/dL, Cr 4.2 mg/dL 搭配 USG 1.015（犬），顯示腎臟無法適當濃縮尿液（預期腎前性氮血症的 USG 應 > 1.030）。此模式支持腎性氮血症，IRIS Stage 3。Phosphorus 升高與 Potassium 正常尚符合慢性腎病代償期。建議：UPC、血壓測量、腹部超音波評估腎臟結構。」 |

## 二、常見疾病模式 (Common Disease Patterns)

### 肝臟模式

#### 急性肝細胞損傷（Acute Hepatocellular Injury）
| 指標 | 預期變化 | 說明 |
|------|---------|------|
| ALT | ↑↑↑（>10x URL） | 肝細胞壞死/損傷的最敏感指標 |
| AST | ↑↑ | 同時升高但非肝特異性 |
| ALP | 正常~輕度 ↑ | 急性期 ALP 尚未誘導 |
| Bilirubin | 正常~↑ | 取決於損傷範圍 |
| Albumin | 正常（急性期） | 半衰期 8-10 天，急性不會馬上降 |

#### 膽汁淤積模式（Cholestatic Pattern）
| 指標 | 預期變化 | 說明 |
|------|---------|------|
| ALP | ↑↑↑ | 犬最敏感的膽汁淤積指標 |
| GGT | ↑↑ | 貓 GGT 比 ALP 對膽汁淤積更敏感 |
| Bilirubin | ↑↑ | 直接型為主 |
| ALT | 正常~輕度 ↑ | 繼發性肝細胞損傷 |
| Cholesterol | ↑ | 膽汁排泄受阻 |

#### 肝功能衰竭模式（Hepatic Failure）
- Albumin ↓ + BUN ↓（合成功能下降）
- Glucose ↓（糖質新生減少）
- Cholesterol ↓（合成減少）
- Bilirubin ↑（代謝排泄功能下降）
- PT/aPTT ↑（凝血因子合成減少）
- 犬 Ammonia ↑（尿素循環受損）

### 腎臟模式

#### 急性腎損傷（AKI）vs 慢性腎病（CKD）鑑別

| 特徵 | AKI | CKD |
|------|-----|-----|
| 病史 | 急性起病 | 漸進性 |
| 腎臟大小（超音波） | 正常~腫大 | 萎縮 |
| PCV | 正常 | 非再生性貧血 |
| Potassium | ↑（寡尿期） | 通常正常（除末期） |
| Phosphorus | ↑ | ↑（隨分期進展） |
| SDMA 歷史趨勢 | 急性飆升 | 漸進性上升 |
| USG | 各種可能 | 固定性低（isosthenuria） |

#### IRIS 分期整合

| IRIS Stage | Creatinine（犬） | SDMA | 臨床意義 |
|-----------|----------------|------|---------|
| 1 | < 1.4 mg/dL | 14-18 | 非氮血症但有其他腎病證據 |
| 2 | 1.4-2.8 | 18-35 | 輕度氮血症 |
| 3 | 2.9-5.0 | 36-54 | 中度氮血症 |
| 4 | > 5.0 | > 54 | 重度氮血症 |

### DIC 模式（Disseminated Intravascular Coagulation）

| 指標 | 變化 | 說明 |
|------|------|------|
| Platelets | ↓↓ | 消耗性血小板減少 |
| PT | ↑ | 凝血因子消耗 |
| aPTT | ↑ | 凝血因子消耗 |
| Fibrinogen | ↓ | 消耗（但急性期蛋白可能代償性升高） |
| D-dimer | ↑↑ | 纖維蛋白溶解產物 |
| Schistocytes | 出現 | 血液抹片——紅血球被纖維蛋白絲切割 |
| Antithrombin | ↓ | 消耗 |

### 溶血模式

| 指標 | 變化 | 說明 |
|------|------|------|
| PCV/HCT | ↓↓ | 急性貧血 |
| Reticulocytes | ↑（2-5天後） | 再生反應（IMHA、溶血毒素） |
| Bilirubin | ↑（間接型） | 血紅素代謝 |
| Spherocytes | 出現（犬） | IMHA 特徵（貓難辨識） |
| Saline agglutination | 陽性 | 自體抗體 |
| Hemoglobinemia/uria | 有 | 血管內溶血證據 |
| LDH | ↑↑ | 紅血球破壞釋出 |

### 發炎/感染模式

| 指標 | 急性發炎 | 慢性發炎 |
|------|---------|---------|
| WBC | Neutrophilia ± 左移 | Neutrophilia + Monocytosis |
| Band neutrophils | ↑（> 1000/μL） | 通常正常 |
| Toxic changes | 可能有 | 少見 |
| Fibrinogen | ↑ | ↑ |
| CRP（犬） | ↑↑（數小時內） | 可能正常化 |
| Albumin | 正常（急性） | ↓（negative acute phase protein） |
| Globulin | 正常（急性） | ↑（polyclonal gammopathy） |
| A:G ratio | 正常 | ↓ |

## 三、報告撰寫結構 (Report Writing Structure)

### 標準報告格式

\`\`\`
【臨床病理報告】
病患：○○○（物種/品種/年齡/性別）
送檢日期：YYYY-MM-DD
送檢項目：CBC + 生化 Panel + 尿液分析

一、檢查發現（Findings）
  [客觀列出所有異常值及其偏離程度]

二、臨床解讀（Interpretation）
  [將異常值整合為疾病模式，提出可能的鑑別診斷]

三、建議（Recommendations）
  [建議進一步檢查或臨床處置]

四、備註（Notes）
  [樣本品質、方法學限制、任何需要注意的事項]
\`\`\`

### 有效溝通技巧

1. **量化程度**：「ALT 顯著升高（10x URL）」而非只說「ALT 升高」
2. **說明意義**：「此模式提示急性肝細胞損傷」而非只列出數字
3. **排序建議**：將最重要/最緊急的建議放最前面
4. **明確不確定性**：「不排除 X 的可能」而非含糊帶過
5. **使用臨床語言**：與臨床醫師溝通時避免過度技術化

## 四、人醫借鑒 (Translational Insights)

| 人醫工具/概念 | 獸醫應用潛力 | 現況 |
|-------------|-------------|------|
| AI 輔助自動判讀系統 | 將 CBC + 生化自動整合為 Pattern 提示 | 人醫 LIS（Laboratory Information System）已有 auto-interpretation 規則，獸醫尚在初期 |
| Reflex testing（反射性追加檢查） | 如 PLT 低自動追加血液抹片審查 | 人醫實驗室已常規，獸醫參考實驗室部分導入 |
| Delta check 自動化 | 與前次結果自動比較，偵測突變或錯誤 | IDEXX VetConnect PLUS 提供歷史趨勢圖 |

## 五、臨床爭議與知識空缺 (Controversies & Knowledge Gaps)

| 爭議議題 | 現況 | Evidence Level |
|---------|------|---------------|
| 臨床病理報告是否應包含鑑別診斷排序？ | 部分病理醫師認為應僅提供客觀判讀，鑑別診斷應由臨床醫師決定 | Level IV |
| AI 自動判讀系統在獸醫的可靠性 | 缺乏大規模獸醫臨床驗證，現有系統多基於規則（rule-based）而非 AI | Level IV |
| 多次檢查（serial monitoring）的最適間隔 | 不同疾病的最適追蹤間隔缺乏標準化（如 CKD 每 3-6 個月？AKI 每 24-48 小時？） | Level III |
| 品種特異性參考區間對整合判讀的影響 | 使用通用 RI 可能導致特定品種的過度/不足診斷（如 Greyhound 的高 Creatinine） | Level III |`,
  clinical_pearl: '整合判讀最重要的一步是「先看全貌、再看細節」。拿到一份報告時，不要馬上看紅字——先問三個問題：(1) 這隻動物為什麼來看診？(2) 臨床醫師最擔心什麼？(3) 哪個器官系統最可能有問題？帶著這個框架去看結果，你會發現 Pattern 自動浮現，而不會迷失在一堆數字裡。',
  common_mistakes: [
    '逐項報告每個異常值而未整合為疾病模式——「ALT 高、ALP 高、Bilirubin 高」應該整合為「膽汁淤積合併肝細胞損傷模式」',
    '忽略正常結果的診斷價值——如 CKD 病患 Phosphorus 仍在正常範圍，代表可能還在 IRIS Stage 1-2',
    '未考慮臨床情境就判讀——脫水犬的 BUN/Cr 升高可能是腎前性，補液後需重新評估',
    '報告中只列數字不提建議——臨床醫師需要可操作的下一步方向',
  ],
  disease_data: null,
  diagnostic_data: null,
  procedure_data: null,
  visual_placeholders: [
    { position: '疾病模式表格後', type: 'mind_map', description: '常見疾病模式心智圖（肝臟/腎臟/DIC/溶血/發炎）' },
    { position: '報告撰寫結構後', type: 'comparison_table', description: '好報告 vs 差報告的對照範例' },
  ],
  interactive_placeholders: [
    { position: '文末', type: 'interactive_quiz', description: '病例式整合判讀練習——給定 CBC + 生化 + UA 結果，辨識 Pattern 並撰寫判讀' },
  ],
  drug_api_links: [],
  references: [
    { type: 'textbook', citation: 'Stockham SL, Scott MA. Fundamentals of Veterinary Clinical Pathology, 2nd ed. Blackwell Publishing, 2008.', relevance: '整合判讀與疾病模式辨識的核心教材' },
    { type: 'textbook', citation: 'Thrall MA et al. Veterinary Hematology and Clinical Chemistry, 2nd ed. Wiley-Blackwell, 2012.', relevance: '血液學與生化整合判讀參考' },
    { type: 'guideline', citation: 'IRIS (International Renal Interest Society). "IRIS Staging of CKD." iris-kidney.com, 2023.', relevance: 'CKD 分期整合判讀指引' },
    { type: 'journal', citation: 'Wiinberg B et al. "Tissue factor and thromboelastography in canine DIC." J Vet Intern Med 2008;22(4):826-832.', relevance: 'DIC 模式辨識與凝血整合判讀' },
  ],
  is_current: true,
  created_at: now,
};

/** 以 Map 方式匯出，方便用 nodeId 快速查找 */
export const CPATH_CONTENTS = new Map<string, NodeContent>([
  ['CPATH-L1-001', contentHemaBasics],
  ['CPATH-L1-002', contentChemBasics],
  ['CPATH-L2-001', contentPreAnalytical],
  ['CPATH-L4-001', contentCBC],
  ['CPATH-L4-002', contentBiochem],
  ['CPATH-L4-003', contentCytology],
  ['CPATH-L4-004', contentCoagulation],
  ['CPATH-L4-005', contentBloodGas],
  ['CPATH-L4-006', contentBodyFluid],
  ['CPATH-L4-007', contentBoneMarrow],
  ['CPATH-L4-008', contentBloodTyping],
  ['CPATH-L4-009', contentUrinalysis],
  ['CPATH-L4-010', contentEndocrine],
  ['CPATH-L4-011', contentLNTumorCyto],
  ['CPATH-L4-012', contentDermCyto],
  ['CPATH-L4-013', contentInfectiousDx],
  ['CPATH-L0-001', contentCpathOverview],
  ['CPATH-L1-003', contentImmunology],
  ['CPATH-L1-004', contentMicrobiology],
  ['CPATH-L2-002', contentMethodology],
  ['CPATH-L4-014', contentPOCT],
  ['CPATH-L5-001', contentIntegratedReport],
]);
