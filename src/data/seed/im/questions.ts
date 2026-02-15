import type { ReviewQuestion } from '@/types/quiz';

export const IM_QUESTIONS: ReviewQuestion[] = [
  // MCQ 1-8
  {
    id: 'Q-IM-001', node_id: 'IM-L3-004', question_type: 'mcq',
    question: '根據 IRIS 分期系統，犬 CKD Stage 2 的血清肌酐（Creatinine）範圍為？',
    options: ['< 1.4 mg/dL', '1.4-2.8 mg/dL', '2.9-5.0 mg/dL', '> 5.0 mg/dL'],
    correct_answer: '1.4-2.8 mg/dL',
    explanation: 'IRIS 犬 CKD 分期：Stage 1 Cre < 1.4、Stage 2 Cre 1.4-2.8、Stage 3 Cre 2.9-5.0、Stage 4 Cre > 5.0 mg/dL。Stage 2 為輕度氮血症，通常可見多渴多尿。',
    difficulty: 2, spaced_rep: true, tags: ['CKD', 'IRIS', 'staging'], image_placeholder: null,
  },
  {
    id: 'Q-IM-002', node_id: 'IM-L3-001', question_type: 'mcq',
    question: '犬腎上腺皮質機能亢進（Cushing\'s Disease）的首選篩選檢查為何？',
    options: ['ACTH 刺激試驗', '低劑量 Dexamethasone 抑制試驗（LDDS）', '高劑量 Dexamethasone 抑制試驗（HDDS）', '尿液皮質醇/肌酐比值'],
    correct_answer: '低劑量 Dexamethasone 抑制試驗（LDDS）',
    explanation: 'LDDS 是犬 Cushing\'s 的首選篩選檢查，敏感度約 90-95%。ACTH 刺激試驗敏感度較低（約 80-85%）但特異度較高，且為監測 Trilostane 治療效果的首選。HDDS 用於區分腦下垂體依賴型（PDH）與腎上腺腫瘤型（AT）。',
    difficulty: 3, spaced_rep: true, tags: ['Cushing', '內分泌', '診斷'], image_placeholder: null,
  },
  {
    id: 'Q-IM-003', node_id: 'IM-L3-002', question_type: 'mcq',
    question: '犬甲狀腺機能低下的診斷中，下列哪個組合最能確認診斷？',
    options: ['低 Total T4 + 臨床症狀', '低 Total T4 + 低 Free T4 + 高 TSH', '低 Total T4 + 正常 TSH', '正常 Total T4 + 高 TSH'],
    correct_answer: '低 Total T4 + 低 Free T4 + 高 TSH',
    explanation: '典型犬甲狀腺機能低下的血液學表現為 Total T4 低、Free T4（透析法）低、TSH 升高。單獨 Total T4 低可能為「病態低甲狀腺症候群」（euthyroid sick syndrome）所致，需合併 Free T4 和 TSH 綜合判斷。',
    difficulty: 3, spaced_rep: true, tags: ['甲低', '內分泌', '診斷'], image_placeholder: null,
  },
  {
    id: 'Q-IM-004', node_id: 'IM-L3-005', question_type: 'mcq',
    question: '犬免疫介導性溶血性貧血（IMHA）的治療中，首選免疫抑制藥物為？',
    options: ['Cyclosporine', 'Azathioprine', 'Prednisolone', 'Mycophenolate'],
    correct_answer: 'Prednisolone',
    explanation: 'Prednisolone（或 Dexamethasone）是 IMHA 的第一線免疫抑制藥物。初始劑量通常為 2 mg/kg/day PO，穩定後逐步減量。若反應不佳或需減少類固醇副作用，可加入第二線藥物如 Azathioprine、Cyclosporine 或 Mycophenolate。',
    difficulty: 3, spaced_rep: true, tags: ['IMHA', '免疫', '治療'], image_placeholder: null,
  },
  {
    id: 'Q-IM-005', node_id: 'IM-L3-006', question_type: 'mcq',
    question: '犬糖尿病的起始胰島素治療，最常使用的胰島素類型為？',
    options: ['Regular insulin（短效）', 'NPH insulin（中效）', 'Lente insulin（中效）', 'Glargine insulin（長效）'],
    correct_answer: 'Lente insulin（中效）',
    explanation: '犬糖尿病首選 Lente insulin（豬源或重組），起始劑量 0.25-0.5 U/kg SC BID。NPH 也可使用但作用時間在犬中較不穩定。Glargine（長效）主要用於貓糖尿病。Regular insulin 主要用於 DKA 急性處理。',
    difficulty: 3, spaced_rep: true, tags: ['糖尿病', '胰島素', '治療'], image_placeholder: null,
  },
  {
    id: 'Q-IM-006', node_id: 'IM-L3-003', question_type: 'mcq',
    question: '貓甲狀腺機能亢進的治療中，Methimazole 的初始建議劑量為？',
    options: ['0.5 mg PO SID', '1.25-2.5 mg PO BID', '5 mg PO BID', '10 mg PO SID'],
    correct_answer: '1.25-2.5 mg PO BID',
    explanation: 'Methimazole 初始劑量為 1.25-2.5 mg PO BID（或 2.5-5 mg PO SID）。治療 2-3 週後追蹤 T4 和腎功能。需注意治療甲亢後可能揭露潛在 CKD（因甲亢增加 GFR 掩蓋腎功能下降）。',
    difficulty: 3, spaced_rep: true, tags: ['甲亢', '貓', '治療'], image_placeholder: null,
  },
  {
    id: 'Q-IM-007', node_id: 'IM-L3-007', question_type: 'mcq',
    question: '犬慢性腸病（CE/IBD）的確診需要下列哪項檢查？',
    options: ['糞便浮游法', '腹腔超音波', '內視鏡腸道切片組織病理', '血清 cPLI'],
    correct_answer: '內視鏡腸道切片組織病理',
    explanation: 'CE/IBD 的確診需要腸道組織病理學檢查（內視鏡切片或全層外科切片），以證實黏膜發炎浸潤並排除腸道淋巴瘤等腫瘤。診斷前需先排除寄生蟲、飲食不良反應（食物排除試驗）和其他可治療病因。',
    difficulty: 3, spaced_rep: true, tags: ['IBD', 'CE', '消化', '診斷'], image_placeholder: null,
  },
  {
    id: 'Q-IM-008', node_id: 'IM-L3-010', question_type: 'mcq',
    question: '犬艾利希體症（Ehrlichia canis）的標準治療方案為？',
    options: [
      'Doxycycline 5 mg/kg PO BID × 14 天',
      'Doxycycline 5 mg/kg PO BID × 28 天',
      'Enrofloxacin 5 mg/kg PO SID × 21 天',
      'Amoxicillin-clavulanate 12.5 mg/kg PO BID × 14 天',
    ],
    correct_answer: 'Doxycycline 5 mg/kg PO BID × 28 天',
    explanation: 'Doxycycline 5 mg/kg PO BID 連續 28 天是 E. canis 的標準治療。療程不可縮短，未完成 28 天療程是治療失敗的最常見原因。治療結束後 3 個月追蹤 PCR 確認清除。',
    difficulty: 3, spaced_rep: true, tags: ['Ehrlichia', '壁蝨', '治療'], image_placeholder: null,
  },

  // True/False 9-11
  {
    id: 'Q-IM-009', node_id: 'IM-L3-004', question_type: 'true_false',
    question: 'SDMA 可比 Creatinine 更早偵測到腎功能下降，約在腎功能喪失 25-40% 時即可升高。',
    options: ['正確', '錯誤'],
    correct_answer: '正確',
    explanation: 'SDMA（Symmetric Dimethylarginine）在腎功能喪失約 25-40% 時即可偵測到升高，比 Creatinine 平均早 17 個月。Creatinine 通常要在腎功能喪失 > 75% 才會顯著升高，且受肌肉量影響。SDMA 不受肌肉量影響，對消瘦或老年動物特別有價值。',
    difficulty: 2, spaced_rep: true, tags: ['SDMA', 'CKD', '腎功能'], image_placeholder: null,
  },
  {
    id: 'Q-IM-010', node_id: 'IM-L3-004', question_type: 'true_false',
    question: 'CKD 貓應嚴格限制蛋白質攝取以減少尿毒素產生。',
    options: ['正確', '錯誤'],
    correct_answer: '錯誤',
    explanation: 'CKD 貓不應過度限制蛋白質。貓為專性肉食動物，過度限蛋白會導致肌肉消耗和營養不良。腎臟處方飲食的蛋白質是「適量優質蛋白」而非嚴格低蛋白。磷的限制可能比蛋白質限制更為重要。維持足夠的熱量攝取和體重是優先考量。',
    difficulty: 3, spaced_rep: true, tags: ['CKD', '貓', '飲食', '營養'], image_placeholder: null,
  },
  {
    id: 'Q-IM-011', node_id: 'IM-L3-010', question_type: 'true_false',
    question: '犬艾利希體症的慢性期可導致骨髓發育不全和全血球減少，預後通常不良。',
    options: ['正確', '錯誤'],
    correct_answer: '正確',
    explanation: 'E. canis 慢性期可進展為骨髓發育不全（bone marrow hypoplasia），導致全血球減少（pancytopenia）。此階段的治療反應差，預後謹慎至不良。這也是為什麼早期診斷和完整治療（28 天 Doxycycline）非常重要——避免疾病進展至慢性期。',
    difficulty: 3, spaced_rep: true, tags: ['Ehrlichia', '慢性期', '預後'], image_placeholder: null,
  },

  // Fill blank 12-13
  {
    id: 'Q-IM-012', node_id: 'IM-L3-004', question_type: 'fill_blank',
    question: 'IRIS 將 CKD 分為 _____ 期，以血清 _____ 和 _____ 為主要分期依據。',
    options: null,
    correct_answer: '四期（Stage 1-4），以血清 Creatinine 和 SDMA 為主要分期依據',
    explanation: 'IRIS CKD 分為 Stage 1-4。主要分期依據為血清 Creatinine 和 SDMA。亞分期另外依據 UPC（蛋白尿）和血壓。分期應在動物水合狀態穩定後進行，至少重複測量兩次以上確認。',
    difficulty: 2, spaced_rep: true, tags: ['CKD', 'IRIS', '分期'], image_placeholder: null,
  },
  {
    id: 'Q-IM-013', node_id: 'IM-L3-010', question_type: 'fill_blank',
    question: '犬艾利希體症的標準治療為 Doxycycline _____ mg/kg PO BID，療程 _____ 天。',
    options: null,
    correct_answer: 'Doxycycline 5 mg/kg PO BID，療程 28 天',
    explanation: 'Doxycycline 5 mg/kg PO BID × 28 天是 E. canis 的 ACVIM 共識標準治療方案。療程不可縮短至 14 或 21 天，否則可能導致不完全清除和復發。給藥時建議搭配少量食物或水以避免食道損傷。',
    difficulty: 2, spaced_rep: true, tags: ['Ehrlichia', 'Doxycycline', '劑量'], image_placeholder: null,
  },

  // Case-based 14-15
  {
    id: 'Q-IM-014', node_id: 'IM-L3-004', question_type: 'case_based',
    question: '一隻 14 歲已絕育家貓因近 2 個月體重減輕和飲水量增加就診。理學檢查：體重 3.2 kg（6 個月前 4.1 kg），BCS 3/9，輕度脫水。血檢：Cre 3.8 mg/dL、BUN 62 mg/dL、SDMA 42 μg/dL、磷 6.8 mg/dL。尿液分析：USG 1.018、UPC 0.6。血壓 165 mmHg。此貓的 IRIS 分期與亞分期為何？',
    options: [
      'Stage 2 / 蛋白尿 / 中度高血壓',
      'Stage 3 / 蛋白尿 / 中度高血壓',
      'Stage 3 / 邊緣蛋白尿 / 輕度高血壓',
      'Stage 4 / 蛋白尿 / 重度高血壓',
    ],
    correct_answer: 'Stage 3 / 蛋白尿 / 中度高血壓',
    explanation: 'Cre 3.8 mg/dL 落在 Stage 3 範圍（2.9-5.0），SDMA 42 也對應 Stage 3（36-54）。UPC 0.6 > 0.4（貓的蛋白尿閾值）= 蛋白尿。血壓 165 mmHg 落在 160-179 範圍 = 中度高血壓。注意此貓需先補液穩定後再確認分期，且應至少重複一次測量。',
    difficulty: 4, spaced_rep: true, tags: ['CKD', 'IRIS', '分期', '病例', '貓'], image_placeholder: null,
  },
  {
    id: 'Q-IM-015', node_id: 'IM-L3-010', question_type: 'case_based',
    question: '一隻 5 歲未絕育雄性米克斯犬因精神沉鬱、食慾下降 3 天就診。飼主報告犬隻生活於戶外，未定期除蝨。理學檢查：發燒 40.5°C、淋巴結輕度腫大、鼻孔周圍有少量出血痕跡。CBC：血小板 28,000/μL（嚴重減少）、PCV 32%（輕度貧血）、WBC 正常。SNAP 4Dx Plus：Ehrlichia canis 抗體陽性。最適當的下一步處置為何？',
    options: [
      '立即開始 Doxycycline 5 mg/kg PO BID × 28 天，並安排 PCR 確認',
      '等待 PCR 結果確認後再開始治療',
      '給予 Imidocarb dipropionate 6.6 mg/kg IM',
      '給予 Prednisolone 2 mg/kg PO SID 治療 ITP',
    ],
    correct_answer: '立即開始 Doxycycline 5 mg/kg PO BID × 28 天，並安排 PCR 確認',
    explanation: '典型壁蝨暴露史 + 發燒 + 嚴重血小板減少 + 鼻出血 + SNAP Ehrlichia 陽性 = 高度懷疑急性犬艾利希體症。應立即開始 Doxycycline 治療（不需等待 PCR 結果），同時送 PCR 確認活動性感染。Imidocarb 用於焦蟲症而非 Ehrlichia。不應在未排除壁蝨疾病前使用免疫抑制劑。',
    difficulty: 4, spaced_rep: true, tags: ['Ehrlichia', '壁蝨', '病例', '治療決策'], image_placeholder: null,
  },
];
