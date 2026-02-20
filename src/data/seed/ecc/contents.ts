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

## 一、治療原理 (Treatment Principles)



### 概述
RECOVER (Reassessment Campaign on Veterinary Resuscitation) 是獸醫 CPR 的循證指引，首次於 2012 年發表（Fletcher DJ et al., JVECC），2024 年進行更新。其核心架構分為 BLS 與 ALS。

### 基本生命支持 (BLS)
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

### 進階生命支持 (ALS)
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

### 監測
- **ETCO2**：> 15 mmHg 為 CPR 品質良好，突然上升至 > 30-40 mmHg 可能提示 ROSC
- **ECG**：辨識可電擊節律（VF、無脈搏 VT）vs 不可電擊節律（asystole、PEA）

### 復甦後照護
ROSC 後進入復甦後照護階段：
1. 血壓維持（MAP > 60 mmHg）
2. 體溫管理（避免高體溫）
3. 通氣支持（目標 SpO2 > 94%）
4. 神經功能評估

[圖片:RECOVER CPR 演算法流程圖]

## 二、藥物/方法比較 (Comparison)

## 三、併發症與監控 (Complications & Monitoring)

## 四、預後影響 (Prognostic Impact)

## 五、人醫借鑒 (Translational Insights)

| 人醫工具/概念 | 獸醫應用潛力 | 現況 |
|-------------|-------------|------|
| 目標導向體液治療（GDFT） | 犬休克復甦的個人化輸液策略 | 人醫 GDFT 已改變實踐，獸醫引入中 |
| 高流量鼻導管氧氣（HFNC） | 犬呼吸窘迫的非侵入性氧氣支持 | 人醫廣泛使用，獸醫經驗增加 |
| 抗蛇毒血清精製化 | 台灣特有蛇種抗毒血清改進 | 疾管署持續更新，F(ab')2 製劑研究中 |
| 脂質乳劑療法（ILE/Intralipid） | 犬局部麻醉劑/脂溶性毒物中毒的解毒 | 獸醫急診已廣泛採用 |

## 六、臨床爭議與知識空缺 (Controversies & Knowledge Gaps)

| 爭議議題 | 現況 | Evidence Level |
|---------|------|---------------|
| 犬休克的晶體液 vs 膠體液選擇 | 人醫大型 RCT 不支持膠體液優勢，獸醫 HES 安全性疑慮增加 | Level I |
| 犬急性疼痛管理——Opioid 劑量個體化 | 犬對 opioid 反應個體差異大，固定劑量方案不一定適合所有病患 | Level III |
| 犬 DKA 的 insulin CRI protocol（0.05 vs 0.1 U/kg/h） | 低劑量方案減少低血糖風險但血糖控制速度較慢 | Level III |`,
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
    { type: 'textbook', citation: 'Silverstein DC, Hopper K. Small Animal Critical Care Medicine, 3rd ed. Elsevier, 2022', relevance: '急重症醫學教科書參考' },
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

## 一、檢查原理與適應症 (Principles & Indications)



### 概述
急診分診（Emergency Triage）的目標是在最短時間內辨識危及生命的問題，並根據嚴重度決定治療順序。ABCDE 系統提供一套標準化、可重複執行的快速評估架構。

### ABCDE 初級評估
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

### 分診分類系統
| 類別 | 顏色 | 定義 | 範例 |
|------|------|------|------|
| 即刻 | 紅 | 危及生命，需立即介入 | 呼吸停止、休克、大量出血、GDV |
| 緊急 | 黃 | 嚴重但暫無立即生命危險 | 骨折、中度脫水、腹痛 |
| 延遲 | 綠 | 穩定，可安全等待 | 輕微撕裂傷、慢性嘔吐 |
| 死亡/瀕死 | 黑 | 預後極差或已死亡 | 瀕死、嚴重多重創傷無反應 |

### 二級評估 (Secondary Survey)
初級評估完成並穩定危及生命問題後，進行完整的二級評估：
1. 完整病史採集（SAMPLE：Signs/symptoms, Allergies, Medications, Past history, Last meal, Events）
2. 鼻到尾完整理學檢查
3. 基礎診斷：PCV/TP、血糖、BUN（stick test）、電解質、血氣
4. 影像：AFAST/TFAST、胸腔/腹腔 X 光

[圖片:ABCDE 評估流程海報]

## 二、判讀要點 (Interpretation)

## 三、常見陷阱 (Pitfalls)

## 四、人醫借鑒 (Translational Insights)

| 人醫工具/概念 | 獸醫應用潛力 | 現況 |
|-------------|-------------|------|
| 床邊凝血分析（TEG/ROTEM） | 犬凝血功能即時全面評估 | 獸醫 ICU 漸增使用 |
| 連續血糖監測（CGM） | 犬 DKA/胰島素瘤的血糖趨勢追蹤 | 人醫 Freestyle Libre 獸醫已有使用報告 |
| POCUS 肺超音波 B-lines | 犬急診即時肺水腫/胸水評估 | 獸醫急診 POCUS 教育快速普及 |

## 五、臨床爭議與知識空缺 (Controversies & Knowledge Gaps)

| 爭議議題 | 現況 | Evidence Level |
|---------|------|---------------|
| 犬 POCUS TFAST/AFAST 的標準化訓練與能力認證 | 操作者依賴性高，獸醫 POCUS 認證制度尚未統一 | Level IV |
| 犬血氣分析 Stewart approach vs Henderson-Hasselbalch | 物理化學方法理論更完整，但臨床實用性爭議 | Level III |`,
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
    { type: 'guideline', citation: 'Fletcher DJ, Boller M, Brainard BM, et al. RECOVER evidence and knowledge gap analysis on veterinary CPR. Part 7: Clinical guidelines. JVECC. 2012;22(s1):S102-S131.', relevance: 'RECOVER 指引中急診初級評估與分診流程' },
  ],
  is_current: true,
  created_at: now,
};

/** ECC-L3-001 過敏性休克 — 疾病型 */
const contentAnaphylaxis: NodeContent = {
  id: 'CONTENT-ECC-L3-001',
  node_id: 'ECC-L3-001',
  version: 1,
  summary: '過敏性休克（Anaphylaxis）是一種急性、全身性的嚴重過敏反應，可在數分鐘內導致心血管衰竭與死亡。犬的標的器官主要為肝臟（肝靜脈痙攣導致門脈高壓），貓則以呼吸道為主（支氣管痙攣與肺水腫）。常見觸發因子包括疫苗、藥物（尤其是抗生素與 NSAIDs）、昆蟲叮咬與食物。Epinephrine 為第一線救命藥物，延遲給予顯著增加死亡率。',
  learning_objectives: [
    '描述犬貓過敏性休克的物種差異性病理生理機轉',
    '辨識過敏性休克的早期臨床徵象並與血管迷走神經反應區分',
    '正確執行 Epinephrine 的劑量與給藥途徑',
    '建立過敏性休克的緊急處置流程與後續監測計畫',
    '向飼主說明再次暴露風險與預防策略',
  ],
  key_points: [
    '犬標的器官為肝臟（肝靜脈痙攣→門脈高壓→內臟充血→低血容休克），貓標的器官為呼吸道（支氣管痙攣→呼吸衰竭）',
    'Epinephrine 0.01 mg/kg IM 為第一線用藥，嚴重時 0.01 mg/kg slow IV',
    '二相性反應（biphasic reaction）可在初次緩解後 4-72 小時復發，需觀察至少 24-48 小時',
    '犬常見表現：急性嘔吐、血便、腹部疼痛、低血壓、虛脫',
    '貓常見表現：急性呼吸窘迫、喘鳴、頭頸部搔癢、流涎',
    '疫苗接種後建議觀察 15-30 分鐘，高風險個體預先給予 Diphenhydramine',
    '輸液復甦為休克治療的關鍵——犬 shock dose crystalloid 60-90 mL/kg/hr 分次給予',
  ],
  body: `# 過敏性休克 (Anaphylaxis)

## 一、病理機制 (Pathophysiology)



### 概述
過敏性休克是 Type I 過敏反應的最嚴重形式，由 IgE 介導的肥大細胞與嗜鹼性球大量脫顆粒引起。組織胺、白三烯、前列腺素等介質大量釋放，導致血管通透性增加、平滑肌痙攣與心血管衰竭。犬貓因標的器官不同，臨床表現差異極大。

### 初步評估
1. ABCDE 快速評估——重點在 B（呼吸道）與 C（循環）
2. 建立靜脈通路（至少一條大口徑留置針）
3. 快速問診：近期疫苗/藥物/新食物暴露史
4. 基礎監測：血壓、SpO2、ECG

### 緊急處置
### 第一線（立即）
| 藥物 | 劑量 | 途徑 | 說明 |
|------|------|------|------|
| [藥物:Epinephrine] | 0.01 mg/kg | IM（大腿外側）| 首選，可每 5-15 分鐘重複 |
| [藥物:Epinephrine] | 0.01 mg/kg | slow IV | 嚴重休克/IM 無效時 |
| 晶體液（LRS/0.9% NaCl） | 犬 20-30 mL/kg bolus | IV | 快速容量復甦，可重複 |

### 第二線（穩定後）
| 藥物 | 劑量 | 說明 |
|------|------|------|
| [藥物:Diphenhydramine] | 1-2 mg/kg IM/IV | H1 阻斷劑 |
| [藥物:Famotidine] | 0.5-1 mg/kg IV | H2 阻斷劑 |
| [藥物:Dexamethasone SP] | 0.1-0.2 mg/kg IV | 預防二相性反應 |
| [藥物:Terbutaline] | 0.01 mg/kg SC/IM | 貓支氣管痙攣 |

### 後續管理
- ICU 監測至少 24-48 小時（二相性反應風險）
- 持續血壓監測，必要時升壓劑（[藥物:Dopamine] 或 [藥物:Norepinephrine] CRI）
- 監測 PCV/TP（血管通透性增加致血液濃縮後稀釋）
- 評估凝血功能（DIC 風險）
- 出院時記錄觸發物質於病歷並告知飼主

## 二、臨床表現與診斷 (Clinical Signs & Diagnosis)

### 臨床表現
### 犬
- **超急性（分鐘內）**：急性嘔吐、大量流涎、焦躁不安
- **急性（30 分鐘內）**：血便（肝靜脈痙攣致腸黏膜充血）、腹痛、虛脫
- **循環衰竭**：黏膜蒼白至灰白、CRT 延長、脈搏微弱、低血壓
- **皮膚**：蕁麻疹、血管性水腫（臉部/耳朵腫脹）——可為唯一表現或伴隨全身症狀

### 貓
- **呼吸道為主**：急性呼吸窘迫、喘鳴、支氣管痙攣
- **皮膚**：頭頸部劇烈搔癢、耳朵紅腫
- **消化道**：嘔吐、流涎（較犬少見血便）
- **心血管**：低血壓、心搏過緩（與犬的心搏過速不同）

## 三、治療策略 (Treatment)

## 四、併發症與監控 (Complications & Monitoring)

## 五、預後與預後因子 (Prognosis)

### 預後
早期辨識並給予 Epinephrine 者預後良好（存活率 > 90%）。延遲治療或合併 DIC/MODS 者預後不佳。二相性反應發生率約 5-20%。

[圖片:犬貓過敏性休克緊急處置流程圖]

## 六、人醫借鑒 (Translational Insights)

| 人醫工具/概念 | 獸醫應用潛力 | 現況 |
|-------------|-------------|------|
| 體外膜氧合（ECMO） | 犬嚴重急性呼吸窘迫/心因性休克 | 人醫成熟技術，獸醫因成本極少使用 |
| 毒物即時檢測（POC toxicology） | 犬中毒即時確認毒物種類 | 人醫快速檢測套組，獸醫可用性有限 |
| 治療性低溫（targeted temperature management） | 犬心停復甦後腦保護 | 人醫已為標準，獸醫初步研究 |
| 血漿交換（plasmapheresis） | 犬嚴重免疫介導疾病急救 | 少數獸醫轉介中心可執行 |

## 七、臨床爭議與知識空缺 (Controversies & Knowledge Gaps)

| 爭議議題 | 現況 | Evidence Level |
|---------|------|---------------|
| 犬 GDV 術後心律不整的治療閾值 | Lidocaine 何時開始？VPC rate >20/min vs 出現 R-on-T 的爭議 | Level III |
| 犬中毒洗胃 vs 催吐 vs 活性碳的適用時機 | 催吐時間窗（2 小時）、活性碳對特定毒物效果的個別化決策 | Level II |
| 犬急性腎損傷的體液治療量 | 傳統大量輸液 vs 限制性輸液策略——獸醫缺乏比較數據 | Level III |
| 犬蛇咬傷抗毒血清的劑量與重複給藥標準 | 台灣蛇種特異性數據不足，多參考國際經驗 | Level III |`,
  clinical_pearl: 'Epinephrine 是過敏性休克唯一的一線救命藥物——沒有任何替代品。IM 注射（大腿外側肌肉）比 SC 吸收更快更可靠。不要因為害怕副作用而猶豫給藥，延遲給予 Epinephrine 是過敏性休克死亡最常見的可避免原因。抗組織胺和類固醇只是輔助，絕不能取代 Epinephrine。',
  common_mistakes: [
    '以抗組織胺（Diphenhydramine）或類固醇取代 Epinephrine 作為第一線治療',
    '將 Epinephrine 劑量搞混：過敏性休克用 0.01 mg/kg（1:1000 IM），非 CPR 的 0.1 mg/kg',
    '觀察期太短——未監測至少 24 小時就出院，忽略二相性反應風險',
    '僅看到蕁麻疹就認為只是輕度過敏，未評估全身血流動力學狀態',
    '忽略犬的消化道症狀（急性嘔吐血便）作為過敏性休克的早期徵象',
  ],
  disease_data: {
    signalment: '犬貓均可發生，無明確品種與性別偏好。有過敏體質（atopy）或既往過敏反應史者風險較高。常見於疫苗接種後、藥物注射後、或昆蟲叮咬後。',
    etiology: '由 IgE 介導的 Type I 過敏反應。常見觸發因子：疫苗（尤其含佐劑疫苗）、抗生素（Penicillin、Cephalosporin）、NSAIDs、造影劑、昆蟲叮咬（蜜蜂/胡蜂）、食物蛋白、血液製品。',
    pathogenesis: '過敏原與肥大細胞/嗜鹼性球表面 IgE 交聯結合 → 大量脫顆粒 → 組織胺、白三烯、前列腺素、PAF 大量釋放 → 犬：肝靜脈痙攣→門脈高壓→內臟充血→有效循環血量驟降→分布性休克；貓：支氣管平滑肌痙攣→氣道阻塞→呼吸衰竭 + 肺血管通透性增加→非心因性肺水腫',
    clinical_signs: [
      { sign: '急性嘔吐（犬）', category: 'primary', description: '暴露後數分鐘內發生，常為最早表現' },
      { sign: '血便（犬）', category: 'primary', description: '肝靜脈痙攣致腸黏膜充血壞死' },
      { sign: '低血壓/虛脫', category: 'primary', description: '分布性休克，黏膜蒼白至灰白，CRT 延長' },
      { sign: '急性呼吸窘迫（貓）', category: 'primary', description: '支氣管痙攣與肺水腫，開口呼吸、喘鳴' },
      { sign: '蕁麻疹/血管性水腫', category: 'secondary', description: '皮膚紅疹、臉部/耳朵腫脹，可為唯一表現' },
      { sign: '心搏過速（犬）/心搏過緩（貓）', category: 'secondary', description: '犬代償性心搏過速；貓可能出現迷走神經介導的心搏過緩' },
    ],
    staging: null,
    differential_diagnosis: [
      { condition: '血管迷走神經性暈厥', key_differentiator: '通常無蕁麻疹/血管性水腫，心搏過緩明顯，平躺後快速恢復' },
      { condition: '敗血性休克', key_differentiator: '發病較慢（數小時），常伴發燒、白血球異常，無明確過敏原暴露' },
      { condition: '氣喘急性發作（貓）', key_differentiator: '慢性病史，無過敏原急性暴露，無全身性血管症狀' },
      { condition: '急性胰臟炎', key_differentiator: '嘔吐腹痛但無低血壓/蕁麻疹，cPLI 升高' },
      { condition: '腸扭轉/GDV', key_differentiator: '腹部膨脹、非生產性嘔吐，X 光可確認' },
    ],
    diagnostic_workup: '1. ABCDE 初級評估 → 2. 建立 IV 通路與血壓監測 → 3. 快速問診（暴露史）→ 4. 基礎血檢（PCV/TP、血糖、電解質）→ 5. 血氣分析 → 6. ECG → 7. 穩定後：CBC/生化/凝血功能評估 DIC 風險',
    treatment_protocol: '【Primary care — 穩定/初步處置】Epinephrine 0.01 mg/kg IM 為第一線，同時建立 IV 通路快速晶體液復甦（犬 20-30 mL/kg bolus），氧氣支持。穩定後給予 Diphenhydramine 1-2 mg/kg IM + Famotidine 0.5-1 mg/kg IV + Dexamethasone SP 0.1-0.2 mg/kg IV。【Specialty care — ICU 管理】持續血壓監測與升壓劑支持（Dopamine 5-10 mcg/kg/min 或 Norepinephrine 0.1-1 mcg/kg/min CRI），連續 ECG 監測，監測凝血功能與 DIC 指標，24-48 小時觀察二相性反應。貓：加 Terbutaline 0.01 mg/kg SC 解除支氣管痙攣。',
    prognosis: '早期辨識並及時給予 Epinephrine 者存活率 > 90%。合併 DIC 或 MODS 者預後較差（存活率下降至 50-60%）。二相性反應發生率約 5-20%，通常在 4-72 小時內發生。既往有嚴重過敏反應者復發風險高。',
    monitoring: '急性期：每 15-30 分鐘監測血壓、心率、SpO2、體溫。每 4-6 小時追蹤 PCV/TP、血糖。12-24 小時追蹤凝血功能。觀察至少 24-48 小時以排除二相性反應。出院後 7 天回診評估。',
    owner_communication: '過敏性休克是一種危及生命的急性過敏反應，需要立即治療。目前已穩定但需住院觀察至少 24-48 小時。務必記錄已知觸發物質，未來就醫時主動告知醫師。再次暴露可能引發更嚴重反應。疫苗接種後建議在院觀察 15-30 分鐘。',
  },
  diagnostic_data: null,
  procedure_data: null,
  visual_placeholders: [
    { position: '臨床表現段落後', type: 'comparison_table', description: '犬 vs 貓過敏性休克臨床表現比較圖' },
    { position: '緊急處置段落後', type: 'flowchart', description: '過敏性休克急救流程圖（含 Epinephrine 劑量速算表）' },
  ],
  interactive_placeholders: [
    { position: '藥物表格後', type: 'drug_calculator', description: 'Epinephrine 劑量計算器（輸入體重與濃度自動計算）' },
  ],
  drug_api_links: ['Epinephrine', 'Diphenhydramine', 'Famotidine', 'Dexamethasone', 'Terbutaline', 'Dopamine', 'Norepinephrine'],
  references: [
    { type: 'textbook', citation: 'Silverstein DC, Hopper K. Small Animal Critical Care Medicine, 3rd ed. Elsevier, 2022. Chapter: Anaphylaxis.', relevance: 'ECC 核心教材過敏性休克章節' },
    { type: 'journal', citation: 'Shmuel DL, Cortes Y. Anaphylaxis in dogs and cats. JVECC. 2013;23(4):377-394.', relevance: '犬貓過敏性休克綜合回顧' },
    { type: 'journal', citation: 'Quantz JE, Miles MS, Reed AL, et al. Elevation of alanine transaminase and gallbladder wall abnormalities as biomarkers of anaphylaxis in canine hypersensitivity patients. JVECC. 2009;19(6):536-544.', relevance: '犬過敏性休克的肝臟生物標記' },
    { type: 'guideline', citation: 'WSAVA Vaccination Guidelines Group. Guidelines for the vaccination of dogs and cats. J Small Anim Pract. 2016;57(1):E1-E45.', relevance: '疫苗相關過敏反應預防指引' },
  ],
  is_current: true,
  created_at: now,
};

/** ECC-L3-002 糖尿病酮酸血症 — 疾病型 */
const contentDKA: NodeContent = {
  id: 'CONTENT-ECC-L3-002',
  node_id: 'ECC-L3-002',
  version: 1,
  summary: '糖尿病酮酸血症（DKA）是糖尿病最嚴重的急性併發症，以高血糖、代謝性酸中毒、酮體升高與嚴重脫水為特徵。犬貓均可發生，常由感染、胰臟炎或飼主未規律給予胰島素等誘因觸發。治療四大支柱為：靜脈輸液復甦、Regular insulin 持續輸注、電解質矯正（尤其鉀離子）、與誘因治療。血糖下降速度不宜超過 50-75 mg/dL/hr，過快可致腦水腫。',
  learning_objectives: [
    '描述 DKA 的病理生理機轉與代謝失衡',
    '辨識 DKA 的臨床表現並與單純糖尿病失控區分',
    '制定 DKA 的靜脈輸液與胰島素治療計畫',
    '正確監測與矯正 DKA 病患的電解質異常（K+、Na+、PO4）',
    '識別與處理 DKA 的常見誘因與併發症',
  ],
  key_points: [
    'DKA 三要素：高血糖（> 250 mg/dL）+ 代謝性酸中毒（pH < 7.3 或 HCO3 < 15）+ 酮血症/酮尿症',
    '輸液復甦為最優先——先糾正脫水與灌流不足，再啟動胰島素',
    'Regular insulin CRI 起始劑量：犬貓 1.1-2.2 U/kg/day（0.05-0.1 U/kg/hr）',
    '血糖目標下降速度：50-75 mg/dL/hr，過快可導致腦水腫',
    '低鉀血症是 DKA 治療中最危險的電解質異常——胰島素會將 K+ 驅入細胞內',
    '當血糖降至 250 mg/dL 時，輸液改為含 2.5-5% Dextrose 並降低 insulin 速率',
    '常見誘因：感染（UTI、肺炎）、胰臟炎、腎上腺皮質功能亢進（犬）、甲狀腺功能亢進（貓）',
  ],
  body: `# 糖尿病酮酸血症 (DKA)

## 一、病理機制 (Pathophysiology)



### 概述
DKA 是胰島素絕對或相對不足導致的代謝急症。缺乏胰島素使葡萄糖無法進入細胞，身體轉而分解脂肪產生酮體（beta-hydroxybutyrate、acetoacetate、acetone）作為替代能源，大量酮體累積導致代謝性酸中毒。同時高血糖引起的滲透性利尿導致嚴重脫水與電解質流失。

### 初步評估
1. ABCDE 評估——重點在 C（脫水/灌流）與 D（意識狀態）
2. 建立 IV 通路，採血進行基礎血檢
3. 即時血糖 + 酮體檢測（handheld ketone meter 測 beta-hydroxybutyrate）
4. 血氣分析（pH、HCO3、anion gap）
5. 電解質（Na+、K+、Cl-、PO4）
6. 腹部超音波評估胰臟炎

### 緊急處置
### Phase 1：輸液復甦（前 1-6 小時）
- 0.9% NaCl 為首選（避免含 Dextrose 的溶液）
- 脫水矯正：估計脫水百分比 × 體重(kg) × 1000 = 缺損量(mL)
- 前 6 小時補充 50% 缺損量 + 維持量
- 輸液本身可降低血糖 50-75 mg/dL（稀釋效應 + 改善腎灌流增加糖排泄）

### Phase 2：胰島素治療
- **啟動時機**：輸液開始 1-2 小時後，確認 K+ ≥ 3.5 mEq/L
- **Regular insulin CRI**：0.05-0.1 U/kg/hr（犬貓）
- 血糖降至 250 mg/dL 時：輸液改含 2.5-5% Dextrose，insulin 降至 0.025-0.05 U/kg/hr
- **目標**：血糖 150-250 mg/dL，逐步過渡至皮下 insulin

### Phase 3：電解質矯正
| 血鉀 (mEq/L) | KCl 補充 (mEq/L 輸液) | 最大輸注速率 |
|---|---|---|
| 3.5-5.0 | 20 mEq/L | 常規速率 |
| 3.0-3.5 | 30 mEq/L | 常規速率 |
| 2.5-3.0 | 40 mEq/L | 18 mL/kg/hr |
| 2.0-2.5 | 60 mEq/L | 12 mL/kg/hr |
| < 2.0 | 80 mEq/L | 6 mL/kg/hr |

- **磷**：DKA 常伴低磷血症，<1.5 mg/dL 時補充 KPO4 0.01-0.06 mmol/kg/hr

### 後續管理
- 每 1-2 小時監測血糖，每 4-6 小時監測電解質
- 積極尋找並治療誘因（尿液培養、cPLI/fPLI、影像學）
- 嘔吐控制：[藥物:Maropitant] 1 mg/kg IV SID
- 酸中毒嚴重（pH < 6.9）時才考慮 NaHCO3 補充
- 開始進食後過渡至皮下 insulin（Lente/Glargine）

## 二、臨床表現與診斷 (Clinical Signs & Diagnosis)

### 臨床表現
- **多飲多尿加劇**：滲透性利尿
- **嘔吐與食慾廢絕**：酮體刺激催吐中樞
- **脫水**：皮膚彈性下降、眼窩凹陷、CRT 延長
- **虛弱/嗜睡**：代謝性酸中毒與電解質異常
- **Kussmaul 呼吸**：深大呼吸，代償性呼吸性鹼中毒
- **丙酮味呼吸**：並非所有病例都能察覺
- **腹痛**：常與併發胰臟炎相關

## 三、治療策略 (Treatment)

## 四、併發症與監控 (Complications & Monitoring)

## 五、預後與預後因子 (Prognosis)

### 預後
整體存活率約 70%（犬）至 65%（貓）。預後不良因子：嚴重低磷血症、併發胰臟炎、DIC、MODS。首次發作 DKA 的糖尿病犬貓，穩定後需建立長期胰島素管理計畫。

[圖片:DKA 治療流程圖——四大支柱]

## 六、人醫借鑒 (Translational Insights)

| 人醫工具/概念 | 獸醫應用潛力 | 現況 |
|-------------|-------------|------|
| 體外膜氧合（ECMO） | 犬嚴重急性呼吸窘迫/心因性休克 | 人醫成熟技術，獸醫因成本極少使用 |
| 毒物即時檢測（POC toxicology） | 犬中毒即時確認毒物種類 | 人醫快速檢測套組，獸醫可用性有限 |
| 治療性低溫（targeted temperature management） | 犬心停復甦後腦保護 | 人醫已為標準，獸醫初步研究 |
| 血漿交換（plasmapheresis） | 犬嚴重免疫介導疾病急救 | 少數獸醫轉介中心可執行 |

## 七、臨床爭議與知識空缺 (Controversies & Knowledge Gaps)

| 爭議議題 | 現況 | Evidence Level |
|---------|------|---------------|
| 犬 GDV 術後心律不整的治療閾值 | Lidocaine 何時開始？VPC rate >20/min vs 出現 R-on-T 的爭議 | Level III |
| 犬中毒洗胃 vs 催吐 vs 活性碳的適用時機 | 催吐時間窗（2 小時）、活性碳對特定毒物效果的個別化決策 | Level II |
| 犬急性腎損傷的體液治療量 | 傳統大量輸液 vs 限制性輸液策略——獸醫缺乏比較數據 | Level III |
| 犬蛇咬傷抗毒血清的劑量與重複給藥標準 | 台灣蛇種特異性數據不足，多參考國際經驗 | Level III |`,
  clinical_pearl: 'DKA 治療中最致命的陷阱是低鉀血症。即使入院時血鉀正常甚至偏高（酸中毒將 K+ 移至細胞外），體內總鉀量其實嚴重缺乏。一旦開始胰島素治療，K+ 被驅入細胞內，血鉀可能在 1-2 小時內急劇下降至致命水平。規則：在 K+ < 3.5 時不要啟動 insulin；啟動後前 6 小時每 2 小時檢測一次 K+。',
  common_mistakes: [
    '急於啟動胰島素而忽略先矯正脫水與低鉀——insulin 在低灌流下效果差且加重低鉀',
    '血糖下降速度過快（> 75 mg/dL/hr），未及時加 Dextrose 至輸液中',
    '使用 Glargine/Detemir 等長效 insulin 治療急性 DKA（應用 Regular insulin CRI）',
    '忽略尋找 DKA 誘因，僅處理代謝失衡而未治療根本原因（如隱匿性 UTI）',
    '以 NaHCO3 積極矯正酸中毒——大部分情況輸液復甦即可改善，NaHCO3 可致矛盾性 CNS 酸中毒',
  ],
  disease_data: {
    signalment: '犬：中老年（平均 8-9 歲），母犬略多。貓：中老年（平均 9-11 歲），公貓肥胖者風險較高。多數為已知糖尿病患控制不佳，約 20-40% 為首次以 DKA 就診確診糖尿病。',
    etiology: '胰島素絕對不足（未診斷/未治療的糖尿病）或相對不足（併發疾病增加胰島素抗性）。常見誘因：感染（UTI 最常見）、胰臟炎、腎上腺皮質功能亢進（犬）、甲狀腺功能亢進（貓）、飼主用藥不規律、藥物（glucocorticoids、progestins）。',
    pathogenesis: '胰島素不足 → 葡萄糖無法進入細胞 → 高血糖 → 滲透性利尿 → 脫水與電解質流失。同時脂肪分解加速 → 游離脂肪酸至肝臟 → beta-oxidation → 酮體大量生成（beta-hydroxybutyrate、acetoacetate、acetone）→ 代謝性酸中毒（高 anion gap）。反調節荷爾蒙（glucagon、cortisol、catecholamines）進一步加劇高血糖與脂肪分解。',
    clinical_signs: [
      { sign: '多飲多尿加劇', category: 'primary', description: '高血糖滲透性利尿' },
      { sign: '嘔吐/食慾廢絕', category: 'primary', description: '酮體刺激催吐中樞、代謝性酸中毒' },
      { sign: '脫水', category: 'primary', description: '皮膚彈性下降、眼窩凹陷、CRT 延長，可達 8-12% 脫水' },
      { sign: '虛弱/嗜睡', category: 'primary', description: '代謝性酸中毒與電解質異常' },
      { sign: 'Kussmaul 呼吸', category: 'secondary', description: '深大呼吸，呼吸代償酸中毒' },
      { sign: '腹痛', category: 'secondary', description: '常與併發胰臟炎相關' },
    ],
    staging: null,
    differential_diagnosis: [
      { condition: '高血糖高滲透壓非酮症症候群（HHS）', key_differentiator: '血糖極高（> 600 mg/dL）但無顯著酮體與酸中毒，滲透壓極高' },
      { condition: '飢餓性酮症', key_differentiator: '血糖正常或偏低，酮體輕度升高，無嚴重脫水' },
      { condition: '急性胰臟炎（非DKA）', key_differentiator: '血糖正常或輕度升高，無酮體，cPLI/fPLI 升高' },
      { condition: '腎上腺危象（Addisonian crisis）', key_differentiator: '低血糖、低鈉高鉀、嗜酸球增多，ACTH 刺激試驗異常' },
      { condition: '尿毒症', key_differentiator: '嘔吐脫水但 BUN/Cre 顯著升高，血糖正常' },
    ],
    diagnostic_workup: '1. 即時血糖 + 尿液試紙（酮體）→ 2. Handheld beta-hydroxybutyrate meter → 3. 血氣分析（pH、HCO3、anion gap）→ 4. 完整電解質（Na+、K+、Cl-、PO4、Mg2+）→ 5. CBC + 生化全套（BUN/Cre、肝指數、cPLI/fPLI）→ 6. 尿液分析 + 培養 → 7. 腹部超音波（胰臟、泌尿道）',
    treatment_protocol: '【Primary care — 穩定/初步處置】建立 IV，0.9% NaCl 輸液復甦矯正脫水（前 6 小時 50% 缺損量 + 維持量）。確認 K+ ≥ 3.5 後啟動 Regular insulin CRI 0.05-0.1 U/kg/hr。鉀離子依血鉀滑尺補充。血糖 q1-2h、電解質 q4-6h 監測。Maropitant 1 mg/kg IV 止吐。【Specialty care — ICU 管理】血糖達 250 mg/dL 時加 2.5-5% Dextrose 至輸液並降 insulin 速率。磷 < 1.5 mg/dL 時 KPO4 0.01-0.06 mmol/kg/hr 補充。pH < 6.9 才考慮 NaHCO3。持續監測至酸中毒緩解（pH > 7.3、HCO3 > 15）、酮體清除。穩定進食後過渡至皮下長效 insulin。積極治療誘因。',
    prognosis: '整體住院存活率：犬約 70%、貓約 65%。預後不良因子包括：嚴重低磷血症（< 1.0 mg/dL）、併發急性胰臟炎、DIC、高齡、併發腎病。首次 DKA 犬貓穩定後需建立長期 insulin 管理計畫。貓有約 25-30% 機率達到糖尿病緩解。',
    monitoring: '急性期（前 24-48 小時）：血糖 q1-2h，電解質（K+、Na+、PO4）q4-6h，血氣 q6-8h，尿量 q1h（目標 > 1 mL/kg/hr）。穩定期：血糖 q4-6h，電解質 q12h。過渡至皮下 insulin 後建立血糖曲線。出院後 1 週回診，之後每 2-4 週調整 insulin 至穩定。',
    owner_communication: 'DKA 是糖尿病的嚴重併發症，需要密集的住院治療。治療重點是矯正脫水、控制血糖、和找出誘發原因。住院期間需頻繁抽血監測。穩定後需討論長期胰島素管理計畫。規律給藥、定期回診、居家血糖監測可有效預防 DKA 復發。如出現嘔吐、食慾下降、精神變差應立即就醫。',
  },
  diagnostic_data: null,
  procedure_data: null,
  visual_placeholders: [
    { position: '病理機轉段落後', type: 'flowchart', description: 'DKA 病理生理機轉流程圖' },
    { position: '電解質矯正表格後', type: 'comparison_table', description: '鉀離子補充滑尺速查表' },
    { position: '治療段落後', type: 'flowchart', description: 'DKA 治療四大支柱流程圖' },
  ],
  interactive_placeholders: [
    { position: 'Phase 1 段落後', type: 'fluid_calculator', description: 'DKA 輸液量計算器（輸入體重與脫水百分比）' },
  ],
  drug_api_links: ['Regular Insulin', 'Maropitant', 'Potassium Chloride'],
  references: [
    { type: 'textbook', citation: 'Silverstein DC, Hopper K. Small Animal Critical Care Medicine, 3rd ed. Elsevier, 2022. Chapter: Diabetic Ketoacidosis.', relevance: 'DKA 急診處置核心教材' },
    { type: 'journal', citation: 'Hume DZ, Drobatz KJ, Hess RS. Outcome of dogs with diabetic ketoacidosis: 127 dogs (1993-2003). J Vet Intern Med. 2006;20(3):547-555.', relevance: '犬 DKA 大型回顧性預後研究' },
    { type: 'journal', citation: 'Cooper RL, Drobatz KJ, Lennon EM, et al. Retrospective evaluation of risk factors and outcome predictors in cats with diabetic ketoacidosis (1997-2013). JVECC. 2015;25(2):263-272.', relevance: '貓 DKA 預後因子研究' },
    { type: 'guideline', citation: 'Behrend E, Holford A, Lathan P, et al. AAHA diabetes management guidelines for dogs and cats. JAAHA. 2018;54(1):1-21.', relevance: 'AAHA 糖尿病管理指引' },
  ],
  is_current: true,
  created_at: now,
};

