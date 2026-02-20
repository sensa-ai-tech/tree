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

## 一、病理機制 (Pathophysiology)



### 概述
犬異位性皮膚炎（CAD）是一種遺傳易感的慢性炎症性皮膚病，特徵為對環境過敏原（如塵蟎、花粉、黴菌孢子）產生 IgE 介導的過敏反應。在台灣，由於亞熱帶氣候全年溫暖潮濕，環境過敏原暴露量高，CAD 的發病率及嚴重程度可能高於溫帶地區。

### 病理機轉
CAD 的發病涉及三個核心異常：

1. **皮膚屏障缺陷**：表皮 filaggrin 表達減少、角質層脂質組成異常 → 經皮水分散失增加（TEWL）→ 過敏原更容易穿透
2. **免疫失調**：Th2 偏移 → IL-4/IL-13 驅動 B 細胞產生 allergen-specific IgE → 肥大細胞活化釋放組胺、前列腺素等
3. **神經免疫交互作用**：IL-31 直接刺激背根神經節的感覺神經元 → 瘙癢感 → 搔抓-發炎循環

## 二、臨床表現與診斷 (Clinical Signs & Diagnosis)

### Favrot 診斷標準
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

### 逐步診斷流程
1. **排除跳蚤過敏（FAD）**：嚴格跳蚤控制 4-8 週
2. **排除食物不良反應**：新蛋白質或水解蛋白飲食排除試驗 8 週
3. **排除疥蟎**：皮膚刮搔或經驗性 isoxazoline 治療
4. **排除繼發感染**：皮膚細胞學檢查（細菌、馬拉色菌）
5. **臨床診斷 CAD**：Favrot 標準 + 排除其他原因
6. **過敏原檢測**（可選）：血清 IgE 或皮內試驗 → 用於 ASIT

## 三、治療策略 (Treatment)

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

[圖片:CAD 逐步診斷治療流程圖]

## 四、併發症與監控 (Complications & Monitoring)

定期追蹤犬異位性皮膚炎患畜的治療反應與潛在併發症，根據臨床反應調整治療計畫，並監測藥物副作用與疾病進展。

## 五、預後與預後因子 (Prognosis)

犬異位性皮膚炎的預後取決於病因、疾病嚴重程度、治療時機及患畜整體健康狀況，早期診斷與積極治療通常可獲得較佳預後。

## 六、人醫借鑒 (Translational Insights)

| 人醫工具/概念 | 獸醫應用潛力 | 現況 |
|-------------|-------------|------|
| Dupilumab（抗 IL-4/IL-13 單抗） | 犬 AD 的抗細胞激素單抗開發 | 犬 anti-IL-31（Lokivetmab）已上市，anti-IL-4/13 研究中 |
| 過敏原免疫療法（AIT）次世代技術 | 舌下免疫療法（SLIT）、肽段免疫療法 | 犬 SLIT 已有商業化產品 |
| 光動力療法（PDT） | 犬淺表腫瘤/角化異常的非手術治療 | 人醫成熟，獸醫病例報告增加 |
| 生物製劑（biologics） | 犬自體免疫皮膚病的精準治療 | 獸醫可用生物製劑仍有限 |

## 七、臨床爭議與知識空缺 (Controversies & Knowledge Gaps)

| 爭議議題 | 現況 | Evidence Level |
|---------|------|---------------|
| 犬膿皮症的經驗性 vs 培養導引抗生素選擇 | MRSP 盛行率升高使經驗性治療風險增加 | Level II |
| 犬食物不良反應的排除飲食試驗持續時間 | 傳統 8 週 vs 新研究建議 6 週可能足夠 | Level II |
| 犬蠕形蟎蟲症是否需治療至兩次皮膚刮搔陰性 | 傳統標準 vs 較短療程的新證據 | Level III |
| 貓嗜酸球肉芽腫複合體的分類系統 | 現有分類是否反映不同病因仍不確定 | Level IV |`,
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

## 一、檢查原理與適應症 (Principles & Indications)



### 深層皮膚刮搔
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

### 淺層皮膚刮搔
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

### 毛髮檢查（Trichogram）
### 技術
1. 用止血鉗夾住病灶邊緣的毛髮，順生長方向快速拔出
2. 將毛髮排列於載玻片上，加礦物油與蓋玻片
3. 低倍鏡評估毛根（anagen bulb vs telogen club）、毛幹（斷裂、分叉）、附著物（真菌孢子）

### 正常毛髮
- Anagen hair：根部膨大、包裹毛根鞘、有色素
- Telogen hair：根部棒狀（club-shaped）、無色素

### KOH 消化法
### 技術
1. 將毛髮或皮屑置於載玻片上
2. 加入 10-20% KOH 溶液數滴
3. 微加熱（酒精燈或打火機）使角質溶解（勿煮沸）
4. 加蓋玻片，靜置 10-15 分鐘
5. 40x 鏡檢查找皮膚癬菌的關節孢子（arthrospores）

[圖片:深層 vs 淺層刮搔技術比較圖]
[圖片:Demodex、Sarcoptes、Cheyletiella 顯微鏡形態比較]

## 二、判讀要點 (Interpretation)

判讀結果時需結合臨床表現綜合評估，注意假陽性與假陰性的可能性，必要時進行重複檢測或追加其他檢查。

## 三、常見陷阱 (Pitfalls)

檢查結果的判讀需注意取樣品質、檢體保存條件及個體差異等因素可能導致的誤判。

## 四、人醫借鑒 (Translational Insights)

| 人醫工具/概念 | 獸醫應用潛力 | 現況 |
|-------------|-------------|------|
| 皮膚鏡（dermoscopy） | 犬皮膚病灶非侵入性放大觀察 | 人醫標準工具，獸醫研究增加 |
| 共聚焦顯微鏡（confocal microscopy） | 活體皮膚細胞學——免組織切片 | 研究工具，臨床應用前 |
| 次世代定序（NGS）微生物鑑定 | 犬皮膚感染病原精準鑑定 | 研究中，成本尚高 |

## 五、臨床爭議與知識空缺 (Controversies & Knowledge Gaps)

| 爭議議題 | 現況 | Evidence Level |
|---------|------|---------------|
| 犬過敏原特異性 IgE 檢測（血清 vs 皮膚點刺）的一致性 | 兩種方法結果不一致率高達 30-40% | Level II |
| 犬皮膚組織病理的品質與標準化 | 不同病理醫師間判讀一致性待改善 | Level III |`,
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
    { type: 'guideline', citation: 'Mueller RS et al. Treatment of demodicosis in dogs: 2011 clinical practice guidelines. Vet Dermatol. 2012;23(2):86-e21.', relevance: '蠕形蟎治療指引中的診斷標準' },
    { type: 'journal', citation: 'Saridomichelakis MN et al. An update on the role of cytology in the diagnosis of canine skin diseases. Vet Dermatol. 2017;28(5):457-e108.', relevance: '皮膚刮搔與細胞學在診斷中角色的更新回顧' },
  ],
  is_current: true,
  created_at: now,
};

/** 食物不良反應 (AFR) — 疾病型 */
const contentAFR: NodeContent = {
  id: 'CONTENT-DERM-L3-002',
  node_id: 'DERM-L3-002',
  version: 1,
  summary: '食物不良反應（Adverse Food Reaction, AFR）涵蓋食物過敏（免疫介導）與食物不耐受（非免疫介導），是犬貓第三常見的過敏性皮膚病。臨床表現與犬異位性皮膚炎高度重疊，唯一確診方法為嚴格的排除飲食試驗（8 週新蛋白質或水解蛋白飲食）並進行食物激發試驗。常見過敏原為牛肉、雞肉、乳製品、小麥。部分病例同時伴有腸胃道症狀。',
  learning_objectives: [
    '區分食物過敏（免疫介導）與食物不耐受（非免疫介導）的機轉差異',
    '設計並執行標準化的 8 週排除飲食試驗',
    '辨識 AFR 與 CAD 的臨床重疊與鑑別要點',
    '列舉犬貓最常見的食物過敏原',
    '規劃確診後的長期飲食管理策略',
  ],
  key_points: [
    '排除飲食試驗（8 週）是診斷 AFR 的金標準，血清 IgE 食物過敏原檢測不可靠',
    '犬最常見食物過敏原：牛肉、乳製品、雞肉、小麥、大豆',
    '貓最常見食物過敏原：牛肉、魚、雞肉、乳製品',
    'AFR 通常無季節性，約 20-30% 病例伴有腸胃道症狀（嘔吐、軟便）',
    '水解蛋白飲食的分子量需 < 10 kDa 才能有效避免免疫識別',
    '飲食試驗最常見失敗原因：飼主未嚴格執行（零食、人食共享、調味品）',
    'AFR 可在任何年齡發病，約 33% 的犬在 1 歲前發病',
  ],
  body: `# 食物不良反應 (AFR)

## 一、病理機制 (Pathophysiology)



### 概述
食物不良反應（AFR）是對飲食成分產生異常反應的統稱，包括免疫介導的食物過敏（food allergy）與非免疫介導的食物不耐受（food intolerance）。在犬貓皮膚科中，AFR 是僅次於跳蚤過敏和環境過敏（CAD）的第三大過敏性皮膚病。

### 病理機轉
### 食物過敏（免疫介導）
- **Type I 過敏**：食物抗原穿透腸道黏膜屏障 → 抗原呈現細胞捕獲 → Th2 活化 → IgE 產生 → 肥大細胞脫顆粒
- **Type IV 過敏**：T 細胞介導的延遲型過敏反應，可能在部分病例中扮演角色
- 過敏原多為分子量 > 10 kDa 的糖蛋白

### 食物不耐受（非免疫介導）
- 藥理反應（組胺、酪胺等生物胺）
- 代謝異常（乳糖不耐受）
- 毒素反應

### 排除飲食試驗
### 飲食選擇
1. **新蛋白質飲食**：使用動物從未接觸過的蛋白質源（如鹿肉、袋鼠肉、鱷魚肉）
2. **水解蛋白飲食**：蛋白質水解至 < 10 kDa，降低免疫識別
3. **自煮飲食**：單一新蛋白質 + 單一碳水化合物（飼主執行度更高但營養需補充）

### 執行要點
1. 嚴格執行 8 週（部分病例需 10-12 週）
2. 期間禁止所有其他食物：零食、人食、調味品、膠囊藥物外殼
3. 同居動物需隔離餵食或全部轉換
4. 使用無調味藥物
5. 詳細的飼主教育與書面指引

### 食物激發試驗
- 排除飲食期間症狀改善 > 50% → 恢復原飲食
- 症狀復發（通常 1-14 天內）→ 確診 AFR
- 可逐一引入單一蛋白質源以鑑定特定過敏原

[圖片:AFR 排除飲食試驗流程圖]

## 二、臨床表現與診斷 (Clinical Signs & Diagnosis)

- **皮膚症狀**：與 CAD 高度重疊——瘙癢、紅斑、外耳炎、指間炎
- **特徵性線索**：非季節性瘙癢、對糖皮質激素反應不佳或僅部分反應
- **腸胃道症狀**：20-30% 伴有嘔吐、軟便、排便次數增加、腸鳴音增加
- **貓特殊表現**：頭頸部瘙癢、粟粒性皮膚炎、嗜酸性肉芽腫複合體

## 三、治療策略 (Treatment)

食物不良反應的治療需根據疾病嚴重程度與個體差異制定個別化治療計畫，並定期評估治療反應。

## 四、併發症與監控 (Complications & Monitoring)

定期追蹤食物不良反應患畜的治療反應與潛在併發症，根據臨床反應調整治療計畫，並監測藥物副作用與疾病進展。

## 五、預後與預後因子 (Prognosis)

食物不良反應的預後取決於病因、疾病嚴重程度、治療時機及患畜整體健康狀況，早期診斷與積極治療通常可獲得較佳預後。

## 六、人醫借鑒 (Translational Insights)

| 人醫工具/概念 | 獸醫應用潛力 | 現況 |
|-------------|-------------|------|
| Dupilumab（抗 IL-4/IL-13 單抗） | 犬 AD 的抗細胞激素單抗開發 | 犬 anti-IL-31（Lokivetmab）已上市，anti-IL-4/13 研究中 |
| 過敏原免疫療法（AIT）次世代技術 | 舌下免疫療法（SLIT）、肽段免疫療法 | 犬 SLIT 已有商業化產品 |
| 光動力療法（PDT） | 犬淺表腫瘤/角化異常的非手術治療 | 人醫成熟，獸醫病例報告增加 |
| 生物製劑（biologics） | 犬自體免疫皮膚病的精準治療 | 獸醫可用生物製劑仍有限 |

## 七、臨床爭議與知識空缺 (Controversies & Knowledge Gaps)

| 爭議議題 | 現況 | Evidence Level |
|---------|------|---------------|
| 犬膿皮症的經驗性 vs 培養導引抗生素選擇 | MRSP 盛行率升高使經驗性治療風險增加 | Level II |
| 犬食物不良反應的排除飲食試驗持續時間 | 傳統 8 週 vs 新研究建議 6 週可能足夠 | Level II |
| 犬蠕形蟎蟲症是否需治療至兩次皮膚刮搔陰性 | 傳統標準 vs 較短療程的新證據 | Level III |
| 貓嗜酸球肉芽腫複合體的分類系統 | 現有分類是否反映不同病因仍不確定 | Level IV |`,
  clinical_pearl: '排除飲食試驗成功的關鍵在於飼主教育——必須在開始前花足夠時間詳細說明「完全排除」的意義。一塊小零食、一口人食、甚至含調味劑的藥錠都可能導致試驗失敗。建議提供書面清單列出所有「禁止」與「允許」的食物，並在第 2 週和第 4 週電話追蹤飼主執行情況。',
  common_mistakes: [
    '依賴血清 IgE 食物過敏原檢測作為診斷工具（偽陽性率極高，目前無可靠的血清學診斷方法）',
    '排除飲食試驗期間不夠嚴格（未排除零食、調味藥物、其他寵物的食物）',
    '試驗時間過短（< 8 週），在部分反應較慢的病例中可能出現偽陰性',
    '未進行食物激發試驗即直接診斷（症狀改善可能有其他原因）',
    '將食物不良反應與犬異位性皮膚炎視為互斥診斷（兩者可共存）',
  ],
  disease_data: {
    signalment: '犬貓均可發生，無明顯品種或性別偏好。約 33% 犬在 1 歲前發病，可在任何年齡出現。貓亦可在任何年齡發病。',
    etiology: '對飲食中特定蛋白質（糖蛋白）的免疫介導過敏反應或非免疫介導不耐受。犬常見過敏原：牛肉（34%）、乳製品（17%）、雞肉（15%）、小麥（13%）、大豆。貓常見過敏原：牛肉、魚、雞肉、乳製品。過敏原多為分子量 > 10 kDa 的糖蛋白。',
    pathogenesis: '食物抗原穿透腸道黏膜屏障（屏障功能異常或免疫耐受失敗）→ 腸道相關淋巴組織（GALT）中抗原呈現 → Th2 偏移 → IgE 介導（Type I）或 T 細胞介導（Type IV）免疫反應 → 肥大細胞脫顆粒 → 組胺等炎症介質釋放 → 皮膚與/或腸道炎症反應。部分病例涉及非免疫介導途徑（食物不耐受）。',
    clinical_signs: [
      { sign: '非季節性瘙癢', category: 'primary', description: '全年不間斷的瘙癢，好發面部、耳部、腋下、腹股溝、指間' },
      { sign: '外耳炎', category: 'primary', description: '約 50-80% AFR 犬有外耳炎，可為唯一表現' },
      { sign: '腸胃道症狀', category: 'primary', description: '20-30% 伴有嘔吐、軟便、排便頻率增加、脹氣' },
      { sign: '紅斑與丘疹', category: 'secondary', description: '面部、指間、腹側分佈' },
      { sign: '繼發性膿皮症', category: 'secondary', description: '反覆細菌感染' },
      { sign: '貓粟粒性皮膚炎', category: 'secondary', description: '貓特有表現：頭頸部瘙癢、粟粒性丘疹、嗜酸性肉芽腫' },
    ],
    staging: null,
    differential_diagnosis: [
      { condition: '犬異位性皮膚炎 (CAD)', key_differentiator: '通常有季節性加重（但非絕對），對糖皮質激素反應較佳，不伴腸胃道症狀' },
      { condition: '跳蚤過敏性皮膚炎 (FAD)', key_differentiator: '好發腰背與尾根，嚴格跳蚤控制後改善' },
      { condition: '疥蟎症', key_differentiator: '耳翼邊緣反射陽性，高度接觸傳染性' },
      { condition: '腸道寄生蟲', key_differentiator: '糞便檢查可鑑別，驅蟲治療後改善' },
    ],
    diagnostic_workup: '1. 完整病史（飲食史、症狀季節性、腸胃道症狀）→ 2. 排除 FAD（嚴格跳蚤控制 4-8 週）→ 3. 排除疥蟎 → 4. 排除繼發感染（皮膚細胞學）→ 5. 排除飲食試驗 8 週（新蛋白質或水解蛋白飲食）→ 6. 食物激發試驗確認（恢復原飲食觀察復發）→ 7. 可選：逐一蛋白質引入鑑定特定過敏原',
    treatment_protocol: '確診後長期飲食管理為核心治療。1. 迴避確認的過敏原蛋白質，使用新蛋白質或水解蛋白商業飲食。2. 自煮飲食需搭配營養師諮詢確保營養均衡。3. 急性期瘙癢控制：短期 Oclacitinib 或 Prednisolone。4. 繼發感染治療。5. 合併 CAD 時需同時管理環境過敏。',
    prognosis: '預後良好。嚴格飲食控制下多數犬貓可完全緩解皮膚症狀。部分病例可能隨時間對新蛋白質產生過敏，需要再次調整飲食。約 20-30% AFR 犬同時合併 CAD，需要雙重管理。',
    monitoring: '飲食轉換後 2-4 週追蹤瘙癢評分變化。確診後每 3-6 個月回診確認飲食控制與皮膚狀態。注意是否出現對新飲食的過敏反應。監測體重與營養狀態（尤其自煮飲食）。',
    owner_communication: '食物不良反應透過嚴格的飲食管理通常可以有效控制。排除飲食試驗需要 8 週的完全配合——期間不可給予任何其他食物、零食或調味品，這是確診的唯一可靠方法。確診後需要終身迴避過敏原蛋白質。血液過敏原檢測對食物過敏的診斷不可靠，請勿依賴。',
  },
  diagnostic_data: null,
  procedure_data: null,
  visual_placeholders: [
    { position: '排除飲食試驗段落後', type: 'flowchart', description: 'AFR 排除飲食試驗與激發試驗流程圖' },
    { position: '臨床表現段落後', type: 'comparison_table', description: 'AFR vs CAD 臨床特徵比較表' },
  ],
  interactive_placeholders: [
    { position: '排除飲食試驗段落', type: 'checklist', description: '排除飲食試驗執行檢核表' },
  ],
  drug_api_links: ['Oclacitinib', 'Prednisolone'],
  references: [
    { type: 'guideline', citation: 'Mueller RS, Olivry T, Prelaud P. Critically appraised topic on adverse food reactions of companion animals (2): common food allergen sources in dogs and cats. BMC Vet Res. 2016;12:9.', relevance: '犬貓常見食物過敏原系統性回顧' },
    { type: 'journal', citation: 'Olivry T, Mueller RS, Prelaud P. Critically appraised topic on adverse food reactions of companion animals (1): duration of elimination diets. BMC Vet Res. 2015;11:225.', relevance: '排除飲食試驗最佳持續時間的證據' },
    { type: 'textbook', citation: "Miller WH, Griffin CE, Campbell KL. Muller and Kirk's Small Animal Dermatology, 7th ed. Elsevier, 2013.", relevance: '食物不良反應完整章節' },
    { type: 'journal', citation: 'Mueller RS, Unterer S. Adverse food reactions: pathogenesis, clinical signs, diagnosis and alternatives to elimination diets. Vet J. 2018;236:89-95.', relevance: 'AFR 病理機轉與診斷方法綜述' },
  ],
  is_current: true,
  created_at: now,
};

/** 跳蚤過敏性皮膚炎 (FAD) — 疾病型 */
const contentFAD: NodeContent = {
  id: 'CONTENT-DERM-L3-003',
  node_id: 'DERM-L3-003',
  version: 1,
  summary: '跳蚤過敏性皮膚炎（Flea Allergy Dermatitis, FAD）是全球犬貓最常見的過敏性皮膚病。台灣地處亞熱帶，全年溫暖潮濕，跳蚤活動不分季節。FAD 的本質為對跳蚤唾液中的抗原（尤其是半抗原 hapten）產生 IgE 介導及遲發型細胞介導的混合過敏反應。單一跳蚤叮咬即可引發過敏犬的劇烈瘙癢。診斷以臨床表現結合嚴格跳蚤控制後的改善反應為主。治療核心為全年不間斷的 isoxazoline 類殺蚤劑，所有同居動物均需處理。',
  learning_objectives: [
    '描述 FAD 的免疫病理機轉（IgE 介導 + 遲發型過敏）',
    '辨識犬與貓 FAD 的典型病灶分佈差異',
    '規劃涵蓋所有同居動物的嚴格跳蚤控制計畫',
    '說明台灣亞熱帶環境對 FAD 流行病學的影響',
  ],
  key_points: [
    'FAD 是犬貓最常見的過敏性皮膚病，台灣全年皆有跳蚤活動',
    '犬典型分佈：腰背部、尾根、後腿內側、腹側（「聖誕樹」分佈）',
    '貓典型分佈：頭頸部粟粒性皮膚炎、腹側對稱性脫毛、嗜酸性肉芽腫',
    '不需要看到跳蚤才能診斷——過敏犬可因過度搔抓而將跳蚤全部移除',
    'Isoxazoline（fluralaner, afoxolaner, sarolaner）為目前首選殺蚤劑',
    '環境控制至關重要：跳蚤卵與蛹占環境中跳蚤總量的 95%',
    '所有同居動物（包括貓）必須同時進行跳蚤預防',
  ],
  body: `# 跳蚤過敏性皮膚炎 (FAD)

## 一、病理機制 (Pathophysiology)



### 概述
FAD 是對貓蚤（Ctenocephalides felis）唾液蛋白產生過敏反應的皮膚病。台灣亞熱帶氣候使跳蚤全年活躍，FAD 在台灣無明顯季節性。即便飼主「沒看到跳蚤」，也不能排除 FAD。

### 病理機轉
跳蚤唾液含有超過 15 種抗原蛋白（包括半抗原），引發混合型過敏反應：
1. **即時型（Type I）**：IgE 介導 → 肥大細胞脫顆粒 → 叮咬後數分鐘內瘙癢
2. **遲發型（Type IV）**：T 細胞介導 → 叮咬後 24-48 小時發生遲發性丘疹與紅斑
3. **晚期型反應**：嗜鹼性球募集 → 叮咬後 24 小時出現的持續性炎症

## 二、臨床表現與診斷 (Clinical Signs & Diagnosis)

### 犬
- 好發部位：腰背部、尾根、後腿內側、腹股溝、腹側
- 典型病灶：丘疹、脫毛、苔蘚化、色素沉著、「熱點」（急性濕性皮膚炎）
- 嚴重病例可繼發膿皮症

### 貓
- 粟粒性皮膚炎（頭頸部小丘疹結痂）
- 腹側對稱性脫毛（過度理毛所致）
- 嗜酸性肉芽腫複合體
- 頭頸部瘙癢與自殘

### 診斷
1. 臨床病史與典型分佈模式
2. 跳蚤或跳蚤糞便的發現（濕紙巾測試：黑色顆粒溶出紅棕色 = 跳蚤糞便）
3. **嚴格跳蚤控制試驗**：Isoxazoline 類全身性殺蚤劑 + 環境處理 × 4-8 週
4. 症狀改善 > 50% 即支持診斷
5. 皮內試驗：跳蚤抗原萃取物可產生即時型與遲發型反應（臨床研究用）

## 三、治療策略 (Treatment)

### 殺蚤劑（首選 isoxazoline 類）
- [藥物:Fluralaner]（Bravecto）：犬 25-56 mg/kg PO q12w 或貓 spot-on q12w
- [藥物:Afoxolaner]（NexGard）：犬 2.5-6.2 mg/kg PO q4w
- [藥物:Sarolaner]（Simparica）：犬 2-4 mg/kg PO q4w

### 環境控制
- 室內吸塵（重點：地毯、沙發縫隙、寵物床墊）
- 環境用含 IGR（昆蟲生長調節劑）的噴霧劑
- 清洗寵物寢具（60°C 以上）

### 急性瘙癢控制
- [藥物:Oclacitinib] 短期使用或 [藥物:Prednisolone] 0.5-1 mg/kg × 3-5 天

[圖片:犬貓 FAD 典型病灶分佈圖]

## 四、併發症與監控 (Complications & Monitoring)

定期追蹤跳蚤過敏性皮膚炎患畜的治療反應與潛在併發症，根據臨床反應調整治療計畫，並監測藥物副作用與疾病進展。

## 五、預後與預後因子 (Prognosis)

跳蚤過敏性皮膚炎的預後取決於病因、疾病嚴重程度、治療時機及患畜整體健康狀況，早期診斷與積極治療通常可獲得較佳預後。

## 六、人醫借鑒 (Translational Insights)

| 人醫工具/概念 | 獸醫應用潛力 | 現況 |
|-------------|-------------|------|
| Dupilumab（抗 IL-4/IL-13 單抗） | 犬 AD 的抗細胞激素單抗開發 | 犬 anti-IL-31（Lokivetmab）已上市，anti-IL-4/13 研究中 |
| 過敏原免疫療法（AIT）次世代技術 | 舌下免疫療法（SLIT）、肽段免疫療法 | 犬 SLIT 已有商業化產品 |
| 光動力療法（PDT） | 犬淺表腫瘤/角化異常的非手術治療 | 人醫成熟，獸醫病例報告增加 |
| 生物製劑（biologics） | 犬自體免疫皮膚病的精準治療 | 獸醫可用生物製劑仍有限 |

## 七、臨床爭議與知識空缺 (Controversies & Knowledge Gaps)

| 爭議議題 | 現況 | Evidence Level |
|---------|------|---------------|
| 犬膿皮症的經驗性 vs 培養導引抗生素選擇 | MRSP 盛行率升高使經驗性治療風險增加 | Level II |
| 犬食物不良反應的排除飲食試驗持續時間 | 傳統 8 週 vs 新研究建議 6 週可能足夠 | Level II |
| 犬蠕形蟎蟲症是否需治療至兩次皮膚刮搔陰性 | 傳統標準 vs 較短療程的新證據 | Level III |
| 貓嗜酸球肉芽腫複合體的分類系統 | 現有分類是否反映不同病因仍不確定 | Level IV |`,
  clinical_pearl: '在台灣，「我的狗從不出門所以不會有跳蚤」是最常見的飼主迷思。跳蚤可經由人類衣物、訪客、其他動物帶入室內。即便室內犬，也應全年使用 isoxazoline 類預防。診斷 FAD 最可靠的方法是「治療性診斷」——使用 isoxazoline 嚴格控制 4-8 週觀察改善。',
  common_mistakes: [
    '因為沒有看到跳蚤或跳蚤糞便就排除 FAD（過敏犬過度搔抓會移除跳蚤）',
    '僅治療有症狀的動物而忽略同居動物的跳蚤預防',
    '僅使用外用殺蚤劑而未進行環境控制（環境中蟲卵+蛹占 95%）',
    '在台灣僅在夏季進行跳蚤預防（台灣全年有跳蚤活動）',
    '使用已產生抗藥性的舊型除蚤產品（如 fipronil 在部分地區抗藥性顯著）',
  ],
  disease_data: {
    signalment: '犬貓均好發，無品種限制。犬好發 1-5 歲，但任何年齡皆可。戶外活動犬與多寵物家庭風險更高。台灣全年發生，無明顯季節差異。',
    etiology: '對貓蚤（Ctenocephalides felis）唾液中至少 15 種蛋白質抗原的過敏反應。主要過敏原為唾液半抗原與高分子量糖蛋白。單次跳蚤叮咬即可在致敏動物引發劇烈瘙癢反應。',
    pathogenesis: '跳蚤唾液蛋白注入皮膚 → 朗格漢斯細胞捕獲抗原 → Th2 活化 + IgE 產生（即時型 Type I）→ 肥大細胞脫顆粒 → 組胺、白三烯釋放 → 即時瘙癢。同時 T 細胞介導遲發型反應（Type IV）→ 24-48 小時後炎症持續。嗜鹼性球與嗜酸性球浸潤 → 慢性炎症與組織損傷。',
    clinical_signs: [
      { sign: '腰背部瘙癢', category: 'primary', description: '犬最典型的好發部位，腰背、尾根劇烈搔抓' },
      { sign: '丘疹性皮疹', category: 'primary', description: '跳蚤叮咬處的紅色丘疹，尤其腹側與後腿內側' },
      { sign: '急性濕性皮膚炎', category: 'secondary', description: '「熱點」：急性自殘性潮濕糜爛病灶' },
      { sign: '繼發性膿皮症', category: 'secondary', description: '慢性搔抓導致細菌感染' },
      { sign: '貓粟粒性皮膚炎', category: 'primary', description: '貓特有：頭頸背部小型丘疹結痂' },
      { sign: '苔蘚化與色素沉著', category: 'secondary', description: '慢性病例皮膚增厚、色素過度沉著' },
    ],
    staging: null,
    differential_diagnosis: [
      { condition: '犬異位性皮膚炎 (CAD)', key_differentiator: '好發面部、耳翼、腋下、指間；CAD 腰背部通常不受累' },
      { condition: '食物不良反應 (AFR)', key_differentiator: '非季節性，可伴腸胃道症狀，排除飲食試驗改善' },
      { condition: '疥蟎症', key_differentiator: '耳翼邊緣好發，耳翼反射陽性，接觸傳染性' },
      { condition: '馬拉色菌皮膚炎', key_differentiator: '特殊油脂氣味，皮膚皺褶好發，細胞學見花生形酵母菌' },
    ],
    diagnostic_workup: '1. 詳細病史（跳蚤預防史、同居動物、室內外活動）→ 2. 理學檢查（跳蚤/跳蚤糞便、典型分佈模式）→ 3. 濕紙巾測試（跳蚤糞便溶出紅棕色）→ 4. 嚴格跳蚤控制試驗 4-8 週（isoxazoline + 環境控制 + 所有同居動物）→ 5. 評估臨床改善程度',
    treatment_protocol: '1. 全年不間斷 isoxazoline 類殺蚤劑（所有同居動物）：Fluralaner 25-56 mg/kg PO q12w 或 Afoxolaner 2.5 mg/kg PO q4w。2. 環境控制：吸塵、IGR 噴霧、清洗寢具。3. 急性期瘙癢：短期 Prednisolone 0.5 mg/kg × 3-5 天或 Oclacitinib。4. 繼發感染治療。',
    prognosis: '預後良好。嚴格且持續的跳蚤控制下，多數犬貓症狀可完全消除。關鍵在於全年不間斷預防與所有同居動物同步處理。停止跳蚤預防後症狀會復發。',
    monitoring: '開始跳蚤控制後 2-4 週評估初步反應，4-8 週評估完整反應。穩定後每 3-6 個月確認飼主持續執行跳蚤預防。監測繼發感染。',
    owner_communication: 'FAD 是對跳蚤唾液的過敏反應，即使只被一隻跳蚤叮咬也會劇烈瘙癢。治療的核心是全年不間斷的跳蚤預防——台灣氣候全年有跳蚤。家中所有犬貓都必須同時預防。環境清潔（吸塵、洗寢具）同樣重要，因為跳蚤卵和蛹藏在環境中。',
  },
  diagnostic_data: null,
  procedure_data: null,
  visual_placeholders: [
    { position: '臨床表現段落後', type: 'annotated_image', description: '犬貓 FAD 典型病灶分佈對照圖' },
    { position: '治療段落後', type: 'flowchart', description: 'FAD 診斷治療決策流程圖' },
  ],
  interactive_placeholders: [
    { position: '診斷段落', type: 'checklist', description: '跳蚤控制計畫執行檢核表' },
  ],
  drug_api_links: ['Fluralaner', 'Afoxolaner', 'Sarolaner', 'Oclacitinib', 'Prednisolone'],
  references: [
    { type: 'textbook', citation: "Miller WH, Griffin CE, Campbell KL. Muller and Kirk's Small Animal Dermatology, 7th ed. Elsevier, 2013.", relevance: 'FAD 完整章節與跳蚤生物學' },
    { type: 'guideline', citation: 'Dryden MW, Hodgkins E. Vector-borne diseases in pets: the stealth health threat. Compend Contin Educ Vet. 2010;32(6):E1-4.', relevance: '跳蚤控制策略指引' },
    { type: 'journal', citation: 'Rohdich N et al. A randomized, blinded, controlled and multi-centered field study comparing the efficacy and safety of Bravecto (fluralaner) against Frontline (fipronil) in flea- and tick-infested dogs. Parasit Vectors. 2014;7:83.', relevance: 'Isoxazoline vs fipronil 殺蚤效果比較' },
  ],
  is_current: true,
  created_at: now,
};

