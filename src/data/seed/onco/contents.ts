import type { NodeContent } from '@/types/knowledge';

const now = '2026-02-15T00:00:00Z';

/** 犬淋巴瘤 — 疾病型 */
const contentCanineLymphoma: NodeContent = {
  id: 'CONTENT-ONCO-L3-001',
  node_id: 'ONCO-L3-001',
  version: 1,
  summary: '犬淋巴瘤是犬最常見的血液腫瘤，約占所有犬腫瘤的 7-24%。多中心型為最常見的解剖分型（約 80%），臨床表現為全身淋巴結腫大。WHO 分期 I-V 期加上 substage a（無全身症狀）/ b（有全身症狀）。以 CHOP-based 化療方案為治療主軸，B-cell 免疫表型預後優於 T-cell，CHOP 方案完全緩解率約 80-90%，中位存活期 12-14 個月。',
  learning_objectives: [
    '說明犬淋巴瘤的解剖分型與 WHO 分期系統',
    '描述 B-cell 與 T-cell 免疫表型對預後的影響',
    '列出 CHOP 方案的組成藥物與主要毒性',
    '執行淋巴瘤的完整分期檢查流程',
    '向飼主說明淋巴瘤的治療選項與預後',
  ],
  key_points: [
    '多中心型占 80%，表現為全身周邊淋巴結無痛性腫大',
    'WHO 分期：I（單一淋巴結）→ II（同側多淋巴結）→ III（全身淋巴結）→ IV（肝脾浸潤）→ V（骨髓/血液/非淋巴器官浸潤）',
    'B-cell 免疫表型預後較好：中位存活 12-14 個月（CHOP）；T-cell 約 6-9 個月',
    'CHOP 方案：Cyclophosphamide + Hydroxydaunorubicin (Doxorubicin) + Oncovin (Vincristine) + Prednisone',
    '完全緩解率 80-90%，但多數於 6-9 個月後復發',
    '高血鈣為 T-cell 淋巴瘤常見的副腫瘤症候群',
  ],
  body: `# 犬淋巴瘤 (Canine Lymphoma)

## 一、病理機制 (Pathophysiology)



### 概述
犬淋巴瘤（lymphoma / lymphosarcoma）是犬最常見的造血系統腫瘤，約占所有犬腫瘤的 7-24%。中年至老年犬好發（中位年齡 6-9 歲），無明顯性別偏好。Golden Retriever、Boxer、Bullmastiff、Basset Hound 等品種有較高發病率。

### 解剖分型
- **多中心型（Multicentric）**：約 80%，全身周邊淋巴結腫大
- **消化道型（Alimentary）**：約 5-7%，胃腸道浸潤
- **縱膈型（Mediastinal）**：約 5%，前縱膈腫塊
- **皮膚型（Cutaneous）**：約 5%，分為上皮親和性與非上皮親和性
- **結外型（Extranodal）**：眼、腎、神經系統等

### CHOP 化療方案
[藥物:Cyclophosphamide] + [藥物:Doxorubicin] + [藥物:Vincristine] + [藥物:Prednisone]

標準 CHOP 方案為 25 週、19 次療程，每週交替給藥。主要毒性包括：
- Doxorubicin：累積性心臟毒性（總劑量 > 180-240 mg/m²）
- Cyclophosphamide：出血性膀胱炎（無菌性）
- Vincristine：周邊神經毒性、便秘

## 二、臨床表現與診斷 (Clinical Signs & Diagnosis)

### WHO 臨床分期
[互動:WHO 分期互動圖表]

| 期別 | 定義 |
|------|------|
| I | 僅一個淋巴結（或單一結外部位）受侵犯 |
| II | 同側橫膈膜多個淋巴結受侵犯 |
| III | 全身性淋巴結侵犯 |
| IV | 肝臟和/或脾臟侵犯（± 第 I-III 期） |
| V | 骨髓浸潤、血液侵犯或非淋巴器官侵犯（± 第 I-IV 期） |

Substage：
- **a**：無全身症狀
- **b**：有全身症狀（體重減輕、發燒、食慾下降）

## 三、治療策略 (Treatment)

### 其他治療選項
- 單劑 Doxorubicin 方案：緩解率較低但較簡便
- 節拍式化療：低劑量口服藥物，適合飼主無法頻繁回診或經濟限制
- [藥物:Lomustine]（CCNU）：T-cell 型或復發型的救援方案
- [藥物:Prednisone] 單獨使用：中位存活僅 1-2 個月

[圖片:CHOP 方案 25 週用藥時程表]

## 四、併發症與監控 (Complications & Monitoring)

## 五、預後與預後因子 (Prognosis)

### 免疫表型與預後
免疫組織化學（IHC）或流式細胞儀分型：
- **B-cell**：約 60-70%，CD79a+/CD3-，CHOP 方案中位存活 12-14 個月
- **T-cell**：約 20-30%，CD3+/CD79a-，中位存活 6-9 個月，高血鈣發生率較高

## 六、人醫借鑒 (Translational Insights)

| 人醫工具/概念 | 獸醫應用潛力 | 現況 |
|-------------|-------------|------|
| CAR-T 細胞療法 | 犬 B 細胞淋巴瘤的細胞免疫治療 | 犬 CAR-T 試驗已啟動 |
| 腫瘤疫苗 | 犬黑色素瘤 DNA 疫苗（Oncept） | 犬黑色素瘤疫苗已 USDA 核准 |
| 光免疫療法（photoimmunotherapy） | 犬淺表腫瘤的免疫導引光動力治療 | 早期臨床試驗中 |
| 奈米藥物遞送 | 犬腫瘤局部高濃度化療——減少全身毒性 | 研究階段 |

## 七、臨床爭議與知識空缺 (Controversies & Knowledge Gaps)

| 爭議議題 | 現況 | Evidence Level |
|---------|------|---------------|
| 犬 MCT Grade II（Patnaik）的異質性 | 同一級別預後差異大——Kiupel 二級制是否更好？ | Level II |
| 犬骨肉瘤截肢+化療 vs 保肢+化療 | 保肢術感染/植入物失敗率高，長期存活是否等同 | Level II |
| 犬 HSA 化療（Doxorubicin ± DACTILi）的實際獲益 | MST 延長有限（~140 vs ~90 天），飼主生活品質考量 | Level I |
| 犬淋巴瘤「rescue」protocol 的選擇 | 多種 rescue 方案存在但無 head-to-head 比較 | Level III |`,
  clinical_pearl: '犬淋巴瘤的 FNA 細胞學通常即可獲得初步診斷——中大型淋巴球增多並取代正常淋巴結結構。但確認免疫表型（B vs T cell）對預後評估和治療選擇至關重要，建議同時進行流式細胞儀或免疫組織化學染色。\n\n【台灣流行病學】犬淋巴瘤在台灣為最常見的血液腫瘤之一，好發品種如金毛獵犬、拉布拉多在台灣飼養數量龐大。台灣獸醫腫瘤科近年發展迅速，CHOP 化療方案在主要動物醫院已可執行。流式細胞儀免疫分型在台灣部分實驗室已可提供服務。台灣飼主對化療的接受度逐漸提高，但費用仍為重要考量因素。',
  common_mistakes: [
    '未進行免疫分型即開始 CHOP 化療（T-cell 預後差，影響飼主決策）',
    '在開始化療前使用 corticosteroids（可能導致多重抗藥性）',
    '忽略分期檢查而僅依據淋巴結 FNA 決定治療',
    '將淋巴結反應性增生誤診為淋巴瘤（需注意細胞均質性）',
  ],
  disease_data: {
    signalment: '中年至老年犬（中位年齡 6-9 歲），無明顯性別偏好。好發品種：Golden Retriever、Boxer、Bullmastiff、Basset Hound、Scottish Terrier、Rottweiler。',
    etiology: '確切病因不明，可能涉及遺傳因素、環境暴露（除草劑 2,4-D）、免疫失調。不同於貓淋巴瘤，犬淋巴瘤與病毒感染（如 FeLV）無明確關聯。',
    pathogenesis: '淋巴細胞克隆性增殖 → 淋巴結結構破壞 → 全身淋巴組織浸潤 → 肝脾骨髓侵犯 → 免疫功能損害 → 副腫瘤症候群（高血鈣、貧血等）',
    clinical_signs: [
      { sign: '全身周邊淋巴結腫大', category: 'primary', description: '無痛性、對稱性腫大，下頷、肩前、腋下、腹股溝、膝窩淋巴結均可能受侵犯' },
      { sign: '精神食慾正常（substage a）', category: 'primary', description: '多數犬在早期（WHO III-IV a）仍維持正常活力和食慾' },
      { sign: '體重減輕', category: 'secondary', description: '晚期或 substage b，伴隨惡病質' },
      { sign: '多尿多渴', category: 'secondary', description: '可因高血鈣（T-cell 型副腫瘤）所致' },
      { sign: '呼吸困難', category: 'secondary', description: '縱膈型可導致胸腔積液或氣管壓迫' },
    ],
    staging: {
      system: 'WHO Clinical Staging for Canine Lymphoma',
      stages: [
        'Stage I：單一淋巴結侵犯',
        'Stage II：同側橫膈膜多個淋巴結侵犯',
        'Stage III：全身性淋巴結侵犯',
        'Stage IV：肝臟和/或脾臟侵犯',
        'Stage V：骨髓、血液或非淋巴器官侵犯',
      ],
    },
    differential_diagnosis: [
      { condition: '反應性淋巴結增生', key_differentiator: '細胞學見混合淋巴球群（小、中、大），非均質性中大型淋巴球' },
      { condition: '其他轉移性腫瘤的淋巴結侵犯', key_differentiator: '細胞學見非淋巴系異常細胞（上皮性或間質性）' },
      { condition: '感染性淋巴結炎', key_differentiator: '通常伴隨發燒、白血球升高、細胞學見中性球或巨噬細胞吞噬現象' },
      { condition: '多中心肥大細胞瘤', key_differentiator: '細胞學見嗜鹼性顆粒之圓形細胞' },
    ],
    diagnostic_workup: '1. 淋巴結 FNA 細胞學（首選）→ 2. 免疫分型（流式細胞儀或 IHC：B vs T cell）→ 3. CBC/BCS/血鈣 → 4. 腹部超音波（肝脾評估）→ 5. 胸腔 X 光（縱膈、肺轉移）→ 6. 骨髓抹片（Stage V 確認）',
    treatment_protocol: 'CHOP-based 多藥化療為標準方案。25 週 19 次治療。Cyclophosphamide 250 mg/m² PO、Doxorubicin 30 mg/m² IV、Vincristine 0.7 mg/m² IV、Prednisone 2 mg/kg PO 漸減。完全緩解率 80-90%。復發可使用 rescue protocol（DMAC 或 Lomustine）。',
    prognosis: 'B-cell CHOP：中位存活 12-14 個月，2 年存活率約 20%。T-cell CHOP：中位存活 6-9 個月。單劑 Doxorubicin：中位存活 8-10 個月。Prednisone alone：中位存活 1-2 個月。不治療：中位存活 4-6 週。',
    monitoring: '化療期間每次治療前進行 CBC（嗜中性球 > 2000/μL 方可給藥）。每月觸診淋巴結評估緩解狀態。每 2-3 個月追蹤腹部超音波。VCOG-CTCAE v2 評估化療副作用等級。',
    owner_communication: '淋巴瘤在犬腫瘤中對化療反應最好，多數犬在化療期間維持良好生活品質。治療目標為延長有品質的生存時間而非治癒。CHOP 方案需每週回診，費用需預先討論。化療藥物的安全處理與在家注意事項需詳細衛教。',
  },
  diagnostic_data: null,
  procedure_data: null,
  visual_placeholders: [
    { position: 'WHO 分期表格前', type: 'flowchart', description: 'WHO 臨床分期流程圖' },
    { position: 'CHOP 段落後', type: 'timeline', description: 'CHOP 25 週用藥時程圖' },
  ],
  interactive_placeholders: [
    { position: 'WHO 分期段落', type: 'interactive_staging', description: '輸入檢查數據自動判定 WHO 分期' },
  ],
  drug_api_links: ['Cyclophosphamide', 'Doxorubicin', 'Vincristine', 'Prednisone', 'Lomustine'],
  references: [
    { type: 'guideline', citation: 'Vail DM et al. ACVIM Small Animal Consensus Statement on Lymphoma in Dogs. J Vet Intern Med. 2019.', relevance: '犬淋巴瘤診斷治療共識指引' },
    { type: 'guideline', citation: 'VCOG — Veterinary Cooperative Oncology Group. Common Terminology Criteria for Adverse Events (VCOG-CTCAE) v2.', relevance: '化療副作用分級標準' },
    { type: 'textbook', citation: 'Withrow SJ, Vail DM, Page RL. Withrow & MacEwen\'s Small Animal Clinical Oncology, 6th ed. Elsevier, 2020.', relevance: '腫瘤科主要教科書' },
    { type: 'journal', citation: 'Garrett LD et al. Evaluation of a 6-month chemotherapy protocol with no maintenance therapy for dogs with lymphoma. J Vet Intern Med. 2002;16(6):704-709.', relevance: '犬淋巴瘤 CHOP 方案臨床研究' },
  ],
  is_current: true,
  created_at: now,
};

/** 腫瘤細胞學 — 診斷型 */
const contentTumorCytology: NodeContent = {
  id: 'CONTENT-ONCO-L4-001',
  node_id: 'ONCO-L4-001',
  version: 1,
  summary: '腫瘤細胞學是利用細針抽吸（FNA）取得腫塊細胞，經染色後顯微鏡下判讀的快速診斷工具。可在門診中即時執行，無需全身麻醉。透過辨識 round cell、epithelial cell 與 mesenchymal cell 三大型態，結合惡性度判斷標準（如核仁異常、核分裂指數等），可為後續組織病理和治療決策提供重要依據。',
  learning_objectives: [
    '執行正確的 FNA 技術並製作細胞學抹片',
    '說明 Diff-Quick 與 Wright-Giemsa 染色的適用時機',
    '運用 round cell / epithelial / mesenchymal 三分法判斷腫瘤起源',
    '列出細胞學上惡性度判斷的主要標準',
    '辨識常見腫瘤的典型細胞學特徵（淋巴瘤、MCT、黑色素瘤等）',
  ],
  key_points: [
    'FNA 使用 22-25G 針頭，aspiration 或 non-aspiration 技術皆可',
    'Diff-Quick 染色快速（5 分鐘內）、適合門診即時判讀',
    '三大型態分類：Round cell（淋巴瘤、MCT、組織球瘤等）、Epithelial cell（癌）、Mesenchymal cell（肉瘤）',
    '惡性度標準：核仁多且大且不規則、高 N:C 比、核分裂指數增加、核型異常（anisokaryosis）',
    'FNA 細胞學與組織病理的一致性約 70-90%，但無法評估浸潤深度與切緣',
  ],
  body: `# 腫瘤細胞學 (Tumor Cytology)

## 一、檢查原理與適應症 (Principles & Indications)



### 概述
細胞學是腫瘤診斷的第一線工具，具有快速、低侵入性、低成本的優點。大多數體表腫塊和可觸及的淋巴結均可在門診中進行 FNA 細胞學檢查。

### FNA 技術
### Aspiration 技術（抽吸法）
1. 22-25G 針頭接上 6-12 mL 注射器
2. 固定腫塊，針頭刺入後施加負壓
3. 在腫塊內多方向移動 3-4 次
4. 釋放負壓後拔出針頭
5. 將取得的檢體推吹至玻片上

### Non-aspiration 技術（穿刺法）
1. 22-25G 針頭不接注射器
2. 利用毛細作用收集細胞
3. 適用於血管豐富的腫塊（減少血液污染）

### 染色方法
- **Diff-Quick（Romanowsky 類）**：最常用，3 液浸泡各 5-10 秒，門診即可操作
- **Wright-Giemsa**：細胞形態更清晰，需較長染色時間
- **New Methylene Blue（NMB）**：快速濕片染色，適合初步篩檢

### 三大細胞型態
[圖片:三大細胞型態示意圖]

### Round Cell Tumors（圓形細胞腫瘤）
特徵：細胞分散排列（non-cohesive），圓形至卵形
- **淋巴瘤**：均質性中大型淋巴球，核仁明顯
- **肥大細胞瘤（MCT）**：胞質內嗜鹼性顆粒（紫色）
- **組織球瘤**：大型圓形細胞，灰藍色胞質
- **漿細胞瘤**：偏心核，核旁淡染帶（perinuclear halo）
- **傳染性性病腫瘤（TVT）**：胞質內空泡，台灣仍可見

### Epithelial Cell Tumors（上皮細胞腫瘤/癌）
特徵：細胞成簇排列（cohesive clusters），細胞間連接明顯
- 鱗狀細胞癌、腺癌、移行上皮細胞癌等

### Mesenchymal Cell Tumors（間質細胞腫瘤/肉瘤）
特徵：紡錘形細胞，分散或鬆散排列，細胞脫落率低
- 纖維肉瘤、血管肉瘤、注射處肉瘤（FISS）等

### 惡性度判斷標準
| 標準 | 描述 |
|------|------|
| Anisocytosis | 細胞大小不一致 |
| Anisokaryosis | 核大小不一致（最重要的惡性指標之一） |
| 高 N:C 比 | 核佔細胞面積比例增大 |
| 核仁異常 | 核仁多、大、形狀不規則 |
| 核分裂象 | 有絲分裂指數增加，尤其不正常核分裂 |
| 多核巨細胞 | 非發炎性背景下的多核細胞 |
| 胞質嗜鹼性增加 | 反映高蛋白合成活性 |

> 需 ≥ 3 項惡性標準同時存在方可懷疑惡性

[互動:細胞學練習題——辨識腫瘤型態]

## 二、判讀要點 (Interpretation)

## 三、常見陷阱 (Pitfalls)

## 四、人醫借鑒 (Translational Insights)

| 人醫工具/概念 | 獸醫應用潛力 | 現況 |
|-------------|-------------|------|
| 循環腫瘤 DNA（ctDNA）監測 | 犬化療反應/復發早期偵測 | 研究階段，人醫已商業化 |
| PET-CT 腫瘤分期 | 犬淋巴瘤/全身轉移的精確分期 | 少數獸醫機構可執行 |
| 全基因組定序（WGS/WES） | 犬腫瘤可行動突變鑑定→精準用藥 | 犬腫瘤 NGS panel 已可取得 |

## 五、臨床爭議與知識空缺 (Controversies & Knowledge Gaps)

| 爭議議題 | 現況 | Evidence Level |
|---------|------|---------------|
| 犬腫瘤 FNA vs 組織切片作為治療決策依據 | FNA 準確度因腫瘤類型差異大，何時需組織切片 | Level II |
| 犬腫瘤分期影像檢查的最低標準 | 三視圖 X 光 vs CT 的成本效益——何時升級 | Level III |`,
  clinical_pearl: '遇到任何體表腫塊，「先 FNA 再決定下一步」是腫瘤科的黃金法則。一支 25G 針頭和一片玻片可以在 10 分鐘內告訴你腫塊是 round cell、epithelial 還是 mesenchymal——這直接影響手術計畫（如 MCT 需要寬切緣 2-3 cm）。',
  common_mistakes: [
    '針頭在腫塊內停留時間過長或反覆穿刺導致過多血液污染',
    '抹片太厚導致細胞堆疊無法判讀',
    '僅憑一次 FNA 陰性結果就排除腫瘤（假陰性率 10-30%）',
    '將反應性淋巴結增生誤判為淋巴瘤（注意細胞群的均質性）',
  ],
  disease_data: null,
  diagnostic_data: {
    indication: [
      '任何新發現的體表腫塊或淋巴結腫大',
      '內臟腫塊在超音波引導下進行 FNA',
      '胸腔或腹腔積液的細胞學分析',
      '腫塊術前評估以決定手術計畫',
    ],
    contraindication: [
      '疑似嗜鉻細胞瘤（pheochromocytoma）：FNA 可誘發高血壓危象',
      '嚴重凝血障礙（血小板 < 40,000/μL）',
      '疑似血管肉瘤的脾臟腫塊（出血風險高，建議直接手術探查）',
    ],
    technique: '固定腫塊 → 22-25G 針頭刺入 → aspiration 或 non-aspiration 採樣 → 釋放負壓後拔針 → 檢體推吹至玻片 → 製作均勻抹片 → 風乾 → Diff-Quick 染色 → 顯微鏡判讀（4x 總覽 → 10x 定位 → 40-100x 細節）',
    normal_findings: [
      { finding: '正常淋巴結', description: '混合淋巴球群（小 75%、中 15%、大 5%）、少量漿細胞和巨噬細胞', significance: '排除淋巴瘤或轉移' },
      { finding: '脂肪瘤', description: '大量脂肪細胞（大型透明胞質），無異型性', significance: '良性腫瘤，通常僅需監測' },
    ],
    abnormal_findings: [
      { finding: '均質性中大型淋巴球增多', description: '> 50% 為中大型淋巴球，取代正常結構', significance: '高度懷疑淋巴瘤，需進一步免疫分型' },
      { finding: '嗜鹼性顆粒圓形細胞', description: '胞質充滿紫色嗜鹼性顆粒', significance: '肥大細胞瘤（MCT），Diff-Quick 染色效果最佳' },
      { finding: '成簇上皮樣細胞伴惡性標準', description: '黏附性強的細胞團伴核仁異常', significance: '上皮來源惡性腫瘤（癌），需組織病理確認分類' },
      { finding: '紡錘形細胞伴惡性標準', description: '梭形細胞，可見核型異常', significance: '間質來源腫瘤（肉瘤），細胞脫落率低，可能需要組織切片確診' },
    ],
    interpretation_guide: '1. 低倍鏡（4x）：評估抹片品質、細胞量、整體型態。2. 中倍鏡（10x）：辨識三大型態（round / epithelial / mesenchymal）。3. 高倍鏡（40-100x）：評估惡性度標準。4. 綜合判斷：結合臨床資訊給出初步診斷。',
    pitfalls: [
      '脂肪瘤的脂肪細胞可能被誤認為染色不佳的空白玻片',
      '低度分化 MCT 可能顆粒稀少，Diff-Quick 較 Wright-Giemsa 更易顯現顆粒',
      '肉瘤細胞脫落率低，FNA 可能僅獲得少量細胞',
      '發炎反應（特別是化膿性）可掩蓋底層腫瘤細胞',
    ],
    sensitivity_specificity: 'FNA 細胞學整體敏感度約 70-90%，特異度約 85-95%。Round cell tumors（如淋巴瘤、MCT）的 FNA 診斷率最高（> 90%），mesenchymal tumors 最低（約 60-70%）。',
    cost_benefit: '成本極低（針頭 + 玻片 + Diff-Quick 染液），門診即可執行，無需全身麻醉。作為腫瘤診斷第一線工具，可快速區分發炎 vs 腫瘤、良性 vs 惡性，指導後續治療決策。',
  },
  procedure_data: null,
  visual_placeholders: [
    { position: '三大細胞型態段落', type: 'comparison_table', description: 'Round vs Epithelial vs Mesenchymal 比較圖' },
    { position: '惡性度標準表格後', type: 'annotated_image', description: '細胞學惡性度標準標註圖' },
  ],
  interactive_placeholders: [
    { position: '判讀段落後', type: 'interactive_quiz', description: '細胞學圖片辨識練習' },
  ],
  drug_api_links: [],
  references: [
    { type: 'textbook', citation: 'Withrow SJ, Vail DM, Page RL. Withrow & MacEwen\'s Small Animal Clinical Oncology, 6th ed. Elsevier, 2020.', relevance: '腫瘤細胞學基礎章節' },
    { type: 'textbook', citation: 'Cowell RL, Tyler RD, Meinkoth JH, DeNicola DB. Diagnostic Cytology and Hematology of the Dog and Cat, 5th ed. Elsevier, 2020.', relevance: '獸醫細胞學主要參考教材' },
    { type: 'guideline', citation: 'VCOG — Veterinary Cooperative Oncology Group. Common Terminology Criteria for Adverse Events (VCOG-CTCAE) v2. Vet Comp Oncol. 2016;14(4):417-446.', relevance: '腫瘤評估標準化術語——細胞學報告規範基礎' },
    { type: 'journal', citation: 'Ghisleni G et al. Correlation between fine-needle aspiration cytology and histopathology in the evaluation of cutaneous and subcutaneous masses from dogs and cats. Vet Clin Pathol. 2006;35(1):24-30.', relevance: 'FNA 細胞學與組織病理一致性研究' },
  ],
  is_current: true,
  created_at: now,
};

/** 肥大細胞瘤 (MCT) — 疾病型 */
const contentMCT: NodeContent = {
  id: 'CONTENT-ONCO-L3-002',
  node_id: 'ONCO-L3-002',
  version: 1,
  summary: '犬肥大細胞瘤（Mast Cell Tumor, MCT）是犬皮膚最常見的惡性腫瘤，約占所有犬皮膚腫瘤的 16-21%。臨床表現多變，從單一小結節到多發性侵襲性腫塊皆可能。Kiupel 二級分級系統（低度 vs 高度）已取代 Patnaik 三級系統成為主流。治療以手術為首選，切緣需 2-3 cm lateral 與 1 fascial plane deep。c-KIT 突變檢測可指導標靶治療（Toceranib/Masitinib）的使用。',
  learning_objectives: [
    '比較 Patnaik 三級與 Kiupel 二級 MCT 分級系統',
    '描述 MCT 手術切緣的標準建議與切緣評估',
    '說明 c-KIT 突變對預後判斷與標靶治療選擇的意義',
    '列出 MCT 的完整分期檢查流程',
    '辨識 MCT 相關的副腫瘤症候群（組織胺釋放）',
  ],
  key_points: [
    '犬最常見的皮膚惡性腫瘤，約占所有皮膚腫瘤 16-21%',
    '好發品種：Boxer、Boston Terrier、Labrador、Golden Retriever、Pug、Bulldog',
    'Kiupel 二級分級（2011）：低度（low-grade）vs 高度（high-grade）——以有絲分裂指數、多核細胞、奇異核、核分裂異常為標準',
    '手術切緣標準：lateral ≥ 2 cm、deep ≥ 1 fascial plane',
    'c-KIT 突變（exon 11 最常見）：預後較差指標，同時為 TKI 標靶治療適應症',
    '組織胺釋放相關副作用：Darier sign（搓揉後局部紅腫）、胃潰瘍、低血壓',
  ],
  body: `# 肥大細胞瘤 (MCT)

## 一、病理機制 (Pathophysiology)



### 概述
犬肥大細胞瘤是犬皮膚最常見的惡性腫瘤。MCT 臨床表現極為多變，可模擬幾乎任何皮膚腫塊的外觀，因此「任何皮膚腫塊在證實之前都可能是 MCT」是腫瘤科的重要原則。

### 分期檢查
1. FNA 細胞學（初步診斷）
2. 區域淋巴結 FNA（即使觸診正常）
3. 腹部超音波（肝脾評估）
4. CBC/BCS/肝脾 FNA（如超音波異常）
5. 組織病理（切除後分級）
6. c-KIT 突變檢測（PCR）

## 二、臨床表現與診斷 (Clinical Signs & Diagnosis)

### 組織學分級
### Patnaik 三級系統（1984）
- Grade I：分化良好，局限於真皮
- Grade II：中度分化，浸潤至皮下（最常見，預後最難預測）
- Grade III：分化不良，高侵襲性

### Kiupel 二級系統（2011，目前主流）
- **低度（Low-grade）**：不符合以下任何標準
- **高度（High-grade）**：符合以下任一標準：
  - 有絲分裂指數 ≥ 7/10 HPF
  - ≥ 3 個多核細胞/10 HPF
  - ≥ 3 個奇異核細胞/10 HPF
  - 核分裂異常（karyomegaly）

## 三、治療策略 (Treatment)

### 治療
### 手術（首選）
- 切緣標準：lateral ≥ 2 cm、deep ≥ 1 fascial plane
- 切緣乾淨（clean margins）的低度 MCT 預後極佳
- 切緣不淨（dirty/close margins）：需考慮二次手術或輔助放療

### 輔助治療
- 放射治療：切緣不淨或無法再手術時
- 化療：高度 MCT 或轉移性：[藥物:Vinblastine] + [藥物:Prednisolone]（VBL-Pred protocol）
- 標靶治療（TKI）：
  - [藥物:Toceranib] (Palladia) 2.75 mg/kg PO QOD
  - [藥物:Masitinib] (Kinavet) 12.5 mg/kg PO SID
  - c-KIT 突變陽性者反應率較高

### 副腫瘤管理
- [藥物:Famotidine] 0.5-1 mg/kg PO BID（H2 blocker，預防胃潰瘍）
- [藥物:Diphenhydramine] 2-4 mg/kg PO BID（H1 blocker）

[圖片:MCT FNA 細胞學典型影像——嗜鹼性顆粒圓形細胞]

## 四、併發症與監控 (Complications & Monitoring)

## 五、預後與預後因子 (Prognosis)

## 六、人醫借鑒 (Translational Insights)

| 人醫工具/概念 | 獸醫應用潛力 | 現況 |
|-------------|-------------|------|
| CAR-T 細胞療法 | 犬 B 細胞淋巴瘤的細胞免疫治療 | 犬 CAR-T 試驗已啟動 |
| 腫瘤疫苗 | 犬黑色素瘤 DNA 疫苗（Oncept） | 犬黑色素瘤疫苗已 USDA 核准 |
| 光免疫療法（photoimmunotherapy） | 犬淺表腫瘤的免疫導引光動力治療 | 早期臨床試驗中 |
| 奈米藥物遞送 | 犬腫瘤局部高濃度化療——減少全身毒性 | 研究階段 |

## 七、臨床爭議與知識空缺 (Controversies & Knowledge Gaps)

| 爭議議題 | 現況 | Evidence Level |
|---------|------|---------------|
| 犬 MCT Grade II（Patnaik）的異質性 | 同一級別預後差異大——Kiupel 二級制是否更好？ | Level II |
| 犬骨肉瘤截肢+化療 vs 保肢+化療 | 保肢術感染/植入物失敗率高，長期存活是否等同 | Level II |
| 犬 HSA 化療（Doxorubicin ± DACTILi）的實際獲益 | MST 延長有限（~140 vs ~90 天），飼主生活品質考量 | Level I |
| 犬淋巴瘤「rescue」protocol 的選擇 | 多種 rescue 方案存在但無 head-to-head 比較 | Level III |`,
  clinical_pearl: 'MCT 的 FNA 細胞學診斷率極高（> 90%），因為肥大細胞的嗜鹼性顆粒在 Diff-Quick 染色下非常特徵性。但要注意：低度分化（high-grade）MCT 的顆粒可能稀少或難以辨識。另一個重要原則是「永遠不要忘記 FNA 區域淋巴結」——即使觸診大小正常，淋巴結轉移率仍可達 25-50%（尤其 Grade II/III 或 high-grade）。\n\n【台灣流行病學】肥大細胞瘤是台灣犬最常見的皮膚惡性腫瘤。拳師犬、拉布拉多、金毛獵犬、巴哥犬為好發品種，在台灣飼養數量均多。台灣亞熱帶氣候下犬隻戶外活動頻繁，皮膚腫塊的早期發現率有提升空間。c-KIT 突變檢測與 TKI 標靶治療（Toceranib/Masitinib）在台灣部分腫瘤專科已可提供。台灣臨床上體表腫塊的 FNA 細胞學篩檢應更積極推廣。',
  common_mistakes: [
    '手術切緣不足——MCT 需要 lateral ≥ 2 cm，許多一般外科手術僅切除 1 cm 導致局部復發',
    '未進行區域淋巴結 FNA 就完成分期——淋巴結轉移是重要的預後因子',
    '僅憑腫塊外觀判斷良惡性而未做 FNA——MCT 可模擬任何皮膚腫塊的外觀',
    '術前搓揉 MCT 導致大量組織胺釋放（Darier sign → 低血壓、胃潰瘍風險）',
    '對所有 MCT 均開始化療——低度 MCT 切緣乾淨時預後極佳，通常不需輔助治療',
  ],
  disease_data: {
    signalment: '中老年犬（中位年齡 8-9 歲），好發品種：Boxer、Boston Terrier、Labrador、Golden Retriever、Pug、Bulldog、Shar-Pei、Weimaraner。Boxer 和 Pug 的 MCT 通常為低度。Shar-Pei 常見多發性且可能較具侵襲性。',
    etiology: '確切病因不明。c-KIT 受體（stem cell factor receptor）的功能獲得性突變（gain-of-function mutation）導致細胞增殖失控，是 MCT 發病的重要分子機轉。約 30-50% 的 MCT 帶有 c-KIT 突變（exon 11 最常見）。',
    pathogenesis: 'c-KIT 突變 → SCF 受體持續活化 → 下游 MAPK/PI3K 信號通路異常 → 肥大細胞克隆性增殖 → 局部浸潤（真皮→皮下→深層組織）→ 區域淋巴結轉移 → 遠端轉移（肝、脾、骨髓）。組織胺、肝素、蛋白酶等顆粒內容物釋放 → 局部水腫/紅腫（Darier sign）、胃酸分泌增加（胃潰瘍）、凝血異常。',
    clinical_signs: [
      { sign: '皮膚/皮下腫塊', category: 'primary', description: '單發或多發，外觀多變（粉紅色結節、紅腫團塊、潰瘍性病灶），可位於任何部位' },
      { sign: 'Darier sign', category: 'primary', description: '搓揉腫塊後局部紅腫充血（組織胺釋放），MCT 的特徵性表現' },
      { sign: '周圍組織水腫', category: 'secondary', description: '腫塊周圍紅腫、衛星病灶，反映組織胺和血管活性物質釋放' },
      { sign: '胃腸道症狀', category: 'secondary', description: '嘔吐、黑便（組織胺刺激胃酸分泌 → 胃潰瘍）' },
      { sign: '全身性低血壓', category: 'secondary', description: '大量組織胺釋放（去顆粒化）可導致過敏樣反應' },
    ],
    staging: {
      system: 'WHO Clinical Staging for Canine MCT',
      stages: [
        'Stage 0：不完全切除的單一腫塊，無區域淋巴結轉移',
        'Stage I：單一皮膚腫塊，無區域淋巴結轉移',
        'Stage II：單一皮膚腫塊，有區域淋巴結轉移',
        'Stage III：多發性皮膚腫塊或大型浸潤性腫塊 ± 淋巴結轉移',
        'Stage IV：遠端轉移（包括血液、骨髓轉移）',
      ],
    },
    differential_diagnosis: [
      { condition: '組織球瘤', key_differentiator: '好發幼犬，FNA 見大型圓形細胞但無嗜鹼性顆粒，多數自發消退' },
      { condition: '皮膚淋巴瘤', key_differentiator: 'FNA 見均質中大型淋巴球，免疫分型為 T-cell 居多' },
      { condition: '脂肪瘤', key_differentiator: 'FNA 見脂肪細胞，觸診柔軟可移動，MCT 有時外觀類似但 FNA 可輕易區分' },
      { condition: '漿細胞瘤', key_differentiator: 'FNA 見偏心核細胞伴核旁淡染帶，無嗜鹼性顆粒' },
    ],
    diagnostic_workup: '1. FNA 細胞學（高診斷率 > 90%，見嗜鹼性顆粒圓形細胞）→ 2. 區域淋巴結 FNA → 3. 腹部超音波（肝脾評估）→ 4. CBC + buffy coat 評估 → 5. 手術切除送組織病理分級（Kiupel 二級）→ 6. c-KIT 突變 PCR → 7. Ki-67 增殖指數（可選擇性加測）',
    treatment_protocol: '手術為首選：lateral ≥ 2 cm + deep ≥ 1 fascial plane。切緣乾淨的低度 MCT：定期追蹤即可。切緣不淨：二次手術或輔助放療。高度 MCT 或轉移：VBL-Pred 化療（Vinblastine 2 mg/m² IV weekly × 4 次後 q2 weeks + Prednisolone 2 mg/kg PO 漸減）或 TKI（Toceranib 2.75 mg/kg PO QOD 或 Masitinib 12.5 mg/kg PO SID）。所有 MCT 均建議抗組織胺：H1 blocker + H2 blocker。',
    prognosis: 'Kiupel 低度 + 切緣乾淨：中位存活 > 2 年，治癒率高。Kiupel 高度：中位存活 4-6 個月（有治療），局部復發和轉移率高。c-KIT 突變陽性：預後較差但可作為 TKI 標靶治療適應症。Patnaik Grade II：最難預測（約 50% 表現良好，50% 可能復發/轉移）。',
    monitoring: '術後 1 個月回診評估傷口和局部復發。低度 MCT：每 3 個月觸診 + 區域淋巴結檢查，共 2 年。高度 MCT：每月觸診 + 每 3 個月腹超和淋巴結 FNA。化療期間每次治療前 CBC。TKI 治療：每 2-4 週 CBC/BCS 監測藥物副作用。',
    owner_communication: 'MCT 是犬最常見的皮膚惡性腫瘤，但好消息是大多數低度 MCT 經過適當手術後預後非常好。手術切緣充足是治癒的關鍵。高度 MCT 較具侵襲性，可能需要化療或標靶治療。建議飼主養成定期觸摸全身皮膚的習慣，發現任何新腫塊時盡早 FNA 評估。',
  },
  diagnostic_data: null,
  procedure_data: null,
  visual_placeholders: [
    { position: '分級系統段落後', type: 'comparison_table', description: 'Patnaik vs Kiupel 分級系統比較' },
    { position: '治療段落後', type: 'flowchart', description: 'MCT 治療決策流程圖' },
  ],
  interactive_placeholders: [],
  drug_api_links: ['Vinblastine', 'Prednisolone', 'Toceranib', 'Masitinib', 'Famotidine', 'Diphenhydramine'],
  references: [
    { type: 'journal', citation: 'Kiupel M et al. Proposal of a 2-tier histologic grading system for canine cutaneous mast cell tumors to more accurately predict biological behavior. Vet Pathol. 2011;48(1):147-155.', relevance: 'Kiupel 二級分級系統原始文獻' },
    { type: 'textbook', citation: 'Withrow SJ, Vail DM, Page RL. Withrow & MacEwen\'s Small Animal Clinical Oncology, 6th ed. Elsevier, 2020.', relevance: 'MCT 完整章節' },
    { type: 'journal', citation: 'London CA et al. Multi-center, placebo-controlled, double-blind, randomized study of oral toceranib phosphate (SU11654), a receptor tyrosine kinase inhibitor, for the treatment of dogs with recurrent mast cell tumor. Clin Cancer Res. 2009;15(11):3856-3865.', relevance: 'Toceranib 治療 MCT 的臨床試驗' },
    { type: 'guideline', citation: 'VCOG — Veterinary Cooperative Oncology Group. Common Terminology Criteria for Adverse Events (VCOG-CTCAE) v2. Vet Comp Oncol. 2016;14(4):417-446.', relevance: 'MCT 化療副作用分級標準' },
  ],
  is_current: true,
  created_at: now,
};