/** ECC-L3-003 中暑 — 疾病型 */
const contentHeatStroke: NodeContent = {
  id: 'CONTENT-ECC-L3-003',
  node_id: 'ECC-L3-003',
  version: 1,
  summary: '中暑（Heat Stroke）是體溫調節失衡導致核心體溫升高超過 41 C（106 F）並伴隨中樞神經功能障礙的急症。犬遠比貓常見，短頭種、肥胖犬與工作犬為高風險族群。台灣亞熱帶氣候使中暑全年可見，夏季更為頻繁。治療核心為積極降溫（目標 30-60 分鐘內降至 39.5 C 即停止）並防治 DIC、AKI、ARDS 等續發性器官損傷。到院時體溫 > 41.7 C 與 DIC 為最強預後不良因子。',
  learning_objectives: [
    '描述中暑的病理生理機轉與熱傷害的級聯效應',
    '辨識高風險犬種並向飼主提供預防建議',
    '正確執行積極降溫流程並掌握停止降溫的時機',
    '預防與早期辨識中暑續發的 DIC、AKI、ARDS',
    '制定中暑病患的 72 小時 ICU 監測計畫',
  ],
  key_points: [
    '核心體溫 > 41 C（106 F）+ CNS 功能障礙 = 中暑定義',
    '降溫方法：室溫水淋濕全身 + 電風扇吹拂（蒸發散熱最有效），避免冰水（致周邊血管收縮反而不利散熱）',
    '降溫至 39.4-39.5 C 即停止主動降溫——過度降溫致低體溫同樣危險',
    '到院體溫 > 41.7 C 的犬死亡率約 50%，DIC 發生率高達 40-50%',
    '短頭種（法鬥、巴哥、英鬥）風險為非短頭種的 2-3 倍',
    '台灣夏季最常見場景：車內密閉空間、正午散步、短頭種室外活動',
    'DIC 是中暑最常見死因——入院即需評估凝血功能（PT/aPTT/D-dimer/fibrinogen）',
  ],
  body: `# 中暑 (Heat Stroke)

## 一、病理機制 (Pathophysiology)



### 概述
中暑是一種危及生命的急症，當產熱超過散熱能力時，核心體溫持續上升導致直接熱損傷與全身性發炎反應。犬主要透過喘氣（panting）散熱，不像人類有全身性汗腺，因此對高溫環境的耐受力較差。台灣高溫高濕的環境使散熱效率進一步降低。

### 初步評估
1. 確認核心體溫（肛溫）——如超過溫度計上限（> 42.2 C），記錄為 > 42.2 C
2. ABCDE 評估——特別注意 D（神經狀態）
3. 立即開始降溫（不要等完成評估才降溫）
4. 建立 IV，採血進行基礎血檢 + 凝血功能

### 緊急處置
### 積極降溫（最優先）
- **室溫水淋濕全身**（非冰水）+ 電風扇吹拂
- 酒精擦拭腳掌肉墊（輔助）
- 室溫 IV 輸液（非冰冷輸液）
- **停止時機**：肛溫降至 39.4-39.5 C 即停止所有主動降溫
- 降溫目標：30-60 分鐘內達標

### 輸液復甦
- 晶體液（LRS/0.9% NaCl）shock rate 起始：犬 20-30 mL/kg bolus
- 評估灌流後調整——避免過度輸液加重肺水腫風險

### DIC 預防與治療
- 入院即評估：PT、aPTT、fibrinogen、D-dimer、platelet count
- 新鮮冷凍血漿（FFP）10-15 mL/kg IV：補充凝血因子與抗凝血酶
- 嚴重 DIC 考慮全血輸血

### 後續管理
- ICU 監測至少 48-72 小時
- 每 4-6 小時體溫、凝血功能、腎功能、肝指數追蹤
- 尿量監測（目標 > 1-2 mL/kg/hr）
- GI 保護：[藥物:Omeprazole] 1 mg/kg IV BID + [藥物:Sucralfate] 0.5-1 g PO TID
- 癲癇控制：[藥物:Diazepam] 0.5-1 mg/kg IV PRN → [藥物:Levetiracetam] 30-60 mg/kg IV

## 二、臨床表現與診斷 (Clinical Signs & Diagnosis)

### 臨床表現
### 早期（體溫 40-41 C）
- 過度喘氣、流涎、焦躁不安
- 黏膜充血（鮮紅色）、CRT 加速（< 1 秒）
- 心搏過速

### 進展期（體溫 > 41 C）
- CNS 症狀：步態不穩、定向力障礙、癲癇、昏迷
- 嘔吐（可含血）、血便
- 黏膜由鮮紅轉為灰白/泥土色（循環衰竭）
- 瘀斑、出血點（DIC 徵象）

### 器官損傷期（24-72 小時）
- DIC：瘀斑、出血不止、PT/aPTT 延長
- AKI：少尿/無尿、BUN/Cre 急升
- ARDS：進行性呼吸窘迫
- 肝損傷：ALT/AST 顯著升高

## 三、治療策略 (Treatment)

## 四、併發症與監控 (Complications & Monitoring)

## 五、預後與預後因子 (Prognosis)

### 預後
整體死亡率約 50%（到院體溫 > 41.7 C）。預後不良因子：DIC、到院體溫越高、CNS 症狀持續、AKI（oliguria/anuria）、延遲就醫（> 90 分鐘）。積極降溫開始越早預後越好——飼主在家先以水管淋水可顯著改善存活率。

[圖片:中暑降溫流程與器官損傷時間軸]

## 六、人醫借鑒 (Translational Insights)

| 人醫工具/概念 | 獸醫應用潛力 | 現況 |
|-------------|-------------|------|
| 體外膜氧合（ECMO） | 犬嚴重急性呼吸窘迫/心因性休克 | 人醫成熟技術，獸醫因成本極少使用 |
| 毒物即時檢測（POC toxicology） | 犬中毒即時確認毒物種類 | 人醫快速檢測套組，獸醫可用性有限 |
| 治療性低溫（targeted temperature management） | 犬心停復甦後腦保護 | 人醫已為標準，獸醫初步研究 |
| 血漿交換（plasmapheresis） | 犬嚴重免疫介導疾病急救 | 少數獸醫轉介中心可執行 |

## 七、臨床爭議與知識空缺 (Controversies & Knowledge Gaps)

| 爭議議題 | 現況 | Evidence Level |
|---------|------|---------------|
| 犬 GDV 術後心律不整的治療閾值 | Lidocaine 何時開始？VPC rate >20/min vs 出現 R-on-T 的爭議 | Level III |
| 犬中毒洗胃 vs 催吐 vs 活性碳的適用時機 | 催吐時間窗（2 小時）、活性碳對特定毒物效果的個別化決策 | Level II |
| 犬急性腎損傷的體液治療量 | 傳統大量輸液 vs 限制性輸液策略——獸醫缺乏比較數據 | Level III |
| 犬蛇咬傷抗毒血清的劑量與重複給藥標準 | 台灣蛇種特異性數據不足，多參考國際經驗 | Level III |`,
  clinical_pearl: '中暑降溫最常犯的錯誤是使用冰水或冰袋——這會導致周邊血管強烈收縮，反而阻礙散熱並將熱「封鎖」在核心。正確做法是室溫水淋濕 + 風扇吹拂（利用蒸發散熱原理）。另一個關鍵是「知道何時停」：降至 39.5 C 就停止，因為體溫還會慣性下降（thermal afterdrop），過度降溫至低體溫同樣致命。',
  common_mistakes: [
    '使用冰水或冰袋降溫——導致周邊血管收縮反而妨礙散熱',
    '降溫不夠積極或降溫過頭（未在 39.5 C 停止，導致醫源性低體溫）',
    '體溫降至正常就認為安全出院——DIC/AKI 常在 24-72 小時後才表現',
    '忽略入院時凝血功能評估，延誤 DIC 診斷',
    '忽略飼主到院前降溫的重要性——未教育飼主在家先用水管淋水',
  ],
  disease_data: {
    signalment: '犬遠比貓常見。高風險品種：短頭種（法國鬥牛犬、巴哥、英國鬥牛犬、波士頓梗）、大型/巨型犬、雙層毛犬（哈士奇、薩摩耶）、工作犬/運動犬。肥胖、高齡、喉頭麻痺犬風險更高。台灣夏季（5-10 月）為高峰期。',
    etiology: '環境性中暑（最常見）：密閉車內、高溫高濕環境戶外活動。運動性中暑：過度運動/訓練。醫源性：麻醉中保溫過度、烘箱乾燥。犬因僅靠喘氣與少量腳掌汗腺散熱，高濕環境更無法有效散熱。',
    pathogenesis: '產熱 > 散熱 → 核心體溫持續上升 → 直接熱損傷（蛋白質變性、細胞膜完整性破壞）→ 腸道屏障功能喪失 → 細菌/內毒素移位 → SIRS 活化 → 內皮損傷 → DIC → 多重器官衰竭（腎、肝、腦、心、肺）。GI 黏膜屏障破壞與 DIC 形成「惡性循環」加速器官損傷。',
    clinical_signs: [
      { sign: '過度喘氣/流涎', category: 'primary', description: '散熱代償反應，呼吸急促且明顯' },
      { sign: '黏膜鮮紅→灰白', category: 'primary', description: '早期充血擴張、晚期循環衰竭' },
      { sign: 'CNS 症狀', category: 'primary', description: '步態不穩、癲癇、昏迷——定義中暑的必要條件' },
      { sign: '嘔吐/血便', category: 'primary', description: 'GI 黏膜熱損傷與缺血' },
      { sign: '瘀斑/出血', category: 'secondary', description: 'DIC 徵象，預後不良指標' },
      { sign: '少尿/無尿', category: 'secondary', description: 'AKI 徵象，24-72 小時後表現' },
    ],
    staging: null,
    differential_diagnosis: [
      { condition: '運動後高體溫（非中暑）', key_differentiator: '體溫 40-41 C 但無 CNS 症狀，休息降溫後快速恢復' },
      { condition: '發燒（感染性）', key_differentiator: '體溫較少超過 41 C，有感染灶，對退燒藥有反應（中暑對 NSAIDs 無效）' },
      { condition: '癲癇重積導致高體溫', key_differentiator: '先有癲癇再體溫上升（vs 中暑先高溫再 CNS 症狀），有癲癇病史' },
      { condition: '惡性高熱', key_differentiator: '麻醉中發生，與揮發性麻醉劑相關，肌肉僵直明顯' },
    ],
    diagnostic_workup: '1. 肛溫測量 → 2. ABCDE + 同時開始降溫 → 3. 建立 IV，採血：CBC、生化全套、凝血功能（PT/aPTT/fibrinogen/D-dimer）、血氣/電解質 → 4. 尿液分析（肌球蛋白尿、管型）→ 5. ECG → 6. 4-6 小時後重複凝血功能與腎/肝指數',
    treatment_protocol: '【Primary care — 穩定/初步處置】立即積極降溫：室溫水淋全身 + 風扇吹拂，降至 39.5 C 停止。建立 IV，晶體液 20-30 mL/kg bolus 評估灌流。採血送檢。GI 保護。轉診至可提供 ICU 監測的醫院。飼主在家先淋水極為重要。【Specialty care — ICU 管理】持續體溫、血壓、尿量監測。凝血功能 q4-6h 追蹤，DIC 給予 FFP 10-15 mL/kg。AKI 管理（輸液支持、利尿劑挑戰）。癲癇控制。48-72 小時密集監測。呼吸支持（ARDS 需正壓通氣）。',
    prognosis: '整體死亡率：到院體溫 > 41.7 C 約 50%；< 41 C 約 < 10%。DIC 發生者死亡率 > 60%。延遲就醫 > 90 分鐘者預後顯著惡化。飼主到院前先降溫者存活率明顯較高。存活者大多數可完全恢復，少數遺留永久性神經損傷。',
    monitoring: '前 6 小時：體溫 q30min（降溫期）→ q1h（穩定後）。血壓、SpO2 持續監測。尿量 q1h（目標 > 1-2 mL/kg/hr）。凝血功能 q4-6h 前 24 小時。BUN/Cre、肝指數 q8-12h。48-72 小時後仍需追蹤腎功能（AKI 可延遲出現）。',
    owner_communication: '中暑是非常嚴重的急症，即使體溫恢復正常，身體內部的器官損傷可能在接下來 2-3 天才完全表現。最擔心的併發症是凝血功能異常（DIC）和腎臟損傷，需要密集住院監測。預防是最好的治療：避免高溫時段外出、絕不將動物留在車內、短頭種需特別注意散熱。如果懷疑中暑，在來醫院路上請先用水管淋濕全身。',
  },
  diagnostic_data: null,
  procedure_data: null,
  visual_placeholders: [
    { position: '降溫處置段落', type: 'flowchart', description: '中暑降溫流程圖（含停止時機）' },
    { position: '器官損傷段落', type: 'timeline', description: '中暑後 0-72 小時器官損傷時間軸' },
  ],
  interactive_placeholders: [],
  drug_api_links: ['Omeprazole', 'Sucralfate', 'Diazepam', 'Levetiracetam'],
  references: [
    { type: 'textbook', citation: 'Silverstein DC, Hopper K. Small Animal Critical Care Medicine, 3rd ed. Elsevier, 2022. Chapter: Heat Stroke.', relevance: 'ECC 核心教材中暑章節' },
    { type: 'journal', citation: 'Bruchim Y, Horowitz M, Aroch I. Pathophysiology of heatstroke in dogs — revisited. Temperature. 2017;4(4):356-370.', relevance: '犬中暑病理生理綜合回顧' },
    { type: 'journal', citation: 'Bruchim Y, Loeb E, Saragusty J, et al. Pathological findings in dogs with fatal heatstroke. J Comp Pathol. 2009;140(2-3):97-104.', relevance: '致死性中暑病理學研究' },
    { type: 'journal', citation: 'Hall EJ, Carter AJ, O\'Neill DG. Incidence and risk factors for heat-related illness (heatstroke) in UK dogs under primary veterinary care in 2016. Sci Rep. 2020;10:9128.', relevance: '犬中暑流行病學與風險因子' },
    { type: 'guideline', citation: 'Bruchim Y, Kelmer E, Cohen A, et al. ACVECC consensus — hemostatic and thermoregulatory management of heatstroke in dogs: clinical practice guidelines. JVECC. 2017;27(3):315-324.', relevance: 'ACVECC 犬中暑止血與體溫管理臨床實務指引' },
  ],
  is_current: true,
  created_at: now,
};

/** ECC-L3-004 貓尿道阻塞 — 疾病型 */
const contentFUO: NodeContent = {
  id: 'CONTENT-ECC-L3-004',
  node_id: 'ECC-L3-004',
  version: 1,
  summary: '貓尿道阻塞（Feline Urethral Obstruction, FUO）是公貓最常見的泌尿道急症，因尿道狹窄處被結石、黏液栓或尿道痙攣阻塞導致無法排尿。未及時處理可在 24-48 小時內因高血鉀引發致命性心律不整與急性腎後性腎衰竭。治療首重穩定心血管（矯正高血鉀）、解除阻塞（尿道導管）與術後監測再阻塞。約 25-40% 的貓會在 6 個月內復發。',
  learning_objectives: [
    '辨識貓尿道阻塞的臨床徵象與高血鉀的心電圖變化',
    '描述高血鉀的緊急處置流程（Calcium gluconate → insulin + dextrose）',
    '正確執行尿道導管放置技術與留置管理',
    '制定阻塞解除後的監測計畫（post-obstructive diuresis）',
    '向飼主說明復發預防策略（飲食、環境、藥物）',
  ],
  key_points: [
    '幾乎只發生在公貓——公貓尿道最窄處（陰莖骨段）直徑僅 0.7 mm',
    '高血鉀是最緊急的致命威脅——K+ > 7.0 mEq/L 可致心跳停止',
    '高血鉀 ECG 變化：T 波高尖 → P 波消失 → QRS 增寬 → sine wave → 心跳停止',
    '緊急高血鉀處置：10% Calcium gluconate 0.5-1.5 mL/kg slow IV（心臟保護，不降鉀）',
    '最常見阻塞物：黏液栓（mucoid plug）> 結石（struvite）> 尿道痙攣',
    '導管解除阻塞後需留置 24-48 小時，監測 post-obstructive diuresis',
    '復發率 25-40%（6 個月內），預防：處方飲食 + 增加飲水 + 環境豐富化 + 減壓',
  ],
  body: `# 貓尿道阻塞 (Feline Urethral Obstruction)

## 一、病理機制 (Pathophysiology)



### 概述
FUO 是公貓的泌尿道急症，因公貓尿道細長且陰莖骨段極窄（約 0.7 mm），容易被結晶/結石、黏液栓或發炎腫脹阻塞。完全阻塞後膀胱持續充盈，壓力逆傳至腎臟導致腎後性氮血症，同時鉀離子無法經腎排泄而積聚，高血鉀為最急性致命威脅。

### 初步評估
1. 觸診膀胱（巨大、緊繃、無法擠壓——切勿用力擠壓以免破裂）
2. 心率評估：心搏過緩（< 120 bpm）高度提示高血鉀
3. 即時血檢：K+、BUN/Cre、血糖、血氣
4. ECG：評估高血鉀心電圖變化
5. 體溫：低體溫提示嚴重代謝失衡

### 緊急處置
### Step 1：穩定心血管（高血鉀處置）— 在解除阻塞前！
| 藥物 | 劑量 | 作用 | 起效時間 |
|------|------|------|---------|
| [藥物:Calcium gluconate] 10% | 0.5-1.5 mL/kg slow IV (5-10 min) | 心肌膜穩定（不降鉀） | 即刻 |
| [藥物:Regular insulin] | 0.25-0.5 U/kg IV | K+ 移入細胞內 | 15-30 分鐘 |
| [藥物:Dextrose] 50% | 1-2 mL/kg IV（稀釋後）| 預防 insulin 低血糖 | 搭配 insulin |
| [藥物:Terbutaline] | 0.01 mg/kg IV/IM | beta-2 驅 K+ 入細胞 | 30 分鐘 |

### Step 2：輸液復甦
- 0.9% NaCl（無鉀配方）為首選，不可用含鉀輸液（LRS）
- Bolus 10-20 mL/kg（貓休克劑量較犬低）

### Step 3：解除阻塞
- 鎮靜/短效麻醉（確認心血管穩定後）
- 無菌技術放置尿道導管（3.5-5 Fr 紅色橡膠管或 Tom Cat catheter）
- 溫生理食鹽水沖洗逆行沖導
- 留置導管以閉合式尿液收集系統固定

### Step 4：引流後膀胱沖洗
- 溫生理食鹽水輕柔沖洗至尿液清澈
- 記錄引流量（常引流出 100-300 mL 尿液）

### 後續管理
- 留置導管 24-48 小時
- 監測尿量（post-obstructive diuresis 可致大量利尿 → 脫水）
- 輸液速率依尿量調整：match urine output + 維持量
- 電解質 q4-6h 直到正常化
- 拔除導管前夾管 4-6 小時觀察自行排尿能力
- 止痛：[藥物:Buprenorphine] 0.02 mg/kg IV/buccal q6-8h
- 膀胱痙攣：[藥物:Prazosin] 0.25-0.5 mg/cat PO q8-12h

## 二、臨床表現與診斷 (Clinical Signs & Diagnosis)

### 臨床表現
- **頻繁進出貓砂盆但無尿液**（飼主常誤認為便秘）
- **排尿姿勢用力**：蹲踞、嚎叫
- **膀胱觸診巨大且堅硬**（如棒球/壘球大小）
- **嘔吐、食慾廢絕、嗜睡**：氮血症與電解質異常
- **低體溫、心搏過緩**：高血鉀的心臟效應
- **虛脫/瀕死**：嚴重高血鉀致心律不整

## 三、治療策略 (Treatment)

## 四、併發症與監控 (Complications & Monitoring)

## 五、預後與預後因子 (Prognosis)

### 預後
首次阻塞住院存活率 > 90%。復發率 25-40%（6 個月內）。反覆阻塞者可考慮會陰尿道造口術（perineal urethrostomy, PU）。預防策略：處方泌尿道飲食、增加飲水量（噴泉飲水器、濕食）、環境豐富化減壓、定期尿液監測。

[圖片:貓尿道導管放置步驟圖]

## 六、人醫借鑒 (Translational Insights)

| 人醫工具/概念 | 獸醫應用潛力 | 現況 |
|-------------|-------------|------|
| 體外膜氧合（ECMO） | 犬嚴重急性呼吸窘迫/心因性休克 | 人醫成熟技術，獸醫因成本極少使用 |
| 毒物即時檢測（POC toxicology） | 犬中毒即時確認毒物種類 | 人醫快速檢測套組，獸醫可用性有限 |
| 治療性低溫（targeted temperature management） | 犬心停復甦後腦保護 | 人醫已為標準，獸醫初步研究 |
| 血漿交換（plasmapheresis） | 犬嚴重免疫介導疾病急救 | 少數獸醫轉介中心可執行 |

## 七、臨床爭議與知識空缺 (Controversies & Knowledge Gaps)

| 爭議議題 | 現況 | Evidence Level |
|---------|------|---------------|
| 犬 GDV 術後心律不整的治療閾值 | Lidocaine 何時開始？VPC rate >20/min vs 出現 R-on-T 的爭議 | Level III |
| 犬中毒洗胃 vs 催吐 vs 活性碳的適用時機 | 催吐時間窗（2 小時）、活性碳對特定毒物效果的個別化決策 | Level II |
| 犬急性腎損傷的體液治療量 | 傳統大量輸液 vs 限制性輸液策略——獸醫缺乏比較數據 | Level III |
| 犬蛇咬傷抗毒血清的劑量與重複給藥標準 | 台灣蛇種特異性數據不足，多參考國際經驗 | Level III |`,
  clinical_pearl: '高血鉀是 FUO 的頭號殺手。不要急著放導管——先看 ECG！如果看到 T 波高尖或 QRS 增寬，先給 Calcium gluconate 穩定心肌，這是「買時間」的藥（效果即刻但僅維持 20-30 分鐘）。然後用 insulin + dextrose 真正降鉀。穩定心血管後再鎮靜放導管，順序搞反可能在麻醉誘導時心跳停止。',
  common_mistakes: [
    '未先處理高血鉀就急著放導管——鎮靜/麻醉時可能心跳停止',
    '使用含鉀輸液（如 LRS）——高血鉀患者禁忌，應用 0.9% NaCl',
    '用力擠壓膀胱試圖排尿——可能導致膀胱破裂',
    '導管拔除太早或未監測 post-obstructive diuresis 導致脫水',
    '出院時未強調復發預防（飲食、飲水、環境管理），導致短期內復發',
  ],
  disease_data: {
    signalment: '幾乎只發生在公貓（99%），因公貓尿道狹長（陰莖骨段直徑僅 0.7 mm）。好發年齡 2-6 歲。室內貓、肥胖貓、低活動量貓風險較高。乾糧為主食者風險增加。',
    etiology: '最常見阻塞物為黏液栓（mucoid plug，約 50-60%），由蛋白質基質、結晶、細胞碎片組成。其次為 struvite 結石/結晶。部分為功能性阻塞（尿道痙攣/水腫）。底層疾病多為貓自發性膀胱炎（FIC, Feline Idiopathic Cystitis）。',
    pathogenesis: '尿道阻塞 → 膀胱壓力升高 → 壓力逆傳至腎盂 → 腎後性氮血症（BUN/Cre 升高）。同時腎臟無法排泄 K+ → 高血鉀 → 心肌去極化異常 → 心律不整 → 心跳停止。代謝性酸中毒進一步加重高血鉀效應（H+ 與 K+ 交換）。阻塞 > 24 小時可致不可逆腎損傷。',
    clinical_signs: [
      { sign: '頻繁進出貓砂盆無尿', category: 'primary', description: '飼主常誤認為便秘' },
      { sign: '排尿用力/嚎叫', category: 'primary', description: '膀胱過度充盈致疼痛' },
      { sign: '膀胱巨大堅硬', category: 'primary', description: '觸診似棒球大小，無法壓縮' },
      { sign: '嘔吐/食慾廢絕', category: 'primary', description: '氮血症與電解質異常引起' },
      { sign: '心搏過緩', category: 'secondary', description: 'K+ > 7.0 時常見，HR < 120 bpm' },
      { sign: '低體溫/虛脫', category: 'secondary', description: '嚴重代謝失衡，瀕死徵象' },
    ],
    staging: null,
    differential_diagnosis: [
      { condition: '非阻塞性貓下泌尿道疾病 (FLUTD)', key_differentiator: '有排尿（可能血尿/頻尿），膀胱小且可壓縮，K+ 正常' },
      { condition: '便秘', key_differentiator: '飼主常混淆——觸診為大腸糞便而非膀胱，可排尿' },
      { condition: '膀胱腫瘤', key_differentiator: '慢性進行性，超音波可見膀胱壁腫塊，好發老年貓' },
      { condition: '神經性膀胱（LMN 膀胱）', key_differentiator: '膀胱大但容易擠壓排尿，常伴後肢神經症狀' },
    ],
    diagnostic_workup: '1. 腹部觸診（膀胱大小與張力）→ 2. 即時血檢（K+、BUN/Cre、Ca2+、血糖、blood gas）→ 3. ECG（高血鉀評估）→ 4. 穩定後：尿液分析 + 沉渣（結晶/細菌）→ 5. 腹部 X 光/超音波（結石、膀胱壁厚度）→ 6. 尿液培養',
    treatment_protocol: '【Primary care — 穩定/初步處置】ECG 監測 + 即時 K+ 檢測。K+ > 7 或 ECG 異常：Calcium gluconate 10% 0.5-1.5 mL/kg slow IV → Regular insulin 0.25-0.5 U/kg IV + 50% Dextrose 1-2 mL/kg IV。0.9% NaCl IV（不含鉀）。穩定後鎮靜放置尿道導管。【Specialty care — ICU 管理】留置尿道導管 24-48 小時，閉合式收集系統。監測 post-obstructive diuresis，輸液 match output + 維持量。電解質 q4-6h。止痛（Buprenorphine）+ 膀胱解痙（Prazosin）。拔管前夾管試排尿。出院前建立預防計畫。',
    prognosis: '首次阻塞住院存活率 > 90%。復發率 25-40%（6 個月內）。預後不良因子：就診時已嚴重低體溫（< 36.5 C）、K+ > 9.0、心跳停止。反覆阻塞（≥ 3 次）考慮會陰尿道造口術（PU），PU 術後再阻塞率 < 10%。',
    monitoring: '住院期間：尿量 q1-2h（post-obstructive diuresis 期 output 可達 10-20 mL/kg/hr）。電解質 q4-6h 直到正常化。BUN/Cre q12-24h。拔管後觀察自行排尿 12-24 小時。出院後 48-72 小時回診。1-2 週後尿液分析。長期每 3-6 個月尿液追蹤。',
    owner_communication: '貓尿道阻塞是一種緊急狀況，如果不及時治療可能在 1-2 天內致命。目前最大的風險是血液中鉀離子過高影響心臟。我們需要先穩定心臟再疏通尿道。住院期間需要密集監測。這個疾病有 25-40% 的復發率，出院後需要注意：改用處方泌尿道飲食、增加飲水量、保持環境舒適減少壓力。如果看到再次無法排尿或頻繁蹲踞，請立即回診。',
  },
  diagnostic_data: null,
  procedure_data: null,
  visual_placeholders: [
    { position: '高血鉀處置表格後', type: 'flowchart', description: 'FUO 緊急處置決策流程圖' },
    { position: 'ECG 段落', type: 'waveform', description: '高血鉀 ECG 變化進展圖（正常→T波高尖→P波消失→QRS增寬→sine wave）' },
  ],
  interactive_placeholders: [
    { position: '藥物表格後', type: 'drug_calculator', description: '高血鉀急救藥物劑量計算器' },
  ],
  drug_api_links: ['Calcium Gluconate', 'Regular Insulin', 'Dextrose', 'Terbutaline', 'Buprenorphine', 'Prazosin'],
  references: [
    { type: 'textbook', citation: 'Silverstein DC, Hopper K. Small Animal Critical Care Medicine, 3rd ed. Elsevier, 2022. Chapter: Urethral Obstruction in Cats.', relevance: 'ECC 核心教材貓尿道阻塞章節' },
    { type: 'journal', citation: 'Hall J, Hall K, Powell LL, et al. Outcome of male cats managed for urethral obstruction with decompressive cystocentesis and urinary catheterization: 47 cats (2009-2012). JVECC. 2015;25(2):256-263.', relevance: '貓 FUO 治療結果回顧研究' },
    { type: 'journal', citation: 'Reineke EL, Thomas EK, Syring RS, et al. The effect of prazosin on outcome in feline urethral obstruction. JVECC. 2017;27(4):387-396.', relevance: 'Prazosin 用於 FUO 的預後影響' },
    { type: 'guideline', citation: 'Westropp JL, Delgado M, Buffington CAT. Chronic lower urinary tract signs in cats: current understanding of pathophysiology and management. Vet Clin North Am Small Anim Pract. 2019;49(2):187-209.', relevance: '貓下泌尿道疾病管理綜合指引' },
  ],
  is_current: true,
  created_at: now,
};

