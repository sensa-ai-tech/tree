import type { NodeContent } from '@/types/knowledge';

const now = '2026-02-15T00:00:00Z';

/** 胃擴張扭轉 (GDV) — 疾病型 */
const contentGDV: NodeContent = {
  id: 'CONTENT-SURG-L3-001',
  node_id: 'SURG-L3-001',
  version: 1,
  summary: '胃擴張扭轉（Gastric Dilatation-Volvulus, GDV）是犬的危及生命的外科急診。好發於大型及巨型深胸犬，死亡率 10-33%。胃順時針扭轉導致胃流出道阻塞、脾臟移位與血管壓迫，引發嚴重的心血管衰竭與再灌流損傷。手術包含胃減壓、derotation 與右側 incisional gastropexy，術前血漿 lactate 是重要的預後指標。',
  learning_objectives: [
    '描述 GDV 的病理生理機轉，包括胃扭轉方向與血管壓迫效應',
    '辨識 GDV 的臨床表現並與單純胃擴張鑑別',
    '制定 GDV 急診穩定化與手術計畫',
    '運用 lactate 等生物標記物評估預後',
    '解釋預防性 gastropexy 的適應症與時機',
  ],
  key_points: [
    '好發品種：大丹犬、德國牧羊犬、標準貴賓、愛爾蘭塞特犬、威瑪獵犬',
    '胃典型以順時針方向扭轉 220-270 度（從尾端觀察）',
    '術前 lactate > 6.0 mmol/L 與胃壁壞死及死亡率升高顯著相關',
    '手術三步驟：減壓（trocarization 或胃管）→ derotation → incisional gastropexy',
    '右側 incisional gastropexy 復發率 < 5%，未做則復發率 54-80%',
    '術後需密切監測心律不整（尤其心室早期收縮, VPCs），好發於術後 12-72 小時',
  ],
  body: `# 胃擴張扭轉 (GDV)

## 一、病理機制 (Pathophysiology)



### 概述
胃擴張扭轉（GDV）是犬科最嚴重的外科急診之一，若未及時處理，死亡率可達 100%。此病以大型及巨型深胸犬種最常見，年發生率在高風險品種中約 6%。

### 病理生理
GDV 的核心病理包括三個層面：

1. **機械性阻塞**：胃順時針扭轉（從術者觀察尾端）220-270 度，幽門移至左側，導致胃入口與出口同時阻塞
2. **血管壓迫**：擴張的胃壓迫後腔靜脈與門脈，造成靜脈回流減少、心輸出量下降與低血壓
3. **再灌流損傷**：胃壁缺血後的再灌流導致氧自由基釋放、全身性發炎反應（SIRS）、DIC 與心律不整

脾臟因與胃的韌帶連接而隨胃移位，可能發生扭轉或血管撕裂。

### 急診處理
[互動:GDV 急診處理流程決策圖]

1. **積極輸液復甦**：兩條大口徑靜脈導管，晶體液 shock dose（60-90 mL/kg/hr 第一小時）
2. **胃減壓**：嘗試口胃管，失敗則右側腹壁 trocar 穿刺減壓
3. **ECG 監測**：偵測心室心律不整
4. **血液檢查**：lactate、電解質、CBC、凝血功能
5. **Lactate 判讀**：< 6.0 mmol/L 預後較佳，> 6.0 mmol/L 提示胃壁壞死風險升高

### 手術
麻醉穩定後進行正中開腹：
1. 胃 derotation（將幽門從左側推回右側）
2. 評估胃壁與脾臟活性——壞死區域需切除（partial gastrectomy / splenectomy）
3. **右側 incisional gastropexy**：將胃幽門竇漿膜層縫合至右腹壁，為預防復發的關鍵步驟

[圖片:Incisional gastropexy 手術步驟示意圖]

## 二、臨床表現與診斷 (Clinical Signs & Diagnosis)

### 臨床表現
[圖片:典型 GDV 犬的腹部外觀——腹部明顯膨脹]

急性發作通常在進食後 2-4 小時內：
- 非生產性嘔吐（retching without vomiting）為最典型表現
- 腹部急性膨脹，叩診呈鼓音
- 流涎、不安、無法舒適躺下
- 進展至休克表現：蒼白黏膜、CRT 延長、心搏過速、弱脈

### 診斷
右側臥位腹部 X 光可見特徵性 **「雙氣泡」** 或 **「Popeye arm sign」**：幽門軟組織密度帶將胃分隔為兩個充氣腔室。

## 三、治療策略 (Treatment)

## 四、併發症與監控 (Complications & Monitoring)

## 五、預後與預後因子 (Prognosis)

## 六、人醫借鑒 (Translational Insights)

| 人醫工具/概念 | 獸醫應用潛力 | 現況 |
|-------------|-------------|------|
| 腹腔鏡/內視鏡微創手術 | 犬 GDV 預防性胃固定術腹腔鏡化 | 獸醫微創外科快速發展中 |
| 術中血管吻合技術（如 OPSI shunt） | 門靜脈分流手術的微創化趨勢 | 少數轉介中心可執行 |
| 生物補片（biologic mesh） | 犬腹壁缺損/會陰疝修復的生物材料替代合成 | 獸醫使用經驗增加中 |
| 手術部位感染（SSI）監控 bundle | 獸醫外科感染率追蹤與品質改善 | 人醫 WHO SSI bundle 廣泛推行，獸醫開始建立 |

## 七、臨床爭議與知識空缺 (Controversies & Knowledge Gaps)

| 爭議議題 | 現況 | Evidence Level |
|---------|------|---------------|
| 犬 TPLO vs TTA vs 側副韌帶穩定術治療 CCL 斷裂 | 大型犬 TPLO 為主流但 TTA 同等級證據，小型犬側副韌帶穩定術仍有支持者 | Level I |
| 犬 GDV 預防性胃固定術適應症 | 大型犬/深胸犬是否應常規預防性胃固定仍有爭議 | Level III |
| 犬脾臟腫塊的術前活檢價值 | 脾臟 FNA 的診斷敏感度/出血風險的風險效益分析 | Level III |
| 犬貓 OVE vs OVH | 歐洲傾向 OVE（微創、術後疼痛少），美洲傳統 OVH——長期子宮殘端併發症證據不足 | Level II |`,
  clinical_pearl: '術前 lactate 是 GDV 最實用的預後指標。Lactate > 6.0 mmol/L 的犬，胃壁壞死的可能性顯著增加，應在術前告知飼主可能需要 partial gastrectomy 甚至安樂死。術後 lactate 如果在 12 小時內未下降至正常，也是預後不良的重要訊號。\n\n【台灣流行病學】GDV 在台灣以大型犬與深胸犬好發，德國牧羊犬、大丹犬、標準型貴賓犬為高風險品種。雖然台灣大型犬飼養比例低於歐美，但近年大型犬飼養數量增加，GDV 病例亦隨之上升。台灣亞熱帶高溫環境下犬隻運動後大量飲水可能為誘發因素之一。台灣各獸醫教學醫院與大型動物醫院已具備 GDV 緊急手術能力，建議大型犬飼主了解 GDV 緊急徵象。',
  common_mistakes: [
    '僅做胃擴張減壓而未進行 gastropexy（復發率高達 54-80%）',
    '在血流動力學未穩定前急於手術，增加麻醉風險',
    '術後忽略心律不整監測，VPCs 好發於術後 12-72 小時',
    '未評估脾臟狀態——脾臟扭轉或撕裂可能導致致命性出血',
  ],
  disease_data: {
    signalment: '好發於大型及巨型深胸犬種，年齡 > 2 歲，中位好發年齡 7-8 歲。高風險品種：大丹犬（一生發生率 ~42%）、德國牧羊犬、標準貴賓、愛爾蘭塞特犬、威瑪獵犬、聖伯納。雄犬略高於雌犬。',
    etiology: '確切病因不完全明瞭。風險因子包括：深胸體型（胸深/胸寬比 > 2）、一級親屬有 GDV 病史、快速進食、一日一餐大量餵食、進食後劇烈運動、緊張焦慮的性格、高齡。含大豆或油脂的飼料可能增加風險。',
    pathogenesis: '胃功能性或解剖性排空障礙 → 胃氣體或食物積聚 → 胃擴張 → 胃沿食道-幽門軸順時針扭轉（220-270度）→ 幽門與賁門雙重阻塞 → 持續擴張 → 後腔靜脈與門脈壓迫 → 靜脈回流減少 → 心輸出量下降 → 低灌流性休克 → 胃壁缺血壞死 → 再灌流損傷 → SIRS / DIC → 多器官衰竭',
    clinical_signs: [
      { sign: '非生產性嘔吐', category: 'primary', description: '反覆作嘔但無法嘔出胃內容物，為 GDV 最典型徵候' },
      { sign: '急性腹部膨脹', category: 'primary', description: '腹部明顯擴張，叩診呈鼓音（tympanic），尤其左側明顯' },
      { sign: '不安與流涎', category: 'primary', description: '犬表現焦躁不安、無法舒適躺下、大量流涎' },
      { sign: '休克徵候', category: 'secondary', description: '蒼白黏膜、CRT > 2 秒、心搏過速（> 160 bpm）、弱脈、低血壓' },
      { sign: '腹痛', category: 'secondary', description: '觸診腹部疼痛，犬可能出現祈禱姿勢（prayer position）' },
    ],
    staging: null,
    differential_diagnosis: [
      { condition: '單純胃擴張（GD without V）', key_differentiator: 'X 光無「雙氣泡」徵象，胃管可順利通過，臨床症狀較輕' },
      { condition: '脾臟扭轉', key_differentiator: '腹部超音波可見脾臟腫大與血流異常，X 光無典型 GDV 徵象' },
      { condition: '腸道異物或腸套疊', key_differentiator: '嘔吐通常為生產性（可嘔出），腹部 X 光可見異物或腸阻塞影像' },
      { condition: '腹腔出血（如脾臟 HSA 破裂）', key_differentiator: '腹部膨脹但無鼓音，AFAST 可見腹腔積液，PCV/TS 下降' },
    ],
    diagnostic_workup: '1. 立即靜脈留置與輸液 → 2. 右側臥位腹部 X 光（確認「雙氣泡」徵象）→ 3. 血液學：lactate、電解質（低血鉀常見）、血氣分析、CBC、凝血功能 → 4. ECG（心室心律不整偵測）→ 5. 嘗試口胃管減壓 → 6. 確診後準備急診手術',
    treatment_protocol: '急診穩定化：雙靜脈通路、晶體液 shock dose、胃減壓。手術：正中開腹 → derotation → 評估胃壁及脾臟活性 → 壞死組織切除 → 右側 incisional gastropexy。術後 ICU 監測：ECG（VPCs 好發 12-72 小時）、電解質、lactate 追蹤、NPO 12-24 小時後少量多餐流質食物。心律不整嚴重時使用 [藥物:Lidocaine] CRI 50-80 mcg/kg/min。',
    prognosis: '整體手術存活率約 67-90%（依系列報告不同）。術前 lactate < 6.0 mmol/L 存活率 > 90%。胃壁壞死需 partial gastrectomy 的病例死亡率 28-38%。需脾臟切除但胃壁完整的病例預後相對較佳。術後 DIC 或多器官衰竭為主要死因。預防性 gastropexy 後 GDV 復發率 < 5%。',
    monitoring: '術後 ICU 持續 ECG 監測至少 48-72 小時。每 6-12 小時追蹤 lactate 直到正常化。監測尿量（目標 > 1 mL/kg/hr）。電解質每 12 小時追蹤（尤其鉀離子）。術後 3-5 天監測 DIC 指標（PT/aPTT/Fibrinogen/D-dimer）。',
    owner_communication: 'GDV 是危及生命的急診，即使手術成功仍有術後併發症風險。術前需充分告知：手術費用估算、可能需要 partial gastrectomy 或 splenectomy、術後 ICU 費用、整體死亡率 10-33%。如果術中發現廣泛胃壁壞死，需討論安樂死的可能性。出院後飲食管理：少量多餐、避免進食後劇烈運動。高風險品種建議在絕育時同時進行預防性 gastropexy。',
  },
  diagnostic_data: null,
  procedure_data: null,
  visual_placeholders: [
    { position: '臨床表現段落前', type: 'annotated_image', description: 'GDV 犬典型腹部外觀照片' },
    { position: '診斷段落', type: 'annotated_image', description: '右側臥 X 光「雙氣泡」徵象標示圖' },
    { position: '手術段落後', type: 'flowchart', description: 'Incisional gastropexy 手術步驟流程圖' },
  ],
  interactive_placeholders: [
    { position: '急診處理段落', type: 'decision_tree', description: 'GDV 急診處理流程互動決策圖' },
  ],
  drug_api_links: ['Lidocaine', 'Metoclopramide'],
  references: [
    { type: 'guideline', citation: 'ACVS Consensus Statement on Gastric Dilatation-Volvulus. Vet Surg. 2023.', relevance: 'GDV 診斷與治療最新共識' },
    { type: 'textbook', citation: 'Fossum TW. Small Animal Surgery, 5th ed. Elsevier, 2019. Chapter 20: Surgery of the Digestive System.', relevance: 'GDV 手術技術標準教材' },
    { type: 'journal', citation: 'de Battisti A et al. Lactate as a prognostic indicator in dogs with gastric dilatation-volvulus. J Am Vet Med Assoc. 2009;235(1):46-52.', relevance: 'Lactate 作為 GDV 預後指標的關鍵研究' },
    { type: 'journal', citation: 'Glickman LT et al. Incidence of and breed-related risk factors for gastric dilatation-volvulus in dogs. J Am Vet Med Assoc. 2000;216(1):40-45.', relevance: '品種風險因子流行病學研究' },
  ],
  is_current: true,
  created_at: now,
};

/** 子宮蓄膿 (Pyometra) — 疾病型 */
const contentPyometra: NodeContent = {
  id: 'CONTENT-SURG-L3-009',
  node_id: 'SURG-L3-009',
  version: 1,
  summary: '子宮蓄膿（Pyometra）是未絕育母犬常見的子宮感染性疾病，好發於黃體期（發情後 4-8 週），致病菌以 E. coli 為主。分為開放型（open）與封閉型（closed），封閉型因膿液無法排出更為危險。卵巢子宮切除術（OHE）為確定性治療，內科治療（Aglepristone / PGF2alpha）僅適用於有繁殖需求且穩定的開放型病例。',
  learning_objectives: [
    '描述子宮蓄膿的病理生理機轉與 progesterone 的角色',
    '鑑別開放型與封閉型子宮蓄膿的臨床表現',
    '制定子宮蓄膿的診斷流程與術前穩定化方案',
    '比較手術治療（OHE）與內科治療的適應症與預後',
    '辨識子宮蓄膿的全身性併發症（SIRS / DIC / AKI）',
  ],
  key_points: [
    '好發時間：黃體期（發情後 4-8 週），progesterone 促進子宮內膜增生與免疫抑制',
    '致病菌：E. coli 占 70-90%，其他包括 Streptococcus、Staphylococcus、Klebsiella',
    '開放型（open cervix）：陰道可見膿性/血膿性分泌物，全身症狀較輕',
    '封閉型（closed cervix）：無分泌物，腹部膨脹，全身毒血症更嚴重',
    'OHE 為確定性治療，手術成功率 > 95%',
    '內科治療（Aglepristone + PGF2alpha）適用於穩定的開放型且有繁殖價值的病例，但復發率 20-25%',
    '白血球計數常見嗜中性球左移（left shift），WBC 可能因骨髓耗竭而正常或偏低',
  ],
  body: `# 子宮蓄膿 (Pyometra)

## 一、病理機制 (Pathophysiology)



### 概述
子宮蓄膿是未絕育母犬最常見的子宮疾病之一，在 10 歲前的未絕育母犬中約有 25% 會發生。雖然貓也可發生，但犬的盛行率遠高於貓。此病為外科急診，延遲治療可導致子宮破裂、腹膜炎與敗血症死亡。

### 病理生理
1. **黃體期影響**：發情後 progesterone 升高 → 促進子宮內膜增生（cystic endometrial hyperplasia, CEH）→ 子宮防禦力下降
2. **細菌感染**：發情期子宮頸開放時細菌上行感染 → E. coli 為最常見致病菌 → 細菌在 progesterone 抑制的子宮環境中大量增殖
3. **子宮頸狀態**：
   - **開放型**：子宮頸持續開放，膿液可排出 → 全身中毒較輕
   - **封閉型**：子宮頸關閉，膿液蓄積 → 子宮極度擴張 → 全身中毒嚴重

### CEH-Pyometra Complex
子宮蓄膿被認為是 CEH-Pyometra Complex 的終末表現，可分四個階段：

| 階段 | 特徵 |
|------|------|
| I | 無併發症的 CEH |
| II | CEH + 血漿樣/黏液樣子宮積液 |
| III | CEH + 急性子宮內膜炎 |
| IV | CEH + 慢性子宮內膜炎 → 子宮蓄膿 |

## 二、臨床表現與診斷 (Clinical Signs & Diagnosis)

### 診斷
- **血液學**：WBC 升高伴嗜中性球左移（典型值 30,000-100,000/uL），但也可能正常或降低（骨髓耗竭）
- **生化學**：BUN/Cre 升高（腎前性或 E. coli 內毒素引起的腎損傷）、ALT/ALP 輕度升高、低白蛋白血症
- **腹部超音波**：子宮角擴張（直徑 > 1-2 cm），充滿均質或不均質液體，金標準診斷工具
- **腹部 X 光**：可見管狀軟組織密度影，但不如超音波敏感

[圖片:子宮蓄膿腹部超音波影像——擴張的子宮角]

## 三、治療策略 (Treatment)

### 治療
### 手術治療（OHE）— 確定性治療
- 適用於所有病例，為首選治療方式
- 術前穩定化：積極輸液、矯正電解質、廣效抗生素（[藥物:Ampicillin] + [藥物:Enrofloxacin] 或 [藥物:Metronidazole]）
- 手術在穩定化後盡早進行（通常 4-12 小時內）
- 術中注意避免子宮破裂造成腹腔汙染

### 內科治療 — 僅限篩選病例
- **適應症**：穩定的開放型、年輕有繁殖價值、飼主充分了解風險
- **[藥物:Aglepristone]**（抗 progesterone）：10 mg/kg SC on Day 1, 2, 8（或 Day 1, 2, 7）
- **PGF2alpha**（[藥物:Dinoprost]）：0.1-0.25 mg/kg SC BID-TID，促進子宮收縮與子宮頸開放
- 復發率：約 20-25% 在下次黃體期
- 建議在下次發情時配種，配種成功後不再使用

[互動:治療決策樹——手術 vs 內科治療適應症判斷]

## 四、併發症與監控 (Complications & Monitoring)

## 五、預後與預後因子 (Prognosis)

## 六、人醫借鑒 (Translational Insights)

| 人醫工具/概念 | 獸醫應用潛力 | 現況 |
|-------------|-------------|------|
| 腹腔鏡/內視鏡微創手術 | 犬 GDV 預防性胃固定術腹腔鏡化 | 獸醫微創外科快速發展中 |
| 術中血管吻合技術（如 OPSI shunt） | 門靜脈分流手術的微創化趨勢 | 少數轉介中心可執行 |
| 生物補片（biologic mesh） | 犬腹壁缺損/會陰疝修復的生物材料替代合成 | 獸醫使用經驗增加中 |
| 手術部位感染（SSI）監控 bundle | 獸醫外科感染率追蹤與品質改善 | 人醫 WHO SSI bundle 廣泛推行，獸醫開始建立 |

## 七、臨床爭議與知識空缺 (Controversies & Knowledge Gaps)

| 爭議議題 | 現況 | Evidence Level |
|---------|------|---------------|
| 犬 TPLO vs TTA vs 側副韌帶穩定術治療 CCL 斷裂 | 大型犬 TPLO 為主流但 TTA 同等級證據，小型犬側副韌帶穩定術仍有支持者 | Level I |
| 犬 GDV 預防性胃固定術適應症 | 大型犬/深胸犬是否應常規預防性胃固定仍有爭議 | Level III |
| 犬脾臟腫塊的術前活檢價值 | 脾臟 FNA 的診斷敏感度/出血風險的風險效益分析 | Level III |
| 犬貓 OVE vs OVH | 歐洲傾向 OVE（微創、術後疼痛少），美洲傳統 OVH——長期子宮殘端併發症證據不足 | Level II |`,
  clinical_pearl: '子宮蓄膿犬的 WBC 計數可能出現「paradoxical leukopenia」——當感染過於嚴重時，骨髓嗜中性球儲備耗竭，導致周邊 WBC 正常甚至偏低，但 band neutrophils 比例升高（degenerative left shift）。這類病例往往比 WBC 明顯升高的病例預後更差，需要更積極的術前穩定化。\n\n【台灣流行病學】子宮蓄膿在台灣為極常見的外科急症，與台灣未絕育母犬比例仍偏高有關。台灣流浪犬 TNR（捕捉-絕育-回置）計畫推廣下，獸醫師對 OVH 技術經驗豐富。然而家犬未絕育比例仍高，尤其飼養貴賓犬、馬爾濟斯、吉娃娃等小型犬的飼主常因體型小而延遲絕育。台灣亞熱帶氣候下子宮蓄膿全年均可發生，建議未繁殖犬儘早絕育預防。',
  common_mistakes: [
    '將開放型子宮蓄膿的陰道分泌物誤判為正常發情出血',
    '封閉型子宮蓄膿未行超音波而誤診為其他急性腹症',
    '對不穩定的封閉型病例嘗試內科治療（PGF2alpha 在封閉型中有子宮破裂風險）',
    '未給予充分的術前輸液與抗生素即急於手術',
    'WBC 正常就排除子宮蓄膿——degenerative left shift 可使總 WBC 正常',
  ],
  disease_data: {
    signalment: '好發於未絕育中老年母犬（中位年齡 7-8 歲），所有品種均可發生。黃金獵犬、聖伯納、伯恩山犬、長毛牧羊犬、羅威納等品種風險略高。通常在發情後 4-8 週出現症狀。貓較少見但也可發生。',
    etiology: '子宮內膜增生（CEH）為基礎病變，反覆的 progesterone 刺激導致子宮內膜囊性增生與分泌增加。Progesterone 同時抑制子宮局部免疫反應與子宮肌層收縮，使細菌（主要為 E. coli）得以在子宮腔內增殖。外源性 progesterone 或 estrogen 使用可增加風險。',
    pathogenesis: '反覆發情週期中 progesterone 刺激 → CEH 形成 → 發情期子宮頸開放時細菌上行 → E. coli 在 progesterone 抑制的子宮環境中增殖 → 膿液蓄積 → 內毒素吸收 → 全身性發炎反應（SIRS）→ 可能引發 DIC、急性腎損傷（AKI）、敗血症 → 子宮破裂時導致腹膜炎',
    clinical_signs: [
      { sign: '陰道分泌物', category: 'primary', description: '開放型可見膿性或血膿性分泌物（黃色至紅棕色），有惡臭' },
      { sign: '多飲多尿', category: 'primary', description: 'E. coli 內毒素干擾 ADH 作用於腎小管，導致腎性尿崩症（NDI）' },
      { sign: '食慾下降與嘔吐', category: 'primary', description: '全身性毒血症導致食慾廢絕，部分病例伴有嘔吐或腹瀉' },
      { sign: '腹部膨脹', category: 'secondary', description: '封閉型可因子宮極度擴張而出現明顯腹部膨脹' },
      { sign: '發熱或低體溫', category: 'secondary', description: '感染初期可見發熱（> 39.5°C），敗血症進展時可能低體溫' },
      { sign: '脫水與休克', category: 'secondary', description: '嚴重病例可見黏膜蒼白、CRT 延長、心搏過速、低血壓' },
    ],
    staging: null,
    differential_diagnosis: [
      { condition: '子宮黏液積聚（Mucometra/Hydrometra）', key_differentiator: '無全身感染徵象，超音波下子宮積液為無回音，WBC 正常' },
      { condition: '陰道炎', key_differentiator: '陰道分泌物伴局部刺激但無全身症狀，超音波子宮正常' },
      { condition: '子宮殘端蓄膿（Stump pyometra）', key_differentiator: '已絕育母犬，可能因子宮殘端組織殘留而發生，需超音波確認' },
      { condition: '腹腔腫瘤', key_differentiator: '影像學特徵不同，子宮蓄膿呈管狀擴張而非團塊狀' },
    ],
    diagnostic_workup: '1. 病史確認（發情週期、未絕育狀態）→ 2. CBC 含白血球分類計數 → 3. 生化學（BUN/Cre/ALT/ALP/TP/Albumin/Glucose）→ 4. 腹部超音波（金標準）→ 5. 腹部 X 光（輔助評估子宮大小）→ 6. 尿液分析（評估腎臟濃縮能力）→ 7. 嚴重病例追加凝血功能與血氣分析',
    treatment_protocol: '首選 OHE。術前穩定化：靜脈輸液（shock dose 如有休克）、廣效抗生素（Ampicillin-Sulbactam 30 mg/kg IV TID + Enrofloxacin 5 mg/kg IV SID）。手術目標：完整移除雙側卵巢與子宮體，避免子宮破裂。術後繼續抗生素 7-14 天（依培養結果調整）。內科治療僅限穩定開放型且有繁殖需求：Aglepristone 10 mg/kg SC Day 1, 2, 8 +/- PGF2alpha 0.1-0.25 mg/kg SC。',
    prognosis: 'OHE 手術成功率 > 95%，大部分犬在術後 48-72 小時明顯改善。併發 DIC 或 AKI 的病例死亡率 4-20%。子宮破裂合併腹膜炎死亡率最高。內科治療成功率約 75-90%（開放型），但復發率 20-25%。',
    monitoring: '術後 24-48 小時密切監測：體溫、心率、血壓、尿量。術後 48-72 小時追蹤 WBC 與腎功能。確認手術切口癒合良好。長期：腎功能追蹤（E. coli 內毒素可能造成永久性腎損傷）。內科治療病例需每 2-4 週超音波追蹤子宮大小。',
    owner_communication: '子宮蓄膿是嚴重且可能致命的疾病。OHE 是最安全有效的治療方式。術前需告知：手術風險因全身毒血症而比一般 OHE 高、可能需要 ICU 住院 1-3 天、費用估算。若飼主有繁殖需求且病例穩定，可討論內科治療方案，但需充分告知復發風險。最重要的預防方式是早期絕育。',
  },
  diagnostic_data: null,
  procedure_data: null,
  visual_placeholders: [
    { position: '診斷段落', type: 'annotated_image', description: '子宮蓄膿腹部超音波影像標示圖' },
    { position: '手術段落前', type: 'comparison_table', description: '開放型 vs 封閉型子宮蓄膿比較表' },
  ],
  interactive_placeholders: [
    { position: '治療段落後', type: 'decision_tree', description: '手術 vs 內科治療決策樹' },
  ],
  drug_api_links: ['Aglepristone', 'Dinoprost', 'Ampicillin', 'Enrofloxacin', 'Metronidazole'],
  references: [
    { type: 'journal', citation: 'Jitpean S et al. Outcome of pyometra in female dogs and predictors of peritonitis and prolonged postoperative hospitalization in surgically treated cases. BMC Vet Res. 2014;10:6.', relevance: '子宮蓄膿預後因子與手術結果的大型研究' },
    { type: 'textbook', citation: 'Fossum TW. Small Animal Surgery, 5th ed. Elsevier, 2019. Chapter 26: Surgery of the Reproductive and Genital Systems.', relevance: '子宮蓄膿手術技術標準教材' },
    { type: 'journal', citation: 'Hagman R. Pyometra in Small Animals. Vet Clin North Am Small Anim Pract. 2018;48(2):339-372.', relevance: '子宮蓄膿最新綜述文章' },
    { type: 'journal', citation: 'Gobello C et al. A study of two protocols combining aglepristone and cloprostenol to treat open cervix pyometra in the bitch. Theriogenology. 2003;60(5):901-908.', relevance: '內科治療方案（Aglepristone + PG）的臨床研究' },
    { type: 'guideline', citation: 'BSAVA Manual of Canine and Feline Abdominal Surgery, 2nd ed. Bray J, Kirby B, eds. BSAVA, 2021. Chapter: Uterine Surgery.', relevance: '子宮蓄膿 OHE 手術實務指引' },
  ],
  is_current: true,
  created_at: now,
};