/** 骨肉瘤 — 疾病型 */
const contentOsteosarcoma: NodeContent = {
  id: 'CONTENT-ONCO-L3-003',
  node_id: 'ONCO-L3-003',
  version: 1,
  summary: '犬骨肉瘤（Osteosarcoma, OSA）是犬最常見的原發性骨腫瘤，約占所有骨腫瘤的 85%。好發於大型至巨型犬的長骨幹骺端（metaphysis），尤其是前肢遠端橈骨和近端肱骨。OSA 為高度惡性腫瘤，確診時已有 > 90% 的微轉移（主要至肺）。標準治療為截肢 + 輔助化療，中位存活約 10-12 個月。僅截肢而不化療，中位存活約 4-5 個月。',
  learning_objectives: [
    '描述犬骨肉瘤的好發部位與「遠離肘關節、靠近膝關節」的規律',
    '說明 OSA 影像學特徵與組織病理確診的必要性',
    '比較截肢 vs 保肢手術的適應症與預後差異',
    '列出輔助化療方案及其對存活的影響',
    '評估 OSA 的預後因子並進行飼主溝通',
  ],
  key_points: [
    '犬最常見的原發性骨腫瘤（約 85%），高度惡性',
    '好發大型/巨型犬（> 25 kg）：Great Dane、Irish Wolfhound、Rottweiler、GSD、Greyhound',
    '長骨好發部位規律：「Away from the elbow, toward the knee」——遠端橈骨 > 近端肱骨 > 遠端股骨/近端脛骨',
    '確診時 > 90% 已有肺微轉移（胸腔 X 光可能正常）',
    '標準治療：截肢 + 化療（Carboplatin 或 Doxorubicin），中位存活 10-12 個月',
    '單獨截肢無化療：中位存活 4-5 個月（因肺轉移）',
    'ALP 升高為重要的不良預後因子',
  ],
  body: `# 骨肉瘤 (Osteosarcoma)

## 一、病理機制 (Pathophysiology)



### 概述
犬骨肉瘤是最常見也最具侵襲性的原發性骨腫瘤。其特徵為骨母細胞產生骨樣基質（osteoid）。犬 OSA 的生物學行為與人青少年 OSA 高度相似，犬被視為重要的比較腫瘤學模型。

### 好發部位
- **附肢骨（75%）**：長骨幹骺端
  - 前肢遠端橈骨（最常見）
  - 前肢近端肱骨
  - 後肢遠端股骨
  - 後肢近端脛骨
  - 記憶口訣：「Away from the elbow, toward the knee」
- **中軸骨（25%）**：下頷骨、上頷骨、脊椎、顱骨、骨盆

### 影像學特徵
- X 光：侵襲性骨溶解（osteolysis）+ 新骨增生（periosteal reaction）
  - 混合型溶骨/增骨模式最常見
  - Codman triangle（骨膜三角）：骨膜被抬起的特徵性表現
  - 不跨越關節面（與感染性骨髓炎鑑別）
- 胸腔 X 光（三面投射）：評估肺轉移（確診時可見結節約 10-15%）
- CT：更敏感的肺轉移偵測、手術計畫

## 二、臨床表現與診斷 (Clinical Signs & Diagnosis)

## 三、治療策略 (Treatment)

### 治療
### 截肢 + 輔助化療（標準治療）
- 截肢：根治局部疼痛，多數犬在 1-2 週內適應三肢行走
- 化療：[藥物:Carboplatin] 300 mg/m² IV q3 weeks × 4-6 次（最常用）
- 替代：[藥物:Doxorubicin] 30 mg/m² IV q3 weeks × 5 次
- 中位存活：10-12 個月，1 年存活率約 40-50%

### 保肢手術（Limb-sparing surgery）
- 適應症：遠端橈骨 OSA（最成功部位），飼主拒絕截肢
- 腫瘤切除 + 骨缺損重建（骨移植/金屬植入物）
- 併發症率較高（感染約 30-50%）
- 預後與截肢 + 化療相當

### 姑息性治療
- 姑息性放射治療：2-3 次大分割放射可有效控制疼痛
- 疼痛管理：NSAIDs + Gabapentin + Tramadol
- [藥物:Bisphosphonates]（Pamidronate/Zoledronate）：減緩骨溶解與疼痛

[圖片:OSA 典型 X 光影像——骨溶解伴骨膜反應]

## 四、併發症與監控 (Complications & Monitoring)

## 五、預後與預後因子 (Prognosis)

## 六、人醫借鑒 (Translational Insights)

| 人醫工具/概念 | 獸醫應用潛力 | 現況 |
|-------------|-------------|------|
| CAR-T 細胞療法 | 犬 B 細胞淋巴瘤的細胞免疫治療 | 犬 CAR-T 試驗已啟動 |
| 腫瘤疫苗 | 犬黑色素瘤 DNA 疫苗（Oncept） | 犬黑色素瘤疫苗已 USDA 核准 |
| 光免疫療法（photoimmunotherapy） | 犬淺表腫瘤的免疫導引光動力治療 | 早期臨床試驗中 |
| 奈米藥物遞送 | 犬腫瘤局部高濃度化療——減少全身毒性 | 研究階段 |

## 七、臨床爭議與知識空缺 (Controversies & Knowledge Gaps)

| 爭議議題 | 現況 | Evidence Level |
|---------|------|---------------|
| 犬 MCT Grade II（Patnaik）的異質性 | 同一級別預後差異大——Kiupel 二級制是否更好？ | Level II |
| 犬骨肉瘤截肢+化療 vs 保肢+化療 | 保肢術感染/植入物失敗率高，長期存活是否等同 | Level II |
| 犬 HSA 化療（Doxorubicin ± DACTILi）的實際獲益 | MST 延長有限（~140 vs ~90 天），飼主生活品質考量 | Level I |
| 犬淋巴瘤「rescue」protocol 的選擇 | 多種 rescue 方案存在但無 head-to-head 比較 | Level III |`,
  clinical_pearl: '「任何大型犬的跛行伴長骨溶蝕性病灶，在證實之前都要假設是骨肉瘤。」確診必須靠組織病理——但要注意骨活檢可能增加病理性骨折風險，因此建議同時安排截肢或保肢手術。FNA 對 OSA 的診斷率較低（約 50-60%）。另一個重要觀念：即使胸腔 X 光正常，確診時 > 90% 的犬已有微轉移，這就是為什麼截肢不搭配化療的中位存活僅 4-5 個月。\n\n【台灣流行病學】犬骨肉瘤在台灣以大型犬好發，金毛獵犬、羅威納、德國牧羊犬為高風險品種。台灣大型犬飼養數量雖低於歐美但逐年增加，骨肉瘤病例亦隨之上升。截肢手術在台灣飼主接受度相對較低（文化因素），因此術前溝通與三腳犬生活品質的衛教格外重要。Carboplatin 輔助化療在台灣主要動物醫院已可執行。',
  common_mistakes: [
    '僅依賴 X 光即確診 OSA 而未做組織病理（真菌性骨髓炎的 X 光表現可與 OSA 極為相似）',
    '未告知飼主化療的必要性——截肢不搭配化療中位存活僅 4-5 個月',
    '因「捨不得截肢」而延誤治療——多數大型犬截肢後適應良好',
    '忽略 ALP 作為預後因子——ALP 持續升高為不良預後指標',
    '胸腔 X 光僅拍兩面——OSA 分期需要三面投射（VD + 雙側 lateral）以提高肺轉移偵測率',
  ],
  disease_data: {
    signalment: '好發大型至巨型犬（> 25 kg），中位年齡 7-8 歲。好發品種：Great Dane、Irish Wolfhound、Rottweiler、GSD、Greyhound、Saint Bernard、Doberman、Golden Retriever。雄性略多於雌性。絕育犬發病率可能高於未絕育犬。',
    etiology: '確切病因不明。風險因子：體重（與長骨承重壓力正相關）、品種遺傳因素、之前骨折部位金屬植入物（罕見）、骨梗塞。與人 OSA 不同，犬 OSA 未發現與 retinoblastoma 基因的一致關聯。',
    pathogenesis: '骨母細胞惡性轉化 → 產生骨樣基質（osteoid，定義 OSA 的必要條件）→ 局部骨破壞（骨溶解）+ 反應性新骨增生 → 腫瘤侵犯骨皮質與周圍軟組織 → 病理性骨折風險 → 早期血行性轉移（主要至肺，其次骨、肝、淋巴結）。',
    clinical_signs: [
      { sign: '進行性跛行', category: 'primary', description: '慢性漸進性承重跛行，NSAIDs 初期可能短暫緩解但逐漸失效' },
      { sign: '長骨腫脹', category: 'primary', description: '觸診患肢長骨可感覺硬性腫脹，壓迫疼痛' },
      { sign: '骨疼痛', category: 'primary', description: '觸壓患處劇烈疼痛，晚期可有持續性疼痛' },
      { sign: '病理性骨折', category: 'secondary', description: '腫瘤弱化骨結構後自發性骨折，約 3% 就診原因' },
      { sign: '呼吸症狀', category: 'secondary', description: '晚期肺轉移可致咳嗽、呼吸困難（就診時少見）' },
    ],
    staging: {
      system: 'TNM Staging for Canine Appendicular OSA',
      stages: [
        'Stage I：低度組織學分級（G1），無轉移（T1-2 N0 M0）',
        'Stage IIA：高度組織學分級（G2），腫瘤未超出骨皮質（T1 N0 M0）',
        'Stage IIB：高度組織學分級，腫瘤超出骨皮質（T2 N0 M0）',
        'Stage III：任何分級，有遠端轉移（任何 T/N，M1）',
      ],
    },
    differential_diagnosis: [
      { condition: '真菌性骨髓炎（Coccidioidomycosis/Blastomycosis）', key_differentiator: 'X 光極為相似，但可能跨關節面，血清真菌學檢測陽性，骨活檢見真菌' },
      { condition: '細菌性骨髓炎', key_differentiator: '可能有發燒、白血球升高，X 光見骨膜反應但溶骨較少，培養陽性' },
      { condition: '其他原發性骨腫瘤（軟骨肉瘤、纖維肉瘤）', key_differentiator: '組織病理鑑別：無 osteoid 產生，生物學行為不同' },
      { condition: '轉移性骨腫瘤', key_differentiator: '多灶性溶骨病灶，已知原發腫瘤病史' },
    ],
    diagnostic_workup: '1. 理學檢查（觸診患肢腫脹壓痛）→ 2. 患肢 X 光（溶骨/增骨混合病灶、Codman triangle）→ 3. 胸腔 X 光三面投射（肺轉移篩檢）→ 4. CBC/BCS（ALP 為重要預後指標）→ 5. 骨活檢或切除後組織病理確診 → 6. CT（可選：更精確評估肺轉移和腫瘤範圍、保肢手術計畫）',
    treatment_protocol: '標準治療：截肢 + 輔助化療。化療首選 Carboplatin 300 mg/m² IV q3 weeks × 4-6 次，替代 Doxorubicin 30 mg/m² IV q3 weeks × 5 次，或 alternating Carboplatin/Doxorubicin。保肢手術：遠端橈骨 OSA 為最佳適應症。姑息性治療：放射治療（如 3 × 8-10 Gy）+ 疼痛管理。Bisphosphonates（Pamidronate 1-2 mg/kg IV q4 weeks）可輔助止痛。',
    prognosis: '截肢 + 化療：中位存活 10-12 個月，1 年存活率 40-50%，2 年存活率 15-20%。單獨截肢：中位存活 4-5 個月。姑息性治療：中位存活 2-4 個月。不良預後因子：ALP 升高、骨腫瘤體積大、近端肱骨位置、組織學分級高、確診時已見肺轉移。',
    monitoring: '化療期間每次治療前 CBC。術後每 2-3 個月胸腔 X 光監測肺轉移。每 3 個月監測 ALP。每次回診觸診截肢處和全身淋巴結。保肢手術：額外監測植入物穩定性和感染徵兆。',
    owner_communication: '骨肉瘤是犬最常見且最具侵襲性的骨腫瘤。截肢雖然聽起來可怕，但多數大型犬在截肢後 1-2 週內適應良好，生活品質恢復。化療對延長存活至關重要——截肢搭配化療的存活期約為單獨截肢的 2-3 倍。治療目標是提供有品質的生活時間。需誠實告知飼主即使採取積極治療，大多數犬仍會在 1-2 年內因肺轉移而離世。',
  },
  diagnostic_data: null,
  procedure_data: null,
  visual_placeholders: [
    { position: '好發部位段落後', type: 'annotated_image', description: '犬骨肉瘤好發長骨部位標示圖' },
    { position: '影像學段落後', type: 'comparison_table', description: 'OSA vs 真菌性骨髓炎 X 光鑑別表' },
  ],
  interactive_placeholders: [],
  drug_api_links: ['Carboplatin', 'Doxorubicin', 'Gabapentin', 'Tramadol'],
  references: [
    { type: 'textbook', citation: 'Withrow SJ, Vail DM, Page RL. Withrow & MacEwen\'s Small Animal Clinical Oncology, 6th ed. Elsevier, 2020.', relevance: 'OSA 完整章節' },
    { type: 'journal', citation: 'Selmic LE et al. Comparison of carboplatin and doxorubicin-based chemotherapy protocols in 470 dogs after amputation for treatment of appendicular osteosarcoma. J Vet Intern Med. 2014;28(2):554-563.', relevance: '化療方案比較大型研究' },
    { type: 'journal', citation: 'Szewczyk M et al. What do we know about canine osteosarcoma treatment? Vet Res Commun. 2015;39(1):61-67.', relevance: 'OSA 治療綜合回顧' },
    { type: 'guideline', citation: 'AAHA Oncology Guidelines for Dogs and Cats. J Am Anim Hosp Assoc. 2016;52(4):181-204.', relevance: 'AAHA 腫瘤科指引——OSA 診斷與治療建議' },
  ],
  is_current: true,
  created_at: now,
};

/** 血管肉瘤 (HSA) — 疾病型 */
const contentHSA: NodeContent = {
  id: 'CONTENT-ONCO-L3-004',
  node_id: 'ONCO-L3-004',
  version: 1,
  summary: '犬血管肉瘤（Hemangiosarcoma, HSA）是起源於血管內皮細胞的高度惡性腫瘤，好發於脾臟、右心耳和肝臟。German Shepherd 和 Golden Retriever 為最高風險品種。臨床表現常為急性腹腔內出血（脾臟 HSA 破裂）或心包積液（心臟 HSA），確診時多已有廣泛轉移。即使採取積極治療（脾臟切除 + 化療），中位存活僅約 4-6 個月。',
  learning_objectives: [
    '列出 HSA 的三大好發內臟部位及其各自臨床表現',
    '描述脾臟腫塊破裂伴急性血腹的緊急處置流程',
    '說明脾臟腫塊的 2/3 規律與血管肉瘤的關聯',
    '比較手術 + 化療 vs 單獨手術的預後差異',
    '辨識心臟 HSA 導致心包積液的臨床特徵',
  ],
  key_points: [
    '起源於血管內皮細胞，高度惡性，早期且廣泛的血行性轉移',
    '三大好發部位：脾臟（50%）、右心耳（25%）、肝臟（5-15%）',
    '好發品種：German Shepherd、Golden Retriever、Labrador。中位年齡 9-12 歲',
    '脾臟腫塊的 2/3 規律：脾臟腫塊約 2/3 為惡性，惡性腫塊中約 2/3 為 HSA',
    '急性表現：脾臟 HSA 破裂 → 血腹 → 急性虛脫（常見急診就診模式）',
    '標準治療：脾臟切除 + Doxorubicin 化療，中位存活 4-6 個月',
    '單獨脾臟切除無化療：中位存活 1-3 個月',
  ],
  body: `# 血管肉瘤 (Hemangiosarcoma)

## 一、病理機制 (Pathophysiology)



### 概述
犬血管肉瘤（HSA）是一種起源於血管內皮細胞的侵襲性惡性腫瘤。由於腫瘤細胞保留了血管內皮的特性，HSA 易形成血竇和血管腔，使其具有極高的出血和轉移傾向。

### 好發部位
### 脾臟 HSA（約 50%）
- 最常見的內臟 HSA
- 常以急性腹腔內出血（血腹）為首次臨床表現
- 脾臟腫塊的「2/3 規律」

### 心臟 HSA（約 25%）
- 好發右心耳（right auricular appendage）
- 導致心包積液 → 心包填塞
- 主要症狀：急性虛脫、運動不耐、腹水

### 肝臟 HSA（5-15%）
- 肝臟腫塊或彌漫性浸潤
- 可導致腹腔內出血

### 皮膚/皮下 HSA
- 皮膚型預後最好（局部切除可能治癒）
- 皮下型生物學行為介於皮膚型與內臟型之間

### 急診處置：脾臟 HSA 破裂
1. 快速評估（ABC）：蒼白黏膜、心搏過速、弱脈
2. 穩定：靜脈輸液（crystalloid + colloid）± 輸血
3. 腹部快速超音波（AFAST）：確認腹腔積液
4. 腹腔穿刺：PCV > 25% 高度提示內臟出血
5. 穩定後手術探查 + 脾臟切除
6. 組織病理確認

## 二、臨床表現與診斷 (Clinical Signs & Diagnosis)

## 三、治療策略 (Treatment)

### 治療
- **脾臟切除 + 化療**：[藥物:Doxorubicin] 30 mg/m² IV q3 weeks × 5-6 次
- 替代方案：Doxorubicin + [藥物:Cyclophosphamide] + [藥物:Vincristine] (VAC protocol)
- 節拍式化療：[藥物:Cyclophosphamide] 低劑量口服 + [藥物:Piroxicam]
- 心臟 HSA：心包切除（pericardectomy）± 化療

[圖片:脾臟 HSA 超音波與外觀影像]

## 四、併發症與監控 (Complications & Monitoring)

## 五、預後與預後因子 (Prognosis)

## 六、人醫借鑒 (Translational Insights)

| 人醫工具/概念 | 獸醫應用潛力 | 現況 |
|-------------|-------------|------|
| CAR-T 細胞療法 | 犬 B 細胞淋巴瘤的細胞免疫治療 | 犬 CAR-T 試驗已啟動 |
| 腫瘤疫苗 | 犬黑色素瘤 DNA 疫苗（Oncept） | 犬黑色素瘤疫苗已 USDA 核准 |
| 光免疫療法（photoimmunotherapy） | 犬淺表腫瘤的免疫導引光動力治療 | 早期臨床試驗中 |
| 奈米藥物遞送 | 犬腫瘤局部高濃度化療——減少全身毒性 | 研究階段 |

## 七、臨床爭議與知識空缺 (Controversies & Knowledge Gaps)

| 爭議議題 | 現況 | Evidence Level |
|---------|------|---------------|
| 犬 MCT Grade II（Patnaik）的異質性 | 同一級別預後差異大——Kiupel 二級制是否更好？ | Level II |
| 犬骨肉瘤截肢+化療 vs 保肢+化療 | 保肢術感染/植入物失敗率高，長期存活是否等同 | Level II |
| 犬 HSA 化療（Doxorubicin ± DACTILi）的實際獲益 | MST 延長有限（~140 vs ~90 天），飼主生活品質考量 | Level I |
| 犬淋巴瘤「rescue」protocol 的選擇 | 多種 rescue 方案存在但無 head-to-head 比較 | Level III |`,
  clinical_pearl: '脾臟 HSA 的典型就診模式是「老年 Golden Retriever 或 GSD 突然虛脫倒地、黏膜蒼白」——這是脾臟 HSA 破裂導致急性血腹的典型表現。急診處置的第一步是穩定（輸液、輸血），而非立即衝進手術室。AFAST 加上腹腔穿刺液 PCV 是快速確認血腹最實用的工具。重要的是在手術前就與飼主討論 HSA 的可能性和預後，因為即使手術成功，後續治療決策仍需建立在正確的預後認知上。\n\n【台灣流行病學】血管肉瘤在台灣以金毛獵犬與德國牧羊犬為最好發品種，此二品種在台灣飼養數量大。台灣獸醫腹部超音波篩檢普及，脾臟腫塊常在例行健檢時發現，有助於早期診斷。台灣犬隻血庫資源有限，HSA 急性出血病例的輸血需求為臨床挑戰。Doxorubicin 化療在台灣主要腫瘤專科已可執行，但飼主對 HSA 的預後認知仍需加強。',
  common_mistakes: [
    '未在術前與飼主充分討論 HSA 的可能性與預後——術後才告知「可能是血管肉瘤」使飼主措手不及',
    '脾臟腫塊 FNA 嘗試——血管性腫塊 FNA 出血風險高且診斷率低，建議直接手術探查',
    '脾臟切除後未送組織病理——約 1/3 的脾臟腫塊為良性（血腫），確認病理對後續決策至關重要',
    '忽略心臟 HSA 作為心包積液的鑑別診斷——老年大型犬的心包積液最常見原因是 HSA',
    '對皮膚/皮下型 HSA 採取與內臟型相同的悲觀預後——皮膚型 HSA 手術切除後預後顯著較好',
  ],
  disease_data: {
    signalment: '好發大型犬，中位年齡 9-12 歲。最高風險品種：German Shepherd Dog、Golden Retriever、Labrador Retriever。其他好發品種：Flat-Coated Retriever、Boxer、Bernese Mountain Dog。雄性可能略多。',
    etiology: '確切病因不明。血管內皮細胞惡性轉化，可能涉及遺傳因素（品種偏好強烈）和環境因素（紫外線暴露與皮膚型相關）。研究發現 VEGF/VEGFR 及 PDGF 信號通路在 HSA 發生中扮演重要角色。',
    pathogenesis: '血管內皮細胞惡性增殖 → 形成異常血管腔和血竇 → 腫瘤血管脆弱易破裂 → 反覆出血與血腫形成 → 急性大出血（破裂至腹腔或心包腔）。同時，血管內皮來源使腫瘤細胞與血液直接接觸 → 極早期且廣泛的血行性轉移（肺、肝、腦、骨、大網膜）。DIC（瀰漫性血管內凝血）常見。',
    clinical_signs: [
      { sign: '急性虛脫', category: 'primary', description: '脾臟 HSA 破裂致急性血腹：突然無力倒地、黏膜蒼白、心搏過速、弱脈' },
      { sign: '間歇性虛弱', category: 'primary', description: '反覆小量出血與自行止血，飼主描述為「昨天很虛弱但今天又好了」' },
      { sign: '腹部膨大', category: 'primary', description: '腹腔積液（血腹）或脾腫' },
      { sign: '心包積液/心包填塞', category: 'secondary', description: '心臟 HSA：頸靜脈怒張、脈搏消失（pulsus paradoxus）、心音低沉' },
      { sign: '貧血', category: 'secondary', description: '慢性失血或 DIC 導致的再生性或非再生性貧血' },
    ],
    staging: {
      system: 'Modified WHO Staging for Canine Splenic HSA',
      stages: [
        'Stage I：原發腫瘤局限（< 5 cm），無破裂，無轉移',
        'Stage II：破裂腫瘤伴局部出血，或腫瘤 > 5 cm 但無遠端轉移',
        'Stage III：有遠端轉移（肝、肺、大網膜等）',
      ],
    },
    differential_diagnosis: [
      { condition: '脾臟血腫/結節性增生', key_differentiator: '良性，組織病理確認，約占脾臟腫塊的 1/3' },
      { condition: '脾臟淋巴瘤', key_differentiator: '脾臟瀰漫性腫大而非局灶性腫塊，FNA 可見淋巴瘤細胞' },
      { condition: '特發性心包積液', key_differentiator: '心包積液細胞學為反應性間皮細胞，心超未見右心耳腫塊' },
      { condition: '心基底腫瘤（Chemodectoma）', key_differentiator: '好發短頭犬種，心超見心基底腫塊而非右心耳' },
    ],
    diagnostic_workup: '1. 急診評估（AFAST、腹腔穿刺 PCV）→ 2. 穩定（輸液/輸血）→ 3. CBC/BCS/凝血（常見貧血、血小板減少、DIC）→ 4. 腹部超音波（脾臟腫塊、肝臟轉移、腹水）→ 5. 心臟超音波（排除心臟 HSA、心包積液）→ 6. 胸腔 X 光三面投射 → 7. 手術探查 + 脾臟切除 → 8. 組織病理確診',
    treatment_protocol: '脾臟 HSA：脾臟切除 + 化療。首選 Doxorubicin 30 mg/m² IV q3 weeks × 5-6 次。替代：VAC protocol（Vincristine + Doxorubicin + Cyclophosphamide）。節拍式化療：低劑量 Cyclophosphamide 10-15 mg/m²/day PO + Piroxicam 0.3 mg/kg PO SID。心臟 HSA：心包切除（pericardectomy）± 右心耳切除（若可行）+ 化療。皮膚型：局部廣泛切除 ± 化療。',
    prognosis: '內臟 HSA 預後不良。脾臟切除 + 化療：中位存活 4-6 個月，1 年存活率 < 10%。單獨脾臟切除無化療：中位存活 1-3 個月。心臟 HSA：中位存活 1-4 個月（有治療）。Stage I（未破裂、無轉移）預後較好：中位存活可達 8-12 個月。皮膚型：切緣乾淨手術後中位存活 > 12 個月。',
    monitoring: '化療期間每次治療前 CBC（Doxorubicin 骨髓抑制）。累積劑量監測（Doxorubicin 心臟毒性：總劑量 > 180-240 mg/m²）。每 2-3 個月腹部超音波和胸腔 X 光監測轉移。心臟超音波追蹤心功能。',
    owner_communication: 'HSA 是犬最具侵襲性的腫瘤之一，確診時多已有微轉移。即使脾臟切除手術成功，化療的效果也有限。治療目標是延長有品質的生命時間。脾臟切除後大多數犬在 1-2 天內恢復良好，化療期間多數犬維持良好生活品質。需誠實告知飼主中位存活約 4-6 個月，讓飼主在充分資訊下做決定。',
  },
  diagnostic_data: null,
  procedure_data: null,
  visual_placeholders: [
    { position: '急診處置段落後', type: 'flowchart', description: '脾臟 HSA 破裂急診處置流程圖' },
    { position: '好發部位段落後', type: 'annotated_image', description: 'HSA 三大內臟好發部位示意圖' },
  ],
  interactive_placeholders: [],
  drug_api_links: ['Doxorubicin', 'Cyclophosphamide', 'Vincristine', 'Piroxicam'],
  references: [
    { type: 'journal', citation: 'Thamm DH. Hemangiosarcoma. Vet Clin North Am Small Anim Pract. 2020;50(5):1093-1109.', relevance: 'HSA 最新綜合回顧' },
    { type: 'textbook', citation: 'Withrow SJ, Vail DM, Page RL. Withrow & MacEwen\'s Small Animal Clinical Oncology, 6th ed. Elsevier, 2020.', relevance: 'HSA 完整章節' },
    { type: 'journal', citation: 'Wendelburg KM et al. Survival time of dogs with splenic hemangiosarcoma treated by splenectomy with or without adjuvant chemotherapy. J Am Vet Med Assoc. 2015;247(4):393-403.', relevance: '脾臟 HSA 預後數據' },
    { type: 'guideline', citation: 'AAHA Oncology Guidelines for Dogs and Cats. J Am Anim Hosp Assoc. 2016;52(4):181-204.', relevance: 'AAHA 腫瘤科指引——HSA 管理建議' },
  ],
  is_current: true,
  created_at: now,
};