/** 蠕形蟎症 (Demodicosis) — 疾病型 */
const contentDemodicosis: NodeContent = {
  id: 'CONTENT-DERM-L3-004',
  node_id: 'DERM-L3-004',
  version: 1,
  summary: '蠕形蟎症（Demodicosis）是由蠕形蟎（Demodex spp.）過度增殖引起的皮膚病，犬以 Demodex canis 為主。分為局部型與廣泛型。幼犬型（< 18 個月）多有自限性傾向，成犬型（> 4 歲新發）需排查潛在免疫抑制因素。Isoxazoline 類藥物已取代傳統 ivermectin/amitraz 成為首選治療。診斷以深層皮膚刮搔為金標準。',
  learning_objectives: [
    '區分局部型與廣泛型蠕形蟎症的臨床特徵與預後差異',
    '正確執行深層皮膚刮搔並辨識 Demodex 各發育階段',
    '說明幼犬型 vs 成犬型蠕形蟎症的病因與管理差異',
    '比較 isoxazoline 類藥物與傳統治療的療效與安全性',
    '制定蠕形蟎症的治療監測計畫與停藥標準',
  ],
  key_points: [
    'Demodex canis 是犬皮膚正常共生蟎蟲，免疫功能異常時過度增殖導致疾病',
    '局部型（< 4 處病灶或 < 1 個肢體）多可自癒（90%），廣泛型需積極治療',
    '幼犬型（< 18 月齡）與遺傳性 T 細胞功能缺陷有關；成犬型需排查 Cushing、腫瘤、免疫抑制藥物',
    '深層皮膚刮搔是診斷金標準：擠壓皮膚後刮至 capillary ooze',
    'Isoxazoline（fluralaner, afoxolaner, sarolaner）為目前首選，療效優於 ivermectin',
    '治療持續至連續 2 次（間隔 4 週）深層刮搔皆為陰性後再持續 1 個月',
    '廣泛型蠕形蟎症犬不建議用於繁殖（遺傳易感性）',
  ],
  body: `# 蠕形蟎症 (Demodicosis)

## 一、病理機制 (Pathophysiology)



### 概述
蠕形蟎症是犬最重要的寄生蟲性皮膚病之一。Demodex canis 正常存在於犬的毛囊中（出生時由母犬傳遞），當宿主免疫功能（尤其 T 細胞功能）異常時，蟎蟲過度增殖導致毛囊炎與繼發感染。

### 病原學
- **Demodex canis**：最常見，居住於毛囊，雪茄形（250-300 μm）
- **Demodex injai**：較長型，居住於皮脂腺，好發梗犬類
- **Demodex cornei**：短體型，居住於角質層，較少見

### 分類
### 依範圍分
- **局部型**：< 4 處病灶或僅累及 1 個肢體，90% 可自癒
- **廣泛型**：≥ 5 處病灶或累及 ≥ 2 個肢體或全身性，需積極治療

### 依發病年齡分
- **幼犬型**（< 18 月齡）：遺傳性 T 細胞功能缺陷 → 蟎蟲過度增殖
- **成犬型**（> 4 歲新發）：需排查潛在免疫抑制：Cushing、甲狀腺低下、腫瘤、化療

## 二、臨床表現與診斷 (Clinical Signs & Diagnosis)

- **局部型**：局限性脫毛斑（1-4 處），輕微紅斑，好發面部與前肢
- **廣泛型**：廣泛脫毛、毛囊炎（丘疹/膿皰）、結痂、苔蘚化
- **膿皮蟎症**（Pododemodicosis）：指間紅腫、疼痛、瘻管形成
- **繼發深層膿皮症**：嚴重病例可見蜂窩織炎、淋巴結腫大、敗血症風險

### 診斷
1. **深層皮膚刮搔**（金標準）：擠壓皮膚 → 刮至 capillary ooze → 低倍鏡檢
2. 需記錄各發育階段比例（卵、幼蟲、若蟲、成蟲）與活蟲/死蟲比例
3. **毛髮拔取鏡檢**（Trichogram）：適用難以刮搔的部位（眼周、指間）
4. **皮膚切片**：深層膿皮症或刮搔困難部位的輔助診斷

## 三、治療策略 (Treatment)

### 首選：Isoxazoline 類
- [藥物:Fluralaner] 25-56 mg/kg PO 單劑，視需要每 12 週重複
- [藥物:Afoxolaner] 2.5 mg/kg PO q4w
- [藥物:Sarolaner] 2 mg/kg PO q4w

### 傳統療法（替代方案）
- [藥物:Ivermectin] 0.3-0.6 mg/kg PO SID（需從低劑量漸增；MDR1 突變犬禁用）
- Amitraz 浸泡（毒性高，目前少用）

### 繼發感染控制
- 深層膿皮症：全身性抗生素（基於培養與藥敏）4-6 週
- 表層：含 chlorhexidine 的藥浴

[圖片:Demodex canis 生活史與各發育階段顯微鏡形態]

## 四、併發症與監控 (Complications & Monitoring)

定期追蹤蠕形蟎症患畜的治療反應與潛在併發症，根據臨床反應調整治療計畫，並監測藥物副作用與疾病進展。

## 五、預後與預後因子 (Prognosis)

蠕形蟎症的預後取決於病因、疾病嚴重程度、治療時機及患畜整體健康狀況，早期診斷與積極治療通常可獲得較佳預後。

## 六、人醫借鑒 (Translational Insights)

| 人醫工具/概念 | 獸醫應用潛力 | 現況 |
|-------------|-------------|------|
| Dupilumab（抗 IL-4/IL-13 單抗） | 犬 AD 的抗細胞激素單抗開發 | 犬 anti-IL-31（Lokivetmab）已上市，anti-IL-4/13 研究中 |
| 過敏原免疫療法（AIT）次世代技術 | 舌下免疫療法（SLIT）、肽段免疫療法 | 犬 SLIT 已有商業化產品 |
| 光動力療法（PDT） | 犬淺表腫瘤/角化異常的非手術治療 | 人醫成熟，獸醫病例報告增加 |
| 生物製劑（biologics） | 犬自體免疫皮膚病的精準治療 | 獸醫可用生物製劑仍有限 |

## 七、臨床爭議與知識空缺 (Controversies & Knowledge Gaps)

| 爭議議題 | 現況 | Evidence Level |
|---------|------|---------------|
| 犬膿皮症的經驗性 vs 培養導引抗生素選擇 | MRSP 盛行率升高使經驗性治療風險增加 | Level II |
| 犬食物不良反應的排除飲食試驗持續時間 | 傳統 8 週 vs 新研究建議 6 週可能足夠 | Level II |
| 犬蠕形蟎蟲症是否需治療至兩次皮膚刮搔陰性 | 傳統標準 vs 較短療程的新證據 | Level III |
| 貓嗜酸球肉芽腫複合體的分類系統 | 現有分類是否反映不同病因仍不確定 | Level IV |`,
  clinical_pearl: '成犬新發的廣泛型蠕形蟎症是一個「紅旗」信號——永遠要追查潛在免疫抑制原因。最常見的是醫源性（長期糖皮質激素、cyclosporine）和內分泌疾病（Cushing）。找不到潛在原因時，應建議腫瘤篩查。另外，MDR1（ABCB1）基因突變犬（柯利犬、牧羊犬類）絕對禁用 ivermectin 高劑量治療。',
  common_mistakes: [
    '局部型蠕形蟎症即開始全身性藥物治療（90% 可自癒，應先觀察 4-8 週）',
    '治療期間未定期進行深層刮搔監測治療反應（應每 4 週刮搔一次）',
    '未達到停藥標準即停藥（需連續 2 次陰性刮搔後再持續 1 個月）',
    '成犬型蠕形蟎症未排查潛在免疫抑制因素',
    '對 MDR1 突變品種使用高劑量 ivermectin（可致命性神經毒性）',
  ],
  disease_data: {
    signalment: '幼犬型：< 18 月齡，好發品種：英國鬥牛犬、法國鬥牛犬、沙皮犬、拳師犬、德國牧羊犬、大丹犬。成犬型：> 4 歲新發，無品種偏好，需排查免疫抑制。',
    etiology: 'Demodex canis 正常共生於犬毛囊中（哺乳期由母犬傳遞）。疾病發生與宿主 T 細胞免疫功能缺陷相關。幼犬型為遺傳性 T 細胞功能不全；成犬型多為後天免疫抑制（Cushing、腫瘤、醫源性免疫抑制）。',
    pathogenesis: '免疫功能異常（T 細胞抑制、IL-10 上調、Th1 反應不足）→ Demodex 在毛囊中過度增殖 → 毛囊擴張與破裂 → 毛囊周圍肉芽腫性炎症 → 繼發細菌感染（Staphylococcus pseudintermedius）→ 深層毛囊炎/癤病 → 嚴重病例可發展為蜂窩織炎與敗血症。',
    clinical_signs: [
      { sign: '局部脫毛斑', category: 'primary', description: '面部（眼周、口周）與前肢最常見，1-4 處，輕微紅斑' },
      { sign: '廣泛脫毛與毛囊炎', category: 'primary', description: '多處丘疹/膿皰、紅斑、鱗屑、結痂' },
      { sign: '指間炎', category: 'secondary', description: 'Pododemodicosis：指間紅腫、疼痛、瘻管，治療反應較差' },
      { sign: '繼發深層膿皮症', category: 'secondary', description: '癤病、蜂窩織炎、出血性水泡、引流瘻管' },
      { sign: '淋巴結腫大', category: 'secondary', description: '廣泛型病例常見局部或全身淋巴結腫大' },
    ],
    staging: { system: '範圍分級', stages: ['局部型：< 4 處病灶或僅累及 1 個肢體', '廣泛型：≥ 5 處病灶或累及 ≥ 2 個肢體或全身性'] },
    differential_diagnosis: [
      { condition: '皮膚癬菌症', key_differentiator: 'Wood 燈螢光（部分菌種）、真菌培養陽性、毛髮 KOH 見關節孢子' },
      { condition: '細菌性膿皮症', key_differentiator: '無蟎蟲（刮搔陰性）、皮膚細胞學見球菌、抗生素反應佳' },
      { condition: '皮膚型淋巴瘤', key_differentiator: '成犬，進行性病灶，皮膚切片可鑑別' },
      { condition: '甲狀腺低下脫毛', key_differentiator: '非瘙癢性對稱脫毛、肥胖、嗜睡、T4/TSH 異常' },
    ],
    diagnostic_workup: '1. 深層皮膚刮搔（多點，包括病灶邊緣與新發區域）→ 2. 記錄蟎蟲各發育階段與活蟲比例 → 3. 皮膚細胞學（評估繼發感染）→ 4. 成犬型需額外：CBC/BCS、T4/TSH、腎上腺功能檢查、腹部超音波 → 5. 深層膿皮症行細菌培養與藥敏',
    treatment_protocol: '1. 局部型：觀察 4-8 週（90% 自癒）。若進展為廣泛型則開始治療。2. 廣泛型首選 isoxazoline：Fluralaner 25-56 mg/kg PO 單劑或 Afoxolaner 2.5 mg/kg PO q4w。3. 繼發深層膿皮症：全身性抗生素 4-6 週（依藥敏）。4. 每 4 週深層刮搔監測。5. 成犬型同時治療潛在免疫抑制因素。',
    prognosis: '局部型預後極佳（90% 自癒）。廣泛型幼犬型使用 isoxazoline 治療痊癒率 > 95%。成犬型預後取決於潛在病因控制。指間型（pododemodicosis）治療時間最長，反應較差。廣泛型犬不建議繁殖。',
    monitoring: '每 4 週深層皮膚刮搔，記錄蟎蟲數量與發育階段變化。治療持續至連續 2 次（間隔 4 週）刮搔皆為陰性，之後再持續用藥 1 個月。治療結束後 3 個月與 6 個月各追蹤一次以確認無復發。',
    owner_communication: '蠕形蟎症不會傳染給人或其他動物（蟎蟲為犬正常共生）。幼犬型局部病灶多數可自行痊癒，廣泛型需要數月的藥物治療。重要的是定期回診做皮膚刮搔，確認蟎蟲確實被清除後才能停藥。廣泛型犬建議絕育不繁殖。',
  },
  diagnostic_data: null,
  procedure_data: null,
  visual_placeholders: [
    { position: '病原學段落後', type: 'comparison_table', description: 'D. canis vs D. injai vs D. cornei 形態比較表' },
    { position: '治療段落後', type: 'flowchart', description: '蠕形蟎症診斷治療與監測流程圖' },
  ],
  interactive_placeholders: [
    { position: '分類段落', type: 'decision_tree', description: '局部型 vs 廣泛型分類決策工具' },
  ],
  drug_api_links: ['Fluralaner', 'Afoxolaner', 'Sarolaner', 'Ivermectin'],
  references: [
    { type: 'guideline', citation: 'Mueller RS et al. Treatment of demodicosis in dogs: 2011 clinical practice guidelines. Vet Dermatol. 2012;23(2):86-e21.', relevance: '蠕形蟎症治療臨床實踐指引' },
    { type: 'journal', citation: 'Fourie JJ et al. Efficacy of orally administered fluralaner (Bravecto) or topically applied imidacloprid/moxidectin (Advocate) against generalized demodicosis in dogs. Parasit Vectors. 2015;8:187.', relevance: 'Fluralaner 治療廣泛型蠕形蟎症的關鍵研究' },
    { type: 'textbook', citation: "Miller WH, Griffin CE, Campbell KL. Muller and Kirk's Small Animal Dermatology, 7th ed. Elsevier, 2013.", relevance: '蠕形蟎症完整章節' },
    { type: 'journal', citation: 'Perego R et al. Trial of the efficacy of a commercial diet in the treatment of canine generalized demodicosis associated with a deep pyoderma. Vet Res Commun. 2019;43:55-61.', relevance: '廣泛型蠕形蟎症合併深層膿皮症的管理' },
  ],
  is_current: true,
  created_at: now,
};

/** 細菌性膿皮症 (Bacterial Pyoderma) — 疾病型 */
const contentPyoderma: NodeContent = {
  id: 'CONTENT-DERM-L3-005',
  node_id: 'DERM-L3-005',
  version: 1,
  summary: '細菌性膿皮症是犬最常見的皮膚感染，主要病原為 Staphylococcus pseudintermedius。依深度分為表層（表面膿皮症）、淺層（表皮內膿皮症）與深層（毛囊及真皮膿皮症）。膿皮症幾乎永遠是繼發於潛在病因（過敏、內分泌疾病、蠕形蟎症），找出並治療潛在病因是防止復發的關鍵。甲氧西林抗藥性 S. pseudintermedius（MRSP）日益增加，強調依據培養與藥敏試驗選擇抗生素的重要性。',
  learning_objectives: [
    '依深度分類表層、淺層與深層膿皮症並辨識各自的典型病灶',
    '說明膿皮症幾乎永遠繼發於潛在病因的重要概念',
    '正確執行皮膚細胞學快速診斷細菌感染',
    '規劃經驗性與依培養結果的抗生素治療方案',
    '說明 MRSP 的臨床意義與抗生素管理原則',
  ],
  key_points: [
    'S. pseudintermedius 是犬膿皮症最主要的病原（> 90%）',
    '膿皮症幾乎永遠是繼發性的——必須找出潛在病因（CAD、FAD、AFR、Cushing、甲低、蠕形蟎）',
    '皮膚細胞學是快速診斷的第一步：見退化性嗜中性球吞噬球菌即確診',
    '淺層膿皮症經驗性首選：Cephalexin 22-30 mg/kg PO BID，治療至臨床痊癒後再延長 7-14 天',
    '深層膿皮症需依細菌培養與藥敏選擇抗生素，療程 4-8 週',
    'MRSP 盛行率上升，反覆感染或經驗性治療失敗時應進行培養',
    '表皮脫屑環（epidermal collarette）是淺層膿皮症的特徵性病灶',
  ],
  body: `# 細菌性膿皮症 (Bacterial Pyoderma)

## 一、病理機制 (Pathophysiology)



### 概述
犬膿皮症是獸醫皮膚科日常最常遇到的問題之一。理解膿皮症的核心概念是：它幾乎永遠是繼發於其他潛在疾病的。僅治療感染而不處理根本原因，將導致反覆復發。

### 分類（依深度）
### 表層膿皮症
- **急性濕性皮膚炎**（Hot spot）：急性自殘性、潮濕糜爛病灶
- **皮膚皺褶膿皮症**（Skin fold pyoderma）：皮膚皺褶處（口唇、面部、尾部）

### 淺層膿皮症
- **膿疱疹**（Impetigo）：幼犬腹部，非毛囊性膿皰
- **表皮膿皮症**：毛囊炎 → 膿皰 → 表皮脫屑環（epidermal collarette）→ 色素沉著

### 深層膿皮症
- **深層毛囊炎/癤病**：毛囊破裂 → 真皮與皮下組織感染
- **蜂窩織炎**：瀰漫性皮下感染
- **德國牧羊犬深層膿皮症**：品種特異性，與免疫缺陷相關

### 病原學
- **主要**：Staphylococcus pseudintermedius（> 90%）
- **次要**：S. aureus、S. schleiferi、Pseudomonas aeruginosa（深層/慢性）
- **MRSP**：甲氧西林抗藥性 S. pseudintermedius，盛行率在台灣約 15-30%

## 二、臨床表現與診斷 (Clinical Signs & Diagnosis)

1. **皮膚細胞學**（最重要的第一步）：膠帶壓貼或直接抹片
   - 陽性發現：退化性嗜中性球內含吞噬球菌
2. **細菌培養與藥敏**：深層膿皮症、反覆復發、經驗性治療失敗時必須執行
3. **排查潛在病因**：過敏、內分泌、蠕形蟎、免疫抑制

## 三、治療策略 (Treatment)

### 淺層膿皮症
- 經驗性抗生素：[藥物:Cephalexin] 22-30 mg/kg PO BID
- 或 [藥物:Amoxicillin-clavulanate] 12.5-25 mg/kg PO BID
- 療程：臨床痊癒後再延長 7-14 天（通常共 3-4 週）
- 輔助：含 [藥物:Chlorhexidine] 3-4% 的藥浴或慕斯，每週 2-3 次

### 深層膿皮症
- 依培養與藥敏選擇抗生素
- 療程：臨床痊癒後再延長 14-21 天（通常共 6-8 週）
- 嚴重病例考慮合併局部治療

[圖片:膿皮症深度分類與對應病灶示意圖]

## 四、併發症與監控 (Complications & Monitoring)

定期追蹤細菌性膿皮症患畜的治療反應與潛在併發症，根據臨床反應調整治療計畫，並監測藥物副作用與疾病進展。

## 五、預後與預後因子 (Prognosis)

細菌性膿皮症的預後取決於病因、疾病嚴重程度、治療時機及患畜整體健康狀況，早期診斷與積極治療通常可獲得較佳預後。

## 六、人醫借鑒 (Translational Insights)

| 人醫工具/概念 | 獸醫應用潛力 | 現況 |
|-------------|-------------|------|
| Dupilumab（抗 IL-4/IL-13 單抗） | 犬 AD 的抗細胞激素單抗開發 | 犬 anti-IL-31（Lokivetmab）已上市，anti-IL-4/13 研究中 |
| 過敏原免疫療法（AIT）次世代技術 | 舌下免疫療法（SLIT）、肽段免疫療法 | 犬 SLIT 已有商業化產品 |
| 光動力療法（PDT） | 犬淺表腫瘤/角化異常的非手術治療 | 人醫成熟，獸醫病例報告增加 |
| 生物製劑（biologics） | 犬自體免疫皮膚病的精準治療 | 獸醫可用生物製劑仍有限 |

## 七、臨床爭議與知識空缺 (Controversies & Knowledge Gaps)

| 爭議議題 | 現況 | Evidence Level |
|---------|------|---------------|
| 犬膿皮症的經驗性 vs 培養導引抗生素選擇 | MRSP 盛行率升高使經驗性治療風險增加 | Level II |
| 犬食物不良反應的排除飲食試驗持續時間 | 傳統 8 週 vs 新研究建議 6 週可能足夠 | Level II |
| 犬蠕形蟎蟲症是否需治療至兩次皮膚刮搔陰性 | 傳統標準 vs 較短療程的新證據 | Level III |
| 貓嗜酸球肉芽腫複合體的分類系統 | 現有分類是否反映不同病因仍不確定 | Level IV |`,
  clinical_pearl: '表皮脫屑環（epidermal collarette）是淺層膿皮症最具特徵性的病灶——環形鱗屑邊緣向中心翻起，中央為色素沉著或輕微紅斑。看到這個病灶就應該做皮膚細胞學。記住：膿皮症是「果」不是「因」，每一個反覆膿皮症的病例都需要追查根本原因。',
  common_mistakes: [
    '僅治療膿皮症而不排查潛在病因（導致反覆復發）',
    '抗生素療程過短（應至臨床痊癒後再延長 7-21 天）',
    '深層膿皮症未做細菌培養與藥敏即經驗性治療',
    '忽略局部治療（藥浴）的輔助效果',
    '反覆使用同一種抗生素而不進行藥敏檢測（助長抗藥性）',
  ],
  disease_data: {
    signalment: '犬為主，任何品種、年齡、性別均可。特定品種易感：德國牧羊犬（深層膿皮症）、沙皮犬、鬥牛犬類（皮膚皺褶膿皮症）。膿皮症在貓極為罕見，出現時需高度懷疑潛在免疫抑制。',
    etiology: '主要病原為 Staphylococcus pseudintermedius（犬皮膚正常菌群）。當皮膚屏障受損或免疫功能改變時過度增殖。常見潛在病因：過敏性皮膚病（CAD、FAD、AFR）占 70%、內分泌疾病（Cushing、甲低）、蠕形蟎症、免疫抑制藥物。',
    pathogenesis: '潛在病因 → 皮膚屏障破壞/免疫功能改變 → S. pseudintermedius 黏附與增殖 → 產生毒素與超級抗原 → 嗜中性球募集 → 膿皰形成 → 淺層：表皮內/毛囊性膿皰 → 深層：毛囊破裂 → 異物反應 + 繼發感染擴散至真皮與皮下組織。',
    clinical_signs: [
      { sign: '丘疹與膿皰', category: 'primary', description: '毛囊中心性丘疹與膿皰，好發腹側、腋下、腹股溝' },
      { sign: '表皮脫屑環', category: 'primary', description: '淺層膿皮症特徵：環形鱗屑邊緣向中心翻起' },
      { sign: '急性濕性皮膚炎', category: 'primary', description: 'Hot spot：急性、界限清楚的潮濕糜爛斑塊' },
      { sign: '出血性水泡與瘻管', category: 'secondary', description: '深層膿皮症：出血性水泡、引流瘻管、蜂窩織炎' },
      { sign: '色素沉著', category: 'secondary', description: '感染消退後的炎症後色素沉著（hyperpigmentation）' },
    ],
    staging: { system: '深度分級', stages: ['表層：僅角質層表面（hot spot、皮膚皺褶膿皮症）', '淺層：表皮內/毛囊性（膿皰、表皮脫屑環）', '深層：真皮/皮下組織（癤病、蜂窩織炎、瘻管）'] },
    differential_diagnosis: [
      { condition: '蠕形蟎症', key_differentiator: '深層皮膚刮搔見 Demodex，膿皮症常為蠕形蟎的繼發感染' },
      { condition: '皮膚癬菌症', key_differentiator: 'Wood 燈、真菌培養可鑑別；環形脫毛邊緣鱗屑' },
      { condition: '天疱瘡', key_differentiator: '膿皰內含棘層松解細胞而非退化性嗜中性球+球菌；好發面部' },
      { condition: '皮膚型淋巴瘤', key_differentiator: '進行性病灶、抗生素無效、皮膚切片確診' },
    ],
    diagnostic_workup: '1. 皮膚細胞學（膠帶壓貼/直接抹片/膿皰穿刺）→ 2. 確認球菌感染（退化性嗜中性球+吞噬球菌）→ 3. 深層/反覆病例：細菌培養與藥敏 → 4. 排查潛在病因：皮膚刮搔（蠕形蟎）、過敏檢查、CBC/BCS/T4/皮質醇',
    treatment_protocol: '1. 淺層膿皮症：經驗性 Cephalexin 22-30 mg/kg PO BID × 3-4 週。2. 深層膿皮症：依培養藥敏選擇抗生素 × 6-8 週。3. 輔助局部治療：Chlorhexidine 3-4% 藥浴/慕斯 q2-3 天。4. 同時排查並治療潛在病因。5. MRSP：依藥敏結果選擇（可能需要 chloramphenicol、rifampin、doxycycline 等二線藥物）。',
    prognosis: '急性膿皮症經適當治療預後良好。關鍵在於找出並控制潛在病因以防止復發。未處理潛在病因的反覆膿皮症增加 MRSP 選擇壓力。深層膿皮症療程長，可能留下疤痕。',
    monitoring: '抗生素治療開始後 2 週回診評估反應。繼續治療至臨床痊癒後再延長 7-21 天。回診時複查皮膚細胞學確認感染清除。監測潛在病因的控制狀態。反覆復發時重新評估潛在病因與抗生素選擇。',
    owner_communication: '膿皮症通常是其他潛在疾病（如過敏）造成的繼發感染。僅使用抗生素可以暫時控制，但不處理根本原因就會反覆發作。抗生素必須完成完整療程，不可因症狀改善而提早停藥——不完整的療程會助長抗藥菌的產生。藥浴是重要的輔助治療，可減少全身性抗生素的使用。',
  },
  diagnostic_data: null,
  procedure_data: null,
  visual_placeholders: [
    { position: '分類段落後', type: 'annotated_image', description: '膿皮症深度分類對應病灶照片' },
    { position: '診斷段落後', type: 'comparison_table', description: '皮膚細胞學：膿皮症 vs 天疱瘡 vs 蠕形蟎症比較' },
  ],
  interactive_placeholders: [
    { position: '治療段落', type: 'drug_calculator', description: '膿皮症抗生素劑量計算器' },
  ],
  drug_api_links: ['Cephalexin', 'Amoxicillin-clavulanate', 'Chlorhexidine'],
  references: [
    { type: 'guideline', citation: 'Hillier A et al. Guidelines for the diagnosis and antimicrobial therapy of canine superficial bacterial folliculitis (AAHA/AAVD). Vet Dermatol. 2014;25(3):163-e43.', relevance: '犬表層膿皮症診斷與抗菌治療指引' },
    { type: 'journal', citation: 'Loeffler A, Lloyd DH. What has changed in canine pyoderma? A narrative review. Vet J. 2018;235:73-82.', relevance: '犬膿皮症進展回顧與 MRSP 現況' },
    { type: 'textbook', citation: "Miller WH, Griffin CE, Campbell KL. Muller and Kirk's Small Animal Dermatology, 7th ed. Elsevier, 2013.", relevance: '膿皮症完整分類與治療章節' },
  ],
  is_current: true,
  created_at: now,
};

/** 馬拉色菌皮膚炎 (Malassezia Dermatitis) — 疾病型 */
const contentMalassezia: NodeContent = {
  id: 'CONTENT-DERM-L3-006',
  node_id: 'DERM-L3-006',
  version: 1,
  summary: '馬拉色菌皮膚炎是由嗜脂酵母菌 Malassezia pachydermatis 過度增殖引起的犬常見皮膚感染。M. pachydermatis 是犬皮膚正常菌群，在皮膚微環境改變（潮濕、皮脂分泌增加、過敏性皮膚病）時過度增殖。典型臨床表現為油脂樣皮膚、特徵性酸臭異味、紅斑與苔蘚化，好發於皮膚皺褶、指間與耳道。診斷以皮膚細胞學（膠帶壓貼法見花生形酵母菌）為主。治療包括全身性抗黴菌藥物與局部藥浴。',
  learning_objectives: [
    '描述 M. pachydermatis 從正常共生到致病性過度增殖的條件',
    '辨識馬拉色菌皮膚炎的典型臨床特徵與好發部位',
    '正確執行並判讀皮膚細胞學中的馬拉色菌',
    '規劃全身性與局部性抗黴菌治療方案',
  ],
  key_points: [
    'M. pachydermatis 是犬皮膚正常共生酵母菌，過度增殖時致病',
    '最常繼發於過敏性皮膚病（CAD/FAD/AFR）——治療馬拉色菌但不控制過敏會反覆',
    '典型三徵：油脂樣皮膚 + 特徵性酸臭異味 + 瘙癢',
    '好發部位：指間、腹側皮膚皺褶、頸腹側、耳道、口唇皺褶',
    '皮膚細胞學：膠帶壓貼法見花生形/瓶形酵母菌，每 HPF ≥ 2-3 個即有臨床意義',
    '全身性治療首選：Ketoconazole 5-10 mg/kg PO SID 或 Itraconazole 5 mg/kg PO SID',
    '局部治療：含 miconazole + chlorhexidine 的藥浴每週 2 次',
  ],
  body: `# 馬拉色菌皮膚炎 (Malassezia Dermatitis)

## 一、病理機制 (Pathophysiology)



### 概述
馬拉色菌皮膚炎是犬第二常見的皮膚感染（僅次於膿皮症）。M. pachydermatis 是犬皮膚正常菌群的一部分，在特定條件下過度增殖而導致疾病。台灣的高溫潮濕環境特別有利於馬拉色菌增殖。

### 病理機轉
正常狀態下，宿主免疫（嗜中性球、補體、脂質代謝）維持馬拉色菌的平衡。以下因素破壞此平衡：
1. **皮膚微環境改變**：潮濕增加、皮脂分泌異常、pH 改變
2. **皮膚屏障受損**：過敏性皮膚病、角化異常
3. **免疫功能改變**：過敏導致的局部免疫反應異常
4. **醫源性因素**：長期抗生素使用清除細菌競爭

馬拉色菌過度增殖 → 產生脂肪酶分解皮脂 → 生成促炎脂質代謝物 → 瘙癢與炎症 → 部分犬可對馬拉色菌產生 IgE 介導過敏（馬拉色菌過敏）

## 二、臨床表現與診斷 (Clinical Signs & Diagnosis)

- **油脂樣皮膚**：觸感油膩，皮脂分泌增加
- **特徵性異味**：酸臭/發酵樣氣味（「髒狗味」）
- **紅斑與瘙癢**：劇烈瘙癢，搔抓舔咬
- **苔蘚化與色素沉著**：慢性病例皮膚增厚、黑色素沉著顯著
- **好發部位**：指間、腋下、腹股溝、頸腹側、口唇皺褶、耳道

### 診斷
1. **皮膚細胞學**（首選）：膠帶壓貼法 → Diff-Quik 染色 → 油浸鏡（100x）
   - 花生形/瓶形酵母菌（3-5 μm）
   - 每 HPF ≥ 2-3 個即有臨床意義（正常皮膚偶見 0-1 個）
2. 耳道拭子細胞學：每 HPF ≥ 5 個有臨床意義
3. 培養（通常不需要）：Sabouraud 培養基，37°C 可見乳白色菌落

## 三、治療策略 (Treatment)

### 全身性
- [藥物:Ketoconazole] 5-10 mg/kg PO SID × 3-4 週
- [藥物:Itraconazole] 5 mg/kg PO SID × 3-4 週（肝毒性較低）
- 需與食物同服增加吸收

### 局部
- Miconazole 2% + Chlorhexidine 2% 藥浴：每週 2 次，接觸時間 10 分鐘
- 含 ketoconazole 或 climbazole 的洗耳液（耳道感染時）

[圖片:馬拉色菌皮膚細胞學典型影像（花生形酵母菌）]

## 四、併發症與監控 (Complications & Monitoring)

定期追蹤馬拉色菌皮膚炎患畜的治療反應與潛在併發症，根據臨床反應調整治療計畫，並監測藥物副作用與疾病進展。

## 五、預後與預後因子 (Prognosis)

馬拉色菌皮膚炎的預後取決於病因、疾病嚴重程度、治療時機及患畜整體健康狀況，早期診斷與積極治療通常可獲得較佳預後。

## 六、人醫借鑒 (Translational Insights)

| 人醫工具/概念 | 獸醫應用潛力 | 現況 |
|-------------|-------------|------|
| Dupilumab（抗 IL-4/IL-13 單抗） | 犬 AD 的抗細胞激素單抗開發 | 犬 anti-IL-31（Lokivetmab）已上市，anti-IL-4/13 研究中 |
| 過敏原免疫療法（AIT）次世代技術 | 舌下免疫療法（SLIT）、肽段免疫療法 | 犬 SLIT 已有商業化產品 |
| 光動力療法（PDT） | 犬淺表腫瘤/角化異常的非手術治療 | 人醫成熟，獸醫病例報告增加 |
| 生物製劑（biologics） | 犬自體免疫皮膚病的精準治療 | 獸醫可用生物製劑仍有限 |

## 七、臨床爭議與知識空缺 (Controversies & Knowledge Gaps)

| 爭議議題 | 現況 | Evidence Level |
|---------|------|---------------|
| 犬膿皮症的經驗性 vs 培養導引抗生素選擇 | MRSP 盛行率升高使經驗性治療風險增加 | Level II |
| 犬食物不良反應的排除飲食試驗持續時間 | 傳統 8 週 vs 新研究建議 6 週可能足夠 | Level II |
| 犬蠕形蟎蟲症是否需治療至兩次皮膚刮搔陰性 | 傳統標準 vs 較短療程的新證據 | Level III |
| 貓嗜酸球肉芽腫複合體的分類系統 | 現有分類是否反映不同病因仍不確定 | Level IV |`,
  clinical_pearl: '「聞」是診斷馬拉色菌皮膚炎最被低估的工具。馬拉色菌過度增殖會產生特徵性的酸臭/發酵樣氣味，經驗豐富的皮膚科醫師在動物進入診間時就能聞到。當你聞到這個味道時，直接做膠帶壓貼細胞學確認。另外，如果一隻犬同時有瘙癢和苔蘚化但對抗生素治療反應不佳，請務必檢查馬拉色菌。',
  common_mistakes: [
    '僅治療馬拉色菌而未排查潛在過敏性皮膚病（復發率極高）',
    '皮膚細胞學取樣部位不當（應選擇油脂最多的皺褶與指間）',
    '局部藥浴接觸時間不足（需至少 10 分鐘）',
    '全身性抗黴菌藥物未與食物同服（影響吸收）',
    '將馬拉色菌引起的苔蘚化/色素沉著誤判為皮膚腫瘤',
  ],
  disease_data: {
    signalment: '犬為主，好發品種：西高地白梗、巴吉度、可卡犬、英國雪達犬、拳師犬、臘腸犬。皮膚皺褶多的品種（沙皮犬、鬥牛犬）易感。無明顯年齡或性別偏好。台灣潮濕氣候發病率高。',
    etiology: 'M. pachydermatis 正常存在於犬皮膚（特別是耳道、指間、皮膚皺褶）。過度增殖常繼發於：過敏性皮膚病（最常見）、角化異常、內分泌疾病（甲低）、長期抗生素使用、潮濕環境。部分犬可對馬拉色菌產生 IgE 介導過敏反應。',
    pathogenesis: '潛在病因 → 皮膚微環境改變（潮濕、皮脂增加、pH 改變）→ M. pachydermatis 過度增殖 → 脂肪酶分解皮脂為促炎脂質 → 炎症反應 + 瘙癢 → 搔抓導致屏障進一步破壞 → 惡性循環。部分犬產生抗馬拉色菌 IgE → 馬拉色菌過敏（Type I 過敏）→ 加重瘙癢。',
    clinical_signs: [
      { sign: '油脂樣皮膚與異味', category: 'primary', description: '皮膚油膩觸感，特徵性酸臭發酵味' },
      { sign: '紅斑與瘙癢', category: 'primary', description: '劇烈瘙癢，好發指間、腋下、腹股溝、頸腹側' },
      { sign: '苔蘚化', category: 'secondary', description: '慢性病例皮膚顯著增厚、粗糙' },
      { sign: '色素沉著', category: 'secondary', description: '黑色素沉著顯著，尤其腹側與指間' },
      { sign: '外耳炎', category: 'secondary', description: '耳道分泌物增加、棕色蠟狀分泌物' },
    ],
    staging: null,
    differential_diagnosis: [
      { condition: '細菌性膿皮症', key_differentiator: '細胞學見球菌與嗜中性球，無花生形酵母菌（兩者可共存）' },
      { condition: '犬異位性皮膚炎', key_differentiator: 'CAD 常合併馬拉色菌，治療馬拉色菌後瘙癢仍持續則提示共存 CAD' },
      { condition: '皮膚癬菌症', key_differentiator: '環形脫毛、Wood 燈螢光、真菌培養可鑑別' },
      { condition: '甲狀腺低下', key_differentiator: '非瘙癢性對稱脫毛、嗜睡、肥胖、T4 降低' },
    ],
    diagnostic_workup: '1. 皮膚細胞學：膠帶壓貼法（指間、皮膚皺褶、腋下）→ Diff-Quik 染色 → 油浸鏡檢 → 2. 同時檢查是否合併細菌感染 → 3. 排查潛在病因：過敏檢查、T4/TSH、皮膚刮搔',
    treatment_protocol: '1. 全身性抗黴菌：Ketoconazole 5-10 mg/kg PO SID 或 Itraconazole 5 mg/kg PO SID × 3-4 週。2. 局部藥浴：Miconazole 2% + Chlorhexidine 2% 每週 2 次，接觸 10 分鐘。3. 耳道感染：含抗黴菌成分洗耳液。4. 同時控制潛在過敏性皮膚病。5. 合併膿皮症時需同時抗生素治療。',
    prognosis: '單次發作治療預後良好，3-4 週可臨床痊癒。但若未控制潛在過敏性皮膚病，復發率極高。與 CAD 共存的犬可能需要長期間歇性抗黴菌局部治療。',
    monitoring: '治療 2 週後回診做皮膚細胞學評估。治療至細胞學陰性後再繼續 1 週。穩定後監測潛在過敏控制。反覆復發時考慮長期每週 1-2 次維持性藥浴。',
    owner_communication: '馬拉色菌是狗皮膚上正常存在的酵母菌，在特定條件下（如過敏、潮濕）會過度增殖導致皮膚病。治療包括口服抗黴菌藥物和藥浴。藥浴需讓泡沫停留至少 10 分鐘才有效。重要的是同時控制潛在的過敏問題，否則會反覆發作。在台灣潮濕環境下，保持皮膚乾燥（特別是皮膚皺褶和指間）很重要。',
  },
  diagnostic_data: null,
  procedure_data: null,
  visual_placeholders: [
    { position: '診斷段落後', type: 'annotated_image', description: '馬拉色菌皮膚細胞學：花生形酵母菌高倍鏡影像' },
    { position: '臨床表現段落後', type: 'annotated_image', description: '馬拉色菌皮膚炎典型病灶分佈圖' },
  ],
  interactive_placeholders: [],
  drug_api_links: ['Ketoconazole', 'Itraconazole', 'Chlorhexidine'],
  references: [
    { type: 'journal', citation: 'Bond R et al. Biology, diagnosis and treatment of Malassezia dermatitis in dogs and cats. Vet Dermatol. 2020;31(1):28-e4.', relevance: '馬拉色菌皮膚炎最新綜合回顧' },
    { type: 'textbook', citation: "Miller WH, Griffin CE, Campbell KL. Muller and Kirk's Small Animal Dermatology, 7th ed. Elsevier, 2013.", relevance: '馬拉色菌皮膚炎完整章節' },
    { type: 'journal', citation: 'Negre A et al. Evidence-based veterinary dermatology: a systematic review of interventions for Malassezia dermatitis in dogs. Vet Dermatol. 2009;20(1):1-12.', relevance: '馬拉色菌治療的循證系統性回顧' },
    { type: 'guideline', citation: 'Noli C, Saridomichelakis MN, Gervais F, et al. WAVD/ESVD guidelines for the treatment of Malassezia dermatitis in dogs. Vet Dermatol. 2014;25(5):437-e72.', relevance: 'WAVD 馬拉色菌皮膚炎治療指引' },
  ],
  is_current: true,
  created_at: now,
};

