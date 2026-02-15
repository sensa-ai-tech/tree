import type { ReviewQuestion } from '@/types/quiz';

export const SURG_QUESTIONS: ReviewQuestion[] = [
  // MCQ 1: GDV emergency
  {
    id: 'Q-SURG-001', node_id: 'SURG-L3-001', question_type: 'mcq',
    question: 'GDV 急診處理中，術前 plasma lactate 超過多少 mmol/L 與胃壁壞死及死亡率升高顯著相關？',
    options: ['2.0 mmol/L', '4.0 mmol/L', '6.0 mmol/L', '10.0 mmol/L'],
    correct_answer: '6.0 mmol/L',
    explanation: '多項研究證實術前 lactate > 6.0 mmol/L 的犬，胃壁壞死的可能性顯著增加，需要 partial gastrectomy 的機率更高，整體死亡率也明顯上升。Lactate 是目前 GDV 最實用的預後生物標記物。',
    difficulty: 3, spaced_rep: true, tags: ['GDV', 'lactate', '預後'], image_placeholder: null,
  },
  // MCQ 2: GDV gastropexy
  {
    id: 'Q-SURG-002', node_id: 'SURG-L3-001', question_type: 'mcq',
    question: '關於 GDV 術後不進行 gastropexy 的犬，GDV 復發率約為多少？',
    options: ['5-10%', '20-30%', '54-80%', '> 90%'],
    correct_answer: '54-80%',
    explanation: '未進行 gastropexy 的犬 GDV 復發率高達 54-80%。右側 incisional gastropexy 是目前最常用且有效的預防復發方式，術後復發率可降至 < 5%。',
    difficulty: 3, spaced_rep: true, tags: ['GDV', 'gastropexy', '手術'], image_placeholder: null,
  },
  // MCQ 3: Foreign body signs
  {
    id: 'Q-SURG-003', node_id: 'SURG-L3-003', question_type: 'mcq',
    question: '犬線狀異物（linear foreign body）的典型腹部 X 光特徵為何？',
    options: [
      '胃內單一高密度影像',
      '腸道節段性擴張（plication）與氣液面交替出現',
      '全腸道均勻性擴張',
      '游離腹腔氣體',
    ],
    correct_answer: '腸道節段性擴張（plication）與氣液面交替出現',
    explanation: '線狀異物（如線、繩索）會固定在舌下或幽門，導致腸道沿線狀物皺褶（plication），X 光可見腸道呈波浪狀排列、節段性擴張伴氣液面交替出現。這是線狀異物的特徵性影像學表現。',
    difficulty: 4, spaced_rep: true, tags: ['異物', 'X光', '診斷'], image_placeholder: null,
  },
  // MCQ 4: CCLD diagnosis
  {
    id: 'Q-SURG-004', node_id: 'SURG-L3-004', question_type: 'mcq',
    question: '犬十字韌帶斷裂（CCLD）最具診斷性的理學檢查發現為何？',
    options: [
      'Ortolani sign 陽性',
      'Cranial drawer sign 陽性',
      'Barden test 陽性',
      'Valgus stress test 陽性',
    ],
    correct_answer: 'Cranial drawer sign 陽性',
    explanation: 'Cranial drawer sign（前抽屜試驗）是 CCLD 最具診斷性的理學檢查：固定股骨遠端，將脛骨向前推移，若出現異常前移即為陽性。Tibial thrust test（脛骨推力試驗）為輔助方法。鎮靜下檢查可提高敏感度。Ortolani sign 用於髖關節發育不良。',
    difficulty: 3, spaced_rep: true, tags: ['CCLD', '理學檢查', '骨科'], image_placeholder: null,
  },
  // MCQ 5: IVDD grading
  {
    id: 'Q-SURG-005', node_id: 'SURG-L3-005', question_type: 'mcq',
    question: '椎間盤疾病（IVDD）神經學分級中，Grade IV 的定義為何？',
    options: [
      '僅有疼痛，無神經功能缺損',
      '輕度不全癱（ambulatory paraparesis）',
      '非行走性不全癱（non-ambulatory paraparesis），保留深層痛覺',
      '癱瘓且喪失深層痛覺（deep pain perception absent）',
    ],
    correct_answer: '非行走性不全癱（non-ambulatory paraparesis），保留深層痛覺',
    explanation: 'IVDD 神經學分級：Grade I = 僅疼痛，Grade II = 行走性不全癱（ambulatory），Grade III = 非行走性不全癱但可自主排尿，Grade IV = 非行走性不全癱且保留深層痛覺，Grade V = 癱瘓且喪失深層痛覺。Grade V 的手術預後較差（約 50-60% 恢復），建議 48 小時內手術。',
    difficulty: 4, spaced_rep: true, tags: ['IVDD', '神經學分級', '脊椎'], image_placeholder: null,
  },
  // MCQ 6: Pyometra WBC
  {
    id: 'Q-SURG-006', node_id: 'SURG-L3-009', question_type: 'mcq',
    question: '子宮蓄膿犬出現 WBC 正常但 band neutrophils 比例顯著升高的現象稱為？',
    options: [
      'Regenerative left shift',
      'Degenerative left shift',
      'Stress leukogram',
      'Leukemoid reaction',
    ],
    correct_answer: 'Degenerative left shift',
    explanation: 'Degenerative left shift 指未成熟嗜中性球（bands）數量超過成熟嗜中性球（segs），且總 WBC 正常或偏低。這表示骨髓嗜中性球儲備已耗竭，感染消耗速度超過骨髓製造速度。在子宮蓄膿中，degenerative left shift 往往預後比 WBC 明顯升高的病例更差。',
    difficulty: 4, spaced_rep: true, tags: ['子宮蓄膿', 'WBC', '血液學'], image_placeholder: null,
  },
  // MCQ 7: Patellar luxation grading
  {
    id: 'Q-SURG-007', node_id: 'SURG-L3-008', question_type: 'mcq',
    question: '膝蓋骨脫位 Grade III 的特徵為何？',
    options: [
      '膝蓋骨可手動脫位，放開後自動復位',
      '膝蓋骨可手動脫位，放開後維持脫位直到手動復位',
      '膝蓋骨持續脫位，可手動復位但會再次脫位',
      '膝蓋骨持續脫位，無法手動復位',
    ],
    correct_answer: '膝蓋骨持續脫位，可手動復位但會再次脫位',
    explanation: '膝蓋骨脫位 Singleton 分級：Grade I = 手動可脫位，放開自動復位；Grade II = 手動可脫位，維持脫位直到手動復位或犬伸腿；Grade III = 持續脫位，可手動復位但會再脫位；Grade IV = 持續脫位，無法手動復位。Grade III-IV 通常需要手術矯正。',
    difficulty: 3, spaced_rep: true, tags: ['膝蓋骨脫位', '分級', '骨科'], image_placeholder: null,
  },
  // MCQ 8: Fracture healing
  {
    id: 'Q-SURG-008', node_id: 'SURG-L2-003', question_type: 'mcq',
    question: '關於骨折癒合的描述，下列何者正確？',
    options: [
      '直接骨癒合（primary bone healing）需要骨折端有微動',
      '間接骨癒合（secondary bone healing）不會形成骨痂（callus）',
      '直接骨癒合需要解剖復位與堅固固定，骨折間隙極小',
      '間接骨癒合只發生在保守治療的骨折',
    ],
    correct_answer: '直接骨癒合需要解剖復位與堅固固定，骨折間隙極小',
    explanation: '直接骨癒合（primary/direct healing）需要解剖復位、堅固固定（如加壓鋼板）且骨折間隙極小（< 0.01 mm），透過 cutting cones 直接進行 Haversian remodeling，不經過骨痂形成。間接骨癒合（secondary/indirect healing）是更常見的癒合方式，需要一定程度的微動，經過發炎期 → 軟骨痂 → 硬骨痂 → 骨重塑四個階段。',
    difficulty: 3, spaced_rep: true, tags: ['骨折', '癒合', '骨科'], image_placeholder: null,
  },
  // True/False 9
  {
    id: 'Q-SURG-009', node_id: 'SURG-L3-001', question_type: 'true_false',
    question: 'GDV 術後心室心律不整（VPCs）最常發生在術後 12-72 小時內，因此需持續 ECG 監測。',
    options: ['正確', '錯誤'],
    correct_answer: '正確',
    explanation: 'GDV 術後心室心律不整（ventricular premature complexes, VPCs）好發於術後 12-72 小時，發生率約 40-70%。原因包括心肌缺血再灌流損傷、電解質失衡（低血鉀）、酸鹼失衡。嚴重時需使用 Lidocaine CRI 治療。因此建議術後至少持續 ECG 監測 48-72 小時。',
    difficulty: 3, spaced_rep: true, tags: ['GDV', '心律不整', '術後'], image_placeholder: null,
  },
  // True/False 10
  {
    id: 'Q-SURG-010', node_id: 'SURG-L3-009', question_type: 'true_false',
    question: '封閉型子宮蓄膿可安全地使用 PGF2alpha 進行內科治療。',
    options: ['正確', '錯誤'],
    correct_answer: '錯誤',
    explanation: '封閉型子宮蓄膿使用 PGF2alpha 有子宮破裂的風險，因為促進子宮收縮時子宮頸仍然關閉，壓力無法釋放。內科治療（Aglepristone +/- PGF2alpha）僅建議用於穩定的開放型子宮蓄膿且有繁殖需求的病例。封閉型應優先考慮 OHE 手術治療。',
    difficulty: 3, spaced_rep: true, tags: ['子宮蓄膿', '內科治療', '風險'], image_placeholder: null,
  },
  // Fill blank 11
  {
    id: 'Q-SURG-011', node_id: 'SURG-L3-001', question_type: 'fill_blank',
    question: 'GDV 中胃典型以 _____ 方向扭轉 _____ 度（從尾端/術者端觀察）。',
    options: null,
    correct_answer: '順時針方向扭轉 220-270 度',
    explanation: '從術者觀察尾端時，GDV 的胃典型以順時針方向扭轉 220-270 度。幽門從其正常的右側位置移至腹側再到左側，而胃底則移至右側。理解扭轉方向對於正確進行 derotation 至關重要。',
    difficulty: 3, spaced_rep: true, tags: ['GDV', '病理', '手術'], image_placeholder: null,
  },
  // Case-based 12
  {
    id: 'Q-SURG-012', node_id: 'SURG-L3-009', question_type: 'case_based',
    question: '一隻 8 歲未絕育黃金獵犬母犬，最後一次發情約 6 週前。主訴 3 天來食慾下降、多飲多尿、精神沉鬱。理學檢查：T 39.8°C，HR 140 bpm，黏膜偏乾，CRT 2 秒。陰道口無明顯分泌物。CBC 顯示 WBC 45,000/uL，bands 15%。腹部超音波顯示雙側子宮角擴張至 3 cm，內含均質液體。最可能的診斷與最佳治療為何？',
    options: [
      '開放型子宮蓄膿，可優先嘗試內科治療（Aglepristone）',
      '封閉型子宮蓄膿，建議術前穩定化後進行 OHE',
      '子宮黏液積聚（Mucometra），可觀察追蹤',
      '卵巢囊腫，建議 OHE',
    ],
    correct_answer: '封閉型子宮蓄膿，建議術前穩定化後進行 OHE',
    explanation: '未絕育母犬、發情後 6 週（黃體期）、多飲多尿、WBC 45,000 伴 bands 升高、超音波子宮角擴張含液體、且陰道口「無」分泌物 = 封閉型子宮蓄膿。封閉型因膿液無法排出，全身毒血症風險更高，且不適合 PGF2alpha 內科治療（子宮破裂風險）。最佳治療為術前積極輸液與抗生素穩定後盡早進行 OHE。',
    difficulty: 4, spaced_rep: true, tags: ['子宮蓄膿', '封閉型', '臨床推理'], image_placeholder: null,
  },
];
