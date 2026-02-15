import type { ReviewQuestion } from '@/types/quiz';

export const NEURO_QUESTIONS: ReviewQuestion[] = [
  // MCQ 1: Epilepsy drug choice
  {
    id: 'Q-NEURO-001', node_id: 'NEURO-L3-001', question_type: 'mcq',
    question: '犬特發性癲癇的傳統一線抗癲癇藥物為何？',
    options: ['Levetiracetam', 'Phenobarbital', 'Gabapentin', 'Diazepam'],
    correct_answer: 'Phenobarbital',
    explanation: 'Phenobarbital（PB）是犬特發性癲癇最常用的傳統一線藥物，透過增強 GABA-A 受體功能發揮抗癲癇效果。建議劑量 2-5 mg/kg PO BID，血中濃度目標 15-35 ug/mL。Diazepam 僅用於急性發作控制，不適合長期口服維持。',
    difficulty: 3, spaced_rep: true, tags: ['癲癇', '藥物', 'AED'], image_placeholder: null,
  },
  // MCQ 2: IVDD grading
  {
    id: 'Q-NEURO-002', node_id: 'NEURO-L3-002', question_type: 'mcq',
    question: 'IVDD（椎間盤疾病）中，下列哪一級的預後最差且需要緊急手術？',
    options: [
      'Grade I：僅疼痛，無神經功能缺損',
      'Grade III：不能行走的輕癱，尚有自主運動',
      'Grade IV：癱瘓但保有深痛覺',
      'Grade V：癱瘓且喪失深痛覺',
    ],
    correct_answer: 'Grade V：癱瘓且喪失深痛覺',
    explanation: 'IVDD Grade V（深痛覺喪失）預後最差，若 > 48 小時未恢復深痛覺，手術成功率顯著下降（< 50%）。深痛覺的喪失代表脊髓受損嚴重，需在 12-24 小時內緊急進行減壓手術以提高恢復機會。Grade V 若合併進行性脊髓軟化（ascending-descending myelomalacia），預後極差。',
    difficulty: 4, spaced_rep: true, tags: ['IVDD', '分級', '預後'], image_placeholder: null,
  },
  // MCQ 3: GME CSF findings
  {
    id: 'Q-NEURO-003', node_id: 'NEURO-L3-003', question_type: 'mcq',
    question: 'GME（肉芽腫性腦膜腦炎）的典型 CSF 分析結果為何？',
    options: [
      '嗜中性球增多、蛋白明顯升高',
      '混合性細胞增多（以單核球/淋巴球為主）、蛋白中至重度升高',
      'CSF 完全正常',
      '紅血球明顯增多',
    ],
    correct_answer: '混合性細胞增多（以單核球/淋巴球為主）、蛋白中至重度升高',
    explanation: 'GME 屬於 MUO（Meningoencephalomyelitis of Unknown Origin）的一種，CSF 特徵為混合性細胞增多（主要為單核球/淋巴球，可見少量嗜中性球），蛋白中至重度升高。約 10-20% 的 MUO 病例 CSF 可能正常，因此 MRI 也是必要的診斷工具。',
    difficulty: 4, spaced_rep: true, tags: ['GME', 'CSF', 'MUO'], image_placeholder: null,
  },
  // MCQ 4: Vestibular central vs peripheral
  {
    id: 'Q-NEURO-004', node_id: 'NEURO-L3-004', question_type: 'mcq',
    question: '下列哪項臨床發現最能區分中樞性前庭疾病與周邊性前庭疾病？',
    options: [
      '頭部傾斜（head tilt）',
      '自發性水平眼球震顫',
      '改變頭部位置時眼振方向改變（positional nystagmus）',
      '嘔吐',
    ],
    correct_answer: '改變頭部位置時眼振方向改變（positional nystagmus）',
    explanation: '中樞性前庭疾病的特徵包括：位置性眼振（眼振方向隨頭部位置改變）、垂直性眼振、同側姿勢反應缺損、意識改變。周邊性眼振通常為水平或旋轉性，方向固定不隨頭部位置改變。頭部傾斜和嘔吐兩者均可見。',
    difficulty: 3, spaced_rep: true, tags: ['前庭', '中樞', '周邊', '鑑別'], image_placeholder: null,
  },
  // MCQ 5: Neurological localization
  {
    id: 'Q-NEURO-005', node_id: 'NEURO-L4-004', question_type: 'mcq',
    question: '一隻犬表現後肢 UMN 型輕癱、前肢正常、背痛明顯。病灶最可能位於？',
    options: ['C1-C5', 'C6-T2', 'T3-L3', 'L4-S3'],
    correct_answer: 'T3-L3',
    explanation: '後肢 UMN 徵象（反射正常至亢進）+ 前肢正常 = T3-L3 脊髓節段病變。若為 C1-C5 則四肢均會有 UMN 徵象。若為 C6-T2 則前肢會有 LMN 徵象。若為 L4-S3 則後肢為 LMN 徵象（反射減弱）。',
    difficulty: 3, spaced_rep: true, tags: ['定位', 'UMN', '脊髓'], image_placeholder: null,
  },
  // MCQ 6: MG diagnosis
  {
    id: 'Q-NEURO-006', node_id: 'NEURO-L3-006', question_type: 'mcq',
    question: '犬重症肌無力（Myasthenia Gravis）的確診方法為何？',
    options: [
      '血清乙醯膽鹼受體抗體（AChR Ab）測定',
      '腦脊髓液分析',
      '肌電圖（EMG）',
      '肌肉切片病理學',
    ],
    correct_answer: '血清乙醯膽鹼受體抗體（AChR Ab）測定',
    explanation: '後天性重症肌無力的確診金標準為血清 AChR 抗體測定（免疫沉澱法），陽性率約 85-90%。Edrophonium（Tensilon）試驗可作為床邊快速測試，但敏感度較低且有假陽性。EMG 可見重複神經刺激下的遞減反應（decremental response），但為輔助而非確診工具。',
    difficulty: 4, spaced_rep: true, tags: ['MG', '診斷', 'AChR'], image_placeholder: null,
  },
  // MCQ 7: DM genetics (SOD1)
  {
    id: 'Q-NEURO-007', node_id: 'NEURO-L3-007', question_type: 'mcq',
    question: '犬退化性脊髓病變（Degenerative Myelopathy, DM）與哪個基因突變相關？',
    options: ['MDR1', 'SOD1', 'ABCB1', 'LGI2'],
    correct_answer: 'SOD1',
    explanation: 'DM 與 SOD1（Superoxide Dismutase 1）基因突變相關，類似人類的肌萎縮性脊髓側索硬化症（ALS）。好發於德國牧羊犬、柯基、Boxer 等。SOD1 基因檢測可幫助確認高風險犬隻，但同型合子（homozygous）不代表一定會發病。確診需排除其他脊髓疾病並以病理學為準。',
    difficulty: 3, spaced_rep: true, tags: ['DM', 'SOD1', '基因'], image_placeholder: null,
  },
  // MCQ 8: Seizure classification
  {
    id: 'Q-NEURO-008', node_id: 'NEURO-L3-001', question_type: 'mcq',
    question: '根據 IVETF 共識，癲癇重積狀態（Status Epilepticus）的定義為何？',
    options: [
      '單次癲癇發作持續超過 2 分鐘',
      '24 小時內發生 2 次以上癲癇發作',
      '持續超過 5 分鐘的癲癇發作，或兩次發作間無意識恢復',
      '一週內發生 3 次以上癲癇發作',
    ],
    correct_answer: '持續超過 5 分鐘的癲癇發作，或兩次發作間無意識恢復',
    explanation: 'IVETF 定義癲癇重積狀態為：單次發作持續超過 5 分鐘，或兩次（含以上）發作之間意識未完全恢復。SE 為神經急症，需立即以 Diazepam IV/per rectum 處置。若超過 30 分鐘未控制，可能導致不可逆神經損傷。24 小時內 ≥ 2 次發作但間期意識恢復者為 cluster seizures。',
    difficulty: 3, spaced_rep: true, tags: ['癲癇', 'SE', '定義'], image_placeholder: null,
  },
  // True/False 9
  {
    id: 'Q-NEURO-009', node_id: 'NEURO-L4-004', question_type: 'true_false',
    question: 'Schiff-Sherrington 姿勢代表前肢的 UMN 功能也受損。',
    options: ['正確', '錯誤'],
    correct_answer: '錯誤',
    explanation: 'Schiff-Sherrington 姿勢見於 T3-L3 的急性嚴重脊髓病變。表現為前肢伸肌張力增強（因失去脊髓 border cells 的抑制），但前肢的自主運動和姿勢反應是正常的。這不代表前肢 UMN 通路受損，而是反射性的張力變化。',
    difficulty: 4, spaced_rep: true, tags: ['Schiff-Sherrington', '定位'], image_placeholder: null,
  },
  // True/False 10
  {
    id: 'Q-NEURO-010', node_id: 'NEURO-L3-004', question_type: 'true_false',
    question: '老年犬的特發性前庭疾病（Idiopathic Vestibular Disease）通常需要 MRI 確診。',
    options: ['正確', '錯誤'],
    correct_answer: '錯誤',
    explanation: '老年犬特發性前庭疾病（Old Dog Vestibular Disease）是周邊性前庭疾病，通常根據臨床表現（急性發作頭傾斜+水平眼振+共濟失調，無其他神經缺損）即可推定診斷。大多數病例在 2-3 週內自行改善。若出現中樞性徵象（位置性眼振、垂直性眼振、姿勢反應缺損、意識改變）或 3 週內無改善，才需進一步 MRI 檢查排除中樞性病變。',
    difficulty: 3, spaced_rep: true, tags: ['前庭', '老犬', '診斷'], image_placeholder: null,
  },
  // Fill blank 11
  {
    id: 'Q-NEURO-011', node_id: 'NEURO-L5-001', question_type: 'fill_blank',
    question: 'Phenobarbital 開始治療後，應在 _____ 週達到穩態時首次監測血中濃度，目標範圍為 _____ ug/mL。',
    options: null,
    correct_answer: '2-3 週，目標 15-35 ug/mL',
    explanation: 'Phenobarbital 的半衰期約 40-90 小時，達到穩態（steady state）約需 5 個半衰期，即 2-3 週。建議在穩態後取谷值（trough level）測定血中濃度。治療範圍 15-35 ug/mL，> 35 ug/mL 肝毒性風險增加。',
    difficulty: 3, spaced_rep: true, tags: ['PB', '監測', '藥動學'], image_placeholder: null,
  },
  // Case-based 12
  {
    id: 'Q-NEURO-012', node_id: 'NEURO-L4-004', question_type: 'case_based',
    question: '一隻 4 歲柯基犬因漸進性後肢無力就診。神經學檢查發現：後肢本體感覺缺損、膝蓋反射正常至輕微亢進、屈曲反射正常、前肢完全正常。無明顯疼痛反應。最可能的病灶定位與首要鑑別診斷為何？',
    options: [
      'T3-L3 病灶；首要鑑別：IVDD vs DM',
      'L4-S3 病灶；首要鑑別：馬尾症候群',
      'C6-T2 病灶；首要鑑別：頸椎 IVDD',
      'C1-C5 病灶；首要鑑別：寰樞關節不穩定',
    ],
    correct_answer: 'T3-L3 病灶；首要鑑別：IVDD vs DM',
    explanation: '後肢 UMN 徵象（膝蓋反射正常至亢進）+ 前肢正常 = T3-L3。柯基犬為 IVDD 和 DM 的好發品種。關鍵鑑別：IVDD 通常有疼痛且發作較急性，DM 為漸進性無痛。此病例為漸進性且無疼痛，DM 為首要考量，但需 MRI 排除 IVDD 等壓迫性病變。SOD1 基因檢測可輔助。',
    difficulty: 4, spaced_rep: true, tags: ['定位', 'DM', 'IVDD', '鑑別', '臨床推理'], image_placeholder: null,
  },
];