/** 脾臟腫瘤 (Splenic Neoplasia) — 疾病型 */
const contentSplenicNeoplasia: NodeContent = {
  id: 'CONTENT-SURG-L3-002',
  node_id: 'SURG-L3-002',
  version: 1,
  summary: '犬脾臟腫瘤為臨床常見的腹腔腫塊，約 2/3 為惡性，其中血管肉瘤（hemangiosarcoma, HSA）占 45-51%。患犬常因脾臟腫塊破裂導致急性腹腔出血而就診。診斷依賴腹部超音波與 AFAST，確診需組織病理學。脾臟切除術（splenectomy）為主要治療方式，但 HSA 預後極差，中位存活僅 1-3 個月（未化療）。良性腫瘤（如血腫、結節性增生）切除後預後良好。',
  learning_objectives: [
    '列舉犬脾臟腫塊最常見的良性與惡性病因',
    '描述脾臟腫塊破裂的急診處理流程',
    '說明脾臟切除術的手術要點與血管結紮技術',
    '比較 HSA 與良性脾臟腫塊的預後差異',
    '運用影像學與臨床病理初步區分良惡性脾臟腫塊',
  ],
  key_points: [
    '犬脾臟腫塊約 2/3 為惡性，其中 HSA 占約 50%',
    '良性病因：血腫（hematoma）、結節性增生（nodular hyperplasia）、血管瘤（hemangioma）',
    '急性腹腔出血為最常見就診原因，需快速穩定化與輸血',
    '超音波無法可靠區分良惡性——術前不應僅憑超音波決定預後',
    'AFAST（腹部重點超音波）可快速偵測腹腔積液',
    '脾臟切除術需仔細結紮脾門血管（短胃動脈、脾動脈分支）',
    'HSA 脾臟切除後中位存活 1-3 個月，合併 doxorubicin 化療可延長至 5-7 個月',
  ],
  body: `# 脾臟腫瘤 (Splenic Neoplasia)

## 一、病理機制 (Pathophysiology)



### 概述
脾臟腫塊是犬腹腔手術中最常見的適應症之一。雖然統計上約 2/3 為惡性，但良性病變（血腫、結節性增生）也相當常見。由於超音波無法可靠區分良惡性，所有有意義的脾臟腫塊均建議手術切除並送病理檢查。

### 病因分類
| 類別 | 常見病因 | 占比 |
|------|---------|------|
| 惡性腫瘤 | 血管肉瘤（HSA）、纖維肉瘤、淋巴瘤、肥大細胞腫瘤 | ~65% |
| 良性腫瘤 | 血管瘤、脂肪瘤 | ~10% |
| 非腫瘤性 | 血腫、結節性增生、脾扭轉 | ~25% |

### 手術——脾臟切除術
[互動:脾臟切除術步驟流程]

1. 正中開腹，腹腔探查
2. 輕柔地將脾臟提出腹腔
3. 從脾門開始，逐一雙重結紮或使用 LigaSure 封閉短胃動脈與脾動脈各分支
4. 確認無活動性出血後移除脾臟
5. 腹腔探查肝臟與其他臟器有無轉移病灶
6. 所有切除組織送病理

### 術後管理
- ECG 監測（HSA 可能合併心律不整）
- PCV/TS 每 4-6 小時追蹤
- 輸血支持（目標 PCV > 25%）
- 病理結果回報後決定後續治療

## 二、臨床表現與診斷 (Clinical Signs & Diagnosis)

### 臨床表現
[圖片:脾臟腫塊破裂犬的急診外觀——腹部膨脹蒼白黏膜]

臨床表現取決於腫塊是否破裂：
- **未破裂**：可能無症狀，偶然在健康檢查或其他原因超音波時發現
- **破裂出血**：急性虛弱、蒼白黏膜、心搏過速、腹部膨脹、CRT 延長、低血壓

### 診斷
- **AFAST**：急診快速評估腹腔積液，陽性提示腹腔出血
- **腹部超音波**：評估脾臟腫塊大小、回音特徵、是否有肝臟轉移
- **胸腔 X 光**：評估肺轉移（HSA 肺轉移率高）
- **CBC/生化/凝血**：評估貧血程度、DIC 指標
- **心臟超音波**：HSA 可能同時侵犯右心房（約 25%）

⚠ 超音波上脾臟腫塊的回音特徵無法可靠區分良惡性，FNA 對 HSA 的診斷準確率也有限。

## 三、治療策略 (Treatment)

## 四、併發症與監控 (Complications & Monitoring)

## 五、預後與預後因子 (Prognosis)

## 六、人醫借鑒 (Translational Insights)

| 人醫工具/概念 | 獸醫應用潛力 | 現況 |
|-------------|-------------|------|
| 腹腔鏡/內視鏡微創手術 | 犬 GDV 預防性胃固定術腹腔鏡化 | 獸醫微創外科快速發展中 |
| 術中血管吻合技術（如 OPSI shunt） | 門靜脈分流手術的微創化趨勢 | 少數轉介中心可執行 |
| 生物補片（biologic mesh） | 犬腹壁缺損/會陰疝修復的生物材料替代合成 | 獸醫使用經驗增加中 |
| 手術部位感染（SSI）監控 bundle | 獸醫外科感染率追蹤與品質改善 | 人醫 WHO SSI bundle 廣泛推行，獸醫開始建立 |

## 七、臨床爭議與知識空缺 (Controversies & Knowledge Gaps)

| 爭議議題 | 現況 | Evidence Level |
|---------|------|---------------|
| 犬 TPLO vs TTA vs 側副韌帶穩定術治療 CCL 斷裂 | 大型犬 TPLO 為主流但 TTA 同等級證據，小型犬側副韌帶穩定術仍有支持者 | Level I |
| 犬 GDV 預防性胃固定術適應症 | 大型犬/深胸犬是否應常規預防性胃固定仍有爭議 | Level III |
| 犬脾臟腫塊的術前活檢價值 | 脾臟 FNA 的診斷敏感度/出血風險的風險效益分析 | Level III |
| 犬貓 OVE vs OVH | 歐洲傾向 OVE（微創、術後疼痛少），美洲傳統 OVH——長期子宮殘端併發症證據不足 | Level II |`,
  clinical_pearl: '「double 2/3 rule」是脾臟腫塊的實用記憶法：犬脾臟腫塊約 2/3 為惡性，而惡性腫塊中約 2/3 為 HSA。但這個比例在不同研究系列中有差異（某些系列良性比例可達 50%），因此不應在術前僅憑統計數據放棄手術——許多犬的脾臟腫塊為可治癒的良性病變。\n\n【台灣流行病學】脾臟腫塊在台灣中老年大型犬中並不罕見，好發品種如金毛獵犬、德國牧羊犬在台灣飼養數量多。台灣獸醫腹部超音波篩檢普及率高，脾臟腫塊常在健檢時偶然發現。台灣臨床上脾臟 HSA 的比例與國際報告相近，建議中老年大型犬定期腹部超音波追蹤。',
  common_mistakes: [
    '僅憑超音波外觀判斷良惡性而放棄手術（超音波無法可靠區分）',
    '脾臟破裂出血病例未先穩定化即急於手術（需先輸液/輸血穩定血壓）',
    '術中未探查肝臟與右心房（HSA 常見轉移部位）',
    '未送組織病理——脾臟切除後必須確認病理診斷以決定後續治療',
    '對所有脾臟 HSA 病例給予過於悲觀的預後——合併化療仍有部分病例存活超過 1 年',
  ],
  disease_data: {
    signalment: '好發於中大型犬，中位年齡 9-11 歲。HSA 高風險品種：德國牧羊犬、黃金獵犬、拉布拉多。良性病變（結節性增生、血腫）同樣好發於老年犬。貓脾臟腫瘤較少見，但以肥大細胞腫瘤與淋巴瘤為主。',
    etiology: '犬脾臟 HSA 的確切病因不明，可能與遺傳易感性、血管內皮細胞基因突變相關。良性結節性增生與血腫為老年性變化，非腫瘤性。',
    pathogenesis: '血管內皮細胞惡性轉化（HSA）→ 富含血管的腫瘤形成 → 腫瘤壁薄、脆弱 → 自發性破裂 → 急性腹腔出血 → 低血容量性休克。HSA 具有高度轉移傾向，好發部位為肝臟、大網膜、肺臟與右心房。',
    clinical_signs: [
      { sign: '急性虛弱/昏倒', category: 'primary', description: '脾臟腫塊破裂出血導致急性低血容量，為最常見就診原因' },
      { sign: '蒼白黏膜', category: 'primary', description: '急性失血性貧血，PCV 可低至 10-15%' },
      { sign: '腹部膨脹', category: 'primary', description: '腹腔積血導致腹圍增加，波動感陽性' },
      { sign: '心搏過速', category: 'secondary', description: '代償性心率增加，通常 > 160 bpm' },
      { sign: '食慾下降/體重減輕', category: 'secondary', description: '慢性病程中可見，尤其 HSA 合併轉移時' },
    ],
    staging: null,
    differential_diagnosis: [
      { condition: '脾扭轉', key_differentiator: '超音波可見脾臟瀰漫性腫大、C 形變形，多普勒無血流訊號' },
      { condition: '肝臟腫瘤破裂', key_differentiator: '超音波定位腫塊來源為肝臟而非脾臟' },
      { condition: '腹腔其他出血源（腎上腺腫瘤等）', key_differentiator: '超音波全面探查定位出血來源' },
      { condition: '凝血障礙（中毒性、免疫性）', key_differentiator: '凝血功能異常（PT/aPTT 延長），無明確腫塊，可能有皮膚瘀斑' },
    ],
    diagnostic_workup: '1. 急診穩定化（輸液/輸血）→ 2. AFAST 確認腹腔積液 → 3. 腹部超音波（脾臟腫塊特徵、肝臟轉移評估）→ 4. CBC/生化/凝血功能 → 5. 三視角胸腔 X 光（肺轉移）→ 6. 心臟超音波（右心房腫塊排除）→ 7. 腹腔積液細胞學（可見有核紅血球或腫瘤細胞，但敏感度有限）',
    treatment_protocol: '手術：脾臟切除術為首選。術前穩定化包括晶體液復甦與必要時輸血（pRBC 或全血）。術中仔細結紮脾門血管，探查腹腔有無轉移。術後依病理結果：良性——無需進一步治療；HSA——建議 [藥物:Doxorubicin] 為基礎的化療方案（15-30 mg/m² IV q3w，共 5-6 次）。Primary care：穩定化、輸血、轉診。Specialty care：脾臟切除術 + 腹腔探查 + 依病理決定化療方案。',
    prognosis: '良性脾臟腫塊（血腫、結節性增生）：脾切後預後良好，長期存活。HSA 僅脾切：中位存活 1-3 個月。HSA 脾切 + doxorubicin 化療：中位存活 5-7 個月。HSA 合併右心房腫塊或 DIC：預後極差。脾臟 I 期 HSA（未破裂、無轉移）預後較佳，中位存活可達 6-9 個月。',
    monitoring: '術後 24-48 小時：PCV/TS q4-6h、ECG 監測。出院後：2 週回診確認切口癒合與病理結果。HSA 病例：每月胸腔 X 光與腹部超音波追蹤轉移。化療期間：每次給藥前 CBC 確認嗜中性球計數。',
    owner_communication: '脾臟腫塊需手術切除以止血並獲得確診。術前無法確定良惡性，需等待病理報告（通常 5-7 個工作天）。若為良性，手術即為治癒性。若為 HSA，需討論化療方案——化療可改善生活品質與延長存活時間，但無法治癒。費用估算：手術 + ICU + 輸血 + 病理。建議在等待病理結果期間保持樂觀但做好兩手準備。',
  },
  diagnostic_data: null,
  procedure_data: null,
  visual_placeholders: [
    { position: '臨床表現段落前', type: 'annotated_image', description: '脾臟腫塊急診犬外觀與 AFAST 陽性影像' },
    { position: '手術段落', type: 'flowchart', description: '脾臟切除術步驟與血管結紮示意圖' },
  ],
  interactive_placeholders: [
    { position: '手術段落', type: 'decision_tree', description: '脾臟腫塊處理流程互動決策圖' },
  ],
  drug_api_links: ['Doxorubicin'],
  references: [
    { type: 'journal', citation: 'Spangler WL, Culbertson MR. Prevalence, type, and importance of splenic diseases in dogs: 1,480 cases (1985-1989). J Am Vet Med Assoc. 1992;200(6):829-834.', relevance: '犬脾臟腫塊流行病學經典研究' },
    { type: 'textbook', citation: 'Fossum TW. Small Animal Surgery, 5th ed. Elsevier, 2019. Chapter 24: Surgery of the Hemolymphatic System.', relevance: '脾臟切除術技術標準教材' },
    { type: 'journal', citation: 'Wendelburg KM et al. Evaluation of a novel predictive model for splenic masses in dogs: 140 cases. J Am Vet Med Assoc. 2015;246(12):1338-1344.', relevance: '脾臟腫塊良惡性預測模型研究' },
    { type: 'guideline', citation: 'Clifford CA et al. Treatment of canine hemangiosarcoma: 2000 and beyond. J Vet Intern Med. 2000;14(5):479-485.', relevance: 'HSA 化療方案與預後文獻' },
  ],
  is_current: true,
  created_at: now,
};

/** 腸道異物 (GI Foreign Body) — 疾病型 */
const contentGIForeignBody: NodeContent = {
  id: 'CONTENT-SURG-L3-003',
  node_id: 'SURG-L3-003',
  version: 1,
  summary: '消化道異物為犬貓常見的外科急診，犬好發於幼犬（< 3 歲），貓以線狀異物（linear foreign body）最具特色。異物可停留於食道、胃或腸道，引起機械性阻塞、黏膜損傷甚至穿孔與腹膜炎。診斷依靠 X 光（不透光異物）與超音波（非透光異物），治療以內視鏡取出或手術（胃切開/腸切開/腸切除吻合）為主。及時手術的存活率超過 90%，延遲導致腸壞死或穿孔則死亡率顯著上升。',
  learning_objectives: [
    '辨識消化道異物的常見類型與好發位置',
    '運用 X 光與超音波診斷消化道異物',
    '區分可內視鏡處理與需手術處理的病例',
    '描述胃切開術與腸切開術的手術要點',
    '判斷腸道活性以決定是否需要腸切除吻合',
  ],
  key_points: [
    '犬最常見異物：骨頭、玩具、襪子、玉米芯、水果核',
    '貓最常見：線狀異物（縫線、毛線、繩子）——舌下固定後線體穿過幽門至小腸',
    '線狀異物是最危險的類型——腸道沿線體皺縮（plication），易造成多處腸壁穿孔',
    '三視角腹部 X 光：尋找不透光異物、腸道擴張模式、游離氣體（穿孔證據）',
    '超音波可偵測非透光異物，並評估腸蠕動與腸壁完整性',
    '手術決策：胃異物可考慮內視鏡；腸道阻塞或線狀異物需手術',
    '腸切除吻合指征：腸壁壞死、穿孔或嚴重損傷的腸段',
  ],
  body: `# 腸道異物 (GI Foreign Body)

## 一、病理機制 (Pathophysiology)



### 概述
消化道異物在犬貓臨床實務中極為常見，犬占急診手術的重要比例。幼犬因好奇心旺盛、咀嚼行為頻繁而為最高風險群。貓的線狀異物則是獸醫外科獨特且危險的病態。

### 異物分類
| 類型 | 常見物品 | 好發物種 |
|------|---------|---------|
| 不透光 | 骨頭、金屬、石頭 | 犬 |
| 非透光 | 玩具、布料、襪子 | 犬 |
| 線狀 | 縫線、毛線、聖誕飾品 | 貓 > 犬 |
| 食物性 | 玉米芯、水果核、栗子 | 犬 |

### 病理機轉
異物依停留位置產生不同效應：
1. **食道異物**：黏膜壓迫壞死 → 食道穿孔 → 縱隔炎/膿胸
2. **胃異物**：幽門阻塞 → 持續嘔吐 → 脫水與電解質異常（低氯低鉀代謝性鹼中毒）
3. **腸道異物**：完全或部分阻塞 → 近端腸道擴張 → 腸壁缺血 → 穿孔 → 腹膜炎
4. **線狀異物**：固定端（常在舌下或幽門）→ 遠端腸蠕動沿線體皺縮 → 腸繫膜面多處鋸切穿孔

[圖片:線狀異物導致腸道 plication 示意圖]

## 二、臨床表現與診斷 (Clinical Signs & Diagnosis)

### 診斷
- **三視角腹部 X 光**：不透光異物直接可見；阻塞性模式（近端腸道擴張、遠端氣體減少）；游離腹腔氣體提示穿孔
- **腹部超音波**：偵測非透光異物的反射影、腸道擴張、腸壁增厚、腹腔積液
- **線狀異物超音波特徵**：腸道皺縮（plication）、「accordion sign」
- **對比攝影**：液態 barium 或水溶性對比劑可輔助診斷（但疑似穿孔時禁用 barium）

## 三、治療策略 (Treatment)

### 治療
### 內視鏡取出
適用於食道異物與部分胃異物（光滑、非尖銳、大小可通過食道）

### 手術

**胃切開術（Gastrotomy）**：
- 胃體或幽門竇切開取出異物
- 兩層縫合關閉（全層 + 漿膜肌層或連續加固）

**腸切開術（Enterotomy）**：
- 在異物最膨大處或稍遠端的健康腸壁切開
- 在腸繫膜對側面（antimesenteric border）切開
- 單層全層縫合或兩層縫合

**腸切除吻合（Resection & Anastomosis）**：
- 適用於腸壁壞死或穿孔的腸段
- 切除壞死腸段，兩端以單層全層端對端吻合
- 確保吻合處無張力且血供良好

[互動:腸道活性評估決策——切開 vs 切除吻合]

## 四、併發症與監控 (Complications & Monitoring)

## 五、預後與預後因子 (Prognosis)

## 六、人醫借鑒 (Translational Insights)

| 人醫工具/概念 | 獸醫應用潛力 | 現況 |
|-------------|-------------|------|
| 腹腔鏡/內視鏡微創手術 | 犬 GDV 預防性胃固定術腹腔鏡化 | 獸醫微創外科快速發展中 |
| 術中血管吻合技術（如 OPSI shunt） | 門靜脈分流手術的微創化趨勢 | 少數轉介中心可執行 |
| 生物補片（biologic mesh） | 犬腹壁缺損/會陰疝修復的生物材料替代合成 | 獸醫使用經驗增加中 |
| 手術部位感染（SSI）監控 bundle | 獸醫外科感染率追蹤與品質改善 | 人醫 WHO SSI bundle 廣泛推行，獸醫開始建立 |

## 七、臨床爭議與知識空缺 (Controversies & Knowledge Gaps)

| 爭議議題 | 現況 | Evidence Level |
|---------|------|---------------|
| 犬 TPLO vs TTA vs 側副韌帶穩定術治療 CCL 斷裂 | 大型犬 TPLO 為主流但 TTA 同等級證據，小型犬側副韌帶穩定術仍有支持者 | Level I |
| 犬 GDV 預防性胃固定術適應症 | 大型犬/深胸犬是否應常規預防性胃固定仍有爭議 | Level III |
| 犬脾臟腫塊的術前活檢價值 | 脾臟 FNA 的診斷敏感度/出血風險的風險效益分析 | Level III |
| 犬貓 OVE vs OVH | 歐洲傾向 OVE（微創、術後疼痛少），美洲傳統 OVH——長期子宮殘端併發症證據不足 | Level II |`,
  clinical_pearl: '線狀異物是最危險的消化道異物類型。檢查時務必翻開貓的舌頭看舌下——線狀異物常在舌根繞結。發現線狀異物時絕對不可從口腔端拉出，因為線體已造成腸壁鋸切，拉動會加重穿孔。手術中可能需要多處腸切開（multiple enterotomies）沿線體逐段移除。\n\n【台灣流行病學】消化道異物在台灣為常見外科急症，尤其好發於幼犬與好奇心強的品種（如拉布拉多、法國鬥牛犬）。台灣飼主居家環境中常見的異物來源包括塑膠袋、橡膠玩具、骨頭碎片、線狀物（貓尤其好發）。貓的線狀異物在台灣臨床極為常見，與室內飼養貓接觸縫線、橡皮筋等有關。台灣獸醫院內視鏡取物技術日趨成熟，但腸道穿孔病例仍需緊急開腹手術。',
  common_mistakes: [
    '僅拍一張 X 光——需三視角（VD + 兩側臥位）完整評估',
    '非透光異物（布料、塑膠）X 光正常就排除異物——應追加超音波',
    '試圖從口腔拉出線狀異物（會加重腸壁穿孔）',
    '腸切開時在腸繫膜面（mesenteric border）切開——此處血供較差，應在 antimesenteric border 切開',
    '未評估腸道活性就關腹——壞死腸段未切除會導致術後洩漏與腹膜炎',
  ],
  disease_data: {
    signalment: '犬：好發於幼犬至年輕成犬（< 3 歲），所有品種，雄性略多。貓：任何年齡，長毛貓（線狀異物）略多。小型犬與玩具犬也因嘴小但好奇心強而常見。',
    etiology: '口攝不可消化物體。犬常見原因：探索行為、pica（異食癖）、食物防禦行為（快速吞食）。貓線狀異物：玩耍中吞入縫線、毛線、包裝帶。',
    pathogenesis: '異物通過或停留於消化道 → 機械性阻塞（完全或部分）→ 近端擴張 → 腸壁血供受損 → 黏膜壞死 → 細菌移轉 → 穿孔 → 腹膜炎與敗血症。線狀異物額外機轉：腸蠕動沿固定線體推進 → 腸道皺縮（plication）→ 線體在腸繫膜面鋸切 → 多處穿孔。',
    clinical_signs: [
      { sign: '嘔吐', category: 'primary', description: '反覆嘔吐為最典型症狀，高位阻塞嘔吐頻繁且含膽汁，低位阻塞嘔吐較晚出現' },
      { sign: '食慾廢絕', category: 'primary', description: '進行性食慾下降，部分阻塞初期可能仍有食慾' },
      { sign: '腹痛', category: 'primary', description: '觸診腹部疼痛，可能觸到腫塊感（胃內異物或皺縮腸段）' },
      { sign: '脫水與精神沉鬱', category: 'secondary', description: '持續嘔吐與無法進食導致脫水，電解質失衡' },
      { sign: '排便減少/停止', category: 'secondary', description: '完全阻塞時排便停止，部分阻塞可能仍有少量排便或腹瀉' },
    ],
    staging: null,
    differential_diagnosis: [
      { condition: '腸套疊', key_differentiator: '超音波可見「target sign」（同心圓樣結構），觸診腹部可能觸到臘腸樣腫塊' },
      { condition: '胰臟炎', key_differentiator: '嘔吐伴 cPLI/Spec cPL 升高，超音波可見胰臟周圍脂肪高回音，無阻塞模式' },
      { condition: '腸道腫瘤', key_differentiator: '老年動物，慢性漸進性症狀，超音波可見腸壁增厚或腫塊' },
      { condition: '幽門狹窄或功能性梗阻', key_differentiator: '慢性嘔吐病程，對比攝影可見胃排空延遲而無異物影' },
    ],
    diagnostic_workup: '1. 病史（是否有吞入異物的可能性或目擊）→ 2. 理學檢查（口腔/舌下檢查、腹部觸診）→ 3. 三視角腹部 X 光 → 4. 腹部超音波（尤其非透光異物）→ 5. CBC/生化/電解質/血氣 → 6. 穩定後手術探查或內視鏡',
    treatment_protocol: '內視鏡取出（食道/胃異物且形狀合適）或手術。術前穩定化：矯正脫水與電解質異常（尤其低鉀低氯）、止吐（[藥物:Maropitant] 1 mg/kg IV SID）、廣效抗生素（如有穿孔跡象）。手術：依異物位置與腸道活性選擇胃切開、腸切開或腸切除吻合。線狀異物可能需要多處腸切開。術後 NPO 12-24 小時，少量多餐流質食物開始。Primary care：穩定化、診斷、單純胃異物可嘗試內視鏡；複雜病例轉診。Specialty care：手術探查與處理。',
    prognosis: '及時手術、腸道活性良好：存活率 > 90%。腸切除吻合病例：存活率 80-85%。合併腹膜炎：存活率降至 50-74%。線狀異物合併多處穿孔：預後較差。延遲就醫（> 48-72 小時）顯著增加併發症與死亡率。',
    monitoring: '術後 24-48 小時監測體溫、食慾、嘔吐與否。術後 72 小時內腹膜炎風險最高——注意發熱、腹痛加劇、白血球升高。2 週回診確認切口癒合。腸切除吻合病例需注意狹窄（stricture）風險。',
    owner_communication: '消化道異物需及時手術處理，延遲可能導致腸壞死與腹膜炎。手術費用估算需包含可能的腸切除。線狀異物手術複雜度與費用較高。預防：避免讓寵物接觸可吞入的小物件、縫線、毛線等。術後需限制活動 10-14 天。',
  },
  diagnostic_data: null,
  procedure_data: null,
  visual_placeholders: [
    { position: '病理機轉段落', type: 'annotated_image', description: '線狀異物腸道 plication 示意圖' },
    { position: '診斷段落', type: 'annotated_image', description: '腸阻塞 X 光與超音波影像對照' },
    { position: '手術段落', type: 'flowchart', description: '腸道異物手術決策流程圖' },
  ],
  interactive_placeholders: [
    { position: '手術段落後', type: 'decision_tree', description: '腸道活性評估與手術方式選擇互動決策圖' },
  ],
  drug_api_links: ['Maropitant', 'Metoclopramide', 'Ampicillin'],
  references: [
    { type: 'textbook', citation: 'Fossum TW. Small Animal Surgery, 5th ed. Elsevier, 2019. Chapter 20: Surgery of the Digestive System.', relevance: '消化道異物手術技術標準教材' },
    { type: 'journal', citation: 'Hayes G. Gastrointestinal foreign bodies in dogs and cats: a retrospective study of 208 cases. J Small Anim Pract. 2009;50(11):576-583.', relevance: '犬貓消化道異物回顧性研究' },
    { type: 'journal', citation: 'Hobday MM et al. Linear foreign body syndrome in 66 cats. J Am Vet Med Assoc. 2014;245(5):571-579.', relevance: '貓線狀異物的大型回顧性研究' },
    { type: 'guideline', citation: 'ACVS Surgical Summit Proceedings: Gastrointestinal Surgery Updates. 2021.', relevance: '消化道手術最新技術更新' },
  ],
  is_current: true,
  created_at: now,
};

/** 十字韌帶斷裂 (CCLD) — 疾病型 */
const contentCCLD: NodeContent = {
  id: 'CONTENT-SURG-L3-004',
  node_id: 'SURG-L3-004',
  version: 1,
  summary: '顱側十字韌帶疾病（Cranial Cruciate Ligament Disease, CCLD）是犬最常見的後肢跛行原因之一，也是犬骨科手術中最常執行的手術。CCLD 在犬為退化性疾病而非單純創傷性斷裂，約 40-60% 的病例最終雙側發生。診斷依靠 cranial drawer test 與 tibial thrust test，手術治療以 TPLO 或 TTA 等生物力學矯正術為主流，中大型犬術後預後良好（90-95% 臨床功能改善）。',
  learning_objectives: [
    '描述犬 CCLD 的退化性病理機轉',
    '執行 cranial drawer test 與 tibial thrust test',
    '比較 TPLO、TTA 與關節外穩定術的適應症與優缺點',
    '辨識 CCLD 合併半月板損傷的臨床意義',
    '制定 CCLD 病例的術後復健計畫',
  ],
  key_points: [
    '犬 CCLD 為退化性疾病，非如人類 ACL 般單純外傷性斷裂',
    '好發品種：拉布拉多、黃金獵犬、羅威納、紐芬蘭犬',
    '40-60% 病例在對側膝關節也會發生 CCLD（通常 1-2 年內）',
    '診斷金標準：cranial drawer sign 陽性（清醒或鎮靜下執行）',
    'TPLO（Tibial Plateau Leveling Osteotomy）為目前最廣泛使用的術式',
    '半月板損傷（主要為內側半月板）伴隨率約 40-60%',
    '肥胖為最重要的可控風險因子——術前減重可改善預後',
  ],
  body: `# 十字韌帶斷裂 (CCLD)

## 一、病理機制 (Pathophysiology)



### 概述
CCLD 是犬最常見的骨科疾病之一，每年在美國造成超過 10 億美元的獸醫費用。與人類 ACL 損傷不同，犬的 CCLD 主要為慢性退化性病變，雖然急性惡化可能被誤認為創傷事件。

### 病理機轉
犬 CCLD 的發展為多因子過程：
1. **韌帶退化**：免疫介導性關節炎、遺傳易感性 → 韌帶纖維退化
2. **生物力學因素**：後脛骨平台角（TPA）過陡 → 脛骨前推力增加
3. **體重與肥胖**：過重增加膝關節負載
4. **部分斷裂 → 完全斷裂**：常為漸進過程

韌帶斷裂後：
- 脛骨前移（cranial tibial subluxation）
- 關節不穩定 → 慢性骨關節炎
- 內側半月板夾擠損傷（bucket-handle tear）

## 二、臨床表現與診斷 (Clinical Signs & Diagnosis)

### 診斷
[圖片:Cranial drawer test 與 tibial thrust test 操作示意圖]

### 理學檢查
- **Cranial drawer test**：一手固定股骨遠端，一手推脛骨近端向前——陽性表示韌帶斷裂
- **Tibial thrust test**：屈曲跗關節同時觀察脛骨是否前移——偵測功能性不穩定
- 關節積液（joint effusion）可透過觸診偵測（「medial buttress」增厚）
- 部分斷裂時 drawer 可能僅在屈曲位陽性

### 影像學
- X 光：關節積液、骨關節炎變化、脛骨平台角測量
- CT/MRI：可用於確認部分斷裂與半月板損傷（但通常不需要）

## 三、治療策略 (Treatment)

### 治療
### 手術治療（中大型犬首選）

**TPLO（Tibial Plateau Leveling Osteotomy）**：
- 原理：改變脛骨平台角度（目標 TPA 約 5-6.5 度），消除脛骨前推力
- 適應症：所有體重的犬，尤其 > 15 kg
- 功能恢復率 > 90%

**TTA（Tibial Tuberosity Advancement）**：
- 原理：將脛骨粗隆前移，使股四頭肌-膝蓋骨肌腱力矩角 ≤ 90 度
- 適用於 TPA 較低（< 25 度）的病例

**關節外穩定術（Extracapsular Lateral Suture, ECLS）**：
- 適用於小型犬（< 15 kg）
- 使用 Nylon leader 或 suture button 系統
- 原理：關節外限制脛骨前移

### 保守治療
- 僅適用於 < 10 kg 且配合度良好的病例
- 限制活動 8-12 週 + NSAIDs + 減重 + 復健

[互動:CCLD 術式選擇決策樹]

## 四、併發症與監控 (Complications & Monitoring)

## 五、預後與預後因子 (Prognosis)

## 六、人醫借鑒 (Translational Insights)

| 人醫工具/概念 | 獸醫應用潛力 | 現況 |
|-------------|-------------|------|
| 腹腔鏡/內視鏡微創手術 | 犬 GDV 預防性胃固定術腹腔鏡化 | 獸醫微創外科快速發展中 |
| 術中血管吻合技術（如 OPSI shunt） | 門靜脈分流手術的微創化趨勢 | 少數轉介中心可執行 |
| 生物補片（biologic mesh） | 犬腹壁缺損/會陰疝修復的生物材料替代合成 | 獸醫使用經驗增加中 |
| 手術部位感染（SSI）監控 bundle | 獸醫外科感染率追蹤與品質改善 | 人醫 WHO SSI bundle 廣泛推行，獸醫開始建立 |

## 七、臨床爭議與知識空缺 (Controversies & Knowledge Gaps)

| 爭議議題 | 現況 | Evidence Level |
|---------|------|---------------|
| 犬 TPLO vs TTA vs 側副韌帶穩定術治療 CCL 斷裂 | 大型犬 TPLO 為主流但 TTA 同等級證據，小型犬側副韌帶穩定術仍有支持者 | Level I |
| 犬 GDV 預防性胃固定術適應症 | 大型犬/深胸犬是否應常規預防性胃固定仍有爭議 | Level III |
| 犬脾臟腫塊的術前活檢價值 | 脾臟 FNA 的診斷敏感度/出血風險的風險效益分析 | Level III |
| 犬貓 OVE vs OVH | 歐洲傾向 OVE（微創、術後疼痛少），美洲傳統 OVH——長期子宮殘端併發症證據不足 | Level II |`,
  clinical_pearl: '執行 cranial drawer test 時，部分斷裂的病例在完全伸展位可能是陰性的，但在屈曲 20-30 度時會出現陽性——這是因為完全伸展時內側副韌帶與關節囊提供部分穩定。同時注意 tibial thrust test 在肥胖犬或肌肉緊張的犬中比 drawer test 更容易偵測到不穩定。\n\n【台灣流行病學】前十字韌帶疾病（CCLD）在台灣大型犬中為常見骨科問題，拉布拉多與黃金獵犬為好發品種。近年台灣 TPLO 手術技術推廣迅速，多家專科動物醫院已具備 TPLO 能力。台灣小型犬 CCLD 常合併膝蓋骨內側脫位（MPL），需一併評估處理。犬隻肥胖在台灣盛行，為 CCLD 的重要風險因子。',
  common_mistakes: [
    '將犬 CCLD 視為單純創傷而非退化性疾病（影響飼主衛教與對側膝關節預防）',
    '未在鎮靜下確認 drawer sign（肌肉緊張的病例清醒下可能假陰性）',
    '小型犬一律建議 TPLO（< 15 kg 的犬 ECLS 效果良好且費用較低）',
    '術中未評估半月板（40-60% 伴隨內側半月板損傷，需探查處理）',
    '忽略術後復健——未執行復健的病例功能恢復較慢且骨關節炎進展更快',
  ],
  disease_data: {
    signalment: '好發於中大型犬，中位年齡 5-7 歲。高風險品種：拉布拉多、黃金獵犬、羅威納、紐芬蘭犬、聖伯納、美國斯塔福郡梗。肥胖犬風險顯著增加。已絕育犬比未絕育犬風險稍高（與肥胖傾向可能相關）。小型犬也可發生，但發生年齡通常較晚。',
    etiology: '多因子退化性疾病。因素包括：遺傳易感性（品種傾向）、免疫介導性關節炎、脛骨平台角過陡、肥胖、關節構型異常、反覆微創傷。早期絕育可能因影響骨骼發育而增加風險。',
    pathogenesis: '韌帶基質退化（膠原纖維變性、細胞凋亡、軟骨化生）→ 部分斷裂 → 完全斷裂 → 脛骨前移與旋轉不穩定 → 內側半月板夾擠損傷 → 慢性骨關節炎。關節滑液 TNF-alpha、IL-1beta 等發炎因子升高促進退化過程。',
    clinical_signs: [
      { sign: '後肢跛行', category: 'primary', description: '急性惡化型為突發嚴重跛行，慢性型為漸進性加重的輕度至中度跛行' },
      { sign: '坐姿異常', category: 'primary', description: '患犬坐下時患肢外展伸直（sit test 陽性），避免屈曲膝關節' },
      { sign: '關節積液', category: 'primary', description: '觸診膝關節可感覺「medial buttress」——內側關節囊增厚與積液' },
      { sign: '肌肉萎縮', category: 'secondary', description: '慢性病例患肢股四頭肌萎縮，與健側比較明顯' },
      { sign: '活動力下降', category: 'secondary', description: '不願跳躍、上下階梯困難、散步距離縮短' },
    ],
    staging: null,
    differential_diagnosis: [
      { condition: '膝蓋骨脫位', key_differentiator: '觸診可感覺膝蓋骨異位，drawer test 通常陰性（除非合併 CCLD）' },
      { condition: '半月板損傷（單獨）', key_differentiator: '少見於犬，通常繼發於 CCLD；drawer test 陰性但可能有 McMurray sign' },
      { condition: '髖關節發育不全', key_differentiator: '後肢跛行但疼痛定位於髖部，Ortolani test 陽性，膝關節穩定' },
      { condition: '免疫介導性多關節炎', key_differentiator: '多關節受累、發燒、關節液分析嗜中性球升高、drawer test 陰性' },
    ],
    diagnostic_workup: '1. 步態分析（辨識跛行肢）→ 2. 整形外科檢查（sit test、drawer test、tibial thrust test）→ 3. 鎮靜下膝關節評估（確認 drawer sign + 半月板 click）→ 4. 膝關節 X 光（VHS 關節積液評估 + 骨關節炎分級 + TPA 測量）→ 5. 對側膝關節同步評估 → 6. 基礎血檢（術前評估）',
    treatment_protocol: '> 15 kg 犬首選 TPLO。< 15 kg 犬可選 ECLS 或 TPLO。術中必須探查半月板——損傷者行部分半月板切除。保守治療僅適用於 < 10 kg 配合度良好者：限制活動 8-12 週 + [藥物:Carprofen] 4.4 mg/kg PO SID 或 [藥物:Meloxicam] 0.1 mg/kg PO SID + 減重至理想體重 + 術後物理復健。Primary care：確診、止痛、討論手術選項、轉診。Specialty care：TPLO/TTA + 半月板評估 + 術後復健計畫。',
    prognosis: 'TPLO 術後功能恢復良好至優良（> 90%），大部分犬可恢復正常活動。骨關節炎仍會持續進展但速度減緩。40-60% 對側膝關節在 1-2 年內也會發生 CCLD。保守治療小型犬約 85% 可達臨床可接受功能。肥胖犬如未減重則預後下降。ECLS 在小型犬成功率 85-90%。',
    monitoring: '術後 2 週拆線。術後 8 週 X 光確認截骨癒合（TPLO）。術後 3-4 個月評估功能恢復。長期每年 X 光追蹤骨關節炎進展。監測對側後肢跛行（提早發現對側 CCLD）。體重管理終生追蹤。',
    owner_communication: 'CCLD 是犬的退化性疾病，手術可有效恢復膝關節功能。需告知對側膝關節也有高風險。減重是最重要的輔助措施。費用估算：TPLO 通常是獸醫骨科中費用較高的手術。術後需配合限制活動 8-12 週與復健計畫。完全恢復通常需要 3-6 個月。',
  },
  diagnostic_data: null,
  procedure_data: null,
  visual_placeholders: [
    { position: '診斷段落前', type: 'annotated_image', description: 'Cranial drawer test 與 tibial thrust test 操作手法圖' },
    { position: '治療段落', type: 'comparison_table', description: 'TPLO vs TTA vs ECLS 比較表' },
  ],
  interactive_placeholders: [
    { position: '治療段落後', type: 'decision_tree', description: 'CCLD 術式選擇決策樹' },
  ],
  drug_api_links: ['Carprofen', 'Meloxicam'],
  references: [
    { type: 'journal', citation: 'Bergh MS et al. Systematic review of surgical treatments for cranial cruciate ligament disease in dogs. J Am Anim Hosp Assoc. 2014;50(5):315-321.', relevance: 'CCLD 手術治療系統性回顧' },
    { type: 'textbook', citation: 'Fossum TW. Small Animal Surgery, 5th ed. Elsevier, 2019. Chapter 34: Diseases of the Joints.', relevance: 'CCLD 手術技術標準教材' },
    { type: 'journal', citation: 'Slocum B, Slocum TD. Tibial plateau leveling osteotomy for repair of cranial cruciate ligament rupture in the canine. Vet Clin North Am Small Anim Pract. 1993;23(6):1325-1354.', relevance: 'TPLO 術式原始文獻' },
    { type: 'guideline', citation: 'ACVS Position Statement: Cranial Cruciate Ligament Disease in Dogs. 2020.', relevance: 'CCLD 手術標準共識聲明' },
  ],
  is_current: true,
  created_at: now,
};

