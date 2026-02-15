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

## 概述

胃擴張扭轉（GDV）是犬科最嚴重的外科急診之一，若未及時處理，死亡率可達 100%。此病以大型及巨型深胸犬種最常見，年發生率在高風險品種中約 6%。

## 病理生理

GDV 的核心病理包括三個層面：

1. **機械性阻塞**：胃順時針扭轉（從術者觀察尾端）220-270 度，幽門移至左側，導致胃入口與出口同時阻塞
2. **血管壓迫**：擴張的胃壓迫後腔靜脈與門脈，造成靜脈回流減少、心輸出量下降與低血壓
3. **再灌流損傷**：胃壁缺血後的再灌流導致氧自由基釋放、全身性發炎反應（SIRS）、DIC 與心律不整

脾臟因與胃的韌帶連接而隨胃移位，可能發生扭轉或血管撕裂。

## 臨床表現

[圖片:典型 GDV 犬的腹部外觀——腹部明顯膨脹]

急性發作通常在進食後 2-4 小時內：
- 非生產性嘔吐（retching without vomiting）為最典型表現
- 腹部急性膨脹，叩診呈鼓音
- 流涎、不安、無法舒適躺下
- 進展至休克表現：蒼白黏膜、CRT 延長、心搏過速、弱脈

## 診斷

右側臥位腹部 X 光可見特徵性 **「雙氣泡」** 或 **「Popeye arm sign」**：幽門軟組織密度帶將胃分隔為兩個充氣腔室。

## 急診處理

[互動:GDV 急診處理流程決策圖]

1. **積極輸液復甦**：兩條大口徑靜脈導管，晶體液 shock dose（60-90 mL/kg/hr 第一小時）
2. **胃減壓**：嘗試口胃管，失敗則右側腹壁 trocar 穿刺減壓
3. **ECG 監測**：偵測心室心律不整
4. **血液檢查**：lactate、電解質、CBC、凝血功能
5. **Lactate 判讀**：< 6.0 mmol/L 預後較佳，> 6.0 mmol/L 提示胃壁壞死風險升高

## 手術

麻醉穩定後進行正中開腹：
1. 胃 derotation（將幽門從左側推回右側）
2. 評估胃壁與脾臟活性——壞死區域需切除（partial gastrectomy / splenectomy）
3. **右側 incisional gastropexy**：將胃幽門竇漿膜層縫合至右腹壁，為預防復發的關鍵步驟

[圖片:Incisional gastropexy 手術步驟示意圖]`,
  clinical_pearl: '術前 lactate 是 GDV 最實用的預後指標。Lactate > 6.0 mmol/L 的犬，胃壁壞死的可能性顯著增加，應在術前告知飼主可能需要 partial gastrectomy 甚至安樂死。術後 lactate 如果在 12 小時內未下降至正常，也是預後不良的重要訊號。',
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

## 概述

子宮蓄膿是未絕育母犬最常見的子宮疾病之一，在 10 歲前的未絕育母犬中約有 25% 會發生。雖然貓也可發生，但犬的盛行率遠高於貓。此病為外科急診，延遲治療可導致子宮破裂、腹膜炎與敗血症死亡。

## 病理生理

1. **黃體期影響**：發情後 progesterone 升高 → 促進子宮內膜增生（cystic endometrial hyperplasia, CEH）→ 子宮防禦力下降
2. **細菌感染**：發情期子宮頸開放時細菌上行感染 → E. coli 為最常見致病菌 → 細菌在 progesterone 抑制的子宮環境中大量增殖
3. **子宮頸狀態**：
   - **開放型**：子宮頸持續開放，膿液可排出 → 全身中毒較輕
   - **封閉型**：子宮頸關閉，膿液蓄積 → 子宮極度擴張 → 全身中毒嚴重

## CEH-Pyometra Complex

子宮蓄膿被認為是 CEH-Pyometra Complex 的終末表現，可分四個階段：

| 階段 | 特徵 |
|------|------|
| I | 無併發症的 CEH |
| II | CEH + 血漿樣/黏液樣子宮積液 |
| III | CEH + 急性子宮內膜炎 |
| IV | CEH + 慢性子宮內膜炎 → 子宮蓄膿 |

## 診斷

- **血液學**：WBC 升高伴嗜中性球左移（典型值 30,000-100,000/uL），但也可能正常或降低（骨髓耗竭）
- **生化學**：BUN/Cre 升高（腎前性或 E. coli 內毒素引起的腎損傷）、ALT/ALP 輕度升高、低白蛋白血症
- **腹部超音波**：子宮角擴張（直徑 > 1-2 cm），充滿均質或不均質液體，金標準診斷工具
- **腹部 X 光**：可見管狀軟組織密度影，但不如超音波敏感

[圖片:子宮蓄膿腹部超音波影像——擴張的子宮角]

## 治療

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

[互動:治療決策樹——手術 vs 內科治療適應症判斷]`,
  clinical_pearl: '子宮蓄膿犬的 WBC 計數可能出現「paradoxical leukopenia」——當感染過於嚴重時，骨髓嗜中性球儲備耗竭，導致周邊 WBC 正常甚至偏低，但 band neutrophils 比例升高（degenerative left shift）。這類病例往往比 WBC 明顯升高的病例預後更差，需要更積極的術前穩定化。',
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
  ],
  is_current: true,
  created_at: now,
};

/** 以 Map 方式匯出，方便用 nodeId 快速查找 */
export const SURG_CONTENTS = new Map<string, NodeContent>([
  ['SURG-L3-001', contentGDV],
  ['SURG-L3-009', contentPyometra],
]);