/** 口腔黑色素瘤 — 疾病型 */
const contentOralMelanoma: NodeContent = {
  id: 'CONTENT-ONCO-L3-005',
  node_id: 'ONCO-L3-005',
  version: 1,
  summary: '犬口腔黑色素瘤（Oral Melanoma）是犬口腔最常見的惡性腫瘤。無論色素沉著程度如何，口腔黑色素瘤均視為惡性。高度局部侵襲性（常侵犯骨組織）且轉移率高（肺、區域淋巴結）。治療以積極手術切除為首選，輔以化療或免疫治療。犬黑色素瘤疫苗（Oncept）為首個獲 USDA 批准的獸醫治療性腫瘤疫苗。',
  learning_objectives: [
    '說明犬口腔黑色素瘤的 WHO 臨床分期系統',
    '描述口腔黑色素瘤的典型臨床表現與好發部位',
    '比較手術 ± 放射治療 ± 免疫治療的效果',
    '解釋犬黑色素瘤疫苗（Oncept）的作用機轉與適應症',
    '列出影響口腔黑色素瘤預後的關鍵因子',
  ],
  key_points: [
    '犬口腔最常見的惡性腫瘤，好發小型犬（尤其深色素品種）',
    '無論色素沉著程度如何，口腔部位的黑色素瘤一律視為惡性（不同於皮膚型）',
    'WHO 分期以腫瘤最大直徑為基準：I（< 2 cm）、II（2-4 cm）、III（> 4 cm 或淋巴結轉移）、IV（遠端轉移）',
    '高度局部侵襲性，常侵犯下頷骨或上頷骨骨組織',
    '治療首選：積極手術切除（部分下頷骨/上頷骨切除）+ 輔助治療',
    'Oncept 黑色素瘤疫苗：人 tyrosinase DNA 疫苗，打破免疫耐受',
    '腫瘤大小為最重要的預後因子：< 2 cm 中位存活 > 12 個月；> 4 cm 中位存活 < 6 個月',
  ],
  body: `# 口腔黑色素瘤 (Oral Melanoma)

## 一、病理機制 (Pathophysiology)



### 概述
犬口腔黑色素瘤是犬口腔最常見的惡性腫瘤，約占所有犬口腔腫瘤的 30-40%。與皮膚黑色素瘤不同，口腔黑色素瘤無論組織學表現均視為惡性，具有高度局部侵襲性和轉移潛力。

### 好發部位與特徵
- 口腔內任何部位：牙齦（最常見）、唇黏膜、舌、硬顎、扁桃腺
- 外觀：可為色素性（黑色/棕色）或無色素性（amelanotic，粉紅色）
- 無色素性占約 1/3，可能被誤認為其他腫瘤

## 二、臨床表現與診斷 (Clinical Signs & Diagnosis)

### WHO 臨床分期
| 期別 | 定義 |
|------|------|
| I | 腫瘤最大直徑 < 2 cm，無轉移 |
| II | 腫瘤最大直徑 2-4 cm，無轉移 |
| III | 腫瘤最大直徑 > 4 cm 和/或有區域淋巴結轉移 |
| IV | 有遠端轉移 |

## 三、治療策略 (Treatment)

### 治療
### 手術（首選）
- 積極切緣（≥ 1-2 cm）
- 常需要部分下頷骨切除（mandibulectomy）或上頷骨切除（maxillectomy）
- 多數犬術後功能恢復良好（進食、飲水）

### 放射治療
- 術後輔助或無法手術時的姑息治療
- 粗分割放射：4 × 8-9 Gy，每週一次
- 黑色素瘤對大劑量分割放射反應較好

### 免疫治療
- [藥物:Oncept] 犬黑色素瘤疫苗：人 tyrosinase DNA 疫苗
  - 機轉：引發對黑色素細胞特異抗原的免疫反應
  - 療程：每 2 週注射 × 4 次，之後每 6 個月追加
  - 適應症：WHO Stage II-III，局部控制良好後輔助使用

### 化療
- 反應率有限（< 20-30%）
- [藥物:Carboplatin] 或 [藥物:Melphalan] 為常用方案

[圖片:口腔黑色素瘤色素性與無色素性臨床照片對比]

## 四、併發症與監控 (Complications & Monitoring)

## 五、預後與預後因子 (Prognosis)

## 六、人醫借鑒 (Translational Insights)

| 人醫工具/概念 | 獸醫應用潛力 | 現況 |
|-------------|-------------|------|
| CAR-T 細胞療法 | 犬 B 細胞淋巴瘤的細胞免疫治療 | 犬 CAR-T 試驗已啟動 |
| 腫瘤疫苗 | 犬黑色素瘤 DNA 疫苗（Oncept） | 犬黑色素瘤疫苗已 USDA 核准 |
| 光免疫療法（photoimmunotherapy） | 犬淺表腫瘤的免疫導引光動力治療 | 早期臨床試驗中 |
| 奈米藥物遞送 | 犬腫瘤局部高濃度化療——減少全身毒性 | 研究階段 |

## 七、臨床爭議與知識空缺 (Controversies & Knowledge Gaps)

| 爭議議題 | 現況 | Evidence Level |
|---------|------|---------------|
| 犬 MCT Grade II（Patnaik）的異質性 | 同一級別預後差異大——Kiupel 二級制是否更好？ | Level II |
| 犬骨肉瘤截肢+化療 vs 保肢+化療 | 保肢術感染/植入物失敗率高，長期存活是否等同 | Level II |
| 犬 HSA 化療（Doxorubicin ± DACTILi）的實際獲益 | MST 延長有限（~140 vs ~90 天），飼主生活品質考量 | Level I |
| 犬淋巴瘤「rescue」protocol 的選擇 | 多種 rescue 方案存在但無 head-to-head 比較 | Level III |`,
  clinical_pearl: '口腔黑色素瘤的兩大陷阱：(1) 約 1/3 為無色素性（amelanotic），外觀為粉紅色，容易被誤認為良性增生或其他口腔腫瘤——任何口腔腫塊都應做 FNA 或活檢。(2) 口腔黑色素瘤常侵犯骨組織，手術前一定要拍 X 光或 CT 評估骨侵犯程度，否則切緣可能不足。術前 CT 對手術計畫極為重要。\n\n【台灣流行病學】口腔黑色素瘤在台灣犬隻中為常見的口腔惡性腫瘤，好發於中老年小型犬，台灣常見的迷你型犬如貴賓犬、雪納瑞亦有報告。台灣飼主常在犬隻進食困難或口臭加重時才就醫，此時腫瘤多已較大，因此推廣定期口腔檢查有助於早期發現。Oncept 黑色素瘤疫苗在台灣取得管道有限，但放射治療在部分教學醫院已可提供。',
  common_mistakes: [
    '將無色素性口腔黑色素瘤誤認為良性增生而延誤診斷',
    '手術切緣不足——口腔黑色素瘤常浸潤深層骨組織，需考慮骨切除',
    '未進行區域淋巴結（下頷/咽後淋巴結）FNA 評估',
    '以皮膚黑色素瘤的預後類比口腔黑色素瘤——口腔型預後顯著較差',
    '忽略術前影像評估骨侵犯——未拍攝頭顱 X 光或 CT 就安排手術',
  ],
  disease_data: {
    signalment: '中老年犬（中位年齡 10-12 歲）。好發品種：Scottish Terrier、Cocker Spaniel、Golden Retriever、Poodle、Chow Chow、Dachshund。小型犬和口腔色素沉著較深的品種風險較高。雄性可能略多於雌性。',
    etiology: '確切病因不明。口腔黑色素細胞的惡性轉化可能與慢性刺激、遺傳易感性相關。BRAF 突變在犬口腔黑色素瘤中的角色正在研究中。',
    pathogenesis: '口腔黑色素細胞惡性增殖 → 局部浸潤（黏膜下層 → 骨膜 → 骨組織）→ 區域淋巴結轉移（下頷淋巴結、咽後淋巴結）→ 遠端血行性轉移（肺為主，其次肝、腦）。無色素性黑色素瘤的生物學行為可能更具侵襲性。',
    clinical_signs: [
      { sign: '口腔腫塊', category: 'primary', description: '牙齦或口腔黏膜上的色素性（黑色/棕色）或無色素性（粉紅色）腫塊' },
      { sign: '口臭', category: 'primary', description: '腫瘤壞死或繼發感染導致的嚴重口臭' },
      { sign: '流涎/口腔出血', category: 'primary', description: '腫瘤表面潰瘍導致口腔出血和過度流涎' },
      { sign: '進食困難', category: 'secondary', description: '大型腫瘤影響咀嚼和吞嚥' },
      { sign: '面部腫脹', category: 'secondary', description: '腫瘤侵犯骨組織導致面部不對稱腫脹' },
    ],
    staging: {
      system: 'WHO Clinical Staging for Canine Oral Melanoma',
      stages: [
        'Stage I：腫瘤最大直徑 < 2 cm，無淋巴結或遠端轉移',
        'Stage II：腫瘤最大直徑 2-4 cm，無淋巴結或遠端轉移',
        'Stage III：腫瘤最大直徑 > 4 cm 和/或有區域淋巴結轉移',
        'Stage IV：有遠端轉移（肺、肝等）',
      ],
    },
    differential_diagnosis: [
      { condition: '口腔鱗狀細胞癌', key_differentiator: '常見於牙齦前端（吻側），X 光見骨溶解但組織學為鱗狀上皮，局部侵襲性高但轉移率較低' },
      { condition: '口腔纖維肉瘤', key_differentiator: '較少色素沉著，組織學見紡錘形細胞，局部侵襲性高但轉移率較黑色素瘤低' },
      { condition: '牙齦增生（epulis）', key_differentiator: '多為良性，生長緩慢，FNA 或活檢可鑑別' },
      { condition: '棘皮瘤性棘狀瘤（Acanthomatous ameloblastoma）', key_differentiator: '局部侵襲骨組織但不轉移，手術切除後預後極佳' },
    ],
    diagnostic_workup: '1. 口腔檢查（腫塊大小、位置、是否固定於骨）→ 2. FNA 細胞學或楔形活檢 → 3. 區域淋巴結 FNA → 4. 頭顱 X 光或 CT（評估骨侵犯範圍——手術計畫必需）→ 5. 胸腔 X 光三面投射 → 6. 腹部超音波 → 7. CBC/BCS',
    treatment_protocol: '手術為首選：mandibulectomy/maxillectomy 確保切緣乾淨。術後輔助：粗分割放射治療 4 × 8-9 Gy q1 week（切緣不淨或無法手術時）。Oncept 黑色素瘤疫苗：局部控制良好後，每 2 週 × 4 次，之後每 6 個月追加（WHO Stage II-III）。化療效果有限：Carboplatin 300 mg/m² IV q3 weeks 或 Melphalan 可考慮。',
    prognosis: 'WHO Stage I（< 2 cm）+ 手術切緣乾淨：中位存活 > 12-17 個月。Stage II（2-4 cm）：中位存活 5-6 個月。Stage III（> 4 cm 或淋巴結轉移）：中位存活 3 個月。Stage IV：中位存活 < 3 個月。Oncept 疫苗在 Stage II-III 可能延長存活至 12 個月以上（部分研究）。無色素性可能較具侵襲性。',
    monitoring: '術後 2 週回診評估傷口。每月口腔檢查和區域淋巴結觸診。每 2-3 個月胸腔 X 光監測肺轉移。Oncept 療程每 6 個月追加。注意口腔功能（進食、飲水能力）。',
    owner_communication: '口腔黑色素瘤是犬口腔最常見的惡性腫瘤。手術是最重要的治療——部分下頷骨或上頷骨切除聽起來可怕，但大多數犬術後功能恢復良好，仍可正常進食。腫瘤大小是最重要的預後因子，因此早期發現和治療至關重要。建議飼主定期檢查犬的口腔。黑色素瘤疫苗是獸醫腫瘤學的新進展，可考慮作為手術後的輔助治療。',
  },
  diagnostic_data: null,
  procedure_data: null,
  visual_placeholders: [
    { position: 'WHO 分期表格後', type: 'flowchart', description: '口腔黑色素瘤治療決策流程圖' },
  ],
  interactive_placeholders: [],
  drug_api_links: ['Carboplatin', 'Melphalan'],
  references: [
    { type: 'textbook', citation: 'Withrow SJ, Vail DM, Page RL. Withrow & MacEwen\'s Small Animal Clinical Oncology, 6th ed. Elsevier, 2020.', relevance: '口腔黑色素瘤完整章節' },
    { type: 'journal', citation: 'Bergman PJ et al. Long-term survival of dogs with advanced malignant melanoma after DNA vaccination with xenogeneic human tyrosinase. Clin Cancer Res. 2003;9(4):1284-1290.', relevance: 'Oncept 疫苗原始研究' },
    { type: 'journal', citation: 'Tuohy JL et al. Outcome following curative-intent surgery for oral melanoma in dogs: 113 cases (1997-2012). J Am Vet Med Assoc. 2014;245(11):1266-1273.', relevance: '口腔黑色素瘤手術預後大型研究' },
    { type: 'guideline', citation: 'Owen LN. TNM Classification of Tumours in Domestic Animals. WHO, 1st ed. 1980.', relevance: 'WHO 口腔腫瘤 TNM 分期標準' },
  ],
  is_current: true,
  created_at: now,
};

/** 乳腺腫瘤 — 疾病型 */
const contentMammaryTumor: NodeContent = {
  id: 'CONTENT-ONCO-L3-006',
  node_id: 'ONCO-L3-006',
  version: 1,
  summary: '犬貓乳腺腫瘤是雌性犬貓最常見的腫瘤之一。犬乳腺腫瘤約 50% 為良性，50% 為惡性；貓乳腺腫瘤則 > 85% 為惡性。早期卵巢切除術（OHE）可顯著降低犬乳腺腫瘤風險。治療以手術為首選，切除範圍依腫瘤位置和數量而定。貓乳腺腫瘤預後較犬差，建議積極的手術（雙側乳腺鏈全切除）加輔助化療。',
  learning_objectives: [
    '比較犬與貓乳腺腫瘤的生物學行為差異',
    '說明卵巢切除時機對犬乳腺腫瘤風險的影響',
    '描述乳腺腫瘤的手術切除範圍選擇原則',
    '列出乳腺腫瘤的完整分期檢查流程',
    '辨識炎性乳腺癌（inflammatory mammary carcinoma）的臨床特徵',
  ],
  key_points: [
    '犬乳腺腫瘤：約 50% 良性/50% 惡性。貓乳腺腫瘤：> 85% 惡性（多為腺癌）',
    '早期 OHE 保護效果（犬）：首次發情前 0.5%、第一次發情後 8%、第二次發情後 26%、> 2.5 歲後無顯著保護',
    '犬手術：lumpectomy（< 0.5 cm）→ 區域乳腺切除 → 半側/全鏈切除（多發性腫瘤）',
    '貓手術：建議雙側乳腺鏈全切除（bilateral radical mastectomy），分兩次手術',
    '炎性乳腺癌：預後極差，手術禁忌，常被誤診為乳腺炎',
    '預後因子：腫瘤大小（< 3 cm 較好）、組織學分級、淋巴結轉移、Ki-67 指數',
  ],
  body: `# 乳腺腫瘤 (Mammary Tumors)

## 一、病理機制 (Pathophysiology)



### 概述
犬貓乳腺腫瘤是未絕育雌性動物最常見的腫瘤。犬有 5 對乳腺，貓有 4 對。犬乳腺腫瘤的良惡性比約 50:50，而貓乳腺腫瘤絕大多數為惡性。

### 犬 vs 貓比較
| 特徵 | 犬 | 貓 |
|------|----|----|
| 惡性比例 | 約 50% | > 85% |
| 最常見類型 | 混合型乳腺瘤（良性）、腺癌 | 腺癌 |
| 好發年齡 | 10-12 歲 | 10-14 歲 |
| OHE 保護 | 顯著 | 有，但數據較少 |
| 建議手術範圍 | 依腫瘤決定 | 雙側全鏈切除 |

### OHE 與乳腺腫瘤風險（犬）
- 首次發情前 OHE：風險 0.5%
- 第一次發情後 OHE：風險 8%
- 第二次發情後 OHE：風險 26%
- > 2.5 歲 OHE：無顯著保護（但仍建議同時 OHE 避免黃體素影響）

### 手術範圍選擇
### 犬
- **Lumpectomy**：< 0.5 cm、活動性強、良性可能高
- **區域乳腺切除**：較大腫瘤，含同側相鄰乳腺（因淋巴引流）
- **半側乳腺鏈切除**：多發性腫瘤，同側 1-5 號乳腺
- 淋巴引流：1-3 號 → 腋窩淋巴結；3-5 號 → 腹股溝淋巴結（3 號為分水嶺）

### 貓
- **雙側乳腺鏈全切除**為建議標準
- 分兩次手術（間隔 2-4 週），每次切除一側
- 較局部手術顯著降低局部復發率

### 炎性乳腺癌
- 高度惡性，瀰漫性浸潤
- 臨床表現：乳腺區域瀰漫性紅腫、水腫、硬化、疼痛
- 常被誤診為乳腺炎
- 手術為禁忌（無法清除乾淨且加速擴散）
- 預後極差：中位存活數週

[圖片:犬乳腺淋巴引流路徑示意圖]

## 二、臨床表現與診斷 (Clinical Signs & Diagnosis)

## 三、治療策略 (Treatment)

## 四、併發症與監控 (Complications & Monitoring)

## 五、預後與預後因子 (Prognosis)

## 六、人醫借鑒 (Translational Insights)

| 人醫工具/概念 | 獸醫應用潛力 | 現況 |
|-------------|-------------|------|
| CAR-T 細胞療法 | 犬 B 細胞淋巴瘤的細胞免疫治療 | 犬 CAR-T 試驗已啟動 |
| 腫瘤疫苗 | 犬黑色素瘤 DNA 疫苗（Oncept） | 犬黑色素瘤疫苗已 USDA 核准 |
| 光免疫療法（photoimmunotherapy） | 犬淺表腫瘤的免疫導引光動力治療 | 早期臨床試驗中 |
| 奈米藥物遞送 | 犬腫瘤局部高濃度化療——減少全身毒性 | 研究階段 |

## 七、臨床爭議與知識空缺 (Controversies & Knowledge Gaps)

| 爭議議題 | 現況 | Evidence Level |
|---------|------|---------------|
| 犬 MCT Grade II（Patnaik）的異質性 | 同一級別預後差異大——Kiupel 二級制是否更好？ | Level II |
| 犬骨肉瘤截肢+化療 vs 保肢+化療 | 保肢術感染/植入物失敗率高，長期存活是否等同 | Level II |
| 犬 HSA 化療（Doxorubicin ± DACTILi）的實際獲益 | MST 延長有限（~140 vs ~90 天），飼主生活品質考量 | Level I |
| 犬淋巴瘤「rescue」protocol 的選擇 | 多種 rescue 方案存在但無 head-to-head 比較 | Level III |`,
  clinical_pearl: '乳腺腫瘤手術前最常被忽略的步驟是「淋巴結評估」。犬乳腺 1-3 號引流至腋窩淋巴結，4-5 號引流至腹股溝淋巴結，而 3 號乳腺為分水嶺可引流至兩側。因此手術時必須根據腫瘤位置評估對應的引流淋巴結。另一個重要觀念：對於犬乳腺腫瘤，與腫瘤同時進行 OHE 是否能改善預後仍有爭議，但若有黃體素影響的可能性（未絕育或使用外源性黃體素），OHE 仍建議執行。\n\n【台灣流行病學】乳腺腫瘤是台灣未絕育母犬最常見的腫瘤類型。台灣早期絕育觀念推廣不足，許多母犬在第一次發情前未絕育，導致乳腺腫瘤盛行率偏高。台灣常見品種如貴賓犬、馬爾濟斯、吉娃娃等小型犬均為好發族群。貓乳腺腫瘤在台灣亦不少見，且 > 85% 為惡性。推廣早期絕育（第一次發情前）是台灣預防乳腺腫瘤最重要的策略。',
  common_mistakes: [
    '未在手術前進行完整分期檢查（胸腔 X 光 + 腹超 + 區域淋巴結評估）',
    '對貓乳腺腫瘤執行過於保守的局部切除——建議雙側全鏈切除以降低復發率',
    '將炎性乳腺癌誤診為乳腺炎而使用抗生素治療——臨床惡化是重要線索',
    '對犬乳腺腫瘤一律執行最大範圍手術——良性小腫瘤（< 0.5 cm）可考慮 lumpectomy',
    '忽略同時進行 OHE 的考量（尤其未絕育動物）',
  ],
  disease_data: {
    signalment: '犬：未絕育雌性，中位年齡 10-12 歲。好發品種：Poodle、Dachshund、Springer Spaniel、GSD、Cocker Spaniel。雄性犬乳腺腫瘤罕見但幾乎均為惡性。貓：未絕育雌性，中位年齡 10-14 歲。Siamese 貓風險較高。',
    etiology: '荷爾蒙依賴性：卵巢性激素（雌激素、黃體素）為主要促進因子。長期使用外源性黃體素避孕藥增加風險。肥胖（增加周邊雌激素轉化）。遺傳因素：品種偏好。犬乳腺腫瘤部分表達 ER/PR（荷爾蒙受體），但惡性度越高受體表達越低。',
    pathogenesis: '荷爾蒙反覆刺激乳腺上皮 → 增生 → 良性腫瘤（腺瘤、混合型）→ 部分良性轉化為惡性（腺癌為主）。惡性腫瘤局部浸潤 → 淋巴管侵犯 → 區域淋巴結轉移 → 血行性轉移（肺為主）。貓乳腺腫瘤多數已跳過良性階段直接呈現惡性。',
    clinical_signs: [
      { sign: '乳腺腫塊', category: 'primary', description: '單發或多發的乳腺區域腫塊，可小自數毫米至數公分。觸診可為活動性或固定' },
      { sign: '腫塊潰瘍/分泌物', category: 'primary', description: '表面潰瘍伴分泌物（血性或化膿性），提示惡性度較高' },
      { sign: '區域淋巴結腫大', category: 'secondary', description: '腋窩或腹股溝淋巴結腫大提示轉移' },
      { sign: '呼吸困難', category: 'secondary', description: '晚期肺轉移的表現' },
      { sign: '乳腺區域瀰漫性紅腫', category: 'secondary', description: '炎性乳腺癌的特徵：瀰漫性水腫、紅腫、硬化、疼痛' },
    ],
    staging: {
      system: 'Modified WHO Staging for Canine Mammary Tumors',
      stages: [
        'Stage I：T1（< 3 cm），N0，M0',
        'Stage II：T2（3-5 cm），N0，M0',
        'Stage III：T3（> 5 cm），N0，M0',
        'Stage IV：任何 T，N1（淋巴結轉移），M0',
        'Stage V：任何 T，任何 N，M1（遠端轉移）',
      ],
    },
    differential_diagnosis: [
      { condition: '乳腺增生/囊腫', key_differentiator: '與發情週期相關，波動性大小變化，FNA 見正常乳腺細胞或囊性液體' },
      { condition: '乳腺炎', key_differentiator: '泌乳期或假孕相關，發燒、觸痛、乳腺區域紅腫，抗生素治療反應（但需與炎性乳腺癌鑑別）' },
      { condition: '脂肪瘤', key_differentiator: '柔軟可移動，FNA 見脂肪細胞，常位於皮下但可在乳腺區域' },
      { condition: '皮膚 MCT', key_differentiator: 'FNA 見嗜鹼性顆粒圓形細胞，可位於乳腺區域皮膚' },
    ],
    diagnostic_workup: '1. 觸診所有乳腺（雙側 5 對/4 對）→ 2. FNA 細胞學或楔形活檢 → 3. 區域淋巴結（腋窩/腹股溝）FNA → 4. 胸腔 X 光三面投射（肺轉移篩檢）→ 5. 腹部超音波 → 6. CBC/BCS → 7. 手術切除後完整組織病理（分級 + 切緣評估 + ER/PR）',
    treatment_protocol: '手術為首選。犬：依腫瘤大小與數量選擇 lumpectomy/區域切除/半側全鏈切除。貓：雙側乳腺鏈全切除（分兩次，間隔 2-4 週）。同時 OHE（未絕育動物）。惡性腫瘤輔助化療：Doxorubicin 30 mg/m² IV q3 weeks 或 Carboplatin 300 mg/m² IV q3 weeks × 4-6 次。貓：Doxorubicin 25 mg/m² IV q3 weeks × 5 次。炎性乳腺癌：手術禁忌，可嘗試 NSAIDs 或姑息性化療。',
    prognosis: '犬：良性腫瘤手術治癒。惡性腫瘤 < 3 cm + 切緣乾淨：中位存活 > 2 年。3-5 cm：中位存活 1-2 年。> 5 cm：中位存活 < 1 年。淋巴結轉移為不良預後指標。貓：即使積極治療，中位存活約 1 年。< 2 cm 腫瘤預後較好（中位存活 > 3 年）。> 3 cm 預後差（中位存活 4-6 個月）。炎性乳腺癌預後極差。',
    monitoring: '術後 2 週傷口檢查。每 2-3 個月全身乳腺觸診（監測新腫瘤或復發）+ 區域淋巴結評估。每 3 個月胸腔 X 光（惡性腫瘤）。化療期間每次治療前 CBC。長期每 6 個月追蹤。',
    owner_communication: '犬乳腺腫瘤約一半為良性，手術後預後良好。惡性腫瘤的預後取決於腫瘤大小和轉移情況——越早發現越好。貓乳腺腫瘤絕大多數為惡性，建議積極的手術和化療。強調早期絕育（OHE）對預防乳腺腫瘤的重要性。建議飼主定期觸摸犬貓的乳腺區域，發現腫塊及早就醫。',
  },
  diagnostic_data: null,
  procedure_data: null,
  visual_placeholders: [
    { position: '手術範圍段落後', type: 'annotated_image', description: '犬乳腺淋巴引流與手術範圍選擇圖' },
    { position: '犬 vs 貓比較表後', type: 'comparison_table', description: '犬 vs 貓乳腺腫瘤生物學行為比較' },
  ],
  interactive_placeholders: [],
  drug_api_links: ['Doxorubicin', 'Carboplatin'],
  references: [
    { type: 'textbook', citation: 'Withrow SJ, Vail DM, Page RL. Withrow & MacEwen\'s Small Animal Clinical Oncology, 6th ed. Elsevier, 2020.', relevance: '乳腺腫瘤完整章節' },
    { type: 'journal', citation: 'Sorenmo KU et al. Canine mammary gland tumours: a histological continuum from benign to malignant; clinical and histopathological evidence. Vet Comp Oncol. 2009;7(3):162-172.', relevance: '犬乳腺腫瘤組織學連續體' },
    { type: 'guideline', citation: 'Sorenmo KU et al. Chapter 27: Tumors of the Mammary Gland. In: Withrow & MacEwen\'s 6th ed.', relevance: '乳腺腫瘤手術與化療指引' },
    { type: 'journal', citation: 'Kristiansen VM et al. Effect of ovariohysterectomy at the time of tumor removal in dogs with mammary carcinomas: a randomized controlled trial. J Vet Intern Med. 2016;30(1):230-241.', relevance: '乳腺腫瘤手術時同時 OHE 的 RCT 研究' },
  ],
  is_current: true,
  created_at: now,
};