/** 椎間盤疾病 (IVDD) — 疾病型 */
const contentIVDD: NodeContent = {
  id: 'CONTENT-SURG-L3-005',
  node_id: 'SURG-L3-005',
  version: 1,
  summary: '椎間盤疾病（Intervertebral Disc Disease, IVDD）是犬最常見的脊髓壓迫性疾病，分為 Hansen Type I（急性椎間盤突出）與 Hansen Type II（慢性椎間盤膨出）。好發品種包括臘腸犬、法國鬥牛犬、柯基犬等軟骨營養不良型品種。臨床依神經功能分為 1-5 級，Grade 1-2 可保守治療，Grade 3-5（尤其失去深層痛覺者）需緊急手術減壓。手術方式依位置選擇 hemilaminectomy（胸腰椎）或 ventral slot（頸椎），深層痛覺保留者術後恢復率 > 90%。',
  learning_objectives: [
    '區分 Hansen Type I 與 Type II 椎間盤疾病的病理與臨床特徵',
    '運用神經學分級系統（Grade 1-5）評估脊髓損傷嚴重度',
    '執行神經定位檢查以判斷病灶位置',
    '說明保守治療與手術治療的適應症',
    '描述 hemilaminectomy 與 ventral slot 的手術原理與適應症',
  ],
  key_points: [
    'Hansen Type I：急性核髓脫出（extrusion），好發軟骨營養不良型品種',
    'Hansen Type II：慢性纖維環膨出（protrusion），好發大型犬',
    '好發部位：T11-L3（胸腰交界段）占 65-75%，C2-C7 占 15-25%',
    '神經學分級：1（疼痛）→ 2（步態異常）→ 3（不能站立）→ 4（癱瘓保留深層痛覺）→ 5（癱瘓失去深層痛覺）',
    '深層痛覺（deep pain perception, DPP）是最重要的預後指標',
    'DPP 陽性的手術病例恢復率 > 90%，DPP 陰性 < 48 小時恢復率約 50-60%，> 48 小時恢復率 < 5%',
    'MRI 為脊髓壓迫部位定位的金標準影像學工具',
  ],
  body: `# 椎間盤疾病 (IVDD)

## 一、病理機制 (Pathophysiology)



### 概述
IVDD 是犬最常見的脊髓疾病，佔所有犬脊髓疾病的 2%，但在軟骨營養不良型品種（如臘腸犬）中發生率極高。此疾病同時是外科（手術減壓）與神經科的跨科疾病。

### 病理分類
### Hansen Type I（急性突出）
- 椎間盤核髓（nucleus pulposus）軟骨樣變性（chondroid metaplasia）
- 核髓脫水鈣化 → 纖維環破裂 → 核髓急性脫出至椎管 → 脊髓急性壓迫
- 好發於軟骨營養不良型品種（chondrodystrophic breeds）

### Hansen Type II（慢性膨出）
- 纖維環（annulus fibrosus）纖維樣變性（fibroid metaplasia）
- 纖維環漸進性膨出 → 脊髓慢性壓迫
- 好發於大型非軟骨營養不良型品種

### 神經定位
[圖片:脊髓節段神經定位檢查流程圖]

- **C1-C5**：四肢上運動神經元（UMN）徵象，頸部疼痛
- **C6-T2**：前肢下運動神經元（LMN）+ 後肢 UMN
- **T3-L3**：前肢正常 + 後肢 UMN（最常見 IVDD 位置）
- **L4-S3**：後肢 LMN，膀胱功能障礙

## 二、臨床表現與診斷 (Clinical Signs & Diagnosis)

### 神經學分級
| Grade | 臨床表現 | 治療傾向 |
|-------|---------|---------|
| 1 | 僅疼痛，神經功能正常 | 保守 |
| 2 | 步態異常（ambulatory paraparesis），仍能行走 | 保守/手術 |
| 3 | 無法行走的癱瘓（non-ambulatory paraparesis），可自主動作 | 手術 |
| 4 | 癱瘓，無自主動作，深層痛覺保留 | 緊急手術 |
| 5 | 癱瘓，深層痛覺喪失 | 緊急手術（預後保守） |

### 診斷
- **神經學檢查**：精確定位病灶脊髓節段
- **X 光**：可見椎間盤間隙狹窄或鈣化，但無法評估脊髓壓迫程度
- **MRI**：金標準——直接顯示脊髓壓迫位置、程度與脊髓訊號變化
- **CT**：可偵測鈣化椎間盤物質，快速且常不需要對比劑
- **脊髓造影（Myelography）**：MRI/CT 不可用時的替代方案

## 三、治療策略 (Treatment)

### 治療
### 保守治療（Grade 1-2，首次發作）
- 嚴格籠休 4-6 週
- 疼痛管理：[藥物:Gabapentin] 5-10 mg/kg PO BID-TID + NSAIDs
- 肌肉鬆弛劑：[藥物:Methocarbamol] 22-44 mg/kg PO BID-TID
- 復健治療：限制期過後漸進式恢復活動

### 手術治療（Grade 3-5，或保守治療無效）

**Hemilaminectomy**（胸腰椎）：
- 移除一側椎弓板（lamina）與部分椎弓根（pedicle）
- 暴露椎管，移除突出的椎間盤物質
- 保留對側結構穩定性

**Ventral Slot**（頸椎）：
- 從椎體腹側鑽入椎管
- 直接移除腹側突出的椎間盤物質

[互動:IVDD 治療決策——保守 vs 手術]

## 四、併發症與監控 (Complications & Monitoring)

## 五、預後與預後因子 (Prognosis)

## 六、人醫借鑒 (Translational Insights)

| 人醫工具/概念 | 獸醫應用潛力 | 現況 |
|-------------|-------------|------|
| 腹腔鏡/內視鏡微創手術 | 犬 GDV 預防性胃固定術腹腔鏡化 | 獸醫微創外科快速發展中 |
| 術中血管吻合技術（如 OPSI shunt） | 門靜脈分流手術的微創化趨勢 | 少數轉介中心可執行 |
| 生物補片（biologic mesh） | 犬腹壁缺損/會陰疝修復的生物材料替代合成 | 獸醫使用經驗增加中 |
| 手術部位感染（SSI）監控 bundle | 獸醫外科感染率追蹤與品質改善 | 人醫 WHO SSI bundle 廣泛推行，獸醫開始建立 |

## 七、臨床爭議與知識空缺 (Controversies & Knowledge Gaps)

| 爭議議題 | 現況 | Evidence Level |
|---------|------|---------------|
| 犬 TPLO vs TTA vs 側副韌帶穩定術治療 CCL 斷裂 | 大型犬 TPLO 為主流但 TTA 同等級證據，小型犬側副韌帶穩定術仍有支持者 | Level I |
| 犬 GDV 預防性胃固定術適應症 | 大型犬/深胸犬是否應常規預防性胃固定仍有爭議 | Level III |
| 犬脾臟腫塊的術前活檢價值 | 脾臟 FNA 的診斷敏感度/出血風險的風險效益分析 | Level III |
| 犬貓 OVE vs OVH | 歐洲傾向 OVE（微創、術後疼痛少），美洲傳統 OVH——長期子宮殘端併發症證據不足 | Level II |`,
  clinical_pearl: '深層痛覺（DPP）的正確測試方法至關重要：使用止血鉗夾壓趾骨，觀察的不是肢體的屈曲反射（withdrawal reflex）——這是脊髓反射弧，即使脊髓橫斷也可存在——而是要觀察有意識的疼痛反應，如轉頭看向刺激源、哭叫或試圖咬人。DPP 喪失超過 48 小時的病例恢復率極低，但精確的喪失時間往往難以確定。\n\n【台灣流行病學】椎間盤疾病（IVDD）在台灣為常見的外科神經急症，臘腸犬為台灣最具代表性的好發品種（盛行率可達 19-24%），其他好發品種如法國鬥牛犬、柯乩犬（Corgi）、比乏犬（Beagle）在台灣飼養數量亦多。台灣各大獸醫教學醫院與神經外科專科已具備半椎板切除術與 ventral slot 手術能力。MRI 設備在台灣分佈日趨普及，提升了術前精確定位的能力。',
  common_mistakes: [
    '將屈曲反射（withdrawal reflex）誤判為深層痛覺陽性——DPP 需觀察有意識的疼痛反應',
    '僅靠 X 光判斷 IVDD 位置與嚴重度（X 光無法評估脊髓壓迫程度）',
    'Grade 5 病例延遲手術——DPP 喪失為時間敏感的急診',
    '保守治療期間未嚴格限制活動（「改善後放鬆限制」導致惡化或復發）',
    '頸椎 IVDD 使用 hemilaminectomy 而非 ventral slot（頸椎突出多為腹側，ventral slot 更直接）',
  ],
  disease_data: {
    signalment: '好發品種：臘腸犬（一生發生率約 20-25%）、法國鬥牛犬、柯基犬、比格犬、西施犬、北京犬。Hansen Type I 好發年齡 3-6 歲。Hansen Type II 好發於大型犬 > 5 歲（如德國牧羊犬、杜賓犬、拉布拉多）。',
    etiology: 'Hansen Type I：軟骨營養不良型品種的椎間盤核髓發生軟骨樣變性與鈣化（可早於 1 歲就開始），纖維環弱化後急性突出。Hansen Type II：年齡相關的纖維環退化與漸進性膨出。外傷可為誘發因子但非根本病因。',
    pathogenesis: 'Type I：核髓鈣化變性 → 纖維環破裂 → 核髓急性脫出至椎管（常在背外側）→ 脊髓急性壓迫 + 挫傷（contusion）→ 繼發性損傷（水腫、出血、缺血、氧化損傷）→ 神經功能障礙（程度取決於壓迫速度與力道）。Type II：纖維環漸進性膨出 → 脊髓慢性壓迫 → 漸進性步態異常。',
    clinical_signs: [
      { sign: '脊椎疼痛', category: 'primary', description: '頸部或背部劇烈疼痛，觸碰時哭叫或攻擊，頸椎 IVDD 可見低頭姿勢' },
      { sign: '步態異常/共濟失調', category: 'primary', description: 'Grade 2：後肢共濟失調（ataxia），交叉步態、踢腳（knuckling）' },
      { sign: '癱瘓', category: 'primary', description: 'Grade 3-5：後肢癱瘓（胸腰椎），四肢癱瘓（頸椎）' },
      { sign: '排尿障礙', category: 'secondary', description: 'UMN 膀胱：膀胱充盈但無法自主排尿，需人工擠尿' },
      { sign: '深層痛覺喪失', category: 'secondary', description: 'Grade 5：最嚴重，趾骨夾壓無有意識疼痛反應' },
    ],
    staging: { system: 'Modified Frankel Scale', stages: ['Grade 1：僅脊椎疼痛，神經功能正常', 'Grade 2：步態異常（ambulatory paresis），仍能行走', 'Grade 3：不能行走的癱瘓（non-ambulatory paresis），有自主動作', 'Grade 4：癱瘓，無自主動作，深層痛覺保留', 'Grade 5：癱瘓，深層痛覺喪失'] },
    differential_diagnosis: [
      { condition: '纖維軟骨栓塞性脊髓病（FCE）', key_differentiator: '超急性發作後穩定不惡化，通常不痛，影像無壓迫性病灶，常為非對稱性' },
      { condition: '脊髓腫瘤', key_differentiator: '慢性漸進性，MRI 可見脊髓內或脊髓外腫塊，通常老年犬' },
      { condition: '退化性脊髓病（DM）', key_differentiator: '慢性漸進性後肢共濟失調，無疼痛，好發德國牧羊犬，MRI 無壓迫性病灶' },
      { condition: '脊椎骨折/脫位', key_differentiator: '通常有明確外傷史，X 光可見骨折或脫位' },
    ],
    diagnostic_workup: '1. 完整神經學檢查（定位病灶）→ 2. 脊椎 X 光（排除骨折、評估椎間盤鈣化）→ 3. MRI（金標準，定位壓迫與評估脊髓訊號）或 CT → 4. 血液學基礎檢查（術前評估）→ 5. 必要時脊髓造影（MRI/CT 不可用時）',
    treatment_protocol: 'Grade 1-2 首次發作：嚴格籠休 4-6 週 + Gabapentin 5-10 mg/kg BID-TID + NSAID（Meloxicam 0.1 mg/kg SID 或 Carprofen 4.4 mg/kg SID）。Grade 3-5 或保守失敗：手術減壓——胸腰椎行 hemilaminectomy，頸椎行 ventral slot。術後：疼痛管理、膀胱管理（Grade ≥ 3 需每日擠尿或導尿至自主排尿恢復）、復健治療。Primary care：神經學評估、Grade 1-2 保守治療、Grade 3-5 轉診。Specialty care：進階影像（MRI/CT）+ 手術減壓。',
    prognosis: 'Grade 1-2 保守治療：85-90% 臨床改善，但復發率約 30-40%。Grade 1-4 手術治療（DPP 陽性）：恢復行走率 > 90%。Grade 5 DPP 喪失 < 24-48 小時手術：恢復率約 50-60%。Grade 5 DPP 喪失 > 48 小時：恢復率 < 5%。臘腸犬一生中約 20% 會發生至少一次 IVDD。',
    monitoring: '保守治療：每 1-2 週追蹤神經學檢查直到穩定。術後：每日神經學評估（住院期間）、膀胱功能追蹤、2 週拆線、4-6 週 X 光追蹤。復健期：水療（hydrotherapy）、被動關節運動、站立訓練。長期：監測復發與對側椎間盤病變。',
    owner_communication: 'IVDD 的預後與就診時間密切相關——深層痛覺喪失後每小時都很寶貴。Grade 1-2 可先嘗試保守治療，但需嚴格籠休。Grade 3-5 建議緊急手術。術後恢復需要時間與耐心（數週至數月），膀胱管理需飼主配合。軟骨營養不良型品種飼主需了解此病的高復發性，避免跳躍與上下樓梯可降低風險。',
  },
  diagnostic_data: null,
  procedure_data: null,
  visual_placeholders: [
    { position: '神經定位段落', type: 'annotated_image', description: '脊髓節段定位與 UMN/LMN 分布圖' },
    { position: '診斷段落', type: 'annotated_image', description: 'IVDD MRI 影像——脊髓壓迫標示圖' },
    { position: '手術段落', type: 'comparison_table', description: 'Hemilaminectomy vs Ventral Slot 適應症比較表' },
  ],
  interactive_placeholders: [
    { position: '治療段落後', type: 'decision_tree', description: 'IVDD 治療決策互動圖——保守 vs 手術' },
  ],
  drug_api_links: ['Gabapentin', 'Methocarbamol', 'Meloxicam', 'Carprofen'],
  references: [
    { type: 'textbook', citation: 'Fossum TW. Small Animal Surgery, 5th ed. Elsevier, 2019. Chapter 38: Surgery of the Cervical Spine; Chapter 39: Surgery of the Thoracolumbar Spine.', relevance: 'IVDD 手術技術標準教材' },
    { type: 'journal', citation: 'Brisson BA. Intervertebral disc disease in dogs. Vet Clin North Am Small Anim Pract. 2010;40(5):829-858.', relevance: 'IVDD 完整綜述文章' },
    { type: 'guideline', citation: 'Olby NJ et al. Long-term functional outcome of dogs with severe injuries of the thoracolumbar spinal cord. J Am Vet Med Assoc. 2003;222(6):762-769.', relevance: '脊髓損傷犬長期預後的重要研究' },
    { type: 'journal', citation: 'Smolders LA et al. Intervertebral disc degeneration in the dog. Part 1: Anatomy and physiology of the intervertebral disc and characteristics of intervertebral disc degeneration. Vet J. 2013;195(3):282-291.', relevance: '椎間盤退化基礎科學' },
  ],
  is_current: true,
  created_at: now,
};

/** 會陰疝氣 (Perineal Hernia) — 疾病型 */
const contentPerinealHernia: NodeContent = {
  id: 'CONTENT-SURG-L3-006',
  node_id: 'SURG-L3-006',
  version: 1,
  summary: '會陰疝氣為犬好發的後軀外科疾病，幾乎僅見於未絕育雄犬（> 95%），好發年齡 7-9 歲。病因為骨盆隔膜肌肉（尤其提肛肌與尾骨肌）萎縮弱化，導致骨盆腔內容物（直腸、前列腺、膀胱、骨盆脂肪）疝入會陰部。手術修補為確定性治療，常用術式包括 internal obturator muscle transposition 與 polypropylene mesh 修補。建議同時進行去勢（castration），可將復發率從 40-50% 降至 10-15%。',
  learning_objectives: [
    '列舉會陰疝氣的解剖學基礎與風險因子',
    '辨識會陰疝氣的臨床表現與可能的膀胱疝入急診',
    '描述 internal obturator muscle transposition 的手術步驟',
    '說明去勢對降低復發率的重要性',
    '處理會陰疝氣的常見併發症',
  ],
  key_points: [
    '> 95% 為未絕育雄犬，雄性激素導致骨盆隔膜肌肉萎縮',
    '好發年齡 7-9 歲，品種偏好：柯基犬、波士頓梗、柯利牧羊犬、老英國牧羊犬、北京犬',
    '最常見疝出內容物：骨盆脂肪、直腸偏位/膨出、前列腺',
    '膀胱後翻（retroflexion of bladder）為最危險的情況——可導致尿路阻塞',
    '手術修補 + 去勢為標準治療，復發率約 10-15%',
    '未去勢時復發率高達 40-50%',
    '雙側發生率約 40-50%',
  ],
  body: `# 會陰疝氣 (Perineal Hernia)

## 一、病理機制 (Pathophysiology)



### 概述
會陰疝氣是中老年未絕育雄犬特有的外科疾病，由骨盆隔膜（pelvic diaphragm）肌肉萎縮弱化導致。此病雖非立即威脅生命，但膀胱疝入時可造成急性尿路阻塞，成為外科急診。

### 解剖學基礎
骨盆隔膜由以下肌肉構成：
- **提肛肌（levator ani）**：最常萎縮的肌肉
- **尾骨肌（coccygeus）**
- **外肛門括約肌（external anal sphincter）**

雄性激素（testosterone 與 relaxin 受體）促進這些肌肉退化萎縮，導致骨盆腔與會陰間出現缺口。

## 二、臨床表現與診斷 (Clinical Signs & Diagnosis)

### 臨床表現
[圖片:會陰疝氣外觀——會陰部單側或雙側膨脹]

- **會陰部膨脹**：可還原性腫脹，提高後軀或擠壓腹部時更明顯
- **排便困難（tenesmus）**：直腸偏位或膨出導致糞便滯留
- **排尿困難**：膀胱後翻時出現尿液滴漏或無法排尿（急診！）
- **會陰區疼痛**：觸診腫脹處可能疼痛

⚠ **膀胱後翻急診**：觸診會陰腫脹內含充盈膀胱，無法正常排尿。需緊急導尿或膀胱穿刺減壓後安排手術。

### 診斷
- **直腸指診**：可感覺骨盆隔膜缺損、直腸偏位方向
- **腹部/會陰超音波**：確認疝入內容物（膀胱？前列腺？腸道？）
- **X 光**：含對比劑的膀胱造影可確認膀胱位置
- **血液檢查**：膀胱後翻時需評估腎功能（BUN/Cre）與電解質（高血鉀！）

## 三、治療策略 (Treatment)

### 手術治療
### Internal Obturator Muscle Transposition（首選術式）
1. 會陰部切開，辨識疝氣缺口邊界
2. 將疝出內容物回納至骨盆腔
3. 將閉孔內肌（internal obturator muscle）從坐骨游離
4. 翻轉閉孔內肌填補缺損，縫合至外肛門括約肌與尾骨肌
5. 必要時合併 polypropylene mesh 加強

### 同時去勢
- 所有未絕育雄犬均建議同時去勢
- 去勢可降低復發率從 40-50% 至 10-15%
- 減少前列腺對骨盆腔的空間佔據

[互動:會陰疝氣手術步驟流程]

## 四、併發症與監控 (Complications & Monitoring)

## 五、預後與預後因子 (Prognosis)

## 六、人醫借鑒 (Translational Insights)

| 人醫工具/概念 | 獸醫應用潛力 | 現況 |
|-------------|-------------|------|
| 腹腔鏡/內視鏡微創手術 | 犬 GDV 預防性胃固定術腹腔鏡化 | 獸醫微創外科快速發展中 |
| 術中血管吻合技術（如 OPSI shunt） | 門靜脈分流手術的微創化趨勢 | 少數轉介中心可執行 |
| 生物補片（biologic mesh） | 犬腹壁缺損/會陰疝修復的生物材料替代合成 | 獸醫使用經驗增加中 |
| 手術部位感染（SSI）監控 bundle | 獸醫外科感染率追蹤與品質改善 | 人醫 WHO SSI bundle 廣泛推行，獸醫開始建立 |

## 七、臨床爭議與知識空缺 (Controversies & Knowledge Gaps)

| 爭議議題 | 現況 | Evidence Level |
|---------|------|---------------|
| 犬 TPLO vs TTA vs 側副韌帶穩定術治療 CCL 斷裂 | 大型犬 TPLO 為主流但 TTA 同等級證據，小型犬側副韌帶穩定術仍有支持者 | Level I |
| 犬 GDV 預防性胃固定術適應症 | 大型犬/深胸犬是否應常規預防性胃固定仍有爭議 | Level III |
| 犬脾臟腫塊的術前活檢價值 | 脾臟 FNA 的診斷敏感度/出血風險的風險效益分析 | Level III |
| 犬貓 OVE vs OVH | 歐洲傾向 OVE（微創、術後疼痛少），美洲傳統 OVH——長期子宮殘端併發症證據不足 | Level II |`,
  clinical_pearl: '會陰疝氣術後最令飼主困擾的併發症是暫時性大便失禁（fecal incontinence）。術中操作靠近肛門括約肌與支配神經（pudendal nerve），可能導致短期排便控制異常。術前須充分告知飼主此併發症通常是暫時性的（1-4 週內改善），但少數病例可能較久。避免過度牽拉外肛門括約肌可降低此風險。\n\n【台灣流行病學】會陰疝氣在台灣以未去勢中老年公犬好發，與台灣仍有相當比例飼主未為公犬去勢有關。台灣流浪犬 TNR 計畫主要針對母犬絕育，公犬去勢率相對較低。台灣常見品種如臘腸犬、波士頓梗、混種犬為好發族群。同時去勢手術應與會陰疝氣修補同步進行以降低復發率。',
  common_mistakes: [
    '未同時去勢——復發率從 10-15% 上升至 40-50%',
    '膀胱後翻時未先解除尿路阻塞即急於手術（需先穩定高血鉀與氮血症）',
    '僅修補有症狀的一側而忽略對側早期缺損（雙側發生率 40-50%）',
    '手術時辨識坐骨神經（sciatic nerve）不仔細——損傷可導致永久性後肢跛行',
    '術後未限制活動導致修補區域裂開與早期復發',
  ],
  disease_data: {
    signalment: '幾乎僅見於未絕育雄犬（> 95%），好發年齡 7-9 歲。品種偏好：威爾斯柯基犬、波士頓梗、柯利牧羊犬、老英國牧羊犬、北京犬、拳師犬。雌犬極少發生。貓罕見。',
    etiology: '多因子疾病。雄性激素促進骨盆隔膜肌肉（提肛肌、尾骨肌）萎縮退化。前列腺肥大增加骨盆腔壓力。慢性排便努責（便秘、前列腺疾病）為加重因子。遺傳因素可能存在（品種傾向）。',
    pathogenesis: '雄性激素持續作用 → 提肛肌與尾骨肌神經肌肉退化萎縮 → 骨盆隔膜弱化出現缺損（通常在提肛肌與外肛門括約肌之間）→ 腹壓推動骨盆腔內容物（脂肪、直腸壁、前列腺、偶爾膀胱）通過缺損疝入會陰皮下 → 直腸偏位或膨出（rectal deviation/sacculation）導致排便困難 → 膀胱後翻可導致尿路阻塞。',
    clinical_signs: [
      { sign: '會陰部腫脹', category: 'primary', description: '單側或雙側會陰部可還原性腫脹，站立或努責時更明顯' },
      { sign: '排便困難', category: 'primary', description: '努責排便（tenesmus）、糞便變扁或帶狀、需以手指輔助排便' },
      { sign: '會陰腫脹可還原', category: 'primary', description: '輕壓可使腫脹內容物回納，但很快又膨出' },
      { sign: '排尿困難', category: 'secondary', description: '膀胱後翻時出現尿滴漏、無法排尿或尿液減少（急診！）' },
      { sign: '食慾下降', category: 'secondary', description: '嚴重病例因排便困難與疼痛導致食慾下降與精神沉鬱' },
    ],
    staging: null,
    differential_diagnosis: [
      { condition: '肛門周圍腫瘤', key_differentiator: '腫塊不可還原、質地堅實、可能有潰瘍，FNA 或切片可鑑別' },
      { condition: '肛門囊膿瘍/腫瘤', key_differentiator: '位置侷限於肛門囊區域（4 與 8 點鐘位置），觸診疼痛或堅實' },
      { condition: '會陰部脂肪瘤', key_differentiator: '質地均勻柔軟，不可還原，直腸指診骨盆隔膜完整' },
      { condition: '腹股溝疝氣', key_differentiator: '腫脹位置在腹股溝而非會陰，直腸指診骨盆隔膜完整' },
    ],
    diagnostic_workup: '1. 理學檢查與直腸指診（評估骨盆隔膜完整性與缺損位置）→ 2. 會陰區超音波（辨識疝入內容物）→ 3. 腹部 X 光 +/- 膀胱造影（確認膀胱位置）→ 4. CBC/生化（尤其 BUN/Cre/K+——膀胱後翻時評估）→ 5. 前列腺評估（超音波大小、是否有囊腫或膿瘍）',
    treatment_protocol: '手術修補為確定性治療。首選 internal obturator muscle transposition + 同時去勢。膀胱後翻急診處理：先導尿或膀胱穿刺 → 矯正高血鉀（如有）→ 輸液穩定 → 再安排手術。雙側缺損可同時或分期修補。嚴重缺損可使用 polypropylene mesh 加強。術後：軟便飲食 2-4 週、限制活動 4-6 週、[藥物:Lactulose] 0.5 mL/kg PO BID-TID 維持軟便。Primary care：診斷、膀胱後翻急診穩定化、轉診手術。Specialty care：手術修補 + 去勢。',
    prognosis: '手術修補 + 去勢的成功率約 85-90%，復發率 10-15%。未去勢時復發率 40-50%。膀胱後翻合併嚴重氮血症或高血鉀的病例術前風險較高。最常見的術後併發症：傷口感染（8-26%）、暫時性大便失禁（10-20%，通常暫時性）、直腸脫垂（5-8%）。',
    monitoring: '術後 24-48 小時監測排便與排尿功能。2 週拆線。4-6 週內限制活動。術後 1-2 個月回診評估修補完整性。長期追蹤對側是否出現新的疝氣。去勢後前列腺大小追蹤。',
    owner_communication: '會陰疝氣需手術修補，同時去勢是降低復發的關鍵。膀胱後翻為緊急情況，需立即就醫。術後可能有暫時性排便控制異常，通常數週內改善。預防：早期去勢可有效預防此病。術後飲食需維持軟便 2-4 週，避免努責影響修補區域癒合。',
  },
  diagnostic_data: null,
  procedure_data: null,
  visual_placeholders: [
    { position: '臨床表現段落前', type: 'annotated_image', description: '會陰疝氣外觀照片與解剖示意圖' },
    { position: '手術段落', type: 'flowchart', description: 'Internal obturator muscle transposition 手術步驟圖' },
  ],
  interactive_placeholders: [
    { position: '手術段落後', type: 'decision_tree', description: '會陰疝氣處理流程互動決策圖（含膀胱後翻急診處理）' },
  ],
  drug_api_links: ['Lactulose'],
  references: [
    { type: 'textbook', citation: 'Fossum TW. Small Animal Surgery, 5th ed. Elsevier, 2019. Chapter 22: Surgery of the Perineum, Rectum, and Anus.', relevance: '會陰疝氣手術技術標準教材' },
    { type: 'journal', citation: 'Bellenger CR, Canfield RB. Perineal hernia. In: Slatter D, ed. Textbook of Small Animal Surgery, 3rd ed. Saunders, 2003:487-498.', relevance: '會陰疝氣完整外科參考' },
    { type: 'journal', citation: 'Szabo S et al. Perineal hernia in the dog: a review of 104 cases. Vet Surg. 2007;36(7):E14.', relevance: '會陰疝氣大型回顧性研究' },
    { type: 'journal', citation: 'Grand JG et al. Use of the internal obturator muscle for perineal herniorrhaphy in the dog. Vet Surg. 2013;42(6):652-659.', relevance: '閉孔內肌翻轉術技術與結果研究' },
    { type: 'guideline', citation: 'BSAVA Manual of Canine and Feline Abdominal Surgery, 2nd ed. Bray J, Kirby B, eds. BSAVA, 2021. Chapter: Perineal Surgery.', relevance: '會陰手術最佳實務指引' },
  ],
  is_current: true,
  created_at: now,
};