/** 外耳炎 (Otitis Externa) — 疾病型 */
const contentOtitis: NodeContent = {
  id: 'CONTENT-DERM-L3-007',
  node_id: 'DERM-L3-007',
  version: 1,
  summary: '外耳炎是犬貓最常見的耳科疾病，影響約 10-20% 的犬和 2-6% 的貓。理解外耳炎的關鍵在於「PSPP」分類系統——原發因素（Primary）、繼發因素（Secondary）、易感因素（Predisposing）與持續因素（Perpetuating）。過敏性皮膚病是犬外耳炎最常見的原發因素（占 43-75%）。耳道細胞學是不可或缺的診斷工具，用於鑑定感染微生物（球菌、桿菌、馬拉色菌）並指導治療。慢性外耳炎可進展為中耳炎，需要更積極的管理。',
  learning_objectives: [
    '運用 PSPP 分類系統系統性分析外耳炎病因',
    '正確執行耳鏡檢查與耳道細胞學並判讀結果',
    '辨識外耳炎的原發因素（過敏最常見）與持續因素（中耳炎）',
    '依感染類型選擇適當的耳用製劑',
    '規劃慢性/反覆外耳炎的長期管理策略',
  ],
  key_points: [
    'PSPP 分類：Primary（原發）、Secondary（繼發）、Predisposing（易感）、Perpetuating（持續）',
    '過敏性皮膚病（CAD/FAD/AFR）是犬外耳炎最常見的原發因素，占 43-75%',
    '耳道細胞學是每次外耳炎就診的必做檢查——不做細胞學就治療是盲目的',
    '球菌感染：含 fusidic acid 或 polymyxin B 的耳用製劑',
    '桿菌感染（常為 Pseudomonas）：含 fluoroquinolone 或 polymyxin B，依培養藥敏調整',
    '馬拉色菌感染：含 clotrimazole 或 miconazole 的耳用製劑',
    '慢性外耳炎需評估中耳是否受累（鼓膜完整性、影像學）',
  ],
  body: `# 外耳炎 (Otitis Externa)

## 一、病理機制 (Pathophysiology)



### 概述
外耳炎是耳道（外耳道上皮至鼓膜）的炎症性疾病。犬的耳道呈 L 型（垂直段 + 水平段），此解剖結構使排水與通氣較差，易於蓄積分泌物與微生物增殖。

### PSPP 分類系統
### Primary（原發因素）——引起耳道炎症的根本原因
- **過敏**：CAD（最常見）、FAD、AFR → 約 50% 外耳炎犬的根本原因
- **耳道異物**：草芒、毛髮
- **內分泌**：甲狀腺低下
- **角化異常**：原發性皮脂溢
- **自體免疫**：天疱瘡

### Secondary（繼發因素）——在已發炎耳道中增殖的微生物
- 球菌（Staphylococcus, Streptococcus）
- 桿菌（Pseudomonas aeruginosa——慢性最常見）
- 馬拉色菌（M. pachydermatis）

### Predisposing（易感因素）——增加外耳炎風險
- 耳道結構：垂耳犬（可卡犬、巴吉度）、耳道狹窄（沙皮犬）
- 耳道毛髮過多（貴賓犬）
- 潮濕環境、游泳

### Perpetuating（持續因素）——使外耳炎難以痊癒
- 耳道增生與狹窄（慢性炎症導致）
- 中耳炎（鼓膜穿孔或感染擴散）
- 耳道礦化（鈣化）

## 二、臨床表現與診斷 (Clinical Signs & Diagnosis)

1. **耳鏡檢查**：評估耳道紅腫程度、分泌物性質、鼓膜完整性
2. **耳道細胞學**（必做）：棉棒取樣 → Diff-Quik 染色 → 油浸鏡檢
   - 球菌：每 HPF > 5 個有臨床意義
   - 桿菌：每 HPF > 0 即有意義（正常不應出現）
   - 馬拉色菌：每 HPF > 5 個有臨床意義
3. **細菌培養與藥敏**：桿菌感染、反覆/慢性病例
4. **影像學**：疑似中耳炎時行 CT 或 MRI

## 三、治療策略 (Treatment)

### 耳道清洗
- 溫生理食鹽水或商業洗耳液
- 鼓膜完整：可用含 chlorhexidine 或 Tris-EDTA 的洗耳液
- 鼓膜破裂：僅用溫生理食鹽水

### 局部耳用製劑
- **球菌**：含 fusidic acid、polymyxin B、或 fluoroquinolone
- **桿菌（Pseudomonas）**：含 polymyxin B、[藥物:Enrofloxacin] 或 silver sulfadiazine
- **馬拉色菌**：含 clotrimazole、miconazole、或 ketoconazole
- **炎症控制**：含 dexamethasone 或 betamethasone 的複方製劑

### 全身性治療（嚴重/中耳炎）
- [藥物:Fluoroquinolone] PO（Pseudomonas 中耳炎）
- 全身性抗黴菌（嚴重馬拉色菌）
- 口服糖皮質激素短期使用（嚴重腫脹）

[圖片:犬耳道解剖圖（L 型結構）與 PSPP 分類圖解]

## 四、併發症與監控 (Complications & Monitoring)

定期追蹤外耳炎患畜的治療反應與潛在併發症，根據臨床反應調整治療計畫，並監測藥物副作用與疾病進展。

## 五、預後與預後因子 (Prognosis)

外耳炎的預後取決於病因、疾病嚴重程度、治療時機及患畜整體健康狀況，早期診斷與積極治療通常可獲得較佳預後。

## 六、人醫借鑒 (Translational Insights)

| 人醫工具/概念 | 獸醫應用潛力 | 現況 |
|-------------|-------------|------|
| Dupilumab（抗 IL-4/IL-13 單抗） | 犬 AD 的抗細胞激素單抗開發 | 犬 anti-IL-31（Lokivetmab）已上市，anti-IL-4/13 研究中 |
| 過敏原免疫療法（AIT）次世代技術 | 舌下免疫療法（SLIT）、肽段免疫療法 | 犬 SLIT 已有商業化產品 |
| 光動力療法（PDT） | 犬淺表腫瘤/角化異常的非手術治療 | 人醫成熟，獸醫病例報告增加 |
| 生物製劑（biologics） | 犬自體免疫皮膚病的精準治療 | 獸醫可用生物製劑仍有限 |

## 七、臨床爭議與知識空缺 (Controversies & Knowledge Gaps)

| 爭議議題 | 現況 | Evidence Level |
|---------|------|---------------|
| 犬膿皮症的經驗性 vs 培養導引抗生素選擇 | MRSP 盛行率升高使經驗性治療風險增加 | Level II |
| 犬食物不良反應的排除飲食試驗持續時間 | 傳統 8 週 vs 新研究建議 6 週可能足夠 | Level II |
| 犬蠕形蟎蟲症是否需治療至兩次皮膚刮搔陰性 | 傳統標準 vs 較短療程的新證據 | Level III |
| 貓嗜酸球肉芽腫複合體的分類系統 | 現有分類是否反映不同病因仍不確定 | Level IV |`,
  clinical_pearl: '每次外耳炎就診時不做耳道細胞學就開始治療，等於是在蒙眼治療。球菌、桿菌和馬拉色菌需要完全不同的藥物。更重要的是，如果一隻犬反覆外耳炎，請務必思考「原發因素」——最常見的是過敏。單純治療感染而不處理過敏，外耳炎永遠會回來。',
  common_mistakes: [
    '未做耳道細胞學即經驗性使用耳用藥物（球菌/桿菌/馬拉色菌需要不同治療）',
    '反覆外耳炎未排查原發因素（過敏是最常見原因）',
    '鼓膜破裂時使用含耳毒性成分的耳用藥物（aminoglycoside、chlorhexidine）',
    '未評估鼓膜完整性即進行耳道灌洗',
    '僅治療繼發感染而忽略持續因素（耳道增生、中耳炎）',
  ],
  disease_data: {
    signalment: '犬：盛行率 10-20%，好發品種：可卡犬、巴吉度、拉布拉多、金毛尋回犬、沙皮犬、西高地白梗。貓：盛行率 2-6%，常與過敏或息肉相關。垂耳犬與耳道狹窄品種風險更高。',
    etiology: 'PSPP 多因素模型。原發因素（過敏 43-75%、異物、內分泌）引發耳道炎症 → 微環境改變（溫度、濕度、pH 上升）→ 繼發微生物增殖（球菌、桿菌、馬拉色菌）→ 慢性炎症導致持續因素（增生、狹窄、中耳炎）→ 惡性循環。',
    pathogenesis: '原發因素破壞耳道上皮與腺體正常功能 → 皮脂腺增生、耵聹分泌增加 → 耳道微環境利於微生物增殖 → 炎症反應（嗜中性球浸潤、水腫）→ 耳道上皮增生與狹窄 → 引流進一步受阻 → 慢性纖維化 → 可進展至中耳炎（鼓膜穿孔或感染經鼓膜擴散）。',
    clinical_signs: [
      { sign: '搖頭與抓耳', category: 'primary', description: '犬貓外耳炎最常見的主訴' },
      { sign: '耳道分泌物', category: 'primary', description: '棕黃色（馬拉色菌）、黃綠色膿性（桿菌）、棕色蠟狀（耵聹性）' },
      { sign: '耳道紅腫', category: 'primary', description: '耳道口可見紅斑、腫脹' },
      { sign: '異味', category: 'secondary', description: '感染性外耳炎常伴有惡臭' },
      { sign: '疼痛', category: 'secondary', description: '觸碰耳朵疼痛、抗拒檢查' },
      { sign: '耳血腫', category: 'secondary', description: '劇烈搖頭導致耳翼血管破裂' },
    ],
    staging: { system: '嚴重度分級', stages: ['急性：耳道輕度紅腫、少量分泌物、鼓膜完整', '慢性：耳道增生/狹窄、大量分泌物、可能鼓膜破裂', '末期：耳道完全閉塞/礦化、中耳炎、可能需手術（TECA-LBO）'] },
    differential_diagnosis: [
      { condition: '耳道異物', key_differentiator: '急性單側發病，耳鏡可見異物' },
      { condition: '耳道息肉', key_differentiator: '貓較常見，耳鏡可見肉色腫塊' },
      { condition: '耳道腫瘤', key_differentiator: '老年犬，耳鏡見腫塊，需切片確診' },
      { condition: '中耳炎', key_differentiator: '頭歪、Horner 氏症候群、面神經麻痺、CT/MRI 可確認' },
    ],
    diagnostic_workup: '1. 病史（發病側數、反覆性、潛在過敏史）→ 2. 耳鏡檢查（紅腫程度、分泌物、鼓膜評估）→ 3. 耳道細胞學（必做：球菌、桿菌、馬拉色菌計數）→ 4. 桿菌或反覆病例：細菌培養與藥敏 → 5. 慢性/疑似中耳炎：CT 或 MRI → 6. 排查原發因素（過敏檢查）',
    treatment_protocol: '1. 耳道清洗（確認鼓膜完整後）。2. 局部耳用製劑依細胞學選擇：球菌→ fusidic acid/polymyxin B；桿菌→ polymyxin B/fluoroquinolone；馬拉色菌→ clotrimazole/miconazole。3. 嚴重腫脹：短期口服 Prednisolone 0.5-1 mg/kg × 5-7 天。4. 中耳炎：全身性抗生素（依培養）4-6 週。5. 末期：TECA-LBO 手術。6. 控制原發因素（過敏管理）。',
    prognosis: '急性外耳炎預後良好，適當治療 2-4 週可痊癒。慢性反覆外耳炎取決於原發因素控制。耳道顯著增生/礦化者可能需要手術（TECA-LBO），術後聽力喪失但疼痛與感染可解決。貓耳道息肉切除後預後佳。',
    monitoring: '治療開始後 1-2 週回診：耳鏡檢查 + 重複細胞學。感染清除後 2 週再確認。慢性病例每 1-3 個月追蹤。教導飼主居家耳道清洗（每週 1-2 次預防性清洗）。監測原發過敏的控制。',
    owner_communication: '外耳炎通常有潛在原因（最常見是過敏），僅治療耳朵感染而不處理根本原因會反覆發作。治療需要定期回診做耳道檢查和細胞學。居家耳朵清潔很重要——我會教您正確的洗耳技巧。慢性病例的耳道可能會增厚狹窄，嚴重時可能需要手術。',
  },
  diagnostic_data: null,
  procedure_data: null,
  visual_placeholders: [
    { position: 'PSPP 分類段落後', type: 'mind_map', description: 'PSPP 分類系統心智圖' },
    { position: '治療段落後', type: 'flowchart', description: '外耳炎診斷治療決策流程圖' },
    { position: '診斷段落後', type: 'comparison_table', description: '耳道分泌物細胞學：球菌 vs 桿菌 vs 馬拉色菌比較' },
  ],
  interactive_placeholders: [
    { position: '治療段落', type: 'decision_tree', description: '依細胞學結果選擇耳用製劑決策工具' },
  ],
  drug_api_links: ['Enrofloxacin', 'Prednisolone', 'Chlorhexidine'],
  references: [
    { type: 'guideline', citation: 'Gotthelf LN. Diagnosis and treatment of otitis media in dogs and cats. Vet Clin North Am Small Anim Pract. 2004;34(2):469-487.', relevance: '外耳炎與中耳炎的診斷治療指引' },
    { type: 'journal', citation: 'Gortel K. Otic flushing. Vet Clin North Am Small Anim Pract. 2004;34(2):557-565.', relevance: '耳道灌洗技術指引' },
    { type: 'textbook', citation: "Miller WH, Griffin CE, Campbell KL. Muller and Kirk's Small Animal Dermatology, 7th ed. Elsevier, 2013.", relevance: '外耳炎完整章節與 PSPP 分類' },
    { type: 'journal', citation: 'Paterson S. Discovering the causes of otitis externa. In Pract. 2016;38(Suppl 2):7-11.', relevance: '外耳炎原發因素的系統性排查' },
  ],
  is_current: true,
  created_at: now,
};

/** 皮膚癬菌症 (Dermatophytosis) — 疾病型 */
const contentDermatophytosis: NodeContent = {
  id: 'CONTENT-DERM-L3-008',
  node_id: 'DERM-L3-008',
  version: 1,
  summary: '皮膚癬菌症（Dermatophytosis，俗稱「錢癬」或「貓癬」）是由親角質真菌（dermatophytes）引起的犬貓皮膚感染。主要病原為 Microsporum canis（貓最常見）、M. gypseum 和 Trichophyton mentagrophytes。此病具有人畜共通性，免疫正常動物多可自癒但過程緩慢（數月），免疫低下動物可能發展為廣泛感染。真菌培養（DTM/Sabouraud）是診斷金標準，Wood 燈僅能篩檢部分 M. canis 感染。台灣溫暖潮濕氣候有利於癬菌存活與傳播。',
  learning_objectives: [
    '列舉犬貓最常見的三種皮膚癬菌及其流行病學特徵',
    '正確使用 Wood 燈篩檢並理解其限制',
    '執行真菌培養（DTM）並辨識陽性結果',
    '規劃皮膚癬菌症的全身性與局部治療方案',
    '說明人畜共通風險與環境去汙策略',
  ],
  key_points: [
    'M. canis 是貓最常見的皮膚癬菌（> 90%），貓可為無症狀帶菌者',
    'Wood 燈（365 nm）：僅約 50% M. canis 菌株會產生蘋果綠螢光，陰性不排除',
    '真菌培養（DTM 培養基）是診斷金標準：紅色變色 + 白色棉絮狀菌落 + 鏡檢大分生孢子',
    '免疫正常犬貓多可自癒（1-3 個月），但因人畜共通風險仍建議治療',
    '全身性治療首選：Itraconazole 5 mg/kg PO SID（脈衝療法：1 週用/1 週停）',
    '局部治療：含 miconazole + chlorhexidine 的藥浴或 lime sulfur 浸泡',
    '環境去汙至關重要：漂白水 1:10 稀釋擦拭表面，吸塵清除毛髮與孢子',
  ],
  body: `# 皮膚癬菌症 (Dermatophytosis)

## 一、病理機制 (Pathophysiology)



### 概述
皮膚癬菌症是由親角質真菌感染毛髮、角質層與爪甲引起的表面黴菌感染。此病為重要的人畜共通傳染病（zoonosis），特別是對免疫低下的飼主（兒童、老年人、化療患者）有感染風險。

### 病原學
- **Microsporum canis**：最常見（貓 > 90%，犬約 70%），可有 Wood 燈螢光
- **M. gypseum**：嗜土壤性，犬接觸受汙染土壤後感染
- **Trichophyton mentagrophytes**：嗜動物性，接觸齧齒類後感染

### 病理機轉
癬菌孢子（arthrospores）接觸皮膚 → 黏附角質層 → 發芽產生菌絲 → 菌絲向下侵入毛囊（ectothrix 或 endothrix）→ 破壞毛幹結構 → 毛髮斷裂脫落 → 宿主免疫反應（細胞介導免疫為主）→ 炎症反應 → 環形擴展（中央癒合、邊緣活動性病灶）

## 二、臨床表現與診斷 (Clinical Signs & Diagnosis)

### 犬
- 典型：環形脫毛斑，邊緣鱗屑，中央開始再生毛髮
- 不典型：瀰漫性鱗屑、結節性病灶（kerion）、爪甲感染

### 貓
- 典型：局部脫毛斑（面部、耳翼、四肢）
- 不典型：粟粒性皮膚炎、廣泛鱗屑、無症狀帶菌者
- 波斯貓與長毛貓易發展為廣泛/慢性感染

### 診斷
### Wood 燈檢查
- 波長 365 nm 紫外光照射
- 陽性：受感染毛幹發出蘋果綠螢光（M. canis 特有，約 50% 菌株）
- 注意：鱗屑、藥物、細菌可產生偽螢光（非蘋果綠色）

### 真菌培養（金標準）
- DTM（Dermatophyte Test Medium）：21-28 天觀察
- 陽性標準：培養基由黃色變紅色（同時出現）+ 白色棉絮狀菌落
- 鏡檢大分生孢子（macroconidia）確認菌種

### 其他輔助
- Trichogram + KOH 消化法：毛幹見 ectothrix 孢子
- PCR：快速但無法區分活菌與死菌

## 三、治療策略 (Treatment)

### 全身性
- [藥物:Itraconazole] 5 mg/kg PO SID（脈衝療法：1 週用 / 1 週停）
- 或 [藥物:Terbinafine] 30-40 mg/kg PO SID（犬）/ 貓需更謹慎

### 局部
- Miconazole 2% + Chlorhexidine 2% 藥浴：每週 2 次
- 或 Lime sulfur 1:16 浸泡：每週 2 次（有效但氣味強烈）

### 環境去汙
- 漂白水（次氯酸鈉）1:10 稀釋擦拭表面
- 每日吸塵並丟棄集塵袋
- 清洗寢具（60°C 以上）
- 隔離感染動物直至培養陰性

[圖片:Wood 燈陽性螢光示意圖與 DTM 培養結果判讀]

## 四、併發症與監控 (Complications & Monitoring)

定期追蹤皮膚癬菌症患畜的治療反應與潛在併發症，根據臨床反應調整治療計畫，並監測藥物副作用與疾病進展。

## 五、預後與預後因子 (Prognosis)

皮膚癬菌症的預後取決於病因、疾病嚴重程度、治療時機及患畜整體健康狀況，早期診斷與積極治療通常可獲得較佳預後。

## 六、人醫借鑒 (Translational Insights)

| 人醫工具/概念 | 獸醫應用潛力 | 現況 |
|-------------|-------------|------|
| Dupilumab（抗 IL-4/IL-13 單抗） | 犬 AD 的抗細胞激素單抗開發 | 犬 anti-IL-31（Lokivetmab）已上市，anti-IL-4/13 研究中 |
| 過敏原免疫療法（AIT）次世代技術 | 舌下免疫療法（SLIT）、肽段免疫療法 | 犬 SLIT 已有商業化產品 |
| 光動力療法（PDT） | 犬淺表腫瘤/角化異常的非手術治療 | 人醫成熟，獸醫病例報告增加 |
| 生物製劑（biologics） | 犬自體免疫皮膚病的精準治療 | 獸醫可用生物製劑仍有限 |

## 七、臨床爭議與知識空缺 (Controversies & Knowledge Gaps)

| 爭議議題 | 現況 | Evidence Level |
|---------|------|---------------|
| 犬膿皮症的經驗性 vs 培養導引抗生素選擇 | MRSP 盛行率升高使經驗性治療風險增加 | Level II |
| 犬食物不良反應的排除飲食試驗持續時間 | 傳統 8 週 vs 新研究建議 6 週可能足夠 | Level II |
| 犬蠕形蟎蟲症是否需治療至兩次皮膚刮搔陰性 | 傳統標準 vs 較短療程的新證據 | Level III |
| 貓嗜酸球肉芽腫複合體的分類系統 | 現有分類是否反映不同病因仍不確定 | Level IV |`,
  clinical_pearl: '貓是 M. canis 最重要的帶菌者——即使完全無症狀的貓也可能持續散播孢子。在多貓家庭或收容所爆發皮膚癬菌時，所有貓（包括無症狀者）都需要進行 McKenzie 刷毛培養（牙刷法）以鑑定帶菌者。治療終點是連續 2-3 次（間隔 2 週）真菌培養陰性，而非僅根據臨床外觀。',
  common_mistakes: [
    'Wood 燈陰性即排除皮膚癬菌症（僅約 50% M. canis 螢光陽性，其他菌種不螢光）',
    '僅依據臨床外觀「環形脫毛」即診斷而未做培養確認（膿皮症也可呈環形病灶）',
    '僅使用局部治療而未進行全身性抗黴菌（局部治療單獨使用效果有限）',
    '未進行環境去汙（癬菌孢子可在環境中存活 18 個月以上）',
    '停藥標準依臨床外觀而非培養結果（應連續 2-3 次培養陰性才停藥）',
  ],
  disease_data: {
    signalment: '犬貓均可感染。貓：波斯貓、長毛貓易感，幼貓比成貓易感。犬：約克夏梗、傑克羅素梗報告較多。免疫低下動物（FIV/FeLV 陽性貓、幼齡、營養不良）感染風險高且病程嚴重。',
    etiology: '親角質真菌感染。M. canis（貓 > 90%、犬約 70%）、M. gypseum（接觸受汙染土壤）、T. mentagrophytes（接觸齧齒類動物）。傳播途徑：直接接觸感染動物或間接接觸受汙染毛髮/環境（孢子可存活 > 18 個月）。台灣溫暖潮濕環境利於傳播。',
    pathogenesis: '癬菌孢子接觸角質層 → 黏附與發芽 → 菌絲侵入毛囊角質化區域（不侵入活組織）→ 產生角質酶分解角蛋白 → 毛幹結構破壞與斷裂 → 宿主細胞介導免疫反應 → 炎症（嗜中性球、巨噬細胞浸潤）→ 環形向外擴展（中央免疫清除、邊緣活動性感染）。免疫正常動物 1-3 個月可自癒。',
    clinical_signs: [
      { sign: '環形脫毛斑', category: 'primary', description: '典型「錢癬」外觀：環形脫毛，邊緣鱗屑，中央再生' },
      { sign: '鱗屑與結痂', category: 'primary', description: '毛幹斷裂處的灰白色鱗屑' },
      { sign: 'Kerion', category: 'secondary', description: '結節性膿腫：強烈宿主免疫反應，好發犬面部與四肢' },
      { sign: '爪甲感染', category: 'secondary', description: '爪甲變形、碎裂、基部炎症（onychomycosis）' },
      { sign: '貓無症狀帶菌', category: 'secondary', description: '無臨床病灶但持續散播孢子（尤其長毛貓）' },
    ],
    staging: null,
    differential_diagnosis: [
      { condition: '蠕形蟎症', key_differentiator: '深層皮膚刮搔見 Demodex，真菌培養陰性' },
      { condition: '細菌性膿皮症', key_differentiator: '表皮脫屑環可類似環形癬灶，細胞學見球菌，培養陰性' },
      { condition: '犬異位性皮膚炎', key_differentiator: '瘙癢為主，好發面部/腋下/指間，真菌培養陰性' },
      { condition: '脂漏性皮膚炎', key_differentiator: '廣泛鱗屑但真菌培養陰性，無環形病灶' },
    ],
    diagnostic_workup: '1. Wood 燈篩檢（快速但敏感度低）→ 2. Trichogram + KOH（毛幹見孢子）→ 3. 真菌培養（DTM/Sabouraud）= 金標準（需 2-4 週）→ 4. 菌落鏡檢大分生孢子確認菌種 → 5. 多貓家庭：McKenzie 刷毛培養鑑定帶菌者',
    treatment_protocol: '1. 全身性：Itraconazole 5 mg/kg PO SID 脈衝療法（1 週用/1 週停）或 Terbinafine 30-40 mg/kg PO SID。2. 局部：Miconazole 2% + Chlorhexidine 2% 藥浴每週 2 次或 Lime sulfur 1:16 每週 2 次。3. 環境去汙：漂白水 1:10、每日吸塵、清洗寢具 60°C。4. 隔離感染動物。5. 治療至連續 2-3 次培養陰性（間隔 2 週）。',
    prognosis: '免疫正常犬貓預後良好，治療下 6-8 週多可痊癒。免疫低下動物可能需要更長療程。Kerion 治療反應佳但可能留疤。多貓家庭/收容所管理挑戰性高，需系統性篩檢與環境去汙。人畜共通風險需告知飼主。',
    monitoring: '治療開始後每 2-4 週真菌培養追蹤。治療持續至連續 2-3 次（間隔 2 週）培養陰性才停藥。Wood 燈可輔助監測但不可單獨作為判斷標準。監測 Itraconazole 肝功能副作用。',
    owner_communication: '皮膚癬菌症（貓癬/錢癬）是黴菌感染，可以傳染給人。免疫力較弱的家人（小孩、老人）需特別注意。治療需要口服藥物加上藥浴，通常需要 6-8 週以上。環境清潔非常重要——黴菌孢子可在環境中存活超過 1 年。治療期間感染動物應隔離。停藥時間以真菌培養結果為準，不能只看外觀。',
  },
  diagnostic_data: null,
  procedure_data: null,
  visual_placeholders: [
    { position: '診斷段落後', type: 'comparison_table', description: 'Wood 燈 vs DTM 培養 vs PCR 診斷方法比較表' },
    { position: '病原學段落後', type: 'annotated_image', description: 'M. canis 大分生孢子顯微鏡形態圖' },
  ],
  interactive_placeholders: [
    { position: '診斷段落', type: 'interactive_quiz', description: 'Wood 燈結果判讀互動測驗' },
  ],
  drug_api_links: ['Itraconazole', 'Terbinafine', 'Chlorhexidine'],
  references: [
    { type: 'guideline', citation: 'Moriello KA et al. Diagnosis and treatment of dermatophytosis in dogs and cats: Clinical Consensus Guidelines of the World Association for Veterinary Dermatology. Vet Dermatol. 2017;28(3):266-e68.', relevance: 'WAVD 皮膚癬菌症診斷治療共識指引' },
    { type: 'textbook', citation: "Miller WH, Griffin CE, Campbell KL. Muller and Kirk's Small Animal Dermatology, 7th ed. Elsevier, 2013.", relevance: '皮膚癬菌症完整章節' },
    { type: 'journal', citation: 'Moriello KA. Feline dermatophytosis: aspects pertinent to disease management in single and multiple cat situations. J Feline Med Surg. 2014;16(5):419-431.', relevance: '貓皮膚癬菌症管理（單貓與多貓環境）' },
  ],
  is_current: true,
  created_at: now,
};

