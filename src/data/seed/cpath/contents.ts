import type { NodeContent } from '@/types/knowledge';

const now = '2026-02-15T00:00:00Z';

/** 全血球計數判讀，診斷型 */
const contentCBC: NodeContent = {
  id: 'CONTENT-CPATH-L4-001',
  node_id: 'CPATH-L4-001',
  version: 2,
  summary: 'CBC 是每天看最多次的血液檢查，紅血球、白血球、血小板三大區塊的數值加上形態評估。每個專科都要會看，不會看 CBC 在臨床上基本上動不了。',
  learning_objectives: [
    '解釋 CBC 各項參數的臨床意義',
    '判讀紅血球相關指標（PCV/HCT、MCV、MCHC、reticulocyte count）',
    '判讀白血球分類計數與左移（left shift）的意義',
    '評估血小板數量與形態異常',
    '整合 CBC 結果與臨床表現制定鑑別診斷',
  ],
  key_points: [
    'PCV/HCT：犬正常 37-55%，貓 30-45%',
    'MCV 把貧血分成大球、正球、小球性',
    '嗜中性球左移：band neutrophils > 1000/μL，急性發炎的訊號',
    '血小板 < 50,000/μL 開始有自發出血風險',
    '機器數值看完一定再翻一張抹片自己掃過',
  ],
  body: `# 全血球計數 (CBC) 判讀

## 一、檢查原理與適應症 (Principles & Indications)



### 概述
CBC 是臨床最常規的血液學檢查，提供紅血球系列、白血球系列與血小板的定量資訊。

### 紅血球評估
### 貧血分類
- 再生性貧血：reticulocyte count 升高（犬 > 60,000/μL），提示溶血或失血
- 非再生性貧血：reticulocyte count 正常或降低，提示骨髓問題或慢性疾病

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

**系統化判讀順序**：PCV/HCT → WBC 總數+分類 → 血小板 → 抹片形態 → 對照臨床。

**貧血**：先分**再生性**（犬 reticulocyte > 60,000/μL；貓只算 aggregate、不算 punctate）vs **非再生性**（骨髓問題/慢性病/腎性 EPO 不足）；再用 MCV/MCHC 分小球/正球/大球。

**白血球（leukogram patterns）**：
- 發炎性：嗜中性球增多 + 左移（band↑），嚴重時 toxic change。
- **退化性左移**（band > segmented、總 WBC 常正常或偏低）= 預後較差訊號。
- 壓力（皮質醇）：成熟嗜中性球↑ + 淋巴球↓ + 嗜酸性球↓（±單核球↑，犬）。
- 生理性（腎上腺素）：成熟嗜中性球↑ + 淋巴球↑（貓常見，數分鐘內可逆）。

**血小板**：< 30,000–50,000/μL 才有自發出血風險；單看數值前先排除聚集偽性減少（看抹片 feathered edge）。

## 三、常見陷阱 (Pitfalls)

- **只信機器數字、不看抹片**：分析儀會把 nRBC 算進 WBC（WBC 虛高）、把血小板聚集判成血小板減少（PLT 偽低）。
- **貓 EDTA 偽性血小板減少**：貓血小板易聚集，抹片 feathered edge 可見團塊；必要時枸櫞酸管或新鮮抹片估算複驗。
- **脂血/溶血/黃疸干擾比色法**：HGB/MCHC 可能虛高。
- **緊迫反應誤判**：壓力（皮質醇）vs 生理性（腎上腺素）leukogram 被當感染處理。
- **參考區間物種/分析儀差異**：勿用犬區間判貓、或跨分析儀直接比較絕對值。

## 四、人醫借鑑 (Translational Insights)

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
  clinical_pearl: '不要只看數字。抹片是 CBC 的第二層保險。機器會把 nRBC 算進 WBC，也會把血小板聚集判成血小板減少。每張 CBC 報告丟出去前，自己拿抹片到 100x 油鏡下掃一遍才算數。',
  common_mistakes: [
    '只看機器數字，不看抹片',
    '貓 EDTA 偽性血小板減少沒注意到',
    '皮質醇反應的 stress leukogram 被當感染處理',
    '貧血沒看 reticulocyte，再生性跟非再生性分不出來',
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
      { finding: '貧血 (PCV 降低)', description: 'PCV 低於參考範圍下限', significance: '要再分類：再生性 vs 非再生性、小球 vs 正球 vs 大球' },
      { finding: '白血球增多', description: 'WBC 高於參考範圍上限', significance: '感染、發炎、壓力反應、腫瘤（白血病）' },
      { finding: '血小板減少', description: 'PLT < 175,000/μL', significance: '免疫介導、DIC、骨髓抑制、消耗性。< 50,000 有出血風險' },
      { finding: '左移 (Left shift)', description: 'Band neutrophils > 1000/μL', significance: '急性發炎或感染，骨髓正在釋出未成熟細胞' },
    ],
    interpretation_guide: '我自己的順序：先看 PCV/HCT，貧血還是紅血球增多。再看 WBC 總數跟分類。接著血小板。然後翻抹片把形態確認一輪。最後對臨床症狀。',
    pitfalls: [
      '樣本脂血或溶血，機器數值跑掉',
      '貓血小板容易聚集，PLT 假性偏低',
      'nRBC 被計進 WBC，數字虛高',
      '機器跳 flag 卻沒去抹片確認',
    ],
    sensitivity_specificity: 'CBC 是篩檢工具，個別參數的敏感度跟特異度要看評估什麼疾病。光看 CBC 不能下診斷，要跟臨床跟其他檢查一起看。',
    cost_benefit: '便宜、做得快，所有專科第一線都會點的檢查。CP 值在所有實驗室項目裡排前幾名。',
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
    { type: 'guideline', citation: 'Arnold JE, et al. ASVCP Guidelines: Principles of Quality Assurance and Standards for Veterinary Clinical Pathology. Vet Clin Pathol. 2019. doi:10.1111/vcp.12810.', relevance: 'ASVCP 獸醫臨床病理品質保證現行指引（取代 2009 版）' },
    { type: 'journal', citation: 'Pérez-Écija A, et al. The Immature Reticulocyte Fraction (IRF) in the Sysmex analysers. Animals. 2024;14(2):349. doi:10.3390/ani14020349.', relevance: 'IRF/未成熟網狀紅血球分率於再生評估的近期證據' },
  ],
  is_current: true,
  created_at: now,
};

/** 血液學基礎，概念型 */
const contentHemaBasics: NodeContent = {
  id: 'CONTENT-CPATH-L1-001',
  node_id: 'CPATH-L1-001',
  version: 1,
  summary: '造血系統怎麼發育、血球怎麼長出來、各系列細胞的正常長相跟功能。這層東西打不穩，後面所有血液學判讀都會虛。所有專科都用得到。',
  learning_objectives: [
    '描述骨髓造血的基本過程與調控因子（EPO、TPO、G-CSF）',
    '辨識犬貓周邊血液中各類正常血球的形態特徵',
    '說明紅血球、白血球與血小板的壽命與代謝途徑',
    '解釋網狀紅血球計數在評估骨髓再生能力的角色',
    '區分犬與貓血液學參數的物種差異',
  ],
  key_points: [
    '造血幹細胞（HSC）住在骨髓，分成骨髓系跟淋巴系兩大支',
    'EPO 調控紅血球生成，主要在腎臟產生',
    '犬紅血球壽命約 110 天，貓約 70 天，貓代謝得快',
    '貓嗜中性球不含 alkaline phosphatase，染色反應跟犬不一樣',
    '正常犬抹片偶爾會看到 Howell-Jolly bodies，貓更常見',
    '貓紅血球小（MCV 39-55 fL），中央蒼白區本來就不明顯',
    '血小板從巨核細胞胞質碎出來，受 TPO 調控',
    '白血球分類以嗜中性球佔多數（犬 60-77%，貓 35-75%）',
  ],
  body: `# 血液學基礎 (Hematology Basics)

## 一、核心概念與機轉 (Core Concept & Mechanism)



### 造血系統概述
造血（hematopoiesis）主要發生在成年動物的骨髓中。造血幹細胞（hematopoietic stem cell, HSC）具有自我更新與多能分化能力，分化為兩大譜系：

- 骨髓系（myeloid lineage）：紅血球、顆粒球（嗜中性球、嗜酸性球、嗜鹼性球）、單核球、血小板
- 淋巴系（lymphoid lineage）：T 淋巴球、B 淋巴球、NK 細胞

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
嗜中性球為犬貓最豐富的白血球。犬的嗜中性球壽命在組織中約 1-4 天，循環池與邊緣池比例約 1:1。貓的邊緣池較大（邊緣池:循環池 ≈ 3:1），所以貓更容易因興奮或壓力出現假性白血球增多。

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
  clinical_pearl: '貓的邊緣池白血球數量是循環池的 3 倍，光是緊張或興奮就能讓 WBC 跳到 2-3 倍。診間貓掙扎抓籠子那一下抽到的血，跑出來 WBC 高得嚇人，這種「假性白血球增多」是看貓 CBC 最常被坑的地方。',
  common_mistakes: [
    '犬貓參考範圍混用，拿犬的範圍去看貓',
    '貓 reticulocyte 沒分聚集型跟點狀型，再生反應被高估',
    '貓壓力性 WBC 上升（成熟嗜中性球+淋巴球都高）被當感染',
    '忘記貓 RBC 本來就小，正常 MCV 被當小球性貧血',
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
    { type: 'guideline', citation: 'Garden OA, Kidd L, Mexas AM, et al. ACVIM consensus statement on the diagnosis of immune-mediated hemolytic anemia in dogs and cats. J Vet Intern Med. 2019;33(2):313-334.', relevance: 'ACVIM 免疫介導溶血性貧血診斷共識，血液學基礎應用' },
    { type: 'journal', citation: 'Knoll JS, Rowell SL. Clinical hematology: In-clinic analysis, quality assurance, and clinical decision-making. Vet Clin North Am Small Anim Pract. 2012;42(1):1-11.', relevance: '臨床血液學品管與決策制定' },
  ],
  is_current: true,
  created_at: now,
};