/** 創傷性骨折穩定 (Traumatic Fracture Stabilization) — 操作型 */
const contentFractureStabilization: NodeContent = {
  id: 'CONTENT-SURG-L3-007',
  node_id: 'SURG-L3-007',
  version: 1,
  summary: '創傷性骨折穩定是犬貓急診與骨科手術的核心操作。骨折分類依 Salter-Harris（生長板）、AO/ASIF（型態學）與開放/閉合進行。急診處理以全身穩定化（先保命）與暫時性外固定為優先，確定性手術依骨折類型選擇骨板螺絲（plate-screw）、髓內針（intramedullary pin）、外固定架（external skeletal fixator, ESF）或組合式固定。犬貓骨折癒合時間依年齡與部位約 4-12 週。',
  learning_objectives: [
    '運用 AO/ASIF 系統分類骨折',
    '執行創傷動物的系統性評估與急診穩定化',
    '選擇適當的骨折固定方式（plate、IM pin、ESF）',
    '描述骨折癒合的四個階段',
    '辨識骨折癒合延遲與不癒合（nonunion）的原因與處理',
  ],
  key_points: [
    '創傷骨折急診處理優先順序：Airway → Breathing → Circulation → 骨折',
    '開放性骨折分三級：I（由內而外穿刺 < 1 cm）、II（> 1 cm 傷口）、III（嚴重軟組織損傷）',
    '確定性固定方式選擇依骨折構型、患者大小、外科經驗而定',
    '骨板螺絲固定（plate-screw）提供最剛性的穩定，適用於關節附近骨折',
    'ESF 適用於開放性骨折、嚴重軟組織損傷、或資源限制的情況',
    '幼犬骨折癒合快（2-4 週），成犬較慢（6-12 週）',
    '骨折不癒合（nonunion）最常見原因：固定不穩定與血供不足',
  ],
  body: `# 創傷性骨折穩定

## 一、病理機制 (Pathophysiology)



### 概述
骨折是犬貓急診中最常見的創傷之一，常見原因包括車禍、高處墜落、咬傷與踩踏。骨折處理的最高原則是「先保命，再保肢」——必須先完成全身性創傷評估與穩定化，再處理骨折。

### 骨折分類
### 依開放/閉合
- **閉合性骨折**：皮膚完整
- **開放性骨折**：
  - Grade I：骨折端由內穿出，傷口 < 1 cm
  - Grade II：傷口 > 1 cm，中度軟組織損傷
  - Grade III：嚴重軟組織缺損、血管損傷、高度汙染

### 依型態學（AO/ASIF）
| 類型 | 描述 | 穩定性 |
|------|------|--------|
| 橫斷 (Transverse) | 90 度斷裂 | 軸向穩定 |
| 短斜 (Short oblique) | < 45 度 | 中度不穩定 |
| 長斜 (Long oblique) | > 45 度 | 不穩定 |
| 螺旋 (Spiral) | 旋轉力導致 | 不穩定 |
| 粉碎 (Comminuted) | ≥ 3 碎片 | 高度不穩定 |

### 急診處理
[圖片:創傷動物急診評估流程圖]

1. **Primary survey（ABCDE）**：氣道、呼吸、循環、神經、暴露
2. **輸液復甦**：晶體液 shock dose（犬 60-90 mL/kg/hr，貓 40-60 mL/kg/hr）
3. **止痛**：[藥物:Methadone] 0.1-0.5 mg/kg IV 或 [藥物:Fentanyl] CRI 2-5 mcg/kg/hr
4. **暫時性固定**：Robert Jones bandage 或 splint——防止骨折端進一步移位與軟組織損傷
5. **開放性骨折**：傷口覆蓋濕敷料、廣效抗生素（[藥物:Cefazolin] 22 mg/kg IV TID）

### 固定方式
### 骨板螺絲（Plate-Screw）
- 最常用的確定性固定方式
- 提供剛性穩定（rigid fixation）
- 適用：關節附近骨折、長骨骨折、可重建的粉碎骨折
- 類型：DCP、LC-DCP、鎖定骨板（locking plate）

### 髓內針（Intramedullary Pin, IM Pin）
- 抗彎曲力但不抗旋轉力
- 通常需合併其他固定方式（tie-in ESF 或 cerclage wire）
- 適用：長骨幹部橫斷骨折（常合併 cerclage wire）

### 外固定架（External Skeletal Fixator, ESF）
- 穿針經皮膚固定於骨折兩端，體外以連接桿穩定
- 適用：開放性骨折、嚴重軟組織損傷、暫時性穩定
- 優點：不干擾骨折端血供、可逐步拆除、費用較低
- 缺點：pin tract infection（釘道感染）發生率 10-30%

[互動:骨折固定方式選擇決策圖]

### 骨折癒合
四個階段：
1. **發炎期（Inflammation）**：0-7 天，血腫形成與發炎細胞浸潤
2. **軟骨膜骨痂（Soft callus）**：1-4 週，纖維組織與軟骨形成
3. **硬骨膜骨痂（Hard callus）**：4-12 週，骨化形成架橋
4. **骨重塑（Remodeling）**：數月至數年，骨痂重塑為正常骨結構

## 二、臨床表現與診斷 (Clinical Signs & Diagnosis)

## 三、治療策略 (Treatment)

## 四、併發症與監控 (Complications & Monitoring)

## 五、預後與預後因子 (Prognosis)

## 六、人醫借鑒 (Translational Insights)

| 人醫工具/概念 | 獸醫應用潛力 | 現況 |
|-------------|-------------|------|
| 腹腔鏡/內視鏡微創手術 | 犬 GDV 預防性胃固定術腹腔鏡化 | 獸醫微創外科快速發展中 |
| 術中血管吻合技術（如 OPSI shunt） | 門靜脈分流手術的微創化趨勢 | 少數轉介中心可執行 |
| 生物補片（biologic mesh） | 犬腹壁缺損/會陰疝修復的生物材料替代合成 | 獸醫使用經驗增加中 |
| 手術部位感染（SSI）監控 bundle | 獸醫外科感染率追蹤與品質改善 | 人醫 WHO SSI bundle 廣泛推行，獸醫開始建立 |

## 七、臨床爭議與知識空缺 (Controversies & Knowledge Gaps)

| 爭議議題 | 現況 | Evidence Level |
|---------|------|---------------|
| 犬 TPLO vs TTA vs 側副韌帶穩定術治療 CCL 斷裂 | 大型犬 TPLO 為主流但 TTA 同等級證據，小型犬側副韌帶穩定術仍有支持者 | Level I |
| 犬 GDV 預防性胃固定術適應症 | 大型犬/深胸犬是否應常規預防性胃固定仍有爭議 | Level III |
| 犬脾臟腫塊的術前活檢價值 | 脾臟 FNA 的診斷敏感度/出血風險的風險效益分析 | Level III |
| 犬貓 OVE vs OVH | 歐洲傾向 OVE（微創、術後疼痛少），美洲傳統 OVH——長期子宮殘端併發症證據不足 | Level II |`,
  clinical_pearl: '幼犬（< 6 個月）的骨折癒合能力極強，即使對線不完美也能透過骨重塑恢復良好功能。但必須注意生長板骨折（Salter-Harris 分類）——不當處理可能導致生長障礙與肢體長度不等或角度畸形。Salter-Harris Type V（壓碎型）尤其容易被遺漏，因為 X 光上可能無明顯異常，但生長板已受損。\n\n【台灣流行病學】骨折在台灣小動物臨床極為常見，尤其是小型犬（如吉娃娃、馬爾濟斯、博美犬）從高處墜落導致的橈尺骨遠端骨折。台灣居住環境以公寓大樓為主，小型犬從沙發、床鋪甚至飼主懷中跳下即可造成骨折。小型犬橈尺骨遠端骨折的不癒合率高，台灣骨科專科推薦使用鎖定骨板以提高癒合率。台灣流浪犬車禍骨折也佔一定比例。',
  common_mistakes: [
    '未完成全身性創傷評估就急於處理骨折（氣胸、腹腔出血等可能更致命）',
    '開放性骨折未在第一時間給予抗生素（應在 6 小時內給予，越早越好）',
    '髓內針單獨使用於斜形或粉碎骨折（IM pin 不抗旋轉，需合併其他固定方式）',
    'ESF 穿針穿過肌肉最厚處（應選擇 safe corridor，避免穿過重要肌腱或血管）',
    '術後未限制活動——過早放任活動可導致植入物失敗',
  ],
  disease_data: {
    signalment: '犬貓均可發生，無明顯品種與性別偏好。幼年動物（< 2 歲）常因好奇探索而受傷。車禍為最常見原因（犬約 50-70% 的骨折），高處墜落為貓的常見原因（high-rise syndrome）。小型犬前肢骨折（橈尺骨）常見於跳躍或墜落。',
    etiology: '外力導致。常見原因：車禍（motor vehicle accident, MVA）、高處墜落、咬傷（dog bite）、踩踏（小型犬/貓）、病理性骨折（骨腫瘤弱化骨骼）。',
    pathogenesis: '外力超過骨骼承受能力 → 骨折 → 骨折端出血形成血腫 → 軟組織腫脹與疼痛 → 如不穩定則持續移位與軟組織損傷。開放性骨折額外：外界細菌汙染 → 感染風險。骨折癒合需要：穩定的固定、充足的血供、適當的生物學環境。',
    clinical_signs: [
      { sign: '跛行/無法負重', category: 'primary', description: '患肢完全無法負重或嚴重跛行' },
      { sign: '腫脹與疼痛', category: 'primary', description: '骨折部位明顯腫脹，觸診劇痛' },
      { sign: '異常活動度/骨摩擦音', category: 'primary', description: '觸診可感覺骨折端異常活動（crepitus）——注意避免過度操作' },
      { sign: '肢體變形', category: 'secondary', description: '嚴重移位骨折可見肢體角度畸形或縮短' },
      { sign: '開放傷口（開放性骨折）', category: 'secondary', description: '皮膚破損可見骨折端外露或血性分泌物' },
    ],
    staging: null,
    differential_diagnosis: [
      { condition: '關節脫臼', key_differentiator: 'X 光顯示骨骼完整但關節面脫離，觸診彈性固定' },
      { condition: '韌帶/肌腱損傷', key_differentiator: 'X 光骨骼完整，關節不穩定但無骨折線' },
      { condition: '病理性骨折（骨腫瘤）', key_differentiator: 'X 光可見骨折部位有溶骨性或增生性骨變化，無明確外傷史或輕微外力即骨折' },
      { condition: '骨骼感染（osteomyelitis）', key_differentiator: '慢性病程，X 光可見骨膜反應、骨溶解，通常有發熱與引流管道' },
    ],
    diagnostic_workup: '1. 全身性創傷評估（ABCDE）→ 2. 胸腔 X 光（排除氣胸/肺挫傷/橫膈疝氣）→ 3. AFAST/TFAST（腹腔/胸腔積液快速評估）→ 4. 患肢兩正交 X 光（含上下關節）→ 5. CBC/生化/凝血（評估出血量與臟器功能）→ 6. 對側肢 X 光（如有臨床需要）→ 7. 確定性手術前可能需要 CT（複雜骨折、關節內骨折）',
    treatment_protocol: '急診：全身穩定化 → 止痛 → 暫時性外固定（Robert Jones bandage/splint）→ 開放性骨折抗生素（Cefazolin 22 mg/kg IV TID）。確定性手術（通常 24-72 小時內，待全身穩定後）：依骨折類型與位置選擇 plate-screw、IM pin（+/- cerclage wire）、ESF 或組合式固定。術後：限制活動 6-12 週、每 4-6 週 X 光追蹤癒合。止痛：[藥物:Methadone]（住院）→ 出院後 NSAIDs + [藥物:Gabapentin]。Primary care：急診穩定化、暫時性固定、轉診。Specialty care：確定性手術固定。',
    prognosis: '整體預後取決於骨折類型、軟組織損傷程度、是否開放性與患者年齡。閉合性簡單骨折適當固定後癒合率 > 95%。開放性 Grade III 感染率與癒合延遲率較高。幼犬癒合快（2-4 週），成犬 6-12 週。小型犬橈尺骨遠端骨折因血供較差，不癒合率較高（可達 20%）。骨折不癒合需要二次手術修復。',
    monitoring: '術後即刻 X 光確認對線與植入物位置。出院後每 4-6 週 X 光追蹤癒合進度。ESF 釘道每日清潔。觀察植入物失敗跡象：跛行加劇、腫脹、X 光見螺絲鬆脫或骨板彎曲。確認骨痂架橋後可漸進增加活動量。',
    owner_communication: '骨折治療需要時間與耐心。術後嚴格限制活動是癒合成功的關鍵。費用估算需包含手術、住院、術後 X 光追蹤。複雜骨折可能需要多次手術。開放性骨折有感染風險需密切追蹤。小型犬前肢骨折可能需要特別提醒不癒合風險。幼犬生長板骨折需追蹤生長是否正常。',
  },
  diagnostic_data: null,
  procedure_data: null,
  visual_placeholders: [
    { position: '急診處理段落', type: 'flowchart', description: '創傷動物急診評估 ABCDE 流程圖' },
    { position: '固定方式段落', type: 'comparison_table', description: 'Plate vs IM Pin vs ESF 比較表' },
    { position: '骨折癒合段落', type: 'timeline', description: '骨折癒合四階段時間軸圖' },
  ],
  interactive_placeholders: [
    { position: '固定方式段落後', type: 'decision_tree', description: '骨折固定方式選擇互動決策圖' },
  ],
  drug_api_links: ['Methadone', 'Fentanyl', 'Cefazolin', 'Gabapentin', 'Carprofen', 'Meloxicam'],
  references: [
    { type: 'textbook', citation: 'Fossum TW. Small Animal Surgery, 5th ed. Elsevier, 2019. Chapter 32: Fundamentals of Orthopedic Surgery and Fracture Management.', relevance: '骨折處理基礎標準教材' },
    { type: 'textbook', citation: 'Johnson AL, Houlton JEF, Vannini R. AO Principles of Fracture Management in the Dog and Cat. AO Publishing, 2005.', relevance: 'AO 骨折分類與固定原則權威教材' },
    { type: 'journal', citation: 'Piermattei DL, Flo GL, DeCamp CE. Handbook of Small Animal Orthopedics and Fracture Repair, 4th ed. Saunders, 2006.', relevance: '小動物骨科手術技術參考' },
    { type: 'guideline', citation: 'ACVS Consensus on Open Fracture Management in Small Animals. Vet Surg. 2019.', relevance: '開放性骨折處理共識' },
  ],
  is_current: true,
  created_at: now,
};

/** 膝蓋骨脫位 (Patellar Luxation) — 疾病型 */
const contentPatellarLuxation: NodeContent = {
  id: 'CONTENT-SURG-L3-008',
  node_id: 'SURG-L3-008',
  version: 1,
  summary: '膝蓋骨脫位（Patellar Luxation）是犬最常見的骨科疾病之一，在小型犬中盛行率約 7%。內側脫位（medial patellar luxation, MPL）遠多於外側（lateral），分為 Grade I-IV（Singleton 分級）。Grade I-II 可保守觀察，Grade III-IV 或有持續跛行者建議手術矯正。手術組合包括 trochleoplasty（滑車溝加深）、tibial tuberosity transposition（脛骨粗隆移位）與 lateral/medial imbrication（關節囊摺疊），成功率約 90-95%。',
  learning_objectives: [
    '運用 Singleton 分級系統評估膝蓋骨脫位嚴重度',
    '描述內側膝蓋骨脫位的骨骼畸形機轉',
    '列舉膝蓋骨脫位手術矯正的三大組合技術',
    '鑑別膝蓋骨脫位合併前十字韌帶斷裂的臨床意義',
    '制定不同級別膝蓋骨脫位的治療策略',
  ],
  key_points: [
    '內側脫位（MPL）占犬膝蓋骨脫位的 75-80%，外側脫位占 15-20%',
    '小型犬以 MPL 為主，大型犬 MPL 與外側均可見',
    'Singleton 分級：Grade I（可推出但自動復位）→ II（可推出且不自動復位）→ III（持續脫位但可復位）→ IV（持續脫位且不可復位）',
    '手術三合一：trochleoplasty + tibial tuberosity transposition + soft tissue imbrication',
    'Grade II 合併持續跛行或 Grade III-IV 建議手術',
    '15-20% 的 MPL 犬同時合併前十字韌帶斷裂（尤其 Grade III-IV）',
    '膝蓋骨脫位為遺傳性疾病——患犬不建議繁殖',
  ],
  body: `# 膝蓋骨脫位 (Patellar Luxation)

## 一、病理機制 (Pathophysiology)



### 概述
膝蓋骨脫位是小型犬中極為常見的骨科問題，且在台灣的小型犬群體中尤其常見。大部分為先天性/發育性，外傷性膝蓋骨脫位較少見。

### 骨骼畸形機轉（MPL）
內側膝蓋骨脫位涉及整個後肢骨骼排列異常：
1. **股骨內旋**（medial rotation of femur）
2. **股骨遠端內翻（varus）**
3. **滑車溝過淺**（shallow trochlear groove）
4. **脛骨粗隆內移**（medial displacement of tibial tuberosity）
5. **脛骨內旋**
6. **軟組織失衡**：內側關節囊與支持帶鬆弛，外側緊縮

## 二、臨床表現與診斷 (Clinical Signs & Diagnosis)

### Singleton 分級
[圖片:膝蓋骨脫位 Grade I-IV 示意圖]

| Grade | 描述 | 跛行 |
|-------|------|------|
| I | 可手動推出，放手後自動復位 | 通常無跛行 |
| II | 可手動推出或自發脫位，不自動復位但可手動復位 | 間歇性跛行 |
| III | 持續脫位，可手動復位但鬆手後又脫出 | 持續跛行，骨骼畸形明顯 |
| IV | 持續脫位，無法手動復位 | 嚴重跛行，蹲坐姿勢 |

### 診斷
- **觸診**：最重要的診斷方式——屈伸膝關節同時嘗試推移膝蓋骨
- **步態分析**：典型「跳躍式步態」——脫位時患肢抬起，復位後恢復正常
- **X 光**：評估骨骼排列、滑車溝深度、骨關節炎程度
- **CT**：嚴重骨骼畸形（Grade IV）術前規劃股骨或脛骨矯正截骨用

## 三、治療策略 (Treatment)

### 治療
### 保守治療
- 適用：Grade I 無跛行、Grade II 偶爾跛行且不影響生活品質
- 體重管理、關節保護（[藥物:Carprofen] PRN）、適度運動
- 注意：即使不跛行，Grade II-III 長期會導致關節軟骨磨損與骨關節炎

### 手術治療（Grade II 合併持續跛行、Grade III-IV）

**三大核心技術組合**：

1. **Trochleoplasty（滑車溝加深術）**：
   - Block recession 或 wedge recession
   - 加深滑車溝使膝蓋骨能穩定滑行

2. **Tibial Tuberosity Transposition（脛骨粗隆移位術）**：
   - 截骨將脛骨粗隆移至正確位置
   - 以 K-wire（鋼絲）固定
   - 使股四頭肌-膝蓋骨-脛骨粗隆排列正常化

3. **Soft Tissue Imbrication（軟組織摺疊術）**：
   - 脫位對側（外側 for MPL）關節囊與支持帶摺疊緊縮
   - 鬆弛側（內側 for MPL）關節囊鬆解

嚴重 Grade IV 合併骨骼畸形可能需要：
- 股骨矯正截骨（distal femoral osteotomy）
- 脛骨矯正截骨

[互動:膝蓋骨脫位手術技術組合選擇]

## 四、併發症與監控 (Complications & Monitoring)

## 五、預後與預後因子 (Prognosis)

## 六、人醫借鑒 (Translational Insights)

| 人醫工具/概念 | 獸醫應用潛力 | 現況 |
|-------------|-------------|------|
| 腹腔鏡/內視鏡微創手術 | 犬 GDV 預防性胃固定術腹腔鏡化 | 獸醫微創外科快速發展中 |
| 術中血管吻合技術（如 OPSI shunt） | 門靜脈分流手術的微創化趨勢 | 少數轉介中心可執行 |
| 生物補片（biologic mesh） | 犬腹壁缺損/會陰疝修復的生物材料替代合成 | 獸醫使用經驗增加中 |
| 手術部位感染（SSI）監控 bundle | 獸醫外科感染率追蹤與品質改善 | 人醫 WHO SSI bundle 廣泛推行，獸醫開始建立 |

## 七、臨床爭議與知識空缺 (Controversies & Knowledge Gaps)

| 爭議議題 | 現況 | Evidence Level |
|---------|------|---------------|
| 犬 TPLO vs TTA vs 側副韌帶穩定術治療 CCL 斷裂 | 大型犬 TPLO 為主流但 TTA 同等級證據，小型犬側副韌帶穩定術仍有支持者 | Level I |
| 犬 GDV 預防性胃固定術適應症 | 大型犬/深胸犬是否應常規預防性胃固定仍有爭議 | Level III |
| 犬脾臟腫塊的術前活檢價值 | 脾臟 FNA 的診斷敏感度/出血風險的風險效益分析 | Level III |
| 犬貓 OVE vs OVH | 歐洲傾向 OVE（微創、術後疼痛少），美洲傳統 OVH——長期子宮殘端併發症證據不足 | Level II |`,
  clinical_pearl: '膝蓋骨脫位分級應在動物清醒、放鬆的狀態下進行。很多小型犬在檢查台上緊張時肌肉緊繃，可能低估脫位等級。建議先讓動物在地板上行走觀察步態，再溫柔地觸診。另外，注意 MPL Grade III-IV 的犬有 15-20% 同時合併前十字韌帶斷裂——術中務必評估 drawer sign，必要時同時處理。\n\n【台灣流行病學】膝蓋骨內側脫位（MPL）是台灣小型犬最常見的骨科問題，盛行率極高。台灣常見品種如貴賓犬、馬爾濟斯、約克夏梗、吉娃娃、博美犬均為好發族群。台灣繁殖場品種選育未充分篩選骨科疾病，導致 MPL 盛行率居高不下。建議台灣飼主在購買小型犬前了解品種好發疾病，並在幼犬健檢時即進行膝關節評估。雙側 MPL 在台灣小型犬中發生率約 50%。',
  common_mistakes: [
    'Grade I 無症狀就建議手術（Grade I 通常不需手術，定期追蹤即可）',
    '僅做 trochleoplasty 而未做 tibial tuberosity transposition（需矯正整體排列才能降低復發）',
    '術中未檢查前十字韌帶（15-20% 合併 CCLD，遺漏會導致術後持續不穩定）',
    'Grade IV 使用標準術式而未考慮矯正截骨（嚴重骨骼畸形需截骨才能恢復排列）',
    '將膝蓋骨脫位犬建議繁殖（遺傳性疾病，應建議絕育）',
  ],
  disease_data: {
    signalment: '小型犬最常見（盛行率約 7%），好發品種：吉娃娃、博美、約克夏、馬爾濟斯、貴賓犬（玩具/迷你）、法國鬥牛犬。大型犬也可發生（拉布拉多、黃金獵犬，較常見外側脫位）。雙側發生率約 50%。雌犬略多於雄犬（1.5:1）。好發年齡依等級：Grade I-II 常在年輕時發現，Grade III-IV 可能出生即存在。',
    etiology: '先天性/發育性為主（> 90%），與後肢骨骼排列異常的遺傳傾向相關。外傷性膝蓋骨脫位少見，通常為直接打擊膝關節。多基因遺傳模式，受累犬不建議繁殖。',
    pathogenesis: '遺傳性骨骼排列異常 → 股四頭肌機制（quadriceps mechanism）偏移 → 股骨遠端滑車溝發育不良（淺或平坦）→ 膝蓋骨在屈曲-伸展過程中無法維持在滑車溝內 → 反覆脫位 → 關節軟骨磨損 → 骨關節炎。慢性脫位進一步加重軟組織與骨骼畸形，形成惡性循環。',
    clinical_signs: [
      { sign: '間歇性後肢跛行', category: 'primary', description: '典型「跳躍式」步態——走幾步後患肢抬起不著地，數步後又恢復正常（膝蓋骨脫位後自動復位）' },
      { sign: '膝蓋骨可觸及脫位', category: 'primary', description: '觸診膝關節時可感覺膝蓋骨偏離滑車溝（內側或外側）' },
      { sign: '蹲坐姿勢', category: 'primary', description: 'Grade III-IV 時膝關節無法完全伸展，呈現半蹲步態' },
      { sign: '骨關節炎表現', category: 'secondary', description: '慢性病例出現關節腫脹、活動度下降、運動後僵硬' },
      { sign: '肌肉萎縮', category: 'secondary', description: '長期不使用患肢導致股四頭肌萎縮' },
    ],
    staging: { system: 'Singleton Classification', stages: ['Grade I：膝蓋骨可手動推出但自動復位', 'Grade II：膝蓋骨可推出或自發脫位，不自動復位但可手動復位', 'Grade III：膝蓋骨持續脫位，可手動復位但不維持', 'Grade IV：膝蓋骨持續脫位且無法手動復位'] },
    differential_diagnosis: [
      { condition: '前十字韌帶斷裂（CCLD）', key_differentiator: 'Drawer test 陽性，膝蓋骨在正常位置。注意 15-20% 可能合併' },
      { condition: '髖關節 Legg-Calve-Perthes 病', key_differentiator: '好發於小型犬幼犬，疼痛定位於髖關節，X 光見股骨頭壞死' },
      { condition: '股骨內側踝骨軟骨病（OCD）', key_differentiator: '少見於犬膝關節，好發於大型犬肩關節，影像可見軟骨缺損' },
      { condition: '半月板損傷', key_differentiator: '通常繼發於 CCLD，觸診膝關節可聞 click 音，drawer test 可能陽性' },
    ],
    diagnostic_workup: '1. 步態分析（觀察跳躍式跛行模式）→ 2. 整形外科觸診（清醒放鬆狀態下分級）→ 3. 膝關節 X 光（AP + lateral：評估骨骼排列、滑車溝深度、骨關節炎）→ 4. 同時評估 drawer sign（排除合併 CCLD）→ 5. 雙側膝關節同步評估 → 6. Grade IV 術前 CT（評估股骨/脛骨畸形程度以規劃截骨）',
    treatment_protocol: 'Grade I 無跛行：觀察追蹤。Grade II 偶爾跛行：保守觀察或手術（依跛行頻率與骨關節炎進展）。Grade II 持續跛行 / Grade III / Grade IV：手術矯正。標準術式組合：trochleoplasty（block recession 或 wedge recession）+ tibial tuberosity transposition + lateral imbrication（MPL）。Grade IV 嚴重畸形：加上 distal femoral osteotomy +/- tibial osteotomy。術後 [藥物:Carprofen] 4.4 mg/kg PO SID 4-6 週。Primary care：觸診分級、Grade I-II 保守管理、手術轉診。Specialty care：手術矯正。',
    prognosis: '手術矯正 Grade I-III 的成功率約 90-95%（臨床功能良好）。Grade IV 因骨骼畸形嚴重，成功率略低（80-85%），可能需要分階段手術。復發率約 5-10%。術後骨關節炎仍會持續但速度減緩。保守治療的 Grade II-III 長期骨關節炎進展較快。未矯正的 Grade III-IV 可能導致前十字韌帶繼發斷裂。',
    monitoring: '術後 2 週拆線。4-6 週 X 光追蹤（脛骨粗隆截骨癒合、K-wire 位置）。術後 3 個月評估功能恢復。長期每年追蹤骨關節炎進展。雙側病例未手術側需定期評估。監測 K-wire 是否需移除（通常在骨癒合後如有刺激可移除）。',
    owner_communication: '膝蓋骨脫位是遺傳性骨科疾病，患犬不建議繁殖。Grade I-II 可先觀察，但長期可能導致骨關節炎。Grade III-IV 建議手術矯正。手術成功率高（90-95%），但無法完全消除骨關節炎風險。雙側發生率約 50%，對側日後可能也需手術。費用估算需包含術前影像、手術與術後追蹤。小型犬在台灣發生率很高，建議購買前了解品種疾病風險。',
  },
  diagnostic_data: null,
  procedure_data: null,
  visual_placeholders: [
    { position: '分級段落', type: 'annotated_image', description: '膝蓋骨脫位 Grade I-IV 示意圖' },
    { position: '手術段落', type: 'flowchart', description: '手術三合一技術步驟示意圖' },
    { position: '骨骼畸形段落', type: 'annotated_image', description: 'MPL 骨骼排列異常標示圖（股骨、脛骨、膝蓋骨位置）' },
  ],
  interactive_placeholders: [
    { position: '治療段落後', type: 'decision_tree', description: '膝蓋骨脫位分級與治療策略互動決策圖' },
  ],
  drug_api_links: ['Carprofen', 'Meloxicam'],
  references: [
    { type: 'journal', citation: 'Arthurs GI, Langley-Hobbs SJ. Patellar luxation as a cause of lameness in dogs. Vet Comp Orthop Traumatol. 2006;19(3):163-170.', relevance: '膝蓋骨脫位分級與臨床結果的重要研究' },
    { type: 'textbook', citation: 'Fossum TW. Small Animal Surgery, 5th ed. Elsevier, 2019. Chapter 34: Diseases of the Joints.', relevance: '膝蓋骨脫位手術技術標準教材' },
    { type: 'journal', citation: 'Bound N et al. The prevalence of canine patellar luxation in three centres. Vet Comp Orthop Traumatol. 2009;22(1):32-37.', relevance: '膝蓋骨脫位流行病學研究' },
    { type: 'guideline', citation: 'Orthopedic Foundation for Animals (OFA). Patellar Luxation Database and Breed Statistics. 2023.', relevance: '品種膝蓋骨脫位統計數據' },
  ],
  is_current: true,
  created_at: now,
};