/** 疥蟎症 (Sarcoptic Mange) — 疾病型 */
const contentScabies: NodeContent = {
  id: 'CONTENT-DERM-L3-009',
  node_id: 'DERM-L3-009',
  version: 1,
  summary: '疥蟎症（Sarcoptic Mange）由犬疥蟎（Sarcoptes scabiei var. canis）引起，是犬最具瘙癢性的皮膚病之一。此蟎蟲穴行於表皮角質層中，引起劇烈瘙癢，主要為 Type I 與 Type IV 混合過敏反應。高度傳染性，可暫時感染人類（人畜共通）。診斷困難——淺層皮膚刮搔敏感度僅 20-50%，臨床上常需依賴經驗性治療（isoxazoline）作為治療性診斷。典型好發部位為耳翼邊緣、肘部、踝部。',
  learning_objectives: [
    '描述 Sarcoptes scabiei 的生活史與傳播途徑',
    '辨識疥蟎症的典型好發部位與臨床特徵',
    '說明淺層皮膚刮搔的低敏感度及治療性診斷的價值',
    '規劃疥蟎症的治療方案（包括同居動物與環境處理）',
  ],
  key_points: [
    '犬疥蟎穴行於角質層，完成生活史需 17-21 天',
    '劇烈瘙癢為最突出特徵——即使少量蟎蟲也可因過敏反應引起嚴重瘙癢',
    '典型好發部位：耳翼邊緣（最早）、肘部、踝部、腹側',
    '耳翼-踏足反射（pinnal-pedal reflex）：搔刮耳翼邊緣引發後腿搔抓反射，敏感度約 80%',
    '淺層皮膚刮搔敏感度僅 20-50%，刮搔陰性不能排除',
    'Isoxazoline（fluralaner, sarolaner）為目前首選治療，單劑即可有效',
    '人畜共通但自限性——犬疥蟎無法在人類皮膚完成生活史',
  ],
  body: `# 疥蟎症 (Sarcoptic Mange)

## 一、病理機制 (Pathophysiology)



### 概述
疥蟎症是由 Sarcoptes scabiei var. canis 引起的高度傳染性皮膚病。蟎蟲穴行於表皮角質層中產卵，引起宿主強烈的過敏反應。此病在犬舍、收容所及流浪犬群中常見。

### 生活史
- 雌蟲穴行角質層 → 產卵（每日 2-3 顆）
- 卵 → 幼蟲 → 若蟲 → 成蟲：17-21 天
- 離開宿主存活：3-21 天（視環境溫濕度）
- 傳播：直接接觸（最主要）或間接接觸（寢具、美容工具）

### 病理機轉
蟎蟲穴行 + 排泄物與分泌物 → 宿主免疫反應：
1. **Type I 過敏**：IgE 介導即時型反應 → 數分鐘內瘙癢
2. **Type IV 過敏**：T 細胞介導遲發型反應 → 24-48 小時炎症
3. 致敏後極少數蟎蟲即可引起劇烈瘙癢（與蟎蟲數量不成比例）

## 二、臨床表現與診斷 (Clinical Signs & Diagnosis)

- **好發部位**（最早出現）：耳翼邊緣、肘部、踝部
- **後期擴展**：腹側、胸部、全身
- **典型病灶**：丘疹、結痂、表皮脫屑、脫毛
- **劇烈瘙癢**：最突出特徵，糖皮質激素反應不佳
- **耳翼邊緣通常不受累（Favrot 標準第 7 項陰性）**：若耳翼邊緣受累，更傾向疥蟎而非 CAD

### 診斷
### 臨床線索
- 耳翼-踏足反射（pinnal-pedal reflex）：敏感度約 80%
- 劇烈瘙癢 + 耳翼/肘部好發 + 對糖皮質激素反應差
- 同居動物或飼主也出現瘙癢

### 淺層皮膚刮搔
- 多點取樣（耳翼邊緣、肘部）
- 敏感度僅 20-50%——陰性結果不能排除
- 見到蟎蟲、蟲卵或蟲糞即確診

### 經驗性治療（治療性診斷）
- 高度懷疑但刮搔陰性時，給予 isoxazoline 治療 4 週
- 症狀顯著改善即支持診斷

### 血清學
- Sarcoptes IgG ELISA：敏感度約 84-92%，但感染初期可能陰性

## 三、治療策略 (Treatment)

### 首選：Isoxazoline 類
- [藥物:Fluralaner] 25-56 mg/kg PO 單劑（多數病例單劑即可）
- [藥物:Sarolaner] 2 mg/kg PO，建議連續 2 個月每月投藥

### 替代方案
- [藥物:Selamectin] spot-on 每 2 週 × 3 次
- [藥物:Ivermectin] 0.2-0.4 mg/kg SC 每 2 週 × 3 次（MDR1 突變犬禁用）

### 配套措施
- 所有同居犬必須同時治療
- 清洗寢具（60°C）、清潔環境
- 急性瘙癢：短期 Prednisolone 0.5-1 mg/kg × 5-7 天

[圖片:Sarcoptes scabiei 顯微鏡形態與好發部位分佈圖]

## 四、併發症與監控 (Complications & Monitoring)

定期追蹤疥蟎症患畜的治療反應與潛在併發症，根據臨床反應調整治療計畫，並監測藥物副作用與疾病進展。

## 五、預後與預後因子 (Prognosis)

疥蟎症的預後取決於病因、疾病嚴重程度、治療時機及患畜整體健康狀況，早期診斷與積極治療通常可獲得較佳預後。

## 六、人醫借鑒 (Translational Insights)

| 人醫工具/概念 | 獸醫應用潛力 | 現況 |
|-------------|-------------|------|
| Dupilumab（抗 IL-4/IL-13 單抗） | 犬 AD 的抗細胞激素單抗開發 | 犬 anti-IL-31（Lokivetmab）已上市，anti-IL-4/13 研究中 |
| 過敏原免疫療法（AIT）次世代技術 | 舌下免疫療法（SLIT）、肽段免疫療法 | 犬 SLIT 已有商業化產品 |
| 光動力療法（PDT） | 犬淺表腫瘤/角化異常的非手術治療 | 人醫成熟，獸醫病例報告增加 |
| 生物製劑（biologics） | 犬自體免疫皮膚病的精準治療 | 獸醫可用生物製劑仍有限 |

## 七、臨床爭議與知識空缺 (Controversies & Knowledge Gaps)

| 爭議議題 | 現況 | Evidence Level |
|---------|------|---------------|
| 犬膿皮症的經驗性 vs 培養導引抗生素選擇 | MRSP 盛行率升高使經驗性治療風險增加 | Level II |
| 犬食物不良反應的排除飲食試驗持續時間 | 傳統 8 週 vs 新研究建議 6 週可能足夠 | Level II |
| 犬蠕形蟎蟲症是否需治療至兩次皮膚刮搔陰性 | 傳統標準 vs 較短療程的新證據 | Level III |
| 貓嗜酸球肉芽腫複合體的分類系統 | 現有分類是否反映不同病因仍不確定 | Level IV |`,
  clinical_pearl: '疥蟎症是一種「見了就知道」的疾病——當一隻犬走進診間就在不停搔抓，檢查發現耳翼邊緣結痂、肘部丘疹，pinnal-pedal reflex 陽性，你的腦中應該立刻浮現疥蟎。不要因為刮搔陰性就排除它。在台灣，流浪犬收養後出現劇烈瘙癢的第一個鑑別就是疥蟎，isoxazoline 治療性診斷是最實用的做法。',
  common_mistakes: [
    '淺層皮膚刮搔陰性即排除疥蟎症（敏感度僅 20-50%）',
    '未對所有同居犬同時進行治療（導致交叉再感染）',
    '將疥蟎症與犬異位性皮膚炎混淆（好發部位不同：疥蟎好發耳翼邊緣，CAD 不累及）',
    '使用糖皮質激素試圖控制瘙癢而未進行殺蟎治療（疥蟎對類固醇反應差）',
    '對 MDR1 突變品種使用 ivermectin',
  ],
  disease_data: {
    signalment: '犬為主，任何品種、年齡、性別。流浪犬、收容所犬、犬舍犬風險高。幼犬與免疫低下犬可發展為嚴重結痂型（Norwegian scabies 相當於人類的結痂型疥瘡）。貓極罕見（有物種特異性）。',
    etiology: 'Sarcoptes scabiei var. canis 感染。傳播途徑以直接接觸為主，也可經由受汙染的寢具、美容工具間接傳播。蟎蟲離開宿主可存活 3-21 天。人畜共通但為自限性（犬疥蟎無法在人類皮膚完成生活史，人類症狀通常在犬治療後 2-4 週自行消退）。',
    pathogenesis: '蟎蟲穴行角質層 → 產卵與排泄 → 蟲體抗原與排泄物引起宿主過敏反應（Type I IgE 介導 + Type IV T 細胞介導）→ 肥大細胞脫顆粒 + T 細胞浸潤 → 劇烈瘙癢 → 搔抓導致皮膚屏障破壞 → 可繼發細菌感染。致敏後即使少量蟎蟲也能引起與蟲量不成比例的嚴重瘙癢。',
    clinical_signs: [
      { sign: '劇烈瘙癢', category: 'primary', description: '最突出症狀，強度極高，對糖皮質激素反應差' },
      { sign: '耳翼邊緣丘疹結痂', category: 'primary', description: '最早且最典型的好發部位' },
      { sign: '肘部與踝部丘疹', category: 'primary', description: '骨突處皮膚好發' },
      { sign: '結痂性皮疹', category: 'secondary', description: '黃色結痂、表皮脫屑' },
      { sign: '脫毛', category: 'secondary', description: '搔抓導致的脫毛，嚴重時可波及全身' },
      { sign: '繼發膿皮症', category: 'secondary', description: '搔抓導致皮膚屏障破壞後的細菌感染' },
    ],
    staging: null,
    differential_diagnosis: [
      { condition: '犬異位性皮膚炎 (CAD)', key_differentiator: 'CAD 好發面部、腋下、指間；耳翼邊緣通常不受累；較少結痂' },
      { condition: '食物不良反應', key_differentiator: '可伴腸胃道症狀，排除飲食試驗改善' },
      { condition: '跳蚤過敏性皮膚炎', key_differentiator: '好發腰背/尾根，嚴格跳蚤控制改善' },
      { condition: '馬拉色菌皮膚炎', key_differentiator: '油脂樣皮膚與特徵異味，細胞學見酵母菌' },
    ],
    diagnostic_workup: '1. 臨床評估（好發部位、瘙癢程度、接觸史）→ 2. Pinnal-pedal reflex 測試 → 3. 多點淺層皮膚刮搔（耳翼邊緣、肘部）→ 4. 刮搔陰性但高度懷疑：經驗性 isoxazoline 治療 4 週 → 5. 可選：Sarcoptes IgG ELISA（感染後 5 週才能檢測）',
    treatment_protocol: '1. 首選 isoxazoline：Fluralaner 25-56 mg/kg PO 單劑或 Sarolaner 2 mg/kg PO 連續 2 個月。2. 替代：Selamectin spot-on q2w × 3 次。3. 所有同居犬同時治療。4. 環境清潔：清洗寢具 60°C、清潔美容工具。5. 急性瘙癢：短期 Prednisolone 0.5 mg/kg × 5-7 天。6. 繼發感染：適當抗生素。',
    prognosis: '預後極佳。Isoxazoline 治療下幾乎 100% 治癒。瘙癢通常在治療後 2-4 週內顯著改善（過敏反應消退需要時間）。未治療可持續數月至數年。人類家庭成員症狀在犬治療後通常 2-4 週自行消退。',
    monitoring: '治療後 2-4 週回診評估瘙癢改善程度。4 週時瘙癢應改善 > 80%。若改善不完全，需考慮合併其他過敏性疾病（CAD + 疥蟎共存）。治療後 6-8 週可做皮膚刮搔確認清除。',
    owner_communication: '疥蟎是一種高度傳染性的蟎蟲感染，蟎蟲在皮膚中挖掘隧道引起劇烈搔癢。這種蟲可以暫時傳染給人（但不會長期寄生在人身上）。治療使用口服殺蟲藥，效果非常好。家中所有犬都需要同時治療。治療後搔癢可能需要 2-4 週才能完全消退，這是正常的。寢具和環境需要清洗消毒。',
  },
  diagnostic_data: null,
  procedure_data: null,
  visual_placeholders: [
    { position: '臨床表現段落後', type: 'annotated_image', description: '疥蟎症典型好發部位分佈圖' },
    { position: '生活史段落後', type: 'animated_diagram', description: 'Sarcoptes scabiei 生活史動畫' },
  ],
  interactive_placeholders: [
    { position: '診斷段落', type: 'decision_tree', description: '疥蟎症 vs CAD 鑑別診斷決策工具' },
  ],
  drug_api_links: ['Fluralaner', 'Sarolaner', 'Selamectin', 'Ivermectin', 'Prednisolone'],
  references: [
    { type: 'journal', citation: 'Mueller RS et al. Treatment of canine generalized demodicosis with a spot-on formulation containing 10% moxidectin and 2.5% imidacloprid. Vet Dermatol. 2009;20:441-446.', relevance: '疥蟎治療選項比較' },
    { type: 'textbook', citation: "Miller WH, Griffin CE, Campbell KL. Muller and Kirk's Small Animal Dermatology, 7th ed. Elsevier, 2013.", relevance: '疥蟎症完整章節' },
    { type: 'journal', citation: 'Becskei C et al. Efficacy and safety of a novel oral isoxazoline, sarolaner (Simparica), for the treatment of sarcoptic mange in dogs. Vet Parasitol. 2016;222:56-61.', relevance: 'Sarolaner 治療疥蟎的臨床研究' },
    { type: 'guideline', citation: 'Hensel P, Santoro D, Favrot C, et al. Canine atopic dermatitis: detailed guidelines for diagnosis and allergen identification. BMC Vet Res. 2015;11:196.', relevance: 'ICADA 診斷指引中疥蟎排除流程' },
  ],
  is_current: true,
  created_at: now,
};

/** 天疱瘡 (Pemphigus) — 疾病型 */
const contentPemphigus: NodeContent = {
  id: 'CONTENT-DERM-L3-010',
  node_id: 'DERM-L3-010',
  version: 1,
  summary: '天疱瘡（Pemphigus）是一組自體免疫性水泡性皮膚病，以落葉型天疱瘡（Pemphigus Foliaceus, PF）在犬貓中最為常見。其病理機轉為自體抗體（主要針對 desmoglein-1）攻擊表皮細胞間的橋粒（desmosome），導致棘層松解（acantholysis）與表皮內膿皰形成。臨床特徵為面部（鼻樑、耳翼）對稱性膿皰、結痂與脫屑。皮膚細胞學見棘層松解細胞（acantholytic cells）為關鍵線索，確診需皮膚切片病理學。治療以免疫抑制為核心，長期管理挑戰性高。',
  learning_objectives: [
    '描述落葉型天疱瘡的棘層松解病理機轉',
    '辨識 PF 的典型臨床分佈與病灶特徵',
    '正確判讀皮膚細胞學中的棘層松解細胞',
    '規劃 PF 的免疫抑制治療方案與長期監測計畫',
    '區分 PF 與膿皮症的臨床與細胞學差異',
  ],
  key_points: [
    'PF 是犬貓最常見的自體免疫性皮膚病',
    '病理核心：自體抗體攻擊 desmoglein-1 → 棘層松解 → 表皮內膿皰',
    '典型分佈：鼻樑、耳翼、眼周（面部對稱性）；可擴展至足墊、爪甲',
    '足墊病灶（角化過度、裂隙）在犬 PF 中具有高度特異性',
    '細胞學關鍵：膿皰中見大量棘層松解細胞（圓形角質細胞，無退化嗜中性球吞噬細菌）',
    '確診需要皮膚切片：表皮內（角質層下/顆粒層）膿皰含棘層松解細胞',
    '治療首選：Prednisolone 免疫抑制劑量 + Azathioprine 或 Mycophenolate 作為節約類固醇劑',
  ],
  body: `# 天疱瘡 (Pemphigus)

## 一、病理機制 (Pathophysiology)



### 概述
天疱瘡是由自體抗體攻擊角質細胞間黏附結構（橋粒）引起的自體免疫性水泡/膿皰性皮膚病。犬貓中以落葉型天疱瘡（PF）最常見（> 90%），其他亞型（尋常型 PV、增殖型、紅斑型）極為罕見。

### 分型
- **落葉型天疱瘡 (PF)**：最常見，抗 desmoglein-1，表淺膿皰
- **尋常型天疱瘡 (PV)**：極罕見，抗 desmoglein-3，深層水泡，口腔黏膜受累
- **紅斑型天疱瘡 (PE)**：PF 的局部變體，僅累及面部
- **藥物誘發型**：某些藥物（如 methimazole）可觸發

### 病理機轉
1. 免疫耐受失敗 → 產生抗 desmoglein-1 自體抗體（IgG）
2. 自體抗體結合表皮角質細胞表面的 desmoglein-1
3. 直接效應：抗體結合 → 橋粒功能受損 → 細胞間黏附喪失
4. 間接效應：補體活化 + 蛋白酶釋放 → 加速橋粒破壞
5. 棘層松解（acantholysis）→ 角質細胞彼此分離
6. 表皮內膿皰形成（角質層下/顆粒層位置）
7. 膿皰內含棘層松解細胞 + 嗜中性球（非感染性）

## 二、臨床表現與診斷 (Clinical Signs & Diagnosis)

### 犬
- **面部**：鼻樑、耳翼、眼周對稱性膿皰、結痂、脫屑
- **足墊**：角化過度、裂隙、疼痛（高度特異性）
- **爪甲**：甲床炎、爪甲脫落
- **全身性**：嚴重病例可擴展至軀幹、腹股溝

### 貓
- **面部**：鼻樑、耳翼、眼周
- **乳頭周圍**：特有分佈
- **爪甲皺褶**：甲溝炎
- **足墊**

### 重要特徵
- 膿皰（fragile，容易破裂 → 結痂覆蓋）
- 通常無瘙癢或僅輕度瘙癢（與膿皮症不同）
- 黏膜通常不受累（PF，與 PV 不同）

### 診斷
### 皮膚細胞學（關鍵第一步）
- 膿皰穿刺或結痂下方取樣
- 見大量 **棘層松解細胞**：圓形深染角質細胞，通常被嗜中性球包圍（形成「煎蛋」外觀）
- **與膿皮症的關鍵區別**：PF 無退化嗜中性球吞噬球菌

### 皮膚切片（確診）
- 取樣完整膿皰或新鮮病灶邊緣
- 組織病理：表皮內（角質層下）膿皰，含棘層松解細胞與嗜中性球
- 免疫螢光/免疫組化：角質細胞間 IgG 沉積（網狀模式）

## 三、治療策略 (Treatment)

### 誘導期
- [藥物:Prednisolone] 2-4 mg/kg/day PO（免疫抑制劑量），分 BID
- 搭配節約類固醇劑：
  - [藥物:Azathioprine] 2 mg/kg PO SID（犬）
  - 或 [藥物:Mycophenolate] 10-20 mg/kg PO BID
  - 貓首選 [藥物:Chlorambucil] 0.1-0.2 mg/kg PO q48h

### 維持期
- 控制病情後緩慢減少 Prednisolone（每 2-4 週減 25%）
- 目標：最低有效劑量的隔日給藥
- 節約類固醇劑通常需長期維持

### 難治性病例
- Cyclosporine 5-10 mg/kg PO SID
- 人類免疫球蛋白（hIVIG）
- Rituximab（實驗性）

[圖片:PF 面部典型病灶與足墊病變照片]

## 四、併發症與監控 (Complications & Monitoring)

定期追蹤天疱瘡患畜的治療反應與潛在併發症，根據臨床反應調整治療計畫，並監測藥物副作用與疾病進展。

## 五、預後與預後因子 (Prognosis)

天疱瘡的預後取決於病因、疾病嚴重程度、治療時機及患畜整體健康狀況，早期診斷與積極治療通常可獲得較佳預後。

## 六、人醫借鑒 (Translational Insights)

| 人醫工具/概念 | 獸醫應用潛力 | 現況 |
|-------------|-------------|------|
| Dupilumab（抗 IL-4/IL-13 單抗） | 犬 AD 的抗細胞激素單抗開發 | 犬 anti-IL-31（Lokivetmab）已上市，anti-IL-4/13 研究中 |
| 過敏原免疫療法（AIT）次世代技術 | 舌下免疫療法（SLIT）、肽段免疫療法 | 犬 SLIT 已有商業化產品 |
| 光動力療法（PDT） | 犬淺表腫瘤/角化異常的非手術治療 | 人醫成熟，獸醫病例報告增加 |
| 生物製劑（biologics） | 犬自體免疫皮膚病的精準治療 | 獸醫可用生物製劑仍有限 |

## 七、臨床爭議與知識空缺 (Controversies & Knowledge Gaps)

| 爭議議題 | 現況 | Evidence Level |
|---------|------|---------------|
| 犬膿皮症的經驗性 vs 培養導引抗生素選擇 | MRSP 盛行率升高使經驗性治療風險增加 | Level II |
| 犬食物不良反應的排除飲食試驗持續時間 | 傳統 8 週 vs 新研究建議 6 週可能足夠 | Level II |
| 犬蠕形蟎蟲症是否需治療至兩次皮膚刮搔陰性 | 傳統標準 vs 較短療程的新證據 | Level III |
| 貓嗜酸球肉芽腫複合體的分類系統 | 現有分類是否反映不同病因仍不確定 | Level IV |`,
  clinical_pearl: '在細胞學上區分天疱瘡與膿皮症是每位獸醫都應掌握的技能。關鍵差異：PF 膿皰中見到的是棘層松解細胞被嗜中性球包圍（但嗜中性球不是退化的，也沒有吞噬細菌）；膿皮症則是退化嗜中性球內含吞噬球菌。如果你看到「大量游離的圓形角質細胞 + 非退化嗜中性球 + 沒有細菌」——想到天疱瘡，立刻安排皮膚切片確診。',
  common_mistakes: [
    '將 PF 的膿皰/結痂誤診為膿皮症而長期使用抗生素（PF 對抗生素無效）',
    '皮膚切片取樣不當：應取完整膿皰或新鮮病灶邊緣，避免取慢性結痂或苔蘚化區域',
    'Prednisolone 減量過快導致復發（應每 2-4 週僅減 25%）',
    '未使用節約類固醇劑即長期高劑量糖皮質激素（嚴重副作用）',
    '貓使用 Azathioprine（貓對 azathioprine 高度敏感，可致命性骨髓抑制，應用 chlorambucil）',
  ],
  disease_data: {
    signalment: '犬：中年犬最常見（中位年齡 4-6 歲），品種偏好：秋田犬、鬆獅犬、臘腸犬、紐芬蘭犬、英國鬥牛犬。貓：無明顯品種偏好，中老年貓。無性別差異。',
    etiology: '自體免疫疾病：免疫耐受失敗 → 產生抗 desmoglein-1（PF）或抗 desmoglein-3（PV）的 IgG 自體抗體。觸發因素可能包括：藥物（methimazole、cephalexin）、紫外線暴露、慢性皮膚病。多數為特發性。',
    pathogenesis: '免疫耐受失敗 → 抗 desmoglein-1 IgG 自體抗體產生 → 抗體結合角質細胞表面的 desmoglein-1 → 橋粒功能受損（直接抑制黏附 + 細胞內信號改變）→ 棘層松解（acantholysis）→ 角質細胞分離 → 表皮內膿皰（角質層下/顆粒層）→ 嗜中性球趨化募集至膿皰內 → 膿皰破裂 → 結痂。',
    clinical_signs: [
      { sign: '面部對稱性膿皰與結痂', category: 'primary', description: '鼻樑、耳翼、眼周；膿皰脆弱易破裂，臨床常見結痂而非完整膿皰' },
      { sign: '足墊角化過度', category: 'primary', description: '足墊增厚、裂隙、疼痛——犬 PF 高度特異性表現' },
      { sign: '爪甲病變', category: 'secondary', description: '甲床炎、甲溝炎、爪甲脫落（onychomadesis）' },
      { sign: '全身性結痂脫屑', category: 'secondary', description: '嚴重病例擴展至軀幹、腹股溝' },
      { sign: '貓乳頭周圍病變', category: 'secondary', description: '貓特有分佈，乳頭結痂與脫屑' },
    ],
    staging: { system: '範圍分級', stages: ['局部型：僅面部或足墊', '廣泛型：面部 + 軀幹 + 四肢', '重症型：全身性 + 發燒 + 食慾下降'] },
    differential_diagnosis: [
      { condition: '細菌性膿皮症', key_differentiator: '細胞學見退化嗜中性球吞噬球菌；抗生素治療有效' },
      { condition: '蠕形蟎症', key_differentiator: '深層皮膚刮搔見 Demodex，非膿皰為主的病灶' },
      { condition: '皮膚癬菌症', key_differentiator: '環形脫毛、真菌培養陽性' },
      { condition: '紅斑性狼瘡 (DLE/SLE)', key_differentiator: 'DLE 好發鼻端，脫色素與潰瘍為主；SLE 多系統受累' },
    ],
    diagnostic_workup: '1. 皮膚細胞學（膿皰穿刺/結痂下方）→ 見棘層松解細胞 → 2. 皮膚切片病理學（完整膿皰或新鮮病灶）→ 3. 組織病理確認表皮內棘層松解性膿皰 → 4. 可選：直接免疫螢光（角質細胞間 IgG 沉積）→ 5. 排除藥物誘發型（回顧用藥史）',
    treatment_protocol: '1. 誘導期：Prednisolone 2-4 mg/kg/day PO + 節約類固醇劑（犬：Azathioprine 2 mg/kg SID 或 Mycophenolate 10-20 mg/kg BID；貓：Chlorambucil 0.1-0.2 mg/kg q48h）。2. 維持期：病情控制後 Prednisolone 每 2-4 週減 25%，目標最低有效劑量隔日給藥。3. 難治性：考慮 Cyclosporine 或 hIVIG。4. 局部：足墊裂隙可用含類固醇的外用製劑。',
    prognosis: '需終身管理。約 50-70% 犬在適當免疫抑制下可良好控制。完全緩解率約 10-20%（可嘗試停藥）。預後不良因素：廣泛病灶、需要多種免疫抑制劑、繼發感染。長期免疫抑制治療的副作用是主要挑戰（Cushing 表現、感染風險）。',
    monitoring: '誘導期每 2 週回診評估。穩定後每 1-3 個月回診。每次需：臨床病灶評估、CBC（監測 Azathioprine 骨髓抑制）、肝腎功能、尿比重。使用 Chlorambucil 需每 2 週 CBC 前 2 個月。監測糖皮質激素副作用（多飲多尿、肌肉萎縮、皮膚薄化）。',
    owner_communication: '天疱瘡是一種自體免疫疾病——身體的免疫系統錯誤攻擊自己的皮膚。這是一種需要終身管理的慢性疾病。治療使用免疫抑制藥物（類固醇加上節約類固醇藥物），目標是用最少的藥物控制病情。藥物有副作用（類固醇引起多喝多尿等），定期驗血監測很重要。不可自行停藥或調整劑量，突然停藥會導致嚴重復發。',
  },
  diagnostic_data: null,
  procedure_data: null,
  visual_placeholders: [
    { position: '診斷段落後', type: 'comparison_table', description: 'PF 細胞學 vs 膿皮症細胞學比較圖' },
    { position: '臨床表現段落後', type: 'annotated_image', description: 'PF 典型面部與足墊病灶照片' },
  ],
  interactive_placeholders: [
    { position: '治療段落', type: 'drug_calculator', description: 'PF 免疫抑制藥物劑量計算器與減量時程表' },
  ],
  drug_api_links: ['Prednisolone', 'Azathioprine', 'Mycophenolate', 'Chlorambucil', 'Cyclosporine'],
  references: [
    { type: 'journal', citation: 'Olivry T. A review of autoimmune skin diseases in domestic animals: I - Superficial pemphigus. Vet Dermatol. 2006;17(5):291-305.', relevance: '表淺型天疱瘡（PF）的全面回顧' },
    { type: 'textbook', citation: "Miller WH, Griffin CE, Campbell KL. Muller and Kirk's Small Animal Dermatology, 7th ed. Elsevier, 2013.", relevance: '天疱瘡完整章節' },
    { type: 'journal', citation: 'Bizikova P et al. Review: Clinical and histological manifestations of canine pemphigus foliaceus. Vet Dermatol. 2014;25(4):299-e75.', relevance: '犬 PF 臨床與組織病理表現的系統性回顧' },
    { type: 'journal', citation: 'Mueller RS et al. Treatment of pemphigus foliaceus and pemphigus vulgaris in dogs. Vet Dermatol. 2006;17:279-290.', relevance: '天疱瘡治療方案的循證回顧' },
    { type: 'guideline', citation: 'Olivry T et al. Treatment of canine atopic dermatitis: 2015 updated guidelines from the International Committee on Allergic Diseases of Animals (ICADA). BMC Vet Dermatol. 2015;26:210-e49.', relevance: 'ICADA 指引中自體免疫皮膚病鑑別診斷' },
  ],
  is_current: true,
  created_at: now,
};

/** 獸醫皮膚科總覽 — L0 概念型 */
const contentDermOverview: NodeContent = {
  id: 'CONTENT-DERM-L0-001',
  node_id: 'DERM-L0-001',
  version: 1,
  summary: '獸醫皮膚科（Veterinary Dermatology）是專門處理犬貓皮膚、毛髮、爪甲及耳道疾病的臨床專科。皮膚病佔小動物一般門診量的 20-25%，是最常見的就診原因之一。本專科涵蓋過敏性皮膚病、感染性皮膚病（細菌、黴菌、寄生蟲）、自體免疫性皮膚病、內分泌相關皮膚病、腫瘤性皮膚病及耳科疾病。台灣亞熱帶氣候使得過敏性皮膚病與黴菌感染的盛行率特別高。',
  learning_objectives: [
    '描述獸醫皮膚科的範疇與主要疾病分類',
    '理解皮膚科在小動物臨床中的重要性與常見就診原因',
    '概述皮膚科六層知識架構（基礎→機轉→疾病→診斷→治療）的學習路徑',
    '認識台灣環境因素對皮膚病流行病學的影響',
  ],
  key_points: [
    '皮膚病佔小動物門診量 20-25%，是最常見的就診原因之一',
    '過敏性皮膚病（CAD、FAD、AFR）是犬最常見的皮膚問題群',
    '皮膚科診斷高度依賴系統性方法：病史→理學檢查→基本檢查（刮搔、細胞學）→進階檢查',
    '台灣亞熱帶氣候特點：全年跳蚤活動、塵蟎高暴露、高濕度利於黴菌與馬拉色菌',
    '皮膚科核心原則：多數皮膚病非獨立疾病，需找出潛在病因才能有效治療',
    '皮膚科專科醫師認證：DACVD（美國）、DECVD（歐洲）、ACVD（亞洲）',
    '系統性診斷思維比單一疾病知識更重要——皮膚科是「排除性」診斷的典範',
  ],
  body: `# 獸醫皮膚科總覽

## 一、核心概念與機轉 (Core Concept & Mechanism)



### 專科範疇
獸醫皮膚科涵蓋犬貓（及其他物種）的皮膚、毛髮、爪甲與耳道疾病的診斷與治療。主要疾病分類包括：

1. **過敏性皮膚病**：犬異位性皮膚炎（CAD）、跳蚤過敏（FAD）、食物不良反應（AFR）
2. **感染性皮膚病**：細菌性膿皮症、馬拉色菌皮膚炎、皮膚癬菌症
3. **寄生蟲性皮膚病**：蠕形蟎症、疥蟎症
4. **自體免疫性皮膚病**：天疱瘡、狼瘡
5. **內分泌相關皮膚病**：甲狀腺低下、Cushing 症候群
6. **腫瘤性皮膚病**：肥大細胞瘤、皮膚型淋巴瘤
7. **耳科疾病**：外耳炎、中耳炎

### 臨床重要性
皮膚病佔小動物一般門診量的 20-25%。瘙癢（pruritus）是最常見的就診主訴，其鑑別診斷涵蓋數十種疾病。皮膚科的核心挑戰在於：許多不同疾病可呈現相似的臨床表現（紅斑、脫毛、鱗屑），必須依賴系統性的診斷方法。

### 診斷方法學
皮膚科診斷遵循逐步排除的系統性流程：

1. **詳細病史**：發病年齡、季節性、分佈模式、瘙癢程度、用藥反應
2. **皮膚科理學檢查**：病灶類型辨識（原發性 vs 繼發性）、分佈模式
3. **基本診斷工具**：皮膚刮搔、皮膚細胞學、毛髮鏡檢、Wood 燈
4. **進階診斷**：真菌培養、細菌培養藥敏、組織病理切片、過敏原檢測

### 台灣環境與流行病學
台灣地處亞熱帶，氣候特徵對皮膚病流行病學有顯著影響：
- 全年溫暖潮濕 → 跳蚤全年活動（FAD 無季節性）
- 高濕度 → 馬拉色菌與黴菌感染盛行率高
- 塵蟎全年高濃度 → CAD 發病率與嚴重度可能高於溫帶
- 常見品種（法鬥、柴犬、貴賓）各有品種特異性皮膚病

### 學習架構
本知識樹採六層漸進架構：
- **L1 基礎科學**：皮膚解剖、免疫學、微生物生態
- **L2 病理機轉**：過敏反應、屏障功能障礙、角化異常
- **L3 臨床疾病**：各疾病的診斷與治療
- **L4 診斷方法**：具體檢查技術與判讀
- **L5 治療管理**：藥物治療與長期管理策略

[圖片:獸醫皮膚科知識架構心智圖]

## 二、臨床意義 (Clinical Significance)

此概念在臨床實務中具有重要應用價值，有助於疾病的診斷、治療決策與預後評估。

## 三、人醫借鑒 (Translational Insights)

| 人醫工具/概念 | 獸醫應用潛力 | 現況 |
|-------------|-------------|------|
| 精準醫學（precision medicine）皮膚藥物基因組學 | 犬異位性皮膚炎個人化治療選擇 | 品種特異性基因關聯研究中 |
| 遠距皮膚科（teledermatology） | 飼主上傳皮膚照片的 AI 初步分級 | 獸醫遠距診療法規發展中 |
| AI 皮膚病灶辨識 | 犬貓皮膚腫塊良惡性預判 | 人醫 AI 準確度達皮膚科醫師水準，獸醫訓練中 |

## 四、臨床爭議與知識空缺 (Controversies & Knowledge Gaps)

| 爭議議題 | 現況 | Evidence Level |
|---------|------|---------------|
| 犬異位性皮膚炎的診斷標準（Favrot criteria）敏感度/特異度 | 敏感度 ~85%/特異度 ~79%，仍有誤判空間 | Level II |
| 獸醫皮膚科遠距診療的診斷準確度 | 照片品質與臨床觸診缺失影響判斷 | Level IV |`,
  clinical_pearl: '皮膚科最重要的一句話：「皮膚病幾乎都不是你第一眼看到的那個病。」表面的感染（膿皮症、馬拉色菌）通常是繼發的，背後藏著過敏或內分泌等原發病因。不找出根本原因，治療永遠只是治標。養成每次皮膚病就診都做細胞學的習慣，是成為優秀皮膚科醫師的第一步。',
  common_mistakes: [
    '僅治療表面感染而不追查潛在病因（導致反覆復發）',
    '未做基本診斷檢查（刮搔、細胞學）即經驗性治療',
    '過度依賴糖皮質激素控制瘙癢而延遲正確診斷',
    '忽略病史的重要性（發病年齡、季節性、飲食史是關鍵線索）',
  ],
  disease_data: null,
  diagnostic_data: null,
  procedure_data: null,
  visual_placeholders: [
    { position: '學習架構段落後', type: 'mind_map', description: '獸醫皮膚科知識架構總覽心智圖' },
    { position: '疾病分類段落後', type: 'flowchart', description: '皮膚科系統性診斷流程圖' },
  ],
  interactive_placeholders: [],
  drug_api_links: [],
  references: [
    { type: 'textbook', citation: "Miller WH, Griffin CE, Campbell KL. Muller and Kirk's Small Animal Dermatology, 7th ed. Elsevier, 2013.", relevance: '小動物皮膚科最權威教材' },
    { type: 'textbook', citation: 'Hnilica KA, Patterson AP. Small Animal Dermatology: A Color Atlas and Therapeutic Guide, 4th ed. Elsevier, 2017.', relevance: '皮膚科臨床圖譜與治療指南' },
    { type: 'journal', citation: 'Hill PB et al. Survey of the prevalence, diagnosis and treatment of dermatological conditions in small animals in general practice. Vet Rec. 2006;158(16):533-539.', relevance: '小動物皮膚病一般診療盛行率調查' },
    { type: 'guideline', citation: 'Olivry T et al. Treatment of canine atopic dermatitis: 2015 updated guidelines from the International Committee on Allergic Diseases of Animals (ICADA). BMC Vet Dermatol. 2015;26:210-e49.', relevance: 'ICADA 國際指引——皮膚科領域最重要的臨床共識' },
  ],
  is_current: true,
  created_at: now,
};

/** 皮膚解剖與生理 — L1 概念型 */
const contentSkinAnatomy: NodeContent = {
  id: 'CONTENT-DERM-L1-001',
  node_id: 'DERM-L1-001',
  version: 1,
  summary: '皮膚是動物體最大的器官，佔體重的 12-24%。犬貓皮膚由表皮（epidermis）、真皮（dermis）與皮下組織（hypodermis）三層構成。表皮的角質化過程維持皮膚屏障功能，毛囊週期性生長決定被毛密度與品質。理解皮膚正常解剖與組織學是所有皮膚病理學與臨床診斷的基礎。犬貓皮膚與人類有顯著差異：更薄的表皮、複合毛囊結構、無外分泌汗腺（僅足墊有）。',
  learning_objectives: [
    '描述犬貓皮膚的三層基本結構與各層功能',
    '說明表皮角質化過程（keratinocyte differentiation）的四個層次',
    '辨識毛囊的解剖結構與複合毛囊的概念',
    '比較犬貓與人類皮膚的關鍵解剖差異',
    '說明皮膚附屬構造（皮脂腺、頂漿腺、爪甲）的功能',
  ],
  key_points: [
    '犬貓表皮僅 3-5 層細胞厚（人類 10-15 層），更新週期約 21 天',
    '表皮四層（由深至淺）：基底層、棘層、顆粒層、角質層',
    '角質層的屏障功能依賴：角質化包膜（cornified envelope）+ 細胞間脂質（ceramides）',
    '犬貓為複合毛囊（compound follicle）：一個主毛搭配多根次毛，共用一個毛囊開口',
    '毛囊生長週期：anagen（生長期）→ catagen（退行期）→ telogen（休止期）',
    '犬無外分泌汗腺（eccrine glands），僅足墊有；體溫調節主要靠喘氣',
    '真皮乳頭層含豐富微血管叢與感覺神經末梢，網狀層含膠原纖維與彈性纖維',
    'Filaggrin 蛋白在角質化過程中將角蛋白絲聚合，其缺陷與異位性皮膚炎相關',
  ],
  body: `# 皮膚解剖與生理

## 一、核心概念與機轉 (Core Concept & Mechanism)



### 皮膚的三層結構
### 表皮（Epidermis）
表皮為最外層，由角質細胞（keratinocytes）構成，負責屏障功能。犬貓表皮較人類薄（3-5 層 vs 10-15 層），更新週期約 21 天。

**角質化分層（由深至淺）**：
1. **基底層（Stratum basale）**：單層柱狀細胞，含幹細胞，持續分裂向上推移
2. **棘層（Stratum spinosum）**：多層多角形細胞，橋粒（desmosomes）連接，朗格漢斯細胞位於此
3. **顆粒層（Stratum granulosum）**：含角質透明蛋白顆粒（keratohyalin granules），filaggrin 前驅物
4. **角質層（Stratum corneum）**：無核扁平角質細胞（corneocytes），被脂質雙層包圍

**屏障功能的關鍵**：
- 角質化包膜（cornified envelope）：交聯蛋白殼
- 細胞間脂質：ceramides（神經醯胺）、cholesterol、fatty acids
- Filaggrin：聚合角蛋白絲 → 分解產物為天然保濕因子（NMF）

**表皮內免疫細胞**：
- 朗格漢斯細胞（Langerhans cells）：樹突狀抗原呈現細胞
- 黑色素細胞（Melanocytes）：基底層，合成黑色素保護 DNA
- Merkel 細胞：機械感受器

### 真皮（Dermis）
- **乳頭層（Papillary dermis）**：薄膠原纖維、豐富微血管叢、感覺神經末梢
- **網狀層（Reticular dermis）**：粗膠原纖維束（Type I collagen）、彈性纖維、毛囊根部

### 皮下組織（Hypodermis）
- 脂肪組織為主，提供隔熱、緩衝與能量儲存

### 皮膚附屬構造
### 毛囊（Hair Follicle）
- 犬貓為**複合毛囊**：一根主毛（primary hair）+ 多根次毛（secondary hairs）
- 毛球（hair bulb）含毛母質（matrix cells）與真皮乳頭（dermal papilla）
- 毛幹結構：髓質（medulla）+ 皮質（cortex）+ 表皮鞘（cuticle）

### 皮脂腺（Sebaceous Glands）
- 全分泌型，附著於毛囊上部
- 分泌皮脂（lipid-rich sebum）→ 潤滑毛髮與皮膚表面
- 功能異常 → 脂漏性皮膚炎

### 頂漿腺（Apocrine Glands）
- 犬貓廣泛分佈（與人類不同）
- 開口於毛囊漏斗部
- 功能不完全明確，可能參與氣味標記

### 爪甲（Claws/Nails）
- 由爪甲母質（nail matrix）角質化產生
- 爪甲疾病（onychopathy）可繼發於自體免疫、感染或創傷

[圖片:犬皮膚三層結構與附屬構造標注解剖圖]

## 二、臨床意義 (Clinical Significance)

此概念在臨床實務中具有重要應用價值，有助於疾病的診斷、治療決策與預後評估。

## 三、人醫借鑒 (Translational Insights)

| 人醫工具/概念 | 獸醫應用潛力 | 現況 |
|-------------|-------------|------|
| Dupilumab（抗 IL-4/IL-13 單抗） | 犬 AD 的抗細胞激素單抗開發 | 犬 anti-IL-31（Lokivetmab）已上市，anti-IL-4/13 研究中 |
| 過敏原免疫療法（AIT）次世代技術 | 舌下免疫療法（SLIT）、肽段免疫療法 | 犬 SLIT 已有商業化產品 |
| 光動力療法（PDT） | 犬淺表腫瘤/角化異常的非手術治療 | 人醫成熟，獸醫病例報告增加 |
| 生物製劑（biologics） | 犬自體免疫皮膚病的精準治療 | 獸醫可用生物製劑仍有限 |

## 四、臨床爭議與知識空缺 (Controversies & Knowledge Gaps)

| 爭議議題 | 現況 | Evidence Level |
|---------|------|---------------|
| 犬膿皮症的經驗性 vs 培養導引抗生素選擇 | MRSP 盛行率升高使經驗性治療風險增加 | Level II |
| 犬食物不良反應的排除飲食試驗持續時間 | 傳統 8 週 vs 新研究建議 6 週可能足夠 | Level II |
| 犬蠕形蟎蟲症是否需治療至兩次皮膚刮搔陰性 | 傳統標準 vs 較短療程的新證據 | Level III |
| 貓嗜酸球肉芽腫複合體的分類系統 | 現有分類是否反映不同病因仍不確定 | Level IV |`,
  clinical_pearl: '犬的表皮比人類薄得多（3-5 層 vs 10-15 層），這解釋了為什麼犬的皮膚屏障更脆弱、更容易被過敏原穿透。這也是為什麼外用藥物在犬身上的吸收率比人類高——使用外用類固醇時要特別注意局部皮膚萎縮的副作用。理解犬的複合毛囊結構對於判讀皮膚刮搔與切片也很重要。',
  common_mistakes: [
    '將人類皮膚解剖知識直接套用於犬貓（表皮厚度、汗腺分佈完全不同）',
    '忽略皮膚屏障功能在過敏性皮膚病中的核心角色',
    '不了解複合毛囊結構導致毛髮鏡檢判讀錯誤',
    '混淆犬的頂漿腺（apocrine，廣泛分佈）與外分泌汗腺（eccrine，僅足墊）',
  ],
  disease_data: null,
  diagnostic_data: null,
  procedure_data: null,
  visual_placeholders: [
    { position: '表皮段落後', type: 'annotated_image', description: '犬表皮四層結構與細胞類型標注圖' },
    { position: '毛囊段落後', type: 'annotated_image', description: '犬複合毛囊解剖結構圖' },
  ],
  interactive_placeholders: [
    { position: '全文末尾', type: 'interactive_quiz', description: '皮膚解剖結構辨識互動測驗' },
  ],
  drug_api_links: [],
  references: [
    { type: 'textbook', citation: "Miller WH, Griffin CE, Campbell KL. Muller and Kirk's Small Animal Dermatology, 7th ed. Elsevier, 2013. Chapter 1: Structure and Function of the Skin.", relevance: '犬貓皮膚解剖與生理完整章節' },
    { type: 'textbook', citation: 'Ackerman AB et al. Histologic Diagnosis of Inflammatory Skin Diseases, 3rd ed. Ardor Scribendi, 2005.', relevance: '皮膚組織學標準參考' },
    { type: 'journal', citation: 'Marsella R et al. Current understanding of the role of the skin barrier in atopic dermatitis. Ann Allergy Asthma Immunol. 2013;110:S5-S8.', relevance: '皮膚屏障功能與異位性皮膚炎的關聯' },
    { type: 'guideline', citation: 'Hensel P, Santoro D, Favrot C, et al. Canine atopic dermatitis: detailed guidelines for diagnosis and allergen identification. BMC Vet Res. 2015;11:196.', relevance: 'ICADA 指引中皮膚結構與屏障功能的臨床意義' },
  ],
  is_current: true,
  created_at: now,
};

