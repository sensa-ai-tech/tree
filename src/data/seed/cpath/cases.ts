import type { CaseChallenge } from '@/types/case';

export const CPATH_CASES: CaseChallenge[] = [
  {
    id: 'CASE-CPATH-001',
    title: '年輕混種犬的急性貧血與黃疸',
    specialty: 'CPATH',
    cross_specialties: ['IM', 'ECC'],
    required_nodes: ['CPATH-L4-001', 'CPATH-L4-002', 'CPATH-L4-004', 'CPATH-L4-008'],
    difficulty: 3,
    species: '犬',
    scenario: {
      signalment: '3 歲已絕育雌性混種犬，體重 12 kg',
      chief_complaint: '食慾下降兩天，今日出現黃疸與虛弱',
      brief_history: '兩天前開始食慾減退，活力下降。今晨飼主發現耳廓與牙齦偏黃，且明顯虛弱站立不穩。無外傷史、未接觸毒物。疫苗與驅蟲定期施打。無近期用藥史。',
    },
    steps: [
      {
        step_number: 1,
        step_type: 'history_collection',
        title: '病史採集',
        prompt: '面對急性貧血與黃疸的犬，你需要進一步詢問哪些問題？請選擇最重要的 3 項。',
        available_actions: [
          '詢問尿液顏色是否異常（血紅素尿/膽紅素尿）',
          '詢問是否有蜱蟲叮咬史或壁蝨暴露',
          '詢問近期是否有接種疫苗',
          '詢問飲食品牌與飼料更換史',
          '詢問是否有嘔吐或腹瀉',
          '詢問是否有近期手術或出血事件',
        ],
        correct_actions: [
          '詢問尿液顏色是否異常（血紅素尿/膽紅素尿）',
          '詢問是否有蜱蟲叮咬史或壁蝨暴露',
          '詢問是否有近期手術或出血事件',
        ],
        feedback_correct: '很好！尿液顏色可區分血管內 vs 血管外溶血。壁蝨暴露史提示蜱蟲傳播疾病（如 Babesia）。近期出血/手術史可幫助排除失血性貧血。',
        feedback_incorrect: '急性貧血合併黃疸時，最重要的是區分溶血 vs 失血 vs 肝臟問題。尿色變化、蜱蟲暴露史與出血事件是最關鍵的線索。',
        key_learning_points: [
          '黃疸的鑑別：溶血前性（前肝性）、肝性、後肝性（阻塞性）',
          '血紅素尿（紅棕色透明尿）= 血管內溶血的特徵',
          '台灣蜱蟲傳播疾病（Babesia、Ehrlichia）是急性溶血重要鑑別',
        ],
      },
      {
        step_number: 2,
        step_type: 'physical_examination',
        title: '理學檢查',
        prompt: '病史補充：飼主報告尿液呈深紅褐色。戶外活動頻繁但定期使用壁蝨預防藥。無近期出血事件。請選擇最重要的理學檢查發現。',
        available_actions: [
          '可視黏膜蒼白偏黃，CRT 2.5 秒',
          '心率 160 bpm，股動脈脈搏品質弱',
          '腹部觸診輕度脾腫大',
          '體溫 39.8°C（輕微發燒）',
          '淋巴結無腫大',
          '呼吸速率 28 次/分',
        ],
        correct_actions: [
          '可視黏膜蒼白偏黃，CRT 2.5 秒',
          '心率 160 bpm，股動脈脈搏品質弱',
          '腹部觸診輕度脾腫大',
        ],
        feedback_correct: '正確！蒼白黃疸黏膜 + CRT 延長提示貧血合併溶血。竇性心搏過速與脈搏品質弱是貧血代償反應。脾腫大在溶血性疾病中常見（紅血球破壞與清除的主要場所）。',
        feedback_incorrect: '急性貧血的關鍵理學發現包括黏膜蒼白、CRT 延長、代償性心搏過速、脈搏品質變化。脾腫大在溶血性疾病中特別有意義，是紅血球破壞的主要場所。',
        key_learning_points: [
          '貧血的理學三徵：黏膜蒼白、CRT 延長、代償性心搏過速',
          '黃疸合併蒼白 = 溶血性貧血的強烈提示',
          '脾腫大常見於溶血性疾病、蜱蟲傳播感染、IMHA',
        ],
      },
      {
        step_number: 3,
        step_type: 'diagnostic_plan',
        title: '實驗室檢查計畫',
        prompt: '你會安排哪些檢查？選擇最適當的 3 項第一線檢查。',
        available_actions: [
          'CBC 含 reticulocyte count + 血液抹片',
          '血清生化（含肝指數與膽紅素）',
          '凝血功能（PT/aPTT）',
          'Coombs test（直接抗球蛋白試驗）',
          '腹部超音波',
          '尿液分析',
        ],
        correct_actions: [
          'CBC 含 reticulocyte count + 血液抹片',
          '血清生化（含肝指數與膽紅素）',
          '凝血功能（PT/aPTT）',
        ],
        feedback_correct: '完美！CBC + reticulocyte 確認貧血程度與再生性。血液抹片可找球形紅血球（spherocytes，IMHA 特徵）或血液寄生蟲。生化評估肝功能與膽紅素分類。凝血功能排除 DIC（IMHA 常見併發症）。',
        feedback_incorrect: 'CBC 是急性貧血的第一線必要檢查，搭配 reticulocyte count 分類再生性 vs 非再生性。生化評估肝功能與黃疸分類。凝血功能在溶血性疾病中重要，因 DIC 是常見併發症。Coombs test 是第二線確認 IMHA 的檢查。',
        key_learning_points: [
          'CBC + reticulocyte count + 血液抹片是急性貧血評估的黃金三角',
          '膽紅素分類（總/直接/間接）幫助區分溶血前性 vs 肝性黃疸',
          'PT/aPTT 在溶血性貧血中排除 DIC 併發症',
        ],
      },
      {
        step_number: 4,
        step_type: 'result_interpretation',
        title: '檢查結果判讀',
        prompt: '檢查結果如下：\n- CBC：PCV 15%（嚴重貧血）、WBC 22,000/uL（嗜中性球增多）、PLT 95,000/uL（輕度減少）\n- Reticulocyte count: 180,000/uL（明顯再生性）\n- 血液抹片：大量球形紅血球（spherocytes）、自凝現象（autoagglutination）\n- 生化：T-Bil 8.5 mg/dL（升高）、ALT 正常、ALP 輕度升高\n- PT/aPTT：輕度延長\n\n這些結果指向什麼診斷？',
        available_actions: [
          '免疫介導性溶血性貧血（IMHA），需警惕早期 DIC',
          '焦蟲症（Babesiosis）引起的溶血',
          '洋蔥中毒導致的氧化性溶血',
          '肝臟疾病導致的黃疸',
        ],
        correct_actions: [
          '免疫介導性溶血性貧血（IMHA），需警惕早期 DIC',
        ],
        feedback_correct: '正確！球形紅血球（spherocytes）+ 自凝現象（autoagglutination）是 IMHA 的經典細胞學特徵。再生性貧血 + 溶血前性高膽紅素血症（ALT 正常排除肝性）。血小板輕度減少 + PT/aPTT 輕度延長提示可能有早期 DIC，需密切監測。',
        feedback_incorrect: '球形紅血球與自凝現象是 IMHA 的病理性特徵——自凝代表紅血球表面有大量抗體使紅血球聚集。焦蟲感染需在抹片上見到梨形蟲體。洋蔥中毒會產生 Heinz bodies。ALT 正常排除肝性黃疸。',
        key_learning_points: [
          '球形紅血球（spherocytes）：紅血球被部分吞噬後失去雙凹面變成球形，是 IMHA 特徵',
          '自凝現象：saline dilution test 仍凝集 = 真正自凝（非 rouleaux formation）',
          '血小板減少 + 凝血時間延長 = 警惕 DIC（IMHA 重要併發症）',
          'IMHA 膽紅素以間接型（unconjugated）升高為主',
        ],
      },
      {
        step_number: 5,
        step_type: 'treatment_plan',
        title: '治療決策',
        prompt: 'PCV 15% 的 IMHA 患犬，你的治療方案為何？選擇最適當的 2 項。',
        available_actions: [
          '免疫抑制劑量 prednisolone（2 mg/kg PO BID）',
          '輸血前進行血型鑑定與交叉試驗',
          '立即輸入 A 型全血無需交叉試驗',
          '低劑量 aspirin（0.5 mg/kg PO SID）抗血栓',
          '抗生素治療（doxycycline）',
        ],
        correct_actions: [
          '免疫抑制劑量 prednisolone（2 mg/kg PO BID）',
          '輸血前進行血型鑑定與交叉試驗',
        ],
        feedback_correct: '正確！免疫抑制劑量的類固醇是 IMHA 的第一線治療。PCV 15% 可能需要輸血支持，但 IMHA 患犬輸血前必須做血型鑑定與交叉試驗（因已有免疫異常，輸血反應風險更高）。臨床病理在此扮演治療前關鍵角色。',
        feedback_incorrect: '免疫抑制是 IMHA 治療基石。PCV 15% 屬嚴重貧血，可能需輸血。但 IMHA 犬的免疫系統已經異常活化，輸血反應風險高，必須先做血型鑑定與交叉試驗。這正是臨床病理在急診中的核心價值。',
        key_learning_points: [
          'IMHA 第一線治療：免疫抑制劑量 prednisolone 2 mg/kg BID',
          '所有輸血前都應做血型鑑定，IMHA 更需交叉試驗',
          '血型交叉試驗結果直接影響輸血安全性決策',
          'DIC 風險評估需要持續監測凝血功能',
        ],
      },
      {
        step_number: 6,
        step_type: 'case_summary',
        title: '病例總結與追蹤',
        prompt: '請選擇最適當的實驗室追蹤計畫。',
        available_actions: [
          '每 6-12 小時追蹤 PCV、每日追蹤 reticulocyte count 與凝血功能，3 天後複查 CBC + 生化',
          '出院後一週再追蹤 CBC 即可',
          '僅追蹤 PCV 至正常後停止監測',
          '每日追蹤肝指數為主',
        ],
        correct_actions: [
          '每 6-12 小時追蹤 PCV、每日追蹤 reticulocyte count 與凝血功能，3 天後複查 CBC + 生化',
        ],
        feedback_correct: '正確！IMHA 是需要密集實驗室監測的疾病。PCV 趨勢（6-12 小時）評估溶血速率與治療反應。Reticulocyte count 確認骨髓再生反應。凝血功能監測 DIC 進展。穩定後逐步延長監測間隔。',
        feedback_incorrect: 'IMHA 的死亡率約 30-50%，需要積極的實驗室監測。PCV 是評估溶血速率最直接的指標，需頻繁追蹤。凝血功能監測 DIC 風險至關重要。僅追蹤單一指標或間隔太長可能錯過病情惡化。',
        key_learning_points: [
          'IMHA 急性期需頻繁 PCV 監測（6-12 小時）',
          'Reticulocyte count 評估骨髓再生能力是預後指標之一',
          'PT/aPTT + 血小板 + D-dimer 持續監測 DIC 風險',
          '臨床病理在 IMHA 全程管理中扮演不可或缺的角色',
        ],
      },
    ],
    expert_pathway: {
      reasoning: '急性貧血 + 黃疸 + 血紅素尿 → 溶血性貧血。CBC 確認嚴重再生性貧血，血液抹片見 spherocytes + autoagglutination → IMHA。PLT 減少 + PT/aPTT 延長警惕 DIC。系統性實驗室評估後啟動免疫抑制治療並安排密集監測。',
      key_decisions: [
        '以 CBC + 血液抹片作為第一線快速評估工具',
        '利用膽紅素分類區分溶血前性 vs 肝性黃疸',
        '凝血功能評估排除 / 早期偵測 DIC',
        '輸血前堅持完成血型鑑定與交叉試驗',
      ],
      common_pitfalls: [
        '未製作血液抹片，僅依賴自動分析儀數據而錯失 spherocytes',
        '將自凝與 rouleaux formation 混淆（需做 saline dilution test）',
        '忽略凝血功能監測，未及時發現 DIC',
        'IMHA 犬輸血未做交叉試驗導致輸血反應',
      ],
    },
    related_nodes_for_review: [
      'CPATH-L4-001',
      'CPATH-L4-002',
      'CPATH-L4-004',
      'CPATH-L4-008',
      'CPATH-L1-001',
    ],
    tags: ['IMHA', '溶血', '貧血', '黃疸', 'CBC', '血液抹片', '交叉試驗', 'case_challenge'],
  },
  // --- CASE-CPATH-002: 貧血犬的 CBC 判讀與鑑別 ---
  {
    id: 'CASE-CPATH-002', title: '貧血犬的全血球計數系統性判讀與鑑別', specialty: 'CPATH', cross_specialties: ['IM', 'ECC'], required_nodes: ['CPATH-L4-001', 'CPATH-L1-001', 'CPATH-L4-004'], difficulty: 3, species: '犬',
    scenario: { signalment: '6 歲已絕育雌性拉布拉多犬，體重 28 kg', chief_complaint: '漸進性虛弱、運動不耐 2 週', brief_history: '近兩週活力漸差，上樓梯會喘。食慾略減。無嘔吐腹瀉。無外傷或出血跡象。無近期用藥。理學檢查：黏膜蒼白、CRT 2.5 秒、HR 130 bpm。' },
    steps: [
      { step_number: 1, step_type: 'diagnostic_plan', title: 'CBC 系統判讀', prompt: `CBC 結果如下。請依序判讀：
- RBC 3.2 (5.5-8.5)、HGB 7.2 (12-18)、HCT 21% (37-55)
- MCV 72 (60-77)、MCHC 34 (32-36)
- Reticulocyte 15,000/uL (< 60,000 正常)
- WBC 9,500 (6-17)、Seg 7,200、Lymph 1,500
- PLT 280,000 (175-500)

第一步：貧血分類？`, available_actions: ['中度正球正色素性非再生性貧血', '中度再生性貧血', '輕度貧血', '大球性貧血'], correct_actions: ['中度正球正色素性非再生性貧血'], feedback_correct: '正確！HCT 21% = 中度貧血。MCV 正常 = 正球性。MCHC 正常 = 正色素性。Reticulocyte 15,000 < 60,000 = 非再生性。系統判讀：先分嚴重度 → 再分形態 → 最後分再生性。', feedback_incorrect: '系統判讀順序：(1) 嚴重度（HCT 21% = 中度）、(2) 形態（MCV 正常 = 正球性、MCHC 正常 = 正色素性）、(3) 再生性（Reticulocyte < 60,000 = 非再生性）。', key_learning_points: ['貧血嚴重度：輕度 30-37%、中度 20-29%、重度 13-19%、極重度 < 13%', 'MCV 分類：小球、正球、大球', 'MCHC 分類：低色素、正色素、高色素（spherocytes）', '犬再生性閾值：Reticulocyte > 60,000/uL'] },
      { step_number: 2, step_type: 'differential_diagnosis', title: '鑑別診斷', prompt: '正球正色素非再生性貧血的鑑別？選擇最適當的 3 項。', available_actions: ['慢性腎病（EPO 不足）', '慢性發炎性疾病（ACD / AI）', '骨髓疾病（aplasia、myelophthisis、白血病）', '急性出血（< 3 天尚未再生）', '缺鐵性貧血', 'IMHA'], correct_actions: ['慢性腎病（EPO 不足）', '慢性發炎性疾病（ACD / AI）', '骨髓疾病（aplasia、myelophthisis、白血病）'], feedback_correct: '正確！非再生性貧血的三大類鑑別：(1) EPO 不足（CKD 最常見）、(2) 慢性發炎（ACD/AI —— 鐵被螯合在巨噬細胞中）、(3) 骨髓問題。急性出血 < 3 天也可能非再生（骨髓尚未反應），但病程 2 週應已再生。', feedback_incorrect: '非再生性貧血 = 骨髓產出不足。原因：EPO 不足（CKD）、慢性炎症（鐵利用障礙）、骨髓疾病。急性出血 < 3 天骨髓未反應也暫時非再生，但 2 週病程應已顯示再生。', key_learning_points: ['非再生性貧血 = 骨髓產出不足', 'CKD 是非再生性貧血最常見原因', 'ACD/AI：Hepcidin 升高 → 鐵被困在巨噬細胞', '急性出血 3-5 天後應出現再生反應'] },
      { step_number: 3, step_type: 'diagnostic_plan', title: '進一步檢查', prompt: '進一步鑑別方向？選擇 2 項。', available_actions: ['生化（含 BUN/Cr）+ UA 評估腎功能', '血液抹片人工複查', '骨髓抹片', '鐵質指標（Iron/TIBC/Ferritin）', 'Coombs test', 'CT 全身'], correct_actions: ['生化（含 BUN/Cr）+ UA 評估腎功能', '血液抹片人工複查'], feedback_correct: '正確！生化 + UA 首先排除 CKD（最常見原因）。血液抹片人工複查是 CBC 的延伸：評估紅血球形態異常、白血球形態（left shift/toxicity）、有無異常細胞（blast cells）。這兩項是非再生性貧血的第一線鑑別工具。', feedback_incorrect: '第一步：生化排除 CKD + 血液抹片評估形態。骨髓抹片是二線檢查（生化與抹片無法解釋時）。', key_learning_points: ['血液抹片永遠是 CBC 判讀的核心延伸', '抹片可見：紅血球形態、白血球毒性變化、blast cells', 'CKD 是非再生性貧血第一個要排除的', '骨髓抹片適應症：外周血無法解釋的血球異常'] },
      { step_number: 4, step_type: 'result_interpretation', title: '結果', prompt: '生化：BUN 68、Cr 4.2、SDMA 32、Phos 7.5。UA：USG 1.015、UPC 0.8。血液抹片：正球正色素、少量 echinocytes。如何整合？', available_actions: ['CKD IRIS Stage 3 導致的非再生性貧血（EPO 不足）', '前腎性氮血症', '急性腎損傷', '骨髓抑制'], correct_actions: ['CKD IRIS Stage 3 導致的非再生性貧血（EPO 不足）'], feedback_correct: '正確！Cr 4.2 + USG 1.015（不適當稀釋）= 腎性氮血症 = CKD。IRIS Stage 3（Cr 2.9-5.0）。UPC 0.8 = 蛋白尿。非再生性貧血 = EPO 不足。Echinocytes 可見於腎衰竭。臨床病理完整整合：CBC + 生化 + UA = 診斷。', feedback_incorrect: '腎性氮血症（Cr 升高 + 不適當 USG）= CKD。IRIS Stage 3。非再生性貧血在 CKD 的機轉：腎臟 EPO 分泌不足。', key_learning_points: ['腎性氮血症：Cr 升高 + USG < 1.030 (犬)', 'CKD 貧血發生在 IRIS Stage 3-4', '機轉：腎間質纖維化 → EPO 分泌不足', 'Echinocytes：尿毒素影響紅血球膜'] },
      { step_number: 5, step_type: 'case_summary', title: '臨床病理報告撰寫', prompt: '如何整合撰寫臨床病理報告？', available_actions: ['依序報告：CBC 摘要 → 生化摘要 → UA 摘要 → 整合解讀 → 建議鑑別與追蹤', '只報告異常值', '僅列出數字不需解讀', '每個數值獨立報告'], correct_actions: ['依序報告：CBC 摘要 → 生化摘要 → UA 摘要 → 整合解讀 → 建議鑑別與追蹤'], feedback_correct: '正確！臨床病理報告應該是：(1) 各系統摘要（異常 + 臨床意義）、(2) 整合解讀（所有異常指向的共同診斷）、(3) 建議追蹤檢查。這是從「數字」到「臨床決策」的橋樑。', feedback_incorrect: '完整的臨床病理報告需要整合而非列數字。系統性摘要 + 整合解讀 + 建議追蹤是標準格式。', key_learning_points: ['臨床病理報告 = 數字到臨床決策的橋樑', '整合解讀比個別數值更重要', '報告應包含鑑別診斷與建議追蹤', '臨床病理師的角色：整合各項檢驗結果'] },
    ],
    expert_pathway: { reasoning: '漸進性虛弱 + 蒼白 → CBC 確認中度非再生性貧血 → 鑑別三大類 → 生化 + UA 確認 CKD IRIS Stage 3 → EPO 不足性貧血 → 整合報告。', key_decisions: ['系統性 CBC 判讀順序', '非再生性貧血鑑別思維', '血液抹片是 CBC 延伸', 'CKD 三合一確診（Cr + USG + UPC）'], common_pitfalls: ['未分再生性就跳到治療', '忽略血液抹片複查', '未整合 CBC + 生化 + UA', '報告僅列數字不解讀'] },
    related_nodes_for_review: ['CPATH-L4-001', 'CPATH-L1-001', 'CPATH-L4-009', 'CPATH-L4-002'],
    tags: ['CBC', '貧血', '非再生性', 'CKD', '系統判讀', 'case_challenge'],
  },
  // --- CASE-CPATH-003: 肝臟疾病犬的生化全套判讀 ---
  {
    id: 'CASE-CPATH-003', title: '約克夏犬肝臟疾病的生化全套判讀', specialty: 'CPATH', cross_specialties: ['IM', 'SURG'], required_nodes: ['CPATH-L4-002', 'CPATH-L1-002', 'CPATH-L4-009'], difficulty: 3, species: '犬',
    scenario: { signalment: '3 歲未絕育雄性約克夏犬，體重 2.1 kg（偏小）', chief_complaint: '間歇性嘔吐、生長遲緩、偶爾行為異常', brief_history: '自幼體型小於同胎。間歇性嘔吐（1-2 次/週）。偶爾出現「呆滯」、繞圈、壓頭等異常行為（尤其餐後）。食慾尚可但挑食。' },
    steps: [
      { step_number: 1, step_type: 'diagnostic_plan', title: '初步檢查', prompt: '生長遲緩 + 間歇性 GI 症狀 + 餐後行為異常的約克夏幼犬，選擇 3 項。', available_actions: ['全套生化（含肝指數、白蛋白、BUN、葡萄糖、膽固醇）', '空腹 + 餐後膽汁酸（Bile Acids）', 'CBC', '血氨（Ammonia）', '腹部超音波', '腦部 MRI'], correct_actions: ['全套生化（含肝指數、白蛋白、BUN、葡萄糖、膽固醇）', '空腹 + 餐後膽汁酸（Bile Acids）', 'CBC'], feedback_correct: '正確！生化全套評估肝臟合成功能（Alb、BUN、Glucose、Cholesterol 均由肝臟合成）與肝損傷（ALT、ALP）。膽汁酸是肝臟功能最敏感的指標。CBC 評估微小紅血球（portosystemic shunt 特徵）。', feedback_incorrect: '肝臟疾病評估：生化全套（合成 + 損傷指標）、膽汁酸（功能評估 gold standard）、CBC（微小紅血球）。', key_learning_points: ['肝臟生化分兩大類：損傷指標（ALT/ALP）vs 功能指標（Alb/BUN/Glucose/Cholesterol）', '膽汁酸是肝功能最敏感的血清學指標', '約克夏犬是先天性肝門脈分流（PSS）好發品種', '餐後行為異常提示肝性腦病'] },
      { step_number: 2, step_type: 'result_interpretation', title: '生化判讀', prompt: `結果：
- ALT 45（正常）、ALP 80（輕度升高）
- Albumin 1.8（正常 2.5-3.6）、BUN 6（正常 10-25）、Glucose 58（偏低）、Cholesterol 95（正常 135-270）
- 空腹膽汁酸 28（正常 < 15）、餐後膽汁酸 185（正常 < 25）
- CBC：MCV 58 fL（正常 60-77 = 微小紅血球）

如何系統判讀？`, available_actions: ['肝功能不全模式：合成指標全低 + 膽汁酸顯著升高 + 微小紅血球 = 高度懷疑 PSS', '肝細胞損傷（ALT 升高為主）', '膽道阻塞（ALP + GGT 升高為主）', '正常肝功能'], correct_actions: ['肝功能不全模式：合成指標全低 + 膽汁酸顯著升高 + 微小紅血球 = 高度懷疑 PSS'], feedback_correct: '正確！這是經典的肝功能不全模式：(1) Alb 低（合成不足）、(2) BUN 低（尿素循環不全）、(3) Glucose 低（糖質新生不足）、(4) Cholesterol 低（合成不足）。注意 ALT 正常——因為 PSS 的肝臟萎縮但不發炎。膽汁酸劇升確認分流。微小紅血球是 PSS 特徵。', feedback_incorrect: '關鍵：ALT 正常 ≠ 肝臟正常。PSS 的肝臟是「萎縮但不發炎」。四項合成指標全低 + 膽汁酸劇升 + 微小紅血球 = PSS 經典組合。', key_learning_points: ['ALT 正常不排除肝臟疾病（PSS 肝不發炎，只萎縮）', '肝功能不全四低：低 Alb、低 BUN、低 Glucose、低 Cholesterol', '餐後膽汁酸 > 100 = 嚴重肝功能不全', '微小紅血球（MCV < 60）是 PSS 的血液學特徵'] },
      { step_number: 3, step_type: 'diagnostic_plan', title: '確認 PSS', prompt: '如何確認 PSS？', available_actions: ['腹部超音波尋找異常血管 + 測量肝臟大小', 'CT 血管攝影 (CTA)', '肝臟切片', '血管攝影', 'MRI 腹部', '直接手術探查'], correct_actions: ['腹部超音波尋找異常血管 + 測量肝臟大小'], feedback_correct: '正確！超音波是第一線影像：尋找連接門脈與系統靜脈的異常血管、評估肝臟大小（PSS 通常肝臟偏小）、測量門脈血流。CTA 是進一步確認的 gold standard（精確定位分流位置）。', feedback_incorrect: '超音波是第一線：異常血管 + 小肝 + 門脈血流異常。CTA 是 gold standard 定位分流。', key_learning_points: ['超音波可見：異常分流血管、小肝、門脈血流減少', 'CTA 是 PSS 定位的 gold standard', 'PSS 分類：肝內 vs 肝外、先天 vs 後天', '約克夏多為肝外先天性 PSS'] },
      { step_number: 4, step_type: 'treatment_plan', title: '穩定治療', prompt: '確認肝外 PSS 後，手術前穩定治療？選擇 2 項。', available_actions: ['低蛋白飲食 + Lactulose + 口服抗生素（Metronidazole）控制肝性腦病', '糾正低血糖（頻繁少量餵食 + 必要時 Dextrose）', '高蛋白飲食快速補充白蛋白', '類固醇抗炎', 'UDCA 溶解膽結石', 'SAMe 保肝即可'], correct_actions: ['低蛋白飲食 + Lactulose + 口服抗生素（Metronidazole）控制肝性腦病', '糾正低血糖（頻繁少量餵食 + 必要時 Dextrose）'], feedback_correct: '正確！肝性腦病管理：低蛋白飲食（減少氨產生）、Lactulose（酸化腸腔促進氨排出）、Metronidazole（殺產氨菌）。低血糖需頻繁少量餵食。穩定後再評估手術（Ameroid constrictor 或 cellophane banding）。', feedback_incorrect: '肝性腦病三合一：低蛋白飲食 + Lactulose + Metronidazole。低血糖需頻繁餵食。穩定後手術。', key_learning_points: ['肝性腦病 = 氨 + 其他神經毒素經分流進入全身循環', 'Lactulose 機轉：酸化腸腔 → NH3 → NH4+ 不被吸收', 'PSS 手術：Ameroid constrictor 或 cellophane banding', '手術成功率肝外 PSS > 85%'] },
      { step_number: 5, step_type: 'case_summary', title: '臨床病理在 PSS 的角色', prompt: '臨床病理在 PSS 管理中的角色？', available_actions: ['貫穿診斷（膽汁酸 + 四低模式）、術前穩定監測（血氨/血糖）、術後追蹤（膽汁酸恢復）', '僅用於初步篩檢', '手術後不需追蹤', '只看 ALT 即可'], correct_actions: ['貫穿診斷（膽汁酸 + 四低模式）、術前穩定監測（血氨/血糖）、術後追蹤（膽汁酸恢復）'], feedback_correct: '正確！臨床病理在 PSS 全程扮演核心角色：(1) 診斷（生化模式 + 膽汁酸 + CBC）、(2) 穩定期監測（血氨、血糖）、(3) 術後追蹤（膽汁酸是否改善、Alb/BUN 是否恢復）。這是臨床病理「從診斷到管理」的完整範例。', feedback_incorrect: '臨床病理貫穿 PSS 全程：篩檢 → 確診 → 監測 → 追蹤。是臨床病理核心價值的典型展示。', key_learning_points: ['膽汁酸：PSS 診斷與追蹤的核心指標', '術後膽汁酸改善 = 分流成功閉合', 'Albumin/BUN 恢復 = 肝功能改善', '微小紅血球術後可恢復正常'] },
    ],
    expert_pathway: { reasoning: '約克夏幼犬 + 生長遲緩 + 餐後行為異常 → 肝性腦病 → 生化四低模式 + 膽汁酸劇升 + 微小紅血球 → PSS → 超音波確認 → 穩定後手術。', key_decisions: ['辨識肝功能不全模式（非肝損傷模式）', 'ALT 正常不排除肝臟疾病', '膽汁酸是功能指標 gold standard', '微小紅血球是 PSS 的重要線索'], common_pitfalls: ['ALT 正常就排除肝臟疾病', '未測膽汁酸', '忽略低 BUN/低 Cholesterol 的意義', '忽略 MCV 微小紅血球'] },
    related_nodes_for_review: ['CPATH-L4-002', 'CPATH-L1-002', 'CPATH-L4-001', 'CPATH-L4-009'],
    tags: ['生化', 'PSS', '肝功能', '膽汁酸', '約克夏', 'case_challenge'],
  },
  // --- CASE-CPATH-004: 出血傾向犬的凝血功能評估 ---
  {
    id: 'CASE-CPATH-004', title: '出血傾向犬的凝血功能完整評估', specialty: 'CPATH', cross_specialties: ['ECC', 'IM'], required_nodes: ['CPATH-L4-004', 'CPATH-L1-001', 'CPATH-L4-001'], difficulty: 4, species: '犬',
    scenario: { signalment: '3 歲已絕育雄性混種犬，體重 22 kg', chief_complaint: '多處自發性瘀斑與點狀出血 3 天', brief_history: '三天前發現腹部與腹股溝出現多處紫色斑塊（瘀斑）與細小紅點（點狀出血）。昨日牙齦滲血。無外傷史。無食入毒鼠藥可能。近期無用藥。' },
    steps: [
      { step_number: 1, step_type: 'physical_examination', title: '出血模式辨識', prompt: '觀察到的出血模式指向什麼？', available_actions: ['初級止血缺陷（血小板或血管壁問題）：點狀出血 + 瘀斑 + 黏膜滲血', '次級止血缺陷（凝血因子問題）：深層血腫 + 關節出血', '混合型出血', '正常瘀傷'], correct_actions: ['初級止血缺陷（血小板或血管壁問題）：點狀出血 + 瘀斑 + 黏膜滲血'], feedback_correct: '正確！出血模式區分是臨床病理的核心概念。初級止血（血小板 + 血管壁）：點狀出血（petechiae）、瘀斑（ecchymoses）、黏膜出血。次級止血（凝血因子）：深層血腫、關節出血（hemarthrosis）、體腔出血。', feedback_incorrect: '出血模式分類是關鍵：點狀出血/瘀斑/黏膜滲血 = 初級止血問題 = 血小板或血管壁。深層血腫/關節出血 = 凝血因子缺陷。', key_learning_points: ['初級止血：血小板 + 血管壁 → 點狀出血、瘀斑、黏膜出血', '次級止血：凝血因子 → 血腫、關節出血、體腔出血', '出血模式辨識是止血異常鑑別的第一步', '混合型（DIC）可同時有兩種模式'] },
      { step_number: 2, step_type: 'diagnostic_plan', title: '止血功能完整評估', prompt: '選擇 3 項。', available_actions: ['CBC + 血小板計數 + 血液抹片（確認血小板數量與形態）', 'PT + aPTT（次級止血篩檢）', '頰黏膜出血時間（BMBT）（初級止血功能評估）', 'D-dimer + Fibrinogen', 'Von Willebrand Factor 抗原', '血小板功能分析 (PFA)'], correct_actions: ['CBC + 血小板計數 + 血液抹片（確認血小板數量與形態）', 'PT + aPTT（次級止血篩檢）', '頰黏膜出血時間（BMBT）（初級止血功能評估）'], feedback_correct: '正確！止血完整評估：(1) 血小板計數 + 抹片（數量 + 形態 + 排除假性血小板減少）、(2) PT/aPTT（外源/內源路徑篩檢）、(3) BMBT（初級止血的整體功能測試）。這三者涵蓋初級 + 次級止血。', feedback_incorrect: '止血評估三合一：血小板計數/抹片、PT/aPTT、BMBT。涵蓋初級與次級止血。D-dimer 和 Fibrinogen 是進階。', key_learning_points: ['血小板抹片估計：每個 100x 視野約 15-20,000/uL', '假性血小板減少：EDTA 抗凝劑導致血小板聚集', 'PT 篩檢外源路徑、aPTT 篩檢內源路徑', 'BMBT 測試初級止血整體功能'] },
      { step_number: 3, step_type: 'result_interpretation', title: '結果判讀', prompt: 'CBC：PLT 8,000/uL（嚴重減少）。抹片：確認嚴重血小板減少，偶見大型血小板。WBC 正常。HCT 32%（輕度貧血）。PT 正常、aPTT 正常。BMBT > 12 分鐘（延長）。如何解讀？', available_actions: ['嚴重血小板減少導致初級止血障礙，PT/aPTT 正常排除凝血因子缺陷', 'DIC（消耗性凝血病）', '凝血因子缺乏', '血管壁問題為主'], correct_actions: ['嚴重血小板減少導致初級止血障礙，PT/aPTT 正常排除凝血因子缺陷'], feedback_correct: '正確！PLT 8,000 = 嚴重血小板減少（< 30,000 有自發出血風險）。PT/aPTT 正常 = 次級止血完整。BMBT 延長確認初級止血功能障礙。大型血小板提示骨髓正在努力代償（再生性血小板減少）。DIC 通常 PT/aPTT 也會延長。', feedback_incorrect: 'PLT 8,000 + PT/aPTT 正常 = 單純血小板減少。BMBT 延長確認功能障礙。大型血小板 = 再生性。DIC 會有 PT/aPTT 異常。', key_learning_points: ['自發出血閾值：PLT < 30,000/uL', '大型血小板（MPV 升高）= 骨髓再生反應', 'PLT 低 + PT/aPTT 正常 = 單純初級止血問題', '鑑別：IMT > DIC > 骨髓抑制 > 消耗'] },
      { step_number: 4, step_type: 'differential_diagnosis', title: '血小板減少鑑別', prompt: '嚴重血小板減少 + 再生性（大型血小板），最可能的鑑別？', available_actions: ['免疫介導性血小板減少（IMT / ITP）', '蜱蟲傳播疾病（Ehrlichia / Anaplasma）', '骨髓抑制', '假性血小板減少', 'DIC'], correct_actions: ['免疫介導性血小板減少（IMT / ITP）'], feedback_correct: '正確！嚴重血小板減少（< 30,000）+ 大型再生血小板 + 其他血球正常 = IMT 最可能。蜱蟲傳播疾病也需排除（尤其台灣）。骨髓抑制通常多血球系都受影響。假性已由抹片排除。', feedback_incorrect: 'IMT 是犬最常見的嚴重血小板減少原因。單一血球系 + 再生性 + 嚴重減少 = 免疫破壞為主。台灣需排除蜱蟲傳播疾病。', key_learning_points: ['IMT 是犬嚴重血小板減少最常見原因', '蜱蟲傳播疾病是台灣重要鑑別', 'Evans syndrome：IMT + IMHA 併存', '骨髓抹片在血小板減少 > 5 天未恢復時考慮'] },
      { step_number: 5, step_type: 'case_summary', title: '凝血功能評估的臨床病理架構', prompt: '整合凝血功能評估的臨床病理思維架構。', available_actions: ['出血模式 → 初級 vs 次級 → PLT/PT/aPTT/BMBT 三合一 → 整合鑑別 → 指導治療', '只看 PT/aPTT 即可', '只看血小板即可', '每個出血病人都做全套凝血'], correct_actions: ['出血模式 → 初級 vs 次級 → PLT/PT/aPTT/BMBT 三合一 → 整合鑑別 → 指導治療'], feedback_correct: '正確！系統化止血評估：(1) 出血模式分類指導方向、(2) 三合一檢查涵蓋初級 + 次級、(3) 結果模式整合鑑別。IMT：PLT 低 + PT/aPTT 正常。抗凝血劑中毒：PT/aPTT 延長 + PLT 正常。DIC：PLT 低 + PT/aPTT 延長 + D-dimer 升高。', feedback_incorrect: '系統化方法：出血模式 → 檢查選擇 → 結果模式辨識 → 鑑別。不同凝血異常有特定的實驗室模式。', key_learning_points: ['IMT 模式：PLT 極低 + PT/aPTT 正常', '抗凝血劑中毒模式：PT 延長 > aPTT + PLT 正常', 'DIC 模式：PLT 低 + PT/aPTT 延長 + D-dimer 升高 + Fibrinogen 降低', 'vWD 模式：PLT 正常 + PT/aPTT 正常 + BMBT 延長'] },
    ],
    expert_pathway: { reasoning: '點狀出血 + 瘀斑 = 初級止血 → PLT 8,000 確認 → PT/aPTT 正常排除次級 → 大型血小板 = 再生性 → IMT 最可能 → 排除蜱蟲。', key_decisions: ['出血模式辨識', '三合一止血評估', '結果模式整合', '鑑別優先序'], common_pitfalls: ['不分出血模式直接檢查', '假性血小板減少未用抹片排除', '忽略台灣蜱蟲傳播疾病', 'PLT 低就診斷 DIC（需看 PT/aPTT）'] },
    related_nodes_for_review: ['CPATH-L4-004', 'CPATH-L1-001', 'CPATH-L4-001', 'CPATH-L4-008'],
    tags: ['凝血', '血小板減少', 'IMT', 'PT', 'aPTT', '出血', 'case_challenge'],
  },
  // --- CASE-CPATH-005: 淋巴結腫大犬的細胞學判讀 ---
  {
    id: 'CASE-CPATH-005', title: '全身淋巴結腫大犬的細胞學判讀', specialty: 'CPATH', cross_specialties: ['ONCO', 'IM'], required_nodes: ['CPATH-L4-011', 'CPATH-L4-003', 'CPATH-L4-001'], difficulty: 4, species: '犬',
    scenario: { signalment: '8 歲已絕育雄性黃金獵犬，體重 30 kg', chief_complaint: '飼主摸到頸部兩側腫塊 1 週', brief_history: '一週前幫犬洗澡時發現下頷淋巴結明顯腫大。檢查發現全身多處周邊淋巴結均腫大（submandibular、prescapular、popliteal）。活力食慾尚可。無發燒。無近期感染或疫苗。' },
    steps: [
      { step_number: 1, step_type: 'diagnostic_plan', title: '初步評估', prompt: '全身淋巴結腫大的犬，第一步最適當的檢查？', available_actions: ['細針抽吸細胞學（FNA cytology）', '切除性淋巴結切片', 'CBC + 生化', '胸腔 X 光', 'CT 全身', '4Dx 快篩'], correct_actions: ['細針抽吸細胞學（FNA cytology）'], feedback_correct: '正確！FNA 細胞學是淋巴結腫大的第一線診斷工具。微創、快速、經濟。可在 30 分鐘內區分反應性增生、淋巴瘤、轉移性腫瘤或感染。不需麻醉。', feedback_incorrect: 'FNA 是淋巴結腫大的第一線檢查。微創快速。可區分反應性、腫瘤（淋巴瘤 vs 轉移）、感染。切除性切片是二線。', key_learning_points: ['FNA 是淋巴結評估的 gold standard 第一線', '優點：微創、快速、經濟、不需麻醉', '可區分：反應性 vs 淋巴瘤 vs 轉移 vs 感染', '淋巴瘤細胞學診斷率 > 85%'] },
      { step_number: 2, step_type: 'result_interpretation', title: '細胞學判讀', prompt: 'FNA 細胞學結果：塗片富含細胞。> 90% 為大型淋巴球（大於 2 倍紅血球直徑），細胞核大、核仁明顯（1-3 個）、核質比高。小型淋巴球 < 5%。有絲分裂相多見。如何判讀？', available_actions: ['高度級別淋巴瘤（high-grade lymphoma）', '反應性淋巴結增生', '低度級別淋巴瘤', '轉移性癌（carcinoma）', '肉芽腫性淋巴結炎'], correct_actions: ['高度級別淋巴瘤（high-grade lymphoma）'], feedback_correct: '正確！正常淋巴結：> 75% 小型淋巴球 + < 5% 大型。淋巴瘤：單一群大型淋巴球 > 50%、核仁明顯、有絲分裂多。反應性增生：各大小混合（mixed population）。此例 > 90% 大型 + 有絲分裂多 = high-grade lymphoma。', feedback_incorrect: '淋巴瘤細胞學特徵：(1) 單一群（monomorphic）大型淋巴球、(2) > 50% 大型、(3) 核仁明顯、(4) 有絲分裂增加。正常/反應性是混合群（polymorphic）。', key_learning_points: ['正常淋巴結：> 75% 小型淋巴球', '反應性增生：混合群（各大小比例均增加）', '淋巴瘤：單一群大型淋巴球佔優勢', '大型淋巴球 > 2x RBC 直徑、核仁明顯'] },
      { step_number: 3, step_type: 'diagnostic_plan', title: '進一步分類', prompt: '確認淋巴瘤後，進一步分類需要哪些檢查？選擇 2 項。', available_actions: ['流式細胞術（flow cytometry）/ 免疫表型', 'CBC + 血液抹片', 'PARR (PCR for Antigen Receptor Rearrangement)', '腹部超音波分期', '切除性切片', '骨髓抹片'], correct_actions: ['流式細胞術（flow cytometry）/ 免疫表型', 'CBC + 血液抹片'], feedback_correct: '正確！免疫表型區分 B-cell vs T-cell（影響預後與治療反應）。B-cell 預後較 T-cell 好。CBC + 抹片排除白血病性（Stage V with leukemia）。PARR 在 flow cytometry 不可用時可替代。', feedback_incorrect: '免疫表型（B vs T cell）是淋巴瘤分類的核心。CBC 排除白血病相。', key_learning_points: ['B-cell lymphoma 預後優於 T-cell', 'Flow cytometry 是免疫表型的 gold standard', 'PARR 可在細胞學抹片上做 B/T cell 分類', 'Stage V = 骨髓或血液侵犯'] },
      { step_number: 4, step_type: 'result_interpretation', title: '分期結果', prompt: 'Flow cytometry：B-cell lymphoma（CD21+, CD3-）。CBC：WBC 正常、無異常淋巴球。生化：正常。胸腔 X 光：正常。腹超：脾臟輕度腫大、肝臟正常、mesenteric LN 腫大。WHO 分期？', available_actions: ['Stage IIIa（肝脾以下全身淋巴結 + substage a 無全身症狀）', 'Stage I', 'Stage IV', 'Stage Vb'], correct_actions: ['Stage IIIa（肝脾以下全身淋巴結 + substage a 無全身症狀）'], feedback_correct: '正確！WHO 分期：Stage III = 全身淋巴結侵犯。Substage a = 無全身症狀（vs b = 有症狀）。脾臟輕度腫大但 CBC 正常、無白血病相 = 非 Stage V。B-cell + Stage IIIa 預後相對較好。', feedback_incorrect: '犬淋巴瘤 WHO 分期：I（單一 LN）、II（同側多 LN）、III（全身 LN）、IV（肝/脾）、V（骨髓/血液）。a = 無全身症狀、b = 有。', key_learning_points: ['犬淋巴瘤 WHO 分期 I-V', 'Substage a/b 影響預後', 'B-cell + Stage IIIa 中位存活約 12-14 個月（CHOP 化療）', '完整分期需：FNA + 免疫表型 + CBC + 影像'] },
      { step_number: 5, step_type: 'case_summary', title: '細胞學在腫瘤診斷的角色', prompt: '整合細胞學在淋巴瘤診斷流程中的角色。', available_actions: ['FNA 細胞學是第一線 → 免疫表型分類 → 分期 → 治療決策。細胞學提供快速初步診斷。', '細胞學不可靠必須切片', '只用 flow cytometry 不需細胞學', '影像足以診斷不需細胞學'], correct_actions: ['FNA 細胞學是第一線 → 免疫表型分類 → 分期 → 治療決策。細胞學提供快速初步診斷。'], feedback_correct: '正確！犬淋巴瘤是細胞學診斷的最佳範例。FNA 可在門診 30 分鐘內確診 > 85% 的淋巴瘤。加上免疫表型即可指導治療。切除性切片保留給細胞學不確定的病例。', feedback_incorrect: '細胞學是淋巴瘤診斷流程的起點和核心。快速、準確、經濟。', key_learning_points: ['FNA 細胞學是淋巴結腫大的第一線', '淋巴瘤細胞學準確率 > 85%', '低度淋巴瘤細胞學較困難（需切片確認）', '細胞學 + 免疫表型 + 分期 = 完整診斷'] },
    ],
    expert_pathway: { reasoning: '全身 LN 腫大 + 黃金獵犬 → FNA 細胞學 → > 90% 大型淋巴球 = high-grade lymphoma → Flow 確認 B-cell → 分期 Stage IIIa → 指導 CHOP 化療。', key_decisions: ['FNA 為第一線', '辨識 high-grade 細胞學特徵', 'B vs T cell 分類', '完整分期'], common_pitfalls: ['不做 FNA 直接切片（過度侵入）', '反應性增生誤判為淋巴瘤（未辨識 polymorphic）', '忽略免疫表型', '分期不完整'] },
    related_nodes_for_review: ['CPATH-L4-011', 'CPATH-L4-003', 'CPATH-L4-001', 'CPATH-L1-001'],
    tags: ['細胞學', '淋巴瘤', 'FNA', '免疫表型', '分期', 'case_challenge'],
  },
  // --- CASE-CPATH-006: 多尿多渴犬的完整內分泌評估 ---
  {
    id: 'CASE-CPATH-006', title: '多尿多渴犬的內分泌實驗室系統性評估', specialty: 'CPATH', cross_specialties: ['IM'], required_nodes: ['CPATH-L4-010', 'CPATH-L4-002', 'CPATH-L4-009'], difficulty: 4, species: '犬',
    scenario: { signalment: '10 歲已絕育雌性比格犬，體重 14 kg', chief_complaint: '多喝多尿 2 個月，體重增加', brief_history: '近兩個月飲水量從約 400 mL 增至 > 1000 mL/天。排尿頻繁，偶有室內排尿。食慾增加、體重從 12 kg 增至 14 kg。毛量減少但不癢。喘息增加。' },
    steps: [
      { step_number: 1, step_type: 'diagnostic_plan', title: '基礎篩檢', prompt: '多飲多尿犬，臨床病理基礎篩檢？選擇 3 項。', available_actions: ['全套生化（含 BUN/Cr、Glucose、ALP、Cholesterol、電解質）', 'CBC', '完整尿液分析（含 USG、UPC）', '甲狀腺 T4', '腎上腺功能測試', '腹部超音波'], correct_actions: ['全套生化（含 BUN/Cr、Glucose、ALP、Cholesterol、電解質）', 'CBC', '完整尿液分析（含 USG、UPC）'], feedback_correct: '正確！多飲多尿的臨床病理基礎三件套：生化（排除 CKD、DM、Cushing、高鈣血症、低鉀血症等）、CBC（stress leukogram 提示 Cushing）、UA（USG 評估濃縮能力是關鍵）。先基礎篩檢再做特異性內分泌檢測。', feedback_incorrect: '多飲多尿的臨床病理基礎評估：生化 + CBC + UA。這些可同時篩檢多種 PU/PD 的原因（CKD、DM、Cushing、高鈣血症）。', key_learning_points: ['PU/PD 定義：飲水 > 100 mL/kg/day、排尿 > 50 mL/kg/day', 'PU/PD 鑑別清單：CKD、DM、Cushing、高鈣、pyometra、肝病、CDI/NDI', 'USG < 1.030 (犬) 在脫水時 = 濃縮能力受損', '基礎三件套常能縮小鑑別範圍'] },
      { step_number: 2, step_type: 'result_interpretation', title: '基礎結果判讀', prompt: `結果：
- CBC：stress leukogram（Neutrophilia 18,000、Lymphopenia 800、Eosinopenia 50）
- 生化：ALP 520、ALT 65、Glucose 135、Chol 350、Triglyceride 280、BUN 22、Cr 0.8
- UA：USG 1.008、UPC 0.3、Glucose (-)

哪些發現最有意義？選擇 3 項。`, available_actions: ['Stress leukogram（嗜中性球增多 + 淋巴球減少 + 嗜酸球減少）', 'ALP 顯著升高（皮質醇誘導型 ALP）', 'USG 1.008（嚴重等張尿，濃縮能力極差）', 'Glucose 135 正常偏高但無糖尿', 'Cholesterol + Triglyceride 升高', 'BUN/Cr 正常'], correct_actions: ['Stress leukogram（嗜中性球增多 + 淋巴球減少 + 嗜酸球減少）', 'ALP 顯著升高（皮質醇誘導型 ALP）', 'USG 1.008（嚴重等張尿，濃縮能力極差）'], feedback_correct: '正確！三項共同指向一個診斷——庫興氏症。Stress leukogram = 內源性皮質醇過高的白血球特徵。ALP 顯著升高 = 皮質醇誘導的同工酶（犬特有）。等張尿 = 皮質醇抑制 ADH 導致腎濃縮能力下降。', feedback_incorrect: '三大線索：stress leukogram + ALP 升高 + 等張尿 = 經典的庫興氏症生化模式。這展示了基礎三件套如何「指路」到特異性檢測。', key_learning_points: ['Stress leukogram = 內源性或外源性高皮質醇', '犬 ALP 有皮質醇誘導型同工酶（corticosteroid-induced ALP）', 'USG < 1.012 在 PU/PD 犬需考慮 Cushing', '高脂血症也是 Cushing 的常見生化異常'] },
      { step_number: 3, step_type: 'diagnostic_plan', title: '內分泌確認', prompt: '基礎篩檢高度提示 Cushing，確認檢查？選擇 2 項。', available_actions: ['UCCR（尿液皮質醇/肌酸酐比值）篩檢', 'LDDS（低劑量 Dexamethasone 抑制試驗）確認', 'ACTH 刺激試驗', '甲狀腺 T4', '血清皮質醇基礎值', '內源性 ACTH'], correct_actions: ['UCCR（尿液皮質醇/肌酸酐比值）篩檢', 'LDDS（低劑量 Dexamethasone 抑制試驗）確認'], feedback_correct: '正確！UCCR 敏感度 > 95%（陰性幾乎排除 Cushing）——但特異性較低。LDDS 是確認的 gold standard（8hr cortisol > 1.4 ug/dL = 陽性）。兩者搭配：UCCR 篩 + LDDS 確認。基礎皮質醇值無診斷意義。', feedback_incorrect: 'UCCR 篩檢（敏感度 > 95%）+ LDDS 確認（gold standard）是 Cushing 的標準臨床病理流程。基礎皮質醇值無意義（脈衝式分泌）。', key_learning_points: ['UCCR 敏感度 > 95%、特異性 ~80%', 'LDDS 是確診 gold standard', 'ACTH stim 敏感度較低（60-85%），主要用於治療監測', '基礎皮質醇值無診斷意義（脈衝式分泌）'] },
      { step_number: 4, step_type: 'result_interpretation', title: '內分泌結果判讀', prompt: 'UCCR > 80（正常 < 20）。LDDS：0hr 4.8、4hr 1.2、8hr 3.9 ug/dL。如何系統判讀？', available_actions: ['UCCR 陽性 + LDDS 8hr 未抑制 = 確認 Cushing。4hr 抑制 + 8hr 逃脫 = 高度提示 PDH。', 'LDDS 陰性', '只有 UCCR 陽性，LDDS 不確定', 'ADH（腎上腺腫瘤）'], correct_actions: ['UCCR 陽性 + LDDS 8hr 未抑制 = 確認 Cushing。4hr 抑制 + 8hr 逃脫 = 高度提示 PDH。'], feedback_correct: '正確！UCCR > 80 = 篩檢陽性。LDDS 8hr > 1.4 = 確認 Cushing。進階判讀：4hr cortisol < 50% baseline 或 < 1.4 = 「4hr 抑制」→ 再 8hr 逃脫 = PDH 特徵（垂體腫瘤保留部分負回饋）。這個模式在臨床病理中被稱為 LDDS 的「額外資訊」。', feedback_incorrect: 'LDDS 系統判讀：8hr 判定 Cushing 有無。4hr 提供 PDH vs ADH 額外資訊。4hr 抑制 + 8hr 逃脫 = PDH。', key_learning_points: ['LDDS 8hr > 1.4 = 確認 Cushing', 'LDDS 4hr 是「額外資訊」：4hr 抑制 + 8hr 逃脫 = PDH', 'LDDS 可同時確診 + 提示病因', '若 4hr/8hr 均不抑制，需腹超或 ACTH 進一步區分'] },
      { step_number: 5, step_type: 'case_summary', title: '內分泌檢測的臨床病理原則', prompt: '整合多飲多尿犬的內分泌實驗室評估原則。', available_actions: ['基礎三件套先篩 → 辨識指向模式 → 特異性內分泌檢測 → 系統判讀 → 指導進一步影像', '直接做所有內分泌測試', '只做一項就夠', '影像優先不需實驗室'], correct_actions: ['基礎三件套先篩 → 辨識指向模式 → 特異性內分泌檢測 → 系統判讀 → 指導進一步影像'], feedback_correct: '正確！這是內分泌臨床病理的黃金流程：(1) 基礎三件套縮小範圍、(2) 辨識特徵模式（stress leukogram + ALP + 等張尿 = Cushing）、(3) 選擇適當的功能性檢測（UCCR + LDDS）、(4) 系統性結果判讀、(5) 影像確認。', feedback_incorrect: '內分泌診斷是分步驟的邏輯過程。基礎篩檢指路 → 特異性檢測確認 → 系統判讀 → 影像確認。', key_learning_points: ['基礎篩檢可涵蓋多種 PU/PD 鑑別', '特徵模式辨識是臨床病理的核心技能', '功能性測試（UCCR/LDDS/ACTH stim）的選擇邏輯', '結果判讀需整合基礎 + 特異性檢測'] },
    ],
    expert_pathway: { reasoning: 'PU/PD + 肥胖 + 脫毛 → 基礎三件套 → stress leukogram + ALP + 等張尿 = Cushing 模式 → UCCR + LDDS 確認 → PDH → 進一步腹超評估腎上腺。', key_decisions: ['基礎篩檢先行', '辨識 Cushing 的三大基礎模式', '選擇 UCCR + LDDS 組合', '判讀 LDDS 4hr 額外資訊'], common_pitfalls: ['跳過基礎篩檢直接做 LDDS', '僅看 8hr 忽略 4hr 額外資訊', '用基礎皮質醇診斷', '忽略 stress leukogram 的意義'] },
    related_nodes_for_review: ['CPATH-L4-010', 'CPATH-L4-002', 'CPATH-L4-009', 'CPATH-L4-001'],
    tags: ['內分泌', 'Cushing', 'LDDS', 'UCCR', 'PU/PD', 'case_challenge'],
  },
  // --- CASE-CPATH-007: 呼吸困難犬的胸水分析 ---
  {
    id: 'CASE-CPATH-007', title: '呼吸困難犬的胸水體液分析與鑑別', specialty: 'CPATH', cross_specialties: ['ECC', 'ONCO', 'CARDIO'], required_nodes: ['CPATH-L4-006', 'CPATH-L4-003', 'CPATH-L1-002'], difficulty: 4, species: '犬',
    scenario: { signalment: '10 歲已絕育雌性拉布拉多犬，體重 30 kg', chief_complaint: '漸進性呼吸困難 5 天', brief_history: '五天前開始呼吸加速，活動後喘息明顯。近兩天端坐呼吸（orthopnea）。食慾減退。近期無外傷或用藥。理學：呼吸困難、雙側胸腔叩診濁音、心音減弱。' },
    steps: [
      { step_number: 1, step_type: 'diagnostic_plan', title: '急診處置', prompt: '呼吸困難 + 胸腔叩診濁音，最優先？', available_actions: ['胸腔穿刺（同時治療性引流 + 診斷性取樣）', '胸腔 X 光', 'TFAST 超音波', 'CT 胸腔', '等待血液檢查結果', '氧氣支持觀察'], correct_actions: ['胸腔穿刺（同時治療性引流 + 診斷性取樣）'], feedback_correct: '正確！大量胸水導致呼吸困難是急診狀況。胸腔穿刺同時達成兩個目的：(1) 治療性引流緩解呼吸困難、(2) 取樣做體液分析。TFAST 可先快速確認胸水但不應延誤穿刺。', feedback_incorrect: '大量胸水 + 呼吸困難 = 需要穿刺引流。穿刺同時取樣做分析。TFAST 可在穿刺前快速確認但不延誤。', key_learning_points: ['胸腔穿刺 = 治療 + 診斷', '嚴重呼吸困難不應因影像延誤穿刺', '穿刺取 EDTA 管 + 無菌管 + 紅頭管', '引流量記錄有助鑑別'] },
      { step_number: 2, step_type: 'result_interpretation', title: '體液分析系統判讀', prompt: `引流出 800 mL 淡粉紅色稍混濁液體。分析：
- TP 4.5 g/dL、SG 1.025
- TNCC 5,500 cells/uL
- 細胞學：主要為非退化性嗜中性球 + 巨噬細胞 + 少量反應性間皮細胞

如何分類此胸水？`, available_actions: ['改良型漏出液（modified transudate）', '純漏出液（pure transudate）', '滲出液（exudate）', '乳糜液（chylous effusion）'], correct_actions: ['改良型漏出液（modified transudate）'], feedback_correct: '正確！體液分類三步驟：(1) TP + TNCC 分類（TP 2.5-5.0 + TNCC 500-7,000 = 改良型漏出液）、(2) 外觀（淡粉紅稍混濁符合）、(3) 細胞學（混合型非特異性發炎）。改良型漏出液最常見原因：腫瘤 > 心臟衰竭 > 肝臟疾病。', feedback_incorrect: '體液分類依 TP + TNCC：純漏出液（TP < 2.5, TNCC < 500）、改良型漏出液（TP 2.5-5.0, TNCC 500-7,000）、滲出液（TP > 3.0, TNCC > 7,000）。本例 TP 4.5 + TNCC 5,500 = 改良型漏出液。', key_learning_points: ['體液分類三參數：外觀、TP/TNCC、細胞學', '純漏出液：TP < 2.5, TNCC < 500（低白蛋白、肝硬化）', '改良型漏出液：TP 2.5-5.0, TNCC 500-7,000（腫瘤、CHF）', '滲出液：TP > 3.0, TNCC > 7,000（感染性/非感染性）'] },
      { step_number: 3, step_type: 'differential_diagnosis', title: '鑑別診斷', prompt: '犬的改良型漏出液胸水，最重要的 3 項鑑別？', available_actions: ['胸腔腫瘤（最常見原因）', '右心衰竭', '肺葉扭轉', '膿胸', '乳糜胸', '肝衰竭（低白蛋白）'], correct_actions: ['胸腔腫瘤（最常見原因）', '右心衰竭', '肺葉扭轉'], feedback_correct: '正確！犬改良型漏出液胸水三大鑑別：(1) 胸腔/縱膈腫瘤（最常見——mesothelioma、thymoma、lymphoma）、(2) 右心衰竭（心輸出不足 + 靜脈壓升高）、(3) 肺葉扭轉。細胞學需仔細找腫瘤細胞。', feedback_incorrect: '犬改良型漏出液胸水鑑別：腫瘤最常見 > CHF > 肺葉扭轉 > 肝病。膿胸是滲出液。乳糜液是獨立分類。', key_learning_points: ['犬改良型漏出液胸水 #1 原因 = 腫瘤', '心臟衰竭是重要鑑別', '胸水細胞學尋找腫瘤細胞', '膿胸 = 化膿性滲出液（退化性嗜中性球 + 細菌）'] },
      { step_number: 4, step_type: 'diagnostic_plan', title: '進一步評估', prompt: '進一步鑑別方向？選擇 2 項。', available_actions: ['胸腔 X 光（引流後拍攝評估腫塊）', '心臟超音波排除 CHF', '胸水 Triglyceride / Cholesterol（排除乳糜）', '胸水培養', '細胞學仔細複查腫瘤細胞', 'CT 胸腔'], correct_actions: ['胸腔 X 光（引流後拍攝評估腫塊）', '心臟超音波排除 CHF'], feedback_correct: '正確！引流後 X 光可顯示被胸水遮蔽的腫塊。心超排除 CHF。如果 X 光見腫塊，再做 CT 精確評估。胸水 TG/Chol 可排除乳糜（TG > 100 mg/dL 或 TG 胸水 > 血清 = 乳糜）。', feedback_incorrect: '引流後 X 光揭示被遮蔽的腫塊。心超排除 CHF。兩者是改良型漏出液鑑別的核心影像。', key_learning_points: ['引流後 X 光 = 揭示被胸水遮蔽的病灶', '心超排除 CHF（右心功能 + 心包膜）', '乳糜液判定：胸水 TG > 100 或 TG 胸水/血清 > 1', 'CT 是胸腔腫塊精確評估的 gold standard'] },
      { step_number: 5, step_type: 'result_interpretation', title: '綜合結果', prompt: '引流後 X 光：右前縱膈可見一個 5 cm 軟組織團塊。心超：正常心功能。細胞學複查：偶見一群異型間皮樣細胞，核大核仁明顯。如何整合？', available_actions: ['改良型漏出液 + 縱膈腫塊 + 異型間皮細胞 = 高度懷疑 mesothelioma 或 thymoma，需組織切片確診', '確診為 mesothelioma', '良性反應性間皮增生', '淋巴瘤'], correct_actions: ['改良型漏出液 + 縱膈腫塊 + 異型間皮細胞 = 高度懷疑 mesothelioma 或 thymoma，需組織切片確診'], feedback_correct: '正確！體液細胞學對間皮腫瘤的診斷是挑戰——反應性間皮細胞 vs 惡性間皮瘤難以區分。異型性提高懷疑但不足以確診。需要組織切片 + 免疫組織化學染色確診。CT 引導穿刺或胸腔鏡切片是下一步。', feedback_incorrect: '胸水細胞學對間皮腫瘤的限制：反應性 vs 惡性間皮細胞極難區分。異型性增加懷疑但需切片確認。', key_learning_points: ['反應性間皮細胞 vs 惡性間皮瘤：細胞學區分困難', '異型間皮細胞需組織切片確診', '免疫組織化學（CK/Vimentin/Desmin）輔助鑑別', '體液細胞學的限制是臨床病理師需溝通的重要觀念'] },
      { step_number: 6, step_type: 'case_summary', title: '體液分析的臨床病理價值', prompt: '整合體液分析在呼吸困難鑑別中的角色。', available_actions: ['體液分析 = 分類（TP/TNCC）+ 細胞學 → 縮小鑑別 → 指導影像 → 認知限制 → 需要時轉切片', '體液分析可以確診所有疾病', '只看外觀即可', '只做培養不需細胞學'], correct_actions: ['體液分析 = 分類（TP/TNCC）+ 細胞學 → 縮小鑑別 → 指導影像 → 認知限制 → 需要時轉切片'], feedback_correct: '正確！體液分析的價值：(1) 快速分類縮小鑑別、(2) 細胞學可確診某些疾病（膿胸、淋巴瘤、乳糜）、(3) 指導下一步檢查方向。但也有限制：間皮瘤、反應性增生等需組織確認。認知限制是成熟臨床病理觀念。', feedback_incorrect: '體液分析的核心價值：分類 + 細胞學 → 縮小鑑別 → 指導方向。但也要認知限制。', key_learning_points: ['體液分析是胸/腹水鑑別的第一線', '可確診：膿胸（細菌）、乳糜（TG）、某些腫瘤（淋巴瘤）', '不可確診：間皮瘤 vs 反應性間皮增生', '臨床病理的價值 = 快速縮小鑑別 + 指導方向'] },
    ],
    expert_pathway: { reasoning: '呼吸困難 + 胸腔叩診濁音 → 穿刺引流 + 取樣 → 改良型漏出液 → 鑑別：腫瘤/CHF/肺扭轉 → 引流後 X 光 + 心超 → 縱膈腫塊 + 異型間皮細胞 → 需切片確診。', key_decisions: ['穿刺 = 治療 + 診斷', '體液分類正確', '引流後影像', '認知細胞學限制'], common_pitfalls: ['因影像延誤穿刺', '體液分類錯誤', '反應性間皮誤判為腫瘤', '忽略引流後 X 光', '未排除 CHF'] },
    related_nodes_for_review: ['CPATH-L4-006', 'CPATH-L4-003', 'CPATH-L1-002', 'CPATH-L4-002'],
    tags: ['胸水', '體液分析', '改良型漏出液', '間皮瘤', '穿刺', 'case_challenge'],
  },
];
