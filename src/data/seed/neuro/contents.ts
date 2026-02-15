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

## 概述

犬特發性癲癇（Idiopathic Epilepsy, IE）是犬最常見的慢性神經疾病，約占所有癲癇犬隻的 60-70%。IVETF（International Veterinary Epilepsy Task Force）將其定義為排除結構性與代謝性原因後的反覆癲癇發作。

## IVETF 癲癇分類

- **特發性癲癇（Idiopathic Epilepsy）**：遺傳性或推定遺傳性，無結構性腦部病變
- **結構性癲癇（Structural Epilepsy）**：腦部結構性病變所致（腫瘤、腦炎、血管事件）
- **反應性癲癇發作（Reactive Seizures）**：代謝或中毒原因導致的發作（低血糖、肝腦症、中毒）

## 發作分類

- **局灶性發作（Focal Seizures）**：單側面部抽搐、咀嚼動作、單肢抽動、行為異常（fly-biting）
- **全身性發作（Generalized Seizures）**：
  - 強直-陣攣性（Tonic-clonic）：最常見，全身僵直後節律性抽搐
  - 強直性（Tonic）：持續肌肉收縮
  - 陣攣性（Clonic）：節律性肌肉抽搐
  - 肌躍攣性（Myoclonic）：短暫肌肉跳動
- **局灶性演變為全身性（Focal to bilateral tonic-clonic）**：局灶發作擴散至雙側

## 分層診斷流程（IVETF Tier System）

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

## 藥物治療

| 藥物 | 劑量 | 機轉 | 副作用 |
|------|------|------|--------|
| Phenobarbital (PB) | 2-5 mg/kg PO BID | GABA-A 受體促效 | 鎮靜、多飲多食、肝毒性 |
| Potassium Bromide (KBr) | 20-30 mg/kg PO SID | Cl⁻ 通道穩定 | 腸胃不適、後肢無力、嗜睡 |
| Levetiracetam (LEV) | 20 mg/kg PO TID | SV2A 蛋白結合 | 鎮靜（通常輕微且暫時） |
| Zonisamide (ZNS) | 5-10 mg/kg PO BID | Na⁺/Ca²⁺ 通道阻斷 | 鎮靜、食慾下降、少見肝毒性 |

## 緊急處置：癲癇重積狀態

癲癇重積狀態（Status Epilepticus, SE）定義為持續 > 5 分鐘的癲癇發作或兩次發作間無意識恢復。

急救順序：
1. [藥物:Diazepam] 0.5-1 mg/kg IV（或 per rectum 1-2 mg/kg）
2. 無效時 [藥物:Levetiracetam] 30-60 mg/kg IV
3. 持續發作：[藥物:Phenobarbital] 2-4 mg/kg IV q20-30min（最多 16-24 mg/kg/24hr）
4. 難治性 SE：[藥物:Propofol] CRI 或 [藥物:Midazolam] CRI

[圖片:癲癇重積狀態急救流程圖]`,
  clinical_pearl: '治療犬特發性癲癇時，「完全無發作」不應是唯一目標。合理的治療目標是將發作頻率降低 50% 以上，同時維持可接受的生活品質。PB 血中濃度應維持在 15-35 ug/mL，開始治療後 2-3 週達穩態時首次監測。提醒飼主建立「發作日誌」追蹤頻率與型態。',
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

## 概述

神經定位診斷是獸醫神經科臨床推理的基石。透過系統性的神經學檢查，將觀察到的神經功能缺損對應至神經系統的特定解剖區域，從而建立合理的鑑別診斷清單並選擇適當的進階診斷工具。

## 系統性檢查流程

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

## 七大定位區域

| 區域 | 主要臨床特徵 |
|------|-------------|
| 前腦（Forebrain） | 意識改變、行為異常、對側威脅反應缺失、對側姿勢反應缺損、癲癇發作 |
| 腦幹（Brainstem） | 意識改變（可至昏迷）、同側腦神經缺損（CN V-XII）、對側或同側姿勢反應缺損 |
| 小腦（Cerebellum） | 意識正常、小腦性共濟失調（dysmetria, hypermetria）、意向性震顫、姿勢反應正常或辨距不良 |
| C1-C5 | 四肢 UMN 型輕癱至癱瘓、頸痛、可能有呼吸抑制 |
| C6-T2 | 前肢 LMN（屈曲反射減弱、肌萎縮）、後肢 UMN（反射亢進）、Horner syndrome 可能 |
| T3-L3 | 後肢 UMN 型輕癱至癱瘓、前肢正常、Schiff-Sherrington 姿勢（急性嚴重）、背痛 |
| L4-S3 | 後肢 LMN（屈曲反射減弱、肌萎縮、膝蓋反射減弱）、尾巴張力下降、尿失禁 |

## UMN vs LMN 比較

| 特徵 | UMN | LMN |
|------|-----|-----|
| 反射 | 正常至亢進 | 減弱至消失 |
| 肌張力 | 正常至增加（痙攣性） | 降低（弛緩性） |
| 肌萎縮 | 延遲出現（廢用性） | 快速出現（去神經性） |
| Babinski sign | 可能陽性 | 陰性 |

[互動:神經定位練習——輸入神經學檢查發現，系統自動定位]`,
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
  ],
  is_current: true,
  created_at: now,
};

/** 以 Map 方式匯出，方便用 nodeId 快速查找 */
export const NEURO_CONTENTS = new Map<string, NodeContent>([
  ['NEURO-L3-001', contentEpilepsy],
  ['NEURO-L4-004', contentLocalization],
]);
