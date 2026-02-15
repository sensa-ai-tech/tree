import type { NodeContent } from '@/types/knowledge';

const now = '2026-02-15T00:00:00Z';

/** 心臟科總覽 — 概念型 */
const contentOverview: NodeContent = {
  id: 'CONTENT-L0-001',
  node_id: 'CARDIO-L0-001',
  version: 1,
  summary: '獸醫心臟科涵蓋心血管系統的解剖、生理、病理、診斷與治療。犬貓心臟病盛行率約 10-15%，其中犬以二尖瓣退化（MMVD）最常見，貓則以肥厚型心肌病（HCM）為主。台灣因亞熱帶氣候，心絲蟲症亦為重要議題。',
  learning_objectives: [
    '說明獸醫心臟科的範疇與六層知識架構',
    '列舉犬貓最常見的五種心臟疾病',
    '辨識需要轉診至心臟專科的臨床情境',
    '說明台灣地區心臟病的流行病學特徵',
  ],
  key_points: [
    '犬最常見後天心臟病：MMVD（約 75%）',
    '貓最常見心臟病：HCM（約 60%）',
    '台灣為心絲蟲高盛行區，預防醫學至關重要',
    '心臟聽診是最基礎也最重要的篩檢工具',
    '心臟超音波（echocardiography）是確診金標準',
  ],
  body: `# 獸醫心臟科總覽

獸醫心臟科（Veterinary Cardiology）是專門研究伴侶動物心血管系統疾病的專科領域。

## 學科架構

本知識樹將心臟科知識分為六個層級：

- **Layer 0**：學科總覽與入門概念
- **Layer 1**：基礎科學（解剖、電生理、血流動力學）
- **Layer 2**：病理機轉（瓣膜退化、心肌重塑、心律不整）
- **Layer 3**：臨床疾病（MMVD、DCM、HCM、心絲蟲等）
- **Layer 4**：診斷方法（聽診、超音波、ECG、X 光）
- **Layer 5**：治療與管理（藥物治療、手術、慢性管理）

## 台灣臨床現況

台灣地處亞熱帶，[藥物:Ivermectin] 等心絲蟲預防藥物的使用極為重要。根據台灣獸醫內科學會統計，未預防犬隻的心絲蟲陽性率可達 20-40%。

[圖片:犬貓常見心臟病分佈圓餅圖]`,
  clinical_pearl: '每次理學檢查都應進行心臟聽診。即使是年輕健康動物，發現心雜音也需進一步評估——早期發現可顯著改善預後。',
  common_mistakes: [
    '認為心雜音一定代表嚴重心臟病（功能性雜音很常見）',
    '忽略貓的心臟病（貓常無明顯症狀直到急性發作）',
    '忘記台灣為心絲蟲高盛行區而未建議預防',
  ],
  disease_data: null,
  diagnostic_data: null,
  procedure_data: null,
  visual_placeholders: [
    { position: '學科架構段落後', type: 'mind_map', description: '六層知識架構心智圖' },
  ],
  interactive_placeholders: [],
  drug_api_links: [],
  references: [
    { type: 'textbook', citation: 'Ettinger SJ, Feldman EC. Textbook of Veterinary Internal Medicine, 8th ed.', relevance: '心臟科基礎教材' },
    { type: 'guideline', citation: 'ACVIM Consensus Statement on MMVD (2019)', relevance: 'MMVD 診斷與治療指引' },
  ],
  is_current: true,
  created_at: now,
};