/** 獸醫外科學總覽 — 概念型 */
const contentSurgOverview: NodeContent = {
  id: 'CONTENT-SURG-L0-001',
  node_id: 'SURG-L0-001',
  version: 1,
  summary: '獸醫外科學涵蓋犬貓軟組織手術與骨科手術兩大領域。軟組織手術包括消化道（GDV、腸道異物）、泌尿生殖（子宮蓄膿、膀胱結石）、肝膽脾（脾臟切除、膽囊切除）與體壁修復（會陰疝氣、橫膈疝氣）。骨科手術包括骨折固定、關節手術（CCLD/TPLO、膝蓋骨脫位）與脊椎手術。手術原則強調無菌技術、組織溫和操作（Halsted principles）、術前計畫與術後照護的完整性。',
  learning_objectives: [
    '概述獸醫外科學的範疇與主要手術類別',
    '列舉 Halsted 手術原則並說明其臨床意義',
    '描述犬貓最常見的外科急診與其處理優先順序',
    '說明術前評估、術中決策與術後照護的整合流程',
  ],
  key_points: [
    '兩大領域：軟組織手術 + 骨科手術',
    'Halsted 原則：溫和組織操作、嚴格止血、消除死腔、無張力閉合、無菌技術、最少異物',
    '常見外科急診：GDV、脾臟破裂出血、腸道異物/穿孔、子宮蓄膿、骨折、IVDD',
    '術前評估三要素：全身狀態（ASA 分級）、手術風險評估、麻醉計畫',
    '術後照護核心：疼痛管理、傷口照護、營養支持、活動限制、併發症監測',
    '台灣常見外科病例：GDV（大型犬）、膝蓋骨脫位（小型犬）、子宮蓄膿（未絕育母犬）',
  ],
  body: `# 獸醫外科學總覽

## 一、核心概念與機轉 (Core Concept & Mechanism)



### 學科範疇
獸醫外科學分為兩大領域：

### 軟組織手術
- 消化道：GDV、腸道異物、腸套疊
- 泌尿生殖：子宮蓄膿（OHE）、膀胱切開取石、腎臟/輸尿管手術
- 肝膽脾：脾臟切除、膽囊切除/膽管手術
- 體壁：會陰疝氣修補、橫膈疝氣修補、腹壁疝氣
- 頭頸：甲狀腺切除、唾液腺切除、全耳道切除（TECA）

### 骨科手術
- 骨折固定：骨板螺絲、髓內針、外固定架
- 關節手術：TPLO/TTA（CCLD）、膝蓋骨脫位矯正、FHO
- 脊椎手術：hemilaminectomy、ventral slot
- 矯正截骨：股骨/脛骨矯正截骨

### Halsted 手術原則
1. **溫和組織操作**：避免不必要的組織損傷
2. **嚴格止血**：可見出血點逐一結紮或電燒
3. **消除死腔**：預防血腫與感染
4. **無張力閉合**：縫合時不過度緊縮組織
5. **無菌技術**：嚴格遵守無菌操作規範
6. **最少異物**：減少縫線與植入物的使用量

### 外科急診優先順序
1. GDV：先保命（輸液穩定）再開刀
2. 脾臟破裂出血：輸血穩定 → 脾臟切除
3. 子宮蓄膿：術前抗生素+輸液 → OHE
4. 腸道穿孔：腹膜炎風險，盡早手術

## 二、臨床意義 (Clinical Significance)

## 三、人醫借鑒 (Translational Insights)

| 人醫工具/概念 | 獸醫應用潛力 | 現況 |
|-------------|-------------|------|
| 微創手術/機器人輔助手術 (da Vinci) | 犬腹腔鏡/胸腔鏡手術進階應用 | 獸醫腹腔鏡 OVE/腎上腺切除漸增 |
| 3D 列印術前規劃模型 | 犬複雜骨折/關節手術精確規劃 | 研究階段，少數機構已採用 |
| 術中導航系統（IGS） | 脊椎手術精確植入物定位 | 獸醫神經外科初步引入 |
| 增強實境（AR）手術訓練 | 外科住院醫師模擬訓練 | 概念驗證階段 |

## 四、臨床爭議與知識空缺 (Controversies & Knowledge Gaps)

| 爭議議題 | 現況 | Evidence Level |
|---------|------|---------------|
| 獸醫外科專科訓練年限與能力認證標準 | 各國標準不一（美國 ACVS 3 年 vs 歐洲 ECVS 差異） | Level IV |
| 微創手術在獸醫的適應症範圍 | 腹腔鏡 OVE 已廣泛接受，其他術式適應症持續擴展 | Level III |
| 外科手術教學中動物模型 vs 模擬器的倫理與效果 | 減少活體動物使用的趨勢 | Level IV |`,
  clinical_pearl: '外科手術成功的關鍵在於「術前計畫」——術前花 10 分鐘思考手術步驟、可能遇到的困難與備案，遠比在手術台上即興應對更有效率且安全。Halsted 原則看似基本，但在急診手術的壓力下很容易被忽略，尤其是「溫和組織操作」和「嚴格止血」。',
  common_mistakes: [
    '急診手術時跳過系統性全身評估——先穩定生命徵象再手術',
    '術中止血不完全導致術後出血',
    '縫合張力過大導致組織缺血壞死與傷口裂開',
    '術後疼痛管理不足影響恢復',
  ],
  disease_data: null,
  diagnostic_data: null,
  procedure_data: null,
  visual_placeholders: [
    { position: '學科範疇段落後', type: 'mind_map', description: '獸醫外科學分類心智圖' },
  ],
  interactive_placeholders: [],
  drug_api_links: [],
  references: [
    { type: 'textbook', citation: 'Fossum TW. Small Animal Surgery, 5th ed. Elsevier, 2019.', relevance: '小動物外科學權威教材' },
    { type: 'textbook', citation: 'Tobias KM, Johnston SA. Veterinary Surgery: Small Animal, 2nd ed. Elsevier, 2018.', relevance: '獸醫外科學進階教材' },
    { type: 'textbook', citation: 'Johnson AL, Houlton JEF, Vannini R. AO Principles of Fracture Management in the Dog and Cat. AO Publishing, 2005.', relevance: 'AO 骨折固定原則' },
    { type: 'guideline', citation: 'ACVS Position Statements and Practice Guidelines. American College of Veterinary Surgeons, 2023.', relevance: '獸醫外科學專科認證與實務指引' },
    { type: 'journal', citation: 'Burn CC. Bestowing the benefit of the doubt: systematic review of veterinary surgical outcomes. Vet Surg. 2020;49(Suppl 1):O8-O17.', relevance: '獸醫手術結果系統性回顧' },
  ],
  is_current: true,
  created_at: now,
};

/** 手術原則與無菌技術 — 概念型 */
const contentSurgPrinciples: NodeContent = {
  id: 'CONTENT-SURG-L1-001',
  node_id: 'SURG-L1-001',
  version: 1,
  summary: '手術原則與無菌技術是所有外科手術的基礎。核心包括 Halsted 手術原則、手術團隊無菌準備（手術衣穿著、手術刷手、無菌鋪單）、手術器械滅菌（高壓蒸氣、化學滅菌）、電燒止血原理、以及縫合技術基礎（縫線選擇、縫合模式）。手術部位感染（SSI）發生率約 3-10%，嚴格遵守無菌技術可將其降至最低。',
  learning_objectives: [
    '執行標準化的手術刷手與穿衣流程',
    '選擇適當的滅菌方式用於不同器械與材料',
    '比較可吸收 vs 不可吸收、單絲 vs 編織縫線的特性',
    '描述常用縫合模式（simple interrupted、simple continuous、cruciate）的適應症',
    '列舉降低手術部位感染的措施',
  ],
  key_points: [
    '手術刷手：碘伏或 chlorhexidine 刷手 5 分鐘，刷洗指甲至肘部',
    '手術部位消毒：至少三次交替 chlorhexidine/碘伏 + 酒精',
    '高壓蒸氣滅菌：121°C 15 分鐘或 132°C 4 分鐘',
    '電燒原理：單極（切割+凝固）vs 雙極（精確凝固，靠近神經/血管時使用）',
    '縫線選擇：可吸收（PDS、Monocryl、Vicryl）vs 不可吸收（Nylon、Prolene）',
    '單絲 vs 編織：單絲組織拖曳少、感染率低；編織操作性佳但 wicking 效應',
    'SSI 預防：無菌技術 + 術前預防性抗生素（切皮前 30 分鐘）+ 溫和組織操作',
  ],
  body: `# 手術原則與無菌技術

## 一、核心概念與機轉 (Core Concept & Mechanism)



### 無菌準備
### 手術團隊準備
1. 手術帽、口罩穿戴
2. 手術刷手（碘伏或 4% chlorhexidine gluconate）5 分鐘
3. 無菌擦手 → 穿手術衣（closed gloving technique）
4. 戴無菌手套

### 手術部位準備
1. 手術區域剃毛（比預期切口大一倍）
2. 初步清潔（移除毛屑與汙染物）
3. 消毒：3 次交替 chlorhexidine scrub + 酒精（由切口向外螺旋）
4. 無菌鋪單

### 止血技術
| 方法 | 適應症 | 注意事項 |
|------|--------|---------|
| 結紮（Ligation） | 可辨識的血管 | 經典且可靠 |
| 單極電燒 | 小血管、組織止血 | 熱損傷範圍較大 |
| 雙極電燒 | 靠近神經/重要結構 | 精確但較慢 |
| LigaSure / Harmonic | 中型血管封閉 | 快速但需專用設備 |
| 壓迫/Gelfoam | 滲血、骨面出血 | 輔助性止血 |

### 縫線與縫合
### 縫線分類
- **可吸收**：PDS（polydioxanone，單絲，180天）、Monocryl（poliglecaprone，單絲，90天）、Vicryl（polyglactin，編織，60天）
- **不可吸收**：Nylon（單絲）、Prolene（polypropylene，單絲）、Silk（編織，組織反應大）

### 常用縫合模式
- **Simple interrupted**：最通用，每針獨立，一針斷裂不影響全線
- **Simple continuous**：快速、氣密，適合腹壁等連續閉合
- **Cruciate (X-pattern)**：比 simple interrupted 更抗張力
- **Subcuticular**：皮內連續縫合，美觀，不需拆線（可吸收線）

### 手術部位感染預防
- 術前預防性抗生素：[藥物:Cefazolin] 22 mg/kg IV，切皮前 30 分鐘
- 手術時間 > 90 分鐘或失血量大時追加一劑
- 清潔手術 SSI 率 3-5%，汙染手術 10-20%

## 二、臨床意義 (Clinical Significance)

## 三、人醫借鑒 (Translational Insights)

| 人醫工具/概念 | 獸醫應用潛力 | 現況 |
|-------------|-------------|------|
| 組織工程與再生醫學 | 犬骨缺損/軟骨修復的生物材料應用 | 幹細胞治療研究活躍，臨床轉譯有限 |
| 生物可吸收植入物 | 骨折固定免除二次拆除手術 | 部分產品已獸醫商業化 |
| Negative pressure wound therapy (NPWT) | 犬大面積傷口/開放性骨折加速癒合 | 獸醫已廣泛使用 VAC 系統 |
| 富血小板血漿（PRP） | 犬肌腱/韌帶損傷修復 | 臨床使用漸增，標準化不足 |

## 四、臨床爭議與知識空缺 (Controversies & Knowledge Gaps)

| 爭議議題 | 現況 | Evidence Level |
|---------|------|---------------|
| 不鏽鋼 vs 鈦合金植入物的優劣 | 鈦合金生物相容性較好但成本高，兩者臨床差異證據有限 | Level III |
| 可吸收縫線材質選擇（PDS vs Monocryl vs V-Loc） | 單絲 vs 倒鉤線在特定術式的優劣尚無大型比較 | Level III |
| 術前預防性抗生素的時機與選擇 | 第一代頭孢菌素為首選已有共識，但給藥時機（切皮前 30 min）的遵從率待提升 | Level I |`,
  clinical_pearl: '縫線選擇的黃金法則：「用最細的縫線提供足夠的張力，使用組織反應最小的材質」。腹壁閉合通常使用 PDS 或 Nylon（0 或 2-0），皮膚使用 Nylon 或 Staples（3-0 或 4-0）。感染手術避免使用編織縫線（wicking effect 促進細菌沿縫線擴散）。',
  common_mistakes: [
    '手術刷手時間不足或技術不正確',
    '術中無菌觀念鬆懈（觸碰非無菌區域後未更換手套）',
    '選用過粗的縫線造成不必要的組織反應',
    '術前預防性抗生素時機錯誤（應在切皮前 30 分鐘，非術後才給）',
  ],
  disease_data: null,
  diagnostic_data: null,
  procedure_data: null,
  visual_placeholders: [
    { position: '縫線段落後', type: 'comparison_table', description: '常用縫線特性比較表' },
  ],
  interactive_placeholders: [],
  drug_api_links: ['Cefazolin'],
  references: [
    { type: 'textbook', citation: 'Fossum TW. Small Animal Surgery, 5th ed. Elsevier, 2019. Chapter 2: Sterilization and Asepsis.', relevance: '無菌技術標準教材' },
    { type: 'textbook', citation: 'Tobias KM, Johnston SA. Veterinary Surgery: Small Animal, 2nd ed. Elsevier, 2018.', relevance: '外科基本原則' },
    { type: 'guideline', citation: 'Turk R et al. ACVS guidelines for surgical site infection prevention. Vet Surg. 2015;44(S1):S70-S80.', relevance: 'SSI 預防指引' },
    { type: 'journal', citation: 'Nicholson M et al. Comparison of surgical site infection rates associated with clean surgical procedures in dogs and cats at a veterinary teaching hospital. Vet Surg. 2002;31(6):526-532.', relevance: '獸醫教學醫院 SSI 發生率研究' },
  ],
  is_current: true,
  created_at: now,
};

/** 傷口癒合 — 概念型 */
const contentWoundHealing: NodeContent = {
  id: 'CONTENT-SURG-L1-002',
  node_id: 'SURG-L1-002',
  version: 1,
  summary: '傷口癒合是外科手術後組織修復的核心生理過程，分為四個重疊階段：止血期、發炎期、增殖期與重塑期。癒合方式分為一期癒合（primary intention，手術切口直接縫合）、二期癒合（secondary intention，開放傷口自行癒合）與延遲一期癒合（delayed primary closure）。影響癒合的因素包括血供、感染、營養狀態、全身性疾病與藥物。',
  learning_objectives: [
    '描述傷口癒合四個階段的細胞與分子事件',
    '比較一期、二期與延遲一期癒合的適應症',
    '列舉影響傷口癒合的正面與負面因素',
    '選擇適當的傷口敷料類型',
    '辨識傷口癒合異常（延遲癒合、肉芽組織過度增生）',
  ],
  key_points: [
    '四階段：止血期（分鐘）→ 發炎期（1-5天）→ 增殖期（5-20天）→ 重塑期（3週-2年）',
    '發炎期：嗜中性球（前 24-48hr）→ 巨噬細胞（48hr 後主導，癒合關鍵細胞）',
    '增殖期：肉芽組織形成、新血管生成（angiogenesis）、表皮再生、傷口收縮',
    '重塑期：Type III collagen → Type I collagen 替換，最終強度約正常皮膚 80%',
    '一期癒合：乾淨手術切口直接縫合，最快最美觀',
    '二期癒合：汙染/感染傷口開放處理，較慢但較安全',
    '負面因素：感染、缺血、低蛋白、糖尿病、類固醇、化療',
  ],
  body: `# 傷口癒合

## 一、核心概念與機轉 (Core Concept & Mechanism)



### 四階段
### 1. 止血期（Hemostasis）—— 發生於傷後數分鐘
- 血管收縮 + 血小板聚集 → 血栓形成
- 凝血級聯活化 → 纖維蛋白網

### 2. 發炎期（Inflammation）—— 1-5 天
- 嗜中性球（前 24-48hr）：清除細菌與壞死組織
- **巨噬細胞**（48hr 後）：癒合的「指揮官」，分泌生長因子（PDGF、TGF-β、VEGF）
- 臨床表現：紅、腫、熱、痛

### 3. 增殖期（Proliferation）—— 5-20 天
- **肉芽組織形成**：新血管（angiogenesis）+ 纖維母細胞 + 膠原蛋白沉積
- **表皮再生（Epithelialization）**：傷口邊緣表皮細胞增殖遷移
- **傷口收縮（Contraction）**：肌纖維母細胞（myofibroblasts）牽引傷口邊緣

### 4. 重塑期（Remodeling）—— 3 週至 2 年
- Type III collagen → Type I collagen 逐漸替換
- 膠原纖維重新排列（沿張力線方向）
- 最終張力強度：約正常皮膚的 80%（永遠無法達 100%）

### 癒合方式
| 類型 | 適應症 | 優點 | 缺點 |
|------|--------|------|------|
| 一期癒合 | 乾淨手術切口 | 快速、美觀、強度佳 | 感染風險（封閉環境） |
| 二期癒合 | 汙染/感染傷口 | 安全（開放引流） | 慢、瘢痕大 |
| 延遲一期 | 初期汙染但可清創 | 兼顧安全與速度 | 需二次手術 |

### 影響因素
### 正面因素
- 充足血供、適當營養（蛋白質、Vit C、Zinc）
- 濕潤傷口環境（modern wound care）
- 年輕動物

### 負面因素
- 感染（最常見原因）
- 缺血（血供不足）
- 低白蛋白（< 2.0 g/dL 癒合顯著延遲）
- 全身性疾病（糖尿病、Cushing's）
- 藥物：Corticosteroids（抑制發炎期與增殖期）、化療藥物

## 二、臨床意義 (Clinical Significance)

## 三、人醫借鑒 (Translational Insights)

| 人醫工具/概念 | 獸醫應用潛力 | 現況 |
|-------------|-------------|------|
| 組織工程與再生醫學 | 犬骨缺損/軟骨修復的生物材料應用 | 幹細胞治療研究活躍，臨床轉譯有限 |
| 生物可吸收植入物 | 骨折固定免除二次拆除手術 | 部分產品已獸醫商業化 |
| Negative pressure wound therapy (NPWT) | 犬大面積傷口/開放性骨折加速癒合 | 獸醫已廣泛使用 VAC 系統 |
| 富血小板血漿（PRP） | 犬肌腱/韌帶損傷修復 | 臨床使用漸增，標準化不足 |

## 四、臨床爭議與知識空缺 (Controversies & Knowledge Gaps)

| 爭議議題 | 現況 | Evidence Level |
|---------|------|---------------|
| 不鏽鋼 vs 鈦合金植入物的優劣 | 鈦合金生物相容性較好但成本高，兩者臨床差異證據有限 | Level III |
| 可吸收縫線材質選擇（PDS vs Monocryl vs V-Loc） | 單絲 vs 倒鉤線在特定術式的優劣尚無大型比較 | Level III |
| 術前預防性抗生素的時機與選擇 | 第一代頭孢菌素為首選已有共識，但給藥時機（切皮前 30 min）的遵從率待提升 | Level I |`,
  clinical_pearl: '「濕潤傷口癒合」（moist wound healing）是現代傷口照護的核心觀念。研究顯示濕潤環境比乾燥環境的傷口癒合速度快 40-50%。這是因為表皮細胞需要在濕潤表面遷移。選擇敷料時應根據傷口滲出量：高滲出用吸收性敷料（alginate、foam），低滲出用保濕性敷料（hydrogel、film）。',
  common_mistakes: [
    '對汙染傷口進行一期閉合而未充分清創（封閉汙染→感染）',
    '使用類固醇治療的動物未考慮癒合延遲風險',
    '傷口敷料選擇不當（乾紗布黏附新生組織，換藥時造成二次損傷）',
    '低白蛋白血症動物未先矯正營養就進行大型手術',
  ],
  disease_data: null,
  diagnostic_data: null,
  procedure_data: null,
  visual_placeholders: [
    { position: '四階段段落後', type: 'timeline', description: '傷口癒合四階段時間軸與關鍵細胞/事件' },
  ],
  interactive_placeholders: [],
  drug_api_links: [],
  references: [
    { type: 'textbook', citation: 'Fossum TW. Small Animal Surgery, 5th ed. Elsevier, 2019. Chapter 15: Wound Management.', relevance: '傷口癒合與管理標準教材' },
    { type: 'textbook', citation: 'Tobias KM, Johnston SA. Veterinary Surgery: Small Animal, 2nd ed. Elsevier, 2018.', relevance: '傷口癒合生物學' },
    { type: 'journal', citation: 'Amalsadvala T, Swaim SF. Management of hard-to-heal wounds. Vet Clin North Am Small Anim Pract. 2006;36(4):693-711.', relevance: '困難傷口管理' },
    { type: 'guideline', citation: 'Campbell BG. Wound management guidelines: open wound management. Compend Contin Educ Vet. 2006;28(10):713-724.', relevance: '開放性傷口管理指引' },
  ],
  is_current: true,
  created_at: now,
};

/** 外科營養學 — 概念型 */
const contentSurgNutrition: NodeContent = {
  id: 'CONTENT-SURG-L1-003',
  node_id: 'SURG-L1-003',
  version: 1,
  summary: '外科營養學關注手術患者的營養評估與支持，對手術結果與傷口癒合有重大影響。術前營養狀態不佳（低白蛋白 < 2.0 g/dL、體重流失 > 10%）顯著增加手術併發症。術後營養支持以「early enteral nutrition」為原則，腸道功能允許時應盡早恢復腸道餵食。嚴重病例可能需要鼻食管、食道瘻管或全靜脈營養（TPN）。',
  learning_objectives: [
    '評估手術患者的營養狀態與風險因子',
    '計算犬貓的靜息能量需求（RER）',
    '選擇適當的營養支持途徑（口服、鼻食管、食道瘻管、TPN）',
    '制定術後餵食恢復計畫',
    '辨識再餵食症候群（refeeding syndrome）的風險與預防',
  ],
  key_points: [
    '營養風險指標：白蛋白 < 2.0 g/dL、體重流失 > 10%、BCS 1-2/9、食慾廢絕 > 3-5 天',
    'RER 計算：70 × (BWkg)^0.75 kcal/day 或簡化公式 30 × BWkg + 70',
    'Early enteral nutrition：術後 12-24 小時（腸道功能允許時）開始少量多餐',
    '鼻食管：最簡單的暫時性腸道營養途徑，適用於短期（3-7 天）',
    '食道瘻管（Esophagostomy tube, E-tube）：適合中長期（數週至數月）營養支持',
    'TPN：腸道完全不可用時（嚴重腸炎、短腸症候群），經靜脈提供完整營養',
    '再餵食症候群：長期飢餓後突然餵食 → 低磷低鉀低鎂 → 心律不整 → 可致死',
  ],
  body: `# 外科營養學

## 一、核心概念與機轉 (Core Concept & Mechanism)



### 營養評估
### 風險指標
- 白蛋白 < 2.0 g/dL（傷口癒合顯著延遲）
- 體重流失 > 10%（嚴重營養不良）
- BCS 1-2/9（惡病質）
- 食慾廢絕 > 3 天（犬）或 > 2 天（貓——肝脂肪沉積風險）

### 能量需求計算
- **RER（Resting Energy Requirement）**：70 × (BWkg)^0.75 kcal/day
- 簡化公式（2-30 kg）：30 × BWkg + 70 kcal/day
- 疾病係數：重症 ICU 患者不建議 > 1.0-1.2 × RER（避免過度餵食）

### 營養支持途徑
| 途徑 | 適應症 | 優點 | 缺點 |
|------|--------|------|------|
| 口服 | 食慾尚可 | 最生理 | 攝取量不確定 |
| 鼻食管 | 短期（3-7天），口腔可用 | 放置簡單，無需麻醉 | 管徑小，僅流質 |
| E-tube | 中長期（週-月） | 管徑大，可打泥狀食物 | 需短暫麻醉放置 |
| 胃造瘻管 | 長期 | 管徑最大 | 需手術/內視鏡放置 |
| TPN | 腸道不可用 | 腸道完全休息 | 代謝/感染併發症高 |

### 術後餵食原則
### Early Enteral Nutrition
- 腸道功能允許時，術後 12-24 小時即可開始
- 少量多餐：從 1/4 RER 開始，每 12-24 小時增加
- 3-4 天達到完整 RER
- 腸道使用可維持腸黏膜完整性、降低細菌移轉

### 再餵食症候群預防
- 長期飢餓（> 5-7 天）動物恢復餵食時需特別注意
- 從 25-50% RER 開始，3-5 天逐漸增加
- 監測電解質：磷、鉀、鎂（q12-24h 前 3 天）
- 補充 thiamine（維生素 B1）

## 二、臨床意義 (Clinical Significance)

## 三、人醫借鑒 (Translational Insights)

| 人醫工具/概念 | 獸醫應用潛力 | 現況 |
|-------------|-------------|------|
| 組織工程與再生醫學 | 犬骨缺損/軟骨修復的生物材料應用 | 幹細胞治療研究活躍，臨床轉譯有限 |
| 生物可吸收植入物 | 骨折固定免除二次拆除手術 | 部分產品已獸醫商業化 |
| Negative pressure wound therapy (NPWT) | 犬大面積傷口/開放性骨折加速癒合 | 獸醫已廣泛使用 VAC 系統 |
| 富血小板血漿（PRP） | 犬肌腱/韌帶損傷修復 | 臨床使用漸增，標準化不足 |

## 四、臨床爭議與知識空缺 (Controversies & Knowledge Gaps)

| 爭議議題 | 現況 | Evidence Level |
|---------|------|---------------|
| 不鏽鋼 vs 鈦合金植入物的優劣 | 鈦合金生物相容性較好但成本高，兩者臨床差異證據有限 | Level III |
| 可吸收縫線材質選擇（PDS vs Monocryl vs V-Loc） | 單絲 vs 倒鉤線在特定術式的優劣尚無大型比較 | Level III |
| 術前預防性抗生素的時機與選擇 | 第一代頭孢菌素為首選已有共識，但給藥時機（切皮前 30 min）的遵從率待提升 | Level I |`,
  clinical_pearl: '貓的營養管理有其獨特性——貓禁食超過 2-3 天即有肝脂肪沉積（hepatic lipidosis）風險，尤其是肥胖貓。因此，任何原因導致貓食慾廢絕超過 48 小時，都應積極考慮放置鼻食管或 E-tube。E-tube 在貓的應用非常成功，放置簡單，飼主可在家操作餵食，是中長期營養支持的最佳選擇。',
  common_mistakes: [
    '術後堅持「NPO 直到排氣」的過時觀念——現代證據支持 early enteral nutrition',
    '低白蛋白動物未先營養矯正就進行非急診手術',
    '長期飢餓動物恢復餵食時未監測電解質（再餵食症候群可致死）',
    '貓禁食超過 48 小時未積極介入營養支持',
  ],
  disease_data: null,
  diagnostic_data: null,
  procedure_data: null,
  visual_placeholders: [
    { position: '餵食途徑表格後', type: 'flowchart', description: '營養支持途徑選擇流程圖' },
  ],
  interactive_placeholders: [],
  drug_api_links: [],
  references: [
    { type: 'guideline', citation: 'ACVN/ESVCN Guidelines on Nutritional Assessment in Small Animals. J Small Anim Pract. 2011.', relevance: '營養評估指引' },
    { type: 'textbook', citation: 'Fossum TW. Small Animal Surgery, 5th ed. Elsevier, 2019.', relevance: '術後營養支持' },
    { type: 'journal', citation: 'Chan DL. Nutritional requirements of the critically ill patient. Clin Tech Small Anim Pract. 2004;19(1):1-5.', relevance: '重症營養需求' },
  ],
  is_current: true,
  created_at: now,
};