/** ECC-L3-005 中毒急診（通論） — 疾病型 */
const contentToxEmergency: NodeContent = {
  id: 'CONTENT-ECC-L3-005',
  node_id: 'ECC-L3-005',
  version: 1,
  summary: '中毒急診的處置遵循「穩定→除汙→增排→解毒→支持」五步架構。關鍵原則為 ABCDE 穩定優先，催吐有嚴格的適應症與禁忌症（攝入 < 2 小時、意識清楚、非腐蝕性/揮發性物質），活性炭可減少 GI 吸收但並非所有毒物都適用。犬貓因代謝差異（貓缺乏 glucuronidation），對多種常見物質毒性反應不同。ASPCA APCC 為北美最大動物中毒諮詢資源。',
  learning_objectives: [
    '運用中毒急診五步架構（穩定→除汙→增排→解毒→支持）系統性處置',
    '正確判斷催吐的適應症與禁忌症',
    '描述活性炭的作用機制、劑量與適用/不適用情境',
    '列出犬貓最常見的中毒物質及其物種差異',
    '執行未知毒物的系統性鑑別診斷（toxidrome approach）',
  ],
  key_points: [
    '中毒處置五步架構：Stabilize → Decontaminate → Enhance elimination → Antidote → Supportive care',
    '催吐適應症：攝入 < 2 小時、意識清楚、能保護氣道、非腐蝕性/揮發性物質',
    '催吐藥物：犬用 3% H2O2 1-2 mL/kg PO（max 45 mL）或 Apomorphine 0.03 mg/kg IV；貓用 Dexmedetomidine 7 mcg/kg IM',
    '活性炭 1-2 g/kg PO（with sorbitol 首劑），不適用於：腐蝕劑、重金屬、醇類、石油產品',
    '犬最常見中毒：巧克力、木糖醇、NSAIDs、鼠藥（anticoagulant rodenticide）、葡萄/葡萄乾',
    '貓最常見中毒：百合（Lilium spp.）、NSAIDs（尤其 Acetaminophen）、精油、Permethrin',
    'Toxidrome 辨識：膽鹼激性（SLUDGE）、抗膽鹼性、交感神經促進性、鎮靜性',
  ],
  body: `# 中毒急診通論 (Toxicological Emergencies)

## 一、病理機制 (Pathophysiology)



### 概述
動物中毒是急診常見就診原因。處置原則不因毒物種類不同而改變基本架構，差異在於各步驟的具體執行方式。本節提供中毒急診的通用處置框架，各論（常見毒物各論、蛇咬傷與蟾蜍中毒）另見 ECC-L3-007 與 ECC-L3-008。

### 中毒急診五步架構
### Step 1：穩定（Stabilize）— 永遠最優先
- ABCDE 初級評估
- 癲癇控制：[藥物:Diazepam] 0.5-1 mg/kg IV
- 低血壓：IV 輸液復甦
- 心律不整：ECG 監測，必要時抗心律不整藥
- 低血糖：50% Dextrose 0.5-1 mL/kg IV（稀釋後）
- 體溫調控

### Step 2：除汙（Decontaminate）
#### 催吐（Emesis）
**適應症**：攝入 < 2 小時、意識清楚、能保護氣道、非腐蝕性/揮發性物質
**禁忌症**：意識不清/癲癇、腐蝕性物質（酸/鹼）、揮發性碳氫化合物、尖銳異物、已嘔吐過

| 物種 | 藥物 | 劑量 | 備註 |
|------|------|------|------|
| 犬 | 3% H2O2 | 1-2 mL/kg PO（max 45 mL）| 可在家執行 |
| 犬 | [藥物:Apomorphine] | 0.03 mg/kg IV 或 0.04 mg/kg IM | 院內首選 |
| 貓 | [藥物:Dexmedetomidine] | 7 mcg/kg IM | 催吐效果佳，可用 Atipamezole 拮抗 |
| 貓 | 禁用 H2O2 | — | 致嚴重出血性胃炎 |

#### 活性炭（Activated Charcoal）
- 劑量：1-2 g/kg PO（首劑含 sorbitol 促進排出）
- 適用：大部分有機毒物
- 不適用：腐蝕劑、重金屬（鐵、鋰、鉛）、醇類（乙二醇、甲醇）、石油產品

#### 皮膚/眼睛除汙
- 大量清水沖洗至少 15-20 分鐘
- 穿戴手套保護操作者

### Step 3：增加排泄（Enhance Elimination）
- IV 輸液利尿：增加腎臟排泄
- 尿液鹼化（NaHCO3）：適用於弱酸性毒物（如 Aspirin）
- 重複活性炭（q4-6h 不含 sorbitol）：有腸肝循環的毒物
- 脂肪乳劑（Intralipid 20%）：脂溶性毒物（如 Ivermectin、Permethrin、局部麻醉劑）

### Step 4：解毒劑（Antidote）— 並非所有毒物都有
| 毒物 | 解毒劑 |
|------|--------|
| Anticoagulant rodenticide | [藥物:Vitamin K1] |
| Acetaminophen | [藥物:N-Acetylcysteine] |
| 有機磷 | [藥物:Atropine] + [藥物:Pralidoxime] |
| 乙二醇（防凍液） | [藥物:Fomepizole] 或 Ethanol |
| Opioids | [藥物:Naloxone] |
| Benzodiazepines | [藥物:Flumazenil] |

### Step 5：支持療法（Supportive Care）
- 輸液維持水合狀態與腎灌流
- GI 保護（止吐、胃酸抑制）
- 肝保護（SAMe、Silymarin）
- 體溫調控
- 營養支持
- 48-72 小時密切監測器官功能

### Toxidrome 辨識
| Toxidrome | 臨床特徵 | 常見毒物 |
|-----------|---------|---------|
| 膽鹼激性（SLUDGE） | 流涎、流淚、排尿、排便、嘔吐 | 有機磷、氨基甲酸鹽 |
| 抗膽鹼性 | 瞳孔散大、心搏過速、口乾、尿滯留 | Atropine、三環抗鬱劑 |
| 交感促進性 | 心搏過速、高血壓、瞳孔散大、高體溫 | Amphetamine、Pseudoephedrine、巧克力 |
| 鎮靜性 | 嗜睡、低體溫、心搏過緩、呼吸抑制 | Opioids、Benzodiazepines、大麻 |

[圖片:中毒急診五步架構流程圖]

## 二、臨床表現與診斷 (Clinical Signs & Diagnosis)

## 三、治療策略 (Treatment)

## 四、併發症與監控 (Complications & Monitoring)

## 五、預後與預後因子 (Prognosis)

## 六、人醫借鑒 (Translational Insights)

| 人醫工具/概念 | 獸醫應用潛力 | 現況 |
|-------------|-------------|------|
| 體外膜氧合（ECMO） | 犬嚴重急性呼吸窘迫/心因性休克 | 人醫成熟技術，獸醫因成本極少使用 |
| 毒物即時檢測（POC toxicology） | 犬中毒即時確認毒物種類 | 人醫快速檢測套組，獸醫可用性有限 |
| 治療性低溫（targeted temperature management） | 犬心停復甦後腦保護 | 人醫已為標準，獸醫初步研究 |
| 血漿交換（plasmapheresis） | 犬嚴重免疫介導疾病急救 | 少數獸醫轉介中心可執行 |

## 七、臨床爭議與知識空缺 (Controversies & Knowledge Gaps)

| 爭議議題 | 現況 | Evidence Level |
|---------|------|---------------|
| 犬 GDV 術後心律不整的治療閾值 | Lidocaine 何時開始？VPC rate >20/min vs 出現 R-on-T 的爭議 | Level III |
| 犬中毒洗胃 vs 催吐 vs 活性碳的適用時機 | 催吐時間窗（2 小時）、活性碳對特定毒物效果的個別化決策 | Level II |
| 犬急性腎損傷的體液治療量 | 傳統大量輸液 vs 限制性輸液策略——獸醫缺乏比較數據 | Level III |
| 犬蛇咬傷抗毒血清的劑量與重複給藥標準 | 台灣蛇種特異性數據不足，多參考國際經驗 | Level III |`,
  clinical_pearl: '面對中毒病患，最常犯的錯誤是過度關注「是什麼毒物」而忽略基本穩定。記住：穩定永遠第一，除汙有時效（2 小時），但不是每個中毒都需要催吐或活性炭。如果不確定毒物是什麼，toxidrome approach（看臨床表現歸類）比試圖精確鑑定毒物更實用。ASPCA APCC（888-426-4435）是最佳諮詢資源。',
  common_mistakes: [
    '對意識不清或癲癇的動物催吐——吸入性肺炎風險極高',
    '攝入腐蝕性物質後催吐——二次灼傷食道',
    '貓使用 3% H2O2 催吐——致嚴重出血性胃炎',
    '對所有中毒都給活性炭——重金屬、醇類、腐蝕劑無效且可能有害',
    '過度依賴解毒劑而忽略基本支持療法——多數中毒並無特效解毒劑',
  ],
  disease_data: {
    signalment: '犬貓均常見，犬因不挑食的進食習性中毒發生率高於貓。幼犬/幼貓好奇心強，中毒風險較高。貓因缺乏 UDP-glucuronosyltransferase，對多種化合物敏感度高於犬（如 Acetaminophen、Permethrin、精油）。',
    etiology: '攝入（最常見）、皮膚接觸、吸入、注射（蛇咬/昆蟲叮咬）。犬最常見：巧克力/可可鹼、木糖醇、NSAIDs、抗凝血鼠藥、葡萄/葡萄乾。貓最常見：百合（Lilium/Hemerocallis spp.）、Acetaminophen、Permethrin（犬用除蚤藥）、精油。',
    pathogenesis: '因毒物而異。共通原則：毒物吸收 → 分布至標的器官 → 器官特異性損傷。犬肝臟代謝能力強但 GI 吸收快，貓缺乏 glucuronidation 致多種藥物半衰期延長毒性增加。腎臟排泄型毒物在腎功能不全時毒性加劇。',
    clinical_signs: [
      { sign: 'GI 症狀（嘔吐/腹瀉/流涎）', category: 'primary', description: '最常見的初始表現，見於多數攝入性中毒' },
      { sign: '神經症狀（癲癇/震顫/嗜睡）', category: 'primary', description: '神經毒性物質或嚴重代謝紊亂' },
      { sign: '心血管異常（心律不整/低血壓）', category: 'secondary', description: '心毒性物質或嚴重全身性效應' },
      { sign: '出血傾向', category: 'secondary', description: '抗凝血鼠藥中毒特徵性表現' },
      { sign: '急性腎損傷', category: 'secondary', description: '百合（貓）、乙二醇、葡萄（犬）' },
    ],
    staging: null,
    differential_diagnosis: [
      { condition: '感染性疾病（急性腸胃炎）', key_differentiator: '通常無明確毒物暴露史，發燒、白血球異常' },
      { condition: '急性胰臟炎', key_differentiator: '嘔吐腹痛但 cPLI/fPLI 升高，無毒物暴露' },
      { condition: '代謝性疾病（DKA、Addison crisis）', key_differentiator: '特異性血檢異常（高血糖酮體/低鈉高鉀）' },
      { condition: '異物阻塞', key_differentiator: '嘔吐但影像學可見阻塞，無全身性毒性' },
    ],
    diagnostic_workup: '1. 詳細暴露史（物質、量、時間、體重）→ 2. ABCDE 穩定 → 3. 基礎血檢（CBC、生化、電解質、血氣）→ 4. 凝血功能（疑似鼠藥）→ 5. 尿液分析（結晶、pH）→ 6. ECG → 7. 特異性檢測（乙二醇試紙、血中藥物濃度）→ 8. 保留嘔吐物/可疑物質送檢',
    treatment_protocol: '【Primary care — 穩定/初步處置】ABCDE 穩定。攝入 < 2 小時且符合條件者催吐。活性炭 1-2 g/kg（適用毒物）。建立 IV 輸液。已知毒物給予特效解毒劑。聯繫毒物諮詢中心（ASPCA APCC）。【Specialty care — ICU 管理】連續 ECG 與血壓監測。針對標的器官持續追蹤（腎毒性→BUN/Cre q6-8h；肝毒性→ALT/AST q12h；凝血毒→PT q12-24h）。脂肪乳劑用於脂溶性毒物。重複活性炭用於有腸肝循環毒物。48-72 小時密切觀察延遲性器官損傷。',
    prognosis: '因毒物種類與劑量差異極大。早期除汙（攝入 < 1 小時內催吐）者預後顯著改善。有特效解毒劑的中毒（如鼠藥 → Vitamin K1）預後良好。無特效解毒劑但以支持療法管理者（如百合中毒貓），早期積極輸液治療存活率 > 80%。',
    monitoring: '依毒物標的器官調整。共通原則：前 24 小時至少 q4-6h 監測生命徵象與相關指標。腎毒性：BUN/Cre q6-8h 共 48-72 小時。肝毒性：ALT/AST q12h。凝血毒：PT/aPTT q12-24h。神經毒：神經學檢查 q4-6h。所有中毒出院後 48-72 小時回診追蹤。',
    owner_communication: '中毒的處置效果與時間高度相關——越早就醫越好。請盡可能帶來包裝、嘔吐物或可疑物質。治療會依據毒物種類決定，但基本原則是穩定狀況、減少吸收、加速排出、給予解毒劑（如果有的話）。許多常見家庭用品對動物有毒（巧克力、木糖醇、百合、某些藥物），建議做好居家防護。',
  },
  diagnostic_data: null,
  procedure_data: null,
  visual_placeholders: [
    { position: '五步架構段落前', type: 'flowchart', description: '中毒急診五步架構流程圖' },
    { position: 'Toxidrome 表格後', type: 'comparison_table', description: '四大 Toxidrome 臨床特徵比較表' },
  ],
  interactive_placeholders: [],
  drug_api_links: ['Apomorphine', 'Dexmedetomidine', 'Diazepam', 'Vitamin K1', 'N-Acetylcysteine', 'Atropine', 'Pralidoxime', 'Fomepizole', 'Naloxone', 'Flumazenil'],
  references: [
    { type: 'textbook', citation: 'Silverstein DC, Hopper K. Small Animal Critical Care Medicine, 3rd ed. Elsevier, 2022. Section: Toxicological Emergencies.', relevance: 'ECC 核心教材中毒急診章節' },
    { type: 'textbook', citation: 'Hovda LR, Brutlag AG, Poppenga RH, et al. Blackwell\'s Five-Minute Veterinary Consult Clinical Companion: Small Animal Toxicology, 2nd ed. Wiley-Blackwell, 2016.', relevance: '小動物毒理學快速參考' },
    { type: 'journal', citation: 'Gwaltney-Brant SM. Veterinary toxicology: basic and clinical principles, 3rd ed. Academic Press, 2018.', relevance: '獸醫毒理學基礎與臨床原則' },
    { type: 'guideline', citation: 'ASPCA Animal Poison Control Center (APCC). Annual report data on most common toxicoses in dogs and cats.', relevance: '犬貓最常見中毒物質年度統計' },
  ],
  is_current: true,
  created_at: now,
};

/** ECC-L3-006 癲癇重積狀態 — 疾病型 */
const contentSE: NodeContent = {
  id: 'CONTENT-ECC-L3-006',
  node_id: 'ECC-L3-006',
  version: 1,
  summary: '癲癇重積狀態（Status Epilepticus, SE）定義為持續超過 5 分鐘的癲癇發作或兩次發作間意識未恢復。這是神經急診中致死率最高的狀況之一，持續性全身性癲癇可導致腦損傷、高體溫、橫紋肌溶解與多重器官衰竭。治療以階梯式藥物介入為原則：第一線 Diazepam/Midazolam → 第二線 Levetiracetam/Phenobarbital IV → 第三線 Propofol/Ketamine CRI。早期積極治療（前 5 分鐘內給藥）可顯著改善預後。',
  learning_objectives: [
    '定義癲癇重積狀態與叢集性癲癇並說明其危險性',
    '運用階梯式藥物治療流程處置難治性癲癇重積',
    '正確計算與給予第一至第三線抗癲癇藥物',
    '辨識癲癇重積的常見病因並執行系統性診斷',
    '制定癲癇重積後的 ICU 監測與長期抗癲癇計畫',
  ],
  key_points: [
    'SE 定義：連續癲癇 > 5 分鐘 或 兩次發作間意識未恢復',
    '叢集性癲癇（cluster seizures）：24 小時內 ≥ 2 次發作但發作間意識恢復',
    '第一線：Diazepam 0.5-1 mg/kg IV（犬貓）或 Midazolam 0.2-0.3 mg/kg IV/IM',
    '第二線：Levetiracetam 30-60 mg/kg IV 或 Phenobarbital 2-4 mg/kg IV（可每 20 分鐘重複至 max 16-24 mg/kg）',
    '第三線（難治性 SE）：Propofol 1-6 mg/kg IV bolus → 0.1-0.6 mg/kg/min CRI',
    '持續癲癇 > 30 分鐘可致不可逆神經元損傷',
    '積極控制高體溫——癲癇活動產熱可致體溫 > 41 C，需主動降溫',
  ],
  body: `# 癲癇重積狀態 (Status Epilepticus)

## 一、病理機制 (Pathophysiology)



### 概述
SE 是一種神經急症，當癲癇發作的內在終止機制失效，導致持續性的神經元異常放電。隨著發作時間延長，GABA-A 受體從突觸膜內化（internalization），導致 benzodiazepine 的效力逐漸下降，這解釋了為何早期給藥極為關鍵。同時，NMDA 受體上調使興奮性神經傳導物質谷氨酸（glutamate）過度刺激導致興奮性毒性（excitotoxicity）與神經元死亡。

### 初步評估
1. 記錄發作起始時間——時間決定治療強度
2. 保護動物安全（移除周遭危險物）
3. 測量體溫（常 > 40 C）
4. 建立 IV 通路（發作中可先 IM 給藥）
5. 即時血糖檢測——低血糖是可逆原因！

### 後續管理
- ICU 監測至少 24-48 小時
- 維持抗癲癇藥物（Phenobarbital 或 Levetiracetam）
- 系統性病因調查：MRI（結構性）、CSF 分析（發炎性）、完整血檢（代謝性）、毒物篩檢
- 監測：神經狀態 q2-4h、體溫 q2h、腎功能（rhabdomyolysis → myoglobinuria）

## 二、臨床表現與診斷 (Clinical Signs & Diagnosis)

### 臨床表現
### 全身性強直-陣攣性 SE
- 四肢強直伸展 → 節律性抽搐
- 意識喪失、瞳孔散大
- 流涎、大小便失禁
- 伴隨嘔吐、高體溫

### 非典型 SE（subtle SE）
- 持續性面部抽搐、眼球震顫
- 持續意識改變但無明顯肢體抽搐
- 常見於已給予部分治療後

## 三、治療策略 (Treatment)

### 緊急處置——階梯式藥物治療
### 第一線（0-5 分鐘）：Benzodiazepines
| 藥物 | 劑量 | 途徑 | 備註 |
|------|------|------|------|
| [藥物:Diazepam] | 0.5-1 mg/kg | IV | 起效最快（1-2 分鐘），持續 15-20 分鐘 |
| [藥物:Midazolam] | 0.2-0.3 mg/kg | IV/IM/IN | IM 可在無 IV 時使用，鼻腔給藥（IN）快速 |
| [藥物:Diazepam] (per rectum) | 1-2 mg/kg | PR | 飼主居家急救用 |

- 可重複 1-2 次，間隔 5 分鐘
- 重複 > 2 次效果遞減（受體內化）

### 第二線（5-20 分鐘）：Benzodiazepine 無效時
| 藥物 | 劑量 | 途徑 | 備註 |
|------|------|------|------|
| [藥物:Levetiracetam] | 30-60 mg/kg | IV (over 5 min) | 安全性高，不抑制呼吸 |
| [藥物:Phenobarbital] | 2-4 mg/kg | IV (over 10-15 min) | 每 20 分鐘可重複，max 16-24 mg/kg |

### 第三線（> 20 分鐘）：難治性 SE
| 藥物 | Bolus | CRI | 備註 |
|------|-------|-----|------|
| [藥物:Propofol] | 1-6 mg/kg IV | 0.1-0.6 mg/kg/min | 需氣管插管，監測呼吸 |
| [藥物:Ketamine] | 5 mg/kg IV | 5-20 mcg/kg/min | NMDA 拮抗，對 BZD 抗性 SE 有效 |
| [藥物:Pentobarbital] | 2-15 mg/kg IV | 0.5-5 mg/kg/hr | 最後手段，需機械通氣 |

### 同時處置
- **低血糖**（< 60 mg/dL）：50% Dextrose 0.5-1 mL/kg IV（稀釋至 12.5%）
- **高體溫**（> 40 C）：主動降溫至 39.5 C
- **腦水腫**疑慮：[藥物:Mannitol] 0.5-1 g/kg IV over 15-20 min

## 四、併發症與監控 (Complications & Monitoring)

## 五、預後與預後因子 (Prognosis)

### 預後
SE 整體存活率約 60-70%。預後取決於：發作持續時間（< 30 分鐘較佳）、病因（代謝性/中毒 > 結構性）、對第一線藥物的反應。反應性 SE（有可逆原因）預後優於特發性/結構性 SE。

[圖片:癲癇重積狀態階梯式治療流程圖]

## 六、人醫借鑒 (Translational Insights)

| 人醫工具/概念 | 獸醫應用潛力 | 現況 |
|-------------|-------------|------|
| 體外膜氧合（ECMO） | 犬嚴重急性呼吸窘迫/心因性休克 | 人醫成熟技術，獸醫因成本極少使用 |
| 毒物即時檢測（POC toxicology） | 犬中毒即時確認毒物種類 | 人醫快速檢測套組，獸醫可用性有限 |
| 治療性低溫（targeted temperature management） | 犬心停復甦後腦保護 | 人醫已為標準，獸醫初步研究 |
| 血漿交換（plasmapheresis） | 犬嚴重免疫介導疾病急救 | 少數獸醫轉介中心可執行 |

## 七、臨床爭議與知識空缺 (Controversies & Knowledge Gaps)

| 爭議議題 | 現況 | Evidence Level |
|---------|------|---------------|
| 犬 GDV 術後心律不整的治療閾值 | Lidocaine 何時開始？VPC rate >20/min vs 出現 R-on-T 的爭議 | Level III |
| 犬中毒洗胃 vs 催吐 vs 活性碳的適用時機 | 催吐時間窗（2 小時）、活性碳對特定毒物效果的個別化決策 | Level II |
| 犬急性腎損傷的體液治療量 | 傳統大量輸液 vs 限制性輸液策略——獸醫缺乏比較數據 | Level III |
| 犬蛇咬傷抗毒血清的劑量與重複給藥標準 | 台灣蛇種特異性數據不足，多參考國際經驗 | Level III |`,
  clinical_pearl: '癲癇重積的黃金原則是「時間就是腦」。每多一分鐘的癲癇活動，GABA 受體就更多被內化，benzodiazepine 就越來越沒效。前 5 分鐘內給予 Diazepam/Midazolam 的成功率 > 80%，但超過 30 分鐘後成功率降至 < 30%。如果飼主在家打電話來說動物正在癲癇，第一句話是「現在幾點幾分開始的」，第二句是「直肛 Diazepam 有沒有」。',
  common_mistakes: [
    'Benzodiazepine 重複超過 2-3 次卻不升級至第二線藥物——受體已內化，繼續給無效',
    '未檢測血糖——低血糖是最容易矯正的癲癇原因',
    '忽略高體溫處置——癲癇產熱可致 > 41 C，加速腦損傷',
    'Phenobarbital IV 注射過快——可致嚴重低血壓與呼吸抑制',
    '癲癇控制後未進行病因調查——特發性癲癇是排除診斷',
  ],
  disease_data: {
    signalment: '犬比貓常見。犬好發品種：大型犬（德國牧羊犬、拉布拉多、黃金獵犬、澳洲牧羊犬、比格犬）。特發性癲癇好發 1-5 歲。結構性癲癇無年齡限制。貓較少見 SE，但貓 SE 常提示嚴重器質性疾病。',
    etiology: '特發性/遺傳性癲癇（犬最常見原因）：無可辨識的結構或代謝原因。結構性：腦腫瘤、腦炎（GME、NME）、腦血管事件、外傷、先天異常。反應性（代謝/中毒）：低血糖、肝性腦病、低鈣血症、中毒（甲硝唑、鉛、有機磷、木糖醇）、電解質異常。',
    pathogenesis: '癲癇發作 → 持續 > 5 分鐘 → 內在終止機制失效 → GABA-A 受體內化（benzodiazepine 抗性上升）+ NMDA 受體上調 → 谷氨酸介導的興奮性毒性 → 神經元鈣內流增加 → 粒線體功能障礙 → 神經元死亡。全身效應：高體溫、橫紋肌溶解、代謝性酸中毒、高血鉀。',
    clinical_signs: [
      { sign: '持續性全身強直-陣攣性發作', category: 'primary', description: '四肢強直伸展→節律性抽搐，持續 > 5 分鐘' },
      { sign: '意識喪失', category: 'primary', description: '發作間意識未恢復' },
      { sign: '高體溫', category: 'primary', description: '肌肉持續收縮產熱，體溫可達 > 41 C' },
      { sign: '流涎/大小便失禁', category: 'secondary', description: '自主神經功能異常' },
      { sign: '嘔吐', category: 'secondary', description: '癲癇後期常見' },
    ],
    staging: null,
    differential_diagnosis: [
      { condition: '暈厥（syncope）', key_differentiator: '短暫意識喪失後快速恢復，無強直陣攣期，與心血管疾病相關' },
      { condition: '前庭症候群急性發作', key_differentiator: '旋轉/頭斜，意識清楚，眼球震顫方向固定' },
      { condition: '運動障礙（paroxysmal dyskinesia）', key_differentiator: '意識清楚，發作型態刻板重複，非典型強直陣攣' },
      { condition: '疼痛發作', key_differentiator: '嚎叫/焦躁但意識清楚，無強直陣攣' },
      { condition: '中毒性震顫', key_differentiator: '全身性細微震顫而非強直陣攣，特定毒物暴露史' },
    ],
    diagnostic_workup: '1. 即時血糖 + 電解質 → 2. 穩定後完整血檢（CBC、生化、NH3、膽汁酸）→ 3. 凝血功能 → 4. 血氣分析 → 5. 尿液分析（肌球蛋白）→ 6. 穩定後：腦部 MRI（結構性病變）→ 7. CSF 分析（發炎性/感染性）→ 8. 抗癲癇藥物血中濃度（已有用藥者）',
    treatment_protocol: '【Primary care — 穩定/初步處置】Diazepam 0.5-1 mg/kg IV（或 Midazolam 0.2-0.3 mg/kg IM）控制癲癇。即時血糖——低血糖則 Dextrose 50% 0.5-1 mL/kg IV。體溫 > 40 C 主動降溫。無 IV 路時 Midazolam IM 或 Diazepam PR。建議轉診至有 ICU 的醫院。【Specialty care — ICU 管理】第二線 Levetiracetam 30-60 mg/kg IV 或 Phenobarbital 2-4 mg/kg IV q20min 至控制。難治性 SE：Propofol 1-6 mg/kg IV → CRI 0.1-0.6 mg/kg/min（需插管）或 Ketamine CRI。ICU 監測：神經狀態、體溫、腎功能、CK。穩定後系統性病因調查（MRI、CSF）。建立長期口服抗癲癇藥物計畫。',
    prognosis: 'SE 整體存活率約 60-70%。預後良好因子：反應性病因可矯正（低血糖、中毒）、發作持續時間 < 30 分鐘、對第一線 BZD 反應良好。預後不良因子：結構性病因（腦腫瘤）、發作 > 60 分鐘、進展至難治性 SE 需第三線藥物、併發 rhabdomyolysis/AKI。特發性癲癇犬經適當長期管理預後較佳。',
    monitoring: '急性期：神經狀態（意識、瞳孔、反射）q2-4h。體溫 q2h（降溫至 39.5 C）。CK/尿液肌球蛋白 q12h（rhabdomyolysis 監測）。BUN/Cre q12-24h。血氣 q6-8h。CRI 使用中持續 SpO2 與 ETCO2 監測。Phenobarbital 血中濃度：給藥後 24-48 小時首次測（目標 20-35 mcg/mL 犬）。',
    owner_communication: '癲癇重積是一種嚴重的神經急症，如果不緊急治療可能導致腦損傷甚至死亡。我們正在用藥物控制癲癇發作，並同時尋找引起癲癇的原因。動物可能需要在 ICU 住院觀察至少 24-48 小時。控制發作後需要找出原因（可能需要進階檢查如 MRI）。長期可能需要每天服用抗癲癇藥物。在家如果看到癲癇發作超過 3 分鐘，請立即就醫。',
  },
  diagnostic_data: null,
  procedure_data: null,
  visual_placeholders: [
    { position: '階梯式治療段落前', type: 'flowchart', description: 'SE 階梯式藥物治療決策流程圖' },
    { position: '病理機轉段落', type: 'timeline', description: 'SE 時間軸與 GABA 受體內化關係圖' },
  ],
  interactive_placeholders: [
    { position: '藥物表格後', type: 'drug_calculator', description: 'SE 階梯式藥物劑量計算器（含 CRI 速率）' },
  ],
  drug_api_links: ['Diazepam', 'Midazolam', 'Levetiracetam', 'Phenobarbital', 'Propofol', 'Ketamine', 'Mannitol'],
  references: [
    { type: 'textbook', citation: 'Silverstein DC, Hopper K. Small Animal Critical Care Medicine, 3rd ed. Elsevier, 2022. Chapter: Status Epilepticus.', relevance: 'ECC 核心教材癲癇重積章節' },
    { type: 'journal', citation: 'Charalambous M, Brodbelt D, Volk HA. Treatment in canine epilepsy — a systematic review. BMC Vet Res. 2014;10:257.', relevance: '犬癲癇治療系統性回顧' },
    { type: 'guideline', citation: 'Podell M, Volk HA, Berendt M, et al. 2015 ACVIM small animal consensus statement on seizure management in dogs. J Vet Intern Med. 2016;30(2):477-490.', relevance: 'ACVIM 犬癲癇管理共識聲明' },
    { type: 'journal', citation: 'Patterson EE. Canine epilepsy: an underappreciated disease in veterinary medicine. Vet J. 2014;200(1):65-72.', relevance: '犬癲癇臨床概述' },
  ],
  is_current: true,
  created_at: now,
};