/** MMVD — 疾病型 */
const contentMMVD: NodeContent = {
  id: 'CONTENT-L3-001',
  node_id: 'CARDIO-L3-001',
  version: 1,
  summary: '二尖瓣黏液瘤性退化（MMVD）是犬最常見的後天性心臟病，占所有犬心臟病的 75% 以上。好發於小型犬，特別是騎士查理王小獵犬（CKCS）。ACVIM 將其分為 A-D 四期，Stage B2 開始建議使用 pimobendan。',
  learning_objectives: [
    '描述 MMVD 的病理生理機轉與疾病進程',
    '運用 ACVIM 分期系統正確分類病患',
    '列出各分期的治療建議與藥物選擇',
    '執行 MMVD 病患的長期追蹤計畫',
    '向飼主說明 MMVD 的預後與居家監測方法',
  ],
  key_points: [
    '好發品種：CKCS、馬爾濟斯、貴賓、臘腸、吉娃娃',
    'ACVIM 分期：A（高風險無病變）→ B1（無心臟重塑）→ B2（有重塑）→ C（臨床症狀）→ D（難治性）',
    'EPIC 研究證實 Stage B2 開始使用 pimobendan 可延緩進入 C 期',
    '胸腔 X 光 VHS > 10.5 及左心房/主動脈比 > 1.6 提示心臟重塑',
    '心雜音等級不一定與疾病嚴重度正相關',
    '居家呼吸次數（sleeping RR）< 30 次/分為重要監測指標',
  ],
  body: `# 二尖瓣黏液瘤性退化 (MMVD)

## 概述

MMVD，又稱為慢性退行性瓣膜病（Chronic Degenerative Valvular Disease），是犬最常見的後天性心臟病。其特徵為二尖瓣葉的黏液樣變性（myxomatous degeneration），導致瓣膜增厚、脫垂與閉鎖不全。

## 病理機轉

瓣膜基質中糖胺聚醣（GAGs）異常沉積，導致：
1. 瓣膜葉增厚與拉長
2. 腱索延長甚至斷裂
3. 二尖瓣閉鎖不全（mitral regurgitation, MR）
4. 左心房容量過載 → 左心房擴大
5. 代償性左心室擴大
6. 最終可能導致充血性心衰竭（CHF）

## ACVIM 分期

[互動:ACVIM 分期互動圖表]

| 分期 | 定義 | 臨床特徵 |
|------|------|---------|
| A | 高風險品種，無病變 | 無雜音，無結構改變 |
| B1 | 有雜音，無心臟重塑 | LA/Ao < 1.6, LVIDDN 正常 |
| B2 | 有雜音，有心臟重塑 | LA/Ao ≥ 1.6 或 LVIDDN 增加 |
| C | 出現 CHF 臨床症狀 | 咳嗽、呼吸急促、運動不耐 |
| D | 難治性心衰竭 | 對標準治療反應不佳 |

## 治療方案

- **Stage A/B1**：定期追蹤，暫無藥物治療
- **Stage B2**：開始 [藥物:Pimobendan] 0.25-0.3 mg/kg PO BID
- **Stage C**：三合一療法
  - [藥物:Furosemide] 2-4 mg/kg PO BID-TID
  - [藥物:Pimobendan] 0.25-0.3 mg/kg PO BID
  - [藥物:Enalapril] 或 [藥物:Benazepril] 0.5 mg/kg PO BID
- **Stage D**：加強利尿劑、考慮 [藥物:Spironolactone]、[藥物:Sildenafil]

[圖片:MMVD 分期治療流程圖]`,
  clinical_pearl: '心雜音的等級與 MMVD 的嚴重度不一定正相關。Grade II/VI 的雜音可能已有顯著心臟重塑（B2），而 Grade V/VI 的雜音在某些穩定病患中可能維持多年不進展。永遠要以影像學（心超 + X 光）作為分期依據。',
  common_mistakes: [
    '僅憑心雜音等級判斷疾病嚴重度，未安排心臟超音波',
    '在 Stage B1 即開始使用 pimobendan（EPIC 研究僅支持 B2 以上）',
    '忽略 sleeping RR 的居家監測，未教導飼主計算方法',
    '將 MMVD 相關咳嗽與呼吸道感染混淆',
  ],
  disease_data: {
    signalment: '好發於中老年小型犬（> 5 歲），品種偏好：CKCS、馬爾濟斯、博美、約克夏、臘腸、吉娃娃。雄性略高於雌性。',
    etiology: '瓣膜基質的黏液樣變性（myxomatous degeneration），確切病因不明，可能與遺傳、年齡相關退化有關。CKCS 具有明確的遺傳易感性。',
    pathogenesis: '瓣膜葉黏液樣變性 → 增厚與脫垂 → 二尖瓣閉鎖不全 → 左心房容量過載 → LA 擴大 → LV 離心性肥大 → 神經荷爾蒙活化（RAAS、SNS）→ 體液滯留 → 充血性心衰竭（肺水腫）',
    clinical_signs: [
      { sign: '心雜音', category: 'primary', description: '左側心尖區收縮期雜音，Grade I-VI/VI' },
      { sign: '咳嗽', category: 'primary', description: '夜間或清晨加劇，可為左主支氣管壓迫或肺水腫所致' },
      { sign: '運動不耐', category: 'primary', description: '活動力下降，散步距離縮短' },
      { sign: '呼吸急促', category: 'secondary', description: 'Sleeping RR > 30 次/分提示 CHF' },
      { sign: '昏厥', category: 'secondary', description: '嚴重 MR 或合併心律不整時可見' },
    ],
    staging: { system: 'ACVIM Consensus (2019)', stages: ['Stage A：高風險品種，無病變', 'Stage B1：有雜音，無心臟重塑', 'Stage B2：有雜音，有心臟重塑', 'Stage C：臨床心衰竭', 'Stage D：難治性心衰竭'] },
    differential_diagnosis: [
      { condition: '擴張型心肌病 (DCM)', key_differentiator: '好發大型犬，心肌收縮力下降（FS 降低），腔室擴大但瓣膜正常' },
      { condition: '感染性心內膜炎', key_differentiator: '通常伴隨發燒、白血球升高、血培養陽性' },
      { condition: '先天性二尖瓣發育不良', key_differentiator: '年輕動物發病，超音波可見瓣膜結構異常' },
      { condition: '肺高壓', key_differentiator: '三尖瓣逆流速度增加，右心擴大' },
    ],
    diagnostic_workup: '1. 理學檢查（聽診定位雜音）→ 2. 胸腔 X 光（VHS、肺野評估）→ 3. 心臟超音波（LA/Ao、LVIDDN、FS、MR 程度）→ 4. 血壓測量 → 5. 基礎血檢（BUN/Cre 評估腎功能）→ 6. NT-proBNP（輔助診斷）',
    treatment_protocol: 'Stage B2 以上啟動藥物治療。核心三合一：Pimobendan + Furosemide + ACE inhibitor。Stage D 考慮加上 Spironolactone、Sildenafil、Amlodipine。急性 CHF 需住院氧氣支持與靜脈注射利尿劑。',
    prognosis: 'Stage B1 中位存活 > 3 年。Stage B2 使用 Pimobendan 後中位延緩進入 C 期約 15 個月（EPIC 研究）。Stage C 經適當治療中位存活 9-12 個月。Stage D 預後較差，中位存活 3-6 個月。',
    monitoring: '穩定期每 6 個月追蹤心超與 X 光。CHF 控制後每 1-3 個月回診。居家 sleeping RR 監測（目標 < 30 次/分）。定期監測腎功能指數。',
    owner_communication: 'MMVD 是一種慢性進行性疾病，目前無法治癒但可以有效管理。早期發現與定期追蹤是關鍵。教導飼主計算居家呼吸次數，當 sleeping RR > 30 或出現呼吸困難應立即就醫。強調用藥依從性的重要性。',
  },
  diagnostic_data: null,
  procedure_data: null,
  visual_placeholders: [
    { position: '分期表格前', type: 'flowchart', description: 'ACVIM 分期流程決策圖' },
    { position: '治療方案段落後', type: 'comparison_table', description: '各分期治療方案比較表' },
  ],
  interactive_placeholders: [
    { position: 'ACVIM 分期段落', type: 'interactive_staging', description: '輸入檢查數據自動判定分期' },
  ],
  drug_api_links: ['Pimobendan', 'Furosemide', 'Enalapril', 'Benazepril', 'Spironolactone', 'Sildenafil'],
  references: [
    { type: 'guideline', citation: 'Keene BW et al. ACVIM consensus guidelines for the diagnosis and treatment of myxomatous mitral valve disease in dogs. J Vet Intern Med. 2019;33(3):1127-1140.', relevance: '最新 MMVD 診斷治療共識' },
    { type: 'journal', citation: 'Boswood A et al. Effect of pimobendan in dogs with preclinical myxomatous mitral valve disease and cardiomegaly: the EPIC study. J Vet Intern Med. 2016;30(6):1765-1779.', relevance: 'Pimobendan 用於 B2 期的關鍵證據' },
    { type: 'textbook', citation: 'Ware WA. Cardiovascular Disease in Small Animal Medicine. Manson Publishing, 2011.', relevance: '心臟科基礎教材' },
  ],
  is_current: true,
  created_at: now,
};