/** 移行上皮細胞癌 (TCC) — 疾病型 */
const contentTCC: NodeContent = {
  id: 'CONTENT-ONCO-L3-007',
  node_id: 'ONCO-L3-007',
  version: 1,
  summary: '犬移行上皮細胞癌（Transitional Cell Carcinoma, TCC）是犬泌尿道最常見的惡性腫瘤，好發於膀胱三角區。Scottish Terrier 風險最高（約為其他品種的 18-20 倍）。由於好發位置在三角區，完整手術切除通常不可行。治療以 Piroxicam（COX 抑制劑）± Mitoxantrone 化療為標準方案。BRAF 突變檢測（尿液 PCR）為新的非侵入性診斷工具。',
  learning_objectives: [
    '描述 TCC 好發於膀胱三角區的臨床意義',
    '列出 TCC 的危險因子與好發品種',
    '說明 BRAF 突變尿液 PCR 作為診斷工具的價值',
    '比較 TCC 的治療選項及其療效',
    '辨識 TCC 導致尿道阻塞的臨床處置',
  ],
  key_points: [
    '犬泌尿道最常見的惡性腫瘤，約 > 90% 位於膀胱（三角區最常見）',
    '好發品種：Scottish Terrier（18-20 倍風險）、Shetland Sheepdog、Beagle、West Highland White Terrier',
    '雌性約為雄性的 2 倍。中位年齡 11 歲。肥胖為風險因子',
    '臨床表現類似下泌尿道疾病：血尿、頻尿、排尿困難——常被誤診為膀胱炎',
    'BRAF V595E 突變：約 85% 的犬 TCC 帶有此突變，尿液游離 DNA PCR 可作為非侵入性篩檢',
    '治療標準：Piroxicam 0.3 mg/kg PO SID ± Mitoxantrone 5 mg/m² IV q3 weeks',
    '手術完整切除通常不可行（三角區位置），但部分膀胱切除或支架置入可考慮',
  ],
  body: `# 移行上皮細胞癌 (TCC)

## 一、病理機制 (Pathophysiology)



### 概述
犬膀胱 TCC（又稱 urothelial carcinoma）是犬泌尿系統最常見的惡性腫瘤。由於好發於膀胱三角區（trigone），常造成尿道阻塞和輸尿管阻塞，且完整手術切除困難。

### 危險因子
- 品種：Scottish Terrier 風險最高
- 性別：雌性約 2 倍
- 肥胖
- 環境暴露：除草劑、殺蟲劑（flea/tick dips）、cyclophosphamide 暴露
- 已知致癌物：2-naphthylamine 及相關化合物

## 二、臨床表現與診斷 (Clinical Signs & Diagnosis)

### 臨床表現
- 血尿（hematuria）：最常見
- 頻尿（pollakiuria）
- 排尿困難（stranguria/dysuria）
- 常被初步診斷為「膀胱炎」而延誤
- 嚴重時：尿道阻塞 → 急性腎後性腎衰竭

### 診斷
### BRAF V595E 突變檢測
- 約 85% 的犬 TCC 帶有此突變
- **尿液游離 DNA PCR**：非侵入性、高特異度（> 99%）
- 適用於篩檢和早期偵測

### 影像學
- 腹部超音波：三角區腫塊、膀胱壁增厚
- 對比增強 CT：評估腫瘤範圍和淋巴結轉移

### 膀胱鏡 + 活檢
- 直接觀察腫瘤並取得組織
- 注意：經腹壁膀胱穿刺活檢（cystocentesis-guided）有種植轉移風險

## 三、治療策略 (Treatment)

### 治療
### 藥物治療（標準）
- [藥物:Piroxicam] 0.3 mg/kg PO SID（COX-2 抑制，抗腫瘤活性）
- [藥物:Mitoxantrone] 5 mg/m² IV q3 weeks + Piroxicam
- 替代：[藥物:Carboplatin] + Piroxicam
- [藥物:Vinblastine] 口服節拍式 + Piroxicam

### 手術
- 完整切除通常不可行（三角區）
- 部分膀胱切除：腫瘤不在三角區時可考慮
- 尿道支架置入：緩解尿道阻塞

[圖片:膀胱 TCC 超音波影像——三角區腫塊]

## 四、併發症與監控 (Complications & Monitoring)

## 五、預後與預後因子 (Prognosis)

## 六、人醫借鑒 (Translational Insights)

| 人醫工具/概念 | 獸醫應用潛力 | 現況 |
|-------------|-------------|------|
| CAR-T 細胞療法 | 犬 B 細胞淋巴瘤的細胞免疫治療 | 犬 CAR-T 試驗已啟動 |
| 腫瘤疫苗 | 犬黑色素瘤 DNA 疫苗（Oncept） | 犬黑色素瘤疫苗已 USDA 核准 |
| 光免疫療法（photoimmunotherapy） | 犬淺表腫瘤的免疫導引光動力治療 | 早期臨床試驗中 |
| 奈米藥物遞送 | 犬腫瘤局部高濃度化療——減少全身毒性 | 研究階段 |

## 七、臨床爭議與知識空缺 (Controversies & Knowledge Gaps)

| 爭議議題 | 現況 | Evidence Level |
|---------|------|---------------|
| 犬 MCT Grade II（Patnaik）的異質性 | 同一級別預後差異大——Kiupel 二級制是否更好？ | Level II |
| 犬骨肉瘤截肢+化療 vs 保肢+化療 | 保肢術感染/植入物失敗率高，長期存活是否等同 | Level II |
| 犬 HSA 化療（Doxorubicin ± DACTILi）的實際獲益 | MST 延長有限（~140 vs ~90 天），飼主生活品質考量 | Level I |
| 犬淋巴瘤「rescue」protocol 的選擇 | 多種 rescue 方案存在但無 head-to-head 比較 | Level III |`,
  clinical_pearl: 'TCC 最常被延誤診斷的原因是初始症狀（血尿、頻尿）與膀胱炎完全相同。臨床經驗法則：當中老年犬（尤其 Scottish Terrier 或其他好發品種）因「膀胱炎」就診但抗生素治療 2-4 週後症狀未改善時，務必進行膀胱超音波和尿液 BRAF 檢測。另一個重要注意事項：避免經腹壁穿刺採樣膀胱 TCC——有報導顯示穿刺路徑可發生種植轉移（seeding）。\n\n【台灣流行病學】膀胱移行上皮細胞癌在台灣犬隻中為重要的泌尿道腫瘤。Scottish Terrier 在台灣飼養較少，但其他品種如雪納瑞、比乏犬亦有報告。台灣中老年犬慢性血尿常被反覆以膀胱炎治療而延誤 TCC 診斷，提升獸醫師的警覺性極為重要。尿液 BRAF V595E 突變檢測在台灣部分實驗室已可提供，為非侵入性的篩檢工具。Piroxicam/Meloxicam 聯合 Mitoxantrone 或節拍式 Chlorambucil 化療為台灣常用治療方案。',
  common_mistakes: [
    '反覆以「膀胱炎」治療而未進行影像學檢查——中老年犬持續血尿/頻尿應排除 TCC',
    '經腹壁膀胱穿刺對 TCC 進行 FNA——有種植轉移風險，建議使用膀胱鏡或創傷性導尿管沖洗採樣',
    '嘗試對三角區 TCC 進行完整手術切除——位置通常不允許完整切除，且術後生活品質可能很差',
    '未使用 Piroxicam 或其他 NSAIDs 作為 TCC 治療的基礎——COX-2 抑制在 TCC 有直接抗腫瘤活性',
    '忽略 BRAF 突變檢測作為非侵入性診斷工具的價值',
  ],
  disease_data: {
    signalment: '中老年犬（中位年齡 11 歲）。最高風險品種：Scottish Terrier（18-20 倍）、Shetland Sheepdog、Beagle、West Highland White Terrier、Wire Fox Terrier。雌性約為雄性 2 倍。肥胖犬風險增加。',
    etiology: '多因子：遺傳易感性（品種偏好）+ 環境致癌物暴露（除草劑、殺蟲劑、cyclophosphamide）。BRAF V595E 體細胞突變在約 85% 的犬 TCC 中被發現，為關鍵的驅動突變。肥胖可能透過增加致癌物接觸時間（排尿頻率降低）和慢性發炎增加風險。',
    pathogenesis: 'BRAF V595E 突變 → MAPK/ERK 信號通路持續活化 → 移行上皮細胞克隆性增殖 → 膀胱壁浸潤（黏膜 → 肌層 → 漿膜）→ 三角區腫塊阻塞輸尿管口（腎後性腎衰竭）或尿道（排尿困難/阻塞）→ 區域淋巴結轉移 → 遠端轉移（肺、骨、肝）。',
    clinical_signs: [
      { sign: '血尿', category: 'primary', description: '最常見的首發症狀，可為持續性或間歇性，抗生素治療無改善' },
      { sign: '頻尿/排尿困難', category: 'primary', description: '頻繁少量排尿、排尿時間延長、排尿疼痛表現' },
      { sign: '尿道阻塞', category: 'primary', description: '腫瘤侵犯尿道導致排尿困難或無法排尿，為急診情況' },
      { sign: '腎後性腎衰竭', category: 'secondary', description: '腫瘤阻塞輸尿管口，BUN/Cre 升高、少尿或無尿' },
      { sign: '跛行', category: 'secondary', description: '肥大型骨病（hypertrophic osteopathy）為副腫瘤症候群，少見但特徵性' },
    ],
    staging: {
      system: 'TNM Staging for Canine Bladder TCC',
      stages: [
        'T0：無原發腫瘤證據',
        'Tis：原位癌（carcinoma in situ）',
        'T1：淺層腫瘤（黏膜/黏膜下層）',
        'T2：腫瘤侵犯肌層',
        'T3：腫瘤侵犯鄰近器官（前列腺、子宮、陰道）',
      ],
    },
    differential_diagnosis: [
      { condition: '細菌性膀胱炎', key_differentiator: '尿液培養陽性，抗生素治療反應良好，超音波無腫塊' },
      { condition: '膀胱息肉', key_differentiator: '良性，超音波見帶蒂腫塊，組織病理為移行上皮增生而非惡性' },
      { condition: '膀胱結石', key_differentiator: '超音波見高回音結構伴聲影，X 光可能可見' },
      { condition: '前列腺疾病', key_differentiator: '前列腺腫大，尿道分泌物，超音波可區分' },
    ],
    diagnostic_workup: '1. 尿液分析 + 培養（排除感染）→ 2. 尿液 BRAF V595E 突變 PCR（非侵入性篩檢，敏感度約 85%，特異度 > 99%）→ 3. 腹部超音波（三角區腫塊、腎盂擴張、淋巴結）→ 4. 胸腔 X 光 → 5. 膀胱鏡 + 活檢（確定診斷）或創傷性導尿管沖洗採樣 → 6. CBC/BCS（腎功能評估）→ 7. CT（腫瘤範圍、手術計畫評估）',
    treatment_protocol: '藥物首選：Piroxicam 0.3 mg/kg PO SID（COX-2 抑制劑，直接抗腫瘤 + 抗血管生成活性）。合併化療：Mitoxantrone 5 mg/m² IV q3 weeks × 4-6 次 + Piroxicam（反應率約 35%）。替代方案：Carboplatin + Piroxicam、Vinblastine 口服 + Piroxicam。手術：部分膀胱切除（非三角區腫瘤）、尿道支架置入（緩解尿道阻塞）。姑息性：輸尿管支架或腎造瘻（腎後性阻塞）。',
    prognosis: 'Piroxicam 單獨：部分緩解率約 18%，穩定約 50%，中位存活約 6 個月。Mitoxantrone + Piroxicam：中位存活約 8-10 個月。Carboplatin + Piroxicam：中位存活約 6-8 個月。尿道阻塞支架置入後：額外中位存活約 2-3 個月。整體中位存活約 6-12 個月。不良預後因子：尿道浸潤、前列腺侵犯、腎後性阻塞。',
    monitoring: '每月尿液分析。每 2-3 個月腹部超音波評估腫瘤大小變化。腎功能（BUN/Cre）每 1-2 個月。Piroxicam 使用時監測腎功能和 GI 副作用。化療期間每次治療前 CBC。監測排尿功能和生活品質。',
    owner_communication: 'TCC 是犬膀胱最常見的癌症，由於位置在膀胱三角區，完整手術切除通常不可行。但藥物治療（Piroxicam ± 化療）可以有效控制腫瘤生長，大多數犬在治療期間維持良好的生活品質。最大的風險是尿道或輸尿管阻塞，需要密切監測排尿功能。出現排尿困難或無法排尿時需緊急就醫。',
  },
  diagnostic_data: null,
  procedure_data: null,
  visual_placeholders: [
    { position: '臨床表現段落後', type: 'annotated_image', description: '膀胱三角區 TCC 好發位置示意圖' },
    { position: '治療段落後', type: 'flowchart', description: 'TCC 治療決策流程圖' },
  ],
  interactive_placeholders: [],
  drug_api_links: ['Piroxicam', 'Mitoxantrone', 'Carboplatin', 'Vinblastine'],
  references: [
    { type: 'textbook', citation: 'Withrow SJ, Vail DM, Page RL. Withrow & MacEwen\'s Small Animal Clinical Oncology, 6th ed. Elsevier, 2020.', relevance: 'TCC 完整章節' },
    { type: 'journal', citation: 'Knapp DW et al. Naturally-occurring canine transitional cell carcinoma of the urinary bladder: a relevant model of human invasive bladder cancer. Urol Oncol. 2014;32(1):47.e1-7.', relevance: '犬 TCC 作為人膀胱癌模型' },
    { type: 'journal', citation: 'Mochizuki H et al. BRAF mutations in canine cancers. PLoS One. 2015;10(6):e0129534.', relevance: 'BRAF 突變在犬 TCC 的發現' },
    { type: 'guideline', citation: 'AAHA Oncology Guidelines for Dogs and Cats. J Am Anim Hosp Assoc. 2016;52(4):181-204.', relevance: 'AAHA 腫瘤科指引——TCC 診斷與管理' },
  ],
  is_current: true,
  created_at: now,
};

/** 貓注射處肉瘤 (FISS) — 疾病型 */
const contentFISS: NodeContent = {
  id: 'CONTENT-ONCO-L3-008',
  node_id: 'ONCO-L3-008',
  version: 1,
  summary: '貓注射處肉瘤（Feline Injection-Site Sarcoma, FISS）是與疫苗或其他注射相關的貓特有惡性腫瘤。由注射部位的慢性發炎反應誘發，組織學多為纖維肉瘤。FISS 具有高度局部侵襲性，手術切緣需極為積極（≥ 3-5 cm lateral + 2 fascial planes deep）。建議的注射部位已調整為遠端肢體以便必要時進行截肢。台灣因疫苗施打普及，FISS 為臨床上需特別注意的腫瘤。',
  learning_objectives: [
    '描述 FISS 的病因假說與慢性發炎角色',
    '說明「3-2-1 規則」用於篩檢疑似 FISS 的注射部位腫塊',
    '列出 FISS 手術切緣標準與手術計畫原則',
    '解釋 VAFSTF 建議的疫苗注射部位指引',
    '評估 FISS 的預後與多模式治療策略',
  ],
  key_points: [
    '與疫苗（尤其含佐劑的 FeLV 和 Rabies 疫苗）或其他注射（長效類固醇、Lufenuron）相關',
    '發生率約 1/1,000-1/10,000 次注射（不同研究差異大）',
    '組織學多為纖維肉瘤（fibrosarcoma），特徵為周圍有淋巴球-巨噬細胞浸潤（慢性發炎證據）',
    '「3-2-1 規則」：腫塊 > 3 個月仍存在、直徑 > 2 cm、注射後 1 個月仍在增大 → 建議活檢',
    '手術切緣極為積極：≥ 3-5 cm lateral + ≥ 2 fascial planes deep（含筋膜面）',
    'VAFSTF 建議：FeLV 疫苗注射左後肢遠端、Rabies 疫苗注射右後肢遠端（必要時可截肢）',
    '台灣臨床注意：狂犬病疫苗為法定必打，飼主衛教注射後追蹤非常重要',
  ],
  body: `# 貓注射處肉瘤 (FISS)

## 一、病理機制 (Pathophysiology)



### 概述
貓注射處肉瘤是一種與注射部位慢性發炎反應相關的惡性腫瘤，最初在 1990 年代被報導為與含佐劑疫苗注射相關。FISS 的發生改變了獸醫界對貓疫苗施打部位的建議。

### 病因假說
- **慢性發炎假說**：注射部位的持續性發炎反應為關鍵
  - 含鋁鹽佐劑的疫苗（FeLV、Rabies）風險最高
  - 其他注射也可引發：長效類固醇、Lufenuron、微晶片
- 慢性發炎 → 纖維母細胞持續增殖 → p53 等抑癌基因突變 → 惡性轉化
- 不是每隻貓都會發生，個體遺傳易感性可能扮演角色

### 3-2-1 規則
疑似 FISS 的注射部位腫塊篩檢標準：
- **3** 個月：注射後腫塊持續 > 3 個月
- **2** cm：腫塊直徑 > 2 cm
- **1** 個月：注射後 1 個月腫塊仍在增大

符合以上任一標準即建議進行 incisional biopsy（切取活檢）。

### VAFSTF 疫苗注射部位建議
- **FeLV 疫苗**：左後肢遠端（膝關節以下）
- **Rabies 疫苗**：右後肢遠端（膝關節以下）
- **FVRCP 疫苗**：右前肢遠端
- 目的：遠離肩胛間區（避免手術困難），遠端肢體便於截肢
- **永遠不要在肩胛間區注射含佐劑疫苗**

## 二、臨床表現與診斷 (Clinical Signs & Diagnosis)

## 三、治療策略 (Treatment)

### 治療
### 手術（首選且最重要）
- 切緣標準：lateral ≥ 3-5 cm + deep ≥ 2 fascial planes
- 肩胛間區腫瘤可能需要脊突切除
- 肢體腫瘤：截肢通常為最佳選擇（切緣最充足）

### 多模式治療
- 術前放射治療：縮小腫瘤提高手術成功率
- 術後放射治療：切緣不淨或 close margins
- 化療：[藥物:Doxorubicin] 25 mg/m² IV q3 weeks × 5 次 或 [藥物:Carboplatin]

[圖片:VAFSTF 建議疫苗注射部位示意圖]

## 四、併發症與監控 (Complications & Monitoring)

## 五、預後與預後因子 (Prognosis)

## 六、人醫借鑒 (Translational Insights)

| 人醫工具/概念 | 獸醫應用潛力 | 現況 |
|-------------|-------------|------|
| CAR-T 細胞療法 | 犬 B 細胞淋巴瘤的細胞免疫治療 | 犬 CAR-T 試驗已啟動 |
| 腫瘤疫苗 | 犬黑色素瘤 DNA 疫苗（Oncept） | 犬黑色素瘤疫苗已 USDA 核准 |
| 光免疫療法（photoimmunotherapy） | 犬淺表腫瘤的免疫導引光動力治療 | 早期臨床試驗中 |
| 奈米藥物遞送 | 犬腫瘤局部高濃度化療——減少全身毒性 | 研究階段 |

## 七、臨床爭議與知識空缺 (Controversies & Knowledge Gaps)

| 爭議議題 | 現況 | Evidence Level |
|---------|------|---------------|
| 犬 MCT Grade II（Patnaik）的異質性 | 同一級別預後差異大——Kiupel 二級制是否更好？ | Level II |
| 犬骨肉瘤截肢+化療 vs 保肢+化療 | 保肢術感染/植入物失敗率高，長期存活是否等同 | Level II |
| 犬 HSA 化療（Doxorubicin ± DACTILi）的實際獲益 | MST 延長有限（~140 vs ~90 天），飼主生活品質考量 | Level I |
| 犬淋巴瘤「rescue」protocol 的選擇 | 多種 rescue 方案存在但無 head-to-head 比較 | Level III |`,
  clinical_pearl: '「先活檢、再手術」是 FISS 治療的黃金法則。許多一般獸醫師在發現注射部位腫塊時，會嘗試以邊緣切除（marginal excision）「先拿掉看看」——這是 FISS 治療中最大的錯誤。不充分的首次手術使得局部復發率從 14%（首次積極手術）飆升至 > 60%。正確做法是：先做 incisional biopsy 確診 → CT 評估腫瘤範圍 → 計畫性的積極手術（≥ 3 cm + 2 fascial planes）。\n\n【台灣流行病學】FISS 在台灣為具有臨床重要性的貓特有腫瘤，因台灣疫苗施打率高（狂犬病疫苗為法定必打），年施打量大使累積病例數不可忽視。台灣獸醫師應遵循 VAFSTF 建議將注射部位改為遠端肢體（右後肢施打狂犬病疫苗、左後肢施打 FVRCP 等）。台灣飼主衛教重點：疫苗注射後若注射部位出現腫塊，觀察 3-2-1 rule（3 個月仍存在、直徑 > 2 cm、1 個月內仍在增大）應立即就醫。',
  common_mistakes: [
    '以邊緣切除（marginal excision）「先拿掉看看」而非積極手術——首次手術的切緣是預後最重要的決定因子',
    '繼續在肩胛間區注射含佐劑疫苗——應遵循 VAFSTF 建議改為遠端肢體注射',
    '未在手術前進行 CT 評估腫瘤範圍——FISS 的實際侵犯範圍常比觸診大得多',
    '未向飼主說明疫苗接種後需追蹤注射部位腫塊——飼主衛教是早期發現的關鍵',
    '因為「發生率低」就認為不需要改變注射習慣——台灣年施打量大，累積病例數不可忽視',
  ],
  disease_data: {
    signalment: '貓，無品種偏好。中位年齡 8-10 歲（但可見於任何年齡）。無性別偏好。發生部位與注射部位相關：傳統上肩胛間區最常見（因過去的注射習慣），近年遠端肢體漸增。',
    etiology: '注射部位慢性發炎反應誘發的惡性轉化。主要風險因子：含鋁鹽佐劑疫苗（FeLV、Rabies）、長效類固醇注射。發炎反應中的活性氧物質（ROS）和生長因子 → 纖維母細胞 DNA 損傷（p53 突變等）→ 克隆性惡性增殖。個體遺傳易感性可能影響發生率。',
    pathogenesis: '注射刺激 → 局部慢性肉芽腫性發炎 → 纖維母細胞持續增殖修復 → 基因突變累積（p53 等抑癌基因）→ 惡性轉化為肉瘤 → 局部高度侵襲性生長（指狀突起延伸至周圍組織遠超可見腫塊邊界）→ 區域轉移（淋巴結少見）→ 遠端轉移（肺，約 10-25%）。',
    clinical_signs: [
      { sign: '注射部位硬性腫塊', category: 'primary', description: '注射後數週至數年出現的堅硬、不可移動腫塊，與周圍組織黏連' },
      { sign: '腫塊持續增大', category: 'primary', description: '漸進性增大，符合 3-2-1 規則之一即應警覺' },
      { sign: '局部皮膚潰瘍', category: 'secondary', description: '大型腫塊表面皮膚壞死潰瘍' },
      { sign: '活動受限', category: 'secondary', description: '肩胛間區大型腫瘤可影響前肢活動' },
    ],
    staging: null,
    differential_diagnosis: [
      { condition: '疫苗注射後反應性腫脹', key_differentiator: '通常在 2-4 週內消退，質軟，大小穩定或縮小。若 > 1 個月仍存在需進一步評估' },
      { condition: '皮下脂肪瘤', key_differentiator: '質軟、可移動、FNA 見脂肪細胞' },
      { condition: '膿瘍', key_differentiator: '波動感、觸痛、可能有發燒，FNA 見化膿性滲出物' },
      { condition: '其他皮下肉瘤（非注射相關）', key_differentiator: '組織學無注射部位特徵性的淋巴球-巨噬細胞周邊浸潤帶' },
    ],
    diagnostic_workup: '1. 病史（注射紀錄、腫塊出現時間）→ 2. 觸診評估（大小、活動性、與周圍組織關係）→ 3. Incisional biopsy（切取活檢，非 excisional）→ 4. 組織病理確診（纖維肉瘤 + 周邊淋巴球浸潤帶）→ 5. CT（評估腫瘤實際侵犯範圍——遠大於觸診）→ 6. 胸腔 X 光三面投射 → 7. CBC/BCS → 8. 制定手術計畫',
    treatment_protocol: '手術為首選且最重要。首次手術切緣：lateral ≥ 3-5 cm + deep ≥ 2 fascial planes。肢體腫瘤：截肢通常可獲得最佳切緣。肩胛間區：可能需要部分脊突切除和肩胛骨切除。多模式治療：術前放療（16-20 次分割，共 48-54 Gy）可縮小腫瘤。術後放療：切緣不淨或 close margins。化療：Doxorubicin 25 mg/m² IV q3 weeks × 5 次。Carboplatin 替代。三合一：手術 + 放療 + 化療用於高風險病例。',
    prognosis: '首次積極手術（切緣乾淨）：局部復發率約 14%，中位存活 > 2 年。首次邊緣切除後復發再手術：復發率 > 60%。多模式治療（手術 + 放療 ± 化療）：中位存活 2-3 年。遠端轉移率約 10-25%（以肺為主）。首次手術的品質是決定預後最關鍵的因子。',
    monitoring: '術後每月觸診手術部位監測復發 × 6 個月，之後每 3 個月 × 2 年，之後每 6 個月。每 3-6 個月胸腔 X 光。化療期間每次治療前 CBC。長期追蹤：FISS 可在術後數年復發。',
    owner_communication: 'FISS 是與注射（尤其疫苗）相關的罕見但嚴重的併發症。疫苗仍然是保護貓健康的重要工具，不應因為 FISS 而停止疫苗接種——而是應調整注射部位和方式。建議飼主在每次注射後追蹤注射部位，若出現 3-2-1 規則的任何情況應就醫。早期發現 + 首次積極手術是最佳預後的關鍵。強調不要在肩胛間區注射。',
  },
  diagnostic_data: null,
  procedure_data: null,
  visual_placeholders: [
    { position: 'VAFSTF 段落後', type: 'annotated_image', description: 'VAFSTF 建議疫苗注射部位貓體圖標示' },
    { position: '治療段落後', type: 'flowchart', description: 'FISS 多模式治療決策流程圖' },
  ],
  interactive_placeholders: [],
  drug_api_links: ['Doxorubicin', 'Carboplatin'],
  references: [
    { type: 'guideline', citation: 'Vaccine-Associated Feline Sarcoma Task Force (VAFSTF). The current understanding and management of vaccine-associated sarcomas in cats. J Am Vet Med Assoc. 2005;226(11):1821-1842.', relevance: 'VAFSTF 官方指引' },
    { type: 'textbook', citation: 'Withrow SJ, Vail DM, Page RL. Withrow & MacEwen\'s Small Animal Clinical Oncology, 6th ed. Elsevier, 2020.', relevance: 'FISS 完整章節' },
    { type: 'journal', citation: 'Ladlow J. Injection site-associated sarcoma in the cat: treatment recommendations and results to date. J Feline Med Surg. 2013;15(5):409-418.', relevance: 'FISS 治療建議與預後數據' },
  ],
  is_current: true,
  created_at: now,
};

/** 獸醫腫瘤科總覽 — 概念型 */
const contentOncoOverview: NodeContent = {
  id: 'CONTENT-ONCO-L0-001',
  node_id: 'ONCO-L0-001',
  version: 1,
  summary: '獸醫腫瘤科是專門研究和治療伴侶動物腫瘤的臨床專科。隨著犬貓壽命延長，腫瘤已成為老年伴侶動物最主要的死因之一。犬的腫瘤發生率約為人的 10 倍，貓的某些腫瘤（如注射處肉瘤）則具物種特異性。獸醫腫瘤科涵蓋腫瘤的診斷、分期、多模式治療（手術、化療、放療、免疫治療）及緩和醫療。比較腫瘤學（Comparative Oncology）使犬貓腫瘤成為人類腫瘤研究的重要自然發生模型。',
  learning_objectives: [
    '描述獸醫腫瘤科的範疇與伴侶動物常見腫瘤的流行病學概況',
    '說明腫瘤診斷的基本流程：從臨床懷疑到組織學確診',
    '列出犬貓腫瘤治療的四大模式：手術、化療、放療、免疫治療',
    '解釋比較腫瘤學（Comparative Oncology）的概念與臨床價值',
    '辨識台灣地區伴侶動物常見腫瘤的流行病學特點',
  ],
  key_points: [
    '腫瘤為老年犬貓最主要死因之一：犬腫瘤發生率約 381/100,000，貓約 264/100,000',
    '犬最常見惡性腫瘤：淋巴瘤、MCT、骨肉瘤、血管肉瘤、口腔黑色素瘤',
    '貓最常見惡性腫瘤：淋巴瘤、鱗狀細胞癌、乳腺腫瘤、注射處肉瘤、纖維肉瘤',
    '腫瘤診斷金字塔：臨床懷疑 → FNA 細胞學 → 組織病理 → 免疫組織化學/分子診斷',
    '治療目標：治癒（cure）、控制（control）、或緩和（palliation）——依腫瘤類型、分期和飼主意願而定',
    '比較腫瘤學：犬貓腫瘤為自然發生模型，與人類腫瘤在生物學行為上高度相似',
    'VCOG（Veterinary Cooperative Oncology Group）建立了標準化的化療毒性評估標準（VCOG-CTCAE）',
    '台灣特別注意：FISS 因疫苗施打普及而具臨床重要性；TVT（傳染性性病腫瘤）在流浪犬仍可見',
  ],
  body: `# 獸醫腫瘤科總覽 (Veterinary Oncology Overview)

## 一、核心概念與機轉 (Core Concept & Mechanism)



### 學科定義與範疇
獸醫腫瘤科為專門處理伴侶動物（犬、貓為主）腫瘤性疾病的臨床專科。美國獸醫內科學院腫瘤專科（ACVIM-Oncology）與美國獸醫放射腫瘤學院（ACVR-RO）為主要認證機構。學科涵蓋：

- **腫瘤內科**：化學治療、標靶治療、免疫治療
- **腫瘤外科**：腫瘤切除原則、切緣評估
- **放射腫瘤科**：根治性與姑息性放射治療
- **緩和醫療**：疼痛管理、生活品質評估

### 流行病學概況
### 犬
- 腫瘤為 10 歲以上犬最主要死因（約 50%）
- 皮膚腫瘤最常見（MCT、軟組織肉瘤、脂肪瘤）
- 好發品種偏好強烈（如 Golden Retriever：淋巴瘤、HSA；Boxer：MCT）

### 貓
- 淋巴瘤為最常見惡性腫瘤（FeLV 相關性已降低）
- 乳腺腫瘤 > 85% 為惡性（與犬顯著不同）
- FISS 為台灣臨床重要議題

### 腫瘤診斷基本流程
1. **臨床懷疑**：腫塊發現、異常症狀
2. **細胞學（FNA）**：快速、低侵入性的第一線工具
3. **組織病理學**：確定診斷、分級（grading）
4. **分期檢查（Staging）**：影像學 + 實驗室 → TNM 分期
5. **分子診斷**：免疫分型、基因突變檢測（如 c-KIT、BRAF）

### 治療四大模式
| 模式 | 適用時機 | 優點 | 限制 |
|------|----------|------|------|
| 手術 | 局部實體腫瘤 | 可能治癒、組織病理評估 | 需足夠切緣、全身麻醉 |
| 化療 | 全身性腫瘤、輔助治療 | 控制微轉移 | 骨髓抑制、GI 副作用 |
| 放療 | 局部控制、姑息止痛 | 非侵入性 | 設備昂貴、需多次麻醉 |
| 免疫治療 | 特定腫瘤輔助 | 低副作用 | 效果可變、費用高 |

### 比較腫瘤學
犬貓腫瘤作為人類腫瘤的自然發生模型，具有以下優勢：
- 自然免疫環境中發展（非移植模型）
- 與人類共享生活環境
- 腫瘤生物學行為高度相似（如犬 OSA ↔ 人青少年 OSA）
- 臨床試驗流程較短

[圖片:獸醫腫瘤科知識架構總覽圖]

## 二、臨床意義 (Clinical Significance)

## 三、人醫借鑒 (Translational Insights)

| 人醫工具/概念 | 獸醫應用潛力 | 現況 |
|-------------|-------------|------|
| CAR-T 細胞療法 | 犬 B 細胞淋巴瘤的細胞免疫治療 | 犬 CAR-T 試驗已啟動 |
| 腫瘤疫苗 | 犬黑色素瘤 DNA 疫苗（Oncept） | 犬黑色素瘤疫苗已 USDA 核准 |
| 光免疫療法（photoimmunotherapy） | 犬淺表腫瘤的免疫導引光動力治療 | 早期臨床試驗中 |
| 奈米藥物遞送 | 犬腫瘤局部高濃度化療——減少全身毒性 | 研究階段 |

## 四、臨床爭議與知識空缺 (Controversies & Knowledge Gaps)

| 爭議議題 | 現況 | Evidence Level |
|---------|------|---------------|
| 犬 MCT Grade II（Patnaik）的異質性 | 同一級別預後差異大——Kiupel 二級制是否更好？ | Level II |
| 犬骨肉瘤截肢+化療 vs 保肢+化療 | 保肢術感染/植入物失敗率高，長期存活是否等同 | Level II |
| 犬 HSA 化療（Doxorubicin ± DACTILi）的實際獲益 | MST 延長有限（~140 vs ~90 天），飼主生活品質考量 | Level I |
| 犬淋巴瘤「rescue」protocol 的選擇 | 多種 rescue 方案存在但無 head-to-head 比較 | Level III |`,
  clinical_pearl: '面對任何新發現的腫塊，記住「先 FNA、再決定」這個黃金法則。一支 22-25G 針頭和 Diff-Quick 染色可以在 10 分鐘內告訴你最關鍵的第一步資訊——是發炎還是腫瘤、是 round cell 還是 epithelial/mesenchymal。這會直接影響你的後續決策（如 MCT 需要寬切緣手術而非簡單摘除）。',
  common_mistakes: [
    '在未做任何細胞學或組織病理前就「先切掉再說」——可能導致切緣不足需要二次手術',
    '將老年動物的腫塊視為「老了正常」而延誤診斷',
    '未在化療前與飼主充分溝通治療目標（治癒 vs 控制 vs 緩和）',
    '忽略品種易感性而未進行適當的腫瘤篩檢',
  ],
  disease_data: null,
  diagnostic_data: null,
  procedure_data: null,
  visual_placeholders: [
    { position: '診斷流程段落後', type: 'flowchart', description: '腫瘤診斷金字塔流程圖' },
    { position: '治療模式段落後', type: 'mind_map', description: '腫瘤治療四大模式心智圖' },
  ],
  interactive_placeholders: [],
  drug_api_links: [],
  references: [
    { type: 'textbook', citation: 'Withrow SJ, Vail DM, Page RL. Withrow & MacEwen\'s Small Animal Clinical Oncology, 6th ed. Elsevier, 2020.', relevance: '獸醫腫瘤科主要教科書' },
    { type: 'guideline', citation: 'VCOG — Veterinary Cooperative Oncology Group. Common Terminology Criteria for Adverse Events (VCOG-CTCAE) v2. Vet Comp Oncol. 2016;14(4):417-446.', relevance: '化療副作用分級標準' },
    { type: 'journal', citation: 'Paoloni M, Khanna C. Translation of new cancer treatments from pet dogs to humans. Nat Rev Cancer. 2008;8(2):147-156.', relevance: '比較腫瘤學概念與價值' },
  ],
  is_current: true,
  created_at: now,
};