/** ECC-L3-007 常見中毒各論 — 疾病型 */
const contentCommonTox: NodeContent = {
  id: 'CONTENT-ECC-L3-007',
  node_id: 'ECC-L3-007',
  version: 1,
  summary: '本節涵蓋犬貓臨床最高頻的六大中毒各論：巧克力/可可鹼（犬）、木糖醇（犬）、抗凝血鼠藥（犬貓）、百合（貓）、Acetaminophen（貓）、葡萄/葡萄乾（犬）。每種毒物有其獨特的標的器官、毒性劑量、臨床時程與處置要點。物種差異極為關鍵：犬對木糖醇極敏感（低血糖 + 急性肝壞死），貓對 Acetaminophen 極敏感（methemoglobinemia + 肝壞死）。',
  learning_objectives: [
    '列出犬貓各自最常見的三種中毒物質並描述毒性機轉',
    '根據攝入量判斷各毒物的毒性劑量與預期嚴重度',
    '針對每種毒物制定特異性的治療計畫（含解毒劑）',
    '說明犬貓代謝差異如何影響中毒敏感度',
    '向飼主提供居家常見毒物的預防教育',
  ],
  key_points: [
    '巧克力毒性與可可鹼含量正相關：烘焙巧克力 > 黑巧克力 > 牛奶巧克力 > 白巧克力',
    '木糖醇（犬）：0.1 g/kg 致低血糖，0.5 g/kg 致急性肝壞死——一片無糖口香糖可能對小型犬致命',
    '抗凝血鼠藥：Vitamin K1 為特效解毒劑，治療需持續 4-6 週（第二代鼠藥）',
    '百合（貓）：Lilium 與 Hemerocallis 屬所有部位均致命，花粉也可致 AKI，48 小時內不治療幾乎 100% 死亡',
    'Acetaminophen（貓）：10 mg/kg 即可致毒性，貓缺乏 glucuronidation → methemoglobinemia + Heinz body',
    '葡萄/葡萄乾（犬）：毒性成分為酒石酸（tartaric acid），毒性劑量個體差異大，任何攝入量均應視為潛在危險',
    'N-Acetylcysteine (NAC) 是 Acetaminophen 中毒的特效解毒劑：loading 140 mg/kg IV → 70 mg/kg IV q6h x 5-7 次',
  ],
  body: `# 常見中毒各論 (Common Toxicoses)

## 一、病理機制 (Pathophysiology)



### 一、巧克力/可可鹼中毒 [犬]
### 毒性成分
甲基黃嘌呤（Theobromine + Caffeine）。犬代謝 theobromine 的半衰期為 17.5 小時（人類僅 6 小時）。

### 毒性劑量（以 theobromine 計）
| 巧克力類型 | Theobromine 含量 | 輕度毒性（mg/kg） | 重度毒性（mg/kg） |
|-----------|-----------------|-------------------|-------------------|
| 白巧克力 | 0.25 mg/g | 極低風險 | 極低風險 |
| 牛奶巧克力 | 2.3 mg/g | 20 | 40-50 |
| 黑巧克力 | 5.5-16 mg/g | 20 | 40-50 |
| 烘焙巧克力 | 16 mg/g | 20 | 40-50 |
| 可可粉 | 28.5 mg/g | 20 | 40-50 |

### 臨床表現（劑量依賴性）
- 20 mg/kg：嘔吐、腹瀉、多飲多尿、躁動
- 40 mg/kg：心搏過速、心律不整、震顫
- 60 mg/kg：癲癇、心律不整致死

### 治療
催吐（< 2 小時）→ 活性炭 → IV 輸液利尿 → 心律不整監測與治療 → 無特效解毒劑

---

### 二、木糖醇中毒 [犬]
### 毒性機轉
犬攝入木糖醇後刺激胰島素大量釋放（犬的反應為人類的 7 倍），導致急性低血糖。高劑量致急性肝細胞壞死（機轉未完全明瞭，可能與 ATP 耗竭相關）。

### 毒性劑量
- 低血糖：> 0.1 g/kg（一片口香糖約含 0.3-1 g）
- 急性肝壞死：> 0.5 g/kg

### 臨床時程
- 低血糖：攝入後 10-60 分鐘
- 肝壞死：攝入後 12-72 小時（ALT 可升至數千）

### 治療
催吐（< 30 分鐘且未低血糖）→ 即時血糖監測 → 低血糖：50% Dextrose 0.5-1 mL/kg IV → Dextrose CRI（2.5-5%）維持血糖 → 肝保護：[藥物:N-Acetylcysteine] 140 mg/kg IV → 70 mg/kg q6h → 監測肝指數與凝血功能 48-72 小時

---

### 三、抗凝血鼠藥中毒 [犬貓]
### 毒性機轉
抑制 Vitamin K epoxide reductase → Vitamin K 依賴凝血因子（II, VII, IX, X）無法活化 → 凝血功能障礙 → 自發性出血

### 分類
- 第一代（Warfarin, Chlorophacinone）：半衰期短，治療 2-4 週
- 第二代（Brodifacoum, Bromadiolone）：半衰期長（> 120 天），治療 4-6 週

### 臨床表現（攝入後 2-5 天）
嗜睡、呼吸困難（胸腔出血）、腹部膨脹（腹腔出血）、皮下瘀血、牙齦出血、血尿

### 治療
[藥物:Vitamin K1] 2.5-5 mg/kg PO BID（餐後服用增加吸收）× 4-6 週 → 停藥後 48-72 小時追蹤 PT → 活動性出血：FFP/全血輸血 + Vitamin K1

---

### 四、百合中毒 [貓]
### 高危險品種
Lilium（真百合屬）與 Hemerocallis（萱草屬）所有部位（花瓣、花粉、葉、莖、根、甚至花瓶水）均致貓急性腎小管壞死。

### 毒性劑量
極低——舔食少量花粉或咬一小口葉片即可致命。毒性成分尚未完全確定。

### 臨床時程
- 0-2 小時：嘔吐
- 12-24 小時：多尿期（腎小管損傷早期）
- 24-72 小時：少尿/無尿期（AKI 確立）
- > 72 小時未治療：死亡

### 治療
催吐（< 2 小時）→ 活性炭 → **積極 IV 輸液**（2-3 倍維持量 × 48 小時）為最關鍵治療 → 監測 BUN/Cre q6-8h → 少尿期腎臟支持 → 無特效解毒劑

---

### 五、Acetaminophen（普拿疼）中毒 [貓]
### 毒性機轉
貓嚴重缺乏 UDP-glucuronosyltransferase → 無法有效 glucuronidation → 毒性代謝物 NAPQI 累積 → 氧化壓力 → Methemoglobinemia + Heinz body → 急性溶血 + 肝壞死

### 毒性劑量
- 貓：10 mg/kg 即可致毒性（一顆 500 mg 普拿疼對 5 kg 貓 = 100 mg/kg = 致死劑量）
- 犬：> 75 mg/kg 致肝毒性（犬較耐受但高劑量仍危險）

### 臨床表現
- 2-4 小時：嘔吐、流涎
- 4-12 小時：黏膜發紺（巧克力棕色 = methemoglobinemia）、臉部/爪部水腫
- 12-48 小時：Heinz body 溶血、黃疸、肝壞死

### 治療
[藥物:N-Acetylcysteine]（NAC）：Loading 140 mg/kg IV → 70 mg/kg IV q6h × 5-7 doses。[藥物:SAMe]（S-adenosylmethionine）：20 mg/kg PO SID 肝保護。嚴重 methemoglobinemia 考慮全血輸血。

---

### 六、葡萄/葡萄乾中毒 [犬]
### 毒性成分
酒石酸（tartaric acid），2021 年研究確認為主要毒性成分。品種差異大，部分犬對極少量即敏感。

### 毒性劑量
個體差異極大，無法確定安全閾值。任何攝入量均應視為潛在危險並積極處置。葡萄乾因濃縮毒性更高。

### 臨床時程
- 6-12 小時：嘔吐、腹瀉、腹痛
- 24-48 小時：少尿→無尿（AKI）
- 48-72 小時：氮血症惡化

### 治療
催吐（< 2 小時）→ 活性炭 → **積極 IV 輸液**（2-3 倍維持量 × 48 小時）→ 監測 BUN/Cre q8-12h → 少尿考慮利尿劑挑戰或透析 → 無特效解毒劑

[圖片:犬貓常見毒物速查比較表]

## 二、臨床表現與診斷 (Clinical Signs & Diagnosis)

## 三、治療策略 (Treatment)

## 四、併發症與監控 (Complications & Monitoring)

## 五、預後與預後因子 (Prognosis)

## 六、人醫借鑒 (Translational Insights)

| 人醫工具/概念 | 獸醫應用潛力 | 現況 |
|-------------|-------------|------|
| 體外膜氧合（ECMO） | 犬嚴重急性呼吸窘迫/心因性休克 | 人醫成熟技術，獸醫因成本極少使用 |
| 毒物即時檢測（POC toxicology） | 犬中毒即時確認毒物種類 | 人醫快速檢測套組，獸醫可用性有限 |
| 治療性低溫（targeted temperature management） | 犬心停復甦後腦保護 | 人醫已為標準，獸醫初步研究 |
| 血漿交換（plasmapheresis） | 犬嚴重免疫介導疾病急救 | 少數獸醫轉介中心可執行 |

## 七、臨床爭議與知識空缺 (Controversies & Knowledge Gaps)

| 爭議議題 | 現況 | Evidence Level |
|---------|------|---------------|
| 犬 GDV 術後心律不整的治療閾值 | Lidocaine 何時開始？VPC rate >20/min vs 出現 R-on-T 的爭議 | Level III |
| 犬中毒洗胃 vs 催吐 vs 活性碳的適用時機 | 催吐時間窗（2 小時）、活性碳對特定毒物效果的個別化決策 | Level II |
| 犬急性腎損傷的體液治療量 | 傳統大量輸液 vs 限制性輸液策略——獸醫缺乏比較數據 | Level III |
| 犬蛇咬傷抗毒血清的劑量與重複給藥標準 | 台灣蛇種特異性數據不足，多參考國際經驗 | Level III |`,
  clinical_pearl: '記住三個「貓的死敵」：百合、Acetaminophen、Permethrin。對獸醫來說這三者是基本常識，但對飼主來說可能毫不知情。百合在花市便宜又常見，很多貓家庭擺放。Acetaminophen 是台灣家庭最常備的止痛藥。Permethrin 是犬用除蚤商品的常見成分。每次貓飼主初診時，花 30 秒提醒這三項可能救一條命。',
  common_mistakes: [
    '用巧克力總重量而非 theobromine 含量計算毒性——白巧克力和烘焙巧克力差距 100 倍',
    '木糖醇中毒先催吐但未同時檢測血糖——可能已低血糖，催吐時癲癇',
    '抗凝血鼠藥 Vitamin K1 治療期不足——第二代鼠藥需 4-6 週，太早停藥會復發出血',
    '百合中毒輸液量不足——需 2-3 倍維持量持續 48 小時，一般維持量不夠保護腎臟',
    'Acetaminophen 中毒忘記給 NAC——NAC 是特效解毒劑，越早給越好',
  ],
  disease_data: {
    signalment: '犬：巧克力（不挑食品種如拉布拉多、比格犬最常見）、木糖醇（家中有無糖食品）、抗凝血鼠藥（戶外活動犬）、葡萄/葡萄乾。貓：百合（室內貓接觸切花）、Acetaminophen（飼主善意餵藥）、Permethrin（誤用犬用除蚤產品）。年幼動物因好奇心強發生率較高。',
    etiology: '各毒物詳見各論段落。共通風險因子：飼主知識不足、居家環境未做寵物安全防護、自行給藥（尤其人用藥物予貓）、戶外散放接觸鼠藥/有毒植物。',
    pathogenesis: '巧克力：methylxanthine 致 PDE 抑制→cAMP 升高→CNS 興奮+心律不整。木糖醇：大量 insulin 釋放→低血糖；高劑量→肝細胞 ATP 耗竭→壞死。鼠藥：Vit K epoxide reductase 抑制→凝血因子耗竭。百合：未明毒素→腎小管上皮壞死。Acetaminophen：NAPQI 累積→氧化壓力→methemoglobin+肝壞死。葡萄：酒石酸→腎小管損傷。',
    clinical_signs: [
      { sign: 'GI 症狀（嘔吐/腹瀉）', category: 'primary', description: '幾乎所有攝入性中毒的首發表現' },
      { sign: '心搏過速/心律不整', category: 'primary', description: '巧克力（methylxanthine 效應）' },
      { sign: '低血糖症狀（虛弱/癲癇）', category: 'primary', description: '木糖醇中毒特徵' },
      { sign: '自發性出血', category: 'primary', description: '抗凝血鼠藥中毒（攝入後 2-5 天）' },
      { sign: '黏膜發紺（巧克力棕色）', category: 'secondary', description: 'Acetaminophen 致 methemoglobinemia（貓）' },
      { sign: '少尿/無尿（AKI）', category: 'secondary', description: '百合（貓）與葡萄（犬）中毒的致死原因' },
    ],
    staging: null,
    differential_diagnosis: [
      { condition: '其他原因之 AKI', key_differentiator: '無百合/葡萄暴露史，超音波腎臟形態學不同' },
      { condition: '免疫介導性溶血性貧血（IMHA）', key_differentiator: '與 Acetaminophen 鑑別：無暴露史，Coombs 陽性，無 methemoglobinemia' },
      { condition: '抗凝血鼠藥 vs 其他凝血病', key_differentiator: 'PIVKA 試驗陽性，Vitamin K1 治療反應性（12-24 小時 PT 改善）' },
      { condition: '原發性癲癇 vs 木糖醇低血糖性癲癇', key_differentiator: '血糖正常 vs 極低，暴露史' },
    ],
    diagnostic_workup: '1. 暴露史確認（物質、量、時間）→ 2. ABCDE 穩定 → 3. 即時血糖 → 4. 基礎血檢（CBC、生化）→ 5. 凝血功能（疑鼠藥）→ 6. 血氣/MetHb%（疑 Acetaminophen）→ 7. 尿液分析 → 8. 特異性檢測（乙二醇試紙、血中 theobromine 等）→ 9. 保留嘔吐物/包裝送檢',
    treatment_protocol: '【Primary care — 穩定/初步處置】穩定 → 符合條件者催吐 → 活性炭（適用者）→ IV 輸液。巧克力：心律監測。木糖醇：Dextrose 維持血糖。鼠藥：Vitamin K1 2.5-5 mg/kg PO BID。百合/葡萄：積極輸液 2-3 × 維持量。Acetaminophen：NAC loading。【Specialty care — ICU 管理】持續器官功能監測。木糖醇肝壞死：凝血、肝指數追蹤，FFP。百合 AKI：利尿劑挑戰，必要時血液透析。Acetaminophen：全血輸血（嚴重 MetHb）、NAC 完成療程。鼠藥出血：FFP/全血 + Vitamin K1。',
    prognosis: '巧克力：輕中度毒性預後良好；嚴重心律不整者需密切管理。木糖醇：僅低血糖者預後好；合併肝壞死者死亡率 > 50%。鼠藥：及時 Vitamin K1 治療預後極佳（> 95%）。百合（貓）：早期積極輸液（< 18 小時）存活率 > 80%；延遲治療（> 36 小時）存活率 < 20%。Acetaminophen（貓）：早期 NAC 存活率 > 80%。葡萄（犬）：AKI 前治療預後好；已 anuric 預後差。',
    monitoring: '巧克力：ECG 24 小時。木糖醇：血糖 q1-2h × 12 小時 + ALT q12h × 72 小時。鼠藥：PT q12-24h，停 Vitamin K1 後 48-72 小時追蹤。百合：BUN/Cre q6-8h × 72 小時，尿量 q2h。Acetaminophen：MetHb% + PCV q6h，ALT q12h。葡萄：BUN/Cre q8-12h × 72 小時，尿量 q2h。',
    owner_communication: '許多常見的家庭食品和藥物對犬貓有嚴重毒性。犬要特別注意：巧克力（尤其黑巧克力和烘焙巧克力）、含木糖醇的無糖食品（口香糖、花生醬）、葡萄和葡萄乾、鼠藥。貓要特別注意：百合花（極少量就可致命）、普拿疼/感冒藥（絕對不可給貓吃人的藥）、犬用除蚤產品。發現動物攝入可疑物質，請立即帶包裝就醫，越早處置效果越好。',
  },
  diagnostic_data: null,
  procedure_data: null,
  visual_placeholders: [
    { position: '各論概述前', type: 'comparison_table', description: '犬貓常見毒物速查比較表（毒物→毒性劑量→標的器官→解毒劑）' },
    { position: '百合段落', type: 'annotated_image', description: '常見有毒百合品種辨識圖（Lilium vs Hemerocallis vs 安全百合科植物）' },
  ],
  interactive_placeholders: [
    { position: '巧克力段落', type: 'drug_calculator', description: '巧克力毒性計算器（輸入巧克力類型、重量與犬體重）' },
  ],
  drug_api_links: ['N-Acetylcysteine', 'Vitamin K1', 'SAMe'],
  references: [
    { type: 'textbook', citation: 'Hovda LR, Brutlag AG, Poppenga RH, et al. Blackwell\'s Five-Minute Veterinary Consult Clinical Companion: Small Animal Toxicology, 2nd ed. Wiley-Blackwell, 2016.', relevance: '小動物毒理學快速參考（各論）' },
    { type: 'journal', citation: 'Gwaltney-Brant SM. Chocolate intoxication. Vet Med. 2001;96(2):108-111.', relevance: '巧克力中毒臨床處置' },
    { type: 'journal', citation: 'Dunayer EK, Gwaltney-Brant SM. Acute hepatic failure and coagulopathy associated with xylitol ingestion in eight dogs. JAVMA. 2006;229(7):1113-1117.', relevance: '木糖醇致犬急性肝壞死' },
    { type: 'journal', citation: 'Bennett AJ, Reineke EL. Outcome following gastrointestinal tract decontamination and intravenous fluid diuresis in cats with known lily ingestion: 25 cases (2001-2010). JAVMA. 2013;242(8):1110-1116.', relevance: '貓百合中毒治療結果' },
    { type: 'guideline', citation: 'ASPCA APCC. Top toxicoses in dogs and cats annual data report.', relevance: '犬貓最常見中毒年度統計資料' },
  ],
  is_current: true,
  created_at: now,
};

/** ECC-L3-008 蛇咬傷與蟾蜍中毒（台灣特有） — 疾病型 */
const contentSnakeToad: NodeContent = {
  id: 'CONTENT-ECC-L3-008',
  node_id: 'ECC-L3-008',
  version: 1,
  summary: '台灣四大毒蛇咬傷（百步蛇、龜殼花、雨傘節、眼鏡蛇）與盤古蟾蜍（Bufo bankorensis）中毒是台灣獸醫急診的特有議題。毒蛇分為出血毒型（百步蛇、龜殼花：局部腫脹壞死 + DIC）與神經毒型（雨傘節：漸進性神經肌肉麻痺 + 呼吸衰竭）。盤古蟾蜍分泌的 bufotoxin 具強心苷樣作用，致犬嚴重心律不整。蛇咬傷治療以抗蛇毒血清（antivenom）為核心，台灣疾管署提供凍乾抗蛇毒血清，獸醫院可向人醫急診申請調用。',
  learning_objectives: [
    '辨識台灣四大毒蛇的咬傷特徵與毒素類型（出血毒 vs 神經毒）',
    '描述百步蛇與龜殼花（出血毒）咬傷的臨床表現與 DIC 管理',
    '描述雨傘節（神經毒）咬傷的臨床表現與呼吸支持策略',
    '正確處置盤古蟾蜍中毒的心律不整',
    '說明台灣抗蛇毒血清的取得途徑與使用原則',
  ],
  key_points: [
    '台灣毒蛇咬傷以龜殼花（Protobothrys mucrosquamatus）最常見，百步蛇（Deinagkistrodon acutus）致死率最高',
    '出血毒型（蝮蛇科：百步蛇、龜殼花）：局部劇烈腫脹壞死 + 全身性凝血病 + DIC',
    '神經毒型（蝙蝠蛇科：雨傘節 Bungarus multicinctus）：進行性神經肌肉麻痺，可致呼吸肌麻痺而死',
    '蛇咬傷急救不做：不切開、不吸毒、不綁止血帶、不冰敷',
    '抗蛇毒血清（antivenom）為蛇咬傷最重要治療——台灣疾管署供應，獸醫院需向人醫體系調用',
    '盤古蟾蜍中毒：bufotoxin 似 digitalis，致心搏過緩、AV block、VPC',
    '蟾蜍中毒處置：口腔沖洗 + Atropine（心搏過緩）+ Lidocaine（VPC）+ 脂肪乳劑（Intralipid）',
  ],
  body: `# 蛇咬傷與蟾蜍中毒 — 台灣特有急診

## 一、病理機制 (Pathophysiology)



### 第一部分：蛇咬傷
### 台灣四大毒蛇概覽

| 蛇種 | 學名 | 毒素類型 | 棲息地 | 咬傷特徵 |
|------|------|---------|--------|---------|
| 百步蛇 | Deinagkistrodon acutus | 出血毒（含 metalloproteinase） | 中低海拔山區 | 大型牙痕（1-2 cm 間距），劇烈腫脹 |
| 龜殼花 | Protobothrys mucrosquamatus | 出血毒（含 metalloproteinase） | 低海拔至平地，都會近郊 | 台灣最常見，中型牙痕，漸進腫脹 |
| 雨傘節 | Bungarus multicinctus | 神經毒（alpha-bungarotoxin） | 低海拔水域附近 | 牙痕小/不明顯，初期疼痛輕微 |
| 眼鏡蛇 | Naja atra | 混合毒（神經+細胞毒） | 平地至低海拔 | 局部壞死 + 神經症狀 |

### 出血毒型蛇咬（百步蛇/龜殼花）

#### 臨床表現
- **局部**（30 分鐘-數小時）：
  - 咬傷處劇烈疼痛與快速腫脹（向心性擴散）
  - 瘀血、水泡、組織壞死
  - 百步蛇腫脹速度與範圍遠大於龜殼花

- **全身**（6-24 小時）：
  - 凝血功能障礙：PT/aPTT 延長、fibrinogen 下降、D-dimer 升高
  - DIC：自發性出血（牙齦、注射部位、消化道）
  - 低血壓/休克（嚴重百步蛇咬傷）
  - 溶血、血紅素尿（百步蛇）

#### 治療
1. **初步穩定**：ABCDE → IV 通路 → 採血（CBC、凝血、生化）
2. **不做**：不切開傷口、不吸毒、不綁止血帶、不冰敷
3. **抗蛇毒血清**（最重要！）：
   - 台灣疾管署出血性蛇毒血清（抗百步蛇/龜殼花）
   - 劑量：根據嚴重度 1-3 vial，先稀釋於生理食鹽水 slow IV
   - 過敏反應預處置：[藥物:Diphenhydramine] 2 mg/kg IM + [藥物:Dexamethasone] 0.1 mg/kg IV
   - 備好 [藥物:Epinephrine] 處理 antivenom 過敏反應
4. **輸液復甦**：晶體液維持灌流
5. **凝血支持**：FFP 10-15 mL/kg（嚴重 DIC）
6. **傷口管理**：清創、引流，避免早期手術（等凝血穩定）
7. **止痛**：[藥物:Buprenorphine] 0.02 mg/kg（避免 NSAIDs——加重出血）
8. **抗生素**：蛇口腔菌叢污染——Amoxicillin/clavulanate

### 神經毒型蛇咬（雨傘節）

#### 臨床表現
- **初期**（1-6 小時）：咬傷處疼痛輕微，牙痕不明顯
  - **飼主常低估嚴重性——雨傘節咬傷的最大危險**
- **進展期**（6-12 小時）：
  - 眼瞼下垂（ptosis）——最早神經症狀
  - 瞳孔散大、吞嚥困難
  - 漸進性肌肉無力：四肢 → 呼吸肌
- **危急期**（12-24 小時）：
  - 呼吸肌麻痺 → 呼吸衰竭 → 死亡（未治療）
  - alpha-bungarotoxin 不可逆結合 nicotinic AChR

#### 治療
1. **抗蛇毒血清**：台灣疾管署神經性蛇毒血清（抗雨傘節）
   - 越早越好——alpha-bungarotoxin 結合後不可逆
   - Antivenom 主要中和尚未結合的游離毒素
2. **呼吸支持**（核心！）：
   - 早期氣管插管（不要等到呼吸衰竭）
   - 機械通氣可能需要數天至數週
   - 監測呼吸力量：胸廓擴張幅度、SpO2、ETCO2
3. **抗膽鹼酯酶試驗**：[藥物:Neostigmine] 0.02-0.04 mg/kg IV（搭配 [藥物:Atropine] 預防膽鹼危機）
   - 部分雨傘節毒素為 presynaptic（beta-bungarotoxin），對 Neostigmine 反應差
4. **ICU 監測**至呼吸功能完全恢復

### 抗蛇毒血清取得（台灣特殊流程）

- 台灣疾管署各區管制藥品管理中心儲備
- 獸醫院可透過鄰近人醫急診調用（需說明動物使用）
- 分為：出血性蛇毒血清（抗百步蛇/龜殼花）與神經性蛇毒血清（抗雨傘節/眼鏡蛇）
- 儲存條件：2-8 C 冷藏

---

### 第二部分：盤古蟾蜍中毒
### 概述

盤古蟾蜍（Bufo bankorensis）是台灣特有種，體型大（可達 20 cm），耳後腺分泌 bufotoxin（含 bufadienolides 與 bufogenins），具強心苷（cardiac glycoside-like）作用。犬因好奇舔咬或叼咬蟾蜍而中毒，貓較少見。台灣低海拔至中海拔均可見，雨季活動頻繁。

### 毒性機轉

Bufadienolides 抑制 Na+/K+-ATPase（類似 Digitalis）→ 細胞內 Ca2+ 增加 → 心肌細胞去極化異常 → 心律不整。同時具直接 GI 刺激性與神經毒性。

### 臨床表現（接觸後 15 分鐘-2 小時）
- **口腔**：大量流涎、抓嘴、口腔黏膜充血/潰瘍
- **GI**：嘔吐（可能有益於排出毒素）、腹瀉
- **心血管**（最危險）：
  - 心搏過緩（竇性/AV block）
  - 心室早期收縮（VPC）
  - 心室性心搏過速（VT）
  - 心室顫動（VF）→ 猝死
- **神經**：震顫、癲癇（嚴重時）

### 緊急處置

1. **口腔除汙**：大量清水沖洗口腔（向外沖，避免吞入）× 10-15 分鐘
2. **ECG 監測**（立即！）
3. **心搏過緩**：[藥物:Atropine] 0.02-0.04 mg/kg IV
4. **心室性心律不整**：[藥物:Lidocaine] 2 mg/kg IV bolus → 25-80 mcg/kg/min CRI（犬）
5. **脂肪乳劑**：[藥物:Intralipid] 20% — 1.5 mL/kg IV bolus → 0.25 mL/kg/min CRI × 30-60 分鐘
   - Lipid rescue 可螯合脂溶性 bufadienolides
6. **電解質矯正**：高血鉀者處理同 FUO（Calcium gluconate + insulin/dextrose）
7. **不催吐**：嘔吐反射通常已發生；毒素主要經口腔黏膜吸收而非 GI
8. **活性炭效果有限**（毒素快速吸收）

### 預後

輕度（僅口腔症狀 + 流涎）：預後良好。中度（心搏過緩 + 偶發 VPC）：積極治療預後佳。重度（VT/VF）：預後差，需積極抗心律不整與 lipid rescue。犬整體存活率因嚴重度差異大，輕中度 > 80%，重度心律不整 < 50%。

[圖片:台灣四大毒蛇辨識圖與咬傷局部表現]

## 二、臨床表現與診斷 (Clinical Signs & Diagnosis)

## 三、治療策略 (Treatment)

## 四、併發症與監控 (Complications & Monitoring)

## 五、預後與預後因子 (Prognosis)

## 六、人醫借鑒 (Translational Insights)

| 人醫工具/概念 | 獸醫應用潛力 | 現況 |
|-------------|-------------|------|
| 體外膜氧合（ECMO） | 犬嚴重急性呼吸窘迫/心因性休克 | 人醫成熟技術，獸醫因成本極少使用 |
| 毒物即時檢測（POC toxicology） | 犬中毒即時確認毒物種類 | 人醫快速檢測套組，獸醫可用性有限 |
| 治療性低溫（targeted temperature management） | 犬心停復甦後腦保護 | 人醫已為標準，獸醫初步研究 |
| 血漿交換（plasmapheresis） | 犬嚴重免疫介導疾病急救 | 少數獸醫轉介中心可執行 |

## 七、臨床爭議與知識空缺 (Controversies & Knowledge Gaps)

| 爭議議題 | 現況 | Evidence Level |
|---------|------|---------------|
| 犬 GDV 術後心律不整的治療閾值 | Lidocaine 何時開始？VPC rate >20/min vs 出現 R-on-T 的爭議 | Level III |
| 犬中毒洗胃 vs 催吐 vs 活性碳的適用時機 | 催吐時間窗（2 小時）、活性碳對特定毒物效果的個別化決策 | Level II |
| 犬急性腎損傷的體液治療量 | 傳統大量輸液 vs 限制性輸液策略——獸醫缺乏比較數據 | Level III |
| 犬蛇咬傷抗毒血清的劑量與重複給藥標準 | 台灣蛇種特異性數據不足，多參考國際經驗 | Level III |`,
  clinical_pearl: '雨傘節咬傷是台灣蛇咬最危險的「陷阱」——初期幾乎不痛、牙痕小到看不見，飼主常以為沒事。但 alpha-bungarotoxin 是不可逆的 nAChR 拮抗劑，一旦神經肌肉接合點被佔滿就無法逆轉，只能靠呼吸機支持等待新受體合成（可能需要數週）。所以兩個黃金原則：(1) 在有蛇出沒的季節，犬突然出現眼瞼下垂 + 瞳孔散大就要想到雨傘節；(2) 抗蛇毒血清越早給越好，不要等神經症狀全部出現才給。',
  common_mistakes: [
    '對蛇咬傷執行切開吸毒或綁止血帶——已證實無效且增加組織壞死風險',
    '雨傘節咬傷因「看起來沒事」而低估——6-12 小時後可能呼吸衰竭',
    '出血毒型蛇咬傷早期使用 NSAIDs 止痛——加重凝血障礙',
    '蟾蜍中毒忘記沖洗口腔——口腔黏膜持續吸收毒素',
    '蟾蜍中毒未做 ECG 監測就出院——心律不整可能延遲出現',
  ],
  disease_data: {
    signalment: '蛇咬傷：犬遠多於貓（犬好奇追咬蛇，貓較謹慎）。戶外活動犬、田園犬風險最高。台灣 4-10 月（溫暖潮濕季節）高峰期。蟾蜍中毒：犬為主（舔咬蟾蜍），小型犬因劑量相對高風險更大。台灣雨季（5-9 月）蟾蜍活動頻繁。',
    etiology: '蛇咬傷：遭毒蛇主動或被動攻擊。台灣最常見為龜殼花（約 60%），其次百步蛇（約 20%）、雨傘節（約 10%）、眼鏡蛇（約 10%）。蟾蜍中毒：犬舔咬或叼咬盤古蟾蜍（Bufo bankorensis），耳後腺分泌 bufotoxin 經口腔黏膜快速吸收。',
    pathogenesis: '【出血毒蛇（百步蛇/龜殼花）】蛇毒 metalloproteinase → 血管內皮損傷 → 組織壞死；蛇毒磷脂酶 A2 → 血小板功能障礙；蛇毒凝血酶樣物質 → 消耗性凝血病 → DIC。【神經毒蛇（雨傘節）】alpha-bungarotoxin 不可逆結合 postsynaptic nAChR → 神經肌肉接合點阻斷 → 骨骼肌麻痺（包括呼吸肌）。beta-bungarotoxin 破壞 presynaptic terminal → ACh 釋放障礙。【蟾蜍毒素】Bufadienolides 抑制 Na+/K+-ATPase → 細胞內 Na+ 升高 → Na+/Ca2+ 交換器反轉 → 細胞內 Ca2+ 升高 → 心肌自動節律異常 → 心律不整。',
    clinical_signs: [
      { sign: '咬傷處腫脹/壞死（出血毒）', category: 'primary', description: '百步蛇最劇烈，腫脹可擴及整肢' },
      { sign: '凝血異常/自發出血（出血毒）', category: 'primary', description: 'PT/aPTT 延長，DIC 表現' },
      { sign: '漸進性肌肉麻痺（神經毒）', category: 'primary', description: '眼瞼下垂→吞嚥困難→呼吸肌麻痺' },
      { sign: '大量流涎/抓嘴（蟾蜍）', category: 'primary', description: '接觸後 15 分鐘內出現' },
      { sign: '心搏過緩/VPC（蟾蜍）', category: 'primary', description: 'Bufadienolides 的強心苷樣效應' },
      { sign: '呼吸衰竭（雨傘節）', category: 'secondary', description: '呼吸肌完全麻痺，為致死主因' },
    ],
    staging: null,
    differential_diagnosis: [
      { condition: '蜜蜂/胡蜂螫傷', key_differentiator: '通常為多處小型紅腫而非雙牙痕，可併過敏性休克但無凝血異常' },
      { condition: '外傷性傷口感染', key_differentiator: '無典型雙牙痕、無快速向心性腫脹、白血球升高為主' },
      { condition: '免疫介導性血小板低下（ITP）', key_differentiator: '無咬傷史、瘀斑分佈廣泛、Coombs/ANA 可能陽性' },
      { condition: '重症肌無力', key_differentiator: '慢性進行性肌肉無力，無急性蛇暴露史，Neostigmine 反應佳' },
      { condition: 'Digitalis 中毒', key_differentiator: '與蟾蜍中毒 ECG 表現相似，需確認暴露史（蟾蜍 vs 毛地黃植物/藥物）' },
    ],
    diagnostic_workup: '【蛇咬傷】1. 辨識蛇種（照片/描述）→ 2. ABCDE → 3. 咬傷處評估（牙痕型態、腫脹範圍標記追蹤）→ 4. 基礎血檢 + 凝血全套（出血毒 q4-6h）→ 5. 血氣 → 6. 尿液分析（血紅素尿/肌球蛋白尿）→ 7. ECG 【蟾蜍中毒】1. 暴露史確認 → 2. ECG（立即！）→ 3. 電解質（K+）→ 4. 基礎血檢',
    treatment_protocol: '【Primary care — 穩定/初步處置】蛇咬傷：ABCDE 穩定。不切開、不吸毒、不止血帶。IV 通路+採血。止痛（opioid，不用 NSAIDs）。記錄腫脹範圍邊界。聯繫可提供抗蛇毒血清的醫院。蟾蜍：大量清水沖洗口腔 15 分鐘。ECG 監測。心搏過緩：Atropine 0.02-0.04 mg/kg IV。轉診至有 ICU 設備醫院。【Specialty care — ICU 管理】蛇咬傷：抗蛇毒血清（出血性/神經性，依蛇種選用）slow IV，備好 Epinephrine 處理過敏。出血毒型：凝血 q4-6h，FFP，傷口清創。雨傘節：早期插管 + 機械通氣，Neostigmine 試驗，可能需通氣支持數天至數週。蟾蜍：Lidocaine 2 mg/kg IV（VPC/VT），Intralipid 20% lipid rescue，電解質矯正，ECG 監測 24 小時。',
    prognosis: '龜殼花咬傷：經適當治療存活率 > 95%。百步蛇咬傷：存活率約 80-85%（取決於蛇毒量與就醫時間），局部壞死可能需多次清創。雨傘節咬傷：早期 antivenom + 呼吸支持存活率 > 80%；延遲治療致完全呼吸肌麻痺者需長期通氣。蟾蜍中毒：輕中度存活率 > 80%；重度心律不整（VT/VF）存活率 < 50%。',
    monitoring: '出血毒型蛇咬：凝血功能（PT/aPTT/fibrinogen/D-dimer）q4-6h × 48 小時。腫脹範圍 q2-4h 標記追蹤。BUN/Cre q12h（肌球蛋白腎病）。PCV/TP q6-8h。雨傘節：呼吸力量、SpO2、ETCO2 持續監測。神經學檢查 q4-6h。通氣參數追蹤。蟾蜍：ECG 持續監測至少 24 小時。電解質 q4-6h。',
    owner_communication: '蛇咬傷在台灣並不罕見，尤其在郊區和山區。如果懷疑被蛇咬，請盡量拍照辨識蛇種，不要嘗試抓蛇或處理傷口，立即送醫。出血毒型蛇咬傷（百步蛇/龜殼花）需要抗蛇毒血清和凝血治療；神經毒型（雨傘節）可能需要呼吸機支持。蟾蜍中毒方面，如果看到狗在舔或咬蟾蜍，立即用大量清水沖洗口腔，然後緊急就醫。預防最重要：散步時注意蛇出沒區域，雨季傍晚注意庭院蟾蜍活動。',
  },
  diagnostic_data: null,
  procedure_data: null,
  visual_placeholders: [
    { position: '四大毒蛇表格後', type: 'annotated_image', description: '台灣四大毒蛇外觀辨識圖（含牙痕對照）' },
    { position: '蟾蜍段落前', type: 'annotated_image', description: '盤古蟾蜍外觀與耳後腺位置標示圖' },
    { position: '治療段落後', type: 'flowchart', description: '蛇咬傷急診處置決策流程圖（出血毒 vs 神經毒）' },
  ],
  interactive_placeholders: [],
  drug_api_links: ['Atropine', 'Lidocaine', 'Neostigmine', 'Diphenhydramine', 'Dexamethasone', 'Epinephrine', 'Buprenorphine'],
  references: [
    { type: 'textbook', citation: 'Silverstein DC, Hopper K. Small Animal Critical Care Medicine, 3rd ed. Elsevier, 2022. Chapter: Envenomation.', relevance: 'ECC 核心教材蛇咬傷章節' },
    { type: 'journal', citation: 'Peterson ME. Snake bite: pit vipers. Clin Tech Small Anim Pract. 2006;21(4):174-182.', relevance: '蝮蛇科蛇咬傷臨床處置' },
    { type: 'guideline', citation: '台灣疾病管制署。台灣蛇咬傷急救指引。衛生福利部疾病管制署出版。', relevance: '台灣官方蛇咬傷急救指引（含抗蛇毒血清使用）' },
    { type: 'journal', citation: 'Mirtschin PJ, Dunstan N, Hough B, et al. Venom yields from Australian and some other species of snakes. Ecotoxicology. 2006;15(6):531-538.', relevance: '蛇毒產量研究' },
    { type: 'journal', citation: 'Gwaltney-Brant SM, Dunayer EK, Youssef HY. Terrestrial zootoxins. In: Veterinary Toxicology, 3rd ed. Academic Press, 2018.', relevance: '蟾蜍中毒獸醫毒理學參考' },
  ],
  is_current: true,
  created_at: now,
};

