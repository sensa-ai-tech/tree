import type { NodeContent } from '@/types/knowledge';

const now = '2026-02-15T00:00:00Z';

/** 心臟科總覽 — 概念型 */
const contentOverview: NodeContent = {
  id: 'CONTENT-L0-001',
  node_id: 'CARDIO-L0-001',
  version: 1,
  summary: '獸醫心臟科涵蓋心血管系統的解剖、生理、病理、診斷與治療。犬貓心臟病盛行率約 10-15%，其中犬以二尖瓣退化（MMVD）最常見，貓則以肥厚型心肌病（HCM）為主。台灣因亞熱帶氣候，心絲蟲症亦為重要議題。',
  learning_objectives: [
    '說明獸醫心臟科的範疇與六層知識架構',
    '列舉犬貓最常見的五種心臟疾病',
    '辨識需要轉診至心臟專科的臨床情境',
    '說明台灣地區心臟病的流行病學特徵',
  ],
  key_points: [
    '犬最常見後天心臟病：MMVD（約 75%）',
    '貓最常見心臟病：HCM（約 60%）',
    '台灣為心絲蟲高盛行區，預防醫學至關重要',
    '心臟聽診是最基礎也最重要的篩檢工具',
    '心臟超音波（echocardiography）是確診金標準',
  ],
  body: `# 獸醫心臟科總覽

## 一、核心概念與機轉 (Core Concept & Mechanism)


獸醫心臟科（Veterinary Cardiology）是專門研究伴侶動物心血管系統疾病的專科領域。本知識樹將心臟科知識組織為六層漸進式架構：

| 層級 | 名稱 | 內容範疇 | 節點數 |
|------|------|---------|--------|
| L0 | 學科總覽 | 入門概念、流行病學、學習路徑 | 1 |
| L1 | 基礎科學 | 心臟解剖、電生理、血流動力學 | 3 |
| L2 | 病理機轉 | 瓣膜退化、心肌重塑、心律不整機轉、血流動力學異常 | 4 |
| L3 | 臨床疾病 | MMVD、DCM、HCM、心包膜積液、心絲蟲症 | 5 |
| L4 | 診斷方法 | 聽診、心臟超音波、ECG、胸腔 X 光 | 4 |
| L5 | 治療與管理 | 心衰竭藥物、抗心律不整藥、心包膜穿刺術 | 3 |

### 犬貓心臟病盛行率與疾病分布

| 物種 | 最常見心臟病 | 盛行率 | 好發族群 |
|------|------------|--------|---------|
| 犬 | MMVD（二尖瓣黏液瘤性退化） | 後天心臟病 ~75% | 中老年小型犬（CKCS、馬爾濟斯、博美） |
| 犬 | DCM（擴張型心肌病） | 後天心臟病 ~10-15% | 大型至巨型犬（杜賓犬 50-60%） |
| 犬 | 心絲蟲症 | 地區差異大 | 台灣未預防犬 20-40% |
| 貓 | HCM（肥厚型心肌病） | 所有心肌病 ~58-68% | 中年公貓、緬因貓、布偶貓 |
| 貓 | RCM（限制型心肌病） | 所有心肌病 ~10-15% | 老年貓 |

### 台灣臨床現況

台灣地處亞熱帶，全年蚊蟲活動，為心絲蟲高盛行區。[藥物:Ivermectin] 等預防藥物的全年使用至關重要。根據台灣流行病學調查，未預防犬隻的心絲蟲陽性率可達 20-40%（南部高於北部）。近年隨飼養觀念改善，小型犬 MMVD 與貓 HCM 的診斷率持續上升。

## 二、臨床意義 (Clinical Significance)
### 心臟科轉診指標

| 情境 | 建議處置 | 急迫性 |
|------|---------|--------|
| 新診斷心雜音 ≥ Grade III/VI | 安排心臟超音波評估 | 常規 |
| 心超顯示 MMVD B2（LA/Ao ≥ 1.6） | 開始 Pimobendan，考慮轉診 | 2 週內 |
| 急性呼吸窘迫疑似 CHF | 緊急穩定 + 轉診 | 即刻 |
| 貓急性後肢癱瘓（疑似 ATE） | 止痛 + 緊急轉診 | 即刻 |
| 暈厥伴心律不整 | ECG + 轉診 Holter 評估 | 24-48 小時 |
| 杜賓犬 ≥ 4 歲年度篩檢 | 心超 + Holter | 常規 |
| 心包膜積液伴壓塞 | 緊急心包膜穿刺 + 轉診 | 即刻 |

### 基層獸醫必備心臟科技能

1. **心臟聽診**：系統性四點聽診法，辨識雜音等級與特徵
2. **胸腔 X 光判讀**：VHS 測量、肺水腫辨識
3. **基礎 ECG 判讀**：心率、節律、VPC 辨識
4. **急性 CHF 穩定**：氧氣 + Furosemide IV + 胸水引流（貓）
5. **居家監測教育**：教導飼主計算 sleeping RR

## 三、人醫借鑒 (Translational Insights)
| 人醫領域 | 概念/技術 | 獸醫應用現況 | 潛力評估 |
|---------|----------|-------------|---------|
| 遠端監測 | 穿戴式心律監測、居家體重追蹤 | Sleeping RR 居家監測概念已普及 | ★★★★ |
| 生物標記 | BNP/NT-proBNP 指導 CHF 治療 | 獸醫採用中，cut-off 值仍需優化 | ★★★★ |
| 經導管介入 | MitraClip、TAVI | 獸醫僅限實驗模型 | ★★☆☆ |
| 精準醫療 | 基因篩檢導引治療 | 杜賓犬 PDK4、緬因貓 MYBPC3 已商業化 | ★★★☆ |
| AI 輔助診斷 | AI-ECG、自動心超判讀 | 初步演算法開發中 | ★★★☆ |

## 四、臨床爭議與知識空缺 (Controversies & Knowledge Gaps)
| 議題 | 現況 | 影響 |
|------|------|------|
| 犬 MMVD B1 是否需治療 | 僅 EPIC（B2）有 Level I 證據，B1 無 RCT | 大量 B1 犬隻是否應提早介入仍未定論 |
| 貓無症狀 HCM 的藥物治療 | 無 RCT 支持 Atenolol 或 Diltiazem 改善預後 | 臨床醫師用藥習慣差異大 |
| BEG 飲食與 DCM 的因果關係 | FDA 2018 警告後持續調查，缺乏 RCT | 飲食建議尚無共識 |
| Pimobendan 在貓 HCM 的角色 | 僅限 end-stage/收縮功能障礙型，LVOTO 禁忌 | 缺乏大型貓 RCT |
| 犬 AF 節律控制 vs 心率控制 | 獸醫幾乎僅用心率控制策略 | 人醫已有節律控制優勢證據（EAST-AFNET 4） |

### 知識空缺

- 台灣本土犬貓心臟病大規模流行病學數據不足
- 貓心肌病基因學（除緬因貓/布偶貓外）仍有大量未知
- 獸醫心臟介入治療（經導管瓣膜修復）的可行性與成本效益分析
- 心臟病與慢性腎病共病管理的最佳策略（心腎症候群）

[圖片:犬貓常見心臟病分佈圓餅圖]`,
  clinical_pearl: '每次理學檢查都應進行心臟聽診。即使是年輕健康動物，發現心雜音也需進一步評估——早期發現可顯著改善預後。',
  common_mistakes: [
    '認為心雜音一定代表嚴重心臟病（功能性雜音很常見）',
    '忽略貓的心臟病（貓常無明顯症狀直到急性發作）',
    '忘記台灣為心絲蟲高盛行區而未建議預防',
  ],
  disease_data: null,
  diagnostic_data: null,
  procedure_data: null,
  visual_placeholders: [
    { position: '學科架構段落後', type: 'mind_map', description: '六層知識架構心智圖' },
  ],
  interactive_placeholders: [],
  drug_api_links: [],
  references: [
    { type: 'textbook', citation: 'Ettinger SJ, Feldman EC. Textbook of Veterinary Internal Medicine, 8th ed.', relevance: '心臟科基礎教材' },
    { type: 'guideline', citation: 'Keene BW, Atkins CE, Bonagura JD, et al. "ACVIM consensus guidelines for the diagnosis and treatment of myxomatous mitral valve disease in dogs." J Vet Intern Med. 2019;33(3):1127-1140.', relevance: 'MMVD 診斷與治療共識指引' },
    { type: 'journal', citation: 'Atkins C et al. Guidelines for the diagnosis and treatment of canine chronic valvular heart disease. J Vet Intern Med. 2009;23(6):1142-1150.', relevance: '犬慢性瓣膜性心臟病診斷與治療文獻' },
  ],
  is_current: true,
  created_at: now,
};

/** MMVD — 疾病型 */
const contentMMVD: NodeContent = {
  id: 'CONTENT-L3-001',
  node_id: 'CARDIO-L3-001',
  version: 1,
  summary: '二尖瓣黏液瘤性退化（MMVD）是犬最常見的後天性心臟病，占所有犬心臟病的 75% 以上。好發於小型犬，特別是騎士查理王小獵犬（CKCS）。ACVIM 將其分為 A-D 四期，Stage B2 開始建議使用 pimobendan。',
  learning_objectives: [
    '描述 MMVD 的病理生理機轉與疾病進程',
    '運用 ACVIM 分期系統正確分類病患',
    '列出各分期的治療建議與藥物選擇',
    '執行 MMVD 病患的長期追蹤計畫',
    '向飼主說明 MMVD 的預後與居家監測方法',
  ],
  key_points: [
    '好發品種：CKCS、馬爾濟斯、貴賓、臘腸、吉娃娃',
    'ACVIM 分期：A（高風險無病變）→ B1（無心臟重塑）→ B2（有重塑）→ C（臨床症狀）→ D（難治性）',
    'EPIC 研究證實 Stage B2 開始使用 pimobendan 可延緩進入 C 期',
    '胸腔 X 光 VHS > 10.5 及左心房/主動脈比 > 1.6 提示心臟重塑',
    '心雜音等級不一定與疾病嚴重度正相關',
    '居家呼吸次數（sleeping RR）< 30 次/分為重要監測指標',
  ],
  body: `# 二尖瓣黏液瘤性退化 (MMVD)

## 一、病理機制 (Pathophysiology)


### 分子層級（已確認）
瓣膜間質細胞（valvular interstitial cells, VICs）表型轉化為活化型肌纖維母細胞，分泌過量基質金屬蛋白酶（MMP-1, MMP-13），降解膠原蛋白並促進糖胺聚醣（GAGs）異常沉積。TGF-β 與 serotonin（5-HT）訊號通路上調為關鍵驅動因子。CKCS 品種已確認 MMVD 具多基因遺傳模式。

### 細胞→組織層級
VICs 活化 → 瓣膜海綿層（spongiosa）GAGs 過度堆積 → 纖維層（fibrosa）膠原結構破壞 → 瓣膜增厚、脫垂 → 腱索延長/斷裂。

### 器官→系統層級
二尖瓣閉鎖不全（MR）→ 左心房容量過載 → LA 擴大 → 肺靜脈壓升高 → LV 離心性肥大（volume overload）→ RAAS 與 SNS 代償性活化 → 鈉水滯留 → 肺水腫（CHF）。

> **類比**：如同水龍頭的止水墊片老化（瓣膜退化），水開始從關閉的水龍頭滲漏（逆流），下游管路承受額外水壓（左心房擴大），最終水管破裂溢水（肺水腫）。

### 假說階段
- 循環中 serotonin 濃度是否為獨立致病因子仍有爭議
- 瓣膜內新生血管形成（neovascularization）的角色尚待釐清
- 基因治療標靶（如 MMP 抑制劑）處於早期研究

[圖片:MMVD 病理機制瀑布圖——從分子到器官]

## 二、臨床表現與診斷 (Clinical Signs & Diagnosis)
### 典型表現（發生率）
| 臨床表現 | 發生率 | 特徵描述 |
|----------|--------|---------|
| 左心尖收縮期雜音 | >95% | Grade I-VI/VI，plateau 型 |
| 咳嗽 | 60-70% | 夜間/清晨加劇（左主支氣管壓迫 vs 肺水腫） |
| 運動不耐 | 50-60% | 散步距離縮短、喘息 |
| 呼吸急促 | 30-40% | Sleeping RR > 30 次/分提示 CHF |
| 昏厥 | 10-15% | 嚴重 MR 或合併心律不整 |

### 非典型表現
- 無症狀心雜音（Stage B1/B2，占確診時 40-50%）
- 急性腱索斷裂致突發肺水腫（無前驅症狀）
- 二尖瓣關閉不全合併肺高壓（右心衰竭為主：腹水、頸靜脈怒張）

### 記憶框架——「MMVD 5C」
**C**KCS 好發、**C**ough（咳嗽）、**C**ardiomegaly（心臟擴大）、**C**HF（心衰竭）、**C**heck sleeping RR（居家監測）

### ACVIM 分期與診斷工具

| 分期 | 定義 | 關鍵診斷指標 |
|------|------|-------------|
| A | 高風險品種，無病變 | 無雜音，心超正常 |
| B1 | 有雜音，無重塑 | LA/Ao < 1.6, LVIDDN 正常 |
| B2 | 有雜音，有重塑 | LA/Ao ≥ 1.6 或 LVIDDN ↑, VHS > 10.5 |
| C | CHF 臨床症狀 | 肺水腫（X 光）、sleeping RR > 30 |
| D | 難治性心衰竭 | 對標準三合一治療反應不佳 |

### 診斷工具比較
| 工具 | 敏感度 | 特異度 | 角色 |
|------|--------|--------|------|
| 心臟聽診 | 85-95% | 70-80% | 初篩 |
| 胸腔 X 光（VHS） | 75-85% | 80-90% | 重塑+肺水腫評估 |
| 心臟超音波 | 95-99% | >95% | 確診金標準 |
| NT-proBNP | 80-90% | 75-85% | 輔助 B1 vs B2 鑑別 |

[圖片:MMVD 診斷決策流程圖]

## 三、治療策略 (Treatment)
### 依分期治療（ACVIM 2019 Consensus）

| 分期 | 藥物 | 劑量 | 頻率 | Evidence Level |
|------|------|------|------|----------------|
| A/B1 | 無藥物 | — | 定期追蹤 6-12 個月 | Level I |
| B2 | [藥物:Pimobendan] | 0.25-0.3 mg/kg PO | BID | Level I (EPIC) |
| C | [藥物:Furosemide] | 2-4 mg/kg PO | BID-TID | Level I |
| C | [藥物:Pimobendan] | 0.25-0.3 mg/kg PO | BID | Level I |
| C | [藥物:Enalapril]/[藥物:Benazepril] | 0.5 mg/kg PO | BID | Level II |
| C | [藥物:Spironolactone] | 0.5-2 mg/kg PO | SID-BID | Level II |
| D | 上述 + [藥物:Torasemide] | 0.1-0.3 mg/kg PO | SID-BID | Level III |
| D | [藥物:Sildenafil] | 1-2 mg/kg PO | BID-TID | Level III |

### 急性 CHF 處理
1. 氧氣支持（FiO2 40-60%）
2. [藥物:Furosemide] 2-4 mg/kg IV bolus → 1 mg/kg/hr CRI
3. [藥物:Pimobendan] 0.15 mg/kg IV 或維持口服
4. 鎮靜（[藥物:Butorphanol] 0.2-0.3 mg/kg IV/IM）
5. 胸腔 X 光確認肺水腫消退後轉口服

### Primary Care vs Specialty Care
- **基層可處理**：Stage A-C 的診斷、藥物調整、居家監測教育
- **轉診指標**：Stage D 難治性、急性腱索斷裂、合併嚴重心律不整、考慮外科修復（MVR）

## 四、併發症與監控 (Complications & Monitoring)
### 疾病相關併發症
| 併發症 | 發生率 | 機轉 | 處置 |
|--------|--------|------|------|
| 肺水腫 | 30-40% 終生 | CHF | 利尿劑+強心劑 |
| 心房顫動 | 5-10% | LA 擴大>重塑 | [藥物:Diltiazem] 或 [藥物:Digoxin] |
| 腱索斷裂 | 5-8% | 瓣膜退化 | 緊急穩定→外科 |
| 肺高壓 | 15-25% | 慢性 LA 壓升高 | [藥物:Sildenafil] |
| 氮血症（腎前性） | 20-30% | 利尿劑+低心輸出 | 減利尿劑劑量 |

### 治療相關併發症
- Furosemide：脫水、低鉀、氮血症
- ACE inhibitor：低血壓、氮血症
- Pimobendan：偶見食慾下降、腹瀉

### 監控頻率
| 分期 | 回診頻率 | 檢查項目 |
|------|----------|---------|
| B1 | 每 12 個月 | 聽診+心超 |
| B2 | 每 6 個月 | 聽診+心超+X 光+腎指數 |
| C 穩定 | 每 1-3 個月 | 聽診+X 光+BUN/Cre/電解質 |
| D | 每 2-4 週 | 全套監控 |
| 居家 | 每日 | Sleeping RR（目標 <30/min） |

## 五、預後與預後因子 (Prognosis)
### 正面預後因子
- 早期診斷（B2 即開始 Pimobendan）
- 小型犬（較大型犬預後好）
- 良好的飼主依從性與居家監測
- Sleeping RR 穩定 < 25/min

### 負面預後因子
- 急性腱索斷裂
- 合併心房顫動
- 嚴重肺高壓（TR velocity > 3.5 m/s）
- 腎功能惡化（BUN > 60 mg/dL）
- NT-proBNP 持續升高

### 存活數據
| 分期 | 中位存活時間 | 來源 |
|------|-------------|------|
| B1 | > 3 年 | 多項觀察性研究 |
| B2（+Pimobendan）| 延緩 C 期約 15 個月 | EPIC 2016 |
| C（治療後）| 9-12 個月 | ACVIM Consensus |
| D | 3-6 個月 | 回顧性研究 |

### 飼主溝通要點
MMVD 是慢性進行性疾病，目前無法治癒但可有效管理。強調：① 按時用藥 ② 每日計算 sleeping RR ③ RR > 30 或呼吸困難立即就醫 ④ 外科瓣膜修復在日本/歐美已有高成功率（>90%），可作為 Stage C/D 選項討論。

## 六、人醫借鑒 (Translational Insights)
- **經導管二尖瓣修復（MitraClip）**：人醫已廣泛應用，獸醫目前僅有限研究（實驗犬模型），未來可能減少開胸手術需求
- **心臟生物標記（BNP/NT-proBNP）**：人醫 CHF 管理的核心工具，獸醫採用度逐漸提升但 cut-off 值仍需優化
- **遠端監測（telemedicine）**：人醫心衰竭患者居家體重與症狀遠端監控已標準化，獸醫的 sleeping RR 居家監測概念即借鑑於此
- **Sacubitril/Valsartan（Entresto）**：人醫 HFrEF 的一線藥物，獸醫初步研究顯示對犬 MMVD 有潛在益處（Phase II 進行中）

## 七、臨床爭議與知識空缺 (Controversies & Knowledge Gaps)
| 爭議議題 | 正方觀點 | 反方觀點 | Evidence Level |
|----------|----------|----------|----------------|
| B1 是否需要治療？ | 早期介入可能延緩進展 | EPIC 僅支持 B2，B1 無 RCT 支持 | Level III |
| ACE inhibitor 在 B2 的角色？ | ACVIM 列為 Level II 建議 | BENCHMARK 研究未顯示明顯益處 | Level II |
| 外科修復 vs 終身藥物？ | 日本數據 MVR 術後 5 年存活 >90% | 手術風險、費用高、台灣經驗有限 | Level III |
| Spironolactone 的附加效益？ | DELAY 研究顯示可能延緩重塑 | 效果量小，需更大規模 RCT | Level II |

### 正在進行的研究方向
- 犬 MMVD 全基因組關聯分析（GWAS）以識別遺傳標記
- Sacubitril/Valsartan 在犬 MMVD 的多中心 RCT
- 3D 列印瓣膜模型用於術前規劃
- 幹細胞治療修復退化瓣膜（極早期）

[圖片:MMVD 分期治療流程圖]`,
  clinical_pearl: '心雜音的等級與 MMVD 的嚴重度不一定正相關。Grade II/VI 的雜音可能已有顯著心臟重塑（B2），而 Grade V/VI 的雜音在某些穩定病患中可能維持多年不進展。永遠要以影像學（心超 + X 光）作為分期依據。',
  common_mistakes: [
    '僅憑心雜音等級判斷疾病嚴重度，未安排心臟超音波',
    '在 Stage B1 即開始使用 pimobendan（EPIC 研究僅支持 B2 以上）',
    '忽略 sleeping RR 的居家監測，未教導飼主計算方法',
    '將 MMVD 相關咳嗽與呼吸道感染混淆',
  ],
  disease_data: {
    signalment: '好發於中老年小型犬（> 5 歲），品種偏好：CKCS、馬爾濟斯、博美、約克夏、臘腸、吉娃娃。雄性略高於雌性。',
    etiology: '瓣膜基質的黏液樣變性（myxomatous degeneration），確切病因不明，可能與遺傳、年齡相關退化有關。CKCS 具有明確的遺傳易感性。',
    pathogenesis: '瓣膜葉黏液樣變性 → 增厚與脫垂 → 二尖瓣閉鎖不全 → 左心房容量過載 → LA 擴大 → LV 離心性肥大 → 神經荷爾蒙活化（RAAS、SNS）→ 體液滯留 → 充血性心衰竭（肺水腫）',
    clinical_signs: [
      { sign: '心雜音', category: 'primary', description: '左側心尖區收縮期雜音，Grade I-VI/VI' },
      { sign: '咳嗽', category: 'primary', description: '夜間或清晨加劇，可為左主支氣管壓迫或肺水腫所致' },
      { sign: '運動不耐', category: 'primary', description: '活動力下降，散步距離縮短' },
      { sign: '呼吸急促', category: 'secondary', description: 'Sleeping RR > 30 次/分提示 CHF' },
      { sign: '昏厥', category: 'secondary', description: '嚴重 MR 或合併心律不整時可見' },
    ],
    staging: { system: 'ACVIM Consensus (2019)', stages: ['Stage A：高風險品種，無病變', 'Stage B1：有雜音，無心臟重塑', 'Stage B2：有雜音，有心臟重塑', 'Stage C：臨床心衰竭', 'Stage D：難治性心衰竭'] },
    differential_diagnosis: [
      { condition: '擴張型心肌病 (DCM)', key_differentiator: '好發大型犬，心肌收縮力下降（FS 降低），腔室擴大但瓣膜正常' },
      { condition: '感染性心內膜炎', key_differentiator: '通常伴隨發燒、白血球升高、血培養陽性' },
      { condition: '先天性二尖瓣發育不良', key_differentiator: '年輕動物發病，超音波可見瓣膜結構異常' },
      { condition: '肺高壓', key_differentiator: '三尖瓣逆流速度增加，右心擴大' },
    ],
    diagnostic_workup: '1. 理學檢查（聽診定位雜音）→ 2. 胸腔 X 光（VHS、肺野評估）→ 3. 心臟超音波（LA/Ao、LVIDDN、FS、MR 程度）→ 4. 血壓測量 → 5. 基礎血檢（BUN/Cre 評估腎功能）→ 6. NT-proBNP（輔助診斷）',
    treatment_protocol: 'Stage B2 以上啟動藥物治療。核心三合一：Pimobendan + Furosemide + ACE inhibitor。Stage D 考慮加上 Spironolactone、Sildenafil、Amlodipine。急性 CHF 需住院氧氣支持與靜脈注射利尿劑。',
    prognosis: 'Stage B1 中位存活 > 3 年。Stage B2 使用 Pimobendan 後中位延緩進入 C 期約 15 個月（EPIC 研究）。Stage C 經適當治療中位存活 9-12 個月。Stage D 預後較差，中位存活 3-6 個月。',
    monitoring: '穩定期每 6 個月追蹤心超與 X 光。CHF 控制後每 1-3 個月回診。居家 sleeping RR 監測（目標 < 30 次/分）。定期監測腎功能指數。',
    owner_communication: 'MMVD 是一種慢性進行性疾病，目前無法治癒但可以有效管理。早期發現與定期追蹤是關鍵。教導飼主計算居家呼吸次數，當 sleeping RR > 30 或出現呼吸困難應立即就醫。強調用藥依從性的重要性。',
  },
  diagnostic_data: null,
  procedure_data: null,
  visual_placeholders: [
    { position: '分期表格前', type: 'flowchart', description: 'ACVIM 分期流程決策圖' },
    { position: '治療方案段落後', type: 'comparison_table', description: '各分期治療方案比較表' },
  ],
  interactive_placeholders: [
    { position: 'ACVIM 分期段落', type: 'interactive_staging', description: '輸入檢查數據自動判定分期' },
  ],
  drug_api_links: ['Pimobendan', 'Furosemide', 'Enalapril', 'Benazepril', 'Spironolactone', 'Sildenafil'],
  references: [
    { type: 'guideline', citation: 'Keene BW et al. ACVIM consensus guidelines for the diagnosis and treatment of myxomatous mitral valve disease in dogs. J Vet Intern Med. 2019;33(3):1127-1140.', relevance: '最新 MMVD 診斷治療共識' },
    { type: 'journal', citation: 'Boswood A et al. Effect of pimobendan in dogs with preclinical myxomatous mitral valve disease and cardiomegaly: the EPIC study. J Vet Intern Med. 2016;30(6):1765-1779.', relevance: 'Pimobendan 用於 B2 期的關鍵證據' },
    { type: 'textbook', citation: 'Ware WA. Cardiovascular Disease in Small Animal Medicine. Manson Publishing, 2011.', relevance: '心臟科基礎教材' },
  ],
  is_current: true,
  created_at: now,
};

/** 心臟聽診 — 診斷型 */
const contentAuscultation: NodeContent = {
  id: 'CONTENT-L4-001',
  node_id: 'CARDIO-L4-001',
  version: 1,
  summary: '心臟聽診是獸醫臨床檢查中最基礎且最重要的心臟評估工具。透過系統性的聽診技巧，可以辨識正常心音（S1、S2）、異常心音（S3、S4）、心雜音及心律不整，為進一步影像學檢查提供方向。',
  learning_objectives: [
    '執行系統性的犬貓心臟聽診四點聽診法',
    '辨識 S1、S2 心音並判斷是否存在異常心音',
    '運用 Levine 分級量表評估心雜音等級（I-VI）',
    '根據聽診發現制定進一步診斷計畫',
  ],
  key_points: [
    '四個聽診位置：左心尖（二尖瓣）、左心底（主動脈/肺動脈）、右心尖（三尖瓣）、右心底',
    'S1（第一心音）：房室瓣關閉音，標誌收縮期開始',
    'S2（第二心音）：半月瓣關閉音，標誌舒張期開始',
    '犬的竇性心律不整（sinus arrhythmia）為正常變異',
    '心雜音 Levine 分級：I-VI 級，IV 級以上伴隨震顫（thrill）',
  ],
  body: `# 心臟聽診

## 一、檢查原理與適應症 (Principles & Indications)


### 聽診器物理原理

| 聽面 | 頻率範圍 | 偵測目標 | 使用技巧 |
|------|---------|---------|---------|
| 鐘面（Bell） | 低頻（20-200 Hz） | S3、S4 奔馬律、舒張期雜音 | 輕觸胸壁，不可加壓（加壓變膜面效果） |
| 膜面（Diaphragm） | 高頻（200-2000 Hz） | S1、S2、收縮期雜音、click | 適度加壓於胸壁 |

### 適應症

| 情境 | 目的 | 頻率 |
|------|------|------|
| 常規理學檢查 | 篩檢心臟異常 | 每次就診 |
| 心雜音追蹤 | 評估進展 | 每 3-12 個月 |
| 麻醉前評估 | 識別心臟風險 | 每次麻醉前 |
| 急診呼吸窘迫 | 快速心臟評估 | 即刻 |
| 心臟藥物監測 | 評估治療反應 | 每次回診 |

### 四點聽診法

| 順序 | 位置 | 解剖標誌 | 對應瓣膜 | 常見異常 |
|------|------|---------|---------|---------|
| 1 | 左心尖區 | 第 5 肋間，肘關節水平 | 二尖瓣 | MMVD 收縮期雜音（plateau 型） |
| 2 | 左心底區 | 第 3-4 肋間，肩關節水平 | 主動脈瓣/肺動脈瓣 | SAS 漸強漸弱型雜音、PS |
| 3 | 右心尖區 | 第 4-5 肋間 | 三尖瓣 | TR 收縮期雜音 |
| 4 | 右心底區 | 第 3 肋間 | — | VSD（高位），較少使用 |

> **操作要點**：每個位置至少聽 5-10 秒。先膜面後鐘面。安靜環境中進行。同時觸摸股動脈評估脈搏品質與節律。

## 二、判讀要點 (Interpretation)
### 系統性聽診評估五步驟

| 步驟 | 評估內容 | 正常發現 | 異常發現 |
|------|---------|---------|---------|
| 1 | 心率 | 犬 60-160 bpm，貓 140-220 bpm | 過快/過慢 |
| 2 | 節律 | 犬：竇性心律不整正常；貓：規則 | 不規則（排除犬竇性心律不整後） |
| 3 | S1/S2 強度 | S1 > S2（心尖），S2 > S1（心底） | 心音減弱（心包膜積液）、分裂 |
| 4 | 雜音 | 無 | 定位、時相、等級、輻射方向 |
| 5 | 額外心音 | 無 | S3 奔馬律（容量過載）、S4（順應性↓） |

### 心雜音分級（Levine Scale）

| 等級 | 描述 | 臨床意義 |
|------|------|---------|
| I/VI | 僅在安靜環境中仔細聽診可聞 | 功能性或早期病變可能 |
| II/VI | 輕柔但容易聽到 | 需追蹤，考慮心超 |
| III/VI | 中等音量，無震顫 | 建議心超評估 |
| IV/VI | 響亮，伴隨胸壁震顫（thrill） | 明確病理性，心超必要 |
| V/VI | 聽診器邊緣觸及即可聞 | 嚴重瓣膜或結構異常 |
| VI/VI | 不接觸胸壁即可聞 | 嚴重瓣膜或結構異常 |

### 雜音特徵分析

| 特徵 | 分類 | 臨床關聯 |
|------|------|---------|
| 時相 | 收縮期（systolic） | MR、TR、SAS、PS、VSD |
| 時相 | 舒張期（diastolic） | AI、PI（獸醫少見） |
| 時相 | 連續性（continuous） | PDA（machinery murmur） |
| 型態 | Plateau（帶狀） | MR（MMVD 典型） |
| 型態 | Crescendo-decrescendo（菱形） | SAS、PS |
| 最大強度點 | 左心尖 | 二尖瓣病變 |
| 最大強度點 | 左心底 | 主動脈/肺動脈瓣病變 |
| 最大強度點 | 右心尖 | 三尖瓣病變 |
| 最大強度點 | 左心底上方（連續） | PDA |

### 犬貓聽診差異

| 項目 | 犬 | 貓 |
|------|-----|-----|
| 竇性心律不整 | 正常（迷走神經張力變化） | 異常——需進一步評估 |
| 動態 LVOTO 雜音 | 罕見 | HCM 伴 SAM 常見 |
| 奔馬律意義 | 容量過載提示 | 高度提示心肌病，即使無雜音 |
| 功能性雜音 | 幼犬常見（Grade I-II） | 緊迫/貧血/甲亢可引起 |

## 三、常見陷阱 (Pitfalls)
| 陷阱 | 發生情境 | 避免方法 |
|------|---------|---------|
| 功能性雜音誤判為病理性 | 幼犬/幼貓，Grade I-II | 追蹤觀察，多數 4-6 月齡消失 |
| 環境噪音影響微弱雜音偵測 | 吵雜診間、動物喘氣 | 安靜環境，必要時等動物平靜 |
| 僅聽左側忽略右側 | 常見疏漏 | 系統性四點法，TR 常見於右側 |
| 犬竇性心律不整誤判為病理性 | 經驗不足者 | 確認與呼吸週期相關 |
| 緊迫貓心率過快難以分辨 | 心率 > 240 bpm | 等待安靜或鎮靜後重評估 |
| 肥胖動物心音減弱 | 胸壁脂肪隔絕 | 增加聽診時間，考慮心超 |
| 雜音等級與嚴重度不一定相關 | Grade II 可能已有重塑 | 不要僅憑雜音等級判斷，需影像學 |
| 貓心臟病無雜音 | HCM 30-50% 無可聞雜音 | 有奔馬律或心律不整仍需心超 |

## 四、人醫借鑒 (Translational Insights)
| 人醫進展 | 概念 | 獸醫應用潛力 |
|---------|------|-------------|
| 電子聽診器 | 數位放大與頻率篩選 | 可改善微弱雜音偵測，尤其適用貓 |
| AI 輔助心音分析 | 機器學習自動辨識雜音類型 | 初步研究中，可輔助基層獸醫篩檢 |
| 心音遠端傳輸 | 居家聽診器 + 遠端醫療 | 概念可行但獸醫尚未商業化 |
| 肺部超音波取代聽診 | POCUS 評估肺水腫 | 獸醫急診已逐漸採用 B-lines 評估 |

## 五、臨床爭議與知識空缺 (Controversies & Knowledge Gaps)
| 爭議議題 | 正方 | 反方 | Evidence Level |
|---------|------|------|----------------|
| 心雜音等級是否預測疾病嚴重度 | 部分研究顯示等級與 MR 程度相關 | 雜音受體型、心輸出量、胸壁影響 | Level C |
| 貓無雜音是否排除心臟病 | 無雜音確實降低心臟病可能 | 30-50% HCM 貓無可聞雜音 | Level B |
| 聽診是否足以篩檢所有心臟病 | 成本極低，可作為一線篩檢 | 敏感度 70-85%，漏診風險存在 | Level B |
| 電子聽診器是否優於傳統聽診器 | 數位放大可能提升偵測率 | 缺乏大規模獸醫比較研究 | Level D |

### 知識空缺

- 獸醫聽診教學標準化方法（操作者間一致性研究不足）
- AI 心音分析在獸醫臨床的驗證研究
- 貓心臟病的理想非侵入性篩檢策略（聽診 + NT-proBNP + 心超的成本效益分析）

[互動:心音播放器——正常心音 vs. 各級雜音]`,
  clinical_pearl: '在進行聽診時，先評估心率和節律，再專注於各別心音。注意犬的竇性心律不整是正常的——吸氣時心率加快，呼氣時減慢。如果在貓身上聽到節律不整，則需要進一步評估。',
  common_mistakes: [
    '僅在左側聽診而忽略右側（三尖瓣逆流常見於右側）',
    '將犬的竇性心律不整誤判為病理性心律不整',
    '環境太吵雜時進行聽診，影響微弱雜音的偵測',
  ],
  disease_data: null,
  diagnostic_data: {
    indication: ['常規理學檢查', '疑似心臟疾病評估', '麻醉前評估', '心臟病患追蹤'],
    contraindication: ['無絕對禁忌症'],
    technique: '系統性四點聽診法：左心尖→左心底→右心尖→右心底。每個位置至少聽 5-10 秒。先膜面後鐘面。安靜環境中進行，動物站立或側臥。同時觸摸股動脈評估脈搏品質。',
    normal_findings: [
      { finding: 'S1 心音', description: '房室瓣（二尖瓣、三尖瓣）關閉音', significance: '標誌心室收縮開始' },
      { finding: 'S2 心音', description: '半月瓣（主動脈瓣、肺動脈瓣）關閉音', significance: '標誌心室舒張開始' },
      { finding: '竇性心律不整', description: '犬的呼吸性竇性心律不整', significance: '正常變異，與副交感神經張力有關' },
    ],
    abnormal_findings: [
      { finding: '收縮期雜音', description: 'S1 與 S2 之間聽到的異常音', significance: '最常見原因：二尖瓣或三尖瓣閉鎖不全、心室中隔缺損、主動脈/肺動脈狹窄' },
      { finding: '舒張期雜音', description: 'S2 與下一個 S1 之間的異常音', significance: '少見，提示主動脈或肺動脈瓣閉鎖不全' },
      { finding: '奔馬律（Gallop rhythm）', description: '額外的 S3 或 S4 心音', significance: 'S3 提示容量過載，S4 提示順應性下降。貓的奔馬律高度提示心肌病' },
      { finding: '心律不整', description: '節律不規則（排除犬竇性心律不整後）', significance: '需 ECG 進一步評估，可能為早期收縮、房室傳導阻滯等' },
    ],
    interpretation_guide: '1. 確認心率（犬正常 60-160 bpm，貓 140-220 bpm）。2. 評估節律規則性。3. 各聽診點逐一評估 S1、S2 音量與品質。4. 辨識是否有雜音（定位、時相、等級、特徵）。5. 辨識是否有額外心音（S3、S4）。',
    pitfalls: [
      '幼犬/幼貓的生理性雜音（innocent murmur）誤判為病理性',
      '高度緊張動物的心率過快導致無法分辨心音',
      '肥胖動物胸壁過厚降低聽診敏感度',
    ],
    sensitivity_specificity: '對心雜音偵測的敏感度約 70-85%（取決於操作者經驗），對確診特定疾病的特異度較低，需搭配影像學。',
    cost_benefit: '成本極低（僅需聽診器），可在任何臨床場景執行。作為篩檢工具價值極高，是決定是否需要進一步心臟檢查的第一步。',
  },
  procedure_data: null,
  visual_placeholders: [
    { position: '四點聽診法段落', type: 'annotated_image', description: '犬胸壁四個聽診位置標示圖' },
  ],
  interactive_placeholders: [
    { position: '心雜音分級後', type: 'audio_player', description: '各級心雜音音頻播放器' },
  ],
  drug_api_links: [],
  references: [
    { type: 'textbook', citation: 'Ware WA. Cardiovascular Disease in Small Animal Medicine. Manson Publishing, 2011.', relevance: '心臟聽診技術標準參考' },
    { type: 'journal', citation: 'Caivano D et al. Murmur intensity in dogs. J Vet Intern Med. 2018.', relevance: '心雜音等級與疾病嚴重度的關聯研究' },
    { type: 'guideline', citation: 'Thomas WP, Gaber CE, Jacobs GJ, et al. "Recommendations for standards in transthoracic two-dimensional echocardiography in the dog and cat." J Vet Intern Med. 1993;7(4):247-252.', relevance: '犬貓心臟超音波標準化建議' },
  ],
  is_current: true,
  created_at: now,
};

/** DCM — 疾病型 */
const contentDCM: NodeContent = {
  id: 'CONTENT-L3-002',
  node_id: 'CARDIO-L3-002',
  version: 1,
  summary: '擴張型心肌病（DCM）是犬第二常見的後天性心臟病，以心室腔室擴大與心肌收縮力下降為特徵。好發於大型至巨型犬，尤其杜賓犬具有極高的遺傳易感性。DCM 常進展迅速，許多患犬在出現臨床症狀前即有嚴重的心肌功能障礙（隱匿期 DCM）。近年亦關注穀物替代飲食（BEG diet）與非典型 DCM 的關聯。',
  learning_objectives: [
    '描述犬 DCM 的病理生理機轉與疾病進程（隱匿期→臨床期）',
    '列出 DCM 好發品種及其遺傳學基礎',
    '辨識隱匿期 DCM 的早期篩檢策略（Holter + Echo）',
    '制定 DCM 各階段的治療方案，包含抗心律不整藥物選擇',
    '向飼主說明 DCM 的預後與杜賓犬篩檢計畫',
  ],
  key_points: [
    '好發品種：杜賓犬（盛行率 50-60%）、大丹、拳師犬、愛爾蘭獵狼犬、可卡犬',
    '杜賓犬 DCM 常伴隨心室性心律不整（VPCs），需 Holter 篩檢',
    '隱匿期（occult DCM）可持續數月至數年，心超可偵測早期變化',
    'Echo 診斷標準：LVIDDN 增加、FS < 20%（杜賓 < 25%）、EPSS 增加',
    'Pimobendan 在隱匿期即有延緩進展的證據（PROTECT 研究）',
    '飲食相關 DCM（BEG diet-associated DCM）需注意飲食史詢問',
    '杜賓犬 DCM 預後較其他品種差，中位存活較短',
  ],
  body: `# 擴張型心肌病 (Dilated Cardiomyopathy, DCM)

## 一、病理機制 (Pathophysiology)


### 分子→細胞→器官機轉鏈

| 層級 | 機轉 | 關鍵分子/結構 |
|------|------|--------------|
| 基因 | 突變致結構蛋白異常 | PDK4（杜賓犬）、TTN（titin）、LMNA |
| 分子 | 粒線體 ATP 生成↓ → 鈣離子處理異常 | Complex I-IV、RyR2、SERCA2a |
| 細胞 | 心肌細胞凋亡/壞死 + 纖維母細胞活化 | Caspase-3↑、TGF-β↑、MMP↑ |
| 組織 | 心肌纖維化替代 + 脂肪浸潤（杜賓犬 ARVC 型） | Collagen I/III 沉積比例改變 |
| 器官 | 心室壁變薄 → 離心性重塑 → 收縮力↓(FS<20%) | LVIDDN↑、EF↓、EPSS↑ |
| 系統 | CO↓ → RAAS/SNS 活化 → 容量過載 → CHF/猝死 | Ang-II↑、Aldosterone↑、NE↑ |

### 品種特異機轉
- **杜賓犬**：PDK4 突變→脂肪浸潤型（fibro-fatty replacement），心律不整常先於收縮功能障礙出現
- **拳師犬**：ARVC 表型（右心室為主），Striatin 基因突變
- **可卡犬**：Taurine/L-carnitine 缺乏相關，部分可逆
- **飲食相關 DCM**：BEG diet（boutique/exotic/grain-free）→ 機轉未明，推測 taurine 生物利用率↓或心肌毒性成分

### 假說階段（Evidence Level C-D）
- 腸道微生物組改變與代謝性心肌病的關聯
- miRNA 作為早期偵測生物標記（miR-133a, miR-1）
- 幹細胞療法對心肌再生的潛力

## 二、臨床表現與診斷 (Clinical Signs & Diagnosis)
### 典型表現（發生率）

| 臨床表現 | 發生率 | 特徵描述 | 階段 |
|----------|--------|---------|------|
| 運動不耐/虛弱 | 80-90% | 飼主常誤為「年紀大了」 | 早期-臨床期 |
| 呼吸急促/咳嗽 | 70-80% | 左側 CHF → 肺水腫 | 臨床期 |
| 暈厥 | 20-40% | 心室性心律不整或低輸出 | 任何階段 |
| 猝死 | 30-50%（杜賓） | 無預警，VT/VF 致死 | 任何階段 |
| 腹部膨大 | 30-40% | 右側 CHF → 腹水 | 晚期 |
| 心房顫動 | 30-50%（巨型犬） | 心率可達 200-300 bpm | 臨床期 |

### 非典型表現（易誤診）
- 隱匿期：完全無症狀，僅心超/Holter 異常
- 急性猝死為首發表現（杜賓犬 25-30%）
- 單純右心衰竭誤診為肝臟疾病或腹腔腫瘤
- 飲食相關 DCM：非典型品種（Golden Retriever 等）發生

### 診斷工具比較

| 工具 | 敏感度 | 特異度 | 適用情境 | 成本 |
|------|--------|--------|---------|------|
| 聽診（S3 奔馬律） | 50-60% | 80-90% | 初篩 | $ |
| 胸腔 X 光 | 70-80% | 60-70% | CHF 評估 | $$ |
| NT-proBNP | 80-90% | 75-85% | 篩檢/追蹤 | $$ |
| 心臟超音波 | 95-99% | 95-98% | 確診金標準 | $$$ |
| 24h Holter | 90-95% | 85-90% | 心律不整型 DCM | $$$ |
| 基因檢測（PDK4） | 品種特異 | 品種特異 | 杜賓犬篩檢 | $$ |

### 心超診斷標準

| 參數 | 正常 | DCM 標準 | 杜賓犬特殊值 |
|------|------|---------|-------------|
| LVIDDN | < 1.73 | > 1.73 | > 1.73 |
| FS(%) | > 25% | < 20% | < 25% |
| EPSS(mm) | < 6 | > 8 | > 8 |
| EF(%) | > 40% | < 35% | < 40% |
| LA/Ao | < 1.6 | > 1.6 | > 1.5 |

### 記憶框架——「DCM-RAPID」
- **R**emodeling（離心性重塑）
- **A**rrhythmia（心律不整——VPCs, VT, AF）
- **P**rogressive（進行性且不可逆）
- **I**diopathic/Inherited（原發/遺傳為主）
- **D**ilation（心腔擴大、壁變薄）

### 鑑別診斷

| 疾病 | 關鍵鑑別點 |
|------|-----------|
| MMVD + 心室擴大 | 小型犬、瓣膜增厚脫垂、FS 正常或升高 |
| 心肌炎 | 急性發病、感染史、cTnI 顯著↑↑ |
| Tachycardia-induced CM | 慢性快速心律不整→心率控制後改善 |
| 甲狀腺功能低下 | T4↓，單純甲低很少造成嚴重 DCM |
| Pheochromocytoma | 間歇性高血壓、腎上腺腫塊 |

## 三、治療策略 (Treatment)
### 急性期（CHF 穩定）

| 藥物 | 劑量 | 途徑 | Evidence |
|------|------|------|----------|
| Furosemide | 2-4 mg/kg bolus → 1-2 mg/kg/h CRI | IV | Level A |
| Pimobendan | 0.25-0.3 mg/kg | PO (ASAP) | Level A |
| Dobutamine | 5-15 μg/kg/min CRI | IV | Level B（嚴重低輸出） |
| Nitroprusside | 1-5 μg/kg/min CRI | IV | Level C（急性後負荷降低） |
| 氧氣支持 | FiO₂ 40-60% | 氧氣籠/鼻導管 | Level A |

### 慢性維持期

| 分期 | Primary Care | Specialty Care | Evidence |
|------|-------------|----------------|----------|
| 隱匿期 | 轉診心臟專科 | Pimobendan 0.25-0.3 mg/kg BID | Level A (PROTECT) |
| 輕度 CHF | Pimo + Furo 2 mg/kg BID + ACEi | + Spironolactone 1-2 mg/kg BID | Level A-B |
| 中度 CHF | Furo 增至 4 mg/kg TID + Pimo + ACEi | + Torsemide 替換 Furo 0.2 mg/kg BID | Level B |
| AF 合併 | Diltiazem 1.5-3.5 mg/kg TID | ± Digoxin 0.005 mg/kg BID (目標 0.8-1.2 ng/mL) | Level B |
| VPCs/VT | Sotalol 1.5-3.5 mg/kg BID（首選） | ± Mexiletine 5-8 mg/kg TID（合併） | Level B |
| 難治性 | 加 Sildenafil 1-2 mg/kg BID-TID | Milrinone CRI（住院）、機械輔助 | Level C |

### 營養補充

| 補充劑 | 劑量 | 適應症 | Evidence |
|--------|------|--------|----------|
| Taurine | 500-1000 mg BID | 可卡犬/BEG 飲食相關 DCM | Level B |
| L-carnitine | 50 mg/kg TID | 可卡犬/疑似缺乏 | Level C |
| Omega-3 FA | 40 mg/kg EPA+DHA | 抗炎/抗心律不整 | Level C |
| CoQ10 | 30-90 mg BID | 粒線體支持 | Level D |

### 轉診指標
- 所有新診斷 DCM 應至少一次心臟專科評估
- 隱匿期杜賓犬需 Holter + Echo 專科評估
- 心房顫動/心室頻脈需專科心律不整管理
- 對標準 CHF 治療反應不佳（48h 內）

## 四、併發症與監控 (Complications & Monitoring)
### 疾病本身併發症

| 併發症 | 發生率 | 機轉 | 處理 |
|--------|--------|------|------|
| 心房顫動 | 30-50% | 心房擴大→異位起搏 | Diltiazem ± Digoxin 控制心率 |
| 心室性心律不整 | 50-70%（杜賓） | 心肌纖維化→re-entry | Sotalol ± Mexiletine |
| 猝死 | 30-50%（杜賓） | VT/VF | 抗心律不整藥物預防 |
| 肺水腫 | 60-80% | 左心 CHF | Furosemide + O₂ |
| 腹水/胸水 | 30-40% | 右心 CHF | 利尿劑 + 穿刺引流 |
| 心腎症候群 | 20-30% | CO↓ → 腎灌流↓ | 調整利尿劑、監測腎指數 |

### 治療相關併發症

| 併發症 | 相關藥物 | 監測 | 處理 |
|--------|---------|------|------|
| 低血鉀 | Furosemide | K⁺ q2-4w | 補鉀/Spironolactone |
| 氮血症 | Furosemide + ACEi | BUN/Cre q2-4w | 降低利尿劑劑量 |
| Digoxin 中毒 | Digoxin | 血中濃度 q2-4w | 目標 0.8-1.2 ng/mL |
| 低血壓 | ACEi + Pimobendan | BP 監測 | 減藥/停藥 |
| 促心律不整 | Digoxin, Sotalol | ECG/Holter | 調整劑量/換藥 |

### 監測時程

| 階段 | 頻率 | 項目 |
|------|------|------|
| 隱匿期 | q6mo | Echo + Holter + NT-proBNP |
| CHF 穩定後首月 | q1-2w | 理學、RR、腎功能、電解質 |
| CHF 穩定期 | q2-3mo | Echo + CXR + 血檢 + ECG |
| 藥物調整期 | q1-2w | 目標參數追蹤 |
| 居家 | 每日 | Sleeping RR（目標 < 30/min） |

## 五、預後與預後因子 (Prognosis)
### 正面預後因子
- 早期偵測（隱匿期開始治療）
- 飲食相關 DCM（飲食改變後部分可逆）
- 對 Pimobendan 反應良好
- Taurine/Carnitine 缺乏相關且補充後改善
- 無心律不整或僅偶發 VPCs

### 負面預後因子
- 杜賓犬品種
- 心房顫動合併
- 頻繁 VPCs/VT（> 100 VPCs/24h）
- LVIDDN > 2.0、EF < 20%
- 雙側 CHF（左+右）
- 腎功能惡化（心腎症候群）
- 低鈉血症（Na⁺ < 140 mEq/L）

### 存活數據

| 品種/情境 | 中位存活時間 | 資料來源 |
|----------|------------|---------|
| 杜賓犬——隱匿期+Pimo | 12-15 months | PROTECT (2012) |
| 杜賓犬——CHF 後 | 3-6 months | Calvert et al. |
| 杜賓犬——猝死率 | 30-50% | 多項回顧性研究 |
| 其他大型犬——CHF 後 | 6-12 months | Martin et al. |
| 飲食相關 DCM | 可逆至正常（飲食改變後） | Adin et al. (2019) |
| 合併 AF | MST 減少 30-50% | Pedro et al. |

## 六、人醫借鑒 (Translational Insights)
| 人醫工具/概念 | 獸醫應用潛力 | 現況 |
|-------------|-------------|------|
| Sacubitril/Valsartan (Entresto) | RAAS + Neprilysin 雙抑制 | 犬初步研究中，尚無大型 RCT |
| ICD（植入式去顫器） | 杜賓犬猝死預防 | 技術限制，僅少數學術中心 |
| CRT（心臟再同步治療） | LBBB 型 DCM | 犬極少使用，實驗階段 |
| 基因療法 | PDK4/TTN 特異性治療 | 臨床前研究 |
| GLP-1 受體激動劑 | 心肌代謝改善 | 人醫 Level A，犬未研究 |
| Omecamtiv mecarbil | 選擇性心肌肌球蛋白活化劑 | 人醫 Phase III，獸醫未研究 |
| Liquid biopsy (cfDNA) | 心肌損傷非侵入性偵測 | 概念驗證階段 |
| AI-ECG screening | 隱匿期 DCM 篩檢 | 初步演算法開發中 |

## 七、臨床爭議與知識空缺 (Controversies & Knowledge Gaps)
| 爭議議題 | 正方觀點 | 反方觀點 | Evidence Level |
|---------|---------|---------|---------------|
| BEG 飲食因果關係 | FDA 2018 警告、病例系列報告支持 | 缺乏 RCT、混淆因子多 | D（觀察性） |
| 隱匿期所有品種是否用 Pimo | PROTECT 研究支持杜賓犬 | 僅杜賓犬有 Level A，其他品種外推存疑 | A（杜賓）/ C（其他） |
| Taurine 補充效果 | 可卡犬/BEG 相關 DCM 改善報告 | 非所有 DCM 都是 taurine 缺乏 | B-C |
| Digoxin 是否仍有角色 | 正性肌力 + 心率控制（AF） | 治療窗窄、毒性風險 | C（Pimobendan 時代） |
| 基因篩檢商業化時機 | 早期識別高風險個體 | 外顯率不一、基因型-表型不完全對應 | C |
| Sotalol vs Mexiletine 首選 | Sotalol：β-blocker + Class III 雙效 | Mexiletine：Sotalol 禁忌於重度 CHF | B |

### 知識空缺
- 非杜賓品種隱匿期 DCM 的最佳治療策略
- BEG 飲食相關 DCM 的確切分子機轉
- 基因型與表型的外顯率預測模型
- 犬 DCM 的幹細胞療法安全性與有效性長期數據

[圖片:DCM 心超影像——擴大的左心室與降低的 FS]`,
  clinical_pearl: '杜賓犬的 DCM 有兩個獨特面向：(1) 心律不整表現可能先於心超異常出現，因此 Holter 篩檢與心超同等重要；(2) 杜賓犬的正常 FS 上限就較低（約 25%），不能用一般犬的標準（FS < 20%）來判斷。建議杜賓犬 4 歲開始每年進行心超 + Holter 篩檢。',
  common_mistakes: [
    '僅用心超篩檢杜賓犬 DCM 而忽略 Holter 監測（可能遺漏心律不整主導型）',
    '將 DCM 續發的二尖瓣逆流誤診為原發性 MMVD（需注意品種、心室收縮力與腔室大小）',
    '忽略飲食史詢問——穀物替代飲食（BEG diet）可能與非典型 DCM 相關',
    '急性 CHF 穩定後未安排心臟專科轉診，延誤完整評估',
    '對伴有心房顫動的 DCM 患犬未進行心率控制',
  ],
  disease_data: {
    signalment: '好發於大型至巨型犬，中年至老年（3-7 歲開始）。杜賓犬盛行率最高（50-60%），其他好發品種包括大丹犬、愛爾蘭獵狼犬、拳師犬、紐芬蘭犬、英國可卡犬。雄性略高於雌性（約 1.5:1）。可卡犬為唯一好發的中型犬。',
    etiology: '多為原發性/遺傳性心肌病（idiopathic）。杜賓犬已確認與 PDK4 及 TTN 基因突變相關。部分可能與 L-carnitine 或 taurine 缺乏有關（可卡犬、金毛）。近年關注穀物替代飲食（BEG diet: boutique/exotic/grain-free）與飲食相關 DCM 的關聯（FDA 2018 警告）。',
    pathogenesis: '心肌細胞退化（萎縮、壞死、脂肪/纖維替代）→ 心室壁變薄 → 腔室擴大（離心性重塑）→ 收縮功能下降（FS↓, EF↓）→ 心輸出量減少 → 神經荷爾蒙代償活化（RAAS↑, SNS↑）→ 體液滯留與後負荷增加 → 續發性 AV valve regurgitation → 充血性心衰竭。同時心肌電氣不穩定導致心室性心律不整，增加猝死風險。',
    clinical_signs: [
      { sign: '運動不耐/虛弱', category: 'primary', description: '最早出現的症狀，飼主常誤以為是「年紀大了」' },
      { sign: '呼吸急促/咳嗽', category: 'primary', description: '左側 CHF 的表現，肺水腫導致' },
      { sign: '暈厥/猝死', category: 'primary', description: '心室性心律不整或嚴重低輸出導致，杜賓犬尤其常見' },
      { sign: '腹部膨大', category: 'secondary', description: '右側 CHF 導致腹水' },
      { sign: '心房顫動', category: 'secondary', description: '大型犬 DCM 常見併發，心率可達 200-300 bpm' },
      { sign: '低度收縮期雜音', category: 'secondary', description: '續發性 MR/TR，通常 Grade I-III/VI' },
    ],
    staging: { system: 'Modified ACVIM Framework (adapted for DCM)', stages: ['隱匿期（Occult）：無症狀，心超/Holter 異常', '臨床期—輕度（Mild CHF）：輕微呼吸症狀，可門診管理', '臨床期—中度（Moderate CHF）：明顯 CHF 症狀，需積極治療', '臨床期—重度/難治性（Refractory CHF）：對標準治療反應不佳'] },
    differential_diagnosis: [
      { condition: 'MMVD 合併心室擴大', key_differentiator: '好發小型犬，瓣膜明顯增厚/脫垂，心肌收縮力通常正常或亢進（FS 正常或升高）' },
      { condition: '心肌炎', key_differentiator: '通常急性發病，可能有感染病史（Trypanosoma, Parvovirus），心肌酵素（cTnI）顯著升高' },
      { condition: '心律不整導致的心肌病（Tachycardia-induced CM）', key_differentiator: '慢性快速心律不整（如 AF）導致續發性心肌功能障礙，控制心率後心功能可能改善' },
      { condition: '甲狀腺功能低下', key_differentiator: '可加重 DCM 表現，T4/fT4 檢測可排除，但單純甲低很少造成嚴重 DCM' },
    ],
    diagnostic_workup: '1. 理學檢查（聽診：低度收縮期雜音、奔馬律 S3、心律不整；觸診：脈搏弱/不整）→ 2. 胸腔 X 光（整體心臟增大 VHS↑、肺靜脈擴張、肺水腫）→ 3. 心臟超音波（M-mode: LVIDDN > 1.73、FS < 20%、EPSS > 8mm; 2D: 球形化的左心室; Doppler: MR/TR）→ 4. ECG/Holter（心室性早期收縮、心房顫動、心室頻脈）→ 5. 血檢（NT-proBNP↑、cTnI 可能升高、T4 排除甲低、BUN/Cre 評估腎功能）→ 6. 基因檢測（杜賓犬 PDK4 mutation）',
    treatment_protocol: '【Primary Care】急性 CHF：Furosemide 2-4 mg/kg IV bolus，氧氣支持，轉診。穩定期：Pimobendan 0.25-0.3 mg/kg PO BID + Furosemide 2-4 mg/kg PO BID-TID + Enalapril/Benazepril 0.5 mg/kg PO BID。\n\n【Specialty Care】隱匿期（杜賓犬等高風險品種）：Pimobendan 0.25-0.3 mg/kg PO BID（PROTECT 研究）。臨床期 CHF 三合一 + Spironolactone 1-2 mg/kg PO BID。心室性心律不整：Sotalol 1.5-3.5 mg/kg PO BID（首選）或 Mexiletine 5-8 mg/kg PO TID。心房顫動心率控制：Diltiazem ER 3-5 mg/kg PO BID 或 Digoxin 0.005 mg/kg PO BID（目標血中濃度 0.8-1.2 ng/mL），可合併使用。Taurine/L-carnitine 缺乏疑似者：Taurine 500-1000 mg PO BID + L-carnitine 50 mg/kg PO TID。難治性 CHF：Sildenafil 1-2 mg/kg PO BID-TID、Dobutamine CRI（院內）。',
    prognosis: '整體預後較 MMVD 差。杜賓犬 DCM 預後最差：隱匿期開始治療中位存活約 12-15 個月（PROTECT 研究），出現 CHF 後中位存活約 3-6 個月。其他大型犬品種：CHF 後中位存活約 6-12 個月。伴隨心房顫動者預後更差。猝死率約 30-50%（杜賓犬）。飲食相關 DCM 部分病例在飲食改變後可改善。',
    monitoring: '隱匿期：每 6 個月心超 + Holter。臨床期穩定後：每 2-3 個月回診。每次回診評估：心超（LVIDDN, FS）、胸腔 X 光（肺水腫）、腎功能（BUN/Cre/SDMA）、電解質（K+——利尿劑與 ACEi 影響）。使用 Digoxin 時需監測血中濃度。居家 sleeping RR 監測（目標 < 30 次/分）。Holter 追蹤心律不整（調整抗心律不整藥物劑量依據）。',
    owner_communication: 'DCM 是一種進行性心肌疾病，目前無法逆轉但可藥物管理以改善生活品質與延長存活。誠實告知預後——特別是杜賓犬的預後較為審慎。強調用藥依從性與居家呼吸次數監測的重要性。杜賓犬飼主應被告知此為遺傳性疾病，建議 4 歲起開始每年篩檢。任何暈厥事件需立即就醫。討論生活品質指標與長期照護計畫。',
  },
  diagnostic_data: null,
  procedure_data: null,
  visual_placeholders: [
    { position: '疾病分期段落前', type: 'comparison_table', description: '隱匿期 vs 臨床期特徵比較表' },
    { position: '治療方案段落後', type: 'flowchart', description: 'DCM 診斷與治療決策流程圖' },
    { position: '病理機轉段落', type: 'animated_diagram', description: 'DCM 心臟擴大與收縮力下降動態示意圖' },
  ],
  interactive_placeholders: [
    { position: '心超診斷標準段落', type: 'interactive_staging', description: '輸入品種與心超數據判定 DCM 嚴重度' },
  ],
  drug_api_links: ['Pimobendan', 'Furosemide', 'Enalapril', 'Benazepril', 'Spironolactone', 'Sotalol', 'Mexiletine', 'Diltiazem', 'Digoxin', 'Sildenafil'],
  references: [
    { type: 'guideline', citation: 'Summerfield NJ et al. Efficacy of pimobendan in the prevention of congestive heart failure or sudden death in Doberman Pinschers with preclinical dilated cardiomyopathy (the PROTECT study). J Vet Intern Med. 2012;26(6):1337-1349.', relevance: '隱匿期 DCM 使用 Pimobendan 的關鍵證據' },
    { type: 'journal', citation: 'Wess G et al. Evaluation of N-terminal pro-B-type natriuretic peptide as a diagnostic marker of various stages of cardiomyopathy in Doberman Pinschers. Am J Vet Res. 2011;72(5):642-649.', relevance: '杜賓犬 DCM 分期與 NT-proBNP 診斷價值' },
    { type: 'textbook', citation: 'Ware WA. Cardiovascular Disease in Small Animal Medicine. Manson Publishing, 2011.', relevance: 'DCM 完整病理與治療教材' },
    { type: 'guideline', citation: 'FDA Investigation into Potential Link between Certain Diets and Canine Dilated Cardiomyopathy (2019 update).', relevance: '飲食相關 DCM 的監管與流行病學背景' },
  ],
  is_current: true,
  created_at: now,
};

/** HCM — 疾病型 */
const contentHCM: NodeContent = {
  id: 'CONTENT-L3-003',
  node_id: 'CARDIO-L3-003',
  version: 1,
  summary: '肥厚型心肌病（HCM）是貓最常見的心臟病，約佔所有貓心肌病的 60%。以左心室壁不對稱性或對稱性肥厚為特徵，導致舒張功能障礙。緬因貓與布偶貓已確認具有 MYBPC3 基因突變。HCM 的臨床表現可從完全無症狀到急性動脈血栓栓塞（ATE）或猝死，使得早期篩檢極為重要。',
  learning_objectives: [
    '描述貓 HCM 的病理生理機轉（舒張功能障礙 → SAM → CHF / ATE）',
    '辨識 HCM 與其他導致左心室肥厚的續發性原因（高血壓、甲亢）',
    '運用心臟超音波標準診斷 HCM（LVWd ≥ 6mm）',
    '制定 HCM 不同臨床表現的治療方案（無症狀、CHF、ATE）',
    '說明動脈血栓栓塞（ATE）的病理機轉、緊急處理與預防策略',
  ],
  key_points: [
    '貓最常見心臟病：HCM 約佔所有貓心肌病的 58-68%',
    '基因突變：緬因貓/布偶貓 MYBPC3 突變（A31P / R820W）',
    '心超診斷金標準：舒張末期左心室壁厚度 ≥ 6mm（排除續發原因後）',
    '必須排除續發性左心室肥厚：全身性高血壓（收縮壓 > 160 mmHg）、甲狀腺功能亢進',
    '動脈血栓栓塞（ATE）是 HCM 最嚴重的併發症，好發於主動脈分叉處（saddle thrombus）',
    '無症狀 HCM 貓的 ATE 預防：Clopidogrel 優於 Aspirin（FAT CAT 研究）',
    '貓 CHF 以胸水為主要表現（與犬不同），肺水腫亦常見',
  ],
  body: `# 肥厚型心肌病 (Hypertrophic Cardiomyopathy, HCM)

## 一、病理機制 (Pathophysiology)


### 分子→細胞→器官機轉鏈

| 層級 | 機轉 | 關鍵分子/結構 |
|------|------|--------------|
| 基因 | 肌節蛋白基因突變 | MYBPC3（A31P 緬因貓、R820W 布偶貓）、MYH7、TNNT2 |
| 分子 | Ca²⁺敏感度↑ → 肌節過度收縮 | Troponin C-Ca²⁺親和力改變、SERCA2a |
| 細胞 | 心肌細胞肥大 + myofiber disarray | 細胞面積↑2-3倍、排列紊亂度 > 5% |
| 間質 | 膠原沉積 + 微血管密度不足 | TGF-β↑、Col I/III ratio↑、VEGF↓ |
| 器官 | 壁厚↑(≥6mm) → 舒張功能障礙 + SAM/LVOTO | LV compliance↓、LVOT gradient↑ |
| 系統 | LA 壓↑ → LA 擴大 → SEC → ATE / CHF | Virchow三要素：淤滯/內皮損傷/高凝 |

### 三大病理後果
1. **舒張功能障礙**：心室僵硬→填充受損→LA壓↑→肺靜脈充血→胸水/肺水腫
2. **動態流出道阻塞(LVOTO)**：SAM → MR → LA 擴大惡化循環
3. **動脈血栓栓塞(ATE)**：LA 擴大 + 血流淤滯 + 內皮損傷 → 血栓形成 → saddle thrombus (85%)

### 假說階段（Evidence Level C-D）
- 心肌細胞能量代謝異常（ATP/O₂效率降低）驅動肥厚
- 微血管缺血導致局部纖維化與心律不整
- Galectin-3 作為纖維化早期生物標記

## 二、臨床表現與診斷 (Clinical Signs & Diagnosis)
### 典型表現（發生率）

| 臨床表現 | 發生率 | 特徵描述 | 階段 |
|----------|--------|---------|------|
| 完全無症狀 | 40-60% | 健檢或麻醉前篩檢偶然發現 | Preclinical |
| 呼吸急促/困難 | 30-40% | 胸水（>肺水腫），開口呼吸 | CHF |
| 後肢急性癱瘓 | 10-25% | ATE saddle thrombus，五P徵象 | ATE |
| 心雜音 | 30-55% | SAM/LVOTO導致，胸骨旁收縮期 | 任何 |
| 奔馬律(S4) | 15-30% | 提示舒張功能障礙 | 中-晚期 |
| 猝死 | 5-10% | 可為首發，VT/VF | 任何 |

### 非典型表現（易誤診）
- ATE 影響前肢（10-15%）或單側後肢——誤診為外傷或脊髓疾病
- 緊迫性假性肥厚（stress-induced transient thickening）——壁厚臨界6mm時需複檢
- 中老年貓的隱性 HCM + 甲亢/高血壓共存——須釐清原發 vs 續發
- 年輕貓猝死為首發表現（無預警）

### 診斷工具比較

| 工具 | 敏感度 | 特異度 | 適用情境 | 成本 |
|------|--------|--------|---------|------|
| 聽診（雜音+奔馬律） | 31-53% | 90-95% | 初篩（雜音陰性不能排除） | $ |
| NT-proBNP（>100 pmol/L） | 85-92% | 84-88% | 篩檢/追蹤 | $$ |
| 心臟超音波 | 97-99% | 95-99% | 確診金標準 | $$$ |
| 胸腔 X 光 | 50-70% | 60-75% | 評估 CHF/胸水 | $$ |
| cTnI | 70-80% | 75-85% | 心肌損傷評估 | $$ |
| 基因檢測(MYBPC3) | 品種特異 | 高 | 緬因貓/布偶貓繁殖篩檢 | $$ |

### 心超診斷標準

| 參數 | 正常 | HCM 標準 | 高風險標記 |
|------|------|---------|----------|
| LVWd/IVSd(mm) | < 5.5 | ≥ 6.0 | > 7.0 |
| LA/Ao | < 1.5 | > 1.5 | > 2.0（ATE高風險）|
| SAM | 無 | 存在 | 伴LVOT gradient>50 mmHg |
| SEC (smoke) | 無 | 存在 | ATE 極高風險 |
| LA 血栓 | 無 | — | 存在=禁忌抗凝loading |
| E/A ratio | > 1 | < 1(鬆弛異常) 或 > 2(限制型) | 假性正常化需TDI鑑別 |

### 記憶框架——「HCM-CLOT」
- **C**ardiomyopathy（原發性心肌病，排除續發）
- **L**eft ventricular hypertrophy（≥6mm，核心標準）
- **O**bstruction（SAM/LVOTO，動態性）
- **T**hromboembolism（ATE，最致命併發症）

### 鑑別診斷

| 疾病 | 關鍵鑑別點 |
|------|-----------|
| 全身性高血壓性肥厚 | SBP > 160 mmHg，常見於CKD，控壓後可逆 |
| 甲亢性心肌變化 | T4↑，高動力性，治療甲亢後改善 |
| 限制型心肌病(RCM) | 壁厚正常，舒張嚴重受損，心內膜纖維化 |
| 脫水/低血容時假性肥厚 | 補液後壁厚恢復正常 |
| 主動脈瓣狹窄 | 極少見於貓，瓣膜異常可見 |

## 三、治療策略 (Treatment)
### 急性期處理

| 情境 | Primary Care | Specialty Care | Evidence |
|------|-------------|----------------|----------|
| CHF（胸水） | 胸穿引流（最優先）+ Furosemide 1-2 mg/kg IV | + Pimobendan 若合併收縮障礙 | Level B |
| CHF（肺水腫） | Furosemide 1-2 mg/kg IV q1-2h + O₂ | ± Dobutamine CRI 若低輸出 | Level B |
| ATE 急性 | 止痛 Buprenorphine 0.02 mg/kg buccal + 轉診 | + Clopidogrel 75mg loading → 18.75mg SID | Level A (FAT CAT) |
| 通則 | 最低限度保定、避免緊迫 | 氧氣籠、靜脈通路 | Level A |

### 慢性維持期

| 分期 | 治療策略 | 藥物與劑量 | Evidence |
|------|---------|-----------|----------|
| 無症狀低風險 | 追蹤不治療 | Echo q6-12mo | Level C |
| 無症狀+LVOTO | β-blocker | Atenolol 6.25-12.5 mg/cat BID | Level C |
| 無症狀+LA擴大 | 抗血小板 | Clopidogrel 18.75 mg/cat SID | Level A (FAT CAT) |
| CHF 穩定 | 利尿劑+ACEi+抗血小板 | Furo 1-2 mg/kg BID + Benazepril 0.5 mg/kg SID + Clopi | Level B |
| 難治性CHF | 加 Spironolactone | 1-2 mg/kg BID | Level C |
| End-stage(EF↓) | 加 Pimobendan | 0.25 mg/kg BID（僅限收縮障礙） | Level C |
| ATE後預防 | 雙重抗血栓 | Clopidogrel + 低分子量肝素/Rivaroxaban | Level C |

### 轉診指標
- 所有新診斷 HCM 建議心臟專科確認
- ATE 發生（緊急轉診）
- 對初始 CHF 治療反應不佳
- 壁厚 > 7mm 或 LA/Ao > 2.0
- 擬安排麻醉/手術的 HCM 貓

## 四、併發症與監控 (Complications & Monitoring)
### 疾病本身併發症

| 併發症 | 發生率 | 機轉 | 處理 |
|--------|--------|------|------|
| ATE (saddle thrombus) | 10-25% | LA擴大+SEC→血栓脫落 | Clopidogrel預防；急性止痛+支持 |
| CHF（胸水為主） | 30-40% | LA壓↑→肺靜脈充血 | 胸穿+Furosemide |
| 心律不整(VPCs/VT) | 15-25% | 心肌disarray+纖維化→re-entry | Atenolol/Sotalol |
| 猝死 | 5-10% | VT/VF | β-blocker預防（證據有限） |
| End-stage dilated phase | 5-10% | 心肌耗竭→收縮功能衰退 | Pimobendan（此時適用） |

### 治療相關併發症

| 併發症 | 相關藥物 | 監測 | 處理 |
|--------|---------|------|------|
| 低血壓/心搏過緩 | Atenolol | HR不宜<120bpm | 減量/停藥 |
| 氮血症 | Furosemide+Benazepril | BUN/Cre q2-4w | 降低利尿劑 |
| 食慾下降 | Clopidogrel | 體重監測 | 減量或換藥 |
| 高鉀血症 | Spironolactone+Benazepril | K⁺ q2-4w | 調整劑量 |
| 出血 | Clopidogrel/抗凝血 | 臨床觀察 | 停藥/減量 |

### 監測時程

| 階段 | 頻率 | 項目 |
|------|------|------|
| 無症狀低風險 | q6-12mo | Echo（壁厚、LA、舒張功能） |
| 無症狀高風險 | q4-6mo | Echo + NT-proBNP |
| CHF穩定期 | q2-3mo | Echo + CXR + 腎功能 + 電解質 |
| ATE恢復期 | q2-4w (首月) | 患肢血流、腎功能、K⁺ |
| 居家 | 每日 | Sleeping RR（目標 < 30/min） |

## 五、預後與預後因子 (Prognosis)
### 正面預後因子
- 無症狀且 LA 正常（MST > 5 年）
- 輕度壁厚增加（6-7mm）
- 無 SEC/血栓
- 對治療反應良好的 CHF
- 單側 ATE（vs 雙側）

### 負面預後因子
- LA/Ao > 2.0
- SEC 或 LA 內血栓
- ATE 病史（復發率 25-50%）
- End-stage dilated phase
- 心房顫動
- 低體溫（ATE 發生時）

### 存活數據

| 臨床情境 | 中位存活時間 | 資料來源 |
|----------|------------|---------|
| 無症狀 HCM | > 1,800 days（> 5 年） | Rush et al. |
| CHF 後（有效治療） | 12-18 months | Fox et al. |
| ATE 後存活者 | 6-12 months | Smith et al. |
| ATE 急性期死亡/安樂死 | 35-50% 未存活 | Borgeat et al. |
| ATE 復發率 | 25-50% within 1 year | 多項研究 |
| End-stage（收縮障礙） | 3-6 months | Payne et al. |

## 六、人醫借鑒 (Translational Insights)
| 人醫工具/概念 | 獸醫應用潛力 | 現況 |
|-------------|-------------|------|
| Mavacamten (cardiac myosin inhibitor) | 選擇性降低LVOTO，避免β-blocker副作用 | 人醫 FDA 核准(2022)，貓PK研究進行中 |
| 酒精中隔消融術 | 非手術解決嚴重LVOTO | 人醫Level A，貓解剖限制 |
| Cardiac MRI + T1 mapping | 心肌纖維化定量（優於Echo） | 貓需全麻，少數研究中心 |
| DOAC (Rivaroxaban/Apixaban) | 替代Clopidogrel的ATE預防 | 貓PK已知，臨床試驗進行中 |
| AI-Echo screening | 自動壁厚/LA測量 | 初步演算法驗證中 |
| 基因編輯(CRISPR) | MYBPC3突變修復 | 純實驗階段 |

## 七、臨床爭議與知識空缺 (Controversies & Knowledge Gaps)
| 爭議議題 | 正方觀點 | 反方觀點 | Evidence Level |
|---------|---------|---------|---------------|
| 無症狀HCM是否需β-blocker | 可能減少LVOTO與SAM | 無RCT證實改善預後 | C |
| Pimobendan在HCM的角色 | End-stage有幫助 | 可能加劇LVOTO（非end-stage） | C-D |
| Clopidogrel vs DOAC | FAT CAT支持Clopi | DOAC理論上更佳，缺乏貓RCT | A(Clopi)/D(DOAC) |
| 基因檢測商業化 | 繁殖篩檢有價值 | 外顯率不一、多數品種未知突變 | B-D |
| 麻醉前篩檢策略 | NT-proBNP + 聽診可早期發現 | 偽陽性導致不必要延後手術 | B |
| ATE後安樂死時機 | 雙側+低體溫+心衰→預後極差 | 部分個體仍可恢復功能 | C |

### 知識空缺
- 多數貓品種的 HCM 致病基因尚未確認
- 無症狀 HCM 進展為 CHF/ATE 的風險分層模型
- DOAC 在貓 ATE 預防的長期安全性
- Mavacamten 等 myosin inhibitor 在貓的療效數據

[圖片:HCM 心超影像——左心室壁肥厚與 SAM 現象]`,
  clinical_pearl: '貓 HCM 的診斷「陷阱」：(1) 緊迫（stress）可導致暫時性心肌增厚假象——若壁厚臨界 6mm 且就診時極度緊張，應在鎮靜後或擇日複檢；(2) 全身性高血壓與甲亢是左心室肥厚最重要的續發原因，任何疑似 HCM 的貓必須量血壓並檢測 T4，否則可能給予不適當的治療；(3) 中老年貓的奔馬律（S3/S4 gallop）即使沒有雜音也高度提示心肌病，務必安排心超。\n\n【台灣流行病學】在台灣，HCM 是貓心臟病中最常見的類型，盛行率與國際報告一致（約佔貓心肌病的 58-68%）。台灣常見品種如英國短毛貓、波斯貓、美國短毛貓及混種家貓均為好發族群。台灣亞熱帶氣候下室內飼養貓比例高，肥胖問題普遍，可能加重 HCM 貓的臨床負擔。台灣獸醫心臟專科近年推廣麻醉前心臟篩檢（NT-proBNP + 聽診），有助於早期發現隱性 HCM。緬因貓與布偶貓在台灣飼養數量持續增加，建議育種前進行 MYBPC3 基因檢測。',
  common_mistakes: [
    '診斷 HCM 前未排除全身性高血壓（必須量血壓，收縮壓 > 160 mmHg 可導致續發性肥厚）',
    '診斷 HCM 前未檢測 T4（甲亢常見於中老年貓，可導致高動力性心肌肥厚）',
    '使用 Aspirin 作為 ATE 預防的首選——FAT CAT 研究證實 Clopidogrel 優於 Aspirin',
    '對 HCM 貓使用 Pimobendan（正性肌力作用在肥厚性心臟可能加劇 LVOTO，僅在合併收縮功能障礙時考慮）',
    '忽略貓的 CHF 常以胸水而非肺水腫表現——X 光正常不代表沒有 CHF，需注意胸水',
  ],
  disease_data: {
    signalment: '好發於中年公貓（平均診斷年齡 5-7 歲），雄性約為雌性的 2-3 倍。好發品種：緬因貓（Maine Coon）、布偶貓（Ragdoll）、英國短毛貓、波斯貓、美國短毛貓。混種貓亦常見。',
    etiology: '原發性/遺傳性心肌病。緬因貓確認 MYBPC3-A31P 突變（體染色體顯性，不完全穿透），布偶貓確認 MYBPC3-R820W 突變。多數品種的致病基因尚未確認。少數可能為自發突變。',
    pathogenesis: '心肌細胞肥大 + myofiber disarray + 間質纖維化 → 左心室壁增厚（LVWd/IVSd ≥ 6mm）→ 舒張功能障礙（心室順應性↓、填充壓↑）→ 左心房壓力升高 → LA 擴大 → 充血性心衰竭（胸水/肺水腫）。同時：SAM → 動態 LVOTO → 續發性 MR → 加重 LA 擴大。LA 擴大 + 血流淤滯 → 自發性顯影 → 血栓形成 → ATE（主動脈分叉最常見）。',
    clinical_signs: [
      { sign: '無症狀', category: 'primary', description: '許多貓終身無症狀，僅在健檢或麻醉前篩檢時發現' },
      { sign: '呼吸急促/困難', category: 'primary', description: 'CHF 表現——胸水和/或肺水腫導致' },
      { sign: '急性後肢癱瘓', category: 'primary', description: 'ATE（saddle thrombus）導致，伴隨劇烈疼痛' },
      { sign: '心雜音', category: 'secondary', description: 'SAM 或 LVOTO 導致的收縮期雜音，通常 Grade II-IV/VI，胸骨旁' },
      { sign: '奔馬律', category: 'secondary', description: 'S4（舒張期）奔馬律，提示舒張功能障礙' },
      { sign: '猝死', category: 'secondary', description: '可為首發表現，尤其在年輕好發品種' },
    ],
    staging: { system: '依臨床表現分期（adapted from Fuentes VL 2022）', stages: ['無症狀—低風險（壁厚 6-7mm, LA 正常, 無 SEC）', '無症狀—高風險（壁厚 > 7mm, LA 擴大, SEC/LVOTO）', 'CHF 期（胸水和/或肺水腫）', 'ATE 期（動脈血栓栓塞發作）', '終末期（難治性 CHF 或反覆 ATE）'] },
    differential_diagnosis: [
      { condition: '全身性高血壓性心肌肥厚', key_differentiator: '收縮壓 > 160 mmHg，常見於慢性腎病或甲亢貓，控制血壓後肥厚可能部分逆轉' },
      { condition: '甲狀腺功能亢進性心肌變化', key_differentiator: 'T4 升高，高動力性表現（心率↑, 收縮力↑），治療甲亢後可改善' },
      { condition: '限制型心肌病（RCM）', key_differentiator: '心室壁厚度正常但舒張功能嚴重受損，心內膜纖維化，左心房常極度擴大' },
      { condition: '主動脈瓣狹窄', key_differentiator: '極少見於貓，壓力過載導致同心性肥厚，超音波可見瓣膜異常與狹窄後擴張' },
    ],
    diagnostic_workup: '1. 理學檢查（心雜音定位——胸骨旁/左心底、奔馬律、心律不整、股動脈脈搏品質）→ 2. 血壓測量（排除高血壓性肥厚，Doppler 法）→ 3. T4 檢測（排除甲亢，中老年貓必做）→ 4. 心臟超音波（2D: LVWd/IVSd ≥ 6mm, LA/Ao > 1.5, SAM, SEC; M-mode: FS, E-point; Doppler: MR, LVOT gradient, E/A ratio, TDI e\'）→ 5. 胸腔 X 光（valentine-shaped heart, 胸水, 肺水腫）→ 6. 血檢（NT-proBNP > 100 pmol/L 高度提示, cTnI, BUN/Cre）→ 7. 基因檢測（緬因貓/布偶貓 MYBPC3 突變篩檢）',
    treatment_protocol: '【Primary Care】急性 CHF（呼吸窘迫）：最低限度保定、氧氣支持、Furosemide 1-2 mg/kg IV、胸水引流（大量胸水時優先）。急性 ATE：止痛為首要（Buprenorphine 0.01-0.02 mg/kg IV/buccal q6-8h 或 Methadone 0.1-0.3 mg/kg IM）、保暖（勿過度加溫患肢）、轉診。穩定期口服：Furosemide 1-2 mg/kg PO BID + Clopidogrel 18.75 mg/cat PO SID。\n\n【Specialty Care】無症狀低風險：每 6-12 個月追蹤心超，暫不治療。無症狀高風險（LA 擴大或 SEC）：Clopidogrel 18.75 mg/cat PO SID（ATE 預防，FAT CAT 研究）；有 LVOTO/SAM：Atenolol 6.25-12.5 mg/cat PO BID。CHF 管理：Furosemide（最低有效劑量）+ Benazepril 0.5 mg/kg PO SID-BID + Clopidogrel。難治性 CHF：加 Spironolactone 1-2 mg/kg PO BID、Pimobendan 0.25 mg/kg PO BID（僅限合併收縮功能障礙/end-stage HCM）。ATE 後長期預防：Clopidogrel 18.75 mg/cat PO SID（優於 Aspirin）；部分心臟科醫師加用低分子量肝素或 Rivaroxaban（證據尚有限）。',
    prognosis: '個體差異極大。無症狀 HCM 中位存活可達 > 5 年（部分終身無症狀）。出現 CHF 後中位存活約 12-18 個月（有效治療下）。ATE 發作後預後差：急性期死亡/安樂死率約 35-50%，存活者中位存活約 6-12 個月，復發率約 25-50%。不良預後因子：LA 顯著擴大（LA/Ao > 2.0）、SEC、ATE 病史、心房顫動、end-stage（收縮功能衰退）。',
    monitoring: '無症狀貓：每 6-12 個月心超追蹤（評估壁厚變化、LA 大小、舒張功能）。CHF 控制後：每 2-3 個月回診。監測項目：呼吸次數（sleeping RR < 30 次/分）、X 光（胸水復發）、腎功能（利尿劑+ACEi 影響）、電解質（K+）。使用 Atenolol 者注意心率不宜 < 120 bpm（貓）。ATE 後：密切監測患肢血流恢復、再灌流損傷（高鉀血症）。',
    owner_communication: 'HCM 是貓最常見的心臟病，具有遺傳基礎。許多貓可以長期維持良好生活品質。最危險的併發症是血栓（ATE），出現後肢突然無法行走或劇烈疼痛時應立即就醫。教導飼主監測居家呼吸次數（sleeping RR < 30 次/分）。對於好發品種（緬因貓、布偶貓），建議育種前進行基因篩檢與心超檢查。麻醉風險較高，任何手術/麻醉前應先進行心臟評估。討論 ATE 預防用藥的重要性與長期服藥計畫。',
  },
  diagnostic_data: null,
  procedure_data: null,
  visual_placeholders: [
    { position: '病理機轉段落後', type: 'animated_diagram', description: 'HCM 心室壁肥厚與 SAM 動態示意圖' },
    { position: 'ATE 段落', type: 'annotated_image', description: '貓 ATE saddle thrombus 好發位置解剖圖' },
    { position: '治療方案段落後', type: 'flowchart', description: 'HCM 臨床決策流程圖（無症狀→CHF→ATE）' },
  ],
  interactive_placeholders: [
    { position: '診斷段落', type: 'interactive_staging', description: '輸入心超數據與臨床表現判定 HCM 風險分層' },
  ],
  drug_api_links: ['Furosemide', 'Clopidogrel', 'Atenolol', 'Diltiazem', 'Benazepril', 'Spironolactone', 'Pimobendan', 'Buprenorphine'],
  references: [
    { type: 'guideline', citation: 'Luis Fuentes V et al. ACVIM consensus statement guidelines for the classification, diagnosis, and management of cardiomyopathies in cats. J Vet Intern Med. 2020;34(1):3-32.', relevance: '貓心肌病最新分類與治療共識' },
    { type: 'journal', citation: 'Hogan DF et al. Secondary prevention of cardiogenic arterial thromboembolism in the cat: The double-blind, randomized, positive-controlled feline arterial thromboembolism; clopidogrel vs. aspirin trial (FAT CAT). J Vet Cardiol. 2015;17 Suppl 1:S306-317.', relevance: 'Clopidogrel vs Aspirin 在 ATE 預防的關鍵隨機對照試驗' },
    { type: 'textbook', citation: 'Ettinger SJ, Feldman EC, Côté E. Textbook of Veterinary Internal Medicine, 8th ed. Elsevier, 2017. Chapter 297: Feline Cardiomyopathies.', relevance: '貓心肌病完整教材' },
    { type: 'journal', citation: 'Kittleson MD et al. Familial hypertrophic cardiomyopathy in Maine Coon cats: an animal model of human disease. Circulation. 1999;99(24):3172-3180.', relevance: '緬因貓 HCM 遺傳學經典研究' },
  ],
  is_current: true,
  created_at: now,
};

/** 心包膜積液 — 疾病型 */
const contentPericardialEffusion: NodeContent = {
  id: 'CONTENT-L3-004',
  node_id: 'CARDIO-L3-004',
  version: 1,
  summary: '心包膜積液（Pericardial Effusion, PE）是犬最常見的心包膜疾病，以心包膜囊內液體異常蓄積導致心臟壓塞（cardiac tamponade）為主要臨床問題。犬 PE 最常見的病因為腫瘤（血管肉瘤 HSA 佔 60-70%）與特發性心包膜積液。心包膜穿刺引流（pericardiocentesis）是緊急處理的關鍵步驟。',
  learning_objectives: [
    '描述心包膜積液導致心臟壓塞的病理生理機轉',
    '辨識心臟壓塞的經典臨床表現（Beck\'s triad 的獸醫等價）',
    '執行緊急心包膜穿刺引流的適應症判斷',
    '鑑別犬心包膜積液的常見病因（腫瘤 vs 特發性）',
    '說明心包膜積液的預後評估與長期管理策略',
  ],
  key_points: [
    '犬 PE 最常見病因：腫瘤（HSA ~60%, 心基底部腫瘤 ~20%）> 特發性（~20%）',
    '心臟壓塞是心包膜積液的臨床急症——右心房/心室舒張期受壓 → 靜脈回流受阻',
    '經典表現：頸靜脈怒張、低血壓/脈搏弱、心音減弱（Beck\'s triad 的獸醫等價）',
    '心超是確診最快速的工具——心包膜囊內無回音液體、右心房塌陷（diastolic collapse）',
    '心包膜穿刺引流是心臟壓塞的緊急救命手術',
    '特發性 PE 復發率 ~50%，可考慮心包膜切除術（pericardiectomy）',
    '血管肉瘤（HSA）來源 PE 預後極差，中位存活約 1-4 個月',
  ],
  body: `# 心包膜積液 (Pericardial Effusion, PE)

## 一、病理機制 (Pathophysiology)


### 心臟壓塞機轉鏈

| 層級 | 機轉 | 臨床意義 |
|------|------|---------|
| 液體蓄積 | 出血/滲出液累積於心包膜囊 | 正常 <1 mL/kg，超過即異常 |
| 壓力升高 | 心包內壓 > 右心房壓 | 急性 50-100 mL 即可致壓塞 |
| 右心壓迫 | RA 舒張期塌陷 → RV 填充↓ | 心超最早徵象 |
| 靜脈回流↓ | CVP↑ → 體循環鬱血 | 頸靜脈怒張、肝鬱血、腹水 |
| 心輸出量↓ | SV↓ → CO↓ → 低血壓 | 代償性心率↑、周邊收縮 |
| 終末 | 心因性休克 → PEA/asystole | 未引流→致死 |

### 急性 vs 慢性壓塞

| 特徵 | 急性（如 HSA 破裂） | 慢性（如特發性） |
|------|-------------------|----------------|
| 液量 | 50-100 mL 即致壓塞 | 可達 500-1000 mL |
| 心包膜順應性 | 未伸展，低容量高壓力 | 逐漸伸展，高容量低壓力 |
| 發病速度 | 分鐘至小時 | 數週至數月 |
| 典型表現 | 急性虛脫/猝死 | 漸進性腹水/運動不耐 |

### 病因分類

| 類別 | 比例 | 代表疾病 | 特徵 |
|------|------|---------|------|
| 腫瘤性 | 60-70% | HSA（右心耳）、心基底部腫瘤、間皮瘤 | 出血性為主 |
| 特發性 | ~20% | 排除性診斷，金毛犬好發 | 出血性但不凝固 |
| 感染性 | <5% | 細菌/真菌性心包膜炎 | 滲出性，可培養 |
| 其他 | <10% | LA 撕裂、凝血障礙、尿毒症 | 依病因而異 |

## 二、臨床表現與診斷 (Clinical Signs & Diagnosis)
### 典型表現（發生率）

| 臨床表現 | 發生率 | 特徵描述 | 備註 |
|----------|--------|---------|------|
| 虛弱/昏倒 | 60-80% | CO↓導致低灌流 | 急性最常見主訴 |
| 腹部膨大 | 50-70% | 右心衰→腹水 | 常誤診為肝病 |
| 運動不耐 | 50-60% | 漸進性惡化 | 慢性PE |
| 呼吸急促 | 30-40% | 不常見（非左心衰） | 大量PE壓迫肺 |
| 心音減弱 | 80-90% | 液體隔離心音 | Beck's triad之一 |
| 脈搏弱/pulsus paradoxus | 40-50% | 吸氣時收縮壓降>10 mmHg | 壓塞特徵 |

### 非典型表現（易誤診）
- 慢性腹水被誤診為肝硬化、腹腔腫瘤
- 急性虛脫被誤認為 GDV 或脾臟破裂
- 右心衰症狀而心雜音不明顯——忽略心包膜疾病

### 診斷工具比較

| 工具 | 敏感度 | 特異度 | 適用情境 | 成本 |
|------|--------|--------|---------|------|
| 心臟超音波 (TFAST) | 98-100% | 98-100% | 確診+引導穿刺 | $$$ |
| 胸腔 X 光 | 60-80% | 50-70% | 球形心影提示 | $$ |
| ECG | 40-60% | 30-50% | electrical alternans、低電壓 | $ |
| 引流液 PCV/TS | — | — | 鑑別出血性vs滲出性 | $ |
| 引流液細胞學 | ~50% | 70-80% | 腫瘤偵測（敏感度低） | $$ |
| 腹部超音波 | — | — | HSA 轉移篩檢（脾/肝） | $$ |

### 記憶框架——「PE-TAP」
- **P**ericardium（心包膜疾病=右心衰原因）
- **E**ffusion（確認液體存在——TFAST）
- **T**amponade（壓塞=急症）
- **A**etiology（穿刺後找病因——腫瘤 vs 特發性）
- **P**lan（穿刺→引流→送檢→長期計畫）

## 三、治療策略 (Treatment)
### 急性心臟壓塞處理

| 步驟 | Primary Care | Specialty Care | Evidence |
|------|-------------|----------------|----------|
| 輸液復甦 | Crystalloid 10-20 mL/kg IV bolus | Colloid 5 mL/kg 若需要 | Level B |
| 心包穿刺 | 右側第4-6肋間，ECG監測 | 超音波引導（首選） | Level A |
| 引流液送檢 | PCV/TS + 凝固測試 | 細胞學 + 培養 | Level B |
| 穩定後 | 轉診完整評估 | 心超搜尋腫塊 + 腹超HSA篩檢 | Level B |

### 依病因長期管理

| 病因 | 治療策略 | 預後 | Evidence |
|------|---------|------|----------|
| HSA（右心耳） | 手術切除 + Doxorubicin 化療 | MST 4-6 mo（手術+化療）| Level B |
| 心基底部腫瘤 | 心包膜切除術（姑息性） | MST 12-24+ mo | Level B |
| 間皮瘤 | 心包膜切除 ± 腔內化療 | MST 8-14 mo | Level C |
| 特發性（首次） | 穿刺引流 + 追蹤 | 復發率 ~50% | Level B |
| 特發性（復發） | 心包膜切除術（VATS/開胸） | 治癒率高 | Level B |
| 感染性 | 引流 + 長期抗生素/抗真菌 | 依病原而異 | Level C |

### 轉診指標
- 所有 PE 穩定後建議心臟/腫瘤專科評估
- 復發性特發性 PE（≥2次）→ 手術評估
- 疑似 HSA → 腫瘤科分期評估

## 四、併發症與監控 (Complications & Monitoring)
### 疾病本身併發症

| 併發症 | 發生率 | 機轉 | 處理 |
|--------|--------|------|------|
| 心臟壓塞 | 60-80% | 液體蓄積速率>代償 | 緊急穿刺引流 |
| 復發（特發性） | ~50% | 病因持續 | 心包膜切除術 |
| HSA 轉移/破裂 | 80-90% | 高度惡性腫瘤 | 化療（延長但非治癒） |
| 心律不整(VPCs/VT) | 20-40% | 穿刺時或腫瘤侵犯 | Lidocaine 2 mg/kg IV |

### 穿刺相關併發症

| 併發症 | 發生率 | 預防 | 處理 |
|--------|--------|------|------|
| 心室穿刺 | 5-10% | ECG監測+超音波引導 | 撤針，通常自限 |
| 心律不整 | 10-20% | ECG監測 | 通常撤針後自行緩解 |
| 冠狀動脈撕裂 | <1% | 避開心室壁 | 手術（極少需要） |
| 氣胸 | <5% | 正確進針位置 | 通常少量自限 |

### 監測時程

| 階段 | 頻率 | 項目 |
|------|------|------|
| 穿刺後24h | q2-4h | HR、BP、心超確認無復發 |
| 首月 | q1-2w | 心超（復發監測） |
| 特發性穩定期 | q1-3mo | 心超 |
| HSA 化療期 | q3w（化療前） | CBC + 心超 |

## 五、預後與預後因子 (Prognosis)
### 正面預後因子
- 特發性 PE（vs 腫瘤性）
- 心基底部腫瘤（vs HSA）
- 首次穿刺即完全引流
- 心包膜切除術後（特發性）治癒率高
- 無脾臟/肝臟轉移（HSA 分期）

### 負面預後因子
- HSA 來源
- 已有轉移（脾/肝/肺）
- 反覆壓塞
- DIC 合併
- 低蛋白血症

### 存活數據

| 病因/情境 | 中位存活時間 | 資料來源 |
|----------|------------|---------|
| HSA（僅穿刺） | 1-2 months | Stafford Johnson et al. |
| HSA（手術+化療） | 4-6 months | Weisse et al. |
| 心基底部腫瘤 | 12-24+ months | Ehrhart et al. |
| 特發性（心包切除後） | 正常壽命 | 多項回顧性研究 |
| 間皮瘤 | 8-14 months | Closa et al. |

## 六、人醫借鑒 (Translational Insights)
| 人醫工具/概念 | 獸醫應用潛力 | 現況 |
|-------------|-------------|------|
| Pericardial window via VATS | 微創心包開窗術 | 犬已廣泛使用胸腔鏡 |
| Intrapericardial chemotherapy | 間皮瘤腔內化療（Cisplatin） | 犬少數案例報告 |
| Pericardioscopy | 心包膜鏡直視活檢 | 實驗性，犬極少使用 |
| Cardiac biomarkers (cTnI, BNP) | 鑑別壓塞嚴重度 | 輔助判斷，非確診 |
| AI-TFAST interpretation | 自動偵測PE與壓塞 | 初步驗證中 |

## 七、臨床爭議與知識空缺 (Controversies & Knowledge Gaps)
| 爭議議題 | 正方觀點 | 反方觀點 | Evidence Level |
|---------|---------|---------|---------------|
| 引流液細胞學價值 | 可偵測部分腫瘤（淋巴瘤） | 敏感度僅~50%，HSA脫落細胞少 | B |
| HSA 是否值得手術 | MST延長2-4倍 | 仍為4-6月，成本高 | B |
| 特發性PE何時手術 | 第2次復發即建議 | 部分1次復發後長期不再復發 | C |
| 化療對HSA心臟PE效果 | Doxorubicin有延長MST證據 | 心臟毒性疑慮 | B |
| 引流液pH/乳酸鑑別 | 可能幫助區分病因 | 重疊太大，實用性有限 | D |

### 知識空缺
- 特發性 PE 的確切免疫病理機轉
- HSA 的有效免疫療法（checkpoint inhibitors 在犬的試驗中）
- 更高敏感度的引流液腫瘤標記
- 心包膜切除術的最佳術式比較（VATS vs 開胸 vs 膈下窗口）

[圖片:心包膜積液心超影像——心包膜囊積液與右心房塌陷]`,
  clinical_pearl: '心包膜積液引流液的 PCV 接近周邊血液不代表是急性出血——慢性心包膜積液的引流液 PCV 可高達 40-60%，但不會凝固（因為心臟持續擺動已將纖維蛋白去除）。引流液不凝固 + PCV 高 = 慢性心包膜出血（如 HSA 慢性滲出），引流液會凝固 = 醫源性穿刺到心腔或急性出血。這個「凝固測試」是穿刺過程中即時判斷的實用技巧。\n\n【台灣流行病學】在台灣，犬心包膜積液以腫瘤性病因為主（HSA 佔多數），好發於中老年大型犬如金毛獵犬與拉布拉多，這些品種在台灣飼養數量龐大。台灣亞熱帶氣候下戶外活動量大的犬隻需注意定期健檢。特發性心包膜積液在金毛犬族群中盛行率較高。台灣各大獸醫教學醫院與心臟專科已具備心包膜穿刺引流與胸腔鏡心包膜切除術能力，複雜病例建議及時轉診。',
  common_mistakes: [
    '將心包膜積液導致的腹水誤診為肝病或腹腔腫瘤——忽略「右心衰竭 → 腹水」的路徑',
    '心超未系統性搜尋右心耳腫塊——HSA 在大量積液時可能被遮蔽，引流後立即重做心超',
    '僅依賴引流液細胞學排除腫瘤——心包膜積液細胞學對腫瘤的敏感度僅約 50%',
    '穿刺時未進行 ECG 監測——穿刺針接觸心肌可導致心室早期收縮或心室頻脈',
    '對 HSA 來源 PE 過度樂觀——即使穿刺引流後臨床改善顯著，HSA 的長期預後仍很差',
  ],
  disease_data: {
    signalment: '好發於中老年大型犬（平均 8-10 歲）。HSA 好發品種：德國牧羊犬、金毛犬、拉布拉多。特發性 PE 好發品種：金毛犬、拉布拉多、聖伯納。心基底部腫瘤好發品種：短頭種（法國鬥牛犬、波士頓梗、拳師犬）。無明顯性別偏好。',
    etiology: '腫瘤性（~60-70%）：血管肉瘤（HSA，右心耳原發最常見）、心基底部腫瘤（化學受體瘤/ectopic thyroid carcinoma）、間皮瘤。特發性（~20%）：排除性診斷，可能為免疫介導或慢性低度發炎。其他（<10%）：感染性、凝血異常、左心房撕裂、創傷性、尿毒症性。',
    pathogenesis: '心包膜囊內液體蓄積 → 心包內壓力升高 → 超過右心房/心室舒張壓 → 右心房舒張期塌陷 → 靜脈回流受阻 → 中心靜脈壓↑ → 體循環鬱血（頸靜脈怒張、肝鬱血、腹水）→ 右心室填充↓ → 心輸出量↓ → 低血壓 → 代償性心率↑ + 周邊血管收縮。嚴重者 → 心因性休克 → 心搏停止。液體蓄積速率決定臨床嚴重度——急性（HSA 破裂）少量即致壓塞，慢性可容納較大量。',
    clinical_signs: [
      { sign: '虛弱/昏倒', category: 'primary', description: '心輸出量下降與低灌流導致' },
      { sign: '腹部膨大', category: 'primary', description: '右心衰竭導致腹水，常被誤認為其他腹腔疾病' },
      { sign: '運動不耐', category: 'primary', description: '心輸出量下降，活動力明顯減退' },
      { sign: '心音減弱/消失', category: 'secondary', description: '積液隔絕心音傳導，聽診器難以聽到清晰心音' },
      { sign: '頸靜脈怒張', category: 'secondary', description: '中心靜脈壓升高的直接表現' },
      { sign: '脈搏弱/奇脈', category: 'secondary', description: 'Pulsus paradoxus：吸氣時收縮壓下降 > 10 mmHg' },
    ],
    staging: null,
    differential_diagnosis: [
      { condition: '擴張型心肌病（DCM）', key_differentiator: '心超：心室擴大與收縮力下降為主，無心包膜積液（除非末期合併）' },
      { condition: '右心衰竭（其他原因）', key_differentiator: '三尖瓣疾病、肺高壓等可導致右心衰竭與腹水，但心超無心包膜積液' },
      { condition: '腹腔腫瘤伴腹水', key_differentiator: '腹部超音波可見腹腔腫塊，心超正常，無頸靜脈怒張' },
      { condition: '限制型心包膜炎（constrictive pericarditis）', key_differentiator: '心包膜增厚鈣化但少量或無積液，舒張功能嚴重受限，較少見' },
    ],
    diagnostic_workup: '1. 理學檢查（心音減弱、頸靜脈怒張、腹部波動感/腹水、脈搏弱/奇脈）→ 2. 胸腔 X 光（球形心影 globoid cardiac silhouette、肺野通常清晰）→ 3. 心臟超音波（確診：心包膜囊無回音液體、右心房舒張期塌陷、評估腫塊）→ 4. ECG（低電壓 QRS、electrical alternans——心臟在積液中擺動）→ 5. 緊急心包膜穿刺引流（治療兼診斷）→ 6. 引流液分析（PCV、TP、凝固測試、細胞學、細菌培養）→ 7. 腹部超音波（篩檢脾臟/肝臟 HSA 轉移灶）→ 8. 引流後重複心超（積液清除後更容易辨識腫塊）',
    treatment_protocol: '【Primary Care / 急診】心臟壓塞 = 緊急處理：(1) 快速靜脈輸液（10-20 mL/kg crystalloid bolus 維持前負荷）；(2) 心包膜穿刺引流——右側臥或站姿，右側第 4-6 肋間，ECG 監測，14-16G 長針或穿刺導管（over-the-needle catheter），引流至心超確認積液消除；(3) 引流液送檢；(4) 穩定後轉診。\n\n【Specialty Care】病因導向治療：(A) 特發性 PE：首次→穿刺引流+追蹤；復發 2-3 次→心包膜切除術（subtotal pericardiectomy，胸腔鏡或開胸，長期控制率 > 90%）；(B) HSA：外科切除（右心耳部分切除）+ Doxorubicin 化療 30 mg/m² IV q3wks × 5-6 cycles；預後審慎。(C) 心基底部腫瘤（化學受體瘤）：心包膜切除術控制壓塞（腫瘤通常低度惡性、生長緩慢）；放射治療可考慮。(D) 間皮瘤：心包膜切除+心包膜內 Cisplatin 灌注（有限證據）。',
    prognosis: '取決於病因。特發性 PE：穿刺引流後復發率 ~50%，心包膜切除術後長期預後良好（中位存活 > 2 年）。HSA：預後差——僅穿刺引流中位存活 ~1-2 個月，手術+化療中位存活 ~4-6 個月。心基底部腫瘤：心包膜切除術後中位存活 ~12-24 個月（腫瘤生長緩慢）。間皮瘤：預後差，中位存活 ~3-6 個月。',
    monitoring: '穿刺引流後 24-48 小時密切監測血壓、心率、呼吸（排除再蓄積）。出院後 1 週回診心超（評估是否復發、重新搜尋腫塊）。特發性 PE 穩定後每 1-3 個月心超追蹤。HSA 術後/化療期間每 2-4 週追蹤心超 + 腹超 + CBC。長期監測：飼主觀察活動力、食慾、腹圍變化。',
    owner_communication: '心包膜積液的緊急處理（穿刺引流）通常可快速改善症狀，但關鍵是找出根本原因。若為腫瘤（特別是血管肉瘤），需誠實告知預後審慎，討論治療目標（延長存活 vs 維持生活品質）。若為特發性，預後相對良好，但需告知復發可能——復發時需再次就醫穿刺引流，頻繁復發可考慮心包膜切除術。強調任何急性虛弱、腹部膨大、昏倒應立即就醫。',
  },
  diagnostic_data: null,
  procedure_data: null,
  visual_placeholders: [
    { position: '病理機轉段落後', type: 'animated_diagram', description: '心臟壓塞機轉動態示意圖——積液壓迫右心房塌陷' },
    { position: '病因分類段落', type: 'comparison_table', description: 'PE 病因分類與特徵比較表（HSA vs 特發性 vs 心基底部腫瘤）' },
  ],
  interactive_placeholders: [
    { position: '治療段落', type: 'interactive_staging', description: '根據病因與引流液分析結果引導治療決策' },
  ],
  drug_api_links: ['Doxorubicin', 'Cisplatin'],
  references: [
    { type: 'journal', citation: 'Shaw SP, Rush JE. Canine pericardial effusion: pathophysiology and cause. Compend Contin Educ Vet. 2007;29(7):400-404.', relevance: '犬心包膜積液病理機轉與病因綜述' },
    { type: 'journal', citation: 'Stafford Johnson M et al. Pericardial effusion in dogs: 29 cases. J Small Anim Pract. 2004;45(11):546-553.', relevance: '犬 PE 回溯性研究——病因分布與預後分析' },
    { type: 'textbook', citation: 'Ware WA. Cardiovascular Disease in Small Animal Medicine. Manson Publishing, 2011. Chapter: Pericardial Disease.', relevance: '心包膜疾病完整教材' },
    { type: 'journal', citation: 'Treggiari E et al. A descriptive review of cardiac tumours in dogs and cats. Vet Comp Oncol. 2017;15(2):273-288.', relevance: '心臟腫瘤分類與流行病學' },
    { type: 'guideline', citation: 'Keene BW, Atkins CE, Bonagura JD, et al. "ACVIM consensus guidelines for the diagnosis and treatment of myxomatous mitral valve disease in dogs." J Vet Intern Med. 2019;33(3):1127-1140.', relevance: 'ACVIM 心臟疾病共識指引，涵蓋心包膜積液鑑別診斷' },
  ],
  is_current: true,
  created_at: now,
};

/** 犬心絲蟲症 — 疾病型 */
const contentHeartworm: NodeContent = {
  id: 'CONTENT-L3-005',
  node_id: 'CARDIO-L3-005',
  version: 1,
  summary: '犬心絲蟲症（Dirofilaria immitis）是經由蚊蟲傳播的寄生蟲感染，成蟲寄生於肺動脈與右心室，導致肺動脈高壓、右心衰竭與 caval syndrome。台灣地處亞熱帶，為心絲蟲高盛行區（未預防犬陽性率 20-40%），預防醫學極為重要。治療採 AHS（美國心絲蟲學會）2020 指引之分階段殺蟲策略。',
  learning_objectives: [
    '描述 D. immitis 的完整生活史（蚊蟲→L3 幼蟲→成蟲→microfilaria）',
    '運用 AHS 分級系統正確評估感染嚴重度（Class 1-4）',
    '制定成犬心絲蟲殺蟲治療計畫（melarsomine 三劑法）',
    '列舉台灣可用的心絲蟲預防藥物與方案',
    '辨識 caval syndrome 的臨床表現與緊急處理',
  ],
  key_points: [
    '病原：Dirofilaria immitis，成蟲長 15-30 cm，壽命 5-7 年',
    '台灣為高盛行區——全年皆有蚊蟲傳播風險，建議全年預防',
    '診斷三件套：抗原檢測（成蟲）+ Knott\'s test（microfilaria）+ 胸腔 X 光',
    'AHS 分級：Class 1（輕度/無症狀）→ Class 2（中度）→ Class 3（重度）→ Class 4（caval syndrome）',
    'Melarsomine（Immiticide）三劑法為殺成蟲標準治療——嚴格限制運動',
    '預防藥物：Ivermectin / Milbemycin / Moxidectin / Selamectin，每月投予',
    'Caval syndrome 需緊急經頸靜脈取蟲（surgical extraction via jugular vein）',
  ],
  body: `# 犬心絲蟲症 (Heartworm Disease, Dirofilaria immitis)







## 一、病理機制 (Pathophysiology)

### 生活史與致病機轉鏈

| 階段 | 時程 | 位置 | 病理效應 |
|------|------|------|---------|
| L3 感染 | Day 0 | 皮下組織（蚊蟲叮咬） | 無臨床意義 |
| L3→L4→L5 | Day 0-70 | 皮下→肌肉 | Ivermectin 可殺此期 |
| L5 遷移 | Day 70-120 | 經靜脈→肺動脈 | 開始血管損傷 |
| 成蟲成熟 | Day 120-210 | 肺動脈主幹/分支 | Ag test 陽性（~7月） |
| 慢性寄生 | 數月-數年 | 肺動脈→（嚴重時）RV | 肺血管病變累積 |

### 肺動脈病理進程

| 層級 | 機轉 | 關鍵因子 |
|------|------|---------|
| 內皮 | 蟲體機械性損傷 + Wolbachia 抗原刺激 | WSP (Wolbachia surface protein) |
| 血管壁 | Proliferative endarteritis → 管壁增厚 | PDGF、VEGF |
| 血管腔 | 管徑狹窄 + 血栓形成 | 血小板活化、D-dimer↑ |
| 肺循環 | PVR↑ → 肺動脈高壓 (PAH) | mPAP > 25 mmHg |
| 右心 | 壓力過載 → RV 肥大 → RV 衰竭 | TR velocity↑、TAPSE↓ |
| 全身 | 右心衰竭 → 體循環鬱血 → 腹水 | CVP↑、肝鬱血 |

### Wolbachia 的角色
- 革蘭氏陰性胞內共生菌，存在於所有 D. immitis
- 蟲體死亡時釋放 Wolbachia → 宿主 TLR2/4 活化 → 嚴重發炎反應
- Doxycycline 殺 Wolbachia → 降低殺蟲後發炎風險（AHS 2020 強力推薦）
- 殺 Wolbachia 也會抑制蟲體繁殖與發育

### Caval Syndrome 機轉
大量蟲體（>50 隻）回堵至 RA/TV/CVC → 急性 TR → CO↓ → 機械性溶血（紅血球被蟲體碎裂）→ 血紅素尿 + DIC → 多器官衰竭 → 致死

## 二、臨床表現與診斷 (Clinical Signs & Diagnosis)

### 依 AHS Class 分級表現

| AHS Class | 臨床表現 | 影像學 | 蟲量估計 |
|-----------|---------|--------|---------|
| 1（輕度） | 無症狀/輕微咳嗽 | CXR 正常或輕微 | 少量（<10隻） |
| 2（中度） | 咳嗽、運動不耐 | PA 擴張、右心輕度↑ | 中量（10-30隻） |
| 3（重度） | 呼吸困難、腹水、右心衰竭 | PA 嚴重擴張、右心↑↑、肺病變 | 大量（>30隻） |
| 4（Caval） | 急性虛脫、血紅素尿、DIC | 心超見大量蟲影 | 極大量回堵至RV/TV |

### 非典型表現（易誤診）
- 僅慢性咳嗽→誤診為支氣管炎/氣管塌陷
- 僅腹水→誤診為肝病/腹腔腫瘤
- 貓心絲蟲：哮喘樣症狀（HARD syndrome）→誤診為貓哮喘
- 異位感染（眼、腦、皮下）：極少見

### 診斷工具比較

| 工具 | 敏感度 | 特異度 | 備註 | 成本 |
|------|--------|--------|------|------|
| 抗原檢測(SNAP) | 84-97% | 97-100% | 偵測雌蟲Ag，感染後~7月可測 | $$ |
| 抗原加熱處理 | 95-99% | 97-100% | 打散免疫複合物，↑敏感度 | $$ |
| Knott's test | 60-70% | 99% | 偵測microfilaria | $ |
| 胸腔 X 光 | 70-85% | 60-75% | 評估肺血管與心臟 | $$ |
| 心臟超音波 | 50-80% | 98-100% | 可視化蟲體（=號），評估PAH | $$$ |

### 台灣流行病學重點
- 全台皆為盛行區，南部陽性率 > 北部
- 全年有蚊蟲活動（亞熱帶），預防須全年不中斷
- 流浪犬陽性率可達 30-60%
- 貓感染比例約犬的 5-15%

## 三、治療策略 (Treatment)

### AHS 2020 三劑法時程

| 時間 | 步驟 | 藥物與劑量 | Evidence |
|------|------|-----------|----------|
| Day 0 | 開始預處理 | Doxycycline 10 mg/kg PO BID × 28d | Level A |
| Day 0 | 開始預防 | Ivermectin 6-12 µg/kg PO monthly | Level A |
| Day 0 | 嚴格限制運動 | 全程！ | Level A |
| Day 0-14 | 抗發炎 | Prednisolone 0.5 mg/kg BID → taper | Level B |
| Day 60 | 第1劑殺蟲 | Melarsomine 2.5 mg/kg deep IM (L3-L5) | Level A |
| Day 90 | 第2劑殺蟲 | Melarsomine 2.5 mg/kg deep IM | Level A |
| Day 91 | 第3劑殺蟲 | Melarsomine 2.5 mg/kg deep IM | Level A |
| Day 91+ | 嚴格籠養 | 6-8 週（肺栓塞高風險期） | Level A |
| Day 120 | 微絲蟲清除 | Ivermectin + Doxycycline if needed | Level B |
| Day 271 | 複檢抗原 | 應轉陰（9月後） | Level B |

### 依 Class 治療策略

| Class | Primary Care | Specialty Care | 注意事項 |
|-------|-------------|----------------|---------|
| 1-2 | 可完成全程三劑法 | Echo評估後執行 | 標準流程 |
| 3 | 先穩定CHF再轉診 | Furosemide + Sildenafil 1-2 mg/kg BID → 穩定後殺蟲 | 肺栓塞風險↑↑ |
| 4 | 緊急轉診 | 經頸靜脈取蟲（forceps via jugular venotomy）→ 穩定後殺蟲 | 不治療→致死 |

### 轉診指標
- Class 3-4
- 合併其他心臟疾病
- Melarsomine 無法取得時
- 治療後抗原持續陽性

## 四、併發症與監控 (Complications & Monitoring)

### 疾病本身併發症

| 併發症 | 發生率 | 機轉 | 處理 |
|--------|--------|------|------|
| 肺動脈高壓 | 60-80%(Class2+) | PA病變→PVR↑ | Sildenafil |
| 右心衰竭 | 30-40%(Class3) | RV壓力過載 | Furosemide + Pimobendan |
| 免疫複合物腎病 | 10-20% | Ag-Ab沉積於腎絲球 | 支持療法 |
| DIC | Class 4 | 蟲體碎片+溶血 | 緊急取蟲 |
| Caval syndrome | 5-10% | 蟲體堵塞TV/CVC | 外科取蟲 |

### 治療相關併發症

| 併發症 | 發生率 | 時期 | 處理 |
|--------|--------|------|------|
| 肺血栓栓塞 | 10-30% | Melarsomine後7-21天 | Prednisolone+籠養+O₂ |
| 注射部位疼痛/腫脹 | 30-50% | 注射後24-72h | 冰敷+Tramadol |
| 注射部位膿瘍 | <5% | 注射後1-2w | 引流+抗生素 |
| 急性過敏反應 | <1% | 蟲死亡後 | Dexamethasone+Epinephrine |

### 監測時程

| 階段 | 頻率 | 項目 |
|------|------|------|
| 殺蟲後高風險期(7-21d) | 每日居家觀察 | 呼吸/精神/體溫/食慾 |
| 殺蟲後6-8w | q2w | 理學+RR |
| 治療後1月 | 1次 | Knott's test |
| 治療後6-9月 | 1次 | 抗原複檢（應轉陰） |
| 終身 | 每年 | 抗原篩檢+持續預防 |

## 五、預後與預後因子 (Prognosis)

### 正面預後因子
- Class 1-2（治療成功率 > 95%）
- 嚴格限制運動配合度高
- Doxycycline 前處理完成
- 無合併肺血管嚴重病變

### 負面預後因子
- Class 3-4
- 合併 DIC/Caval syndrome
- 飼主無法配合限制運動
- 合併其他心臟疾病
- 嚴重肺動脈高壓

### 存活數據

| 情境 | 預後 | 資料來源 |
|------|------|---------|
| Class 1-2 三劑法 | 治療成功率 > 95% | AHS 2020 |
| Class 3 治療 | 成功率 70-85%（風險↑） | 多項回顧性研究 |
| Class 4 手術取蟲 | 死亡率 15-40% | Ishihara et al. |
| Class 4 不治療 | 致死率 ~100% | — |
| 預防（全年） | 近100%有效 | AHS consensus |

## 六、人醫借鑑 (Translational Insights)

| 人醫概念 | 獸醫應用 | 現況 |
|---------|---------|------|
| WHO 淋巴絲蟲IDA策略 | Mass drug administration概念用於流浪犬 | 部分國家試行 |
| Wolbachia as drug target | 犬已成功應用Doxycycline前處理 | Level A，犬先於人 |
| PAH靶向治療(Sildenafil/Bosentan) | 犬心絲蟲PAH管理 | Sildenafil已用，Bosentan研究中 |
| Rapid diagnostic tests | SNAP test類似人瘧疾快篩概念 | 已成熟應用 |
| 基因驅動滅蚊 | 從源頭消滅媒介蚊蟲 | 純實驗階段 |

## 七、臨床爭議與知識空缺 (Controversies & Knowledge Gaps)

| 爭議議題 | 正方觀點 | 反方觀點 | Evidence Level |
|---------|---------|---------|---------------|
| Slow-kill vs 三劑法 | 經濟考量+Melarsomine供應問題 | AHS明確反對slow-kill（抗藥性風險） | A（三劑法）/ D（slow-kill） |
| 抗原加熱處理常規化 | 提高敏感度5-15% | 額外成本+假陽性風險 | B |
| 貓心絲蟲預防必要性 | 台灣高盛行區、貓感染預後差 | 貓感染率低、預防藥選擇有限 | B |
| Melarsomine替代方案 | 全球供應不穩時需替代方案 | Moxidectin+Doxy+Ivermectin slow-kill效果不確定 | C |
| 預防藥抗藥性 | ML(macrocyclic lactone)抗藥性報告增加 | 多數報告來自美國密西西比三角洲，亞洲尚無明確證據 | C |

### 知識空缺
- ML 類藥物抗藥性的分子機轉與全球分佈
- 貓心絲蟲感染的最佳治療方案（無 Melarsomine 核准）
- 心絲蟲疫苗開發的可行性
- 全球氣候變遷對心絲蟲分佈區域擴張的影響預測

[圖片:心絲蟲生活史示意圖]`,
  clinical_pearl: '心絲蟲抗原檢測是偵測「成蟲雌蟲」的抗原，因此在以下情況可能出現「假陰性」：(1) 感染後不到 7 個月（成蟲尚未成熟）；(2) 僅感染雄蟲；(3) 低蟲量感染。如果臨床高度懷疑但抗原陰性，可進行抗原加熱處理（heat treatment）打散免疫複合物後重測，可提升敏感度。另外，投予預防藥物並不會影響已感染成蟲的抗原檢測結果。',
  common_mistakes: [
    '未對陽性犬進行嚴格運動限制——蟲體死亡碎片引起肺血栓栓塞，運動會增加風險，這是治療致死的最常見原因',
    '直接開始 Melarsomine 而跳過 Doxycycline 前處理——殺 Wolbachia 可降低蟲體死亡時的發炎反應',
    '使用兩劑法而非三劑法殺蟲——AHS 2020 強烈建議三劑法（更安全且更有效）',
    '僅依賴抗原檢測而忽略 Knott\'s test——microfilaria 陽性可確認感染活性，且影響治療方案',
    '對 Class 4 caval syndrome 嘗試藥物殺蟲——應先外科取蟲穩定後再進行化學治療',
  ],
  disease_data: {
    signalment: '任何品種、年齡的犬皆可感染。室外犬或未預防犬風險最高。台灣全境皆為盛行區（北部至南部陽性率逐漸增加）。無品種偏好。中年至老年犬較多出現臨床症狀（因慢性感染累積）。',
    etiology: '病原：Dirofilaria immitis（犬心絲蟲），線蟲門。媒介：蚊蟲（Aedes, Culex, Anopheles 等 70+ 種）。成蟲長 15-30 cm，寄生於肺動脈主幹及其分支，嚴重時延伸至右心室。成蟲壽命 5-7 年。共生菌 Wolbachia pipientis 與蟲體發育及宿主免疫反應密切相關。',
    pathogenesis: '感染性 L3 幼蟲經蚊蟲叮咬進入皮下 → 皮下發育為 L5 → 遷移至肺動脈 → 成蟲寄生導致肺動脈內皮損傷（proliferative endarteritis）→ 肺動脈增厚與管徑縮小 → 肺血管阻力↑ → 肺動脈高壓 → 右心室壓力過載 → 右心室肥大 → 右心衰竭（腹水、胸水）。蟲體死亡（自然或治療後）→ 蟲屍碎片 + Wolbachia 釋放 → 肺血栓栓塞 + 急性肺損傷。Caval syndrome：大量蟲體回堵至右心室/三尖瓣/後腔靜脈 → 急性三尖瓣閉鎖不全 + 機械性溶血 → 急性右心衰竭 + DIC。',
    clinical_signs: [
      { sign: '咳嗽', category: 'primary', description: '肺動脈病變與肺實質發炎導致，慢性乾咳' },
      { sign: '運動不耐', category: 'primary', description: '肺動脈高壓與心輸出量受限，活動後喘、疲倦' },
      { sign: '腹部膨大', category: 'primary', description: '右心衰竭導致腹水，Class 3 常見' },
      { sign: '呼吸困難', category: 'secondary', description: '嚴重肺血管疾病或肺血栓栓塞時出現' },
      { sign: '血紅素尿', category: 'secondary', description: 'Caval syndrome 的特徵——蟲體機械性破壞紅血球' },
      { sign: '昏厥/猝死', category: 'secondary', description: '嚴重肺高壓或大量肺栓塞時可發生' },
    ],
    staging: { system: 'AHS (American Heartworm Society) Classification', stages: ['Class 1：無症狀或輕微咳嗽，X 光正常或輕微變化', 'Class 2：咳嗽、運動不耐，肺動脈擴張、右心輕度增大', 'Class 3：呼吸困難、腹水、右心衰竭，嚴重肺血管及心臟變化', 'Class 4：Caval syndrome——急性溶血、DIC、休克'] },
    differential_diagnosis: [
      { condition: '慢性支氣管炎/氣管塌陷', key_differentiator: '慢性咳嗽但心絲蟲抗原陰性，X 光無肺動脈擴張，氣管塌陷可在 X 光/透視下確認' },
      { condition: '肺高壓（其他原因）', key_differentiator: '心超可見右心擴大與三尖瓣逆流，但心絲蟲抗原陰性，需排除先天性心臟病或慢性肺病' },
      { condition: '右心心肌病', key_differentiator: '右心室擴大與功能障礙為主，無肺動脈蟲影或抗原陽性' },
      { condition: 'Angiostrongylus vasorum', key_differentiator: '法國心蟲，主要在歐洲流行，台灣罕見；可導致凝血障礙，糞便 Baermann 法檢出幼蟲' },
    ],
    diagnostic_workup: '1. 抗原檢測（SNAP test or ELISA）——偵測成蟲雌蟲抗原（感染後 ~7 月可測到）→ 2. Knott\'s test 或 filter test（偵測 microfilaria，評估感染活性）→ 3. 胸腔 X 光（肺動脈擴張、右心增大、肺實質病變、肺動脈截斷徵象）→ 4. 心臟超音波（右心評估、肺動脈內蟲體可視化、三尖瓣逆流/肺高壓估計）→ 5. 血檢（CBC：嗜酸球增多、血小板減少; 生化：BUN/Cre、肝指數; 凝血功能）→ 6. 尿液分析（蛋白尿——免疫複合物腎病）→ 7. 抗原加熱處理（疑似感染但抗原陰性時提升敏感度）',
    treatment_protocol: '【Primary Care】診斷確認後立即：(1) 嚴格限制運動（鏈繩散步、禁止跑跳）；(2) 第 1 天起 Doxycycline 10 mg/kg PO BID × 28 天（殺 Wolbachia）；(3) 第 1 天起每月 Ivermectin 預防劑量（6-12 µg/kg）或 topical Moxidectin；(4) Prednisolone 0.5 mg/kg PO BID × 7 天，再 0.5 mg/kg SID × 7 天，再 0.5 mg/kg QOD × 14 天。Class 1-2 可在一般診所完成全程治療。\n\n【Specialty Care】Melarsomine（Immiticide）三劑殺蟲法（AHS 2020 推薦）：第 60 天第 1 劑 2.5 mg/kg deep IM（腰部肌群 L3-L5）；第 90 天第 2 劑 2.5 mg/kg deep IM；第 91 天第 3 劑 2.5 mg/kg deep IM。注射後嚴格籠養 6-8 週。注射部位疼痛處理：冰敷 + Tramadol/NSAID。蟲體死亡高風險期（注射後 7-21 天）：監測肺栓塞徵象（發燒、呼吸急促、咳血）——出現時 Prednisolone + cage rest + 氧氣。Class 3：先穩定 CHF（Furosemide + Sildenafil 1-2 mg/kg PO BID-TID 控制肺高壓）→ 穩定 1-2 個月再殺蟲。Class 4 Caval syndrome：緊急經頸靜脈取蟲（alligator forceps via jugular venotomy 在透視或心超引導下）→ 穩定後再進行 Melarsomine 療程。殺蟲治療後 6-9 個月複檢抗原（應轉陰），1 個月後 Knott\'s test 確認 microfilaria 清除。',
    prognosis: 'Class 1-2：治療成功率 > 95%，嚴格限制運動下殺蟲期併發症低。Class 3：治療風險較高（肺栓塞），但多數可成功治療；預後取決於治療前的肺血管損傷程度。Class 4（Caval syndrome）：外科取蟲死亡率 ~15-40%，不治療幾乎 100% 致死。心絲蟲感染造成的肺血管損傷部分可逆，成功殺蟲後 X 光變化可持續 6-12 個月逐漸改善。預防永遠優於治療。',
    monitoring: '殺蟲期（Melarsomine 注射後 6-8 週）：密切觀察肺栓塞徵象（發燒、咳嗽加劇、呼吸急促、精神沉鬱）。每月回診評估臨床狀態。治療後 1 個月：Knott\'s test（確認 microfilaria 清除）。治療後 6 個月：抗原複檢（應轉陰）。治療後 9 個月：若抗原仍陽性，考慮再次治療。長期：終身每月心絲蟲預防（Ivermectin/Milbemycin/Moxidectin/Selamectin）+ 每年抗原篩檢。',
    owner_communication: '心絲蟲症是一種可預防的嚴重疾病。台灣為高盛行區，建議全年每月預防。治療過程中最關鍵的配合事項是嚴格限制運動——蟲體死亡後碎片會堵塞肺動脈，運動增加肺血流會大幅提高栓塞風險。治療期約需 6-9 個月才能完全清除感染。費用與風險隨嚴重度增加。成功治療後需終身預防。多犬家庭中其他犬隻也應檢測並開始預防。教導飼主辨識緊急徵兆（呼吸急促、咳血、急性虛弱）。',
  },
  diagnostic_data: null,
  procedure_data: null,
  visual_placeholders: [
    { position: '生活史段落', type: 'animated_diagram', description: 'D. immitis 完整生活史循環動態圖' },
    { position: '治療方案段落', type: 'timeline', description: 'AHS 三劑法治療時程表（Day 0 → Day 91 + 追蹤）' },
    { position: '疾病分級表格後', type: 'comparison_table', description: 'AHS Class 1-4 特徵與治療策略比較表' },
  ],
  interactive_placeholders: [
    { position: '疾病分級段落', type: 'interactive_staging', description: '輸入檢查結果自動判定 AHS 分級與建議治療方案' },
  ],
  drug_api_links: ['Melarsomine', 'Doxycycline', 'Ivermectin', 'Moxidectin', 'Milbemycin', 'Selamectin', 'Prednisolone', 'Furosemide', 'Sildenafil'],
  references: [
    { type: 'guideline', citation: 'American Heartworm Society. Current canine guidelines for the prevention, diagnosis, and management of heartworm (Dirofilaria immitis) infection in dogs (2020 revision).', relevance: '犬心絲蟲治療與預防最新指引' },
    { type: 'journal', citation: 'Nelson CT et al. Current canine guidelines for the prevention, diagnosis, and management of heartworm infection in dogs. Vet Parasitol. 2014;36(S1):S9-17.', relevance: 'AHS 治療指引文獻' },
    { type: 'textbook', citation: 'Ettinger SJ, Feldman EC, Côté E. Textbook of Veterinary Internal Medicine, 8th ed. Elsevier, 2017. Chapter: Heartworm Disease.', relevance: '心絲蟲病完整教材' },
    { type: 'journal', citation: 'Fan CK et al. Seroepidemiology of Dirofilaria immitis infection among pet dogs in Taiwan. Vet Parasitol. 2001;97(3):203-210.', relevance: '台灣犬心絲蟲血清流行病學調查' },
  ],
  is_current: true,
  created_at: now,
};

/** 心臟解剖學 — 概念型 */
const contentCardiacAnatomy: NodeContent = {
  id: 'CONTENT-L1-001',
  node_id: 'CARDIO-L1-001',
  version: 1,
  summary: '心臟解剖學是理解所有心血管疾病的基礎。犬貓心臟為四腔室結構，位於縱膈腔中。犬心臟約佔胸腔寬度的 2.5-3.5 個肋間，貓心臟相對較小。掌握心臟各腔室、瓣膜、冠狀動脈與傳導系統的解剖位置，對聽診定位、影像判讀與手術入路至關重要。',
  learning_objectives: [
    '描述犬貓心臟四腔室的解剖位置與相互關係',
    '辨識四組心臟瓣膜的位置、結構與功能',
    '說明冠狀動脈的走行與主要分支供血區域',
    '比較犬與貓心臟解剖的關鍵差異',
    '將解剖知識應用於聽診定位與影像判讀',
  ],
  key_points: [
    '心臟位於縱膈腔，約第 3-6 肋間，長軸從右背側向左腹側傾斜',
    '右心房接收前後腔靜脈與冠狀竇回流血液',
    '左心房接收 4-6 條肺靜脈的含氧血',
    '二尖瓣（左房室瓣）有兩片瓣葉，三尖瓣（右房室瓣）有三片瓣葉',
    '主動脈瓣與肺動脈瓣為半月瓣，各有三片袋狀瓣葉',
    '左冠狀動脈分為左前降支（LAD）與左迴旋支（LCx），供應左心室大部分心肌',
    '犬心臟心尖主要由左心室構成；貓心臟體積較小但相對壁厚較大',
    '心包膜分為纖維性心包膜與漿液性心包膜（壁層與臟層）',
  ],
  body: `# 心臟解剖學 (Cardiac Anatomy)

## 一、核心概念與機轉 (Core Concept & Mechanism)



### 心臟位置與外觀
犬貓心臟位於胸腔縱膈腔中，介於左右肺葉之間。心臟長軸從右背側（心底 base）向左腹側（心尖 apex）傾斜約 30 度。犬心臟約佔第 3-6 肋間，心尖通常在第 5-6 肋間近胸壁處。

### 四腔室結構
### 心房 (Atria)
- **右心房 (RA)**：接收前腔靜脈（cranial vena cava）、後腔靜脈（caudal vena cava）與冠狀竇（coronary sinus）回流。右心耳（right auricle）為最常見的血管肉瘤好發部位。
- **左心房 (LA)**：接收 4-6 條肺靜脈。LA 擴大是 MMVD 與 HCM 疾病進程的重要指標（LA/Ao ratio）。

### 心室 (Ventricles)
- **右心室 (RV)**：壁較薄（正常犬約 3-5 mm），呈新月形包繞左心室。負責將血液泵入肺循環。
- **左心室 (LV)**：壁較厚（正常犬約 8-12 mm），呈圓錐形。負責將血液泵入體循環，承受較高壓力負荷。

### 心臟瓣膜
| 瓣膜 | 位置 | 結構 | 臨床意義 |
|------|------|------|---------|
| 二尖瓣 (Mitral) | 左房室交界 | 2 瓣葉 + 腱索 + 乳頭肌 | MMVD 最常受累瓣膜 |
| 三尖瓣 (Tricuspid) | 右房室交界 | 3 瓣葉 + 腱索 + 乳頭肌 | TR 用於估計肺動脈壓 |
| 主動脈瓣 (Aortic) | 左心室流出道 | 3 半月瓣葉 | SAS 好發部位 |
| 肺動脈瓣 (Pulmonic) | 右心室流出道 | 3 半月瓣葉 | PS 好發部位 |

### 冠狀動脈
左冠狀動脈（LCA）自左主動脈竇發出，分為左前降支（LAD）與左迴旋支（LCx），供應左心室前壁、側壁與心室中隔前 2/3。右冠狀動脈（RCA）供應右心室與心室中隔後 1/3。犬貓冠狀動脈粥狀硬化極為罕見。

## 二、臨床意義 (Clinical Significance)

### 犬貓差異
貓心臟體積相對小於犬，但左心室壁相對厚度較大（正常 < 6mm），這使得 HCM 的診斷閾值設定在 ≥ 6mm。貓心臟長軸較垂直，胸腔 X 光上呈現較短的 valentine-shaped 外觀。

[圖片:犬心臟四腔室解剖圖——標示瓣膜與腔室]

## 三、人醫借鑒 (Translational Insights)

| 人醫工具/概念 | 獸醫應用潛力 | 現況 |
|-------------|-------------|------|
| 3D 列印心臟模型用於手術規劃 | 犬先天性心臟病（PDA、VSD）術前模擬 | 研究階段，少數機構已採用 |
| 經導管主動脈瓣置換術（TAVR） | 犬主動脈瓣狹窄（SAS/AS）的微創替代 | 人醫已成熟，獸醫因體型差異仍在早期研發 |
| 心臟 MRI 組織特徵化 | 心肌纖維化定量（late gadolinium enhancement） | 獸醫受限於成本與麻醉需求，研究有限 |
| 冠狀動脈 CT 血管攝影 | 犬貓冠狀動脈畸形評估 | 獸醫冠狀動脈病變罕見，臨床需求低 |

## 四、臨床爭議與知識空缺 (Controversies & Knowledge Gaps)

| 爭議議題 | 現況 | Evidence Level |
|---------|------|---------------|
| 犬心臟瓣膜「正常」厚度標準尚缺乏大規模品種特異性數據 | 多數標準來自有限品種研究 | Level III |
| 貓 HCM 壁厚 ≥ 6mm 門檻是否適用所有品種 | 大型品種貓可能需調整閾值 | Level IV |
| 犬心包膜脂肪沉積對心超影像的影響程度 | 肥胖犬日益增多，影像判讀標準化不足 | Level V |
| 右心室正常壁厚的品種差異 | 缺乏系統性 RV 壁厚資料庫 | Level V |`,
  clinical_pearl: '理解心臟瓣膜的體表投影位置是聽診定位的基礎：二尖瓣投影在左側第 5 肋間肘關節水平，主動脈瓣投影在左側第 4 肋間肩關節水平。但聽診最佳聽聞點（point of maximal intensity）與瓣膜實際解剖位置不同——它是血流方向決定的，而非瓣膜正上方。',
  common_mistakes: [
    '混淆聽診位置與瓣膜實際解剖位置——最佳聽聞點由血流方向決定',
    '忽略犬與貓心臟大小與壁厚的正常差異，導致影像學誤判',
    '忘記右心耳的臨床重要性——它是犬血管肉瘤最常見的心臟原發部位',
    '將心室中隔視為僅屬於左或右心室——它由左右冠狀動脈共同供血',
  ],
  disease_data: null,
  diagnostic_data: null,
  procedure_data: null,
  visual_placeholders: [
    { position: '四腔室結構段落', type: 'annotated_image', description: '犬心臟四腔室標註解剖圖（前面觀與切面觀）' },
    { position: '冠狀動脈段落', type: 'annotated_image', description: '冠狀動脈走行與供血區域示意圖' },
  ],
  interactive_placeholders: [
    { position: '全文', type: '3d_model', description: '犬心臟 3D 互動模型——可旋轉與切面' },
  ],
  drug_api_links: [],
  references: [
    { type: 'textbook', citation: 'Evans HE, de Lahunta A. Miller\'s Anatomy of the Dog, 4th ed. Elsevier, 2013. Chapter 11: The Heart and Arteries.', relevance: '犬心臟解剖標準教材' },
    { type: 'textbook', citation: 'Ware WA. Cardiovascular Disease in Small Animal Medicine. Manson Publishing, 2011. Chapter 1: Normal Cardiovascular Anatomy and Physiology.', relevance: '獸醫心臟科臨床解剖' },
    { type: 'journal', citation: 'Chetboul V et al. Echocardiographic reference values for domestic cats: a systematic review and meta-analysis. J Vet Intern Med. 2012;26(4):773-788.', relevance: '貓心臟正常超音波解剖參考值' },
    { type: 'guideline', citation: 'Keene BW, Atkins CE, Bonagura JD, et al. "ACVIM consensus guidelines for the diagnosis and treatment of myxomatous mitral valve disease in dogs." J Vet Intern Med. 2019;33(3):1127-1140.', relevance: 'MMVD 診斷與治療共識指引' },
  ],
  is_current: true,
  created_at: now,
};

/** 心臟電生理學 — 概念型 */
const contentCardiacElectrophysiology: NodeContent = {
  id: 'CONTENT-L1-002',
  node_id: 'CARDIO-L1-002',
  version: 1,
  summary: '心臟電生理學探討心肌細胞的電氣活動與傳導系統。竇房結（SA node）為正常心律的節律點，電氣訊號經由心房、房室結（AV node）、His 束、束支與 Purkinje 纖維傳導至心室。理解動作電位與傳導系統是 ECG 判讀與心律不整診斷治療的基石。',
  learning_objectives: [
    '描述心肌細胞動作電位五個階段（Phase 0-4）的離子機轉',
    '說明心臟傳導系統各組成的解剖位置與功能',
    '辨識不反應期（refractory period）的臨床意義',
    '解釋 ECG 各波形（P-QRS-T）與心臟電氣活動的對應關係',
    '應用電生理原理理解心律不整的發生機轉',
  ],
  key_points: [
    '竇房結（SA node）為正常心律的主節律點，固有頻率犬 70-160 bpm、貓 120-240 bpm',
    '房室結（AV node）生理性延遲（PR interval）確保心房收縮完成後心室才收縮',
    '心室肌動作電位 Phase 0：快速 Na⁺ 通道開啟（快速去極化）',
    'Phase 2 平台期：L-type Ca²⁺ 通道內流與 K⁺ 通道外流平衡，維持收縮',
    'Phase 3 再極化：K⁺ 通道外流為主，恢復靜止膜電位',
    'SA/AV node 為慢反應細胞（依賴 Ca²⁺ 通道），心室肌為快反應細胞（依賴 Na⁺ 通道）',
    '有效不反應期（ERP）保護心臟免於過度快速激動',
    '自律性（automaticity）、觸發活動（triggered activity）、折返（re-entry）為三大心律不整機轉',
  ],
  body: `# 心臟電生理學 (Cardiac Electrophysiology)

## 一、核心概念與機轉 (Core Concept & Mechanism)



### 心肌細胞動作電位
### 快反應細胞（心房肌、心室肌、Purkinje 纖維）

| 階段 | 離子機轉 | 說明 |
|------|---------|------|
| Phase 0 | 快速 Na⁺ 內流 | 快速去極化（depolarization），對應 QRS 波 |
| Phase 1 | 短暫 K⁺ 外流 (Ito) | 早期快速再極化 |
| Phase 2 | L-type Ca²⁺ 內流 = K⁺ 外流 | 平台期（plateau），維持心肌收縮 |
| Phase 3 | K⁺ 外流（IKr, IKs） | 再極化（repolarization），對應 T 波 |
| Phase 4 | Na⁺/K⁺-ATPase 維持 | 靜止膜電位（約 -90 mV） |

### 慢反應細胞（SA node、AV node）

SA node 與 AV node 的 Phase 0 依賴 L-type Ca²⁺ 通道（非 Na⁺），去極化速度較慢。Phase 4 具有自發性去極化（funny current, If），賦予其自律性。

### 傳導系統
傳導順序：**SA node → 心房肌 → AV node → His 束 → 左/右束支 → Purkinje 纖維 → 心室肌**

- **SA node**：位於右心房與前腔靜脈交界處，為最高節律點
- **AV node**：位於心房中隔下方近三尖瓣環處，唯一的心房-心室電氣連接
- **His 束**：穿過纖維骨架進入心室中隔
- **左束支**：分為左前分支（LAF）與左後分支（LPF）
- **右束支**：沿心室中隔右側下行

### ECG 波形與電氣活動對應
| ECG 波形 | 電氣事件 |
|----------|---------|
| P 波 | 心房去極化 |
| PR interval | 心房去極化 + AV node 傳導延遲 |
| QRS 複合波 | 心室去極化 |
| ST segment | 心室全部去極化（Phase 2 平台期） |
| T 波 | 心室再極化 |
| QT interval | 心室去極化 + 再極化全程 |

## 二、臨床意義 (Clinical Significance)

### 不反應期與臨床意義
有效不反應期（ERP）是指心肌細胞在去極化後無法再次被激動的時期。ERP 保護心臟避免過度快速的重複激動。Class III 抗心律不整藥物（如 Sotalol）延長 ERP，是其抗心律不整的主要機轉。

[圖片:心肌動作電位五個階段與對應離子通道示意圖]

## 三、人醫借鑒 (Translational Insights)

| 人醫工具/概念 | 獸醫應用潛力 | 現況 |
|-------------|-------------|------|
| 穿戴式 ECG（Apple Watch/Kardia） | 犬居家心律監測（特別是間歇性心律不整） | AliveCor Vet 已上市，臨床驗證中 |
| 電生理學檢查（EPS）+ 射頻消融術 | 犬旁路相關 SVT（AVRT）的根治性治療 | 少數獸醫轉介中心可執行 |
| AI-ECG 心房顫動預測 | 犬 MMVD/DCM 患者 AF 風險早期預警 | 人醫 Mayo Clinic AI 已上市，獸醫尚在研究 |
| His 束起搏（HBP）/左束支區域起搏（LBBAP） | 犬 AV block 生理性起搏替代傳統右心室起搏 | 人醫廣泛推展，獸醫偶有病例報告 |
| 基因檢測 SCN5A/KCNQ1 突變 | 杜賓犬/拳師犬心律不整遺傳篩檢 | 特定品種基因已鑑定，商業化篩檢部分可用 |

## 四、臨床爭議與知識空缺 (Controversies & Knowledge Gaps)

| 爭議議題 | 現況 | Evidence Level |
|---------|------|---------------|
| 犬竇性心律不整是否在所有品種都為正常 | 短頭犬種的迷走神經張力模式可能不同 | Level IV |
| 貓 QT interval 正常範圍與校正公式 | 缺乏大規模貓 QTc 標準化數據 | Level IV |
| 犬 Holter VPC 閾值何時啟動治療 | >300 VPC/24h 常被引用，但證據基礎薄弱 | Level III |
| AliveCor/穿戴式 ECG 在獸醫臨床的診斷準確度 | 部分研究顯示與標準 ECG 一致性良好，但假陽性率待評估 | Level III |`,
  clinical_pearl: '犬的竇性心律不整（sinus arrhythmia）是由呼吸引起的迷走神經張力變化所致——吸氣時迷走神經抑制減弱、心率加快；呼氣時迷走神經張力增強、心率減慢。這是犬的正常現象，但在貓身上幾乎不存在。如果貓出現明顯心律不整，應高度警覺為病理性。',
  common_mistakes: [
    '混淆 SA node 與 AV node 的細胞類型——兩者都是慢反應細胞（Ca²⁺ 依賴），而非快反應細胞',
    '忘記 AV node 延遲是生理性的——它確保心房收縮完成後心室才開始收縮，PR interval 過短反而可能提示旁路傳導',
    '將 T 波視為心房再極化——心房再極化（Ta 波）通常被 QRS 掩蓋，T 波代表心室再極化',
    '忽略 Phase 2 平台期的重要性——它是心肌收縮時間的主要決定因素，Ca²⁺ 通道阻滯劑即作用於此',
  ],
  disease_data: null,
  diagnostic_data: null,
  procedure_data: null,
  visual_placeholders: [
    { position: '動作電位表格後', type: 'waveform', description: '快反應與慢反應細胞動作電位對比波形圖' },
    { position: '傳導系統段落', type: 'animated_diagram', description: '心臟傳導系統電氣傳播動態示意圖' },
  ],
  interactive_placeholders: [
    { position: 'ECG 波形段落', type: 'interactive_overlay', description: '點擊 ECG 波形顯示對應的電氣事件說明' },
  ],
  drug_api_links: [],
  references: [
    { type: 'textbook', citation: 'Tilley LP, Smith FWK. Electrocardiography in Small Animal Practice, 5th ed. Elsevier, 2016.', relevance: '獸醫心電圖與電生理標準教材' },
    { type: 'textbook', citation: 'Ware WA. Cardiovascular Disease in Small Animal Medicine. Manson Publishing, 2011. Chapter 2: Cardiac Electrophysiology.', relevance: '心臟電生理基礎' },
    { type: 'journal', citation: 'Santilli RA et al. Electrocardiography of the Dog and Cat, 2nd ed. Edra, 2018.', relevance: '犬貓心電圖進階教材' },
    { type: 'guideline', citation: 'Keene BW, Atkins CE, Bonagura JD, et al. "ACVIM consensus guidelines for the diagnosis and treatment of myxomatous mitral valve disease in dogs." J Vet Intern Med. 2019;33(3):1127-1140.', relevance: 'MMVD 診斷與治療共識指引' },
  ],
  is_current: true,
  created_at: now,
};

/** 瓣膜退化機轉 — 機轉型 */
const contentValvularDegeneration: NodeContent = {
  id: 'CONTENT-L2-001',
  node_id: 'CARDIO-L2-001',
  version: 1,
  summary: '瓣膜退化是犬最常見的心臟病變基礎。二尖瓣黏液瘤性退化（myxomatous degeneration）涉及瓣膜基質中糖胺聚醣（GAGs）異常沉積、膠原纖維斷裂與瓣膜間質細胞表型轉變。此過程導致瓣膜增厚、脫垂與閉鎖不全，最終引發容量過載與充血性心衰竭。遺傳因素、機械應力與 serotonin 訊號通路均參與致病。',
  learning_objectives: [
    '描述瓣膜黏液瘤性退化的組織病理特徵（GAGs 沉積、膠原纖維破壞）',
    '說明瓣膜間質細胞（VIC）的表型轉變在退化過程中的角色',
    '解釋腱索退化與斷裂的機械生物學基礎',
    '辨識瓣膜退化從初期病變到閉鎖不全再到 CHF 的完整病理級聯',
    '列舉影響瓣膜退化速率的因素（品種遺傳、年齡、血流動力應力）',
  ],
  key_points: [
    '黏液瘤性退化的核心：瓣膜基質中 GAGs 與蛋白多醣異常堆積，取代正常膠原纖維',
    '瓣膜正常三層結構（atrialis-spongiosa-fibrosa）被破壞，spongiosa 層異常擴張',
    '瓣膜間質細胞（VIC）從靜止型轉變為活化型（myofibroblast-like），分泌過量基質金屬蛋白酶（MMPs）',
    'Serotonin (5-HT) 訊號通路活化促進瓣膜增生與纖維化——與類癌症候群瓣膜病相似',
    'TGF-β 與 Endothelin-1 在瓣膜退化的基質重塑中扮演重要調節角色',
    '腱索退化：黏液樣變性導致腱索延長、變細，最終可斷裂造成急性瓣膜脫垂',
    '小型犬品種的遺傳易感性強，CKCS 品種可早在 1-2 歲即出現瓣膜病變',
    '二尖瓣受累最多（~62%），二尖瓣+三尖瓣同時受累約 33%，僅三尖瓣約 1%',
  ],
  body: `# 瓣膜退化機轉 (Valvular Degeneration Pathogenesis)





## 一、核心概念與機轉 (Core Concept & Mechanism)

### 正常瓣膜結構

正常房室瓣（二尖瓣與三尖瓣）由三層組成：
1. **Atrialis**（心房面）：富含彈性纖維，承受血流衝擊
2. **Spongiosa**（中間層）：含 GAGs 與蛋白多醣，提供緩衝
3. **Fibrosa**（心室面）：密實膠原纖維，提供結構強度

## 黏液瘤性退化的病理變化

### 基質層級
- Spongiosa 層異常增生，GAGs（特別是 hyaluronic acid、dermatan sulfate）過度沉積
- Fibrosa 層的 type I/III 膠原纖維斷裂、排列紊亂
- 彈性纖維（elastin）碎片化
- 整體結構：瓣膜增厚、變形、失去正常透亮度

### 細胞層級
- 瓣膜間質細胞（VIC）從靜止表型（quiescent phenotype）活化為 myofibroblast-like 表型
- 活化的 VIC 分泌過量 MMP-1, MMP-9, MMP-13 → 膠原降解
- 同時分泌過量 GAGs 與蛋白多醣 → 基質異常堆積
- TIMP/MMP 失衡是基質重塑的關鍵

### 訊號通路
- **Serotonin (5-HT)**：5-HT2B 受體活化促進 VIC 增殖與基質分泌
- **TGF-β**：促進 VIC 活化與 epithelial-mesenchymal transition (EMT)
- **Endothelin-1**：血管收縮肽，促進瓣膜纖維化
- **BMP/Wnt 訊號**：發育相關通路在退化過程中異常再活化

## 二、臨床意義 (Clinical Significance)

### 從退化到心衰竭的病理級聯

瓣膜增厚與脫垂 → 瓣膜閉合不良 → 二尖瓣閉鎖不全（MR）→ 收縮期血液逆流至左心房 → LA 容量過載 → LA 擴大 → 左心室離心性肥大（Frank-Starling 代償）→ 神經荷爾蒙活化（RAAS↑, SNS↑）→ 鈉水滯留 + 血管收縮 → 肺靜脈壓升高 → 肺水腫 → CHF。

### 腱索退化

腱索（chordae tendineae）同樣受黏液瘤性退化影響：
- 腱索基質 GAGs 沉積 → 延長、變細
- 腱索斷裂（chordal rupture）→ 急性嚴重 MR → 急性肺水腫
- 第一級腱索（primary chordae，連接瓣尖與乳頭肌）斷裂後果最嚴重

## 三、人醫借鑑 (Translational Insights)

| 人醫工具/概念 | 獸醫應用潛力 | 現況 |
|-------------|-------------|------|
| 經導管二尖瓣修復（MitraClip） | 犬 MMVD 微創瓣膜修復替代開心手術 | 人醫已廣泛使用，犬體型與瓣膜型態差異大，研究中 |
| 瓣膜組織工程（tissue-engineered valves） | 犬先天性瓣膜畸形的生物人工瓣膜替代 | 動物模型研究階段 |
| Serotonin 受體拮抗劑減緩瓣膜退化 | 5-HT2B 拮抗劑作為 MMVD 疾病修飾療法 | 概念驗證中，尚無臨床試驗 |
| 循環生物標記（cfDNA、miRNA）監測瓣膜退化進程 | 非侵入性追蹤 MMVD 從 B1 到 B2 的轉變 | 犬 cardiac biomarker 研究活躍中 |

## 四、臨床爭議與知識空缺 (Controversies & Knowledge Gaps)

| 爭議議題 | 現況 | Evidence Level |
|---------|------|---------------|
| MMVD B1→B2 轉變速率的預測因子 | MR jet 面積、NT-proBNP 趨勢是候選指標，尚無驗證模型 | Level III |
| 瓣膜退化是否可藥物逆轉 | 目前無疾病修飾療法（disease-modifying therapy），僅對症治療 | Level V |
| CKCS 品種篩檢最佳年齡與頻率 | 各國繁殖指南不同（1 歲 vs 2.5 歲開始），缺乏成本效益分析 | Level IV |
| 三尖瓣同時退化的臨床權重 | TR 對 MMVD 預後的獨立影響尚待釐清 | Level III |

[圖片:二尖瓣黏液瘤性退化組織病理對比——正常 vs 輕度 vs 重度]`,
  clinical_pearl: 'CKCS 品種的瓣膜退化有獨特的遺傳基礎——多基因遺傳模式使得部分 CKCS 在 1-2 歲即可出現雜音。英國 CKCS 繁殖指南建議：5 歲前出現雜音的犬不應用於繁殖。台灣 CKCS 族群由於基因庫較小，瓣膜退化的盛行率可能更高，建議及早進行心臟篩檢。',
  common_mistakes: [
    '將瓣膜退化簡單視為「老化」而忽略其特定的病理機轉——並非所有老犬都會發展嚴重 MMVD',
    '忽略腱索退化的臨床重要性——腱索斷裂可導致穩定的慢性 MR 突然惡化為急性 CHF',
    '混淆瓣膜退化（degenerative）與瓣膜感染（endocarditis）——前者是慢性基質退化，後者是感染性破壞',
    '認為黏液瘤性退化僅影響二尖瓣——約 1/3 的病例同時累及三尖瓣',
    '未認識到 serotonin 訊號通路的角色——這也解釋了為何某些藥物（如 ergot 類）可能加重瓣膜病變',
  ],
  disease_data: null,
  diagnostic_data: null,
  procedure_data: null,
  visual_placeholders: [
    { position: '基質變化段落', type: 'annotated_image', description: '正常 vs 退化瓣膜的組織學對比（H&E + Alcian Blue 染色）' },
    { position: '病理級聯段落', type: 'flowchart', description: '瓣膜退化 → MR → CHF 病理級聯流程圖' },
  ],
  interactive_placeholders: [
    { position: '訊號通路段落', type: 'mind_map', description: '瓣膜退化相關訊號通路互動心智圖' },
  ],
  drug_api_links: [],
  references: [
    { type: 'journal', citation: 'Oyama MA, Bhatt K. Molecular mechanisms of myxomatous mitral valve disease. Vet Clin North Am Small Anim Pract. 2022;52(3):571-583.', relevance: 'MMVD 分子機轉最新綜述' },
    { type: 'textbook', citation: 'Ware WA. Cardiovascular Disease in Small Animal Medicine. Manson Publishing, 2011. Chapter 7: Acquired Valvular Disease.', relevance: '瓣膜退化病理學教材' },
    { type: 'journal', citation: 'Connell PS et al. Serotonin 5-HT2B receptor signaling and valve disease. J Vet Cardiol. 2012;14(1):277-287.', relevance: 'Serotonin 在瓣膜退化中的角色' },
    { type: 'guideline', citation: 'Keene BW, Atkins CE, Bonagura JD, et al. "ACVIM consensus guidelines for the diagnosis and treatment of myxomatous mitral valve disease in dogs." J Vet Intern Med. 2019;33(3):1127-1140.', relevance: 'MMVD 診斷與治療共識指引' },
  ],
  is_current: true,
  created_at: now,
};

/** 心肌重塑機轉 — 機轉型 */
const contentMyocardialRemodeling: NodeContent = {
  id: 'CONTENT-L2-002',
  node_id: 'CARDIO-L2-002',
  version: 1,
  summary: '心肌重塑（myocardial remodeling）是心臟對血流動力學負荷改變的結構性適應反應，包含心肌細胞肥大、間質纖維化與腔室幾何形態變化。容量過載導致離心性肥大，壓力過載導致同心性肥大。神經荷爾蒙活化（RAAS、SNS、Endothelin）驅動不良重塑，最終從代償轉為失代償。理解重塑機轉是心臟衰竭藥物治療的理論基礎。',
  learning_objectives: [
    '區分離心性肥大與同心性肥大的觸發條件、型態與臨床意義',
    '描述心肌細胞肥大的分子訊號通路（calcineurin-NFAT、MAPK）',
    '說明間質纖維化（反應性與替代性）對心臟功能的影響',
    '解釋神經荷爾蒙活化如何驅動不良重塑',
    '應用重塑機轉原理理解 ACEi、β-blocker、MRA 的抗重塑作用',
  ],
  key_points: [
    '離心性肥大（eccentric hypertrophy）：肌小節串聯增加 → 心肌細胞延長 → 心室擴大——見於 MR、DCM',
    '同心性肥大（concentric hypertrophy）：肌小節並聯增加 → 心肌細胞增厚 → 壁增厚——見於 AS、HCM、高血壓',
    '心肌纖維化分兩型：反應性纖維化（reactive, 間質膠原增生）與替代性纖維化（replacement, 壞死後疤痕）',
    'Angiotensin II 直接促進心肌細胞肥大與成纖維細胞膠原合成',
    'Aldosterone 促進心肌纖維化、電解質失衡與血管損傷',
    'Norepinephrine（SNS）經 β1 受體持續刺激導致心肌細胞凋亡與鈣離子處理異常',
    '從代償到失代償的轉折：能量代謝惡化（粒線體功能障礙）+ 鈣離子處理異常 + 細胞凋亡',
    '抗重塑治療目標：ACEi/ARB 阻斷 RAAS、Spironolactone 拮抗 Aldosterone、Pimobendan 改善鈣離子敏感度',
  ],
  body: `# 心肌重塑機轉 (Myocardial Remodeling)





## 一、核心概念與機轉 (Core Concept & Mechanism)

### 重塑的分類

### 離心性肥大 (Eccentric Hypertrophy)
觸發條件：**容量過載**（volume overload）
- 舒張期壁應力增加 → 肌小節串聯複製（in-series addition）
- 心肌細胞延長 → 心室腔室擴大
- 壁厚/腔徑比下降
- 臨床範例：MMVD（MR）、DCM、VSD、PDA

### 同心性肥大 (Concentric Hypertrophy)
觸發條件：**壓力過載**（pressure overload）
- 收縮期壁應力增加 → 肌小節並聯複製（in-parallel addition）
- 心肌細胞增粗 → 心室壁增厚
- 壁厚/腔徑比增加
- 臨床範例：HCM、SAS、PS、全身性高血壓

## 分子機轉

### 機械力感應 (Mechanotransduction)
心肌細胞感受到的機械應力經由 integrins 與 Z-disc 蛋白（如 titin、melusin）轉化為細胞內訊號。

### 肥大訊號通路
- **Calcineurin-NFAT 通路**：Ca²⁺ 升高 → Calcineurin 活化 → NFAT 去磷酸化入核 → 肥大基因轉錄
- **MAPK 通路**（ERK1/2, p38, JNK）：生長因子與機械應力驅動
- **PI3K-Akt-mTOR 通路**：生理性肥大（如運動）的主要通路
- **Gαq 訊號**：Angiotensin II 與 Endothelin-1 經 Gαq 偶聯受體活化肥大反應

### 間質纖維化
- **反應性纖維化**：心肌成纖維細胞活化 → 膠原 I/III 過度合成 → 間質膠原密度增加 → 心室順應性↓
- **替代性纖維化**：心肌細胞壞死/凋亡 → 疤痕組織替代 → 不可逆，為心律不整基質
- 主要驅動因子：Aldosterone、TGF-β、Endothelin-1、CTGF

## 神經荷爾蒙驅動的不良重塑

| 系統 | 效應子 | 重塑效應 | 治療靶點 |
|------|--------|---------|---------|
| RAAS | Angiotensin II | 心肌肥大、纖維化、血管收縮 | ACEi / ARB |
| RAAS | Aldosterone | 纖維化、電解質失衡 | Spironolactone |
| SNS | Norepinephrine | 心肌凋亡、Ca²⁺ 異常、心律不整 | β-blockers |
| 內皮素 | Endothelin-1 | 血管收縮、肥大、纖維化 | （Bosentan，獸醫少用）|

## 二、臨床意義 (Clinical Significance)

### 代償到失代償

代償期 → 能量需求持續增加 → 粒線體功能障礙 → ATP 生成不足 → 鈣離子處理蛋白（SERCA2a）功能下降 → 收縮-舒張偶聯異常 → 心肌細胞凋亡增加 → 收縮力衰退 → 心輸出量下降 → 進一步神經荷爾蒙活化 → 惡性循環。

## 三、人醫借鑑 (Translational Insights)

| 人醫工具/概念 | 獸醫應用潛力 | 現況 |
|-------------|-------------|------|
| Sacubitril/Valsartan (Entresto) | ARNI 類抗重塑藥物用於犬 CHF | 犬 MMVD 研究中，初步數據正面 |
| SGLT2 抑制劑（Empagliflozin）心腎保護 | 犬心衰竭伴腎功能下降的雙重保護 | 人醫 EMPEROR/DAPA-HF 改變治療指引，獸醫尚無數據 |
| 心肌纖維化 MRI 定量（T1 mapping） | 犬 DCM/HCM 纖維化程度評估 | 技術可行但獸醫麻醉成本高，研究有限 |
| SERCA2a 基因治療 | 犬 DCM 收縮功能恢復 | 人醫 CUPID 試驗失敗，但犬模型研究持續 |
| 可穿戴式血流動力學監測 | 犬 CHF 居家前負荷即時追蹤 | CardioMEMS 在人醫已上市，獸醫尚無 |

## 四、臨床爭議與知識空缺 (Controversies & Knowledge Gaps)

| 爭議議題 | 現況 | Evidence Level |
|---------|------|---------------|
| β-blocker 在犬 CHF 的角色 | 人醫為 cornerstone，犬因 Pimobendan 地位爭議大；MMVD 犬無明確獲益證據 | Level II |
| 心肌纖維化是否可逆 | 反應性纖維化可能部分可逆（MRA 治療），替代性纖維化被認為不可逆 | Level III |
| 重塑的「不歸點」（point of no return）定義 | 缺乏犬心肌重塑各階段的定量生物標記 | Level V |
| Pimobendan 的抗重塑機轉是否獨立於血流動力學效應 | 體外實驗支持直接抗纖維化作用，臨床證據有限 | Level III |

[圖片:離心性 vs 同心性肥大的肌小節排列差異示意圖]`,
  clinical_pearl: 'Pimobendan 的獨特作用機轉使其在犬心臟衰竭治療中扮演核心角色：它是 PDE3 抑制劑（增加 cAMP → 正性肌力 + 血管舒張）兼鈣離子增敏劑（sensitizer，增加 troponin C 對 Ca²⁺ 的親和力，不增加細胞內 Ca²⁺ 濃度）。後者的意義在於，它增強收縮力但不增加心肌氧耗與心律不整風險——這是與傳統正性肌力藥（如 Digoxin）的關鍵差異。',
  common_mistakes: [
    '將所有心肌肥大等同為「病理性」——生理性肥大（如運動訓練）由 PI3K-Akt 通路驅動，伴隨血管新生，通常可逆且無害',
    '忽略纖維化在心律不整發生中的角色——纖維化區域造成傳導異質性（heterogeneity），形成 re-entry 基質',
    '認為 ACEi 僅是「降血壓藥」——在心臟衰竭中，ACEi 的主要價值是抗重塑（阻斷 Ang II 對心肌的直接效應），而非單純降壓',
    '混淆「肥大」與「增生」——成年心肌細胞幾乎不增生（hyperplasia），心臟增大主要來自現有細胞的肥大（hypertrophy）',
  ],
  disease_data: null,
  diagnostic_data: null,
  procedure_data: null,
  visual_placeholders: [
    { position: '重塑分類段落', type: 'comparison_table', description: '離心性 vs 同心性肥大特徵比較表' },
    { position: '分子機轉段落', type: 'flowchart', description: '肥大訊號通路級聯反應圖' },
  ],
  interactive_placeholders: [
    { position: '全文', type: 'mind_map', description: '心肌重塑機轉與治療靶點互動心智圖' },
  ],
  drug_api_links: ['Enalapril', 'Benazepril', 'Spironolactone', 'Pimobendan', 'Atenolol'],
  references: [
    { type: 'journal', citation: 'Keene BW et al. ACVIM consensus guidelines for the diagnosis and treatment of myxomatous mitral valve disease in dogs. J Vet Intern Med. 2019;33(3):1127-1140.', relevance: 'MMVD 相關心肌重塑與治療共識' },
    { type: 'textbook', citation: 'Ware WA. Cardiovascular Disease in Small Animal Medicine. Manson Publishing, 2011. Chapter 3: Pathophysiology of Heart Failure.', relevance: '心肌重塑與心衰竭病理機轉教材' },
    { type: 'journal', citation: 'Oyama MA, Levy RJ. Insights into serotonin signaling mechanisms associated with canine degenerative mitral valve disease. J Vet Intern Med. 2010;24(1):27-36.', relevance: '犬瓣膜退化與重塑的分子機轉' },
    { type: 'guideline', citation: 'Côté E, MacDonald KA, Meurs KM, et al. "Feline Cardiology." Wiley-Blackwell, 2011.', relevance: '貓心臟病病理機轉參考' },
  ],
  is_current: true,
  created_at: now,
};

/** 心律不整機轉 — 機轉型 */
const contentArrhythmiaMechanism: NodeContent = {
  id: 'CONTENT-L2-003',
  node_id: 'CARDIO-L2-003',
  version: 1,
  summary: '心律不整的發生機轉分為三大類：自律性異常（enhanced/abnormal automaticity）、觸發活動（triggered activity）與折返（re-entry）。自律性異常來自節律細胞的固有放電頻率改變；觸發活動由後去極化（EAD/DAD）引發；折返則需要單向傳導阻滯、傳導延遲與可激動間隙。理解這三大機轉是選擇抗心律不整藥物的關鍵。',
  learning_objectives: [
    '區分三大心律不整機轉：自律性異常、觸發活動與折返',
    '說明早期後去極化（EAD）與延遲後去極化（DAD）的離子基礎與臨床關聯',
    '描述折返迴路形成的三個必要條件',
    '將心律不整機轉與臨床常見心律不整類型（VPC、VT、AF、SVT）連結',
    '應用機轉知識解釋各類抗心律不整藥物的作用原理',
  ],
  key_points: [
    '自律性異常（abnormal automaticity）：非節律細胞（心室肌）在病理狀態下獲得自發去極化能力',
    '增強自律性（enhanced automaticity）：SA/AV node 固有放電加速（如交感神經過度活化）',
    'EAD（Early Afterdepolarization）：Phase 2-3 期間的異常去極化，與 QT 延長、低鉀血症相關',
    'DAD（Delayed Afterdepolarization）：Phase 4 的異常去極化，與細胞內 Ca²⁺ 過載相關（Digoxin 中毒）',
    '折返（Re-entry）三條件：(1) 解剖或功能性雙通路 (2) 單向傳導阻滯 (3) 傳導延遲使組織恢復可激動性',
    '心房顫動（AF）的機轉：心房肌的多重小波折返（multiple wavelet re-entry）+ 自律性灶（肺靜脈口）',
    'Vaughan-Williams 分類對應機轉：Class I（Na⁺ 阻滯，降低傳導速度）、Class III（K⁺ 阻滯，延長 ERP）主要作用於折返迴路',
    '犬 VPC/VT 最常見於 DCM（杜賓犬），主要機轉為疤痕周圍的折返 + 異常自律性',
  ],
  body: `# 心律不整機轉 (Arrhythmia Pathogenesis)





## 一、核心概念與機轉 (Core Concept & Mechanism)

### 機轉一：自律性異常 (Abnormal Automaticity)

### 增強自律性 (Enhanced Automaticity)
- 正常節律細胞（SA/AV node）的 Phase 4 自發去極化速率增加
- 原因：交感神經活化、發燒、甲亢、低氧
- 結果：竇性心搏過速、加速性結性心律

### 異常自律性 (Abnormal Automaticity)
- 原本不具自律性的細胞（心室肌、Purkinje 纖維）在病理狀態下獲得自發去極化能力
- 原因：缺血、電解質異常、心肌纖維化改變靜止膜電位
- 結果：異位心律（ectopic rhythm），如加速性心室心律（AIVR）

## 機轉二：觸發活動 (Triggered Activity)

### 早期後去極化 (EAD - Early Afterdepolarization)
- 發生於 Phase 2 或 Phase 3 期間
- 離子基礎：再極化 K⁺ 電流減少 或 L-type Ca²⁺ window current 持續 → APD 延長 → EAD
- 臨床關聯：QT 延長症候群、低鉀血症、低鎂血症、藥物誘發（Class IA 抗心律不整藥）
- 可引發 Torsades de Pointes（多形性心室頻脈）

### 延遲後去極化 (DAD - Delayed Afterdepolarization)
- 發生於 Phase 4（完全再極化後）
- 離子基礎：細胞內 Ca²⁺ 過載 → SR 異常 Ca²⁺ 釋放 → NCX（Na⁺/Ca²⁺ exchanger）產生內向電流 → DAD
- 臨床關聯：Digoxin 中毒、兒茶酚胺過量、心肌缺血/再灌流
- 若 DAD 達到閾值 → 觸發性心搏

## 機轉三：折返 (Re-entry)

### 折返三條件
1. **雙通路**：解剖性（如旁路 accessory pathway）或功能性（如纖維化造成的傳導異質性）
2. **單向傳導阻滯**：一條路徑暫時無法傳導（不反應期中）
3. **傳導延遲**：另一條路徑傳導足夠慢，使阻滯側恢復可激動性

### 折返的臨床類型

| 類型 | 迴路 | 臨床範例 |
|------|------|---------|
| 解剖性大迴路 | AV node + 旁路 | 房室折返性心搏過速（AVRT） |
| 解剖性小迴路 | AV node 雙通路 | 房室結折返性心搏過速（AVNRT） |
| 功能性微迴路 | 心房肌多重小波 | 心房顫動（AF） |
| 疤痕周圍折返 | 心室纖維化區域 | 心室頻脈（VT, 如 DCM） |

## 二、臨床意義 (Clinical Significance)

### 心律不整與抗心律不整藥物的機轉對應

- **自律性異常**：β-blockers（降低 Phase 4 去極化速率）
- **EAD 相關**：Mg²⁺ 補充、避免 QT 延長藥物、維持 K⁺ 正常
- **DAD 相關**：Ca²⁺ 通道阻滯劑、停用 Digoxin
- **折返**：Class I（降低傳導速度打斷迴路）、Class III（延長 ERP 消除可激動間隙）

## 三、人醫借鑑 (Translational Insights)

| 人醫工具/概念 | 獸醫應用潛力 | 現況 |
|-------------|-------------|------|
| 3D 電生理學定位（CARTO/EnSite）| 犬複雜心律不整的精確定位與消融 | 極少數獸醫中心具備設備 |
| 射頻消融術（RF ablation）| 犬旁路相關 SVT 的根治性治療 | 已有成功案例報告，未普及 |
| 脈衝場消融術（PFA） | 心房顫動消融的新一代技術 | 人醫快速發展，獸醫尚未引入 |
| 皮下植入式心臟去顫器（S-ICD）| 杜賓犬 DCM 高 SCD 風險族群保護 | 人醫成熟技術，獸醫因成本與體型限制極少使用 |
| AI 驅動心律不整預測 | Holter 數據 AI 分析預測 SCD 風險 | 人醫 FDA 已核准多款，獸醫研究中 |

## 四、臨床爭議與知識空缺 (Controversies & Knowledge Gaps)

| 爭議議題 | 現況 | Evidence Level |
|---------|------|---------------|
| 犬「良性」VPC 與「惡性」VPC 的分界標準 | Holter VPC 數量、型態、複雜度均為考量，缺乏統一標準 | Level III |
| 犬 AF 的藥物轉復是否值得嘗試 | 大型犬 AF 藥物/電復律復發率極高，目前共識為心率控制 | Level II |
| 抗心律不整藥物的促心律不整風險量化 | 缺乏犬特異性的 proarrhythmia 風險評分工具 | Level IV |
| 拳師犬 ARVC 的最佳長期藥物方案 | Sotalol vs Mexiletine+Sotalol 合併療法的比較數據有限 | Level III |

[圖片:三大心律不整機轉示意圖——自律性、觸發活動、折返]`,
  clinical_pearl: '臨床上最重要的判斷：心室早期收縮（VPC）何時需要治療？杜賓犬 DCM 相關的 VPC 若 Holter 顯示 > 300 VPC/24h、出現連續 VPC（couplets/triplets）、R-on-T 現象或心室頻脈，則需抗心律不整治療。Sotalol（Class III，延長 ERP）是杜賓犬 VPC 的首選，因為其疤痕周圍折返機轉對延長不反應期反應良好。',
  common_mistakes: [
    '將所有心室早期收縮（VPC）都視為需要立即治療——孤立的 VPC 若無臨床症狀且頻率低，可能僅需追蹤',
    '混淆 EAD 與 DAD——EAD 發生於 Phase 2-3（再極化過程中），DAD 發生於 Phase 4（再極化完成後）',
    '忽略電解質異常在心律不整中的角色——低鉀、低鎂是許多心律不整的可糾正原因',
    '對犬心房顫動使用抗心律不整藥物嘗試轉復——犬 AF（尤其大型犬）通常為永久性，治療目標是心率控制而非節律控制',
    '未區分窄 QRS 與寬 QRS 心搏過速的機轉差異——影響藥物選擇安全性',
  ],
  disease_data: null,
  diagnostic_data: null,
  procedure_data: null,
  visual_placeholders: [
    { position: 'EAD/DAD 段落', type: 'waveform', description: 'EAD 與 DAD 的動作電位波形對比圖' },
    { position: '折返段落', type: 'animated_diagram', description: '折返迴路形成與傳導動態示意圖' },
  ],
  interactive_placeholders: [
    { position: '藥物對應段落', type: 'interactive_overlay', description: '選擇心律不整類型顯示對應機轉與建議藥物' },
  ],
  drug_api_links: ['Sotalol', 'Mexiletine', 'Lidocaine', 'Diltiazem', 'Atenolol', 'Digoxin'],
  references: [
    { type: 'textbook', citation: 'Tilley LP, Smith FWK. Electrocardiography in Small Animal Practice, 5th ed. Elsevier, 2016. Chapter 2: Mechanisms of Arrhythmias.', relevance: '心律不整機轉標準教材' },
    { type: 'journal', citation: 'Wess G et al. Prevalence of dilated cardiomyopathy and ventricular arrhythmias in Doberman Pinschers. J Vet Intern Med. 2010;24(6):1358-1364.', relevance: '杜賓犬 DCM 相關心律不整流行病學' },
    { type: 'textbook', citation: 'Santilli RA et al. Electrocardiography of the Dog and Cat, 2nd ed. Edra, 2018. Chapter 3: Arrhythmia Mechanisms.', relevance: '獸醫心律不整機轉進階教材' },
    { type: 'guideline', citation: 'Côté E, MacDonald KA, Meurs KM, et al. "Feline Cardiology." Wiley-Blackwell, 2011.', relevance: '貓心臟病病理機轉參考' },
  ],
  is_current: true,
  created_at: now,
};

/** 心臟血流動力學 — 機轉型 */
const contentCardiacHemodynamics: NodeContent = {
  id: 'CONTENT-L1-003',
  node_id: 'CARDIO-L1-003',
  version: 1,
  summary: '心臟血流動力學探討心臟作為幫浦的功能，包含前負荷（preload）、後負荷（afterload）、收縮力（contractility）與心率（heart rate）四大決定因素。Frank-Starling 機制與神經荷爾蒙調節（RAAS、SNS）是維持心輸出量的關鍵。理解這些原理是掌握心臟衰竭病理與藥物治療機轉的前提。',
  learning_objectives: [
    '定義心輸出量（CO）及其四大決定因素',
    '說明 Frank-Starling 定律在正常與衰竭心臟中的表現',
    '描述 RAAS 與交感神經系統對血流動力學的調節作用',
    '辨識前負荷過載與後負荷過載對心臟重塑的不同影響',
    '應用血流動力學原理解釋常用心臟藥物的作用機轉',
  ],
  key_points: [
    '心輸出量（CO）= 心搏量（SV）× 心率（HR）',
    '心搏量由三因素決定：前負荷（preload）、後負荷（afterload）、收縮力（contractility）',
    'Frank-Starling 定律：心肌纖維伸展越大（前負荷越高），收縮力越強——直到超過最適長度',
    '前負荷過載（容量過載）→ 離心性肥大（eccentric hypertrophy）：如 MR、VSD',
    '後負荷過載（壓力過載）→ 同心性肥大（concentric hypertrophy）：如 AS、SAS、高血壓',
    'RAAS 活化：Angiotensin II 引起血管收縮（↑後負荷）+ Aldosterone 引起鈉水滯留（↑前負荷）',
    'SNS 活化：↑心率 + ↑收縮力 + 周邊血管收縮——短期代償但長期有害',
    'ACE inhibitors 降低後負荷、利尿劑降低前負荷、Pimobendan 增強收縮力——對應不同血流動力學靶點',
  ],
  body: `# 心臟血流動力學 (Cardiac Hemodynamics)





## 一、核心概念與機轉 (Core Concept & Mechanism)

### 心輸出量與決定因素

心輸出量（Cardiac Output, CO）= 心搏量（Stroke Volume, SV）× 心率（Heart Rate, HR）

### 前負荷 (Preload)
心室舒張末期容量（EDV）所代表的心肌纖維伸展程度。臨床上由靜脈回流量決定。

- 增加前負荷的因素：靜脈輸液、鈉水滯留、瓣膜閉鎖不全
- 減少前負荷的因素：利尿劑、脫水、出血、正壓通氣

### 後負荷 (Afterload)
心室射血時必須克服的阻力，主要由全身血管阻力（SVR）決定。

- 增加後負荷的因素：血管收縮（Angiotensin II、SNS 活化）、主動脈瓣狹窄
- 減少後負荷的因素：血管擴張劑（ACEi、Amlodipine）

### 收縮力 (Contractility)
心肌固有的收縮能力，與前負荷和後負荷無關。

- 增加收縮力的因素：Pimobendan（正性肌力藥 inodilator）、Dobutamine、交感神經活化
- 減少收縮力的因素：DCM（心肌病變）、β-blockers、麻醉藥

## Frank-Starling 機制

Frank-Starling 定律描述心搏量與前負荷的關係：在生理範圍內，心肌纖維的初始長度越大（EDV 越高），產生的收縮力越強，心搏量越大。

正常心臟在 Starling 曲線的上升段運作，具有充分的前負荷儲備（preload reserve）。衰竭心臟的 Starling 曲線下移且平坦化——增加前負荷不再增加心搏量，反而導致肺鬱血。

## 心臟重塑 (Cardiac Remodeling)

| 類型 | 原因 | 型態 | 範例 |
|------|------|------|------|
| 離心性肥大 | 容量過載 | 心室擴大，壁厚/腔徑比↓ | MMVD (MR)、DCM |
| 同心性肥大 | 壓力過載 | 壁增厚，腔徑不變或↓ | SAS、HCM、高血壓 |

## 二、臨床意義 (Clinical Significance)

### 神經荷爾蒙調節

#### RAAS (Renin-Angiotensin-Aldosterone System)
腎灌流↓ → 腎素釋放 → Angiotensin I → ACE → Angiotensin II（強力血管收縮 + 促 Aldosterone 分泌）→ Aldosterone（鈉水滯留 + 心肌纖維化）。

#### 交感神經系統 (SNS)
心輸出量↓ → 壓力感受器反射 → NE/Epi 釋放 → β1（↑HR + ↑收縮力）+ α1（血管收縮）。短期維持灌流，長期導致心肌氧耗↑、心律不整、進一步重塑。

## 三、人醫借鑑 (Translational Insights)

| 人醫工具/概念 | 獸醫應用潛力 | 現況 |
|-------------|-------------|------|
| 侵入性血流動力學監測（Swan-Ganz）| 犬嚴重 CHF 的肺動脈楔壓即時監測 | 技術上可行，但獸醫 ICU 極少使用 |
| CardioMEMS 植入式肺動脈壓監測 | 犬 CHF 居家遠距前負荷監測 | 人醫 CHAMPION 試驗減少 37% 再住院，獸醫尚無 |
| 壓力-容積環（PV loop）分析 | 犬心功能精確評估（收縮末期彈性 Ees） | 研究工具，臨床應用受限於導管成本 |
| 床邊超音波 IVC 擴張指數 | 犬前負荷評估的非侵入性替代指標 | 獸醫 POCUS 教育漸增，caudal vena cava 評估可行 |

## 四、臨床爭議與知識空缺 (Controversies & Knowledge Gaps)

| 爭議議題 | 現況 | Evidence Level |
|---------|------|---------------|
| 犬 CHF 最佳前負荷目標範圍 | 缺乏犬特異性的「最適前負荷」定量指標 | Level IV |
| Pimobendan 的正性變時作用（lusitropic effect）臨床重要性 | 體外數據支持舒張功能改善，臨床研究設計困難 | Level III |
| 犬 Starling 曲線平台段的個體化判定 | 目前以 sleeping RR 間接推估，缺乏直接測量方法 | Level V |

[圖片:心輸出量決定因素與 Frank-Starling 曲線示意圖]`,
  clinical_pearl: '理解「前負荷—後負荷—收縮力」三角關係有助於快速判斷藥物作用：Furosemide 降低前負荷（減少肺鬱血）、Enalapril 降低後負荷（減輕心臟射血阻力）、Pimobendan 同時增強收縮力與降低後負荷（inodilator）。CHF 三合一療法正是針對這三個靶點的綜合介入。',
  common_mistakes: [
    '認為增加前負荷永遠可以增加心輸出量——衰竭心臟已在 Starling 曲線平台段，增加前負荷只會加重鬱血',
    '混淆收縮力與心搏量——心搏量受前後負荷影響，收縮力是獨立於負荷的心肌固有能力',
    '忽略長期 RAAS/SNS 活化的有害效應——短期代償但長期加速心肌重塑與纖維化',
    '將同心性肥大與離心性肥大的成因搞反——壓力過載導致壁增厚，容量過載導致腔室擴大',
  ],
  disease_data: null,
  diagnostic_data: null,
  procedure_data: null,
  visual_placeholders: [
    { position: 'Frank-Starling 段落', type: 'animated_diagram', description: '正常與衰竭心臟的 Starling 曲線比較動態圖' },
    { position: '神經荷爾蒙段落', type: 'flowchart', description: 'RAAS 與 SNS 活化級聯反應流程圖' },
  ],
  interactive_placeholders: [
    { position: '決定因素段落', type: 'interactive_overlay', description: '拖動前負荷/後負荷/收縮力滑桿觀察 CO 變化' },
  ],
  drug_api_links: ['Furosemide', 'Enalapril', 'Pimobendan', 'Dobutamine', 'Amlodipine'],
  references: [
    { type: 'textbook', citation: 'Ware WA. Cardiovascular Disease in Small Animal Medicine. Manson Publishing, 2011. Chapter 1: Cardiovascular Physiology.', relevance: '獸醫心血管生理學完整教材' },
    { type: 'textbook', citation: 'Cunningham JG, Klein BG. Textbook of Veterinary Physiology, 6th ed. Elsevier, 2020. Chapter 19-21.', relevance: '獸醫生理學教材心血管章節' },
    { type: 'journal', citation: 'Boswood A. Current use of pimobendan in canine patients with heart disease. Vet Clin North Am Small Anim Pract. 2010;40(4):571-580.', relevance: 'Pimobendan 血流動力學作用機轉文獻' },
    { type: 'guideline', citation: 'Keene BW, Atkins CE, Bonagura JD, et al. "ACVIM consensus guidelines for the diagnosis and treatment of myxomatous mitral valve disease in dogs." J Vet Intern Med. 2019;33(3):1127-1140.', relevance: 'MMVD 診斷與治療共識指引' },
  ],
  is_current: true,
  created_at: now,
};

/** 心臟超音波基礎 — 診斷型 */
const contentEchocardiography: NodeContent = {
  id: 'CONTENT-L4-002',
  node_id: 'CARDIO-L4-002',
  version: 1,
  summary: '心臟超音波（echocardiography）是獸醫心臟科的確診金標準工具。透過 2D、M-mode 與 Doppler 三種模式，可評估心臟結構、腔室大小、心肌收縮功能、瓣膜功能與血流動力學。標準化切面包含右側胸骨旁長軸/短軸與左側心尖四腔室切面。正確的測量與判讀是 MMVD 分期、DCM 診斷與 HCM 確認的基礎。',
  learning_objectives: [
    '執行犬貓心臟超音波標準切面的獲取（右胸骨旁長軸/短軸、左心尖四腔室）',
    '運用 M-mode 測量左心室內徑（LVIDd/s）、FS、EPSS',
    '運用 2D 測量 LA/Ao ratio 並理解其臨床意義',
    '執行 Doppler（PW/CW/Color）評估瓣膜逆流與狹窄性病變',
    '整合超音波數據進行 MMVD ACVIM 分期與 DCM/HCM 診斷',
  ],
  key_points: [
    '犬心超標準體位：右側臥位為主，左側臥位為輔（左心尖切面）',
    '右胸骨旁長軸四腔室切面：評估各腔室相對大小、瓣膜運動、心包膜',
    '右胸骨旁短軸切面（乳頭肌水平）：M-mode 測量 LVIDd、LVIDs、FS',
    '右胸骨旁短軸切面（心底水平）：2D 測量 LA/Ao ratio（正常犬 < 1.6，正常貓 < 1.5）',
    'M-mode FS（Fractional Shortening）= (LVIDd-LVIDs)/LVIDd × 100%；正常犬 25-45%，貓 35-65%',
    'LVIDDN（體重標準化左心室內徑）> 1.73 提示左心室擴大（DCM 診斷參考）',
    'Color Doppler 可快速偵測瓣膜逆流方向與範圍',
    'CW Doppler 測量 TR 最大速度可估算肺動脈收縮壓（mPAG = 4V²）',
  ],
  body: `# 心臟超音波基礎 (Basic Echocardiography)





## 一、檢查原理與適應症 (Principles & Indications)

### 設備與準備

- **探頭**：犬用 5-7.5 MHz 相位陣列（phased array），貓用 7.5-12 MHz
- **體位**：右側臥位（右胸骨旁切面），左側臥位（左心尖切面）
- **準備**：剃毛（兩側第 3-6 肋間）、酒精/超音波凝膠

## 標準切面

### 右胸骨旁長軸切面 (RPLAX)
- **四腔室切面**：同時顯示 LA、LV、RA、RV 與二尖瓣/三尖瓣
- **左心室流出道切面 (LVOT)**：顯示 LV、LVOT、主動脈根部與 LA
- **用途**：整體結構評估、瓣膜運動觀察、心包膜積液偵測

### 右胸骨旁短軸切面 (RPSAX)
- **心底水平**：主動脈短軸呈圓形，LA 包繞其後 → 測量 **LA/Ao ratio**
- **乳頭肌水平**：LV 呈圓形，乳頭肌於 5 點鐘與 7 點鐘位置 → M-mode 測量
- **心尖水平**：評估心尖區心肌運動

### 左心尖切面 (LAp)
- **四腔室切面**：Doppler 評估二尖瓣血流（E/A ratio）
- **五腔室切面**：CW Doppler 測量 LVOT/Aortic flow

## 二、判讀要點 (Interpretation)

### 關鍵測量參數

| 參數 | 模式 | 正常值（犬） | 臨床意義 |
|------|------|------------|---------|
| LA/Ao | 2D 短軸 | < 1.6 | ≥ 1.6 提示 LA 擴大（MMVD B2 標準之一） |
| LVIDd/LVIDs | M-mode | 依體重 | 擴大提示容量過載或 DCM |
| LVIDDN | M-mode | < 1.73 | 體重標準化值，> 1.73 提示 LV 擴大 |
| FS (%) | M-mode | 25-45% | < 20% 提示收縮功能障礙（DCM） |
| EPSS | M-mode | < 6mm | > 8mm 提示收縮功能降低 |
| LVWd（貓） | 2D | < 6mm | ≥ 6mm 診斷 HCM（排除續發原因後） |

## Doppler 模式

### Color Flow Doppler
快速偵測瓣膜逆流（藍色：離開探頭；紅色：靠近探頭）。MR jet 面積/LA 面積比可半定量評估逆流嚴重度。

### Pulsed Wave (PW) Doppler
測量特定位置的血流速度與方向。用於二尖瓣流入速度（E/A ratio）評估舒張功能。

### Continuous Wave (CW) Doppler
測量高速血流。用於 TR 最大速度估算肺動脈壓力（mPAG = 4V²；> 2.8 m/s 提示肺高壓）。

## 三、常見陷阱 (Pitfalls)

- M-mode 游標未垂直於心室中隔與後壁，傾斜切割導致 LVIDd 高估
- LA/Ao ratio 測量時機不一致——應在主動脈瓣關閉瞬間的第一幀（early diastole）
- 貓在緊迫下可出現暫時性心肌增厚假象（stress-induced dynamic LVOTO）
- 使用犬 FS 正常值（25-45%）判斷貓——貓正常 FS 較高（35-65%）

## 四、人醫借鑑 (Translational Insights)

| 人醫工具/概念 | 獸醫應用潛力 | 現況 |
|-------------|-------------|------|
| 斑點追蹤心超（Speckle Tracking Echocardiography, STE）| 犬貓心肌應變（strain）分析，早期偵測亞臨床心肌功能障礙 | 獸醫研究漸增，部分品牌已內建獸醫演算法 |
| 3D 心超即時容積評估 | 精確測量 LV/LA 容積取代 M-mode 線性測量 | 設備成本高，獸醫研究驗證中 |
| AI 輔助心超影像品質控管與自動測量 | 減少操作者間變異，標準化獸醫心超報告 | 人醫 Caption Health/Us2.ai 已上市，獸醫版本開發中 |
| 經食道心超（TEE）| 犬心臟手術中即時監測，先天性心臟病精確評估 | 少數轉介中心可執行 |
| Contrast-enhanced 超音波（CEUS）| 心肌灌流評估，心臟腫塊血管化程度判斷 | 獸醫研究階段 |

## 五、臨床爭議與知識空缺 (Controversies & Knowledge Gaps)

| 爭議議題 | 現況 | Evidence Level |
|---------|------|---------------|
| LVIDDN 正常閾值 1.73 的品種適用性 | 原始研究品種分布偏向中大型犬，小型犬閾值可能需調整 | Level III |
| 心超 MMVD B1 vs B2 分界的「灰色地帶」| LA/Ao 1.5-1.7 + LVIDDN 1.6-1.8 的判定仍有爭議 | Level II |
| STE strain 在獸醫臨床的實用性 | 正常參考值因設備廠牌差異大，標準化不足 | Level III |
| 犬 E/A ratio 與舒張功能評估的可靠性 | 犬心率變異大影響 E/A 測量一致性 | Level IV |

[圖片:犬心臟超音波標準切面示意圖——右胸骨旁長軸與短軸]`,
  clinical_pearl: 'LA/Ao ratio 的測量方法要標準化：在右胸骨旁短軸心底水平切面，主動脈呈圓形時取第一幀（早期舒張期），Ao 測量從右冠狀瓣尖根部到對側非冠狀瓣-左冠狀瓣交界處，LA 從同一幀以平行線法測量。測量不標準化是臨床上 LA/Ao ratio 變異大的主要原因——建議每次使用相同方法與時機點。',
  common_mistakes: [
    'M-mode 游標未垂直於心室中隔與後壁——傾斜切割導致 LVIDd 高估',
    'LA/Ao ratio 測量時機不一致——應在主動脈瓣關閉瞬間的第一幀（early diastole）測量',
    '使用犬的 FS 正常值（25-45%）判斷貓——貓正常 FS 較高（35-65%），貓 FS 40% 可能已偏低',
    '忽略 EPSS 的簡便性——EPSS（E-point septal separation）是快速評估收縮功能的實用指標，> 8mm 提示功能下降',
    '過度依賴單一參數——心超判讀需綜合多項指標，單一數值異常不應直接下結論',
  ],
  disease_data: null,
  diagnostic_data: {
    indication: ['心雜音評估', 'MMVD/DCM/HCM 分期與診斷', '心包膜積液確認', '先天性心臟病評估', 'CHF 嚴重度評估', '治療追蹤', '心臟腫塊偵測'],
    contraindication: ['無絕對禁忌症', '嚴重呼吸窘迫時應先穩定再進行（或簡短快速評估）'],
    technique: '右側臥位獲取右胸骨旁長軸與短軸切面，左側臥位獲取左心尖切面。探頭置於第 3-6 肋間心臟凹痕。2D 模式先做整體掃描，再於標準切面進行 M-mode 與 Doppler 測量。犬用 5-7.5 MHz phased array 探頭，貓用 7.5-12 MHz。全程不需鎮靜（除非動物極度緊張）。',
    normal_findings: [
      { finding: 'LA/Ao < 1.6（犬）', description: '左心房與主動脈根部比值在正常範圍', significance: '排除左心房顯著擴大' },
      { finding: 'FS 25-45%（犬）', description: '左心室收縮功能在正常範圍', significance: '收縮功能正常' },
      { finding: '瓣膜結構光滑', description: '瓣膜葉薄、活動正常、無脫垂', significance: '排除瓣膜結構性疾病' },
      { finding: '無或微量瓣膜逆流', description: 'Color Doppler 無明顯逆流 jet', significance: '生理性微量 TR 在犬可為正常' },
    ],
    abnormal_findings: [
      { finding: 'LA/Ao ≥ 1.6', description: '左心房相對於主動脈根部擴大', significance: '提示容量過載，MMVD B2 標準之一，HCM 高風險指標' },
      { finding: 'FS < 20%', description: '左心室收縮分數明顯降低', significance: '強烈提示 DCM 或嚴重收縮功能障礙' },
      { finding: 'LVWd ≥ 6mm（貓）', description: '左心室壁舒張末期厚度增加', significance: 'HCM 診斷標準（需排除高血壓與甲亢）' },
      { finding: 'SAM（貓）', description: '二尖瓣前葉收縮期前向運動', significance: 'HCM 特徵，可導致動態 LVOTO' },
      { finding: '心包膜積液', description: '心包膜囊內出現無回音液區', significance: '需評估是否有心臟壓塞及搜尋腫塊' },
    ],
    interpretation_guide: '1. 2D 全方位掃描各腔室大小、心肌厚度、瓣膜結構、心包膜。2. M-mode 測量 LVIDd/s、FS、EPSS。3. 2D 心底短軸測量 LA/Ao。4. Color Doppler 評估各瓣膜逆流。5. PW Doppler 測量二尖瓣 E/A ratio。6. CW Doppler 測量 TR 速度估算肺動脈壓。7. 綜合所有數據判定診斷與分期。',
    pitfalls: [
      '肥胖動物超音波穿透力差，影像品質下降',
      '貓在緊迫狀態下可出現暫時性心肌增厚假象（stress-induced dynamic LVOTO）',
      '嚴重心包膜積液時心臟擺動，M-mode 測量可能不準確',
      '心房顫動時心搏量逐搏變化，需多次測量取平均',
    ],
    sensitivity_specificity: '對結構性心臟病（瓣膜病、心肌病、心包膜積液）的敏感度與特異度均 > 90%。對輕微病變（早期 MMVD、輕度 HCM）的偵測取決於操作者經驗與影像品質。',
    cost_benefit: '中等成本（需專用設備與訓練），但診斷價值極高。是 MMVD 分期（B1 vs B2）、DCM 確診與 HCM 診斷不可或缺的工具。建議所有心雜音 ≥ Grade III 的犬貓進行心超評估。',
  },
  procedure_data: null,
  visual_placeholders: [
    { position: '標準切面段落', type: 'annotated_image', description: '犬心超標準切面獲取位置與對應影像' },
    { position: '測量參數表格後', type: 'annotated_image', description: 'M-mode 與 2D 測量方法標示圖' },
  ],
  interactive_placeholders: [
    { position: '全文', type: 'interactive_overlay', description: '模擬心超影像判讀練習——標示結構與測量' },
  ],
  drug_api_links: [],
  references: [
    { type: 'textbook', citation: 'Boon JA. Veterinary Echocardiography, 2nd ed. Wiley-Blackwell, 2011.', relevance: '獸醫心臟超音波標準教材' },
    { type: 'guideline', citation: 'Keene BW et al. ACVIM consensus guidelines for MMVD. J Vet Intern Med. 2019;33(3):1127-1140.', relevance: 'MMVD 心超分期標準' },
    { type: 'journal', citation: 'Cornell CC et al. Allometric scaling of M-mode cardiac measurements in normal adult dogs. J Vet Intern Med. 2004;18(3):311-321.', relevance: '犬心超測量值體重標準化（LVIDDN）方法' },
  ],
  is_current: true,
  created_at: now,
};

/** 心電圖判讀 — 診斷型 */
const contentECG: NodeContent = {
  id: 'CONTENT-L4-003',
  node_id: 'CARDIO-L4-003',
  version: 1,
  summary: '心電圖（ECG/EKG）記錄心臟電氣活動在體表的投影，是診斷心律不整的金標準工具。標準六肢導程（I, II, III, aVR, aVL, aVF）以 Lead II 為主要分析導程。犬貓 ECG 判讀需系統性評估心率、節律、P 波、PR interval、QRS 複合波與 T 波。Holter 監測（24 小時連續 ECG）對間歇性心律不整的偵測至關重要。',
  learning_objectives: [
    '執行犬貓標準六肢導程 ECG 的正確操作',
    '系統性判讀 ECG：心率→節律→P 波→PR→QRS→ST→T',
    '辨識犬貓常見心律不整的 ECG 特徵（VPC、AF、SVT、AV block）',
    '判斷腔室擴大的 ECG 徵象（P-mitrale、P-pulmonale、寬 QRS）',
    '決定何時需要 Holter 監測或將 ECG 轉介專科判讀',
  ],
  key_points: [
    '犬貓 ECG 標準體位：右側臥位，肢導極夾置於肘關節與膝關節近端皮膚上',
    '走紙速度 50 mm/s（犬標準）或 25 mm/s，靈敏度 1 cm = 1 mV',
    '犬正常心率 60-160 bpm（大型犬可低至 50），貓 140-220 bpm',
    '犬竇性心律不整（sinus arrhythmia）為正常；貓的竇性心律不整罕見且可能為病理性',
    'VPC 特徵：寬大異形 QRS、無前置 P 波、完全代償間歇',
    '心房顫動特徵：f 波取代 P 波、R-R interval 不規則（irregularly irregular）',
    'Holter 監測適應症：間歇性暈厥、杜賓犬 DCM 篩檢、抗心律不整藥效評估',
    'ECG 對腔室擴大的敏感度有限（~50%），不應取代心超評估',
  ],
  body: `# 心電圖判讀 (ECG Interpretation)





## 一、檢查原理與適應症 (Principles & Indications)

### ECG 操作

### 標準體位
犬貓右側臥位，四肢與軀幹平行。電極夾置於：
- RA（紅）：右前肢肘關節近端
- LA（黃）：左前肢肘關節近端
- RL（黑/綠）：右後肢膝關節近端（接地）
- LL（綠/白）：左後肢膝關節近端

### 設定
- 走紙速度：犬 50 mm/s，貓 50 mm/s（或 25 mm/s）
- 靈敏度：1 cm = 1 mV（標準校正波）
- 濾波器：適當啟用以減少肌電干擾

## 二、判讀要點 (Interpretation)

### 系統性判讀七步驟

### Step 1：心率
- 方法一（規則節律）：1500 / R-R interval (mm)（50 mm/s 走紙速度下）
- 方法二（不規則節律）：計算 6 秒內 R 波數量 × 10

### Step 2：節律規則性
- 規則（regular）：R-R interval 變化 < 10%
- 規則不整（regularly irregular）：週期性模式，如竇性心律不整
- 不規則不整（irregularly irregular）：心房顫動特徵

### Step 3：P 波
| 異常 | 特徵 | 提示 |
|------|------|------|
| P-mitrale | P 波增寬 > 0.04s（犬）| 左心房擴大 |
| P-pulmonale | P 波增高 > 0.4mV（犬）| 右心房擴大 |
| 無 P 波 | f 波（細顫）取代 | 心房顫動 |

### Step 4：PR interval
- 犬正常：0.06-0.13s
- 延長：第一度 AV block（> 0.13s）
- 漸進延長後脫落：第二度 AV block（Mobitz type I）

### Step 5：QRS 複合波
- 犬正常 QRS 時限 < 0.06s（大型犬 < 0.08s）
- 增寬 QRS：bundle branch block 或心室性異位心律
- 高電壓 QRS：心室肥大（R wave in Lead II > 3.0 mV 犬）

### Step 6-7：ST segment 與 T 波
- ST 偏移（elevation/depression）：心肌缺氧、心包膜炎（獸醫少見）
- T 波變化：高鉀血症（tall peaked T）、心肌缺氧

## 常見心律不整 ECG 特徵

| 心律不整 | 關鍵特徵 |
|----------|---------|
| 竇性心搏過速 | 正常 P-QRS-T，HR 加快 |
| 心房顫動 (AF) | 無 P 波、f 波、R-R 不規則不整 |
| VPC | 寬大異形 QRS、無前置 P 波 |
| 心室頻脈 (VT) | ≥ 3 連續 VPC，HR 通常 > 150 bpm |
| 第三度 AV block | P 波與 QRS 完全分離，心室逸搏節律慢 |

## 三、常見陷阱 (Pitfalls)

- 呼吸動作（panting）造成的基線漂移誤判為 ST 變化
- 顫抖造成的高頻肌電干擾誤判為心房顫動
- 犬竇性心律不整的暫停期誤判為 AV block
- 僅觀察數秒片段而遺漏間歇性 VPC

## 四、人醫借鑑 (Translational Insights)

| 人醫工具/概念 | 獸醫應用潛力 | 現況 |
|-------------|-------------|------|
| AI-ECG 診斷（Mayo/Google）| 犬貓 ECG 自動判讀與心律不整分類 | 獸醫專用 AI 模型訓練中，部分商業軟體已具初步功能 |
| AliveCor/Kardia 穿戴式 ECG | 犬居家心律監測——飼主可執行 30 秒 ECG 傳給獸醫判讀 | AliveCor Vet 已上市且有獸醫驗證研究 |
| 植入式 loop recorder（ILR）| 犬不明原因暈厥的長期心律監測（2-3 年）| 人醫廣泛使用，獸醫偶有報告但成本高 |
| 信號平均 ECG（SAECG）| 犬 DCM/ARVC 微電位偵測，VT 風險分層 | 研究工具，臨床常規應用有限 |

## 五、臨床爭議與知識空缺 (Controversies & Knowledge Gaps)

| 爭議議題 | 現況 | Evidence Level |
|---------|------|---------------|
| 犬 ECG 是否需要 12 導程（如人醫標準）| 獸醫傳統僅用 6 肢導，額外胸前導程的增量價值待研究 | Level IV |
| Holter 監測在非杜賓犬品種的篩檢價值 | 成本效益與觸發閾值缺乏非杜賓品種的系統性數據 | Level IV |
| 穿戴式 ECG 取代 Holter 的可行性 | 居家操作方便性高但記錄時間與品質受限 | Level III |

[圖片:犬正常 ECG 與各種心律不整 ECG 波形對比]`,
  clinical_pearl: '心房顫動在犬的臨床判斷關鍵：(1) 大型犬（> 20 kg）合併 DCM 時最常見；(2) 小型犬出現 AF 幾乎都代表嚴重左心房擴大；(3) 犬 AF 的治療目標是心率控制（target HR < 140-160 bpm at rest），而非節律轉復——電復律或藥物轉復在犬的復發率極高。Diltiazem 或 Digoxin 是心率控制的首選。',
  common_mistakes: [
    '在不正確體位下進行 ECG——站立或胸骨臥位會改變心軸，影響判讀',
    '僅看節律而忽略波形型態——VPC 需確認 QRS 型態，AF 需確認 f 波',
    '過度依賴 ECG 診斷腔室擴大——ECG 對腔室擴大的敏感度僅約 50%，需心超確認',
    '忽略 ECG artifacts（肌電干擾、60 Hz 交流電干擾）導致誤判心律不整',
    '未在杜賓犬進行 Holter 篩檢——標準 ECG 僅記錄數分鐘，可能遺漏間歇性 VPC',
  ],
  disease_data: null,
  diagnostic_data: {
    indication: ['心律不整診斷', '心雜音評估的輔助', '麻醉前評估', '電解質異常監測（高/低鉀血症）', '藥物心臟毒性監測', '暈厥原因評估', '杜賓犬/拳師犬 DCM 篩檢（Holter）'],
    contraindication: ['無絕對禁忌症'],
    technique: '右側臥位，四肢導極夾置於肘/膝關節近端。記錄標準六肢導程（I, II, III, aVR, aVL, aVF）。走紙速度 50 mm/s（犬）或 25 mm/s。靈敏度 1 cm = 1 mV。記錄至少 30-60 秒 Lead II 長條（rhythm strip）。減少肌電干擾：保持動物安靜、適當保定、酒精濕潤電極。Holter 監測：黏貼式電極連續記錄 24 小時。',
    normal_findings: [
      { finding: '竇性節律', description: '每個 QRS 前有正向 P 波，PR interval 固定', significance: '正常心臟傳導' },
      { finding: '竇性心律不整（犬）', description: '呼吸相關的 R-R interval 週期性變化', significance: '犬的正常變異，反映迷走神經張力' },
      { finding: '正常 QRS', description: '犬 Lead II：P < 0.4mV, QRS < 0.06s, R < 3.0mV', significance: '無腔室擴大或傳導異常的 ECG 證據' },
    ],
    abnormal_findings: [
      { finding: 'VPC', description: '寬大異形 QRS 複合波，無前置 P 波', significance: '心室性異位心律——需評估頻率、型態與臨床症狀決定治療' },
      { finding: '心房顫動', description: 'P 波消失，f 波取代，R-R 不規則不整', significance: '大型犬常見，提示嚴重心臟擴大，需心率控制' },
      { finding: 'AV block（第二/三度）', description: '部分或全部 P 波未傳導至心室', significance: '可能需 pacemaker（特別是第三度 AV block 伴症狀）' },
      { finding: '低電壓 QRS', description: '所有肢導 R 波 < 0.5 mV', significance: '心包膜積液、胸水、肥胖、甲狀腺功能低下' },
      { finding: 'Electrical alternans', description: 'QRS 振幅逐搏交替變化', significance: '大量心包膜積液中心臟擺動的特徵性表現' },
    ],
    interpretation_guide: '1. 確認走紙速度與靈敏度校正。2. 計算心率（犬 60-160, 貓 140-220 bpm）。3. 評估節律規則性。4. 檢查每個 QRS 前是否有 P 波。5. 測量 P 波寬度/高度。6. 測量 PR interval。7. 測量 QRS 寬度/振幅。8. 檢查 ST segment 與 T 波。9. 計算心電軸（MEA）。',
    pitfalls: [
      '呼吸動作（panting）造成的基線漂移誤判為 ST 變化',
      '顫抖造成的高頻肌電干擾誤判為心房顫動',
      '移動造成的偶發大波形誤判為 VPC',
      '犬竇性心律不整的暫停期誤判為 AV block',
    ],
    sensitivity_specificity: '對心律不整的診斷特異度高（> 95%），但對間歇性心律不整的敏感度取決於記錄時間——標準 ECG 數分鐘 vs Holter 24 小時。對腔室擴大的敏感度約 50-60%，特異度約 80%。',
    cost_benefit: '成本低（ECG 機相對便宜），操作簡便。是心律不整診斷的金標準。對腔室擴大評估有限，需搭配心超。Holter 監測成本較高但對間歇性心律不整不可或缺。',
  },
  procedure_data: null,
  visual_placeholders: [
    { position: '常見心律不整表格', type: 'waveform', description: '各種心律不整 ECG 波形範例圖' },
    { position: '系統性判讀段落', type: 'annotated_image', description: '正常犬 ECG 各波形標註說明圖' },
  ],
  interactive_placeholders: [
    { position: '全文', type: 'interactive_overlay', description: 'ECG 判讀練習——隨機顯示 ECG 條帶讓使用者判讀' },
  ],
  drug_api_links: [],
  references: [
    { type: 'textbook', citation: 'Tilley LP, Smith FWK. Electrocardiography in Small Animal Practice, 5th ed. Elsevier, 2016.', relevance: '獸醫心電圖標準教材' },
    { type: 'textbook', citation: 'Santilli RA et al. Electrocardiography of the Dog and Cat, 2nd ed. Edra, 2018.', relevance: '犬貓心電圖進階判讀教材' },
    { type: 'journal', citation: 'Meurs KM et al. Use of ambulatory electrocardiography for detection of ventricular premature complexes in healthy dogs. J Am Vet Med Assoc. 2001;218(8):1291-1292.', relevance: 'Holter 監測在犬的正常值參考' },
    { type: 'guideline', citation: 'Thomas WP, Gaber CE, Jacobs GJ, et al. "Recommendations for standards in transthoracic two-dimensional echocardiography in the dog and cat." J Vet Intern Med. 1993;7(4):247-252.', relevance: '犬貓心臟超音波標準化建議' },
  ],
  is_current: true,
  created_at: now,
};

/** 胸腔 X 光判讀 — 診斷型 */
const contentThoracicRadiograph: NodeContent = {
  id: 'CONTENT-L4-004',
  node_id: 'CARDIO-L4-004',
  version: 1,
  summary: '胸腔 X 光是心臟病評估中最基礎且廣泛可用的影像工具。標準三視圖（右側臥、左側臥、DV/VD）可評估心臟大小（VHS）、各腔室增大徵象、肺血管變化與肺實質病變（肺水腫、胸水）。VHS（Vertebral Heart Score）是客觀量化心臟大小的標準方法。X 光在 CHF 診斷、治療反應評估與 MMVD 分期中扮演重要角色。',
  learning_objectives: [
    '執行標準胸腔三視圖的正確拍攝與品質評估',
    '運用 VHS 測量法客觀評估犬貓心臟大小',
    '辨識各腔室擴大在 X 光上的特徵徵象',
    '診斷肺水腫（心因性 vs 非心因性）的 X 光特徵',
    '整合 X 光發現與臨床資訊制定進一步檢查計畫',
  ],
  key_points: [
    '標準拍攝：右側臥位（DV 或 VD 為輔）；吸氣相拍攝以最大化肺野評估',
    'VHS 測量：心臟長軸 + 短軸（以椎體數表示），犬正常 < 10.5，貓正常 < 8.0',
    '特定品種 VHS 差異大：騎士查理王小獵犬正常 VHS 可達 10.6，拳師犬 11.7',
    '左心房擴大徵象（側面觀）：隆突角（carina）分離、左主支氣管抬高、心臟背側緣直立化',
    '左心室擴大（側面觀）：心臟長軸延長、心尖向後移、DV 觀 2-5 點鐘區域圓隆',
    '右心擴大（DV 觀）：心影向右延伸（reverse D shape）',
    '犬心因性肺水腫：典型為肺門至背尾側分布的間質-肺泡型混合影',
    '貓心因性肺水腫：分布較彌散，可為任何肺葉；胸水更常見',
  ],
  body: `# 胸腔 X 光判讀 (Thoracic Radiograph Interpretation)

## 一、檢查原理與適應症 (Principles & Indications)


### 拍攝標準
### 標準視圖
1. **右側臥位（Right lateral）**：最常用，評估心臟大小（VHS）與肺野
2. **左側臥位（Left lateral）**：輔助評估，右肺野較清晰
3. **DV（Dorsoventral）**：評估心影對稱性，胸骨臥位較不引起呼吸壓迫
4. **VD（Ventrodorsal）**：需仰臥位，呼吸窘迫動物不建議

### 品質評估
- 吸氣相充足：肺葉延伸至 T12-T13
- 曝光適當：可見肺血管與椎體同時可辨
- 無旋轉：肋骨左右對稱

### 腔室擴大的 X 光徵象
### 左心房擴大
- **側面觀**：隆突角度增大（主支氣管分離）、左主支氣管向背側抬高、心臟背緣直立化、心臟背尾側突出
- **DV/VD 觀**：左心耳區域突出（2 點鐘位置）、左主支氣管向外偏移

### 左心室擴大
- **側面觀**：心臟長軸延長、心尖圓隆並向後移動、心臟與胸骨接觸面增加
- **DV 觀**：心影 2-5 點鐘區域圓隆化

### 右心擴大
- **DV 觀**：心影向右延伸（reverse D shape），右心緣凸出超過胸壁
- **側面觀**：心臟與胸骨接觸面增加、前腔靜脈擴張

### 雙心房/雙心室擴大
- **整體心影增大**（globoid cardiomegaly）、VHS 明顯增加

### 肺野評估
### 心因性肺水腫（犬）
- **分布**：肺門至背尾側（perihilar to caudodorsal），左右對稱或右側為主
- **型態**：早期間質型（模糊化）→ 進展至肺泡型（air bronchograms）
- **伴隨**：肺靜脈擴張（PV > PA 同一水平比較）

### 心因性肺水腫/胸水（貓）
- 分布較不典型，可影響任何肺葉
- 胸水比肺水腫更常見
- Valentine-shaped 心影是貓心肌病的經典表現

### 肺血管評估
- 肺動脈擴張：提示肺高壓（如心絲蟲症）
- 肺動脈「截斷」徵象：心絲蟲導致的肺動脈病變

[圖片:犬胸腔 X 光 VHS 測量法與心臟各腔室擴大特徵標示]

## 二、判讀要點 (Interpretation)
### VHS 測量法
Vertebral Heart Score (VHS)：
1. 側面觀測量心臟長軸（L）：從隆突下方心底至心尖
2. 測量心臟短軸（S）：垂直於長軸的最大寬度
3. 將 L 與 S 分別轉換為椎體數（從 T4 開始）
4. VHS = L + S

| 物種 | 正常 VHS | 增大判定 |
|------|----------|---------|
| 犬（一般） | 9.7 ± 0.5 | > 10.5 |
| 貓 | 7.5 ± 0.3 | > 8.0 |
| CKCS | 10.6 ± 0.5 | > 11.5 |

## 三、常見陷阱 (Pitfalls)
- 呼氣相拍攝導致心影假性增大與肺野假性不透明——務必確認吸氣相充足（肺葉延伸至 T12-T13）
- 未考量品種差異直接套用 VHS 10.5 標準——短頭犬正常 VHS 可達 12.0
- 肥胖動物心包膜脂肪沉積造成心影假性增大
- 將犬心因性肺水腫的背尾側分布規律套用到貓——貓分布可能不典型
- 僅看側面觀而忽略 DV 觀——右心擴大在側面觀不易辨識

## 四、人醫借鑒 (Translational Insights)
| 人醫工具/概念 | 獸醫應用潛力 | 現況 |
|-------------|-------------|------|
| AI 胸部 X 光自動判讀 | 犬貓 VHS 自動測量、心臟擴大偵測、肺水腫辨識 | 人醫 AI 準確度已達放射科醫師水準，獸醫訓練模型開發中 |
| 低劑量 CT（LDCT）| 心臟結構與肺實質同時高解析度評估 | 獸醫 CT 普及率提升中，心臟評估多仍靠超音波 |
| 胸腔 X 光肺鬱血定量評分（Lung Congestion Score）| 犬 CHF 治療反應的客觀量化追蹤 | 人醫已有標準化評分系統，獸醫缺乏驗證 |
| 床邊超音波 B-lines 評估肺水腫 | 替代 X 光的即時肺水腫偵測（POCUS） | 獸醫急診 POCUS 教育快速發展中 |

## 五、臨床爭議與知識空缺 (Controversies & Knowledge Gaps)
| 爭議議題 | 現況 | Evidence Level |
|---------|------|---------------|
| VHS 品種特異性正常值完整性 | 僅部分品種有發表的 VHS 參考值，台灣流行品種數據不足 | Level III |
| X 光 vs 肺超音波（POCUS B-lines）偵測早期肺水腫的優劣比較 | B-lines 可能更敏感但特異度待確認 | Level III |
| 數位 X 光曝光寬容度是否影響 VHS 測量一致性 | 數位系統可後處理調整，但測量標準化仍待研究 | Level IV |
| 胸腔 X 光在 MMVD B1 vs B2 分期中的判定權重 | 部分病例 VHS 與心超結果不一致時的決策依據不明確 | Level II |`,
  clinical_pearl: '臨床上區分「心因性咳嗽」與「呼吸道咳嗽」的關鍵在胸腔 X 光：MMVD 犬的咳嗽可能來自 (1) 肺水腫（CHF）或 (2) 左心房擴大壓迫左主支氣管。若 X 光顯示肺野清晰但左主支氣管明顯被壓迫抬高，咳嗽可能是機械性壓迫而非 CHF——此時增加利尿劑無效，反而應考慮止咳藥。這個區分直接影響治療決策。',
  common_mistakes: [
    '呼氣相拍攝導致心影假性增大與肺野假性不透明——務必確認吸氣相充足',
    '未考量品種差異直接套用 VHS 10.5 標準——短頭犬、深胸犬（如杜賓犬 VHS 可能偏高）有品種特異性參考值',
    '將犬心因性肺水腫的分布規律套用到貓——貓的肺水腫分布可能不典型',
    '僅看側面觀而忽略 DV 觀——右心擴大在側面觀不易辨識，需 DV 觀確認',
    '過度依賴 X 光判斷心臟病嚴重度——X 光顯示的是結構變化的結果，需搭配心超進行精確評估',
  ],
  disease_data: null,
  diagnostic_data: {
    indication: ['心雜音評估輔助', 'CHF 診斷與嚴重度評估', 'MMVD 分期（VHS > 10.5 為 B2 標準之一）', '肺水腫/胸水偵測', '治療反應追蹤', '咳嗽原因鑑別', '心絲蟲症肺血管評估'],
    contraindication: ['嚴重呼吸窘迫時需謹慎保定——先穩定呼吸再拍攝', 'VD 位需仰臥，呼吸困難動物避免使用'],
    technique: '右側臥位為標準，DV 為輔。拍攝於吸氣高峰期（肺葉延伸至 T12-T13）。曝光適當使肺血管與椎體同時可辨。避免旋轉（確認肋骨對稱）。VHS 測量於右側臥位進行。數位影像可調整窗寬/窗位以優化肺野與縱膈評估。',
    normal_findings: [
      { finding: 'VHS < 10.5（犬）', description: '心臟大小在正常範圍', significance: '排除顯著心臟增大' },
      { finding: '肺野清晰', description: '肺實質無異常密度增加', significance: '排除肺水腫與肺實質疾病' },
      { finding: '肺血管正常', description: '肺動脈與肺靜脈直徑相近，約等於第四肋骨近端寬度', significance: '排除肺血管充血或肺高壓' },
      { finding: '隆突角正常', description: '左右主支氣管角度正常（犬約 60-70 度）', significance: '排除左心房顯著擴大' },
    ],
    abnormal_findings: [
      { finding: 'VHS > 10.5', description: '心臟大小超過正常範圍', significance: '提示心臟增大，需心超進一步評估——是 MMVD B2 分期標準之一' },
      { finding: '肺泡型浸潤（犬背尾側）', description: '肺野密度增加伴 air bronchograms', significance: '高度提示心因性肺水腫（CHF）' },
      { finding: '肺靜脈擴張', description: '肺靜脈直徑 > 同水平肺動脈', significance: '左心衰竭導致肺靜脈充血' },
      { finding: '球形心影（globoid）', description: '心影呈球形，各方向均增大', significance: '嚴重雙心擴大或大量心包膜積液' },
      { finding: '胸水', description: '肺葉邊緣後縮、肋膈角鈍化', significance: '右心衰竭或貓心肌病（貓 CHF 常見表現）' },
    ],
    interpretation_guide: '1. 評估拍攝品質（吸氣相、曝光、無旋轉）。2. VHS 測量。3. 側面觀評估心臟輪廓（各腔室擴大徵象）。4. DV/VD 觀評估心影對稱性與各腔室大小。5. 肺血管評估（PA vs PV 大小比較）。6. 肺野評估（水腫、實質病變）。7. 胸膜腔評估（胸水）。8. 氣道評估（主支氣管壓迫、氣管塌陷）。',
    pitfalls: [
      '呼氣相假性心臟增大——最常見的判讀錯誤',
      '短頭犬正常 VHS 偏高——英國鬥牛犬 VHS 可達 12.0 仍在正常範圍',
      '肥胖動物心包膜脂肪沉積造成心影假性增大',
      '深胸犬（如杜賓犬、灰狗）心臟相對胸腔較小，需注意不可低估心臟擴大',
    ],
    sensitivity_specificity: '對左心房擴大的敏感度約 70-80%（需心超確認）。對肺水腫的敏感度高（> 90%），但早期間質型水腫可能不易辨識。VHS 對心臟增大的敏感度約 75-85%，特異度約 80-90%。',
    cost_benefit: '成本低、可用性高（幾乎所有獸醫院都有 X 光設備）。是 CHF 診斷、肺水腫偵測與治療追蹤的一線工具。搭配心超使用可提供最完整的心臟評估。',
  },
  procedure_data: null,
  visual_placeholders: [
    { position: 'VHS 段落', type: 'annotated_image', description: '犬胸腔 X 光 VHS 測量標準方法示範' },
    { position: '腔室擴大段落', type: 'comparison_table', description: '各腔室擴大 X 光徵象比較表（側面觀 vs DV 觀）' },
  ],
  interactive_placeholders: [
    { position: '全文', type: 'interactive_overlay', description: 'X 光判讀練習——標示心臟結構與異常發現' },
  ],
  drug_api_links: [],
  references: [
    { type: 'textbook', citation: 'Thrall DE. Textbook of Veterinary Diagnostic Radiology, 7th ed. Elsevier, 2018. Chapter 33: The Heart and Pulmonary Vessels.', relevance: '獸醫胸腔影像標準教材' },
    { type: 'journal', citation: 'Buchanan JW, Bucheler J. Vertebral scale system to measure canine heart size in radiographs. J Am Vet Med Assoc. 1995;206(2):194-199.', relevance: 'VHS 測量法原始文獻' },
    { type: 'guideline', citation: 'Keene BW et al. ACVIM consensus guidelines for MMVD. J Vet Intern Med. 2019;33(3):1127-1140.', relevance: 'MMVD 分期中 X 光標準的角色' },
  ],
  is_current: true,
  created_at: now,
};

/** 心臟衰竭治療 — 治療型 */
const contentHeartFailureTreatment: NodeContent = {
  id: 'CONTENT-L5-001',
  node_id: 'CARDIO-L5-001',
  version: 1,
  summary: '心臟衰竭（CHF）治療是獸醫心臟科的核心臨床技能。犬 CHF 治療以「三合一」為基礎：Pimobendan（正性肌力+血管擴張）、Furosemide（利尿）與 ACE inhibitor（抗神經荷爾蒙）。急性 CHF 需氧氣支持與靜脈利尿劑穩定，慢性管理需個別化藥物調整與居家監測。貓 CHF 以胸水引流與利尿劑為主，用藥選擇與犬有重要差異。',
  learning_objectives: [
    '制定犬急性 CHF（肺水腫）的緊急處理步驟',
    '開立犬慢性 CHF 的標準三合一藥物處方',
    '比較犬與貓 CHF 治療的關鍵差異',
    '列出各類 CHF 藥物的作用機轉、劑量、副作用與監測項目',
    '制定難治性 CHF 的藥物升級策略',
  ],
  key_points: [
    '犬急性 CHF：氧氣 + Furosemide 2-4 mg/kg IV bolus（可 q1-2h 重複直到呼吸穩定）',
    '犬慢性 CHF 三合一：Pimobendan 0.25-0.3 mg/kg PO BID + Furosemide 2-4 mg/kg PO BID-TID + Enalapril/Benazepril 0.5 mg/kg PO BID',
    'Pimobendan 為 MMVD B2 以上與 DCM 的核心藥物（EPIC/PROTECT 研究）',
    'Furosemide 為環利尿劑，需監測腎功能與電解質（低鉀、脫水）',
    'Spironolactone（MRA）為 add-on 藥物：抗醛固酮、抗纖維化，1-2 mg/kg PO SID-BID',
    '貓 CHF：Furosemide 1-2 mg/kg + 胸水引流；Pimobendan 僅用於收縮功能障礙型',
    '難治性 CHF 策略：增加 Furosemide 或加 Hydrochlorothiazide、加 Sildenafil（肺高壓）',
    '居家 sleeping RR < 30 次/分是最重要的 CHF 監測指標',
  ],
  body: `# 心臟衰竭治療 (Heart Failure Treatment)





## 一、治療原理 (Treatment Principles)

### 急性 CHF 處理

### 犬急性 CHF（肺水腫）
1. **最低限度保定**——壓迫感會加重呼吸困難
2. **氧氣支持**：flow-by、氧氣籠、鼻管（FiO₂ 40-60%）
3. **Furosemide**：2-4 mg/kg IV bolus，可每 1-2 小時重複（總量不超過 12 mg/kg/day）
4. 穩定後開始口服藥物
5. 嚴重低輸出：考慮 Dobutamine CRI 2.5-10 µg/kg/min

### 貓急性 CHF
1. **最低限度保定**——貓極易因緊迫惡化
2. **氧氣支持**
3. **胸水引流**（若有大量胸水——貓 CHF 常以胸水為主）
4. **Furosemide**：1-2 mg/kg IV（貓對利尿劑較敏感，劑量低於犬）
5. 鎮靜可考慮 Butorphanol 0.2 mg/kg IM

## 二、藥物/方法比較 (Comparison)

### 犬 CHF 標準藥物處方

| 藥物 | 劑量 | 作用機轉 | 監測 |
|------|------|---------|------|
| [藥物:Pimobendan] | 0.25-0.3 mg/kg PO BID | PDE3 抑制 + Ca²⁺ sensitizer | 食慾、心律 |
| [藥物:Furosemide] | 2-4 mg/kg PO BID-TID | Loop diuretic（Na⁺/K⁺/2Cl⁻ cotransporter 抑制）| BUN/Cre、K⁺、脫水 |
| [藥物:Enalapril] 或 [藥物:Benazepril] | 0.5 mg/kg PO BID | ACE inhibitor（阻斷 RAAS）| BUN/Cre、K⁺、血壓 |

### Add-on 藥物

| 藥物 | 適應症 | 劑量 | 注意 |
|------|--------|------|------|
| [藥物:Spironolactone] | 三合一基礎上加用 | 1-2 mg/kg PO SID-BID | MRA，抗纖維化；監測 K⁺ |
| [藥物:Sildenafil] | 肺高壓 | 1-2 mg/kg PO BID-TID | PDE5 抑制，可降低肺動脈壓 |
| [藥物:Amlodipine] | 全身性高血壓（貓）| 0.625-1.25 mg/cat PO SID | Ca²⁺ channel blocker |
| [藥物:Digoxin] | 心房顫動心率控制 | 0.005 mg/kg PO BID（犬）| 目標血中濃度 0.8-1.2 ng/mL |
| Hydrochlorothiazide | 難治性水腫 | 2-4 mg/kg PO BID | 與 Furosemide 合用（sequential nephron blockade） |

### 貓 CHF 藥物差異
- Pimobendan 在貓的使用受限：HCM 伴 LVOTO 時禁用（加重阻塞）；僅用於 end-stage HCM 合併收縮功能下降
- ACEi 在貓 CHF 的證據較犬弱，但仍常用
- Clopidogrel 18.75 mg/cat PO SID 作為 ATE 預防是貓 CHF 治療的重要組成

## 三、併發症與監控 (Complications & Monitoring)

### 難治性 CHF 策略

標準治療無效時的升級方案：
1. 增加 Furosemide 劑量（最高 6-8 mg/kg PO TID）或改為 CRI
2. 加入 Spironolactone（若尚未使用）
3. 加入 Hydrochlorothiazide（sequential nephron blockade）
4. 加入 Sildenafil（合併肺高壓時）
5. 住院：Dobutamine CRI（短期正性肌力支持）
6. 考慮 Pimobendan 增量至 0.3 mg/kg TID（off-label，有限證據）

### 藥物副作用與監測

| 藥物 | 主要副作用 | 監測項目 | 監測頻率 |
|------|----------|---------|---------|
| Furosemide | 脫水、前腎性氮血症、低鉀 | BUN/Cre、K⁺、體重、飲水量 | 啟始後 5-7d，穩定後 q3-6m |
| ACEi | 低血壓、氮血症、高鉀 | BUN/Cre、K⁺、血壓 | 啟始後 5-7d，穩定後 q3-6m |
| Pimobendan | 食慾降低（少見）、心律不整加重 | 食慾、心律 | 每次回診 |
| Spironolactone | 高鉀血症、GI upset | K⁺ | 啟始後 7-14d |
| Digoxin | 食慾下降、嘔吐、心律不整 | 血中濃度（0.8-1.2 ng/mL）| 啟始後 7-10d 抽谷值 |

## 四、預後影響 (Prognostic Impact)

| 預後因子 | 良好 | 不良 |
|---------|------|------|
| Sleeping RR | 穩定 < 30/min | 持續 > 40/min |
| 利尿劑劑量需求 | 低劑量維持 | 持續升級仍無法控制 |
| 腎功能 | BUN/Cre 穩定 | 進行性氮血症 |
| 心律 | 竇性節律 | 發展 AF 或頻繁 VPC |
| MMVD CHF MST | EPIC 研究 ~267 天 | Stage D 難治型顯著縮短 |

## 五、人醫借鑑 (Translational Insights)

| 人醫工具/概念 | 獸醫應用潛力 | 現況 |
|-------------|-------------|------|
| Sacubitril/Valsartan (Entresto) | 犬 MMVD CHF 的 ARNI 替代 ACEi 治療 | 犬初步研究結果正面（VetEntresto 開發中） |
| SGLT2i（Dapagliflozin/Empagliflozin）| 犬心腎症候群雙重保護 | 人醫 paradigm shift，獸醫缺乏安全性/有效性數據 |
| 遠距 CHF 監測（植入式感測器）| 犬 CHF 再住院預防 | 概念可行，成本為主要障礙 |
| 機械循環輔助（LVAD）| 犬終末期 CHF 橋接至二尖瓣修復手術 | 人醫成熟技術，獸醫因體型限制極少使用 |
| Vericiguat（可溶性 guanylate cyclase 刺激劑）| 犬難治性 CHF 的新機轉藥物 | 人醫 VICTORIA 試驗正面，獸醫尚無數據 |

## 六、臨床爭議與知識空缺 (Controversies & Knowledge Gaps)

| 爭議議題 | 現況 | Evidence Level |
|---------|------|---------------|
| MMVD B2 是否都應開始 Pimobendan | EPIC 研究支持，但 B2 定義的灰色地帶病例如何處置仍有爭議 | Level I |
| ACEi 在犬 CHF 的實際獲益幅度 | BENCH/COVE 研究設計較早，與現代三合一方案的比較數據不足 | Level II |
| Furosemide CRI vs bolus 在急性 CHF 的優劣 | 人醫 DOSE 試驗無顯著差異，獸醫缺乏比較研究 | Level IV |
| 飲食鈉限制在犬 CHF 的角色 | 傳統建議限鈉，但嚴格限鈉可能進一步活化 RAAS | Level IV |

[圖片:犬 CHF 治療藥物階梯式方案流程圖]`,
  clinical_pearl: '利尿劑的「黃金法則」：使用最低有效劑量。Furosemide 過度使用會導致前腎性氮血症、低鉀血症與脫水，反而啟動 RAAS 活化形成惡性循環（「利尿劑阻抗」現象）。當 BUN/Cre 上升時，優先考慮降低 Furosemide 而非停用 ACEi——ACEi 的腎保護作用在長期管理中更為重要。',
  common_mistakes: [
    '急性 CHF 過度保定導致緊迫惡化——應在最低限度保定下先給予氧氣與 Furosemide，穩定後再進行檢查',
    '在 MMVD Stage B1 即開始三合一治療——EPIC 研究僅支持 B2 以上開始 Pimobendan',
    '對 HCM 貓常規使用 Pimobendan——肥厚型心肌病伴 LVOTO 時 Pimobendan 可能加重動態阻塞',
    '忽略居家 sleeping RR 監測的價值——這是最簡單且最早偵測 CHF 復發的指標',
    '腎功能指數升高就停用所有心臟藥物——需評估是前腎性（利尿劑相關，先減量利尿劑）還是腎臟本身問題',
  ],
  disease_data: null,
  diagnostic_data: null,
  procedure_data: null,
  visual_placeholders: [
    { position: '藥物表格後', type: 'flowchart', description: '犬 CHF 藥物選擇與升級決策流程圖' },
    { position: '難治性段落', type: 'comparison_table', description: '犬 vs 貓 CHF 治療差異比較表' },
  ],
  interactive_placeholders: [
    { position: '全文', type: 'decision_tree', description: '根據物種、疾病與嚴重度推薦 CHF 治療方案' },
  ],
  drug_api_links: ['Pimobendan', 'Furosemide', 'Enalapril', 'Benazepril', 'Spironolactone', 'Sildenafil', 'Amlodipine', 'Digoxin', 'Dobutamine', 'Clopidogrel'],
  references: [
    { type: 'guideline', citation: 'Keene BW et al. ACVIM consensus guidelines for the diagnosis and treatment of myxomatous mitral valve disease in dogs. J Vet Intern Med. 2019;33(3):1127-1140.', relevance: 'MMVD CHF 治療指引' },
    { type: 'journal', citation: 'Boswood A et al. Effect of pimobendan in dogs with preclinical myxomatous mitral valve disease (EPIC study). J Vet Intern Med. 2016;30(6):1765-1779.', relevance: 'Pimobendan 在心衰竭前期的關鍵證據' },
    { type: 'textbook', citation: 'Ware WA. Cardiovascular Disease in Small Animal Medicine. Manson Publishing, 2011. Chapter 3: Heart Failure Management.', relevance: '心臟衰竭管理完整教材' },
    { type: 'guideline', citation: 'Luis Fuentes V et al. ACVIM consensus statement on cardiomyopathies in cats. J Vet Intern Med. 2020;34(1):3-32.', relevance: '貓心肌病 CHF 治療共識' },
  ],
  is_current: true,
  created_at: now,
};

/** 抗心律不整藥物 — 治療型 */
const contentAntiarrhythmicDrugs: NodeContent = {
  id: 'CONTENT-L5-002',
  node_id: 'CARDIO-L5-002',
  version: 1,
  summary: '抗心律不整藥物依 Vaughan-Williams 分類分為四大類：Class I（Na⁺ 通道阻滯劑）、Class II（β-blockers）、Class III（K⁺ 通道阻滯劑/延長 ERP）與 Class IV（Ca²⁺ 通道阻滯劑）。獸醫心臟科最常用者包含 Lidocaine（緊急 VT）、Sotalol（慢性 VPC/VT）、Mexiletine（合併用藥）、Atenolol（貓 HCM/SVT）與 Diltiazem（AF 心率控制、貓 HCM）。選藥須依據心律不整類型與機轉。',
  learning_objectives: [
    '描述 Vaughan-Williams 四大類抗心律不整藥物的作用機轉',
    '選擇犬心室性心律不整（VPC/VT）的適當藥物',
    '制定犬心房顫動的心率控制方案',
    '列舉各類抗心律不整藥物在犬貓的劑量、副作用與監測要點',
    '辨識緊急心律不整（VT with hemodynamic compromise）的即時處理步驟',
  ],
  key_points: [
    'Lidocaine：犬緊急 VT 首選——2 mg/kg IV bolus（可重複至 8 mg/kg），再 CRI 40-80 µg/kg/min；貓禁忌或極低劑量',
    'Sotalol：犬慢性 VPC/VT 首選——Class II + III 雙重作用，1.5-3.5 mg/kg PO BID；延長 QT 需監測 ECG',
    'Mexiletine：Class IB，常與 Sotalol 合併使用——5-8 mg/kg PO TID；單用效果有限',
    'Atenolol：β1-selective blocker，貓 HCM（降低 HR/減少 SAM）與 SVT——6.25-12.5 mg/cat PO BID',
    'Diltiazem：Non-dihydropyridine Ca²⁺ blocker，AF 心率控制與貓 HCM——犬 1.5-3.5 mg/kg PO TID 或 ER 3-5 mg/kg PO BID',
    'Digoxin：AF 心率控制輔助——犬 0.005 mg/kg PO BID，治療窗窄（目標 0.8-1.2 ng/mL）',
    'Procainamide：犬急性 VT 的 Lidocaine 替代——6-8 mg/kg IV slowly 或 CRI 25-50 µg/kg/min',
    '所有抗心律不整藥物都有促心律不整（proarrhythmic）的潛在風險',
  ],
  body: `# 抗心律不整藥物 (Antiarrhythmic Drugs)





## 一、治療原理 (Treatment Principles)

### Vaughan-Williams 分類

### Class I：Na⁺ 通道阻滯劑

| 亞類 | 藥物 | 作用 | 獸醫應用 |
|------|------|------|---------|
| IA | [藥物:Procainamide] | 中度減慢傳導 + 延長 APD | 犬急性 VT（Lidocaine 替代）|
| IB | [藥物:Lidocaine] | 輕度減慢傳導 + 縮短 APD | 犬急性 VT 首選（IV 用藥）|
| IB | [藥物:Mexiletine] | Lidocaine 口服等效物 | 犬慢性 VPC/VT（常與 Sotalol 合用）|

### Class II：β-Adrenergic Blockers

| 藥物 | 選擇性 | 獸醫應用 | 劑量 |
|------|--------|---------|------|
| [藥物:Atenolol] | β1-selective | 貓 HCM/SVT、犬 SVT | 貓 6.25-12.5 mg/cat BID；犬 0.25-1 mg/kg BID |
| [藥物:Sotalol] | Non-selective + Class III | 犬 VPC/VT（首選）| 犬 1.5-3.5 mg/kg BID |
| Propranolol | Non-selective | 少用，已被 Atenolol 取代 | 犬 0.2-1 mg/kg TID |

### Class III：K⁺ 通道阻滯劑（延長 ERP）
- **Sotalol**：兼具 Class II + III 作用（上表）
- **Amiodarone**：獸醫使用有限（甲狀腺毒性、肝毒性風險高），僅用於難治性 VT

### Class IV：Ca²⁺ 通道阻滯劑

| 藥物 | 獸醫應用 | 劑量 |
|------|---------|------|
| [藥物:Diltiazem] | 犬 AF 心率控制、貓 HCM | 犬 1.5-3.5 mg/kg TID 或 ER 3-5 mg/kg BID |
| Verapamil | 少用（負性肌力作用較強）| 犬 1-5 mg IV slowly（僅緊急 SVT）|

### 其他
- **[藥物:Digoxin]**：AF 心率控制輔助——抑制 AV node 傳導（迷走神經作用增強）
- **Atropine**：迷走神經阻滯——竇性心搏過緩、AV block 緊急處理 0.02-0.04 mg/kg IV

## 二、藥物/方法比較 (Comparison)

### 臨床治療方案

### 犬緊急心室頻脈 (VT with hemodynamic compromise)
1. [藥物:Lidocaine] 2 mg/kg IV bolus（over 2 min），可每 5-10 min 重複至 8 mg/kg 總量
2. 有效後啟動 CRI 40-80 µg/kg/min
3. Lidocaine 無效 → [藥物:Procainamide] 6-8 mg/kg IV slowly 或 CRI 25-50 µg/kg/min
4. 穩定後轉為口服 [藥物:Sotalol] 1.5-3.5 mg/kg PO BID ± [藥物:Mexiletine] 5-8 mg/kg PO TID

### 犬慢性 VPC/VT（如杜賓犬 DCM）
- 首選：[藥物:Sotalol] 1.5-3.5 mg/kg PO BID
- 效果不佳加上：[藥物:Mexiletine] 5-8 mg/kg PO TID
- Holter 追蹤療效（目標：VPC 減少 > 80%、消除 R-on-T、消除 VT）

### 犬心房顫動 (AF) 心率控制
- [藥物:Diltiazem] ER 3-5 mg/kg PO BID + [藥物:Digoxin] 0.005 mg/kg PO BID
- 目標靜息心率 < 140-160 bpm
- 監測 Digoxin 血中濃度（0.8-1.2 ng/mL）

### 貓 SVT / HCM 相關心律不整
- [藥物:Atenolol] 6.25-12.5 mg/cat PO BID（首選）
- 替代：[藥物:Diltiazem] 30 mg/cat PO SID-BID (ER 劑型)

## 三、併發症與監控 (Complications & Monitoring)

| 藥物 | 促心律不整風險 | 其他副作用 | 監測要點 |
|------|-------------|----------|---------|
| Lidocaine | 高劑量可致 VF | 神經毒性（震顫、癲癇）——貓極度敏感 | ECG 持續監測；CRI 不超過 24-48h |
| Sotalol | QT 延長→Torsades | 低血壓、心搏過緩、負性肌力 | 啟始後 ECG 確認 QT；監測 HR |
| Mexiletine | 少見 | GI upset、神經症狀（共濟失調）| 症狀觀察為主 |
| Diltiazem | 低血壓、心搏過緩 | 便秘（少見）| 血壓、HR |
| Digoxin | 治療窗極窄→VPC、AV block | 食慾下降、嘔吐、腹瀉 | 谷值血中濃度 0.8-1.2 ng/mL |
| Amiodarone | QT 延長 | 甲狀腺毒性、肝毒性、肺纖維化 | 甲狀腺、肝功能 q3m |

## 四、預後影響 (Prognostic Impact)

- 杜賓犬 DCM 伴 VT：Sotalol 治療可延長 MST（~120d vs 未治療 ~40d），但整體預後仍差
- 犬 AF 合併 CHF：心率控制達標（< 140-160 bpm）與存活時間正相關
- 拳師犬 ARVC 伴 VPC：Sotalol 可減少 VPC >80%，但猝死風險無法完全消除

## 五、人醫借鑑 (Translational Insights)

| 人醫工具/概念 | 獸醫應用潛力 | 現況 |
|-------------|-------------|------|
| Dronedarone（改良型 Amiodarone）| 犬 AF 心率控制——毒性較 Amiodarone 低 | 人醫 ATHENA 試驗正面，獸醫無數據 |
| Flecainide（Class IC）| 犬特定 SVT 的藥物轉復 | 人醫常用，獸醫使用經驗極有限 |
| 植入式 ICD（自動去顫器）| 杜賓犬 DCM 猝死高風險族群保護 | 人醫成熟，獸醫因成本與體型極少使用 |
| 基因導向抗心律不整策略 | 已知致病基因突變的品種特異性治療選擇 | 概念階段 |

## 六、臨床爭議與知識空缺 (Controversies & Knowledge Gaps)

| 爭議議題 | 現況 | Evidence Level |
|---------|------|---------------|
| Sotalol 在非杜賓犬 VPC 的療效 | 大部分數據來自杜賓犬，其他品種外推性不確定 | Level III |
| 犬 AF 雙藥方案（Diltiazem+Digoxin）vs 單藥的優劣 | 少數回溯研究支持雙藥更有效，缺乏前瞻性比較 | Level III |
| Amiodarone 在犬的安全使用範圍 | 甲狀腺/肝毒性風險高，長期使用經驗不足 | Level IV |
| 「無症狀」VPC 的治療決策 | 除杜賓犬外，其他品種是否應治療 Holter 偵測的偶發 VPC | Level IV |

[圖片:Vaughan-Williams 分類與臨床選藥對應流程圖]`,
  clinical_pearl: 'Lidocaine 在貓的使用需特別謹慎——貓對 Lidocaine 的中樞神經毒性極為敏感，可能出現癲癇、肌肉震顫甚至死亡。如果必須用於貓的 VT，劑量不超過 0.25-0.5 mg/kg IV very slowly，且須密切監測神經系統反應。犬的標準劑量（2 mg/kg）在貓是致命劑量。',
  common_mistakes: [
    '使用犬的 Lidocaine 劑量於貓——貓對 Lidocaine 極度敏感，2 mg/kg 在貓可致死',
    '對犬 AF 嘗試藥物轉復（rhythm control）——犬 AF 幾乎都是永久性，應以心率控制為治療目標',
    '忽略 Digoxin 的窄治療窗——未監測血中濃度，導致毒性（食慾下降、嘔吐、心律不整加重）',
    '在低鉀血症狀態下使用抗心律不整藥物——低鉀會增加促心律不整風險，應先矯正電解質',
    '未考慮 Sotalol 的負性肌力作用——在嚴重 CHF/收縮功能極差時需謹慎或避免使用',
  ],
  disease_data: null,
  diagnostic_data: null,
  procedure_data: null,
  visual_placeholders: [
    { position: 'Vaughan-Williams 段落', type: 'comparison_table', description: '四大類抗心律不整藥物作用機轉比較表' },
    { position: '臨床治療方案段落', type: 'flowchart', description: '犬心律不整治療藥物選擇決策流程圖' },
  ],
  interactive_placeholders: [
    { position: '全文', type: 'decision_tree', description: '輸入心律不整類型自動推薦藥物方案' },
  ],
  drug_api_links: ['Lidocaine', 'Sotalol', 'Mexiletine', 'Procainamide', 'Atenolol', 'Diltiazem', 'Digoxin', 'Amiodarone'],
  references: [
    { type: 'textbook', citation: 'Ware WA. Cardiovascular Disease in Small Animal Medicine. Manson Publishing, 2011. Chapter 4: Antiarrhythmic Therapy.', relevance: '抗心律不整藥物完整教材' },
    { type: 'journal', citation: 'Meurs KM et al. Comparison of the effects of four antiarrhythmic treatments for familial ventricular arrhythmias in Boxers. J Am Vet Med Assoc. 2002;221(4):522-527.', relevance: '犬抗心律不整藥物療效比較' },
    { type: 'textbook', citation: 'Tilley LP, Smith FWK. Electrocardiography in Small Animal Practice, 5th ed. Elsevier, 2016. Chapter: Antiarrhythmic Drug Therapy.', relevance: '心律不整藥物治療與 ECG 監測' },
    { type: 'guideline', citation: 'Keene BW, Atkins CE, Bonagura JD, et al. "ACVIM consensus guidelines for the diagnosis and treatment of myxomatous mitral valve disease in dogs." J Vet Intern Med. 2019;33(3):1127-1140.', relevance: 'MMVD 診斷與治療共識指引' },
  ],
  is_current: true,
  created_at: now,
};

/** 心包膜穿刺術 — 操作型 */
const contentPericardiocentesis: NodeContent = {
  id: 'CONTENT-L5-003',
  node_id: 'CARDIO-L5-003',
  version: 1,
  summary: '心包膜穿刺術（pericardiocentesis）是治療心臟壓塞（cardiac tamponade）的緊急救命操作。透過經皮穿刺引流心包膜囊內積液，可迅速解除心臟壓迫、恢復心輸出量。標準入路為右側第 4-6 肋間心臟凹痕處，在心超與 ECG 引導下進行。操作需熟悉局部解剖、正確選擇器材並掌握併發症處理。',
  learning_objectives: [
    '列舉心包膜穿刺術的適應症與相對禁忌症',
    '描述穿刺術的標準步驟（備皮→定位→穿刺→引流→送檢）',
    '執行 ECG 引導下的穿刺操作並辨識穿刺針觸碰心肌的徵象',
    '分析引流液以鑑別病因（PCV、凝固測試、細胞學）',
    '處理穿刺術的常見併發症',
  ],
  key_points: [
    '適應症：心臟壓塞（cardiac tamponade）導致血流動力學不穩定',
    '最佳入路：右側第 4-6 肋間，心臟凹痕（cardiac notch），避開肺組織',
    '器材：14-16G over-the-needle catheter 或 pigtail catheter，三路開關，注射器，ECG 監測',
    '心超引導可提升安全性：確認積液位置與最佳穿刺點',
    'ECG 監測必要：穿刺針觸碰心肌時出現 VPC 或 ST 段變化——立即停止推進',
    '引流液分析三步驟：(1) PCV (2) 凝固測試（不凝固=慢性，凝固=急性/醫源性）(3) 細胞學',
    '最嚴重併發症：心肌穿刺導致心室頻脈或致命性心室顫動',
    '引流後立即重複心超——積液清除後更容易偵測心臟腫塊',
  ],
  body: `# 心包膜穿刺術 (Pericardiocentesis)

## 一、治療原理 (Treatment Principles)


### 適應症與禁忌症
### 適應症
- 心超確認心包膜積液伴心臟壓塞徵象（RA diastolic collapse）
- 血流動力學不穩定（低血壓、脈搏弱、頸靜脈怒張）
- 即使暫時穩定，大量積液亦應考慮引流以緩解症狀

### 相對禁忌症
- 少量積液無壓塞徵象（可追蹤觀察）
- 嚴重凝血障礙（需先矯正）
- 已知心臟腫塊位於穿刺路徑上

### 操作步驟
### 設備準備
- 14-16G over-the-needle catheter（犬 > 10 kg）或 18G（小型犬/貓）
- 延長管、三路開關（three-way stopcock）
- 20-60 mL 注射器
- ECG 監測設備
- 心超（引導用）
- 引流液收集容器（EDTA tube、plain tube、培養瓶）
- 無菌手套、消毒液、局部麻醉劑

### 步驟
1. **體位**：右側臥或站立（站立更易操作但需良好保定）
2. **備皮消毒**：右側第 3-7 肋間，外科級剃毛與消毒
3. **定位**：心超確認最大積液囊區域（通常第 4-6 肋間），ECG 連接
4. **局部麻醉**：Lidocaine 2% 皮下及肋間肌浸潤（清醒操作時）
5. **穿刺**：在肋骨顱緣（避開肋間血管神經）進針，角度略向心臟方向
6. **推進**：緩慢推進，持續負壓抽吸——進入心包膜囊時會感到「落空感」且開始回抽到液體
7. **置入導管**：確認位於心包膜囊後，推進外鞘（catheter），拔除穿刺針
8. **引流**：連接三路開關與注射器，緩慢引流——觀察動物呼吸與 ECG
9. **完全引流**：持續引流至無法再抽出液體，心超確認積液清除
10. **送檢**：PCV/TS、凝固測試、細胞學、細菌培養（疑似感染時）

### ECG 監測重點
- 穿刺針觸碰心外膜：出現 VPC（通常為單發）→ 暫停推進，稍退針
- 持續 VPC 或 VT：立即停止並退針
- 穿刺過程中 ST segment 抬高：穿刺針已接觸心肌表面

### 引流液分析
| 檢查 | 結果 | 意義 |
|------|------|------|
| PCV | 接近周邊血液 | 出血性（HSA、特發性均可能）|
| PCV | 明顯低於周邊血液 | 漏出液或修正漏出液 |
| 凝固測試 | 不凝固 | 慢性心包膜出血（纖維蛋白已去除）|
| 凝固測試 | 凝固 | 急性出血或醫源性穿刺到心腔 |
| 細胞學 | 反應性間皮細胞 | 非特異性（腫瘤與非腫瘤均可見）|

[圖片:心包膜穿刺術步驟示意圖——穿刺入路與 ECG 引導]

## 二、藥物/方法比較 (Comparison)
| 方法 | 適應症 | 優點 | 缺點 |
|------|--------|------|------|
| 經皮穿刺引流 | 心臟壓塞緊急處理 | 快速、微創、可在 ICU 執行 | 可能需反覆操作、無法處理病因 |
| 心包膜切除術（Subtotal pericardiectomy）| 反覆特發性 PE（≥3 次）| 根治性——消除再蓄積 | 需全身麻醉與手術團隊 |
| 經胸腔鏡心包膜開窗 | 替代開胸手術的微創方式 | 創傷小、恢復快 | 需腔鏡設備與經驗 |
| 球囊心包膜開窗（Balloon pericardiotomy）| 惡性 PE 姑息治療 | 透視引導下完成、無需全麻 | 獸醫經驗極有限 |

## 三、併發症與監控 (Complications & Monitoring)
### 術中併發症
| 併發症 | 發生率 | 處理 |
|--------|--------|------|
| VPC（穿刺針觸碰心肌）| 常見（~20%）| 暫停推進並退針；通常自行停止 |
| 心肌穿刺 | 少見（<5%）| 退針；小口徑穿孔多自行閉合 |
| 冠狀動脈損傷 | 罕見 | 心超監測新生積液，準備再穿刺 |
| 肺穿刺/氣胸 | 少見（右側入路時）| 通常輕微自行吸收 |

### 術後監控
- 穿刺後 2-4 小時心超複檢：排除再蓄積
- ECG 持續監測 4-6 小時
- 特發性 PE：1 週、1 個月、3 個月回診追蹤
- 惡性 PE（HSA）：中位再蓄積時間 ~1-3 個月

## 四、預後影響 (Prognostic Impact)
| 病因 | 穿刺後預後 | MST |
|------|----------|-----|
| 特發性 PE | 良好至中等；~50% 單次引流可控制 | > 1-2 年（部分永不復發）|
| 心臟血管肉瘤（HSA）| 差；僅姑息 | 未化療 ~1-2 月，化療 ~4-6 月 |
| 心基底部化學受體瘤 | 中等；生長緩慢 | 反覆引流可維持 1-2 年 |
| 間皮瘤 | 差 | ~3-6 月 |
| 感染性心包膜炎 | 取決於病原與是否同時手術引流 | 變異大 |

## 五、人醫借鑒 (Translational Insights)
| 人醫工具/概念 | 獸醫應用潛力 | 現況 |
|-------------|-------------|------|
| 心包膜內化療（Intrapericardial cisplatin）| 惡性 PE 局部化療延長姑息期 | 犬有少數研究支持可行性，毒性需注意 |
| CT 引導穿刺 | 複雜位置 PE 或心包膜囊房的精準穿刺 | 技術可行但獸醫很少需要（超音波已足夠） |
| 心包膜開窗微創化（VATS pericardial window）| 經胸腔鏡心包膜開窗取代開胸手術 | 人醫標準術式，獸醫腔鏡經驗漸增 |
| 液態切片（liquid biopsy）PE 腫瘤分子分析 | PE 液 cfDNA/ctDNA 鑑別良惡性 | 獸醫腫瘤學研究中，臨床應用前 |

## 六、臨床爭議與知識空缺 (Controversies & Knowledge Gaps)
| 爭議議題 | 現況 | Evidence Level |
|---------|------|---------------|
| 特發性 PE 反覆發作幾次應建議手術（心包膜切除）| 多數建議 ≥3 次，但尚無統一標準 | Level IV |
| PE 細胞學對腫瘤鑑別的敏感度太低（~50%）| 需更好的生物標記——cTnI、cfDNA、免疫組織化學正在研究 | Level III |
| 穿刺前是否應先輸液穩定血壓 | 前負荷支持理論上有益，但可能延遲引流造成風險 | Level IV |
| 惡性 PE 穿刺後是否常規加化療 | 犬 HSA 化療（Doxorubicin ± Cyclophosphamide）改善 MST 的證據等級有限 | Level III |`,
  clinical_pearl: '穿刺過程中的「凝固測試」是即時判斷的實用技巧：將引流液滴入空的紅蓋管觀察是否凝固。心包膜囊內的慢性積血因心臟持續擺動已去除纖維蛋白，不會凝固。如果引流液凝固，表示可能是 (1) 急性出血或 (2) 穿刺針已進入心腔——此時應立即停止抽吸、退出穿刺針並重新評估。',
  common_mistakes: [
    '未進行 ECG 監測就直接穿刺——穿刺針觸碰心肌可導致致命性 VT/VF',
    '從左側穿刺——左側有肺組織覆蓋心臟，氣胸風險較高；右側心臟凹痕（cardiac notch）是安全入路',
    '穿刺過快未注意「落空感」——可能直接穿透心包膜刺入心肌',
    '引流後未重複心超——積液清除後是偵測心臟/心基底部腫塊的最佳時機',
    '僅依賴引流液細胞學排除腫瘤——心包膜積液的細胞學對腫瘤偵測敏感度僅約 50%',
  ],
  disease_data: null,
  diagnostic_data: null,
  procedure_data: {
    equipment: [
      { name: '14-16G Over-the-needle catheter', description: '穿刺用導管（犬 > 10 kg 用 14G，小型犬/貓用 16-18G）', required: true },
      { name: '三路開關（Three-way stopcock）', description: '連接導管與注射器，控制引流方向', required: true },
      { name: '20-60 mL 注射器', description: '用於負壓抽吸引流', required: true },
      { name: 'ECG 監測器', description: '穿刺過程中持續監測心律', required: true },
      { name: '超音波機', description: '引導穿刺定位（強烈建議）', required: false },
      { name: '延長管', description: '連接導管與三路開關，增加操作便利性', required: true },
      { name: '引流液收集管', description: 'EDTA tube（細胞學）、plain tube（凝固測試）、培養瓶', required: true },
      { name: '局部麻醉劑（Lidocaine 2%）', description: '穿刺部位局部浸潤麻醉', required: true },
    ],
    patient_preparation: '(1) 建立靜脈通路並開始晶體液輸液 10-20 mL/kg bolus 維持前負荷。(2) 右側臥位或站立姿勢（依動物配合度決定）。(3) 右側第 3-7 肋間外科級剃毛與消毒。(4) ECG 電極連接並開始監測。(5) 心超快速掃描確認積液位置與最佳穿刺點。(6) 如為清醒操作，穿刺部位 Lidocaine 2% 局部浸潤麻醉。(7) 大多數心臟壓塞犬隻配合度尚可，不需全身麻醉。',
    step_by_step: [
      { step_number: 1, title: '定位穿刺點', description: '心超引導確認積液最多的位置，通常為右側第 4-5 肋間，肘關節至肩關節之間的心臟凹痕區域。標記穿刺點。', tips: ['心超探頭標記最大積液囊位置', '避開可見的肋間血管'], image_placeholder: '穿刺點體表定位照片' },
      { step_number: 2, title: '穿刺進針', description: '導管連接三路開關與注射器。在肋骨顱緣進針（避開肋間動脈、靜脈與神經位於肋骨尾緣），角度略向心臟方向。持續輕柔負壓抽吸推進。', tips: ['進針時維持持續輕柔負壓', '速度緩慢，每推進 2-3mm 暫停感受阻力變化'], image_placeholder: '進針角度與方向示意圖' },
      { step_number: 3, title: '確認進入心包膜囊', description: '穿過心包膜時會感受到輕微「落空感」（pop），同時開始回抽到液體（通常為血色至暗紅色液體）。確認後推進外鞘，拔除穿刺針。', tips: ['注意「落空感」是關鍵指標', '回抽到液體後立即停止推進穿刺針'], image_placeholder: null },
      { step_number: 4, title: '引流', description: '透過三路開關連接注射器，緩慢引流。每次抽吸 20-60 mL，觀察動物呼吸改善情況與 ECG。持續引流直到心超確認積液清除。', tips: ['引流過程中持續監測 ECG', '大量引流後動物呼吸應明顯改善——如無改善需重新評估'], image_placeholder: null },
      { step_number: 5, title: '引流液送檢與後續評估', description: '引流液分裝送 PCV/TS、凝固測試、細胞學與必要的培養。拔除導管，穿刺部位加壓。立即重複心超評估——積液清除後搜尋心臟/心基底部腫塊。', tips: ['凝固測試在床邊即可完成', '引流後心超是偵測腫塊的最佳時機'], image_placeholder: null },
    ],
    complications: [
      { complication: '心室性心律不整（VPC/VT）', frequency: '常見（穿刺針觸碰心肌時）', management: '暫停推進並稍退針，通常 VPC 會自行停止。持續 VT 則完全退針，必要時 Lidocaine 2 mg/kg IV。' },
      { complication: '心肌穿刺', frequency: '少見', management: '立即退針。小口徑穿刺（14-16G）造成的心肌穿孔通常可自行閉合。監測是否有新的積液蓄積。' },
      { complication: '冠狀動脈損傷', frequency: '罕見', management: '嚴重時可導致急性心包膜出血。持續心超監測，準備再次穿刺引流。' },
      { complication: '肺葉穿刺/氣胸', frequency: '少見（右側入路時）', management: '通常為輕微，自行吸收。大量氣胸需胸管引流。左側入路風險較高故避免使用。' },
      { complication: '感染', frequency: '罕見（無菌操作下）', management: '術後監測體溫。疑似感染時引流液培養並給予經驗性抗生素。' },
    ],
    post_procedure: '(1) 穿刺部位加壓 5-10 分鐘止血。(2) 繼續輸液維持血壓穩定。(3) 引流後 2-4 小時心超複檢（排除再蓄積）。(4) ECG 持續監測 4-6 小時。(5) 出院後 1 週回診心超追蹤。(6) 引流液分析結果追蹤——指導後續病因治療（腫瘤手術/化療 vs 特發性追蹤）。',
    tips_and_tricks: [
      '右側入路是標準選擇——心臟凹痕處無肺組織覆蓋，安全性最高',
      'Over-the-needle catheter 較 bare needle 安全——置入外鞘後柔軟導管不易損傷心肌',
      '引流速度不需太快——緩慢引流 50-100 mL 後動物通常已明顯改善',
      '引流液顏色與 PCV 不代表病因——慢性特發性 PE 的引流液 PCV 可高達 40-60%',
      '如果引流液凝固——暫停操作，可能已穿入心腔，退出重新評估',
      '引流完成後是做完整心超的最佳時機——此時無積液干擾，腫塊更容易辨識',
    ],
  },
  visual_placeholders: [
    { position: '步驟段落', type: 'annotated_image', description: '心包膜穿刺術右側入路解剖標示圖' },
    { position: '全文', type: 'animated_diagram', description: '穿刺術逐步動態操作示意圖' },
  ],
  interactive_placeholders: [
    { position: '步驟段落', type: 'interactive_overlay', description: '模擬穿刺操作互動練習——選擇穿刺點與判斷 ECG 變化' },
  ],
  drug_api_links: ['Lidocaine'],
  references: [
    { type: 'textbook', citation: 'Ware WA. Cardiovascular Disease in Small Animal Medicine. Manson Publishing, 2011. Chapter: Pericardial Disease and Pericardiocentesis.', relevance: '心包膜穿刺術標準操作教材' },
    { type: 'journal', citation: 'Shaw SP, Rush JE. Canine pericardial effusion: diagnosis, treatment, and prognosis. Compend Contin Educ Vet. 2007;29(7):405-411.', relevance: '犬心包膜穿刺術臨床操作指南' },
    { type: 'journal', citation: 'Stafford Johnson M et al. Pericardial effusion in dogs: 29 cases. J Small Anim Pract. 2004;45(11):546-553.', relevance: '犬心包膜穿刺術臨床結果回溯分析' },
    { type: 'guideline', citation: 'Keene BW, Atkins CE, Bonagura JD, et al. "ACVIM consensus guidelines for the diagnosis and treatment of myxomatous mitral valve disease in dogs." J Vet Intern Med. 2019;33(3):1127-1140.', relevance: 'MMVD 診斷與治療共識指引' },
  ],
  is_current: true,
  created_at: now,
};

/** 先天性心臟發育異常機轉 — 機轉型 */
const contentCongenitalMechanism: NodeContent = {
  id: 'CONTENT-L2-004',
  node_id: 'CARDIO-L2-004',
  version: 1,
  summary: '先天性心臟缺陷（Congenital Heart Defects, CHD）源於胚胎期心臟發育異常，涵蓋中隔缺損（VSD/ASD）、大血管異常（PDA、PRAA）與流出道阻塞（PS、SAS）。犬先天性心臟病盛行率約 0.5-0.8%，品種基因遺傳為最主要風險因子。理解心臟胚胎學與發育異常機轉是診斷與治療先天性心臟病的基礎。',
  learning_objectives: [
    '描述心臟胚胎發育的關鍵時期與主要事件（心管形成、心環形成、中隔分隔、瓣膜形成）',
    '解釋心室中隔缺損（VSD）與心房中隔缺損（ASD）的胚胎學成因',
    '說明動脈導管未閉（PDA）的正常閉鎖機轉與未閉病理',
    '描述肺動脈瓣狹窄（PS）與主動脈下狹窄（SAS）的發育異常機轉',
    '列舉常見先天性心臟病的品種遺傳傾向',
  ],
  key_points: [
    '心臟胚胎發育關鍵期：犬妊娠第 17-25 天為心臟中隔形成期，此階段最易受致畸因子影響',
    'VSD 最常見位置：膜周部（perimembranous），源於心內膜墊（endocardial cushion）與肌性中隔融合不全',
    'PDA 機轉：動脈導管（ductus arteriosus）出生後應因血氧升高與前列腺素下降而收縮閉鎖，PDA 為此過程失敗',
    'PS 機轉：肺動脈瓣發育不全（瓣葉融合/增厚/發育不良），英國鬥牛犬多為瓣膜發育不良型（dysplastic type）',
    'SAS 機轉：左心室流出道（LVOT）下方纖維肌性環或隆起，多為遺傳性（多基因模式）',
    'PRAA（持續性右主動脈弓）：第四主動脈弓左右發育異常，右弓持續→食道/氣管受血管環壓迫',
    '品種遺傳：PDA（馬爾濟斯、博美、德國牧羊犬）、PS（英國鬥牛犬、拳師犬）、SAS（金毛、紐芬蘭、拳師犬）',
  ],
  body: `# 先天性心臟發育異常機轉 (Congenital Heart Defect Pathogenesis)

## 一、核心概念與機轉 (Core Concept & Mechanism)

### 心臟胚胎發育概論

心臟是哺乳動物胚胎中最早發育的功能器官。犬胚胎心臟發育的關鍵時程如下：

| 階段 | 犬妊娠天數 | 發育事件 | 臨床關聯 |
|------|-----------|---------|---------|
| 心管形成 | 第 14-16 天 | 心臟前體細胞形成原始心管 | 嚴重缺陷多致胚胎死亡 |
| 心環形成 | 第 16-18 天 | 心管右旋（D-looping）形成 S 形 | Dextrocardia 為此階段異常 |
| 中隔分隔 | 第 18-25 天 | 房室中隔、心內膜墊形成 | VSD/ASD 的關鍵窗口期 |
| 瓣膜形成 | 第 20-28 天 | 半月瓣與房室瓣分化 | PS/SAS 瓣膜異常 |
| 大血管重塑 | 第 22-30 天 | 主動脈弓系統選擇性退化 | PDA/PRAA |
| 中隔完成 | 第 25-35 天 | 卵圓孔形成、中隔完全分隔 | ASD（卵圓孔未閉） |

### 中隔缺損機轉

#### 心室中隔缺損 (VSD)
心室中隔由四個組成部分融合形成：(1) 肌性中隔（由下向上生長）、(2) 心內膜墊（endocardial cushion，由上向下生長）、(3) 漏斗部中隔（conotruncal septum）、(4) 膜性部分（最後閉合）。

| VSD 類型 | 佔比 | 胚胎學成因 | 臨床意義 |
|---------|------|----------|---------|
| 膜周部（perimembranous） | 70-80% | 心內膜墊與肌性中隔融合不全 | 最常見，可能自發縮小 |
| 肌性（muscular） | 5-10% | 肌性中隔發育空洞 | 多為小型，血流動力學影響輕微 |
| 漏斗部（outlet/supracristal） | 5-10% | 漏斗部中隔對齊不良 | 可合併主動脈瓣脫垂 |
| 心內膜墊型（inlet） | <5% | 心內膜墊完全缺失 | 可合併 ASD（AVSD/心內膜墊缺損） |

血流動力學影響：左→右分流 → 肺血流增加 → 肺動脈壓升高 → 右心容量過載。大型 VSD 長期可導致 Eisenmenger syndrome（肺高壓→分流逆轉→發紺）。

#### 心房中隔缺損 (ASD)
原發孔 ASD（primum type）：心內膜墊缺損的一部分。繼發孔 ASD（secundum type）：卵圓孔區域的 septum primum 過度吸收或 septum secundum 發育不足。犬以繼發孔型較常見。

### 大血管異常機轉

#### 動脈導管未閉 (PDA)
動脈導管在胎兒期連接肺動脈幹與降主動脈，分流血液繞過未充氣肺臟。出生後正常閉鎖過程：

出生 → 肺泡擴張 → PaO₂ 上升 → 導管平滑肌收縮（O₂ 敏感性收縮）→ 功能性閉鎖（出生後 12-72 小時）→ 內膜增生 + 纖維化 → 解剖性閉鎖（動脈韌帶形成）。

PDA 病理：導管壁平滑肌對氧氣收縮反應異常 + 內膜增生不足 → 持續性開放 → 主動脈→肺動脈持續左→右分流 → 肺過度灌流 + 左心容量過載。

遺傳模式：多基因遺傳，品種好發性高度提示遺傳因素。

#### 持續性右主動脈弓 (PRAA)
正常胚胎發育中，左側第四主動脈弓發育為主動脈弓，右側退化。PRAA 為右側第四弓持續發育為主動脈弓 → 主動脈弓在右側 + 動脈韌帶在左側 → 食道與氣管被血管環包圍壓迫 → 食道阻塞。好發品種：德國牧羊犬、愛爾蘭蹲獵犬、大丹犬。

### 流出道阻塞機轉

#### 肺動脈瓣狹窄 (PS)
兩種主要型態：

| 型態 | 病理特徵 | 好發品種 | 治療反應 |
|------|---------|---------|---------|
| 瓣膜融合型（Type A） | 瓣葉薄但交界處融合，開口受限 | 比格犬、可卡犬 | 球囊擴張術效果佳 |
| 瓣膜發育不良型（Type B） | 瓣葉增厚、不動、瓣環小 | 英國鬥牛犬、拳師犬 | 球囊擴張效果差，可能需手術 |

胚胎學：半月瓣由心臟膠質（cardiac jelly）內的間質細胞分化形成。Type A 為瓣葉融合過程異常；Type B 為間質細胞分化與重塑不良導致瓣葉增厚僵硬。

#### 主動脈下狹窄 (SAS)
離散型纖維環（discrete fibrous ring）或隧道型狹窄（tunnel-like stenosis）位於主動脈瓣下方的左心室流出道（LVOT）。

病理發生假說：出生後 LVOT 異常血流模式 → 內皮損傷 → 纖維組織增生 → 環形狹窄逐漸加重。SAS 在出生時可能不存在或輕微，隨成長而惡化——這支持出生後進展性假說（postnatal progressive hypothesis）。

遺傳模式：金毛犬、紐芬蘭犬為多基因遺傳模式。

## 二、判讀要點 (Interpretation Essentials)

### 先天性心臟病的品種遺傳地圖

| 缺陷 | 高風險品種 | 遺傳模式 | 台灣流行病學 |
|------|----------|---------|------------|
| PDA | 馬爾濟斯、博美、德國牧羊犬、CKCS | 多基因 | 台灣小型犬飼養密度高，PDA 為最常見 CHD |
| PS | 英國鬥牛犬、法國鬥牛犬、拳師犬 | 多基因 | 短頭犬種近年飼養量增加 |
| SAS | 金毛犬、紐芬蘭犬、拳師犬、德國牧羊犬 | 多基因 | 金毛為台灣常見大型犬 |
| VSD | 英國鬥牛犬、西高地白梗 | 不確定 | 單獨 VSD 可能輕微而漏診 |
| PRAA | 德國牧羊犬、愛爾蘭蹲獵犬 | 不確定 | 以嘔吐/反流就診，需早期手術 |

### 血流動力學分類框架

| 類型 | 代表疾病 | 病理生理 | 臨床特徵 |
|------|---------|---------|---------|
| 左→右分流 | PDA、VSD、ASD | 肺過度灌流、左心容量過載 | 連續性/收縮期雜音、運動不耐 |
| 流出道阻塞 | PS、SAS | 壓力過載、同心性肥大 | 收縮期噴射雜音、暈厥風險 |
| 血管環 | PRAA | 食道/氣管受壓 | 離乳後嘔吐/反流、巨食道 |

## 三、常見陷阱 (Common Pitfalls)

- 輕度 SAS 的心雜音可能被誤認為「功能性雜音（innocent murmur）」——在好發品種中，任何收縮期雜音都應進一步心超評估
- PDA 的連續性雜音在嚴重肺高壓時可能僅剩收縮期成分——失去舒張期成分反而代表病情更嚴重
- 英國鬥牛犬的呼吸困難容易歸因於短頭症候群而忽略 PS 的貢獻——兩者常共存
- VSD 小缺損的雜音反而比大缺損響亮（高速噴射流）——雜音強度與缺損嚴重度不成正比

## 四、人醫借鑒 (Translational Insights)

| 人醫工具/概念 | 獸醫應用潛力 | 現況 |
|-------------|-------------|------|
| 胎兒心臟超音波篩檢 | 犬繁殖前遺傳篩檢 + 胎兒評估 | 人醫常規，獸醫研究階段 |
| 3D 列印心臟模型用於術前規劃 | 複雜 CHD 手術規劃 | 人醫已商業化，獸醫實驗報告 |
| 經導管 VSD 封堵（Amplatzer device） | 犬膜周部 VSD 介入封堵 | 犬已有成功案例報告 |
| 基因面板篩檢 CHD 易感性 | 品種 CHD 遺傳風險評估 | 犬遺傳學研究進行中但尚無臨床基因面板 |

## 五、臨床爭議 (Clinical Controversies)

| 爭議議題 | 正方觀點 | 反方觀點 | Evidence Level |
|---------|---------|---------|---------------|
| SAS 繁殖限制建議 | 確診犬不應繁殖（OFA 建議） | 輕度 SAS 與功能性雜音鑑別困難，可能過度限制 | Level III |
| PS dysplastic type 的球囊擴張 | 即使效果有限仍值得嘗試 | 手術（patch graft valvuloplasty）效果更可預期 | Level III |
| 輕度 VSD 是否需要長期追蹤 | 監測肺高壓發展與心內膜炎風險 | 小型限制性 VSD 長期預後良好，過度追蹤不符成本效益 | Level IV |
| PDA 手術最佳時機 | 越早越好（<6 月齡）避免不可逆重塑 | 待動物稍大（>2 kg）手術風險更低 | Level III |

[圖片:心臟胚胎發育時序與常見先天性缺陷對應圖]`,
  clinical_pearl: '先天性心臟病的早期診斷至關重要：PDA 犬若在出現心衰竭前接受手術閉合（外科結紮或 ACDO 導管封堵），預後與正常犬幾乎無異。然而一旦發展至 Eisenmenger syndrome（肺高壓→右→左分流→發紺），手術即為禁忌。因此，所有幼犬在首次疫苗就診時的仔細心臟聽診是篩檢先天性心臟病的關鍵——PDA 的連續性「機械樣」雜音（continuous "machinery" murmur）在左腋下聽診最為明顯，一旦辨識出應立即轉診心臟專科。\n\n【台灣臨床現況】台灣小型犬飼養比例高，PDA 為最常見的先天性心臟病。近年多家教學醫院已引進 ACDO（Amplatz Canine Duct Occluder）導管封堵技術，為 PDA 治療提供微創選項。PS 的球囊擴張術亦已普遍開展。',
  common_mistakes: [
    '將先天性心雜音歸類為「功能性」而未安排心臟超音波——在好發品種中，收縮期雜音需排除 SAS/PS',
    '忽略 PDA 發紺型（reverse PDA）的存在——差異性發紺（後肢 PaO₂ < 前肢）是 reverse PDA 的特徵',
    '對英國鬥牛犬的 PS 一律建議球囊擴張——dysplastic type 對球囊擴張反應差，需先以心超確認型態',
    'PRAA 術後忽略巨食道的長期管理——即使手術解除血管環壓迫，部分犬的食道擴張為永久性',
  ],
  disease_data: null,
  diagnostic_data: null,
  procedure_data: null,
  visual_placeholders: [
    { position: '胚胎發育段落', type: 'timeline', description: '心臟胚胎發育時序與各階段先天性缺陷對應圖' },
    { position: '血流動力學段落', type: 'animated_diagram', description: '左→右分流與流出道阻塞的血流動態比較示意圖' },
  ],
  interactive_placeholders: [
    { position: '品種遺傳段落', type: 'interactive_overlay', description: '輸入品種名稱查詢先天性心臟病風險圖譜' },
  ],
  drug_api_links: [],
  references: [
    { type: 'textbook', citation: 'Schrope DP. Prevalence of congenital heart disease in 76,301 mixed-breed dogs and 57,025 mixed-breed cats. J Vet Cardiol. 2015;17(3):192-202.', relevance: '犬貓先天性心臟病盛行率與類型分布' },
    { type: 'textbook', citation: 'Tobias AH, Johnston SA. Veterinary Surgery: Small Animal, 2nd ed. Elsevier, 2018. Chapter: Congenital Heart Disease.', relevance: '先天性心臟病外科治療教材' },
    { type: 'guideline', citation: 'Bussadori C, Amberger C, Le Bobinnec G, Lombard CW. Guidelines for the echocardiographic studies of suspected subaortic and pulmonic stenosis. J Vet Cardiol. 2000;2(1):15-22.', relevance: 'SAS 與 PS 超音波診斷指引' },
    { type: 'journal', citation: 'Oliveira P et al. Retrospective review of congenital heart disease in 976 dogs. J Vet Intern Med. 2011;25(3):477-483.', relevance: '犬先天性心臟病回溯性流行病學研究' },
  ],
  is_current: true,
  created_at: now,
};

/** 先天性心臟病 — 疾病型 */
const contentCongenitalHD: NodeContent = {
  id: 'CONTENT-L3-006',
  node_id: 'CARDIO-L3-006',
  version: 1,
  summary: '犬先天性心臟病以動脈導管未閉（PDA）、肺動脈瓣狹窄（PS）與主動脈下狹窄（SAS）為三大最常見缺陷。PDA 為持續性左→右分流導致左心容量過載，特徵為左腋下連續性「機械樣」雜音，外科結紮或 ACDO 導管封堵為治療標準。PS 以收縮期噴射雜音表現，嚴重者（壓力梯度 > 80 mmHg）建議球囊擴張術。SAS 預後最差，目前以 atenolol 控制心率與降低猝死風險為主。',
  learning_objectives: [
    '辨識 PDA、PS、SAS 各自的特徵性心雜音位置與性質',
    '描述 PDA 手術與介入治療的適應症與預期結果',
    '應用壓力梯度分級系統評估 PS 嚴重度並制定治療計畫',
    '說明 SAS 的預後不良因子與長期管理策略',
    '制定先天性心臟病幼犬的轉診與追蹤計畫',
  ],
  key_points: [
    'PDA 是犬最常見的先天性心臟病（佔 CHD 約 25-30%），好發品種：馬爾濟斯、博美、德國牧羊犬、CKCS',
    'PDA 特徵：左腋下連續性「機械樣」雜音（continuous machinery murmur）、跳躍脈（bounding pulse）',
    'PDA 治療首選：ACDO 導管封堵（微創，成功率 >95%）或外科結紮；未治療者 60% 在 1 歲前死於 CHF',
    'PS 嚴重度分級：輕度（梯度 <50 mmHg）→ 追蹤；中度（50-80）→ 個別化；重度（>80）→ 球囊擴張術',
    'PS 好發品種：英國鬥牛犬（多為 dysplastic type）、拳師犬、法國鬥牛犬、比格犬',
    'SAS 好發品種：金毛犬、紐芬蘭犬、拳師犬；離散型纖維環為最常見型態',
    'SAS 治療：Atenolol 0.5-1 mg/kg PO BID（降低心率、減少心肌氧需求、降低猝死風險），球囊擴張效果有限且短暫',
    'SAS 預後：重度（梯度 >80 mmHg）中位存活約 19 個月；輕度長期預後良好',
  ],
  body: `# 先天性心臟病：PDA / PS / SAS (Congenital Heart Disease)

## 一、病理機制與臨床表現 (Pathophysiology & Clinical Signs)

### 動脈導管未閉 (Patent Ductus Arteriosus, PDA)

#### 病理生理
動脈導管未閉 → 主動脈壓 > 肺動脈壓 → 持續性左→右分流 → 肺血流增加 → 肺靜脈回流↑ → 左心房擴大 → 左心室容量過載（離心性肥大）→ 左心衰竭（肺水腫）。

未治療自然病程：約 60% 在 1 歲前發展充血性心衰竭（CHF），中位存活時間顯著縮短。

| 臨床表現 | 發生率 | 特徵 |
|---------|--------|------|
| 連續性「機械樣」雜音 | >95% | 左腋下最響，Grade IV-VI/VI |
| 跳躍脈 (bounding pulse) | 80-90% | 舒張期分流致脈壓差增大 |
| 運動不耐 | 50-70% | 左心容量過載，心輸出量儲備下降 |
| 呼吸急促/肺水腫 | 30-50% | CHF 表現，晚期出現 |
| 心房顫動 | 10-20% | 嚴重 LA 擴大合併症 |

#### 好發品種與信號
雌性犬發生率約為雄性的 2-3 倍。好發品種：馬爾濟斯、博美、玩具貴賓犬、德國牧羊犬、CKCS、喜樂蒂牧羊犬。通常在首次疫苗就診時發現心雜音。

#### Reverse PDA（逆向 PDA）
長期肺過度灌流 → Eisenmenger syndrome → 肺動脈壓 > 主動脈壓 → 右→左分流 → 差異性發紺（differential cyanosis：後肢 PaO₂ < 前肢）。Reverse PDA 為手術絕對禁忌——閉合導管將導致急性右心衰竭。

### 肺動脈瓣狹窄 (Pulmonic Stenosis, PS)

#### 病理生理
肺動脈瓣狹窄 → 右心室收縮期壓力過載 → 右心室同心性肥大 → 舒張功能障礙 → 嚴重者右心衰竭（腹水、頸靜脈怒張）。

| 嚴重度分級 | 壓力梯度 | 臨床意義 | 處置建議 |
|-----------|---------|---------|---------|
| 輕度 | < 50 mmHg | 通常無症狀，預後良好 | 每 12 個月心超追蹤 |
| 中度 | 50-80 mmHg | 可能運動不耐 | 個別化評估，考慮介入 |
| 重度 | > 80 mmHg | 暈厥、運動不耐、猝死風險 | 球囊擴張術（BV） |

#### 臨床表現

| 臨床表現 | 特徵 |
|---------|------|
| 收縮期噴射雜音 | 左心基部（第 2-4 肋間），Grade III-VI/VI |
| 暈厥 | 運動或興奮誘發，嚴重阻塞所致 |
| 腹水 | 右心衰竭表現，晚期 |
| 發紺 | 伴隨 ASD/卵圓孔未閉時右→左分流 |

好發品種：英國鬥牛犬（多為 dysplastic type B）、法國鬥牛犬、拳師犬、比格犬、可卡犬、迷你雪納瑞。

### 主動脈下狹窄 (Subaortic Stenosis, SAS)

#### 病理生理
LVOT 纖維環或隧道型狹窄 → 收縮期壓力過載 → 左心室同心性肥大 → 心肌缺血（肥厚心肌氧需求↑ + 冠狀動脈灌注相對不足）→ 心律不整基質 → 猝死風險。

SAS 為犬先天性心臟病中猝死風險最高者。

| 臨床表現 | 特徵 |
|---------|------|
| 收縮期噴射雜音 | 左心基部，向右心基部與頸動脈放射 |
| 暈厥 | 運動誘發最常見 |
| 猝死 | 可為首發表現，尤其重度者 |
| CHF | 晚期左心衰竭，較少見 |

好發品種：金毛犬、紐芬蘭犬、拳師犬、德國牧羊犬、羅威那。

## 二、診斷與鑑別 (Diagnosis & DDx)

### 診斷工具比較

| 工具 | PDA | PS | SAS |
|------|-----|-----|-----|
| 聽診 | 連續性雜音（左腋下） | 收縮期噴射雜音（左基部） | 收縮期噴射雜音（左基部→右） |
| 胸腔 X 光 | 心臟擴大、肺過度灌流 | 主肺動脈突出、右心擴大 | 左心擴大（輕度） |
| 心臟超音波 | LA/LV 擴大、PDA 可視化 | 瓣膜融合/增厚、壓力梯度 | LVOT 纖維環、壓力梯度 |
| 心導管/血管攝影 | 確認分流與 ACDO sizing | 非常規需要 | 非常規需要 |

### 鑑別診斷

| 缺陷 | 容易混淆的疾病 | 關鍵鑑別 |
|------|-------------|---------|
| PDA | 主動脈—肺動脈窗 | 極罕見，心超可區分 |
| PDA | 動靜脈瘺 | 周邊位置，非心臟來源 |
| PS | 功能性雜音（幼犬） | PS 雜音通常 ≥ Grade III/VI + 心超可確診 |
| PS | ASD | 右心擴大但 ASD 雜音常為 Grade I-II |
| SAS | 功能性雜音 | SAS 雜音向頸部放射 + 心超確診 |
| SAS | 主動脈瓣狹窄（valvular AS） | 犬極罕見，心超可區分瓣下 vs 瓣膜 |

## 三、治療策略 (Treatment)

### PDA 治療

| 方法 | 適應症 | 成功率 | 優劣 |
|------|--------|--------|------|
| ACDO 導管封堵 | 體重 > 2.5 kg，導管型態合適 | >95% | 微創、恢復快、併發症低 |
| 外科結紮 | ACDO 不可行或經費限制 | >90% | 開胸手術，風險稍高 |
| Coil embolization | 小型 PDA | 85-90% | 較早技術，已被 ACDO 取代為主流 |

ACDO（Amplatz Canine Duct Occluder）操作要點：經股動脈入路→血管攝影確認導管尺寸與型態→選擇合適 ACDO 尺寸→釋放→即時血管攝影確認無殘餘分流。

術後預後：早期閉合（CHF 前）預後極佳，心臟可逆性重塑，壽命接近正常。已有 CHF 者閉合後仍可顯著改善，但可能需持續心臟藥物。

### PS 治療——球囊擴張術 (Balloon Valvuloplasty, BV)

適應症：壓力梯度 > 80 mmHg，或 50-80 mmHg 伴臨床症狀。

操作要點：經頸靜脈或股靜脈入路→右心導管測壓→球囊尺寸選擇（瓣環直徑 × 1.2-1.5）→跨瓣膜擴張→重測梯度。

療效：Type A（瓣膜融合型）效果佳（梯度下降 50-60%），Type B（dysplastic 型）效果差（可能僅下降 20-30%）。

### SAS 治療

| 策略 | 內容 | 證據 |
|------|------|------|
| 藥物（首選） | [藥物:Atenolol] 0.5-1 mg/kg PO BID | Level III |
| 球囊擴張 | 僅暫時降低梯度，6-12 月復發 | Level III |
| 外科切除 | 開心手術切除纖維環，高風險 | Level IV |
| 運動限制 | 避免激烈運動降低猝死風險 | Level V |

Atenolol 的作用：(1) 降低心率 → 延長舒張期 → 改善冠狀動脈灌注；(2) 降低心肌氧需求；(3) 減少心律不整風險。Corcoran et al. 研究顯示 atenolol 可能延長重度 SAS 犬的存活時間，但缺乏前瞻性 RCT。

## 四、人醫借鑒 (Translational Insights)

| 人醫概念 | 獸醫應用 | 現況 |
|---------|---------|------|
| 經導管 PDA 封堵（人醫標準治療） | ACDO 為犬改良版，成功率 >95% | 已成熟，台灣多家醫院可執行 |
| 經導管主動脈瓣置換（TAVI） | 犬 SAS 的潛在微創治療 | 實驗階段，成本極高 |
| Ross 手術（肺動脈瓣→主動脈位） | 犬嚴重 SAS 的外科選項 | 極少案例報告 |
| 基因篩檢面板（新生兒 CHD 篩檢） | 品種繁殖前遺傳風險評估 | 犬遺傳研究進行中 |

## 五、臨床爭議 (Clinical Controversies)

| 爭議議題 | 正方觀點 | 反方觀點 | Evidence Level |
|---------|---------|---------|---------------|
| SAS 球囊擴張的價值 | 即使短期改善也減少症狀 | 梯度復發快、不改變猝死風險、併發症風險 | Level III |
| 輕度 SAS 的繁殖限制 | OFA 建議確診即不繁殖 | 輕度 SAS 與功能性雜音鑑別困難 | Level III |
| PDA 犬術後是否需終身追蹤 | 早期閉合且重塑良好者可解除 | 偶見遲發性併發症（如 hemolysis） | Level IV |
| PS Type B 是否仍應嘗試 BV | 部分案例有改善 | 效果不可預期，可能加重瓣膜關閉不全 | Level III |

[圖片:PDA/PS/SAS 心臟超音波特徵比較圖]`,
  clinical_pearl: 'PDA 的「1-2-3 法則」有助於快速臨床判斷：(1) 1 個特徵性雜音——連續性機械樣雜音（continuous machinery murmur）在左腋下最響，(2) 2 個觸診發現——跳躍脈（bounding pulse）+ 心前區搏動增強（hyperdynamic precordium），(3) 3 個月內應完成治療——越早閉合 PDA，心臟重塑可逆性越高。對於馬爾濟斯、博美等台灣常見小型犬品種，獸醫在幼犬首次就診時發現左腋下連續性雜音，應高度懷疑 PDA 並立即轉診。ACDO 導管封堵在台灣已有多家教學醫院可執行，成功率高且恢復快。',
  common_mistakes: [
    'PDA 的連續性雜音誤聽為「收縮期+舒張期分開的雜音」——實際為不間斷的連續雜音，高峰在 S2 附近',
    'SAS 犬僅依賴聽診追蹤——心雜音強度與壓力梯度相關性有限，必須定期心超測量梯度',
    'PS 球囊擴張後未追蹤——梯度可能在數月內回升，需 3-6 個月心超重新評估',
    'Reverse PDA 誤行手術閉合——肺高壓已不可逆時閉合導管會導致致命性右心衰竭',
    '對所有 SAS 犬推薦球囊擴張——目前證據不支持 BV 改善 SAS 犬的長期預後',
  ],
  disease_data: {
    signalment: 'PDA：好發小型犬（馬爾濟斯、博美、玩具貴賓、CKCS、德國牧羊犬），雌性為雄性 2-3 倍。PS：好發英國鬥牛犬、法國鬥牛犬、拳師犬、比格犬、可卡犬。SAS：好發金毛犬、紐芬蘭犬、拳師犬、德國牧羊犬。通常在幼犬期（<1 歲）因心雜音被發現。',
    etiology: 'PDA：動脈導管平滑肌對氧氣收縮反應異常+內膜增生不足，多基因遺傳。PS：肺動脈瓣發育不全（瓣葉融合或增厚/發育不良），遺傳性。SAS：左心室流出道纖維肌性環或隧道型狹窄，多基因遺傳，出生後可能進展。',
    pathogenesis: 'PDA：持續性主動脈→肺動脈左→右分流→肺過度灌流→左心房擴大→左心室離心性肥大→充血性心衰竭。PS：右心室收縮期壓力過載→同心性肥大→舒張功能障礙→嚴重者右心衰竭。SAS：左心室流出道阻塞→左心室同心性肥大→心肌缺血→心律不整→猝死風險。',
    clinical_signs: [
      { sign: 'PDA 連續性機械樣雜音', category: 'primary', description: '左腋下最響，Grade IV-VI/VI，不間斷貫穿收縮與舒張期' },
      { sign: 'PDA 跳躍脈', category: 'primary', description: '舒張期分流致脈壓差增大，周邊脈搏搏動明顯增強' },
      { sign: 'PS 收縮期噴射雜音', category: 'primary', description: '左心基部（第 2-4 肋間），Grade III-VI/VI' },
      { sign: 'SAS 收縮期噴射雜音', category: 'primary', description: '左心基部向右心基部與頸動脈放射' },
      { sign: '運動不耐', category: 'secondary', description: '三種缺陷均可見，嚴重度與梯度/分流量相關' },
      { sign: '暈厥', category: 'secondary', description: 'PS 重度與 SAS 最常見，運動或興奮誘發' },
    ],
    staging: { system: 'Severity grading', stages: ['Mild (gradient <50 mmHg)', 'Moderate (50-80 mmHg)', 'Severe (>80 mmHg)'] },
    differential_diagnosis: [
      { condition: '功能性雜音（Innocent murmur）', key_differentiator: '幼犬常見，Grade I-II/VI，成長後消失，心超正常' },
      { condition: '主動脈瓣狹窄（Valvular AS）', key_differentiator: '犬極罕見，心超可區分瓣膜 vs 瓣下阻塞' },
      { condition: '心室中隔缺損（VSD）', key_differentiator: '右側心雜音較明顯，心超可直接顯示中隔缺損' },
      { condition: '二尖瓣發育不良', key_differentiator: '年輕犬的收縮期雜音，心超瓣膜形態異常但非流出道阻塞' },
    ],
    diagnostic_workup: '1. 理學檢查（聽診特徵、脈搏品質、黏膜色澤）→ 2. 胸腔 X 光（心臟大小、肺血管紋路）→ 3. 心臟超音波（確診：直接觀察缺陷+杜卜勒測量壓力梯度/分流量）→ 4. ECG（評估心律不整風險，SAS 尤其重要）→ 5. 血管攝影（PDA ACDO 術前 sizing 必需）',
    treatment_protocol: '【PDA】ACDO 導管封堵（首選，體重 >2.5 kg，成功率 >95%）或外科結紮。越早治療越好，CHF 前閉合預後最佳。已有 CHF 者先穩定再閉合。Reverse PDA 為手術禁忌。\n\n【PS】輕度（<50 mmHg）：追蹤。中度（50-80）：個別化。重度（>80）：球囊擴張術（BV），Type A 效果佳，Type B 效果有限。\n\n【SAS】[藥物:Atenolol] 0.5-1 mg/kg PO BID 為主要治療。運動限制。球囊擴張僅暫時效果，不推薦為常規治療。重度者建議 Holter 評估心律不整風險。',
    prognosis: 'PDA：早期閉合（CHF 前）預後極佳，壽命接近正常；未治療者 60% 在 1 歲前死於 CHF。PS：輕度預後良好；重度 BV 後多可維持良好生活品質。SAS：輕度預後良好；重度中位存活約 19 個月，猝死為主要死因；Atenolol 可能延長存活但缺乏 RCT 證據。',
    monitoring: 'PDA 術後：24-48h 心超確認無殘餘分流，1 個月、6 個月、12 個月回診心超追蹤心臟重塑。PS BV 後：3 個月心超重測梯度。SAS：每 6 個月心超追蹤梯度變化 + 年度 Holter（重度者）。所有先天性心臟病犬建議不繁殖。',
    owner_communication: '先天性心臟病的關鍵訊息：(1) PDA——早期治療預後極佳，手術/介入是治癒性的；(2) PS——重度需介入治療，術後多可維持良好生活品質；(3) SAS——誠實告知預後，重度者有猝死風險，藥物治療以改善生活品質為目標。所有先天性心臟病犬強烈建議不繁殖以減少下一代發生率。台灣 ACDO 技術已成熟，費用雖較高但效果確切。',
  },
  diagnostic_data: null,
  procedure_data: null,
  visual_placeholders: [
    { position: '臨床表現段落', type: 'comparison_table', description: 'PDA/PS/SAS 臨床特徵比較表' },
    { position: '治療段落', type: 'animated_diagram', description: 'ACDO 導管封堵術操作動態示意圖' },
  ],
  interactive_placeholders: [
    { position: '嚴重度分級段落', type: 'interactive_staging', description: '輸入壓力梯度自動分級並推薦治療方案' },
  ],
  drug_api_links: ['Atenolol', 'Sildenafil'],
  references: [
    { type: 'journal', citation: 'Schrope DP. Prevalence of congenital heart disease in 76,301 mixed-breed dogs and 57,025 mixed-breed cats. J Vet Cardiol. 2015;17(3):192-202.', relevance: '犬先天性心臟病盛行率與類型分布大規模研究' },
    { type: 'journal', citation: 'Bussadori C, DeMadron E, Santilli RA, Borgarelli M. Balloon valvuloplasty in 30 dogs with pulmonic stenosis: effect of valve morphology and annular size on initial and 1-year outcome. J Vet Intern Med. 2009;23(4):867-874.', relevance: 'PS 球囊擴張術療效與瓣膜型態關聯' },
    { type: 'textbook', citation: 'Tobias AH, Johnston SA. Veterinary Surgery: Small Animal, 2nd ed. Elsevier, 2018. Chapter: Congenital Heart Disease.', relevance: '先天性心臟病外科與介入治療教材' },
    { type: 'journal', citation: 'Corcoran BM, Martin MW, Darke PG, et al. Atenolol in the treatment of congenital subaortic stenosis in the dog. J Small Anim Pract. 2002;43(12):533-536.', relevance: 'Atenolol 治療犬 SAS 的臨床研究' },
    { type: 'guideline', citation: 'Estrada A, Meurs KM, Oyama MA, et al. ACVIM Consensus Statement: Guidelines for the Diagnosis and Treatment of Canine Patent Ductus Arteriosus. J Vet Intern Med. 2021;35(5):2299-2317.', relevance: 'ACVIM 犬 PDA 診斷與治療共識聲明' },
  ],
  is_current: true,
  created_at: now,
};

/** 心律不整各論 — 疾病型 */
const contentClinicalArrhythmias: NodeContent = {
  id: 'CONTENT-L3-007',
  node_id: 'CARDIO-L3-007',
  version: 1,
  summary: '臨床心律不整包含上心室性頻脈（SVT）、心室頻脈（VT）、心房顫動（AF）與病竇症候群（SSS）。犬 VT 以杜賓犬 DCM 與拳師犬 ARVC 最具臨床意義，緊急處理以 IV lidocaine 為首選。AF 好發於大型犬合併 DCM，以 diltiazem + digoxin 心率控制為主。SSS 好發迷你雪納瑞與西高地白梗，嚴重者需永久性心律調節器。',
  learning_objectives: [
    '辨識 SVT、VT、AF、SSS 的 ECG 特徵與臨床表現',
    '制定犬急性 VT 的緊急處理步驟（Lidocaine protocol）',
    '設計犬 AF 的心率控制方案（Diltiazem + Digoxin）',
    '說明 SSS 的臨床意義與心律調節器植入適應症',
    '比較各心律不整的預後與長期管理策略',
  ],
  key_points: [
    'SVT：窄 QRS 複合波（<70 ms 犬）、心率 >250 bpm、迷走神經手法可終止——首選眼球壓迫或頸動脈竇按摩',
    'SVT 藥物轉復：IV diltiazem 0.15-0.25 mg/kg slowly（over 5 min），可重複；替代 IV esmolol 0.05-0.1 mg/kg',
    'VT：寬 QRS 複合波（>70 ms 犬）、AV dissociation、fusion beats——血流動力學不穩定時為緊急狀況',
    'VT 緊急處理：IV lidocaine 2 mg/kg bolus（over 2 min），可每 5-10 min 重複至 8 mg/kg 總量；有效後 CRI 40-80 µg/kg/min',
    'AF：不規則不規則心律（irregularly irregular）、f waves 取代 P waves、心率常 >160 bpm（犬）',
    'AF 心率控制：diltiazem ER 3-5 mg/kg PO BID + digoxin 0.005 mg/kg PO BID，目標靜息心率 <140-160 bpm',
    'SSS：竇性心搏過緩（<60 bpm）與竇性停頓交替、brady-tachy syndrome 常見',
    'SSS 治療：有症狀者（暈厥）→ 永久性心律調節器植入；無症狀者 → 密切監測',
  ],
  body: `# 心律不整各論 (Clinical Arrhythmias: SVT / VT / AF / SSS)

## 一、分類與病理機制 (Classification & Pathophysiology)

### 上心室性頻脈 (Supraventricular Tachycardia, SVT)

#### 定義與機轉
SVT 為源於 His 束以上（心房或 AV node/junction）的快速心律不整。主要機轉：
- **AV nodal re-entrant tachycardia (AVNRT)**：AV node 內雙路徑形成迴路
- **Accessory pathway-mediated (AVRT)**：房室旁路（如 WPW syndrome）
- **Atrial tachycardia**：心房異位灶自動性增強

| ECG 特徵 | 描述 |
|---------|------|
| QRS 寬度 | 窄（<70 ms 犬，<40 ms 貓），除非伴 BBB |
| 心率 | >250 bpm（犬），>300 bpm（貓） |
| P waves | 常看不到（隱藏在 T 波中）或逆行 P |
| 規律性 | 規律 |
| 迷走神經反應 | 可能突然終止（AVNRT/AVRT） |

#### 臨床表現
- 多數為陣發性，可能無症狀或僅有心悸
- 持續性 SVT 可導致頻脈性心肌病（tachycardia-induced cardiomyopathy）
- 血流動力學不穩定少見（除非心率極高或原有心臟病）

### 心室頻脈 (Ventricular Tachycardia, VT)

#### 定義與機轉
VT 為源於 His 束以下（心室）的連續三個以上心室早期收縮（VPC），心率 >100 bpm。主要機轉：
- **Re-entry**：心肌疤痕/纖維化區域造成傳導延遲形成迴路（最常見）
- **Enhanced automaticity**：缺血或電解質異常致心室肌自動性增加
- **Triggered activity**：EAD/DAD（early/delayed afterdepolarization）

| 分類 | 定義 | 臨床意義 |
|------|------|---------|
| 非持續性 (NSVT) | <30 秒自行終止 | 可能無症狀，需 Holter 評估 |
| 持續性 (Sustained VT) | ≥30 秒或血流動力學受損 | 緊急狀況，需立即處理 |
| 單形 (Monomorphic) | QRS 形態一致 | 多為 re-entry |
| 多形 (Polymorphic) | QRS 形態多變 | 預後更差，可退化為 VF |

#### ECG 特徵
- 寬 QRS（犬 >70 ms）
- AV dissociation（心房與心室各自節律）
- Fusion beats（正常傳導與 VPC 混合的複合波）
- Capture beats（偶爾正常窄 QRS 穿插）

#### 臨床重要族群
- **杜賓犬 DCM**：約 50-60% 發展 VT/VPC，Holter 顯示 >50 VPC/24h 為異常
- **拳師犬 ARVC**：右心室纖維脂肪浸潤 → VPC/VT（左束支傳導阻滯型態）
- **德國牧羊犬**：遺傳性 VT（inherited ventricular arrhythmia）

### 心房顫動 (Atrial Fibrillation, AF)

#### 定義與機轉
心房多處微型迴路（multiple wavelet hypothesis）或肺靜脈焦點灶（focal firing from pulmonary veins）→ 心房失去有組織的收縮 → 心室對 f waves 不規則反應 → irregularly irregular 心律。

| ECG 特徵 | 描述 |
|---------|------|
| P waves | 消失，取代為 f waves（基線不規則振動） |
| R-R 間距 | 完全不規則（irregularly irregular） |
| QRS 寬度 | 通常窄（除非伴 BBB 或 VPC） |
| 心率 | 犬常 >160-200 bpm（未控制） |

#### 臨床意義
- **犬**：AF 幾乎都與嚴重心臟病相關（DCM、嚴重 MMVD + LA 擴大）；大/巨型犬（Irish Wolfhound、Great Dane）可有「孤立性 AF（lone AF）」
- **貓**：AF 在貓極少見（因心房較小），發生時通常代表嚴重心臟病

### 病竇症候群 (Sick Sinus Syndrome, SSS)

#### 定義與機轉
竇房結功能障礙 → 竇性心搏過緩、竇性停頓（sinus arrest）或竇房阻滯（SA block），常合併交替的快速心律不整（brady-tachy syndrome：竇性停頓 + 突發 AF 或 SVT）。

病理基礎：竇房結與心房組織纖維化 → 節律產生與傳導功能衰退。

| 好發品種 | 特徵 |
|---------|------|
| 迷你雪納瑞 | 最常見品種，多為老年犬 |
| 西高地白梗 | 中老年好發 |
| 可卡犬 | 偶見報告 |
| 臘腸犬 | 偶見報告 |

#### 臨床表現
- 間歇性暈厥（最常見主訴）
- 運動不耐
- 虛弱/嗜睡
- Brady-tachy 轉換時症狀最明顯（長停頓後暈厥）

## 二、診斷與判讀要點 (Diagnosis & Interpretation)

### ECG 鑑別診斷流程

寬 QRS 頻脈（心率 >100 bpm）的鑑別：
1. 規律 + 寬 QRS → 考慮 VT（最常見）vs SVT 伴 BBB
2. AV dissociation / fusion beats / capture beats → 確認 VT
3. 迷走神經手法可終止 → 提示 SVT（但不絕對）
4. 不確定時按 VT 處理（較安全的預設）

### 24 小時 Holter 監測適應症
- 杜賓犬 ≥4 歲年度篩檢（DCM occult 期 VPC 偵測）
- 拳師犬疑似 ARVC
- 暈厥原因不明
- 抗心律不整藥物療效評估
- SSS 嚴重度分級

## 三、治療策略 (Treatment)

### SVT 急性處理

| 步驟 | 方法 | 細節 |
|------|------|------|
| 1. 迷走神經手法 | 眼球壓迫 10-15 秒或頸動脈竇按摩 | AVNRT/AVRT 可能即刻終止 |
| 2. Diltiazem IV | 0.15-0.25 mg/kg slowly (over 5 min) | 可每 15 min 重複一次，最多 3 次 |
| 3. Esmolol IV（替代） | 0.05-0.1 mg/kg slowly | 超短效 β-blocker |
| 4. 穩定後口服維持 | [藥物:Diltiazem] PO 或 [藥物:Atenolol] PO | 預防復發 |

### VT 急性處理

| 步驟 | 方法 | 細節 |
|------|------|------|
| 1. Lidocaine IV bolus | 2 mg/kg IV over 2 min | 可每 5-10 min 重複，總量 ≤8 mg/kg |
| 2. Lidocaine CRI | 40-80 µg/kg/min | 有效後維持 24-48h |
| 3. 無效替代 | [藥物:Procainamide] 6-8 mg/kg IV slowly | 或 CRI 25-50 µg/kg/min |
| 4. 轉口服維持 | [藥物:Sotalol] 1.5-3.5 mg/kg PO BID | ± [藥物:Mexiletine] 5-8 mg/kg PO TID |

**貓的注意事項**：Lidocaine 在貓的中樞神經毒性極高，犬標準劑量在貓可致死。貓 VT 若必須使用，劑量不超過 0.25-0.5 mg/kg IV very slowly。

### AF 心率控制

| 藥物 | 劑量 | 目標 |
|------|------|------|
| [藥物:Diltiazem] ER | 3-5 mg/kg PO BID | 靜息心率 <140-160 bpm |
| [藥物:Digoxin] | 0.005 mg/kg PO BID | 輔助 AV node 阻滯 |
| 監測 | Digoxin 谷值 0.8-1.2 ng/mL | 治療窗極窄 |

巨型犬「孤立性 AF」若心率已自然 <140 bpm，可能不需要積極治療——追蹤即可。

### SSS 治療

| 嚴重度 | 處置 |
|--------|------|
| 無症狀竇性心搏過緩 | 觀察追蹤 |
| 偶發暈厥 | 考慮 Theophylline 10 mg/kg PO BID（效果有限） |
| 頻繁暈厥/嚴重停頓 | **永久性心律調節器植入（pacemaker）** |

心律調節器植入：經頸靜脈入路，電極置於右心室心尖，脈衝產生器植入頸部皮下。犬使用 VVI 或 VVIR 模式為主。

## 四、人醫借鑒 (Translational Insights)

| 人醫概念 | 獸醫應用 | 現況 |
|---------|---------|------|
| AF 肺靜脈隔離術（catheter ablation） | 犬 AF 根治性治療 | 人醫成熟，獸醫研究中但常規使用困難 |
| ICD（植入式心臟去顫器） | 杜賓犬 VT 猝死預防 | 人醫標準治療，獸醫因成本/體型限制極少使用 |
| Leadless pacemaker（無導線心律調節器）| 犬 SSS 微創治療 | 人醫已上市（Micra），獸醫個案報告 |
| 穿戴式 ECG patch（連續監測）| 犬心律不整長期監測替代 Holter | 概念可行，獸醫產品開發中 |

## 五、臨床爭議 (Clinical Controversies)

| 爭議議題 | 正方觀點 | 反方觀點 | Evidence Level |
|---------|---------|---------|---------------|
| 犬 AF 是否應嘗試電擊轉復 | 偶有維持竇律報告 | 犬 AF 幾乎 100% 復發，電擊風險不值得 | Level III |
| 杜賓犬 occult DCM 偵測到 VPC 是否治療 | 早期 Sotalol 可能延緩進展 | 無症狀 VPC 治療的 RCT 證據不足 | Level III |
| SSS 犬 Theophylline 的價值 | 可增加竇房結自動性 | 效果不穩定且可能誘發快速心律 | Level IV |
| 拳師犬 ARVC 的 Sotalol vs Mexiletine+Sotalol | 單藥方案較簡單 | 合併用藥可能更有效控制 VPC | Level III |

[圖片:四種心律不整 ECG 特徵比較圖——SVT/VT/AF/SSS]`,
  clinical_pearl: 'VT 的「穩定 vs 不穩定」快速評估決定處理急迫性：血流動力學不穩定（低血壓、蒼白黏膜、意識改變、脈搏弱）= 緊急給予 Lidocaine IV。血流動力學穩定的 VT 仍需處理，但可有更多時間準備——先確認電解質（低鉀、低鎂加重心律不整）、評估心率（犬 VT 心率 <180 bpm 較穩定），再決定 IV 或直接口服 Sotalol。「不確定 SVT 或 VT 時按 VT 處理」是安全的臨床原則。\n\n【台灣臨床現況】台灣多家教學醫院已可執行永久性心律調節器植入。杜賓犬在台灣飼養量相對較少，但 DCM 篩檢意識正在提升。Holter 監測在台灣已有數家專科醫院提供租借服務。',
  common_mistakes: [
    '將寬 QRS 頻脈自動歸類為 SVT 伴 BBB——預設應按 VT 處理，除非有明確證據支持 SVT',
    'AF 嘗試藥物轉復（rhythm control）——犬 AF 幾乎都是永久性，應以心率控制為治療目標',
    'SSS 使用 atropine 長期治療——atropine 僅為暫時性測試（atropine response test），不適合長期使用',
    '使用犬劑量 Lidocaine 於貓——貓對 Lidocaine 極度敏感，2 mg/kg 在貓可致命',
    '忽略電解質矯正——低鉀血症是心律不整惡化的常見可矯正因素',
  ],
  disease_data: {
    signalment: 'SVT：各品種與年齡均可發生。VT：杜賓犬（DCM 相關，中年以上）、拳師犬（ARVC）、德國牧羊犬（遺傳性 VT）。AF：大型至巨型犬（Irish Wolfhound、Great Dane、Doberman）合併 DCM 或嚴重 MMVD。SSS：迷你雪納瑞、西高地白梗，中老年好發。',
    etiology: 'SVT：AV node 雙路徑（AVNRT）、房室旁路（AVRT）、心房異位灶。VT：心肌纖維化/疤痕（re-entry）、缺血、電解質異常、遺傳性通道病。AF：嚴重心房擴大（MMVD/DCM）、心房纖維化。SSS：竇房結與心房組織進行性纖維化，可能為退化性或遺傳性。',
    pathogenesis: 'SVT：His 束以上的快速節律→心室經 AV node 快速傳導→持續高心率→可能導致頻脈性心肌病。VT：心室異常自律性或迴路→不同步收縮→心輸出量下降→血流動力學不穩→可退化為心室顫動（VF）致死。AF：心房多處微型迴路→有效心房收縮喪失→心房貢獻心輸出量（15-25%）消失→加上快速心室反應→心輸出量下降。SSS：竇房結功能衰退→心搏過緩/停頓→腦灌流不足→暈厥。',
    clinical_signs: [
      { sign: '暈厥', category: 'primary', description: 'VT、SSS 最常見表現；突發意識喪失後自行恢復' },
      { sign: '運動不耐', category: 'primary', description: '各型心律不整均可見，因心輸出量無法配合需求' },
      { sign: '虛弱/嗜睡', category: 'primary', description: 'SSS 與持續性 VT/AF 的慢性表現' },
      { sign: '不規則心律', category: 'secondary', description: 'AF 的 irregularly irregular 為特徵；VPC 為不規則插入的早搏' },
      { sign: '脈搏弱/缺脈', category: 'secondary', description: 'VT 與快速 AF 可見脈搏與心跳不一致（pulse deficit）' },
      { sign: '猝死', category: 'secondary', description: 'VT 退化為 VF 或 SSS 長停頓可致猝死，為首發表現' },
    ],
    staging: null,
    differential_diagnosis: [
      { condition: '癲癇', key_differentiator: '暈厥通常無強直-陣攣期、恢復快、可能伴脈搏異常；ECG/Holter 可區分' },
      { condition: '竇性心搏過緩（生理性）', key_differentiator: '運動犬或高迷走張力犬可見靜息心率 <60 bpm，atropine 測試可區分' },
      { condition: '房室傳導阻滯（AVB）', key_differentiator: 'ECG 可辨識 P-QRS 關係異常，2nd/3rd degree AVB 有獨特 ECG 型態' },
      { condition: '心因性暈厥（其他原因）', key_differentiator: '需系統性排除：SAS/PS（血流動力學性）、心包膜壓塞、肺高壓等' },
    ],
    diagnostic_workup: '1. ECG（6 導程）→ 辨識心律不整類型與急性度 → 2. 24h Holter → 評估頻率、類型、日間變異（尤其杜賓犬/拳師犬篩檢）→ 3. 心臟超音波 → 結構性心臟病評估（DCM/MMVD/HCM）→ 4. 血液檢查 → 電解質（K⁺、Mg²⁺、Ca²⁺）、甲狀腺功能（T4）、cTnI → 5. Atropine response test（SSS 評估）→ 0.04 mg/kg IV → 正常應使心率 >150 bpm，SSS 常反應不足',
    treatment_protocol: '【SVT】迷走神經手法（眼球壓迫 10-15 秒）→ IV [藥物:Diltiazem] 0.15-0.25 mg/kg slowly → 穩定後口服 Diltiazem 或 [藥物:Atenolol] 預防復發。\n\n【VT（血流動力學不穩定）】IV [藥物:Lidocaine] 2 mg/kg bolus（可重複至 8 mg/kg）→ CRI 40-80 µg/kg/min → 穩定後口服 [藥物:Sotalol] 1.5-3.5 mg/kg BID ± [藥物:Mexiletine] 5-8 mg/kg TID。Lidocaine 無效替代：[藥物:Procainamide] 6-8 mg/kg IV slowly。\n\n【AF】心率控制：[藥物:Diltiazem] ER 3-5 mg/kg PO BID + [藥物:Digoxin] 0.005 mg/kg PO BID。目標靜息心率 <140-160 bpm。\n\n【SSS】有症狀暈厥→永久性心律調節器植入（VVI/VVIR）。輕微症狀可試 Theophylline 10 mg/kg PO BID。',
    prognosis: 'SVT：一般預後良好，藥物控制或消融術可有效管理。VT：杜賓犬 DCM 伴 VT 預後差（Sotalol 治療 MST ~120 天 vs 未治療 ~40 天），拳師犬 ARVC 伴 VPC Sotalol 可減少 VPC >80% 但猝死風險無法完全消除。AF：犬 AF 預後取決於基礎心臟病——DCM 伴 AF 預後差，心率控制達標與存活時間正相關。SSS：心律調節器植入後預後良好，中位存活 >3 年。',
    monitoring: 'SVT：口服藥物啟始後 1 週回診 ECG。VT：口服 Sotalol 啟始後 ECG 確認 QT 間距，2 週後 Holter 評估（目標 VPC 減少 >80%），之後每 3-6 月 Holter。AF：啟始治療後 1 週 ECG 確認心率控制，Digoxin 7-10 天後抽谷值血中濃度。SSS 心律調節器術後 1 週、1 月、3 月回診 ECG + 調節器功能檢測。',
    owner_communication: '心律不整的嚴重度差異很大。SVT 通常可藥物控制且預後好。VT 需要認真面對——告知飼主杜賓犬 DCM 的猝死風險，藥物可改善但無法完全消除風險。AF 多伴隨嚴重心臟病，藥物以控制心率為目標而非恢復正常節律。SSS 嚴重者心律調節器植入後效果良好，但需定期回診檢測調節器功能。',
  },
  diagnostic_data: null,
  procedure_data: null,
  visual_placeholders: [
    { position: 'ECG 特徵段落', type: 'waveform', description: 'SVT/VT/AF/SSS 四種心律不整的典型 ECG 波形對照圖' },
    { position: '治療段落', type: 'flowchart', description: '寬 QRS vs 窄 QRS 頻脈鑑別與治療決策流程圖' },
  ],
  interactive_placeholders: [
    { position: 'ECG 段落', type: 'interactive_overlay', description: '互動式 ECG 判讀練習——辨識心律不整類型' },
  ],
  drug_api_links: ['Lidocaine', 'Diltiazem', 'Sotalol', 'Digoxin', 'Procainamide', 'Atenolol'],
  references: [
    { type: 'textbook', citation: 'Tilley LP, Smith FWK. Electrocardiography in Small Animal Practice, 5th ed. Elsevier, 2016.', relevance: '小動物 ECG 判讀與心律不整診斷完整教材' },
    { type: 'journal', citation: 'Meurs KM et al. Comparison of the effects of four antiarrhythmic treatments for familial ventricular arrhythmias in Boxers. J Am Vet Med Assoc. 2002;221(4):522-527.', relevance: '拳師犬心律不整治療比較研究' },
    { type: 'textbook', citation: 'Ware WA. Cardiovascular Disease in Small Animal Medicine. Manson Publishing, 2011. Chapter: Cardiac Arrhythmias.', relevance: '臨床心律不整診斷與治療教材' },
    { type: 'journal', citation: 'Calvert CA, Hall G, Jacobs G, Pickus C. Clinical and pathologic findings in Doberman Pinschers with occult cardiomyopathy that died suddenly or developed congestive heart failure: 54 cases (1984-2004). J Am Vet Med Assoc. 2006;228(11):1723-1730.', relevance: '杜賓犬 DCM 伴心律不整的臨床病理研究' },
    { type: 'guideline', citation: 'Meurs KM, Stern JA, Sisson DD, et al. ACVIM Consensus Statement: Guidelines for the Identification, Evaluation, and Management of Systolic Myocardial Dysfunction in Dogs. J Vet Intern Med. 2019;33(1):11-29.', relevance: 'ACVIM 犬心肌功能障礙管理共識聲明（含心律不整管理）' },
  ],
  is_current: true,
  created_at: now,
};

/** 感染性心內膜炎 — 疾病型 */
const contentEndocarditis: NodeContent = {
  id: 'CONTENT-L3-008',
  node_id: 'CARDIO-L3-008',
  version: 1,
  summary: '感染性心內膜炎（Infective Endocarditis, IE）是心臟瓣膜或心內膜表面的微生物感染，以主動脈瓣與二尖瓣最常受侵犯。犬好發於中大型犬（德國牧羊犬為高風險品種），貓極罕見。診斷依賴血液培養（3 組不同部位取樣）與心臟超音波偵測贅生物（vegetation）。治療需長期靜脈注射抗生素（4-6 週），預後不良。',
  learning_objectives: [
    '描述感染性心內膜炎的病理生理機轉與易感因子',
    '列舉犬 IE 最常見的致病菌與感染來源',
    '執行標準血液培養取樣程序（3 組不同部位）',
    '辨識心臟超音波上贅生物的典型表現',
    '制定長期抗生素治療方案與監測計畫',
  ],
  key_points: [
    '犬 IE 好發於中大型犬，德國牧羊犬為高風險品種，雄性略多於雌性',
    '主動脈瓣（~60%）> 二尖瓣（~30%）> 三尖瓣/肺動脈瓣（<10%）',
    '最常見致病菌：Staphylococcus spp.、Streptococcus spp.、E. coli、Bartonella spp.（新興病原）',
    '感染來源：口腔感染、泌尿道感染、皮膚傷口、椎間盤炎、前列腺炎',
    '診斷三要素：(1) 血培養 3 組不同部位取樣 (2) 心超偵測贅生物 (3) 臨床表現（發燒+新雜音+栓塞現象）',
    '治療：長期靜脈抗生素 4-6 週（經驗性：Ampicillin + Enrofloxacin，依培養結果調整）',
    '預後不良：中位存活約 3-6 個月，主動脈瓣受侵犯與嚴重瓣膜破壞預後更差',
  ],
  body: `# 感染性心內膜炎 (Infective Endocarditis, IE)

## 一、病理機制 (Pathophysiology)

### 發病機轉

| 步驟 | 機轉 | 臨床關聯 |
|------|------|---------|
| 內皮損傷 | 瓣膜表面內皮受損（血流紊亂、退化性變化） | SAS 犬主動脈瓣受高速噴射流損傷 → IE 風險↑ |
| 血小板-纖維蛋白沉積 | 受損內皮上形成無菌血栓（NBTE） | 黏附細菌的「著陸平台」 |
| 菌血症 | 口腔/皮膚/泌尿道等感染灶細菌進入血流 | 牙科處置、泌尿道感染為常見前因 |
| 細菌附著 | 細菌黏附於 NBTE 上的纖維蛋白基質 | 細菌表面黏附素（adhesins）決定親和力 |
| 贅生物形成 | 細菌+血小板+纖維蛋白+發炎細胞 = vegetation | 心超可偵測，為診斷關鍵 |
| 瓣膜破壞 | 感染侵蝕瓣膜組織 → 穿孔/撕裂/脫垂 | 急性瓣膜關閉不全 → CHF |
| 栓塞 | 贅生物碎片脫落 → 遠端栓塞 | 腎/脾/腦/肢端梗塞 |

### 易感因子
- SAS（主動脈瓣受高速噴射流損傷——IE 風險顯著增加）
- 免疫抑制（長期類固醇、化療）
- 長期留置靜脈導管
- 椎間盤炎/前列腺炎/泌尿道感染（持續菌血症來源）

### 致病菌分布

| 病原 | 佔比 | 特徵 |
|------|------|------|
| Staphylococcus spp. | 20-30% | 皮膚來源，急性進展 |
| Streptococcus spp. | 15-25% | 口腔來源，亞急性進展 |
| E. coli | 15-20% | 泌尿道來源 |
| Bartonella spp. | 10-30% | 培養陰性IE重要病因，需PCR/血清學 |
| Enterococcus spp. | 5-10% | 腸道/泌尿道來源 |
| 培養陰性 | 20-30% | 抗生素預先使用或 Bartonella |

## 二、臨床表現與診斷 (Clinical Signs & Diagnosis)

### 典型表現

| 臨床表現 | 發生率 | 特徵 |
|---------|--------|------|
| 發燒（波動性） | 60-80% | 間歇性高燒，可能被先前抗生素壓制 |
| 新出現或改變的心雜音 | 50-70% | 急性主動脈瓣關閉不全雜音（舒張期） |
| 跛行/關節痛 | 30-40% | 免疫複合物沉積性多發性關節炎 |
| 腎功能異常 | 30-50% | 腎梗塞或免疫複合物腎絲球腎炎 |
| 脾腫大 | 20-30% | 脾梗塞或反應性脾腫 |

### 非典型表現（易誤診）
- 不明原因發燒（FUO）——IE 應列入鑑別
- 急性後肢跛行（栓塞至髂動脈）
- 急性神經症狀（腦栓塞）
- 急性腹痛（腎/脾梗塞）

### 診斷標準

改良 Duke 準則（人醫，獸醫參考使用）：

主要準則：(1) 血培養陽性（典型 IE 病原 ≥2 組陽性）(2) 心超偵測贅生物或新瓣膜關閉不全

次要準則：(1) 易感因子（SAS/免疫抑制）(2) 發燒 >39.5°C (3) 血管現象（栓塞/梗塞）(4) 免疫現象（腎絲球腎炎/關節炎）(5) 1 組血培養陽性

確定 IE = 2 主要 / 1 主要+3 次要 / 5 次要

### 血培養取樣要點
- **3 組**不同部位靜脈穿刺（減少污染假陽性）
- 每組含需氧+厭氧培養瓶
- 取樣間隔 30-60 分鐘（亞急性）或立即連續取樣（急性重症）
- 發燒高峰期取樣可提高陽性率
- 培養前盡量不使用抗生素（已使用者仍應取樣）

## 三、治療策略 (Treatment)

### 抗生素治療

| 階段 | 方案 | 細節 |
|------|------|------|
| 經驗性（培養結果前）| [藥物:Ampicillin] 22 mg/kg IV q6-8h + [藥物:Enrofloxacin] 10 mg/kg IV q24h | 涵蓋 Gram+/Gram- |
| 培養結果後 | 依藥敏試驗調整 | 選擇殺菌性抗生素（bactericidal） |
| Bartonella 疑似 | Azithromycin 5 mg/kg PO q24h ± Doxycycline | PCR/血清學確認 |
| 總療程 | 至少 4-6 週靜脈注射 | 後段可轉口服（部分情況） |

### 併發症管理

| 併發症 | 處置 |
|--------|------|
| CHF（瓣膜破壞） | Furosemide + Pimobendan 標準 CHF 治療 |
| 腎功能異常 | 輸液支持，監測 BUN/Cre |
| 血栓栓塞 | 止痛 + 支持療法 |
| DIC | 新鮮冷凍血漿 + 低分子肝素 |

## 四、人醫借鑒 (Translational Insights)

| 人醫概念 | 獸醫應用 | 現況 |
|---------|---------|------|
| Duke 診斷準則 | 獸醫參考使用，尚無獸醫專屬版本 | 直接沿用人醫準則 |
| 牙科處置前抗生素預防 | SAS 犬牙科前是否預防性抗生素 | 無獸醫 RCT，參考人醫建議 |
| 外科瓣膜置換 | IE 伴嚴重瓣膜破壞的根治性治療 | 人醫成熟，獸醫極少執行 |
| 分子診斷（16S rRNA PCR） | 培養陰性 IE 的病原鑑定 | 獸醫實驗室逐漸提供 |

## 五、臨床爭議 (Clinical Controversies)

| 爭議議題 | 正方觀點 | 反方觀點 | Evidence Level |
|---------|---------|---------|---------------|
| SAS 犬牙科前預防性抗生素 | 降低 IE 風險（類比人醫建議） | 無獸醫 RCT 支持，可能增加抗藥性 | Level V |
| 培養陰性 IE 的治療方向 | 經驗性涵蓋 Bartonella（台灣為流行區） | PCR/血清學確認後再針對治療 | Level IV |
| 治療終點判斷 | 臨床症狀+CRP/白血球正常化 4-6 週 | 缺乏明確生物標記定義治癒 | Level IV |

[圖片:感染性心內膜炎心超贅生物影像與瓣膜破壞示意圖]`,
  clinical_pearl: '感染性心內膜炎的診斷陷阱：血培養陰性率高達 20-30%，主要原因為 (1) 抗生素已先使用 (2) Bartonella spp. 為難培養病原。台灣為 Bartonella 流行區（跳蚤媒介），對於「培養陰性 IE」應積極以 PCR 或血清學排除 Bartonella。此外，心超贅生物偵測有限制——小於 2-3 mm 的贅生物可能無法偵測，早期 IE 心超可能正常。因此「心超正常不排除 IE」——臨床高度懷疑時應重複心超並持續血培養。',
  common_mistakes: [
    '僅取 1 組血培養即下結論——需 3 組不同部位取樣以區分真正菌血症與皮膚污染',
    '使用抑菌性而非殺菌性抗生素——IE 治療必須使用殺菌性抗生素（bactericidal）才能穿透贅生物',
    '治療不足 4 週即停藥——過早停藥復發率極高',
    '忽略 SAS 犬為 IE 高風險族群——SAS 犬出現不明原因發燒應優先考慮 IE',
    '將免疫複合物性多發性關節炎誤診為原發性關節炎——忽略尋找感染灶',
  ],
  disease_data: {
    signalment: '好發中大型犬，德國牧羊犬為高風險品種。雄性略多於雌性。中年至老年犬（平均 4-8 歲）。SAS 犬為特別高風險。貓極罕見。',
    etiology: '微生物感染心臟瓣膜或心內膜。最常見致病菌：Staphylococcus spp.、Streptococcus spp.、E. coli、Bartonella spp.。感染來源：口腔感染（牙周病）、泌尿道感染、皮膚傷口、椎間盤炎、前列腺炎。瓣膜內皮損傷為細菌附著的先決條件。',
    pathogenesis: '瓣膜內皮損傷→無菌血栓形成（NBTE）→菌血症時細菌附著→贅生物形成（細菌+血小板+纖維蛋白）→瓣膜組織侵蝕與破壞→急性瓣膜關閉不全→CHF。贅生物碎片脫落→遠端栓塞（腎/脾/腦/肢端梗塞）。免疫複合物沉積→腎絲球腎炎、多發性關節炎。',
    clinical_signs: [
      { sign: '波動性發燒', category: 'primary', description: '間歇性高燒 >39.5°C，可能被抗生素暫時壓制' },
      { sign: '新出現或改變的心雜音', category: 'primary', description: '急性主動脈瓣關閉不全舒張期雜音最具特異性' },
      { sign: '跛行/多發性關節炎', category: 'primary', description: '免疫複合物沉積性，非化膿性，多關節受累' },
      { sign: '虛弱/食慾下降/體重減輕', category: 'secondary', description: '慢性感染全身性症狀' },
      { sign: '血尿/蛋白尿', category: 'secondary', description: '腎梗塞或免疫複合物腎絲球腎炎' },
      { sign: '急性神經症狀', category: 'secondary', description: '腦栓塞導致，較少見但預後極差' },
    ],
    staging: null,
    differential_diagnosis: [
      { condition: 'MMVD（退化性瓣膜病）', key_differentiator: '慢性進展、不伴發燒或全身感染徵象、心超無贅生物' },
      { condition: '免疫介導性多發性關節炎（IMPA）', key_differentiator: '需排除感染灶；IE 伴隨的 IMPA 治療為抗生素而非免疫抑制劑' },
      { condition: '不明原因發燒（FUO）', key_differentiator: 'IE 為 FUO 重要鑑別診斷之一，需系統性評估心臟' },
      { condition: '全身性紅斑性狼瘡（SLE）', key_differentiator: 'Libman-Sacks endocarditis 為無菌性，血培養陰性，抗核抗體陽性' },
    ],
    diagnostic_workup: '1. 血液檢查（CBC：白血球增多伴左移；生化：低白蛋白、高球蛋白、腎指數異常；CRP 升高）→ 2. 尿液分析（血尿、蛋白尿、細菌尿）→ 3. 血液培養 × 3 組（不同部位取樣，需氧+厭氧）→ 4. 心臟超音波（贅生物偵測、瓣膜破壞評估、新瓣膜關閉不全）→ 5. Bartonella PCR/血清學（培養陰性時）→ 6. 腹部超音波（脾/腎梗塞篩檢）→ 7. 關節液分析（多發性關節炎時）',
    treatment_protocol: '經驗性抗生素（培養結果前）：[藥物:Ampicillin] 22 mg/kg IV q6-8h + [藥物:Enrofloxacin] 10 mg/kg IV q24h。培養結果後依藥敏調整為最佳殺菌性方案。總療程 4-6 週靜脈注射（穩定後部分轉口服）。Bartonella 確認時：Azithromycin 5 mg/kg PO q24h + Doxycycline 5 mg/kg PO BID。併發 CHF：加入 Furosemide + Pimobendan 標準治療。嚴重瓣膜破壞考慮轉診外科評估（獸醫可行性極有限）。',
    prognosis: '整體預後不良。中位存活約 3-6 個月。主動脈瓣受侵犯預後較二尖瓣差。影響預後因子：(1) 瓣膜破壞嚴重度（急性嚴重關閉不全→急性 CHF）(2) 栓塞併發症（腎/腦梗塞）(3) 致病菌種（Staphylococcus 預後較差）(4) 治療反應（血培養持續陽性代表治療失敗）。長期存活者需終身心臟病管理。',
    monitoring: '治療期間：每日體溫監測。第 3-5 天重複血培養（確認抗生素有效）。每週 CBC + CRP 追蹤感染指標。每 1-2 週心超追蹤贅生物大小與瓣膜功能。腎功能每週監測。治療結束後 1 週重複血培養確認根除。出院後每月回診 × 3 個月，之後每 3 個月。',
    owner_communication: '感染性心內膜炎是嚴重疾病，需誠實告知預後不良。治療需長期住院（靜脈抗生素 4-6 週），費用可觀。即使治療成功清除感染，瓣膜破壞可能為永久性，需長期心臟病管理。部分犬可能因嚴重瓣膜破壞、栓塞併發症或感染無法控制而預後極差。及早發現與積極治療是改善預後的關鍵。',
  },
  diagnostic_data: null,
  procedure_data: null,
  visual_placeholders: [
    { position: '病理機轉段落', type: 'flowchart', description: 'IE 發病機轉級聯反應圖——從內皮損傷到贅生物形成' },
    { position: '診斷段落', type: 'annotated_image', description: '心超贅生物典型影像與判讀標註' },
  ],
  interactive_placeholders: [
    { position: '診斷準則段落', type: 'decision_tree', description: '改良 Duke 準則互動式評分——輸入臨床發現自動判定 IE 可能性' },
  ],
  drug_api_links: ['Ampicillin', 'Enrofloxacin', 'Metronidazole'],
  references: [
    { type: 'journal', citation: 'Sykes JE, Kittleson MD, Pesavento PA, et al. Evaluation of the relationship between causative organisms and clinical characteristics of infective endocarditis in dogs: 71 cases (1992-2005). J Am Vet Med Assoc. 2006;228(11):1723-1734.', relevance: '犬 IE 大規模回溯研究——致病菌與臨床特徵關聯' },
    { type: 'textbook', citation: 'Ware WA. Cardiovascular Disease in Small Animal Medicine. Manson Publishing, 2011. Chapter: Infective Endocarditis.', relevance: 'IE 診斷與治療完整教材' },
    { type: 'journal', citation: 'MacDonald KA, Chomel BB, Kittleson MD, et al. A prospective study of canine infective endocarditis in northern California (1999-2001): emergence of Bartonella as a prevalent etiologic agent. J Vet Intern Med. 2004;18(1):56-64.', relevance: 'Bartonella 作為犬 IE 新興病原的重要研究' },
    { type: 'guideline', citation: 'Habib G et al. 2015 ESC Guidelines for the management of infective endocarditis. Eur Heart J. 2015;36(44):3075-3128.', relevance: '人醫 IE 治療指引——獸醫參考使用' },
  ],
  is_current: true,
  created_at: now,
};

/** 肺動脈高壓 — 疾病型 */
const contentPulmonaryHTN: NodeContent = {
  id: 'CONTENT-L3-009',
  node_id: 'CARDIO-L3-009',
  version: 1,
  summary: '肺動脈高壓（Pulmonary Hypertension, PH）是肺動脈壓力持續升高（估計收縮壓 >30 mmHg 或三尖瓣逆流速度 >2.8 m/s）的病理狀態。ACVIM 共識將 PH 分為六大病因群（前毛細管性、後毛細管性、合併型等）。台灣因亞熱帶氣候，心絲蟲症為 PH 最常見原因之一。Sildenafil（PDE5 inhibitor）1-2 mg/kg BID-TID 為目前主要治療藥物。',
  learning_objectives: [
    '描述肺動脈高壓的 ACVIM 病因分類系統',
    '列舉犬貓 PH 的常見病因（心絲蟲、左心疾病、呼吸道疾病）',
    '運用三尖瓣逆流速度（TRV）估算肺動脈收縮壓',
    '制定 Sildenafil 為主的 PH 治療方案',
    '說明 PH 的預後因子與長期監測計畫',
  ],
  key_points: [
    'PH 定義：肺動脈收縮壓估計值 >30 mmHg 或 TRV >2.8 m/s',
    '嚴重度分級：輕度（TRV 2.8-3.5 m/s）、中度（3.5-4.3 m/s）、重度（>4.3 m/s）',
    '最常見病因：左心疾病（MMVD/DCM 合併 PH，後毛細管性）、心絲蟲症（前毛細管性）、慢性呼吸道疾病',
    '台灣流行病學：心絲蟲為 PH 最重要的前毛細管性病因，預防醫學至關重要',
    '心超診斷關鍵：TRV 測量（modified Bernoulli equation：ΔP = 4V²）+ 右心擴大/肥大評估',
    'Sildenafil（PDE5 抑制劑）1-2 mg/kg PO BID-TID 為一線治療——選擇性擴張肺血管',
    '替代/輔助藥物：Pimobendan（改善右心功能）、Tadalafil（長效 PDE5i）',
  ],
  body: `# 肺動脈高壓 (Pulmonary Hypertension, PH)

## 一、分類與病理機制 (Classification & Pathophysiology)

### ACVIM 共識分類（2020）

| 群組 | 類型 | 代表病因 | 機轉 |
|------|------|---------|------|
| Group 1 | 肺動脈性 PH（PAH） | 原發性/特發性 | 肺小動脈重塑（中膜肥厚+內膜增生） |
| Group 2 | 左心疾病（後毛細管性） | MMVD、DCM、HCM | 左心房壓↑→肺靜脈壓↑→被動性肺動脈壓↑ |
| Group 3 | 呼吸道疾病/缺氧 | 慢性支氣管炎、肺纖維化 | 缺氧性肺血管收縮（HPV） |
| Group 4 | 肺血管阻塞 | 心絲蟲症、肺血栓栓塞 | 血管腔物理性阻塞 |
| Group 5 | 寄生蟲相關 | Dirofilaria immitis | 蟲體+免疫反應→血管內膜損傷 |
| Group 6 | 多因子/不明 | 先天性分流（PDA/VSD Eisenmenger） | 肺過度灌流→血管重塑 |

### 病理生理核心

肺動脈壓升高 → 右心室壓力過載 → 右心室同心性肥大 → 右心室舒張功能障礙 → 右心衰竭（三尖瓣逆流、腹水、肝鬱血、頸靜脈怒張）。

後毛細管性 PH（Group 2）機轉：左心房壓升高 → 肺靜脈壓升高 → 被動性肺動脈壓升高。長期可導致肺血管反應性重塑（reactive PH），成為合併前+後毛細管性。

缺氧性肺血管收縮（HPV）：肺泡 PO₂ 下降 → 局部肺小動脈收縮 → 減少無效灌流。但慢性缺氧下 HPV 持續 → 肺動脈壓力持續升高 + 血管重塑。

## 二、臨床表現與診斷 (Clinical Signs & Diagnosis)

### 臨床表現

| 表現 | 發生率 | 機轉 |
|------|--------|------|
| 運動不耐 | 60-80% | 心輸出量下降 |
| 咳嗽 | 40-60% | 肺動脈擴大壓迫氣管或合併呼吸道疾病 |
| 呼吸困難 | 30-50% | 右心衰竭或合併肺水腫 |
| 暈厥 | 20-30% | 運動時心輸出量驟降 |
| 腹水 | 20-40% | 右心衰竭 |
| 發紺 | 10-20% | 嚴重低氧血症（右→左分流或 V/Q 不匹配） |

### 心超診斷

三尖瓣逆流速度（TRV）是估算肺動脈收縮壓的關鍵指標：

PASP ≈ 4 × TRV² + RAP（右心房壓，通常估計 5 mmHg）

| 嚴重度 | TRV (m/s) | 估計 PASP (mmHg) | 臨床意義 |
|--------|-----------|-----------------|---------|
| 正常 | <2.8 | <36 | 無 PH |
| 輕度 | 2.8-3.5 | 36-55 | 可能無症狀 |
| 中度 | 3.5-4.3 | 55-79 | 症狀出現 |
| 重度 | >4.3 | >79 | 右心衰竭風險高 |

其他心超指標：右心室擴大/肥大、心室中隔平坦化（D-sign）、肺動脈幹擴大、主肺動脈與主動脈比（PA/Ao）升高。

### 病因追查

| 檢查 | 目的 |
|------|------|
| 心絲蟲抗原/抗體檢測 | 排除心絲蟲感染（台灣必檢） |
| 胸腔 X 光 | 肺部疾病、心臟大小、肺動脈擴大 |
| 動脈血氧分析 | 缺氧程度評估 |
| D-dimer + CT 血管攝影 | 肺血栓栓塞評估 |
| 左心評估（心超） | MMVD/DCM 分期 |

## 三、治療策略 (Treatment)

### 藥物治療

| 藥物 | 劑量 | 機轉 | 適用群組 |
|------|------|------|---------|
| [藥物:Sildenafil] | 1-2 mg/kg PO BID-TID | PDE5 抑制→cGMP↑→肺血管舒張 | 所有群組（前毛細管為主） |
| [藥物:Tadalafil] | 1 mg/kg PO SID | 長效 PDE5 抑制 | Sildenafil 替代 |
| [藥物:Pimobendan] | 0.25-0.3 mg/kg PO BID | 改善右心收縮功能 | 合併右心功能障礙 |
| Furosemide | 2-4 mg/kg PO BID-TID | 容量控制（右心衰腹水） | 合併右心衰竭 |

### 病因導向治療

| 病因 | 特異性治療 |
|------|----------|
| 心絲蟲症 | 成蟲殺滅（melarsomine）+ 限制運動 |
| 左心疾病 | 標準 MMVD/DCM 治療（控制 LA 壓） |
| 慢性呼吸道疾病 | 支氣管擴張劑、氧氣支持 |
| 肺血栓栓塞 | 抗凝血治療 |

### 治療要點
- Group 2（左心疾病）PH：優先治療基礎左心疾病——降低 LA 壓可有效緩解 PH
- Group 4/5（心絲蟲）：Sildenafil 在心絲蟲殺滅前可暫時緩解症狀
- 氧氣支持：短期可緩解 HPV，但長期不切實際

## 四、人醫借鑒 (Translational Insights)

| 人醫概念 | 獸醫應用 | 現況 |
|---------|---------|------|
| Endothelin receptor antagonist（Bosentan） | 犬 PAH 輔助治療 | 人醫一線，獸醫成本過高限制使用 |
| Prostacyclin analogue（Treprostinil） | 犬嚴重 PAH | 人醫成熟，獸醫極少使用 |
| Riociguat（sGC 刺激劑） | 犬 CTEPH 新機轉治療 | 人醫已上市，獸醫無數據 |
| 右心導管直接測壓 | PH 確診金標準 | 人醫常規，獸醫少數專科可執行 |

## 五、臨床爭議 (Clinical Controversies)

| 爭議議題 | 正方觀點 | 反方觀點 | Evidence Level |
|---------|---------|---------|---------------|
| Sildenafil 在 Group 2 PH 的角色 | 可能緩解合併的反應性 PH 成分 | 基礎左心疾病治療才是根本 | Level III |
| Sildenafil 劑量上限 | 部分犬需 3 mg/kg TID 才有效 | 高劑量全身性低血壓風險 | Level IV |
| PH 犬運動建議 | 適度活動可維持心肺功能 | 嚴重 PH 運動可誘發暈厥/猝死 | Level V |

[圖片:肺動脈高壓心超 TRV 測量與右心評估示意圖]`,
  clinical_pearl: '台灣臨床實務中，PH 的病因追查第一步應為心絲蟲抗原/抗體檢測——台灣為心絲蟲高流行區，即使有良好預防史的犬也不應遺漏。心絲蟲導致的 PH（Group 4/5）在殺蟲治療後可能改善，但嚴重肺血管損傷可能為永久性。\n\n判讀技巧：TRV 測量需確保取得最佳三尖瓣逆流血流訊號（最高速度方向應與超音波光束平行）。低估 TRV 是最常見錯誤——TRV < 2.8 m/s 不代表無 PH，可能是取角度不佳或逆流量太小。其他右心指標（RV 擴大、中隔平坦化）可輔助判斷。',
  common_mistakes: [
    '忽略在台灣犬 PH 中排除心絲蟲——心絲蟲為台灣最重要的前毛細管性 PH 病因',
    'TRV 測量角度不佳導致低估肺動脈壓——需多切面嘗試取得最高 TRV 值',
    '對 Group 2（左心疾病）PH 僅使用 Sildenafil 而未治療基礎左心疾病——本末倒置',
    '將 PH 犬的運動限制放鬆——嚴重 PH 犬運動時心輸出量無法增加，可誘發暈厥或猝死',
  ],
  disease_data: {
    signalment: '犬各品種與年齡均可發生，病因不同則好發族群不同。心絲蟲相關 PH：台灣未預防犬。左心疾病相關 PH：MMVD 好發品種老年犬。呼吸道疾病相關 PH：短頭犬種、慢性支氣管炎老年犬。貓 PH 少見但可發生於 HCM 或心絲蟲感染。',
    etiology: 'Group 1（肺動脈性）：原發性/特發性，犬極罕見。Group 2（左心疾病）：MMVD、DCM 合併 LA 壓升高，最常見。Group 3（呼吸道/缺氧）：慢性支氣管炎、肺纖維化、氣管塌陷。Group 4/5（血管阻塞/寄生蟲）：心絲蟲症為台灣最重要病因。Group 6（多因子）：先天性左→右分流（PDA/VSD）長期肺過度灌流。',
    pathogenesis: '肺動脈壓持續升高→右心室壓力過載→同心性肥大→舒張功能障礙→進展為收縮功能障礙→三尖瓣逆流惡化→右心衰竭（腹水、肝鬱血、頸靜脈怒張）。Group 2 特殊路徑：LA 壓↑→肺靜脈壓↑→被動性肺動脈壓↑→長期可誘發反應性血管重塑（合併前+後毛細管性）。',
    clinical_signs: [
      { sign: '運動不耐', category: 'primary', description: '心輸出量下降最常見表現，活動力明顯衰退' },
      { sign: '咳嗽', category: 'primary', description: '擴大肺動脈壓迫左主支氣管或合併呼吸道疾病' },
      { sign: '暈厥', category: 'primary', description: '運動時心輸出量無法增加，腦灌流不足' },
      { sign: '呼吸困難', category: 'secondary', description: '右心衰竭或合併左心疾病肺水腫' },
      { sign: '腹水', category: 'secondary', description: '右心衰竭導致體循環鬱血' },
      { sign: '發紺', category: 'secondary', description: '嚴重 V/Q 不匹配或右→左分流（Eisenmenger）' },
    ],
    staging: { system: 'ACVIM PH severity (TRV-based)', stages: ['Normal: TRV <2.8 m/s', 'Mild: TRV 2.8-3.5 m/s (PASP 36-55 mmHg)', 'Moderate: TRV 3.5-4.3 m/s (PASP 55-79 mmHg)', 'Severe: TRV >4.3 m/s (PASP >79 mmHg)'] },
    differential_diagnosis: [
      { condition: '右心衰竭（其他原因）', key_differentiator: '三尖瓣發育不良、右心心肌病——TRV 可能不升高（逆流量大但壓力不高）' },
      { condition: '心包膜積液', key_differentiator: '心超直接可見心包膜積液，右心壓迫為外因性' },
      { condition: '腹腔疾病伴腹水', key_differentiator: '肝硬化、腹腔腫瘤——心臟評估正常' },
      { condition: '呼吸道疾病（無 PH）', key_differentiator: '咳嗽原因需鑑別——心超 TRV 正常排除 PH 貢獻' },
    ],
    diagnostic_workup: '1. 心臟超音波（核心）→ TRV 測量 + 右心型態評估 + 左心評估 → 2. 心絲蟲抗原/抗體檢測（台灣必檢）→ 3. 胸腔 X 光（心臟大小、肺部疾病、肺動脈擴大）→ 4. CBC + 生化 + 尿液（全身評估）→ 5. 動脈血氧分析（缺氧程度）→ 6. NT-proBNP（輔助嚴重度評估）→ 7. 進階：D-dimer、CT 血管攝影（肺栓塞疑慮時）',
    treatment_protocol: '一線治療：[藥物:Sildenafil] 1-2 mg/kg PO BID-TID（從低劑量開始，每 3-5 天遞增，監測血壓）。替代：[藥物:Tadalafil] 1 mg/kg PO SID（長效，依從性較佳）。輔助治療：[藥物:Pimobendan] 0.25-0.3 mg/kg PO BID（改善右心功能）。右心衰竭時加 Furosemide + Spironolactone。\n\n病因導向：心絲蟲→殺蟲治療 + 限制運動；左心疾病→標準 MMVD/DCM 治療；呼吸道疾病→支氣管擴張劑 + 氧氣。運動限制：中重度 PH 避免激烈運動。',
    prognosis: '取決於基礎病因與嚴重度。左心疾病相關 PH：治療基礎疾病可改善 PH，預後取決於 MMVD/DCM 分期。心絲蟲相關 PH：成功殺蟲後可能改善，但嚴重血管損傷為永久性。嚴重 PH（TRV >4.3 m/s）預後較差。Sildenafil 可改善症狀與生活品質，但長期存活數據有限。Kellihan HB 研究顯示 Sildenafil 治療犬中位存活約 8-14 個月（依病因而異）。',
    monitoring: 'Sildenafil 啟始後 1-2 週回診：臨床症狀改善？血壓（排除低血壓）。1 個月後心超重測 TRV 評估治療反應。穩定後每 3-6 個月心超追蹤。右心衰竭犬同時監測腹水量、體重變化、腎功能。居家監測：睡眠呼吸次數、活動力、食慾。',
    owner_communication: '肺動脈高壓是慢性進行性疾病，治療目標為改善症狀與生活品質而非治癒。Sildenafil 是目前最主要的治療藥物，需長期服用。找出並治療根本原因（如心絲蟲、左心疾病）是最重要的。中重度 PH 犬需限制激烈運動以降低暈厥與猝死風險。藥物費用（Sildenafil）在台灣已有學名藥選項，相對可負擔。',
  },
  diagnostic_data: null,
  procedure_data: null,
  visual_placeholders: [
    { position: '分類段落', type: 'comparison_table', description: 'ACVIM PH 六大群組病因分類比較表' },
    { position: '診斷段落', type: 'annotated_image', description: '心超 TRV 測量操作與右心評估標註圖' },
  ],
  interactive_placeholders: [
    { position: '嚴重度分級段落', type: 'interactive_staging', description: '輸入 TRV 值自動計算 PASP 並分級嚴重度' },
  ],
  drug_api_links: ['Sildenafil', 'Pimobendan', 'Tadalafil'],
  references: [
    { type: 'guideline', citation: 'Reinero C, Visser LC, Kellihan HB, et al. ACVIM consensus statement guidelines for the diagnosis, classification, treatment, and monitoring of pulmonary hypertension in dogs. J Vet Intern Med. 2020;34(2):549-573.', relevance: 'ACVIM PH 診斷治療共識指引' },
    { type: 'journal', citation: 'Kellihan HB, Waller KR, Pinkos A, et al. Acute resolution of pulmonary alveolar infiltrates in 10 dogs with pulmonary hypertension treated with sildenafil citrate: 2005-2014. J Vet Cardiol. 2015;17(3):182-191.', relevance: 'Sildenafil 治療犬 PH 臨床研究' },
    { type: 'textbook', citation: 'Ware WA. Cardiovascular Disease in Small Animal Medicine. Manson Publishing, 2011. Chapter: Pulmonary Hypertension.', relevance: 'PH 診斷與治療完整教材' },
    { type: 'journal', citation: 'Johnson LR, Stern JA. Clinical features and outcome in 25 dogs with respiratory-associated pulmonary hypertension treated with sildenafil. J Vet Intern Med. 2020;34(1):65-73.', relevance: '呼吸道疾病相關 PH 的 Sildenafil 治療結果' },
  ],
  is_current: true,
  created_at: now,
};

/** 貓動脈血栓栓塞症 — 疾病型 */
const contentFelineATE: NodeContent = {
  id: 'CONTENT-L3-010',
  node_id: 'CARDIO-L3-010',
  version: 1,
  summary: '貓動脈血栓栓塞症（Feline Arterial Thromboembolism, FATE/ATE）是貓心肌病最嚴重的併發症，約 90% 與心肌病相關（HCM 最常見）。血栓最常阻塞於主動脈分叉處（saddle thrombus），導致急性後肢癱瘓。臨床表現為 5 Ps（Pain、Pulselessness、Pallor、Paralysis、Poikilothermia）。存活出院率僅 30-40%。Clopidogrel 18.75 mg/cat PO SID 為二級預防首選。',
  learning_objectives: [
    '描述貓 ATE 的血栓形成機轉（Virchow triad 在貓心肌病的體現）',
    '辨識 ATE 的 5 Ps 臨床特徵與急性評估要點',
    '制定 ATE 急性期的止痛與支持療法',
    '比較 Clopidogrel vs Aspirin 在 ATE 預防的證據（FAT CAT study）',
    '評估 ATE 的預後因子與飼主溝通策略',
  ],
  key_points: [
    '~90% ATE 與心肌病相關——HCM 最常見，其次 UCM/RCM/DCM',
    '約 25% ATE 為貓心肌病的首發表現（之前未診斷）',
    'Saddle thrombus（主動脈分叉處）佔 70-75%，前肢（腋動脈/肱動脈）佔 10-15%',
    '5 Ps：Pain（劇痛——瞳孔放大、嚎叫）、Pulselessness（股動脈脈搏消失）、Pallor（肉墊蒼白/發紺）、Paralysis（後肢癱瘓/LMN signs）、Poikilothermia（患肢冰涼）',
    '急性管理重點：止痛（Methadone/Buprenorphine）+ 輸液支持 + 抗凝血（低分子肝素或普通肝素）',
    '存活出院率僅 30-40%，復發率約 30-50%',
    '二級預防：Clopidogrel 18.75 mg/cat PO SID（FAT CAT 研究證實優於 Aspirin）',
    '安樂死討論時機：雙側 ATE、低體溫 <37°C、嚴重 CHF 合併、飼主無法提供密集照護',
  ],
  body: `# 貓動脈血栓栓塞症 (Feline Arterial Thromboembolism, ATE)

## 一、病理機制 (Pathophysiology)

### Virchow Triad 在貓心肌病的體現

| 要素 | 貓心肌病中的表現 | 機轉 |
|------|----------------|------|
| 血流淤滯 | 左心房擴大→心耳內血流速度下降→自發性回聲（smoke） | LA/Ao ≥ 2.0 時風險顯著增加 |
| 內皮損傷 | 心房壁內皮功能障礙 | 心肌病相關內皮活化 |
| 高凝血狀態 | 血小板過度活化+凝血因子異常 | 貓天生血小板高反應性 |

### 血栓形成與栓塞路徑

左心房（尤其左心耳）血栓形成 → 脫落進入主動脈血流 → 栓塞至主動脈分叉（saddle thrombus，70-75%）或前肢動脈（10-15%）→ 遠端組織急性缺血 → 缺血-再灌流損傷。

### 栓塞部位分布

| 部位 | 比例 | 臨床表現 |
|------|------|---------|
| 主動脈分叉（saddle） | 70-75% | 雙側後肢急性癱瘓 |
| 單側髂動脈 | 10-15% | 單側後肢跛行/癱瘓 |
| 前肢（腋/肱動脈） | 10-15% | 單前肢跛行/癱瘓 |
| 腎動脈 | 3-5% | 急性腎損傷 |
| 腸系膜動脈 | <3% | 急腹症 |
| 腦動脈 | <2% | 急性神經症狀 |

### 缺血-再灌流損傷

急性缺血 → 組織 ATP 耗竭 → 細胞損傷/壞死 → 鉀離子與肌紅蛋白釋放。再灌流時（若血栓自溶或溶栓治療）→ 活性氧族（ROS）大量產生 → 進一步組織損傷 → 高鉀血症 + 肌紅蛋白尿 + 代謝性酸中毒 → 再灌流致死（reperfusion injury/death）。

## 二、臨床表現與診斷 (Clinical Signs & Diagnosis)

### 5 Ps 評估

| P | 評估方法 | 發現 |
|---|---------|------|
| Pain（疼痛） | 行為觀察 | 嚎叫、瞳孔放大、過度換氣、觸摸患肢激烈反應 |
| Pulselessness（無脈搏） | 股動脈觸診 | 患肢股動脈脈搏消失或顯著減弱 |
| Pallor（蒼白） | 肉墊/趾甲床顏色 | 蒼白或發紺（對比健側粉紅色） |
| Paralysis（癱瘓） | 神經學檢查 | 患肢 LMN signs：無反射、肌肉鬆弛、無深痛覺 |
| Poikilothermia（體溫隨環境） | 患肢溫度 | 患肢觸感冰涼（對比健側溫暖） |

### 鑑別診斷

| 疾病 | 鑑別要點 |
|------|---------|
| 脊髓損傷/椎間盤疾病 | 有深痛覺（通常）、脈搏正常、肢端溫暖 |
| 髂股動脈血栓（犬） | 犬罕見，更可能與凝血異常相關 |
| 脊髓梗塞（FCE） | 犬較常見，非疼痛性，脈搏正常 |
| 創傷性骨折/脫臼 | 病史+X光可區分 |

### 確診流程
1. 理學檢查——5 Ps 評估
2. 心臟超音波——確認心肌病存在+LA 擴大+左心耳血栓/smoke
3. 血液檢查——CK 顯著升高（肌肉壞死）、高鉀血症、代謝性酸中毒、氮血症
4. 杜卜勒超音波（可選）——確認動脈血流中斷

## 三、治療策略 (Treatment)

### 急性管理（前 24-72 小時）

| 優先級 | 處置 | 細節 |
|--------|------|------|
| 第一 | **止痛** | Methadone 0.1-0.3 mg/kg IV/IM q4-6h 或 Buprenorphine 0.02 mg/kg IV/buccal q6-8h |
| 第二 | **氧氣支持** | 合併 CHF 肺水腫時 |
| 第三 | **輸液治療** | 謹慎！合併 CHF 時需限量；監測 K⁺ |
| 第四 | **抗凝血** | [藥物:Heparin] (UFH) 250-300 IU/kg IV bolus → 150-200 IU/kg SC q6-8h；或低分子肝素 Dalteparin 100-150 IU/kg SC q12-24h |
| 第五 | **CHF 管理** | Furosemide 1-2 mg/kg IV（合併肺水腫時） |
| 第六 | **高鉀處理** | Calcium gluconate 10% 0.5-1 mL/kg IV slowly + Regular insulin + Dextrose（K⁺ > 7 mEq/L） |

### 不建議的治療
- **溶栓藥物**（tPA, streptokinase）：再灌流損傷致死風險高，研究未顯示存活率改善
- **外科取栓**：併發症高、成功率低，不推薦

### 長期預防（二級預防）

| 藥物 | 劑量 | 證據 |
|------|------|------|
| [藥物:Clopidogrel] | 18.75 mg/cat PO SID | FAT CAT 研究（2015）：Clopidogrel 顯著優於 Aspirin（復發中位時間 443d vs 192d） |
| [藥物:Aspirin]（替代） | 81 mg/cat PO q72h（低劑量） | 效果不如 Clopidogrel，但仍有部分保護 |
| [藥物:Heparin]（橋接） | 出院前過渡至口服 Clopidogrel | 住院期間抗凝血 |

### 一級預防（有心肌病但未發生 ATE）

LA 擴大（LA/Ao ≥ 2.0）或左心耳 smoke/血栓 → 開始 Clopidogrel 18.75 mg/cat PO SID。ACVIM 2020 共識支持高風險貓的一級預防。

## 四、預後評估 (Prognosis)

### 存活數據
- 整體存活出院率：33-39%
- 出院後中位存活：77-223 天（取決於基礎心肌病嚴重度）
- ATE 復發率：約 30-50%

### 預後因子

| 因子 | 較好預後 | 較差預後 |
|------|---------|---------|
| 受侵肢體數 | 單側 | 雙側 |
| 直腸體溫 | >37.2°C | <37°C（低體溫） |
| CHF 狀態 | 無 CHF | 合併嚴重 CHF |
| 運動功能恢復 | 48-72h 內出現改善 | 72h 無改善 |
| 基礎心肌病 | 輕度 LA 擴大 | 嚴重 LA 擴大 + 收縮功能障礙 |

### 安樂死考量時機
- 雙側後肢 + 低體溫 <37°C + 嚴重 CHF → 存活機會極低
- 飼主無法提供 3-5 天密集住院照護
- 反覆 ATE 發作且基礎心肌病持續惡化

## 五、人醫借鑒 (Translational Insights)

| 人醫概念 | 獸醫應用 | 現況 |
|---------|---------|------|
| DOAC（直接口服抗凝血劑，如 Rivaroxaban） | 貓 ATE 預防替代 Clopidogrel | 安全性/劑量研究中，初步PK數據發表 |
| 機械取栓（Aspiration thrombectomy） | 貓主動脈血栓微創移除 | 技術上可行但體型限制大 |
| Dual antiplatelet therapy | Clopidogrel + Aspirin 合併使用 | 出血風險增加，獸醫證據不足 |
| 左心耳封堵術 | 減少血栓來源 | 人醫 AF 患者使用，貓不適用（太小） |

## 六、臨床爭議 (Clinical Controversies)

| 爭議議題 | 正方觀點 | 反方觀點 | Evidence Level |
|---------|---------|---------|---------------|
| ATE 是否應積極治療 vs 安樂死 | 30-40% 可存活出院，值得嘗試 | 治療過程痛苦、費用高、復發率高 | Level II |
| 溶栓治療（tPA）的角色 | 理論上可溶解血栓恢復灌流 | 再灌流損傷致死風險高，研究無存活改善 | Level III |
| 一級預防何時開始 | LA/Ao ≥ 2.0 + smoke → 立即開始 | 低風險貓長期用藥的成本效益不確定 | Level III |
| DOAC vs Clopidogrel | DOAC 同時抗凝+抗血小板 | 貓的安全劑量尚未確立 | Level IV |

[圖片:貓 ATE 5 Ps 臨床評估圖——肉墊顏色比較與脈搏觸診]`,
  clinical_pearl: '貓 ATE 的急診「30 分鐘規則」：到院後 30 分鐘內必須完成 (1) 止痛——ATE 是極度疼痛的急症，止痛為第一優先 (2) 5 Ps 快速評估 (3) 初步預後判斷（單側 vs 雙側、體溫、是否合併 CHF）。許多飼主在知道預後後會選擇安樂死——不要在未充分止痛的情況下進行冗長的討論。先止痛，再討論。\n\n【台灣臨床現況】台灣貓飼養量持續增長，HCM 為最常見貓心肌病。Clopidogrel 在台灣可取得人用劑型（75 mg），需分切為 1/4 錠（18.75 mg/cat）。FAT CAT 研究已改變臨床實務，Clopidogrel 已取代 Aspirin 成為 ATE 預防首選。',
  common_mistakes: [
    '未將止痛列為第一優先——ATE 是貓急診中最痛的疾病之一，止痛延遲等同於虐待',
    '使用溶栓藥物——tPA/streptokinase 在貓 ATE 不改善存活率且再灌流損傷致死風險高',
    '合併 CHF 時過度輸液——貓 ATE 常合併 CHF，輸液過量加重肺水腫',
    '使用 Aspirin 而非 Clopidogrel 作為二級預防——FAT CAT 研究已證實 Clopidogrel 顯著優於 Aspirin',
    '忽略高鉀血症的致命風險——ATE 後肌肉壞死釋放 K⁺，再灌流時可致致命性高鉀血症',
  ],
  disease_data: {
    signalment: '貓，各品種均可發生。雄性略多於雌性。中年至老年（平均 8-12 歲），但年輕 HCM 貓亦可發生。好發品種：緬因貓、布偶貓、英國短毛貓（HCM 好發品種）。約 25% ATE 貓之前未診斷心肌病。',
    etiology: '~90% 與心肌病相關：HCM（最常見，~67%）、UCM（~12%）、RCM（~8%）、DCM（~3%）。非心臟性原因（~10%）：肺腫瘤、甲狀腺亢進、全身感染。血栓主要在左心房（尤其左心耳）形成後脫落栓塞至周邊動脈。',
    pathogenesis: 'Virchow triad：(1) 血流淤滯（LA 擴大→心耳血流速↓）+ (2) 內皮損傷（心肌病相關）+ (3) 高凝血狀態（貓血小板高反應性）→ 左心房血栓形成 → 脫落 → 栓塞至主動脈分叉（70-75%，saddle thrombus）→ 遠端組織急性缺血 → 肌肉壞死（CK↑）+ 高鉀血症 + 代謝性酸中毒。再灌流時 ROS 大量產生→進一步組織損傷。',
    clinical_signs: [
      { sign: '急性後肢癱瘓', category: 'primary', description: '突發雙側後肢無法行走，LMN signs（無反射、肌肉鬆弛）' },
      { sign: '劇烈疼痛', category: 'primary', description: '嚎叫、瞳孔放大、過度換氣、觸摸患肢激烈反應' },
      { sign: '股動脈脈搏消失', category: 'primary', description: '觸診患側股動脈無脈搏或顯著減弱' },
      { sign: '肉墊蒼白/發紺', category: 'secondary', description: '患肢肉墊/趾甲床蒼白或發紺，對比健側粉紅色' },
      { sign: '患肢冰涼', category: 'secondary', description: '觸診患肢溫度明顯低於健側（poikilothermia）' },
      { sign: '呼吸困難', category: 'secondary', description: '合併 CHF 肺水腫或胸水時出現' },
    ],
    staging: null,
    differential_diagnosis: [
      { condition: '脊髓損傷/椎間盤疾病', key_differentiator: '脈搏正常、肢端溫暖有色、通常有深痛覺、X光/MRI 可區分' },
      { condition: '脊髓梗塞（FCE）', key_differentiator: '犬較常見，非疼痛性（急性後轉為無痛），脈搏正常' },
      { condition: '主動脈狹窄/損傷', key_differentiator: '貓極罕見，影像學可區分' },
      { condition: '創傷性損傷', key_differentiator: '病史（創傷史）+ X 光可排除骨折/脫臼' },
    ],
    diagnostic_workup: '1. 理學檢查——5 Ps 快速評估（股動脈脈搏、肉墊顏色/溫度、神經學檢查）→ 2. 血液檢查——CK（顯著升高，通常 >10,000 U/L）、K⁺（高鉀風險）、BUN/Cre、Lactate、血氣（代謝性酸中毒）→ 3. 心臟超音波——確認心肌病（HCM/UCM/RCM/DCM）、LA 大小、左心耳血栓/smoke → 4. 胸腔 X 光——心臟大小、肺水腫/胸水評估 → 5. 杜卜勒超音波（可選）——確認動脈血流中斷位置',
    treatment_protocol: '急性管理（第一優先=止痛）：Methadone 0.1-0.3 mg/kg IV/IM q4-6h 或 Buprenorphine 0.02 mg/kg IV/buccal q6-8h。抗凝血：[藥物:Heparin] (UFH) 250-300 IU/kg IV bolus → SC 150-200 IU/kg q6-8h；或低分子肝素 Dalteparin 100-150 IU/kg SC q12-24h。合併 CHF：Furosemide 1-2 mg/kg IV + 氧氣 + 胸水引流（若有）。謹慎輸液。高鉀血症（K⁺ >7 mEq/L）：Calcium gluconate 10% 0.5-1 mL/kg IV slowly。\n\n二級預防：[藥物:Clopidogrel] 18.75 mg/cat PO SID（終身）。替代：[藥物:Aspirin] 81 mg/cat PO q72h。一級預防（高風險貓 LA/Ao ≥2.0）：Clopidogrel 18.75 mg/cat PO SID。溶栓藥物（tPA）不推薦——再灌流損傷致死風險高且無存活改善證據。',
    prognosis: '整體預後不良。存活出院率 33-39%。出院後中位存活：77-223 天（取決於基礎心肌病嚴重度）。ATE 復發率約 30-50%。較好預後因子：單側、體溫 >37.2°C、無 CHF、48-72h 內出現運動功能恢復。較差預後因子：雙側、低體溫 <37°C、嚴重 CHF、72h 無功能恢復。',
    monitoring: '急性期：q2-4h 監測心率、呼吸、體溫、K⁺。每日 CK 追蹤（下降趨勢為正面指標）。每日評估患肢功能恢復。住院期間心超評估基礎心肌病。出院後：Clopidogrel 終身服用。每 1-3 個月回診心超追蹤心肌病進展。飼主教育：觀察呼吸次數（sleeping RR <30）、活動力、患肢功能。',
    owner_communication: 'ATE 是貓心肌病最嚴重的併發症之一。需誠實告知：(1) 存活出院率約 1/3 (2) 即使存活，復發率高達 30-50% (3) 治療過程需 3-5 天密集住院、費用可觀 (4) 基礎心肌病為終身管理。尊重飼主選擇安樂死的決定——尤其雙側 ATE + 低體溫 + 嚴重 CHF 的情況下，安樂死是合理的人道選擇。若選擇治療，強調 Clopidogrel 終身預防的重要性與定期回診追蹤。',
  },
  diagnostic_data: null,
  procedure_data: null,
  visual_placeholders: [
    { position: '5 Ps 段落', type: 'annotated_image', description: '貓 ATE 5 Ps 臨床評估圖——肉墊顏色比較與股動脈觸診位置' },
    { position: '栓塞部位段落', type: 'animated_diagram', description: '血栓從左心房脫落至主動脈分叉的動態路徑示意圖' },
  ],
  interactive_placeholders: [
    { position: '預後段落', type: 'decision_tree', description: '輸入臨床參數（體溫、單/雙側、CHF 狀態）自動評估預後等級' },
  ],
  drug_api_links: ['Clopidogrel', 'Heparin', 'Aspirin'],
  references: [
    { type: 'journal', citation: 'Hogan DF, Fox PR, Jacob K, et al. Secondary prevention of cardiogenic arterial thromboembolism in the cat: The double-blind, randomized, positive-controlled feline arterial thromboembolism; clopidogrel vs. aspirin trial (FAT CAT). J Vet Cardiol. 2015;17(Suppl 1):S306-S317.', relevance: 'FAT CAT 研究——Clopidogrel vs Aspirin 二級預防 RCT' },
    { type: 'guideline', citation: 'Luis Fuentes V et al. ACVIM consensus statement guidelines for the classification, diagnosis, and management of cardiomyopathies in cats. J Vet Intern Med. 2020;34(1):3-32.', relevance: 'ACVIM 貓心肌病共識——包含 ATE 預防建議' },
    { type: 'journal', citation: 'Smith SA, Tobias AH, Jacob KA, et al. Arterial thromboembolism in cats: acute crisis in 127 cases (1992-2001) and long-term management with low-dose aspirin in 24 cases. J Vet Intern Med. 2003;17(1):73-83.', relevance: '貓 ATE 大規模回溯研究——臨床表現與預後分析' },
    { type: 'textbook', citation: 'Ware WA. Cardiovascular Disease in Small Animal Medicine. Manson Publishing, 2011. Chapter: Thromboembolic Disease.', relevance: '血栓栓塞疾病診斷與治療教材' },
  ],
  is_current: true,
  created_at: now,
};

/** 心臟病分期與長期管理 — 治療型 */
const contentCardiacStaging: NodeContent = {
  id: 'CONTENT-L5-004',
  node_id: 'CARDIO-L5-004',
  version: 1,
  summary: '心臟病分期系統是指導治療決策與飼主溝通的核心工具。ACVIM 分期系統（Stage A-D）適用於犬 MMVD 與 DCM，貓心肌病則依 ACVIM 2020 共識分為 preclinical/clinical/ATE 三階段。長期管理涵蓋藥物調整、居家監測（sleeping RR）、飲食建議（低鈉）、運動建議、定期追蹤計畫與飼主預後溝通。',
  learning_objectives: [
    '應用 ACVIM 分期系統對犬 MMVD 與 DCM 進行正確分期',
    '描述貓心肌病的分期與管理框架',
    '制定各分期的追蹤時程與監測項目',
    '教導飼主居家監測技巧（sleeping RR、體重、食慾記錄）',
    '進行基於分期的預後溝通與生活品質評估',
  ],
  key_points: [
    'ACVIM MMVD 分期：A（高風險無病變）→ B1（雜音但無重塑）→ B2（有重塑）→ C（臨床CHF）→ D（難治性CHF）',
    'B1 vs B2 關鍵指標：LA/Ao ≥1.6 或 LVIDDN ↑ 或 VHS >10.5 → B2',
    'B2 開始 Pimobendan（EPIC 研究，Level I 證據），B1 無需藥物治療',
    'DCM 分期：Occult（Holter + 心超篩檢）→ Overt（CHF 發生）→ 犬種特異性篩檢建議',
    'HCM 監測要點：LV 壁厚追蹤 + LA 大小 + Clopidogrel 預防 ATE（LA/Ao ≥2.0）',
    'Sleeping RR <30 次/分是最簡單且最早偵測 CHF 復發的居家指標',
    '飲食建議：Stage C 以上適度限鈉，但嚴格限鈉可能反向活化 RAAS',
    '生活品質評估工具（QoL scoring）輔助安樂死時機討論',
  ],
  body: `# 心臟病分期與長期管理 (Cardiac Disease Staging & Long-term Management)

## 一、分期系統 (Staging Systems)

### 犬 MMVD — ACVIM 分期（2019 Consensus）

| 分期 | 定義 | 診斷標準 | 管理 |
|------|------|---------|------|
| A | 高風險品種，無病變 | 好發品種，無雜音，心超正常 | 年度聽診篩檢 |
| B1 | 有雜音，無心臟重塑 | 雜音+心超 LA/Ao <1.6, LVIDDN 正常 | 每 12 月心超追蹤 |
| B2 | 有雜音，有心臟重塑 | LA/Ao ≥1.6 或 LVIDDN↑ 或 VHS >10.5 | Pimobendan 開始；每 6 月追蹤 |
| C | 臨床心衰竭 | 肺水腫（X光）± sleeping RR >30 | 三合一治療；每 1-3 月追蹤 |
| D | 難治性心衰竭 | 標準三合一治療反應不佳 | 藥物升級；每 2-4 週追蹤 |

### B1 vs B2 鑑別要點

| 指標 | B1 | B2 | 備註 |
|------|-----|-----|------|
| LA/Ao | <1.6 | ≥1.6 | 右胸骨旁短軸切面 |
| LVIDDN | <1.7（<20 kg 犬） | ≥1.7 | 品種校正正常化內徑 |
| VHS | <10.5 | >10.5 | 胸腔 X 光（品種差異需注意） |
| NT-proBNP | 通常 <900 pmol/L | 通常 >900 pmol/L | 輔助，非決定性 |

### 犬 DCM — 篩檢與分期

| 階段 | 定義 | 篩檢方法 | 建議 |
|------|------|---------|------|
| Occult DCM | 無症狀但已有心肌變化 | Holter（VPC >50/24h）+ 心超（EF↓, ESVI↑） | 杜賓犬 ≥4 歲年度篩檢 |
| Overt DCM | CHF 症狀出現 | X 光肺水腫 + 心超確認 | 三合一 + Sotalol（如有 VT） |

杜賓犬 Occult DCM 篩檢建議：
- ≥4 歲開始年度 Holter + 心超
- Holter 異常（VPC >50/24h）但心超正常 → arrhythmic form → 開始 Sotalol
- 心超異常（FS <25%, ESVI >80 mL/m²）→ 開始 Pimobendan

### 貓心肌病 — ACVIM 2020 分期框架

| 階段 | 定義 | 管理 |
|------|------|------|
| Preclinical（無症狀） | 心超異常但無臨床症狀 | 追蹤；LA↑ → Clopidogrel 預防 ATE |
| Clinical（有症狀） | CHF（肺水腫/胸水）或 ATE | Furosemide ± Pimobendan（非 LVOTO）|
| End-stage | 收縮功能下降 + 難治性 CHF | 強化支持療法；QoL 評估 |

HCM 特殊考量：
- **Atenolol**：有 SAM（收縮期前移運動）+ LVOTO 時使用
- **Pimobendan 禁忌**：HCM 伴 LVOTO（可能加重阻塞）；僅用於 end-stage 收縮功能下降
- **Clopidogrel 預防 ATE**：LA/Ao ≥2.0 或 LA 內有 smoke/血栓 → 啟動一級預防

## 二、長期監測計畫 (Long-term Monitoring)

### 居家監測——三大核心指標

| 指標 | 目標 | 方法 | 異常處置 |
|------|------|------|---------|
| Sleeping RR | <30 次/分 | 睡眠中計數 15 秒 ×4 | >40/min 持續 → 立即就醫 |
| 體重 | 穩定 | 每週同一時間秤重 | 急速下降→食慾/惡病質；急速上升→水腫 |
| 食慾/活動力 | 穩定 | 飼主日誌記錄 | 明顯下降 → 回診評估 |

### 回診追蹤時程

| 分期 | 頻率 | 檢查項目 |
|------|------|---------|
| B1 | 每 12 個月 | 聽診 + 心超 |
| B2 | 每 6 個月 | 聽診 + 心超 + X 光 + BUN/Cre |
| C 穩定 | 每 1-3 個月 | 聽診 + X 光 + BUN/Cre/K⁺ + BP |
| D | 每 2-4 週 | 全套監控（心超+X光+血檢+BP） |
| 貓 HCM 穩定 | 每 6-12 個月 | 心超 + T4（老年貓排除甲亢） |
| ATE 後存活貓 | 每 1-3 個月 | 心超 + 患肢功能評估 |

### 藥物監測

| 藥物 | 監測項目 | 頻率 |
|------|---------|------|
| Furosemide | BUN/Cre/K⁺/體重 | 啟始 5-7 天，穩定後 q3-6m |
| ACEi | BUN/Cre/K⁺/BP | 啟始 5-7 天，穩定後 q3-6m |
| Digoxin | 血中谷值濃度 0.8-1.2 ng/mL | 啟始 7-10 天，穩定後 q6m |
| Sotalol | ECG（QT 間距） | 啟始後 + 每次調量 |
| Clopidogrel | 無常規監測 | 臨床觀察出血傾向 |

## 三、飲食與運動建議 (Diet & Exercise)

### 飲食

| 分期 | 鈉限制 | 其他建議 |
|------|--------|---------|
| B1-B2 | 不需嚴格限鈉 | 維持良好營養 |
| C | 適度限鈉（<100 mg Na/100 kcal） | 避免高鈉零食 |
| D | 低鈉飲食 | 心臟處方飼料可考慮 |
| 惡病質 | 高蛋白高熱量 > 限鈉 | 心臟惡病質比高鈉更危險 |

爭議：嚴格限鈉可能反向活化 RAAS，目前建議為「適度限制」而非「嚴格低鈉」。

### 運動

| 分期 | 運動建議 |
|------|---------|
| B1-B2 | 正常活動，無需限制 |
| C 穩定 | 輕度活動（短距散步），避免激烈運動 |
| D | 嚴格限制運動 |
| SAS 重度 | 避免激烈運動（猝死風險） |
| 心絲蟲治療期 | 嚴格限制運動 4-6 週 |

## 四、飼主溝通與預後討論 (Client Communication)

### 分期別預後溝通框架

| 分期 | 溝通要點 | 常見飼主問題 |
|------|---------|------------|
| B1 | 「目前無需治療，但需定期追蹤」 | 多久會惡化？→ 可能數年 |
| B2 | 「開始藥物可延緩惡化」 | 可以不吃藥嗎？→ 不建議，EPIC 研究證據 |
| C | 「可有效管理但無法治癒」 | 還能活多久？→ 中位 9-12 月，個體差異大 |
| D | 「坦誠討論生活品質」 | 什麼時候該放手？→ QoL 評估工具 |

### 生活品質評估 (QoL Assessment)

五項核心評估維度：

| 維度 | 評估內容 | 良好 | 不良 |
|------|---------|------|------|
| 疼痛/不適 | 呼吸困難頻率 | 偶發，可控 | 頻繁，藥物難控 |
| 食慾/營養 | 進食意願與體重 | 主動進食 | 拒食、持續消瘦 |
| 活動力 | 移動意願 | 仍有互動 | 不願移動 |
| 衛生 | 自我清潔能力 | 維持 | 無法維持 |
| 快樂 | 與家人互動 | 有正向互動 | 冷漠或焦慮 |

### 安樂死討論原則
1. 不要主動建議安樂死，而是引導飼主評估 QoL
2. 使用「好日子 vs 壞日子」框架——當壞日子多於好日子時
3. 強調安樂死是「最後一份愛的禮物」而非放棄
4. 提供充足時間讓飼主做決定
5. 討論寵物安寧照護（hospice care）的選項

## 五、人醫借鑒 (Translational Insights)

| 人醫概念 | 獸醫應用 | 現況 |
|---------|---------|------|
| NYHA/AHA 分期系統 | ACVIM 分期即參考 AHA A-D 系統 | 已整合 |
| 居家血流動力學監測（CardioMEMS） | 犬 CHF 再住院預防 | 概念可行，成本為障礙 |
| 心臟復健計畫 | 犬心臟病適度運動處方 | 概念階段，獸醫證據極少 |
| 共同決策（shared decision-making） | 飼主參與治療決策 | 獸醫溝通學逐漸重視 |
| 緩和醫療（palliative care） | 寵物安寧照護 | 台灣逐漸發展中 |

## 六、臨床爭議 (Clinical Controversies)

| 爭議議題 | 正方觀點 | 反方觀點 | Evidence Level |
|---------|---------|---------|---------------|
| B2 開始 ACEi 的必要性 | ACVIM 列為 Level II 建議 | BENCHMARK 未顯示明確獲益 | Level II |
| 限鈉飲食的程度 | 心臟處方飼料有明確鈉含量控制 | 嚴格限鈉可活化 RAAS，適度即可 | Level IV |
| 貓 HCM 無症狀期是否需要 Atenolol | 降低心率+減少 SAM | 無 RCT 證實改善預後 | Level III |
| 生活品質評估的標準化 | 結構化 QoL 工具有助客觀判斷 | 個體差異大，工具難以涵蓋所有面向 | Level V |

[圖片:ACVIM 分期流程決策圖——從診斷到治療管理]`,
  clinical_pearl: '「Sleeping RR 比任何血液檢查都能更早偵測 CHF 復發」——這是臨床心臟科最重要的居家監測訊息。教導飼主：(1) 每天在貓/犬深睡時計數 15 秒胸壁起伏次數 ×4 = RR/min (2) 記錄在日誌或手機 App (3) 基線值通常 15-25/min (4) 連續 2 次 >30/min → 立即就醫。這個簡單指標在 EPIC 研究與多項臨床驗證中被證實為最敏感的 CHF 早期復發指標，且完全免費、無需專業設備、飼主依從性佳。\n\n【台灣臨床現況】台灣飼主對心臟病用藥依從性整體良好，但「何時該放手」的溝通仍是獸醫面臨的最大挑戰。建議引入結構化 QoL 評估表，將主觀判斷轉化為可追蹤的數據，幫助飼主與獸醫共同做出更好的決定。',
  common_mistakes: [
    'B1 即開始 Pimobendan——EPIC 研究僅支持 B2 以上，B1 不需要藥物治療',
    '忽略 sleeping RR 的教育——許多飼主不知道如何在家監測，錯失 CHF 早期復發的黃金處理時間',
    '對 HCM 貓常規使用 Pimobendan——伴 LVOTO 時禁忌，可能加重動態阻塞',
    '嚴格限鈉而導致食慾下降——心臟惡病質比高鈉更危險，營養攝取優先於限鈉',
    '避免討論安樂死——延遲 QoL 對話可能導致動物在不適中受苦更久',
  ],
  disease_data: null,
  diagnostic_data: null,
  procedure_data: null,
  visual_placeholders: [
    { position: '分期段落', type: 'flowchart', description: 'ACVIM 分期決策流程圖——從診斷到各分期治療管理' },
    { position: '監測段落', type: 'comparison_table', description: '各分期追蹤時程與檢查項目比較表' },
  ],
  interactive_placeholders: [
    { position: '分期段落', type: 'interactive_staging', description: '輸入心超與 X 光數據自動判定 MMVD 分期' },
    { position: 'QoL 段落', type: 'decision_tree', description: '互動式生活品質評估問卷——自動產生 QoL 評分' },
  ],
  drug_api_links: ['Pimobendan', 'Furosemide', 'Enalapril', 'Benazepril', 'Spironolactone', 'Clopidogrel', 'Atenolol', 'Sotalol'],
  references: [
    { type: 'guideline', citation: 'Keene BW et al. ACVIM consensus guidelines for the diagnosis and treatment of myxomatous mitral valve disease in dogs. J Vet Intern Med. 2019;33(3):1127-1140.', relevance: 'MMVD ACVIM 分期與治療共識指引' },
    { type: 'guideline', citation: 'Luis Fuentes V et al. ACVIM consensus statement guidelines for the classification, diagnosis, and management of cardiomyopathies in cats. J Vet Intern Med. 2020;34(1):3-32.', relevance: '貓心肌病分期與管理共識' },
    { type: 'journal', citation: 'Boswood A et al. Effect of pimobendan in dogs with preclinical myxomatous mitral valve disease and cardiomegaly: the EPIC study. J Vet Intern Med. 2016;30(6):1765-1779.', relevance: 'Pimobendan B2 期治療關鍵證據與 sleeping RR 監測' },
    { type: 'textbook', citation: 'Ware WA. Cardiovascular Disease in Small Animal Medicine. Manson Publishing, 2011. Chapter: Chronic Management of Heart Disease.', relevance: '心臟病長期管理教材' },
  ],
  is_current: true,
  created_at: now,
};

/** 以 Map 方式匯出，方便用 nodeId 快速查找 */
export const CARDIO_CONTENTS = new Map<string, NodeContent>([
  ['CARDIO-L0-001', contentOverview],
  ['CARDIO-L1-001', contentCardiacAnatomy],
  ['CARDIO-L1-002', contentCardiacElectrophysiology],
  ['CARDIO-L1-003', contentCardiacHemodynamics],
  ['CARDIO-L2-001', contentValvularDegeneration],
  ['CARDIO-L2-002', contentMyocardialRemodeling],
  ['CARDIO-L2-003', contentArrhythmiaMechanism],
  ['CARDIO-L2-004', contentCongenitalMechanism],
  ['CARDIO-L3-001', contentMMVD],
  ['CARDIO-L3-002', contentDCM],
  ['CARDIO-L3-003', contentHCM],
  ['CARDIO-L3-004', contentPericardialEffusion],
  ['CARDIO-L3-005', contentHeartworm],
  ['CARDIO-L3-006', contentCongenitalHD],
  ['CARDIO-L3-007', contentClinicalArrhythmias],
  ['CARDIO-L3-008', contentEndocarditis],
  ['CARDIO-L3-009', contentPulmonaryHTN],
  ['CARDIO-L3-010', contentFelineATE],
  ['CARDIO-L4-001', contentAuscultation],
  ['CARDIO-L4-002', contentEchocardiography],
  ['CARDIO-L4-003', contentECG],
  ['CARDIO-L4-004', contentThoracicRadiograph],
  ['CARDIO-L5-001', contentHeartFailureTreatment],
  ['CARDIO-L5-002', contentAntiarrhythmicDrugs],
  ['CARDIO-L5-003', contentPericardiocentesis],
  ['CARDIO-L5-004', contentCardiacStaging],
]);
