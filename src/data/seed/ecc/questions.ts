import type { ReviewQuestion } from '@/types/quiz';

export const ECC_QUESTIONS: ReviewQuestion[] = [
  // MCQ 1: Shock types
  {
    id: 'Q-ECC-001', node_id: 'ECC-L1-001', question_type: 'mcq',
    question: '下列何者屬於分布性休克（distributive shock）？',
    options: ['低血容性休克', '心因性休克', '過敏性休克', '阻塞性休克'],
    correct_answer: '過敏性休克',
    explanation: '分布性休克的特徵是血管擴張導致有效循環血量不足。過敏性休克（anaphylaxis）因大量組織胺等介質釋放導致全身性血管擴張，屬於典型的分布性休克。其他分布性休克包括敗血性休克與神經性休克。',
    difficulty: 2, spaced_rep: true, tags: ['休克', '分類'], image_placeholder: null,
  },
  // MCQ 2: Fluid bolus rates
  {
    id: 'Q-ECC-002', node_id: 'ECC-L5-001', question_type: 'mcq',
    question: '犬休克液體復甦時，等張晶體液（如 LRS）的建議靜脈快速輸注量為？',
    options: ['10-20 mL/kg', '20-30 mL/kg', '60-90 mL/kg', '100-120 mL/kg'],
    correct_answer: '60-90 mL/kg',
    explanation: '犬的休克劑量（shock dose）為等張晶體液 60-90 mL/kg（約為血液量的一倍），通常分 1/4 至 1/3 量（即 15-30 mL/kg）快速輸注後再評估反應。貓的休克劑量較低，約 40-60 mL/kg。切忌一次灌完全量。',
    difficulty: 3, spaced_rep: true, tags: ['輸液', '休克', '劑量'], image_placeholder: null,
  },
  // MCQ 3: DKA insulin protocol
  {
    id: 'Q-ECC-003', node_id: 'ECC-L3-002', question_type: 'mcq',
    question: '糖尿病酮酸血症（DKA）的 regular insulin CRI 治療，建議起始劑量為？',
    options: ['0.01 U/kg/hr', '0.05 U/kg/hr', '0.1 U/kg/hr', '0.5 U/kg/hr'],
    correct_answer: '0.05 U/kg/hr',
    explanation: 'DKA 治療中，regular insulin CRI 建議起始劑量為 0.05 U/kg/hr（低劑量方案），目標是血糖每小時下降不超過 50-75 mg/dL。過快降血糖可能導致腦水腫。開始 insulin 前必須先補充液體並確認血鉀不低。',
    difficulty: 4, spaced_rep: true, tags: ['DKA', 'insulin', '劑量'], image_placeholder: null,
  },
  // MCQ 4: Epinephrine CPR dose
  {
    id: 'Q-ECC-004', node_id: 'ECC-L5-002', question_type: 'mcq',
    question: '根據 RECOVER 指引，CPR 中 epinephrine 的標準劑量為？',
    options: ['0.001 mg/kg IV', '0.01 mg/kg IV', '0.1 mg/kg IV', '1 mg/kg IV'],
    correct_answer: '0.01 mg/kg IV',
    explanation: 'RECOVER 指引建議 CPR 中使用低劑量 epinephrine 0.01 mg/kg IV，每 3-5 分鐘可重複給予。高劑量（0.1 mg/kg）僅在低劑量無效且為長時間 CPR 時才考慮使用。常見錯誤是直接使用高劑量。',
    difficulty: 3, spaced_rep: true, tags: ['CPR', 'RECOVER', '藥物劑量'], image_placeholder: null,
  },
  // MCQ 5: RECOVER algorithm
  {
    id: 'Q-ECC-005', node_id: 'ECC-L5-002', question_type: 'mcq',
    question: 'RECOVER CPR 指引中，胸外按壓的建議速率為？',
    options: ['60-80 次/分', '80-100 次/分', '100-120 次/分', '120-150 次/分'],
    correct_answer: '100-120 次/分',
    explanation: 'RECOVER 指引建議胸外按壓速率為 100-120 次/分，與人醫 AHA 指引一致。按壓深度為胸廓寬度的 1/3 至 1/2，每次按壓後需確保胸壁完全回彈。建議使用節拍器輔助維持正確速率。',
    difficulty: 2, spaced_rep: true, tags: ['CPR', 'RECOVER', 'BLS'], image_placeholder: null,
  },
  // MCQ 6: Anaphylaxis treatment
  {
    id: 'Q-ECC-006', node_id: 'ECC-L3-001', question_type: 'mcq',
    question: '犬過敏性休克的第一線治療藥物為？',
    options: ['Diphenhydramine', 'Dexamethasone', 'Epinephrine', 'Famotidine'],
    correct_answer: 'Epinephrine',
    explanation: 'Epinephrine 是過敏性休克的第一線治療藥物（0.01-0.02 mg/kg IM 或 IV slow）。它可同時處理血管擴張（alpha-1 收縮血管）、支氣管痙攣（beta-2 舒張支氣管）與心輸出量降低（beta-1 正性肌力）。抗組織胺與類固醇為輔助治療，不應延遲 epinephrine 的給予。',
    difficulty: 3, spaced_rep: true, tags: ['過敏性休克', '治療', '藥物'], image_placeholder: null,
  },
  // MCQ 7: Heat stroke cooling
  {
    id: 'Q-ECC-007', node_id: 'ECC-L3-003', question_type: 'mcq',
    question: '犬中暑的主動降溫措施中，建議停止降溫的目標體溫為？',
    options: ['37.0 C', '38.0 C', '39.5 C', '40.0 C'],
    correct_answer: '39.5 C',
    explanation: '中暑主動降溫時，建議在體溫降至 39.5 C 時停止降溫措施，以避免反彈性低體溫（rebound hypothermia）。降溫方法包括室溫水（非冰水）噴灑體表、風扇吹拂、靜脈輸注室溫液體。禁用冰水浸泡，因會導致周邊血管收縮反而延遲散熱。',
    difficulty: 3, spaced_rep: true, tags: ['中暑', '降溫', '犬'], image_placeholder: null,
  },
  // MCQ 8: Feline UO potassium
  {
    id: 'Q-ECC-008', node_id: 'ECC-L3-004', question_type: 'mcq',
    question: '貓尿道阻塞最致命的電解質異常為？',
    options: ['低血鈉', '高血鈣', '高血鉀', '低血磷'],
    correct_answer: '高血鉀',
    explanation: '貓尿道阻塞導致無法排尿，鉀離子蓄積造成高血鉀（hyperkalemia）。血鉀 > 7-8 mEq/L 可導致嚴重心律不整（心搏過緩、房室傳導阻滯、心室停搏），為最常見的致死原因。ECG 特徵包括 T 波高尖、P 波消失、QRS 波增寬。緊急處置包括 10% calcium gluconate 0.5-1.5 mL/kg IV slow 保護心肌。',
    difficulty: 3, spaced_rep: true, tags: ['尿道阻塞', '貓', '高血鉀'], image_placeholder: null,
  },
  // True/False 9: SIRS criteria
  {
    id: 'Q-ECC-009', node_id: 'ECC-L2-001', question_type: 'true_false',
    question: '犬的 SIRS 診斷標準為符合以下四項中的兩項以上：心率 > 120 bpm、呼吸速率 > 20 次/分、體溫 < 38.1 C 或 > 39.2 C、WBC < 6,000 或 > 16,000/uL。',
    options: ['正確', '錯誤'],
    correct_answer: '正確',
    explanation: '犬的 SIRS 標準需符合四項中的至少兩項：(1) 心率 > 120 bpm、(2) 呼吸速率 > 20 次/分、(3) 體溫 < 38.1 C 或 > 39.2 C、(4) WBC < 6,000 或 > 16,000/uL 或 band neutrophils > 3%。注意貓的標準不同（如心率 > 225 bpm）。',
    difficulty: 3, spaced_rep: true, tags: ['SIRS', '診斷標準'], image_placeholder: null,
  },
  // True/False 10: AFAST views
  {
    id: 'Q-ECC-010', node_id: 'ECC-L4-002', question_type: 'true_false',
    question: 'AFAST（Abdominal Focused Assessment with Sonography for Trauma）標準評估包含四個視窗：膀胱直腸窩（cysto-colic view）、脾腎間隙（spleno-renal view）、肝腎間隙（hepato-renal view）及膈肝間隙（diaphragmatico-hepatic view）。',
    options: ['正確', '錯誤'],
    correct_answer: '正確',
    explanation: 'AFAST 的四個標準視窗為：(1) 膀胱直腸窩（DH view 的腹側延伸）、(2) 脾腎間隙（左側腹）、(3) 肝腎間隙（右側腹）、(4) 膈肝間隙（劍突下）。每個視窗評估是否有游離液體，以半定量方式（0-4 分）記錄腹腔積液程度。',
    difficulty: 4, spaced_rep: true, tags: ['AFAST', 'POCUS', '超音波'], image_placeholder: null,
  },
  // Fill blank 11: CPR ETCO2
  {
    id: 'Q-ECC-011', node_id: 'ECC-L5-002', question_type: 'fill_blank',
    question: 'CPR 期間，ETCO2（潮氣末二氧化碳）應維持在 _____ mmHg 以上，作為按壓品質的指標。ETCO2 突然上升至 _____ mmHg 以上可能提示 ROSC。',
    options: null,
    correct_answer: '15 mmHg 以上；30-40 mmHg 以上',
    explanation: 'ETCO2 > 15 mmHg 表示胸外按壓產生足夠的肺灌流，是 CPR 品質的即時客觀指標。CPR 期間 ETCO2 突然從基線跳升至 > 30-40 mmHg，通常提示自主循環恢復（ROSC），應立即評估脈搏。',
    difficulty: 4, spaced_rep: true, tags: ['CPR', 'ETCO2', '監測'], image_placeholder: null,
  },
  // Case-based 12: Shock recognition
  {
    id: 'Q-ECC-012', node_id: 'ECC-L1-001', question_type: 'case_based',
    question: '一隻 3 歲未絕育公貓因被車撞後 2 小時送至急診。理學檢查：心率 220 bpm、呼吸速率 60 次/分、體溫 36.8 C、黏膜蒼白、CRT 3 秒、股動脈脈搏微弱。腹部觸診疼痛。最可能的休克類型與最適當的初始處置為何？',
    options: [
      '低血容性休克；立即靜脈輸注等張晶體液 15 mL/kg bolus',
      '心因性休克；給予 Dobutamine CRI',
      '分布性休克；給予 Epinephrine',
      '阻塞性休克；執行心包膜穿刺',
    ],
    correct_answer: '低血容性休克；立即靜脈輸注等張晶體液 15 mL/kg bolus',
    explanation: '車禍後的貓出現典型代償性休克徵象：心跳過速（貓 > 200 bpm）、黏膜蒼白、CRT 延長、脈搏微弱、低體溫。創傷背景下最可能為低血容性休克（出血性）。腹部疼痛提示可能有腹腔內出血。初始處置為靜脈快速輸注等張晶體液 15 mL/kg（貓休克量的 1/4），評估反應後決定是否重複。同時需 AFAST 評估腹腔積液。',
    difficulty: 4, spaced_rep: true, tags: ['休克', '創傷', '貓', '臨床推理'], image_placeholder: null,
  },
];