/** ECC-L0-001 急診加護總覽 — 概念型 */
const contentECCOverview: NodeContent = {
  id: 'CONTENT-ECC-L0-001',
  node_id: 'ECC-L0-001',
  version: 1,
  summary: '急診與加護醫學（Emergency and Critical Care, ECC）是獸醫學中專注於危及生命之急性病症的穩定、診斷與治療的專科。涵蓋急診分診、休克復甦、重症監護、中毒處置、創傷管理與心肺復甦等核心領域。ECC 的哲學核心為「時間就是生命」，強調系統性評估（ABCDE）、優先處理最致命問題、以及團隊協作。DACVECC 為美國獸醫急診暨重症醫學專科認證。',
  learning_objectives: [
    '描述 ECC 專科的範疇、核心理念與臨床角色',
    '列出 ECC 六層知識架構（基礎科學→病理機轉→臨床疾病→診斷方法→治療管理）',
    '辨識急診醫學與重症加護醫學的差異與互補關係',
    '說明台灣小動物急診醫學的現況與發展趨勢',
  ],
  key_points: [
    'ECC 核心理念：Stabilize first, diagnose second（先穩定再診斷）',
    '急診醫學（Emergency Medicine）聚焦前 1-6 小時的穩定與初步處置',
    '重症加護醫學（Critical Care）聚焦持續性器官支持與 ICU 管理',
    'ABCDE 系統性評估為所有急診病患的起點',
    '休克辨識與復甦是 ECC 最核心的臨床技能',
    'ECC 與其他專科高度交叉：心臟科（心因性休克）、神經科（癲癇重積）、外科（創傷）、內科（DKA）',
    '台灣 ECC 特色議題：中暑（亞熱帶氣候）、蛇咬傷（本土毒蛇）、蟾蜍中毒（盤古蟾蜍）',
    'RECOVER 指引為獸醫 CPR 的循證標準',
  ],
  body: `# 急診加護醫學總覽 (Emergency & Critical Care Overview)

## 一、核心概念與機轉 (Core Concept & Mechanism)



### 專科定義與範疇
急診與加護醫學是獸醫學中處理危及生命之急性病症的專科，涵蓋從病患到院的初始評估與穩定，到 ICU 中的持續監護與器官支持。

### 急診醫學 vs 重症加護
- **急診醫學**：聚焦最初數小時——快速評估、穩定危及生命問題、啟動診斷與治療
- **重症加護**：聚焦持續性管理——多重器官功能監測與支持、機械通氣、血液動力學優化

### 核心知識架構
ECC 專科知識以六層架構組織：

| 層級 | 名稱 | 內容範例 |
|------|------|---------|
| L0 | 學科總覽 | 本節——專科定義與架構 |
| L1 | 基礎科學 | 休克生理學、體液電解質平衡、酸鹼平衡 |
| L2 | 病理機轉 | SIRS/敗血症、MODS、DIC、中毒機轉 |
| L3 | 臨床疾病 | 過敏性休克、DKA、中暑、FUO、癲癇重積、中毒各論 |
| L4 | 診斷方法 | ABCDE 分診、AFAST/TFAST 急診超音波 |
| L5 | 治療管理 | 輸液治療、CPR、輸血、止痛、營養支持 |

### ECC 的臨床哲學
1. **先穩定再診斷**：生命威脅的處理優先於精確診斷
2. **系統性評估**：ABCDE 確保不遺漏致命問題
3. **時間敏感性**：許多 ECC 疾病的預後與處置時間高度相關
4. **團隊協作**：CPR、多重創傷等需要多人分工同步執行
5. **持續再評估**：病情可能快速變化，需反覆評估與調整

### 台灣 ECC 特色
台灣因地理與氣候特殊性，有若干區域特色急診議題：
- **中暑**：亞熱帶高溫高濕，短頭種犬風險極高，全年可見
- **毒蛇咬傷**：百步蛇、龜殼花、雨傘節、眼鏡蛇為四大毒蛇
- **蟾蜍中毒**：盤古蟾蜍（Bufo bankorensis）為台灣特有種
- **常見居家中毒**：百合（貓）、木糖醇/巧克力（犬）在台灣家庭均常見

### 專科認證
- **DACVECC**（Diplomate, American College of Veterinary Emergency and Critical Care）為國際認可的 ECC 專科認證
- 台灣目前無獨立 ECC 專科認證制度，但多家教學醫院設有急診科與 ICU

[圖片:ECC 六層知識架構總覽圖]

## 二、臨床意義 (Clinical Significance)

## 三、人醫借鑒 (Translational Insights)

| 人醫工具/概念 | 獸醫應用潛力 | 現況 |
|-------------|-------------|------|
| Point-of-care 超音波（POCUS） | 犬貓急診即時心肺腹超音波評估 | 獸醫急診 POCUS 教育快速普及 |
| RECOVER CPR 指引 | 犬貓心肺復甦標準化——基於人醫 AHA 指引 | 2012 年首版已發布，獸醫普及度增加 |
| 急診 AI 分診系統 | 犬貓急診嚴重度自動評估 | 人醫已有成熟系統，獸醫研發中 |

## 四、臨床爭議與知識空缺 (Controversies & Knowledge Gaps)

| 爭議議題 | 現況 | Evidence Level |
|---------|------|---------------|
| 獸醫急診分診系統的標準化 | 各系統（VTS, ATT, APPLE）的比較驗證不足 | Level III |
| 犬貓 CPR 存活率的真實數據 | RECOVER 登錄處報告 ROSC ~45% 但出院存活僅 ~5-10% | Level II |`,
  clinical_pearl: 'ECC 最重要的觀念是「不要被嚇到而失去系統性」。面對瀕死的急診病患，最容易犯的錯是手忙腳亂地東做一點西做一點。永遠記住：A-B-C-D-E，按順序走一遍，處理最致命的問題。這個順序在任何急診場景都適用，從過敏性休克到多重創傷到中毒。',
  common_mistakes: [
    '跳過系統性評估直接做檢查——應先 ABCDE 穩定再診斷',
    '被外觀嚇人的問題吸引注意力而忽略更致命的隱匿問題',
    '急診場景中缺乏團隊溝通與角色分配',
    '未認知時間敏感性——拖延數小時的處置可能致命',
  ],
  disease_data: null,
  diagnostic_data: null,
  procedure_data: null,
  visual_placeholders: [
    { position: '知識架構表格後', type: 'mind_map', description: 'ECC 六層知識架構心智圖' },
  ],
  interactive_placeholders: [],
  drug_api_links: [],
  references: [
    { type: 'textbook', citation: 'Silverstein DC, Hopper K. Small Animal Critical Care Medicine, 3rd ed. Elsevier, 2022.', relevance: 'ECC 核心教材總論' },
    { type: 'textbook', citation: 'Drobatz KJ, Hopper K, Rozanski EA, Silverstein DC. Textbook of Small Animal Emergency Medicine. Wiley-Blackwell, 2019.', relevance: '小動物急診醫學教材' },
    { type: 'guideline', citation: 'Fletcher DJ, Boller M, Brainard BM, et al. RECOVER evidence and knowledge gap analysis on veterinary CPR. JVECC. 2012;22(s1).', relevance: 'RECOVER CPR 循證指引' },
    { type: 'journal', citation: 'Hall K, Holowaychuk M, Sharp CR, et al. Multicenter prospective evaluation of dogs with trauma. JAVMA. 2014;244(3):300-308.', relevance: '犬急診創傷多中心前瞻性研究' },
  ],
  is_current: true,
  created_at: now,
};

/** ECC-L1-001 休克生理學 — 概念型 */
const contentShockPhysiology: NodeContent = {
  id: 'CONTENT-ECC-L1-001',
  node_id: 'ECC-L1-001',
  version: 1,
  summary: '休克是組織氧供（oxygen delivery, DO2）無法滿足組織氧需（oxygen consumption, VO2）的狀態，導致細胞缺氧與器官功能障礙。依病因分為四大類：低血容性（hypovolemic）、分布性（distributive）、心因性（cardiogenic）、阻塞性（obstructive）。休克的代償期可維持血壓正常但組織灌流已不足（隱匿性休克），因此不能僅靠血壓判斷。乳酸（lactate）為全身組織灌流不足的敏感指標，> 2.5 mmol/L 提示組織缺氧。',
  learning_objectives: [
    '定義休克並描述氧供-氧需失衡的核心概念',
    '分類四大休克類型並列舉各類型的常見獸醫病因',
    '描述休克的代償機制（交感神經、RAAS、ADH）及其臨床表現',
    '區分代償期與失代償期休克的臨床差異',
    '運用乳酸與灌流指標評估休克嚴重度',
  ],
  key_points: [
    '休克 = 組織氧供不足（DO2 < VO2）→ 細胞缺氧 → 無氧代謝 → 乳酸堆積 → 器官衰竭',
    '四大類型：低血容性（失血/脫水）、分布性（敗血症/過敏）、心因性（心衰竭）、阻塞性（心包填塞/GDV/PE）',
    '犬休克徵象：心搏過速、脈搏微弱、CRT 延長、黏膜蒼白、低血壓、低體溫',
    '貓休克徵象：心搏過緩（！與犬不同）、低體溫、黏膜蒼白、嗜睡——貓的休克更隱匿',
    '代償期休克：血壓可能正常（交感代償），但乳酸已升高、CRT 延長',
    'Lactate > 2.5 mmol/L = 組織灌流不足；> 4.5 mmol/L = 嚴重休克',
    '休克復甦目標：MAP > 60-80 mmHg、乳酸下降趨勢、CRT < 2 秒、尿量 > 1 mL/kg/hr',
    'DO2 = CO × CaO2 = (HR × SV) × (1.34 × Hb × SaO2)——任何環節異常都可致休克',
  ],
  body: `# 休克生理學 (Shock Physiology)

## 一、核心概念與機轉 (Core Concept & Mechanism)



### 定義
休克是組織氧供（DO2）無法滿足組織氧需（VO2）的病理生理狀態，導致細胞層級的缺氧、無氧代謝啟動、乳酸堆積、最終造成不可逆的細胞死亡與器官衰竭。

### 氧供方程式
DO2 = CO × CaO2
- CO（心輸出量）= HR × SV（心率 × 每搏輸出量）
- CaO2（動脈血氧含量）= (1.34 × Hb × SaO2) + (0.003 × PaO2)

任何降低 CO 或 CaO2 的因素都可導致休克。

### 四大休克分類
| 類型 | 機轉 | 常見病因 | 前負荷 | CO | SVR |
|------|------|---------|--------|-----|-----|
| 低血容性 | 有效循環容量減少 | 失血、脫水、第三間隙流失 | ↓ | ↓ | ↑ |
| 分布性 | 血管阻力下降 | 敗血症、過敏性休克、SIRS | ↓/N | ↑(早)/↓(晚) | ↓ |
| 心因性 | 心臟泵功能障礙 | DCM、心律不整、瓣膜病 | ↑ | ↓ | ↑ |
| 阻塞性 | 機械性阻礙心輸出 | 心包填塞、GDV、肺栓塞、張力性氣胸 | ↓(有效) | ↓ | ↑ |

### 代償機制
1. **交感神經系統活化**：心率↑、心肌收縮力↑、周邊血管收縮→維持血壓
2. **RAAS 活化**：Angiotensin II 血管收縮 + Aldosterone 鈉水回吸收→維持血容
3. **ADH 分泌增加**：水分回吸收→維持血容
4. **血管內皮自我調節**：局部代謝產物維持重要器官灌流（心、腦）

### 代償期 vs 失代償期
| 指標 | 代償期 | 失代償期 |
|------|--------|---------|
| 血壓 | 正常（交感代償） | 低血壓 |
| 心率 | 犬心搏過速/貓可正常 | 犬持續過速/貓心搏過緩 |
| 黏膜 | 粉紅至淡粉紅 | 蒼白/灰白/泥土色 |
| CRT | 正常至輕度延長 | 明顯延長 > 2-3 秒 |
| 乳酸 | 輕度升高 2.5-5 | 顯著升高 > 5 |
| 意識 | 正常至輕度焦躁 | 嗜睡至昏迷 |

### 乳酸與灌流監測
- Lactate < 2.5 mmol/L：正常
- Lactate 2.5-4.5 mmol/L：輕中度組織灌流不足
- Lactate > 4.5 mmol/L：嚴重組織缺氧
- 乳酸清除率（lactate clearance）比單次數值更有預後價值：6 小時內下降 > 50% 預後較佳

## 二、臨床意義 (Clinical Significance)

### 犬 vs 貓的休克表現差異
犬：典型高動力代償→心搏過速、黏膜充血（早期分布性）→後期蒼白、低血壓
貓：低動力為主→心搏過緩、低體溫、黏膜蒼白——**貓的休克更隱匿，更容易被低估**

[圖片:四大休克類型血流動力學比較圖]

## 三、人醫借鑒 (Translational Insights)

| 人醫工具/概念 | 獸醫應用潛力 | 現況 |
|-------------|-------------|------|
| 體外膜氧合（ECMO） | 犬嚴重急性呼吸窘迫/心因性休克 | 人醫成熟技術，獸醫因成本極少使用 |
| 毒物即時檢測（POC toxicology） | 犬中毒即時確認毒物種類 | 人醫快速檢測套組，獸醫可用性有限 |
| 治療性低溫（targeted temperature management） | 犬心停復甦後腦保護 | 人醫已為標準，獸醫初步研究 |
| 血漿交換（plasmapheresis） | 犬嚴重免疫介導疾病急救 | 少數獸醫轉介中心可執行 |

## 四、臨床爭議與知識空缺 (Controversies & Knowledge Gaps)

| 爭議議題 | 現況 | Evidence Level |
|---------|------|---------------|
| 犬 GDV 術後心律不整的治療閾值 | Lidocaine 何時開始？VPC rate >20/min vs 出現 R-on-T 的爭議 | Level III |
| 犬中毒洗胃 vs 催吐 vs 活性碳的適用時機 | 催吐時間窗（2 小時）、活性碳對特定毒物效果的個別化決策 | Level II |
| 犬急性腎損傷的體液治療量 | 傳統大量輸液 vs 限制性輸液策略——獸醫缺乏比較數據 | Level III |
| 犬蛇咬傷抗毒血清的劑量與重複給藥標準 | 台灣蛇種特異性數據不足，多參考國際經驗 | Level III |`,
  clinical_pearl: '休克最危險的陷阱是「代償期」——血壓還正常，看起來「還好」，但組織已經在缺氧。不要等到血壓掉了才開始治療。學會看早期徵象：CRT 輕度延長、脈搏品質稍弱、乳酸微升、精神略差。尤其貓——貓在代償期幾乎看不出來，直接進入失代償就是心搏過緩 + 低體溫 + 瀕死。',
  common_mistakes: [
    '僅用血壓判斷有無休克——代償期血壓可正常，應同時評估乳酸與灌流指標',
    '將貓的心搏過緩誤認為「穩定」——貓休克常表現心搏過緩而非過速',
    '未區分休克類型就開始輸液——心因性休克大量輸液會加重肺水腫',
    '忽略乳酸清除率——比單次乳酸值更能預測預後',
  ],
  disease_data: null,
  diagnostic_data: null,
  procedure_data: null,
  visual_placeholders: [
    { position: '四大分類表格後', type: 'flowchart', description: '休克分類與鑑別診斷決策流程圖' },
    { position: '氧供方程式段落', type: 'animated_diagram', description: 'DO2 方程式互動圖——調整各參數觀察 DO2 變化' },
  ],
  interactive_placeholders: [],
  drug_api_links: [],
  references: [
    { type: 'textbook', citation: 'Silverstein DC, Hopper K. Small Animal Critical Care Medicine, 3rd ed. Elsevier, 2022. Chapter: Shock.', relevance: 'ECC 核心教材休克章節' },
    { type: 'journal', citation: 'Boag AK, Hughes D. Assessment and treatment of perfusion abnormalities in the emergency patient. Vet Clin North Am Small Anim Pract. 2005;35(2):319-342.', relevance: '急診灌流評估與治療' },
    { type: 'journal', citation: 'Cortellini S, Seth M, Kellett-Gregory LM. Plasma lactate concentrations in septic peritonitis: a retrospective study of 83 dogs (2007-2012). JVECC. 2015;25(3):388-395.', relevance: '乳酸與敗血症預後研究' },
    { type: 'guideline', citation: 'Davis H, Jensen T, Johnson A, et al. 2013 AAHA/AAFP fluid therapy guidelines for dogs and cats. JAAHA. 2013;49(3):149-159.', relevance: 'AAHA/AAFP 輸液指引——休克復甦的液體選擇與劑量' },
  ],
  is_current: true,
  created_at: now,
};

/** ECC-L1-002 體液與電解質平衡 — 概念型 */
const contentFluidElectrolyte: NodeContent = {
  id: 'CONTENT-ECC-L1-002',
  node_id: 'ECC-L1-002',
  version: 1,
  summary: '體液與電解質平衡是 ECC 的基礎科學核心。體液分佈於細胞內液（ICF, 60%）與細胞外液（ECF, 40%），ECF 再分為血漿（25%）與間質液（75%）。電解質異常（尤其 Na+、K+、Ca2+）可直接致命。鈉決定水的分佈（滲透壓），鉀決定心臟與肌肉的興奮性。急診中最危險的電解質異常為高血鉀（心律不整→心跳停止）與嚴重低血鈣（癲癇、心律不整）。',
  learning_objectives: [
    '描述體液分佈（ICF/ECF/血漿/間質液）及其臨床意義',
    '解釋 Starling 力量如何決定血管內外液體交換',
    '列出急診中最常見且最危險的電解質異常',
    '計算脫水缺損量與維持輸液量',
    '描述高血鉀與低血鉀的 ECG 變化與緊急處置',
  ],
  key_points: [
    '體液分佈：TBW 60% 體重。ICF 2/3，ECF 1/3（血漿 1/4 ECF，間質液 3/4 ECF）',
    '晶體液（LRS、0.9% NaCl）分佈至整個 ECF——僅 25% 留在血管內',
    '膠體液（Hetastarch、白蛋白）主要留在血管內——擴容效率較高但有副作用',
    '脫水評估：< 5%（無明顯徵象）、5-7%（皮膚彈性下降）、8-10%（眼窩凹陷、CRT 延長）、> 12%（休克）',
    '脫水補充量(mL) = 體重(kg) × 脫水百分比(%) × 10',
    '維持輸液量：犬貓約 40-60 mL/kg/day',
    '高血鉀（> 6.5 mEq/L）→ T 波高尖 → P 波消失 → QRS 增寬 → 心跳停止',
    '低血鉀（< 3.0 mEq/L）→ 肌肉無力（貓頸部腹屈 ventroflexion）、腸麻痺、心律不整',
    '低血鈣（iCa < 0.8 mmol/L）→ 面部搔抓、肌肉震顫、癲癇',
  ],
  body: `# 體液與電解質平衡 (Fluid & Electrolyte Balance)

## 一、核心概念與機轉 (Core Concept & Mechanism)



### 體液分佈
| 區間 | 佔體重比例 | 佔 TBW 比例 | 臨床意義 |
|------|-----------|------------|---------|
| 細胞內液 (ICF) | 40% | 2/3 | K+ 為主要陽離子 |
| 細胞外液 (ECF) | 20% | 1/3 | Na+ 為主要陽離子 |
| — 血漿 | 5% | ECF 的 1/4 | 輸液復甦的目標區間 |
| — 間質液 | 15% | ECF 的 3/4 | 脫水徵象的來源 |

### Starling 力量與液體交換
液體在血管內外的移動取決於四個力量：
- 毛細血管靜水壓（推出血管）
- 間質靜水壓（推入血管）
- 血漿膠體滲透壓（拉入血管）——主要由白蛋白維持
- 間質膠體滲透壓（拉出血管）

**臨床意義**：低白蛋白血症（< 1.5 g/dL）→ 膠體滲透壓下降 → 液體滲出至間質 → 水腫

### 脫水評估與計算
| 脫水程度 | 臨床徵象 |
|---------|---------|
| < 5% | 無明顯徵象，病史推估 |
| 5-7% | 皮膚彈性輕度下降、黏膜略乾 |
| 7-9% | 皮膚彈性明顯下降、眼窩輕度凹陷、CRT 延長 |
| 10-12% | 皮膚帳篷持久、眼窩明顯凹陷、休克前期 |
| > 12% | 休克、低血壓、瀕死 |

**脫水補充公式**：缺損量(mL) = 體重(kg) × 脫水%(小數) × 1000

### 主要電解質異常
### 鈉 (Na+)
- 正常範圍：犬 140-155 mEq/L，貓 149-162 mEq/L
- **高血鈉**（> 170 mEq/L）：CNS 脫水→嗜睡、震顫、癲癇。矯正速率 ≤ 0.5-1 mEq/L/hr（過快致腦水腫）
- **低血鈉**（< 130 mEq/L）：CNS 水腫→嗜睡、癲癇。矯正速率 ≤ 0.5 mEq/L/hr（過快致滲透性脫髓鞘）

### 鉀 (K+)
- 正常範圍：犬貓 3.5-5.5 mEq/L
- **高血鉀**（> 6.5）：ECG 變化→T 波高尖→P 波消失→QRS 增寬→sine wave→VF/asystole
- **低血鉀**（< 3.0）：肌肉無力（貓頸部腹屈 ventroflexion 為經典表現）、腸麻痺、多尿

### 鈣 (Ca2+)
- 正常 iCa：1.0-1.4 mmol/L
- **低血鈣**（iCa < 0.8）：面部搔抓（貓）、肌肉震顫、癲癇、心搏過速
- 常見於：產後子癇（eclampsia）、胰臟炎、乙二醇中毒、大量輸血（枸櫞酸螯合）

[圖片:體液區間分佈與晶體/膠體液分佈比較圖]

## 二、臨床意義 (Clinical Significance)

## 三、人醫借鑒 (Translational Insights)

| 人醫工具/概念 | 獸醫應用潛力 | 現況 |
|-------------|-------------|------|
| 體外膜氧合（ECMO） | 犬嚴重急性呼吸窘迫/心因性休克 | 人醫成熟技術，獸醫因成本極少使用 |
| 毒物即時檢測（POC toxicology） | 犬中毒即時確認毒物種類 | 人醫快速檢測套組，獸醫可用性有限 |
| 治療性低溫（targeted temperature management） | 犬心停復甦後腦保護 | 人醫已為標準，獸醫初步研究 |
| 血漿交換（plasmapheresis） | 犬嚴重免疫介導疾病急救 | 少數獸醫轉介中心可執行 |

## 四、臨床爭議與知識空缺 (Controversies & Knowledge Gaps)

| 爭議議題 | 現況 | Evidence Level |
|---------|------|---------------|
| 犬 GDV 術後心律不整的治療閾值 | Lidocaine 何時開始？VPC rate >20/min vs 出現 R-on-T 的爭議 | Level III |
| 犬中毒洗胃 vs 催吐 vs 活性碳的適用時機 | 催吐時間窗（2 小時）、活性碳對特定毒物效果的個別化決策 | Level II |
| 犬急性腎損傷的體液治療量 | 傳統大量輸液 vs 限制性輸液策略——獸醫缺乏比較數據 | Level III |
| 犬蛇咬傷抗毒血清的劑量與重複給藥標準 | 台灣蛇種特異性數據不足，多參考國際經驗 | Level III |`,
  clinical_pearl: '急診中最容易被忽略的電解質異常是低血鉀。DKA 治療中胰島素驅鉀入細胞、嘔吐腹瀉流失鉀、輸液稀釋鉀——三管齊下可使血鉀在 1-2 小時內從正常暴跌至致命水平。規則：任何大量輸液或開始胰島素治療的病患，前 6 小時每 2-4 小時查一次 K+。',
  common_mistakes: [
    '僅用皮膚彈性評估脫水——老年消瘦動物皮膚彈性本就差，肥胖動物看不出脫水',
    '矯正高血鈉或低血鈉過快——CNS 併發症（腦水腫/脫髓鞘）可能比原始問題更致命',
    '忽略測量離子鈣（iCa）而僅看總鈣——低白蛋白時總鈣偏低但 iCa 可能正常',
    '大量輸液未監測電解質變化——稀釋性低鉀、低鈉可能被忽略',
  ],
  disease_data: null,
  diagnostic_data: null,
  procedure_data: null,
  visual_placeholders: [
    { position: '體液分佈表格後', type: 'animated_diagram', description: '體液區間分佈與晶體/膠體液分佈動態圖' },
    { position: '鉀異常段落', type: 'waveform', description: '高/低血鉀 ECG 變化比較圖' },
  ],
  interactive_placeholders: [
    { position: '脫水評估段落後', type: 'fluid_calculator', description: '脫水補充量計算器（輸入體重與脫水百分比）' },
  ],
  drug_api_links: ['Calcium Gluconate', 'Potassium Chloride'],
  references: [
    { type: 'textbook', citation: 'Silverstein DC, Hopper K. Small Animal Critical Care Medicine, 3rd ed. Elsevier, 2022. Chapter: Fluid, Electrolyte, and Acid-Base Disturbances.', relevance: 'ECC 核心教材體液電解質章節' },
    { type: 'textbook', citation: 'DiBartola SP. Fluid, Electrolyte, and Acid-Base Disorders in Small Animal Practice, 4th ed. Elsevier, 2012.', relevance: '體液電解質專論教材' },
    { type: 'journal', citation: 'Hansen BD. Technical aspects of fluid therapy: daily maintenance, dehydration, and volume resuscitation. In: Fluid, Electrolyte, and Acid-Base Disorders. 2012:351-370.', relevance: '輸液技術層面參考' },
    { type: 'guideline', citation: 'Davis H, Jensen T, Johnson A, et al. 2013 AAHA/AAFP fluid therapy guidelines for dogs and cats. JAAHA. 2013;49(3):149-159.', relevance: 'AAHA/AAFP 輸液指引——電解質矯正與維持輸液標準' },
  ],
  is_current: true,
  created_at: now,
};

