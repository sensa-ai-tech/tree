import type { ReviewQuestion } from '@/types/quiz';

export const ONCO_QUESTIONS: ReviewQuestion[] = [
  // MCQ 1: 淋巴瘤分期
  {
    id: 'Q-ONCO-001', node_id: 'ONCO-L3-001', question_type: 'mcq',
    question: '犬多中心型淋巴瘤在 WHO 分期中，若全身淋巴結腫大合併脾臟浸潤，應歸類為第幾期？',
    options: ['Stage II', 'Stage III', 'Stage IV', 'Stage V'],
    correct_answer: 'Stage IV',
    explanation: 'WHO 分期中 Stage IV 定義為肝臟和/或脾臟浸潤（可合併 Stage I-III 的淋巴結侵犯）。Stage III 為全身性淋巴結侵犯但無肝脾浸潤，Stage V 為骨髓或血液侵犯。',
    difficulty: 3, spaced_rep: true, tags: ['淋巴瘤', 'staging', 'WHO'], image_placeholder: null,
  },
  // MCQ 2: MCT grading
  {
    id: 'Q-ONCO-002', node_id: 'ONCO-L3-002', question_type: 'mcq',
    question: '關於犬肥大細胞瘤（MCT）的組織學分級，Kiupel 二級分類系統將 MCT 分為？',
    options: [
      'Grade I（低惡度）與 Grade II（高惡度）',
      'Low grade 與 High grade',
      'Well-differentiated 與 Poorly-differentiated',
      'Stage I 與 Stage II',
    ],
    correct_answer: 'Low grade 與 High grade',
    explanation: 'Kiupel (2011) 二級分類將 MCT 簡化為 Low grade 與 High grade，比 Patnaik 三級分類（Grade I/II/III）更具有預測性和一致性。High grade 的判斷依據包含核分裂指數 ≥ 7/10 HPF、多核細胞 ≥ 3 個、異型核 ≥ 3 個、核直徑 > 2 倍。',
    difficulty: 3, spaced_rep: true, tags: ['MCT', 'grading', 'Kiupel', 'Patnaik'], image_placeholder: null,
  },
  // MCQ 3: CHOP 組成
  {
    id: 'Q-ONCO-003', node_id: 'ONCO-L3-001', question_type: 'mcq',
    question: 'CHOP 化療方案中的「H」代表哪一種藥物？',
    options: ['Hydroxyurea', 'Hydroxydaunorubicin (Doxorubicin)', 'Hexamethylmelamine', 'Hydrocortisone'],
    correct_answer: 'Hydroxydaunorubicin (Doxorubicin)',
    explanation: 'CHOP = Cyclophosphamide（C）+ Hydroxydaunorubicin / Doxorubicin（H）+ Oncovin / Vincristine（O）+ Prednisone（P）。Doxorubicin 的原始名稱為 Hydroxydaunorubicin。',
    difficulty: 2, spaced_rep: true, tags: ['化療', 'CHOP', '藥物'], image_placeholder: null,
  },
  // MCQ 4: HSA 急性表現
  {
    id: 'Q-ONCO-004', node_id: 'ONCO-L3-004', question_type: 'mcq',
    question: '犬血管肉瘤（HSA）最典型的急性臨床表現為何？',
    options: [
      '漸進性體重減輕與食慾下降',
      '突發性腹腔出血導致急性腹部膨大與休克',
      '慢性間歇性嘔吐與腹瀉',
      '漸進性跛行與骨骼疼痛',
    ],
    correct_answer: '突發性腹腔出血導致急性腹部膨大與休克',
    explanation: '脾臟 HSA 常因腫瘤破裂導致急性腹腔出血，臨床表現為突發性虛弱、蒼白黏膜、腹部膨大、心搏過速，嚴重時可導致低血容量性休克。約 50-65% 的脾臟 HSA 以急性出血為首次就診主訴。',
    difficulty: 3, spaced_rep: true, tags: ['HSA', '急診', '脾臟'], image_placeholder: null,
  },
  // MCQ 5: 乳腺腫瘤預後因子
  {
    id: 'Q-ONCO-005', node_id: 'ONCO-L3-006', question_type: 'mcq',
    question: '下列何者是犬乳腺腫瘤最重要的預後因子？',
    options: [
      '腫瘤位置（前段 vs 後段乳腺）',
      '腫瘤大小與組織學分級',
      '動物年齡',
      '血清白蛋白濃度',
    ],
    correct_answer: '腫瘤大小與組織學分級',
    explanation: '犬乳腺腫瘤最重要的預後因子為：(1) 腫瘤大小（< 3 cm 預後較好）、(2) 組織學類型與分級、(3) 淋巴結轉移狀態、(4) 血管/淋巴管侵犯。腫瘤大小 > 5 cm 的中位存活期顯著縮短。',
    difficulty: 3, spaced_rep: true, tags: ['乳腺', '預後', '分級'], image_placeholder: null,
  },
  // MCQ 6: TCC piroxicam
  {
    id: 'Q-ONCO-006', node_id: 'ONCO-L3-007', question_type: 'mcq',
    question: '犬膀胱移行上皮細胞癌（TCC）的醫療管理中，下列哪種 NSAID 最常被使用？',
    options: ['Carprofen', 'Meloxicam', 'Piroxicam', 'Firocoxib'],
    correct_answer: 'Piroxicam',
    explanation: 'Piroxicam（0.3 mg/kg PO SID）是犬 TCC 最廣泛使用的 NSAID，透過 COX 抑制減少前列腺素合成，具有直接抗腫瘤與抗血管新生作用。單獨使用的部分緩解率約 18%，穩定率約 48%。常與 mitoxantrone 合併使用以提升療效。',
    difficulty: 3, spaced_rep: true, tags: ['TCC', 'piroxicam', 'NSAID'], image_placeholder: null,
  },
  // MCQ 7: FISS 預防
  {
    id: 'Q-ONCO-007', node_id: 'ONCO-L3-008', question_type: 'mcq',
    question: '關於貓注射處肉瘤（FISS）的預防，「3-2-1 rule」建議注射處發現腫塊時，若符合下列哪些條件應進行手術切除或切片？',
    options: [
      '腫塊大於 3 cm、注射後超過 2 個月仍存在、持續增大超過 1 個月',
      '腫塊大於 3 cm、注射後超過 2 週仍存在、持續增大超過 1 週',
      '注射後 3 天出現、大於 2 cm、持續 1 週',
      '腫塊大於 3 mm、注射後超過 2 天仍存在、持續增大超過 1 天',
    ],
    correct_answer: '腫塊大於 3 cm、注射後超過 2 個月仍存在、持續增大超過 1 個月',
    explanation: 'FISS 的 3-2-1 rule：(3) 腫塊直徑 > 3 cm、(2) 注射後 > 2 個月仍未消退、(1) 腫塊持續增大 > 1 個月。符合任一條件即應進行切除活檢（incisional biopsy）。另外，建議疫苗注射遵循部位標準化原則（遠端肢體），以利必要時進行截肢手術。',
    difficulty: 3, spaced_rep: true, tags: ['FISS', '預防', '3-2-1', '貓'], image_placeholder: null,
  },
  // MCQ 8: 細胞學惡性度
  {
    id: 'Q-ONCO-008', node_id: 'ONCO-L4-001', question_type: 'mcq',
    question: '在腫瘤細胞學判讀中，下列何者被認為是最重要的惡性度判斷標準之一？',
    options: [
      'Anisocytosis（細胞大小不一）',
      'Anisokaryosis（核大小不一）',
      '胞質空泡化',
      '細胞數量增多',
    ],
    correct_answer: 'Anisokaryosis（核大小不一）',
    explanation: 'Anisokaryosis（核大小不一致）被視為細胞學上最重要的惡性度標準之一。惡性度判斷通常需要 ≥ 3 項標準同時存在，包括 anisokaryosis、高 N:C 比、核仁異常、核分裂象增加等。',
    difficulty: 3, spaced_rep: true, tags: ['細胞學', '惡性度', 'FNA'], image_placeholder: null,
  },
  // True/False 9
  {
    id: 'Q-ONCO-009', node_id: 'ONCO-L3-001', question_type: 'true_false',
    question: '犬淋巴瘤中，T-cell 免疫表型的預後一般優於 B-cell 免疫表型。',
    options: ['正確', '錯誤'],
    correct_answer: '錯誤',
    explanation: 'B-cell 免疫表型的預後優於 T-cell。使用 CHOP 方案時，B-cell 淋巴瘤的中位存活期約 12-14 個月，而 T-cell 約 6-9 個月。T-cell 淋巴瘤更常伴隨高血鈣等副腫瘤症候群。',
    difficulty: 2, spaced_rep: true, tags: ['淋巴瘤', '免疫表型', '預後'], image_placeholder: null,
  },
  // True/False 10
  {
    id: 'Q-ONCO-010', node_id: 'ONCO-L3-002', question_type: 'true_false',
    question: '犬肥大細胞瘤（MCT）在 Patnaik 分級系統中分為 Low grade 與 High grade 兩個等級。',
    options: ['正確', '錯誤'],
    correct_answer: '錯誤',
    explanation: 'Patnaik 分級系統將 MCT 分為三個等級：Grade I（分化良好）、Grade II（中度分化）、Grade III（分化不良）。分為 Low grade 與 High grade 兩個等級的是 Kiupel (2011) 二級分類系統。',
    difficulty: 3, spaced_rep: true, tags: ['MCT', 'Patnaik', 'Kiupel', 'grading'], image_placeholder: null,
  },
  // Fill blank 11
  {
    id: 'Q-ONCO-011', node_id: 'ONCO-L3-001', question_type: 'fill_blank',
    question: '犬淋巴瘤使用 CHOP 化療方案的完全緩解率約 _____，B-cell 型的中位存活期約 _____ 個月。',
    options: null,
    correct_answer: '80-90%，12-14 個月',
    explanation: 'CHOP-based 多藥化療方案的完全緩解率約 80-90%。B-cell 免疫表型的中位存活期約 12-14 個月（T-cell 約 6-9 個月）。但多數犬在首次緩解後 6-9 個月復發。',
    difficulty: 3, spaced_rep: true, tags: ['淋巴瘤', 'CHOP', '預後'], image_placeholder: null,
  },
  // Case-based 12
  {
    id: 'Q-ONCO-012', node_id: 'ONCO-L4-001', question_type: 'case_based',
    question: '一隻 8 歲已絕育拉布拉多犬因左膝窩淋巴結腫大就診。FNA 細胞學顯示大量均質性中大型淋巴球，核仁明顯，有絲分裂活躍，背景少見小淋巴球。最可能的細胞學診斷為何？',
    options: [
      '反應性淋巴結增生',
      '淋巴瘤',
      '肥大細胞瘤淋巴結轉移',
      '淋巴結化膿性感染',
    ],
    correct_answer: '淋巴瘤',
    explanation: '均質性中大型淋巴球取代正常淋巴結結構（正常應為小淋巴球 > 75%），核仁明顯，有絲分裂活躍，為淋巴瘤的典型細胞學表現。反應性增生會呈現混合淋巴球群（小、中、大均有），MCT 轉移會見嗜鹼性顆粒圓形細胞，化膿性感染以中性球為主。下一步應進行免疫分型（B vs T cell）以評估預後。',
    difficulty: 3, spaced_rep: true, tags: ['細胞學', '淋巴瘤', 'FNA', '鑑別'], image_placeholder: null,
  },
];