/** 腫瘤生物學 — 概念型 */
const contentTumorBiology: NodeContent = {
  id: 'CONTENT-ONCO-L1-001',
  node_id: 'ONCO-L1-001',
  version: 1,
  summary: '腫瘤生物學是理解腫瘤發生、生長、浸潤及轉移的基礎科學。正常細胞經由多步驟基因突變（multistep carcinogenesis）轉化為腫瘤細胞，涉及原癌基因活化（oncogene activation）與抑癌基因失活（tumor suppressor loss）。Hallmarks of Cancer 架構描述了腫瘤細胞的十大核心特徵，包括持續增殖信號、逃避生長抑制、抗凋亡、啟動血管新生、啟動浸潤轉移、能量代謝重編程等。理解這些基本原理對於腫瘤的診斷、預後判斷和治療選擇至關重要。',
  learning_objectives: [
    '說明多步驟致癌機轉（multistep carcinogenesis）的概念',
    '區分原癌基因（proto-oncogene）與抑癌基因（tumor suppressor gene）的角色',
    '列出 Hallmarks of Cancer 的十大核心特徵',
    '描述細胞週期調控與腫瘤增殖的關聯',
    '解釋腫瘤分級（grading）與分期（staging）的生物學基礎',
  ],
  key_points: [
    '多步驟致癌機轉：正常細胞需累積多個基因突變才會轉化為惡性腫瘤（initiation → promotion → progression）',
    '原癌基因（如 c-KIT、RAS、MYC）：功能獲得性突變 → 持續增殖信號（油門卡住）',
    '抑癌基因（如 p53、Rb、PTEN）：功能喪失性突變 → 失去生長抑制（煞車失靈）',
    'Hallmarks of Cancer（Hanahan & Weinberg）：持續增殖信號、逃避生長抑制、抗凋亡、無限複製潛力、啟動血管新生、啟動浸潤轉移、基因不穩定、腫瘤促進性發炎、能量代謝重編程、免疫逃脫',
    '細胞週期：G1 → S → G2 → M，CDK/Cyclin 調控，p53 為 G1/S 檢查點關鍵',
    '腫瘤分級（Grade）反映細胞分化程度與生物學侵襲性；分期（Stage）反映腫瘤範圍',
    '獸醫臨床重要突變：c-KIT（MCT）、BRAF V595E（TCC）、p53（多種腫瘤）',
  ],
  body: `# 腫瘤生物學 (Tumor Biology)

## 一、核心概念與機轉 (Core Concept & Mechanism)



### 多步驟致癌機轉
腫瘤的形成並非單一事件，而是多個基因突變逐步累積的結果：

### 三階段模型
1. **啟動（Initiation）**：DNA 不可逆損傷（基因突變），但細胞外觀正常
2. **促進（Promotion）**：促進因子使突變細胞增殖擴張（可逆階段）
3. **進展（Progression）**：額外突變累積 → 惡性轉化 → 浸潤與轉移能力

### 原癌基因與抑癌基因
### 原癌基因（Proto-oncogenes → Oncogenes）
- 正常功能：促進細胞生長與分裂
- 突變類型：功能獲得性（gain-of-function）
- 比喻：油門卡住
- 獸醫重要範例：
  - **c-KIT**：SCF 受體，MCT 中約 30-50% 突變 → TKI 標靶治療
  - **RAS 家族**：MAPK 通路，多種腫瘤
  - **BRAF V595E**：犬 TCC 約 85% 帶有此突變

### 抑癌基因（Tumor Suppressor Genes）
- 正常功能：抑制細胞生長、啟動凋亡、修復 DNA
- 突變類型：功能喪失性（loss-of-function），通常需要雙等位基因失活（two-hit hypothesis）
- 比喻：煞車失靈
- 獸醫重要範例：
  - **p53**：「基因組的守護者」，超過 50% 的犬腫瘤有 p53 突變
  - **Rb**：G1/S 檢查點調控，骨肉瘤相關
  - **PTEN**：PI3K/AKT 通路負調控

### Hallmarks of Cancer
[圖片:Hallmarks of Cancer 十大特徵示意圖]

| 特徵 | 說明 | 獸醫臨床範例 |
|------|------|-------------|
| 持續增殖信號 | 自分泌/旁分泌生長因子 | c-KIT 突變 MCT |
| 逃避生長抑制 | 抑癌基因失活 | p53 突變 |
| 抗凋亡 | 逃避程序性細胞死亡 | Bcl-2 過表達淋巴瘤 |
| 無限複製潛力 | 端粒酶活化 | 多數惡性腫瘤 |
| 啟動血管新生 | VEGF 驅動新血管形成 | HSA（血管來源腫瘤） |
| 啟動浸潤轉移 | EMT、基質金屬蛋白酶 | OSA 肺轉移 |
| 基因不穩定 | DNA 修復缺陷 | 多種腫瘤 |
| 腫瘤促進性發炎 | 慢性發炎促進腫瘤 | FISS（注射處慢性發炎） |
| 能量代謝重編程 | Warburg effect（有氧糖酵解） | 腫瘤惡病質 |
| 免疫逃脫 | 逃避免疫監視 | PD-L1 表達 |

### 細胞週期與腫瘤增殖
細胞週期：G0（靜止期）→ G1 → S（DNA 合成）→ G2 → M（有絲分裂）

- **G1/S 檢查點**：p53/Rb 調控，決定是否進入 DNA 合成
- **G2/M 檢查點**：確認 DNA 複製正確性
- **有絲分裂指數（Mitotic Index）**：每 10 HPF 的有絲分裂數，為重要的組織學預後指標
- **Ki-67 指數**：增殖標記，標示所有非 G0 期細胞

化療藥物的細胞週期特異性：
- **週期特異性**：Vincristine（M 期）、Cytarabine（S 期）
- **週期非特異性**：Alkylating agents（Cyclophosphamide）、Doxorubicin

[互動:細胞週期與化療藥物作用位點互動圖]

## 二、臨床意義 (Clinical Significance)

## 三、人醫借鑒 (Translational Insights)

| 人醫工具/概念 | 獸醫應用潛力 | 現況 |
|-------------|-------------|------|
| CAR-T 細胞療法 | 犬 B 細胞淋巴瘤的細胞免疫治療 | 犬 CAR-T 試驗已啟動 |
| 腫瘤疫苗 | 犬黑色素瘤 DNA 疫苗（Oncept） | 犬黑色素瘤疫苗已 USDA 核准 |
| 光免疫療法（photoimmunotherapy） | 犬淺表腫瘤的免疫導引光動力治療 | 早期臨床試驗中 |
| 奈米藥物遞送 | 犬腫瘤局部高濃度化療——減少全身毒性 | 研究階段 |

## 四、臨床爭議與知識空缺 (Controversies & Knowledge Gaps)

| 爭議議題 | 現況 | Evidence Level |
|---------|------|---------------|
| 犬 MCT Grade II（Patnaik）的異質性 | 同一級別預後差異大——Kiupel 二級制是否更好？ | Level II |
| 犬骨肉瘤截肢+化療 vs 保肢+化療 | 保肢術感染/植入物失敗率高，長期存活是否等同 | Level II |
| 犬 HSA 化療（Doxorubicin ± DACTILi）的實際獲益 | MST 延長有限（~140 vs ~90 天），飼主生活品質考量 | Level I |
| 犬淋巴瘤「rescue」protocol 的選擇 | 多種 rescue 方案存在但無 head-to-head 比較 | Level III |`,
  clinical_pearl: '理解原癌基因與抑癌基因的概念直接影響臨床決策。最典型的例子是犬 MCT 的 c-KIT 突變——這不只是一個學術概念，而是決定是否使用 TKI 標靶治療（Toceranib/Masitinib）的關鍵。同樣地，BRAF V595E 突變讓犬 TCC 有了非侵入性的尿液 PCR 診斷工具。分子腫瘤學正在從基礎走向臨床。',
  common_mistakes: [
    '將良性腫瘤與惡性腫瘤混為一談——兩者在生物學行為（浸潤、轉移能力）上有本質差異',
    '認為單一基因突變就足以導致癌症——多步驟致癌機轉需要多個突變累積',
    '忽略有絲分裂指數作為預後指標的重要性——Kiupel MCT 分級以有絲分裂指數為核心',
    '未理解細胞週期特異性對化療排程的影響——週期特異性藥物需要足夠的暴露時間',
  ],
  disease_data: null,
  diagnostic_data: null,
  procedure_data: null,
  visual_placeholders: [
    { position: 'Hallmarks 段落', type: 'mind_map', description: 'Hallmarks of Cancer 十大特徵心智圖' },
    { position: '細胞週期段落', type: 'animated_diagram', description: '細胞週期與化療藥物作用位點動態圖' },
  ],
  interactive_placeholders: [
    { position: '細胞週期段落後', type: 'interactive_diagram', description: '點擊細胞週期各階段顯示對應化療藥物' },
  ],
  drug_api_links: ['Vincristine', 'Cyclophosphamide', 'Doxorubicin'],
  references: [
    { type: 'textbook', citation: 'Withrow SJ, Vail DM, Page RL. Withrow & MacEwen\'s Small Animal Clinical Oncology, 6th ed. Elsevier, 2020. Chapter 1: The Biology of Cancer.', relevance: '腫瘤生物學基礎章節' },
    { type: 'journal', citation: 'Hanahan D, Weinberg RA. Hallmarks of cancer: the next generation. Cell. 2011;144(5):646-674.', relevance: 'Hallmarks of Cancer 經典文獻' },
    { type: 'journal', citation: 'Schiffman JD, Breen M. Comparative oncology: what dogs and other species can teach us about humans with cancer. Philos Trans R Soc Lond B Biol Sci. 2015;370(1673):20140231.', relevance: '比較腫瘤學與犬腫瘤遺傳學' },
    { type: 'guideline', citation: 'AAHA Oncology Guidelines for Dogs and Cats. J Am Anim Hosp Assoc. 2016;52(4):181-204.', relevance: 'AAHA 腫瘤科指引——腫瘤生物學基本概念' },
  ],
  is_current: true,
  created_at: now,
};

/** 腫瘤免疫學 — 概念型 */
const contentTumorImmunology: NodeContent = {
  id: 'CONTENT-ONCO-L1-002',
  node_id: 'ONCO-L1-002',
  version: 1,
  summary: '腫瘤免疫學研究免疫系統與腫瘤之間的交互作用。免疫監視（immunosurveillance）理論指出免疫系統可辨識並消滅腫瘤細胞，但腫瘤透過多種機制逃脫免疫攻擊。Cancer Immunoediting 三階段模型（消滅→平衡→逃脫）描述了腫瘤與免疫系統的動態關係。在獸醫腫瘤科，犬黑色素瘤疫苗（Oncept）是首個獲 USDA 條件性批准的治療性腫瘤疫苗，代表腫瘤免疫治療在獸醫領域的重要突破。',
  learning_objectives: [
    '說明免疫監視（immunosurveillance）與免疫逃脫（immune escape）的概念',
    '描述 Cancer Immunoediting 的三個階段：消滅、平衡、逃脫',
    '列出腫瘤免疫逃脫的主要機制',
    '解釋犬黑色素瘤疫苗（Oncept）的免疫學原理',
    '辨識獸醫領域中免疫檢查點（immune checkpoint）治療的發展現況',
  ],
  key_points: [
    '免疫監視：NK 細胞、CD8+ CTL、巨噬細胞可辨識並殺滅腫瘤細胞',
    'Cancer Immunoediting：消滅（Elimination）→ 平衡（Equilibrium）→ 逃脫（Escape）',
    '腫瘤抗原分類：腫瘤特異性抗原（TSA，如 mutated proteins）和腫瘤相關抗原（TAA，如 tyrosinase）',
    '免疫逃脫機制：MHC-I 下調、PD-L1 表達、Treg 細胞招募、免疫抑制性細胞激素分泌（TGF-β、IL-10）、骨髓來源抑制細胞（MDSC）',
    'Oncept 疫苗：人 tyrosinase DNA 疫苗，打破對自身腫瘤抗原的免疫耐受',
    '免疫檢查點：PD-1/PD-L1 與 CTLA-4 通路在犬腫瘤中正在被研究',
    '腫瘤浸潤淋巴球（TIL）：與預後相關，高 TIL 通常預後較好',
  ],
  body: `# 腫瘤免疫學 (Tumor Immunology)

## 一、核心概念與機轉 (Core Concept & Mechanism)



### 免疫監視理論
免疫系統具有辨識並消滅腫瘤細胞的能力，此即免疫監視（immunosurveillance）。參與的免疫細胞包括：

- **NK 細胞**：辨識 MHC-I 表達下降的腫瘤細胞（「missing self」）
- **CD8+ 細胞毒性 T 細胞（CTL）**：辨識 MHC-I 呈現的腫瘤抗原
- **巨噬細胞**：M1 型具有抗腫瘤活性，但 M2 型可促進腫瘤
- **樹突細胞（DC）**：抗原呈現，啟動適應性免疫

### Cancer Immunoediting
腫瘤與免疫系統的交互作用為動態過程，分為三個階段：

### 1. 消滅期（Elimination）
- 免疫系統成功辨識並清除腫瘤細胞
- 先天免疫（NK）與適應性免疫（CTL）協同作用
- 多數早期腫瘤細胞被消滅而不形成臨床腫瘤

### 2. 平衡期（Equilibrium）
- 免疫系統控制腫瘤生長但未能完全清除
- 免疫壓力篩選出低免疫原性（low immunogenicity）克隆
- 可持續數月至數年（潛伏期）

### 3. 逃脫期（Escape）
- 腫瘤細胞獲得逃避免疫的能力
- 臨床上可見的腫瘤出現
- 逃脫機制多樣

### 腫瘤免疫逃脫機制
| 機制 | 說明 | 臨床意義 |
|------|------|----------|
| MHC-I 下調 | 減少腫瘤抗原呈現 | CTL 無法辨識腫瘤 |
| PD-L1 過表達 | 與 T 細胞 PD-1 結合 → 抑制 T 細胞 | 免疫檢查點治療標靶 |
| Treg 細胞招募 | CD4+CD25+FoxP3+ → 抑制效應 T 細胞 | 腫瘤微環境免疫抑制 |
| MDSC 招募 | 骨髓來源抑制細胞 → 多重免疫抑制 | 與預後不良相關 |
| 免疫抑制細胞激素 | TGF-β、IL-10、VEGF | 抑制抗腫瘤免疫 |
| 免疫原性喪失 | 腫瘤抗原突變或喪失 | 免疫逃避的最終機制 |

### 獸醫腫瘤免疫治療
### 犬黑色素瘤疫苗（Oncept）
- **類型**：人 tyrosinase DNA 疫苗
- **原理**：人 tyrosinase 與犬同源但不完全相同 → 打破自身抗原的免疫耐受
- **適應症**：犬口腔黑色素瘤 WHO Stage II-III，局部控制良好後
- **療程**：經皮注射（Canine Transdermal Device），每 2 週 × 4 次，之後每 6 個月追加

### 免疫檢查點抑制劑（研究中）
- 犬抗 PD-1/PD-L1 抗體正在臨床試驗中
- 初步數據顯示在犬口腔黑色素瘤和未分化肉瘤中有潛在療效
- 尚未有獸醫市售產品（截至 2025 年）

[圖片:Cancer Immunoediting 三階段示意圖]

## 二、臨床意義 (Clinical Significance)

## 三、人醫借鑒 (Translational Insights)

| 人醫工具/概念 | 獸醫應用潛力 | 現況 |
|-------------|-------------|------|
| CAR-T 細胞療法 | 犬 B 細胞淋巴瘤的細胞免疫治療 | 犬 CAR-T 試驗已啟動 |
| 腫瘤疫苗 | 犬黑色素瘤 DNA 疫苗（Oncept） | 犬黑色素瘤疫苗已 USDA 核准 |
| 光免疫療法（photoimmunotherapy） | 犬淺表腫瘤的免疫導引光動力治療 | 早期臨床試驗中 |
| 奈米藥物遞送 | 犬腫瘤局部高濃度化療——減少全身毒性 | 研究階段 |

## 四、臨床爭議與知識空缺 (Controversies & Knowledge Gaps)

| 爭議議題 | 現況 | Evidence Level |
|---------|------|---------------|
| 犬 MCT Grade II（Patnaik）的異質性 | 同一級別預後差異大——Kiupel 二級制是否更好？ | Level II |
| 犬骨肉瘤截肢+化療 vs 保肢+化療 | 保肢術感染/植入物失敗率高，長期存活是否等同 | Level II |
| 犬 HSA 化療（Doxorubicin ± DACTILi）的實際獲益 | MST 延長有限（~140 vs ~90 天），飼主生活品質考量 | Level I |
| 犬淋巴瘤「rescue」protocol 的選擇 | 多種 rescue 方案存在但無 head-to-head 比較 | Level III |`,
  clinical_pearl: '免疫抑制狀態下的動物腫瘤發生率增加——這驗證了免疫監視理論。臨床上要注意：長期使用免疫抑制劑（如 cyclosporine、高劑量 corticosteroids）的犬貓，腫瘤（尤其是淋巴瘤和皮膚鱗狀細胞癌）的風險可能增加。在開始化療前使用 corticosteroids 也可能因誘導多重抗藥性蛋白（P-glycoprotein）表達而影響後續化療效果（尤其是淋巴瘤）。',
  common_mistakes: [
    '認為免疫系統完全無法對抗腫瘤——免疫監視確實存在，但腫瘤可透過免疫逃脫機制克服',
    '誤以為所有腫瘤疫苗都是預防性的——Oncept 是治療性疫苗，用於已確診的黑色素瘤',
    '在開始 CHOP 化療前使用 corticosteroids 治療淋巴瘤——可能誘導 P-glycoprotein 導致多重抗藥性',
    '將人醫免疫檢查點抑制劑的療效直接套用於獸醫——犬的 PD-1/PD-L1 通路仍在研究階段',
  ],
  disease_data: null,
  diagnostic_data: null,
  procedure_data: null,
  visual_placeholders: [
    { position: 'Immunoediting 段落後', type: 'timeline', description: 'Cancer Immunoediting 三階段時間軸' },
    { position: '免疫逃脫表格後', type: 'flowchart', description: '腫瘤免疫逃脫機制示意圖' },
  ],
  interactive_placeholders: [],
  drug_api_links: [],
  references: [
    { type: 'textbook', citation: 'Withrow SJ, Vail DM, Page RL. Withrow & MacEwen\'s Small Animal Clinical Oncology, 6th ed. Elsevier, 2020. Chapter 11: Tumor Immunology and Immunotherapy.', relevance: '獸醫腫瘤免疫學基礎' },
    { type: 'journal', citation: 'Bergman PJ et al. Long-term survival of dogs with advanced malignant melanoma after DNA vaccination with xenogeneic human tyrosinase. Clin Cancer Res. 2003;9(4):1284-1290.', relevance: 'Oncept 疫苗原始研究' },
    { type: 'journal', citation: 'Maekawa N et al. A canine chimeric monoclonal antibody targeting PD-L1 and its clinical efficacy in canine oral malignant melanoma or undifferentiated sarcoma. Sci Rep. 2017;7(1):8951.', relevance: '犬 PD-L1 抗體初步研究' },
    { type: 'guideline', citation: 'VCOG — Veterinary Cooperative Oncology Group. Common Terminology Criteria for Adverse Events (VCOG-CTCAE) v2. Vet Comp Oncol. 2016;14(4):417-446.', relevance: '免疫治療相關副作用評估標準' },
  ],
  is_current: true,
  created_at: now,
};

/** 腫瘤遺傳學基礎 — 概念型 */
const contentCancerGenetics: NodeContent = {
  id: 'CONTENT-ONCO-L1-003',
  node_id: 'ONCO-L1-003',
  version: 1,
  summary: '腫瘤遺傳學研究基因突變與腫瘤發生的關聯。伴侶動物腫瘤中已辨識出多個具有臨床意義的基因變異，包括 c-KIT 突變（MCT）、BRAF V595E（TCC）、p53 突變（多種腫瘤）。品種遺傳因素在犬腫瘤中扮演極重要的角色——特定品種對特定腫瘤的高度易感性（如 Golden Retriever 對淋巴瘤/HSA、Boxer 對 MCT）提示了遺傳背景的影響。基因組學和液態活檢等技術正逐步進入獸醫腫瘤臨床實踐。',
  learning_objectives: [
    '說明驅動突變（driver mutation）與乘客突變（passenger mutation）的區別',
    '列出獸醫腫瘤學中具臨床意義的關鍵基因突變',
    '描述犬品種遺傳因素對腫瘤易感性的影響',
    '解釋基因檢測在腫瘤診斷和治療中的應用（如 c-KIT PCR、BRAF 尿液 PCR）',
    '概述液態活檢（liquid biopsy）在獸醫腫瘤科的發展',
  ],
  key_points: [
    '驅動突變（driver）：直接促進腫瘤發展，為治療標靶；乘客突變（passenger）：伴隨存在但非致癌關鍵',
    '犬腫瘤關鍵突變：c-KIT（MCT 30-50%）、BRAF V595E（TCC 85%）、p53（多種腫瘤 > 50%）',
    '品種遺傳易感性範例：Golden Retriever（淋巴瘤、HSA、MCT）、Boxer（MCT、淋巴瘤）、Scottish Terrier（TCC 18-20x）、Flat-Coated Retriever（組織球性肉瘤）',
    'Two-hit hypothesis（Knudson）：抑癌基因需雙等位基因失活才喪失功能',
    '表觀遺傳學（epigenetics）：DNA 甲基化、組蛋白修飾影響基因表達而不改變 DNA 序列',
    '液態活檢：血液中的循環腫瘤 DNA（ctDNA）和循環腫瘤細胞（CTC）用於腫瘤監測',
    '基因組學應用：全基因組定序（WGS）揭示犬腫瘤的突變特徵（mutational signature）',
  ],
  body: `# 腫瘤遺傳學基礎 (Cancer Genetics Basics)

## 一、核心概念與機轉 (Core Concept & Mechanism)



### 基因突變與腫瘤發生
### 驅動突變 vs 乘客突變
- **驅動突變（Driver mutation）**：直接促進腫瘤形成和進展，為治療標靶
- **乘客突變（Passenger mutation）**：隨細胞分裂累積但不影響腫瘤生長

### 突變類型
- 點突變（Point mutation）：單一核苷酸改變（如 BRAF V595E）
- 基因擴增（Gene amplification）：基因拷貝數增加
- 染色體轉位（Translocation）：基因融合產生新型蛋白
- 基因缺失（Deletion）：抑癌基因喪失

### 獸醫腫瘤關鍵基因突變
| 基因 | 突變類型 | 腫瘤 | 臨床應用 |
|------|----------|------|----------|
| c-KIT | 功能獲得性（exon 11 最常見） | 犬 MCT（30-50%） | 預後指標 + TKI 標靶（Toceranib） |
| BRAF | V595E 點突變 | 犬 TCC（~85%） | 尿液 PCR 非侵入性診斷 |
| p53 | 功能喪失性 | 多種犬腫瘤（> 50%） | 預後不良指標 |
| MDM2 | 過表達 | 軟組織肉瘤 | p53 降解增加 |
| PDGFR | 功能獲得性 | GIST | TKI 標靶 |

### 品種遺傳易感性
犬腫瘤的品種偏好是腫瘤遺傳學最直觀的表現：

### 高風險品種-腫瘤關聯
- **Golden Retriever**：淋巴瘤、HSA、MCT（終生腫瘤風險 > 60%）
- **Boxer**：MCT、淋巴瘤、腦腫瘤
- **Scottish Terrier**：TCC（18-20 倍風險）
- **Flat-Coated Retriever**：組織球性肉瘤（極高風險）
- **Bernese Mountain Dog**：組織球性肉瘤
- **Rottweiler**：骨肉瘤
- **German Shepherd**：HSA

GWAS（全基因組關聯分析）研究已辨識出多個與犬腫瘤易感性相關的基因座位。

### 表觀遺傳學與腫瘤
不改變 DNA 序列但影響基因表達的可遺傳修飾：
- **DNA 甲基化**：啟動子過度甲基化 → 抑癌基因沉默
- **組蛋白修飾**：乙醯化/甲基化影響染色質結構
- **非編碼 RNA**（miRNA）：調控 mRNA 穩定性和翻譯

### 分子診斷技術進展
### 液態活檢（Liquid Biopsy）
- 循環腫瘤 DNA（ctDNA）：腫瘤釋放的游離 DNA 片段
- 循環腫瘤細胞（CTC）：血液中的腫瘤細胞
- 應用：早期偵測、治療監測、微小殘留病灶追蹤
- 犬 TCC BRAF 尿液 PCR 為液態活檢的成功範例

### 次世代定序（NGS）
- 全基因組定序（WGS）、全外顯子組定序（WES）
- 突變特徵（Mutational Signature）分析
- 犬腫瘤基因組研究資源日益豐富

[圖片:犬品種-腫瘤遺傳易感性關聯圖]

## 二、臨床意義 (Clinical Significance)

## 三、人醫借鑒 (Translational Insights)

| 人醫工具/概念 | 獸醫應用潛力 | 現況 |
|-------------|-------------|------|
| CAR-T 細胞療法 | 犬 B 細胞淋巴瘤的細胞免疫治療 | 犬 CAR-T 試驗已啟動 |
| 腫瘤疫苗 | 犬黑色素瘤 DNA 疫苗（Oncept） | 犬黑色素瘤疫苗已 USDA 核准 |
| 光免疫療法（photoimmunotherapy） | 犬淺表腫瘤的免疫導引光動力治療 | 早期臨床試驗中 |
| 奈米藥物遞送 | 犬腫瘤局部高濃度化療——減少全身毒性 | 研究階段 |

## 四、臨床爭議與知識空缺 (Controversies & Knowledge Gaps)

| 爭議議題 | 現況 | Evidence Level |
|---------|------|---------------|
| 犬 MCT Grade II（Patnaik）的異質性 | 同一級別預後差異大——Kiupel 二級制是否更好？ | Level II |
| 犬骨肉瘤截肢+化療 vs 保肢+化療 | 保肢術感染/植入物失敗率高，長期存活是否等同 | Level II |
| 犬 HSA 化療（Doxorubicin ± DACTILi）的實際獲益 | MST 延長有限（~140 vs ~90 天），飼主生活品質考量 | Level I |
| 犬淋巴瘤「rescue」protocol 的選擇 | 多種 rescue 方案存在但無 head-to-head 比較 | Level III |`,
  clinical_pearl: '在台灣的臨床實務中，品種遺傳易感性是做為腫瘤篩檢建議的重要依據。例如，Golden Retriever 飼主應在犬 5-6 歲後定期進行全面健檢（腹部超音波篩檢 HSA、觸診淋巴結和皮膚腫塊）。Scottish Terrier 飼主則需注意血尿等泌尿道症狀的早期評估。基因檢測（c-KIT PCR 用於 MCT、BRAF PCR 用於 TCC）已不再是研究室專利，而是許多商業實驗室可提供的臨床服務。',
  common_mistakes: [
    '將品種偏好誤解為「只有這些品種會得這種腫瘤」——任何品種和混種犬都可能發生任何腫瘤',
    '未在 MCT 手術後送 c-KIT 突變檢測——突變結果影響預後評估和後續 TKI 治療決策',
    '不了解 BRAF V595E 尿液 PCR 的限制——敏感度約 85%（15% 假陰性），需搭配影像學',
    '忽略表觀遺傳學在腫瘤中的角色——DNA 甲基化異常是腫瘤發生的重要早期事件',
  ],
  disease_data: null,
  diagnostic_data: null,
  procedure_data: null,
  visual_placeholders: [
    { position: '品種易感性段落後', type: 'comparison_table', description: '犬品種-腫瘤易感性對照表' },
    { position: '基因突變表格後', type: 'flowchart', description: '基因突變 → 信號通路 → 治療標靶關聯圖' },
  ],
  interactive_placeholders: [],
  drug_api_links: ['Toceranib'],
  references: [
    { type: 'textbook', citation: 'Withrow SJ, Vail DM, Page RL. Withrow & MacEwen\'s Small Animal Clinical Oncology, 6th ed. Elsevier, 2020. Chapter 2: Tumor Biology and Metastasis.', relevance: '腫瘤遺傳學基礎章節' },
    { type: 'journal', citation: 'Mochizuki H et al. BRAF mutations in canine cancers. PLoS One. 2015;10(6):e0129534.', relevance: 'BRAF 突變在犬腫瘤的發現與臨床應用' },
    { type: 'journal', citation: 'Schiffman JD, Breen M. Comparative oncology: what dogs and other species can teach us about humans with cancer. Philos Trans R Soc Lond B Biol Sci. 2015;370(1673):20140231.', relevance: '犬腫瘤基因組學比較研究' },
    { type: 'guideline', citation: 'AAHA Oncology Guidelines for Dogs and Cats. J Am Anim Hosp Assoc. 2016;52(4):181-204.', relevance: 'AAHA 腫瘤科指引——分子檢測與標靶治療概述' },
  ],
  is_current: true,
  created_at: now,
};

/** 腫瘤轉移機轉 — 機轉型 */
const contentMetastasis: NodeContent = {
  id: 'CONTENT-ONCO-L2-001',
  node_id: 'ONCO-L2-001',
  version: 1,
  summary: '腫瘤轉移是惡性腫瘤細胞從原發部位擴散到遠處器官並建立新腫瘤病灶的過程，是多數腫瘤患者死亡的主要原因。轉移級聯（metastatic cascade）包括局部浸潤、內滲、循環中存活、外滲和轉移部位定殖。上皮-間質轉化（EMT）賦予腫瘤細胞運動和浸潤能力。不同腫瘤有特定的器官親和性（organ tropism），如犬骨肉瘤好發肺轉移、HSA 好發肝肺轉移。理解轉移機轉是化療輔助治療和新藥開發的基礎。',
  learning_objectives: [
    '描述轉移級聯（metastatic cascade）的五個主要步驟',
    '說明上皮-間質轉化（EMT）在浸潤轉移中的角色',
    '列出影響腫瘤器官親和性的 seed-and-soil 理論',
    '區分血行性轉移與淋巴性轉移的途徑與腫瘤類型偏好',
    '解釋轉移前微環境（pre-metastatic niche）的概念',
  ],
  key_points: [
    '轉移級聯：局部浸潤 → 內滲（intravasation）→ 循環中存活 → 外滲（extravasation）→ 轉移定殖（colonization）',
    'EMT（上皮-間質轉化）：E-cadherin 下調 + N-cadherin 上調 → 細胞黏附力降低、運動能力增加',
    'Seed-and-soil 理論（Paget, 1889）：轉移不是隨機的——腫瘤細胞（seed）在特定器官微環境（soil）中才能生長',
    '基質金屬蛋白酶（MMP）：降解細胞外基質（ECM）→ 促進浸潤和血管內滲',
    '血行性轉移：肉瘤（OSA → 肺、HSA → 肝/肺）；淋巴性轉移：癌（乳腺癌 → 區域淋巴結）',
    '轉移前微環境（pre-metastatic niche）：原發腫瘤釋放因子預先改造遠端器官的微環境',
    '犬 OSA 確診時 > 90% 已有微轉移（胸腔 X 光正常）——解釋了截肢不加化療預後差的原因',
    '轉移效率極低：僅 < 0.01% 的循環腫瘤細胞最終成功定殖形成轉移灶',
  ],
  body: `# 腫瘤轉移機轉 (Metastasis Mechanisms)

## 一、核心概念與機轉 (Core Concept & Mechanism)



### 轉移級聯
轉移是一個多步驟、低效率的過程。腫瘤細胞必須成功完成每一個步驟才能形成遠端轉移灶：

### 1. 局部浸潤（Local Invasion）
- EMT 啟動 → 細胞間黏附降低
- MMP 分泌 → 基底膜和 ECM 降解
- 腫瘤細胞獲得運動能力

### 2. 內滲（Intravasation）
- 腫瘤細胞穿過血管或淋巴管壁進入循環
- 腫瘤相關血管新生提供更多進入點（新生血管通透性高）

### 3. 循環中存活
- 循環腫瘤細胞（CTC）面臨剪切力、免疫攻擊
- 形成腫瘤細胞-血小板聚集體以保護自身
- 存活率極低（< 0.01% 成功轉移）

### 4. 外滲（Extravasation）
- CTC 黏附於目標器官微血管內皮
- 穿過血管壁進入目標器官
- 黏附分子（selectin、integrin）介導

### 5. 轉移定殖（Colonization）
- 最關鍵也最困難的步驟
- 需適應新微環境（seed-and-soil）
- 微轉移可長期休眠後再活化

### 上皮-間質轉化（EMT）
EMT 是上皮細胞失去極性和細胞間黏附、獲得間質細胞表型的過程：

- E-cadherin 下調 → 細胞間黏附喪失
- N-cadherin 上調 → 與間質細胞互動增強
- Vimentin 表達增加 → 細胞骨架重組
- Snail、Twist、ZEB 等轉錄因子驅動

### 器官親和性（Organ Tropism）
### 獸醫臨床常見轉移模式
| 原發腫瘤 | 主要轉移部位 | 機制 |
|----------|-------------|------|
| 犬 OSA | 肺（> 90%） | 血行性，肺毛細血管床 |
| 犬 HSA | 肝、肺、大網膜 | 血行性，血管來源 |
| 犬口腔黑色素瘤 | 肺、區域淋巴結 | 血行性 + 淋巴性 |
| 犬乳腺癌 | 肺、區域淋巴結 | 血行性 + 淋巴性 |
| 犬淋巴瘤 | 全身淋巴組織、肝脾 | 淋巴性 + 血行性 |
| 貓乳腺癌 | 肺、胸膜 | 血行性 |

### 轉移前微環境
原發腫瘤在轉移發生前即透過以下機制「預處理」遠端器官：
- 分泌外泌體（exosomes）至目標器官
- VEGF/PIGF 招募骨髓來源細胞至目標器官
- 改變目標器官的 ECM 和免疫環境
- 建立有利於轉移細胞存活的微環境

[圖片:轉移級聯五步驟示意圖]

## 二、臨床意義 (Clinical Significance)

## 三、人醫借鑒 (Translational Insights)

| 人醫工具/概念 | 獸醫應用潛力 | 現況 |
|-------------|-------------|------|
| CAR-T 細胞療法 | 犬 B 細胞淋巴瘤的細胞免疫治療 | 犬 CAR-T 試驗已啟動 |
| 腫瘤疫苗 | 犬黑色素瘤 DNA 疫苗（Oncept） | 犬黑色素瘤疫苗已 USDA 核准 |
| 光免疫療法（photoimmunotherapy） | 犬淺表腫瘤的免疫導引光動力治療 | 早期臨床試驗中 |
| 奈米藥物遞送 | 犬腫瘤局部高濃度化療——減少全身毒性 | 研究階段 |

## 四、臨床爭議與知識空缺 (Controversies & Knowledge Gaps)

| 爭議議題 | 現況 | Evidence Level |
|---------|------|---------------|
| 犬 MCT Grade II（Patnaik）的異質性 | 同一級別預後差異大——Kiupel 二級制是否更好？ | Level II |
| 犬骨肉瘤截肢+化療 vs 保肢+化療 | 保肢術感染/植入物失敗率高，長期存活是否等同 | Level II |
| 犬 HSA 化療（Doxorubicin ± DACTILi）的實際獲益 | MST 延長有限（~140 vs ~90 天），飼主生活品質考量 | Level I |
| 犬淋巴瘤「rescue」protocol 的選擇 | 多種 rescue 方案存在但無 head-to-head 比較 | Level III |`,
  clinical_pearl: '「微轉移」的概念直接影響臨床治療決策。犬骨肉瘤是最好的例子：即使胸腔 X 光完全正常，確診時已有 > 90% 的犬存在肺微轉移。這就是為什麼「截肢不搭配化療」的中位存活僅 4-5 個月。Carboplatin 或 Doxorubicin 輔助化療的目標正是消滅這些看不見的微轉移，將中位存活延長至 10-12 個月。同樣的邏輯也適用於犬 HSA——脾臟切除後化療是必要的。',
  common_mistakes: [
    '認為「X 光看不到轉移就沒有轉移」——微轉移在影像學可見之前已存在',
    '忽略區域淋巴結作為轉移的第一站——即使觸診正常也應進行 FNA（如 MCT、乳腺腫瘤）',
    '不理解化療輔助治療的目標是消滅微轉移——而非對已可見的轉移灶有效',
    '將所有腫瘤的轉移模式一概而論——不同腫瘤有不同的器官親和性和轉移途徑',
  ],
  disease_data: null,
  diagnostic_data: null,
  procedure_data: null,
  visual_placeholders: [
    { position: '轉移級聯段落後', type: 'animated_diagram', description: '轉移級聯五步驟動態示意圖' },
    { position: '器官親和性段落後', type: 'annotated_image', description: '犬腫瘤常見轉移模式器官圖' },
  ],
  interactive_placeholders: [],
  drug_api_links: ['Carboplatin', 'Doxorubicin'],
  references: [
    { type: 'textbook', citation: 'Withrow SJ, Vail DM, Page RL. Withrow & MacEwen\'s Small Animal Clinical Oncology, 6th ed. Elsevier, 2020. Chapter 2: Tumor Biology and Metastasis.', relevance: '腫瘤轉移機轉完整章節' },
    { type: 'journal', citation: 'Paget S. The distribution of secondary growths in cancer of the breast. Lancet. 1889;1(3421):571-573.', relevance: 'Seed-and-soil 理論經典文獻' },
    { type: 'journal', citation: 'Fidler IJ. The pathogenesis of cancer metastasis: the "seed and soil" hypothesis revisited. Nat Rev Cancer. 2003;3(6):453-458.', relevance: '轉移機轉現代回顧' },
    { type: 'guideline', citation: 'Owen LN. TNM Classification of Tumours in Domestic Animals. WHO, 1st ed. 1980.', relevance: 'WHO 獸醫腫瘤 TNM 分期——轉移（M）分類標準' },
  ],
  is_current: true,
  created_at: now,
};