/** 皮膚免疫學 — L1 概念型 */
const contentCutaneousImmunology: NodeContent = {
  id: 'CONTENT-DERM-L1-002',
  node_id: 'DERM-L1-002',
  version: 1,
  summary: '皮膚是最大的免疫器官，構成抵禦外界病原的第一道防線。皮膚免疫系統（skin-associated lymphoid tissue, SALT）包含先天性與後天性免疫組成。朗格漢斯細胞、真皮樹突狀細胞、肥大細胞、T 細胞與角質細胞共同構成皮膚的免疫監視網絡。理解皮膚免疫學對於掌握過敏反應（IgE 介導）、自體免疫（抗體介導）與感染免疫（細胞介導）的病理機轉至關重要。',
  learning_objectives: [
    '列舉皮膚中的主要免疫細胞及其功能',
    '描述朗格漢斯細胞在抗原呈現中的角色',
    '說明 IgE-肥大細胞軸在過敏反應中的機轉',
    '區分 Th1 與 Th2 免疫偏移在不同皮膚病中的角色',
    '解釋細胞介導免疫在對抗皮膚感染中的重要性',
  ],
  key_points: [
    '朗格漢斯細胞（Langerhans cells）是表皮中的專職抗原呈現細胞，捕獲穿透屏障的抗原',
    '肥大細胞位於真皮中，表面 FcεRI 結合 IgE，再次接觸抗原時脫顆粒釋放組胺等介質',
    'Th2 偏移（IL-4, IL-13）驅動 IgE 產生 → 過敏性皮膚病的核心免疫異常',
    'Th1 反應（IFN-γ, TNF-α）對抗細胞內病原（皮膚癬菌、蠕形蟎）至關重要',
    'IL-31 是犬瘙癢的關鍵細胞因子，直接活化感覺神經元（lokivetmab 的標靶）',
    '角質細胞不僅是屏障，也能產生抗菌肽（defensins, cathelicidins）與細胞因子',
    '調節性 T 細胞（Treg）維持免疫耐受，其功能異常與自體免疫皮膚病相關',
    '補體系統在自體免疫水泡性疾病（天疱瘡）的組織損傷中扮演重要角色',
  ],
  body: `# 皮膚免疫學

## 一、核心概念與機轉 (Core Concept & Mechanism)



### 皮膚相關淋巴組織（SALT）
皮膚免疫系統由多種細胞組成的網絡構成，協同提供免疫監視與防禦。

### 先天性免疫組成

**角質細胞（Keratinocytes）**
- 不僅是物理屏障，也是活躍的免疫參與者
- 產生抗菌肽：β-defensins、cathelicidins → 直接殺滅細菌與真菌
- 分泌細胞因子：IL-1, IL-6, IL-8, TNF-α → 啟動炎症反應
- 表達 Toll-like receptors (TLRs) → 辨識病原相關分子模式（PAMPs）

**肥大細胞（Mast Cells）**
- 位於真皮血管周圍
- 表面 FcεRI（高親和力 IgE 受體）結合 allergen-specific IgE
- 脫顆粒釋放：組胺、白三烯、前列腺素、TNF-α、蛋白酶
- 在 Type I 過敏反應中扮演核心效應細胞角色

**嗜中性球（Neutrophils）**
- 急性炎症的第一線防禦
- 膿皮症中的主要炎症細胞
- 在天疱瘡膿皰中也大量出現（非感染性募集）

### 後天性免疫組成

**朗格漢斯細胞（Langerhans Cells, LCs）**
- 表皮中的專職抗原呈現細胞（APCs）
- 捕獲穿透屏障的抗原 → 遷移至局部淋巴結 → 活化 naive T 細胞
- 在異位性皮膚炎中表面 FcεRI 表達增加 → 增強過敏原呈現效率

**真皮樹突狀細胞（Dermal Dendritic Cells）**
- 位於真皮中的另一群 APCs
- 與 LCs 互補，參與不同類型的免疫反應

**T 細胞**
- 真皮含有常駐記憶 T 細胞（tissue-resident memory T cells, TRM）
- Th1：產生 IFN-γ → 活化巨噬細胞 → 對抗細胞內病原
- Th2：產生 IL-4, IL-13 → 驅動 B 細胞 class switch 至 IgE → 過敏反應
- Th17：產生 IL-17 → 募集嗜中性球 → 對抗細胞外細菌與真菌
- Treg：產生 IL-10, TGF-β → 維持免疫耐受 → 功能異常 → 自體免疫

### 過敏反應的免疫機轉
### Type I 過敏（即時型）
抗原 → LC 捕獲 → Th2 活化 → IL-4/IL-13 → B 細胞 IgE class switch → IgE 結合肥大細胞 FcεRI → 再次暴露時肥大細胞脫顆粒 → 數分鐘內瘙癢與紅斑

### Type IV 過敏（遲發型）
抗原 → APC 呈現 → 記憶 T 細胞活化 → 巨噬細胞與嗜中性球募集 → 24-72 小時後炎症反應

### 瘙癢的神經免疫機轉
- IL-31（主要由 Th2 細胞產生）直接結合背根神經節感覺神經元上的 IL-31RA/OSMR
- 組胺結合 H1 受體 → 活化 C 纖維 → 瘙癢信號傳至脊髓與大腦
- JAK-STAT 信號通路參與多種促瘙癢細胞因子的信號傳導（oclacitinib 的標靶）

[圖片:皮膚免疫細胞分佈與交互作用示意圖]

## 二、臨床意義 (Clinical Significance)

此概念在臨床實務中具有重要應用價值，有助於疾病的診斷、治療決策與預後評估。

## 三、人醫借鑒 (Translational Insights)

| 人醫工具/概念 | 獸醫應用潛力 | 現況 |
|-------------|-------------|------|
| Dupilumab（抗 IL-4/IL-13 單抗） | 犬 AD 的抗細胞激素單抗開發 | 犬 anti-IL-31（Lokivetmab）已上市，anti-IL-4/13 研究中 |
| 過敏原免疫療法（AIT）次世代技術 | 舌下免疫療法（SLIT）、肽段免疫療法 | 犬 SLIT 已有商業化產品 |
| 光動力療法（PDT） | 犬淺表腫瘤/角化異常的非手術治療 | 人醫成熟，獸醫病例報告增加 |
| 生物製劑（biologics） | 犬自體免疫皮膚病的精準治療 | 獸醫可用生物製劑仍有限 |

## 四、臨床爭議與知識空缺 (Controversies & Knowledge Gaps)

| 爭議議題 | 現況 | Evidence Level |
|---------|------|---------------|
| 犬膿皮症的經驗性 vs 培養導引抗生素選擇 | MRSP 盛行率升高使經驗性治療風險增加 | Level II |
| 犬食物不良反應的排除飲食試驗持續時間 | 傳統 8 週 vs 新研究建議 6 週可能足夠 | Level II |
| 犬蠕形蟎蟲症是否需治療至兩次皮膚刮搔陰性 | 傳統標準 vs 較短療程的新證據 | Level III |
| 貓嗜酸球肉芽腫複合體的分類系統 | 現有分類是否反映不同病因仍不確定 | Level IV |`,
  clinical_pearl: '理解 Th2 偏移是掌握所有過敏性皮膚病的鑰匙。CAD 犬的免疫系統「偏向」Th2 → 過量 IgE → 肥大細胞活化。現代靶向治療正是針對此路徑：lokivetmab 阻斷 IL-31（止癢），oclacitinib 抑制 JAK-STAT（阻斷多種細胞因子信號），cyclosporine 抑制 T 細胞活化。了解機轉才能理解為何不同藥物起效速度與適應症不同。',
  common_mistakes: [
    '將皮膚僅視為物理屏障而忽略其活躍的免疫功能',
    '混淆 Type I（即時型，IgE 介導）與 Type IV（遲發型，T 細胞介導）過敏反應',
    '不了解 IL-31 在犬瘙癢中的核心角色（解釋 lokivetmab 的作用機制）',
    '忽略 Th1/Th2 平衡概念在理解不同皮膚病免疫機轉中的重要性',
  ],
  disease_data: null,
  diagnostic_data: null,
  procedure_data: null,
  visual_placeholders: [
    { position: 'SALT 段落後', type: 'annotated_image', description: '皮膚免疫細胞分佈層次圖' },
    { position: '過敏反應段落後', type: 'flowchart', description: 'Type I 過敏反應完整路徑圖' },
  ],
  interactive_placeholders: [
    { position: '全文末尾', type: 'interactive_quiz', description: '皮膚免疫細胞功能配對測驗' },
  ],
  drug_api_links: ['Oclacitinib', 'Lokivetmab', 'Cyclosporine'],
  references: [
    { type: 'textbook', citation: "Miller WH, Griffin CE, Campbell KL. Muller and Kirk's Small Animal Dermatology, 7th ed. Elsevier, 2013. Chapter 2: Immunology.", relevance: '皮膚免疫學完整章節' },
    { type: 'journal', citation: 'Marsella R, De Benedetto A. Atopic dermatitis in animals and people: an update and comparative review. Vet Sci. 2017;4(3):37.', relevance: '犬異位性皮膚炎的免疫學比較回顧' },
    { type: 'journal', citation: 'Gonzales AJ et al. Interleukin-31: its role in canine pruritus and naturally occurring canine atopic dermatitis. Vet Dermatol. 2013;24(1):48-e12.', relevance: 'IL-31 在犬瘙癢與 CAD 中角色的關鍵研究' },
    { type: 'guideline', citation: 'Mueller RS, Nuttall T, Prost C, et al. Treatment of the canine atopic dermatitis — 2023 updated guidelines from ICADA. Vet Dermatol. 2023;34(4):297-316.', relevance: 'ICADA 2023 更新指引中免疫機轉與治療靶點' },
  ],
  is_current: true,
  created_at: now,
};

/** 毛髮生長週期 — L1 概念型 */
const contentHairCycle: NodeContent = {
  id: 'CONTENT-DERM-L1-003',
  node_id: 'DERM-L1-003',
  version: 1,
  summary: '犬貓皮膚表面覆蓋的正常微生物群落（皮膚微生物體，skin microbiome）構成了抵禦病原菌的重要生物屏障。正常菌群包括常駐菌（resident flora）如 Staphylococcus pseudintermedius、Malassezia pachydermatis 等，以及暫時菌（transient flora）。皮膚微生物生態的平衡由宿主免疫、皮膚微環境與微生物間的競爭共同維持。生態失衡（dysbiosis）是膿皮症與馬拉色菌皮膚炎等繼發感染的根本原因。',
  learning_objectives: [
    '列舉犬貓皮膚正常常駐菌群與暫時菌群',
    '說明皮膚微生物生態平衡的維持機制',
    '描述 dysbiosis 如何導致繼發性皮膚感染',
    '理解不同體表部位微生物群落組成的差異',
  ],
  key_points: [
    'S. pseudintermedius 是犬皮膚最重要的常駐菌，正常時無害，屏障受損時致病',
    'M. pachydermatis 是犬皮膚正常嗜脂酵母菌，好發耳道、指間、皮膚皺褶',
    '皮膚微環境（pH、濕度、溫度、皮脂分泌）決定不同部位的菌群組成',
    '犬正常皮膚 pH 約 6.2-7.4（較人類偏鹼），有利於某些細菌與酵母菌定殖',
    '抗菌肽（defensins, cathelicidins）維持常駐菌與暫時菌的平衡',
    '過敏性皮膚病 → 屏障破壞 + 免疫改變 → dysbiosis → S. pseudintermedius / Malassezia 過度增殖',
    '長期抗生素使用可破壞菌群平衡、選擇抗藥菌（MRSP）',
    'Demodex canis 是毛囊正常共生寄生蟲，免疫低下時過度增殖致病',
  ],
  body: `# 皮膚微生物生態

## 一、核心概念與機轉 (Core Concept & Mechanism)



### 正常皮膚微生物群
犬貓皮膚表面棲息著多樣的微生物群落，構成動態的生態系統。

### 常駐菌群（Resident Flora）
- **細菌**：Staphylococcus pseudintermedius（犬最重要）、Micrococcus spp.、Corynebacterium spp.、Propionibacterium spp.
- **酵母菌**：Malassezia pachydermatis（嗜脂，好發耳道/指間/皮膚皺褶）
- **寄生蟲**：Demodex canis（毛囊共生，少量正常）

### 暫時菌群（Transient Flora）
- Staphylococcus aureus、Pseudomonas aeruginosa、Escherichia coli
- 來自環境接觸，通常被常駐菌與宿主免疫清除
- 皮膚屏障受損時可定殖並致病

### 微生物生態平衡的維持
### 宿主因素
- **物理屏障**：角質層完整性阻擋病原穿透
- **化學屏障**：皮脂中的脂肪酸具抗菌活性
- **抗菌肽**：β-defensins、cathelicidins 由角質細胞產生
- **免疫監視**：皮膚常駐免疫細胞持續巡邏

### 微環境因素
- **pH**：犬皮膚 pH 6.2-7.4，不同部位有差異
- **濕度與溫度**：影響微生物增殖速率
- **皮脂分泌量**：皮脂腺活躍度影響嗜脂微生物數量
- **解剖位置**：皮膚皺褶較潮濕溫暖 → 微生物密度較高

### 微生物競爭
- 常駐菌產生 bacteriocins 抑制暫時菌
- 空間與營養競爭限制病原菌定殖
- 微生物多樣性高 → 抗入侵能力強

### Dysbiosis 與皮膚感染
### 導致 Dysbiosis 的因素
1. **皮膚屏障破壞**：過敏 → 搔抓 → 表皮損傷 → 微環境改變
2. **免疫功能改變**：Th2 偏移 → 抗菌肽產生減少
3. **醫源性因素**：長期抗生素殺滅常駐菌 → 暫時菌/抗藥菌佔位
4. **環境因素**：高濕度（台灣）→ 利於馬拉色菌增殖

### 臨床後果
- S. pseudintermedius 過度增殖 → 膿皮症
- M. pachydermatis 過度增殖 → 馬拉色菌皮膚炎
- 正常菌群被抗藥菌取代 → MRSP 感染
- Demodex 過度增殖（免疫抑制）→ 蠕形蟎症

## 二、臨床意義 (Clinical Significance)

### 體表部位差異
不同解剖部位因微環境不同，菌群組成有顯著差異：
- **耳道**：溫暖潮濕，M. pachydermatis 密度最高
- **指間**：潮濕，馬拉色菌與細菌混合
- **腹側**：皮脂分泌少，菌群密度較低
- **皮膚皺褶**：（法鬥、沙皮）高溫高濕 → 感染好發

[圖片:犬皮膚不同部位微生物群落分佈圖]

## 三、人醫借鑒 (Translational Insights)

| 人醫工具/概念 | 獸醫應用潛力 | 現況 |
|-------------|-------------|------|
| Dupilumab（抗 IL-4/IL-13 單抗） | 犬 AD 的抗細胞激素單抗開發 | 犬 anti-IL-31（Lokivetmab）已上市，anti-IL-4/13 研究中 |
| 過敏原免疫療法（AIT）次世代技術 | 舌下免疫療法（SLIT）、肽段免疫療法 | 犬 SLIT 已有商業化產品 |
| 光動力療法（PDT） | 犬淺表腫瘤/角化異常的非手術治療 | 人醫成熟，獸醫病例報告增加 |
| 生物製劑（biologics） | 犬自體免疫皮膚病的精準治療 | 獸醫可用生物製劑仍有限 |

## 四、臨床爭議與知識空缺 (Controversies & Knowledge Gaps)

| 爭議議題 | 現況 | Evidence Level |
|---------|------|---------------|
| 犬膿皮症的經驗性 vs 培養導引抗生素選擇 | MRSP 盛行率升高使經驗性治療風險增加 | Level II |
| 犬食物不良反應的排除飲食試驗持續時間 | 傳統 8 週 vs 新研究建議 6 週可能足夠 | Level II |
| 犬蠕形蟎蟲症是否需治療至兩次皮膚刮搔陰性 | 傳統標準 vs 較短療程的新證據 | Level III |
| 貓嗜酸球肉芽腫複合體的分類系統 | 現有分類是否反映不同病因仍不確定 | Level IV |`,
  clinical_pearl: '把膿皮症和馬拉色菌皮膚炎理解為「dysbiosis 的臨床表現」而非單純感染，會完全改變你的臨床思維。S. pseudintermedius 和 M. pachydermatis 本來就住在犬的皮膚上——它們不是「入侵者」。真正的問題是什麼破壞了平衡？答案通常是過敏。這就是為什麼只用抗生素/抗黴菌而不控制過敏，感染會一再復發。',
  common_mistakes: [
    '將 S. pseudintermedius 和 M. pachydermatis 視為外來病原而非正常共生菌',
    '忽略 dysbiosis 概念，僅將皮膚感染視為單純的病原入侵',
    '過度使用廣效抗生素破壞正常菌群平衡而促進 MRSP 選擇',
    '不了解不同體表部位微生物群落差異導致取樣部位選擇不當',
  ],
  disease_data: null,
  diagnostic_data: null,
  procedure_data: null,
  visual_placeholders: [
    { position: '正常菌群段落後', type: 'comparison_table', description: '犬皮膚常駐菌 vs 暫時菌群比較表' },
    { position: 'Dysbiosis 段落後', type: 'flowchart', description: '皮膚屏障破壞 → Dysbiosis → 感染的惡性循環圖' },
  ],
  interactive_placeholders: [],
  drug_api_links: [],
  references: [
    { type: 'textbook', citation: "Miller WH, Griffin CE, Campbell KL. Muller and Kirk's Small Animal Dermatology, 7th ed. Elsevier, 2013. Chapter 3: Bacterial Skin Diseases.", relevance: '犬皮膚正常菌群與膿皮症' },
    { type: 'journal', citation: 'Rodrigues Hoffmann A. The canine skin microbiome: characterization of bacterial and fungal communities in healthy dogs. PLoS One. 2014;9(1):e83197.', relevance: '犬皮膚微生物組的基因體學分析' },
    { type: 'journal', citation: 'Bond R et al. Biology, diagnosis and treatment of Malassezia dermatitis in dogs and cats. Vet Dermatol. 2020;31(1):28-e4.', relevance: '馬拉色菌生物學與皮膚共生關係' },
    { type: 'guideline', citation: 'Hillier A et al. Guidelines for the diagnosis and antimicrobial therapy of canine superficial bacterial folliculitis (AAHA/AAVD). Vet Dermatol. 2014;25(3):163-e43.', relevance: 'AAHA/AAVD 指引中皮膚常駐菌群與膿皮症的關係' },
  ],
  is_current: true,
  created_at: now,
};

/** 過敏反應機轉 — L2 機轉型 */
const contentAllergyMechanism: NodeContent = {
  id: 'CONTENT-DERM-L2-001',
  node_id: 'DERM-L2-001',
  version: 1,
  summary: '過敏反應機轉是獸醫皮膚科最核心的病理基礎。犬貓過敏性皮膚病涉及四型過敏反應中的 Type I（IgE 介導即時型）和 Type IV（T 細胞介導遲發型）。過敏原穿透受損的皮膚屏障後，由朗格漢斯細胞捕獲並呈現給 T 細胞，在 Th2 偏移的免疫環境下，B 細胞進行 IgE class switch，產生的 allergen-specific IgE 結合肥大細胞表面 FcεRI。再次暴露時肥大細胞脫顆粒引發瘙癢與炎症。慢性期 Th1/Th17 浸潤加入導致苔蘚化。',
  learning_objectives: [
    '描述 Type I 過敏反應從致敏到效應的完整路徑',
    '說明 Th2 偏移如何驅動 IgE 產生與過敏反應',
    '解釋 IL-31 在犬瘙癢信號傳導中的機轉',
    '區分急性期與慢性期過敏反應的免疫機轉差異',
    '連結過敏機轉知識與現代靶向治療的作用原理',
  ],
  key_points: [
    'Type I 過敏：過敏原 → APC 呈現 → Th2 活化 → IL-4/IL-13 → IgE → 肥大細胞脫顆粒',
    '肥大細胞脫顆粒釋放預製介質（組胺）+ 新合成介質（白三烯、前列腺素）',
    '晚期反應（late-phase reaction）：脫顆粒後 6-12 小時，嗜酸性球與嗜鹼性球浸潤',
    'IL-31 由活化 Th2 細胞產生 → 結合 IL-31RA/OSMR → 直接活化感覺神經元 → 瘙癢',
    'JAK-STAT 路徑是 IL-4/IL-13/IL-31 等多種細胞因子的共同信號傳導通路',
    '慢性過敏：Th1/Th17 加入 → IFN-γ/IL-17 → 表皮增生與苔蘚化',
    '皮膚屏障缺陷（filaggrin 減少、ceramide 異常）增加經皮致敏（epicutaneous sensitization）',
    'Type IV 過敏在跳蚤過敏（FAD）與接觸性過敏中扮演重要角色',
  ],
  body: `# 過敏反應機轉

## 一、核心概念與機轉 (Core Concept & Mechanism)



### Type I 過敏反應（IgE 介導即時型）
### 致敏階段（Sensitization）
1. 過敏原穿透受損皮膚屏障（或經呼吸道/腸道暴露）
2. 朗格漢斯細胞/樹突狀細胞捕獲過敏原
3. APC 遷移至局部淋巴結，呈現抗原至 naive T 細胞
4. 在 IL-4 環境下 → Th2 分化
5. Th2 細胞產生 IL-4, IL-13 → 驅動 B 細胞 IgE class switch
6. Allergen-specific IgE 進入循環 → 結合肥大細胞表面 FcεRI
7. 此時動物已「致敏」但無症狀

### 效應階段（Elicitation）
1. 再次暴露相同過敏原
2. 過敏原交聯結合在肥大細胞表面相鄰的 IgE 分子
3. FcεRI 交聯 → 啟動細胞內信號傳導（PKC, MAPK pathway）
4. **即時反應（秒-分鐘）**：脫顆粒釋放預製介質
   - 組胺 → 血管擴張、通透性增加、瘙癢（H1 受體）
   - 蛋白酶（tryptase, chymase）→ 組織損傷
5. **新合成介質（分鐘-小時）**：
   - 白三烯（LTC4/D4/E4）→ 支氣管收縮、血管通透性
   - 前列腺素（PGD2）→ 血管擴張
   - 血小板活化因子（PAF）→ 嗜酸性球趨化

### 晚期反應（Late-Phase Reaction）
- 脫顆粒後 6-12 小時
- 肥大細胞產生趨化因子 → 嗜酸性球、嗜鹼性球、Th2 細胞浸潤
- 嗜酸性球釋放毒性蛋白（MBP, ECP）→ 組織損傷
- 延長炎症反應

### 瘙癢信號傳導
### IL-31 路徑
- IL-31 主要由活化 Th2 細胞產生
- 結合受體複合物：IL-31RA + OSMR（位於背根神經節感覺神經元）
- 啟動 JAK1/JAK2 → STAT3 磷酸化 → 神經元活化 → 瘙癢信號
- 信號經 C 纖維傳至脊髓背角 → 上行至大腦皮質 → 瘙癢感知

### JAK-STAT 路徑
- 多種促炎/促瘙癢細胞因子的共同信號通路
- IL-4/IL-13 → JAK1/JAK3 → STAT6 → Th2 分化
- IL-31 → JAK1/JAK2 → STAT3 → 瘙癢
- Oclacitinib 抑制 JAK1 → 同時阻斷 IL-31 與 IL-4 信號

### 慢性過敏反應的免疫轉變
急性期 Th2 為主 → 慢性期加入 Th1（IFN-γ）與 Th17（IL-17）→ 表皮增生、苔蘚化、色素沉著

### 經皮致敏（Epicutaneous Sensitization）
皮膚屏障缺陷（filaggrin 減少、ceramide 異常）→ 過敏原更容易穿透 → 增加致敏機會。這解釋了為何屏障修復（保濕、必需脂肪酸）是 CAD 管理的重要一環。

[圖片:Type I 過敏反應從致敏到效應的完整路徑圖]

## 二、臨床意義 (Clinical Significance)

此概念在臨床實務中具有重要應用價值，有助於疾病的診斷、治療決策與預後評估。

## 三、人醫借鑒 (Translational Insights)

| 人醫工具/概念 | 獸醫應用潛力 | 現況 |
|-------------|-------------|------|
| Dupilumab（抗 IL-4/IL-13 單抗） | 犬 AD 的抗細胞激素單抗開發 | 犬 anti-IL-31（Lokivetmab）已上市，anti-IL-4/13 研究中 |
| 過敏原免疫療法（AIT）次世代技術 | 舌下免疫療法（SLIT）、肽段免疫療法 | 犬 SLIT 已有商業化產品 |
| 光動力療法（PDT） | 犬淺表腫瘤/角化異常的非手術治療 | 人醫成熟，獸醫病例報告增加 |
| 生物製劑（biologics） | 犬自體免疫皮膚病的精準治療 | 獸醫可用生物製劑仍有限 |

## 四、臨床爭議與知識空缺 (Controversies & Knowledge Gaps)

| 爭議議題 | 現況 | Evidence Level |
|---------|------|---------------|
| 犬膿皮症的經驗性 vs 培養導引抗生素選擇 | MRSP 盛行率升高使經驗性治療風險增加 | Level II |
| 犬食物不良反應的排除飲食試驗持續時間 | 傳統 8 週 vs 新研究建議 6 週可能足夠 | Level II |
| 犬蠕形蟎蟲症是否需治療至兩次皮膚刮搔陰性 | 傳統標準 vs 較短療程的新證據 | Level III |
| 貓嗜酸球肉芽腫複合體的分類系統 | 現有分類是否反映不同病因仍不確定 | Level IV |`,
  clinical_pearl: '理解 JAK-STAT 路徑是理解現代皮膚科靶向治療的關鍵。Oclacitinib 抑制 JAK1 → 同時阻斷 IL-31（止癢）和 IL-4/IL-13（抗炎），這就是為什麼它 4-24 小時內就能止癢。Lokivetmab 只阻斷 IL-31 → 單純止癢但不影響其他免疫路徑，副作用最少。Cyclosporine 則直接抑制 T 細胞活化 → 起效慢（4-6 週）但免疫調節效果全面。',
  common_mistakes: [
    '混淆致敏階段（首次暴露，無症狀）與效應階段（再次暴露，出現症狀）',
    '不理解即時反應與晚期反應的時間差，導致臨床判斷錯誤',
    '忽略皮膚屏障缺陷在過敏致敏中的重要角色',
    '不了解 JAK-STAT 路徑導致無法解釋靶向治療的作用機制',
  ],
  disease_data: null,
  diagnostic_data: null,
  procedure_data: null,
  visual_placeholders: [
    { position: 'Type I 過敏段落後', type: 'flowchart', description: 'Type I 過敏反應致敏→效應完整路徑圖' },
    { position: 'JAK-STAT 段落後', type: 'flowchart', description: 'JAK-STAT 信號通路與藥物作用靶點圖' },
  ],
  interactive_placeholders: [
    { position: '全文末尾', type: 'drug_comparison', description: '靶向治療機轉比較互動工具' },
  ],
  drug_api_links: ['Oclacitinib', 'Lokivetmab', 'Cyclosporine'],
  references: [
    { type: 'textbook', citation: "Miller WH, Griffin CE, Campbell KL. Muller and Kirk's Small Animal Dermatology, 7th ed. Elsevier, 2013. Chapter 8: Allergic Skin Diseases.", relevance: '過敏反應機轉與過敏性皮膚病' },
    { type: 'journal', citation: 'Gonzales AJ et al. Interleukin-31: its role in canine pruritus and naturally occurring canine atopic dermatitis. Vet Dermatol. 2013;24(1):48-e12.', relevance: 'IL-31 在犬瘙癢中的角色' },
    { type: 'journal', citation: 'Marsella R et al. Current understanding of the role of the skin barrier in atopic dermatitis. Ann Allergy Asthma Immunol. 2013;110:S5-S8.', relevance: '皮膚屏障與經皮致敏' },
    { type: 'guideline', citation: 'Olivry T et al. Treatment of canine atopic dermatitis: 2015 updated guidelines from ICADA. BMC Vet Dermatol. 2015;26:210-e49.', relevance: 'ICADA 治療指引中的機轉基礎' },
  ],
  is_current: true,
  created_at: now,
};

