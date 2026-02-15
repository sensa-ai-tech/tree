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

## 概述

犬淋巴瘤（lymphoma / lymphosarcoma）是犬最常見的造血系統腫瘤，約占所有犬腫瘤的 7-24%。中年至老年犬好發（中位年齡 6-9 歲），無明顯性別偏好。Golden Retriever、Boxer、Bullmastiff、Basset Hound 等品種有較高發病率。

## 解剖分型

- **多中心型（Multicentric）**：約 80%，全身周邊淋巴結腫大
- **消化道型（Alimentary）**：約 5-7%，胃腸道浸潤
- **縱膈型（Mediastinal）**：約 5%，前縱膈腫塊
- **皮膚型（Cutaneous）**：約 5%，分為上皮親和性與非上皮親和性
- **結外型（Extranodal）**：眼、腎、神經系統等

## WHO 臨床分期

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

## 免疫表型與預後

免疫組織化學（IHC）或流式細胞儀分型：
- **B-cell**：約 60-70%，CD79a+/CD3-，CHOP 方案中位存活 12-14 個月
- **T-cell**：約 20-30%，CD3+/CD79a-，中位存活 6-9 個月，高血鈣發生率較高

## CHOP 化療方案

[藥物:Cyclophosphamide] + [藥物:Doxorubicin] + [藥物:Vincristine] + [藥物:Prednisone]

標準 CHOP 方案為 25 週、19 次療程，每週交替給藥。主要毒性包括：
- Doxorubicin：累積性心臟毒性（總劑量 > 180-240 mg/m²）
- Cyclophosphamide：出血性膀胱炎（無菌性）
- Vincristine：周邊神經毒性、便秘

## 其他治療選項

- 單劑 Doxorubicin 方案：緩解率較低但較簡便
- 節拍式化療：低劑量口服藥物，適合飼主無法頻繁回診或經濟限制
- [藥物:Lomustine]（CCNU）：T-cell 型或復發型的救援方案
- [藥物:Prednisone] 單獨使用：中位存活僅 1-2 個月

[圖片:CHOP 方案 25 週用藥時程表]`,
  clinical_pearl: '犬淋巴瘤的 FNA 細胞學通常即可獲得初步診斷——中大型淋巴球增多並取代正常淋巴結結構。但確認免疫表型（B vs T cell）對預後評估和治療選擇至關重要，建議同時進行流式細胞儀或免疫組織化學染色。',
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

## 概述

細胞學是腫瘤診斷的第一線工具，具有快速、低侵入性、低成本的優點。大多數體表腫塊和可觸及的淋巴結均可在門診中進行 FNA 細胞學檢查。

## FNA 技術

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

## 染色方法

- **Diff-Quick（Romanowsky 類）**：最常用，3 液浸泡各 5-10 秒，門診即可操作
- **Wright-Giemsa**：細胞形態更清晰，需較長染色時間
- **New Methylene Blue（NMB）**：快速濕片染色，適合初步篩檢

## 三大細胞型態

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

## 惡性度判斷標準

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

[互動:細胞學練習題——辨識腫瘤型態]`,
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
  ],
  is_current: true,
  created_at: now,
};

/** 以 Map 方式匯出，方便用 nodeId 快速查找 */
export const ONCO_CONTENTS = new Map<string, NodeContent>([
  ['ONCO-L3-001', contentCanineLymphoma],
  ['ONCO-L4-001', contentTumorCytology],
]);
