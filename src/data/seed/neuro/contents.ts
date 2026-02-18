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

## 概述

犬椎間盤疾病（IVDD）是犬最常見的脊髓壓迫性疾病，約占所有犬神經科就診的 2%。軟骨發育不全（chondrodystrophic）品種有極高的發病率，臘腸犬的終生盛行率可達 19-24%。

## 分類

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

## 好發位置

- **胸腰椎（T11-L2）**：65-75%，T12-T13 與 T13-L1 最常見
- **頸椎（C2-C7）**：15-25%，C2-C3 最常見
- **腰薦椎（L4-S3）**：少見

## 臨床分級（修正 Frankel 分級）

| Grade | 描述 | 神經功能 |
|-------|------|---------|
| I | 僅疼痛 | 神經功能正常，步態正常 |
| II | 輕癱可行走 | 本體感覺性共濟失調但仍可行走 |
| III | 輕癱不可行走 | 無法自主行走但有自主運動 |
| IV | 癱瘓有深痛覺 | 無自主運動，深痛覺存在 |
| V | 癱瘓無深痛覺 | 無自主運動，深痛覺喪失 |

## 診斷流程

1. 神經學檢查 → 定位病灶脊髓節段
2. 脊椎 X 光：可見椎間隙狹窄、椎間盤鈣化（敏感度有限）
3. **MRI（金標準）**：直接顯示椎間盤突出、脊髓壓迫與脊髓訊號變化
4. CT myelography：MRI 不可得時的替代方案
5. CSF 分析：排除發炎性疾病

## 治療策略

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

[圖片:IVDD 分型與脊髓壓迫示意圖]`,
  clinical_pearl: '評估 IVDD 病患時，深痛覺（deep pain perception）是最關鍵的預後指標。測試方式為用止血鉗夾趾骨——要確認的是「大腦層級的疼痛感知」（轉頭、叫喊），而非僅是脊髓反射性的屈曲反應（withdrawal reflex）。Grade IV 胸腰椎 IVDD 術後步行恢復率 > 90%，但 Grade V 若深痛覺喪失 > 48 小時，恢復率驟降至 < 5%。',
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

## 概述

不明原因腦膜腦炎（Meningoencephalitis of Unknown Origin, MUO）是犬最常見的中樞神經系統發炎性疾病群。因確定診斷需腦組織活檢，臨床上通常以「MUO」作為推定診斷。

## MUO 亞型

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

## 臨床表現

依病灶位置而異：
- **前腦**：癲癇發作、行為異常、對側威脅反應缺失、盲目轉圈
- **腦幹**：意識改變、腦神經缺損（面癱、吞嚥困難）、步態異常
- **小腦**：小腦性共濟失調、意向性震顫、辨距不良
- **脊髓**：四肢輕癱/癱瘓、脊髓定位疼痛
- **多灶性**：上述多區域症狀組合，播散性 GME 最常見

## 診斷

### MRI 特徵
- 多灶性或局灶性 T2W/FLAIR 高訊號病灶
- 對比增強後腦膜和/或腦實質增強
- 局灶性 GME 可呈腫塊效應（mass effect），需與腫瘤鑑別

### CSF 分析
- 單核球增多（lymphocytic-monocytic pleocytosis）：WBC 通常 50-500 cells/μL
- 蛋白輕度至中度升高
- 感染性疾病 PCR/抗體檢測陰性

## 治療

### 免疫抑制方案
- [藥物:Prednisolone] 1-2 mg/kg PO BID × 2-4 週，之後逐漸減量至最低有效劑量
- 加入二線免疫抑制劑以減少類固醇副作用：
  - [藥物:Cytarabine] (Ara-C) 50 mg/m² SC BID × 2 天，每 3-4 週一次
  - [藥物:Cyclosporine] 5-10 mg/kg PO BID
  - [藥物:Mycophenolate] 10-20 mg/kg PO BID
  - [藥物:Leflunomide] 2-4 mg/kg PO SID

[圖片:MUO 的 MRI 典型影像]`,
  clinical_pearl: 'MUO 的診斷是「排除性」的——必須先排除感染性腦炎（Toxoplasma、Neospora、Distemper、Cryptococcus 等），才能開始免疫抑制治療。若在未排除感染的情況下使用高劑量類固醇，可能導致感染性腦炎惡化。建議 CSF 送檢感染性疾病 panel 的同時，可先使用較低劑量的抗發炎類固醇（0.5-1 mg/kg）暫時穩定病情。',
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

## 概述

前庭症候群是犬貓急診中極常見的神經科表現，飼主常以「突然頭歪一邊、站不穩、眼球亂轉」為主訴。前庭系統負責維持平衡與空間定向，功能障礙會導致特徵性的頭傾、眼震與平衡失調。

## 前庭系統解剖

- **周邊前庭**：內耳迷路（半規管+耳石器）→ CN VIII 前庭分支
- **中樞前庭**：延髓前庭核 → 小腦絨球小結葉

## 中樞性 vs 周邊性鑑別

| 特徵 | 周邊性 | 中樞性 |
|------|--------|--------|
| 意識 | 正常 | 可能改變（嗜睡至昏迷） |
| 姿勢反應 | 正常 | 同側缺損 |
| 眼震方向 | 水平或旋轉性 | 任何方向（含垂直性） |
| 眼震方向一致性 | 固定方向 | 可隨頭部位置改變 |
| 頭傾方向 | 向病灶側 | 向病灶側（矛盾性除外） |
| 其他腦神經缺損 | 僅 CN VII（面癱） | 可能多條腦神經受累 |
| Horner syndrome | 可能（中耳炎波及交感神經） | 少見 |

## 犬常見病因

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

## 老年犬特發性前庭症候群

- 好發 > 8 歲犬
- 急性發作（數小時內達頂點）
- 嚴重頭傾、眼震、旋轉、嘔吐
- 支持性治療：[藥物:Maropitant] 1 mg/kg SC/PO SID（止吐）、輸液支持、輔助進食
- 2-3 天開始改善，2-4 週大幅恢復
- 可能殘留輕微頭傾