/** ECC-L1-003 酸鹼平衡 — 概念型 */
const contentAcidBase: NodeContent = {
  id: 'CONTENT-ECC-L1-003',
  node_id: 'ECC-L1-003',
  version: 1,
  summary: '酸鹼平衡是維持細胞正常功能的關鍵，正常動脈血 pH 7.35-7.45。酸鹼障礙分為呼吸性（CO2 變化）與代謝性（HCO3-/有機酸變化），各有酸中毒與鹼中毒。急診中最常見的酸鹼異常為代謝性酸中毒（乳酸堆積/酮酸血症/腎衰竭），嚴重酸中毒（pH < 7.1）可致心肌收縮力下降與對升壓劑反應減弱。血氣分析是評估酸鹼的金標準，急診醫師需能快速判讀並決定是否需要特異性矯正。',
  learning_objectives: [
    '描述 Henderson-Hasselbalch 方程式與酸鹼緩衝系統',
    '分類四種基本酸鹼障礙並判斷代償是否適當',
    '運用 anion gap 鑑別代謝性酸中毒的原因',
    '快速判讀血氣分析報告並擬定治療計畫',
    '掌握 NaHCO3 治療的適應症與風險',
  ],
  key_points: [
    '正常動脈血 pH 7.35-7.45，PCO2 35-45 mmHg，HCO3 20-24 mEq/L',
    '代謝性酸中毒是急診最常見酸鹼障礙——乳酸、酮酸、尿毒酸、毒物',
    'Anion gap = Na+ - (Cl- + HCO3-)，正常 12-16 mEq/L',
    '高 anion gap 酸中毒（MUDPILES）：Methanol、Uremia、DKA、Propylene glycol、Isoniazid/Iron、Lactic acidosis、Ethylene glycol、Salicylates',
    '正常 anion gap（高氯性）酸中毒：腹瀉、腎小管酸中毒、大量 0.9% NaCl 輸注',
    '呼吸代償公式（犬代謝性酸中毒）：預期 PCO2 = 1.5 × HCO3 + 8 ± 2',
    'NaHCO3 治療僅在 pH < 7.0-7.1 且血流動力學不穩時考慮——大部分酸中毒治療根本病因即可改善',
    '靜脈血氣（VBG）在急診中可替代動脈血氣（ABG）評估代謝酸鹼——pH 差約 0.03-0.05',
  ],
  body: `# 酸鹼平衡 (Acid-Base Balance)

## 一、核心概念與機轉 (Core Concept & Mechanism)



### 基礎概念
### Henderson-Hasselbalch 方程式
pH = 6.1 + log([HCO3-] / (0.03 × PCO2))

pH 由 HCO3-（代謝成分，腎臟調控）與 PCO2（呼吸成分，肺臟調控）的比值決定。

### 緩衝系統
1. 碳酸氫鹽系統（HCO3-/CO2）——最重要的細胞外緩衝
2. 血紅蛋白緩衝
3. 磷酸鹽緩衝
4. 蛋白質緩衝

### 四種基本酸鹼障礙
| 障礙 | pH | 原發變化 | 代償 | 常見急診病因 |
|------|-----|---------|------|------------|
| 代謝性酸中毒 | ↓ | HCO3 ↓ | PCO2 ↓（過度通氣） | 乳酸堆積、DKA、腎衰竭、乙二醇中毒 |
| 代謝性鹼中毒 | ↑ | HCO3 ↑ | PCO2 ↑（低通氣） | 嘔吐（胃酸流失）、利尿劑 |
| 呼吸性酸中毒 | ↓ | PCO2 ↑ | HCO3 ↑ | 氣道阻塞、呼吸肌麻痺、麻醉抑制 |
| 呼吸性鹼中毒 | ↑ | PCO2 ↓ | HCO3 ↓ | 疼痛、焦慮、代償性過度通氣、中暑 |

### 五步血氣分析判讀法
1. **看 pH**：酸中毒（< 7.35）或鹼中毒（> 7.45）？
2. **看 PCO2**：呼吸性成分——與 pH 反向變化為原發呼吸性
3. **看 HCO3**：代謝性成分——與 pH 同向變化為原發代謝性
4. **評估代償**：代償是否適當？不適當代償提示混合型酸鹼障礙
5. **計算 AG**：代謝性酸中毒時計算 AG 鑑別原因

### NaHCO3 治療
- **適應症**：pH < 7.0-7.1 且血流動力學不穩定（升壓劑無反應）
- **劑量**：0.5 × 體重(kg) × (目標HCO3 - 實測HCO3) × 0.3，先給一半 slow IV
- **風險**：矛盾性 CNS 酸中毒（CO2 穿越血腦屏障比 HCO3 快）、低血鉀加重、高鈉血症
- **大多數急診酸中毒不需要 NaHCO3**——治療根本病因（輸液、胰島素、透析）即可

[圖片:酸鹼平衡五步判讀流程圖]

## 二、臨床意義 (Clinical Significance)

## 三、人醫借鑒 (Translational Insights)

| 人醫工具/概念 | 獸醫應用潛力 | 現況 |
|-------------|-------------|------|
| 體外膜氧合（ECMO） | 犬嚴重急性呼吸窘迫/心因性休克 | 人醫成熟技術，獸醫因成本極少使用 |
| 毒物即時檢測（POC toxicology） | 犬中毒即時確認毒物種類 | 人醫快速檢測套組，獸醫可用性有限 |
| 治療性低溫（targeted temperature management） | 犬心停復甦後腦保護 | 人醫已為標準，獸醫初步研究 |
| 血漿交換（plasmapheresis） | 犬嚴重免疫介導疾病急救 | 少數獸醫轉介中心可執行 |

## 四、臨床爭議與知識空缺 (Controversies & Knowledge Gaps)

### Anion Gap (AG)
AG = Na+ - (Cl- + HCO3-)

| AG 分類 | 數值 | 原因 | 臨床記憶 |
|---------|------|------|---------|
| 高 AG | > 16 | 有機酸堆積 | MUDPILES |
| 正常 AG | 12-16 | HCO3 流失/Cl 增加 | 腹瀉、RTA、大量 NaCl |`,
  clinical_pearl: '急診中遇到代謝性酸中毒，第一步不是想怎麼矯正 pH，而是想「為什麼酸」。乳酸高？→ 改善灌流。酮體高？→ 胰島素 + 輸液。BUN 高？→ 腎臟問題。Anion gap 正常？→ 想腹瀉或 NaCl 過多。治療根本病因，酸中毒自然改善。盲目用 NaHCO3 可能製造更多問題。',
  common_mistakes: [
    '見到酸中毒就給 NaHCO3——大部分情況治療根本病因即可改善，NaHCO3 有副作用',
    '用靜脈血 PCO2 判斷呼吸功能——VBG 可評估代謝酸鹼但 PCO2 不準確，需 ABG',
    '忽略計算 anion gap——同為代謝性酸中毒，高 AG vs 正常 AG 的病因完全不同',
    '未評估代償是否適當——不適當代償提示混合型酸鹼障礙，需要不同處理',
  ],
  disease_data: null,
  diagnostic_data: null,
  procedure_data: null,
  visual_placeholders: [
    { position: '五步判讀段落', type: 'flowchart', description: '血氣分析五步判讀流程圖' },
    { position: '四種障礙表格後', type: 'comparison_table', description: '四種酸鹼障礙比較速查表' },
  ],
  interactive_placeholders: [
    { position: 'AG 段落後', type: 'abg_interpreter', description: '互動式血氣分析判讀器（輸入數值自動判讀）' },
  ],
  drug_api_links: ['Sodium Bicarbonate'],
  references: [
    { type: 'textbook', citation: 'Silverstein DC, Hopper K. Small Animal Critical Care Medicine, 3rd ed. Elsevier, 2022. Chapter: Acid-Base Disorders.', relevance: 'ECC 核心教材酸鹼章節' },
    { type: 'textbook', citation: 'DiBartola SP. Fluid, Electrolyte, and Acid-Base Disorders in Small Animal Practice, 4th ed. Elsevier, 2012.', relevance: '酸鹼障礙專論教材' },
    { type: 'journal', citation: 'Hopper K, Haskins SC, Kass PH, et al. Indications, management, and outcome of long-term positive-pressure ventilation in dogs and cats: 148 cases (1990-2001). JAVMA. 2007;230(1):64-75.', relevance: '呼吸性酸鹼障礙與通氣管理' },
    { type: 'guideline', citation: 'Davis H, Jensen T, Johnson A, et al. 2013 AAHA/AAFP fluid therapy guidelines for dogs and cats. JAAHA. 2013;49(3):149-159.', relevance: 'AAHA/AAFP 指引——酸鹼障礙的液體治療策略' },
  ],
  is_current: true,
  created_at: now,
};

/** ECC-L2-001 SIRS/敗血症機轉 — 機轉型 */
const contentSIRS: NodeContent = {
  id: 'CONTENT-ECC-L2-001',
  node_id: 'ECC-L2-001',
  version: 1,
  summary: '全身性發炎反應症候群（SIRS）是免疫系統對嚴重侵害的全身性非特異性發炎反應，可由感染（敗血症）或非感染因素（創傷、胰臟炎、中暑、燒傷）觸發。SIRS 的核心機轉為促炎細胞激素（TNF-alpha、IL-1、IL-6）大量釋放 → 全身性內皮活化 → 血管通透性增加 + 凝血級聯活化 → 組織灌流障礙。SIRS 未控制可進展至 MODS（多重器官功能障礙症候群），死亡率隨受累器官數量倍增。犬 SIRS 標準：心率 > 120、呼吸 > 20、體溫 > 39.2 或 < 37.8、WBC > 16000 或 < 6000（符合 ≥ 2 項）。',
  learning_objectives: [
    '定義 SIRS 並列出犬貓的診斷標準',
    '描述 SIRS 從觸發到 MODS 的病理生理級聯',
    '區分 SIRS 與 sepsis 的定義及其臨床差異',
    '列出非感染性 SIRS 的常見獸醫病因',
    '說明 SIRS 進展至 MODS 的風險因子與預後指標',
  ],
  key_points: [
    '犬 SIRS 標準（≥ 2/4）：HR > 120、RR > 20、T > 39.2 或 < 37.8、WBC > 16000 或 < 6000 或 bands > 3%',
    '貓 SIRS 標準不同：HR > 225 或 < 140、RR > 40、T > 39.7 或 < 37.8、WBC > 19500 或 < 5000',
    'Sepsis = SIRS + 確認或高度懷疑感染源',
    'Severe sepsis = Sepsis + 器官功能障礙（低血壓、寡尿、乳酸升高、意識改變）',
    'Septic shock = Severe sepsis + 對輸液復甦無反應的持續低血壓',
    '促炎級聯：PAMPs/DAMPs → TLR → NF-kB → TNF-alpha/IL-1/IL-6 → 全身性內皮活化',
    'SIRS → MODS 的關鍵橋梁：內皮功能障礙 → 微血栓形成 → 組織缺氧',
    '非感染性 SIRS 常見原因：重症胰臟炎、中暑、免疫介導性疾病、大面積創傷/手術',
  ],
  body: `# 全身性發炎反應 (SIRS) 與敗血症 (Sepsis)

## 一、核心概念與機轉 (Core Concept & Mechanism)



### 定義
| 名詞 | 定義 |
|------|------|
| SIRS | 全身性非特異性發炎反應，符合犬/貓特定標準 ≥ 2 項 |
| Sepsis | SIRS + 確認或高度懷疑的感染源 |
| Severe Sepsis | Sepsis + 器官功能障礙 |
| Septic Shock | Severe Sepsis + 輸液無反應的低血壓 |
| MODS | 多重器官功能障礙——2 個以上器官系統衰竭 |

### 病理生理級聯
### 觸發階段
感染源（PAMPs：LPS、PGN）或組織損傷（DAMPs：HMGB1、DNA）→ 被 PRR（如 TLR-4）辨識

### 炎症放大階段
TLR 活化 → NF-kB 路徑 → 大量促炎細胞激素釋放（TNF-alpha、IL-1beta、IL-6）→ 補體活化 → 凝血級聯活化

### 全身效應階段
- **血管**：全身性血管擴張 → 分布性休克
- **內皮**：通透性增加 → 組織水腫、有效循環容量下降
- **凝血**：微血管內血栓形成 → 消耗性凝血病（DIC）
- **代謝**：高代謝狀態、胰島素抗性、蛋白質分解加速

### MODS 階段
微血栓 + 組織水腫 → 器官灌流障礙 → 多重器官衰竭
- 常見受累順序：GI → 肺 → 腎 → 肝 → 心 → CNS
- 死亡率與器官數正相關：1 器官 ~25%、2 器官 ~50%、≥ 3 器官 ~80%

### 犬 vs 貓 SIRS 標準
| 參數 | 犬 | 貓 |
|------|-----|-----|
| 心率 | > 120 bpm | > 225 或 < 140 bpm |
| 呼吸速率 | > 20/min | > 40/min |
| 體溫 | > 39.2 或 < 37.8 C | > 39.7 或 < 37.8 C |
| WBC | > 16,000 或 < 6,000 | > 19,500 或 < 5,000 |

### 診斷要點
- SIRS 標準敏感度高但特異度低——許多非感染狀態也符合
- 感染源搜索：血液培養、尿液培養、腹腔液分析、影像學
- 生物標記：犬 CRP（升高）、PCT 研究中；乳酸作為灌流指標
- 目標導向治療（EGDT）：MAP > 65 mmHg、乳酸正常化、尿量 > 1 mL/kg/hr

[圖片:SIRS→Sepsis→MODS 級聯病理生理流程圖]

## 二、臨床意義 (Clinical Significance)

## 三、人醫借鑒 (Translational Insights)

| 人醫工具/概念 | 獸醫應用潛力 | 現況 |
|-------------|-------------|------|
| 體外膜氧合（ECMO） | 犬嚴重急性呼吸窘迫/心因性休克 | 人醫成熟技術，獸醫因成本極少使用 |
| 毒物即時檢測（POC toxicology） | 犬中毒即時確認毒物種類 | 人醫快速檢測套組，獸醫可用性有限 |
| 治療性低溫（targeted temperature management） | 犬心停復甦後腦保護 | 人醫已為標準，獸醫初步研究 |
| 血漿交換（plasmapheresis） | 犬嚴重免疫介導疾病急救 | 少數獸醫轉介中心可執行 |

## 四、臨床爭議與知識空缺 (Controversies & Knowledge Gaps)

| 爭議議題 | 現況 | Evidence Level |
|---------|------|---------------|
| 犬 GDV 術後心律不整的治療閾值 | Lidocaine 何時開始？VPC rate >20/min vs 出現 R-on-T 的爭議 | Level III |
| 犬中毒洗胃 vs 催吐 vs 活性碳的適用時機 | 催吐時間窗（2 小時）、活性碳對特定毒物效果的個別化決策 | Level II |
| 犬急性腎損傷的體液治療量 | 傳統大量輸液 vs 限制性輸液策略——獸醫缺乏比較數據 | Level III |
| 犬蛇咬傷抗毒血清的劑量與重複給藥標準 | 台灣蛇種特異性數據不足，多參考國際經驗 | Level III |`,
  clinical_pearl: '記住一個核心概念：SIRS 不等於感染。胰臟炎犬可以符合全部 4 項 SIRS 標準卻完全沒有感染。反之，免疫抑制動物（如化療中）可能有嚴重敗血症卻因白血球低下而不符合 SIRS 標準。SIRS 標準是「紅旗」，提示需要密切監測，但治療方向（抗生素 vs 非抗生素）取決於是否找到感染源。',
  common_mistakes: [
    '將所有符合 SIRS 標準的動物都當敗血症處理——非感染性 SIRS 不需要抗生素',
    '以犬的 SIRS 標準套用於貓——貓的心率與白血球正常值不同',
    '忽略 GI 屏障功能在 SIRS→MODS 中的角色——腸道細菌移位是重要惡化機轉',
    '延遲敗血症的抗生素治療——確認敗血症後每延遲 1 小時，死亡率增加 7%',
  ],
  disease_data: null,
  diagnostic_data: null,
  procedure_data: null,
  visual_placeholders: [
    { position: '病理生理級聯段落', type: 'flowchart', description: 'SIRS→Sepsis→MODS 級聯流程圖' },
  ],
  interactive_placeholders: [],
  drug_api_links: [],
  references: [
    { type: 'textbook', citation: 'Silverstein DC, Hopper K. Small Animal Critical Care Medicine, 3rd ed. Elsevier, 2022. Chapter: Systemic Inflammatory Response Syndrome.', relevance: 'ECC 核心教材 SIRS/Sepsis 章節' },
    { type: 'journal', citation: 'Hauptman JG, Walshaw R, Olivier NB. Evaluation of the sensitivity and specificity of diagnostic criteria for sepsis in dogs. Vet Surg. 1997;26(5):393-397.', relevance: '犬 SIRS/Sepsis 診斷標準驗證' },
    { type: 'journal', citation: 'Brady CA, Otto CM. Systemic inflammatory response syndrome, sepsis, and multiple organ dysfunction. Vet Clin North Am Small Anim Pract. 2001;31(6):1147-1162.', relevance: 'SIRS/MODS 綜合回顧' },
    { type: 'guideline', citation: 'Rhodes A, Evans LE, Alhazzani W, et al. Surviving Sepsis Campaign: international guidelines for management of sepsis and septic shock: 2016. Intensive Care Med. 2017;43(3):304-377.', relevance: 'Surviving Sepsis Campaign 國際指引——獸醫改編敗血症管理的參考基礎' },
  ],
  is_current: true,
  created_at: now,
};

/** ECC-L2-002 多重器官功能障礙(MODS) — 機轉型 */
const contentMODS: NodeContent = {
  id: 'CONTENT-ECC-L2-002',
  node_id: 'ECC-L2-002',
  version: 1,
  summary: '多重器官功能障礙症候群（MODS）是 SIRS/Sepsis 的最嚴重結局，定義為兩個以上器官系統同時或序貫性衰竭。MODS 是 ICU 病患死亡的首要原因，死亡率隨受累器官數倍增。核心病理機轉為全身性內皮功能障礙→微血管血栓→組織缺氧→細胞死亡。常見受累器官依序：GI、肺（ARDS）、腎（AKI）、肝、凝血系統（DIC）、心血管、CNS。治療以器官支持為主，無特異性治療。',
  learning_objectives: [
    '定義 MODS 並說明其與 SIRS/Sepsis 的關係',
    '描述 MODS 的「二次打擊」模型與內皮功能障礙的核心角色',
    '列出各器官系統衰竭的監測指標與判定標準',
    '說明 MODS 的治療原則（器官支持為主）',
    '評估 MODS 病患的預後因子',
  ],
  key_points: [
    'MODS 定義：≥ 2 個器官系統同時或序貫性功能障礙',
    '死亡率：1 器官約 25%、2 器官約 50%、3 器官約 80%、≥ 4 器官接近 100%',
    '「二次打擊」模型：首次打擊（創傷/感染）啟動 SIRS → 若復原不完全 → 二次打擊（二次感染/手術/輸血反應）→ 失控性發炎 → MODS',
    '內皮功能障礙是 MODS 的核心：微血管通透性增加 + 微血栓形成 + 白血球附著活化',
    '腸道在 MODS 中扮演「發動機」角色：腸屏障破壞→細菌/內毒素移位→放大全身性發炎',
    '各器官衰竭指標：肺（PaO2/FiO2 < 200 = ARDS）、腎（Cre 急升 > 2x 基線或少尿）、肝（Bilirubin > 2x）、凝血（DIC 評分）、心血管（需升壓劑）、CNS（GCS 下降）',
    '治療原則：早期積極治療原發病因 + 各器官系統支持治療——無 MODS 特效藥',
  ],
  body: `# 多重器官功能障礙症候群 (MODS)

## 一、核心概念與機轉 (Core Concept & Mechanism)



### 定義與分類
MODS 是危重病患中兩個以上器官系統的急性功能障礙，在原發疾病的基礎上無法自行維持恆定。

- **原發性 MODS**：直接由初始傷害造成（如多重創傷致肺挫傷 + 腎挫傷）
- **續發性 MODS**：由 SIRS/Sepsis 級聯反應間接造成（更常見且更致命）

### 病理生理——「二次打擊」模型
### 首次打擊
嚴重傷害（感染、創傷、胰臟炎、中暑）→ SIRS 啟動 → 適當代償反應（CARS, Compensatory Anti-inflammatory Response Syndrome）

### 恢復或惡化分歧
- 成功代償 → SIRS 消退 → 恢復
- 代償不足/過度 → 持續性炎症

### 二次打擊
在 SIRS 尚未消退時遭遇二次侵害（院內感染、手術、輸血反應、麻醉）→ 炎症反應失控 → MODS

### 核心機轉：內皮功能障礙
1. 內皮細胞活化 → 表面黏附分子上調 → 白血球附著與浸潤
2. 內皮通透性增加 → 組織水腫 → 擴散距離增加 → 組織缺氧
3. 糖萼（glycocalyx）脫落 → 失去抗凝保護 → 微血管血栓
4. NO 合成失調 → 血管張力異常 → 灌流分佈不均

### 器官系統衰竭監測
| 器官 | 衰竭指標 | 監測方式 |
|------|---------|---------|
| 肺 | PaO2/FiO2 < 200（ARDS）、呼吸窘迫 | SpO2、ABG、胸腔 X 光 |
| 腎 | Cre > 2x 基線、少尿 < 1 mL/kg/hr | BUN/Cre、尿量 |
| 肝 | Bilirubin > 2x、ALT/AST 急升、凝血異常 | 肝指數、膽紅素 |
| 凝血 | DIC（PT/aPTT 延長、D-dimer 升高、血小板下降） | 凝血全套 |
| 心血管 | 需升壓劑維持 MAP > 60 mmHg | 連續血壓、乳酸 |
| GI | 腸麻痺、GI 出血、細菌移位 | 臨床觀察、糞便 |
| CNS | GCS 下降、意識改變 | 神經學檢查 |

### 治療原則
MODS 無特效藥——治療是支持各器官直到恢復：
1. **積極治療原發病因**（抗生素/引流/手術）
2. **血流動力學優化**：輸液、升壓劑（Norepinephrine/Vasopressin）
3. **呼吸支持**：氧氣、正壓通氣
4. **腎臟支持**：輸液、利尿劑、必要時透析
5. **營養支持**：早期腸道營養（維護腸屏障）
6. **凝血支持**：FFP、抗凝血治療（爭議中）
7. **感染控制**：適當抗生素、中心靜脈導管照護

[圖片:MODS 各器官衰竭指標監測速查表]

## 二、臨床意義 (Clinical Significance)

## 三、人醫借鑒 (Translational Insights)

| 人醫工具/概念 | 獸醫應用潛力 | 現況 |
|-------------|-------------|------|
| 體外膜氧合（ECMO） | 犬嚴重急性呼吸窘迫/心因性休克 | 人醫成熟技術，獸醫因成本極少使用 |
| 毒物即時檢測（POC toxicology） | 犬中毒即時確認毒物種類 | 人醫快速檢測套組，獸醫可用性有限 |
| 治療性低溫（targeted temperature management） | 犬心停復甦後腦保護 | 人醫已為標準，獸醫初步研究 |
| 血漿交換（plasmapheresis） | 犬嚴重免疫介導疾病急救 | 少數獸醫轉介中心可執行 |

## 四、臨床爭議與知識空缺 (Controversies & Knowledge Gaps)

| 爭議議題 | 現況 | Evidence Level |
|---------|------|---------------|
| 犬 GDV 術後心律不整的治療閾值 | Lidocaine 何時開始？VPC rate >20/min vs 出現 R-on-T 的爭議 | Level III |
| 犬中毒洗胃 vs 催吐 vs 活性碳的適用時機 | 催吐時間窗（2 小時）、活性碳對特定毒物效果的個別化決策 | Level II |
| 犬急性腎損傷的體液治療量 | 傳統大量輸液 vs 限制性輸液策略——獸醫缺乏比較數據 | Level III |
| 犬蛇咬傷抗毒血清的劑量與重複給藥標準 | 台灣蛇種特異性數據不足，多參考國際經驗 | Level III |`,
  clinical_pearl: '預防 MODS 遠比治療 MODS 重要。關鍵在於「防止二次打擊」：(1) 早期積極復甦（前 6 小時的黃金期）；(2) 早期腸道營養（12-24 小時內開始）維護腸屏障；(3) 嚴格感染控制減少院內感染。一旦進入 MODS，特別是 ≥ 3 個器官衰竭，在獸醫 ICU 的存活率極低，需要與飼主進行坦誠的預後溝通。',
  common_mistakes: [
    '延遲辨識 MODS 早期徵兆——單一器官異常時就應提高警覺',
    '忽略 GI 屏障保護——未早期給予腸道營養，腸屏障破壞加速 MODS 進展',
    '過度輸液復甦（fluid overload）——組織水腫反而加重器官缺氧',
    '在 MODS 晚期仍過度積極治療而未與飼主討論預後——增加動物痛苦與飼主經濟負擔',
  ],
  disease_data: null,
  diagnostic_data: null,
  procedure_data: null,
  visual_placeholders: [
    { position: '二次打擊模型段落', type: 'flowchart', description: '二次打擊模型與 MODS 發展流程圖' },
    { position: '器官衰竭表格後', type: 'comparison_table', description: 'MODS 各器官衰竭判定標準速查表' },
  ],
  interactive_placeholders: [],
  drug_api_links: ['Norepinephrine', 'Vasopressin'],
  references: [
    { type: 'textbook', citation: 'Silverstein DC, Hopper K. Small Animal Critical Care Medicine, 3rd ed. Elsevier, 2022. Chapter: Multiple Organ Dysfunction Syndrome.', relevance: 'ECC 核心教材 MODS 章節' },
    { type: 'journal', citation: 'Kenney EM, Rozanski EA, Rush JE, et al. Association between outcome and organ system dysfunction in dogs with sepsis: 114 cases (2003-2007). JAVMA. 2010;236(1):83-87.', relevance: '犬敗血症器官衰竭與預後' },
    { type: 'journal', citation: 'Brady CA, Otto CM. Systemic inflammatory response syndrome, sepsis, and multiple organ dysfunction. Vet Clin North Am Small Anim Pract. 2001;31(6):1147-1162.', relevance: 'SIRS/MODS 綜合回顧' },
    { type: 'guideline', citation: 'Rhodes A, Evans LE, Alhazzani W, et al. Surviving Sepsis Campaign: international guidelines for management of sepsis and septic shock: 2016. Intensive Care Med. 2017;43(3):304-377.', relevance: 'Surviving Sepsis Campaign 指引——MODS 預防與器官支持策略' },
  ],
  is_current: true,
  created_at: now,
};