/** 角化異常機轉 — L2 機轉型 */
const contentKeratinization: NodeContent = {
  id: 'CONTENT-DERM-L2-002',
  node_id: 'DERM-L2-002',
  version: 1,
  summary: '角化異常（keratinization disorders）是指表皮角質細胞分化與脫屑過程的病理性改變，臨床表現為異常的鱗屑、皮脂分泌與毛囊角化。角化過程涉及角質細胞從基底層向角質層的有序分化，包括角蛋白表達切換、角質化包膜形成與細胞間脂質的規律排列。異常可為原發性（遺傳性角化缺陷）或繼發性（過敏、內分泌、營養缺乏引起）。臨床上常見的脂漏性皮膚炎、毛囊角化症與掌蹠角化過度均與此機轉相關。',
  learning_objectives: [
    '描述正常角質化過程的分子事件順序',
    '區分原發性（遺傳性）與繼發性角化異常',
    '說明皮膚屏障功能障礙的分子基礎（filaggrin、ceramides）',
    '列舉常見的角化異常臨床表現與品種易感性',
  ],
  key_points: [
    '正常角質化：基底細胞 → 棘層（K1/K10 表達）→ 顆粒層（profilaggrin → filaggrin）→ 角質層',
    '角質化包膜（cornified envelope）由 involucrin、loricrin 等蛋白質交聯構成',
    '細胞間脂質（ceramides、cholesterol、fatty acids）以層狀結構排列，維持屏障功能',
    '原發性角化異常：遺傳性皮脂腺腺炎（Akita, Standard Poodle）、角化棘皮瘤',
    '繼發性角化異常：過敏性皮膚病、甲狀腺低下、Cushing 症候群、營養缺乏（鋅、維生素 A）',
    '表皮更新週期正常約 21 天，角化異常時可加速至 7-8 天（過度鱗屑）',
    'Filaggrin 缺乏 → 天然保濕因子（NMF）減少 → TEWL 增加 → 皮膚乾燥與屏障受損',
    '脂漏症分乾性（seborrhea sicca）與油性（seborrhea oleosa），常混合存在',
  ],
  body: `# 角化異常機轉

## 一、核心概念與機轉 (Core Concept & Mechanism)



### 正常角質化過程
### 分子事件順序
1. **基底層**：幹細胞分裂 → 子細胞進入分化程序
2. **棘層**：角蛋白切換（K5/K14 → K1/K10）、橋粒連接強化
3. **顆粒層**：
   - Profilaggrin → filaggrin → 聚合角蛋白絲為緻密束
   - 層狀體（lamellar bodies）分泌脂質至細胞間隙
   - 角質化包膜開始形成（involucrin, loricrin 交聯）
4. **角質層**：
   - 核與胞器消失 → 扁平無核 corneocytes
   - 細胞間脂質以層狀結構排列 → 屏障功能
   - Filaggrin 降解 → 天然保濕因子（NMF）→ 保水

### 正常脫屑
- 角質層最外層細胞規律脫落（不可見的微小鱗屑）
- 脫屑速率 = 基底層增殖速率 → 動態平衡

### 角化異常的病理分類
### 增殖性角化異常
- 基底層增殖加速 → 表皮更新週期縮短（21 天 → 7-8 天）
- 角質細胞來不及完成正常分化 → 不成熟角質細胞堆積
- 臨床表現：大量鱗屑（乾性或油性）

### 滯留性角化異常
- 角質細胞脫屑機制異常 → corneocytes 黏附增加
- Corneodesmosomes 降解減少 → 角質層增厚
- 臨床表現：角化過度（hyperkeratosis），如足墊角化

### 脂質代謝異常
- Ceramide 合成減少或組成改變 → 屏障功能受損
- 皮脂腺分泌異常 → 油性或乾性脂漏
- 與 CAD 的皮膚屏障缺陷密切相關

### 原發性角化異常（遺傳性）
| 疾病 | 品種 | 特徵 |
|------|------|------|
| 原發性皮脂漏 | 美國可卡犬、英國雪達犬 | 油性脂漏、異味、繼發感染 |
| 皮脂腺腺炎 | 秋田犬、標準貴賓犬 | 皮脂腺破壞 → 乾性脫屑 |
| 魚鱗癬 | 金毛尋回犬、傑克羅素梗 | 出生即有廣泛鱗屑 |
| 鼻部角化過度 | 拉布拉多、可卡犬 | 鼻平面龜裂角化 |

### 繼發性角化異常
### 過敏性皮膚病
- 慢性炎症 → 表皮增殖加速 → 鱗屑增加
- 屏障缺陷 → ceramide 減少 → TEWL 增加

### 內分泌疾病
- 甲狀腺低下 → 表皮更新減慢 + 皮脂分泌改變 → 乾性脂漏
- Cushing → 皮膚萎縮 + 鈣化

### 營養缺乏
- 鋅缺乏（Zinc-responsive dermatosis）：好發西伯利亞哈士奇
- 維生素 A 缺乏：毛囊角化過度

[圖片:正常角質化 vs 異常角質化的分子層面比較圖]

## 二、臨床意義 (Clinical Significance)

此概念在臨床實務中具有重要應用價值，有助於疾病的診斷、治療決策與預後評估。

## 三、人醫借鑒 (Translational Insights)

| 人醫工具/概念 | 獸醫應用潛力 | 現況 |
|-------------|-------------|------|
| Dupilumab（抗 IL-4/IL-13 單抗） | 犬 AD 的抗細胞激素單抗開發 | 犬 anti-IL-31（Lokivetmab）已上市，anti-IL-4/13 研究中 |
| 過敏原免疫療法（AIT）次世代技術 | 舌下免疫療法（SLIT）、肽段免疫療法 | 犬 SLIT 已有商業化產品 |
| 光動力療法（PDT） | 犬淺表腫瘤/角化異常的非手術治療 | 人醫成熟，獸醫病例報告增加 |
| 生物製劑（biologics） | 犬自體免疫皮膚病的精準治療 | 獸醫可用生物製劑仍有限 |

## 四、臨床爭議與知識空缺 (Controversies & Knowledge Gaps)

| 爭議議題 | 現況 | Evidence Level |
|---------|------|---------------|
| 犬膿皮症的經驗性 vs 培養導引抗生素選擇 | MRSP 盛行率升高使經驗性治療風險增加 | Level II |
| 犬食物不良反應的排除飲食試驗持續時間 | 傳統 8 週 vs 新研究建議 6 週可能足夠 | Level II |
| 犬蠕形蟎蟲症是否需治療至兩次皮膚刮搔陰性 | 傳統標準 vs 較短療程的新證據 | Level III |
| 貓嗜酸球肉芽腫複合體的分類系統 | 現有分類是否反映不同病因仍不確定 | Level IV |`,
  clinical_pearl: '當你看到一隻犬有廣泛鱗屑時，先問自己：這是原發性還是繼發性？大多數情況下是繼發的——過敏性皮膚病是最常見原因。先治療潛在過敏，鱗屑通常會改善。如果沒有可辨識的潛在病因，再考慮原發性角化異常。秋田犬的皮脂腺腺炎和金毛的魚鱗癬是台灣偶爾可見的原發性角化疾病。',
  common_mistakes: [
    '未區分原發性與繼發性角化異常，直接使用角質溶解劑而不治療根本原因',
    '忽略甲狀腺低下作為繼發性脂漏的常見原因（應檢測 T4/TSH）',
    '將所有鱗屑性皮膚病都歸為「脂漏症」而不進一步追查病因',
    '不了解皮膚屏障功能的分子基礎而無法解釋屏障修復治療的原理',
  ],
  disease_data: null,
  diagnostic_data: null,
  procedure_data: null,
  visual_placeholders: [
    { position: '正常角質化段落後', type: 'annotated_image', description: '正常角質化分子事件圖' },
    { position: '原發性角化異常段落後', type: 'comparison_table', description: '原發性角化異常品種-疾病對照表' },
  ],
  interactive_placeholders: [],
  drug_api_links: [],
  references: [
    { type: 'textbook', citation: "Miller WH, Griffin CE, Campbell KL. Muller and Kirk's Small Animal Dermatology, 7th ed. Elsevier, 2013. Chapter 11: Keratinization Defects.", relevance: '角化異常完整章節' },
    { type: 'journal', citation: 'Marsella R et al. Current understanding of the role of the skin barrier in atopic dermatitis. Ann Allergy Asthma Immunol. 2013;110:S5-S8.', relevance: '皮膚屏障功能的分子基礎' },
    { type: 'journal', citation: 'Credille KM et al. The effects of thyroid hormones on the skin of Beagle dogs. J Vet Intern Med. 2001;15(6):539-546.', relevance: '甲狀腺激素對皮膚角化的影響' },
    { type: 'guideline', citation: 'Noli C, Colombo S, Cornegliani L, et al. Quality of life of dogs with skin diseases and their owners. Part 2: Administration of a questionnaire in various skin diseases and correlation to efficacy of therapy. Vet Dermatol. 2011;22(4):344-351.', relevance: 'WAVD 生活品質評估指引——角化異常對生活品質影響' },
  ],
  is_current: true,
  created_at: now,
};

/** 自體免疫皮膚病機轉 — L2 機轉型 */
const contentAutoimmuneMechanism: NodeContent = {
  id: 'CONTENT-DERM-L2-003',
  node_id: 'DERM-L2-003',
  version: 1,
  summary: '自體免疫性皮膚病是免疫系統錯誤攻擊自身皮膚成分的疾病群。犬貓中以天疱瘡群（pemphigus group，自體抗體攻擊表皮細胞間黏附結構）最常見，其次為狼瘡群（lupus group，攻擊基底膜帶）。核心機轉涉及免疫耐受（self-tolerance）的喪失，導致自體反應性 T 細胞和 B 細胞活化，產生攻擊自身抗原的自體抗體或效應 T 細胞。觸發因素可能包括藥物、紫外線、慢性炎症與遺傳易感性。',
  learning_objectives: [
    '描述免疫耐受的中樞與周邊機制',
    '說明天疱瘡群中自體抗體攻擊 desmogleins 的棘層松解機轉',
    '區分天疱瘡群（表皮內）與類天疱瘡/狼瘡群（基底膜帶）的免疫靶點差異',
    '列舉可能觸發自體免疫皮膚病的因素',
  ],
  key_points: [
    '免疫耐受喪失是所有自體免疫疾病的根本：中樞耐受（胸腺/骨髓）+ 周邊耐受（Treg, anergy）',
    '天疱瘡群靶點：desmoglein-1（PF, 表淺）或 desmoglein-3（PV, 深層）',
    '棘層松解機轉：IgG 結合 desmoglein → 直接干擾橋粒黏附 + p38 MAPK 啟動 → 細胞骨架重組',
    '狼瘡群靶點：基底膜帶成分（Type XVII collagen, laminin-332）',
    'Type II 過敏反應：自體抗體結合組織抗原 → 補體活化 + ADCC → 組織損傷',
    'Type III 過敏反應：免疫複合體沉積 → 補體活化 → 血管炎（SLE 相關）',
    '觸發因素：藥物（methimazole 觸發貓 PF）、UV 暴露、慢性皮膚炎症（epitope spreading）',
    '遺傳易感性：秋田犬、鬆獅犬、德國牧羊犬 PF 盛行率較高',
  ],
  body: `# 自體免疫皮膚病機轉

## 一、核心概念與機轉 (Core Concept & Mechanism)



### 免疫耐受的維持與喪失
### 中樞耐受
- **胸腺**：T 細胞發育過程中，強烈識別自身抗原的 T 細胞被刪除（negative selection）
- **骨髓**：自體反應性 B 細胞被清除或無能化（anergy）

### 周邊耐受
- **調節性 T 細胞（Treg）**：CD4+CD25+FoxP3+ → 分泌 IL-10, TGF-β → 抑制自體反應
- **免疫無能（Anergy）**：T 細胞接收 Signal 1（TCR）但缺乏 Signal 2（共刺激）→ 功能性失活
- **免疫忽視（Ignorance）**：隔絕抗原（如眼內、腦內）

### 耐受喪失的機制
1. **分子模擬**：病原抗原與自身抗原結構相似 → 交叉反應
2. **表位擴展（Epitope spreading）**：慢性炎症暴露隱藏的自身抗原 → 新的自體免疫反應
3. **旁觀者活化**：局部炎症環境活化原本被抑制的自體反應性 T 細胞
4. **Treg 功能缺陷**：遺傳性或後天性 Treg 抑制功能不足

### 天疱瘡群的棘層松解機轉
### 抗體直接致病
1. 自體抗體（IgG）結合角質細胞表面的 desmoglein-1（PF）或 desmoglein-3（PV）
2. **空間位阻效應**：抗體結合阻斷 desmoglein 的同源黏附功能
3. **細胞內信號啟動**：抗體結合 → p38 MAPK 活化 → 角蛋白絲收縮 → 細胞骨架重組
4. **橋粒內化**：抗體交聯 desmoglein → 內吞作用 → 細胞表面 desmoglein 數量減少
5. 結果：角質細胞彼此分離（acantholysis）→ 表皮內裂隙 → 膿皱形成

### 補體與免疫細胞參與
- IgG 活化經典補體路徑 → C3a/C5a → 嗜中性球趨化
- 嗜中性球釋放蛋白酶 → 加速橋粒破壞
- 但補體不是必需的——IgG 單獨即可引起棘層松解

### 狼瘡群的基底膜帶攻擊
### 靶點
- Type XVII collagen（BP180）：表皮基底膜區域
- Laminin-332, Type VII collagen：錨定纖維

### 機轉
- 自體抗體結合基底膜帶成分 → 補體活化 → 嗜中性球浸潤 → 蛋白酶釋放 → 真表皮分離 → 水泡/潰瘍

### 觸發因素
| 因素 | 機制 | 例子 |
|------|------|------|
| 藥物 | 藥物修飾自身蛋白 → 新抗原暴露 | Methimazole → 貓 PF |
| UV 光 | 角質細胞凋亡 → 自身抗原暴露 | UV 加重鼻部 DLE |
| 慢性炎症 | Epitope spreading | 慢性膿皮症 → 偶發 PF |
| 遺傳 | MHC class II 基因多態性 | 秋田犬 PF 高盛行率 |

[圖片:天疱瘡棘層松解機轉分子層面圖解]

## 二、臨床意義 (Clinical Significance)

此概念在臨床實務中具有重要應用價值，有助於疾病的診斷、治療決策與預後評估。

## 三、人醫借鑒 (Translational Insights)

| 人醫工具/概念 | 獸醫應用潛力 | 現況 |
|-------------|-------------|------|
| Dupilumab（抗 IL-4/IL-13 單抗） | 犬 AD 的抗細胞激素單抗開發 | 犬 anti-IL-31（Lokivetmab）已上市，anti-IL-4/13 研究中 |
| 過敏原免疫療法（AIT）次世代技術 | 舌下免疫療法（SLIT）、肽段免疫療法 | 犬 SLIT 已有商業化產品 |
| 光動力療法（PDT） | 犬淺表腫瘤/角化異常的非手術治療 | 人醫成熟，獸醫病例報告增加 |
| 生物製劑（biologics） | 犬自體免疫皮膚病的精準治療 | 獸醫可用生物製劑仍有限 |

## 四、臨床爭議與知識空缺 (Controversies & Knowledge Gaps)

| 爭議議題 | 現況 | Evidence Level |
|---------|------|---------------|
| 犬膿皮症的經驗性 vs 培養導引抗生素選擇 | MRSP 盛行率升高使經驗性治療風險增加 | Level II |
| 犬食物不良反應的排除飲食試驗持續時間 | 傳統 8 週 vs 新研究建議 6 週可能足夠 | Level II |
| 犬蠕形蟎蟲症是否需治療至兩次皮膚刮搔陰性 | 傳統標準 vs 較短療程的新證據 | Level III |
| 貓嗜酸球肉芽腫複合體的分類系統 | 現有分類是否反映不同病因仍不確定 | Level IV |`,
  clinical_pearl: '臨床上最重要的概念是「表位擴展」——慢性皮膚炎症可以暴露原本被隱藏的自身抗原，觸發自體免疫反應。這解釋了為什麼有些犬在長期膿皮症或過敏之後突然發展出天疱瘡。另外，methimazole 是貓 PF 的已知觸發藥物——如果一隻正在使用 methimazole 的甲亢貓突然出現面部結痂，務必考慮藥物誘發 PF。',
  common_mistakes: [
    '認為自體免疫疾病只靠抗體檢測就能診斷（需要組織病理學確診）',
    '不了解棘層松解的分子機轉導致無法解釋天疱瘡的病理學發現',
    '忽略藥物作為自體免疫觸發因素的可能性',
    '混淆天疱瘡群（表皮內分離）與類天疱瘡/狼瘡群（真表皮分離）的機轉差異',
  ],
  disease_data: null,
  diagnostic_data: null,
  procedure_data: null,
  visual_placeholders: [
    { position: '棘層松解機轉段落後', type: 'flowchart', description: '天疱瘡棘層松解分子機轉流程圖' },
    { position: '觸發因素段落後', type: 'comparison_table', description: '天疱瘡群 vs 狼瘡群免疫靶點比較表' },
  ],
  interactive_placeholders: [],
  drug_api_links: ['Prednisolone', 'Azathioprine', 'Mycophenolate'],
  references: [
    { type: 'textbook', citation: "Miller WH, Griffin CE, Campbell KL. Muller and Kirk's Small Animal Dermatology, 7th ed. Elsevier, 2013. Chapter 9: Autoimmune and Immune-Mediated Dermatoses.", relevance: '自體免疫皮膚病完整章節' },
    { type: 'journal', citation: 'Olivry T. A review of autoimmune skin diseases in domestic animals: I - Superficial pemphigus. Vet Dermatol. 2006;17(5):291-305.', relevance: '天疱瘡免疫機轉詳細回顧' },
    { type: 'journal', citation: 'Bizikova P et al. Review: Clinical and histological manifestations of canine pemphigus foliaceus. Vet Dermatol. 2014;25(4):299-e75.', relevance: '犬天疱瘡病理機轉與臨床表現' },
    { type: 'guideline', citation: 'Mueller RS, Nuttall T, Prost C, et al. Treatment of the canine atopic dermatitis — 2023 updated guidelines from ICADA. Vet Dermatol. 2023;34(4):297-316.', relevance: 'ICADA 指引中免疫調節治療的機轉基礎' },
  ],
  is_current: true,
  created_at: now,
};

/** 皮膚病史與身體檢查 — L4 診斷型 */
const contentDermHistory: NodeContent = {
  id: 'CONTENT-DERM-L4-001',
  node_id: 'DERM-L4-001',
  version: 1,
  summary: '皮膚科病史採集與身體檢查是所有皮膚病診斷的起點，也是最重要的一步。系統性的皮膚科病史應涵蓋發病年齡、病程長短、季節性、瘙癢程度（PVAS 評分）、病灶分佈、用藥反應、飲食史、跳蚤預防史與同居動物/人類症狀。皮膚科理學檢查需辨識原發性病灶（丘疹、膿皰、水泡）與繼發性病灶（表皮脫屑環、苔蘚化、色素沉著），並記錄分佈模式以建立鑑別診斷清單。',
  learning_objectives: [
    '執行系統性皮膚科病史採集並辨識關鍵診斷線索',
    '使用 PVAS 評分量化瘙癢程度',
    '辨識並正確命名原發性與繼發性皮膚病灶',
    '根據病灶分佈模式建立鑑別診斷清單',
    '規劃初步診斷檢查計畫',
  ],
  key_points: [
    '發病年齡是重要線索：< 1 歲（蠕形蟎、癬菌）、1-3 歲（CAD）、> 6 歲（內分泌、腫瘤）',
    'PVAS（Pruritus Visual Analog Scale）0-10 分量化瘙癢：0=無，10=持續自殘性',
    '季節性瘙癢 → 環境過敏（CAD）；非季節性 → 食物不良反應、疥蟎',
    '原發性病灶：丘疹（papule）、膿皰（pustule）、水泡（vesicle）、結節（nodule）、風團（wheal）',
    '繼發性病灶：表皮脫屑環（epidermal collarette）、苔蘚化、色素沉著、脫毛、結痂',
    '分佈模式指向診斷：面部/腋下/指間=CAD；腰背/尾根=FAD；耳翼邊緣/肘部=疥蟎',
    '「先瘙癢再病灶」→ 過敏性；「先病灶再瘙癢」→ 感染性或自體免疫',
    '每次皮膚科就診必做：皮膚細胞學 + 皮膚刮搔（不可跳過）',
  ],
  body: `# 皮膚病史與身體檢查

## 一、檢查原理與適應症 (Principles & Indications)



### 系統性病史採集
### 核心問題清單

**發病資訊**
- 首次發病年齡？（幼犬 vs 成犬差異）
- 急性發病還是逐漸進展？
- 季節性加重嗎？（春夏=花粉/跳蚤，全年=塵蟎/食物）
- 是否曾完全緩解過？

**瘙癢評估**
- 瘙癢程度 PVAS 0-10 分？
- 搔抓、舔咬、磨蹭、搖頭？
- 瘙癢先於病灶出現，還是病灶先出現？
- 瘙癢在夜間加重嗎？

**用藥反應**
- 糖皮質激素是否有效？（CAD 通常有效；疥蟎反應差）
- 抗生素治療後是否改善？（膿皮症會改善但停藥復發）
- 目前使用的跳蚤預防產品與頻率？

**飲食與環境**
- 目前飲食內容（品牌、成分）
- 曾否進行排除飲食試驗？
- 室內犬還是戶外犬？
- 同居動物有無類似症狀？家庭成員有皮膚瘙癢嗎？（疥蟎線索）

### 皮膚科理學檢查
### 原發性病灶（Primary Lesions）
由疾病直接產生，診斷價值最高：

| 病灶 | 描述 | 常見疾病 |
|------|------|----------|
| 丘疹 Papule | 實質性隆起 < 1 cm | 膿皮症、過敏 |
| 膿皰 Pustule | 含膿液的隆起 | 膿皮症、天疱瘡 |
| 水泡 Vesicle | 含透明液的隆起 | 類天疱瘡（罕見） |
| 風團 Wheal | 界限清楚的水腫性隆起 | 蕁麻疹 |
| 結節 Nodule | 實質性隆起 > 1 cm | 腫瘤、肉芽腫 |

### 繼發性病灶（Secondary Lesions）
由原發性病灶演變或搔抓造成：

| 病灶 | 描述 | 臨床意義 |
|------|------|----------|
| 表皮脫屑環 | 環形鱗屑邊緣 | 淺層膿皮症特徵 |
| 苔蘚化 | 皮膚增厚粗糙 | 慢性瘙癢/炎症 |
| 色素沉著 | 黑色素增加 | 慢性炎症後 |
| 脫毛 | 毛髮缺失 | 多種原因 |
| 結痂 Crust | 乾燥血清/膿液 | 感染、自體免疫 |

### 分佈模式

- **面部、耳翼、腋下、指間** → 犬異位性皮膚炎
- **腰背部、尾根** → 跳蚤過敏性皮膚炎
- **耳翼邊緣、肘部、踝部** → 疥蟎症
- **對稱性非瘙癢脫毛** → 內分泌疾病
- **面部對稱性結痂** → 天疱瘡

### 初步診斷計畫
每次皮膚科就診的最低標準檢查：
1. 皮膚刮搔（深層 + 淺層）→ 排除寄生蟲
2. 皮膚細胞學（膠帶壓貼/直接抹片）→ 細菌/酵母菌/棘層松解細胞
3. 毛髮鏡檢（Trichogram）→ 評估毛根與真菌孢子
4. Wood 燈（如懷疑癬菌）

[圖片:皮膚科理學檢查系統性流程圖]

## 二、判讀要點 (Interpretation)

判讀結果時需結合臨床表現綜合評估，注意假陽性與假陰性的可能性，必要時進行重複檢測或追加其他檢查。

## 三、常見陷阱 (Pitfalls)

檢查結果的判讀需注意取樣品質、檢體保存條件及個體差異等因素可能導致的誤判。

## 四、人醫借鑒 (Translational Insights)

| 人醫工具/概念 | 獸醫應用潛力 | 現況 |
|-------------|-------------|------|
| 皮膚鏡（dermoscopy） | 犬皮膚病灶非侵入性放大觀察 | 人醫標準工具，獸醫研究增加 |
| 共聚焦顯微鏡（confocal microscopy） | 活體皮膚細胞學——免組織切片 | 研究工具，臨床應用前 |
| 次世代定序（NGS）微生物鑑定 | 犬皮膚感染病原精準鑑定 | 研究中，成本尚高 |

## 五、臨床爭議與知識空缺 (Controversies & Knowledge Gaps)

| 爭議議題 | 現況 | Evidence Level |
|---------|------|---------------|
| 犬過敏原特異性 IgE 檢測（血清 vs 皮膚點刺）的一致性 | 兩種方法結果不一致率高達 30-40% | Level II |
| 犬皮膚組織病理的品質與標準化 | 不同病理醫師間判讀一致性待改善 | Level III |`,
  clinical_pearl: '病史中最有價值的三個問題是：(1) 發病年齡——1-3 歲發病高度提示 CAD；(2) 瘙癢先於病灶還是病灶先於瘙癢——過敏先癢再破皮，感染/自體免疫先長病灶再癢；(3) 對類固醇的反應——過敏通常有效，疥蟎與天疱瘡反應差。這三個問題的答案可以讓你在碰到動物之前就縮小一半的鑑別診斷。',
  common_mistakes: [
    '病史採集不夠系統化，遺漏關鍵資訊（跳蚤預防史、飲食成分）',
    '無法正確辨識原發性與繼發性病灶（診斷原發性病灶更有價值）',
    '忽略分佈模式的診斷價值（不同疾病有特徵性分佈）',
    '跳過基本診斷檢查（刮搔與細胞學）直接經驗性治療',
    '未使用標準化評分工具（PVAS、CADESI-4）量化病情',
  ],
  disease_data: null,
  diagnostic_data: {
    indication: [
      '所有皮膚科初診病例',
      '反覆/慢性皮膚病的系統性評估',
      '治療反應不佳的病例重新評估',
      '瘙癢性皮膚病的鑑別診斷',
    ],
    contraindication: [
      '無絕對禁忌症——每個皮膚科病例都應進行完整病史採集與理學檢查',
    ],
    technique: '系統性病史：使用標準化問卷涵蓋發病年齡、病程、季節性、瘙癢 PVAS 評分、分佈、用藥反應、飲食史、跳蚤預防、同居動物症狀。理學檢查：在自然光或明亮光源下，從頭到尾系統性檢查全身皮膚，辨識並記錄原發/繼發性病灶類型與分佈。使用皮膚科分佈圖記錄病灶位置。',
    normal_findings: [
      { finding: '皮膚彈性正常', description: '皮膚回彈迅速，無脫水或皮膚增厚', significance: '排除慢性皮膚病與脫水' },
      { finding: '被毛光澤均勻', description: '毛髮密度均勻、光澤正常、無脫毛斑', significance: '排除脫毛性疾病' },
      { finding: '耳道清潔', description: '耳道無紅腫、無異常分泌物', significance: '排除外耳炎' },
    ],
    abnormal_findings: [
      { finding: '丘疹膿皰', description: '紅色實質隆起（丘疹）或含膿液隆起（膿皰），毛囊中心分佈', significance: '高度提示膿皮症；膿皰亦見於天疱瘡（需細胞學區分）' },
      { finding: '表皮脫屑環', description: '環形鱗屑邊緣向中心翻起，中央色素沉著', significance: '淺層膿皮症最特徵性病灶' },
      { finding: '苔蘚化與色素沉著', description: '皮膚增厚粗糙伴黑色素沉著', significance: '慢性瘙癢/炎症指標，常見於 CAD 和馬拉色菌' },
      { finding: '特徵性分佈模式', description: '面部/腋下/指間 或 腰背/尾根 或 耳翼/肘部', significance: '分佈模式可縮小鑑別診斷至 2-3 個疾病' },
    ],
    interpretation_guide: '1. 綜合病史線索建立初步鑑別診斷清單。2. 理學檢查確認或修改鑑別清單。3. 根據病灶類型與分佈優先排列最可能診斷。4. 規劃最小但足夠的診斷檢查計畫。5. 永遠從最基本的檢查開始（刮搔 + 細胞學）。',
    pitfalls: [
      '長毛犬的病灶可能被毛髮遮蓋——必須分開毛髮仔細檢查皮膚表面',
      '繼發性病灶（苔蘚化、色素沉著）可掩蓋原發性病灶——尋找新發/活動性病灶邊緣',
      '飼主描述的「瘙癢」可能不準確——需要具體詢問搔抓、舔咬、磨蹭等行為',
      '短時間門診中可能遺漏病史——使用標準化問卷提前填寫',
    ],
    sensitivity_specificity: '病史與理學檢查的診斷價值取決於系統性與經驗。Favrot 標準（8 項中 5 項）對 CAD 的敏感度 85%、特異度 79%。Pinnal-pedal reflex 對疥蟎的敏感度約 80%。分佈模式辨識經驗越豐富，診斷準確率越高。',
    cost_benefit: '零額外成本，僅需醫師的時間與經驗。是所有診斷流程的基礎，可在進行任何額外檢查之前大幅縮小鑑別診斷範圍。系統性病史可節省後續不必要的檢查費用。',
  },
  procedure_data: null,
  visual_placeholders: [
    { position: '原發性病灶段落後', type: 'annotated_image', description: '原發性與繼發性皮膚病灶圖鑑' },
    { position: '分佈模式段落後', type: 'annotated_image', description: '犬皮膚病分佈模式與對應疾病圖' },
  ],
  interactive_placeholders: [
    { position: '病史段落', type: 'checklist', description: '皮膚科病史採集標準化檢核表' },
  ],
  drug_api_links: [],
  references: [
    { type: 'textbook', citation: "Miller WH, Griffin CE, Campbell KL. Muller and Kirk's Small Animal Dermatology, 7th ed. Elsevier, 2013. Chapter 1: Diagnostic Methods.", relevance: '皮膚科診斷方法學完整章節' },
    { type: 'journal', citation: 'Favrot C et al. A prospective study on the clinical features of chronic canine atopic dermatitis and its diagnosis. Vet Dermatol. 2010;21(1):23-31.', relevance: 'Favrot 診斷標準與病史評估' },
    { type: 'textbook', citation: 'Hnilica KA, Patterson AP. Small Animal Dermatology: A Color Atlas and Therapeutic Guide, 4th ed. Elsevier, 2017.', relevance: '皮膚病灶辨識彩色圖譜' },
    { type: 'guideline', citation: 'Hensel P, Santoro D, Favrot C, et al. Canine atopic dermatitis: detailed guidelines for diagnosis and allergen identification. BMC Vet Res. 2015;11:196.', relevance: 'ICADA 指引中皮膚病史採集與臨床診斷標準' },
  ],
  is_current: true,
  created_at: now,
};

/** 皮膚細胞學 — L4 診斷型 */
const contentCytology: NodeContent = {
  id: 'CONTENT-DERM-L4-003',
  node_id: 'DERM-L4-003',
  version: 1,
  summary: '皮膚細胞學是獸醫皮膚科最重要且最實用的快速診斷工具。透過膠帶壓貼法（tape impression）、直接抹片（direct impression smear）或膿皰穿刺（pustule aspirate），可在數分鐘內鑑定細菌（球菌/桿菌）、馬拉色菌酵母菌、棘層松解細胞（天疱瘡）及蠕形蟎。Diff-Quik 快速染色是標準染色方法。判讀重點包括：退化性嗜中性球內吞噬球菌=膿皮症、花生形酵母菌=馬拉色菌、圓形深染角質細胞被嗜中性球圍繞=天疱瘡。',
  learning_objectives: [
    '選擇適當的皮膚細胞學取樣方法（膠帶壓貼、直接抹片、膿皰穿刺）',
    '正確執行 Diff-Quik 快速染色',
    '辨識皮膚細胞學中的細菌（球菌、桿菌）與酵母菌（馬拉色菌）',
    '區分膿皮症（退化嗜中性球+吞噬球菌）與天疱瘡（棘層松解細胞）',
    '根據細胞學結果制定治療計畫',
  ],
  key_points: [
    '膠帶壓貼法（tape impression）最簡便：透明膠帶壓貼病灶 → Diff-Quik 染色 → 鏡檢',
    '直接抹片（impression smear）：載玻片直接壓貼潮濕/滲出病灶表面',
    '膿皰穿刺：用針頭穿刺完整膿皰 → 將內容物抹在載玻片上',
    '球菌感染：退化嗜中性球（核腫脹/碎裂）內含吞噬球菌（Staphylococcus）',
    '桿菌感染：嗜中性球吞噬桿菌 → 高度提示 Pseudomonas 等革蘭氏陰性菌',
    '馬拉色菌：花生形/瓶形酵母菌（3-5 μm），每 HPF ≥ 2-3 個有臨床意義',
    '天疱瘡：棘層松解細胞（圓形深染游離角質細胞）+ 非退化嗜中性球 + 無細菌',
    '每次皮膚科就診都應做細胞學——不做細胞學就治療等於蒙眼治療',
  ],
  body: `# 皮膚細胞學

## 一、檢查原理與適應症 (Principles & Indications)



### 取樣方法
### 膠帶壓貼法（Tape Impression Cytology）
最簡便且最常用的方法：
1. 剪取約 3-4 cm 透明膠帶
2. 黏性面反覆壓貼在病灶表面（油脂區域、鱗屑下方、皮膚皺褶）
3. 將膠帶黏貼在載玻片上
4. Diff-Quik 染色（將載玻片連同膠帶依序浸入三缸）
5. 油浸鏡（100x）觀察

**最佳適用情境**：油脂性病灶、馬拉色菌、淺層膿皮症

### 直接抹片（Direct Impression Smear）
1. 載玻片直接壓貼潮濕/滲出/糜爛病灶表面
2. 自然風乾
3. Diff-Quik 染色
4. 先低倍鏡掃描，再油浸鏡觀察

**最佳適用情境**：潮濕性皮膚炎（hot spot）、潰瘍性病灶

### 膿皰穿刺（Pustule Aspirate/Smear）
1. 用 25G 針頭輕輕穿刺完整膿皰
2. 用針頭或載玻片邊緣將內容物薄薄抹開
3. 風乾 → Diff-Quik 染色

**最佳適用情境**：鑑別膿皮症 vs 天疱瘡（最關鍵的應用場景）

### 結痂下方取樣
- 輕輕掀起結痂 → 用載玻片壓貼結痂底面
- 適用於天疱瘡（膿皰脆弱已破裂，但結痂下方仍有棘層松解細胞）

### Diff-Quik 快速染色
1. **固定液**（甲醇）：浸泡 5-10 次
2. **紅色染液**（eosin Y）：浸泡 5-10 次
3. **藍色染液**（methylene blue/thiazine）：浸泡 5-10 次
4. 清水輕沖多餘染料 → 自然風乾

## 二、判讀要點 (Interpretation)

### 膿皮症
- **關鍵特徵**：退化性嗜中性球（核腫脹、碎裂、溶解）+ 吞噬球菌
- 球菌（Staphylococcus）：成對或成串的圓形細菌
- 桿菌：棒狀細菌 → 高度懷疑 Pseudomonas（應做培養藥敏）

### 馬拉色菌
- **關鍵特徵**：花生形/瓶形/足印形酵母菌，3-5 μm
- 正常皮膚偶見 0-1 個/HPF
- ≥ 2-3 個/HPF → 有臨床意義（皮膚）；≥ 5 個/HPF（耳道）

### 天疱瘡
- **關鍵特徵**：大量棘層松解細胞（圓形、深染、游離的角質細胞）
- 被非退化嗜中性球圍繞（形成「煎蛋」外觀）
- **無細菌**——這是與膿皮症的最關鍵區分
- 偶見棘層松解細胞形成「小花環」排列

### 蠕形蟎
- 膠帶壓貼或擠壓後抹片偶可見 Demodex（但皮膚刮搔更可靠）

[圖片:皮膚細胞學四種取樣方法示意圖]
[圖片:膿皮症 vs 天疱瘡 vs 馬拉色菌細胞學比較]

## 三、常見陷阱 (Pitfalls)

檢查結果的判讀需注意取樣品質、檢體保存條件及個體差異等因素可能導致的誤判。

## 四、人醫借鑒 (Translational Insights)

| 人醫工具/概念 | 獸醫應用潛力 | 現況 |
|-------------|-------------|------|
| Dupilumab（抗 IL-4/IL-13 單抗） | 犬 AD 的抗細胞激素單抗開發 | 犬 anti-IL-31（Lokivetmab）已上市，anti-IL-4/13 研究中 |
| 過敏原免疫療法（AIT）次世代技術 | 舌下免疫療法（SLIT）、肽段免疫療法 | 犬 SLIT 已有商業化產品 |
| 光動力療法（PDT） | 犬淺表腫瘤/角化異常的非手術治療 | 人醫成熟，獸醫病例報告增加 |
| 生物製劑（biologics） | 犬自體免疫皮膚病的精準治療 | 獸醫可用生物製劑仍有限 |

## 五、臨床爭議與知識空缺 (Controversies & Knowledge Gaps)

| 爭議議題 | 現況 | Evidence Level |
|---------|------|---------------|
| 犬膿皮症的經驗性 vs 培養導引抗生素選擇 | MRSP 盛行率升高使經驗性治療風險增加 | Level II |
| 犬食物不良反應的排除飲食試驗持續時間 | 傳統 8 週 vs 新研究建議 6 週可能足夠 | Level II |
| 犬蠕形蟎蟲症是否需治療至兩次皮膚刮搔陰性 | 傳統標準 vs 較短療程的新證據 | Level III |
| 貓嗜酸球肉芽腫複合體的分類系統 | 現有分類是否反映不同病因仍不確定 | Level IV |`,
  clinical_pearl: '區分膿皮症與天疱瘡的細胞學判讀是每位獸醫必備技能。記住三個關鍵字：膿皮症=「退化嗜中性球+細菌」；天疱瘡=「棘層松解細胞+無細菌」。如果你在膿皮看似的病灶做了細胞學，看到大量圓形游離角質細胞被嗜中性球圍繞但找不到任何細菌——立刻想到天疱瘡，安排皮膚切片確診。',
  common_mistakes: [
    '不做細胞學就開始治療膿皮症（可能誤診天疱瘡或忽略合併馬拉色菌）',
    '膠帶壓貼取樣部位不當（應選擇油脂最多的皺褶、指間而非乾燥背部）',
    'Diff-Quik 染色浸泡次數不足導致染色過淡',
    '使用低倍鏡看細菌和酵母菌（必須使用油浸鏡 100x）',
    '將角化碎片誤判為棘層松解細胞（棘層松解細胞有圓整邊緣與深染胞質）',
  ],
  disease_data: null,
  diagnostic_data: {
    indication: [
      '所有疑似膿皮症病例（丘疹、膿皰、表皮脫屑環）',
      '疑似馬拉色菌感染（油脂皮膚、特徵異味、指間/皺褶病灶）',
      '鑑別膿皮症 vs 天疱瘡（面部膿皰/結痂）',
      '治療效果監測（治療前後比較微生物數量）',
      '外耳炎的耳道細胞學評估',
    ],
    contraindication: [
      '無絕對禁忌症——皮膚細胞學是無侵入性且零風險的檢查',
    ],
    technique: '膠帶壓貼法：透明膠帶反覆壓貼油脂病灶 → 黏貼於載玻片 → Diff-Quik 三缸依序浸泡各 5-10 次 → 風乾 → 油浸鏡（100x）觀察。直接抹片：載玻片壓貼潮濕病灶 → 風乾 → 染色。膿皰穿刺：25G 針頭穿刺完整膿皰 → 抹片 → 染色。先 4x/10x 低倍掃描整體細胞分佈，再 100x 油浸鏡確認微生物與細胞細節。',
    normal_findings: [
      { finding: '正常角質細胞', description: '扁平無核或少核角質細胞，少量正常菌群', significance: '排除活動性感染' },
      { finding: '偶見馬拉色菌', description: '每 HPF 0-1 個花生形酵母菌', significance: '正常共生範圍，無臨床意義' },
    ],
    abnormal_findings: [
      { finding: '退化嗜中性球+吞噬球菌', description: '核腫脹/碎裂的嗜中性球內含成對圓形球菌', significance: '確診細菌性膿皮症，經驗性 Cephalexin 治療可開始' },
      { finding: '嗜中性球+吞噬桿菌', description: '嗜中性球內含棒狀細菌', significance: '高度懷疑 Pseudomonas 等革蘭氏陰性菌，需做培養藥敏' },
      { finding: '大量馬拉色菌', description: '每 HPF ≥ 2-3 個花生形/瓶形酵母菌', significance: '確診馬拉色菌過度增殖，需抗黴菌治療' },
      { finding: '棘層松解細胞', description: '圓形深染游離角質細胞被非退化嗜中性球圍繞，無細菌', significance: '高度提示天疱瘡，需安排皮膚切片確診' },
      { finding: '嗜酸性球為主的炎症', description: '大量嗜酸性球（雙葉核、紅色顆粒）', significance: '提示過敏反應、嗜酸性肉芽腫（貓）或寄生蟲反應' },
    ],
    interpretation_guide: '1. 低倍鏡（4x-10x）掃描整張載玻片評估細胞密度與分佈。2. 切換至 100x 油浸鏡逐區域觀察。3. 辨識炎症細胞類型（嗜中性球 vs 嗜酸性球）。4. 評估嗜中性球是否退化（核變化）。5. 搜尋細胞內外微生物（球菌、桿菌、酵母菌）。6. 搜尋棘層松解細胞。7. 半定量記錄（每 HPF 計數 5-10 個視野取平均）。',
    pitfalls: [
      '染色過淡看不清微生物——需確保 Diff-Quik 各缸浸泡足夠次數',
      '取樣部位不當——膠帶壓貼應選油脂最多的區域，膿皰穿刺應選完整未破裂的膿皰',
      '混淆角化碎片與棘層松解細胞——棘層松解細胞邊緣圓整且胞質深染',
      '忽略合併感染——膿皮症與馬拉色菌常同時存在，需兩者都仔細評估',
      '標本過厚無法判讀——需將抹片抹得足夠薄',
    ],
    sensitivity_specificity: '皮膚細胞學對膿皮症的敏感度 > 90%（正確取樣下）。對馬拉色菌的敏感度約 70-90%（取樣部位正確時）。對天疱瘡的敏感度約 80-90%（需找到完整膿皰或新鮮結痂下方）。特異度高——見到退化嗜中性球吞噬球菌即可確診膿皮症。',
    cost_benefit: '成本極低（透明膠帶、載玻片、Diff-Quik 染料組），5 分鐘內完成。是皮膚科最高性價比的診斷工具。可避免不必要的經驗性治療，尤其在鑑別膿皮症與天疱瘡時具有關鍵價值。',
  },
  procedure_data: null,
  visual_placeholders: [
    { position: '判讀要點段落後', type: 'comparison_table', description: '膿皮症 vs 天疱瘡 vs 馬拉色菌細胞學比較表' },
    { position: '取樣方法段落後', type: 'annotated_image', description: '四種皮膚細胞學取樣技術步驟圖' },
  ],
  interactive_placeholders: [
    { position: '全文末尾', type: 'microscopy_quiz', description: '虛擬顯微鏡——皮膚細胞學判讀練習' },
  ],
  drug_api_links: [],
  references: [
    { type: 'textbook', citation: "Miller WH, Griffin CE, Campbell KL. Muller and Kirk's Small Animal Dermatology, 7th ed. Elsevier, 2013. Chapter 1: Diagnostic Methods.", relevance: '皮膚細胞學技術與判讀' },
    { type: 'guideline', citation: 'Hillier A et al. Guidelines for the diagnosis and antimicrobial therapy of canine superficial bacterial folliculitis (AAHA/AAVD). Vet Dermatol. 2014;25(3):163-e43.', relevance: 'AAHA/AAVD 指引中細胞學在膿皮症診斷中的角色' },
    { type: 'textbook', citation: 'Raskin RE, Meyer DJ. Canine and Feline Cytology: A Color Atlas and Interpretation Guide, 3rd ed. Elsevier, 2016.', relevance: '獸醫細胞學判讀圖譜' },
    { type: 'journal', citation: 'Saridomichelakis MN et al. An update on the role of cytology in the diagnosis of canine and feline skin diseases. Vet Dermatol. 2017;28(5):457-e108.', relevance: '犬貓皮膚細胞學診斷角色的最新回顧' },
  ],
  is_current: true,
  created_at: now,
};