[圖片:中樞性 vs 周邊性前庭疾病鑑別流程圖]`,
  clinical_pearl: '區分中樞性與周邊性前庭疾病的最實用臨床指標是「姿勢反應」——如果有同側姿勢反應缺損（如本體感覺定位異常），病灶幾乎一定是中樞性的，因為周邊前庭系統不影響姿勢反應通路。另外，注意「矛盾性前庭徵」（paradoxical vestibular signs）：頭傾方向與姿勢反應缺損側相反時，提示小腦絨球小結葉病變，仍屬中樞性。',
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

## 概述

犬急性多發性神經根炎（ACP）是犬最常見的急性周邊多神經病變，臨床表現與人的 Guillain-Barr\u00e9 syndrome（GBS）極為相似。最初在美國因與浣熊咬傷接觸後發病的 Coonhound 犬而得名，但現已知多種免疫觸發因子均可引發。

## 病理機轉

- 前驅免疫事件（感染、疫苗接種、手術、毒素暴露）→ 7-14 天潛伏期
- 免疫系統對周邊神經組分產生交叉反應性抗體
- 脫髓鞘型（demyelinating）：攻擊 Schwann 細胞/髓鞘
- 軸突型（axonal）：直接損傷軸突，恢復較慢

## 臨床表現

- 急性發作（24-72 小時內進展至最嚴重）
- **上行性 LMN 癱瘓**：後肢先發 → 擴展至前肢 → 可能影響呼吸肌
- 所有四肢反射減弱至消失
- 肌張力降低（弛緩性）
- 快速出現肌肉萎縮（去神經性）
- 面部/咽喉肌麻痺（部分病例）：聲音改變、吞嚥困難
- **意識完全正常**（重要鑑別點）
- 通常不疼痛（但部分病例有痛覺過敏）

## 診斷

- 臨床診斷為主（典型病史 + 臨床表現）
- 電生理學（EMG/NCV）：去神經電位、傳導速度減慢（脫髓鞘型）或 CMAP 降低（軸突型）
- CSF：白蛋白-細胞學解離（albuminocytologic dissociation）——蛋白升高但細胞數正常
- 神經活檢：脫髓鞘 ± 軸突變性（臨床上少做）

## 治療

- **支持性照護為核心**：
  - 每 4-6 小時翻身防褥瘡
  - 膀胱管理（手動擠壓或間歇導尿）
  - 營養支持（管飼或輔助餵食）
  - 眼部護理（角膜潤滑，若有面癱）
  - 物理治療與被動關節運動
- 監測呼吸功能（最嚴重併發症為呼吸衰竭）
- 免疫抑制藥物效果不明確，目前不常規推薦
- [藥物:Human IV Immunoglobulin]（hIVIG）：少數報導顯示可能加速恢復，但證據有限

[圖片:多發性神經根炎臨床評估與支持性照護要點]`,
  clinical_pearl: '多發性神經根炎的飼主溝通重點是「時間」——這是一種自限性疾病，大多數犬會恢復，但過程可能需要數週到數月。最大的挑戰是前 1-2 週病情可能持續惡化（達到 nadir），飼主需要有心理準備。呼吸功能監測是住院期間最重要的工作——如果出現呼吸急促或呼吸型態改變，代表呼吸肌受累，可能需要呼吸支持。',
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

## 概述

重症肌無力（MG）是由神經肌肉接合處（NMJ）功能障礙所致的疾病。後天型 MG 為自體免疫性疾病，由針對突觸後膜乙醯膽鹼受體（AChR）的自體抗體引起。犬 MG 的發病率約每百萬犬中 10-20 例。

## 分類

### 先天型 MG
- 遺傳性 AChR 缺乏或功能異常
- 非免疫介導性（AChR 抗體陰性）
- 好發品種：Jack Russell Terrier、Smooth Fox Terrier、Springer Spaniel
- 幼犬期發病（6-8 週齡）

### 後天型 MG
- 自體免疫性：抗 AChR 抗體
- 可伴隨胸腺腫瘤（thymoma）：約 3-5% 的犬 MG 有胸腺腫瘤
- 雙峰年齡分布：1-4 歲與 9-13 歲

## 臨床表現型

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

## 診斷

- **AChR 抗體效價（金標準）**：> 0.6 nmol/L 為陽性。約 2% 為血清陰性 MG
- **Edrophonium (Tensilon) test**：[藥物:Edrophonium] 0.1-0.2 mg/kg IV 快速注射，陽性 = 30-60 秒內肌力改善持續 2-5 分鐘。備 Atropine 以防膽鹼激性危象
- **胸腔 X 光**：評估 megaesophagus 與胸腺腫塊、吸入性肺炎
- **EMG/重複神經刺激（RNS）**：漸減反應（decremental response）> 10% 支持 NMJ 疾病

## 治療

- [藥物:Pyridostigmine] 0.5-3 mg/kg PO BID-TID（抗膽鹼酯酶基礎治療）
- 巨食道管理：直立餵食（Bailey chair）、小量多餐、高卡路里
- 吸入性肺炎預防與治療：為最主要的致死原因
- 嚴重/難治型：免疫抑制（[藥物:Prednisolone]、[藥物:Azathioprine]、[藥物:Mycophenolate]）
- 胸腺腫瘤：手術切除

[圖片:MG 的 NMJ 病理機轉與藥物作用位點示意圖]`,
  clinical_pearl: '犬 MG 的最大陷阱是「局灶型」——約 40% 的後天型 MG 犬僅表現巨食道而無明顯四肢無力。因此，任何新診斷的犬巨食道都應納入 MG 的鑑別診斷，並檢測 AChR 抗體。另一個重要觀念是：約 87% 的後天型 MG 犬可在 6-8 個月內自發緩解，但在等待緩解期間，吸入性肺炎是最主要的致死原因——因此巨食道的管理和飼主衛教至關重要。',
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

## 概述

退化性脊髓病變（DM）是犬的慢性進行性上運動神經元與全身性下運動神經元退化性疾病，病理學上與人的 ALS 極為相似。SOD1 基因突變被鑑定為主要的遺傳風險因子。

## 遺傳學

- **SOD1 基因突變**：E40K 突變（最常見，跨多品種）
- 基因型：
  - N/N（normal）：正常
  - A/N（carrier）：攜帶者，發病風險極低
  - A/A（homozygous mutant）：高風險，但非 100% 外顯率
- 部分品種（Bernese Mountain Dog）有不同的 SOD1 突變（T18S）
- 基因檢測意義：A/A 配合臨床表現支持推定診斷，但 A/A 不等於一定發病

## 病理機轉

- SOD1 蛋白異常折疊 → 蛋白聚集體形成 → 氧化壓力增加
- 上運動神經元軸突退化（胸腰段最早受累）
- 白質脫髓鞘與軸突喪失
- 晚期擴展至下運動神經元、腦幹核
- 類似人 ALS 的 dying-back 機轉

## 臨床進展

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

## 診斷

- **排除性診斷**：排除可治療的脊髓疾病後作推定診斷
- MRI：排除椎間盤疾病、腫瘤等壓迫性病灶（DM 的 MRI 通常正常或僅見輕微萎縮）
- SOD1 基因檢測：A/A homozygous 支持診斷
- CSF：通常正常
- **確定診斷：死後組織病理**——胸腰段白質全方位軸突變性與脫髓鞘

[圖片:DM 臨床進展四階段示意圖]`,
  clinical_pearl: 'DM 的生前診斷是「排除性」的——你永遠不能 100% 確定是 DM，只能排除其他可治療的疾病。臨床上最常見的陷阱是將慢性 Type II IVDD 誤診為 DM，或反過來。關鍵鑑別點：DM 通常無疼痛，而 IVDD 常有脊椎痛。此外，DM 的 MRI 不會顯示壓迫性病灶。SOD1 基因 A/A 支持但不能確診 DM——約 10-30% 的某些品種正常個體也是 A/A。',
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

