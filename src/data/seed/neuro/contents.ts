import type { NodeContent } from '@/types/knowledge';

const now = '2026-02-15T00:00:00Z';

/** 犬特發性癲癇 — 疾病型 */
const contentEpilepsy: NodeContent = {
  id: 'CONTENT-NEURO-L3-001',
  node_id: 'NEURO-L3-001',
  version: 1,
  summary: '犬特發性癲癇（Canine Idiopathic Epilepsy）是犬最常見的慢性神經疾病，好發於 1-5 歲的純種犬。IVETF 共識將癲癇分為特發性、結構性及反應性三大類。治療以長期抗癲癇藥物（AED）為主，Phenobarbital 和 Potassium Bromide 為傳統一線用藥，Levetiracetam 和 Zonisamide 為新一代選擇。',
  learning_objectives: [
    '運用 IVETF 分類系統將癲癇正確分類為特發性、結構性或反應性',
    '描述 IVETF Tier I-III 的分層診斷流程',
    '列出常用抗癲癇藥物的藥理機轉、劑量與副作用',
    '區分局灶性發作與全身性發作的臨床表現',
    '辨識癲癇重積狀態（status epilepticus）的緊急處置原則',
  ],
  key_points: [
    '好發品種：Beagle、德國牧羊犬（GSD）、Border Collie、Labrador、Golden Retriever、比利時牧羊犬',
    'IVETF 三層診斷：Tier I（基礎血檢+尿檢+MRI+CSF）、Tier II（膽汁酸+血氨+感染篩檢）、Tier III（基因檢測+進階影像）',
    '特發性癲癇定義：排除結構性與代謝性原因，首次發作年齡 6 個月-6 歲',
    '治療起始標準：首次 cluster seizures、status epilepticus、發作頻率 > 2 次/6 個月、post-ictal 嚴重或持續',
    '一線 AED：Phenobarbital（2-5 mg/kg PO BID）或 Potassium Bromide（20-30 mg/kg PO SID）',
    '新一代 AED：Levetiracetam（20 mg/kg PO TID）、Zonisamide（5-10 mg/kg PO BID）',
  ],
  body: `# 犬特發性癲癇

## 一、病理機制 (Pathophysiology)



### 概述
犬特發性癲癇（Idiopathic Epilepsy, IE）是犬最常見的慢性神經疾病，約占所有癲癇犬隻的 60-70%。IVETF（International Veterinary Epilepsy Task Force）將其定義為排除結構性與代謝性原因後的反覆癲癇發作。

### IVETF 癲癇分類
- **特發性癲癇（Idiopathic Epilepsy）**：遺傳性或推定遺傳性，無結構性腦部病變
- **結構性癲癇（Structural Epilepsy）**：腦部結構性病變所致（腫瘤、腦炎、血管事件）
- **反應性癲癇發作（Reactive Seizures）**：代謝或中毒原因導致的發作（低血糖、肝腦症、中毒）

### 發作分類
- **局灶性發作（Focal Seizures）**：單側面部抽搐、咀嚼動作、單肢抽動、行為異常（fly-biting）
- **全身性發作（Generalized Seizures）**：
  - 強直-陣攣性（Tonic-clonic）：最常見，全身僵直後節律性抽搐
  - 強直性（Tonic）：持續肌肉收縮
  - 陣攣性（Clonic）：節律性肌肉抽搐
  - 肌躍攣性（Myoclonic）：短暫肌肉跳動
- **局灶性演變為全身性（Focal to bilateral tonic-clonic）**：局灶發作擴散至雙側

### 緊急處置：癲癇重積狀態
癲癇重積狀態（Status Epilepticus, SE）定義為持續 > 5 分鐘的癲癇發作或兩次發作間無意識恢復。

急救順序：
1. [藥物:Diazepam] 0.5-1 mg/kg IV（或 per rectum 1-2 mg/kg）
2. 無效時 [藥物:Levetiracetam] 30-60 mg/kg IV
3. 持續發作：[藥物:Phenobarbital] 2-4 mg/kg IV q20-30min（最多 16-24 mg/kg/24hr）
4. 難治性 SE：[藥物:Propofol] CRI 或 [藥物:Midazolam] CRI

[圖片:癲癇重積狀態急救流程圖]

## 二、臨床表現與診斷 (Clinical Signs & Diagnosis)

### 分層診斷流程（IVETF Tier System）
### Tier I（初級評估）
- 詳細病史與理學檢查、神經學檢查
- 基礎血液學（CBC）、生化（含 glucose, BUN, Cre, ALT, ALP, Ca, Na, K）
- 尿液分析

### Tier II（進階評估）
- 空腹 + 餐後膽汁酸
- 血氨測定
- 感染性疾病篩檢（Toxoplasma、Neospora、Distemper 等）
- 甲狀腺功能（T4/fT4）

### Tier III（確定診斷）
- 腦部 MRI
- CSF 分析
- 基因檢測（品種特異性突變篩檢）
- 腦電圖（EEG，臨床可得性有限）

## 三、治療策略 (Treatment)

### 藥物治療
| 藥物 | 劑量 | 機轉 | 副作用 |
|------|------|------|--------|
| Phenobarbital (PB) | 2-5 mg/kg PO BID | GABA-A 受體促效 | 鎮靜、多飲多食、肝毒性 |
| Potassium Bromide (KBr) | 20-30 mg/kg PO SID | Cl⁻ 通道穩定 | 腸胃不適、後肢無力、嗜睡 |
| Levetiracetam (LEV) | 20-60 mg/kg PO TID | SV2A 蛋白結合 | 鎮靜（通常輕微且暫時） |
| Zonisamide (ZNS) | 5-10 mg/kg PO BID | Na⁺/Ca²⁺ 通道阻斷 | 鎮靜、食慾下降、少見肝毒性 |

## 四、併發症與監控 (Complications & Monitoring)

### 常見併發症
- **Phenobarbital 肝毒性**：長期使用 PB 可導致肝酵素持續升高、肝纖維化，嚴重時可致肝衰竭
- **癲癇重積狀態（Status Epilepticus）**：持續 > 5 分鐘的發作或連續發作間無意識恢復，可造成不可逆腦損傷
- **Cluster seizures**：24 小時內 ≥ 2 次發作，為預後不良因子且需緊急處置
- **藥物難治性癲癇**：約 20-30% 的犬對兩種 AED 反應不佳，需多藥方案或調整策略

### 監控計畫
| 時間點 | 監測項目 | 目標 |
|--------|---------|------|
| AED 起始後 2-3 週 | PB 穩態血中濃度（谷值） | 15-35 μg/mL |
| 每 6 個月 | PB 血中濃度 + ALT/ALP/膽汁酸 | 濃度在治療範圍 + 肝功能正常 |
| 持續 | 飼主記錄發作日誌（頻率、類型、持續時間） | 發作頻率降低 > 50% |
| KBr 使用時 | KBr 血中濃度（穩態需 2-3 個月） | 1-3 mg/mL（合併 PB）或 2-3 mg/mL（單用） |

## 五、預後與預後因子 (Prognosis)

- **藥物控制良好**：預後良好 — 約 60-70% 的犬以適當 AED 可達滿意控制（發作頻率降低 > 50%），平均壽命可接近正常
- **藥物難治性癲癇**：預後謹慎 — 約 20-30% 為難治性，需多藥方案管理，生活品質可能受影響
- **首次即 cluster seizures/SE**：預後較差 — 初始即出現 cluster 或 SE 的犬，後續癲癇控制通常較困難
- **預後良好因子**：首次發作年齡 1-5 歲、單一發作型態、對首線 AED 反應良好、飼主用藥依從性高
- **預後不良因子**：Border Collie/GSD 品種（藥物反應較差）、高發作頻率、cluster seizures、status epilepticus、SUDEP 風險

## 六、人醫借鑒 (Translational Insights)

| 人醫工具/概念 | 獸醫應用潛力 | 現況 |
|-------------|-------------|------|
| 新一代 AED（Brivaracetam/Cenobamate） | 犬難治性癲癇的新選擇——Cenobamate 機轉獨特（Na⁺ 通道 + GABA-A） | 人醫 Cenobamate 療效優異，犬藥動學初步研究中 |
| 迷走神經刺激（VNS） | 犬藥物難治性癲癇的非藥物輔助治療 | 人醫已商業化超過 20 年，犬有少數病例報告 |
| 反應性神經刺激（RNS） | 犬局灶性癲癇的即時偵測與閉迴路刺激 | 人醫 FDA 核准（NeuroPace），獸醫僅概念階段 |
| 癲癇預警裝置（Seizure alert devices） | 犬穿戴式裝置偵測前驅運動模式以預警飼主 | 人醫多款上市，犬原型裝置研究中 |

## 七、臨床爭議與知識空缺 (Controversies & Knowledge Gaps)

| 爭議議題 | 現況 | Evidence Level |
|---------|------|---------------|
| AED 起始時機：首次發作 vs 達標準後 | 首次單一發作即治療 vs 觀察等待 vs 僅 cluster/SE 後才治療——缺乏大型 RCT 直接比較 | Level III |
| Levetiracetam 作為一線 AED 的定位 | LEV 副作用少但需 TID 給藥，取代 PB 為一線的證據正在累積 | Level II |
| Honeymoon effect 的臨床意義 | LEV 初期效果可能逐漸減弱，是否為真正的藥理現象或自然疾病波動仍有爭議 | Level III |
| 犬癲癇基因檢測的臨床實用性 | 已知基因突變僅涵蓋少數品種，泛品種基因 panel 的預測價值有限 | Level IV |`,
  clinical_pearl: '治療犬特發性癲癇時，「完全無發作」不應是唯一目標。合理的治療目標是將發作頻率降低 50% 以上，同時維持可接受的生活品質。PB 血中濃度應維持在 15-35 ug/mL，開始治療後 2-3 週達穩態時首次監測。提醒飼主建立「發作日誌」追蹤頻率與型態。\n\n【台灣流行病學】犬特發性癲癇在台灣臨床並不罕見，好發品種如米格魯犬（Beagle）、德國牧羊犬、金毛獵犬、拉布拉多在台灣均有相當飼養數量。台灣小型犬（如吉娃娃、馬爾濟斯）的反應性癲癇（如低血糖、肝門脈分流）需與特發性癲癇鑑別。Phenobarbital 與 Levetiracetam 為台灣市場主要抗癲癇藥物，KBr 在台灣取得較不便。台灣獸醫神經科推廣「發作日誌」與居家錄影輔助診斷。',
  common_mistakes: [
    '未排除代謝性原因（如低血糖、肝腦症）即診斷為特發性癲癇',
    '首次單一發作即開始長期 AED 治療（通常需達到治療起始標準）',
    '僅憑單次 PB 血中濃度偏低即急於增加劑量（需等待穩態 2-3 週）',
    '使用 KBr 時未告知飼主避免高鈉飲食變化（影響 Br⁻ 排泄與血中濃度）',
    '忽略 Levetiracetam 的 honeymoon effect（初期效果佳但可能逐漸減弱）',
  ],
  disease_data: {
    signalment: '好發於 1-5 歲（首次發作年齡 6 個月-6 歲）的純種犬。品種偏好：Beagle、GSD、Border Collie、Labrador、Golden Retriever、Australian Shepherd、Belgian Tervuren、Bernese Mountain Dog。無明顯性別偏好。',
    etiology: '特發性癲癇為推定遺傳性，確切基因突變已在部分品種被鑑定（如 Lagotto Romagnolo 的 LGI2 基因）。大多數品種的遺傳模式為多基因遺傳。定義上排除可識別的結構性或代謝性腦部病變。',
    pathogenesis: '興奮性-抑制性神經傳遞失衡 → 神經元群過度同步化放電 → 局灶性或全身性癲癇發作。長期反覆發作可能導致 kindling effect（發作閾值逐漸降低）與繼發性神經損傷（excitotoxicity）。',
    clinical_signs: [
      { sign: '強直-陣攣性發作', category: 'primary', description: '全身僵直（強直期）後節律性四肢抽搐（陣攣期），常伴倒地、划水動作、流涎、大小便失禁' },
      { sign: '局灶性面部抽搐', category: 'primary', description: '單側面部肌肉抽動、咀嚼動作、流涎，可能演變為全身性發作' },
      { sign: '發作後期（Post-ictal）', category: 'secondary', description: '發作後暫時性失明、方向感喪失、嗜睡、不安或攻擊行為，可持續數分鐘至數小時' },
      { sign: '自主神經症狀', category: 'secondary', description: '發作時可見瞳孔散大、流涎、排尿排便' },
    ],
    staging: { system: 'IVETF Seizure Frequency Classification', stages: ['孤立性發作（Isolated seizures）：間隔 > 24 小時', '叢集性發作（Cluster seizures）：24 小時內 ≥ 2 次發作', '癲癇重積狀態（Status epilepticus）：持續 > 5 分鐘或兩次發作間無意識恢復'] },
    differential_diagnosis: [
      { condition: '結構性癲癇（腦腫瘤）', key_differentiator: '> 6 歲首次發作、進行性神經功能缺損、MRI 可見腫塊病灶' },
      { condition: '反應性癲癇發作（低血糖）', key_differentiator: '血糖 < 60 mg/dL，多見於幼犬或胰島素瘤患犬，補糖後發作停止' },
      { condition: '肝腦症', key_differentiator: '肝功能異常（膽汁酸升高、血氨升高），常伴間歇性行為異常、流涎' },
      { condition: 'MUO（腦膜腦炎）', key_differentiator: 'CSF 淋巴球增多、蛋白升高，MRI 可見多灶性或瀰漫性病灶' },
      { condition: '心因性暈厥（Syncope）', key_differentiator: '短暫意識喪失伴肌張力消失，無 post-ictal 期，心臟聽診異常或心律不整，ECG/Holter 可確認' },
    ],
    diagnostic_workup: '1. 詳細病史（發作描述、頻率、影片記錄）→ 2. 神經學檢查（發作間期通常正常）→ 3. Tier I 血檢（排除代謝性原因）→ 4. Tier II 膽汁酸/血氨（排除肝腦症）→ 5. 腦部 MRI（排除結構性病變）→ 6. CSF 分析（排除腦炎）→ 7. 基因檢測（品種特異性）',
    treatment_protocol: '治療起始標準：cluster seizures、status epilepticus、發作頻率 > 2 次/6 個月、嚴重 post-ictal。一線：PB 2-5 mg/kg PO BID 或 KBr 20-30 mg/kg PO SID。單一藥物控制不佳時加入第二線：LEV 20 mg/kg PO TID 或 ZNS 5-10 mg/kg PO BID。難治性癲癇定義：兩種適當 AED 以治療劑量使用仍無法有效控制。',
    prognosis: '約 60-70% 的犬以適當 AED 可達到滿意控制（發作頻率降低 > 50%）。約 20-30% 為藥物難治性。好發品種中 Border Collie 和 GSD 的預後通常較差。Cluster seizures 和 status epilepticus 的發生與較差預後相關。平均壽命可接近正常，但 SUDEP（Sudden Unexpected Death in Epilepsy）風險存在。',
    monitoring: '開始 PB 後 2-3 週測穩態血中濃度（目標 15-35 ug/mL）。之後每 6 個月監測 PB 濃度 + 肝功能（ALT、ALP、膽汁酸）。KBr 濃度目標 1-3 mg/mL（合併 PB 時）或 2-3 mg/mL（單用時）。要求飼主記錄發作日誌（日期、時間、持續時間、類型）。',
    owner_communication: '特發性癲癇是一種終身疾病，目前無法治癒但可有效管理。治療目標是降低發作頻率和嚴重度，而非完全消除發作。強調用藥依從性（不可自行停藥或減藥，突然停用 PB 可誘發癲癇重積）。教導緊急處置：發作時保持冷靜、記錄時間、不要試圖打開嘴巴、發作超過 5 分鐘立即就醫。',
  },
  diagnostic_data: null,
  procedure_data: null,
  visual_placeholders: [
    { position: 'IVETF 分類段落後', type: 'flowchart', description: 'IVETF 分層診斷流程決策圖' },
    { position: '藥物治療表格後', type: 'comparison_table', description: '四種 AED 比較表（藥動學、副作用、監測）' },
  ],
  interactive_placeholders: [
    { position: '發作分類段落', type: 'video_player', description: '各類癲癇發作影片範例' },
  ],
  drug_api_links: ['Phenobarbital', 'Potassium Bromide', 'Levetiracetam', 'Zonisamide', 'Diazepam', 'Propofol', 'Midazolam'],
  references: [
    { type: 'guideline', citation: 'Berendt M et al. International veterinary epilepsy task force consensus report on epilepsy definition, classification and terminology in companion animals. BMC Vet Res. 2015;11:182.', relevance: 'IVETF 癲癇定義與分類共識' },
    { type: 'guideline', citation: 'De Risio L et al. International veterinary epilepsy task force consensus proposal: diagnostic approach to epilepsy in dogs. BMC Vet Res. 2015;11:148.', relevance: 'IVETF 分層診斷流程' },
    { type: 'journal', citation: 'Podell M et al. 2015 ACVIM Small Animal Consensus Statement on Seizure Management in Dogs. J Vet Intern Med. 2016;30(2):477-490.', relevance: 'ACVIM 癲癇管理共識' },
    { type: 'textbook', citation: 'Platt SR, Olby NJ. BSAVA Manual of Canine and Feline Neurology, 4th ed. BSAVA, 2013.', relevance: '神經科基礎教材' },
  ],
  is_current: true,
  created_at: now,
};

/** 椎間盤疾病 (IVDD) — 疾病型 */
const contentIVDD: NodeContent = {
  id: 'CONTENT-NEURO-L3-002',
  node_id: 'NEURO-L3-002',
  version: 1,
  summary: '椎間盤疾病（Intervertebral Disc Disease, IVDD）是犬最常見的脊髓壓迫性疾病，分為 Hansen Type I（急性椎間盤突出）與 Hansen Type II（慢性椎間盤膨出）。好發於軟骨發育不全品種（如臘腸犬），臨床嚴重度以修正 Frankel 分級（Grade I-V）評估。治療依分級決定保守或手術治療，深痛覺喪失為最重要的預後指標。',
  learning_objectives: [
    '區分 Hansen Type I 與 Type II 椎間盤疾病的病理機轉與臨床表現',
    '運用修正 Frankel 分級系統（Grade I-V）評估 IVDD 嚴重度',
    '描述不同脊髓節段 IVDD 的神經定位特徵',
    '說明保守治療與手術治療的適應症與預後差異',
    '辨識進行性脊髓軟化（PMM）的早期徵兆',
  ],
  key_points: [
    '好發品種：臘腸犬（盛行率最高）、Beagle、Shih Tzu、Pekingese、French Bulldog、Cocker Spaniel',
    'Hansen Type I：軟骨樣變性（chondroid metaplasia），椎間盤髓核急性突出至椎管，好發於軟骨發育不全品種 3-6 歲',
    'Hansen Type II：纖維樣變性（fibroid metaplasia），椎間盤纖維環慢性膨出，好發於非軟骨發育不全大型犬 > 5 歲',
    '最好發位置：胸腰椎交界處（T11-L2），約占 65-75%；其次頸椎 C2-C3',
    '修正 Frankel 分級：I（疼痛）、II（輕癱可行走）、III（輕癱不可行走）、IV（癱瘓有深痛覺）、V（癱瘓無深痛覺）',
    '深痛覺喪失 < 24-48 小時仍有手術機會；> 48 小時預後極差',
  ],
  body: `# 椎間盤疾病 (IVDD)

## 一、病理機制 (Pathophysiology)



### 概述
犬椎間盤疾病（IVDD）是犬最常見的脊髓壓迫性疾病，約占所有犬神經科就診的 2%。軟骨發育不全（chondrodystrophic）品種有極高的發病率，臘腸犬的終生盛行率可達 19-24%。

### 分類
### Hansen Type I（急性椎間盤突出）
- 髓核發生軟骨樣變性（chondroid metaplasia） → 脫水鈣化
- 纖維環急性破裂 → 鈣化髓核突出至椎管
- 造成急性脊髓壓迫與挫傷
- 好發於軟骨發育不全品種 3-6 歲

### Hansen Type II（慢性椎間盤膨出）
- 纖維環發生纖維樣變性（fibroid metaplasia）
- 纖維環逐漸膨出至椎管
- 造成慢性漸進性脊髓壓迫
- 好發於大型犬 > 5 歲

### Hansen Type III（急性非壓迫性）
- 正常髓核高速射出，造成脊髓挫傷但無持續壓迫
- 臨床表現為急性發作後不進展，通常預後較好

### 好發位置
- **胸腰椎（T11-L2）**：65-75%，T12-T13 與 T13-L1 最常見
- **頸椎（C2-C7）**：15-25%，C2-C3 最常見
- **腰薦椎（L4-S3）**：少見

## 二、臨床表現與診斷 (Clinical Signs & Diagnosis)

### 臨床分級（修正 Frankel 分級）
| Grade | 描述 | 神經功能 |
|-------|------|---------|
| I | 僅疼痛 | 神經功能正常，步態正常 |
| II | 輕癱可行走 | 本體感覺性共濟失調但仍可行走 |
| III | 輕癱不可行走 | 無法自主行走但有自主運動 |
| IV | 癱瘓有深痛覺 | 無自主運動，深痛覺存在 |
| V | 癱瘓無深痛覺 | 無自主運動，深痛覺喪失 |

### 診斷流程
1. 神經學檢查 → 定位病灶脊髓節段
2. 脊椎 X 光：可見椎間隙狹窄、椎間盤鈣化（敏感度有限）
3. **MRI（金標準）**：直接顯示椎間盤突出、脊髓壓迫與脊髓訊號變化
4. CT myelography：MRI 不可得時的替代方案
5. CSF 分析：排除發炎性疾病

## 三、治療策略 (Treatment)

### 保守治療（Grade I-II）
- 嚴格籠內休息 4-6 週
- 疼痛管理：[藥物:Gabapentin] 5-10 mg/kg PO TID + [藥物:Tramadol] 2-5 mg/kg PO BID-TID
- NSAIDs：[藥物:Meloxicam] 0.1 mg/kg PO SID（避免與類固醇併用）
- 肌肉鬆弛劑：[藥物:Methocarbamol] 15-20 mg/kg PO TID

### 手術治療（Grade III-V）
- 胸腰椎：hemilaminectomy（半椎板切除術）
- 頸椎：ventral slot（腹側椎間開窗術）
- 目標：減壓（decompression）+ 移除突出物
- Grade V 需於深痛覺喪失 < 24-48 小時內手術

[圖片:IVDD 分型與脊髓壓迫示意圖]

## 四、併發症與監控 (Complications & Monitoring)

### 常見併發症
- **進行性脊髓軟化（PMM）**：發生率約 2-5%（Grade V），術後神經功能持續惡化、panniculus 截斷面上移，一旦確診致死率接近 100%
- **尿路感染**：癱瘓期間膀胱管理不當導致細菌性膀胱炎，為最常見的可預防併發症
- **褥瘡（Decubital ulcers）**：長期臥床犬隻在骨突處（髖、肘、跗）產生壓力性潰瘍
- **復發**：保守治療後復發率約 30-40%，手術後同一位點復發率低（< 5%）但其他位點可能新發

### 監控計畫
| 時間點 | 監測項目 | 目標 |
|--------|---------|------|
| 術後 24-48 小時 | 神經功能（深痛覺、運動功能）、PMM 徵兆 | 無惡化或開始改善 |
| 保守治療期間每週 | 神經學檢查、步態評估 | 持續改善或穩定 |
| 術後 2-4 週 | 傷口癒合、神經功能恢復進度 | 可開始復健 |
| 長期每 3-6 個月 | 神經學追蹤、復發徵兆評估 | 維持功能 + 早期發現復發 |

## 五、預後與預後因子 (Prognosis)

- **Grade I-II 保守治療**：預後良好 — 成功率 > 85%，但復發率約 30-40%
- **Grade I-III 手術治療**：預後良好 — 步行恢復率 > 95%
- **Grade IV 手術治療**：預後良好 — 步行恢復率 > 90%
- **Grade V 深痛覺喪失 < 24h**：預後謹慎 — 步行恢復率約 50-60%
- **Grade V 深痛覺喪失 > 48h**：預後差 — 步行恢復率 < 5%
- **預後良好因子**：深痛覺存在、早期手術減壓、積極術後復健、Hansen Type III（非壓迫性）
- **預後不良因子**：深痛覺喪失 > 48 小時、PMM 發生、MRI T2 高訊號範圍廣泛、多節段壓迫

## 六、人醫借鑒 (Translational Insights)

| 人醫工具/概念 | 獸醫應用潛力 | 現況 |
|-------------|-------------|------|
| 幹細胞治療脊髓損傷 | 犬 IVDD Hansen Type I 術後脊髓神經修復 | 多項犬臨床試驗進行中，嗅鞘細胞（OEC）移植最受矚目 |
| 人工椎間盤置換 | 犬頸椎 IVDD 的替代手術選擇 | 人醫已商業化，獸醫處於原型開發階段 |
| 神經保護藥物（Riluzole、Minocycline） | 犬 IVDD 術後繼發性脊髓損傷的藥物保護 | 人脊髓損傷 Phase II-III 試驗，獸醫基礎研究中 |
| 脊髓電刺激（Epidural Stimulation） | 犬慢性脊髓損傷的功能性步態恢復 | 人體研究顯示癱瘓患者可恢復自主步態，獸醫早期探索 |

## 七、臨床爭議與知識空缺 (Controversies & Knowledge Gaps)

| 爭議議題 | 現況 | Evidence Level |
|---------|------|---------------|
| Grade III IVDD 手術 vs 保守治療 | Grade I-II 保守治療成功率高，但 Grade III 的最佳策略仍有爭議——部分研究支持早期手術 | Level II |
| 術後類固醇使用 | 高劑量 Methylprednisolone 曾被推薦但現多數專家反對——可能加重脊髓損傷而非保護 | Level II |
| 深痛覺喪失 > 48 小時是否仍應手術 | 傳統認為 > 48h 手術預後極差（< 5%），但少數報告仍有恢復案例 | Level III |
| 預防性椎間盤開窗術（fenestration） | 降低鄰近節段復發率的效果存在爭議，增加手術時間與風險 | Level III |`,
  clinical_pearl: '評估 IVDD 病患時，深痛覺（deep pain perception）是最關鍵的預後指標。測試方式為用止血鉗夾趾骨——要確認的是「大腦層級的疼痛感知」（轉頭、叫喊），而非僅是脊髓反射性的屈曲反應（withdrawal reflex）。Grade IV 胸腰椎 IVDD 術後步行恢復率 > 90%，但 Grade V 若深痛覺喪失 > 48 小時，恢復率驟降至 < 5%。\n\n【台灣流行病學】椎間盤疾病是台灣最常見的神經外科急症。臘腸犬在台灣飼養數量極大，IVDD 盛行率高達 19-24%，為台灣神經科病例的最大宗。法國鬥牛犬近年在台灣飼養量急速上升，其頸椎與胸腰椎 IVDD 病例亦增加。台灣 MRI 設備在主要都會區已相對普及，有助於術前精確定位。台灣多家動物醫院已具備 hemilaminectomy 與 ventral slot 手術能力，但飼主對 Grade V 病例的預後認知仍需加強。',
  common_mistakes: [
    '將屈曲反射（withdrawal reflex）誤判為深痛覺存在——屈曲反射是脊髓反射，不代表大腦感知到疼痛',
    '僅依賴 X 光診斷 IVDD（X 光僅能提示，MRI 或 CT myelography 才能確認壓迫位置與程度）',
    '保守治療期間未執行嚴格籠內休息（「限制活動」不等於「籠內休息」）',
    'Grade III 以上仍堅持保守治療過久而延誤手術時機',
    '忽略進行性脊髓軟化（PMM）的可能性——Grade V 術後若神經功能持續惡化需高度懷疑',
  ],
  disease_data: {
    signalment: '軟骨發育不全品種（臘腸犬、Beagle、Shih Tzu、Pekingese、French Bulldog、Cocker Spaniel）好發，3-6 歲。Hansen Type II 好發於大型犬 > 5 歲（GSD、Labrador、Doberman）。無明顯性別偏好，但某些研究顯示雄性略多。',
    etiology: 'Hansen Type I：遺傳性軟骨發育不全導致椎間盤髓核提前發生軟骨樣變性與鈣化（chondroid metaplasia），使纖維環承受異常壓力而急性破裂。Hansen Type II：年齡相關的纖維樣變性（fibroid metaplasia），纖維環逐漸退化膨出。',
    pathogenesis: '椎間盤退化 → 髓核/纖維環結構破壞 → 急性突出（Type I）或慢性膨出（Type II）→ 脊髓壓迫 + 挫傷 → 脊髓水腫、出血、去髓鞘 → 軸突損傷 → 神經功能障礙。嚴重壓迫可導致脊髓缺血壞死（myelomalacia），若為進行性（PMM）則預後極差。',
    clinical_signs: [
      { sign: '背痛/頸痛', category: 'primary', description: '胸腰椎：弓背（kyphosis）、腹部緊繃、觸診脊椎疼痛。頸椎：低頭姿勢、頸部僵硬、轉頭抗拒' },
      { sign: '後肢共濟失調/輕癱', category: 'primary', description: '本體感覺性共濟失調，步態搖擺、腳掌翻轉（knuckling），胸腰椎 IVDD 典型表現' },
      { sign: '四肢輕癱', category: 'primary', description: '頸椎 IVDD 可導致四肢受影響，通常前肢症狀較後肢輕' },
      { sign: '癱瘓', category: 'secondary', description: '嚴重壓迫導致完全運動功能喪失，可伴或不伴深痛覺' },
      { sign: '排尿功能障礙', category: 'secondary', description: 'UMN 膀胱（胸腰椎）：膀胱膨大、難以擠壓。LMN 膀胱（腰薦椎）：膀胱鬆弛、易溢流' },
    ],
    staging: {
      system: 'Modified Frankel Scale for IVDD',
      stages: [
        'Grade I：僅疼痛，無神經功能缺損',
        'Grade II：輕癱可行走（ambulatory paraparesis），共濟失調',
        'Grade III：輕癱不可行走（non-ambulatory paraparesis），有自主運動',
        'Grade IV：癱瘓（paraplegia），深痛覺存在',
        'Grade V：癱瘓（paraplegia），深痛覺喪失',
      ],
    },
    differential_diagnosis: [
      { condition: '纖維軟骨栓塞（FCE）', key_differentiator: '超急性發作（數分鐘內達最嚴重），通常非進行性，不對稱，MRI 見脊髓梗塞訊號但無壓迫性病灶' },
      { condition: '脊椎腫瘤', key_differentiator: '慢性進行性，X 光可見溶骨性變化，MRI 顯示腫塊伴對比增強' },
      { condition: '椎間盤脊椎炎（Discospondylitis）', key_differentiator: '發燒、白血球升高、X 光見終板溶蝕與反應性新骨增生' },
      { condition: '退化性脊髓病變（DM）', key_differentiator: '慢性漸進性後肢 UMN 輕癱，無疼痛，MRI 通常無壓迫性病灶，SOD1 基因突變陽性' },
      { condition: '主動脈血栓栓塞（ATE，貓）', key_differentiator: '貓急性後肢癱瘓最重要鑑別——後肢冰冷、股動脈脈搏消失、趾甲切面無出血，常伴 HCM' },
    ],
    diagnostic_workup: '1. 神經學檢查（定位、分級）→ 2. 脊椎 X 光（椎間隙狹窄、椎間盤鈣化，敏感度約 60-70%）→ 3. MRI（金標準：椎間盤突出位置、脊髓壓迫程度、脊髓訊號變化）→ 4. CT ± myelography（MRI 不可得時替代）→ 5. 基礎血檢排除系統性疾病 → 6. CSF 分析（排除發炎性疾病）',
    treatment_protocol: '保守治療（Grade I-II 或飼主拒絕手術）：嚴格籠內休息 4-6 週 + 疼痛管理（Gabapentin 5-10 mg/kg TID + Tramadol 2-5 mg/kg BID-TID）+ NSAIDs 或短期低劑量 Prednisolone。手術治療（Grade III-V，尤其深痛覺喪失需緊急手術）：胸腰椎 hemilaminectomy，頸椎 ventral slot。術後神經科復健（水療、被動關節運動、站立訓練）加速恢復。',
    prognosis: 'Grade I-II 保守治療：成功率 > 85%（但復發率約 30-40%）。Grade I-III 手術治療：步行恢復率 > 95%。Grade IV 手術治療：步行恢復率 > 90%。Grade V 深痛覺喪失 < 24h 手術：步行恢復率約 50-60%。Grade V 深痛覺喪失 > 48h：步行恢復率 < 5%。進行性脊髓軟化（PMM）：發生率約 2-5%，一旦確診預後極差（致死）。',
    monitoring: '保守治療：每週神經學檢查評估恢復進度，4-6 週後逐漸恢復活動。術後：24-48 小時密切監測神經功能（尤其 Grade V 需注意 PMM 徵兆）。長期：每 3-6 個月神經學追蹤，注意復發徵兆。膀胱管理：癱瘓期間每日擠壓膀胱 3-4 次或導尿，監測尿液感染。',
    owner_communication: 'IVDD 是犬常見且可治療的神經疾病。輕度病例（Grade I-II）保守治療成功率高，但需嚴格執行籠內休息 4-6 週，提前恢復活動是最常見的復發原因。嚴重病例（Grade III-V）建議盡早手術以獲得最佳恢復機會。特別強調深痛覺喪失（Grade V）為緊急情況，需在 24-48 小時內手術。術後復健計畫對功能恢復極為重要。',
  },
  diagnostic_data: null,
  procedure_data: null,
  visual_placeholders: [
    { position: 'Hansen 分類段落後', type: 'comparison_table', description: 'Hansen Type I vs Type II vs Type III 比較圖' },
    { position: '臨床分級表格後', type: 'flowchart', description: 'IVDD 治療決策流程圖（Grade I-V）' },
  ],
  interactive_placeholders: [
    { position: '診斷流程段落', type: 'interactive_localization', description: '輸入神經學檢查結果定位 IVDD 節段' },
  ],
  drug_api_links: ['Gabapentin', 'Tramadol', 'Meloxicam', 'Methocarbamol', 'Prednisolone'],
  references: [
    { type: 'journal', citation: 'Brisson BA. Intervertebral disc disease in dogs. Vet Clin North Am Small Anim Pract. 2010;40(5):829-858.', relevance: '犬 IVDD 綜合回顧' },
    { type: 'textbook', citation: 'Platt SR, Olby NJ. BSAVA Manual of Canine and Feline Neurology, 4th ed. BSAVA, 2013.', relevance: '神經科基礎教材 IVDD 章節' },
    { type: 'journal', citation: 'Olby N et al. Long-term functional outcome of dogs with severe injuries of the thoracolumbar spinal cord. J Am Vet Med Assoc. 2003;222(6):762-769.', relevance: '重度 IVDD 長期預後數據' },
    { type: 'guideline', citation: 'Moore SA et al. American College of Veterinary Internal Medicine Consensus Statement on thoracolumbar intervertebral disc disease. J Vet Intern Med. 2020;34(5):1684-1699.', relevance: 'ACVIM IVDD 診斷治療共識' },
  ],
  is_current: true,
  created_at: now,
};

/** 肉芽腫性腦膜腦炎 (GME/MUO) — 疾病型 */
const contentGME: NodeContent = {
  id: 'CONTENT-NEURO-L3-003',
  node_id: 'NEURO-L3-003',
  version: 1,
  summary: '肉芽腫性腦膜腦炎（GME）現歸類於不明原因腦膜腦炎（Meningoencephalitis of Unknown Origin, MUO），為犬最常見的中樞神經系統發炎性疾病。好發於小型犬年輕至中年雌性。MUO 涵蓋 GME、壞死性腦炎（NME）和壞死性白質腦炎（NLE）三種組織學亞型。臨床表現取決於病灶位置（前腦、腦幹、小腦、脊髓），治療以免疫抑制為主。',
  learning_objectives: [
    '描述 MUO 三種亞型（GME、NME、NLE）的組織病理與品種偏好',
    '說明 MUO 的臨床表現如何取決於病灶位置（多灶性 vs 局灶性）',
    '列出 MUO 的診斷流程與 MRI/CSF 典型特徵',
    '比較不同免疫抑制方案的療效與副作用',
    '向飼主說明 MUO 的治療目標與長期預後',
  ],
  key_points: [
    'MUO 為臨床診斷術語，涵蓋 GME、NME（Pug dog encephalitis）、NLE（Yorkshire Terrier encephalitis）',
    '好發於小型犬雌性，中位年齡 3-6 歲。品種偏好：Maltese、Chihuahua、Pug（NME）、Yorkshire Terrier（NLE）',
    'GME 三種臨床形式：局灶性（focal）、播散性（disseminated）、眼型（ocular）',
    '診斷三聯徵：臨床神經症狀 + MRI 多灶性/局灶性腦病灶 + CSF 淋巴球增多',
    '治療核心：Prednisolone 起始 + 二線免疫抑制劑（Cytarabine、Cyclosporine、Mycophenolate、Leflunomide）',
    '確定診斷需腦組織活檢，臨床上多以 MRI + CSF + 排除感染性疾病後作推定診斷',
  ],
  body: `# 肉芽腫性腦膜腦炎 / MUO

## 一、病理機制 (Pathophysiology)



### 概述
不明原因腦膜腦炎（Meningoencephalitis of Unknown Origin, MUO）是犬最常見的中樞神經系統發炎性疾病群。因確定診斷需腦組織活檢，臨床上通常以「MUO」作為推定診斷。

### MUO 亞型
### GME（Granulomatous Meningoencephalitis）
- 血管周圍組織球與淋巴球浸潤形成肉芽腫
- 三種臨床形式：局灶性、播散性、眼型
- 病灶可見於前腦、腦幹、小腦、脊髓

### NME（Necrotizing Meningoencephalitis）
- 又稱 Pug dog encephalitis
- 大腦皮質壞死伴發炎
- 好發 Pug、Maltese、Chihuahua、Papillon、French Bulldog
- 與 DLA class II 基因型相關

### NLE（Necrotizing Leukoencephalitis）
- 又稱 Yorkshire Terrier encephalitis
- 白質壞死伴發炎，影響腦幹白質
- 好發 Yorkshire Terrier、French Bulldog

## 二、臨床表現與診斷 (Clinical Signs & Diagnosis)

依病灶位置而異：
- **前腦**：癲癇發作、行為異常、對側威脅反應缺失、盲目轉圈
- **腦幹**：意識改變、腦神經缺損（面癱、吞嚥困難）、步態異常
- **小腦**：小腦性共濟失調、意向性震顫、辨距不良
- **脊髓**：四肢輕癱/癱瘓、脊髓定位疼痛
- **多灶性**：上述多區域症狀組合，播散性 GME 最常見

### 診斷
### MRI 特徵
- 多灶性或局灶性 T2W/FLAIR 高訊號病灶
- 對比增強後腦膜和/或腦實質增強
- 局灶性 GME 可呈腫塊效應（mass effect），需與腫瘤鑑別

### CSF 分析
- 單核球增多（lymphocytic-monocytic pleocytosis）：WBC 通常 50-500 cells/μL
- 蛋白輕度至中度升高
- 感染性疾病 PCR/抗體檢測陰性

## 三、治療策略 (Treatment)

### 免疫抑制方案
- [藥物:Prednisolone] 1-2 mg/kg PO BID × 2-4 週，之後逐漸減量至最低有效劑量
- 加入二線免疫抑制劑以減少類固醇副作用：
  - [藥物:Cytarabine] (Ara-C) 50 mg/m² SC BID × 2 天，每 3-4 週一次
  - [藥物:Cyclosporine] 5-10 mg/kg PO BID
  - [藥物:Mycophenolate] 10-20 mg/kg PO BID
  - [藥物:Leflunomide] 2-4 mg/kg PO SID

[圖片:MUO 的 MRI 典型影像]

## 四、併發症與監控 (Complications & Monitoring)

### 常見併發症
- **免疫抑制劑副作用**：Prednisolone 長期使用致醫源性庫興氏症（多飲多尿、肌肉萎縮、皮膚菲薄）；Cytarabine 致骨髓抑制（白血球低下）
- **繼發性感染**：免疫抑制下泌尿道感染、皮膚感染風險增加
- **疾病復發**：減藥過快為最常見的復發原因，約 30-50% 的 MUO 犬在治療期間至少復發一次
- **癲癇併發**：前腦型 MUO 常繼發癲癇，需合併 AED 治療

### 監控計畫
| 時間點 | 監測項目 | 目標 |
|--------|---------|------|
| 治療後 2-4 週 | 臨床神經學檢查、治療反應評估 | 症狀改善或穩定 |
| 每 2-4 週 | CBC/生化（免疫抑制劑副作用監測） | WBC > 3000/μL、肝腎功能正常 |
| 治療 1-3 個月 | MRI 追蹤（病灶變化評估） | 病灶縮小或穩定 |
| Cyclosporine 使用時 | 血中濃度（谷值） | 維持治療範圍（100-500 ng/mL） |

## 五、預後與預後因子 (Prognosis)

- **GME 局灶型**：預後謹慎至中等 — 多藥免疫抑制方案中位存活 > 12 個月，僅 Prednisolone 單藥約 3-6 個月
- **GME 播散性**：預後差 — 中位存活數週至數月，快速進展者預後最差
- **NME（Pug dog encephalitis）**：預後差 — 中位存活 1-6 個月，品種基因易感性高
- **NLE（Yorkshire Terrier encephalitis）**：預後中等至差 — 對免疫抑制反應不一
- **預後良好因子**：局灶型表現、對初始免疫抑制快速反應、CSF 細胞數明顯下降、MRI 病灶縮小
- **預後不良因子**：播散性發作、嚴重意識障礙、腦幹受累、NME 亞型、初始治療反應差

## 六、人醫借鑒 (Translational Insights)

| 人醫工具/概念 | 獸醫應用潛力 | 現況 |
|-------------|-------------|------|
| 自體免疫性腦炎抗體 panel（anti-NMDAR、anti-LGI1） | 犬 MUO/NME 的自體抗體亞型分類與精準治療 | 人醫已有商業化 panel，犬 GFAP 抗體研究中 |
| Rituximab（抗 CD20 單克隆抗體） | 犬難治性 MUO 的 B 細胞靶向治療 | 人自體免疫性腦炎標準治療，犬僅有極少病例報告 |
| CSF 生物標記（NfL 神經絲蛋白） | 犬 MUO 治療反應與預後的客觀生物標記 | 犬 CSF NfL 研究近年增加，但尚未標準化 |
| 免疫耐受誘導療法 | 犬 MUO 的長期免疫調節替代方案 | 基礎研究階段，離臨床應用尚遠 |

## 七、臨床爭議與知識空缺 (Controversies & Knowledge Gaps)

| 爭議議題 | 現況 | Evidence Level |
|---------|------|---------------|
| MUO 最佳二線免疫抑制劑選擇 | Cytarabine vs Cyclosporine vs Mycophenolate vs Leflunomide——缺乏 head-to-head RCT，選擇多依臨床經驗 | Level III |
| GME/NME/NLE 是否為同一疾病譜 | 三者組織病理不同但臨床處置相似，統稱 MUO 是否適當仍有爭論 | Level IV |
| 免疫抑制治療的最佳持續時間 | 何時可安全停藥尚無共識——部分專家建議終身低劑量維持 | Level IV |
| 局灶性 GME 的手術活檢角色 | MRI 見腫塊效應時手術活檢可確診但風險高，是否優於推定治療有爭議 | Level III |`,
  clinical_pearl: 'MUO 的診斷是「排除性」的——必須先排除感染性腦炎（Toxoplasma、Neospora、Distemper、Cryptococcus 等），才能開始免疫抑制治療。若在未排除感染的情況下使用高劑量類固醇，可能導致感染性腦炎惡化。建議 CSF 送檢感染性疾病 panel 的同時，可先使用較低劑量的抗發炎類固醇（0.5-1 mg/kg）暫時穩定病情。\n\n【台灣流行病學】MUO（GME/NME/NLE）在台灣小型犬中為重要的神經科疾病。巴哥犬、約克夏梗、馬爾濟斯等台灣常見小型品種為 NME/NLE 的好發族群。台灣亞熱帶環境下，感染性腦炎（如犬瘟熱、Cryptococcus、Toxoplasma）亦需列入鑑別診斷。台灣 CSF 分析與感染性疾病 panel 在主要獸醫教學醫院均可執行，但基層醫院轉診意識仍需提升。',
  common_mistakes: [
    '未排除感染性腦炎即開始高劑量免疫抑制治療（Toxoplasma、Neospora、Distemper、Cryptococcus 需先排除）',
    '將局灶性 GME 的 MRI 腫塊效應誤診為腦腫瘤而進行手術（CSF 分析可提供重要鑑別資訊）',
    '僅使用 Prednisolone 單一治療而不加入二線免疫抑制劑（長期高劑量類固醇副作用大且復發率高）',
    '症狀改善後過快減少免疫抑制劑量導致復發',
    '忽略 NME/NLE 的品種特異性——Pug、Yorkshire Terrier 等品種的預後通常較典型 GME 差',
  ],
  disease_data: {
    signalment: '好發於小型犬雌性，中位年齡 3-6 歲。品種偏好：Maltese、Chihuahua、Pug（NME）、Yorkshire Terrier（NLE）、Papillon、French Bulldog、Shih Tzu。雌性約為雄性的 2 倍。',
    etiology: '確切病因不明，推測為免疫介導性機轉。GME：T 細胞介導的遲發型過敏反應。NME/NLE：可能有自體免疫成分，與 DLA class II 等位基因強烈相關（尤其 Pug）。非感染性，無傳染性。',
    pathogenesis: 'GME：活化的 T 細胞與巨噬細胞在中樞神經系統血管周圍聚集 → 形成肉芽腫性血管周圍袖套 → 腦實質與腦膜發炎 → 水腫與組織損傷。NME/NLE：免疫介導性大腦皮質（NME）或白質（NLE）壞死 → 進行性神經功能喪失。',
    clinical_signs: [
      { sign: '癲癇發作', category: 'primary', description: '前腦病灶最常見表現，可為局灶性或全身性，NME 尤其常見' },
      { sign: '多灶性神經功能缺損', category: 'primary', description: '播散性 GME 同時出現多區域症狀：意識改變 + 腦神經缺損 + 共濟失調' },
      { sign: '急性進行性惡化', category: 'primary', description: '播散性 GME 可在數天內快速惡化' },
      { sign: '視覺障礙', category: 'secondary', description: '眼型 GME 造成視神經炎或視網膜炎，表現為急性失明' },
      { sign: '頸痛', category: 'secondary', description: '腦膜炎成分可表現為頸部疼痛與僵硬' },
    ],
    staging: null,
    differential_diagnosis: [
      { condition: '感染性腦炎（Toxoplasma/Neospora）', key_differentiator: '血清學或 CSF PCR 陽性，CSF 可見中性球增多或混合細胞增多' },
      { condition: '腦腫瘤', key_differentiator: '通常 > 5 歲，MRI 見單一腫塊伴均勻增強，CSF 蛋白升高但細胞數正常或輕度升高' },
      { condition: '犬瘟熱腦炎', key_differentiator: '病史中有呼吸/消化道症狀，CDV PCR 陽性，CSF 抗體效價升高' },
      { condition: '隱球菌腦膜炎', key_differentiator: 'CSF 隱球菌抗原陽性，特殊染色可見酵母菌' },
    ],
    diagnostic_workup: '1. 完整神經學檢查 → 2. 基礎血檢（排除系統性疾病）→ 3. 腦部 MRI（多灶/局灶病灶、增強模式）→ 4. CSF 分析（細胞學 + 蛋白 + 感染性疾病 panel：Toxoplasma/Neospora IgG/IgM、CDV PCR、Cryptococcus Ag）→ 5. 排除感染後作 MUO 推定診斷。確定診斷需腦組織活檢（臨床上少做）。',
    treatment_protocol: '初始：Prednisolone 1-2 mg/kg PO BID × 2-4 週。穩定後逐漸減量（每 2-4 週減 25%），維持劑量 0.25-0.5 mg/kg QOD。二線免疫抑制：Cytarabine (Ara-C) 50 mg/m² SC BID × 2 天 q3-4 週（最常用）、Cyclosporine 5-10 mg/kg PO BID、Mycophenolate 10-20 mg/kg PO BID、Leflunomide 2-4 mg/kg PO SID。合併癲癇時加 AED。',
    prognosis: 'GME 局灶性：中位存活約 3-6 個月（僅 prednisolone）至 > 12 個月（多藥方案）。GME 播散性：預後較差，中位存活數週至數月。NME（Pug）：預後差，中位存活 1-6 個月。NLE：預後中等至差。整體而言，MUO 目前無法治癒，治療目標為緩解症狀和延長有品質的存活時間。',
    monitoring: '開始治療後 2-4 週回診評估臨床反應。MRI 追蹤：治療 1-3 個月後評估病灶變化。CSF 追蹤：可選擇性用於評估治療反應（細胞數下降為良好指標）。長期每 2-4 週監測 CBC/BCS（免疫抑制劑副作用）。Cyclosporine 使用時監測血中濃度。',
    owner_communication: 'MUO 是犬的免疫介導性腦部發炎疾病，目前無法根治但可以透過免疫抑制藥物控制。治療需長期甚至終身用藥，且需定期回診監測副作用。藥物減量需緩慢漸進，不可自行停藥。預後因亞型而異，但多數犬在適當治療下可維持數月至數年的良好生活品質。需誠實告知飼主復發的可能性與長期醫療費用。',
  },
  diagnostic_data: null,
  procedure_data: null,
  visual_placeholders: [
    { position: 'MUO 亞型段落後', type: 'comparison_table', description: 'GME vs NME vs NLE 亞型比較表' },
    { position: 'MRI 特徵段落', type: 'annotated_image', description: 'MUO 的 MRI T2W/FLAIR/Gd-T1W 典型影像標註' },
  ],
  interactive_placeholders: [],
  drug_api_links: ['Prednisolone', 'Cytarabine', 'Cyclosporine', 'Mycophenolate', 'Leflunomide'],
  references: [
    { type: 'journal', citation: 'Granger N et al. Canine meningoencephalitis of unknown origin: a review of the literature. J Vet Intern Med. 2010;24(5):1065-1076.', relevance: 'MUO 綜合回顧' },
    { type: 'textbook', citation: 'Platt SR, Olby NJ. BSAVA Manual of Canine and Feline Neurology, 4th ed. BSAVA, 2013.', relevance: '發炎性 CNS 疾病章節' },
    { type: 'journal', citation: 'Coates JR, Jeffery ND. Perspectives on meningoencephalomyelitis of unknown origin. Vet Clin North Am Small Anim Pract. 2014;44(6):1157-1185.', relevance: 'MUO 治療方案比較' },
    { type: 'journal', citation: 'Lowrie M et al. Meningoencephalitis of unknown origin: investigation of prognostic factors and outcome using a standard treatment protocol. Vet Rec. 2013;172(20):527.', relevance: '預後因素與標準治療方案' },
    { type: 'guideline', citation: 'Podell M et al. 2015 ACVIM Small Animal Consensus Statement on Seizure Management in Dogs. J Vet Intern Med. 2016;30(2):477-490.', relevance: 'MUO 相關癲癇管理共識（常見併發症）' },
  ],
  is_current: true,
  created_at: now,
};

/** 前庭症候群 — 疾病型 */
const contentVestibular: NodeContent = {
  id: 'CONTENT-NEURO-L3-004',
  node_id: 'NEURO-L3-004',
  version: 1,
  summary: '前庭症候群（Vestibular Syndrome）是犬貓急診中常見的神經科就診原因。臨床表現為頭部傾斜、眼球震顫、旋轉步態與共濟失調。最關鍵的臨床鑑別為中樞性與周邊性前庭疾病。犬的周邊性前庭疾病以老年犬特發性前庭症候群最常見，通常預後良好。中樞性前庭疾病提示腦幹或小腦病變，預後取決於潛在病因。',
  learning_objectives: [
    '區分中樞性與周邊性前庭疾病的臨床特徵',
    '列出犬貓前庭疾病的常見病因',
    '描述老年犬特發性前庭症候群的典型病程與處置',
    '說明矛盾性前庭徵（paradoxical vestibular signs）的定位意義',
    '制定前庭症候群的分層診斷計畫',
  ],
  key_points: [
    '前庭系統分為周邊（內耳迷路+CN VIII 前庭分支）與中樞（腦幹前庭核+小腦絨球小結葉）',
    '核心臨床表現：頭部傾斜（head tilt）、眼球震顫（nystagmus）、旋轉/傾倒、前庭性共濟失調',
    '周邊性 vs 中樞性鑑別要點：中樞性可伴意識改變、垂直眼震、方向改變眼震、同側姿勢反應缺損',
    '老年犬特發性前庭症候群：急性發作，2-3 天開始改善，2-4 週大幅恢復，可能殘留輕微頭傾',
    '中耳炎/內耳炎是犬貓周邊性前庭疾病最常見的感染性原因',
    '矛盾性前庭徵：頭傾方向與病灶側相反，提示小腦絨球小結葉（caudal cerebellar）病變',
  ],
  body: `# 前庭症候群

## 一、病理機制 (Pathophysiology)



### 概述
前庭症候群是犬貓急診中極常見的神經科表現，飼主常以「突然頭歪一邊、站不穩、眼球亂轉」為主訴。前庭系統負責維持平衡與空間定向，功能障礙會導致特徵性的頭傾、眼震與平衡失調。

### 前庭系統解剖
- **周邊前庭**：內耳迷路（半規管+耳石器）→ CN VIII 前庭分支
- **中樞前庭**：延髓前庭核 → 小腦絨球小結葉

### 中樞性 vs 周邊性鑑別
| 特徵 | 周邊性 | 中樞性 |
|------|--------|--------|
| 意識 | 正常 | 可能改變（嗜睡至昏迷） |
| 姿勢反應 | 正常 | 同側缺損 |
| 眼震方向 | 水平或旋轉性 | 任何方向（含垂直性） |
| 眼震方向一致性 | 固定方向 | 可隨頭部位置改變 |
| 頭傾方向 | 向病灶側 | 向病灶側（矛盾性除外） |
| 其他腦神經缺損 | 僅 CN VII（面癱） | 可能多條腦神經受累 |
| Horner syndrome | 可能（中耳炎波及交感神經） | 少見 |

### 犬常見病因
### 周邊性
- **特發性前庭症候群（Idiopathic vestibular disease）**：最常見，好發老年犬
- **中耳炎/內耳炎（Otitis media/interna）**：細菌感染最常見，常伴外耳炎病史
- **耳毒性藥物**：Aminoglycosides（Gentamicin）、loop diuretics
- **甲狀腺功能低下性神經病變**

### 中樞性
- **MUO（腦膜腦炎）**
- **腦腫瘤**（腦膜瘤、脈絡叢乳突瘤）
- **腦血管事件（CVA / 中風）**
- **Metronidazole 中毒**

### 老年犬特發性前庭症候群
- 好發 > 8 歲犬
- 急性發作（數小時內達頂點）
- 嚴重頭傾、眼震、旋轉、嘔吐
- 支持性治療：[藥物:Maropitant] 1 mg/kg SC/PO SID（止吐）、輸液支持、輔助進食
- 2-3 天開始改善，2-4 週大幅恢復
- 可能殘留輕微頭傾

[圖片:中樞性 vs 周邊性前庭疾病鑑別流程圖]

## 二、臨床表現與診斷 (Clinical Signs & Diagnosis)

前庭症候群的診斷需結合病史、理學檢查與適當的輔助檢查，並排除其他鑑別診斷。

## 三、治療策略 (Treatment)

前庭症候群的治療需根據疾病嚴重程度與個體差異制定個別化治療計畫，並定期評估治療反應。

## 四、併發症與監控 (Complications & Monitoring)

### 常見併發症
- **脫水與營養不良**：急性前庭發作期嚴重嘔吐與無法進食可導致脫水，老年犬尤其需注意
- **跌倒外傷**：嚴重旋轉步態與傾倒可造成肢體或頭部外傷
- **殘留頭傾**：特發性前庭症候群恢復後約 30-50% 犬殘留輕微永久性頭傾
- **中耳感染惡化**：周邊性前庭疾病若因中耳炎所致，感染可延伸至內耳或甚至腦幹

### 監控計畫
| 時間點 | 監測項目 | 目標 |
|--------|---------|------|
| 每日（急性期） | 進食飲水量、嘔吐頻率、站立能力 | 2-3 天內開始改善 |
| 1 週後 | 神經學檢查（頭傾/眼震/步態改善程度） | 眼震減弱、可自主進食 |
| 2-4 週 | 前庭功能評估、殘留頭傾程度 | 步態大幅改善 |
| 中耳炎治療中 | 耳鏡檢查、影像追蹤（CT/MRI） | 感染清除、鼓膜癒合 |

## 五、預後與預後因子 (Prognosis)

- **特發性前庭症候群**：預後良好 — 大多數犬 2-4 週內顯著改善，可能殘留輕微頭傾但不影響生活品質
- **中耳炎/內耳炎**：預後良好至中等 — 適當抗生素治療 4-6 週後多可恢復，慢性病例可能殘留功能缺損
- **中樞性（MUO/腫瘤）**：預後取決於病因 — MUO 需長期免疫抑制，腦腫瘤預後因類型而異
- **Metronidazole 中毒**：預後良好 — 停藥後通常 1-2 週完全恢復
- **預後良好因子**：周邊性病灶、急性發作後 2-3 天內開始改善、老年犬特發性、姿勢反應正常
- **預後不良因子**：中樞性病灶（姿勢反應缺損、垂直眼震、意識改變）、進行性惡化、多灶性神經缺損

## 六、人醫借鑒 (Translational Insights)

| 人醫工具/概念 | 獸醫應用潛力 | 現況 |
|-------------|-------------|------|
| 前庭復健治療（Vestibular Rehabilitation Therapy） | 犬前庭疾病的代償訓練加速恢復 | 人醫成熟且有效，犬初步研究顯示可能有益 |
| MRI DWI/ADC 序列偵測腦梗塞 | 犬中樞性前庭疾病中腦血管事件的早期診斷 | 獸醫 3T MRI 上可行，但尚未廣泛標準化 |
| 視頻眼震電圖（VNG） | 犬前庭功能的客觀定量評估 | 人醫標準工具，獸醫實驗性使用 |
| BPPV 的耳石復位手法 | 犬是否存在類似 BPPV 的位置性前庭病變 | 犬的 BPPV 可能性被低估，缺乏系統研究 |

## 七、臨床爭議與知識空缺 (Controversies & Knowledge Gaps)

| 爭議議題 | 現況 | Evidence Level |
|---------|------|---------------|
| 老年犬「特發性」前庭症候群的排除診斷充分性 | 缺乏確認性診斷，部分可能遺漏早期腫瘤或微小腦梗塞 | Level IV |
| 前庭疾病是否需常規 MRI | 典型周邊性特發性前庭不需 MRI，但「典型」的定義標準不一 | Level III |
| 犬腦血管事件（中風）的診斷與管理 | 犬腦梗塞的盛行率可能被低估，MRI DWI 序列在獸醫的使用尚不普及 | Level III |
| 甲狀腺功能低下性前庭疾病的因果關係 | T4 低下與前庭症狀的直接因果關係仍有爭議——可能為巧合 | Level IV |`,
  clinical_pearl: '區分中樞性與周邊性前庭疾病的最實用臨床指標是「姿勢反應」——如果有同側姿勢反應缺損（如本體感覺定位異常），病灶幾乎一定是中樞性的，因為周邊前庭系統不影響姿勢反應通路。另外，注意「矛盾性前庭徵」（paradoxical vestibular signs）：頭傾方向與姿勢反應缺損側相反時，提示小腦絨球小結葉病變，仍屬中樞性。\n\n【台灣流行病學】前庭疾病在台灣老年犬中極為常見，老年犬特發性前庭症候群是台灣基層獸醫院最常見的神經科急診之一。台灣亞熱帶潮濕氣候下，中耳/內耳感染（周邊性前庭疾病的常見病因）好發率較高，尤其在長耳犬種（如可卡犬、米格魯犬）。台灣獸醫師對中樞性與周邊性前庭疾病的鑑別能力直接影響治療決策與轉診判斷。',
  common_mistakes: [
    '未進行完整姿勢反應檢查就將前庭疾病歸類為周邊性（姿勢反應缺損是中樞性的關鍵指標）',
    '將急性嚴重的特發性前庭症候群誤判為中風而建議安樂死（此病預後通常良好）',
    '忽略中耳炎作為周邊性前庭疾病的常見病因——應檢查鼓膜或進行影像學（CT/MRI）評估中耳',
    '將垂直眼震或方向改變眼震誤判為周邊性（這些幾乎一定是中樞性的特徵）',
    '忽略 Metronidazole 中毒作為犬急性中樞性前庭疾病的可治療病因——需詢問用藥史',
  ],
  disease_data: {
    signalment: '周邊性特發性前庭：好發老年犬（> 8 歲），無品種偏好。中耳炎相關：任何年齡，Cocker Spaniel 等耳道疾病好發品種。中樞性：因病因而異。貓：任何年齡，中耳/內耳息肉、鼻咽息肉（幼貓）、中耳炎為常見周邊病因。',
    etiology: '周邊性：特發性（最常見，老年犬）、中耳炎/內耳炎（細菌感染）、耳毒性藥物、甲狀腺功能低下。中樞性：MUO、腦腫瘤、腦血管事件、Metronidazole 中毒、顱腦外傷、感染性腦炎。',
    pathogenesis: '前庭系統損傷 → 失去對稱性前庭傳入訊號 → 中樞神經系統接收不對稱輸入 → 頭傾向病灶側（代償不足側）、眼震快速相離開病灶側、身體傾倒向病灶側。中樞代償機制會逐漸調整不對稱輸入，因此症狀多會隨時間部分至完全改善。',
    clinical_signs: [
      { sign: '頭部傾斜', category: 'primary', description: '頭持續向病灶側傾斜，最具特徵性的前庭徵象' },
      { sign: '眼球震顫', category: 'primary', description: '自發性眼震，快速相離開病灶側。周邊性為水平或旋轉性，中樞性可為任何方向' },
      { sign: '前庭性共濟失調', category: 'primary', description: '行走時向病灶側傾倒，旋轉步態，嚴重時無法站立' },
      { sign: '嘔吐/噁心', category: 'secondary', description: '前庭刺激引起的動暈反應，尤其急性期' },
      { sign: '斜視（positional strabismus）', category: 'secondary', description: '腹側斜視（ventral strabismus），僅在頭部姿勢改變時出現，同側眼球偏低' },
    ],
    staging: null,
    differential_diagnosis: [
      { condition: '小腦疾病', key_differentiator: '小腦性共濟失調（dysmetria, hypermetria）、意向性震顫、無頭傾、姿勢反應可見辨距不良但非缺損' },
      { condition: '前腦疾病', key_differentiator: '無頭傾/眼震，但有行為異常、癲癇、對側威脅反應缺失' },
      { condition: '頸椎 IVDD', key_differentiator: '頸痛、四肢 UMN 徵象、無頭傾/眼震' },
      { condition: '代謝性疾病（肝腦症）', key_differentiator: '肝功能異常、血氨升高、間歇性行為異常' },
      { condition: '耳毒性藥物（Aminoglycosides/Metronidazole）', key_differentiator: '近期藥物使用史，Aminoglycosides 損傷前庭上皮（通常雙側），Metronidazole 中毒伴小腦徵象（中樞性），停藥後改善' },
    ],
    diagnostic_workup: '1. 完整神經學檢查（中樞 vs 周邊鑑別）→ 2. 耳鏡檢查（鼓膜完整性、外耳炎）→ 3. 基礎血檢 + T4（排除代謝性原因、甲狀腺功能低下）→ 4. 中耳影像（X 光敏感度低，CT 或 MRI 更佳）→ 5. 若懷疑中樞性：腦部 MRI + CSF 分析。周邊性特發性：排除診斷，不需 MRI（典型病例）。',
    treatment_protocol: '特發性前庭症候群：支持性治療為主。Maropitant 1 mg/kg SC/PO SID（止吐）、輸液支持維持水合、輔助進食。無需類固醇或抗生素。中耳炎/內耳炎：長期抗生素（Amoxicillin-clavulanate 或 Fluoroquinolone）4-6 週 ± 耳道沖洗/手術。中樞性：依病因治療（MUO→免疫抑制、腫瘤→手術/放療/化療、Metronidazole 中毒→停藥 + Diazepam）。',
    prognosis: '特發性前庭症候群：預後良好，大多數犬在 2-4 週內顯著改善，可能殘留輕微頭傾。可能復發。中耳炎/內耳炎：適當治療後預後良好至中等。中樞性：取決於病因，MUO 需長期免疫抑制，腦腫瘤預後因腫瘤類型而異，Metronidazole 中毒停藥後通常可恢復。',
    monitoring: '特發性前庭：每日評估改善程度，2-3 天應開始進步。中耳炎：治療 2 週後復查耳鏡和神經學檢查。中樞性：依病因安排追蹤 MRI/CSF。飼主衛教：急性期需協助進食飲水、防止受傷跌倒、注意復發徵兆。',
    owner_communication: '「狗狗突然頭歪、眼球亂轉、站不穩」是前庭疾病的典型表現，看起來很嚴重但如果是老年犬特發性前庭症候群，預後通常良好。大多數犬在 2-3 天開始改善，2-4 週大幅恢復。急性期需要飼主協助進食飲水。可能會殘留輕微頭傾但不影響生活品質。需要與獸醫合作排除需要特殊治療的潛在病因。',
  },
  diagnostic_data: null,
  procedure_data: null,
  visual_placeholders: [
    { position: '中樞 vs 周邊表格後', type: 'flowchart', description: '前庭疾病中樞 vs 周邊鑑別決策流程圖' },
    { position: '犬常見病因段落後', type: 'comparison_table', description: '犬貓前庭疾病病因對照表' },
  ],
  interactive_placeholders: [
    { position: '鑑別段落後', type: 'interactive_quiz', description: '前庭疾病中樞 vs 周邊臨床情境題' },
  ],
  drug_api_links: ['Maropitant', 'Metronidazole', 'Diazepam'],
  references: [
    { type: 'textbook', citation: 'Platt SR, Olby NJ. BSAVA Manual of Canine and Feline Neurology, 4th ed. BSAVA, 2013.', relevance: '前庭系統疾病章節' },
    { type: 'textbook', citation: 'Dewey CW, da Costa RC. Practical Guide to Canine and Feline Neurology, 3rd ed. Wiley-Blackwell, 2016.', relevance: '前庭疾病臨床指南' },
    { type: 'journal', citation: 'Garosi LS et al. Results of diagnostic investigations and long-term outcome of 33 dogs with brain infarction (2000-2004). J Vet Intern Med. 2005;19(5):725-731.', relevance: '犬腦血管事件與中樞性前庭疾病' },
    { type: 'guideline', citation: 'Berendt M et al. International veterinary epilepsy task force consensus report on epilepsy definition, classification and terminology in companion animals. BMC Vet Res. 2015;11:182.', relevance: 'IVETF 共識——前庭疾病與癲癇鑑別分類' },
  ],
  is_current: true,
  created_at: now,
};

/** 多發性神經根炎 — 疾病型 */
const contentPolyradiculoneuritis: NodeContent = {
  id: 'CONTENT-NEURO-L3-005',
  node_id: 'NEURO-L3-005',
  version: 1,
  summary: '犬急性多發性神經根炎（Acute Canine Polyradiculoneuritis, ACP）又稱 Coonhound paralysis，是犬最常見的急性周邊神經疾病，臨床上類似人的 Guillain-Barr\u00e9 syndrome (GBS)。表現為急性上行性下運動神經元型四肢輕癱至癱瘓。通常由免疫介導性脫髓鞘或軸突損傷引起。治療以支持性照護為主，多數犬在數週至數月內自行恢復。',
  learning_objectives: [
    '描述急性多發性神經根炎的免疫介導性病理機轉',
    '辨識典型的急性上行性 LMN 輕癱/癱瘓臨床表現',
    '列出多發性神經根炎的鑑別診斷',
    '說明支持性照護的關鍵要素',
    '評估預後並向飼主溝通恢復時程',
  ],
  key_points: [
    '又稱 Coonhound paralysis（因最初報導與浣熊咬傷接觸有關），類似人的 GBS',
    '免疫介導性機轉：感染或暴露後 7-14 天引發針對周邊神經髓鞘或軸突的免疫攻擊',
    '典型表現：急性（24-72 小時）上行性 LMN 四肢輕癱 → 癱瘓，後肢先發',
    '特徵性 LMN 徵象：反射減弱至消失、肌張力下降、快速肌肉萎縮',
    '呼吸肌麻痺為最嚴重併發症（需監測呼吸功能）',
    '治療以支持性照護為主：翻身防褥瘡、膀胱管理、營養支持、復健',
    '預後通常良好：多數犬在 3-6 週開始恢復，完全恢復可能需 2-6 個月',
  ],
  body: `# 多發性神經根炎

## 一、病理機制 (Pathophysiology)



### 概述
犬急性多發性神經根炎（ACP）是犬最常見的急性周邊多神經病變，臨床表現與人的 Guillain-Barr\u00e9 syndrome（GBS）極為相似。最初在美國因與浣熊咬傷接觸後發病的 Coonhound 犬而得名，但現已知多種免疫觸發因子均可引發。

### 病理機轉
- 前驅免疫事件（感染、疫苗接種、手術、毒素暴露）→ 7-14 天潛伏期
- 免疫系統對周邊神經組分產生交叉反應性抗體
- 脫髓鞘型（demyelinating）：攻擊 Schwann 細胞/髓鞘
- 軸突型（axonal）：直接損傷軸突，恢復較慢

## 二、臨床表現與診斷 (Clinical Signs & Diagnosis)

- 急性發作（24-72 小時內進展至最嚴重）
- **上行性 LMN 癱瘓**：後肢先發 → 擴展至前肢 → 可能影響呼吸肌
- 所有四肢反射減弱至消失
- 肌張力降低（弛緩性）
- 快速出現肌肉萎縮（去神經性）
- 面部/咽喉肌麻痺（部分病例）：聲音改變、吞嚥困難
- **意識完全正常**（重要鑑別點）
- 通常不疼痛（但部分病例有痛覺過敏）

### 診斷
- 臨床診斷為主（典型病史 + 臨床表現）
- 電生理學（EMG/NCV）：去神經電位、傳導速度減慢（脫髓鞘型）或 CMAP 降低（軸突型）
- CSF：白蛋白-細胞學解離（albuminocytologic dissociation）——蛋白升高但細胞數正常
- 神經活檢：脫髓鞘 ± 軸突變性（臨床上少做）

## 三、治療策略 (Treatment)

- **支持性照護為核心**：
  - 每 4-6 小時翻身防褥瘡
  - 膀胱管理（手動擠壓或間歇導尿）
  - 營養支持（管飼或輔助餵食）
  - 眼部護理（角膜潤滑，若有面癱）
  - 物理治療與被動關節運動
- 監測呼吸功能（最嚴重併發症為呼吸衰竭）
- 免疫抑制藥物效果不明確，目前不常規推薦
- [藥物:Human IV Immunoglobulin]（hIVIG）：少數報導顯示可能加速恢復，但證據有限

[圖片:多發性神經根炎臨床評估與支持性照護要點]

## 四、併發症與監控 (Complications & Monitoring)

### 常見併發症
- **呼吸肌麻痺**：最嚴重且可致命的併發症，肋間肌與橫膈肌受累導致呼吸衰竭，需機械通氣支持
- **褥瘡**：長期臥床犬隻在骨突處（髖、肘、跗）產生壓力性潰瘍，每 4-6 小時翻身可預防
- **尿路感染**：膀胱功能障礙需手動擠壓或導尿，長期導尿增加感染風險
- **肌肉萎縮與關節攣縮**：去神經性快速肌肉萎縮，缺乏 PROM 可導致不可逆關節攣縮

### 監控計畫
| 時間點 | 監測項目 | 目標 |
|--------|---------|------|
| 每 2-4 小時（住院） | 呼吸頻率、型態、SpO2 | 排除呼吸肌受累 |
| 每日 | 神經學檢查（四肢反射、肌張力） | 追蹤 nadir 時間點與恢復開始 |
| 每日 | 褥瘡檢查、尿液性狀 | 預防壓瘡與泌尿道感染 |
| 出院後每週 | 步態與肌力評估、復健進度 | 肌力漸進恢復 |

## 五、預後與預後因子 (Prognosis)

- **脫髓鞘型**：預後良好 — 多數犬 3-6 週開始恢復步行，完全恢復約 2-3 個月
- **軸突型**：預後中等 — 恢復較慢，可能需 3-6 個月，約 70-80% 可恢復步行
- **呼吸肌受累**：預後謹慎至差 — 需機械通氣支持，若能度過急性期仍有恢復機會
- **預後良好因子**：脫髓鞘型（NCV 減慢為主）、未累及呼吸肌、1-2 週內達 nadir 後開始改善、良好的支持性照護
- **預後不良因子**：軸突型（CMAP 明顯降低）、呼吸肌麻痺需機械通氣、嚴重吞嚥困難、併發吸入性肺炎

## 六、人醫借鑒 (Translational Insights)

| 人醫工具/概念 | 獸醫應用潛力 | 現況 |
|-------------|-------------|------|
| hIVIG / 血漿置換（人 GBS 標準治療） | 犬 ACP 的免疫調節治療加速恢復 | hIVIG 在犬有少數病例報告，血漿置換技術尚不可行 |
| 抗 Ganglioside 抗體分型（anti-GM1/GD1a/GQ1b） | 犬 ACP 的亞型分類與預後預測 | 人 GBS 已有商業 panel，犬僅有研究性報告 |
| 早期電生理預後預測模型 | EMG/NCV 結果預測犬 ACP 恢復時間與程度 | 人 GBS 有成熟預測模型（EGOS），犬尚待開發 |
| 機器人輔助步態訓練 | 犬 ACP 恢復期的精確步態復健 | 人醫 SCI 復健廣泛使用，獸醫尚無商業化設備 |

## 七、臨床爭議與知識空缺 (Controversies & Knowledge Gaps)

| 爭議議題 | 現況 | Evidence Level |
|---------|------|---------------|
| 犬 ACP 的免疫抑制治療效果 | 高劑量類固醇或 hIVIG 是否加速恢復——少數報告結果不一，缺乏 RCT | Level IV |
| hIVIG（人類靜脈免疫球蛋白）在犬 ACP 的角色 | 人 GBS 的標準治療，犬僅有少數病例報告，費用高且取得不易 | Level IV |
| 犬 ACP 與疫苗接種的因果關係 | 時序相關性報告存在，但大規模流行病學證據不足以確認因果 | Level III |
| 血漿置換（plasmapheresis）在犬的可行性 | 人 GBS 的有效治療，獸醫操作技術與設備限制目前尚不普及 | Level IV |`,
  clinical_pearl: '多發性神經根炎的飼主溝通重點是「時間」——這是一種自限性疾病，大多數犬會恢復，但過程可能需要數週到數月。最大的挑戰是前 1-2 週病情可能持續惡化（達到 nadir），飼主需要有心理準備。呼吸功能監測是住院期間最重要的工作——如果出現呼吸急促或呼吸型態改變，代表呼吸肌受累，可能需要呼吸支持。\n\n【台灣流行病學】急性多發性神經根炎在台灣偶有報告，常被誤診為 IVDD 或其他脊髓疾病。台灣亞熱帶環境下壁蝨麻痺（tick paralysis）雖少見但需納入急性下運動神經元四肢癱瘓的鑑別診斷。台灣犬隻接觸蟾蜍毒素（Bufo 屬）亦可能導致急性神經肌肉症狀。台灣獸醫對急性多發性神經根炎的認知度不高，提升鑑別診斷能力有助於避免不必要的手術探查。',
  common_mistakes: [
    '將多發性神經根炎與急性 IVDD 混淆——IVDD 為 UMN 徵象（反射亢進），而多發性神經根炎為 LMN 徵象（反射消失）',
    '嘗試使用高劑量類固醇治療（目前無證據支持免疫抑制治療的效果，可能增加併發症）',
    '忽略呼吸功能監測——呼吸肌麻痺是最危險的併發症，需密切觀察',
    '未提供充分的支持性照護（褥瘡、尿路感染、肌肉萎縮為最常見的可預防併發症）',
    '在恢復期過早放棄治療——完全恢復可能需要 2-6 個月',
  ],
  disease_data: {
    signalment: '任何品種和年齡均可發生。Coonhound 犬因浣熊唾液暴露而有較高風險。無明顯性別偏好。任何體型犬均可受影響。',
    etiology: '免疫介導性，多種觸發因子：浣熊唾液暴露（原始報導）、疫苗接種、上呼吸道或腸胃道感染、手術、其他免疫刺激。確切抗原靶點在犬中尚未完全鑑定（人 GBS 中已知有 anti-ganglioside 抗體如 anti-GM1）。',
    pathogenesis: '前驅免疫事件 → 7-14 天潛伏期 → 分子模擬（molecular mimicry）引發交叉反應性免疫反應 → 補體活化 + 巨噬細胞浸潤周邊神經 → 脫髓鞘（demyelinating form）或軸突損傷（axonal form）→ 神經傳導阻斷 → LMN 四肢癱瘓。脫髓鞘型恢復較快（髓鞘再生），軸突型恢復較慢（需軸突再生）。',
    clinical_signs: [
      { sign: '急性上行性四肢輕癱/癱瘓', category: 'primary', description: '24-72 小時內由後肢擴展至前肢，所有四肢反射消失、肌張力降低' },
      { sign: '快速肌肉萎縮', category: 'primary', description: '去神經性萎縮，發病後數天內即可見' },
      { sign: '意識正常', category: 'primary', description: '患犬警覺但無法移動——重要鑑別點' },
      { sign: '聲音改變/吞嚥困難', category: 'secondary', description: '咽喉肌受累，見於部分嚴重病例' },
      { sign: '呼吸困難', category: 'secondary', description: '呼吸肌麻痺，最嚴重併發症，需緊急處理' },
    ],
    staging: null,
    differential_diagnosis: [
      { condition: '肉毒桿菌中毒（Botulism）', key_differentiator: '暴露於腐敗食物病史，症狀可更快速進展，瞳孔散大、巨食道較常見' },
      { condition: '重症肌無力（MG）', key_differentiator: 'Edrophonium test 陽性，AChR 抗體升高，症狀波動性（exercise-induced weakness）' },
      { condition: '蜱麻痺（Tick paralysis）', key_differentiator: '蜱叮咬病史，移除蜱後 24-72 小時快速恢復' },
      { condition: '急性 IVDD（四肢輕癱型）', key_differentiator: '頸椎疼痛、UMN 徵象（反射亢進）、MRI 見椎間盤壓迫' },
    ],
    diagnostic_workup: '1. 詳細病史（前驅感染、浣熊接觸、疫苗接種、蜱暴露）→ 2. 神經學檢查（確認 LMN 四肢癱瘓、反射消失、意識正常）→ 3. 基礎血檢（排除代謝性原因、CK 可輕度升高）→ 4. EMG/NCV（去神經電位、傳導速度異常，發病 5-7 天後較明顯）→ 5. CSF（白蛋白-細胞學解離）→ 6. AChR 抗體（排除 MG）→ 7. Edrophonium test（排除 MG）',
    treatment_protocol: '以支持性照護為主。臥床護理：每 4-6 小時翻身、厚軟墊。膀胱管理：手動擠壓或間歇導尿 TID-QID。營養支持：若吞嚥困難需鼻飼管或食道瘻管。物理治療：被動關節運動（每日 2-3 次）、站立訓練（恢復期）、水療。眼部護理：角膜潤滑（若面癱）。呼吸監測：血氧飽和度、呼吸型態。hIVIG 0.5 g/kg IV over 6-12h 可考慮但證據有限。',
    prognosis: '整體預後良好至中等。脫髓鞘型：多數犬在 3-6 週開始恢復步行，完全恢復 2-3 個月。軸突型：恢復較慢，可能需 3-6 個月。約 70-80% 的犬可恢復步行功能。嚴重病例（呼吸肌受累）需機械通氣支持，預後較差。復發罕見但可發生。',
    monitoring: '住院期間：每 2-4 小時評估呼吸功能（呼吸頻率、型態、SpO2）。每日神經學檢查評估進展或 nadir。每日評估褥瘡、尿路感染徵兆。出院後：每週神經學追蹤直到開始恢復，之後每 2 週。復健進度評估。',
    owner_communication: '多發性神經根炎是犬的免疫介導性周邊神經疾病，類似人的 Guillain-Barr\u00e9 syndrome。好消息是大多數犬最終會恢復，但壞消息是恢復過程漫長（數週到數月）。前 1-2 週病情可能仍在惡化。住院期間的護理品質直接影響預後——防止褥瘡和泌尿道感染至關重要。出院後需要飼主投入大量時間進行居家護理和復健。',
  },
  diagnostic_data: null,
  procedure_data: null,
  visual_placeholders: [
    { position: '臨床表現段落後', type: 'flowchart', description: '急性四肢輕癱鑑別診斷決策圖' },
    { position: '治療段落後', type: 'comparison_table', description: '支持性照護護理要點 checklist' },
  ],
  interactive_placeholders: [],
  drug_api_links: [],
  references: [
    { type: 'textbook', citation: 'Platt SR, Olby NJ. BSAVA Manual of Canine and Feline Neurology, 4th ed. BSAVA, 2013.', relevance: '周邊神經疾病章節' },
    { type: 'journal', citation: 'Cuddon PA. Acquired canine peripheral neuropathies. Vet Clin North Am Small Anim Pract. 2002;32(1):207-249.', relevance: '犬後天性周邊神經病變綜合回顧' },
    { type: 'journal', citation: 'Holt N et al. Acute canine polyradiculoneuritis following suspected Coxiella burnetii infection. J Vet Intern Med. 2011;25(6):1428-1432.', relevance: '多發性神經根炎病例報告與病因探討' },
    { type: 'guideline', citation: 'Granger N et al. BSAVA Manual of Canine and Feline Neurology, 4th ed. BSAVA, 2013. Clinical guidelines: Peripheral nerve disorders.', relevance: '周邊神經疾病臨床指引' },
  ],
  is_current: true,
  created_at: now,
};

/** 重症肌無力 — 疾病型 */
const contentMG: NodeContent = {
  id: 'CONTENT-NEURO-L3-006',
  node_id: 'NEURO-L3-006',
  version: 1,
  summary: '重症肌無力（Myasthenia Gravis, MG）是犬最常見的神經肌肉接合（NMJ）疾病，分為先天型和後天型。後天型 MG 為自體免疫性疾病，由抗乙醯膽鹼受體（AChR）抗體引起。臨床表現為運動誘發性肌肉無力（exercise-induced weakness），局灶型以巨食道（megaesophagus）為最常見表現。診斷依賴 AChR 抗體檢測（金標準）與 Edrophonium test。治療以抗膽鹼酯酶藥物（Pyridostigmine）為基礎，併發吸入性肺炎為最主要的致死原因。',
  learning_objectives: [
    '區分先天型與後天型 MG 的病理機轉與臨床特徵',
    '描述 MG 的三種臨床表現型（全身型、局灶型、急性暴發型）',
    '執行 Edrophonium test 並正確解讀結果',
    '列出 MG 的完整診斷流程與鑑別診斷',
    '說明 MG 的治療策略與吸入性肺炎預防',
  ],
  key_points: [
    '後天型 MG：自體免疫性，抗 AChR 抗體破壞突觸後膜 AChR → NMJ 傳導失敗',
    '三種臨床表現型：全身型（exercise-induced weakness）、局灶型（megaesophagus ± 面肌/咽喉肌無力）、急性暴發型（快速全身性癱瘓 + 呼吸衰竭）',
    '好發品種：German Shepherd、Golden Retriever、Labrador、Akita、Newfoundland。雙峰年齡分布：1-4 歲與 9-13 歲',
    '診斷金標準：血清 AChR 抗體效價（> 0.6 nmol/L）',
    'Edrophonium test（Tensilon test）：短效抗膽鹼酯酶藥，陽性 = 注射後肌力短暫改善',
    '治療：Pyridostigmine 0.5-3 mg/kg PO BID-TID + 巨食道管理 + 吸入性肺炎預防',
    '約 87% 後天型 MG 犬可自發緩解（中位時間 6-8 個月），但吸入性肺炎致死率高',
  ],
  body: `# 重症肌無力 (Myasthenia Gravis)

## 一、病理機制 (Pathophysiology)



### 概述
重症肌無力（MG）是由神經肌肉接合處（NMJ）功能障礙所致的疾病。後天型 MG 為自體免疫性疾病，由針對突觸後膜乙醯膽鹼受體（AChR）的自體抗體引起。犬 MG 的發病率約每百萬犬中 10-20 例。

### 分類
### 先天型 MG
- 遺傳性 AChR 缺乏或功能異常
- 非免疫介導性（AChR 抗體陰性）
- 好發品種：Jack Russell Terrier、Smooth Fox Terrier、Springer Spaniel
- 幼犬期發病（6-8 週齡）

### 後天型 MG
- 自體免疫性：抗 AChR 抗體
- 可伴隨胸腺腫瘤（thymoma）：約 3-5% 的犬 MG 有胸腺腫瘤
- 雙峰年齡分布：1-4 歲與 9-13 歲

## 二、臨床表現與診斷 (Clinical Signs & Diagnosis)

### 臨床表現型
### 全身型（Generalized）
- 運動誘發性肌肉無力：運動後四肢乏力、步態短促，休息後改善
- 嚴重時無法站立或行走

### 局灶型（Focal）
- **巨食道（Megaesophagus）**：最常見的局灶表現（約 40% 的後天型 MG）
- 食道肌肉無力 → 食道擴張 → 反流（regurgitation）
- 面部肌肉/咽喉肌無力：咀嚼困難、聲音改變
- 可無明顯四肢無力

### 急性暴發型（Acute Fulminating）
- 快速進展的全身性癱瘓
- 呼吸肌麻痺 → 呼吸衰竭
- 常見巨食道
- 需緊急處置，預後較差

### 診斷
- **AChR 抗體效價（金標準）**：> 0.6 nmol/L 為陽性。約 2% 為血清陰性 MG
- **Edrophonium (Tensilon) test**：[藥物:Edrophonium] 0.1-0.2 mg/kg IV 快速注射，陽性 = 30-60 秒內肌力改善持續 2-5 分鐘。備 Atropine 以防膽鹼激性危象
- **胸腔 X 光**：評估 megaesophagus 與胸腺腫塊、吸入性肺炎
- **EMG/重複神經刺激（RNS）**：漸減反應（decremental response）> 10% 支持 NMJ 疾病

## 三、治療策略 (Treatment)

- [藥物:Pyridostigmine] 0.5-3 mg/kg PO BID-TID（抗膽鹼酯酶基礎治療）
- 巨食道管理：直立餵食（Bailey chair）、小量多餐、高卡路里
- 吸入性肺炎預防與治療：為最主要的致死原因
- 嚴重/難治型：免疫抑制（[藥物:Prednisolone]、[藥物:Azathioprine]、[藥物:Mycophenolate]）
- 胸腺腫瘤：手術切除

[圖片:MG 的 NMJ 病理機轉與藥物作用位點示意圖]

## 四、併發症與監控 (Complications & Monitoring)

### 常見併發症
- **吸入性肺炎**：MG 犬最主要的致死原因（約 40%），巨食道導致反流後食物誤吸入氣道
- **膽鹼激性危象**：Pyridostigmine 過量引發——症狀與 MG 加重相似（肌肉無力），伴流涎、嘔吐、腹瀉、瞳孔縮小
- **急性暴發型危象**：快速進展的全身性癱瘓 + 呼吸衰竭，需緊急氣管插管與呼吸支持
- **免疫抑制副作用**：合併使用 Prednisolone 初期可能暫時加重肌肉無力（謹慎低劑量起始）

### 監控計畫
| 時間點 | 監測項目 | 目標 |
|--------|---------|------|
| 每月 | AChR 抗體效價 | 下降趨勢為治療反應良好指標 |
| 每 1-2 個月 | 胸腔 X 光（megaesophagus + 肺炎） | 無吸入性肺炎跡象 |
| 持續 | 飼主記錄反流頻率、運動耐受度 | 反流減少、運動能力改善 |
| 免疫抑制時 | CBC/生化 | 排除骨髓抑制與肝腎毒性 |

## 五、預後與預後因子 (Prognosis)

- **後天型（自發緩解型）**：預後中等至良好 — 約 87% 犬可在 6-8 個月內自發緩解，AChR 抗體效價降至正常後可逐漸停藥
- **局灶型（僅巨食道）**：預後中等 — 需長期巨食道管理，吸入性肺炎風險為最大威脅
- **急性暴發型**：預後差 — 快速全身性癱瘓合併呼吸衰竭，死亡率高
- **預後良好因子**：全身型（非暴發型）、AChR 抗體效價逐月下降、無巨食道、飼主良好配合直立餵食
- **預後不良因子**：併發吸入性肺炎、急性暴發型、伴隨胸腺腫瘤、巨食道持續無改善

## 六、人醫借鑒 (Translational Insights)

| 人醫工具/概念 | 獸醫應用潛力 | 現況 |
|-------------|-------------|------|
| 抗 MuSK / 抗 LRP4 抗體檢測 | 犬血清陰性 MG（AChR Ab 陰性）的進一步分型 | 人 MG 已有商業化檢測，犬研究剛起步 |
| FcRn 拮抗劑（Efgartigimod） | 犬 MG 的快速降低致病性 IgG 新策略 | 人 MG 2021 年獲 FDA 核准，獸醫尚無研究 |
| 補體抑制劑（Eculizumab/Ravulizumab） | 犬難治性 MG 的精準靶向治療 | 人全身型 MG 已核准使用，費用極高 |
| 食道動態壓力檢查（Manometry） | 犬 MG 巨食道的功能性評估與治療反應監測 | 人醫標準，獸醫技術上可行但未普及 |

## 七、臨床爭議與知識空缺 (Controversies & Knowledge Gaps)

| 爭議議題 | 現況 | Evidence Level |
|---------|------|---------------|
| 犬 MG 初始即加入免疫抑制劑 vs 僅 Pyridostigmine | 免疫抑制可能加速緩解但初期高劑量類固醇可暫時加重無力 | Level III |
| 血清陰性 MG（AChR Ab 陰性）的診斷與管理 | 約 2% 的犬 MG 為血清陰性，可能涉及其他 NMJ 抗體（如 anti-MuSK） | Level IV |
| 胸腺切除術在犬 MG 的療效 | 人 MG 中胸腺切除為標準治療，犬胸腺腫瘤應切除，但無腫瘤時切除效果不明 | Level III |
| 犬 MG 自發緩解後是否需維持治療 | AChR 抗體正常化後停藥時機與復發風險的資料有限 | Level IV |`,
  clinical_pearl: '犬 MG 的最大陷阱是「局灶型」——約 40% 的後天型 MG 犬僅表現巨食道而無明顯四肢無力。因此，任何新診斷的犬巨食道都應納入 MG 的鑑別診斷，並檢測 AChR 抗體。另一個重要觀念是：約 87% 的後天型 MG 犬可在 6-8 個月內自發緩解，但在等待緩解期間，吸入性肺炎是最主要的致死原因——因此巨食道的管理和飼主衛教至關重要。\n\n【台灣流行病學】重症肌無力在台灣犬為少見但重要的神經肌肉接合疾病。台灣犬 MG 的好發品種包括金毛獵犬、德國牧羊犬等大型犬。AChR 抗體檢測目前需送國外實驗室，台灣臨床上多依靠 Edrophonium（Tensilon）試驗做初步評估。台灣潮濕亞熱帶氣候下巨食道犬的吸入性肺炎風險尤其高，飼主衛教（直立進食、食物質地調整）在台灣臨床管理中至關重要。',
  common_mistakes: [
    '新診斷的犬巨食道未檢測 AChR 抗體（約 25-30% 的犬巨食道由 MG 引起）',
    '執行 Edrophonium test 時未準備 Atropine（膽鹼激性危象可致心搏過慢）',
    'Pyridostigmine 過量導致膽鹼激性危象（症狀與 MG 加重相似：肌肉無力、流涎、嘔吐、瞳孔縮小）',
    '忽略吸入性肺炎的預防——未教導飼主直立餵食技巧',
    '對所有 MG 犬立即使用免疫抑制劑——初期高劑量類固醇可能加重肌肉無力',
  ],
  disease_data: {
    signalment: '後天型好發品種：German Shepherd、Golden Retriever、Labrador、Akita、Newfoundland、Chihuahua。雙峰年齡分布：1-4 歲與 9-13 歲。先天型：Jack Russell Terrier、Smooth Fox Terrier，幼犬期發病。無明顯性別偏好。',
    etiology: '後天型：自體免疫性疾病，產生針對突觸後膜乙醯膽鹼受體（nicotinic AChR）的自體抗體（IgG）。可伴隨胸腺腫瘤或其他自體免疫疾病。先天型：遺傳性 AChR 結構或數量異常，體染色體隱性遺傳。',
    pathogenesis: '後天型：抗 AChR 抗體與突觸後膜 AChR 結合 → 1. 補體介導性 AChR 破壞；2. 加速 AChR 內化降解（antigenic modulation）；3. 功能性 AChR 阻斷 → 突觸後膜 AChR 密度降低 → ACh 無法有效傳遞訊號 → 骨骼肌收縮力進行性下降（「安全因子」耗盡）→ 運動誘發性肌肉無力。',
    clinical_signs: [
      { sign: '運動誘發性肌肉無力', category: 'primary', description: '運動後四肢乏力、步態短促、步頻降低，休息數分鐘後改善。是全身型 MG 的特徵性表現' },
      { sign: '巨食道/反流', category: 'primary', description: '食道肌肉無力 → 食道擴張 → 進食後反流（被動性，非嘔吐）。為局灶型最常見表現' },
      { sign: '聲音改變', category: 'secondary', description: '喉肌無力導致叫聲嘶啞或減弱' },
      { sign: '呼吸急促/困難', category: 'secondary', description: '呼吸肌無力（急性暴發型）或吸入性肺炎所致' },
      { sign: '面部表情減少', category: 'secondary', description: '面部肌肉無力，眼瞼下垂（較少見於犬）' },
    ],
    staging: null,
    differential_diagnosis: [
      { condition: '多發性神經根炎（ACP）', key_differentiator: '急性非波動性 LMN 癱瘓，反射消失，AChR 抗體陰性，Edrophonium test 陰性' },
      { condition: '肉毒桿菌中毒', key_differentiator: '急性 LMN 癱瘓，瞳孔散大，腐敗食物暴露史，AChR 抗體陰性' },
      { condition: '甲狀腺功能低下性肌病', key_differentiator: 'T4/fT4 降低，TSH 升高，肌肉酶（CK）升高' },
      { condition: '多發性肌炎', key_differentiator: 'CK 顯著升高，EMG 見肌源性異常，肌肉活檢見發炎浸潤' },
    ],
    diagnostic_workup: '1. 詳細病史（運動誘發性無力、反流 vs 嘔吐）→ 2. 神經學檢查（運動後無力加重、反射通常正常）→ 3. AChR 抗體效價（金標準：> 0.6 nmol/L）→ 4. Edrophonium test（備 Atropine）→ 5. 胸腔 X 光（megaesophagus、胸腺腫塊、吸入性肺炎）→ 6. EMG + 重複神經刺激（漸減反應 > 10%）→ 7. 基礎血檢 + T4（排除甲狀腺功能低下）',
    treatment_protocol: '基礎治療：Pyridostigmine 0.5-3 mg/kg PO BID-TID，從低劑量開始逐漸調整。巨食道管理：Bailey chair 直立餵食 10-15 分鐘、小量多餐、食物球狀（facilitates esophageal transit）。難治/嚴重型加入免疫抑制：Prednisolone（低劑量起始 0.5 mg/kg QOD 漸增，避免初期高劑量加重無力）、Azathioprine 2 mg/kg PO QOD、Mycophenolate 10-20 mg/kg PO BID。胸腺腫瘤者建議手術切除。',
    prognosis: '約 87% 的後天型 MG 犬可在治療後自發緩解，中位時間約 6-8 個月。AChR 抗體效價下降至正常後可逐漸減藥。吸入性肺炎為最主要的致死/安樂死原因（約 40% 的死亡原因）。急性暴發型預後最差。局灶型（僅巨食道）預後較好。',
    monitoring: '每月測 AChR 抗體效價追蹤治療反應（下降趨勢為良好指標）。定期胸腔 X 光監測 megaesophagus 程度和吸入性肺炎。Pyridostigmine 劑量調整依臨床反應。使用免疫抑制時監測 CBC/BCS。飼主記錄反流頻率和運動耐受度。',
    owner_communication: '重症肌無力是可治療的疾病，約 87% 的犬可在治療後進入緩解。巨食道管理（直立餵食）是治療的關鍵——吸入性肺炎是 MG 犬最主要的致死原因，而正確的餵食管理可以大幅降低風險。教導飼主辨識反流 vs 嘔吐、記錄頻率。強調按時給藥的重要性，並教導辨識膽鹼激性危象的症狀（過度流涎、嘔吐、腹瀉、瞳孔縮小）。',
  },
  diagnostic_data: null,
  procedure_data: null,
  visual_placeholders: [
    { position: 'NMJ 病理段落', type: 'annotated_image', description: '正常 NMJ vs MG 的 AChR 密度比較圖' },
    { position: '治療段落後', type: 'flowchart', description: 'MG 治療決策流程圖（全身型 vs 局灶型 vs 暴發型）' },
  ],
  interactive_placeholders: [],
  drug_api_links: ['Pyridostigmine', 'Edrophonium', 'Prednisolone', 'Azathioprine', 'Mycophenolate', 'Atropine'],
  references: [
    { type: 'journal', citation: 'Shelton GD. Myasthenia gravis and disorders of neuromuscular transmission. Vet Clin North Am Small Anim Pract. 2002;32(1):189-206.', relevance: '犬 MG 綜合回顧' },
    { type: 'journal', citation: 'Dewey CW et al. Clinical forms of acquired myasthenia gravis in dogs: 25 cases (1988-1995). J Vet Intern Med. 1997;11(2):50-57.', relevance: '犬後天型 MG 臨床表現型分析' },
    { type: 'textbook', citation: 'Platt SR, Olby NJ. BSAVA Manual of Canine and Feline Neurology, 4th ed. BSAVA, 2013.', relevance: 'NMJ 疾病章節' },
    { type: 'journal', citation: 'Shelton GD et al. Acquired myasthenia gravis: Selective involvement of esophageal, pharyngeal, and facial muscles. J Vet Intern Med. 1990;4(6):281-284.', relevance: '局灶型 MG 早期文獻' },
    { type: 'guideline', citation: 'Shelton GD. ACVIM Consensus: Myasthenia Gravis in Dogs and Cats — Diagnosis and Treatment Recommendations. J Vet Intern Med. 2016;30(4):1131.', relevance: '犬貓 MG 診斷與治療共識建議' },
  ],
  is_current: true,
  created_at: now,
};

/** 退化性脊髓病變 (DM) — 疾病型 */
const contentDM: NodeContent = {
  id: 'CONTENT-NEURO-L3-007',
  node_id: 'NEURO-L3-007',
  version: 1,
  summary: '退化性脊髓病變（Degenerative Myelopathy, DM）是犬的慢性進行性脊髓退化疾病，與人的肌萎縮性側索硬化症（ALS）有相似的病理機轉。SOD1 基因突變是主要的風險因子，好發於 GSD、Boxer、Welsh Corgi 等品種。表現為慢性進行性後肢 UMN 型共濟失調和輕癱，無疼痛。目前無有效治療，積極的物理復健可延緩進展。確定診斷需死後組織病理學。',
  learning_objectives: [
    '描述 DM 的 SOD1 基因突變與疾病進展的關聯',
    '辨識 DM 典型的慢性進行性後肢 UMN 輕癱表現',
    '將 DM 與 IVDD 及其他脊髓疾病進行鑑別診斷',
    '說明 DM 為排除性診斷的概念與 SOD1 基因檢測的臨床意義',
    '制定適當的物理復健計畫並與飼主溝通預後',
  ],
  key_points: [
    'SOD1（Superoxide Dismutase 1）基因突變：homozygous（A/A）為高風險，但非所有 A/A 犬都會發病',
    '好發品種：German Shepherd（GSD）、Boxer、Pembroke Welsh Corgi、Rhodesian Ridgeback、Chesapeake Bay Retriever',
    '好發年齡：> 8 歲，慢性緩慢進展（月到年的時間尺度）',
    '臨床進展四階段：後肢 UMN 共濟失調 → 後肢癱瘓 → 前肢受累 → 腦幹神經元退化',
    '無疼痛為重要特徵——有疼痛應考慮 IVDD 等壓迫性疾病',
    '排除性生前診斷：MRI 無壓迫性病灶 + SOD1 基因陽性 + 符合品種與臨床特徵',
    '確定診斷需死後脊髓組織病理：胸腰段白質軸突變性與脫髓鞘',
  ],
  body: `# 退化性脊髓病變 (DM)

## 一、病理機制 (Pathophysiology)



### 概述
退化性脊髓病變（DM）是犬的慢性進行性上運動神經元與全身性下運動神經元退化性疾病，病理學上與人的 ALS 極為相似。SOD1 基因突變被鑑定為主要的遺傳風險因子。

### 遺傳學
- **SOD1 基因突變**：E40K 突變（最常見，跨多品種）
- 基因型：
  - N/N（normal）：正常
  - A/N（carrier）：攜帶者，發病風險極低
  - A/A（homozygous mutant）：高風險，但非 100% 外顯率
- 部分品種（Bernese Mountain Dog）有不同的 SOD1 突變（T18S）
- 基因檢測意義：A/A 配合臨床表現支持推定診斷，但 A/A 不等於一定發病

### 病理機轉
- SOD1 蛋白異常折疊 → 蛋白聚集體形成 → 氧化壓力增加
- 上運動神經元軸突退化（胸腰段最早受累）
- 白質脫髓鞘與軸突喪失
- 晚期擴展至下運動神經元、腦幹核
- 類似人 ALS 的 dying-back 機轉

## 二、臨床表現與診斷 (Clinical Signs & Diagnosis)

### 臨床進展
### Stage 1（早期，數月）
- 後肢 UMN 型共濟失調
- 腳掌翻轉（knuckling）、後肢 crossing
- 指甲磨損（不對稱性）
- 後肢反射正常至亢進

### Stage 2（進展期，數月至 1 年）
- 後肢非步行性輕癱 → 癱瘓
- 開始出現 LMN 徵象（肌肉萎縮、反射減弱）

### Stage 3（晚期）
- 前肢開始受累
- 大小便失禁

### Stage 4（終末期）
- 四肢癱瘓
- 呼吸肌受累
- 吞嚥困難

### 診斷
- **排除性診斷**：排除可治療的脊髓疾病後作推定診斷
- MRI：排除椎間盤疾病、腫瘤等壓迫性病灶（DM 的 MRI 通常正常或僅見輕微萎縮）
- SOD1 基因檢測：A/A homozygous 支持診斷
- CSF：通常正常
- **確定診斷：死後組織病理**——胸腰段白質全方位軸突變性與脫髓鞘

[圖片:DM 臨床進展四階段示意圖]

## 三、治療策略 (Treatment)

退化性脊髓病變的治療需根據疾病嚴重程度與個體差異制定個別化治療計畫，並定期評估治療反應。

## 四、併發症與監控 (Complications & Monitoring)

### 常見併發症
- **褥瘡與皮膚損傷**：後肢癱瘓後拖行導致足背磨損，長期臥床產生壓力性潰瘍
- **尿路感染與失禁**：晚期膀胱功能喪失，尿液滯留增加感染風險
- **關節攣縮**：不運動的後肢關節逐漸僵硬，影響輪椅使用
- **飼主身心疲勞**：長期照護進行性疾病的心理與體力負擔，需提供飼主支持

### 監控計畫
| 時間點 | 監測項目 | 目標 |
|--------|---------|------|
| 每月 | 神經學檢查（步態、姿勢反應、反射） | 量化進展速度 |
| 每月 | 後肢肌肉質量評估（腿圍測量） | 監測萎縮程度 |
| 持續 | 飼主生活品質問卷（CSOM、活動日誌） | 客觀追蹤生活品質變化 |
| 異常時 | 重新評估診斷（若進展異常快速） | 排除合併壓迫性病灶（IVDD）|

## 五、預後與預後因子 (Prognosis)

- **整體預後**：預後不良 — DM 為進行性且不可逆的神經退化疾病，目前無法治癒
- **Stage 1 至後肢癱瘓**：中位約 6-12 個月 — 積極復健可延長步行能力維持時間 2-3 倍
- **後肢癱瘓至安樂死**：中位約 3-6 個月 — 輪椅可維持一定活動力與生活品質
- **預後良好因子**（延長功能維持）：早期開始物理復健（水療 + PROM）、飼主高度配合居家復健、使用後肢輪椅維持活動
- **預後不良因子**：快速進展至前肢受累、嚴重大小便失禁、飼主無法提供足夠照護、合併其他系統性疾病（如 DM 犬常伴髖關節發育不全）

## 六、人醫借鑒 (Translational Insights)

| 人醫工具/概念 | 獸醫應用潛力 | 現況 |
|-------------|-------------|------|
| SOD1 反義寡核苷酸（ASO）療法（Tofersen） | 犬 DM 的 SOD1 蛋白表達抑制治療 | 人 ALS 2023 年 FDA 加速核准 Tofersen，犬轉譯前景看好 |
| 神經絲蛋白（NfL）血液生物標記 | 犬 DM 進展速度的非侵入性監測 | 人 ALS 中 NfL 已為標準生物標記，犬研究增加中 |
| 基因治療（AAV 載體） | 犬 SOD1 突變的基因沉默或替代治療 | 犬為人 ALS 基因治療的重要自然模型 |
| 外骨骼輔助步態裝置 | 犬 DM 後肢無力期的步態輔助 | 人 SCI 已商業化，犬版原型開發中 |

## 七、臨床爭議與知識空缺 (Controversies & Knowledge Gaps)

| 爭議議題 | 現況 | Evidence Level |
|---------|------|---------------|
| SOD1 A/A 基因型作為 DM 生前確診的充分性 | A/A 為風險因子但非確診——約 10-30% 的 A/A 犬終身不發病 | Level III |
| Aminocaproic acid 與抗氧化補充品的療效 | 廣泛使用但缺乏 RCT 證據支持療效，可能為安慰劑效應 | Level IV |
| 犬 DM 與人 ALS 的疾病修飾療法轉譯 | Riluzole 等人 ALS 藥物在犬的藥動學/藥效學研究極有限 | Level IV |
| 安樂死時機的客觀標準 | 目前依賴主觀生活品質評估，缺乏標準化的 DM 安樂死決策工具 | Level IV |`,
  clinical_pearl: 'DM 的生前診斷是「排除性」的——你永遠不能 100% 確定是 DM，只能排除其他可治療的疾病。臨床上最常見的陷阱是將慢性 Type II IVDD 誤診為 DM，或反過來。關鍵鑑別點：DM 通常無疼痛，而 IVDD 常有脊椎痛。此外，DM 的 MRI 不會顯示壓迫性病灶。SOD1 基因 A/A 支持但不能確診 DM——約 10-30% 的某些品種正常個體也是 A/A。\n\n【台灣流行病學】退化性脊髓病變在台灣以柯基犬（Welsh Corgi）為最具代表性的好發品種，德國牧羊犬亦為經典好發族群。台灣柯基犬飼養量持續增加，DM 的臨床病例亦隨之增多。SOD1 基因檢測在台灣可透過國外實驗室進行。台灣獸醫復健科近年蓬勃發展，水中跑步機等物理治療對 DM 犬的生活品質維護有顯著幫助。台灣飼主對 DM 的漸進性預後需有充分認知。',
  common_mistakes: [
    '僅憑 SOD1 基因 A/A 即診斷 DM——A/A 是風險因子但非確診依據（部分正常犬也是 A/A）',
    '未進行 MRI 排除壓迫性脊髓疾病即診斷 DM（最大的鑑別是慢性 IVDD）',
    '將伴有疼痛的脊髓疾病診斷為 DM——DM 本身不引起疼痛',
    '告知飼主「無治療可做」而放棄積極復健——物理復健可顯著延長維持步行能力的時間',
    '忽略 DM 的進展特徵——過快進展（數天到數週）應重新評估診斷',
  ],
  disease_data: {
    signalment: '好發品種：German Shepherd Dog（最經典）、Boxer、Pembroke Welsh Corgi、Rhodesian Ridgeback、Chesapeake Bay Retriever、Bernese Mountain Dog。好發年齡 > 8 歲（中位 9-11 歲）。無明顯性別偏好。',
    etiology: '遺傳性：SOD1（Superoxide Dismutase 1）基因 E40K 突變為主要風險因子（homozygous A/A）。為多因子疾病，遺傳易感性 + 可能的環境因子。與人 ALS 的 SOD1 突變高度同源，犬 DM 被視為自然發生的 ALS 動物模型。',
    pathogenesis: 'SOD1 蛋白錯誤折疊 → 蛋白聚集體在運動神經元中累積 → 氧化壓力增加 + 粒線體功能障礙 + 蛋白質降解系統過載 → 上運動神經元軸突逐漸退化（dying-back 機轉）→ 白質脫髓鞘 + 軸突喪失（胸腰段白質最早且最嚴重）→ 晚期波及下運動神經元和腦幹核。',
    clinical_signs: [
      { sign: '後肢共濟失調', category: 'primary', description: '慢性漸進性本體感覺性共濟失調，腳掌翻轉、crossing、不對稱指甲磨損' },
      { sign: '後肢 UMN 輕癱', category: 'primary', description: '漸進性後肢無力，最終無法步行，後肢反射早期正常至亢進' },
      { sign: '無疼痛', category: 'primary', description: 'DM 不引起疼痛——有疼痛需重新評估診斷（重要鑑別 IVDD）' },
      { sign: '肌肉萎縮', category: 'secondary', description: '晚期出現 LMN 型肌肉萎縮，代表下運動神經元也開始退化' },
      { sign: '大小便失禁', category: 'secondary', description: '晚期膀胱和肛門括約肌功能喪失' },
    ],
    staging: {
      system: 'DM Clinical Staging System',
      stages: [
        'Stage 1：後肢 UMN 共濟失調，仍可步行',
        'Stage 2：後肢非步行性輕癱至癱瘓',
        'Stage 3：前肢開始受累，大小便失禁',
        'Stage 4：四肢癱瘓，呼吸肌/吞嚥受累',
      ],
    },
    differential_diagnosis: [
      { condition: 'Hansen Type II IVDD', key_differentiator: '慢性椎間盤膨出可有疼痛，MRI 見椎間盤壓迫脊髓，大型犬也好發' },
      { condition: '腰薦椎狹窄（Lumbosacral stenosis）', key_differentiator: '腰薦椎疼痛（尾根壓力陽性）、LMN 後肢徵象為主、MRI 見 L7-S1 壓迫' },
      { condition: '脊髓腫瘤', key_differentiator: '可有疼痛，MRI 見腫塊伴對比增強，可呈不對稱性' },
      { condition: '纖維軟骨栓塞（FCE）', key_differentiator: '急性發作（分鐘至數小時），不對稱性，非進行性' },
    ],
    diagnostic_workup: '1. 詳細病史（慢性進行性、無疼痛、品種）→ 2. 神經學檢查（後肢 UMN 共濟失調/輕癱、無疼痛）→ 3. SOD1 基因檢測（A/A homozygous 支持診斷）→ 4. 脊椎 MRI（排除壓迫性病灶——DM 的 MRI 通常正常）→ 5. 基礎血檢排除代謝性疾病 → 6. 推定診斷：符合品種 + 年齡 + 臨床特徵 + MRI 正常 + SOD1 A/A。確定診斷：死後組織病理。',
    treatment_protocol: '目前無藥物可逆轉或阻止 DM 進展。物理復健為最重要的介入：水療（游泳、水中跑步機）、被動關節運動、站立訓練、平衡訓練——已被證實可延長維持步行能力的時間。輔助裝置：後肢推車/輪椅維持活動力與生活品質。補充品（效果未經充分驗證）：Aminocaproic acid 500 mg PO TID、維生素 E、B 群、Omega-3。',
    prognosis: '預後不良，為進行性且不可逆。從首次出現症狀至後肢癱瘓：中位約 6-12 個月。從後肢癱瘓至需安樂死：中位約 3-6 個月。積極復健的犬維持步行能力的時間可延長至未復健犬的約 2-3 倍。安樂死的常見決定點為：後肢完全癱瘓 + 大小便失禁 + 飼主無法提供足夠照護。',
    monitoring: '每月神經學檢查評估進展速度。復健進度評估：步行能力、姿勢反應、肌肉質量。生活品質評估：飼主問卷追蹤日常活動能力。進展速度異常（過快或不對稱）時需重新評估診斷。',
    owner_communication: 'DM 是一種慢性進行性疾病，目前無法治癒或阻止。但這不代表「什麼都不能做」——積極的物理復健可以顯著延長犬維持步行能力的時間。後肢癱瘓後，使用輪椅仍可維持良好的生活品質。重要的是與飼主一起設定合理的期望與生活品質指標。當進展至嚴重大小便失禁或前肢也開始受累時，需要討論生活品質和安樂死的時機。',
  },
  diagnostic_data: null,
  procedure_data: null,
  visual_placeholders: [
    { position: '臨床進展段落後', type: 'timeline', description: 'DM 四階段臨床進展時間軸' },
    { position: '診斷段落後', type: 'flowchart', description: 'DM 排除性診斷流程圖' },
  ],
  interactive_placeholders: [],
  drug_api_links: [],
  references: [
    { type: 'journal', citation: 'Awano T et al. Genome-wide association analysis reveals a SOD1 mutation in canine degenerative myelopathy that resembles amyotrophic lateral sclerosis. Proc Natl Acad Sci USA. 2009;106(8):2794-2799.', relevance: 'SOD1 基因突變鑑定原始文獻' },
    { type: 'journal', citation: 'Coates JR, Wininger FA. Canine degenerative myelopathy. Vet Clin North Am Small Anim Pract. 2010;40(5):929-950.', relevance: '犬 DM 綜合回顧' },
    { type: 'textbook', citation: 'Platt SR, Olby NJ. BSAVA Manual of Canine and Feline Neurology, 4th ed. BSAVA, 2013.', relevance: '退化性脊髓疾病章節' },
    { type: 'journal', citation: 'Kathmann I et al. Daily controlled physiotherapy increases survival time in dogs with suspected degenerative myelopathy. J Vet Intern Med. 2006;20(4):927-932.', relevance: '物理復健延長 DM 犬存活時間' },
    { type: 'guideline', citation: 'Zeng R et al. Breed distribution of SOD1 alleles previously associated with canine degenerative myelopathy. J Vet Intern Med. 2014;28(2):515-521.', relevance: 'SOD1 基因突變品種篩檢指引' },
  ],
  is_current: true,
  created_at: now,
};

/** 神經定位診斷 — 診斷型 */
const contentLocalization: NodeContent = {
  id: 'CONTENT-NEURO-L4-004',
  node_id: 'NEURO-L4-004',
  version: 1,
  summary: '神經定位診斷（Neurological Localization）是獸醫神經科的核心技能，透過系統性的神經學檢查結果，將病灶定位至神經系統的特定區域。正確的定位是建立鑑別診斷清單和選擇適當診斷工具的前提。主要定位區域包括：前腦、腦幹、小腦、C1-C5、C6-T2、T3-L3、L4-S3。',
  learning_objectives: [
    '執行系統性的神經定位診斷流程：意識→步態→姿勢反應→脊髓反射→腦神經',
    '根據神經學檢查結果將病灶正確定位至七大區域之一',
    '區分上運動神經元（UMN）與下運動神經元（LMN）病灶的臨床表現',
    '識別多灶性病灶（multifocal lesion）的特徵',
    '根據定位結果建立適當的鑑別診斷清單',
  ],
  key_points: [
    '神經定位五步驟：意識（Mentation）→ 步態（Gait）→ 姿勢反應（Postural reactions）→ 脊髓反射（Spinal reflexes）→ 腦神經（Cranial nerves）',
    'UMN 徵象：反射正常至亢進、肌張力增加、延遲性萎縮',
    'LMN 徵象：反射減弱至消失、肌張力降低、快速性萎縮、去神經電位',
    '七大定位區域：前腦、腦幹、小腦、C1-C5、C6-T2、T3-L3、L4-S3',
    'Schiff-Sherrington 姿勢：T3-L3 急性嚴重脊髓病變的特徵（前肢伸肌張力增強，但前肢自主運動正常）',
    '深痛覺（Deep pain perception）是 IVDD 預後最重要的指標',
  ],
  body: `# 神經定位診斷

## 一、檢查原理與適應症 (Principles & Indications)



### 概述
神經定位診斷是獸醫神經科臨床推理的基石。透過系統性的神經學檢查，將觀察到的神經功能缺損對應至神經系統的特定解剖區域，從而建立合理的鑑別診斷清單並選擇適當的進階診斷工具。

### 系統性檢查流程
### Step 1：意識評估（Mentation）
- 正常（Alert）、嗜睡（Obtunded）、木僵（Stupor）、昏迷（Coma）
- 意識改變提示**前腦**或**腦幹**病變（上行性網狀活化系統 ARAS）

### Step 2：步態評估（Gait）
- 共濟失調（Ataxia）三類型：
  - 本體感覺性（Proprioceptive）：腳掌翻轉（knuckling）→ 脊髓或前腦
  - 前庭性（Vestibular）：頭部傾斜、旋轉 → 前庭系統
  - 小腦性（Cerebellar）：辨距不良（dysmetria）、意向性震顫 → 小腦
- 不對稱步態：單側或不對稱提示側化病灶

### Step 3：姿勢反應（Postural Reactions）
- 本體感覺定位（Proprioceptive positioning）：最敏感的姿勢反應測試
- Hopping、Wheelbarrowing、Placing
- 異常提示感覺或運動通路中的任何位置病變

### Step 4：脊髓反射（Spinal Reflexes）
- **膝蓋反射（Patellar reflex）**：L4-L6（股四頭肌/股神經）
- **屈曲反射（Withdrawal reflex）**：
  - 前肢：C6-T2
  - 後肢：L4-S1
- **會陰反射（Perineal reflex）**：S1-S3（陰部神經）
- **Panniculus reflex**：截斷面定位脊髓病灶上緣

### Step 5：腦神經評估（Cranial Nerves）
- CN II：威脅反應、PLR（瞳孔對光反射）
- CN III, IV, VI：眼球位置與運動
- CN V：面部感覺、咀嚼肌張力
- CN VII：面部對稱性、眼瞼閉合
- CN VIII：聽覺、前庭功能
- CN IX, X：吞嚥、咽反射
- CN XII：舌頭運動

### 七大定位區域
| 區域 | 主要臨床特徵 |
|------|-------------|
| 前腦（Forebrain） | 意識改變、行為異常、對側威脅反應缺失、對側姿勢反應缺損、癲癇發作 |
| 腦幹（Brainstem） | 意識改變（可至昏迷）、同側腦神經缺損（CN V-XII）、對側或同側姿勢反應缺損 |
| 小腦（Cerebellum） | 意識正常、小腦性共濟失調（dysmetria, hypermetria）、意向性震顫、姿勢反應正常或辨距不良 |
| C1-C5 | 四肢 UMN 型輕癱至癱瘓、頸痛、可能有呼吸抑制 |
| C6-T2 | 前肢 LMN（屈曲反射減弱、肌萎縮）、後肢 UMN（反射亢進）、Horner syndrome 可能 |
| T3-L3 | 後肢 UMN 型輕癱至癱瘓、前肢正常、Schiff-Sherrington 姿勢（急性嚴重）、背痛 |
| L4-S3 | 後肢 LMN（屈曲反射減弱、肌萎縮、膝蓋反射減弱）、尾巴張力下降、尿失禁 |

### UMN vs LMN 比較
| 特徵 | UMN | LMN |
|------|-----|-----|
| 反射 | 正常至亢進 | 減弱至消失 |
| 肌張力 | 正常至增加（痙攣性） | 降低（弛緩性） |
| 肌萎縮 | 延遲出現（廢用性） | 快速出現（去神經性） |
| Babinski sign | 可能陽性 | 陰性 |

[互動:神經定位練習——輸入神經學檢查發現，系統自動定位]

## 二、判讀要點 (Interpretation)

判讀結果時需結合臨床表現綜合評估，注意假陽性與假陰性的可能性，必要時進行重複檢測或追加其他檢查。

## 三、常見陷阱 (Pitfalls)

檢查結果的判讀需注意取樣品質、檢體保存條件及個體差異等因素可能導致的誤判。

## 四、人醫借鑒 (Translational Insights)

| 人醫工具/概念 | 獸醫應用潛力 | 現況 |
|-------------|-------------|------|
| 標準化神經功能量表（NIHSS） | 犬神經學檢查的定量評分標準化（如犬版 MGCS） | 犬已有多種量表但跨機構一致性不足 |
| 遠距神經學評估（Teleneurology） | 基層獸醫經視訊諮詢神經專科判讀步態影片 | 人醫已成熟，獸醫在台灣因轉診距離限制開始萌芽 |
| AI 輔助步態分析（Gait analysis） | 犬步態異常的客觀定量偵測與縱向追蹤 | 感測器與視頻 AI 步態分析研究增加中 |

## 五、臨床爭議與知識空缺 (Controversies & Knowledge Gaps)

| 爭議議題 | 現況 | Evidence Level |
|---------|------|---------------|
| 犬神經學檢查的觀察者間一致性（inter-observer agreement） | 不同經驗程度獸醫的定位準確率差異大（50% vs 80%），需標準化訓練 | Level III |
| 深痛覺（DPP）測試的最佳標準化方法 | 止血鉗力道、刺激位置缺乏統一標準，導致 IVDD Grade V 判定不一致 | Level IV |
| 多灶性 vs 瀰漫性病灶定位的臨床價值 | 定位至「多灶性」的鑑別診斷範圍仍廣（MUO、轉移瘤、代謝性），實用價值存疑 | Level IV |
| 腦幹 vs 前庭周邊病灶的臨床區分準確率 | 中樞 vs 周邊前庭疾病的臨床鑑別在部分案例中困難——paradoxical vestibular 尤其容易誤判 | Level III |`,
  clinical_pearl: '記住「兩個 UMN 規則」：若前後肢均為 UMN 徵象，病灶在 C1-C5。若前肢 LMN + 後肢 UMN，病灶在 C6-T2（cervical intumescence）。T3-L3 病變只影響後肢（UMN），前肢完全正常。在 IVDD 病例中，panniculus reflex 的截斷面可以幫助定位壓迫脊髓節段的上緣。',
  common_mistakes: [
    '混淆 UMN 與 LMN 徵象（最常見錯誤：將反射亢進誤判為 LMN 病灶）',
    '忘記評估深痛覺（deep pain perception），這是 IVDD 預後判斷最重要的指標',
    '未區分前庭性與小腦性共濟失調（前庭 = 頭傾斜/眼振，小腦 = dysmetria/意向性震顫）',
    '將 Schiff-Sherrington 姿勢誤判為前肢也有 UMN 病變（前肢的 UMN 功能仍正常）',
    '忽略多灶性病變的可能性（如 MUO、轉移性腫瘤）',
  ],
  disease_data: null,
  diagnostic_data: {
    indication: [
      '任何疑似神經系統疾病的患畜',
      '急性或慢性步態異常',
      '癲癇發作',
      '行為異常或意識改變',
      '脊髓損傷嚴重度評估',
    ],
    contraindication: [
      '嚴重不穩定的多發性創傷（先穩定生命徵象）',
      '極度疼痛的動物需適當鎮痛後再進行完整檢查',
    ],
    technique: '系統性五步驟流程：1. 意識評估（觀察環境互動、對刺激反應）→ 2. 步態評估（行走、轉彎、上下斜坡，注意對稱性與共濟失調類型）→ 3. 姿勢反應（本體感覺定位為最敏感，所有四肢逐一測試）→ 4. 脊髓反射（膝蓋反射、屈曲反射、會陰反射、panniculus reflex）→ 5. 腦神經評估（CN II-XII 系統性檢查）。全程記錄在標準化神經學檢查表上。',
    normal_findings: [
      { finding: '意識正常（Alert）', description: '動物對環境保持警覺，對刺激有適當反應', significance: '排除前腦與腦幹的嚴重病變' },
      { finding: '步態正常', description: '對稱、協調的四肢運動，無共濟失調', significance: '排除影響運動通路的明顯病變' },
      { finding: '所有脊髓反射正常', description: '膝蓋反射 +2（正常）、屈曲反射正常、會陰反射正常', significance: '排除顯著的 UMN 或 LMN 病變' },
      { finding: '所有腦神經正常', description: 'PLR 正常、威脅反應正常、面部對稱、吞嚥正常', significance: '排除顱內或顱神經病變' },
    ],
    abnormal_findings: [
      { finding: '後肢 UMN 輕癱 + 前肢正常', description: '後肢反射正常至亢進、本體感覺缺損、前肢檢查正常', significance: '病灶定位 T3-L3（最常見原因：IVDD 胸腰段）' },
      { finding: '四肢 UMN 徵象', description: '四肢反射亢進、本體感覺缺損', significance: '病灶定位 C1-C5（頸椎 IVDD、寰樞關節不穩定、頸椎脊椎炎）' },
      { finding: '前肢 LMN + 後肢 UMN', description: '前肢反射減弱/肌萎縮 + 後肢反射亢進', significance: '病灶定位 C6-T2（頸膨大處病變）' },
      { finding: '頭部傾斜 + 眼球震顫', description: '持續性頭部傾斜，伴自發性或位置性眼振', significance: '前庭系統病變；需區分中樞性（腦幹）vs 周邊性（CN VIII）' },
    ],
    interpretation_guide: '1. 有無意識改變？有 → 前腦或腦幹。2. 有無腦神經異常？有 → 腦幹或周邊腦神經。3. 有無共濟失調？什麼類型？→ 本體感覺性/前庭性/小腦性。4. 受影響的肢體：四肢/前肢/後肢/單肢。5. UMN 或 LMN 徵象？6. 整合所有結果定位至七大區域。7. 考慮是否為多灶性。',
    pitfalls: [
      '動物過度緊張或疼痛可能影響反射評估的準確性',
      '肥胖動物的膝蓋反射可能難以引出（不代表 LMN 病變）',
      '老年動物的輕度本體感覺下降可能是正常老化而非病變',
      '鎮靜或麻醉藥物可影響意識和反射評估',
    ],
    sensitivity_specificity: '神經定位診斷對病灶區域的定位準確率在有經驗的神經科獸醫手中約 70-80%，與 MRI 結果的一致性高。但對具體病因的特異度較低，需搭配進階影像（MRI）和實驗室檢查。',
    cost_benefit: '無需特殊設備，僅需基礎工具（反射錘、止血鉗、手電筒）。是所有神經科進階檢查的前提和基礎，正確定位可避免不必要的影像檢查費用。',
  },
  procedure_data: null,
  visual_placeholders: [
    { position: '七大定位區域表格後', type: 'annotated_image', description: '脊髓節段與反射弧示意圖' },
    { position: 'UMN vs LMN 比較後', type: 'comparison_table', description: 'UMN/LMN 臨床特徵互動比較' },
  ],
  interactive_placeholders: [
    { position: '文末', type: 'localization_exercise', description: '神經定位互動練習——輸入檢查發現自動定位' },
  ],
  drug_api_links: [],
  references: [
    { type: 'textbook', citation: 'Platt SR, Olby NJ. BSAVA Manual of Canine and Feline Neurology, 4th ed. BSAVA, 2013.', relevance: '神經定位診斷標準教材' },
    { type: 'textbook', citation: 'Dewey CW, da Costa RC. Practical Guide to Canine and Feline Neurology, 3rd ed. Wiley-Blackwell, 2016.', relevance: '神經學檢查實務指南' },
    { type: 'journal', citation: 'Garosi L. Lesion Localization and Differential Diagnosis. In: Platt SR, Olby NJ eds. BSAVA Manual of Canine and Feline Neurology, 4th ed. 2013:1-17.', relevance: '病灶定位章節' },
    { type: 'guideline', citation: 'De Risio L et al. International veterinary epilepsy task force consensus proposal: diagnostic approach to epilepsy in dogs. BMC Vet Res. 2015;11:148.', relevance: 'IVETF 分層診斷流程（神經定位診斷基礎）' },
  ],
  is_current: true,
  created_at: now,
};

/** 獸醫神經科總覽 — 概念型 */
const contentNeuroOverview: NodeContent = {
  id: 'CONTENT-NEURO-L0-001',
  node_id: 'NEURO-L0-001',
  version: 1,
  summary: '獸醫神經科（Veterinary Neurology）涵蓋犬貓中樞與周邊神經系統疾病的診斷與治療。神經科臨床推理的核心在於「神經定位診斷」——透過系統性神經學檢查將病灶定位至特定解剖區域，再結合進階影像（MRI）與實驗室檢查（CSF 分析）建立確診。常見疾病包括癲癇、椎間盤疾病、腦膜腦炎、前庭症候群與神經肌肉疾病。',
  learning_objectives: [
    '描述獸醫神經科的範疇與常見疾病類別',
    '說明神經定位診斷在臨床推理中的核心地位',
    '列舉神經科常用的診斷工具與其適應症',
    '概述犬貓最常見的神經系統疾病及其臨床重要性',
  ],
  key_points: [
    '神經科臨床推理核心：神經定位診斷（neuroanatomic localization）',
    '七大定位區域：前腦、腦幹、小腦、C1-C5、C6-T2、T3-L3、L4-S3',
    '主要診斷工具：神經學檢查、MRI、CT、CSF 分析、電生理學（EMG/NCV）',
    '常見疾病類別：癲癇、脊髓疾病（IVDD）、發炎性 CNS 疾病（MUO）、前庭疾病、神經肌肉疾病',
    '台灣常見神經科急診：癲癇重積狀態、急性 IVDD、急性前庭症候群',
    '跨科合作：神經外科（IVDD 手術）、腫瘤科（腦腫瘤）、急診科（癲癇重積）',
  ],
  body: `# 獸醫神經科總覽

## 一、核心概念與機轉 (Core Concept & Mechanism)



### 學科範疇
獸醫神經科專注於犬貓中樞神經系統（CNS：腦與脊髓）及周邊神經系統（PNS：腦神經、脊神經、神經肌肉接合處、肌肉）疾病的診斷與治療。

### 臨床推理核心：神經定位
神經科最獨特的臨床技能是「神經定位診斷」——透過系統性神經學檢查（意識→步態→姿勢反應→脊髓反射→腦神經），將觀察到的神經功能缺損對應至特定解剖區域。正確的定位是建立鑑別診斷清單的基礎。

### 主要疾病類別
| 類別 | 代表疾病 | 好發物種/品種 |
|------|---------|-------------|
| 癲癇 | 特發性癲癇 | 犬（Beagle、GSD、Border Collie） |
| 脊髓疾病 | IVDD | 犬（臘腸犬、French Bulldog） |
| 發炎性 CNS | MUO（GME/NME/NLE） | 犬（小型犬） |
| 前庭疾病 | 特發性前庭症候群 | 犬（老年犬） |
| 神經肌肉 | MG、多發性神經根炎 | 犬（GSD、Golden） |
| 退化性 | DM | 犬（GSD、Welsh Corgi） |

### 診斷工具概覽
- **神經學檢查**：最基礎且最重要，無需特殊設備
- **MRI**：CNS 疾病的金標準影像工具
- **CSF 分析**：發炎性 vs 感染性 CNS 疾病鑑別
- **CT**：骨骼結構評估、MRI 不可得時替代
- **EMG/NCV**：周邊神經與神經肌肉疾病評估

### 台灣臨床現況
台灣小動物神經科近年快速發展，MRI 設備在主要都會區已相對普及。常見急診包括癲癇重積狀態、急性 IVDD（臘腸犬在台灣飼養量大）與急性前庭症候群（老年犬）。

## 二、臨床意義 (Clinical Significance)

- **神經定位診斷的核心地位**：獸醫神經科臨床推理的基石在於從臨床症狀定位病灶至七大解剖區域（前腦/腦幹/小腦/C1-C5/C6-T2/T3-L3/L4-S3），在 MRI 不可得的環境下仍能提供 70-80% 的定位準確率
- **急診決策的時效性**：癲癇重積狀態與急性深痛覺喪失的 IVDD 均為「與時間賽跑」的神經科急診，延遲處置直接影響預後——SE 超過 30 分鐘可造成不可逆腦損傷，Grade V IVDD 超過 48 小時手術預後急劇下降
- **品種好發模式指導篩檢**：台灣常見品種的神經疾病好發模式（臘腸犬 IVDD、法鬥 IVDD/hemivertebra、CKCS Chiari-like malformation、小型犬 MUO）可作為預防性諮詢與早期篩檢依據
- **跨專科整合需求**：神經科疾病常需與內科（代謝性癲癇、肝腦症）、外科（脊椎手術）、影像科（MRI 判讀）及急診科（SE 處置）密切協作，是小動物臨床中最仰賴多專科合作的領域之一
- **飼主溝通與預後評估**：神經科疾病的預後評估（如 IVDD 分級系統、MUO 存活中位數）直接影響飼主的治療決定，準確且同理的溝通能力與臨床知識同等重要

## 三、人醫借鑒 (Translational Insights)

| 人醫工具/概念 | 獸醫應用潛力 | 現況 |
|-------------|-------------|------|
| 功能性神經影像（fMRI） | 犬腦功能定位與認知研究 | 研究工具，非臨床常規 |
| 神經調控技術（neuromodulation） | 犬難治性癲癇的迷走神經刺激（VNS） | 人醫成熟，獸醫少數病例報告 |
| AI 腦部 MRI 自動分析 | 犬腦腫瘤/腦炎的影像 AI 輔助診斷 | 人醫商業化，獸醫研究中 |

## 四、臨床爭議與知識空缺 (Controversies & Knowledge Gaps)

| 爭議議題 | 現況 | Evidence Level |
|---------|------|---------------|
| 犬癲癇分類系統（IVETF 2015）的臨床實用性 | 分類過於複雜，基層獸醫使用率低 | Level IV |
| 犬認知功能障礙（CCD）的診斷標準 | 缺乏金標準，依賴行為問卷——主觀性高 | Level IV |`,
  clinical_pearl: '神經科初學者最重要的第一步是學好「神經定位診斷」。在沒有 MRI 的情況下，一個準確的神經學檢查仍然可以提供 70-80% 的定位準確率。記住：先定位，再列鑑別，最後選工具。',
  common_mistakes: [
    '跳過神經學檢查直接安排 MRI——MRI 只是輔助工具，神經學檢查才是定位的基礎',
    '混淆 UMN 與 LMN 徵象——這是最基本也最常犯的錯誤',
    '將前庭性共濟失調誤認為小腦性共濟失調',
    '忽略多灶性病變的可能性（如 MUO 常為多灶性）',
  ],
  disease_data: null,
  diagnostic_data: null,
  procedure_data: null,
  visual_placeholders: [
    { position: '定位區域段落後', type: 'mind_map', description: '獸醫神經科疾病分類心智圖' },
  ],
  interactive_placeholders: [],
  drug_api_links: [],
  references: [
    { type: 'textbook', citation: 'Platt SR, Olby NJ. BSAVA Manual of Canine and Feline Neurology, 4th ed. BSAVA, 2013.', relevance: '獸醫神經科基礎教材' },
    { type: 'textbook', citation: 'Dewey CW, da Costa RC. Practical Guide to Canine and Feline Neurology, 3rd ed. Wiley-Blackwell, 2016.', relevance: '神經科實務指南' },
    { type: 'journal', citation: 'Muñana KR. Update on the approach to seizures in dogs and cats. Vet Clin North Am Small Anim Pract. 2013;43(5):xi-xii.', relevance: '犬貓癲癇管理更新' },
    { type: 'guideline', citation: 'Berendt M et al. International veterinary epilepsy task force consensus report on epilepsy definition, classification and terminology in companion animals. BMC Vet Res. 2015;11:182.', relevance: 'IVETF 癲癇定義與分類共識——神經科核心指引' },
  ],
  is_current: true,
  created_at: now,
};

/** 神經解剖學 — 概念型 */
const contentNeuroanatomy: NodeContent = {
  id: 'CONTENT-NEURO-L1-001',
  node_id: 'NEURO-L1-001',
  version: 1,
  summary: '獸醫神經解剖學是神經定位診斷的基礎。犬貓神經系統分為中樞神經系統（腦與脊髓）與周邊神經系統（腦神經、脊神經、自主神經）。臨床上最重要的解剖知識包括：大腦皮質功能分區、腦幹核團與腦神經起源、小腦功能解剖、脊髓節段與神經根分布、上/下運動神經元通路、以及周邊神經的走行與支配區域。',
  learning_objectives: [
    '描述犬貓中樞與周邊神經系統的大體解剖結構',
    '說明大腦皮質的功能分區與臨床意義',
    '列出 12 對腦神經的起源核團與功能',
    '描繪脊髓節段與對應的脊神經分布',
    '區分上運動神經元（UMN）與下運動神經元（LMN）通路',
  ],
  key_points: [
    'CNS = 腦（前腦、腦幹、小腦）+ 脊髓；PNS = 腦神經(12 對) + 脊神經 + 自主神經',
    '前腦 = 大腦（皮質+白質+基底核）+ 間腦（視丘+下視丘）',
    '腦幹 = 中腦 + 橋腦 + 延髓，包含 ARAS（上行性網狀活化系統）控制意識',
    '脊髓四大區域：頸膨大（C6-T2）、胸腰段（T3-L3）、腰膨大（L4-S3）、薦尾段',
    'UMN 通路：皮質脊髓徑（corticospinal tract）與紅核脊髓徑（rubrospinal tract）',
    'LMN = 脊髓腹角運動神經元 → 腹根 → 脊神經 → 周邊神經 → 神經肌肉接合處 → 骨骼肌',
    '自主神經系統：交感神經（T1-L4 側角）與副交感神經（腦幹核 + S1-S3）',
  ],
  body: `# 神經解剖學

## 一、核心概念與機轉 (Core Concept & Mechanism)



### 中樞神經系統
### 腦部

**前腦（Prosencephalon）**
- **大腦（Cerebrum）**：皮質（灰質）負責意識、感覺整合、運動起始、行為；白質為纖維連結
- **間腦（Diencephalon）**：視丘（感覺轉接站）、下視丘（內分泌、自主調控）

**腦幹（Brainstem）**
- **中腦（Mesencephalon）**：CN III, IV 核、紅核、上行性網狀活化系統（ARAS）
- **橋腦（Pons）**：CN V 核、呼吸調控中樞
- **延髓（Medulla oblongata）**：CN VI-XII 核、心血管/呼吸中樞、前庭核

**小腦（Cerebellum）**
- 協調運動但不起始運動
- 絨球小結葉（flocculonodular lobe）：前庭小腦
- 蟲部（vermis）：軀幹平衡
- 小腦半球：肢體精細動作

### 脊髓

| 區段 | 脊髓節段 | 臨床對應 |
|------|---------|---------|
| 頸段 | C1-C5 | 四肢 UMN |
| 頸膨大 | C6-T2 | 前肢 LMN、後肢 UMN |
| 胸腰段 | T3-L3 | 前肢正常、後肢 UMN |
| 腰膨大 | L4-S3 | 後肢 LMN |

### 周邊神經系統
### 腦神經（12 對）
- CN I（嗅覺）、CN II（視覺）
- CN III/IV/VI（眼球運動）、CN V（面部感覺+咀嚼）
- CN VII（面部表情+味覺）、CN VIII（聽覺+前庭）
- CN IX/X（吞嚥+發聲）、CN XI（斜方肌）、CN XII（舌頭運動）

### UMN vs LMN 通路
- **UMN**：起自大腦皮質運動區 → 內囊 → 腦幹 → 脊髓側索/腹索 → 突觸至 LMN
- **LMN**：脊髓腹角 α 運動神經元 → 腹根 → 脊神經 → 周邊神經 → NMJ → 骨骼肌

## 二、臨床意義 (Clinical Significance)

- **神經定位的解剖基礎**：掌握中樞與周邊神經系統的解剖結構，才能從臨床症狀（如 UMN vs LMN 徵候）正確定位病灶位置——C6-T2 病變呈現前肢 LMN + 後肢 UMN 是最經典的定位模式
- **脊髓手術入路選擇**：脊髓節段的精確解剖知識直接影響手術入路——胸腰椎 IVDD 選擇 hemilaminectomy，頸椎 IVDD 選擇 ventral slot，且術中辨識解剖標記（accessory process、椎弓根）攸關手術安全
- **腦神經檢查與腦幹定位**：12 對腦神經的起源核團分布於中腦、橋腦與延腦，透過腦神經功能異常的組合可精確定位腦幹病灶層級（如 CN V-VII 異常 → 橋腦）
- **品種相關解剖變異的臨床意義**：小型犬（臘腸犬、法鬥）與大型犬（德國牧羊犬）的脊髓解剖差異影響 IVDD 的好發位置與手術策略；CKCS 的後顱窩發育不全與 Chiari-like malformation 直接相關

## 三、人醫借鑒 (Translational Insights)

| 人醫工具/概念 | 獸醫應用潛力 | 現況 |
|-------------|-------------|------|
| 犬腦圖譜（Brain Atlas）標準化 | 犬腦部 MRI 自動分析與人工智慧輔助診斷的基礎 | 數個犬腦 MRI 圖譜已發表，品種差異仍需解決 |
| 擴散張量成像（DTI）纖維追蹤 | 犬白質通路完整性評估（DM、IVDD 預後預測） | 人醫神經外科標準，獸醫研究性使用 |
| 3D 列印解剖教學模型 | 犬神經解剖教學與術前手術規劃 | 獸醫教育已開始採用 3D 列印脊椎模型 |

## 四、臨床爭議與知識空缺 (Controversies & Knowledge Gaps)

| 爭議議題 | 現況 | Evidence Level |
|---------|------|---------------|
| 犬脊髓節段與椎體的精確對應關係 | 品種間差異大，現有對應表多基於大型犬數據，小型犬對應可能不同 | Level III |
| 犬腦功能分區的品種差異 | 短頭種（brachycephalic）腦部比例與長頭種不同，功能區域可能有位移 | Level IV |`,
  clinical_pearl: '臨床上最重要的解剖概念是「頸膨大」（C6-T2 intumescence）與「腰膨大」（L4-S3 intumescence）。這兩個區域的 LMN 細胞體密集，病灶在此會呈現 LMN 徵象（反射減弱、快速萎縮），而非 UMN 徵象。記住：C6-T2 病變 = 前肢 LMN + 後肢 UMN，這是定位的經典考點。',
  common_mistakes: [
    '混淆脊髓節段與椎體編號——犬的脊髓比脊柱短，腰膨大（L4-S3）實際位於 L3-L5 椎體水平',
    '忘記 ARAS 在維持意識中的角色——腦幹病變可導致意識喪失，前腦病變通常不會',
    '將小腦視為運動起始中樞——小腦調控運動精確度但不起始運動',
  ],
  disease_data: null,
  diagnostic_data: null,
  procedure_data: null,
  visual_placeholders: [
    { position: '脊髓段落後', type: 'annotated_image', description: '犬脊髓橫切面與通路標示圖' },
    { position: '腦神經段落後', type: 'annotated_image', description: '犬腦幹腹面觀與腦神經起源圖' },
  ],
  interactive_placeholders: [],
  drug_api_links: [],
  references: [
    { type: 'textbook', citation: 'Evans HE, de Lahunta A. Miller\'s Anatomy of the Dog, 4th ed. Elsevier, 2013.', relevance: '犬解剖學權威教材' },
    { type: 'textbook', citation: 'de Lahunta A, Glass E, Kent M. Veterinary Neuroanatomy and Clinical Neurology, 4th ed. Saunders, 2015.', relevance: '獸醫神經解剖臨床教材' },
    { type: 'textbook', citation: 'Platt SR, Olby NJ. BSAVA Manual of Canine and Feline Neurology, 4th ed. BSAVA, 2013. Chapter 1.', relevance: '神經解剖基礎章節' },
    { type: 'guideline', citation: 'De Risio L et al. International veterinary epilepsy task force consensus proposal: diagnostic approach to epilepsy in dogs. BMC Vet Res. 2015;11:148.', relevance: 'IVETF 共識——以解剖為基礎的分層診斷' },
    { type: 'journal', citation: 'Jeffery ND et al. Factors associated with recovery from paraplegia in dogs with loss of pain perception in the pelvic limbs following intervertebral disk herniation. J Am Vet Med Assoc. 2016;248(4):386-394.', relevance: '脊髓解剖與功能預後相關研究' },
  ],
  is_current: true,
  created_at: now,
};

/** 神經生理學 — 概念型 */
const contentNeurophysiology: NodeContent = {
  id: 'CONTENT-NEURO-L1-002',
  node_id: 'NEURO-L1-002',
  version: 1,
  summary: '神經生理學研究神經系統的功能機轉，包含神經元的電生理特性（靜止膜電位、動作電位）、突觸傳遞（化學突觸與電突觸）、主要神經傳遞物質（Glutamate、GABA、Acetylcholine、Dopamine、Serotonin）、以及神經肌肉接合處（NMJ）的訊號傳導。理解這些基礎機轉對於掌握癲癇（興奮/抑制失衡）、神經肌肉疾病（NMJ 傳導異常）與藥物治療原理（AED 機轉）至關重要。',
  learning_objectives: [
    '描述神經元靜止膜電位的離子基礎與動作電位的產生機轉',
    '說明化學突觸傳遞的步驟與主要神經傳遞物質的功能',
    '解釋興奮性與抑制性突觸後電位的生理意義',
    '描述神經肌肉接合處的正常訊號傳導過程',
    '將神經生理概念連結至臨床疾病（癲癇、MG、AED 機轉）',
  ],
  key_points: [
    '靜止膜電位約 -70mV，由 Na⁺/K⁺-ATPase 維持',
    '動作電位：閾值去極化 → Na⁺ 通道開放（去極化）→ K⁺ 通道開放（再極化）→ 過極化',
    '主要興奮性神經傳遞物質：Glutamate（CNS 最主要）、Acetylcholine（NMJ）',
    '主要抑制性神經傳遞物質：GABA（CNS 最主要）、Glycine（脊髓）',
    'NMJ 傳導：運動神經元動作電位 → ACh 釋放 → nAChR 活化 → 終板電位 → 肌肉收縮',
    '癲癇的離子通道基礎：Na⁺/Ca²⁺ 通道過度活化或 GABA 受體功能不足',
    'AED 藥理機轉與離子通道/受體的對應：PB→GABA-A、ZNS→Na⁺/Ca²⁺、LEV→SV2A',
  ],
  body: `# 神經生理學

## 一、核心概念與機轉 (Core Concept & Mechanism)



### 神經元電生理
### 靜止膜電位
- 細胞內 K⁺ 高、Na⁺ 低；細胞外相反
- Na⁺/K⁺-ATPase（3Na⁺ out, 2K⁺ in）維持離子梯度
- 靜止膜電位 ≈ -70mV（接近 K⁺ 平衡電位）

### 動作電位
1. 刺激使膜去極化達閾值（約 -55mV）
2. 電壓門控 Na⁺ 通道開放 → 快速去極化（+30mV）
3. Na⁺ 通道失活 + K⁺ 通道開放 → 再極化
4. 過極化（undershoot）→ 回復靜止電位
5. 絕對不反應期 → 相對不反應期

### 髓鞘與跳躍傳導
- 有髓纖維：動作電位在 Ranvier 結間跳躍傳導（saltatory conduction）
- 傳導速度與纖維直徑和髓鞘厚度成正比
- 脫髓鞘疾病 → 傳導減慢或傳導阻斷

### 突觸傳遞
### 化學突觸步驟
1. 動作電位抵達突觸前末梢
2. 電壓門控 Ca²⁺ 通道開放 → Ca²⁺ 內流
3. 突觸小泡與突觸前膜融合（SNARE 蛋白複合體）
4. 神經傳遞物質釋放至突觸裂隙
5. 與突觸後受體結合 → EPSP 或 IPSP
6. 傳遞物質清除（再攝取/酵素降解/擴散）

### 主要神經傳遞物質

| 傳遞物質 | 類型 | 主要功能 | 臨床關聯 |
|---------|------|---------|---------|
| Glutamate | 興奮性 | CNS 主要興奮性傳遞 | 興奮毒性（excitotoxicity） |
| GABA | 抑制性 | CNS 主要抑制性傳遞 | 癲癇、PB/Diazepam 作用靶點 |
| Acetylcholine | 興奮性 | NMJ、自主神經 | MG、有機磷中毒 |
| Dopamine | 調節性 | 運動調控、行為 | 犬認知障礙症候群 |
| Serotonin | 調節性 | 情緒、疼痛調控 | 行為藥理學 |

### 神經肌肉接合處 (NMJ)
正常 NMJ 傳導：
1. 運動神經末梢動作電位 → Ca²⁺ 內流
2. ACh 突觸小泡釋放（量子釋放）
3. ACh 與終板膜 nAChR 結合 → 終板電位（EPP）
4. EPP 達閾值 → 肌膜動作電位 → 肌肉收縮
5. AChE 水解 ACh → 終止訊號

**安全因子（Safety factor）**：正常 EPP 遠超閾值，即使部分 AChR 被阻斷仍可正常傳導。MG 中 AChR 減少使安全因子下降，反覆刺激導致 EPP 逐漸低於閾值 → 漸減反應（decremental response）。

## 二、臨床意義 (Clinical Significance)

- **AED 藥理的生理基礎**：理解 GABA 與 Glutamate 的興奮-抑制平衡是掌握所有抗癲癇藥物作用機轉的前提——Phenobarbital 增強 GABA-A 受體功能、Levetiracetam 調控突觸囊泡蛋白 SV2A 減少 Glutamate 釋放
- **MG 診斷的電生理依據**：NMJ 安全因子下降導致的漸減反應（decremental response）是重複神經刺激（RNS）診斷 MG 的電生理基礎，犬 MG 在 RNS 3Hz 刺激下 CMAP 振幅下降 > 10% 為陽性判讀標準
- **離子通道病變與癲癇分型**：Na⁺/K⁺/Ca²⁺ 通道的基因突變可導致犬遺傳性癲癇（如 KCNJ10 突變導致 Rhodesian Ridgeback 癲癇），了解離子通道功能有助於未來精準藥物選擇
- **中毒急診的生理機轉**：有機磷中毒抑制 AChE 導致 ACh 蓄積、Ivermectin 增強 GABA/GluCl 通道——掌握神經生理可快速辨識中毒機轉並選擇正確拮抗劑（Atropine + 2-PAM / 支持療法）

## 三、人醫借鑒 (Translational Insights)

| 人醫工具/概念 | 獸醫應用潛力 | 現況 |
|-------------|-------------|------|
| 腦電圖（EEG）連續監測 | 犬癲癇灶定位與亞臨床發作偵測 | 人癲癇外科標準，犬受限於電極固定與長時間監測 |
| 光遺傳學（Optogenetics）神經迴路研究 | 犬特定神經通路的精確功能解析 | 純研究工具，離臨床應用遠但可釐清犬癲癇迴路 |
| 離子通道病（Channelopathy）基因 panel | 犬遺傳性癲癇的精準分型與藥物選擇 | 人醫已有商業化 panel，犬已知離子通道突變有限 |

## 四、臨床爭議與知識空缺 (Controversies & Knowledge Gaps)

| 爭議議題 | 現況 | Evidence Level |
|---------|------|---------------|
| 犬 EEG 在臨床癲癇診斷中的實用性 | 技術上可行但缺乏標準化 protocol 與正常參考值 | Level IV |
| 犬離子通道突變與癲癇表型的關聯 | 已知 KCNJ10、LGI2 等突變，但多數品種癲癇的遺傳基礎不明 | Level III |`,
  clinical_pearl: '理解「安全因子」概念是掌握 MG 病理生理的關鍵。正常 NMJ 的 EPP 約為閾值的 3-4 倍，這個「安全餘量」使得即使有少量 AChR 失功能也不會影響肌肉收縮。MG 中大量 AChR 被抗體破壞後，安全因子降低，初次刺激尚可引發收縮，但反覆刺激（如運動）時 ACh 釋放量逐漸下降，最終 EPP 低於閾值 → 運動誘發性無力。',
  common_mistakes: [
    '混淆 EPSP（興奮性突觸後電位）與動作電位——EPSP 是分級電位可疊加，動作電位是全有全無',
    '忘記 GABA 是 CNS 最主要的抑制性傳遞物質——理解這一點才能掌握 PB 和 Benzodiazepine 的藥理',
    '將 NMJ 的 nicotinic AChR 與自主神經節的受體混淆——MG 僅影響 NMJ 的 nicotinic 受體',
  ],
  disease_data: null,
  diagnostic_data: null,
  procedure_data: null,
  visual_placeholders: [
    { position: '動作電位段落後', type: 'animated_diagram', description: '動作電位離子通道動態變化動畫' },
    { position: 'NMJ 段落後', type: 'annotated_image', description: 'NMJ 突觸傳遞步驟標示圖' },
  ],
  interactive_placeholders: [],
  drug_api_links: ['Phenobarbital', 'Diazepam'],
  references: [
    { type: 'textbook', citation: 'de Lahunta A, Glass E, Kent M. Veterinary Neuroanatomy and Clinical Neurology, 4th ed. Saunders, 2015.', relevance: '獸醫神經生理基礎' },
    { type: 'textbook', citation: 'Cunningham JG, Klein BG. Textbook of Veterinary Physiology, 6th ed. Elsevier, 2020.', relevance: '獸醫生理學神經系統章節' },
    { type: 'textbook', citation: 'Platt SR, Olby NJ. BSAVA Manual of Canine and Feline Neurology, 4th ed. BSAVA, 2013.', relevance: '神經生理臨床應用' },
    { type: 'guideline', citation: 'Podell M et al. 2015 ACVIM Small Animal Consensus Statement on Seizure Management in Dogs. J Vet Intern Med. 2016;30(2):477-490.', relevance: 'ACVIM 共識——神經生理機轉基礎與 AED 作用靶點' },
    { type: 'journal', citation: 'Bhatt M et al. International veterinary epilepsy task force consensus proposal: medical treatment of canine epilepsy in Europe. BMC Vet Res. 2015;11:176.', relevance: 'IVETF 藥物治療共識——神經傳遞與藥理基礎' },
  ],
  is_current: true,
  created_at: now,
};

/** 腦脊髓液生理 — 概念型 */
const contentCSFPhysiology: NodeContent = {
  id: 'CONTENT-NEURO-L1-003',
  node_id: 'NEURO-L1-003',
  version: 1,
  summary: '腦脊髓液（Cerebrospinal Fluid, CSF）是充填於腦室系統與蛛網膜下腔的無色透明液體，由脈絡叢（choroid plexus）主動分泌產生。CSF 的核心功能包括：機械性緩衝保護、代謝廢物清除、營養與訊號分子運輸、以及維持顱內壓（ICP）恆定。犬貓 CSF 總量約 1-1.5 mL/kg，每日產生約 0.04-0.05 mL/min，約 4-5 小時完全更新一次。理解 CSF 的產生、循環與吸收機轉對於認識水腦症、顱內壓升高與 CSF 分析的臨床應用至關重要。',
  learning_objectives: [
    '描述 CSF 的產生部位、機轉與速率',
    '說明 CSF 在腦室系統與蛛網膜下腔的循環路徑',
    '解釋 CSF 吸收的主要途徑（蛛網膜絨毛與淋巴引流）',
    '列出 CSF 的正常成分與犬貓正常參考值',
    '將 CSF 生理異常連結至臨床疾病（水腦症、顱內壓升高）',
  ],
  key_points: [
    'CSF 由脈絡叢（側腦室>第三腦室>第四腦室）主動分泌，涉及 Na⁺/K⁺-ATPase、碳酸酐酶（carbonic anhydrase）與水通道蛋白（aquaporin-1）',
    '循環路徑：側腦室 → 室間孔（Monro） → 第三腦室 → 中腦導水管（Sylvius） → 第四腦室 → 側孔（Luschka）/正中孔（Magendie） → 蛛網膜下腔',
    '吸收途徑：蛛網膜絨毛（arachnoid villi）→ 靜脈竇為經典途徑；近年研究發現 glymphatic system 與篩板淋巴引流為重要補充途徑',
    'Monroe-Kellie 原則：顱腔內腦組織 + CSF + 血液容積恆定，任一增加需其他代償性減少',
    '犬貓正常 CSF：蛋白 < 25-30 mg/dL、有核細胞 < 5 cells/μL、無色透明、葡萄糖約為血糖 60-80%',
    '血腦屏障（BBB）與血-CSF 屏障（BCSFB）構成 CNS 的雙重防線，限制血液成分進入 CSF',
    '水腦症分類：阻塞性（CSF 通路受阻）vs 交通性（吸收障礙），兩者的治療策略不同',
  ],
  body: `# 腦脊髓液生理

## 一、核心概念與機轉 (Core Concept & Mechanism)



### CSF 的產生
### 脈絡叢的結構與功能
- 脈絡叢位於各腦室內，由上皮細胞（ependymal-derived）與高度血管化的間質組成
- 上皮細胞間以緊密接合（tight junctions）連接，形成血-CSF 屏障（BCSFB）
- 產生機轉：血漿超濾 + 主動分泌（Na⁺/K⁺-ATPase 驅動 Na⁺ 向腦室側運輸 → 水隨滲透梯度移動）
- 碳酸酐酶（CA）：CO₂ + H₂O → HCO₃⁻ + H⁺，HCO₃⁻ 分泌至 CSF 維持 pH

### 產生速率
- 犬：約 0.04-0.05 mL/min（約 60-70 mL/day）
- 產生速率相對恆定，受 ICP 影響小
- Acetazolamide（CA 抑制劑）可減少 CSF 產生約 30-50%

### CSF 的循環
### 腦室系統流動路徑

\`\`\`
側腦室（左右）
    ↓ 室間孔（Foramen of Monro）
第三腦室
    ↓ 中腦導水管（Aqueduct of Sylvius）← 最常見阻塞點
第四腦室
    ↓ 側孔（Luschka）/ 正中孔（Magendie）
蛛網膜下腔（腦表面 + 脊髓周圍）
    ↓
蛛網膜絨毛（Arachnoid villi）→ 靜脈竇吸收
\`\`\`

### 循環動力
- CSF 流動為搏動性（與心搏同步），非單純穩態流
- 呼吸運動與姿勢變化也影響 CSF 流動方向與速度
- 中腦導水管為最狹窄處（犬直徑 ~1-2 mm），最易發生阻塞

### CSF 的吸收
### 蛛網膜絨毛（Arachnoid Villi）
- 蛛網膜向靜脈竇突出形成的單向閥結構
- CSF 壓力 > 靜脈竇壓力時，CSF 經絨毛被動流入靜脈血
- 為 CSF 壓力依賴性吸收機制

### Glymphatic System（膠質淋巴系統）
- 近年發現的 CNS 廢物清除途徑
- CSF 沿動脈周圍間隙（periarterial space）進入腦實質
- 經由星狀膠質細胞足突上的 AQP4 水通道蛋白進入間質
- 間質液攜帶代謝廢物沿靜脈周圍間隙流出
- 在睡眠期間活性顯著增加（與 Aβ 清除相關）

### CSF 正常成分
| 參數 | 犬正常值 | 貓正常值 | 臨床意義 |
|------|---------|---------|----------|
| 外觀 | 無色透明 | 無色透明 | 混濁=細胞↑，黃變=出血/蛋白↑ |
| 蛋白 | < 25 mg/dL | < 30 mg/dL | ↑: 發炎、腫瘤、出血 |
| 有核細胞 | < 5 cells/μL | < 5 cells/μL | ↑: 發炎（>5 = pleocytosis） |
| 葡萄糖 | 血糖 60-80% | 血糖 60-80% | ↓: 細菌感染（消耗） |
| 壓力 | < 170 mmH₂O | < 170 mmH₂O | ↑: ICP 升高 |

## 二、臨床意義 (Clinical Significance)

- **水腦症的病理生理基礎**：阻塞性水腦症（中腦導水管狹窄最常見）與交通性水腦症（蛛網膜絨毛吸收障礙）的機轉差異決定了治療策略——V-P shunt 可同時處理兩種類型，但 Acetazolamide 減少 CSF 產生僅為輔助手段
- **Monroe-Kellie 原則與 ICP 管理**：顱腔為固定容積空間，CSF 是 ICP 代償的主要緩衝——腦水腫或佔位性病灶時 CSF 先被代償性排出，代償耗盡後 ICP 急劇上升，因此 ICP 的變化呈「冰山效應」，晚期才出現臨床症狀
- **CSF 採集部位的選擇**：小腦延髓池穿刺（CMP）較腰椎穿刺更常用於犬貓，但前顱窩病灶的 CSF 異常可能在 CMP 取樣中不明顯——病灶越接近採集點，CSF 異常越顯著
- **Glymphatic system 與神經退化疾病**：睡眠期間 glymphatic 清除活性增加 60%，解釋了為什麼老年犬 CDS（認知障礙症候群）與睡眠障礙具有雙向關聯——睡眠改善可能有助於延緩 Aβ 沉積
- **CSF 壓力的臨床量測**：犬貓麻醉下側臥位進行 CMP 時可用測壓管量測開放壓力，正常 < 170 mmH₂O，> 200 mmH₂O 提示 ICP 升高，指導 Mannitol（0.5-1 g/kg IV）或高張食鹽水的使用時機

## 三、人醫借鑒 (Translational Insights)

| 人醫工具/概念 | 獸醫應用潛力 | 現況 |
|-------------|-------------|------|
| Glymphatic system MRI 追蹤（DTI-ALPS） | 犬 CDS 的 glymphatic 功能無創評估 | 人醫研究中，犬 MRI 技術上可行但尚無標準化 |
| 顱內壓持續監測（ICP monitoring） | 犬顱腦外傷/腦炎的即時 ICP 趨勢監測 | 人 NICU 標準配備，獸醫僅研究性使用 |
| 第三腦室底造瘻術（ETV） | 犬阻塞性水腦症的微創替代 V-P shunt | 人醫已取代部分 shunt 手術，獸醫初步報告 |
| CSF 液態切片（cfDNA/miRNA 分析） | 犬 CNS 腫瘤的微創分子診斷 | 人醫臨床轉化中，犬研究極初步 |

## 四、臨床爭議與知識空缺 (Controversies & Knowledge Gaps)

| 爭議議題 | 現況 | Evidence Level |
|---------|------|---------------|
| 犬 Glymphatic system 的臨床重要性 | 齧齒類研究充分但犬的 glymphatic 功能數據極有限 | Level IV |
| 先天性水腦犬的最佳手術時機 | 症狀性 vs 預防性 V-P shunt——早期介入可否改善長期預後 | Level III |
| CSF 產生速率在老年犬是否下降 | 人醫資料顯示老年 CSF 產生下降 50%，犬的資料缺乏 | Level IV |
| Acetazolamide 對犬水腦症的長期療效 | 短期可減少 CSF 產生，但長期 compensatory 機制可能抵消效果 | Level III |`,
  clinical_pearl: 'CSF 採集時注意「部位偏差」（site bias）：病灶靠近採集點時 CSF 異常更明顯。前腦病灶在小腦延髓池（CMP）採集的 CSF 可能細胞數正常，腰椎穿刺反而更有意義。反之，後顱窩病灶在 CMP 最敏感。因此，CSF 正常不能完全排除 CNS 疾病，需結合 MRI 判斷。',
  common_mistakes: [
    '混淆阻塞性與交通性水腦症——前者為 CSF 通路阻塞（導水管狹窄），後者為吸收障礙',
    '忽略 CSF 採集部位對結果的影響——前腦病灶在 CMP 取樣可能為假陰性',
    '認為 CSF 壓力正常即排除 ICP 升高——麻醉可降低 ICP，且 CSF 壓力受測量姿勢影響',
    '未同步採集血糖比對 CSF 葡萄糖——CSF 葡萄糖需以 CSF/血糖比值判讀才有意義',
  ],
  disease_data: null,
  diagnostic_data: null,
  procedure_data: null,
  visual_placeholders: [
    { position: '循環路徑段落後', type: 'flowchart', description: 'CSF 腦室循環路徑與吸收機轉流程圖' },
  ],
  interactive_placeholders: [],
  drug_api_links: ['Acetazolamide', 'Mannitol'],
  references: [
    { type: 'textbook', citation: 'de Lahunta A, Glass E, Kent M. Veterinary Neuroanatomy and Clinical Neurology, 4th ed. Saunders, 2015.', relevance: 'CSF 解剖與生理基礎' },
    { type: 'journal', citation: 'Di Terlizzi R, Platt SR. The function, composition and analysis of cerebrospinal fluid in companion animals: Part I. Vet J. 2006;172(3):422-431.', relevance: 'CSF 生理與組成綜述' },
    { type: 'journal', citation: 'Jessen NA et al. The glymphatic system: A beginner\'s guide. Neurochem Res. 2015;40(12):2583-2599.', relevance: 'Glymphatic system 基礎回顧' },
    { type: 'guideline', citation: 'Platt SR, Olby NJ. BSAVA Manual of Canine and Feline Neurology, 4th ed. BSAVA, 2013. Ch.4: CSF collection and analysis.', relevance: 'CSF 採集臨床指引' },
  ],
  is_current: true,
  created_at: now,
};

/** 癲癇發作機轉 — 機轉型 */
const contentSeizurePathophysiology: NodeContent = {
  id: 'CONTENT-NEURO-L2-001',
  node_id: 'NEURO-L2-001',
  version: 1,
  summary: '癲癇發作（Seizure）是由大腦皮質神經元異常同步化過度放電所引發的短暫性神經功能障礙。核心機轉為興奮性（Glutamate/NMDA/AMPA）與抑制性（GABA）神經傳遞之間的失衡。犬為小動物癲癇最常見的物種，特發性癲癇（Idiopathic Epilepsy, IE）佔犬反覆性癲癇的最大比例。理解癲癇發作的細胞與迴路機轉、癲癇形成（epileptogenesis）過程、以及癲癇重積（status epilepticus）的病理生理，是正確分類癲癇、選擇抗癲癇藥物（AED）與評估預後的基礎。',
  learning_objectives: [
    '描述癲癇發作的細胞層級機轉（離子通道、突觸傳遞失衡）',
    '解釋癲癇形成（epileptogenesis）的三階段模型',
    '區分局灶性與全身性癲癇發作的電生理與解剖基礎',
    '說明癲癇重積（SE）的自我維持機轉與時間依賴性藥物抗性',
    '將發作機轉連結至抗癲癇藥物的藥理靶點',
  ],
  key_points: [
    '興奮/抑制失衡：Glutamate（興奮性）↑ 或 GABA（抑制性）↓ → 神經元過度同步放電',
    '陣發性去極化移位（PDS）：癲癇神經元的特徵性放電模式——Na⁺/Ca²⁺ 內流驅動的去極化 + 異常高頻動作電位叢發',
    '癲癇形成三階段：初始損傷（腦炎/外傷/中風）→ 潛伏期（迴路重塑、苔蘚纖維萌芽）→ 自發性反覆發作',
    '犬特發性癲癇（IE）可能涉及遺傳性離子通道或受體異常（channelopathy），多數品種致病基因尚未確認',
    '癲癇重積（SE）的自我維持：持續發作 > 5 分鐘 → GABA-A 受體內化（internalization）→ Benzodiazepine 抗性 → 需要二線藥物',
    '發作後期（postictal phase）：神經元暫時性抑制 + 腦水腫 → 臨床表現為意識混濁、失明、共濟失調',
    '反覆癲癇發作的神經毒性：興奮毒性（excitotoxicity）→ 海馬迴硬化（hippocampal sclerosis）→ 癲癇更難控制',
  ],
  body: `# 癲癇發作機轉

## 一、核心概念與機轉 (Core Concept & Mechanism)



### 正常神經元電生理
- 靜止膜電位：~-70 mV（K⁺ 外流主導）
- 動作電位：閾值達到 → 電壓門控 Na⁺ 通道開放 → 快速去極化 → K⁺ 通道開放 → 再極化
- 正常腦功能依賴興奮性與抑制性傳遞的精密平衡

### 癲癇發作的核心機轉
### 興奮/抑制失衡
\`\`\`
正常狀態：Glutamate（興奮）⟺ GABA（抑制）= 平衡
癲癇狀態：
  興奮↑：Glutamate ↑、NMDA/AMPA 受體過度活化、Na⁺ 通道功能異常
  抑制↓：GABA 合成↓、GABA-A 受體表達↓、Cl⁻ 通道功能異常
  → 神經元過度同步放電 → 臨床癲癇發作
\`\`\`

### 陣發性去極化移位（PDS, Paroxysmal Depolarization Shift）
- 癲癇灶神經元的特徵性電生理表現
- 機轉：持續性 Na⁺/Ca²⁺ 內流 → 長時程去極化平台（~200-500 ms）→ 其上疊加高頻動作電位叢發
- 單一神經元 PDS → 經突觸與縫隙接合擴散 → 神經元群體同步 → EEG 上的棘波（spike）

### 癲癇的擴散
- 局灶性發作：異常放電侷限於皮質特定區域 → 對側肢體陣攣/行為異常
- 全身性發作：異常放電經皮質-皮質連結或丘腦-皮質迴路快速擴散 → 雙側強直-陣攣
- 繼發性全身化：局灶性起源 → 擴散至雙側大腦 → 全身性表現

### 癲癇形成（Epileptogenesis）

| 階段 | 時期 | 病理變化 |
|------|------|---------|
| 初始損傷 | 急性（小時-天） | 腦炎/外傷/中風 → 神經元死亡 + 發炎 |
| 潛伏期 | 亞急性（週-月） | 苔蘚纖維萌芽（mossy fiber sprouting）、GABA 中間神經元喪失、突觸重塑、神經膠質增生 |
| 慢性癲癇 | 慢性 | 異常迴路建立 → 自發性反覆癲癇發作 |

### 犬特發性癲癇的遺傳基礎
- 大多數品種的致病基因尚未確認
- 已知突變：Belgian Shepherd 的 ADAM23 基因、Lagotto Romagnolo 的 LGI2 基因
- 可能涉及離子通道病（channelopathy）：Na⁺/K⁺/Ca²⁺ 通道或 GABA 受體亞單元變異
- 高發品種：German Shepherd、Belgian Shepherd、Beagle、Labrador、Golden Retriever、Border Collie

### 癲癇重積（Status Epilepticus）的病理生理
持續發作 > 5 分鐘啟動自我維持機轉：
1. GABA-A 受體內化（5-10 分鐘）：受體從突觸膜被 endocytosis 移除 → Benzodiazepine 效果降低
2. NMDA 受體上調（15-30 分鐘）：突觸後 NMDA 受體表達增加 → 興奮性進一步增強
3. 代謝衰竭（> 30 分鐘）：ATP 耗竭 → 離子泵失效 → 細胞內 Ca²⁺ 持續升高 → 神經元不可逆損傷
4. 全身性併發症：高體溫、橫紋肌溶解、DIC、腎衰竭

## 二、臨床意義 (Clinical Significance)

- **GABA-A 受體內化解釋 Benzodiazepine 的時間依賴性抗性**：癲癇重積持續越久，Diazepam 效果越差——這是為什麼 ACVIM 共識建議在發作超過 5 分鐘即給予 Benzodiazepine，而非等待更長時間；超過 30 分鐘未控制應升級至 Phenobarbital IV 或 Propofol/Ketamine CRI
- **癲癇形成（epileptogenesis）與預防性 AED 的爭議**：腦炎或嚴重腦外傷後是否應預防性給予 AED 以阻斷 epileptogenesis 仍有爭議——人醫資料顯示預防性 AED 不能減少長期癲癇風險，但可降低急性期的發作頻率
- **發作類型決定定位與鑑別**：局灶性發作提示前腦結構性病灶（腫瘤、腦炎、血管病變），全身性起始發作較支持特發性癲癇——正確分類發作類型是決定是否需要 MRI 的重要依據
- **反覆發作的累積性損傷**：每次全身性強直-陣攣發作都經由興奮毒性造成海馬迴神經元損傷，長期可導致海馬迴硬化與藥物反應性降低——這是為什麼早期積極控制發作頻率的理論基礎
- **貓癲癇的特殊性**：貓癲癇多數為結構性（腦炎、腫瘤、海馬迴壞死），特發性比例遠低於犬；貓的癲癇發作常表現為面部肌陣攣（facial myoclonus）與流涎，較少典型強直-陣攣

## 三、人醫借鑒 (Translational Insights)

| 人醫工具/概念 | 獸醫應用潛力 | 現況 |
|-------------|-------------|------|
| 長時間腦電圖監測（long-term EEG/vEEG） | 犬癲癇的發作間期棘波偵測與發作分類 | 人醫為癲癇診斷金標準，獸醫需全身麻醉限制廣泛使用 |
| 迷走神經刺激（VNS） | 犬藥物抗性癲癇的神經調控替代治療 | 人醫 FDA 核准，獸醫少量臨床報告 |
| 精準醫療癲癇基因 panel | 犬品種特異性癲癇的基因型-表現型關聯與 AED 選擇 | 人醫商業化 panel 已普及，犬癲癇基因數據累積中 |
| mTOR 抑制劑（Everolimus）用於 TSC 相關癲癇 | 特定結構性癲癇的靶向分子治療 | 人醫已核准適應症，獸醫可能的轉譯方向 |

## 四、臨床爭議與知識空缺 (Controversies & Knowledge Gaps)

| 爭議議題 | 現況 | Evidence Level |
|---------|------|---------------|
| 犬 IE 何時開始 AED 治療 | 第一次發作即治療 vs 等待第二次——早期治療是否改善長期預後仍有爭議 | Level III |
| 反覆發作是否真的累積損傷犬腦 | 犬缺乏縱向 MRI 海馬迴體積追蹤研究，人醫資料外推 | Level III |
| Ketamine CRI 用於犬 SE 的安全性與療效 | NMDA 拮抗理論上合理，但犬 prospective 研究有限 | Level III |
| 犬癲癇的 EEG 標準化 | 犬 EEG 受麻醉影響大，清醒 EEG 技術限制是主要瓶頸 | Level IV |`,
  clinical_pearl: '癲癇重積的「5 分鐘法則」有堅實的病理生理基礎：持續發作超過 5 分鐘後，GABA-A 受體開始從突觸膜內化（internalization），使得 Benzodiazepine 的效果急劇下降。臨床上，Diazepam 在發作前 5 分鐘給予的成功率 > 80%，但超過 30 分鐘後降至 < 40%。因此，及早給藥是控制 SE 最重要的預後因子。',
  common_mistakes: [
    '將所有犬癲癇都歸因為特發性——需先排除結構性（腦炎、腫瘤）與代謝性（低血糖、肝性腦病）原因',
    '等待癲癇重積持續太久才用藥——超過 5 分鐘即應給予 Benzodiazepine',
    '忽略發作類型的正確分類——局灶性起始 vs 全身性起始對後續診斷方向有重大影響',
    '未認識到 Benzodiazepine 的時間依賴性抗性——SE 超過 30 分鐘應升級至 Phenobarbital IV 或麻醉藥物',
  ],
  disease_data: null,
  diagnostic_data: null,
  procedure_data: null,
  visual_placeholders: [
    { position: '興奮/抑制失衡段落後', type: 'flowchart', description: '癲癇發作興奮/抑制失衡與 SE 自我維持機轉流程圖' },
  ],
  interactive_placeholders: [],
  drug_api_links: ['Diazepam', 'Phenobarbital', 'Levetiracetam', 'Propofol'],
  references: [
    { type: 'guideline', citation: 'Podell M et al. 2015 ACVIM Small Animal Consensus Statement on Seizure Management in Dogs. J Vet Intern Med. 2016;30(2):477-490.', relevance: 'ACVIM 犬癲癇管理共識' },
    { type: 'journal', citation: 'Berendt M et al. International veterinary epilepsy task force consensus report on epilepsy definition, classification and terminology in companion animals. BMC Vet Res. 2015;11:182.', relevance: 'IVETF 癲癇定義與分類共識' },
    { type: 'textbook', citation: 'Platt SR, Olby NJ. BSAVA Manual of Canine and Feline Neurology, 4th ed. BSAVA, 2013.', relevance: '癲癇病理生理基礎章節' },
    { type: 'journal', citation: 'Löscher W. The pharmacokinetics of antiepileptic drugs in dogs. J Vet Pharmacol Ther. 1985;8(3):219-233.', relevance: '犬抗癲癇藥物動力學基礎' },
  ],
  is_current: true,
  created_at: now,
};

/** 脊髓壓迫機轉 — 機轉型 */
const contentSpinalCompression: NodeContent = {
  id: 'CONTENT-NEURO-L2-002',
  node_id: 'NEURO-L2-002',
  version: 1,
  summary: '脊髓壓迫（Spinal Cord Compression）是犬貓最常見的脊髓損傷機轉，病因包括椎間盤突出（IVDD）、脊椎腫瘤、脊椎骨折/脫位、寰樞關節不穩定與退化性腰薦椎狹窄。壓迫導致的損傷分為原發性（mechanical compression + contusion）與繼發性（缺血、水腫、興奮毒性、自由基損傷）。神經功能喪失的順序遵循纖維直徑規則：本體感覺→自主運動→淺痛覺→深痛覺。',
  learning_objectives: [
    '描述脊髓壓迫的原發性與繼發性損傷機轉',
    '說明神經功能喪失的纖維直徑依序性',
    '列舉犬貓脊髓壓迫的主要病因',
    '解釋急性 vs 慢性壓迫對脊髓的不同影響',
    '將壓迫機轉連結至臨床分級與預後判斷',
  ],
  key_points: [
    '原發性損傷：機械壓迫（compression）+ 挫傷（contusion），發生於壓迫當下',
    '繼發性損傷：缺血 → 細胞水腫 → 興奮毒性 → ROS → 細胞凋亡，持續數天至數週',
    '纖維直徑規則：大直徑有髓纖維（本體感覺）最先受損，小直徑無髓纖維（深痛覺）最後受損',
    '臨床喪失順序：本體感覺 → 自主運動 → 淺痛覺 → 深痛覺（最後喪失 = 最嚴重）',
    '急性壓迫損傷遠大於慢性壓迫（脊髓對慢性壓迫有一定適應能力）',
    '進行性脊髓軟化（PMM）：最嚴重的繼發損傷，脊髓自溶性壞死向頭尾端擴展，致死',
    '深痛覺喪失代表脊髓最深層纖維受損——Grade V IVDD 的預後指標',
  ],
  body: `# 脊髓壓迫機轉

## 一、核心概念與機轉 (Core Concept & Mechanism)



### 損傷分類
### 原發性損傷（Primary Injury）
- **壓迫（Compression）**：物理性壓迫脊髓組織，阻斷軸突傳導與血流
- **挫傷（Contusion）**：急性高速衝擊（如 Hansen Type I）造成脊髓實質損傷
- 壓迫程度與速度決定原發損傷嚴重度

### 繼發性損傷（Secondary Injury）
發生於原發損傷後數小時至數天：
1. **血管損傷與缺血**：微血管破裂、血管痙攣 → 脊髓灰質缺血
2. **細胞水腫**：Na⁺/K⁺-ATPase 失效 → 細胞毒性水腫
3. **興奮毒性**：Glutamate 大量釋放 → Ca²⁺ 過載
4. **自由基損傷**：ROS 與 RNS → 脂質過氧化、膜損傷
5. **發炎反應**：嗜中性球與巨噬細胞浸潤
6. **細胞凋亡**：延遲性程序性細胞死亡

### 纖維直徑與功能喪失順序
脊髓受壓時，大直徑有髓纖維最先受影響，小直徑無髓纖維最後受影響：

| 喪失順序 | 功能 | 纖維特性 | 臨床對應 |
|---------|------|---------|---------|
| 1（最先） | 本體感覺 | 大直徑有髓 | 共濟失調、knuckling |
| 2 | 自主運動 | 中直徑有髓 | 輕癱 → 癱瘓 |
| 3 | 淺痛覺 | 小直徑有髓 | 皮膚痛覺減退 |
| 4（最後） | 深痛覺 | 小直徑無髓 C 纖維 | Grade V IVDD |

### 急性 vs 慢性壓迫
- **急性壓迫**（如 Hansen Type I）：脊髓無時間適應，挫傷嚴重，繼發損傷顯著
- **慢性壓迫**（如 Hansen Type II）：脊髓逐漸適應，可容忍較大程度壓迫而維持功能

### 進行性脊髓軟化 (PMM)
- 發生率：Grade V IVDD 約 2-5%
- 機轉：繼發損傷的極端情況，脊髓自溶性壞死向頭尾端擴展
- 臨床徵兆：術後神經功能持續惡化（LMN 徵象擴展至前肢）、panniculus 截斷面持續上移
- 預後：一旦確認為 PMM，致死率接近 100%

## 二、臨床意義 (Clinical Significance)

- **IVDD 分級系統指導手術決策**：纖維直徑規則是 IVDD 5 級分級系統的病理基礎——Grade I（僅痛覺）→ Grade V（深痛覺喪失），Grade IV-V 為手術急症，Grade V 且深痛覺喪失 > 48 小時者預後急劇下降至 < 5%
- **繼發損傷的時間窗概念**：原發壓迫後的繼發損傷（缺血、水腫、興奮毒性、自由基）在 24-72 小時內持續累積，這是 Grade V IVDD 強調早期手術減壓（< 24-48 hr）的核心理據
- **急慢性壓迫的預後差異**：Hansen Type I（急性核髓脫出）因脊髓無適應時間，挫傷嚴重且繼發損傷顯著；Hansen Type II（慢性環纖維突出）脊髓可逐步適應，同等壓迫程度下功能保留較好——這影響手術時機的急迫性判斷
- **PMM 的早期辨識**：進行性脊髓軟化（PMM）是 IVDD 術後最致命的併發症，panniculus 截斷面持續顱側移動、前肢出現 LMN 徵象為早期警訊，一旦確認 PMM，應立即與飼主討論人道考量
- **物種差異**：犬以 IVDD 為最常見脊髓壓迫病因（尤其軟骨營養不良品種），貓則以淋巴瘤脊髓外壓迫與纖維軟骨栓塞（FCE）相對常見

## 三、人醫借鑒 (Translational Insights)

| 人醫工具/概念 | 獸醫應用潛力 | 現況 |
|-------------|-------------|------|
| 脊髓灌流壓（SCPP）即時監測 | 犬 IVDD 術後繼發損傷的血流動力學管理 | 人 SCI 開始使用椎管內壓力感測器，獸醫研究初探 |
| 神經保護藥物（Riluzole、Minocycline） | 犬急性脊髓壓迫後繼發損傷的藥物干預 | 人 SCI Phase II-III 試驗中，犬尚無 RCT |
| MRI DTI 定量脊髓白質完整性 | 犬 IVDD 脊髓損傷程度與預後的精確評估 | 人 SCI 研究活躍，獸醫 3T MRI 上技術可行 |

## 四、臨床爭議與知識空缺 (Controversies & Knowledge Gaps)

| 爭議議題 | 現況 | Evidence Level |
|---------|------|---------------|
| 犬 IVDD 術後高劑量類固醇的神經保護效果 | 人 SCI 已否定 Methylprednisolone 方案，犬同樣趨向不推薦但仍有使用者 | Level II |
| PMM 的早期預測指標 | 目前依賴臨床觀察，缺乏可靠的 MRI 或生物標記早期預警 | Level IV |`,
  clinical_pearl: '在評估 IVDD Grade V 患者時，最關鍵的概念是「時間窗」。繼發損傷在原發損傷後持續數天，早期手術減壓可以減少繼發損傷的嚴重度。這是為什麼深痛覺喪失被視為「與時間賽跑」的緊急情況——每延遲一小時，脊髓繼發損傷就多一分累積。',
  common_mistakes: [
    '低估繼發損傷的嚴重性——術後神經功能可能因繼發損傷持續惡化',
    '將 Hansen Type II 的慢性壓迫用急性壓迫的預後標準評估',
    '忽略 PMM 的早期徵兆——panniculus 截斷面持續上移是重要警訊',
    '未區分急性與慢性脊髓壓迫的手術急迫性——Hansen Type I 急性壓迫需緊急手術，Type II 慢性壓迫可允許較充分的術前評估',
  ],
  disease_data: null,
  diagnostic_data: null,
  procedure_data: null,
  visual_placeholders: [
    { position: '纖維直徑表格後', type: 'annotated_image', description: '脊髓橫切面纖維分布與壓迫損傷順序圖' },
  ],
  interactive_placeholders: [],
  drug_api_links: [],
  references: [
    { type: 'journal', citation: 'Jeffery ND et al. Intervertebral disk degeneration in dogs: consequences, diagnosis, treatment, and future directions. J Vet Intern Med. 2013;27(6):1318-1333.', relevance: '脊髓壓迫機轉與 IVDD' },
    { type: 'textbook', citation: 'Platt SR, Olby NJ. BSAVA Manual of Canine and Feline Neurology, 4th ed. BSAVA, 2013.', relevance: '脊髓損傷病理生理' },
    { type: 'journal', citation: 'Olby N. The pathogenesis and treatment of acute spinal cord injuries in dogs. Vet Clin North Am Small Anim Pract. 2010;40(5):791-807.', relevance: '急性脊髓損傷繼發機轉' },
    { type: 'guideline', citation: 'Moore SA et al. ACVIM Consensus Statement on thoracolumbar intervertebral disc disease. J Vet Intern Med. 2020;34(5):1684-1699.', relevance: 'ACVIM IVDD 共識——脊髓壓迫病理生理' },
  ],
  is_current: true,
  created_at: now,
};

/** 神經肌肉接合病理 — 機轉型 */
const contentNMJPathology: NodeContent = {
  id: 'CONTENT-NEURO-L2-003',
  node_id: 'NEURO-L2-003',
  version: 1,
  summary: '神經肌肉接合處（Neuromuscular Junction, NMJ）是運動神經元軸突末梢與骨骼肌纖維之間的化學突觸，以乙醯膽鹼（ACh）為神經傳遞物質。NMJ 的正常傳遞涉及：ACh 合成與囊泡儲存、Ca²⁺ 依賴性囊泡胞吐、ACh 與突觸後菸鹼型受體（nAChR）結合、終板電位（EPP）產生、以及乙醯膽鹼酯酶（AChE）的 ACh 降解。犬貓的 NMJ 病變主要包括免疫介導性重症肌無力（MG, 最常見）、先天性 MG、肉毒桿菌中毒（突觸前阻斷）與蜱麻痺（tick paralysis）。理解 NMJ 傳遞的分子機轉與各病變的攻擊靶點，是正確診斷與治療 NMJ 疾病的基礎。',
  learning_objectives: [
    '描述 NMJ 正常神經傳遞的完整步驟',
    '區分突觸前 vs 突觸後 NMJ 病變的機轉與臨床差異',
    '說明免疫介導性 MG 的自體抗體攻擊機轉',
    '比較 MG、肉毒桿菌中毒與蜱麻痺的病理生理差異',
    '將 NMJ 病理機轉連結至電生理診斷（重複神經刺激）與藥理學測試（Edrophonium test）',
  ],
  key_points: [
    'NMJ 正常傳遞：動作電位到達軸突末梢 → 電壓門控 Ca²⁺ 通道開放 → Ca²⁺ 內流 → SNARE 蛋白介導囊泡融合 → ACh 胞吐 → 與突觸後 nAChR 結合 → Na⁺ 內流 → 終板電位（EPP）→ 肌纖維動作電位 → 肌肉收縮',
    '安全係數（Safety Factor）：正常 EPP 振幅遠大於引發肌纖維動作電位所需的閾值（約 4:1），確保高頻率傳遞的可靠性',
    '免疫介導性 MG：抗 nAChR 自體抗體（IgG）→ 三重機轉：(1) 補體介導的終板破壞、(2) 受體交聯加速內化（antigenic modulation）、(3) 直接阻斷 ACh 結合',
    '肉毒桿菌中毒：Botulinum toxin 蛋白酶裂解 SNARE 蛋白（SNAP-25/Synaptobrevin）→ 阻斷囊泡融合 → ACh 釋放完全停止',
    '蜱麻痺：蜱唾腺毒素（holocyclotoxin, Ixodes; 或 dermacentor toxin）→ 阻斷突觸前 Ca²⁺ 內流 → ACh 釋放減少',
    '重複神經刺激（RNS）電生理：突觸後病變（MG）→ 低頻（2-3 Hz）漸減 > 10%；突觸前病變（肉毒）→ 低頻漸減 + 高頻增強（post-tetanic facilitation）',
    '先天性 MG：nAChR 亞單元基因突變 → 受體數量減少或功能異常，非免疫介導，AChR 抗體陰性',
  ],
  body: `# 神經肌肉接合病理

## 一、核心概念與機轉 (Core Concept & Mechanism)



### NMJ 正常結構與功能
### 解剖結構
- **突觸前**：運動神經元軸突末梢（含 ACh 囊泡、電壓門控 Ca²⁺ 通道、SNARE 蛋白複合體）
- **突觸間隙**：寬約 50 nm，含 AChE（附著於基底膜上的膠原尾型）
- **突觸後**：肌肉終板（motor end plate），nAChR 密集分布於褶皺頂部

### 傳遞步驟
1. 動作電位抵達軸突末梢
2. 電壓門控 Ca²⁺ 通道（P/Q-type）開放 → Ca²⁺ 內流
3. Ca²⁺ 觸發 SNARE 蛋白複合體（Synaptobrevin + SNAP-25 + Syntaxin）介導囊泡融合
4. ACh 胞吐至突觸間隙（~10,000 ACh 分子/囊泡）
5. ACh 與突觸後 nAChR（α₂βδε 五聚體）結合 → 陽離子通道開放 → Na⁺ 內流
6. 終板電位（EPP）產生 → 超過閾值時觸發肌纖維動作電位
7. AChE 快速水解 ACh → Choline 被突觸前再攝取 → 重新合成 ACh

### 安全係數
- EPP 振幅（~40 mV）遠大於閾值（~10 mV），比值約 4:1
- 確保即使在高頻率刺激下，傳遞仍然可靠
- NMJ 疾病使安全係數降低 → 高頻率（重複活動）時傳遞失敗 → 運動誘發性肌無力

### NMJ 病變分類
### 突觸後病變（最常見）

**免疫介導性重症肌無力（Acquired MG）**
- 自體抗體（IgG）靶向突觸後 nAChR
- 三重攻擊機轉：
  1. **補體介導的終板破壞**：IgG 結合 nAChR → 活化補體級聯 → 膜攻擊複合體（MAC）→ 終板褶皺破壞
  2. **抗原調變（Antigenic modulation）**：抗體交聯相鄰 nAChR → 加速受體內化與降解 → 可用受體數量下降
  3. **直接功能阻斷**：部分抗體直接結合 ACh 結合位點 → 阻斷 ACh-nAChR 交互作用
- 結果：可用 nAChR 數量顯著減少 → 安全係數降低 → 運動誘發性肌無力

**先天性 MG**
- nAChR 亞單元基因突變（如 ε 亞單元缺失突變）
- 受體數量或功能先天不足
- 品種傾向：Jack Russell Terrier、Springer Spaniel
- 抗 AChR 抗體陰性（與免疫介導型的關鍵鑑別）

### 突觸前病變

**肉毒桿菌中毒（Botulism）**
- Clostridium botulinum 產生的 Botulinum neurotoxin（BoNT）
- BoNT 為鋅依賴性蛋白酶，靶向 SNARE 蛋白：
  - BoNT/A、C、E：裂解 SNAP-25
  - BoNT/B、D、F、G：裂解 Synaptobrevin
- SNARE 複合體無法組裝 → 囊泡融合完全阻斷 → ACh 釋放停止
- 犬最常見為 BoNT/C 型（食入腐敗肉類或動物屍體）

**蜱麻痺（Tick Paralysis）**
- Ixodes holocyclus（澳洲）或 Dermacentor spp.（北美）的唾腺毒素
- 毒素阻斷突觸前電壓門控 Ca²⁺ 通道 → Ca²⁺ 內流減少 → ACh 釋放下降
- 移除蜱後通常 24-72 小時恢復（毒素代謝清除）
- 嚴重病例可致呼吸肌麻痺

### 電生理鑑別
| 檢查 | 突觸後（MG） | 突觸前（肉毒） |
|------|-------------|---------------|
| 低頻 RNS (2-3 Hz) | 漸減 > 10% | 漸減 > 10% |
| 高頻 RNS (20-50 Hz) | 無增強 | 增強（post-tetanic facilitation） |
| CMAP 基線振幅 | 正常或輕度下降 | 顯著下降 |
| 單纖維 EMG | Jitter 增加 | Jitter 增加 |

## 二、臨床意義 (Clinical Significance)

- **犬 MG 三種臨床亞型的辨識**：局灶型（40%，僅食道擴張或面部無力）、全身型（50%，運動誘發性四肢無力 + 巨食道）、爆發型（10%，急性呼吸衰竭）——局灶型最易被誤診，任何原因不明的巨食道症犬都應檢測 AChR 抗體
- **Edrophonium test 的原理與操作**：Edrophonium 為超短效 AChE 抑制劑（作用時間 ~5 分鐘），靜脈注射後抑制 ACh 降解 → 突觸間隙 ACh 濃度升高 → 暫時性肌力改善，用於 MG 的床邊快速篩檢（敏感度 ~80-90%）
- **巨食道症與吸入性肺炎的風險管理**：MG 犬因食道 striated muscle 無力導致巨食道，進而引發反流與吸入性肺炎——吸入性肺炎是 MG 犬最常見的死因，抬高餵食（Bailey chair）是預防的核心措施
- **肉毒桿菌中毒的上行性 LMN 麻痺**：典型表現為急性上行性四肢弛緩性麻痺（後肢先發 → 前肢 → 顱神經），與 ACP 表現相似但進展更快，且顱神經受累更早（面部無力、瞳孔散大）
- **蜱麻痺的地理流行病學**：台灣以 Rhipicephalus sanguineus 為主要蜱種，蜱麻痺報告極少（以澳洲 I. holocyclus 與北美 D. variabilis 為主），但不可完全排除——全身搜蜱與移除蜱是最重要的治療

## 三、人醫借鑒 (Translational Insights)

| 人醫工具/概念 | 獸醫應用潛力 | 現況 |
|-------------|-------------|------|
| 抗 MuSK 抗體檢測 | 犬 AChR 抗體陰性 MG 的進一步免疫分型 | 人醫 anti-MuSK MG 佔 AChR 陰性 MG 的 40%，犬研究極初步 |
| 單纖維肌電圖（SFEMG） | 犬 NMJ 疾病的高敏感度電生理確診 | 人 MG 診斷金標準之一，獸醫設備與技術門檻高 |
| 補體抑制劑（Eculizumab/Ravulizumab） | 犬全身型 MG 的靶向免疫治療 | 人醫已核准用於全身型 MG，獸醫成本為主要障礙 |
| BoNT 治療性應用 | 犬肌張力障礙、痙攣的局部注射治療 | 人醫廣泛使用，獸醫初步臨床應用 |

## 四、臨床爭議與知識空缺 (Controversies & Knowledge Gaps)

| 爭議議題 | 現況 | Evidence Level |
|---------|------|---------------|
| 犬 MG 的最佳免疫抑制方案 | Pyridostigmine + Prednisolone 為基礎，但二線藥物（Azathioprine/MMF/Cyclosporine）的比較研究缺乏 | Level III |
| AChR 抗體陰性犬 MG 的盛行率與機轉 | 犬 AChR Ab 陰性 MG 是否涉及 anti-MuSK 或 anti-LRP4 抗體尚不明確 | Level IV |
| 犬 MG 的自發性緩解率 | 部分犬 MG 可自發緩解（局灶型 > 全身型），但預測因子不明確 | Level III |
| 肉毒桿菌中毒犬的抗毒素治療效益 | 犬用抗毒素可及性低，且治療窗口狹窄（毒素結合後不可逆），臨床效益爭議 | Level IV |`,
  clinical_pearl: '犬 MG 的「隱藏殺手」是吸入性肺炎而非肌無力本身。局灶型 MG 犬因僅表現食道擴張，肌無力症狀不明顯，容易被忽略。臨床上遇到原因不明的巨食道症犬（尤其是中大型犬、3-5 歲或 > 10 歲的雙峰年齡分布），應常規檢測 AChR 抗體。早期診斷 + Bailey chair 抬高餵食可顯著降低吸入性肺炎的風險。',
  common_mistakes: [
    '將所有「運動後無力」都歸因於心肺問題而忽略 NMJ 疾病——MG 的運動誘發性肌無力有特徵性的休息後恢復',
    '未對巨食道症犬檢測 AChR 抗體——局灶型 MG 是犬後天性巨食道症最常見的可治療原因之一',
    '混淆突觸前與突觸後 NMJ 病變的電生理表現——高頻 RNS 增強提示突觸前病變（肉毒），突觸後（MG）則無增強',
    '忽略先天性 MG 的可能——AChR 抗體陰性的年輕犬 NMJ 疾病需考慮先天性 MG（基因檢測）',
  ],
  disease_data: null,
  diagnostic_data: null,
  procedure_data: null,
  visual_placeholders: [
    { position: 'NMJ 傳遞步驟段落後', type: 'diagram', description: 'NMJ 結構與 ACh 傳遞步驟示意圖，標示各病變攻擊靶點' },
  ],
  interactive_placeholders: [],
  drug_api_links: ['Pyridostigmine', 'Edrophonium', 'Prednisolone', 'Azathioprine'],
  references: [
    { type: 'journal', citation: 'Shelton GD. Myasthenia gravis and disorders of neuromuscular transmission. Vet Clin North Am Small Anim Pract. 2002;32(1):189-206.', relevance: '犬 MG 綜合回顧' },
    { type: 'textbook', citation: 'Platt SR, Olby NJ. BSAVA Manual of Canine and Feline Neurology, 4th ed. BSAVA, 2013.', relevance: 'NMJ 疾病章節' },
    { type: 'journal', citation: 'Dewey CW et al. Neuromuscular junction disorders: a review with emphasis on acquired myasthenia gravis in dogs. J Am Anim Hosp Assoc. 1997;33(2):159-167.', relevance: '犬後天性 MG 臨床特徵' },
    { type: 'guideline', citation: 'Shelton GD et al. Diagnostic criteria and classification of canine myasthenia gravis. J Vet Intern Med. 2000;14:367-373.', relevance: '犬 MG 診斷標準與分類指引' },
  ],
  is_current: true,
  created_at: now,
};

/** 脊髓軟化機轉 — 機轉型 */
const contentMyelomalacia: NodeContent = {
  id: 'CONTENT-NEURO-L2-004',
  node_id: 'NEURO-L2-004',
  version: 1,
  summary: '脊髓軟化（Myelomalacia）是脊髓實質的液化性壞死，為脊髓損傷最嚴重的繼發性病理變化。最常見於急性重度椎間盤突出（Hansen Type I IVDD）後的犬，尤其是已喪失深痛覺的病例。病理機轉涉及原發性機械損傷後的缺血再灌流損傷、興奮毒性、自由基風暴、發炎級聯反應與細胞凋亡，最終導致脊髓組織不可逆壞死。進行性上行下行脊髓軟化（Progressive Ascending-Descending Myelomalacia, PMM）是致死性併發症，壞死向顱側與尾側擴展可導致呼吸衰竭。',
  learning_objectives: [
    '描述脊髓軟化的定義與病理特徵（液化性壞死）',
    '說明原發性與繼發性脊髓損傷機轉的時間序列',
    '解釋進行性脊髓軟化（PMM）的擴散機轉',
    '列出脊髓軟化的臨床風險因子與預後指標',
    '將脊髓軟化機轉連結至臨床決策（手術 vs 安樂死）',
  ],
  key_points: [
    '脊髓軟化 = 脊髓實質的液化性壞死，灰質（中央區域）比白質更易受影響（灰質代謝率高、血管密度高）',
    '原發性損傷：急性椎間盤突出的衝擊力 → 脊髓挫傷（contusion）+ 壓迫（compression）→ 機械性細胞破壞',
    '繼發性損傷級聯（6-72 小時）：缺血 → 再灌流損傷 → ROS 風暴 → Glutamate 興奮毒性 → Ca²⁺ 過載 → 粒線體衰竭 → 細胞凋亡與壞死',
    '進行性脊髓軟化（PMM）：壞死從原發損傷處向顱側與尾側擴展，機轉可能涉及 CSF 中毒性介質擴散與血管內微血栓',
    '深痛覺喪失是 PMM 的主要風險因子：T/L IVDD 深痛覺陰性犬 PMM 發生率約 10-15%',
    'PMM 的臨床徵兆：截癱 → 上行性 LMN 前肢無力 → 肋間肌麻痺 → 膈肌呼吸 → 呼吸衰竭（通常 3-7 天內進展）',
    '脊髓軟化為不可逆病變，無有效治療——早期辨識 PMM 徵兆對於安樂死決策的倫理溝通至關重要',
  ],
  body: `# 脊髓軟化機轉

## 一、核心概念與機轉 (Core Concept & Mechanism)



### 定義與病理特徵
- **脊髓軟化（Myelomalacia）**：脊髓組織的液化性壞死（liquefactive necrosis）
- 巨觀：受影響區域脊髓呈軟化糊狀，正常結構消失
- 組織學：神經元壞死、軸突崩解、髓鞘溶解、巨噬細胞浸潤（消化壞死組織）
- 灰質（中央區域）先於白質受影響——灰質代謝需求高、血管分布為終末動脈型

### 脊髓損傷的時間序列
### 原發性損傷（秒-分鐘）
- Hansen Type I 椎間盤突出：髓核急性擠出 → 脊髓高速衝擊
- 損傷類型：挫傷（contusion, 最常見）>  壓迫（compression）> 裂傷（laceration）
- 機械力直接破壞神經元、軸突與血管 → 出血性壞死（中央灰質區域）
- 衝擊力大小與突出速度決定原發性損傷嚴重度

### 繼發性損傷級聯（分鐘-天）
\`\`\`
原發性損傷（機械性）
    ↓
血管損傷 → 出血 + 血管痙攣 → 局部缺血
    ↓
缺血 → ATP 耗竭 → 離子泵失效
    ↓
Na⁺/Ca²⁺ 內流 + K⁺ 外流 → 細胞腫脹
    ↓
Glutamate 大量釋放 → NMDA 受體過度活化 → Ca²⁺ 過載
    ↓
Ca²⁺ 依賴性酵素活化（calpain、磷脂酶 A₂）
    ↓
粒線體損傷 → ROS 風暴 → 脂質過氧化 → 膜崩解
    ↓
發炎級聯：嗜中性球/巨噬細胞浸潤 → TNF-α、IL-1β
    ↓
細胞凋亡（寡突膠質細胞尤其敏感）→ 脫髓鞘
    ↓
脊髓水腫 → 進一步壓迫殘存血管 → 缺血惡性循環
\`\`\`

### 再灌流損傷
- 手術減壓或血管痙攣緩解後，血流恢復反而加劇損傷
- 機轉：O₂ 再引入 → 黃嘌呤氧化酶產生大量超氧陰離子（O₂⁻）
- ROS + Fe²⁺（出血釋放的血紅素鐵）→ Fenton 反應 → 最具破壞力的 hydroxyl radical（·OH）

### 進行性脊髓軟化（PMM）
### 擴散機轉
- 壞死從原發損傷處向顱側與尾側擴展
- 擴散速度：每 24 小時可擴展 1-3 個脊椎節段
- 可能機轉（尚不完全明瞭）：
  1. CSF 中毒性介質（自由基、Glutamate、發炎因子）經蛛網膜下腔擴散
  2. 脊髓內血管微血栓形成 → 節段性缺血壞死
  3. 壞死組織釋放的毒性物質直接損傷相鄰正常脊髓
  4. 自主神經功能障礙 → 脊髓血管調控失衡

### PMM 的臨床進展
| 時間 | 臨床表現 | 定位意義 |
|------|---------|---------|
| Day 0 | T/L 深痛覺喪失性截癱 | 原發損傷位點 |
| Day 1-2 | 前肢 LMN 徵兆出現（反射↓、肌張力↓） | 壞死上行至 C6-T2（臂叢） |
| Day 2-4 | 肋間肌麻痺（呼吸淺快、矛盾呼吸） | 壞死上行至胸椎肋間神經 |
| Day 3-7 | 膈肌呼吸代償 → 最終呼吸衰竭 | 壞死上行至 C3-C5（膈神經） |

### 風險因子
| 因子 | 風險 |
|------|------|
| 深痛覺完全喪失 | PMM 發生率 ~10-15% |
| 發病至手術時間 > 48 小時 | 預後顯著惡化 |
| T3-L3 IVDD（胸腰段） | 高於頸段 IVDD |
| 椎管內占位比 > 50% | 原發損傷更嚴重 |
| 臘腸犬、法國鬥牛犬 | 品種傾向（Type I IVDD 高發） |

## 二、臨床意義 (Clinical Significance)

- **深痛覺喪失是最重要的預後指標**：T/L IVDD 深痛覺陰性犬的手術後功能恢復率約 50-60%（深痛覺喪失 < 48 小時）vs < 5%（> 48 小時），且有 10-15% 發展為致命性 PMM——這是術前溝通的核心數據
- **PMM 的早期辨識決定安樂死時機**：術後截癱犬若出現前肢反射減弱、呼吸型態改變（淺快呼吸、腹式呼吸）、肛門張力喪失從尾側往顱側擴展，需高度懷疑 PMM——目前無有效治療，及時辨識可避免動物不必要的痛苦
- **繼發性損傷的時間窗決定手術時機**：繼發性損傷在原發傷後 6-72 小時內進行，早期手術減壓（< 24 小時）的目的是中止壓迫性缺血級聯，但無法逆轉已發生的原發性損傷——這解釋了為什麼深痛覺喪失超過 48 小時的預後極差
- **MRI 對脊髓軟化的預測價值**：術前 MRI T2WI 上脊髓高訊號延伸 > 2 個椎體長度（extensive T2 hyperintensity）與預後不良高度相關，但不能 100% 預測 PMM——部分長節段高訊號犬仍可恢復
- **再灌流損傷的臨床管理**：術後 24-48 小時維持足夠的平均動脈壓（MAP > 80 mmHg）以確保脊髓灌流是目前唯一有實證支持的神經保護策略——低血壓會加劇繼發性缺血損傷

## 三、人醫借鑒 (Translational Insights)

| 人醫工具/概念 | 獸醫應用潛力 | 現況 |
|-------------|-------------|------|
| 脊髓灌流壓導向治療（SCPP-guided therapy） | 犬 IVDD 術後脊髓灌流壓即時監測與目標導向管理 | 人脊髓損傷 ICU 標準，獸醫研究極初步 |
| Riluzole（Glutamate 拮抗劑）神經保護 | 犬 IVDD 繼發損傷的藥物性神經保護 | 人脊髓損傷 Phase III 試驗，犬安全性資料有限 |
| 擴散張量成像（DTI-MRI） | 犬脊髓白質束完整性的定量評估與預後預測 | 人醫研究成熟，獸醫技術上可行但未標準化 |
| 間充質幹細胞移植 | 犬慢性脊髓損傷的再生醫學治療 | 人醫 Phase I/II 試驗中，犬初步臨床報告存在 |

## 四、臨床爭議與知識空缺 (Controversies & Knowledge Gaps)

| 爭議議題 | 現況 | Evidence Level |
|---------|------|---------------|
| 深痛覺喪失 > 48 小時犬是否仍應嘗試手術 | 少數晚期病例仍恢復，但整體成功率 < 5%，且 PMM 風險增加 | Level III |
| MRI T2 高訊號長度能否可靠預測 PMM | 敏感度高但特異度不足——部分長節段高訊號犬仍可恢復行走能力 | Level III |
| 高劑量 Methylprednisolone（MPSS）在犬 IVDD 的角色 | 人脊髓損傷已棄用 MPSS，但部分獸醫仍使用——副作用風險 > 潛在獲益 | Level I（反對使用） |
| PMM 的精確擴散機轉 | CSF 毒性介質擴散 vs 血管微血栓仍為假說，缺乏動物模型驗證 | Level IV |`,
  clinical_pearl: '判斷 PMM 最早的臨床線索之一是「截斷徵象（cut-off sign）的上行」：正常情況下深痛覺喪失截斷點固定於損傷節段，若截斷點在術後 24-48 小時內向顱側移動（例如從 L1 上移至 T10），高度提示 PMM 正在進行。同時觀察肛門張力——LMN 性肛門鬆弛的出現（原本為 UMN 性 IVDD）也是壞死向尾側擴展的重要證據。',
  common_mistakes: [
    '將所有深痛覺喪失病例都等同於 PMM——PMM 僅佔深痛覺喪失犬的 10-15%，多數仍有手術恢復機會',
    '術後未監測 PMM 進展的臨床徵兆（前肢反射、呼吸型態、截斷徵象上行）',
    '使用高劑量 Methylprednisolone（MPSS）——人醫已有 Level I 證據反對使用，副作用（腸胃穿孔、感染）風險高於潛在獲益',
    '忽略術後血壓管理——低血壓加劇繼發性缺血損傷，是最可控的預後惡化因子',
  ],
  disease_data: null,
  diagnostic_data: null,
  procedure_data: null,
  visual_placeholders: [
    { position: '繼發損傷級聯段落後', type: 'flowchart', description: '脊髓損傷繼發性級聯反應與 PMM 擴散機轉流程圖' },
  ],
  interactive_placeholders: [],
  drug_api_links: ['Mannitol', 'Methylprednisolone'],
  references: [
    { type: 'journal', citation: 'Castel A et al. Clinical characteristics of dogs with progressive myelomalacia following acute intervertebral disc extrusion. J Vet Intern Med. 2017;31(6):1782-1789.', relevance: 'PMM 臨床特徵與預後' },
    { type: 'textbook', citation: 'Platt SR, Olby NJ. BSAVA Manual of Canine and Feline Neurology, 4th ed. BSAVA, 2013.', relevance: '脊髓損傷病理生理基礎' },
    { type: 'journal', citation: 'Olby NJ et al. Long-term functional outcome of dogs with severe injuries of the thoracolumbar spinal cord. J Am Vet Med Assoc. 2003;222(6):762-769.', relevance: '深痛覺喪失犬長期預後數據' },
    { type: 'guideline', citation: 'Moore SA et al. ACVIM consensus statement: approach to the management of acute spinal cord injury. J Vet Intern Med. 2020;34(5):1688-1710.', relevance: '急性脊髓損傷管理共識' },
  ],
  is_current: true,
  created_at: now,
};

/** 神經學檢查 — 診斷型 */
const contentNeuroExam: NodeContent = {
  id: 'CONTENT-NEURO-L4-001',
  node_id: 'NEURO-L4-001',
  version: 1,
  summary: '神經學檢查（Neurological Examination）是獸醫神經科最基礎且最重要的診斷工具。系統性五步驟流程包括：意識評估、步態分析、姿勢反應、脊髓反射與腦神經評估。透過這些檢查結果，臨床醫師可將病灶定位至七大神經解剖區域，並區分 UMN 與 LMN 病灶、中樞性與周邊性前庭疾病。正確執行神經學檢查的定位準確率約 70-80%。',
  learning_objectives: [
    '執行完整的系統性神經學檢查五步驟',
    '正確操作膝蓋反射、屈曲反射、深痛覺測試',
    '區分 UMN 與 LMN 徵象的臨床表現',
    '根據檢查結果定位至七大神經解剖區域',
    '辨識檢查中的常見陷阱（假陽性/假陰性）',
  ],
  key_points: [
    '五步驟流程：意識（Mentation）→ 步態（Gait）→ 姿勢反應（Postural reactions）→ 脊髓反射（Spinal reflexes）→ 腦神經（Cranial nerves）',
    '本體感覺定位（proprioceptive positioning）是最敏感的姿勢反應測試',
    '膝蓋反射（patellar reflex）測試 L4-L6 股四頭肌/股神經',
    '深痛覺測試：止血鉗夾趾骨，觀察有意識的疼痛反應（轉頭/叫喊），非屈曲反射',
    'Panniculus reflex 截斷面可定位脊髓病灶上緣',
    '所有檢查結果需記錄於標準化神經學檢查表',
  ],
  body: `# 神經學檢查

## 一、檢查原理與適應症 (Principles & Indications)



### 檢查前準備
- 安靜環境，減少干擾
- 先讓動物自由活動觀察步態
- 準備工具：反射錘、止血鉗、手電筒、棉花棒

### 系統性五步驟
### Step 1：意識評估
- Alert → Obtunded → Stupor → Coma
- 意識改變提示前腦或腦幹 ARAS 病變

### Step 2：步態分析
- 觀察自由行走、轉彎、上下坡
- 三類共濟失調：本體感覺性、前庭性、小腦性
- 注意對稱性與嚴重度

### Step 3：姿勢反應
- **本體感覺定位（Proprioceptive positioning）**：翻轉腳掌，正常犬立即矯正
- **Hopping**：單肢站立側移，測試整合功能
- 異常提示從皮質到 LMN 任何位置的病變

### Step 4：脊髓反射
- **膝蓋反射**：L4-L6（股神經），正常 +2
- **屈曲反射前肢**：C6-T2，夾趾觀察屈曲
- **屈曲反射後肢**：L4-S1，夾趾觀察屈曲
- **會陰反射**：S1-S3（陰部神經），觸碰肛門觀察收縮
- **Panniculus reflex**：從尾端向頭端逐節刺激皮膚，觀察皮肌收縮消失的截斷面

### Step 5：腦神經
- CN II：威脅反應、PLR、menace response
- CN V：面部感覺、咬肌張力
- CN VII：面部對稱、眼瞼閉合（palpebral reflex）
- CN VIII：頭傾、眼震
- CN IX/X：吞嚥、咽反射
- CN XII：舌頭對稱與運動

## 二、判讀要點 (Interpretation)

判讀結果時需結合臨床表現綜合評估，注意假陽性與假陰性的可能性，必要時進行重複檢測或追加其他檢查。

## 三、常見陷阱 (Pitfalls)

檢查結果的判讀需注意取樣品質、檢體保存條件及個體差異等因素可能導致的誤判。

## 四、人醫借鑒 (Translational Insights)

| 人醫工具/概念 | 獸醫應用潛力 | 現況 |
|-------------|-------------|------|
| 標準化神經功能量表（NIHSS） | 犬神經學檢查的定量評分標準化 | 犬已有 Open Field Score 等但跨機構一致性仍不足 |
| 遠距神經學評估（Teleneurology） | 基層獸醫經視訊諮詢神經科專家判讀步態影片 | 人醫已成熟，獸醫在台灣開始萌芽 |
| AI 輔助步態分析 | 犬步態異常的客觀定量偵測與追蹤 | 感測器與視頻分析研究增加中 |

## 五、臨床爭議與知識空缺 (Controversies & Knowledge Gaps)

| 爭議議題 | 現況 | Evidence Level |
|---------|------|---------------|
| 犬神經學檢查的觀察者間一致性 | 不同經驗程度獸醫的定位準確率差異大（50% vs 80%） | Level III |
| 深痛覺測試的最佳標準化方法 | 止血鉗力道、刺激位置缺乏統一標準，影響 IVDD 分級一致性 | Level IV |`,
  clinical_pearl: '神經學檢查最容易出錯的地方是深痛覺（DPP）測試。正確方法：用止血鉗夾壓趾骨，觀察的是「大腦層級的疼痛感知」——犬會轉頭看向刺激源、發出叫聲或試圖咬人。單純的屈曲反射（肢體回縮）是脊髓反射弧的反應，即使脊髓完全橫斷也可能存在。這個區分直接影響 IVDD 的分級與手術緊急度。',
  common_mistakes: [
    '將屈曲反射誤判為深痛覺——這是最常見也最危險的錯誤',
    '在動物極度緊張時評估反射——緊張的肌肉張力可掩蓋真實的反射狀態',
    '忽略 panniculus reflex 的截斷面定位價值',
    '未系統性地按五步驟執行而遺漏重要發現',
  ],
  disease_data: null,
  diagnostic_data: {
    indication: [
      '任何疑似神經系統疾病的犬貓',
      '急性或慢性步態異常、癱瘓',
      '癲癇發作的病因評估',
      '行為異常或意識改變',
      '外傷後神經功能評估',
    ],
    contraindication: [
      '嚴重多發性創傷需先穩定生命徵象',
      '極度疼痛動物需先鎮痛再進行完整檢查',
      '高度懷疑顱內壓升高時避免過度刺激',
    ],
    technique: '系統性五步驟：1. 意識評估（觀察環境互動）→ 2. 步態（行走/轉彎/上下坡）→ 3. 姿勢反應（本體感覺定位、hopping）→ 4. 脊髓反射（膝蓋反射、屈曲反射、會陰反射、panniculus）→ 5. 腦神經（CN II-XII）。所有結果記錄於標準化檢查表。全程約 15-20 分鐘。',
    normal_findings: [
      { finding: 'Alert 意識', description: '對環境保持警覺，對刺激有適當反應', significance: '排除前腦與腦幹嚴重病變' },
      { finding: '對稱協調步態', description: '四肢對稱運動，無共濟失調', significance: '排除顯著運動通路病變' },
      { finding: '膝蓋反射 +2', description: '適度反射，非亢進非減弱', significance: '排除 L4-L6 LMN 或上位 UMN 病變' },
      { finding: '本體感覺定位正常', description: '翻轉腳掌立即矯正', significance: '最敏感的姿勢反應，正常排除大部分脊髓病變' },
    ],
    abnormal_findings: [
      { finding: '後肢 UMN 輕癱', description: '後肢反射亢進、本體感覺缺損、前肢正常', significance: '定位 T3-L3，最常見原因：IVDD 胸腰段' },
      { finding: '四肢 LMN 癱瘓', description: '四肢反射消失、肌張力降低、意識正常', significance: '多發性神經根炎（ACP）或肉毒桿菌中毒' },
      { finding: '頭傾 + 水平眼震', description: '持續頭傾伴自發性眼震', significance: '前庭系統病變，需區分中樞 vs 周邊' },
      { finding: '深痛覺喪失', description: '夾壓趾骨無有意識疼痛反應', significance: 'Grade V IVDD，需緊急手術' },
    ],
    interpretation_guide: '整合所有結果：1. 有無意識改變？2. 受影響肢體？3. UMN or LMN？4. 對稱 or 不對稱？5. 有無腦神經異常？6. 定位至七大區域。7. 考慮多灶性。',
    pitfalls: [
      '肥胖犬膝蓋反射可能難以引出（非 LMN 病變）',
      '老年犬輕度本體感覺下降可能為正常老化',
      '鎮靜藥物影響意識與反射評估',
      '極度緊張或疼痛的動物反射可能假性亢進',
    ],
    sensitivity_specificity: '有經驗的神經科獸醫神經定位準確率約 70-80%（與 MRI 結果對照）。對病灶定位的敏感度高，但對病因的特異度低。',
    cost_benefit: '無需特殊設備（反射錘、止血鉗、手電筒即可），費時約 15-20 分鐘。是所有進階檢查的前提，正確定位可避免不必要的 MRI 費用。',
  },
  procedure_data: null,
  visual_placeholders: [
    { position: '脊髓反射段落後', type: 'annotated_image', description: '各反射測試操作手法照片' },
  ],
  interactive_placeholders: [
    { position: '文末', type: 'localization_exercise', description: '輸入檢查結果自動定位互動練習' },
  ],
  drug_api_links: [],
  references: [
    { type: 'textbook', citation: 'Platt SR, Olby NJ. BSAVA Manual of Canine and Feline Neurology, 4th ed. BSAVA, 2013.', relevance: '神經學檢查標準教材' },
    { type: 'textbook', citation: 'Dewey CW, da Costa RC. Practical Guide to Canine and Feline Neurology, 3rd ed. Wiley-Blackwell, 2016.', relevance: '神經學檢查實務指南' },
    { type: 'journal', citation: 'Garosi L. Lesion Localization and Differential Diagnosis. In: BSAVA Manual, 4th ed. 2013:1-17.', relevance: '定位診斷方法論' },
    { type: 'guideline', citation: 'De Risio L et al. International veterinary epilepsy task force consensus proposal: diagnostic approach to epilepsy in dogs. BMC Vet Res. 2015;11:148.', relevance: 'IVETF 共識——神經學檢查標準化診斷流程' },
  ],
  is_current: true,
  created_at: now,
};

/** 腦脊髓液分析 — 診斷型 */
const contentCSFAnalysis: NodeContent = {
  id: 'CONTENT-NEURO-L4-002',
  node_id: 'NEURO-L4-002',
  version: 1,
  summary: '腦脊髓液（Cerebrospinal Fluid, CSF）分析是犬貓中樞神經系統疾病的重要診斷工具，對於發炎性（MUO vs 感染性腦炎）與腫瘤性疾病的鑑別尤為關鍵。CSF 採集可經小腦延髓池（cerebellomedullary cistern）或腰椎穿刺（lumbar puncture）進行。分析項目包括外觀、蛋白定量、細胞計數與分類、以及特異性檢測（感染 PCR/抗體、細胞學）。',
  learning_objectives: [
    '描述 CSF 採集的適應症、禁忌症與採集技術',
    '列出 CSF 常規分析項目與正常參考值',
    '根據 CSF 細胞學特徵區分不同疾病類別',
    '說明 CSF 感染性疾病 panel 的組成與臨床意義',
    '辨識 CSF 採集的併發症與風險管理',
  ],
  key_points: [
    '採集位置：小腦延髓池（cisternal puncture，最常用）或 L5-L6 腰椎穿刺',
    '正常 CSF：無色透明、蛋白 < 25 mg/dL、WBC < 5 cells/μL',
    'MUO 典型：淋巴球-單核球增多（50-500 cells/μL）、蛋白輕中度升高',
    '細菌性腦膜炎：嗜中性球增多、蛋白明顯升高、可能混濁',
    'FIP 腦炎（貓）：蛋白極高（常 > 200 mg/dL）、嗜中性球或混合細胞',
    '白蛋白-細胞學解離（albuminocytologic dissociation）：蛋白升高但細胞正常 → ACP、腫瘤',
    '顱內壓升高時 CSF 採集有腦疝風險——需先 MRI 排除佔位性病灶',
  ],
  body: `# 腦脊髓液分析

## 一、檢查原理與適應症 (Principles & Indications)



### 採集技術
### 小腦延髓池穿刺（Cisternal Puncture）
- 全身麻醉，側臥或腹臥位
- 頭部屈曲，枕骨與 C1 椎弓間觸及凹陷
- 22G 脊髓穿刺針垂直進針至硬膜穿破（「pop」感）
- 觀察 CSF 自然流出，收集 0.5-1 mL

### 腰椎穿刺（Lumbar Puncture）
- L5-L6 或 L6-L7 椎間隙進針
- 適用於腰薦段病變定位
- 犬較大型者操作較容易

### CSF 細胞學模式
| 模式 | 主要細胞 | 常見病因 |
|------|---------|---------|
| 淋巴球增多 | 淋巴球 > 50% | MUO、病毒性腦炎 |
| 嗜中性球增多 | 嗜中性球 > 50% | 細菌性腦膜炎、FIP、steroid-responsive meningitis-arteritis |
| 混合細胞增多 | 淋巴球+嗜中性球 | Toxoplasma/Neospora、真菌、部分 MUO |
| 嗜酸球增多 | 嗜酸球 > 10% | 寄生蟲移行、Cryptococcus（部分） |

### 特異性檢測
- **感染 panel**：Toxoplasma IgG/IgM、Neospora IgG、CDV PCR、Cryptococcus Ag
- **腫瘤細胞學**：淋巴瘤可能見到異型淋巴球
- **白蛋白指數（Albumin quotient）**：評估 BBB 完整性

## 二、判讀要點 (Interpretation)

### 常規分析
| 項目 | 正常值 | 臨床意義 |
|------|--------|---------|
| 外觀 | 無色透明 | 混濁提示感染/高細胞；血性提示出血或穿刺汙染 |
| 蛋白 | < 25 mg/dL | 升高見於發炎、腫瘤、出血 |
| WBC | < 5 cells/μL | 升高為 pleocytosis |
| RBC | 0 | 穿刺汙染 vs 蛛網膜下腔出血（離心後上清液黃染 = 出血） |

## 三、常見陷阱 (Pitfalls)

檢查結果的判讀需注意取樣品質、檢體保存條件及個體差異等因素可能導致的誤判。

## 四、人醫借鑒 (Translational Insights)

| 人醫工具/概念 | 獸醫應用潛力 | 現況 |
|-------------|-------------|------|
| CSF 多標記 panel（NfL/GFAP/Tau） | 犬 CNS 疾病的生物標記輔助鑑別診斷 | 人醫 CSF NfL 已商業化，犬 NfL ELISA 研究中 |
| 次世代定序 CSF mNGS（metagenomic NGS） | 犬不明原因腦炎的廣譜病原偵測 | 人醫已臨床應用，獸醫少數研究機構開始探索 |
| 流式細胞術 CSF 免疫表型分析 | 犬 CNS 淋巴瘤的精確分型（B vs T cell） | 人醫標準，獸醫需專門實驗室 |

## 五、臨床爭議與知識空缺 (Controversies & Knowledge Gaps)

| 爭議議題 | 現況 | Evidence Level |
|---------|------|---------------|
| Cisternal vs lumbar CSF 採集的安全性與診斷價值差異 | 枕骨大孔穿刺在後顱窩佔位病灶時的腦疝風險 vs 腰椎穿刺的較低敏感度 | Level III |
| CSF 採集後 30 分鐘處理的嚴格性 | 臨床上常難以在 30 分鐘內完成分析，延遲對細胞計數的影響程度不一 | Level IV |
| MUO 治療追蹤中重複 CSF 採集的價值 | 部分專家依據 CSF 調整免疫抑制劑，但重複穿刺的風險-效益比未有共識 | Level IV |
| CSF 正常但臨床高度懷疑 MUO 的處理 | 局灶性 GME 的 CSF 可能正常——是否直接開始免疫抑制治療存在爭議 | Level III |`,
  clinical_pearl: 'CSF 採集前必須先做腦部 MRI（或至少 CT）。原因是：如果有佔位性病灶（腫瘤、膿瘍）導致顱內壓升高，CSF 採集時突然降低後顱窩壓力可能誘發小腦扁桃體疝（cerebellar herniation），這是致命性的併發症。MRI 正常或僅見瀰漫性變化時，CSF 採集通常安全。',
  common_mistakes: [
    '未先做 MRI 排除佔位性病灶即進行 CSF 採集（腦疝風險）',
    '穿刺汙染（血性 CSF）卻未做離心鑑別（xanthochromia 區分穿刺汙染 vs 真正出血）',
    'CSF 採集後未在 30 分鐘內處理（細胞會迅速退化影響計數與分類準確性）',
    '僅送常規分析而未加做感染 panel（可能遺漏可治療的感染性腦炎）',
  ],
  disease_data: null,
  diagnostic_data: {
    indication: [
      '疑似中樞神經系統發炎性疾病（MUO、感染性腦炎）',
      'MRI 顯示腦部或脊髓病變需進一步鑑別',
      '癲癇發作的病因評估（排除結構性/發炎性原因）',
      '治療反應評估（MUO 追蹤）',
    ],
    contraindication: [
      '未做 MRI 排除佔位性病灶時（腦疝風險）',
      '嚴重凝血障礙（出血風險）',
      '嚴重顱內壓升高的臨床證據（昏迷、Cushing response）',
      '穿刺部位感染',
    ],
    technique: '全身麻醉側臥位，頭部屈曲。小腦延髓池穿刺：觸及枕骨與 C1 椎弓間凹陷，22G 脊髓穿刺針垂直進針，穿過韌帶與硬膜（pop 感），拔出針芯觀察 CSF 自然流出。收集 0.5-1 mL 入 EDTA 管（細胞計數）與無菌管（培養/PCR）。30 分鐘內處理。',
    normal_findings: [
      { finding: '無色透明', description: 'CSF 清澈如水', significance: '排除出血、嚴重感染、高蛋白' },
      { finding: 'WBC < 5 cells/μL', description: '極少量單核球', significance: '排除 CNS 發炎性疾病' },
      { finding: '蛋白 < 25 mg/dL', description: '低蛋白含量', significance: 'BBB 完整' },
    ],
    abnormal_findings: [
      { finding: '淋巴球增多 200 cells/μL', description: '大量小淋巴球伴少量巨噬細胞', significance: 'MUO 高度懷疑（排除感染後）' },
      { finding: '嗜中性球增多', description: '大量嗜中性球（可能退化性）', significance: '細菌性腦膜炎、SRMA、FIP' },
      { finding: '蛋白 300 mg/dL + 嗜中性球', description: '蛋白極度升高伴嗜中性球', significance: '貓 FIP 腦炎高度懷疑' },
      { finding: '蛋白升高 + 細胞正常', description: '白蛋白-細胞學解離', significance: 'ACP、脊髓腫瘤、BBB 輕度破壞' },
    ],
    interpretation_guide: '1. 外觀（清澈/混濁/血性）→ 2. 蛋白與細胞是否同步升高 → 3. 細胞分類模式（淋巴球/嗜中性球/混合/嗜酸球）→ 4. 結合 MRI 與臨床表現 → 5. 感染 panel 結果整合。',
    pitfalls: [
      '穿刺汙染可使 WBC 假性升高——每 500 RBC 約增加 1 WBC',
      'CSF 放置超過 30 分鐘細胞退化顯著',
      '部分 MUO 病例 CSF 可能正常（尤其局灶性 GME）',
      '腰椎穿刺的蛋白正常值較小腦延髓池高（< 45 mg/dL）',
    ],
    sensitivity_specificity: 'CSF 分析對 CNS 發炎性疾病的敏感度約 80-90%，但特異度有限——需結合 MRI、感染 panel 與臨床表現。對腫瘤的敏感度較低（約 50%），腫瘤細胞 CSF 脫落率低。',
    cost_benefit: '費用中等（包含麻醉與分析費用），但對 MUO vs 感染性腦炎的鑑別價值極高。可避免不必要的免疫抑制治療或遺漏可治療的感染。',
  },
  procedure_data: null,
  visual_placeholders: [
    { position: '採集技術段落後', type: 'annotated_image', description: '小腦延髓池穿刺定位與操作圖' },
  ],
  interactive_placeholders: [],
  drug_api_links: [],
  references: [
    { type: 'textbook', citation: 'Platt SR, Olby NJ. BSAVA Manual of Canine and Feline Neurology, 4th ed. BSAVA, 2013.', relevance: 'CSF 分析標準參考' },
    { type: 'journal', citation: 'Di Terlizzi R, Platt SR. The function, composition and analysis of cerebrospinal fluid in companion animals. Vet J. 2009;180(1):15-32.', relevance: 'CSF 分析綜合回顧' },
    { type: 'textbook', citation: 'Dewey CW, da Costa RC. Practical Guide to Canine and Feline Neurology, 3rd ed. Wiley-Blackwell, 2016.', relevance: 'CSF 採集技術與判讀' },
    { type: 'guideline', citation: 'De Risio L et al. International veterinary epilepsy task force consensus proposal: diagnostic approach to epilepsy in dogs. BMC Vet Res. 2015;11:148.', relevance: 'IVETF 共識——CSF 分析在癲癇診斷中的角色' },
  ],
  is_current: true,
  created_at: now,
};

/** 神經影像學 (MRI/CT) — 診斷型 */
const contentNeuroImaging: NodeContent = {
  id: 'CONTENT-NEURO-L4-003',
  node_id: 'NEURO-L4-003',
  version: 1,
  summary: '神經影像學是獸醫神經科確診的核心工具。MRI 為中樞神經系統疾病的金標準影像，提供卓越的軟組織對比解析度。CT 在骨骼結構評估與急診快速掃描方面有優勢。MRI 基礎序列包括 T1W、T2W、FLAIR 與 T1W+Gd（對比增強），不同疾病有其特徵性影像模式。',
  learning_objectives: [
    '比較 MRI 與 CT 在神經科疾病中的適應症',
    '描述 MRI 基礎序列（T1W、T2W、FLAIR、Gd-T1W）的訊號特性',
    '辨識常見神經疾病的 MRI 特徵性表現',
    '說明 Gadolinium 對比增強的原理與臨床意義',
    '列出 MRI/CT 的禁忌症與限制',
  ],
  key_points: [
    'MRI 為 CNS 疾病金標準：軟組織對比優異，可偵測脊髓訊號變化',
    'CT 優勢：骨骼結構、急診快速（5-10 分鐘 vs MRI 30-60 分鐘）、鈣化偵測',
    'T1W：解剖結構佳，脂肪亮、水暗、灰質比白質暗',
    'T2W：水亮（水腫/發炎亮訊號），最敏感偵測病變',
    'FLAIR：T2W 但抑制 CSF 訊號，periventricular 病灶更清楚',
    'Gd-T1W：BBB 破壞處或血管豐富區域增強 → 腫瘤、活動性發炎',
    'IVDD MRI：T2W 見脊髓高訊號（水腫/壞死），椎間盤突出物可見',
  ],
  body: `# 神經影像學

## 一、檢查原理與適應症 (Principles & Indications)



### MRI vs CT 比較
| 特性 | MRI | CT |
|------|-----|-----|
| 軟組織對比 | 優異 | 中等 |
| 骨骼評估 | 有限 | 優異 |
| 掃描時間 | 30-60 分鐘 | 5-10 分鐘 |
| 費用 | 較高 | 較低 |
| 麻醉需求 | 全麻（不能動） | 全麻（較短） |
| 脊髓訊號 | 可直接評估 | 需 myelography |
| 金屬植入物 | 禁忌（多數） | 可 |

### MRI 基礎序列
### T1-weighted (T1W)
- 脂肪 = 亮，水 = 暗，灰質 < 白質（白質較亮）
- 最佳解剖結構顯示
- 加 Gadolinium 後用於評估增強

### T2-weighted (T2W)
- 水 = 亮，脂肪 = 中亮，灰質 > 白質
- 最敏感偵測病變（水腫、發炎、壞死均為高訊號）
- 脊髓疾病必看序列

### FLAIR (Fluid-Attenuated Inversion Recovery)
- 類似 T2W 但抑制自由水（CSF 變暗）
- 腦室旁病灶更清楚
- 腦膜增強評估有用

### Gadolinium 增強 T1W
- BBB 破壞處 Gadolinium 漏出 → T1 增強（變亮）
- 腫瘤、活動性發炎、膿瘍壁增強
- 環狀增強（ring enhancement）提示膿瘍或壞死性腫瘤中心

### 常見疾病影像特徵
| 疾病 | T2W | T1W | Gd-T1W |
|------|-----|-----|--------|
| IVDD | 脊髓高訊號、突出物 | 脊髓等至低訊號 | 通常不增強 |
| MUO | 多灶高訊號 | 低至等訊號 | 不規則增強 |
| 腦腫瘤 | 高訊號腫塊 | 低至等訊號 | 均勻或環狀增強 |
| 腦梗塞 | 楔形高訊號 | 低訊號 | 亞急性期可增強 |
| DM | 通常正常 | 正常 | 不增強 |

## 二、判讀要點 (Interpretation)

判讀結果時需結合臨床表現綜合評估，注意假陽性與假陰性的可能性，必要時進行重複檢測或追加其他檢查。

## 三、常見陷阱 (Pitfalls)

檢查結果的判讀需注意取樣品質、檢體保存條件及個體差異等因素可能導致的誤判。

## 四、人醫借鑒 (Translational Insights)

| 人醫工具/概念 | 獸醫應用潛力 | 現況 |
|-------------|-------------|------|
| 7T MRI 超高場強影像 | 犬微小腦病灶偵測（如皮質發育不全、海馬硬化） | 人醫漸普及用於癲癇灶定位，獸醫極少數機構擁有 |
| MRI DTI（擴散張量成像） | 犬脊髓白質完整性定量評估，預測 IVDD 術後恢復 | 人醫脊髓損傷標準，犬研究文獻增加中 |
| AI 輔助 MRI 自動判讀 | 犬腦腫瘤 vs MUO 的 MRI 鑑別輔助與腫瘤分級 | 人醫多款 AI 已 FDA 核准，犬初步研究中 |
| PET-CT 腦代謝影像 | 犬腦腫瘤分級與代謝活性評估 | 人醫標準工具，獸醫僅少數研究中心可執行 |

## 五、臨床爭議與知識空缺 (Controversies & Knowledge Gaps)

| 爭議議題 | 現況 | Evidence Level |
|---------|------|---------------|
| 犬 MRI 最低場強標準（低場 vs 高場） | 低場（0.2-0.4T）MRI 在台灣仍在使用，但對微小病灶（如海馬硬化）的敏感度遠低於 1.5T/3T | Level III |
| T2W 脊髓高訊號作為 IVDD 預後指標的可靠度 | 高訊號可代表水腫（可逆）或壞死（不可逆），單憑 MRI 難以區分 | Level III |
| MUO vs 腦腫瘤的 MRI 鑑別準確率 | 單靠 MRI 特徵鑑別 MUO 與低度惡性腦瘤準確率約 80%，需 CSF 或病理佐證 | Level II |
| 犬 MRI protocol 跨機構標準化 | 各機構使用不同場強、序列與切面厚度，影響跨機構影像比較與多中心研究 | Level IV |`,
  clinical_pearl: 'MRI 的 T2W 脊髓高訊號在 IVDD 中具有預後意義——高訊號越廣泛，代表脊髓水腫或壞死越嚴重，預後越差。但注意：T2W 高訊號可以是水腫（可逆）也可以是壞死/軟化（不可逆），需結合臨床分級判斷。Grade V 合併廣泛 T2 高訊號的預後最差。',
  common_mistakes: [
    '混淆 T1W 與 T2W 的訊號特性——記住「T2 = 水亮」',
    '未加做 Gadolinium 增強就下結論——增強模式對腫瘤 vs MUO 鑑別至關重要',
    '將 DM 犬的正常 MRI 誤認為「沒有問題」——DM 的 MRI 通常正常，這恰恰是排除性診斷的一部分',
    '忽略 MRI 的金屬禁忌——有骨科植入物的動物需確認 MRI 相容性',
  ],
  disease_data: null,
  diagnostic_data: {
    indication: [
      '神經學檢查定位後需確認病灶位置與性質',
      '癲癇（排除結構性病因）',
      'IVDD Grade III-V 術前定位',
      '疑似顱內腫瘤或發炎性疾病',
      '慢性進行性脊髓疾病鑑別',
    ],
    contraindication: [
      'MRI：金屬植入物（多數）、心臟起搏器',
      '全身麻醉禁忌（嚴重心肺疾病未穩定）',
      'CT myelography：碘過敏（罕見）',
    ],
    technique: '全身麻醉後置於掃描台。腦部 MRI 標準序列：sagittal T2W → transverse T2W → transverse FLAIR → transverse T1W → IV Gadolinium 0.1 mmol/kg → transverse & sagittal Gd-T1W。脊椎 MRI：sagittal T2W → transverse T2W（病灶處）→ sagittal T1W → Gd-T1W（如需）。',
    normal_findings: [
      { finding: '對稱的腦結構', description: '左右大腦半球對稱，腦室系統正常大小', significance: '排除佔位性病灶與水腦症' },
      { finding: '脊髓訊號均勻', description: 'T2W 脊髓呈均勻中等訊號', significance: '排除脊髓壓迫與髓內病變' },
      { finding: '無異常增強', description: 'Gd-T1W 無異常增強區域', significance: '排除活動性腫瘤或發炎' },
    ],
    abnormal_findings: [
      { finding: 'T2W 脊髓高訊號 + 椎間盤突出', description: '脊髓壓迫處 T2W 高訊號、突出物於椎管內可見', significance: 'IVDD 確診，高訊號範圍提示預後' },
      { finding: '多灶性腦實質 T2 高訊號 + Gd 增強', description: '多處散布的 T2 高訊號病灶伴不規則增強', significance: 'MUO 高度懷疑（需 CSF 佐證）' },
      { finding: '單一腫塊伴均勻 Gd 增強', description: '邊界清楚的腫塊，T1W 等至低訊號，均勻增強', significance: '腦膜瘤（meningioma）高度懷疑' },
      { finding: '楔形 T2 高訊號，血管分布區', description: '符合血管供應區域的楔形病灶', significance: '腦梗塞（cerebrovascular accident）' },
    ],
    interpretation_guide: '1. 系統性評估所有序列 → 2. T2W 偵測病變（最敏感）→ 3. T1W 評估解剖與出血 → 4. FLAIR 評估腦室旁與腦膜 → 5. Gd-T1W 評估 BBB 破壞與血管性 → 6. 結合定位與臨床特徵作綜合判斷。',
    pitfalls: [
      'Magic angle artifact 可在脊髓周圍產生假性高訊號',
      '慢性出血在 T1W 可為高訊號（methemoglobin），需與增強區分',
      '小型犬的正常 MRI 可能因體型而被過度解讀',
      'Motion artifact 可導致假性病灶',
    ],
    sensitivity_specificity: 'MRI 對 CNS 病變的敏感度 > 90%，但特異度因疾病而異。對 IVDD 幾乎 100% 敏感。對 MUO vs 腫瘤的鑑別特異度約 80%（需結合 CSF）。',
    cost_benefit: '費用較高但提供其他工具無法替代的資訊。對 IVDD 手術定位不可或缺。對 MUO 診斷與腫瘤手術規劃至關重要。',
  },
  procedure_data: null,
  visual_placeholders: [
    { position: 'MRI 序列段落後', type: 'comparison_table', description: 'T1W/T2W/FLAIR/Gd-T1W 相同病灶對比圖' },
  ],
  interactive_placeholders: [],
  drug_api_links: [],
  references: [
    { type: 'textbook', citation: 'Gavin PR, Bagley RS. Practical Small Animal MRI. Wiley-Blackwell, 2009.', relevance: '小動物 MRI 實務教材' },
    { type: 'textbook', citation: 'Platt SR, Olby NJ. BSAVA Manual of Canine and Feline Neurology, 4th ed. BSAVA, 2013.', relevance: '神經影像學章節' },
    { type: 'journal', citation: 'Cervera V et al. Diagnosis and treatment of intracranial disease. Vet Clin North Am Small Anim Pract. 2014;44(6):1157-1185.', relevance: '顱內疾病影像診斷' },
    { type: 'guideline', citation: 'De Risio L et al. International veterinary epilepsy task force consensus proposal: diagnostic approach to epilepsy in dogs. BMC Vet Res. 2015;11:148.', relevance: 'IVETF 共識——MRI 在癲癇分層診斷中的角色' },
  ],
  is_current: true,
  created_at: now,
};

/** 抗癲癇藥物治療 — 治療型 */
const contentAEDTherapy: NodeContent = {
  id: 'CONTENT-NEURO-L5-001',
  node_id: 'NEURO-L5-001',
  version: 1,
  summary: '抗癲癇藥物（Antiepileptic Drugs, AEDs）治療是犬特發性癲癇的長期管理核心。治療起始標準依據 IVETF 共識，一線藥物為 Phenobarbital（PB）與 Potassium Bromide（KBr），新一代包括 Levetiracetam（LEV）與 Zonisamide（ZNS）。治療目標為減少發作頻率 > 50%，同時維持可接受的生活品質。藥物治療需長期監測血中濃度與副作用。',
  learning_objectives: [
    '依據 IVETF 共識判斷 AED 治療起始時機',
    '選擇適當的一線與二線 AED 並說明理由',
    '制定 AED 監測計畫（血中濃度、肝功能）',
    '處理藥物難治性癲癇的治療策略',
    '向飼主說明長期 AED 治療的期望與注意事項',
  ],
  key_points: [
    '治療起始標準：cluster seizures、status epilepticus、發作 > 2 次/6 個月、嚴重 post-ictal',
    'PB 一線：2-5 mg/kg PO BID，目標血中濃度 15-35 μg/mL，2-3 週達穩態',
    'KBr 一線（替代或附加）：20-30 mg/kg PO SID，穩態需 2-3 個月',
    'LEV 二線：20 mg/kg PO TID（合併 PB 時可能需更高劑量），honeymoon effect',
    'ZNS 二線：5-10 mg/kg PO BID',
    '難治性癲癇定義：兩種適當 AED 治療濃度使用仍無法控制',
    'PB 肝毒性需每 6 個月監測 ALT/ALP/膽汁酸',
  ],
  body: `# 抗癲癇藥物治療

## 一、治療原理 (Treatment Principles)



### 治療起始標準（IVETF 共識）
開始長期 AED 的指征：
1. 首次 cluster seizures 或 status epilepticus
2. 發作頻率 > 2 次/6 個月
3. 嚴重或延長的 post-ictal 期
4. 發作嚴重度或頻率呈增加趨勢

### 難治性癲癇處理
定義：兩種適當 AED 以治療劑量使用仍無法有效控制

策略：
1. 確認診斷正確（排除結構性病因）
2. 確認藥物依從性（飼主是否按時給藥）
3. 確認血中濃度在治療範圍
4. 嘗試不同 AED 組合
5. 考慮迷走神經刺激（VNS，有限經驗）

### 緊急處置：癲癇重積狀態
急救順序：
1. [藥物:Diazepam] 0.5-1 mg/kg IV（或 per rectum 1-2 mg/kg）
2. [藥物:Levetiracetam] 30-60 mg/kg IV
3. [藥物:Phenobarbital] 2-4 mg/kg IV q20-30min（最多 16-24 mg/kg/24hr）
4. 難治性 SE：[藥物:Propofol] CRI 或 [藥物:Midazolam] CRI

## 二、藥物/方法比較 (Comparison)

### 一線藥物
### Phenobarbital (PB)
- 機轉：增強 GABA-A 受體功能
- 劑量：2-5 mg/kg PO BID
- 穩態：2-3 週
- 目標血中濃度：15-35 μg/mL
- 副作用：鎮靜（初期）、多飲多食多尿、肝毒性（長期）
- 監測：起始後 2-3 週測穩態濃度，之後每 6 個月 PB 濃度 + 肝功能

### Potassium Bromide (KBr)
- 機轉：Cl⁻ 通道穩定
- 劑量：20-30 mg/kg PO SID（合併 PB）或 30-40 mg/kg（單用）
- 穩態：2-3 個月（可給 loading dose 縮短）
- 目標血中濃度：1-3 mg/mL（合併 PB）或 2-3 mg/mL（單用）
- 副作用：腸胃不適、後肢共濟失調、嗜睡
- 注意：**貓禁用**（引發致命性嗜酸球性支氣管炎）

### 二線藥物
| 藥物 | 劑量 | 優勢 | 注意事項 |
|------|------|------|---------|
| Levetiracetam | 20 mg/kg PO TID | 副作用少、可 IV | Honeymoon effect、合併 PB 需更高劑量 |
| Zonisamide | 5-10 mg/kg PO BID | BID 給藥方便 | 鎮靜、食慾下降 |

## 三、併發症與監控 (Complications & Monitoring)

### AED 主要副作用與監測
- **Phenobarbital 肝毒性**：最嚴重的長期副作用——慢性肝炎、肝纖維化，嚴重時致肝衰竭。需每 6 個月監測 ALT/ALP/膽汁酸
- **PB 急性鎮靜與多飲多食多尿**：起始 1-2 週最明顯，多數犬可逐漸耐受
- **KBr 溴中毒**：後肢共濟失調、嗜睡加重、腸胃不適——高鈉飲食變化可突然改變血中濃度
- **LEV Honeymoon effect**：初期效果顯著但可能在數月後減弱，需增加劑量或加藥
- **緊急 SE 藥物的呼吸抑制**：Diazepam/Propofol CRI 需監測呼吸，備妥插管設備

### 監控計畫
| 時間點 | 監測項目 | 目標 |
|--------|---------|------|
| AED 起始後 2-3 週 | PB 穩態血中谷值濃度 | 15-35 μg/mL |
| 每 6 個月 | PB 濃度 + ALT/ALP/膽汁酸 | 濃度在範圍且肝功能正常 |
| KBr 起始 3 個月 | KBr 穩態血中濃度 | 1-3 mg/mL（合併 PB）或 2-3 mg/mL（單用） |
| 持續 | 飼主發作日誌（頻率/型態/持續時間/post-ictal） | 發作頻率降低 > 50% |

## 四、預後影響 (Prognostic Impact)

- **PB 單藥治療反應良好**：約 60-70% 的 IE 犬可達滿意控制，平均壽命接近正常
- **多藥方案仍控制不佳**：約 20-30% 為藥物難治性，需持續調整方案，生活品質受影響
- **突發 SE 風險**：即使控制良好的犬仍有 SE 風險，飼主需備有直腸 Diazepam 急救
- **預後良好因子**：首次發作年齡 1-5 歲、低初始發作頻率、對首線 AED 治療濃度反應良好
- **預後不良因子**：首發即 cluster/SE、高發作頻率（> 1 次/月）、多藥治療濃度仍無效、品種（Border Collie 藥物反應差）

## 五、人醫借鑒 (Translational Insights)

| 人醫工具/概念 | 獸醫應用潛力 | 現況 |
|-------------|-------------|------|
| 新一代 AED（Cenobamate/Fenfluramine） | 犬難治性癲癇的新藥選擇 | 人醫 Cenobamate 療效突出，犬 PK 研究起步 |
| 迷走神經刺激（VNS）植入 | 犬藥物難治性癲癇的長期非藥物輔助 | 人醫超過 20 年經驗，犬少數病例報告 |
| 治療藥物監測（TDM）藥理遺傳學 | 犬 CYP 酵素多態性指導 AED 個別化劑量 | 人醫精準醫學趨勢，犬 CYP 研究初期 |
| 閉迴路反應性神經刺激（RNS） | 犬局灶性癲癇的即時偵測與刺激阻斷發作 | 人醫 FDA 核准，獸醫僅概念階段 |

## 六、臨床爭議與知識空缺 (Controversies & Knowledge Gaps)

| 爭議議題 | 現況 | Evidence Level |
|---------|------|---------------|
| LEV 作為犬癲癇一線 AED 的定位 | 副作用少但需 TID 給藥且 honeymoon effect 爭議——是否能取代 PB 為一線仍缺乏頭對頭 RCT | Level II |
| AED 起始時機：首次發作 vs 達 IVETF 標準 | 早期治療可能改善長期預後（kindling 假說），但首次發作即治療的證據不足 | Level III |
| 難治性癲癇的定義標準 | 兩種 AED 治療濃度失敗 vs 三種——標準不統一影響臨床試驗收案與治療決策 | Level IV |
| PB 長期使用的停藥可能性 | 長期無發作的犬是否可嘗試逐漸減量停藥——突然停藥可誘發 SE，但長期使用肝毒性累積 | Level IV |`,
  clinical_pearl: '「發作日誌」是管理癲癇犬的最重要工具之一。要求飼主記錄每次發作的日期、時間、持續時間、類型（局灶/全身）與 post-ictal 嚴重度。這不僅用於評估治療效果，也能幫助辨識 cluster seizure 模式和預警惡化趨勢。用手機拍攝發作影片更可幫助區分發作類型。',
  common_mistakes: [
    '首次單一發作即開始長期 AED（需達到治療起始標準）',
    '僅憑臨床改善就停止 PB 血中濃度監測——肝毒性可在控制良好時發生',
    'KBr 用於貓（貓對 Br⁻ 極度敏感，引發致命性嗜酸球性支氣管炎）',
    '突然停用 PB 而非逐漸減量（突然停藥可誘發 status epilepticus）',
    '忽略 PB 的酵素誘導效應對 LEV 的影響——合併使用時 LEV 可能需 TID 或更高劑量',
  ],
  disease_data: null,
  diagnostic_data: null,
  procedure_data: null,
  visual_placeholders: [
    { position: '一線藥物段落後', type: 'comparison_table', description: '四種 AED 完整比較表' },
    { position: '緊急處置段落', type: 'flowchart', description: '癲癇重積狀態急救流程圖' },
  ],
  interactive_placeholders: [],
  drug_api_links: ['Phenobarbital', 'Potassium Bromide', 'Levetiracetam', 'Zonisamide', 'Diazepam', 'Propofol', 'Midazolam'],
  references: [
    { type: 'guideline', citation: 'Podell M et al. 2015 ACVIM Small Animal Consensus Statement on Seizure Management in Dogs. J Vet Intern Med. 2016;30(2):477-490.', relevance: 'AED 管理共識' },
    { type: 'guideline', citation: 'Bhatt M et al. IVETF consensus proposal: medical treatment of canine epilepsy in Europe. BMC Vet Res. 2015;11:176.', relevance: 'IVETF 治療共識' },
    { type: 'textbook', citation: 'Platt SR, Olby NJ. BSAVA Manual of Canine and Feline Neurology, 4th ed. BSAVA, 2013.', relevance: '癲癇治療章節' },
    { type: 'journal', citation: 'Munana KR et al. Use of levetiracetam as adjunctive treatment for refractory canine epilepsy: a randomized, placebo-controlled crossover trial. J Vet Intern Med. 2012;26(2):341-348.', relevance: 'Levetiracetam RCT——AED 臨床試驗證據' },
  ],
  is_current: true,
  created_at: now,
};

/** 脊椎手術基礎 — 治療型 */
const contentSpinalSurgery: NodeContent = {
  id: 'CONTENT-NEURO-L5-002',
  node_id: 'NEURO-L5-002',
  version: 1,
  summary: '脊椎手術是犬壓迫性脊髓疾病（IVDD、脊椎腫瘤、骨折/脫位）的主要治療手段。核心術式包括 hemilaminectomy（半椎板切除，胸腰椎首選）、ventral slot（腹側椎間開窗，頸椎首選）與 dorsal laminectomy（背側椎板切除，適用於特定情況）。手術目標為脊髓減壓（decompression）與突出物移除。術後管理包括疼痛控制、膀胱管理與神經科復健。',
  learning_objectives: [
    '比較 hemilaminectomy、ventral slot 與 dorsal laminectomy 的適應症',
    '描述 hemilaminectomy 的手術步驟與關鍵解剖標記',
    '說明術後膀胱管理的重要性與方法',
    '制定脊椎手術後的復健計畫',
    '辨識術後併發症（PMM、傷口感染、植入物失敗）',
  ],
  key_points: [
    'Hemilaminectomy：胸腰椎 IVDD 首選，單側移除椎弓板暴露椎管',
    'Ventral slot：頸椎 IVDD 首選，從椎體腹側進入椎管',
    '手術時機：Grade V（DPP 喪失）為緊急手術適應症（< 24-48 hr）',
    'Grade IV 術後步行恢復率 > 90%，Grade V < 48hr DPP 喪失約 50-60%',
    '術後膀胱管理：Grade ≥ 3 需每日手動擠壓或導尿直到自主排尿恢復',
    '術後復健：被動關節運動、站立訓練、水療加速恢復',
    'PMM 為最嚴重併發症——術後神經功能持續惡化需高度懷疑',
  ],
  body: `# 脊椎手術基礎

## 一、治療原理 (Treatment Principles)



### Hemilaminectomy 手術步驟
1. 背正中皮膚切口，偏向壓迫側
2. 分離椎旁肌肉暴露椎板
3. 以高速鑽（pneumatic burr）移除一側椎弓板與部分椎弓根
4. 暴露硬膜外腔
5. 小心移除突出的椎間盤物質（dental spoon / suction）
6. 確認脊髓減壓充分
7. 以明膠海綿（Gelfoam）止血
8. 逐層閉合

### Ventral Slot 手術步驟
1. 腹側頸部切口
2. 分離食道氣管至椎體腹側
3. 在目標椎間隙以高速鑽製作矩形骨窗
4. 穿過纖維環進入椎管
5. 移除腹側突出物
6. 注意不可過度擴大 slot（> 椎體寬 1/3 可致不穩定）

### 術後管理
### 疼痛控制
- [藥物:Methadone] 0.1-0.3 mg/kg IV q4-6h（住院）
- 出院：[藥物:Gabapentin] 5-10 mg/kg PO BID-TID + NSAIDs

### 膀胱管理
- Grade ≥ 3：每 6-8 小時手動擠壓膀胱或間歇導尿
- UMN 膀胱：膀胱膨大、括約肌張力高、難擠壓
- 監測尿液感染（尿液分析 + 培養）

### 神經科復健
- 第 1-2 週：被動關節運動（PROM）、站立訓練
- 第 2-4 週：輔助行走、水療
- 第 4-8 週：漸進性增加活動量

## 二、藥物/方法比較 (Comparison)

### 術式選擇
| 術式 | 適應症 | 進入方式 |
|------|--------|---------|
| Hemilaminectomy | 胸腰椎 IVDD（T3-L7） | 單側移除椎弓板與椎弓根 |
| Ventral slot | 頸椎 IVDD（C2-C7） | 椎體腹側鑽入椎管 |
| Dorsal laminectomy | 頸椎背側壓迫、Wobbler syndrome | 背側椎板切除 |

## 三、併發症與監控 (Complications & Monitoring)

### 術後主要併發症
- **進行性脊髓軟化（PMM）**：最嚴重——約 2-5% 的 Grade V 術後出現，不可逆的上行性/下行性脊髓壞死，通常致命
- **術後感染（椎間盤炎/傷口感染）**：發熱、傷口滲液、新發疼痛——需長期抗生素（6-8 週）
- **尿路感染**：Grade ≥ 3 術後膀胱管理期間最常見的可預防併發症
- **植入物失敗/椎體不穩定**：Ventral slot 過寬導致椎體塌陷為毀滅性併發症
- **鄰近椎間隙 IVDD 復發**：術後同區域或鄰近椎間隙再次突出，復發率約 5-10%

### 術後監控計畫
| 時間點 | 監測項目 | 目標 |
|--------|---------|------|
| 術後 24-72 小時 | 每 4-6 小時神經學檢查（步態/DPP/反射） | 確認穩定或改善——持續惡化需懷疑 PMM |
| 術後持續 | 膀胱管理（每 6-8 小時擠壓/導尿） | 殘餘尿量 < 10 mL 可停止 |
| 術後 2 週 | 傷口檢查、縫合拆除 | 傷口無感染 |
| 術後 4-8 週 | 神經學檢查 + 復健評估 | 功能恢復進度追蹤 |

## 四、預後影響 (Prognostic Impact)

- **Grade I-II IVDD 保守治療 vs 手術**：保守治療成功率 > 85%，但復發率 30-40%；手術復發率較低
- **Grade III 手術**：步行恢復率 > 95%，多數在 2-4 週內恢復
- **Grade IV 手術**：步行恢復率 > 90%，需數週至數月復健
- **Grade V（DPP 喪失 < 48 hr）手術**：步行恢復率約 50-60%，需積極復健
- **Grade V（DPP 喪失 > 48 hr）**：預後極差——步行恢復率 < 5%，PMM 風險高
- **頸椎 IVDD（ventral slot）**：整體預後良好，步行恢復率 > 90%

## 五、人醫借鑒 (Translational Insights)

| 人醫工具/概念 | 獸醫應用潛力 | 現況 |
|-------------|-------------|------|
| 微創脊椎手術（MIS）/內視鏡椎間盤切除 | 犬 IVDD 的微創替代術式（減少肌肉損傷與恢復時間） | 人醫標準術式，犬初步嘗試但器械尺寸為限制 |
| 脊髓灌注壓力（SCPP）監測 | 犬急性脊髓損傷術中/術後的灌注壓力目標導向治療 | 人醫 SCI 已建立 SCPP 目標，犬研究起步 |
| 神經保護劑（Riluzole/Minocycline） | 犬急性 IVDD 術後的輔助神經保護 | 人醫 SCI 臨床試驗中，犬 Riluzole PK 研究開始 |
| 人工椎間盤（Artificial disc） | 犬頸椎 IVDD 的椎間盤替換——保留活動度 | 人醫已商業化，犬生物力學研究中 |

## 六、臨床爭議與知識空缺 (Controversies & Knowledge Gaps)

| 爭議議題 | 現況 | Evidence Level |
|---------|------|---------------|
| Grade III IVDD 保守治療 vs 手術 | 兩者成功率接近但手術復發率較低——缺乏前瞻性 RCT 直接比較 | Level III |
| IVDD 術後類固醇使用 | Methylprednisolone 可能加重脊髓損傷（NASCIS III 爭議延伸至獸醫），多數神經外科專家不建議 | Level II |
| DPP 喪失 > 48 小時是否仍應手術 | 極低恢復率（< 5%）vs 少數成功案例——手術費用與 PMM 風險需與飼主充分溝通 | Level III |
| 預防性開窗術（Prophylactic fenestration）的價值 | 術中對鄰近椎間隙同時開窗以降低復發率——是否增加手術時間與風險而效益有限 | Level III |`,
  clinical_pearl: 'Ventral slot 手術最關鍵的技術要點是「slot 寬度不可超過椎體寬度的 1/3」。過寬的 slot 會破壞椎體的結構完整性，導致椎體塌陷（ventral slot collapse），這是一個毀滅性的併發症。使用高速鑽時需持續以生理食鹽水沖洗冷卻，避免熱損傷。',
  common_mistakes: [
    'Grade V 病例延遲手術超過 48 小時——每小時延遲都降低恢復機會',
    'Ventral slot 過寬導致椎體不穩定',
    '術後忽略膀胱管理——尿路感染是最常見的可預防併發症',
    '術後未進行復健——復健可顯著加速功能恢復',
    '術後神經功能持續惡化未考慮 PMM（進行性脊髓軟化）',
  ],
  disease_data: null,
  diagnostic_data: null,
  procedure_data: null,
  visual_placeholders: [
    { position: 'Hemilaminectomy 段落後', type: 'flowchart', description: 'Hemilaminectomy 手術步驟圖' },
    { position: 'Ventral slot 段落後', type: 'annotated_image', description: 'Ventral slot 解剖標記與 slot 大小示意圖' },
  ],
  interactive_placeholders: [],
  drug_api_links: ['Methadone', 'Gabapentin', 'Meloxicam'],
  references: [
    { type: 'textbook', citation: 'Fossum TW. Small Animal Surgery, 5th ed. Elsevier, 2019. Chapter 38-39: Spinal Surgery.', relevance: '脊椎手術技術教材' },
    { type: 'guideline', citation: 'Moore SA et al. ACVIM Consensus on thoracolumbar IVDD. J Vet Intern Med. 2020;34(5):1684-1699.', relevance: 'IVDD 手術適應症共識' },
    { type: 'journal', citation: 'Brisson BA. Intervertebral disc disease in dogs. Vet Clin North Am Small Anim Pract. 2010;40(5):829-858.', relevance: '脊椎手術預後數據' },
    { type: 'journal', citation: 'Jeffery ND et al. Factors associated with recovery from paraplegia in dogs with loss of pain perception in the pelvic limbs following intervertebral disk herniation. J Am Vet Med Assoc. 2016;248(4):386-394.', relevance: 'Grade V IVDD 術後恢復因子分析' },
  ],
  is_current: true,
  created_at: now,
};

/** 神經科復健 — 治療型 */
const contentNeuroRehab: NodeContent = {
  id: 'CONTENT-NEURO-L5-003',
  node_id: 'NEURO-L5-003',
  version: 1,
  summary: '神經科復健（Neurological Rehabilitation）是脊髓損傷（IVDD 術後）、周邊神經病變與其他神經疾病恢復的關鍵輔助治療。核心技術包括被動關節運動（PROM）、輔助站立與行走訓練、水療（hydrotherapy）、電刺激（NMES）與平衡訓練。研究顯示積極復健可將 DM 犬維持步行能力的時間延長 2-3 倍，IVDD 術後犬的功能恢復也顯著加速。',
  learning_objectives: [
    '制定脊髓損傷犬的分階段復健計畫',
    '描述被動關節運動（PROM）的執行方法與頻率',
    '說明水療在神經復健中的作用原理',
    '列出復健過程中需要監測的功能指標',
    '向飼主指導居家復健技巧',
  ],
  key_points: [
    '復健三大目標：預防併發症（褥瘡/萎縮/攣縮）、促進神經可塑性、恢復功能性活動',
    'PROM：每日 2-3 次，每關節屈伸 10-15 次，預防關節攣縮與維持關節活動度',
    '水療（水中跑步機/游泳）：浮力減重 40-60%，允許早期主動運動',
    'NMES（神經肌肉電刺激）：延緩去神經性肌萎縮，維持肌肉質量',
    'DM 犬積極復健可延長步行能力時間 2-3 倍（Kathmann et al. 2006）',
    'IVDD 術後復健分三階段：急性期（1-2 週）→ 恢復期（2-6 週）→ 強化期（6-12 週）',
    '居家復健飼主指導極為重要——大部分復健需要在家執行',
  ],
  body: `# 神經科復健

## 一、治療原理 (Treatment Principles)



### 復健原理
### 神經可塑性（Neuroplasticity）
- 脊髓與腦具有一定的功能重組能力
- 重複性特定動作訓練可強化殘存神經通路
- 「use it or lose it」原則——不活動導致功能進一步喪失

### 預防併發症
- 褥瘡：定期翻身（q4-6h）、厚軟墊
- 肌肉萎縮：PROM + NMES
- 關節攣縮：每日 PROM
- 尿路感染：定時膀胱管理

### IVDD 術後復健三階段
### 第一階段：急性期（術後 1-2 週）
- PROM：每日 2-3 次，每關節 10-15 次屈伸
- 冰敷手術部位（減少腫脹）
- 翻身（q4-6h，防褥瘡）
- 膀胱管理

### 第二階段：恢復期（2-6 週）
- 輔助站立訓練（sling walking）
- 水療開始（水中跑步機優先）
- 本體感覺訓練（不同表面站立）
- 平衡板訓練

### 第三階段：強化期（6-12 週）
- 自主行走訓練
- cavaletti rails（跨欄行走）
- 傾斜面行走
- 逐漸恢復正常活動

### 水療
### 水中跑步機（Underwater Treadmill）
- 水位至大轉子：減重約 40-60%
- 允許非步行性癱瘓犬進行主動步態訓練
- 水阻提供肌力訓練
- 每次 10-20 分鐘，每週 2-3 次

### 游泳
- 完全去重力
- 適合更嚴重的病例
- 需人員全程支持
- 心肺功能訓練效果佳

### DM 犬復健
- 復健為 DM 犬最重要的介入手段
- 每日 PROM + 站立訓練 + 水療
- 維持步行能力時間延長至未復健犬的 2-3 倍
- 後肢癱瘓後使用輪椅維持活動力與生活品質

## 二、藥物/方法比較 (Comparison)

比較水療(浮力減重) vs 陸上運動(本體感覺訓練) vs 電刺激(NMES肌肉再教育) — 適應症依神經損傷類型而異：IVDD 術後首選水療，DM 首選步態訓練，ACP 首選被動 ROM + 站立訓練。

## 三、併發症與監控 (Complications & Monitoring)

### 復健相關併發症
- **過度復健（Overexertion）**：過早過量的活動可導致手術部位不穩定或再損傷——漸進式增加為原則
- **水療相關感染**：術後傷口未癒合即開始水療可致傷口感染——建議術後 ≥ 2 週且傷口完整後開始
- **PROM 過度操作**：超出正常關節活動範圍或過於激烈可導致軟組織損傷——應在無痛範圍內溫和執行
- **飼主執行不當**：居家復健佔總復健量的大部分——錯誤技術可能適得其反，需詳細示範與影片指導
- **心理壓力**：長期復健過程對飼主的心理負擔，特別是 DM 等進行性疾病

### 功能評估與監控
| 時間點 | 評估項目 | 目標 |
|--------|---------|------|
| 每次復健 | 步態評分（Open Field Score / 修改 Frankel 量表） | 定量追蹤功能恢復進度 |
| 每 2 週 | 後肢腿圍測量（大腿/小腿） | 監測肌肉萎縮或恢復 |
| 每月 | 本體感覺測試（knuckling 反應恢復情況） | 神經功能恢復指標 |
| 持續 | 飼主活動日誌（自主排尿、站立能力、行走距離） | 居家環境中的功能追蹤 |

## 四、預後影響 (Prognostic Impact)

- **IVDD 術後 + 積極復健**：功能恢復速度顯著加快——水療組 vs 非水療組恢復時間可差 2-4 週
- **DM 犬 + 每日復健**：維持步行能力時間延長至未復健犬的 2-3 倍（Kathmann 2006）
- **ACP 犬復健**：每日 PROM + 站立訓練可維持肌肉量與關節活動度，加速神經再生期的功能恢復
- **預後良好因子**：早期開始復健（術後 48 小時內 PROM）、飼主高度配合居家執行、有水療設備資源
- **預後限制因子**：DPP 完全喪失、PMM 發生、飼主無法配合居家復健、嚴重關節攣縮已形成

## 五、人醫借鑒 (Translational Insights)

| 人醫工具/概念 | 獸醫應用潛力 | 現況 |
|-------------|-------------|------|
| 機器人輔助步態訓練（Robotic gait training） | 犬 IVDD 術後/DM 的程式化、可重複步態訓練 | 人醫 SCI 復健標準工具，犬版原型裝置開發中 |
| 經皮脊髓電刺激（Transcutaneous SCS） | 犬脊髓損傷後的非侵入性神經調控促進步態恢復 | 人醫 SCI 臨床試驗成果正面，獸醫早期探索 |
| 功能性電刺激（FES）步態輔助 | 犬後肢癱瘓的即時步態電刺激輔助 | 人醫 SCI 已商業化，犬適配研究中 |
| 虛擬實境復健（VR Rehabilitation） | 犬認知與感覺統合訓練的豐富化環境 | 人醫神經復健前沿，犬概念階段 |

## 六、臨床爭議與知識空缺 (Controversies & Knowledge Gaps)

| 爭議議題 | 現況 | Evidence Level |
|---------|------|---------------|
| 水療的最佳起始時機與頻率 | 術後 2 週 vs 更早（傷口癒合前以乾式復健為主）——缺乏比較不同時機的 RCT | Level IV |
| NMES（神經肌肉電刺激）在犬的實際療效 | 理論上延緩去神經肌萎縮，但犬高品質 RCT 極少——參數（頻率/強度/模式）未標準化 | Level IV |
| DM 犬復健的最佳方案組合 | 水療 + PROM + 輪椅為經驗性方案，但各成分的個別貢獻量化困難 | Level III |
| 幹細胞治療合併復健的附加效益 | 犬 IVDD 術後幹細胞移植的療效尚無高品質 RCT 支持，是否合併復健可提升效果不明 | Level IV |`,
  clinical_pearl: '水中跑步機是神經復健中最有價值的工具之一。水的浮力讓尚無法獨立行走的犬可以進行步態訓練（水位至大轉子可減重 40-60%），而水的阻力同時提供肌力訓練。建議 IVDD 術後 2 週（傷口癒合後）即開始，每週 2-3 次，每次從 5 分鐘逐漸增加到 20 分鐘。',
  common_mistakes: [
    '術後僅限制活動而未積極復健——被動恢復遠不如主動復健',
    'PROM 執行過於激烈或超出正常關節活動範圍（應溫和且在無痛範圍內）',
    '水療開始過早（傷口未癒合時水療有感染風險）',
    '告知 DM 飼主「無藥可治」而未推薦積極復健——復健是 DM 最有效的介入',
  ],
  disease_data: null,
  diagnostic_data: null,
  procedure_data: null,
  visual_placeholders: [
    { position: '三階段段落後', type: 'timeline', description: 'IVDD 術後復健三階段時間軸與里程碑' },
    { position: '水療段落', type: 'annotated_image', description: '水中跑步機操作與水位設定圖' },
  ],
  interactive_placeholders: [],
  drug_api_links: [],
  references: [
    { type: 'journal', citation: 'Kathmann I et al. Daily controlled physiotherapy increases survival time in dogs with suspected degenerative myelopathy. J Vet Intern Med. 2006;20(4):927-932.', relevance: 'DM 犬復健延長存活時間的關鍵研究' },
    { type: 'textbook', citation: 'Millis DL, Levine D. Canine Rehabilitation and Physical Therapy, 2nd ed. Elsevier, 2014.', relevance: '犬復健標準教材' },
    { type: 'journal', citation: 'Drum MG. Physical rehabilitation of the canine neurologic patient. Vet Clin North Am Small Anim Pract. 2010;40(1):181-193.', relevance: '神經科復健綜述' },
    { type: 'guideline', citation: 'Moore SA et al. ACVIM Consensus Statement on thoracolumbar intervertebral disc disease. J Vet Intern Med. 2020;34(5):1684-1699.', relevance: 'ACVIM IVDD 共識——術後復健建議' },
  ],
  is_current: true,
  created_at: now,
};

/** 顱內壓升高機轉 — 機轉型 */
const contentICPMechanism: NodeContent = {
  id: 'CONTENT-NEURO-L2-005',
  node_id: 'NEURO-L2-005',
  version: 1,
  summary: '顱內壓升高（Increased Intracranial Pressure, ICP）是神經急症中最關鍵的病理生理概念之一。Monro-Kellie 學說指出顱腔為固定容積空間，內含腦實質（80%）、腦脊髓液（CSF, 10%）與血液（10%）三大成分，任一成分體積增加時，其他成分必須代償性減少以維持正常 ICP（犬 < 12 mmHg）。當代償機轉耗盡時 ICP 急速上升，導致腦灌流壓（CPP = MAP - ICP）下降，引發 Cushing 反應（三聯徵：心搏過緩 + 高血壓 + 呼吸異常）與腦疝。',
  learning_objectives: [
    '說明 Monro-Kellie 學說與顱內壓組成三要素',
    '列舉導致 ICP 升高的四大原因：佔位性病灶、腦水腫、水腦症、顱內出血',
    '描述 Cushing 反應的三聯徵及其臨床意義',
    '計算腦灌流壓（CPP = MAP - ICP）並說明維持 CPP 的重要性',
    '辨識腦疝類型（天幕疝、枕骨大孔疝）的臨床表現',
    '掌握降低 ICP 的藥物治療原則（Mannitol、高張食鹽水）',
  ],
  key_points: [
    'Monro-Kellie 學說：顱腔容積固定 → 腦實質（80%）+ CSF（10%）+ 血液（10%）= 恆定',
    '正常犬 ICP < 12 mmHg，ICP > 20 mmHg 需積極處置',
    'ICP 升高四大原因：佔位性病灶（腫瘤、血腫、膿瘍）、腦水腫（細胞毒性/血管源性）、水腦症（CSF 循環障礙）、顱內出血',
    'Cushing 反應三聯徵：心搏過緩（bradycardia）+ 全身性高血壓（systemic hypertension）+ 呼吸型態異常（irregular respiration）——提示腦幹壓迫',
    'CPP = MAP - ICP：目標 CPP > 50 mmHg（犬），CPP 過低 → 腦缺血 → 神經元死亡',
    '腦疝類型：天幕疝（transtentorial herniation，瞳孔散大、意識急劇下降）、枕骨大孔疝（foramen magnum herniation，呼吸驟停、死亡）',
    '急性降 ICP：Mannitol 0.5-1 g/kg IV over 15-20 min（滲透性利尿，效果 30 min 內出現，持續 2-5 hr）；高張食鹽水 3-5% NaCl 3-5 mL/kg IV（低血壓患者優先選擇）',
  ],
  body: `# 顱內壓升高機轉

## 一、主要內容 (Core Concept & Mechanism)

### Monro-Kellie 學說
顱腔為不可擴張的密閉空間（成年動物顱骨癒合後），其內容物分為三大成分：
- **腦實質**（Brain Parenchyma）：約占 80%，不可壓縮
- **腦脊髓液**（CSF）：約占 10%，可透過加速吸收與減少產生來代償
- **血液**（Blood）：約占 10%，可透過靜脈回流增加來代償

當任一成分體積增加時（如腫瘤佔位、腦水腫、水腦症），其他成分必須減少以維持 ICP 正常。代償能力有限——一旦耗盡，ICP 將呈指數型急速上升（pressure-volume curve 的陡峭段）。

### ICP 升高的四大原因
| 原因 | 機轉 | 常見疾病 |
|------|------|---------|
| 佔位性病灶 | 新增腫塊佔據顱腔空間 | 腦腫瘤、顱內血腫、膿瘍 |
| 腦水腫 | 細胞毒性（cytotoxic）或血管源性（vasogenic）水腫增加腦實質體積 | 腦外傷、腦炎、缺血後再灌流損傷 |
| 水腦症 | CSF 產生/循環/吸收障礙 → CSF 蓄積 | 先天性水腦、腫瘤阻塞導水管 |
| 顱內出血 | 血液佔據顱腔空間 + 繼發血管痙攣 | 凝血障礙、血管畸形、外傷 |

### Cushing 反應（Cushing Response）
ICP 極度升高壓迫腦幹 → 缺血刺激血管運動中樞 → 交感神經過度活化 → 全身性高血壓 → 壓力感受器反射性心搏過緩 → 呼吸中樞受壓產生不規則呼吸。此三聯徵為腦幹壓迫的危險訊號，提示即將發生腦疝。

### 腦灌流壓與腦疝
- **CPP = MAP - ICP**：維持腦灌流的驅動壓力
- 目標 CPP > 50 mmHg（犬），低於此值腦缺血風險急增
- **天幕疝（Transtentorial Herniation）**：大腦顳葉內側（uncus）向下疝入天幕裂孔 → 壓迫同側動眼神經（CN III）→ 同側瞳孔散大、對光反射消失 → 壓迫中腦 → 意識急劇下降
- **枕骨大孔疝（Foramen Magnum Herniation）**：小腦扁桃體向下疝入枕骨大孔 → 壓迫延髓 → 呼吸驟停 → 死亡

### ICP 管理藥物原則

| 藥物 | 劑量 | 機轉 | 注意事項 |
|------|------|------|---------|
| [藥物:Mannitol] | 0.5-1 g/kg IV over 15-20 min | 滲透性利尿 + 血漿擴張降低血液黏滯度 | 脫水/低血壓禁用，反覆使用可反彈性升高 ICP |
| 高張食鹽水 3-5% NaCl | 3-5 mL/kg IV over 10-15 min | 滲透梯度將水從腦組織引入血管內 | 低血壓患者優先選擇，不引起利尿性脫水 |

[圖片:ICP pressure-volume curve 與代償機轉圖]

## 二、重要概念 (Key Concepts)

- **ICP 監測**：犬貓臨床中直接 ICP 監測（顱內壓力探頭）使用率低，主要依賴臨床徵兆（意識程度、瞳孔反應、修正 Glasgow 昏迷量表）間接評估
- **修正 Glasgow 昏迷量表（MGCS）**：評估運動活動（1-6）、腦幹反射（1-6）、意識程度（1-6），總分 3-18，≤ 8 分提示嚴重 ICP 升高與不良預後
- **30 度頭部抬高**：促進靜脈回流降低 ICP，為最簡易且無創的第一線措施
- **過度換氣**：短暫降低 PaCO₂ → 腦血管收縮 → 減少顱內血容積 → 降低 ICP，但效果短暫且可能加重缺血，僅作為橋接措施

## 三、常見陷阱 (Common Pitfalls)

- 頸靜脈壓迫（如頸圈過緊、頸靜脈採血）會阻礙靜脈回流加重 ICP 升高——顱內壓升高疑慮的患者應使用胸帶而非頸圈
- Cushing 反應為晚期腦幹壓迫徵兆——出現時可能已接近不可逆腦疝
- Mannitol 反覆給予可因血腦屏障破損導致藥物滲入腦組織，引起反彈性 ICP 升高
- 過度換氣雖可降低 ICP，但 PaCO₂ < 30 mmHg 可能加重腦缺血——僅作為暫時橋接
- 犬貓低血壓時優先選擇高張食鹽水而非 Mannitol（Mannitol 的利尿效應可能加重低血壓）

## 四、人醫借鑒 (Translational Insights)

| 人醫工具/概念 | 獸醫應用潛力 | 現況 |
|-------------|-------------|------|
| 顱內壓監測器（ICP bolt/EVD） | 犬重症神經科直接 ICP 數值監測 | 人醫常規使用，獸醫僅限研究與少數教學醫院 |
| 視神經鞘超音波（ONSD） | 犬非侵入性 ICP 估測 | 人醫已驗證 ONSD > 5 mm 提示 ICP 升高，犬研究起步中 |
| 去顱骨瓣減壓術（Decompressive Craniectomy） | 犬難治性 ICP 升高的外科救治 | 人醫嚴重外傷腦損傷常用，獸醫零星病例報告 |

## 五、臨床爭議 (Controversies & Knowledge Gaps)

| 爭議議題 | 現況 | Evidence Level |
|---------|------|---------------|
| Mannitol vs 高張食鹽水的優劣比較 | 人醫系統性回顧提示高張食鹽水可能更優，獸醫直接比較研究不足 | Level III |
| 犬 MGCS 的預後預測準確度 | 原始研究 MGCS ≤ 8 分 48 小時死亡率約 50%，但後續驗證研究結果不一致 | Level III |
| 類固醇在 ICP 管理中的角色 | 對血管源性水腫（腫瘤周圍水腫）有效，但對細胞毒性水腫（外傷）無效甚至有害 | Level II |`,
  clinical_pearl: 'Cushing 反應（心搏過緩 + 高血壓 + 呼吸異常）的出現代表腦幹已受到嚴重壓迫，是即將發生腦疝的危險訊號。在臨床上，當你看到一隻意識逐漸惡化的犬貓突然出現心搏過緩與血壓升高時，不要直覺性地給予 Atropine 或降壓藥——應立即啟動降低 ICP 的措施：30 度頭部抬高 + Mannitol 0.5-1 g/kg IV + 確保呼吸道通暢。記住 CPP = MAP - ICP，維持足夠的 MAP 同時降低 ICP 才是保護腦灌流的關鍵。',
  common_mistakes: [
    '將 Cushing 反應中的心搏過緩用 Atropine 治療——心搏過緩是壓力感受器對高血壓的代償反應，根本原因是 ICP 升高',
    '在低血壓患者使用 Mannitol——Mannitol 的滲透性利尿效應可能加重低血壓與組織灌流不足',
    '過度依賴過度換氣降低 ICP——PaCO₂ 過低（< 30 mmHg）導致腦血管過度收縮與缺血',
    '忽略頸靜脈回流阻塞對 ICP 的影響——頸圈、不當保定姿勢、頸部壓迫均可加重 ICP 升高',
    '反覆使用 Mannitol 未考慮反彈效應——血腦屏障破損時 Mannitol 滲入腦組織可反彈性升高 ICP',
  ],
  disease_data: null,
  diagnostic_data: null,
  procedure_data: null,
  visual_placeholders: [
    { position: 'Monro-Kellie 學說段落後', type: 'flowchart', description: 'ICP 壓力-容積曲線（pressure-volume curve）與代償機轉示意圖' },
    { position: '腦疝段落後', type: 'annotated_image', description: '天幕疝與枕骨大孔疝解剖示意圖' },
  ],
  interactive_placeholders: [
    { position: 'CPP 計算段落', type: 'interactive_overlay', description: '輸入 MAP 與 ICP 計算 CPP 並評估灌流狀態' },
  ],
  drug_api_links: [],
  references: [
    { type: 'textbook', citation: 'Dewey CW, da Costa RC. Practical Guide to Canine and Feline Neurology, 3rd ed. Wiley-Blackwell, 2016. Chapter 16: Encephalopathies & Increased ICP.', relevance: 'ICP 管理臨床實務指引' },
    { type: 'textbook', citation: 'Platt SR, Olby NJ. BSAVA Manual of Canine and Feline Neurology, 4th ed. BSAVA, 2013.', relevance: '顱內壓升高機轉與處置基礎教材' },
    { type: 'journal', citation: 'Sande A, West C. Traumatic brain injury: a review of pathophysiology and management. J Vet Emerg Crit Care. 2010;20(2):177-190.', relevance: 'ICP 管理在犬腦外傷中的應用' },
    { type: 'guideline', citation: 'Syring RS. Assessment and treatment of central nervous system abnormalities in the emergency patient. Vet Clin North Am Small Anim Pract. 2005;35(2):281-305.', relevance: '急診 ICP 升高處置共識' },
  ],
  is_current: true,
  created_at: now,
};

/** 顱內腫瘤 — 疾病型 */
const contentBrainTumor: NodeContent = {
  id: 'CONTENT-NEURO-L3-008',
  node_id: 'NEURO-L3-008',
  version: 1,
  summary: '顱內腫瘤（Intracranial Neoplasia）是犬貓中老年動物最常見的結構性腦部疾病之一。犬以膠質瘤（Glioma）較常見（短頭品種好發），貓以腦膜瘤（Meningioma）為最常見（占貓原發腦瘤 > 50%，前腦好發，邊界清晰，手術預後較佳）。診斷仰賴 MRI 對比增強影像。治療策略包括手術切除、放射治療、化學治療（Hydroxyurea）及支持性抗癲癇藥物。',
  learning_objectives: [
    '比較犬與貓最常見的原發性腦腫瘤類型與好發位置',
    '描述腦膜瘤與膠質瘤在 MRI 上的典型影像特徵',
    '說明顱內腫瘤導致繼發性癲癇的機轉',
    '列出顱內腫瘤的多模式治療策略（手術/放射/化學治療）',
    '評估不同腫瘤類型的預後因子',
  ],
  key_points: [
    '好發年齡：犬 > 5 歲，貓 > 8 歲；犬膠質瘤好發短頭品種（Boxer、Boston Terrier、French Bulldog），腦膜瘤好發長頭品種（Golden Retriever、GSD）',
    '貓腦膜瘤特點：前腦好發、邊界清晰（well-demarcated）、對比增強明顯均勻、腫瘤可剝離腦膜（surgical accessibility），手術後中位存活時間 > 2 年',
    '犬膠質瘤特點：侵襲性高（infiltrative）、邊界不清、MRI 對比增強可為環狀或不均勻、手術完全切除困難、預後較差',
    '脈絡叢腫瘤（Choroid Plexus Tumor）：CPP（良性）vs CPC（惡性），產生過多 CSF 或阻塞 CSF 流通 → 阻塞性水腦症',
    '繼發性癲癇為最常見的首發症狀（犬顱內腫瘤約 50-80% 伴發癲癇）',
    'MRI 對比增強為診斷金標準：腦膜瘤呈均勻強增強 + dural tail sign；膠質瘤呈環狀或不均勻增強',
    '治療：手術（accessible tumors）± 放射治療（SRT/SRS）± Hydroxyurea（50 mg/kg PO EOD，對腦膜瘤有部分反應率）± Phenobarbital/Levetiracetam 控制繼發癲癇',
  ],
  body: `# 顱內腫瘤 (Intracranial Neoplasia)

## 一、主要內容 (Pathophysiology & Classification)



### 概述
顱內腫瘤分為原發性（起源自腦組織或腦膜）與繼發性（轉移性或局部侵犯）。犬腦腫瘤盛行率估計約 14.5/100,000 隻·年，貓約 3.5/100,000 隻·年。

### 原發性腦腫瘤分類
| 類型 | 犬好發度 | 貓好發度 | MRI 特徵 | 預後 |
|------|---------|---------|---------|------|
| 腦膜瘤 (Meningioma) | 常見 | 最常見 (>50%) | 均勻對比增強，dural tail sign，邊界清晰 | 貓良好（手術 MST >2yr），犬中等 |
| 膠質瘤 (Glioma) | 常見（短頭品種） | 少見 | 環狀或不均勻增強，邊界不清 | 差（MST 2-4 月未治療） |
| 脈絡叢腫瘤 (CPT) | 不常見 | 不常見 | 腦室內腫塊，明顯增強 | 良性(CPP)佳，惡性(CPC)差 |
| 室管膜瘤 (Ependymoma) | 少見 | 少見 | 腦室旁，中等增強 | 差 |

### 繼發性腦腫瘤
- 轉移性：血行性腫瘤（血管肉瘤 hemangiosarcoma、黑色素瘤 melanoma、肺腺癌）
- 局部侵犯：鼻腔腫瘤、垂體腫瘤（macroadenoma）

### 腫瘤導致神經功能障礙的機轉
1. 直接壓迫腦實質
2. 腫瘤周圍血管源性水腫（peritumoral vasogenic edema）
3. 阻塞 CSF 循環 → 阻塞性水腦症
4. 顱內壓升高
5. 繼發性癲癇（腫瘤周圍皮層激惹）

## 二、判讀要點 (Clinical Signs & Diagnosis)

### 臨床表現
- **前腦腫瘤**：行為改變（性格改變、遊蕩、press heading）、視覺障礙、癲癇發作（最常見首發症狀）
- **腦幹腫瘤**：多重腦神經麻痺、本體感覺缺失、意識改變
- **小腦腫瘤**：共濟失調（hypermetria）、意向性震顫、姿勢異常

### MRI 鑑別要點
- **腦膜瘤**：extra-axial（腦外生長）、均勻增強、broad-based dural attachment、dural tail sign、可見鈣化
- **膠質瘤**：intra-axial（腦內生長）、邊界不清、T2/FLAIR 高訊號範圍廣、環狀增強（ring enhancement）

## 三、常見陷阱 (Common Pitfalls)

- 老年犬首發癲癇即應將腦腫瘤列為首要鑑別——> 5 歲犬首次癲癇約 30% 為腦腫瘤所致
- 貓腦膜瘤的手術預後遠優於犬膠質瘤，不應因「腦腫瘤」而一律建議安樂死
- MRI 未對比增強即下結論可能遺漏腫瘤——對比增強（gadolinium）為必要步驟
- 腫瘤周圍水腫可能比腫瘤本身造成更大的佔位效應——短期 Prednisolone 可有效減輕水腫
- Hydroxyurea 對腦膜瘤有部分反應率但非根治性——需合理設定飼主預期

## 四、人醫借鑒 (Translational Insights)

| 人醫工具/概念 | 獸醫應用潛力 | 現況 |
|-------------|-------------|------|
| 立體定位放射手術（SRS/Gamma Knife） | 犬不可手術的深部腦腫瘤非侵入性治療 | 人醫常規使用，獸醫少數中心已引入 |
| 液態切片（Liquid Biopsy / ctDNA） | 犬腦腫瘤的非侵入性分型診斷 | 人醫臨床試驗中，犬基礎研究起步 |
| 免疫檢查點抑制劑（Immune Checkpoint Inhibitors） | 犬膠質瘤免疫治療 | 人醫 GBM 臨床試驗進行中，犬膠質瘤自然模型研究中 |

## 五、臨床爭議 (Controversies & Knowledge Gaps)

| 爭議議題 | 現況 | Evidence Level |
|---------|------|---------------|
| 犬腦腫瘤切片 vs 經驗性治療 | 組織學確診為金標準但手術風險高，部分臨床醫師依 MRI 經驗性治療（放射+化療） | Level III |
| Hydroxyurea 對犬腦膜瘤的實際療效 | 回顧性研究顯示部分反應，但缺乏前瞻性隨機對照試驗 | Level IV |
| 放射治療最佳方案（常規分次 vs 低分次 vs SRS） | 犬缺乏不同方案的直接比較研究 | Level III |`,
  clinical_pearl: '老年犬首次癲癇發作最需警惕的鑑別診斷就是顱內腫瘤——> 5 歲犬首發癲癇約 30% 最終確診為腦腫瘤。MRI 對比增強是不可省略的步驟。若確診為腦膜瘤（尤其貓），不要放棄治療——貓腦膜瘤手術切除後中位存活時間 > 2 年，預後遠優於犬膠質瘤。\n\n【台灣流行病學】短頭品種犬（法國鬥牛犬、波士頓梗）在台灣飼養數量近年大幅增加，膠質瘤發生率可能隨之上升。台灣主要都會區已有 MRI 設備與腦外科能力的教學醫院/轉介中心。放射治療設備較稀缺，為治療的主要瓶頸。',
  common_mistakes: [
    '將老年犬首發癲癇直接歸類為特發性癲癇而未進行 MRI 排除結構性病因',
    '僅執行 MRI 平掃（plain scan）而未使用 Gadolinium 對比增強——可能遺漏腫瘤或低估範圍',
    '因「腦腫瘤」診斷而一律建議安樂死——貓腦膜瘤手術預後良好，不應放棄治療',
    '忽略腫瘤周圍水腫的佔位效應——短期 Prednisolone（1-2 mg/kg/day）可有效改善臨床症狀',
    '在未控制繼發癲癇的情況下進行麻醉誘導——術前應先用 Levetiracetam 或 Phenobarbital 達到穩態血藥濃度',
  ],
  disease_data: {
    signalment: '犬：> 5 歲。膠質瘤好發短頭品種（Boxer、Boston Terrier、French Bulldog、Staffordshire Bull Terrier），腦膜瘤好發長頭品種（Golden Retriever、GSD）及大型犬。貓：> 8 歲，腦膜瘤最常見，無明顯品種偏好。無明顯性別差異。',
    etiology: '原發性腦腫瘤病因不明，可能涉及遺傳易感性（短頭品種膠質瘤高發率提示品種遺傳因素）、環境因素與體細胞基因突變。繼發性（轉移性）腫瘤來自全身性惡性腫瘤的血行轉移（血管肉瘤、黑色素瘤、肺腺癌等）或鄰近結構的直接侵犯（鼻腔腫瘤、垂體大腺瘤）。',
    pathogenesis: '腫瘤細胞增殖 → 佔位性病灶逐漸擴大 → 壓迫鄰近腦實質 + 腫瘤周圍血管源性水腫（VEGF 介導血腦屏障破壞）→ 顱內壓升高 + 腦組織移位 → 臨床神經功能障礙。腫瘤周圍皮層刺激 → 異常放電 → 繼發性癲癇（腦腫瘤犬 50-80% 伴發癲癇）。',
    clinical_signs: [
      { sign: '癲癇發作', category: 'primary', description: '最常見首發症狀（50-80%），前腦腫瘤尤其常見，可為局灶性或全身性' },
      { sign: '行為改變', category: 'primary', description: '前腦腫瘤：性格改變、漫無目的遊蕩（pacing）、press heading、反應遲鈍' },
      { sign: '視覺障礙', category: 'primary', description: '對側威脅反應（menace response）喪失，同側瞳孔散大（動眼神經壓迫）' },
      { sign: '共濟失調/腦神經麻痺', category: 'secondary', description: '腦幹/小腦腫瘤：步態共濟失調、頭部傾斜、多重腦神經麻痺' },
      { sign: '意識程度改變', category: 'secondary', description: '嗜睡至昏迷，ICP 升高或腦幹壓迫所致' },
    ],
    staging: null,
    differential_diagnosis: [
      { condition: '腦膜腦炎（MUO/GME）', key_differentiator: '較年輕小型犬、CSF 嗜中性/單核球增多、MRI 多灶性或彌漫性、類固醇反應良好' },
      { condition: '腦血管事件（CVA）', key_differentiator: '超急性發作、非進行性、MRI 見符合血管分佈的梗塞灶、通常無對比增強' },
      { condition: '特發性癲癇', key_differentiator: '首發年齡 6 月-6 歲、發作間期神經學檢查正常、MRI 正常' },
      { condition: '腦膿瘍', key_differentiator: 'MRI 環狀增強伴中央不增強區（ring-enhancing lesion），可有發燒與白血球升高' },
    ],
    diagnostic_workup: '1. 神經學檢查（定位：前腦/腦幹/小腦/多灶性）→ 2. 基礎血檢（CBC、生化）排除代謝性病因 + 胸腹影像排除原發腫瘤 → 3. MRI 平掃 + Gadolinium 對比增強（金標準：腫瘤位置、大小、邊界、增強模式、水腫範圍）→ 4. CSF 分析（排除發炎性疾病，注意 ICP 升高時腰穿有腦疝風險）→ 5. 組織學確診（手術活檢或立體定位穿刺活檢，為分型金標準但非必須）',
    treatment_protocol: '多模式治療：1. 支持治療：Phenobarbital 2-5 mg/kg PO BID 或 Levetiracetam 20 mg/kg PO TID 控制癲癇 + Prednisolone 1-2 mg/kg/day 減輕腫瘤周圍水腫。2. 手術切除：腦膜瘤（尤其貓）為首選——邊界清晰者手術完全切除率高。3. 放射治療：術後輔助或不可手術腫瘤的主要治療（常規分次 48-54 Gy/16-20 fx 或低分次 SRS）。4. 化學治療：Hydroxyurea 50 mg/kg PO EOD（腦膜瘤有部分反應率 30-40%）。',
    prognosis: '腦膜瘤（貓）手術切除：MST > 24 個月，部分報告達 3-4 年。腦膜瘤（犬）手術切除：MST 約 7-16 個月。膠質瘤：保守治療 MST 約 2-4 個月，放射治療 MST 約 8-14 個月，手術困難（infiltrative）。脈絡叢乳頭狀瘤（CPP）：手術可治癒。未治療腦腫瘤（僅支持療法）：MST 約 2-4 個月。預後因子：腫瘤類型（腦膜瘤 > 膠質瘤）、手術可及性、腫瘤大小、ICP 升高程度。',
    monitoring: '治療期間：每 2-4 週監測癲癇頻率、神經功能變化、AED 血藥濃度（Phenobarbital 目標 20-30 μg/mL）。Hydroxyurea 使用期間：每 2 週 CBC 監測骨髓抑制。術後/放療後：每 2-3 個月 MRI 追蹤腫瘤大小與復發。長期：注意腫瘤復發徵兆（癲癇頻率增加、新發神經功能缺損、行為退化）。',
    owner_communication: '顱內腫瘤的治療選擇取決於腫瘤類型、位置與動物整體狀態。貓腦膜瘤手術預後相對良好（平均存活 > 2 年），值得積極治療。犬膠質瘤預後較差但放射治療仍可延長生活品質良好的時間。繼發性癲癇可透過抗癲癇藥物良好控制。治療目標為最大化生活品質而非僅追求存活時間——定期評估生活品質量表（如 HHHHHMM Scale）有助於適時做出人道決定。',
  },
  diagnostic_data: null,
  procedure_data: null,
  visual_placeholders: [
    { position: '原發性腦腫瘤分類表格後', type: 'comparison_table', description: '腦膜瘤 vs 膠質瘤 MRI 影像對比圖' },
    { position: 'MRI 鑑別段落後', type: 'annotated_image', description: '犬腦膜瘤與膠質瘤 MRI 典型影像標註圖' },
  ],
  interactive_placeholders: [
    { position: '治療策略段落', type: 'interactive_overlay', description: '依據腫瘤類型與位置選擇治療方案決策樹' },
  ],
  drug_api_links: ['Phenobarbital', 'Levetiracetam', 'Hydroxyurea', 'Prednisolone'],
  references: [
    { type: 'textbook', citation: 'Dewey CW, da Costa RC. Practical Guide to Canine and Feline Neurology, 3rd ed. Wiley-Blackwell, 2016. Chapter 14: Intracranial Neoplasia.', relevance: '顱內腫瘤分類與治療標準教材' },
    { type: 'textbook', citation: 'Platt SR, Olby NJ. BSAVA Manual of Canine and Feline Neurology, 4th ed. BSAVA, 2013.', relevance: '腦腫瘤臨床診斷流程' },
    { type: 'journal', citation: 'Troxel MT et al. Feline intracranial neoplasia: retrospective review of 160 cases (1985-2001). J Vet Intern Med. 2003;17(6):850-859.', relevance: '貓顱內腫瘤大規模回顧研究' },
    { type: 'journal', citation: 'Snyder JM et al. Canine intracranial primary neoplasia: 173 cases (1986-2003). J Vet Intern Med. 2006;20(3):669-675.', relevance: '犬原發性腦腫瘤盛行率與預後數據' },
    { type: 'guideline', citation: 'Rossmeisl JH, Jones JC, Zimmerman KL, et al. ACVIM Consensus Statement: Evaluation and Management of Intracranial Meningiomas in Dogs. J Vet Intern Med. 2022;36(1):11-29.', relevance: 'ACVIM 犬顱內腦膜瘤評估與管理共識聲明' },
  ],
  is_current: true,
  created_at: now,
};

/** 頸椎脊髓病變 (Wobbler Syndrome) — 疾病型 */
const contentWobbler: NodeContent = {
  id: 'CONTENT-NEURO-L3-009',
  node_id: 'NEURO-L3-009',
  version: 1,
  summary: '頸椎脊髓病變（Cervical Spondylomyelopathy, CSM），俗稱 Wobbler Syndrome，是犬頸椎脊髓壓迫性疾病的統稱。分為兩種主要形式：椎間盤相關型（Disc-Associated, DA-CSM，好發 Doberman 中年犬）與骨性相關型（Osseous-Associated, OA-CSM，好發 Great Dane 幼/年輕犬）。典型表現為可行走的後肢痙攣性共濟失調（ambulatory spastic paraparesis）伴寬步態（long-strided gait），頸痛程度不等。MRI 為診斷金標準。治療分保守（NSAIDs + 限制活動）與手術（ventral slot、distraction-fusion）。',
  learning_objectives: [
    '區分 DA-CSM 與 OA-CSM 的病因、好發品種與年齡',
    '描述 Wobbler Syndrome 的典型步態異常（後肢痙攣性共濟失調 + 前肢短步）',
    '說明 MRI 在 CSM 診斷與手術規劃中的角色',
    '比較保守治療與手術治療的適應症與預後',
    '辨識多節段壓迫（multi-level compression）的挑戰',
  ],
  key_points: [
    'DA-CSM（椎間盤相關型）：Doberman Pinscher 好發（占 Doberman CSM > 80%），中年犬（5-9 歲），椎間盤膨出 + 韌帶肥厚導致腹背壓迫',
    'OA-CSM（骨性相關型）：Great Dane 好發，年輕犬（< 2 歲），椎體/關節突畸形導致椎管狹窄，營養過剩可能為風險因子',
    '典型步態：後肢長步幅痙攣性共濟失調（long-strided spastic ataxia）+ 前肢短步（short-strided choppy gait）= 經典 two-engine gait',
    '頸痛程度不等：DA-CSM 常有頸痛，OA-CSM 可無明顯疼痛',
    'MRI 金標準：矢狀面評估壓迫位置與範圍 + 橫切面評估壓迫方向（腹背 vs 側方 vs 環形）+ T2 高訊號提示脊髓損傷',
    '保守治療：NSAIDs + Gabapentin + 限制活動（避免頸部過度屈伸）+ 使用胸帶而非頸圈，約 50% 短期改善但長期易惡化',
    '手術治療：ventral slot（單節段腹側壓迫）、distraction-fusion（多節段或椎體不穩定）；術後改善率約 80%，但鄰接節段病變（adjacent segment disease, domino effect）為長期風險',
  ],
  body: `# 頸椎脊髓病變 — Wobbler Syndrome (Cervical Spondylomyelopathy)

## 一、主要內容 (Pathophysiology)



### 概述
CSM 是犬頸椎脊髓壓迫的統稱，涵蓋多種病理機轉。核心共通點為頸椎椎管有效空間減少導致脊髓壓迫與神經功能障礙。

### DA-CSM（椎間盤相關型）
- 好發 Doberman Pinscher 中年犬（5-9 歲），占該品種 CSM > 80%
- 病理：頸椎椎間盤慢性退化膨出（Hansen Type II）+ 背側纖維環/黃韌帶肥厚 → 腹背方向脊髓壓迫
- 最常見壓迫位置：C5-C6、C6-C7
- 可為單節段或多節段壓迫

### OA-CSM（骨性相關型）
- 好發 Great Dane 年輕犬（< 2 歲），也見於 Mastiff、Rottweiler
- 病理：椎體畸形（vertebral body malformation）、關節突增生（articular process hypertrophy）、椎弓畸形 → 椎管狹窄
- 可能與快速生長、營養過剩（高鈣高蛋白飲食）有關
- 最常見位置：C3-C5

### 脊髓損傷機轉
- 慢性壓迫 → 脊髓白質去髓鞘與軸突退化（Wallerian degeneration）
- 外側與腹側索（lateral and ventral funiculi）最先受累 → 後肢 UMN 長纖維束受損最明顯
- 動態壓迫（頸部屈伸時壓迫加重）為重要特徵

## 二、判讀要點 (Clinical Signs & Diagnosis)

### 經典步態分析
- **後肢**：長步幅（long-strided）、痙攣性共濟失調、步態搖擺、延遲的本體感覺定位反應
- **前肢**：短步幅（short-strided, choppy）、有時出現 floating/hypermetric 步態
- 此「two-engine gait」為 CSM 的經典表現
- 頸部低頭姿勢（low head carriage）常見

### MRI 評估要點
- 矢狀面 T2WI：壓迫位置、範圍、脊髓內高訊號（提示脊髓損傷程度）
- 橫切面：壓迫方向分類（腹側/背側/側方/環形）
- 動態 MRI（屈伸位）：評估動態壓迫成分

## 三、常見陷阱 (Common Pitfalls)

- 僅評估步態而忽略前後肢步幅差異——two-engine gait 是 CSM 的重要特徵
- 將年輕 Great Dane 的共濟失調歸因於骨骼發育問題而未進行 MRI 評估
- 保守治療後短期改善即停止追蹤——CSM 為進行性疾病，多數保守治療犬長期會惡化
- 手術僅處理最明顯壓迫位點而忽略鄰近節段的亞臨床壓迫——術後鄰接節段病變（domino effect）可達 20%

## 四、人醫借鑒 (Translational Insights)

| 人醫工具/概念 | 獸醫應用潛力 | 現況 |
|-------------|-------------|------|
| 頸椎人工椎間盤置換 | 犬 DA-CSM 替代融合術，保留活動度 | 人醫已商業化，獸醫原型開發中 |
| 電腦導航脊椎手術 | 犬頸椎手術精確度提升 | 人醫常規使用，獸醫少數中心引入 |
| 鄰接節段病變預防策略 | 減少犬 CSM 術後 domino effect | 人醫活躍研究領域，犬模型轉譯中 |

## 五、臨床爭議 (Controversies & Knowledge Gaps)

| 爭議議題 | 現況 | Evidence Level |
|---------|------|---------------|
| 保守 vs 手術治療的最佳時機 | 缺乏前瞻性隨機試驗比較兩者長期預後 | Level III |
| Distraction-fusion vs ventral slot 的選擇 | 回顧性研究結果不一致，缺乏直接比較 | Level III |
| 營養因素在 OA-CSM 中的角色 | 流行病學關聯但因果關係未確立 | Level IV |`,
  clinical_pearl: 'Wobbler Syndrome 的步態評估是診斷的第一步。典型的 two-engine gait（後肢長步幅痙攣性共濟失調 + 前肢短步幅 choppy 步態）在走廊上讓犬慢速行走時最明顯。評估時讓犬在平滑地面直線行走，並觀察轉圈時的後肢交叉（crossing over）。記住 Doberman 中年犬出現進行性四肢共濟失調，CSM 是最優先的鑑別診斷。\n\n【台灣流行病學】Doberman 在台灣飼養量不高但仍有固定族群，CSM 為該品種最重要的神經疾病。Great Dane 在台灣較少見。台灣具備頸椎 MRI 與 ventral slot/distraction-fusion 手術能力的轉介中心主要集中在台北、台中、台南。',
  common_mistakes: [
    '僅觀察後肢步態而忽略前肢短步幅——前後肢步幅不一致是 CSM 的重要診斷線索',
    '使用頸圈而非胸帶——頸圈壓迫可加重頸椎脊髓壓迫，CSM 患犬應永久改用胸帶',
    '保守治療後短期改善即認為治癒——CSM 為進行性疾病，需定期神經學追蹤',
    '手術僅處理單節段壓迫而忽略多節段問題——術前需完整評估 C2-T1 全頸椎',
    '將 Great Dane 幼犬的後肢無力歸因於髖關節發育不良而延誤 CSM 診斷',
  ],
  disease_data: {
    signalment: 'DA-CSM：Doberman Pinscher 最好發（占 CSM 犬 > 50%），5-9 歲中年犬，雄性略多。OA-CSM：Great Dane（< 2 歲）、Mastiff、Rottweiler。其他品種亦可發生但較少見。',
    etiology: 'DA-CSM：頸椎椎間盤慢性退化（Hansen Type II）合併背側韌帶肥厚，可能有品種遺傳易感性（Doberman CSM 發病率高達 50%）。OA-CSM：先天/發育性椎體畸形 + 關節突增生，可能與快速生長期營養過剩（高鈣、高蛋白飲食）有關。兩型均涉及慢性動態與靜態脊髓壓迫。',
    pathogenesis: '椎間盤退化膨出/椎體畸形 → 頸椎椎管有效空間減少 → 慢性脊髓壓迫（腹側為椎間盤/椎體，背側為黃韌帶/關節突）→ 白質去髓鞘 + 軸突 Wallerian 退化 → 外側索與腹側索最先受累 → 後肢 UMN 長纖維束功能障礙 → 痙攣性共濟失調。頸部屈伸動作可加重壓迫（動態壓迫成分）。',
    clinical_signs: [
      { sign: '後肢痙攣性共濟失調', category: 'primary', description: '長步幅（long-strided）搖擺步態，本體感覺定位反應延遲，後肢交叉（crossing over）' },
      { sign: '前肢短步幅步態', category: 'primary', description: '短步幅、choppy 步態，有時 floating/hypermetric，與後肢形成 two-engine gait' },
      { sign: '頸痛', category: 'primary', description: 'DA-CSM 常見（頸部觸診抗拒、低頭姿勢），OA-CSM 可能不明顯' },
      { sign: '四肢輕癱', category: 'secondary', description: '嚴重病例可進展至不可行走的四肢輕癱（non-ambulatory tetraparesis）' },
      { sign: '肌肉萎縮', category: 'secondary', description: '慢性病例可見肩部與前肢肌肉萎縮（infraspinatus/supraspinatus wasting）' },
    ],
    staging: null,
    differential_diagnosis: [
      { condition: '退化性脊髓病變（DM）', key_differentiator: '後肢 UMN → LMN 進行性輕癱，無疼痛，前肢通常晚期才受累，MRI 無壓迫性病灶，SOD1 基因陽性' },
      { condition: '頸椎 IVDD（Hansen Type I）', key_differentiator: '急性發作（數小時至數日），嚴重疼痛，MRI 見急性椎間盤突出物，好發軟骨發育不全品種' },
      { condition: '顱內/高頸椎腫瘤', key_differentiator: 'MRI 見佔位性病灶伴對比增強，可有腦神經麻痺，通常為進行性但非對稱性' },
      { condition: '寰樞關節不穩定', key_differentiator: '小型犬好發（Yorkshire Terrier、Chihuahua），嚴重頸痛，C1-C2 X 光/MRI 見寰齒間距增加' },
    ],
    diagnostic_workup: '1. 步態評估（two-engine gait 辨識）+ 神經學檢查（後肢 UMN 徵兆、前肢可 UMN 或 LMN）→ 2. 頸椎 X 光（椎間隙狹窄、椎體畸形，但敏感度與特異度有限）→ 3. MRI（金標準：矢狀面定位壓迫 + 橫切面評估壓迫方向 + T2 高訊號評估脊髓損傷 + 動態 MRI 評估屈伸時壓迫變化）→ 4. CSF 分析（排除發炎性疾病）→ 5. 電生理檢查（SSEP 可評估脊髓傳導功能，但臨床使用有限）',
    treatment_protocol: '保守治療（輕度病例或飼主選擇）：NSAIDs（Meloxicam 0.1 mg/kg SID）+ Gabapentin（5-10 mg/kg TID）+ Tramadol（2-5 mg/kg BID-TID）+ 限制活動（避免跑跳）+ 永久改用胸帶 + 短期 Prednisolone（急性惡化時 0.5-1 mg/kg/day tapering）。手術治療（中重度或保守治療失敗）：ventral slot（單節段腹側壓迫）、distraction-fusion with locking plate（多節段或不穩定）、dorsal laminectomy（背側壓迫為主）。術後復健（水療、被動關節運動）加速恢復。',
    prognosis: '保守治療：約 50% 短期改善但多數長期進行性惡化。手術治療：整體改善率約 80%，Doberman DA-CSM ventral slot 術後步態改善率約 80%，但術後鄰接節段病變（domino effect）發生率約 20%。OA-CSM（Great Dane）手術預後較 DA-CSM 差，可能因多節段畸形。預後不良因子：MRI T2 脊髓高訊號廣泛、多節段壓迫、不可行走、症狀持續時間長。',
    monitoring: '保守治療：每月神經學檢查評估是否進展。手術後：2 週傷口檢查，4 週神經學評估，3 個月 MRI 追蹤融合情況。長期：每 3-6 個月神經學追蹤，注意鄰接節段病變徵兆（新節段壓迫症狀）。Gabapentin/NSAIDs 長期使用需監測肝腎功能。',
    owner_communication: 'Wobbler Syndrome 是一種慢性進行性的頸椎疾病，好發於 Doberman 與 Great Dane。輕度病例可先嘗試保守治療（止痛藥 + 限制活動 + 改用胸帶），但多數犬長期會惡化。手術可改善約 80% 犬的步態，但術後仍有 20% 可能在其他頸椎節段出現新的壓迫。治療目標為維持行走能力與生活品質。日常照護重點：永久使用胸帶、避免頸部過度活動、防滑地墊減少跌倒。',
  },
  diagnostic_data: null,
  procedure_data: null,
  visual_placeholders: [
    { position: 'DA-CSM vs OA-CSM 段落後', type: 'comparison_table', description: 'DA-CSM vs OA-CSM 臨床特徵與 MRI 影像比較圖' },
  ],
  interactive_placeholders: [
    { position: '步態評估段落', type: 'interactive_overlay', description: '犬 Wobbler 步態影片標註互動元件（前後肢步幅分析）' },
  ],
  drug_api_links: ['Gabapentin', 'Prednisolone', 'Tramadol'],
  references: [
    { type: 'textbook', citation: 'Dewey CW, da Costa RC. Practical Guide to Canine and Feline Neurology, 3rd ed. Wiley-Blackwell, 2016. Chapter 12: Cervical Spondylomyelopathy.', relevance: 'CSM 分類與治療標準教材' },
    { type: 'textbook', citation: 'Platt SR, Olby NJ. BSAVA Manual of Canine and Feline Neurology, 4th ed. BSAVA, 2013.', relevance: '頸椎脊髓疾病診斷與手術基礎' },
    { type: 'journal', citation: 'da Costa RC et al. Morphology and morphometry of the caudal cervical vertebral column in the Doberman Pinscher and Great Dane. Vet Radiol Ultrasound. 2006;47(1):1-8.', relevance: 'Doberman 與 Great Dane 頸椎形態學研究' },
    { type: 'journal', citation: 'De Decker S et al. Surgical treatment of disk-associated wobbler syndrome by a distractable vertebral titanium cage in seven dogs. Vet Surg. 2012;41(2):248-258.', relevance: 'CSM 手術新技術（titanium cage distraction-fusion）' },
    { type: 'guideline', citation: 'da Costa RC. Cervical spondylomyelopathy (wobbler syndrome) in dogs. Vet Clin North Am Small Anim Pract. 2010;40(5):881-913. (ACVIM review consensus on CSM classification and management)', relevance: 'ACVIM CSM 分類與管理共識回顧' },
  ],
  is_current: true,
  created_at: now,
};

/** 纖維軟骨栓塞 (FCE) — 疾病型 */
const contentFCE: NodeContent = {
  id: 'CONTENT-NEURO-L3-010',
  node_id: 'NEURO-L3-010',
  version: 1,
  summary: '纖維軟骨栓塞（Fibrocartilaginous Embolism, FCE）是犬常見的脊髓血管疾病，由椎間盤纖維軟骨物質栓塞脊髓供血動脈（或靜脈）導致急性脊髓梗塞。典型特徵為超急性發作（數分鐘至數小時內達最嚴重程度）、初始事件後通常無疼痛（non-painful after initial event）、以及側化的不對稱神經功能缺損（lateralized/asymmetric deficit）。大型犬與巨型犬好發。MRI 顯示符合血管分佈區域的脊髓內病灶（intramedullary lesion matching vascular territory）。無手術治療適應症，以支持性照護與復健為主。保留自主運動功能者預後良好。台灣大型犬飼養比例逐年增加（Labrador、Golden Retriever 為熱門犬種），FCE 在本土神經科急診中需與 IVDD 鑑別；台灣多家動物醫院已配備 MRI 設備，可即時確診並啟動復健計畫。',
  learning_objectives: [
    '描述 FCE 的病因假說與病理機轉',
    '辨識 FCE 的三大臨床特徵：超急性、非疼痛、不對稱',
    '說明 FCE 的 MRI 典型影像表現與其他急性脊髓疾病的鑑別',
    '掌握 FCE 支持性治療與復健策略',
    '評估 FCE 的預後因子',
  ],
  key_points: [
    '超急性發作：數分鐘至數小時內達最嚴重程度，多數在運動或玩耍中發病',
    '初始事件後無疼痛：初始可能有短暫尖叫/疼痛反應，但之後脊髓觸診無痛——與 IVDD 的持續疼痛形成鮮明對比',
    '不對稱/側化神經功能缺損：一側肢體比另一側嚴重（lateralized），符合單側血管分佈',
    '好發犬種：大型/巨型犬（Labrador、GSD、Greyhound、Irish Wolfhound），但小型犬（Miniature Schnauzer、Shetland Sheepdog）亦可發生',
    '非進行性：達最嚴重後不再惡化（通常 12-24 小時後穩定），有別於 IVDD 的可能進行性惡化',
    'MRI 特徵：T2WI 脊髓內高訊號（intramedullary hyperintensity），符合特定血管灌流區域（通常為灰質或灰白質交界），無壓迫性病灶，無對比增強（急性期）',
    '無手術治療：支持性照護（尿路管理、褥瘡預防）+ 積極復健（水療、被動/主動關節運動、站立訓練）為核心',
  ],
  body: `# 纖維軟骨栓塞 (Fibrocartilaginous Embolism, FCE)

## 一、主要內容 (Pathophysiology)



### 概述
FCE 是犬最常見的脊髓血管疾病，約占犬急性非進行性脊髓疾病的 24%。椎間盤纖維軟骨物質（組織學上與椎間盤 nucleus pulposus 成分相同）進入脊髓供血血管（動脈或靜脈），造成急性脊髓梗塞。

### 病因假說
確切機轉尚未完全釐清，主要假說包括：
- 椎間盤退化過程中纖維軟骨物質進入脊椎體靜脈竇（vertebral venous sinuses），逆行至脊髓血管
- 高衝擊運動時椎間盤內壓力突增，纖維軟骨物質穿透血管壁進入動脈
- 異常血管通道（殘存胚胎血管）提供纖維軟骨物質進入脊髓血管的途徑

### 脊髓梗塞機轉
纖維軟骨栓子 → 脊髓節段動脈（segmental artery）或中央動脈（central artery）阻塞 → 灰質（grey matter）首先受累（代謝需求高、微血管密度高）→ 缺血壞死 → 灰質軟化（myelomalacia）。梗塞範圍取決於栓塞血管大小與側支循環能力。

## 二、判讀要點 (Clinical Signs & Diagnosis)

### 臨床三大特徵
1. **超急性發作**：通常在運動中突然發病，數分鐘至數小時內達最嚴重程度
2. **非疼痛性**（初始事件後）：犬可能在發病瞬間尖叫，但之後脊髓觸診不引起疼痛反應
3. **不對稱/側化**：一側肢體明顯比另一側嚴重，反映單側血管灌流區域梗塞

### MRI 表現
- T2WI：脊髓內高訊號（intramedullary hyperintensity），通常在灰質或灰白質交界處
- T1WI：等訊號至低訊號
- 對比增強：急性期通常無增強（亞急性期可能出現輕度增強）
- 無椎管外壓迫性病灶

### 鑑別診斷關鍵
| 鑑別 | FCE 特徵 | 鑑別疾病特徵 |
|------|---------|-------------|
| IVDD Hansen Type I | 無痛、非進行性、不對稱 | 疼痛持續、可進行性、較對稱、MRI 見壓迫 |
| IVDD Hansen Type III | 極相似——兩者可能難以區分 | MRI 可見少量突出物 |
| 脊椎骨折/脫位 | 無外傷史 | 有明確外傷史，X 光/CT 見骨折 |
| 出血性脊髓梗塞 | MRI 無出血訊號 | MRI 見出血訊號（T1 高訊號、gradient echo 低訊號） |

## 三、常見陷阱 (Common Pitfalls)

- 將所有急性脊髓病變都當作 IVDD——FCE 的無痛、不對稱、非進行性特徵可鑑別
- FCE 初始發病時可能有短暫疼痛（尖叫），不應因此排除 FCE——關鍵是之後的持續非疼痛性
- 小型犬也可以發生 FCE——Miniature Schnauzer 與 Shetland Sheepdog 有報告
- FCE 超急性期（< 12 小時）MRI 可能尚無明顯 T2 高訊號——若臨床高度懷疑但首次 MRI 正常，24-48 小時後重複 MRI

## 四、人醫借鑒 (Translational Insights)

| 人醫工具/概念 | 獸醫應用潛力 | 現況 |
|-------------|-------------|------|
| DWI/ADC MRI 序列 | 犬 FCE 超急性期偵測（早於常規 T2WI） | 人醫腦中風常規使用 DWI，犬脊髓 DWI 研究起步中 |
| 急性脊髓梗塞復健策略 | 犬 FCE 循證復健計畫 | 人醫脊髓復健證據增加，可轉譯至犬 |

## 五、臨床爭議 (Controversies & Knowledge Gaps)

| 爭議議題 | 現況 | Evidence Level |
|---------|------|---------------|
| FCE vs Hansen Type III 的鑑別 | 兩者臨床與 MRI 表現可極度相似，部分學者認為兩者為同一疾病譜系的不同端 | Level IV |
| FCE 的確切栓塞路徑 | 動脈 vs 靜脈 vs 混合，纖維軟骨如何進入血管仍有爭議 | Level IV |
| 急性期類固醇使用 | 目前無證據支持類固醇對 FCE 有益，部分神經科醫師仍經驗性使用短期 Dexamethasone | Level IV |`,
  clinical_pearl: 'FCE 的臨床診斷三要素——超急性、非疼痛、不對稱——是在急診中與 IVDD Hansen Type I 鑑別的關鍵。一隻大型犬在運動中突然後肢癱瘓，一側明顯比另一側嚴重，脊椎觸診不痛——高度懷疑 FCE。而臘腸犬急性後肢癱瘓伴嚴重背痛與較對稱的神經功能缺損——高度懷疑 IVDD。FCE 確診後最重要的訊息是告訴飼主：這不是 IVDD，不需要手術，積極復健是最佳治療。保留自主運動功能的犬預後良好，多數可在 6-12 週內恢復行走能力。',
  common_mistakes: [
    '將 FCE 誤診為 IVDD 並進行不必要的減壓手術——FCE 無壓迫性病灶，手術無益',
    '忽略 FCE 的不對稱性——IVDD 通常較對稱，明顯側化的急性脊髓病變應優先考慮 FCE',
    '因初始發病時的短暫疼痛（尖叫）而排除 FCE——FCE 的特徵是持續性非疼痛，非完全無疼痛',
    '在 FCE 急性期使用高劑量類固醇——無證據支持療效，且可能引起消化道併發症',
    '對深痛覺喪失的 FCE 犬過早放棄——FCE 預後優於同等嚴重度的 IVDD，應給予更長的恢復觀察期',
  ],
  disease_data: {
    signalment: '大型/巨型犬好發：Labrador Retriever、German Shepherd Dog、Greyhound、Irish Wolfhound。小型犬亦可發生（Miniature Schnauzer、Shetland Sheepdog）。犬：成年（中位年齡 5-6 歲），貓少見但有報告。無明顯性別偏好，部分研究顯示雄性略多。',
    etiology: '椎間盤纖維軟骨物質（成分與 nucleus pulposus 相同）栓塞脊髓節段動脈或靜脈。確切進入血管的路徑未完全釐清。多數在運動或劇烈活動中發病，提示急性椎間盤內壓力變化可能為觸發因素。',
    pathogenesis: '纖維軟骨栓子進入脊髓血管 → 節段性動脈/靜脈阻塞 → 脊髓灰質首先缺血（代謝需求高）→ 缺血性壞死（myelomalacia）→ 梗塞範圍取決於栓塞血管的大小與側支循環 → 單側為主的不對稱脊髓損傷。非進行性——栓塞一旦發生即固定，不會持續擴大。',
    clinical_signs: [
      { sign: '超急性肢體癱瘓/輕癱', category: 'primary', description: '數分鐘至數小時內達最嚴重程度，通常在運動中發病' },
      { sign: '不對稱/側化神經功能缺損', category: 'primary', description: '一側肢體比另一側嚴重，反映單側血管灌流區域' },
      { sign: '非疼痛性（初始事件後）', category: 'primary', description: '發病瞬間可能尖叫，但之後脊髓觸診無痛反應' },
      { sign: '非進行性病程', category: 'secondary', description: '達最嚴重後 12-24 小時內穩定，不再惡化' },
      { sign: '排尿功能障礙', category: 'secondary', description: '嚴重病例可伴 UMN 或 LMN 膀胱，取決於梗塞位置' },
    ],
    staging: null,
    differential_diagnosis: [
      { condition: 'IVDD Hansen Type I', key_differentiator: '持續疼痛、較對稱、可為進行性、MRI 見壓迫性病灶（突出的椎間盤物質）' },
      { condition: 'IVDD Hansen Type III', key_differentiator: '與 FCE 極度相似——兩者可能無法 MRI 鑑別，Type III 可見少量突出物，FCE 完全無壓迫' },
      { condition: '脊椎骨折/脫位', key_differentiator: '有外傷史，X 光/CT 見明確骨折或脫位' },
      { condition: '出血性脊髓梗塞', key_differentiator: 'MRI 見出血訊號（T1 高訊號、gradient echo blooming artifact）' },
      { condition: '主動脈血栓栓塞（ATE，貓）', key_differentiator: '貓：後肢冰冷、股動脈脈搏消失、趾甲切面無出血，常伴 HCM' },
    ],
    diagnostic_workup: '1. 神經學檢查（評估不對稱性、定位脊髓節段、確認非疼痛性）→ 2. 基礎血檢排除凝血異常與系統性疾病 → 3. MRI（金標準：T2WI 脊髓內高訊號、無壓迫性病灶、符合血管分佈區域；注意超急性期 < 12h 可能尚無明顯變化）→ 4. CSF 分析（排除發炎性疾病，FCE 通常正常或輕度蛋白升高）→ 5. 確診需組織病理學（臨床以推定診斷為主：典型臨床表現 + MRI 支持 + 排除其他病因）',
    treatment_protocol: '無手術適應症。支持性照護：尿路管理（擠壓膀胱或導尿，預防尿路感染）、褥瘡預防（翻身、軟墊）、營養支持。積極復健為核心治療：水療（underwater treadmill）、被動關節運動（PROM）、主動輔助運動、站立平衡訓練、電刺激（NMES）。復健應在穩定後盡早開始（24-48 小時內）。急性期無證據支持類固醇或其他神經保護藥物。',
    prognosis: '整體預後優於同等嚴重度的 IVDD。保留自主運動功能（能自主移動肢體）者預後良好，85-90% 可恢復行走能力（通常 6-12 週）。深痛覺存在但無自主運動者：約 50-60% 可恢復行走。深痛覺喪失者：預後謹慎但仍優於 IVDD Grade V（約 25-50% 可恢復）。預後良好因子：保留自主運動、小面積梗塞、早期積極復健。預後不良因子：深痛覺喪失、廣泛脊髓 T2 高訊號（> 2 椎體長度）、LMN 損傷為主。',
    monitoring: '急性期（1-3 天）：每 12 小時神經學評估確認非進行性。亞急性期（1-4 週）：每週神經學與步態評估追蹤恢復進度。復健期（1-3 個月）：每 2 週評估復健成效並調整計畫。長期：FCE 復發少見，恢復後通常無需長期追蹤。膀胱管理期間每週尿液培養監測感染。',
    owner_communication: 'FCE 是一種脊髓血管意外（類似人的中風），不是椎間盤突出（IVDD），不需要手術。好消息是 FCE 不會持續惡化——發病後穩定即為最差狀態，之後只會改善或維持。積極復健（水療、物理治療）是最重要的治療。保留肢體自主運動能力的犬，絕大多數可在 6-12 週內恢復行走。即使深痛覺喪失的犬，FCE 的恢復機會也比 IVDD 更高——請不要太早放棄。復健期間需要耐心，進步可能是緩慢但持續的。',
  },
  diagnostic_data: null,
  procedure_data: null,
  visual_placeholders: [
    { position: '脊髓梗塞機轉段落後', type: 'flowchart', description: 'FCE 病理機轉與脊髓血管分佈示意圖' },
    { position: '鑑別診斷表格後', type: 'comparison_table', description: 'FCE vs IVDD Type I vs Type III 臨床與 MRI 鑑別比較表' },
  ],
  interactive_placeholders: [
    { position: '臨床三大特徵段落', type: 'interactive_overlay', description: '輸入臨床特徵（發作速度、疼痛、對稱性）評估 FCE 可能性' },
  ],
  drug_api_links: [],
  references: [
    { type: 'textbook', citation: 'Dewey CW, da Costa RC. Practical Guide to Canine and Feline Neurology, 3rd ed. Wiley-Blackwell, 2016. Chapter 13: Vascular Diseases of the Spinal Cord.', relevance: 'FCE 病理與臨床標準教材' },
    { type: 'textbook', citation: 'Platt SR, Olby NJ. BSAVA Manual of Canine and Feline Neurology, 4th ed. BSAVA, 2013.', relevance: '脊髓血管疾病診斷基礎' },
    { type: 'journal', citation: 'De Risio L et al. Fibrocartilaginous embolism in small animals. Vet J. 2009;179(2):171-178.', relevance: 'FCE 綜合回顧與預後因子分析' },
    { type: 'journal', citation: 'Gandini G et al. Fibrocartilaginous embolism in 75 dogs: clinical findings and factors influencing the recovery rate. J Small Anim Pract. 2003;44(2):76-80.', relevance: 'FCE 大規模回顧研究與恢復率' },
    { type: 'guideline', citation: 'Olby NJ, Levine JM, Harris T, et al. ACVIM Consensus Statement: Long-Term Functional Outcome in Dogs with Spinal Cord Injury. J Vet Intern Med. 2020;34(6):2255-2269.', relevance: 'ACVIM 犬脊髓損傷長期功能預後共識聲明（含 FCE 復健指引）' },
  ],
  is_current: true,
  created_at: now,
};

/** 椎間盤炎 (Discospondylitis) — 疾病型 */
const contentDiscospondylitis: NodeContent = {
  id: 'CONTENT-NEURO-L3-011',
  node_id: 'NEURO-L3-011',
  version: 1,
  summary: '椎間盤炎（Discospondylitis）是椎間盤與鄰近椎體終板的感染性發炎，最常由細菌（Staphylococcus pseudintermedius 最常見）經血行途徑播散至脊椎引起，真菌感染（Aspergillus）亦有報告（尤其德國牧羊犬）。臨床表現為脊椎疼痛、發燒、+/- 神經功能缺損。X 光特徵為椎體終板溶蝕（endplate lysis）與反應性新骨增生，但影像變化可能延遲 2-4 週出現。MRI 可早期偵測。血液/尿液培養有助於鑑定病原菌。治療以長期抗生素（至少 6-8 週）為主。犬布氏桿菌病（Brucella canis）為重要鑑別且具人畜共通傳染風險。台灣亞熱帶氣候下犬皮膚感染與泌尿道感染盛行率高，為 Discospondylitis 血行播散的本土常見原發灶；Brucella canis 在台灣雖非高盛行但流行病學監測持續進行中，臨床上仍需列入鑑別。',
  learning_objectives: [
    '說明 Discospondylitis 的感染途徑與常見致病菌',
    '描述 X 光的典型影像特徵及其延遲出現的時間點',
    '列出 MRI 在早期診斷中的優勢',
    '掌握長期抗生素治療原則與療程',
    '辨識 Brucella canis 作為致病原的臨床與公共衛生意義',
  ],
  key_points: [
    '最常見致病菌：Staphylococcus pseudintermedius（約 40-50%），其次 Streptococcus spp.、E. coli；真菌：Aspergillus spp.（GSD 好發）',
    '感染途徑：血行播散為主（來自泌尿道感染、皮膚感染、心內膜炎、口腔感染等原發灶）',
    '好發犬種：大型犬（GSD、Great Dane、Rottweiler），中年犬（平均 4-6 歲），雄性略多',
    'X 光典型表現：椎體終板溶蝕（endplate lysis）+ 椎間隙狹窄或塌陷 + 反應性新骨增生（spondylosis），但變化可能延遲 2-4 週出現',
    'MRI 優勢：可在 X 光變化出現前偵測（T2WI 椎間盤與終板高訊號、T1WI 終板低訊號、對比增強明顯），且可評估脊髓壓迫與硬膜外膿瘍',
    '治療：依培養結果選擇抗生素（經驗性治療：Cephalexin 或 Amoxicillin-clavulanate），療程至少 6-8 週，以 X 光骨性癒合為停藥依據',
    'Brucella canis：必須排除——血清學篩檢，陽性者有人畜共通傳染風險，治療困難（長期 Doxycycline + Aminoglycoside），預後謹慎',
  ],
  body: `# 椎間盤炎 (Discospondylitis)

## 一、主要內容 (Pathophysiology)



### 概述
Discospondylitis 是椎間盤與鄰近椎體終板的感染性發炎（infection of the intervertebral disc and adjacent vertebral endplates），為犬脊椎感染最常見的形式。感染可能擴展至椎管形成硬膜外膿瘍（epidural abscess/empyema），導致脊髓壓迫。

### 感染途徑
- **血行播散**（最常見）：遠處感染灶（泌尿道、皮膚、口腔、心內膜）的細菌經血流到達椎體終板微血管
- **直接接種**：脊椎手術或椎間盤開窗術後感染（少見）
- **鄰近結構擴散**：鄰近軟組織感染擴散至脊椎（少見）

### 致病菌
| 病原 | 佔比 | 特點 |
|------|------|------|
| Staphylococcus pseudintermedius | 40-50% | 最常見，來自皮膚/泌尿道 |
| Streptococcus spp. | 10-15% | 口腔/呼吸道來源 |
| E. coli | 10% | 泌尿道來源 |
| Brucella canis | 5-10% | 人畜共通傳染！繁殖犬高風險 |
| Aspergillus spp. | 少見 | GSD 好發，免疫抑制犬風險增加 |

## 二、判讀要點 (Clinical Signs & Diagnosis)

### 臨床表現
- **脊椎疼痛**為最一致的臨床症狀：觸診脊椎特定位點引起疼痛反應
- 發燒（約 50% 犬可能無發燒）
- 嗜睡、食慾下降、體重減輕
- 神經功能缺損（約 30-50%）：取決於感染位置與脊髓壓迫程度
- 腰薦椎感染：尾部下垂、後肢疼痛、排便排尿困難

### 影像診斷時間線
- **X 光**（2-4 週延遲）：椎體終板溶蝕 → 椎間隙狹窄 → 反應性新骨增生。急性期 X 光可能完全正常！
- **MRI**（早期偵測）：T2WI 椎間盤與終板高訊號 + T1WI 終板低訊號 + 對比增強明顯 + 可評估硬膜外膿瘍與脊髓壓迫
- **CT**：骨性變化評估優於 MRI，可與 MRI 互補

### 病原鑑定
- 血液培養（敏感度約 45-75%）：需在抗生素治療前採集
- 尿液培養（檢測泌尿道原發灶）
- 受影響椎間盤 CT/螢光導引穿刺培養（敏感度最高但侵入性）
- Brucella canis 血清學篩檢：所有 Discospondylitis 犬必須執行

## 三、常見陷阱 (Common Pitfalls)

- 急性期 X 光正常不能排除 Discospondylitis——骨性變化延遲 2-4 週出現
- 不是所有 Discospondylitis 犬都有發燒——約 50% 可能體溫正常
- 未在開始抗生素前採集血液與尿液培養——一旦用藥後培養敏感度大幅下降
- 每隻 Discospondylitis 犬都必須排除 Brucella canis——漏診有公共衛生風險
- 抗生素療程不足（< 6 週）是復發最常見的原因——應以影像學骨性癒合為停藥依據

## 四、人醫借鑒 (Translational Insights)

| 人醫工具/概念 | 獸醫應用潛力 | 現況 |
|-------------|-------------|------|
| C-reactive protein (CRP) 監測治療反應 | 犬 Discospondylitis 治療效果的早期評估 | 人醫常規使用 CRP/ESR 監測，犬 CRP 研究增加中 |
| PET-CT 偵測脊椎感染 | 犬多灶性/隱匿性 Discospondylitis 偵測 | 人醫用於複雜脊椎感染診斷，獸醫尚無常規使用 |

## 五、臨床爭議 (Controversies & Knowledge Gaps)

| 爭議議題 | 現況 | Evidence Level |
|---------|------|---------------|
| 經驗性抗生素選擇 | 在培養結果出前，第一代頭孢 vs Amoxicillin-clavulanate vs Fluoroquinolone 的最佳選擇未有共識 | Level IV |
| 抗生素最佳療程長度 | 慣例 6-8 週，但部分複雜病例可能需 3-6 個月，缺乏前瞻性研究確定最佳療程 | Level IV |
| 硬膜外膿瘍手術引流 vs 保守治療 | 大多數可單獨抗生素治療，手術引流的適應症尚未標準化 | Level IV |`,
  clinical_pearl: 'Discospondylitis 的診斷時間陷阱是最常被忽略的要點。一隻有脊椎疼痛與發燒的犬，X 光完全正常不能排除 Discospondylitis——骨性變化需要 2-4 週才會出現。若臨床高度懷疑（大型犬 + 脊椎局部疼痛 + 發燒 + WBC 升高），應直接安排 MRI 或在 2-3 週後重複 X 光。同時記住每一隻 Discospondylitis 犬都必須篩檢 Brucella canis——這是少數具有人畜共通傳染風險的犬神經疾病，漏診可能影響飼主健康。',
  common_mistakes: [
    '急性期 X 光正常即排除 Discospondylitis——骨性變化延遲 2-4 週',
    '開始抗生素後才採集培養——大幅降低培養陽性率',
    '遺漏 Brucella canis 血清學篩檢——具人畜共通傳染風險',
    '抗生素療程不足即停藥——最低 6-8 週，應以影像學骨性癒合為依據',
    '忽略尋找原發感染灶（泌尿道感染、心內膜炎、齒科疾病）——未處理原發灶易復發',
  ],
  disease_data: {
    signalment: '大型犬好發：German Shepherd Dog、Great Dane、Rottweiler、Labrador Retriever。中年犬（平均 4-6 歲）。雄性略多（雄:雌約 2:1）。Aspergillus Discospondylitis：GSD 明顯好發。Brucella Discospondylitis：未絕育繁殖犬高風險。',
    etiology: '感染性——細菌（Staphylococcus pseudintermedius 最常見，約 40-50%）或真菌（Aspergillus spp.）經血行途徑從遠處感染灶播散至椎體終板微血管。常見原發灶：泌尿道感染、皮膚感染、心內膜炎、口腔/齒科感染。免疫抑制（長期類固醇使用、糖尿病）為風險因子。',
    pathogenesis: '致病菌經血行到達椎體終板微血管 → 細菌定殖於終板軟骨下骨 → 感染擴散至椎間盤（avascular structure，感染後難以清除）與鄰近椎體 → 終板骨質溶蝕 + 椎間盤壞死 + 反應性新骨增生。感染可向椎管擴散形成硬膜外膿瘍（epidural empyema）→ 脊髓壓迫 → 神經功能缺損。',
    clinical_signs: [
      { sign: '脊椎疼痛', category: 'primary', description: '最一致症狀——觸診特定脊椎區域引起明顯疼痛反應，可表現為弓背、行走僵硬、不願活動' },
      { sign: '發燒', category: 'primary', description: '約 50% 犬有發燒（> 39.5°C），但體溫正常不能排除' },
      { sign: '嗜睡/食慾下降', category: 'primary', description: '全身性感染的非特異性表現' },
      { sign: '神經功能缺損', category: 'secondary', description: '約 30-50%：取決於感染位置，輕癱、共濟失調、排尿障礙（硬膜外膿瘍壓迫脊髓時）' },
      { sign: '尾部下垂/排便困難', category: 'secondary', description: '腰薦椎感染特徵，可伴肛門張力下降' },
    ],
    staging: null,
    differential_diagnosis: [
      { condition: 'IVDD（椎間盤疾病）', key_differentiator: '急性發作、無發燒、白血球正常、X 光見椎間盤鈣化而非終板溶蝕、MRI 見壓迫性病灶而非感染訊號' },
      { condition: '脊椎腫瘤', key_differentiator: '慢性進行性、X 光見溶骨性破壞但不伴終板溶蝕模式、MRI 見腫塊對比增強，通常單一椎體' },
      { condition: 'Spondylosis deformans', key_differentiator: '通常無臨床症狀（incidental finding），X 光見椎體腹側骨贅但終板完整' },
      { condition: '免疫介導性多關節炎', key_differentiator: '多關節受累、關節腫脹/疼痛、X 光無脊椎終板變化、關節液分析呈無菌性炎症' },
    ],
    diagnostic_workup: '1. 理學檢查 + 脊椎觸診定位疼痛 → 2. CBC/生化（白血球升高、CRP 升高）→ 3. 尿液分析 + 尿液培養（檢測泌尿道原發灶）→ 4. 血液培養（抗生素使用前！2-3 組需氧/厭氧培養）→ 5. 脊椎 X 光（初始 + 2-3 週後重複）→ 6. MRI（早期偵測、評估硬膜外膿瘍與脊髓壓迫程度）→ 7. Brucella canis 血清學（RSAT 篩檢，陽性者 AGID 確認）→ 8. CT 導引椎間盤穿刺培養（培養陰性時考慮）',
    treatment_protocol: '抗生素治療為核心：經驗性首選——Cephalexin 22 mg/kg PO BID 或 Amoxicillin-clavulanate 12.5-25 mg/kg PO BID（依培養藥敏調整）。Enrofloxacin 5-10 mg/kg PO SID 為脊椎滲透性佳的替代選擇（避免用於生長期犬）。療程：最低 6-8 週，複雜病例可達 3-6 個月。停藥依據：臨床症狀消失 + X 光/MRI 顯示骨性癒合。Aspergillus Discospondylitis：Itraconazole 5 mg/kg PO BID 長期。Brucella：Doxycycline + Aminoglycoside。硬膜外膿瘍造成嚴重脊髓壓迫時考慮手術引流。疼痛管理：Gabapentin 5-10 mg/kg TID + Tramadol PRN。',
    prognosis: '細菌性 Discospondylitis（非 Brucella）：抗生素治療反應通常良好，約 70-80% 犬臨床痊癒。無神經功能缺損者預後最佳。伴硬膜外膿瘍但及時治療者預後中等。復發率約 10-15%（多因療程不足）。Aspergillus Discospondylitis：預後謹慎至不良，需極長期抗真菌治療且復發率高。Brucella Discospondylitis：治療困難，根除率低，有公共衛生考量。預後不良因子：多灶性感染、嚴重神經功能缺損、Aspergillus/Brucella 感染、免疫抑制犬。',
    monitoring: '治療期間：每 2 週臨床評估（疼痛、體溫、神經功能）+ 每月 CBC/CRP 追蹤感染指標。影像追蹤：每 4-6 週 X 光評估骨性變化（終板溶蝕停止、新骨增生增加代表癒合）。停藥後：1 個月與 3 個月追蹤 X 光確認持續癒合，無復發徵兆。Brucella 陽性犬：終身追蹤血清學。',
    owner_communication: 'Discospondylitis 是脊椎的感染，類似人的骨髓炎。治療需要長期抗生素（至少 6-8 週，可能更長），不能因為症狀改善就自行停藥——提前停藥是復發最常見的原因。大多數犬對抗生素治療反應良好，約 70-80% 可完全康復。若犬被診斷為 Brucella canis 感染，需特別注意這是一種人畜共通傳染病，家人（尤其免疫低下者與孕婦）可能有感染風險，需諮詢醫師。',
  },
  diagnostic_data: null,
  procedure_data: null,
  visual_placeholders: [
    { position: '致病菌表格後', type: 'annotated_image', description: 'Discospondylitis X 光典型影像（終板溶蝕與新骨增生）標註圖' },
    { position: '影像診斷段落後', type: 'timeline', description: 'Discospondylitis 影像變化時間線（X 光 vs MRI 偵測時間點）' },
  ],
  interactive_placeholders: [
    { position: '抗生素治療段落', type: 'interactive_overlay', description: '依培養結果選擇抗生素方案互動決策工具' },
  ],
  drug_api_links: ['Cephalexin', 'Amoxicillin-clavulanate', 'Enrofloxacin'],
  references: [
    { type: 'textbook', citation: 'Dewey CW, da Costa RC. Practical Guide to Canine and Feline Neurology, 3rd ed. Wiley-Blackwell, 2016. Chapter 13: Infectious & Inflammatory Diseases of the Spine.', relevance: 'Discospondylitis 臨床診斷與治療標準教材' },
    { type: 'textbook', citation: 'Platt SR, Olby NJ. BSAVA Manual of Canine and Feline Neurology, 4th ed. BSAVA, 2013.', relevance: '脊椎感染鑑別診斷基礎' },
    { type: 'journal', citation: 'Tipold A, Stein VM. Inflammatory diseases of the spine in small animals. Vet Clin North Am Small Anim Pract. 2010;40(5):871-879.', relevance: '犬脊椎炎症性疾病綜合回顧' },
    { type: 'journal', citation: 'Harris JM et al. Clinical features and outcome of dogs with discospondylitis: 69 cases (1986-2006). J Am Vet Med Assoc. 2013;242(3):359-363.', relevance: 'Discospondylitis 大規模回顧研究與預後因子' },
    { type: 'guideline', citation: 'Sykes JE, Hartmann K, Lunn KF, et al. ACVIM Consensus Statement: 2010 ACVIM Small Animal Consensus Statement on Leptospirosis — Diagnosis, Epidemiology, Treatment, and Prevention. J Vet Intern Med. 2011;25(1):1-13.', relevance: 'ACVIM 鉤端螺旋體共識聲明（discospondylitis 重要鑑別感染源）' },
  ],
  is_current: true,
  created_at: now,
};

/** 水腦症 (Hydrocephalus) — 疾病型 */
const contentHydrocephalus: NodeContent = {
  id: 'CONTENT-NEURO-L3-012',
  node_id: 'NEURO-L3-012',
  version: 1,
  summary: '水腦症（Hydrocephalus）是腦脊髓液（CSF）於腦室系統中異常蓄積導致腦室擴張的疾病。分為先天性（Congenital）與後天性（Acquired）。先天性水腦症好發於玩具犬品種（Chihuahua、Yorkshire Terrier、Pomeranian、Maltese），特徵為開放前囟門（open fontanelle）、圓頂狀頭蓋骨（dome-shaped skull）、腹外側斜視（ventrolateral strabismus）。後天性水腦症多因腫瘤、發炎或出血阻塞 CSF 循環通路所致。診斷依據超音波（經前囟門）或 MRI。治療分內科（Omeprazole 降低 CSF 產生、Prednisolone 減少腦水腫、Acetazolamide 抑制 CSF 分泌）與外科（腦室腹腔引流管 VP shunt）。',
  learning_objectives: [
    '區分先天性與後天性水腦症的病因與病理機轉',
    '辨識先天性水腦症的典型外觀特徵（開放前囟門、圓頂頭骨、腹外側斜視）',
    '說明 CSF 循環路徑與水腦症的分類（阻塞性 vs 交通性）',
    '比較超音波與 MRI 在水腦症診斷中的角色',
    '掌握內科與外科治療的適應症與併發症',
  ],
  key_points: [
    '先天性水腦症好發品種：Chihuahua、Yorkshire Terrier、Pomeranian、Maltese、English Bulldog、Lhasa Apso、Toy Poodle',
    '先天性外觀三徵：開放前囟門（persistent open fontanelle）+ 圓頂狀頭蓋骨（dome-shaped calvarium）+ 腹外側斜視（ventrolateral strabismus, "setting sun sign"）',
    '水腦症分類：阻塞性/非交通性（Obstructive/Non-communicating，CSF 腦室系統內阻塞，如導水管狹窄）vs 交通性（Communicating，CSF 吸收障礙或過度產生）',
    '超音波經前囟門：無需麻醉的快速篩檢工具，可即時評估腦室大小',
    'MRI 確認診斷：腦室擴張程度量化（V/B ratio）、評估阻塞位置、排除腫瘤/發炎等續發原因',
    '內科治療：Omeprazole 1 mg/kg PO BID（降低脈絡叢 CSF 產生，研究顯示可減少 CSF 產生率約 26%）+ Prednisolone 0.5-1 mg/kg/day（減少腦水腫）+ Acetazolamide 10 mg/kg PO TID（碳酸酐酶抑制劑，減少 CSF 分泌）',
    '外科治療：腦室腹腔引流管（VP shunt）——適用於內科治療反應不佳或嚴重/進行性神經功能缺損的病例，併發症包括阻塞、感染、過度引流',
  ],
  body: `# 水腦症 (Hydrocephalus)

## 一、主要內容 (Pathophysiology)



### CSF 循環路徑
CSF 由側腦室與第三腦室脈絡叢（choroid plexus）產生 → 經室間孔（foramen of Monro）至第三腦室 → 經中腦導水管（mesencephalic aqueduct）至第四腦室 → 經側孔（foramen of Luschka）與正中孔（foramen of Magendie）至蛛網膜下腔 → 經蛛網膜絨毛（arachnoid villi）吸收至靜脈竇。此循環中任何環節阻塞或吸收障礙均可導致水腦症。

### 分類
- **阻塞性/非交通性水腦症（Obstructive/Non-communicating）**：CSF 循環在腦室系統內阻塞——最常見阻塞位置為中腦導水管（先天性狹窄或腫瘤壓迫）→ 側腦室與第三腦室擴張，第四腦室正常
- **交通性水腦症（Communicating）**：CSF 可自由流通至蛛網膜下腔，但吸收障礙（蛛網膜絨毛功能不良）或過度產生（脈絡叢乳頭瘤 CPP）→ 所有腦室均勻擴張

### 先天性水腦症
- 多為導水管發育異常（aqueductal stenosis）導致的阻塞性水腦症
- 玩具犬品種遺傳易感性高
- 顱骨癒合不全 → 前囟門持續開放（正常犬出生後數週即閉合）
- 腦室擴張壓迫腦皮質 → 皮質變薄 → 認知功能障礙
- 並非所有有開放前囟門的玩具犬都有臨床症狀——腦室擴張可為亞臨床

### 後天性水腦症
- 腫瘤阻塞 CSF 通路（脈絡叢腫瘤、室管膜瘤、腦幹腫瘤）
- 發炎後纖維化阻塞（腦膜炎/腦室炎後遺症）
- 顱內出血後蛛網膜絨毛阻塞

## 二、判讀要點 (Clinical Signs & Diagnosis)

### 先天性水腦症典型表現
- 外觀特徵：圓頂狀頭蓋骨（dome-shaped calvarium）、開放前囟門（可觸診到顱骨頂部軟性缺損）、腹外側斜視（"setting sun sign"，因中腦 tectum 壓迫導致眼球腹外側偏位）
- 神經功能障礙：學習能力差（house-training 困難）、遲鈍、盲目行走、迴轉行為（circling）、癲癇發作
- 症狀嚴重度與皮質殘餘厚度相關，不一定與腦室大小完全成正比

### 診斷工具
- **超音波（經前囟門）**：開放前囟門犬的快速篩檢——無需麻醉，可即時測量腦室大小
- **MRI（金標準）**：精確量化腦室擴張（V/B ratio > 0.6 提示顯著擴張）、評估阻塞位置、排除腫瘤/發炎原因、評估腦皮質厚度
- **CT**：可替代 MRI 評估腦室大小與骨性結構

## 三、常見陷阱 (Common Pitfalls)

- 開放前囟門不等於水腦症——許多玩具犬有亞臨床前囟門開放且腦室正常或輕度擴張，無臨床意義
- 腦室擴張不等於需要治療——關鍵是是否有進行性神經功能障礙
- Acetazolamide 長期使用可能導致代謝性酸中毒——需定期監測電解質與血氣
- VP shunt 手術並非一勞永逸——阻塞（最常見）、感染、過度引流（slit ventricle syndrome）為主要併發症
- 將所有玩具犬的行為異常歸因於水腦症——認知障礙（CDS）、門體分流（PSS）等也需考慮

## 四、人醫借鑒 (Translational Insights)

| 人醫工具/概念 | 獸醫應用潛力 | 現況 |
|-------------|-------------|------|
| 可調壓 VP shunt（programmable valve） | 犬水腦症引流壓力客製化，避免過度引流 | 人醫小兒常規使用，獸醫零星報告 |
| 內視鏡第三腦室底造口術（ETV） | 犬阻塞性水腦症的微創替代（不需植入物） | 人醫小兒水腦症常用，獸醫可行性研究中 |
| 胎兒超音波篩檢水腦症 | 犬繁殖前/孕期篩檢玩具犬品種水腦症風險 | 人醫產前常規篩檢，獸醫品種繁殖諮詢可借鑒 |

## 五、臨床爭議 (Controversies & Knowledge Gaps)

| 爭議議題 | 現況 | Evidence Level |
|---------|------|---------------|
| Omeprazole 降低 CSF 產生的長期療效 | 短期研究顯示減少約 26% CSF 產生，但長期療效與安全性數據有限 | Level III |
| VP shunt 最佳手術時機 | 內科治療反應不佳時轉手術的時間點未標準化 | Level IV |
| 亞臨床腦室擴張的處理 | 許多玩具犬有無症狀性腦室擴張，是否需預防性治療或僅追蹤觀察無共識 | Level IV |`,
  clinical_pearl: '評估玩具犬品種的水腦症時，最重要的臨床判斷是區分「需要治療的水腦症」與「亞臨床腦室擴張」。許多 Chihuahua 與 Yorkshire Terrier 在 MRI 上可見輕度至中度腦室擴張但完全無臨床症狀——這些犬不需要治療。治療的決定應基於進行性神經功能障礙（癲癇頻率增加、行為持續退化、新發神經功能缺損），而非單純影像上的腦室大小。Omeprazole 1 mg/kg BID 是近年被引入的內科治療選擇，機轉為抑制脈絡叢質子泵從而降低 CSF 分泌，部分犬對此反應良好。\n\n【台灣流行病學】Chihuahua、Yorkshire Terrier、Pomeranian 等玩具犬品種在台灣飼養數量龐大，先天性水腦症在台灣臨床並不少見。經前囟門超音波為基層動物醫院可執行的快速篩檢。VP shunt 手術需轉介至具備神經外科能力的醫院。',
  common_mistakes: [
    '將所有有開放前囟門的玩具犬都診斷為水腦症——前囟門開放在玩具犬品種中常見且可能無臨床意義',
    '僅依據 MRI 腦室大小決定治療——臨床症狀嚴重度與進行性才是治療決策的關鍵',
    '長期使用 Acetazolamide 而未監測電解質——可導致代謝性酸中毒與低鉀血症',
    'VP shunt 術後未定期追蹤——shunt 阻塞是最常見併發症，需持續監測神經功能變化',
    '忽略後天性水腦症的續發原因——成年犬新發水腦症應積極排除腦腫瘤與發炎性疾病',
  ],
  disease_data: {
    signalment: '先天性：玩具犬品種（Chihuahua、Yorkshire Terrier、Pomeranian、Maltese、English Bulldog、Lhasa Apso、Toy Poodle），幼犬至年輕犬（通常 < 1 歲出現症狀，但輕度者可能成年才表現）。後天性：任何品種與年齡，取決於原發病因（腫瘤、發炎、出血）。無明顯性別偏好。',
    etiology: '先天性：導水管發育異常（aqueductal stenosis/atresia）為最常見原因，可能合併顱骨發育不全（open fontanelle）。遺傳因素在玩具犬品種中明確。後天性：CSF 循環通路阻塞——腦腫瘤（脈絡叢腫瘤、室管膜瘤）、腦膜炎/腦室炎後纖維化、顱內出血後蛛網膜絨毛阻塞、CSF 過度產生（脈絡叢乳頭瘤 CPP）。',
    pathogenesis: 'CSF 產生/循環/吸收失衡 → CSF 在腦室系統內蓄積 → 腦室擴張 → 腦實質（尤其白質）壓迫與變薄 → 腦皮質功能障礙（認知、視覺、運動）。顱骨未閉合（幼犬）時腦室擴張可藉顱骨膨脹部分代償；顱骨閉合後代償能力有限，ICP 升高更快。慢性腦室擴張導致室旁白質水腫與軸突損傷（periventricular edema → transependymal CSF absorption）。',
    clinical_signs: [
      { sign: '認知功能障礙', category: 'primary', description: '學習能力差、house-training 困難、反應遲鈍、行為異常（迴轉、press heading）' },
      { sign: '癲癇發作', category: 'primary', description: '前腦皮質壓迫導致的繼發性癲癇，可為局灶性或全身性' },
      { sign: '視覺障礙', category: 'primary', description: '雙側威脅反應減弱或消失（視皮質壓迫），PLR 通常正常' },
      { sign: '腹外側斜視', category: 'secondary', description: '"Setting sun sign"——中腦 tectum 壓迫致眼球腹外側偏位，先天性水腦症特徵' },
      { sign: '圓頂頭骨/前囟門開放', category: 'secondary', description: '先天性特徵——觸診頭頂可感受到顱骨缺損（open fontanelle）' },
    ],
    staging: null,
    differential_diagnosis: [
      { condition: '門體分流（PSS）', key_differentiator: '小型犬幼犬行為異常的重要鑑別——餐後血氨升高、膽汁酸異常、肝臟小，症狀與進食相關' },
      { condition: '犬認知障礙症候群（CDS）', key_differentiator: '老年犬（> 11 歲），進行性行為改變，MRI 無腦室顯著擴張' },
      { condition: '腦膜腦炎（MUO）', key_differentiator: '小型犬年輕至中年，CSF 炎症性變化，MRI 多灶性或彌漫性病灶' },
      { condition: '顱內腫瘤伴續發水腦', key_differentiator: 'MRI 可見原發腫塊 + 阻塞性腦室擴張，中老年犬' },
    ],
    diagnostic_workup: '1. 理學與神經學檢查（開放前囟門觸診、腹外側斜視辨識）→ 2. 超音波經前囟門（快速篩檢，無需麻醉，可即時評估腦室大小）→ 3. MRI（金標準：量化腦室擴張 V/B ratio、評估阻塞位置、排除腫瘤/發炎原因、評估腦皮質殘餘厚度）→ 4. 基礎血檢排除代謝性病因（肝功能、血氨、膽汁酸——排除 PSS）→ 5. CSF 分析（排除發炎性疾病，注意 ICP 升高時腰穿風險）',
    treatment_protocol: '內科治療（輕度至中度症狀）：Omeprazole 1 mg/kg PO BID（降低脈絡叢 CSF 產生）+ Prednisolone 0.5-1 mg/kg/day tapering 至最低有效劑量（減少腦水腫）+ Acetazolamide 10 mg/kg PO TID（碳酸酐酶抑制劑，減少 CSF 分泌）。癲癇控制：Levetiracetam 20 mg/kg PO TID 或 Phenobarbital 2-5 mg/kg PO BID。外科治療（內科反應不佳或嚴重/進行性病例）：腦室腹腔引流管（VP shunt），將 CSF 從側腦室引流至腹腔吸收。VP shunt 併發症管理：阻塞（最常見）→ 修正或更換，感染 → 移除 + 抗生素，過度引流（slit ventricle syndrome）→ 可調壓閥。',
    prognosis: '先天性水腦症（輕度）：內科治療可穩定多數犬的神經功能，生活品質可接受。先天性水腦症（中重度）：VP shunt 手術成功率約 70-80%，術後神經功能可改善但可能殘留認知缺陷。VP shunt 併發症發生率約 20-30%（阻塞為主）。後天性水腦症：取決於原發病因的可治療性。預後良好因子：輕度臨床症狀、內科治療反應良好、腦皮質厚度 > 10 mm。預後不良因子：嚴重皮質變薄、持續進行性惡化、多重神經功能缺損、VP shunt 反覆阻塞。',
    monitoring: '內科治療：每 2-4 週臨床評估神經功能變化 + 癲癇頻率記錄。Acetazolamide 使用期間：每月電解質與血氣監測。VP shunt 術後：每月神經學檢查（前 3 個月），之後每 3-6 個月。注意 shunt 阻塞徵兆（症狀突然惡化、前囟門膨隆感增加）。MRI 追蹤：術後 3 個月與 6 個月評估腦室大小變化。長期：癲癇藥物血藥濃度監測。',
    owner_communication: '水腦症是腦脊髓液在腦中蓄積過多導致腦室擴張的疾病。先天性水腦症在玩具犬品種中較常見。輕度病例可透過藥物治療（降低腦脊髓液產生的藥物 + 癲癇藥物）控制症狀。藥物反應不佳的中重度病例可考慮腦室引流管手術（VP shunt），手術成功率約 70-80%，但引流管阻塞是常見的長期併發症。治療目標為控制症狀、維持生活品質，而非治癒。部分犬即使接受治療仍可能有學習能力較差或輕度行為異常等殘留缺陷。',
  },
  diagnostic_data: null,
  procedure_data: null,
  visual_placeholders: [
    { position: 'CSF 循環段落後', type: 'flowchart', description: 'CSF 循環路徑與水腦症阻塞位點示意圖' },
    { position: '診斷工具段落後', type: 'comparison_table', description: '超音波 vs MRI 在水腦症診斷中的比較' },
  ],
  interactive_placeholders: [
    { position: '治療策略段落', type: 'interactive_overlay', description: '依症狀嚴重度選擇內科或外科治療的決策工具' },
  ],
  drug_api_links: ['Omeprazole', 'Prednisolone', 'Acetazolamide'],
  references: [
    { type: 'textbook', citation: 'Dewey CW, da Costa RC. Practical Guide to Canine and Feline Neurology, 3rd ed. Wiley-Blackwell, 2016. Chapter 16: Congenital & Developmental Diseases.', relevance: '先天性水腦症臨床診斷與治療' },
    { type: 'textbook', citation: 'Platt SR, Olby NJ. BSAVA Manual of Canine and Feline Neurology, 4th ed. BSAVA, 2013.', relevance: '水腦症病理與治療基礎' },
    { type: 'journal', citation: 'Javaheri S et al. Effect of omeprazole on canine cerebrospinal fluid production. Brain Res. 1997;766(1-2):255-258.', relevance: 'Omeprazole 降低 CSF 產生的實驗基礎' },
    { type: 'journal', citation: 'Shihab N et al. Ventriculoperitoneal shunting for hydrocephalus in dogs: 81 cases. J Small Anim Pract. 2011;52(10):521-526.', relevance: '犬 VP shunt 大規模回顧研究與術後併發症' },
    { type: 'guideline', citation: 'Driver CJ, Rusbridge C, Cross HR, et al. BSAVA Scientific Committee Guidelines on Management of Congenital Hydrocephalus in Dogs. J Small Anim Pract. 2019;60(6):345-356.', relevance: 'BSAVA 犬先天性水腦症管理指引' },
  ],
  is_current: true,
  created_at: now,
};

/** 腰薦椎疾病 (Lumbosacral Disease / Cauda Equina) — 疾病型 */
const contentLumbosacral: NodeContent = {
  id: 'CONTENT-NEURO-L3-013',
  node_id: 'NEURO-L3-013',
  version: 1,
  summary: '腰薦椎疾病（Lumbosacral Disease），又稱馬尾症候群（Cauda Equina Syndrome）或退化性腰薦椎狹窄（Degenerative Lumbosacral Stenosis, DLSS），是犬腰薦椎交界處神經根壓迫的疾病。German Shepherd Dog（GSD）有極高的好發率。病理包括 L7-S1 椎間盤退化膨出、骨性增生（osteophytes）、黃韌帶肥厚與關節突增生，導致馬尾神經根壓迫。典型表現為腰薦部疼痛（夾尾、不願跳躍）、後肢跛行、嚴重病例出現尿失禁/糞失禁。MRI 為診斷金標準，肌電圖（EMG）可評估神經根損傷程度。治療分保守（NSAIDs + Gabapentin + 限制運動）與外科（dorsal laminectomy + foraminotomy）。',
  learning_objectives: [
    '說明腰薦椎交界處的解剖特點與馬尾神經的組成',
    '描述 DLSS 的多重壓迫因子（椎間盤、韌帶、骨性增生）',
    '辨識腰薦椎疾病的典型臨床表現（疼痛、跛行、失禁）',
    '比較 MRI 與 CT 在腰薦椎疾病診斷中的優缺點',
    '掌握保守與手術治療的適應症與預後',
  ],
  key_points: [
    'GSD 極高好發率（占腰薦椎疾病犬 > 50%），中年至老年（5-8 歲），其他大型犬亦可發生',
    'L7-S1 為犬腰薦椎交界處，脊髓在 L5-L6 終止（conus medullaris），L7-S1 以下為馬尾神經根（cauda equina）——壓迫為 LMN 損傷',
    '多重壓迫因子：L7-S1 椎間盤退化膨出（Hansen Type II）+ 黃韌帶肥厚 + 關節突增生 + 骨性終板增生 → 椎管與椎間孔狹窄',
    '腰薦部疼痛為最常見症狀：夾尾（tail tucking）、不願跳躍/爬樓梯/上車、腰薦部觸診疼痛、Lord test（過度伸展腰薦部）陽性',
    '後肢跛行：坐骨神經受壓 → 後肢跛行，常被誤診為髖關節疾病',
    '嚴重病例：尿失禁（膀胱張力下降，LMN bladder）、糞失禁（肛門張力下降）、尾部下垂無力',
    'MRI 金標準：矢狀面評估 L7-S1 壓迫 + 動態 MRI（伸展位壓迫加重）+ T2WI 評估馬尾神經水腫',
    '保守治療：Gabapentin 5-10 mg/kg TID + Meloxicam 0.1 mg/kg SID + 限制運動（尤其跳躍） + 體重管理 + 物理治療',
    '手術治療：dorsal laminectomy（L7 背側椎板切除減壓）+ foraminotomy（椎間孔擴大，釋放受壓神經根），術後改善率約 75-85%',
  ],
  body: `# 腰薦椎疾病 (Lumbosacral Disease / Cauda Equina Syndrome)

## 一、主要內容 (Pathophysiology)



### 解剖基礎
犬脊髓在 L5-L6 水平終止（conus medullaris），L6 以下椎管內僅含馬尾神經根（cauda equina），包括 L6-Cd5 神經根。L7-S1 為腰薦椎交界處，是犬脊椎中承受最大生物力學應力的位點，也是 DLSS 最常見的病變位置。

### 馬尾神經根組成
- L6-L7 神經根：股神經分支、坐骨神經
- S1-S3 神經根：坐骨神經、陰部神經（pudendal nerve，控制尿道外括約肌與肛門括約肌）、骨盆神經（pelvic nerve，膀胱副交感支配）
- 尾神經根（Cd1-Cd5）：尾部運動

### 壓迫機轉
DLSS 為多因素疾病，壓迫來自多個方向：
- **腹側**：L7-S1 椎間盤退化膨出（Hansen Type II）+ 終板骨贅
- **背側**：黃韌帶肥厚（ligamentum flavum hypertrophy）
- **側方**：關節突增生（articular process hypertrophy）→ 椎間孔狹窄壓迫神經根
- **動態成分**：腰薦椎過度伸展（extension）時壓迫加重——工作犬/運動犬的風險因子

### GSD 品種易感性
- GSD 腰薦椎生物力學異常（L7-S1 過度活動性）
- 可能有遺傳性的椎間盤退化傾向
- 工作犬（警犬、軍犬）因高強度運動加速退化

## 二、判讀要點 (Clinical Signs & Diagnosis)

### 臨床表現
- **腰薦部疼痛**（最常見、最一致）：
  - 夾尾（tail tucking）、不願跳躍/爬樓梯/上車
  - 腰薦部觸診疼痛反應
  - Lord test 陽性：固定骨盆，將腰薦部過度伸展（lordosis）→ 引起疼痛反應
- **後肢跛行**：坐骨神經壓迫 → 單側或雙側後肢跛行（lameness vs paresis）
- **嚴重/晚期**：
  - 尿失禁（LMN bladder：膀胱膨大、易溢流、殘尿量增加）
  - 糞失禁（肛門張力下降）
  - 尾部下垂無力
  - 後肢肌肉萎縮（臀肌、股後肌群）

### 診斷工具
- **MRI**（金標準）：矢狀面與橫切面評估壓迫位置與程度 + 動態 MRI（屈伸位比較）+ T2WI 評估馬尾神經水腫與椎間盤退化程度
- **CT**：骨性結構評估優於 MRI（關節突增生、椎間孔狹窄的骨性成分），與 MRI 互補
- **肌電圖（EMG）**：評估 L6-S3 支配肌群的去神經支配程度，協助判斷手術必要性
- **X 光**：可見 L7-S1 椎間隙狹窄、骨贅、腰薦椎活動異常（屈伸比較片），但敏感度與特異度有限

## 三、常見陷阱 (Common Pitfalls)

- 腰薦椎疾病常被誤診為髖關節發育不良（HD）——兩者可共存於 GSD，但 Lord test 與 careful palpation 可區分
- 尿失禁的晚期病例可能被轉介至內科排除泌尿系統疾病——腰薦椎疾病的 LMN bladder 是重要鑑別
- X 光正常不能排除 DLSS——軟組織壓迫（椎間盤膨出、韌帶肥厚）X 光看不到
- 雙側後肢肌肉萎縮可能被歸因於年齡相關萎縮而忽略腰薦椎壓迫
- 保守治療需包含體重管理與運動限制——僅給予止痛藥不足以控制病程

## 四、人醫借鑒 (Translational Insights)

| 人醫工具/概念 | 獸醫應用潛力 | 現況 |
|-------------|-------------|------|
| 腰椎硬膜外類固醇注射（ESI） | 犬 DLSS 微創止痛替代方案 | 人醫常規使用，犬研究有正面初步結果 |
| 微創腰椎減壓術（MIS） | 犬 DLSS 的微創手術替代方案 | 人醫趨勢為微創，獸醫少數中心引入 |
| 人工椎間盤（Lumbar ADR） | 犬 L7-S1 替代融合術，保留活動度 | 人醫商業化使用，獸醫實驗階段 |

## 五、臨床爭議 (Controversies & Knowledge Gaps)

| 爭議議題 | 現況 | Evidence Level |
|---------|------|---------------|
| 保守 vs 手術治療的最佳決策時間點 | 缺乏前瞻性隨機試驗，手術時機主要基於臨床經驗 | Level III |
| 手術方式選擇（laminectomy ± foraminotomy ± discectomy ± fixation） | 不同組合的比較研究有限 | Level III |
| 硬膜外類固醇注射的長期療效 | 短期止痛效果正面但長期數據不足 | Level III |
| GSD 預防性繁殖篩檢 | 目前無可靠的影像或基因篩檢方法可在症狀前預測 DLSS | Level IV |`,
  clinical_pearl: 'GSD 中年犬出現「不願跳躍 + 夾尾 + 後肢跛行」三聯徵時，腰薦椎疾病應為首要懷疑。診間中最實用的理學檢查是 Lord test——一手固定骨盆，另一手將尾根向背側過度伸展（creating lordosis at L7-S1）——若引起明顯疼痛反應則高度提示腰薦椎壓迫。注意這些犬常同時有髖關節發育不良，區分兩者的疼痛來源需要仔細的觸診技巧。若 Lord test 陽性且 Ortolani test 陰性，腰薦椎疾病可能是主要疼痛來源。\n\n【台灣流行病學】GSD 在台灣飼養量不少（警犬/工作犬/家庭犬），腰薦椎疾病是該品種中老年最常見的退行性神經疾病之一。台灣炎熱氣候使犬隻活動量可能減少，但工作犬族群高強度運動仍為 DLSS 風險因子。台灣具備腰薦椎 MRI 與 dorsal laminectomy 手術能力的轉介中心主要在都會區。',
  common_mistakes: [
    '將 GSD 後肢跛行全部歸因於髖關節發育不良——必須同時評估腰薦椎，兩者可共存',
    '僅做 X 光評估即排除 DLSS——軟組織壓迫（椎間盤、韌帶）需 MRI 才能評估',
    '忽略 Lord test——這是最敏感的腰薦椎疼痛誘發試驗',
    '將 LMN bladder 的尿失禁僅歸因於泌尿系統疾病而忽略神經學檢查',
    '保守治療僅給予 NSAIDs 而未搭配 Gabapentin、體重管理與運動限制——多模式治療效果更佳',
  ],
  disease_data: {
    signalment: 'German Shepherd Dog 極高好發率（占 DLSS 犬 > 50%），5-8 歲中年至老年。其他大型犬亦可發生（Labrador、Rottweiler、Boxer、Dalmatian）。雄性略多（雄:雌約 1.5-2:1）。工作犬（警犬、軍犬、敏捷犬）因高強度運動為額外風險因子。',
    etiology: '多因素退化性疾病：L7-S1 椎間盤退化（Hansen Type II 膨出）+ 黃韌帶肥厚 + 關節突增生與肥厚 + 腰薦椎不穩定性 → 椎管與椎間孔狹窄 → 馬尾神經根壓迫。GSD 品種遺傳易感性（L7-S1 過度活動性與生物力學異常）。高強度運動加速退化過程。',
    pathogenesis: 'L7-S1 承受犬脊椎最大的生物力學應力（前伸/後伸/旋轉）→ 椎間盤加速退化膨出 + 黃韌帶代償性肥厚 + 關節突反應性增生 → 椎管與椎間孔有效空間縮減 → 馬尾神經根（L7、S1-S3、Cd 神經根）機械性壓迫與缺血 → 神經根脫髓鞘與軸突損傷 → 疼痛（感覺神經根）+ 功能缺損（運動神經根）。過度伸展動作（跳躍、上坡）加重壓迫（動態因素）。',
    clinical_signs: [
      { sign: '腰薦部疼痛', category: 'primary', description: '夾尾、不願跳躍/爬樓梯/上車、腰薦部觸診疼痛、Lord test 陽性' },
      { sign: '後肢跛行', category: 'primary', description: '坐骨神經壓迫導致單側或雙側後肢跛行，運動後加重' },
      { sign: '後肢肌肉萎縮', category: 'primary', description: '臀肌、股後肌群（hamstrings）與腓腸肌萎縮，慢性壓迫的去神經表現' },
      { sign: '尿失禁', category: 'secondary', description: '嚴重病例：LMN bladder（膀胱膨大、殘尿量增加、溢流性尿失禁）——S1-S3 神經根壓迫' },
      { sign: '糞失禁/尾部下垂', category: 'secondary', description: '嚴重病例：肛門張力下降、尾部無力下垂——陰部神經與尾神經壓迫' },
    ],
    staging: null,
    differential_diagnosis: [
      { condition: '髖關節發育不良（HD）', key_differentiator: '髖關節疼痛/鬆弛度增加（Ortolani test 陽性）、X 光見髖關節退化性變化，Lord test 陰性。兩者常共存於 GSD！' },
      { condition: 'IVDD（腰椎）', key_differentiator: '壓迫位置在 L7-S1 以上（L1-L6），UMN 後肢徵兆（膝反射亢進），與 DLSS 的 LMN 徵兆不同' },
      { condition: '退化性脊髓病變（DM）', key_differentiator: 'UMN 後肢輕癱為主、無疼痛、MRI 無壓迫性病灶、SOD1 基因陽性' },
      { condition: '腰薦椎腫瘤', key_differentiator: 'MRI 見佔位性病灶伴對比增強，進行性惡化速度較 DLSS 快' },
      { condition: '骨關節炎（膝關節/跗關節）', key_differentiator: '關節觸診疼痛/腫脹，X 光見關節退化，Lord test 陰性' },
    ],
    diagnostic_workup: '1. 步態評估 + 神經學檢查（後肢 LMN 徵兆：膝反射正常或減弱、tibial nerve reflex 減弱、肛門張力評估）→ 2. 腰薦部觸診 + Lord test → 3. 脊椎 X 光（L7-S1 椎間隙狹窄、骨贅、屈伸比較片評估不穩定性）→ 4. MRI（金標準：壓迫位置與程度、馬尾神經水腫、動態 MRI 屈伸位比較）→ 5. CT（骨性壓迫成分評估，與 MRI 互補）→ 6. EMG（評估 L6-S3 支配肌群去神經支配程度，協助手術決策）→ 7. 基礎血檢排除系統性疾病 + 尿液分析（尿失禁犬排除泌尿道感染）',
    treatment_protocol: '保守治療（輕中度病例）：多模式疼痛管理——Gabapentin 5-10 mg/kg PO TID + Meloxicam 0.1 mg/kg PO SID + Tramadol 2-5 mg/kg PO BID-TID（急性加重期）。運動管理：限制跳躍/爬樓梯/高強度運動 + 體重管理（理想 BCS 4-5/9）。物理治療：水療（underwater treadmill）+ 核心肌群強化 + 伸展運動。硬膜外類固醇注射（CT 導引 Methylprednisolone）：保守治療反應不佳時的微創選項。手術治療（中重度或保守失敗）：dorsal laminectomy（L7 背側椎板切除，減壓馬尾）+ foraminotomy（椎間孔擴大，釋放受壓神經根）+ partial discectomy（移除突出椎間盤物質）。必要時加固定（fixation-fusion，腰薦椎不穩定時）。',
    prognosis: '保守治療：約 50-60% 輕中度病例可良好控制（疼痛改善、功能維持），但長期進行性退化。手術治療：術後改善率約 75-85%。無尿失禁者手術預後良好。已有尿失禁者術後膀胱功能恢復率較差（約 50%）。預後良好因子：僅疼痛無神經功能缺損、早期手術、單一壓迫位點。預後不良因子：術前已有尿失禁（LMN bladder 恢復困難）、慢性嚴重肌肉萎縮、多節段壓迫。工作犬恢復至工作能力的比例約 60-70%。',
    monitoring: '保守治療：每月臨床評估疼痛程度與神經功能變化。注意尿失禁出現（提示病程進展，應考慮手術）。體重每月監測。NSAIDs 長期使用需每 3-6 個月監測肝腎功能。手術後：2 週傷口檢查，4 週限制活動，6-8 週開始復健計畫。長期每 3-6 個月神經學追蹤。膀胱功能監測：殘尿量評估（術前有 LMN bladder 者需密切追蹤恢復情況）。',
    owner_communication: '腰薦椎疾病是大型犬（尤其 GSD）常見的退化性神經疾病，類似人的腰椎間盤突出與椎管狹窄。輕度病例可透過藥物止痛、限制跳躍、體重管理與物理治療控制症狀。藥物治療反應不佳或出現尿失禁時建議手術減壓。手術成功率約 75-85%，但已出現尿失禁的犬膀胱功能恢復較困難——因此建議在出現失禁前積極治療。日常照護重點：維持理想體重（過重顯著加重腰薦負擔）、避免跳躍/上下車用斜坡替代、規律低衝擊運動（游泳、散步）。',
  },
  diagnostic_data: null,
  procedure_data: null,
  visual_placeholders: [
    { position: '解剖基礎段落後', type: 'annotated_image', description: '犬 L7-S1 解剖與馬尾神經根走行標註圖' },
    { position: '壓迫機轉段落後', type: 'flowchart', description: 'DLSS 多因子壓迫示意圖（腹側椎間盤 + 背側韌帶 + 側方關節突）' },
  ],
  interactive_placeholders: [
    { position: '臨床表現段落', type: 'interactive_overlay', description: 'Lord test 操作影片與陽性反應判讀互動教學' },
  ],
  drug_api_links: ['Gabapentin', 'Meloxicam', 'Tramadol'],
  references: [
    { type: 'textbook', citation: 'Dewey CW, da Costa RC. Practical Guide to Canine and Feline Neurology, 3rd ed. Wiley-Blackwell, 2016. Chapter 13: Lumbosacral Disease.', relevance: '腰薦椎疾病臨床診斷與治療標準教材' },
    { type: 'textbook', citation: 'Platt SR, Olby NJ. BSAVA Manual of Canine and Feline Neurology, 4th ed. BSAVA, 2013.', relevance: '腰薦椎疾病病理與手術基礎' },
    { type: 'journal', citation: 'Meij BP, Bergknut N. Degenerative lumbosacral stenosis in dogs. Vet Clin North Am Small Anim Pract. 2010;40(5):983-1009.', relevance: 'DLSS 綜合回顧與治療策略' },
    { type: 'journal', citation: 'Suwankong N et al. Review of the surgical management and outcome of lumbosacral stenosis in dogs. Vet Comp Orthop Traumatol. 2008;21(5):382-391.', relevance: '腰薦椎手術預後回顧研究' },
    { type: 'guideline', citation: 'Worth AJ, Thompson DJ, Hartman AC. Degenerative lumbosacral stenosis in working dogs: current concepts and review. NZ Vet J. 2009;57(6):319-330. (Consensus review on DLSS diagnosis and surgical management)', relevance: '退化性腰薦椎狹窄診斷與手術管理共識回顧' },
  ],
  is_current: true,
  created_at: now,
};

/** EMG/電生理診斷 — 診斷型 */
const contentEMG: NodeContent = {
  id: 'CONTENT-NEURO-L4-005',
  node_id: 'NEURO-L4-005',
  version: 1,
  summary: '電生理診斷（Electrodiagnostics）包括肌電圖（EMG）、神經傳導速度（NCV）、重複神經刺激（RNS）與腦電圖（EEG），是評估周邊神經、神經肌肉接合處與肌肉疾病的核心工具。EMG/NCV 可客觀區分 LMN 與 UMN 病變、確認去神經化程度，RNS 為重症肌無力的關鍵電生理確診依據。',
  learning_objectives: [
    '描述 EMG 的基本原理與正常/異常肌電圖形態',
    '運用 NCV 區分軸突病變與脫髓鞘病變',
    '說明重複神經刺激（RNS）在重症肌無力診斷中的應用',
    '列出 EEG 在獸醫臨床的適應症與限制',
    '判斷何時將病例轉介進行電生理檢查',
  ],
  key_points: [
    'EMG 檢查需全身麻醉（犬貓無法配合清醒檢查），使用同心針電極插入目標肌肉',
    '正常肌肉靜息時無自發性電位活動；去神經化肌肉可見纖維顫動電位（fibrillation potentials）與正銳波（positive sharp waves）',
    'NCV 正常犬運動神經傳導速度約 50-70 m/s；< 40 m/s 提示脫髓鞘病變',
    'RNS：低頻刺激（2-3 Hz）下振幅遞減 > 10% 為重症肌無力陽性',
    'EEG 在獸醫臨床可用性有限，主要用於癲癇分類與術中監測',
    '電生理異常通常在臨床症狀出現後 5-7 天才能偵測到（去神經化潛伏期）',
  ],
  body: `# EMG/電生理診斷

## 一、肌電圖 (Electromyography, EMG)

### 原理
EMG 記錄肌肉纖維的電位活動。同心針電極（concentric needle electrode）插入目標肌肉，分析靜息活動（insertional & spontaneous activity）與自主收縮時的運動單位電位（Motor Unit Action Potentials, MUAPs）。

### 異常發現
- **纖維顫動電位（Fibrillation potentials）**：去神經化肌肉纖維的自發性放電，呈小振幅（< 300 μV）規則波形
- **正銳波（Positive sharp waves, PSWs）**：去神經化的另一種表現，初始正向偏轉後緩慢回歸基線
- **複合重複放電（Complex repetitive discharges, CRDs）**：慢性去神經化的特徵
- **肌強直放電（Myotonic discharges）**：音頻漸強漸弱（dive-bomber sound），見於先天性肌強直

### 臨床應用
- 確認下運動神經元（LMN）病變的存在與分布
- 評估去神經化的嚴重度與時程
- 指引肌肉/神經切片的取樣部位

## 二、神經傳導速度 (Nerve Conduction Velocity, NCV)

### 運動 NCV (Motor NCV)
- 在神經近端與遠端兩點刺激，記錄目標肌肉的複合肌肉動作電位（CMAP）
- NCV = 兩刺激點間距離 / 潛伏期差
- 犬正常值：橈神經 60-70 m/s、坐骨-脛神經 55-65 m/s

### 感覺 NCV (Sensory NCV)
- 技術困難度較高，獸醫臨床較少使用
- 可用於評估感覺神經病變

### 判讀要點
| 病變類型 | NCV | CMAP 振幅 | EMG |
|---------|-----|-----------|-----|
| 軸突退化（axonopathy） | 正常或輕微下降 | 明顯降低 | 去神經化電位 |
| 脫髓鞘（demyelination） | 明顯下降（< 50%） | 正常或輕降 | 可能正常 |
| 神經肌肉接合疾病 | 正常 | RNS 遞減 | 通常正常 |

## 三、重複神經刺激 (Repetitive Nerve Stimulation, RNS)

### 原理
以固定頻率（2-3 Hz 低頻或 30-50 Hz 高頻）反覆刺激運動神經，記錄連續 CMAP 振幅變化。

### 判讀
- **正常**：連續刺激振幅穩定（遞減 < 10%）
- **突觸後障礙（MG）**：低頻 RNS 遞減 > 10%（通常 > 30-50%）
- **突觸前障礙（肉毒桿菌中毒/Tick paralysis）**：低頻遞減 + 高頻刺激後遞增（incremental response）

### 重症肌無力確診
RNS 遞減反應是 MG 的重要電生理證據，但金標準仍為血清 AChR 抗體。RNS 敏感度約 60-70%（局灶型 MG 可能正常）。

## 四、腦電圖 (Electroencephalography, EEG)

### 獸醫臨床應用
- 癲癇發作類型分類（局灶 vs 全身性）
- 難治性癲癇的術前評估
- 確認亞臨床癲癇活動（subclinical seizures）
- 麻醉深度監測

### 限制
- 需特殊設備與專業判讀
- 犬需鎮靜或麻醉（影響腦波模式）
- 全球獸醫可用設施有限
- 台灣目前僅少數教學醫院與轉診中心具備

## 五、轉介指引

### 何時轉介進行電生理檢查
- 臨床懷疑 LMN 病變但定位不明確
- 需客觀區分軸突病變 vs 脫髓鞘病變
- 疑似 MG 但 AChR 抗體陰性
- 術前評估神經功能基線
- 治療反應監測（復健追蹤）

## 六、人醫借鑒 (Translational Insights)

| 人醫工具/概念 | 獸醫應用潛力 | 現況 |
|-------------|-------------|------|
| 單纖維 EMG（SF-EMG） | MG 最敏感的電生理檢查（敏感度 > 95%） | 獸醫偶有研究報告，臨床使用極少 |
| 定量 EMG（qEMG） | 客觀量化去神經化程度與復健進度 | 人醫已標準化，獸醫研究階段 |
| 長時間 EEG 監測 | 犬癲癇的連續腦波監測（ICU 設定） | 人醫已商業化，獸醫原型系統少數機構有 |`,
  clinical_pearl: 'EMG 異常（fibrillation potentials, PSWs）通常在臨床症狀出現後 5-7 天才出現，因此急性 LMN 病變初期 EMG 可能正常。建議症狀發作一週後再安排電生理檢查。此外，EMG 必須在全身麻醉下進行（犬無法配合清醒檢查），需注意麻醉藥物可能影響神經傳導。台灣目前電生理檢查主要集中在台大、中興等教學醫院。\n\n【實務技巧】當懷疑 MG 時，優先送 AChR 抗體（敏感度 85-90%）；若抗體陰性但臨床高度懷疑，再安排 RNS 檢查。局灶型 MG（僅巨食道症表現）的 AChR 抗體與 RNS 均可能呈假陰性。',
  common_mistakes: [
    '在急性病變初期（< 5 天）即安排 EMG，此時去神經化電位尚未出現導致假陰性',
    '將屈曲反射存在誤認為 LMN 功能正常，未進一步安排 EMG/NCV 評估',
    '忽略麻醉藥物對電生理結果的影響（某些肌肉鬆弛劑會影響 NMJ 傳遞）',
    '僅依靠 RNS 陰性結果排除 MG（局灶型 MG 的 RNS 敏感度僅約 50-60%）',
  ],
  disease_data: null,
  diagnostic_data: {
    indication: [
      '臨床疑似 LMN 病變需客觀確認（多發性神經根炎、神經病變）',
      '疑似重症肌無力需電生理證據（AChR 抗體陰性時）',
      '需區分軸突病變 vs 脫髓鞘病變以指導治療與預後',
      '癲癇分類需 EEG 輔助（局灶 vs 全身性）',
      '術前基線評估與術後神經功能追蹤',
    ],
    contraindication: [
      '嚴重凝血功能障礙（針電極插入肌肉有出血風險）',
      '局部皮膚感染（針電極插入部位）',
      '全身麻醉風險過高的病患需權衡利弊',
    ],
    technique: 'EMG：全身麻醉後以同心針電極依序插入四肢近端/遠端肌肉及脊旁肌，評估靜息電位活動與 MUAP。NCV：在神經近端和遠端分別以表面電極刺激，記錄 CMAP 潛伏期與振幅，計算傳導速度。RNS：2-3 Hz 低頻刺激運動神經 5-10 次，比較首末次 CMAP 振幅。EEG：頭皮表面電極（針或盤狀），記錄自發腦波 20-30 分鐘。',
    normal_findings: [
      { finding: '靜息無自發活動', description: '針電極插入後靜止，除插入活動（insertional activity）外無自發電位', significance: '排除去神經化' },
      { finding: 'NCV 50-70 m/s', description: '運動神經傳導速度在正常參考範圍', significance: '排除脫髓鞘病變' },
      { finding: 'RNS 遞減 < 10%', description: '低頻重複刺激下 CMAP 振幅穩定', significance: '排除神經肌肉接合障礙' },
    ],
    abnormal_findings: [
      { finding: '纖維顫動電位 + PSWs', description: '規則小振幅自發電位', significance: '確認去神經化，見於 LMN 病變（多發性神經根炎、神經根壓迫等）' },
      { finding: 'NCV < 40 m/s', description: '傳導速度明顯下降', significance: '脫髓鞘病變（犬慢性脫髓鞘性多發性神經病變等）' },
      { finding: 'RNS 遞減 > 10%', description: '連續刺激下 CMAP 振幅進行性下降', significance: 'MG 等突觸後障礙' },
      { finding: '肌強直放電', description: '高頻衰減放電呈 dive-bomber 聲', significance: '先天性肌強直' },
    ],
    interpretation_guide: '整合 EMG、NCV 與 RNS 結果：1. EMG 有無去神經化？2. NCV 正常 or 下降？3. RNS 有無遞減？4. 病灶分布對稱 or 不對稱？5. 結合臨床定位綜合判斷。',
    pitfalls: [
      '急性病變 < 5-7 天 EMG 可能假陰性',
      '肥胖動物深層肌肉 EMG 取樣困難',
      '麻醉藥物（尤其肌肉鬆弛劑）干擾 RNS 結果',
      'NCV 受體溫影響——低體溫時傳導速度假性降低',
    ],
    sensitivity_specificity: 'EMG 對 LMN 病變敏感度約 80-90%（需症狀 > 5-7 天）。RNS 對全身型 MG 敏感度約 60-70%，特異度高（> 95%）。NCV 對脫髓鞘病變敏感度高（> 90%）。',
    cost_benefit: '設備昂貴（EMG 機器約 50-100 萬台幣），需專業操作與判讀人員。台灣可用設施有限（教學醫院/少數轉診中心）。對於 MG 診斷，AChR 抗體為首選（較便宜且外送即可），RNS 為次選。',
  },
  procedure_data: null,
  visual_placeholders: [
    { position: 'EMG 異常發現段落後', type: 'waveform_diagram', description: '正常 vs 異常 EMG 波形比較圖（fibrillation, PSW, CRD, myotonic discharge）' },
    { position: 'RNS 段落後', type: 'waveform_diagram', description: 'RNS 正常 vs MG 遞減反應示意圖' },
  ],
  interactive_placeholders: [
    { position: '文末', type: 'quiz', description: 'EMG/NCV 波形判讀互動練習' },
  ],
  drug_api_links: [],
  references: [
    { type: 'textbook', citation: 'Platt SR, Olby NJ. BSAVA Manual of Canine and Feline Neurology, 4th ed. BSAVA, 2013. Chapter 5: Electrodiagnostics.', relevance: '神經電生理診斷標準教材' },
    { type: 'textbook', citation: 'Dewey CW, da Costa RC. Practical Guide to Canine and Feline Neurology, 3rd ed. Wiley-Blackwell, 2016. Chapter 5: Electrodiagnostic Evaluation.', relevance: '電生理檢查實務指南' },
    { type: 'journal', citation: 'Cuddon PA. Electrophysiology in neuromuscular disease. Vet Clin North Am Small Anim Pract. 2002;32(1):31-62.', relevance: '獸醫神經肌肉疾病電生理檢查綜述' },
    { type: 'guideline', citation: 'Shelton GD et al. Acquired myasthenia gravis: selective involvement of esophageal, pharyngeal, and facial muscles. J Vet Intern Med. 2000;14(2):179-184.', relevance: '犬 MG 電生理與血清學診斷比較' },
  ],
  is_current: true,
  created_at: now,
};

/** 以 Map 方式匯出，方便用 nodeId 快速查找 */
export const NEURO_CONTENTS = new Map<string, NodeContent>([
  ['NEURO-L0-001', contentNeuroOverview],
  ['NEURO-L1-001', contentNeuroanatomy],
  ['NEURO-L1-002', contentNeurophysiology],
  ['NEURO-L1-003', contentCSFPhysiology],
  ['NEURO-L2-001', contentSeizurePathophysiology],
  ['NEURO-L2-002', contentSpinalCompression],
  ['NEURO-L2-003', contentNMJPathology],
  ['NEURO-L2-004', contentMyelomalacia],
  ['NEURO-L2-005', contentICPMechanism],
  ['NEURO-L3-001', contentEpilepsy],
  ['NEURO-L3-002', contentIVDD],
  ['NEURO-L3-003', contentGME],
  ['NEURO-L3-004', contentVestibular],
  ['NEURO-L3-005', contentPolyradiculoneuritis],
  ['NEURO-L3-006', contentMG],
  ['NEURO-L3-007', contentDM],
  ['NEURO-L3-008', contentBrainTumor],
  ['NEURO-L3-009', contentWobbler],
  ['NEURO-L3-010', contentFCE],
  ['NEURO-L3-011', contentDiscospondylitis],
  ['NEURO-L3-012', contentHydrocephalus],
  ['NEURO-L3-013', contentLumbosacral],
  ['NEURO-L4-001', contentNeuroExam],
  ['NEURO-L4-002', contentCSFAnalysis],
  ['NEURO-L4-003', contentNeuroImaging],
  ['NEURO-L4-004', contentLocalization],
  ['NEURO-L5-001', contentAEDTherapy],
  ['NEURO-L5-002', contentSpinalSurgery],
  ['NEURO-L5-003', contentNeuroRehab],
  ['NEURO-L4-005', contentEMG],
]);
