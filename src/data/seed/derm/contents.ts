import type { NodeContent } from '@/types/knowledge';

const now = '2026-02-15T00:00:00Z';

/** 犬異位性皮膚炎 (CAD) — 疾病型 */
const contentCAD: NodeContent = {
  id: 'CONTENT-DERM-L3-001',
  node_id: 'DERM-L3-001',
  version: 1,
  summary: '犬異位性皮膚炎（Canine Atopic Dermatitis, CAD）是犬最常見的過敏性皮膚病，盛行率約 10-15%。其本質為基因易感犬隻對環境過敏原產生異常 IgE 介導的免疫反應，導致慢性瘙癢與皮膚屏障功能障礙。Favrot 診斷標準結合病史與臨床表現可作為臨床診斷依據。治療採多模式策略，包括環境過敏原控制、跳蚤預防、排除飲食試驗、藥物治療（oclacitinib、lokivetmab、cyclosporine）及過敏原特異性免疫治療（ASIT）。',
  learning_objectives: [
    '運用 Favrot 診斷標準評估疑似 CAD 病例',
    '描述 CAD 的 IgE 介導免疫病理機轉與皮膚屏障缺陷',
    '規劃 CAD 的逐步診斷與排除流程',
    '比較 oclacitinib、lokivetmab、cyclosporine 的療效與副作用',
    '設計 CAD 患犬的長期多模式管理計畫',
  ],
  key_points: [
    'Favrot 標準（8 項中滿足 5 項）敏感度 85%、特異度 79%',
    'CAD 是排除性診斷：必須先排除跳蚤過敏（FAD）、食物不良反應（AFR）及疥蟎',
    '好發品種：法國鬥牛犬、西高地白梗、拉布拉多、金毛尋回犬、柴犬',
    '典型好發部位：面部、耳翼、腋下、腹股溝、指間',
    '皮膚屏障功能障礙（filaggrin 缺乏、脂質異常）是 CAD 的核心特徵',
    'Oclacitinib（JAK inhibitor）起效快（4-24 小時），適用急性與慢性控制',
    'Lokivetmab（抗 IL-31 單株抗體）每月注射一次，副作用極低',
    'ASIT（過敏原特異性免疫治療）是唯一可能改變疾病病程的治療',
  ],
  body: `# 犬異位性皮膚炎 (CAD)

## 概述

犬異位性皮膚炎（CAD）是一種遺傳易感的慢性炎症性皮膚病，特徵為對環境過敏原（如塵蟎、花粉、黴菌孢子）產生 IgE 介導的過敏反應。在台灣，由於亞熱帶氣候全年溫暖潮濕，環境過敏原暴露量高，CAD 的發病率及嚴重程度可能高於溫帶地區。

## 病理機轉

CAD 的發病涉及三個核心異常：

1. **皮膚屏障缺陷**：表皮 filaggrin 表達減少、角質層脂質組成異常 → 經皮水分散失增加（TEWL）→ 過敏原更容易穿透
2. **免疫失調**：Th2 偏移 → IL-4/IL-13 驅動 B 細胞產生 allergen-specific IgE → 肥大細胞活化釋放組胺、前列腺素等
3. **神經免疫交互作用**：IL-31 直接刺激背根神經節的感覺神經元 → 瘙癢感 → 搔抓-發炎循環

## Favrot 診斷標準

[互動:Favrot 標準互動式計分器]

| 編號 | 標準 |
|------|------|
| 1 | 3 歲前發病 |
| 2 | 犬大部分時間住在室內 |
| 3 | 對糖皮質激素有反應的瘙癢 |
| 4 | 初期為無病灶的瘙癢（搔癢先於皮損出現） |
| 5 | 前足爪受累 |
| 6 | 耳翼受累 |
| 7 | 耳翼邊緣不受累 |
| 8 | 腰背部不受累 |

滿足 5/8 項：Sens 85%, Spec 79%。滿足 6/8 項：Sens 58%, Spec 89%。

## 逐步診斷流程

1. **排除跳蚤過敏（FAD）**：嚴格跳蚤控制 4-8 週
2. **排除食物不良反應**：新蛋白質或水解蛋白飲食排除試驗 8 週
3. **排除疥蟎**：皮膚刮搔或經驗性 isoxazoline 治療
4. **排除繼發感染**：皮膚細胞學檢查（細菌、馬拉色菌）
5. **臨床診斷 CAD**：Favrot 標準 + 排除其他原因
6. **過敏原檢測**（可選）：血清 IgE 或皮內試驗 → 用於 ASIT

## 治療策略

### 急性期
- [藥物:Oclacitinib] 0.4-0.6 mg/kg PO BID x 14 天，之後改 SID
- 或 [藥物:Prednisolone] 0.5-1 mg/kg PO SID x 5-7 天後漸減

### 慢性期多模式管理
- **藥物治療**：Oclacitinib SID 或 [藥物:Lokivetmab] 1-2 mg/kg SC 每月一次
- **免疫調節**：[藥物:Cyclosporine] 5 mg/kg PO SID（起效需 4-6 週）
- **ASIT**：皮下注射或舌下免疫治療，50-75% 犬有效
- **皮膚屏障修復**：含神經醯胺的外用保濕劑、必需脂肪酸補充
- **跳蚤預防**：全年不間斷
- **繼發感染控制**：定期皮膚細胞學監測

[圖片:CAD 逐步診斷治療流程圖]`,
  clinical_pearl: 'CAD 的診斷是排除性的——永遠不要跳過排除 FAD 和 AFR 的步驟。台灣全年有跳蚤活動，即使沒看到跳蚤也不能排除 FAD，必須使用 isoxazoline 類藥物進行嚴格跳蚤控制至少 4 週。另外，飲食排除試驗中最常見的失敗原因是飼主未嚴格遵守（零食、人食共享），務必反覆教育。',
  common_mistakes: [
    '未進行排除飲食試驗即診斷 CAD（食物不良反應可完全模擬 CAD 表現）',
    '飲食排除試驗期間太短（< 8 週）或未嚴格執行',
    '僅依賴血清 IgE 檢測作為 CAD 的診斷工具（此為篩選 ASIT 過敏原用）',
    '忽略繼發性細菌或馬拉色菌感染的控制',
    '長期使用糖皮質激素而未嘗試更安全的替代療法',
  ],
  disease_data: {
    signalment: '好發 1-3 歲犬，品種偏好：法國鬥牛犬、西高地白梗、拉布拉多、金毛尋回犬、柴犬、英國鬥牛犬、德國牧羊犬。無明顯性別差異。',
    etiology: '多因素疾病：遺傳易感（皮膚屏障基因缺陷）+ 環境過敏原暴露（塵蟎、花粉、黴菌孢子）+ 皮膚微生物群失衡。台灣常見過敏原包括屋塵蟎（Dermatophagoides farinae/pteronyssinus）與熱帶蟎類。',
    pathogenesis: '皮膚屏障缺陷 → 過敏原經皮穿透 → 朗格漢斯細胞/樹突狀細胞捕獲 → Th2 偏移 → IL-4/IL-13 驅動 IgE 產生 → IgE 結合肥大細胞 FcεRI → 再次暴露時肥大細胞脫顆粒 → 組胺、白三烯、前列腺素釋放 → 血管擴張、通透性增加、瘙癢。IL-31 直接活化感覺神經元引起瘙癢。慢性期 Th1 浸潤加入 → 苔蘚化。',
    clinical_signs: [
      { sign: '瘙癢', category: 'primary', description: '為最主要症狀，可為全身性或局部性，搔抓、舔咬、磨蹭' },
      { sign: '紅斑', category: 'primary', description: '好發於面部、耳翼內側、腋下、腹股溝、指間' },
      { sign: '苔蘚化', category: 'secondary', description: '慢性搔抓導致皮膚增厚、色素沉著' },
      { sign: '繼發性膿皮症', category: 'secondary', description: '反覆細菌感染（丘疹、膿皰、表皮脫屑環）' },
      { sign: '外耳炎', category: 'secondary', description: '約 50-80% CAD 犬會伴發外耳炎' },
      { sign: '馬拉色菌過度增生', category: 'secondary', description: '指間、皮膚皺褶處，油脂樣異味' },
    ],
    staging: { system: '嚴重度分級', stages: ['輕度：局部病灶、偶發瘙癢、無繼發感染', '中度：多部位病灶、頻繁瘙癢、偶有繼發感染', '重度：廣泛病灶、持續強烈瘙癢、反覆繼發感染、生活品質嚴重下降'] },
    differential_diagnosis: [
      { condition: '食物不良反應 (AFR)', key_differentiator: '症狀全年無季節性、可能伴有腸胃道症狀、需排除飲食試驗確診' },
      { condition: '跳蚤過敏性皮膚炎 (FAD)', key_differentiator: '好發腰背部與尾根部、嚴格跳蚤控制後改善' },
      { condition: '疥蟎症', key_differentiator: '耳翼邊緣反射陽性、皮膚刮搔可找到蟎蟲、高度傳染性' },
      { condition: '馬拉色菌皮膚炎', key_differentiator: '特殊油脂味、皮膚細胞學可見大量花生形酵母菌' },
    ],
    diagnostic_workup: '1. 完整皮膚病史（發病年齡、季節性、分佈、反應藥物）→ 2. 排除 FAD（嚴格跳蚤控制 4-8 週）→ 3. 排除疥蟎（皮膚刮搔或經驗性治療）→ 4. 排除繼發感染（皮膚細胞學）→ 5. 排除飲食試驗 8 週 → 6. 臨床診斷 CAD（Favrot 標準）→ 7. 可選：血清 IgE 或皮內試驗（用於 ASIT 過敏原選擇）',
    treatment_protocol: '多模式策略：1. 急性期：Oclacitinib 0.4-0.6 mg/kg PO BID x 14 天或短期 Prednisolone 0.5 mg/kg x 5-7 天。2. 慢性期：Oclacitinib SID 或 Lokivetmab SC 每月、或 Cyclosporine 5 mg/kg SID。3. ASIT（50-75% 有效，需 6-12 個月評估）。4. 輔助：皮膚屏障修復、必需脂肪酸、全年跳蚤預防、定期細胞學監測。',
    prognosis: 'CAD 為終身疾病，無法治癒但可良好控制。多數犬在適當多模式管理下可維持良好生活品質。ASIT 是唯一可能改變疾病自然病程的治療，50-75% 犬有臨床改善。部分犬隨年齡可能減輕。',
    monitoring: '初期每 2-4 週回診評估治療反應。穩定後每 3-6 個月回診。每次回診需：瘙癢評分（PVAS）、皮膚病變評分（CADESI-4）、皮膚細胞學、外耳檢查。使用 Oclacitinib 長期需監測 CBC/BCS（每 6-12 個月）。使用 Cyclosporine 需注意牙齦增生與腸胃副作用。',
    owner_communication: 'CAD 是一種終身管理的慢性疾病，類似人類異位性皮膚炎。目前無法根治，但透過多種方式（藥物+環境管理+皮膚護理）可有效控制。教導飼主：按時用藥的重要性、排除飲食試驗的嚴格性（8 週期間不可給任何其他食物/零食）、全年跳蚤預防、定期回診監測、以及觀察繼發感染的徵兆。',
  },
  diagnostic_data: null,
  procedure_data: null,
  visual_placeholders: [
    { position: 'Favrot 標準段落後', type: 'comparison_table', description: 'Favrot 標準互動式計分表' },
    { position: '治療策略段落後', type: 'flowchart', description: 'CAD 逐步診斷治療決策流程圖' },
  ],
  interactive_placeholders: [
    { position: 'Favrot 標準段落', type: 'interactive_scoring', description: 'Favrot 標準互動計分器' },
    { position: '治療策略段落', type: 'drug_comparison', description: 'Oclacitinib vs Lokivetmab vs Cyclosporine 比較工具' },
  ],
  drug_api_links: ['Oclacitinib', 'Lokivetmab', 'Cyclosporine', 'Prednisolone'],
  references: [
    { type: 'guideline', citation: 'Hensel P et al. Canine atopic dermatitis: detailed guidelines for diagnosis and allergen identification. BMC Vet Res. 2015;11:196. (ICADA 2023 update)', relevance: 'CAD 診斷與過敏原鑑定國際指引' },
    { type: 'journal', citation: 'Olivry T et al. Treatment of canine atopic dermatitis: 2015 updated guidelines from the International Committee on Allergic Diseases of Animals (ICADA). BMC Vet Dermatol. 2015;26:210-e49.', relevance: 'CAD 治療最新國際共識' },
    { type: 'textbook', citation: "Miller WH, Griffin CE, Campbell KL. Muller and Kirk's Small Animal Dermatology, 7th ed. Elsevier, 2013.", relevance: '皮膚科經典教材，CAD 完整章節' },
    { type: 'journal', citation: 'Favrot C et al. A prospective study on the clinical features of chronic canine atopic dermatitis and its diagnosis. Vet Dermatol. 2010;21(1):23-31.', relevance: 'Favrot 診斷標準原始研究' },
  ],
  is_current: true,
  created_at: now,
};