/** 臨床化學基礎，概念型 */
const contentChemBasics: NodeContent = {
  id: 'CONTENT-CPATH-L1-002',
  node_id: 'CPATH-L1-002',
  version: 1,
  summary: '血清生化的原理、各個器官相關酵素跟代謝物從哪裡來、怎麼代謝，還有採樣處理會怎麼把結果搞砸。生化判讀之前要先把這層打通。',
  learning_objectives: [
    '說明常見血清酵素（ALT、AST、ALP、GGT、CK）的組織來源與半衰期',
    '描述腎功能指標（BUN、creatinine、SDMA）的生理基礎',
    '解釋蛋白質（TP、albumin、globulin）的合成與分解途徑',
    '區分 cholestatic 與 hepatocellular 酵素模式',
    '列舉影響生化結果的主要分析前因素',
  ],
  key_points: [
    'ALT 對犬肝細胞特異性很高，貓的特異性低一點（肌肉也有）',
    'ALP 在犬有三型同功酶（肝、骨、皮質醇誘導），貓只有肝跟骨',
    'BUN 受飲食蛋白、肝功能、腎功能三邊影響，腎臟特異性不如 creatinine',
    'GFR 掉到 25% 左右 SDMA 就會升，比 creatinine 早抓到',
    'Albumin 只在肝臟合成，犬半衰期 8 天、貓 7 天',
    '溶血干擾最常見：AST↑、K⁺↑、bilirubin↑、lipase↑',
    '脂血會干擾比色法，數值可能往上也可能往下偏',
    'ALP 半衰期差很大：犬 70 小時，貓 6 小時',
  ],
  body: `# 臨床化學基礎 (Clinical Chemistry Basics)

## 一、核心概念與機轉 (Core Concept & Mechanism)



### 概述
臨床化學（clinical chemistry）利用血清或血漿中的酵素活性、代謝產物濃度來評估器官功能與代謝狀態。正確判讀需先了解各指標的組織來源與生理意義。

### 肝臟相關指標
### 肝細胞損傷酵素（Hepatocellular leakage enzymes）
- ALT（alanine aminotransferase）：犬肝細胞高度特異性，貓特異性略低。半衰期犬約 60 小時，貓約 3.5 小時。
- AST（aspartate aminotransferase）：肝臟與肌肉均含。需搭配 CK 區分來源。

### 膽管酵素（Cholestatic enzymes）
- ALP（alkaline phosphatase）：犬有三種同功酶（肝、骨、皮質醇誘導型），所以犬 ALP 升高需綜合判斷。貓 ALP 半衰期僅約 6 小時，所以貓 ALP 升高的臨床意義更大。
- GGT（gamma-glutamyl transferase）：肝內膽管上皮。貓 GGT 對膽道疾病的敏感度高於 ALP。

### 腎臟相關指標
| 指標 | 來源 | GFR 下降多少時升高 | 備註 |
|------|------|-------------------|------|
| BUN | 肝臟合成 | ~75% | 受飲食、脫水影響 |
| Creatinine | 肌肉代謝 | ~75% | 受肌肉量影響 |
| SDMA | 全身細胞甲基化代謝 | ~25-40% | 較少受肌肉量影響 |

### 蛋白質
- Total protein（TP）= albumin + globulin
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
  clinical_pearl: '貓 ALP 半衰期只有 6 小時（犬是 70 小時）。所以貓就算 ALP 只升 2-3 倍，後面也通常有膽道在燒。看到數字不高就放掉，會錯過很多病。',
  common_mistakes: [
    '忘了犬 ALP 有皮質醇誘導型，類固醇造成的 ALP 升高被當肝病',
    '腎功能只看 BUN，沒一起點 creatinine 跟 SDMA',
    '沒注意 HIL（溶血、脂血、黃疸）對生化的干擾',
    '把犬 ALP 標準套到貓身上，低估貓輕度 ALP 升高',
    '忘記 albumin 半衰期長，急性肝損傷早期 albumin 可能還沒掉',
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
    { type: 'journal', citation: 'Nabity MB, Lees GE, Boggess MM, Yerramilli M, et al. Symmetric Dimethylarginine Assay Validation, Stability, and Evaluation as a Marker for the Early Detection of Chronic Kidney Disease in Dogs. J Vet Intern Med. 2015;29(4):1036-1044. doi:10.1111/jvim.12835.', relevance: 'SDMA 作為早期腎功能指標的實證（IRIS Canine GFR Working Group）' },
    { type: 'guideline', citation: 'IRIS (International Renal Interest Society). "IRIS Staging of CKD (modified 2023)." iris-kidney.com.', relevance: 'IRIS CKD 分期指引，腎功能生化指標臨床應用標準' },
  ],
  is_current: true,
  created_at: now,
};

/** 分析前誤差與品質控管，機轉型 */
const contentPreAnalytical: NodeContent = {
  id: 'CONTENT-CPATH-L2-001',
  node_id: 'CPATH-L2-001',
  version: 1,
  summary: '實驗室誤差有六七成是在進機器之前就發生的。採樣、處理、保存這條流程沒走好，後面跑出來的數字都不能信。',
  learning_objectives: [
    '列舉分析前、分析中、分析後三階段的常見誤差來源',
    '說明溶血、脂血、黃疸（HIL index）對不同檢驗項目的影響',
    '描述品質控管（QC）的基本原理：Levey-Jennings chart 與 Westgard rules',
    '解釋參考範圍建立的統計原理與使用限制',
    '說明正確的採樣管選擇與樣本處理流程',
  ],
  key_points: [
    '分析前誤差佔六到七成，能控管卻最常被略過',
    '常見的就那幾種：採血管錯、溶血、脂血、延遲送檢、沒禁食',
    'EDTA 管做 CBC；紅頭或黃頭做血清生化；藍頭（枸櫞酸鈉）做凝血',
    '溶血會把 K⁺、AST、LDH、bilirubin 推高；脂血讓比色法跑掉',
    'Levey-Jennings chart 追 QC 趨勢跟偏移',
    'Westgard rules（1-2s、1-3s、2-2s、R-4s）判定批次過不過',
    '參考範圍取健康族群中間 95%，意思是 5% 健康動物本來就會落在範圍外',
    'EDTA 汙染血清管，Ca²⁺假性降低、K⁺假性升高',
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
- 採血管選擇：EDTA（紫頭）→ CBC；枸櫞酸鈉（藍頭）→ 凝血；肝素（綠頭）→ 急診生化；無添加劑（紅頭）/分離膠（黃頭）→ 血清生化
- 採血量不足：凝血管需精確 9:1（血液:抗凝劑）比例
- 採血順序：先採無添加劑管，最後採 EDTA 管，避免抗凝劑交叉污染

### 樣本干擾（HIL Index）
- H（Hemolysis 溶血）：細胞內容物釋出 → K⁺↑、AST↑、LDH↑
- I（Icterus 黃疸）：高 bilirubin 干擾比色法
- L（Lipemia 脂血）：光散射干擾 → 多項目不準確，可用高速離心或脂肪酶前處理

### 品質控管基本原理
### 內部品管（IQC）
每日運行已知濃度的品管檢體，繪製 Levey-Jennings chart 追蹤平均值與標準差。

### Westgard Rules 判讀
- 1-2s 警告：一個 QC 值超過 ±2SD → 警告，檢查下一個 QC
- 1-3s 拒絕：一個 QC 值超過 ±3SD → 批次拒絕
- 2-2s 拒絕：連續兩個 QC 值同側超過 ±2SD → 系統性偏移

### 參考範圍的建立與限制
參考範圍取 120 頭以上健康動物中間 95% 的數值範圍。所以：
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
  clinical_pearl: '同時點 20 項生化的話，連完全健康的動物都有 64% 機率至少跳出一個紅字。所以單一輕度異常沒搭配臨床症狀的時候，多半是統計噪音，不是真的有病理變化。',
  common_mistakes: [
    '採血順序錯：先抽 EDTA 管再抽生化管，EDTA 汙染把 Ca²⁺ 拉低',
    '凝血管採血量沒滿，枸櫞酸鈉比例變高，PT/aPTT 假性延長',
    '血清沒在 30 分鐘內分離，細胞還在代謝葡萄糖，血糖假性偏低',
    'HIL index 沒看，溶血或脂血嚴重的樣本還照單全收',
    '把單一輕微紅字當確診依據，沒想到參考範圍本身的統計限制',
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

/** 血清生化判讀，診斷型 */
const contentBiochem: NodeContent = {
  id: 'CONTENT-CPATH-L4-002',
  node_id: 'CPATH-L4-002',
  version: 2,
  summary: '血清生化是看肝、腎、胰、肌肉這些器官有沒有狀況的主力檢查。點 CBC 大概就會順手點生化，是門診跑量第二大的項目。',
  learning_objectives: [
    '系統性判讀肝臟酵素模式（hepatocellular vs cholestatic）',
    '整合 BUN、creatinine、SDMA 與 USG 評估腎功能',
    '判讀血糖、果糖胺與胰臟酵素的臨床意義',
    '辨識電解質異常模式與相關疾病（如 Addison Na/K ratio）',
    '區分犬貓生化參數的物種差異並正確套用參考範圍',
  ],
  key_points: [
    'ALT 升 2-3 倍以上，犬幾乎就是肝細胞損傷；貓還要把肌肉來源一起想',
    'ALP 升高，犬要先排除皮質醇誘導型（Cushing、類固醇）；貓無皮質醇誘導型 ALP 且半衰期短，故 ALP 升高（尤其持續或顯著）較具意義，但輕度單項仍須結合臨床',
    'Azotemia 分三類：prerenal（脫水）、renal（腎實質）、postrenal（阻塞）',
    'SDMA > 14 μg/dL，GFR 大概掉了 25-40%',
    '貓壓力性高血糖門診天天看，數值衝到 300-400 mg/dL 很常見',
    'Na/K < 27 就要把 Addison 排上鑑別清單前幾名',
    'Spec cPL/fPL 是犬貓胰臟特異性 lipase',
    'Total protein = albumin + globulin；A/G ratio 降低代表慢性發炎或蛋白流失',
  ],
  body: `# 血清生化判讀 (Serum Biochemistry Interpretation)

## 一、檢查原理與適應症 (Principles & Indications)



### 肝臟評估
### 肝細胞損傷模式
- ALT ↑↑ + AST ↑ + ALP 正常或輕微↑ → 急性肝細胞損傷
- ALT 持續輕度↑ → 慢性肝病、腫瘤浸潤

### 膽汁淤積模式
- ALP ↑↑ + GGT ↑ + Bilirubin ↑ + ALT 正常或輕微↑ → 膽道阻塞或膽管炎
- 貓：多數膽道疾病 GGT 比 ALP 更敏感（因貓 ALP 半衰期短）
- **例外：貓肝臟脂質沉積症（hepatic lipidosis）典型為 ALP 升高而 GGT 不成比例（ALP > GGT），是重要鑑別線索**

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
- 高鉀血症：腎衰竭、尿道阻塞、Addison disease、組織損傷
- 低鉀血症：嘔吐、慢性腎病（貓）、胰島素治療
- 高鈣血症：惡性腫瘤（lymphoma）、Addison、腎衰竭、維生素 D 中毒

## 二、判讀要點 (Interpretation)

### 系統性判讀流程
建議依器官系統逐步判讀：**樣本品質（HIL）→ 肝臟 → 腎臟 → 胰臟 → 蛋白質 → 電解質 → 其他**，最後回扣臨床表現與用藥史。

### 模式優先於單點
個別數值落在參考範圍外不必然有臨床意義；應看「模式」——肝細胞型（ALT/AST↑）vs 膽汁淤積型（ALP/GGT/bili↑）、azotemia 配合 USG 分 prerenal/renal/postrenal。輕度單項異常先考慮重複檢測與臨床對照，避免過度診斷。

## 三、常見陷阱 (Pitfalls)

1. **樣本品質先決**：溶血假性推高 AST、K⁺、bilirubin；脂血干擾比色法使多項結果不可信；先看 HIL（溶血/黃疸/脂血）index 再判讀。
2. **未禁食**：triglyceride 與 glucose 假性偏高；建議禁食 8-12 小時。
3. **犬 ALP 過度歸因肝病**：最常見其實是皮質醇誘導型（內源 Cushing／外源類固醇），須先排除再下肝病診斷。
4. **貓壓力性高血糖誤判糖尿病**：門診常見血糖衝 300-400 mg/dL，須搭配果糖胺區分。
5. **azotemia 未配 USG**：未採尿就把 BUN/Cr 升高歸成腎性，忽略 prerenal（脫水）與 postrenal（阻塞）。
6. **只看 BUN 評腎**：BUN 受飲食蛋白、消化道出血、脫水、肝功能影響，須與 creatinine／SDMA 並看。

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
| 禁食 vs 非禁食樣本對犬貓生化套組判讀的影響 | 禁食主要影響 triglyceride 與 glucose，但對其他項目影響程度各研究結論不一 | Level II |

## 六、近期實證更新 (Recent Evidence Updates)

1. **SDMA 早期腎損偵測（Hall 2016）**：SDMA 約在 GFR 下降 25-40% 即上升、較 creatinine 早，且不受肌肉量影響，對低肌肉量／早期 CKD 特別有用，已納入 IRIS CKD 分期作為 creatinine 的輔助；惟仍受少數非腎因素影響，**非單獨取代 creatinine**。
2. **胰臟酵素判讀（Xenoulis 2015）**：Spec cPL／fPL 為胰臟特異性免疫法、準確度優於傳統催化法 amylase/lipase；DGGR-lipase 為催化法脂肪酶、**非胰臟特異性、與 Spec cPL 非等效**，僅可作較便宜的篩檢，異常仍應以 Spec cPL／fPL 加影像確認。
3. **連續血糖監測（CGM）**：FreeStyle Libre 等貼片在犬貓糖尿病居家監測應用增加，可減少壓力性高血糖干擾並描繪血糖曲線；判讀仍須對照臨床與果糖胺。
> 參考範圍與判讀閾值因儀器／實驗室而異，臨床決策須以該檢驗單位參考值與獸醫師判讀為準。`,
  clinical_pearl: '犬 ALP 升高最常見原因不是肝病，是類固醇誘導（外源或內源都有）。但貓完全沒有皮質醇誘導型 ALP，所以貓 ALP 只要升 2 倍就要認真去追膽道或肝臟。',
  common_mistakes: [
    '貓壓力性高血糖被當糖尿病確診，沒搭配果糖胺',
    '腎功能只看 BUN，忘了 BUN 受飲食蛋白跟脫水影響',
    '犬 ALP 升高沒排除皮質醇誘導，直接下肝病診斷',
    '忽略貓 GGT 比 ALP 更會反映膽道',
    '沒看 USG 就把 azotemia 歸成腎性',
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
    interpretation_guide: '我看生化的順序：先看 HIL index 確認樣本品質。再看肝酵素的模式。然後腎功能三指標（BUN、Cr、SDMA）。接著血糖跟胰臟酵素。再看蛋白質。再看電解質。最後對臨床。',
    pitfalls: [
      '溶血會把 AST、K⁺、bilirubin 推高',
      '脂血干擾比色法，多項結果信不過',
      '沒禁食，triglyceride 跟 glucose 假性偏高',
      '類固醇造成 ALP 跟 GGT 升高被誤當肝病',
    ],
    sensitivity_specificity: '生化套組是廣篩工具，個別指標的敏感度跟特異度看疾病而定。肝酵素對肝損傷敏感但不特異；SDMA 抓早期腎損傷比 creatinine 早。',
    cost_benefit: '費用中等，跟 CBC 一起點可以覆蓋大多數常見器官疾病的初步評估。',
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
    { type: 'journal', citation: 'Vaden SL, Elliott J. Management of proteinuria in dogs and cats with chronic kidney disease. Vet Clin North Am Small Anim Pract. 2016;46(6):1115-1130. doi:10.1016/j.cvsm.2016.06.009.', relevance: '腎功能生化指標與蛋白尿管理' },
    { type: 'journal', citation: 'Hall JA, Yerramilli M, Obare E, et al. Serum concentrations of symmetric dimethylarginine and creatinine in dogs with naturally occurring chronic kidney disease. J Vet Intern Med. 2016;30(3):794-802. doi:10.1111/jvim.13942.', relevance: 'SDMA 早期腎損偵測實證（近期實證）' },
    { type: 'journal', citation: 'Xenoulis PG. Diagnosis of pancreatitis in dogs and cats. J Small Anim Pract. 2015;56(1):13-26. doi:10.1111/jsap.12274.', relevance: '犬貓胰臟炎生化診斷（Spec cPL/fPL、DGGR-lipase）' },
  ],
  is_current: true,
  created_at: now,
};

/** 細胞學基本原則，診斷型 */
const contentCytology: NodeContent = {
  id: 'CONTENT-CPATH-L4-003',
  node_id: 'CPATH-L4-003',
  version: 2,
  summary: '細胞學是用 FNA 或壓印抹片拿到細胞，染色後上顯微鏡看形態。摸到腫塊要快速分類、先看到底是什麼方向，這是第一線工具。',
  learning_objectives: [
    '描述 FNA 的正確操作技術與抹片製作方法',
    '區分發炎性、增生性與腫瘤性細胞學模式',
    '辨識惡性腫瘤細胞的細胞學標準（malignancy criteria）',
    '說明常用細胞學染色法（Diff-Quik, Wright-Giemsa）的特性',
    '判斷何時細胞學結果需追加組織病理學確認',
  ],
  key_points: [
    'FNA 微創、快、便宜，體表跟可觸及的腫塊大多可以做',
    '樣本充足性是第一關。細胞不夠（non-diagnostic）就要重抽',
    '細胞學第一刀分三類：發炎、增生、腫瘤',
    '腫瘤再分上皮（carcinoma）、間質（sarcoma）、圓細胞',
    '惡性標準看核：核大小不一(anisokaryosis)、核仁大小不一(anisonucleoliosis)/數量多/形狀亂、染色質粗、N:C ratio 大、有絲分裂多',
    '圓細胞腫瘤（lymphoma、MCT、histiocytoma、TVT、plasmacytoma）最適合細胞學',
    'Diff-Quik 三分鐘搞定，院內判讀；Wright-Giemsa 細節好但慢',
    'Sarcoma 細胞抽不太到、又分散，常常要送組織病理',
  ],
  body: `# 細胞學基本原則 (Basic Cytology Principles)

## 一、檢查原理與適應症 (Principles & Indications)



### FNA 操作技術
### 非抽吸技術（Non-aspiration / Woodpecker technique）
適合血管豐富的組織，減少血液汙染：
1. 使用 22-25G 針頭，不接注射器
2. 快速進出腫塊（woodpecker motion）數次（約 3-8 次，斜面不完全退出組織；過度穿刺反增細胞損傷與出血）
3. 改變角度重複以取得代表性樣本
4. 用 10 mL 注射器將針頭內容物吹至載玻片

### 抹片製作
- Squash prep（壓片法/壓抹法）：最常用，適合大部分「實質腫塊」FNA 樣本；「pull-apart」為其雙玻片變體（同屬實質抽吸物）
- Starfish（星狀針拖法）：亦為「實質」FNA 抽吸物之替代技術（黏稠/脆弱樣本，減少細胞破裂）——非液態樣本用
- 液態樣本：blood/wedge smear（血抹片/楔形法）製作大部分積液抹片；Line smear（線抹法）用於細胞稀疏的清澈液態（低細胞積液、BAL、關節液）以濃縮細胞

### 細胞學模式分類
> 判讀第一刀先分「發炎 vs 非發炎（組織細胞）族群」；非發炎再分正常/增生（良性，兩者常無法在細胞學區分）/惡性腫瘤。

| 模式 | 主要細胞 | 提示 |
|------|---------|------|
| 化膿性發炎（suppurative） | 嗜中性球 > 85% | 退化+胞內細菌=敗血性；無退化/無菌=免疫媒介或尿/膽刺激 |
| 肉芽腫性發炎 | 巨噬細胞 > 50% | 黴菌、分枝桿菌、異物 |
| 上皮性腫瘤 | 細胞黏附成團簇（cohesive，胞間 desmosome）、圓/多角形 | Carcinoma（N:C 依細胞型別而異、非定義特徵） |
| 間質性腫瘤 | 梭形細胞、個別分散 | Sarcoma |
| 圓細胞腫瘤 | 均勻圓形/卵圓形、離散 | Lymphoma, MCT 等 |

### 惡性標準（Criteria of Malignancy）
### 一般標準
- 細胞多形性（pleomorphism）
- N:C ratio 增大
- 有絲分裂像增多或異常有絲分裂

### 核的標準（最重要——核標準是惡性主要指標）
- **核大小不一（anisokaryosis）**：指細胞核（nucleus）大小顯著變異——**非核仁**
- 核仁大小不一（anisonucleoliosis）、核仁數量增多或形狀不規則（角狀）
- 染色質粗糙或分布不均
- 核膜不規則
- 巨大核仁、多核、核質比（N:C ratio）增大

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

- **術語誤植**：anisokaryosis 是「核」大小不一（非核仁）；核仁大小不一為 anisonucleoliosis，勿混淆
- **高 N:C ratio ≠ 上皮性辨識特徵**：高 N:C 是「惡性判準」之一，上皮性的定義特徵是「黏附成團簇」
- **血液汙染**：血管豐富腫塊用抽吸易整片血，改非抽吸；過度穿刺反增出血
- **Diff-Quik 漏染 MCT 顆粒**：水性快速 Romanowsky 對肥大細胞異染顆粒染色不穩定（可能淡染或呈透明空泡），疑 MCT 應加 toluidine blue 或 Wright-Giemsa
- **反應性淋巴結誤判**：反應性增生中大淋巴球比例上升易被當淋巴瘤；低惡性度/小細胞淋巴瘤則是細胞學盲點（敏感度僅約 67%）
- **化膿性 ≠ 敗血性**：化膿性定義是嗜中性球 > 85%，須另見退化+胞內菌才是敗血；勿見化膿即斷定感染
- **Sarcoma 信心過高**：間質性腫瘤細胞剝離差、分級困難，多需組織病理

## 四、人醫借鑒 (Translational Insights)

| 人醫工具/概念 | 獸醫應用潛力 | 現況 |
|-------------|-------------|------|
| AI 輔助細胞學判讀（digital cytology） | 犬貓 FNA 樣本的電腦輔助惡性標準評估與腫瘤分類 | 人醫子宮頸/甲狀腺 FNA AI 系統已上市，獸醫 AI 細胞學研究起步中 |
| 液態活檢（liquid biopsy） | 犬腫瘤 ctDNA 非侵入性偵測，作為 FNA 的替代或補充 | 人醫肺癌/乳癌已臨床應用，獸醫犬淋巴瘤/血管肉瘤液態活檢研究階段 |
| Cell block 技術 | 將 FNA 殘餘樣本製成 cell block 進行免疫組織化學染色 | 人醫常規用於甲狀腺/淋巴結 FNA，獸醫應用增加中但尚非標準流程 |

## 五、臨床爭議與知識空缺 (Controversies & Knowledge Gaps)

| 爭議議題 | 現況 | Evidence Level |
|---------|------|---------------|
| 犬貓 FNA 細胞學 vs 組織病理的整體一致率 | 隨器官差異大：皮膚/皮下約 90%（Ghisleni 2006）、淋巴結對「淋巴瘤」偵測 >90% 但整體腫瘤一致率約 65-77%（Ku 2017）、脾臟約 60-72%、**肝臟最低僅約 30%（犬）/51%（貓）（Wang 2004）**——非籠統的 60-70% | Level II |
| 犬 MCT 細胞學分級是否可取代組織病理分級 | 細胞學可提示 high-grade，但 Kiupel（二級）/Patnaik（三級）系統皆為「組織學」分級需切片，細胞學分級標準尚未統一 | Level III |
| FNA 抽吸技術（aspiration）vs 非抽吸技術（non-aspiration）的診斷效能比較 | 非抽吸血液汙染較少，但對纖維性腫瘤細胞量可能不足，最佳策略因腫瘤類型而異 | Level III |

## 六、近期更新 (Recent Updates)

- **術語正名**：anisokaryosis＝核大小不一（Merck/Raskin & Meyer 明列「核標準為惡性主要指標」）；核仁大小不一為 anisonucleoliosis。
- **器官別準確率**：肝臟 FNA 一致率最低（Wang 2004 犬約 30%/貓約 51%），非「60-70%」；淋巴結對低惡性度淋巴瘤是盲點（Ku 2017 敏感度約 67%）。
- **MCT FNA 安全性**：皮膚/皮下 MCT 之 FNA 為安全首選（去顆粒化多輕微、自限、非禁忌，Sabattini 2018 細胞-組織一致約 85%）；「內臟型」MCT 抽吸才需抗組織胺預防。
- **MCT 分級**：Kiupel 2011 二級（低/高）與 Patnaik 三級皆為組織學分級、需切片；細胞學僅能提示 high-grade（Sabattini 2024 續驗二級系統之預後價值）。
- **AI/數位細胞學**：digital cytology 與電腦輔助惡性判讀研究漸增。`,
  clinical_pearl: '圓細胞腫瘤是細胞學最會抓的一類。淋巴瘤 FNA 準確率 90% 以上。Sarcoma 反過來，細胞量不夠又分散，常常抽不到、看不準，最後還是要組織病理。',
  common_mistakes: [
    '血管很多的腫塊還用抽吸技術，整片血',
    '反應性淋巴結增生被當成淋巴瘤',
    'Diff-Quik 把肥大細胞顆粒染不出來，MCT 漏掉',
    '只抓一個惡性標準就下判，多項同時出現才有把握',
    'Sarcoma 細胞學信心太高，沒回頭推組織病理'
  ],
  disease_data: null,
  diagnostic_data: {
    indication: ['體表腫塊初步診斷', '淋巴結腫大評估', '體腔積液分析', '關節液分析', '術中壓印抹片'],
    contraindication: ['凝血功能嚴重異常（相對禁忌）', '高度血管性腫瘤如血管肉瘤（出血風險）', '疑似「內臟型」肥大細胞瘤（脾/肝/腸胃道）抽吸前建議給抗組織胺（去顆粒化風險）；皮膚/皮下 MCT 之 FNA 為安全首選、去顆粒化多輕微自限、非禁忌'],
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
    interpretation_guide: '判讀順序：先看樣本夠不夠。低倍掃過去判斷整體模式（發炎還是腫瘤）。高倍再看細胞形態跟惡性標準。把腫瘤類型分類（上皮、間質、圓細胞）。最後寫出可能診斷跟下一步建議。',
    pitfalls: [
      '血液汙染稀釋細胞，準確度掉很多',
      '抹片太厚，細胞疊在一起認不出來',
      'Diff-Quik 對 mast cell granules 有時候染不出來',
      '反應性淋巴結裡中型大淋巴球變多被當淋巴瘤',
    ],
    sensitivity_specificity: '圓細胞腫瘤敏感度高（高惡性度淋巴瘤 >90%，但低惡性度/小細胞淋巴瘤是盲點、敏感度約 67%；Ku 2017）。器官別一致率差異大：皮膚/皮下約 90%、脾臟 60-72%、肝臟最低約 30%(犬)/51%(貓)（Wang 2004）。Sarcoma 多僅能作「肉瘤」通稱、與組織學分級一致約 50-60%。',
    cost_benefit: '幾乎零成本、結果馬上拿到、微創。腫塊評估的第一線。但 sarcoma 跟分級需求都要送組織病理。',
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
    { type: 'textbook', citation: 'Raskin RE, Meyer DJ. Canine and Feline Cytology: A Color Atlas and Interpretation Guide, 3rd ed. St. Louis: Elsevier, 2016.', relevance: '細胞學判讀權威教材與圖譜（惡性標準、模式分類、抹片製作）' },
    { type: 'textbook', citation: 'Cowell RL, Tyler RD, Meinkoth JH, DeNicola DB. Diagnostic Cytology and Hematology of the Dog and Cat, 4th ed. St. Louis: Elsevier Mosby, 2014.', relevance: '犬貓細胞學診斷教材' },
    { type: 'journal', citation: 'Ghisleni G, Roccabianca P, Ceruti R, et al. Correlation between fine-needle aspiration cytology and histopathology in the evaluation of cutaneous and subcutaneous masses from dogs and cats. Vet Clin Pathol. 2006;35(1):24-30. doi:10.1111/j.1939-165x.2006.tb00084.x', relevance: '皮膚/皮下腫塊細胞學與組織病理一致率約 90%' },
    { type: 'journal', citation: 'Kiupel M, Webster JD, Bailey KL, et al. Proposal of a 2-tier histologic grading system for canine cutaneous mast cell tumors to more accurately predict biological behavior. Vet Pathol. 2011;48(1):147-155. doi:10.1177/0300985810386469', relevance: 'MCT 二級組織學分級系統（取代 v1 捏造之「ASVCP cytologic preparation guidelines 2017」幻影引用）' },
    { type: 'journal', citation: 'Sabattini S, Brocanelli A, Zaccone R, et al. The 2-tier grading system identifies canine cutaneous and/or subcutaneous mast cell tumors with aggressive biological behavior regardless of growth model. Vet Pathol. 2024;61(6):874-881. doi:10.1177/03009858241240443', relevance: '近期：二級分級系統之預後驗證' },
  ],
  is_current: true,
  created_at: now,
};

/** 凝血功能檢查，診斷型 */
const contentCoagulation: NodeContent = {
  id: 'CONTENT-CPATH-L4-004',
  node_id: 'CPATH-L4-004',
  version: 2,
  summary: '凝血檢查在看初級止血（血小板）跟次級止血（凝血因子瀑布）有沒有壞。PT、aPTT 加血小板計數是基本三角，快速定位出血是哪一段出問題。',
  learning_objectives: [
    '說明初級止血（primary hemostasis）與次級止血（secondary hemostasis）的差異',
    '解釋 PT 與 aPTT 分別評估哪些凝血途徑',
    '判讀 PT/aPTT 的異常組合模式並列出鑑別診斷',
    '描述 DIC 的實驗室診斷標準',
    '說明抗凝劑中毒（rodenticide）的典型凝血模式',
  ],
  key_points: [
    'PT 看的是外源性途徑（factor VII）加共同途徑（X、V、II、fibrinogen）',
    'aPTT 看內源性途徑（XII、XI、IX、VIII）加共同途徑',
    '血小板少、PT/aPTT 都正常，問題在初級止血（ITP、骨髓抑制）',
    '血小板正常、PT 延長、aPTT 正常，Factor VII 缺乏，早期老鼠藥中毒先想到',
    'PT 跟 aPTT 都延長，可能共同途徑缺乏、DIC、嚴重肝病、晚期老鼠藥中毒',
    'DIC 要整合多項：血小板↓、PT/aPTT↑、fibrinogen↓、D-dimer↑、抹片看到 schistocytes',
    'BMBT 評估初級止血，犬正常 < 4 分鐘',
    '藍頭管（3.2% 枸櫞酸鈉）要 9:1 比例，採不夠 PT/aPTT 會假性延長',
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
第二代抗凝血劑（brodifacoum, bromadiolone）抑制 vitamin K epoxide reductase，阻斷 vitamin K 依賴性因子（II, VII, IX, X）的活化。Factor VII 半衰期最短（犬 ~6h），所以 PT 最先延長。

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

### 分析前誤差（最常見）
- **藍頭管採血量不足**：3.2% 枸櫞酸鈉需精確 9:1（血:抗凝劑）比例；採不足→枸櫞酸相對過量→PT/aPTT **假性延長**（最常見的分析前錯誤）
- **創傷性採血**：帶入組織因子（TF）→ 啟動外源途徑 → PT **假性縮短**
- **延遲處理**：Factor V 與 VIII 不穩定，室溫久置降解 → PT/aPTT 假性延長；應 30 分鐘內離心分離血漿
- **嚴重脂血/溶血**：干擾光學法 PT/aPTT 判讀
- **PCV 極端值需校正枸櫞酸量**：傳統校正主要用於**明顯紅血球增多（PCV > 55%）**——血漿體積減少、枸櫞酸相對過量 → PT/aPTT 假性延長；嚴重貧血為相反方向（血漿多、枸櫞酸相對不足），臨床上較少例行校正

### 判讀陷阱
- PT/aPTT 須凝血因子活性 < 30% 才延長，**正常結果不代表因子完全無異常**
- 只看 PT/aPTT 而漏掉血小板計數（初級止血）
- 把 DIC 當獨立疾病處理，未追查並治療原發病因

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
| 犬低劑量 aspirin 抗血栓預防的最佳劑量與監測 | 0.5-1 mg/kg/day vs 更高劑量，血小板功能檢測（PFA-100/Multiplate）的臨床切點尚未確立 | Level III |

## 六、近期實證更新 (Recent Evidence Updates)

- **黏彈性檢測標準化（PROVETS）**：Goggs 等人（2014）PROVETS 實證指引推動獸醫 TEG/ROTEM 操作與報告標準化；黏彈性檢測能提供凝血/血塊強度/纖溶的全貌並偵測傳統 PT/aPTT 看不到的高凝狀態，但機型/試劑間參考值仍待統一。〔Evidence Level III〕
- **即時凝血檢驗（POC）**：床邊 PT/aPTT 與黏彈性裝置縮短週轉時間，利於急診出血/創傷的即時決策。〔Evidence Level III〕
- **抗血栓藥物合理使用與監測（CURATIVE）**：deLaforcade 等人主導的 CURATIVE 共識規範犬貓抗血栓藥物選擇與監測；直接口服抗凝劑（DOAC）的 anti-Xa 藥效監測在犬血栓疾病研究中。〔Evidence Level III〕
- **DIC 缺乏單一金標準**：DIC 診斷仰賴多項異常的組合（評分式），無單一確診檢驗；fibrinogen 於急性期可正常甚至升高、schistocytes 非必然出現，須結合臨床與原發病因綜合判讀。〔Evidence Level III〕

> ⚠️ 上述更新（特別是黏彈性檢測的臨床切點與 DOAC 監測）仍待 DVM 依個案與院所設備覆核後採用。`,
  clinical_pearl: '老鼠藥中毒時 Factor VII 半衰期最短（犬約 6 小時），PT 會比 aPTT 早延長。犬不明出血、PT 拉長但 aPTT 還在範圍內，老鼠藥中毒擺第一個鑑別。治療用 Vitamin K1，不是 K3。',
  common_mistakes: [
    '凝血管採血量不到 90%，枸櫞酸鈉比例變高，PT/aPTT 假性延長',
    '凝血樣本沒在 1 小時內離心處理，Factor V 跟 VIII 室溫下會掉',
    'DIC 被當獨立疾病處理，沒去找原發病因',
    '凝血評估只看 PT/aPTT，把血小板計數丟掉',
    '枸櫞酸鈉用量校正主要用於明顯紅血球增多（PCV > 55%，血漿少→相對枸櫞酸過量→PT/aPTT 假性延長）；誤以為僅嚴重貧血需校正',
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
    interpretation_guide: '我的順序：先確認血小板（初級止血）。再看 PT（外源性）。再看 aPTT（內源性）。懷疑 DIC 就加 fibrinogen、D-dimer、AT。最後對臨床背景。',
    pitfalls: [
      '藍頭管沒填夠是最常見的分析前誤差',
      '創傷性採血帶進組織因子，PT 假性縮短',
      '室溫放太久，Factor V/VIII 降解',
      '嚴重脂血會干擾光學法的 PT/aPTT',
    ],
    sensitivity_specificity: 'PT/aPTT 要凝血因子活性掉到 30% 以下才會延長，正常結果不代表因子完全沒問題。D-dimer 敏感度高但特異度低（發炎、手術後都會升）。',
    cost_benefit: 'PT/aPTT/PLT 基礎套組費用中等，出血病人不能不做。D-dimer 跟 AT 貴一點，主要拿來確診 DIC。',
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
    { type: 'journal', citation: 'Wiinberg B, Jensen AL, Kjelgaard-Hansen M, et al. Tissue factor activated thromboelastography correlates to clinical signs of bleeding in dogs. Vet J. 2009;179(1):121-129. doi:10.1016/j.tvjl.2007.08.022', relevance: '凝血功能檢查與臨床出血的相關性' },
    { type: 'guideline', citation: 'Goggs R, Brainard B, de Laforcade AM, et al. Partnership on Rotational ViscoElastic Test Standardization (PROVETS): evidence-based guidelines on rotational viscoelastic assays in veterinary medicine. J Vet Emerg Crit Care. 2014;24(1):1-22. doi:10.1111/vec.12144', relevance: '獸醫黏彈性凝血檢測（TEG/ROTEM）標準化指引' },
    { type: 'guideline', citation: 'deLaforcade A, Bacek L, Blais MC, et al. Consensus on the Rational Use of Antithrombotics in Veterinary Critical Care (CURATIVE): domain 1—Defining populations at risk. J Vet Emerg Crit Care. 2019;29(1):37-48. doi:10.1111/vec.12797', relevance: 'CURATIVE 犬貓抗血栓藥物合理使用共識（凝血/止血臨床應用）' },
  ],
  is_current: true,
  created_at: now,
};