## 學科範疇

獸醫神經科專注於犬貓中樞神經系統（CNS：腦與脊髓）及周邊神經系統（PNS：腦神經、脊神經、神經肌肉接合處、肌肉）疾病的診斷與治療。

## 臨床推理核心：神經定位

神經科最獨特的臨床技能是「神經定位診斷」——透過系統性神經學檢查（意識→步態→姿勢反應→脊髓反射→腦神經），將觀察到的神經功能缺損對應至特定解剖區域。正確的定位是建立鑑別診斷清單的基礎。

## 主要疾病類別

| 類別 | 代表疾病 | 好發物種/品種 |
|------|---------|-------------|
| 癲癇 | 特發性癲癇 | 犬（Beagle、GSD、Border Collie） |
| 脊髓疾病 | IVDD | 犬（臘腸犬、French Bulldog） |
| 發炎性 CNS | MUO（GME/NME/NLE） | 犬（小型犬） |
| 前庭疾病 | 特發性前庭症候群 | 犬（老年犬） |
| 神經肌肉 | MG、多發性神經根炎 | 犬（GSD、Golden） |
| 退化性 | DM | 犬（GSD、Welsh Corgi） |

## 診斷工具概覽

- **神經學檢查**：最基礎且最重要，無需特殊設備
- **MRI**：CNS 疾病的金標準影像工具
- **CSF 分析**：發炎性 vs 感染性 CNS 疾病鑑別
- **CT**：骨骼結構評估、MRI 不可得時替代
- **EMG/NCV**：周邊神經與神經肌肉疾病評估

## 台灣臨床現況

台灣小動物神經科近年快速發展，MRI 設備在主要都會區已相對普及。常見急診包括癲癇重積狀態、急性 IVDD（臘腸犬在台灣飼養量大）與急性前庭症候群（老年犬）。`,
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

## 中樞神經系統

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

## 周邊神經系統

### 腦神經（12 對）
- CN I（嗅覺）、CN II（視覺）
- CN III/IV/VI（眼球運動）、CN V（面部感覺+咀嚼）
- CN VII（面部表情+味覺）、CN VIII（聽覺+前庭）
- CN IX/X（吞嚥+發聲）、CN XI（斜方肌）、CN XII（舌頭運動）

### UMN vs LMN 通路
- **UMN**：起自大腦皮質運動區 → 內囊 → 腦幹 → 脊髓側索/腹索 → 突觸至 LMN
- **LMN**：脊髓腹角 α 運動神經元 → 腹根 → 脊神經 → 周邊神經 → NMJ → 骨骼肌`,
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

## 神經元電生理

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

## 突觸傳遞

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

## 神經肌肉接合處 (NMJ)

正常 NMJ 傳導：
1. 運動神經末梢動作電位 → Ca²⁺ 內流
2. ACh 突觸小泡釋放（量子釋放）
3. ACh 與終板膜 nAChR 結合 → 終板電位（EPP）
4. EPP 達閾值 → 肌膜動作電位 → 肌肉收縮
5. AChE 水解 ACh → 終止訊號

**安全因子（Safety factor）**：正常 EPP 遠超閾值，即使部分 AChR 被阻斷仍可正常傳導。MG 中 AChR 減少使安全因子下降，反覆刺激導致 EPP 逐漸低於閾值 → 漸減反應（decremental response）。`,
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
  ],
  is_current: true,
  created_at: now,
};

/** 神經藥理學 — 概念型 */
const contentNeuropharmacology: NodeContent = {
  id: 'CONTENT-NEURO-L1-003',
  node_id: 'NEURO-L1-003',
  version: 1,
  summary: '獸醫神經藥理學涵蓋作用於中樞與周邊神經系統的藥物。核心藥物類別包括：抗癲癇藥物（AEDs：Phenobarbital、KBr、Levetiracetam、Zonisamide）、免疫抑制劑（Prednisolone、Cytarabine、Cyclosporine 用於 MUO）、抗膽鹼酯酶藥（Pyridostigmine 用於 MG）、鎮痛藥（Gabapentin、Tramadol、Opioids）以及肌肉鬆弛劑。理解每類藥物的藥理機轉、藥物動力學與臨床監測要點是安全有效用藥的基礎。',
  learning_objectives: [
    '分類獸醫神經科常用藥物並描述其藥理機轉',
    '比較四種主要抗癲癇藥物的藥理特性與監測要點',
    '說明 MUO 治療中免疫抑制藥物的選擇邏輯',
    '描述神經性疼痛的藥物治療策略',
    '辨識常見神經科藥物的副作用與藥物交互作用',
  ],
  key_points: [
    'AED 機轉分三大類：增強 GABA 抑制（PB、Diazepam）、阻斷 Na⁺/Ca²⁺ 通道（ZNS）、突觸囊泡蛋白結合（LEV→SV2A）',
    'PB 需監測血中濃度（目標 15-35 ug/mL）與肝功能；KBr 需穩定飲食 Na⁺/Cl⁻ 攝取',
    'MUO 免疫抑制階梯：Prednisolone 起始 → 加入二線（Cytarabine/Cyclosporine/Mycophenolate/Leflunomide）→ 緩慢減量',
    '神經性疼痛：Gabapentin（Ca²⁺ α2δ 次單元結合）為一線，可合併 Tramadol 或 Amantadine',
    'Pyridostigmine（可逆性 AChE 抑制劑）為 MG 基礎治療',
    '血腦屏障（BBB）限制許多全身性藥物進入 CNS——脂溶性藥物穿透性佳',
    '犬對 Metronidazole 中毒敏感（> 60 mg/kg/day 風險增加），表現為中樞性前庭徵象',
  ],
  body: `# 神經藥理學

## 抗癲癇藥物 (AEDs)

### 藥理機轉分類