/** 麻醉基礎概念 — 概念型 */
const contentAnesthesiaBasics: NodeContent = {
  id: 'CONTENT-SURG-L1-004',
  node_id: 'SURG-L1-004',
  version: 1,
  summary: '麻醉是外科手術的必要前提。獸醫麻醉分為全身麻醉與局部/區域麻醉。全身麻醉的四要素為：鎮靜/催眠、鎮痛、肌肉鬆弛與自主神經反射抑制。麻醉流程包括術前評估（ASA 分級）、麻醉前給藥（premedication）、誘導（induction）、維持（maintenance）與甦醒（recovery）。ASA 分級是預測麻醉風險的基礎工具。',
  learning_objectives: [
    '執行 ASA 體格狀態分級並評估麻醉風險',
    '描述全身麻醉的四大要素',
    '列出常用麻醉前給藥、誘導與維持藥物',
    '說明術中麻醉監測的基本參數與警戒值',
    '辨識常見麻醉併發症並採取初步處置',
  ],
  key_points: [
    'ASA 分級：I（健康）→ II（輕微全身疾病）→ III（嚴重全身疾病）→ IV（危及生命）→ V（瀕死）',
    '麻醉四要素：鎮靜/催眠、鎮痛、肌肉鬆弛、自主神經抑制',
    'Premedication 常用組合：[藥物:Acepromazine] + [藥物:Methadone]（健康犬）或 [藥物:Midazolam] + [藥物:Fentanyl]（高風險犬）',
    '誘導：[藥物:Propofol] 4-6 mg/kg IV to effect（最常用）或 [藥物:Alfaxalone] 2-3 mg/kg IV',
    '維持：Isoflurane 或 Sevoflurane 吸入麻醉',
    '基本監測：HR、RR、SpO2、ETCO2、血壓、體溫',
    '低血壓定義：MAP < 60 mmHg → 組織灌流不足風險',
  ],
  body: `# 麻醉基礎概念

## 一、核心概念與機轉 (Core Concept & Mechanism)



### ASA 體格狀態分級
| ASA | 定義 | 範例 | 死亡率 |
|-----|------|------|--------|
| I | 健康 | 選擇性絕育 | 0.05% |
| II | 輕微全身疾病 | 控制良好的心臟病 | 0.1% |
| III | 嚴重全身疾病 | 脫水、貧血 | 1% |
| IV | 危及生命 | GDV、休克 | 5% |
| V | 瀕死 | 多器官衰竭 | > 10% |

### 全身麻醉流程
### 1. 術前評估
- 病史、理學檢查、基礎血檢
- ASA 分級
- 禁食：犬 6-8 小時、貓 4-6 小時

### 2. 麻醉前給藥（Premedication）
- 目的：鎮靜+鎮痛，降低誘導藥物需求量
- 健康犬：Acepromazine 0.01-0.05 mg/kg IM + Methadone 0.2-0.5 mg/kg IM
- 高風險犬：Midazolam 0.2-0.3 mg/kg IV + Fentanyl 2-5 mcg/kg IV

### 3. 誘導（Induction）
- Propofol 4-6 mg/kg IV to effect
- 氣管插管 → 連接麻醉迴路

### 4. 維持（Maintenance）
- 吸入麻醉：Isoflurane（MAC 1.28% 犬）或 Sevoflurane（MAC 2.36% 犬）
- CRI 鎮痛：Fentanyl 2-5 mcg/kg/hr 或 Ketamine 0.5 mg/kg/hr

### 5. 監測

| 參數 | 正常範圍 | 警戒值 |
|------|---------|--------|
| HR | 60-160 bpm（犬） | < 60 或 > 180 |
| MAP | 60-90 mmHg | < 60（低灌流） |
| SpO2 | > 95% | < 90% |
| ETCO2 | 35-45 mmHg | > 55 或 < 25 |
| 體溫 | 37-39°C | < 36°C |

## 二、臨床意義 (Clinical Significance)

## 三、人醫借鑒 (Translational Insights)

| 人醫工具/概念 | 獸醫應用潛力 | 現況 |
|-------------|-------------|------|
| 組織工程與再生醫學 | 犬骨缺損/軟骨修復的生物材料應用 | 幹細胞治療研究活躍，臨床轉譯有限 |
| 生物可吸收植入物 | 骨折固定免除二次拆除手術 | 部分產品已獸醫商業化 |
| Negative pressure wound therapy (NPWT) | 犬大面積傷口/開放性骨折加速癒合 | 獸醫已廣泛使用 VAC 系統 |
| 富血小板血漿（PRP） | 犬肌腱/韌帶損傷修復 | 臨床使用漸增，標準化不足 |

## 四、臨床爭議與知識空缺 (Controversies & Knowledge Gaps)

| 爭議議題 | 現況 | Evidence Level |
|---------|------|---------------|
| 不鏽鋼 vs 鈦合金植入物的優劣 | 鈦合金生物相容性較好但成本高，兩者臨床差異證據有限 | Level III |
| 可吸收縫線材質選擇（PDS vs Monocryl vs V-Loc） | 單絲 vs 倒鉤線在特定術式的優劣尚無大型比較 | Level III |
| 術前預防性抗生素的時機與選擇 | 第一代頭孢菌素為首選已有共識，但給藥時機（切皮前 30 min）的遵從率待提升 | Level I |`,
  clinical_pearl: 'ETCO2（呼氣末二氧化碳）是麻醉中最被低估的監測參數。它不僅反映通氣狀態（高 = 低通氣，低 = 過度通氣），還可作為循環功能的間接指標——心輸出量驟降時 ETCO2 會急遽下降，有時比血壓變化更早反映循環問題。ETCO2 突然歸零則提示氣管內管脫出或呼吸停止。',
  common_mistakes: [
    '僅依賴 SpO2 監測而忽略 ETCO2 和血壓',
    '術中低血壓未及時處理——MAP < 60 mmHg 超過 10 分鐘可造成腎損傷',
    '術後低體溫未積極回溫——低溫延長甦醒時間並增加傷口感染風險',
    '高風險動物（ASA III-V）使用與健康動物相同的麻醉方案',
  ],
  disease_data: null,
  diagnostic_data: null,
  procedure_data: null,
  visual_placeholders: [
    { position: '麻醉流程段落後', type: 'flowchart', description: '全身麻醉標準流程圖' },
  ],
  interactive_placeholders: [],
  drug_api_links: ['Propofol', 'Acepromazine', 'Methadone', 'Midazolam', 'Fentanyl'],
  references: [
    { type: 'textbook', citation: 'Grimm KA et al. Veterinary Anesthesia and Analgesia: The Fifth Edition of Lumb and Jones. Wiley-Blackwell, 2015.', relevance: '獸醫麻醉權威教材' },
    { type: 'textbook', citation: 'Fossum TW. Small Animal Surgery, 5th ed. Elsevier, 2019. Chapter 12: Anesthetic Considerations.', relevance: '手術麻醉考量' },
    { type: 'journal', citation: 'Brodbelt DC et al. The risk of death: the Confidential Enquiry into Perioperative Small Animal Fatalities. Vet Anaesth Analg. 2008;35(5):365-373.', relevance: '麻醉死亡率與風險因子研究' },
    { type: 'guideline', citation: 'AAHA Anesthesia and Monitoring Guidelines for Dogs and Cats. J Am Anim Hosp Assoc. 2020;56(2):59-82.', relevance: 'AAHA 麻醉與監測指引' },
  ],
  is_current: true,
  created_at: now,
};

/** 腹腔外科病理 — 機轉型 */
const contentAbdominalPathology: NodeContent = {
  id: 'CONTENT-SURG-L2-001',
  node_id: 'SURG-L2-001',
  version: 1,
  summary: '腹腔外科病理涵蓋消化道梗阻（異物、腸扭轉、GDV）、臟器破裂（脾臟腫瘤、子宮蓄膿穿孔）與腹膜炎的病理生理機轉。核心概念包括腸道阻塞後的病理級聯（近端擴張→黏膜缺血→細菌移轉→腹膜炎）、脾臟血管肉瘤破裂的出血性休克機轉、以及腹膜炎的全身性發炎反應（SIRS→MODS）。',
  learning_objectives: [
    '描述機械性腸阻塞的病理生理級聯',
    '說明腹膜炎導致全身性發炎反應的機轉',
    '解釋脾臟腫瘤破裂後的血流動力學變化',
    '區分化學性腹膜炎與細菌性腹膜炎',
  ],
  key_points: [
    '腸阻塞級聯：機械阻塞→近端擴張→黏膜缺血→細菌移轉→腸壁壞死→穿孔→腹膜炎',
    '腹膜炎分類：化學性（膽汁、尿液、胰液）vs 細菌性（穿孔、術後洩漏）',
    '腹膜炎→SIRS級聯：腹膜巨大吸收面積→細菌/內毒素快速入血→TNF-α/IL-1β/IL-6→SIRS→DIC→MODS',
    '脾臟 HSA 破裂：大量急性腹腔出血→低血容量性休克→代償性心搏過速→失代償→死亡',
    'GDV 機轉：胃扭轉→幽門/賁門雙重阻塞→後腔靜脈壓迫→靜脈回流↓→心輸出量↓→休克',
    '缺血再灌流損傷：GDV derotation後 ROS 釋放→全身性發炎→心律不整',
  ],
  body: `# 腹腔外科病理

## 一、核心概念與機轉 (Core Concept & Mechanism)



### 腸道梗阻病理生理
### 機械性阻塞級聯
1. 異物或扭轉造成管腔阻塞
2. 近端腸道液體與氣體積聚 → 擴張
3. 腸壁靜脈壓升高 → 微循環障礙
4. 黏膜缺血 → 屏障功能喪失
5. 細菌移轉（bacterial translocation）至腹腔與血流
6. 持續缺血 → 全層壞死 → 穿孔
7. 腹膜炎 → SIRS → 敗血症

### 電解質異常
- 高位阻塞（胃/十二指腸）：嘔吐大量 HCl → 低氯低鉀代謝性鹼中毒
- 低位阻塞（迴腸/結腸）：嘔吐較晚、脫水為主

### 腹膜炎
### 分類
- **化學性**：膽汁腹膜炎（膽囊破裂）、尿腹（膀胱破裂）、胰液漏出
- **細菌性**：腸穿孔、子宮蓄膿穿孔、術後吻合口洩漏

### SIRS 級聯
腹膜面積巨大（≈ 體表面積）→ 大量吸收細菌/毒素 → 全身性細胞激素釋放 → SIRS → 如未控制 → DIC → 多器官功能障礙 → 死亡

### 出血性休克（脾臟腫瘤破裂）
脾臟腫瘤壁薄脆弱 → 自發性破裂 → 急性大量腹腔出血 → 有效循環血量驟降 → 代償期（心搏過速、周邊血管收縮）→ 失代償期（低血壓、器官灌流不足）

## 二、臨床意義 (Clinical Significance)

## 三、人醫借鑒 (Translational Insights)

| 人醫工具/概念 | 獸醫應用潛力 | 現況 |
|-------------|-------------|------|
| 免疫調節型生物材料 | 術後植入物感染預防 | 人醫研究活躍，獸醫引入中 |
| 傷口癒合分子機轉靶向治療 | 慢性不癒合傷口新療法 | 基礎研究階段 |
| 生物膜（biofilm）破壞策略 | 植入物相關感染的治療突破 | 人醫與獸醫共同面臨的挑戰 |

## 四、臨床爭議與知識空缺 (Controversies & Knowledge Gaps)

| 爭議議題 | 現況 | Evidence Level |
|---------|------|---------------|
| 犬術後感染率基準值 | 各醫院感染監控標準化不足，數據差異大 | Level III |
| 電燒/超音波刀 vs 傳統止血的組織損傷比較 | 超音波刀/LigaSure 組織損傷較小的體外證據明確，臨床預後差異不一 | Level II |`,
  clinical_pearl: '腹膜炎的臨床嚴重度取決於汙染物的性質——膽汁腹膜炎與糞便性腹膜炎的預後差異極大。糞便性腹膜炎（腸穿孔）因大量細菌汙染，死亡率可高達 50-74%。膽汁腹膜炎若及時引流，預後相對較好。尿腹若膀胱破裂位置易修補且電解質矯正及時，預後也較佳。',
  common_mistakes: [
    '低估腸阻塞的緊迫性——阻塞超過 24-48 小時腸壁壞死風險急升',
    '忽略「細菌移轉」概念——即使腸壁尚未穿孔，嚴重缺血時細菌已可穿過黏膜屏障',
    '腹膜炎術後未進行腹腔灌洗或引流',
  ],
  disease_data: null,
  diagnostic_data: null,
  procedure_data: null,
  visual_placeholders: [
    { position: '腸道梗阻段落後', type: 'flowchart', description: '腸道阻塞病理生理級聯流程圖' },
  ],
  interactive_placeholders: [],
  drug_api_links: [],
  references: [
    { type: 'textbook', citation: 'Fossum TW. Small Animal Surgery, 5th ed. Elsevier, 2019.', relevance: '腹腔外科病理基礎' },
    { type: 'journal', citation: 'Bentley AM et al. Septic peritonitis in dogs and cats: a retrospective study of 140 cases. J Vet Emerg Crit Care. 2007;17(3):46.', relevance: '腹膜炎預後研究' },
    { type: 'textbook', citation: 'Tobias KM, Johnston SA. Veterinary Surgery: Small Animal, 2nd ed. Elsevier, 2018.', relevance: '腹腔外科病理生理' },
    { type: 'guideline', citation: 'BSAVA Manual of Canine and Feline Abdominal Surgery, 2nd ed. Bray J, Kirby B, eds. BSAVA, 2021.', relevance: '腹腔外科手術指引' },
  ],
  is_current: true,
  created_at: now,
};

/** 骨折癒合 — 機轉型 */
const contentFractureHealing: NodeContent = {
  id: 'CONTENT-SURG-L2-002',
  node_id: 'SURG-L2-002',
  version: 1,
  summary: '骨折癒合是骨組織獨特的修復過程，分為直接（primary/direct）癒合與間接（secondary/indirect）癒合。間接癒合為最常見的自然癒合方式，經歷發炎期、軟骨痂期、硬骨痂期與重塑期四個階段。直接癒合僅在剛性固定（rigid fixation）條件下發生。骨折癒合失敗分為延遲癒合（delayed union）與不癒合（nonunion），最常見原因為固定不穩定與血供不足。',
  learning_objectives: [
    '比較直接癒合與間接癒合的機轉與條件',
    '描述間接骨折癒合的四個階段',
    '列舉影響骨折癒合的正面與負面因素',
    '區分肥厚性不癒合與萎縮性不癒合',
    '說明「鑽石概念」（Diamond Concept）在骨折癒合中的應用',
  ],
  key_points: [
    '間接癒合四階段：發炎期（0-7天）→ 軟骨痂（1-4週）→ 硬骨痂（4-12週）→ 重塑（月-年）',
    '直接癒合：僅在骨板螺絲提供的剛性固定下發生（contact healing + gap healing）',
    'Wolff 定律：骨骼沿應力方向重塑——重塑期骨痂沿力線重新排列',
    '癒合所需四要素（Diamond Concept）：穩定性、血供、骨傳導支架、成骨細胞/生長因子',
    '肥厚性不癒合（hypertrophic）：血供充足但不穩定 → 骨痂過度增生但不架橋 → 需穩定固定',
    '萎縮性不癒合（atrophic）：血供不足 → 骨痂缺乏 → 需改善血供 + 骨移植',
    '幼犬癒合快（2-4 週），成犬較慢（6-12 週）——幼犬骨膜活性高',
  ],
  body: `# 骨折癒合

## 一、核心概念與機轉 (Core Concept & Mechanism)



### 間接癒合（Secondary/Indirect Healing）
最常見的自然癒合方式，在骨折端存在微動（micromotion）時發生。

### 1. 發炎期（0-7天）
- 骨折端出血 → 血腫形成（fracture hematoma）
- 發炎細胞浸潤（嗜中性球→巨噬細胞）
- 生長因子釋放（PDGF、TGF-β、BMP）

### 2. 軟骨痂期（Soft Callus，1-4週）
- 間充質幹細胞分化為軟骨細胞
- 骨折端周圍形成軟骨性骨痂（cartilaginous callus）
- 提供初步穩定性

### 3. 硬骨痂期（Hard Callus，4-12週）
- 軟骨內骨化（endochondral ossification）：軟骨轉化為編織骨
- 骨痂架橋（bridging callus）連接兩端
- X 光可見骨痂

### 4. 重塑期（Remodeling，月-年）
- 編織骨 → 層板骨（lamellar bone）
- Wolff 定律：沿應力方向重塑
- 最終恢復接近正常骨骼結構

### 直接癒合（Primary/Direct Healing）
僅在剛性固定（骨板螺絲 absolute stability）下發生：
- **Contact healing**：骨折端直接接觸 → Haversian remodeling → 層板骨直接跨越
- **Gap healing**：< 1mm 間隙 → 編織骨填充 → 重塑為層板骨
- 無可見骨痂形成

### 不癒合分類
| 類型 | 原因 | X光特徵 | 治療 |
|------|------|---------|------|
| 肥厚性 | 不穩定但有血供 | 大量骨痂但不架橋 | 改善穩定性 |
| 萎縮性 | 血供不足 | 骨端萎縮無骨痂 | 骨移植+穩定固定 |

## 二、臨床意義 (Clinical Significance)

## 三、人醫借鑒 (Translational Insights)

| 人醫工具/概念 | 獸醫應用潛力 | 現況 |
|-------------|-------------|------|
| 免疫調節型生物材料 | 術後植入物感染預防 | 人醫研究活躍，獸醫引入中 |
| 傷口癒合分子機轉靶向治療 | 慢性不癒合傷口新療法 | 基礎研究階段 |
| 生物膜（biofilm）破壞策略 | 植入物相關感染的治療突破 | 人醫與獸醫共同面臨的挑戰 |

## 四、臨床爭議與知識空缺 (Controversies & Knowledge Gaps)

| 爭議議題 | 現況 | Evidence Level |
|---------|------|---------------|
| 犬術後感染率基準值 | 各醫院感染監控標準化不足，數據差異大 | Level III |
| 電燒/超音波刀 vs 傳統止血的組織損傷比較 | 超音波刀/LigaSure 組織損傷較小的體外證據明確，臨床預後差異不一 | Level II |`,
  clinical_pearl: '小型犬（尤其 toy breed）的橈尺骨遠端骨折是骨折癒合中最具挑戰性的病例之一。這個部位血供相對較差、軟組織覆蓋薄，不癒合率可高達 20%。選用鎖定骨板（locking plate）可提供更佳的角穩定性，加上自體海綿骨移植（autogenous cancellous bone graft from proximal humerus）可顯著提高癒合率。',
  common_mistakes: [
    '混淆直接與間接癒合——骨板固定下看不到骨痂是正常的（直接癒合），不代表未癒合',
    '過早移除外固定架導致再骨折——需X光確認骨痂充分架橋',
    '將肥厚性不癒合與萎縮性不癒合用相同策略處理——前者需穩定，後者需血供+骨移植',
  ],
  disease_data: null,
  diagnostic_data: null,
  procedure_data: null,
  visual_placeholders: [
    { position: '間接癒合段落後', type: 'timeline', description: '骨折癒合四階段時間軸與組織學變化' },
  ],
  interactive_placeholders: [],
  drug_api_links: [],
  references: [
    { type: 'textbook', citation: 'Johnson AL, Houlton JEF, Vannini R. AO Principles of Fracture Management in the Dog and Cat. AO Publishing, 2005.', relevance: '骨折癒合生物學' },
    { type: 'textbook', citation: 'Fossum TW. Small Animal Surgery, 5th ed. Elsevier, 2019. Chapter 32.', relevance: '骨折癒合與固定原則' },
    { type: 'journal', citation: 'Giannoudis PV et al. Fracture healing: The diamond concept. Injury. 2007;38 Suppl 4:S11-25.', relevance: 'Diamond Concept 原始文獻' },
    { type: 'guideline', citation: 'AO Foundation. AO Principles of Fracture Management in the Dog and Cat: Fracture Biology and Healing. AO VET, 2020.', relevance: 'AO VET 骨折癒合生物學教學指引' },
  ],
  is_current: true,
  created_at: now,
};

/** 關節退化機轉 — 機轉型 */
const contentJointDegeneration: NodeContent = {
  id: 'CONTENT-SURG-L2-003',
  node_id: 'SURG-L2-003',
  version: 1,
  summary: '關節退化（骨關節炎, OA）是犬最常見的慢性疼痛來源，約影響 20% 的成犬。OA 的核心病理包括關節軟骨退化、軟骨下骨重塑、滑膜發炎與關節囊纖維化。機轉涉及機械性因素（關節不穩定、異常負載）與生物化學因素（促發炎細胞激素、基質金屬蛋白酶 MMPs）的惡性循環。CCLD、膝蓋骨脫位與髖關節發育不全為犬 OA 最常見的原發原因。',
  learning_objectives: [
    '描述正常關節軟骨的組成與功能',
    '說明 OA 中軟骨退化的分子機轉',
    '解釋機械不穩定如何啟動 OA 惡性循環',
    '列出犬 OA 的主要原發病因',
    '將 OA 機轉連結至治療策略（NSAIDs、關節保護）',
  ],
  key_points: [
    '正常關節軟骨：Type II collagen + Proteoglycans（aggrecan）+ 水 → 承受壓力與衝擊',
    'OA 啟動：機械不穩定（CCLD、MPL）→ 異常負載 → 軟骨微損傷',
    '促發炎級聯：IL-1β + TNF-α → MMPs（MMP-3, MMP-13）+ ADAMTS → 軟骨基質降解',
    '軟骨細胞反應：嘗試修復但合成不足以彌補降解 → 淨流失',
    '滑膜炎（Synovitis）：滑膜發炎釋放更多細胞激素 → 加速軟骨破壞 → 惡性循環',
    '軟骨下骨：硬化（sclerosis）+ 骨贅（osteophytes）形成',
    'NSAIDs 作用靶點：抑制 COX → 減少 PGE2 → 抗炎止痛',
  ],
  body: `# 關節退化機轉

## 一、核心概念與機轉 (Core Concept & Mechanism)



### 正常關節軟骨
關節軟骨是高度特化的結締組織：
- **Type II Collagen**（60% dry weight）：提供張力強度
- **Proteoglycans / Aggrecan**：吸水膨脹，提供壓縮強度
- **水**（65-80%）：軟骨的主要成分，負載時被擠出提供潤滑
- **軟骨細胞**：僅占體積 1-5%，但維持基質恆定

關節軟骨無血管、無神經、無淋巴，營養依賴滑液擴散。

### OA 發病機轉
### 啟動因子
- **機械不穩定**：CCLD → 脛骨前移 → 軟骨異常負載
- **異常對位**：MPL → 軟骨接觸面積改變 → 局部壓力升高
- **發育性疾病**：髖關節發育不全 → 關節不適配

### 惡性循環

軟骨微損傷 → 軟骨細胞釋放促發炎因子
→ IL-1β, TNF-α 上調
→ MMPs (MMP-3, MMP-13) + ADAMTS-4/5 活化
→ Type II collagen 降解 + Aggrecan 切割
→ 軟骨基質流失 → 承重能力下降
→ 更多微損傷 → 惡性循環

同時：
- 滑膜炎：滑膜 macrophages 活化 → 更多細胞激素
- 軟骨下骨：骨硬化 + 骨贅形成（身體嘗試增加穩定性）
- 關節囊：纖維化 → 活動度下降

### 犬 OA 常見原發病因
| 病因 | 機轉 | 好發 |
|------|------|------|
| CCLD | 脛骨前移不穩定 | 中大型犬 |
| MPL | 異常骨骼排列 | 小型犬 |
| 髖關節發育不全 | 關節不適配 | 大型犬 |
| OCD | 軟骨缺損 | 大型犬幼犬 |
| 創傷性關節損傷 | 關節面不整 | 任何 |

### 治療靶點
- **NSAIDs**：抑制 COX-2 → 減少 PGE2 → 抗炎止痛（Carprofen、Meloxicam）
- **抗 NGF 抗體（Bedinvetmab）**：阻斷 nerve growth factor → 減少疼痛訊號
- **關節保護品**：Omega-3（抗炎）、Glucosamine/Chondroitin（基質前驅物）
- **體重管理**：減重可減少 50% 以上的關節負載

## 二、臨床意義 (Clinical Significance)

## 三、人醫借鑒 (Translational Insights)

| 人醫工具/概念 | 獸醫應用潛力 | 現況 |
|-------------|-------------|------|
| 免疫調節型生物材料 | 術後植入物感染預防 | 人醫研究活躍，獸醫引入中 |
| 傷口癒合分子機轉靶向治療 | 慢性不癒合傷口新療法 | 基礎研究階段 |
| 生物膜（biofilm）破壞策略 | 植入物相關感染的治療突破 | 人醫與獸醫共同面臨的挑戰 |

## 四、臨床爭議與知識空缺 (Controversies & Knowledge Gaps)

| 爭議議題 | 現況 | Evidence Level |
|---------|------|---------------|
| 犬術後感染率基準值 | 各醫院感染監控標準化不足，數據差異大 | Level III |
| 電燒/超音波刀 vs 傳統止血的組織損傷比較 | 超音波刀/LigaSure 組織損傷較小的體外證據明確，臨床預後差異不一 | Level II |`,
  clinical_pearl: 'OA 犬最重要的治療介入不是藥物而是「體重管理」。研究顯示將 OA 犬的體重降至理想 BCS（4-5/9）可以減少 50% 以上的跛行嚴重度，效果不亞於 NSAIDs。在台灣，小型犬過重問題非常普遍，尤其是合併 MPL 的犬隻。減重應在任何 OA 治療方案中列為第一優先。',
  common_mistakes: [
    '將 OA 視為純粹的「磨損」問題而忽略發炎機轉——滑膜炎是 OA 疼痛的主要來源',
    '長期使用 NSAIDs 而未定期監測腎功能與消化道',
    '忽略原發病因（如 CCLD）的矯正——不處理根本不穩定只會加速 OA',
  ],
  disease_data: null,
  diagnostic_data: null,
  procedure_data: null,
  visual_placeholders: [
    { position: '惡性循環段落後', type: 'flowchart', description: 'OA 惡性循環分子機轉流程圖' },
  ],
  interactive_placeholders: [],
  drug_api_links: ['Carprofen', 'Meloxicam'],
  references: [
    { type: 'journal', citation: 'Anderson KL et al. Prevalence, duration and risk factors for appendicular osteoarthritis in a UK dog population under primary veterinary care. Sci Rep. 2018;8(1):5641.', relevance: '犬 OA 流行病學' },
    { type: 'textbook', citation: 'Fossum TW. Small Animal Surgery, 5th ed. Elsevier, 2019.', relevance: '關節疾病病理基礎' },
    { type: 'journal', citation: 'Impellizeri JA et al. Effect of weight reduction on clinical signs of lameness in dogs with hip osteoarthritis. J Am Vet Med Assoc. 2000;216(7):1089-1091.', relevance: '減重對 OA 跛行的影響' },
    { type: 'guideline', citation: 'AAHA Weight Management Guidelines for Dogs and Cats. J Am Anim Hosp Assoc. 2014;50(1):1-11.', relevance: '犬貓體重管理指引（OA 管理重要一環）' },
  ],
  is_current: true,
  created_at: now,
};

/** 術前影像評估 — 診斷型 */
const contentPreopImaging: NodeContent = {
  id: 'CONTENT-SURG-L4-001',
  node_id: 'SURG-L4-001',
  version: 1,
  summary: '術前影像評估是外科手術計畫的基礎，包括X光（放射線攝影）、超音波、CT與MRI。腹腔手術主要依賴腹部超音波與X光，骨科手術依賴雙正交X光與CT（複雜骨折），脊椎手術依賴MRI。急診影像評估（AFAST/TFAST）可在數分鐘內提供關鍵決策資訊。',
  learning_objectives: [
    '為不同手術類型選擇適當的術前影像工具',
    '執行 AFAST/TFAST 快速評估並解讀結果',
    '描述骨科 X 光的標準拍攝原則（兩正交+含上下關節）',
    '說明 CT 在複雜骨折與關節手術術前規劃中的價值',
  ],
  key_points: [
    'AFAST：4 個標準位置快速偵測腹腔積液，< 2 分鐘完成',
    'TFAST：胸腔超音波快速評估心包積液、氣胸與胸腔積液',
    '骨折 X 光原則：兩正交位（AP + lateral）、包含上下關節',
    '腹部超音波：脾臟腫塊、子宮蓄膿、膽囊疾病的首選影像',
    '胸腔 X 光三視角：右臥、左臥、VD/DV，評估肺轉移與心臟大小',
    'CT 優勢：3D 重建用於複雜關節內骨折、TPLO TPA 測量、脊椎骨折評估',
    'MRI：脊髓疾病金標準，術前精確定位壓迫段',
  ],
  body: `# 術前影像評估

## 一、檢查原理與適應症 (Principles & Indications)



### 急診影像（FAST 掃描）
### AFAST（Abdominal Focused Assessment with Sonography for Trauma）
四個標準位置：
1. **DH**（Diaphragmatic-hepatic）：右側肝腎間
2. **SR**（Spleno-renal）：左側脾腎間
3. **CC**（Cysto-colic）：膀胱周圍
4. **HR**（Hepato-renal）：肝腎間

陽性 = 無回音液體 → 腹腔積液（出血、尿液、腹膜炎滲出液）

### TFAST（Thoracic FAST）
- 心包積液（PE）
- 氣胸（absence of glide sign）
- 胸腔積液

### 軟組織手術影像
| 手術類型 | 首選影像 | 輔助影像 |
|---------|---------|---------|
| GDV | 右側臥腹部 X 光 | 無（需緊急手術） |
| 脾臟腫瘤 | 腹部超音波 + AFAST | 胸腔 X 光（轉移評估） |
| 子宮蓄膿 | 腹部超音波 | 腹部 X 光 |
| 腸道異物 | 三視角腹部 X 光 | 超音波 |
| 膽囊疾病 | 腹部超音波 | |

### 骨科手術影像
### X 光標準原則
- 兩正交位（AP + lateral）
- 包含骨折上下各一個關節
- 對側正常肢作比較（幼犬生長板評估）

### CT 適應症
- 複雜關節內骨折術前 3D 規劃
- TPLO 術前 TPA 精確測量
- 肘關節 MCD（medial coronoid disease）
- 脊椎骨折/脫位評估

## 二、判讀要點 (Interpretation)

## 三、常見陷阱 (Pitfalls)

## 四、人醫借鑒 (Translational Insights)

| 人醫工具/概念 | 獸醫應用潛力 | 現況 |
|-------------|-------------|------|
| 術中 CT/MRI 導航 | 脊椎手術即時影像導引 | 少數獸醫轉介中心引入 |
| AI 輔助影像診斷 | 骨折分類、關節評估自動化 | 人醫 AI 已商業化，獸醫開發中 |
| Contrast-enhanced 超音波（CEUS） | 腹腔腫塊血管化評估、術前規劃 | 獸醫研究階段 |
| 雙能 CT（DECT） | 組織成分分析、結石成分鑑定 | 人醫成熟，獸醫引入中 |

## 五、臨床爭議與知識空缺 (Controversies & Knowledge Gaps)

| 爭議議題 | 現況 | Evidence Level |
|---------|------|---------------|
| 犬髖關節發育不良的影像篩檢方法（OFA vs PennHIP） | 兩種系統的敏感度/特異度比較，品種計畫採用標準不同 | Level II |
| 術前 CT vs 傳統 X 光在骨折評估的必要性 | 複雜骨折 CT 增加手術規劃精確度，但成本效益待評估 | Level III |`,
  clinical_pearl: 'GDV 的診斷影像要求非常特定——必須拍攝「右側臥位」（right lateral recumbency）腹部 X 光。在此位置可見到特徵性的「雙氣泡徵」或「Popeye arm sign」：幽門軟組織密度帶將胃分隔為兩個充氣腔室。左側臥位可能無法清楚顯示此徵象。但記住：影像確認不應延遲急診穩定化處理。',
  common_mistakes: [
    'GDV 使用左側臥位X光而錯失典型影像特徵',
    '骨折X光僅拍一個視角或未包含鄰近關節',
    'AFAST 假陰性——少量積液可能被遺漏，臨床高度懷疑時應重複檢查',
    '僅以 X 光評估軟組織腹腔疾病而未加做超音波',
  ],
  disease_data: null,
  diagnostic_data: {
    indication: ['任何計畫性或急診手術的術前評估', '創傷評估（AFAST/TFAST）', '腫瘤分期（胸腔X光+腹部超音波）', '骨折術前固定方式規劃'],
    contraindication: ['CT/MRI 需全身麻醉——嚴重不穩定患者需先穩定', 'X 光禁忌：無絕對禁忌，但懷孕動物需評估效益風險'],
    technique: 'AFAST：右側臥位，線性或曲面探頭掃描 4 個標準位置。腹部X光：三視角（右臥、左臥、VD）。骨折X光：兩正交位含上下關節。CT：全身麻醉，薄層掃描 + 3D 重建。',
    normal_findings: [
      { finding: 'AFAST 四點無積液', description: '所有四個位置未見無回音液體', significance: '排除顯著腹腔積液（但少量可能遺漏）' },
      { finding: '腹部X光正常氣體分布', description: '胃與腸道少量氣體，分布均勻', significance: '排除腸阻塞與 GDV' },
    ],
    abnormal_findings: [
      { finding: 'AFAST 陽性', description: '一個或多個位置見無回音液體', significance: '腹腔積液——出血、腹膜炎或尿腹' },
      { finding: '右臥位雙氣泡徵', description: '胃被軟組織帶分隔為兩充氣腔室', significance: 'GDV 確診' },
      { finding: '骨折線可見', description: '骨皮質不連續性', significance: '骨折確診，需評估分型' },
    ],
    interpretation_guide: '1. 急診先做 FAST → 2. 穩定後依手術類型選擇適當影像 → 3. 系統性判讀 → 4. 結合臨床做手術決策。',
    pitfalls: ['AFAST 對少量積液（< 10 mL/kg）敏感度有限', '非透光異物X光可能正常', '體型極小的動物超音波評估困難'],
    sensitivity_specificity: 'AFAST 對中等量以上腹腔積液敏感度 > 90%。X光對不透光異物敏感度高但對軟組織異物低。CT 對骨折細節的敏感度接近 100%。',
    cost_benefit: 'AFAST 免費且快速（< 2分鐘），應列為創傷急診標準步驟。X光費用低、普及率高。CT/MRI 費用較高但對複雜病例不可或缺。',
  },
  procedure_data: null,
  visual_placeholders: [
    { position: 'AFAST 段落後', type: 'annotated_image', description: 'AFAST 四個標準掃描位置示意圖' },
  ],
  interactive_placeholders: [],
  drug_api_links: [],
  references: [
    { type: 'journal', citation: 'Boysen SR et al. Evaluation of a focused assessment with sonography for trauma protocol to detect free abdominal fluid in dogs involved in motor vehicle accidents. J Am Vet Med Assoc. 2004;225(8):1198-1204.', relevance: 'AFAST 原始驗證研究' },
    { type: 'textbook', citation: 'Fossum TW. Small Animal Surgery, 5th ed. Elsevier, 2019.', relevance: '術前影像評估' },
    { type: 'textbook', citation: 'Thrall DE. Textbook of Veterinary Diagnostic Radiology, 7th ed. Elsevier, 2018.', relevance: '獸醫放射學教材' },
    { type: 'guideline', citation: 'Lisciandro GR. AFAST and TFAST Clinical Pet Protocols. In: Point-of-Care Ultrasound Techniques for the Small Animal Practitioner, 2nd ed. Wiley-Blackwell, 2021.', relevance: 'AFAST/TFAST 臨床標準化掃描指引' },
  ],
  is_current: true,
  created_at: now,
};

