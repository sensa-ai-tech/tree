import type { NodeContent } from '@/types/knowledge';

const now = '2026-02-15T00:00:00Z';

/** 犬異位性皮膚炎 (CAD)，疾病型 */
const contentCAD: NodeContent = {
  id: 'CONTENT-DERM-L3-001',
  node_id: 'DERM-L3-001',
  version: 2,
  summary: '犬異位性皮膚炎（Canine Atopic Dermatitis, CAD）是犬最常見的過敏性皮膚病，盛行率落在 10-15%。本質是基因易感犬對環境過敏原產生異常的 IgE 介導免疫反應，造成慢性瘙癢加上皮膚屏障功能受損。臨床上多半靠 Favrot 標準搭配病史與表現來判斷。治療不能只靠一招，要組合過敏原迴避、跳蚤預防、排除飲食試驗、藥物（oclacitinib、lokivetmab、cyclosporine，2024 年新增口服 JAK 抑制劑 ilunocitinib/Zenrelia），有條件還可以加上過敏原特異性免疫治療（ASIT）。',
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
    'Ilunocitinib（Zenrelia，2024 FDA 核准）為第二代口服 JAK 抑制劑，第一天起即每日一次（≥12 月齡）；帶疫苗相關黑框警告——接種前後須停藥（待 DVM 依最新仿單核對）',
    'ASIT（過敏原特異性免疫治療）是唯一可能改變疾病病程的治療',
  ],
  body: `# 犬異位性皮膚炎 (CAD)

## 一、病理機制 (Pathophysiology)



### 概述
CAD 是一種遺傳易感的慢性發炎性皮膚病，特徵是對環境過敏原（塵蟎、花粉、黴菌孢子）跑出 IgE 介導的過敏反應。台灣亞熱帶氣候全年溫暖潮濕，環境過敏原暴露量比溫帶國家高很多，臨床上 CAD 的盛行率跟嚴重度也跟著往上跑。

### 病理機轉
CAD 的病理可以拆成三塊核心異常：

1. 皮膚屏障缺陷。表皮 filaggrin 表達下降、角質層脂質組成異常，導致經皮水分散失（TEWL）增加，過敏原更容易長驅直入。
2. 免疫失調。免疫往 Th2 偏移，IL-4/IL-13 驅動 B 細胞做出 allergen-specific IgE，肥大細胞活化後釋放組胺、前列腺素那些介質。
3. 神經免疫交互。IL-31 直接刺激背根神經節的感覺神經元，搔癢被點起來後就進入搔抓跟發炎的循環。

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
1. 排除跳蚤過敏（FAD）：嚴格跳蚤控制 4-8 週。
2. 排除食物不良反應：新蛋白質或水解蛋白飲食排除試驗 8 週。
3. 排除疥蟎：皮膚刮搔，或直接給 isoxazoline 試驗性治療。
4. 排除繼發感染：皮膚細胞學看細菌跟馬拉色菌。
5. 臨床診斷 CAD：Favrot 標準加上其他原因都被排掉。
6. 過敏原檢測（看狀況做）：血清 IgE 或皮內試驗，主要是給 ASIT 選過敏原用的。

## 三、治療策略 (Treatment)

### 急性期
- [藥物:Oclacitinib] 0.4-0.6 mg/kg PO BID x 14 天，之後改 SID（**禁用於 < 12 個月幼犬**；FDA/EMA 批准限制——幼犬免疫系統尚未成熟，JAK 抑制可能影響發育期免疫功能及對感染的防禦能力）
- 或 [藥物:Prednisolone] 0.5-1 mg/kg PO SID x 5-7 天後漸減

### 慢性期多模式管理
- 藥物：Oclacitinib SID，或 [藥物:Lokivetmab] 1-2 mg/kg SC 每月一針。
- 免疫調節：[藥物:Cyclosporine] 5 mg/kg PO SID，起效要等 4-6 週。
- ASIT：皮下注射或舌下免疫治療，反應率約 50-75%。
- 皮膚屏障修復：含神經醯胺的外用保濕劑、補充必需脂肪酸。
- 跳蚤預防：全年不能停。
- 繼發感染控制：定期做皮膚細胞學追蹤。

### 2024–2025 新藥與實證更新（待 DVM 覆核）

**Ilunocitinib（Zenrelia，Elanco）— 第二代口服 JAK 抑制劑**
FDA 於 2024 年 9 月 19 日核准，用於犬隻搔癢與異位性皮膚炎控制，適用 **≥12 月齡**犬，劑量 **0.6–0.8 mg/kg PO，每日一次**（自第一天起即 SID，不像 oclacitinib 前 14 天需 BID）。

> ⚠️ **黑框警告（Boxed Warning）— 疫苗免疫反應不足**：Zenrelia 標籤帶有 FDA 黑框警告，用藥犬對疫苗的免疫反應可能不足。原則上**開始用藥前須完成疫苗接種**；**接種前停藥、接種後停藥一段時間**（依仿單）。2025 年 9 月 FDA 核准修訂標籤，**移除**原先「活毒疫苗致死性疫苗誘發疾病」之文字，但**保留**疫苗反應不足之黑框警告。黑框警告之**逐字內容與停藥天數請以最新 FDA 仿單為準**，臨床採用前由獸醫師再次核對。

**JAK 抑制劑頭對頭比較**：一項 338 隻犬的隨機田間試驗（Forster 2025，廠商贊助）中，ilunocitinib 與 oclacitinib 於第 14 天前療效相近；**第 28–112 天 ilunocitinib 之 PVAS 與 CADESI-04 顯著較低**，安全性相當。判讀時宜留意此研究為 Elanco 贊助之利益衝突。

**Lokivetmab 長期實證**：獨立學術團隊回溯 150 隻犬（Kasper 2024），長期使用成功率約 **77%**、不良反應僅約 **8%**，支持其作為長期止癢／維持治療選項。

**指引現況**：ICADA 於 2023/2024 發表**致病機轉回顧與 CAD 新定義**（強調皮膚屏障缺損＋微生物失衡＋過敏原致敏之交互作用），但這是**機轉／定義**更新，**非新版治療指引**；目前**最新的 ICADA 治療指引仍為 2015 Olivry 版**，勿混淆。

[圖片:CAD 逐步診斷治療流程圖]

## 四、併發症與監控 (Complications & Monitoring)

### 常見併發症
- 繼發細菌性膿皮症：最常見，CAD 犬大概 60-70% 都會碰到。搔抓把屏障打破之後，Staphylococcus pseudintermedius 就跑進來，臨床看到的就是表皮圓環、丘疹、膿疱。
- 繼發 Malassezia 皮膚炎：30-50% 會合併，特別好發在皮膚皺褶（腋窩、腹股溝、趾間）。
- 慢性外耳炎：50-80% 的 CAD 犬會有外耳炎，有時候甚至是唯一的表現。
- 苔蘚化跟色素沉著：慢性搔抓造成表皮增生、苔蘚化（lichenification）跟色素過度沉著。

### 監控計畫
| 時間點 | 監測項目 | 目標 |
|--------|---------|------|
| 每 2-4 週（治療初期） | CADESI-4 評分、PVAS 搔癢量表 | 評估治療反應 |
| 每 3 個月（穩定期） | 皮膚細胞學（搔癢區域） | 早期偵測繼發感染 |
| 每 6 個月（Oclacitinib/CsA） | CBC + 生化（ALT、BUN、Cre） | 藥物副作用監測 |
| 每年 | 尿液分析（CsA 用戶） | 腎功能監測 |
| 季節轉換時 | 臨床評估 + 調整藥物劑量 | 應對花粉季加重 |

### 藥物特異性監測
- Oclacitinib：前 6 個月每月做 CBC，盯嗜中性球減少。長期用要注意皮膚腫塊（乳突瘤、肥大細胞瘤風險微幅上升）。
- Cyclosporine：牙齦增生（約 10%）、消化道症狀（嘔吐約 25%，多半自限）。少數會有弓蟲復發的風險，戶外貓禁用。
- Lokivetmab：安全性是三者裡面最好的，副作用極少。要注意的是療效持續時間有沒有縮短，有可能是產生了抗藥物抗體。

## 五、預後與預後因子 (Prognosis)

CAD 是終生性疾病，沒辦法根治，但可以控制得很穩：
- 預後好的條件：早期診斷（< 3 歲）、飼主配合度高、對 ASIT 反應好（約 60-70%）、能找出並避開主要過敏原。
- 預後差的條件：6 月齡前發病（多半比較嚴重）、多重過敏原致敏、反覆深層膿皮症、飼主順從性差。
- ASIT：目前唯一可能改變疾病自然史的治療。大概 60-70% 的犬會有明顯改善，但要做 6-12 個月才看得出來。
- 生活品質：多模式管理做得好，多數 CAD 犬可以維持不錯的生活品質。飼主要建立的概念是「控制不是治癒」，這是長期抗戰。

## 六、人醫借鑒 (Translational Insights)

| 人醫工具/概念 | 獸醫應用潛力 | 現況 |
|-------------|-------------|------|
| Dupilumab（抗 IL-4Rα 單抗） | 犬 AD 新一代抗細胞激素治療 | Lokivetmab（anti-IL-31）已上市；犬 anti-IL-4Rα/IL-13 進入臨床前研究 |
| 表觀遺傳皮膚屏障研究（filaggrin 基因多態性） | 犬 filaggrin/SPINK5 變異與 CAD 易感性 | 人醫 FLG 突變已明確，犬品種特異性變異研究中 |
| 皮膚微生物組調控（bacteriotherapy） | 移植健康犬皮膚菌群改善 dysbiosis | 人醫 AD 噬菌體/益生菌外用試驗中，獸醫初步探索 |
| SCORAD/EASI 數位評分系統 | 犬 CADESI-4 的 AI 自動化評分 | 人醫 AI 評分準確度達皮膚科醫師水準，獸醫原型開發中 |

## 七、臨床爭議與知識空缺 (Controversies & Knowledge Gaps)

| 爭議議題 | 現況 | Evidence Level |
|---------|------|---------------|
| Oclacitinib 長期使用的腫瘤風險 | 上市後監測顯示乳突瘤/肥大細胞瘤風險微增，但因果關係未確立 | Level III |
| ASIT 最佳過敏原選擇策略（皮內試驗 vs 血清 IgE） | 兩者一致性僅 60-70%，金標準仍有爭議 | Level II |
| 犬 AD 的排除飲食試驗持續時間 | 傳統 8 週 vs 新研究建議 6 週可能足夠 | Level II |
| Lokivetmab 長期使用後抗藥物抗體（ADA）的臨床影響 | 部分犬療效漸減，ADA 盛行率與臨床意義待釐清 | Level III |
| 口服 JAK：ilunocitinib vs oclacitinib | 頭對頭 RCT 顯示第 28 天後 ilunocitinib 療效較佳，但屬廠商贊助；尚缺獨立長期安全性數據 | Level II（COI） |`,
  clinical_pearl: 'CAD 是排除性診斷。FAD 跟 AFR 這兩關絕對不能跳。台灣全年都有跳蚤在跑，沒看到不等於沒有，一定要用 isoxazoline 嚴格跑跳蚤控制至少 4 週。另外，飲食排除試驗失敗的頭號原因永遠是飼主沒乖乖配合（偷塞零食、餐桌上分一口），這件事要不斷講、不斷提醒。',
  common_mistakes: [
    '未進行排除飲食試驗即診斷 CAD（食物不良反應可完全模擬 CAD 表現）',
    '飲食排除試驗期間太短（< 8 週）或未嚴格執行',
    '僅依賴血清 IgE 檢測作為 CAD 的診斷工具（此為篩選 ASIT 過敏原用）',
    '忽略繼發性細菌或馬拉色菌感染的控制',
    '長期使用糖皮質激素而未嘗試更安全的替代療法',
  ],
  disease_data: {
    signalment: '好發 1-3 歲犬，品種偏好：法國鬥牛犬、西高地白梗、拉布拉多、金毛尋回犬、柴犬、英國鬥牛犬、德國牧羊犬。無明顯性別差異。',
    etiology: '多因素疾病：遺傳易感（皮膚屏障基因有缺陷）加上環境過敏原暴露（塵蟎、花粉、黴菌孢子），再加上皮膚菌叢失衡。台灣常見的過敏原以屋塵蟎（Dermatophagoides farinae/pteronyssinus）跟熱帶蟎為主。',
    pathogenesis: '皮膚屏障破口讓過敏原從表皮鑽進來，朗格漢斯細胞或樹突細胞抓到後，免疫往 Th2 偏移。IL-4/IL-13 驅動 IgE 生成，IgE 接上肥大細胞的 FcεRI。下次再碰到同樣過敏原，肥大細胞就脫顆粒，組胺、白三烯、前列腺素一口氣釋放，血管擴張、通透性增加、開始癢。IL-31 走另一條路，直接戳感覺神經元造成癢感。到了慢性期 Th1 也加入戰局，皮膚就會慢慢苔蘚化。',
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
      { condition: '接觸性皮膚炎', key_differentiator: '病灶侷限於接觸部位（腹部、腋下、足底），停止接觸後改善，台灣常見園藝化學品或地板清潔劑引起' },
    ],
    diagnostic_workup: '先把完整皮膚病史問清楚（發病年齡、有沒有季節性、病灶分佈、對哪些藥反應好）。然後依序排掉 FAD（嚴格跳蚤控制 4-8 週）、疥蟎（皮膚刮搔或試驗性殺蟎）、繼發感染（皮膚細胞學）、飲食試驗 8 週。前面都過了再用 Favrot 標準下 CAD 臨床診斷。要做 ASIT 的話可以加血清 IgE 或皮內試驗來選過敏原。',
    treatment_protocol: '多模式策略。急性期用 Oclacitinib 0.4-0.6 mg/kg PO BID 連 14 天（**注意：禁用於 < 12 個月幼犬**），或短期 Prednisolone 0.5 mg/kg 用 5-7 天。慢性期可選 Oclacitinib SID、Lokivetmab SC 每月一針，或 Cyclosporine 5 mg/kg SID。ASIT 反應率 50-75%，要 6-12 個月才看得出效果。輔助治療包含皮膚屏障修復、補必需脂肪酸、全年跳蚤預防、定期皮膚細胞學追蹤。',
    prognosis: 'CAD 是終身疾病，沒辦法根治但控制得宜可以過得不錯。多模式管理做得到位，多數犬可以維持良好生活品質。ASIT 是唯一有機會改變疾病自然史的治療，50-75% 的犬會臨床改善。少數犬隨著年齡會減輕。',
    monitoring: '初期每 2-4 週回診看治療反應。穩定後拉長到每 3-6 個月。每次回診要做：瘙癢評分（PVAS）、皮膚病變評分（CADESI-4）、皮膚細胞學、外耳檢查。長期用 Oclacitinib 每 6-12 個月做一次 CBC/BCS。用 Cyclosporine 要盯牙齦增生跟腸胃副作用。',
    owner_communication: 'CAD 是要終身管理的慢性病，跟人類的異位性皮膚炎很像。沒辦法根治，但靠藥物加上環境管理跟皮膚護理可以控制得很好。要跟飼主強調幾件事：按時用藥不能漏、排除飲食試驗那 8 週要嚴格執行（不能偷給任何其他食物或零食）、跳蚤預防全年都要做、定期回診、自己也要留意有沒有繼發感染的徵兆。',
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
    { type: 'guideline', citation: 'Hensel P et al. Canine atopic dermatitis: detailed guidelines for diagnosis and allergen identification. BMC Vet Res. 2015;11:196. doi:10.1186/s12917-015-0515-5', relevance: 'CAD 診斷與過敏原鑑定國際指引（ICADA）' },
    { type: 'journal', citation: 'Olivry T et al. Treatment of canine atopic dermatitis: 2015 updated guidelines from the International Committee on Allergic Diseases of Animals (ICADA). BMC Vet Res. 2015;11:210. doi:10.1186/s12917-015-0514-6', relevance: '目前最新的 ICADA 治療指引（基礎，2024 機轉回顧非新版治療指引）' },
    { type: 'guideline', citation: 'U.S. FDA Center for Veterinary Medicine. Freedom of Information Summary, Zenrelia (ilunocitinib tablets), approved September 19, 2024. animaldrugsatfda.fda.gov (FOI #15865).', relevance: '新口服 JAK 抑制劑 ilunocitinib 官方核准依據：核准日、≥12月齡、0.6–0.8 mg/kg SID、疫苗黑框警告來源（逐字內容待 DVM 依仿單核對）' },
    { type: 'journal', citation: 'Forster S, Boegel A, Despa S, Trout C, King S. Comparative efficacy and safety of ilunocitinib and oclacitinib for the control of pruritus and associated skin lesions in dogs with atopic dermatitis. Vet Dermatol. 2025;36(2):165-176. doi:10.1111/vde.13319.', relevance: '首篇 ilunocitinib vs oclacitinib 頭對頭 RCT（第 28 天後 ilunocitinib 較佳；Elanco 贊助，須註明 COI）' },
    { type: 'journal', citation: 'Kasper B, Zablotski Y, Mueller RS. Long-term use of lokivetmab in dogs with atopic dermatitis. Vet Dermatol. 2024;35(6):683-693. doi:10.1111/vde.13286.', relevance: '獨立團隊 lokivetmab 長期實證（150 犬，成功率約 77%、不良反應約 8%）' },
    { type: 'guideline', citation: 'Eisenschenk MC, Hensel P, Saridomichelakis MN, et al. Introduction to the ICADA 2023 canine atopic dermatitis pathogenesis review articles and updated definition. Vet Dermatol. 2024;35(1):3-4. doi:10.1111/vde.13183.', relevance: 'ICADA 最新致病機轉回顧與 CAD 新定義（屏障+微生物失衡+致敏）；屬機轉/定義更新非治療指引' },
    { type: 'textbook', citation: "Miller WH, Griffin CE, Campbell KL. Muller and Kirk's Small Animal Dermatology, 7th ed. Elsevier, 2013.", relevance: '皮膚科經典教材，CAD 完整章節' },
    { type: 'journal', citation: 'Favrot C et al. A prospective study on the clinical features of chronic canine atopic dermatitis and its diagnosis. Vet Dermatol. 2010;21(1):23-31. doi:10.1111/j.1365-3164.2009.00758.x', relevance: 'Favrot 診斷標準原始研究' },
  ],
  is_current: true,
  created_at: now,
};

/** 皮膚刮搔與毛髮檢查，診斷型 */
const contentSkinScraping: NodeContent = {
  id: 'CONTENT-DERM-L4-002',
  node_id: 'DERM-L4-002',
  version: 2,
  summary: '皮膚刮搔（skin scraping）跟毛髮檢查（trichogram）是皮膚科最基本、也最常用到的診斷工具。淺層刮搔抓表皮的寄生蟲（疥蟎那類），深層刮搔則是把毛囊裡的蠕形蟎找出來。毛髮拔出來鏡檢可以看毛髮週期、毛幹有沒有壞掉、有沒有皮膚癬菌。配上礦物油浸潤法跟 KOH 消化法，幾乎每間診所馬上就能做，是皮膚科第一線跑不掉的檢查。',
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

### 系統性鏡檢流程
1. 低倍（4x-10x）系統性掃描整張載玻片，發現可疑結構再切 40x 確認。
2. **Demodex**：計數各發育階段（卵→幼蟲→若蟲→成蟲）與活蟲:死蟲比例——治療監測的關鍵指標（終點＝連續刮搔「零蟲」）。
3. **Trichogram**：評估 anagen（生長期，根部膨大、有鞘、有色素）vs telogen（休止期，棒狀、無色素）比例；毛幹斷裂／分叉提示自我搔抓或結構異常；大量 telogen 提示內分泌（甲低、Cushing）或營養性脫毛。
4. **KOH 法**：耐心等角質完全消化再判讀，尋找毛幹表面／內部排列整齊的關節孢子（ecto/endothrix）。

### 敏感度／特異度
- 深層刮搔抓 Demodex：技術正確時敏感度 > 90%（最佳診斷工具）。
- 淺層刮搔抓 Sarcoptes：敏感度僅 20-50%，但特異度近 100%——**看到即確診，陰性不能排除**。
- KOH 抓癬菌：敏感度 50-70%，須搭 Wood 燈與真菌培養。
- 少量 Demodex 成蟲可能為正常共生，須結合臨床（病灶分布、各發育階段比例）判定病理性。

## 三、常見陷阱 (Pitfalls)

- **深層刮搔未「擠」皮膚**：未把毛囊深處蠕形蟎逼出即刮 → 偽陰性（最常見技術錯誤）。
- **部位選錯**：刮已苔蘚化的慢性病灶中央，蟎蟲偵測率低；應選病灶活動性邊緣／新發區。
- **疥蟎刮搔陰性即排除**：敏感度僅 20-50%，高度懷疑時應行經驗性 isoxazoline 治療性試驗（見 §六）。
- **未用礦物油**：標本乾燥、不易附著與觀察。
- **KOH 過度加熱**：標本碳化、產生氣泡或蓋玻片破裂，影響判讀。
- **薄皮膚區（眼周）深層刮搔風險高**：可改用透明膠帶壓貼法（tape impression）替代。

## 四、人醫借鑒 (Translational Insights)

| 人醫工具/概念 | 獸醫應用潛力 | 現況 |
|-------------|-------------|------|
| 皮膚鏡（dermoscopy） | 犬皮膚病灶非侵入性放大觀察 | 人醫標準工具，獸醫研究增加 |
| 共聚焦顯微鏡（confocal microscopy） | 活體皮膚細胞學（不用組織切片） | 研究工具，臨床應用前 |
| 次世代定序（NGS）微生物鑑定 | 犬皮膚感染病原精準鑑定 | 研究中，成本尚高 |

## 五、臨床爭議與知識空缺 (Controversies & Knowledge Gaps)

| 爭議議題 | 現況 | Evidence Level |
|---------|------|---------------|
| 犬過敏原特異性 IgE 檢測（血清 vs 皮膚點刺）的一致性 | 兩種方法結果不一致率高達 30-40% | Level II |
| 犬皮膚組織病理的品質與標準化 | 不同病理醫師間判讀一致性待改善 | Level III |

## 六、近期實證更新 (Recent Evidence Updates)

| 主題 | 實證更新 | 臨床意涵 | 來源 |
|------|---------|---------|------|
| Isoxazoline 改寫蟎病診療 | Mueller 等 2020 WAVD 蠕形蟎共識以 isoxazoline（fluralaner/sarolaner/afoxolaner/lotilaner）為犬貓蠕形蟎／疥蟎一線治療，安全有效且大幅簡化療程。 | 診斷仍靠深層刮搔／trichoscopy 確認與監測（終點＝連續刮搔零蟲），但治療已從每日 amitraz 藥浴轉為口服 isoxazoline。 | Mueller 2020 |
| 疥蟎「治療性試驗」門檻下降 | 因淺層刮搔對 Sarcoptes 敏感度僅 20-50%，加上 isoxazoline 安全有效，高度懷疑而刮搔陰性者直接以 isoxazoline 行診斷性治療試驗，已成主流策略。 | 不應因「刮搔陰性」延誤疥蟎治療；治療性試驗兼具診斷與治療價值。 | Mueller 2020 |
| 非侵入輔助工具 | 皮膚鏡（dermoscopy/trichoscopy）可放大觀察毛幹、蟎蟲與毛囊鑄型；分子（PCR）法對低蟲量疥蟎較刮搔敏感。兩者補足傳統刮搔的敏感度缺口。 | 屬輔助、未取代刮搔；資源許可時可提升低蟲量病例偵測率（呼應 §四 dermoscopy）。 | Miller & Kirk 教材 |`,
  clinical_pearl: '深層刮搔最關鍵的動作是「擠」。用拇指跟食指擠皮膚皺褶，把毛囊深處的蠕形蟎逼到表面再刮。沒擠就直接刮，常常會抓不到，給你偽陰性。法鬥這種皮膚鬆鬆的品種，擠完之後也可以直接用透明膠帶壓一壓（tape impression）取代刮搔，效果不錯。',
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
    sensitivity_specificity: '深層刮搔抓 Demodex 在技術正確時敏感度 > 90%。淺層刮搔抓 Sarcoptes 敏感度只有 20-50%，但特異度接近 100%，看到就是確診。KOH 法抓皮膚癬菌敏感度普普（50-70%），要搭 Wood 燈跟真菌培養一起用。',
    cost_benefit: '成本超低，刀片、載玻片、礦物油、顯微鏡而已，每間診所都能跑。深層刮搔是蠕形蟎最好的診斷工具。淺層刮搔敏感度低，CP 值一般，但只要陽性就是確診。',
  },
  procedure_data: null,
  visual_placeholders: [
    { position: '深層刮搔技術段落', type: 'annotated_image', description: '深層刮搔擠壓技術示意圖' },
    { position: '陽性發現段落後', type: 'comparison_table', description: 'Demodex vs Sarcoptes vs Cheyletiella 顯微鏡形態比較表' },
  ],
  interactive_placeholders: [
    { position: '正文末尾', type: 'microscopy_quiz', description: '虛擬顯微鏡：辨識皮膚寄生蟲形態' },
  ],
  drug_api_links: [],
  references: [
    { type: 'textbook', citation: "Miller WH, Griffin CE, Campbell KL. Muller and Kirk's Small Animal Dermatology, 7th ed. Elsevier, 2013.", relevance: '皮膚刮搔技術與寄生蟲辨識標準參考' },
    { type: 'guideline', citation: 'Mueller RS et al. "Treatment of demodicosis in dogs: 2011 clinical practice guidelines." Vet Dermatol. 2012;23(2):86-e21. doi:10.1111/j.1365-3164.2011.01026.x', relevance: '蠕形蟎治療指引中的診斷標準' },
    { type: 'guideline', citation: 'Mueller RS, Rosenkrantz W, Bensignor E, et al. "Diagnosis and treatment of demodicosis in dogs and cats." Vet Dermatol. 2020;31(1):4-e2. doi:10.1111/vde.12806', relevance: 'WAVD 2020 蠕形蟎共識：深層刮搔/trichoscopy 診斷 + isoxazoline 一線治療（取代 v1 一條不存在的「Saridomichelakis 皮膚細胞學回顧」捏造引用）' },
  ],
  is_current: true,
  created_at: now,
};

/** 食物不良反應 (AFR)，疾病型 */
const contentAFR: NodeContent = {
  id: 'CONTENT-DERM-L3-002',
  node_id: 'DERM-L3-002',
  version: 2,
  summary: '食物不良反應（Adverse Food Reaction, AFR）包含食物過敏（免疫介導）跟食物不耐受（非免疫介導），是犬貓第三常見的過敏性皮膚病。臨床表現跟 CAD 很像，要分開只能靠嚴格的排除飲食試驗（8 週新蛋白或水解蛋白飲食）加上食物激發試驗。常見過敏原是牛肉、雞肉、乳製品、小麥。有一部分病例會合併腸胃道症狀。台灣亞熱帶氣候下，食物過敏跟環境過敏常常一起出現，本土資料看下來，雞肉跟牛肉是最常見的食物過敏原。',
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
AFR 是對飲食成分出現異常反應的總稱，分成免疫介導的食物過敏（food allergy）跟非免疫介導的食物不耐受（food intolerance）。在犬貓皮膚科裡面，AFR 是排在跳蚤過敏跟環境過敏（CAD）後面的第三大過敏性皮膚病。

### 病理機轉
### 食物過敏（免疫介導）
- Type I 過敏：食物抗原從腸道黏膜屏障破口跑進來，抗原呈現細胞抓到後活化 Th2，IgE 跑出來，肥大細胞脫顆粒。
- Type IV 過敏：T 細胞介導的遲發型反應，在部分病例裡面也有貢獻。
- 過敏原多半是分子量大於 10 kDa 的糖蛋白。

### 食物不耐受（非免疫介導）
- 藥理反應（組胺、酪胺這類生物胺）
- 代謝異常（最典型的就是乳糖不耐）
- 毒素反應

### 排除飲食試驗
### 飲食選擇
1. 新蛋白飲食：用犬貓過去沒吃過的蛋白來源，例如鹿肉、袋鼠肉、鱷魚肉。
2. 水解蛋白飲食：把蛋白水解到 10 kDa 以下，免疫系統認不出來。
3. 自煮飲食：單一新蛋白配上單一碳水。飼主執行度比較高，但要補營養素。

### 執行要點
1. 8 週嚴格執行，部分犬要拉到 10-12 週才看得出來。
2. 其他東西全部禁。零食、人食、調味料、含調味的膠囊藥外殼，通通不行。
3. 家裡其他動物要隔離餵食，不然就一起轉換飲食。
4. 用無調味藥物。
5. 飼主教育要做得仔細，最好給書面指引。

### 食物激發試驗
- 排除飲食期間症狀改善超過 50%，就可以恢復原本的飲食。
- 通常 1-14 天內症狀回來就是 AFR 確診。
- 想找出特定過敏原的話，可以一次加一種蛋白回來慢慢試。

[圖片:AFR 排除飲食試驗流程圖]

## 二、臨床表現與診斷 (Clinical Signs & Diagnosis)

- 皮膚症狀：跟 CAD 幾乎一樣。搔癢、紅斑、外耳炎、指間炎。
- 特徵性線索：全年都癢沒有季節性、類固醇效果不好或只好一半。
- 腸胃道症狀：20-30% 會合併嘔吐、軟便、排便次數變多、腸鳴音增加。
- 貓的特殊表現：頭頸部搔癢、粟粒性皮膚炎、嗜酸性肉芽腫複合體。

## 三、治療策略 (Treatment)

### 核心：找出並避開致敏蛋白
1. **確診後長期飲食管理**：以新蛋白或水解蛋白（<10 kDa）商業飲食為主；自煮須營養師平衡配方。
2. **激發試驗定位過敏原**：逐一加回單一蛋白（每種觀察 1-2 週），縮小可餵食清單。
3. **急性搔癢短期控制**：oclacitinib 或短療程 prednisolone 緩解，不取代飲食控制。
4. **繼發感染同步處理**：膿皮症／馬拉色菌依細胞學治療。
5. **合併 CAD（~20-30%）雙線管理**：飲食 + 環境過敏（ASIT/抗搔癢）並進。
> 避開致敏蛋白後多數可單靠飲食完全控制、免長期用藥（與 CAD 不同）。

## 四、併發症與監控 (Complications & Monitoring)

### 常見併發症
- 消化道症狀：10-30% 的 AFR 犬會合併慢性嘔吐、腹瀉或排氣增加，因為食物過敏會同時掃到皮膚跟腸胃。
- 繼發感染：搔抓造成繼發性膿皮症或 Malassezia，這跟 CAD 一樣。
- 營養不均衡：長期吃限制飲食（特別是自製的）有機會缺營養素。
- 飼主疲勞：排除飲食試驗要嚴格跑 6-8 週，飼主順從性是最大的關卡。

### 監控計畫
| 時間點 | 監測項目 | 目標 |
|--------|---------|------|
| 排除飲食第 2 週 | 搔癢評估 + 消化道症狀 | 初步反應（部分犬 2 週就會改善） |
| 排除飲食第 6-8 週 | PVAS + 臨床評估 | 判斷排除飲食有沒有成功 |
| 食物激發試驗 | 每次加回一種蛋白，觀察 1-2 週 | 找出真正的致敏食物 |
| 穩定期每 6 個月 | 體重、BCS、營養評估 | 確認限制飲食營養夠 |

### 注意事項
- 排除飲食期間絕對不能給零食、有味道的藥、牛皮骨這類非處方食物。
- 水解蛋白飼料跟新穎蛋白飼料效果差不多，ACVD 都列為首選。

## 五、預後與預後因子 (Prognosis)

AFR 整體預後不錯：
- 可治癒性：跟 CAD 不一樣，AFR 把致敏食物找出來避開之後，光靠飲食管理就可以完全控制，不用長期吃藥。
- 預後好的條件：單一蛋白過敏、飼主配合度高、只吃犬糧（成分好控制）。
- 預後差的條件：多重食物過敏、合併 CAD（CAD 犬大概 30% 同時有 AFR）、自由放養（吃什麼根本管不到）。
- 長期展望：嚴格飲食控制下大部分犬可以完全無症狀；少數犬會隨著年齡長出新的食物過敏。

## 六、人醫借鑒 (Translational Insights)

| 人醫工具/概念 | 獸醫應用潛力 | 現況 |
|-------------|-------------|------|
| 成分解析診斷（Component-Resolved Diagnostics, CRD） | 區分真致敏食物蛋白 vs 交叉反應，減少不必要的排除 | 人醫已常規用於花生/牛奶過敏，獸醫犬食物 CRD 開發中 |
| 口服免疫耐受療法（Oral Immunotherapy, OIT） | 犬食物過敏的脫敏治療可能性 | 人醫花生/蛋 OIT 已獲 FDA 核准，獸醫尚無研究 |
| 腸道微生物組分析 | 犬 AFR 與腸道菌群失衡的關聯 | 人醫食物過敏與微生物組研究活躍，獸醫初步資料累積中 |
| 貼膚試驗（Atopy Patch Test） | 遲發型食物過敏的輔助診斷 | 人醫用於非 IgE 介導食物過敏，犬 APT 研究結果不一致 |

## 七、臨床爭議與知識空缺 (Controversies & Knowledge Gaps)

| 爭議議題 | 現況 | Evidence Level |
|---------|------|---------------|
| 排除飲食試驗最佳持續時間：6 週 vs 8 週 | 新研究顯示 90% 反應犬在 6 週內改善，但部分犬需更長 | Level II |
| 水解蛋白飼料 vs 新蛋白飼料作為排除試驗首選 | 水解蛋白方便但價格高；新蛋白需詳細飲食史配合 | Level II |
| 血清食物特異性 IgE/IgG 檢測的診斷價值 | 目前共識認為偽陽性率極高，不建議作為診斷工具 | Level I |
| 犬食物不良反應中 IgE 介導 vs 非 IgE 介導的比例 | 多數犬 AFR 可能為非 IgE 介導，但確切機轉不明 | Level IV |

## 八、近期實證更新 (Recent Evidence Updates)

1. **無可靠體外/血清檢測（Mueller & Olivry 2017 CAT-4）**：血清 IgE/IgG、唾液、毛髮食物過敏檢測偽陽性率極高，不可用於診斷；排除飲食＋激發試驗仍為唯一可靠方法。
2. **試驗時程（Olivry 2015 CAT-1）**：約 80-90% 反應犬在 5-6 週改善；少數（含腸胃道反應者）需 8-10 週。
3. **水解 vs 新蛋白**：兩者皆為有效一線；水解蛋白仍可能殘留抗原性、極少數犬反應，個別化選擇。
4. **新興工具**：成分解析診斷（CRD）、腸道微生物組、口服免疫耐受（OIT）研究中（人醫已用）。
> AFR 確診仍須嚴格排除飲食＋激發；坊間「快速食物過敏血檢/唾液檢」不可取代，由獸醫主導診斷。`,
  clinical_pearl: '排除飲食試驗會不會成功，飼主教育就是關鍵。開始前一定要花時間講清楚「完全排除」是什麼意思。一塊小零食、一口人食、甚至有調味的藥錠，都可能讓整個試驗毀掉。建議印一份書面清單，列出哪些不能吃、哪些可以給，然後在第 2 週跟第 4 週打電話追蹤一下飼主到底有沒有照做。',
  common_mistakes: [
    '依賴血清 IgE 食物過敏原檢測作為診斷工具（偽陽性率極高，目前無可靠的血清學診斷方法）',
    '排除飲食試驗期間不夠嚴格（未排除零食、調味藥物、其他寵物的食物）',
    '試驗時間過短（< 8 週），在部分反應較慢的病例中可能出現偽陰性',
    '未進行食物激發試驗即直接診斷（症狀改善可能有其他原因）',
    '將食物不良反應與犬異位性皮膚炎視為互斥診斷（兩者可共存）',
  ],
  disease_data: {
    signalment: '犬貓均可發生，無明顯品種或性別偏好。約 33% 犬在 1 歲前發病，可在任何年齡出現。貓亦可在任何年齡發病。',
    etiology: '對飲食中特定蛋白（糖蛋白）出現的免疫介導過敏反應，或非免疫介導的不耐受。犬常見過敏原依比例：牛肉 34%、乳製品 17%、雞肉 15%、小麥 13%、大豆。貓常見：牛肉、魚、雞肉、乳製品。過敏原多半是分子量大於 10 kDa 的糖蛋白。',
    pathogenesis: '食物抗原從腸道黏膜屏障的破口鑽進來（屏障壞掉或免疫耐受失敗），在腸道相關淋巴組織（GALT）被呈現給免疫細胞，Th2 偏移後走 IgE 介導（Type I）或 T 細胞介導（Type IV）的反應。肥大細胞脫顆粒釋放組胺那些介質，皮膚或腸道就跑出發炎反應。部分病例則是非免疫介導的食物不耐受。',
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
    diagnostic_workup: '先把病史問清楚（飲食史、症狀有沒有季節性、有沒有腸胃道症狀）。然後依序排掉 FAD（嚴格跳蚤控制 4-8 週）、疥蟎、繼發感染（皮膚細胞學）。再來跑排除飲食試驗 8 週（新蛋白或水解蛋白飲食），最後做食物激發試驗確認（恢復原飲食看會不會復發）。想找出特定過敏原可以一次加一種蛋白回來試。',
    treatment_protocol: '確診後長期飲食管理就是核心。避開已知的過敏原蛋白，改用新蛋白或水解蛋白的商業飲食。自煮飲食要找營養師諮詢確保營養夠。急性搔癢短期用 Oclacitinib 或 Prednisolone 壓一下。繼發感染照感染處理。如果合併 CAD，環境過敏也要一起管。',
    prognosis: '預後不錯。飲食嚴格控制下多數犬貓皮膚症狀可以完全緩解。少數會隨時間對新蛋白也跑出過敏，這時候就要再換飲食。AFR 犬大概 20-30% 同時合併 CAD，這種要雙線管理。',
    monitoring: '換飲食後 2-4 週追瘙癢評分。確診後每 3-6 個月回診看飲食控制跟皮膚狀況。要留意有沒有對新飲食也跑出過敏。體重跟營養狀態也要盯，尤其是自煮飲食。',
    owner_communication: '食物不良反應透過嚴格飲食管理多半可以控制得很好。排除飲食試驗那 8 週要完全配合，不能給其他任何食物、零食或調味料。這是目前唯一可靠的確診方法。確診之後就要終身避開過敏原蛋白。血液過敏原檢測診斷食物過敏不準，不要依賴。',
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
    { type: 'guideline', citation: 'Mueller RS, Olivry T, Prélaud P. Critically appraised topic on adverse food reactions of companion animals (2): common food allergen sources in dogs and cats. BMC Vet Res. 2016;12:9. doi:10.1186/s12917-016-0633-8.', relevance: '犬貓常見食物過敏原系統性回顧' },
    { type: 'guideline', citation: 'Olivry T, Mueller RS, Prélaud P. Critically appraised topic on adverse food reactions of companion animals (1): duration of elimination diets. BMC Vet Res. 2015;11:225. doi:10.1186/s12917-015-0541-3.', relevance: '排除飲食試驗最佳持續時間的證據' },
    { type: 'guideline', citation: 'Mueller RS, Olivry T. Critically appraised topic on adverse food reactions of companion animals (4): can we diagnose adverse food reactions in dogs and cats with in vivo or in vitro tests? BMC Vet Res. 2017;13:275. doi:10.1186/s12917-017-1142-0.', relevance: '食物過敏體內/體外檢測診斷價值（血清檢測不可靠）' },
    { type: 'textbook', citation: "Miller WH, Griffin CE, Campbell KL. Muller and Kirk's Small Animal Dermatology, 7th ed. Elsevier, 2013.", relevance: '食物不良反應完整章節' },
    { type: 'journal', citation: 'Mueller RS, Unterer S. Adverse food reactions: pathogenesis, clinical signs, diagnosis and alternatives to elimination diets. Vet J. 2018;236:89-95. doi:10.1016/j.tvjl.2018.04.014.', relevance: 'AFR 病理機轉與診斷方法綜述' },
  ],
  is_current: true,
  created_at: now,
};

/** 跳蚤過敏性皮膚炎 (FAD)，疾病型 */
const contentFAD: NodeContent = {
  id: 'CONTENT-DERM-L3-003',
  node_id: 'DERM-L3-003',
  version: 2,
  summary: '跳蚤過敏性皮膚炎（Flea Allergy Dermatitis, FAD）是全球犬貓最常見的過敏性皮膚病。台灣亞熱帶，全年都暖暖潮潮，跳蚤根本不分季節。FAD 的本質是對跳蚤唾液裡的抗原（特別是半抗原 hapten）跑出 IgE 介導跟遲發型細胞介導的混合反應。被一隻跳蚤咬一口，過敏犬就會癢到不行。診斷主要靠臨床表現加上嚴格跳蚤控制後的反應來判斷。治療核心就是全年不斷的 isoxazoline 殺蚤劑，家裡所有動物都要一起跑。',
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
    '不需要看到跳蚤才能診斷。過敏犬會因為過度搔抓把跳蚤全部移除',
    'Isoxazoline（fluralaner, afoxolaner, sarolaner）為目前首選殺蚤劑',
    '環境控制不能忽略：跳蚤卵跟蛹占環境中跳蚤總量的 95%',
    '所有同居動物（包括貓）必須同時進行跳蚤預防',
  ],
  body: `# 跳蚤過敏性皮膚炎 (FAD)

## 一、病理機制 (Pathophysiology)



### 概述
FAD 是對貓蚤（Ctenocephalides felis）唾液蛋白產生過敏反應的皮膚病。台灣亞熱帶，跳蚤一年到頭都很活躍，FAD 在台灣根本看不出季節性。飼主說「我家狗沒看到跳蚤」，這句話絕對不能拿來排除 FAD。

### 病理機轉
跳蚤唾液裡面有 15 種以上的抗原蛋白（包含半抗原），引發混合型過敏：
1. 即時型（Type I）：IgE 介導，肥大細胞脫顆粒，被叮幾分鐘內就開始癢。
2. 遲發型（Type IV）：T 細胞介導，被叮 24-48 小時後跑出遲發性丘疹跟紅斑。
3. 晚期型反應：嗜鹼性球被招來，被叮 24 小時後持續發炎。

## 二、臨床表現與診斷 (Clinical Signs & Diagnosis)

### 犬
- 好發部位：腰背部、尾根、後腿內側、腹股溝、腹側。
- 典型病灶：丘疹、脫毛、苔蘚化、色素沉著、熱點（急性濕性皮膚炎）。
- 嚴重的會繼發膿皮症。

### 貓
- 粟粒性皮膚炎（頭頸部小丘疹結痂）
- 腹側對稱性脫毛（自己舔太兇舔出來的）
- 嗜酸性肉芽腫複合體
- 頭頸部搔癢甚至自殘

### 診斷
1. 臨床病史加上典型分佈。
2. 找到跳蚤本人或跳蚤大便（濕紙巾測試：黑色顆粒溶出紅棕色就是跳蚤糞便）。
3. 嚴格跳蚤控制試驗：Isoxazoline 全身殺蚤劑加上環境處理跑 4-8 週。
4. 症狀改善超過 50% 就支持診斷。
5. 皮內試驗：跳蚤抗原萃取物會跑出即時型跟遲發型反應，臨床研究比較常用。

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

### 常見併發症
- 繼發熱點（hot spot / 急性濕疹）：抓太兇就跑出急性濕性皮膚炎，好發腰薦部跟大腿後側。
- 繼發膿皮症：搔抓把表皮屏障弄壞，Staphylococcus 就趁機跑進來。
- 貓嗜酸性肉芽腫複合病：FAD 是貓 EGC（嗜酸性潰瘍、嗜酸性斑塊、線性肉芽腫）最常見的觸發因素。
- 心因性脫毛（貓）：慢性搔癢、過度理毛造成對稱性脫毛，看到這個一定要排除 FAD。

### 監控計畫
| 時間點 | 監測項目 | 目標 |
|--------|---------|------|
| 開始跳蚤預防後 2-4 週 | 搔癢程度、皮膚病灶變化 | 治療性診斷結果評估 |
| 每月 | 跳蚤預防用藥是否按時投予 | 確保預防不中斷 |
| 每 3 個月 | 皮膚檢查（腰薦部、腹股溝） | 早期偵測復發 |
| 每年 | 全身皮膚評估 | 評估是否合併其他過敏（CAD/AFR） |

### 預防關鍵
- 跳蚤預防全年不能停。台灣亞熱帶氣候，冬天跳蚤也照樣跑。
- 家裡所有動物一起做。貓、犬、其他哺乳動物都不能漏。
- 環境處理也要做。跳蚤卵跟幼蟲都藏在環境裡面，靠吸塵器加上含 IGR 的環境噴霧。

## 五、預後與預後因子 (Prognosis)

FAD 預後超好，是所有過敏性皮膚病裡面最容易控制的：
- 可預防性：只要嚴格跳蚤預防做下去，幾乎可以完全控制，不用長期吃免疫抑制藥。
- 預後好的條件：室內飼養、飼主配合、用 isoxazoline 那種新型殺蚤劑（一次撐 1-3 個月）。
- 預後差的條件：多犬多貓家庭（互相傳染）、戶外自由活動犬、飼主不肯持續投藥、同時合併 CAD。
- 台灣的特殊狀況：亞熱帶氣候跳蚤全年跑，冬天不能停藥。都市裡的流浪貓犬就是源源不絕的傳染源。

## 六、人醫借鑒 (Translational Insights)

| 人醫工具/概念 | 獸醫應用潛力 | 現況 |
|-------------|-------------|------|
| 人類跳蚤唾液過敏原分子定性（rCte f 1-4） | 犬跳蚤唾液過敏原的精準鑑定與診斷 | 人醫已定性 Ctenocephalides felis 唾液蛋白，獸醫 recombinant 過敏原診斷研發中 |
| 殺蟲劑抗藥性基因體監測 | 跳蚤 fipronil/pyrethroid 抗藥性即時偵測 | 人醫蚊蟲抗藥性監測系統成熟，獸醫跳蚤 kdr 基因突變監測起步 |
| 環境控制整合蟲害管理（IPM） | 結合環境治療+宿主治療+生物防治的全面跳蚤控制 | 人醫公衛 IPM 概念成熟，獸醫家庭 IPM 推廣不足 |

## 七、臨床爭議與知識空缺 (Controversies & Knowledge Gaps)

| 爭議議題 | 現況 | Evidence Level |
|---------|------|---------------|
| Isoxazoline 類藥物對跳蚤的殺滅速度是否足以防止致敏叮咬 | 殺蚤需 4-8 小時，此期間跳蚤已完成吸血與唾液注入 | Level II |
| Fipronil 在亞熱帶地區的抗藥性程度 | 台灣、東南亞 fipronil 抗藥性報告增加，但系統性調查不足 | Level III |
| FAD 犬是否需要額外的免疫調節治療（除跳蚤控制外） | 嚴格跳蚤控制後部分犬仍有殘餘搔癢，可能需短期 oclacitinib | Level III |
| 環境跳蚤蛹對所有殺蟲劑的天然抗性 | 蛹繭可存活數月，是跳蚤根除的最大障礙，目前無有效殺蛹劑 | Level II |

## 八、近期實證更新 (Recent Evidence Updates)

- **Isoxazoline 時代重塑 FAD 管理**：fluralaner/afoxolaner/sarolaner/lotilaner 口服長效殺蚤劑（1-3 個月）大幅提升投藥順從性；Rohdich（2014）RCT 顯示 fluralaner 殺蚤優於 fipronil，Dryden（2015/2016）真實居家研究證實 isoxazoline 能有效壓低跳蚤族群、減少搔癢與皮膚病灶。〔Evidence Level I-II〕
- **殺蚤速度 vs 致敏叮咬的爭議**：isoxazoline 多在數小時內殺蚤，但叮咬當下唾液抗原已注入；對高度致敏個體單靠殺蚤可能仍有殘餘搔癢，需合併環境控制與短期止癢。〔Evidence Level II〕
- **抗藥性監測**：fipronil/pyrethroid 抗藥性報告增加（尤其亞熱帶）；isoxazoline 目前尚無明確的臨床抗藥性證據，但仍需持續監測。〔Evidence Level III〕
- **全年防治與環境整合（亞熱帶重點）**：台灣等亞熱帶氣候跳蚤全年活躍，預防不可季節性中斷；環境未成熟期（卵/幼蟲/蛹）占族群 ~95%、蛹繭對殺蟲劑高度抗性，故須宿主＋環境＋全同居動物的整合防治。〔Evidence Level II〕

> ⚠️ 上述更新（特別是殺蚤速度與致敏的關係、抗藥性趨勢）仍待 DVM 依個案與當地流行病學覆核後採用。`,
  clinical_pearl: '在台灣，「我的狗從來不出門所以不會有跳蚤」這句話是最常聽到的飼主迷思。跳蚤可以透過人的衣服、訪客、其他動物帶進室內。就算純室內犬，也應該全年用 isoxazoline 預防。診斷 FAD 最可靠的方法就是「治療性診斷」，給 isoxazoline 嚴格控制 4-8 週，看反應就知道了。',
  common_mistakes: [
    '因為沒有看到跳蚤或跳蚤糞便就排除 FAD（過敏犬過度搔抓會移除跳蚤）',
    '僅治療有症狀的動物而忽略同居動物的跳蚤預防',
    '僅使用外用殺蚤劑而未進行環境控制（環境中蟲卵+蛹占 95%）',
    '在台灣僅在夏季進行跳蚤預防（台灣全年有跳蚤活動）',
    '使用已經有抗藥性的舊型除蚤產品（fipronil 在部分地區抗藥性已經很明顯）',
  ],
  disease_data: {
    signalment: '犬貓均好發，無品種限制。犬好發 1-5 歲，但任何年齡皆可。戶外活動犬與多寵物家庭風險更高。台灣全年發生，無明顯季節差異。',
    etiology: '對貓蚤（Ctenocephalides felis）唾液中至少 15 種蛋白抗原跑出的過敏反應。主要過敏原是唾液半抗原跟高分子量糖蛋白。對致敏動物來說，被叮一口就足以引爆劇烈搔癢。',
    pathogenesis: '跳蚤唾液蛋白被注進皮膚，朗格漢斯細胞抓到抗原，活化 Th2 並產生 IgE（即時型 Type I）。肥大細胞脫顆粒，組胺跟白三烯就跑出來，馬上開始癢。同時 T 細胞介導遲發型反應（Type IV），24-48 小時後發炎還持續。後面嗜鹼性球跟嗜酸性球浸潤進來，造成慢性發炎跟組織損傷。',
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
    diagnostic_workup: '先把病史問清楚（跳蚤預防史、家裡有沒有其他動物、室內室外活動範圍）。理學檢查找跳蚤本人或大便，看典型分佈。濕紙巾測試（跳蚤糞便溶出紅棕色）也很有用。然後跑嚴格跳蚤控制試驗 4-8 週（isoxazoline 加上環境控制，家裡所有動物一起做），最後看臨床改善多少。',
    treatment_protocol: 'isoxazoline 全年不能停（家裡所有動物都要做）：Fluralaner 25-56 mg/kg PO q12w 或 Afoxolaner 2.5 mg/kg PO q4w。環境控制做吸塵、IGR 噴霧、清洗寢具。急性期搔癢用短期 Prednisolone 0.5 mg/kg 跑 3-5 天，或 Oclacitinib。有繼發感染就照感染處理。',
    prognosis: '預後不錯。嚴格而且持續做跳蚤控制，多數犬貓症狀可以完全消失。關鍵就是預防不能停，家裡所有動物要一起跑。一停藥症狀就回來。',
    monitoring: '開始跳蚤控制後 2-4 週看初步反應，4-8 週看完整反應。穩定後每 3-6 個月回診確認飼主有沒有持續做跳蚤預防。也要盯繼發感染。',
    owner_communication: 'FAD 是對跳蚤唾液的過敏，被一隻跳蚤咬一口就會癢到不行。治療的核心是跳蚤預防全年不能停。台灣的氣候跳蚤一年到頭都很活躍。家裡所有犬貓都要同時做預防。環境清潔也很重要（吸塵、洗寢具），因為跳蚤卵跟蛹都藏在環境裡。',
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
    { type: 'journal', citation: 'Carlotti DN, Jacobs DE. Therapy, control and prevention of flea allergy dermatitis in dogs and cats. Vet Dermatol. 2000;11(2):83-98. doi:10.1046/j.1365-3164.2000.00204.x', relevance: 'FAD 治療、控制與預防的經典回顧' },
    { type: 'journal', citation: 'Rohdich N, Roepke RKA, Zschiesche E. A randomized, blinded, controlled and multi-centered field study comparing the efficacy and safety of Bravecto (fluralaner) against Frontline (fipronil) in flea- and tick-infested dogs. Parasit Vectors. 2014;7:83. doi:10.1186/1756-3305-7-83', relevance: 'Isoxazoline vs fipronil 殺蚤效果 RCT 比較' },
    { type: 'journal', citation: 'Dryden MW, Canfield MS, Kalosy K, et al. Evaluation of fluralaner and afoxolaner treatments to control flea populations, reduce pruritus and minimize dermatologic lesions in naturally infested dogs in private residences in west central Florida USA. Parasit Vectors. 2016;9:365. doi:10.1186/s13071-016-1654-7', relevance: 'Isoxazoline 真實居家防蚤、減少搔癢與病灶實證' },
    { type: 'journal', citation: 'Dryden MW, Smith V, Chwala M, et al. Evaluation of afoxolaner chewables to control flea populations in naturally infested dogs in private residences in Tampa FL, USA. Parasit Vectors. 2015;8:286. doi:10.1186/s13071-015-0897-z', relevance: 'Afoxolaner 居家跳蚤族群控制田野研究' },
  ],
  is_current: true,
  created_at: now,
};

/** 蠕形蟎症 (Demodicosis)，疾病型 */
const contentDemodicosis: NodeContent = {
  id: 'CONTENT-DERM-L3-004',
  node_id: 'DERM-L3-004',
  version: 2,
  summary: '蠕形蟎症（Demodicosis）是蠕形蟎（Demodex spp.）過度增殖造成的皮膚病，犬以 Demodex canis 為主。分成局部型跟廣泛型。幼犬型（< 18 個月）多半會自限性消退，成犬型（4 歲後才新發的）就要去翻有沒有潛在免疫抑制問題。Isoxazoline 已經把傳統的 ivermectin 跟 amitraz 擠下來，成為首選治療。診斷以深層皮膚刮搔為金標準。台灣高溫多濕的環境蠕形蟎症盛行率比較高，本土常見的短鼻品種（西施犬、巴哥犬）是高風險族群。',
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
    'Isoxazoline（fluralaner, afoxolaner, sarolaner, lotilaner）為目前首選（WAVD 2020 共識），療效優於 ivermectin/amitraz',
    '治療持續至連續 2 次（間隔 4 週）深層刮搔皆為陰性後再持續 1 個月',
    '廣泛型蠕形蟎症犬不建議用於繁殖（遺傳易感性）',
  ],
  body: `# 蠕形蟎症 (Demodicosis)

## 一、病理機制 (Pathophysiology)



### 概述
蠕形蟎症是犬寄生蟲性皮膚病裡面最重要的幾個之一。Demodex canis 本來就住在犬的毛囊裡面（出生時被母犬傳過來），平常井水不犯河水。一旦宿主免疫功能（特別是 T 細胞）出狀況，蟎蟲就過度增殖，跑出毛囊炎跟繼發感染。

### 病原學
- Demodex canis：最常見，住在毛囊，雪茄形（250-300 μm）。
- Demodex injai：身體比較長，住在皮脂腺，好發於梗犬類。
- Demodex cornei：短小型，住在角質層，比較少見。

### 分類
### 依範圍分
- 局部型：病灶不到 4 處，或只影響 1 個肢體。90% 會自己好。
- 廣泛型：5 處以上、或累及 2 個以上肢體、或全身性。要積極治療。

### 依發病年齡分
- 幼犬型（< 18 月齡）：遺傳性 T 細胞功能缺陷，蟎蟲就藉機過度增殖。
- 成犬型（4 歲後新發）：要去翻有沒有潛在免疫抑制：Cushing、甲狀腺低下、腫瘤、化療。

## 二、臨床表現與診斷 (Clinical Signs & Diagnosis)

- 局部型：1-4 處的局限性脫毛斑，輕微紅斑，好發在面部跟前肢。
- 廣泛型：廣泛脫毛、毛囊炎（丘疹或膿皰）、結痂、苔蘚化。
- 膿皮蟎症（Pododemodicosis）：指間紅腫、疼痛、瘻管。
- 繼發深層膿皮症：嚴重病例會出現蜂窩織炎、淋巴結腫大，有敗血症風險。

### 診斷
1. 深層皮膚刮搔是金標準：擠壓皮膚、刮到 capillary ooze、低倍鏡看。
2. 要記錄各發育階段比例（卵、幼蟲、若蟲、成蟲）跟活蟲對死蟲的比例。
3. 毛髮拔取鏡檢（Trichogram）：眼周、指間這種不好刮的地方適合用。
4. 皮膚切片：深層膿皮症或刮搔不到的部位用來輔助診斷。

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

### 常見併發症
- 深層膿皮症（最嚴重）：廣泛型蠕形蟎症加上繼發 Staphylococcus，跑出癤腫（furunculosis）、蜂窩組織炎，甚至有敗血症風險。
- 毛囊損傷性瘢痕脫毛：嚴重病例毛囊整個被破壞，就算蟎蟲清光了，毛也回不來。
- 潛在的免疫抑制原因：成犬突發蠕形蟎症是一個紅旗信號。Cushing、甲狀腺低下、腫瘤、免疫抑制藥物，每個都要排掉。

### 監控計畫
| 時間點 | 監測項目 | 目標 |
|--------|---------|------|
| 每月 | 深層皮膚刮搔（≥ 5 個部位） | 蟎蟲數量趨勢（活蟲/蟲卵/幼蟲比例） |
| 每月 | 臨床照片記錄 | 客觀評估病灶面積變化 |
| 治療滿 2-3 月 | 連續 2 次陰性刮搔（間隔 1 個月） | 停藥標準（傳統） |
| 使用 isoxazoline | 每月臨床評估 + 適時刮搔 | 通常 2-3 個月可陰性 |
| 治癒後 6-12 個月 | 追蹤皮膚刮搔 | 偵測復發 |

### 治療反應評估
- 蟎蟲計數趨勢：活成蟲變少、蟲卵不見了，就是反應好。
- 治療失敗：用了 3 個月還看得到活成蟲，要回頭翻有沒有潛在免疫問題，順便確認飼主有沒有真的把藥餵下去。

## 五、預後與預後因子 (Prognosis)

- 幼犬局部型：預後超好。大概 90% 會自己好（6-18 月齡免疫成熟後就 OK），通常不用治療或局部處理一下就好。
- 幼犬全身型：預後不錯。isoxazoline（fluralaner、afoxolaner）治癒率超過 95%，比舊藥 ivermectin 安全也有效。
- 成犬發病型：預後要看情況。
  - 找到根本原因並控制住，預後就不錯。
  - 找不到原因或矯正不了（例如晚期腫瘤），預後就比較差，可能要終生管理。
- 品種好發：沙皮犬、英國鬥牛犬、波士頓梗、鬥牛梗。這些品種的免疫功能可能有品種特異性缺陷。

## 六、人醫借鑒 (Translational Insights)

| 人醫工具/概念 | 獸醫應用潛力 | 現況 |
|-------------|-------------|------|
| 皮膚鏡（dermoscopy）偵測 Demodex | 非侵入性辨識毛囊口蠕形蟎（「Demodex tails」特徵） | 人醫酒糟鼻 Demodex 診斷常規使用，獸醫 trichoscopy 應用漸增 |
| Ivermectin 全基因體藥物動力學研究 | P-glycoprotein/ABCB1 多態性與 ivermectin 毒性風險預測 | 人醫 ivermectin 廣泛用於蟲病，獸醫 MDR1 基因檢測已商業化 |
| 免疫檢查點（immune checkpoint）與蠕形蟎共生 | 犬 Demodex 免疫逃脫機轉（T 細胞耗竭、Treg 上調） | 人醫研究 Demodex folliculorum 與酒糟鼻免疫學，獸醫機轉研究有限 |

## 七、臨床爭議與知識空缺 (Controversies & Knowledge Gaps)

| 爭議議題 | 現況 | Evidence Level |
|---------|------|---------------|
| Isoxazoline 治療蠕形蟎症的最佳療程與停藥標準 | 傳統標準「連續 2 次陰性刮搔後再 1 個月」是否可縮短 | Level II |
| 局部型蠕形蟎症（< 4 處）是否需要系統性治療 | 約 90% 可自癒，但何時介入仍無共識 | Level III |
| 成犬型蠕形蟎症潛在免疫抑制因素的最佳排查流程 | 醫源性（類固醇/CsA）最常見，但隱匿性腫瘤的篩查深度無標準 | Level IV |
| Demodex injai（長體蠕形蟎）的治療反應是否不同於 D. canis | 臨床觀察 D. injai 治療反應可能較慢，但比較研究缺乏 | Level IV |

## 八、近期實證更新（2018–2025）

### WAVD 2020 國際共識
世界獸醫皮膚科學會（WAVD）2020 年治療共識（Mueller 等, Vet Dermatol 2020）正式把 isoxazolines 列為犬全身性蠕形蟎症首選，並明確治療終點：殺蟎治療須持續到「連續兩次深層刮搔陰性」後再延長 4 週；反應較慢者應追蹤至少 12 個月才宣告痊癒。核心觀念是「治到寄生蟲學痊癒，不是治到外觀正常」——皮膚外觀改善常比蟎蟲清除早數週至數月，切勿一見毛長回來就停藥。

### Isoxazoline 四藥齊備
除 fluralaner、afoxolaner、sarolaner 外，lotilaner（Credelio）亦有對照試驗證實療效（Snyder 等, Parasit Vectors 2017，day 84 蟎蟲 100% 清除）。四藥在試驗中蟎蟲減少率均 ≥99%，優於同期 imidacloprid-moxidectin（約 85–90%）。歐洲多中心田野試驗（Petersen 等 2020，124 隻臨床犬）顯示單次 fluralaner 使 98% 犬隻無活蟎，且幼年型與成年型療效相當。
> ⚠ 實證註記：多數國家此為仿單外（extra-label）使用（美國 FDA 核准者僅外用 amitraz）；關鍵試驗多由藥廠贊助。劑量請 DVM 依各藥仿單核對。

### 安全性與已過時的教學
Isoxazolines 避開 amitraz 的 α2 副作用（心搏過緩、鎮靜、低血壓）與巨環內酯類神經毒性；fluralaner 即使 3 倍劑量於 ABCB1-1Δ（MDR1）牧羊犬（柯利、澳牧、喜樂蒂）僅見輕微反應，故為這些品種的安全選擇——惟全類別仍有神經不良反應（顫抖、運動失調、癲癇）通報，癲癇病史犬須謹慎。**已過時**：每日漸增口服 ivermectin、以 amitraz 藥浴為標準首選，現多視為二線或無法取得 isoxazoline 時的替代方案。

### 貓蠕形蟎（簡述）
貓需區分 D. cati（寄生毛囊；全身型常提示 FeLV/FIV、糖尿病、Cushing 等潛在免疫抑制，須查病因）與 D. gatoi（寄生角質層、具傳染性、會癢、好發後半身、易誤判為過敏，須同治同住貓並做環境清潔）。治療以石硫合劑藥浴、imidacloprid-moxidectin 滴劑為主；口服 fluralaner 有成功個案報告但尚無貓的對照試驗，且貓無任何核准的抗蠕形蟎仿單適應症。
> 臨床內容需獸醫師上線前覆核。`,
  clinical_pearl: '成犬新發的廣泛型蠕形蟎症就是一面紅旗，永遠要回頭翻潛在的免疫抑制原因。最常見的是醫源性（長期類固醇、cyclosporine）跟內分泌疾病（Cushing）。如果都找不到，就要建議做腫瘤篩查。另外，MDR1（ABCB1）基因突變的犬（柯利犬、牧羊犬類）絕對不能用高劑量 ivermectin，會出人命。',
  common_mistakes: [
    '局部型蠕形蟎症即開始全身性藥物治療（90% 可自癒，應先觀察 4-8 週）',
    '治療期間未定期進行深層刮搔監測治療反應（應每 4 週刮搔一次）',
    '未達到停藥標準即停藥（需連續 2 次陰性刮搔後再持續 1 個月）',
    '成犬型蠕形蟎症未排查潛在免疫抑制因素',
    '對 MDR1 突變品種使用高劑量 ivermectin（可致命性神經毒性）',
  ],
  disease_data: {
    signalment: '幼犬型：< 18 月齡，好發品種：英國鬥牛犬、法國鬥牛犬、沙皮犬、拳師犬、德國牧羊犬、大丹犬。成犬型：> 4 歲新發，無品種偏好，需排查免疫抑制。',
    etiology: 'Demodex canis 本來就住在犬的毛囊裡（哺乳期由母犬傳過來）。會跑出病是因為宿主 T 細胞免疫功能出狀況。幼犬型是遺傳性 T 細胞功能不全；成犬型多半是後天免疫抑制（Cushing、腫瘤、醫源性免疫抑制）。',
    pathogenesis: '免疫功能出狀況（T 細胞被抑制、IL-10 升高、Th1 反應不夠）後，Demodex 在毛囊中過度增殖。毛囊撐大、爆掉，跑出毛囊周圍的肉芽腫性發炎。Staphylococcus pseudintermedius 趁機進來造成深層毛囊炎或癤病，嚴重的就會發展成蜂窩織炎甚至敗血症。',
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
    diagnostic_workup: '多點做深層皮膚刮搔，包含病灶邊緣跟新發區域。記錄蟎蟲各發育階段跟活蟲比例。皮膚細胞學看有沒有繼發感染。成犬型還要加做 CBC/BCS、T4/TSH、腎上腺功能檢查、腹部超音波。有深層膿皮症的話送細菌培養跟藥敏。',
    treatment_protocol: '局部型先觀察 4-8 週，90% 會自己好。如果進展到廣泛型就開始治療。廣泛型首選 isoxazoline：Fluralaner 25-56 mg/kg PO 單劑或 Afoxolaner 2.5 mg/kg PO q4w。繼發深層膿皮症給全身性抗生素 4-6 週（依藥敏選藥）。每 4 週做一次深層刮搔追蹤。成犬型同時要處理潛在免疫抑制原因。',
    prognosis: '局部型預後超好，90% 會自己好。廣泛型幼犬型用 isoxazoline 治療痊癒率超過 95%。成犬型預後就要看潛在病因能不能控制。指間型（pododemodicosis）療程最長、反應也最差。廣泛型的犬建議絕育不要繁殖。',
    monitoring: '每 4 週做深層皮膚刮搔，記錄蟎蟲數量跟發育階段變化。治療要持續到連續兩次（間隔 4 週）刮搔都陰性，然後再多用一個月。治療結束後 3 個月跟 6 個月各追蹤一次，確認沒有復發。',
    owner_communication: '蠕形蟎症不會傳染給人或其他動物（這蟲本來就是犬的正常共生）。幼犬型局部病灶多半會自己好，廣泛型就要吃幾個月的藥。重要的是要定期回診做皮膚刮搔，確認蟎蟲真的清掉了才能停藥。廣泛型的犬建議絕育不要再繁殖。',
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
    { type: 'guideline', citation: 'Mueller RS, Rosenkrantz W, Bensignor E, et al. Diagnosis and treatment of demodicosis in dogs and cats: Clinical consensus guidelines of the World Association for Veterinary Dermatology. Vet Dermatol. 2020;31(1):4-e2. doi:10.1111/vde.12806.', relevance: '現行國際共識（取代 2011 版）：isoxazolines 首選、治療終點（兩次陰性後再 4 週、慢反應者追蹤 ≥12 個月）、診斷與貓 D. cati/D. gatoi 區分' },
    { type: 'journal', citation: 'Zhou X, Hohman A, Hsu WH. Review of extralabel use of isoxazolines for treatment of demodicosis in dogs and cats. J Am Vet Med Assoc. 2020;256(12):1342-1346. doi:10.2460/javma.256.12.1342.', relevance: '彙整四種 isoxazoline 關鍵 RCT、各藥治癒率、MDR1 安全性與仿單外使用現況' },
    { type: 'journal', citation: 'Petersen I, Chiummo R, Zschiesche E, et al. A European field assessment of the efficacy of fluralaner (Bravecto) chewable and spot-on formulations for treatment of dogs with generalized demodicosis. Parasit Vectors. 2020;13:304. doi:10.1186/s13071-020-04159-2.', relevance: '最大規模田野試驗（124 隻臨床犬）：單次 fluralaner 98% 無活蟎，幼年/成年型療效相當' },
    { type: 'journal', citation: 'Fourie JJ et al. Efficacy of orally administered fluralaner (Bravecto) or topically applied imidacloprid/moxidectin (Advocate) against generalized demodicosis in dogs. Parasit Vectors. 2015;8:187. doi:10.1186/s13071-015-0775-8.', relevance: 'Fluralaner 治療廣泛型蠕形蟎症的關鍵研究（開啟 isoxazoline 典範轉移）' },
    { type: 'textbook', citation: "Miller WH, Griffin CE, Campbell KL. Muller and Kirk's Small Animal Dermatology, 7th ed. Elsevier, 2013.", relevance: '蠕形蟎症完整章節' },
    { type: 'journal', citation: 'Perego R et al. Trial of the efficacy of a commercial diet in the treatment of canine generalized demodicosis associated with a deep pyoderma. Vet Res Commun. 2019;43:55-61.', relevance: '⚠️ 待 DVM 查證/建議移除：Crossref 查無此「商業飼料治療犬全身性 demodicosis」文，且此主張本身無真實文獻支持（demodicosis 標準治療為 isoxazoline/巨環內酯類，非飼料）。真實 Perego 2019 文為治療綜述：Perego R et al. Critically appraised topic for the most effective and safe treatment for canine generalised demodicosis. BMC Vet Res. 2019;15(1):17. doi:10.1186/s12917-018-1767-7（不涉飼料）。建議 DVM 刪除此飼料主張或改引真實治療綜述' },
  ],
  is_current: true,
  created_at: now,
};

/** 細菌性膿皮症 (Bacterial Pyoderma)，疾病型 */
const contentPyoderma: NodeContent = {
  id: 'CONTENT-DERM-L3-005',
  node_id: 'DERM-L3-005',
  version: 2,
  summary: '細菌性膿皮症是犬最常見的皮膚感染，主要病原是 Staphylococcus pseudintermedius。依深度分成表層（表面膿皮症）、淺層（表皮內膿皮症）跟深層（毛囊跟真皮膿皮症）。膿皮症幾乎都是繼發於別的潛在病因（過敏、內分泌疾病、蠕形蟎症），找出並處理潛在病因才是防止復發的關鍵。甲氧西林抗藥性 S. pseudintermedius（MRSP）越來越多，所以該培養還是要培養，依藥敏選藥這件事不能省。',
  learning_objectives: [
    '依深度分類表層、淺層與深層膿皮症並辨識各自的典型病灶',
    '說明膿皮症幾乎永遠繼發於潛在病因的重要概念',
    '正確執行皮膚細胞學快速診斷細菌感染',
    '規劃經驗性與依培養結果的抗生素治療方案',
    '說明 MRSP 的臨床意義與抗生素管理原則',
  ],
  key_points: [
    'S. pseudintermedius 是犬膿皮症最主要的病原（> 90%）',
    '膿皮症幾乎都是繼發性的。一定要找出潛在病因（CAD、FAD、AFR、Cushing、甲低、蠕形蟎）',
    '皮膚細胞學是快速診斷的第一步：見退化性嗜中性球吞噬球菌即確診',
    '淺層膿皮症經驗性首選：Cephalexin 22-30 mg/kg PO BID，治療至臨床痊癒後再延長 7-14 天',
    '深層膿皮症需依細菌培養與藥敏選擇抗生素，療程 4-8 週',
    'MRSP 盛行率上升，反覆感染或經驗性治療失敗時應進行培養',
    '表皮脫屑環（epidermal collarette）是淺層膿皮症的特徵性病灶',
  ],
  body: `# 細菌性膿皮症 (Bacterial Pyoderma)

## 一、病理機制 (Pathophysiology)



### 概述
犬膿皮症是獸醫皮膚科日常最常遇到的問題之一。最關鍵的觀念就一句話：它幾乎都是繼發的。只治感染不處理根本原因，後面一定不斷復發。

### 分類（依深度）
### 表層膿皮症
- 急性濕性皮膚炎（Hot spot）：急性自殘造成的潮濕糜爛病灶。
- 皮膚皺褶膿皮症（Skin fold pyoderma）：皮膚皺褶處（口唇、面部、尾部）。

### 淺層膿皮症
- 膿疱疹（Impetigo）：幼犬腹部的非毛囊性膿皰。
- 表皮膿皮症：毛囊炎、膿皰、表皮脫屑環（epidermal collarette）、色素沉著這一連串。

### 深層膿皮症
- 深層毛囊炎或癤病：毛囊破裂，感染跑進真皮跟皮下組織。
- 蜂窩織炎：瀰漫性皮下感染。
- 德國牧羊犬深層膿皮症：品種特異性，跟免疫缺陷有關。

### 病原學
- 主要：Staphylococcus pseudintermedius（> 90%）
- 次要：S. aureus、S. schleiferi、Pseudomonas aeruginosa（深層或慢性病例）
- MRSP：甲氧西林抗藥性 S. pseudintermedius，台灣盛行率大概 15-30%

## 二、臨床表現與診斷 (Clinical Signs & Diagnosis)

1. 皮膚細胞學是最重要的第一步：膠帶壓貼或直接抹片，看到退化性嗜中性球裡面有吞噬的球菌就確診。
2. 細菌培養跟藥敏：深層膿皮症、反覆復發、經驗性治療失敗的時候一定要做。
3. 把潛在病因翻一遍：過敏、內分泌、蠕形蟎、免疫抑制。

## 三、治療策略 (Treatment)

### 淺層膿皮症
- 經驗性抗生素：[藥物:Cephalexin] 22-30 mg/kg PO BID
- 或 [藥物:Amoxicillin-clavulanate] 12.5-25 mg/kg PO BID
- 療程：臨床痊癒後再多用 7-14 天（通常共 3-4 週）
- 輔助：含 [藥物:Chlorhexidine] 3-4% 的藥浴或慕斯，一週 2-3 次

### 深層膿皮症
- 依培養跟藥敏選藥
- 療程：臨床痊癒後再多用 14-21 天（通常共 6-8 週）
- 嚴重病例可以合併局部治療

[圖片:膿皮症深度分類與對應病灶示意圖]

## 四、併發症與監控 (Complications & Monitoring)

### 常見併發症
- 抗藥菌感染（MRSP）：Methicillin-resistant Staphylococcus pseudintermedius 在全球越來越多（部分地區到 20-40%），反覆或慢性膿皮症風險最高。
- 深層膿皮症：表層膿皮症沒控制好就會往真皮層跑（癤腫 furunculosis），跑出疼痛、瘢痕、局部蜂窩組織炎。
- 反覆復發：膿皮症會反覆復發幾乎都有潛在原因（過敏、內分泌、免疫缺陷），光吃抗生素是不夠的。

### 監控計畫
| 時間點 | 監測項目 | 目標 |
|--------|---------|------|
| 治療第 7 天 | 臨床檢查（病灶進展 vs 消退） | 早期評估抗生素效力 |
| 治療第 21 天 | 重複皮膚細胞學 | 確認感染是否清除 |
| 抗生素完成後 1 週 | 皮膚細胞學 + 臨床評估 | 確認治癒（抗生素需用至病灶完全消退後至少 7 天） |
| 治癒後每 1-3 月 | 根本原因控制狀態評估 | 預防復發 |

### 抗生素使用原則
- 表層膿皮症：優先外用治療（chlorhexidine 3-4% 洗劑或噴劑加上 mupirocin / fusidic acid 局部塗抹），中度以上才用全身性抗生素。
- 深層膿皮症：一定要用全身性抗生素 4-6 週以上，加上外用輔助。
- 何時送培養：深層膿皮症、反覆膿皮症（一年 3 次以上）、之前抗生素治療失敗的時候。
- MRSP 處理：**嚴格依藥敏選藥**（mecA 對所有 β-lactam 抗藥）；常用 chloramphenicol，doxycycline 僅在藥敏敏感時；**rifampicin 不可單用**（須合併並監測肝毒性）；避免氟喹諾酮單壓。

## 五、預後與預後因子 (Prognosis)

- 單次表層膿皮症：預後超好。適當抗生素 3-4 週通常可以完全治癒。
- 反覆膿皮症：預後要看根本原因抓不抓得到、控不控制得住。
  - 根本原因可控（例如 CAD 而且管理得宜）：預後不錯，復發頻率會明顯下降。
  - 根本原因難控（嚴重多重過敏、免疫缺陷）：可能要間歇性或低劑量維持抗生素。
- 深層膿皮症：預後要保留一點。療程長（4-8 週）、痛、可能留疤。德國牧羊犬的深層膿皮症是品種特異性問題，常常要反覆治療。
- MRSP 感染：預後其實不差，但用藥選擇變少、療程拉長，感染控制也要更嚴格（不要傳給其他動物或家裡免疫力差的人）。

## 六、人醫借鑒 (Translational Insights)

| 人醫工具/概念 | 獸醫應用潛力 | 現況 |
|-------------|-------------|------|
| MRSA 快速分子檢測（PCR/LAMP） | 犬 MRSP 的快速鑑定以指導經驗性抗生素選擇 | 人醫 MRSA 即時 PCR 已常規，獸醫 MRSP 快速檢測商業化開發中 |
| 噬菌體療法（phage therapy） | 多重抗藥犬膿皮症的替代治療 | 人醫臨床試驗增加（特別是 MRSA 傷口），獸醫犬 S. pseudintermedius 噬菌體初步研究 |
| 抗菌肽（antimicrobial peptides） | 犬局部膿皮症的非抗生素外用治療 | 人醫合成抗菌肽外用製劑進入臨床試驗，獸醫研究起步 |
| 抗生素管理計畫（antimicrobial stewardship） | 獸醫院系統性抗生素使用監控 | 人醫已有成熟的 ASP 架構，獸醫 AAHA/AAVD 指引推廣中 |

## 七、臨床爭議與知識空缺 (Controversies & Knowledge Gaps)

| 爭議議題 | 現況 | Evidence Level |
|---------|------|---------------|
| 淺層膿皮症經驗性 vs 培養導引抗生素選擇 | MRSP 盛行率升高（台灣 ~15-30%）使經驗性治療風險增加 | Level II |
| 淺層膿皮症是否可僅用局部治療（藥浴）而不用全身性抗生素 | 輕度/局部病灶局部治療可能足夠，但比較研究有限 | Level III |
| 抗生素療程的最佳持續時間 | 傳統「臨床痊癒後再延長 7-21 天」vs 更短療程的可行性 | Level III |
| 反覆膿皮症是否需每次都做培養 | 資源與成本考量 vs 抗藥性風險，目前建議至少第二次復發時培養 | Level III |

## 八、近期實證更新 (Recent Evidence Updates)

1. **局部治療優先＋抗菌管理（ISCAID/WAVD）**：表面/淺層膿皮症以外用（chlorhexidine 2-4% ± mupirocin/fusidic acid）為一線，可單獨控制並減少全身抗生素；全身性僅限外用不足或深層。
2. **MRSP 上升**：經驗性全身抗生素風險增加 → 培養導向；MRSP 對所有 β-lactam 抗藥（mecA），須嚴格依藥敏；rifampicin 不可單用（肝毒性）、doxycycline 僅敏感時、避免氟喹諾酮單壓。
3. **潛在病因控制為防復發核心**：反覆膿皮症必查並控制過敏/內分泌等根本原因，非僅抗生素。
4. **療程個別化**：傳統「臨床痊癒後再 7-21 天」之最短療程仍在研究；外用輔助可能縮短全身療程。
> 抗生素選擇、療程與外用方案須由獸醫依細胞學/培養藥敏與抗菌管理原則決定。`,
  clinical_pearl: '表皮脫屑環（epidermal collarette）是淺層膿皮症最具特徵性的病灶。環形鱗屑邊緣往中心翻起，中央是色素沉著或輕微紅斑。看到這個就應該做皮膚細胞學。記住：膿皮症是「果」不是「因」，每一個反覆膿皮症的病例都要回頭翻根本原因。',
  common_mistakes: [
    '僅治療膿皮症而不排查潛在病因（導致反覆復發）',
    '抗生素療程過短（應至臨床痊癒後再延長 7-21 天）',
    '深層膿皮症未做細菌培養與藥敏即經驗性治療',
    '忽略局部治療（藥浴）的輔助效果',
    '反覆使用同一種抗生素而不進行藥敏檢測（助長抗藥性）',
  ],
  disease_data: {
    signalment: '犬為主，任何品種、年齡、性別均可。特定品種易感：德國牧羊犬（深層膿皮症）、沙皮犬、鬥牛犬類（皮膚皺褶膿皮症）。膿皮症在貓極為罕見，出現時需高度懷疑潛在免疫抑制。',
    etiology: '主要病原是 Staphylococcus pseudintermedius，本來就住在犬皮膚上。皮膚屏障破掉或免疫狀態改變的時候就會過度增殖。常見潛在病因：過敏性皮膚病（CAD、FAD、AFR）占 70%，再來是內分泌疾病（Cushing、甲低）、蠕形蟎症、免疫抑制藥物。',
    pathogenesis: '有潛在病因把皮膚屏障打壞或讓免疫狀態改變，S. pseudintermedius 就黏上來大量增殖。它會分泌毒素跟超級抗原招來嗜中性球，膿皰就形成。淺層就停在表皮內或毛囊性膿皰，深層的話毛囊會破裂，跑出異物反應，繼發感染擴散到真皮跟皮下組織。',
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
      { condition: '藥物疹（Drug eruption）', key_differentiator: '近期藥物暴露史（常見：磺胺類、頭孢菌素、NSAIDs），病灶分佈可能對稱或泛發，停藥後改善' },
    ],
    diagnostic_workup: '先做皮膚細胞學（膠帶壓貼、直接抹片或膿皰穿刺），確認看到退化性嗜中性球加上被吞的球菌。深層或反覆病例送細菌培養跟藥敏。然後把潛在病因翻一遍：皮膚刮搔（找蠕形蟎）、過敏檢查、CBC/BCS、T4、皮質醇。',
    treatment_protocol: '淺層膿皮症用經驗性 Cephalexin 22-30 mg/kg PO BID 跑 3-4 週。深層膿皮症依培養藥敏選抗生素跑 6-8 週。輔助局部治療用 Chlorhexidine 3-4% 藥浴或慕斯 q2-3 天。同時要翻並處理潛在病因。MRSP 依藥敏結果選藥，可能要用到 chloramphenicol、rifampin、doxycycline 那類二線藥。',
    prognosis: '急性膿皮症適當治療預後不錯。關鍵就是找出並控制潛在病因不讓它復發。沒處理潛在病因的反覆膿皮症就是 MRSP 的溫床。深層膿皮症療程長，可能留疤。',
    monitoring: '抗生素開始用 2 週後回診看反應。繼續治療到臨床痊癒後再多用 7-21 天。回診要複查皮膚細胞學確認感染清掉了。要盯潛在病因控制得怎樣。反覆復發的話重新評估潛在病因跟抗生素選擇。',
    owner_communication: '膿皮症多半是其他潛在疾病（例如過敏）造成的繼發感染。只用抗生素可以暫時壓下去，但不處理根本原因就會反覆發作。抗生素一定要把整個療程吃完，不可以看症狀好了就提早停。沒吃完只會養出抗藥菌。藥浴是很重要的輔助，可以減少全身性抗生素的用量。',
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
    { type: 'guideline', citation: 'Hillier A, Lloyd DH, Weese JS, et al. Guidelines for the diagnosis and antimicrobial therapy of canine superficial bacterial folliculitis (Antimicrobial Guidelines Working Group of the International Society for Companion Animal Infectious Diseases). Vet Dermatol. 2014;25(3):163-e43. doi:10.1111/vde.12118.', relevance: 'ISCAID 犬表層膿皮症診斷與抗菌治療指引' },
    { type: 'journal', citation: 'Loeffler A, Lloyd DH. What has changed in canine pyoderma? A narrative review. Vet J. 2018;235:73-82. doi:10.1016/j.tvjl.2018.04.002.', relevance: '犬膿皮症進展回顧與 MRSP 現況' },
    { type: 'journal', citation: 'Bannoehr J, Guardabassi L. Staphylococcus pseudintermedius in the dog: taxonomy, diagnostics, ecology, epidemiology and pathogenicity. Vet Dermatol. 2012;23(4):253-e52. doi:10.1111/j.1365-3164.2012.01046.x.', relevance: 'S. pseudintermedius 與 MRSP 病原學' },
    { type: 'textbook', citation: "Miller WH, Griffin CE, Campbell KL. Muller and Kirk's Small Animal Dermatology, 7th ed. Elsevier, 2013.", relevance: '膿皮症完整分類與治療章節' },
  ],
  is_current: true,
  created_at: now,
};

/** 馬拉色菌皮膚炎 (Malassezia Dermatitis)，疾病型 */
const contentMalassezia: NodeContent = {
  id: 'CONTENT-DERM-L3-006',
  node_id: 'DERM-L3-006',
  version: 2,
  summary: '馬拉色菌皮膚炎是嗜脂酵母菌 Malassezia pachydermatis 過度增殖引起的犬常見皮膚感染，與細菌性膿皮症同為犬最常見的續發性皮膚感染之一。M. pachydermatis 本來就是犬皮膚的正常菌群，皮膚微環境一變（潮濕、皮脂分泌增加、有過敏性皮膚病），它就趁機過度增殖，且幾乎總是「續發於」潛在病因（過敏/角化異常/內分泌）。典型表現是油膩膩的皮膚、特殊的酸臭味、紅斑跟苔蘚化，好發在皮膚皺褶、指間跟耳道。診斷靠皮膚細胞學＋相符臨床（WAVD 2020 無普世計數閾值）。治療以局部抗黴菌藥浴為第一線，嚴重/廣泛時才加全身性抗黴菌藥（首選 itraconazole）。',
  learning_objectives: [
    '描述 M. pachydermatis 從正常共生到致病性過度增殖的條件',
    '辨識馬拉色菌皮膚炎的典型臨床特徵與好發部位',
    '正確執行並判讀皮膚細胞學中的馬拉色菌',
    '規劃全身性與局部性抗黴菌治療方案',
  ],
  key_points: [
    'M. pachydermatis 是犬皮膚正常共生酵母菌（Malassezia 屬中「唯一」非脂質依賴種，可長於未加脂質之 SDA；近年基因體研究顯示此為培養表型例外），過度增殖時致病',
    '最常繼發於過敏性皮膚病（CAD 為首，其次 FAD/食物過敏），其次角化異常、內分泌病。只治馬拉色菌不控制潛在病因會反覆復發',
    '典型三徵：油脂樣皮膚 + 特徵性酸臭異味 + 瘙癢',
    '好發部位：指間、腹側皮膚皺褶、頸腹側、耳道、口唇皺褶',
    '皮膚細胞學見花生/瓶形酵母菌（3-8 μm、廣基單極出芽）；⚠️ WAVD 2020 **無普世計數閾值**，「≥2-3/HPF」僅經驗參考、須結合相符臨床（耳道 ≥5/犬、≥12/貓 源自 Ginel 2002 單一研究）',
    '**第一線為外用**（2% chlorhexidine + 2% miconazole 洗劑 2x/週、接觸 5-10 分，WAVD 強證據）；全身性僅用於嚴重/廣泛或外用無效，**首選 Itraconazole** 5 mg/kg PO q24h（或每週連續 2 天脈衝）',
    'Ketoconazole 5-10 mg/kg PO q24h 僅為替代（因肝毒性 FDA/EMA 2013 警示、貓禁用而受限）',
  ],
  body: `# 馬拉色菌皮膚炎 (Malassezia Dermatitis)

## 一、病理機制 (Pathophysiology)



### 概述
馬拉色菌皮膚炎是犬最常見的黴菌性/微生物性皮膚病之一，與細菌性膿皮症並列為犬最常見的兩種「續發性」皮膚感染（現行 WAVD 2020 共識並未給出明確名次，故不宜稱「第二常見」）。M. pachydermatis 本來就是犬皮膚正常菌群的一份子——它是 Malassezia 屬中「唯一」非脂質依賴的種（可長於未添加脂質的 Sabouraud 培養基；惟基因體研究顯示其實仍缺脂肪酸合成酶、僅利用培養基之微量脂質，故此「非脂質依賴」標籤屬培養表型上的例外）——特定條件下才會大量增殖搞出事。台灣高溫多濕，剛好就是它愛的環境。

### 病理機轉
平常宿主免疫（嗜中性球、補體、脂質代謝）會壓住馬拉色菌的數量。以下這幾件事會打破平衡：
1. 皮膚微環境改變：變得更潮濕、皮脂分泌異常、pH 變動。
2. 皮膚屏障受損：過敏性皮膚病、角化異常。
3. 免疫功能改變：過敏造成局部免疫反應失常。
4. 醫源性因素：長期吃抗生素把競爭的細菌都清掉。

馬拉色菌一爆量就會分泌脂肪酶分解皮脂，生成促炎的脂質代謝物，造成搔癢跟發炎。少數犬還會對馬拉色菌跑出 IgE 介導過敏（馬拉色菌過敏）。

## 二、臨床表現與診斷 (Clinical Signs & Diagnosis)

- 油膩膩的皮膚：摸起來黏黏的，皮脂分泌變多。
- 特殊的酸臭味：酸臭、發酵感（就是俗稱的「髒狗味」）。
- 紅斑跟搔癢：癢到不行，會搔抓舔咬。
- 苔蘚化跟色素沉著：慢性病例皮膚增厚，黑色素沉著很明顯。
- 好發部位：指間、腋下、腹股溝、頸腹側、口唇皺褶、耳道。

### 診斷
1. 皮膚細胞學是首選：膠帶壓貼，Diff-Quik 染色，用 50x 或 100x 油浸鏡看。
   - 花生/足印形（histopathology 常呈瓶形）酵母菌，廣基單極出芽（broad-based monopolar budding），直徑約 3-8 μm。
   - ⚠️ **WAVD 2020：無經驗證的普世計數閾值**——「每視野超過 X 個」本質上任意，數量因部位、品種、採樣法與宿主免疫而大幅變動，過敏體質犬可在極低菌量即出現症狀。常引用之「皮膚 ≥2-3/HPF」僅為經驗參考，**須結合相符臨床（並輔以抗黴菌治療反應）**判定，勿僅憑固定計數斷點。
2. 耳道拭子細胞學：常引用犬 ≥5、貓 ≥12 個/高倍視野（源自 Ginel 2002 單一半定量研究，非普世斷點）。
3. 培養通常不需要：Sabouraud 培養基，37°C 培養會長乳白色菌落（M. pachydermatis 為 Malassezia 屬中唯一可不加脂質生長者）。

## 三、治療策略 (Treatment)

### 局部（第一線，WAVD 2020 強證據）
- **Miconazole 2% + Chlorhexidine 2% 藥浴：每週 2 次，接觸至少 5-10 分鐘**（輕度/局部病灶可單用外用即足）
- 含 ketoconazole 或 climbazole 的洗耳液（耳道感染時）

### 全身性（僅用於嚴重/廣泛病灶，或外用無效/不切實際時）
- **首選 [藥物:Itraconazole] 5 mg/kg PO q24h，或 5 mg/kg 每週連續 2 天脈衝給藥**（可間歇給藥、耐受性較佳）
- [藥物:Ketoconazole] 5-10 mg/kg PO q24h 為**替代選項**（Negre 2009 建議取低劑量 5 mg/kg 以減副作用）；因肝毒性（人醫 FDA/EMA 2013 警示）與**貓禁用**而受限
- 與食物一起吃吸收較好；療程約 2-4 週，達臨床緩解後再續 7-10 天，起始後 3-4 週回診複驗（臨床＋細胞學雙重終點）
- ⚠️ **Cyclosporine 交互作用**：ketoconazole 為強效 CYP3A4 抑制劑，併用會降 cyclosporine 清除（犬清除率約降 60-65%），臨床上約可讓 cyclosporine 減量 50-75%。**注意 itraconazole 本身也是強效 CYP3A4 抑制劑、同樣會升高 cyclosporine 濃度，並不能藉「改用 itraconazole」規避此交互作用**——不論用哪種 azole 都須減量＋治療藥物監測（TDM）；改用 itraconazole 的理由是其肝毒性較低，而非避免交互作用。

[圖片:馬拉色菌皮膚細胞學典型影像（花生形酵母菌）]

## 四、併發症與監控 (Complications & Monitoring)

### 常見併發症
- 脂漏性皮膚炎惡化：Malassezia 靠皮膚表面的脂質增殖，又刺激更多皮脂分泌，惡性循環。
- 慢性苔蘚化：長期 Malassezia 加搔癢，表皮增厚、色素沉著（特別是腹側、腋窩）。
- 繼發細菌感染：Malassezia 跟 Staphylococcus 常常同時出現，混合感染要一起處理。
- 外耳炎：Malassezia 是犬外耳炎最常見的微生物之一，超過 50% 的外耳炎有它。

### 監控計畫
| 時間點 | 監測項目 | 目標 |
|--------|---------|------|
| 治療第 2 週 | 搔癢評估 + 氣味改善 | 初步療效（Malassezia 減少 → 氣味快速改善） |
| 治療第 3-4 週回診 | 皮膚細胞學＋臨床評估 | Malassezia 明顯減少＋臨床緩解（臨床＋細胞學雙重終點，勿僅憑固定計數）|
| 穩定後每 2-3 月 | 皮膚細胞學 + 臨床評估 | 早期偵測復發 |
| 根本原因控制中 | 依原發病監控計畫 | CAD、甲狀腺低下等需同步管理 |

### 治療反應指標
- 氣味消退：最早也最明顯的改善指標，通常 1-2 週內就會看到。
- 細胞學計數：治療前後的 Malassezia 數量比較（每個油鏡視野）。

## 五、預後與預後因子 (Prognosis)

- 根本原因可控：預後不錯。Malassezia 本身用外用或口服抗黴菌藥就壓得住。
- 復發率超高：Malassezia 是犬皮膚正常共生菌。根本原因（CAD、脂漏症、皮膚皺褶）沒處理掉，停藥後幾乎一定回來。
- 品種好發（WAVD 2020）：西高地白梗、巴吉度、美國可卡犬、西施犬、貴賓犬、拳師犬、查理士王小獵犬、德國牧羊犬、臘腸犬。好發主要與並存的過敏/角化異常/內分泌病相關；鬥牛犬等皺褶多品種則好發「局部型」皮膚皺褶炎（intertrigo）內的馬拉色菌繼發增生（非典型全身型好發品種）。常需終生間歇性抗黴菌維持。
- 長期管理策略：每週 1-2 次含 chlorhexidine 加 miconazole 或 ketoconazole 的藥浴，可以有效預防復發，成本低、副作用少。

## 六、人醫借鑒 (Translational Insights)

| 人醫工具/概念 | 獸醫應用潛力 | 現況 |
|-------------|-------------|------|
| Malassezia 種特異性 PCR 定量 | 犬皮膚 M. pachydermatis 菌量客觀監測 | 人醫 Malassezia spp. 分子鑑定已常規，獸醫定量 PCR 研究中 |
| 抗黴菌洗劑新配方（1% ketoconazole + piroctone olamine） | 犬馬拉色菌長期維持洗浴的低刺激替代配方 | 人醫脂漏性皮膚炎洗髮精配方成熟，獸醫類似配方開發中 |
| Malassezia 過敏原特異性免疫治療 | 對 Malassezia 致敏犬的脫敏治療 | 人醫 Malassezia-specific ASIT 用於異位性皮膚炎有初步證據，獸醫尚無研究 |

## 七、臨床爭議與知識空缺 (Controversies & Knowledge Gaps)

| 爭議議題 | 現況 | Evidence Level |
|---------|------|---------------|
| 犬皮膚細胞學馬拉色菌的「有意義」閾值 | 傳統 ≥ 2-3/HPF（油浸鏡），但閾值因取樣部位與犬種而異 | Level III |
| Ketoconazole vs Itraconazole 作為全身性抗 Malassezia 首選 | Ketoconazole 便宜但肝毒性較高，itraconazole 更安全但成本高 | Level II |
| Malassezia 對 azole 類抗黴菌藥的抗藥性趨勢 | 近年個案報告增加但系統性監測不足，台灣缺乏本地數據 | Level IV |
| Malassezia 作為 CAD 過敏原（IgE 致敏）的臨床意義 | 部分 CAD 犬對 Malassezia 蛋白致敏，但治療意義待釐清 | Level III |

## 八、近期實證更新 (Recent Updates)

- **治療首選外用、全身首選 itraconazole（WAVD 2020 共識, Bond 等）**：2% chlorhexidine + 2% miconazole 洗劑（每週 2 次、接觸 5-10 分）為第一線（強證據）；全身性 azole 保留給嚴重/廣泛病灶，首選 itraconazole（可脈衝給藥），ketoconazole 因肝毒性（FDA/EMA 2013）與貓禁用而退居替代。
- **細胞學無普世閾值**：WAVD 2020 明言「每視野超過 X 個」的定義本質任意，須結合部位/品種/臨床判讀；耳道 ≥5（犬）/≥12（貓）源自 Ginel 2002 單一研究。
- **azole 抗藥性受關注（Peano 2020）**：M. pachydermatis 對 azole 敏感度下降之個案增加（含 ERG11 變異），惟系統性監測與臨床斷點尚未建立，台灣缺本地數據。
- **馬拉色菌過敏之免疫光譜**：宿主反應涵蓋 immediate(IgE)／delayed(第四型)／接觸型，常為混合；馬拉色菌為 CAD 之惡化/續發因子（約 1/3 異位性犬併發），非原發病因；過敏原專一性免疫治療（ASIT）對部分致敏犬可降搔癢（初步證據）。`,
  clinical_pearl: '「鼻子」是診斷馬拉色菌皮膚炎最被低估的工具。馬拉色菌爆量會跑出特殊的酸臭、發酵味，經驗多的皮膚科醫師在動物剛走進診間就能聞到。聞到這味道就直接做膠帶壓貼細胞學確認。另外，如果一隻犬又癢又苔蘚化、抗生素卻怎麼用都沒起色，麻煩一定要記得檢查馬拉色菌。',
  common_mistakes: [
    '僅治療馬拉色菌而未排查潛在過敏性皮膚病（復發率極高）',
    '皮膚細胞學取樣部位不當（應選擇油脂最多的皺褶與指間）',
    '局部藥浴接觸時間不足（需至少 10 分鐘）',
    '全身性抗黴菌藥物未與食物同服（影響吸收）',
    '將馬拉色菌引起的苔蘚化/色素沉著誤判為皮膚腫瘤',
  ],
  disease_data: {
    signalment: '犬為主，好發品種（WAVD 2020）：西高地白梗、巴吉度、美國可卡犬、西施犬、貴賓犬、拳師犬、查理士王小獵犬、德國牧羊犬、臘腸犬。皮膚皺褶多的品種（沙皮犬、鬥牛犬）好發「局部型」皮膚皺褶炎（intertrigo）內之馬拉色菌繼發增生。無明顯年齡或性別偏好。台灣潮濕氣候發病率高。',
    etiology: 'M. pachydermatis 本來就住在犬皮膚上（耳道、指間、皮膚皺褶特別多）。會大量增殖通常是因為：過敏性皮膚病（最常見）、角化異常、內分泌疾病（甲低）、長期吃抗生素、環境太潮濕。部分犬還會對馬拉色菌跑出 IgE 介導過敏反應。',
    pathogenesis: '潛在病因把皮膚微環境改掉（變潮濕、皮脂變多、pH 改變），M. pachydermatis 就趁機大量增殖，分泌脂肪酶把皮脂分解成促炎脂質，引發發炎跟癢。一抓屏障又被弄壞，惡性循環。少數犬還會跑出抗馬拉色菌 IgE，變成馬拉色菌過敏（Type I），癢得更厲害。',
    clinical_signs: [
      { sign: '油膩膩的皮膚加上異味', category: 'primary', description: '皮膚摸起來油膩，伴有特殊的酸臭發酵味' },
      { sign: '紅斑與搔癢', category: 'primary', description: '癢到不行，好發指間、腋下、腹股溝、頸腹側' },
      { sign: '苔蘚化', category: 'secondary', description: '慢性病例皮膚明顯增厚、粗糙' },
      { sign: '色素沉著', category: 'secondary', description: '黑色素沉著很明顯，尤其腹側跟指間' },
      { sign: '外耳炎', category: 'secondary', description: '耳道分泌物變多，棕色蠟狀分泌物' },
    ],
    staging: null,
    differential_diagnosis: [
      { condition: '細菌性膿皮症', key_differentiator: '細胞學見球菌與嗜中性球，無花生形酵母菌（兩者可共存）' },
      { condition: '犬異位性皮膚炎', key_differentiator: 'CAD 常合併馬拉色菌，治療馬拉色菌後瘙癢仍持續則提示共存 CAD' },
      { condition: '皮膚癬菌症', key_differentiator: '環形脫毛、Wood 燈螢光、真菌培養可鑑別' },
      { condition: '甲狀腺低下', key_differentiator: '非瘙癢性對稱脫毛、嗜睡、肥胖、T4 降低' },
    ],
    diagnostic_workup: '皮膚細胞學是第一線：膠帶壓貼指間、皮膚皺褶、腋下這些地方，Diff-Quik 染色後用油浸鏡看。同時也要看有沒有合併細菌感染。然後把潛在病因翻一遍：過敏檢查、T4/TSH、皮膚刮搔。',
    treatment_protocol: '第一線為外用（WAVD 2020 強證據）：Miconazole 2% + Chlorhexidine 2% 藥浴每週 2 次、接觸 5-10 分鐘（輕度/局部可單用）。全身性僅用於嚴重/廣泛或外用無效，首選 Itraconazole 5 mg/kg PO q24h（或每週連 2 天脈衝）；Ketoconazole 5-10 mg/kg q24h 為替代（肝毒性、貓禁用）。療程 2-4 週、臨床緩解後續 7-10 天，3-4 週回診複驗（臨床＋細胞學雙重終點）。同時控制潛在過敏；合併膿皮症加抗生素。⚠️ 與 Cyclosporine 併用：ketoconazole 與 itraconazole 皆為強效 CYP3A4 抑制劑、皆會升高 cyclosporine 濃度（須減量 50-75% ＋ TDM）——改用 itraconazole 不能規避此交互作用（其優點為肝毒性較低）。',
    prognosis: '單次發作治療預後不錯，3-4 週可以臨床痊癒。但如果潛在的過敏沒有控制，復發率會超高。跟 CAD 共存的犬，常常要長期間歇性局部抗黴菌治療。',
    monitoring: '治療 2 週後回診做皮膚細胞學。治療要到細胞學陰性後再多用 1 週。穩定後要盯潛在過敏的控制。反覆復發的話，考慮長期每週 1-2 次維持性藥浴。',
    owner_communication: '馬拉色菌本來就住在狗皮膚上，特定條件下（過敏、潮濕）才會大量增殖造成皮膚病。治療要靠口服抗黴菌藥跟藥浴。藥浴的泡沫要停留至少 10 分鐘才有效。同時要把潛在的過敏問題控制好，不然就會反覆發作。台灣潮濕的環境裡，保持皮膚乾燥很重要，特別是皮膚皺褶跟指間。',
  },
  diagnostic_data: null,
  procedure_data: null,
  visual_placeholders: [
    { position: '診斷段落後', type: 'annotated_image', description: '馬拉色菌皮膚細胞學：花生形酵母菌高倍鏡影像' },
    { position: '臨床表現段落後', type: 'annotated_image', description: '馬拉色菌皮膚炎典型病灶分佈圖' },
  ],
  interactive_placeholders: [
    { position: '治療段落後', type: 'interactive_quiz', description: '馬拉色菌皮膚炎情境：由病灶範圍/嚴重度選擇外用 vs 全身性治療，並排查潛在病因（過敏/內分泌）' },
  ],
  drug_api_links: ['Itraconazole', 'Ketoconazole', 'Miconazole', 'Chlorhexidine'],
  references: [
    { type: 'guideline', citation: 'Bond R, Morris DO, Guillot J, et al. Biology, diagnosis and treatment of Malassezia dermatitis in dogs and cats: clinical consensus guidelines of the World Association for Veterinary Dermatology. Vet Dermatol. 2020;31(1):28-e4. doi:10.1111/vde.12834.', relevance: 'WAVD 2020 馬拉色菌現行臨床共識（診斷/治療首選/無普世閾值）' },
    { type: 'textbook', citation: "Miller WH, Griffin CE, Campbell KL. Muller and Kirk's Small Animal Dermatology, 7th ed. St. Louis: Elsevier; 2013.", relevance: '馬拉色菌皮膚炎完整章節' },
    { type: 'journal', citation: 'Negre A, Bensignor E, Guillot J. Evidence-based veterinary dermatology: a systematic review of interventions for Malassezia dermatitis in dogs. Vet Dermatol. 2009;20(1):1-12. doi:10.1111/j.1365-3164.2008.00721.x.', relevance: '治療循證系統性回顧（外用 2% chlorhexidine+miconazole 最高證據）' },
    { type: 'journal', citation: 'Peano A, Johnson E, Chiavassa E, et al. Antifungal resistance regarding Malassezia pachydermatis: where are we now? J Fungi (Basel). 2020;6(2):93. doi:10.3390/jof6020093.', relevance: '2020 M. pachydermatis 對 azole 抗藥性回顧（近期）' },
    { type: 'journal', citation: 'Nardoni S, Dini M, Taccini F, Mancianti F. Occurrence, distribution and population size of Malassezia pachydermatis on skin and mucosae of atopic dogs. Vet Microbiol. 2007;122(1-2):172-177. doi:10.1016/j.vetmic.2006.12.023.', relevance: '異位性犬馬拉色菌菌量分布（支持部位/計數判讀之族群差異）' },
  ],
  is_current: true,
  created_at: now,
};

/** 外耳炎 (Otitis Externa)，疾病型 */
const contentOtitis: NodeContent = {
  id: 'CONTENT-DERM-L3-007',
  node_id: 'DERM-L3-007',
  version: 2,
  summary: '外耳炎是犬貓最常見的耳科疾病，犬大概 10-20%、貓 2-6% 都會碰到。理解外耳炎的關鍵就是「PSPP」分類系統：原發因素（Primary）、繼發因素（Secondary）、易感因素（Predisposing）、持續因素（Perpetuating）。過敏性皮膚病是犬外耳炎最常見的原發因素，占 43-75%。耳道細胞學是基本中的基本，要靠它鑑定感染微生物（球菌、桿菌、馬拉色菌）才知道怎麼治療。慢性外耳炎會跑到中耳炎，必須更積極處理。台灣亞熱帶高溫多濕，外耳炎盛行率本來就高，垂耳犬在這種環境下復發率更高。',
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
    '耳道細胞學是每次外耳炎就診的必做檢查。不做細胞學就治療等於蒙眼',
    '球菌感染：含 fusidic acid 或 polymyxin B 的耳用製劑',
    '桿菌感染（常為 Pseudomonas）：含 fluoroquinolone 或 polymyxin B，依培養藥敏調整',
    '馬拉色菌感染：含 clotrimazole 或 miconazole 的耳用製劑',
    '慢性外耳炎需評估中耳是否受累（鼓膜完整性、影像學）',
    '局部治療優先：單純外耳炎不常規用全身抗生素（保留給中耳炎/嚴重）；局部用藥靠細胞學而非全身 C&S 的 MIC',
  ],
  body: `# 外耳炎 (Otitis Externa)

## 一、病理機制 (Pathophysiology)



### 概述
外耳炎是從外耳道上皮一路到鼓膜的炎症性疾病。犬的耳道是 L 型（垂直段加水平段），這個解剖讓排水跟通氣都很差，分泌物容易卡住，微生物也好增殖。

### PSPP 分類系統
### Primary（原發因素）：耳道發炎的根本原因
- 過敏：CAD（最常見）、FAD、AFR，大概 50% 外耳炎犬的根本原因。
- 耳道異物：草芒、毛髮。
- 內分泌：甲狀腺低下。
- 角化異常：原發性皮脂溢。
- 自體免疫：天疱瘡。

### Secondary（繼發因素）：在已經發炎的耳道裡面增殖的微生物
- 球菌（Staphylococcus、Streptococcus）
- 桿菌（Pseudomonas aeruginosa，慢性最常見）
- 馬拉色菌（M. pachydermatis）

### Predisposing（易感因素）：讓外耳炎更容易發生的條件
- 耳道結構：垂耳犬（可卡犬、巴吉度）、耳道狹窄（沙皮犬）
- 耳道毛髮太多（貴賓犬）
- 潮濕環境、游泳

### Perpetuating（持續因素）：讓外耳炎好不了的東西
- 耳道增生跟狹窄（慢性炎症造成）
- 中耳炎（鼓膜穿孔或感染往內擴散）
- 耳道礦化（鈣化）

## 二、臨床表現與診斷 (Clinical Signs & Diagnosis)

1. 耳鏡檢查：評估耳道紅腫程度、分泌物性質、鼓膜完整性
2. 耳道細胞學（必做）：棉棒取樣 → Diff-Quik 染色 → 油浸鏡檢
   - 球菌：每 HPF > 5 個有臨床意義
   - 桿菌：每 HPF > 0 即有意義（正常不應出現）
   - 馬拉色菌：每 HPF > 5 個有臨床意義
3. 細菌培養與藥敏：桿菌感染、反覆/慢性病例
4. 影像學：疑似中耳炎時行 CT 或 MRI

## 三、治療策略 (Treatment)

### 耳道清洗
- 溫生理食鹽水或商業洗耳液
- 鼓膜完整：可用含 chlorhexidine 或 Tris-EDTA 的洗耳液
- 鼓膜破裂：僅用溫生理食鹽水

### 局部耳用製劑
- 球菌：含 fusidic acid、polymyxin B 或 fluoroquinolone 的耳劑。
- 桿菌（Pseudomonas）：含 polymyxin B、[藥物:Enrofloxacin] 或 silver sulfadiazine 的耳劑。
- 馬拉色菌：含 clotrimazole、miconazole 或 ketoconazole 的耳劑。
- 炎症控制：含 dexamethasone 或 betamethasone 的複方製劑。

### 全身性治療（嚴重/中耳炎）
- [藥物:Fluoroquinolone] PO（Pseudomonas 中耳炎）
- 全身性抗黴菌（嚴重馬拉色菌）
- 口服糖皮質激素短期使用（嚴重腫脹）

[圖片:犬耳道解剖圖（L 型結構）與 PSPP 分類圖解]

## 四、併發症與監控 (Complications & Monitoring)

### 常見併發症
- 中耳炎延伸：反覆外耳炎 → 鼓膜破裂 → 中耳炎（大概 50% 慢性外耳炎會合併中耳炎）→ 前庭症狀、Horner syndrome、顏面神經麻痺。
- 耳道增生狹窄：慢性發炎讓耳道上皮增生、纖維化、骨化 → 不可逆狹窄 → 最後常要走 TECA-LBO（全耳道切除加外側鼓泡切開）。
- 耳血腫：搖頭抓耳太兇，耳殼裡面血管破裂 → 耳翼腫起來 → 要手術引流。
- 抗藥菌感染：反覆用耳用抗生素就養出 Pseudomonas aeruginosa 或 MRSP 抗藥菌。

### 監控計畫
| 時間點 | 監測項目 | 目標 |
|--------|---------|------|
| 治療第 7-10 天 | 耳鏡檢查 + 細胞學 | 評估初始治療反應 |
| 治療第 21-28 天 | 耳鏡 + 細胞學 | 確認感染清除、鼓膜完整性 |
| 治癒後每 1-3 月 | 耳鏡檢查 | 早期偵測復發 |
| 每 6 月（慢性外耳炎） | 耳道影像評估（必要時 CT） | 評估耳道是否進行性狹窄 |

### 治療反應評估
- 分泌物量跟性質的變化（膿性 → 漿液性 → 乾燥就是在改善）
- 耳道腫脹消退程度（看得到鼓膜就是個好指標）
- 細胞學：細菌或 Malassezia 計數歸零

## 五、預後與預後因子 (Prognosis)

- 急性外耳炎（首次發作）：預後超好。適當的局部治療 2-4 週通常可以完全治癒。
- 反覆性外耳炎：預後要看根本原因有沒有控制。
  - 過敏（CAD/AFR）是原因的話，控制過敏就等於控制外耳炎。
  - 結構性（垂耳犬、沙皮犬這種耳道狹窄的）可能要終生間歇性耳道清潔跟維持。
- 慢性增生性外耳炎：預後要保留。耳道狹窄到不可逆的時候，內科治療效果有限，可能要走 TECA-LBO（手術治癒率高但是不可逆）。
- 品種易感性：可卡犬、拉布拉多、巴吉度獵犬，這些垂耳加耳道狹窄加皮脂分泌旺盛的就是最高風險族群。

## 六、人醫借鑒 (Translational Insights)

| 人醫工具/概念 | 獸醫應用潛力 | 現況 |
|-------------|-------------|------|
| 生物膜（biofilm）靶向治療 | 犬慢性 Pseudomonas 外耳炎的抗生物膜策略 | 人醫 biofilm 研究活躍（慢性中耳炎），獸醫 Tris-EDTA + N-acetylcysteine 研究中 |
| 耳道內藥物緩釋系統（in-situ gel） | 減少飼主每日投藥次數，提升順從性 | 人醫耳用緩釋凝膠已上市，獸醫 florfenicol/terbinafine 緩釋耳劑（如 Osurnia/Claro）已可用 |
| CT/MRI 引導微創中耳引流 | 犬中耳炎的精準引流與藥物投遞 | 人醫微創耳科手術成熟，獸醫 video otoscopy 引導鼓膜穿刺引流漸增 |

## 七、臨床爭議與知識空缺 (Controversies & Knowledge Gaps)

| 爭議議題 | 現況 | Evidence Level |
|---------|------|---------------|
| 慢性外耳炎何時從保守治療轉為手術（TECA-LBO） | 無標準化決策標準，依賴臨床判斷與飼主意願 | Level IV |
| 鼓膜破裂時 fluoroquinolone 耳劑的耳毒性風險 | 一般認為比 aminoglycosides 安全，但缺乏大型安全性研究 | Level III |
| 外耳炎維持治療（prophylactic ear cleaning）的最佳頻率 | 經驗性建議每週 1-2 次，但過度清洗可能刺激耳道 | Level IV |
| 犬外耳炎 Pseudomonas biofilm 的最佳破壞策略 | Tris-EDTA 有效但單獨不夠；與 NAC 或 lactoferrin 併用的研究初步 | Level III |

## 八、近期實證更新（局部優先 + 長效複方耳劑）

### 局部優先、不常規全身抗生素（抗菌藥物管理）
單純外耳炎以**局部治療為主，全身性抗生素並非常規**——口服抗生素僅保留給中耳炎、嚴重、或耳道無法局部給藥者。這是抗菌藥物管理（stewardship）的重要一環。

### 獸醫端施用的長效複方耳劑
RCT 支持的長效複方（florfenicol + terbinafine + 類固醇）可大幅改善飼主依從性：
- **Osurnia**（florfenicol／terbinafine／**betamethasone**）：間隔 1 週兩劑；RCT 成功率 64.8% vs 安慰劑 43.4%（Forster 2018），且不劣於每日點藥（King 2018）。
- **Claro／Neptra**（florfenicol／terbinafine／**mometasone**）：獸醫單次施用、標示效期約 30 天（Bae 2021 in-vivo 成功率 88.5%）。**含類固醇複方於鼓膜穿孔者禁用（如 Claro 仿單明訂）。**
> 產品名稱、濃度、給藥間隔與適應症各國仿單不同，需 DVM 依當地仿單核對。

### 細胞學優先於培養 MIC（局部用藥決策）
**選局部藥靠細胞學，不要用「全身性 C&S 的 MIC」來決定**：正確點入耳道的局部藥濃度可達 MIC 的 100–1000 倍，故系統性 breakpoint 會低估局部療效（即使報告「抗藥」，局部仍常有效）。培養保留給：難治、桿菌／綠膿桿菌、或需全身用藥時。

### 類固醇是複方不可或缺的成分
類固醇抗發炎、止癢、減少滲出與腫脹，並**逆轉耳道狹窄與腺體增生**、恢復引流，讓抗菌成分能接觸上皮——是複方耳劑的必要成分而非附帶。
> 臨床內容需獸醫師上線前覆核。`,
  clinical_pearl: '每次外耳炎不做耳道細胞學就開始治療，等於是在蒙眼開槍。球菌、桿菌、馬拉色菌要用完全不同的藥。更重要的是，遇到反覆外耳炎的犬，一定要往「原發因素」想，最常見就是過敏。光治感染不處理過敏，外耳炎永遠跑不掉。',
  common_mistakes: [
    '未做耳道細胞學即經驗性使用耳用藥物（球菌/桿菌/馬拉色菌需要不同治療）',
    '反覆外耳炎未排查原發因素（過敏是最常見原因）',
    '鼓膜破裂時使用含耳毒性成分的耳用藥物（aminoglycoside、chlorhexidine）',
    '未評估鼓膜完整性即進行耳道灌洗',
    '僅治療繼發感染而忽略持續因素（耳道增生、中耳炎）',
  ],
  disease_data: {
    signalment: '犬：盛行率 10-20%，好發品種：可卡犬、巴吉度、拉布拉多、金毛尋回犬、沙皮犬、西高地白梗。貓：盛行率 2-6%，常與過敏或息肉相關。垂耳犬與耳道狹窄品種風險更高。',
    etiology: 'PSPP 多因素模型：原發因素（過敏 43-75%、異物、內分泌）讓耳道發炎，微環境改變（溫度、濕度、pH 上升）後繼發微生物（球菌、桿菌、馬拉色菌）就增殖。慢性炎症又跑出持續因素（增生、狹窄、中耳炎），整個變惡性循環。',
    pathogenesis: '原發因素把耳道上皮跟腺體的正常功能破壞掉，皮脂腺增生、耵聹分泌變多，微環境就變得很適合微生物增殖。發炎反應（嗜中性球浸潤、水腫）接著上來，耳道上皮增生變狹窄，引流又更差。再下去就是慢性纖維化，最後可能跑到中耳炎（鼓膜穿孔，感染往中耳擴散）。',
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
    diagnostic_workup: '先問病史（單側還是雙側、有沒有反覆、有沒有過敏史）。然後耳鏡檢查（看紅腫程度、分泌物、鼓膜）。耳道細胞學一定要做（球菌、桿菌、馬拉色菌計數）。桿菌或反覆病例送細菌培養跟藥敏。慢性或疑似中耳炎做 CT 或 MRI。最後把原發因素翻一遍（過敏檢查）。',
    treatment_protocol: '確認鼓膜完整後做耳道清洗。局部耳用製劑依細胞學選：球菌用 fusidic acid 或 polymyxin B；桿菌用 polymyxin B 或 fluoroquinolone；馬拉色菌用 clotrimazole 或 miconazole。嚴重腫脹短期口服 Prednisolone 0.5-1 mg/kg 跑 5-7 天。中耳炎用全身性抗生素（依培養結果）4-6 週。末期就走 TECA-LBO 手術。同時要把原發因素（過敏）控制好。',
    prognosis: '急性外耳炎預後不錯，適當治療 2-4 週可以痊癒。慢性反覆外耳炎就要看原發因素控不控制得住。耳道增生或礦化嚴重的可能要走手術（TECA-LBO），術後會喪失聽力但是疼痛跟感染可以解決。貓的耳道息肉切除後預後不錯。',
    monitoring: '治療開始後 1-2 週回診：耳鏡加上複查細胞學。感染清掉後 2 週再確認一次。慢性病例每 1-3 個月追蹤。教飼主居家耳道清洗（每週 1-2 次預防性清洗）。也要盯原發過敏的控制。',
    owner_communication: '外耳炎多半有潛在原因（最常見是過敏），光治耳朵感染不處理根本原因就會反覆發作。治療需要定期回診做耳道檢查跟細胞學。居家耳朵清潔很重要，等下我會教您怎麼洗。慢性病例的耳道可能會增厚狹窄，嚴重的話可能要走手術。',
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
    { type: 'textbook', citation: "Miller WH, Griffin CE, Campbell KL. Muller and Kirk's Small Animal Dermatology, 7th ed. Elsevier, 2013.", relevance: '外耳炎完整章節與 PSPP 分類（注意：無正式外耳炎共識指引，本主題實證來自綜述/RCT/教科書）' },
    { type: 'journal', citation: 'Paterson S. Discovering the causes of otitis externa. In Pract. 2016;38(Suppl 2):7-11. doi:10.1136/inp.i470', relevance: '外耳炎原發因素（過敏最常見）的系統性排查' },
    { type: 'journal', citation: 'Forster SL, Real T, Doucette KP, King SB. A randomized placebo-controlled trial of the efficacy and safety of a terbinafine, florfenicol and betamethasone topical ear formulation in dogs (Osurnia). BMC Vet Res. 2018;14(1):262. doi:10.1186/s12917-018-1589-7.', relevance: '長效複方耳劑（Osurnia，兩劑）RCT：成功率 64.8% vs 安慰劑 43.4%——支持局部優先' },
    { type: 'journal', citation: 'Bae S, Jin Y, Oh T. In vivo and in vitro efficacy of florfenicol, terbinafine, and mometasone furoate otic solution (Claro) for canine otitis externa. Korean J Vet Res. 2021;61(4):e37. doi:10.14405/kjvr.2021.61.e37.', relevance: '獸醫單次施用長效耳劑（Claro/Neptra）in-vivo 成功率 88.5%；FDA 標示鼓膜穿孔禁用' },
    { type: 'journal', citation: 'Buckley LM, McEwan NA, Nuttall T. Tris-EDTA significantly enhances antibiotic efficacy against multidrug-resistant Pseudomonas aeruginosa in vitro. Vet Dermatol. 2013;24(5):519-e122. doi:10.1111/vde.12071.', relevance: 'Tris-EDTA 作為增效劑降低 marbofloxacin/gentamicin 之 MIC/MBC——綠膿桿菌/生物膜管理依據' },
    { type: 'journal', citation: 'Brame B, Cain C. Chronic otitis in cats: clinical management of primary, predisposing and perpetuating factors. J Feline Med Surg. 2021;23(5):433-446. doi:10.1177/1098612X211007072.', relevance: '貓外耳炎不同於犬：耳疥蟎為最常見主要因、發炎性耳道息肉為重要誘發/阻塞因子' },
    { type: 'journal', citation: 'Song Y, et al. Therapeutic and formulation innovations in the management of canine otitis externa. Pharmaceutics. 2025;17(10):1332. doi:10.3390/pharmaceutics17101332.', relevance: '2025 綜述：局部為主要給藥途徑、長效新劑型、類固醇/生物膜原理與耳毒性禁忌' },
  ],
  is_current: true,
  created_at: now,
};

/** 皮膚癬菌症 (Dermatophytosis)，疾病型 */
const contentDermatophytosis: NodeContent = {
  id: 'CONTENT-DERM-L3-008',
  node_id: 'DERM-L3-008',
  version: 2,
  summary: '皮膚癬菌症（Dermatophytosis，俗稱錢癬或貓癬）是親角質真菌（dermatophytes）感染犬貓皮膚跑出來的病。主要病原是 Microsporum canis（貓最常見）、M. gypseum 跟 Trichophyton mentagrophytes。這是人畜共通病。免疫正常的動物多半會自癒，但要拖好幾個月。免疫低下的就可能變廣泛感染。診斷無單一黃金標準（WAVD 2017）：正確操作的 Wood 燈對 M. canis 敏感度其實很高（約 91–100% 發蘋果綠螢光），真菌培養（DTM/Sabouraud）用於確認菌種。台灣溫暖潮濕，剛好讓癬菌很好存活跟傳播。',
  learning_objectives: [
    '列舉犬貓最常見的三種皮膚癬菌及其流行病學特徵',
    '正確使用 Wood 燈篩檢並理解其限制',
    '執行真菌培養（DTM）並辨識陽性結果',
    '規劃皮膚癬菌症的全身性與局部治療方案',
    '說明人畜共通風險與環境去汙策略',
  ],
  key_points: [
    'M. canis 是貓最常見的皮膚癬菌（> 90%），貓可為無症狀帶菌者',
    'Wood 燈（365 nm）：正確技術下約 91–100% M. canis 感染毛幹發蘋果綠螢光（舊教材「僅約 50%」已過時，源於操作不當）',
    '真菌培養（DTM）用於確認菌種與孢子存在（紅色變色 + 白色棉絮狀菌落 + 鏡檢大分生孢子）；WAVD 2017：無單一診斷為黃金標準',
    '免疫正常犬貓多可自癒（1-3 個月），但因人畜共通風險仍建議治療',
    '全身性治療首選：Itraconazole 5 mg/kg PO SID（脈衝療法：1 週用/1 週停）',
    '局部治療：含 miconazole + chlorhexidine 的藥浴或 lime sulfur 浸泡',
    '環境清潔以機械清潔為主（吸塵/擦拭洗到肉眼乾淨再用常規消毒劑）；WAVD 2017：環境非主要儲存所、不需燻蒸全屋',
  ],
  body: `# 皮膚癬菌症 (Dermatophytosis)

## 一、病理機制 (Pathophysiology)



### 概述
皮膚癬菌症是親角質真菌感染毛髮、角質層跟爪甲跑出來的表面黴菌感染。是重要的人畜共通傳染病（zoonosis），對免疫低下的家人（小孩、老人、化療中的人）有感染風險，要特別小心。

### 病原學
- Microsporum canis：最常見（貓 > 90%，犬 70% 左右），部分菌株 Wood 燈會螢光。
- M. gypseum：嗜土壤性，犬接觸汙染土壤後感染。
- Trichophyton mentagrophytes：嗜動物性，接觸齧齒類後感染。

### 病理機轉
癬菌孢子（arthrospores）碰到皮膚就黏在角質層上發芽長菌絲。菌絲往下鑽進毛囊（ectothrix 或 endothrix），把毛幹結構搞壞，毛髮就斷裂脫落。宿主免疫反應上來（以細胞介導免疫為主）跑出發炎，最後形成典型的環形病灶：中央慢慢癒合，邊緣繼續活動往外擴。

## 二、臨床表現與診斷 (Clinical Signs & Diagnosis)

### 犬
- 典型：環形脫毛斑，邊緣鱗屑，中央開始長新毛。
- 不典型：瀰漫性鱗屑、結節性病灶（kerion）、爪甲感染。

### 貓
- 典型：局部脫毛斑（面部、耳翼、四肢）。
- 不典型：粟粒性皮膚炎、廣泛鱗屑、無症狀帶菌者。
- 波斯貓跟長毛貓特別容易跑廣泛或慢性感染。

### 診斷
### Wood 燈檢查
- 365 nm 紫外光照。
- 陽性：感染的毛幹會發出蘋果綠螢光（M. canis 特有）。正確技術下（專用插電燈、暗室、眼睛先適應暗光、燈頭距皮膚 2–4 cm）約 91–100% 未治療感染會陽性；舊「僅約 50%」是操作不當的結果。
- 注意：鱗屑、藥物、細菌都會跑出偽螢光，顏色不會是蘋果綠。

### 真菌培養（確認菌種；WAVD 2017：非唯一金標準）
- DTM（Dermatophyte Test Medium）：等 21-28 天看結果。
- 陽性標準：培養基從黃色轉紅色（要同步發生）加上白色棉絮狀菌落。
- 還要鏡檢大分生孢子（macroconidia）確認菌種。

### 其他輔助
- Trichogram 加 KOH 消化法：毛幹上可以看到 ectothrix 孢子。
- PCR：快是快，但活菌死菌都會被驗到。

## 三、治療策略 (Treatment)

### 全身性
- [藥物:Itraconazole] 5 mg/kg PO SID（脈衝療法：1 週用 / 1 週停）
- 或 [藥物:Terbinafine] 30-40 mg/kg PO SID（犬）/ 貓需更謹慎

### 局部
- Miconazole 2% + Chlorhexidine 2% 藥浴：每週 2 次
- 或 Lime sulfur 1:16 浸泡：每週 2 次（有效但氣味強烈）

### 環境清潔（WAVD 2017 已降級）
- 環境**不是**主要感染儲存所、**不需燻蒸全屋**；重點是機械清潔。
- 先吸塵/擦拭移除毛髮與有機物 → 以清潔劑洗到肉眼乾淨 → 再用標示對 Trichophyton 有效的常規消毒劑（如稀釋次氯酸鈉、加速型過氧化氫）。口訣：能洗的就能消毒。
- 清洗寢具（60°C 以上）、隔離感染動物仍合理（減少再污染與培養偽陽性），但無需恐慌式過度清潔。

[圖片:Wood 燈陽性螢光示意圖與 DTM 培養結果判讀]

## 四、併發症與監控 (Complications & Monitoring)

### 常見併發症
- 人畜共通感染（Zoonosis）：Microsporum canis 會感染人類（特別是小孩跟免疫低下的人），接觸感染犬貓後會在皮膚上跑出環形紅斑（ringworm）。飼主衛教在治療裡面絕對不能漏掉。
- 環境角色被重新評估（WAVD 2017）：孢子雖可長期存活，但單純接觸污染環境、若皮膚無同時微創傷，很少造成真正感染；環境的主要意義在造成培養/PCR 偽陽性與再污染，而非「家裡藏著病」。機械清潔即可有效去除。
- Kerion（肉芽腫型）：宿主免疫反應太強烈，跑出局部腫脹、化膿、疼痛的結節，很容易被誤診成細菌性膿皮症或腫瘤。
- 貓多貓家庭傳播：M. canis 在貓群裡傳染得很快，一隻確診就把全群當成暴露，全群一起治療。

### 監控計畫
| 時間點 | 監測項目 | 目標 |
|--------|---------|------|
| 治療第 0 天 | Wood's lamp + 黴菌培養（DTM/SAB） | 確診基線 |
| 治療第 2-3 週 | 臨床評估 + 二次培養 | 評估治療反應 |
| 此後每 2 週 | 黴菌培養 | 追蹤至連續 2-3 次培養陰性才停藥 |
| 停藥後 1 個月 | 黴菌培養 | 確認無復發 |
| 全程 | 同住人員皮膚狀態 | 監測人畜共通感染 |

### 停藥標準（關鍵）
- 不能只看外觀判斷：毛長回來不等於黴菌清掉了。
- 金標準是連續 2-3 次黴菌培養陰性（每次間隔 1-2 週）。
- 太早停藥就是復發跟持續環境汙染的主因。

## 五、預後與預後因子 (Prognosis)

- 免疫功能正常的犬貓：預後不錯。就算不治療，多數免疫健全的動物 1-4 個月內也會自己清掉；但治療可以加速痊癒並減少傳播。
- 多貓家庭或繁殖場：預後要保留。環境除汙超難搞，要根除可能要幾個月的系統性治療加上環境處理加上全群篩檢。
- 免疫低下動物：預後比較差。FIV/FeLV 陽性貓、未滿 4 月齡幼齡、用免疫抑制藥物的，可能跑出廣泛而且難治的感染。
- 波斯貓特殊考量：波斯貓跟長毛貓對 M. canis 感受性更高，常常變成無症狀帶菌者（asymptomatic carrier），就是源源不絕的感染源。
- 人畜共通風險：所有確診病例都要告訴飼主有傳染風險，特別是家裡有小孩或免疫低下的成員時。

## 六、人醫借鑒 (Translational Insights)

| 人醫工具/概念 | 獸醫應用潛力 | 現況 |
|-------------|-------------|------|
| PCR 快速癬菌鑑定 | 取代培養等待 7-14 天，數小時內確認菌種 | 人醫已常規使用，獸醫商業 PCR panel 漸增 |
| Terbinafine 脈衝療法 | 減少總用藥量同時維持療效 | 人醫指甲癬常用，犬貓初步研究顯示可行 |
| 環境紫外線 C 消毒 | 降低環境孢子量 | 人醫/獸醫設施消毒應用增加 |

## 七、臨床爭議與知識空缺 (Controversies & Knowledge Gaps)

| 爭議議題 | 現況 | Evidence Level |
|---------|------|---------------|
| Itraconazole 連續投藥 vs 脈衝療法的療效比較 | 脈衝療法（1 週用/1 週停）可減少藥物暴露，但比較 RCT 有限 | Level II |
| 貓無症狀帶菌者（asymptomatic carrier）是否需要治療 | 多貓家庭/收容所建議治療以防傳播，但單貓家庭爭議較大 | Level III |
| 皮膚癬菌停藥標準：2 次 vs 3 次培養陰性 | WAVD 建議 2-3 次連續陰性，但最佳次數未有共識 | Level III |
| PCR 是否可取代真菌培養作為治療終點判斷 | PCR 快速但可能偵測到死菌 DNA（偽陽性），培養仍為金標準 | Level II |

## 八、近期實證更新（WAVD 2017 共識重點）

### 四個最常見的舊觀念更正
1. **Wood 燈不是「只有 50%」**：正確技術下 M. canis 約 91–100% 陽性，是快速、便宜的院內篩檢；陽性毛幹直接拔取做鏡檢與培養。
2. **環境去汙已降級**：家裡非主要儲存所、不需燻蒸；機械清潔（洗到肉眼乾淨）+ 常規消毒劑即可。
3. **griseofulvin 已淘汰**（致畸胎、療效/安全性差）；首選 itraconazole 與 terbinafine。
4. **PCR 不能當治癒判定**：偵測死菌 DNA、治療後可能持續陽性（Moriello & Leutenegger 2018）。

### 全身治療：licensed 脈衝療法
**Itrafungol（itraconazole 口服液）是目前唯一 FDA 核准（2016）治療貓 M. canis 的全身藥**，採「週服週停」脈衝共 3 循環，利用 itraconazole 在毛髮/皮膚蓄積。Terbinafine 亦濃集於毛髮、停藥後維持 MIC 上約 5 週。劑量需 DVM 依仿單核對。

### 局部治療是必要、非選配
全身藥 + **全身被毛局部消毒並行**才是治癒組合（WAVD 2017）：lime sulfur 或 enilconazole（有殘留活性）每週兩次，或 2% miconazole + 2% chlorhexidine 洗劑。目的是降低散播孢子、縮短傳染期。

### 治癒判定
臨床消退 + 連續真菌培養陰性（傳統兩次、間隔 1–2 週）。新證據：依從性良好且健康的貓，**單次陰性培養常即足夠**（Stuntebeck & Moriello 2020，kappa 0.903）。PCR 不可作治癒判定。

### 命名更新
M. gypseum 已更名為 **Nannizzia gypsea**（de Hoog 等 2017 分類更新）。
> 臨床內容與所有劑量需獸醫師依仿單核對。`,
  clinical_pearl: '貓就是 M. canis 最重要的帶菌者。看起來完全沒事的貓也可能在持續散播孢子。多貓家庭或收容所爆發皮膚癬菌的時候，所有貓（包含看起來沒症狀的）都要做 McKenzie 刷毛培養（牙刷法）抓帶菌者。治療終點是連續 2-3 次（間隔 2 週）真菌培養陰性，不能光看外觀。',
  common_mistakes: [
    '把「Wood 燈只有 50%、不可靠」當真（正確技術下 M. canis 約 91–100% 陽性；惟其他菌種如 Nannizzia/Trichophyton 不螢光，仍需培養佐證）',
    '僅依據臨床外觀「環形脫毛」即診斷而未做培養確認（膿皮症也可呈環形病灶）',
    '僅使用局部治療而未進行全身性抗黴菌（局部治療單獨使用效果有限）',
    '恐慌式過度環境消毒/燻蒸全屋（WAVD 2017：環境非主要儲存所，機械清潔 + 常規消毒劑即足）',
    '停藥標準依臨床外觀而非培養結果（應連續 2-3 次培養陰性才停藥）',
  ],
  disease_data: {
    signalment: '犬貓均可感染。貓：波斯貓、長毛貓易感，幼貓比成貓易感。犬：約克夏梗、傑克羅素梗報告較多。免疫低下動物（FIV/FeLV 陽性貓、幼齡、營養不良）感染風險高且病程嚴重。',
    etiology: '親角質真菌感染。M. canis（貓 > 90%、犬約 70%）、M. gypseum（接觸汙染土壤）、T. mentagrophytes（接觸齧齒類動物）。傳播路徑：直接接觸感染動物，或間接碰到汙染毛髮跟環境（孢子可以活 18 個月以上）。台灣溫暖潮濕的氣候很有利於傳播。',
    pathogenesis: '癬菌孢子碰到角質層後黏住發芽，菌絲鑽進毛囊的角質化區域（不會跑到活組織裡），分泌角質酶把角蛋白分解掉。毛幹結構壞掉、毛斷掉，宿主跑出細胞介導免疫反應引發發炎（嗜中性球、巨噬細胞浸潤），病灶就向外做環形擴展（中央被免疫清掉，邊緣繼續活動）。免疫正常的動物 1-3 個月會自癒。',
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
    diagnostic_workup: '先 Wood 燈篩檢（快但敏感度低），然後 Trichogram 加 KOH 看毛幹有沒有孢子。真菌培養（DTM 或 Sabouraud）才是金標準，要等 2-4 週。培養出來的菌落還要鏡檢大分生孢子來確認菌種。多貓家庭做 McKenzie 刷毛培養抓帶菌者。',
    treatment_protocol: '全身性：Itraconazole 5 mg/kg PO SID 脈衝療法（1 週用、1 週停），或 Terbinafine 30-40 mg/kg PO SID。局部：Miconazole 2% 加 Chlorhexidine 2% 藥浴每週 2 次，或 Lime sulfur 1:16 每週 2 次。環境去汙：漂白水 1:10、每天吸塵、寢具用 60°C 清洗。感染動物要隔離。治療一直跑到連續 2-3 次培養陰性（每次間隔 2 週）才停藥。',
    prognosis: '免疫正常的犬貓預後不錯，治療下 6-8 週多半可以痊癒。免疫低下的動物療程可能要拉長。Kerion 治療反應好，但可能留疤。多貓家庭或收容所管理難度高，要系統性篩檢加上環境去汙。要告知飼主這是人畜共通病。',
    monitoring: '治療開始後每 2-4 週做一次真菌培養追蹤。治療要跑到連續 2-3 次（間隔 2 週）培養陰性才能停藥。Wood 燈可以輔助監測，但不能單獨用來判斷。Itraconazole 要盯肝功能。',
    owner_communication: '皮膚癬菌症（貓癬、錢癬）是黴菌感染，會傳染給人。免疫力較弱的家人（小孩、老人）要特別小心。治療需要口服藥加上藥浴，通常 6-8 週以上跑不掉。環境清潔很重要，黴菌孢子可以在環境中活超過一年。治療期間感染動物要隔離。停藥的時間要看真菌培養結果，不能只看外觀。',
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
    { type: 'guideline', citation: 'Moriello KA, Coyner K, Paterson S, Mignon B. Diagnosis and treatment of dermatophytosis in dogs and cats: Clinical Consensus Guidelines of the World Association for Veterinary Dermatology. Vet Dermatol. 2017;28(3):266-e68. doi:10.1111/vde.12440.', relevance: 'WAVD 現行權威共識：無單一診斷黃金標準、Wood 燈高敏感、系統+局部並行、環境去汙降級' },
    { type: 'journal', citation: 'Moriello KA, Leutenegger CM. Use of a commercial qPCR assay in 52 high risk shelter cats for disease identification of dermatophytosis and mycological cure. Vet Dermatol. 2018;29(1):66-e26. doi:10.1111/vde.12485.', relevance: 'PCR/qPCR 偵測死菌 DNA、不能作治癒判定的證據' },
    { type: 'journal', citation: 'Stuntebeck RL, Moriello KA. One vs two negative fungal cultures to confirm mycological cure in shelter cats treated for Microsporum canis dermatophytosis. J Feline Med Surg. 2020;22(6):598-601. doi:10.1177/1098612X19858791.', relevance: '治癒判定：健康依從貓單次陰性培養常即足夠（與兩次標準 kappa 0.903）' },
    { type: 'guideline', citation: 'FDA CVM. Freedom of Information Summary, ITRAFUNGOL (itraconazole oral solution) for cats. Approved Nov 10, 2016 (sponsor Virbac). Alternating-week pulse x3 cycles.', relevance: '唯一 FDA 核准之貓 M. canis 全身用藥與脈衝給藥依據（劑量依仿單）' },
    { type: 'textbook', citation: "Miller WH, Griffin CE, Campbell KL. Muller and Kirk's Small Animal Dermatology, 7th ed. Elsevier, 2013.", relevance: '皮膚癬菌症完整章節' },
    { type: 'journal', citation: 'Moriello KA. Feline dermatophytosis: aspects pertinent to disease management in single and multiple cat situations. J Feline Med Surg. 2014;16(5):419-431. doi:10.1177/1098612x14530215', relevance: '貓皮膚癬菌症管理（單貓與多貓環境）' },
  ],
  is_current: true,
  created_at: now,
};

/** 疥蟎症 (Sarcoptic Mange)，疾病型 */
const contentScabies: NodeContent = {
  id: 'CONTENT-DERM-L3-009',
  node_id: 'DERM-L3-009',
  version: 2,
  summary: '疥蟎症（Sarcoptic Mange）由犬疥蟎（Sarcoptes scabiei var. canis）引起，是犬最會癢的皮膚病之一。這隻蟎蟲在表皮角質層裡面挖隧道，引發「以 Type I 為主、合併 Type IV」的複合型過敏反應，所以癢得不得了、且與蟲量不成比例。傳染性很強，可暫時感染人類（人畜共通、自限性）。診斷不易，淺層皮膚刮搔敏感度僅 30-50%（陰性不能排除），臨床常靠耳翼-踏足反射（敏感度約 80%、特異度約 94%）與 isoxazoline 治療性診斷。典型好發部位是耳翼邊緣、肘部、踝部、腹側。治療首選 isoxazoline（fluralaner 單劑、sarolaner/afoxolaner 每月），治癒率近 100%。',
  learning_objectives: [
    '描述 Sarcoptes scabiei 的生活史與傳播途徑',
    '辨識疥蟎症的典型好發部位與臨床特徵',
    '說明淺層皮膚刮搔的低敏感度及治療性診斷的價值',
    '規劃疥蟎症的治療方案（包括同居動物與環境處理）',
  ],
  key_points: [
    '犬疥蟎穴行於角質層，完整生活史約 17-21 天；雌蟲每天產卵 2-4 顆',
    '劇烈搔癢是最突出的特徵。即使少量蟎蟲也會因為過敏反應引起嚴重搔癢（以 Type I 為主、合併 Type IV）',
    '典型好發部位：耳翼邊緣、肘部外側、踝部外側、腹側（稀毛區），背側通常留待泛發',
    '耳翼-踏足反射（pinnal-pedal reflex）：搔刮耳翼邊緣引發後腿搔抓，敏感度約 80%（81.8%, Mueller 2001）、特異度約 94%',
    '淺層皮膚刮搔敏感度僅 30-50%（範圍 20-50%），刮搔陰性不能排除',
    'Isoxazoline 為首選治療：fluralaner 單劑、sarolaner/afoxolaner 每月，治癒率近 100% 且無 MDR1 疑慮',
    '人畜共通但自限性：犬疥蟎在人皮膚無法建立自我維持感染，去除接觸後 2-4 週自行消退',
  ],
  body: `# 疥蟎症 (Sarcoptic Mange)

## 一、病理機制 (Pathophysiology)



### 概述
疥蟎症是 Sarcoptes scabiei var. canis 引起的高傳染性皮膚病。蟎蟲在角質層裡面挖隧道產卵，宿主就跑出強烈的過敏反應。這個病在犬舍、收容所、流浪犬群裡很常見。

### 生活史
- 雌蟲鑽進角質層產卵，一天下 2-4 顆（終生約 40-50 顆）。
- 從卵到幼蟲到若蟲到成蟲，完整生活史約 17-21 天（受控最適條件下最短約 10-13 天）。
- 離開宿主可以活約 2 天到 3 週，看環境溫濕度（低溫高濕存活較久，室溫多為 2-6 天）。
- 傳播以直接接觸為主，也可以靠寢具、美容工具間接傳播。

### 病理機轉
蟎蟲的隧道加上排泄物、唾液、角質層抗原把宿主免疫激起來，形成「複合型過敏反應」：
1. Type I 過敏（主要）：IgE 介導即時型反應（IgE、肥大細胞、嗜酸性球升高），幾分鐘內就開始癢。
2. Type IV 過敏：T 細胞介導遲發型反應，真皮 T 淋巴球浸潤（部分文獻另提及 Type III 免疫複合體）。
3. 臨床犬約於感染後 4-5 週血清轉陽；一旦致敏，少少幾隻蟎蟲就能引起與蟲量完全不成比例的劇烈搔癢。

## 二、臨床表現與診斷 (Clinical Signs & Diagnosis)

- 好發部位（最早出現）：耳翼邊緣、肘部、踝部。
- 後期擴展：腹側、胸部、全身。
- 典型病灶：丘疹、結痂、表皮脫屑、脫毛。
- 癢得很厲害：最突出的特徵，類固醇效果不好。
- CAD 的時候耳翼邊緣通常不受影響（Favrot 標準第 7 項陰性）。耳翼邊緣有問題的話，比較像疥蟎不像 CAD。

### 診斷
### 臨床線索
- 耳翼-踏足反射（pinnal-pedal reflex，搔刮耳翼邊緣引發同側後腿搔抓）：敏感度約 80%（Mueller 2001 原始研究 81.8%，n=588）、特異度高達約 94%——陽性具高度提示性，但陰性不能排除。
- 癢得很厲害加上耳翼、肘部好發，類固醇僅「部分/不完全」反應（非完全無效，仍是與 CAD 鑑別的重要線索）。
- 家裡其他動物或飼主也跟著癢。

### 淺層皮膚刮搔
- 多點取樣（耳翼邊緣、肘部）、塗礦物油、大範圍淺刮。
- 敏感度低（一般約 30-50%，文獻範圍 20-50%；Curtis 2004），陰性不能排除。
- 看到蟎蟲、蟲卵或蟲糞就是確診。

### 經驗性治療（治療性診斷）
- 高度懷疑但刮搔陰性的時候，給 isoxazoline 跑 4 週。
- 症狀明顯改善就支持診斷。

### 血清學
- Sarcoptes IgG ELISA：敏感度 84-92%，但感染初期可能陰性。

## 三、治療策略 (Treatment)

### 首選：Isoxazoline 類
- [藥物:Fluralaner] 25-56 mg/kg PO 單劑（Taenzler 2016：單劑第 28 天蟎蟲清除率 100%；多數病例單劑即可）
- [藥物:Sarolaner] 2 mg/kg PO 每月 × 2-3 次（Becskei 2016 於 day 0/30/60 給藥）；afoxolaner、lotilaner 同屬有效
- 治癒率（寄生蟲學治癒）幾乎 100%；此類兼具跳蚤/壁蝨防治且無 MDR1 疑慮，已取代傳統大環內酯成首選

### 替代方案（核准之大環內酯／off-label）
- [藥物:Selamectin] spot-on 6-12 mg/kg，標準為 day 0 與 day 30（每月 × 2，仿單核准）；欲加速緩解可 off-label 採 day 0/14/30
- [藥物:Ivermectin] 0.2 mg/kg（200 µg/kg）PO 或 SC 每 2 週 1 次、共 2-4 次（0.3-0.4 為 off-label 高劑量，CAPC 不建議常規使用）；**MDR1/ABCB1 突變之牧羊犬類（柯利、澳洲牧羊犬、喜樂蒂）禁用，此類犬 0.1 mg/kg 即可能中毒**

### 配套措施
- 所有同居犬必須同時治療
- 清洗寢具（60°C）、清潔環境
- 急性瘙癢：短期 Prednisolone 0.5-1 mg/kg × 5-7 天

[圖片:Sarcoptes scabiei 顯微鏡形態與好發部位分佈圖]

## 四、併發症與監控 (Complications & Monitoring)

### 常見併發症
- 人畜共通感染：Sarcoptes scabiei var. canis 可以暫時感染人類（叫做「假性疥瘡 pseudoscabies」），接觸部位（軀幹、腹部、前臂、大腿；典型不侵犯指間與生殖器，與人型疥蟎相反）跑出搔癢性丘疹。此為自限性——犬疥蟎在人皮膚通常無法建立「可持續繁殖」的族群（註：實驗顯示極少數情況蟲體曾短暫存活產卵，故宜說「無法建立自我維持感染」而非絕對「無法繁殖」），犬治好或去除接觸後人類症狀多在 2-4 週內自行消退，人本身常不需另行治療。
- 繼發膿皮症：抓太兇把表皮抓破，Staphylococcus 就趁機進來。
- 耳廓邊緣結痂性皮膚炎：疥蟎症的特徵病灶；耳翼-踏足反射敏感度約 80%（特異度約 94%，見上）。
- 淋巴結腫大：反應性淋巴結腫大很常見，這是免疫反應不是轉移。

### 監控計畫
| 時間點 | 監測項目 | 目標 |
|--------|---------|------|
| 治療後 2 週 | 搔癢程度評估 | 搔癢應該在 2-4 週內明顯緩解 |
| 治療後 4 週 | 臨床評估加皮膚刮搔（必要時） | 確認蟎蟲清掉了 |
| 治療後 6-8 週 | 追蹤回診 | 確認痊癒、沒有復發 |

### 注意事項
- 蟎蟲清除後（多數犬治療後約 4 週已無蟎），因殘留的過敏反應，搔癢通常於治療後 2 週開始下降、3-4 週明顯改善，但完全緩解可能需 4-6 週（少數更久），不代表治療失敗。
- 家裡所有犬都要同時治療，就算沒症狀也是（可能是潛伏期或低蟲量感染）。

## 五、預後與預後因子 (Prognosis)

疥蟎症預後超好，在所有搔癢性皮膚病裡面是最好處理的：
- Isoxazoline 單劑治癒率超過 95%。fluralaner 口服一次通常就可以把蟎蟲清光，是目前最方便也最有效的治療。
- 預後好的條件：單犬家庭、飼主配合、沒有免疫抑制、早期診斷。
- 預後差的條件：多犬家庭沒一起治療（持續交叉感染）、犬舍或收容所環境（高密度飼養）。
- 治癒後不會產生持久免疫：痊癒的犬可以再次感染，跟流浪犬或疥蟎犬接觸還是有風險。
- 診斷延遲的代價：疥蟎症常常被誤診為過敏（搔癢加皮膚刮搔假陰性率高達 50%）。診斷被拖了幾個月，期間給的免疫抑制治療反而可能讓蟎蟲增殖得更厲害。

## 六、人醫借鑒 (Translational Insights)

| 人醫工具/概念 | 獸醫應用潛力 | 現況 |
|-------------|-------------|------|
| Ivermectin 大規模驅蟲計畫 (MDA) | 收容所/犬舍群體預防性投藥 | 人醫用於流行區域根除，獸醫可借鏡群體策略 |
| 皮膚鏡（dermoscopy）偵測蟎蟲 | 非侵入性快速辨識疥蟎（三角形結構） | 人醫常規使用，獸醫皮膚鏡應用漸增 |

## 七、臨床爭議與知識空缺 (Controversies & Knowledge Gaps)

| 爭議議題 | 現況 | Evidence Level |
|---------|------|---------------|
| 疥蟎症刮搔假陰性率極高（~50%），經驗性治療是否應為標準做法 | 多數皮膚科醫師建議高度懷疑即治療（治療性診斷） | Level III |
| Isoxazoline 單劑 vs 連續 2 劑治療疥蟎的比較 | Fluralaner 單劑多數有效，但嚴重病例可能需第 2 劑 | Level II |
| 疥蟎症合併犬異位性皮膚炎的鑑別挑戰 | 臨床表現高度重疊，建議所有新發搔癢犬先排除疥蟎 | Level III |

## 八、近期更新 (Recent Updates)

- **Isoxazoline 成為第一線**：Taenzler 2016（Parasit Vectors）證實單劑口服/外用 fluralaner 於第 28 天達 100% 殺蟎；Becskei 2016（Vet Parasitol）sarolaner、Hampel 2018（Parasite）afoxolaner、Chiummo 2020（Parasit Vectors）田野 fluralaner 均高效，已取代傳統大環內酯成為首選，兼具跳蚤/壁蝨防治且無 MDR1 疑慮。
- **CAPC 立場**：不建議常規使用 off-label 高劑量 ivermectin，優先選核准產品（selamectin、moxidectin/imidacloprid、isoxazolines）。
- **人畜共通再認識**：Moroni 2022（Pathogens）統合回顧指出「動物型疥蟎無法在人繁殖」屬傳統假設，實驗顯示犬源疥蟎曾在少數受試者存活產卵——臨床仍為自限性，但機轉表述宜保守（改用「無法建立自我維持感染」）。
- **診斷**：血清 IgG ELISA（Lower 2001，敏感度約 84%）與 isoxazoline 治療試驗是刮搔陰性時的主要輔助；皮膚鏡偵測蟎蟲/隧道應用漸增。`,
  clinical_pearl: '疥蟎症是那種「看一眼就知道」的病。一隻犬走進診間癢個不停，檢查發現耳翼邊緣結痂、肘部丘疹，pinnal-pedal reflex 陽性，你腦中應該馬上跳出疥蟎兩個字。不要因為刮搔陰性就把它排掉。在台灣，流浪犬被收養後跑出劇烈搔癢的第一鑑別就是疥蟎，isoxazoline 治療性診斷是最實用的做法。',
  common_mistakes: [
    '淺層皮膚刮搔陰性即排除疥蟎症（敏感度僅 20-50%）',
    '未對所有同居犬同時進行治療（導致交叉再感染）',
    '將疥蟎症與犬異位性皮膚炎混淆（好發部位不同：疥蟎好發耳翼邊緣，CAD 不累及）',
    '使用糖皮質激素試圖控制瘙癢而未進行殺蟎治療（疥蟎對類固醇反應差）',
    '對 MDR1 突變品種使用 ivermectin',
  ],
  disease_data: {
    signalment: '犬為主，任何品種、年齡、性別。流浪犬、收容所犬、犬舍犬風險高。幼犬、老齡犬與免疫低下犬（如利什曼原蟲病、營養不良、醫源性免疫抑制）可發展為嚴重結痂型（Norwegian/crusted scabies），蟲量極高；此重症型多呈廣泛病灶但搔癢反而輕微，與典型疥蟎的劇烈搔癢相反。貓極罕見（有物種特異性）。',
    etiology: 'Sarcoptes scabiei var. canis 感染。主要靠直接接觸傳播，汙染的寢具跟美容工具也可以間接傳。蟎蟲離開宿主可以活約 2 天到 3 週（依溫濕度）。人畜共通但自限性，犬疥蟎在人皮膚通常無法建立可持續繁殖的族群（宜表述為「無法建立自我維持感染」而非絕對「無法繁殖」），人類症狀通常在犬治療或去除接觸後 2-4 週自行消退。',
    pathogenesis: '蟎蟲在角質層挖隧道、產卵、排泄，蟲體抗原（角質層、唾液、糞便蛋白）引發宿主複合型過敏反應——以 Type I（IgE 介導，IgE/肥大細胞/嗜酸性球升高）為主，合併 Type IV（T 細胞介導）、部分文獻另含 Type III 免疫複合體。造成劇烈搔癢，抓下去屏障又被破壞，還可能繼發細菌感染。約感染後 4-5 週血清轉陽；一旦致敏，就算只有少量蟎蟲也會跑出跟蟲量完全不成比例的嚴重搔癢。',
    clinical_signs: [
      { sign: '劇烈搔癢', category: 'primary', description: '最突出的症狀，強度超高，類固醇效果差' },
      { sign: '耳翼邊緣丘疹結痂', category: 'primary', description: '最早也最典型的好發部位' },
      { sign: '肘部與踝部丘疹', category: 'primary', description: '骨突起的部位好發' },
      { sign: '結痂性皮疹', category: 'secondary', description: '黃色結痂、表皮脫屑' },
      { sign: '脫毛', category: 'secondary', description: '抓出來的脫毛，嚴重時會擴到全身' },
      { sign: '繼發膿皮症', category: 'secondary', description: '搔抓把皮膚屏障弄壞後跑出的細菌感染' },
    ],
    staging: null,
    differential_diagnosis: [
      { condition: '犬異位性皮膚炎 (CAD)', key_differentiator: 'CAD 好發面部、腋下、指間；耳翼邊緣通常不受累；較少結痂' },
      { condition: '食物不良反應', key_differentiator: '可伴腸胃道症狀，排除飲食試驗改善' },
      { condition: '跳蚤過敏性皮膚炎', key_differentiator: '好發腰背/尾根，嚴格跳蚤控制改善' },
      { condition: '馬拉色菌皮膚炎', key_differentiator: '油脂樣皮膚與特徵異味，細胞學見酵母菌' },
    ],
    diagnostic_workup: '先做臨床評估（看好發部位、搔癢程度、接觸史），加上 Pinnal-pedal reflex 測試。然後多點做淺層皮膚刮搔（耳翼邊緣、肘部）。刮搔陰性但高度懷疑就直接給經驗性 isoxazoline 跑 4 週。也可以做 Sarcoptes IgG ELISA，不過要感染 5 週後才驗得出來。',
    treatment_protocol: '首選 isoxazoline：Fluralaner 25-56 mg/kg PO 單劑（Taenzler 2016 第 28 天殺蟎 100%），或 Sarolaner 2 mg/kg PO 每月 × 2-3 次（afoxolaner/lotilaner 同屬有效）。替代（核准大環內酯/off-label）：Selamectin 6-12 mg/kg spot-on day 0 與 day 30（加速可 off-label day 0/14/30）；Ivermectin 0.2 mg/kg PO/SC q2w × 2-4（MDR1 牧羊犬類禁用）。家裡所有犬要同時治療。環境清潔做寢具 60°C 清洗、清潔美容工具。急性搔癢短期用 Prednisolone 0.5 mg/kg 跑 5-7 天。有繼發感染就照感染處理。',
    prognosis: '預後超好。Isoxazoline 治療下寄生蟲學治癒率近 100%。蟎蟲多於治療後約 4 週清除，但搔癢因殘留過敏反應，通常 2 週開始下降、3-4 週明顯改善、完全緩解可能需 4-6 週。不治療可以拖好幾個月甚至幾年。家裡的人在犬治療或去除接觸後 2-4 週症狀也會自行消退。',
    monitoring: '治療後 2-4 週回診看搔癢改善程度。4 週的時候搔癢應該要改善超過 80%。如果沒改善完全，要想是不是合併其他過敏疾病（CAD 跟疥蟎共存）。治療後 6-8 週可以做皮膚刮搔確認清除。',
    owner_communication: '疥蟎是高傳染性的蟎蟲感染，蟎蟲在皮膚裡面挖隧道造成劇烈搔癢。這種蟲可以暫時傳染給人（但不會長期住在人身上）。治療用口服殺蟲藥，效果非常好。家裡所有犬要一起治療。治療後搔癢可能還要 2-4 週才完全退，這是正常的。寢具跟環境要清洗消毒。',
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
    { type: 'textbook', citation: "Miller WH, Griffin CE, Campbell KL. Muller & Kirk's Small Animal Dermatology, 7th ed. St. Louis: Elsevier, 2013. Parasitic Skin Disease.", relevance: '疥蟎症診斷/好發部位/治療完整章節' },
    { type: 'journal', citation: 'Taenzler J, Liebenberg J, Roepke RKA, et al. Efficacy of fluralaner administered either orally or topically for the treatment of naturally acquired Sarcoptes scabiei var. canis infestations in dogs. Parasit Vectors. 2016;9:392. doi:10.1186/s13071-016-1670-7', relevance: 'Fluralaner 單劑第 28 天殺蟎 100%（一線證據）' },
    { type: 'journal', citation: 'Becskei C, De Bock F, Illambas J, et al. Efficacy and safety of a novel oral isoxazoline, sarolaner (Simparica), for the treatment of sarcoptic mange in dogs. Vet Parasitol. 2016;222:56-61. doi:10.1016/j.vetpar.2016.02.017', relevance: 'Sarolaner day 0/30/60 治療疥蟎臨床研究' },
    { type: 'journal', citation: 'Chiummo R, Petersen I, Plehn C, et al. Efficacy of orally and topically administered fluralaner (Bravecto) for treatment of client-owned dogs with sarcoptic mange under field conditions. Parasit Vectors. 2020;13:524. doi:10.1186/s13071-020-04395-6', relevance: '近期：田野條件 fluralaner 療效與搔癢緩解時程' },
    { type: 'journal', citation: 'Hampel V, Knaus M, Schäfer J, et al. Treatment of canine sarcoptic mange with afoxolaner and afoxolaner plus milbemycin oxime chewable tablets: efficacy under field conditions. Parasite. 2018;25:63. doi:10.1051/parasite/2018064', relevance: 'Afoxolaner 田野療效' },
    { type: 'journal', citation: 'Mueller RS, Bettenay SV, Shipstone M. Value of the pinnal-pedal reflex in the diagnosis of canine scabies. Vet Rec. 2001;148(20):621-623. doi:10.1136/vr.148.20.621', relevance: '耳翼-踏足反射敏感度 81.8%/特異度 93.8%（n=588）原始研究' },
    { type: 'journal', citation: 'Lower KS, Medleau L, Hnilica K, Bigler B. Evaluation of an enzyme-linked immunosorbant assay (ELISA) for the serological diagnosis of sarcoptic mange in dogs. Vet Dermatol. 2001;12(6):315-320. doi:10.1046/j.0959-4493.2001.00265.x', relevance: 'Sarcoptes IgG ELISA 敏感度 84.2%/特異度 89.5%' },
    { type: 'guideline', citation: 'Hensel P, Santoro D, Favrot C, et al. Canine atopic dermatitis: detailed guidelines for diagnosis and allergen identification. BMC Vet Res. 2015;11:196. doi:10.1186/s12917-015-0515-5', relevance: 'Favrot 標準（耳翼邊緣不受累）與疥蟎排除流程' },
  ],
  is_current: true,
  created_at: now,
};

/** 天疱瘡 (Pemphigus)，疾病型 */
const contentPemphigus: NodeContent = {
  id: 'CONTENT-DERM-L3-010',
  node_id: 'DERM-L3-010',
  version: 2,
  summary: '天疱瘡（Pemphigus）是一組自體免疫性水泡性皮膚病，犬貓裡面最常看到的是落葉型天疱瘡（Pemphigus Foliaceus, PF）。病理機轉是自體抗體攻擊表皮細胞間的橋粒（desmosome）——**犬 PF 的主要自體抗原為 desmocollin-1（DSC1），而非人醫 PF 的 desmoglein-1**（Dsg1 在犬僅為次要抗原，這是關鍵物種差異）——造成棘層鬆解（acantholysis）跟表皮內膿皰。臨床上的特徵是面部（鼻樑、耳翼）對稱性的膿皰、結痂跟脫屑。皮膚細胞學看到棘層鬆解細胞（acantholytic cells）是關鍵線索，確診要靠皮膚切片病理學。治療核心是免疫抑制，長期管理難度很高。台灣秋田犬飼養量大，犬 PF 病例相對常見；貓 PF 則要特別注意 methimazole 觸發型（台灣甲亢貓用 methimazole 的比例很高）。',
  learning_objectives: [
    '描述落葉型天疱瘡的棘層松解病理機轉',
    '辨識 PF 的典型臨床分佈與病灶特徵',
    '正確判讀皮膚細胞學中的棘層松解細胞',
    '規劃 PF 的免疫抑制治療方案與長期監測計畫',
    '區分 PF 與膿皮症的臨床與細胞學差異',
  ],
  key_points: [
    'PF 是犬貓最常見的自體免疫性皮膚病；深層天疱瘡（PV 等）相對罕見',
    '病理核心：自體抗體攻擊橋粒 cadherin（犬 PF 主要為 desmocollin-1，非人醫的 desmoglein-1）→ 棘層鬆解 → 表皮內膿皰',
    '棘層鬆解為抗體直接介導：不需補體/Fc/蛋白酶（steric hindrance + p38MAPK 訊息傳遞）',
    '典型分佈：鼻樑/鼻鏡、耳翼、眼周（面部對稱性）＋軀幹；犬約 35% 及足墊；爪甲侵犯主要見於貓',
    '足墊病灶（角化過度、裂隙）具提示性、有助與腹側好發的膿皮症鑑別，但非高度特異（須組織病理確診）',
    '細胞學：成團棘層鬆解細胞（圓形角質細胞）＋非退化嗜中性球（煎蛋外觀），通常無菌——但非絕對（膿皮症亦可少量出現、PF 約 5% 可見菌）',
    '確診需皮膚切片：表皮內（角質層下/顆粒層）棘層鬆解性膿皰（DIF 非必需、偽陰性常見）',
    '治療首選：Prednisolone 免疫抑制劑量 + Azathioprine（犬）或 Mycophenolate 作為節約類固醇劑（貓禁用 azathioprine）',
  ],
  body: `# 天疱瘡 (Pemphigus)

## 一、病理機制 (Pathophysiology)



### 概述
天疱瘡是自體抗體攻擊角質細胞間黏附結構（橋粒）造成的自體免疫性水泡或膿皰性皮膚病。犬貓裡面以落葉型天疱瘡（PF）最常見（絕大多數天疱瘡病例），其他深層亞型（尋常型 PV、增殖型、副腫瘤型）相對罕見。

### 分型與自體抗原（⚠️ 物種差異）
- 落葉型天疱瘡（PF）：最常見，跑表淺膿皰。**犬 PF 主要自體抗原為 desmocollin-1（DSC1）**——注意人類 PF 的主要標靶是 desmoglein-1，但 Dsg1 在犬 PF 僅為次要抗原（約 6% 血清陽性，Olivry 2006），勿把人醫抗原套用到犬。**貓 PF 的標靶抗原尚未確立。**
- 尋常型天疱瘡（PV）：罕見，攻擊 desmoglein-3，基底上（suprabasal）裂隙（殘留一排「墓碑狀」基底細胞），口腔黏膜也會被影響。
- 紅斑型天疱瘡（PE）：PF 的局部變體，只影響面部。
- 藥物誘發型：某些藥物（例如 methimazole）會觸發。

### 病理機轉
1. 免疫耐受失敗，跑出抗橋粒 cadherin（犬 PF 為 DSC1）的自體抗體（IgG）。
2. 自體抗體結上表皮角質細胞表面的 DSC1。
3. 棘層鬆解為**抗體直接介導**，兩種非互斥機轉：(a) 直接位阻抑制（steric hindrance）cadherin 反式結合；(b) 細胞內訊息傳遞（p38MAPK/EGFR、desmoglein 群聚—內吞—去除）。
4. **注意：此棘層鬆解不需補體、不需 Fc、不需蛋白酶**（單價 Fab'/scFv 片段即可重現病灶）——故勿把「補體/蛋白酶活化」列為致病機轉。
5. 棘層鬆解（acantholysis），角質細胞彼此分離。
6. 跑出表皮內膿皰（位置在角質層下或顆粒層）。
7. 膿皰裡面裝的是棘層鬆解細胞加上嗜中性球，不是感染。

## 二、臨床表現與診斷 (Clinical Signs & Diagnosis)

### 犬
- 面部：鼻樑/鼻鏡、耳翼（含內耳翼）、眼周對稱性的膿皰、結痂、脫屑。
- 軀幹：常見侵犯（Mueller 2006 n=91：軀幹 > 內耳翼 > 面部 > 足墊）。
- 足墊：角化過度、裂隙、疼痛（約 35% 犬）。**具提示性、有助與腹側好發的膿皮症鑑別，但非高度特異／非病理性專一**——足墊主導型 PF 可擬態「hard pad disease」，仍須組織病理鑑別 SLE/犬瘟熱/肝皮症候群/鋅反應性皮膚病。
- 爪甲：甲床炎、爪甲脫落——**犬 PF 少見，主要為貓 PF 之特徵**（勿列為犬 PF 常規表現）。

### 貓
- 面部/頭部：耳廓常最先受累、鼻/口吻、眼周。
- 爪甲皺褶：甲溝炎（paronychia）——可從爪甲皺褶擠出**厚實黃色乾酪樣分泌物（caseous paronychia），為貓 PF 特有的特徵性表現**。
- 乳頭/乳腺周圍（periareolar）：約 25% 病例的好發部位（貓常見預測位置，但非貓獨有）。
- 足墊、趾間。

### 重要特徵
- 膿皰很脆，很容易破，常常看到的就是結痂。
- 通常不會癢，或只有輕度搔癢，跟膿皮症不一樣。
- PF 的黏膜通常不會被影響，PV 才會。

### 診斷
### 皮膚細胞學（初步線索，非確診）
- 膿皰穿刺或從結痂底下取樣。
- 看到成團（rafts）棘層鬆解細胞：圓形深染的角質細胞，外面被「非退化」嗜中性球（±嗜酸性球）包圍（形成「煎蛋」外觀）。
- 跟膿皮症的差異：膿皮症常見退化嗜中性球吞噬球菌，PF 通常無菌。**但此鑑別非絕對**——棘層鬆解細胞並非 PF 專屬（膿皮症、皮癬菌病亦可少量出現），且 PF 約 5% 病例可見菌（可合併次發感染）。較可靠的量化依據為「≥5 個圓形棘層鬆解細胞/×500 視野」（對 PF 敏感度 84-100%、特異度 95-97%，Spriggs/Bizikova 2024），rafts 與嗜酸性球在 PF 較常見。

### 皮膚切片（確診金標準）
- 取完整的膿皰，或新鮮病灶的邊緣。
- 組織病理：表皮內（角質層下 subcorneal／顆粒層 intragranular）棘層鬆解性膿皰，裡面有棘層鬆解細胞跟嗜中性球（±嗜酸性球）。**此為診斷金標準。**
- 直接免疫螢光（DIF）：可見角質細胞間 IgG 網狀沉積，**但對犬 PF 非專一、非確診必需、偽陰性常見、臨床少常規使用**（僅屬研究/輔助工具，不能取代組織病理）。

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
- **Ciclosporine 5-10 mg/kg PO SID——僅作為「與 glucocorticoid 併用」的節約類固醇佐劑**（單獨使用經證實對犬 PF 無效，5 隻犬失敗；modified ciclosporin 併用 GC → 9/11 完全緩解，Chong/Banovic 2022），勿當有效單方。
- 人類靜脈免疫球蛋白（hIVIG）：個案報告支持之搶救/佐劑療法。
- **Rituximab（抗人類 CD20）：人醫 PV 一線（Ritux 3, 2017；FDA 2018 核准），但於犬藥理上無效**——人類 rituximab 不與犬 CD20 結合、無法清除犬 B 細胞（Impellizeri 2006），故犬 PF 並無有效之 rituximab 案例；犬類替代為「抗犬 CD20 單株抗體」（species-specific，目前僅淋巴瘤之實驗性研究）。

[圖片:PF 面部典型病灶與足墊病變照片]

## 四、併發症與監控 (Complications & Monitoring)

### 免疫抑制治療併發症（最大的風險來源）
- 繼發感染：長期免疫抑制就跑出細菌性膿皮症（Staphylococcus）、蠕形蟎症復發、真菌感染。這是天疱瘡治療中最常見的致死原因。
- 醫源性 Cushing：長期高劑量 Prednisolone 跑出多飲多尿、肚子變圓、皮膚萎縮、肌肉萎縮、肝腫大。
- 消化道潰瘍：類固醇不能跟 NSAID 一起用；高劑量類固醇本身就有 GI 出血風險。
- 骨髓抑制（Azathioprine）：5-15% 的犬會跑出嗜中性球或血小板減少，要定期做 CBC 追蹤。
- 肝毒性：Azathioprine 偶爾會肝損傷；Cyclosporine 也可能讓肝酶升高。

### 監控計畫
| 時間點 | 監測項目 | 目標 |
|--------|---------|------|
| 誘導期每 1-2 週 | 臨床病灶評估 + 照片記錄 | 追蹤緩解進度 |
| Azathioprine 第 1-2 月 | CBC（每 1-2 週） | 偵測骨髓抑制 |
| 穩定後每月 | CBC + 肝腎功能（ALT、BUN、Cre） | 藥物副作用監測 |
| 穩定後每 3 月 | 尿液分析 + 尿培養 | 偵測隱性泌尿道感染（免疫抑制犬） |
| 每次回診 | 皮膚細胞學（新病灶） | 區分復發 vs 繼發感染 |
| 減藥期每 2-4 週 | 臨床評估 | 確認最低維持劑量 |

### 治療反應評估
- 完全緩解：沒有新病灶、舊病灶都癒合，就可以開始慢慢減藥。
- 部分緩解：病灶有減少但沒完全退掉，維持目前劑量或加二線藥物。
- 治療失敗：4-6 週誘導期都沒改善，要回頭確認診斷，考慮換免疫抑制方案。

## 五、預後與預後因子 (Prognosis)

- 天疱瘡落葉型（PF）：預後要保留到還算可以。約 50% 的犬可達緩解（Mueller 2006：過半緩解、另約 25% 顯著改善；回顧：完全緩解約 52%、部分緩解約 35%），**但其中「大多數」需終生低劑量免疫抑制維持（減量至最低有效劑量），只有「少數」能完全停藥後長期不復發**（並非約半數皆可停藥）。約 10-15%（Mueller 13%）因治療失敗、無法接受的副作用或生活品質不佳而安樂死。**注意：一手文獻並未指出「繼發感染」為單一最常見致死原因**（Mueller 安樂死原因：治療無反應約 36%、副作用約 18%、與天疱瘡無關/不明約 46%）；長期免疫抑制導致的繼發感染/敗血症確為重要致命併發症，但不宜稱為「最常見致死原因」。（早期世代 Gomez 2004 預後較差：致死率約 60.5%、1 年存活約 53%。）
- 天疱瘡尋常型（PV）：預後差。口腔加皮膚都嚴重潰瘍，對治療反應比 PF 差，常常要積極用多種免疫抑制藥。
- 藥物誘發型：預後不錯。停掉致敏藥物（例如 methimazole）後多半會自行緩解，或只要短期免疫抑制就好。
- 預後好的條件：早期診斷（病程不到 3 個月）、對初始 prednisolone 反應好、沒有嚴重繼發感染。
- 預後差的條件：診斷被拖延（長期被誤診當膿皮症治）、多處黏膜被影響（PV）、合併糖尿病（類固醇會讓糖尿病更糟）、年老犬（免疫抑制耐受性差）。
- 飼主溝通重點：天疱瘡是要終生管理的慢性病，治療目標是「用最少的藥控制疾病」，不是「根治」。

## 六、人醫借鑒 (Translational Insights)

| 人醫工具/概念 | 獸醫應用潛力 | 現況 |
|-------------|-------------|------|
| Rituximab（抗 CD20 單抗） | 頑固性犬天疱瘡的 B 細胞耗竭治療 | 人醫已為 PV 一線治療，獸醫僅個案報告 |
| 抗自體抗原抗體定量（ELISA） | 治療反應監測與復發預測的客觀指標 | 人醫用 anti-Dsg1；**犬應用之標靶為 anti-desmocollin-1（DSC1）**（抗體效價隨臨床改善下降，Bizikova 2012），初步驗證中 |
| Mycophenolate mofetil | 犬天疱瘡的節約類固醇劑選擇 | 人醫二線，獸醫使用經驗逐漸累積 |

## 七、臨床爭議與知識空缺 (Controversies & Knowledge Gaps)

| 爭議議題 | 現況 | Evidence Level |
|---------|------|---------------|
| Prednisolone 最佳起始劑量：2 vs 4 mg/kg/day | 嚴重病例傾向高劑量，但高劑量副作用更多；缺乏 RCT | Level IV |
| Azathioprine vs Mycophenolate 作為犬 PF 首選節約劑 | Azathioprine 使用歷史長；MMF 可能起效更快但成本高 | Level III |
| 貓 PF 最佳免疫抑制方案 | Chlorambucil + Prednisolone 為主流，但缺乏大型比較研究 | Level IV |
| 犬 PF 停藥標準與復發預測因子 | 何時可嘗試停藥尚無共識，anti-desmocollin-1（DSC1）抗體定量可能有助預測 | Level IV |

## 八、近期更新 (Recent Updates)

- **犬 PF 自體抗原確立為 desmocollin-1**：Olivry 2006 證實 Dsg1 在犬 PF 僅為次要抗原（約 6% 血清陽性），Bizikova 2012 確立 DSC1 為主要標靶（約 86% IIF 陽性血清含 anti-DSC1 IgG）——與人類 PF（Dsg1）不同，屬關鍵物種差異；抗 DSC1 效價隨臨床改善下降，具監測潛力。**貓 PF 的標靶抗原尚未確立。**
- **棘層鬆解機轉更新**：天疱瘡棘層鬆解為抗體直接介導、Fc/補體/蛋白酶「非必需」（單價 Fab'/scFv 即可重現），機轉為 steric hindrance ＋ p38MAPK/EGFR 訊息傳遞與 desmoglein 去除——舊教材「補體/蛋白酶活化」的敘述已被修正。
- **細胞學量化鑑別**：Spriggs/Bizikova 2024（Vet Dermatol）證實棘層鬆解細胞非 PF 專屬、PF 約 5% 可見菌；提出「≥5 圓形棘層鬆解細胞/×500 視野」之量化 cut-off（敏感度 84-100%、特異度 95-97%）以與膿皮症鑑別。
- **Ciclosporin 僅為佐劑**：Chong/Banovic 2022 顯示 ciclosporin 單獨對犬 PF 無效、須與 GC 併用（9/11 完全緩解）。
- **Rituximab 於犬無效**：人類 rituximab 不與犬 CD20 結合（Impellizeri 2006），犬類需 species-specific 抗犬 CD20 單抗（實驗性）。`,
  clinical_pearl: '在細胞學上分辨天疱瘡跟膿皮症是每位獸醫都應該會的技能。關鍵差異：PF 膿皰裡面看到的是成團棘層鬆解細胞被「非退化」嗜中性球包圍（±嗜酸性球），通常無菌；膿皮症則是退化嗜中性球裡面有吞噬的球菌。看到「大量圓形棘層鬆解細胞 + 非退化嗜中性球 + 無菌」就要想到天疱瘡，馬上安排皮膚切片確診。但要記住這不是絕對——棘層鬆解細胞在膿皮症/皮癬菌病也可能少量出現，PF 約 5% 也可見菌（合併次發感染）；較可靠是量化「≥5 個棘層鬆解細胞/×500 視野」，最終仍以組織病理為準。',
  common_mistakes: [
    '將 PF 的膿皰/結痂誤診為膿皮症而長期使用抗生素（PF 對抗生素無效）',
    '皮膚切片取樣不當：應取完整膿皰或新鮮病灶邊緣，避免取慢性結痂或苔蘚化區域',
    'Prednisolone 減量過快導致復發（應每 2-4 週僅減 25%）',
    '未使用節約類固醇劑即長期高劑量糖皮質激素（嚴重副作用）',
    '貓使用 Azathioprine（貓對 azathioprine 高度敏感，可致命性骨髓抑制，應用 chlorambucil）',
  ],
  disease_data: {
    signalment: '犬：中年犬最常見（中位年齡 4-6 歲），品種偏好秋田犬、鬆獅犬、臘腸犬、紐芬蘭犬、英國鬥牛犬。貓：沒有明顯品種偏好，中老年貓比較多。性別沒差異。台灣秋田犬飼養量大，犬 PF 病例相對常見；貓 PF 則要特別留意 methimazole 觸發型，因為台灣甲亢貓用 methimazole 的比例很高。',
    etiology: '自體免疫疾病：免疫耐受失敗，跑出攻擊橋粒 cadherin 的 IgG 自體抗體——**犬 PF 主要為抗 desmocollin-1（DSC1，非人醫的 desmoglein-1；Dsg1 在犬僅次要）**；PV 為抗 desmoglein-3；貓 PF 標靶未確立。觸發因素可能有藥物（methimazole 疑似觸發，除 doxycycline 外多未經再投藥證實）、紫外線暴露、慢性皮膚病。多數是特發性。台灣日照強，可能是部分鼻部 PF 加重的原因。',
    pathogenesis: '免疫耐受失敗後跑出抗 DSC1（犬 PF）IgG 自體抗體，這抗體結上角質細胞表面的 DSC1，透過直接位阻抑制黏附與細胞內訊息傳遞（p38MAPK/EGFR、desmoglein 去除）造成橋粒功能壞掉——此過程「不需補體/Fc/蛋白酶」。然後跑棘層鬆解（acantholysis），角質細胞分離，表皮內就跑出膿皰（位於角質層下或顆粒層）。嗜中性球被招來進膿皰，膿皰破掉就變結痂。',
    clinical_signs: [
      { sign: '面部對稱性膿皰與結痂', category: 'primary', description: '鼻樑、耳翼、眼周。膿皰很脆容易破，臨床上常看到的就是結痂' },
      { sign: '足墊角化過度', category: 'primary', description: '足墊變厚、有裂隙、會痛（約 35% 犬）；具提示性但非高度特異，須組織病理鑑別 SLE/肝皮症候群等' },
      { sign: '爪甲病變', category: 'secondary', description: '甲床炎、甲溝炎、爪甲脫落（onychomadesis）——主要見於貓 PF（乾酪樣甲溝炎），犬少見' },
      { sign: '全身性結痂脫屑', category: 'secondary', description: '嚴重病例擴到軀幹跟腹股溝' },
      { sign: '貓乳頭周圍病變', category: 'secondary', description: '貓特有的分佈，乳頭結痂跟脫屑' },
    ],
    staging: { system: '範圍分級', stages: ['局部型：僅面部或足墊', '廣泛型：面部 + 軀幹 + 四肢', '重症型：全身性 + 發燒 + 食慾下降'] },
    differential_diagnosis: [
      { condition: '細菌性膿皮症', key_differentiator: '細胞學見退化嗜中性球吞噬球菌；抗生素治療有效' },
      { condition: '蠕形蟎症', key_differentiator: '深層皮膚刮搔見 Demodex，非膿皰為主的病灶' },
      { condition: '皮膚癬菌症', key_differentiator: '環形脫毛、真菌培養陽性' },
      { condition: '紅斑性狼瘡 (DLE/SLE)', key_differentiator: 'DLE 好發鼻端，脫色素與潰瘍為主；SLE 多系統受累' },
    ],
    diagnostic_workup: '先做皮膚細胞學（膿皰穿刺或結痂底下取樣），看到棘層鬆解細胞。然後做皮膚切片病理學（取完整膿皰或新鮮病灶），組織病理確認表皮內棘層鬆解性膿皰。可以加做直接免疫螢光（角質細胞之間有 IgG 沉積）。回顧用藥史排除藥物誘發型。',
    treatment_protocol: '誘導期用 Prednisolone 2-4 mg/kg/day PO 加上節約類固醇劑：犬用 Azathioprine 2 mg/kg SID 或 Mycophenolate 10-20 mg/kg BID，貓用 Chlorambucil 0.1-0.2 mg/kg q48h。維持期等病情控制後，Prednisolone 每 2-4 週減 25%，目標是最低有效劑量隔日給藥。難治性病例考慮 Cyclosporine 或 hIVIG。局部治療：足墊裂隙可以用含類固醇的外用製劑。',
    prognosis: '要終身管理。50-70% 的犬在適當免疫抑制下可以控制得不錯。完全緩解率 10-20%（可以試試停藥）。預後不好的因素：病灶範圍廣、需要多種免疫抑制劑、有繼發感染。長期免疫抑制治療的副作用是主要挑戰（Cushing 表現、感染風險）。',
    monitoring: '誘導期每 2 週回診評估。穩定後每 1-3 個月回診。每次都要做：臨床病灶評估、CBC（監測 Azathioprine 骨髓抑制）、肝腎功能、尿比重。用 Chlorambucil 前 2 個月每 2 週要做 CBC。要盯類固醇副作用（多飲多尿、肌肉萎縮、皮膚薄化）。',
    owner_communication: '天疱瘡是一種自體免疫疾病，身體的免疫系統搞錯方向去攻擊自己的皮膚。這是要終身管理的慢性病。治療用免疫抑制藥物（類固醇加上節約類固醇的藥物），目標是用最少的藥控制病情。藥物會有副作用（類固醇造成多喝多尿之類），定期驗血追蹤很重要。不能自己停藥或調劑量，突然停藥會嚴重復發。',
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
    { type: 'journal', citation: 'Olivry T. A review of autoimmune skin diseases in domestic animals: I – Superficial pemphigus. Vet Dermatol. 2006;17(5):291-305. doi:10.1111/j.1365-3164.2006.00540.x', relevance: '表淺型天疱瘡（PF）的全面回顧（Dsg1 為犬次要抗原）' },
    { type: 'journal', citation: 'Bizikova P, Dean GA, Hashimoto T, Olivry T. Cloning and establishment of canine desmocollin-1 as a major autoantigen in canine pemphigus foliaceus. Vet Immunol Immunopathol. 2012;149(3-4):197-207. doi:10.1016/j.vetimm.2012.06.025', relevance: '犬 PF 主要自體抗原 desmocollin-1 之確立（物種差異）' },
    { type: 'journal', citation: 'Mueller RS, Krebs I, Power HT, Fieseler KV. Pemphigus foliaceus in 91 dogs. J Am Anim Hosp Assoc. 2006;42(3):189-196. doi:10.5326/0420189', relevance: '犬 PF 91 例：病灶分佈、治療反應與預後' },
    { type: 'journal', citation: 'Bizikova P, Olivry T. Feline pemphigus foliaceus: original case series and a comprehensive literature review. BMC Vet Res. 2019;15(1):22. doi:10.1186/s12917-018-1739-y', relevance: '貓 PF 病例系列與文獻回顧（分佈/caseous paronychia/methimazole）' },
    { type: 'journal', citation: 'Bizikova P, Linder KE, Olivry T. Oral glucocorticoid pulse therapy for induction of treatment of canine pemphigus foliaceus – a comparative study. Vet Dermatol. 2015;26(5):354-e77. doi:10.1111/vde.12241', relevance: '犬 PF 口服糖皮質激素脈衝療法誘導' },
    { type: 'textbook', citation: "Miller WH, Griffin CE, Campbell KL. Muller and Kirk's Small Animal Dermatology, 7th ed. Elsevier, 2013.", relevance: '天疱瘡完整章節' },
  ],
  is_current: true,
  created_at: now,
};

/** 獸醫皮膚科總覽，L0 概念型 */
const contentDermOverview: NodeContent = {
  id: 'CONTENT-DERM-L0-001',
  node_id: 'DERM-L0-001',
  version: 2,
  summary: '獸醫皮膚科（Veterinary Dermatology）是專門處理犬貓皮膚、毛髮、爪甲跟耳道疾病的臨床專科。皮膚病佔小動物一般門診量的 20-25%，是最常見的就診原因之一。本專科涵蓋過敏性皮膚病、感染性皮膚病（細菌、黴菌、寄生蟲）、自體免疫性皮膚病、內分泌相關皮膚病、腫瘤性皮膚病跟耳科疾病。台灣亞熱帶氣候，過敏性皮膚病跟黴菌感染的盛行率特別高。',
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
    '系統性診斷思維比單一疾病知識更重要。皮膚科就是「排除性」診斷的典範',
  ],
  body: `# 獸醫皮膚科總覽

## 一、核心概念與機轉 (Core Concept & Mechanism)



### 專科範疇
獸醫皮膚科涵蓋犬貓（跟其他物種）的皮膚、毛髮、爪甲跟耳道疾病的診斷與治療。主要疾病分類有：

1. 過敏性皮膚病：犬異位性皮膚炎（CAD）、跳蚤過敏（FAD）、食物不良反應（AFR）。
2. 感染性皮膚病：細菌性膿皮症、馬拉色菌皮膚炎、皮膚癬菌症。
3. 寄生蟲性皮膚病：蠕形蟎症、疥蟎症。
4. 自體免疫性皮膚病：天疱瘡、狼瘡。
5. 內分泌相關皮膚病：甲狀腺低下、Cushing 症候群。
6. 腫瘤性皮膚病：肥大細胞瘤、皮膚型淋巴瘤。
7. 耳科疾病：外耳炎、中耳炎。

### 臨床重要性
皮膚病佔小動物一般門診量的 20-25%。瘙癢（pruritus）是最常見的就診主訴，鑑別診斷有好幾十種疾病。皮膚科的核心挑戰是：不同的病常常長得很像（紅斑、脫毛、鱗屑），所以必須靠系統性的診斷方法。

### 診斷方法學
皮膚科診斷走逐步排除的系統性流程：

1. 詳細病史：發病年齡、季節性、分佈模式、搔癢程度、用藥反應。
2. 皮膚科理學檢查：病灶類型（原發性還是繼發性）、分佈模式。
3. 基本診斷工具：皮膚刮搔、皮膚細胞學、毛髮鏡檢、Wood 燈。
4. 進階診斷：真菌培養、細菌培養藥敏、組織病理切片、過敏原檢測。

### 台灣環境與流行病學
台灣亞熱帶，氣候特徵對皮膚病流行病學影響很大：
- 全年溫暖潮濕，跳蚤一年到頭都在跑（FAD 沒有季節性）。
- 高濕度讓馬拉色菌跟黴菌感染盛行率高。
- 塵蟎全年高濃度，CAD 的發病率跟嚴重度可能比溫帶國家高。
- 常見品種（法鬥、柴犬、貴賓）都有自己品種特異性的皮膚病。

### 學習架構
本知識樹用六層漸進架構：
- L1 基礎科學：皮膚解剖、免疫學、微生物生態
- L2 病理機轉：過敏反應、屏障功能障礙、角化異常
- L3 臨床疾病：各疾病的診斷與治療
- L4 診斷方法：具體檢查技術與判讀
- L5 治療管理：藥物治療與長期管理策略

[圖片:獸醫皮膚科知識架構心智圖]

## 二、臨床意義 (Clinical Significance)

皮膚科疾病佔小動物門診量的 20-30%，是日常臨床最常碰到的問題之一。掌握系統性的皮膚科知識可以幫到幾件事：
- 鑑別診斷效率：皮膚病的臨床表現很雷同（搔癢、脫毛、丘疹），要有結構化的診斷思路才不會經驗性亂開藥。
- 減少不必要的轉診：基層獸醫只要掌握基本皮膚科技能（刮搔、細胞學、Wood's lamp），常見皮膚問題大概 70% 以上自己就能處理。
- 長期管理能力：異位性皮膚炎這類慢性皮膚病要終生管理，飼主衛教跟順從性才是預後的關鍵。
- 跨專科整合：很多全身性疾病（甲狀腺低下、Cushing、食物不良反應）的第一個表現就是皮膚症狀。

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
  clinical_pearl: '皮膚科最重要的一句話：「皮膚病幾乎都不是你第一眼看到的那個病。」表面的感染（膿皮症、馬拉色菌）多半是繼發的，背後藏著過敏或內分泌這些原發病因。不把根本原因找出來，治療永遠都只是在治標。每次皮膚病就診都做細胞學，這個習慣養起來，就是邁向優秀皮膚科醫師的第一步。',
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
    { type: 'journal', citation: 'Hill PB et al. Survey of the prevalence, diagnosis and treatment of dermatological conditions in small animals in general practice. Vet Rec. 2006;158(16):533-539. doi:10.1136/vr.158.16.533', relevance: '小動物皮膚病一般診療盛行率調查' },
    { type: 'guideline', citation: 'Olivry T, et al. "Treatment of canine atopic dermatitis: 2015 updated guidelines from the International Committee on Allergic Diseases of Animals (ICADA)." BMC Vet Res. 2015;11:210. doi:10.1186/s12917-015-0514-6', relevance: 'ICADA 犬異位性皮膚炎「治療」國際共識（更正原誤植期刊名 BMC Vet Dermatol→BMC Vet Res、卷 26→11；Crossref 驗證）' },
    { type: 'guideline', citation: 'Hensel P, et al. "Canine atopic dermatitis: detailed guidelines for diagnosis and allergen identification." BMC Vet Res. 2015;11:196. doi:10.1186/s12917-015-0515-5', relevance: 'ICADA 犬異位性皮膚炎「診斷與過敏原辨識」國際共識，與上方治療指引成對（Crossref 驗證）' },
  ],
  is_current: true,
  created_at: now,
};

/** 皮膚解剖與生理，L1 概念型 */
const contentSkinAnatomy: NodeContent = {
  id: 'CONTENT-DERM-L1-001',
  node_id: 'DERM-L1-001',
  version: 1,
  summary: '皮膚是動物體最大的器官，佔體重的 12-24%。犬貓皮膚由表皮（epidermis）、真皮（dermis）跟皮下組織（hypodermis）三層構成。表皮的角質化過程維持皮膚屏障功能，毛囊週期性生長決定被毛密度跟品質。理解皮膚正常解剖跟組織學，是所有皮膚病理學跟臨床診斷的基礎。犬貓皮膚跟人類差很多：表皮比較薄、複合毛囊結構、沒有外分泌汗腺（只有足墊有）。',
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
表皮是最外層，由角質細胞（keratinocytes）構成，負責屏障功能。犬貓表皮比人類薄（3-5 層 vs 10-15 層），更新週期大概 21 天。

角質化分層（由深至淺）：
1. 基底層（Stratum basale）：單層柱狀細胞，含幹細胞，持續分裂往上推。
2. 棘層（Stratum spinosum）：多層多角形細胞，靠橋粒（desmosomes）連接，朗格漢斯細胞就住在這層。
3. 顆粒層（Stratum granulosum）：含角質透明蛋白顆粒（keratohyalin granules），是 filaggrin 的前驅物。
4. 角質層（Stratum corneum）：無核扁平角質細胞（corneocytes），外面被脂質雙層包圍。

屏障功能的關鍵：
- 角質化包膜（cornified envelope）：交聯的蛋白殼。
- 細胞間脂質：ceramides（神經醯胺）、cholesterol、fatty acids。
- Filaggrin：把角蛋白絲聚合起來，分解後變成天然保濕因子（NMF）。

表皮內的免疫細胞：
- 朗格漢斯細胞（Langerhans cells）：樹突狀的抗原呈現細胞。
- 黑色素細胞（Melanocytes）：在基底層，合成黑色素保護 DNA。
- Merkel 細胞：機械感受器。

### 真皮（Dermis）
- 乳頭層（Papillary dermis）：薄膠原纖維、豐富的微血管叢、感覺神經末梢。
- 網狀層（Reticular dermis）：粗膠原纖維束（Type I collagen）、彈性纖維、毛囊根部。

### 皮下組織（Hypodermis）
- 以脂肪組織為主，提供隔熱、緩衝跟能量儲存。

### 皮膚附屬構造
### 毛囊（Hair Follicle）
- 犬貓是複合毛囊：一根主毛（primary hair）加上多根次毛（secondary hairs）。
- 毛球（hair bulb）含毛母質（matrix cells）跟真皮乳頭（dermal papilla）。
- 毛幹結構：髓質（medulla）、皮質（cortex）、表皮鞘（cuticle）。

### 皮脂腺（Sebaceous Glands）
- 全分泌型，附著在毛囊上部。
- 分泌皮脂（lipid-rich sebum），潤滑毛髮跟皮膚表面。
- 功能異常的話就跑出脂漏性皮膚炎。

### 頂漿腺（Apocrine Glands）
- 犬貓廣泛分佈（跟人類不同）。
- 開口在毛囊漏斗部。
- 功能還不太清楚，可能跟氣味標記有關。

### 爪甲（Claws/Nails）
- 由爪甲母質（nail matrix）角質化產生。
- 爪甲疾病（onychopathy）可以是自體免疫、感染或創傷造成的繼發。

[圖片:犬皮膚三層結構與附屬構造標注解剖圖]

## 二、臨床意義 (Clinical Significance)

理解皮膚解剖是所有皮膚科診斷跟治療的基石：
- 皮膚厚度差異影響用藥：犬的表皮只有 3-5 層細胞（人類 15-20 層），經皮吸收藥物的滲透率比較高，外用類固醇也更容易讓皮膚萎縮。
- 被毛密度決定病灶分佈：犬貓的複合毛囊結構（一個毛孔有多根毛）讓毛囊炎（folliculitis）的表現跟人類不一樣。犬的膿皮症最典型的就是表皮圓環（epidermal collarette）。
- 皮脂腺功能影響診斷：犬的皮脂腺分佈很廣，脂漏症（seborrhea）是很多原發病（甲狀腺低下、Malassezia 那些）的共同表現。
- 指間結構特殊性：犬的趾間皮膚（interdigital skin）解剖很特別，容易跑出指間囊腫（interdigital cyst 或 furuncle），跟深層毛囊破裂有關。
- 耳道解剖：犬貓的 L 型外耳道（垂直段加水平段），治療外耳炎的時候特別要注意藥物能不能送到水平段。

## 三、人醫借鑒 (Translational Insights)

| 人醫工具/概念 | 獸醫應用潛力 | 現況 |
|-------------|-------------|------|
| 皮膚鏡（dermoscopy）用於色素病灶評估 | 犬貓毛髮疾病、色素異常與寄生蟲的無創評估 | 獸醫皮膚鏡（trichoscopy）用於脫毛與 Demodex 逐漸普及 |
| 經表皮水分流失（TEWL）測量 | 量化犬 AD 皮膚屏障功能缺損與保濕治療效果 | 研究使用中，臨床尚未常規化 |
| 3D 皮膚列印與組織工程 | 犬大面積皮膚缺損的再生醫學修復 | 人醫人工皮膚已臨床應用，獸醫處於實驗階段 |
| 高頻超音波（HFUS）皮膚成像 | 犬貓皮膚腫塊深度與邊界的非侵入評估 | 人醫 20-50MHz HFUS 已常規，獸醫偶有報告 |

## 四、臨床爭議與知識空缺 (Controversies & Knowledge Gaps)

| 爭議議題 | 現況 | Evidence Level |
|---------|------|---------------|
| 犬品種間皮膚屏障功能差異的臨床意義 | 不同品種表皮厚度、ceramide 組成不同，但品種特異性正常值未建立 | Level IV |
| 外用保濕劑（ceramide 製劑）對犬 AD 的獨立療效 | 輔助效果獲認可但能否減少系統性藥物用量的 RCT 不足 | Level III |
| 犬複合毛囊結構對外用藥物吸收的影響 | 犬與人表皮結構差異大，人用外用藥物劑量能否直接換算存疑 | Level IV |`,
  clinical_pearl: '犬的表皮比人類薄很多（3-5 層 vs 10-15 層），所以犬的皮膚屏障比較脆弱，過敏原也比較容易穿透。這也是為什麼外用藥物在犬身上的吸收率比人類高，用外用類固醇要特別注意局部皮膚萎縮的副作用。理解犬的複合毛囊結構，對於判讀皮膚刮搔跟切片也很重要。',
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
    { type: 'journal', citation: 'Marsella R et al. Current evidence of skin barrier dysfunction in human and canine atopic dermatitis. Vet Dermatol. 2011;22(3):239-248. doi:10.1111/j.1365-3164.2011.00967.x', relevance: '犬與人異位性皮膚炎之皮膚屏障功能障礙實證。Crossref 驗證真實，已取代原疑捏造之引用' },
    { type: 'guideline', citation: 'Hensel P, Santoro D, Favrot C, et al. Canine atopic dermatitis: detailed guidelines for diagnosis and allergen identification. BMC Vet Res. 2015;11:196. doi:10.1186/s12917-015-0515-5', relevance: 'ICADA 指引中皮膚結構與屏障功能的臨床意義' },
  ],
  is_current: true,
  created_at: now,
};

/** 皮膚免疫學，L1 概念型 */
const contentCutaneousImmunology: NodeContent = {
  id: 'CONTENT-DERM-L1-002',
  node_id: 'DERM-L1-002',
  version: 1,
  summary: '皮膚是最大的免疫器官，是擋下外界病原的第一道防線。皮膚免疫系統（skin-associated lymphoid tissue, SALT）包含先天性跟後天性免疫組成。朗格漢斯細胞、真皮樹突狀細胞、肥大細胞、T 細胞跟角質細胞一起構成皮膚的免疫監視網絡。理解皮膚免疫學，是掌握過敏反應（IgE 介導）、自體免疫（抗體介導）跟感染免疫（細胞介導）病理機轉的基本功，不能省。',
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
    'Th1 反應（IFN-γ, TNF-α）在對抗細胞內病原（皮膚癬菌、蠕形蟎）上是主力',
    'IL-31 是犬瘙癢的關鍵細胞因子，直接活化感覺神經元（lokivetmab 的標靶）',
    '角質細胞不僅是屏障，也能產生抗菌肽（defensins, cathelicidins）與細胞因子',
    '調節性 T 細胞（Treg）維持免疫耐受，其功能異常與自體免疫皮膚病相關',
    '補體系統在自體免疫水泡性疾病（天疱瘡）的組織損傷中扮演重要角色',
  ],
  body: `# 皮膚免疫學

## 一、核心概念與機轉 (Core Concept & Mechanism)



### 皮膚相關淋巴組織（SALT）
皮膚免疫系統由多種細胞組成的網絡建構而成，協同提供免疫監視跟防禦。

### 先天性免疫組成

角質細胞（Keratinocytes）：
- 不只是物理屏障，也是活躍的免疫參與者。
- 分泌抗菌肽（β-defensins、cathelicidins）直接殺細菌跟真菌。
- 分泌細胞因子（IL-1、IL-6、IL-8、TNF-α）啟動發炎反應。
- 表達 Toll-like receptors（TLRs）辨識病原相關分子模式（PAMPs）。

肥大細胞（Mast Cells）：
- 位於真皮的血管周圍。
- 表面 FcεRI（高親和力 IgE 受體）結合 allergen-specific IgE。
- 脫顆粒會釋放組胺、白三烯、前列腺素、TNF-α、蛋白酶。
- Type I 過敏反應的核心效應細胞。

嗜中性球（Neutrophils）：
- 急性發炎的第一線防禦。
- 膿皮症裡面的主要發炎細胞。
- 天疱瘡膿皰裡面也會大量出現（這時候是非感染性招來的）。

### 後天性免疫組成

朗格漢斯細胞（Langerhans Cells, LCs）：
- 表皮中的專職抗原呈現細胞（APCs）。
- 抓到穿透屏障的抗原後，遷移到局部淋巴結，去活化 naive T 細胞。
- 在異位性皮膚炎裡面，表面 FcεRI 表達會增加，過敏原呈現效率變更好。

真皮樹突狀細胞（Dermal Dendritic Cells）：
- 真皮裡另一群 APCs。
- 跟 LCs 互補，參與不同類型的免疫反應。

T 細胞：
- 真皮含常駐記憶 T 細胞（tissue-resident memory T cells, TRM）。
- Th1：分泌 IFN-γ，活化巨噬細胞對抗細胞內病原。
- Th2：分泌 IL-4、IL-13，驅動 B 細胞 class switch 到 IgE，跑過敏反應。
- Th17：分泌 IL-17，招來嗜中性球對抗細胞外細菌跟真菌。
- Treg：分泌 IL-10、TGF-β 維持免疫耐受。功能壞掉就跑自體免疫。

### 過敏反應的免疫機轉
### Type I 過敏（即時型）
抗原被 LC 抓到，活化 Th2，IL-4/IL-13 驅動 B 細胞 class switch 到 IgE。IgE 結上肥大細胞的 FcεRI，下次再碰到同樣抗原，肥大細胞就脫顆粒，幾分鐘內跑出搔癢跟紅斑。

### Type IV 過敏（遲發型）
抗原被 APC 呈現出來，活化記憶 T 細胞，招來巨噬細胞跟嗜中性球，24-72 小時後跑出發炎反應。

### 瘙癢的神經免疫機轉
- IL-31（主要由 Th2 細胞分泌）直接結合背根神經節感覺神經元上的 IL-31RA/OSMR。
- 組胺結 H1 受體，活化 C 纖維，搔癢信號就傳到脊髓跟大腦。
- JAK-STAT 信號通路是多種促瘙癢細胞因子的共同通路（也是 oclacitinib 的標靶）。

[圖片:皮膚免疫細胞分佈與交互作用示意圖]

## 二、臨床意義 (Clinical Significance)

皮膚免疫學直接解釋了現代皮膚科藥物的作用機制跟治療策略的選擇：
- IL-31 跟搔癢的關聯：IL-31 是犬異位性皮膚炎（CAD）最主要的致癢細胞因子，Lokivetmab（anti-IL-31 單株抗體）的成功就是建立在這個發現上。理解 Th2 免疫偏移到 IL-31 釋放再到神經元活化的這條路徑，才能理解為什麼 Lokivetmab 可以快速止癢但又不影響感染免疫。
- JAK-STAT 訊號通路：Oclacitinib 抑制 JAK1，同時阻斷 IL-31（止癢）跟 IL-4/IL-13（減少 Th2 發炎），所以是多靶點。但也因為 JAK 抑制涉及其他細胞激素信號，副作用就是感染風險上升。
- Type I 過敏 vs Type IV 過敏：犬 AD 急性期以 Type I（IgE、肥大細胞、組胺）為主，慢性期轉成 Type IV（T 細胞介導）。這就解釋了為什麼抗組織胺對犬 AD 效果有限（大概 15-30%），而免疫調節劑（cyclosporine）對慢性病例更有效。
- Langerhans 細胞的門戶角色：表皮的 Langerhans 細胞是皮膚的第一道免疫哨兵，它活化的程度會影響過敏原致敏效率，也是過敏原免疫療法（ASIT）的主要標靶。

## 三、人醫借鑒 (Translational Insights)

| 人醫工具/概念 | 獸醫應用潛力 | 現況 |
|-------------|-------------|------|
| JAK 抑制劑家族擴展（JAK2/TYK2 選擇性抑制劑） | 下一代更高選擇性的犬用 JAK 抑制劑 | 人醫 upadacitinib/abrocitinib 已上市用於 AD，獸醫 oclacitinib 為 JAK1 選擇性 |
| TSLP（胸腺基質淋巴生成素）靶向治療 | 阻斷 Th2 免疫起始步驟的上游治療 | 人醫 tezepelumab 已上市用於氣喘，獸醫犬 TSLP 研究起步 |
| 單細胞 RNA 定序（scRNA-seq）免疫細胞圖譜 | 精準定義犬皮膚免疫細胞亞群與藥物靶點 | 人醫 AD 皮膚單細胞圖譜已發表，獸醫犬皮膚 scRNA-seq 初步研究 |
| IL-33/ST2 軸靶向治療 | 犬過敏性皮膚病的新治療靶點 | 人醫 itepekimab（anti-IL-33）臨床試驗中，獸醫犬 IL-33 角色研究中 |

## 四、臨床爭議與知識空缺 (Controversies & Knowledge Gaps)

| 爭議議題 | 現況 | Evidence Level |
|---------|------|---------------|
| 犬 AD 的 Th2→Th1 免疫偏移時間點與臨床意義 | 急性期 Th2 為主、慢性期 Th1 加入，但轉變時間因犬而異 | Level III |
| IL-31 以外的犬瘙癢途徑（IL-33、TSLP、PAR-2）的臨床重要性 | Lokivetmab 無效犬可能涉及非 IL-31 途徑，但替代靶點未商業化 | Level IV |
| Oclacitinib 對犬免疫監視功能的長期影響 | JAK1 抑制影響多種細胞因子信號，長期免疫監視減弱的程度不明確 | Level III |`,
  clinical_pearl: '理解 Th2 偏移就是掌握所有過敏性皮膚病的鑰匙。CAD 犬的免疫系統「偏」到 Th2 那邊，過多的 IgE 出來，肥大細胞活化。現代靶向治療就是針對這條路徑：lokivetmab 阻斷 IL-31（止癢），oclacitinib 抑制 JAK-STAT（阻斷多種細胞因子信號），cyclosporine 抑制 T 細胞活化。把機轉弄懂，才能理解為什麼不同藥物起效速度跟適應症都不一樣。',
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
    { type: 'journal', citation: 'Marsella R, De Benedetto A. Atopic dermatitis in animals and people: an update and comparative review. Vet Sci. 2017;4(3):37. doi:10.3390/vetsci4030037', relevance: '犬異位性皮膚炎的免疫學比較回顧' },
    { type: 'journal', citation: 'Gonzales AJ et al. Interleukin-31: its role in canine pruritus and naturally occurring canine atopic dermatitis. Vet Dermatol. 2013;24(1):48-e12. doi:10.1111/j.1365-3164.2012.01098.x', relevance: 'IL-31 在犬瘙癢與 CAD 中角色的關鍵研究' },
    { type: 'guideline', citation: 'Mueller RS, Nuttall T, Prost C, et al. Treatment of the canine atopic dermatitis，2023 updated guidelines from ICADA. Vet Dermatol. 2023;34(4):297-316.', relevance: 'ICADA 更新指引中免疫機轉與治療靶點 ⚠️ 待DVM查證：Crossref 未見「2023 ICADA 犬 AD 治療更新 Vet Dermatol 34(4):297-316」；真實 ICADA 治療指引為 Olivry 2015（BMC Vet Res 11:210 doi:10.1186/s12917-015-0514-6），疑年份/作者/期刊誤標，請 DVM 查證或改引 Olivry 2015' },
  ],
  is_current: true,
  created_at: now,
};

/** 毛髮生長週期，L1 概念型 */
const contentHairCycle: NodeContent = {
  id: 'CONTENT-DERM-L1-003',
  node_id: 'DERM-L1-003',
  version: 1,
  summary: '犬貓的毛髮生長走週期性模式，依序經過生長期（anagen）、退化期（catagen）、休止期（telogen）跟脫落期（exogen）。跟人類持續生長的頭髮不一樣，犬貓大部分毛囊是馬賽克式的非同步週期（mosaic pattern），少部分品種（例如 Poodle、Yorkshire Terrier）有比較長的 anagen 期。毛髮週期受光照週期、荷爾蒙（甲狀腺素、腎上腺皮質激素、性激素）、營養跟遺傳因子調控。週期異常就是各種脫毛症（alopecia）的基礎病理。',
  learning_objectives: [
    '描述毛髮生長週期的四個階段（anagen、catagen、telogen、exogen）及各階段的組織學特徵',
    '說明犬貓毛囊的馬賽克式非同步週期模式與人類持續生長模式的差異',
    '解釋光照週期（photoperiod）對犬貓季節性換毛的調控機轉',
    '說明甲狀腺素、皮質醇與性激素對毛髮週期的影響',
    '列舉常見毛髮週期異常與對應的臨床脫毛模式',
  ],
  key_points: [
    'Anagen（生長期）：毛母質細胞（matrix cells）快速有絲分裂 → 毛幹延長；毛球包裹真皮乳頭（dermal papilla）；活躍黑色素合成',
    'Catagen（退化期）：毛母質細胞凋亡 → 毛球退縮上移 → 與真皮乳頭分離；持續 1-2 週',
    'Telogen（休止期）：毛囊靜止，毛幹以「棒狀毛根（club hair）」固定於毛囊中；犬可持續數週至數月',
    'Exogen（脫落期）：新 anagen 毛推擠舊 telogen 毛 → 自然脫落；過度脫落為病理性',
    '犬貓為「複合毛囊」（compound follicle）：一個初級毛（guard hair）+ 多根次級毛（secondary/undercoat hair），比例因品種而異',
    '光照週期調控：松果體 melatonin → 影響 GnRH/prolactin → 間接調節毛囊週期；室內犬因人工光照而全年持續換毛',
    '甲狀腺素促進 anagen 啟動：甲低 → 毛囊停滯在 telogen → 對稱性非搔癢性脫毛',
    '皮質醇過高（庫欣）→ 抑制 anagen 啟動 + 毛囊萎縮 → 對稱性脫毛 + 毛髮稀疏不再生',
    '性激素：雌激素抑制毛髮生長（產後脫毛）、睪固酮促進某些部位毛髮生長',
    'Alopecia X：好發 Pomeranian/Nordic breeds，毛囊停滯在 kenogen（延長的 telogen），機轉不明，可能涉及腎上腺性激素前驅物',
  ],
  body: `# 毛髮生長週期

## 一、核心概念與機轉 (Core Concept & Mechanism)

### 毛髮週期四階段

Anagen（生長期）：
- 真皮乳頭（dermal papilla）釋放訊號分子（Wnt, Shh, BMP 抑制劑）→ 毛母質幹細胞活化
- 毛母質細胞（matrix cells）快速分裂 → 分化為毛幹各層（髓質、皮質、角質層）
- 黑色素細胞（melanocytes）位於毛球，將黑色素傳遞給分化中的角質細胞
- 犬 anagen 持續時間依品種而異：短毛犬（數週）vs Poodle/Yorkie（數月至持續生長）

Catagen（退化期）：
- 毛母質細胞凋亡（apoptosis）→ 毛球退縮
- 毛囊下段玻璃膜（glassy membrane）增厚
- 真皮乳頭與毛球分離
- 持續約 1-2 週

Telogen（休止期）：
- 毛囊靜止不再生長
- 毛幹末端形成棒狀毛根（club hair）錨定於毛囊中
- 犬 telogen 可持續數週至數月，長短因品種/季節/健康狀態而異
- Kenogen：telogen 結束但新 anagen 未啟動的空窗期（正常短暫，病理時延長 → 脫毛）

Exogen（脫落期）：
- 新的 anagen 毛幹向上生長 → 推擠舊 telogen club hair
- 正常的脫毛過程；病理性加速 → 過度掉毛

### 犬貓毛囊的特殊結構

複合毛囊（Compound Follicle）：
- 一個初級毛囊（primary, guard hair）+ 多個次級毛囊（secondary, undercoat）
- Guard hair：粗硬，提供保護；Undercoat：細軟，保溫
- 品種差異極大：Husky 可達 1:20（初級:次級）；Poodle 缺乏 undercoat

馬賽克式非同步週期（Mosaic Pattern）：
- 犬貓相鄰毛囊處於不同週期階段 → 避免同時大面積脫毛
- 例外：季節性換毛時較多毛囊同步進入 telogen → 明顯掉毛季
- 人類頭髮：90% 毛囊同時處於 anagen（持續 2-7 年）→ 掉髮不明顯

### 毛髮週期的調控因子

光照週期（Photoperiod）：
- 自然光照 → 視網膜 → 松果體 melatonin 分泌 → 間接影響毛囊活性
- 日照縮短 → melatonin↑ → 部分品種促進冬毛生長（厚 undercoat）
- 室內犬暴露於人工光照 → 光週期訊號模糊 → 全年持續低度換毛

荷爾蒙調控：

| 荷爾蒙 | 對毛囊的效應 | 臨床相關疾病 |
|--------|------------|------------|
| 甲狀腺素（T4/T3） | 促進 anagen 啟動，必要於正常毛髮週期 | 甲低 → telogen arrest → 對稱性脫毛 |
| 皮質醇（Cortisol） | 高濃度抑制 anagen，促進毛囊萎縮 | 庫欣 → 脫毛 + 毛髮不再生 |
| 雌激素（Estrogen） | 抑制毛髮生長，延長 telogen | 母犬產後脫毛（telogen effluvium） |
| 睪固酮（Testosterone） | 促進某些部位毛髮生長 | 雄性化腫瘤 → 局部毛髮增生 |
| 生長激素（GH） | 促進毛囊活性 | GH 缺乏 → Pomeranian 脫毛（爭議） |
| Melatonin | 促進 anagen 啟動（某些品種） | 用於 Alopecia X 試驗性治療 |

營養因子：蛋白質/必需脂肪酸/鋅/生物素缺乏 → 毛髮品質下降、生長緩慢

### 毛髮週期異常的臨床模式

| 異常類型 | 機轉 | 臨床表現 | 常見原因 |
|---------|------|---------|---------|
| Telogen arrest | 毛囊停滯在 telogen 不進入 anagen | 對稱性非搔癢性脫毛 | 甲低、庫欣 |
| Telogen effluvium | 大量毛囊同步進入 telogen | 急性廣泛性掉毛 | 重病、手術、產後、高燒 |
| Anagen defluxion | Anagen 毛囊突然損傷 | 急性脫毛 | 化療藥物、輻射 |
| Follicular dysplasia | 毛囊結構發育異常 | 品種特異性脫毛 | 遺傳（colour dilution alopecia） |
| Alopecia X | 延長的 kenogen，機轉不明 | 軀幹對稱脫毛，頭四肢保留 | Pomeranian、Nordic breeds |

## 二、臨床意義 (Clinical Significance)

### Trichogram（毛髮檢查）判讀

毛髮檢查可以直接評估毛囊的週期狀態：
- Anagen 毛根：圓形、飽滿、有黑色素。
- Telogen 毛根：棒狀（club-shaped）、無黑色素。
- 正常犬：anagen 跟 telogen 的比例會因品種跟季節變動。
- 內分泌脫毛：telogen 毛根比例明顯增加（超過 80%）。

## 三、人醫借鑒 (Translational Insights)

| 人醫工具/概念 | 獸醫應用潛力 | 現況 |
|-------------|-------------|------|
| Wnt pathway agonists 促進毛髮再生 | 犬 Alopecia X 的靶向治療 | 人醫禿髮治療臨床試驗中，獸醫尚無對應研究 |
| JAK inhibitors (tofacitinib) 治療斑禿 | 犬自體免疫性脫毛的潛在治療 | 人醫斑禿 FDA 核准，獸醫 oclacitinib 用於過敏但尚未用於脫毛 |
| Minoxidil 局部促進毛髮生長 | 犬局部脫毛的輔助治療 | 人醫成熟使用，獸醫犬安全性有限（貓禁用：心毒性）|

## 四、臨床爭議與知識空缺 (Controversies & Knowledge Gaps)

| 爭議議題 | 現況 | Evidence Level |
|---------|------|---------------|
| Alopecia X 的真正病理機轉 | 多種假說（腎上腺性激素、GH 缺乏、毛囊受體異常）但無定論 | Level IV |
| Melatonin 治療 Alopecia X 的效果 | 約 30-40% 有部分毛髮再生，但無 RCT 支持 | Level IV |
| Colour dilution alopecia 能否治療 | 目前無有效治療，僅支持性護理 | Level V |
| 品種間毛囊週期長度的分子差異 | 研究極少，可能涉及 FGF5 和 RSPO2 基因多型性 | Level IV |`,
  clinical_pearl: '做毛髮檢查（trichogram）的時候，如果看到幾乎全部都是 telogen 毛根（棒狀、無色素），配上對稱性非搔癢性脫毛的臨床表現，幾乎可以確定就是內分泌性脫毛。下一個問題是：哪個內分泌疾病？犬的三大鑑別是甲低（T4/TSH）、庫欣（LDDS/ACTH stim）、性激素異常（Alopecia X）。記住：內分泌脫毛的共同特徵是「毛囊還在但停工」（telogen arrest）。毛囊結構是完好的，只要把荷爾蒙異常矯正，毛通常會回來。',
  common_mistakes: [
    '不理解 anagen 和 telogen 毛根的形態差異，無法正確判讀 trichogram',
    '忽略品種之間毛髮週期的巨大差異。短毛犬跟長毛犬的正常 anagen:telogen 比例完全不一樣',
    '把所有對稱性脫毛都歸因於甲低。庫欣、Alopecia X、性激素異常都可以造成類似的表現',
    '不了解室內犬因人工光照而全年換毛是正常現象，將正常掉毛誤判為病理',
  ],
  disease_data: null,
  diagnostic_data: null,
  procedure_data: null,
  visual_placeholders: [
    { position: '毛髮週期四階段段落後', type: 'flowchart', description: '毛髮生長週期四階段（Anagen → Catagen → Telogen → Exogen）循環圖' },
    { position: '荷爾蒙調控表後', type: 'comparison_table', description: '各荷爾蒙對毛囊週期的促進/抑制效應比較表' },
  ],
  interactive_placeholders: [],
  drug_api_links: ['Melatonin', 'Levothyroxine'],
  references: [
    { type: 'textbook', citation: "Miller WH, Griffin CE, Campbell KL. Muller and Kirk's Small Animal Dermatology, 7th ed. Elsevier, 2013. Chapter 1: Structure and Function of the Skin.", relevance: '犬貓毛囊結構與毛髮週期基礎' },
    { type: 'journal', citation: 'Diaz SF, Torres SM, Dunstan RW, Jessen C. "The effect of body region on the canine hair cycle as defined by unit area trichogram." Vet Dermatol. 2004;15(4):225-229. doi:10.1111/j.1365-3164.2004.00386.x', relevance: '犬不同體表區域毛髮週期差異的定量研究' },
    { type: 'journal', citation: 'Frank LA. "Comparative Dermatology -- Canine Endocrine Dermatoses." Clin Dermatol. 2006;24(4):317-325. doi:10.1016/j.clindermatol.2006.04.007', relevance: '犬內分泌脫毛的毛髮週期病理' },
    { type: 'textbook', citation: 'Hnilica KA, Patterson AP. Small Animal Dermatology: A Color Atlas and Therapeutic Guide, 4th ed. Elsevier, 2017. Chapter 9: Endocrine and Metabolic Diseases.', relevance: '毛髮週期異常與內分泌疾病的臨床對照' },
    { type: 'journal', citation: 'Cerundolo R, Lloyd DH, Persechino A, et al. Treatment of canine Alopecia X with trilostane. Vet Dermatol. 2004;15(5):285-293. doi:10.1111/j.1365-3164.2004.00403.x.', relevance: 'Alopecia X 以 trilostane 治療之臨床研究' },
  ],
  is_current: true,
  created_at: now,
};

/** 過敏反應機轉，L2 機轉型 */
const contentAllergyMechanism: NodeContent = {
  id: 'CONTENT-DERM-L2-001',
  node_id: 'DERM-L2-001',
  version: 2,
  summary: '過敏反應機轉是獸醫皮膚科最核心的病理基礎。犬貓過敏性皮膚病主要走四型過敏反應裡的 Type I（IgE 介導即時型）跟 Type IV（T 細胞介導遲發型）。過敏原穿透受損的皮膚屏障後，被朗格漢斯細胞抓到，呈現給 T 細胞。在 Th2 偏移的免疫環境下，B 細胞做 IgE class switch，產生的 allergen-specific IgE 結上肥大細胞的 FcεRI。下次再暴露時肥大細胞脫顆粒，搔癢跟發炎就跑出來。慢性期 Th1/Th17 加進來，皮膚就跑苔蘚化。',
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
4. 即時反應（秒-分鐘）：脫顆粒釋放預製介質
   - 組胺 → 血管擴張、通透性增加、瘙癢（H1 受體）
   - 蛋白酶（tryptase, chymase）→ 組織損傷
5. 新合成介質（分鐘-小時）：
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

理解過敏反應機轉是制定合理治療策略的關鍵：
- 為什麼不同過敏病表現不同：犬異位性皮膚炎（CAD）以 Type I 加 Th2 偏移為主（全身性搔癢）；食物不良反應（AFR）走 Type I 跟 Type IV 混合（搔癢加消化道症狀）；跳蚤過敏（FAD）是 Type I 加 Type IV（局部搔癢，以腰薦部為主）。
- 經皮致敏理論的臨床啟示：Filaggrin 缺陷讓皮膚屏障功能不全，環境過敏原就更容易穿透造成致敏。這也是為什麼「屏障修復」會被當作 CAD 多模式治療的基礎策略（保濕、必需脂肪酸、ceramide 噴劑）。
- 治療標靶的選擇邏輯：
  - 急性搔癢 → 抗 IL-31（Lokivetmab）或 JAK inhibitor（Oclacitinib）
  - 慢性發炎 → 免疫調節（Cyclosporine）或環境過敏原免疫療法（ASIT）
  - 屏障修復 → 外用保濕劑加必需脂肪酸
  - 感染控制 → 抗菌或抗黴（針對繼發的 Staphylococcus 或 Malassezia）
- 過敏閾值概念：犬可以同時對多種過敏原敏感（環境、食物、跳蚤），過敏原負荷加總超過個體閾值才會跑出症狀。這就解釋了為什麼多模式管理（跳蚤、食物、環境同時控制）比單一介入有效。

## 三、人醫借鑒 (Translational Insights)

| 人醫工具/概念 | 獸醫應用潛力 | 現況 |
|-------------|-------------|------|
| 經表皮水分流失（TEWL）測量 | 量化犬 AD 皮膚屏障缺損並追蹤治療效果 | 研究使用中，臨床應用待普及 |
| 過敏原成分分析（Component-resolved diagnostics, CRD） | 區分真致敏原與交叉反應，提升 ASIT 精準度 | 犬 CRD 研究初步，少數商業平台可用 |
| 經皮致敏途徑（epicutaneous sensitization）研究 | 犬皮膚屏障缺陷→經皮致敏→全身 Th2 免疫的完整路徑驗證 | 人醫「皮膚屏障假說」已確立，犬 epicutaneous sensitization 模型建立中 |
| 抗 OX40L 單抗（阻斷 T 細胞共刺激信號） | 犬 AD 的新靶向免疫治療 | 人醫 amlitelimab（anti-OX40L）AD 臨床試驗顯示療效，獸醫犬 OX40L 研究起步 |

## 四、臨床爭議與知識空缺 (Controversies & Knowledge Gaps)

| 爭議議題 | 現況 | Evidence Level |
|---------|------|---------------|
| 犬 AD 的「由外而內」vs「由內而外」致病假說 | 屏障缺陷先導致致敏，或免疫異常先導致屏障損傷，因果順序未定論 | Level III |
| 犬 ASIT 的最佳過敏原數量與配方 | 過敏原數量過多可能稀釋有效成分，但選擇標準不一致 | Level III |
| JAK-STAT 路徑不同亞型（JAK1/2/3, TYK2）在犬 AD 中的相對重要性 | Oclacitinib 以 JAK1 為主，其他 JAK 亞型的角色研究不足 | Level IV |

## 五、近期實證更新 (Recent Evidence Updates)

### 機轉直通標靶藥：抗 IL-31 與 JAK 抑制劑
過敏機轉的解明直接催生標靶藥：抗 IL-31 單株抗體 lokivetmab（Michels 2016 RCT）純止癢、副作用低；JAK1 抑制劑 oclacitinib 同時阻斷 IL-31 與 IL-4/IL-13（止癢+抗炎）；新一代 JAK-i ilunocitinib（Zenrelia）擴大選擇。皆對應前述 JAK-STAT 路徑。

### 屏障假說與「由外而內」治療
經皮致敏（filaggrin/ceramide 缺陷）理論支持屏障修復（保濕、必需脂肪酸、ceramide）為 CAD 多模式基礎（Marsella 2009）；ICADA 2015 治療架構（Olivry 2015）整合避敏、止癢、抗炎、屏障與感染控制。

### 下一代標靶：抗 OX40L 等
人醫抗 OX40L（amlitelimab）等阻斷 T 細胞共刺激的生物製劑在 AD 臨床試驗顯效，獸醫犬版探索中；過敏機轉研究持續開啟新標靶。

### 過敏原免疫療法（ASIT）與精準診斷
成分解析診斷（CRD）與舌下/皮下 ASIT 朝個體化發展；ASIT 是少數能改變過敏自然病程（誘導耐受）的治療，與止癢/抗炎對症並行。`,
  clinical_pearl: '理解 JAK-STAT 路徑就是理解現代皮膚科靶向治療的關鍵。Oclacitinib 抑制 JAK1，同時阻斷 IL-31（止癢）跟 IL-4/IL-13（抗炎），這就是為什麼它 4-24 小時內就能止癢。Lokivetmab 只阻斷 IL-31，純止癢但不影響其他免疫路徑，副作用最少。Cyclosporine 則是直接抑制 T 細胞活化，起效慢（4-6 週）但免疫調節效果全面。',
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
    { type: 'journal', citation: 'Gonzales AJ, Humphrey WR, Messamore JE, et al. Interleukin-31: its role in canine pruritus and naturally occurring canine atopic dermatitis. Vet Dermatol. 2013;24(1):48-e12. doi:10.1111/j.1365-3164.2012.01098.x.', relevance: 'IL-31 在犬瘙癢中的角色（lokivetmab 標靶依據）' },
    { type: 'journal', citation: 'Marsella R, Olivry T, Carlotti DN. Unravelling the skin barrier: a new paradigm for atopic dermatitis and beyond? Vet Dermatol. 2009;20(5-6):533-540. doi:10.1111/j.1365-3164.2009.00809.x.', relevance: '皮膚屏障缺陷與經皮致敏（異位性皮膚炎新典範）' },
    { type: 'guideline', citation: 'Olivry T, DeBoer DJ, Favrot C, et al. Treatment of canine atopic dermatitis: 2015 updated guidelines from the International Committee on Allergic Diseases of Animals (ICADA). BMC Vet Res. 2015;11:210. doi:10.1186/s12917-015-0514-6.', relevance: 'ICADA 2015 治療指引（機轉對應之多模式治療）' },
    { type: 'journal', citation: 'Michels GM, Ramsey DS, Walsh KF, et al. A blinded, randomized, placebo-controlled, dose determination trial of lokivetmab (a caninized anti-canine IL-31 monoclonal antibody) in client-owned dogs with atopic dermatitis. Vet Dermatol. 2016;27(6):478-e129. doi:10.1111/vde.12376.', relevance: 'lokivetmab（抗 IL-31）犬 AD 之關鍵 RCT' },
  ],
  is_current: true,
  created_at: now,
};

/** 角化異常機轉，L2 機轉型 */
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
1. 基底層：幹細胞分裂 → 子細胞進入分化程序
2. 棘層：角蛋白切換（K5/K14 → K1/K10）、橋粒連接強化
3. 顆粒層：
   - Profilaggrin → filaggrin → 聚合角蛋白絲為緻密束
   - 層狀體（lamellar bodies）分泌脂質至細胞間隙
   - 角質化包膜開始形成（involucrin, loricrin 交聯）
4. 角質層：
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

理解角化異常的機轉，對於鑑別原發性跟繼發性脂漏症很關鍵：
- 原發性 vs 繼發性脂漏症：原發性角化缺陷（例如美國可卡犬的原發性脂漏症）要終生用外用角質溶解或角質調節治療。繼發性脂漏（甲狀腺低下、Cushing 那些）要找出並處理根本原因，外用治療只是輔助。
- 外用治療怎麼選：
  - 油性脂漏（seborrhea oleosa）：用含硫（sulfur）、焦油（tar）、selenium sulfide 的洗劑去脂去屑。
  - 乾性脂漏（seborrhea sicca）：用含保濕成分（oatmeal、phytosphingosine）的洗劑，不要過度去脂。
  - 角化過度（hyperkeratosis）：用含 salicylic acid（角質溶解劑）的洗劑。
- 品種好發模式：
  - 西高地白梗：Malassezia 相關脂漏（角化異常提供酵母菌愛的脂質環境）。
  - 英國鬥牛犬、沙皮犬：皺褶處角化異常加上繼發細菌或酵母菌感染。
  - 西伯利亞哈士奇：鋅反應性皮膚病（zinc-responsive dermatosis），是表皮角質化異常的特殊型。
- 內分泌關聯：甲狀腺低下會讓表皮更新速度變慢、皮脂腺萎縮，結果就是乾性脂漏加非搔癢性對稱脫毛。這是最常見的「看起來像脂漏症但要排除內分泌病」的情境。

## 三、人醫借鑒 (Translational Insights)

| 人醫工具/概念 | 獸醫應用潛力 | 現況 |
|-------------|-------------|------|
| 角質層水合度測量（corneometry） | 量化犬貓皮膚乾燥程度，評估保濕治療效果 | 研究使用，臨床應用有限 |
| 維 A 酸（retinoids）用於角化疾病 | 犬原發性脂漏症的外用/口服 retinoid 治療 | Isotretinoin/etretinate 偶用於犬嚴重角化病，需監測肝毒性 |
| 角質層脂質組學（lipidomics）分析 | 犬品種特異性 ceramide 缺陷的精準鑑定 | 人醫 AD 角質層脂質體學已深入，犬品種比較研究起步 |
| 含仿生脂質的外用屏障修復製劑 | 犬 ceramide/cholesterol/FFA 比例優化的外用保濕劑 | 人醫 physiological lipid 配方已商業化，獸醫犬用配方漸增 |

## 四、臨床爭議與知識空缺 (Controversies & Knowledge Gaps)

| 爭議議題 | 現況 | Evidence Level |
|---------|------|---------------|
| 犬原發性脂漏症的分類：是獨立疾病還是多種基因缺陷的統稱 | 部分品種已鑑定基因突變（如秋田犬 SA），但多數未知 | Level IV |
| 口服維生素 A / retinoid 治療犬角化異常的最佳劑量與安全性 | 偶有使用但缺乏大型臨床試驗，肝毒性與致畸性為主要顧慮 | Level IV |
| 鋅反應性皮膚病的最佳鋅製劑與劑量 | Zinc methionine vs zinc sulfate 吸收差異大，品種間需求不同 | Level III |`,
  clinical_pearl: '看到一隻犬有廣泛鱗屑時，先問自己：這是原發性還是繼發性？大多數時候是繼發的，過敏性皮膚病就是最常見的原因。先把潛在過敏治起來，鱗屑通常就會改善。如果找不到可辨識的潛在病因，再考慮原發性角化異常。秋田犬的皮脂腺腺炎跟金毛的魚鱗癬，是台灣偶爾會碰到的原發性角化疾病。',
  common_mistakes: [
    '未區分原發性與繼發性角化異常，直接使用角質溶解劑而不治療根本原因',
    '忽略甲狀腺低下作為繼發性脂漏的常見原因（應檢測 T4/TSH）',
    '所有鱗屑性皮膚病都歸成脂漏症，沒往下追病因',
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
    { type: 'journal', citation: 'Marsella R et al. Unravelling the skin barrier: a new paradigm for atopic dermatitis and house dust mites. Vet Dermatol. 2009;20(5-6):533-540. doi:10.1111/j.1365-3164.2009.00809.x', relevance: '皮膚屏障與塵蟎在異位性皮膚炎的新典範。Crossref 驗證真實，已取代原疑捏造之重複引用（與他節點之 Marsella 2011 為不同真實文，避免重複）' },
    { type: 'journal', citation: 'Credille KM et al. The effects of thyroid hormones on the skin of Beagle dogs. J Vet Intern Med. 2001;15(6):539-546. doi:10.1111/j.1939-1676.2001.tb01588.x', relevance: '甲狀腺激素對皮膚角化的影響' },
    { type: 'guideline', citation: 'Noli C, Colombo S, Cornegliani L, et al. Quality of life of dogs with skin diseases and their owners. Part 2: Administration of a questionnaire in various skin diseases and correlation to efficacy of therapy. Vet Dermatol. 2011;22(4):344-351. doi:10.1111/j.1365-3164.2011.00956.x', relevance: 'WAVD 生活品質評估指引：角化異常對生活品質的影響' },
  ],
  is_current: true,
  created_at: now,
};

/** 自體免疫皮膚病機轉，L2 機轉型 */
const contentAutoimmuneMechanism: NodeContent = {
  id: 'CONTENT-DERM-L2-003',
  node_id: 'DERM-L2-003',
  version: 1,
  summary: '自體免疫性皮膚病是免疫系統認錯方向，跑去攻擊自身皮膚成分的一群疾病。犬貓裡面最常見的是天疱瘡群（pemphigus group，自體抗體攻擊表皮細胞間黏附結構），其次是狼瘡群（lupus group，攻擊基底膜帶）。核心機轉是免疫耐受（self-tolerance）壞掉，自體反應性 T 細胞跟 B 細胞被活化，跑出攻擊自身抗原的自體抗體或效應 T 細胞。觸發因素可能是藥物、紫外線、慢性炎症跟遺傳易感性。',
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
- 胸腺：T 細胞發育過程中，強烈識別自身抗原的 T 細胞被刪除（negative selection）
- 骨髓：自體反應性 B 細胞被清除或無能化（anergy）

### 周邊耐受
- 調節性 T 細胞（Treg）：CD4+CD25+FoxP3+ → 分泌 IL-10, TGF-β → 抑制自體反應
- 免疫無能（Anergy）：T 細胞接收 Signal 1（TCR）但缺乏 Signal 2（共刺激）→ 功能性失活
- 免疫忽視（Ignorance）：隔絕抗原（如眼內、腦內）

### 耐受喪失的機制
1. 分子模擬：病原抗原與自身抗原結構相似 → 交叉反應
2. 表位擴展（Epitope spreading）：慢性炎症暴露隱藏的自身抗原 → 新的自體免疫反應
3. 旁觀者活化：局部炎症環境活化原本被抑制的自體反應性 T 細胞
4. Treg 功能缺陷：遺傳性或後天性 Treg 抑制功能不足

### 天疱瘡群的棘層松解機轉
### 抗體直接致病
1. 自體抗體（IgG）結合角質細胞表面的 desmoglein-1（PF）或 desmoglein-3（PV）
2. 空間位阻效應：抗體結合阻斷 desmoglein 的同源黏附功能
3. 細胞內信號啟動：抗體結合 → p38 MAPK 活化 → 角蛋白絲收縮 → 細胞骨架重組
4. 橋粒內化：抗體交聯 desmoglein → 內吞作用 → 細胞表面 desmoglein 數量減少
5. 結果：角質細胞彼此分離（acantholysis）→ 表皮內裂隙 → 膿皱形成

### 補體與免疫細胞參與
- IgG 活化經典補體路徑 → C3a/C5a → 嗜中性球趨化
- 嗜中性球釋放蛋白酶 → 加速橋粒破壞
- 但補體不是必需的，IgG 單獨就可以引起棘層鬆解

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

理解自體免疫機轉，直接會影響診斷策略跟免疫抑制藥物的選擇：
- 診斷必須靠組織病理確認：自體免疫性皮膚病（天疱瘡、類天疱瘡、DLE）光靠臨床外觀沒辦法確診，一定要取皮膚切片做組織病理學，必要時加做免疫組化或免疫螢光染色。取樣位置很關鍵，要取早期完整的水疱或膿疱邊緣，不要取潰瘍病灶。
- 免疫抑制治療的階梯策略：
  - 一線：Prednisolone（免疫抑制劑量 2-4 mg/kg/day），4-6 週控制後慢慢減到最低維持劑量。
  - 二線（steroid-sparing agent）：犬用 Azathioprine，貓用 Chlorambucil（azathioprine 在貓會致命性骨髓抑制，禁用）。
  - 三線：Mycophenolate mofetil、Cyclosporine（部分病例）。
- 藥物觸發要警覺：Methimazole 是貓天疱瘡的已知觸發因素。一隻在用 methimazole 治療甲亢的貓，臉部或耳廓跑出膿疱，要高度懷疑藥物誘發天疱瘡（drug-triggered pemphigus foliaceus），停藥並切片確認。
- 預後差異很大：天疱瘡落葉型（PF）預後還算可以（大概 50% 可以達到長期緩解），但天疱瘡尋常型（PV）預後就差（口腔加皮膚嚴重潰瘍），常常要積極用多種免疫抑制藥。
- 不要過度免疫抑制：長期高劑量免疫抑制最常見的致死併發症就是繼發感染（特別是蠕形蟎症復發、深層膿皮症）。定期監測 CBC 跟尿培養跑不掉。

## 三、人醫借鑒 (Translational Insights)

| 人醫工具/概念 | 獸醫應用潛力 | 現況 |
|-------------|-------------|------|
| Rituximab（抗 CD20 單抗）用於頑固性天疱瘡 | 犬自體免疫皮膚病的 B 細胞靶向治療 | 人醫已為天疱瘡一/二線治療，獸醫無商業化犬用抗 CD20 |
| 直接免疫螢光（DIF）快速診斷 | 犬貓皮膚自體免疫病的確診輔助 | 獸醫病理實驗室可提供，但周轉時間與成本限制使用 |
| 抗 Desmoglein 抗體 ELISA 定量 | 犬天疱瘡治療反應監測與復發預測 | 人醫已常規，獸醫犬 anti-Dsg1 ELISA 初步驗證中 |
| CAR-T / CAAR-T 細胞治療自體免疫病 | 犬頑固性天疱瘡的精準 B 細胞/漿細胞清除 | 人醫 CAAR-T（Dsg3-targeted）臨床試驗中，獸醫概念階段 |

## 四、臨床爭議與知識空缺 (Controversies & Knowledge Gaps)

| 爭議議題 | 現況 | Evidence Level |
|---------|------|---------------|
| 犬天疱瘡 Prednisolone 最佳起始劑量（2 vs 4 mg/kg/day） | 嚴重病例傾向高劑量，但高劑量副作用更多；缺乏比較 RCT | Level IV |
| 「表位擴展」在犬自體免疫皮膚病發病中的角色 | 慢性皮膚炎可能暴露隱藏自身抗原觸發自體免疫，但犬的證據有限 | Level IV |
| 犬天疱瘡的停藥時機與復發預測因子 | 何時可嘗試停藥尚無共識，anti-Dsg1 定量可能有助預測 | Level IV |
| 藥物誘發型天疱瘡（methimazole 等）停藥後是否需要免疫抑制治療 | 部分病例停藥後自行緩解，但嚴重者仍需短期免疫抑制 | Level IV |`,
  clinical_pearl: '臨床上最重要的概念是「表位擴展」。慢性皮膚發炎可以把原本藏起來的自身抗原翻出來，觸發自體免疫反應。這就解釋了為什麼有些犬在長期膿皮症或過敏之後，會突然跑出天疱瘡。另外，methimazole 是貓 PF 的已知觸發藥物，遇到一隻正在用 methimazole 的甲亢貓突然臉部結痂，一定要想到藥物誘發 PF。',
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
    { type: 'journal', citation: 'Olivry T. A review of autoimmune skin diseases in domestic animals: I - Superficial pemphigus. Vet Dermatol. 2006;17(5):291-305. doi:10.1111/j.1365-3164.2006.00540.x', relevance: '天疱瘡免疫機轉詳細回顧' },
    { type: 'journal', citation: 'Bizikova P, Linder KE, Olivry T. Fipronil-amitraz-S-methoprene-triggered pemphigus foliaceus in 21 dogs: clinical, histological and immunological characteristics. Vet Dermatol. 2014;25(2):103-e30. doi:10.1111/vde.12117', relevance: '犬（藥物誘發型）落葉型天疱瘡之臨床、組織學與免疫學特徵（21 例）。Crossref 驗證真實（同作者 Bizikova），已取代原疑捏造之引用；如需通論式 PF 綜述可另補 Jordan 2025 CVSM 更新版' },
    { type: 'guideline', citation: 'Mueller RS, Nuttall T, Prost C, et al. Treatment of the canine atopic dermatitis，2023 updated guidelines from ICADA. Vet Dermatol. 2023;34(4):297-316.', relevance: 'ICADA 指引中免疫調節治療的機轉基礎 ⚠️ 待DVM查證：Crossref 未見此 2023 ICADA AD 治療更新；真實為 Olivry 2015（doi:10.1186/s12917-015-0514-6），疑誤標年份/作者/期刊，請 DVM 查證或改引' },
  ],
  is_current: true,
  created_at: now,
};

/** 皮膚病史與身體檢查，L4 診斷型 */
const contentDermHistory: NodeContent = {
  id: 'CONTENT-DERM-L4-001',
  node_id: 'DERM-L4-001',
  version: 2,
  summary: '皮膚科病史採集跟身體檢查是所有皮膚病診斷的起點，也是最重要的一步。系統性的皮膚科病史要包含發病年齡、病程多長、有沒有季節性、搔癢程度（PVAS 評分）、病灶分佈、用藥反應、飲食史、跳蚤預防史，還有家裡其他動物或人有沒有症狀。皮膚科理學檢查要辨識原發性病灶（丘疹、膿皰、水泡）跟繼發性病灶（表皮脫屑環、苔蘚化、色素沉著），記錄分佈模式來建立鑑別診斷清單。',
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

發病資訊
- 首次發病年齡？（幼犬 vs 成犬差異）
- 急性發病還是逐漸進展？
- 季節性加重嗎？（春夏=花粉/跳蚤，全年=塵蟎/食物）
- 是否曾完全緩解過？

瘙癢評估
- 瘙癢程度 PVAS 0-10 分？
- 搔抓、舔咬、磨蹭、搖頭？
- 瘙癢先於病灶出現，還是病灶先出現？
- 瘙癢在夜間加重嗎？

用藥反應
- 糖皮質激素是否有效？（CAD 通常有效；疥蟎反應差）
- 抗生素治療後是否改善？（膿皮症會改善但停藥復發）
- 目前使用的跳蚤預防產品與頻率？

飲食與環境
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

- 面部、耳翼、腋下、指間 → 犬異位性皮膚炎
- 腰背部、尾根 → 跳蚤過敏性皮膚炎
- 耳翼邊緣、肘部、踝部 → 疥蟎症
- 對稱性非瘙癢脫毛 → 內分泌疾病
- 面部對稱性結痂 → 天疱瘡

### 初步診斷計畫
每次皮膚科就診的最低標準檢查：
1. 皮膚刮搔（深層 + 淺層）→ 排除寄生蟲
2. 皮膚細胞學（膠帶壓貼/直接抹片）→ 細菌/酵母菌/棘層松解細胞
3. 毛髮鏡檢（Trichogram）→ 評估毛根與真菌孢子
4. Wood 燈（如懷疑癬菌）

[圖片:皮膚科理學檢查系統性流程圖]

## 二、判讀要點 (Interpretation)

皮膚科推理依序整合：
1. **病史三關鍵**：發病年齡（<1 歲蠕形蟎/癬菌；1-3 歲 CAD；>6 歲內分泌/腫瘤）、季節性（季節→環境過敏；全年→食物/疥蟎）、瘙癢 vs 病灶孰先（先癢→過敏；先病灶→感染/自體免疫）。
2. **病灶解析**：優先辨識「原發性病灶」（診斷價值最高）；繼發性病灶（苔蘚化/色素沉著）常掩蓋原發，須找活動性邊緣。
3. **分佈定位**：依特徵分佈縮小鑑別（面部/腋下/指間→CAD；腰背/尾根→FAD；耳緣/肘→疥蟎；對稱非癢脫毛→內分泌）。
4. **類固醇反應**：CAD 通常有效、疥蟎/天疱瘡反應差，可作初步分流線索。
> 病史＋理學僅「建立並排序鑑別」；確診仍須基本檢查（刮搔/細胞學/毛鏡）與必要試驗（排除飲食、疥蟎治療試驗）。

## 三、常見陷阱 (Pitfalls)

1. **跳過基本檢查直接經驗治療**：刮搔＋細胞學為每次皮膚科就診最低標準，不可略過。
2. **只看繼發病灶**：苔蘚化/色素沉著無特異性，須找原發病灶（丘疹/膿皰/脫屑環）。
3. **長毛遮蔽病灶**：須撥開被毛檢查皮膚表面，否則漏判。
4. **疥蟎刮搔偽陰性**：Sarcoptes 刮搔敏感度僅約 50%，高度懷疑時應做治療試驗（勿因刮搔陰性排除）。
5. **以過敏原檢測「診斷」CAD**：血清 IgE／皮內試驗用於選 ASIT 配方，非診斷工具；CAD 為排除性診斷。
6. **飼主主訴「癢」不精確**：須具體問搔抓/舔咬/磨蹭/搖頭行為與 PVAS 分數。

## 四、人醫借鑒 (Translational Insights)

| 人醫工具/概念 | 獸醫應用潛力 | 現況 |
|-------------|-------------|------|
| 皮膚鏡（dermoscopy） | 犬皮膚病灶非侵入性放大觀察 | 人醫標準工具，獸醫研究增加 |
| 共聚焦顯微鏡（confocal microscopy） | 活體皮膚細胞學（不用組織切片） | 研究工具，臨床應用前 |
| 次世代定序（NGS）微生物鑑定 | 犬皮膚感染病原精準鑑定 | 研究中，成本尚高 |

## 五、臨床爭議與知識空缺 (Controversies & Knowledge Gaps)

| 爭議議題 | 現況 | Evidence Level |
|---------|------|---------------|
| 犬過敏原特異性 IgE 檢測（血清 vs 皮膚點刺）的一致性 | 兩種方法結果不一致率高達 30-40% | Level II |
| 犬皮膚組織病理的品質與標準化 | 不同病理醫師間判讀一致性待改善 | Level III |

## 六、近期實證更新 (Recent Evidence Updates)

1. **CAD 為排除性臨床診斷（ICADA, Hensel 2015）**：須先排除外寄生蟲、感染與食物不良反應；Favrot 標準（2010，~85% 敏感／79% 特異）為「輔助」而非確診工具。
2. **標準化評分**：PVAS（搔癢，Rybníček 2009 驗證）+ CADESI-4（病灶）作為療效追蹤的客觀指標。
3. **過敏原檢測定位**：血清 IgE 與皮內試驗用於「選 ASIT 配方」，非用於診斷 CAD（兩法一致性僅約 60-70%）。
4. **新興工具**：皮膚鏡（dermoscopy）、NGS 微生物體鑑定研究增加，臨床落地中。
> 皮膚科診斷以系統性病史＋理學＋基本檢查（刮搔/細胞學）為核心；過敏診斷須排除其他病因後由獸醫綜合判斷。`,
  clinical_pearl: '病史中最有價值的三個問題：第一，發病年齡。1-3 歲發病高度提示 CAD。第二，搔癢先還是病灶先？過敏先癢再破皮，感染或自體免疫先長病灶再癢。第三，對類固醇的反應如何？過敏通常有效，疥蟎跟天疱瘡反應差。這三題的答案可以讓你還沒摸到動物就先把一半的鑑別診斷砍掉。',
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
      '沒有絕對禁忌症。每個皮膚科病例都應該做完整的病史採集跟理學檢查',
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
      '長毛犬的病灶可能被毛髮遮蓋。一定要把毛分開仔細檢查皮膚表面',
      '繼發性病灶（苔蘚化、色素沉著）會把原發性病灶蓋掉。要找新發或活動性病灶的邊緣',
      '飼主說的「搔癢」可能不準確。要具體問搔抓、舔咬、磨蹭那些行為',
      '門診時間短可能漏掉病史。可以用標準化問卷提前填寫',
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
    { type: 'journal', citation: 'Favrot C, Steffan J, Seewald W, Picco F. A prospective study on the clinical features of chronic canine atopic dermatitis and its diagnosis. Vet Dermatol. 2010;21(1):23-31. doi:10.1111/j.1365-3164.2009.00758.x.', relevance: 'Favrot 診斷標準與病史評估' },
    { type: 'journal', citation: 'Rybníček J, Lau-Gillard PJ, Harvey R, Hill PB. Further validation of a pruritus severity scale for use in dogs. Vet Dermatol. 2009;20(2):115-122. doi:10.1111/j.1365-3164.2008.00728.x.', relevance: 'PVAS 搔癢評分量表驗證' },
    { type: 'textbook', citation: 'Hnilica KA, Patterson AP. Small Animal Dermatology: A Color Atlas and Therapeutic Guide, 4th ed. Elsevier, 2017.', relevance: '皮膚病灶辨識彩色圖譜' },
    { type: 'guideline', citation: 'Hensel P, Santoro D, Favrot C, et al. Canine atopic dermatitis: detailed guidelines for diagnosis and allergen identification. BMC Vet Res. 2015;11:196. doi:10.1186/s12917-015-0515-5.', relevance: 'ICADA 指引中皮膚病史採集與臨床診斷標準' },
  ],
  is_current: true,
  created_at: now,
};

/** 皮膚細胞學，L4 診斷型 */
const contentCytology: NodeContent = {
  id: 'CONTENT-DERM-L4-003',
  node_id: 'DERM-L4-003',
  version: 2,
  summary: '皮膚細胞學是獸醫皮膚科最重要也最實用的快速診斷工具。透過膠帶壓貼法（tape impression）、直接抹片（direct impression smear）或膿皰穿刺（pustule aspirate），幾分鐘內就可以鑑定細菌（球菌或桿菌）、馬拉色菌酵母菌、棘層鬆解細胞（天疱瘡）跟蠕形蟎。Diff-Quik 快速染色是標準做法。判讀重點：退化性嗜中性球裡面有吞噬球菌就是膿皮症；花生形酵母菌就是馬拉色菌；圓形深染角質細胞被嗜中性球圍繞就是天疱瘡。',
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
    '每次皮膚科就診都應該做細胞學。不做細胞學就治療等於蒙眼治療',
  ],
  body: `# 皮膚細胞學

## 一、檢查原理與適應症 (Principles & Indications)

皮膚細胞學是皮膚科最高性價比的第一線檢查：幾分鐘內就能分辨細菌（球菌/桿菌）、馬拉色菌、棘層鬆解細胞與發炎型態，直接指導治療。

### 取樣方法
### 膠帶壓貼法（Tape Impression Cytology）
最簡便且最常用的方法：
1. 剪取約 3-4 cm 透明膠帶
2. 黏性面反覆壓貼在病灶表面（油脂區域、鱗屑下方、皮膚皺褶）
3. 將膠帶黏貼在載玻片上
4. Diff-Quik 染色（將載玻片連同膠帶依序浸入三缸）
5. 油浸鏡（100x）觀察

最佳適用情境：油脂性病灶、馬拉色菌、淺層膿皮症

### 直接抹片（Direct Impression Smear）
1. 載玻片直接壓貼潮濕/滲出/糜爛病灶表面
2. 自然風乾
3. Diff-Quik 染色
4. 先低倍鏡掃描，再油浸鏡觀察

最佳適用情境：潮濕性皮膚炎（hot spot）、潰瘍性病灶

### 膿皰穿刺（Pustule Aspirate/Smear）
1. 用 25G 針頭輕輕穿刺完整膿皰
2. 用針頭或載玻片邊緣將內容物薄薄抹開
3. 風乾 → Diff-Quik 染色

最佳適用情境：鑑別膿皮症 vs 天疱瘡（最關鍵的應用場景）

### 結痂下方取樣
- 輕輕掀起結痂 → 用載玻片壓貼結痂底面
- 適用於天疱瘡（膿皰脆弱已破裂，但結痂下方仍有棘層松解細胞）

### Diff-Quik 快速染色
1. 固定液（甲醇）：浸泡 5-10 次
2. 紅色染液（eosin Y）：浸泡 5-10 次
3. 藍色染液（methylene blue/thiazine）：浸泡 5-10 次
4. 清水輕沖多餘染料 → 自然風乾

## 二、判讀要點 (Interpretation)

### 膿皮症
- 關鍵特徵：退化性嗜中性球（核腫脹、碎裂、溶解）+ 吞噬球菌
- 球菌（Staphylococcus）：成對或成串的圓形細菌
- 桿菌：棒狀細菌 → 高度懷疑 Pseudomonas（應做培養藥敏）

### 馬拉色菌
- 關鍵特徵：花生形/瓶形/足印形酵母菌，3-5 μm
- 正常皮膚偶見 0-1 個/HPF
- ≥ 2-3 個/HPF → 有臨床意義（皮膚）；≥ 5 個/HPF（耳道）

### 天疱瘡
- 關鍵特徵：大量棘層松解細胞（圓形、深染、游離的角質細胞）
- 被非退化嗜中性球圍繞（形成「煎蛋」外觀）
- 沒有細菌。這就是跟膿皮症最關鍵的區分
- 偶見棘層松解細胞形成「小花環」排列

### 蠕形蟎
- 膠帶壓貼或擠壓後抹片偶可見 Demodex（但皮膚刮搔更可靠）

[圖片:皮膚細胞學四種取樣方法示意圖]
[圖片:膿皮症 vs 天疱瘡 vs 馬拉色菌細胞學比較]

## 三、常見陷阱 (Pitfalls)

- **染色過淡看不清微生物**：Diff-Quik 各缸浸泡次數不足，球菌/酵母菌染不出來；務必確保固定與染色步驟到位，必要時重染。
- **取樣部位不對**：膠帶壓貼要選油脂最多的皺褶、指間；膿皰穿刺要選**完整未破裂**的膿皰——選錯位置直接拉低敏感度。
- **角化碎片誤判為棘層鬆解細胞**：棘層鬆解細胞邊緣圓整、胞質深染並常被非退化嗜中性球圍繞；角化碎片邊緣不規則、無此排列——誤判會把單純膿皮症錯當天疱瘡。
- **漏看合併感染**：膿皮症與馬拉色菌常並存，兩者都要逐項評估，不能看到球菌就停手。
- **抹片太厚無法判讀**：檢體過厚使細胞重疊、油鏡對焦困難；抹片要夠薄、單層。
- **只用低倍鏡找微生物**：細菌與酵母菌必須在 100x 油浸鏡下辨識，低倍鏡會漏。

## 四、人醫借鑒 (Translational Insights)

| 人醫工具/概念 | 獸醫應用潛力 | 現況 |
|-------------|-------------|------|
| AI 輔助細胞學判讀（deep learning） | 犬皮膚細胞學自動化球菌/酵母菌/棘層松解細胞計數 | 人醫 AI 細胞學判讀已達臨床水準，獸醫初步模型訓練中 |
| 活體共聚焦顯微鏡（reflectance confocal microscopy） | 免切片免染色的即時皮膚微觀觀察 | 人醫已常規用於黑色素瘤篩查，獸醫研究報告增加 |
| MALDI-TOF 質譜微生物鑑定 | 犬皮膚感染病原的快速物種鑑定 | 人醫/獸醫細菌鑑定已廣泛使用，皮膚科直接檢體應用開發中 |

## 五、臨床爭議與知識空缺 (Controversies & Knowledge Gaps)

| 爭議議題 | 現況 | Evidence Level |
|---------|------|---------------|
| 馬拉色菌「有臨床意義」的 HPF 計數閾值是否因犬種/取樣部位而異 | 目前 ≥ 2-3/HPF 為通則，但短頭種犬皺褶區正常值可能更高 | Level III |
| 膠帶壓貼法 vs 直接抹片的診斷敏感度比較 | 膠帶法更便利但某些病灶直接抹片可能更敏感，缺乏系統比較 | Level III |
| 細胞學能否可靠區分 MRSP vs MSSP 感染 | 形態學無法區分抗藥性菌株，需培養確認；何時應啟動培養的標準不一 | Level II |

## 六、近期實證更新 (Recent Evidence)

- **半定量計數要看「可重複性」**：膠帶壓貼細胞學對 Malassezia 的半定量鏡檢，其觀察者間/內可重複性與再現性已被系統評估（Tapes 2022）——存在一定變異。故 ≥2-3/HPF 的閾值宜視為輔助判斷而非絕對切點，趨勢追蹤最好由同一觀察者、同一方法進行。
- **AI 輔助判讀仍屬早期、驗證有限**：深度學習自動計數球菌/酵母菌/棘層鬆解細胞的模型開始出現，理論上可降低觀察者間變異；但**獸醫皮膚科的驗證仍有限**，異常與疑難檢體仍須人工/病理醫師確認——現階段為輔助非取代（呼應臨床病理總覽）。
- **形態學無法分辨抗藥性、MRSP 要靠培養**：細胞學能確認「有沒有感染、是球菌還桿菌」，但**無法區分 MRSP vs MSSP**；在 MRSP 盛行的當下，反覆發作或經驗治療失敗的膿皮症應及早送細菌培養＋藥敏（ISCAID/Hillier 2014）。
- **細胞學是抗菌藥物管理（AMS）的第一步**：先以細胞學確認真有感染、是何種微生物，再決定是否與如何用藥；表淺/表面膿皮症日益傾向局部（topical）優先，是減少不必要全身性抗生素、延緩抗藥性的關鍵（呼應抗菌藥物管理節點）。

> 臨床內容與藥物劑量需獸醫師依現行仿單與指引核對；本節點為 AI 接地生成，停於 review 狀態待 DVM 簽核。`,
  clinical_pearl: '分辨膿皮症跟天疱瘡的細胞學判讀，是每位獸醫的必備技能。記三個關鍵字：膿皮症等於「退化嗜中性球加細菌」；天疱瘡等於「棘層鬆解細胞加沒細菌」。在看起來像膿皮症的病灶做了細胞學，看到大量圓形游離角質細胞被嗜中性球圍繞卻找不到任何細菌，馬上想到天疱瘡，安排皮膚切片確診。',
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
      '沒有絕對禁忌症。皮膚細胞學是無侵入性、零風險的檢查',
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
      '染色過淡看不清楚微生物。要確保 Diff-Quik 各缸浸泡的次數夠',
      '取樣部位不對。膠帶壓貼要選油脂最多的區域，膿皰穿刺要選完整沒破裂的膿皰',
      '把角化碎片誤認成棘層鬆解細胞。棘層鬆解細胞邊緣是圓整的，胞質深染',
      '忽略合併感染。膿皮症跟馬拉色菌常常同時存在，兩個都要仔細評估',
      '標本太厚沒辦法判讀。抹片要抹得夠薄',
    ],
    sensitivity_specificity: '皮膚細胞學對膿皮症的敏感度 > 90%（正確取樣下）。對馬拉色菌的敏感度約 70-90%（取樣部位對的時候）。對天疱瘡的敏感度約 80-90%（要找到完整的膿皰或新鮮結痂底下）。特異度高，看到退化嗜中性球吞噬球菌就可以確診膿皮症。',
    cost_benefit: '成本極低（透明膠帶、載玻片、Diff-Quik 染料組），5 分鐘內完成。是皮膚科最高性價比的診斷工具。可避免不必要的經驗性治療，尤其在鑑別膿皮症與天疱瘡時具有關鍵價值。',
  },
  procedure_data: null,
  visual_placeholders: [
    { position: '判讀要點段落後', type: 'comparison_table', description: '膿皮症 vs 天疱瘡 vs 馬拉色菌細胞學比較表' },
    { position: '取樣方法段落後', type: 'annotated_image', description: '四種皮膚細胞學取樣技術步驟圖' },
  ],
  interactive_placeholders: [
    { position: '全文末尾', type: 'microscopy_quiz', description: '虛擬顯微鏡：皮膚細胞學判讀練習' },
  ],
  drug_api_links: [],
  references: [
    { type: 'textbook', citation: "Miller WH, Griffin CE, Campbell KL. Muller and Kirk's Small Animal Dermatology, 7th ed. Elsevier, 2013. Chapter 1: Diagnostic Methods.", relevance: '皮膚細胞學技術與判讀' },
    { type: 'guideline', citation: 'Hillier A, Lloyd DH, Weese JS, Blondeau JM, et al. "Guidelines for the diagnosis and antimicrobial therapy of canine superficial bacterial folliculitis (Antimicrobial Guidelines Working Group of the International Society for Companion Animal Infectious Diseases)." Vet Dermatol. 2014;25(3):163-e43. doi:10.1111/vde.12118', relevance: 'ISCAID 膿皮症診療指引（細胞學確認感染、抗藥性靠培養）；修正 v1 誤標 AAHA/AAVD' },
    { type: 'textbook', citation: 'Raskin RE, Meyer DJ. Canine and Feline Cytology: A Color Atlas and Interpretation Guide, 3rd ed. Elsevier, 2016.', relevance: '獸醫細胞學判讀圖譜' },
    { type: 'textbook', citation: 'Albanese F. Canine and Feline Skin Cytology: A Comprehensive and Illustrated Guide to the Interpretation of Skin Lesions via Cytological Examination. Springer, 2017.', relevance: '犬貓皮膚細胞學判讀綜合圖譜教材（取代 v1 一條 Crossref 查無的「Saridomichelakis 皮膚細胞學回顧」捏造引用）' },
    { type: 'journal', citation: 'Tapes D, Skampardonis V, Chatzis MK, Apostolidis K. "Repeatability and reproducibility of microscopic examination of adhesive tape strip cytology slides for the quantification of Malassezia spp. in canine skin." Vet Dermatol. 2022;33(4):305-e85. doi:10.1111/vde.13076', relevance: '膠帶壓貼 Malassezia 半定量的可重複性研究（閾值宜為輔助判斷）' },
  ],
  is_current: true,
  created_at: now,
};

/** 耳鏡檢查與耳道細胞學，L4 診斷型 */
const contentOtoscopy: NodeContent = {
  id: 'CONTENT-DERM-L4-004',
  node_id: 'DERM-L4-004',
  version: 2,
  summary: '耳鏡檢查（otoscopy）跟耳道細胞學，是外耳炎診斷跟管理的兩大基石。耳鏡檢查評估耳道紅腫程度、分泌物性質、增生或狹窄程度，還有鼓膜完整性。耳道細胞學（棉棒取樣、Diff-Quik 染色、油浸鏡看）可以鑑定感染微生物類型（球菌、桿菌、馬拉色菌）跟發炎程度。兩個合起來用就可以指導耳用藥物選擇。Video otoscopy 提供更清晰的影像，還可以做耳道灌洗跟異物取出。',
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
    '發炎細胞（退化性嗜中性球）+ 胞內菌 = 活動性感染（非定植），治療要更積極、桿菌型加培養',
    '復發性外耳炎幾乎都是「原發因素（過敏）沒控制」——外耳炎是症狀不是診斷（Nuttall 2023）',
  ],
  body: `# 耳鏡檢查與耳道細胞學

## 一、檢查原理與適應症 (Principles & Indications)



### 耳鏡檢查（Otoscopy）
### 設備
- 手持耳鏡：錐形耳鏡頭（多種大小）+ 鹵素光源
- Video otoscopy：連接螢幕的攝影耳鏡，提供放大影像

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
- 正常：半透明、珍珠白/淡灰色、光滑、可見 pars tensa 與 pars flaccida
- 錘骨柄（manubrium）：正常可見的解剖標記
- 異常徵象：不透明/膨出（中耳積液）、穿孔、色澤改變

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
- 僅用溫生理食鹽水灌洗
- 禁用：aminoglycosides（gentamicin, neomycin）→ 耳毒性
- 禁用：chlorhexidine → 耳毒性
- 可用：fluoroquinolone 耳劑（耳毒性較低）
- 可用：Tris-EDTA（安全）

[圖片:犬 L 型耳道解剖與耳鏡檢查技術圖]
[圖片:耳道細胞學三種微生物比較圖]

## 二、判讀要點 (Interpretation)

耳道細胞學判讀的核心，是「分清楚正常耵聹 vs 感染、球菌 vs 桿菌、有沒有發炎細胞」：

- **先看背景**：正常耳道塗片是少量角質細胞＋稀疏耵聹脂質，菌量極少。大量角質＋脂質本身 ≠ 感染。
- **球菌 vs 桿菌要分開報**：
  - 球菌（多為 *Staphylococcus pseudintermedius*）：成對/成串圓菌，>5/HPF 才有意義；常見於過敏底的續發感染。
  - **桿菌＝紅旗（門檻比球菌低）**：耳道內出現明顯桿菌就要當真，尤其配上發炎細胞、慢性/復發、黃綠膿惡臭潰瘍時，幾乎都指向 *Pseudomonas aeruginosa*——這類強烈建議送培養藥敏。但判讀仍要綜合菌量、發炎細胞、病史與治療反應，不是「看到一隻桿菌就等於重病」。
- **發炎細胞是「活動性感染」的關鍵**：看到大量退化性嗜中性球，特別是**胞內菌（intracellular bacteria）**，代表真正的活動性感染（不是單純定植），治療要更積極，桿菌型要考慮培養＋必要時系統性抗生素。
- **馬拉色菌**：花生形/瓶形出芽酵母，>5/HPF 有意義；但數量要配臨床——油耳/垂耳品種正常耳本就可能有少量。
- **耳蟎**：直接鏡檢/細胞學看到活動蟎蟲或蟲卵即確診，數量少也算（不是定植）。
- **綜合判讀**：細胞學決定「用哪一類藥」，耳鏡決定「能不能用某些藥（鼓膜完整性）」，兩者缺一不可。桿菌型、反覆型、治療反應差的，細胞學之外一定要加培養。

## 三、常見陷阱 (Pitfalls)

- **加熱固定融掉耵聹**：耳垢富含脂質，過度加熱固定會讓背景糊掉、菌看不清。耳道細胞學「風乾即可」，不必像血抹片那樣加熱固定。
- **取樣太淺**：只刮到垂直段口可能漏掉水平段近鼓膜的真正病灶；棉棒要輕柔深入到水平段再旋轉取樣。
- **過度解讀馬拉色菌/球菌**：少量在某些正常犬（油耳、垂耳品種）本就存在，要配臨床症狀，別一看到就當感染狂打藥。
- **漏掉桿菌**：桿菌常較細、染色較淡，低倍快速掃過容易漏；任何膿性/惡臭耳一定要油浸鏡仔細找桿菌。
- **沒評估鼓膜就用耳毒性藥**：腫到看不到鼓膜時先消腫（短期口服類固醇）再評估；確認前只用溫生理食鹽水。
- **生物膜（biofilm）干擾**：*Pseudomonas* 慢性耳常有黏稠生物膜，會包覆細菌、降低抗生素穿透，也讓取樣量失真——清耳（Tris-EDTA ± 機械清洗）是看清楚與治療的前提。
- **只做一次就定生死**：細胞學是「動態追蹤」工具，治療中要重複做，看菌量/發炎細胞有沒有下降，而不是只在初診做一次。

## 四、人醫借鑒 (Translational Insights)

| 人醫工具/概念 | 獸醫耳科應用 | 現況 |
|-------------|-------------|------|
| 耳內視鏡（otoendoscopy） | Video-otoscopy 已是犬慢性耳/中耳深層沖洗、取石、切片、myringotomy 的標準進階工具 | 轉診中心普及，影像可記錄追蹤 |
| 鼓室圖（tympanometry） | 客觀評估鼓膜/中耳狀態，輔助判斷穿孔與積液 | 獸醫研究階段，臨床仍以耳鏡+影像為主 |
| 生物膜（biofilm）概念 | 人慢性中耳炎的 biofilm 觀念直接套用犬 *Pseudomonas* 慢性耳：解釋抗藥與復發 | 已影響清耳/抗生素策略 |
| 中耳影像（CT/MRI） | 評估中耳受累、骨質溶解、腫瘤，決定內科 vs 手術（TECA-LBO） | 已是末期耳病標準術前評估 |

## 五、臨床爭議與知識空缺 (Controversies & Knowledge Gaps)

| 爭議議題 | 現況 | Evidence Level |
|---------|------|---------------|
| 細胞學閾值是否該因品種/個體調整 | Ginel 2002 的半定量閾值（球菌/馬拉色菌 >5/HPF）被廣用，但油耳/垂耳品種正常值可能偏高，閾值未個體化 | Level III |
| 桿菌耳是否一律送培養 | 多數專家建議桿菌/*Pseudomonas* 疑似一律培養藥敏；但局部高濃度抗生素是否能突破培養 MIC、使 MIC 失去意義仍有爭議 | Level III |
| 生物膜的常規偵測與處理 | 臨床上靠黏稠分泌物推測，缺乏標準化床邊偵測法；清耳是共識但最佳製劑/頻率未定 | Level IV |
| Video-otoscopy vs CT 評估中耳 | CT 對骨質/中耳解析度佳；video-otoscopy 可動態＋介入，兩者互補，最佳分工未標準化 | Level III |
| 細胞學重複頻率與治療終點 | 「治到細胞學乾淨」是理想終點，但最佳重複間隔與停藥標準缺乏實證 | Level IV |

## 六、近期實證更新 (Recent Evidence Update)

**復發性外耳炎的現代框架（Nuttall 2023, JAVMA）**
Nuttall 2023 把「治不好的耳」拆成可操作的思路，核心訊息對菜鳥很重要：
- **耳道細胞學＋耳鏡是每次回診都要做的，不是只做一次**——它是調整用藥、判斷治療反應、抓出桿菌/生物膜的即時工具。
- **復發 ≠ 治療失敗，而是「原發因素沒控制」**：外耳炎是症狀不是診斷，反覆發作幾乎都指向沒處理好的**過敏（異位/食物）**或持續因素（增生、中耳炎、生物膜）。一直換耳藥而不找原發因素，就是復發的根源。
- **生物膜與 *Pseudomonas***：慢性桿菌耳要積極清耳（Tris-EDTA 鬆動生物膜）＋培養導向治療，必要時 video-otoscopy 深層沖洗。
- **抗藥性與抗生素管理**：耳用 fluoroquinolone 濫用與多重抗藥 *Pseudomonas* 上升有關，重點是「細胞學/培養導向、足量清耳、處理原發」，而非反射性換更強抗生素。

【台灣落地】台灣高溫潮濕＋垂耳/油耳品種（黃金、拉布拉多、可卡、貴賓）多，外耳炎門診量大；耳道細胞學是最便宜有效的把關工具，卻常被跳過直接給複方耳藥。建立「每隻耳病都做細胞學、桿菌就培養、反覆就找過敏」的習慣，是降低慢性難治耳的關鍵。`,
  clinical_pearl: '處理外耳炎時最容易犯的錯誤，就是沒確認鼓膜完整就用含 aminoglycoside 的耳藥。耳道腫到看不到鼓膜的話，先口服 Prednisolone 0.5-1 mg/kg 跑 5-7 天消腫，等腫脹退了再做完整耳鏡檢查鼓膜。高度懷疑鼓膜已經穿孔的（慢性嚴重外耳炎、頭歪、面神經麻痺），在確認前只用溫生理食鹽水沖。',
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
      '嚴重腫脹的時候沒辦法評估鼓膜，要先消腫再重新檢查',
      '棉棒取樣過淺（僅取垂直段）可能無法代表水平段的微生物',
      '將耳蟎（Otodectes）的白色活動蟎蟲與分泌物混淆',
      '慢性耳道增生讓鼓膜難以看清楚，可能要用 video otoscopy 或 CT',
    ],
    sensitivity_specificity: '耳鏡檢查對外耳炎的敏感度 > 95%。耳道細胞學對鑑定感染微生物類型的敏感度 > 85%。手持耳鏡對鼓膜完整性評估的敏感度約 70-80%（嚴重腫脹或分泌物時降低），video otoscopy 可提高至 > 90%。',
    cost_benefit: '手持耳鏡成本低，每間診所都應該要有。耳道細胞學成本超低（棉棒、載玻片、Diff-Quik）。兩個合起來 5-10 分鐘就搞定，是外耳炎管理跑不掉的工具，可以避免蒙眼用藥的風險。',
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
    { type: 'journal', citation: 'Nuttall T. "Managing recurrent otitis externa in dogs: what have we learned and what can we do better?" J Am Vet Med Assoc. 2023;261(S1):S10-S22. doi:10.2460/javma.23.01.0002', relevance: '近期：復發性外耳炎現代框架（細胞學每次做、找原發、生物膜、抗生素管理）' },
    { type: 'journal', citation: 'Ginel PJ, Lucena R, Rodriguez JC, Ortega J. "A semiquantitative cytological evaluation of normal and pathological samples from the external ear canal of dogs and cats." Vet Dermatol. 2002;13(3):151-156. doi:10.1046/j.1365-3164.2002.00288.x', relevance: '耳道細胞學正常與異常半定量閾值（球菌/馬拉色菌 >5/HPF）' },
    { type: 'journal', citation: 'Gotthelf LN. "Diagnosis and treatment of otitis media in dogs and cats." Vet Clin North Am Small Anim Pract. 2004;34(2):469-487. doi:10.1016/j.cvsm.2003.10.007', relevance: '耳鏡評估鼓膜與中耳炎診斷' },
    { type: 'journal', citation: 'Nuttall T, Bensignor E. "A pilot study to develop an objective clinical score for canine otitis externa." Vet Dermatol. 2014;25(6):530. doi:10.1111/vde.12163', relevance: '外耳炎客觀臨床評分（修正 v1 誤標題與「WAVD 指引」標籤）' },
    { type: 'textbook', citation: "Miller WH, Griffin CE, Campbell KL. Muller and Kirk's Small Animal Dermatology, 7th ed. Elsevier, 2013. Chapter 20: Diseases of the Ear.", relevance: '耳鏡檢查與耳道細胞學技術' },
  ],
  is_current: true,
  created_at: now,
};

/** 過敏性皮膚病管理，L5 治療型 */
const contentAllergyMgmt: NodeContent = {
  id: 'CONTENT-DERM-L5-001',
  node_id: 'DERM-L5-001',
  version: 2,
  summary: '過敏性皮膚病管理是獸醫皮膚科最核心的治療領域。犬異位性皮膚炎（CAD）、跳蚤過敏（FAD）跟食物不良反應（AFR）的治療要走多模式策略（multimodal approach），結合過敏原迴避、藥物治療、皮膚屏障修復跟過敏原特異性免疫治療（ASIT）。現代靶向藥物（oclacitinib、lokivetmab）讓 CAD 的控制效果明顯變好。長期管理需要飼主教育跟定期追蹤。',
  learning_objectives: [
    '比較 oclacitinib、lokivetmab、cyclosporine 的療效、起效時間與副作用',
    '規劃 CAD 急性期與慢性期的多模式治療方案',
    '說明 ASIT 的適應症、執行方式與預期效果',
    '設計長期過敏管理計畫並教育飼主',
  ],
  key_points: [
    'Oclacitinib（JAK1 inhibitor）：0.4-0.6 mg/kg PO BID × 14 天 → SID，起效 4-24 小時',
    'Lokivetmab（抗 IL-31 mAb）：依仿單最低劑量（US ≥2、EU ≥1 mg/kg）以整支劑型 round-up SC q4w，起效 1-7 天，副作用極低',
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
過敏性皮膚病沒辦法根治，要終身管理。單一藥物通常不夠把它完全控制下來，要結合多種策略。

### 過敏原特異性免疫治療（ASIT）
### 適應症
- 已經確診 CAD 而且需要長期藥物控制的犬
- 血清 IgE 或皮內試驗有抓到反應的過敏原

### 執行方式
- 皮下注射免疫治療（SCIT）：漸增劑量再到維持劑量 q2-4w。
- 舌下免疫治療（SLIT）：每日把過敏原萃取液放在口腔黏膜。

### 預期效果
- 50-75% 的犬會臨床改善。
- 要 6-12 個月才能評估效果。
- 目前唯一可能改變疾病自然史的治療。

### 皮膚屏障修復
- 含 ceramide 或 phytosphingosine 的外用保濕劑或噴霧。
- 補充必需脂肪酸（omega-3、omega-6）。
- 不要過度沐浴（避免脂質繼續流失）。
- 定期保濕可以減少藥物用量。

### 環境管理
- isoxazoline 跳蚤預防全年不能停（家裡所有動物一起做）
- 塵蟎控制：防蟎寢具套、定期清洗、HEPA 濾清器
- 已確認的食物過敏原要嚴格避開

### 長期監測
- 每 3-6 個月回診
- PVAS 搔癢評分追蹤
- 皮膚細胞學監測繼發感染
- 用 Oclacitinib：每 6-12 個月做 CBC/BCS
- 用 Cyclosporine：盯牙齦增生跟腸胃副作用

[圖片:CAD 多模式治療策略金字塔圖]

## 二、藥物/方法比較 (Comparison)

### 藥物治療
### 靶向治療藥物比較

| 藥物 | 機轉 | 劑量 | 起效時間 | 主要副作用 | 適用情境 |
|------|------|------|----------|-----------|----------|
| Oclacitinib | JAK1 抑制劑 | 0.4-0.6 mg/kg PO BID×14d→SID | 4-24 hr | 腸胃不適、UTI、偶見腫瘤報告 | 急性+慢性CAD |
| Lokivetmab | 抗 IL-31 mAb | ≥1-2 mg/kg SC q4w（依仿單，整支劑型 round-up） | 1-7 天 | 極少（注射部位反應） | 慢性CAD、不耐藥物的犬 |
| Cyclosporine | Calcineurin 抑制 | 5 mg/kg PO SID | 4-6 週 | 嘔吐腹瀉、牙齦增生 | 慢性免疫調節 |
| Prednisolone | 廣效抗炎 | 0.5-1 mg/kg PO SID | 數小時 | Cushing表現、PU/PD | 僅急性短期控制 |

### 急性期治療（嚴重搔癢發作）
1. 首選：Oclacitinib 0.4-0.6 mg/kg PO BID 跑 14 天。
2. 替代：Prednisolone 0.5-1 mg/kg PO SID 跑 5-7 天後漸減。
3. 同時處理繼發感染：細胞學確認後給抗生素或抗黴菌。
4. 藥浴：Chlorhexidine 3-4% 每週 2-3 次。

### 慢性期管理
1. Oclacitinib 0.4-0.6 mg/kg PO SID（長期）
2. 或 Lokivetmab 1-2 mg/kg SC 每 4 週
3. 或 Cyclosporine 5 mg/kg PO SID（可以試試隔日或每週 2-3 次維持）
4. 同步啟動 ASIT（過敏原特異性免疫治療）

## 三、併發症與監控 (Complications & Monitoring)

主要藥物併發症：Oclacitinib 長期使用要注意血球減少症跟繼發感染風險（特別是 UTI 跟皮膚膿皮症）。Cyclosporine 常見胃腸副作用（嘔吐、腹瀉）跟牙齦增生。Lokivetmab 偶爾會有注射部位反應，但整體安全性最高。
監測計畫：用 Oclacitinib 的犬建議每 6 個月複查 CBC。用 Cyclosporine 的犬定期追蹤 BUN/Creatinine。所有患犬都用 CADESI-4 評分量表客觀評估療效（10 分以下算緩解）。
回診頻率：急性期每 2-4 週、穩定期每 3-6 個月。每次回診做完整皮膚檢查跟繼發感染篩查。

## 四、預後影響 (Prognostic Impact)

犬異位性皮膚炎是終身的慢性病，70-80% 的患犬在多模式管理下可以控制得不錯。
ASIT 療效：過敏原特異性免疫治療（ASIT）12 個月的成功率約 50-70%，要 6-12 個月才看得出來，建議跑 3-5 年。
表型跟預後的關聯：季節性 CAD 預後比較好，全年性合併食物過敏的控制難度比較高。早期介入跟飼主順從性是影響長期預後的關鍵。

## 五、人醫借鑒 (Translational Insights)

| 人醫工具/概念 | 獸醫應用潛力 | 現況 |
|-------------|-------------|------|
| Dupilumab（抗 IL-4Rα 單抗）多模式聯合治療 | 犬 AD 的 Lokivetmab + Oclacitinib 聯合治療方案 | 人醫 Dupilumab + 外用類固醇標準方案，獸醫聯合方案安全性/療效研究中 |
| 精準醫學分子分型（AD endotyping） | 根據犬 AD 免疫亞型選擇最適治療 | 人醫已辨識 AD 分子亞型（Th2/Th22/Th17），犬 AD endotyping 概念起步 |
| 數位健康監控（wearable sensors） | 犬搔癢行為的客觀即時監測 | 人醫智慧手錶監測搔抓已開發，獸醫犬用加速度計搔癢監測初步研究 |
| SLIT（舌下免疫治療）標準化方案 | 犬 SLIT 劑量/頻率/過敏原選擇的標準化 | 人醫 SLIT 已有多項 FDA 核准產品，犬 SLIT 標準化待完善 |

## 六、臨床爭議與知識空缺 (Controversies & Knowledge Gaps)

| 爭議議題 | 現況 | Evidence Level |
|---------|------|---------------|
| Oclacitinib + Lokivetmab 聯合使用的安全性與優勢 | 難治犬可能受益但聯合使用的長期安全性數據不足 | Level III |
| ASIT 最佳給藥途徑：皮下注射（SCIT）vs 舌下（SLIT）vs 皮內（ILIT） | SCIT 歷史最久；SLIT 飼主接受度高；ILIT 為新興方向 | Level II |
| Oclacitinib 長期使用的感染與腫瘤風險閾值 | 上市後監測資料持續累積，但明確的劑量-風險關係尚未建立 | Level III |
| 犬 AD 「proactive therapy」（症狀緩解後預防性低劑量維持）的價值 | 人醫已為 AD 標準策略，犬的 proactive 維持方案缺乏對照研究 | Level IV |

## 七、近期實證更新 (Recent Evidence Updates)

1. **Lokivetmab vs ciclosporin（Moyaert 2017）**：盲性 RCT 顯示 lokivetmab 控制 CAD 療效與 ciclosporin 相當，起效較快、安全性佳，支持其作為長期管理選項。
2. **Oclacitinib 長期安全性（Cosgrove 2013 等）**：整體耐受良好；上市後監測持續關注感染與腫瘤訊號，目前**未證實因果性增加**，但長期用藥仍建議定期 CBC 與感染篩查。
3. **新一代 JAK 抑制劑 ilunocitinib（Zenrelia）**：每日一次口服 JAK 抑制劑，約 2024 年取得核准；與 oclacitinib 的比較試驗已發表（Forster 2025）。仿單對免疫抑制／疫苗接種有警示，用藥前須評估。ICADA 2015 多模式框架仍為現行主軸。
> 各藥物劑量、適應症與警示因國別仿單而異，臨床用藥須以當地核准仿單與獸醫師判讀為準。`,
  clinical_pearl: '選靶向藥物的思路。要快速止癢就 Oclacitinib（4-24 小時起效）。飼主沒辦法每天餵藥，或犬腸胃敏感的，就用 Lokivetmab（月注射，副作用最少）。要全面免疫調節而且不急的，就 Cyclosporine（4-6 週起效但作用廣）。理想狀態是同步啟動 ASIT，如果 ASIT 有效，就可以慢慢把其他藥物的劑量減下來。',
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
    { type: 'guideline', citation: 'Olivry T, DeBoer DJ, Favrot C, et al. Treatment of canine atopic dermatitis: 2015 updated guidelines from the International Committee on Allergic Diseases of Animals (ICADA). BMC Vet Res. 2015;11:210. doi:10.1186/s12917-015-0514-6.', relevance: 'ICADA CAD 治療國際指引' },
    { type: 'journal', citation: 'Gadeyne C, et al. Efficacy of oclacitinib (Apoquel) compared with prednisolone for the control of pruritus and clinical signs associated with allergic dermatitis in client-owned dogs in Australia. Vet Dermatol. 2014;25(6):512-e86. doi:10.1111/vde.12166.', relevance: 'Oclacitinib vs Prednisolone 臨床試驗' },
    { type: 'journal', citation: 'Michels GM, et al. A blinded, randomized, placebo-controlled, dose determination trial of lokivetmab (ZTS-00103289), a caninized, anti-canine IL-31 monoclonal antibody in client-owned dogs with atopic dermatitis. Vet Dermatol. 2016;27(6):478-e129. doi:10.1111/vde.12376.', relevance: 'Lokivetmab 劑量決定臨床試驗' },
    { type: 'journal', citation: 'Cosgrove SB, et al. Efficacy and safety of oclacitinib for the control of pruritus and associated skin lesions in dogs with canine allergic dermatitis. Vet Dermatol. 2013;24(5):479-e114. doi:10.1111/vde.12047.', relevance: 'Oclacitinib 療效與安全性樞紐試驗' },
    { type: 'journal', citation: 'Moyaert H, et al. A blinded, randomized clinical trial evaluating the efficacy and safety of lokivetmab compared to ciclosporin in client-owned dogs with atopic dermatitis. Vet Dermatol. 2017;28(6):593-e145. doi:10.1111/vde.12478.', relevance: 'Lokivetmab vs ciclosporin 對照試驗（近期實證）' },
    { type: 'journal', citation: 'Forster S, Boegel A, Despa S, et al. Comparative efficacy and safety of ilunocitinib and oclacitinib for the control of pruritus and associated skin lesions in dogs with atopic dermatitis. Vet Dermatol. 2025;36(2):165-176. doi:10.1111/vde.13319.', relevance: '新一代 JAK 抑制劑 ilunocitinib vs oclacitinib（近期實證）' },
    { type: 'textbook', citation: "Miller WH, Griffin CE, Campbell KL. Muller and Kirk's Small Animal Dermatology, 7th ed. Elsevier, 2013.", relevance: '過敏性皮膚病管理完整章節' },
  ],
  is_current: true,
  created_at: now,
};

/** 抗寄生蟲治療，L5 治療型 */
const contentAntiparasitic: NodeContent = {
  id: 'CONTENT-DERM-L5-002',
  node_id: 'DERM-L5-002',
  version: 2,
  summary: '皮膚科抗寄生蟲治療以 isoxazoline 類藥物為核心，涵蓋跳蚤、蜱蟲、蠕形蟎跟疥蟎的治療。Isoxazoline 類（fluralaner、afoxolaner、sarolaner、lotilaner）是 GABA 受體跟 GluCl 受體的抑制劑，對節肢動物選擇性很高。口服方便、廣效、安全性高，已經把傳統的 amitraz、ivermectin、fipronil 全面擠下首選位子。對於 MDR1 突變品種（柯利犬類），isoxazoline 是安全的替代方案。',
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



### 環境控制（跳蚤管理跑不掉的一塊）
- 跳蚤卵加幼蟲加蛹 = 環境中跳蚤總量的 95%
- 每天吸塵（地毯、沙發縫隙、寵物床墊）
- 用 IGR（insect growth regulator）環境噴霧
- 寢具 60°C 以上清洗

[圖片:Isoxazoline 類藥物作用機轉與給藥方案圖]

## 二、藥物/方法比較 (Comparison)

### Isoxazoline 類藥物
### 作用機轉
Isoxazoline 選擇性抑制節肢動物神經系統的 GABA（γ-aminobutyric acid）受體跟 GluCl（glutamate-gated chloride channel）受體，神經過度興奮、癱瘓、死亡。它跟哺乳動物 GABA 受體的結合親和力極低，所以對犬貓很安全。

### 藥物比較

| 藥物 | 商品名 | 犬劑量 | 給藥間隔 | 劑型 | 適應症 |
|------|--------|--------|----------|------|--------|
| Fluralaner | Bravecto | 25-56 mg/kg | PO q12w / spot-on q12w | 咀嚼錠/滴劑 | 跳蚤、蜱、蠕形蟎、疥蟎 |
| Afoxolaner | NexGard | 2.5-6.2 mg/kg | PO q4w | 咀嚼錠 | 跳蚤、蜱、蠕形蟎、疥蟎 |
| Sarolaner | Simparica | 2-4 mg/kg | PO q4w | 咀嚼錠 | 跳蚤、蜱、蠕形蟎、疥蟎、耳蟎 |
| Lotilaner | Credelio | 20-43 mg/kg | PO q4w | 咀嚼錠 | 跳蚤、蜱 |

### 適應症別治療方案

跳蚤/蜱預防
- 任一 isoxazoline，全年不間斷，所有同居犬
- 配合環境控制（吸塵、IGR 噴霧）

蠕形蟎症
- Fluralaner 25-56 mg/kg PO 單劑（可 q12w 重複）
- 或 Afoxolaner/Sarolaner q4w
- 治療至連續 2 次陰性刮搔後再持續 1 個月

疥蟎症
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

主要藥物併發症：Isoxazoline 偶爾會有神經毒性（震顫、共濟失調），癲癇病史的犬要小心用（FDA 黑框警告）。Ivermectin 在 MDR1 突變犬會引起嚴重神經毒性（瞳孔散大、失明、昏迷）。Amitraz 中毒表現為鎮靜、低體溫、高血糖。
蠕形蟎治療監測：每月做深層皮膚刮搔追蹤蟎蟲數量跟活力。治療目標是連續 2 次（間隔 4 週）刮搔陰性後再續治 1 個月。
回診時程：治療開始後 4-8 週第一次複查療效，評估皮膚刮搔結果、臨床症狀改善程度、有沒有繼發膿皮症要處理。

## 四、預後影響 (Prognostic Impact)

蠕形蟎症：Isoxazoline 治療犬蠕形蟎症治癒率超過 95%，多數在 2-3 個月內就達到寄生蟲學痊癒。幼犬局部型預後超好，成犬全身型要回頭翻潛在免疫抑制因素。
疥蟎症：Isoxazoline 單劑或雙劑治療反應率高，通常 2-4 週內搔癢明顯改善。家裡所有犬要同步治療不然會再感染。
跳蚤過敏性皮膚炎（FAD）：控制好不好就看全年不能停的跳蚤預防順從性。環境處理（室內噴霧、清洗寢具）也是成功的關鍵。

## 五、人醫借鑒 (Translational Insights)

| 人醫工具/概念 | 獸醫應用潛力 | 現況 |
|-------------|-------------|------|
| Moxidectin 長效注射劑（6 個月釋放） | 犬長效抗寄生蟲注射劑開發，提升順從性 | 人醫 ivermectin 單劑已用於疥瘡根除計畫，獸醫長效 isoxazoline 注射劑研究中 |
| 基因驅動（gene drive）控制病媒族群 | 跳蚤/蜱蟲族群的基因層面控制 | 人醫瘧蚊 gene drive 研究進展快，獸醫病媒應用尚為理論 |
| 藥物基因組學指導用藥（pharmacogenomics） | MDR1/ABCB1 基因型指導犬抗寄生蟲用藥選擇 | 人醫 pharmacogenomics 已臨床應用，獸醫 MDR1 基因檢測已商業化 |

## 六、臨床爭議與知識空缺 (Controversies & Knowledge Gaps)

| 爭議議題 | 現況 | Evidence Level |
|---------|------|---------------|
| Isoxazoline 類藥物在癲癇犬中的安全性 | FDA 警告癲癇犬慎用，但實際誘發癲癇的發生率極低 | Level III |
| 貓用 isoxazoline（fluralaner 外用）的蠕形蟎治療效果 | 貓蠕形蟎較罕見，isoxazoline 療效的專門研究有限 | Level III |
| 蠕形蟎症 isoxazoline 治療的最佳療程（Fluralaner 單劑 vs 連續 2-3 劑） | 多數犬單劑即可，但何種情況需要額外劑量無標準化標準 | Level II |
| Isoxazoline 類藥物對環境無脊椎動物的生態影響 | 犬糞便中殘留藥物可能影響糞食性昆蟲，但研究剛起步 | Level IV |

## 七、近期實證更新 (Recent Evidence Updates)

### Isoxazoline 成為犬蠕形蟎/疥蟎的新標準（WAVD 2020 共識）
2020 WAVD 犬貓蠕形蟎診斷與治療共識（Mueller 2020）將口服 isoxazoline 列為犬全身型蠕形蟎的首選——療效高、單劑即可起始，取代過去數月漸增 ivermectin 與其 MDR1 風險；治療至連續 2 次（間隔約 1 個月）深層刮搔陰性。疥蟎亦以單劑/雙劑 isoxazoline 高效控制（Becskei 2016、Fourie 2015）。

### 適應症持續擴張
isoxazoline 對耳蟎、Cheyletiella、毛囊蟲、甚至作為利什曼原蟲病媒（沙蠅）防護的研究漸增；新成員（如貓用 esafoxolaner 複方、tigolaner）擴大選擇。

### 安全與族群監測
FDA 對 isoxazoline 神經學不良反應（震顫/共濟失調/癲癇）發出警示，癲癇病史犬須權衡（發生率低）；MDR1 突變犬使用標示劑量 isoxazoline 安全（非 P-gp 受質）。

### 生態與抗藥性
犬糞/洗劑殘留之滅蚤藥（fipronil、imidacloprid）對水域與糞食性昆蟲的生態衝擊受關注；長期 isoxazoline 廣泛使用下的抗藥性監測為新興議題。`,
  clinical_pearl: 'Isoxazoline 類藥物徹底改變了皮膚科寄生蟲治療。蠕形蟎症以前要用幾個月的 ivermectin 漸增劑量，還有 MDR1 風險，現在 Fluralaner 單劑就可以開始。疥蟎以前要反覆打 selamectin 或 ivermectin，現在也是 Fluralaner 單劑搞定。記住：台灣幾乎每一隻犬都應該全年用 isoxazoline 預防跳蚤，這是過敏犬管理的基石。',
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
    { type: 'journal', citation: 'Fourie JJ, Liebenberg JE, Horak IG, et al. Efficacy of orally administered fluralaner (Bravecto) or topically applied imidacloprid/moxidectin (Advocate) against generalized demodicosis in dogs. Parasit Vectors. 2015;8:187. doi:10.1186/s13071-015-0775-8.', relevance: 'Fluralaner 治療蠕形蟎症的關鍵研究' },
    { type: 'journal', citation: 'Becskei C, Reinemeyer C, King VL, et al. Efficacy and safety of a novel oral isoxazoline, sarolaner (Simparica), for the treatment of sarcoptic mange in dogs. Vet Parasitol. 2016;222:56-61. doi:10.1016/j.vetpar.2016.02.017.', relevance: 'Sarolaner 治療疥蟎的臨床研究' },
    { type: 'guideline', citation: 'Mueller RS, Bensignor E, Ferrer L, et al. Treatment of demodicosis in dogs: 2011 clinical practice guidelines. Vet Dermatol. 2012;23(2):86-e21. doi:10.1111/j.1365-3164.2011.01026.x.', relevance: '蠕形蟎治療臨床實踐指引（2011）' },
    { type: 'guideline', citation: 'Mueller RS, Rosenkrantz W, Bensignor E, et al. Diagnosis and treatment of demodicosis in dogs and cats: Clinical consensus guidelines of the World Association for Veterinary Dermatology. Vet Dermatol. 2020;31(1):5-e2. doi:10.1111/vde.12806.', relevance: 'WAVD 2020 蠕形蟎診療共識（isoxazoline 首選）' },
    { type: 'textbook', citation: "Miller WH, Griffin CE, Campbell KL. Muller and Kirk's Small Animal Dermatology, 7th ed. Elsevier, 2013.", relevance: '抗寄生蟲藥物完整章節' },
  ],
  is_current: true,
  created_at: now,
};

/** 皮膚科免疫調節治療，L5 治療型 */
const contentImmunomodulation: NodeContent = {
  id: 'CONTENT-DERM-L5-003',
  node_id: 'DERM-L5-003',
  version: 1,
  summary: '皮膚科免疫調節治療涵蓋從糖皮質激素到現代靶向生物製劑的完整藥理學。核心藥物有糖皮質激素（prednisolone）、calcineurin 抑制劑（cyclosporine、tacrolimus）、抗代謝物（azathioprine、mycophenolate）、烷化劑（chlorambucil）跟免疫抑制大環內酯。治療目標是把免疫介導性皮膚病（天疱瘡、狼瘡、無菌性肉芽腫）控制下來，同時把免疫抑制的副作用壓到最低。',
  learning_objectives: [
    '比較各類免疫抑制藥物的作用機轉、劑量與副作用',
    '規劃天疱瘡的免疫抑制誘導期與維持期治療',
    '說明節約類固醇策略（steroid-sparing）的原理與實施',
    '監測免疫抑制治療的常見副作用',
  ],
  key_points: [
    'Prednisolone 免疫抑制劑量：2-4 mg/kg/day → 控制後每 2-4 週減 25% → 最低有效隔日劑量',
    'Cyclosporine（calcineurin 抑制）：5-10 mg/kg PO SID，抑制 T 細胞活化與 IL-2 產生',
    'Azathioprine（嘌呤拮抗劑）：2 mg/kg PO SID（犬），要監測骨髓抑制。貓禁用',
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

副作用：PU/PD（多飲多尿）、多食、肌肉萎縮、皮膚菲薄、醫源性 Cushing、易感染、糖尿病（貓）

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
| 禁忌 | 貓禁用（致命性骨髓抑制） |

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
| 適用 | 貓首選免疫抑制輔助劑（替代 azathioprine） |
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

Prednisolone：起效最快（數小時），但長期副作用最多（醫源性 Cushing、PU/PD、肝病變、皮膚鈣質沉著）；僅適合誘導期或急性發作短期使用。
Azathioprine（犬）：經典類固醇節約劑，起效要 3-6 週，骨髓抑制是主要風險（貓絕對禁用，會致命性骨髓抑制）。監測負擔中等（CBC q2wk 誘導期）。
Mycophenolate（MMF）：比 Azathioprine 更具選擇性，起效可能較快（2-4 週），腹瀉為最常見副作用；犬貓均可使用，逐漸成為替代首選。
Cyclosporine：適合非天疱瘡類自體免疫疾病（如脂腺炎、肛門瘻管），起效 4-6 週，嘔吐/腹瀉/牙齦增生為主要副作用；監測負擔較低但藥物成本高。

## 三、併發症與監控 (Complications & Monitoring)

Prednisolone 長期風險：醫源性 Cushing 症候群（腹部膨大、皮膚薄化、鈣質沉著）、PU/PD、類固醇肝病變、繼發 UTI 或皮膚感染、肌肉萎縮。
Azathioprine 骨髓抑制：犬發生率 5-15%，通常在開始治療後 2-8 週出現。貓絕對禁用（致命性全血球減少）。Mycophenolate 主要是 GI 副作用（腹瀉 20-30%），骨髓抑制比 Azathioprine 少。
監測計畫：誘導期 CBC 加生化每 2 週做一次。穩定後 CBC 加生化每 3 個月做一次。每次回診評估皮膚病灶面積跟活動性。

## 四、預後影響 (Prognostic Impact)

天疱瘡（PF）：積極免疫抑制下緩解率 70-80%，建立類固醇節約方案後，部分犬可以維持長期緩解。減藥後復發率 20-40%，要準備好回升劑量的方案。
節約類固醇的成功率：60-70% 的犬可以成功降到低劑量隔日 Prednisolone，或完全停類固醇靠輔助劑維持。
預後不好的因素：診斷被拖、誘導期劑量不夠、飼主順從性差、合併深部感染。貓 PF 整體預後比犬稍差。

## 五、人醫借鑒 (Translational Insights)

| 人醫工具/概念 | 獸醫應用潛力 | 現況 |
|-------------|-------------|------|
| Rituximab（抗 CD20 單抗）用於天疱瘡 | 犬頑固性天疱瘡的 B 細胞耗竭治療 | 人醫已為 PV 一線治療，獸醫無犬化抗 CD20 產品 |
| Mycophenolate mofetil（MMF）作為首選節約劑 | 犬天疱瘡的 MMF 替代 Azathioprine | 人醫 MMF 為天疱瘡標準輔助劑，獸醫犬用經驗逐漸累積 |
| TPMT 基因型檢測指導 Azathioprine 用藥 | 犬 TPMT 活性個體差異大，基因型指導個人化劑量 | 人醫 TPMT 基因型檢測已常規，獸醫犬 TPMT 研究有限 |
| 低劑量 Rituximab + 低劑量免疫抑制劑的「精準免疫抑制」 | 犬自體免疫皮膚病的最小有效免疫抑制策略 | 人醫趨勢從強效免疫抑制轉向精準靶向，獸醫理念推廣中 |

## 六、臨床爭議與知識空缺 (Controversies & Knowledge Gaps)

| 爭議議題 | 現況 | Evidence Level |
|---------|------|---------------|
| Azathioprine vs Mycophenolate 作為犬 PF 首選節約劑 | Azathioprine 歷史長且便宜；MMF 可能起效更快但成本高 | Level III |
| 犬天疱瘡的免疫抑制治療何時可嘗試停藥 | 停藥標準無共識，復發率約 40-50%，anti-Dsg1 定量可能有助決策 | Level IV |
| Cyclosporine 在犬天疱瘡中的單獨療效 | 部分臨床醫師使用但缺乏對照研究，較常用於 CAD 而非天疱瘡 | Level IV |
| 免疫抑制期間蠕形蟎復發的預防策略 | 預防性 isoxazoline 投藥可能降低風險，但標準化建議不足 | Level III |`,
  clinical_pearl: '天疱瘡治療中最常見的錯誤就是 Prednisolone 減量太快、結果復發。正確做法是每 2-4 週只減 25%，而且要等第二種免疫抑制劑（Azathioprine 或 Mycophenolate）開始起效之後（通常啟動 2-4 週後）才開始減。另外記住：貓絕對不能用 Azathioprine。貓缺乏足夠的 thiopurine methyltransferase（TPMT），會跑出致命性骨髓抑制。貓用 Chlorambucil 替代。',
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
    { type: 'journal', citation: 'Mueller RS, Krebs I, Power HT, Fieseler KV. Pemphigus foliaceus in 91 dogs. J Am Anim Hosp Assoc. 2006;42(3):189-196. doi:10.5326/0420189', relevance: '犬 PF 91 例：病灶分佈、治療反應與預後。Crossref 驗證真實，已取代原疑捏造之「PF/PV 治療」引用（原指涉之 PV 治療請 DVM 另補真實來源）' },
    { type: 'textbook', citation: "Miller WH, Griffin CE, Campbell KL. Muller and Kirk's Small Animal Dermatology, 7th ed. Elsevier, 2013.", relevance: '免疫調節藥物完整藥理學' },
    { type: 'journal', citation: 'Viviano KR. Update on immunosuppressive therapies for dogs and cats. Vet Clin North Am Small Anim Pract. 2013;43(5):1149-1170. doi:10.1016/j.cvsm.2013.04.009', relevance: '犬貓免疫抑制治療更新' },
    { type: 'journal', citation: 'Rosenkrantz W. Pemphigus: current therapy. Vet Dermatol. 2004;15:90-98. doi:10.1111/j.1365-3164.2004.00360.x', relevance: '天疱瘡治療實務' },
    { type: 'guideline', citation: 'Olivry T et al. Treatment of canine atopic dermatitis: 2015 updated guidelines from the International Committee on Allergic Diseases of Animals (ICADA). BMC Vet Dermatol. 2015;26:210-e49. doi:10.1186/s12917-015-0514-6', relevance: 'ICADA 指引中 cyclosporine 與免疫調節劑用藥建議' },
  ],
  is_current: true,
  created_at: now,
};

/** 耳科治療，L5 治療型 */
const contentOticTherapy: NodeContent = {
  id: 'CONTENT-DERM-L5-004',
  node_id: 'DERM-L5-004',
  version: 2,
  summary: '耳科治療涵蓋外耳炎跟中耳炎的局部與全身性治療。要依耳道細胞學結果選耳用製劑：球菌用 fusidic acid 或 polymyxin B、桿菌用 fluoroquinolone 或 polymyxin B、馬拉色菌用 clotrimazole 或 miconazole。耳道清洗是治療的基礎步驟。鼓膜完整性決定可以用哪些藥。慢性外耳炎要同時處理原發因素（過敏）跟持續因素（增生、中耳炎）。末期耳道疾病可能要走手術（TECA-LBO）。',
  learning_objectives: [
    '根據耳道細胞學結果選擇適當的耳用製劑',
    '正確執行耳道清洗技術',
    '區分鼓膜完整與破裂時的安全用藥選擇',
    '規劃慢性/反覆外耳炎的長期管理策略',
    '辨識需要手術介入的末期耳道疾病指徵',
  ],
  key_points: [
    '耳道清洗是所有耳科治療的第一步。分泌物跟碎片會讓藥物效果打折',
    '球菌性外耳炎：含 fusidic acid 或 polymyxin B/neomycin + 類固醇的複方耳劑',
    '桿菌性（Pseudomonas）外耳炎：Tris-EDTA 灌洗 + fluoroquinolone 或 polymyxin B',
    '馬拉色菌性外耳炎：含 clotrimazole、miconazole 或 ketoconazole 的耳劑',
    '鼓膜破裂時禁用：aminoglycosides（gentamicin, neomycin）、chlorhexidine → 耳毒性',
    'Tris-EDTA 破壞革蘭氏陰性菌外膜 → 增強抗生素效果（對 Pseudomonas 尤其重要）',
    '嚴重腫脹：口服 Prednisolone 0.5-1 mg/kg × 5-7 天消腫後再局部治療',
    '末期耳道疾病（完全閉塞/礦化）→ TECA-LBO（全耳道切除+外側鼓室切開術）',
    '長效獸醫師端投藥複方耳劑（Osurnia 兩劑/7天、Neptra 單劑）解決居家順從性差問題，但仍需細胞學選藥、鼓膜完整、桿菌培養（Forster 2018 RCT）',
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

球菌感染

| 藥物 | 常見商品 | 用法 |
|------|----------|------|
| Fusidic acid + Framycetin + Nystatin + Prednisolone | Surolan | q12-24h × 7-14天 |
| Polymyxin B + Miconazole + Prednisolone | Surolan 替代 | q12-24h × 7-14天 |
| Florfenicol + Terbinafine + Betamethasone | Osurnia | 單次劑量，7天後可重複 |

桿菌感染（Pseudomonas）

| 策略 | 詳情 |
|------|------|
| 第一步 | Tris-EDTA 灌洗 → 靜置 15 分鐘 → 增強後續抗生素 |
| 局部首選 | Enrofloxacin 耳劑 或 Marbofloxacin 耳劑 |
| 替代 | Polymyxin B 耳劑 |
| 嚴重/中耳 | 加用全身性 Fluoroquinolone PO |
| 培養藥敏 | 桿菌感染一定要做。多重抗藥 Pseudomonas 越來越常見 |

馬拉色菌感染

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
1. 控制原發因素：過敏管理（最重要）
2. 維持性清洗：居家每週 1-2 次洗耳
3. 定期監測：每 1-3 個月耳鏡+細胞學
4. 早期介入：復發跡象即開始治療，不等惡化

### 末期耳道疾病
耳道完全閉塞、礦化、反覆中耳炎 → TECA-LBO
- 全耳道切除（Total Ear Canal Ablation）+ 外側鼓室切開術（Lateral Bulla Osteotomy）
- 術後永久性聽力喪失（該側）但解決疼痛與感染

[圖片:外耳炎治療決策流程圖（依細胞學結果選擇）]

## 二、藥物/方法比較 (Comparison)

局部治療（首選）：沒合併中耳炎的外耳炎以局部用藥為主。球菌選 polymyxin B 或 fusidic acid；桿菌（Pseudomonas）選 fluoroquinolone 耳滴劑或 Tris-EDTA 加 gentamicin；馬拉色菌選 clotrimazole 或 miconazole。
全身性治療：鼓膜破損合併中耳炎、嚴重腫脹沒辦法局部給藥的時候用。Pseudomonas 中耳炎首選 enrofloxacin 或 marbofloxacin PO。
耳道清潔劑比較：酸化型（boric acid、acetic acid）適合細菌性外耳炎維持；酵素型（Tris-EDTA）有破膜活性，可以增強抗生素對 Pseudomonas biofilm 的穿透力；角質溶解型（squalene）適合分泌物多的耳道。
手術介入（TECA-LBO）：末期耳道疾病（完全閉塞、礦化、反覆中耳炎）的挽救性手術，術後該側永久喪失聽力，但慢性疼痛跟感染可以根治。

## 三、併發症與監控 (Complications & Monitoring)

用藥安全警示：鼓膜破損的時候 aminoglycoside（gentamicin、neomycin）有耳毒性跟前庭毒性，要避開或改用 fluoroquinolone 耳滴劑。fluoroquinolone 局部使用偶爾會有刺激感。長期耳內類固醇會讓耳道上皮萎縮。
監測重點：每次回診都要做耳道細胞學（球菌、桿菌、馬拉色菌計數）評估治療反應。中耳炎要做影像追蹤（CT 或 MRI 看鼓室填充跟骨溶解）。
TECA-LBO 術後監測：術後併發症發生率 10-25%，包含顏面神經損傷（暫時或永久）、術後瘻管、Horner 症候群。

## 四、預後影響 (Prognostic Impact)

急性外耳炎：針對性治療反應率約 90%，關鍵在於依細胞學選藥，不是經驗性治療。
慢性外耳炎：復發率 30-50%，長期控制看原發因素（過敏）管不管理得好。沒控制原發因素的幾乎一定復發。
TECA-LBO：術後併發症率 10-25%（顏面神經麻痺、瘻管），但 85-90% 飼主滿意度高，因為慢性疼痛跟感染都根治了。

## 五、人醫借鑒 (Translational Insights)

| 人醫工具/概念 | 獸醫應用潛力 | 現況 |
|-------------|-------------|------|
| 耳道內藥物緩釋系統（sustained-release otic gel） | 犬外耳炎單次投藥持效 1-4 週的耳內凝膠 | 人醫耳用緩釋製劑已上市，獸醫 Osurnia/Claro/Neptra 等已可用 |
| 抗生物膜策略（N-acetylcysteine + lactoferrin） | 犬 Pseudomonas biofilm 外耳炎的輔助破膜治療 | 人醫慢性中耳炎/鼻竇炎 biofilm 研究活躍，獸醫 NAC 灌洗初步報告 |
| 鼓室成形術微創技術 | 犬中耳炎的微創引流與通氣管置入 | 人醫鼓膜切開+通氣管為標準術式，獸醫 video otoscopy 引導鼓膜切開增加 |

## 六、臨床爭議與知識空缺 (Controversies & Knowledge Gaps)

| 爭議議題 | 現況 | Evidence Level |
|---------|------|---------------|
| 犬外耳炎 Pseudomonas 的最佳局部抗生素選擇 | Fluoroquinolone vs Polymyxin B，各有優缺點；多重抗藥菌需培養指導 | Level II |
| 慢性增生性外耳炎 TECA-LBO 手術時機的客觀標準 | 目前依賴主觀臨床判斷，缺乏標準化的「不可逆改變」評估標準 | Level IV |
| 耳道灌洗液的最佳選擇：Tris-EDTA vs saline vs chlorhexidine | Tris-EDTA 對革蘭氏陰性菌有增敏作用，但鼓膜破裂時限制較多 | Level II |
| 犬外耳炎預防性維持耳道清洗的效益 | 經驗性推薦，但預防性清洗 vs 不清洗的比較 RCT 極少 | Level IV |

## 七、近期實證更新 (Recent Evidence Update)

**長效、獸醫師端投藥的耳劑：解決「飼主在家點不到藥」這個最大失敗原因**
傳統耳劑最大的失敗點往往不是藥不夠強，而是飼主在家點不確實。近年的**長效複方凝膠**（florfenicol＋terbinafine＋類固醇）由獸醫塗入、藥效持續約 1-2 週，RCT（Forster et al 2018, BMC Vet Res）顯示對細菌/馬拉色菌外耳炎療效良好。要分清楚劑型：**Osurnia（含 betamethasone）是間隔 7 天的兩次給藥；Neptra/Claro（含 mometasone）是單次給藥**。臨床定位：對居家順從性差的病例特別有用，但仍要先做細胞學選對適應症（廣效複方、含類固醇）、確認鼓膜完整（含 florfenicol 製劑仿單限鼓膜完整使用），桿菌/*Pseudomonas* 仍需培養導向。

**抗生素管理與 *Pseudomonas*（Nuttall 2023, JAVMA）**
- 慢性桿菌耳的主軸不是「換更強的抗生素」，而是 **Tris-EDTA 增敏（破壞革蘭氏陰性菌外膜）＋積極清耳（鬆動生物膜）＋培養導向＋處理原發過敏**。
- 耳用 fluoroquinolone 濫用與多重抗藥 *Pseudomonas* 上升相關；局部高濃度雖可能突破部分 MIC，但管理原發與清耳仍是關鍵，而非反射性升級抗生素。

**主軸不變、工具變好**：依細胞學選藥、清耳是基礎、鼓膜決定能用哪些藥、找出並控制原發因素（過敏）才是不復發的根本——新製劑只是讓「把藥送到位」這件事更容易。

【台灣落地】台灣濕熱、垂耳/油耳品種多，外耳炎復發率高；長效耳劑對忙碌或難配合的飼主是實用選項，但別取代「細胞學＋找原發」的基本功。多重抗藥 *Pseudomonas* 在台灣不少見，桿菌耳務必培養。`,
  clinical_pearl: 'Pseudomonas 外耳炎是耳科治療裡最棘手的問題。關鍵策略是「Tris-EDTA 先行」。Tris-EDTA 螯合鈣鎂離子，破壞 Pseudomonas 外膜的 LPS 層，原本抗藥的菌株就會對後續的 fluoroquinolone 變敏感。灌洗後靜置 15 分鐘再給 fluoroquinolone 耳劑，效果比直接用藥好很多。另外，永遠不要忘記送培養藥敏。多重抗藥 Pseudomonas 在台灣並不少見。',
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
    { type: 'guideline', citation: 'Nuttall T. "Managing recurrent otitis externa in dogs: what have we learned and what can we do better?" J Am Vet Med Assoc. 2023;261(S1):S10-S22. doi:10.2460/javma.23.01.0002', relevance: '近期：復發外耳炎現代治療框架（清耳、培養導向、找原發、抗生素管理）' },
    { type: 'journal', citation: 'Forster SL, Real T, Doucette KP, King SB. "A randomized placebo-controlled trial of the efficacy and safety of a terbinafine, florfenicol and betamethasone topical ear formulation in dogs for the treatment of bacterial and/or fungal otitis externa." BMC Vet Res. 2018;14(1):262. doi:10.1186/s12917-018-1589-7', relevance: '近期 RCT：長效獸醫師端投藥複方耳劑療效（順從性解方）' },
    { type: 'guideline', citation: 'Nuttall T, Cole LK. "Evidence-based veterinary dermatology: a systematic review of interventions for treatment of Pseudomonas otitis in dogs." Vet Dermatol. 2007;18(2):69-77. doi:10.1111/j.1365-3164.2007.00575.x', relevance: '犬假單胞菌外耳炎治療系統性回顧' },
    { type: 'journal', citation: 'Gotthelf LN. "Diagnosis and treatment of otitis media in dogs and cats." Vet Clin North Am Small Anim Pract. 2004;34(2):469-487. doi:10.1016/j.cvsm.2003.10.007', relevance: '外耳炎與中耳炎治療指引' },
    { type: 'journal', citation: 'Gortel K. "Otic flushing." Vet Clin North Am Small Anim Pract. 2004;34(2):557-565. doi:10.1016/j.cvsm.2003.10.010', relevance: '耳道灌洗技術與洗液選擇' },
    { type: 'textbook', citation: "Miller WH, Griffin CE, Campbell KL. Muller and Kirk's Small Animal Dermatology, 7th ed. Elsevier, 2013.", relevance: '耳科治療完整章節' },
  ],
  is_current: true,
  created_at: now,
};

/** 抗黴菌治療，L5 治療型 */
const contentAntifungal: NodeContent = {
  id: 'CONTENT-DERM-L5-005',
  node_id: 'DERM-L5-005',
  version: 1,
  summary: '皮膚科抗黴菌治療涵蓋皮膚癬菌症（dermatophytosis）跟馬拉色菌皮膚炎的全身性跟局部治療。全身性抗黴菌藥以 azole 類（itraconazole、ketoconazole）跟 allylamine 類（terbinafine）為主。局部治療以含 miconazole 加 chlorhexidine 的藥浴或 lime sulfur 浸泡為主。皮膚癬菌症的治療終點看真菌培養陰性，不是看臨床外觀。馬拉色菌治療要同時把潛在過敏性皮膚病控制好，不然會復發。',
  learning_objectives: [
    '比較 itraconazole、ketoconazole 和 terbinafine 的藥理特性與適應症',
    '說明 itraconazole 脈衝療法的原理與優勢',
    '規劃皮膚癬菌症的全身性+局部治療方案與停藥標準',
    '規劃馬拉色菌皮膚炎的治療方案',
  ],
  key_points: [
    'Itraconazole 5 mg/kg PO SID（脈衝療法：1 週用/1 週停）， 皮膚癬菌首選',
    'Ketoconazole 5-10 mg/kg PO SID，馬拉色菌首選，需與食物同服增加吸收',
    'Terbinafine 30-40 mg/kg PO SID（犬）， 殺黴菌作用（fungicidal），起效快',
    'Itraconazole 脈衝療法原理：藥物蓄積於角質層，停藥期間仍持續釋放',
    '局部治療：Miconazole 2% + Chlorhexidine 2% 藥浴 q2-3次/週，接觸時間 ≥ 10 分鐘',
    'Lime sulfur 1:16 浸泡每週 2 次。有效但氣味強烈，會把毛髮染黃',
    '皮膚癬菌停藥標準：連續 2-3 次真菌培養陰性（間隔 2 週），非看臨床外觀',
    '環境去汙絕對不能省：漂白水 1:10、每天吸塵、寢具 60°C 清洗',
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
Primary care：
1. 全身性：Itraconazole 5 mg/kg PO SID 脈衝療法
2. 局部：Miconazole + Chlorhexidine 藥浴每週 2 次
3. 環境去汙：漂白水 1:10、每日吸塵、60°C 清洗
4. 隔離感染動物
5. 停藥標準：連續 2-3 次培養陰性（間隔 2 週）

Specialty care：
- 難治性病例：Terbinafine 30-40 mg/kg + 局部藥浴
- 多貓家庭：所有貓（含無症狀者）同時治療
- Kerion（結節性病灶）：全身性抗黴菌 + 短期抗炎

### 馬拉色菌皮膚炎
Primary care：
1. 全身性：Ketoconazole 5-10 mg/kg PO SID × 3-4 週
2. 局部：Miconazole + Chlorhexidine 藥浴每週 2 次
3. 同時控制潛在過敏（最重要，不然一定復發）

Specialty care：
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
- 原理：itraconazole 高度親脂 → 蓄積於角質層與毛髮 → 停藥後持續從角質層釋放
- 方案：5 mg/kg PO SID × 7 天 → 停 7 天 → 重複循環
- 優勢：降低肝毒性風險、減少藥物成本、維持治療濃度
- 療程：通常需要 3-6 個脈衝週期（6-12 週）

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

Ketoconazole 肝毒性：發生率約 5%，治療前要取得基線肝指數（ALT/ALP），治療期間每 2-4 週複查。ALT 升高超過基線 2 倍就要停藥或換藥。
Itraconazole：主要副作用是厭食跟嘔吐，長期使用偶爾會肝酵素上升。跟食物同服可以增加吸收。Griseofulvin 致畸性（孕貓絕對禁用）、骨髓毒性（FIV 陽性貓風險更高），現在已經很少用了。
黴菌培養追蹤：皮膚癬菌症以黴菌培養（DTM 或 Sabouraud）每 2-4 週監測為金標準。治療目標是連續 2-3 次培養陰性才停藥，太早停藥會復發。

## 四、預後影響 (Prognostic Impact)

皮膚癬菌症：全身性抗黴菌藥合併局部治療（藥浴加環境消毒）治癒率超過 90%，平均療程 6-12 週。收容所群體感染要更積極的環境管控才壓得住。
馬拉色菌皮膚炎：局部加全身性治療反應不錯，但如果原發因素（過敏、內分泌疾病）沒處理，幾乎一定會復發。
治療時程預期：犬皮膚癬菌平均要 8-12 週，貓 M. canis 感染平均要 6-16 週（長毛貓可能更久）。治療期間家裡其他動物要同步監測或預防性治療。

## 五、人醫借鑒 (Translational Insights)

| 人醫工具/概念 | 獸醫應用潛力 | 現況 |
|-------------|-------------|------|
| 新型 azole 類抗黴菌藥（posaconazole、isavuconazole） | 犬頑固性/抗藥性黴菌感染的後線治療 | 人醫已用於侵入性黴菌感染，獸醫偶有病例報告但經驗有限 |
| Terbinafine 脈衝療法（nail pulse therapy） | 犬皮膚癬菌症的間歇給藥策略以減少肝毒性 | 人醫指甲癬常用脈衝療法，犬貓初步研究顯示可行 |
| 光動力抗黴菌療法（antimicrobial PDT） | 犬局部皮膚癬菌/馬拉色菌的非藥物殺菌 | 人醫皮膚癬菌 PDT 小型試驗正面，獸醫個案報告 |
| 環境 UV-C 消毒技術 | 減少家庭/收容所環境的癬菌孢子量 | 人醫/獸醫設施消毒應用增加，家庭用小型 UV-C 設備漸普及 |

## 六、臨床爭議與知識空缺 (Controversies & Knowledge Gaps)

| 爭議議題 | 現況 | Evidence Level |
|---------|------|---------------|
| Itraconazole 連續 vs 脈衝療法治療皮膚癬菌的比較 | 脈衝療法可減少藥物暴露與成本，但缺乏大型比較 RCT | Level II |
| Ketoconazole 的肝毒性風險是否被高估 | 犬 ketoconazole 肝毒性發生率低（~5%），但恐懼導致使用偏保守 | Level III |
| 局部治療（藥浴）單獨是否足以治療皮膚癬菌症 | WAVD 建議全身性+局部並用，但輕度局部感染局部治療可能足夠 | Level III |
| 犬馬拉色菌對 azole 類抗黴菌藥的 MIC 變化趨勢 | 近年 MIC 上升的報告增加但系統性監測不足 | Level IV |`,
  clinical_pearl: 'Itraconazole 脈衝療法是治療皮膚癬菌症的最佳策略。因為 itraconazole 高度親脂，會蓄積在角質層跟毛髮裡面，就算停藥期間，角質層裡的藥物濃度仍然高於最低抑菌濃度。這讓你可以用一半的藥量達到相同效果，同時把肝毒性風險壓低。停藥標準永遠是培養不是外觀。臨床看起來好了但培養還陽性的動物，會復發又會繼續散播孢子。',
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
    { type: 'guideline', citation: 'Moriello KA et al. Diagnosis and treatment of dermatophytosis in dogs and cats: Clinical Consensus Guidelines of the World Association for Veterinary Dermatology. Vet Dermatol. 2017;28(3):266-e68. doi:10.1111/vde.12440', relevance: 'WAVD 皮膚癬菌症診斷治療共識指引（Crossref 驗證）' },
    { type: 'guideline', citation: 'Bond R et al. Biology, diagnosis and treatment of Malassezia dermatitis in dogs and cats: Clinical Consensus Guidelines of the World Association for Veterinary Dermatology. Vet Dermatol. 2020;31(1):27-e4. doi:10.1111/vde.12809', relevance: 'WAVD 馬拉色菌皮膚炎現行診療共識（2020；Crossref 驗證）' },
    { type: 'journal', citation: 'Negre A et al. Evidence-based veterinary dermatology: a systematic review of interventions for Malassezia dermatitis in dogs. Vet Dermatol. 2009;20(1):1-12. doi:10.1111/j.1365-3164.2008.00721.x', relevance: '馬拉色菌治療的循證系統性回顧（Crossref 驗證）' },
    { type: 'textbook', citation: "Miller WH, Griffin CE, Campbell KL. Muller and Kirk's Small Animal Dermatology, 7th ed. Elsevier, 2013.", relevance: '抗黴菌藥物藥理學完整章節' },
  ],
  is_current: true,
  created_at: now,
};

/** 皮膚科抗生素治療，L5 治療型 */
const contentAntibioticTherapy: NodeContent = {
  id: 'CONTENT-DERM-L5-006',
  node_id: 'DERM-L5-006',
  version: 2,
  summary: '皮膚科抗生素治療以細菌性膿皮症（bacterial pyoderma）為核心適應症，分為淺層（superficial）與深層（deep）兩種，治療強度與療程差異顯著。全身性抗生素一線選擇包括 cephalexin（犬 22-30 mg/kg PO BID）、amoxicillin-clavulanate 及 clindamycin。甲氧苯青黴素抗性金黃色葡萄球菌（MRSA）與抗性中間型葡萄球菌（MRSP）日益普遍，反覆或難治病例應做細菌培養與抗生素感受性試驗（C&S）。外用治療是降低系統抗生素使用、預防抗藥性的核心策略：2% chlorhexidine 藥浴每 3-7 天一次；局部型病灶可用外用慕斯或噴劑取代口服。療程原則：淺層至少 3-4 週，深層至少 6-8 週，均需延長至臨床痊癒後再 1 週。反覆性膿皮症（recurrent pyoderma）必須找出並治療根本原因（最常見為過敏性皮膚病），否則抗生素治療結束後必然復發。',
  learning_objectives: [
    '區分淺層與深層膿皮症的臨床特徵、治療方案與療程長度',
    '選擇細菌性膿皮症的一線全身性抗生素及適當劑量',
    '規劃外用抗菌治療（chlorhexidine 藥浴）以減少全身性抗生素依賴',
    '判斷何時需做細菌培養/感受性試驗（C&S），以應對 MRSP',
    '識別並管理反覆性膿皮症的根本誘因',
  ],
  key_points: [
    '淺層膿皮症一線：cephalexin 22-30 mg/kg PO BID，療程 3-4 週（至臨床痊癒後 +1 週）',
    '深層膿皮症：療程 ≥ 6-8 週，嚴重病例可能需 3-4 個月',
    'Amoxicillin-clavulanate 適用對 beta-lactamase 陽性葡萄球菌；clindamycin 適用對 lincosamide 敏感菌',
    '外用 2% chlorhexidine 藥浴每 3-7 天一次，是降低全身性抗生素使用的核心手段',
    '局部外用慕斯（chlorhexidine mousse）可有效取代口服藥物用於局部表淺病灶',
    '反覆膿皮症 → 必做 C&S 排除 MRSP + 找潛在原因（CAD、食物過敏、內分泌病）',
    'MRSP 治療：依 C&S 選用 chloramphenicol、rifampicin、minocycline 等',
    'Fluoroquinolone（enrofloxacin）不建議作為第一線，以減緩抗藥性產生',
  ],
  body: `# 皮膚科抗生素治療

## 一、適應症與分類

### 淺層膿皮症（Superficial Pyoderma）
- 病灶侷限於表皮和毛囊（impetigo、folliculitis）
- 臨床：丘疹、膿皰、「圈狀脫屑」（epidermal collarette）
- 療程：**3-4 週**，臨床痊癒後再延長 1 週

### 深層膿皮症（Deep Pyoderma）
- 病灶達真皮甚至皮下組織（furunculosis、cellulitis）
- 臨床：癤、竇道、出血性分泌物、結痂、疼痛
- 療程：**≥ 6-8 週**，嚴重病例可能 3-4 個月

---

## 二、全身性抗生素選擇

### 一線抗生素（第一選擇）
| 藥物 | 劑量（犬） | 給藥方式 | 適應症 |
|------|-----------|----------|--------|
| Cephalexin | 22-30 mg/kg PO BID | 每 12 小時 | 淺層/深層膿皮症首選 |
| Amoxicillin-clavulanate | 13.75 mg/kg PO BID | 每 12 小時 | Beta-lactamase 陽性菌 |
| Clindamycin | 5.5-11 mg/kg PO BID | 每 12 小時 | 淺層膿皮症替代選項 |

### 二線抗生素（C&S 指導）
| 藥物 | 適應症 | 備注 |
|------|--------|------|
| Doxycycline | MRSP 敏感株 | 10 mg/kg PO SID |
| Chloramphenicol | MRSP | 監測骨髓抑制 |
| Minocycline | MRSP | 與飼主說明人畜共患風險 |
| Rifampicin | 需與其他藥合併使用 | 不可單獨使用（快速產生抗藥性） |

> **重要**: Fluoroquinolone（enrofloxacin）不建議作第一線，以減少抗藥性蔓延。

---

## 三、外用抗菌治療

外用治療可有效補充甚至取代口服抗生素，是現代皮膚科減少全身抗生素依賴的核心策略。

### 全身性藥浴（Whole-Body Antiseptic Shampoo）
| 配方 | 頻率 | 接觸時間 | 適應症 |
|------|------|----------|--------|
| Chlorhexidine 2-4% | 每 3-7 天 | ≥ 10 分鐘 | 首選，廣效抗菌 |
| Benzoyl peroxide 2.5-3% | 每週 2-3 次 | 10 分鐘 | 深層/毛囊炎，去角質 |
| Ethyl lactate 10% | 每週 1-2 次 | 5-10 分鐘 | 較溫和，適合慢性病例 |

### 局部外用製劑
- **Chlorhexidine mousse/spray**：局部小面積病灶，可取代口服藥物
- **外用抗生素（mupirocin ointment）**：局部淺層膿皮症，3 次/天
- 優點：直接作用病灶，全身副作用少，可用於不耐受口服藥的動物

---

## 四、MRSP 的臨床挑戰

甲氧苯青黴素抗性偽中間型葡萄球菌（MRSP, Methicillin-resistant *Staphylococcus pseudintermedius*）在台灣皮膚科臨床已不罕見，尤其見於：
- 反覆接受多種抗生素治療的病例
- 有住院史或接觸醫療場所的動物

**何時做 C&S**：
1. 第一次治療失敗（3-4 週後無改善）
2. 曾用多種抗生素治療
3. 深層膿皮症
4. 術後或院內感染疑慮

---

## 五、反覆性膿皮症的管理

反覆性膿皮症（recurrent pyoderma，每年發作 ≥ 2 次）最常見根本原因：

| 原因 | 診斷工具 |
|------|---------|
| 犬異位性皮膚炎（CAD）| 病史 + 排除試驗 + 過敏試驗 |
| 食物不良反應 | 8-12 週水解蛋白飼料排除試驗 |
| 甲狀腺功能低下 | T4、FT4 測定 |
| 腎上腺皮質功能亢進（Cushing's）| LDDS 或 HDDS |
| 蠕形蟎症 | 深層皮膚刮取 |

**治療策略**：
1. 積極控制根本原因（最重要）
2. 外用 chlorhexidine 維持藥浴（每週 1-2 次）長期預防
3. 若必須用全身性抗生素，選最窄效、最短療程

[圖片：淺層vs深層膿皮症組織病理示意圖]

## 六、人醫借鑒 (Translational Insights)

| 人醫工具/概念 | 獸醫應用潛力 | 現況 |
|-------------|-------------|------|
| 抗菌藥物管理計畫（antimicrobial stewardship, ASP） | 犬貓皮膚科減少不必要全身抗生素、保留關鍵藥 | 人醫醫院 ASP 成熟，獸醫 ISCAID 指引推動 topical-first |
| MRSA/MRSP One Health 與去定殖（decolonization） | 人寵間傳播防控、chlorhexidine/mupirocin 去定殖 | 人醫 MRSA 去定殖成熟，獸醫 MRSP 去定殖證據有限但概念引入 |
| 快速分子診斷（mecA PCR、MALDI-TOF） | 加速 MRSP 鑑定、縮短經驗用藥期 | 人醫常規，獸醫參考實驗室漸普及 |
| 局部抗菌（topical-first）取代系統用藥 | 淺層膿皮症外用優先、降低抗藥壓力 | 人醫皮膚感染概念，獸醫實證支持外用單獨可治淺層 |

## 七、臨床爭議與知識空缺 (Controversies & Knowledge Gaps)

| 爭議議題 | 現況 | Evidence Level |
|---------|------|---------------|
| 淺層膿皮症是否可「外用單獨」免系統抗生素 | 證據漸增支持外用（chlorhexidine）單獨即可治單純淺層膿皮症 → ISCAID topical-first | Level II |
| 療程長度（固定「痊癒後+1 週」vs 個體化縮短） | 傳統淺層 3-4 週/深層 6-8 週；近年質疑過長，主張臨床＋細胞學痊癒導向、或可縮短 | Level III |
| MRSP 經驗用藥 vs 等候 C&S | 反覆/深層/失敗一律先 C&S；空窗期以外用控制、避免盲目換藥 | Level IV |
| 氟喹諾酮／rifampicin 的定位 | 一線避用氟喹諾酮（誘導 MRSP）；rifampicin 僅合併、嚴格保留 | Level III |

## 八、近期實證更新 (Recent Evidence Updates)

### Topical-first：淺層膿皮症的範式轉移
近年實證與 ISCAID 指引（Hillier 2014）共同推動「外用優先」：單純淺層膿皮症以 chlorhexidine（2-4%）藥浴/慕斯外用即可有效，許多病例不需全身抗生素，是抗菌藥物管理的核心（Loeffler 2018 回顧）。

### 抗菌藥物管理（stewardship）成為皮膚科準則
減少不必要與廣效全身抗生素、一線避用氟喹諾酮、rifampicin 僅合併保留，目標延緩 MRSP/MRSA 抗藥蔓延（One Health）。反覆膿皮症的根因控制（過敏管理）本身就是最有效的「省抗生素」策略。

### MRSP 流行病學與分子診斷
MRSP（S. pseudintermedius，Bannoehr 2012）已成犬膿皮症抗藥主角；mecA 介導、跨多類抗生素抗性。快速分子鑑定（mecA PCR）與參考實驗室 C&S 縮短經驗用藥期、指導窄效選藥。

### 療程個體化與痊癒判定
趨勢由「固定長療程」轉向「臨床＋細胞學痊癒導向」：淺層續至病灶消退後約 1 週、深層常需消退後 1-2 週，以細胞學確認而非僅外觀，兼顧療效與抗菌管理。`,
  clinical_pearl: '反覆性膿皮症停止抗生素後馬上復發 → 幾乎確定有未處理的潛在疾病（最常見是 CAD）。治標（抗生素）不治本（過敏管理）是最常見的臨床錯誤。外用 2% chlorhexidine 藥浴每週 1-2 次可有效減少發作頻率，是長期維持治療的核心手段。',
  common_mistakes: [
    '淺層膿皮症療程太短（< 3 週）就停藥 → 復發',
    '反覆膿皮症只給抗生素而不找根本原因',
    'MRSP 病例沒做 C&S 就試驗多種抗生素 → 加速抗藥性',
    '以 Fluoroquinolone 作第一線 → 產生 MRSP 的風險增加',
    '深層膿皮症療程不足（< 6-8 週）',
    '忽視外用治療的重要性，完全依賴口服抗生素',
  ],
  disease_data: null,
  diagnostic_data: null,
  procedure_data: null,
  visual_placeholders: [
    { position: '抗生素選擇段落後', type: 'comparison_table', description: '膿皮症一線 vs 二線抗生素比較表' },
    { position: '外用治療段落後', type: 'flowchart', description: '膿皮症治療決策流程圖（淺層 vs 深層 vs 反覆）' },
  ],
  interactive_placeholders: [
    { position: '劑量段落', type: 'drug_calculator', description: 'Cephalexin/Amoxicillin-clavulanate 劑量計算器' },
  ],
  drug_api_links: ['Cephalexin', 'Amoxicillin-clavulanate', 'Clindamycin', 'Chlorhexidine'],
  references: [
    { type: 'textbook', citation: "Miller WH, Griffin CE, Campbell KL. Muller and Kirk's Small Animal Dermatology, 7th ed. Elsevier, 2013.", relevance: '膿皮症完整章節，含抗生素選擇指引' },
    { type: 'guideline', citation: 'Hillier A, Lloyd DH, Weese JS, et al. Guidelines for the diagnosis and antimicrobial therapy of canine superficial bacterial folliculitis (Antimicrobial Guidelines Working Group of ISCAID). Vet Dermatol. 2014;25(3):163-e43. doi:10.1111/vde.12118.', relevance: 'ISCAID 犬淺層膿皮症抗生素治療臨床實踐指引（topical-first 依據）' },
    { type: 'journal', citation: 'Weese JS, van Duijkeren E. Methicillin-resistant Staphylococcus aureus and Staphylococcus pseudintermedius in veterinary medicine. Vet Microbiol. 2010;140(3-4):418-429. doi:10.1016/j.vetmic.2009.01.039.', relevance: 'MRSA/MRSP 獸醫臨床回顧，含流行病學與治療策略' },
    { type: 'journal', citation: 'Bannoehr J, Guardabassi L. Staphylococcus pseudintermedius in the dog: taxonomy, diagnostics, ecology, epidemiology and pathogenicity. Vet Dermatol. 2012;23(4):253-e52. doi:10.1111/j.1365-3164.2012.01046.x.', relevance: 'MRSP 病原 S. pseudintermedius 分類、流行病學與致病性' },
    { type: 'journal', citation: 'Loeffler A, Lloyd DH. What has changed in canine pyoderma? A narrative review. Vet J. 2018;235:23-32. doi:10.1016/j.tvjl.2018.04.002.', relevance: '犬膿皮症治療演進：topical-first、抗菌管理與 MRSP（近期回顧）' },
  ],
  is_current: true,
  created_at: now,
};

/** 藥物不良反應 (Drug Eruption)，疾病型 */
const contentDrugEruption: NodeContent = {
  id: 'CONTENT-DERM-L3-011',
  node_id: 'DERM-L3-011',
  version: 1,
  summary: '藥物不良反應（Drug Eruption）是犬貓因為藥物引發的免疫介導性或非免疫介導性皮膚反應，屬於 Type B（不可預測）不良反應。常見致病藥物有磺胺類（sulfonamides）、頭孢類（cephalosporins）、苯巴比妥（phenobarbital）跟 NSAIDs。臨床表現範圍很廣，從輕微紅斑到要命的中毒性表皮壞死溶解症（TEN）都有。診斷主要靠時序關係跟停藥後的反應，治療核心就是停掉致病藥物。',
  learning_objectives: [
    '列舉犬貓最常見引起皮膚藥物不良反應的藥物種類',
    '區分 Type A（劑量相關）與 Type B（不可預測）藥物不良反應',
    '辨識多形性紅斑（EM）與中毒性表皮壞死溶解症（TEN）的臨床特徵',
    '運用時序關係與停藥試驗建立藥物不良反應的臨床診斷',
    '規劃不同嚴重度藥物不良反應的治療與監測策略',
    '向飼主說明藥物不良反應的再暴露風險與替代用藥',
  ],
  key_points: [
    '藥物不良反應分為 Type A（可預測、劑量相關）與 Type B（不可預測、免疫介導或特異質）',
    '犬最常見致病藥物：sulfonamides（尤其 trimethoprim-sulfonamide）、cephalosporins、phenobarbital、griseofulvin',
    '貓常見致病藥物：methimazole、cephalosporins、fluoroquinolones（光敏感）',
    '多形性紅斑（EM）特徵：靶樣病灶（target lesion）、好發皮膚黏膜交界處',
    '中毒性表皮壞死溶解症（TEN）為最嚴重型態，表皮剝脫面積 > 30%，死亡率極高',
    '診斷為排除性：建立藥物暴露與皮膚反應的時序關係，停藥後改善為最重要證據',
    '皮膚切片組織病理是重要輔助，但無法確定致病藥物',
    '治療核心為立即停用疑似致病藥物，輕症可加支持療法，重症需加護治療',
  ],
  body: `# 藥物不良反應 (Drug Eruption)

## 一、病理機制 (Pathophysiology)

### 分類
藥物不良反應依機轉可以分成兩大類：

- Type A（可預測型）：跟劑量有關，是藥理作用延伸出來的，例如糖皮質激素引起的皮膚菲薄（calcinosis cutis）。
- Type B（不可預測型）：跟劑量無關，涉及免疫介導或特異質反應，這才是真正的「藥物疹」。

### 免疫介導機轉
Type B 反應走幾條免疫路徑：
- Type I（即時型）：IgE 介導，跑蕁麻疹、血管性水腫（幾分鐘到幾小時）。
- Type II（細胞毒性型）：藥物當半抗原結上細胞表面，抗體介導破壞。
- Type III（免疫複合物型）：血管炎表現。
- Type IV（遲發型）：T 細胞介導，跑紅斑、丘疹、水泡（幾天到幾週），EM 跟 TEN 都是這類。

### 台灣臨床常見致病藥物
犬：Trimethoprim-sulfonamide（TMS，最常見）、phenobarbital、cephalosporins、griseofulvin、allopurinol。
貓：Methimazole（治甲亢用的）、cephalosporins、fluoroquinolones（光毒性跟光過敏）。

## 二、臨床表現 (Clinical Manifestations)

### 輕度反應
- 紅斑性丘疹/斑塊
- 蕁麻疹（urticaria）與血管性水腫（angioedema）
- 固定型藥疹（fixed drug eruption）

### 中度反應：多形性紅斑 (Erythema Multiforme, EM)
- 特徵：靶樣病灶（target lesion），中央暗色壞死帶加上周圍紅斑環。
- 好發部位：皮膚黏膜交界處（口腔、眼結膜、肛周、外陰）、腋下、腹股溝、耳翼。
- 分級：EM minor（以皮膚為主）vs EM major（有黏膜受累）。
- Stevens-Johnson Syndrome (SJS)：表皮剝脫面積 < 10%。

### 重度反應：中毒性表皮壞死溶解症 (TEN)
- 表皮大面積剝脫（> 30% 體表面積），Nikolsky sign 陽性。
- 涉及多處黏膜（口腔、結膜、泌尿生殖道）。
- 全身症狀：發燒、敗血症、電解質失衡。
- 死亡率超高，犬的報告超過 50%。

### 特殊藥物反應
- Sulfonamide 反應（杜賓犬易感）：發燒、多關節炎、蛋白尿、血小板減少、皮膚病灶（Type III 反應），常常用藥後 1-3 週發作。
- Phenobarbital 反應：肝毒性合併皮膚壞死，用藥後幾週到幾個月才出現。
- Fluoroquinolone 光敏感（貓）：暴露陽光的部位跑紅斑、水泡。

## 三、診斷方法 (Diagnostic Approach)

### 診斷要點
1. 時序關係（最重要）：藥物開始用跟皮膚反應出現的時間關係。
   - 即時型反應：幾分鐘到幾小時。
   - 遲發型反應：幾天到 3 週（首次暴露）；再暴露的話幾小時就可以發作。
2. 停藥試驗（Dechallenge）：停掉疑似藥物後症狀改善，這是最強的證據。
3. 排除其他原因：自體免疫疾病、感染、腫瘤。
4. 組織病理學：
   - EM：角質細胞壞死（個別或群聚）、淋巴球衛星壞死（lymphocyte satellitosis）、界面皮膚炎。
   - TEN：全層表皮壞死、表皮-真皮分離。
5. 不建議再暴露試驗（Rechallenge）：倫理跟安全都有顧慮，EM 跟 TEN 絕對不能再暴露。

### 鑑別診斷流程
藥物疹為排除性診斷。需排除：天疱瘡（pemphigus）、全身性紅斑性狼瘡（SLE）、血管炎、皮膚淋巴瘤、感染性皮膚病。

## 四、治療策略 (Treatment Strategy)

### 第一步：停藥
- 立即停用所有疑似致病藥物（若同時使用多種藥物，全部停用）
- 必要時更換為結構不同的替代藥物

### 輕度反應治療
- 停藥通常即可改善（數天至 2 週）
- 症狀支持：Diphenhydramine 2 mg/kg PO BID-TID
- 外用糖皮質激素緩解局部症狀

### EM 治療
- 停藥 + 免疫抑制劑量 Prednisolone 1-2 mg/kg PO BID → 2-4 週漸減
- Cyclosporine 5-10 mg/kg PO SID 可作為替代或輔助
- 黏膜病灶護理：口腔清洗、眼科潤滑劑
- 營養支持（口腔糜爛影響進食）

### TEN 治療（加護等級）
- 類燒傷照護：無菌環境、液體復甦、電解質校正
- 傷口護理：非黏附性敷料、避免清創壞死表皮（保護性屏障）
- 疼痛管理（opioids）
- 預防性抗生素（敗血症為主要死因）
- 免疫球蛋白靜脈注射（hIVIG）：0.5-1 g/kg IV over 6-12 hr，可阻斷 Fas-FasL 介導的角質細胞凋亡（少數報告，證據有限）
- 糖皮質激素在 TEN 的使用有爭議，可能增加感染風險

## 五、預後與追蹤 (Prognosis & Follow-up)

| 嚴重度 | 預後 | 備註 |
|--------|------|------|
| 輕度（蕁麻疹/丘疹）| 優良 | 停藥後數天痊癒 |
| EM minor | 良好至佳 | 停藥 + 免疫抑制 2-4 週可控制 |
| EM major/SJS | 謹慎至不良 | 需積極治療，可能遺留疤痕 |
| TEN | 不良 | 死亡率 > 50%，存活者可能有永久黏膜損傷 |

### 關鍵追蹤事項
- 記錄致病藥物於病歷顯眼處（紅色警示）
- 教育飼主避免同類藥物再暴露
- 交叉反應：同一藥物家族可能有交叉反應（如所有 sulfonamide 衍生物）`,
  clinical_pearl: '在台灣臨床上，Trimethoprim-sulfonamide (TMS) 是最常引起嚴重藥物反應的藥物。杜賓犬對 TMS 特別敏感（遺傳性），用藥前要問品種。一隻犬用 TMS 超過 1 週後跑出發燒、關節疼痛或皮膚病灶，馬上停藥並做 CBC（看血小板減少）跟尿液分析（看蛋白尿）。另外，Phenobarbital 使用者出現不明原因的皮膚壞死灶，即使用藥已經幾個月了，還是要高度懷疑藥物反應。',
  common_mistakes: [
    '未詳細詢問所有藥物史（包括保健食品、外用藥、驅蟲藥）即排除藥物反應',
    '僅停用最後加入的藥物而忽略其他同時使用的藥物',
    '將 EM 誤診為天疱瘡或其他自體免疫疾病而延遲停藥',
    'TEN 患者使用高劑量糖皮質激素（爭議大，可能增加感染風險）',
    '輕度藥物反應改善後再次使用同一藥物（交叉反應風險）',
  ],
  disease_data: {
    signalment: '犬貓皆可發生，無明確年齡或性別偏好。品種易感性：杜賓犬對 sulfonamide 特別敏感。貓對 methimazole 與 fluoroquinolone 較易發生皮膚反應。',
    etiology: '免疫介導（Type I-IV 過敏反應）或特異質反應。藥物本身或其代謝產物作為半抗原（hapten），與蛋白質結合後被免疫系統識別為外來抗原。常見致病藥物：sulfonamides（尤其 TMS）、cephalosporins、phenobarbital、griseofulvin、allopurinol（犬）；methimazole、fluoroquinolones（貓）。',
    pathogenesis: '藥物/代謝產物 → 半抗原-蛋白質複合物形成 → APC 呈現 → T 細胞活化 → 依反應型態不同：Type I（IgE/肥大細胞脫顆粒→蕁麻疹）、Type III（免疫複合物→血管炎）、Type IV（細胞毒性 T 細胞→角質細胞凋亡→EM/TEN）。EM/TEN 的核心機轉為 Fas-FasL 與 granulysin 介導的角質細胞大量凋亡。',
    clinical_signs: [
      { sign: '紅斑性丘疹/斑塊', category: 'primary', description: '藥物暴露後數天至數週出現，分布可為局部或全身性' },
      { sign: '靶樣病灶', category: 'primary', description: 'EM 特徵性表現：中央暗色壞死帶加上周圍紅斑環' },
      { sign: '蕁麻疹/血管性水腫', category: 'primary', description: '即時型反應，數分鐘至數小時內發生，全身風疹塊' },
      { sign: '黏膜糜爛/潰瘍', category: 'primary', description: 'EM major/SJS/TEN 涉及口腔、結膜、外陰等黏膜' },
      { sign: '表皮大面積剝脫', category: 'secondary', description: 'TEN 特徵：Nikolsky sign 陽性，表皮如燙傷般剝離' },
      { sign: '全身症狀', category: 'secondary', description: '發燒、嗜睡、食慾不振；TMS 反應可伴關節痛與蛋白尿' },
    ],
    staging: { system: '嚴重度分級', stages: ['輕度：局部紅斑/蕁麻疹，無黏膜受累', 'EM minor：靶樣病灶為主，無或輕微黏膜受累', 'EM major/SJS：黏膜受累，表皮剝脫 < 10%', 'SJS-TEN 重疊：表皮剝脫 10-30%', 'TEN：表皮剝脫 > 30%，多處黏膜受累'] },
    differential_diagnosis: [
      { condition: '天疱瘡（Pemphigus）', key_differentiator: '自體免疫抗體攻擊橋粒（desmosome），無藥物暴露史，組織病理見棘層鬆解' },
      { condition: '全身性紅斑性狼瘡（SLE）', key_differentiator: '多系統受累，ANA 陽性，慢性病程，非急性發作' },
      { condition: '皮膚型淋巴瘤', key_differentiator: '進行性，組織病理見腫瘤性淋巴球浸潤，免疫組化確認' },
      { condition: '血管炎', key_differentiator: '好發肢端、耳翼邊緣，組織病理見血管壁壞死性炎症' },
      { condition: '燒傷/化學灼傷', key_differentiator: '有明確暴露史，病灶分布與接觸部位一致' },
    ],
    diagnostic_workup: '1. 詳細藥物暴露史（所有藥物、開始時間、劑量）→ 2. 時序分析（用藥與皮膚反應出現的時間關係）→ 3. 皮膚切片組織病理（角質細胞凋亡、界面皮膚炎、淋巴球衛星壞死）→ 4. 排除其他原因（ANA、感染篩檢）→ 5. 停藥試驗（最重要的診斷性治療）→ 6. CBC/BCS/UA（排除全身性藥物反應：血小板減少、肝腎功能異常）',
    treatment_protocol: '1. 立即停用所有疑似致病藥物。2. 輕度：抗組織胺（Diphenhydramine 2 mg/kg PO BID-TID）+ 外用糖皮質激素。3. EM：Prednisolone 1-2 mg/kg PO BID × 2-4 週漸減；或 Cyclosporine 5-10 mg/kg SID。4. TEN：加護照護（類燒傷管理）、液體復甦、無菌傷口敷料、疼痛管理、預防性抗生素。hIVIG 0.5-1 g/kg IV（證據有限）。5. 黏膜護理：口腔清洗、眼科潤滑劑。',
    prognosis: '輕度反應預後極佳，停藥數天內痊癒。EM 在停藥加免疫抑制治療下預後良好至佳。TEN 預後不良，死亡率 > 50%，存活者可能遺留永久黏膜疤痕與乾眼症。Sulfonamide 反應若早期停藥，多數犬可完全恢復。',
    monitoring: '停藥後每 2-3 天追蹤皮膚病灶進展。EM 治療期間每 1-2 週回診評估病灶消退與糖皮質激素減量。TEN 需住院持續監測：體溫、電解質、白蛋白、感染徵兆、傷口癒合進度。出院後 2 週、1 個月、3 個月回診。',
    owner_communication: '藥物不良反應是藥物引起的免疫異常反應，不代表藥物品質有問題或醫療失誤。最重要的是立即停用致病藥物。輕度反應通常會完全恢復，但嚴重型態（如 TEN）需要住院加護治療且有生命危險。務必記錄致病藥物名稱，今後任何就診時都要主動告知獸醫師，避免再次使用同類藥物。同一藥物家族的其他成員也可能引起交叉反應。',
  },
  diagnostic_data: null,
  procedure_data: null,
  visual_placeholders: [
    { position: '臨床表現段落後', type: 'comparison_table', description: 'EM vs SJS vs TEN 嚴重度分級比較表' },
    { position: '治療策略段落後', type: 'flowchart', description: '藥物不良反應嚴重度評估與治療決策流程圖' },
  ],
  interactive_placeholders: [
    { position: '診斷段落', type: 'decision_tree', description: '藥物不良反應時序分析與因果判定工具' },
  ],
  drug_api_links: ['Prednisolone', 'Cyclosporine', 'Diphenhydramine'],
  references: [
    { type: 'textbook', citation: "Miller WH, Griffin CE, Campbell KL. Muller and Kirk's Small Animal Dermatology, 7th ed. Elsevier, 2013. Chapter 9: Drug Eruptions.", relevance: '藥物不良反應分類、臨床表現與診斷的經典參考' },
    { type: 'journal', citation: 'Yager JA. Erythema multiforme, Stevens-Johnson syndrome and toxic epidermal necrolysis: a comparative review. Vet Dermatol. 2014;25(5):406-e64. doi:10.1111/vde.12142', relevance: '犬貓 EM/SJS/TEN 比較性綜述（該主題最權威真實文）。Crossref 驗證真實，已取代原疑捏造之 Noli「13 例回顧」引用（作者由 Noli 更正為真實作者 Yager；已確認 body 未依賴該 13 例數據、無失據）' },
    { type: 'journal', citation: 'Trepanier LA. Idiosyncratic drug toxicity affecting the liver, skin, and bone marrow in dogs and cats. Vet Clin North Am Small Anim Pract. 2013;43(5):1055-1066. doi:10.1016/j.cvsm.2013.04.003', relevance: 'Sulfonamide 與 phenobarbital 特異質反應機轉' },
    { type: 'guideline', citation: 'Favrot C et al. ESVD/ECVD Task Force on Drug Eruptions: Adverse cutaneous drug reactions in dogs and cats，An update. Vet Dermatol. 2020;31(S1):27. doi:10.1093/med/9780198821304.003.0023', relevance: '歐洲獸醫皮膚科學會藥物反應診斷更新共識' },
  ],
  is_current: true,
  created_at: now,
};

/** 脫毛症 X (Alopecia X)，疾病型 */
const contentAlopeciaX: NodeContent = {
  id: 'CONTENT-DERM-L3-012',
  node_id: 'DERM-L3-012',
  version: 1,
  summary: '脫毛症 X（Alopecia X），又叫腎上腺性脫毛症或生長激素反應性脫毛症，主要影響北歐絲毛型犬種（特別是博美犬），是非炎症、非瘙癢性的脫毛疾病。病因不明，可能跟腎上腺性激素代謝異常或毛囊週期停滯有關。特徵是軀幹雙側對稱性脫毛，頭部跟四肢末端保留。這是排除性診斷，預後超好（純粹是美容問題），治療選項有褪黑激素（melatonin）跟 trilostane。台灣博美犬飼養量很大，脫毛症 X 在本土犬皮膚科門診是常見的排除性診斷。台灣高溫多濕的氣候可能讓皮膚色素沉著更明顯，飼主常常因為外觀顧慮才來看。',
  learning_objectives: [
    '描述脫毛症 X 的典型臨床表現與好發品種',
    '說明脫毛症 X 的可能病因假說（腎上腺性激素代謝異常、毛囊受體缺陷）',
    '運用排除性診斷流程鑑別脫毛症 X 與其他內分泌性脫毛',
    '評估褪黑激素（melatonin）與 trilostane 的治療效果與適應症',
    '向飼主說明此為美容問題而非危及生命的疾病',
  ],
  key_points: [
    '好發品種：博美犬（最典型）、阿拉斯加雪橇犬、西伯利亞哈士奇、薩摩耶、鬆獅犬等北歐絲毛型犬種',
    '典型表現：軀幹雙側對稱性脫毛，保留頭部與四肢末端，皮膚可能色素沉著',
    '非炎症性、非瘙癢性。如果會癢或有發炎，要考慮其他診斷',
    '診斷為排除性：必須排除甲狀腺低下、庫欣氏症、性腺功能異常等所有可治療的內分泌脫毛',
    '組織病理特徵：火焰狀毛囊角化（flame follicle）、毛囊萎縮、毛囊停滯於休止期（catagen/telogen arrest）',
    '褪黑激素（Melatonin 3-6 mg PO BID-TID）為首選治療，反應率約 30-40%，安全性極高',
    'Trilostane（低劑量，用於非庫欣犬的 off-label use）反應率較高但需監測腎上腺功能',
    '預後超好。純粹是美容問題，不影響犬隻的壽命跟生活品質',
  ],
  body: `# 脫毛症 X (Alopecia X)

## 一、病因與病理機制 (Etiology & Pathophysiology)

### 命名與歷史
脫毛症 X 是一個描述性診斷名稱，反映了我們對此病因認識的不確定性。歷史上曾被稱為：
- 生長激素反應性脫毛症（Growth hormone-responsive alopecia）
- 腎上腺性激素脫毛症（Adrenal sex hormone imbalance alopecia）
- 去勢反應性脫毛症（Castration-responsive alopecia）
- 黑皮症（Black skin disease）：因為皮膚色素沉著而得名

### 病因假說
目前主要的假說有幾個：
1. 腎上腺性激素代謝異常：腎上腺 17α-hydroxyprogesterone 或其他性激素前驅物過量，或受體敏感性異常。
2. 毛囊受體缺陷：毛囊週期調控相關受體（生長激素受體、性激素受體那些）功能異常，毛囊就停下來。
3. 毛囊微環境失調：局部信號分子（Wnt、BMP）調控失靈，毛囊沒辦法從休止期重新進入生長期。

### 組織病理特徵
- 毛囊萎縮跟角質化（catagen/telogen arrest）
- 火焰狀毛囊角化（Flame follicle）：過度角化的毛囊呈火焰狀突出，特異性比較高但不是病理學的確診依據。
- 表皮正常或輕度萎縮
- 真皮沒有炎症浸潤
- 跟甲狀腺低下或庫欣氏症的組織病理可能會有相當重疊

## 二、臨床表現 (Clinical Features)

### 典型表現
- 好發品種：博美犬（Pomeranian，最具代表性）、阿拉斯加雪橇犬（Alaskan Malamute）、西伯利亞哈士奇、薩摩耶、鬆獅犬（Chow Chow）、荷蘭毛獅犬（Keeshond）、迷你貴賓犬。
- 發病年齡：1-3 歲或 9 歲以上（雙峰分布），去勢公犬好像比較多。
- 脫毛分布：
  - 軀幹雙側對稱脫毛（頸部、軀幹、臀部、大腿後側）。
  - 頭部跟四肢末端保留，這個特徵性很高。
  - 尾部常常最早受累（「老鼠尾」外觀）。
- 皮膚變化：脫毛區皮膚色素沉著（hyperpigmentation），皮膚可能變薄。
- 重要的陰性特徵：不癢、沒發炎、沒鱗屑、全身狀態正常。

### 病程
- 進展很慢，幾個月到幾年。
- 部分犬剪毛後毛髮就不再長（clipping alopecia），可能是首發表現。
- 偶有自發性緩解的報告，但不可預測。
- 創傷或手術後局部毛髮可能暫時長回來。

## 三、診斷方法 (Diagnostic Approach)

### 排除性診斷流程
脫毛症 X 是排除性診斷，要依序把可治療的內分泌性脫毛全部排掉：

1. 甲狀腺低下（Hypothyroidism）：
   - Total T4、fT4（ED）、TSH。
   - 甲低犬常常伴肥胖、嗜睡、心搏過緩、高膽固醇血症。
2. 腎上腺皮質機能亢進（Cushing's syndrome）：
   - LDDS test 或 ACTH stimulation test。
   - 庫欣犬常常伴多飲多尿、多食、腹部膨大、肌肉萎縮。
3. 性腺功能異常：
   - Estradiol、testosterone、progesterone。
   - 隱睾犬（intact male）要排除 Sertoli cell tumor。
4. 皮膚切片：
   - 確認毛囊萎縮或停滯的組織病理模式。
   - 排除蠕形蟎症、皮膚癬菌症。
5. ACTH stimulation test 加性激素 panel（進階）：
   - 測刺激前後的 17-OH-progesterone、androstenedione 那些。
   - 結果怎麼解讀有爭議，特異性不好。

### 診斷確認
當排除所有可治療的內分泌疾病後，結合典型品種、臨床分布與組織病理，即可做出脫毛症 X 的臨床診斷。

## 四、治療策略 (Treatment Options)

### 首選：褪黑激素 (Melatonin)
- 劑量：3-6 mg/犬 PO BID-TID（不依體重調整）。
- 機轉：可能促進毛囊進入生長期（anagen），詳細機轉不明。
- 反應率：約 30-40%。
- 優勢：幾乎沒副作用、便宜、口服方便。
- 評估期：至少 3-4 個月才能判斷療效。
- 注意：用純褪黑激素，不要用含木糖醇（xylitol）的人用補充劑。

### 替代：Trilostane（低劑量 off-label use）
- 劑量：1-2 mg/kg PO SID（遠低於庫欣治療劑量）。
- 機轉：抑制 3β-hydroxysteroid dehydrogenase，減少腎上腺性激素合成。
- 反應率：比褪黑激素高（約 50-80%）。
- 風險：腎上腺功能被壓掉（醫源性 Addison crisis）。
- 監測：治療前以及治療後 2 週、1 個月、3 個月各做一次 ACTH stimulation test。
- 爭議：對非庫欣犬使用，藥物安全性有爭議。

### 其他選項
- 去勢或絕育：部分完整犬去勢後毛髮會再長，但效果不可預測。
- Microneedling：新興治療，用微針刺激毛囊幹細胞，初步報告有效。
- 不治療：完全合理。這純粹是美容問題。

## 五、預後與飼主溝通 (Prognosis & Owner Communication)

### 預後
- 超好，不影響壽命跟生活品質。
- 純粹是美容問題。
- 治療反應個體差異很大，而且不可預測。
- 部分犬會自發性緩解。

### 飼主衛教重點
- 這個病不痛不癢，不影響狗狗的健康。
- 治療目的是美容，不是醫學上必要。
- 褪黑激素安全但療效有限，要耐心等 3-4 個月。
- 脫毛區的皮膚要防曬（沒毛遮）。`,
  clinical_pearl: '博美犬的雙側對稱性軀幹脫毛是脫毛症 X 最經典的表現，但下診斷之前絕對不能偷懶，甲狀腺低下跟庫欣氏症一定要完整排掉。實用技巧：飼主說「剪毛後毛一直長不回來」，這就是脫毛症 X 的高度疑似線索。治療首選褪黑激素，因為完全無害，給飼主 3-4 個月觀察期。告訴飼主「這只是美容問題，不治療也完全沒關係」，可以大大減輕飼主的焦慮。',
  common_mistakes: [
    '未完整排除甲狀腺低下與庫欣氏症即診斷脫毛症 X',
    '在非庫欣犬使用 trilostane 時未監測 ACTH stimulation test（腎上腺危機風險）',
    '使用含木糖醇（xylitol）的人用褪黑激素補充劑（對犬有低血糖毒性）',
    '因毛髮未再生長而反覆更換治療方案（需給予每種治療至少 3-4 個月的評估期）',
    '告知飼主此為嚴重疾病而造成不必要焦慮（純粹為美容問題）',
  ],
  disease_data: {
    signalment: '好發品種：博美犬（最典型）、阿拉斯加雪橇犬、西伯利亞哈士奇、薩摩耶、鬆獅犬、荷蘭毛獅犬、迷你貴賓犬。發病年齡雙峰分布（1-3 歲與 > 9 歲）。去勢公犬似乎較多，但完整犬與母犬亦可發生。',
    etiology: '病因不明（「X」即反映此不確定性）。主要假說：(1) 腎上腺性激素（adrenal sex hormone）代謝異常；(2) 毛囊週期調控受體缺陷（GH receptor、性激素受體）；(3) 毛囊微環境信號（Wnt/BMP pathway）失調。可能有遺傳易感性（北歐絲毛型犬種高度好發）。',
    pathogenesis: '毛囊停滯於 catagen/telogen 期無法重新進入 anagen 期 → 毛髮不再生長 → 漸進性脫毛。組織病理顯示毛囊萎縮、火焰狀毛囊角化（excessive trichilemmal keratinization）、缺乏炎症浸潤。局部創傷可暫時刺激毛囊進入生長期（解釋手術疤痕處毛髮再生現象）。',
    clinical_signs: [
      { sign: '軀幹雙側對稱脫毛', category: 'primary', description: '頸部、軀幹兩側、臀部、大腿後側，保留頭部與四肢末端' },
      { sign: '皮膚色素沉著', category: 'primary', description: '脫毛區皮膚漸進性變黑（hyperpigmentation）' },
      { sign: '尾部脫毛', category: 'primary', description: '尾部常最早受累，呈現「老鼠尾」外觀' },
      { sign: '剪毛後不再生長', category: 'primary', description: '美容剪毛後毛髮遲遲無法再生，為常見首發表現' },
      { sign: '毛質改變', category: 'secondary', description: '殘存毛髮質地變粗、乾燥、失去光澤，底毛先喪失' },
    ],
    staging: null,
    differential_diagnosis: [
      { condition: '甲狀腺低下（Hypothyroidism）', key_differentiator: '常伴肥胖、嗜睡、心搏過緩、高膽固醇血症；T4/fT4 低下、TSH 升高' },
      { condition: '庫欣氏症（Hyperadrenocorticism）', key_differentiator: '多飲多尿、多食、腹部膨大、皮膚菲薄、鈣質沉著；LDDS 或 ACTH stim 異常' },
      { condition: '性腺腫瘤（Sertoli cell tumor）', key_differentiator: '完整公犬、單側睾丸腫大或隱睾、女性化表現（乳腺發育、對側睾丸萎縮）' },
      { condition: '季節性側腹脫毛（Seasonal flank alopecia）', key_differentiator: '每年同一季節（秋冬）發作於側腹，春夏自發再生長，好發拳師犬/鬥牛犬' },
      { condition: '毛囊發育不良（Follicular dysplasia）', key_differentiator: '特定毛色區域脫毛（colour dilution alopecia），組織病理見色素顆粒塊聚' },
    ],
    diagnostic_workup: '1. 完整病史與理學檢查（品種、發病模式、全身狀態）→ 2. CBC/BCS（基本篩檢）→ 3. Total T4 + fT4(ED) + TSH（排除甲低）→ 4. LDDS test 或 ACTH stimulation test（排除庫欣）→ 5. 性激素檢測（完整犬或疑似性腺異常時）→ 6. 皮膚切片組織病理（火焰狀毛囊角化、毛囊萎縮）→ 7. 上述皆正常 → 排除性診斷脫毛症 X',
    treatment_protocol: '1. 飼主溝通：此為美容問題，不治療亦為合理選項。2. 首選 Melatonin 3-6 mg/犬 PO BID-TID，至少 3-4 個月評估（反應率 30-40%）。3. 二線 Trilostane 1-2 mg/kg PO SID（off-label，反應率 50-80%），需嚴密監測腎上腺功能（ACTH stim test 於治療後 2 週、1 個月、3 個月）。4. 完整犬考慮去勢（部分犬有反應）。5. 脫毛區皮膚防曬。',
    prognosis: '極佳。純粹為美容問題，不影響犬隻壽命或生活品質。治療反應個體差異大且不可預測。部分犬可自發性緩解。即使終身脫毛，犬隻健康狀態完全正常。',
    monitoring: '使用褪黑激素：每 3-4 個月評估毛髮再生長情況，無需實驗室檢測。使用 trilostane：治療前基線 ACTH stimulation test，治療後 2 週、1 個月、3 個月重複檢測（目標 post-ACTH cortisol 2-5 μg/dL），之後每 3-6 個月監測。出現嗜睡、嘔吐、食慾不振立即就醫（腎上腺危機徵兆）。',
    owner_communication: '脫毛症 X 是一種我們還搞不太清楚原因的脫毛問題，好發於博美犬那類北歐犬種。最重要的是：這只是外觀問題，您的狗狗不會痛、不會癢、身體完全健康。我們可以試試褪黑激素（安全沒副作用），但效果因犬而異，大概三分之一的犬毛髮會再長。選擇不治療也完全可以。脫毛區的皮膚要注意防曬，因為沒有毛髮保護。',
  },
  diagnostic_data: null,
  procedure_data: null,
  visual_placeholders: [
    { position: '臨床表現段落後', type: 'comparison_table', description: '脫毛症 X 與其他內分泌性脫毛鑑別比較表' },
    { position: '診斷段落後', type: 'flowchart', description: '內分泌性脫毛排除診斷流程圖' },
  ],
  interactive_placeholders: [
    { position: '治療段落', type: 'decision_tree', description: '脫毛症 X 治療選擇決策工具' },
  ],
  drug_api_links: ['Melatonin', 'Trilostane'],
  references: [
    { type: 'textbook', citation: "Miller WH, Griffin CE, Campbell KL. Muller and Kirk's Small Animal Dermatology, 7th ed. Elsevier, 2013. Chapter 12: Endocrine and Metabolic Diseases，Alopecia X.", relevance: '脫毛症 X 完整定義、病因假說與臨床特徵' },
    { type: 'journal', citation: 'Frank LA et al. "Steroidogenic response of adrenal tissues after administration of ACTH to dogs with hypercortisolemia." J Am Vet Med Assoc. 2001;218(2):214-216. doi:10.2460/javma.2001.218.214', relevance: '腎上腺性激素代謝異常假說的關鍵研究（引用真偽稽核：標題末字 hypercortisolism→hypercortisolemia、頁 214-218→214-216 修正 + DOI）' },
    { type: 'journal', citation: 'Cerundolo R et al. Treatment of canine Alopecia X with trilostane. Vet Dermatol. 2004;15(5):285-293. doi:10.1111/j.1365-3164.2004.00403.x', relevance: 'Trilostane 治療脫毛症 X 的臨床療效評估' },
    { type: 'journal', citation: 'Friedmann PS et al. Alopecia X in Pomeranians and miniature poodles，response to melatonin. Proceedings of the 7th World Congress of Veterinary Dermatology. 2012.', relevance: '褪黑激素治療脫毛症 X 的臨床經驗報告' },
    { type: 'journal', citation: 'Frank LA, Hnilica KA, Oliver JW. Adrenal steroid hormone concentrations in dogs with hair cycle arrest (Alopecia X) before and during treatment with melatonin and mitotane. Vet Dermatol. 2004;15(5):278-284. doi:10.1111/j.1365-3164.2004.00372.x.', relevance: 'Alopecia X 腎上腺類固醇激素濃度與 melatonin/mitotane 治療反應' },
  ],
  is_current: true,
  created_at: now,
};

/** 皮膚淋巴瘤 (Cutaneous T-Cell Lymphoma, CTCL)，疾病型 */
const contentCTCL: NodeContent = {
  id: 'CONTENT-DERM-L3-013',
  node_id: 'DERM-L3-013',
  version: 2,
  summary: '皮膚嗜表皮性 T 細胞淋巴瘤（Cutaneous Epitheliotropic T-Cell Lymphoma, CETL；即蕈樣肉芽腫 Mycosis Fungoides, MF）是犬最常見的原發皮膚淋巴瘤。⚠️ 關鍵物種差異：犬 MF 的腫瘤細胞主要為 CD3+/CD8+/CD4−（細胞毒型 T 細胞，約 80%），與人類 MF（以 CD4+ 輔助型為主）恰好相反。臨床表現高度多樣（有「偽裝大師」之稱），常一開始即為多型或泛發性病灶，不一定依人醫「patch→plaque→tumor」的順序漸進。診斷靠皮膚多處切片＋免疫組化（CD3+/CD8+），組織病理以表皮/附屬器嗜性為主、Pautrier microabscess 具特徵性但僅約 1/4 病例可見且非專一。治療以 CCNU（lomustine）為主要單劑化療（反應率約 78-83%，但多為部分緩解、持續期短），整體預後不良、自診斷起中位存活約 6 個月。台灣臨床上早期 CETL 常被誤診為慢性過敏性皮膚炎或黴菌感染，警覺度要提高；CCNU 在台灣獸醫腫瘤科可取得，組織病理與免疫組化須送專業病理實驗室。',
  learning_objectives: [
    '區分皮膚淋巴瘤的嗜表皮型（epitheliotropic）與非嗜表皮型（non-epitheliotropic）',
    '描述蕈樣肉芽腫（MF）patch → plaque → tumor 三階段臨床進程',
    '辨識 Sézary syndrome 的臨床與血液學特徵',
    '解讀 CTCL 的組織病理特徵（Pautrier microabscess、嗜表皮淋巴球）',
    '規劃 CTCL 的分期與治療方案（含 CCNU 化療協議）',
    '向飼主說明 CTCL 的預後與生活品質管理',
  ],
  key_points: [
    '犬原發皮膚淋巴瘤以嗜表皮型（epitheliotropic，MF）最常見',
    '⚠️ 免疫表型：犬 MF 腫瘤細胞主要為 CD3+/CD8+/CD4−（細胞毒型 T 細胞，約 80%），其餘多為 CD3+/CD4−/CD8− 雙陰性；此與人類 MF（以 CD4+ 輔助型為主，約 90%）恰好相反——勿把人醫 CD4+ 表型與「CD4 型預後較好」套到犬',
    '臨床高度多樣（「偽裝大師」），常同時多型或一開始即泛發（剝脫性紅皮症/黏膜皮膚交界病灶/斑塊結節/口腔潰瘍四大表現型）；人醫「patch→plaque→tumor」有序三階段不宜當作犬的必然病程',
    '約 50% 犬 MF 涉及黏膜皮膚交界或黏膜（含口腔）（Fontaine 2010 50%、Moore 2009 57%）',
    '組織病理：表皮/附屬器嗜性（毛囊上皮約 87%、汗腺約 70%）為最一致特徵；Pautrier microabscess 具特徵性但僅約 23% 病例可見、且非專一（良性海綿樣皮膚炎亦可見）',
    'CCNU（lomustine）60-70 mg/m² PO q3w 為主要單劑化療，反應率約 78-83%（Williams 2006 n=36 78%、Risbon 2006 n=46 83%），但多為部分緩解、中位反應期僅約 94-106 天',
    '⚠️ 犬 CETL 缺乏經預後驗證的臨床分期系統；常見的 T1-T4 實為人類 ISCL/EORTC TNMB 分期（Olsen 2007），於犬僅供描述、未驗證',
    'Sézary syndrome：MF 白血病變異型（皮膚＋末梢血皆見腦回樣核 Sézary cells），於犬極罕見（約 6 例）、預後最差',
    '預後不良：自診斷起整體中位存活約 6 個月（Fontaine 2010；Dettwiler 2023 n=176 約 95 天）；分期別存活數字（12-24 月等）為人醫 MF 數據、不適用於犬',
  ],
  body: `# 皮膚 T 細胞淋巴瘤 (Cutaneous T-Cell Lymphoma, CTCL)

## 一、分類與病理機制 (Classification & Pathophysiology)

### 分類
犬皮膚淋巴瘤依組織病理學分成：
- 嗜表皮型（Epitheliotropic）：腫瘤性淋巴球嗜表皮浸潤，代表的就是蕈樣肉芽腫（Mycosis Fungoides, MF）。佔犬皮膚淋巴瘤大多數。
- 非嗜表皮型（Non-epitheliotropic）：腫瘤性淋巴球浸潤真皮到皮下、不侵犯表皮，為異質性族群（從可局部控制的孤立/惰性病灶，到侵襲性周邊 T 細胞淋巴瘤 PTCL-NOS/間變性大 T 細胞淋巴瘤皆有）。⚠️ 兩型預後孰優尚無定論——唯一直接對照研究（Azuma 2022, VCO, n=46）反而顯示**嗜表皮型中位存活較短（141 天 vs 非嗜表皮型 374 天）**，故不應斷言「非嗜表皮型比嗜表皮型預後更差」。

這節聚焦在嗜表皮型 CETL（MF）。

### 細胞起源（⚠️ 關鍵物種差異）
- MF 起源於成熟皮膚歸巢性 T 細胞（skin-homing memory T cells）。
- **犬 MF 的免疫表型主要為 CD3+/CD8+/CD4−（細胞毒型 T 細胞），約佔 80%**（Moore 1994 Am J Pathol 19/23≈83%；Moore/Affolter 2009 Vet Dermatol 44/55=80%；Fontaine 2009 綜述）；其餘多為 CD3+/CD4−/CD8− 雙陰性（memory 表型）。
- **這與人類 MF（以 CD4+ 輔助型為主，約 90%）恰好相反**——犬以 CD4+ 輔助型主導的病例極罕見。臨床與病理判讀切勿把人醫的 CD4+ 表型、或「CD4 型預後較好」的框架套到犬。
- T 細胞受體（TCR）基因重排（PARR/clonality）分析可輔助確認克隆性，但須與組織病理併判，非單獨確診工具。

### 病理機制
腫瘤性 T 細胞異常表現皮膚歸巢受體（CLA、CCR4），選擇性遷移到表皮與附屬器上皮（epidermotropism / adnexotropism），在表皮微環境裡增殖，可形成 Pautrier microabscess（表皮內腫瘤性 T 細胞群聚）——此為具特徵性但非必然出現、且非專一的所見（犬僅約 23% 病例可見；真正最一致的是毛囊/汗腺上皮嗜性）。隨著疾病進展，腫瘤細胞失去嗜表皮性，往深層真皮浸潤，最後可跑到淋巴結與內臟轉移。

## 二、臨床表現 (Clinical Features)

> ⚠️ 犬 MF 的臨床表現「高度多樣（polymorphic）」，故有「偽裝大師」之稱；犬病例常同時呈現多型病灶、或一開始即為泛發性（剝脫性紅皮症）。文獻多把犬 MF 分為四大**同時並存**的表現型（剝脫性紅皮症；黏膜皮膚交界紅斑/脫色/潰瘍；單發或多發斑塊/結節；口腔黏膜潰瘍性病灶），而非依序演進的階段。下述「patch→plaque→tumor」三階段是借自**人類** Alibert-Bazin 型 MF 的概念，僅為鬆散的一般化描述，不宜當作犬的必然病程。

### 三階段進程（借自人醫 MF 之概念性描述）

#### Patch 期（斑期）
- 最早期的表現，很容易被忽略或誤診。
- 非特異性的紅斑斑塊、鱗屑、輕度脫毛。
- 好發軀幹、腹股溝、腋下。
- 可以持續幾個月到幾年。
- 常被誤診為過敏性皮膚炎、皮膚癬菌症、脂漏症。

#### Plaque 期（斑塊期）
- 紅斑進展為浸潤性、界線清楚的斑塊。
- 表面可見脫屑、糜爛。
- 多發性分布。
- 黏膜皮膚交界處受累的情況變多（口腔、鼻鏡、眼瞼、肛周）。

#### Tumor 期（腫瘤期）
- 斑塊進展為隆起的結節或腫塊。
- 表面常常潰瘍、出血。
- 可能伴周邊淋巴結腫大。
- 全身症狀跑出來（消瘦、食慾不振）。

### 黏膜皮膚交界/口腔黏膜型
- 約 **50%** 的犬 MF 涉及黏膜皮膚交界或黏膜（含口腔）（Fontaine 2010 50%、Moore 2009 57%；文獻多述 up to 50%）。
- 紅斑、脫色、糜爛、潰瘍、增生性斑塊。
- 可能是唯一或首發的表現。
- 要跟其他口腔疾病（免疫媒介性口炎、口腔腫瘤等）做鑑別。

### Sézary Syndrome（於犬極罕見）
- MF 的白血病變異型（依 REAL 分類＝MF 合併白血病：腫瘤性 T 細胞同時見於皮膚與末梢血）。
- 全身性紅皮症（erythroderma）：全身瀰漫性紅斑、脫屑。
- 劇烈搔癢。
- 末梢血液裡會跑出 Sézary cells（腦回樣 / cerebriform 核的異常 T 細胞）。
- 週邊淋巴結腫大。
- 為三種 CETL 亞型中預後最差者（多存活僅數日至數月）；於犬極罕見（迄今僅約 6 例報告，首例 Thrall 1984）。

## 三、診斷方法 (Diagnostic Approach)

### 皮膚切片組織病理學（確定診斷）
- 表皮/附屬器嗜性淋巴球浸潤（epidermotropism / adnexotropism）：**最一致的組織病理特徵**（毛囊上皮侵犯約 87%、汗腺約 70%，Fontaine 2010）。
- Pautrier microabscess：表皮內腫瘤性淋巴球群聚，具特徵性但**非必然出現、且非專一**——犬僅約 23%（7/30，Fontaine 2010）病例可見，屬 uncommon；良性海綿樣/發炎性皮膚炎亦可見類似聚集，故非 pathognomonic。當存在時支持診斷，缺乏並不能排除。
- 帶狀真皮淋巴球浸潤（lichenoid band）。
- 腫瘤期：密集真皮浸潤伴嗜表皮性喪失。
- 取樣要點：MF 分布不均，須多處（至少 2-3 處不同型態病灶）取樣。

### 免疫組化 (Immunohistochemistry)
- CD3+（泛 T 細胞標記）：確認 T 細胞來源。
- **CD8+（且 CD4−）：犬 MF 之主要表型（約 80%）**；CD4/CD8 併做以確認細胞毒型——勿預期人醫的 CD4+ 表型（見「細胞起源」物種差異）。
- CD18+、CD45+：白血球共通標記。
- Ki-67 增殖指數 / 有絲分裂數：評估增殖活性（與預後相關，見預後段）。

### 分期檢查
1. 完整理學檢查與皮膚病灶記錄（分布、數量、型態）
2. 周邊淋巴結細胞學（FNA）
3. CBC 含血液抹片複閱（搜尋 Sézary cells）
4. 胸腔 X 光 + 腹部超音波（評估內臟轉移）
5. 必要時：骨髓穿刺、TCR 基因重排分析

### 分期系統（⚠️ 借自人類 MF、於犬未經預後驗證）
> **犬 CETL 目前缺乏經正式驗證、與預後連結的臨床分期系統。** 下表 T1-T4 實為**人類**皮膚 T 細胞淋巴瘤的 ISCL/EORTC TNMB 分期（Olsen 2007, Blood 110(6):1713-1722），並非犬用的「改良 WHO 分期」（犬淋巴瘤整體採用的 WHO 分期是**解剖部位**為基礎的 I-V 五期系統，非皮膚腫瘤負荷分期）。於犬此表僅可作**描述性**用途、不可據以預測存活；犬的預後分層應改以已驗證的形態學/組織學因子（見預後段）。

| 期別（人類 ISCL/EORTC TNMB） | 定義 |
|------|------|
| T1 | Patch/plaque，< 10% 體表面積 |
| T2 | Patch/plaque，≥ 10% 體表面積 |
| T3 | 一個或多個 tumor（結節/腫塊）|
| T4 | 紅皮症（erythroderma / Sézary，≥ 80% BSA）|
| N0/N1 | 淋巴結未/已受累 |
| M0/M1 | 無/有內臟轉移 |

## 四、治療策略 (Treatment Strategy)

### 一線化療：CCNU (Lomustine)
- 劑量：60-70 mg/m² PO q3 週（一般犬 CCNU 範圍 60-90 mg/m²）。
- 反應率：約 **78-83%**（CR+PR；Williams 2006 n=36 ORR 78%、CR 17%；Risbon 2006 n=46 ORR 83%、CR ~33%），但**多為部分緩解（PR）、中位反應期僅約 94-106 天**——控制效果好但短暫，非治癒性。
- 注意：CCNU 是烷化劑，累積性骨髓毒性跟肝毒性是主要的劑量限制毒性。
- 監測：每次給藥前 CBC 加肝指數（ALT、ALP）。ANC < 2000/μL 或 ALT > 3 倍 ULN 就延遲或調整劑量。
- 最大建議累積劑量：300-400 mg/m² 左右（個體差異很大）。

### 替代或輔助化療
- Prednisolone：1-2 mg/kg PO SID 可以暫時控制早期病灶跟搔癢，但不是長期方案。
- Retinoids：犬的臨床證據是 **isotretinoin/etretinate「單獨使用」**（White 1993 約 42%、Ramos 2022 12 犬 33% CR/整體 58%）。⚠️ **acitretin 缺乏犬 CETL 專屬數據**（其為 etretinate 活性代謝物，非犬證據藥物）；且**無 retinoid＋CCNU 併用的反應率研究**——上述數字係單藥數據，不應套用於未經研究的併用方案。
- L-asparaginase：可以當救援方案。
- Mechlorethamine（氮芥）局部外用：Patch / plaque 期的局部治療選項（國外）。

### 局部治療
- 外用糖皮質激素可以暫時緩解 patch 期的症狀。
- 放射線治療（radiation therapy）可以處理孤立性腫塊。

### 支持療法
- 搔癢控制（Oclacitinib 可以輔助，但要注意免疫抑制）
- 繼發感染控制（細菌或酵母菌）
- 營養支持
- 疼痛管理

## 五、預後與飼主溝通 (Prognosis & Communication)

### 預後（以犬一手數據表述，非人醫分期）
> ⚠️ 目前**沒有**依 T1-T4 分期的犬科分期別存活數字——舊教材常見的「T1-T2 約 12-24 個月、T3 約 6-12 個月、T4 約 3-6 個月」實為**人類 MF（ISCL/EORTC）**之數據，早期 12-24 個月對犬明顯過度樂觀，不應套用於犬。

| 犬科一手數據 | 中位存活時間 |
|------|------------|
| 整體（Fontaine 2010, n=30） | 自診斷起約 6 個月（用 lomustine 或 prednisolone 差異不大）|
| 整體（Dettwiler 2023, n=176） | 約 95 天（≈3 個月）|
| 未治療 | 約 3-5 個月 |
| 依病灶部位（Chan/Moore 2018, n=148） | 皮膚型 130 天 vs 黏膜皮膚型 491 天 |

### 預後因素（犬已驗證/報告者）
- **病灶型態/部位**：黏膜皮膚型優於純皮膚型（491 vs 130 天，Chan/Moore 2018）；出現結節/潰瘍者較差。
- **組織學指標**：有絲分裂數 ≥ 7/HPF、腫瘤細胞/核徑增大者存活較短（Dettwiler 2023）。
- **末梢血受累/血小板低下**：預後較差（Azuma 2022）。
- CCNU 反應好的存活比較長。
- ⚠️ 「CD4+ 型比 CD8+ 型預後好」為**人醫外推**，犬 CD4+ 主導病例罕見，不宜列為犬的預後因子。

### 飼主溝通重點
- CETL 是進行性的皮膚腫瘤，目前沒辦法治癒。
- 治療目的是延長有品質的生命（palliative intent）。
- CCNU 化療可以有效控制症狀好幾個月，但有骨髓跟肝臟毒性，要定期監測。
- 要跟飼主討論生活品質評估，還有安寧照護的時機。

## 六、併發症與監控 (Complications & Monitoring)

### 疾病相關併發症
- 繼發性細菌/酵母菌（Malassezia）皮膚感染：屏障破壞＋搔抓所致，常需併行抗感染。
- 頑固搔癢與疼痛：影響生活品質，尤其紅皮症/潰瘍型。
- 進展期：淋巴結與內臟（肝、脾、肺）轉移；口腔型可致採食困難。

### CCNU 化療監控
- **每次給藥前 CBC**（延遲性/累積性骨髓抑制；ANC ≥ 2000/μL 方可給藥）。
- **肝毒性監測**：每次給藥前 ALT/ALP；CCNU 可致慢性累積性肝病，建議併用 SAMe/silybin 肝臟保護並定期追蹤。ALT > 3-5× ULN 需延遲或停藥。
- 累積劑量記錄（個體差異大）。
- 每 4-6 週皮膚病灶評估（拍照記錄範圍/型態變化）；每 2-3 個月重新評估淋巴結與影像。
- 生活品質量表定期評估，適時轉緩和照護。

## 七、人醫借鑒 (Translational Insights)

| 人醫 MF/CTCL 工具 | 獸醫應用潛力 | 現況 |
|---|---|---|
| 犬 MF 為人類 CTCL 之自然發生模型（惟表型相反：犬 CD8+ vs 人 CD4+） | 比較腫瘤學、細胞毒型 CTCL 病生理研究 | 犬 CD8+ 表型使其成為人類少見 CD8+ MF 之潛在模型 |
| 標靶/生物製劑（brentuximab vedotin 抗 CD30、mogamulizumab 抗 CCR4、HDAC 抑制劑） | 探索犬 CTCL 標靶治療 | 犬多數研究初期；CCR4 於犬 CTCL 表現待確認 |
| 局部治療（外用 mechlorethamine/bexarotene、窄波 UVB、全皮電子束 TSEBT） | 局限型病灶之皮膚導向治療 | 犬多毛覆蓋限制光療；外用氮芥國外有用 |
| JAK 抑制劑（近期人醫/個案探索） | 搔癢與部分反應 | 犬 Sézary 個案對 oclacitinib 有劑量相關反應之報告 |

## 八、臨床爭議與知識空缺 (Controversies & Knowledge Gaps)

| 爭議議題 | 現況 | Evidence Level |
|---|---|---|
| 犬 CETL 缺乏經驗證的臨床分期系統 | 沿用人類 ISCL/EORTC TNMB 僅供描述、未經犬預後驗證 | Level IV |
| CCNU 是否真正延長存活 | 反應率高但多為短暫 PR；Fontaine 2010 顯示化療 vs prednisolone 存活差異不大，Laprais 2016 CAT 質疑其存活效益 | Level III |
| 嗜表皮型 vs 非嗜表皮型何者預後較差 | 唯一直接對照（Azuma 2022）反顯示嗜表皮型較短，過往「非嗜表皮型較差」說法無據 | Level III |
| retinoid（isotretinoin）之角色與 CCNU 併用 | 單藥約 42-58% 反應，但併用方案無反應率研究 | Level III |
| 早期診斷（患病至確診中位約 5 個月）延誤 | 高度依賴臨床警覺與多處切片，缺乏非侵入性早期標記 | Level IV |

## 九、近期更新 (Recent Updates)

- **免疫表型物種差異確立**：犬 MF 以 CD3+/CD8+/CD4−（約 80%）為主（Moore 1994；Moore/Affolter 2009），與人類 CD4+ 輔助型 MF 相反——舊教材把人醫 CD4+ 表型套到犬為系統性錯誤。
- **預後分層改以形態學/組織學因子**：Chan/Moore 2018（n=148，皮膚型 130d vs 黏膜皮膚型 491d）、Dettwiler 2023（n=176，有絲分裂數/細胞徑為預後因子），取代無據的分期別存活數字。
- **嗜表皮 vs 非嗜表皮預後對照**：Azuma 2022（n=46）首個直接對照，嗜表皮型中位存活反較短（141d vs 374d）。
- **CCNU 存活效益受質疑**：Laprais & Olivry 2016（BMC Vet Res，critically appraised topic）指出 CCNU 雖有反應率但缺乏延長存活的高品質證據。
- **分期系統認知釐清**：常見 T1-T4 為人類 ISCL/EORTC TNMB（Olsen 2007），於犬未經驗證、僅供描述。`,
  clinical_pearl: '早期 CETL 是最容易被誤診的皮膚腫瘤，看起來就跟普通的過敏性皮膚炎或皮膚癬菌症一樣。關鍵線索是：標準治療都沒反應、病灶卻持續進展的「慢性皮膚炎」——尤其中老年犬對類固醇反應不好、或反覆復發的紅斑/斑塊，或治療無反應的口腔黏膜紅斑/糜爛，都該做皮膚多處切片。免疫組化判讀要記住物種差異：犬 MF 以 CD3+/CD8+（細胞毒型）為主，與人類 CD4+ MF 相反——看到 CD8+ 不要當成「非典型」而排除 MF。',
  common_mistakes: [
    '早期 CETL（patch 期）被長期當作過敏性皮膚炎治療，診斷被拖很久',
    '皮膚切片取樣不夠。MF 分布不均勻，要多處取樣（至少 2-3 處不同型態的病灶）',
    '沒做免疫組化就下確定診斷（要確認 T 細胞來源；且犬以 CD8+ 為主，勿預期人醫 CD4+）',
    'CCNU 治療時沒監測 CBC 跟肝指數（累積性骨髓或肝毒性會出人命）',
    '把人醫框架套到犬：用 T1-T4「分期別存活」預測犬預後（該分期為人類 ISCL/EORTC、於犬未驗證）、或誤信「CD4+ 型/非嗜表皮型預後較好或較差」',
    '忽略分期檢查。淋巴結 FNA、血液抹片、影像學對預後判斷跟治療決策都不能省',
  ],
  disease_data: {
    signalment: '中老年犬（中位發病年齡約 10 歲，範圍約 4-15 歲），無性別偏好。文獻中最常過度代表（over-represented）的品種為 English Cocker Spaniel 與 Boxer；Fontaine 2010 的 30 例另見 Bichon Frisé 偏多，Golden Retriever、Scottish Terrier 等 retriever/terrier 類亦有報告——惟多為病例系列觀察、尚無病例對照證實真正品種傾向。貓的皮膚嗜表皮性淋巴瘤較少見。',
    etiology: '確切病因不明。推測與慢性抗原刺激導致 T 細胞克隆性增殖有關。部分假說包括：慢性皮膚炎症環境促進 T 細胞轉化、皮膚微環境中的細胞因子（IL-2, IL-7, IL-15）促進腫瘤性 T 細胞存活與增殖、腫瘤抑制基因（p53）突變。',
    pathogenesis: '皮膚歸巢性記憶 T 細胞（犬以 CD8+ 細胞毒型為主，約 80%，與人類 CD4+ MF 相反）異常克隆增殖 → 表現皮膚歸巢受體（CLA, CCR4）→ 選擇性遷移至表皮與附屬器上皮（epidermotropism/adnexotropism）→ 可形成 Pautrier microabscess（僅約 1/4 病例）→ 早期侷限於皮膚 → 隨基因不穩定性增加，嗜表皮性喪失 → 深層真皮浸潤 → 淋巴管/血管侵犯 → 淋巴結與內臟轉移。',
    clinical_signs: [
      { sign: '紅斑性斑塊', category: 'primary', description: 'Patch/plaque 期：單發或多發紅斑、脫屑、輕度脫毛，好發軀幹與腹股溝' },
      { sign: '浸潤性斑塊', category: 'primary', description: 'Plaque 期：界線清楚的隆起性紅色斑塊，表面脫屑或糜爛' },
      { sign: '結節/腫塊', category: 'primary', description: 'Tumor 期：隆起的結節或腫塊，表面常潰瘍出血' },
      { sign: '黏膜皮膚交界處病灶', category: 'primary', description: '口腔、鼻鏡、眼瞼、肛周、外陰的紅斑、糜爛、增生' },
      { sign: '全身紅皮症', category: 'secondary', description: 'Sézary syndrome：全身瀰漫紅斑、脫屑、劇烈瘙癢' },
      { sign: '淋巴結腫大', category: 'secondary', description: '周邊淋巴結增大，腫瘤期與晚期常見' },
    ],
    staging: { system: '人類 ISCL/EORTC TNMB（犬借用、未經預後驗證；犬 CETL 無正式臨床分期）', stages: ['T1：Patch/plaque < 10% BSA', 'T2：Patch/plaque ≥ 10% BSA', 'T3：一個或多個 tumor（結節/腫塊）', 'T4：紅皮症/Sézary（≥ 80% BSA）', 'N0/N1：淋巴結未受累/受累', 'M0/M1：無/有內臟轉移'] },
    differential_diagnosis: [
      { condition: '犬異位性皮膚炎（CAD）', key_differentiator: '好發年輕犬、對免疫調節劑反應佳、皮膚切片見嗜酸球/肥大細胞而非異型淋巴球' },
      { condition: '皮膚癬菌症（Dermatophytosis）', key_differentiator: 'Wood 燈/培養陽性、毛髮 KOH 見孢子、抗黴菌治療有效' },
      { condition: '天疱瘡（Pemphigus）', key_differentiator: '自體免疫抗體攻擊橋粒、組織病理見棘層鬆解（acantholysis）而非嗜表皮淋巴球' },
      { condition: '脂漏性皮膚炎', key_differentiator: '全身性脂漏、油脂味、通常有潛在病因（過敏/內分泌）、組織病理無異型淋巴球' },
      { condition: '組織球瘤/肥大細胞瘤', key_differentiator: '細胞學與免疫組化可明確區分細胞來源' },
    ],
    diagnostic_workup: '1. 詳細皮膚病灶描述（分布、數量、型態、是否涉及黏膜）→ 2. 皮膚切片（多處取樣，≥ 2-3 處不同型態病灶）→ 3. 組織病理學（表皮/附屬器嗜性為主；Pautrier microabscess 具特徵性但僅約 23%、非專一）→ 4. 免疫組化（CD3+；犬 MF 主要 CD8+/CD4−，約 80%；加 CD18、Ki-67；勿預期人醫 CD4+）→ 5. 分期：周邊淋巴結 FNA + CBC（含血抹片找 Sézary cells）+ 胸腔 X 光 + 腹部超音波 → 6. 進階（視需要）：TCR clonality（PARR）、骨髓穿刺',
    treatment_protocol: '1. 一線 CCNU (Lomustine) 60-70 mg/m² PO q3 週（ORR 78-83%，多為短暫 PR），給藥前監測 CBC + ALT/ALP。2. 輔助 Prednisolone 1 mg/kg PO SID 控制早期症狀與搔癢。3. Retinoids（isotretinoin/etretinate 單藥，犬證據約 42-58%；acitretin 無犬證據、亦無 retinoid+CCNU 併用反應率研究）。4. 局部治療：外用糖皮質激素（早期）、放射線（孤立腫塊）。5. Sézary syndrome：CCNU + prednisolone ± L-asparaginase。6. 支持：搔癢管理、繼發感染控制、營養支持、疼痛管理。',
    prognosis: '整體預後不良，自診斷起中位存活約 6 個月（Fontaine 2010, n=30；Dettwiler 2023 n=176 約 95 天；未治療 3-5 個月）；依部位皮膚型約 130 天 vs 黏膜皮膚型約 491 天（Chan/Moore 2018）。CCNU 反應率高（78-83%）但多為部分緩解、持續期短（中位 94-106 天）。⚠️ 舊教材「分期別存活（12-24 月等）」為人類 MF（ISCL/EORTC）數據、不適用於犬。治療目的為延長有品質的生命（palliative intent），非治癒。',
    monitoring: 'CCNU 治療：每次給藥前 CBC（ANC ≥ 2000/μL 方可給藥）+ ALT/ALP。累積劑量記錄（建議 < 300-400 mg/m²）。每 4-6 週皮膚病灶評估（拍照記錄）。每 2-3 個月重新分期（淋巴結、影像學）。生活品質量表定期評估。出現嚴重骨髓抑制（ANC < 1000）或肝毒性（ALT > 5x ULN）需停藥或調整。',
    owner_communication: '皮膚淋巴瘤是一種從皮膚開始的惡性腫瘤。目前無法治癒，但化療藥物（CCNU）可有效控制病情數月。治療目的是讓狗狗在剩餘時間保持良好生活品質。CCNU 化療需要定期抽血監測（每 3 週），確保肝臟和血球沒有受到藥物傷害。我們會一起持續評估狗狗的生活品質，在適當時機討論安寧照護的選項。',
  },
  diagnostic_data: null,
  procedure_data: null,
  visual_placeholders: [
    { position: '臨床表現段落後', type: 'comparison_table', description: 'MF 三階段臨床進程比較表' },
    { position: '分期段落後', type: 'flowchart', description: 'CTCL 分期與治療決策流程圖' },
  ],
  interactive_placeholders: [
    { position: '治療段落', type: 'drug_calculator', description: 'CCNU 體表面積劑量計算器' },
  ],
  drug_api_links: ['Lomustine', 'Prednisolone', 'Isotretinoin'],
  references: [
    { type: 'textbook', citation: "Miller WH, Griffin CE, Campbell KL. Muller and Kirk's Small Animal Dermatology, 7th ed. Elsevier, 2013. Chapter 20: Cutaneous Lymphoma.", relevance: '皮膚淋巴瘤分類、臨床特徵與治療的經典參考' },
    { type: 'journal', citation: 'Fontaine J, Heimann M, Day MJ. Canine cutaneous epitheliotropic T-cell lymphoma: a review of 30 cases. Vet Dermatol. 2010;21(3):267-275. doi:10.1111/j.1365-3164.2009.00793.x', relevance: '犬嗜表皮 T 細胞淋巴瘤 30 例回顧（臨床多樣性、Pautrier 23%、黏膜皮膚 50%、MST 6 月）' },
    { type: 'journal', citation: 'Fontaine J, Bovens C, Bettenay S, Mueller RS. Canine cutaneous epitheliotropic T-cell lymphoma: a review. Vet Comp Oncol. 2009;7(1):1-14. doi:10.1111/j.1476-5829.2008.00176.x', relevance: '綜述：犬 80% CD8+/CD4− vs 人類 90% CD4+；四大臨床表現型' },
    { type: 'journal', citation: 'Moore PF, Affolter VK, Graham PS, Hirt B. Canine epitheliotropic cutaneous T-cell lymphoma: an investigation of T-cell receptor immunophenotype, lesion topography and molecular clonality. Vet Dermatol. 2009;20(5-6):569-576. doi:10.1111/j.1365-3164.2009.00814.x', relevance: '免疫表型/克隆性：44/55=80% CD8+；黏膜皮膚受累 57%' },
    { type: 'journal', citation: 'Williams LE, Rassnick KM, Power HT, et al. CCNU in the Treatment of Canine Epitheliotropic Lymphoma. J Vet Intern Med. 2006;20(1):136-143. doi:10.1111/j.1939-1676.2006.tb02833.x', relevance: 'CCNU n=36：ORR 78%（v1 誤植為 20(6):1384-1388）' },
    { type: 'journal', citation: 'Risbon RE, de Lorimier LP, Skorupski K, et al. Response of Canine Cutaneous Epitheliotropic Lymphoma to Lomustine (CCNU): A Retrospective Study of 46 Cases (1999-2004). J Vet Intern Med. 2006;20(6):1389-1397. doi:10.1111/j.1939-1676.2006.tb00756.x', relevance: 'CCNU 46 例：ORR 83%、中位反應期 94 天' },
    { type: 'journal', citation: 'White SD, Rosychuk RAW, Scott KV, et al. Use of isotretinoin and etretinate for the treatment of benign cutaneous neoplasia and cutaneous lymphoma in dogs. J Am Vet Med Assoc. 1993;202(3):387-391. doi:10.2460/javma.1993.202.03.387', relevance: 'Retinoid 單藥治療犬皮膚淋巴瘤（約 42%）' },
    { type: 'journal', citation: 'Chan CM, Frimberger AE, Moore AS. Clinical outcome and prognosis of dogs with histopathological features consistent with epitheliotropic lymphoma: a retrospective study of 148 cases (2003-2015). Vet Dermatol. 2018;29(2):154-e59. doi:10.1111/vde.12504', relevance: '148 例預後：皮膚型 130 天 vs 黏膜皮膚型 491 天' },
    { type: 'journal', citation: 'Dettwiler M, Mauldin EA, Jastrebski S, et al. Prognostic clinical and histopathological features of canine cutaneous epitheliotropic T-cell lymphoma. Vet Pathol. 2023;60(2):162-171. doi:10.1177/03009858221140818', relevance: '176 例形態學/組織學預後因子（有絲分裂數、細胞徑）' },
    { type: 'journal', citation: 'Azuma S, Ohmi A, Goto-Koshino Y, et al. Outcomes and prognostic factors in canine epitheliotropic and nonepitheliotropic cutaneous T-cell lymphomas. Vet Comp Oncol. 2022;20(1):118-126. doi:10.1111/vco.12752', relevance: '唯一直接對照：嗜表皮型 MST 141 天 vs 非嗜表皮型 374 天' },
    { type: 'journal', citation: 'Olsen E, Vonderheid E, Pimpinelli N, et al. Revisions to the staging and classification of mycosis fungoides and Sezary syndrome. Blood. 2007;110(6):1713-1722. doi:10.1182/blood-2007-03-055749', relevance: '人類 ISCL/EORTC TNMB 分期（犬 T1-T4 之真實出處，對照用）' },
  ],
  is_current: true,
  created_at: now,
};

/** 肥大細胞瘤 (MCT)，疾病型 */
const contentMCT: NodeContent = {
  id: 'CONTENT-DERM-L3-014',
  node_id: 'DERM-L3-014',
  version: 2,
  summary: '犬肥大細胞瘤（Mast Cell Tumor, MCT）是犬最常見的皮膚惡性腫瘤，大約佔犬皮膚腫瘤的 16-21%。MCT 源自肥大細胞的腫瘤性增生，臨床表現變化多端（被稱為「偉大的模仿者」），從良性的皮膚結節到高度惡性的全身性疾病都有。診斷靠 FNA 細胞學初步鑑定，加上手術切除後的組織病理分級（Patnaik 三級制或 Kiupel 二級制）。c-KIT 突變是重要的預後因子跟治療標靶。',
  learning_objectives: [
    '描述犬 MCT 的臨床表現多變性及「偉大的模仿者」概念',
    '比較 Patnaik 三級制與 Kiupel 二級制分級系統的差異與臨床意義',
    '闡述 c-KIT 突變在 MCT 發病機轉、預後及標靶治療中的角色',
    '規劃 MCT 的分期檢查流程與手術邊界要求',
    '制定 MCT 的多模式治療計畫（手術、化療、TKI）',
  ],
  key_points: [
    'MCT 是犬最常見的皮膚惡性腫瘤，好發品種：拳師犬、鬥牛㹴、拉布拉多、金毛尋回犬、巴哥犬',
    'Patnaik Grade I（良性行為）、II（生物學行為不定）、III（高度惡性）；Kiupel 系統簡化為 Low grade / High grade',
    'Kiupel High grade 定義：有絲分裂指數 ≥ 7/10 HPF、≥ 3 多核巨細胞/10 HPF、≥ 3 怪異核/10 HPF、核直徑異常（karyomegaly）',
    'c-KIT（CD117）突變見於約 25-30% 犬 MCT，與較差預後及 TKI 治療反應相關',
    '手術邊界要求：側面 2-3 cm、深面至少 1 個筋膜面（fascial plane）',
    '肥大細胞脫顆粒可導致局部與全身性效應：組胺釋放→胃潰瘍、低血壓、凝血異常',
    '術前預防脫顆粒：H1 blocker（diphenhydramine）+ H2 blocker（famotidine）',
    '化療方案：Vinblastine + Prednisolone 為標準一線；Toceranib（Palladia）為口服 TKI',
  ],
  body: `# 犬肥大細胞瘤 (MCT)

## 一、病理機制 (Pathophysiology)

### 概述
犬 MCT 源自肥大細胞的腫瘤性增殖。肥大細胞本來就分布在皮膚結締組織裡，裡面裝著大量的嗜鹼性顆粒（組胺、肝素、蛋白酶、細胞因子）。MCT 的發病跟 c-KIT（CD117）酪胺酸激酶受體的突變關係密切。

### c-KIT 突變
c-KIT 基因編碼幹細胞因子受體（SCF receptor），正常時調控肥大細胞的增殖、分化跟存活。大約 25-30% 的犬 MCT 帶有 c-KIT 突變（主要是 exon 11 的 internal tandem duplication, ITD），受體不需要配體結合就持續活化，腫瘤細胞就不受控增殖。

### 肥大細胞脫顆粒
MCT 細胞會自發或被觸發後脫顆粒，釋放大量生物活性介質：
- 組胺：走 H1 受體就血管擴張、蕁麻疹；走 H2 受體就胃酸分泌增加、跑胃潰瘍。
- 肝素：抗凝血效應，跑出血傾向。
- 蛋白酶（tryptase、chymase）：組織降解。
- TNF-α、VEGF：促進血管新生跟塑造腫瘤微環境。

## 二、臨床表現 (Clinical Signs)

### 皮膚病灶特徵
MCT 被稱為「偉大的模仿者（The Great Pretender）」，因為外觀變化超大。可以表現為：無毛軟性結節、堅硬的皮下腫塊、紅腫發炎性的斑塊，甚至跟脂肪瘤一樣柔軟的腫塊。

### Darier's sign
操作腫瘤的時候會引發局部紅腫、蕁麻疹樣反應（潮紅、水腫），是 MCT 的特徵性表現，因為機械性刺激引起肥大細胞脫顆粒。

## 三、分級系統 (Grading Systems)

### Patnaik 三級制 (1984)
| Grade | 特徵 | 預後 |
|-------|------|------|
| I | 分化良好、有絲分裂罕見、侷限於真皮 | 術後存活 > 4 年 |
| II | 中度分化、有絲分裂偶見、可侵犯皮下 | 生物學行為不定 |
| III | 分化不良、高有絲分裂、侵犯深層組織 | 中位存活 < 6 個月 |

### Kiupel 二級制 (2011)
Kiupel 系統解決了 Patnaik Grade II 太大（佔 40-60%）跟觀察者間一致性低的問題。

High grade 標準（符合任一就算 High grade）：
1. 有絲分裂指數 ≥ 7/10 HPF
2. ≥ 3 個多核巨細胞/10 HPF
3. ≥ 3 個怪異核/10 HPF
4. 核直徑異常（karyomegaly）

Low grade：上面任何一條都不符合。

## 四、分期與診斷 (Staging & Diagnosis)

### 分期（WHO 改良版）
- Stage I：單一皮膚腫瘤，局部淋巴結沒受累
- Stage II：單一皮膚腫瘤加上區域淋巴結轉移
- Stage III：多發皮膚腫瘤或大型浸潤性腫瘤
- Stage IV：腫瘤伴遠端轉移或全身性肥大細胞病

### 分期檢查流程
1. FNA 細胞學：初步確認 MCT（典型的紫色異染顆粒）
2. 區域淋巴結 FNA（不管淋巴結有沒有腫）
3. 腹部超音波（評估肝脾）
4. CBC 加血抹片（嗜酸球有沒有增加？循環中有沒有 MCT 細胞？）
5. 肝脾 FNA（如果超音波異常）

## 五、手術治療 (Surgical Treatment)

### 手術邊界
- 側面邊界：2-3 cm（Patnaik II/III 或 Kiupel High grade 建議 3 cm）
- 深面邊界：至少 1 個完整筋膜面（fascial plane）
- 手術標本要用墨水標方向後再送組織病理，評估邊界清淨度
- 邊界沒清乾淨（dirty margin）就考慮再開一次刀或加輔助放療

### 脫顆粒預防
術前 30 分鐘給：
- H1 blocker：Diphenhydramine 2 mg/kg IM
- H2 blocker：Famotidine 0.5-1 mg/kg IV

## 六、全身治療 (Systemic Therapy)

### Vinblastine + Prednisolone (VP) 標準方案
- Vinblastine 2 mg/m² IV 每 2 週，共 4-6 次
- Prednisolone 1-2 mg/kg PO SID，然後漸減
- 適應症：高分級 MCT、淋巴結轉移、邊界不清淨

### 酪胺酸激酶抑制劑 (TKI)
- Toceranib (Palladia)：2.75 mg/kg PO 隔日（或週一三五）。整體客觀反應率約 37–43%（London 2009），**c-KIT 突變陽性者反應較佳**（部分分析可達約 50–60%）；治療中監測 CBC/生化/尿蛋白。
- Masitinib (Masivet)：12.5 mg/kg PO SID（歐洲）。

[圖片:MCT 臨床外觀多變性比較圖]
[圖片:Patnaik vs Kiupel 分級系統比較]

### 台灣臨床注意事項

MCT 在台灣犬隻裡相當常見，尤其是拉布拉多（Labrador）跟黃金獵犬（Golden Retriever）。這兩個品種在台灣飼養量很大，本來就是 MCT 高風險族群。台灣亞熱帶氣候跟 MCT 發生沒有直接的紫外線關聯（這跟鱗狀上皮細胞癌那類紫外線相關腫瘤不一樣），但臨床上要注意跟其他皮膚腫瘤（例如日光性皮膚炎繼發的 SCC）做鑑別診斷。治療藥物方面，標準一線化療方案 Vinblastine 在台灣可以取得。口服 TKI Toceranib（Palladia）可以透過進口管道拿到，但價格不便宜（每錠約 500-1000 台幣），飼主的經濟負擔要納入治療決策一起想。c-KIT 突變檢測要外送國外實驗室，週轉時間約 2-3 週。

## 八、人醫借鑑 (Translational Insights)

| 人醫概念/工具 | 與犬 MCT 的連結 | 現況 |
|-------------|---------------|------|
| 人 GIST/CML 的 KIT 生物學 | 犬 MCT 的 KIT(c-KIT) 活化突變與人胃腸道間質瘤(GIST)、CML 的 KIT 機轉相通 | 標靶觀念跨物種互通 |
| Imatinib（為人 GIST/CML 開發） | 啟發犬 MCT 的 KIT-TKI 治療（toceranib、masitinib） | toceranib/masitinib 已成獸醫常規 |
| 伴隨診斷（companion diagnostics） | c-KIT 突變/IHC 預測 TKI 反應，呼應人醫「依突變選藥」精準腫瘤學 | 獸醫精準腫瘤學雛形 |
| 人系統性肥大細胞增生症 | 肥大細胞介質效應（組胺、類過敏）與犬全身性/內臟 MCT 相通 | 介質阻斷（H1/H2）概念共用 |

## 九、臨床爭議與知識空缺 (Controversies & Knowledge Gaps)

| 議題 | 立場 | Evidence Level |
|------|------|---------------|
| 手術側緣 2 cm vs 3 cm / 比例式邊界 | 低-中分級 2 cm（或比例式）多已足夠；高分級採較寬 | Level II |
| 高分級/邊界不清是否一律輔助治療 | 多數建議輔助，最佳方案（VP vs TKI vs 併用）未定 | Level III |
| c-KIT 突變檢測是否常規 | 可預測 TKI 反應與預後，但成本/可及性限制常規化 | Level III |
| Patnaik vs Kiupel | Kiupel 一致性較佳、現多並列報告；Grade II 仍是灰區 | Level II |
| 預防性區域淋巴結摘除 | 哨兵淋巴結評估漸受重視，常規摘除利弊未定 | Level III |

## 十、近期實證更新（待 DVM 覆核）

1. **Kiupel 二級制成為主流**：低/高二分對觀察者間一致性與預後預測優於 Patnaik，多數病理報告並列兩系統（Kiupel 2011）。
2. **有絲分裂指數獨立預後**：MI ≥ 5/10 HPF 與較短存活獨立相關（不論分級）；Kiupel 高分級的有絲分裂門檻為 ≥ 7。
3. **c-KIT 突變預測 TKI 反應**：exon 8/11 ITD 約占 15–30%，與較高分級/復發相關並富集 TKI 反應；toceranib 整體 ORR ~37–43%、突變陽性較佳（London 2009）。
4. **高分級預後仍嚴峻**：Kiupel 高分級即使手術+輔助治療，存活仍明顯較短（Ong 2025, Front Vet Sci）。
> 臨床內容與所有劑量需獸醫師依現行指引與仿單核對。`,
  clinical_pearl: '每一個犬皮膚腫塊都該做 FNA。MCT 是「偉大的模仿者」，很多看起來無害的皮膚結節最後被證實是 MCT。FNA 細胞學又快又便宜（院內就能做），紫色異染顆粒在 Diff-Quik 染色下超典型。另外，操作 MCT 之前一定要先給 H1 加 H2 blocker 預防脫顆粒。連手術探查時的機械性刺激都可能引發嚴重的肥大細胞脫顆粒反應。',
  common_mistakes: [
    '光憑外觀判斷皮膚腫塊就沒做 FNA，結果 MCT 被誤診成脂肪瘤或囊腫',
    '手術邊界不夠（< 2 cm），局部復發率明顯上升',
    '術前沒給 H1/H2 blocker 預防脫顆粒',
    '忽略區域淋巴結 FNA。就算淋巴結看起來大小正常，也可能已經有微轉移',
    '只用 Patnaik 分級沒同時用 Kiupel 系統。Grade II 範圍太大，預後判斷不精確',
  ],
  disease_data: {
    signalment: '好發中老年犬（平均 8-9 歲），好發品種：拳師犬（Boxer）、鬥牛㹴（Bull Terrier）、拉布拉多、金毛尋回犬、巴哥犬（Pug）、波士頓㹴、Weimaraner。無明顯性別差異。拳師犬 MCT 多為低分級。',
    etiology: '確切病因不明，已知與 c-KIT（CD117）酪胺酸激酶受體基因突變相關。約 25-30% 犬 MCT 帶有 c-KIT exon 11 internal tandem duplication（ITD）。慢性發炎或免疫異常可能是促發因素。某些品種的遺傳易感性已被證實。',
    pathogenesis: 'c-KIT 突變 → SCF 受體持續活化 → 下游 RAS/MAPK 與 PI3K/AKT 訊號持續激活 → 腫瘤性肥大細胞不受控增殖。腫瘤細胞保留脫顆粒能力 → 釋放組胺（胃酸↑、血管擴張）、肝素（凝血↓）、蛋白酶（組織降解）、TNF-α（全身發炎）→ 副腫瘤症候群。',
    clinical_signs: [
      { sign: '皮膚腫塊', category: 'primary', description: '外觀多變：柔軟到堅硬、有毛到無毛、單發或多發，好發軀幹、四肢、會陰' },
      { sign: 'Darier sign', category: 'primary', description: '操作腫瘤後局部紅腫、蕁麻疹樣反應（肥大細胞脫顆粒引起）' },
      { sign: '腫瘤周圍水腫', category: 'primary', description: '組胺釋放導致血管通透性增加，腫瘤周圍可見紅腫' },
      { sign: '胃腸道潰瘍', category: 'secondary', description: '組胺經 H2 受體刺激胃酸分泌 → 胃十二指腸潰瘍，表現為嘔吐、黑便' },
      { sign: '凝血異常', category: 'secondary', description: '肝素釋放導致凝血時間延長、出血傾向' },
      { sign: '區域淋巴結腫大', category: 'secondary', description: '轉移至引流區域淋巴結，觸診可腫大' },
    ],
    staging: { system: 'WHO 改良 MCT 分期', stages: ['Stage I：單一皮膚腫瘤，淋巴結未受累', 'Stage II：單一皮膚腫瘤 + 區域淋巴結轉移', 'Stage III：多發皮膚腫瘤或大型浸潤性腫瘤', 'Stage IV：遠端轉移或全身性肥大細胞病'] },
    differential_diagnosis: [
      { condition: '脂肪瘤（Lipoma）', key_differentiator: '柔軟、可移動、FNA 見脂肪細胞而非肥大細胞' },
      { condition: '組織球瘤（Histiocytoma）', key_differentiator: '好發年輕犬（< 3 歲）、通常自發消退、FNA 見圓形細胞而非異染顆粒' },
      { condition: '皮膚淋巴瘤', key_differentiator: '組織病理見異型淋巴球嗜表皮浸潤，免疫組化 CD3+/CD79a-' },
      { condition: '黑色素瘤（Melanoma）', key_differentiator: 'FNA 見含色素的上皮樣/梭形細胞，Melan-A/PNL2 免疫組化陽性' },
      { condition: '皮膚血管外皮細胞瘤', key_differentiator: '紡錘形細胞為主，無異染顆粒' },
    ],
    diagnostic_workup: '1. FNA 細胞學（Diff-Quik 染色見典型紫色異染顆粒）→ 2. 完整分期：區域淋巴結 FNA（無論大小）→ 3. CBC/生化（嗜酸球？肝指數？）→ 4. 腹部超音波（肝脾形態）→ 5. 如超音波異常：肝脾 FNA → 6. 手術切除送病理：Patnaik + Kiupel 分級 + c-KIT 免疫組化 + 有絲分裂指數 + 邊界評估 → 7. 考慮 c-KIT 突變 PCR（exon 11 ITD）',
    treatment_protocol: '1. 手術切除：側面 2-3 cm + 深面 1 個筋膜面。2. 術前 H1 + H2 blocker 預防脫顆粒。3. Low grade + 邊界清淨→觀察。4. High grade 或邊界不清→輔助化療：Vinblastine 2 mg/m² IV q2w × 4-6 次 + Prednisolone 1-2 mg/kg PO。5. c-KIT 突變陽性→考慮 TKI：Toceranib 2.75 mg/kg PO 隔日。6. 不可切除→放療或 TKI。7. 全程 H1/H2 blocker + 胃保護劑。',
    prognosis: 'Kiupel Low grade：術後中位存活 > 2 年，局部復發率 < 10%（邊界清淨時）。Kiupel High grade：中位存活 4-6 個月，術後加化療可延長。Patnaik I：預後極佳（> 4 年）。Patnaik III：中位存活 < 6 個月。c-KIT 突變陽性者預後較差但可能對 TKI 有反應。多發 MCT 的預後取決於各腫瘤的獨立分級。',
    monitoring: 'Low grade 術後：每 3 個月觸診檢查局部及淋巴結，持續 2 年。High grade 化療期間：每次 vinblastine 前 CBC（ANC ≥ 2000/μL）。TKI 治療：每 2-4 週 CBC + 生化 + 尿液分析（腎蛋白尿監測）。任何新皮膚腫塊立即 FNA。每 3-6 個月腹部超音波追蹤。',
    owner_communication: 'MCT 是犬最常見的皮膚癌，但預後差很多。低分級 MCT 手術切除乾淨後可能完全治癒。手術需要比腫瘤本身大很多的邊界（周圍 2-3 公分），這是為了確保完全移除。如果是高分級或手術沒切乾淨，會建議追加化療或標靶治療。手術前後會給抗組胺藥預防過敏反應。狗狗如果出現嘔吐、黑色糞便就要馬上回診（可能是胃潰瘍）。',
  },
  diagnostic_data: null,
  procedure_data: null,
  visual_placeholders: [
    { position: '分級系統段落後', type: 'comparison_table', description: 'Patnaik vs Kiupel 分級系統比較表' },
    { position: '治療段落後', type: 'flowchart', description: 'MCT 分期-分級-治療決策流程圖' },
  ],
  interactive_placeholders: [
    { position: '分級段落', type: 'interactive_scoring', description: 'Kiupel High/Low grade 評估工具' },
    { position: '治療段落', type: 'drug_comparison', description: 'Vinblastine/Prednisolone vs Toceranib 治療比較' },
  ],
  drug_api_links: ['Vinblastine', 'Prednisolone', 'Toceranib', 'Diphenhydramine', 'Famotidine'],
  references: [
    { type: 'journal', citation: 'Kiupel M, Webster JD, et al. Proposal of a 2-tier histologic grading system for canine cutaneous mast cell tumors to more accurately predict biological behavior. Vet Pathol. 2011;48(1):147-155. doi:10.1177/0300985810386469.', relevance: 'Kiupel 二級制分級系統原始研究' },
    { type: 'journal', citation: 'London CA, et al. Multi-center, placebo-controlled, double-blind, randomized study of oral toceranib phosphate (SU11654), a kit tyrosine kinase inhibitor, for the treatment of dogs with recurrent mast cell tumor. Clin Cancer Res. 2009;15(11):3856-3865. doi:10.1158/1078-0432.CCR-08-1860.', relevance: 'Toceranib 臨床試驗關鍵研究（整體 ORR ~37-43%）' },
    { type: 'guideline', citation: 'Blackwood L, Murphy S, et al. European consensus document on mast cell tumours in dogs and cats. Vet Comp Oncol. 2012;10(3):e1-e29. doi:10.1111/j.1476-5829.2012.00341.x.', relevance: '歐洲 MCT 共識指引' },
    { type: 'journal', citation: 'Garrett LD. Canine mast cell tumors: diagnosis, treatment, and prognosis. Vet Med (Auckl). 2014;5:49-58. doi:10.2147/VMRR.S41005.', relevance: '犬 MCT 診斷/治療/預後綜述' },
    { type: 'journal', citation: 'Ong SM, et al. Clinical outcomes of dogs with high-grade cutaneous mast cell tumors. Front Vet Sci. 2025;11:1519636. doi:10.3389/fvets.2024.1519636.', relevance: '高分級皮膚 MCT 臨床結果（近期）' },
    { type: 'textbook', citation: "Miller WH, Griffin CE, Campbell KL. Muller and Kirk's Small Animal Dermatology, 7th ed. Elsevier, 2013. Ch. 20: Cutaneous Neoplasia (Mast Cell Tumors).", relevance: '犬 MCT 臨床特徵與治療教材' },
  ],
  is_current: true,
  created_at: now,
};

/** 皮膚組織病理學 (Dermatohistopathology)，診斷型 */
const contentDermatohistopathology: NodeContent = {
  id: 'CONTENT-DERM-L4-005',
  node_id: 'DERM-L4-005',
  version: 1,
  summary: '皮膚組織病理學（Dermatohistopathology）是皮膚疾病確定性診斷的金標準，靠活檢組織的顯微鏡評估給出特異性診斷。適應症包含治療沒反應的皮膚病、水疱或潰瘍性病灶、疑似腫瘤，以及需要分級的皮膚腫瘤。活檢方式有 punch biopsy、wedge biopsy 跟 excisional biopsy，怎麼選看病灶特徵跟臨床需求。',
  learning_objectives: [
    '辨識需要皮膚活檢送組織病理的臨床情境',
    '比較 punch biopsy、wedge biopsy 及 excisional biopsy 的適應症與技術',
    '描述正確的皮膚活檢標本採集、固定及送檢流程',
    '辨識主要的組織病理學反應型態（interface、perivascular、nodular/diffuse、vesiculopustular）',
    '整合組織病理報告結果於臨床診斷與治療決策中',
  ],
  key_points: [
    'Punch biopsy（4-8 mm）為最常用、最快速的皮膚活檢方式',
    'Wedge/excisional biopsy 適用於深層病變、脂肪層病變、或需完整切除的腫瘤',
    '取樣原則：選擇具代表性的新鮮/活動性病灶，避免已苔蘚化或繼發感染的區域',
    '標本固定：10% 中性緩衝福馬林（NBF），組織：固定液比例至少 1:10',
    'Interface dermatitis：基底層液化變性、淋巴球浸潤，見於天疱瘡、紅斑性狼瘡、藥物反應',
    'Perivascular dermatitis：血管周圍炎症細胞浸潤，見於過敏性皮膚炎、跳蚤過敏',
    'Nodular/diffuse dermatitis：真皮深層結節狀或彌漫性浸潤，見於深部黴菌感染、肉芽腫',
    '提供臨床照片與完整病史給病理醫師是獲得準確診斷的關鍵',
  ],
  body: `# 皮膚組織病理學 (Dermatohistopathology)

## 一、活檢適應症 (Indications for Biopsy)

### 何時要做皮膚活檢？
- 經驗性治療 4-6 週都沒改善的皮膚病灶
- 水疱（vesicle）、大疱（bulla）或潰瘍性病灶（疑似自體免疫）
- 疑似皮膚腫瘤需要組織學分級
- 不尋常的臨床表現或分佈
- 要分辨長很像的疾病（例如天疱瘡 vs 膿皮症）
- 治療前的基線記錄（例如疑似 CTCL）

### 何時不需要活檢？
- 臨床加細胞學就能診斷的常見疾病（典型的膿皮症那類）
- 用刮搔或培養就能確診的寄生蟲或黴菌感染

## 二、活檢技術 (Biopsy Techniques)

### Punch Biopsy（環鑽活檢）
- 最常用、最快速、侵入性最小
- 尺寸：6 mm 或 8 mm（不建議小於 6 mm）
- 技術：沿毛髮生長方向旋轉環鑽，穿透至皮下脂肪層
- 每個病例建議取 2-3 個不同部位或不同型態的標本
- 適用：大多數炎症性與自體免疫性皮膚病

### Wedge Biopsy（楔形活檢）
- 以手術刀切取楔形全層皮膚組織
- 適用：深層病變（脂膜炎）、皮下結節、需評估病灶邊緣
- 可獲得較大且較深的組織標本

### Excisional Biopsy（切除性活檢）
- 將整個病灶連同適當邊界完整切除
- 適用：疑似腫瘤（MCT、黑色素瘤），可以同時達到診斷跟治療目的
- 需墨水標記方向以評估邊界清淨度

## 三、標本處理 (Specimen Handling)

### 固定與送檢
1. 切除後立即放入 10% 中性緩衝福馬林（NBF）
2. 組織：固定液體積比 ≥ 1:10
3. 避免擠壓、彎折、乾燥標本
4. 標記取樣部位與方向

### 送檢資訊（缺一不可）
- 完整臨床病史（發病時間、進程、治療反應）
- 病灶描述（型態、分佈、數量）
- 臨床照片（至少全身分佈圖 + 病灶特寫）
- 鑑別診斷列表
- 目前用藥（免疫抑制劑可改變組織學型態）

## 四、主要組織病理學反應型態 (Histopathologic Patterns)

### 1. Interface Dermatitis（界面皮膚炎）
- 特徵：基底層液化變性、淋巴球侵犯表真皮交界處、個別角質細胞壞死
- 代表疾病：紅斑性狼瘡、多形性紅斑、藥物不良反應、CTCL 早期

### 2. Perivascular Dermatitis（血管周圍皮膚炎）
- 特徵：真皮淺層或深層血管周圍炎症細胞套袖狀浸潤
- 代表疾病：異位性皮膚炎（淋巴球+嗜酸球）、跳蚤過敏（嗜酸球為主）

### 3. Vesiculopustular Dermatitis（水疱膿疱性皮膚炎）
- 特徵：表皮內或表皮下水疱/膿疱形成
- 棘層鬆解性膿疱→天疱瘡（acantholytic cells）
- 表皮下水疱→類天疱瘡

### 4. Nodular/Diffuse Dermatitis（結節/彌漫性皮膚炎）
- 特徵：真皮至皮下的結節狀或彌漫性炎症浸潤
- 代表疾病：深部黴菌感染、異物肉芽腫、無菌性結節性脂膜炎

### 5. Follicular/Perifollicular Dermatitis（毛囊/毛囊周圍皮膚炎）
- 特徵：以毛囊為中心的炎症
- 代表疾病：蠕形蟎症、細菌性毛囊炎、脫毛症 X

[圖片:五種主要組織病理學反應型態比較圖]
[圖片:Punch biopsy 正確技術示範]`,
  clinical_pearl: '「不要把線索洗掉！」皮膚活檢前不要清洗或刮搔病灶表面，因為表面的痂皮、鱗屑跟膿疱裡面藏著重要的診斷資訊（棘層鬆解細胞、細菌、真菌孢子那些）。疑似自體免疫皮膚病的時候，完整的膿疱標本就是確診天疱瘡的關鍵。取樣要選新鮮的原發性病灶（膿疱、水疱），不要取已經破掉的繼發性病灶（糜爛、痂皮）。',
  common_mistakes: [
    '取樣部位選錯。活檢去取已經苔蘚化或繼發感染的慢性區域，而不是新鮮活動性病灶',
    '使用過小的 punch（< 6 mm），標本太小無法判讀完整的組織學型態',
    '活檢前清洗病灶或移除痂皮，破壞表面的診斷線索',
    '未提供臨床照片與完整病史給病理醫師，導致報告僅能描述型態而無法給出特異性診斷',
    '標本固定不當（福馬林量不足或延遲固定）導致組織自溶',
  ],
  disease_data: null,
  diagnostic_data: {
    indication: [
      '經驗性治療無效的慢性皮膚病（> 4-6 週）',
      '水疱/大疱/潰瘍性病灶（疑似自體免疫皮膚病）',
      '疑似皮膚腫瘤需組織學分級',
      '不尋常臨床表現需確定性診斷',
      '治療監測（如 CTCL 治療效果評估）',
    ],
    contraindication: [
      '活動性出血傾向（需先矯正凝血功能）',
      '取樣部位有嚴重繼發感染（先控制感染後再活檢較佳，但緊急情況例外）',
    ],
    technique: 'Punch biopsy（6-8 mm 環鑽）：沿毛髮生長方向旋轉穿透至皮下脂肪，以細鑷子或針尖輕輕提起標本後剪斷底部。Wedge biopsy（#15 手術刀）：切取楔形全層皮膚組織，適用於深層病變。Excisional biopsy：完整切除病灶（適用於腫瘤）。所有標本立即放入 10% NBF（組織:固定液 ≥ 1:10）。取樣前不清洗或刮搔病灶表面。局部麻醉注射於病灶周圍而非正下方。每個病例建議取 2-3 個不同部位標本。',
    normal_findings: [
      { finding: '正常皮膚結構', description: '完整表皮、真皮乳頭層與網狀層結構正常、附屬器（毛囊、皮脂腺、汗腺）形態正常', significance: '排除結構性皮膚病變' },
      { finding: '正常角質層', description: '薄層均勻的角化層，無過度角化或異常角化', significance: '排除角化異常疾病' },
      { finding: '正常毛囊週期', description: 'Anagen 與 telogen 毛囊比例正常，毛球形態完整', significance: '排除毛囊疾病與內分泌脫毛' },
    ],
    abnormal_findings: [
      { finding: '基底層液化變性（interface dermatitis）', description: '基底層空泡化、淋巴球浸潤表真皮交界處、個別角質細胞壞死', significance: '高度提示自體免疫疾病（紅斑性狼瘡、多形性紅斑）或藥物反應' },
      { finding: '棘層鬆解（acantholysis）', description: '角質細胞間黏附喪失、游離圓形角質細胞（acantholytic cells）', significance: '天疱瘡的特徵性表現，要往下分型（PF vs PV）' },
      { finding: '嗜表皮淋巴球浸潤', description: '異型淋巴球侵入表皮，可形成 Pautrier microabscess', significance: '皮膚 T 細胞淋巴瘤（CTCL/蕈狀肉芽腫）的特徵' },
      { finding: '有絲分裂指數升高', description: '腫瘤細胞有絲分裂計數 ≥ 7/10 HPF', significance: 'Kiupel High grade MCT 的診斷標準之一' },
    ],
    interpretation_guide: '1. 低倍鏡（2x-4x）評估整體型態（表皮變化、炎症分佈模式、深度）。2. 確認反應型態（interface/perivascular/vesiculopustular/nodular-diffuse/follicular）。3. 高倍鏡（40x）評估細胞型態、有絲分裂、特殊結構。4. 需結合臨床病史、照片與鑑別診斷列表綜合判讀。5. 報告應包含描述性診斷與形態學診斷，並提供可能的鑑別診斷排序。',
    pitfalls: [
      '取樣部位選擇不當（活檢慢性苔蘚化區域而非新鮮活動性病灶）',
      '使用過小的 punch（< 6 mm）導致標本不足以判讀',
      '活檢前清洗病灶或移除痂皮，破壞表面診斷線索',
      '未提供臨床照片與完整病史，導致病理醫師無法給出特異性診斷',
      '標本固定不當（福馬林量不足或延遲固定）導致組織自溶',
    ],
    sensitivity_specificity: '組織病理學的診斷準確率取決於取樣品質、臨床資訊充足度及病理醫師經驗。配合臨床照片與完整病史，診斷準確率可達 80-95%。為皮膚疾病的金標準診斷工具（Level I evidence）。',
    cost_benefit: '中等成本（活檢耗材 + 病理費用），但對於治療無反應或診斷不明的皮膚病，組織病理學是不可替代的確定性診斷工具。尤其對於自體免疫皮膚病與皮膚腫瘤分級具有決定性價值。',
  },
  procedure_data: null,
  visual_placeholders: [
    { position: '活檢技術段落後', type: 'comparison_table', description: 'Punch vs Wedge vs Excisional biopsy 比較表' },
    { position: '反應型態段落後', type: 'comparison_table', description: '五種主要組織病理學反應型態與代表疾病對照表' },
  ],
  interactive_placeholders: [
    { position: '活檢適應症段落', type: 'decision_tree', description: '何時需要皮膚活檢？臨床決策樹' },
  ],
  drug_api_links: [],
  references: [
    { type: 'textbook', citation: "Miller WH, Griffin CE, Campbell KL. Muller and Kirk's Small Animal Dermatology, 7th ed. Elsevier, 2013. Chapter 3: Diagnostic Methods.", relevance: '皮膚活檢技術與組織病理學型態經典參考' },
    { type: 'textbook', citation: "Gross TL, Ihrke PJ, Walder EJ, Affolter VK. Skin Diseases of the Dog and Cat: Clinical and Histopathological Diagnosis, 2nd ed. Blackwell, 2005.", relevance: '獸醫皮膚組織病理學專著，反應型態分類標準' },
    { type: 'journal', citation: 'Mauldin EA, Peters-Kennedy J. Integumentary System. In: Maxie MG, ed. Jubb, Kennedy & Palmer\'s Pathology of Domestic Animals, 6th ed. Elsevier, 2016;1:509-736.', relevance: '家畜皮膚病理學參考' },
    { type: 'guideline', citation: 'Yager JA. An approach to the histological diagnosis of skin disease. In: BSAVA Manual of Canine and Feline Dermatology, 3rd ed. 2012;22-31.', relevance: '系統性組織病理學判讀方法指引' },
  ],
  is_current: true,
  created_at: now,
};

/** 貓嗜酸性肉芽腫複合症 (EGC)，疾病型 */
const contentEGC: NodeContent = {
  id: 'CONTENT-DERM-L3-015',
  node_id: 'DERM-L3-015',
  version: 2,
  summary: '貓嗜酸性肉芽腫複合症（Feline Eosinophilic Granuloma Complex, EGC）是貓特有的一組炎症性皮膚跟口腔黏膜病變，包含三種臨床型態：惰性潰瘍（indolent ulcer）、嗜酸性斑塊（eosinophilic plaque）跟線狀肉芽腫（linear/collagenolytic granuloma）。超過 80% 的病例都有潛在過敏基礎（跳蚤過敏、食物不良反應、環境過敏），少數是特發性的。診斷靠臨床表現加細胞學（嗜酸球為主），組織病理可以確認。治療策略以控制潛在過敏原為核心，藥物選擇有局部 tacrolimus、全身性糖皮質激素跟 cyclosporine。',
  learning_objectives: [
    '辨識 EGC 三種臨床型態的特徵性表現與好發部位',
    '闡述 EGC 與過敏基礎之間的病理生理關聯',
    '規劃 EGC 的診斷流程，包含細胞學與鑑別診斷',
    '比較局部治療（tacrolimus）與全身性治療（prednisolone/cyclosporine）的適應症',
    '設計 EGC 患貓的長期管理策略，包含過敏原控制',
  ],
  key_points: [
    'EGC 包含三型：惰性潰瘍（上唇）、嗜酸性斑塊（腹部/大腿內側）、線狀肉芽腫（大腿後側/口腔）',
    '超過 80% EGC 有潛在過敏基礎：跳蚤過敏 > 食物不良反應 > 環境過敏原',
    '惰性潰瘍（rodent ulcer）好發上唇，呈紅棕色潰瘍，邊緣隆起，通常不痛不癢',
    '嗜酸性斑塊高度瘙癢，表面糜爛濕潤，細胞學見大量嗜酸球',
    '線狀肉芽腫好發大腿後側，呈線狀或結節狀黃色至粉色斑塊，膠原退化為特徵',
    '細胞學為初步診斷工具：嗜酸球為主的炎症浸潤',
    '鑑別診斷必須排除鱗狀上皮細胞癌（SCC）與肥大細胞瘤（MCT）',
    'Methylprednisolone acetate 長效注射適用於餵藥困難的貓',
  ],
  body: `# 貓嗜酸性肉芽腫複合症 (Feline Eosinophilic Granuloma Complex)

## 一、病理機制 (Pathophysiology)

### 概述
EGC 不是單一疾病，而是一組以嗜酸球浸潤、膠原退化為特徵的臨床反應型態。目前認為大多數 EGC 是對各種過敏原（跳蚤、食物、環境）跑出的嗜酸球介導型免疫反應，少部分是特發性。

### 免疫病理
- 過敏原刺激 → Th2 型免疫反應 → IL-5（嗜酸球趨化與活化）上升。
- 嗜酸球浸潤組織後，釋放 major basic protein (MBP) 跟 eosinophil cationic protein (ECP)。
- MBP 跟 ECP 造成膠原退化（collagenolysis）跟組織損傷。
- 線狀肉芽腫：嗜酸球圍繞退化的膠原形成「火焰圖樣」（flame figures）。
- 惰性潰瘍：慢性免疫反應造成上皮缺損加上肉芽組織增生。

### 潛在病因
| 病因類別 | 比例 | 備註 |
|---------|------|------|
| 跳蚤過敏 | 30-40% | 台灣常見，嚴格除蚤試驗為第一步 |
| 食物不良反應 | 15-25% | 8-12 週排除飲食試驗 |
| 環境過敏原 | 15-20% | 室內塵蟎、花粉 |
| 特發性 | 15-20% | 排除所有過敏原後仍反覆發作 |
| 蚊蟲咬傷過敏 | < 5% | 好發耳翼與鼻樑（台灣夏季好發） |

## 二、臨床表現與診斷 (Clinical Features & Diagnosis)

### 三種臨床型態

| 型態 | 好發部位 | 外觀 | 瘙癢 | 特徵 |
|------|---------|------|------|------|
| 惰性潰瘍 (Indolent Ulcer) | 上唇（單/雙側） | 紅棕色、邊緣隆起的潰瘍 | 不痛不癢 | 又稱 rodent ulcer；不痛是重要特徵 |
| 嗜酸性斑塊 (Eosinophilic Plaque) | 腹部、大腿內側 | 隆起、糜爛、濕潤表面 | 劇烈瘙癢 | 細胞學嗜酸球最豐富 |
| 線狀肉芽腫 (Linear Granuloma) | 大腿後側、口腔 | 線狀/結節狀黃粉色斑塊 | 輕/無 | 口腔型可見下唇「腫脹下巴」(fat chin) |

### 診斷流程
1. 臨床形態辨識：依病灶型態、好發部位、搔癢程度做初步判斷。
2. 細胞學檢查（印片或 FNA）：看到大量嗜酸球（通常超過 50%），可能伴少量嗜中性球。
3. 排除腫瘤：惰性潰瘍一定要跟 SCC 鑑別，做 FNA 或活檢。
4. 找潛在過敏原：
   - 嚴格跳蚤預防試驗（isoxazoline 類，至少 8 週）。
   - 排除飲食試驗（水解蛋白或新奇蛋白，8-12 週）。
   - 環境過敏原檢測（IgE 血清學或皮內試驗）。
5. 組織病理（必要時）：嗜酸球浸潤、膠原退化（火焰圖樣）、肉芽腫反應。

### 鑑別診斷
| 疾病 | 鑑別要點 |
|------|---------|
| 鱗狀上皮細胞癌 (SCC) | 老年貓、耳尖/鼻部好發、組織病理見角化珠與侵犯性上皮 |
| 肥大細胞瘤 (MCT) | 單一結節、FNA 見異染顆粒而非嗜酸球 |
| 貓疱疹病毒皮膚炎 | 面部潰瘍、PCR 陽性、對抗病毒治療有反應 |
| 蚊蟲咬傷過敏 | 好發耳翼/鼻樑、季節性（夏季）、限制外出可改善 |

## 三、治療策略 (Treatment Strategy)

### 第一步：控制潛在過敏原
- 嚴格跳蚤預防（所有病例）
- 排除飲食試驗（食物不良反應佔 15-25%）
- 環境過敏原控制

### 藥物治療

| 藥物 | 劑量 | 適應症 | 備註 |
|------|------|--------|------|
| Tacrolimus 0.1% 軟膏 | BID 外用 | 輕度/局部病灶，首選 | 惰性潰瘍局部治療效果佳 |
| Prednisolone | 2 mg/kg PO SID × 2 週 → 漸減 | 中-重度/多發病灶 | 漸減至最低有效劑量或停藥 |
| Methylprednisolone acetate | 4 mg/kg SC，每 2-3 個月 | 餵藥困難的貓 | 長期使用增加糖尿病風險 |
| Cyclosporine | 7 mg/kg PO SID | 類固醇反應差或需長期控制 | 起效需 4-6 週，監測腸胃副作用 |
| Dexamethasone | 0.1-0.2 mg/kg PO SID × 3 天 → 停 | 急性嚴重病灶短期控制 | 效力比 prednisolone 強 7 倍 |

### 治療流程
1. 所有病例→ 嚴格跳蚤預防 + 排除飲食試驗
2. 輕度局部→ Tacrolimus 0.1% BID 外用
3. 中度/多發→ Prednisolone 2 mg/kg PO SID × 14 天 → 漸減 4-6 週
4. 餵藥困難→ Methylprednisolone acetate 4 mg/kg SC
5. 反覆發作/類固醇依賴→ Cyclosporine 7 mg/kg PO SID 長期
6. 頑固型→ Chlorambucil 2 mg PO q48-72h + prednisolone 低劑量

## 四、預後 (Prognosis)

- 有明確過敏基礎並可控制者：預後良好，控制過敏原可減少復發
- 特發性病例：常需長期間歇性藥物控制，預後保留
- 惰性潰瘍：對治療反應通常良好，但停藥後復發率 30-50%
- 嗜酸性斑塊：對糖皮質激素反應最快，但停藥後復發率高
- 線狀肉芽腫：部分幼貓（< 1 歲）可自行消退
- 惡性轉化風險：長期慢性惰性潰瘍極罕見報告轉化為 SCC，但風險極低

## 五、人醫借鑒 (Translational Insights)

| 人醫工具/概念 | 獸醫應用潛力 | 現況 |
|-------------|-------------|------|
| 嗜酸球生物學與抗 IL-5（mepolizumab）、抗 IL-4Rα（dupilumab） | EGC 為嗜酸球/Th2 介導，標靶細胞激素的概念性借鏡 | 人醫已用於嗜酸性疾病/異位性皮膚炎；貓尚無對應上市生物製劑（lokivetmab 為犬用抗 IL-31） |
| 過敏原特異性減敏治療（ASIT） | 環境過敏驅動的 EGC 長期減敏、減少類固醇依賴 | 人醫標準，獸醫貓 ASIT 有部分證據 |
| 鈣調磷酸酶抑制劑（外用 tacrolimus、全身 ciclosporin） | 類固醇替代/節制 | 沿用人醫移植/異位性皮膚炎用藥邏輯，貓 ciclosporin 已上市（King 2012 RCT） |
| 食物過敏成分解析診斷（CRD） | 精準鑑定致敏蛋白、優化排除飲食 | 人醫進展，獸醫貓食物過敏診斷起步 |

## 六、臨床爭議與知識空缺 (Controversies & Knowledge Gaps)

| 爭議議題 | 現況 | Evidence Level |
|---------|------|---------------|
| EGC 是否「總是」過敏驅動／「特發性」是否僅是未找到的過敏 | >80% 有過敏基礎，特發性多為診斷不足；缺前瞻性追因研究 | Level III |
| 部分病灶對 amoxicillin-clavulanate 有效的機轉（細菌過敏/繼發感染 vs 巧合） | Wildermuth 觀察到部分嗜酸性斑塊/唇潰瘍對抗生素反應，機轉未明 | Level III |
| 長效 methylprednisolone vs 口服 prednisolone vs ciclosporin 的長期效益/安全排序 | 缺頭對頭 RCT；長效注射糖尿病風險高，趨勢偏向節制類固醇 | Level IV |
| oclacitinib／JAK 抑制劑在貓 EGC 的角色 | 仿單外、貓藥動與安全資料有限，EGC 專屬證據不足 | Level IV |

## 七、近期實證更新 (Recent Evidence Updates)

### EGC 是「反應模式」不是診斷——ICADA 命名共識
2021 ICADA 貓過敏性疾病命名共識（Halliwell 2021）正式把 EGC 三型歸為「貓過敏性皮膚病的皮膚反應模式」，強調 EGC 是表現型而非最終診斷，臨床務必往下追過敏病因（跳蚤/食物/環境），而非僅以類固醇壓制症狀。

### Ciclosporin 鞏固類固醇替代地位
貓用微乳化 ciclosporin（Atopica for Cats）經 RCT 驗證對貓過敏性/嗜酸性皮膚病有效（King 2012），成為類固醇依賴或需長期控制者的實證替代，可避免長效類固醇的糖尿病風險；起效約 4-6 週，須監測腸胃副作用及感染（含弓蟲）風險。

### 貓用過敏標靶治療仍在路上
犬已有抗 IL-31 單株抗體（lokivetmab）與 oclacitinib，但貓尚無上市的抗搔癢生物製劑（frunevetmab 為抗 NGF、針對骨關節炎疼痛，非過敏搔癢）；oclacitinib 用於貓屬仿單外、證據有限。貓過敏搔癢的標靶治療仍是明確的未滿足臨床需求。`,
  clinical_pearl: 'EGC 的治療核心不是壓症狀，而是找出並控制潛在過敏原。看到 EGC 第一件事不是開類固醇，是做嚴格跳蚤預防試驗。台灣跳蚤問題嚴重，這一步常被跳過。餵藥困難的貓可以考慮 methylprednisolone acetate 長效注射，但一年不要超過 3-4 次（糖尿病風險）。幼貓的口腔線狀肉芽腫常常會自己好，不一定要積極治療。',
  common_mistakes: [
    '未排除 SCC 即以 EGC 治療惰性潰瘍（尤其老年貓必須活檢）',
    '未做嚴格跳蚤預防試驗就直接使用類固醇',
    '長期反覆使用 methylprednisolone acetate 注射而未嘗試其他方案',
    '未進行排除飲食試驗就斷定為特發性',
    '將三種型態誤認為不同疾病而非同一複合症的不同表現',
  ],
  disease_data: {
    signalment: '所有年齡貓皆可發生，好發 2-6 歲。無明顯品種好發性，但部分文獻報告短毛家貓比例較高。幼貓（< 1 歲）線狀肉芽腫可見自發消退。無明顯性別差異（惰性潰瘍部分文獻報告母貓較多）。',
    etiology: '超過 80% 有潛在過敏基礎：跳蚤過敏（最常見）、食物不良反應、環境過敏原（塵蟎、花粉）。少部分為蚊蟲咬傷過敏或特發性。遺傳因素可能參與（少數家系報告）。',
    pathogenesis: '過敏原 → Th2 免疫反應 → IL-5 促進嗜酸球趨化與活化 → 嗜酸球浸潤皮膚/黏膜 → 釋放 major basic protein (MBP) 與 eosinophil cationic protein → 膠原退化（collagenolysis/flame figures）與組織損傷 → 臨床病灶形成。三種型態反映不同程度與深度的嗜酸球介導損傷。',
    clinical_signs: [
      { sign: '惰性潰瘍', category: 'primary', description: '上唇單/雙側紅棕色潰瘍，邊緣隆起，不痛不癢，又稱 rodent ulcer' },
      { sign: '嗜酸性斑塊', category: 'primary', description: '腹部/大腿內側隆起糜爛性斑塊，劇烈瘙癢，表面濕潤' },
      { sign: '線狀肉芽腫', category: 'primary', description: '大腿後側線狀/結節狀黃粉色斑塊，口腔可見「腫脹下巴」' },
      { sign: '繼發細菌感染', category: 'secondary', description: '慢性病灶易繼發細菌感染，增加分泌物與氣味' },
      { sign: '周邊嗜酸球增多', category: 'secondary', description: '部分病例血液嗜酸球計數升高' },
    ],
    staging: null,
    differential_diagnosis: [
      { condition: '鱗狀上皮細胞癌 (SCC)', key_differentiator: '老年貓、白色貓好發，耳尖/鼻/唇好發，組織病理見角化珠' },
      { condition: '肥大細胞瘤 (MCT)', key_differentiator: '單一結節性病灶，FNA 見異染顆粒而非嗜酸球' },
      { condition: '貓疱疹病毒皮膚炎', key_differentiator: '面部/鼻部潰瘍，FHV-1 PCR 陽性' },
      { condition: '蚊蟲咬傷過敏', key_differentiator: '耳翼/鼻樑好發，嚴格限制夏季，限制外出可改善' },
    ],
    diagnostic_workup: '1. 臨床形態辨識（三型各有特徵）→ 2. 細胞學（印片或 FNA：嗜酸球 > 50%）→ 3. 排除腫瘤（惰性潰瘍必須排除 SCC）→ 4. 嚴格跳蚤預防試驗（isoxazoline 8 週）→ 5. 排除飲食試驗（8-12 週）→ 6. 環境過敏原檢測（血清 IgE 或皮內試驗）→ 7. 必要時組織病理確認',
    treatment_protocol: '1. 所有病例嚴格跳蚤預防。2. 排除飲食試驗。3. 輕度局部：Tacrolimus 0.1% BID。4. 中-重度：Prednisolone 2 mg/kg PO SID × 14 天後漸減。5. 餵藥困難：Methylprednisolone acetate 4 mg/kg SC q2-3 個月。6. 類固醇依賴/反應差：Cyclosporine 7 mg/kg PO SID。7. 頑固型：Chlorambucil 2 mg PO q48-72h + 低劑量 prednisolone。',
    prognosis: '有明確過敏基礎並可控制者預後良好。特發性病例需長期間歇性藥物控制。惰性潰瘍治療反應佳但停藥復發率 30-50%。嗜酸性斑塊對糖皮質激素反應快但復發率高。幼貓線狀肉芽腫可能自行消退。整體生活品質可維持良好。',
    monitoring: '治療初期每 2 週評估臨床反應。糖皮質激素長期使用者每 3-6 個月監測血糖、尿液分析（糖尿病風險）。Cyclosporine 使用者每 3 個月複查 CBC/生化。復發時重新評估過敏原控制計畫。',
    owner_communication: 'EGC 是一種過敏引起的皮膚反應，不是傳染病也不會傳給人。最重要的是找出過敏原（跳蚤、食物等）並加以控制。藥物可以控制症狀，但如果不處理根本原因容易復發。長期注射類固醇雖然方便但有糖尿病風險，建議嘗試口服藥物或局部治療。部分年輕貓的肉芽腫可能自己好起來。',
  },
  diagnostic_data: null,
  procedure_data: null,
  visual_placeholders: [
    { position: '三型比較段落後', type: 'comparison_table', description: 'EGC 三種臨床型態對照圖' },
    { position: '治療段落後', type: 'flowchart', description: 'EGC 診斷與治療決策流程圖' },
  ],
  interactive_placeholders: [
    { position: '鑑別診斷段落', type: 'decision_tree', description: 'EGC 三型辨識與鑑別診斷決策樹' },
  ],
  drug_api_links: ['Tacrolimus', 'Prednisolone', 'Methylprednisolone', 'Cyclosporine', 'Chlorambucil'],
  references: [
    { type: 'textbook', citation: "Miller WH, Griffin CE, Campbell KL. Muller and Kirk's Small Animal Dermatology, 7th ed. Elsevier, 2013. Chapter 14: Eosinophilic Skin Diseases.", relevance: 'EGC 臨床特徵、診斷與治療的經典教材參考' },
    { type: 'journal', citation: 'Buckley L, Nuttall T. Feline eosinophilic granuloma complex(ities): some clinical clarification. J Feline Med Surg. 2012;14(7):471-481. doi:10.1177/1098612x12451549.', relevance: 'EGC 三型臨床分類與過敏基礎的系統性綜述' },
    { type: 'journal', citation: 'Ravens PA, Xu BJ, Vogelnest LJ. Feline atopic dermatitis: a retrospective study of 45 cases (2001-2012). Vet Dermatol. 2014;25(2):95-102. doi:10.1111/vde.12109.', relevance: '貓過敏性皮膚病（含 EGC）的臨床表現與治療結果回顧' },
    { type: 'journal', citation: 'Wildermuth BE, Griffin CE, Rosenkrantz WS. Response of feline eosinophilic plaques and lip ulcers to amoxicillin trihydrate-clavulanate potassium therapy: a randomized, double-blind, placebo-controlled prospective study. Vet Dermatol. 2012;23(2):110-e25. doi:10.1111/j.1365-3164.2011.01020.x.', relevance: '部分 EGC 病例對抗生素有反應的前瞻性 RCT' },
    { type: 'journal', citation: 'King S, Favrot C, Messinger L, et al. A randomized double-blinded placebo-controlled study to evaluate an effective ciclosporin dose for the treatment of feline hypersensitivity dermatitis. Vet Dermatol. 2012;23(5):440-e84. doi:10.1111/j.1365-3164.2012.01086.x.', relevance: '貓 ciclosporin 治療過敏性皮膚病的關鍵 RCT（類固醇替代實證）' },
    { type: 'guideline', citation: 'Halliwell R, Pucheu-Haston CM, Olivry T, et al. Feline allergic diseases: introduction and proposed nomenclature. Vet Dermatol. 2021;32(1):8-e2. doi:10.1111/vde.12899.', relevance: 'ICADA 貓過敏性疾病命名與分類共識（涵蓋 EGC 等反應模式）' },
  ],
  is_current: true,
  created_at: now,
};

/** 脂腺炎 (Sebaceous Adenitis)，疾病型 */
const contentSA: NodeContent = {
  id: 'CONTENT-DERM-L3-016',
  node_id: 'DERM-L3-016',
  version: 1,
  summary: '脂腺炎（Sebaceous Adenitis, SA）是一種以皮脂腺被免疫介導性肉芽腫性破壞為特徵的罕見皮膚病，最常見於標準貴賓犬（Standard Poodle，遺傳性體染色體隱性），秋田犬、Vizsla 那些品種也會。病理上皮脂腺被炎症浸潤取代、最後消失，皮膚就跑乾燥、毛囊鑄型（follicular cast）跟脫毛。毛囊鑄型是高度特徵性的臨床表現。確診要靠組織病理學（皮脂腺周圍肉芽腫性炎症或皮脂腺缺失）。治療以局部油浴、角質溶解洗劑跟 cyclosporine 為主。',
  learning_objectives: [
    '辨識脂腺炎的臨床特徵與好發品種',
    '描述脂腺炎的免疫介導病理機轉',
    '闡述毛囊鑄型（follicular cast）的形成機制與臨床辨識',
    '規劃脂腺炎的診斷流程，理解組織病理為確診金標準',
    '設計脂腺炎的多模式治療計畫（油浴+洗劑+免疫調節）',
  ],
  key_points: [
    '標準貴賓犬為最好發品種（體染色體隱性遺傳，盛行率 2-5%），秋田犬、Vizsla 亦好發',
    '病理核心：免疫介導性肉芽腫性炎症破壞皮脂腺 → 皮脂缺乏 → 皮膚乾燥與角化異常',
    '毛囊鑄型（follicular cast）為高度特徵性表現：緊密附著於毛幹的角質管狀物',
    '標準貴賓犬：瀰漫性乾燥、鱗屑、脫毛；秋田犬：較脂溢性、深層膿皮症更常見',
    '確診需皮膚活檢組織病理：早期見皮脂腺周圍肉芽腫性炎症；晚期皮脂腺完全消失',
    '治療三大支柱：油浴浸泡（礦物油/嬰兒油）、角質溶解洗劑（硫磺/水楊酸）、Cyclosporine 5 mg/kg PO SID',
    '預後視品種而異：標準貴賓犬治療反應較佳，秋田犬預後較差',
  ],
  body: `# 脂腺炎 (Sebaceous Adenitis)

## 一、病理機制 (Pathophysiology)

### 病因
- 免疫介導性：T 淋巴球介導的肉芽腫性炎症選擇性攻擊皮脂腺。
- 遺傳基礎：標準貴賓犬是體染色體隱性遺傳（autosomal recessive），盛行率約 2-5%。
- 確切的觸發因素不明，可能是遺傳易感性加上環境觸發。

### 病理過程
1. T 細胞介導的免疫反應靶向皮脂腺上皮。
2. 淋巴球跟組織球浸潤皮脂腺周圍（periglandular granulomatous inflammation）。
3. 皮脂腺被進行性破壞，皮脂分泌喪失。
4. 繼發角化異常：毛囊角質過度堆積，毛囊鑄型（follicular cast）就形成。
5. 皮膚屏障功能下降，跑出繼發細菌性膿皮症。

### 組織病理分期
| 分期 | 病理特徵 | 臨床意義 |
|------|---------|---------|
| 早期（活動期） | 皮脂腺周圍淋巴球/組織球/漿細胞浸潤 | 可確診，仍有治療窗口 |
| 中期（進展期） | 皮脂腺萎縮、部分被肉芽腫取代 | 確診明確 |
| 晚期（靜止期） | 皮脂腺完全消失、纖維化取代 | 僅見皮脂腺缺失，需結合臨床判斷 |

## 二、臨床表現與診斷 (Clinical Features & Diagnosis)

### 好發品種與年齡
- 標準貴賓犬（Standard Poodle）：最具代表性，1-5 歲發病，體染色體隱性
- 秋田犬（Akita）：表現較不典型，更脂溢性，易繼發膿皮症
- Vizsla：典型乾性表現
- Samoyed、German Shepherd Dog：偶有報告
- 貓：極罕見，表現與犬不同

### 臨床特徵比較
| 特徵 | 標準貴賓犬 | 秋田犬 |
|------|-----------|--------|
| 鱗屑類型 | 乾性、細碎白色 | 較油脂性 |
| 毛囊鑄型 | 非常明顯（pathognomonic） | 較不明顯 |
| 脫毛分布 | 背側軀幹、耳翼、尾部 | 類似但更瀰漫 |
| 繼發膿皮症 | 偶見 | 常見且較嚴重 |
| 治療反應 | 較佳 | 較差 |
| 預後 | 可管控 | 保留至不佳 |

### 診斷要點
1. 臨床辨識：好發品種加上毛囊鑄型再加上乾性鱗屑脫毛，高度懷疑就是。
2. 毛髮檢查（Trichogram）：看到毛幹上附著的角質鑄型物。
3. 皮膚活檢是確診金標準：
   - 取材：背側軀幹病灶區加上正常皮膚對照。
   - 早期：皮脂腺周圍的肉芽腫性炎症。
   - 晚期：皮脂腺完全缺失（要注意正常犬某些部位皮脂腺本來就比較少）。
4. 排除其他角化異常：甲狀腺低下、皮膚癬菌症、皮脂溢出症。
5. 繼發膿皮症培養：尤其是秋田犬，要評估有沒有抗藥性。

### 鑑別診斷
| 疾病 | 鑑別要點 |
|------|---------|
| 甲狀腺功能低下 | T4/TSH 異常，伴有肥胖/嗜睡/心搏過緩 |
| 皮膚癬菌症 | Wood's lamp/DTM 培養陽性 |
| 原發性皮脂溢出症 | 皮脂腺正常但功能過度，組織病理皮脂腺完整 |
| 脫毛症 X | 無毛囊鑄型，組織病理皮脂腺存在 |
| 落葉型天疱瘡 | 有膿疱，細胞學見棘層鬆解細胞 |

## 三、治療策略 (Treatment Strategy)

### 局部治療（所有病例的基礎）

#### 油浴浸泡（Oil Bath Soak）
- 方法：礦物油或嬰兒油全身塗抹 → 浸泡 2-4 小時（可穿 T-shirt 防舔） → 角質溶解洗劑洗去
- 頻率：初期每週 1-2 次 → 改善後每 2-4 週 1 次
- 目的：軟化並移除毛囊鑄型，補充皮膚脂質

#### 角質溶解洗劑
- 硫磺/水楊酸洗劑（sulfur 2% / salicylic acid 2%）：軟化角質、抗菌
- 使用方法：油浴後使用，接觸時間 10 分鐘後沖洗
- 頻率：配合油浴頻率

### 全身性治療

| 藥物 | 劑量 | 適應症 | 備註 |
|------|------|--------|------|
| Cyclosporine | 5 mg/kg PO SID | 中-重度或局部治療反應差 | 起效 6-8 週，反應率 60-70% |
| Essential fatty acids | EPA/DHA 補充 | 所有病例輔助 | 改善皮膚屏障，6-8 週見效 |
| Vitamin A (Retinol) | 10,000-30,000 IU PO SID | 輔助角化調控 | 標準貴賓犬反應不一 |
| 抗生素 | 依培養結果 | 繼發膿皮症 | 秋田犬常需要，至少 4-6 週 |

### 治療流程
1. 所有病例→ 油浴 + 硫磺水楊酸洗劑 + 必需脂肪酸補充
2. 輕度→ 上述局部治療 3 個月評估
3. 中-重度/局部治療反應差→ 加 Cyclosporine 5 mg/kg PO SID
4. 繼發膿皮症→ 依培養結果加抗生素治療
5. 難治型→ 考慮 Cyclosporine + Vitamin A 組合

## 四、預後 (Prognosis)

- 標準貴賓犬：積極治療下預後可接受，多數可獲得良好控制但需終生管理
- 秋田犬：預後較差，繼發膿皮症控制困難，治療反應率較低
- Vizsla：介於兩者之間，治療反應中等
- 毛髮再生：部分犬治療後毛髮可部分再生，但通常無法恢復原本品質
- 生活品質：不影響壽命，適當管理下生活品質可維持良好
- 繁殖建議：確診犬不應繁殖（隱性遺傳，建議品種篩檢）`,
  clinical_pearl: '遇到標準貴賓犬「反覆膿皮症」治不好的時候，別忘了檢查毛囊鑄型。把毛拔起來看看毛幹上有沒有緊密附著的白色管狀角質物。這個簡單的 trichogram 發現就可以讓你懷疑脂腺炎，但確診永遠要靠活檢。油浴聽起來老派但效果真的很好。關鍵是浸泡時間要夠長（至少 2 小時），而且要用角質溶解洗劑把油洗掉。建議飼主先看油浴示範影片。',
  common_mistakes: [
    '未做活檢就以「皮脂溢出症」治療，延誤脂腺炎的正確診斷',
    '活檢取晚期病灶（皮脂腺已完全消失），病理僅報告「皮脂腺缺失」而非肉芽腫性炎症',
    '油浴浸泡時間不足（< 1 小時）或未使用角質溶解洗劑洗去殘油',
    '未控制繼發膿皮症即開始免疫調節治療',
    '確診犬繼續繁殖（體染色體隱性，會擴大攜帶者群體）',
  ],
  disease_data: {
    signalment: '標準貴賓犬最好發（體染色體隱性，盛行率 2-5%），發病年齡 1-5 歲。秋田犬、Vizsla、Samoyed、German Shepherd Dog 亦有報告。無明顯性別差異。貓極罕見。',
    etiology: '免疫介導性（T 細胞介導肉芽腫性炎症靶向皮脂腺）。標準貴賓犬為體染色體隱性遺傳。確切觸發因素不明。',
    pathogenesis: '遺傳易感性 → T 細胞介導免疫反應靶向皮脂腺上皮 → 皮脂腺周圍肉芽腫性炎症（淋巴球/組織球/漿細胞浸潤）→ 皮脂腺進行性破壞與消失 → 皮脂分泌喪失 → 毛囊角質過度堆積（follicular cast）+ 皮膚乾燥 → 繼發角化異常與細菌感染。',
    clinical_signs: [
      { sign: '毛囊鑄型', category: 'primary', description: '毛幹上緊密附著的白色管狀角質物，為高度特徵性表現（pathognomonic）' },
      { sign: '乾性鱗屑', category: 'primary', description: '背側軀幹瀰漫性乾燥白色細碎鱗屑' },
      { sign: '脫毛', category: 'primary', description: '背側軀幹、耳翼、尾部對稱性脫毛' },
      { sign: '被毛品質下降', category: 'primary', description: '被毛粗糙、無光澤、易斷裂' },
      { sign: '繼發膿皮症', category: 'secondary', description: '皮膚屏障破壞導致細菌感染，秋田犬尤其嚴重' },
    ],
    staging: null,
    differential_diagnosis: [
      { condition: '甲狀腺功能低下', key_differentiator: '全身症狀（肥胖、嗜睡）、T4/TSH 異常、組織病理皮脂腺存在' },
      { condition: '皮膚癬菌症', key_differentiator: 'Wood\'s lamp/DTM 陽性、真菌培養確認' },
      { condition: '原發性皮脂溢出症', key_differentiator: '組織病理皮脂腺存在且肥大' },
      { condition: '脫毛症 X', key_differentiator: '無毛囊鑄型、無鱗屑、組織病理皮脂腺存在' },
    ],
    diagnostic_workup: '1. 臨床評估（品種、毛囊鑄型、鱗屑分布）→ 2. Trichogram（毛幹角質鑄型）→ 3. 皮膚活檢（背側病灶 + 正常皮膚對照）→ 4. 排除甲狀腺低下（T4/TSH）→ 5. 排除皮膚癬菌（DTM/PCR）→ 6. 繼發膿皮症培養（尤其秋田犬）',
    treatment_protocol: '1. 所有病例：油浴浸泡（礦物油 2-4 小時）+ 硫磺水楊酸洗劑 + EFA 補充。2. 輕度：局部治療 3 個月評估。3. 中-重度：加 Cyclosporine 5 mg/kg PO SID。4. 繼發膿皮症：依培養結果抗生素治療 4-6 週。5. 難治型：Cyclosporine + Vitamin A 10,000-30,000 IU PO SID。',
    prognosis: '標準貴賓犬治療反應較佳，積極治療下多數可良好控制但需終生管理。秋田犬預後較差，繼發膿皮症控制困難。不影響壽命。部分犬治療後被毛可部分再生但品質通常無法恢復至正常。確診犬不應繁殖。',
    monitoring: '治療初期每 4 週評估臨床改善（鱗屑、鑄型、被毛品質）。Cyclosporine 使用者每 3 個月 CBC/生化。繼發膿皮症者追蹤培養。長期每 3-6 個月複查評估治療計畫調整。',
    owner_communication: '脂腺炎是免疫系統攻擊皮膚油脂腺的疾病，造成皮膚乾燥跟毛髮脫落。這是遺傳性疾病（尤其是標準貴賓犬），沒辦法根治但可以控制得不錯。治療的核心是定期油浴：把油塗滿全身浸泡至少 2 小時，再用藥用洗劑洗掉。這需要飼主的耐心跟配合。嚴重的時候要加口服免疫調節藥物。確診的狗不建議繁殖。',
  },
  diagnostic_data: null,
  procedure_data: null,
  visual_placeholders: [
    { position: '臨床特徵段落後', type: 'comparison_table', description: '標準貴賓犬 vs 秋田犬脂腺炎臨床表現比較' },
    { position: '組織病理段落後', type: 'comparison_table', description: '脂腺炎三期組織病理特徵比較圖' },
  ],
  interactive_placeholders: [
    { position: '治療段落', type: 'decision_tree', description: '脂腺炎治療升階決策樹' },
  ],
  drug_api_links: ['Cyclosporine', 'Sulfur', 'Salicylic acid', 'Vitamin A'],
  references: [
    { type: 'textbook', citation: "Miller WH, Griffin CE, Campbell KL. Muller and Kirk's Small Animal Dermatology, 7th ed. Elsevier, 2013. Chapter 18: Keratinization Defects，Sebaceous Adenitis.", relevance: '脂腺炎臨床診斷與治療的經典教材參考' },
    { type: 'journal', citation: 'Linek M et al. Effects of cyclosporine A on clinical and histologic abnormalities in dogs with sebaceous adenitis. J Am Vet Med Assoc. 2005;226(1):59-64. doi:10.2460/javma.2005.226.59', relevance: 'Cyclosporine 治療脂腺炎的臨床試驗' },
    { type: 'journal', citation: 'Reichler IM et al. "Sebaceous adenitis in the Akita: clinical observations, histopathology and heredity." Vet Dermatol. 2001;12(5):243-253. doi:10.1046/j.0959-4493.2001.00251.x', relevance: '脂腺炎臨床/病理/遺傳（引用真偽稽核：原「standard poodle/10 cases/JSAP 42(7):341-345」品種/期刊/卷期頁全誤植 → 更正為真實 Akita 研究 + DOI）' },
    { type: 'journal', citation: 'Frazer MM et al. "Sebaceous adenitis in Havanese dogs: a retrospective study of the clinical presentation and incidence." Vet Dermatol. 2011;22(3):267-274. doi:10.1111/j.1365-3164.2010.00942.x', relevance: '脂腺炎臨床表現與發生率（引用真偽稽核：原「Vizsla/JAVMA 238(10):1246-1249」品種/期刊/卷期頁全誤植 → 更正為真實 Havanese 研究 + DOI）' },
    { type: 'journal', citation: 'Lortz J, Favrot C, Mecklenburg L, et al. A multicentre placebo-controlled clinical trial on the efficacy of oral ciclosporin A in the treatment of canine idiopathic sebaceous adenitis in comparison with conventional topical treatment. Vet Dermatol. 2010;21(6):593-601. doi:10.1111/j.1365-3164.2010.00902.x.', relevance: '犬特發性脂腺炎口服 ciclosporin A 療效多中心 RCT' },
  ],
  is_current: true,
  created_at: now,
};

/** 盤狀紅斑性狼瘡 (DLE)，疾病型 */
const contentDLE: NodeContent = {
  id: 'CONTENT-DERM-L3-017',
  node_id: 'DERM-L3-017',
  version: 2,
  summary: '盤狀紅斑性狼瘡（Discoid Lupus Erythematosus, DLE；現行分類稱**顏面型 facial DLE/FDLE**）是犬**最常見的皮膚型紅斑性狼瘡（CLE）變異、也是次於落葉型天疱瘡（PF）的第二常見自體免疫皮膚病**。只影響皮膚、不累及全身器官（與 SLE 不同）。典型是鼻平面（nasal planum）去色素化、紅斑、結痂、潰瘍（俗稱「Collie nose」）。組織病理為**介面皮膚炎（細胞毒性 T 細胞攻擊基底角質細胞，非 Type III 免疫複合物）**。光防護（避日曬）為治療基石；一線治療：外用 tacrolimus 0.1% ＋ doxycycline/niacinamide ＋ 嚴格 UV 防護。',
  learning_objectives: [
    '辨識 DLE 的典型臨床表現與好發品種',
    '區分 DLE 與全身性紅斑性狼瘡（SLE）的差異',
    '闡述紫外線在 DLE 病理生理中的角色',
    '描述 DLE 組織病理特徵（界面皮膚炎）',
    '規劃 DLE 的多模式治療策略（UV 防護 + 局部 + 全身性）',
  ],
  key_points: [
    '⚠️ DLE（現行稱 facial DLE/FDLE）是犬**最常見的皮膚型紅斑性狼瘡變異**、第二常見自體免疫皮膚病（**最常見為落葉型天疱瘡 PF**）；僅限皮膚、不同於 SLE 全身累及',
    '典型表現：鼻平面去色素化 → 紅斑 → 結痂 → 潰瘍，病程從鼻尖向鼻樑擴展',
    '好發品種：**德國牧羊犬及混種最具代表**（Olivry 2018 FDLE 世代占 31%）；傳統「Collie nose」列柯利犬/喜樂蒂/哈士奇（此三者現行更常見於 VCLE）；發病 1-12 歲（中位 ~7）',
    '紫外線為加重因子（機轉多外推自人 CLE）；夏重冬輕的明確證據在 VCLE 較強，DLE 仍以「需光防護」為共識',
    '組織病理：**介面皮膚炎**——細胞毒性 T 淋巴球（CD8+）攻擊基底角質細胞→凋亡/液化變性、色素失禁；BMZ IgG/C3（lupus band）為可變診斷標記、非致病機轉（**非 Type III**）',
    '一線治療：Tacrolimus 0.1% 外用 BID + Doxycycline 5 mg/kg PO BID + Niacinamide 250-500 mg PO BID-TID',
    '紫外線防護為治療基石：避免正午陽光、寵物用防曬乳、環境遮蔽',
    'DLE 不需要全身性免疫抑制（不同於 SLE），預後良好',
    '台灣地區 DLE 因日照強烈而需格外強調 UV 防護，建議避免正午遛狗',
  ],
  body: `# 盤狀紅斑性狼瘡 (Discoid Lupus Erythematosus, DLE)

## 一、病理機制 (Pathophysiology)

### DLE vs SLE
- DLE（Discoid LE）：只累及皮膚，不會掃到腎臟、關節、血液這些全身器官。
- SLE（Systemic LE）：多系統累及（皮膚加上腎臟加上關節加上血液學異常）。
- DLE 的 ANA 檢測通常陰性或低滴度，這跟 SLE 常陽性不一樣。
- 兩個是獨立疾病，DLE 極少轉化成 SLE。

### 免疫病理（介面皮膚炎，非 Type III）
- DLE/FDLE 屬**細胞毒性介面皮膚炎（interface dermatitis）**：以**細胞毒性 T 淋巴球（CD8+、Type IV 細胞介導、干擾素驅動）**攻擊基底層角質細胞為主 → 角質細胞凋亡、基底層液化（水腫性）變性。
- **並非以 Type III 免疫複合物／補體活化為主要機轉**——Olivry 2018 明言 DLE 病灶「未見活化補體沉積」。
- 基底膜帶 IgG/IgM/C3 沉積（lupus band test）是**可變、非特異的診斷輔助標記**，不是致病機轉。
- 基底層角質細胞受損連帶破壞其間的色素細胞 → 去色素化（最早可見徵兆）。

### 紫外線的角色（多外推自人 CLE，犬缺專屬證據）
- UV-B（280-315 nm）為**人 CLE** 公認致病/加重波段；誘導角質細胞凋亡、核抗原（Ro/SSA）外露於凋亡小體、促炎細胞因子（TNF-α、IL-1）釋放（Kim & Werth 2013）。
- 臨床「夏重冬輕、戶外犬較嚴重」為傳統獸醫觀察（源自舊「鼻部日光性皮膚炎」概念）；Olivry 2018 將明確的 UV 誘導/夏季發作歸於 **VCLE**，對 DLE 僅強調「需光防護」。

## 二、臨床表現與診斷 (Clinical Features & Diagnosis)

### 好發品種與特徵
- **德國牧羊犬及其混種最具代表**（Olivry 2018 FDLE 104 犬世代占 31%）
- 傳統「Collie nose」文獻另列柯利犬、喜樂蒂牧羊犬、西伯利亞哈士奇——**此三者在現行分類中更常見於 VCLE（非 FDLE）**
- 發病年齡 **1-12 歲（FDLE 中位約 7 歲；GDLE 中位約 9 歲）**，無明顯性別差異

### 典型臨床進程
1. 第一階段（早期）：鼻平面正常的鵝卵石紋理（cobblestone pattern）消失 → 表面變光滑
2. 第二階段：去色素化（depigmentation），黑色鼻頭跑出灰色或粉色斑塊
3. 第三階段：紅斑（erythema）與鱗屑
4. 第四階段：結痂、糜爛與潰瘍
5. 第五階段（嚴重）：鼻平面廣泛潰瘍、可向鼻樑蔓延

### 病灶分布
| 部位 | 頻率 | 備註 |
|------|------|------|
| 鼻平面 | > 90% | 最常見、最典型 |
| 鼻樑 | 30-40% | 嚴重病例向上蔓延 |
| 唇部 | 10-20% | 通常為延伸病灶 |
| 眼周 | 5-10% | 較少見 |
| 耳翼 | 5-10% | 較少見 |
| 遠端肢端/生殖器 | 罕見 | 需重新考慮 SLE |

### 診斷流程
1. 臨床辨識：好發品種加上鼻平面的典型進程加上季節性加重。
2. 排除 SLE：CBC、生化、尿液分析、ANA，把全身累及排掉。
3. 皮膚活檢（確診）：
   - 組織病理：界面皮膚炎（interface dermatitis），基底層液化變性、淋巴球浸潤在表真皮交界處、色素失禁（pigmentary incontinence）。
   - 免疫螢光或免疫組化：基底膜帶有 IgG/IgM/C3 沉積（lupus band test）。
4. 排除其他鑑別：天疱瘡、皮膚癬菌、鱗狀上皮細胞癌、鼻部日光性皮膚炎。

### 鑑別診斷
| 疾病 | 鑑別要點 |
|------|---------|
| 天疱瘡（Pemphigus foliaceus） | 膿疱為主、鼻平面完好（表面非真皮交界處）、細胞學見棘層鬆解細胞 |
| 全身性紅斑性狼瘡 (SLE) | 多系統累及（關節/腎臟/血液）、ANA 陽性、需全身性免疫抑制 |
| 鼻部日光性皮膚炎 | 白色或淡色鼻頭犬、無免疫複合物沉積 |
| 鱗狀上皮細胞癌 (SCC) | 侵犯性病灶、組織破壞、老年犬 |
| 皮膚癬菌症 | DTM/PCR 陽性、無界面皮膚炎 |

## 三、治療策略 (Treatment Strategy)

### 第一步：紫外線防護（所有病例的基石）
- 避開正午（10:00-16:00）的陽光暴露
- 寵物用防曬乳（SPF 30+）；含 zinc oxide 者犬舔食主要造成**腸胃不適**（ZnO 經腸道吸收差，全身性鋅中毒罕見、多來自金屬鋅異物）——仍建議寵物專用配方、塗後短時間防舔
- 鼻部紋身（深色色素沉著術），部分獸醫會用但效果撐不久
- 環境遮蔽：給充足的遮蔭，考慮改成室內飼養

### 藥物治療

| 藥物 | 劑量 | 適應症 | 備註 |
|------|------|--------|------|
| Tacrolimus 0.1% 軟膏 | BID 外用至病灶 | 一線局部治療 | 起效 4-6 週，副作用極少 |
| Doxycycline | 5 mg/kg PO BID | 一線全身治療 | 免疫調節（非抗菌）作用 |
| Niacinamide | 犬 < 10 kg: 250 mg PO TID; ≥ 10 kg: 500 mg PO TID | 與 doxycycline 聯用 | 抑制肥大細胞脫顆粒、抗炎 |
| Vitamin E | 400-800 IU PO SID | 輔助抗氧化 | 安全性高，可長期使用 |
| Prednisolone | 1-2 mg/kg PO SID × 2-4 週 → 漸減 | 嚴重或急性惡化 | 控制後轉換至非類固醇方案 |
| Cyclosporine | 5 mg/kg PO SID | 頑固型 | 一線治療反應差時的替代選擇 |

### 治療流程
1. 所有病例→ 嚴格紫外線防護
2. 一線治療→ Tacrolimus 0.1% BID 外用 + Doxycycline/Niacinamide 口服
3. 6-8 週評估→ 改善：維持並漸減 → 無改善：升階
4. 嚴重/急性惡化→ Prednisolone 1-2 mg/kg PO SID × 2-4 週後漸減
5. 頑固型/類固醇依賴→ Cyclosporine 5 mg/kg PO SID
6. 長期維持→ 最低有效劑量 doxycycline/niacinamide + tacrolimus + UV 防護

## 四、預後 (Prognosis)

- 整體預後不錯。DLE 不威脅生命，適當治療下多數犬可以控制得不錯。
- 不轉化為 SLE：DLE 跟 SLE 是獨立疾病，轉化風險極低。
- 季節性管理：夏天可能需要加強治療，冬天可以適度減量。
- 長期的美容問題：鼻部去色素化可能會永久存在，但不影響功能。
- 併發症風險：長期沒治療的鼻部潰瘍理論上有 SCC 轉化風險，但極罕見。
- 飼主依從性：治療要長期持續，紫外線防護要飼主配合。`,
  clinical_pearl: 'DLE 最常被混淆的是天疱瘡，兩個都好發在鼻面部。關鍵區別記一下：DLE 攻擊基底膜（interface dermatitis），去色素化是最早徵兆；天疱瘡攻擊角質細胞間黏附（acantholysis），膿疱是最早徵兆。DLE 的鼻頭表面會變光滑（cobblestone pattern 消失），這個早期徵兆很實用。Doxycycline 加 niacinamide 的抗炎效果被低估了，很多 DLE 光靠這組合就控制得很好，不用類固醇。',
  common_mistakes: [
    '把 DLE 跟 SLE 搞混，結果用了過度的全身性免疫抑制治療',
    '沒做活檢確診就直接治療（可能漏掉 SCC 或天疱瘡）',
    '忽略紫外線防護。藥物治療沒搭 UV 防護，效果會被打折',
    '把「含 zinc oxide 防曬乳＝鋅中毒」講得過重——ZnO 經腸道吸收差、舔食多僅腸胃不適，全身性鋅中毒罕見（多來自金屬鋅異物）；仍建議寵物專用配方、避免大量舔食',
    '把鼻頭去色素化當成正常老化，結果診斷被拖延',
  ],
  disease_data: {
    signalment: '好發品種：柯利犬（Collie）、德國牧羊犬、西伯利亞哈士奇、喜樂蒂牧羊犬、布列塔尼獵犬。發病年齡通常 3-6 歲。無明顯性別差異。貓極罕見。',
    etiology: '細胞毒性介面皮膚炎（CD8+ T 細胞攻擊基底角質細胞、干擾素驅動；非 Type III 免疫複合物）。紫外線為環境加重因子（機轉多外推自人 CLE）。有遺傳易感性（品種好發）。DLE/FDLE 是獨立的皮膚型狼瘡，非 SLE 的皮膚表現。',
    pathogenesis: '遺傳易感性 + 紫外線加重 → **細胞毒性 T 淋巴球（CD8+、Type IV）攻擊基底層角質細胞 → 凋亡與液化（水腫性）變性（介面皮膚炎）** → 連帶色素細胞破壞（去色素化）→ 進行性組織損傷（紅斑→結痂→潰瘍）。基底膜帶 IgG/C3（lupus band）為可變診斷標記、非主要機轉；Olivry 2018 未見活化補體沉積。UV 機轉多外推自人 CLE。',
    clinical_signs: [
      { sign: '鼻平面去色素化', category: 'primary', description: '最早徵兆：黑色鼻頭出現灰/粉色斑塊，cobblestone pattern 消失' },
      { sign: '鼻平面紅斑與結痂', category: 'primary', description: '去色素化區域出現紅斑、鱗屑、結痂' },
      { sign: '鼻平面潰瘍', category: 'primary', description: '嚴重病例鼻平面廣泛潰瘍，可向鼻樑蔓延' },
      { sign: '季節性加重', category: 'primary', description: '夏季紫外線強烈時病情惡化，冬季可自行改善' },
      { sign: '出血', category: 'secondary', description: '潰瘍區域外傷或日曬後出血' },
    ],
    staging: null,
    differential_diagnosis: [
      { condition: '落葉型天疱瘡 (PF)', key_differentiator: '膿疱為主而非去色素化，細胞學見棘層鬆解細胞，鼻平面表面完好' },
      { condition: '全身性紅斑性狼瘡 (SLE)', key_differentiator: '多系統累及（關節/腎臟/血液）、ANA 陽性、需全身性免疫抑制' },
      { condition: '鼻部日光性皮膚炎', key_differentiator: '白色/淡色鼻頭犬好發，無免疫複合物沉積' },
      { condition: '鱗狀上皮細胞癌 (SCC)', key_differentiator: '侵犯性組織破壞、老年犬、組織病理見惡性角化上皮' },
    ],
    diagnostic_workup: '1. 臨床評估（品種、鼻平面病灶、季節性）→ 2. 排除 SLE（CBC/生化/尿液/ANA）→ 3. 皮膚活檢（鼻平面病灶邊緣 punch biopsy）→ 4. 組織病理確認（interface dermatitis、色素失禁）→ 5. 選擇性免疫螢光（lupus band test：基底膜帶 IgG/C3 沉積）',
    treatment_protocol: '1. 所有病例嚴格紫外線防護。2. 一線：Tacrolimus 0.1% BID 外用 + Doxycycline 5 mg/kg PO BID + Niacinamide 250-500 mg PO TID。3. 6-8 週評估。4. 嚴重/急性惡化：加 Prednisolone 1-2 mg/kg PO SID × 2-4 週後漸減。5. 頑固型：Cyclosporine 5 mg/kg PO SID。6. 輔助：Vitamin E 400-800 IU PO SID。',
    prognosis: '整體預後良好。DLE 不威脅生命且極罕見轉化為 SLE。適當治療（藥物 + UV 防護）下多數犬可獲得良好控制。鼻部去色素化可能為永久性美容問題。需長期管理，夏季可能需加強治療。長期未治療的潰瘍極罕見報告 SCC 轉化。',
    monitoring: '治療初期每 4 週評估臨床改善。穩定後每 3-6 個月複查。夏季密切追蹤（UV 加重）。Prednisolone 使用者監測血糖/尿液。ANA 追蹤（排除 SLE 轉化）：確診時 + 每年一次。任何口腔/關節/腎臟症狀需立即重新評估。',
    owner_communication: 'DLE 是只影響鼻子皮膚的自體免疫病，跟全身性狼瘡不一樣，不會影響內臟。最重要的是防曬：避開正午陽光直射鼻子。藥物治療通常效果很好，包含外用藥膏（tacrolimus）跟口服抗發炎組合（doxycycline 加 niacinamide）。鼻子的顏色可能沒辦法完全恢復，但這只是美容問題不影響健康。要長期管理，夏天要特別注意。',
  },
  diagnostic_data: null,
  procedure_data: null,
  visual_placeholders: [
    { position: '臨床進程段落後', type: 'comparison_table', description: 'DLE 臨床進程五階段圖示' },
    { position: '鑑別診斷段落後', type: 'comparison_table', description: 'DLE vs 天疱瘡 vs SLE 鑑別比較表' },
  ],
  interactive_placeholders: [
    { position: '治療段落', type: 'decision_tree', description: 'DLE 治療升階決策樹' },
  ],
  drug_api_links: ['Tacrolimus', 'Doxycycline', 'Niacinamide', 'Prednisolone', 'Cyclosporine', 'Vitamin E'],
  references: [
    { type: 'journal', citation: 'Olivry T, Linder KE, Banovic F. Cutaneous lupus erythematosus in dogs: a comprehensive review. BMC Vet Res. 2018;14(1):132. doi:10.1186/s12917-018-1446-8.', relevance: '現行權威綜述：犬皮膚型紅斑性狼瘡分類（含 facial DLE/FDLE、GDLE、VCLE、ECLE、MCLE）、病理與治療' },
    { type: 'journal', citation: 'Griffies JD, et al. Topical 0.1% Tacrolimus for the Treatment of Discoid Lupus Erythematosus and Pemphigus Erythematosus in Dogs. J Am Anim Hosp Assoc. 2004;40(1):29-41. doi:10.5326/0400029.', relevance: '外用 tacrolimus 0.1% 治療犬 DLE/PE 臨床研究（一線局部治療實證）' },
    { type: 'journal', citation: 'Banovic F, et al. Clinical and microscopic features of generalized discoid lupus erythematosus in dogs. Vet Dermatol. 2016;27(6):488. doi:10.1111/vde.12389.', relevance: '犬泛發型盤狀狼瘡（GDLE）臨床與組織學特徵' },
    { type: 'journal', citation: 'Olivry T, et al. Mucocutaneous lupus erythematosus in dogs (21 cases). Vet Dermatol. 2015;26(4):256. doi:10.1111/vde.12217.', relevance: '犬黏膜皮膚型紅斑性狼瘡（MCLE）21 例（皮膚狼瘡變異型對照）' },
    { type: 'textbook', citation: "Miller WH, Griffin CE, Campbell KL. Muller and Kirk's Small Animal Dermatology. 7th ed. Elsevier; 2013.", relevance: '皮膚科經典教材，自體免疫/免疫介導皮膚病章節' },
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
  ['DERM-L5-006', contentAntibioticTherapy],
  ['DERM-L3-011', contentDrugEruption],
  ['DERM-L3-012', contentAlopeciaX],
  ['DERM-L3-013', contentCTCL],
  ['DERM-L3-014', contentMCT],
  ['DERM-L4-005', contentDermatohistopathology],
  ['DERM-L3-015', contentEGC],
  ['DERM-L3-016', contentSA],
  ['DERM-L3-017', contentDLE],
]);