/** 心臟聽診 — 診斷型 */
const contentAuscultation: NodeContent = {
  id: 'CONTENT-L4-001',
  node_id: 'CARDIO-L4-001',
  version: 1,
  summary: '心臟聽診是獸醫臨床檢查中最基礎且最重要的心臟評估工具。透過系統性的聽診技巧，可以辨識正常心音（S1、S2）、異常心音（S3、S4）、心雜音及心律不整，為進一步影像學檢查提供方向。',
  learning_objectives: [
    '執行系統性的犬貓心臟聽診四點聽診法',
    '辨識 S1、S2 心音並判斷是否存在異常心音',
    '運用 Levine 分級量表評估心雜音等級（I-VI）',
    '根據聽診發現制定進一步診斷計畫',
  ],
  key_points: [
    '四個聽診位置：左心尖（二尖瓣）、左心底（主動脈/肺動脈）、右心尖（三尖瓣）、右心底',
    'S1（第一心音）：房室瓣關閉音，標誌收縮期開始',
    'S2（第二心音）：半月瓣關閉音，標誌舒張期開始',
    '犬的竇性心律不整（sinus arrhythmia）為正常變異',
    '心雜音 Levine 分級：I-VI 級，IV 級以上伴隨震顫（thrill）',
  ],
  body: `# 心臟聽診

## 聽診器選擇

使用雙面聽診器：
- **鐘面（Bell）**：低頻音（S3、S4、舒張期雜音）
- **膜面（Diaphragm）**：高頻音（S1、S2、收縮期雜音）

## 四點聽診法

1. **左心尖區**（Left apex）：第 5 肋間，肘關節水平 → 二尖瓣
2. **左心底區**（Left base）：第 3-4 肋間，肩關節水平 → 主動脈瓣/肺動脈瓣
3. **右心尖區**（Right apex）：第 4-5 肋間 → 三尖瓣
4. **右心底區**（Right base）：第 3 肋間

## 心雜音分級（Levine Scale）

| 等級 | 描述 |
|------|------|
| I/VI | 僅在安靜環境中仔細聽診可聞 |
| II/VI | 輕柔但容易聽到 |
| III/VI | 中等音量，無震顫 |
| IV/VI | 響亮，伴隨胸壁震顫（thrill） |
| V/VI | 聽診器邊緣觸及即可聞 |
| VI/VI | 不接觸胸壁即可聞 |

[互動:心音播放器——正常心音 vs. 各級雜音]`,
  clinical_pearl: '在進行聽診時，先評估心率和節律，再專注於各別心音。注意犬的竇性心律不整是正常的——吸氣時心率加快，呼氣時減慢。如果在貓身上聽到節律不整，則需要進一步評估。',
  common_mistakes: [
    '僅在左側聽診而忽略右側（三尖瓣逆流常見於右側）',
    '將犬的竇性心律不整誤判為病理性心律不整',
    '環境太吵雜時進行聽診，影響微弱雜音的偵測',
  ],
  disease_data: null,
  diagnostic_data: {
    indication: ['常規理學檢查', '疑似心臟疾病評估', '麻醉前評估', '心臟病患追蹤'],
    contraindication: ['無絕對禁忌症'],
    technique: '系統性四點聽診法：左心尖→左心底→右心尖→右心底。每個位置至少聽 5-10 秒。先膜面後鐘面。安靜環境中進行，動物站立或側臥。同時觸摸股動脈評估脈搏品質。',
    normal_findings: [
      { finding: 'S1 心音', description: '房室瓣（二尖瓣、三尖瓣）關閉音', significance: '標誌心室收縮開始' },
      { finding: 'S2 心音', description: '半月瓣（主動脈瓣、肺動脈瓣）關閉音', significance: '標誌心室舒張開始' },
      { finding: '竇性心律不整', description: '犬的呼吸性竇性心律不整', significance: '正常變異，與副交感神經張力有關' },
    ],
    abnormal_findings: [
      { finding: '收縮期雜音', description: 'S1 與 S2 之間聽到的異常音', significance: '最常見原因：二尖瓣或三尖瓣閉鎖不全、心室中隔缺損、主動脈/肺動脈狹窄' },
      { finding: '舒張期雜音', description: 'S2 與下一個 S1 之間的異常音', significance: '少見，提示主動脈或肺動脈瓣閉鎖不全' },
      { finding: '奔馬律（Gallop rhythm）', description: '額外的 S3 或 S4 心音', significance: 'S3 提示容量過載，S4 提示順應性下降。貓的奔馬律高度提示心肌病' },
      { finding: '心律不整', description: '節律不規則（排除犬竇性心律不整後）', significance: '需 ECG 進一步評估，可能為早期收縮、房室傳導阻滯等' },
    ],
    interpretation_guide: '1. 確認心率（犬正常 60-160 bpm，貓 140-220 bpm）。2. 評估節律規則性。3. 各聽診點逐一評估 S1、S2 音量與品質。4. 辨識是否有雜音（定位、時相、等級、特徵）。5. 辨識是否有額外心音（S3、S4）。',
    pitfalls: [
      '幼犬/幼貓的生理性雜音（innocent murmur）誤判為病理性',
      '高度緊張動物的心率過快導致無法分辨心音',
      '肥胖動物胸壁過厚降低聽診敏感度',
    ],
    sensitivity_specificity: '對心雜音偵測的敏感度約 70-85%（取決於操作者經驗），對確診特定疾病的特異度較低，需搭配影像學。',
    cost_benefit: '成本極低（僅需聽診器），可在任何臨床場景執行。作為篩檢工具價值極高，是決定是否需要進一步心臟檢查的第一步。',
  },
  procedure_data: null,
  visual_placeholders: [
    { position: '四點聽診法段落', type: 'annotated_image', description: '犬胸壁四個聽診位置標示圖' },
  ],
  interactive_placeholders: [
    { position: '心雜音分級後', type: 'audio_player', description: '各級心雜音音頻播放器' },
  ],
  drug_api_links: [],
  references: [
    { type: 'textbook', citation: 'Ware WA. Cardiovascular Disease in Small Animal Medicine. Manson Publishing, 2011.', relevance: '心臟聽診技術標準參考' },
    { type: 'journal', citation: 'Caivano D et al. Murmur intensity in dogs. J Vet Intern Med. 2018.', relevance: '心雜音等級與疾病嚴重度的關聯研究' },
  ],
  is_current: true,
  created_at: now,
};

/** 以 Map 方式匯出，方便用 nodeId 快速查找 */
export const SEED_NODE_CONTENTS = new Map<string, NodeContent>([
  ['CARDIO-L0-001', contentOverview],
  ['CARDIO-L3-001', contentMMVD],
  ['CARDIO-L4-001', contentAuscultation],
]);
