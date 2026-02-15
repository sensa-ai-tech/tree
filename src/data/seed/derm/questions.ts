import type { ReviewQuestion } from '@/types/quiz';

export const DERM_QUESTIONS: ReviewQuestion[] = [
  // MCQ 1: CAD Favrot criteria
  {
    id: 'Q-DERM-001', node_id: 'DERM-L3-001', question_type: 'mcq',
    question: '使用 Favrot 診斷標準評估犬異位性皮膚炎（CAD），滿足 8 項中幾項時，敏感度約 85%、特異度約 79%？',
    options: ['3 項', '4 項', '5 項', '6 項'],
    correct_answer: '5 項',
    explanation: 'Favrot 標準 8 項中滿足 5 項時，敏感度 85%、特異度 79%。若提高至 6 項，敏感度降為 58% 但特異度提升至 89%。臨床上常用 5/8 作為初步篩選標準。',
    difficulty: 3, spaced_rep: true, tags: ['CAD', 'Favrot', 'diagnosis'], image_placeholder: null,
  },
  // MCQ 2: Oclacitinib MOA
  {
    id: 'Q-DERM-002', node_id: 'DERM-L5-001', question_type: 'mcq',
    question: 'Oclacitinib 的藥理機轉為何？',
    options: [
      'Calcineurin inhibitor',
      'JAK inhibitor（Janus kinase 抑制劑）',
      'Anti-IL-31 monoclonal antibody',
      'Phosphodiesterase IV inhibitor',
    ],
    correct_answer: 'JAK inhibitor（Janus kinase 抑制劑）',
    explanation: 'Oclacitinib（Apoquel）是選擇性 JAK1 inhibitor，主要抑制 JAK1 依賴的細胞因子信號傳導（IL-31、IL-2、IL-4、IL-6、IL-13），從而抑制瘙癢與發炎。起效迅速（4-24 小時），適用於 CAD 的急性與慢性控制。',
    difficulty: 3, spaced_rep: true, tags: ['oclacitinib', 'pharmacology', 'JAK'], image_placeholder: null,
  },
  // MCQ 3: Elimination diet duration
  {
    id: 'Q-DERM-003', node_id: 'DERM-L3-002', question_type: 'mcq',
    question: '進行食物不良反應（AFR）的排除飲食試驗時，建議最少持續多長時間？',
    options: ['2 週', '4 週', '8 週', '12 週'],
    correct_answer: '8 週',
    explanation: '排除飲食試驗建議至少持續 8 週。研究顯示大多數食物不良反應的犬在 6-8 週內會出現改善，但部分犬可能需要更長時間。試驗期間必須嚴格避免任何非處方飲食來源（零食、人食、調味品）。',
    difficulty: 2, spaced_rep: true, tags: ['AFR', 'elimination_diet', 'duration'], image_placeholder: null,
  },
  // MCQ 4: Demodex treatment
  {
    id: 'Q-DERM-004', node_id: 'DERM-L3-004', question_type: 'mcq',
    question: '目前犬蠕形蟎症（Demodicosis）的首選口服治療藥物為下列何者？',
    options: [
      'Ivermectin',
      'Isoxazoline 類（如 fluralaner、afoxolaner）',
      'Amitraz',
      'Permethrin',
    ],
    correct_answer: 'Isoxazoline 類（如 fluralaner、afoxolaner）',
    explanation: 'Isoxazoline 類藥物（如 fluralaner/Bravecto、afoxolaner/NexGard）已成為犬蠕形蟎症的首選治療，療效與 ivermectin 及 amitraz 相當甚至更佳，安全性更高，使用方便（每月或每三月口服一次）。Ivermectin 雖有效但需逐步增量且有 MDR1 突變犬種禁忌。',
    difficulty: 3, spaced_rep: true, tags: ['Demodex', 'isoxazoline', 'treatment'], image_placeholder: null,
  },
  // MCQ 5: FAD flea lifecycle
  {
    id: 'Q-DERM-005', node_id: 'DERM-L3-003', question_type: 'mcq',
    question: '跳蚤生活史中，跳蚤卵、幼蟲與蛹主要存在於以下哪個環境？',
    options: [
      '動物體表',
      '環境中（地毯、床鋪、土壤裂縫）',
      '動物的消化道內',
      '動物的外耳道',
    ],
    correct_answer: '環境中（地毯、床鋪、土壤裂縫）',
    explanation: '成年跳蚤僅占跳蚤群體的 5%，其餘 95%（卵、幼蟲、蛹）存在於環境中。因此跳蚤控制必須包含環境管理。跳蚤蛹對殺蟲劑高度抗性，可在環境中存活數月。台灣全年溫暖潮濕，跳蚤生活史不間斷，需全年預防。',
    difficulty: 2, spaced_rep: true, tags: ['FAD', 'flea_lifecycle', '台灣'], image_placeholder: null,
  },
  // MCQ 6: Skin scraping depth
  {
    id: 'Q-DERM-006', node_id: 'DERM-L4-002', question_type: 'mcq',
    question: '診斷犬蠕形蟎症時，深層皮膚刮搔需刮至何種程度？',
    options: [
      '僅刮除角質層表面鱗屑',
      '刮至角質層與表皮交界處',
      '刮至出現點狀出血（capillary ooze）',
      '刮至皮下組織',
    ],
    correct_answer: '刮至出現點狀出血（capillary ooze）',
    explanation: '深層刮搔需刮至 capillary ooze（點狀出血），表示已達到真皮乳頭層深度，此時毛囊深處的蠕形蟎才會被充分採集。刮搔前必須先擠壓皮膚將蟎蟲從毛囊擠向表面。',
    difficulty: 2, spaced_rep: true, tags: ['skin_scraping', 'Demodex', 'technique'], image_placeholder: null,
  },
  // MCQ 7: Malassezia cytology
  {
    id: 'Q-DERM-007', node_id: 'DERM-L3-006', question_type: 'mcq',
    question: '馬拉色菌（Malassezia pachydermatis）在皮膚細胞學染色下呈現什麼典型形態？',
    options: [
      '絲狀菌絲（filamentous hyphae）',
      '花生形或足印形的出芽酵母菌',
      '圓形厚壁孢子',
      '棒狀桿菌',
    ],
    correct_answer: '花生形或足印形的出芽酵母菌',
    explanation: 'Malassezia pachydermatis 在細胞學染色（Diff-Quik）下呈典型花生形或足印形（peanut/footprint-shaped），為出芽型酵母菌，大小約 3-5 μm。每個油浸鏡視野（OIF, 100x）超過 2 個即視為過度增生。',
    difficulty: 2, spaced_rep: true, tags: ['Malassezia', 'cytology', 'morphology'], image_placeholder: null,
  },
  // MCQ 8: Otitis externa PSPP
  {
    id: 'Q-DERM-008', node_id: 'DERM-L3-007', question_type: 'mcq',
    question: '外耳炎的 PSPP 診斷系統中，「P」代表的是什麼？',
    options: [
      'Prognosis（預後）',
      'Primary factor（主要因素）與 Predisposing factor（易感因素）',
      'Pathogen（病原）與 Pruritus（瘙癢）',
      'Prevention（預防）',
    ],
    correct_answer: 'Primary factor（主要因素）與 Predisposing factor（易感因素）',
    explanation: '外耳炎 PSPP 系統：P = Primary factor（主要因素，如過敏、異物、內分泌）及 Predisposing factor（易感因素，如垂耳、耳道狹窄）；S = Secondary factor（繼發因素，如細菌/酵母菌感染）；P = Perpetuating factor（持續因素，如耳道增生、中耳炎）。系統性辨識所有因素才能有效管理外耳炎。',
    difficulty: 3, spaced_rep: true, tags: ['otitis_externa', 'PSPP', 'classification'], image_placeholder: null,
  },
  // True/False 9: Dermatophytosis Wood's lamp
  {
    id: 'Q-DERM-009', node_id: 'DERM-L3-008', question_type: 'true_false',
    question: '所有皮膚癬菌種在伍氏燈（Wood lamp）照射下都會產生蘋果綠色螢光。',
    options: ['正確', '錯誤'],
    correct_answer: '錯誤',
    explanation: '僅 Microsporum canis（約占犬貓皮膚癬菌感染的 70%）的部分菌株會在伍氏燈下產生蘋果綠色螢光，且陽性率僅約 50%。Trichophyton 和 Microsporum gypseum 不螢光。因此伍氏燈陰性不能排除皮膚癬菌感染，仍需真菌培養確認。',
    difficulty: 2, spaced_rep: true, tags: ['dermatophytosis', 'Wood_lamp', 'diagnosis'], image_placeholder: null,
  },
  // True/False 10: Sarcoptic mange location
  {
    id: 'Q-DERM-010', node_id: 'DERM-L3-009', question_type: 'true_false',
    question: '犬疥蟎症（Sarcoptic mange）典型好發於耳翼邊緣、肘部和飛節，且耳翼-足反射（pinnal-pedal reflex）的敏感度約為 80%。',
    options: ['正確', '錯誤'],
    correct_answer: '正確',
    explanation: '犬疥蟎症典型好發於耳翼邊緣、肘部、飛節及腹側。耳翼-足反射（搔刮耳翼邊緣時患犬後肢出現搔抓反射）是疥蟎的特徵性臨床表現，敏感度約 75-90%，是初步篩選的重要線索。',
    difficulty: 2, spaced_rep: true, tags: ['sarcoptic_mange', 'pinnal_pedal_reflex'], image_placeholder: null,
  },
  // Fill blank 11: Pemphigus cytology
  {
    id: 'Q-DERM-011', node_id: 'DERM-L3-010', question_type: 'fill_blank',
    question: '天疱瘡（Pemphigus）的皮膚細胞學特徵是可見到 _____，即失去細胞間連結而游離的圓形角質細胞。',
    options: null,
    correct_answer: '棘層鬆解細胞（acantholytic cells）',
    explanation: '棘層鬆解細胞（acantholytic cells）是天疱瘡的細胞學特徵。這些細胞是因抗橋粒抗體（anti-desmoglein antibody）破壞角質細胞間的橋粒連結，導致角質細胞分離而變圓。在膿皰內容物的細胞學中可見到被嗜中性球包圍的圓形角質細胞。',
    difficulty: 4, spaced_rep: true, tags: ['pemphigus', 'acantholytic_cells', 'cytology'], image_placeholder: null,
  },
  // Case-based 12: Pruritic dog
  {
    id: 'Q-DERM-012', node_id: 'DERM-L3-001', question_type: 'case_based',
    question: '一隻 2 歲未絕育雄性法國鬥牛犬因「全身搔癢、反覆耳朵發炎」就診。飼主表示症狀從 1 歲開始出現，全年發作但夏季更嚴重。理學檢查見腋下與腹股溝紅斑、雙側外耳炎、指間紅腫。已使用跳蚤預防（isoxazoline）全年無間斷，皮膚刮搔陰性。最適當的下一步是？',
    options: [
      '立即進行血清 IgE 過敏原檢測並開始 ASIT',
      '進行 8 週排除飲食試驗（新蛋白質或水解蛋白）',
      '開始長期 prednisolone 口服治療',
      '進行皮膚切片送病理',
    ],
    correct_answer: '進行 8 週排除飲食試驗（新蛋白質或水解蛋白）',
    explanation: '此犬符合多項 Favrot 標準（< 3 歲發病、室內犬、前足受累、耳翼受累、腰背不受累）。已排除跳蚤（全年 isoxazoline）與蟎蟲（刮搔陰性 + isoxazoline 可治療疥蟎）。在臨床診斷 CAD 前，必須先排除食物不良反應（AFR），進行 8 週排除飲食試驗。血清 IgE 檢測是在確診 CAD 後用於選擇 ASIT 過敏原，不用於診斷 CAD。',
    difficulty: 3, spaced_rep: true, tags: ['CAD', 'AFR', 'elimination_diet', 'clinical_reasoning'], image_placeholder: null,
  },
];
