import type { NodeContent } from '@/types/knowledge';

const now = '2026-02-15T00:00:00Z';

/** 心肺復甦 RECOVER — 操作型 */
const contentCPR: NodeContent = {
  id: 'CONTENT-ECC-L5-002',
  node_id: 'ECC-L5-002',
  version: 1,
  summary: '獸醫心肺復甦術（CPR）依據 RECOVER 指引執行，包含基本生命支持（BLS）與進階生命支持（ALS）。BLS 強調高品質胸外按壓（100-120 次/分）與通氣（10 次/分），ALS 則涵蓋藥物介入與監測。ETCO2 > 15 mmHg 為 CPR 品質指標。2024 年 Reassessment Campaign 更新強調團隊協作與早期辨識心跳停止。',
  learning_objectives: [
    '描述 RECOVER 指引中 BLS 與 ALS 的標準流程',
    '正確執行犬貓胸外按壓技術（速率、深度、姿位）',
    '列出 CPR 中常用藥物的劑量與給藥途徑',
    '運用 ETCO2 監測評估 CPR 品質',
    '組織急救團隊並分配角色（leader、compressor、airway、recorder）',
  ],
  key_points: [
    '胸外按壓速率 100-120 次/分，深度為胸廓寬度的 1/3 至 1/2',
    '通氣速率 10 次/分，避免過度通氣',
    '按壓與通氣比 2 分鐘循環，每 2 分鐘輪換按壓者',
    'Epinephrine 0.01 mg/kg IV 每 3-5 分鐘重複',
    'Atropine 0.04 mg/kg IV 用於迷走神經介導的心跳停止',
    'ETCO2 > 15 mmHg 表示 CPR 品質良好',
    '自主循環恢復（ROSC）後需進入復甦後照護',
  ],
  body: `# 心肺復甦術 (RECOVER)

## 概述

RECOVER (Reassessment Campaign on Veterinary Resuscitation) 是獸醫 CPR 的循證指引，首次於 2012 年發表（Fletcher DJ et al., JVECC），2024 年進行更新。其核心架構分為 BLS 與 ALS。

## 基本生命支持 (BLS)

### 胸外按壓
- **速率**：100-120 次/分
- **深度**：胸廓寬度的 1/3 至 1/2
- **姿位**：
  - 中大型犬：側臥，最寬胸廓處按壓
  - 小型犬/貓：側臥或仰臥，直接壓心臟
  - 桶胸犬（如鬥牛犬）：仰臥按壓
- **回彈**：確保每次按壓後胸壁完全回彈

### 通氣
- 速率 10 次/分（每 6 秒 1 次）
- 氣管插管後不需同步
- 潮氣量 10 mL/kg
- 避免過度通氣（增加胸內壓降低靜脈回流）

### 循環
- 按壓:通氣 = 連續按壓 2 分鐘為一循環
- 每 2 分鐘輪換按壓者以避免疲勞

## 進階生命支持 (ALS)

### 藥物治療
| 藥物 | 劑量 | 適應症 | 給藥間隔 |
|------|------|--------|---------|
| [藥物:Epinephrine] | 0.01 mg/kg IV | 所有心跳停止 | 每 3-5 分鐘 |
| [藥物:Atropine] | 0.04 mg/kg IV | 迷走神經介導 | 單次或重複一次 |
| [藥物:Amiodarone] | 5 mg/kg IV | VF/無脈搏 VT | 可重複一次 |
| [藥物:Lidocaine] | 2 mg/kg IV（犬） | VF/無脈搏 VT | 可重複一次 |

### 電擊去顫
- 單相波 4-6 J/kg，雙相波 2-4 J/kg
- 每 2 分鐘循環後評估節律，有 VF/VT 則電擊

## 監測

- **ETCO2**：> 15 mmHg 為 CPR 品質良好，突然上升至 > 30-40 mmHg 可能提示 ROSC
- **ECG**：辨識可電擊節律（VF、無脈搏 VT）vs 不可電擊節律（asystole、PEA）

## 復甦後照護

ROSC 後進入復甦後照護階段：
1. 血壓維持（MAP > 60 mmHg）
2. 體溫管理（避免高體溫）
3. 通氣支持（目標 SpO2 > 94%）
4. 神經功能評估

[圖片:RECOVER CPR 演算法流程圖]`,
  clinical_pearl: '胸外按壓品質是 CPR 成功最關鍵的因素。按壓者每 2 分鐘必須輪換——研究顯示即使自覺尚可，按壓品質在 2 分鐘後即顯著下降。ETCO2 是唯一可即時反映按壓品質的客觀指標，務必在 CPR 期間持續監測。',
  common_mistakes: [
    '按壓速率過慢或中斷時間過長（hands-off time 應 < 10 秒）',
    '過度通氣導致胸內壓升高，降低冠狀動脈灌流壓',
    '按壓者未每 2 分鐘輪換，導致按壓品質下降',
    'Epinephrine 劑量錯誤（常見錯誤為使用 0.1 mg/kg 即高劑量）',
    '忽略 ETCO2 監測，僅依賴主觀判斷 CPR 品質',
  ],
  disease_data: null,
  diagnostic_data: null,
  procedure_data: {
    equipment: [
      { name: '氣管插管組', description: '含喉鏡、各尺寸氣管內管（犬 5-14 mm、貓 3-4.5 mm）、導引管芯', required: true },
      { name: 'Ambu 甦醒球', description: '手動加壓通氣裝置，搭配氧氣源', required: true },
      { name: '靜脈留置針與輸液組', description: '18-22 G 靜脈留置針、輸液管路', required: true },
      { name: 'ECG 監測器', description: '持續心電圖監測，辨識心律', required: true },
      { name: 'ETCO2 偵測器', description: '潮氣末二氧化碳監測，評估 CPR 品質', required: true },
      { name: '去顫器', description: '單相波或雙相波電擊去顫器', required: false },
      { name: '急救藥物盒', description: '含 Epinephrine、Atropine、Amiodarone、Lidocaine 等', required: true },
      { name: '計時器/碼錶', description: '記錄 CPR 時間與藥物給予間隔', required: true },
    ],
    patient_preparation: '確認心跳停止（無脈搏、無呼吸、無意識）。將動物置於堅硬平面上，右側臥（中大型犬）或仰臥（小型犬/貓）。快速進行氣管插管並建立靜脈通路。指派團隊角色：leader、compressor、airway manager、drug/recorder。',
    step_by_step: [
      {
        step_number: 1,
        title: '確認心跳停止並呼救',
        description: '快速評估意識、呼吸、脈搏（< 10 秒）。確認心跳停止後立即呼叫團隊啟動 CPR。',
        tips: ['不要花超過 10 秒評估脈搏', '有疑慮就開始 CPR——不會因為對有心跳的動物按壓而造成嚴重傷害'],
        image_placeholder: null,
      },
      {
        step_number: 2,
        title: '開始胸外按壓 (C)',
        description: '以 100-120 次/分速率進行胸外按壓，深度為胸廓寬度 1/3 至 1/2。確保每次按壓後完全回彈。',
        tips: ['雙手交叉重疊，肘關節打直', '利用身體重量而非手臂力量', '使用節拍器 App 維持正確速率'],
        image_placeholder: '[圖片:不同體型犬貓按壓姿位示意圖]',
      },
      {
        step_number: 3,
        title: '建立氣道與通氣 (A & B)',
        description: '執行氣管插管，確認管路位置正確。連接 Ambu 甦醒球與氧氣源，以 10 次/分速率通氣。',
        tips: ['插管後以聽診確認雙側肺音', '潮氣量 10 mL/kg，不要過度通氣', '無法插管時可使用面罩加壓通氣'],
        image_placeholder: null,
      },
      {
        step_number: 4,
        title: '建立靜脈通路與 ECG 監測',
        description: '建立周邊靜脈留置針（頭靜脈或內隱靜脈）。連接 ECG 監測器辨識心律。連接 ETCO2 偵測器。',
        tips: ['CPR 期間不要為了建立血管通路而中斷按壓', '若無法建立 IV，可使用骨內注射（IO）', 'ETCO2 目標 > 15 mmHg'],
        image_placeholder: null,
      },
      {
        step_number: 5,
        title: '給予急救藥物',
        description: '根據心律給予 Epinephrine 0.01 mg/kg IV，每 3-5 分鐘重複。迷走神經介導者給予 Atropine 0.04 mg/kg IV。VF/無脈搏 VT 考慮 Amiodarone 或 Lidocaine。',
        tips: ['低劑量 Epinephrine (0.01 mg/kg) 為標準劑量，高劑量 (0.1 mg/kg) 僅在低劑量無效時考慮', '每次給藥後以 3-5 mL 生理食鹽水沖管'],
        image_placeholder: null,
      },
      {
        step_number: 6,
        title: '每 2 分鐘評估與輪換',
        description: '每 2 分鐘暫停按壓 < 10 秒，快速評估 ECG 節律與脈搏。輪換按壓者。有 VF/VT 則執行電擊去顫。',
        tips: ['hands-off time 不超過 10 秒', '評估期間其他人準備好接手按壓', '記錄每次循環的藥物、電擊與 ETCO2 數值'],
        image_placeholder: null,
      },
      {
        step_number: 7,
        title: '判定 ROSC 或終止 CPR',
        description: '若出現 ROSC（自主脈搏恢復、ETCO2 突然上升 > 30-40 mmHg），進入復甦後照護。若 CPR > 20 分鐘無 ROSC 且無可逆原因，與飼主討論終止。',
        tips: ['ROSC 後仍需密切監測，再次心跳停止風險高', '終止 CPR 的決定應由團隊 leader 做出', '記錄完整 CPR 過程用於團隊檢討'],
        image_placeholder: null,
      },
    ],
    complications: [
      { complication: '肋骨骨折', frequency: '約 30% 犬', management: '通常不影響預後，CPR 後 X 光評估' },
      { complication: '肺挫傷/氣胸', frequency: '少見', management: '胸腔穿刺引流，ROSC 後胸腔 X 光評估' },
      { complication: '肝臟/脾臟裂傷', frequency: '罕見', management: 'ROSC 後 AFAST 評估腹腔積液' },
      { complication: '再次心跳停止', frequency: 'ROSC 後 30-50%', management: '立即重新開始 CPR，查找可逆原因（5H5T）' },
    ],
    post_procedure: 'ROSC 後進入復甦後照護：維持 MAP > 60 mmHg（必要時使用升壓劑）。避免高體溫（目標 37.5-38.5 C）。維持 SpO2 > 94%、避免高氧。持續 ECG 監測至少 24 小時。評估神經功能。監測尿量（目標 > 1 mL/kg/hr）。48 小時內密切觀察是否再次心跳停止。',
    tips_and_tricks: [
      '事先準備 CPR 藥物劑量表（按體重預算），張貼在急救區',
      '定期團隊 CPR 模擬演練（建議每季至少一次）',
      '在急救推車上放置節拍器（設定 110 bpm）',
      '使用 CPR 記錄表即時記錄時間、藥物與監測數據',
    ],
  },
  visual_placeholders: [
    { position: 'BLS 段落後', type: 'flowchart', description: 'RECOVER BLS/ALS 演算法流程圖' },
    { position: '胸外按壓段落', type: 'annotated_image', description: '不同體型犬貓胸外按壓姿位標示圖' },
  ],
  interactive_placeholders: [
    { position: '藥物治療表格後', type: 'drug_calculator', description: 'CPR 藥物劑量計算器（輸入體重自動計算）' },
  ],
  drug_api_links: ['Epinephrine', 'Atropine', 'Amiodarone', 'Lidocaine'],
  references: [
    { type: 'guideline', citation: 'Fletcher DJ, Boller M, Brainard BM, et al. RECOVER evidence and knowledge gap analysis on veterinary CPR. Part 7: Clinical guidelines. JVECC. 2012;22(s1):S102-S131.', relevance: 'RECOVER CPR 原始指引' },
    { type: 'guideline', citation: 'RECOVER Reassessment Campaign 2024. Updated clinical guidelines for veterinary CPR.', relevance: '2024 年更新版 CPR 指引' },
    { type: 'journal', citation: 'Hofmeister EH, Brainard BM, Egger CM, et al. Prognostic indicators for dogs and cats with cardiopulmonary arrest treated by cardiopulmonary cerebral resuscitation at a university teaching hospital. JAVMA. 2009;235(1):50-57.', relevance: 'CPR 預後因子研究' },
  ],
  is_current: true,
  created_at: now,
};