/** ECC-L2-003 凝血功能障礙與DIC — 機轉型 */
const contentDIC: NodeContent = {
  id: 'CONTENT-ECC-L2-003',
  node_id: 'ECC-L2-003',
  version: 1,
  summary: '瀰漫性血管內凝血（DIC）是一種繼發於嚴重系統性疾病的消耗性凝血病，特徵為全身性微血管血栓形成與凝血因子/血小板消耗導致的出血傾向並存。DIC 不是獨立疾病而是併發症，常見觸發疾病包括敗血症、中暑、免疫介導性溶血性貧血（IMHA）、腫瘤與嚴重創傷。診斷依賴綜合評估（無單一金標準檢測），治療核心為處理根本病因並補充消耗的凝血因子（FFP）。',
  learning_objectives: [
    '描述 DIC 的病理生理機轉——凝血與纖溶失衡',
    '列出 DIC 的常見觸發疾病',
    '運用實驗室檢查綜合評估 DIC（PT/aPTT/D-dimer/fibrinogen/platelets/AT）',
    '區分 DIC 的高凝期與低凝/出血期',
    '制定 DIC 的治療策略（根本病因 + FFP + 支持治療）',
  ],
  key_points: [
    'DIC 是併發症，不是原發疾病——永遠要找觸發 DIC 的根本病因',
    '核心機轉：組織因子（TF）大量釋放→凝血級聯過度活化→全身微血管血栓→凝血因子+血小板消耗→出血',
    '同時存在「矛盾」的兩個問題：血栓形成（器官缺血）+ 出血傾向（因子消耗）',
    'DIC 分期：高凝期（hypercoagulable, 亞臨床）→ 過渡期 → 低凝/出血期（overt DIC）',
    '診斷標準（無單一金標準，需綜合評估）：PT/aPTT 延長 + D-dimer 升高 + Fibrinogen 下降 + 血小板下降 + Antithrombin 下降',
    '常見觸發因子：敗血症（最常見）、IMHA、中暑、胰臟炎、蛇咬傷（出血毒）、腫瘤（血管肉瘤）',
    '治療三支柱：(1) 治療根本病因、(2) FFP 10-15 mL/kg 補充凝血因子與 AT、(3) 支持治療',
    'Heparin 用於 DIC 有爭議——理論上可中斷凝血級聯，但在出血期可加重出血',
  ],
  body: `# 凝血功能障礙與瀰漫性血管內凝血 (DIC)

## 一、核心概念與機轉 (Core Concept & Mechanism)



### 定義
DIC 是嚴重系統性疾病觸發的全身性凝血級聯過度活化，導致微血管內廣泛血栓形成，同時消耗凝血因子與血小板而引發出血傾向。

### 病理生理
### 觸發
- 組織因子（TF）大量釋放：內皮損傷、單核球活化
- 觸發疾病：敗血症、IMHA、中暑、創傷、腫瘤、蛇毒

### 凝血失控
TF + Factor VIIa → Xa → Thrombin 大量生成 → Fibrin 沉積於微血管

### 抗凝機制耗竭
- Antithrombin (AT) 消耗
- Protein C 系統抑制
- TFPI（組織因子路徑抑制物）不足

### 纖溶反應
Plasmin 活化 → Fibrin 分解 → D-dimer 升高（FDP）
但纖溶不足以清除所有微血栓

### 最終結果
- **微血管血栓** → 器官缺血 → MODS
- **凝血因子/血小板消耗** → 出血傾向

### DIC 分期
| 分期 | 臨床表現 | 實驗室特徵 |
|------|---------|-----------|
| 高凝期 | 亞臨床（可能僅見靜脈導管易阻塞） | D-dimer ↑、AT ↓、PT/aPTT 正常或輕度縮短 |
| 過渡期 | 輕微出血 + 器官功能異常 | D-dimer ↑↑、血小板 ↓、PT/aPTT 開始延長 |
| 低凝/出血期 | 明顯出血（瘀斑、注射處滲血、GI出血、血尿） | PT/aPTT 明顯延長、fibrinogen ↓、血小板 ↓↓、D-dimer ↑↑↑ |

### 診斷
無單一金標準——需綜合以下檢查：

| 檢查 | DIC 預期變化 | 臨床意義 |
|------|------------|---------|
| PT | 延長 | 外源性路徑因子消耗 |
| aPTT | 延長 | 內源性路徑因子消耗 |
| D-dimer | 升高 | Fibrin 分解產物（最敏感） |
| Fibrinogen | 下降（< 100 mg/dL） | 消耗（但急性期可能假性正常——急性期蛋白） |
| 血小板 | 下降 | 消耗性血小板低下 |
| Antithrombin | 下降（< 60%） | 抗凝機制耗竭 |
| 血液抹片 | 裂片紅血球（schistocytes） | 微血管病性溶血 |

### 治療
### 核心原則
1. **治療根本病因**（最重要！）——不解決觸發因子，DIC 無法控制
2. **補充凝血因子**：FFP 10-15 mL/kg IV，可重複
3. **補充 AT**（若可取得）：FFP 含 AT，或純 AT 製劑
4. **血小板支持**：嚴重血小板低下伴活動出血考慮全血輸血
5. **Heparin（爭議大）**：
   - 理論：中斷凝血級聯
   - 風險：出血期加重出血
   - 若使用：低分子量 Heparin（Enoxaparin）較可預測

### 不同階段策略
- **高凝期**：治療原發病因 + 考慮 low-dose heparin
- **出血期**：FFP + 全血（需要時）+ 治療原發病因

[圖片:DIC 病理生理與治療策略流程圖]

## 二、臨床意義 (Clinical Significance)

## 三、人醫借鑒 (Translational Insights)

| 人醫工具/概念 | 獸醫應用潛力 | 現況 |
|-------------|-------------|------|
| 體外膜氧合（ECMO） | 犬嚴重急性呼吸窘迫/心因性休克 | 人醫成熟技術，獸醫因成本極少使用 |
| 毒物即時檢測（POC toxicology） | 犬中毒即時確認毒物種類 | 人醫快速檢測套組，獸醫可用性有限 |
| 治療性低溫（targeted temperature management） | 犬心停復甦後腦保護 | 人醫已為標準，獸醫初步研究 |
| 血漿交換（plasmapheresis） | 犬嚴重免疫介導疾病急救 | 少數獸醫轉介中心可執行 |

## 四、臨床爭議與知識空缺 (Controversies & Knowledge Gaps)

| 爭議議題 | 現況 | Evidence Level |
|---------|------|---------------|
| 犬 GDV 術後心律不整的治療閾值 | Lidocaine 何時開始？VPC rate >20/min vs 出現 R-on-T 的爭議 | Level III |
| 犬中毒洗胃 vs 催吐 vs 活性碳的適用時機 | 催吐時間窗（2 小時）、活性碳對特定毒物效果的個別化決策 | Level II |
| 犬急性腎損傷的體液治療量 | 傳統大量輸液 vs 限制性輸液策略——獸醫缺乏比較數據 | Level III |
| 犬蛇咬傷抗毒血清的劑量與重複給藥標準 | 台灣蛇種特異性數據不足，多參考國際經驗 | Level III |`,
  clinical_pearl: 'DIC 最重要的觀念：治療 DIC 就是治療引起 DIC 的疾病。如果不解決根本病因（敗血症→抗生素+引流、IMHA→免疫抑制、中暑→降溫），再多的 FFP 也只是短暫補充。另外，D-dimer 是最敏感的早期 DIC 指標——比 PT/aPTT 更早升高。在高風險病患（敗血症、IMHA、中暑）入院即查 D-dimer，可以早期偵測 DIC。',
  common_mistakes: [
    '只治療 DIC 而不治療根本病因——FFP 只是暫時補充，不解決源頭則持續消耗',
    '將 fibrinogen「正常」誤判為沒有 DIC——fibrinogen 是急性期蛋白，DIC 早期可假性正常',
    '在明顯出血期使用 Heparin——可能加重出血，極度危險',
    '延遲給予 FFP——在出血期等待「確認」DIC 才給 FFP 可能為時已晚',
  ],
  disease_data: null,
  diagnostic_data: null,
  procedure_data: null,
  visual_placeholders: [
    { position: '病理生理段落後', type: 'flowchart', description: 'DIC 凝血-纖溶失衡病理生理圖' },
    { position: '分期表格後', type: 'timeline', description: 'DIC 分期進展時間軸與實驗室變化' },
  ],
  interactive_placeholders: [],
  drug_api_links: ['Enoxaparin'],
  references: [
    { type: 'textbook', citation: 'Silverstein DC, Hopper K. Small Animal Critical Care Medicine, 3rd ed. Elsevier, 2022. Chapter: Disseminated Intravascular Coagulation.', relevance: 'ECC 核心教材 DIC 章節' },
    { type: 'journal', citation: 'Wiinberg B, Jensen AL, Rojkjaer R, et al. Validation of human recombinant tissue factor-activated thromboelastography on citrated whole blood from clinically healthy dogs. Vet Clin Pathol. 2005;34(4):389-393.', relevance: 'TEG 在犬凝血評估的應用' },
    { type: 'journal', citation: 'Bruchim Y, Kelmer E, Cohen A, et al. Hemostatic abnormalities in dogs with naturally occurring heatstroke. JVECC. 2017;27(3):315-324.', relevance: '中暑犬 DIC 凝血異常研究' },
    { type: 'guideline', citation: 'deLaforcade A, Bacek L, Bhatt S, et al. ACVIM consensus statement: 2022 update on the diagnosis of immune-mediated hemolytic anemia and immune-mediated thrombocytopenia in dogs. J Vet Intern Med. 2022;36(6):1895-1913.', relevance: 'ACVIM 共識——DIC 相關凝血障礙的診斷標準' },
  ],
  is_current: true,
  created_at: now,
};

/** ECC-L4-002 急診超音波(AFAST/TFAST) — 診斷型 */
const contentPOCUS: NodeContent = {
  id: 'CONTENT-ECC-L4-002',
  node_id: 'ECC-L4-002',
  version: 1,
  summary: 'AFAST（Abdominal Focused Assessment with Sonography for Trauma/Triage）與 TFAST（Thoracic FAST）是急診床邊超音波（POCUS）的核心技術，可在 3-5 分鐘內快速偵測腹腔積液、胸腔積液、心包積液與氣胸。AFAST 使用四個標準化掃查窗口（DH/SR/CC/HR），TFAST 使用五個窗口（CTS/PCS 雙側 + DH）。Vet BLUE（Veterinary Bedside Lung Ultrasound Exam）進一步評估肺實質。POCUS 不取代完整超音波檢查，但在急診場景中快速決策價值極高。',
  learning_objectives: [
    '描述 AFAST 四點掃查窗口的位置與正常/異常發現',
    '描述 TFAST 窗口與 Vet BLUE 的臨床應用',
    '區分腹腔積液的超音波表現與常見假陽性',
    '辨識心包積液、胸腔積液與氣胸的超音波徵象',
    '運用 AFAST/TFAST 輔助急診決策（穿刺引流時機）',
  ],
  key_points: [
    'AFAST 四點：DH（diaphragmatico-hepatic）、SR（spleno-renal）、CC（cysto-colic）、HR（hepato-renal）',
    'TFAST 五點：CTS（chest tube site，雙側）、PCS（pericardial site，雙側）、DH（與 AFAST 共用）',
    'AFAST 陽性 = 積液在超音波下呈現無回音（黑色）三角形或條狀影像',
    'AFAST 腹腔積液評分（AFS）：0-4 分，依陽性窗口數量評估積液量',
    'TFAST 氣胸偵測：正常有 glide sign（滑動徵）；氣胸時 glide sign 消失 + barcode sign（M-mode）',
    '心包積液：心臟周圍無回音帶，伴心臟擺動（cardiac swinging）= 心包填塞徵象',
    'Vet BLUE 三種肺型態：dry lung（A-lines, 正常）、wet lung（B-lines, 肺水腫）、shred sign/hepatization（實變）',
    'POCUS 是「快速篩查」工具，不取代完整影像學檢查',
  ],
  body: `# 急診超音波 AFAST / TFAST (Point-of-Care Ultrasound)

## 一、檢查原理與適應症 (Principles & Indications)



### 概述
POCUS 是急診醫學中最有價值的床邊診斷工具之一，讓臨床醫師在病患身邊即可快速獲取關鍵影像資訊，無需移動不穩定的病患至影像室。

### AFAST — 腹腔快速超音波
### 四個掃查窗口

| 窗口 | 位置 | 主要偵測 |
|------|------|---------|
| DH (Diaphragmatico-Hepatic) | 劍突後方 | 膈肌-肝臟間積液、胸腔積液（透過膈肌） |
| SR (Spleno-Renal) | 左側腹壁，最後肋骨後方 | 脾-腎間積液 |
| CC (Cysto-Colic) | 膀胱正上方 | 膀胱周圍積液、膀胱完整性 |
| HR (Hepato-Renal) | 右側腹壁，最後肋骨後方 | 肝-腎間積液 |

### 操作技術
- 動物右側臥（標準）或站立/胸骨臥位（呼吸窘迫時）
- Curvilinear 探頭 5-8 MHz
- 每個窗口 30-60 秒，總計 < 5 分鐘
- 不需要剃毛（酒精噴濕 + 耦合膠即可）

### AFS（Abdominal Fluid Score）
- 0 分：四個窗口均陰性
- 1-2 分：輕度積液
- 3-4 分：中至大量積液
- 連續追蹤 AFS 變化可評估積液進展或消退

### 正常 vs 異常

正常：各窗口器官邊界清晰，無無回音（黑色）液體區域
異常：器官間出現三角形/半月形無回音區域 = 積液

### TFAST — 胸腔快速超音波
### 五個掃查窗口

| 窗口 | 位置 | 主要偵測 |
|------|------|---------|
| CTS (Chest Tube Site) 雙側 | 第 7-9 肋間，中 1/3 | 胸腔積液、氣胸 |
| PCS (Pericardial Site) 雙側 | 第 5-6 肋間，胸骨旁 | 心包積液、心功能概覽 |
| DH | 同 AFAST | 膈肌後方胸腔積液 |

### 氣胸偵測
- **正常**：glide sign 陽性（胸膜滑動）+ A-lines
- **氣胸**：glide sign 消失 + barcode sign (M-mode) + lung point（氣胸邊界）
- 敏感度 > 95%（優於胸腔 X 光仰臥位）

### 心包積液
- 心臟周圍出現無回音帶
- 右心房/右心室舒張期塌陷 = 心包填塞
- Cardiac swinging = 大量心包積液的特徵

### Vet BLUE — 肺部超音波
### 三種肺部型態
| 型態 | 超音波表現 | 臨床意義 |
|------|-----------|---------|
| Dry lung | A-lines（水平偽像） | 正常或輕度脫水 |
| Wet lung | B-lines（垂直彗星尾偽像） | 肺水腫（心因性或非心因性） |
| Shred sign / Hepatization | 肺實質回音如肝臟 | 肺實變/肺炎/肺挫傷 |

[圖片:AFAST/TFAST 掃查窗口標準位置圖（犬側面標示）]

## 二、判讀要點 (Interpretation)

## 三、常見陷阱 (Pitfalls)

## 四、人醫借鑒 (Translational Insights)

| 人醫工具/概念 | 獸醫應用潛力 | 現況 |
|-------------|-------------|------|
| 體外膜氧合（ECMO） | 犬嚴重急性呼吸窘迫/心因性休克 | 人醫成熟技術，獸醫因成本極少使用 |
| 毒物即時檢測（POC toxicology） | 犬中毒即時確認毒物種類 | 人醫快速檢測套組，獸醫可用性有限 |
| 治療性低溫（targeted temperature management） | 犬心停復甦後腦保護 | 人醫已為標準，獸醫初步研究 |
| 血漿交換（plasmapheresis） | 犬嚴重免疫介導疾病急救 | 少數獸醫轉介中心可執行 |

## 五、臨床爭議與知識空缺 (Controversies & Knowledge Gaps)

| 爭議議題 | 現況 | Evidence Level |
|---------|------|---------------|
| 犬 GDV 術後心律不整的治療閾值 | Lidocaine 何時開始？VPC rate >20/min vs 出現 R-on-T 的爭議 | Level III |
| 犬中毒洗胃 vs 催吐 vs 活性碳的適用時機 | 催吐時間窗（2 小時）、活性碳對特定毒物效果的個別化決策 | Level II |
| 犬急性腎損傷的體液治療量 | 傳統大量輸液 vs 限制性輸液策略——獸醫缺乏比較數據 | Level III |
| 犬蛇咬傷抗毒血清的劑量與重複給藥標準 | 台灣蛇種特異性數據不足，多參考國際經驗 | Level III |`,
  clinical_pearl: 'AFAST/TFAST 最大的價值不是「精確診斷」而是「快速決策」。創傷犬到院，ABCDE 完成後 3 分鐘內做完 AFAST/TFAST：有腹腔積液嗎？有胸腔積液嗎？有心包積液嗎？有氣胸嗎？這四個問題的答案直接決定下一步（腹腔穿刺？胸腔穿刺？心包穿刺？減壓？）。不需要完美的影像品質，只需要回答「有或沒有」。',
  common_mistakes: [
    '花太多時間追求完美影像而延誤急救——FAST 重點是快，不是美',
    '將 AFAST 陰性解讀為「沒有腹腔問題」——少量積液（< 10 mL/kg）可能為陰性',
    '未辨識假陽性：膽囊周圍液體（正常）、腎周脂肪（高回音可混淆）',
    '忽略連續追蹤——單次 AFAST 正常不代表沒問題，創傷後應 4-6 小時重複',
  ],
  disease_data: null,
  diagnostic_data: {
    indication: [
      '外傷病患快速評估腹腔/胸腔積液',
      '不明原因休克的鑑別（心包填塞、腹腔出血）',
      '呼吸窘迫的快速鑑別（胸腔積液 vs 氣胸 vs 肺水腫 vs 心包填塞）',
      '腹部膨脹的快速評估（積液 vs 臟器腫大 vs GDV）',
      '創傷/術後病患的連續監測（AFS 趨勢追蹤）',
      '輸液復甦反應評估（Caudal Vena Cava 直徑變化）',
    ],
    contraindication: [
      '無絕對禁忌症',
      '開放性胸腔/腹腔傷口——避免探頭直接接觸污染區域',
    ],
    technique: 'AFAST：動物右側臥或站立位。使用 5-8 MHz Curvilinear 探頭，酒精噴濕毛髮 + 耦合膠。依序掃查 DH → SR → CC → HR 四個窗口，每點 30-60 秒。記錄各窗口陽性/陰性並計算 AFS。TFAST：同姿位加掃 CTS（第 7-9 肋間雙側）與 PCS（第 5-6 肋間雙側），評估胸腔積液、氣胸與心包積液。Vet BLUE：於胸壁 Caudodorsal/Perihilar/Middle/Cranial 四點評估肺實質。',
    normal_findings: [
      { finding: 'AFAST 四點陰性', description: '各窗口器官邊界清晰，無游離積液', significance: 'AFS = 0，排除明顯腹腔積液' },
      { finding: 'Glide sign 陽性', description: '胸膜隨呼吸滑動', significance: '排除掃查點氣胸' },
      { finding: 'A-lines', description: '胸膜下方平行水平線（偽像）', significance: '正常充氣肺（dry lung）' },
      { finding: '心包無積液', description: '心臟周圍無無回音帶', significance: '排除心包填塞' },
    ],
    abnormal_findings: [
      { finding: '腹腔積液', description: '器官間三角形/半月形無回音區域', significance: '可能為血液、尿液、滲出液或漏出液——需穿刺分析' },
      { finding: 'Glide sign 消失 + Barcode sign', description: '胸膜不動，M-mode 呈平行線', significance: '高度提示氣胸——評估是否需減壓' },
      { finding: 'B-lines', description: '胸膜發出的垂直彗星尾偽像', significance: '肺間質/肺泡液體——評估心衰竭、ARDS、肺挫傷' },
      { finding: '心包積液 + 右心塌陷', description: '心周無回音帶，右心舒張期塌陷', significance: '心包填塞——考慮緊急心包穿刺' },
    ],
    interpretation_guide: '1. AFAST 計算 AFS（0-4），追蹤趨勢。AFS 增加提示持續出血/積液產生。2. TFAST 以 glide sign 評估氣胸，以 PCS 評估心包。3. Vet BLUE 以 A-lines vs B-lines 區分乾/濕肺。4. 結合臨床情境解讀——AFAST 陽性需穿刺確認積液性質。5. 連續追蹤（q2-6h）比單次檢查更有價值。',
    pitfalls: [
      '少量積液（< 10 mL/kg）AFAST 可能為假陰性',
      '肥胖動物影像品質差，可能遺漏少量積液',
      '膽囊旁正常腹膜液可能被誤判為 DH 陽性',
      '皮下氣腫干擾 TFAST 判讀',
      '操作者經驗不足可能影響敏感度',
    ],
    sensitivity_specificity: 'AFAST 偵測腹腔積液：敏感度 82-96%，特異度 > 95%。TFAST 偵測氣胸：敏感度 > 95%（優於仰臥 X 光的 36-75%）。TFAST 偵測心包積液：敏感度接近 100%。敏感度受積液量與操作者經驗影響。',
    cost_benefit: '設備成本為超音波機器（便攜式可低至 5-10 萬台幣），操作零耗材。學習曲線短（50 例即可熟練 AFAST/TFAST），臨床決策價值極高。是急診醫學投報比最高的診斷技術之一。',
  },
  procedure_data: null,
  visual_placeholders: [
    { position: 'AFAST 段落', type: 'annotated_image', description: 'AFAST 四點掃查位置標示圖（犬側面）' },
    { position: '氣胸偵測段落', type: 'annotated_image', description: 'Glide sign vs Barcode sign B-mode/M-mode 對照圖' },
  ],
  interactive_placeholders: [
    { position: 'AFAST 段落後', type: 'image_quiz', description: 'AFAST/TFAST 影像判讀練習題（正常 vs 異常）' },
  ],
  drug_api_links: [],
  references: [
    { type: 'journal', citation: 'Lisciandro GR. Abdominal and thoracic focused assessment with sonography for trauma, triage, and monitoring in small animals. JVECC. 2011;21(2):104-122.', relevance: 'AFAST/TFAST 原始描述與驗證' },
    { type: 'textbook', citation: 'Lisciandro GR. Focused Ultrasound Techniques for the Small Animal Practitioner. Wiley-Blackwell, 2014.', relevance: 'FAST 技術完整教材' },
    { type: 'journal', citation: 'Boysen SR, Lisciandro GR. The use of ultrasound for dogs and cats in the emergency room: AFAST and TFAST. Vet Clin North Am Small Anim Pract. 2013;43(4):773-797.', relevance: 'AFAST/TFAST 急診應用綜合回顧' },
    { type: 'guideline', citation: 'McMurray J, Boysen S, Chalhoub S. Focused assessment with sonography in nontraumatized dogs and cats in the emergency and critical care setting. JVECC. 2016;26(1):64-73.', relevance: '急診 POCUS 標準化操作指引' },
  ],
  is_current: true,
  created_at: now,
};

/** ECC-L5-001 靜脈液體治療 — 治療型 */
const contentIVFluid: NodeContent = {
  id: 'CONTENT-ECC-L5-001',
  node_id: 'ECC-L5-001',
  version: 1,
  summary: '靜脈液體治療（IV Fluid Therapy）是 ECC 最基礎且使用最頻繁的治療介入。輸液目的包括容量復甦（休克）、脫水矯正與維持。液體分為晶體液（等張/低張/高張）與膠體液（合成/天然），選擇取決於病患需求。休克復甦使用 shock rate bolus（犬 20-30 mL/kg、貓 10-15 mL/kg），脫水矯正以缺損量 + 維持量計算。過度輸液（fluid overload）同樣危險，可致肺水腫與組織水腫，應以目標導向方式進行。',
  learning_objectives: [
    '分類常用輸液種類並描述其成分與適應症',
    '計算休克復甦、脫水矯正與維持輸液的速率',
    '描述目標導向輸液治療（GDFT）的終點指標',
    '辨識液體過負荷的徵象並調整輸液計畫',
    '比較晶體液與膠體液的優缺點與選擇時機',
  ],
  key_points: [
    '晶體液（LRS、0.9% NaCl、Plasmalyte）為首選——便宜、安全、易取得',
    '晶體液僅 25% 留在血管內，75% 分佈至間質→需要較大容量達到擴容效果',
    '休克復甦 bolus：犬 20-30 mL/kg over 15-20 min（可重複），貓 10-15 mL/kg（貓對容量更敏感）',
    '犬 shock dose 總量：60-90 mL/kg/hr（分次給予，每次評估反應）',
    '脫水補充量(mL) = BW(kg) × 脫水%(小數) × 1000，在 6-24 小時內補充',
    '維持量：犬貓 40-60 mL/kg/day（約 2-2.5 mL/kg/hr）',
    '0.9% NaCl：含鈉 154 mEq/L（略高張），大量使用可致高氯性代謝性酸中毒',
    'LRS 為平衡液（含乳酸作為緩衝），適用大多數情境；高血鉀時避免使用（含 K+ 4 mEq/L）',
    '膠體液（Hetastarch 等）：每 mL 擴容效果 > 晶體液，但有凝血異常與 AKI 風險',
    '液體過負荷徵象：體重增加 > 10%、眼結膜水腫（chemosis）、漿液性鼻分泌物、呼吸速率增加、肺囉音',
  ],
  body: `# 靜脈液體治療 (IV Fluid Therapy)

## 一、治療原理 (Treatment Principles)



### 輸液種類
### 晶體液

| 輸液 | Na+ | K+ | Cl- | 緩衝 | 滲透壓 | 特點 |
|------|-----|-----|-----|------|--------|------|
| LRS | 130 | 4 | 109 | Lactate 28 | 273 | 最常用平衡液 |
| 0.9% NaCl | 154 | 0 | 154 | 無 | 308 | 高血鉀/代謝性鹼中毒首選 |
| Plasmalyte | 140 | 5 | 98 | Acetate+Gluconate | 294 | 最接近生理組成 |
| 5% Dextrose | 0 | 0 | 0 | 無 | 252 | 等同自由水，用於高鈉血症矯正 |

### 膠體液

| 輸液 | 類型 | 擴容持續 | 劑量限制 | 風險 |
|------|------|---------|---------|------|
| Hetastarch 6% | 合成膠體 | 8-12 hr | 犬 20 mL/kg/day | 凝血異常、AKI |
| 25% Albumin（人用） | 天然膠體 | 24+ hr | 2 mL/kg slow IV | 過敏反應 |
| FFP | 天然（含凝血因子） | 數小時 | 10-15 mL/kg | 輸血反應、容量有限 |

### 高張液

| 輸液 | 用途 | 劑量 | 備註 |
|------|------|------|------|
| 7.5% NaCl | 快速小容量復甦 | 3-5 mL/kg over 5-10 min | 效果短暫（15-30 min），需搭配晶體液 |

### 輸液速率計算
### 休克復甦
- 犬：20-30 mL/kg crystalloid bolus → 評估 → 可重複（max 60-90 mL/kg/hr）
- 貓：10-15 mL/kg crystalloid bolus → 評估 → 可重複（max 40-60 mL/kg/hr）
- 每次 bolus 後重新評估灌流指標（HR、CRT、乳酸、血壓）

### 脫水矯正
缺損量(mL) = BW(kg) × 脫水%(小數) × 1000
- 補充時間：6-24 小時，視嚴重度調整
- 範例：10 kg 犬、8% 脫水 = 800 mL 缺損，12 小時內補充 = 67 mL/hr + 維持量

### 維持量
- 犬貓：40-60 mL/kg/day ≈ 2-2.5 mL/kg/hr
- 加上持續流失（嘔吐、腹瀉、引流液）需額外補充

### 目標導向輸液治療 (GDFT)
輸液不是「開了就不管」——需持續評估反應：

| 終點指標 | 目標值 |
|---------|--------|
| MAP | > 60-80 mmHg |
| 乳酸 | 下降趨勢，目標 < 2.5 mmol/L |
| CRT | < 2 秒 |
| 尿量 | > 1-2 mL/kg/hr |
| CVP | 5-10 cmH2O（若可測量） |
| 體重 | 不超過入院體重 10% |

### 液體過負荷（Fluid Overload）
| 徵象 | 描述 |
|------|------|
| 體重增加 | > 10% 入院體重 |
| Chemosis | 結膜水腫 |
| 漿液性鼻分泌物 | 鼻腔滴液 |
| 肺囉音/呼吸加速 | 肺水腫 |
| 皮下凹陷性水腫 | 四肢/腹側 |

處置：降低輸液速率/停止輸液、[藥物:Furosemide] 1-2 mg/kg IV、評估白蛋白（低白蛋白加重水腫）

[圖片:輸液選擇決策流程圖]

## 二、藥物/方法比較 (Comparison)

## 三、併發症與監控 (Complications & Monitoring)

## 四、預後影響 (Prognostic Impact)

## 五、人醫借鑒 (Translational Insights)

| 人醫工具/概念 | 獸醫應用潛力 | 現況 |
|-------------|-------------|------|
| 體外膜氧合（ECMO） | 犬嚴重急性呼吸窘迫/心因性休克 | 人醫成熟技術，獸醫因成本極少使用 |
| 毒物即時檢測（POC toxicology） | 犬中毒即時確認毒物種類 | 人醫快速檢測套組，獸醫可用性有限 |
| 治療性低溫（targeted temperature management） | 犬心停復甦後腦保護 | 人醫已為標準，獸醫初步研究 |
| 血漿交換（plasmapheresis） | 犬嚴重免疫介導疾病急救 | 少數獸醫轉介中心可執行 |

## 六、臨床爭議與知識空缺 (Controversies & Knowledge Gaps)

| 爭議議題 | 現況 | Evidence Level |
|---------|------|---------------|
| 犬 GDV 術後心律不整的治療閾值 | Lidocaine 何時開始？VPC rate >20/min vs 出現 R-on-T 的爭議 | Level III |
| 犬中毒洗胃 vs 催吐 vs 活性碳的適用時機 | 催吐時間窗（2 小時）、活性碳對特定毒物效果的個別化決策 | Level II |
| 犬急性腎損傷的體液治療量 | 傳統大量輸液 vs 限制性輸液策略——獸醫缺乏比較數據 | Level III |
| 犬蛇咬傷抗毒血清的劑量與重複給藥標準 | 台灣蛇種特異性數據不足，多參考國際經驗 | Level III |`,
  clinical_pearl: '輸液治療最常犯的錯誤是「開了就忘了」。開始輸液後必須持續監測反應——每次 bolus 後摸脈搏、看 CRT、追乳酸。如果 2-3 次 bolus 後灌流仍未改善，不是繼續加量，而是要想「是不是不只是低血容性休克？」（心因性？阻塞性？分布性需要升壓劑？）。另外，貓比犬對容量更敏感——用犬的 shock rate 給貓，很容易 fluid overload。',
  common_mistakes: [
    '對所有休克病患一律使用犬的 shock rate——貓 shock rate 僅犬的一半',
    '高血鉀病患使用含鉀輸液（LRS）——應改用 0.9% NaCl',
    '輸液「開了就忘了」——未持續監測灌流指標與體重變化',
    '過度依賴膠體液——合成膠體有凝血異常與 AKI 風險，近年使用趨保守',
    '忽略液體過負荷徵象——持續大量輸液致肺水腫',
  ],
  disease_data: null,
  diagnostic_data: null,
  procedure_data: null,
  visual_placeholders: [
    { position: '輸液種類表格後', type: 'comparison_table', description: '常用晶體液成分比較表' },
    { position: '速率計算段落', type: 'flowchart', description: '休克輸液復甦決策流程圖' },
  ],
  interactive_placeholders: [
    { position: '脫水矯正段落後', type: 'fluid_calculator', description: '輸液速率計算器（輸入體重、脫水%、復甦/維持）' },
  ],
  drug_api_links: ['Furosemide', 'Hetastarch'],
  references: [
    { type: 'textbook', citation: 'Silverstein DC, Hopper K. Small Animal Critical Care Medicine, 3rd ed. Elsevier, 2022. Chapter: Fluid Therapy.', relevance: 'ECC 核心教材輸液治療章節' },
    { type: 'guideline', citation: 'Davis H, Jensen T, Johnson A, et al. 2013 AAHA/AAFP fluid therapy guidelines for dogs and cats. JAAHA. 2013;49(3):149-159.', relevance: 'AAHA/AAFP 犬貓輸液治療指引' },
    { type: 'journal', citation: 'Cazzolli D, Prittie J. The crystalloid-colloid debate: consequences of resuscitation fluid selection in veterinary critical care. JVECC. 2015;25(1):6-19.', relevance: '晶體液 vs 膠體液辯論回顧' },
  ],
  is_current: true,
  created_at: now,
};