/** 耳鏡檢查與耳道細胞學 — L4 診斷型 */
const contentOtoscopy: NodeContent = {
  id: 'CONTENT-DERM-L4-004',
  node_id: 'DERM-L4-004',
  version: 1,
  summary: '耳鏡檢查（otoscopy）與耳道細胞學是外耳炎診斷與管理的兩大基石。耳鏡檢查評估耳道紅腫程度、分泌物性質、增生/狹窄程度與鼓膜完整性。耳道細胞學（棉棒取樣 → Diff-Quik 染色 → 油浸鏡檢）鑑定感染微生物類型（球菌、桿菌、馬拉色菌）及炎症程度。兩者結合可指導耳用藥物選擇。video otoscopy 提供更清晰的影像且支援耳道灌洗與異物取出。',
  learning_objectives: [
    '正確執行手持耳鏡檢查並評估耳道與鼓膜',
    '執行耳道細胞學並辨識球菌、桿菌與馬拉色菌',
    '根據細胞學結果選擇適當的耳用製劑',
    '評估鼓膜完整性並了解其對治療選擇的影響',
    '辨識需要進階影像學（CT）評估中耳的指徵',
  ],
  key_points: [
    '犬耳道呈 L 型：垂直段 + 水平段，檢查時需將耳翼向上外側牽引使耳道變直',
    '正常鼓膜：半透明、珍珠白色/淡灰色、可見錘骨柄（manubrium of malleus）',
    '耳道細胞學判讀閾值：球菌 > 5/HPF、桿菌 > 0/HPF（任何桿菌都有意義）、馬拉色菌 > 5/HPF',
    '分泌物顏色線索：棕色蠟狀=馬拉色菌；黃綠色膿性=桿菌（Pseudomonas）；黃色=球菌',
    '鼓膜破裂時禁用耳毒性藥物：aminoglycosides、chlorhexidine、cetrimide',
    'Video otoscopy 優勢：放大影像、記錄、可執行耳道灌洗與異物取出',
    '慢性外耳炎需評估持續因素：耳道增生、狹窄、礦化 → 可能需要 CT 評估中耳',
  ],
  body: `# 耳鏡檢查與耳道細胞學

## 一、檢查原理與適應症 (Principles & Indications)



### 耳鏡檢查（Otoscopy）
### 設備
- **手持耳鏡**：錐形耳鏡頭（多種大小）+ 鹵素光源
- **Video otoscopy**：連接螢幕的攝影耳鏡，提供放大影像

### 技術
1. 適當保定（嚴重疼痛病例可能需要鎮靜）
2. 選擇適當大小的錐形耳鏡頭
3. 一手牽引耳翼向上外側（拉直 L 型耳道）
4. 另一手持耳鏡輕柔插入垂直耳道
5. 緩慢推進至水平耳道，評估：
   - 耳道壁紅腫程度
   - 分泌物性質與量
   - 增生/狹窄程度
   - 異物
6. 最終評估鼓膜

### 鼓膜評估
- **正常**：半透明、珍珠白/淡灰色、光滑、可見 pars tensa 與 pars flaccida
- **錘骨柄（manubrium）**：正常可見的解剖標記
- **異常徵象**：不透明/膨出（中耳積液）、穿孔、色澤改變

### Video Otoscopy 額外功能
- 高倍放大影像
- 術前術後記錄對比
- 耳道灌洗引導
- 異物取出
- 組織切片取樣

### 耳道細胞學
### 取樣技術
1. 乾棉棒輕柔插入耳道水平段
2. 旋轉收集分泌物
3. 在載玻片上滾塗（rolling smear）
4. 風乾 → Diff-Quik 染色
5. 油浸鏡（100x）觀察，計數 5-10 個視野取平均

### 判讀閾值

| 微生物 | 正常 | 有臨床意義 |
|--------|------|------------|
| 球菌 | 0-2/HPF | > 5/HPF |
| 桿菌 | 0/HPF | > 0/HPF（任何數量） |
| 馬拉色菌 | 0-2/HPF | > 5/HPF |

### 分泌物-微生物關聯

| 分泌物外觀 | 最可能微生物 | 治療方向 |
|-----------|-------------|----------|
| 棕色蠟狀 | 馬拉色菌 | Clotrimazole/Miconazole |
| 黃色膿性 | 球菌 | Fusidic acid/Polymyxin B |
| 黃綠色膿性 | 桿菌（Pseudomonas） | Fluoroquinolone/Polymyxin B |
| 黑褐色乾燥 | 耳蟎（Otodectes） | Selamectin/Isoxazoline |

### 鼓膜完整性與治療選擇
### 鼓膜完整
- 可使用所有耳用製劑
- Tris-EDTA 洗耳液（增強抗生素效果）
- Chlorhexidine 洗耳液

### 鼓膜破裂
- **僅用溫生理食鹽水灌洗**
- **禁用**：aminoglycosides（gentamicin, neomycin）→ 耳毒性
- **禁用**：chlorhexidine → 耳毒性
- 可用：fluoroquinolone 耳劑（耳毒性較低）
- 可用：Tris-EDTA（安全）

[圖片:犬 L 型耳道解剖與耳鏡檢查技術圖]
[圖片:耳道細胞學三種微生物比較圖]

## 二、判讀要點 (Interpretation)

判讀結果時需結合臨床表現綜合評估，注意假陽性與假陰性的可能性，必要時進行重複檢測或追加其他檢查。

## 三、常見陷阱 (Pitfalls)

檢查結果的判讀需注意取樣品質、檢體保存條件及個體差異等因素可能導致的誤判。

## 四、人醫借鑒 (Translational Insights)

| 人醫工具/概念 | 獸醫應用潛力 | 現況 |
|-------------|-------------|------|
| 皮膚鏡（dermoscopy） | 犬皮膚病灶非侵入性放大觀察 | 人醫標準工具，獸醫研究增加 |
| 共聚焦顯微鏡（confocal microscopy） | 活體皮膚細胞學——免組織切片 | 研究工具，臨床應用前 |
| 次世代定序（NGS）微生物鑑定 | 犬皮膚感染病原精準鑑定 | 研究中，成本尚高 |

## 五、臨床爭議與知識空缺 (Controversies & Knowledge Gaps)

| 爭議議題 | 現況 | Evidence Level |
|---------|------|---------------|
| 犬過敏原特異性 IgE 檢測（血清 vs 皮膚點刺）的一致性 | 兩種方法結果不一致率高達 30-40% | Level II |
| 犬皮膚組織病理的品質與標準化 | 不同病理醫師間判讀一致性待改善 | Level III |`,
  clinical_pearl: '在處理外耳炎時最容易犯的錯誤是不確認鼓膜完整性就使用含 aminoglycoside 的耳藥。如果耳道腫脹嚴重到無法看到鼓膜，先口服 Prednisolone 0.5-1 mg/kg × 5-7 天消腫，等腫脹減輕後再做完整的耳鏡檢查評估鼓膜。如果高度懷疑鼓膜已穿孔（慢性嚴重外耳炎、頭歪、面神經麻痺），在確認前只用溫生理食鹽水清洗。',
  common_mistakes: [
    '不做耳道細胞學就開始經驗性使用耳用藥物（球菌/桿菌/馬拉色菌需要不同治療）',
    '未評估鼓膜完整性就使用含耳毒性成分的藥物',
    '耳鏡插入時未牽引耳翼導致無法看到水平耳道與鼓膜',
    '將任何桿菌視為「少量正常」（耳道內任何桿菌都有臨床意義）',
    '嚴重腫脹耳道強行插入耳鏡造成疼痛與組織損傷',
  ],
  disease_data: null,
  diagnostic_data: {
    indication: [
      '所有外耳炎病例的初診與追蹤',
      '耳道分泌物增加或異味',
      '搖頭或抓耳行為',
      '懷疑耳道異物',
      '慢性外耳炎評估中耳是否受累',
    ],
    contraindication: [
      '嚴重疼痛病例需先鎮靜才能安全完成檢查',
      '疑似顳骨骨折需極度小心操作',
    ],
    technique: '手持耳鏡：選擇適當錐形頭 → 牽引耳翼向上外側 → 耳鏡頭輕柔插入 → 評估垂直段/水平段耳道壁、分泌物、鼓膜。耳道細胞學：乾棉棒插入水平段 → 旋轉取樣 → 在載玻片滾塗 → 風乾 → Diff-Quik 染色 → 油浸鏡（100x）計數球菌/桿菌/馬拉色菌。',
    normal_findings: [
      { finding: '耳道壁淡粉色', description: '耳道上皮色澤正常，無紅腫水腫', significance: '排除活動性外耳炎' },
      { finding: '少量淡黃色耵聹', description: '薄層正常耵聹覆蓋耳道壁', significance: '正常生理狀態' },
      { finding: '鼓膜完整透明', description: '珍珠白色半透明膜，可見錘骨柄', significance: '排除中耳炎、排除鼓膜穿孔' },
    ],
    abnormal_findings: [
      { finding: '耳道紅腫狹窄', description: '耳道壁紅斑、水腫，管腔縮小', significance: '活動性外耳炎，慢性病例可能有增生性改變' },
      { finding: '球菌 > 5/HPF', description: '成對或成串圓形球菌，伴退化嗜中性球', significance: '細菌性外耳炎，用含 fusidic acid 或 polymyxin B 的耳劑' },
      { finding: '桿菌 > 0/HPF', description: '棒狀細菌，任何數量均有意義', significance: '高度懷疑 Pseudomonas，需培養藥敏，用 fluoroquinolone 或 polymyxin B' },
      { finding: '馬拉色菌 > 5/HPF', description: '花生形/瓶形酵母菌增多', significance: '馬拉色菌性外耳炎，用含 clotrimazole/miconazole 的耳劑' },
      { finding: '鼓膜異常', description: '不透明、膨出、穿孔或缺失', significance: '疑似或確認中耳炎，限制藥物選擇，可能需 CT 評估' },
    ],
    interpretation_guide: '1. 耳鏡先評估耳道整體狀態（急性 vs 慢性）。2. 記錄分泌物外觀與量。3. 評估鼓膜完整性（決定藥物選擇）。4. 耳道細胞學：5-10 個油浸鏡視野計數取平均。5. 綜合耳鏡與細胞學結果選擇治療。6. 桿菌感染或反覆病例需額外做培養藥敏。',
    pitfalls: [
      '嚴重腫脹時無法評估鼓膜——需先消腫再重新檢查',
      '棉棒取樣過淺（僅取垂直段）可能無法代表水平段的微生物',
      '將耳蟎（Otodectes）的白色活動蟎蟲與分泌物混淆',
      '慢性耳道增生使鼓膜難以視覺化——可能需要 video otoscopy 或 CT',
    ],
    sensitivity_specificity: '耳鏡檢查對外耳炎的敏感度 > 95%。耳道細胞學對鑑定感染微生物類型的敏感度 > 85%。手持耳鏡對鼓膜完整性評估的敏感度約 70-80%（嚴重腫脹或分泌物時降低），video otoscopy 可提高至 > 90%。',
    cost_benefit: '手持耳鏡成本低，每間診所均應配備。耳道細胞學成本極低（棉棒+載玻片+Diff-Quik）。兩者結合可在 5-10 分鐘內完成，是外耳炎管理不可或缺的工具。避免了盲目使用耳用藥物的風險。',
  },
  procedure_data: null,
  visual_placeholders: [
    { position: '鼓膜評估段落後', type: 'annotated_image', description: '正常 vs 異常鼓膜耳鏡影像比較' },
    { position: '細胞學判讀段落後', type: 'comparison_table', description: '耳道分泌物外觀-微生物-治療選擇快速對照表' },
  ],
  interactive_placeholders: [
    { position: '全文末尾', type: 'decision_tree', description: '依耳道細胞學結果選擇耳用製劑決策工具' },
  ],
  drug_api_links: ['Enrofloxacin', 'Chlorhexidine'],
  references: [
    { type: 'textbook', citation: "Miller WH, Griffin CE, Campbell KL. Muller and Kirk's Small Animal Dermatology, 7th ed. Elsevier, 2013. Chapter 20: Diseases of the Ear.", relevance: '耳鏡檢查與耳道細胞學技術' },
    { type: 'journal', citation: 'Gotthelf LN. Diagnosis and treatment of otitis media in dogs and cats. Vet Clin North Am Small Anim Pract. 2004;34(2):469-487.', relevance: '耳鏡評估鼓膜與中耳炎診斷' },
    { type: 'journal', citation: 'Ginel PJ et al. A semiquantitative cytological evaluation of normal and pathological samples from the external ear canal of dogs and cats. Vet Dermatol. 2002;13(3):151-156.', relevance: '耳道細胞學正常與異常閾值' },
    { type: 'guideline', citation: 'Nuttall T, Bensignor E. A pilot study to develop an analogue scale for owner assessment of otitis externa in the dog. Vet Dermatol. 2014;25(6):546-e92.', relevance: 'WAVD 外耳炎評估與管理標準化指引' },
  ],
  is_current: true,
  created_at: now,
};

/** 過敏性皮膚病管理 — L5 治療型 */
const contentAllergyMgmt: NodeContent = {
  id: 'CONTENT-DERM-L5-001',
  node_id: 'DERM-L5-001',
  version: 1,
  summary: '過敏性皮膚病管理是獸醫皮膚科最核心的治療領域。犬異位性皮膚炎（CAD）、跳蚤過敏（FAD）與食物不良反應（AFR）的治療採多模式策略（multimodal approach），結合過敏原迴避、藥物治療、皮膚屏障修復與過敏原特異性免疫治療（ASIT）。現代靶向藥物（oclacitinib、lokivetmab）顯著改善了 CAD 的控制效果。長期管理需要飼主教育與定期追蹤。',
  learning_objectives: [
    '比較 oclacitinib、lokivetmab、cyclosporine 的療效、起效時間與副作用',
    '規劃 CAD 急性期與慢性期的多模式治療方案',
    '說明 ASIT 的適應症、執行方式與預期效果',
    '設計長期過敏管理計畫並教育飼主',
  ],
  key_points: [
    'Oclacitinib（JAK1 inhibitor）：0.4-0.6 mg/kg PO BID × 14 天 → SID，起效 4-24 小時',
    'Lokivetmab（抗 IL-31 mAb）：1-2 mg/kg SC q4w，起效 1-3 天，副作用極低',
    'Cyclosporine：5 mg/kg PO SID，起效 4-6 週，適合長期免疫調節',
    'ASIT（過敏原特異性免疫治療）：唯一可能改變疾病病程的治療，50-75% 有效，需 6-12 個月評估',
    '糖皮質激素（Prednisolone）僅用於急性短期控制，不適合長期使用',
    '皮膚屏障修復：含 ceramide 的外用保濕劑、必需脂肪酸（EFA）補充',
    '全年跳蚤預防（isoxazoline）是所有過敏犬的基本要求',
    '繼發感染（膿皮症、馬拉色菌）必須同時控制',
  ],
  body: `# 過敏性皮膚病管理

## 一、治療原理 (Treatment Principles)



### 治療原則：多模式策略
過敏性皮膚病無法根治，需終身管理。單一藥物通常不足以完全控制，需結合多種策略。

### 過敏原特異性免疫治療（ASIT）
### 適應症
- 已確診 CAD 且需要長期藥物控制的犬
- 血清 IgE 或皮內試驗鑑定出反應過敏原

### 執行方式
- **皮下注射免疫治療（SCIT）**：漸增劑量 → 維持劑量 q2-4w
- **舌下免疫治療（SLIT）**：每日口腔黏膜給予過敏原萃取液

### 預期效果
- 50-75% 犬有臨床改善
- 需 6-12 個月才能評估效果
- 是唯一可能改變疾病自然病程的治療

### 皮膚屏障修復
- 含 ceramide / phytosphingosine 的外用保濕劑或噴霧
- 必需脂肪酸補充（omega-3, omega-6）
- 減少過度沐浴（避免進一步脂質流失）
- 定期保濕可減少藥物需求量

### 環境管理
- 全年 isoxazoline 跳蚤預防（所有同居動物）
- 塵蟎控制：防蟎寢具套、定期清洗、HEPA 濾清器
- 已確認的食物過敏原嚴格迴避

### 長期監測
- 每 3-6 個月回診
- PVAS 瘙癢評分追蹤
- 皮膚細胞學監測繼發感染
- 使用 Oclacitinib：每 6-12 個月 CBC/BCS
- 使用 Cyclosporine：監測牙齦增生、腸胃副作用

[圖片:CAD 多模式治療策略金字塔圖]

## 二、藥物/方法比較 (Comparison)

### 藥物治療
### 靶向治療藥物比較

| 藥物 | 機轉 | 劑量 | 起效時間 | 主要副作用 | 適用情境 |
|------|------|------|----------|-----------|----------|
| Oclacitinib | JAK1 抑制劑 | 0.4-0.6 mg/kg PO BID×14d→SID | 4-24 hr | 腸胃不適、UTI、偶見腫瘤報告 | 急性+慢性CAD |
| Lokivetmab | 抗 IL-31 mAb | 1-2 mg/kg SC q4w | 1-3 天 | 極少（注射部位反應） | 慢性CAD、不耐藥物的犬 |
| Cyclosporine | Calcineurin 抑制 | 5 mg/kg PO SID | 4-6 週 | 嘔吐腹瀉、牙齦增生 | 慢性免疫調節 |
| Prednisolone | 廣效抗炎 | 0.5-1 mg/kg PO SID | 數小時 | Cushing表現、PU/PD | 僅急性短期控制 |

### 急性期治療（嚴重瘙癢發作）
1. **首選**：Oclacitinib 0.4-0.6 mg/kg PO BID × 14 天
2. **替代**：Prednisolone 0.5-1 mg/kg PO SID × 5-7 天後漸減
3. **同時處理**：繼發感染（細胞學確認 → 抗生素/抗黴菌）
4. 藥浴：Chlorhexidine 3-4% 每週 2-3 次

### 慢性期管理
1. **Oclacitinib** 0.4-0.6 mg/kg PO SID（長期）
2. 或 **Lokivetmab** 1-2 mg/kg SC 每 4 週
3. 或 **Cyclosporine** 5 mg/kg PO SID（可嘗試隔日或每週 2-3 次維持）
4. **ASIT**（過敏原特異性免疫治療）同步啟動

## 三、併發症與監控 (Complications & Monitoring)

治療過程中需監測藥物副作用與療效反應，定期評估病情變化並適時調整治療方案。

## 四、預後影響 (Prognostic Impact)

治療方式的選擇直接影響預後結局，應根據疾病分期、患畜整體狀況及飼主配合度綜合評估。

## 五、人醫借鑒 (Translational Insights)

| 人醫工具/概念 | 獸醫應用潛力 | 現況 |
|-------------|-------------|------|
| Dupilumab（抗 IL-4/IL-13 單抗） | 犬 AD 的抗細胞激素單抗開發 | 犬 anti-IL-31（Lokivetmab）已上市，anti-IL-4/13 研究中 |
| 過敏原免疫療法（AIT）次世代技術 | 舌下免疫療法（SLIT）、肽段免疫療法 | 犬 SLIT 已有商業化產品 |
| 光動力療法（PDT） | 犬淺表腫瘤/角化異常的非手術治療 | 人醫成熟，獸醫病例報告增加 |
| 生物製劑（biologics） | 犬自體免疫皮膚病的精準治療 | 獸醫可用生物製劑仍有限 |

## 六、臨床爭議與知識空缺 (Controversies & Knowledge Gaps)

| 爭議議題 | 現況 | Evidence Level |
|---------|------|---------------|
| 犬膿皮症的經驗性 vs 培養導引抗生素選擇 | MRSP 盛行率升高使經驗性治療風險增加 | Level II |
| 犬食物不良反應的排除飲食試驗持續時間 | 傳統 8 週 vs 新研究建議 6 週可能足夠 | Level II |
| 犬蠕形蟎蟲症是否需治療至兩次皮膚刮搔陰性 | 傳統標準 vs 較短療程的新證據 | Level III |
| 貓嗜酸球肉芽腫複合體的分類系統 | 現有分類是否反映不同病因仍不確定 | Level IV |`,
  clinical_pearl: '選擇靶向藥物的思路：需要快速止癢 → Oclacitinib（4-24 小時起效）；飼主無法每日餵藥或犬有腸胃敏感 → Lokivetmab（月注射，副作用最少）；需要全面免疫調節且不急 → Cyclosporine（4-6 週起效但作用廣泛）。理想狀態是同時啟動 ASIT，如果 ASIT 有效，可逐漸減少其他藥物劑量。',
  common_mistakes: [
    '長期使用 Prednisolone 而不轉換至更安全的靶向治療',
    '未同時處理繼發感染（膿皮症/馬拉色菌）導致瘙癢控制不佳',
    '忽略皮膚屏障修復作為輔助治療的價值',
    '未對所有過敏犬執行全年跳蚤預防',
    'ASIT 治療不到 6-12 個月就放棄',
  ],
  disease_data: null,
  diagnostic_data: null,
  procedure_data: null,
  visual_placeholders: [
    { position: '藥物比較段落後', type: 'comparison_table', description: 'Oclacitinib vs Lokivetmab vs Cyclosporine 全面比較表' },
    { position: '全文末尾', type: 'flowchart', description: 'CAD 急性期→慢性期治療決策流程圖' },
  ],
  interactive_placeholders: [
    { position: '藥物段落', type: 'drug_calculator', description: '過敏藥物劑量計算器' },
  ],
  drug_api_links: ['Oclacitinib', 'Lokivetmab', 'Cyclosporine', 'Prednisolone'],
  references: [
    { type: 'guideline', citation: 'Olivry T et al. Treatment of canine atopic dermatitis: 2015 updated guidelines from the International Committee on Allergic Diseases of Animals (ICADA). BMC Vet Dermatol. 2015;26:210-e49.', relevance: 'ICADA CAD 治療國際指引' },
    { type: 'journal', citation: 'Gadeyne C et al. Efficacy of oclacitinib (Apoquel) compared with prednisolone for the control of pruritus and clinical signs associated with allergic dermatitis in client-owned dogs in Australia. Vet Dermatol. 2014;25(6):512-e86.', relevance: 'Oclacitinib vs Prednisolone 臨床試驗' },
    { type: 'journal', citation: 'Michels GM et al. A blinded, randomized, placebo-controlled, dose determination trial of lokivetmab (ZTS-00103289), a caninized, anti-canine IL-31 monoclonal antibody in client owned dogs with atopic dermatitis. Vet Dermatol. 2016;27(6):478-e129.', relevance: 'Lokivetmab 臨床試驗' },
    { type: 'textbook', citation: "Miller WH, Griffin CE, Campbell KL. Muller and Kirk's Small Animal Dermatology, 7th ed. Elsevier, 2013.", relevance: '過敏性皮膚病管理完整章節' },
  ],
  is_current: true,
  created_at: now,
};

/** 抗寄生蟲治療 — L5 治療型 */
const contentAntiparasitic: NodeContent = {
  id: 'CONTENT-DERM-L5-002',
  node_id: 'DERM-L5-002',
  version: 1,
  summary: '皮膚科抗寄生蟲治療以 isoxazoline 類藥物為核心，涵蓋跳蚤、蜱蟲、蠕形蟎與疥蟎的治療。Isoxazoline 類（fluralaner、afoxolaner、sarolaner、lotilaner）是 GABA 受體與 GluCl 受體抑制劑，對節肢動物具高度選擇性。其口服便利性、廣效性與安全性已全面取代傳統的 amitraz、ivermectin 與 fipronil 成為首選。對於 MDR1 突變品種（柯利犬類），isoxazoline 類藥物是安全的替代方案。',
  learning_objectives: [
    '比較主要 isoxazoline 類藥物的劑量、給藥間隔與適應症',
    '說明 isoxazoline 的作用機轉與選擇性毒性原理',
    '規劃不同寄生蟲感染的最佳治療方案',
    '辨識 MDR1 突變品種並選擇安全的抗寄生蟲藥物',
  ],
  key_points: [
    'Isoxazoline 類藥物抑制無脊椎動物的 GABA 與 GluCl 受體 → 對哺乳動物安全',
    'Fluralaner（Bravecto）：犬 25-56 mg/kg PO 單劑，作用可達 12 週',
    'Afoxolaner（NexGard）：犬 2.5-6.2 mg/kg PO q4w',
    'Sarolaner（Simparica）：犬 2-4 mg/kg PO q4w',
    'Lotilaner（Credelio）：犬 20-43 mg/kg PO q4w',
    'Isoxazoline 對蠕形蟎症療效優於傳統 ivermectin，且更安全',
    'Selamectin（Revolution）：可用於疥蟎與耳蟎，q2w × 3 次',
    'MDR1（ABCB1）突變品種絕對禁用高劑量 ivermectin（> 0.1 mg/kg）',
  ],
  body: `# 抗寄生蟲治療

## 一、治療原理 (Treatment Principles)



### 環境控制（跳蚤管理不可或缺）
- 跳蚤卵+幼蟲+蛹 = 環境中跳蚤總量 95%
- 每日吸塵（地毯、沙發縫隙、寵物床墊）
- IGR（insect growth regulator）環境噴霧
- 清洗寢具（60°C 以上）

[圖片:Isoxazoline 類藥物作用機轉與給藥方案圖]

## 二、藥物/方法比較 (Comparison)

### Isoxazoline 類藥物
### 作用機轉
Isoxazoline 類藥物選擇性抑制節肢動物神經系統的 GABA（γ-aminobutyric acid）受體與 GluCl（glutamate-gated chloride channel）受體 → 神經過度興奮 → 癱瘓與死亡。由於與哺乳動物 GABA 受體的結合親和力極低，對犬貓安全性高。

### 藥物比較

| 藥物 | 商品名 | 犬劑量 | 給藥間隔 | 劑型 | 適應症 |
|------|--------|--------|----------|------|--------|
| Fluralaner | Bravecto | 25-56 mg/kg | PO q12w / spot-on q12w | 咀嚼錠/滴劑 | 跳蚤、蜱、蠕形蟎、疥蟎 |
| Afoxolaner | NexGard | 2.5-6.2 mg/kg | PO q4w | 咀嚼錠 | 跳蚤、蜱、蠕形蟎、疥蟎 |
| Sarolaner | Simparica | 2-4 mg/kg | PO q4w | 咀嚼錠 | 跳蚤、蜱、蠕形蟎、疥蟎、耳蟎 |
| Lotilaner | Credelio | 20-43 mg/kg | PO q4w | 咀嚼錠 | 跳蚤、蜱 |

### 適應症別治療方案

**跳蚤/蜱預防**
- 任一 isoxazoline，全年不間斷，所有同居犬
- 配合環境控制（吸塵、IGR 噴霧）

**蠕形蟎症**
- Fluralaner 25-56 mg/kg PO 單劑（可 q12w 重複）
- 或 Afoxolaner/Sarolaner q4w
- 治療至連續 2 次陰性刮搔後再持續 1 個月

**疥蟎症**
- Fluralaner 25-56 mg/kg PO 單劑（多數單劑即可）
- 或 Sarolaner 2 mg/kg q4w × 2 個月
- 所有同居犬同時治療

### 傳統抗寄生蟲藥物
| 藥物 | 劑量 | 適應症 | 注意事項 |
|------|------|--------|----------|
| Ivermectin | 0.2-0.6 mg/kg PO SID | 蠕形蟎（替代方案） | MDR1 突變犬禁用；需漸增劑量 |
| Selamectin | 6-12 mg/kg spot-on q2w | 疥蟎、耳蟎 | 安全性高，適用 MDR1 犬 |
| Moxidectin | 0.2-0.5 mg/kg PO/spot-on | 蠕形蟎 | Advocate 複方製劑 |

### MDR1（ABCB1）突變與藥物安全
### 高風險品種
柯利犬、邊境牧羊犬、澳洲牧羊犬、雪德蘭牧羊犬、古代英國牧羊犬、長毛惠比特

### 禁用藥物（高劑量）
- Ivermectin > 0.1 mg/kg → 神經毒性（共濟失調、失明、昏迷、死亡）
- Amitraz → 鎮靜、低血壓

### 安全替代
- Isoxazoline 類 → MDR1 犬安全（非 P-glycoprotein 受質）
- Selamectin → 安全（治療劑量不經 P-gp）
- Milbemycin oxime → 低劑量安全

## 三、併發症與監控 (Complications & Monitoring)

治療過程中需監測藥物副作用與療效反應，定期評估病情變化並適時調整治療方案。

## 四、預後影響 (Prognostic Impact)

治療方式的選擇直接影響預後結局，應根據疾病分期、患畜整體狀況及飼主配合度綜合評估。

## 五、人醫借鑒 (Translational Insights)

| 人醫工具/概念 | 獸醫應用潛力 | 現況 |
|-------------|-------------|------|
| Dupilumab（抗 IL-4/IL-13 單抗） | 犬 AD 的抗細胞激素單抗開發 | 犬 anti-IL-31（Lokivetmab）已上市，anti-IL-4/13 研究中 |
| 過敏原免疫療法（AIT）次世代技術 | 舌下免疫療法（SLIT）、肽段免疫療法 | 犬 SLIT 已有商業化產品 |
| 光動力療法（PDT） | 犬淺表腫瘤/角化異常的非手術治療 | 人醫成熟，獸醫病例報告增加 |
| 生物製劑（biologics） | 犬自體免疫皮膚病的精準治療 | 獸醫可用生物製劑仍有限 |

## 六、臨床爭議與知識空缺 (Controversies & Knowledge Gaps)

| 爭議議題 | 現況 | Evidence Level |
|---------|------|---------------|
| 犬膿皮症的經驗性 vs 培養導引抗生素選擇 | MRSP 盛行率升高使經驗性治療風險增加 | Level II |
| 犬食物不良反應的排除飲食試驗持續時間 | 傳統 8 週 vs 新研究建議 6 週可能足夠 | Level II |
| 犬蠕形蟎蟲症是否需治療至兩次皮膚刮搔陰性 | 傳統標準 vs 較短療程的新證據 | Level III |
| 貓嗜酸球肉芽腫複合體的分類系統 | 現有分類是否反映不同病因仍不確定 | Level IV |`,
  clinical_pearl: 'Isoxazoline 類藥物已徹底改變了皮膚科寄生蟲治療。蠕形蟎症過去需要數月的 ivermectin 漸增劑量治療（還有 MDR1 風險），現在 Fluralaner 單劑即可開始。疥蟎過去需要反覆的 selamectin 或 ivermectin 注射，現在也是 Fluralaner 單劑搞定。記住：台灣幾乎每隻犬都應該全年使用 isoxazoline 預防跳蚤——這是過敏犬管理的基石。',
  common_mistakes: [
    '對 MDR1 突變品種使用高劑量 ivermectin（可致命）',
    '蠕形蟎治療未達停藥標準就提前停藥（需連續 2 次陰性刮搔+1 個月）',
    '疥蟎治療僅治療有症狀的犬而未同時治療所有同居犬',
    '僅使用殺蚤劑而忽略環境控制（環境中蟲卵蛹占 95%）',
    '在台灣僅夏季使用跳蚤預防（應全年不間斷）',
  ],
  disease_data: null,
  diagnostic_data: null,
  procedure_data: null,
  visual_placeholders: [
    { position: '藥物比較段落後', type: 'comparison_table', description: 'Isoxazoline 類藥物全面比較表' },
    { position: 'MDR1 段落後', type: 'flowchart', description: 'MDR1 突變品種抗寄生蟲藥物選擇決策流程' },
  ],
  interactive_placeholders: [
    { position: '藥物段落', type: 'drug_calculator', description: 'Isoxazoline 劑量計算器（依體重）' },
  ],
  drug_api_links: ['Fluralaner', 'Afoxolaner', 'Sarolaner', 'Ivermectin', 'Selamectin'],
  references: [
    { type: 'journal', citation: 'Fourie JJ et al. Efficacy of orally administered fluralaner (Bravecto) or topically applied imidacloprid/moxidectin (Advocate) against generalized demodicosis in dogs. Parasit Vectors. 2015;8:187.', relevance: 'Fluralaner 治療蠕形蟎症的關鍵研究' },
    { type: 'journal', citation: 'Becskei C et al. Efficacy and safety of a novel oral isoxazoline, sarolaner (Simparica), for the treatment of sarcoptic mange in dogs. Vet Parasitol. 2016;222:56-61.', relevance: 'Sarolaner 治療疥蟎的臨床研究' },
    { type: 'guideline', citation: 'Mueller RS et al. Treatment of demodicosis in dogs: 2011 clinical practice guidelines. Vet Dermatol. 2012;23(2):86-e21.', relevance: '蠕形蟎治療指引' },
    { type: 'textbook', citation: "Miller WH, Griffin CE, Campbell KL. Muller and Kirk's Small Animal Dermatology, 7th ed. Elsevier, 2013.", relevance: '抗寄生蟲藥物完整章節' },
  ],
  is_current: true,
  created_at: now,
};

