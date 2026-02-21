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

/** 以 Map 方式匯出，方便用 nodeId 快速查找 */
export const CARDIO_CONTENTS = new Map<string, NodeContent>([
  ['CARDIO-L0-001', contentOverview],
  ['CARDIO-L1-001', contentCardiacAnatomy],
  ['CARDIO-L1-002', contentCardiacElectrophysiology],
  ['CARDIO-L1-003', contentCardiacHemodynamics],
  ['CARDIO-L2-001', contentValvularDegeneration],
  ['CARDIO-L2-002', contentMyocardialRemodeling],
  ['CARDIO-L2-003', contentArrhythmiaMechanism],
  ['CARDIO-L3-001', contentMMVD],
  ['CARDIO-L3-002', contentDCM],
  ['CARDIO-L3-003', contentHCM],
  ['CARDIO-L3-004', contentPericardialEffusion],
  ['CARDIO-L3-005', contentHeartworm],
  ['CARDIO-L4-001', contentAuscultation],
  ['CARDIO-L4-002', contentEchocardiography],
  ['CARDIO-L4-003', contentECG],
  ['CARDIO-L4-004', contentThoracicRadiograph],
  ['CARDIO-L5-001', contentHeartFailureTreatment],
  ['CARDIO-L5-002', contentAntiarrhythmicDrugs],
  ['CARDIO-L5-003', contentPericardiocentesis],
]);