/** 副腫瘤症候群 — 機轉型 */
const contentParaneoplastic: NodeContent = {
  id: 'CONTENT-ONCO-L2-002',
  node_id: 'ONCO-L2-002',
  version: 1,
  summary: '副腫瘤症候群（Paraneoplastic Syndromes, PNS）是由腫瘤分泌的荷爾蒙、細胞激素或自體抗體引起的遠端系統性效應，不直接由腫瘤的局部浸潤或轉移造成。高血鈣症（Humoral Hypercalcemia of Malignancy, HHM）是犬最常見的 PNS，常見於淋巴瘤（T-cell）和肛門囊腺癌。辨識 PNS 具有重要的臨床意義：可為腫瘤的首發表現線索、影響治療決策、並可作為腫瘤反應的監測指標。',
  learning_objectives: [
    '列出獸醫腫瘤科最常見的副腫瘤症候群及其相關腫瘤',
    '說明惡性腫瘤高血鈣症（HHM）的病理生理機轉',
    '描述副腫瘤相關低血糖與胰島素瘤的臨床表現',
    '解釋癌症惡病質（cancer cachexia）的代謝機轉',
    '辨識 PNS 作為腫瘤診斷線索和治療反應指標的臨床應用',
  ],
  key_points: [
    'HHM 為犬最常見 PNS：PTHrP（副甲狀腺素相關蛋白）分泌 → 骨吸收增加 + 腎鈣回收增加',
    'HHM 常見相關腫瘤：淋巴瘤（T-cell，約 10-40%）、肛門囊腺癌（> 25%）、多發性骨髓瘤',
    '低血糖 PNS：胰島素瘤（β 細胞腫瘤）→ 過量胰島素分泌；大型間質腫瘤 → IGF-II 分泌',
    '癌症惡病質：TNF-α、IL-1、IL-6 介導的代謝重編程 → 肌肉流失、脂肪分解、負氮平衡',
    '紅血球增多症：腎臟腫瘤分泌 EPO → 繼發性紅血球增多',
    '肥大型骨病（Hypertrophic Osteopathy, HO）：肺部腫瘤相關的肢端骨膜增生，犬 TCC 也可見',
    'PNS 處理原則：治療原發腫瘤為根本，同時進行症狀支持治療',
    '高血鈣緊急處置：0.9% NaCl 利尿 + Furosemide + Prednisone（若非淋巴瘤）± Bisphosphonates',
  ],
  body: `# 副腫瘤症候群 (Paraneoplastic Syndromes)

## 一、核心概念與機轉 (Core Concept & Mechanism)



### 定義
副腫瘤症候群是腫瘤產生的荷爾蒙、肽類、細胞激素或自體抗體引起的遠端全身性效應。PNS 不是由腫瘤的直接侵犯、壓迫或轉移造成的。

### 惡性腫瘤高血鈣症（HHM）
### 機轉
- **PTHrP（副甲狀腺素相關蛋白）**：腫瘤分泌，為最主要機轉（> 80%）
  - 與 PTH 受體結合 → 骨吸收增加 + 腎小管鈣回收增加
  - 但不刺激 1,25-(OH)₂D₃ 合成（與原發性副甲狀腺機能亢進不同）
- 其他機轉：腫瘤直接骨溶蝕、腫瘤分泌活性維生素 D（淋巴瘤）

### 常見相關腫瘤
| 腫瘤 | HHM 發生率 | 特點 |
|------|-----------|------|
| T-cell 淋巴瘤 | 10-40% | 犬 HHM 最常見原因 |
| 肛門囊腺癌 | > 25% | 腫瘤可能很小但已造成高血鈣 |
| 多發性骨髓瘤 | 15-20% | 伴溶骨性病灶 |
| 胸腺瘤 | 偶見 | 貓較犬常見 |

### 臨床表現
- 多尿多渴（PU/PD）：最常見首發症狀
- 食慾減退、嗜睡、虛弱
- 嘔吐、便秘
- 心律不整（嚴重高血鈣）
- 腎損傷（鈣沉積導致腎小管損傷）

### 緊急處置
1. 0.9% NaCl 輸液利尿（促進鈣排出）：2-3 倍維持量
2. [藥物:Furosemide] 2-4 mg/kg IV q8-12h（增加鈣排出）
3. [藥物:Dexamethasone] 0.1-0.2 mg/kg IV（若確認非淋巴瘤——淋巴瘤需先取樣）
4. [藥物:Pamidronate] 1-2 mg/kg IV（bisphosphonate，抑制破骨細胞）
5. 最根本：治療原發腫瘤

### 副腫瘤低血糖
### 胰島素瘤（Insulinoma）
- β 細胞腫瘤 → 過量胰島素分泌 → 低血糖
- 好發中老年犬（中大型犬）
- Whipple's triad：低血糖症狀 + 血糖 < 60 mg/dL + 補糖後症狀緩解
- 診斷：低血糖時胰島素不適當升高（insulin:glucose ratio）

### 大型間質腫瘤（如肝臟腫瘤、平滑肌肉瘤）
- 分泌 IGF-II（非胰島素）→ 低血糖
- 腫瘤通常體積很大

### 癌症惡病質（Cancer Cachexia）
- 腫瘤分泌 TNF-α、IL-1、IL-6 → 代謝重編程
- 蛋白質分解增加 → 肌肉流失（sarcopenia）
- 脂肪分解增加 → 體重減輕
- 碳水化合物代謝：乳酸增加（Warburg effect）
- 營養支持原則：高蛋白、高脂肪、低碳水化合物飲食

### 其他 PNS
| PNS | 相關腫瘤 | 機轉 |
|-----|----------|------|
| 紅血球增多症 | 腎臟腫瘤、肝臟腫瘤 | EPO 分泌 |
| 肥大型骨病（HO） | 肺腫瘤、TCC | 神經/體液反射性骨膜增生 |
| DIC | HSA、肺癌 | 腫瘤促凝活性 |
| 重症肌無力 | 胸腺瘤 | 抗 AChR 自體抗體 |
| 發燒 | 淋巴瘤、白血病 | IL-1/IL-6 釋放 |

[圖片:副腫瘤症候群分類與臨床表現示意圖]

## 二、臨床意義 (Clinical Significance)

## 三、人醫借鑒 (Translational Insights)

| 人醫工具/概念 | 獸醫應用潛力 | 現況 |
|-------------|-------------|------|
| CAR-T 細胞療法 | 犬 B 細胞淋巴瘤的細胞免疫治療 | 犬 CAR-T 試驗已啟動 |
| 腫瘤疫苗 | 犬黑色素瘤 DNA 疫苗（Oncept） | 犬黑色素瘤疫苗已 USDA 核准 |
| 光免疫療法（photoimmunotherapy） | 犬淺表腫瘤的免疫導引光動力治療 | 早期臨床試驗中 |
| 奈米藥物遞送 | 犬腫瘤局部高濃度化療——減少全身毒性 | 研究階段 |

## 四、臨床爭議與知識空缺 (Controversies & Knowledge Gaps)

| 爭議議題 | 現況 | Evidence Level |
|---------|------|---------------|
| 犬 MCT Grade II（Patnaik）的異質性 | 同一級別預後差異大——Kiupel 二級制是否更好？ | Level II |
| 犬骨肉瘤截肢+化療 vs 保肢+化療 | 保肢術感染/植入物失敗率高，長期存活是否等同 | Level II |
| 犬 HSA 化療（Doxorubicin ± DACTILi）的實際獲益 | MST 延長有限（~140 vs ~90 天），飼主生活品質考量 | Level I |
| 犬淋巴瘤「rescue」protocol 的選擇 | 多種 rescue 方案存在但無 head-to-head 比較 | Level III |`,
  clinical_pearl: '高血鈣症是一個隱藏的腫瘤線索。在鑑別診斷「多尿多渴」時，血鈣檢測很容易被遺漏。記住「HARDIONS」助記法幫助高血鈣鑑別診斷：Hyperparathyroidism、Addison\'s、Renal disease、Vitamin D toxicity、Idiopathic（貓）、Osteolytic lesions、Neoplasia（HHM）、Spurious。另一個重要原則：在淋巴瘤確診前盡量不要使用 corticosteroids 治療高血鈣——因為 steroids 可殺滅淋巴瘤細胞導致後續取樣困難，且可能誘導多重抗藥性。',
  common_mistakes: [
    '在未確認腫瘤類型前使用 corticosteroids 治療高血鈣——若為淋巴瘤，會影響後續診斷和化療效果',
    '忽略肛門囊腺癌作為 HHM 的原因——直腸指檢是高血鈣犬的必要檢查步驟',
    '將癌症惡病質歸因於「吃不夠」而僅增加熱量——惡病質是代謝重編程，需要特殊營養策略',
    '未將副腫瘤症候群的緩解/復發作為腫瘤治療反應的指標——如高血鈣恢復正常提示淋巴瘤對化療有反應',
  ],
  disease_data: null,
  diagnostic_data: null,
  procedure_data: null,
  visual_placeholders: [
    { position: 'HHM 段落後', type: 'flowchart', description: '惡性腫瘤高血鈣症診斷與處置流程圖' },
    { position: '其他 PNS 表格後', type: 'mind_map', description: '副腫瘤症候群分類心智圖' },
  ],
  interactive_placeholders: [],
  drug_api_links: ['Furosemide', 'Dexamethasone', 'Pamidronate'],
  references: [
    { type: 'textbook', citation: 'Withrow SJ, Vail DM, Page RL. Withrow & MacEwen\'s Small Animal Clinical Oncology, 6th ed. Elsevier, 2020. Chapter 5: Paraneoplastic Syndromes.', relevance: '副腫瘤症候群完整章節' },
    { type: 'journal', citation: 'Bergman PJ. Paraneoplastic syndromes. In: Vail DM et al., eds. Withrow & MacEwen\'s Small Animal Clinical Oncology, 6th ed. 2020:83-97.', relevance: '獸醫副腫瘤症候群全面回顧' },
    { type: 'guideline', citation: 'Schenck PA et al. Disorders of calcium. In: DiBartola SP, ed. Fluid, Electrolyte, and Acid-Base Disorders in Small Animal Practice, 4th ed. Elsevier, 2012.', relevance: '高血鈣症診斷與治療指引' },
  ],
  is_current: true,
  created_at: now,
};

/** 抗藥機轉 — 機轉型 */
const contentDrugResistance: NodeContent = {
  id: 'CONTENT-ONCO-L2-003',
  node_id: 'ONCO-L2-003',
  version: 1,
  summary: '化療抗藥性（chemoresistance）是腫瘤治療失敗的主要原因。抗藥性可分為先天性（intrinsic）和後天獲得性（acquired）。最重要的機制是多重抗藥性（Multidrug Resistance, MDR），由 P-glycoprotein（P-gp，MDR1 基因產物）介導的藥物外排幫浦將化療藥物泵出細胞。在獸醫腫瘤科，犬淋巴瘤化療前使用 corticosteroids 可誘導 P-gp 表達是臨床上最重要的抗藥性議題。理解抗藥機轉有助於設計更有效的化療策略和避免不當用藥。',
  learning_objectives: [
    '區分先天性和後天獲得性化療抗藥性',
    '說明 P-glycoprotein（MDR1）介導的多重抗藥性機轉',
    '描述 corticosteroids 誘導 P-gp 表達對犬淋巴瘤化療的影響',
    '列出非 P-gp 相關的其他抗藥機制',
    '解釋抗藥性對化療方案設計（包括救援方案）的臨床指導意義',
  ],
  key_points: [
    '先天性抗藥：腫瘤對化療一開始即無反應；後天獲得性：初始有效後逐漸失去反應',
    'P-gp（MDR1 基因）：ABC 轉運蛋白家族，將脂溶性化療藥物泵出細胞（Doxorubicin、Vincristine、Vinblastine 等）',
    '犬淋巴瘤化療前使用 prednisone → 可誘導 P-gp 過表達 → 後續 CHOP 化療反應率降低',
    '非 P-gp 抗藥機制：藥物代謝酶增加、藥物標靶突變、DNA 修復增強、凋亡途徑缺陷、腫瘤幹細胞',
    'Goldie-Coldman 假說：腫瘤體積越大、突變累積越多、抗藥性克隆出現機率越高',
    'Norton-Simon 假說：化療效果與腫瘤生長速率成正比 → 支持劑量密集方案',
    '多藥聯合化療的理論基礎：使用不同機轉藥物降低抗藥性產生的機率',
    '犬 MDR1 基因突變（ABCB1-1Δ）：Collie 等品種的 P-gp 功能喪失 → 對 Ivermectin 等敏感（但這是藥物毒性而非抗藥性問題）',
  ],
  body: `# 抗藥機轉 (Drug Resistance Mechanisms)

## 一、核心概念與機轉 (Core Concept & Mechanism)



### 分類
### 先天性抗藥性（Intrinsic Resistance）
- 腫瘤對化療從一開始即無反應
- 可能原因：P-gp 基礎表達高、標靶缺失、凋亡途徑缺陷
- 範例：犬肉瘤對大多數化療藥物的反應率低（< 20%）

### 後天獲得性抗藥性（Acquired Resistance）
- 初始對化療有反應，但治療過程中逐漸失效
- 化療選擇壓力下，抗藥性克隆被篩選出來
- 範例：犬淋巴瘤 CHOP 化療後復發

### P-glycoprotein 與多重抗藥性（MDR）
### P-gp（MDR1/ABCB1）
- ABC 轉運蛋白超家族成員
- 功能：ATP 依賴性藥物外排幫浦
- 將脂溶性化療藥物從細胞內泵出至細胞外

### P-gp 的受質藥物
| 化療藥物 | P-gp 受質 | 臨床影響 |
|----------|-----------|----------|
| Doxorubicin | 是 | MDR 後反應率降低 |
| Vincristine | 是 | MDR 後反應率降低 |
| Vinblastine | 是 | MDR 後反應率降低 |
| Cyclophosphamide | 否 | MDR 不影響 |
| Carboplatin | 否 | MDR 不影響 |
| Lomustine (CCNU) | 部分 | 可作為救援藥物 |
| L-Asparaginase | 否 | MDR 不影響 |

### Corticosteroids 與 P-gp 誘導
- Prednisone/Prednisolone 可誘導 P-gp 表達
- 犬淋巴瘤化療前使用 steroids：
  - 完全緩解率下降
  - 緩解持續時間縮短
  - 總存活時間縮短
- **重要臨床原則：確診犬淋巴瘤後盡快開始 CHOP 化療，避免先用 steroids**

### 其他抗藥機制
### 藥物代謝與解毒
- 谷胱甘肽（Glutathione, GSH）系統：解毒 alkylating agents
- Glutathione S-transferase（GST）過表達

### DNA 修復增強
- 核苷酸切除修復（NER）：修復 Cisplatin/Carboplatin 造成的 DNA 交聯
- O6-Methylguanine-DNA methyltransferase（MGMT）：修復 alkylating agents 損傷

### 凋亡途徑缺陷
- p53 突變 → 無法啟動化療誘導的凋亡
- Bcl-2 過表達 → 抗凋亡

### 腫瘤幹細胞（Cancer Stem Cells）
- 小比例的自我更新細胞群
- 天然具有高 P-gp 表達和慢週期特性
- 化療可殺滅腫瘤主體但殘存幹細胞 → 復發

### 對化療策略的指導
### Goldie-Coldman 假說
- 腫瘤突變率恆定 → 體積越大 → 抗藥克隆越多
- 理論支持：早期治療、多藥聯合

### 多藥聯合化療原則
1. 各藥物需有不同的抗腫瘤機轉
2. 各藥物的毒性譜不重疊
3. 各藥物作為單一用藥均有效
4. 不同細胞週期作用位點

### 救援化療（Rescue Protocol）
- 使用非 P-gp 受質的藥物
- 犬淋巴瘤復發常用：Lomustine (CCNU)、DMAC 方案、Rabacfosadine

[圖片:P-glycoprotein 藥物外排幫浦作用機轉示意圖]

## 二、臨床意義 (Clinical Significance)

## 三、人醫借鑒 (Translational Insights)

| 人醫工具/概念 | 獸醫應用潛力 | 現況 |
|-------------|-------------|------|
| CAR-T 細胞療法 | 犬 B 細胞淋巴瘤的細胞免疫治療 | 犬 CAR-T 試驗已啟動 |
| 腫瘤疫苗 | 犬黑色素瘤 DNA 疫苗（Oncept） | 犬黑色素瘤疫苗已 USDA 核准 |
| 光免疫療法（photoimmunotherapy） | 犬淺表腫瘤的免疫導引光動力治療 | 早期臨床試驗中 |
| 奈米藥物遞送 | 犬腫瘤局部高濃度化療——減少全身毒性 | 研究階段 |

## 四、臨床爭議與知識空缺 (Controversies & Knowledge Gaps)

| 爭議議題 | 現況 | Evidence Level |
|---------|------|---------------|
| 犬 MCT Grade II（Patnaik）的異質性 | 同一級別預後差異大——Kiupel 二級制是否更好？ | Level II |
| 犬骨肉瘤截肢+化療 vs 保肢+化療 | 保肢術感染/植入物失敗率高，長期存活是否等同 | Level II |
| 犬 HSA 化療（Doxorubicin ± DACTILi）的實際獲益 | MST 延長有限（~140 vs ~90 天），飼主生活品質考量 | Level I |
| 犬淋巴瘤「rescue」protocol 的選擇 | 多種 rescue 方案存在但無 head-to-head 比較 | Level III |`,
  clinical_pearl: '犬淋巴瘤的「不要先用 steroids」原則是臨床上最重要的抗藥性應用。常見情況：淋巴瘤犬被初診診所以「淋巴結炎」開了 prednisolone，用藥後淋巴結縮小（steroids 對淋巴瘤有直接細胞毒性），但同時誘導了 P-gp 表達。等轉診到腫瘤科開始 CHOP 時，Doxorubicin 和 Vincristine 的效果已打折。因此教育初級獸醫師「懷疑淋巴瘤時不要先用 steroids」極為重要。',
  common_mistakes: [
    '在犬淋巴瘤確診前使用 corticosteroids——可誘導 P-gp 表達降低後續化療效果',
    '復發時使用與初始方案相同的藥物——應選擇不同機轉或非 P-gp 受質的救援藥物',
    '將 Collie 的 MDR1 基因突變與腫瘤抗藥性混為一談——前者是藥物毒性問題，後者是腫瘤治療問題',
    '忽略腫瘤幹細胞在復發中的角色——即使腫瘤完全緩解，殘存幹細胞仍可導致復發',
  ],
  disease_data: null,
  diagnostic_data: null,
  procedure_data: null,
  visual_placeholders: [
    { position: 'P-gp 段落後', type: 'animated_diagram', description: 'P-glycoprotein 藥物外排機轉動態圖' },
    { position: '化療策略段落後', type: 'flowchart', description: '抗藥性復發後救援方案決策流程圖' },
  ],
  interactive_placeholders: [],
  drug_api_links: ['Doxorubicin', 'Vincristine', 'Vinblastine', 'Cyclophosphamide', 'Carboplatin', 'Lomustine'],
  references: [
    { type: 'textbook', citation: 'Withrow SJ, Vail DM, Page RL. Withrow & MacEwen\'s Small Animal Clinical Oncology, 6th ed. Elsevier, 2020. Chapter 9: Chemotherapy.', relevance: '化療抗藥性機轉章節' },
    { type: 'journal', citation: 'Zandvliet M, Teske E. Mechanisms of drug resistance in veterinary oncology: a review with an emphasis on canine lymphoma. Vet Sci. 2015;2(3):150-184.', relevance: '獸醫腫瘤抗藥性全面回顧' },
    { type: 'journal', citation: 'Price GS et al. Multidrug resistance gene (MDR1) expression and effect on treatment response in canine lymphoma. J Vet Intern Med. 1991;5(2):96.', relevance: 'P-gp 在犬淋巴瘤抗藥性的研究' },
    { type: 'guideline', citation: 'VCOG — Veterinary Cooperative Oncology Group. Common Terminology Criteria for Adverse Events (VCOG-CTCAE) v2. Vet Comp Oncol. 2016;14(4):417-446.', relevance: '化療抗藥後毒性分級與劑量調整指引' },
  ],
  is_current: true,
  created_at: now,
};

/** 腫瘤分期檢查 — 診斷型 */
const contentStagingWorkup: NodeContent = {
  id: 'CONTENT-ONCO-L4-002',
  node_id: 'ONCO-L4-002',
  version: 1,
  summary: '腫瘤分期檢查（staging workup）是在確診腫瘤後，系統性評估腫瘤範圍和全身狀態的過程。分期結果直接影響治療計畫和預後評估。基本分期包括：血液學/生化評估（全身狀態）、區域淋巴結評估（局部擴散）、胸腔 X 光三面投射（肺轉移）、腹部超音波（腹腔器官轉移）。進階分期可加入 CT/MRI、骨髓穿刺等。不同腫瘤有其特定的分期流程。',
  learning_objectives: [
    '列出腫瘤分期的基本檢查項目及各自目的',
    '說明胸腔 X 光三面投射較雙面投射的優勢',
    '描述區域淋巴結評估在分期中的重要性',
    '比較不同腫瘤的分期檢查需求差異',
    '解釋 CT 在腫瘤分期中的角色與適應症',
  ],
  key_points: [
    '分期目的：確定腫瘤範圍（T）、淋巴結狀態（N）、遠端轉移（M）→ 指導治療和預後',
    '基本分期四件套：CBC/BCS + 區域淋巴結 FNA + 胸腔 X 光三面投射 + 腹部超音波',
    '胸腔 X 光三面投射（右側臥、左側臥、VD）：比雙面投射多偵測約 9-15% 的肺結節',
    '區域淋巴結 FNA：即使觸診大小正常也應進行（MCT 淋巴結轉移率 25-50% 即使觸診正常）',
    'CT 較 X 光敏感：可偵測 1-2 mm 肺結節（X 光最小偵測約 6-8 mm）',
    '不同腫瘤特定分期：淋巴瘤需骨髓穿刺（Stage V）、TCC 需尿液 BRAF + 膀胱超音波、OSA 需 ALP 評估',
    '分期影響治療決策範例：犬淋巴瘤 Stage V 預後較差、MCT 有淋巴結轉移需化療、OSA 已見肺轉移可能不適合截肢+化療',
  ],
  body: `# 腫瘤分期檢查 (Tumor Staging Workup)

## 一、檢查原理與適應症 (Principles & Indications)



### 分期的意義
分期檢查系統性地評估腫瘤的範圍，其結果直接影響：
- **治療計畫**：手術是否可行、是否需要輔助化療
- **預後評估**：與飼主討論期望值
- **基線數據**：後續追蹤比較的基準

### 基本分期檢查
### 1. 血液學與生化評估
- **CBC**：評估骨髓功能（化療前基線）、排除白血病
- **BCS（血液生化）**：肝腎功能（化療藥物代謝）、血鈣（PNS 篩檢）
- **尿液分析**：腎功能完整評估
- **凝血功能**：HSA 常伴 DIC

### 2. 區域淋巴結評估
- **FNA 細胞學**：即使觸診大小正常也應進行
- 重要性：MCT 觸診正常淋巴結的轉移率仍達 25-50%
- 標準：每個腫瘤對應的引流淋巴結均需評估

### 3. 胸腔 X 光——三面投射
- **右側臥（Right lateral）**：評估左肺（朝上的肺充氣較好）
- **左側臥（Left lateral）**：評估右肺
- **VD（Ventrodorsal）**：評估肺門和縱膈
- 三面投射 > 雙面投射：額外偵測 9-15% 的肺結節

### 4. 腹部超音波
- **肝脾評估**：HSA、淋巴瘤轉移
- **腹腔淋巴結**：腸繫膜、髂下淋巴結
- **腎臟、腎上腺**：佔位性病灶
- **膀胱（TCC 時）**：三角區腫塊

### 進階分期
### CT（電腦斷層）
- 肺轉移偵測：敏感度遠高於 X 光（1-2 mm vs 6-8 mm）
- 腫瘤範圍評估：FISS、口腔黑色素瘤手術計畫
- 對比增強：血管侵犯、淋巴結評估

### 骨髓穿刺/活檢
- 適應症：淋巴瘤 Stage V 確認、白血病、多發性骨髓瘤
- 部位：肱骨或股骨近端

### 特殊檢測
- c-KIT PCR（MCT）
- BRAF 尿液 PCR（TCC）
- 流式細胞儀免疫分型（淋巴瘤 B vs T cell）
- Ki-67 增殖指數

### 腫瘤別分期重點
| 腫瘤 | 基本四件套 | 特殊分期項目 |
|------|-----------|-------------|
| 犬淋巴瘤 | 全部 | 骨髓穿刺、流式細胞儀免疫分型 |
| MCT | 全部 | 區域淋巴結 FNA（必須）、buffy coat、c-KIT PCR |
| OSA | 全部 | 患肢 X 光、ALP、CT（可選） |
| HSA | 全部 | 心臟超音波（右心耳）、凝血、AFAST |
| 口腔黑色素瘤 | 全部 | 頭顱 CT（骨侵犯評估）、下頷淋巴結 FNA |
| 乳腺腫瘤 | 全部 | 腋窩/腹股溝淋巴結 FNA |
| TCC | 全部 | BRAF 尿液 PCR、膀胱超音波/膀胱鏡 |
| FISS | 全部 | CT（腫瘤實際範圍 >> 觸診）|

[圖片:腫瘤分期基本檢查示意圖]

## 二、判讀要點 (Interpretation)

## 三、常見陷阱 (Pitfalls)

## 四、人醫借鑒 (Translational Insights)

| 人醫工具/概念 | 獸醫應用潛力 | 現況 |
|-------------|-------------|------|
| 循環腫瘤 DNA（ctDNA）監測 | 犬化療反應/復發早期偵測 | 研究階段，人醫已商業化 |
| PET-CT 腫瘤分期 | 犬淋巴瘤/全身轉移的精確分期 | 少數獸醫機構可執行 |
| 全基因組定序（WGS/WES） | 犬腫瘤可行動突變鑑定→精準用藥 | 犬腫瘤 NGS panel 已可取得 |

## 五、臨床爭議與知識空缺 (Controversies & Knowledge Gaps)

| 爭議議題 | 現況 | Evidence Level |
|---------|------|---------------|
| 犬腫瘤 FNA vs 組織切片作為治療決策依據 | FNA 準確度因腫瘤類型差異大，何時需組織切片 | Level II |
| 犬腫瘤分期影像檢查的最低標準 | 三視圖 X 光 vs CT 的成本效益——何時升級 | Level III |`,
  clinical_pearl: '胸腔 X 光「三面投射」是腫瘤分期的基本要求，但在臨床上常被省略為兩面。記住：由於重力效應，下方的肺葉會有部分塌陷（atelectasis），上方的肺葉充氣較好。因此右側臥看左肺、左側臥看右肺、VD 看肺門。單側 lateral 可能遺漏位於塌陷肺葉中的小結節。對於 OSA 這種 > 90% 微轉移但 X 光常正常的腫瘤，CT 是更敏感的替代選擇。',
  common_mistakes: [
    '胸腔 X 光僅拍兩面投射——三面投射可額外偵測 9-15% 的肺結節',
    '觸診淋巴結大小正常就跳過 FNA——MCT、乳腺腫瘤等即使觸診正常仍有顯著轉移率',
    '未在化療前建立完整的 CBC/BCS 基線——化療後無法區分是藥物副作用還是原有異常',
    '所有腫瘤使用相同的分期流程——不同腫瘤有不同的分期重點（如淋巴瘤需骨髓穿刺，OSA 需 ALP）',
    'FISS 僅靠觸診評估腫瘤範圍——CT 顯示的實際浸潤範圍遠大於觸診，手術計畫必需 CT',
  ],
  disease_data: null,
  diagnostic_data: {
    indication: [
      '任何已確診的惡性腫瘤在制定治療計畫前',
      '腫瘤手術前評估可行性和範圍',
      '化療開始前建立基線數據',
      '評估腫瘤治療後的反應和復發',
    ],
    contraindication: [
      '分期檢查本身無絕對禁忌症',
      '緊急手術情況（如脾臟 HSA 破裂急性血腹）可先穩定手術後再完成分期',
      '嚴重凝血障礙時骨髓穿刺需謹慎',
    ],
    technique: '系統性評估流程：1. CBC/BCS/凝血/尿液 → 2. 區域淋巴結 FNA（依腫瘤位置選擇引流淋巴結）→ 3. 胸腔 X 光三面投射（右側臥+左側臥+VD）→ 4. 腹部超音波全面掃描 → 5. 進階項目依腫瘤類型加選（CT/骨髓穿刺/分子診斷）',
    normal_findings: [
      { finding: 'CBC/BCS 正常', description: '所有血液學和生化指標在參考範圍內', significance: '良好的全身狀態基線，化療耐受性較好' },
      { finding: '區域淋巴結 FNA 陰性', description: '淋巴結細胞學正常（反應性或正常結構）', significance: '無局部淋巴結轉移，分期較低' },
      { finding: '胸腔 X 光正常', description: '三面投射均無可見肺結節或縱膈腫塊', significance: '無可見肺轉移（但不排除微轉移）' },
    ],
    abnormal_findings: [
      { finding: '肺結節', description: '胸腔 X 光見一個或多個軟組織密度結節', significance: '肺轉移可能性高，影響治療決策和預後。單一結節需與原發肺腫瘤鑑別' },
      { finding: '淋巴結細胞學異常', description: '轉移性腫瘤細胞或淋巴瘤細胞', significance: '分期升高，可能需要更積極的全身治療' },
      { finding: '肝脾異常超音波', description: '結節性病灶、瀰漫性回音改變', significance: '需 FNA 確認是否為轉移' },
      { finding: '高血鈣', description: 'Total Ca > 12 mg/dL 或 iCa 升高', significance: '副腫瘤症候群，需排除淋巴瘤/肛門囊腺癌' },
    ],
    interpretation_guide: '1. 綜合所有結果判定 TNM 分期。2. 異常結果需進一步確認（如肺結節 → CT、肝脾結節 → FNA）。3. 分期結果結合腫瘤類型決定治療策略。4. 對飼主進行分期結果和預後的完整溝通。',
    pitfalls: [
      '胸腔 X 光無法偵測 < 6-8 mm 的肺結節——對於高轉移率腫瘤（OSA、HSA）應考慮 CT',
      '超音波對操作者依賴性高——小型結節可能被遺漏',
      '淋巴結反應性增生可能被誤判為轉移——細胞學判讀需有經驗',
      '分期正常不代表沒有微轉移——尤其是 OSA（> 90% 微轉移）和 HSA',
    ],
    sensitivity_specificity: '胸腔 X 光三面投射對 > 8 mm 肺結節敏感度約 90%，對 < 5 mm 結節敏感度 < 50%。CT 對 1-3 mm 結節敏感度 > 90%。腹部超音波對 > 1 cm 肝脾病灶敏感度約 80-90%。淋巴結 FNA 對轉移的敏感度約 70-90%，取決於腫瘤類型。',
    cost_benefit: '基本分期四件套（CBC/BCS + 淋巴結 FNA + 胸腔 X 光 + 腹超）為最具成本效益的組合。CT 在需要精確手術計畫（FISS、口腔腫瘤）或高轉移風險評估（OSA）時具額外價值。完整分期可避免不必要的手術或過度治療。',
  },
  procedure_data: null,
  visual_placeholders: [
    { position: '基本分期段落後', type: 'flowchart', description: '腫瘤分期標準流程圖' },
    { position: '腫瘤別分期表後', type: 'comparison_table', description: '各腫瘤分期重點比較表' },
  ],
  interactive_placeholders: [
    { position: '全文後', type: 'interactive_checklist', description: '依腫瘤類型自動產生分期檢查清單' },
  ],
  drug_api_links: [],
  references: [
    { type: 'textbook', citation: 'Withrow SJ, Vail DM, Page RL. Withrow & MacEwen\'s Small Animal Clinical Oncology, 6th ed. Elsevier, 2020. Chapter 4: Staging and Diagnosis.', relevance: '腫瘤分期完整章節' },
    { type: 'journal', citation: 'Nemanic S et al. Comparison of thoracic radiographic views for detection of pulmonary nodules in dogs with cancer. J Am Vet Med Assoc. 2006;228(7):1090-1095.', relevance: '胸腔 X 光三面投射的偵測率研究' },
    { type: 'guideline', citation: 'Thamm DH, Vail DM. Staging and initial treatment decisions. In: Withrow & MacEwen\'s 6th ed.', relevance: '分期與治療決策指引' },
  ],
  is_current: true,
  created_at: now,
};