| 藥物 | 機轉 | 優勢 | 主要副作用 |
|------|------|------|-----------|
| Phenobarbital (PB) | GABA-A 受體增強 | 便宜、經驗最多 | 肝毒性、鎮靜、多飲多食 |
| Potassium Bromide (KBr) | Cl⁻ 通道穩定 | 無肝毒性 | 腸胃不適、後肢共濟失調 |
| Levetiracetam (LEV) | SV2A 蛋白結合 | 副作用少、可 IV | 蜜月期效果 |
| Zonisamide (ZNS) | Na⁺/Ca²⁺ 通道阻斷 | BID 給藥 | 鎮靜、食慾下降 |

### 藥物監測要點
- PB：起始後 2-3 週達穩態，測谷值（trough level），目標 15-35 ug/mL
- KBr：穩態需 2-3 個月，目標 1-3 mg/mL（合併 PB）或 2-3 mg/mL（單用）
- PB 具肝臟酵素誘導作用——影響其他藥物代謝（LEV 半衰期縮短）

## 免疫抑制劑（MUO 治療）

- **Prednisolone**：起始 1-2 mg/kg BID，穩定後漸減至 0.25-0.5 mg/kg QOD
- **Cytarabine (Ara-C)**：50 mg/m² SC BID × 2 天 q3-4 週，骨髓抑制為主要副作用
- **Cyclosporine**：5-10 mg/kg PO BID，需監測血中濃度
- **Mycophenolate**：10-20 mg/kg PO BID，腸胃副作用常見

## 鎮痛藥

### 神經性疼痛
- **Gabapentin**：5-10 mg/kg PO BID-TID，結合電壓門控 Ca²⁺ 通道 α2δ 次單元
- **Amantadine**：3-5 mg/kg PO SID，NMDA 受體拮抗劑
- **Tramadol**：2-5 mg/kg PO BID-TID，弱 μ-opioid + 血清素/去甲腎上腺素再攝取抑制

## 血腦屏障 (BBB)

BBB 由腦微血管內皮細胞緊密接合構成，限制極性與大分子藥物進入 CNS。臨床意義：
- 高脂溶性藥物（PB、Diazepam）易穿透
- 水溶性抗生素 CNS 滲透率低，需選擇可穿透 BBB 的品項
- BBB 發炎時通透性增加（腦膜炎時部分藥物穿透率提高）`,
  clinical_pearl: 'PB 的肝臟酵素誘導作用是臨床上最常被忽略的藥物交互作用來源。PB 誘導 CYP450 酵素後，不僅加速自身代謝（auto-induction），還加速 LEV、ZNS、Cyclosporine 等多種藥物的代謝。實務上，合併 PB 的犬使用 LEV 時需要更高劑量或更頻繁給藥（extended-release LEV 可緩解此問題）。',
  common_mistakes: [
    '開始 PB 後未等穩態（2-3 週）即測血中濃度並調整劑量',
    '合併使用 NSAIDs 與 Corticosteroids（腸胃道出血風險大幅增加）',
    '未監測 Cyclosporine 血中濃度而盲目調整劑量',
    '忽略 PB 的酵素誘導效應對其他合併用藥的影響',
  ],
  disease_data: null,
  diagnostic_data: null,
  procedure_data: null,
  visual_placeholders: [
    { position: 'AED 表格後', type: 'comparison_table', description: '四種 AED 藥動學與監測參數比較表' },
  ],
  interactive_placeholders: [],
  drug_api_links: ['Phenobarbital', 'Potassium Bromide', 'Levetiracetam', 'Zonisamide', 'Diazepam', 'Prednisolone', 'Cytarabine', 'Cyclosporine', 'Mycophenolate', 'Gabapentin', 'Tramadol', 'Pyridostigmine'],
  references: [
    { type: 'guideline', citation: 'Podell M et al. 2015 ACVIM Small Animal Consensus Statement on Seizure Management in Dogs. J Vet Intern Med. 2016;30(2):477-490.', relevance: 'AED 使用共識' },
    { type: 'textbook', citation: 'Riviere JE, Papich MG. Veterinary Pharmacology and Therapeutics, 10th ed. Wiley-Blackwell, 2018.', relevance: '獸醫藥理學權威教材' },
    { type: 'journal', citation: 'Munana KR et al. Use of levetiracetam as adjunctive treatment for refractory canine epilepsy: a randomized, placebo-controlled crossover trial. J Vet Intern Med. 2012;26(2):341-348.', relevance: 'LEV 臨床試驗' },
  ],
  is_current: true,
  created_at: now,
};

/** 神經退化機轉 — 機轉型 */
const contentNeurodegeneration: NodeContent = {
  id: 'CONTENT-NEURO-L2-001',
  node_id: 'NEURO-L2-001',
  version: 1,
  summary: '神經退化（Neurodegeneration）是一類以神經元進行性喪失為特徵的病理過程。犬貓常見的神經退化疾病包括退化性脊髓病變（DM/SOD1 突變）、認知障礙症候群（CDS）與儲積症（storage diseases）。核心機轉包括：蛋白質錯誤折疊與聚集、氧化壓力、粒線體功能障礙、興奮毒性（excitotoxicity）、神經發炎與細胞凋亡。',
  learning_objectives: [
    '列舉犬貓常見的神經退化疾病與其分子基礎',
    '描述蛋白質錯誤折疊在神經退化中的角色',
    '說明氧化壓力與粒線體功能障礙如何導致神經元死亡',
    '解釋 Glutamate 興奮毒性的病理機轉',
    '將退化機轉連結至臨床疾病（DM、CDS）',
  ],
  key_points: [
    'DM 核心機轉：SOD1 蛋白錯誤折疊 → 聚集體形成 → 氧化壓力 → 軸突 dying-back 退化',
    'CDS 核心機轉：類澱粉蛋白（Aβ）沉積 + tau 蛋白病變 → 突觸喪失 → 認知衰退',
    '興奮毒性：Glutamate 過度釋放 → NMDA 受體過度活化 → Ca²⁺ 大量內流 → 粒線體損傷 → 細胞死亡',
    '氧化壓力：ROS 產生 > 抗氧化能力 → 脂質過氧化、DNA 損傷、蛋白質氧化',
    '細胞凋亡通路：粒線體通路（intrinsic）與死亡受體通路（extrinsic）',
    '儲積症（Lysosomal storage diseases）：酵素缺乏 → 代謝廢物堆積 → 神經元腫脹壞死',
  ],
  body: `# 神經退化機轉

## 核心病理機轉

### 蛋白質錯誤折疊與聚集
- 正常蛋白質摺疊由分子伴侶（chaperones）輔助
- 突變或環境壓力 → 蛋白質錯誤折疊 → 聚集體形成
- 蛋白酶體（proteasome）與自噬（autophagy）系統過載
- 犬 DM：SOD1 E40K 突變 → SOD1 聚集體在運動神經元中累積