/** 皮膚刮搔與毛髮檢查 — 診斷型 */
const contentSkinScraping: NodeContent = {
  id: 'CONTENT-DERM-L4-002',
  node_id: 'DERM-L4-002',
  version: 1,
  summary: '皮膚刮搔（skin scraping）與毛髮檢查（trichogram）是獸醫皮膚科最基本且最重要的診斷工具。淺層刮搔用於偵測表皮寄生蟲（如疥蟎），深層刮搔用於偵測毛囊寄生蟲（如蠕形蟎）。毛髮檢查（拔毛鏡檢）可評估毛髮生長週期、毛幹結構異常及皮膚癬菌感染。搭配礦物油浸潤法與 KOH 消化法，這些技術幾乎可在每間診所立即執行，是皮膚科問診流程中不可或缺的第一線檢查。',
  learning_objectives: [
    '正確執行淺層與深層皮膚刮搔技術',
    '選擇適當的刮搔部位與刮搔深度',
    '執行毛髮拔毛鏡檢（trichogram）並辨識正常與異常毛髮',
    '辨識常見皮膚寄生蟲的顯微鏡形態（Demodex、Sarcoptes、Cheyletiella）',
    '運用 KOH 消化法輔助皮膚癬菌的偵測',
  ],
  key_points: [
    '深層刮搔：擠壓皮膚使蟎蟲從毛囊移出，刮至出血點（capillary ooze）',
    '淺層刮搔：刀片平行皮膚表面輕刮，收集角質層碎片',
    '礦物油浸潤法：載玻片與皮膚均塗礦物油，增加標本附著與光學折射',
    'Demodex canis：雪茄形、8 隻腳、居住於毛囊中，深層刮搔偵測',
    'Sarcoptes scabiei：圓形、吸盤狀足墊、淺層刮搔偵測率僅 20-50%',
    'KOH 消化法：10-20% KOH 加熱溶解角質，暴露皮膚癬菌的關節孢子',
    'Trichogram：拔毛後鏡檢評估毛根（anagen vs telogen）、毛幹損傷、真菌孢子',
  ],
  body: `# 皮膚刮搔與毛髮檢查

## 深層皮膚刮搔

### 適應症
- 懷疑蠕形蟎症（Demodicosis）
- 局部或廣泛脫毛
- 毛囊炎型病灶

### 技術
1. 選擇病灶活動性邊緣或新發區域
2. 用拇指與食指擠壓皮膚（將蟎蟲從毛囊擠出）
3. 刀片塗礦物油
4. 順毛囊方向反覆刮搔，直至見到 capillary ooze（點狀出血）
5. 將標本移至載玻片，加蓋玻片
6. 低倍鏡（4x/10x）掃描

### 陽性發現
- Demodex canis：雪茄形成蟲（250-300 μm），幼蟲（6 隻腳）、若蟲、蟲卵
- 需評估：活蟲 vs 死蟲比例、各發育階段比例（用於治療監測）

## 淺層皮膚刮搔

### 適應症
- 懷疑疥蟎（Sarcoptes）、姬螯蟎（Cheyletiella）
- 表皮鱗屑型病灶

### 技術
1. 選擇耳翼邊緣、肘部（疥蟎好發部位）
2. 刀片塗礦物油，平行皮膚表面輕刮
3. 僅刮除角質層，不刮至出血
4. 低倍鏡檢查

### 注意事項
- Sarcoptes 淺層刮搔偵測率僅 20-50%（陰性結果不能排除）
- 高度懷疑但刮搔陰性時，建議經驗性 isoxazoline 治療

## 毛髮檢查（Trichogram）

### 技術
1. 用止血鉗夾住病灶邊緣的毛髮，順生長方向快速拔出
2. 將毛髮排列於載玻片上，加礦物油與蓋玻片
3. 低倍鏡評估毛根（anagen bulb vs telogen club）、毛幹（斷裂、分叉）、附著物（真菌孢子）

### 正常毛髮
- Anagen hair：根部膨大、包裹毛根鞘、有色素
- Telogen hair：根部棒狀（club-shaped）、無色素

## KOH 消化法

### 技術
1. 將毛髮或皮屑置於載玻片上
2. 加入 10-20% KOH 溶液數滴
3. 微加熱（酒精燈或打火機）使角質溶解（勿煮沸）
4. 加蓋玻片，靜置 10-15 分鐘
5. 40x 鏡檢查找皮膚癬菌的關節孢子（arthrospores）

[圖片:深層 vs 淺層刮搔技術比較圖]
[圖片:Demodex、Sarcoptes、Cheyletiella 顯微鏡形態比較]`,
  clinical_pearl: '深層刮搔最關鍵的步驟是「擠壓」——用拇指和食指擠壓皮膚皺褶，將毛囊深處的蠕形蟎推向表面，然後再刮。不擠壓直接刮可能導致偽陰性。對於法國鬥牛犬等皮膚鬆弛的品種，也可考慮擠壓後直接用透明膠帶壓貼法（tape impression）替代刮搔。',
  common_mistakes: [
    '深層刮搔時未擠壓皮膚，導致蠕形蟎偵測率下降',
    '刮搔部位選擇不當（應選病灶活動性邊緣而非中央已苔蘚化區域）',
    '疥蟎刮搔陰性即排除疥蟎（偵測率僅 20-50%）',
    '未使用礦物油導致標本乾燥且不易觀察',
    'KOH 加熱過度導致標本碳化或蓋玻片破裂',
  ],
  disease_data: null,
  diagnostic_data: {
    indication: [
      '疑似蠕形蟎症（局部或廣泛脫毛、毛囊炎）',
      '疑似疥蟎或其他表皮寄生蟲',
      '疑似皮膚癬菌感染',
      '非瘙癢性脫毛的病因排查',
      '蠕形蟎治療效果的追蹤監測',
    ],
    contraindication: [
      '眼瞼邊緣或眼周薄皮膚區域需特別小心（可用膠帶壓貼法替代）',
      '凝血功能異常患者進行深層刮搔需審慎評估',
    ],
    technique: '深層刮搔：選擇病灶活動性邊緣，擠壓皮膚使蟎蟲向表面移動，以塗有礦物油的 #10 刀片順毛囊方向反覆刮搔至 capillary ooze，標本移至載玻片加蓋玻片。淺層刮搔：選擇鱗屑部位（疥蟎：耳翼邊緣、肘部），刀片平行皮膚表面輕刮收集角質碎片。Trichogram：止血鉗順毛生長方向拔毛，排列於礦物油中鏡檢。KOH 法：標本加 10-20% KOH 微加熱後鏡檢。',
    normal_findings: [
      { finding: '無寄生蟲', description: '鏡檢未見蟎蟲成蟲、幼蟲或蟲卵', significance: '排除蠕形蟎（深層刮搔敏感度高），但淺層刮搔陰性不能排除疥蟎' },
      { finding: '正常毛髮', description: 'Anagen（生長期）與 telogen（休止期）毛髮比例正常，毛幹完整', significance: '排除毛幹結構異常與毛髮生長週期疾病' },
      { finding: 'KOH 消化無真菌孢子', description: '角質溶解後未見關節孢子或菌絲', significance: '降低皮膚癬菌感染的可能性，但需結合真菌培養' },
    ],
    abnormal_findings: [
      { finding: 'Demodex canis', description: '雪茄形成蟲（250-300 μm）、8 隻腳，可見各發育階段（卵→幼蟲→若蟲→成蟲）', significance: '確診蠕形蟎症。少量成蟲可能為正常共生，大量或各階段均有則為病理性' },
      { finding: 'Sarcoptes scabiei', description: '圓形蟎蟲（200-400 μm），前兩對足具有非關節型吸盤（unjointed suckers）', significance: '確診疥蟎。但偵測率僅 20-50%，陰性不排除' },
      { finding: '皮膚癬菌關節孢子', description: 'KOH 消化後見毛幹表面或內部排列整齊的小圓形孢子（ectothrix 或 endothrix）', significance: '高度提示皮膚癬菌感染，需真菌培養確認菌種' },
      { finding: '異常毛髮', description: '大量 telogen hair（休止期毛髮過多）、毛幹斷裂、色素異常', significance: '提示內分泌疾病（甲低、Cushing）或營養性脫毛' },
    ],
    interpretation_guide: '1. 低倍鏡（4x-10x）系統性掃描整張載玻片。2. 發現可疑結構切換至 40x 確認。3. Demodex 需計數各發育階段比例（治療監測用）。4. Trichogram 評估 anagen:telogen 比例。5. KOH 法需耐心等待角質完全消化後再判讀。',
    pitfalls: [
      '淺層刮搔對疥蟎的敏感度低（20-50%），陰性結果不能排除',
      '刮搔已苔蘚化的慢性病灶可能降低蟎蟲偵測率',
      '未使用足夠壓力的深層刮搔可能漏掉毛囊深處的 Demodex',
      '少量 Demodex 成蟲可能為正常共生，需結合臨床判斷',
      'KOH 過度加熱導致標本損壞或氣泡影響觀察',
    ],
    sensitivity_specificity: '深層刮搔對 Demodex 敏感度 > 90%（正確技術下）。淺層刮搔對 Sarcoptes 敏感度僅 20-50%，特異度近 100%（見到即確診）。KOH 法對皮膚癬菌敏感度中等（50-70%），需結合 Wood 燈與真菌培養。',
    cost_benefit: '成本極低（僅需刀片、載玻片、礦物油、顯微鏡），可在每間診所立即執行。深層刮搔是蠕形蟎的最佳診斷方法。淺層刮搔成本效益一般（敏感度低），但陽性結果高度確診。',
  },
  procedure_data: null,
  visual_placeholders: [
    { position: '深層刮搔技術段落', type: 'annotated_image', description: '深層刮搔擠壓技術示意圖' },
    { position: '陽性發現段落後', type: 'comparison_table', description: 'Demodex vs Sarcoptes vs Cheyletiella 顯微鏡形態比較表' },
  ],
  interactive_placeholders: [
    { position: '正文末尾', type: 'microscopy_quiz', description: '虛擬顯微鏡——辨識皮膚寄生蟲形態' },
  ],
  drug_api_links: [],
  references: [
    { type: 'textbook', citation: "Miller WH, Griffin CE, Campbell KL. Muller and Kirk's Small Animal Dermatology, 7th ed. Elsevier, 2013.", relevance: '皮膚刮搔技術與寄生蟲辨識標準參考' },
    { type: 'journal', citation: 'Mueller RS et al. Treatment of demodicosis in dogs: 2011 clinical practice guidelines. Vet Dermatol. 2012;23(2):86-e21.', relevance: '蠕形蟎治療指引中的診斷標準' },
  ],
  is_current: true,
  created_at: now,
};

/** 以 Map 方式匯出，方便用 nodeId 快速查找 */
export const DERM_CONTENTS = new Map<string, NodeContent>([
  ['DERM-L3-001', contentCAD],
  ['DERM-L4-002', contentSkinScraping],
]);