/** 急診分診 ABCDE — 診斷型 */
const contentTriage: NodeContent = {
  id: 'CONTENT-ECC-L4-001',
  node_id: 'ECC-L4-001',
  version: 1,
  summary: '急診分診是急診醫學的核心技能，運用 ABCDE 系統（Airway、Breathing、Circulation、Disability、Exposure）在 60 秒內完成初級評估（primary survey），快速辨識危及生命的問題並決定治療優先順序。分診分類系統將病患分為即刻（紅）、緊急（黃）、延遲（綠）、死亡/瀕死（黑）四級。',
  learning_objectives: [
    '運用 ABCDE 系統在 60 秒內完成初級評估',
    '辨識需要立即介入的危及生命狀況',
    '正確執行四級分診分類',
    '建立急診病患的處置優先順序',
    '描述二級評估（secondary survey）的完整步驟',
  ],
  key_points: [
    'Primary survey（初級評估）應在 60 秒內完成',
    'ABCDE 依序評估：氣道、呼吸、循環、神經、暴露/環境',
    '四級分診：即刻（紅）、緊急（黃）、延遲（綠）、死亡/瀕死（黑）',
    '氣道阻塞為最高優先——不通暢則無法處理其他問題',
    '循環評估重點：心率、脈搏品質、CRT、黏膜顏色',
    'Secondary survey（二級評估）在穩定後進行完整理學檢查',
  ],
  body: `# 急診分診 (ABCDE)

## 概述

急診分診（Emergency Triage）的目標是在最短時間內辨識危及生命的問題，並根據嚴重度決定治療順序。ABCDE 系統提供一套標準化、可重複執行的快速評估架構。

## ABCDE 初級評估

### A — Airway（氣道）
- 氣道是否通暢？
- 有無阻塞徵象：喘鳴音（stridor）、呼吸困難伴頸部伸展
- 處置：清除異物、氣管插管、必要時緊急氣管切開

### B — Breathing（呼吸）
- 呼吸速率與型態
- 呼吸音是否對稱
- 有無呼吸窘迫：端坐呼吸、腹式呼吸、開口呼吸（貓）
- 處置：氧氣支持、胸腔穿刺（緊張性氣胸）、正壓通氣

### C — Circulation（循環）
- 心率與節律
- 脈搏品質（股動脈）
- 黏膜顏色與 CRT（正常 < 2 秒）
- 有無外部出血
- 處置：止血加壓、靜脈輸液、休克治療

### D — Disability（神經）
- 意識程度（AVPU：Alert, Voice-responsive, Pain-responsive, Unresponsive）
- 瞳孔大小與對光反應
- 體位與步態
- 處置：癲癇控制、腦壓管理

### E — Exposure/Environment（暴露/環境）
- 體溫測量
- 全身快速檢視（外傷、出血、腫塊）
- 環境因素：中毒暴露史、中暑
- 處置：保溫或降溫、除汙

## 分診分類系統

| 類別 | 顏色 | 定義 | 範例 |
|------|------|------|------|
| 即刻 | 紅 | 危及生命，需立即介入 | 呼吸停止、休克、大量出血、GDV |
| 緊急 | 黃 | 嚴重但暫無立即生命危險 | 骨折、中度脫水、腹痛 |
| 延遲 | 綠 | 穩定，可安全等待 | 輕微撕裂傷、慢性嘔吐 |
| 死亡/瀕死 | 黑 | 預後極差或已死亡 | 瀕死、嚴重多重創傷無反應 |

## 二級評估 (Secondary Survey)

初級評估完成並穩定危及生命問題後，進行完整的二級評估：
1. 完整病史採集（SAMPLE：Signs/symptoms, Allergies, Medications, Past history, Last meal, Events）
2. 鼻到尾完整理學檢查
3. 基礎診斷：PCV/TP、血糖、BUN（stick test）、電解質、血氣
4. 影像：AFAST/TFAST、胸腔/腹腔 X 光

[圖片:ABCDE 評估流程海報]`,
  clinical_pearl: '分診的關鍵是「快」——初級評估必須在 60 秒內完成。不要在初級評估階段做詳細的理學檢查，那是二級評估的工作。記住：你的任務不是診斷，是辨識「什麼會在接下來幾分鐘殺死這隻動物」。',
  common_mistakes: [
    '花太多時間在初級評估（應 < 60 秒），延誤危急處置',
    '未依 ABCDE 順序評估，先處理明顯但非致命問題（如開放性骨折）而忽略氣道問題',
    '僅憑飼主描述分診，未親自快速評估動物',
    '忽略 E（暴露/環境），未測量體溫而遺漏中暑或低體溫',
  ],
  disease_data: null,
  diagnostic_data: {
    indication: [
      '所有急診就診動物的初始評估',
      '創傷病患的快速評估',
      '住院病患突發病情變化',
      '大量傷患事件的分類',
    ],
    contraindication: ['無絕對禁忌症'],
    technique: 'ABCDE 系統性評估：依 Airway → Breathing → Circulation → Disability → Exposure 順序，每項 10-15 秒，總計 < 60 秒完成初級評估。辨識到危及生命問題時立即介入處理，再繼續評估下一項。',
    normal_findings: [
      { finding: '氣道通暢', description: '無喘鳴音或阻塞徵象', significance: '可進入 B 評估' },
      { finding: '呼吸正常', description: '犬 10-30 次/分、貓 20-40 次/分，呼吸音對稱清晰', significance: '無立即呼吸威脅' },
      { finding: '循環穩定', description: '心率正常範圍、脈搏有力、CRT < 2 秒、黏膜粉紅', significance: '血流動力學穩定' },
      { finding: '神經正常', description: 'Alert，瞳孔正常且對稱，行走正常', significance: '無顱內壓升高或神經急症' },
      { finding: '體溫正常', description: '犬 38.0-39.2 C、貓 38.0-39.5 C', significance: '無低體溫或高體溫急症' },
    ],
    abnormal_findings: [
      { finding: '上呼吸道阻塞', description: '喘鳴音、吸氣性呼吸困難、頸部伸展', significance: '立即評估是否需要氣管插管或緊急氣管切開' },
      { finding: '呼吸窘迫', description: '端坐呼吸、開口呼吸、腹式呼吸、發紺', significance: '立即氧氣支持，評估是否有氣胸或胸腔積液需穿刺引流' },
      { finding: '休克徵象', description: '心率過快、脈搏微弱、CRT 延長、黏膜蒼白或灰白', significance: '立即靜脈輸液復甦，尋找休克原因' },
      { finding: '意識改變', description: 'AVPU 中非 Alert：Voice/Pain/Unresponsive', significance: '評估顱內壓升高、低血糖、中毒等原因' },
      { finding: '體溫異常', description: '> 40.5 C（中暑風險）或 < 36.5 C（低體溫）', significance: '立即啟動降溫或保溫措施' },
    ],
    interpretation_guide: '1. 依 ABCDE 順序逐項評估，每發現異常先處置再繼續。2. 初級評估完成後根據發現決定分診等級（紅/黃/綠/黑）。3. 紅色病患立即進入急救區啟動治療。4. 穩定後進行二級評估（SAMPLE + 完整理學檢查 + 基礎診斷）。',
    pitfalls: [
      '未依序評估導致遺漏氣道問題',
      '被外觀嚇人但非致命的傷口吸引注意力',
      '多重傷患時未執行分診分類，先到先看',
      '過度依賴儀器檢查延誤初級評估',
    ],
    sensitivity_specificity: 'ABCDE 初級評估對危及生命問題的辨識敏感度 > 90%（取決於操作者經驗）。分診系統的分類準確度在有經驗操作者可達 85-90%。',
    cost_benefit: '零成本（僅需臨床技能），是急診醫學最基礎且投報比最高的技能。正確分診可顯著降低急診死亡率。',
  },
  procedure_data: null,
  visual_placeholders: [
    { position: 'ABCDE 段落前', type: 'flowchart', description: 'ABCDE 初級評估流程圖' },
    { position: '分診分類表格後', type: 'comparison_table', description: '四級分診分類速查表（含常見急診對應）' },
  ],
  interactive_placeholders: [
    { position: 'ABCDE 段落後', type: 'triage_simulator', description: '互動式分診模擬器——輸入臨床發現自動建議分診等級' },
  ],
  drug_api_links: [],
  references: [
    { type: 'textbook', citation: 'Aldrich J. Global Assessment of the Emergency Patient. In: Silverstein DC, Hopper K. Small Animal Critical Care Medicine, 3rd ed. Elsevier, 2022.', relevance: '急診評估標準教材' },
    { type: 'textbook', citation: 'Silverstein DC, Hopper K. Small Animal Critical Care Medicine, 3rd ed. Elsevier, 2022.', relevance: 'ECC 核心參考教材' },
    { type: 'journal', citation: 'Ruys LJ, Gunning M, Teske E, et al. Evaluation of a veterinary triage list modified from a human five-point triage system. JVECC. 2012;22(3):280-286.', relevance: '獸醫分診系統驗證研究' },
  ],
  is_current: true,
  created_at: now,
};

/** 以 Map 方式匯出，方便用 nodeId 快速查找 */
export const ECC_CONTENTS = new Map<string, NodeContent>([
  ['ECC-L5-002', contentCPR],
  ['ECC-L4-001', contentTriage],
]);