### 氧化壓力
- 神經元代謝率高，對氧化損傷特別敏感
- ROS 來源：粒線體電子傳遞鏈漏洩、NADPH 氧化酶、MAO 活性
- SOD1 功能異常 → 超氧陰離子清除能力下降 → ROS 累積

### 粒線體功能障礙
- 粒線體為神經元能量供應核心（ATP 合成）
- 功能障礙 → ATP 不足 → 離子泵失效 → 膜電位失穩 → 細胞死亡
- 粒線體通透性轉換孔（mPTP）開放 → cytochrome c 釋放 → 細胞凋亡

### Glutamate 興奮毒性
- 缺血或損傷時 Glutamate 大量釋放
- NMDA 受體過度活化 → Ca²⁺ 大量內流
- Ca²⁺ 過載啟動：蛋白酶活化、ROS 生成、粒線體損傷
- 與癲癇後神經損傷、脊髓挫傷後繼發損傷高度相關

## 犬貓臨床對應

| 機轉 | 臨床疾病 | 特徵 |
|------|---------|------|
| SOD1 聚集 | 退化性脊髓病變 (DM) | 慢性進行性後肢 UMN 輕癱 |
| Aβ 沉積 | 認知障礙症候群 (CDS) | 方向感喪失、睡眠障礙、互動減少 |
| 酵素缺乏 | 儲積症 | 幼犬/幼貓進行性神經衰退 |
| 興奮毒性 | 脊髓挫傷繼發損傷 | IVDD 後脊髓水腫惡化 |`,
  clinical_pearl: '了解興奮毒性（excitotoxicity）對 IVDD 術後照護有實際意義。脊髓壓迫後的繼發損傷（secondary injury）部分由 Glutamate 興奮毒性驅動，這是為什麼術後 24-48 小時內神經功能可能持續惡化的原因之一。目前尚無已證實的神經保護藥物，但避免低血壓（維持脊髓灌流）是最重要的可控因素。',
  common_mistakes: [
    '將所有慢性進行性神經退化都歸因於 DM——其他退化性疾病（儲積症、多系統退化）也需考慮',
    '忽略氧化壓力在 IVDD 繼發損傷中的角色',
    '將犬 CDS 簡單等同於人的 Alzheimer 病——雖然有相似處但並非完全相同',
  ],
  disease_data: null,
  diagnostic_data: null,
  procedure_data: null,
  visual_placeholders: [
    { position: '核心機轉段落後', type: 'flowchart', description: '神經退化多重機轉交互作用流程圖' },
  ],
  interactive_placeholders: [],
  drug_api_links: [],
  references: [
    { type: 'journal', citation: 'Awano T et al. Genome-wide association analysis reveals a SOD1 mutation in canine degenerative myelopathy. Proc Natl Acad Sci USA. 2009;106(8):2794-2799.', relevance: 'SOD1 突變與 DM' },
    { type: 'journal', citation: 'Cotman CW, Head E. The canine (dog) model of human aging and disease. Biochim Biophys Acta. 2008;1782(12):685-692.', relevance: '犬認知退化模型' },
    { type: 'textbook', citation: 'de Lahunta A, Glass E, Kent M. Veterinary Neuroanatomy and Clinical Neurology, 4th ed. Saunders, 2015.', relevance: '神經退化病理基礎' },
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

## 損傷分類

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

## 纖維直徑與功能喪失順序

脊髓受壓時，大直徑有髓纖維最先受影響，小直徑無髓纖維最後受影響：

| 喪失順序 | 功能 | 纖維特性 | 臨床對應 |
|---------|------|---------|---------|
| 1（最先） | 本體感覺 | 大直徑有髓 | 共濟失調、knuckling |
| 2 | 自主運動 | 中直徑有髓 | 輕癱 → 癱瘓 |
| 3 | 淺痛覺 | 小直徑有髓 | 皮膚痛覺減退 |
| 4（最後） | 深痛覺 | 小直徑無髓 C 纖維 | Grade V IVDD |

## 急性 vs 慢性壓迫

- **急性壓迫**（如 Hansen Type I）：脊髓無時間適應，挫傷嚴重，繼發損傷顯著
- **慢性壓迫**（如 Hansen Type II）：脊髓逐漸適應，可容忍較大程度壓迫而維持功能

## 進行性脊髓軟化 (PMM)

- 發生率：Grade V IVDD 約 2-5%
- 機轉：繼發損傷的極端情況，脊髓自溶性壞死向頭尾端擴展
- 臨床徵兆：術後神經功能持續惡化（LMN 徵象擴展至前肢）、panniculus 截斷面持續上移
- 預後：一旦確認為 PMM，致死率接近 100%`,
  clinical_pearl: '在評估 IVDD Grade V 患者時，最關鍵的概念是「時間窗」。繼發損傷在原發損傷後持續數天，早期手術減壓可以減少繼發損傷的嚴重度。這是為什麼深痛覺喪失被視為「與時間賽跑」的緊急情況——每延遲一小時，脊髓繼發損傷就多一分累積。',
  common_mistakes: [
    '低估繼發損傷的嚴重性——術後神經功能可能因繼發損傷持續惡化',
    '將 Hansen Type II 的慢性壓迫用急性壓迫的預後標準評估',
    '忽略 PMM 的早期徵兆——panniculus 截斷面持續上移是重要警訊',
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
  ],
  is_current: true,
  created_at: now,
};