/** ECC-L5-003 輸血醫學 — 治療型 */
const contentTransfusion: NodeContent = {
  id: 'CONTENT-ECC-L5-003',
  node_id: 'ECC-L5-003',
  version: 1,
  summary: '輸血醫學是 ECC 的關鍵治療技術，適用於嚴重貧血、急性失血、凝血障礙與低白蛋白血症。犬有 DEA（Dog Erythrocyte Antigen）血型系統，DEA 1.1 陰性為理想供血犬。貓有 AB 血型系統，B 型貓輸入 A 型血可致命性急性溶血反應。所有貓必須做交叉配血試驗（crossmatch）。血品包括全血（WB）、濃縮紅血球（pRBC）、新鮮冷凍血漿（FFP）與冷沉澱物（cryoprecipitate）。輸血反應分為免疫性與非免疫性，發燒和蕁麻疹最常見。',
  learning_objectives: [
    '描述犬貓血型系統並說明交叉配血的重要性',
    '列出常用血品種類並描述各自的適應症',
    '計算輸血量並制定安全的輸血速率',
    '辨識急性與延遲性輸血反應並執行緊急處置',
    '說明台灣獸醫血庫現況與血品取得途徑',
  ],
  key_points: [
    '犬血型：DEA 1.1 陰性為理想全能供血犬；首次輸血可不做 crossmatch 但仍建議做',
    '貓血型：A 型最常見（> 95% 台灣貓），B 型罕見但極危險——B 型貓有天然抗 A 抗體，輸 A 型血可致命',
    '所有貓輸血前必須做血型鑑定 + 交叉配血（major + minor crossmatch）',
    '犬首次輸血後 4-7 天產生抗體，第二次輸血必須做 crossmatch',
    'pRBC 輸血量(mL) = BW(kg) × 血容量(mL/kg) × (目標PCV - 實際PCV) / 供血PCV',
    '犬血容量 90 mL/kg，貓血容量 60 mL/kg',
    '安全輸血速率：前 15-30 分鐘慢速（0.5-1 mL/kg/hr）→ 無反應後加速至 5-10 mL/kg/hr',
    '嚴重失血/休克可以 shock rate 輸血（20 mL/kg/hr 犬、10 mL/kg/hr 貓）',
    'FFP 10-15 mL/kg 用於凝血因子補充（DIC、鼠藥中毒、肝衰竭）',
    '急性溶血反應：發燒、血紅素尿、低血壓、DIC——立即停止輸血！',
  ],
  body: `# 輸血醫學 (Transfusion Medicine)

## 一、治療原理 (Treatment Principles)



### 犬貓血型系統
### 犬 (DEA 系統)
- DEA 1.1 陰性：理想供血犬（無誘發 DEA 1.1 抗體風險）
- DEA 1.1 陽性：可輸給 DEA 1.1 陽性犬
- 首次輸血：犬無天然同種抗體，首次輸血嚴重反應罕見
- **第二次輸血後風險急增**——4-7 天產生抗體

### 貓 (AB 系統)
- **A 型**：最常見（台灣 > 95%）
- **B 型**：罕見但極危險——有天然高效價抗 A 抗體
- **AB 型**：極罕見，為全能受血者
- **重要**：B 型貓輸 A 型血→數分鐘內致命性急性溶血

### 交叉配血 (Crossmatch)
- **Major crossmatch**：受血者血清 + 供血者紅血球→偵測受血者抗體
- **Minor crossmatch**：供血者血清 + 受血者紅血球→偵測供血者抗體
- **何時必做**：所有貓、犬曾接受過輸血者、犬首次輸血 > 4 天前曾輸過血

### 血品種類
| 血品 | 成分 | 適應症 | 劑量 | 儲存 |
|------|------|--------|------|------|
| 全血 (WB) | RBC + 血漿 + 血小板 | 急性大量失血 | 20 mL/kg | 冷藏 28 天 |
| 濃縮紅血球 (pRBC) | RBC | 貧血（IMHA、慢性失血） | 依公式計算 | 冷藏 28-42 天 |
| FFP | 凝血因子 + 白蛋白 + AT | DIC、凝血障礙、鼠藥中毒 | 10-15 mL/kg | 冷凍 1 年 |
| 冷沉澱物 (Cryo) | vWF + Fibrinogen + FVIII | vWD 出血、低纖維蛋白原 | 1 U/5 kg | 冷凍 1 年 |

### 輸血量計算
### pRBC
pRBC (mL) = BW(kg) × 血容量(mL/kg) × (目標PCV - 實際PCV) / 供血者PCV
- 犬血容量：90 mL/kg
- 貓血容量：60 mL/kg
- 供血者 pRBC PCV 通常 60-80%

### 簡易估算
犬：1 mL pRBC/kg 可升高 PCV 約 1%
貓：1.5 mL pRBC/kg 可升高 PCV 約 1%

### 輸血程序
1. 血型鑑定 + crossmatch
2. 記錄輸血前生命徵象（T, HR, RR, BP）
3. 血品回溫至室溫（不可微波或熱水加熱）
4. 使用輸血濾器（170-260 μm）
5. **前 15-30 分鐘慢速**：0.5-1 mL/kg/hr
6. 每 15 分鐘監測生命徵象
7. 無反應後加速至 5-10 mL/kg/hr
8. 血品 4 小時內輸完（減少細菌污染風險）

### 輸血反應
| 反應 | 時間 | 徵象 | 處置 |
|------|------|------|------|
| 急性溶血 | 分鐘至小時 | 發燒、血紅素尿、低血壓、DIC | 立即停止！輸液、Epinephrine |
| 發燒性非溶血 | 1-2 小時 | 體溫升高 ≥ 1 C | 暫停，退燒後可考慮繼續 |
| 過敏/蕁麻疹 | 分鐘至小時 | 蕁麻疹、顏面水腫、嘔吐 | 暫停，Diphenhydramine 2 mg/kg |
| TACO | 數小時 | 呼吸窘迫、肺水腫 | 停止輸血，Furosemide |
| TRALI | 1-6 小時 | 急性呼吸窘迫、非心因性肺水腫 | 支持治療、氧氣 |

[圖片:輸血決策流程圖（血品選擇→速率→監測→反應處置）]

## 二、藥物/方法比較 (Comparison)

## 三、併發症與監控 (Complications & Monitoring)

## 四、預後影響 (Prognostic Impact)

## 五、人醫借鑒 (Translational Insights)

| 人醫工具/概念 | 獸醫應用潛力 | 現況 |
|-------------|-------------|------|
| 體外膜氧合（ECMO） | 犬嚴重急性呼吸窘迫/心因性休克 | 人醫成熟技術，獸醫因成本極少使用 |
| 毒物即時檢測（POC toxicology） | 犬中毒即時確認毒物種類 | 人醫快速檢測套組，獸醫可用性有限 |
| 治療性低溫（targeted temperature management） | 犬心停復甦後腦保護 | 人醫已為標準，獸醫初步研究 |
| 血漿交換（plasmapheresis） | 犬嚴重免疫介導疾病急救 | 少數獸醫轉介中心可執行 |

## 六、臨床爭議與知識空缺 (Controversies & Knowledge Gaps)

| 爭議議題 | 現況 | Evidence Level |
|---------|------|---------------|
| 犬 GDV 術後心律不整的治療閾值 | Lidocaine 何時開始？VPC rate >20/min vs 出現 R-on-T 的爭議 | Level III |
| 犬中毒洗胃 vs 催吐 vs 活性碳的適用時機 | 催吐時間窗（2 小時）、活性碳對特定毒物效果的個別化決策 | Level II |
| 犬急性腎損傷的體液治療量 | 傳統大量輸液 vs 限制性輸液策略——獸醫缺乏比較數據 | Level III |
| 犬蛇咬傷抗毒血清的劑量與重複給藥標準 | 台灣蛇種特異性數據不足，多參考國際經驗 | Level III |`,
  clinical_pearl: '貓輸血的最大陷阱是血型不合。雖然台灣 > 95% 的貓是 A 型，但一旦遇到 B 型貓輸了 A 型血，數分鐘內可能發生致命性急性溶血。成本再低的床邊血型鑑定卡都值得做。另外一個常犯錯誤是輸血太快——前 15-30 分鐘一定要慢（0.5-1 mL/kg/hr），觀察有無反應再加速。心臟病的動物更要慢，否則 volume overload 致肺水腫。',
  common_mistakes: [
    '貓輸血前未做血型鑑定——B 型貓輸 A 型血可致命',
    '輸血一開始就用快速率——前 15-30 分鐘必須慢速觀察',
    '忽略監測輸血反應——應每 15 分鐘測生命徵象',
    '犬第二次輸血未做 crossmatch——首次輸血後已產生抗體',
    '血品超過 4 小時仍在輸注——細菌污染風險增加',
  ],
  disease_data: null,
  diagnostic_data: null,
  procedure_data: null,
  visual_placeholders: [
    { position: '血品表格後', type: 'comparison_table', description: '血品種類與適應症速查表' },
    { position: '輸血反應表格後', type: 'flowchart', description: '輸血反應緊急處置流程圖' },
  ],
  interactive_placeholders: [
    { position: '輸血量計算段落', type: 'drug_calculator', description: '輸血量計算器（輸入體重、PCV、物種）' },
  ],
  drug_api_links: ['Diphenhydramine', 'Furosemide', 'Epinephrine'],
  references: [
    { type: 'textbook', citation: 'Silverstein DC, Hopper K. Small Animal Critical Care Medicine, 3rd ed. Elsevier, 2022. Chapter: Transfusion Medicine.', relevance: 'ECC 核心教材輸血醫學章節' },
    { type: 'journal', citation: 'Tocci LJ, Ewing PJ. Increasing patient safety in veterinary transfusion medicine: an overview of pretransfusion testing. JVECC. 2009;19(1):66-73.', relevance: '輸血前檢測安全標準' },
    { type: 'guideline', citation: 'Davidow B. Transfusion medicine in small animals. Vet Clin North Am Small Anim Pract. 2013;43(4):735-756.', relevance: '小動物輸血醫學綜合指引' },
  ],
  is_current: true,
  created_at: now,
};

/** ECC-L5-004 急診止痛策略 — 治療型 */
const contentAnalgesia: NodeContent = {
  id: 'CONTENT-ECC-L5-004',
  node_id: 'ECC-L5-004',
  version: 1,
  summary: '疼痛管理是急診醫學的基本義務——未處理的疼痛加重 SIRS、延遲復原、增加發病率。急診止痛採用多模式鎮痛（multimodal analgesia）原則，結合 opioids、NSAIDs、Ketamine、局部麻醉等不同機轉藥物以達最佳效果並減少單一藥物副作用。疼痛評估使用標準化量表（犬 Glasgow CMPS-SF、貓 UNESP-Botucatu Feline Pain Scale）。Opioids 是急診止痛的基石：犬首選 Methadone/Hydromorphone，貓首選 Buprenorphine/Methadone。',
  learning_objectives: [
    '運用疼痛評估量表評估犬貓急診病患的疼痛程度',
    '描述多模式鎮痛的原理與臨床優勢',
    '列出急診常用止痛藥物的劑量、適應症與禁忌症',
    '制定不同嚴重度疼痛的分級止痛方案',
    '辨識止痛藥物的副作用並執行適當監測',
  ],
  key_points: [
    '疼痛評估是第五生命徵象——每個急診病患都應評估並記錄',
    '犬疼痛量表：Glasgow CMPS-SF（0-20 分，≥ 6 分需止痛介入）',
    '貓疼痛量表：UNESP-Botucatu Feline Pain Scale 或 Feline Grimace Scale',
    '多模式鎮痛（multimodal analgesia）：不同機轉藥物組合→協同效果、降低個別劑量、減少副作用',
    'Opioids 為急診止痛基石：mu-agonist（Methadone、Hydromorphone、Fentanyl）效果最強',
    'Buprenorphine（partial mu-agonist）為貓首選——效果好、口腔黏膜給藥方便、副作用少',
    'NSAIDs 禁忌：脫水/休克、腎功能不全、GI 出血、凝血異常、妊娠——急診常見禁忌情境',
    'Ketamine sub-anesthetic dose（0.2-0.5 mg/kg IV bolus → 2-10 mcg/kg/min CRI）：NMDA 拮抗、風暴性疼痛有效',
    'CRI（持續靜脈輸注）止痛用於嚴重/持續性疼痛：Fentanyl CRI 或 MLK（Morphine-Lidocaine-Ketamine）',
    '局部麻醉（Lidocaine、Bupivacaine）在可行時應積極使用——效果確實、全身副作用最小',
  ],
  body: `# 急診止痛策略 (Emergency Analgesia)

## 一、治療原理 (Treatment Principles)



### 疼痛評估
### 犬
- **Glasgow CMPS-SF**（Composite Measure Pain Scale - Short Form）：0-20 分
  - ≥ 6/20 分：需要止痛介入
  - 包含六個行為類別：自發行為、對傷口反應、活動力等

### 貓
- **Feline Grimace Scale (FGS)**：0-10 分
  - 評估五個面部特徵：耳位、眼瞼、嘴部、鬍鬚、頭位
  - ≥ 4/10 分：需要止痛介入

### 多模式鎮痛原則
結合不同機轉藥物作用於疼痛傳導路徑的不同層級：
- **周邊**：NSAIDs、局部麻醉
- **脊髓**：Opioids、alpha-2 agonists、Ketamine
- **中樞**：Opioids、Ketamine

### 分級止痛方案
| 疼痛程度 | 範例 | 處置 |
|---------|------|------|
| 輕度 | 軟組織傷口 | Buprenorphine ± NSAIDs |
| 中度 | 骨折、腹痛 | Methadone/Hydromorphone ± NSAIDs |
| 重度 | 多重創傷、GDV | Fentanyl CRI + Ketamine CRI ± 局麻 |
| 極重度 | 燒傷、截肢 | MLK CRI + 局部神經阻斷 |

[圖片:多模式鎮痛原理與分級止痛方案圖]

## 二、藥物/方法比較 (Comparison)

### 急診止痛藥物
### Opioids（基石藥物）

| 藥物 | 類型 | 劑量（犬） | 劑量（貓） | 持續時間 | 備註 |
|------|------|-----------|-----------|---------|------|
| [藥物:Methadone] | Full mu | 0.2-0.5 mg/kg IV/IM | 0.2-0.3 mg/kg IV/IM | 3-4 hr | 犬貓均適用首選 |
| [藥物:Hydromorphone] | Full mu | 0.05-0.2 mg/kg IV/IM | 0.05-0.1 mg/kg IV/IM | 3-4 hr | 貓偶致高體溫 |
| [藥物:Fentanyl] | Full mu | 2-5 mcg/kg IV bolus | 1-3 mcg/kg IV bolus | 20-30 min | 用於 CRI：2-10 mcg/kg/hr |
| [藥物:Buprenorphine] | Partial mu | 0.01-0.03 mg/kg IV/IM | 0.02-0.04 mg/kg IV/buccal | 6-8 hr | 貓首選，口腔黏膜吸收佳 |
| [藥物:Butorphanol] | Kappa/mu antagonist | 0.2-0.4 mg/kg IV/IM | 0.2-0.4 mg/kg IV/IM | 1-2 hr | 鎮靜佳但止痛弱，內臟痛限定 |

### NSAIDs

| 藥物 | 劑量（犬） | 劑量（貓） | 備註 |
|------|-----------|-----------|------|
| [藥物:Meloxicam] | 0.2 mg/kg IV/SC 首劑 → 0.1 mg/kg PO SID | 0.1-0.2 mg/kg SC 單劑 | 貓僅限單次注射/短期 |
| [藥物:Carprofen] | 4.4 mg/kg SC/IV 首劑 → 2.2 mg/kg PO BID | 不推薦 | 犬術後常用 |

**NSAIDs 急診禁忌**：脫水/休克（腎灌流不足）、腎病、GI 出血、凝血障礙、同時使用類固醇

### Ketamine (Sub-anesthetic)

| 用途 | Bolus | CRI | 備註 |
|------|-------|-----|------|
| 急性疼痛輔助 | 0.2-0.5 mg/kg IV | 2-10 mcg/kg/min | NMDA 拮抗，抗痛覺過敏 |
| MLK (犬) | — | Morphine 0.1 mg/kg/hr + Lidocaine 25-50 mcg/kg/min + Ketamine 2-10 mcg/kg/min | 嚴重創傷/術後 |

### 局部麻醉

| 藥物 | 濃度 | 最大劑量 | 持續時間 | 用途 |
|------|------|---------|---------|------|
| [藥物:Lidocaine] | 2% | 犬 6 mg/kg, 貓 4 mg/kg | 1-2 hr | 傷口浸潤、區域阻斷 |
| [藥物:Bupivacaine] | 0.5% | 犬 2 mg/kg, 貓 1.5 mg/kg | 4-8 hr | 區域阻斷、腹腔灌注 |

## 三、併發症與監控 (Complications & Monitoring)

## 四、預後影響 (Prognostic Impact)

## 五、人醫借鑒 (Translational Insights)

| 人醫工具/概念 | 獸醫應用潛力 | 現況 |
|-------------|-------------|------|
| 體外膜氧合（ECMO） | 犬嚴重急性呼吸窘迫/心因性休克 | 人醫成熟技術，獸醫因成本極少使用 |
| 毒物即時檢測（POC toxicology） | 犬中毒即時確認毒物種類 | 人醫快速檢測套組，獸醫可用性有限 |
| 治療性低溫（targeted temperature management） | 犬心停復甦後腦保護 | 人醫已為標準，獸醫初步研究 |
| 血漿交換（plasmapheresis） | 犬嚴重免疫介導疾病急救 | 少數獸醫轉介中心可執行 |

## 六、臨床爭議與知識空缺 (Controversies & Knowledge Gaps)

| 爭議議題 | 現況 | Evidence Level |
|---------|------|---------------|
| 犬 GDV 術後心律不整的治療閾值 | Lidocaine 何時開始？VPC rate >20/min vs 出現 R-on-T 的爭議 | Level III |
| 犬中毒洗胃 vs 催吐 vs 活性碳的適用時機 | 催吐時間窗（2 小時）、活性碳對特定毒物效果的個別化決策 | Level II |
| 犬急性腎損傷的體液治療量 | 傳統大量輸液 vs 限制性輸液策略——獸醫缺乏比較數據 | Level III |
| 犬蛇咬傷抗毒血清的劑量與重複給藥標準 | 台灣蛇種特異性數據不足，多參考國際經驗 | Level III |`,
  clinical_pearl: '急診中最常被忽略的疼痛是「隱匿性疼痛」——貓不會叫、不會呻吟，只是縮在籠角不動。很多人誤以為貓「很安靜所以不痛」，但 Feline Grimace Scale 會告訴你：耳朵平貼、鬍鬚前伸、眼睛半閉就是疼痛的臉。另一個關鍵：急診病患常有 NSAIDs 禁忌（脫水、休克、腎灌流不足），不要因為「方便」就給 NSAIDs——Opioid 才是急診止痛的第一選擇。',
  common_mistakes: [
    '忽略疼痛評估——未使用標準化量表就主觀判斷「不痛」',
    '脫水/休克病患使用 NSAIDs——腎灌流不足時 NSAIDs 可致 AKI',
    '僅用 Butorphanol 處理中重度疼痛——Butorphanol 止痛效力弱，中重度疼痛應用 full mu-agonist',
    '貓止痛劑量使用犬的劑量——部分藥物貓劑量不同，過量可致嚴重副作用',
    '忽略多模式鎮痛——單一藥物加量不如多種藥物低劑量組合',
  ],
  disease_data: null,
  diagnostic_data: null,
  procedure_data: null,
  visual_placeholders: [
    { position: '疼痛評估段落', type: 'annotated_image', description: 'Feline Grimace Scale 五個面部特徵示意圖' },
    { position: '分級止痛方案表格後', type: 'flowchart', description: '急診止痛決策流程圖' },
  ],
  interactive_placeholders: [
    { position: 'Opioids 表格後', type: 'drug_calculator', description: '急診止痛藥物劑量計算器（輸入體重與藥物選擇）' },
  ],
  drug_api_links: ['Methadone', 'Hydromorphone', 'Fentanyl', 'Buprenorphine', 'Butorphanol', 'Meloxicam', 'Carprofen', 'Ketamine', 'Lidocaine', 'Bupivacaine'],
  references: [
    { type: 'textbook', citation: 'Silverstein DC, Hopper K. Small Animal Critical Care Medicine, 3rd ed. Elsevier, 2022. Chapter: Analgesia and Sedation.', relevance: 'ECC 核心教材止痛章節' },
    { type: 'guideline', citation: 'Epstein ME, Rodan I, Griffenhagen G, et al. 2015 AAHA/AAFP Pain Management Guidelines for Dogs and Cats. JAAHA. 2015;51(2):67-84.', relevance: 'AAHA/AAFP 疼痛管理指引' },
    { type: 'journal', citation: 'Evangelista MC, Watanabe R, Leung VSY, et al. Facial expressions of pain in cats: the development and validation of a Feline Grimace Scale. Sci Rep. 2019;9:19128.', relevance: 'Feline Grimace Scale 開發與驗證' },
  ],
  is_current: true,
  created_at: now,
};

/** ECC-L5-005 急診營養支持 — 治療型 */
const contentNutrition: NodeContent = {
  id: 'CONTENT-ECC-L5-005',
  node_id: 'ECC-L5-005',
  version: 1,
  summary: '急診營養支持是重症管理中常被低估但對預後有顯著影響的治療。重症動物處於高分解代謝狀態（負氮平衡），早期營養支持（入院 12-24 小時內）可維護 GI 屏障完整性、降低細菌移位風險、改善免疫功能與促進傷口癒合。腸道營養（enteral nutrition, EN）優先於靜脈營養（parenteral nutrition, PN），因為「使用腸道或失去腸道」（Use it or lose it）。餵食管選擇依預期使用時間與病患狀態決定：鼻食管（短期）→ 食道管（中期）→ 胃管/空腸管（長期）。',
  learning_objectives: [
    '說明重症動物的代謝特徵與營養需求',
    '描述早期腸道營養的臨床益處',
    '選擇適當的餵食管並計算營養需求',
    '制定 ICU 病患的營養支持計畫（腸道/靜脈）',
    '辨識與處理再餵食症候群（refeeding syndrome）',
  ],
  key_points: [
    '重症動物 = 高分解代謝：蛋白質分解↑、糖新生↑、脂肪氧化↑ → 肌肉流失、免疫低下',
    '早期腸道營養（12-24 小時內開始）可降低感染併發症、維護 GI 屏障、縮短住院天數',
    '腸道營養優先原則：Use it or lose it——腸道休息 > 3 天即開始萎縮',
    '休息能量需求（RER）= 70 × BW(kg)^0.75 或簡化為 30 × BW + 70（2-30 kg 動物）',
    '第一天給予 RER 的 1/3，第二天 2/3，第三天全量——避免 refeeding syndrome',
    '鼻食管（NE tube）：最快放置（無需麻醉），適用短期（3-7 天），僅能給液態飲食',
    '食道管（E-tube）：需短暫麻醉放置，可用較大管徑（10-14 Fr），可給泥狀飲食，適用中期（數週至數月）',
    '靜脈營養（PN）僅在腸道完全無法使用時考慮（腸阻塞、嚴重腸麻痺、無法放置餵食管）',
    'Refeeding syndrome：長期飢餓後過快營養恢復→胰島素驟升→低磷血症/低鉀血症/低鎂血症→可致命',
    '蛋白質需求：犬 4-6 g/100 kcal、貓 6-8 g/100 kcal（貓為絕對肉食動物，蛋白需求更高）',
  ],
  body: `# 急診營養支持 (Emergency Nutritional Support)

## 一、治療原理 (Treatment Principles)



### 概述
營養支持在急診加護中常被視為「等穩定了再說」，但研究顯示早期營養介入對重症預後有顯著正向影響。

### 重症代謝特徵
| 特徵 | 說明 | 臨床後果 |
|------|------|---------|
| 高分解代謝 | 蛋白質分解加速，負氮平衡 | 肌肉流失、免疫功能低下 |
| 糖新生亢進 | 肝臟大量分解胺基酸產糖 | 高血糖（外源性胰島素抗性） |
| 脂肪氧化增加 | 脂肪動員作為能源 | 肝脂肪浸潤（尤其貓） |
| 胰島素抗性 | 應激荷爾蒙導致 | 高血糖加重感染風險 |

### 營養需求計算
### 休息能量需求 (RER)
- **精確公式**：RER (kcal/day) = 70 × BW(kg)^0.75
- **簡化公式**：RER = 30 × BW(kg) + 70（適用 2-30 kg）
- ICU 病患一般給予 RER（不需乘以疾病因子——過去的 illness factor 已不建議使用）

### 蛋白質需求
- 犬：4-6 g protein / 100 kcal
- 貓：6-8 g protein / 100 kcal
- 重症/燒傷/蛋白質流失性腸病：需求更高

### 腸道營養途徑
| 餵食管 | 放置 | 管徑 | 適用時間 | 飲食型態 | 優點 |
|--------|------|------|---------|---------|------|
| 鼻食管 (NE) | 免麻醉 | 5-8 Fr | 3-7 天 | 液態 | 快速、低侵入性 |
| 食道管 (E-tube) | 短暫麻醉 | 10-14 Fr | 數週至數月 | 泥狀/液態 | 管徑大、可居家管灌 |
| 胃管 (G-tube) | 手術/內視鏡 | 18-24 Fr | 長期 | 泥狀 | 管徑最大 |
| 空腸管 (J-tube) | 手術 | 5-8 Fr | 中期 | 液態 | 繞過上 GI 問題 |

### 營養支持計畫
### 第一天
- RER 的 1/3
- 少量多餐（q4-6h）
- 確認無嘔吐/反流

### 第二天
- RER 的 2/3
- 評估耐受性

### 第三天起
- 全量 RER
- 持續監測

### Refeeding Syndrome（再餵食症候群）
長期飢餓（> 3-5 天）後恢復營養→胰島素大量分泌→磷、鉀、鎂被驅入細胞→嚴重低磷/低鉀/低鎂→心律不整、呼吸衰竭、溶血

**預防策略**：
1. 識別高風險群（飢餓 > 3-5 天、重度消瘦、貓肝脂肪病）
2. 起始僅給 RER 的 25%，每 12-24 小時增加 25%
3. 輸液中預先補充磷與鉀
4. 營養恢復前 12 小時開始監測磷、鉀、鎂，此後 q12h × 3 天

### 靜脈營養 (PN)
僅在腸道完全無法使用時考慮：
- **部分靜脈營養（PPN）**：經周邊靜脈，滲透壓限制（< 900 mOsm/L），僅能供應部分需求
- **全靜脈營養（TPN）**：需中心靜脈導管，可供應完整需求
- PN 併發症：感染（導管相關血流感染）、高血糖、高三酸甘油酯、機械性（血栓/空氣栓塞）

[圖片:ICU 營養支持決策流程圖]

## 二、藥物/方法比較 (Comparison)

## 三、併發症與監控 (Complications & Monitoring)

## 四、預後影響 (Prognostic Impact)

## 五、人醫借鑒 (Translational Insights)

| 人醫工具/概念 | 獸醫應用潛力 | 現況 |
|-------------|-------------|------|
| 體外膜氧合（ECMO） | 犬嚴重急性呼吸窘迫/心因性休克 | 人醫成熟技術，獸醫因成本極少使用 |
| 毒物即時檢測（POC toxicology） | 犬中毒即時確認毒物種類 | 人醫快速檢測套組，獸醫可用性有限 |
| 治療性低溫（targeted temperature management） | 犬心停復甦後腦保護 | 人醫已為標準，獸醫初步研究 |
| 血漿交換（plasmapheresis） | 犬嚴重免疫介導疾病急救 | 少數獸醫轉介中心可執行 |

## 六、臨床爭議與知識空缺 (Controversies & Knowledge Gaps)

| 爭議議題 | 現況 | Evidence Level |
|---------|------|---------------|
| 犬 GDV 術後心律不整的治療閾值 | Lidocaine 何時開始？VPC rate >20/min vs 出現 R-on-T 的爭議 | Level III |
| 犬中毒洗胃 vs 催吐 vs 活性碳的適用時機 | 催吐時間窗（2 小時）、活性碳對特定毒物效果的個別化決策 | Level II |
| 犬急性腎損傷的體液治療量 | 傳統大量輸液 vs 限制性輸液策略——獸醫缺乏比較數據 | Level III |
| 犬蛇咬傷抗毒血清的劑量與重複給藥標準 | 台灣蛇種特異性數據不足，多參考國際經驗 | Level III |`,
  clinical_pearl: '營養支持最常犯的錯誤就是「等太久」。很多急診醫師會說「等不嘔吐了再餵」「等穩定了再說」——但研究顯示早期少量腸道營養（即使只是微量營養 trickle feeding 5-10 mL/hr）對維護腸屏障的價值遠大於等到「完全準備好」。貓尤其重要：貓飢餓 3 天以上就有肝脂肪病風險。放一根鼻食管只要 5 分鐘，不需要麻醉，沒有理由不做。',
  common_mistakes: [
    '延遲營養支持至「穩定後」——早期營養（12-24 小時）維護腸屏障的益處已有充足證據',
    '長期飢餓動物恢復營養太快——refeeding syndrome 可致命性低磷血症',
    '未計算 RER 就「估計」餵食量——過多致 GI 不耐受，過少達不到營養目標',
    '忽略貓的高蛋白需求——貓為絕對肉食動物，蛋白質不足加速肝脂肪病',
    '腸道可用卻選擇 PN——PN 併發症多且成本高，腸道營養永遠是首選',
  ],
  disease_data: null,
  diagnostic_data: null,
  procedure_data: null,
  visual_placeholders: [
    { position: '餵食管表格後', type: 'comparison_table', description: '餵食管種類比較圖（含放置位置示意）' },
    { position: '營養計畫段落', type: 'flowchart', description: 'ICU 營養支持決策流程圖' },
  ],
  interactive_placeholders: [
    { position: 'RER 計算段落', type: 'nutrition_calculator', description: 'RER/營養需求計算器（輸入體重與物種）' },
  ],
  drug_api_links: [],
  references: [
    { type: 'textbook', citation: 'Silverstein DC, Hopper K. Small Animal Critical Care Medicine, 3rd ed. Elsevier, 2022. Chapter: Nutritional Support of Critical Illness.', relevance: 'ECC 核心教材營養支持章節' },
    { type: 'journal', citation: 'Liu DT, Brown DC, Silverstein DC. Early nutritional support is associated with decreased length of hospitalization in dogs with septic peritonitis: a retrospective study of 45 cases (2000-2009). JVECC. 2012;22(4):453-459.', relevance: '早期營養支持與住院天數關係' },
    { type: 'guideline', citation: 'Chan DL. Nutritional requirements of the critically ill patient. Clin Tech Small Anim Pract. 2004;19(1):1-5.', relevance: '重症營養需求指引' },
  ],
  is_current: true,
  created_at: now,
};

/** 以 Map 方式匯出，方便用 nodeId 快速查找 */
export const ECC_CONTENTS = new Map<string, NodeContent>([
  ['ECC-L0-001', contentECCOverview],
  ['ECC-L1-001', contentShockPhysiology],
  ['ECC-L1-002', contentFluidElectrolyte],
  ['ECC-L1-003', contentAcidBase],
  ['ECC-L2-001', contentSIRS],
  ['ECC-L2-002', contentMODS],
  ['ECC-L2-003', contentDIC],
  ['ECC-L3-001', contentAnaphylaxis],
  ['ECC-L3-002', contentDKA],
  ['ECC-L3-003', contentHeatStroke],
  ['ECC-L3-004', contentFUO],
  ['ECC-L3-005', contentToxEmergency],
  ['ECC-L3-006', contentSE],
  ['ECC-L3-007', contentCommonTox],
  ['ECC-L3-008', contentSnakeToad],
  ['ECC-L4-001', contentTriage],
  ['ECC-L4-002', contentPOCUS],
  ['ECC-L5-001', contentIVFluid],
  ['ECC-L5-002', contentCPR],
  ['ECC-L5-003', contentTransfusion],
  ['ECC-L5-004', contentAnalgesia],
  ['ECC-L5-005', contentNutrition],
]);