/** 血液氣體分析，診斷型 */
const contentBloodGas: NodeContent = {
  id: 'CONTENT-CPATH-L4-005',
  node_id: 'CPATH-L4-005',
  version: 2,
  summary: '血氣評估酸鹼平衡跟氧合狀態，急診跟 ICU 的核心檢查。判讀要把 pH、pCO₂、HCO₃⁻、base excess 之間的關係弄清楚。',
  learning_objectives: [
    '執行血液氣體判讀的系統性五步驟',
    '區分四種原發性酸鹼失衡及其代償反應',
    '計算陰離子間隙（anion gap）並解釋其臨床意義',
    '判讀 PaO₂ 與 P/F ratio 評估氧合功能',
    '辨識混合性酸鹼失衡',
  ],
  key_points: [
    '正常動脈血：犬貓 pH 7.35-7.45、pCO₂ 35-45 mmHg、HCO₃⁻ 20-24 mEq/L',
    '代謝性酸中毒最常見於腎衰竭、DKA、乳酸酸中毒',
    '呼吸性酸中毒就是通氣不夠，pCO₂ 衝上去',
    'Anion gap = Na⁺ - (Cl⁻ + HCO₃⁻)，犬 12-24、貓 13-27 mEq/L',
    'High AG 酸中毒：DKA、乳酸、乙二醇中毒、尿毒症',
    'Normal AG（高氯性）酸中毒：腹瀉、RTA、生理食鹽水打太多',
    'P/F ratio = PaO₂/FiO₂；< 300/< 200 為氧合受損支持性閾值，ALI/ARDS 確診須符合獸醫共識（急性發作+雙側浸潤+排除心因性水腫）',
    '靜脈血氣可以替代動脈血氣看酸鹼，但氧合不行',
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
- P/F ratio < 300 / < 200：氧合受損的支持性閾值（非單獨診斷）；ALI/ARDS 確診須符合獸醫共識定義（急性發作、雙側肺浸潤、排除心因性肺水腫，Wilkins 2007）
- A-a gradient = [(FiO₂ × 713) - (PaCO₂/0.8)] - PaO₂

## 三、常見陷阱 (Pitfalls)

### 分析前誤差
- 氣泡殘留：樣本中空氣氣泡使 PaO₂ 假性升高（向 150 mmHg 偏移）、PaCO₂ 假性降低。採樣後必須立即排出氣泡並密封。
- 延遲分析：室溫放置 > 15 分鐘，白血球與紅血球持續代謝 → pH 下降、PaCO₂ 上升、PaO₂ 下降、乳酸升高。置冰上可延長至 30 分鐘。
- 肝素過量稀釋：液態肝素殘留量過多會稀釋樣本，使 pCO₂ 與 HCO₃⁻ 假性降低（每 10% 稀釋量約使 pCO₂ 降低 5-10%）。建議使用乾燥平衡肝素注射器（dry balanced heparin syringe）。

### 判讀陷阱
- 未驗證代償：只看 pH 和原發失衡就下結論，忽略使用 Winter's formula 或代償預期值。結果可能遺漏混合性酸鹼失衡（如 DKA + 呼吸性鹼中毒）。
- 靜脈血評氧合：靜脈血 pO₂（通常 35-50 mmHg）反映組織氧消耗，不代表肺部氧合功能。只有動脈血 PaO₂ 與 P/F ratio 才能評估肺功能。
- 忽略體溫效應：低體溫使 O₂ 與 CO₂ 溶解度增加，pH 升高。體溫每低 1°C，pH 約升高 0.015，未校正可能誤判為鹼血症。
- FiO₂ 假設錯誤：計算 A-a gradient 和 P/F ratio 時，常假設 FiO₂ = 21%（room air），但若患畜已接受氧氣治療則需使用實際 FiO₂。
- 單一時間點判斷：趨勢比單一數值更重要。乳酸 4 mmol/L 但呈下降趨勢，比 2.5 mmol/L 但持續上升更樂觀。

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
| Base excess vs bicarbonate 作為代謝性酸中毒指標 | BE 已標準化（SBE），但不同血氣機器間仍有差異；HCO₃⁻ 為計算值非實測值 | Level III |

## 六、近期實證更新 (Recent Evidence Updates)

1. **白蛋白校正 anion gap（Stewart 觀點）**：低白蛋白血症會降低 AG 並可能掩蓋潛在 high-AG 酸中毒；應依白蛋白校正 AG（每降 1 g/dL albumin，AG 約低 2.5-3 mEq/L），避免漏判。
2. **乳酸清除率導向**：乳酸趨勢（清除率）優於單次值；6 小時內顯著下降預後較佳，為休克復甦終點之一。
3. **靜脈血氣替代**：多數非呼吸性病例 VBG 之 pH/HCO₃⁻ 足以評估酸鹼、免動脈穿刺；氧合仍須動脈血或脈衝血氧。
4. **POC i-STAT 床邊化**：急診/ICU 即時血氣＋乳酸加速決策；品質保證依 ASVCP 規範。
> 酸鹼判讀須結合臨床；P/F、ALI/ARDS 等氧合指標之診斷須符合獸醫共識全貌，由獸醫判讀。`,
  clinical_pearl: '急診不必等動脈血氣。靜脈血氣的 pH 跟 HCO₃⁻ 跟動脈差不多（pH 差 < 0.05，HCO₃⁻ 差 < 2 mEq/L），抓酸鹼狀態啟動治療夠用。只有要評估氧合（呼吸窘迫那種）才一定要動脈血。',
  common_mistakes: [
    '樣本有氣泡沒排掉，pO₂ 假性高、pCO₂ 假性低',
    '用靜脈血氣的 pO₂ 評估氧合，那是組織氧消耗不是肺',
    '沒用 Winter\'s formula 驗代償，混合性酸鹼失衡漏掉',
    '沒做溫度校正：體溫每低 1°C，pH 約升高 0.015',
    'high anion gap 酸中毒全部歸成乳酸，沒想到 DKA 或中毒',
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
    interpretation_guide: '看血氣的順序：先 pH 看 acidemia 還是 alkalemia。然後 pCO₂ 跟 HCO₃⁻ 抓原發失衡。用代償公式驗。算 AG。最後看 PaO₂（要動脈血）。',
    pitfalls: [
      '樣本有氣泡，pO₂ 升、pCO₂ 降',
      '延遲分析，pH 一路掉（細胞還在代謝）',
      '肝素加太多稀釋樣本',
      '沒考慮體溫對 pH 的影響',
    ],
    sensitivity_specificity: '血氣是酸鹼跟氧合的金標準。準確度看採樣處理，不是方法本身的限制。',
    cost_benefit: '要 POC 血氣分析儀，設備跟試劑都不便宜。但重症跟急診的即時監測沒得替代。',
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
    { type: 'journal', citation: 'Hopper K, Rezende ML, Haskins SC. Assessment of the effect of dilution of blood samples with sodium heparin on blood gas, electrolyte, and lactate measurements in dogs. Am J Vet Res. 2005;66(4):656-660. doi:10.2460/ajvr.2005.66.656.', relevance: '肝素稀釋對血氣結果的影響研究' },
    { type: 'journal', citation: 'Wilkins PA, Otto CM, Baumgardner JE, et al. Acute lung injury and acute respiratory distress syndromes in veterinary medicine: consensus definitions. J Vet Emerg Crit Care. 2007;17(4):333-339. doi:10.1111/j.1476-4431.2007.00238.x.', relevance: '獸醫 ALI/ARDS 共識定義（P/F 判讀脈絡）' },
    { type: 'guideline', citation: 'Arnold JE, Camus MS, Freeman KP, et al. ASVCP Guidelines: Principles of Quality Assurance and Standards for Veterinary Clinical Pathology. Vet Clin Pathol. 2019;48(4):542-618. doi:10.1111/vcp.12810.', relevance: 'ASVCP 臨床病理品質保證標準' },
  ],
  is_current: true,
  created_at: now,
};

/** 體液分析，診斷型 */
const contentBodyFluid: NodeContent = {
  id: 'CONTENT-CPATH-L4-006',
  node_id: 'CPATH-L4-006',
  version: 2,
  summary: '胸水、腹水、心包液、關節液、CSF 的物理性狀、化學與細胞學評估。傳統上先把體腔積液分為漏出液/變性漏出液/滲出液（TP+TNCC），但各類別重疊大、鑑別力有限；現行趨勢改以蛋白為基礎（protein-poor/protein-rich）與機制導向，並輔以 Light-like 多參數與細胞學/培養定病因。',
  learning_objectives: [
    '將體腔積液分類為 pure transudate、modified transudate 與 exudate',
    '判讀體液 TP、TNCC、比重與細胞學的綜合意義',
    '辨識感染性與非感染性滲出液的特徵',
    '描述 CSF 分析的正常參數與常見異常',
    '說明關節液分析在多關節炎鑑別中的角色',
  ],
  key_points: [
    'Pure transudate：TP < 2.5 g/dL、TNCC < 1,500/μL（部分教材採 < 1,000）；低白蛋白或早期門脈高壓',
    'Modified/high-protein transudate：TP ~2.5-3.5（部分至 5.0）、TNCC ~1,000-5,000/μL；CHF、腫瘤、肝病。傳統三分類重疊大、鑑別力有限（Hazuchova 2023：傳統法準確度僅約 48%）',
    'Exudate：TP > 3.0、TNCC 明顯升高（依教材 > 5,000 或 > 7,000/μL）；感染、FIP、腫瘤、膽汁/尿液外漏',
    '貓 FIP 積液：高蛋白（> 3.5 g/dL、球蛋白為主）、細胞數低（膿性肉芽腫）、A:G < 0.4 提示（0.4-0.8 不確定、> 0.8 幾乎排除）；A:G 長於「排除」而非確診',
    'Rivalta test 對 FIP：敏感度高（~91%）、特異度僅約 66%（NPV~93%/PPV~58%，Fischer 2012）——適合排除、不能單獨確診（淋巴瘤/細菌性積液偽陽）',
    'Septic effusion 確診＝細胞內細菌（intracellular bacteria）；退化性嗜中性球為支持性非必要；培養為金標準（細胞學 Se~75%）',
    'Septic peritonitis 生化：血液-積液 glucose 差 > 20 mg/dL（犬 100%/100%、貓 86%/100%，Bonczynski 2003）',
    'Uroabdomen 確診：腹水 creatinine : 血清 > 2:1、腹水 K+ : 血清 > 1.4:1（犬，Schmiedt 2001；貓沿用犬切點）',
    'CSF 正常依部位/物種：TNCC 犬 < 5、貓 < 8/μL；TP cisternal < 25-30、lumbar < 45 mg/dL',
    '關節液：正常 TNCC < 3,000/μL；septic 與 IMPA 的 TNCC 大量重疊（IMPA 可達十餘萬），單靠 TNCC 不能區分，須培養＋找細胞內菌',
  ],
  body: `# 體液分析 (Body Fluid Analysis)

## 一、適應症與禁忌 (Indications & Contraindications)

### 適應症
- 體腔積液（胸水/腹水/心包液）的病因鑑別
- 關節積液評估（跛行、多關節腫脹、不明發熱）
- CSF 分析（癲癇、共濟失調、頸背疼痛等神經症狀）
- 疑似貓 FIP（滲出型）
- 腹腔創傷/急腹症評估（uroabdomen、bile peritonitis、septic peritonitis）

### 禁忌與注意
- CSF 採集：顱內壓升高、枕骨大孔疝脫風險為相對禁忌（先做影像評估）
- 嚴重凝血障礙時體腔穿刺需謹慎，必要時先矯正
- 心包穿刺建議超音波導引以降低風險

## 二、採樣、器材與檢體處理 (Sampling & Handling)

- 體腔穿刺（thoracocentesis / abdominocentesis）或超音波導引採集；心包穿刺建議影像導引。
- **分裝**：EDTA 管（細胞學/TNCC）＋ 無添加劑管（生化：TP、creatinine、bilirubin、triglyceride、glucose、lactate）＋ 需要時培養瓶（好氧＋厭氧）。
- **同步採血**：凡需算比值（creatinine、K⁺、bilirubin、glucose、lactate 的血-液梯度）務必同時抽周邊血。
- **時效**：所有體液 30-60 分鐘內處理；細胞會隨時間退化（尤其 CSF），延遲會低估 TNCC 並造成人工退化假象。CSF 細胞數低，建議加自體血清或立即製抹片。
- CSF 經枕大池（cisternal）或腰椎（lumbar）採 0.5-1 mL；務必記錄採集部位（影響蛋白參考值）。

## 三、判讀 (Interpretation)

### 3-1 體腔積液分類（傳統 TP+TNCC，注意其限制）
| 類型 | TP (g/dL) | TNCC (/μL) | 常見原因 |
|------|-----------|------------|---------|
| Pure transudate | < 2.5 | < 1,500（部分採 < 1,000） | 低白蛋白、早期門脈高壓 |
| Modified / high-protein transudate | ~2.5-3.5（部分至 5.0） | ~1,000-5,000 | CHF、腫瘤、肝病、心包疾病 |
| Exudate | > 3.0 | 依教材 > 5,000 或 > 7,000 | 感染、FIP、腫瘤、膽汁/尿外漏 |
| Hemorrhagic | 類似血液 | 類似血液 | 創傷、腫瘤出血、凝血障礙 |

> ⚠️ **框架時效**：傳統三分類（transudate / modified transudate / exudate）各類別數值大量重疊、對病因鑑別力有限。現行權威（eClinpath/Cornell、Stockham & Scott 第 3 版）已改採以蛋白為基礎的 **protein-poor vs protein-rich transudate + exudate** 與機制導向分類；Hazuchova 等 2023 顯示貓積液以「簡化 Light's criteria＋急性期蛋白」判病因準確度（~79-82%）遠優於傳統 TNCC+TP 三分類（~48%）。故分類僅為起點，務必結合細胞學型態、培養與臨床。

### 3-2 特殊體液的化學判準
- **Uroabdomen（尿腹）**：腹水 creatinine : 血清 creatinine > 2:1（犬特異度 100%、敏感度 86%，Schmiedt 2001）；腹水 K⁺ : 血清 K⁺ > 1.4:1（犬敏感度與特異度皆 100%）。⚠️ Schmiedt 為純犬研究；貓常沿用犬切點——文獻常引的貓「1.9」實為 Aumann 1998 的描述性平均值（非驗證切點）。膀胱剛破時尚未平衡、早期比值可能偏低，高度懷疑時隔 1-2 小時重抽。
- **Bile peritonitis（膽汁性腹膜炎）**：腹水 bilirubin > 2 倍血清 bilirubin（教科書標準，Stockham & Scott）為強力支持；確診仍需細胞學/肉眼見膽色素。
- **Chylous effusion（乳糜）**：積液 triglyceride 明顯高於血清 TG（常為數倍以上、絕對值多 > 100 mg/dL），且**積液內 cholesterol : triglyceride 比值 < 1**（關鍵鑑別，Fossum 1986）。假性乳糜（pseudochylous）相反：chol:TG > 1、TG 偏低。⚠️「積液 cholesterol 低於血清 cholesterol」並非有效判準（乳糜與非乳糜積液的 cholesterol 無差異）。
- **Septic effusion（生化輔助）**：血液-積液 glucose 差 > 20 mg/dL（血糖高於積液）——犬敏感度/特異度 100%/100%、貓 86%/100%（Bonczynski 2003）；血-液 lactate 差 < -2.0 mmol/L（積液 lactate 較高）——僅犬驗證（100%/100%，n=7）。⚠️ POC 血糖儀測全血-積液差敏感度較低（~41%，Koenig 2015），且腫瘤/胰臟炎/尿腹/膽汁積液也可出現類似梯度，須併細胞學＋培養。

### 3-3 貓 FIP 積液
- 高蛋白（總蛋白 > 3.5 g/dL、球蛋白為主 > 50%），黏稠、淡黃色
- 細胞數低（TNCC < 5 × 10⁹/L，膿性肉芽腫性：非退化嗜中性球＋巨噬細胞）
- A:G ratio：**< 0.4 高度提示、0.4-0.8 不確定、> 0.8 幾乎可排除**；A:G 的價值在「排除」大於「確診」（低盛行率族群 A:G < 0.8 之 NPV 近 100%、PPV 僅約 12.5%，Jeffery 2012），且非所有確診 FIP 都 < 0.4
- Rivalta test：敏感度 ~91%、特異度僅約 66%（NPV ~93%、PPV ~58%，Fischer 2012）——陰性有助排除，陽性不能單獨確診（淋巴瘤、細菌性積液常偽陽）。確診依現行 FIP 指引（積液 FCoV RT-qPCR、巨噬細胞免疫染色）；見 2022 AAFP/EveryCat 指引。

### 3-4 腦脊髓液（CSF）
| 參數 | 正常（依部位/物種） | 異常提示 |
|------|------|---------|
| TNCC | 犬 < 5、貓 < 8/μL | 升高＝pleocytosis（腦膜腦炎/腫瘤） |
| TP（microprotein） | cisternal < 25-30、lumbar < 45 mg/dL | 升高：發炎、腫瘤、出血 |
| 細胞型態 | 小淋巴球為主 | 嗜中性球↑=化膿性；單核/巨噬↑=肉芽腫/病毒；嗜酸↑=寄生蟲/原蟲 |

> Albuminocytologic dissociation＝蛋白升高但細胞正常（見於壓迫性/退化性病變）。務必依採樣部位選對蛋白參考值（cisternal < lumbar）。

### 3-5 關節液
- 正常：TNCC < 3,000/μL（多數健康犬更低，常 < 1,500；貓 < 1,000），高黏稠度、透明
- 發炎性（含 septic 與 IMPA）：TNCC 常 > 3,000-5,000/μL、以嗜中性球為主
- ⚠️ **septic 與免疫介導性多關節炎（IMPA）的 TNCC 大量重疊**（犬 IMPA 可達 ~3,700-170,000/μL，常超過 septic），**單靠 TNCC 無法區分**；犬貓 septic 關節嗜中性球**常為非退化性**、細胞內菌也常看不到。確診須培養＋尋找細胞內菌，且培養陰性（可達 50%）仍不能排除 septic。

## 四、常見陷阱 (Pitfalls)

- 只看外觀/顏色就分類，未測 TP 與 TNCC。
- 把傳統三分類當絕對切點，忽略重疊與框架已朝機制/蛋白導向取代。
- 高蛋白積液全歸感染，忘記 FIP 與腫瘤性滲出。
- 未同步採血，算不出 creatinine/K⁺/bilirubin/glucose 血-液比值。
- 乳糜誤用「積液 cholesterol < 血清 cholesterol」，未算積液內 chol:TG 比值。
- Rivalta 陽性就當 FIP 確診（特異度僅約 66%）。
- 關節液單以 TNCC 或「退化嗜中性球」區分 septic vs IMPA。
- CSF 延遲處理（> 30-60 分）致細胞退化、TNCC 被低估。
- 血液污染使 TP/TNCC 假性偏高。

## 五、診斷效能 (Diagnostic Performance)

- 體液分類抓病因「方向」很好用，但確診常需影像、培養與其他檢查佐證。
- 關鍵驗證數據：Rivalta（FIP）Se ~91%/Sp ~66%（Fischer 2012）；血-液 glucose 差 > 20 mg/dL（septic peritonitis）犬 100%/100%、貓 86%/100%（Bonczynski 2003）；uroabdomen creatinine > 2:1（犬 Sp 100%/Se 86%）、K⁺ > 1.4:1（犬 100%/100%，Schmiedt 2001）；septic 積液細胞學對比培養 Se ~75%/Sp ~93%（Medardo 2024）。
- 多數單一指標「特異度高、敏感度中等」→ 陽性有意義、陰性不能排除，須組合判讀。

## 六、人醫借鑒 (Translational Insights)

| 人醫工具/概念 | 獸醫應用潛力 | 現況 |
|-------------|-------------|------|
| Light's criteria（TP、LDH 血-液比值） | 取代重疊大的傳統三分類、提升 exudate 判別 | 貓積液研究（Hazuchova 2023）顯示簡化 Light's + 急性期蛋白準確度優於傳統法 |
| 自動化體液分析（Sysmex body fluid mode） | 犬貓 TNCC/分類計數自動化、減少人工誤差 | 人醫常規；獸醫初步驗證犬貓體液適用 |
| 生物標記（procalcitonin、CRP、lactate/glucose 梯度） | 加速 septic vs 非 septic 積液鑑別 | 人醫已納入；獸醫驗證中（特異度仍待確立） |
| CSF neurofilament light chain（NfL） | CNS 疾病活動度/預後的非侵入標記 | 人醫熱門；獸醫犬 CSF 初步研究與嚴重度相關 |

## 七、臨床爭議與知識空缺 (Controversies & Knowledge Gaps)

| 爭議議題 | 現況 | Evidence Level |
|---------|------|---------------|
| 傳統三分類 vs 蛋白/機制導向 vs Light's criteria | 傳統 TNCC+TP 三分類重疊大、準確度僅約 48%（貓，Hazuchova 2023）；蛋白導向與簡化 Light's（~79-82%）漸成主流，但缺跨物種大型前瞻驗證 | Level II |
| Rivalta test 的定位 | 敏感度高、特異度僅約 66%（Fischer 2012），偽陽於淋巴瘤/細菌性積液；宜作排除用，確診靠 FCoV RT-qPCR/免疫染色 | Level II |
| Septic 積液 glucose/lactate 血-液梯度的可靠度 | 原始研究近完美（Bonczynski 2003）但樣本小、POC 儀器敏感度僅約 41%（Koenig 2015），非感染狀況亦可出現梯度 | Level III |
| 關節液區分 septic vs IMPA | TNCC 與細胞型態大量重疊、培養敏感度有限（陰性率可達 50%），缺可靠單一鑑別指標 | Level III |

## 八、近期實證更新 (Recent Updates)

- **分類框架轉向（Hazuchova 2023, Animals）**：貓體腔積液以「簡化 Light's criteria（積液:血清 TP、LDH 比值）＋急性期蛋白」判病因，準確度約 79-82%，顯著優於傳統三分類（約 48%）；「modified transudate」一詞漸被「high-protein transudate」取代，Stockham & Scott 第 3 版改採 protein-poor/protein-rich 命名。
- **Rivalta 定位再校準（Fischer 2012；2022 AAFP/EveryCat FIP 指引）**：Rivalta 特異度被舊教材（曾稱可達 98%）高估，一手大型研究僅約 66%；現行 FIP 診斷以積液 A:G、細胞學搭配 FCoV RT-qPCR 與巨噬細胞免疫染色為主，Rivalta 僅作篩檢/排除輔助。
- **Septic 積液診斷多模式化（Medardo 2024, Animals）**：以細菌培養為金標準，細胞學（找細胞內菌）敏感度約 75%、特異度約 93%；退化嗜中性球為支持性、非必要；建議細胞學＋培養＋生化（血-液 glucose/lactate 梯度）併用。`,
  clinical_pearl: '判斷腹水是不是 uroabdomen，腹水 creatinine 跟血清 creatinine 比值 > 2:1 最可靠（犬特異度 100%，Schmiedt 2001）。但膀胱剛破時腹水還沒平衡，早期比值可能還沒拉到 2，臨床高度懷疑就隔 1-2 小時再抽一次。另一個常被誤用的是 Rivalta test：它對貓 FIP 敏感度高（~91%）、特異度卻只有約 66%（Fischer 2012），所以「陰性」有助排除、但「陽性」不能單獨確診（淋巴瘤、細菌性積液都會偽陽），仍需 A:G、細胞學與 FCoV RT-qPCR 佐證。',
  common_mistakes: [
    '光看顏色就分類體液，沒測 TP 跟 TNCC',
    '把傳統三分類當絕對切點——各類別重疊大，且框架已朝蛋白/機制導向與 Light\'s criteria 演進',
    '高蛋白體液全歸感染，忘記 FIP 跟腫瘤性滲出',
    '乳糜判斷用「積液 cholesterol < 血清 cholesterol」（無效），正確是積液內 cholesterol:triglyceride 比值 < 1',
    'Rivalta 陽性就當 FIP 確診（特異度僅約 66%，須併 A:G/細胞學/FCoV RT-qPCR）',
    '關節液只憑 TNCC 或「退化嗜中性球」區分 septic 與 IMPA（大量重疊，須培養＋找細胞內菌）',
    'CSF 採完沒馬上處理（超過 30-60 分鐘細胞退化），TNCC 被低估',
  ],
  disease_data: null,
  diagnostic_data: {
    indication: ['體腔積液評估', '關節積液鑑別', 'CSF 分析（神經症狀）', 'FIP 疑似', '腹腔創傷評估（uroabdomen/bile peritonitis）'],
    contraindication: ['CSF 採集禁忌：顱內壓升高、枕骨大孔疝脫風險', '嚴重凝血障礙時體腔穿刺需謹慎'],
    technique: '體腔穿刺（thoracocentesis/abdominocentesis）採集體液。分裝：EDTA 管（細胞學）+ 無添加劑管（化學分析）+ 培養瓶（如疑感染）。CSF 經枕骨大孔或腰椎穿刺採集 0.5-1 mL。所有體液需 30 分鐘內處理分析。',
    normal_findings: [
      { finding: '正常腹膜液', description: '少量、TP < 2.5 g/dL、TNCC < 1,500/μL（部分教材採 < 1,000）', significance: '無明顯積液' },
      { finding: '正常 CSF', description: 'TNCC 犬 < 5、貓 < 8/μL；TP cisternal < 25-30、lumbar < 45 mg/dL；透明無色', significance: '無中樞神經發炎（依採樣部位/物種選參考值）' },
      { finding: '正常關節液', description: 'TNCC < 3,000/μL（多數健康犬更低，常 < 1,500）、高黏稠度、透明', significance: '無關節發炎' },
    ],
    abnormal_findings: [
      { finding: 'Septic effusion', description: '嗜中性球內見細胞內細菌（definitive）；退化性嗜中性球為支持性非必要；培養為金標準', significance: '細菌感染，需緊急引流與抗生素；細胞學未見菌不能排除（Se ~75%）' },
      { finding: 'FIP effusion', description: '高蛋白（>3.5 g/dL 球蛋白為主）+ 低細胞數（膿性肉芽腫）+ A:G < 0.4', significance: '支持 FIP；A:G 長於排除（<0.4 提示、>0.8 幾乎排除），確診靠 FCoV RT-qPCR/免疫染色' },
      { finding: 'Chylous effusion', description: '乳白色 + 積液 TG > 血清 TG + 積液內 chol:TG 比值 < 1', significance: '乳糜胸/腹，需查原因（心病、腫瘤、特發性）' },
      { finding: 'CSF pleocytosis', description: 'TNCC 犬 > 5、貓 > 8/μL', significance: '中樞神經發炎，須鑑別感染性 vs 免疫介導' },
    ],
    interpretation_guide: '看體液順序：先外觀（顏色、透明度、黏稠度）。測 TP 跟 TNCC 分類。細胞學看細胞型態。必要時做化學比較（creatinine、bilirubin、triglyceride ratio）。最後對臨床。',
    pitfalls: [
      '採樣時血液汙染，TP 跟 TNCC 都假性偏高',
      'CSF 延遲處理（>30-60 分），細胞退化、TNCC 被低估',
      '沒同時抽血做化學比較，算不出 creatinine/K⁺/bilirubin/glucose 血-液比值',
      '把傳統三分類當絕對切點；乳糜誤用「積液 vs 血清 cholesterol」而非積液內 chol:TG < 1',
      'Rivalta 陽性當 FIP 確診（特異度僅約 66%）；關節液單憑 TNCC 分 septic vs IMPA',
    ],
    sensitivity_specificity: '各指標多為「特異度高、敏感度中等」→ 陽性有意義、陰性不能排除。關鍵數據：Rivalta（FIP）Se ~91%/Sp ~66%（Fischer 2012）；血-液 glucose 差 >20 mg/dL（septic peritonitis）犬 100%/100%、貓 86%/100%（Bonczynski 2003）；uroabdomen creatinine >2:1（犬 Sp100%/Se86%）、K⁺ >1.4:1（犬 100%/100%，Schmiedt 2001）；septic 積液細胞學 vs 培養 Se ~75%/Sp ~93%（Medardo 2024）。',
    cost_benefit: '採樣簡單、分析便宜。體腔積液病人第一線必做，CP 值極高。',
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
    { type: 'textbook', citation: 'Stockham SL, Scott MA. Fundamentals of Veterinary Clinical Pathology, 2nd ed. Ames, IA: Blackwell; 2008.', relevance: '體液分析與體腔積液分類核心教材' },
    { type: 'textbook', citation: 'Cowell RL, Valenciano AC, eds. Diagnostic Cytology and Hematology of the Dog and Cat, 4th ed. St. Louis: Elsevier; 2014.', relevance: '體液細胞學判讀參考教材' },
    { type: 'journal', citation: 'Dempsey SM, Ewing PJ. A review of the pathophysiology, classification, and analysis of canine and feline cavitary effusions. J Am Anim Hosp Assoc. 2011;47(1):1-11. doi:10.5326/jaaha-ms-5558.', relevance: '體腔積液病理生理與傳統分類回顧（含重疊限制）' },
    { type: 'journal', citation: 'Hazuchova K, Held S, Klemm I, Bauer N. Simplified Light\'s criteria and acute phase proteins reflect aetiology of feline body cavity effusions better than the traditional classification scheme. Animals (Basel). 2023;13(12):1918. doi:10.3390/ani13121918.', relevance: '簡化 Light\'s criteria 準確度優於傳統三分類（框架轉向，2023 近期）' },
    { type: 'journal', citation: 'Fischer Y, Sauter-Louis C, Hartmann K. Diagnostic accuracy of the Rivalta test for feline infectious peritonitis. Vet Clin Pathol. 2012;41(4):558-567. doi:10.1111/j.1939-165x.2012.00464.x.', relevance: 'Rivalta test 對貓 FIP 的敏感度/特異度原始數據（Se91%/Sp66%）' },
    { type: 'journal', citation: 'Jeffery U, Deitz K, Hostetter S. Positive predictive value of albumin:globulin ratio for feline infectious peritonitis in a mid-western referral hospital population. J Feline Med Surg. 2012;14(12):903-905. doi:10.1177/1098612x12454862.', relevance: '積液 A:G ratio 對 FIP 的預測值（PPV~12.5%、NPV~100%），強於排除' },
    { type: 'guideline', citation: 'Thayer V, Gogolski S, Felten S, et al. 2022 AAFP/EveryCat Feline Infectious Peritonitis Diagnosis Guidelines. J Feline Med Surg. 2022;24(9):905-933. doi:10.1177/1098612x221118761.', relevance: '2022 FIP 診斷指引（積液 A:G、Rivalta 定位、確診檢測；近期權威）' },
    { type: 'journal', citation: 'Fossum TW, Jacobs RM, Birchard SJ. Evaluation of cholesterol and triglyceride concentrations in differentiating chylous and nonchylous pleural effusions in dogs and cats. J Am Vet Med Assoc. 1986;188(1):49-51. doi:10.2460/javma.1986.188.01.49.', relevance: '乳糜積液 cholesterol:triglyceride 比值 < 1 判準原始文獻' },
    { type: 'journal', citation: 'Schmiedt C, Tobias KM, Otto CM. Evaluation of abdominal fluid: peripheral blood creatinine and potassium ratios for diagnosis of uroperitoneum in dogs. J Vet Emerg Crit Care. 2001;11(4):275-280. doi:10.1111/j.1476-4431.2001.tb00066.x.', relevance: 'Uroabdomen 腹水:血清 creatinine/K⁺ 比值診斷閾值（犬）' },
    { type: 'journal', citation: 'Aumann M, Worth LT, Drobatz KJ. Uroperitoneum in cats: 26 cases (1986-1995). J Am Anim Hosp Assoc. 1998;34(4):315-324. doi:10.5326/15473317-34-4-315.', relevance: '貓尿腹病例系列（貓「1.9」平均比值來源，非驗證切點）' },
    { type: 'journal', citation: 'Bonczynski JJ, Ludwig LL, Barton LJ, Loar A, Peterson ME. Comparison of peritoneal fluid and peripheral blood pH, bicarbonate, glucose, and lactate concentration as a diagnostic tool for septic peritonitis in dogs and cats. Vet Surg. 2003;32(2):161-166. doi:10.1053/jvet.2003.50005.', relevance: '血-腹水 glucose/lactate 差診斷 septic peritonitis 關鍵研究' },
    { type: 'journal', citation: 'Koenig A, Verlander LL. Usefulness of whole blood, plasma, peritoneal fluid, and peritoneal fluid supernatant glucose concentrations obtained by a veterinary point-of-care glucometer to identify septic peritonitis in dogs with peritoneal effusion. J Am Vet Med Assoc. 2015;247(9):1027-1032. doi:10.2460/javma.247.9.1027.', relevance: 'POC 血糖儀測血-腹水 glucose 差辨識 septic peritonitis 敏感度較低（~41%）' },
    { type: 'journal', citation: 'Medardo M, Capozza P, Bertazzolo W, et al. Diagnosis of septic body cavity effusion in dogs and cats: cytology vs. bacterial culture. Animals (Basel). 2024;14(12):1762. doi:10.3390/ani14121762.', relevance: 'Septic 積液細胞學 vs 培養（培養金標準；細胞學 Se~75%/Sp~93%，2024 近期）' },
  ],
  is_current: true,
  created_at: now,
};

/** 骨髓抹片判讀，診斷型 */
const contentBoneMarrow: NodeContent = {
  id: 'CONTENT-CPATH-L4-007',
  node_id: 'CPATH-L4-007',
  version: 2,
  summary: '骨髓抹片在看造血的質跟量。非再生性貧血、持續性血球減少、白血病、MDS 都靠這個確診。aspiration smear 跟 core biopsy 要一起看，不能只挑一個。',
  learning_objectives: [
    '列舉骨髓採樣的適應症與常用採樣部位',
    '描述正常骨髓的細胞比例（M:E ratio）與成熟序列',
    '判讀骨髓 M:E ratio 異常的臨床意義',
    '辨識白血病與骨髓增生異常的骨髓特徵',
    '整合周邊血液與骨髓結果做綜合評估',
  ],
  key_points: [
    '採樣時機：非再生性貧血或血球減少、疑似白血病、不明發熱加血球異常',
    '犬貓採樣部位：肱骨近端、髂骨翼、股骨粗隆',
    '正常 M:E ratio：犬 0.75-2.5:1、貓 1.0-3.0:1（教材值；資料驅動之犬區間較寬 0.45-2.87，Mischke 2002）——須結合 cellularity 與 CBC 判讀',
    'M:E ↑（約 >3:1）：骨髓系增生（感染、CML）或紅血球系減少/再生不良（PRCA）',
    'M:E ↓（約 <0.75:1）：紅血球系增生（再生性貧血代償）或骨髓系減少',
    '巨核細胞為半定量：正常約每 spicule/顆粒 2-7 個（squash 每低倍視野 2-4 個），>5/顆粒提示增生；精確定量以 core biopsy 為準',
    'Blast ≥ 20% 為急性白血病現行閾值（2016 WHO；舊 FAB/Jain 1991 為 ≥30%）；分母一般為有核細胞(ANC)，紅系 ≥50% 時改以非紅系細胞(NEC)計',
    '⚠️ 物種差異：正常貓骨髓「幾乎無」可染儲存鐵（Prussian blue），故貓不能用骨髓鐵判斷缺鐵（見鐵反可排除缺鐵）；正常犬骨髓有可見儲存鐵',
    'Aspiration 看細胞形態，core biopsy 看 architecture 跟細胞量，要一起做',
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
- 肱骨近端（proximal humerus）：犬最常用，大型犬尤其方便
- 髂骨翼（iliac crest）：犬貓均可，貓最常用
- 股骨粗隆（trochanteric fossa）：替代部位

### 抹片類型
1. Aspiration smear：評估細胞形態、M:E ratio、成熟序列
2. Core biopsy：評估整體細胞量、纖維化、architecture
3. Particle crush prep：骨髓顆粒壓片，兼具兩者優點

### 鐵質評估
- Prussian blue（Perls）染色評估儲存鐵（含鐵巨噬細胞的 hemosiderin）
- 缺鐵：儲存鐵消失 + 小球性低色素性貧血
- 慢性疾病貧血（ACD）：鐵被 hepcidin/apoferritin 扣留於巨噬細胞 → 骨髓儲存鐵正常或增加、血清鐵下降（紅血球多為正球正色）
- ⚠️ **物種差異**：正常「貓」骨髓通常**無**可染儲存鐵（Perls 陰性；反應偵測不到 ferritin，可能為貓骨髓主要儲鐵形式），故**貓不能以骨髓鐵判斷缺鐵**（在貓見到骨髓鐵反而異常、可用來「排除」缺鐵）；正常「犬」骨髓則有可見儲存鐵，其消失為缺鐵的有效指標。

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
- Blast ≥ 20% → 急性白血病（2016 WHO 現行閾值；舊 FAB/Jain 1991 為 ≥30%）。**分母**：一般 AML 以「所有有核細胞（ANC）」計，惟紅系前驅 ≥50% 時改以「非紅系細胞（NEC）」計（用以區分 M6 紅血球白血病）
- dysplasia（≥10% 某系細胞）、異常顆粒、雙核、環形鐵母細胞（Perls 下每顆 ≥5 鐵顆粒且環繞 ≥1/3 核周） → 骨髓增生異常症候群（MDS，blast <20%）
- 轉移性腫瘤細胞：成團的非造血細胞
- 漿細胞增多（>20% 有核細胞）→ 疑多發性骨髓瘤（診斷需四取二，見近期更新；**高鈣血症非診斷準則、屬伴隨/預後表現**）

## 三、常見陷阱 (Pitfalls)

- **血液稀釋（hemodilution）**：見到骨髓後仍持續抽 → 周邊血混入 → cellularity 被低估、M:E ratio 偏向周邊血而失真。一見紅色物質即釋放負壓、抽 0.5-1.0 mL 已足夠。
- **Dry tap（抽不到骨髓液）**：可能為骨髓纖維化、packed marrow（極度增生）或技術問題 → **core biopsy 更不能省**。
- **只做 aspiration 不做 core biopsy**：漏掉纖維化、architecture 異常與局灶性腫瘤浸潤。
- **未做鐵染色**：犬缺鐵性貧血漏診；且**勿在貓以骨髓鐵判斷缺鐵**（正常貓本就無可染鐵）。
- **未評估巨核細胞數量/形態**：ITP 的骨髓代償或白血病浸潤會被漏掉。
- **採樣時機過早**：急性失血/溶血 <3-5 天可能為「假性非再生（preregenerative）」；宜待貧血持續且約 5-7 天仍無網狀紅血球增生、確認為真正非再生後再採。
- **未先做周邊血 CBC＋抹片**：骨髓判讀必須有同步周邊血作為比較基準。

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
| 骨髓 core biopsy vs aspiration 的相對必要性 | 部分學者認為 aspiration 品質佳時可免 core biopsy，但 core 對纖維化和 architecture 評估不可替代 | Level III |

## 六、近期實證更新 (Recent Updates)

- **急性白血病 blast 閾值統一為 ≥20%（沿用 2016 WHO）**：獸醫已由舊 FAB/Jain 1991 的 ≥30% 修訂為 ≥20% 以區分 AML 與 MDS；分母一般為有核細胞（ANC），惟紅系前驅 ≥50% 時改以非紅系細胞（NEC）計（區分 M6）。犬 MDS/AML 標準化評估與預後研究（Meredith 2024/2025, Vet Pathol）採 dysplasia ≥10%、blast <20%（MDS）vs ≥20%（AML）。
- **流式細胞術＋分子分型（Harris 2022, Vet Comp Oncol）**：以數位 RNA 計數建立 CD34+ 犬急性白血病亞型的流式診斷準則，補足單靠形態學難以區分 AML/ALL lineage 的限制；犬白血病 flow cytometry 已有商業服務。
- **參考區間資料化**：資料驅動之犬骨髓 M:E 參考區間（Mischke & Busse 2002）較傳統教材寬（0.45-2.87），且取樣部位會影響 M:E（Gal 2018）——比值須結合 cellularity 與 CBC 判讀、勿死守單一切點。
- **多發性骨髓瘤診斷準則**：犬需四取二——骨髓漿細胞 >20%（早期 Matus 1986 採 >5%）、單株 γ球蛋白病、骨溶解病灶、Bence-Jones（輕鏈）蛋白尿；高鈣血症為伴隨/預後表現而非診斷準則。貓閾值 ≥20%（有異型漿細胞時放寬至 ≥10%，Patel 2005）。`,
  clinical_pearl: '骨髓 aspiration 最大的坑是血液稀釋——關鍵不是固定容量，而是「一見到骨髓（紅色物質）進入針筒就釋放負壓、不要繼續抽」。一般抽到 0.5-1.0 mL 已足夠，抽過量（持續抽、遠超 1-2 mL）才會嚴重稀釋使 M:E ratio 不可信。若是 dry tap 抽不到，core biopsy 就更不能省。另一個常被忽略的重點：**貓的骨髓正常就「沒有」可染儲存鐵，所以貓不能用骨髓鐵判斷缺鐵**（在貓見到骨髓鐵反而異常）。',
  common_mistakes: [
    '骨髓抽過量（見到骨髓後仍持續抽），嚴重血液稀釋使 M:E ratio 不能信（一般 0.5-1.0 mL 已足夠）',
    '只做 aspiration 不做 core biopsy，骨髓纖維化或腫瘤浸潤漏掉',
    '採骨髓前沒先做周邊血 CBC 跟抹片，沒有比較基準',
    '巨核細胞數量跟形態沒評估，ITP 骨髓代償或白血病浸潤就漏了',
    '急性貧血過早採骨髓（<3-5 天可能為 preregenerative 假性非再生；宜待 ~5-7 天確認真正非再生）',
    '在貓以「骨髓無可染鐵」判斷缺鐵（正常貓本就無可染儲存鐵，此判讀無效）',
  ],
  disease_data: null,
  diagnostic_data: {
    indication: ['非再生性血球減少症', '疑似白血病', '不明原因全血球減少（pancytopenia）', '多發性骨髓瘤疑似', '不明原因發熱合併血球異常', '鐵質狀態評估'],
    contraindication: ['嚴重凝血障礙（相對禁忌，需先矯正）', '採樣部位感染'],
    technique: '在鎮靜或全身麻醉下，使用 Illinois 或 Jamshidi 骨髓穿刺針。先做 aspiration（快速抽吸 0.5-1.0 mL，一見骨髓即釋放負壓以減少稀釋），立即製作 squash prep 抹片。再用 Jamshidi 針取 core biopsy（≥ 1 cm）。Aspiration 以 Wright-Giemsa 染色，core biopsy 以 H&E 染色，鐵質以 Prussian blue（貓正常無可染鐵）。',
    normal_findings: [
      { finding: 'Cellularity', description: '成年犬 25-75%（與年齡呈反比，中年概估~50%）', significance: '骨髓造血活性指標' },
      { finding: 'M:E ratio', description: '犬 0.75-2.5:1，貓 1.0-3.0:1（資料驅動犬區間較寬 0.45-2.87）', significance: '骨髓系與紅血球系相對比例，須結合 CBC' },
      { finding: '巨核細胞', description: '約 2-7 個/spicule（squash 每低倍視野 2-4 個），半定量', significance: '血小板生成能力' },
      { finding: '儲存鐵', description: '正常犬 Prussian blue 可見含鐵巨噬細胞；⚠️ 正常貓幾乎無可染鐵', significance: '鐵質儲備狀態（貓不適用骨髓鐵評估缺鐵）' },
    ],
    abnormal_findings: [
      { finding: 'Blast ≥ 20%', description: '大量幼稚細胞，核仁明顯（分母 ANC；紅系≥50% 時改 NEC）', significance: '急性白血病（AML 或 ALL）；2016 WHO 閾值（舊 FAB 為 ≥30%）' },
      { finding: 'Maturation arrest', description: '某成熟階段後細胞驟減', significance: '白血病前期、藥物毒性、感染（如 Parvovirus）' },
      { finding: 'Hypocellular marrow', description: '細胞量 < 25%', significance: '再生不良性貧血、骨髓毒性（化療、Ehrlichia）' },
      { finding: '骨髓纖維化', description: 'Core biopsy 見大量膠原纖維', significance: '骨髓纖維化症、繼發於腫瘤浸潤' },
    ],
    interpretation_guide: '看骨髓的順序：先確認樣本品質（顆粒夠、沒被稀釋過頭）。低倍看 cellularity 跟巨核細胞。算 M:E ratio。高倍看各系列成熟序列。找異常細胞（blast、轉移瘤）。最後對周邊血結果。',
    pitfalls: [
      '血液稀釋讓細胞量被低估，M:E ratio 偏向周邊血（見骨髓即釋放負壓、抽 0.5-1.0 mL）',
      'Dry tap 抽不到骨髓液，可能是骨髓纖維化或 packed marrow',
      '沒做鐵染色，犬缺鐵性貧血漏掉；且勿在貓以骨髓鐵判斷缺鐵（正常貓無可染鐵）',
      '只看 aspiration 不看 core biopsy 的 architecture',
      '急性貧血過早採樣（preregenerative 假性非再生，宜待 ~5-7 天確認）',
    ],
    sensitivity_specificity: '骨髓是造血系統疾病的金標準。急性白血病確診率很高（blast > 20%）。MDS 早期看判讀者經驗。',
    cost_benefit: '要鎮靜或麻醉，侵入性中等，成本中高。但非再生性血球減少跟白血病的確診沒得替代。',
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
    { type: 'textbook', citation: 'Brooks MB, Harr KE, Seelig DM, Wardrop KJ, Weiss DJ, eds. Schalm\'s Veterinary Hematology, 7th ed. Hoboken, NJ: Wiley-Blackwell; 2022.', relevance: '骨髓判讀權威參考教材（現行 7 版）' },
    { type: 'textbook', citation: 'Harvey JW. Veterinary Hematology: A Diagnostic Guide and Color Atlas. St. Louis: Elsevier; 2012.', relevance: '骨髓細胞形態辨識圖譜（含犬貓骨髓鐵物種差異）' },
    { type: 'journal', citation: 'Raskin RE, Messick JB. Bone marrow cytologic and histologic biopsies: indications, technique, and evaluation. Vet Clin North Am Small Anim Pract. 2012;42(1):23-42. doi:10.1016/j.cvsm.2011.10.001.', relevance: '骨髓採樣技術與判讀指引（巨核細胞/cellularity 參考）' },
    { type: 'journal', citation: 'Harris RA, Rout ED, Yoshimoto JA, et al. Using digital RNA counting to establish flow cytometry diagnostic criteria for subtypes of CD34+ canine acute leukaemia. Vet Comp Oncol. 2022;20(3):710-719. doi:10.1111/vco.12825.', relevance: '犬急性白血病流式＋分子分型（近期；補足形態學 lineage 限制）' },
    { type: 'guideline', citation: 'Garden OA, Kidd L, Mexas AM, et al. ACVIM consensus statement on the diagnosis of immune-mediated hemolytic anemia in dogs and cats. J Vet Intern Med. 2019;33(2):313-334. doi:10.1111/jvim.15441.', relevance: 'ACVIM 診斷共識，骨髓評估在免疫介導血球減少的角色' },
  ],
  is_current: true,
  created_at: now,
};

/** 血液分型與交叉試驗，診斷型 */
const contentBloodTyping: NodeContent = {
  id: 'CONTENT-CPATH-L4-008',
  node_id: 'CPATH-L4-008',
  version: 2,
  summary: '輸血前不做血型跟交叉試驗會死貓。犬有 DEA 系統、貓有 AB 系統。貓有天然抗體，第一次輸血不配對就可能急性溶血致死。',
  learning_objectives: [
    '說明犬 DEA 血型系統與臨床最重要的血型（DEA 1）',
    '描述貓 AB 血型系統及各血型的盛行率（含台灣數據）',
    '解釋為何貓首次輸血就必須血型配對',
    '描述主交叉試驗（major）與副交叉試驗（minor）的差異與意義',
    '列舉輸血反應的類型與處置',
  ],
  key_points: [
    '犬主要血型 DEA 1，分 DEA 1.1 陽性跟陰性',
    '犬幾乎沒有天然抗體，首次輸血不配對通常不會馬上溶血，但會致敏',
    '犬第二次輸血如果不配對，DEA 1.1 陰性的犬收到陽性血會急性溶血',
    '貓 AB 系統：A 型最多（台灣 > 90%）、B 型少見、AB 型極罕見',
    '貓 B 型有很強的天然抗 A 抗體，B 型貓收到 A 型血第一次就會致命性溶血',
    '貓 A 型有弱抗 B 抗體，A 型貓收到 B 型血可能有輕度反應',
    'Major crossmatch：受血者血清 + 供血者紅血球，模擬輸進去的反應',
    'Minor crossmatch：供血者血清 + 受血者紅血球，看供血者抗體風險',
  ],
  body: `# 血液分型與交叉試驗 (Blood Typing & Crossmatch)

## 一、檢查原理與適應症 (Principles & Indications)



### 犬血型系統
### DEA（Dog Erythrocyte Antigen）
- DEA 1.1：最重要，決定輸血相容性
  - DEA 1.1(+)：犬可接受 1.1(+) 或 1.1(-) 血液
  - DEA 1.1(-)：犬僅能安全接受 1.1(-) 血液（理想通用供血者）
- DEA 4：> 98% 犬為陽性，臨床罕需考慮
- DEA 7：約 40-50% 犬為陽性

### 犬輸血原則
- 首次輸血：DEA 1.1 配對為佳，但急診可先不配對（因無天然抗體）
- 第二次以後輸血：必須血型配對 + 交叉試驗

### 貓血型系統
### AB 系統
| 血型 | 台灣盛行率 | 天然抗體 | 臨床意義 |
|------|-----------|---------|---------|
| A | > 90% | 弱抗 B | 接受 B 型血可能輕度反應 |
| B | 3-8% | 強抗 A | 接受 A 型血 → 致命性急性溶血 |
| AB | < 1% | 無 | 可接受 A 或 B 型（理想受血者） |

### 貓輸血原則
- 貓每次輸血都必須血型配對（包括首次）
- B 型貓接受 A 型血的致死率極高
- 新生兒同種免疫溶血（neonatal isoerythrolysis, NI）：B 型母貓 × A 型公貓

### 交叉試驗
### Major crossmatch（主交叉）
受血者血清 + 供血者紅血球 → 37°C 孵育 15-30 分鐘 → 觀察凝集/溶血

### Minor crossmatch（副交叉）
供血者血清 + 受血者紅血球

### 判讀
- 相容：無凝集、無溶血
- 不相容：可見凝集或溶血 → 不可輸血
- 自體對照（patient serum + patient RBC）排除 autoagglutination

### 輸血反應分類
| 類型 | 時間 | 症狀 |
|------|------|------|
| 急性溶血反應 | 數分鐘-數小時 | 發燒、嘔吐、震顫、血紅素尿、休克 |
| 延遲性溶血反應 | 3-14 天 | PCV 緩慢下降、bilirubinemia |
| 發熱性非溶血反應 | 輸血中 | 發燒、顫抖 |
| 過敏反應 | 輸血中 | 蕁麻疹、血管性水腫、過敏性休克 |

## 二、判讀要點 (Interpretation)

| 情境 | 判斷要點 | 臨床意義 |
|------|---------|---------|
| Major crossmatch 陽性（凝集 / 溶血） | 受血者血清含對抗供血者 RBC 的抗體 | 禁止此次輸血，須另選相容供血者 |
| Minor crossmatch 陽性 | 供血者血清含對抗受血者 RBC 的抗體（少見） | 濃縮紅血球可謹慎使用（去除血漿）；全血輸注風險較高 |
| 卡式試驗（card agglutination）弱凝集（1+） | 初步相容但有弱致敏風險 | 首次輸血可繼續，注意監測；第二次輸血前再確認強凝集是否出現 |
| 貓 AB 型 → 直接輸注 B 型血 | 天然抗 A 抗體極強，即使 major crossmatch 前也會在試管內溶血 | 貓血型絕對不可錯配；B 型貓接受 A 型血幾分鐘內可致命性溶血 |
| 犬首次輸血 major crossmatch 陰性 | 通常為真陰性（犬幾乎無天然抗體），可輸注 | 致敏後（4–14 天）再輸血須重新 crossmatch，否則急性溶血 |

### USG（比重）判讀整合

輸血前確認受血者腎功能狀態可協助選擇血品種類：
- BUN/Cr 正常 → 全血或 pRBC 均可
- CKD 患者 → 優先使用 pRBC，避免額外液體負荷
- 低蛋白血症（白蛋白 < 2 g/dL）→ 新鮮冷凍血漿（FFP）優先或 pRBC + 膠體

## 三、常見陷阱 (Pitfalls)

1. **跳過交叉試驗「因為首次輸血」**：犬首次輸血雖天然抗體少，仍應盡量做 crossmatch——部分非 DEA 1 抗原（如 DEA 3、Dal）即使首次接觸也可在免疫致敏個體引發延遲性溶血。
2. **混淆血型卡（血型鑑定）與交叉試驗（配血試驗）**：血型卡只告訴你 DEA 1.1 陽/陰性；crossmatch 才能偵測其他抗原系統的相容性——兩者目的不同，不可互相取代。
3. **貓忽略 Mik 血型**：2007 年起確認的 Mik 抗原，A 型貓之間配對仍可能急性溶血；台灣 Mik 盛行率不明，建議所有貓輸血前均完成 major crossmatch，不論 AB 血型是否相符。
4. **輸血反應觀察窗口太短**：溶血性輸血反應可在輸注後 4–14 天出現（延遲型）；若犬在輸血後 1–2 週出現貧血、發燒、血色素尿，應懷疑延遲性溶血，而非僅評估輸注當下。
5. **儲存損傷（storage lesion）忽略**：犬全血冷藏超過 3–4 天，2,3-DPG 下降，氧釋放能力降低；緊急失血優先使用最新鮮血液，術後穩定患者可接受較舊血品。

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
| 貓 Mik 血型抗原的臨床意義 | 2007 年發現的新抗原，A 型配對仍可能發生急性溶血反應，台灣盛行率未知 | Level IV |

## 六、近期實證更新 (Recent Evidence Updates)

1. **交叉試驗推薦擴大**：因 Mik 等非主要抗原，建議所有貓及曾輸血（致敏）犬輸血前均做 major crossmatch，即使 AB/DEA 相符。
2. **輸血反應標準化（AVHTM TRACS 2021）**：統一犬貓輸血反應定義、預防與監測（兩部分共識），利於通報與處置。
3. **Gel column／分子分型**：gel column 技術提升交叉試驗客觀性；部分 DEA 已可 PCR 基因分型，減少血清學限制。
4. **血品安全**：捐血者病原篩檢（ACVIM Wardrop 2016）+ 病原減滅技術（研究中）提升輸血安全。
> 血型鑑定（尤其貓）為輸血前強制項目；交叉試驗與血品選擇由獸醫依個案與現行共識執行。`,
  clinical_pearl: '貓 B 型在台灣盛行率只有 3-8%，但 B 型貓體內天然抗 A 抗體很強。首次輸血、B 型貓收到 A 型血，幾分鐘內就會致命性溶血。所以貓的血型檢測不是選配，是輸血前的強制項目。',
  common_mistakes: [
    '以為貓首次輸血可以不配對，貓 B 型的天然抗體第一次就會殺貓',
    '只做 major crossmatch，沒做 minor',
    '犬第一次輸血沒記錄血型，第二次無法回溯',
    '沒想到新生兒同種免疫溶血（NI）：B 型母貓初乳對 A 型仔貓的風險',
    '交叉試驗沒做自體對照，把自身凝集誤當不相容',
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
    interpretation_guide: '輸血前流程：先血型鑑定，再交叉試驗。Major 不相容就換供血者。Minor 不相容要評估風險，必要時換。每次都記錄結果。',
    pitfalls: [
      '嚴重自體凝集或重度貧血的樣本，血型卡判讀困難',
      '交叉試驗測不到低力價抗體，相容不代表 100% 不反應',
      '犬第一次輸血的交叉試驗可能假陰性（還沒致敏）',
      '冷凝集素在室溫下造成假陽性，要 37°C 重測',
    ],
    sensitivity_specificity: '快篩卡對犬 DEA 1.1 跟貓 AB 型準確度 > 95%。交叉試驗抓臨床明顯的抗體沒問題，低力價可能漏。',
    cost_benefit: '血型快篩便宜、5 分鐘就出來。交叉試驗 30-45 分鐘但能避免致命輸血反應。貓的話，這是強制檢查。',
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
    { type: 'textbook', citation: 'Wardrop KJ. Clinical Blood Typing and Crossmatching. In: Weiss DJ, Wardrop KJ, eds. Schalm\'s Veterinary Hematology, 6th ed. Wiley-Blackwell, 2010:1101-1105.', relevance: '血液分型與交叉試驗參考教材' },
    { type: 'guideline', citation: 'Odunayo A, Nash KJ, Davidow EB, et al. Association of Veterinary Hematology and Transfusion Medicine (AVHTM) transfusion reaction small animal consensus statement (TRACS) part 1: definitions and clinical signs. J Vet Emerg Crit Care. 2021;31(2):189-203. doi:10.1111/vec.13043.', relevance: 'AVHTM 輸血反應共識（定義與臨床徵象）' },
    { type: 'guideline', citation: 'Davidow EB, et al. Association of Veterinary Hematology and Transfusion Medicine (AVHTM) transfusion reaction small animal consensus statement (TRACS) part 2: prevention and monitoring. J Vet Emerg Crit Care. 2021;31(2). doi:10.1111/vec.13044.', relevance: 'AVHTM 輸血反應共識（預防與監測）' },
    { type: 'guideline', citation: 'Wardrop KJ, Birkenheuer A, Blais MC, et al. Update on canine and feline blood donor screening for blood-borne pathogens. J Vet Intern Med. 2016;30(1):15-35. doi:10.1111/jvim.13823.', relevance: 'ACVIM 犬貓捐血者病原篩檢共識' },
    { type: 'journal', citation: 'Proverbio D, Spada E, Perego R, et al. Assessment of a gel column technique for feline blood typing. Vet Res Commun. 2009;33(Suppl 1):201-203. doi:10.1007/s11259-009-9275-7.', relevance: '貓血型鑑定 gel column 技術' },
  ],
  is_current: true,
  created_at: now,
};

/** 尿液分析完整判讀，診斷型 */
const contentUrinalysis: NodeContent = {
  id: 'CONTENT-CPATH-L4-009',
  node_id: 'CPATH-L4-009',
  version: 2,
  summary: '完整尿液分析分三段：物理性狀、化學試紙、尿沉渣鏡檢。USG 評估腎臟濃縮能力，尿沉渣抓感染、結晶跟腎損傷。',
  learning_objectives: [
    '說明三種採尿方式（cystocentesis、catheterization、voided）的優缺點與適應症',
    '正確判讀 USG 在不同臨床情境下的意義',
    '解釋化學試紙各項目的犬貓特殊注意事項',
    '辨識尿沉渣中常見結晶、細胞與管型的意義',
    '整合尿液分析與血清生化結果評估腎功能',
  ],
  key_points: [
    'Cystocentesis 是尿液培養的金標準，避開下泌尿道汙染',
    'USG 正常濃縮範圍：犬 1.015-1.045、貓 1.035-1.060',
    'Isosthenuria（USG 1.008-1.012）就是腎臟完全失去濃縮能力',
    '犬尿液試紙的 WBC 酯酶不能用，犬嗜中性球本來就沒這個酵素',
    '貓尿蛋白試紙容易假陽性（鹼性尿），要用 UPC 確認',
    'UPC ≥ 0.5（犬）或 ≥ 0.4（貓）為異常蛋白尿；UPC 0.2-0.5（犬）為 borderline，須排除發炎/出血並確認持續性',
    '尿沉渣正常：< 5 WBC/HPF、< 5 RBC/HPF、沒細菌、少量上皮',
    'Struvite 在犬常伴 UTI，在貓多半是 idiopathic',
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
- 顏色：正常淡黃至琥珀色；紅色提示血尿/血紅素尿/肌紅蛋白尿
- 透明度：正常透明；混濁提示感染、結晶、細胞碎片

### 第二部分：化學試紙（Dipstick）
| 項目 | 犬貓注意事項 |
|------|-------------|
| pH | 犬正常 5.5-7.5；貓正常 6.0-7.0 |
| Protein | 貓鹼性尿易假陽性，需 UPC 確認 |
| Glucose | 正常陰性；陽性 = 血糖 > 腎糖閾（犬 ~180, 貓 ~280 mg/dL） |
| Bilirubin | 犬正常可有少量（1+），貓任何 bilirubin 皆異常 |
| WBC esterase | 犬不可靠（犬嗜中性球不含此酵素） |
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
- Hyaline cast：少量正常，大量提示輕度腎小管損傷
- Granular cast：腎小管細胞退化，提示急性腎損傷
- Waxy cast：慢性腎小管損傷
- Cellular cast：RBC/WBC cast 提示腎絲球/腎小管發炎

### USG 與腎功能整合
USG 需搭配水合狀態與 azotemia 判讀：
- Azotemia + USG > 1.030（犬）/ > 1.035（貓） → prerenal
- Azotemia + USG < 1.030（犬）/ < 1.035（貓） → renal（腎臟無法適當濃縮）

## 二、判讀要點 (Interpretation)

### USG 整合判讀矩陣

| 臨床情境 | USG | Azotemia？ | 解讀 |
|---------|-----|-----------|------|
| 正常水合犬 | > 1.030 | 否 | 正常腎濃縮功能 |
| 正常水合貓 | > 1.035 | 否 | 正常腎濃縮功能 |
| 任何物種 | 1.008–1.012（等張尿） | 否 | 中樞性/腎性尿崩症或高飲水需進一步區分 |
| 任何物種 | < 1.030（犬）/ < 1.035（貓） | **是** | **腎前性排除，腎性 azotemia 高度懷疑** |
| 任何物種 | > 1.030（犬） | **是** | **腎前性 azotemia**（腎功能保留，需補液） |

### 蛋白尿 UPC 判讀

- UPC < 0.2（犬）/ < 0.4（貓）：正常
- UPC 0.2–0.5（犬）：borderline；需排除 inflammation/hemorrhage 後方可診斷腎性蛋白尿
- UPC ≥ 0.5（犬）/ ≥ 0.4（貓）：異常蛋白尿；進一步分類為 pre-renal、renal（glomerular 或 tubular）、post-renal
- **腎絲球性蛋白尿**（glomerulonephropathy）：UPC 通常 > 2，純蛋白，沉渣清澈
- **腎小管性蛋白尿**：UPC 通常 < 1，低分子量蛋白，常伴 glucosuria 而血糖正常

### 尿沉渣細胞判讀

| 發現 | 正常上限 | 臨床意義 |
|------|---------|---------|
| WBC（HPF）| < 5 | > 5 = 尿道發炎；cystocentesis 採集更可靠 |
| RBC（HPF）| < 5 | > 5 = 血尿；需排除穿刺出血（含 Acanthocytes → 腎絲球出血）|
| 細菌 | 無 | cystocentesis 標本見桿菌/球菌 = 真性菌尿 |
| Granular cast | < 偶見 | > 2–4/LPF = 活動性腎小管損傷 |
| Waxy cast | 無 | 慢性腎病晚期改變 |

## 三、常見陷阱 (Pitfalls)

1. **voided 標本做培養/細胞學**：自然排尿會帶入下泌尿道、包皮或陰道細菌及細胞；文化敏感性與細胞學結果都會假陽性。細菌培養及細胞學必須使用 cystocentesis 標本。
2. **USG 不搭配水合狀態解讀**：脫水 + USG < 1.030（犬）才是腎性 azotemia 的金標準；在輸液大量後 USG 被稀釋，不能以此否定腎功能異常。
3. **glucosuria 先假設糖尿病**：犬貓腎小管性 glucosuria（如 Fanconi 症候群）血糖正常；貓壓力性高血糖可達 300 mg/dL，若不確定應查 fructosamine 確認真性糖尿病。
4. **忽略尿比重 1.008–1.012（等張尿）的意義**：等張尿不代表「稀釋尿」，而是腎臟對尿液既不濃縮也不稀釋，應高度懷疑腎病或 ADH 缺乏。
5. **蛋白尿 dipstick 偽陽性**：dipstick 對白蛋白敏感但對球蛋白不敏感，且鹼性尿（pH > 8）會假陽性；確診蛋白尿必須用 UPC，dipstick 僅用於篩檢。
6. **貓 Struvite 與犬 Struvite 成因不同**：犬 Struvite 幾乎都伴隨 UTI（尿素酶陽性菌），治療根本是抗生素；貓 Struvite 大多數是 idiopathic FIC，抗生素無效，飲食管理與壓力控制才是關鍵。

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
| 貓 USG 參考範圍在不同水合狀態下的解讀 | 正常貓 USG 可達 > 1.065，但 CKD 早期貓的 USG 「下降」定義（< 1.035）是否過於寬鬆仍有討論 | Level III |

## 六、近期實證更新 (Recent Evidence Updates)

1. **抗菌管理（ISCAID 2019）**：多數**亞臨床菌尿不需抗生素**治療；僅在有臨床症狀或特定高風險情境才治療，並以 cystocentesis 培養＋藥敏導向，避免抗藥性。
2. **蛋白尿評估（ACVIM 共識 Lees 2005 + IRIS）**：UPC 為定量金標準；應先確認「持續性」（間隔數週多次）再分類腎前／腎／腎後；borderline（犬 0.2-0.5）須排除發炎/出血。
3. **尿液生物標記**：尿 NGAL、KIM-1、cystatin B 對早期 AKI 偵測較 creatinine 敏感，研究進展中、尚未常規。
4. **自動化尿沉渣分析（iQ200/UF-5000）**：對 RBC/WBC 計數準確，**結晶辨識仍須人工覆核**。
> 尿液判讀與抗菌決策須由獸醫依採集方式、臨床情境與現行指引覆核。`,
  clinical_pearl: '犬尿液試紙的 leukocyte esterase 完全不能用，因為犬的嗜中性球沒這個酵素。很多人習慣看這格判斷 UTI，但正確做法是看尿沉渣的 WBC 計數。nitrite 也是一樣，犬貓都不可靠。',
  common_mistakes: [
    '用試紙的 leukocyte esterase 跟 nitrite 判斷 UTI，這兩格犬貓都不能用',
    '沒根據採尿方式調整判讀（voided 樣本少量細菌跟上皮細胞可能是汙染）',
    'USG 沒整合就把 azotemia 歸類',
    '看到少量 struvite 結晶就治療，正常尿液放久了也會出現',
    '用試紙蛋白質取代 UPC，貓尤其容易假陽性',
  ],
  disease_data: null,
  diagnostic_data: {
    indication: ['腎功能評估', '下泌尿道症狀（FLUTD/LUTD）', '多尿多飲（PU/PD）鑑別', '糖尿病監測', '尿路感染篩檢', '結石評估'],
    contraindication: ['Cystocentesis 禁忌：膀胱極度擴張合併阻塞（先解阻塞）、凝血異常（相對禁忌）'],
    technique: '建議 cystocentesis 採集（22G 針頭，超音波導引）。尿液分為：1. USG 測量（refractometer）。2. 化學試紙浸泡 60 秒。3. 離心（1500 rpm, 5 min）後取沉渣做顯微鏡檢。樣本應在 30 分鐘內分析，延遲會使結晶析出與細胞退化。',
    normal_findings: [
      { finding: 'USG', description: '犬 1.015-1.045，貓 1.035-1.060', significance: '反映腎臟濃縮能力' },
      { finding: '尿沉渣', description: '< 5 WBC/HPF, < 5 RBC/HPF, 無細菌', significance: '無發炎或感染' },
      { finding: 'UPC', description: '犬 < 0.5，貓 < 0.4', significance: '無臨床上明顯的蛋白尿' },
    ],
    abnormal_findings: [
      { finding: 'Isosthenuria + azotemia', description: 'USG 1.008-1.012 合併 creatinine 升高', significance: '腎實質疾病（腎臟喪失濃縮能力）' },
      { finding: '菌尿 + 膿尿', description: '細菌 + WBC > 5/HPF（cystocentesis）', significance: '泌尿道感染，需培養與藥敏' },
      { finding: 'Glucosuria', description: '尿糖陽性', significance: '血糖 > 腎糖閾 → 糖尿病；正常血糖下尿糖陽性 → Fanconi syndrome' },
      { finding: 'CaOx monohydrate 結晶', description: '啞鈴或針狀結晶', significance: '高度懷疑 ethylene glycol 中毒' },
    ],
    interpretation_guide: '看尿液順序：先記錄採尿方式。USG 用折射計（不要用試紙）。判讀化學試紙時注意犬貓物種差異。尿沉渣 40x 看。必要時加 UPC 或培養。最後對血清生化。',
    pitfalls: [
      '用試紙不用折射計測 USG，試紙 USG 在犬貓不準',
      '樣本放超過 30 分鐘，結晶會析出（假陽性）、細胞會退化（假陰性）',
      '冷藏樣本沒回溫就分析，低溫會促進結晶析出',
      '沒記錄採尿方式，細菌學判讀標準不一樣',
    ],
    sensitivity_specificity: 'USG 是評估腎臟濃縮能力最靈敏的指標之一。尿沉渣抓 UTI 的敏感度看採尿方式跟樣本新鮮度。UPC 是定量蛋白尿的金標準。',
    cost_benefit: '成本極低，腎臟跟泌尿道評估的第一線。每次點生化建議都一起做。',
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
    { type: 'textbook', citation: 'Rizzi TE, Valenciano A, Bowles M, et al. Atlas of Canine and Feline Urinalysis. Wiley-Blackwell, 2017.', relevance: '犬貓尿液分析圖譜' },
    { type: 'journal', citation: 'Callens AJ, Bartges JW. Urinalysis. Vet Clin North Am Small Anim Pract. 2015;45(4):621-637. doi:10.1016/j.cvsm.2015.02.001.', relevance: '尿液分析完整判讀指引' },
    { type: 'guideline', citation: 'Weese JS, Blondeau J, Boothe D, et al. International Society for Companion Animal Infectious Diseases (ISCAID) guidelines for the diagnosis and management of bacterial urinary tract infections in dogs and cats. Vet J. 2019;247:8-25. doi:10.1016/j.tvjl.2019.02.008.', relevance: 'ISCAID 泌尿道感染診治與抗菌管理指引（亞臨床菌尿）' },
    { type: 'guideline', citation: 'Lees GE, Brown SA, Elliott J, et al. Assessment and management of proteinuria in dogs and cats: 2004 ACVIM Forum Consensus Statement (small animal). J Vet Intern Med. 2005;19(3):377-385. doi:10.1111/j.1939-1676.2005.tb02713.x.', relevance: 'ACVIM 蛋白尿評估與處置共識' },
    { type: 'guideline', citation: 'IRIS (International Renal Interest Society). "IRIS Staging of CKD (modified 2023)." iris-kidney.com.', relevance: 'IRIS 指引，尿液分析在 CKD 分期中的角色（UPC 與 USG）' },
  ],
  is_current: true,
  created_at: now,
};

/** 內分泌功能檢測判讀，診斷型 */
const contentEndocrine: NodeContent = {
  id: 'CONTENT-CPATH-L4-010',
  node_id: 'CPATH-L4-010',
  version: 2,
  summary: '內分泌檢測用基礎荷爾蒙加上動態刺激/抑制試驗，評估甲狀腺、腎上腺、胰島素軸。挑錯檢測或判讀錯就會誤診，這個科別不能輕忽。',
  learning_objectives: [
    '選擇正確的甲狀腺功能檢測方式（犬低甲 vs 貓高甲）',
    '比較 LDDS、HDDS 與 ACTH stim test 在 Cushing 診斷中的角色',
    '判讀犬 Addison disease 的確診方式（ACTH stim test）',
    '說明貓糖尿病監測中 fructosamine 與血糖曲線的應用',
    '辨識影響內分泌檢測的藥物與疾病干擾因素',
  ],
  key_points: [
    '犬甲低篩檢：先 total T4，低值再加 free T4（equilibrium dialysis）跟 TSH',
    '貓甲亢篩檢：total T4 > 4.0 μg/dL 大致確診；borderline 要重複或做 free T4',
    'LDDS 是 Cushing 篩檢首選（敏感度 95%），PDH 跟 AT 要鑑別就看 4hr 跟 8hr 值',
    'ACTH stim 是 Addison 確診金標準（post-ACTH cortisol < 2 μg/dL），也篩 iatrogenic Cushing',
    'UCCR 是排除 Cushing 的最佳工具，陰性預測值 > 99%',
    'Sick euthyroid syndrome：全身性疾病會把 T4 拉低，看起來像甲低',
    'Fructosamine 反映過去 1-3 週平均血糖，不會被壓力性高血糖騙到',
    'Phenobarbital、glucocorticoids、sulfonamides 都會干擾甲狀腺檢測',
  ],
  body: `# 內分泌功能檢測判讀 (Endocrine Function Testing)

## 一、檢查原理與適應症 (Principles & Indications)



### 甲狀腺功能
### 犬 Hypothyroidism 診斷流程
1. Total T4：正常（> 1.5 μg/dL）→ 排除；低（< 1.0 μg/dL）→ 疑似
2. Free T4（ED）：最準確的單一指標，低值支持診斷
3. TSH：升高支持原發性甲低（但約 25% 甲低犬 TSH 正常）
4. Thyroglobulin autoantibody（TgAA）：陽性提示淋巴球性甲狀腺炎

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
- ACTH stim test：金標準
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

### 甲狀腺 (Thyroid) 判讀

| 指標 | 犬甲低（Hypothyroidism） | 貓甲亢（Hyperthyroidism） |
|------|------------------------|------------------------|
| Total T4（TT4） | ↓（< 1.0 μg/dL） | ↑（> 4.5 μg/dL 強烈懷疑，> 6.0 確診） |
| Free T4（fT4） | ↓，與 TT4 相符 | ↑（若 TT4 正常，fT4 可揭示 occult hyperthyroidism） |
| TSH（犬） | ↑（> 0.5 ng/mL 支持甲低） | — |
| T4 being suppressed | Sick euthyroid：TT4 可降至 0.5–1.0 μg/dL | 非甲低，NTI 才是主因 |

**貓甲亢特殊情境**：CKD 合併甲亢時，T4 可能被 NTI 抑制至正常範圍（masked hyperthyroidism）；治療甲亢後 GFR 下降，腎功能惡化提示 CKD 被高 GFR 掩蓋——治療前需充分告知 prognosis。

### 血糖 / 糖尿病指標

| 指標 | 切點 | 解讀注意事項 |
|------|------|------------|
| 血糖（spot glucose） | > 250 mg/dL 犬確診 DM；貓 > 300 mg/dL 但壓力高血糖可達此值 | 需搭配臨床症狀（PU/PD/體重下降）及 fructosamine 確認 |
| Fructosamine | 犬正常 < 340 μmol/L；貓 < 350 μmol/L | 反映過去 2–3 週平均血糖；不受單次壓力影響，鑑別貓壓力性高血糖金標準 |
| HbA1c（犬） | 正常 < 3.5%；控制不良 > 5% | 貓 RBC 壽命短，不適用 HbA1c；貓用 fructosamine |

### 皮質醇 / Cushing 診斷

| 試驗 | 結果解讀 | 備注 |
|------|---------|------|
| LDDST（低劑量 dexamethasone 抑制試驗） | 8h cortisol > 1.0 μg/dL = Cushing | 篩檢敏感性高（> 95%）；非典型 Addison 可假陰性 |
| ACTH stimulation | Post-ACTH cortisol > 22 μg/dL（犬）= Cushing | 偵測 PDH 敏感性僅約 60%；但診斷 ADH（adrenal dependent）較可靠；監測 trilostane 療效的首選工具 |
| Urine cortisol:creatinine ratio（UCCR） | > 10 × 10⁻⁶ 懷疑 Cushing | 篩檢工具，假陽性多（任何應激可升高）；陰性可有效排除 |

## 三、常見陷阱 (Pitfalls)

1. **Non-thyroidal illness（NTI / euthyroid sick）判斷失誤**：使用 glucocorticoids、苯巴比妥（phenobarbital）或患有嚴重疾病的犬，TT4 可降至甲低範圍；若不搭配 TSH 確認，會過度診斷甲低。TSH ↑ + TT4 ↓ 才是甲低的雙重確認。
2. **貓壓力性高血糖誤判為糖尿病**：就診應激的貓血糖可達 300–400 mg/dL，fructosamine 正常（< 350 μmol/L）即排除真性 DM。單次血糖值永遠不應作為貓 DM 的唯一診斷依據。
3. **ACTH stimulation 用於 Cushing 篩檢**：ACTH 試驗對 PDH 敏感性只有 60%，不應作為 Cushing 的主要篩檢工具；應使用 LDDST 或 UCCR 篩檢，ACTH 試驗用於 Addison 確診及 trilostane 療效監測。
4. **貓甲亢治療後腎功能惡化忽視**：甲亢維持高心輸出量，掩蓋 CKD 的 GFR 下降；治療甲亢後腎功能「惡化」其實是揭露了潛在 CKD，治療前需充分溝通。
5. **Fructosamine 在溶血 / 低蛋白血症時失準**：fructosamine 與白蛋白及球蛋白結合，溶血、低白蛋白血症（< 2 g/dL）會低估真實血糖控制情況，需知道此限制。

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
| 犬 Cushing 的 UCCR 採樣標準化 | 居家採集 vs 醫院採集的 cortisol:creatinine 差異很大（壓力效應），最佳採集方案尚未統一 | Level II |
| 貓 occult hyperthyroidism 的最佳確診策略 | 臨床症狀典型但 T4 正常/borderline 的貓，free T4、T3 抑制試驗、甲狀腺閃爍掃描的選擇尚無明確共識 | Level III |

## 六、近期實證更新 (Recent Evidence Updates)

### 基礎皮質醇排除 Addison：少打一次 ACTH 刺激
近年實證確立「基礎／休息血清皮質醇 > 2 μg/dL 可有效排除腎上腺皮質功能低下」，陰性預測值高（Bovens 2014、Gold 2016）。臨床意義：對「低度懷疑」Addison 的犬，先測一管基礎 cortisol，> 2 μg/dL 即可不必再做完整 ACTH 刺激試驗，省時省錢；但 < 2 μg/dL 仍須以 ACTH 刺激確診（基礎值低不等於確診）。

### Trilostane 監測：從 ACTH 刺激轉向 pre-pill cortisol ＋ 臨床
傳統 trilostane 療效監測依賴 ACTH 刺激試驗，但成本高、與臨床控制的相關性受質疑。近年趨勢改以「給藥前（pre-pill）皮質醇」搭配臨床症狀（多飲多尿、食慾、活力）評估（Macfarlane 2016），更貼近日常控制、降低費用；ACTH 刺激仍保留於懷疑過度抑制（medical Addison）或結果矛盾時。

### 連續／閃式血糖監測（CGM/FGM）改寫糖尿病監測
FreeStyle Libre 等閃式血糖監測系統已在糖尿病犬貓驗證準確度可接受（Corradini 2016 及後續犬貓多篇佐證），能取代住院反覆採血的血糖曲線、避開壓力性高血糖、提升居家依從性，正逐步成為糖尿病監測新標準。判讀時仍須注意組織間液與血漿血糖的時間差，及低血糖區的準確度限制。

### 檢測平台標準化議題
T4、cortisol 等荷爾蒙因免疫分析方法（CLIA/RIA/ELISA）差異，結果不可跨平台直接互換；解讀動態試驗時應沿用同一實驗室的參考區間與切點，跨院比較需謹慎。`,
  clinical_pearl: 'LDDS 敏感度 95%，遠勝 ACTH stim 的 80%，所以 Cushing 篩檢首選是 LDDS。但患犬正在用外源性 glucocorticoids 時，LDDS 沒辦法判讀（會假陽性），這時候改用 ACTH stim 抓 iatrogenic Cushing 才對。',
  common_mistakes: [
    '全身性疾病期間（sick euthyroid）測 T4 就下甲低診斷，應該等病情穩定再複檢',
    '只用 ACTH stim 篩 Cushing（敏感度才 80%），漏診率偏高',
    '忘了 phenobarbital 會把 total T4 拉低，癲癇犬被誤診甲低',
    '貓壓力性高血糖被當糖尿病，沒搭配 fructosamine 確認長期高血糖',
    'LDDS 採血時間不精確（要嚴格 0、4、8 hr），影響判讀',
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
    interpretation_guide: '看內分泌的順序：根據臨床疑診選對檢測。評估干擾（藥物、全身性疾病）。判讀基礎值跟動態試驗。必要時加第二線（fT4-ED、HDDS）。最後對臨床跟影像。',
    pitfalls: [
      'Sick euthyroid syndrome 會把 T4 拉低',
      '外源性 glucocorticoids 干擾 LDDS',
      'ACTH stim 的 cosyntropin 要冷凍保存',
      '採血時間不精確，動態試驗判讀全亂',
    ],
    sensitivity_specificity: 'LDDS 對 Cushing 敏感度 95%、特異度 70-75%。ACTH stim 敏感度 80%、特異度 85-90%。UCCR 陰性預測值 > 99%（最佳排除工具）。fT4-ED 抓犬甲低準確度最高。',
    cost_benefit: 'T4 基礎荷爾蒙費用中等。動態試驗（LDDS、ACTH stim）要多次採血加藥物，貴一點但確診沒這個不行。',
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
    { type: 'textbook', citation: 'Feldman EC, Nelson RW, Reusch C, Scott-Moncrieff JC. Canine and Feline Endocrinology, 4th ed. Elsevier, 2015.', relevance: '內分泌功能檢測判讀權威教材' },
    { type: 'guideline', citation: 'Behrend EN, Kooistra HS, Nelson R, et al. Diagnosis of Spontaneous Canine Hyperadrenocorticism: 2012 ACVIM Consensus Statement (Small Animal). J Vet Intern Med. 2013;27(6):1292-1304. doi:10.1111/jvim.12192.', relevance: 'Cushing 診斷 ACVIM 共識指引' },
    { type: 'journal', citation: 'Scott-Moncrieff JC. Thyroid Disorders in the Geriatric Veterinary Patient. Vet Clin North Am Small Anim Pract. 2012;42(4):707-725. doi:10.1016/j.cvsm.2012.04.012.', relevance: '甲狀腺疾病診斷在老年犬貓的特殊考量' },
    { type: 'journal', citation: 'Bovens C, Tennant K, Murphy KF, et al. Basal serum cortisol concentration as a screening test for hypoadrenocorticism in dogs. J Vet Intern Med. 2014;28(5):1541-1545. doi:10.1111/jvim.12415.', relevance: '基礎皮質醇 > 2 μg/dL 排除 Addison（減少不必要 ACTH 刺激）' },
    { type: 'journal', citation: 'Macfarlane L, Parkin T, Ramsey I. Pre-trilostane and three-hour post-trilostane cortisol to monitor trilostane therapy in dogs. Vet Rec. 2016;179(23):597. doi:10.1136/vr.103744.', relevance: 'Trilostane 監測改採 pre-pill cortisol + 臨床的實證' },
    { type: 'journal', citation: 'Corradini S, Pilosio B, Dondi F, et al. Accuracy of a Flash Glucose Monitoring System in Diabetic Dogs. J Vet Intern Med. 2016;30(4):983-988. doi:10.1111/jvim.14355.', relevance: '閃式血糖監測（FreeStyle Libre）犬糖尿病驗證' },
  ],
  is_current: true,
  created_at: now,
};

/** 淋巴結與腫瘤細胞學，診斷型 */
const contentLNTumorCyto: NodeContent = {
  id: 'CONTENT-CPATH-L4-011',
  node_id: 'CPATH-L4-011',
  version: 2,
  summary: '淋巴結腫起來、體表摸到腫塊，細胞學是最快的工具。能不能正確區分反應性增生、淋巴瘤、轉移性腫瘤，後面治療方向就走不一樣的路。',
  learning_objectives: [
    '區分正常、反應性增生與淋巴瘤的淋巴結細胞學特徵',
    '辨識犬五大圓細胞腫瘤（lymphoma、MCT、histiocytoma、TVT、plasmacytoma）',
    '描述惡性腫瘤細胞學的核標準（nuclear criteria of malignancy）',
    '判斷何時要加做 flow cytometry 或組織病理學',
    '說明腫瘤分級在細胞學層面的限制',
  ],
  key_points: [
    '正常淋巴結：> 90% 小淋巴球，少量中型大淋巴球、漿細胞、巨噬細胞',
    '反應性增生：小淋巴球還是多（> 50%），中大淋巴球變多（但 < 50%）、漿細胞變多、可看到 Mott cells',
    '淋巴瘤：大淋巴球 > 50%，核大、核仁明顯，單一形態（monomorphic）',
    '犬 high-grade lymphoma 細胞學準確率 > 90%；low-grade 跟反應性增生很難分',
    'MCT：圓細胞帶嗜鹼性或異染性顆粒，Diff-Quik 顆粒不一定染得出來',
    'Histiocytoma：均勻圓細胞、淡藍胞質，常見於 3 歲以下的犬',
    'TVT：圓細胞、胞質空泡排成一列（vacuoles in a row）',
    '淋巴結轉移：淋巴球背景中冒出一群異質性的非淋巴細胞',
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
- Anisokaryosis：核大小不一（> 2 倍變異）
- 核仁異常：大小/數量/形狀不規則
- 異常有絲分裂：三極或多極分裂

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
- 多形態（polymorphic） = 多種成熟階段

### 淋巴瘤（Lymphoma）
- 大淋巴球 > 50%（high-grade 通常 > 70%）
- 單一形態（monomorphic） = 大部分細胞大小相似
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

1. **血液汙染稀釋判讀**：淋巴結 FNA 抽吸過度易混入周邊血、沖淡淋巴球比例致無法判讀；改用非抽吸（針穿）法、減少負壓。
2. **反應性增生 vs low-grade lymphoma**：兩者最難分——反應性為「多形態」（各成熟階段＋漿細胞＋tingible body macrophages），low-grade lymphoma 為單一形態的小至中淋巴球；難分時送 flow cytometry（免疫表型）或 PARR（純株性）。
3. **MCT 顆粒未染出而漏診**：Diff-Quik 對肥大細胞顆粒染色不穩定，疑似時補 Wright-Giemsa 或 toluidine blue。
4. **引流區反應性淋巴結誤判為轉移**：腫瘤引流區淋巴結常反應性增生；看到少量非典型細胞須謹慎，必要時組織病理確認。
5. **細胞學分級的限制**：MCT 的 Patnaik/Kiupel 分級、淋巴瘤組織結構分型須組織病理，細胞學無法取代。
6. **sentinel node ≠ 觸診到的區域淋巴結**：真正前哨淋巴結需影像/染料定位，盲取區域淋巴結可能漏掉轉移（見第六段）。

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
| Sentinel lymph node（SLN）FNA 在犬腫瘤分期中的角色 | SLN FNA 的轉移偵測敏感度約 70-85%，是否可替代 SLN excisional biopsy 尚未有共識 | Level II |

## 六、近期實證更新 (Recent Evidence Updates)

### 流式細胞儀與 PARR 補足細胞學限制
細胞學分不清反應性 vs low-grade lymphoma 時，流式細胞儀（免疫表型：B/T、CD 標記、細胞大小）與 PARR（抗原受體基因純株性重排）成為標準輔助；兩者角色不同——flow 看「是什麼細胞」，PARR 看「是不是純株（腫瘤）」（Avery 2014；Burnett 2003）。犬 CD4+ vs CD8+ T 細胞、B vs T 分型具預後意義。

### WHO 分類標準化
Valli 2011 將犬惡性淋巴瘤依 WHO 標準系統化分類，提升跨機構診斷一致性與預後分層，成為現行犬淋巴瘤分型基礎；細胞學提供快速初判，確定分型仍須結合組織病理／免疫表型。

### 前哨淋巴結（SLN）定位改寫腫瘤分期
觸診到的區域淋巴結不一定是真正引流的前哨淋巴結。SLN 定位（淋巴閃爍掃描、CT 淋巴造影、ICG 近紅外、染料）能更準確找出該採樣的淋巴結、提高轉移偵測與分期準確度（Worley 2012 起，MCT 等腫瘤漸採用）；SLN 之 FNA／組織病理正逐步取代盲取區域淋巴結。

### 免疫細胞化學與 cell block
對細胞學難分類的圓細胞／間質腫瘤，抹片免疫細胞化學（CD3/CD79a/CD18/MUM1 等）與 cell-block 技術可在不開刀下提升分型準確度，是細胞學與組織病理之間的橋樑。`,
  clinical_pearl: '反應性增生跟 low-grade lymphoma 是細胞學裡最難區分的兩種。我自己的口訣：反應性是「多形態」（各個成熟階段都有），淋巴瘤是「單一形態」。實在分不出來，下一步直接送 flow cytometry（CD3/CD79a）或 PARR。',
  common_mistakes: [
    '反應性增生中大淋巴球變多就當淋巴瘤，要先評估是不是還是多形態分布',
    'MCT 在 Diff-Quik 顆粒沒染出來就漏診，需要 Wright-Giemsa 或 toluidine blue 確認',
    '引流淋巴結看到腫瘤細胞被當淋巴結原發腫瘤，其實是轉移',
    '忘了 histiocytoma 會自行消退，對年輕犬太急著開刀',
    'MCT 只靠細胞學分級，Patnaik/Kiupel 系統要組織病理',
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
    interpretation_guide: '看淋巴結的順序：低倍掃過去看細胞量跟背景。判斷主要細胞群（淋巴球還是非淋巴）。評估淋巴球大小分布（polymorphic 還是 monomorphic）。找惡性標準。分類（反應性、淋巴瘤、轉移、發炎）。',
    pitfalls: [
      '血液汙染嚴重的淋巴結 FNA 幾乎不能判讀',
      'Low-grade lymphoma 細胞跟正常小淋巴球太像',
      'Diff-Quik 對 MCT 顆粒的染色品質不穩定',
      '引流區域的反應性淋巴結被當腫瘤轉移',
    ],
    sensitivity_specificity: 'High-grade lymphoma 敏感度 > 90%、特異度 > 95%。Low-grade lymphoma 敏感度降到 50-70%。MCT 細胞學準確率 92-96%（前提顆粒有染出來）。',
    cost_benefit: 'FNA 幾乎零成本、結果馬上拿到、不用鎮靜。淋巴結跟腫塊評估的起點。但要知道限制，該轉組織病理就轉。',
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
    { type: 'journal', citation: 'Avery PR, Burton J, Bromberek JL, et al. Flow cytometric characterization and clinical outcome of CD4+ T-cell lymphoma in dogs: 67 cases. J Vet Intern Med. 2014;28(2):538-546. doi:10.1111/jvim.12304.', relevance: 'Flow cytometry 在犬 T 細胞淋巴瘤分型與預後的應用' },
    { type: 'journal', citation: 'Valli VE, San Myint M, Barthel A, et al. Classification of Canine Malignant Lymphomas According to the World Health Organization Criteria. Vet Pathol. 2011;48(1):198-211. doi:10.1177/0300985810379428.', relevance: '犬惡性淋巴瘤 WHO 標準分類（現行分型基礎）' },
    { type: 'journal', citation: 'Burnett RC, Vernau W, Modiano JF, et al. Diagnosis of Canine Lymphoid Neoplasia Using Clonal Rearrangements of Antigen Receptor Genes. Vet Pathol. 2003;40(1):32-41. doi:10.1354/vp.40-1-32.', relevance: 'PARR 純株性檢測診斷犬淋巴增生性腫瘤的經典文獻' },
    { type: 'journal', citation: 'Worley DR. Incorporation of sentinel lymph node mapping in dogs with mast cell tumours. Vet Comp Oncol. 2012;12(3):215-226. doi:10.1111/j.1476-5829.2012.00354.x.', relevance: '犬前哨淋巴結定位用於腫瘤分期（取代盲取區域淋巴結）' },
  ],
  is_current: true,
  created_at: now,
};

/** 皮膚細胞學與刮搔判讀，診斷型 */
const contentDermCyto: NodeContent = {
  id: 'CONTENT-CPATH-L4-012',
  node_id: 'CPATH-L4-012',
  version: 2,
  summary: '皮膚細胞學跟皮膚刮搔是皮膚科門診兩個基本工具。壓印抹片抓感染原、刮搔找外寄生蟲，兩個搭起來 10 分鐘內就有初步方向。',
  learning_objectives: [
    '描述皮膚壓印抹片、膠帶抹片與皮膚刮搔的採樣技術差異',
    '辨識皮膚細胞學中常見的感染原（Malassezia、Demodex、細菌球菌/桿菌）',
    '區分淺層刮搔與深層刮搔的適應症與技術',
    '判讀皮膚 FNA 的常見腫瘤類型（MCT、lipoma、皮脂腺腫瘤）',
    '整合皮膚細胞學結果與臨床皮膚病型態制定鑑別診斷',
  ],
  key_points: [
    '壓印抹片：載玻片直接壓在病灶上，滲出性、糜爛性病灶最合適',
    '膠帶抹片：透明膠帶貼皮膚，染色後找 Malassezia 跟表面細菌',
    '淺層刮搔：抓表皮寄生蟲如 Sarcoptes（但敏感度只有 50%）',
    '深層刮搔：刮到微出血為止，找毛囊內 Demodex',
    'Malassezia 判讀：犬非脂漏部位 > 2 個/oil field 就有意義',
    '球菌是犬皮膚最常見的細菌型態；桿菌少見但要警覺多重抗藥性',
    'Demodex canis 長條（雪茄形），D. gatoi 比較短、住在表淺',
    '皮膚腫塊 FNA 看：脂肪瘤（透明脂肪細胞）、MCT（顆粒圓細胞）、皮脂腺腫瘤（泡沫狀細胞團簇）',
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
- 球菌（cocci）：成對或四聯排列，最常見為 Staphylococcus pseudintermedius
- 桿菌（rods）：需警惕 Pseudomonas 等多重抗藥性菌
- 重要判讀：是否有細胞內細菌（intracellular bacteria）→ 確認為真感染而非汙染

### 酵母菌
- Malassezia pachydermatis：花生/雪人形（budding yeast）
- 正常犬皮膚可有少量；犬耳道 > 5/oil field 或非脂漏皮膚 > 2/oil field = 過量增殖

### 皮膚寄生蟲
- Demodex canis：雪茄形，長 250-300 μm，毛囊內
- Demodex gatoi：較短型（< 200 μm），貓表面性，淺刮即可偵測
- Sarcoptes scabiei：卵圓形，短足，深層刮搔敏感度僅 ~50%（陰性不能排除）

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

### 壓印抹片（impression smear）細胞學

| 病灶類型 | 典型細胞學所見 | 最可能診斷 |
|---------|--------------|-----------|
| 膿皰、表皮性皮炎 | 大量 PMN + 球菌（葡萄串狀）| 細菌性膿皮症（Staph pseudintermedius） |
| 膿皰、鬆軟性滲出 | PMN + 桿菌 | 革蘭氏陰性菌感染；少見但更頑固 |
| 丘疹、乾痂 | 少量 PMN + 出芽酵母（花生形，雙極） | Malassezia dermatitis |
| 腫塊 FNA（圓細胞腫瘤） | 顆粒豐富的大圓形細胞，偶有嗜酸性顆粒（肥大細胞） | Mast Cell Tumor（MCT）——注意脫顆粒後顆粒消失 |
| 腫塊 FNA（無顆粒圓細胞） | 空泡狀胞質圓形細胞，均勻 | 組織細胞瘤（Histiocytoma）|
| 腫塊 FNA（上皮細胞） | 細胞緊密聚集，腺管樣排列 | 皮脂腺腫瘤 / 汗腺腫瘤 |

### 皮膚刮搔（skin scraping）

| 刮搔深度 | 目標寄生蟲 | 技術要點 |
|---------|-----------|---------|
| 表淺刮搔（til capillary ooze） | Demodex（蠕形蟎）| 多部位刮搔（≥ 5 處），含毛囊深部 |
| 淺刮搔（角質層） | Sarcoptes（疥蟎） | 疥蟎密度低，陰性不排除；pinnae-pedal reflex 支持診斷 |
| 透明膠帶壓印 | Cheyletiella（絨毛蟎）、虱 | 表面採集即可，方便快速 |

### Malassezia 判讀標準

- > 2 個/oil immersion field（× 1000）：顯著增生
- > 5 個/oil field（耳道）：符合 Malassezia 外耳炎
- 出芽酵母形態（花生 / 雙極）：M. pachydermatis 典型外觀；注意與念珠菌（Candida，假菌絲形態）鑑別

## 三、常見陷阱 (Pitfalls)

1. **MCT 脫顆粒/染色不足漏診**：肥大細胞受 FNA 機械刺激可提前脫顆粒；且**快速染色（Diff-Quik）有時無法染出 MCT 顆粒**（poorly granulated 假象），Wright-Giemsa 或 toluidine blue 對顆粒顯色更可靠。若見大量嗜酸性球背景 + 圓形細胞，即使無顆粒也應懷疑 MCT，送組織病理確診。
2. **Demodex 刮搔部位不足**：蠕形蟎分布不均，單一部位陰性不可排除——最少 5 個部位（含耳緣、趾間、口周），並刮至見微量毛細血管出血（含毛囊深部）。全身性蠕形蟎病可同時做毛根鏡（trichogram）提高偵測率。
3. **Malassezia 計數低估（油漬效應）**：若抹片油分過多或脫色不完全，酵母形態不清；Diff-Quik 快速染色最適合 Malassezia 辨識，New Methylene Blue 或 Wright's stain 也可接受。
4. **皮膚刮搔與 Sarcoptes 陰性不排除疥癬**：疥蟎蟲體密度低，皮膚刮搔陽性率只有 20–50%；典型臨床表現（耳緣皮屑、劇烈瘙癢、肘部病灶）+ pinnae-pedal reflex 陽性仍應診斷性治療（ivermectin / sarolaner）。
5. **細菌性感染忽略抗藥性趨勢**：台灣犬 Staphylococcus pseudintermedius MRSP（甲氧西林抗藥）盛行率升高，反覆膿皮症治療失敗或院內感染應進行細菌培養 + 藥敏試驗，不可持續 empiric 使用第一線 beta-lactam。

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
| 犬深層膿皮症經驗性抗生素 vs 常規培養藥敏的成本效益 | MRSP 盛行率上升（台灣 ~20-30%），但每例常規 C&S 的成本效益尚無大型研究 | Level III |

## 六、近期實證更新 (Recent Evidence Updates)

### 皮膚細胞學的標準化與圖譜化
Moriello 2018 整合犬貓皮膚細胞學的採樣、染色與判讀，推動方法標準化（Malassezia 計數、感染原辨識）；強調膠帶抹片/壓印/刮搔的適應症分工與品質。

### 黴菌診斷：PCR 與培養並進
皮癬菌 real-time PCR（Jacobson 2017）較傳統黴菌培養（DTM/Sabouraud，需 1-3 週）快速、敏感度高，但**無法區分活菌與殘存 DNA**（治療監測仍須培養）；MALDI-TOF 加速菌種鑑定。

### Demodex：isoxazoline 時代弱化刮搔角色
在口服 isoxazoline 高效治療犬蠕形蟎下，「治療性診斷」漸取代反覆深刮；但確診/分型（局部 vs 全身）與毛根鏡仍有價值（見抗寄生蟲節點）。

### 抗藥性與染色品質
MRSP（台灣 ~20-30%）盛行下，反覆/頑固膿皮症應培養藥敏而非持續 empiric beta-lactam（Hillier ISCAID 2014）；MCT 顆粒於 Diff-Quik 可能不顯色，Wright-Giemsa/toluidine blue 更可靠。`,
  clinical_pearl: 'Sarcoptes 刮搔敏感度才 50%，所以一半的疥癬犬刮搔是陰性。臨床高度懷疑（劇烈搔癢、耳翼邊緣反射陽性、典型分布）就算刮搔陰性也應該 trial therapy（isoxazoline）。不要在那裡等刮搔給答案。',
  common_mistakes: [
    '深層刮搔沒刮到出血點就停，毛囊內的 Demodex 漏掉',
    '刮搔陰性就排除 Sarcoptes，敏感度只有 50%，要 trial therapy',
    '壓印抹片染色時間不夠，Malassezia 跟細菌都看不清楚',
    '耳道看到少量 Malassezia 就上抗黴菌，要看臨床症狀',
    'MCT 在 Diff-Quik 顆粒沒染出來（poorly granulated MCT），被當其他圓細胞腫瘤',
  ],
  disease_data: null,
  diagnostic_data: {
    indication: ['皮膚感染評估（細菌/酵母菌）', '外寄生蟲篩檢（Demodex/Sarcoptes）', '皮膚腫塊初步診斷', '外耳炎感染原鑑別', '治療反應監測'],
    contraindication: ['無絕對禁忌症。深層刮搔在眼周需特別小心。'],
    technique: '壓印抹片：載玻片直接壓於病灶。膠帶抹片：透明膠帶貼皮膚後置於載玻片上。淺層刮搔：10 號刀片沾礦物油，平行刮表面。深層刮搔：擠壓皮膚使毛囊內容物外推，垂直方向深刮至微量出血。均以 Diff-Quik 染色（膠帶抹片僅用後兩步）。',
    normal_findings: [
      { finding: '正常皮膚壓印', description: '少量角質化上皮，無細菌或酵母菌', significance: '皮膚屏障完整' },
      { finding: '正常皮膚刮搔', description: '未見寄生蟲', significance: '無外寄生蟲感染（但 Sarcoptes 可能假陰性）' },
      { finding: '正常耳道', description: '少量角質化上皮，偶見 < 5 Malassezia/OIF', significance: '無明顯感染' },
    ],
    abnormal_findings: [
      { finding: 'Malassezia 過量增殖', description: '> 2/OIF（非脂漏皮膚）或 > 5/OIF（耳道）', significance: 'Malassezia dermatitis/otitis，常為續發（需查原發病因）' },
      { finding: 'Demodex 蟲體', description: '成蟲、幼蟲或蟲卵', significance: '犬蠕形蟲症（demodicosis），評估局部 vs 全身型' },
      { finding: '細胞內球菌', description: '嗜中性球內可見球菌', significance: '確認細菌性膿皮症（非汙染），需考慮培養' },
      { finding: 'MCT 細胞', description: '含嗜鹼性顆粒的圓形細胞', significance: '肥大細胞瘤，需組織病理分級' },
    ],
    interpretation_guide: '看皮膚細胞學：低倍掃過去看細胞量跟背景。高倍找感染原（細菌型態跟位置、Malassezia 數量、寄生蟲）。評估發炎細胞類型（嗜中性球還是嗜酸性球）。腫塊 FNA 就看腫瘤類型。最後對臨床病灶分布跟病史。',
    pitfalls: [
      '深層刮搔深度不夠（要刮到出血點）',
      '刮搔前沒擠壓皮膚，Demodex 偵測率降低',
      '壓印抹片太厚，細胞看不清楚',
      '耳道採樣棉棒推太深，造成不適或損傷',
    ],
    sensitivity_specificity: 'Demodex 深層刮搔敏感度 > 90%。Sarcoptes 刮搔敏感度只有 50%。Malassezia 膠帶抹片法敏感度 85-90%。皮膚 FNA 對常見腫瘤準確率 80-95%（看腫瘤類型）。',
    cost_benefit: '所有採樣技術都幾乎零成本，10 分鐘出結果。皮膚科門診 CP 值最高的即時診斷工具。',
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
    { type: 'journal', citation: 'Moriello KA, et al. Canine and feline skin cytology: a comprehensive and illustrated review of the test methods and interpretation of cytological findings. Vet Dermatol. 2018;30(1):3-e2. doi:10.1111/vde.12706.', relevance: '犬貓皮膚細胞學系統性圖譜回顧（採樣/染色/判讀標準化）' },
    { type: 'guideline', citation: 'Hillier A, Lloyd DH, Weese JS, et al. Guidelines for the diagnosis and antimicrobial therapy of canine superficial bacterial folliculitis (Antimicrobial Guidelines Working Group of ISCAID). Vet Dermatol. 2014;25(3):163-e43. doi:10.1111/vde.12118.', relevance: 'ISCAID 指引，細胞學在膿皮症診斷與抗藥性管理中的角色' },
    { type: 'journal', citation: 'Jacobson LS, McIntyre L, Mykusz J. Comparison of real-time PCR with fungal culture for the diagnosis of Microsporum canis dermatophytosis in shelter cats. J Feline Med Surg. 2018;20(2):103-107. doi:10.1177/1098612x17695899.', relevance: '皮癬菌 PCR vs 培養之診斷比較（快速但不分活菌）' },
  ],
  is_current: true,
  created_at: now,
};

/** 感染性疾病實驗室診斷，診斷型 */
const contentInfectiousDx: NodeContent = {
  id: 'CONTENT-CPATH-L4-013',
  node_id: 'CPATH-L4-013',
  version: 2,
  summary: '感染症診斷整合 PCR、血清學、培養跟快篩，目標是抓病原核酸、抗原或宿主抗體。每個方法都有自己的限制，挑錯方法或不知道限制就會被假陽性、假陰性騙。',
  learning_objectives: [
    '比較 PCR、血清學（抗體檢測）、抗原檢測與培養的優缺點',
    '解釋抗體檢測的 seroconversion window 與假陰性風險',
    '列舉台灣犬貓常見的感染性疾病快篩套組（4Dx、FeLV/FIV 等）',
    '描述何時需要培養與藥敏試驗（C&S）',
    '說明 PCR 定量（Ct value）在臨床的判讀意義',
  ],
  key_points: [
    'PCR 抓病原核酸，敏感度高，感染早期（抗體還沒產生）就抓得到',
    '血清學抓抗體：要 seroconversion（通常感染後 2-4 週），急性期可能假陰性',
    '抗原檢測（FeLV p27、Heartworm Ag）抓病原蛋白，敏感度跟特異度看試劑',
    '4Dx Plus：犬心絲蟲 Ag + Ehrlichia/Anaplasma/Borrelia Ab（台灣 Ehrlichia 盛行率高）',
    'FeLV/FIV combo：FeLV 是抗原（p27）、FIV 是抗體，陽性都要確認試驗',
    '培養是細菌感染金標準，加藥敏指導抗生素選擇',
    '真菌培養（DTM/Sabouraud）用來確診皮癬菌病，要 7-21 天',
    'PCR Ct < 25 通常是高病原量；Ct > 35 可能是汙染或極低量',
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
- 健康帶菌者也可能 PCR 陽性，要結合臨床症狀

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

1. **抗體 window period 假陰性**：急性感染（如 Ehrlichia 前 1-3 週、retrovirus 早期）抗體未轉陽，SNAP 可假陰性；高度懷疑時改 PCR 或經驗治療，勿乾等轉陽。
2. **抗體陽性 ≠ 現行感染**：抗體只代表「曾暴露」；高盛行區（台灣 Ehrlichia）健康犬亦可陽性，須結合臨床（血小板/發燒/壁蝨史）。
3. **PCR 陽性 ≠ 活動性疾病**：可能偵測死菌 DNA（抗生素後）、環境汙染或健康帶菌者（FHV/FCV/FCoV 帶毒貓）；結合 Ct 與臨床。
4. **FeLV 單次 ELISA 陽性就確診**：transient/regressive 感染會自清，p27 陽性須 6 週後複驗或 IFA/PCR 確認。
5. **幼貓 FIV 抗體假陽性**：< 6 月齡可能為母源抗體；陽性幼貓應 6 月齡後複驗（或用病毒 PCR）。
6. **FCoV 高效價誤判 FIP**：效價只代表暴露；FIP 確診靠積液分析＋巨噬細胞內 FCoV 抗原免疫染色（IHC/ICC）＋相符病理/臨床。
7. **用藥後才採培養**：抗生素後採樣大幅降低培養敏感度；採樣務必在抗生素前、無菌操作。

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
| PCR 偵測到的低量病原（Ct > 30）的臨床意義 | 可能代表過去感染殘存 DNA、環境汙染或極低量活菌，缺乏犬貓各病原的臨床 Ct 切點研究 | Level III |

## 六、近期實證更新 (Recent Evidence Updates)

### 分子診斷加速：multiplex/syndromic panel 與 MALDI-TOF
多重 PCR（呼吸道/腸道 syndromic panel）可一次偵測多病原、約 1 小時出結果；MALDI-TOF 把培養後病原鑑定由 24-48h 縮到數小時。獸醫參考實驗室逐步引進，但須注意「偵測到 ≠ 致病」（帶菌/共感染解讀）。

### mNGS 無偏向病原偵測
總體基因體定序（mNGS）不需預設目標即可偵測罕見/非典型病原，對不明原因感染具突破潛力；目前獸醫屬研究階段，成本與判讀（汙染、臨床相關性）仍是挑戰。

### 壁蝨傳播疾病的檢測-治療框架（台灣高度相關）
ACVIM 共識區分 Lyme（Littman 2018）與 ehrlichiosis（Neer 2002）；台灣 Ehrlichia canis 高盛行——急性期 PCR 較抗體敏感，亞臨床血清陽性是否治療仍有爭議，須結合 CBC/臨床個別化。

### FIP 診斷實證更新
Tasker 2018 整理 FIP 各檢測之證據：FCoV 抗體/效價無法確診，巨噬細胞內 FCoV 抗原免疫染色（IHC/ICC）為關鍵確診依據，結合積液分析（Rivalta、A:G、細胞學）與 RT-PCR 提升準確度。`,
  clinical_pearl: '台灣是 Ehrlichia canis 高盛行區，4Dx 抓的是抗體不是抗原。感染初期（前 1-3 週）抗體還沒產生，SNAP 可能假陰性。臨床高度懷疑（血小板減少 + 壁蝨暴露史 + 發燒）就直接送 PCR 或先用 doxycycline 經驗性治療，不要乾等抗體轉陽。',
  common_mistakes: [
    'FIV 抗體快篩 < 6 月齡幼貓陽性就下診斷，可能是母源抗體',
    'FeLV 快篩一次陽性就確診，要 6 週後複驗或 IFA 確認（transient viremia 會自己清掉）',
    'FCoV 抗體效價高就下 FIP 診斷，高效價只代表暴露過冠狀病毒',
    'PCR 陽性直接當臨床疾病，要看帶菌者狀態跟 Ct value',
    '用抗生素之後才採培養樣本，敏感度大幅下降',
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
      { finding: 'FeLV Ag 陽性', description: 'p27 抗原陽性', significance: '現行 FeLV 抗原血症，6 週後要複驗確認是不是 persistent 感染' },
      { finding: 'PCR 陽性（Ct < 25）', description: '高病原量', significance: '活動性感染可能性高，臨床意義明確' },
      { finding: '培養陽性 + 多重抗藥', description: 'MRSP 或 Pseudomonas 等', significance: '需根據藥敏結果選擇抗生素，避免經驗性廣效用藥' },
    ],
    interpretation_guide: '看感染症檢測：根據臨床疑診選方法。考慮 window period 跟採樣時機。快篩陽性要確認試驗。PCR 結合 Ct value 估病原量。培養結果指導抗生素。最後對臨床。',
    pitfalls: [
      '感染早期（window period）抗體檢測假陰性',
      'PCR 抓到死菌 DNA 假陽性（抗生素治療後常見）',
      '健康帶菌者 PCR 陽性不等於臨床疾病',
      '快篩判讀時間太長或太短，結果不能信',
    ],
    sensitivity_specificity: '4Dx heartworm Ag 敏感度 > 99%（感染 > 5 隻成蟲時）、特異度 > 99%。FeLV ELISA 敏感度 98%、特異度 98%。FIV Ab 敏感度 99%、特異度 98%（成貓）。PCR 敏感度看病原量跟採樣品質。',
    cost_benefit: '院內快篩費用中等、10 分鐘出結果，適合篩檢。PCR 貴一點但準確度最佳。培養加藥敏耗時但抗藥性感染少不了。',
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
    { type: 'guideline', citation: 'Littman MP, Gerber B, Goldstein RE, et al. ACVIM consensus update on Lyme borreliosis in dogs and cats. J Vet Intern Med. 2018;32(3):887-903. doi:10.1111/jvim.15085.', relevance: '犬貓 Lyme borreliosis 診斷與治療 ACVIM 共識更新' },
    { type: 'guideline', citation: 'Neer TM, Breitschwerdt EB, Greene RT, Lappin MR. Consensus statement on ehrlichial disease of small animals from the infectious disease study group of the ACVIM. J Vet Intern Med. 2002;16(3):309-315. doi:10.1111/j.1939-1676.2002.tb02374.x.', relevance: 'ACVIM 小動物 ehrlichia 疾病共識（台灣高盛行壁蝨病）' },
    { type: 'textbook', citation: 'Hartmann K. Feline leukemia virus infection. In: Greene CE, ed. Infectious Diseases of the Dog and Cat, 4th ed. Elsevier, 2012:108-136.', relevance: 'FeLV 診斷流程與確認試驗' },
    { type: 'journal', citation: 'Tasker S. Diagnosis of feline infectious peritonitis: update on evidence supporting available tests. J Feline Med Surg. 2018;20(3):228-243. doi:10.1177/1098612x18758592.', relevance: 'FIP 實驗室診斷的最新實證（免疫染色為關鍵確診）' },
  ],
  is_current: true,
  created_at: now,
};

/** 臨床病理學總覽，概念型 */
const contentCpathOverview: NodeContent = {
  id: 'CONTENT-CPATH-L0-001',
  node_id: 'CPATH-L0-001',
  version: 2,
  summary: '臨床病理學是把臨床端跟實驗室接起來的橋。三大分支：血液學、臨床生化、細胞學。樣本怎麼採、怎麼分析、報告怎麼寫，每一步都直接決定臨床決策品質。',
  learning_objectives: [
    '定義臨床病理學的範疇及其在獸醫醫療中的角色',
    '列舉臨床病理學三大分支（血液學、臨床生化、細胞學）的核心內容',
    '描述從樣本採集到報告產出的完整工作流程',
    '說明品質管控（QC）在實驗室醫學中的重要性',
    '理解臨床病理學如何與其他臨床專科整合',
  ],
  key_points: [
    '三大分支：血液學、臨床生化、細胞學',
    '品質管控分三段：採集（pre-analytical）、分析（analytical）、報告判讀（post-analytical）',
    '參考區間看物種、品種、年齡，不能直接套人醫標準',
    '院內 POCT 跟外送參考實驗室各有優缺，看情境挑',
    '臨床病理是所有專科的共同語言：心臟科要 cTnI、內科要生化、皮膚科要細胞學',
    '品質管控分內部品管（IQC）跟外部能力測試（EQA/PT），確保結果可信',
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
- 內科（Internal Medicine）：生化 panel 評估肝腎功能、電解質平衡
- 腫瘤科（Oncology）：FNA 細胞學初篩腫塊性質、CBC 監測化療副作用
- 皮膚科（Dermatology）：皮膚細胞學鑑別感染 vs 腫瘤 vs 自體免疫
- 心臟科（Cardiology）：cTnI（心肌肌鈣蛋白）、NT-proBNP 生物標記
- 急診科（ECC）：即時血氣分析、乳酸、凝血功能
- 外科（Surgery）：術前生化 + CBC 評估手術風險

## 二、重要概念 (Key Concepts)

### 實驗室工作流程的三個階段

#### 1. 分析前階段（Pre-analytical Phase）
此階段佔實驗室錯誤的 60-70%，是品質管控最重要的環節：
- 樣本採集：正確的採血管選擇（EDTA → CBC、Heparin → 生化、Citrate → 凝血）
- 樣本處理：及時分離血清/血漿、避免溶血/脂血/黃疸干擾
- 病患準備：禁食狀態對 Triglyceride、Glucose、Bile acids 的影響
- 運送條件：溫度、時間、震動對樣本穩定性的影響

#### 2. 分析階段（Analytical Phase）
- 儀器校正（Calibration）：確保量測值準確度
- 內部品管（Internal Quality Control, IQC）：每日/每批 QC 材料檢測，Levey-Jennings 圖監控
- Westgard 規則：偵測系統性或隨機性誤差（1-2s、1-3s、2-2s、R-4s 等規則）
- 分析方法：濕式化學 vs 乾式化學、阻抗法 vs 雷射流式細胞術

#### 3. 分析後階段（Post-analytical Phase）
- 參考區間（Reference Interval, RI）：依物種、品種、年齡建立，非「正常值」
- 臨床相關性：Delta check（與前次結果比較）、臨界值通報
- 報告撰寫：結構化報告、臨床建議
- 結果溝通：與臨床醫師的有效溝通是最終目標

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
- 溶血：最常見的分析前干擾，導致 K⁺ 假性升高（犬紅血球 K⁺ 含量較低故影響較小，但 Akita 等品種例外）
- 脂血：干擾比色法測定，導致多項生化值不準確
- EDTA 汙染：EDTA 管血液汙染生化管，導致 Ca²⁺ 假性降低、K⁺ 假性升高
- 採血管順序錯誤：先採 EDTA 管再採生化管可能造成 EDTA 汙染

### 判讀錯誤
- 把單一異常值當確定診斷，要結合臨床整體評估
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
| AI 在臨床病理判讀中的角色 | AI 輔助判讀的準確度提升中，但在複雜多疾病情境下仍需人類專家把關 | Level IV |

## 六、近期實證更新 (Recent Evidence Updates)

| 主題 | 實證更新 | 臨床意涵 | 來源 |
|------|---------|---------|------|
| AI 進入獸醫臨床病理 | Neal 等 2025 於 Vet Clin Pathol 發表「AI in Veterinary Clinical Pathology」導論與回顧，系統整理機器學習於血球形態辨識、細胞學分類與報告輔助的現況與限制（模型優化、驗證、可解釋性）。 | AI 為輔助而非取代；導入須有在地驗證、品管與專家把關，判讀責任仍在臨床病理專家。 | Neal 2025 |
| POCT 品保標準化 | ASVCP 院內即時檢驗（POCT）品保指引（Flatland 等 2013）規範操作者訓練、QC 頻率與「與參考實驗室的方法學比對」。 | 院內機台非「開機即可信」；須建立 QC 並定期與參考實驗室比對，才能與外送結果互換判讀。 | Flatland 2013 |
| 參考區間標準化 | ASVCP de novo 參考區間指引（Friedrichs 等 2012）持續推動跨實驗室 RI 標準化與品種／年齡特異性 RI 建立。 | RI 是「該實驗室、該方法」的產物，不可跨機台直接搬用；Greyhound／幼齡等族群須專屬 RI。 | Friedrichs 2012 |
| 三階段品保框架 | ASVCP 三階段品保指引（Gunn-Christie 等 2012）將品質責任明確落在分析前／中／後全程，呼應「分析前誤差佔 60-70%」的事實。 | 品質不只在儀器；採檢、運送、判讀全程都要管控。 | Gunn-Christie 2012 |`,
  clinical_pearl: '臨床病理報告重點不是哪個數字「正常」，而是整組結果在講什麼故事。BUN/Crea 輕微升高加 USG < 1.030 的犬，比 BUN/Crea 中度升高但 USG > 1.050 的脫水犬還令人擔心。看 pattern 不看單一數值，這是臨床病理判讀的核心能力。',
  common_mistakes: [
    '只盯紅字，忽略正常範圍內的趨勢（delta check）',
    '沒核樣本品質（溶血、脂血、凝塊）就直接看結果',
    '不同實驗室或儀器的結果直接比，沒考慮方法學差異',
    '把參考區間上下限當絕對的正常異常分界線，忽略灰色地帶',
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
    { type: 'textbook', citation: 'Stockham SL, Scott MA. Fundamentals of Veterinary Clinical Pathology, 2nd ed. Blackwell Publishing, 2008.', relevance: '獸醫臨床病理學最經典的綜合教科書' },
    { type: 'textbook', citation: 'Rizzi TE, Valenciano AC, Cowell RL, et al. Atlas of Canine and Feline Urinalysis. Wiley-Blackwell, 2017.', relevance: '犬貓尿液分析判讀圖譜' },
    { type: 'guideline', citation: 'Friedrichs KR et al. "ASVCP reference interval guidelines: determination of de novo reference intervals in veterinary species and other related topics." Vet Clin Pathol. 2012;41(4):441-453. doi:10.1111/vcp.12006', relevance: 'ASVCP 獸醫參考區間建立指引' },
    { type: 'guideline', citation: 'Gunn-Christie RG, Flatland B, Friedrichs KR, et al. "ASVCP quality assurance guidelines: control of preanalytical, analytical, and postanalytical factors for urinalysis, cytology, and clinical chemistry in veterinary laboratories." Vet Clin Pathol. 2012;41(1):18-26. doi:10.1111/j.1939-165x.2012.00412.x', relevance: '獸醫實驗室三階段品質管控指南' },
    { type: 'guideline', citation: 'Flatland B, Freeman KP, Vap LM, et al. "ASVCP guidelines: quality assurance for point-of-care testing in veterinary medicine." Vet Clin Pathol. 2013;42(4):405-423. doi:10.1111/vcp.12099', relevance: 'ASVCP 院內 POCT 品保指引（POCT 與參考實驗室互換性）' },
    { type: 'journal', citation: 'Neal SM, Rudmann DG, Corps KN, et al. "Artificial Intelligence in Veterinary Clinical Pathology—An Introduction and Review." Vet Clin Pathol. 2025;54(S2). doi:10.1111/vcp.70012', relevance: '獸醫臨床病理 AI 導論與回顧（近期實證）' },
  ],
  is_current: true,
  created_at: now,
};

/** 免疫學基礎，概念型 */
const contentImmunology: NodeContent = {
  id: 'CONTENT-CPATH-L1-003',
  node_id: 'CPATH-L1-003',
  version: 1,
  summary: '免疫學是看懂感染症、自體免疫、過敏反應的底層。獸醫臨床病理裡那些免疫相關檢查（抗體檢測、免疫螢光、過敏原檢測）都建立在先天性跟後天性免疫的機轉上。犬貓免疫系統還有不少物種差異要記得。',
  learning_objectives: [
    '區分先天性免疫（Innate Immunity）與後天性免疫（Adaptive Immunity）的機制與角色',
    '列舉主要抗體類別（IgG、IgM、IgA、IgE）的結構與功能',
    '描述補體系統的三條活化途徑與臨床意義',
    '分類 Gell & Coombs 四型過敏反應並舉出犬貓臨床實例',
    '說明犬貓免疫系統的物種特異性差異',
  ],
  key_points: [
    '先天性免疫：非特異性、快（分鐘到小時），包含物理屏障、吞噬細胞、補體、NK 細胞',
    '後天性免疫：抗原特異性、有記憶，分體液免疫（B 細胞、抗體）跟細胞免疫（T 細胞）',
    '犬有 4 種 IgG 亞型（IgG1-4），貓只有 IgG1 跟 IgG2，影響抗體介導疾病的表現',
    'Type I（即時型，IgE 介導）：犬異位性皮膚炎、貓氣喘',
    'Type II（抗體介導細胞毒性）：IMHA、IMTP、新生兒同種免疫溶血',
    'Type III（免疫複合物）：SLE、血管炎',
    'Type IV（延遲型，T 細胞介導）：接觸性皮膚炎、肉芽腫',
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

#### 體液免疫（Humoral Immunity，B 細胞）
B 細胞在抗原刺激後分化為漿細胞（Plasma Cell），產生抗體（Immunoglobulin）。

#### 抗體類別

| 抗體 | 結構 | 功能 | 臨床意義 |
|------|------|------|---------|
| IgG | 單體，血清中最豐富 | 調理素作用、補體活化、穿越胎盤（犬少量） | 長期免疫、疫苗效價檢測 |
| IgM | 五聚體，分子量最大 | 初次免疫反應、強力補體活化 | 急性感染指標（IgM 先升） |
| IgA | 二聚體（分泌型） | 黏膜免疫（腸道、呼吸道、淚液） | 黏膜防禦的第一線 |
| IgE | 單體，血清含量極低 | 與肥大細胞結合→過敏反應、抗寄生蟲 | Type I 過敏（異位性皮膚炎） |

犬貓差異：犬有 4 種 IgG 亞型（IgG1-4），貓僅有 IgG1 和 IgG2。犬 IgG4 是非補體活化型，在某些免疫疾病中扮演調節角色。

#### 細胞免疫（Cell-mediated Immunity，T 細胞）
- CD4+ Helper T 細胞：Th1（細胞免疫/IFN-γ）vs Th2（體液免疫/IL-4, IL-5）平衡
- CD8+ Cytotoxic T 細胞：殺死被感染/腫瘤細胞
- Regulatory T 細胞（Treg）：抑制過度免疫反應，維持免疫耐受
- Memory T 細胞：長期免疫記憶基礎

### 補體系統（Complement System）

補體系統有三條活化途徑：

| 途徑 | 活化方式 | 主要特色 |
|------|---------|---------|
| 經典途徑（Classical） | 抗原-抗體複合物（IgG/IgM） | 與後天性免疫連結 |
| 替代途徑（Alternative） | 病原表面直接活化 | 先天性免疫，無需抗體 |
| 凝集素途徑（Lectin/MBL） | MBL 結合病原表面甘露糖 | 先天性免疫 |

最終共同途徑→形成 MAC（Membrane Attack Complex）→ 溶解目標細胞。

## 二、過敏反應分型，Gell & Coombs 分類 (Hypersensitivity Reactions)

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
- 自體凝集 vs 緡錢排列：滴入生理食鹽水後，自體凝集不會消散（IMHA），緡錢排列會消散
- Coombs test 假陰性：使用類固醇治療後可能轉陰；需在開始免疫抑制治療前採樣
- IgE 檢測的限制：血清過敏原特異性 IgE（ASIS）的敏感度與特異度在犬約 60-80%，陽性不等於臨床相關
- 疫苗效價判讀：犬 CPV/CDV 抗體效價陽性代表有保護力，但效價值的高低不一定與保護程度成正比

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
  clinical_pearl: '懷疑免疫介導疾病（IMHA、IMTP）的時候，一定要在開始免疫抑制治療（prednisolone）之前把所有免疫學檢查抽完（Coombs test、ANA、血液抹片）。類固醇一打下去，這些檢查敏感度就大幅下降，常常變假陰性，確診機會就沒了。',
  common_mistakes: [
    'Coombs test 陰性就排除 IMHA，這個檢查敏感度只有 60-70%',
    '過敏原檢測 IgE 陽性直接當臨床過敏，要對照病史跟臨床表現',
    '忽略犬貓免疫球蛋白的物種差異，把犬的免疫學概念套到貓身上',
    '把「免疫缺陷」跟「免疫抑制」混在一起，前者先天、後者後天（藥物、疾病）',
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
    { type: 'journal', citation: 'Swann JW, et al. ACVIM consensus statement on the treatment of immune-mediated hemolytic anemia in dogs. J Vet Intern Med. 2019;33(3):1141-1172. doi:10.1111/jvim.15463.', relevance: 'IMHA 免疫機制與治療共識（修正 v1 誤標第一作者 Garden→實為 Swann JW；補真實 DOI）' },
  ],
  is_current: true,
  created_at: now,
};

/** 微生物學基礎，概念型 */
const contentMicrobiology: NodeContent = {
  id: 'CONTENT-CPATH-L1-004',
  node_id: 'CPATH-L1-004',
  version: 1,
  summary: '微生物學是感染症診斷的基底，涵蓋細菌、真菌、病毒、寄生蟲的分類跟致病機制。犬貓常見病原體的特性、抗微生物抗藥性（AMR）的趨勢，這兩塊不熟，臨床病理樣本判讀跟治療決策都會出狀況。',
  learning_objectives: [
    '依 Gram 染色、形態與需氧性分類常見獸醫細菌病原',
    '列舉犬貓常見的真菌感染（淺表性與深部系統性）及其診斷方法',
    '描述病毒的基本分類（DNA vs RNA、有/無套膜）與犬貓重要病毒',
    '說明抗微生物抗藥性（AMR）的機制及台灣的 MRSP/MRSA 現況',
    '解釋培養與藥敏試驗（C&S）在臨床決策中的角色',
  ],
  key_points: [
    'Gram 陽性球菌（Staphylococcus、Streptococcus、Enterococcus）是犬貓皮膚跟泌尿道感染最常見的病原',
    'Gram 陰性桿菌（E. coli、Pseudomonas、Proteus）在泌尿道跟耳道感染裡很重要',
    '犬皮膚主要病原是 S. pseudintermedius（不是 S. aureus），多重抗藥型是 MRSP',
    'Malassezia pachydermatis 是犬最常見的皮膚酵母菌，皮膚細胞學常常看到',
    '皮癬菌以 Microsporum canis 在犬貓最常見，有人畜共通潛力',
    '系統性真菌（Blastomyces、Histoplasma、Coccidioides）美國多，台灣以 Cryptococcus 為主',
    '抗生素用下去之前先採培養，這條規則記得就對了',
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
- 專性需氧菌：Pseudomonas（耳道感染的重要病原）
- 兼性厭氧菌：多數腸內菌（E. coli, Enterococcus）
- 專性厭氧菌：Clostridium, Bacteroides, Fusobacterium（深部傷口、腹腔感染）

### 犬貓常見細菌感染

#### 犬
- 皮膚：S. pseudintermedius（正常菌叢可在免疫力下降時致病）
- 泌尿道：E. coli（~50%）、Staphylococcus、Proteus、Enterococcus
- 耳道：S. pseudintermedius、Pseudomonas（慢性/抗藥性）、Proteus
- 呼吸道：Bordetella bronchiseptica、Mycoplasma cynos

#### 貓
- 泌尿道：E. coli（最常見）；但貓 < 10 歲的 FLUTD 多為無菌性
- 上呼吸道：Bordetella、Chlamydophila felis、Mycoplasma felis
- 皮膚：S. pseudintermedius（較犬少見）、Pasteurella multocida（咬傷）
- 膿胸：混合感染（Pasteurella + 厭氧菌常見）

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
- 無套膜病毒（CPV, FPV, FCV）：環境抵抗力強，需強效消毒劑
- 有套膜病毒（FeLV, FIV, CDV）：環境脆弱，常規消毒有效
- 反轉錄病毒（FeLV, FIV）：可整合宿主基因體，終身感染

## 四、抗微生物抗藥性 (Antimicrobial Resistance, AMR)

### 主要抗藥機制
- 酵素降解：β-lactamase 水解 Penicillins/Cephalosporins
- 標靶修改：mecA 基因→PBP2a→Methicillin 抗藥性（MRSP/MRSA）
- 外排幫浦：多重抗藥性 Pseudomonas
- 滲透障礙：外膜 Porin 突變→Gram (−) 菌的碳青黴烯類抗藥性

### 台灣獸醫重要抗藥菌

| 抗藥菌 | 意義 | 臨床影響 |
|--------|------|---------|
| MRSP (Methicillin-resistant S. pseudintermedius) | 犬皮膚/耳道最重要的抗藥菌 | 經驗性 Cephalosporins 無效，需 C&S 指導 |
| MRSA | 人源為主，犬貓為偶然宿主 | 人畜共通風險，需感染管控 |
| ESBL 產生菌 (E. coli, Klebsiella) | 泌尿道感染 | 第三代 Cephalosporins 無效 |
| Multidrug-resistant Pseudomonas | 慢性耳道/傷口感染 | 僅少數藥物有效（需藥敏） |

### 負責任抗生素使用原則
1. 盡可能在使用抗生素前採樣做培養（C&S）
2. 優先選擇窄效抗生素（Narrow-spectrum first）
3. 深層或反覆感染必須做 C&S
4. 遵循 ISCAID（International Society for Companion Animal Infectious Diseases）用藥指引
5. 避免對無菌性疾病經驗性使用抗生素（如貓下泌尿道疾病）

## 五、臨床爭議與知識空缺 (Controversies & Knowledge Gaps)

| 爭議議題 | 現況 | Evidence Level |
|---------|------|---------------|
| 犬淺表膿皮症的第一線抗生素選擇 | ISCAID 推薦 Cephalexin/Amoxicillin-Clavulanate，但 MRSP 盛行率上升可能需調整 | Level II |
| 貓無症狀菌尿（Subclinical bacteriuria）是否需要治療 | 目前共識傾向不治療，但糖尿病貓或免疫抑制貓是否為例外仍有爭議 | Level III |
| 系統性抗真菌藥物在貓 Cryptococcosis 的最佳療程 | Fluconazole 為首選，但停藥時機（抗原效價轉陰 vs 固定療程）無統一共識 | Level III |
| 台灣犬貓 AMR 監測數據 | 相較歐美，台灣缺乏系統性的伴侶動物 AMR 監測計畫 | Level IV |`,
  clinical_pearl: '細胞學看到球菌不要自動當成 Staphylococcus。犬皮膚的確是 S. pseudintermedius 最常見，但耳道深部的球菌可能是 Enterococcus（對 cephalosporins 天然抗藥），咬傷感染的桿菌通常是 Pasteurella（對 amoxicillin 敏感）。先看感染部位、推測可能菌種，才能選對經驗性抗生素。',
  common_mistakes: [
    '把犬皮膚感染預設為 S. aureus，犬主要是 S. pseudintermedius',
    '已經用抗生素 3-5 天才採培養，細菌被壓住，假陰性',
    '所有貓 FLUTD 都打抗生素，年輕貓多半是 idiopathic cystitis 不是感染',
    '忽略厭氧菌培養，深部傷口跟腹腔感染常有厭氧菌參與，要特殊培養條件',
  ],
  disease_data: null,
  diagnostic_data: null,
  procedure_data: null,
  visual_placeholders: [
    { position: 'Gram 染色分類表後', type: 'annotated_image', description: 'Gram 染色顯微鏡照片集：Gram(+) 球菌、Gram(−) 桿菌、混合感染' },
    { position: '抗藥菌表後', type: 'flowchart', description: '抗生素選擇流程圖（從經驗性→C&S 導向的決策樹）' },
  ],
  interactive_placeholders: [
    { position: '文末', type: 'interactive_quiz', description: '細菌分類、抗藥性機制與培養判讀情境題' },
  ],
  drug_api_links: [],
  references: [
    { type: 'textbook', citation: 'Greene CE, Sykes JE. Infectious Diseases of the Dog and Cat, 4th ed. Elsevier, 2012.', relevance: '犬貓感染性疾病與微生物學核心教科書' },
    { type: 'guideline', citation: 'Hillier A et al. "Guidelines for the diagnosis and antimicrobial therapy of canine superficial bacterial folliculitis (ISCAID)." Vet Dermatol 2014;25(3):163-e43.', relevance: '犬膿皮症抗生素使用指引' },
    { type: 'journal', citation: 'Weese JS et al. "ACVIM consensus statement on therapeutic antimicrobial use in animals and antimicrobial resistance." J Vet Intern Med 2015;29(2):487-498. doi:10.1111/jvim.12562', relevance: '伴侶動物抗微生物抗藥性與用藥共識（引用真偽稽核：Crossref 確認、補 DOI）' },
    { type: 'journal', citation: 'Moriello KA et al. "Diagnosis and treatment of dermatophytosis in dogs and cats: Clinical Consensus Guidelines." Vet Dermatol 2017;28(3):266-e68. doi:10.1111/vde.12440', relevance: '犬貓皮癬菌診治共識（引用真偽稽核：Crossref 確認、補 DOI）' },
  ],
  is_current: true,
  created_at: now,
};

/** 分析方法學與儀器原理，機轉型 */
const contentMethodology: NodeContent = {
  id: 'CONTENT-CPATH-L2-002',
  node_id: 'CPATH-L2-002',
  version: 1,
  summary: '分析階段靠多種儀器跟方法：血液學分析儀（阻抗法、雷射流式）、生化分析儀（濕式、乾式）、免疫分析（ELISA、側向流動）跟 POCT 設備。原理懂了，判讀時才知道哪些方法學限制跟干擾要注意。',
  learning_objectives: [
    '比較血液學分析儀的阻抗法與雷射流式細胞術原理及各自限制',
    '區分濕式化學與乾式化學分析儀的技術差異及適用場景',
    '說明 ELISA 與側向流動免疫層析（Lateral Flow Assay）的原理',
    '描述院內即時檢驗（POCT）與參考實驗室的方法學差異',
    '列舉常見的分析干擾因素（溶血、脂血、黃疸）對不同方法的影響',
  ],
  key_points: [
    '阻抗法（Coulter）：靠細胞體積分類，便宜但白血球亞型分不清楚',
    '雷射流式：多參數分析（大小、複雜度、螢光），5-part differential 更精確',
    '濕式化學：液態試劑加比色法或酵素法，項目多但要冷藏',
    '乾式化學：試劑預載在載片上，單片操作，院內用方便',
    '免疫分析：ELISA 定量（實驗室用），lateral flow 定性或半定量（院內快篩）',
    '方法驗證三要素：精密度、準確度、線性範圍',
  ],
  body: `# 分析方法學與儀器原理 (Analytical Methodology & Instrumentation)

## 一、血液學分析儀 (Hematology Analyzers)

### 阻抗法（Electrical Impedance / Coulter Principle）

阻抗法是最早且最廣泛使用的血球計數技術：
- 原理：血球通過微孔（aperture）時改變電阻→產生脈衝→脈衝大小與細胞體積成正比
- 應用：RBC/WBC 計數、MCV 測定、血小板計數
- 限制：
  - 僅依體積分類，WBC 只能做 3-part differential（小細胞/中等/大細胞）
  - 大血小板可能被計入 RBC，有核紅血球（nRBC）被計入 WBC
  - 貓血小板因易聚集→計數偏低（platelet clumping artifact）

### 雷射流式細胞術（Laser Flow Cytometry）

進階血液學分析儀（如 IDEXX ProCyte Dx、Sysmex XT-2000iV）採用：
- 原理：雷射照射單一排列通過的血球→偵測前向散射光（大小）、側向散射光（內部複雜度）、螢光（核酸含量）
- 應用：5-part WBC differential（嗜中性球、淋巴球、單核球、嗜酸性球、嗜鹼性球）
- 優勢：
  - 精確區分白血球亞型
  - 可偵測網狀紅血球（Reticulocyte，利用 RNA 螢光染色）
  - 有核紅血球（nRBC）偵測與校正
- 限制：成本高、仍需血液抹片確認異常 flag

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

- 原理：液態試劑與樣本在反應杯中混合→比色法（Spectrophotometry）或酵素法測定
- 偵測原理：單色光通過反應液→偵測吸光度（Absorbance）→Beer-Lambert 定律計算濃度
- 代表機型：Beckman AU 系列、Roche Cobas、Olympus（參考實驗室用）
- 優點：項目數多、線性範圍廣、試劑成本低
- 缺點：需液態試劑冷藏、樣本量較大、需定期校正

### 乾式化學（Dry Chemistry）

- 原理：試劑預載於多層薄膜載片（slide）→樣本滴入→擴散層過濾→反應層產色→反射光度法測定
- 代表機型：IDEXX Catalyst One/Dx、Fuji DRI-CHEM（院內 POCT 常見）
- 優點：無液態試劑、操作簡單、樣本量小（最低 ~0.1 mL）
- 缺點：單片成本高、線性範圍窄（極高/低值可能超範圍）、部分項目受溶血/脂血影響

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
- 直接/間接 ELISA：偵測抗原或抗體
- Sandwich ELISA：兩層抗體夾住目標抗原→高特異度
- 競爭 ELISA：樣本中的抗原與標記抗原競爭結合
- 應用：T4、Cortisol、cTnI、Progesterone 等定量檢測

### 側向流動免疫層析（Lateral Flow Assay / Immunochromatography）
- 原理：樣本沿硝酸纖維素膜毛細流動→遇標記抗體形成複合物→在 test line（固定抗體）被捕獲→顯色
- 應用：4Dx、FeLV/FIV 快篩、Heartworm Ag、CPV Ag（院內快篩的核心技術）
- 優點：10 分鐘、無需儀器、操作簡單
- 限制：定性（+/−），敏感度/特異度略低於實驗室 ELISA

### 化學發光免疫分析（CLIA/ECLIA）
- 原理：化學發光取代酵素呈色→偵測光子量
- 優勢：極高敏感度（pg/mL 等級）、寬動態範圍
- 應用：參考實驗室的 T4、TSH、Cortisol、cTnI 等

## 四、方法驗證與品管 (Method Validation & Quality Control)

### 方法驗證三要素

| 指標 | 定義 | 驗證方法 |
|------|------|---------|
| 精密度（Precision） | 重複測量的一致性 | 同一樣本重複 20 次→計算 CV% |
| 準確度（Accuracy） | 測量值接近真值的程度 | 與參考方法比對 |
| 線性範圍（Linearity） | 測量結果與濃度成正比的範圍 | 序列稀釋實驗 |

### Westgard 多規則品管
- 1-2s 警告規則：一個 QC 值超過 ±2 SD→警告，不一定拒絕
- 1-3s 拒絕規則：一個 QC 值超過 ±3 SD→拒絕此批次
- 2-2s 規則：連續兩個 QC 值超過同側 ±2 SD→系統性偏差
- R-4s 規則：一批中兩個 QC 值差距 > 4 SD→隨機誤差

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
  clinical_pearl: '院內乾式化學跑出來的值如果太離譜（像 BUN > 180 mg/dL），要當心已經超出線性範圍。用生理食鹽水手動稀釋（1:2）重測，結果再乘回去。線性範圍不確定就查儀器手冊，每個項目都有 reportable range。',
  common_mistakes: [
    '忽略 nRBC 對阻抗法 WBC 計數的假性升高，要看抹片手動校正',
    '院內 POCT 跟參考實驗室的結果直接比趨勢，方法學不同會有系統性偏差',
    '嚴重脂血的樣本還直接報生化結果，要離心去脂或換不受干擾的方法',
    '沒定期 QC 就報結果，院內分析儀每天或每批都要做',
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
    { type: 'journal', citation: 'Nabity MB, Lees GE, Boggess MM, Yerramilli M, et al. Symmetric Dimethylarginine Assay Validation, Stability, and Evaluation as a Marker for the Early Detection of Chronic Kidney Disease in Dogs. J Vet Intern Med. 2015;29(4):1036-1044. doi:10.1111/jvim.12835', relevance: 'SDMA assay 分析驗證與穩定性（方法學驗證實證）。Crossref 驗證真實，已取代原疑捏造之「2023 IRIS Canine GFR SDMA 共識」引用' },
  ],
  is_current: true,
  created_at: now,
};

/** 即時檢驗判讀，診斷型 */
const contentPOCT: NodeContent = {
  id: 'CONTENT-CPATH-L4-014',
  node_id: 'CPATH-L4-014',
  version: 2,
  summary: 'POCT 是院內快速拿到實驗室結果的工具，涵蓋血液學、生化、血氣、凝血、免疫快篩。設備優勢跟限制、跟參考實驗室結果的相關性差異，這兩點搞清楚才不會判讀失準。',
  learning_objectives: [
    '列舉獸醫院內常用的 POCT 設備類型及其適用檢查',
    '比較 POCT 與參考實驗室結果的相關性與常見差異',
    '辨識 POCT 結果中常見的干擾因素與假象（artifact）',
    '說明何時應將樣本送至參考實驗室而非僅依賴 POCT',
    '描述台灣獸醫院 POCT 設備的使用現況與可近性',
  ],
  key_points: [
    'IDEXX Catalyst One/Dx：乾式化學生化分析，院內最普及，17 分鐘出結果',
    'IDEXX ProCyte Dx：雷射流式 CBC 加 reticulocyte，5-part differential 取代手動分類',
    'Abaxis VetScan VS2：離心式乾式化學，12 項 rotor panel，操作簡單',
    'i-STAT（Abbott）：手持式血氣加電解質加乳酸，急診必備',
    'POCT 優點：快（5-17 分鐘）、樣本量小、即時支援決策',
    'POCT 限制：線性範圍窄、精密度略低、部分項目跟參考實驗室有系統性偏差',
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
- 急診/重症：即時血氣、電解質、乳酸、血糖、PCV/TP
- 術前評估：基本生化 + CBC 確認手術風險
- 初診篩檢：基本 panel 篩查主要器官功能
- 治療監測：糖尿病血糖曲線、ACTH stimulation test
- 傳染病篩檢：4Dx、FeLV/FIV、CPV Ag

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

1. POCT 結果與臨床不符：結果正常但臨床高度懷疑異常（或反之）
2. 邊界值需精確判讀：如 SDMA 14-20 μg/dL、T4 borderline
3. 需要 POCT 未涵蓋的項目：如蛋白電泳、特殊內分泌、凝血因子
4. 病例需要法律/保險文件：參考實驗室報告具法律效力
5. 品管疑慮：POCT QC 失敗或結果異常偏離
6. 需要病理醫師判讀：血液抹片、細胞學、骨髓

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
| 院內 CBC 分析儀在急診的 WBC differential 可信度 | 嚴重左移或異常細胞時自動分類不準確，是否應常規搭配抹片仍有討論 | Level III |

## 六、近期實證更新 (Recent Evidence)

[圖片:POCT 判讀決策軸——樣本品質檢查 → QC 狀態 → 與臨床對照 →（相符採信／不符外送參考實驗室）]

- **瞬感/連續血糖監測（FGM/CGM）走入糖尿病常規**：FreeStyle Libre 等已用於犬貓糖尿病監測。近期驗證（Del Baldo 2021）顯示與血糖整體相關性良好，但**低血糖區間準確度較差**、且間質葡萄糖對血糖有時間延遲——故疑似低血糖或關鍵決策仍須以血糖機確認，勿單憑感測器數值。
- **新一代院內分析儀需各自驗證、不可跨平台比趨勢**：新型 POCT 血液學分析儀（如 scil vCell 5）上市須先與參考方法比對驗證（Zelmer 2022）；不同平台間存在系統性偏差，**同一病患的趨勢追蹤應固定同一台機器**。
- **POCT 品管是獸醫弱點**：院內 POCT 普遍缺外部能力測試（EQA/PT）。ASVCP「容許總誤差（allowable total error）」血液學指引（2018 更新）提供品質框架，但日常內部 QC 與方法驗證的落實仍是常見缺口。
- **自動化判讀興起、但異常仍需人工確認**：自動尿沉渣分析儀（如 IDEXX SediVue Dx）等 AI 輔助 POCT 擴展中，研究顯示對管型等異常的偵測與人工鏡檢仍有落差（Vasilatis 2021）——**異常或被 flag 的檢體仍須抹片/病理醫師複核**，AI 為輔助而非取代（呼應臨床病理總覽節點）。
- **指引時效**：院內血液學品質以 **ASVCP allowable total error（2018）** 為現行框架；POCT 結果定位為篩檢與急診決策支援，確診與邊界值（如 SDMA 14-20 μg/dL）仍以參考實驗室為準。

> 臨床內容與藥物劑量需獸醫師依現行仿單與指引核對；本節點為 AI 接地生成，停於 review 狀態待 DVM 簽核。`,
  clinical_pearl: 'ProCyte Dx 跑出來貓血小板 < 100,000/μL 時，一定要去看抹片有沒有血小板聚集。步驟：抹片尾端（feathered edge）用 100x 油鏡，每個視野平均 8-15 個血小板就代表血小板數量正常（150,000-300,000/μL）。看到大團聚集就在報告上寫「血小板足量但有聚集，機器計數不可靠」。',
  common_mistakes: [
    '完全相信 POCT 結果不看抹片，異常 flag 出來時特別容易出錯',
    '不同 POCT 設備（Catalyst vs VetScan）的結果直接比趨勢',
    '忽略 POCT 設備定期 QC 維護，液態 QC 每天或每週都要做',
    '嚴重溶血或脂血的樣本還直接報所有 POCT 生化結果，要先辨識被干擾的項目',
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
      { finding: '生化 panel 全項正常', description: '所有項目均在參考區間內', significance: '主要器官功能（肝腎）正常，但要注意 POCT 的參考區間可能跟外送不同' },
      { finding: 'CBC 正常，無 flag', description: 'RBC/WBC/PLT 正常，無異常 flag', significance: '血液學沒明顯異常，但高風險病例還是建議搭配抹片' },
      { finding: '血氣正常', description: 'pH 7.35-7.45, pCO2 35-45, HCO3 18-24, Lactate < 2.5', significance: '酸鹼平衡正常、無組織低灌注' },
    ],
    abnormal_findings: [
      { finding: 'SDMA 邊界升高（15-20 μg/dL）', description: 'POCT SDMA 輕度升高', significance: '可能是早期腎功能下降，建議送參考實驗室確認，搭配 UPC、USG 一起評估' },
      { finding: '貓 PLT < 50,000（ProCyte）', description: '貓血小板計數極低但臨床無出血傾向', significance: '高度懷疑血小板聚集假象，必須去確認抹片' },
      { finding: 'Lactate > 4 mmol/L', description: '血氣分析乳酸明顯升高', significance: '組織低灌注、休克、敗血症指標，要緊急介入' },
      { finding: 'SNAP cPL 陽性', description: '犬胰臟脂肪酶免疫反應性升高', significance: '高度提示胰臟炎，搭配腹部超音波確認' },
    ],
    interpretation_guide: '看 POCT 的順序：確認樣本品質（溶血、脂血、凝塊）。確認 POCT 設備 QC 狀態。把結果跟臨床對比，不符就送參考實驗室確認。注意每個項目的方法學限制跟已知干擾。POCT 適合篩檢跟急診決策，確診還是參考外送結果。歷史趨勢追蹤要用同一個平台。',
    pitfalls: [
      '貓 EDTA 血小板聚集，PLT 假性偏低',
      '溶血樣本把 K⁺、AST、LDH 推高',
      '嚴重脂血干擾比色法項目',
      '超出線性範圍的極端值，結果可能不準',
      'SNAP test 判讀時間不對（太早或太晚）',
    ],
    sensitivity_specificity: 'IDEXX Catalyst 生化跟參考實驗室相關性：BUN r=0.98、Creatinine r=0.97、ALT r=0.95、Glucose r=0.99。ProCyte Dx CBC：WBC r=0.97、RBC r=0.99、PLT r=0.85（犬）、r=0.65（貓，受聚集影響）。SNAP 4Dx Heartworm Ag 敏感度 > 99%（≥ 5 成蟲）、特異度 > 99%。SNAP cPL 犬敏感度 95%、特異度 75%。',
    cost_benefit: 'POCT 單次成本高於外送（生化 panel 約 NT$800-1500、外送 NT$500-800），但即時性沒得替代。急診裡 POCT 的 turnaround time（5-17 分鐘 vs 外送 24-72 小時）直接影響決策時效。急診跟手術用 POCT，非急迫可外送節省成本。',
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
    { type: 'guideline', citation: 'Nabity MB, Harr KE, Camus MS, Flatland B. "ASVCP guidelines: Allowable total error hematology." Vet Clin Pathol. 2018;47(1):9-21. doi:10.1111/vcp.12583', relevance: 'ASVCP 血液學容許總誤差現行品質框架（修正 v1 誤標年/卷/作者）' },
    { type: 'journal', citation: 'Papasouliotis K, Cue S, Crawford E, Pinches M. "Comparison of white blood cell differential percentages determined by the in-house LaserCyte hematology analyzer and a manual method." Vet Clin Pathol. 2006;35(3):295-302. doi:10.1111/j.1939-165x.2006.tb00134.x', relevance: '院內 CBC 分析儀與手動分類比較研究' },
    { type: 'journal', citation: 'Zelmer KC, Bauer N, Moritz A. "Evaluation of the scil vCell 5, a novel laser- and impedance-based point-of-care hematology analyzer, for use in dogs and cats." J Vet Diagn Invest. 2022;34(3):504-517. doi:10.1177/10406387221083621', relevance: '新一代院內血液學分析儀驗證（須與參考方法比對）' },
    { type: 'journal', citation: 'Del Baldo F, Fracassi F, Pires J, Tardo AM. "Accuracy of a flash glucose monitoring system in cats and determination of the time lag between blood glucose and interstitial glucose concentrations." J Vet Intern Med. 2021;35(3):1279-1287. doi:10.1111/jvim.16122', relevance: '貓瞬感血糖監測準確度與時間延遲（低血糖區間較差）' },
    { type: 'journal', citation: 'Vasilatis DM, Cowgill LD, Farace G, Peterson S. "Comparison of IDEXX SediVue Dx urine sediment analyzer to manual microscopy for detection of casts in canine urine." J Vet Intern Med. 2021;35(3):1439-1447. doi:10.1111/jvim.16090', relevance: '自動尿沉渣分析儀 vs 人工鏡檢（異常仍需確認）；取代 v1 查無的 Tramuta 引用' },
  ],
  is_current: true,
  created_at: now,
};

/** 整合判讀與報告撰寫，概念型 */
const contentIntegratedReport: NodeContent = {
  id: 'CONTENT-CPATH-L5-001',
  node_id: 'CPATH-L5-001',
  version: 1,
  summary: '整合判讀是臨床病理學最上層的能力。要把 CBC、生化、尿液分析、細胞學那些結果編成一個連貫的臨床故事，抓出疾病模式，再寫成結構化的報告交給臨床醫師。',
  learning_objectives: [
    '將 CBC + 生化 + 尿液分析結果整合為連貫的臨床解讀',
    '辨識常見的疾病模式（肝臟模式、腎臟模式、DIC 模式等）',
    '撰寫結構化的臨床病理報告（findings → interpretation → recommendation）',
    '說明 Delta check（歷史比較）在監測中的應用',
    '演練以病例為基礎的整合判讀流程',
  ],
  key_points: [
    '整合判讀的核心是「看 pattern」，不是「看單一數值」',
    '肝臟模式：ALT/AST↑、ALP/GGT↑、Bilirubin↑、Albumin↓、BUN↓、Cholesterol↓、Glucose↓（肝衰竭）',
    '腎臟模式：BUN/Cr↑、SDMA↑、Phosphorus↑、USG < 1.030（犬）或 < 1.035（貓）、K 變化',
    'DIC 模式：PLT↓、PT/aPTT↑、Fibrinogen↓、D-dimer↑、抹片看到 schistocytes',
    '報告結構三段：Findings（客觀發現）、Interpretation（臨床解讀）、Recommendation（建議）',
    '實驗室結果要放回臨床情境裡看：同樣 Cr 2.5 mg/dL，脫水犬跟穩定腎病犬意義完全不同',
  ],
  body: `# 整合判讀與報告撰寫 (Integrated Interpretation & Report Writing)

## 一、整合判讀的思維框架 (Framework for Integrated Interpretation)

### 系統性判讀流程

整合判讀不是逐一報告每個異常值，而是將所有結果編織成一個臨床故事。建議的判讀流程：

Step 1：確認樣本品質
- 溶血？脂血？黃疸？凝塊？
- 採集時間（禁食？藥物？）
- 影響哪些項目的可靠性？

Step 2：概覽所有結果，找出 Pattern
- 不要逐項判讀。先快速掃過所有紅字，辨識哪個器官系統受影響
- 問自己：「這組異常指向同一個器官/疾病嗎？」

Step 3：建立鑑別診斷清單
- 根據 Pattern 列出可能的鑑別診斷
- 用其他結果（CBC、尿液、細胞學）排除或支持

Step 4：與臨床資訊整合
- 病史、理學檢查、影像學結果
- 實驗室結果支持或反駁臨床懷疑？

Step 5：撰寫報告與建議
- 提出最可能的診斷或需要再確認的方向

### 整合而非孤立

| 錯誤做法 | 正確做法 |
|---------|---------|
| 「ALT 升高，建議追蹤」 | 「ALT 大幅升高（1200 U/L, >10x URL）搭配 ALP 輕度升高（220 U/L, ~2x URL），此模式提示急性肝細胞損傷而非膽汁淤積。建議排除感染性/中毒性肝炎、缺氧性損傷。建議：肝炎 panel + 腹部超音波。」 |
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
| Schistocytes | 出現 | 血液抹片，紅血球被纖維蛋白絲切割 |
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
  [建議後續檢查或臨床處置]

四、備註（Notes）
  [樣本品質、方法學限制、任何需要注意的事項]
\`\`\`

### 有效溝通技巧

1. 量化程度：「ALT 大幅升高（10x URL）」而非只說「ALT 升高」
2. 說明意義：「此模式提示急性肝細胞損傷」而非只列出數字
3. 排序建議：將最重要/最緊急的建議放最前面
4. 明確不確定性：「不排除 X 的可能」而非含糊帶過
5. 使用臨床語言：與臨床醫師溝通時避免過度技術化

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
  clinical_pearl: '整合判讀最關鍵的一步是「先看全貌再看細節」。拿到報告不要馬上盯紅字，先問三個問題：這隻動物為什麼來看診？臨床醫師最擔心什麼？哪個器官系統最可能有問題？帶這個框架去看結果，pattern 會自己浮出來，不會卡在一堆數字裡。',
  common_mistakes: [
    '逐項報告每個異常值沒整合成疾病模式，「ALT 高、ALP 高、Bilirubin 高」應該整合成「膽汁淤積合併肝細胞損傷模式」',
    '忽略正常結果的診斷價值，像 CKD 病人 Phosphorus 還在正常範圍，代表可能還在 IRIS Stage 1-2',
    '沒考慮臨床情境就判讀，脫水犬的 BUN/Cr 升高可能是腎前性，補液後要重評估',
    '報告只有數字沒建議，臨床醫師需要的是可以操作的下一步',
  ],
  disease_data: null,
  diagnostic_data: null,
  procedure_data: null,
  visual_placeholders: [
    { position: '疾病模式表格後', type: 'mind_map', description: '常見疾病模式心智圖（肝臟/腎臟/DIC/溶血/發炎）' },
    { position: '報告撰寫結構後', type: 'comparison_table', description: '好報告 vs 差報告的對照範例' },
  ],
  interactive_placeholders: [
    { position: '文末', type: 'interactive_quiz', description: '病例式整合判讀練習：給定 CBC + 生化 + UA 結果，辨識 Pattern 並撰寫判讀' },
  ],
  drug_api_links: [],
  references: [
    { type: 'textbook', citation: 'Stockham SL, Scott MA. Fundamentals of Veterinary Clinical Pathology, 2nd ed. Blackwell Publishing, 2008.', relevance: '整合判讀與疾病模式辨識的核心教材' },
    { type: 'textbook', citation: 'Thrall MA et al. Veterinary Hematology and Clinical Chemistry, 2nd ed. Wiley-Blackwell, 2012.', relevance: '血液學與生化整合判讀參考' },
    { type: 'guideline', citation: 'IRIS (International Renal Interest Society). "IRIS Staging of CKD." iris-kidney.com, 2023.', relevance: 'CKD 分期整合判讀指引' },
    { type: 'journal', citation: 'Wiinberg B et al. "Thromboelastographic Evaluation of Hemostatic Function in Dogs with Disseminated Intravascular Coagulation." J Vet Intern Med. 2008;22(2):357-365. doi:10.1111/j.1939-1676.2008.0058.x', relevance: 'DIC 模式辨識與凝血整合判讀（引用真偽稽核：原誤植標題/22(4):826-832 → 更正為真實文 22(2):357-365 + DOI，Crossref 驗證）' },
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