/** 腦炎機轉 — 機轉型 */
const contentEncephalitisMechanism: NodeContent = {
  id: 'CONTENT-NEURO-L2-003',
  node_id: 'NEURO-L2-003',
  version: 1,
  summary: '腦炎（Encephalitis）是腦實質的發炎反應，犬貓的病因分為感染性與非感染性（免疫介導性）兩大類。感染性腦炎的致病原包括原蟲（Toxoplasma、Neospora）、病毒（CDV、FIP）、真菌（Cryptococcus）與細菌。非感染性腦炎以 MUO（GME/NME/NLE）為代表，為犬最常見的 CNS 發炎疾病。核心病理機轉涉及血腦屏障（BBB）破壞、免疫細胞浸潤、細胞激素風暴與神經組織損傷。',
  learning_objectives: [
    '區分感染性與非感染性腦炎的病理機轉',
    '描述 BBB 破壞在腦炎發展中的角色',
    '列出犬貓常見的感染性腦炎致病原與地區分布',
    '說明 MUO 三種亞型的免疫病理機轉差異',
    '解釋腦炎中顱內壓升高的機轉與臨床意義',
  ],
  key_points: [
    '感染性：Toxoplasma（犬貓）、Neospora（犬）、CDV（犬）、FIP（貓）、Cryptococcus（貓>犬）',
    '非感染性：MUO 涵蓋 GME（T 細胞介導）、NME（大腦皮質壞死，Pug）、NLE（白質壞死，Yorkie）',
    'BBB 破壞是腦炎的關鍵啟動步驟——允許免疫細胞與抗體進入 CNS',
    'GME 免疫病理：CD4+ T 細胞 + 巨噬細胞血管周圍聚集 → 肉芽腫形成',
    'NME 免疫病理：抗膠質纖維酸性蛋白（GFAP）抗體可能參與 → 大腦皮質壞死',
    '顱內壓升高機轉：腦水腫（血管性+細胞毒性）→ Monroe-Kellie 原則 → 腦疝風險',
    'CSF 特徵：感染性可見嗜中性球或混合細胞增多；MUO 以淋巴球-單核球增多為主',
  ],
  body: `# 腦炎機轉

## 感染性腦炎

### 致病原入侵途徑
- **血行性散播**：最常見途徑（Toxoplasma、Cryptococcus）
- **直接延伸**：中耳/內耳感染延伸至腦幹
- **神經軸突逆行**：部分病毒（如 Rabies）

### 常見致病原

| 致病原 | 物種 | CSF 特徵 | 診斷 |
|--------|------|---------|------|
| Toxoplasma | 犬貓 | 混合細胞增多 | IgM/IgG 抗體、PCR |
| Neospora | 犬 | 混合/嗜中性球 | IgG 抗體、PCR |
| CDV | 犬 | 淋巴球增多 | PCR（CSF/血液） |
| FIP | 貓 | 嗜中性球/蛋白極高 | Rivalta test、PCR |
| Cryptococcus | 貓>犬 | 嗜酸球或混合 | 乳膠凝集抗原、墨汁染色 |

## 非感染性（免疫介導性）腦炎

### BBB 破壞的角色
1. 正常 BBB 將 CNS 隔離為「免疫特權」區域
2. 免疫失調 → 活化 T 細胞穿越 BBB
3. CNS 內抗原呈現 → 局部免疫反應擴大
4. 發炎介質（TNF-α、IL-1β、IL-6）→ BBB 通透性進一步增加 → 惡性循環

### MUO 亞型免疫病理
- **GME**：CD4+ T 細胞 + 巨噬細胞為主的遲發型過敏反應 → 血管周圍肉芽腫
- **NME**：可能涉及自體抗體（anti-GFAP），與 DLA class II 強烈相關 → 大腦皮質壞死
- **NLE**：白質選擇性壞死伴血管周圍發炎，機轉尚不完全明瞭

## 顱內壓升高

腦炎 → 血管性水腫（BBB 漏出）+ 細胞毒性水腫（細胞損傷）→ 腦容積增加 → Monroe-Kellie 原則：腦組織 + CSF + 血液的總容積固定 → 代償機制耗盡時 ICP 急升 → 腦灌流壓下降 → 腦缺血 → 可能腦疝（herniation）`,
  clinical_pearl: '臨床上區分感染性與非感染性腦炎至關重要——因為治療方向完全相反。MUO 需要免疫抑制，而感染性腦炎使用免疫抑制會導致災難性後果。因此，在 CSF 感染性 panel（Toxoplasma/Neospora Ab、CDV PCR、Cryptococcus Ag）回報前，建議使用較低的抗發炎劑量類固醇（0.5-1 mg/kg）而非高劑量免疫抑制（2 mg/kg）。',
  common_mistakes: [
    '未排除感染即給予高劑量免疫抑制治療——可能使感染性腦炎急速惡化',
    '忽略 FIP 作為貓 CNS 發炎疾病的重要鑑別——CSF 蛋白極高是重要線索',
    '低估顱內壓升高的風險——腦炎嚴重時 CSF 採集本身可能誘發腦疝',
  ],
  disease_data: null,
  diagnostic_data: null,
  procedure_data: null,
  visual_placeholders: [
    { position: 'BBB 破壞段落後', type: 'flowchart', description: '腦炎中 BBB 破壞與免疫級聯反應流程圖' },
  ],
  interactive_placeholders: [],
  drug_api_links: [],
  references: [
    { type: 'journal', citation: 'Granger N et al. Canine meningoencephalitis of unknown origin: a review. J Vet Intern Med. 2010;24(5):1065-1076.', relevance: 'MUO 免疫病理綜述' },
    { type: 'textbook', citation: 'Platt SR, Olby NJ. BSAVA Manual of Canine and Feline Neurology, 4th ed. BSAVA, 2013.', relevance: 'CNS 發炎疾病章節' },
    { type: 'journal', citation: 'Talarico LR, Schatzberg SJ. Idiopathic granulomatous and necrotising inflammatory disorders of the canine CNS. Vet J. 2010;186(1):4-11.', relevance: 'GME/NME/NLE 病理機轉' },
  ],
  is_current: true,
  created_at: now,
};

