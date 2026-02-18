import type { CaseChallenge } from '@/types/case';

export const DERM_CASES: CaseChallenge[] = [
  {
    id: 'CASE-DERM-001',
    title: '慢性瘙癢法國鬥牛犬的皮膚科診療',
    specialty: 'DERM',
    cross_specialties: ['IM'],
    required_nodes: ['DERM-L3-001', 'DERM-L3-002', 'DERM-L4-001', 'DERM-L4-002', 'DERM-L5-001'],
    difficulty: 3,
    species: '犬',
    scenario: {
      signalment: '4 歲已絕育雌性法國鬥牛犬，體重 11.5 kg',
      chief_complaint: '反覆搔癢與雙側外耳炎已持續 2 年，近期明顯惡化',
      brief_history: '約 2 歲時開始出現搔癢，最初僅在夏季發作，近一年變為全年持續。搔癢部位以腋下、腹股溝及指間為主。雙側外耳炎反覆發作，每次治療後暫時改善但很快復發。目前使用 fluralaner（Bravecto）每三個月一次，定期驅蟲與疫苗。飲食為市售犬糧。曾短期使用 prednisolone 口服，搔癢明顯改善但停藥後復發。',
    },
    steps: [
      {
        step_number: 1,
        step_type: 'history_collection',
        title: '病史採集',
        prompt: '你需要進一步詢問哪些問題？請選擇最重要的 3 項。',
        available_actions: [
          '確認搔癢的嚴重度（0-10 VAS 評分）與時間型態',
          '詢問飲食內容細節（品牌、主要蛋白來源、零食種類）',
          '詢問同居動物或人是否也有皮膚症狀',
          '詢問上次美容洗澡的時間',
          '確認跳蚤/壁蝨預防的完整性與規律性',
          '詢問家族是否有皮膚病史',
        ],
        correct_actions: [
          '確認搔癢的嚴重度（0-10 VAS 評分）與時間型態',
          '詢問飲食內容細節（品牌、主要蛋白來源、零食種類）',
          '確認跳蚤/壁蝨預防的完整性與規律性',
        ],
        feedback_correct: '很好！搔癢嚴重度評分（PVAS）是評估治療反應的基線。飲食細節對後續排除飲食試驗的設計至關重要（需選擇從未接觸的蛋白質來源）。跳蚤預防的完整性影響 FAD 的排除。',
        feedback_incorrect: '在過敏性皮膚病的診療中，搔癢嚴重度（PVAS）是最重要的基線指標。飲食內容決定排除飲食的蛋白來源選擇。跳蚤預防的規律性是排除 FAD 的前提。同居動物症狀雖重要（疥蟎鑑別），但此犬已使用 isoxazoline 可一併排除。',
        key_learning_points: [
          'PVAS（Pruritus Visual Analog Scale）0-10 分是國際標準化的搔癢評估工具',
          '排除飲食試驗需根據既往飲食史選擇全新蛋白質來源',
          '跳蚤預防的「全年不間斷」是排除 FAD 的必要條件',
        ],
      },
      {
        step_number: 2,
        step_type: 'physical_examination',
        title: '理學檢查',
        prompt: '病史補充：PVAS 7/10（嚴重搔癢），全年持續但夏季加重。目前飲食為雞肉口味犬糧，偶有牛肉零食。Fluralaner 按時投予。請選擇最關鍵的理學檢查發現。',
        available_actions: [
          '腋下與腹股溝廣泛紅斑與苔蘚化，雙側指間紅腫濕潤',
          '雙側耳道紅腫，可見棕黑色蠟狀分泌物',
          '腰背部與尾根部皮膚正常',
          '口腔黏膜粉紅，牙齒正常',
          '體溫 38.5°C，心肺聽診正常',
          '腋下皮膚有甜膩異味',
        ],
        correct_actions: [
          '腋下與腹股溝廣泛紅斑與苔蘚化，雙側指間紅腫濕潤',
          '雙側耳道紅腫，可見棕黑色蠟狀分泌物',
          '腰背部與尾根部皮膚正常',
        ],
        feedback_correct: '正確！腋下/腹股溝/指間的紅斑苔蘚化分佈符合 CAD 典型好發部位。雙側外耳炎是 CAD 最常見的伴發表現（50-80%）。腰背部正常有助排除 FAD（FAD 好發腰背尾根），且符合 Favrot 標準第 8 項。',
        feedback_incorrect: 'CAD 的典型皮膚分佈（面部、腋下、腹股溝、指間）與 FAD（腰背、尾根）有顯著差異。辨識分佈型態是鑑別過敏性皮膚病的第一步。外耳炎的耳道分泌物特徵也提供感染類型的線索。',
        key_learning_points: [
          'CAD 典型好發部位：面部、耳翼、腋下、腹股溝、指間',
          'FAD 典型好發部位：腰背、尾根、後肢內側',
          '腰背正常 + 耳翼受累 = Favrot 標準中支持 CAD 的兩個關鍵標準',
          '棕黑色蠟狀分泌物提示馬拉色菌感染可能',
        ],
      },
      {
        step_number: 3,
        step_type: 'diagnostic_plan',
        title: '初步診斷計畫',
        prompt: '根據目前資訊，你會安排哪些即時診斷檢查？選擇最適當的 3 項。',
        available_actions: [
          '皮膚細胞學（腋下印片 + 指間印片）',
          '深層皮膚刮搔（多部位）',
          '耳道細胞學（雙耳棉棒取樣染色）',
          '血清 IgE 過敏原檢測',
          '皮膚切片送組織病理',
          '全血球計數（CBC）',
        ],
        correct_actions: [
          '皮膚細胞學（腋下印片 + 指間印片）',
          '深層皮膚刮搔（多部位）',
          '耳道細胞學（雙耳棉棒取樣染色）',
        ],
        feedback_correct: '完美！皮膚細胞學是評估繼發性細菌與馬拉色菌感染的第一線工具。深層刮搔排除蠕形蟎（法鬥為好發品種）。耳道細胞學確認外耳炎的感染類型（細菌 vs 馬拉色菌 vs 混合），指導局部用藥。這三項檢查可在診間立即完成。',
        feedback_incorrect: '皮膚科初步診斷的核心是院內即時檢查（cytology + scraping）。血清 IgE 是確診 CAD 後用於 ASIT 過敏原篩選，不是診斷工具。皮膚切片在此階段不是首選。',
        key_learning_points: [
          '皮膚細胞學是最快速且低成本的繼發感染評估工具',
          '法鬥是蠕形蟎好發品種，即使懷疑過敏仍需刮搔排除',
          '耳道細胞學決定外耳炎的局部治療選擇',
          '血清 IgE 不用於診斷 CAD，僅用於 ASIT 過敏原選擇',
        ],
      },
      {
        step_number: 4,
        step_type: 'result_interpretation',
        title: '檢查結果判讀',
        prompt: '檢查結果如下：\n- 皮膚細胞學（腋下）：大量球菌（> 5/OIF），中量馬拉色菌（3-4/OIF）\n- 皮膚細胞學（指間）：中量球菌，少量嗜中性球\n- 深層刮搔（多部位）：陰性，未見蟎蟲\n- 耳道細胞學：大量馬拉色菌（> 10/OIF），少量球菌\n\n這些結果的臨床意義為何？',
        available_actions: [
          '有繼發性細菌（膿皮症）與馬拉色菌感染，需先控制感染再評估底層過敏',
          '蠕形蟎陰性確診排除蠕形蟎，感染問題不重要',
          '應立即開始 ASIT 治療',
          '結果正常，不需進一步處理',
        ],
        correct_actions: [
          '有繼發性細菌（膿皮症）與馬拉色菌感染，需先控制感染再評估底層過敏',
        ],
        feedback_correct: '正確！繼發性細菌與馬拉色菌感染是 CAD 最常見的併發症。感染本身會加劇瘙癢，必須先控制感染才能準確評估底層過敏的嚴重度。深層刮搔陰性排除蠕形蟎。耳道以馬拉色菌為主，需針對性抗黴菌治療。',
        feedback_incorrect: '繼發感染的控制是過敏性皮膚病管理中至關重要的步驟。感染會顯著加劇瘙癢，若不先控制感染就評估底層過敏，可能高估疾病嚴重度。',
        key_learning_points: [
          '繼發感染（細菌 + 馬拉色菌）會加劇 CAD 的瘙癢，必須先控制',
          '球菌 > 5/OIF 或馬拉色菌 > 2/OIF 視為過度增生',
          '深層刮搔陰性 + isoxazoline 使用中 = 有效排除蠕形蟎與疥蟎',
          '耳道感染類型決定局部藥物選擇',
        ],
      },
      {
        step_number: 5,
        step_type: 'treatment_plan',
        title: '第一階段治療：感染控制與飲食試驗',
        prompt: '你的初步治療計畫是什麼？選擇最適當的組合。',
        available_actions: [
          '全身抗生素（cephalexin 22 mg/kg BID）+ 抗黴菌洗劑 + 耳道抗黴菌治療 + 開始排除飲食試驗（水解蛋白飲食）',
          '立即開始 oclacitinib + prednisolone 雙管齊下',
          '僅局部耳藥治療，觀察 2 週',
          '立即安排皮膚切片送病理，等結果再治療',
        ],
        correct_actions: [
          '全身抗生素（cephalexin 22 mg/kg BID）+ 抗黴菌洗劑 + 耳道抗黴菌治療 + 開始排除飲食試驗（水解蛋白飲食）',
        ],
        feedback_correct: '完美！第一階段應同時進行感染控制與排除飲食試驗。Cephalexin 治療表淺膿皮症（3-4 週）。含 chlorhexidine + miconazole 的洗劑每週 2 次處理馬拉色菌。耳道使用含 clotrimazole 或 miconazole 的耳藥。同時開始水解蛋白飲食（因既往接觸雞肉與牛肉，需全新蛋白源或水解蛋白），嚴格執行 8 週。',
        feedback_incorrect: '在過敏性皮膚病的診療中，應先控制繼發感染，同時開始排除飲食試驗。若先使用 oclacitinib 等免疫調節藥物，可能掩蓋感染並干擾排除飲食試驗的判讀。',
        key_learning_points: [
          '感染控制與排除飲食試驗可同步進行',
          'Cephalexin 是表淺膿皮症的第一線抗生素',
          '抗黴菌洗劑（chlorhexidine + miconazole）對馬拉色菌有效',
          '排除飲食選擇需避免既往所有接觸過的蛋白來源',
        ],
      },
      {
        step_number: 6,
        step_type: 'result_interpretation',
        title: '飲食試驗後評估',
        prompt: '8 週後回診：\n- 繼發感染已控制（細胞學正常）\n- 外耳炎改善但仍有輕度分泌物\n- 搔癢 PVAS 從 7/10 降至 5/10\n- 腋下紅斑仍存在但苔蘚化改善\n- 進行飲食挑戰（恢復原飲食）3 天後搔癢加劇至 8/10\n\n如何解讀這些結果？',
        available_actions: [
          '食物不良反應（AFR）確診：飲食試驗部分改善 + 飲食挑戰後惡化 = AFR 成分存在。但仍有殘餘搔癢提示可能合併 CAD',
          '完全排除 AFR，所有症狀為 CAD',
          '飲食試驗無效，直接開始免疫調節藥物',
          '需延長飲食試驗至 16 週再評估',
        ],
        correct_actions: [
          '食物不良反應（AFR）確診：飲食試驗部分改善 + 飲食挑戰後惡化 = AFR 成分存在。但仍有殘餘搔癢提示可能合併 CAD',
        ],
        feedback_correct: '正確！排除飲食後搔癢從 7 降至 5（部分改善），恢復原飲食後急速惡化至 8 = AFR 確診。但排除飲食下仍有殘餘搔癢（5/10）= 很可能合併 CAD。此犬為 AFR + CAD 雙重診斷，需同時管理飲食與環境過敏。',
        feedback_incorrect: '飲食挑戰（provocative testing）是 AFR 確診的金標準。搔癢部分改善表示飲食是病因之一，但殘餘搔癢提示還有其他因素。CAD 與 AFR 可以共存，臨床上相當常見。',
        key_learning_points: [
          '飲食挑戰（恢復原飲食後惡化）是 AFR 確診的金標準',
          '部分改善 + 挑戰惡化 = AFR 成分存在',
          '排除飲食下仍有殘餘搔癢 = 可能合併 CAD（雙重診斷常見）',
          'CAD 與 AFR 可共存，需同時管理',
        ],
      },
      {
        step_number: 7,
        step_type: 'case_summary',
        title: '病例總結與長期管理',
        prompt: '最終診斷：食物不良反應 + 犬異位性皮膚炎（雙重過敏）。請選擇最適當的長期管理方案。',
        available_actions: [
          '水解蛋白飲食持續（控制 AFR）+ oclacitinib SID（控制 CAD 殘餘搔癢）+ 全年跳蚤預防 + 定期皮膚細胞學監測 + 考慮 ASIT',
          '僅維持水解蛋白飲食即可，不需額外藥物',
          '長期使用 prednisolone QOD 控制所有症狀',
          '停止飲食管理，僅使用 lokivetmab 每月注射',
        ],
        correct_actions: [
          '水解蛋白飲食持續（控制 AFR）+ oclacitinib SID（控制 CAD 殘餘搔癢）+ 全年跳蚤預防 + 定期皮膚細胞學監測 + 考慮 ASIT',
        ],
        feedback_correct: '正確！多模式長期管理：1. 飲食控制（水解蛋白或限制蛋白飲食終身）處理 AFR 部分。2. Oclacitinib SID 或 lokivetmab 每月注射處理 CAD 殘餘搔癢。3. 全年跳蚤預防避免 FAD 加重。4. 定期皮膚細胞學監測繼發感染。5. 可安排血清 IgE 或皮內試驗後開始 ASIT（唯一可能改變 CAD 病程的治療）。',
        feedback_incorrect: '雙重過敏（AFR + CAD）需要多模式策略，任何單一方法都不足以控制。飲食管理針對 AFR 部分，藥物治療針對 CAD 部分。長期 prednisolone 副作用多，不是首選。',
        key_learning_points: [
          '雙重過敏（AFR + CAD）在臨床上很常見，需同時管理',
          '飲食控制是 AFR 管理的基石，必須終身維持',
          'Oclacitinib 或 lokivetmab 是 CAD 長期控制的安全選擇',
          'ASIT 是唯一可能改變 CAD 疾病自然病程的治療',
          '全年跳蚤預防在台灣為必要措施',
        ],
      },
    ],
    expert_pathway: {
      reasoning: '法國鬥牛犬 + 2 歲發病 + 典型 CAD 分佈（腋下/腹股溝/指間/外耳炎）+ 腰背正常 + 多項 Favrot 標準陽性。系統性排除：跳蚤（isoxazoline 覆蓋）→ 蟎蟲（刮搔陰性）→ 感染控制 → 排除飲食 8 週（部分改善 + 挑戰惡化 = AFR 確診）→ 殘餘搔癢 = 合併 CAD → 多模式長期管理。',
      key_decisions: [
        '先控制繼發感染再評估底層過敏嚴重度',
        '排除飲食試驗與感染治療同步進行節省時間',
        '飲食挑戰確認 AFR 診斷',
        '辨識殘餘搔癢提示 CAD 合併存在',
        '選擇安全的長期免疫調節藥物而非糖皮質激素',
      ],
      common_pitfalls: [
        '未控制繼發感染即開始排除飲食試驗，導致無法判斷飲食效果',
        '排除飲食試驗期間未嚴格執行（飼主偷餵零食）',
        '未進行飲食挑戰就假設 AFR 已排除',
        '忽略 CAD + AFR 共存的可能性',
        '長期依賴糖皮質激素而非使用更安全的 JAK inhibitor 或 anti-IL-31',
      ],
    },
    related_nodes_for_review: [
      'DERM-L3-001',
      'DERM-L3-002',
      'DERM-L4-001',
      'DERM-L4-002',
      'DERM-L4-003',
      'DERM-L5-001',
    ],
    tags: ['CAD', 'AFR', 'French_Bulldog', 'allergy', 'elimination_diet', 'case_challenge'],
  },
  // --- CASE-DERM-002 ---
  {
    id: 'CASE-DERM-002', title: '反覆搔癢法國鬥牛犬——CAD vs FAD 鑑別', specialty: 'DERM', cross_specialties: ['IM'], required_nodes: ['DERM-L3-001', 'DERM-L3-003', 'DERM-L4-001', 'DERM-L4-002', 'DERM-L5-001'], difficulty: 3, species: '犬',
    scenario: { signalment: '3 歲已絕育雄性法國鬥牛犬，體重 12 kg', chief_complaint: '季節性搔癢反覆發作，近 3 個月惡化，集中在腰背與腹部', brief_history: '約 1.5 歲起每到夏季出現搔癢，今年延續至秋季。搔癢以腰背部、尾根與腹股溝為主。fipronil 偶爾延遲使用。飲食為雞肉口味犬糧。家中另有一隻貓。' },
    steps: [
      { step_number: 1, step_type: 'history_collection', title: '病史採集', prompt: '你需要進一步詢問哪些問題以區分 CAD 與 FAD？選擇 3 項。', available_actions: ['確認搔癢分佈的精確部位與季節性變化', '確認 fipronil 的使用規律性', '詢問家中環境是否有跳蚤或蟲卵', '詢問飼主是否被跳蚤叮咬', '詢問是否常去公園', '詢問食慾或體重變化'], correct_actions: ['確認搔癢分佈的精確部位與季節性變化', '確認 fipronil 的使用規律性', '詢問家中環境是否有跳蚤或蟲卵'], feedback_correct: '正確！搔癢分佈型態是區分 CAD（腋下/腹股溝/指間）與 FAD（腰背/尾根）的第一線指標。Fipronil 效力不如 isoxazoline 穩定。環境跳蚤調查有助判斷暴露風險。', feedback_incorrect: '鑑別 CAD 與 FAD 核心：(1) 病灶分佈；(2) 跳蚤預防完整性；(3) 環境跳蚤暴露證據。', key_learning_points: ['FAD 典型分佈：腰背、尾根、後肢內側', 'CAD 典型分佈：腋下、腹股溝、指間、耳翼', 'Fipronil 效力可能不足以排除 FAD，isoxazoline 類更可靠'] },
      { step_number: 2, step_type: 'physical_examination', title: '理學檢查', prompt: 'PVAS 6/10，fipronil 偶有延遲。家中地毯偶見黑色小蟲。選擇最關鍵的理學檢查發現。', available_actions: ['腰背部與尾根廣泛丘疹、結痂與脫毛', '腹股溝輕度紅斑但無苔蘚化', '指間與耳翼外觀正常', '蚤梳發現跳蚤糞便（濕潤後呈紅棕色）', '體溫 38.6°C，淋巴結正常', '口腔牙齒正常'], correct_actions: ['腰背部與尾根廣泛丘疹、結痂與脫毛', '蚤梳發現跳蚤糞便（濕潤後呈紅棕色）', '指間與耳翼外觀正常'], feedback_correct: '正確！腰背部丘疹結痂是 FAD 典型表現。蚤糞是跳蚤暴露的直接證據。指間耳翼正常有助排除典型 CAD。', feedback_incorrect: '蚤梳檢查是偵測跳蚤暴露最簡單的方法。跳蚤糞便濕潤後呈紅棕色（消化血液）。', key_learning_points: ['蚤梳+濕紙巾測試是確認跳蚤暴露的金標準', 'FAD 表現：丘疹、結痂、自我創傷性脫毛', '腰背為主+腹股溝亦受累提示 FAD+CAD 重疊'] },
      { step_number: 3, step_type: 'diagnostic_plan', title: '診斷策略', prompt: '你的診斷策略？選擇 3 項。', available_actions: ['升級跳蚤預防為 isoxazoline，≥ 3 個月排除試驗', '皮膚細胞學評估繼發感染', '深層皮膚刮搔排除蠕形蟎', '血清 IgE 檢測', '立即排除飲食試驗', '皮膚切片'], correct_actions: ['升級跳蚤預防為 isoxazoline，≥ 3 個月排除試驗', '皮膚細胞學評估繼發感染', '深層皮膚刮搔排除蠕形蟎'], feedback_correct: '完美！跳蚤排除試驗確認 FAD。細胞學評估繼發膿皮症。法鬥為蠕形蟎好發品種。', feedback_incorrect: '未完成跳蚤排除前不應做 IgE 或飲食試驗。順序：跳蚤→飲食→CAD。', key_learning_points: ['過敏皮膚病診斷順序：排除跳蚤→排除食物→CAD', 'Isoxazoline 類為跳蚤排除試驗首選', '跳蚤排除試驗需 ≥ 3 個月+環境處理'] },
      { step_number: 4, step_type: 'result_interpretation', title: '排除試驗後評估', prompt: '3 個月後：fluralaner 嚴格使用，蚤梳陰性。PVAS 6→3/10。腰背丘疹完全消退。腹股溝紅斑仍存在。如何解讀？', available_actions: ['FAD 確診＋腹股溝殘餘紅斑提示合併 CAD，需排除飲食', '所有症狀已解決', '排除試驗無效', '直接開始 oclacitinib'], correct_actions: ['FAD 確診＋腹股溝殘餘紅斑提示合併 CAD，需排除飲食'], feedback_correct: '正確！腰背消退=FAD 確診。PVAS 仍 3/10+腹股溝紅斑=其他過敏成分存在。', feedback_incorrect: '搔癢從 6 降至 3 是改善但非完全緩解。多重過敏可共存。', key_learning_points: ['FAD 部位改善=FAD 確診', '殘餘搔癢提示合併其他過敏', 'FAD+CAD 共存臨床常見'] },
      { step_number: 5, step_type: 'treatment_plan', title: '長期管理', prompt: '排除飲食 8 週無進一步改善，飲食挑戰無惡化。最終 FAD+CAD。長期方案？', available_actions: ['全年 isoxazoline+oclacitinib/lokivetmab+定期監測', '僅跳蚤預防', '長期 prednisolone', '停跳蚤預防僅用 oclacitinib'], correct_actions: ['全年 isoxazoline+oclacitinib/lokivetmab+定期監測'], feedback_correct: '正確！FAD 需全年跳蚤預防，CAD 用 oclacitinib 或 lokivetmab。', feedback_incorrect: '停跳蚤預防會 FAD 復發。Prednisolone 長期副作用多。', key_learning_points: ['台灣氣候下 FAD 犬需全年預防', 'Oclacitinib 適合 CAD 長期控制', 'Lokivetmab 適合口服困難犬隻'] },
    ],
    expert_pathway: { reasoning: '法鬥+腰背搔癢+蚤糞陽性+fipronil 不規律=FAD。腹股溝紅斑=合併 CAD。升級跳蚤預防→腰背改善→排除飲食無效→殘餘搔癢=CAD。', key_decisions: ['辨識腰背分佈為 FAD', '升級至 isoxazoline', '所有動物同步預防', '排除飲食', '辨識殘餘搔癢為 CAD'], common_pitfalls: ['直接按 CAD 治療', '效力不足的跳蚤預防', '忽略環境', '改善後停止調查', '跳步做 IgE'] },
    related_nodes_for_review: ['DERM-L3-001', 'DERM-L3-003', 'DERM-L4-001', 'DERM-L4-002', 'DERM-L5-001', 'DERM-L5-002'],
    tags: ['FAD', 'CAD', 'French_Bulldog', 'flea', 'differential', 'case_challenge'],
  },

  // --- CASE-DERM-003 ---
  {
    id: 'CASE-DERM-003', title: '幼犬全身脫毛——蠕形蟎 vs 黴菌鑑別', specialty: 'DERM', cross_specialties: ['CPATH'], required_nodes: ['DERM-L3-004', 'DERM-L3-008', 'DERM-L4-002', 'DERM-L4-003', 'DERM-L5-002'], difficulty: 3, species: '犬',
    scenario: { signalment: '5 個月齡未絕育雌性英國鬥牛犬，體重 8 kg', chief_complaint: '面部與四肢進行性脫毛 3 週，輕度搔癢', brief_history: '3 週前眼周出現圓形脫毛，擴展至口鼻、前肢。來自繁殖場，2 週前帶回。同窩幼犬也有類似問題。尚未驅蟲。' },
    steps: [
      { step_number: 1, step_type: 'history_collection', title: '病史採集', prompt: '選擇最重要的 3 項問題。', available_actions: ['確認同窩幼犬的脫毛部位與嚴重度', '詢問飼主或家人是否有皮膚症狀', '詢問脫毛的進展速度與對稱性', '詢問飲食品牌', '詢問居住環境', '詢問是否有打噴嚏'], correct_actions: ['確認同窩幼犬的脫毛部位與嚴重度', '詢問飼主或家人是否有皮膚症狀', '詢問脫毛的進展速度與對稱性'], feedback_correct: '正確！同窩傳染提示黴菌（高度傳染）vs 蠕形蟎（非傳染但可母犬傳幼犬）。飼主皮膚症狀提示人畜共通黴菌。脫毛型態提供鑑別線索。', feedback_incorrect: '幼犬脫毛病史重點：傳染性評估、進展型態、搔癢程度。', key_learning_points: ['皮膚癬菌症具高度人畜共通傳染性', '蠕形蟎非傳染性（經母犬哺乳傳幼犬）', '幼犬脫毛三大鑑別：蠕形蟎、黴菌、疥蟎'] },
      { step_number: 2, step_type: 'physical_examination', title: '理學檢查', prompt: '同窩 2 隻也脫毛，飼主手臂有環狀紅斑。脫毛呈多處圓形擴大。選擇關鍵發現。', available_actions: ['面部多處圓形脫毛，邊緣有灰白色鱗屑', '前肢遠端圓形脫毛斑，毛髮脆弱易斷', '脫毛區無明顯紅斑或膿疱', '全身未見丘疹或膿疱', '體溫正常', '耳道正常'], correct_actions: ['面部多處圓形脫毛，邊緣有灰白色鱗屑', '前肢遠端圓形脫毛斑，毛髮脆弱易斷', '脫毛區無明顯紅斑或膿疱'], feedback_correct: '正確！圓形脫毛伴鱗屑與脆弱斷毛是皮膚癬菌症典型表現。無膿疱幫助排除蠕形蟎合併感染。結合傳染性與飼主環狀紅斑，高度指向黴菌。', feedback_incorrect: '蠕形蟎：脫毛伴毛囊性丘疹、膿疱。黴菌：圓形脫毛、鱗屑、斷毛，較少紅斑膿疱。', key_learning_points: ['皮膚癬菌症：圓形脫毛、灰白色鱗屑、脆弱斷毛', '蠕形蟎：毛囊性丘疹/膿疱、脂漏', '飼主環狀紅斑=人畜共通感染強烈證據'] },
      { step_number: 3, step_type: 'diagnostic_plan', title: '診斷計畫', prompt: '安排哪些檢查？選擇 3 項。', available_actions: ['Wood 燈檢查', 'Trichogram 觀察黴菌孢子', '深層皮膚刮搔排除蠕形蟎', '黴菌培養（DTM）', '皮膚細胞學', '血清 IgE'], correct_actions: ['Wood 燈檢查', 'Trichogram 觀察黴菌孢子', '深層皮膚刮搔排除蠕形蟎'], feedback_correct: '完美！Wood 燈快速篩檢（M. canis 約 50% 螢光）。Trichogram 見毛幹上 ectothrix 孢子。深層刮搔排除蠕形蟎。培養為確診金標準但需 7-21 天。', feedback_incorrect: 'Wood 燈、trichogram、刮搔是幼犬脫毛的三項即時檢查。培養耗時不能取代即時檢查。', key_learning_points: ['Wood 燈：M. canis 約 50% 呈蘋果綠螢光', 'Trichogram：ectothrix 孢子包圍毛幹', '深層刮搔：幼犬脫毛必須排除蠕形蟎', 'DTM 培養：金標準，需 7-21 天'] },
      { step_number: 4, step_type: 'result_interpretation', title: '結果判讀', prompt: 'Wood 燈：多處蘋果綠螢光。Trichogram：ectothrix 孢子。刮搔：陰性。意義？', available_actions: ['皮膚癬菌症（M. canis）確診，蠕形蟎排除', '僅暫時結果需等培養', 'Wood 燈不具診斷價值', '結果不確定'], correct_actions: ['皮膚癬菌症（M. canis）確診，蠕形蟎排除'], feedback_correct: '正確！Wood 燈螢光+trichogram ectothrix 孢子=臨床確診。同步送 DTM 培養確認。可立即開始治療。', feedback_incorrect: 'Wood 燈螢光+trichogram 孢子已足夠支持臨床診斷並開始治療。', key_learning_points: ['Wood 燈+trichogram=可立即開始治療', 'M. canis 是犬貓最常見皮膚癬菌', '培養同步進行但不延遲治療'] },
      { step_number: 5, step_type: 'treatment_plan', title: '治療計畫', prompt: '治療方案？', available_actions: ['口服 itraconazole 5 mg/kg SID+抗黴菌洗劑每週 2 次+環境消毒+同居動物治療', '僅局部藥膏', '口服 griseofulvin+剃毛', '等培養結果'], correct_actions: ['口服 itraconazole 5 mg/kg SID+抗黴菌洗劑每週 2 次+環境消毒+同居動物治療'], feedback_correct: '完美！多病灶需全身性抗黴菌治療。Itraconazole 為幼犬首選。洗劑減少環境汙染。環境消毒（漂白水 1:10）。同居動物需檢查治療。', feedback_incorrect: '多病灶感染僅局部藥膏不足。需全身藥物+局部+環境的三管齊下。', key_learning_points: ['多病灶需全身性抗黴菌治療', 'Itraconazole 為幼犬首選（比 griseofulvin 安全）', '環境消毒（漂白水 1:10）防止再感染', '所有同居動物需同步檢查治療'] },
      { step_number: 6, step_type: 'case_summary', title: '追蹤與停藥', prompt: '治療 4 週後毛髮再生良好。何時停藥？', available_actions: ['連續 2 次黴菌培養陰性（間隔 2-4 週）', '臨床痊癒即停', 'Wood 燈陰性即停', '固定 8 週後停'], correct_actions: ['連續 2 次黴菌培養陰性（間隔 2-4 週）'], feedback_correct: '正確！臨床改善不等於黴菌清除。停藥標準為連續 2 次培養陰性。通常需 8-12 週。', feedback_incorrect: '臨床痊癒或 Wood 燈陰性不代表黴菌清除。過早停藥導致復發。', key_learning_points: ['停藥標準：連續 2 次培養陰性', '過早停藥是復發最常見原因', '平均治療 8-12 週', '持續環境消毒'] },
    ],
    expert_pathway: { reasoning: '英鬥幼犬+圓形脫毛+同窩傳染+飼主環狀紅斑=黴菌高度疑似。Wood 燈螢光+ectothrix 確診。刮搔排除蠕形蟎。全身性抗黴菌+環境消毒。', key_decisions: ['辨識圓形脫毛+傳染性指向黴菌', '飼主環狀紅斑確認人畜共通', 'Wood 燈+trichogram 即時確診', '選 itraconazole 非 griseofulvin', '停藥需培養陰性'], common_pitfalls: ['未考慮黴菌直接按蠕形蟎治療', '忽略飼主症狀', '僅用局部藥膏', '臨床改善即停藥', '未做環境消毒'] },
    related_nodes_for_review: ['DERM-L3-004', 'DERM-L3-008', 'DERM-L4-002', 'DERM-L4-003', 'DERM-L5-002', 'DERM-L5-005'],
    tags: ['dermatophytosis', 'demodicosis', 'puppy', 'English_Bulldog', 'zoonosis', 'case_challenge'],
  },

  // --- CASE-DERM-004 ---
  {
    id: 'CASE-DERM-004', title: '貓對稱性脫毛——過度理毛 vs 內分泌', specialty: 'DERM', cross_specialties: ['IM'], required_nodes: ['DERM-L3-001', 'DERM-L4-001', 'DERM-L4-002', 'DERM-L5-001'], difficulty: 3, species: '貓',
    scenario: { signalment: '6 歲已絕育雌性家貓（DSH），體重 4.2 kg', chief_complaint: '腹部與後肢內側對稱性脫毛 4 個月', brief_history: '飼主 4 個月前發現腹部毛髮稀疏，擴展至後肢內側與腰側。飼主表示未觀察到搔癢。食慾正常。室內飼養，家中另有 2 隻貓。使用 selamectin 每月。' },
    steps: [
      { step_number: 1, step_type: 'history_collection', title: '病史採集', prompt: '選擇最重要的 3 項問題。', available_actions: ['詢問飼主是否注意到貓在獨處時舔舐（可設監視器）', '確認脫毛的精確分佈與進展', '詢問毛球嘔吐頻率', '詢問飲水量與排尿', '詢問近期環境變化或壓力', '詢問過去皮膚問題'], correct_actions: ['詢問飼主是否注意到貓在獨處時舔舐（可設監視器）', '確認脫毛的精確分佈與進展', '詢問毛球嘔吐頻率'], feedback_correct: '正確！貓過度理毛常在獨處時進行，監視器是揭露隱藏性舔舐的最佳方法。脫毛分佈提示病因。毛球嘔吐增加間接支持過度理毛。', feedback_incorrect: '貓對稱性脫毛最常見原因是過度理毛（過敏>心因性），非內分泌。貓傾向獨處時理毛。', key_learning_points: ['貓對稱性脫毛最常見原因：過度理毛（allergy > psychogenic）', '貓傾向獨處時舔舐，飼主常不知情', '毛球嘔吐增加是過度理毛的間接證據', '貓的內分泌性脫毛極罕見'] },
      { step_number: 2, step_type: 'physical_examination', title: '理學檢查', prompt: '監視器確認貓頻繁舔舐腹部。毛球嘔吐每週 2-3 次。選擇關鍵發現。', available_actions: ['腹部與後肢內側對稱性脫毛，毛髮呈短截斷狀', '脫毛區皮膚外觀正常', '腹股溝輕微紅斑', '頭頸部小型結痂（miliary dermatitis）', '體態正常，甲狀腺未觸及腫大', '耳道正常'], correct_actions: ['腹部與後肢內側對稱性脫毛，毛髮呈短截斷狀', '頭頸部小型結痂（miliary dermatitis）', '腹股溝輕微紅斑'], feedback_correct: '正確！短截斷毛=舔舐造成的機械性斷毛，確認過度理毛。Miliary dermatitis 是貓過敏反應模式之一。腹股溝紅斑提示搔癢/過敏成分。', feedback_incorrect: '毛髮形態是區分過度理毛 vs 真正脫毛的關鍵：短截斷毛=舔斷，毛囊空虛=真正脫毛（內分泌）。', key_learning_points: ['短截斷毛=過度理毛直接證據', '貓過敏四大反應模式：miliary dermatitis、對稱性脫毛、嗜酸球性肉芽腫群、頭頸部搔癢', 'Miliary dermatitis=過敏機轉參與', '內分泌性脫毛：毛囊空虛、易拔、皮膚萎縮'] },
      { step_number: 3, step_type: 'diagnostic_plan', title: '診斷計畫', prompt: '安排哪些檢查？選擇 3 項。', available_actions: ['Trichogram 確認斷毛 vs 拔毛', '表淺皮膚刮搔排除 D. gatoi', '皮膚細胞學（miliary 區域）', '甲狀腺功能（T4）', '腎上腺功能', '皮膚切片'], correct_actions: ['Trichogram 確認斷毛 vs 拔毛', '表淺皮膚刮搔排除 D. gatoi', '皮膚細胞學（miliary 區域）'], feedback_correct: '完美！Trichogram 確認毛髮斷裂端。D. gatoi（貓蠕形蟎）需表淺刮搔，可造成搔癢。Miliary 區域細胞學可能見嗜酸球。貓甲狀腺功能低下極罕見。', feedback_incorrect: '貓對稱性脫毛檢查優先序：確認過度理毛→排除寄生蟲→評估過敏。內分泌檢查僅排除其他原因後考慮。', key_learning_points: ['Trichogram 是區分 overgrooming vs 真正脫毛的決定性檢查', 'D. gatoi：貓表淺蠕形蟎，會傳染，可造成搔癢', '貓內分泌性脫毛極罕見，不應作首要鑑別', '嗜酸球=過敏/寄生蟲機轉'] },
      { step_number: 4, step_type: 'result_interpretation', title: '結果判讀與治療', prompt: 'Trichogram：斷裂狀毛尖。刮搔：D. gatoi 陰性。細胞學：miliary 區嗜酸球。確認過度理毛+過敏。下一步？', available_actions: ['跳蚤嚴格預防（升級 isoxazoline 貓品項）→ 排除飲食 8 週', '直接 prednisolone 止癢', '開始行為藥物 fluoxetine', '血清 IgE 檢測'], correct_actions: ['跳蚤嚴格預防（升級 isoxazoline 貓品項）→ 排除飲食 8 週'], feedback_correct: '正確！確認過度理毛由搔癢驅動後，按標準排除流程：跳蚤→飲食。心因性理毛是排除所有過敏原因後的最終診斷。', feedback_incorrect: '排除過敏原因前不應直接用行為藥物或長期類固醇。貓「心因性脫毛」多數最終為過敏引起。', key_learning_points: ['貓過度理毛多數為過敏驅動，非純心因性', '心因性脫毛是排除性診斷', '貓的過敏排除流程同犬：跳蚤→食物→環境', '嗜酸球參與支持過敏或寄生蟲機轉'] },
      { step_number: 5, step_type: 'case_summary', title: '病例總結', prompt: '排除飲食 8 週後脫毛明顯改善（PVAS 降至 1/10），飲食挑戰復發。確診 AFR 導致的過度理毛。長期管理？', available_actions: ['限制蛋白飲食終身+跳蚤預防+環境豐富化減壓', '僅水解蛋白飲食', '長期 prednisolone', '長期 fluoxetine'], correct_actions: ['限制蛋白飲食終身+跳蚤預防+環境豐富化減壓'], feedback_correct: '正確！AFR 確診後飲食管理為基石。跳蚤預防持續。環境豐富化降低壓力輔助控制。', feedback_incorrect: '單一策略不夠。飲食+預防+環境的多模式方案最佳。', key_learning_points: ['貓 AFR 導致的過度理毛：飲食管理可完全控制', '環境豐富化是貓皮膚病輔助管理重要一環', '心因性成分可能與過敏成分共存'] },
    ],
    expert_pathway: { reasoning: '對稱性脫毛+監視器確認舔舐+短截斷毛=過度理毛。Miliary dermatitis+嗜酸球=過敏驅動。排除飲食改善+挑戰復發=AFR。', key_decisions: ['用監視器揭露舔舐', 'Trichogram 確認 overgrooming', '辨識 miliary dermatitis 為過敏證據', '排除過敏原因而非直接給行為藥物', '飲食挑戰確診 AFR'], common_pitfalls: ['直接歸因心因性', '未做 trichogram 即假設內分泌', '忽略 miliary dermatitis', '直接用行為藥物', '未做飲食挑戰'] },
    related_nodes_for_review: ['DERM-L3-001', 'DERM-L3-002', 'DERM-L4-001', 'DERM-L4-002', 'DERM-L5-001'],
    tags: ['feline', 'overgrooming', 'AFR', 'miliary_dermatitis', 'symmetric_alopecia', 'case_challenge'],
  },

  // --- CASE-DERM-005 ---
  {
    id: 'CASE-DERM-005', title: '慢性外耳炎治療失敗的再評估', specialty: 'DERM', cross_specialties: ['SURG'], required_nodes: ['DERM-L3-007', 'DERM-L4-004', 'DERM-L5-004', 'DERM-L3-001'], difficulty: 4, species: '犬',
    scenario: { signalment: '7 歲已絕育雄性可卡犬，體重 13 kg', chief_complaint: '雙側外耳炎反覆 3 年，近 6 個月治療完全無效', brief_history: '3 年來多次外耳炎。近 6 個月持續症狀，大量褐色黏稠分泌物惡臭。曾用多種耳藥短暫改善。未曾做細胞學或培養。曾診斷 CAD，目前無過敏控制藥物。' },
    steps: [
      { step_number: 1, step_type: 'history_collection', title: '病史採集', prompt: '釐清哪些關鍵問題？選擇 3 項。', available_actions: ['確認 CAD 控制狀況與用藥', '確認耳藥使用方式', '詢問耳道疼痛或抗拒碰觸', '詢問聽力變化', '詢問飲食品牌', '詢問洗澡頻率'], correct_actions: ['確認 CAD 控制狀況與用藥', '確認耳藥使用方式', '詢問耳道疼痛或抗拒碰觸'], feedback_correct: '正確！CAD 是外耳炎最常見主因，未控制會導致復發。耳藥使用不當是治療失敗常見原因。疼痛提示中耳炎或嚴重增生。', feedback_incorrect: '外耳炎治療失敗三大原因：未控制主因、治療不當、併發症。', key_learning_points: ['PSPP 框架：Primary/Secondary/Perpetuating/Predisposing', '未控制過敏是外耳炎復發頭號原因', '可卡犬耳道解剖為 predisposing factor'] },
      { step_number: 2, step_type: 'physical_examination', title: '耳道檢查', prompt: 'CAD 1 年無控制藥物。耳藥未清耳就滴。觸碰疼痛。選擇關鍵發現。', available_actions: ['耳鏡：耳道嚴重增生狹窄', '大量黃綠色膿性分泌物惡臭', '耳道壁鈣化', '耳道細胞學：大量桿菌與嗜中性球', '觸診耳道硬化', '腋下腹股溝 CAD 典型紅斑'], correct_actions: ['耳鏡：耳道嚴重增生狹窄', '耳道細胞學：大量桿菌與嗜中性球', '腋下腹股溝 CAD 典型紅斑'], feedback_correct: '正確！耳道嚴重增生是 perpetuating factor。桿菌（可能 Pseudomonas）提示抗藥性感染。CAD 紅斑確認底層過敏未控制。', feedback_incorrect: '慢性外耳炎關鍵：耳道增生、感染類型改變（桿菌）、底層疾病未控制。', key_learning_points: ['桿菌在耳道=高度疑似 Pseudomonas', 'Pseudomonas 常多重抗藥性需 C&S', '耳道增生/狹窄是 perpetuating factor', '底層過敏未控制=外耳炎無法根治'] },
      { step_number: 3, step_type: 'diagnostic_plan', title: '進階診斷', prompt: '需哪些進階檢查？選擇 3 項。', available_actions: ['細菌培養與藥敏（C&S）', '鎮靜下深層檢查評估鼓膜', '耳道 CT 評估中耳炎與骨化', '血清 IgE', '耳道切片', 'CBC'], correct_actions: ['細菌培養與藥敏（C&S）', '鎮靜下深層檢查評估鼓膜', '耳道 CT 評估中耳炎與骨化'], feedback_correct: '完美！C&S 指導抗生素。鎮靜檢查鼓膜。CT 評估中耳炎與骨化決定是否需 TECA-LBO。', feedback_incorrect: '治療失敗需：C&S、鼓膜評估、CT 影像。', key_learning_points: ['Pseudomonas 需 C&S 指導用藥', '鼓膜破裂=中耳炎', 'CT 是評估中耳炎金標準', 'TECA-LBO 是末期耳炎手術'] },
      { step_number: 4, step_type: 'treatment_plan', title: '綜合治療', prompt: 'C&S：Pseudomonas，僅對 marbofloxacin 與 polymyxin B 敏感。CT：雙側中耳炎，左側重度骨化。鼓膜：右側部分破裂。方案？', available_actions: ['右耳：高濃度 marbofloxacin 耳用+全身用。左耳：轉介 TECA-LBO。同時 CAD 控制（oclacitinib）', '繼續目前耳藥', '雙側手術', '僅全身抗生素'], correct_actions: ['右耳：高濃度 marbofloxacin 耳用+全身用。左耳：轉介 TECA-LBO。同時 CAD 控制（oclacitinib）'], feedback_correct: '正確！右耳可內科治療。左耳重度骨化需手術。最關鍵是同步 CAD 控制。', feedback_incorrect: '末期外耳炎需個別化評估每側。CAD 控制是根本。', key_learning_points: ['Pseudomonas 需高濃度局部 fluoroquinolone', '重度骨化+中耳炎=TECA-LBO 適應症', '控制底層過敏是預防復發根本', '需處理所有 PSPP 層面'] },
      { step_number: 5, step_type: 'case_summary', title: '病例總結', prompt: '最重要的教訓？', available_actions: ['應重新評估 PSPP 而非換耳藥', '必須控制底層疾病', '細胞學與 C&S 是必要工具', '以上皆正確'], correct_actions: ['以上皆正確'], feedback_correct: '正確！本病例展示外耳炎治療失敗的系統性再評估。', feedback_incorrect: '需全面 PSPP 分析。', key_learning_points: ['PSPP 是外耳炎診療核心', '每次就診應做耳道細胞學', 'C&S 適應症：桿菌、治療失敗、中耳炎', 'TECA-LBO 是末期耳炎有效手術'] },
    ],
    expert_pathway: { reasoning: '可卡犬+慢性外耳炎+未控制 CAD+桿菌+骨化+中耳炎。PSPP 分析後右耳內科+左耳手術+CAD 控制。', key_decisions: ['辨識 CAD 未控制為根因', 'C&S 指導', 'CT 評估', '分別評估左右耳', '同步 CAD 控制'], common_pitfalls: ['反覆換耳藥未做 C&S', '未控制 CAD', '忽略中耳炎', '未做 CT', '鼓膜破裂用耳毒性藥物'] },
    related_nodes_for_review: ['DERM-L3-007', 'DERM-L3-001', 'DERM-L4-004', 'DERM-L4-003', 'DERM-L5-004', 'DERM-L5-001'],
    tags: ['otitis_externa', 'Pseudomonas', 'TECA', 'Cocker_Spaniel', 'treatment_failure', 'case_challenge'],
  },

  // --- CASE-DERM-006 ---
  {
    id: 'CASE-DERM-006', title: '皮膚水泡與潰瘍——自體免疫 vs 感染', specialty: 'DERM', cross_specialties: ['CPATH', 'IM'], required_nodes: ['DERM-L3-010', 'DERM-L2-003', 'DERM-L4-003', 'DERM-L5-003'], difficulty: 4, species: '犬',
    scenario: { signalment: '5 歲已絕育雌性秋田犬，體重 28 kg', chief_complaint: '口鼻部與耳翼水泡、結痂與潰瘍，進行性惡化 2 週', brief_history: '2 週前鼻鏡出現表皮剝離，之後口鼻部、耳翼、眼瞼邊緣出現水泡破裂結痂潰瘍。疼痛但搔癢不明顯。食慾輕度下降。未使用新藥物或疫苗。體溫偶爾 39.2 度。' },
    steps: [
      { step_number: 1, step_type: 'history_collection', title: '病史採集', prompt: '選擇 3 項重要問題。', available_actions: ['確認近期藥物或疫苗', '確認病灶是否在足墊', '詢問是否接觸有皮膚病動物', '詢問飲食更換', '詢問日光曝曬', '詢問黏膜是否有病灶'], correct_actions: ['確認近期藥物或疫苗', '確認病灶是否在足墊', '詢問黏膜是否有病灶'], feedback_correct: '正確！藥物/疫苗可誘發天疱瘡。足墊受累是 PF 重要特徵。黏膜潰瘍提示 PV vs PF。', feedback_incorrect: '自體免疫皮膚病病史重點：藥物誘發、病灶分佈（足墊/黏膜）、品種。', key_learning_points: ['秋田犬是 PF 好發品種', '藥物/疫苗可觸發天疱瘡', '足墊病灶=PF 重要特徵', '黏膜受累=考慮 PV'] },
      { step_number: 2, step_type: 'physical_examination', title: '理學檢查', prompt: '未使用新藥/疫苗。足墊有角化過度與裂隙。口腔無潰瘍。選擇關鍵發現。', available_actions: ['鼻鏡色素脫失與表皮剝離伴蜜黃色結痂', '耳翼內側鬆弛水泡與結痂', '足墊角化過度伴裂隙', '眼瞼邊緣結痂紅斑', '腋下腹股溝正常', '體溫 39.2 度淺表淋巴結輕度腫大'], correct_actions: ['鼻鏡色素脫失與表皮剝離伴蜜黃色結痂', '足墊角化過度伴裂隙', '耳翼內側鬆弛水泡與結痂'], feedback_correct: '正確！鼻鏡色素脫失好發 mucocutaneous junctions。足墊角化是 PF 特徵。鬆弛水泡提示表皮內裂隙。', feedback_incorrect: '自體免疫皮膚病好發 mucocutaneous junctions 與足墊。', key_learning_points: ['PF 好發：鼻鏡、耳翼、眼瞼、足墊', '鬆弛水泡=表皮內裂隙（PF）', '緊張水泡=表皮下裂隙（bullous pemphigoid）', '足墊角化是 PF 特異表現'] },
      { step_number: 3, step_type: 'diagnostic_plan', title: '診斷計畫', prompt: '安排哪些檢查？選擇 3 項。', available_actions: ['皮膚細胞學（水泡/結痂底下印片）', '皮膚切片送病理', '細菌培養排除深層膿皮症', 'ANA 檢測', '皮膚刮搔', 'CBC 生化'], correct_actions: ['皮膚細胞學（水泡/結痂底下印片）', '皮膚切片送病理', '細菌培養排除深層膿皮症'], feedback_correct: '完美！細胞學見 acantholytic cells 被嗜中性球圍繞。切片是確診金標準。培養排除深層膿皮症。', feedback_incorrect: '核心：細胞學篩檢+組織病理確診。ANA 對天疱瘡價值有限。', key_learning_points: ['Acantholytic cells=PF 強烈暗示', '組織病理是天疱瘡確診金標準', '取樣選完整水泡或新鮮病灶邊緣', '深層膿皮症可模仿自體免疫皮膚病'] },
      { step_number: 4, step_type: 'result_interpretation', title: '結果判讀', prompt: '細胞學：大量 acantholytic cells。病理：表皮內棘層溶解裂隙 subcorneal pustule。培養：少量 S. pseudintermedius。確診？', available_actions: ['Pemphigus foliaceus 確診', 'Pemphigus vulgaris', '深層膿皮症', '藥物疹'], correct_actions: ['Pemphigus foliaceus 確診'], feedback_correct: '正確！Subcorneal acantholysis+典型分佈+口腔未受累=PF。', feedback_incorrect: 'PF：subcorneal acantholysis。PV：suprabasilar acantholysis。', key_learning_points: ['PF：subcorneal/intragranular acantholysis', 'PV：suprabasilar acantholysis', 'PF 不侵犯口腔黏膜', 'PF 是犬最常見自體免疫皮膚病'] },
      { step_number: 5, step_type: 'treatment_plan', title: '治療計畫', prompt: '治療方案？', available_actions: ['免疫抑制劑量 prednisolone 2-4 mg/kg/day BID+azathioprine 或 mycophenolate', '低劑量 prednisolone', '僅外用類固醇', 'Oclacitinib 單獨使用'], correct_actions: ['免疫抑制劑量 prednisolone 2-4 mg/kg/day BID+azathioprine 或 mycophenolate'], feedback_correct: '正確！PF 需免疫抑制劑量糖皮質激素誘導緩解。併用 steroid-sparing agent。通常 2-4 週見效後漸減。', feedback_incorrect: '需足夠免疫抑制劑量。低劑量無法控制 PF。', key_learning_points: ['PF：高劑量 prednisolone 誘導+steroid-sparing 維持', 'Azathioprine 需監測肝功能與骨髓', 'Mycophenolate 是另一選項', 'PF 通常需終身治療'] },
    ],
    expert_pathway: { reasoning: '秋田犬+鼻鏡/耳翼/足墊水泡結痂+口腔未受累+acantholytic cells+subcorneal acantholysis=PF。', key_decisions: ['辨識 mucocutaneous junction 分佈', '細胞學快速篩檢', '組織病理確診', '排除深層膿皮症', '適當免疫抑制方案'], common_pitfalls: ['誤診為膿皮症', '未取切片即免疫抑制', '劑量不足', '未用 steroid-sparing agent', '未監測副作用'] },
    related_nodes_for_review: ['DERM-L3-010', 'DERM-L2-003', 'DERM-L4-003', 'DERM-L5-003'],
    tags: ['pemphigus', 'autoimmune', 'Akita', 'vesiculobullous', 'biopsy', 'case_challenge'],
  },

  // --- CASE-DERM-007 ---
  {
    id: 'CASE-DERM-007', title: '排除飲食試驗的設計與判讀', specialty: 'DERM', cross_specialties: ['IM'], required_nodes: ['DERM-L3-002', 'DERM-L3-001', 'DERM-L4-001', 'DERM-L5-001'], difficulty: 3, species: '犬',
    scenario: { signalment: '2 歲已絕育雄性拉布拉多，體重 30 kg', chief_complaint: '全年性搔癢 PVAS 6/10，腋下/腹股溝/指間為主，伴反覆外耳炎', brief_history: '1 歲起全年搔癢。Fluralaner 每 3 個月。刮搔陰性。感染已控制。飲食史：雞肉、牛肉、羊肉口味犬糧，豬耳零食、起司。飼主要求排除飲食試驗。' },
    steps: [
      { step_number: 1, step_type: 'history_collection', title: '飲食史採集', prompt: '設計排除飲食前需確認？選擇 3 項。', available_actions: ['列出所有曾接觸蛋白質（含零食、保健品、潔牙骨）', '確認是否有餐桌食物或偷餵', '詢問飼料完整成分表', '詢問品牌', '詢問餵食量', '詢問食物偏好'], correct_actions: ['列出所有曾接觸蛋白質（含零食、保健品、潔牙骨）', '確認是否有餐桌食物或偷餵', '詢問飼料完整成分表'], feedback_correct: '正確！完整蛋白質暴露史是排除飲食設計基礎。餐桌食物偷餵是失敗常見原因。成分表可能揭露隱藏蛋白質。', feedback_incorrect: '設計核心是蛋白質暴露史。零食保健品的蛋白成分常被忽略。', key_learning_points: ['排除飲食需完整蛋白質暴露史', '許多犬糧含標示外蛋白（交叉汙染）', '零食保健品潔牙骨都可能含動物蛋白', '失敗最常見原因：未嚴格執行'] },
      { step_number: 2, step_type: 'diagnostic_plan', title: '排除飲食設計', prompt: '飲食史：曾接觸雞牛羊豬乳製品。飼料含雞肉粉+玉米+大豆。如何設計？', available_actions: ['水解蛋白飲食嚴格 8 週', '新蛋白飲食：鹿肉+地瓜', '市售低過敏犬糧', '減少雞肉比例', '生食飲食'], correct_actions: ['水解蛋白飲食嚴格 8 週'], feedback_correct: '正確！此犬接觸多種蛋白，水解蛋白飲食最可靠——分子量 < 10 kDa。嚴格 8 週。', feedback_incorrect: '市售低過敏犬糧不等於排除飲食。此犬接觸太多蛋白，水解蛋白最可靠。', key_learning_points: ['水解蛋白飲食：蛋白 < 10 kDa，最可靠', '新蛋白飲食需從未接觸的蛋白', '市售低過敏不等於排除飲食', '需嚴格 8 週'] },
      { step_number: 3, step_type: 'treatment_plan', title: '飼主衛教', prompt: '執行要點？選擇 3 項。', available_actions: ['除指定飲食外不可給任何零食餐桌食物保健品', '家中所有成員含小孩必須配合', '犬不可接觸其他動物食物', '可偶爾換口味', '可給蔬果零食', '可同時用止癢藥'], correct_actions: ['除指定飲食外不可給任何零食餐桌食物保健品', '家中所有成員含小孩必須配合', '犬不可接觸其他動物食物'], feedback_correct: '正確！嚴格性是成敗關鍵。任何額外蛋白質可能使 8 週試驗無效。', feedback_incorrect: '排除飲食是 all-or-nothing 試驗。', key_learning_points: ['排除飲食是 all-or-nothing', '所有人配合是關鍵', '多寵物家庭需分開餵食', '小孩偷餵是失敗頭號原因'] },
      { step_number: 4, step_type: 'result_interpretation', title: '結果判讀', prompt: '8 週後 PVAS 6 降至 2/10，外耳炎緩解。接下來？', available_actions: ['飲食挑戰：恢復原飲食觀察 14 天', '直接確診 AFR 終身水解蛋白', '延長排除飲食', '逐一添加單一蛋白鑑定過敏蛋白'], correct_actions: ['飲食挑戰：恢復原飲食觀察 14 天'], feedback_correct: '正確！飲食挑戰是 AFR 確診金標準。恢復原飲食後惡化=AFR 確診。', feedback_incorrect: '不做飲食挑戰就假設 AFR=可能誤診。', key_learning_points: ['飲食挑戰是 AFR 確診金標準', '惡化通常 1-14 天', 'Sequential provocation 可鑑定特定蛋白', '不做挑戰可能導致不必要限制'] },
      { step_number: 5, step_type: 'case_summary', title: '病例總結', prompt: '飲食挑戰 3 天後 PVAS 升至 7。確診 AFR。Sequential provocation：雞肉陽性，牛肉陰性，羊肉陰性。結論？', available_actions: ['對雞肉過敏，可用不含雞肉的商業犬糧', '必須終身水解蛋白', '對所有肉類過敏', '結果不確定'], correct_actions: ['對雞肉過敏，可用不含雞肉的商業犬糧'], feedback_correct: '正確！鑑定雞肉為特定過敏蛋白。可用不含雞肉犬糧，不需終身水解蛋白飲食。注意隱性雞肉成分。', feedback_incorrect: '鑑定特定蛋白後僅需迴避該蛋白。', key_learning_points: ['Sequential provocation 鑑定特定過敏蛋白', '鑑定後僅迴避特定蛋白', '雞肉是犬 AFR 最常見過敏蛋白之一', '注意隱性雞肉成分', '飼主依從性是長期管理關鍵'] },
    ],
    expert_pathway: { reasoning: '拉布拉多+全年搔癢+CAD 分佈+跳蚤已排除 → 排除飲食改善 → 飲食挑戰惡化=AFR → sequential provocation=雞肉過敏。', key_decisions: ['完整蛋白質暴露史', '選水解蛋白飲食', '嚴格 8 週', '飲食挑戰確診', 'Sequential provocation'], common_pitfalls: ['飲食史不完整', '用低過敏飼料', '執行不嚴格', '未做飲食挑戰', '未嘗試 sequential provocation'] },
    related_nodes_for_review: ['DERM-L3-002', 'DERM-L3-001', 'DERM-L4-001', 'DERM-L5-001'],
    tags: ['AFR', 'elimination_diet', 'food_allergy', 'Labrador', 'provocation', 'case_challenge'],
  },

];