/** TNM 分期系統 — 診斷型 */
const contentTNM: NodeContent = {
  id: 'CONTENT-ONCO-L4-003',
  node_id: 'ONCO-L4-003',
  version: 1,
  summary: 'TNM 分期系統是國際通用的腫瘤分期標準，由 WHO 制定。T（Tumor）描述原發腫瘤大小和浸潤程度、N（Node）描述區域淋巴結轉移狀態、M（Metastasis）描述遠端轉移。獸醫腫瘤學中，不同腫瘤類型有各自的 TNM 定義（如口腔黑色素瘤以直徑為 T 分級，MCT 以數量和位置，膀胱 TCC 以浸潤深度）。TNM 分期是治療計畫制定和預後評估的基礎。',
  learning_objectives: [
    '解釋 TNM 分期系統的基本結構：T、N、M 各自的定義',
    '比較不同犬貓腫瘤的 TNM 分級標準差異',
    '描述 clinical stage（cTNM）與 pathological stage（pTNM）的區別',
    '說明 TNM 分期如何轉換為 WHO 臨床分期（Stage I-IV/V）',
    '辨識 TNM 各項目的評估方法和工具',
  ],
  key_points: [
    'T（Tumor）：原發腫瘤大小/範圍。T0（無腫瘤）→ T1-T4（由小到大/由淺到深）',
    'N（Node）：區域淋巴結。N0（無轉移）→ N1（同側轉移）→ N2（對側/雙側）→ N3（固定/遠端淋巴結）',
    'M（Metastasis）：遠端轉移。M0（無）→ M1（有遠端轉移）',
    'cTNM：臨床分期（術前影像和檢查）；pTNM：病理分期（術後組織病理確認）',
    '各腫瘤 T 的定義不同：口腔黑色素瘤（直徑 < 2/2-4/ > 4 cm）、MCT（數量+位置）、TCC（浸潤深度）、OSA（骨皮質內外）',
    'TNM 組合為 Stage：如口腔黑色素瘤 T1N0M0 = Stage I，任何 T N1 M0 = Stage III',
    'WHO Clinical Stage：Stage I（局限）→ Stage II（局部進展）→ Stage III（區域擴散）→ Stage IV（遠端轉移）',
  ],
  body: `# TNM 分期系統 (TNM Staging System)

## 一、檢查原理與適應症 (Principles & Indications)



### 基本結構
TNM 是由世界衛生組織（WHO）建立的腫瘤分期框架，適用於所有實體腫瘤：

### T — 原發腫瘤（Primary Tumor）
- **TX**：無法評估原發腫瘤
- **T0**：無原發腫瘤證據
- **Tis**：原位癌（carcinoma in situ）
- **T1 → T4**：腫瘤大小或浸潤程度遞增

### N — 區域淋巴結（Regional Lymph Nodes）
- **NX**：無法評估區域淋巴結
- **N0**：無區域淋巴結轉移
- **N1**：同側區域淋巴結轉移
- **N2**：對側或雙側淋巴結轉移
- **N3**：固定的區域淋巴結或遠端淋巴結

### M — 遠端轉移（Distant Metastasis）
- **M0**：無遠端轉移
- **M1**：有遠端轉移

### Clinical vs Pathological Stage
| 類型 | 代碼 | 資料來源 | 時機 |
|------|------|----------|------|
| 臨床分期 | cTNM | 理學檢查、影像、FNA | 治療前 |
| 病理分期 | pTNM | 組織病理、手術標本 | 術後 |

pTNM 通常更精確，因為可直接評估腫瘤浸潤深度和淋巴結微轉移。

### 主要犬貓腫瘤 TNM 定義
### 犬口腔腫瘤（黑色素瘤、SCC、纖維肉瘤）
| T | 定義 |
|---|------|
| T1 | 最大直徑 < 2 cm |
| T2 | 最大直徑 2-4 cm |
| T3 | 最大直徑 > 4 cm |

→ Stage I: T1N0M0 | Stage II: T2N0M0 | Stage III: T3N0M0 或任何 T N1 M0 | Stage IV: 任何 M1

### 犬 MCT（修訂版）
| Stage | 定義 |
|-------|------|
| 0 | 不完全切除單一腫塊，N0M0 |
| I | 單一皮膚腫塊，N0M0 |
| II | 單一皮膚腫塊，N1M0 |
| III | 多發性皮膚腫塊或大型浸潤性，±N1M0 |
| IV | 遠端轉移（任何 T/N，M1） |

### 犬膀胱 TCC
| T | 定義 |
|---|------|
| Tis | 原位癌 |
| T1 | 黏膜/黏膜下層浸潤 |
| T2 | 肌層浸潤 |
| T3 | 鄰近器官浸潤（前列腺、子宮、陰道） |

### 犬附肢 OSA
| Stage | 定義 |
|-------|------|
| I | 低度分級（G1），無轉移 |
| IIA | 高度分級（G2），未超出骨皮質（T1）N0M0 |
| IIB | 高度分級，超出骨皮質（T2）N0M0 |
| III | 任何分級，有遠端轉移（M1） |

### 犬淋巴瘤（WHO Clinical Stage）
| Stage | 定義 |
|-------|------|
| I | 單一淋巴結（或結外部位） |
| II | 同側橫膈膜多個淋巴結 |
| III | 全身性淋巴結侵犯 |
| IV | 肝脾侵犯 |
| V | 骨髓/血液/非淋巴器官侵犯 |

加上 substage：a（無全身症狀）/ b（有全身症狀）

### 犬貓乳腺腫瘤
| T | 犬 | 貓 |
|---|----|----|
| T1 | < 3 cm | < 2 cm |
| T2 | 3-5 cm | 2-3 cm |
| T3 | > 5 cm | > 3 cm |

[圖片:TNM 分期系統架構圖]

## 二、判讀要點 (Interpretation)

## 三、常見陷阱 (Pitfalls)

## 四、人醫借鑒 (Translational Insights)

| 人醫工具/概念 | 獸醫應用潛力 | 現況 |
|-------------|-------------|------|
| CAR-T 細胞療法 | 犬 B 細胞淋巴瘤的細胞免疫治療 | 犬 CAR-T 試驗已啟動 |
| 腫瘤疫苗 | 犬黑色素瘤 DNA 疫苗（Oncept） | 犬黑色素瘤疫苗已 USDA 核准 |
| 光免疫療法（photoimmunotherapy） | 犬淺表腫瘤的免疫導引光動力治療 | 早期臨床試驗中 |
| 奈米藥物遞送 | 犬腫瘤局部高濃度化療——減少全身毒性 | 研究階段 |

## 五、臨床爭議與知識空缺 (Controversies & Knowledge Gaps)

| 爭議議題 | 現況 | Evidence Level |
|---------|------|---------------|
| 犬 MCT Grade II（Patnaik）的異質性 | 同一級別預後差異大——Kiupel 二級制是否更好？ | Level II |
| 犬骨肉瘤截肢+化療 vs 保肢+化療 | 保肢術感染/植入物失敗率高，長期存活是否等同 | Level II |
| 犬 HSA 化療（Doxorubicin ± DACTILi）的實際獲益 | MST 延長有限（~140 vs ~90 天），飼主生活品質考量 | Level I |
| 犬淋巴瘤「rescue」protocol 的選擇 | 多種 rescue 方案存在但無 head-to-head 比較 | Level III |`,
  clinical_pearl: 'TNM 分期的臨床價值不僅在於分類，更在於它標準化了不同病例之間的比較。在與飼主溝通預後時，引用的存活數據都是基於特定 TNM 分期的——例如「口腔黑色素瘤 Stage I（< 2 cm）手術後中位存活 > 12 個月，Stage III（> 4 cm 或淋巴結轉移）中位存活僅 3 個月」。因此準確的分期是精確預後溝通的基礎。另外要記住 cTNM 和 pTNM 可能不同——術後病理可能發現術前未偵測到的淋巴結微轉移而升期。',
  common_mistakes: [
    '不同腫瘤使用相同的 T 定義——每種腫瘤的 T 分級標準不同',
    '忽略淋巴結評估（N）而僅關注原發腫瘤（T）——N 是許多腫瘤最重要的預後因子之一',
    '僅依賴臨床分期（cTNM）而未在術後確認病理分期（pTNM）——病理分期更精確',
    '將犬淋巴瘤的 WHO Clinical Stage 與其他實體腫瘤的 TNM 混為一談——淋巴瘤有其特殊分期系統',
    '混淆腫瘤分級（Grade，組織學）和分期（Stage，範圍）——兩者為獨立的預後指標',
  ],
  disease_data: null,
  diagnostic_data: {
    indication: [
      '所有已確診的惡性腫瘤在制定治療計畫前',
      '多學科腫瘤討論會（tumor board）的病例呈現',
      '化療或手術後評估治療反應',
      '臨床研究中標準化病例分類',
    ],
    contraindication: [
      'TNM 分期系統本身無禁忌症',
      '良性腫瘤不需要 TNM 分期',
      '部分腫瘤（如犬淋巴瘤）使用自身的分期系統而非標準 TNM',
    ],
    technique: 'TNM 評估流程：T — 理學檢查測量腫瘤最大直徑 + 影像學評估浸潤深度（CT/超音波）→ N — 區域淋巴結觸診 + FNA 細胞學（± 術後組織病理確認）→ M — 胸腔 X 光三面投射 + 腹部超音波（± CT）→ 綜合 TNM 判定 Clinical Stage',
    normal_findings: [
      { finding: 'T1N0M0', description: '小型原發腫瘤，無淋巴結轉移，無遠端轉移', significance: '最低分期（Stage I），預後最佳，手術可能治癒' },
      { finding: 'N0（FNA 確認）', description: '引流淋巴結細胞學正常', significance: '無局部擴散，分期較低' },
    ],
    abnormal_findings: [
      { finding: 'N1（淋巴結轉移）', description: '區域淋巴結 FNA 或組織病理確認腫瘤轉移', significance: '分期升高，多數腫瘤預後顯著惡化，需考慮全身治療' },
      { finding: 'M1（遠端轉移）', description: '胸腔 X 光見肺結節或腹超見肝脾轉移', significance: '最高分期，預後差，治療目標通常轉為緩和' },
      { finding: 'T3-T4（大型/深層浸潤）', description: '腫瘤直徑大或浸潤深層結構', significance: '手術切緣困難，可能需要更積極的手術或輔助治療' },
    ],
    interpretation_guide: '1. 根據腫瘤類型查詢對應的 TNM 定義標準。2. 分別評估 T、N、M 各項。3. 綜合判定 WHO Clinical Stage（Stage I-IV/V）。4. 結合腫瘤分級（Grade）進行完整的預後評估。5. 術後更新為 pTNM（若與 cTNM 不同需記錄）。',
    pitfalls: [
      '不同腫瘤的 T 標準不同——必須查詢對應腫瘤的 TNM 定義',
      '淋巴結觸診大小不等於轉移狀態——反應性增生可使淋巴結增大，微轉移可在正常大小淋巴結中',
      '犬淋巴瘤使用 WHO Clinical Stage 而非標準 TNM 框架',
      'X 光可見的肺結節不一定是轉移——肺部肉芽腫、原發肺腫瘤需鑑別',
    ],
    sensitivity_specificity: 'TNM 分期的精確度取決於使用的檢查工具。cTNM 的 T 評估：理學檢查+影像（敏感度依工具而異，CT > 超音波 > 觸診）。N 評估：FNA 細胞學敏感度約 70-90%，組織病理為金標準。M 評估：胸腔 X 光（> 8 mm 結節敏感度約 90%），CT（> 1-2 mm 敏感度 > 90%）。',
    cost_benefit: 'TNM 分期系統本身無額外成本——它是一個分類框架。成本取決於進行哪些分期檢查（見 ONCO-L4-002 腫瘤分期檢查）。精確分期的價值在於避免對已有遠端轉移的病例進行不必要的根治性手術，以及確保局限性腫瘤獲得適當的積極治療。',
  },
  procedure_data: null,
  visual_placeholders: [
    { position: 'TNM 基本結構後', type: 'flowchart', description: 'TNM 評估流程圖' },
    { position: '各腫瘤 TNM 表後', type: 'comparison_table', description: '不同腫瘤 TNM 定義速查比較表' },
  ],
  interactive_placeholders: [
    { position: '全文後', type: 'interactive_staging', description: '輸入 T/N/M 值自動判定 Stage 的互動工具' },
  ],
  drug_api_links: [],
  references: [
    { type: 'textbook', citation: 'Withrow SJ, Vail DM, Page RL. Withrow & MacEwen\'s Small Animal Clinical Oncology, 6th ed. Elsevier, 2020.', relevance: '各腫瘤 TNM 定義參考' },
    { type: 'guideline', citation: 'Owen LN. TNM Classification of Tumours in Domestic Animals. WHO, 1st ed. 1980.', relevance: 'WHO 獸醫 TNM 分期原始文獻' },
    { type: 'journal', citation: 'Nguyen SM et al. Proposing a standardized approach for staging of canine and feline solid tumors. Vet Comp Oncol. 2015;13(4):369-383.', relevance: '獸醫腫瘤分期標準化提案' },
  ],
  is_current: true,
  created_at: now,
};

/** 化學治療基礎 — 治療型 */
const contentChemotherapy: NodeContent = {
  id: 'CONTENT-ONCO-L5-001',
  node_id: 'ONCO-L5-001',
  version: 1,
  summary: '化學治療是利用細胞毒性藥物殺滅或抑制腫瘤細胞增殖的全身性治療方式。在獸醫腫瘤科中，化療的目標是延長有品質的生存時間，而非不惜代價追求治癒。犬貓化療的副作用發生率和嚴重度顯著低於人醫（因使用較低劑量強度）。VCOG-CTCAE v2 為標準化的化療毒性評估標準。主要化療藥物依作用機轉分為 alkylating agents、antimetabolites、anthracyclines、vinca alkaloids、platinum compounds 等。',
  learning_objectives: [
    '列出獸醫腫瘤科常用化療藥物的分類和作用機轉',
    '描述 VCOG-CTCAE v2 化療毒性分級系統',
    '說明犬貓化療劑量計算的基本原則（BSA vs 體重）',
    '解釋化療給藥前的安全確認流程',
    '辨識化療藥物外滲（extravasation）的處置方式',
  ],
  key_points: [
    '獸醫化療目標：延長有品質的生命，而非不惜代價治癒。約 80% 犬貓無嚴重副作用',
    '劑量計算：依體表面積（BSA，mg/m²）；< 10 kg 犬和貓需降低約 20% 避免過量',
    '給藥前確認：CBC（嗜中性球 > 2,000-3,000/μL）、全身狀態、體重',
    'VCOG-CTCAE v2 毒性分級：Grade 1（輕微）→ Grade 5（死亡），嗜中性球減少和 GI 毒性最常見',
    '嗜中性球最低點（nadir）：多數藥物在給藥後 5-10 天；Carboplatin 在犬約第 14 天',
    '化療藥物安全處置：手套 + 防護衣、封閉系統給藥、生物安全櫃配藥、排泄物處理 48-72 小時',
    'Doxorubicin 累積性心臟毒性：犬總劑量 > 180-240 mg/m² → 心肌病風險增加',
    'Cyclophosphamide 出血性膀胱炎：同時給予 furosemide 促排尿或充分水化預防',
  ],
  body: `# 化學治療基礎 (Chemotherapy Basics)

## 一、治療原理 (Treatment Principles)



### 化療原則
### 治療目標
- 獸醫化療：延長有品質的生命（quality of life, QoL）
- 人醫化療：常追求治癒（更高劑量強度 → 更多副作用）
- 約 80% 的犬貓在化療期間無嚴重副作用

### 劑量計算
- 標準：體表面積（BSA），單位 mg/m²
- BSA 公式：BSA (m²) = (體重 kg)^0.667 × 10.1 / 10,000
- 注意：< 10 kg 犬和貓的 BSA 相對體重比較高 → 需降低劑量約 20%

### 化療給藥安全確認
給藥前 checklist：
1. 確認 CBC 結果：嗜中性球 > 2,000-3,000/μL
2. 確認全身狀態：ECOG 評分
3. 確認體重：重新計算劑量
4. 確認前次毒性：有無需要降低劑量的情況
5. 確認藥物、劑量、給藥途徑正確

## 二、藥物/方法比較 (Comparison)

### 常用化療藥物分類
| 藥物 | 分類 | 機轉 | 主要適應症 | 主要毒性 |
|------|------|------|-----------|----------|
| [藥物:Cyclophosphamide] | Alkylating agent | DNA 交聯 | 淋巴瘤（CHOP）、HSA | 骨髓抑制、出血性膀胱炎 |
| [藥物:Chlorambucil] | Alkylating agent | DNA 交聯 | 低度淋巴瘤、CLL | 輕度骨髓抑制 |
| [藥物:Lomustine] (CCNU) | Alkylating (nitrosourea) | DNA 交聯 | 淋巴瘤救援、MCT、腦瘤 | 肝毒性（犬）、骨髓抑制（延遲型） |
| [藥物:Doxorubicin] | Anthracycline | Topoisomerase II 抑制 | 淋巴瘤（CHOP）、OSA、HSA | 骨髓抑制、心臟毒性（累積性）、腎毒性（貓） |
| [藥物:Mitoxantrone] | Anthracenedione | Topoisomerase II 抑制 | TCC、癌 | 骨髓抑制 |
| [藥物:Vincristine] | Vinca alkaloid | 微管抑制（M 期） | 淋巴瘤（CHOP）、TVT | 周邊神經毒性、便秘、外滲壞死 |
| [藥物:Vinblastine] | Vinca alkaloid | 微管抑制（M 期） | MCT（VBL-Pred） | 骨髓抑制 |
| [藥物:Carboplatin] | Platinum compound | DNA 交聯 | OSA、黑色素瘤、癌 | 骨髓抑制（犬 nadir 第 14 天） |
| [藥物:Toceranib] | TKI（標靶） | VEGFR/PDGFR/c-KIT | MCT、TCC | GI（腹瀉/嘔吐）、蛋白尿 |
| [藥物:L-Asparaginase] | 酵素 | 消耗 Asparagine | 淋巴瘤（誘導） | 過敏反應（重複使用） |

### 藥物外滲處置
起泡性藥物（vesicants）外滲可造成嚴重組織壞死：
- **Doxorubicin**：冷敷、Dexrazoxane（若可取得）
- **Vincristine/Vinblastine**：溫敷、Hyaluronidase 局部注射
- 關鍵：預防勝於治療——IV 留置針確認回血良好、緩慢給藥、全程監測

[圖片:CHOP 方案 25 週化療時程表]

## 三、併發症與監控 (Complications & Monitoring)

### VCOG-CTCAE v2 毒性分級
| Grade | 定義 | 處置 |
|-------|------|------|
| 1 | 輕微，無需醫療介入 | 觀察 |
| 2 | 需藥物治療但不需住院 | 門診處方 |
| 3 | 需住院或侵入性治療 | 降低劑量 10-25% |
| 4 | 危及生命 | 考慮停止化療 |
| 5 | 死亡 | — |

### 最常見化療毒性
1. **嗜中性球減少症**：最常見的劑量限制毒性
   - Nadir：多數藥物第 5-10 天，Carboplatin 犬第 14 天
   - Grade 3（< 1,000/μL）：延遲下次治療、預防性抗生素
   - Grade 4（< 500/μL）：住院、廣效抗生素

2. **GI 毒性**：嘔吐和腹瀉
   - 通常在給藥後 2-5 天
   - [藥物:Maropitant] 1 mg/kg SC/PO 為一線止吐
   - [藥物:Metoclopramide] 0.2-0.5 mg/kg PO q8h

## 四、預後影響 (Prognostic Impact)

## 五、人醫借鑒 (Translational Insights)

| 人醫工具/概念 | 獸醫應用潛力 | 現況 |
|-------------|-------------|------|
| CAR-T 細胞療法 | 犬 B 細胞淋巴瘤的細胞免疫治療 | 犬 CAR-T 試驗已啟動 |
| 腫瘤疫苗 | 犬黑色素瘤 DNA 疫苗（Oncept） | 犬黑色素瘤疫苗已 USDA 核准 |
| 光免疫療法（photoimmunotherapy） | 犬淺表腫瘤的免疫導引光動力治療 | 早期臨床試驗中 |
| 奈米藥物遞送 | 犬腫瘤局部高濃度化療——減少全身毒性 | 研究階段 |

## 六、臨床爭議與知識空缺 (Controversies & Knowledge Gaps)

| 爭議議題 | 現況 | Evidence Level |
|---------|------|---------------|
| 犬 MCT Grade II（Patnaik）的異質性 | 同一級別預後差異大——Kiupel 二級制是否更好？ | Level II |
| 犬骨肉瘤截肢+化療 vs 保肢+化療 | 保肢術感染/植入物失敗率高，長期存活是否等同 | Level II |
| 犬 HSA 化療（Doxorubicin ± DACTILi）的實際獲益 | MST 延長有限（~140 vs ~90 天），飼主生活品質考量 | Level I |
| 犬淋巴瘤「rescue」protocol 的選擇 | 多種 rescue 方案存在但無 head-to-head 比較 | Level III |`,
  clinical_pearl: '獸醫化療最重要的觀念是「劑量調整」。與人醫不同，我們不追求最大耐受劑量（MTD），而是在療效和生活品質之間取得平衡。化療犬貓的主人最關心的問題是「牠會不會很痛苦？」——答案是約 80% 的動物沒有顯著副作用，需要住院處理的嚴重毒性（Grade 3-4）約 5-10%。但仍需在每次化療前與飼主確認動物在家的狀態，並根據前次毒性適時調整劑量。',
  common_mistakes: [
    '未在化療前確認 CBC——嗜中性球過低時給藥會加劇骨髓抑制',
    '小型犬和貓未降低劑量——BSA 相對體重比較高，需降低約 20%',
    '忽略 Doxorubicin 累積劑量追蹤——超過 180-240 mg/m² 心肌病風險顯著增加',
    'Cyclophosphamide 未同時促進排尿——出血性膀胱炎為可預防但嚴重的併發症',
    '起泡性藥物 IV 給藥未全程監測——外滲造成的組織壞死可能需要手術清創',
  ],
  disease_data: null,
  diagnostic_data: null,
  procedure_data: null,
  visual_placeholders: [
    { position: '藥物分類表後', type: 'comparison_table', description: '化療藥物分類與毒性譜比較表' },
    { position: 'VCOG 分級後', type: 'flowchart', description: '化療毒性處置流程圖' },
  ],
  interactive_placeholders: [
    { position: '劑量計算段落後', type: 'interactive_calculator', description: '輸入體重自動計算 BSA 和藥物劑量' },
  ],
  drug_api_links: ['Cyclophosphamide', 'Chlorambucil', 'Lomustine', 'Doxorubicin', 'Mitoxantrone', 'Vincristine', 'Vinblastine', 'Carboplatin', 'Toceranib', 'L-Asparaginase', 'Maropitant', 'Metoclopramide'],
  references: [
    { type: 'textbook', citation: 'Withrow SJ, Vail DM, Page RL. Withrow & MacEwen\'s Small Animal Clinical Oncology, 6th ed. Elsevier, 2020. Chapter 9: Chemotherapy.', relevance: '化學治療基礎完整章節' },
    { type: 'guideline', citation: 'VCOG — Veterinary Cooperative Oncology Group. Common Terminology Criteria for Adverse Events (VCOG-CTCAE) v2. Vet Comp Oncol. 2016;14(4):417-446.', relevance: 'VCOG-CTCAE 化療毒性分級標準' },
    { type: 'journal', citation: 'Thamm DH, Vail DM. Aftershocks of cancer chemotherapy: managing adverse effects. J Am Anim Hosp Assoc. 2007;43(1):1-7.', relevance: '化療副作用管理實務' },
  ],
  is_current: true,
  created_at: now,
};

/** 腫瘤外科原則 — 治療型 */
const contentSurgicalOncology: NodeContent = {
  id: 'CONTENT-ONCO-L5-002',
  node_id: 'ONCO-L5-002',
  version: 1,
  summary: '腫瘤外科是多數實體腫瘤的首選治療方式，其核心原則是以足夠的手術切緣（surgical margin）完整移除腫瘤。「首次手術是最佳手術」——不充分的首次切除會導致局部復發、增加後續手術難度、並可能惡化預後。不同腫瘤的切緣標準不同：MCT 需 2-3 cm lateral + 1 fascial plane deep，FISS 需 3-5 cm + 2 fascial planes，而良性腫瘤可邊緣切除。組織病理的切緣評估（clean/close/dirty）是術後決策的關鍵。',
  learning_objectives: [
    '說明腫瘤外科切緣的定義和分類（marginal/wide/radical）',
    '列出不同腫瘤類型建議的手術切緣標準',
    '描述術後組織病理切緣評估的意義和報告解讀',
    '解釋「首次手術是最佳手術」原則的生物學基礎',
    '比較根治性手術、減積手術和姑息性手術的適應症',
  ],
  key_points: [
    '手術切緣分類：intracapsular（囊內）→ marginal（邊緣）→ wide（寬切緣）→ radical（根治）',
    '切緣標準因腫瘤而異：MCT 2-3 cm lateral + 1 fascial plane；FISS 3-5 cm + 2 fascial planes；STS 2-3 cm + 1 fascial plane',
    '病理切緣評估：clean（> 1 cm 或完整筋膜面）、close（1-3 mm）、dirty/incomplete（腫瘤達切面）',
    '首次手術是最佳手術：腫瘤周圍組織結構完整、手術計畫空間大、不受疤痕組織影響',
    '再手術（scar revision）的困難：疤痕中殘留腫瘤細胞的擴散範圍無法預測，需更大切緣',
    '術前活檢（incisional biopsy）的重要性：確認腫瘤類型 → 決定切緣 → 制定手術計畫',
    '根治性手術：截肢（OSA）、mandibulectomy/maxillectomy（口腔腫瘤）、脾臟切除（HSA）',
    '減積手術（debulking/cytoreductive）：無法完全切除但減少腫瘤量 → 搭配放療或化療',
  ],
  body: `# 腫瘤外科原則 (Surgical Oncology Principles)

## 一、治療原理 (Treatment Principles)



### 各腫瘤切緣建議
| 腫瘤 | Lateral margin | Deep margin | 備註 |
|------|---------------|-------------|------|
| MCT（低度） | ≥ 2 cm | ≥ 1 fascial plane | Kiupel low-grade |
| MCT（高度） | ≥ 2-3 cm | ≥ 1 fascial plane | 考慮輔助治療 |
| FISS | ≥ 3-5 cm | ≥ 2 fascial planes | 首次手術至關重要 |
| 軟組織肉瘤（STS） | ≥ 2-3 cm | ≥ 1 fascial plane | 假包膜外有微觀延伸 |
| 口腔黑色素瘤 | ≥ 1-2 cm | 含骨切除 | 常需 mandibulectomy |
| 乳腺腫瘤（犬） | 依位置選擇範圍 | 含筋膜 | 區域至鏈切除 |
| 乳腺腫瘤（貓） | 雙側全鏈 | 含筋膜 | 分兩次手術 |

### 首次手術是最佳手術
### 為什麼首次手術最重要？
1. 腫瘤周圍解剖結構完整，可精確規劃切緣
2. 腫瘤尚未被手術疤痕組織干擾
3. 手術空間最大，重建選項最多
4. 不充分首次手術的後果：
   - 殘留腫瘤細胞在疤痕中擴散範圍無法預測
   - 再手術需更大切緣（增加 1-2 cm）
   - FISS 首次邊緣切除後復發率 > 60%，vs 首次積極手術 14%

### 正確流程
1. 發現腫塊 → FNA 細胞學
2. 若為惡性（或懷疑高度惡性）→ incisional biopsy 確認
3. 根據組織病理結果決定切緣和手術計畫
4. 一次性完成足夠切緣的手術

### 術後切緣評估
### 病理報告解讀
- **Clean margin**：切緣處無腫瘤細胞（通常定義 > 1 cm 或完整筋膜面）
- **Close margin**：切緣處有腫瘤細胞接近但未達（通常 1-3 mm）
- **Dirty/incomplete margin**：腫瘤細胞達切面（不完全切除）

### 切緣不淨的處置
- **首選：再手術（scar revision）** → 切除原手術疤痕 + 更大切緣
- **無法再手術時：輔助放射治療** → 術後 3-4 週內開始
- **輔助化療**：高度惡性腫瘤可考慮

### 特殊手術類型
### 減積手術（Debulking/Cytoreductive）
- 無法完全切除但最大程度減少腫瘤量
- 搭配放療（如口腔腫瘤）或化療
- 需預先告知飼主手術無法治癒

### 姑息性手術
- 目的：改善生活品質而非治癒
- 範例：尿道阻塞的 TCC 支架置入、出血性腫瘤的止血手術

[圖片:腫瘤手術切緣示意圖——lateral 和 deep margin]

## 二、藥物/方法比較 (Comparison)

### 手術切緣分類
| 類型 | 定義 | 適用時機 |
|------|------|----------|
| Intracapsular | 囊內切除（留下肉眼可見腫瘤） | 僅用於活檢 |
| Marginal | 沿腫瘤假包膜切除 | 良性腫瘤 |
| Wide | 腫瘤周圍加上正常組織切緣 | 惡性腫瘤標準 |
| Radical | 整個解剖區室切除（如截肢） | 高度侵襲性腫瘤 |

## 三、併發症與監控 (Complications & Monitoring)

## 四、預後影響 (Prognostic Impact)

## 五、人醫借鑒 (Translational Insights)

| 人醫工具/概念 | 獸醫應用潛力 | 現況 |
|-------------|-------------|------|
| CAR-T 細胞療法 | 犬 B 細胞淋巴瘤的細胞免疫治療 | 犬 CAR-T 試驗已啟動 |
| 腫瘤疫苗 | 犬黑色素瘤 DNA 疫苗（Oncept） | 犬黑色素瘤疫苗已 USDA 核准 |
| 光免疫療法（photoimmunotherapy） | 犬淺表腫瘤的免疫導引光動力治療 | 早期臨床試驗中 |
| 奈米藥物遞送 | 犬腫瘤局部高濃度化療——減少全身毒性 | 研究階段 |

## 六、臨床爭議與知識空缺 (Controversies & Knowledge Gaps)

| 爭議議題 | 現況 | Evidence Level |
|---------|------|---------------|
| 犬 MCT Grade II（Patnaik）的異質性 | 同一級別預後差異大——Kiupel 二級制是否更好？ | Level II |
| 犬骨肉瘤截肢+化療 vs 保肢+化療 | 保肢術感染/植入物失敗率高，長期存活是否等同 | Level II |
| 犬 HSA 化療（Doxorubicin ± DACTILi）的實際獲益 | MST 延長有限（~140 vs ~90 天），飼主生活品質考量 | Level I |
| 犬淋巴瘤「rescue」protocol 的選擇 | 多種 rescue 方案存在但無 head-to-head 比較 | Level III |`,
  clinical_pearl: '在一般獸醫門診中，最常見的腫瘤外科錯誤是「先摘掉再說」（shelling out）。這對良性腫瘤（如脂肪瘤）是可以的，但對 MCT、STS、FISS 等惡性腫瘤而言，邊緣切除（marginal excision）幾乎等同於計畫性失敗。關鍵原則：在切除任何腫塊之前，先用 FNA 得到初步診斷——如果是 MCT，你就知道需要 2-3 cm 切緣而非「沿著腫塊邊緣挖」。一個正確的首次手術勝過三次不足的追加手術。',
  common_mistakes: [
    '未做 FNA 就直接邊緣切除——可能導致 MCT 或 STS 切緣不足需再手術',
    'FISS 以邊緣切除「先看看」——首次不充分手術使復發率從 14% 升至 > 60%',
    '將 close margin 視為 clean margin——close margin 需要根據腫瘤類型決定是否需要再手術或放療',
    '術中打開腫瘤包膜（capsule）——會造成腫瘤細胞播散至手術區域',
    '未在手術前進行影像學評估（如 FISS 的 CT）——實際侵犯範圍可能遠大於觸診',
  ],
  disease_data: null,
  diagnostic_data: null,
  procedure_data: null,
  visual_placeholders: [
    { position: '切緣分類段落後', type: 'annotated_image', description: '手術切緣（lateral + deep margin）示意圖' },
    { position: '首次手術段落後', type: 'flowchart', description: '腫瘤外科術前至術後決策流程圖' },
  ],
  interactive_placeholders: [],
  drug_api_links: [],
  references: [
    { type: 'textbook', citation: 'Withrow SJ, Vail DM, Page RL. Withrow & MacEwen\'s Small Animal Clinical Oncology, 6th ed. Elsevier, 2020. Chapter 8: Surgical Oncology.', relevance: '腫瘤外科原則完整章節' },
    { type: 'journal', citation: 'Ehrhart NP, Culp WTN. Principles of surgical oncology. In: Veterinary Surgical Oncology. Wiley-Blackwell, 2022.', relevance: '獸醫腫瘤外科專著' },
    { type: 'journal', citation: 'Simpson S et al. Comparative review of surgical margins in canine mast cell tumor excision. Vet Surg. 2019;48(7):1108-1116.', relevance: 'MCT 手術切緣比較研究' },
    { type: 'guideline', citation: 'VCOG — Veterinary Cooperative Oncology Group. Surgical Oncology: Guidelines for First Surgery Principles. Vet Comp Oncol. 2015.', relevance: '腫瘤外科首次手術指引' },
  ],
  is_current: true,
  created_at: now,
};