/** 術中決策 — 診斷型 */
const contentIntraopDecision: NodeContent = {
  id: 'CONTENT-SURG-L4-002',
  node_id: 'SURG-L4-002',
  version: 1,
  summary: '術中決策是外科醫師在手術過程中根據直視下發現即時做出的臨床判斷。關鍵決策包括：腸道活性評估（viable vs non-viable → 切開 vs 切除吻合）、胃壁壞死評估（GDV 是否需 partial gastrectomy）、腫瘤可切除性評估（margins, 侵犯重要結構）、以及骨折復位品質與固定方式調整。術中決策品質直接影響手術結果。',
  learning_objectives: [
    '運用臨床指標評估腸道活性（viable vs non-viable）',
    '描述 GDV 術中胃壁壞死的判斷標準',
    '說明腫瘤手術中邊緣（margin）評估的原則',
    '列出術中常見的「計畫外發現」與應對策略',
  ],
  key_points: [
    '腸道活性四項評估：顏色（粉紅=好，灰黑=壞死）、蠕動、動脈搏動、切開後出血',
    '腸道壞死指征：灰黑色、無蠕動、無漿膜面血管搏動、切開無出血 → 需切除吻合',
    'GDV 胃壁壞死：灰綠/黑色、薄紙狀、漿膜面血管缺失 → partial gastrectomy',
    '腫瘤邊緣原則：軟組織肉瘤需 3 cm lateral + 1 fascial plane deep margin',
    '術中「意外發現」處理：先完成原計畫手術，再評估新發現的處理方式',
    '術中組織送檢決策：FNA/印片（快速評估）或術中冰凍切片（有限醫院可做）',
  ],
  body: `# 術中決策

## 一、檢查原理與適應症 (Principles & Indications)



### 腸道活性評估
這是腸道異物/扭轉手術中最關鍵的決策——決定需要腸切開還是腸切除吻合。

### 活性評估四指標

| 指標 | Viable | Non-viable |
|------|--------|------------|
| 顏色 | 粉紅至紅 | 灰、紫黑、綠 |
| 蠕動 | 存在 | 消失 |
| 動脈搏動 | 漿膜面可見搏動 | 消失 |
| 切開出血 | 切開後活動性出血 | 無出血 |

邊界可疑（borderline）時：溫熱生理食鹽水紗布覆蓋 5-10 分鐘後重新評估。仍可疑則切除較安全。

### GDV 術中決策
### 胃壁評估
- 正常：粉紅、有光澤
- 缺血：暗紅、薄、出血點
- 壞死：灰綠/黑色、薄紙狀、剝離感

### 決策
- 局灶壞死 < 25% 胃壁：partial gastrectomy + gastropexy
- 廣泛壞死 > 50%：預後極差，需與飼主討論（可能安樂死）
- 脾臟：評估是否需同時 splenectomy

### 腫瘤手術邊緣
| 腫瘤類型 | 建議邊緣 | 備注 |
|---------|---------|------|
| 軟組織肉瘤 | 3 cm lateral + 1 fascial plane | 沿筋膜面整體切除 |
| 肥大細胞腫瘤 | 2-3 cm lateral | 取決於 grade |
| 良性腫瘤 | 0.5-1 cm | 完整切除即可 |

### 術中意外發現處理原則
1. 先完成原計畫手術
2. 系統性腹腔探查
3. 記錄所有異常發現
4. 可安全處理的同時處理（如腹腔腫塊 FNA）
5. 需要額外準備的安排二次手術

## 二、判讀要點 (Interpretation)

## 三、常見陷阱 (Pitfalls)

## 四、人醫借鑒 (Translational Insights)

| 人醫工具/概念 | 獸醫應用潛力 | 現況 |
|-------------|-------------|------|
| 術中 CT/MRI 導航 | 脊椎手術即時影像導引 | 少數獸醫轉介中心引入 |
| AI 輔助影像診斷 | 骨折分類、關節評估自動化 | 人醫 AI 已商業化，獸醫開發中 |
| Contrast-enhanced 超音波（CEUS） | 腹腔腫塊血管化評估、術前規劃 | 獸醫研究階段 |
| 雙能 CT（DECT） | 組織成分分析、結石成分鑑定 | 人醫成熟，獸醫引入中 |

## 五、臨床爭議與知識空缺 (Controversies & Knowledge Gaps)

| 爭議議題 | 現況 | Evidence Level |
|---------|------|---------------|
| 犬髖關節發育不良的影像篩檢方法（OFA vs PennHIP） | 兩種系統的敏感度/特異度比較，品種計畫採用標準不同 | Level II |
| 術前 CT vs 傳統 X 光在骨折評估的必要性 | 複雜骨折 CT 增加手術規劃精確度，但成本效益待評估 | Level III |`,
  clinical_pearl: '腸道活性評估中，「灰色地帶」（borderline viability）是最困難的判斷。一個實用技巧：用溫熱（37-38°C）生理食鹽水浸潤的紗布覆蓋可疑腸段 5-10 分鐘，然後重新評估。如果顏色改善且蠕動恢復，很可能是活的。如果仍然可疑——寧可多切一段健康腸道做吻合，也不要留下壞死腸段冒術後洩漏的風險。',
  common_mistakes: [
    '腸道活性判斷過於保守導致留下壞死腸段→術後洩漏→腹膜炎',
    'GDV 術中未仔細評估整個胃壁——壞死區域可能在大彎側背面',
    '腫瘤切除邊緣不足→局部復發',
    '發現意外腫塊時未先完成原計畫手術就貿然處理→手術時間延長、併發症增加',
  ],
  disease_data: null,
  diagnostic_data: {
    indication: ['消化道手術中腸道活性評估', 'GDV 術中胃壁壞死判斷', '腫瘤手術中邊緣與可切除性評估', '探查性剖腹術中異常發現處理'],
    contraindication: ['無絕對禁忌——術中決策為手術固有組成部分'],
    technique: '腸道活性：直視評估顏色+蠕動+血管搏動，可輔以溫敷後再評估或切開測試出血。GDV胃壁：系統性從賁門到幽門檢查全胃壁，注意大彎側與胃底部。腫瘤邊緣：術前以皮膚標記計畫切除線，術中確認深層邊緣。',
    normal_findings: [
      { finding: '腸道粉紅有蠕動', description: '腸壁顏色粉紅、漿膜面有光澤、可見蠕動波', significance: '腸道活性良好，可行腸切開取出異物' },
    ],
    abnormal_findings: [
      { finding: '腸段灰黑無蠕動', description: '灰黑色腸段、無蠕動、漿膜面無血管搏動', significance: '腸壁壞死，需切除吻合' },
      { finding: '胃壁灰綠薄紙狀', description: 'GDV 術中胃壁呈灰綠或黑色、質地薄如紙', significance: '胃壁壞死，需 partial gastrectomy' },
    ],
    interpretation_guide: '1. 系統性評估所有暴露組織 → 2. 可疑時溫敷再評估 → 3. 仍可疑時寧切勿留 → 4. 記錄所有發現供病理參考。',
    pitfalls: ['漿膜面外觀正常但黏膜面已壞死（穿壁壞死由內而外）', '腸套疊復位後腸道外觀正常但數天後壞死'],
    sensitivity_specificity: '直視下腸道活性評估的準確率約 80-85%。可疑時溫敷再評估或 fluorescein 染色可提高準確率。',
    cost_benefit: '術中決策不額外增加費用但直接決定手術結果與患者預後。',
  },
  procedure_data: null,
  visual_placeholders: [
    { position: '腸道活性段落後', type: 'comparison_table', description: 'Viable vs Non-viable 腸道外觀對照圖' },
  ],
  interactive_placeholders: [],
  drug_api_links: [],
  references: [
    { type: 'textbook', citation: 'Fossum TW. Small Animal Surgery, 5th ed. Elsevier, 2019.', relevance: '術中決策與組織活性評估' },
    { type: 'textbook', citation: 'Tobias KM, Johnston SA. Veterinary Surgery: Small Animal, 2nd ed. Elsevier, 2018.', relevance: '術中判斷標準教材' },
    { type: 'journal', citation: 'Grimes JA et al. Identification of risk factors for septic peritonitis and failure to survive following gastrointestinal surgery. J Am Vet Med Assoc. 2011;238(4):486-494.', relevance: '消化道手術結果與風險因子' },
    { type: 'guideline', citation: 'ACVS Surgical Summit Proceedings: Intraoperative Decision-Making in Abdominal Surgery. Vet Surg. 2019;48(S1).', relevance: '術中決策共識討論' },
  ],
  is_current: true,
  created_at: now,
};

/** 骨科影像判讀 — 診斷型 */
const contentOrthoImaging: NodeContent = {
  id: 'CONTENT-SURG-L4-003',
  node_id: 'SURG-L4-003',
  version: 1,
  summary: '骨科影像判讀是犬貓骨科手術規劃的基礎。核心技能包括骨折 X 光分類（AO/ASIF系統）、骨關節炎分級、脛骨平台角（TPA）測量（TPLO術前必要）、生長板骨折分類（Salter-Harris I-V）與骨腫瘤影像特徵辨識。CT 的 3D 重建在複雜關節內骨折與矯正截骨的術前規劃中不可或缺。',
  learning_objectives: [
    '運用 AO/ASIF 系統分類骨折',
    '在 X 光上測量脛骨平台角（TPA）',
    '辨識 Salter-Harris I-V 型生長板骨折',
    '描述骨腫瘤的典型 X 光特徵',
    '列出骨關節炎 X 光分級標準',
  ],
  key_points: [
    'AO 骨折分類：橫斷/短斜/長斜/螺旋/粉碎，決定固定方式選擇',
    'TPA 測量：正常犬約 22-25度，TPLO 術後目標 5-6.5度',
    'Salter-Harris：I（經生長板）、II（+骨幹骨折）、III（+骨骺骨折）、IV（貫穿兩端）、V（壓碎型）',
    'V 型最易遺漏——X 光可能正常但生長板已損傷',
    '骨腫瘤影像三要素：溶骨性（lytic）、增生性（productive）、混合性',
    '骨肉瘤典型：幹骺端溶骨+日曬狀/Codman三角骨膜反應，不越過關節面',
    'OA X 光分級：骨贅（osteophytes）、關節腔狹窄、軟骨下硬化、關節積液',
  ],
  body: `# 骨科影像判讀

## 一、檢查原理與適應症 (Principles & Indications)



### 骨折分類（AO/ASIF）
### 依型態

| 類型 | 描述 | 穩定性 | 固定首選 |
|------|------|--------|---------|
| 橫斷 | 垂直骨長軸 | 軸向穩定 | 骨板或 IM pin |
| 短斜 | < 45度 | 中度不穩 | 骨板 + lag screw |
| 長斜 | > 45度 | 不穩定 | 骨板 + cerclage wire |
| 螺旋 | 旋轉力 | 不穩定 | 骨板 + cerclage |
| 粉碎 | ≥ 3碎片 | 高度不穩 | bridging plate |

### 生長板骨折（Salter-Harris）
| 類型 | 骨折線位置 | 預後 |
|------|-----------|------|
| I | 僅經生長板 | 良好 |
| II | 生長板 + 骨幹側 | 良好（最常見） |
| III | 生長板 + 骨骺側 | 中等（關節面受累） |
| IV | 貫穿骨幹+生長板+骨骺 | 差（跨越生長板） |
| V | 生長板壓碎 | 最差（X光可能正常） |

### 骨腫瘤影像
### 骨肉瘤（Osteosarcoma）
- 好發：大型犬長骨幹骺端
- 溶骨性破壞 + 日曬狀（sunburst）骨膜反應
- Codman 三角（lifted periosteum）
- **不越過關節面**（與感染性骨炎鑑別）

### 鑑別
- 骨髓炎：越過關節面、全身感染徵象
- 轉移性骨腫瘤：多灶性溶骨

## 二、判讀要點 (Interpretation)

### TPA 測量（TPLO 術前）
測量步驟：
1. 拍攝標準側位膝關節 X 光（膝屈曲 90度）
2. 畫脛骨機械軸線
3. 畫脛骨平台線（內側與外側脛骨髁的切線）
4. 兩線夾角 = TPA
- 正常犬：22-25度
- TPLO 目標：旋轉脛骨平台使 TPA ≈ 5-6.5度

## 三、常見陷阱 (Pitfalls)

## 四、人醫借鑒 (Translational Insights)

| 人醫工具/概念 | 獸醫應用潛力 | 現況 |
|-------------|-------------|------|
| 術中 CT/MRI 導航 | 脊椎手術即時影像導引 | 少數獸醫轉介中心引入 |
| AI 輔助影像診斷 | 骨折分類、關節評估自動化 | 人醫 AI 已商業化，獸醫開發中 |
| Contrast-enhanced 超音波（CEUS） | 腹腔腫塊血管化評估、術前規劃 | 獸醫研究階段 |
| 雙能 CT（DECT） | 組織成分分析、結石成分鑑定 | 人醫成熟，獸醫引入中 |

## 五、臨床爭議與知識空缺 (Controversies & Knowledge Gaps)

| 爭議議題 | 現況 | Evidence Level |
|---------|------|---------------|
| 犬髖關節發育不良的影像篩檢方法（OFA vs PennHIP） | 兩種系統的敏感度/特異度比較，品種計畫採用標準不同 | Level II |
| 術前 CT vs 傳統 X 光在骨折評估的必要性 | 複雜骨折 CT 增加手術規劃精確度，但成本效益待評估 | Level III |`,
  clinical_pearl: 'Salter-Harris V 型生長板骨折是最容易遺漏的類型——因為 X 光上可能完全正常。它是生長板的壓碎型損傷，不會顯示骨折線。臨床上，如果幼犬有外傷史且觸診生長板區域疼痛，即使 X 光正常也應懷疑 SH-V。需追蹤 X 光（2-4 週後）觀察是否出現生長停滯線（Harris growth arrest line）或角度畸形。',
  common_mistakes: [
    'TPA 測量時膝關節屈曲角度不標準導致測量誤差',
    '僅拍一個視角的骨折 X 光遺漏骨折線',
    '將 Salter-Harris V 型的正常 X 光判讀為「無骨折」',
    '將骨肉瘤誤診為骨髓炎而延誤截肢時機',
  ],
  disease_data: null,
  diagnostic_data: {
    indication: ['骨折術前分類與固定方式規劃', 'CCLD 術前 TPA 測量（TPLO 規劃）', '幼犬骨折生長板評估', '跛行犬骨關節炎分級', '疑似骨腫瘤評估'],
    contraindication: ['CT 需全身麻醉——嚴重不穩定患者需先穩定'],
    technique: '骨折 X 光：兩正交位含上下關節，鎮靜下拍攝確保品質。TPA 測量：標準側位膝關節 X 光，使用影像軟體測量。CT 3D 重建：全身麻醉薄層掃描後電腦重建。',
    normal_findings: [
      { finding: '骨皮質連續', description: '所有骨骼皮質連續完整', significance: '排除骨折' },
      { finding: '關節面平滑', description: '關節面光滑、關節腔正常', significance: '排除 OA 與關節內骨折' },
    ],
    abnormal_findings: [
      { finding: '長骨粉碎骨折', description: '≥ 3 骨折碎片，高度不穩定', significance: '需 bridging plate 固定' },
      { finding: '幹骺端溶骨+骨膜反應', description: '大型犬長骨幹骺端溶骨+日曬狀骨膜反應', significance: '骨肉瘤高度懷疑' },
      { finding: 'TPA 30度', description: '脛骨平台角過陡', significance: 'TPLO 適應症，需旋轉至目標 5-6.5度' },
    ],
    interpretation_guide: '1. 系統性檢視所有骨骼（不要只看疼痛處）→ 2. 骨折分類 → 3. 測量相關參數 → 4. 結合臨床做手術規劃。',
    pitfalls: ['不完全骨折（incomplete/greenstick）在幼犬可能僅見輕微皮質彎曲', 'SH-V X光可能正常', '應力性骨折初期可能不可見'],
    sensitivity_specificity: 'X 光對完全骨折敏感度接近 100%。對 SH-V 敏感度低。CT 對所有骨折類型敏感度 > 99%。',
    cost_benefit: 'X 光為骨科影像基礎，費用低、普及率高。CT 費用較高但對複雜骨折手術規劃不可或缺。',
  },
  procedure_data: null,
  visual_placeholders: [
    { position: 'TPA 測量段落後', type: 'annotated_image', description: 'TPA 測量方法標示圖' },
    { position: 'Salter-Harris 段落後', type: 'comparison_table', description: 'Salter-Harris I-V 型 X 光特徵對照' },
  ],
  interactive_placeholders: [],
  drug_api_links: [],
  references: [
    { type: 'textbook', citation: 'Johnson AL, Houlton JEF, Vannini R. AO Principles of Fracture Management in the Dog and Cat. AO Publishing, 2005.', relevance: 'AO 骨折分類系統' },
    { type: 'textbook', citation: 'Thrall DE. Textbook of Veterinary Diagnostic Radiology, 7th ed. Elsevier, 2018.', relevance: '骨科影像判讀標準教材' },
    { type: 'textbook', citation: 'Fossum TW. Small Animal Surgery, 5th ed. Elsevier, 2019.', relevance: '骨科手術影像評估' },
    { type: 'guideline', citation: 'AO Foundation. AO Principles of Fracture Management in the Dog and Cat: Fracture Classification. AO VET, 2020.', relevance: 'AO VET 骨折分類系統標準指引' },
    { type: 'journal', citation: 'Bardet JF et al. Radiographic assessment of fracture healing in dogs and cats: a review. Vet Comp Orthop Traumatol. 2010;23(6):379-388.', relevance: '犬貓骨折癒合影像學評估' },
  ],
  is_current: true,
  created_at: now,
};

/** 軟組織手術 — 治療型 */
const contentSoftTissueSurgery: NodeContent = {
  id: 'CONTENT-SURG-L5-001',
  node_id: 'SURG-L5-001',
  version: 1,
  summary: '小動物軟組織手術涵蓋腹腔、胸腔、頭頸部及泌尿生殖道手術。本節以最常見的探查性剖腹術（exploratory laparotomy）為核心，延伸至脾臟切除、腸切除吻合、膀胱切開取石、會陰疝氣修補等高頻手術，強調手術入路選擇、組織處理原則、止血技術與併發症預防。',
  learning_objectives: [
    '描述探查性剖腹術的適應症、入路與系統性探查流程',
    '執行基本腸切除吻合並評估腸管存活力',
    '選擇適當的脾臟切除技術並處理脾臟出血',
    '說明膀胱切開取石與膀胱縫合的關鍵技巧',
    '辨識軟組織手術常見併發症並制定預防策略',
  ],
  key_points: [
    '腹中線入路（ventral midline）是探查性剖腹術的標準切口，從劍突至恥骨可完整探查',
    '腸管存活力評估：色澤（粉紅色）、蠕動（pinch test）、動脈搏動、出血能力',
    '腸切除吻合縫合間距 2-3 mm，咬合寬度 3-4 mm，黏膜外翻型縫合（simple interrupted appositional）',
    '脾臟切除時先結紮短胃動脈再處理脾動靜脈，雙重結紮（double ligation）',
    '膀胱切開取石後以 2-0 或 3-0 可吸收線連續縫合（appositional, non-penetrating into lumen ideally）',
    '腸吻合處 dehiscence 率約 6-16%，最常發生於術後 3-5 天',
  ],
  body: `# 軟組織手術

## 一、治療原理 (Treatment Principles)



### 概述
軟組織手術是小動物外科最廣泛的分支，涵蓋消化道、泌尿生殖道、呼吸道、肝膽胰脾及頭頸部手術。本節著重臨床最常執行的手術類型及其基本技巧。

### 探查性剖腹術 (Exploratory Laparotomy)
### 適應症
- 急性腹痛原因不明
- 腹腔內出血（hemoabdomen）
- 消化道異物或腸阻塞
- 腹腔腫瘤切除
- 臟器扭轉（胃、脾、腸繫膜）

### 系統性探查流程（Clockwise Exploration）
1. 開腹後先取腹水做細胞學/培養
2. 肝臟（各葉）→ 胃 → 脾臟
3. 十二指腸 → 胰臟 → 空腸（近端至遠端）→ 迴腸 → 盲腸 → 結腸
4. 腎臟 → 腎上腺 → 輸尿管 → 膀胱 → 子宮/攝護腺
5. 淋巴結（腸繫膜、下腰）→ 橫膈

### 腸切除吻合 (Intestinal Resection & Anastomosis)
### 關鍵原則
- 切除邊緣距離病灶 ≥ 1-2 cm 健康組織
- 腸管口徑不等時可行斜切（oblique cut）或反腸繫膜側切開（anti-mesenteric incision）
- 推薦 Simple interrupted appositional 縫合，3-0 至 4-0 可吸收線（PDS 或 Monocryl）
- 大網膜（omental wrap）可增加吻合處血供與密封性

### 術後腸管恢復
- 犬：術後 12-24 小時可嘗試少量飲水；貓：early enteral nutrition 有助恢復
- 監測發燒、腹痛、嘔吐等 dehiscence 徵兆

### 脾臟切除術 (Splenectomy)
- 全脾切除適應症：脾臟腫瘤、脾臟扭轉、嚴重創傷
- 部分脾切除：局灶性病灶且脾臟功能保留需求
- 脾臟血管處理以 LigaSure 或 vessel sealing device 可大幅縮短手術時間

### 膀胱切開術 (Cystotomy)
- 背側切開入路（ventral midline to bladder, dorsal cystotomy）避免損傷輸尿管開口
- 取石後以紅色橡膠導管 retrograde flush 確認尿道無殘留結石
- 術後建議 48 小時留置導尿管並進行密閉式尿液收集

### 止血技術
| 方法 | 適用情境 | 特點 |
|------|----------|------|
| 電燒 (Monopolar/Bipolar) | 小血管 < 2 mm | 最常用，注意熱傳導損傷 |
| LigaSure / Harmonic | 血管 ≤ 7 mm | 封合可靠，縮短手術時間 |
| 鈦夾 (Hemoclip) | 特定血管結紮 | 快速但需適當尺寸 |
| 縫合結紮 | 大血管 > 5 mm | 最可靠，大型血管首選 |
| 止血明膠/氧化纖維素 | 實質器官滲血 | 輔助局部止血 |

## 二、藥物/方法比較 (Comparison)

## 三、併發症與監控 (Complications & Monitoring)

## 四、預後影響 (Prognostic Impact)

## 五、人醫借鑒 (Translational Insights)

| 人醫工具/概念 | 獸醫應用潛力 | 現況 |
|-------------|-------------|------|
| ERAS（Enhanced Recovery After Surgery）protocol | 犬術後加速康復方案——減少住院天數 | 獸醫個別要素已被採用（多模式止痛、早期進食） |
| 多模式止痛（multimodal analgesia） | 犬貓術後疼痛管理標準化 | 獸醫廣泛推行中 |
| 區域麻醉/超音波導引神經阻斷 | 犬後肢手術的 sciatic/femoral block | 獸醫使用快速增長 |
| 抗生素骨水泥（ALBC） | 犬骨髓炎/植入物感染局部高濃度抗生素 | 獸醫骨科已採用 |

## 六、臨床爭議與知識空缺 (Controversies & Knowledge Gaps)

| 爭議議題 | 現況 | Evidence Level |
|---------|------|---------------|
| 犬 NSAIDs 長期使用的腎毒性風險 | 短期安全性確認，長期（>6 月）腎功能影響數據有限 | Level II |
| 犬骨折固定——鎖定板（LCP）vs 傳統 DCP 的臨床差異 | 生物力學優勢明確，臨床預後差異的前瞻性比較不足 | Level II |
| 犬 CCL 手術後復健物理治療的證據等級 | 經驗性支持復健加速恢復，但 RCT 數據有限 | Level III |`,
  clinical_pearl: '腸切除吻合後，用大網膜包裹吻合處（omental wrap）不僅增加血供，也能在早期 dehiscence 時形成屏障，減少致命性腹膜炎。這是一個簡單但能顯著降低風險的步驟。',
  common_mistakes: [
    '腸切除時未確認切除邊緣的腸管血供充足',
    '腸吻合縫合間距過大（> 4 mm）或張力過大導致 dehiscence',
    '脾臟切除時拉扯過大導致短胃動脈撕裂出血',
    '膀胱切開後未做 retrograde flush 確認尿道通暢',
    '探查性剖腹術未做系統性檢查而遺漏病灶',
  ],
  disease_data: null,
  diagnostic_data: null,
  procedure_data: {
    equipment: [
      { name: 'Balfour retractor', description: '腹壁自持牽引器', required: true },
      { name: 'Doyen intestinal forceps', description: '非壓碎型腸鉗', required: true },
      { name: 'LigaSure / Vessel sealing device', description: '血管封合裝置', required: false },
      { name: 'Suction apparatus', description: '腹腔抽吸裝置', required: true },
      { name: 'PDS / Monocryl 3-0, 4-0', description: '可吸收單絲縫線', required: true },
    ],
    patient_preparation: '全身麻醉、仰臥固定、腹部大範圍剃毛（劍突至恥骨，兩側至乳頭線）、標準無菌消毒。術前預防性抗生素（cefazolin 22 mg/kg IV）於切皮前 30 分鐘給予。',
    step_by_step: [
      { step_number: 1, title: '切皮與入腹', description: '以腹中線切口從劍突後方至恥骨前方，依序切開皮膚、皮下、白線（linea alba），注意避免損傷鐮狀韌帶。', tips: ['白線切開時用刀尖挑起避免損傷下方腸管', '使用 Mayo 剪刀沿白線延伸切口'], image_placeholder: null },
      { step_number: 2, title: '腹腔探查', description: '置入 Balfour retractor，以濕紗布保護腸管，按順時針系統性探查所有臟器。取腹水送檢。', tips: ['用體溫生理食鹽水浸濕紗布', '全程保持腸管濕潤'], image_placeholder: null },
      { step_number: 3, title: '目標手術執行', description: '根據探查結果執行目標手術（腸切除吻合、脾臟切除、膀胱切開等）。', tips: ['處理主要病灶前先完成全腹探查', '隨時確認止血'], image_placeholder: null },
      { step_number: 4, title: '沖洗與關腹', description: '以溫生理食鹽水大量沖洗腹腔（lavage），確認無活動性出血。白線以 0 或 2-0 PDS 連續或間斷縫合，皮下組織 3-0 可吸收線，皮膚釘或皮膚縫合。', tips: ['白線縫合每針咬合寬度 5-10 mm，間距 5 mm', '關腹前清點紗布'], image_placeholder: null },
    ],
    complications: [
      { complication: '手術部位感染 (SSI)', frequency: '3-10%', management: '術後監測切口，必要時培養+引流' },
      { complication: '腸吻合口 dehiscence', frequency: '6-16%', management: '早期發現需立即再手術' },
      { complication: '術後黏連', frequency: '常見但多無症狀', management: '嚴重腸阻塞時需手術鬆解' },
      { complication: '術後低體溫', frequency: '常見', management: '積極保溫：加溫輸液、保溫毯' },
    ],
    post_procedure: '術後 4-6 小時監測生命徵象、疼痛評估（使用疼痛量表）。腸手術後 12-24 小時嘗試少量飲水，逐步過渡至軟質食物。切口每日檢查至拆線（10-14 天）。',
    tips_and_tricks: [
      '腸管存活力不確定時，用溫生理食鹽水紗布敷蓋 5 分鐘後再評估',
      '脾臟大量出血時先以手壓迫脾門（hilar clamping）爭取處理時間',
      '膀胱切開取石後，翻轉膀胱黏膜面檢查確認無殘留結石',
    ],
  },
  visual_placeholders: [
    { position: 'after-exploration', type: 'flowchart', description: '系統性腹腔探查順序流程圖' },
    { position: 'after-anastomosis', type: 'annotated_image', description: '腸切除吻合技巧示意圖（Simple interrupted appositional）' },
  ],
  interactive_placeholders: [
    { position: 'after-hemostasis', type: 'comparison_table', description: '不同止血技術比較互動表' },
  ],
  drug_api_links: ['cefazolin'],
  references: [
    { type: 'textbook', citation: 'Fossum TW. Small Animal Surgery, 5th ed. Elsevier, 2019.', relevance: '軟組織手術技巧核心教材' },
    { type: 'textbook', citation: 'Tobias KM, Johnston SA. Veterinary Surgery: Small Animal, 2nd ed. Elsevier, 2018.', relevance: '腸切除吻合與脾臟切除技術' },
    { type: 'journal', citation: 'Grimes JA et al. Complications after intestinal surgery in dogs: a meta-analysis. Vet Surg 2019;48(8):1157-1167.', relevance: '腸吻合 dehiscence 發生率與風險因子統計' },
    { type: 'guideline', citation: 'BSAVA Manual of Canine and Feline Abdominal Surgery, 2nd ed. Bray J, Kirby B, eds. BSAVA, 2021.', relevance: '軟組織手術技術最佳實務指引' },
  ],
  is_current: true,
  created_at: now,
};