/** 皮膚科免疫調節治療 — L5 治療型 */
const contentImmunomodulation: NodeContent = {
  id: 'CONTENT-DERM-L5-003',
  node_id: 'DERM-L5-003',
  version: 1,
  summary: '皮膚科免疫調節治療涵蓋從糖皮質激素到現代靶向生物製劑的完整藥理學。核心藥物包括糖皮質激素（prednisolone）、calcineurin 抑制劑（cyclosporine、tacrolimus）、抗代謝物（azathioprine、mycophenolate）、烷化劑（chlorambucil）及免疫抑制大環內酯。治療目標是在有效控制免疫介導性皮膚病（天疱瘡、狼瘡、無菌性肉芽腫）的同時，將免疫抑制副作用降至最低。',
  learning_objectives: [
    '比較各類免疫抑制藥物的作用機轉、劑量與副作用',
    '規劃天疱瘡的免疫抑制誘導期與維持期治療',
    '說明節約類固醇策略（steroid-sparing）的原理與實施',
    '監測免疫抑制治療的常見副作用',
  ],
  key_points: [
    'Prednisolone 免疫抑制劑量：2-4 mg/kg/day → 控制後每 2-4 週減 25% → 最低有效隔日劑量',
    'Cyclosporine（calcineurin 抑制）：5-10 mg/kg PO SID，抑制 T 細胞活化與 IL-2 產生',
    'Azathioprine（嘌呤拮抗劑）：2 mg/kg PO SID（犬），需監測骨髓抑制——貓禁用',
    'Mycophenolate（IMPDH 抑制劑）：10-20 mg/kg PO BID，較新的節約類固醇選擇',
    'Chlorambucil（烷化劑）：0.1-0.2 mg/kg PO q48h，貓首選免疫抑制輔助劑',
    'Tacrolimus 0.1% 外用：局部免疫抑制，適用於局部 DLE 等',
    '節約類固醇策略：早期加入第二種免疫抑制劑 → 逐漸減少類固醇劑量 → 減少副作用',
    '所有免疫抑制治療需定期監測 CBC、肝腎功能、尿液分析',
  ],
  body: `# 皮膚科免疫調節治療

## 一、治療原理 (Treatment Principles)



### 糖皮質激素
### Prednisolone / Prednisone

| 用途 | 劑量 | 頻率 | 備註 |
|------|------|------|------|
| 抗炎（過敏止癢） | 0.5-1 mg/kg | PO SID × 5-7天 → 漸減 | 短期使用 |
| 免疫抑制（天疱瘡） | 2-4 mg/kg/day | PO 分 BID | 誘導期 |
| 維持（天疱瘡） | 最低有效劑量 | PO QOD | 搭配節約類固醇劑 |

**副作用**：PU/PD（多飲多尿）、多食、肌肉萎縮、皮膚菲薄、醫源性 Cushing、易感染、糖尿病（貓）

### Dexamethasone
- 效力為 Prednisolone 的 7 倍
- 長效，不適合長期使用
- 短期：0.1-0.2 mg/kg PO/IM/IV SID

### Calcineurin 抑制劑
### Cyclosporine (Atopica)

| 參數 | 詳情 |
|------|------|
| 機轉 | 抑制 calcineurin → 阻斷 NFAT → 抑制 T 細胞 IL-2 產生 |
| 劑量 | 5 mg/kg PO SID（犬）；7 mg/kg PO SID（貓） |
| 起效 | 4-6 週 |
| 副作用 | 嘔吐腹瀉（最常見）、牙齦增生、多毛症 |
| 監測 | 肝功能、腎功能、牙齦檢查 |
| 技巧 | 與食物同服或冷凍膠囊可減少腸胃副作用 |

### Tacrolimus 0.1% 外用軟膏
- 局部 calcineurin 抑制
- 適用於局部免疫介導皮膚病（DLE、局限 PF）
- 每日 1-2 次塗抹病灶
- 全身吸收極低，副作用少

### 抗代謝物
### Azathioprine

| 參數 | 詳情 |
|------|------|
| 機轉 | 嘌呤拮抗劑 → 抑制 DNA 合成 → 抑制 T/B 細胞增殖 |
| 劑量 | 2 mg/kg PO SID（犬）→ 穩定後可改 QOD |
| 起效 | 2-6 週 |
| 副作用 | 骨髓抑制（最嚴重）、肝毒性、急性胰臟炎 |
| 監測 | CBC 每 2 週×2 個月 → 每月×4 個月 → 每 3 個月 |
| 禁忌 | **貓禁用**（致命性骨髓抑制） |

### Mycophenolate Mofetil (MMF)

| 參數 | 詳情 |
|------|------|
| 機轉 | IMPDH 抑制 → 嘌呤合成受阻 → 淋巴球選擇性抑制 |
| 劑量 | 10-20 mg/kg PO BID |
| 起效 | 2-4 週 |
| 副作用 | 腹瀉（最常見）、骨髓抑制 |
| 優勢 | 比 azathioprine 更選擇性、起效可能更快 |

### 烷化劑
### Chlorambucil

| 參數 | 詳情 |
|------|------|
| 機轉 | 烷化 DNA → 抑制細胞增殖 |
| 劑量 | 0.1-0.2 mg/kg PO q48h |
| 適用 | **貓首選**免疫抑制輔助劑（替代 azathioprine） |
| 副作用 | 骨髓抑制（劑量依賴）、腸胃不適 |
| 監測 | CBC 每 2 週×2 個月 → 每月 |

### 節約類固醇策略
1. 天疱瘡誘導期：Prednisolone 2-4 mg/kg/day + Azathioprine（犬）或 Chlorambucil（貓）
2. 控制病情後（通常 2-4 週）開始減少 Prednisolone
3. 每 2-4 週減 25%
4. 目標：最低有效隔日劑量，或完全停用類固醇僅靠輔助劑維持
5. 減量過程中若復發，回到上一個有效劑量

[圖片:免疫抑制藥物作用靶點示意圖]

## 二、藥物/方法比較 (Comparison)

不同治療方式各有其適應症與限制，應根據個案情況選擇最適合的治療方案。

## 三、併發症與監控 (Complications & Monitoring)

持續監控治療反應與可能的併發症，根據臨床表現調整後續管理策略。

## 四、預後影響 (Prognostic Impact)

治療方式的選擇直接影響預後結局，應根據疾病分期、患畜整體狀況及飼主配合度綜合評估。

## 五、人醫借鑒 (Translational Insights)

| 人醫工具/概念 | 獸醫應用潛力 | 現況 |
|-------------|-------------|------|
| Dupilumab（抗 IL-4/IL-13 單抗） | 犬 AD 的抗細胞激素單抗開發 | 犬 anti-IL-31（Lokivetmab）已上市，anti-IL-4/13 研究中 |
| 過敏原免疫療法（AIT）次世代技術 | 舌下免疫療法（SLIT）、肽段免疫療法 | 犬 SLIT 已有商業化產品 |
| 光動力療法（PDT） | 犬淺表腫瘤/角化異常的非手術治療 | 人醫成熟，獸醫病例報告增加 |
| 生物製劑（biologics） | 犬自體免疫皮膚病的精準治療 | 獸醫可用生物製劑仍有限 |

## 六、臨床爭議與知識空缺 (Controversies & Knowledge Gaps)

| 爭議議題 | 現況 | Evidence Level |
|---------|------|---------------|
| 犬膿皮症的經驗性 vs 培養導引抗生素選擇 | MRSP 盛行率升高使經驗性治療風險增加 | Level II |
| 犬食物不良反應的排除飲食試驗持續時間 | 傳統 8 週 vs 新研究建議 6 週可能足夠 | Level II |
| 犬蠕形蟎蟲症是否需治療至兩次皮膚刮搔陰性 | 傳統標準 vs 較短療程的新證據 | Level III |
| 貓嗜酸球肉芽腫複合體的分類系統 | 現有分類是否反映不同病因仍不確定 | Level IV |`,
  clinical_pearl: '天疱瘡治療中最常見的錯誤是 Prednisolone 減量太快導致復發。正確做法是每 2-4 週僅減 25%，而且必須在第二種免疫抑制劑（Azathioprine 或 Mycophenolate）已開始起效後（通常啟動 2-4 週後）才開始減量。另外記住：貓絕對不能用 Azathioprine——貓缺乏足夠的 thiopurine methyltransferase（TPMT），會導致致命性骨髓抑制。貓用 Chlorambucil 替代。',
  common_mistakes: [
    'Prednisolone 減量過快導致天疱瘡復發',
    '貓使用 Azathioprine（致命性骨髓抑制）',
    '未定期監測 CBC 導致骨髓抑制未被及時發現',
    '免疫抑制期間忽略感染風險監測',
    '未使用節約類固醇策略導致長期高劑量類固醇副作用',
  ],
  disease_data: null,
  diagnostic_data: null,
  procedure_data: null,
  visual_placeholders: [
    { position: '藥物段落後', type: 'comparison_table', description: '免疫抑制藥物完整比較表' },
    { position: '節約類固醇段落後', type: 'timeline', description: '天疱瘡免疫抑制減量時程圖' },
  ],
  interactive_placeholders: [
    { position: '全文', type: 'drug_calculator', description: '免疫抑制藥物劑量與減量計算器' },
  ],
  drug_api_links: ['Prednisolone', 'Cyclosporine', 'Azathioprine', 'Mycophenolate', 'Chlorambucil'],
  references: [
    { type: 'journal', citation: 'Mueller RS et al. Treatment of pemphigus foliaceus and pemphigus vulgaris in dogs. Vet Dermatol. 2006;17:279-290.', relevance: '天疱瘡免疫抑制治療方案回顧' },
    { type: 'textbook', citation: "Miller WH, Griffin CE, Campbell KL. Muller and Kirk's Small Animal Dermatology, 7th ed. Elsevier, 2013.", relevance: '免疫調節藥物完整藥理學' },
    { type: 'journal', citation: 'Viviano KR. Update on immunosuppressive therapies for dogs and cats. Vet Clin North Am Small Anim Pract. 2013;43(5):1149-1170.', relevance: '犬貓免疫抑制治療更新' },
    { type: 'journal', citation: 'Rosenkrantz W. Pemphigus: current therapy. Vet Dermatol. 2004;15:90-98.', relevance: '天疱瘡治療實務' },
    { type: 'guideline', citation: 'Olivry T et al. Treatment of canine atopic dermatitis: 2015 updated guidelines from the International Committee on Allergic Diseases of Animals (ICADA). BMC Vet Dermatol. 2015;26:210-e49.', relevance: 'ICADA 指引中 cyclosporine 與免疫調節劑用藥建議' },
  ],
  is_current: true,
  created_at: now,
};

/** 耳科治療 — L5 治療型 */
const contentOticTherapy: NodeContent = {
  id: 'CONTENT-DERM-L5-004',
  node_id: 'DERM-L5-004',
  version: 1,
  summary: '耳科治療涵蓋外耳炎與中耳炎的局部與全身性治療。治療需依據耳道細胞學結果選擇適當的耳用製劑（球菌→fusidic acid/polymyxin B；桿菌→fluoroquinolone/polymyxin B；馬拉色菌→clotrimazole/miconazole）。耳道清洗是治療的基礎步驟。鼓膜完整性決定可使用的藥物範圍。慢性外耳炎需同時處理原發因素（過敏）與持續因素（增生/中耳炎）。末期耳道疾病可能需要手術（TECA-LBO）。',
  learning_objectives: [
    '根據耳道細胞學結果選擇適當的耳用製劑',
    '正確執行耳道清洗技術',
    '區分鼓膜完整與破裂時的安全用藥選擇',
    '規劃慢性/反覆外耳炎的長期管理策略',
    '辨識需要手術介入的末期耳道疾病指徵',
  ],
  key_points: [
    '耳道清洗是所有耳科治療的第一步——分泌物與碎片會降低藥物效果',
    '球菌性外耳炎：含 fusidic acid 或 polymyxin B/neomycin + 類固醇的複方耳劑',
    '桿菌性（Pseudomonas）外耳炎：Tris-EDTA 灌洗 + fluoroquinolone 或 polymyxin B',
    '馬拉色菌性外耳炎：含 clotrimazole、miconazole 或 ketoconazole 的耳劑',
    '鼓膜破裂時禁用：aminoglycosides（gentamicin, neomycin）、chlorhexidine → 耳毒性',
    'Tris-EDTA 破壞革蘭氏陰性菌外膜 → 增強抗生素效果（對 Pseudomonas 尤其重要）',
    '嚴重腫脹：口服 Prednisolone 0.5-1 mg/kg × 5-7 天消腫後再局部治療',
    '末期耳道疾病（完全閉塞/礦化）→ TECA-LBO（全耳道切除+外側鼓室切開術）',
  ],
  body: `# 耳科治療

## 一、治療原理 (Treatment Principles)



### 耳道清洗
### 清洗液選擇

| 清洗液 | 適用情況 | 注意事項 |
|--------|----------|----------|
| 溫生理食鹽水 | 鼓膜破裂/不確定 | 最安全選擇 |
| Tris-EDTA | 鼓膜完整 | 增強抗生素效果，對 Pseudomonas 特佳 |
| Chlorhexidine 0.05% | 鼓膜完整 | 抗菌清洗 |
| 含 ceruminolytic 的商業洗耳液 | 蠟狀分泌物多 | 溶解耵聹 |

### 清洗技術
1. 溫熱清洗液至體溫（減少不適）
2. 將清洗液充分灌入耳道
3. 輕柔按摩耳道基部 30 秒
4. 讓動物搖頭排出液體
5. 用乾棉球吸乾可見的殘餘液體
6. 必要時重複 2-3 次直至排出液澄清

### 局部耳用製劑
### 依細胞學結果選擇

**球菌感染**

| 藥物 | 常見商品 | 用法 |
|------|----------|------|
| Fusidic acid + Framycetin + Nystatin + Prednisolone | Surolan | q12-24h × 7-14天 |
| Polymyxin B + Miconazole + Prednisolone | Surolan 替代 | q12-24h × 7-14天 |
| Florfenicol + Terbinafine + Betamethasone | Osurnia | 單次劑量，7天後可重複 |

**桿菌感染（Pseudomonas）**

| 策略 | 詳情 |
|------|------|
| 第一步 | Tris-EDTA 灌洗 → 靜置 15 分鐘 → 增強後續抗生素 |
| 局部首選 | Enrofloxacin 耳劑 或 Marbofloxacin 耳劑 |
| 替代 | Polymyxin B 耳劑 |
| 嚴重/中耳 | 加用全身性 Fluoroquinolone PO |
| 培養藥敏 | 桿菌感染必須做——多重抗藥 Pseudomonas 日益常見 |

**馬拉色菌感染**

| 藥物 | 用法 |
|------|------|
| Clotrimazole 1% 耳劑 | q12-24h × 14天 |
| Miconazole 含複方耳劑 | q12-24h × 14天 |
| Posaconazole 耳劑（嚴重/抗藥） | 依處方 |

### 炎症控制
- 多數商業耳劑含 betamethasone 或 dexamethasone
- 嚴重腫脹需先口服 Prednisolone 消腫
- 長期維持可用含低效類固醇的洗耳液

### 全身性治療
### 適應症
- 中耳炎
- 嚴重腫脹無法有效局部用藥
- 桿菌感染合併中耳炎

### 藥物選擇

| 藥物 | 劑量 | 適應症 |
|------|------|--------|
| Enrofloxacin | 5-20 mg/kg PO SID | Pseudomonas 中耳炎 |
| Marbofloxacin | 2-5 mg/kg PO SID | 同上，CNS 穿透力佳 |
| Itraconazole | 5 mg/kg PO SID | 嚴重馬拉色菌 |
| Prednisolone | 0.5-1 mg/kg PO SID × 5-7天 | 嚴重腫脹消腫 |

### 慢性外耳炎管理
1. **控制原發因素**：過敏管理（最重要）
2. **維持性清洗**：居家每週 1-2 次洗耳
3. **定期監測**：每 1-3 個月耳鏡+細胞學
4. **早期介入**：復發跡象即開始治療，不等惡化

### 末期耳道疾病
耳道完全閉塞、礦化、反覆中耳炎 → TECA-LBO
- 全耳道切除（Total Ear Canal Ablation）+ 外側鼓室切開術（Lateral Bulla Osteotomy）
- 術後永久性聽力喪失（該側）但解決疼痛與感染

[圖片:外耳炎治療決策流程圖——依細胞學結果選擇]

## 二、藥物/方法比較 (Comparison)

不同治療方式各有其適應症與限制，應根據個案情況選擇最適合的治療方案。

## 三、併發症與監控 (Complications & Monitoring)

持續監控治療反應與可能的併發症，根據臨床表現調整後續管理策略。

## 四、預後影響 (Prognostic Impact)

治療方式的選擇直接影響預後結局，應根據疾病分期、患畜整體狀況及飼主配合度綜合評估。

## 五、人醫借鑒 (Translational Insights)

| 人醫工具/概念 | 獸醫應用潛力 | 現況 |
|-------------|-------------|------|
| Dupilumab（抗 IL-4/IL-13 單抗） | 犬 AD 的抗細胞激素單抗開發 | 犬 anti-IL-31（Lokivetmab）已上市，anti-IL-4/13 研究中 |
| 過敏原免疫療法（AIT）次世代技術 | 舌下免疫療法（SLIT）、肽段免疫療法 | 犬 SLIT 已有商業化產品 |
| 光動力療法（PDT） | 犬淺表腫瘤/角化異常的非手術治療 | 人醫成熟，獸醫病例報告增加 |
| 生物製劑（biologics） | 犬自體免疫皮膚病的精準治療 | 獸醫可用生物製劑仍有限 |

## 六、臨床爭議與知識空缺 (Controversies & Knowledge Gaps)

| 爭議議題 | 現況 | Evidence Level |
|---------|------|---------------|
| 犬膿皮症的經驗性 vs 培養導引抗生素選擇 | MRSP 盛行率升高使經驗性治療風險增加 | Level II |
| 犬食物不良反應的排除飲食試驗持續時間 | 傳統 8 週 vs 新研究建議 6 週可能足夠 | Level II |
| 犬蠕形蟎蟲症是否需治療至兩次皮膚刮搔陰性 | 傳統標準 vs 較短療程的新證據 | Level III |
| 貓嗜酸球肉芽腫複合體的分類系統 | 現有分類是否反映不同病因仍不確定 | Level IV |`,
  clinical_pearl: 'Pseudomonas 外耳炎是耳科治療中最棘手的問題。關鍵策略是「Tris-EDTA 先行」——Tris-EDTA 螯合鈣鎂離子，破壞 Pseudomonas 外膜的 LPS 層，使原本抗藥的菌株對後續 fluoroquinolone 敏感。灌洗後靜置 15 分鐘再給 fluoroquinolone 耳劑，效果遠優於直接用藥。另外，永遠不要忘記做培養藥敏——多重抗藥 Pseudomonas 在台灣並不少見。',
  common_mistakes: [
    '不做耳道細胞學就選擇耳用藥物',
    '鼓膜破裂時使用含 aminoglycoside 的耳劑（gentamicin, neomycin）→ 耳毒性',
    'Pseudomonas 外耳炎未使用 Tris-EDTA 前處理直接用藥',
    '僅治療繼發感染而不處理原發過敏（外耳炎反覆復發）',
    '慢性耳道增生/礦化仍試圖保守治療而延誤手術時機',
  ],
  disease_data: null,
  diagnostic_data: null,
  procedure_data: null,
  visual_placeholders: [
    { position: '局部耳用製劑段落後', type: 'flowchart', description: '依細胞學結果選擇耳用製劑的決策流程圖' },
    { position: '全身治療段落後', type: 'comparison_table', description: '耳用藥物與鼓膜安全性對照表' },
  ],
  interactive_placeholders: [
    { position: '藥物段落', type: 'decision_tree', description: '外耳炎治療決策互動工具' },
  ],
  drug_api_links: ['Enrofloxacin', 'Prednisolone', 'Itraconazole', 'Chlorhexidine'],
  references: [
    { type: 'journal', citation: 'Gotthelf LN. Diagnosis and treatment of otitis media in dogs and cats. Vet Clin North Am Small Anim Pract. 2004;34(2):469-487.', relevance: '外耳炎與中耳炎治療指引' },
    { type: 'journal', citation: 'Gortel K. Otic flushing. Vet Clin North Am Small Anim Pract. 2004;34(2):557-565.', relevance: '耳道灌洗技術與洗液選擇' },
    { type: 'textbook', citation: "Miller WH, Griffin CE, Campbell KL. Muller and Kirk's Small Animal Dermatology, 7th ed. Elsevier, 2013.", relevance: '耳科治療完整章節' },
    { type: 'guideline', citation: 'Nuttall T, Cole LK. Evidence-based veterinary dermatology: a systematic review of interventions for treatment of Pseudomonas otitis in dogs. Vet Dermatol. 2007;18(2):69-77.', relevance: 'WAVD 循證指引——犬假單胞菌外耳炎治療系統性回顧' },
  ],
  is_current: true,
  created_at: now,
};

/** 抗黴菌治療 — L5 治療型 */
const contentAntifungal: NodeContent = {
  id: 'CONTENT-DERM-L5-005',
  node_id: 'DERM-L5-005',
  version: 1,
  summary: '皮膚科抗黴菌治療涵蓋皮膚癬菌症（dermatophytosis）與馬拉色菌皮膚炎的全身性及局部治療。全身性抗黴菌藥物以 azole 類（itraconazole、ketoconazole）與 allylamine 類（terbinafine）為主。局部治療以含 miconazole + chlorhexidine 的藥浴或 lime sulfur 浸泡為主。皮膚癬菌症的治療終點以真菌培養陰性為準，非臨床外觀。馬拉色菌治療需同時控制潛在過敏性皮膚病以防復發。',
  learning_objectives: [
    '比較 itraconazole、ketoconazole 和 terbinafine 的藥理特性與適應症',
    '說明 itraconazole 脈衝療法的原理與優勢',
    '規劃皮膚癬菌症的全身性+局部治療方案與停藥標準',
    '規劃馬拉色菌皮膚炎的治療方案',
  ],
  key_points: [
    'Itraconazole 5 mg/kg PO SID（脈衝療法：1 週用/1 週停）— 皮膚癬菌首選',
    'Ketoconazole 5-10 mg/kg PO SID — 馬拉色菌首選，需與食物同服增加吸收',
    'Terbinafine 30-40 mg/kg PO SID（犬）— 殺黴菌作用（fungicidal），起效快',
    'Itraconazole 脈衝療法原理：藥物蓄積於角質層，停藥期間仍持續釋放',
    '局部治療：Miconazole 2% + Chlorhexidine 2% 藥浴 q2-3次/週，接觸時間 ≥ 10 分鐘',
    'Lime sulfur 1:16 浸泡每週 2 次——有效但氣味強烈，可染黃毛髮',
    '皮膚癬菌停藥標準：連續 2-3 次真菌培養陰性（間隔 2 週），非看臨床外觀',
    '環境去汙至關重要：漂白水 1:10、每日吸塵、清洗寢具 60°C',
  ],
  body: `# 抗黴菌治療

## 一、治療原理 (Treatment Principles)



### 局部抗黴菌治療
### 藥浴
| 配方 | 用法 | 接觸時間 | 備註 |
|------|------|----------|------|
| Miconazole 2% + Chlorhexidine 2% | 每週 2-3 次 | ≥ 10 分鐘 | 首選局部治療 |
| Lime sulfur 1:16 | 每週 2 次 | 浸泡後不沖洗 | 有效但氣味強、染黃毛髮 |
| Enilconazole 0.2% | 每 3-4 天 | 噴灑/浸泡 | 犬可用，貓避免 |

### 外用藥膏
- Miconazole / Clotrimazole 局部塗抹：小面積局部病灶
- 不可作為唯一治療（僅輔助全身性治療）

### 適應症別治療方案
### 皮膚癬菌症
**Primary care**：
1. 全身性：Itraconazole 5 mg/kg PO SID 脈衝療法
2. 局部：Miconazole + Chlorhexidine 藥浴每週 2 次
3. 環境去汙：漂白水 1:10、每日吸塵、60°C 清洗
4. 隔離感染動物
5. 停藥標準：連續 2-3 次培養陰性（間隔 2 週）

**Specialty care**：
- 難治性病例：Terbinafine 30-40 mg/kg + 局部藥浴
- 多貓家庭：所有貓（含無症狀者）同時治療
- Kerion（結節性病灶）：全身性抗黴菌 + 短期抗炎

### 馬拉色菌皮膚炎
**Primary care**：
1. 全身性：Ketoconazole 5-10 mg/kg PO SID × 3-4 週
2. 局部：Miconazole + Chlorhexidine 藥浴每週 2 次
3. 同時控制潛在過敏（最重要——否則必然復發）

**Specialty care**：
- 反覆復發：長期間歇性藥浴維持（每週 1 次）
- 馬拉色菌過敏：合併 CAD 管理
- 耐藥病例：Itraconazole 替代

### 監測與安全
- Azole 類需監測肝功能：治療前基線 → 治療後 2-4 週 → 此後每月
- ALT/ALP 上升 > 2-3 倍基線值 → 考慮停藥或換藥
- 告知飼主觀察厭食、嘔吐、黃疸等肝毒性徵兆

[圖片:抗黴菌藥物作用靶點示意圖]

## 二、藥物/方法比較 (Comparison)

### 全身性抗黴菌藥物
### 藥物比較

| 藥物 | 機轉 | 劑量（犬） | 劑量（貓） | 適應症 | 主要副作用 |
|------|------|-----------|-----------|--------|-----------|
| Itraconazole | Ergosterol 合成抑制（CYP51） | 5 mg/kg PO SID | 5 mg/kg PO SID | 皮膚癬菌首選 | 肝毒性、厭食 |
| Ketoconazole | Ergosterol 合成抑制（CYP51） | 5-10 mg/kg PO SID | 不建議貓使用 | 馬拉色菌首選 | 肝毒性、腸胃不適、抗雄激素 |
| Terbinafine | Squalene epoxidase 抑制 | 30-40 mg/kg PO SID | 30-40 mg/kg PO q48h | 皮膚癬菌（犬） | 腸胃不適、肝毒性（罕） |
| Fluconazole | Ergosterol 合成抑制（CYP51） | 5-10 mg/kg PO SID | 50 mg/cat PO q24-72h | 深部黴菌、CNS 感染 | 肝毒性 |

### Itraconazole 脈衝療法
- **原理**：itraconazole 高度親脂 → 蓄積於角質層與毛髮 → 停藥後持續從角質層釋放
- **方案**：5 mg/kg PO SID × 7 天 → 停 7 天 → 重複循環
- **優勢**：降低肝毒性風險、減少藥物成本、維持治療濃度
- **療程**：通常需要 3-6 個脈衝週期（6-12 週）

### Ketoconazole 注意事項
- 需與酸性食物同服增加吸收（空腹吸收極差）
- 抗雄激素副作用（長期使用可致精液品質下降）
- 抑制多種 CYP450 酵素 → 藥物交互作用多
- 貓的代謝速率不同，不建議貓使用

### Terbinafine 特點
- 殺黴菌作用（fungicidal）vs azole 類為抑菌（fungistatic）
- 不依賴 CYP450 系統 → 藥物交互作用少
- 犬劑量較人類高（犬代謝快）
- 貓可用但劑量間隔需調整

## 三、併發症與監控 (Complications & Monitoring)

治療過程中需監測藥物副作用與療效反應，定期評估病情變化並適時調整治療方案。

## 四、預後影響 (Prognostic Impact)

治療方式的選擇直接影響預後結局，應根據疾病分期、患畜整體狀況及飼主配合度綜合評估。

## 五、人醫借鑒 (Translational Insights)

| 人醫工具/概念 | 獸醫應用潛力 | 現況 |
|-------------|-------------|------|
| Dupilumab（抗 IL-4/IL-13 單抗） | 犬 AD 的抗細胞激素單抗開發 | 犬 anti-IL-31（Lokivetmab）已上市，anti-IL-4/13 研究中 |
| 過敏原免疫療法（AIT）次世代技術 | 舌下免疫療法（SLIT）、肽段免疫療法 | 犬 SLIT 已有商業化產品 |
| 光動力療法（PDT） | 犬淺表腫瘤/角化異常的非手術治療 | 人醫成熟，獸醫病例報告增加 |
| 生物製劑（biologics） | 犬自體免疫皮膚病的精準治療 | 獸醫可用生物製劑仍有限 |

## 六、臨床爭議與知識空缺 (Controversies & Knowledge Gaps)

| 爭議議題 | 現況 | Evidence Level |
|---------|------|---------------|
| 犬膿皮症的經驗性 vs 培養導引抗生素選擇 | MRSP 盛行率升高使經驗性治療風險增加 | Level II |
| 犬食物不良反應的排除飲食試驗持續時間 | 傳統 8 週 vs 新研究建議 6 週可能足夠 | Level II |
| 犬蠕形蟎蟲症是否需治療至兩次皮膚刮搔陰性 | 傳統標準 vs 較短療程的新證據 | Level III |
| 貓嗜酸球肉芽腫複合體的分類系統 | 現有分類是否反映不同病因仍不確定 | Level IV |`,
  clinical_pearl: 'Itraconazole 脈衝療法是治療皮膚癬菌症的最佳策略——因為 itraconazole 高度親脂，會蓄積在角質層和毛髮中，即使停藥期間角質層中的藥物濃度仍高於最低抑菌濃度。這讓你可以用一半的藥量達到相同效果，同時降低肝毒性風險。停藥標準永遠是培養而非外觀——臨床看起來好了但培養仍陽性的動物會復發並持續散播孢子。',
  common_mistakes: [
    'Ketoconazole 空腹給藥（吸收極差，必須與食物同服）',
    '皮膚癬菌治療依臨床外觀而非培養結果決定停藥',
    '僅使用局部治療而未搭配全身性抗黴菌（局部單獨效果有限）',
    '馬拉色菌治療後未控制潛在過敏（必然復發）',
    '藥浴接觸時間不足 10 分鐘',
  ],
  disease_data: null,
  diagnostic_data: null,
  procedure_data: null,
  visual_placeholders: [
    { position: '藥物比較段落後', type: 'comparison_table', description: '抗黴菌藥物完整比較表' },
    { position: '適應症別段落後', type: 'flowchart', description: '皮膚癬菌症 vs 馬拉色菌治療方案流程圖' },
  ],
  interactive_placeholders: [
    { position: '藥物段落', type: 'drug_calculator', description: '抗黴菌藥物劑量計算器' },
  ],
  drug_api_links: ['Itraconazole', 'Ketoconazole', 'Terbinafine', 'Chlorhexidine'],
  references: [
    { type: 'guideline', citation: 'Moriello KA et al. Diagnosis and treatment of dermatophytosis in dogs and cats: Clinical Consensus Guidelines of the World Association for Veterinary Dermatology. Vet Dermatol. 2017;28(3):266-e68.', relevance: 'WAVD 皮膚癬菌症診斷治療共識指引' },
    { type: 'journal', citation: 'Negre A et al. Evidence-based veterinary dermatology: a systematic review of interventions for Malassezia dermatitis in dogs. Vet Dermatol. 2009;20(1):1-12.', relevance: '馬拉色菌治療的循證系統性回顧' },
    { type: 'textbook', citation: "Miller WH, Griffin CE, Campbell KL. Muller and Kirk's Small Animal Dermatology, 7th ed. Elsevier, 2013.", relevance: '抗黴菌藥物藥理學完整章節' },
  ],
  is_current: true,
  created_at: now,
};

/** 以 Map 方式匯出，方便用 nodeId 快速查找 */
export const DERM_CONTENTS = new Map<string, NodeContent>([
  ['DERM-L0-001', contentDermOverview],
  ['DERM-L1-001', contentSkinAnatomy],
  ['DERM-L1-002', contentCutaneousImmunology],
  ['DERM-L1-003', contentHairCycle],
  ['DERM-L2-001', contentAllergyMechanism],
  ['DERM-L2-002', contentKeratinization],
  ['DERM-L2-003', contentAutoimmuneMechanism],
  ['DERM-L3-001', contentCAD],
  ['DERM-L3-002', contentAFR],
  ['DERM-L3-003', contentFAD],
  ['DERM-L3-004', contentDemodicosis],
  ['DERM-L3-005', contentPyoderma],
  ['DERM-L3-006', contentMalassezia],
  ['DERM-L3-007', contentOtitis],
  ['DERM-L3-008', contentDermatophytosis],
  ['DERM-L3-009', contentScabies],
  ['DERM-L3-010', contentPemphigus],
  ['DERM-L4-001', contentDermHistory],
  ['DERM-L4-002', contentSkinScraping],
  ['DERM-L4-003', contentCytology],
  ['DERM-L4-004', contentOtoscopy],
  ['DERM-L5-001', contentAllergyMgmt],
  ['DERM-L5-002', contentAntiparasitic],
  ['DERM-L5-003', contentImmunomodulation],
  ['DERM-L5-004', contentOticTherapy],
  ['DERM-L5-005', contentAntifungal],
]);