/** 腫瘤疼痛管理 — 治療型 */
const contentCancerPain: NodeContent = {
  id: 'CONTENT-ONCO-L5-003',
  node_id: 'ONCO-L5-003',
  version: 1,
  summary: '腫瘤疼痛管理是獸醫腫瘤科緩和醫療的核心。腫瘤疼痛可能來自腫瘤本身（浸潤、壓迫、骨破壞）、治療相關（手術傷口、化療神經毒性）或副腫瘤症候群。多模式止痛（multimodal analgesia）是基本策略，結合 NSAIDs、Gabapentin、Tramadol 和必要時的鴉片類藥物。WHO 止痛階梯經修改後適用於獸醫。定期使用疼痛評估量表監測疼痛程度和治療效果，是維持腫瘤動物生活品質的關鍵。',
  learning_objectives: [
    '描述腫瘤疼痛的來源分類（腫瘤相關、治療相關、副腫瘤相關）',
    '說明多模式止痛（multimodal analgesia）的概念和優勢',
    '列出犬貓腫瘤疼痛管理的常用藥物及其劑量',
    '應用修改版 WHO 止痛階梯於獸醫患者',
    '使用疼痛評估量表監測腫瘤動物的疼痛和生活品質',
  ],
  key_points: [
    '腫瘤疼痛來源：體感性疼痛（somatic，如骨破壞）、內臟性疼痛（visceral，如腹腔腫瘤壓迫）、神經病變性疼痛（neuropathic，如腫瘤浸潤神經）',
    '多模式止痛：結合不同機轉藥物 → 增效（synergism）+ 減少個別藥物劑量和副作用',
    'WHO 止痛階梯（修改版）：Step 1（NSAIDs ± Gabapentin）→ Step 2（+ Tramadol）→ Step 3（+ 鴉片類）',
    'NSAIDs（Meloxicam、Carprofen）：第一線，抗發炎 + 部分腫瘤有抗腫瘤活性（COX-2 抑制）',
    'Gabapentin：神經病變性疼痛和中樞敏感化（central sensitization）的重要輔助藥物',
    'Tramadol：犬的止痛效果有爭議（生物利用率低），但貓的止痛效果較好',
    '生活品質評估：HHHHHMM 量表（Hurt, Hunger, Hydration, Hygiene, Happiness, Mobility, More good days than bad）',
    '安樂死時機：疼痛無法控制時，安樂死是最後的慈悲——與飼主預先討論',
  ],
  body: `# 腫瘤疼痛管理 (Cancer Pain Management)

## 一、治療原理 (Treatment Principles)



### 修改版 WHO 止痛階梯
### Step 1：輕度疼痛
| 藥物 | 劑量 | 備註 |
|------|------|------|
| [藥物:Meloxicam] | 犬 0.1 mg/kg PO SID；貓 0.05 mg/kg PO q24-48h | COX-2 偏好性，監測腎功能 |
| [藥物:Carprofen] | 犬 2.2 mg/kg PO BID 或 4.4 mg/kg PO SID | 監測肝功能 |
| [藥物:Piroxicam] | 犬 0.3 mg/kg PO SID | 兼具抗腫瘤活性（TCC、SCC） |
| [藥物:Gabapentin] | 犬 5-10 mg/kg PO BID-TID；貓 5-10 mg/kg PO BID | 神經病變性疼痛和中樞敏感化 |

### Step 2：中度疼痛（加上）
| 藥物 | 劑量 | 備註 |
|------|------|------|
| [藥物:Tramadol] | 犬 2-5 mg/kg PO BID-TID；貓 2-4 mg/kg PO BID | 犬止痛效果有爭議，貓效果較好 |
| [藥物:Amantadine] | 犬貓 3-5 mg/kg PO SID | NMDA 受體拮抗劑，抗中樞敏感化 |

### Step 3：重度疼痛（加上）
| 藥物 | 劑量 | 備註 |
|------|------|------|
| [藥物:Buprenorphine] | 貓 0.02-0.03 mg/kg 口腔黏膜 q6-8h | 貓首選鴉片類 |
| Codeine | 犬 1-2 mg/kg PO BID-TID | 弱鴉片類 |
| Fentanyl 貼片 | 犬 2-5 μg/kg/hr；貓 25 μg/hr 貼片 | 持續性疼痛控制，72 小時更換 |

### 特殊疼痛情況
### 骨肉瘤疼痛
- NSAIDs 為基礎
- [藥物:Pamidronate] 1-2 mg/kg IV q4 weeks（bisphosphonate，抑制骨吸收→止痛）
- Gabapentin 輔助
- 姑息性放射治療（2-3 次大分割，疼痛緩解率 > 70%）
- 截肢為最有效的止痛手段

### 口腔腫瘤疼痛
- NSAIDs + Gabapentin
- Tramadol/Buprenorphine
- 局部利多卡因凝膠
- 軟食/流質飲食

### 疼痛評估量表
### Glasgow Composite Pain Scale（術後疼痛）
- 行為觀察 + 觸診反應
- 分數制，超過閾值需要止痛介入

### HHHHHMM 生活品質量表（慢性/腫瘤疼痛）
- **H**urt（疼痛）：疼痛是否被控制？
- **H**unger（食慾）：是否進食足夠？
- **H**ydration（水分）：是否脫水？
- **H**ygiene（衛生）：是否能保持清潔？
- **H**appiness（快樂）：是否有愉悅表現？
- **M**obility（行動力）：是否能自主活動？
- **M**ore good days than bad（好日子 > 壞日子）

各項 1-10 分，總分 > 35 分為可接受的生活品質。

[圖片:修改版 WHO 止痛階梯示意圖]

## 二、藥物/方法比較 (Comparison)

### 腫瘤疼痛分類
### 按來源
- **腫瘤直接造成**：骨破壞（OSA）、器官壓迫/膨脹、神經浸潤
- **治療相關**：手術傷口、化療神經毒性（Vincristine）、放療黏膜炎
- **副腫瘤相關**：肥大型骨病（HO）、肌肉痙攣

### 按機轉
- **體感性疼痛（Somatic）**：定位明確、銳痛（骨、肌肉、皮膚）
- **內臟性疼痛（Visceral）**：定位模糊、鈍痛（腹腔/胸腔器官膨脹或壓迫）
- **神經病變性疼痛（Neuropathic）**：灼痛、電擊感（腫瘤浸潤或壓迫神經）

## 三、併發症與監控 (Complications & Monitoring)

## 四、預後影響 (Prognostic Impact)

## 五、人醫借鑒 (Translational Insights)

| 人醫工具/概念 | 獸醫應用潛力 | 現況 |
|-------------|-------------|------|
| CAR-T 細胞療法 | 犬 B 細胞淋巴瘤的細胞免疫治療 | 犬 CAR-T 試驗已啟動 |
| 腫瘤疫苗 | 犬黑色素瘤 DNA 疫苗（Oncept） | 犬黑色素瘤疫苗已 USDA 核准 |
| 光免疫療法（photoimmunotherapy） | 犬淺表腫瘤的免疫導引光動力治療 | 早期臨床試驗中 |
| 奈米藥物遞送 | 犬腫瘤局部高濃度化療——減少全身毒性 | 研究階段 |

## 六、臨床爭議與知識空缺 (Controversies & Knowledge Gaps)

| 爭議議題 | 現況 | Evidence Level |
|---------|------|---------------|
| 犬 MCT Grade II（Patnaik）的異質性 | 同一級別預後差異大——Kiupel 二級制是否更好？ | Level II |
| 犬骨肉瘤截肢+化療 vs 保肢+化療 | 保肢術感染/植入物失敗率高，長期存活是否等同 | Level II |
| 犬 HSA 化療（Doxorubicin ± DACTILi）的實際獲益 | MST 延長有限（~140 vs ~90 天），飼主生活品質考量 | Level I |
| 犬淋巴瘤「rescue」protocol 的選擇 | 多種 rescue 方案存在但無 head-to-head 比較 | Level III |`,
  clinical_pearl: '腫瘤疼痛管理中最容易被忽略的是神經病變性疼痛（neuropathic pain）。OSA 的疼痛不只是骨破壞的體感性疼痛——腫瘤浸潤骨膜和周圍神經會產生神經病變性成分。這就是為什麼單獨使用 NSAIDs 對晚期 OSA 效果有限，需要加上 Gabapentin（神經病變性疼痛）和 Amantadine（中樞敏感化）。另外，HHHHHMM 量表是與飼主討論安樂死時機最實用的工具——它將主觀感受轉化為可量化的評估。',
  common_mistakes: [
    '僅使用單一止痛藥物而非多模式止痛——組合用藥可增效並減少副作用',
    '忽略 Gabapentin 在腫瘤疼痛中的角色——神經病變性疼痛需要特定機轉藥物',
    '長期使用 NSAIDs 未監測腎功能和 GI——定期 BCS 和糞便潛血很重要',
    '不敢使用鴉片類藥物——獸醫患者的鴉片類使用是為了控制疼痛而非成癮',
    '未使用生活品質量表客觀評估——主觀判斷可能低估或高估疼痛程度',
  ],
  disease_data: null,
  diagnostic_data: null,
  procedure_data: null,
  visual_placeholders: [
    { position: 'WHO 階梯段落後', type: 'flowchart', description: '修改版 WHO 止痛階梯流程圖' },
    { position: 'HHHHHMM 段落後', type: 'interactive_overlay', description: 'HHHHHMM 生活品質評估互動量表' },
  ],
  interactive_placeholders: [
    { position: '全文後', type: 'interactive_assessment', description: 'HHHHHMM 生活品質評分互動計算器' },
  ],
  drug_api_links: ['Meloxicam', 'Carprofen', 'Piroxicam', 'Gabapentin', 'Tramadol', 'Amantadine', 'Buprenorphine', 'Pamidronate'],
  references: [
    { type: 'textbook', citation: 'Withrow SJ, Vail DM, Page RL. Withrow & MacEwen\'s Small Animal Clinical Oncology, 6th ed. Elsevier, 2020. Chapter 14: Cancer Pain Management.', relevance: '腫瘤疼痛管理完整章節' },
    { type: 'journal', citation: 'Villalobos A. Quality of life scale helps make final call. VPN. 2004;Sept:9-11.', relevance: 'HHHHHMM 生活品質量表原始文獻' },
    { type: 'guideline', citation: 'Epstein ME et al. AAHA/AAFP Pain Management Guidelines for Dogs and Cats. J Am Anim Hosp Assoc. 2015;51(2):67-84.', relevance: '犬貓疼痛管理指引' },
  ],
  is_current: true,
  created_at: now,
};

/** 放射治療 — 治療型 */
const contentRadiationTherapy: NodeContent = {
  id: 'CONTENT-ONCO-L5-004',
  node_id: 'ONCO-L5-004',
  version: 1,
  summary: '放射治療（Radiation Therapy, RT）利用游離輻射破壞腫瘤 DNA 以達到局部控制。分為根治性放療（多次小分割，總劑量高）和姑息性放療（少次大分割，快速緩解症狀）。獸醫 RT 需在每次治療時全身麻醉以確保精確定位。設備包括 Linear Accelerator（Linac）和 Cobalt-60。主要適應症包括不完全切除腫瘤的術後輔助、不可手術腫瘤的姑息治療，以及骨肉瘤的姑息性止痛。台灣目前已有數個獸醫放療中心提供服務。',
  learning_objectives: [
    '區分根治性放療和姑息性放療的目標、分割方式和適應症',
    '說明放射治療的基本物理學原理和生物學效應（4Rs）',
    '列出獸醫腫瘤科中放射治療的主要適應症',
    '描述放射治療的急性和晚期副作用',
    '解釋為何獸醫放射治療需要每次全身麻醉',
  ],
  key_points: [
    '放射治療為局部治療——控制原發腫瘤或手術殘留，不處理全身性轉移',
    '根治性放療：每次 2.5-4 Gy × 12-20 次（每日或隔日），總劑量 48-60 Gy，目標為長期控制',
    '姑息性放療：每次 6-10 Gy × 3-5 次（每週一次），快速緩解疼痛或症狀',
    '放射生物學 4Rs：Repair（修復）、Redistribution（再分配）、Reoxygenation（再氧合）、Repopulation（再增殖）',
    '每次治療需全身麻醉：確保精確定位（毫米級），動物無法配合固定不動',
    '急性副作用：皮膚紅腫脫毛（radiation dermatitis）、口腔黏膜炎（口腔腫瘤 RT）——通常可逆',
    '晚期副作用：纖維化、壞死、白內障——不可逆，限制終生總劑量',
    '口腔黑色素瘤對大分割放療反應良好（粗分割 4 × 8-9 Gy）',
    'OSA 姑息性放療止痛：2-4 次大分割，疼痛緩解率 > 70%，持續約 2-4 個月',
  ],
  body: `# 放射治療 (Radiation Therapy)

## 一、治療原理 (Treatment Principles)



### 基本原理
放射治療利用高能量游離輻射（光子或電子束）直接損傷腫瘤細胞 DNA，造成雙股斷裂（double-strand breaks）→ 細胞無法修復 → 在下一次有絲分裂時死亡（mitotic death）。

### 設備
- **Linear Accelerator（Linac）**：最常用，可產生光子和電子束
- **Cobalt-60**：放射性同位素源，逐漸被 Linac 取代
- **Stereotactic Radiation（SRS/SRT）**：高精度立體定位放射，單次或少次大劑量

### 放射生物學 4Rs
| R | 說明 | 臨床意義 |
|---|------|----------|
| Repair | 正常細胞修復亞致死損傷 | 分割給予讓正常組織修復 |
| Redistribution | 腫瘤細胞重新分配至放射敏感期 | 多次分割捕獲更多 S/M 期細胞 |
| Reoxygenation | 缺氧腫瘤區域在分割間重新氧合 | 氧氣增加放射敏感度 2-3 倍 |
| Repopulation | 腫瘤細胞在治療間隔增殖 | 治療不宜中斷過久 |

### 放療類型
### 根治性放療（Definitive/Curative-Intent RT）
- 目標：長期局部控制或治癒
- 分割：每次 2.5-4 Gy × 12-20 次
- 總劑量：48-60 Gy
- 頻率：每日或隔日
- 治療期間：3-4 週
- 每次需全身麻醉（共 12-20 次）

### 姑息性放療（Palliative RT）
- 目標：快速緩解症狀（疼痛、出血、阻塞）
- 分割：每次 6-10 Gy × 3-5 次
- 總劑量：18-32 Gy
- 頻率：每週一次
- 全身麻醉次數較少（3-5 次）

### 獸醫 RT 主要適應症
| 適應症 | 放療類型 | 說明 |
|--------|----------|------|
| 術後切緣不淨（MCT、STS、FISS） | 根治性 | 最常見適應症之一 |
| 不可手術的腫瘤 | 根治性或姑息性 | 鼻腔腫瘤、腦瘤 |
| 口腔黑色素瘤 | 粗分割（4 × 8-9 Gy） | 黑色素瘤對大分割反應好 |
| OSA 止痛 | 姑息性（2-4 次） | 緩解率 > 70%，持續 2-4 個月 |
| 腦瘤（meningioma） | 根治性 | 中位存活 > 12 個月 |
| 鼻腔腫瘤 | 根治性 | 手術+放療中位存活 > 12-20 個月 |

## 二、藥物/方法比較 (Comparison)

## 三、併發症與監控 (Complications & Monitoring)

### 副作用
### 急性副作用（治療期間至結束後數週）
- **皮膚**：紅腫（erythema）→ 脫毛（alopecia）→ 濕性脫皮（moist desquamation）
- **口腔黏膜炎**：口腔腫瘤 RT 時，疼痛、流涎、食慾下降
- **眼睛**：結膜炎、乾眼症（若在照射範圍內）
- 通常在 RT 結束後 2-4 週內自行緩解

### 晚期副作用（數月至數年後）
- **纖維化**：照射區域結締組織增生
- **骨壞死**：下頷骨在口腔 RT 後
- **白內障**：眼球在照射範圍內時
- **腦壞死**：腦部 RT 的罕見但嚴重併發症
- 不可逆——限制終生總劑量

[圖片:根治性 vs 姑息性放療分割方案比較圖]

## 四、預後影響 (Prognostic Impact)

## 五、人醫借鑒 (Translational Insights)

| 人醫工具/概念 | 獸醫應用潛力 | 現況 |
|-------------|-------------|------|
| CAR-T 細胞療法 | 犬 B 細胞淋巴瘤的細胞免疫治療 | 犬 CAR-T 試驗已啟動 |
| 腫瘤疫苗 | 犬黑色素瘤 DNA 疫苗（Oncept） | 犬黑色素瘤疫苗已 USDA 核准 |
| 光免疫療法（photoimmunotherapy） | 犬淺表腫瘤的免疫導引光動力治療 | 早期臨床試驗中 |
| 奈米藥物遞送 | 犬腫瘤局部高濃度化療——減少全身毒性 | 研究階段 |

## 六、臨床爭議與知識空缺 (Controversies & Knowledge Gaps)

| 爭議議題 | 現況 | Evidence Level |
|---------|------|---------------|
| 犬 MCT Grade II（Patnaik）的異質性 | 同一級別預後差異大——Kiupel 二級制是否更好？ | Level II |
| 犬骨肉瘤截肢+化療 vs 保肢+化療 | 保肢術感染/植入物失敗率高，長期存活是否等同 | Level II |
| 犬 HSA 化療（Doxorubicin ± DACTILi）的實際獲益 | MST 延長有限（~140 vs ~90 天），飼主生活品質考量 | Level I |
| 犬淋巴瘤「rescue」protocol 的選擇 | 多種 rescue 方案存在但無 head-to-head 比較 | Level III |`,
  clinical_pearl: '在台灣，放射治療的可近性正在改善，但仍非所有腫瘤轉診中心都有設備。因此，臨床決策時需要考量：(1) 是否有其他替代方案（如再手術、化療）、(2) 飼主是否能配合多次麻醉和交通往返的治療排程、(3) 費用承受能力。姑息性放療（3-5 次）在 OSA 止痛方面效果卓越且所需麻醉次數少，是最具實際可行性的放療應用之一。口腔黑色素瘤的粗分割放療（4 次）也是可行的選項。',
  common_mistakes: [
    '認為放射治療可以治療全身轉移——RT 為局部治療，全身性疾病需化療',
    '忽略每次 RT 需全身麻醉的事實——飼主需理解治療排程的負擔',
    '術後太晚開始輔助放療——建議在手術後 2-4 週內開始（傷口癒合後）',
    '將急性副作用與晚期副作用混為一談——急性副作用通常可逆，晚期不可逆',
    '不了解口腔黑色素瘤對大分割放療反應較好——標準小分割不一定是最佳選擇',
  ],
  disease_data: null,
  diagnostic_data: null,
  procedure_data: null,
  visual_placeholders: [
    { position: '放療類型段落後', type: 'comparison_table', description: '根治性 vs 姑息性放療比較表' },
    { position: '副作用段落後', type: 'timeline', description: '放射治療急性與晚期副作用時間軸' },
  ],
  interactive_placeholders: [],
  drug_api_links: [],
  references: [
    { type: 'textbook', citation: 'Withrow SJ, Vail DM, Page RL. Withrow & MacEwen\'s Small Animal Clinical Oncology, 6th ed. Elsevier, 2020. Chapter 10: Radiation Therapy.', relevance: '放射治療完整章節' },
    { type: 'journal', citation: 'Larue SM, Gordon IK. Radiation therapy. In: Withrow & MacEwen\'s Small Animal Clinical Oncology, 6th ed.', relevance: '獸醫放射治療基礎' },
    { type: 'journal', citation: 'Boston SE et al. Outcomes of eight dogs with appendicular osteosarcoma treated with palliative radiation therapy: 2-3 fraction protocols. Vet Radiol Ultrasound. 2007;48(2):141-145.', relevance: 'OSA 姑息性放療止痛研究' },
    { type: 'guideline', citation: 'AAHA Oncology Guidelines for Dogs and Cats. J Am Anim Hosp Assoc. 2016;52(4):181-204.', relevance: 'AAHA 腫瘤科指引——放射治療角色與轉介建議' },
  ],
  is_current: true,
  created_at: now,
};

/** 節拍式化療 — 治療型 */
const contentMetronomicChemo: NodeContent = {
  id: 'CONTENT-ONCO-L5-005',
  node_id: 'ONCO-L5-005',
  version: 1,
  summary: '節拍式化療（Metronomic Chemotherapy）是以低劑量、高頻率（通常每日口服）持續給予化療藥物的治療策略。與傳統最大耐受劑量（MTD）化療不同，節拍式化療的主要作用機轉為抗血管新生（anti-angiogenesis）和免疫調節，而非直接細胞毒性。常用方案為低劑量 Cyclophosphamide + NSAIDs（如 Piroxicam）。適用於維持治療、不適合高強度化療的患者、或飼主因經濟/生活考量無法頻繁回診的情況。',
  learning_objectives: [
    '比較節拍式化療與傳統 MTD 化療的作用機轉和目標差異',
    '說明抗血管新生（anti-angiogenesis）在節拍式化療中的角色',
    '列出節拍式化療的常用藥物組合和劑量',
    '描述節拍式化療的適應症和適用患者群',
    '監測節拍式化療的副作用和療效評估',
  ],
  key_points: [
    '節拍式化療：低劑量 + 高頻率 + 持續給藥（通常每日口服），無休息期',
    '主要機轉：抗血管新生（targeting 腫瘤血管內皮細胞的增殖）+ 免疫調節（降低 Treg 細胞）',
    '與 MTD 化療的本質差異：MTD 針對快速增殖的腫瘤細胞；節拍式針對腫瘤微環境（血管和免疫）',
    '最常用方案：Cyclophosphamide 10-15 mg/m²/day PO + Piroxicam 0.3 mg/kg PO SID',
    '替代方案：Chlorambucil 4 mg/m² PO q48h + NSAIDs；低劑量口服 Etoposide',
    '適應症：軟組織肉瘤術後維持、HSA 輔助、不適合 MTD 化療的患者、經濟限制',
    '優點：口服居家用藥、副作用輕微、費用較低、無需頻繁住院',
    '監測：每 2-4 週 CBC（低度骨髓抑制可能）、尿液分析（出血性膀胱炎）、腎功能（NSAIDs）',
    '出血性膀胱炎預防：低劑量 Cyclophosphamide 仍有風險，每日最後一次排尿前充分飲水',
  ],
  body: `# 節拍式化療 (Metronomic Chemotherapy)

## 一、治療原理 (Treatment Principles)



### 概念與原理
### MTD vs 節拍式化療
| 特點 | 傳統 MTD 化療 | 節拍式化療 |
|------|-------------|-----------|
| 劑量 | 最大耐受劑量 | 低劑量（MTD 的 10-33%） |
| 頻率 | 間歇性（q2-3 weeks） | 持續性（每日或隔日） |
| 休息期 | 有（恢復骨髓功能） | 無 |
| 主要標靶 | 腫瘤細胞 | 腫瘤血管內皮 + 免疫調節 |
| 給藥途徑 | 多為 IV | 口服（居家） |
| 副作用 | 較嚴重（骨髓抑制、GI） | 輕微 |

### 抗血管新生機轉
- 腫瘤血管內皮細胞持續增殖以供應腫瘤營養
- 低劑量持續化療 → 選擇性抑制增殖中的血管內皮細胞
- 血管內皮細胞基因組穩定（不易產生抗藥性）→ 長期有效
- Cyclophosphamide 低劑量可抑制 VEGF 和 TSP-1 調控

### 免疫調節機轉
- 低劑量 Cyclophosphamide → 選擇性降低 Treg 細胞（CD4+CD25+FoxP3+）
- Treg 降低 → 解除對效應 T 細胞的抑制 → 增強抗腫瘤免疫
- NSAIDs → 抑制 COX-2/PGE2 → 減少免疫抑制性微環境

### 常用節拍式化療方案
### 方案一：Cyclophosphamide + Piroxicam（最常用）
| 藥物 | 劑量 | 頻率 | 監測 |
|------|------|------|------|
| [藥物:Cyclophosphamide] | 10-15 mg/m²/day PO | 每日或隔日 | CBC q2-4 週，尿液分析 |
| [藥物:Piroxicam] | 0.3 mg/kg PO SID | 每日 | 腎功能 q4-8 週 |

### 方案二：Chlorambucil + NSAIDs
| 藥物 | 劑量 | 頻率 | 監測 |
|------|------|------|------|
| [藥物:Chlorambucil] | 4 mg/m² PO | 隔日 | CBC q2-4 週 |
| [藥物:Meloxicam] | 0.1 mg/kg PO SID | 每日 | 腎功能 |

### 方案三：搭配 TKI
| 藥物 | 劑量 | 頻率 | 備註 |
|------|------|------|------|
| [藥物:Toceranib] | 2.75 mg/kg PO | 隔日（QOD） | 抗 VEGFR/c-KIT |
| + Cyclophosphamide | 10 mg/m²/day PO | 每日 | 低劑量搭配 |

### 適應症
### 主要適應症
- **軟組織肉瘤（STS）術後維持**：切緣乾淨但高級別
- **HSA 脾臟切除後輔助**：替代或接續 Doxorubicin
- **MCT 術後維持**：中度風險（Patnaik II / Kiupel 低度但有不良因子）
- **不適合 MTD 化療的患者**：高齡、併發疾病、飼主偏好

### 特殊考量
- **經濟因素**：節拍式化療月費用顯著低於 MTD 化療
- **飼主便利性**：居家口服用藥，無需每週住院 IV 化療
- **台灣臨床實務**：部分飼主因工作或距離無法頻繁回診，節拍式化療為良好替代

## 二、藥物/方法比較 (Comparison)

## 三、併發症與監控 (Complications & Monitoring)

### 副作用與監測
### 常見副作用
- **出血性膀胱炎**（Cyclophosphamide）：即使低劑量仍有風險（約 5-10%）
  - 預防：鼓勵飲水、傍晚給藥（睡前排尿）
  - 症狀：血尿、頻尿 → 停藥 + 換用 Chlorambucil
- **輕度骨髓抑制**：通常 Grade 1-2，罕見嚴重
- **GI 症狀**（NSAIDs 相關）：食慾下降、嘔吐

### 療效評估
- 穩定（Stable Disease）即為治療成功——節拍式化療的目標是控制而非縮小
- 每 2-3 個月影像學追蹤（超音波/X 光）
- RECIST 標準（若有可測量病灶）

[圖片:節拍式 vs MTD 化療用藥時程比較圖]

## 四、預後影響 (Prognostic Impact)

## 五、人醫借鑒 (Translational Insights)

| 人醫工具/概念 | 獸醫應用潛力 | 現況 |
|-------------|-------------|------|
| CAR-T 細胞療法 | 犬 B 細胞淋巴瘤的細胞免疫治療 | 犬 CAR-T 試驗已啟動 |
| 腫瘤疫苗 | 犬黑色素瘤 DNA 疫苗（Oncept） | 犬黑色素瘤疫苗已 USDA 核准 |
| 光免疫療法（photoimmunotherapy） | 犬淺表腫瘤的免疫導引光動力治療 | 早期臨床試驗中 |
| 奈米藥物遞送 | 犬腫瘤局部高濃度化療——減少全身毒性 | 研究階段 |

## 六、臨床爭議與知識空缺 (Controversies & Knowledge Gaps)

| 爭議議題 | 現況 | Evidence Level |
|---------|------|---------------|
| 犬 MCT Grade II（Patnaik）的異質性 | 同一級別預後差異大——Kiupel 二級制是否更好？ | Level II |
| 犬骨肉瘤截肢+化療 vs 保肢+化療 | 保肢術感染/植入物失敗率高，長期存活是否等同 | Level II |
| 犬 HSA 化療（Doxorubicin ± DACTILi）的實際獲益 | MST 延長有限（~140 vs ~90 天），飼主生活品質考量 | Level I |
| 犬淋巴瘤「rescue」protocol 的選擇 | 多種 rescue 方案存在但無 head-to-head 比較 | Level III |`,
  clinical_pearl: '節拍式化療是「實務導向」的治療策略。當飼主說「我沒辦法每週帶牠來打針」或「化療費用太高」時，節拍式化療提供了一個居家口服、費用較低、副作用較輕的替代方案。雖然其療效數據不如 MTD 化療強大，但對於許多無法接受傳統化療的患者，節拍式化療至少提供了「做些什麼」的選項。重要提醒：即使是低劑量 Cyclophosphamide，出血性膀胱炎仍然可能發生——囑咐飼主注意尿液顏色的變化。',
  common_mistakes: [
    '期望節拍式化療能像 MTD 化療一樣迅速縮小腫瘤——節拍式化療的目標是穩定而非消退',
    '忘記監測 Cyclophosphamide 的出血性膀胱炎——低劑量仍有 5-10% 風險',
    '未搭配 NSAIDs——NSAIDs 的抗血管新生和免疫調節作用是節拍式化療的重要組成',
    '將節拍式化療視為「什麼都沒做」——其抗血管新生和免疫調節機轉有科學依據',
    '未定期（q2-4 週）監測 CBC——即使副作用輕微，仍需追蹤',
  ],
  disease_data: null,
  diagnostic_data: null,
  procedure_data: null,
  visual_placeholders: [
    { position: 'MTD vs 節拍式比較表後', type: 'comparison_table', description: 'MTD vs 節拍式化療全面比較圖' },
    { position: '抗血管新生段落後', type: 'animated_diagram', description: '節拍式化療抗血管新生機轉動態圖' },
  ],
  interactive_placeholders: [],
  drug_api_links: ['Cyclophosphamide', 'Piroxicam', 'Chlorambucil', 'Meloxicam', 'Toceranib'],
  references: [
    { type: 'textbook', citation: 'Withrow SJ, Vail DM, Page RL. Withrow & MacEwen\'s Small Animal Clinical Oncology, 6th ed. Elsevier, 2020. Chapter 9: Chemotherapy — Metronomic Section.', relevance: '節拍式化療章節' },
    { type: 'journal', citation: 'Leach TN et al. Prospective trial of metronomic chlorambucil chemotherapy in dogs with naturally occurring cancer. Vet Comp Oncol. 2012;10(2):102-112.', relevance: '節拍式 Chlorambucil 前瞻性試驗' },
    { type: 'journal', citation: 'Burton JH et al. Low-dose cyclophosphamide selectively decreases regulatory T cells and inhibits angiogenesis in dogs with soft tissue sarcoma. J Vet Intern Med. 2011;25(4):920-926.', relevance: '犬低劑量 Cyclophosphamide 的免疫調節和抗血管新生機轉' },
    { type: 'guideline', citation: 'VCOG — Veterinary Cooperative Oncology Group. Common Terminology Criteria for Adverse Events (VCOG-CTCAE) v2. Vet Comp Oncol. 2016;14(4):417-446.', relevance: '節拍式化療副作用分級與監測標準' },
  ],
  is_current: true,
  created_at: now,
};

/** 以 Map 方式匯出，方便用 nodeId 快速查找 */
export const ONCO_CONTENTS = new Map<string, NodeContent>([
  // Layer 0
  ['ONCO-L0-001', contentOncoOverview],
  // Layer 1
  ['ONCO-L1-001', contentTumorBiology],
  ['ONCO-L1-002', contentTumorImmunology],
  ['ONCO-L1-003', contentCancerGenetics],
  // Layer 2
  ['ONCO-L2-001', contentMetastasis],
  ['ONCO-L2-002', contentParaneoplastic],
  ['ONCO-L2-003', contentDrugResistance],
  // Layer 3
  ['ONCO-L3-001', contentCanineLymphoma],
  ['ONCO-L3-002', contentMCT],
  ['ONCO-L3-003', contentOsteosarcoma],
  ['ONCO-L3-004', contentHSA],
  ['ONCO-L3-005', contentOralMelanoma],
  ['ONCO-L3-006', contentMammaryTumor],
  ['ONCO-L3-007', contentTCC],
  ['ONCO-L3-008', contentFISS],
  // Layer 4
  ['ONCO-L4-001', contentTumorCytology],
  ['ONCO-L4-002', contentStagingWorkup],
  ['ONCO-L4-003', contentTNM],
  // Layer 5
  ['ONCO-L5-001', contentChemotherapy],
  ['ONCO-L5-002', contentSurgicalOncology],
  ['ONCO-L5-003', contentCancerPain],
  ['ONCO-L5-004', contentRadiationTherapy],
  ['ONCO-L5-005', contentMetronomicChemo],
]);