/** 骨科手術基礎 — 治療型 */
const contentOrthoSurgeryBasics: NodeContent = {
  id: 'CONTENT-SURG-L5-002',
  node_id: 'SURG-L5-002',
  version: 1,
  summary: '小動物骨科手術涵蓋骨折修復、關節手術與矯正手術。本節聚焦骨折內固定（bone plating、interlocking nail、external fixation）基本原則、AO 四原則（解剖復位、穩定固定、保護血供、早期活動）、以及常見關節手術（如 TPLO/TTA、FHO）的技術要點與術後復健計畫。',
  learning_objectives: [
    '闡述 AO 骨折治療四大原則及其臨床應用',
    '比較不同骨折固定方式的適應症與優缺點',
    '描述 TPLO 與 TTA 的生物力學原理與手術步驟',
    '說明股骨頭切除術（FHO）的適應症與預後',
    '規劃骨科術後復健時程與活動限制',
  ],
  key_points: [
    'AO 四原則：Anatomic reduction、Stable fixation、Preservation of blood supply、Early active mobilization',
    '骨板固定（plating）提供最剛性固定，適用於關節附近骨折與需解剖復位的長骨骨折',
    '交鎖髓內釘（ILN）適用於股骨、脛骨幹部骨折，生物力學上抗彎曲良好',
    'TPLO 將脛骨平台角度減至約 5 度，消除前十字韌帶斷裂後的脛骨前位移（cranial tibial thrust）',
    'FHO 適用於體重 < 20 kg 的犬貓之股骨頭/頸骨折或嚴重退化性關節疾病',
    '術後 8 週限制活動（leash walk only），配合復健治療可改善功能恢復',
  ],
  body: `# 骨科手術基礎

## 一、治療原理 (Treatment Principles)



### AO 骨折治療原則
AO/ASIF 建立的骨折治療四原則至今仍是骨科手術的基石：

1. **解剖復位 (Anatomic Reduction)**：關節面骨折必須精確復位；骨幹骨折可接受非解剖復位（biological fixation）
2. **穩定固定 (Stable Fixation)**：根據骨折型態選擇適當固定方式，提供足夠機械穩定性
3. **保護血供 (Preservation of Blood Supply)**：微創技術（MIPO）、避免過度剝離骨膜
4. **早期活動 (Early Active Mobilization)**：穩定固定後儘早開始被動及主動關節活動

### TPLO (Tibial Plateau Leveling Osteotomy)
### 生物力學原理
犬的前十字韌帶斷裂後，在負重時脛骨會因脛骨平台後傾角（TPA，正常約 24-28 度）而產生 cranial tibial thrust。TPLO 透過弧形截骨旋轉脛骨近端，將 TPA 降至約 5-6.5 度，消除此前移力量。

### 手術要點
- 術前精確測量 TPA 與所需旋轉角度
- 使用專用弧形截骨鋸（TPLO saw blade），半徑依犬體型選擇
- 截骨後旋轉並以 TPLO plate 固定
- 術後 X 光確認 TPA 及 plate 位置

### TTA (Tibial Tuberosity Advancement)
- 將脛骨粗隆前移使髕腱力線與脛骨平台垂直
- 使用 titanium cage、fork plate 與 tension band plate 固定
- 適用於 TPA 較低（< 30 度）的病例

### FHO (Femoral Head & Neck Ostectomy)
- 適應症：體重 < 20 kg 犬貓的股骨頭/頸骨折、Legg-Calvé-Perthes、嚴重 DJD
- 截骨水平：股骨頸基部，確保移除整個股骨頭
- 術後積極復健是恢復功能的關鍵
- 大多數犬貓術後 6-8 週可恢復良好的活動功能

### 術後復健計畫
| 時期 | 時間 | 重點 |
|------|------|------|
| 急性期 | 0-2 週 | 冰敷、被動關節活動（PROM）、限制活動 |
| 亞急性期 | 2-6 週 | 牽繩散步、水療、逐漸增加 PROM |
| 強化期 | 6-12 週 | 增加散步距離、平衡訓練、坡道行走 |
| 恢復期 | 12+ 週 | 逐步恢復正常活動，X 光確認癒合 |

## 二、藥物/方法比較 (Comparison)

### 骨折固定方式比較
| 固定方式 | 適應症 | 優點 | 缺點 |
|----------|--------|------|------|
| 骨板螺釘 (Plate & Screw) | 關節面骨折、橈尺骨骨折 | 精確復位、剛性固定 | 需較大手術入路 |
| 交鎖髓內釘 (ILN) | 股骨/脛骨幹部骨折 | 微創、生物力學佳 | 專用器械成本高 |
| 外固定架 (ESF) | 開放性骨折、軟組織損傷大 | 不需植入物於骨折處 | 釘道感染、需術後照護 |
| 骨髓內釘 + 鋼絲 (IM pin + cerclage) | 斜骨折、螺旋骨折 | 設備簡單 | 抗旋轉力較差 |

## 三、併發症與監控 (Complications & Monitoring)

## 四、預後影響 (Prognostic Impact)

## 五、人醫借鑒 (Translational Insights)

| 人醫工具/概念 | 獸醫應用潛力 | 現況 |
|-------------|-------------|------|
| ERAS（Enhanced Recovery After Surgery）protocol | 犬術後加速康復方案——減少住院天數 | 獸醫個別要素已被採用（多模式止痛、早期進食） |
| 多模式止痛（multimodal analgesia） | 犬貓術後疼痛管理標準化 | 獸醫廣泛推行中 |
| 區域麻醉/超音波導引神經阻斷 | 犬後肢手術的 sciatic/femoral block | 獸醫使用快速增長 |
| 抗生素骨水泥（ALBC） | 犬骨髓炎/植入物感染局部高濃度抗生素 | 獸醫骨科已採用 |

## 六、臨床爭議與知識空缺 (Controversies & Knowledge Gaps)

| 爭議議題 | 現況 | Evidence Level |
|---------|------|---------------|
| 犬 NSAIDs 長期使用的腎毒性風險 | 短期安全性確認，長期（>6 月）腎功能影響數據有限 | Level II |
| 犬骨折固定——鎖定板（LCP）vs 傳統 DCP 的臨床差異 | 生物力學優勢明確，臨床預後差異的前瞻性比較不足 | Level II |
| 犬 CCL 手術後復健物理治療的證據等級 | 經驗性支持復健加速恢復，但 RCT 數據有限 | Level III |`,
  clinical_pearl: 'TPLO 術後最常見的併發症是 meniscal injury（半月板損傷），發生率約 10-15%。術中務必進行 meniscal inspection，若有損傷則行 partial meniscectomy。部分術者傾向預防性 meniscal release，但此做法仍有爭議。',
  common_mistakes: [
    '骨板長度不足（應橫跨骨折線上下各 3 個螺孔以上）',
    'TPLO 術前未精確測量 TPA 導致矯正不足或過度',
    'FHO 截骨不完全殘留股骨頸骨刺導致術後疼痛',
    '術後復健計畫太積極或完全沒有復健計畫',
    '外固定架釘道照護不佳導致釘道感染',
  ],
  disease_data: null,
  diagnostic_data: null,
  procedure_data: {
    equipment: [
      { name: 'AO bone plate set (LCP/DCP)', description: '鎖定加壓骨板與螺釘組', required: true },
      { name: 'TPLO saw blade set', description: 'TPLO 專用弧形截骨鋸片組', required: false },
      { name: 'Power drill / oscillating saw', description: '電動骨鑽與擺動鋸', required: true },
      { name: 'Reduction forceps', description: '骨折復位鉗組', required: true },
      { name: 'Intramedullary pins', description: '骨髓內釘（各尺寸）', required: false },
      { name: 'Gelpi / Weitlaner retractors', description: '自持式組織牽引器', required: true },
    ],
    patient_preparation: '全身麻醉、患肢懸吊消毒（hanging limb prep）或仰臥/側臥固定。術前 X 光確認骨折型態並選擇固定方式與植入物尺寸。預防性抗生素（cefazolin 22 mg/kg IV）。',
    step_by_step: [
      { step_number: 1, title: '手術入路', description: '根據骨折位置選擇標準手術入路，切開皮膚與皮下組織，分離肌肉至骨折處。', tips: ['熟悉各骨骼的標準手術入路', '盡量保護骨膜與軟組織血供（MIPO 原則）'], image_placeholder: null },
      { step_number: 2, title: '骨折復位', description: '使用骨折復位鉗與骨撬（bone lever）進行復位，關節面骨折需直視下精確復位。', tips: ['先恢復長度與對線，再處理旋轉', '可用臨時 K-wire 維持復位'], image_placeholder: null },
      { step_number: 3, title: '固定', description: '依計畫置放骨板/髓內釘/外固定架，確認各螺釘的 cortex engagement。', tips: ['LCP 鎖定螺釘不需要預彎骨板', '至少 6 cortices 在骨折線兩側'], image_placeholder: null },
      { step_number: 4, title: '術後影像確認', description: '術後立即拍攝正側位 X 光，確認復位品質、固定物位置及關節面完整性。', tips: ['確認螺釘未進入關節腔', '記錄術後 X 光作為日後追蹤比較基準'], image_placeholder: null },
    ],
    complications: [
      { complication: '植入物失敗 (Implant failure)', frequency: '2-8%', management: '再手術更換更強固定或輔助固定' },
      { complication: '骨不癒合 (Nonunion)', frequency: '3-5%', management: '清創、自體松質骨移植、更穩定固定' },
      { complication: '骨髓炎 (Osteomyelitis)', frequency: '2-5%', management: '培養+藥敏、長期抗生素、必要時移除植入物' },
      { complication: '關節僵硬', frequency: '常見', management: '早期積極復健、PROM' },
    ],
    post_procedure: '術後疼痛管理（multimodal analgesia）、限制活動 6-8 週（leash walk only）。術後 6 週與 8 週 X 光追蹤，確認骨折癒合進度。復健計畫根據固定穩定性與癒合情況調整。',
    tips_and_tricks: [
      '術前在正常對側肢拍 X 光可作為復位參考模板',
      '長骨骨折復位時先恢復骨長度（length），再矯正角度（alignment）與旋轉（rotation）',
      '微小品種（< 3 kg）骨板固定需特別注意螺釘扭矩，避免螺孔過大',
    ],
  },
  visual_placeholders: [
    { position: 'after-fixation-table', type: 'comparison_table', description: '骨折固定方式比較互動表' },
    { position: 'after-tplo', type: 'animated_diagram', description: 'TPLO 截骨旋轉動畫示意圖' },
  ],
  interactive_placeholders: [
    { position: 'after-rehab', type: 'timeline', description: '骨科術後復健時程互動時間軸' },
  ],
  drug_api_links: ['cefazolin', 'meloxicam', 'tramadol'],
  references: [
    { type: 'textbook', citation: 'Johnson AL, Houlton JEF, Vannini R. AO Principles of Fracture Management in the Dog and Cat. AO Publishing, 2005.', relevance: 'AO 骨折治療四原則與骨板固定技術' },
    { type: 'textbook', citation: 'Tobias KM, Johnston SA. Veterinary Surgery: Small Animal, 2nd ed. Elsevier, 2018.', relevance: 'TPLO/TTA/FHO 手術技術' },
    { type: 'journal', citation: 'Bergh MS et al. Systematic review of surgical treatments for cranial cruciate ligament disease in dogs. JAVMA 2014;245(1):51-61.', relevance: 'TPLO vs TTA 臨床結果比較' },
    { type: 'guideline', citation: 'AO Foundation Teaching Videos: Small Animal Fracture Fixation. AO Foundation, 2020.', relevance: '骨折固定影音教學資源' },
  ],
  is_current: true,
  created_at: now,
};

/** 術後照護 — 治療型 */
const contentPostopCare: NodeContent = {
  id: 'CONTENT-SURG-L5-003',
  node_id: 'SURG-L5-003',
  version: 1,
  summary: '術後照護是外科手術成功的關鍵環節，涵蓋疼痛管理、體液治療、營養支持、傷口管理與併發症監測。多模式鎮痛（multimodal analgesia）為當代術後疼痛管理標準，結合 NSAIDs、opioids 與局部麻醉。早期腸內營養（early enteral nutrition）有助於腸黏膜完整性維持與整體恢復。系統性的術後監測流程可早期發現手術部位感染、dehiscence 與血栓栓塞等嚴重併發症。',
  learning_objectives: [
    '建立系統性術後監測計畫，包含生命徵象、疼痛評估與傷口檢查',
    '設計多模式鎮痛方案並根據疼痛評分調整',
    '說明術後體液治療的目標與監測指標',
    '制定術後營養支持策略，區分腸內與腸外營養的適應症',
    '辨識常見術後併發症的早期徵兆並啟動處置',
  ],
  key_points: [
    '多模式鎮痛：結合 opioid（methadone/buprenorphine）+ NSAID（meloxicam/carprofen）+ 局部麻醉（bupivacaine CRI 或 incisional block）',
    '犬貓疼痛評估量表：Glasgow Composite Measure Pain Scale (GCMPS) / Feline Grimace Scale (FGS)',
    '術後輸液速率依脫水程度、持續流失與維持需求計算，目標 MAP > 65 mmHg、UOP > 1 mL/kg/hr',
    '腸道手術後 12-24 小時啟動少量腸內餵食比延遲餵食有更好的恢復結果',
    '手術部位感染（SSI）於犬的發生率約 3-10%，術後 3-5 天發燒 + 切口腫脹為早期警訊',
    'Elizabethan collar（E-collar）是防止自我創傷的基本但重要措施',
  ],
  body: `# 術後照護

## 一、治療原理 (Treatment Principles)



### 術後監測
### 系統性監測計畫

| 時間點 | 監測項目 | 頻率 |
|--------|----------|------|
| 0-4 小時 | 心率/呼吸/體溫/MAP/SpO2/疼痛評分 | 每 15-30 分鐘 |
| 4-24 小時 | 生命徵象/疼痛/尿量/切口/引流量 | 每 1-2 小時 |
| 1-3 天 | 生命徵象/食慾/排便/活動力/切口 | 每 4-6 小時 |
| 3-14 天 | 切口癒合/功能恢復/併發症篩檢 | 每日至回診 |

### 麻醉恢復期
- 拔管時機：吞嚥反射恢復、自主呼吸穩定
- 短頭種犬（brachycephalic）延遲拔管至完全清醒
- 持續監測至完全站立行走

### 疼痛管理
### 多模式鎮痛方案

| 藥物類別 | 犬 | 貓 | 備註 |
|----------|----|----|------|
| Methadone | 0.2-0.5 mg/kg IV/IM q4-6h | 0.1-0.3 mg/kg IV/IM q4-6h | 純 mu-agonist |
| Buprenorphine | 0.01-0.02 mg/kg IV q6-8h | 0.02-0.03 mg/kg OTM q6-8h | 貓首選 opioid |
| Meloxicam | 0.2 mg/kg SC 首劑 → 0.1 mg/kg PO SID | 0.1 mg/kg SC 單次 → 0.05 mg/kg PO SID (限短期) | 避免腎功能不全使用 |
| Carprofen | 4.4 mg/kg SC/PO → 2.2 mg/kg PO BID | — | 犬專用 |
| Bupivacaine | 1-2 mg/kg 局部浸潤 | 1 mg/kg 局部浸潤 | incisional line block |
| Ketamine CRI | 2-10 μg/kg/min | 2-5 μg/kg/min | 用於嚴重疼痛 |
| Lidocaine CRI | 25-50 μg/kg/min | 不建議 | 犬 systemic CRI |

### 疼痛評估工具
- **犬**：Glasgow Composite Measure Pain Scale (GCMPS-SF)，≥ 6/24 需追加鎮痛
- **貓**：Feline Grimace Scale (FGS)，≥ 4/10 需追加鎮痛
- 評估頻率：術後前 24 小時每 1-2 小時，之後每 4-6 小時

### 體液治療
### 術後輸液管理
- 基本維持速率：犬 2-3 mL/kg/hr，貓 2 mL/kg/hr
- 監測指標：MAP（目標 > 65 mmHg）、UOP（目標 > 1 mL/kg/hr）、乳酸
- 適時轉換至口服補液，減少導管留置相關感染

### 營養支持
### 啟動時機與途徑
- **腸內營養**（首選）：術後 12-24 小時開始，先少量試餵
- **食道餵管 / 鼻胃管**：自主採食不足時，手術放置或鼻胃管暫時使用
- **腸外營養 (TPN/PPN)**：腸道完全無法使用時才考慮，併發症較多

### 營養需求計算
- RER = 70 × (BW kg)^0.75 kcal/day
- 術後第 1 天先給 RER 的 1/3，逐日增加至全量

### 傷口管理
### 切口照護
- 保持切口乾燥清潔，E-collar 持續佩戴
- 正常癒合：輕微腫脹與發紅於 3-5 天消退
- 警示徵兆：膿性滲出、切口裂開、皮下氣腫、嚴重腫脹

### 引流管管理
- 主動引流（Jackson-Pratt）：記錄引流量與性質，量 < 0.2 mL/kg/day 可移除
- 被動引流（Penrose）：保持引流出口通暢，通常 3-5 天移除

## 二、藥物/方法比較 (Comparison)

## 三、併發症與監控 (Complications & Monitoring)

## 四、預後影響 (Prognostic Impact)

## 五、人醫借鑒 (Translational Insights)

| 人醫工具/概念 | 獸醫應用潛力 | 現況 |
|-------------|-------------|------|
| 腹腔鏡/內視鏡微創手術 | 犬 GDV 預防性胃固定術腹腔鏡化 | 獸醫微創外科快速發展中 |
| 術中血管吻合技術（如 OPSI shunt） | 門靜脈分流手術的微創化趨勢 | 少數轉介中心可執行 |
| 生物補片（biologic mesh） | 犬腹壁缺損/會陰疝修復的生物材料替代合成 | 獸醫使用經驗增加中 |
| 手術部位感染（SSI）監控 bundle | 獸醫外科感染率追蹤與品質改善 | 人醫 WHO SSI bundle 廣泛推行，獸醫開始建立 |

## 六、臨床爭議與知識空缺 (Controversies & Knowledge Gaps)

| 爭議議題 | 現況 | Evidence Level |
|---------|------|---------------|
| 犬 TPLO vs TTA vs 側副韌帶穩定術治療 CCL 斷裂 | 大型犬 TPLO 為主流但 TTA 同等級證據，小型犬側副韌帶穩定術仍有支持者 | Level I |
| 犬 GDV 預防性胃固定術適應症 | 大型犬/深胸犬是否應常規預防性胃固定仍有爭議 | Level III |
| 犬脾臟腫塊的術前活檢價值 | 脾臟 FNA 的診斷敏感度/出血風險的風險效益分析 | Level III |
| 犬貓 OVE vs OVH | 歐洲傾向 OVE（微創、術後疼痛少），美洲傳統 OVH——長期子宮殘端併發症證據不足 | Level II |`,
  clinical_pearl: '貓的疼痛評估特別困難，因為貓傾向隱藏疼痛。Feline Grimace Scale（FGS）是目前最實用的工具，重點觀察耳朵位置（向外展開 = 疼痛）、眼眶緊縮、鬍鬚位置（向前集中 = 疼痛）、頭部位置（低於肩膀 = 疼痛）。如果不確定，寧可給予鎮痛，觀察反應。',
  common_mistakes: [
    '術後疼痛評估不足，過度依賴「看起來還好」的主觀判斷',
    'NSAIDs 用於脫水或低血壓患者導致急性腎損傷',
    '貓使用 lidocaine CRI 導致心血管毒性',
    '術後過早移除 E-collar 導致切口自我創傷',
    '延遲啟動腸內營養導致腸黏膜萎縮與細菌轉位',
    '引流管移除過早（仍有大量滲出）或過晚（增加逆行感染風險）',
  ],
  disease_data: null,
  diagnostic_data: null,
  procedure_data: null,
  visual_placeholders: [
    { position: 'after-monitoring-table', type: 'timeline', description: '術後監測時程互動時間軸' },
    { position: 'after-pain', type: 'annotated_image', description: 'Feline Grimace Scale 五表情指標圖解' },
  ],
  interactive_placeholders: [
    { position: 'after-fluid', type: 'interactive_overlay', description: '術後輸液速率計算器' },
    { position: 'after-nutrition', type: 'interactive_overlay', description: 'RER 營養需求計算器' },
  ],
  drug_api_links: ['methadone', 'buprenorphine', 'meloxicam', 'carprofen', 'bupivacaine', 'ketamine', 'lidocaine'],
  references: [
    { type: 'textbook', citation: 'Fossum TW. Small Animal Surgery, 5th ed. Elsevier, 2019. Chapter 12: Postoperative Care.', relevance: '術後照護整體框架' },
    { type: 'guideline', citation: 'Epstein ME et al. AAHA/AAFP Pain Management Guidelines for Dogs and Cats. JAAHA 2015;51(2):67-84.', relevance: '多模式鎮痛標準指引' },
    { type: 'journal', citation: 'Evangelista MC et al. Facial expressions of pain in cats: the development and validation of a Feline Grimace Scale. Sci Rep 2019;9:19128.', relevance: 'Feline Grimace Scale 開發與驗證' },
    { type: 'journal', citation: 'Liu DT et al. Retrospective study of early enteral nutrition after gastrointestinal surgery in dogs. Vet Surg 2018;47(6):840-849.', relevance: '早期腸內營養臨床證據' },
  ],
  is_current: true,
  created_at: now,
};

/** 圍手術期抗菌策略 — 治療型 */
const contentPerioperativeAntimicrobial: NodeContent = {
  id: 'CONTENT-SURG-L5-004',
  node_id: 'SURG-L5-004',
  version: 1,
  summary: '圍手術期抗菌策略旨在預防手術部位感染（SSI），是外科感染控制的核心。根據手術傷口分類（clean, clean-contaminated, contaminated, dirty）決定抗菌藥物使用方式。預防性抗生素應於切皮前 30-60 分鐘給予，首選 cefazolin，手術超過 90 分鐘或失血 > 15% 血容量需追加劑量。Clean 手術僅需術中預防，不需術後延續；contaminated/dirty 手術則需治療性抗菌。抗菌藥物管理（antimicrobial stewardship）原則強調避免不必要的廣譜或長期使用。',
  learning_objectives: [
    '根據手術傷口分類決定抗菌藥物使用策略',
    '說明預防性抗生素的正確給藥時機、藥物選擇與劑量',
    '辨識手術部位感染的風險因子並制定預防對策',
    '闡述抗菌藥物管理（antimicrobial stewardship）在外科的應用',
    '規劃 contaminated/dirty 手術的治療性抗菌方案',
  ],
  key_points: [
    '手術傷口四級分類：Clean (I), Clean-contaminated (II), Contaminated (III), Dirty (IV)',
    'Clean 手術 SSI 發生率 2-5%，Clean-contaminated 5-10%，Contaminated 10-20%，Dirty > 20%',
    '預防性抗生素首選 cefazolin 22 mg/kg IV，切皮前 30 分鐘給予',
    '手術 > 90 分鐘需追加（redose），或失血 > 15% 估計血容量',
    'Clean 手術：僅術中預防，術後 24 小時內停止；延長使用不降低 SSI 反而增加抗藥性',
    'Dirty 手術：根據培養與藥敏選擇治療性抗菌，療程通常 7-14 天或更長',
  ],
  body: `# 圍手術期抗菌策略

## 一、治療原理 (Treatment Principles)



### 預防性抗生素使用
### 藥物選擇

| 手術類型 | 首選藥物 | 劑量 | 備註 |
|----------|----------|------|------|
| Clean / Clean-contaminated (一般) | Cefazolin | 22 mg/kg IV | 一代頭孢，涵蓋 Gram+, 部分 Gram- |
| 口腔手術 | Ampicillin/Sulbactam | 22 mg/kg IV | 涵蓋口腔厭氧菌 |
| 消化道遠端手術 | Cefazolin + Metronidazole | 22 + 15 mg/kg IV | 加強厭氧菌涵蓋 |
| Penicillin 過敏 | Clindamycin | 11 mg/kg IV | 替代方案 |

### 給藥時機
- **切皮前 30-60 分鐘**給予（確保組織藥物濃度達峰值）
- 過早（> 60 分鐘前）或過晚（切皮後才給）均降低預防效果
- Vancomycin 等需長時間輸注的藥物需提前 120 分鐘開始

### 追加劑量 (Redosing)
- 手術時間超過 1.5-2 個藥物半衰期需追加
- Cefazolin（t1/2 ≈ 45 min in dogs）：每 90 分鐘追加一次
- 大量失血（> 1500 mL 或 > 15% estimated blood volume）後追加

### 術後抗生素使用
### 根據傷口分類的建議

| 傷口分類 | 術後抗生素 | 建議療程 |
|----------|-----------|----------|
| Clean (I) | **不需要** | 僅術中預防即可 |
| Clean-contaminated (II) | 通常不需要 | 最多 24 小時 |
| Contaminated (III) | 治療性使用 | 3-5 天，依臨床反應調整 |
| Dirty (IV) | 治療性使用 | 7-14 天，依培養結果調整 |

### 常見錯誤
Clean 手術術後繼續使用抗生素 5-7 天是最常見的不當使用，研究顯示延長使用不降低 SSI，反而：
- 增加抗藥菌選擇壓力
- 增加醫療成本
- 增加藥物副作用風險

### SSI 風險因子與預防
### 患者因素
- 肥胖（脂肪組織血供差）
- 內分泌疾病（糖尿病、庫興氏症）
- 免疫抑制狀態
- 營養不良、低白蛋白血症

### 手術因素
- 手術時間延長（每增加 1 小時，SSI 風險增加約 30%）
- 術中低體溫（< 36°C 影響嗜中性球功能）
- 組織創傷大（粗暴組織處理）
- 植入物使用（生物膜形成）

### 預防策略
1. 術前剃毛在麻醉誘導後、消毒前進行（避免微創傷後細菌繁殖）
2. 術中保溫（forced-air warming blanket）
3. Halsted 組織處理原則：輕柔處理、精確止血、消除死腔
4. 無菌技術的嚴格維護

## 二、藥物/方法比較 (Comparison)

### 手術傷口分類
| 分類 | 定義 | 範例 | SSI 風險 |
|------|------|------|----------|
| Clean (I) | 無感染、非外傷、未進入呼吸/消化/泌尿道 | 選擇性骨科手術、gastropexy、OVH（健康） | 2-5% |
| Clean-contaminated (II) | 有控制地進入呼吸/消化/泌尿道 | 腸切除吻合、膀胱切開、膽囊切除 | 5-10% |
| Contaminated (III) | 開放性新鮮外傷、消化道內容物溢出 | 腸穿孔手術、開放性骨折 < 6 hr | 10-20% |
| Dirty (IV) | 已有感染、壞死組織、穿孔 > 6 hr | 腹膜炎、膿瘍引流、感染性關節 | > 20% |

### 抗菌藥物管理 (Antimicrobial Stewardship)
### 核心原則
- 選擇最窄譜有效的抗菌藥物
- 盡可能依據培養與藥敏結果（culture-directed therapy）
- 定期重新評估治療必要性與療程
- 記錄抗菌藥物使用指徵與停藥原因

### 保留用藥（Reserve Antibiotics）
以下藥物應保留給多重抗藥性感染：
- Vancomycin（MRSA/MRSP）
- Carbapenems（多重抗藥性 Gram-negative）
- Linezolid（VRE）
- 使用前需感染科/臨床藥師諮詢

## 三、併發症與監控 (Complications & Monitoring)

## 四、預後影響 (Prognostic Impact)

## 五、人醫借鑒 (Translational Insights)

| 人醫工具/概念 | 獸醫應用潛力 | 現況 |
|-------------|-------------|------|
| 腹腔鏡/內視鏡微創手術 | 犬 GDV 預防性胃固定術腹腔鏡化 | 獸醫微創外科快速發展中 |
| 術中血管吻合技術（如 OPSI shunt） | 門靜脈分流手術的微創化趨勢 | 少數轉介中心可執行 |
| 生物補片（biologic mesh） | 犬腹壁缺損/會陰疝修復的生物材料替代合成 | 獸醫使用經驗增加中 |
| 手術部位感染（SSI）監控 bundle | 獸醫外科感染率追蹤與品質改善 | 人醫 WHO SSI bundle 廣泛推行，獸醫開始建立 |

## 六、臨床爭議與知識空缺 (Controversies & Knowledge Gaps)

| 爭議議題 | 現況 | Evidence Level |
|---------|------|---------------|
| 犬 TPLO vs TTA vs 側副韌帶穩定術治療 CCL 斷裂 | 大型犬 TPLO 為主流但 TTA 同等級證據，小型犬側副韌帶穩定術仍有支持者 | Level I |
| 犬 GDV 預防性胃固定術適應症 | 大型犬/深胸犬是否應常規預防性胃固定仍有爭議 | Level III |
| 犬脾臟腫塊的術前活檢價值 | 脾臟 FNA 的診斷敏感度/出血風險的風險效益分析 | Level III |
| 犬貓 OVE vs OVH | 歐洲傾向 OVE（微創、術後疼痛少），美洲傳統 OVH——長期子宮殘端併發症證據不足 | Level II |`,
  clinical_pearl: '在台灣的獸醫臨床，MRSP（Methicillin-resistant Staphylococcus pseudintermedius）的分離率逐年升高，Clean 手術的 SSI 一旦培養出 MRSP，治療選擇非常有限。因此嚴格執行無菌技術與合理的抗生素使用比什麼都重要——預防永遠優於治療。',
  common_mistakes: [
    '預防性抗生素在切皮後才給予，錯失組織濃度達峰的時機',
    'Clean 手術術後不必要地延續抗生素 5-7 天',
    '長時間手術未追加（redose）預防性抗生素',
    '培養結果出來前使用過度廣譜的抗菌藥物（如 fluoroquinolone + metronidazole）',
    '忽略患者風險因子（肥胖、內分泌疾病）對 SSI 的影響',
    '術中低體溫未積極處理，影響免疫功能',
  ],
  disease_data: null,
  diagnostic_data: null,
  procedure_data: null,
  visual_placeholders: [
    { position: 'after-wound-classification', type: 'flowchart', description: '手術傷口分類與抗菌策略決策流程圖' },
    { position: 'after-risk-factors', type: 'mind_map', description: 'SSI 風險因子心智圖' },
  ],
  interactive_placeholders: [
    { position: 'after-dosing', type: 'interactive_overlay', description: '預防性抗生素劑量與 redosing 計算器' },
  ],
  drug_api_links: ['cefazolin', 'ampicillin-sulbactam', 'metronidazole', 'clindamycin', 'vancomycin'],
  references: [
    { type: 'guideline', citation: 'Surgical Site Infection Prevention Guidelines. In: Fossum TW. Small Animal Surgery, 5th ed. Elsevier, 2019.', relevance: 'SSI 預防標準指引' },
    { type: 'journal', citation: 'Turk R et al. Antimicrobial prophylaxis in small animal surgery: a systematic review and meta-analysis. Vet Surg 2015;44(4):385-396.', relevance: '小動物手術抗菌預防系統性回顧' },
    { type: 'guideline', citation: 'Weese JS et al. ACVIM Consensus Statement: Antimicrobial Use Guidelines for Treatment of Urinary Tract Disease in Dogs and Cats. J Vet Intern Med 2019;33(1):11-21.', relevance: '抗菌藥物管理原則（泌尿道部分適用）' },
    { type: 'journal', citation: 'Hsieh YC et al. Prevalence of methicillin-resistant Staphylococcus pseudintermedius in dogs in Taiwan. Taiwan Vet J 2021;47(2):89-97.', relevance: '台灣 MRSP 盛行率' },
    { type: 'textbook', citation: 'Fossum TW. Small Animal Surgery, 5th ed. Elsevier, 2019. Chapter 10: Surgical Infections and Antibiotic Selection.', relevance: '圍手術期抗菌策略標準教材' },
  ],
  is_current: true,
  created_at: now,
};

/** 以 Map 方式匯出，方便用 nodeId 快速查找 */
export const SURG_CONTENTS = new Map<string, NodeContent>([
  ['SURG-L0-001', contentSurgOverview],
  ['SURG-L1-001', contentSurgPrinciples],
  ['SURG-L1-002', contentWoundHealing],
  ['SURG-L1-003', contentSurgNutrition],
  ['SURG-L1-004', contentAnesthesiaBasics],
  ['SURG-L2-001', contentAbdominalPathology],
  ['SURG-L2-002', contentFractureHealing],
  ['SURG-L2-003', contentJointDegeneration],
  ['SURG-L3-001', contentGDV],
  ['SURG-L3-002', contentSplenicNeoplasia],
  ['SURG-L3-003', contentGIForeignBody],
  ['SURG-L3-004', contentCCLD],
  ['SURG-L3-005', contentIVDD],
  ['SURG-L3-006', contentPerinealHernia],
  ['SURG-L3-007', contentFractureStabilization],
  ['SURG-L3-008', contentPatellarLuxation],
  ['SURG-L3-009', contentPyometra],
  ['SURG-L4-001', contentPreopImaging],
  ['SURG-L4-002', contentIntraopDecision],
  ['SURG-L4-003', contentOrthoImaging],
  ['SURG-L5-001', contentSoftTissueSurgery],
  ['SURG-L5-002', contentOrthoSurgeryBasics],
  ['SURG-L5-003', contentPostopCare],
  ['SURG-L5-004', contentPerioperativeAntimicrobial],
]);
