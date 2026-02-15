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

## 概述

CBC 是臨床最常規的血液學檢查，提供紅血球系列、白血球系列與血小板的定量資訊。

## 紅血球評估

### 貧血分類
- **再生性貧血**：reticulocyte count 升高（犬 > 60,000/μL），提示溶血或失血
- **非再生性貧血**：reticulocyte count 正常或降低，提示骨髓問題或慢性疾病

### MCV 分類
| 類型 | MCV | 常見原因 |
|------|-----|---------|
| 小球性 | 降低 | 缺鐵、門體分流 |
| 正球性 | 正常 | 慢性疾病、急性失血 |
| 大球性 | 升高 | 再生性貧血、FeLV、藥物 |

## 白血球評估

### 白血球分類計數
- 嗜中性球：犬 3000-11,500/μL，貓 2500-12,500/μL
- 淋巴球：犬 1000-4800/μL，貓 1500-7000/μL
- 單核球：犬 150-1350/μL
- 嗜酸性球：犬 100-1250/μL

### Stress leukogram（皮質醇反應）
- 嗜中性球增多 + 淋巴球減少 + 嗜酸性球減少 + 單核球增多

## 血小板評估

- 正常：犬 175,000-500,000/μL，貓 175,000-600,000/μL
- < 50,000/μL：自發出血風險
- EDTA 偽性血小板減少症（貓常見）：需用枸櫞酸管複驗`,
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
  ],
  is_current: true,
  created_at: now,
};

/** 以 Map 方式匯出，方便用 nodeId 快速查找 */
export const CPATH_CONTENTS = new Map<string, NodeContent>([
  ['CPATH-L4-001', contentCBC],
]);