/** 周邊神經病變機轉 — 機轉型 */
const contentPeripheralNeuropathy: NodeContent = {
  id: 'CONTENT-NEURO-L2-004',
  node_id: 'NEURO-L2-004',
  version: 1,
  summary: '周邊神經病變（Peripheral Neuropathy）涵蓋周邊神經的各種病理變化，包括脫髓鞘（demyelination）、軸突退化（axonal degeneration/Wallerian degeneration）與神經元體病變（neuronopathy）。犬貓常見的周邊神經病變包括免疫介導性多發性神經根炎（ACP）、代謝性神經病變（糖尿病、甲狀腺功能低下）、中毒性神經病變與遺傳性神經病變。臨床表現為 LMN 徵象：反射減弱、肌張力降低、快速肌肉萎縮。',
  learning_objectives: [
    '區分脫髓鞘性與軸突性周邊神經病變的病理與電生理特徵',
    '描述 Wallerian degeneration 的過程',
    '列出犬貓常見的周邊神經病變病因分類',
    '說明電生理學（EMG/NCV）在周邊神經病變診斷中的角色',
    '將病理機轉連結至臨床疾病（ACP、糖尿病神經病變、MG）',
  ],
  key_points: [
    '脫髓鞘性（demyelinating）：Schwann 細胞/髓鞘損傷 → 傳導減慢 → NCV 下降',
    '軸突性（axonal）：軸突直接損傷 → Wallerian degeneration → CMAP 振幅降低',
    'Wallerian degeneration：軸突切斷後遠端 → 軸突與髓鞘崩解 → Schwann 細胞增殖形成 Büngner band → 引導軸突再生',
    '免疫介導性：ACP（類似 GBS）、慢性發炎性脫髓鞘多發神經病變（CIDP）',
    '代謝性：糖尿病神經病變（貓常見）、甲狀腺功能低下性神經病變（犬）',
    '中毒性：鉛、鉈、有機磷、Vincristine（化療藥物）',
    'EMG 典型發現：去神經電位（fibrillation potentials、positive sharp waves）出現於損傷 5-7 天後',
  ],
  body: `# 周邊神經病變機轉

## 病理分類

### 脫髓鞘性（Demyelinating）
- Schwann 細胞或髓鞘為攻擊靶點
- 髓鞘喪失 → 跳躍傳導（saltatory conduction）中斷 → 傳導減慢或阻斷
- 電生理：神經傳導速度（NCV）顯著下降、temporal dispersion
- 恢復較快（髓鞘再生 weeks to months）
- 代表疾病：ACP 脫髓鞘型、CIDP

### 軸突性（Axonal）
- 軸突為主要損傷靶點
- Wallerian degeneration：損傷處以遠的軸突崩解
- 電生理：CMAP 振幅降低，NCV 可能正常或輕度下降
- 恢復較慢（軸突再生速度 ~1-4 mm/day）
- 代表疾病：ACP 軸突型、代謝/中毒性神經病變

### 神經元體病變（Neuronopathy）
- 神經元細胞體為損傷靶點（脊髓前角或背根神經節）
- 不可逆——無法再生
- 代表疾病：遺傳性運動神經元病變

## Wallerian Degeneration

損傷部位以遠的退化過程：
1. 軸突斷裂 → 遠端軸突 Ca²⁺ 內流
2. Calpain 活化 → 軸突骨架崩解
3. 髓鞘與軸突碎片由 Schwann 細胞與巨噬細胞吞噬清除
4. Schwann 細胞增殖排列形成 Büngner band（再生管道）
5. 近端軸突芽生（sprouting）沿 Büngner band 向遠端再生（~1-4 mm/day）

## 犬貓常見病因

| 類別 | 疾病 | 機轉 | 物種 |
|------|------|------|------|
| 免疫介導 | ACP | 脫髓鞘/軸突 | 犬 |
| 代謝性 | 糖尿病神經病變 | 軸突性 | 貓>>犬 |
| 代謝性 | 甲狀腺功能低下 | 軸突/脫髓鞘 | 犬 |
| 中毒性 | 有機磷 | 軸突性 | 犬貓 |
| 腫瘤相關 | 副腫瘤神經病變 | 多種 | 犬 |
| 遺傳性 | 品種特異性 | 軸突/脫髓鞘 | 犬 |

## 電生理學診斷

- **EMG**：去神經電位（fibrillation potentials、positive sharp waves）在損傷 5-7 天後出現
- **NCV**：脫髓鞘型顯著減慢，軸突型 CMAP 降低但速度相對正常
- **重複神經刺激（RNS）**：NMJ 疾病（MG）出現漸減反應`,
  clinical_pearl: '糖尿病神經病變在貓中極為常見，但常被低估。典型表現為「腳踝著地」（plantigrade stance）——後肢跗關節觸地行走。這是因為脛神經的長軸突（distal axonopathy）最先受影響。血糖控制良好後多數貓的神經功能可逐漸恢復（數週至數月），這與軸突再生速度一致。',
  common_mistakes: [
    '在損傷 5 天內做 EMG 而得到假陰性結果——去神經電位需 5-7 天才出現',
    '將脫髓鞘型與軸突型的預後混淆——脫髓鞘型通常恢復較快（週到月），軸突型較慢（月到年）',
    '忽略甲狀腺功能低下作為犬周邊神經病變的可治療病因',
  ],
  disease_data: null,
  diagnostic_data: null,
  procedure_data: null,
  visual_placeholders: [
    { position: 'Wallerian degeneration 段落後', type: 'timeline', description: 'Wallerian degeneration 與軸突再生時間軸' },
  ],
  interactive_placeholders: [],
  drug_api_links: [],
  references: [
    { type: 'journal', citation: 'Cuddon PA. Acquired canine peripheral neuropathies. Vet Clin North Am Small Anim Pract. 2002;32(1):207-249.', relevance: '犬後天性周邊神經病變綜合回顧' },
    { type: 'textbook', citation: 'Platt SR, Olby NJ. BSAVA Manual of Canine and Feline Neurology, 4th ed. BSAVA, 2013.', relevance: '周邊神經疾病章節' },
    { type: 'journal', citation: 'Mizisin AP et al. Mechanisms of disease: diabetic neuropathy in cats. Nat Clin Pract Neurol. 2007;3(3):171-177.', relevance: '貓糖尿病神經病變機轉' },
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

## 檢查前準備
- 安靜環境，減少干擾
- 先讓動物自由活動觀察步態
- 準備工具：反射錘、止血鉗、手電筒、棉花棒

## 系統性五步驟

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
- CN XII：舌頭對稱與運動`,
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

## 採集技術

### 小腦延髓池穿刺（Cisternal Puncture）
- 全身麻醉，側臥或腹臥位
- 頭部屈曲，枕骨與 C1 椎弓間觸及凹陷
- 22G 脊髓穿刺針垂直進針至硬膜穿破（「pop」感）
- 觀察 CSF 自然流出，收集 0.5-1 mL

### 腰椎穿刺（Lumbar Puncture）
- L5-L6 或 L6-L7 椎間隙進針
- 適用於腰薦段病變定位
- 犬較大型者操作較容易

## 常規分析

| 項目 | 正常值 | 臨床意義 |
|------|--------|---------|
| 外觀 | 無色透明 | 混濁提示感染/高細胞；血性提示出血或穿刺汙染 |
| 蛋白 | < 25 mg/dL | 升高見於發炎、腫瘤、出血 |
| WBC | < 5 cells/μL | 升高為 pleocytosis |
| RBC | 0 | 穿刺汙染 vs 蛛網膜下腔出血（離心後上清液黃染 = 出血） |

## CSF 細胞學模式

| 模式 | 主要細胞 | 常見病因 |
|------|---------|---------|
| 淋巴球增多 | 淋巴球 > 50% | MUO、病毒性腦炎 |
| 嗜中性球增多 | 嗜中性球 > 50% | 細菌性腦膜炎、FIP、steroid-responsive meningitis-arteritis |
| 混合細胞增多 | 淋巴球+嗜中性球 | Toxoplasma/Neospora、真菌、部分 MUO |
| 嗜酸球增多 | 嗜酸球 > 10% | 寄生蟲移行、Cryptococcus（部分） |

## 特異性檢測

- **感染 panel**：Toxoplasma IgG/IgM、Neospora IgG、CDV PCR、Cryptococcus Ag
- **腫瘤細胞學**：淋巴瘤可能見到異型淋巴球
- **白蛋白指數（Albumin quotient）**：評估 BBB 完整性`,
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

## MRI vs CT 比較

| 特性 | MRI | CT |
|------|-----|-----|
| 軟組織對比 | 優異 | 中等 |
| 骨骼評估 | 有限 | 優異 |
| 掃描時間 | 30-60 分鐘 | 5-10 分鐘 |
| 費用 | 較高 | 較低 |
| 麻醉需求 | 全麻（不能動） | 全麻（較短） |
| 脊髓訊號 | 可直接評估 | 需 myelography |
| 金屬植入物 | 禁忌（多數） | 可 |

## MRI 基礎序列

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

## 常見疾病影像特徵

| 疾病 | T2W | T1W | Gd-T1W |
|------|-----|-----|--------|
| IVDD | 脊髓高訊號、突出物 | 脊髓等至低訊號 | 通常不增強 |
| MUO | 多灶高訊號 | 低至等訊號 | 不規則增強 |
| 腦腫瘤 | 高訊號腫塊 | 低至等訊號 | 均勻或環狀增強 |
| 腦梗塞 | 楔形高訊號 | 低訊號 | 亞急性期可增強 |
| DM | 通常正常 | 正常 | 不增強 |`,
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

## 治療起始標準（IVETF 共識）

開始長期 AED 的指征：
1. 首次 cluster seizures 或 status epilepticus
2. 發作頻率 > 2 次/6 個月
3. 嚴重或延長的 post-ictal 期
4. 發作嚴重度或頻率呈增加趨勢

## 一線藥物

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

## 二線藥物

| 藥物 | 劑量 | 優勢 | 注意事項 |
|------|------|------|---------|
| Levetiracetam | 20 mg/kg PO TID | 副作用少、可 IV | Honeymoon effect、合併 PB 需更高劑量 |
| Zonisamide | 5-10 mg/kg PO BID | BID 給藥方便 | 鎮靜、食慾下降 |

## 難治性癲癇處理

定義：兩種適當 AED 以治療劑量使用仍無法有效控制

策略：
1. 確認診斷正確（排除結構性病因）
2. 確認藥物依從性（飼主是否按時給藥）
3. 確認血中濃度在治療範圍
4. 嘗試不同 AED 組合
5. 考慮迷走神經刺激（VNS，有限經驗）

## 緊急處置：癲癇重積狀態

急救順序：
1. [藥物:Diazepam] 0.5-1 mg/kg IV（或 per rectum 1-2 mg/kg）
2. [藥物:Levetiracetam] 30-60 mg/kg IV
3. [藥物:Phenobarbital] 2-4 mg/kg IV q20-30min（最多 16-24 mg/kg/24hr）
4. 難治性 SE：[藥物:Propofol] CRI 或 [藥物:Midazolam] CRI`,
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

## 術式選擇

| 術式 | 適應症 | 進入方式 |
|------|--------|---------|
| Hemilaminectomy | 胸腰椎 IVDD（T3-L7） | 單側移除椎弓板與椎弓根 |
| Ventral slot | 頸椎 IVDD（C2-C7） | 椎體腹側鑽入椎管 |
| Dorsal laminectomy | 頸椎背側壓迫、Wobbler syndrome | 背側椎板切除 |

## Hemilaminectomy 手術步驟

1. 背正中皮膚切口，偏向壓迫側
2. 分離椎旁肌肉暴露椎板
3. 以高速鑽（pneumatic burr）移除一側椎弓板與部分椎弓根
4. 暴露硬膜外腔
5. 小心移除突出的椎間盤物質（dental spoon / suction）
6. 確認脊髓減壓充分
7. 以明膠海綿（Gelfoam）止血
8. 逐層閉合

## Ventral Slot 手術步驟

1. 腹側頸部切口
2. 分離食道氣管至椎體腹側
3. 在目標椎間隙以高速鑽製作矩形骨窗
4. 穿過纖維環進入椎管
5. 移除腹側突出物
6. 注意不可過度擴大 slot（> 椎體寬 1/3 可致不穩定）

## 術後管理

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
- 第 4-8 週：漸進性增加活動量`,
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

## 復健原理

### 神經可塑性（Neuroplasticity）
- 脊髓與腦具有一定的功能重組能力
- 重複性特定動作訓練可強化殘存神經通路
- 「use it or lose it」原則——不活動導致功能進一步喪失

### 預防併發症
- 褥瘡：定期翻身（q4-6h）、厚軟墊
- 肌肉萎縮：PROM + NMES
- 關節攣縮：每日 PROM
- 尿路感染：定時膀胱管理

## IVDD 術後復健三階段

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

## 水療

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

## DM 犬復健

- 復健為 DM 犬最重要的介入手段
- 每日 PROM + 站立訓練 + 水療
- 維持步行能力時間延長至未復健犬的 2-3 倍
- 後肢癱瘓後使用輪椅維持活動力與生活品質`,
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
  ],
  is_current: true,
  created_at: now,
};

/** 以 Map 方式匯出，方便用 nodeId 快速查找 */
export const NEURO_CONTENTS = new Map<string, NodeContent>([
  ['NEURO-L0-001', contentNeuroOverview],
  ['NEURO-L1-001', contentNeuroanatomy],
  ['NEURO-L1-002', contentNeurophysiology],
  ['NEURO-L1-003', contentNeuropharmacology],
  ['NEURO-L2-001', contentNeurodegeneration],
  ['NEURO-L2-002', contentSpinalCompression],
  ['NEURO-L2-003', contentEncephalitisMechanism],
  ['NEURO-L2-004', contentPeripheralNeuropathy],
  ['NEURO-L3-001', contentEpilepsy],
  ['NEURO-L3-002', contentIVDD],
  ['NEURO-L3-003', contentGME],
  ['NEURO-L3-004', contentVestibular],
  ['NEURO-L3-005', contentPolyradiculoneuritis],
  ['NEURO-L3-006', contentMG],
  ['NEURO-L3-007', contentDM],
  ['NEURO-L4-001', contentNeuroExam],
  ['NEURO-L4-002', contentCSFAnalysis],
  ['NEURO-L4-003', contentNeuroImaging],
  ['NEURO-L4-004', contentLocalization],
  ['NEURO-L5-001', contentAEDTherapy],
  ['NEURO-L5-002', contentSpinalSurgery],
  ['NEURO-L5-003', contentNeuroRehab],
]);
