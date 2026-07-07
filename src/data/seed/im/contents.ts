import type { NodeContent } from '@/types/knowledge';

const now = '2026-02-15T00:00:00Z';

/** CKD（慢性腎病）， 疾病型 */
const contentCKD: NodeContent = {
  id: 'CONTENT-IM-L3-004',
  node_id: 'IM-L3-004',
  version: 2,
  summary: '慢性腎病（CKD）是犬貓最常見的腎臟疾病，年紀越大盛行率越高。IRIS（International Renal Interest Society）把 CKD 切成四期，靠血清肌酐（Creatinine）跟 SDMA 來分。早一點抓到、好好管理，存活時間可以拉長很多。',
  learning_objectives: [
    '運用 IRIS 分期系統正確分類 CKD 病患',
    '解釋 CKD 的病理生理機轉（腎元減少、腎小管間質纖維化）',
    '列出 CKD 各分期的治療建議與飲食管理',
    '說明 SDMA 相較於肌酐在早期偵測的優勢',
    '制定 CKD 病患的長期監測計畫',
  ],
  key_points: [
    'IRIS 分期：Stage 1（Cre < 1.4 犬 / <1.6 貓）、Stage 2（1.4-2.8 / 1.6-2.8）、Stage 3（2.9-5.0）、Stage 4（> 5.0）',
    'SDMA 早期偵測：IRIS 2023 正式分期切點為 ≥18 μg/dL（Stage 1）；IDEXX 廠商「早期預警」值 >14 μg/dL 非 IRIS 官方分期標準——教學時需明確區分，避免過早分期（比 Cre 平均可早 9-17 個月發現功能下降，依研究而異）',
    '亞分期別忘了蛋白尿（UPC）跟血壓',
    '飲食管理走腎臟處方飲食：限磷、適量蛋白、加 omega-3',
    '藥物上 Benazepril 或 Telmisartan 抗蛋白尿、磷結合劑、紅血球生成素都會用到',
    'IRIS 2023 治療更新：抗蛋白尿首選 ARB（telmisartan）優先於 ACEI、目標改為 UPC 下降 50%、蛋白流失性腎病抗血栓首選 clopidogrel（待 DVM 覆核）',
    '15 歲以上的貓，CKD 盛行率超過三成',
  ],
  body: `# 慢性腎病 (Chronic Kidney Disease, CKD)

## 一、病理機制 (Pathophysiology)

CKD 的核心問題就兩個：腎元（nephron）回不來，加上腎小管間質一路纖維化下去。

整個故事是這樣跑的。一開始的傷害讓腎元減少，剩下的腎元被迫扛起來、變肥大、超濾過（hyperfiltration），結果腎絲球灌注壓升高。再加上 RAAS 活化（Angiotensin II 推 TGF-β），加上蛋白尿本身的毒性（濾出來的蛋白會觸發 NF-κB、跑出 MCP-1 和 TNF-α，引起間質炎症），肌纖維母細胞沉積一堆細胞外基質，腎小管萎縮，又一波腎元跟著掛。一旦進入這個迴圈，就停不下來。

[圖片:CKD progression cycle，nephron loss → hyperfiltration → RAAS → fibrosis → further loss]

犬跟貓在這邊長得不太一樣。貓最常見的是慢性腎小管間質性腎炎，病因多半找不到。犬則比較常看到腎絲球腎炎，或遺傳性腎病（像 PKD、類澱粉沉著症）。

磷代謝這條軸線（CKD-MBD）也很要命。腎元少了，磷排不出去，高磷血症跟著來，FGF-23 跟 PTH 一起升高，繼發性腎性副甲狀腺亢進就跑出來了，骨頭礦化異常、軟組織也開始鈣化。

## 二、臨床表現與診斷 (Clinical Signs & Diagnosis)

| 臨床表現 | 犬 | 貓 | 出現時期 |
|---------|----|----|---------|
| 多渴多尿 (PU/PD) | 常見 | 常見 | 早期 Stage 1-2 |
| 體重減輕/肌肉流失 | 常見 | 常見 | 進行性 |
| 食慾下降 | Stage 3+ | Stage 2+ | 進行性 |
| 嘔吐 | 常見 | 較少 | Stage 3-4 |
| 口腔潰瘍/口臭 | Stage 4 | Stage 4 | 晚期 |
| 非再生性貧血 | Stage 3-4 | Stage 3-4 | 晚期 |
| 高血壓視網膜病變 | 少見 | 常見 | 任何分期 |

### IRIS 分期系統 (2023 更新)

| Stage | 犬 Creatinine | 貓 Creatinine | SDMA | 臨床意義 |
|-------|-------------|-------------|------|---------|
| 1 | < 1.4 mg/dL | < 1.6 mg/dL | < 18 μg/dL | 非氮血症期 |
| 2 | 1.4-2.8 | 1.6-2.8 | 18-35 | 輕度氮血症 |
| 3 | 2.9-5.0 | 2.9-5.0 | 36-54 | 中度氮血症 |
| 4 | > 5.0 | > 5.0 | > 54 | 重度氮血症 |

亞分期：蛋白尿 UPC（< 0.2 非蛋白尿 / 0.2-0.5 犬 0.2-0.4 貓 邊緣 / > 0.5 犬 > 0.4 貓 蛋白尿）；血壓（< 140 正常 / 140-159 前期 / 160-179 高血壓 / ≥ 180 嚴重）

| 檢測 | 敏感度 | 特異度 | 備註 |
|------|--------|--------|------|
| SDMA | 高（腎元喪失約 25-40% 即偵測） | 高 | 不受肌肉量影響 |
| Creatinine | 低（需 >75% 喪失） | 中 | 受肌肉量、脫水影響 |
| USG | 中 | 中 | 須排除其他 PU/PD 原因 |

## 三、治療策略 (Treatment)

| 分期 | 治療措施 | 藥物與劑量 |
|------|---------|-----------|
| Stage 1-2 | 腎臟處方飲食 + 充足飲水 + 抗蛋白尿 | [藥物:Benazepril] 0.5 mg/kg PO SID 或 [藥物:Telmisartan] 1 mg/kg PO SID |
| Stage 2-3 | 上述 + 磷結合劑 | [藥物:Aluminum hydroxide] 30-90 mg/kg/day 分餐混食 |
| Stage 3-4 | 上述 + 止吐 + 食慾促進 + SQ fluids | [藥物:Maropitant] 1 mg/kg SC SID；[藥物:Mirtazapine] 1.88 mg/cat q48h |
| Stage 3-4 貧血 | 紅血球生成素 | [藥物:Darbepoetin] 1 μg/kg SC q1wk |

證據等級這邊講清楚：腎臟處方飲食延長存活是 Level I，RCT 證實能拉長 2-3 倍。Benazepril 跟 Telmisartan 抗蛋白尿是 Level I。磷結合劑 Level II。

飲食的重點，限磷不能省（目標血磷 Stage 1-2 <4.5、Stage 3 <5.0、Stage 4 <6.0 mg/dL）。蛋白質適量就好，貓尤其不要限太兇。Omega-3（EPA/DHA）有腎保護的效果，貓也建議濕食。

### IRIS 2023 治療更新與近期實證（待 DVM 覆核）

| 主題 | IRIS 2023 / 近期實證 | 證據 |
|------|---------------------|------|
| 蛋白尿首選 | 犬貓皆把 **ARB（telmisartan）排在 ACEI 之前**作為抗蛋白尿首選 | 指引 + RCT（貓 Sent 2015：telmisartan 降蛋白尿優於 benazepril，惟未證實延長存活）|
| 蛋白尿治療目標 | 由「UPC < 0.5」改為更務實的「**UPC 下降 50%**」 | IRIS 2023 |
| 抗血栓（蛋白流失性腎病高凝風險）| **Clopidogrel 為首選**；2023 取消「白蛋白 < 2.0 g/dL」作為啟動抗血栓的硬性條件 | IRIS 2023 |
| 限磷時機 | 對血磷已落在該分期目標內的貓，可用 **FGF23** 進一步判斷是否仍需限磷；FGF23 升高早於血磷／PTH，亦為不良預後標記（犬即使血磷正常，FGF23 升高也預測未來高磷與惡化）| 指引 + 預後研究 |
| 食慾／體重（貓）| **Capromorelin（Elura）** 2025 RCT：CKD 併非預期體重減輕貓 55 天增重 +5.18%（安慰劑 −1.65%，P<0.0001）。禁用於肢端肥大症，糖尿病貓謹慎（會抑制葡萄糖刺激之胰島素分泌）| RCT（2025）|
| 移除項目 | IRIS 2023 移除 Stage 3-4 calcitriol 之例行建議 | 指引 |

> 以上為文獻更新；劑量／禁忌與個案分期請由主治獸醫師確認。Beraprost（區域性、回溯性證據）與 rapamycin（試驗中、尚無發表結果）不列入常規建議。

## 四、併發症與監控 (Complications & Monitoring)

| 併發症 | 機轉 | 監測 | 處理 |
|--------|------|------|------|
| 高血壓 | RAAS 活化 | 收縮壓 | [藥物:Amlodipine] 0.125-0.25 mg/kg |
| 高磷血症 | 腎臟磷排泄↓ | 血磷 | 限磷飲食 + 磷結合劑 |
| 代謝性酸中毒 | 酸排泄↓ | TCO2 | Sodium bicarbonate 口服 |
| 非再生性貧血 | EPO↓ | PCV | [藥物:Darbepoetin] |
| 低鉀血症（貓常見） | 腎臟鉀流失↑ | 血鉀 | K-gluconate 口服 |

監測頻率：穩定 Stage 1-2 q3-6月；Stage 3 q2-3月；Stage 4/不穩定 q2-4週。每次追蹤 Cre/SDMA/BUN、電解質/磷、UPC、血壓、體重/BCS/MCS。

## 五、預後與預後因子 (Prognosis)

| IRIS 分期 | 犬中位存活 | 貓中位存活 |
|----------|----------|----------|
| Stage 1-2 | > 400 天 | > 600 天 |
| Stage 3 | 110-200 天 | 150-300 天 |
| Stage 4 | 14-80 天 | 35-100 天 |

負面預後因子要列幾個：UPC > 1.0、高磷血症壓不下來、嚴重貧血、體重一直掉、高血壓造成靶器官損傷。

跟飼主談的話，我會這樣講：CKD 沒辦法逆轉，但可以管理一輩子。飲食管理是目前證據最硬的延壽手段。最後要不要繼續治療，看生活品質。

## 六、人醫借鑑 (Translational Insights)

- IRIS 分期借鑑人醫 KDIGO 分期框架
- 人醫 SGLT2 抑制劑 (dapagliflozin) 已證實延緩 CKD，貓的研究進行中
- 心腎症候群 (cardiorenal syndrome) 概念從人醫移植至獸醫，CKD 與心臟病互為加速因子
- 人醫重視 eGFR 序列追蹤（斜率 slope），獸醫應用 SDMA/Cre 趨勢追蹤同理

## 七、臨床爭議與知識空缺 (Controversies & Knowledge Gaps)

| 爭議主題 | 目前立場 | 證據等級 | 研究方向 |
|---------|---------|---------|---------|
| Calcitriol 補充 | 理論上可降低 PTH，RCT 不足 | Level III | 需貓大型 RCT |
| 幹細胞治療 | 初步有改善跡象 | Level IV | 劑量、途徑、安全性均需釐清 |
| SGLT2i 在貓 | 人醫有效，獸醫尚無定論 | Level V | 貓藥動學與安全性試驗中 |
| 磷早期介入 | IRIS 建議 Stage 2 開始限磷 | Level II | Stage 1 是否即應介入？ |
| 最佳蛋白攝取 | 適度限制而非嚴格限制 | Level II-III | 貓最適蛋白需求仍有爭議 |`,
  clinical_pearl: 'SDMA 比 Creatinine 早一截。Creatinine 要等到腎功能掉超過 75% 才會明顯升高，但 SDMA 在喪失 25-40% 的時候就抓得到。臨床上看老年貓、消瘦犬這種肌肉量低的，SDMA 特別重要（這個我講過很多次），因為他們的 Creatinine 算出來都偏低，會騙人。',
  common_mistakes: [
    '看到 Creatinine 正常就放心，忘了 SDMA 跟 USG 還要看',
    'IRIS 亞分期沒做完整，蛋白尿跟血壓也要算進去',
    'CKD 貓的蛋白質限太兇，最後變肌肉消耗',
    '脫水狀態下就直接 IRIS 分期，應該先把水補回來再分',
  ],
  disease_data: {
    signalment: '好發於老年犬貓。貓盛行率隨年齡急劇增加（> 15 歲超過 30%）。犬中可見於任何品種，但 Cavalier、Cocker Spaniel 等有遺傳性腎病傾向。',
    etiology: '多數為特發性（idiopathic），尤其在貓。已知病因包括：遺傳性腎病（多囊腎 PKD）、腎盂腎炎、腎結石、腎毒性藥物（NSAIDs、aminoglycosides）、腎臟淋巴瘤、缺血性損傷等。',
    pathogenesis: '一開始的損傷讓腎元減少，剩下的腎元被迫代償性肥大、扛起更多過濾量，結果腎絲球高灌注高壓力，又繼續壞下一波，最後走到腎小管間質纖維化，腎功能就一路掉下去。RAAS 一旦活化，整個惡性循環會跑得更快。',
    clinical_signs: [
      { sign: '多渴多尿 (PU/PD)', category: 'primary', description: '腎臟濃縮功能喪失，USG < 1.030 犬 / < 1.035 貓' },
      { sign: '體重減輕', category: 'primary', description: '慢性蛋白質消耗與食慾下降' },
      { sign: '食慾下降', category: 'primary', description: 'Stage 3-4 常見，尿毒素引起噁心' },
      { sign: '嘔吐', category: 'secondary', description: '尿毒症性胃炎' },
      { sign: '口腔潰瘍', category: 'secondary', description: 'Stage 4 尿毒症，口臭明顯' },
      { sign: '貧血', category: 'secondary', description: '紅血球生成素不足，非再生性貧血' },
    ],
    staging: { system: 'IRIS (International Renal Interest Society) 2023', stages: ['Stage 1：無氮血症（Cre 正常或 SDMA 輕度升高）', 'Stage 2：輕度氮血症', 'Stage 3：中度氮血症', 'Stage 4：重度氮血症/尿毒症'] },
    differential_diagnosis: [
      { condition: '急性腎損傷 (AKI)', key_differentiator: '突發性、腎臟大小正常或增大、可能有明確誘因（毒物、缺血）' },
      { condition: '腎前性氮血症', key_differentiator: '脫水或低血壓所致，補液後氮血症改善' },
      { condition: '腎後性阻塞', key_differentiator: '突發無尿或少尿，超音波可見腎盂積水' },
      { condition: '甲狀腺機能亢進（貓）', key_differentiator: '甲亢可掩蓋 CKD（增加 GFR），治療甲亢後 Cre 可能上升' },
    ],
    diagnostic_workup: '1. 基礎血檢（BUN/Cre/SDMA/電解質/磷）→ 2. 尿液分析（USG/UPC/沉渣）→ 3. 血壓測量 → 4. 腹腔超音波（腎臟大小/結構）→ 5. 必要時尿液培養 → 6. IRIS 分期與亞分期',
    treatment_protocol: 'IRIS Stage 1-2 的話，飲食管理加飲水量加上抗蛋白尿（UPC > 0.5 才開）。Stage 3-4 再疊上磷結合劑、止吐、皮下輸液、貧血處理、補鉀。不管哪一期，3-6 個月都要回診追一次。',
    prognosis: 'Stage 1-2：中位存活犬 > 400 天、貓 > 600 天（管理得好的情況）。Stage 3：中位存活犬 110-200 天、貓 150-300 天。Stage 4：中位存活犬 14-80 天、貓 35-100 天。早一點抓到、配合飲食管理，存活時間可以拉長不少。',
    monitoring: '每 3-6 個月追蹤 Cre/SDMA/BUN、電解質、磷、UPC、血壓、體重、肌肉量評分。Stage 3-4 要更密，1-3 個月一次。補液量會跟著體重跟食慾調，要留意。',
    owner_communication: 'CKD 不會好，但可以管理一輩子。飲食管理是最重要的事情。回診定期追蹤，我們才知道病程跑多快。在家請記錄一下喝水量跟尿量。狗狗或貓貓還願不願意吃、玩、互動，這些生活品質的訊號是後面決定要怎麼治療的關鍵。',
  },
  diagnostic_data: null,
  procedure_data: null,
  visual_placeholders: [
    { position: 'IRIS 分期表後', type: 'flowchart', description: 'CKD 分期與治療決策流程圖' },
  ],
  interactive_placeholders: [
    { position: 'IRIS 分期段落', type: 'interactive_staging', description: '輸入 Cre/SDMA/UPC/血壓自動判定分期' },
  ],
  drug_api_links: ['Benazepril', 'Telmisartan', 'Aluminum hydroxide', 'Maropitant', 'Darbepoetin'],
  references: [
    { type: 'guideline', citation: 'IRIS (International Renal Interest Society). IRIS Staging of CKD & Treatment Recommendations for Dogs and Cats (Modified 2023). Available at: http://www.iris-kidney.com/', relevance: 'CKD 分期與治療指引標準；2023 變動：ARB 優於 ACEI、UPC 目標改為下降 50%、clopidogrel 首選抗血栓、FGF23 指引限磷、移除 Stage 3-4 calcitriol 例行建議' },
    { type: 'journal', citation: 'Wofford JA, Milliken MacKinnon A, Heinen E. "Capromorelin promotes weight gain in cats with unintended weight loss: a randomized, masked, placebo-controlled clinical trial." J Feline Med Surg. 2025;27(11):1098612X251379924. doi:10.1177/1098612X251379924.', relevance: '2025 RCT：capromorelin（Elura）在 CKD 貓顯著增重（待 DVM 覆核；肢端肥大症禁用、糖尿病謹慎）' },
    { type: 'journal', citation: 'Sent U, Gössl R, Elliott J, Syme HM, Zimmering T. "Comparison of Efficacy of Long-term Oral Treatment with Telmisartan and Benazepril in Cats with Chronic Kidney Disease." J Vet Intern Med. 2015;29(6):1479-1487. doi:10.1111/jvim.13639.', relevance: '定義性 RCT：telmisartan 降蛋白尿不劣於且優於 benazepril，惟未證實延長存活' },
    { type: 'journal', citation: 'Miyakawa H et al. "Association between serum FGF-23 concentration and development of hyperphosphatemia in normophosphatemic dogs with chronic kidney disease." J Vet Intern Med. 2021;35(5):2296-2305. doi:10.1111/jvim.16237.', relevance: '犬即使血磷正常，FGF23 升高即預測未來高磷與惡化，支持提前限磷與 FGF23 預後判讀' },
    { type: 'journal', citation: 'Polzin DJ. "Chronic Kidney Disease in Small Animals." Vet Clin North Am Small Anim Pract. 2011;41(1):15-30.', relevance: 'CKD 管理綜合回顧' },
    { type: 'guideline', citation: 'Lees GE et al. "Assessment and Management of Proteinuria in Dogs and Cats: 2004 ACVIM Forum Consensus Statement." J Vet Intern Med. 2005;19(3):377-385.', relevance: '蛋白尿評估與管理共識' },
    { type: 'textbook', citation: 'Ettinger SJ, Feldman EC. Textbook of Veterinary Internal Medicine, 8th ed. Elsevier, 2017.', relevance: 'CKD 基礎教材' },
  ],
  is_current: true,
  created_at: now,
};

/** 壁蝨媒介疾病：艾利希體與焦蟲，疾病型 */
const contentTickBorne: NodeContent = {
  id: 'CONTENT-IM-L3-010',
  node_id: 'IM-L3-010',
  version: 2,
  summary: '台灣亞熱帶氣候裡，壁蝨傳染的病常見到爆。其中艾利希體症（Ehrlichia canis）跟焦蟲症（Babesia canis/gibsoni）這兩個最常碰到，會打血小板、做貧血，嚴重的會多重器官衰竭。',
  learning_objectives: [
    '描述犬艾利希體症的三個臨床分期（急性、亞臨床、慢性）',
    '區分大焦蟲（B. canis）與小焦蟲（B. gibsoni）的臨床差異',
    '正確判讀壁蝨媒介疾病的血液學異常',
    '制定壁蝨媒介疾病的治療方案',
    '說明台灣壁蝨媒介疾病的流行病學特徵',
  ],
  key_points: [
    '台灣主要壁蝨：棕色犬壁蝨（Rhipicephalus sanguineus）',
    'E. canis 三期：急性（1-3 週，發燒血小板低）→ 亞臨床（數月至數年）→ 慢性（全血球減少、骨髓受抑）',
    'B. gibsoni 在台灣較 B. canis 常見，可經鬥犬咬傷傳播',
    'Doxycycline 28 天為 E. canis 標準療法',
    'Imidocarb dipropionate 為焦蟲症首選治療',
    'SNAP 4Dx Plus 快篩可同時偵測 Ehrlichia 和 Anaplasma 抗體',
  ],
  body: `# 壁蝨媒介疾病：艾利希體症與焦蟲症 (Tick-Borne Diseases)

## 一、病理機制 (Pathophysiology)

### Ehrlichia canis

整個機轉跑起來的時候是這樣：壁蝨叮咬→E. canis 經唾液注入→感染單核球/巨噬細胞→形成 morulae（桑椹體）→複製並散播至脾臟、肝臟、骨髓、淋巴結→免疫複合體形成→血小板消耗性減少（急性期）→骨髓漿細胞增生→高球蛋白血症→慢性期骨髓發育不全（hypoplasia）→全血球減少

免疫逃逸：E. canis 可在巨噬細胞內持續存活數月至數年（亞臨床期），透過抑制 phagosome-lysosome 融合逃避宿主免疫。

### Babesia spp.

整個機轉跑起來的時候是這樣：壁蝨叮咬→sporozoites 侵入紅血球→紅血球內無性生殖→紅血球裂解（直接溶血）→釋放 merozoites 感染更多紅血球→同時觸發免疫介導性紅血球破壞（間接溶血，IMHA 樣機轉）→嚴重者可誘發 SIRS、DIC、acute kidney injury

[圖片:Ehrlichia life cycle in monocyte and Babesia life cycle in RBC comparison diagram]

B. gibsoni vs B. canis：B. gibsoni 體型更小、更難清除、可經直接血液接觸（咬傷）傳播，在台灣為主要型別。

## 二、臨床表現與診斷 (Clinical Signs & Diagnosis)

### Ehrlichia canis 臨床分期

| 分期 | 時間 | 主要表現 | 血液學 |
|------|------|---------|--------|
| 急性期 | 感染後 1-3 週 | 發燒 40-41°C、鼻出血、淋巴結腫大 | 血小板↓、輕度貧血 |
| 亞臨床期 | 數月至數年 | 臨床無症狀 | 血小板持續偏低、高球蛋白 |
| 慢性期 | 晚期 | 消瘦、出血、感染 | 全血球減少、骨髓抑制 |

### Babesiosis 表現

| 特徵 | B. canis | B. gibsoni |
|------|---------|-----------|
| 蟲體大小 | 大（成對梨形） | 小（單個環形） |
| 貧血類型 | 再生性溶血 | 再生性溶血 |
| 嚴重度 | 中-重度 | 輕-中度（但慢性） |
| 傳播 | 壁蝨 | 壁蝨 + 咬傷（鬥犬） |

### 診斷工具

| 工具 | 敏感度 | 特異度 | 最佳時機 |
|------|--------|--------|---------|
| SNAP 4Dx Plus | 高（亞臨床/慢性期） | 高 | 感染 2-3 週後 |
| PCR | 極高 | 極高 | 急性期（抗體尚未產生時） |
| 血液抹片 morulae | 低（~5%） | 高 | 急性期 |
| IFA 效價 | 高 | 中 | 配對血清確認 |

## 三、治療策略 (Treatment)

| 疾病 | 首選藥物 | 劑量 | 療程 | 證據等級 |
|------|---------|------|------|---------|
| Ehrlichiosis | [藥物:Doxycycline] | 5-10 mg/kg PO BID | 28 天 | Level I |
| B. canis | [藥物:Imidocarb dipropionate] | 6.6 mg/kg IM | 2 doses（間隔 2 週） | Level II |
| B. gibsoni | [藥物:Atovaquone] + [藥物:Azithromycin] | 13.5 mg/kg TID + 10 mg/kg SID | 10 天 | Level II |

支持療法：嚴重貧血需輸血（PCV < 15%）；SIRS/DIC 需加護監護；免疫介導性併發症（IMHA/ITP）短期 [藥物:Prednisolone]。

壁蝨預防：全年持續使用壁蝨預防藥物（[藥物:Fluralaner] Bravecto 或 [藥物:Afoxolaner] NexGard）。

## 四、併發症與監控 (Complications & Monitoring)

| 併發症 | 病原 | 機轉 | 處理 |
|--------|------|------|------|
| 免疫介導性血小板減少 (ITP) | Ehrlichia | 免疫複合體 | 短期類固醇 |
| 免疫複合體腎絲球腎炎 | Ehrlichia 慢性 | IC 沉積 | 抗蛋白尿治療 |
| DIC | Babesia 重症 | SIRS 觸發 | FFP + heparin |
| 繼發性 IMHA | Babesia | 紅血球表面抗原改變 | 輸血 + 免疫抑制 |

監測時程：治療中每 1-2 週 CBC；治療結束後 3 個月 PCR 確認清除（Ehrlichia）；Babesia 治療後 1-3 個月 PCR；長期追蹤血小板與 PCV。

## 五、預後與預後因子 (Prognosis)

| 情境 | 預後 | 備註 |
|------|------|------|
| Ehrlichia 急性/亞臨床期 | 良好 | Doxycycline 反應佳 |
| Ehrlichia 慢性期骨髓抑制 | 謹慎至不良 | 全血球減少恢復慢 |
| B. canis 治療後 | 良好 | Imidocarb 清除率高 |
| B. gibsoni | 謹慎 | 難以完全清除，帶原常見 |

飼主溝通：壁蝨預防是最重要措施。B. gibsoni 帶原犬不應捐血、不應與其他犬隻激烈互動（咬傷傳播）。

## 六、人醫借鑑 (Translational Insights)

- 人類壁蝨媒介疾病（Lyme disease、HME/HGA）的診斷策略（兩步驟法：ELISA→Western blot）可借鑑用於獸醫
- 人醫 Doxycycline 預防性投藥（壁蝨叮咬後 72 小時內單劑）的概念在獸醫尚無共識
- One Health 觀點：犬的壁蝨暴露為人類暴露的哨兵指標

## 七、臨床爭議與知識空缺 (Controversies & Knowledge Gaps)

| 爭議主題 | 目前立場 | 證據等級 | 研究方向 |
|---------|---------|---------|---------|
| 亞臨床 Ehrlichia 是否需治療 | 多數建議治療以防慢性化 | Level III | 自然清除率？不治療長期後果？ |
| B. gibsoni 是否可完全清除 | 現有藥物無法保證清除 | Level II | 新藥組合研究中 |
| SNAP 陽性但臨床無症狀 | 追蹤或治療均可 | Level IV | 需前瞻性比較研究 |
| Doxycycline 28 天 vs 更長療程 | 28 天為標準 | Level II | 慢性期是否需延長？ |
| 壁蝨疫苗 | 尚無商品化疫苗 | N/A | 研發中 |

## 八、近期實證更新 (Recent Evidence Updates)

| 主題 | 實證更新 | 臨床意涵 | 來源 |
|------|---------|---------|------|
| CME 治療回顧 | Mylonakis 等 2019 系統性回顧重申 doxycycline（約 28 天）仍為犬單核球艾利希體症（CME）的一線治療；最佳療程長度與「如何定義微生物學治癒」尚缺前瞻性對照試驗實證。 | doxycycline 維持一線地位；勿因血象快速回升即提早停藥。 | Mylonakis 2019 |
| B. gibsoni 抗藥性 | Sakuma 等 2009 記錄 atovaquone + azithromycin 治療後出現帶 cytochrome b 基因突變（如 M121I）的抗藥性 B. gibsoni 變異株；此組合無法穩定達成寄生蟲學清除，帶原可能持續。 | B. gibsoni 難以「根除」；治療後務必 PCR 追蹤，帶原犬禁止捐血、避免咬鬥傳播。 | Sakuma 2009 |
| 焦蟲分子流行病學 | Solano-Gallego & Baneth 2011 回顧指出小型焦蟲（B. gibsoni、B. conradae、B. vulpes/B. microti-like）構成獨立於大型焦蟲的寄生蟲學-臨床光譜，須分子鑑型而非僅靠形態。 | 形態學（梨形大小）不足以定種；台灣以 B. gibsoni 為主，應以 PCR/定序確認。 | Solano-Gallego 2011 |
| 預防典範轉移 | 異惡唑啉類（isoxazoline，如 fluralaner、afoxolaner）全年投藥能在壁蝨附著早期即快速殺蝨，降低 Ehrlichia／Babesia 傳播風險；惟快速傳播病原（E. canis 經 R. sanguineus 附著後數小時即可傳播）未必能完全阻斷，殺蝨藥不等於零風險。 | 壁蝨預防由「驅避」轉向「快速殺蝨阻斷傳播」；台灣亞熱帶須全年不間斷（見 [節點:DERM-L5-002] 抗寄生蟲）。 | （見 DERM-L5-002）|`,
  clinical_pearl: '在台灣，任何犬隻出現不明原因的血小板減少，壁蝨媒介疾病應列為首要鑑別診斷。即使沒有明顯壁蝨暴露史，亞臨床期的 E. canis 可以持續多年才被發現。同時感染（Ehrlichia + Babesia 合併感染）在台灣並不少見。',
  common_mistakes: [
    'SNAP 快篩陰性就排除 Ehrlichia（急性期抗體可能尚未產生，需搭配 PCR）',
    '未完成 28 天 Doxycycline 療程就停藥',
    '忽略 B. gibsoni 可經打鬥傳播而非僅經壁蝨',
    '治療焦蟲後未追蹤 PCR 確認清除',
  ],
  disease_data: {
    signalment: '任何年齡犬隻均可感染。戶外犬、流浪犬、未定期除蝨犬為高風險群。台灣南部與東部盛行率較高。B. gibsoni 在比特犬等鬥犬品種中特別常見（咬傷傳播）。',
    etiology: 'Ehrlichia canis 由棕色犬壁蝨（Rhipicephalus sanguineus）傳播。Babesia canis 經壁蝨傳播，B. gibsoni 可經壁蝨或直接血液接觸（鬥犬咬傷、輸血）傳播。',
    pathogenesis: 'E. canis：感染單核球 → 免疫複合體沉積 → 血小板消耗/破壞 → 骨髓抑制（慢性期）。Babesia：感染紅血球 → 紅血球內增殖 → 溶血 → 免疫介導性紅血球破壞加劇 → 貧血、黃疸。',
    clinical_signs: [
      { sign: '發燒', category: 'primary', description: '急性期常見，40-41°C' },
      { sign: '血小板減少/出血', category: 'primary', description: 'Ehrlichia 最敏感指標，鼻出血、瘀斑' },
      { sign: '貧血', category: 'primary', description: 'Babesia 為溶血性（再生性），Ehrlichia 慢性期為非再生性' },
      { sign: '淋巴結腫大', category: 'secondary', description: 'Ehrlichia 急性期常見' },
      { sign: '脾腫大', category: 'secondary', description: 'Babesia 常見' },
    ],
    staging: null,
    differential_diagnosis: [
      { condition: 'IMHA', key_differentiator: '球形紅血球、Coombs 陽性、無壁蝨抗體' },
      { condition: 'ITP', key_differentiator: '單純血小板減少，無壁蝨抗體' },
      { condition: 'DIC', key_differentiator: '凝血異常（PT/aPTT 延長）、纖維蛋白降解產物升高' },
      { condition: '骨髓腫瘤', key_differentiator: '全血球減少但骨髓穿刺可見異常細胞' },
    ],
    diagnostic_workup: '1. CBC（血小板、貧血評估）→ 2. 血液抹片（尋找蟲體/morulae）→ 3. SNAP 4Dx Plus 快篩 → 4. PCR（確認與定量）→ 5. 生化（腎功能、肝功能）→ 6. 尿液分析 → 7. 必要時骨髓穿刺（慢性期）',
    treatment_protocol: 'Ehrlichia：Doxycycline 5 mg/kg PO BID × 28 天。Babesia canis：Imidocarb dipropionate 6.6 mg/kg IM × 2 doses（間隔 2 週）。B. gibsoni：Atovaquone 13.5 mg/kg PO TID + Azithromycin 10 mg/kg PO SID × 10 天。支持療法：輸血、輸液、止吐。',
    prognosis: 'Ehrlichia 急性/亞臨床期：經治療預後良好。慢性期合併骨髓發育不全：預後謹慎至不良。Babesia canis：治療後預後通常良好。B. gibsoni：難以完全清除，可能需要長期追蹤。',
    monitoring: 'Ehrlichia：治療結束後 3 個月追蹤 PCR 確認清除。Babesia：治療後 1-3 個月追蹤 PCR。長期追蹤血小板和 PCV。B. gibsoni 帶原犬不應捐血。',
    owner_communication: '預防壁蝨是這整件事最該下功夫的地方。台灣一年到頭蚊蟲都活躍，壁蝨預防藥（像 Bravecto、NexGard）要整年吃滿，不要冬天就停。儘量不要讓狗狗去摸流浪狗、不要進到野生壁蝨多的地方。治療完的狗也不能放著，要定期回診追蹤。',
  },
  diagnostic_data: null,
  procedure_data: null,
  visual_placeholders: [
    { position: 'Ehrlichia 分期表後', type: 'flowchart', description: '壁蝨媒介疾病診斷流程圖' },
  ],
  interactive_placeholders: [],
  drug_api_links: ['Doxycycline', 'Imidocarb', 'Atovaquone', 'Azithromycin'],
  references: [
    { type: 'guideline', citation: 'Neer TM et al. "Consensus Statement on Ehrlichial Disease of Small Animals from the Infectious Disease Study Group of the ACVIM." J Vet Intern Med. 2002;16(3):309-315. doi:10.1111/j.1939-1676.2002.tb02374.x', relevance: 'Ehrlichia 診斷與治療共識' },
    { type: 'journal', citation: 'Solano-Gallego L, Baneth G. "Babesiosis in dogs and cats—expanding parasitological and clinical spectra." Vet Parasitol. 2011;181(1):48-60. doi:10.1016/j.vetpar.2011.04.023', relevance: '焦蟲症綜合回顧' },
    { type: 'journal', citation: 'Mylonakis ME, Harrus S, Breitschwerdt EB. "An update on the treatment of canine monocytic ehrlichiosis (Ehrlichia canis)." Vet J. 2019;246:45-53. doi:10.1016/j.tvjl.2019.01.015', relevance: 'CME 治療近期回顧：doxycycline 維持一線、療程實證空缺' },
    { type: 'journal', citation: 'Sakuma M, Setoguchi A, Endo Y. "Possible Emergence of Drug-Resistant Variants of Babesia gibsoni in Clinical Cases Treated with Atovaquone and Azithromycin." J Vet Intern Med. 2009;23(3):493-498. doi:10.1111/j.1939-1676.2009.0300.x', relevance: 'B. gibsoni atovaquone+azithromycin 抗藥性實證' },
    { type: 'textbook', citation: 'Greene CE. Infectious Diseases of the Dog and Cat, 4th ed. Elsevier, 2012.', relevance: '壁蝨媒介疾病教科書' },
  ],
  is_current: true,
  created_at: now,
};

/** 尿液分析與腎功能評估，診斷型 */
const contentUrinalysis: NodeContent = {
  id: 'CONTENT-IM-L4-002',
  node_id: 'IM-L4-002',
  version: 2,
  summary: '尿液分析是評估腎臟和下泌尿道的入門檢查。三件事要看：物理性質（外觀、比重）、化學性質（dipstick）、沉渣鏡檢。其中尿比重（USG）是看腎臟還濃不濃縮得了尿，最重要的一個指標。判讀腎功能時，USG、UPC 要和血液腎指標（creatinine、SDMA）一起讀——SDMA 能比 creatinine 更早抓到腎功能下降。',
  learning_objectives: [
    '正確執行與判讀完整尿液分析（物理/化學/沉渣）',
    '運用 USG 評估腎臟濃縮功能',
    '解釋 UPC 在蛋白尿分級中的角色',
    '辨識尿液沉渣中常見結晶與管型的意義',
    '整合尿液分析結果與其他腎功能指標',
  ],
  key_points: [
    'USG 正常範圍：犬 1.015-1.045，貓 1.035-1.060',
    '等張尿（USG 1.008-1.012）提示腎臟濃縮功能完全喪失',
    'UPC > 0.5（犬）/ > 0.4（貓）= 明顯蛋白尿',
    'Dipstick 蛋白尿在稀釋尿中可能偽陰性，濃縮尿中偽陽性',
    '膀胱穿刺（cystocentesis）為最佳採集方式（培養時必須）',
    'SDMA 比 creatinine 更早偵測腎功能下降（GFR 喪失約 25-40% 即升高），但非 CKD 專屬、AKI 也會升高',
  ],
  body: `# 尿液分析判讀

## 一、檢查原理與適應症 (Principles & Indications)

尿液分析適用於腎臟與下泌尿道評估、PU/PD 鑑別、蛋白尿定量、尿路感染與結石評估。常見監測情境：

| 監測指標 | 頻率 | 適用情境 |
|---------|------|---------|
| USG | 每次回診 | CKD 追蹤、PU/PD 鑑別 |
| UPC | q1-3 月 | CKD 蛋白尿亞分期 |
| 尿培養 | 依臨床需要 | 復發性 UTI、Cushing UTI |
| 沉渣 | 每次回診 | UTI 追蹤、結石評估 |

採樣方法影響判讀：膀胱穿刺 (cystocentesis) 為金標準（培養用必須穿刺）；導尿次之；自由排尿最不可靠（汙染高）。

## 二、判讀要點 (Interpretation)

### 尿液分析三部曲

1. 物理性質

| 指標 | 正常值 | 臨床意義 |
|------|--------|---------|
| 顏色 | 淡黃至深黃 | 血尿（紅/棕）、膽紅素尿（橙/深黃）、血紅素尿（紅棕） |
| 濁度 | 清澈至微混 | 渾濁提示結晶、細菌、細胞增多 |
| USG 犬 | 1.015-1.045 | <1.030 脫水時 = 濃縮功能異常 |
| USG 貓 | 1.035-1.060 | <1.035 脫水時 = 濃縮功能異常 |

USG 判讀關鍵：低張尿 (<1.008) = 完全無法濃縮（DI、psychogenic polydipsia）；等張尿 (1.008-1.012) = 腎功能嚴重受損；輕度低張 (1.012-1.029 犬/1.012-1.034 貓) = 灰色地帶

2. 化學分析（Dipstick）

| 項目 | 異常 | 常見原因 | 注意 |
|------|------|---------|------|
| pH | >7.5 | UTI (urease+)、RTA、飲食 | 放置過久 pH 升高 |
| 蛋白質 | 陽性 | 腎絲球疾病、UTI、出血 | Dipstick 假陽性常見（鹼性尿） |
| 葡萄糖 | 陽性 | DM (>180 犬/>280 貓)、Fanconi | 壓力性高血糖（貓） |
| 酮體 | 陽性 | DKA、飢餓 | Dipstick 不偵測 BHB |
| 膽紅素 | 犬微量正常 | 溶血、肝膽疾病 | 貓膽紅素尿始終異常 |
| 潛血 | 陽性 | 血尿、血紅素尿、肌紅蛋白尿 | 無法區分三者 |

3. 沉渣鏡檢

| 成分 | 正常 | 異常意義 |
|------|------|---------|
| RBC | <5/HPF | 血尿（下泌尿道/腎臟/凝血異常） |
| WBC | <5/HPF | 膿尿（UTI、腎盂腎炎） |
| 細菌 | 無 | UTI（需培養確認） |
| 圓柱體 | 偶見透明 | 顆粒/蠟樣=腎小管損傷；RBC=腎絲球出血 |
| 結晶 | 少量可正常 | Struvite/CaOx，需結合 pH、臨床判斷 |

### UPC（尿蛋白/肌酐比值）

| IRIS 蛋白尿分類 | 犬 UPC | 貓 UPC |
|----------------|--------|--------|
| 非蛋白尿 (Non-proteinuric) | < 0.2 | < 0.2 |
| 邊緣 (Borderline) | 0.2-0.5 | 0.2-0.4 |
| 蛋白尿 (Proteinuric) | > 0.5 | > 0.4 |

> 犬貓切點不同（貓閾值較低）；邊緣值應連續取樣 2-3 次再判定，勿憑單次 UPC 定論（見 §三、§六）。

## 三、常見陷阱 (Pitfalls)

- **USG 沒對照脫水狀態就判讀**：USG 偏低只有在動物同時脫水/氮血症時才等於濃縮功能異常；水分充足的健康動物本來就會排稀尿。只看數字不看臨床，會把正常當腎病。
- **單次 UPC 就替蛋白尿定論**：UPC 有明顯生物變異（見 §六），邊緣值（犬 0.2-0.5 / 貓 0.2-0.4）務必連續取樣 2-3 次再判讀，單筆落在邊緣不能直接貼「蛋白尿」標籤。
- **血尿/膿尿污染下硬解讀 UPC**：明顯血尿或發炎（膿尿、菌尿）會讓 UPC 偽性升高，反映的是出血/發炎而非腎絲球漏蛋白；應先處理或排除後再定量。
- **把 Dipstick 蛋白格當定量**：試紙蛋白只測 albumin，鹼性尿與高濃縮尿易偽陽性、稀釋尿易偽陰性，且非定量；判讀一律回到 UPC，必要時加做 SSA（磺基水楊酸沉澱）。
- **自然排尿樣本拿去培養**：自由排尿污染率高、培養偽陽性多；要培養一律膀胱穿刺（cystocentesis）並送定量培養（見 §六 ISCAID 2019）。
- **採集後拖太久才鏡檢**：放置超過 30-60 分鐘，結晶可能體外新生或溶解、管型崩解、細菌過度增生、pH 漂移；理想 30 分鐘內分析，無法及時則冷藏並註明（冷藏本身會促 struvite 體外析出）。
- **把結晶尿等同結石病**：少量 struvite/CaOx 結晶在健康動物可為正常；有無臨床意義須結合品種、pH、影像與症狀，不能見結晶就診斷尿石症。

## 四、人醫借鑒 (Translational Insights)

- 人醫 albumin-to-creatinine ratio (ACR) 為蛋白尿篩檢標準，獸醫使用 UPC 作為對應
- 人醫 urine NGAL 和 urine KIM-1 作為 AKI 早期標記，獸醫研究中
- 人醫 automated urine sediment analyzers 已取代大部分手動鏡檢，獸醫仍以手動鏡檢為主
- 人醫 24h urine protein collection 為蛋白尿金標準，獸醫以 spot UPC 替代

## 五、臨床爭議與知識空缺 (Controversies & Knowledge Gaps)

| 爭議主題 | 目前立場 | 證據等級 | 研究方向 |
|---------|---------|---------|---------|
| UPC 的生物變異 | 單次 UPC 可能波動大 | Level II | 連續取樣的最佳策略 |
| Dipstick 蛋白質 vs SSA vs UPC | UPC 最可靠 | Level I | 即時 UPC 測量儀器開發 |
| 尿液微生物培養閾值 | 穿刺 >1000 CFU/mL 有意義 | Level II | 亞臨床菌尿的處理策略 |
| 結晶尿的臨床意義 | 不等同於結石病 | Level II | 結晶→結石的風險預測 |

## 六、近期實證更新 (Recent Evidence)

[圖片:腎功能評估三軸整合判讀——USG（濃縮力）× UPC（腎絲球漏蛋白）× SDMA/creatinine（GFR）]

- **SDMA 把「驗得出腎傷害」的時間提前**：對稱二甲基精胺酸（SDMA）在 GFR 約喪失 25-40% 時即升高，比 creatinine（多需約 75% 腎元喪失才超出參考區間）更早反映腎功能下降（Nabity 2015）。IRIS 已將 SDMA 納入分期：**持續 SDMA > 14 μg/dL** 提示腎功能下降；對**肌肉量偏低、creatinine 被低估**的個案，IRIS 另建議當 SDMA ≥ 25（Stage 2）或 ≥ 45 μg/dL（Stage 3）時，視為該分期可能被低估、可採下一階的處置思維（屬低肌肉量的輔助判讀，非硬性分期切點）。
- **SDMA 不是 CKD 專屬**：SDMA 反映的是 GFR 下降，**急性腎損傷（AKI）同樣會升高**，貓 AKI 與 CKD 都可見上升（Loane 2022）；2026 年一篇系統性回顧（Scobie 等，Evidence Level I）整理犬貓 SDMA 診斷準確度，指出研究間異質性大、切點與情境相依——SDMA 須與 USG、creatinine、臨床脈絡合讀，不可單獨當 CKD 診斷。
- **UPC 要「連續取樣」而非單筆**：2025 年健康犬每週生物變異研究（Couture 等）量化了 UPC 與 USG 的週間波動，證實單次 UPC 會因生物變異而誤分類；邊緣蛋白尿應於數日到數週間連續取樣（取臨界差或平均）再定論，呼應 §五的爭議。
- **無症狀菌尿不再常規治療**：ISCAID 2019 指引（Weese 等）明確**不建議**常規以抗生素治療多數犬貓的**無症狀菌尿（subclinical bacteriuria）**；培養首選膀胱穿刺檢體；偶發（單純性）細菌性膀胱炎改採**短療程（約 3-5 天）**，扭轉過去動輒 7-14 天的舊習慣。
- **指引時效**：CKD 分期與蛋白尿亞分期以 **IRIS（2023 修訂）** 為現行依據；尿路感染診療以 **ISCAID 2019** 為現行依據。

> 臨床內容與藥物劑量需獸醫師依現行仿單與指引核對；本節點為 AI 接地生成，停於 review 狀態待 DVM 簽核。`,
  clinical_pearl: '在評估氮血症（BUN/Cre 升高）時，USG 是區分腎前性、腎性、腎後性的關鍵。如果動物脫水但 USG < 1.030（犬）或 < 1.035（貓），即使 Creatinine 只是輕度升高，也高度提示腎臟本身的問題。',
  common_mistakes: [
    'Dipstick 蛋白尿結果未搭配 USG 解讀',
    '用自然排尿樣本做尿液培養（污染率高）',
    '忽略尿液沉渣檢查而只看 dipstick',
    '採集後超過 1 小時才分析（結晶可能溶解或新生）',
  ],
  disease_data: null,
  diagnostic_data: {
    indication: ['腎臟疾病評估', '下泌尿道疾病評估', 'PU/PD 鑑別診斷', '蛋白尿定量', '尿路感染診斷', '結石類型評估'],
    contraindication: ['膀胱穿刺禁忌：嚴重血小板減少（< 30,000/μL）、膀胱腫瘤疑慮（移行上皮癌擴散風險）'],
    technique: '膀胱穿刺：超音波引導，22G 針頭，膀胱中等充盈時執行。樣本立即進行 USG 測量（折射計）、dipstick、離心沉渣鏡檢。UPC 需送檢實驗室定量。',
    normal_findings: [
      { finding: 'USG', description: '犬 1.015-1.045，貓 1.035-1.060', significance: '反映腎臟濃縮能力' },
      { finding: 'pH', description: '5.5-7.5', significance: '受飲食影響，肉食動物偏酸' },
      { finding: '沉渣', description: 'RBC < 5/HPF, WBC < 5/HPF', significance: '少量為正常（膀胱穿刺）' },
    ],
    abnormal_findings: [
      { finding: '低 USG', description: '犬 < 1.030 / 貓 < 1.035 合併脫水', significance: '腎臟濃縮功能不足，需評估 CKD' },
      { finding: '蛋白尿', description: 'UPC > 0.5（犬）/ > 0.4（貓）', significance: '腎小球損傷或腎小管異常' },
      { finding: '糖尿', description: 'Dipstick 葡萄糖陽性', significance: '糖尿病（超過腎閾）或腎小管損傷' },
      { finding: '膿尿', description: 'WBC > 5/HPF', significance: '泌尿道感染或發炎' },
    ],
    interpretation_guide: 'USG 先看濃不濃縮，dipstick 跑一輪化學篩檢，沉渣記得鏡檢，蛋白尿不確定的話再做 UPC 定量。最後把這些跟臨床表現和血檢一起讀，故事才完整。',
    pitfalls: [
      '高 USG 的濃縮尿可能有 dipstick 蛋白偽陽性',
      '冷藏樣本中 struvite 結晶可能體外形成',
      '血尿影響 UPC 測量（需排除）',
    ],
    sensitivity_specificity: 'USG 對腎臟濃縮功能異常的敏感度高。UPC 對蛋白尿的定量優於 dipstick。沉渣檢查對泌尿道感染的敏感度約 80%（需搭配培養確認）。',
    cost_benefit: '便宜得不得了，是評估腎臟跟泌尿道最基礎的工具。要看 PU/PD 怎麼來的，這個一定要做。',
  },
  procedure_data: null,
  visual_placeholders: [
    { position: 'USG 判讀表後', type: 'comparison_table', description: 'USG 與氮血症對照判讀表' },
  ],
  interactive_placeholders: [],
  drug_api_links: [],
  references: [
    { type: 'textbook', citation: 'Sink CA, Weinstein NM. Practical Veterinary Urinalysis. Wiley-Blackwell, 2012.', relevance: '尿液分析標準參考教材' },
    { type: 'journal', citation: 'Lees GE, Brown SA, Elliott J, Grauer GF, Vaden SL. "Assessment and Management of Proteinuria in Dogs and Cats: 2004 ACVIM Forum Consensus Statement (Small Animal)." J Vet Intern Med. 2005;19(3):377-385. doi:10.1111/j.1939-1676.2005.tb02713.x', relevance: '蛋白尿評估 ACVIM 共識（UPC 分級基礎）' },
    { type: 'textbook', citation: 'Ettinger SJ, Feldman EC, Côté E. Textbook of Veterinary Internal Medicine, 8th ed. Elsevier, 2017.', relevance: '尿液分析與腎功能基礎教材' },
    { type: 'guideline', citation: 'IRIS (International Renal Interest Society). "IRIS Staging of CKD (Modified 2023)." iris-kidney.com.', relevance: 'CKD 分期與蛋白尿亞分期現行指引' },
    { type: 'journal', citation: 'Nabity MB, Lees GE, Boggess MM, Yerramilli M, et al. "Symmetric Dimethylarginine Assay Validation, Stability, and Evaluation as a Marker for the Early Detection of Chronic Kidney Disease in Dogs." J Vet Intern Med. 2015;29(4):1036-1044. doi:10.1111/jvim.12835', relevance: 'SDMA 早期偵測 CKD 的奠基驗證研究' },
    { type: 'journal', citation: 'Loane SC, Thomson JM, Williams TL, McCallum KE. "Evaluation of symmetric dimethylarginine in cats with acute kidney injury and chronic kidney disease." J Vet Intern Med. 2022;36(5):1669-1676. doi:10.1111/jvim.16497', relevance: 'SDMA 於貓 AKI 與 CKD 皆升高、非 CKD 專屬' },
    { type: 'journal', citation: 'Couture Y, Keys D, Summers S. "Weekly Biological Variation of Urine Protein Creatinine Ratio and Urine Specific Gravity in Healthy Dogs." J Vet Intern Med. 2025;39(2):e70052. doi:10.1111/jvim.70052', relevance: 'UPC/USG 生物變異——支持連續取樣判讀' },
    { type: 'journal', citation: 'Scobie C, Dean R, Stavisky J, Plüddemann A. "Diagnostic accuracy of symmetric dimethylarginine for chronic kidney disease in cats and dogs: A systematic review." Vet Rec. 2026;198(7):e70216. doi:10.1002/vetr.70216', relevance: 'SDMA 診斷準確度系統性回顧（Evidence Level I）' },
    { type: 'guideline', citation: 'Weese JS, Blondeau J, Boothe D, Guardabassi LG, et al. "International Society for Companion Animal Infectious Diseases (ISCAID) guidelines for the diagnosis and management of bacterial urinary tract infections in dogs and cats." Vet J. 2019;247:8-25. doi:10.1016/j.tvjl.2019.02.008', relevance: '尿路感染診療現行指引（含無症狀菌尿不治療）' },
  ],
  is_current: true,
  created_at: now,
};

/** 胰臟炎，疾病型 */
const contentPancreatitis: NodeContent = {
  id: 'CONTENT-IM-L3-008',
  node_id: 'IM-L3-008',
  version: 2,
  summary: '胰臟炎在犬貓門診常見，可能是急診，也可能是慢性的。犬多半走急性壞死型，貓則以慢性淋巴球型為主。診斷工具裡，犬胰臟特異性脂酶（cPLI/Spec cPL）目前最敏感、又不用侵入。治療的核心就幾件事：積極輸液、止痛、止吐、早點把營養給上去。',
  learning_objectives: [
    '比較犬與貓胰臟炎在病因、臨床表現與病程上的差異',
    '正確選用並判讀胰臟炎的診斷工具（cPLI/fPLI、SNAP cPL/fPL、超音波）',
    '制定胰臟炎的急性期支持性治療方案',
    '說明貓三體炎（triaditis）的概念與臨床意義',
    '辨識胰臟炎的嚴重併發症並啟動適當處理',
  ],
  key_points: [
    '犬胰臟炎常見誘因：高脂飲食、肥胖、高脂血症、藥物（Azathioprine, KBr, L-asparaginase）',
    '貓胰臟炎常與 IBD 和膽管炎並存（triaditis 三體炎）',
    'Spec cPL > 400 μg/L（犬）/ Spec fPL > 5.4 μg/L（貓）高度提示胰臟炎',
    'SNAP cPL/fPL 快篩敏感度約 80-95%，適合排除用（陰性預測值高）',
    '腹腔超音波敏感度：犬約 68%、貓約 35-67%（操作者依賴性高）',
    '治療核心：積極靜脈輸液、止痛（Buprenorphine/Methadone）、止吐（Maropitant）、早期腸道營養',
    '犬嚴重胰臟炎可併發 DIC、SIRS、急性腎損傷',
  ],
  body: `# 胰臟炎 (Pancreatitis)

## 一、病理機制 (Pathophysiology)

整個機轉跑起來的時候是這樣：致病因子（高脂飲食、藥物、缺血）→胰臟腺泡細胞內 trypsinogen 異常活化為 trypsin→啟動酵素級聯反應（elastase、phospholipase A2、lipase）→胰臟自身消化 (autodigestion)→局部炎症反應（IL-1、IL-6、TNF-α 釋放）→微血管損傷與水腫→嚴重者進展為全身性發炎反應 (SIRS)→多器官功能障礙 (MODS)→DIC

[圖片:Pancreatitis pathophysiology cascade，trypsinogen activation → autodigestion → local inflammation → SIRS → MODS]

犬跟貓不一樣。犬多半走急性壞死性胰臟炎，組織學上嗜中性球浸潤很明顯，高脂飲食最常見的引爆點。貓則多半是慢性淋巴球性胰臟炎，跟免疫介導機轉有關，常常跟 IBD、膽管炎一起出現，就是大家在講的三體炎（triaditis）。貓的胰管跟膽總管在開口十二指腸前是會合的，這個解剖學構造就讓三個器官的病彼此牽動。

## 二、臨床表現與診斷 (Clinical Signs & Diagnosis)

| 臨床表現 | 犬 | 貓 | 備註 |
|---------|----|----|------|
| 嘔吐 | ~90% | ~35% | 犬最常見首發症狀 |
| 食慾廢絕 | ~90% | ~95% | 貓常為唯一主訴 |
| 腹痛 | ~60%（祈禱姿勢） | 難以辨識 | 犬遠比貓明顯 |
| 嗜睡 | 常見 | 常見 | 貓可能為唯一表現 |
| 黃疸 | 少見 | ~30% | 貓膽管壓迫較常見 |
| 發燒 | 變異大 | 變異大 | 非特異性 |

### 診斷工具比較

| 工具 | 犬敏感度 | 貓敏感度 | 特異度 | 最佳用途 |
|------|----------|----------|--------|---------|
| Spec cPL/fPL | 72-78% | 79-100% | 高 | 確診參考 |
| SNAP cPL/fPL | 80-95% | 80-90% | 中-高 | 排除診斷（NPV 高） |
| 腹腔超音波 | ~68% | 35-67% | 中 | 操作者依賴 |
| Lipase (DGGR) | 70-75% | 60-70% | 中 | 較傳統 lipase 佳 |
| 傳統 Amylase/Lipase | 低 | 低 | 低 | 不推薦 |

## 三、治療策略 (Treatment)

### 急性期支持療法

| 措施 | 藥物/方法 | 劑量 | 證據等級 |
|------|----------|------|---------|
| 輸液 | LRS 或 PlasmaLyte IV | 矯正脫水 + 維持 | Level I |
| 止痛 | [藥物:Buprenorphine] | 0.01-0.02 mg/kg IV q6-8h | Level I |
| 止痛（重症） | [藥物:Fentanyl] CRI | 2-5 μg/kg/hr IV | Level II |
| 止吐 | [藥物:Maropitant] | 1 mg/kg SC/IV SID | Level I |
| 早期營養 | 腸道營養（鼻食道管） | 24h 內啟動 | Level I |

這幾年觀念已經改了：禁食不要超過 24 小時。早一點把腸道營養給上去，腸道屏障才能維持完整，細菌移位的風險也會降下來。

### 慢性管理
- 犬：轉換低脂飲食；避免已知誘因
- 貓：治療共病（IBD 用 [藥物:Prednisolone]、膽管炎用抗生素）

## 四、併發症與監控 (Complications & Monitoring)

| 併發症 | 發生率 | 監測指標 | 處理 |
|--------|--------|---------|------|
| SIRS | 重症 ~30% | 體溫/HR/RR/WBC | 加護監護 |
| DIC | 重症 ~15% | PT/aPTT/FDP/D-dimer | FFP + supportive |
| 急性腎損傷 | 重症 ~10% | Cre/BUN/UOP | 輸液調整 |
| 肝外膽管阻塞（貓） | ~20% 貓 | Bilirubin/超音波 | 手術或支架 |
| 胰臟膿瘍/假性囊腫 | 罕見 | 超音波追蹤 | 引流或手術 |

住院監測：每 6-12h 疼痛評估、嘔吐頻率、體溫、血壓；每 24-48h 電解質、BUN/Cre、肝指數。出院後 1-2 週回診追蹤 cPLI/fPLI。

## 五、預後與預後因子 (Prognosis)

| 嚴重度 | 預後 | 死亡率 |
|--------|------|--------|
| 犬輕度急性 | 良好 | < 5% |
| 犬重度壞死性（SIRS/DIC） | 謹慎 | 25-50% |
| 貓慢性 | 需長期管理 | 低（若控制共病） |

復發率：犬約 30-40%，尤其有持續風險因子者。長期低脂飲食可降低復發。

飼主溝通：犬胰臟炎飲食管理是預防復發的關鍵，終身低脂飲食、絕對避免餐桌食物。貓需注意共病。

## 六、人醫借鑑 (Translational Insights)

- 人醫急性胰臟炎嚴重度評分（APACHE II、Ranson criteria）的概念可借鑑至獸醫（目前無標準化犬貓胰臟炎嚴重度評分）
- 人醫已確認早期腸道營養優於禁食，此原則已被獸醫接受
- 人醫慢性胰臟炎的胰臟外分泌功能不全 (EPI) 後遺症在犬亦可見
- 人醫的 Gallstone pancreatitis 概念對應貓的膽道相關胰臟炎

## 七、臨床爭議與知識空缺 (Controversies & Knowledge Gaps)

| 爭議主題 | 目前立場 | 證據等級 | 研究方向 |
|---------|---------|---------|---------|
| cPLI/fPLI 最佳 cutoff | Spec cPL >400 / fPL >5.4 為常用 | Level II | 敏感度與特異度的最佳平衡點 |
| 抗生素在胰臟炎 | 不常規使用（除非有感染證據） | Level III | 預防性抗生素的角色？ |
| Gabapentin 作為輔助止痛 | 部分臨床經驗支持 | Level IV | 犬貓胰臟炎止痛 RCT 需要 |
| 貓三體炎最佳治療順序 | 先穩定胰臟炎再處理 IBD | Level IV | 同時或序貫治療？ |
| 胰臟炎與 EPI 的關聯 | 反覆胰臟炎可導致 EPI | Level III | 長期追蹤數據不足 |

## 八、近期實證更新 (Recent Evidence Updates)

- **Fuzapladib（Panoquell-CA1）抗發炎新藥**：Steiner 等人（2023）以多中心隨機對照遮蔽試驗評估 LFA-1 拮抗劑 fuzapladib 於犬疑似急性胰臟炎；其機轉為抑制白血球活化/移行，是傳統支持療法之外的抗發炎新途徑（美國 FDA 條件性核准），但**不取代**輸液/止痛/營養支持。〔Evidence Level II〕
- **輸液策略由「積極」轉向「目標導向」**：現代觀念強調個體化/目標導向輸液復甦——矯正脫水與灌流不足，但避免過度輸液（過度輸液恐加重胰臟水腫與第三間隙滲漏）。〔Evidence Level III〕
- **早期腸道營養已成標準**：禁食不宜 > 24-48 小時，儘早經腸道（鼻食道/鼻胃管）餵食可維持腸黏膜屏障、降低細菌移位，預後優於長時禁食。〔Evidence Level II〕
- **類固醇在犬急性胰臟炎的角色重新審視**：歷來避免使用，但近期部分文獻於特定病例重新評估短療程 prednisolone；證據仍有限、**非標準療法**。〔Evidence Level IV〕
- **2021 ACVIM 貓胰臟炎共識**：Forman 等人（2021）整合貓胰臟炎診斷（Spec fPL 合併超音波判讀）與治療（支持療法、處理三體炎共病）的實證框架，為現行貓胰臟炎臨床指引基準。〔Evidence Level II〕

> ⚠️ 上述更新（特別是 fuzapladib 的臨床定位與類固醇爭議）仍待 DVM 依個案與最新獸醫實證覆核後採用。`,
  clinical_pearl: '貓胰臟炎的臨床表現遠比犬隱微。犬胰臟炎的經典三聯征是嘔吐、腹痛和食慾廢絕，但貓可能僅表現為食慾下降和嗜睡。在任何食慾不振超過 48 小時的貓，都應將胰臟炎列入鑑別診斷。另外，貓的超音波敏感度較低，SNAP fPL 陰性結果的排除價值很高。\n\n【台灣流行病學】胰臟炎在台灣犬貓臨床盛行率高，尤其好發於中老年犬及肥胖犬貓。台灣飼主常有餵食人類食物的習慣（如年節剩菜、高脂肪零食），為犬急性胰臟炎的重要誘因。台灣常見品種如迷你雪納瑞、約克夏梗為犬胰臟炎好發品種。貓「三體炎」（胰臟炎 + 膽管炎 + IBD）在台灣臨床並不罕見。SNAP cPL/fPL 快篩已在台灣獸醫院廣泛使用。',
  common_mistakes: [
    '依賴傳統 Amylase/Lipase 診斷胰臟炎（敏感度和特異度都不足，應使用 Spec cPL/fPL）',
    '超音波正常就排除胰臟炎（尤其在貓，敏感度僅 35-67%）',
    '急性胰臟炎長期禁食（現代觀點建議 24 小時內開始早期腸道營養）',
    '忽略貓三體炎的可能（胰臟炎+IBD+膽管炎常同時存在）',
    '犬胰臟炎未重視止痛（腹痛是主要臨床問題，未止痛影響預後）',
  ],
  disease_data: {
    signalment: '犬：中老年、肥胖犬好發。Miniature Schnauzer（高脂血症傾向）、Yorkshire Terrier 為高風險品種。貓：中老年貓，無明顯品種傾向，但 Siamese 可能有較高風險。',
    etiology: '犬：高脂飲食（最常見）、肥胖、高三酸甘油酯血症、藥物（Azathioprine、KBr）、內分泌疾病（Cushing、甲低、DM）、創傷、膽道疾病。貓：多數為特發性，可能與 IBD、膽管炎等免疫介導機轉相關。',
    pathogenesis: '正常情況下胰臟酵素以非活化的酶原形式儲存。致病因子導致 trypsinogen 在胰臟內提前活化為 trypsin → 啟動酵素級聯反應 → 胰臟自身消化 → 局部發炎 → 嚴重時全身性發炎反應（SIRS）→ 多器官功能障礙。',
    clinical_signs: [
      { sign: '嘔吐', category: 'primary', description: '犬最常見症狀（約 90%），貓僅 35-50% 出現' },
      { sign: '食慾下降/廢絕', category: 'primary', description: '犬貓均常見，貓常為唯一主訴' },
      { sign: '腹痛', category: 'primary', description: '犬常見祈禱姿勢（prayer position），貓較少明顯表現' },
      { sign: '腹瀉', category: 'secondary', description: '約 33% 犬可見，可為出血性' },
      { sign: '嗜睡/虛弱', category: 'secondary', description: '貓尤其常見，可能為唯一表現' },
      { sign: '黃疸', category: 'secondary', description: '胰臟腫脹壓迫膽管時出現，貓較犬常見' },
    ],
    staging: null,
    differential_diagnosis: [
      { condition: '腸道異物/阻塞', key_differentiator: '影像學可見異物，腹部觸診可能觸及。無 cPLI/fPLI 升高' },
      { condition: '急性肝炎', key_differentiator: 'ALT/AST 明顯升高為主，cPLI 正常。超音波肝臟回聲異常' },
      { condition: '腎上腺危象（Addisonian crisis）', key_differentiator: '低鈉高鉀（Na:K < 27），ACTH stimulation test 異常' },
      { condition: '敗血性腹膜炎', key_differentiator: '腹水細胞學可見退化性嗜中性球與細菌，腹水 glucose < 血液 glucose' },
      { condition: '急性腸胃炎', key_differentiator: '通常自限性，cPLI/fPLI 正常，無嚴重全身性影響' },
    ],
    diagnostic_workup: '1. CBC/生化全套（注意 hepatic enzyme、BUN/Cre、電解質、三酸甘油酯）→ 2. SNAP cPL/fPL 快篩（陰性可暫排除）→ 3. 若陽性：送 Spec cPL/fPL 定量 → 4. 腹腔超音波（胰臟周圍高回聲脂肪、胰臟腫脹/低回聲）→ 5. 凝血功能（排除 DIC）→ 6. 貓加做 T4、肝膽超音波（排除 triaditis 相關疾病）',
    treatment_protocol: '急性期（一般照護）：靜脈輸液（Lactated Ringer\'s 或 PlasmaLyte）矯正脫水、Maropitant 1 mg/kg SC/IV SID 止吐、Buprenorphine 0.01-0.02 mg/kg IV q6-8h 止痛、24 小時內啟動腸道營養（鼻食道管或自主進食）。專科照護：嚴重 SIRS 需加護監護、Fresh frozen plasma（DIC 或低白蛋白時）、Methadone 或 CRI 止痛方案、可能需要 feeding tube 長期營養支持。慢性管理：犬低脂飲食、貓處理共病（IBD 用 prednisolone、膽管炎用抗生素）。',
    prognosis: '犬輕度急性胰臟炎：預後良好，多數 3-7 天緩解。犬重度壞死性胰臟炎合併 SIRS/DIC：死亡率可達 30-50%。貓慢性胰臟炎：需長期管理，控制共病可維持良好生活品質。復發率：犬約 30-40% 會復發，需長期飲食管理。',
    monitoring: '住院期間：每 6-12 小時評估疼痛指數、嘔吐頻率、體溫、血壓。每 24-48 小時追蹤電解質、BUN/Cre、肝指數。出院後：1-2 週回診評估食慾恢復、體重、追蹤 cPLI/fPLI。長期：犬每 3-6 個月追蹤三酸甘油酯和體重。',
    owner_communication: '胰臟炎聽起來嚴重，多數其實治得起來。住院的這幾天主要是把支持治療做好。要不再發作，飲食管理是真的不能省。長期低脂、餐桌剩菜不能餵、高脂零食先收起來。貓的話狀況再複雜一些，常合併腸道跟肝膽的問題。出院之後只要再開始吐或不吃，不要拖，趕快回診。',
  },
  diagnostic_data: null,
  procedure_data: null,
  visual_placeholders: [
    { position: '診斷策略表後', type: 'flowchart', description: '胰臟炎診斷決策流程圖（犬 vs 貓路徑）' },
    { position: '治療原則段落後', type: 'comparison_table', description: '犬 vs 貓胰臟炎特徵比較表' },
  ],
  interactive_placeholders: [],
  drug_api_links: ['Maropitant', 'Buprenorphine', 'Methadone', 'Prednisolone'],
  references: [
    { type: 'journal', citation: 'Xenoulis PG. Diagnosis of pancreatitis in dogs and cats. J Small Anim Pract. 2015;56(1):13-26. doi:10.1111/jsap.12274', relevance: '犬貓胰臟炎診斷綜合回顧' },
    { type: 'journal', citation: 'Watson PJ. Chronic pancreatitis in dogs. Top Companion Anim Med. 2012;27(3):133-139. doi:10.1053/j.tcam.2012.04.006', relevance: '犬慢性胰臟炎管理' },
    { type: 'guideline', citation: 'Forman MA, Steiner JM, Armstrong PJ, et al. ACVIM consensus statement on pancreatitis in cats. J Vet Intern Med. 2021;35(2):703-723. doi:10.1111/jvim.16053', relevance: '貓胰臟炎診斷治療共識（Crossref 實查確認真實）' },
    { type: 'journal', citation: 'Steiner JM, Lainesse C, Noshiro Y, Domen Y, et al. Fuzapladib in a randomized controlled multicenter masked study in dogs with presumptive acute onset pancreatitis. J Vet Intern Med. 2023;37(6):2084-92. doi:10.1111/jvim.16897', relevance: 'LFA-1 拮抗劑 fuzapladib 犬急性胰臟炎 RCT（新型抗發炎療法）' },
    { type: 'textbook', citation: 'Steiner JM. "Exocrine Pancreas." In: Ettinger SJ, Feldman EC. Textbook of Veterinary Internal Medicine, 8th ed. Elsevier, 2017.', relevance: '胰臟炎基礎教材' },
    { type: 'guideline', citation: 'Washabau RJ, Day MJ, Willard MD, et al. Endoscopic, biopsy, and histopathologic guidelines for the evaluation of gastrointestinal inflammation in companion animals. J Vet Intern Med. 2010;24(1):10-26. doi:10.1111/j.1939-1676.2009.0443.x', relevance: 'GI 炎症評估指引' },
  ],
  is_current: true,
  created_at: now,
};

/** 貓肝臟脂肪變性，疾病型 */
const contentHepaticLipidosis: NodeContent = {
  id: 'CONTENT-IM-L3-009',
  node_id: 'IM-L3-009',
  version: 2,
  summary: '貓肝脂肪變性（FHL）是貓最常見的肝臟疾病，整個故事就是肝細胞被三酸甘油酯塞滿。典型情境就是一隻胖貓不吃東西超過 3-7 天就出事了。治療關鍵是把營養補回去，食道管灌食最有效。分原發性還是繼發性，預後差很多。',
  learning_objectives: [
    '說明貓肝臟脂肪變性的獨特病理生理機轉（與犬和人的差異）',
    '辨識肥胖貓食慾廢絕發展為 FHL 的危險因子和時程',
    '制定 FHL 的營養支持方案（包括食道管放置與灌食計畫）',
    '區分原發性與繼發性肝臟脂肪變性並評估預後',
    '說明再餵食症候群（refeeding syndrome）的預防策略',
  ],
  key_points: [
    'FHL 幾乎僅發生在貓（獨特的脂質代謝特性）',
    '最典型情境：肥胖貓（BCS ≥ 7/9）厭食 > 3-7 天',
    '原發性 FHL（~5%）vs 繼發性 FHL（~95%，需找出潛在疾病）',
    '血檢特徵：ALP 明顯升高（犬肝病型 ALP）、GGT 正常或輕度升高（ALP:GGT 比值高度提示 FHL）',
    '確診：肝臟細針抽吸細胞學（> 80% 肝細胞含脂肪空泡）',
    '治療核心：食道管灌食（esophagostomy tube），每日熱量需求從 25-30% RER 逐漸增加',
    '預後：積極營養支持下存活率約 60-85%',
    '近期食慾刺激劑（經皮 mirtazapine/Mirataz、capromorelin）是輔助，已成形 FHL 仍以食道管灌食為基石（單靠刺激食慾無法達 RER）',
  ],
  body: `# 貓肝臟脂肪變性 (Feline Hepatic Lipidosis, FHL)

## 一、病理機制 (Pathophysiology)

整個機轉跑起來的時候是這樣：厭食/負能量平衡→hormone-sensitive lipase 活化→周邊脂肪大量動員 (lipolysis)→游離脂肪酸 (FFA) 大量湧入肝臟→貓特有的代謝瓶頸卡在這裡：VLDL 組裝跟分泌做不好（apolipoprotein B100 合成沒效率）→三酸甘油酯 (TG) 在肝細胞內囤積→肝細胞腫脹（>80% 空泡化）→壓迫膽小管→膽汁鬱積 (intrahepatic cholestasis)→黃疸→嚴重時就是肝衰竭

[圖片:FHL pathophysiology，lipolysis → FFA influx → impaired VLDL export → TG accumulation → cholestasis]

貓特有脆弱性：
- 貓是專性肉食動物，能量主要靠蛋白質。一旦厭食，必需胺基酸（arginine、taurine、methionine）跟著短缺，VLDL 合成又更被卡住
- Carnitine 缺乏→脂肪酸 β-氧化障礙→TG 堆積加劇
- Thiamine (B1) 消耗快→厭食數天即可缺乏→加重肝臟代謝障礙

原發性 (~5%) vs 繼發性 (~95%)：絕大多數 FHL 有潛在疾病（IBD、胰臟炎、膽管炎、DM、CKD、腫瘤）導致厭食→繼發 FHL。

## 二、臨床表現與診斷 (Clinical Signs & Diagnosis)

| 臨床表現 | 頻率 | 特徵描述 |
|---------|------|---------|
| 食慾廢絕 | >95% | 病史 >3-7 天完全不吃 |
| 黃疸 | ~80% | 皮膚、黏膜、鞏膜黃染 |
| 體重急速下降 | ~80% | 但可能被原肥胖體型掩蓋 |
| 嗜睡/虛弱 | ~70% | 肝功能障礙/電解質失衡 |
| 嘔吐 | ~40-50% | 常見但非必要表現 |
| 肝臟腫大 | ~60% | 腹部觸診肝緣超過肋弓 |
| 流涎 (ptyalism) | ~20% | 肝性腦病或噁心 |

### 診斷特徵性血檢模式

| 指標 | FHL 典型 | 膽管炎鑑別 | 臨床意義 |
|------|---------|-----------|---------|
| ALP | 明顯升高 (>500 U/L) | 升高 | 貓無類固醇誘導型 ALP，升高即有意義 |
| GGT | 正常或輕度升高 | 明顯升高 | ALP:GGT >5 高度提示 FHL |
| Bilirubin | 明顯升高 | 升高 | 膽汁鬱積 |
| Albumin | 可能降低 | 變異大 | 肝臟合成↓ |
| BUN | 可能降低 | 變異大 | 肝臟合成↓ |

確診：肝臟細針抽吸 (FNA) 細胞學→>80% 肝細胞含脂肪空泡。超音波：肝臟瀰漫性高迴音（較腎皮質亮）。

## 三、治療策略 (Treatment)

### 營養支持（治療核心）

| 時間 | 熱量目標 | 備註 |
|------|---------|------|
| Day 1 | RER × 25-33% | 避免再餵食症候群 |
| Day 2-3 | RER × 50-75% | 漸增 |
| Day 4-5+ | RER × 100% | 維持至自主進食 |

RER = 70 × (BW kg)^0.75。食道管 (esophagostomy tube) 為首選長期營養支持，14-18 Fr，平均留置 3-6 週。

### 藥物治療

| 藥物 | 劑量 | 目的 | 證據等級 |
|------|------|------|---------|
| [藥物:Vitamin K1] | 0.5-1.5 mg/kg SC BID×3 | 矯正凝血（FNA 前必給） | Level II |
| [藥物:Maropitant] | 1 mg/kg SC/IV SID | 止吐 | Level I |
| [藥物:SAMe] | 90 mg/cat PO SID 空腹 | 肝臟保護/抗氧化 | Level III |
| [藥物:L-Carnitine] | 250-500 mg/cat/day PO | 促進脂肪酸 β-氧化 | Level III |
| [藥物:Mirtazapine] | 1.88 mg/cat PO q48h | 食慾促進 | Level II |
| Thiamine (B1) | 100 mg/cat/day | 預防 B1 缺乏 | Level II |
| Taurine | 250 mg/cat/day | 必需胺基酸補充 | Level III |

### 再餵食症候群預防
- 前 48 小時每 12h 監測血磷、鉀、鎂
- 緩慢增加熱量；補充 Thiamine、鉀、磷

## 四、併發症與監控 (Complications & Monitoring)

| 併發症 | 機轉 | 監測 | 處理 |
|--------|------|------|------|
| 再餵食症候群 | 灌食啟動後胰島素↑→磷/鉀/鎂內移 | 電解質 q12h 前 48h | 補充 KPO4、緩增熱量 |
| 凝血異常 | Vit K 依賴因子合成↓ | PT/aPTT | Vit K1 |
| 肝性腦病 | 氨代謝↓ | 神經狀態 | [藥物:Lactulose] 0.5 mL/kg BID-TID |
| 低血鉀（肌無力） | 流失+攝取↓ | 血鉀 | KCl 補充 |

監測時程：住院前 48h 每 12h 電解質；每日進食量/嘔吐/黃疸程度；每 48-72h 肝指數/Bilirubin；出院後每週回診至肝指數正常化。

## 五、預後與預後因子 (Prognosis)

| 情境 | 存活率 | 備註 |
|------|--------|------|
| 原發性 FHL + 積極營養支持 | >80% | 預後最佳 |
| 繼發性 FHL + 可治療原發病 | 60-85% | 取決於原發病 |
| 嚴重低白蛋白 <2.0 + 肝性腦病 | 較差 | 不良預後指標 |

食道管平均留置 3-6 週。自主進食恢復為拔管指標。

飼主溝通：食道管灌食是救命措施而非最後手段。照護不困難，會詳細教導。最重要預防：肥胖貓絕不可突然禁食。

## 六、人醫借鑑 (Translational Insights)

- 人醫 NAFLD/NASH (非酒精性脂肪肝/脂肪性肝炎) 為全球最常見肝病，但機轉與 FHL 不同，人醫為胰島素阻抗驅動的慢性過程，FHL 為厭食驅動的急性蓄積
- 人醫再餵食症候群管理原則直接適用於 FHL（WHO/NICE 指引）
- 人醫肝臟保護劑 (NAC, SAMe) 的研究可借鑑至獸醫

## 七、臨床爭議與知識空缺 (Controversies & Knowledge Gaps)

| 爭議主題 | 目前立場 | 證據等級 | 研究方向 |
|---------|---------|---------|---------|
| 原發性 vs 繼發性比例 | 傳統認為 95% 繼發性 | Level III | 真正原發性比例可能被低估 |
| SAMe 的臨床效益 | 理論支持但 RCT 不足 | Level III | 需貓 FHL 特異性 RCT |
| L-Carnitine 補充 | 理論支持，臨床效果不確定 | Level IV | 劑量優化研究需要 |
| 鼻胃管 vs 食道管 | 食道管為首選，鼻胃管為暫時過渡 | Level II | 各自最佳適應時機？ |
| 灌食配方最佳組成 | 高蛋白 (30-40% ME) 為共識 | Level II-III | 最佳脂肪/碳水比例？ |

## 八、近期實證更新 (Recent Evidence Update)

**新一代食慾刺激劑：是「輔助」不是「替代」灌食**
近年貓的食慾刺激劑明顯進步——**經皮 mirtazapine 軟膏（Mirataz，Poole/Quimby 2019 RCT）**避免口服灌藥的壓力、**capromorelin（ghrelin 受體促效劑，Wofford 2025 RCT）**能促進體重增加。但對**已成形的 FHL** 有一個關鍵原則：**食慾刺激劑單用無法可靠達到熱量目標（RER），不能取代輔助腸道灌食（食道管）**。臨床定位：
- **預防＆早期**：肥胖貓剛開始不吃時，食慾刺激劑＋找原因，可能擋住 FHL 成形。
- **已 FHL**：食道管灌食仍是基石（保證熱量送達）；食慾刺激劑當輔助、協助拔管過渡。

**再餵食症候群仍是頭號灌食併發症**：啟動灌食後胰島素上升把磷/鉀/鎂打進細胞，前 48-72 小時要盯緊**血磷（最關鍵）**、緩慢加熱量、必要時補 KPO4＋thiamine。

**別忘了「找原發病」**：FHL 多為繼發（傳統估計大多數、達九成上下，真正原發比例可能被低估）——IBD、胰臟炎、膽管炎、DM、CKD、腫瘤都可能是讓貓不吃的元兇；原發病不解決，FHL 也難好。

【台灣落地】台灣室內貓肥胖盛行（>30% 過重），FHL 門診常見；經皮 mirtazapine、capromorelin 在台灣可近性提升，是門診實用的食慾輔助，但遇到已黃疸/已 FHL 的貓，該放食道管就要放，別只靠刺激食慾拖時間。E-tube 放置技術在台灣已成熟。`,
  clinical_pearl: 'ALP:GGT 比值是 FHL 最有用的血檢鑑別線索。在大多數肝臟疾病中 ALP 和 GGT 會同步升高，但在 FHL 中 ALP 明顯升高而 GGT 正常或僅輕度升高。如果 GGT 明顯升高，要高度懷疑合併膽管炎或其他膽道疾病。另外，在黃疸貓中見到 coagulopathy，補充 Vitamin K1 後仍無改善，要考慮肝臟合成功能已嚴重受損。\n\n【台灣流行病學】貓肝脂肪沉積症在台灣為常見的貓肝臟急症，與台灣室內貓肥胖盛行率高度相關。台灣貓的肥胖問題普遍（估計超過 30% 過重），任何原因導致肥胖貓食慾廢絕超過 48 小時即應警覺 FHL 風險。台灣飼主多犬多貓家庭比例高，環境壓力導致的厭食是常見誘因。台灣獸醫院 E-tube 放置技術成熟，為 FHL 治療的關鍵支持工具。',
  common_mistakes: [
    '將 FHL 視為單獨疾病而未積極搜尋潛在病因（95% 為繼發性）',
    '灌食過快導致再餵食症候群（低血磷、低血鉀、心律不整）',
    '在凝血功能未評估前就進行肝臟 FNA（應先測 PT/aPTT）',
    '使用強迫餵食（syringe feeding）取代食道管（效率不足且增加厭食風險）',
    '營養支持第一天就給予全量熱量需求',
  ],
  disease_data: {
    signalment: '好發於肥胖的中年貓（BCS ≥ 7/9），平均年齡 7 歲。無明顯品種傾向。室內貓比室外貓更常見（肥胖率較高）。',
    etiology: '核心機轉為厭食導致的脂肪代謝失調。約 95% 為繼發性（潛在疾病導致厭食）：IBD/慢性腸病、胰臟炎、膽管炎、糖尿病、腎臟疾病、淋巴瘤等。約 5% 為原發性（壓力事件導致厭食，無潛在疾病）。',
    pathogenesis: '貓一旦不吃就走負能量平衡，周邊脂肪開始分解，游離脂肪酸大量倒進肝臟。但貓的 VLDL 合成跟分泌效率本來就差，三酸甘油酯就在肝細胞裡囤起來，肝細胞被脹大、功能掉，膽小管被壓住變膽汁鬱積，黃疸跑出來，嚴重就是肝衰竭。再加上 arginine、taurine、carnitine 這些必需胺基酸跟著缺，脂肪代謝整個更卡。',
    clinical_signs: [
      { sign: '食慾廢絕', category: 'primary', description: '通常有 > 3-7 天完全不吃的病史' },
      { sign: '黃疸', category: 'primary', description: '皮膚、黏膜、鞏膜黃染，肝內膽汁鬱積所致' },
      { sign: '體重急劇下降', category: 'primary', description: '肌肉消耗明顯，但可能被原先的肥胖掩蓋' },
      { sign: '嗜睡/虛弱', category: 'secondary', description: '肝功能障礙、低血糖或電解質失衡' },
      { sign: '嘔吐', category: 'secondary', description: '約 40-50% 病例出現' },
      { sign: '肝臟腫大', category: 'secondary', description: '腹部觸診可觸及，肝緣超過肋弓' },
      { sign: '流涎（ptyalism）', category: 'secondary', description: '肝性腦病或噁心的表現' },
    ],
    staging: null,
    differential_diagnosis: [
      { condition: '膽管炎/膽道阻塞', key_differentiator: 'GGT 與 ALP 同步明顯升高（ALP:GGT < 5），超音波可見膽道擴張或膽結石' },
      { condition: '貓傳染性腹膜炎（FIP）', key_differentiator: '高球蛋白血症（A:G ratio < 0.4），腹水高蛋白（> 3.5 g/dL），Rivalta 陽性' },
      { condition: '肝臟淋巴瘤', key_differentiator: '超音波可見局灶性或多灶性低回聲病灶，FNA 可見異型淋巴球' },
      { condition: '三體炎（Triaditis）', key_differentiator: 'GGT 升高提示膽管炎成分，fPLI 升高提示胰臟炎成分，可能同時合併 FHL' },
      { condition: '肝臟類澱粉沉積症', key_differentiator: 'Siamese 和 Abyssinian 好發，肝臟易碎出血，細胞學或組織病理可見類澱粉沉積' },
    ],
    diagnostic_workup: '1. CBC/生化全套（注意 ALP/GGT 比值、Bilirubin、Albumin、BUN、Glucose）→ 2. 凝血功能（PT/aPTT，FNA 前必測）→ 3. 腹腔超音波（肝臟回聲評估、膽道系統、胰臟、腸道）→ 4. 肝臟 FNA 細胞學（確診）→ 5. 搜尋潛在病因：T4、fPLI、尿液分析、FeLV/FIV → 6. 必要時肝臟組織切片（排除其他肝病）',
    treatment_protocol: '一般照護：靜脈輸液矯正脫水和電解質失衡、Vitamin K1 0.5-1.5 mg/kg SC q12h × 3 doses（若凝血異常）、Maropitant 1 mg/kg SC/IV SID 止吐、Vitamin B complex 補充（尤其 Thiamine）、SAMe 20 mg/kg PO SID 肝臟保護。專科照護：食道管放置並啟動營養支持計畫（RER 從 25% 逐日增加）、嚴重低白蛋白或凝血障礙考慮 FFP 輸注、肝性腦病處理（Lactulose 0.5 mL/kg PO BID-TID）、處理潛在疾病（IBD/胰臟炎/膽管炎等）。',
    prognosis: '積極營養支持下總體存活率約 60-85%。原發性 FHL 預後較好（存活率 > 80%）。繼發性 FHL 預後取決於潛在疾病的可治療性。食道管平均留置 3-6 週。不良預後指標：嚴重低白蛋白（< 2.0 g/dL）、凝血障礙對 Vitamin K 無反應、肝性腦病、嚴重低血磷。',
    monitoring: '住院前 48 小時：每 12 小時監測電解質（磷、鉀、鎂）以預防再餵食症候群。每日評估進食量、嘔吐頻率、黃疸程度。每 48-72 小時追蹤肝指數和 Bilirubin。出院後：每週回診評估營養攝取和體重變化。食道管照護教育。每 1-2 週追蹤肝指數直至正常化。',
    owner_communication: '肝臟脂肪變性聽起來嚇人，其實治得回來。重點是營養補上去，食道管灌食是現在最有效也最安全的做法。聽到要放管子很多人會猶豫，但實際照護比想像中容易，我們會一步一步教。要有點耐心，管子留個 3-6 週很正常。多數貓最後可以完全康復。最重要的一句話：肥胖的貓不可以突然絕食，要減重一定要慢慢來。',
  },
  diagnostic_data: null,
  procedure_data: null,
  visual_placeholders: [
    { position: '病理生理段落後', type: 'flowchart', description: 'FHL 病理生理流程圖' },
    { position: '營養支持方案段落後', type: 'timeline', description: '灌食量逐日增加時間表' },
  ],
  interactive_placeholders: [],
  drug_api_links: ['Maropitant', 'Vitamin K1', 'SAMe', 'Lactulose'],
  references: [
    { type: 'journal', citation: 'Wofford JA, Milliken MacKinnon A, Heinen E. "Capromorelin promotes weight gain in cats with unintended weight loss: a randomized, masked, placebo-controlled clinical trial." J Feline Med Surg. 2025;27(11). doi:10.1177/1098612X251379924', relevance: '近期：capromorelin（ghrelin 促效劑）增重 RCT' },
    { type: 'journal', citation: 'Poole M, Quimby JM, Hu T, Labelle D. "A double-blind, placebo-controlled, randomized study to evaluate the weight gain drug, mirtazapine transdermal ointment, in cats with unintended weight loss." J Vet Pharmacol Ther. 2019;42(2):179-188. doi:10.1111/jvp.12738', relevance: '經皮 mirtazapine（Mirataz）增重 RCT' },
    { type: 'journal', citation: 'Center SA. "Feline hepatic lipidosis." Vet Clin North Am Small Anim Pract. 2005;35(1):225-269. doi:10.1016/j.cvsm.2004.10.002', relevance: 'FHL 綜合回顧' },
    { type: 'journal', citation: 'Armstrong PJ, Blanchard G. "Hepatic Lipidosis in Cats." Vet Clin North Am Small Anim Pract. 2009;39(3):599-616. doi:10.1016/j.cvsm.2009.03.003', relevance: 'FHL 管理與營養支持' },
    { type: 'guideline', citation: 'Baldwin K, Bartges J, Buffington T, et al. "AAHA Nutritional Assessment Guidelines for Dogs and Cats." J Am Anim Hosp Assoc. 2010;46(4):285-296. doi:10.5326/0460285', relevance: '營養評估與灌食指引' },
    { type: 'textbook', citation: 'Ettinger SJ, Feldman EC. Textbook of Veterinary Internal Medicine, 8th ed. Elsevier, 2017. Chapter on Hepatobiliary Disease in Cats.', relevance: '肝臟疾病基礎教材' },
  ],
  is_current: true,
  created_at: now,
};

/** 犬腎上腺皮質機能低下（Addison's）， 疾病型 */
const contentAddisons: NodeContent = {
  id: 'CONTENT-IM-L3-011',
  node_id: 'IM-L3-011',
  version: 2,
  summary: '犬腎上腺皮質機能低下（Addison\'s disease）說穿了，就是腎上腺皮質壞掉，糖皮質素跟/或鹽皮質素分不出來。它有個外號叫「The Great Pretender」，因為症狀千變萬化、什麼都像。典型的電解質長相是低血鈉加高血鉀（Na:K < 27）。確診靠 ACTH stimulation test，金標準。',
  learning_objectives: [
    '說明犬 Addison\'s disease 的病因分類（原發性 vs 繼發性 vs 醫源性）',
    '辨識 Addison\'s disease 的典型與非典型臨床表現',
    '正確判讀 ACTH stimulation test 結果以確診 Addison\'s',
    '處理 Addisonian crisis 的急救流程',
    '制定 Addison\'s 病患的長期替代治療方案',
  ],
  key_points: [
    'Addison\'s 被稱為「The Great Pretender」，症狀高度非特異性且間歇性',
    '典型電解質異常：低 Na、高 K（Na:K ratio < 27 高度提示）',
    '約 10-30% 為「非典型 Addison\'s」，電解質正常（僅糖皮質素缺乏）',
    'ACTH stimulation test：Pre- 和 Post-ACTH cortisol 均 < 2 μg/dL 確診',
    '急性危象（Addisonian crisis）：嚴重低血壓、心搏過緩、高血鉀心律不整，為急診',
    '長期治療：DOCP（Percorten-V）IM q25d + Prednisolone PO SID',
    '好發品種：Standard Poodle、Portuguese Water Dog、Bearded Collie、Nova Scotia Duck Tolling Retriever',
  ],
  body: `# 犬腎上腺皮質機能低下 (Hypoadrenocorticism / Addison's Disease)

## 一、病理機制 (Pathophysiology)

整個機轉跑起來的時候是這樣：免疫介導性腎上腺皮質破壞（T 細胞介導 + 抗腎上腺抗體）→zona glomerulosa + zona fasciculata 漸進性破壞→當 >85-90% 皮質被破壞→鹽皮質素 (aldosterone) + 糖皮質素 (cortisol) 分泌不足→

Aldosterone 缺乏→遠端腎小管 Na+ 重吸收↓ + K+ 排泄↓→低血鈉/高血鉀→細胞外液容量↓→低血壓→腎前性氮血症；高鉀血症→心肌興奮性改變→心搏過緩/心律不整

Cortisol 缺乏→糖質新生↓→低血糖風險；壓力反應能力喪失；血管張力↓→低血壓加劇；胃腸道黏膜完整性↓→嘔吐、腹瀉

[圖片:Addison's pathophysiology，adrenal destruction → aldosterone/cortisol deficiency → electrolyte and hemodynamic consequences]

典型 vs 非典型：約 70% 為典型型（aldosterone + cortisol 均缺乏，有電解質異常）；約 30% 為非典型型（僅 cortisol 缺乏，電解質正常，但可能隨時間進展為典型型）。

醫源性 Addison's：[藥物:Trilostane] 治療 Cushing's 時過量→急性腎上腺皮質壞死；長期外源性類固醇突然停藥→HPA axis 抑制。

## 二、臨床表現與診斷 (Clinical Signs & Diagnosis)

### 「偉大的模仿者 (The Great Pretender)」

| 表現類型 | 常見症狀 | 特徵 |
|---------|---------|------|
| 消化道 | 嘔吐、腹瀉、食慾↓ | 間歇性、時好時壞 |
| 全身性 | 虛弱、嗜睡、體重↓ | 壓力時惡化 |
| 心血管 | 心搏過緩、低血壓 | 高鉀血症所致 |
| 急性危象 | 休克、虛脫、低體溫 | Addisonian crisis |

關鍵線索：症狀 waxing and waning；輸液後快速改善又再度惡化；壓力事件後症狀加重；缺少 stress leukogram（淋巴球/嗜酸球不降反升）。

### 診斷

| 檢測 | 結果 | 診斷價值 |
|------|------|---------|
| Na:K ratio | < 27（正常 27-40） | 高度提示（但 30% 非典型型正常） |
| Baseline cortisol | > 2 μg/dL | 可排除 Addison's |
| ACTH stim test | Pre & Post cortisol < 2 μg/dL | 金標準確診 |
| 內源性 ACTH | 升高（原發性）vs 降低（繼發性） | 鑑別原發/繼發 |
| 胸腔 X光 | 微小心臟 (microcardia) | 重要線索 |
| ECG | T 波高尖、QRS 增寬、P 消失 | 高鉀血症變化 |

## 三、治療策略 (Treatment)

### Addisonian Crisis 急救

| 步驟 | 措施 | 劑量 |
|------|------|------|
| 1 | 0.9% NaCl IV 輸液 | 休克劑量 60-90 mL/kg/hr |
| 2 | [藥物:Dexamethasone] SP IV | 0.25-0.5 mg/kg（不干擾 cortisol 測量） |
| 3 | 高鉀急救：10% Calcium gluconate IV | 0.5-1.5 mL/kg 緩慢推注（ECG 監測） |
| 4 | Regular insulin + Dextrose | 0.1-0.25 U/kg IV + 50% dextrose |

### 長期維持治療

| 藥物 | 劑量 | 備註 | 證據等級 |
|------|------|------|---------|
| [藥物:DOCP] (Percorten-V/Zycortal) | 仿單 2.2 mg/kg IM/SC q25-28d；**起始可較低（~1.1–1.5 mg/kg）多數即有效**，再依電解質個別化 | 鹽皮質素首選（Bates 2013；AAHA 2023） | Level I |
| [藥物:Fludrocortisone] | 0.01-0.02 mg/kg PO SID-BID | 口服替代 | Level II |
| [藥物:Prednisolone] | 0.1-0.2 mg/kg PO SID | 糖皮質素補充 | Level I |

緊迫期間（手術、生病、旅行）：Prednisolone 劑量增加 2-10 倍。

## 四、併發症與監控 (Complications & Monitoring)

| 併發症 | 機轉 | 監測 | 處理 |
|--------|------|------|------|
| Addisonian crisis | 急性失代償/壓力觸發 | 電解質/血壓/ECG | 急救流程 |
| DOCP 過量 | 醫源性高鈉/低鉀 | 電解質 | 調整劑量/間隔 |
| 類固醇副作用 | 長期 prednisolone | PU/PD/體重 | 最低有效劑量 |

監測時程：DOCP 注射後 2 週測電解質；穩定後每 3-6 月追蹤；每次回診電解質 + 臨床評估。

## 五、預後與預後因子 (Prognosis)

預後極佳，一旦確診並開始治療，多數犬可維持正常壽命與良好生活品質。

關鍵成功因素：飼主依從性（規律投藥/回診）、緊迫期間及時增量、隨身攜帶 emergency 類固醇。

飼主溝通：Addison's 是終身疾病但治療效果極好。最重要的是規律投藥和回診。壓力情境前主動增加 prednisolone。建議佩戴醫療識別標籤。

## 六、人醫借鑑 (Translational Insights)

- 人醫 Addison's 的 adrenal crisis prevention 教育策略（sick day rules、emergency injection kit）可直接借鑑至獸醫飼主教育
- 人醫使用 hydrocortisone continuous infusion 治療急性危象，獸醫多用 dexamethasone bolus
- 人醫的 autoimmune polyendocrine syndrome (APS) 概念，Addison's 合併其他自體免疫疾病，在犬亦有報告（Addison's + hypothyroidism + DM）

## 七、臨床爭議與知識空缺 (Controversies & Knowledge Gaps)

| 爭議主題 | 目前立場 | 證據等級 | 研究方向 |
|---------|---------|---------|---------|
| DOCP vs Fludrocortisone | DOCP 為多數首選 | Level II | 長期 QoL 比較研究 |
| 非典型進展為典型的頻率 | 約 30% 可能進展 | Level III | 長期前瞻性追蹤 |
| 基因檢測預測風險 | 部分品種 DLA haplotype 已知 | Level III | 商品化基因檢測可行性 |
| DOCP 最佳劑量與間隔 | 較低起始劑量（~1.1–1.5 mg/kg）多數已足夠（Bates 2013；AAHA 2023 採減量），依 Na/K 與間隔個別化 | Level II | 最佳最低劑量/最長間隔之前瞻比較 |
| 貓 Addison's | 極罕見，治療經驗有限 | Level IV | 貓特異性治療指引需要 |

## 八、近期實證更新（待 DVM 覆核）

1. **DOCP 減量起始（Bates 2013；AAHA 2023）**：DOCP 仿單為 2.2 mg/kg，但較低起始劑量（約 1.1–1.5 mg/kg）在多數犬已足夠維持電解質正常；應依注射前 Na/K 個別化劑量與間隔，可降低成本與醫源性高鈉/低鉀風險。
2. **cortisol:ACTH 比值輔助診斷（Lathan 2014）**：基礎 cortisol 對內源性 ACTH 的比值可作為原發性 HOAC 的輔助/替代診斷，於 ACTH 試劑取得受限時尤具價值。
3. **基礎 cortisol 篩檢角色（Guzmán Ramos 2022 回顧）**：基礎 cortisol > 2 µg/dL 對排除 Addison 有高敏感度（良好 rule-out），確診仍須 ACTH 刺激試驗。非典型型（電解質正常、僅糖皮質素缺乏）約占 10–30%，是否進展為典型型**個別差異大、難以可靠預測**。
4. **急救期糖皮質素選擇**：dexamethasone（非 prednisolone/prednisone）因不干擾 cortisol 分析，為 ACTH 試驗前的緊急選擇。
> 臨床內容與所有劑量需獸醫師依現行指引與仿單核對。`,
  clinical_pearl: 'Na:K ratio < 27 是 Addison\'s 最有價值的篩檢線索，但要記住約 10-30% 的 Addison\'s 是非典型的（電解質正常）。任何犬隻出現反覆的、間歇性的嘔吐/腹瀉/虛弱，而且壓力時症狀加重，特別是輸液後快速改善又再度惡化，都應該考慮 Addison\'s。另外，若 Cushing 病犬使用 Trilostane 治療後突然惡化，必須立即排除醫源性 Addison\'s。\n\n【台灣流行病學】Addison 病在台灣相對少見但容易被誤診為其他慢性消化道疾病。台灣常見的好發品種包括標準型貴賓犬、西高地白梗等。由於台灣 Trilostane 使用日益普及治療 Cushing 症，醫源性 Addison 危機需特別留意。DOCP（Percorten-V）在台灣取得管道有限，Fludrocortisone 為替代選項。台灣獸醫師應將 Addison 納入「反覆不明原因虛脫」的鑑別診斷。',
  common_mistakes: [
    '僅因電解質正常就排除 Addison\'s（10-30% 為非典型，電解質正常）',
    '使用 Prednisolone 進行急性處理（會干擾 ACTH stimulation test 中的 cortisol 測量，應用 Dexamethasone）',
    '忽略「waxing and waning」的病史模式（間歇性改善又惡化是 Addison\'s 的特徵）',
    '急性危象時使用含鉀輸液（如 Lactated Ringer\'s），應使用 0.9% NaCl',
    '確診後未同時提供糖皮質素和鹽皮質素替代治療',
  ],
  disease_data: {
    signalment: '好發於年輕至中年母犬（中位年齡 4-5 歲，70% 為母犬）。好發品種：Standard Poodle、Portuguese Water Dog、Bearded Collie、Nova Scotia Duck Tolling Retriever、West Highland White Terrier、Great Dane。',
    etiology: '原發性（最常見）：免疫介導性腎上腺皮質破壞（淋巴球性腎上腺炎），需 > 85-90% 皮質破壞才出現症狀。繼發性：腦下垂體 ACTH 分泌不足（腫瘤或創傷）。醫源性：Trilostane 治療 Cushing\'s 導致腎上腺壞死，或長期外源性糖皮質素突然停藥。',
    pathogenesis: '腎上腺皮質破壞 → Aldosterone 缺乏 → 腎臟無法保留 Na+ 和排泄 K+ → 低血鈉/高血鉀 → 細胞外液減少 → 低血壓/脫水 → 腎前性氮血症。Cortisol 缺乏 → 無法維持血管張力 → 低血壓加劇。無法維持糖質新生 → 低血糖。消化道黏膜完整性下降 → 嘔吐/腹瀉。',
    clinical_signs: [
      { sign: '嘔吐', category: 'primary', description: '間歇性，壓力時加重，約 70-90% 病例' },
      { sign: '虛弱/嗜睡', category: 'primary', description: '低血壓、低血糖、電解質失衡所致' },
      { sign: '食慾下降', category: 'primary', description: '可為間歇性，輸液後短暫改善' },
      { sign: '腹瀉', category: 'primary', description: '約 40-60% 病例，可含血（melaena）' },
      { sign: '脫水', category: 'secondary', description: 'Aldosterone 缺乏致鈉和水分流失' },
      { sign: '心搏過緩', category: 'secondary', description: '高血鉀所致，嚴重時可致心律不整' },
      { sign: '低體溫', category: 'secondary', description: '皮質醇缺乏影響體溫調節' },
    ],
    staging: null,
    differential_diagnosis: [
      { condition: '急性腎損傷 (AKI)', key_differentiator: '腎臟超音波異常、USG 等張或低、無低 Na:K 比（除非伴隨泌尿道阻塞）' },
      { condition: '急性胃腸炎/胰臟炎', key_differentiator: '電解質通常正常或輕度異常、cPLI 可鑑別胰臟炎、不會出現 Na:K < 27' },
      { condition: '泌尿道阻塞（post-renal）', key_differentiator: '高血鉀但有明確阻塞證據（超音波見積水、膀胱腫脹）' },
      { condition: 'Whipworm 感染', key_differentiator: '犬鉤蟲和鞭蟲感染可造成類似低 Na/高 K，糞便檢查可鑑別' },
      { condition: '重複器官疾病（胸水、腹水）', key_differentiator: '低鈉可見於嚴重第三空間流失，但 ACTH stim 正常' },
    ],
    diagnostic_workup: '1. CBC（可見嗜酸性球增多，在壓力反應中不正常升高，以及淋巴球增多）→ 2. 生化（Na/K 比值 < 27、BUN/Cre 升高、低血糖、低白蛋白）→ 3. ECG（高血鉀心電圖變化：peaked T, wide QRS）→ 4. Basal cortisol（< 2 μg/dL 高度提示，> 2 μg/dL 可排除）→ 5. ACTH stimulation test（金標準）：Pre-cortisol + Cosyntropin 5 μg/kg IV → 1 hr Post-cortisol。Pre 和 Post 均 < 2 μg/dL 確診 → 6. 內源性 ACTH 測量（區分原發性 vs 繼發性）',
    treatment_protocol: '急性危象：0.9% NaCl 快速輸液（80-90 mL/kg/hr 第一小時）→ 高血鉀處理（Calcium gluconate 10% 0.5-1.0 mL/kg slow IV + Regular insulin 0.1-0.25 U/kg IV with Dextrose）→ Dexamethasone SP 0.25-0.5 mg/kg IV（不干擾 ACTH stim test）。長期治療：DOCP (Percorten-V) 2.2 mg/kg IM q25 天（首選鹽皮質素替代）+ Prednisolone 0.1-0.2 mg/kg PO SID（糖皮質素替代）。壓力時劑量加倍（手術、住院、搬家）。替代方案：Fludrocortisone 0.02 mg/kg PO SID-BID（同時提供鹽皮質素和部分糖皮質素活性）。',
    prognosis: '只要確診、藥開下去，預後其實非常好。多數狗的壽命跟生活品質都可以接近正常。但 Addisonian crisis 沒抓到就是會死掉，死亡率不低。Trilostane 造成的醫源性 Addison 比較看運氣，腎上腺有沒有辦法自己恢復，差別很大，部分狗會慢慢回來。',
    monitoring: '確診後第一個月：每 2 週追蹤電解質（Na/K）和腎功能。穩定後：每 3-4 個月追蹤。DOCP 注射前測電解質以調整劑量和間隔。Prednisolone 劑量依臨床症狀調整（使用最低有效劑量）。注意體重、食慾、活動力變化。',
    owner_communication: 'Addison 是一輩子的事，但只要藥不漏，狗狗的生活其實跟一般狗沒兩樣。最怕的就是漏藥。如果遇到手術、生病、長途搬家這種壓力大的時候，糖皮質素要加量，這個一定要事先跟醫師講。包包裡記得放注射用的 Dexamethasone，急用的時候才不會慌。電解質要定期回診抽，才能確定藥量對不對。',
  },
  diagnostic_data: null,
  procedure_data: null,
  visual_placeholders: [
    { position: 'ACTH stim test 流程', type: 'flowchart', description: 'ACTH stimulation test 操作與判讀流程圖' },
    { position: '急性危象處理段落', type: 'flowchart', description: 'Addisonian crisis 急救流程圖' },
    { position: '長期替代治療表後', type: 'comparison_table', description: 'DOCP vs Fludrocortisone 比較表' },
  ],
  interactive_placeholders: [],
  drug_api_links: ['DOCP', 'Fludrocortisone', 'Prednisolone', 'Dexamethasone', 'Calcium gluconate', 'Regular insulin'],
  references: [
    { type: 'guideline', citation: 'Bugbee A, et al. 2023 AAHA Selected Endocrinopathies of Dogs and Cats Guidelines. J Am Anim Hosp Assoc. 2023;59(3):113-135. doi:10.5326/JAAHA-MS-7368.', relevance: '現行內分泌指引（含 HOAC 治療與 DOCP 減量）' },
    { type: 'journal', citation: 'Bates JA, et al. Lower initial dose desoxycorticosterone pivalate for treatment of canine primary hypoadrenocorticism. Aust Vet J. 2013;91(3):77-82. doi:10.1111/avj.12019.', relevance: 'DOCP 較低起始劑量之有效性證據' },
    { type: 'journal', citation: 'Lathan P, et al. Use of the cortisol-to-ACTH ratio for diagnosis of primary hypoadrenocorticism in dogs. J Vet Intern Med. 2014;28(5):1546-1550. doi:10.1111/jvim.12392.', relevance: 'cortisol:ACTH 比值輔助診斷原發性 HOAC' },
    { type: 'journal', citation: 'Guzmán Ramos PJ, et al. Diagnosis of canine spontaneous hypoadrenocorticism. Canine Med Genet. 2022;9(1):6. doi:10.1186/s40575-022-00119-4.', relevance: '犬自發性 HOAC 診斷最新回顧' },
    { type: 'journal', citation: 'Klein SC, Peterson ME. Canine hypoadrenocorticism: Part I. Can Vet J. 2010;51(1):63-69.', relevance: 'Addison\'s 病因與診斷回顧' },
    { type: 'journal', citation: 'Lathan P, Thompson AL. Management of hypoadrenocorticism (Addison\'s disease) in dogs. Vet Med (Auckl). 2018;9:1-10.', relevance: 'Addison\'s 長期管理策略' },
    { type: 'textbook', citation: 'Scott-Moncrieff JC. Hypoadrenocorticism. In: Feldman EC, et al. Canine and Feline Endocrinology, 4th ed. Elsevier, 2015:485-520.', relevance: 'Addison\'s 完整參考章節' },
  ],
  is_current: true,
  created_at: now,
};

/** 蛋白質流失性腸病 (PLE)，疾病型 */
const contentPLE: NodeContent = {
  id: 'CONTENT-IM-L3-012',
  node_id: 'IM-L3-012',
  version: 2,
  summary: '蛋白質流失性腸病（PLE）這個名字講白就是蛋白從腸道一直漏掉，最後變成低白蛋白血症。犬最常見的根源是腸道淋巴管擴張跟慢性腸炎（IBD/CE）。白蛋白太低之後麻煩會接著來：腹水、胸水、血栓栓塞都可能跑出來。',
  learning_objectives: [
    '列舉犬 PLE 的主要病因並說明各自的病理機轉',
    '區分 PLE 與蛋白質流失性腎病（PLN）的診斷策略',
    '解釋腸道淋巴管擴張的病理生理與飲食管理原則',
    '說明 PLE 合併低白蛋白血症時的併發症管理（血栓預防、體腔積液）',
    '制定 PLE 的分級治療方案',
  ],
  key_points: [
    'PLE 的定義：腸道蛋白質流失 → 低白蛋白血症（Albumin < 2.0 g/dL）',
    '最常見病因：腸道淋巴管擴張（lymphangiectasia）和慢性發炎性腸病（IBD/CE）',
    '好發品種：Yorkshire Terrier、Soft-Coated Wheaten Terrier、Rottweiler、Norwegian Lundehund',
    '確診需要腸道組織切片（內視鏡或全層外科切片）',
    'Albumin < 1.5 g/dL 時血栓栓塞風險明顯增加，需啟動抗血栓治療',
    '飲食管理：淋巴管擴張需超低脂飲食；IBD 型 PLE 需水解蛋白或新型蛋白飲食',
    '低離子鈣（ionized calcium）是常見但易被忽略的併發症',
    '近期實證（Myers 2023）：超低脂飲食單一療法可緩解相當比例 PLE→飲食優先、免疫抑制保留給飲食無反應者，別反射性上類固醇',
  ],
  body: `# 蛋白質流失性腸病 (Protein-Losing Enteropathy, PLE)

## 一、病理機制 (Pathophysiology)

三大機轉路徑：

1. 炎症性蛋白流失：慢性腸道炎症（IBD/淋巴漿細胞性腸炎）→黏膜屏障完整性破壞→血漿蛋白滲漏至腸腔→白蛋白 + 球蛋白同時流失 (panhypoproteinemia)

2. 淋巴管擴張 (Lymphangiectasia)：原發性（先天性淋巴管發育異常）或繼發性（慢性炎症→淋巴管阻塞）→富含蛋白的淋巴液滲入腸腔→同時流失白蛋白、球蛋白、淋巴球、抗凝血因子

3. 腫瘤性：腸道淋巴瘤或腺癌→黏膜破壞/淋巴回流阻塞→蛋白流失

[圖片:PLE three mechanisms，mucosal inflammation vs lymphangiectasia vs neoplastic disruption]

關鍵後果：
- 低白蛋白血症→膠體滲透壓↓→腹水/胸水/周邊水腫
- 抗凝血酶 III (AT-III) 流失→高凝血狀態→血栓栓塞風險極高
- 25(OH)D + Vitamin D 結合蛋白流失→ionized calcium↓→肌肉震顫/癲癇
- 淋巴球流失→細胞免疫功能↓

## 二、臨床表現與診斷 (Clinical Signs & Diagnosis)

| 臨床表現 | 頻率 | 特徵 |
|---------|------|------|
| 慢性小腸型下痢 | 常見 | 大量、水樣、體重↓ |
| 體重減輕/消瘦 | 常見 | 嚴重肌肉流失 |
| 腹水/周邊水腫 | 中等 | Alb <2.0 時出現 |
| 嘔吐 | 變異大 | 非必要表現 |
| 呼吸困難 | 少見 | 胸水所致 |
| 血栓栓塞 | 少見但致命 | AT-III 流失 |

### 診斷特徵

| 指標 | 典型結果 | 臨床意義 |
|------|---------|---------|
| Albumin + Globulin | 同時降低 | PLE 特徵（肝病多僅 Alb↓） |
| 淋巴球計數 | 降低 | 腸道淋巴球流失 |
| 膽固醇 | 降低 | 吸收不良 |
| Cobalamin (B12) | 常降低 | 迴腸吸收不良（獨立預後因子） |
| 腹部超音波 | 腸壁增厚 + 黏膜下高迴音條紋 | 條紋提示淋巴管擴張 |

確診：內視鏡 + 多部位組織病理（十二指腸、空腸、迴腸、結腸）。可見淋巴漿細胞浸潤 ± 乳糜管擴張 (dilated lacteals)。

## 三、治療策略 (Treatment)

### 分層治療

| 治療層級 | 措施 | 適應症 |
|---------|------|--------|
| 飲食 | 超低脂飲食 (<15% DM fat) + MCT oil | 所有 PLE，尤其淋巴管擴張 |
| 免疫抑制一線 | [藥物:Prednisolone] 2 mg/kg PO SID | IBD 相關 PLE |
| 免疫抑制二線 | [藥物:Chlorambucil] 4-6 mg/m2 PO q48h | 類固醇反應不佳 |
| 免疫抑制替代 | [藥物:Mycophenolate] 10 mg/kg PO BID | 難治性 |
| 營養補充 | [藥物:Cobalamin] 250-1500 μg SC q1-2wk | 所有 PLE |
| 抗血栓 | [藥物:Clopidogrel] 2 mg/kg PO SID | Alb <2.0 |
| 蛋白補充 | FFP 或人血白蛋白 | Alb <1.5 |

超低脂飲食為淋巴管擴張的核心治療，長鏈脂肪酸需經淋巴管吸收，低脂飲食 + MCT oil（中鏈脂肪酸直接入門脈系統）可明顯減少淋巴漏出。

## 四、併發症與監控 (Complications & Monitoring)

| 併發症 | 機轉 | 監測 | 處理 |
|--------|------|------|------|
| 血栓栓塞 | AT-III 流失→高凝血 | 臨床徵兆/AT-III 活性 | 抗血栓預防 |
| 低鈣血症 | Vit D 結合蛋白流失 | ionized calcium（非 total Ca） | Vit D + Ca 補充 |
| 低鎂血症 | 腸道流失 | 血鎂 | MgSO4 補充 |
| 免疫抑制副作用 | 長期類固醇/Chlorambucil | CBC/肝指數 | 最低有效劑量 |

監測：每 1-2 週 Albumin（初期）；每 4-8 週 Alb/Cobalamin/體重（PLE 穩定後）；CCECAI 評分定期評估。

## 五、預後與預後因子 (Prognosis)

| PLE 亞型 | 預後 | 中位存活 |
|----------|------|---------|
| 食物反應性 | 最佳 | 長期緩解 >80% |
| 淋巴管擴張（飲食控制） | 良好 | 穩定管理下數年 |
| IBD 相關（Alb >2.0 恢復） | 中等 | 1-2+ 年 |
| IBD 相關（Alb 持續 <1.5） | 不良 | 2-5 個月 |
| 貓腸道淋巴瘤 | 不良 | 3-9 個月（化療） |

負面預後因子：CCECAI >12、Alb 持續 <1.5、Cobalamin 未補充、Yorkshire Terrier 品種。

飼主溝通：PLE 嚴重度差異大，部分可長期控制。飲食管理極為關鍵（嚴格低脂）。定期追蹤白蛋白。

## 六、人醫借鑑 (Translational Insights)

- 人醫 intestinal lymphangiectasia (Waldmann disease) 的超低脂飲食 + MCT 策略直接適用
- 人醫的靜脈血栓預防策略（低分子量 heparin）在獸醫 PLE 可借鑑
- 人醫 IBD 生物製劑（anti-TNF-α）在獸醫尚未廣泛應用

## 七、臨床爭議與知識空缺 (Controversies & Knowledge Gaps)

| 爭議主題 | 目前立場 | 證據等級 | 研究方向 |
|---------|---------|---------|---------|
| 最佳飲食脂肪上限 | <15% DM 為常用 | Level II-III | 個別化脂肪耐受度？ |
| Cobalamin 口服 vs 注射 | 兩者可能等效 | Level II | 口服高劑量的 PLE 特異性研究 |
| 抗血栓何時開始 | Alb <2.0 建議開始 | Level III | 最佳介入閾值？AT-III 導向？ |
| 全層切片 vs 內視鏡切片 | 內視鏡為首選，全層用於不確定時 | Level III | 各自 miss rate？ |
| Budesonide vs Prednisolone | Budesonide 全身副作用較少 | Level II | PLE 中兩者等效性？ |

## 八、近期實證更新 (Recent Evidence Update)

**「PLE = 一律類固醇」的反射動作該改了——飲食優先（Myers et al 2023, JAAHA 前瞻性研究）**
傳統一看到 PLE 就上免疫抑制，但近年前瞻證據顯示：**相當比例的 PLE 犬光靠超低脂飲食單一療法（diet monotherapy）就能臨床緩解、白蛋白回升**，不需類固醇。實務修正：
- **先嚴格飲食試驗**（淋巴管擴張→超低脂±MCT；疑 IBD 型→水解/新型蛋白），同時**低白蛋白就先把抗血栓做起來**。
- **免疫抑制保留給「飲食無反應或組織學確認發炎」**的病例——不是每個 IBD 相關 PLE 都要一上來就壓免疫。
- 「嚴格」是成敗關鍵：零食、餐桌食物、高脂藥物載體都會破功。

**別漏掉的兩件事**：① **ionized calcium**（非 total Ca）——低白蛋白會把 total Ca 拉假低，真正缺的是離子鈣，會抽搐/癲癇；② **cobalamin**——PLE 常缺、是獨立壞預後因子，口服高劑量近年證據顯示與注射相近（Chang 2022），務必補。

**抗血栓是標準配備（呼應 2019 ACVIM CURATIVE 邏輯）**：PLE 是高凝狀態（AT-III 隨蛋白流失），Alb <2.0 即開 clopidogrel，肺栓塞是重要死因。

【台灣落地】台灣約克夏等小型犬 PLE 常見；先把飲食做到位（嚴格低脂）＋抗血栓＋補 cobalamin，再決定要不要免疫抑制。內視鏡切片台灣可做，但淋巴管擴張可能需全層切片才抓得到。`,
  clinical_pearl: '在 PLE 犬中，ionized calcium 低下是一個常被忽略但臨床上極為重要的併發症。PLE 導致 Vitamin D 結合蛋白和白蛋白流失 → 25(OH)D 和 ionized calcium 均降低 → 可導致肌肉震顫、癲癇發作。不要僅看 total calcium，它會因低白蛋白而偽低；必須測量 ionized calcium。另外，Yorkshire Terrier 若出現低蛋白腹水，PLE 合併淋巴管擴張幾乎是第一鑑別。\n\n【台灣流行病學】蛋白質流失性腸病在台灣小型犬中並不罕見，約克夏梗是台灣最具代表性的 PLE 好發品種，常合併淋巴管擴張。台灣本土飼養的軟毛麥色梗雖少，但臨床上其他小型犬（如馬爾濟斯、吉娃娃）亦有 PLE 報告。台灣獸醫院多具備消化道內視鏡與黏膜切片能力，但全層切片仍需外科配合。低白蛋白犬在台灣亞熱帶環境下的血栓風險管理需特別留意。',
  common_mistakes: [
    '未排除 PLN 就診斷 PLE（必須先測 UPC ratio）',
    '僅用內視鏡切片而錯過淋巴管擴張（全層切片敏感度更高）',
    '忽略 ionized calcium 監測（僅看 total calcium 會被低白蛋白干擾）',
    'Albumin < 1.5 g/dL 未啟動抗血栓治療（血栓栓塞是重要死因）',
    '淋巴管擴張型 PLE 使用高脂飲食（需超低脂飲食 + MCT oil）',
  ],
  disease_data: {
    signalment: '好發品種：Yorkshire Terrier（淋巴管擴張）、Soft-Coated Wheaten Terrier（PLE + PLN 複合症）、Rottweiler、Norwegian Lundehund、Basenji、Shar-Pei。中年犬為主（3-8 歲），無明顯性別偏好。',
    etiology: '腸道淋巴管擴張（原發性或繼發性）為最常見原因。慢性發炎性腸病（lymphocytic-plasmacytic enteritis 為主）。腸道淋巴瘤（尤其 T-cell）。肉芽腫性腸炎（黴菌性：Histoplasma, Pythium）。組織球性潰瘍性結腸炎（Boxer）。',
    pathogenesis: '淋巴管擴張：淋巴引流受阻或先天性異常 → 腸道淋巴管擴張、破裂 → 富含蛋白的淋巴液滲入腸腔 → 白蛋白、球蛋白、淋巴球均流失。IBD 型：腸道黏膜慢性發炎 → 通透性增加 → 蛋白質選擇性或非選擇性滲漏。共同結果：低白蛋白血症 → 膠體滲透壓下降 → 體腔積液（腹水、胸水）。同時 Antithrombin III 流失 → 高凝血狀態 → 血栓栓塞風險。',
    clinical_signs: [
      { sign: '慢性腹瀉', category: 'primary', description: '小腸型為主（量多、水樣），可為間歇性' },
      { sign: '體重減輕', category: 'primary', description: '蛋白質和營養流失，肌肉消耗' },
      { sign: '腹水/皮下水腫', category: 'primary', description: 'Albumin < 1.5 g/dL 時常見，漏出液' },
      { sign: '嘔吐', category: 'secondary', description: '約 40-50% 病例' },
      { sign: '呼吸困難', category: 'secondary', description: '胸水或肺血栓栓塞' },
      { sign: '肌肉震顫/癲癇', category: 'secondary', description: '低離子鈣（ionized calcium）所致' },
    ],
    staging: null,
    differential_diagnosis: [
      { condition: '蛋白質流失性腎病（PLN）', key_differentiator: 'UPC ratio > 2.0，白蛋白低但球蛋白通常正常（選擇性蛋白尿）' },
      { condition: '肝臟合成不足', key_differentiator: '膽汁酸升高、肝指數異常、超音波肝臟異常（小肝、微血管發育不良等）' },
      { condition: '右心衰竭', key_differentiator: '心臟超音波異常、頸靜脈怒張、肝臟鬱血' },
      { condition: '腸道淋巴瘤', key_differentiator: '可為 PLE 的病因之一，內視鏡或外科切片 + 免疫組織化學可鑑別（T-cell vs B-cell）' },
      { condition: '外分泌胰臟機能不全（EPI）', key_differentiator: 'TLI 低、體重減輕但低蛋白血症不如 PLE 明顯' },
    ],
    diagnostic_workup: '1. CBC/生化全套（Albumin、Globulin、Cholesterol、Calcium、淋巴球計數）→ 2. UPC ratio（排除 PLN）→ 3. 膽汁酸（排除肝臟合成不足）→ 4. 腹腔超音波（腸壁厚度、分層、淋巴結、腹水）→ 5. Ionized calcium 測量 → 6. 腸道組織學確診：內視鏡多部位切片 或 全層外科切片（淋巴管擴張需全層切片）→ 7. 免疫組織化學（排除淋巴瘤）→ 8. Cobalamin（Vitamin B12）和 Folate 測量',
    treatment_protocol: '飲食管理（核心）：淋巴管擴張型需超低脂飲食（脂肪 < 10% DM）+ MCT oil；IBD 型需水解蛋白或新型蛋白飲食。藥物治療（一般照護）：Prednisolone 1-2 mg/kg PO SID（嚴重病例可暫時 BID），8-12 週漸減 + Cobalamin（B12）補充 250-1500 μg SC q1wk × 6 → q2wk × 6 → q1mo。專科照護：Chlorambucil 4-6 mg/m² PO q48h（二線免疫抑制），或 Mycophenolate 10 mg/kg PO BID，或 Cyclosporine 5 mg/kg PO BID。併發症管理：Albumin < 1.5 g/dL → Clopidogrel 2 mg/kg PO SID 抗血栓。低 ionized calcium → Calcitriol 20-30 ng/kg/day PO + Calcium carbonate。嚴重低白蛋白 → Fresh frozen plasma 或 human albumin 25%（慎用）。',
    prognosis: '預後好不好，看是哪一型 PLE，也看治療有沒有反應。單純淋巴管擴張只要飲食控制有效，中位存活可以超過 2 年。IBD 型 PLE 對免疫抑制反應好的，預後中等到不錯。腸道淋巴瘤型那一群最辛苦，中位存活只有 3-6 個月。不良預後指標：Albumin 掉到 1.0 g/dL 以下、體腔積液、血栓栓塞事件、對治療完全沒反應。',
    monitoring: '確診後每 2-4 週追蹤 Albumin、體重、糞便品質。穩定後每 2-3 個月追蹤。監測 ionized calcium（每月至穩定）。使用免疫抑制劑時監測 CBC（Chlorambucil 骨髓抑制）。Cobalamin 補充後追蹤血清濃度。長期監測體腔積液和血栓徵兆。',
    owner_communication: 'PLE 是長期抗戰。飲食是這場仗的地基，處方飲食請嚴格守住，高脂零食、餐桌食物都先別給。每隔一段時間要回診抽蛋白指數。有些病患還要長期吃免疫抑制劑。當白蛋白很低的時候會有血栓風險，這時候會幫你的狗加抗凝血藥。整體來看，多數犬只要好好控制，可以維持還不錯的生活品質。',
  },
  diagnostic_data: null,
  procedure_data: null,
  visual_placeholders: [
    { position: '診斷策略段落後', type: 'flowchart', description: 'PLE 診斷排除流程圖（PLE vs PLN vs 肝臟合成不足）' },
    { position: '治療策略段落後', type: 'comparison_table', description: '淋巴管擴張型 vs IBD 型 PLE 治療比較表' },
  ],
  interactive_placeholders: [],
  drug_api_links: ['Prednisolone', 'Chlorambucil', 'Mycophenolate', 'Cyclosporine', 'Clopidogrel', 'Calcitriol', 'Cobalamin'],
  references: [
    { type: 'journal', citation: 'Myers M, Martinez SA, Shiroma JT, Watson AT. "Prospective Evaluation of Low-Fat Diet Monotherapy in Dogs with Presumptive Protein-Losing Enteropathy." J Am Anim Hosp Assoc. 2023;59(2):74-84. doi:10.5326/jaaha-ms-7248', relevance: '近期前瞻：超低脂飲食單一療法可緩解 PLE（飲食優先）' },
    { type: 'journal', citation: 'Craven MD, Washabau RJ. "Comparative pathophysiology and management of protein-losing enteropathy." J Vet Intern Med. 2019;33(2):383-402. doi:10.1111/jvim.15406', relevance: 'PLE 病理生理與管理綜合回顧' },
    { type: 'journal', citation: 'Nakashima K, Hiyoshi S, Ohno K, Uchida K, et al. "Prognostic factors in dogs with protein-losing enteropathy." Vet J. 2015;205(1):28-32. doi:10.1016/j.tvjl.2015.05.001', relevance: 'PLE 預後因子分析（修正 v1 誤標 JVIM）' },
    { type: 'journal', citation: 'Dossin O, Lavoué R. "Protein-Losing Enteropathies in Dogs." Vet Clin North Am Small Anim Pract. 2011;41(2):399-418. doi:10.1016/j.cvsm.2011.02.002', relevance: 'PLE 診斷與治療策略' },
    { type: 'guideline', citation: 'Washabau RJ, Day MJ, Willard MD, et al. "Endoscopic, Biopsy, and Histopathologic Guidelines for the Evaluation of Gastrointestinal Inflammation in Companion Animals." J Vet Intern Med. 2010;24(1):10-26. doi:10.1111/j.1939-1676.2009.0443.x', relevance: 'GI 炎症評估與切片指引' },
    { type: 'textbook', citation: 'Washabau RJ, Day MJ. Canine and Feline Gastroenterology. Elsevier, 2013.', relevance: '消化系統疾病基礎教材' },
  ],
  is_current: true,
  created_at: now,
};

/** 犬腎上腺皮質機能亢進（Cushing's）， 疾病型 */
const contentCushings: NodeContent = {
  id: 'CONTENT-IM-L3-001',
  node_id: 'IM-L3-001',
  version: 2,
  summary: '犬腎上腺皮質機能亢進（Cushing 症候群）是犬最常見的內分泌疾病之一，原因說起來簡單，就是身體長期被太多 cortisol 泡著。其中 80-85% 來自腦下垂體（PDH），15-20% 來自腎上腺腫瘤（ADH）。ACVIM 共識建議篩檢用 LDDST，治療之後追蹤再回去用 ACTH stimulation test。藥物選擇上，Trilostane 是現在的首選。',
  learning_objectives: [
    '區分腦下垂體依賴型（PDH）與腎上腺腫瘤型（ADH）的病因、診斷與治療差異',
    '正確選擇並判讀 Cushing 的篩檢與鑑別試驗（LDDST、UCCR、ACTH stim、HDDST）',
    '制定 Trilostane 治療方案並運用 ACTH stimulation test 監測療效',
    '辨識醫源性 Cushing 的臨床特徵與處理方式',
    '說明 Cushing 的皮膚科與其他系統共病',
  ],
  key_points: [
    'PDH（80-85%）：腦下垂體 ACTH 腺瘤 → 雙側腎上腺增生；ADH（15-20%）：單側腎上腺腫瘤自主分泌 cortisol',
    '經典臨床表現：PU/PD、多食、腹部膨大（壺腹腹）、皮膚薄化、對稱性脫毛、鈣質沉著',
    'LDDST 敏感度 > 95%（最佳篩檢）；UCCR 敏感度高但特異度低（最佳排除工具）',
    'ACTH stimulation test 敏感度較低（~80%）但為監測 Trilostane 治療的標準工具',
    'Trilostane 起始劑量 1-2 mg/kg PO SID-BID，10-14 天後 ACTH stim test 評估',
    'ALP 升高（犬特有的 steroid-induced ALP isoenzyme）見於 > 90% Cushing 犬',
    '皮膚科共病：反覆膿皮症、蠕形蟎症、鈣質沉著症',
  ],
  body: `# 犬腎上腺皮質機能亢進 (Hyperadrenocorticism / Cushing's Syndrome)

## 一、病理機制 (Pathophysiology)

PDH（Pituitary-Dependent HAC，約 85%）：腦下垂體前葉長了個 ACTH 分泌微腺瘤（少數會是大腺瘤），ACTH 一直噴，雙側腎上腺皮質就跟著代償性增生，cortisol 就一直多。下視丘-垂體-腎上腺軸的負回饋整個失效。

ADH（Adrenal-Dependent HAC，約 15%）：腎上腺自己長腫瘤，一半是腺瘤、一半是腺癌。腫瘤自主分泌 cortisol，ACTH 反過來被壓住，另一邊腎上腺就萎縮掉了。

Cortisol 一直過量會搞出一堆問題。蛋白質一直被分解，肌肉萎縮、皮膚變薄、韌帶脆弱。肝醣合成跟脂肪重新分布讓肚子變得像壺腹一樣鼓（pot-bellied），加上肝腫大（類固醇性肝病）。免疫被壓住，UTI 跟皮膚感染一直跑。高凝血狀態讓肺動脈栓塞變成主要死因之一。最後 ADH 被抑制，就會多渴多尿。

[圖片:HPA axis in PDH vs ADH，feedback loop disruption diagram]

醫源性 Cushing's：長期外源性類固醇→與內源性 Cushing's 臨床表現相同，但 ACTH stim test 反應被抑制。

## 二、臨床表現與診斷 (Clinical Signs & Diagnosis)

| 臨床表現 | 頻率 | 特徵 |
|---------|------|------|
| 多渴多尿 (PU/PD) | >80% | 最常見首發症狀 |
| 多食 | >80% | 類固醇效應 |
| 壺腹狀腹 | ~80% | 肝腫大 + 腹肌萎縮 |
| 對稱性脫毛 | ~60% | 軀幹、不癢 |
| 皮膚變薄 | ~50% | 血管明顯 |
| 喘息 (panting) | ~50% | 呼吸肌無力 + 脂肪沉積 |
| 皮膚鈣質沉著 | ~10% | calcinosis cutis，高度特異 |

### 診斷三步驟

Step 1：篩檢（確認 cortisol 過量）

| 檢測 | 敏感度 | 特異度 | 建議用途 |
|------|--------|--------|---------|
| UCCR | >90% | 低 (~20%) | 排除用（陰性排除 HAC） |
| LDDST | ~95% | ~70% | 確認用（首選篩檢） |
| ACTH stim | ~80% | ~85% | 醫源性 HAC 唯一檢測 |

Step 2：鑑別（PDH vs ADH）
- 腹部超音波：PDH→雙側腎上腺增大；ADH→單側腫瘤 + 對側萎縮
- 內源性 ACTH：PDH→正常/升高；ADH→被抑制 (<5 pg/mL)
- HDDS：約 75% PDH 有抑制；ADH 無抑制

Step 3：大腺瘤評估
- 腦下垂體 MRI（>1 cm 為大腺瘤，可能有神經症狀）

### 特徵性血檢

| 指標 | 典型變化 | 備註 |
|------|---------|------|
| ALP | 明顯升高 (steroid-induced isoenzyme) | 敏感度 >90%，最早出現 |
| ALT | 輕-中度升高 | 類固醇性肝病 |
| 膽固醇/TG | 升高 | 脂質代謝異常 |
| USG | < 1.020 | PU/PD 所致 |
| Stress leukogram | 嗜中性球↑淋巴球↓嗜酸球↓ | 典型但非特異 |

## 三、治療策略 (Treatment)

### PDH 藥物治療

| 藥物 | 劑量 | 監測 | 證據等級 |
|------|------|------|---------|
| [藥物:Trilostane] (Vetoryl) 首選 | 1-2 mg/kg PO SID 與食物 | 4-6hr post-pill ACTH stim（目標 post 1.5-5.4 μg/dL） | Level I |
| [藥物:Mitotane] (o,p'-DDD) | Loading 25-50 mg/kg/d ×7-10d | 每日 ACTH stim 監測 | Level II |

### ADH 治療
- 腎上腺腺瘤：腎上腺切除術（術後需暫時補充 glucocorticoid + mineralocorticoid）
- 腎上腺腺癌：手術 ± Mitotane

### 大腺瘤
- 放射治療 (RT)

## 四、併發症與監控 (Complications & Monitoring)

| 併發症 | 機轉 | 監測 | 處理 |
|--------|------|------|------|
| 肺動脈栓塞 | 高凝血狀態 | 呼吸急促/X光 | 抗凝血 + 氧氣 |
| 醫源性 Addison's | Trilostane 過量 | ACTH stim | 停藥 + 類固醇補充 |
| 糖尿病 | 胰島素阻抗 | 血糖/果糖胺 | 同時管理 |
| 全身性高血壓 | cortisol 效應 | 血壓 | [藥物:Amlodipine] |
| 大腺瘤神經症狀 | 腫瘤壓迫 | 行為/視力 | RT |

Trilostane 監測：首次 ACTH stim 在開始後 10-14 天（給藥後 4-6hr）；穩定後 q3 月。目標 post-ACTH cortisol 1.5-5.4 μg/dL。

## 五、預後與預後因子 (Prognosis)

| 類型 | 治療 | 中位存活 |
|------|------|---------|
| PDH + Trilostane | 藥物 | ~2-2.5 年 |
| ADH 腺瘤 | 手術 | > 3 年 |
| ADH 腺癌 | 手術 ± 化療 | < 1 年 |
| 大腺瘤 | RT ± 藥物 | 較差 |

跟飼主談時：Cushing 是慢性病，治不好但可以管。Trilostane 要定期回診抽血。症狀改善通常需要 1 到 3 個月。

## 六、人醫借鑑 (Translational Insights)

- 人醫 Cushing's 的多學科管理（內分泌科 + 神經外科 + 放射腫瘤科）策略值得借鑑
- 人醫的 midnight salivary cortisol 篩檢概念在獸醫無對應工具
- 人醫已有 pasireotide（somatostatin analogue）用於 Cushing's，獸醫尚未應用
- 人醫術後 adrenal insufficiency 管理策略可直接借鑑

## 七、臨床爭議與知識空缺 (Controversies & Knowledge Gaps)

| 爭議主題 | 目前立場 | 證據等級 | 研究方向 |
|---------|---------|---------|---------|
| Trilostane SID vs BID | SID 起始，BID 用於控制不佳者 | Level II | 最佳給藥頻率？ |
| ACTH stim vs pre-Trilostane cortisol | ACTH stim 為標準，但 pre-pill cortisol 可能有用 | Level III | 最佳監測方法？ |
| 亞臨床 Cushing's 是否治療 | 有爭議 | Level IV | 自然病程追蹤研究 |
| 貓 Cushing's 最佳治療 | Trilostane 為首選但經驗有限 | Level III | 貓特異性劑量研究 |
| 新型藥物 | Cabergoline 輔助 PDH | Level IV | 獸醫臨床試驗進行中 |

## 八、近期實證更新 (Recent Evidence)

- **Trilostane 監測：從「只靠 ACTH stim」走向「臨床症狀＋基礎 cortisol」**：ACTH stim 結果與臨床控制相關性並不完美、且成本高（Wehner 2021）；越來越多中心以**臨床症狀＋pre-trilostane（基礎）cortisol** 監測，ACTH stim 保留給懷疑過度抑制者。多數犬 **BID 給藥**控制較佳（Arenas 2014 於 ADH 顯示 BID trilostane 存活不劣於 mitotane）。
- **警覺醫源性低皮質醇症**：Trilostane 可致醫源性低皮質醇（生化性 hypocortisolemia 不少見，Appleman 2021），但進展到完整 Addisonian crisis/腎上腺壞死則**較少見**；無論如何，**基礎或 post-ACTH cortisol 過低即應減量/停藥**，並教飼主辨識嘔吐/虛弱/厭食的警訊。
- **診斷時效**：2012 ACVIM 共識（Behrend 2013）仍為現行依據；鐵則是**先有臨床症狀再驗**——LDDST 敏感度高但特異度僅 ~70%，**勿在非甲狀腺疾病/壓力下篩檢**（偽陽性）。
- **共病要主動管理**：全身性高血壓、蛋白尿、高凝血狀態（**肺血栓栓塞為主要死因之一**）需主動監測與處置；併發糖尿病者同時管理胰島素阻抗。

> 臨床內容與藥物劑量需獸醫師依現行仿單與指引核對；本節點為 AI 接地生成，停於 review 狀態待 DVM 簽核。`,
  clinical_pearl: 'LDDST 做完 8 小時，如果 cortisol 有被抑制（降到基礎值的一半以下或 < 1.4 μg/dL），那就強烈指向 PDH。但要注意一件事：大約四分之一的 PDH 在 LDDST 上不抑制（對 PDH 來說就是假陰性），偶爾 ADH 反過來也會抑制。所以 LDDST 想拿來做 PDH/ADH 鑑別，只有「抑制」這個結果才能用。沒抑制就不能下結論，要靠超音波或內源性 ACTH 才行。另外提一個重點，犬的 ALP 裡有一種 steroid-induced isoenzyme，敏感度超過 90%，是最早跑出來的血檢異常。\n\n【台灣流行病學】Cushing 在台灣的小動物門診是常見的內分泌病，好發在中老年小型犬，貴賓犬、臘腸犬、馬爾濟斯這些常見品種都跑不掉。台灣的獸醫院多半可以做 ACTH stimulation test 和 LDDST，Trilostane 是主要治療藥物。亞熱帶氣候下犬隻皮膚問題本來就多，慢性皮膚病的鑑別診斷請把 Cushing 放進去考慮。',
  common_mistakes: [
    '在非傳染性疾病（NTI, non-thyroidal illness）狀態下就篩檢 Cushing（高壓力狀態會導致偽陽性）',
    '僅憑 UCCR 升高就診斷 Cushing（UCCR 特異度低，任何壓力/疾病都可升高）',
    'Trilostane 治療後未在正確時間點做 ACTH stim test（必須在給藥後 4-6 小時）',
    '忽略腦下垂體大腺瘤的神經症狀（多達 25% PDH 有大腺瘤）',
    '誤將醫源性 Cushing 的低皮質醇結果解讀為 Addison（需詢問外源性類固醇使用史）',
  ],
  disease_data: {
    signalment: '中老年犬（平均 10-12 歲）。小型犬品種如貴賓、臘腸、波士頓梗、Beagle、Boxer 好發。PDH 無明顯性別差異；ADH 雌性略多。醫源性 Cushing 可見於任何品種和年齡。',
    etiology: 'PDH（80-85%）：腦下垂體 ACTH 腺瘤，多為微腺瘤。ADH（15-20%）：腎上腺皮質腺瘤（50%）或腺癌（50%），單側。醫源性：長期外源性糖皮質素使用（口服、注射、外用、眼藥水均可）。罕見：異位 ACTH 分泌（犬極罕見）。',
    pathogenesis: 'PDH：腦下垂體 ACTH 腺瘤喪失正常負回饋抑制 → ACTH 持續過度分泌 → 雙側腎上腺增生 → Cortisol 持續高。ADH：腎上腺腫瘤自主分泌 Cortisol → 負回饋抑制 ACTH → 對側腎上腺萎縮。Cortisol 過量效應：蛋白質分解代謝增加（肌肉消耗、皮膚薄化）→ 脂肪重新分布（腹部脂肪堆積）→ 肝臟糖質新生增加（高血糖）→ 免疫抑制（易感染）→ 抗利尿激素抑制（PU/PD）。',
    clinical_signs: [
      { sign: '多渴多尿 (PU/PD)', category: 'primary', description: '約 80-90% 病例，Cortisol 抑制 ADH 分泌' },
      { sign: '多食 (polyphagia)', category: 'primary', description: '約 80-90%，Cortisol 的中樞食慾促進效果' },
      { sign: '腹部膨大（壺腹腹）', category: 'primary', description: '肝臟腫大 + 腹壁肌肉萎縮 + 脂肪重新分布' },
      { sign: '對稱性脫毛', category: 'primary', description: '軀幹對稱性非搔癢性脫毛，保留頭部和四肢末端' },
      { sign: '皮膚薄化', category: 'secondary', description: '真皮膠原蛋白分解，血管清晰可見' },
      { sign: '鈣質沉著（calcinosis cutis）', category: 'secondary', description: '病理性特徵，Cushing 高度特異性皮膚表現' },
      { sign: '喘息 (panting)', category: 'secondary', description: '呼吸肌無力 + 腹部脂肪壓迫 + 肺血栓' },
      { sign: '反覆泌尿道感染', category: 'secondary', description: '免疫抑制 + 稀釋尿 → 細菌容易繁殖' },
    ],
    staging: null,
    differential_diagnosis: [
      { condition: '糖尿病', key_differentiator: '持續性高血糖（> 200 mg/dL）和糖尿；Cushing 約 10% 併發 DM，兩者可共存' },
      { condition: '犬甲狀腺機能低下', key_differentiator: '甲低也可有脫毛，但伴隨肥胖、嗜睡、心搏過緩（Cushing 多食、喘息、PU/PD 為主）' },
      { condition: '肝臟疾病', key_differentiator: 'ALP 升高可見於原發性肝病，但 Cushing 的 ALP 以 steroid-induced isoenzyme 為主' },
      { condition: '醫源性 Cushing', key_differentiator: '詳細藥物史（包括外用製劑）即可鑑別，ACTH stim test 低值' },
      { condition: '非典型 Addison 或腎上腺性激素異常', key_differentiator: '皮膚症狀類似但 cortisol 正常，需測腎上腺性激素 panel' },
    ],
    diagnostic_workup: '1. 基礎血檢：CBC（stress leukogram：嗜中性球升高、淋巴球低下、嗜酸性球低下）、生化（ALP 明顯升高、ALT 輕度升高、高膽固醇、高三酸甘油酯、低 BUN）→ 2. 尿液分析（USG < 1.020、可能有糖尿和 UTI）→ 3. 篩檢試驗：LDDST（首選）或 UCCR（排除用）→ 4. 鑑別 PDH vs ADH：腹腔超音波（雙側增大 = PDH、單側腫塊 = ADH）+ 內源性 ACTH 或 HDDST → 5. PDH 大腺瘤評估：腦部 MRI/CT → 6. ADH 轉移評估：胸腔 X 光',
    treatment_protocol: '一般照護用 Trilostane（首選藥物）：起始 1-2 mg/kg PO SID 餐後，10-14 天後做 ACTH stimulation test（給藥後 4-6 小時），目標 post-ACTH cortisol 1.45-5.4 μg/dL，穩定後每 3 個月追蹤 ACTH stim test + 電解質。專科照護路線：腎上腺切除術是 ADH 首選的治癒性手術（術前可能要用 Trilostane 或 phenoxybenzamine 準備好，遇到要鑑別嗜鉻細胞瘤的情況也是）。腦下垂體切除術或放射治療用在 PDH 大腺瘤合併神經症狀的時候。Mitotane 留作二線，Trilostane 沒效或不耐受才考慮，治療期間 cortisol 和電解質要盯得很緊。',
    prognosis: 'PDH 經 Trilostane 治療中位存活 662-900 天（約 2-2.5 年），多數犬生活品質明顯改善。ADH 腺瘤手術後預後佳（中位存活 > 36 個月）。ADH 腺癌轉移者預後差（中位存活 12-18 個月）。未治療的 Cushing 犬因併發症（肺栓塞、UTI、DM、高血壓）預後較差。醫源性 Cushing 停藥後多數可逆。',
    monitoring: 'Trilostane 開始後追蹤節奏：10-14 天、4 週、8 週、12 週，之後每 3 個月一次。每次追蹤都要做 ACTH stimulation test（給藥後 4-6 小時）加電解質加臨床評估。Trilostane 有腎上腺壞死的風險（Addisonian crisis），所以一定要教飼主辨識警訊：吐了、軟掉、不吃東西就要馬上回診。',
    owner_communication: 'Cushing 通常治不好，但可以管。Trilostane 每天要準時餵，定期回診抽血也跑不掉。吃藥之後，多渴多尿和皮膚的問題會慢慢退，這個要有耐心，幾週到幾個月都有可能。最重要的一件事：藥不能說停就停。狗如果突然開始吐、不吃、整隻軟掉，請馬上回診（很可能是藥把腎上腺壓得太低了）。',
  },
  diagnostic_data: null,
  procedure_data: null,
  visual_placeholders: [
    { position: '診斷策略篩檢試驗表後', type: 'flowchart', description: 'Cushing 診斷決策流程圖（篩檢 → 鑑別 PDH vs ADH）' },
    { position: '治療方案段落後', type: 'comparison_table', description: 'Trilostane vs Mitotane 比較表' },
  ],
  interactive_placeholders: [
    { position: '診斷策略段落', type: 'interactive_staging', description: '輸入 LDDST/ACTH stim 數值自動判讀結果' },
  ],
  drug_api_links: ['Trilostane', 'Mitotane', 'Prednisolone', 'Dexamethasone'],
  references: [
    { type: 'guideline', citation: 'Behrend EN, Kooistra HS, et al. "Diagnosis of Spontaneous Canine Hyperadrenocorticism: 2012 ACVIM Consensus Statement (Small Animal)." J Vet Intern Med. 2013;27(6):1292-1304. doi:10.1111/jvim.12192', relevance: 'Cushing 診斷現行 ACVIM 共識' },
    { type: 'textbook', citation: 'Feldman EC, Nelson RW, Reusch C, Scott-Moncrieff JC. Canine and Feline Endocrinology, 4th ed. Elsevier, 2015. Chapter on Hyperadrenocorticism.', relevance: 'Cushing 病理生理與治療完整參考教材' },
    { type: 'journal', citation: 'Ramsey IK. "Trilostane in Dogs." Vet Clin North Am Small Anim Pract. 2010;40(2):269-283. doi:10.1016/j.cvsm.2009.10.008', relevance: 'Trilostane 治療實務回顧' },
    { type: 'journal', citation: 'Arenas C, Melián C, et al. "Long-Term Survival of Dogs with Adrenal-Dependent Hyperadrenocorticism: a comparison between mitotane and twice daily trilostane." J Vet Intern Med. 2014;28(2):473-480. doi:10.1111/jvim.12303', relevance: 'ADH 治療預後比較（BID trilostane vs mitotane）' },
    { type: 'journal', citation: 'Wehner A, Glöckner S, Weiss B, Ballhausen D. "Association between ACTH stimulation test results and clinical signs in dogs with hyperadrenocorticism treated with trilostane." Vet J. 2021;276:105740. doi:10.1016/j.tvjl.2021.105740', relevance: 'Trilostane 監測：ACTH stim 與臨床控制相關性不完美（近期）' },
    { type: 'journal', citation: 'Appleman E, Schrage A, Lamb KE, Langston C. "Evaluation of Iatrogenic Hypocortisolemia Following Trilostane Therapy in 48 Dogs with Pituitary-Dependent Hyperadrenocorticism." J Am Anim Hosp Assoc. 2021;57(5):217-224. doi:10.5326/jaaha-ms-7076', relevance: 'Trilostane 醫源性低皮質醇症風險（近期）' },
  ],
  is_current: true,
  created_at: now,
};

/** 犬甲狀腺機能低下，疾病型 */
const contentHypothyroidism: NodeContent = {
  id: 'CONTENT-IM-L3-002',
  node_id: 'IM-L3-002',
  version: 2,
  summary: '犬甲狀腺機能低下是犬最常見的內分泌病，T4/T3 不夠分泌，全身代謝率掉下來。95% 是原發性，要嘛淋巴球性甲狀腺炎、要嘛特發性萎縮。光看驗血數字不能下診斷，必須臨床配檢驗一起看。治療標準用 Levothyroxine（L-T4）。',
  learning_objectives: [
    '說明犬甲狀腺機能低下的病因分類（原發性 vs 繼發性 vs 先天性）',
    '辨識甲狀腺機能低下的多系統臨床表現（代謝、皮膚、神經、心血管、生殖）',
    '正確判讀甲狀腺功能檢測並避免「euthyroid sick syndrome」的診斷陷阱',
    '制定 Levothyroxine 的起始劑量、監測與調整計畫',
    '說明甲低與其他內分泌疾病（Cushing、DM）的共病關係',
  ],
  key_points: [
    '原發性甲低（~95%）：淋巴球性甲狀腺炎（~50%）+ 特發性萎縮（~50%）',
    '好發品種：Golden Retriever、Labrador、Doberman、Dachshund、Cocker Spaniel、Irish Setter',
    '經典臨床表現：代謝率下降（嗜睡、體重增加、不耐冷）+ 皮膚（對稱性非搔癢性脫毛、「tragic face」、鼠尾）',
    'Total T4 低 + TSH 高 = 典型甲低；T4 低 + TSH 正常 = 可能是「euthyroid sick syndrome」',
    'Free T4 by equilibrium dialysis (fT4ED) 是最不受非甲狀腺疾病干擾的指標',
    'Levothyroxine 起始 0.02 mg/kg PO BID，4-8 週後檢測 post-pill T4（給藥後 4-6 小時）',
    '神經肌肉併發症：面神經麻痺、前庭症候群、megaesophagus（較少見）',
    '最新實證（Bennaim 2022, Res Vet Sci）：類比法 fT4（fT4a）受 NTI 影響大、與 TT4 高度一致而鑑別甲低助益有限；平衡透析法 fT4ED 較穩健（低 TT4 的 NTI 犬中 43% vs fT4a 12% 落在正常範圍）但仍非完全免疫於 NTI',
  ],
  body: `# 犬甲狀腺機能低下 (Canine Hypothyroidism)

## 一、病理機制 (Pathophysiology)

整個機轉跑起來的時候是這樣：免疫介導性甲狀腺破壞（淋巴球性甲狀腺炎 ~50%，CD8+ T 細胞 + 抗甲狀腺球蛋白抗體 TgAA 攻擊甲狀腺濾泡細胞）或特發性甲狀腺萎縮 (~50%)→甲狀腺組織漸進性破壞（需 >75% 組織喪失才出現臨床症狀）→T4/T3 合成不足→負回饋消除→TSH 代償性升高→殘餘組織過度刺激→最終完全耗竭

[圖片:Hypothyroidism pathophysiology，lymphocytic thyroiditis vs idiopathic atrophy → progressive thyroid destruction → T4/T3 deficiency]

95% 為原發性（甲狀腺本身病變）；繼發性（垂體 TSH 缺乏）和三級（下視丘 TRH 缺乏）極罕見。

T4/T3 不夠的時候，全身會跑出一連串症狀。基礎代謝掉下來，狗就嗜睡、體重一直增加、變得不耐冷。皮膚這邊，表皮更新慢，角化會亂掉，再加上黏液水腫（myxedema），glycosaminoglycan 沉積到真皮裡，就變成大家在說的 tragic face。脂質代謝也亂，LDL 清不掉，高膽固醇血症跟著來，少數會看到角膜脂質弧，動脈粥狀硬化在犬罕見。神經肌肉這邊比較棘手：Schwann cell 代謝異常會脫髓鞘，面神經麻痺、前庭症候群、megaesophagus 都可能跑出來。心血管的話，心輸出量會下降，心跳會慢一點。

品種易感性：Golden Retriever、Labrador、Doberman、Dachshund、Cocker Spaniel、Irish Setter、Shar-Pei。多數中大型犬，4-10 歲好發。

## 二、臨床表現與診斷 (Clinical Signs & Diagnosis)

### 多系統臨床表現

| 系統 | 臨床表現 | 頻率 | 特徵 |
|------|---------|------|------|
| 代謝 | 嗜睡、體重增加、不耐冷 | >80% | 最早出現 |
| 皮膚 | 對稱性非搔癢性脫毛、鼠尾 (rat tail) | ~60% | 軀幹 + 尾巴 |
| 皮膚 | 「Tragic face」(黏液水腫) | ~10% | 高度特異性 |
| 皮膚 | 復發性膿皮症/外耳炎 | ~30% | 免疫功能↓ |
| 神經 | 面神經麻痺、前庭症候群 | ~5% | 少見但重要 |
| 心血管 | 心搏過緩 | ~15% | 非特異性 |
| 生殖 | 不孕、泌乳異常 | 少見 | 偶見 |

### 診斷策略

老實說，診斷甲低比排除甲低還麻煩。最常見的陷阱就是 Euthyroid Sick Syndrome (ESS)，這個一定要搞懂。

| 檢測 | 結果 | 敏感度 | 特異度 | 備註 |
|------|------|--------|--------|------|
| Total T4 (TT4) | 低 | 高 (>95%) | 低 (~75%) | TT4 正常可排除甲低 |
| TSH | 高 (>0.5 ng/mL) | ~75% | ~80% | 約 25% 甲低 TSH 正常 |
| Free T4 by ED (fT4ED) | 低 | 高 (>95%) | 高 (~90%) | 最不受 ESS 干擾 |
| TgAA | 陽性 | ~50% | 高 | 確認免疫介導性病因 |

TT4 低 + TSH 高→高度支持甲低
TT4 低 + TSH 正常→測 fT4ED 鑑別 ESS
TT4 正常→基本排除甲低（NPV >99%）

### 干擾因素
- ESS：任何非甲狀腺疾病都可降低 T4（尤其庫欣、肝病、腎病）
- 藥物：[藥物:Phenobarbital]、sulfonamides、糖皮質素→降低 T4
- 抗 T4 自體抗體→TT4 假性升高

## 三、治療策略 (Treatment)

| 藥物 | 劑量 | 監測 | 證據等級 |
|------|------|------|---------|
| [藥物:Levothyroxine] (L-T4) | 0.02 mg/kg PO BID（起始） | Post-pill T4 4-6hr 後（目標 2.5-5.0 μg/dL） | Level I |

治療反應時間表：
- 精神/活動力改善：1-2 週
- 皮膚/毛髮改善：4-8 週（完全恢復可能需 3-6 個月）
- 膽固醇下降：2-4 週
- 神經症狀改善：4-12 週（不一定完全恢復）

監測：首次 4-6 週追蹤 post-pill T4；穩定後 q6 個月。劑量調整每次 ±0.005 mg/kg。

注意：甲低合併心臟病時起始劑量減半（0.01 mg/kg BID），避免心臟代償失衡。

## 四、併發症與監控 (Complications & Monitoring)

| 併發症 | 機轉 | 監測 | 處理 |
|--------|------|------|------|
| Myxedema coma | 嚴重長期未治療甲低 | 意識/體溫/HR | IV L-T4 + warming + supportive |
| 高膽固醇血症 | LDL 清除↓ | 膽固醇/TG | L-T4 治療後改善 |
| Levothyroxine 過量 | 醫源性甲亢 | Post-pill T4 | 減量/暫停 |
| 復發性感染 | 免疫功能↓ | 皮膚/耳朵 | 治療甲低 + 對症治療 |

監測清單：post-pill T4 (q6月穩定後)、體重、皮膚狀態、膽固醇、CBS 評估。

## 五、預後與預後因子 (Prognosis)

預後極好。診斷對了、Levothyroxine 給下去，幾乎所有臨床症狀都會回來，預期壽命也跟一般狗一樣。

神經肌肉的併發症就比較難講。面神經麻痺有 50-75% 會恢復，前庭症候群恢復慢、不一定完全好。Megaesophagus 是裡面預後最差的。

跟飼主談時：甲低要吃一輩子的藥，定期回診也跑不掉。但只要這兩件做到，多數狗的生活品質可以回到正常。

## 六、人醫借鑑 (Translational Insights)

- 人醫 Hashimoto's thyroiditis 與犬淋巴球性甲狀腺炎高度相似，犬為 Hashimoto's 的天然動物模型
- 人醫使用 TSH 為主要篩檢工具；獸醫 TSH 敏感度僅 ~75%，不如人醫可靠
- 人醫 subclinical hypothyroidism（TSH↑但 T4 正常）治療有爭議；獸醫同樣面臨亞臨床甲低是否需治療的問題
- 人醫已有 T3+T4 合併治療 vs 單純 T4 治療的辯論；獸醫仍以 L-T4 單藥為標準

## 七、臨床爭議與知識空缺 (Controversies & Knowledge Gaps)

| 爭議主題 | 目前立場 | 證據等級 | 研究方向 |
|---------|---------|---------|---------|
| BID vs SID 給藥 | BID 為標準，SID 在部分犬可行 | Level II | SID 的長期等效性？ |
| TgAA 陽性但甲功正常 | 追蹤，不治療 | Level III | 進展為甲低的自然史 |
| 亞臨床甲低是否治療 | 有爭議，可試驗性治療 | Level IV | 前瞻性比較研究 |
| 品種特異性 T4 參考值 | Greyhound T4 天生偏低 | Level II | 更多品種的正常值建立 |
| 甲低與行為異常的關聯 | 因果關係不明確 | Level IV | 控制性研究需要 |

## 八、近期實證更新 (Recent Evidence Update)

**fT4 檢測方法學——類比法 vs 平衡透析法（Bennaim 2022, Res Vet Sci 147:37-43）**
這篇收 146 隻非甲狀腺疾病（NTI）犬，把「方便但便宜」的類比免疫分析法 fT4（fT4a）攤開來看，結論對門診很有衝擊：
- fT4a 受 NTI 壓低的程度跟病的嚴重度成正比，嚴重 NTI 犬 fT4a 明顯偏低，整體 33.6% 的 NTI 犬 fT4a 落在低值。
- fT4a 與 TT4 一致性高（κ=0.79）——白話說「測了 fT4a 幾乎等於再測一次 TT4」，對鑑別甲低 vs NTI 幫助有限。
- 關鍵數字：42 隻 TT4 偏低的 NTI 犬裡，fT4a 落在正常範圍的只有 11.9%，但平衡透析法 fT4（fT4ED）有 42.9% 正確落在正常範圍。也就是 fT4ED 比較不會被 NTI 拖下水、比較不會把「生病但甲狀腺正常」的狗誤判成甲低。
- 但要老實講：那 42.9% 反過來看，仍有 57% 的 fT4ED 在嚴重 NTI 下被壓到正常以下——**fT4ED 比較穩，但不是免疫於 NTI 的萬靈丹**。

實務結論：別用類比法 fT4 來「排除 NTI」；要鑑別就送平衡透析法 fT4ED，而且永遠要配臨床表現和 TSH 一起判讀，不能單看一個數字。

**沒有單一檢測是 100% 準確（BSAVA 2023 內分泌手冊重申）**
TT4 敏感度高但特異度低、約四分之一甲低犬 TSH 落在正常（cTSH 試劑敏感度僅 ~75% 至今仍是診斷最大瓶頸）、fT4ED 最穩但仍受嚴重 NTI 影響。降低誤診率的關鍵永遠是同一套：先排除 NTI 與干擾藥物（皮質素、phenobarbital、sulfonamides）→ 臨床高度懷疑才驗 → 多項指標合併判讀，不要單憑一個低 T4 就貼標籤。`,
  clinical_pearl: '診斷犬甲低最大的陷阱就是 euthyroid sick syndrome。台灣門診常碰到這種狀況：一隻皮膚一直爛的狗驗了 T4 偏低，直接被貼上甲低標籤。但其實是 Cushing 或皮膚病本身壓低了 T4。原則就三條：第一，狗如果正在生別的病，不要測甲狀腺。第二，T4 低要配 TSH 升高才算典型甲低。第三，有疑慮就測 fT4 by equilibrium dialysis（fT4ED），這個最不會被影響（但嚴重 NTI 下 fT4ED 仍可能假性偏低，不是萬靈丹，還是要配臨床）。順便提一下，TgAA 陽性可以抓出早期淋巴球性甲狀腺炎（甲低前期）。',
  common_mistakes: [
    '僅憑 Total T4 低就診斷甲低，未考慮 euthyroid sick syndrome（應同時測 TSH 和/或 fT4ED）',
    '在犬同時有其他疾病（Cushing、感染、腫瘤）時就篩檢甲狀腺功能（應先穩定其他疾病）',
    '使用 Phenobarbital 或 Glucocorticoid 的犬 T4 偏低被誤診為甲低',
    'Levothyroxine 監測時在錯誤時間點採血（應在給藥後 4-6 小時的 peak level）',
    '初始劑量過高或有心臟病犬未從低劑量起始',
  ],
  disease_data: {
    signalment: '好發於中老年犬（4-10 歲），中至大型犬。好發品種：Golden Retriever、Labrador Retriever、Doberman Pinscher、Dachshund、Cocker Spaniel、Irish Setter、Airedale Terrier、Boxer。絕育犬比未絕育犬風險略高。',
    etiology: '原發性（~95%）：淋巴球性甲狀腺炎（免疫介導性，約 50%）和特發性甲狀腺萎縮（約 50%）。繼發性（~5%）：腦下垂體 TSH 分泌不足。先天性（罕見）：甲狀腺發育不全或甲狀腺荷爾蒙合成缺陷。醫源性：甲狀腺切除術後、放射性碘治療後（貓甲亢治療後罕見轉為甲低）。',
    pathogenesis: '淋巴球性甲狀腺炎：免疫系統攻擊甲狀腺 → 漸進性濾泡破壞 → T4/T3 分泌減少 → TSH 代償性升高 → 甲狀腺殘餘組織代償不足時出現臨床甲低。特發性萎縮：甲狀腺實質被脂肪和結締組織取代，機轉不明。T4/T3 不足 → 基礎代謝率下降 → 影響幾乎所有器官（心臟、皮膚、神經、消化道、生殖系統）。黏液水腫（myxedema）：皮下黏多醣蓄積 → 面部和皮膚增厚。',
    clinical_signs: [
      { sign: '嗜睡/活動力下降', category: 'primary', description: '最常見症狀（約 70-80%），代謝率下降所致' },
      { sign: '體重增加', category: 'primary', description: '無多食情況下體重增加（代謝率降低）' },
      { sign: '對稱性脫毛', category: 'primary', description: '軀幹和尾巴為主，非搔癢性，毛髮不再生長' },
      { sign: '鼠尾（rat tail）', category: 'primary', description: '尾巴毛髮脫落，外觀如老鼠尾巴' },
      { sign: '反覆膿皮症/外耳炎', category: 'secondary', description: '免疫功能低下和皮膚屏障異常' },
      { sign: '面部黏液水腫（tragic face）', category: 'secondary', description: '眼眶周圍和臉部皮膚增厚下垂' },
      { sign: '心搏過緩', category: 'secondary', description: '甲狀腺荷爾蒙對心臟變時性效應減少' },
      { sign: '周邊神經病變', category: 'secondary', description: '面神經麻痺、喉麻痺、前庭症候群' },
    ],
    staging: null,
    differential_diagnosis: [
      { condition: '腎上腺皮質機能亢進（Cushing）', key_differentiator: 'Cushing 也有脫毛但伴 PU/PD、多食、壺腹腹；Cushing 可壓抑 T4 造成假性甲低' },
      { condition: '蠕形蟎症（Demodicosis）', key_differentiator: '皮膚刮搔可見蟎蟲；甲低犬可易感蟲蟎但需鑑別' },
      { condition: '季節性側腹脫毛', key_differentiator: '呈季節性，通常在秋冬，生化和甲狀腺指標正常' },
      { condition: '非甲狀腺疾病（Euthyroid sick）', key_differentiator: 'T4 低但 TSH 正常、fT4ED 正常；處理原發疾病後 T4 恢復' },
      { condition: '性荷爾蒙相關脫毛', key_differentiator: '未絕育犬或腎上腺性荷爾蒙異常，需腎上腺荷爾蒙 panel 鑑別' },
    ],
    diagnostic_workup: '1. 基礎血檢：CBC（可見輕度非再生性貧血、高膽固醇血症）、生化（Cholesterol ↑、Triglycerides ↑、CK 輕度↑）→ 2. Total T4（低值提示但不確診）→ 3. TSH（升高支持原發性甲低）→ 4. 若 T4 低 + TSH 正常：測 Free T4 by equilibrium dialysis (fT4ED) → 5. TgAA（偵測淋巴球性甲狀腺炎）→ 6. 考慮甲狀腺超音波（體積縮小、回聲改變）→ 7. 排除其他壓抑 T4 的因素（疾病、藥物）',
    treatment_protocol: '一般照護用 Levothyroxine (L-T4)：起始 0.02 mg/kg PO BID，盡量空腹，餐前 1 小時。大型犬（> 25 kg）起始用 0.018 mg/kg。有心臟病的狗要從 0.005-0.01 mg/kg PO SID 起跳，慢慢往上加。4-8 週後測 post-pill T4（給藥後 4-6 小時），目標 2.5-5.0 μg/dL，依結果每次調 0.005-0.01 mg/kg。穩定下來可以嘗試改 SID。專科照護要處理的是黏液水腫昏迷（myxedema coma，罕見急症）：IV Levothyroxine 或 Liothyronine (T3) 加上支持療法（保暖、輸液、皮質素補充）。',
    prognosis: '預後極佳。多數犬在開始 Levothyroxine 後 2-4 週精神和活動力改善，4-6 週體重開始下降，皮膚和毛髮完全恢復需 3-6 個月。神經症狀多數可逆但恢復較慢（數週至數月）。需終生用藥。黏液水腫昏迷為罕見但嚴重急症，未治療死亡率高。',
    monitoring: '起始治療後 4-8 週第一次追蹤：post-pill T4（給藥後 4-6 小時）+ TSH + 膽固醇。穩定後每 6 個月追蹤。臨床改善評估：精神活動力（2-4 週）、體重（4-8 週）、皮膚毛髮（3-6 個月）。T4 穩定後可考慮改為 SID 給藥（部分犬可維持）。',
    owner_communication: '甲狀腺低下要吃一輩子藥，但每天準時吃，預後其實非常好。最先看到變化的是精神跟活動力，大概 2-4 週就會差很多。皮膚跟毛要慢一點，等個 3-6 個月才會回來。藥盡量空腹吃效果最好。要定期回診抽甲狀腺指數，劑量才能調對。',
  },
  diagnostic_data: null,
  procedure_data: null,
  visual_placeholders: [
    { position: '甲狀腺功能檢測表後', type: 'flowchart', description: '犬甲低診斷決策流程圖（T4/TSH/fT4ED 判讀路徑）' },
    { position: '多系統臨床表現段落後', type: 'annotated_image', description: '犬甲低典型皮膚表現照片標注（鼠尾、tragic face、對稱性脫毛）' },
  ],
  interactive_placeholders: [],
  drug_api_links: ['Levothyroxine'],
  references: [
    { type: 'journal', citation: 'Bennaim M, Shiel RE, Evans H, Mooney CT. "Free thyroxine measurement by analogue immunoassay and equilibrium dialysis in dogs with non-thyroidal illness." Res Vet Sci. 2022;147:37-43. doi:10.1016/j.rvsc.2022.03.016', relevance: '近期實證：類比法 fT4 受 NTI 影響大、鑑別甲低助益有限；fT4ED 較穩健但非萬靈丹' },
    { type: 'journal', citation: 'Scott-Moncrieff JC. "Clinical Signs and Concurrent Diseases of Hypothyroidism in Dogs and Cats." Vet Clin North Am Small Anim Pract. 2007;37(4):709-722. doi:10.1016/j.cvsm.2007.03.003', relevance: '犬甲低臨床表現綜合回顧' },
    { type: 'journal', citation: 'Dixon RM, Mooney CT. "Canine serum thyroglobulin autoantibodies in health, hypothyroidism and non-thyroidal illness." Res Vet Sci. 1999;66(3):243-246. doi:10.1053/rvsc.1998.0268', relevance: 'TgAA 在甲低診斷中的角色' },
    { type: 'guideline', citation: 'Scott-Moncrieff JC. "Thyroid Disorders in the Geriatric Veterinary Patient." Vet Clin North Am Small Anim Pract. 2012;42(4):707-725. doi:10.1016/j.cvsm.2012.04.012', relevance: '老年犬甲狀腺疾病管理' },
    { type: 'textbook', citation: 'BSAVA Manual of Canine and Feline Endocrinology. "Canine hypothyroidism." BSAVA; 2023. doi:10.22233/9781910443866.18', relevance: '近期教科書標準：診斷需多項指標合併、無單一檢測 100% 準確' },
    { type: 'textbook', citation: 'Feldman EC et al. Canine and Feline Endocrinology, 4th ed. Elsevier, 2015. Chapter on Hypothyroidism.', relevance: '犬甲低完整參考章節' },
  ],
  is_current: true,
  created_at: now,
};

/** 貓甲狀腺機能亢進，疾病型 */
const contentFelineHyperthyroidism: NodeContent = {
  id: 'CONTENT-IM-L3-003',
  node_id: 'IM-L3-003',
  version: 2,
  summary: '貓甲狀腺機能亢進是中老年貓最常碰到的內分泌疾病，T4 分太多，整隻貓代謝飆起來。97% 以上是良性增生（bilateral adenomatous hyperplasia），剩下不到 3% 是甲狀腺癌。治療有四條路可走：Methimazole、放射性碘（I-131）、手術、處方飲食。',
  learning_objectives: [
    '說明貓甲亢的病因、好發族群與流行病學',
    '辨識貓甲亢的多系統臨床表現並說明與繼發性 HCM、CKD 的關聯',
    '正確判讀 Total T4 和 Free T4 以診斷貓甲亢（包括隱性甲亢的處理）',
    '比較四種治療選項的適應症、優缺點與長期預後',
    '說明甲亢治療後 CKD 揭露現象並制定監測策略',
  ],
  key_points: [
    '中老年貓（> 8 歲）最常見內分泌疾病，盛行率約 10%',
    '> 97% 良性甲狀腺增生（adenomatous hyperplasia），70% 雙側',
    '經典臨床表現：體重減輕伴食慾亢進、多渴多尿、行為改變（過動、嚎叫）、心跳過速',
    'Total T4 > 4.0 μg/dL 確診；若 T4 在高正常值（2.5-4.0）但臨床高度懷疑 → 測 Free T4',
    '甲亢可增加 GFR 而「掩蓋」CKD，治療甲亢後 Creatinine 可能明顯上升',
    '放射性碘 (I-131) 為唯一治癒性治療，治癒率 > 95%',
    'Methimazole 起始 1.25-2.5 mg PO BID（CKD 風險高者從 1.25 mg 起始），2-3 週後追蹤 T4 和腎功能',
    '繼發性甲亢心臟病（thyrotoxic cardiomyopathy）治療甲亢後多數可逆',
    '最新學會共識為 2023 AAHA 內分泌指引（無新版 AAFP/ISFM 專屬指引）；I-131 後治療出現氮血症者預後較差，且 SDMA 無法預測治療後氮血症、貓專用 TSH 試劑遠優於犬用試劑（待 DVM 覆核）',
  ],
  body: `# 貓甲狀腺機能亢進 (Feline Hyperthyroidism)

## 一、病理機制 (Pathophysiology)

整個機轉跑起來的時候是這樣：甲狀腺濾泡細胞增生（>97% 為良性 adenomatous hyperplasia / adenoma，70% 雙側）→T4/T3 自主性過量分泌→喪失 TSH 負回饋控制→全身代謝率異常升高→多器官效應

[圖片:Feline hyperthyroidism，adenomatous hyperplasia → autonomous T4 secretion → systemic hypermetabolic state]

甲狀腺功能異常的可能病因（仍有爭議）：
- 飲食中碘含量波動（過高或過低）
- 環境內分泌干擾物（PBDE 阻燃劑、BPA）
- 罐頭食品中的 BPA 暴露
- 基因突變（TSH 受體/Gsα 活化性突變，類似人類 toxic adenoma）

T4/T3 過量的系統效應：
- 心血管：心肌 β-adrenergic receptor 上調→心搏過速→左心室向心性肥厚 (concentric hypertrophy)→甲亢性心肌病 (thyrotoxic cardiomyopathy)
- 腎臟：GFR 增加（高動力循環）→「掩蓋」潛在 CKD→治療甲亢後 GFR↓→CKD 揭露
- 骨骼：骨吸收>形成→骨質疏鬆（少見臨床意義）

甲狀腺癌：<3%，但需警覺，固定性、大型、單側硬塊 + 治療後 T4 難以控制。

## 二、臨床表現與診斷 (Clinical Signs & Diagnosis)

| 臨床表現 | 頻率 | 特徵 |
|---------|------|------|
| 體重減輕 | >90% | 伴食慾亢進 (polyphagia) 為經典組合 |
| 食慾增加 | ~80% | 晚期可轉為食慾廢絕（apathetic hyperthyroidism） |
| 多渴多尿 | ~40-50% | T4→腎血流↑ |
| 行為改變 | ~30-50% | 過動、焦躁、夜間嚎叫 |
| 嘔吐/腹瀉 | ~30-40% | 腸道運動↑ |
| 被毛品質差 | ~30% | 過度理毛或neglect |
| 心跳過速 (>240 bpm) | ~50% | 可聞收縮期雜音/gallop |
| 甲狀腺結節可觸診 | ~80% | 頸部仔細觸診（ventral cervical slip technique） |

### 診斷

| 檢測 | 結果 | 敏感度 | 特異度 | 備註 |
|------|------|--------|--------|------|
| Total T4 (TT4) | >4.0 μg/dL | ~90% | 高 | 確診閾值 |
| TT4 高正常 (2.5-4.0) | 灰色地帶 |—|—| 可能為早期/隱性甲亢 |
| Free T4 by ED | 升高 | 高 | 中 | TT4 灰色地帶時測 |
| T3 suppression test | 無抑制 | 高 | 高 | 操作較複雜 |
| Technetium scan | 雙側/單側 | 高 | 高 | 術前定位 + 異位組織 |

隱性甲亢 (occult hyperthyroidism)：臨床高度懷疑但 TT4 正常→2-4 週後複測 TT4 或測 fT4ED。

### 特徵性血檢
- ALT/ASP 輕度升高（肝臟代謝↑→肝損傷）
- BUN/Cre 可能偏低（GFR↑掩蓋 CKD）

## 三、治療策略 (Treatment)

| 治療 | 方式 | 優勢 | 劣勢 | 證據等級 |
|------|------|------|------|---------|
| [藥物:Methimazole] | 1.25-2.5 mg PO BID（起始，CKD 風險高者從低劑量開始） | 可逆、便宜、評估腎功能 | 需每日投藥、副作用 | Level I |
| I-131 放射性碘 | 單次 SC 注射 | 唯一治癒性治療、治癒率 >95% | 設備限制、需隔離 | Level I |
| 手術（甲狀腺切除） | 單側/雙側 | 治癒性 | 全麻風險、副甲狀腺損傷 | Level II |
| [藥物:Iodine-restricted diet] (Hill's y/d) | 處方飲食 | 無侵入性 | 必須唯一食物來源、嗜口性差 | Level II |

### Methimazole 管理
- 起始 2.5 mg PO BID→2-3 週追蹤 TT4 + Cre
- 目標 TT4：正常範圍低端（1.0-2.5 μg/dL）
- 副作用監測：CBC q2-4wk 首 3 個月（嗜中性球↓、血小板↓）、面部搔癢、嘔吐
- 嚴重副作用：肝毒性、嗜中性球缺乏症→立即停藥

### I-131 為最佳長期選項
- 治癒率 >95%（單次治療）
- 適用於所有類型（包括異位甲狀腺組織和部分甲狀腺癌）
- 缺點：需核醫設備、住院隔離 1-3 週

## 四、併發症與監控 (Complications & Monitoring)

| 併發症 | 機轉 | 監測 | 處理 |
|--------|------|------|------|
| CKD 揭露 | 治療後 GFR↓→Cre↑ | Cre/SDMA（治療後 1-2-4 週） | Methimazole 減量至最低 T4 |
| 甲亢性心肌病 | T4→心肌肥厚 | 心超（治療前後） | 治療甲亢後多數 2-6 月可逆 |
| Methimazole 副作用 | 藥物反應 | CBC/肝指數/面部搔癢 | 停藥 or 轉 transdermal |
| 低鈣血症（術後） | 副甲狀腺損傷 | ionized Ca | Ca + Vit D 補充 |

關鍵監測策略：Methimazole 開始後必須同時追蹤 T4 和 Cre，若 Cre 明顯上升（>0.5 mg/dL），需重新評估治療目標。

## 五、預後與預後因子 (Prognosis)

| 治療方式 | 預後 | 中位存活 |
|---------|------|---------|
| I-131 治癒 | 極佳 | > 4 年（無 CKD） |
| Methimazole 控制良好 | 佳 | 2-4 年 |
| 合併 CKD（Stage 3+） | 謹慎 | 1-2 年 |
| 甲狀腺癌 | 不良 | 數月至 1 年 |

飼主溝通：甲亢是可治療的疾病。I-131 是最佳長期選擇。Methimazole 開始後需密切追蹤腎功能。部分貓治療甲亢後會揭露腎臟病。

## 六、人醫借鑑 (Translational Insights)

- 人醫 Graves' disease 為自體免疫性甲亢，與貓甲亢（adenomatous hyperplasia）機轉不同
- 人醫的 RAI (I-131) 治療廣泛使用，安全性和有效性已有數十年經驗，獸醫 I-131 治療直接借鑑人醫
- 人醫使用 thyroid scintigraphy 和 fine-needle aspiration 評估甲狀腺結節，獸醫亦可應用
- 人醫的 subclinical hyperthyroidism（TSH 低、T4 正常）概念類似獸醫的隱性甲亢

## 六之二、近期實證更新（2022–2025，僅列高信度，待 DVM 覆核）

> ⚠️ 指引現況：目前**沒有**新版 AAFP/ISFM 貓甲亢專屬指引；最新的多學會共識文件是
> **2023 AAHA Selected Endocrinopathies 指引**（重申 2016 AAFP 框架、加入 Group 1–4 分級診斷、
> 強調以參考實驗室檢測 + 強制併行腎功能監測）。AAFP 仍停在 2016 版。坊間流傳的「2024/2026 AAFP 新指引」
> 經查證為 2016 版被誤標日期，請勿引用。

**1. 治療後氮血症（masked CKD）才是預後決定因子**
一項 1,047 隻 I-131 治療貓的大型回溯研究：治療後出現氮血症者存活明顯較短，且「早發性氮血症」
（中位 29.5 個月）較「晚發性」（42.3 個月）更差；氮血症貓最終死於腎病的比例達 70.1%（非氮血症組僅 18.1%）。
教學重點＝甲亢的真正預後決定因子是腎臟，不是甲狀腺本身。

**2. SDMA 不能預測抗甲狀腺藥治療後是否會氮血症（負向實證）**
初始未氮血症貓以 methimazole／carbimazole 治療時，治療前 SDMA 無法區分日後是否氮血症，
且 SDMA 上升落後於 creatinine。故**不宜**單憑治療前 SDMA 排除潛在 CKD（樣本數小 n=19，僅供參考）。

**3. 診斷：貓專用 TSH 試劑大幅優於借用犬用試劑**
新一代貓最佳化 TSH 試劑診斷敏感度 90.5%、特異度 98.9%；傳統「犬用 cTSH」試劑在未治療甲亢貓
僅約 17% 可測得異常、敏感度不足，僅能輔助判讀。引用 TSH 數據時務必確認試劑來源（犬用 vs 貓專用）。

**4. I-131 後的醫源性甲狀腺低下要追蹤、必要時補充**
I-131 後維持甲狀腺正常且無氮血症者存活最久（中位 1,616 天）；未處理的甲狀腺低下者較短（1,232 天）。
對「甲狀腺低下且腎功能正常」的貓補充 levothyroxine 可延長存活；但**已有 CKD 者補充無益**。
建議治療後常規監測 T4 + 腎指標至少 6 個月。

## 七、臨床爭議與知識空缺 (Controversies & Knowledge Gaps)

| 爭議主題 | 目前立場 | 證據等級 | 研究方向 |
|---------|---------|---------|---------|
| 甲亢與 CKD 的最佳平衡點 | 維持 T4 在正常低端 | Level III | 最佳 T4 目標範圍？ |
| 碘限制飲食作為唯一治療 | 可作為選項但非首選 | Level II | 長期等效性？ |
| 環境因素（BPA、PBDE）的角色 | 流行病學相關但因果不確定 | Level III | 前瞻性暴露研究 |
| Transdermal Methimazole vs oral | 可能等效（口服較快達甲狀腺正常、經皮 GI 副作用較少，4 週後相當）；惟無 2022–2025 新 RCT，證據仍仰賴 Sartor 2004 | Level II | 新的頭對頭 RCT |
| 早期甲亢是否治療 | 有爭議，可觀察或治療 | Level IV | TT4 灰色地帶的自然病史 |
| 治療前能否用 SDMA 預測治療後氮血症 | 最新負向實證：抗甲狀腺藥治療前 SDMA 無法預測，且上升落後於 Cre | Level III（小樣本） | 更大型前瞻性研究 |
| I-131 後醫源性甲狀腺低下要不要補 levothyroxine | 甲狀腺低下且腎正常者補充可延壽；已有 CKD 者無益 | Level III | 需 RCT 確認 |`,
  clinical_pearl: '在台灣臨床上最容易犯的錯誤是治療貓甲亢後才發現 CKD。最佳策略是先用 Methimazole 做「腎功能試探」，用 2-3 週的 Methimazole 將 T4 控制到正常後追蹤 Creatinine。如果 Creatinine 明顯上升（例如從 1.2 跳到 3.0），則需要在甲亢控制與 CKD 管理之間取得平衡，可能需要維持輕度甲亢（T4 在正常高值至輕度升高）來保護腎功能。這就是為什麼 I-131 或手術等「不可逆」治療不應在未先評估腎功能的情況下執行。',
  common_mistakes: [
    '未在開始治療前評估腎功能（治療甲亢後 CKD 可能被揭露）',
    'T4 在灰色地帶就排除甲亢（隱性甲亢的 T4 可在正常高值，需追蹤或測 fT4）',
    '直接進行 I-131 或手術而未先用 Methimazole 做「腎功能試探」',
    'Methimazole 副作用出現後直接停藥而非考慮替代方案（經皮製劑、低劑量調整）',
    '忽略甲亢貓的心臟評估（繼發性 HCM 和血栓風險）',
  ],
  disease_data: {
    signalment: '中老年貓（> 8 歲，好發 10-13 歲），盛行率在 > 10 歲貓群約 10%。無明顯品種傾向，但 Siamese 和 Himalayan 風險稍低。室內貓風險高於室外貓。無明顯性別差異。',
    etiology: '良性甲狀腺增生（adenomatous hyperplasia）> 97%，約 70% 為雙側。甲狀腺癌 < 3%。確切病因未明，可能的環境促進因素：罐裝食品（BPA、PBDE 暴露）、碘攝取過量或不足、室內生活環境（揮發性有機化合物）。流行病學顯示自 1980 年代以來發病率持續上升。',
    pathogenesis: '甲狀腺濾泡細胞自主性增生 → T4/T3 過度分泌 → 繞過 HPT axis 負回饋 → 全身性高代謝狀態。多系統影響：心血管（心輸出量增加、繼發性 LV hypertrophy、收縮壓升高）→ 腎臟（GFR 增加掩蓋潛在 CKD）→ 消化道（腸道蠕動加速、吸收不良）→ 骨骼（骨質流失）→ 神經肌肉（過動、肌肉消耗）。',
    clinical_signs: [
      { sign: '體重減輕', category: 'primary', description: '幾乎 100% 病例，常伴隨食慾亢進（消瘦但吃很多）' },
      { sign: '食慾亢進 (polyphagia)', category: 'primary', description: '代謝率增加導致能量需求增加' },
      { sign: '多渴多尿 (PU/PD)', category: 'primary', description: '約 40-50%，甲亢增加腎臟灌流和 medullary washout' },
      { sign: '嘔吐/腹瀉', category: 'primary', description: '約 30-50%，腸道蠕動加速' },
      { sign: '行為改變（過動、嚎叫、攻擊性）', category: 'secondary', description: '交感神經過度活化' },
      { sign: '心跳過速/心雜音', category: 'secondary', description: '心率常 > 240 bpm，甲亢心肌病可聽到奔馬律或雜音' },
      { sign: '毛髮粗糙/過度理毛', category: 'secondary', description: '甲亢貓可出現毛髮外觀改變' },
      { sign: '可觸及甲狀腺結節', category: 'secondary', description: '腹側頸部觸診，約 80-90% 可觸及' },
    ],
    staging: null,
    differential_diagnosis: [
      { condition: '糖尿病', key_differentiator: '體重減輕伴多食但有持續性高血糖（> 300 mg/dL）和糖尿' },
      { condition: '炎症性腸病（IBD）', key_differentiator: '體重減輕和嘔吐腹瀉但 T4 正常，腸道超音波和組織切片可鑑別' },
      { condition: '腸道淋巴瘤', key_differentiator: '體重減輕和食慾改變但 T4 正常，超音波淋巴結腫大，FNA/組織切片確診' },
      { condition: '慢性腎病', key_differentiator: 'CKD 也有 PU/PD 和體重減輕但通常食慾下降（非增加），T4 正常或偏低' },
      { condition: '外分泌胰臟機能不全（EPI）', key_differentiator: '體重減輕伴多食但 T4 正常，TLI 偏低確診' },
    ],
    diagnostic_workup: '1. 基礎血檢：CBC（stress leukogram、PCV 可能偏高）、生化（ALT/ALP 輕度升高、BUN/Cre 偏低或正常需注意 GFR 效應）→ 2. Total T4（> 4.0 確診、2.5-4.0 灰色地帶）→ 3. 灰色地帶：Free T4 或 2-4 週後重複 T4 → 4. 血壓測量（甲亢性高血壓）→ 5. 尿液分析（USG、UPC、排除同時 CKD）→ 6. 心臟評估（聽診、必要時心超排除甲亢心肌病）→ 7. 可選：甲狀腺掃描（Tc-99m，單側 vs 雙側評估）',
    treatment_protocol: '一般照護首選 Methimazole 藥物治療：起始 2.5 mg PO BID，2-3 週後追蹤 T4 + BUN/Cre。目標 T4 壓在 1.0-2.5 μg/dL。前 3 個月每 2 週要驗一次 CBC，盯白血球跟血小板有沒有掉。口服吃不下的貓可以用經皮 Methimazole。如果 Creatinine 漲超過 30%，要把 Methimazole 劑量調低，讓 T4 維持在正常範圍的高端。專科照護的選項：放射性碘 I-131 是唯一能治癒的方法，治癒率超過 95%，但開打前一定要先用 Methimazole 試一陣子，確認腎功能扛得住甲狀腺功能回到正常。甲狀腺切除術用在單側病灶或拿不到 I-131 的時候，術前一樣要用 Methimazole 穩定 2-4 週。處方飲食（Hill\'s y/d）走極低碘路線，適合完全不能給藥的貓，但只要這隻貓還會偷吃別的東西就破功。',
    prognosis: 'Methimazole 控制下中位存活 2-5 年（取決於共病）。I-131 治療後治癒率 > 95%，預後極佳（若無 CKD 限制）。甲亢心肌病（LV hypertrophy）在甲亢控制後 1-6 個月多數可逆。甲狀腺癌預後較差。預後最大的影響因子是潛在 CKD 的嚴重度。',
    monitoring: 'Methimazole 起始後：2-3 週追蹤 T4 + BUN/Cre + CBC。穩定後每 3-6 個月追蹤 T4 + 腎功能 + 血壓 + 體重。CBC 每 2 週前 3 個月（監測骨髓抑制副作用）。注意甲亢貓治療後體重恢復，過度增重需調整飲食。長期監測 CKD 進展。',
    owner_communication: '甲亢是老貓常見的毛病，好消息是可以處理。Methimazole 口服藥是最常見的起手式，每天要準時餵。會先用藥控制一陣子，順便觀察腎功能會怎麼反應。放射性碘是唯一能一勞永逸的，但開打前要先確定腎臟撐得住。在家請盯一下體重、食慾跟喝水量。如果貓開始抓臉、不吃，或常常吐，就要回診看看是不是藥的副作用。',
  },
  diagnostic_data: null,
  procedure_data: null,
  visual_placeholders: [
    { position: '甲亢與 CKD 交互作用段落後', type: 'flowchart', description: '甲亢治療決策流程圖（含腎功能評估路徑）' },
    { position: '四種治療選項段落後', type: 'comparison_table', description: '四種治療選項比較表（Methimazole vs I-131 vs 手術 vs 飲食）' },
  ],
  interactive_placeholders: [
    { position: '診斷段落', type: 'interactive_staging', description: '輸入 T4/fT4/Creatinine 自動建議診斷與治療方向' },
  ],
  drug_api_links: ['Methimazole', 'Atenolol', 'Amlodipine'],
  references: [
    { type: 'guideline', citation: 'Bugbee A, Rucinsky R, Cazabon S, et al. "2023 AAHA Selected Endocrinopathies of Dogs and Cats Guidelines." J Am Anim Hosp Assoc. 2023;59(3):113-135. doi:10.5326/JAAHA-MS-7368.', relevance: '最新、可查證的多學會共識（涵蓋貓甲亢分級診斷 + 強制併行腎功能監測），取代將 2016 AAFP 當唯一現行指引' },
    { type: 'guideline', citation: 'Carney HC et al. "2016 AAFP Guidelines for the Management of Feline Hyperthyroidism." J Feline Med Surg. 2016;18(5):400-416. doi:10.1177/1098612X16643252.', relevance: 'AAFP 仍現行的專屬指引（無 2024/2026 新版）；作為基礎框架與 2023 AAHA 並列' },
    { type: 'journal', citation: 'Hyperthyroid cats that develop azotemia following successful radioiodine treatment have shorter survival times compared to cats that remain nonazotemic. J Am Vet Med Assoc. 2025;263(4). doi:10.2460/javma.24.10.0653.', relevance: '1,047 隻 I-131 治療貓：治療後氮血症（masked CKD）為真正預後決定因子（待 DVM 確認作者/頁碼）' },
    { type: 'journal', citation: 'Peterson ME, Dougherty E, Rishniw M. "Evaluation of a novel, sensitive thyroid-stimulating hormone assay as a diagnostic test for thyroid disease in cats." Am J Vet Res. 2024;85(5). doi:10.2460/ajvr.23.12.0278.', relevance: '貓最佳化 TSH 試劑（敏90.5%／特98.9%）遠優於借用犬用試劑，更新 TSH 在診斷中的角色' },
    { type: 'journal', citation: 'Cox SE, Wakeling J, Hall T, Williams TL. "Survival of radioiodine treated hyperthyroid cats that are euthyroid and hypothyroid after treatment, and effect of levothyroxine supplementation." J Vet Intern Med. 2025;39(1):e17295. doi:10.1111/jvim.17295.', relevance: '支持 I-131 後監測醫源性甲狀腺低下並依腎功能決定是否補充 levothyroxine' },
    { type: 'textbook', citation: 'Feldman EC et al. Canine and Feline Endocrinology, 4th ed. Elsevier, 2015. Chapter on Feline Hyperthyroidism.', relevance: '貓甲亢完整參考章節' },
    { type: 'journal', citation: 'Williams TL et al. "Survival and the development of azotemia after treatment of hyperthyroid cats." J Vet Intern Med. 2010;24(4):863-869.', relevance: '甲亢治療後 CKD 揭露與存活分析（基礎研究）' },
  ],
  is_current: true,
  created_at: now,
};

/** 犬免疫介導性溶血性貧血 (IMHA)，疾病型 */
const contentIMHA: NodeContent = {
  id: 'CONTENT-IM-L3-005',
  node_id: 'IM-L3-005',
  version: 2,
  summary: '犬免疫介導性溶血性貧血（IMHA）是犬最棘手的免疫病之一，免疫系統做出自體抗體去打自家紅血球。ACVIM 2019 共識分原發性（60-75%）和繼發性。死亡率不低，3 到 5 成跑不掉，最主要的死因就是血栓。治療兩條腿走：免疫抑制加抗血栓。2024 年一篇 RCT（Agnoli 等）提醒：一線就加上 mycophenolate 並未提升反應率、存活反而較差——雙藥不該再當常規。',
  learning_objectives: [
    '區分原發性與繼發性 IMHA 並說明常見的繼發原因',
    '運用血液學和免疫學檢測（球形紅血球、自凝集、Coombs test）診斷 IMHA',
    '制定 IMHA 的免疫抑制治療方案（一線和二線藥物）',
    '說明血栓栓塞在 IMHA 中的機轉與預防策略',
    '辨識預後不良的指標並制定適當的監測計畫',
  ],
  key_points: [
    '原發性/特發性 IMHA（60-75%）：自體免疫攻擊正常紅血球；繼發性（25-40%）：感染、腫瘤、藥物觸發',
    '診斷三要素：再生性貧血 + 球形紅血球（spherocytes）+ 自凝集（saline agglutination test）或 Coombs 陽性',
    '台灣特別注意：壁蝨媒介疾病（Babesia, Ehrlichia）可觸發繼發性 IMHA，須先排除',
    '血栓栓塞是 IMHA 最重要的致死併發症，肺血栓栓塞（PTE）是最常見死因',
    '一線免疫抑制：Prednisolone 2 mg/kg/day + 二線：Mycophenolate 或 Cyclosporine',
    '抗血栓治療：所有 IMHA 犬均應接受（Clopidogrel + 低分子量 Heparin 或 unfractionated Heparin）',
    '死亡率 30-50%，多在前 2 週。存活過 2 週者長期預後改善',
    '復發率約 15-20%，免疫抑制劑需緩慢減量（3-6 個月以上）',
  ],
  body: `# 免疫介導性溶血性貧血 (Immune-Mediated Hemolytic Anemia, IMHA)

## 一、病理機制 (Pathophysiology)

整個故事就是免疫系統失調，做出抗紅血球的自體抗體（IgG 為主，有的也合併 IgM），抗體去包紅血球。

接下來分三種溶血路徑：

第一種是血管外溶血（extravascular hemolysis），這個最常見。IgG 包紅血球之後，脾臟跟肝臟的巨噬細胞透過 Fc 受體把它認出來吞掉，但常常只咬一口、不全吞，剩下來那一塊就變成血液抹片上看到的球形紅血球（spherocytes）。

第二種是血管內溶血（intravascular hemolysis）。IgM（冷凝集素）或大量 IgG 把補體召喚出來，MAC（membrane attack complex）一上場，紅血球當場炸開，血紅素尿跟血紅素血症一起出現。

第三種是抗體直接打到骨髓的紅血球前驅細胞，變成非再生性 IMHA。臨床上少見，但碰到了預後很差。

[圖片:IMHA pathophysiology，autoantibody binding → extravascular (splenic) vs intravascular (complement) hemolysis]

為什麼 IMHA 會血栓栓塞？溶血會把組織因子（TF）釋放出來，紅血球膜上的磷脂酰絲胺酸也暴露，外在凝血途徑就被點燃了。再加上紅血球微粒（RBC-derived microparticles）跟游離血紅素一起把 NO 清掉，血管內皮失能。肺血栓栓塞（PTE）就是 IMHA 最常見的死因，這個一定要記住。

原發性大概 60-75%，特發性自體免疫，臨床上中年母犬最常碰到，Cocker Spaniel、English Springer Spaniel、Poodle 都是常客。

繼發性占 25-40%。台灣這邊感染（Babesia、Mycoplasma、Ehrlichia）一定要先排掉。其他像 TMP-SMX、cephalosporins 等藥物，淋巴瘤、血管肉瘤這些腫瘤，疫苗接種後（罕見）也都可能觸發。

## 二、臨床表現與診斷 (Clinical Signs & Diagnosis)

| 臨床表現 | 頻率 | 特徵 |
|---------|------|------|
| 蒼白黏膜 | >90% | PCV 快速下降 |
| 黃疸 | ~70% | 溶血性（間接膽紅素↑） |
| 嗜睡/虛弱 | >90% | 組織缺氧 |
| 心搏過速 | >80% | 代償機轉 |
| 深色尿（紅褐色） | ~30% | 血管內溶血 |
| 脾腫大 | ~60% | 血管外溶血位點 |
| 發燒 | ~50% | 溶血性/炎症反應 |

### 診斷三要素

| 檢測 | 結果 | 敏感度 | 特異度 | 備註 |
|------|------|--------|--------|------|
| CBC | 再生性貧血 (reticulocytes↑) | 高 | 中 | 前 3-5 天可能為非再生性 |
| 血液抹片 | 球形紅血球 + 多染性 RBC | 高 | 高 | 球形紅血球為 IMHA 關鍵發現 |
| Saline agglutination test | 持續凝集 | 中 (~60%) | 高 | 陽性 = 強力證據 |
| Coombs' test (DAT) | 陽性 | ~70-80% | 中 | 陰性不排除（假陰性常見） |

診斷標準 (ACVIM 2019)：貧血 + 球形紅血球 + 自凝集或 Coombs 陽性 + 排除繼發原因。

### 排除繼發性原因
- PCR：Babesia, Mycoplasma haemofelis, Ehrlichia
- 腹部超音波：排除脾臟/肝臟腫瘤 (hemangiosarcoma)
- 藥物史回顧
- 胸腔 X 光：排除腫瘤轉移

## 三、治療策略 (Treatment)

### 免疫抑制

| 藥物 | 劑量 | 角色 | 證據等級 |
|------|------|------|---------|
| [藥物:Prednisolone] | 2 mg/kg/day PO (ACVIM 建議) | 一線基石 | Level I |
| [藥物:Mycophenolate mofetil] | 10 mg/kg PO BID | 常用二線 | Level II |
| [藥物:Azathioprine] (僅犬) | 2 mg/kg PO SID→隔日 | 經典二線 | Level II |
| [藥物:Cyclosporine] | 5 mg/kg PO BID（部分文獻支持最高 10 mg/kg） | 難治性替代 | Level III |
| Human IV immunoglobulin (hIVIG) | 0.5-1.5 g/kg IV over 6-12h | 急救（Fc blockade） | Level III |

注意：ACVIM 2019 建議 Prednisolone 起始 2 mg/kg/day（非更高），以減少副作用和血栓風險。

### 抗血栓治療

| 藥物 | 劑量 | 備註 | 證據等級 |
|------|------|------|---------|
| [藥物:Clopidogrel] | 2 mg/kg PO SID | 抗血小板 | Level II |
| [藥物:Unfractionated heparin] | 150-300 U/kg SC TID | 急性期 | Level III |
| Low-molecular-weight heparin | Enoxaparin 0.8 mg/kg SC q6h（治療劑量）或 BID（預防劑量） | 替代 UFH | Level III |

所有 IMHA 犬均應接受抗血栓治療，ACVIM 強烈建議。

### 輸血指引
- PCV <12-15% 或血液動力學不穩定→輸血
- 首次輸血無需交叉配對（犬無天然同種抗體），但建議配對
- DEA 1.1 陰性 pRBC 為首選

## 四、併發症與監控 (Complications & Monitoring)

| 併發症 | 發生率 | 機轉 | 處理 |
|--------|--------|------|------|
| 肺血栓栓塞 (PTE) | ~30-40% | 高凝血 + 內皮損傷 | 抗凝血 + O2 + 支持 |
| DIC | ~10-20% | 凝血級聯過度活化 | FFP + supportive |
| Evans syndrome (IMHA + ITP) | ~10-15% | 同時攻擊 RBC + platelets | 加強免疫抑制 |
| 骨髓壞死 | 罕見 | 嚴重缺氧 | 預後極差 |

住院監測：
- PCV q6-12h（急性期）
- 網織紅血球 q24-48h（再生反應追蹤）
- 凝血功能 (PT/aPTT/D-dimer) q24h
- SpO2 + 呼吸型態（PTE 早期偵測）
- 血小板（排除 Evans syndrome）

## 五、預後與預後因子 (Prognosis)

| 預後因子 | 良好 | 不良 |
|---------|------|------|
| 存活 >2 週 | 長期存活率高 |—|
| 再生性貧血 | 預後較佳 | 非再生性 IMHA 預後差 |
| 自凝集 |—| 自凝集陽性預後較差 |
| 血栓栓塞 |—| PTE 為主要死因 |
| 高 bilirubin |—| 嚴重溶血指標 |

總死亡率：約 30-50%，多集中在前 2 週。存活過急性期者長期預後改善。復發率 ~15-20%。

跟飼主談的時候我會直接講：IMHA 不是小病，但治得起來。前面兩週是真的關卡，撐過去後面就好辦。整個療程通常 3 到 6 個月以上跑不掉。類固醇不能急著減，減太快很容易復發。

## 六、人醫借鑑 (Translational Insights)

- 人醫 warm AIHA 與犬 IMHA 機轉高度相似，犬為天然研究模型
- 人醫使用 rituximab (anti-CD20) 治療難治性 AIHA，獸醫領域有初步報告但尚無商品化犬用抗 CD20
- 人醫的 venous thromboembolism (VTE) risk scoring 系統可借鑑至獸醫 IMHA 血栓風險評估
- 人醫已確認 direct oral anticoagulants (DOACs) 如 rivaroxaban 的角色，獸醫犬用藥動學研究中

## 七、臨床爭議與知識空缺 (Controversies & Knowledge Gaps)

| 爭議主題 | 目前立場 | 證據等級 | 研究方向 |
|---------|---------|---------|---------|
| 是否常規加第二免疫抑制劑 | **2024 Agnoli RCT 翻轉舊觀念**：類固醇 + MMF 雙藥相較單用類固醇並未改善反應率，MMF 組存活反而較差。除非個案有特殊考量，一線不必常規加第二劑 | Level II（RCT） | 哪些亞型真正受益於雙藥？ |
| Pred 劑量 2 vs 4 mg/kg/day | ACVIM 2019 建議 2 mg/kg/day | Level II | 劑量-反應關係研究 |
| hIVIG 的角色 | 急救用途，但證據有限 | Level III | 前瞻性比較研究 |
| 最佳抗血栓方案 | Clopidogrel 為首選抗血小板；DOACs（rivaroxaban）犬用藥動學研究中 | Level III | DOACs 在犬的 RCT |
| 脾臟切除 | 人醫常見，獸醫罕用 | Level IV | 難治性 IMHA 的手術角色？ |
| Mycophenolate vs Azathioprine | 2024 RCT 提醒 MMF 加入後存活未必更好，二線藥物選擇宜個別化、密切監控 | Level II（RCT） | 頭對頭比較研究 |

> ⚠️ **2024 新證據（待 DVM 審閱）**：Agnoli 等人發表於 JVIM 的隨機對照試驗（DOI 10.1111/jvim.17122）顯示，於犬 IMHA 一線治療「類固醇 + mycophenolate mofetil」雙藥組合，相較單用類固醇並未提高治療反應率，且 MMF 組存活率較低。臨床意義：不要把「一線就上雙藥」當預設；第二免疫抑制劑保留給類固醇 48–72 小時反應不佳、或無法耐受高劑量類固醇的個案，且加藥後須密切監控。本段落為文獻更新，臨床採用前請由主治獸醫師依個案判斷。`,
  clinical_pearl: '在台灣診斷 IMHA 時，最關鍵的第一步是排除壁蝨媒介疾病。Babesia gibsoni 和 Ehrlichia canis 都可以觸發繼發性 IMHA，而且台灣是高盛行區。SNAP 4Dx 可能在急性感染期偽陰性（抗體尚未產生），所以疑似 IMHA 的犬應同時送 PCR 檢測 Babesia 和 Mycoplasma。另一個重要觀念：自凝集試驗必須用生理食鹽水稀釋後判讀，將一滴 EDTA 血液滴在載玻片上加一滴 saline 混合。如果稀釋後凝集消失，則為 rouleaux（假陽性）；如果持續凝集，才是真性自凝集。',
  common_mistakes: [
    '未排除繼發原因就診斷原發性 IMHA（尤其在台灣必須排除 Babesia 和 Ehrlichia）',
    '自凝集試驗未用生理食鹽水稀釋，rouleaux 被誤判為真性自凝集',
    '所有 IMHA 犬都輸血，輕度至中度貧血且血流動力學穩定者應先觀察再生反應',
    '未給予抗血栓治療（血栓栓塞是最常見死因，所有 IMHA 犬均應接受）',
    '免疫抑制劑減量過快導致復發（至少需 3-6 個月緩慢減量）',
  ],
  disease_data: {
    signalment: '中年犬為主（平均 6-8 歲），雌性犬風險為雄性 2-3 倍。好發品種：Cocker Spaniel、English Springer Spaniel、Old English Sheepdog、Poodle、Irish Setter、Collie、Bichon Frise。可見於任何品種。',
    etiology: '原發性/特發性（60-75%）：自體免疫反應攻擊正常紅血球抗原，確切觸發因子不明。繼發性（25-40%）：感染性（Babesia、Ehrlichia、Anaplasma、Leptospira、Mycoplasma haemocanis）、腫瘤性（淋巴瘤、血管肉瘤、組織球肉瘤）、藥物性（Cephalosporins、Sulfonamides、Propylthiouracil）、疫苗接種後（尤其改良活毒疫苗後 2-4 週）、蜂螫/蛇咬毒素。',
    pathogenesis: '自體抗體（IgG 為主，部分 IgM/補體）結合紅血球表面 → 血管外溶血：IgG-opsonized RBC 被脾臟/肝臟巨噬細胞透過 Fc receptor 吞噬，部分吞噬形成球形紅血球 → 血管內溶血：IgM 活化補體 C5b-9 MAC 直接裂解 RBC → 血紅素血症/血紅素尿 → 高凝血狀態：溶血釋放 tissue factor + phosphatidylserine 暴露 + 內皮損傷 + 發炎細胞因子 → 凝血級聯活化 → 血栓栓塞（肺血栓最常見）和/或 DIC。',
    clinical_signs: [
      { sign: '急性虛弱/嗜睡', category: 'primary', description: '嚴重貧血（PCV < 15-20%）導致組織缺氧' },
      { sign: '黏膜蒼白', category: 'primary', description: '貧血的直接表現' },
      { sign: '黃疸', category: 'primary', description: '紅血球破壞 → 非結合型膽紅素升高 → 黏膜和鞏膜黃染' },
      { sign: '深色尿（血紅素尿/膽紅素尿）', category: 'primary', description: '血管內溶血（紅棕色）或膽紅素（深黃色）' },
      { sign: '心跳過速', category: 'secondary', description: '貧血的代償性反應（維持氧氣輸送）' },
      { sign: '發燒', category: 'secondary', description: '免疫反應引起的全身性發炎' },
      { sign: '脾臟腫大', category: 'secondary', description: '紅血球在脾臟被大量破壞' },
      { sign: '呼吸急促', category: 'secondary', description: '貧血性缺氧或肺血栓栓塞' },
    ],
    staging: null,
    differential_diagnosis: [
      { condition: '壁蝨媒介疾病溶血（Babesia）', key_differentiator: 'SNAP 4Dx + Babesia PCR 可鑑別；可與 IMHA 共存（繼發性 IMHA 的觸發因子）' },
      { condition: '洋蔥/大蒜中毒性溶血', key_differentiator: '病史中有洋蔥/大蒜攝取，血液抹片可見 Heinz body 而非球形紅血球' },
      { condition: '鋅中毒溶血', key_differentiator: '攝取含鋅異物（硬幣、螺帽），腹部 X 光可見金屬異物，血鋅升高' },
      { condition: '微血管病性溶血性貧血（DIC、血管肉瘤）', key_differentiator: '血液抹片 schistocytes 為主（非球形紅血球），Coombs 通常陰性' },
      { condition: '再生性缺鐵性貧血/出血性貧血', key_differentiator: '無球形紅血球、無自凝集、Coombs 陰性；可能有明顯出血灶' },
    ],
    diagnostic_workup: '1. CBC + 血液抹片（PCV、網織紅血球、球形紅血球、schistocytes、nRBC、polychromasia）→ 2. Saline agglutination test（載玻片法）→ 3. 若自凝集陰性：Coombs test → 4. 生化（Total bilirubin、ALT、BUN/Cre）→ 5. 凝血功能（PT/aPTT、Fibrinogen、D-dimer，排除 DIC）→ 6. 尿液分析（hemoglobinuria、bilirubinuria）→ 7. 排除繼發原因：SNAP 4Dx + Babesia/Mycoplasma PCR + 腹腔超音波（腫瘤、脾臟）+ 胸腔 X 光（腫瘤、PTE）→ 8. 血型和交叉配血（若需輸血）',
    treatment_protocol: 'Primary care，免疫抑制一線：Prednisolone 2 mg/kg/day PO 分 BID（急性期可用 Dexamethasone 0.2-0.3 mg/kg IV if vomiting）。抗血栓（所有 IMHA 犬均需）：Clopidogrel 2 mg/kg PO SID。輸血指標：PCV < 12-15% 或有組織缺氧臨床徵象（心跳過速不反應、嗜睡加劇）→ pRBC 10-15 mL/kg IV over 4 hr。Specialty care，二線免疫抑制（Prednisolone 48-72 hr 反應不佳時加入）：Mycophenolate (MMF) 10 mg/kg PO BID（ACVIM 2019 首選二線）或 Cyclosporine 5 mg/kg PO BID（部分文獻支持最高 10 mg/kg） 或 Azathioprine 2 mg/kg PO SID × 14 天 → 1 mg/kg q48h（禁用於貓）。抗凝血加強：Enoxaparin 0.8 mg/kg SC q6h 或 UFH 150-300 U/kg SC TID。急性穩定：hIVIG 0.5-1.5 g/kg IV over 6-12 hr（阻斷 Fc receptor）。減量時程：PCV 穩定 > 30% 持續 2 週後開始，Prednisolone 每 2-4 週減 25%，總減量至少 3-6 個月。',
    prognosis: '住院死亡率 30-50%，多發生在前 14 天（血栓栓塞和嚴重貧血為主要死因）。存活過 2 週者長期預後明顯改善。1 年存活率約 60-70%。復發率 15-20%（通常在免疫抑制劑減量時）。不良預後指標：自凝集陽性（比 Coombs-only 更嚴重）、血管內溶血（hemoglobinemia/hemoglobinuria）、極度貧血（PCV < 10%）、DIC、中度至重度血小板減少（Evans syndrome：IMHA + ITP）。',
    monitoring: '住院期間：每 6-12 小時 PCV/TS + 血液抹片。每 24 小時：CBC、Bilirubin、vital signs。輸血後：30 分鐘和 1 小時監測輸血反應。出院後：每週 PCV/TS 直至穩定 > 30%。穩定後：每 2-4 週 CBC + 生化。減量期間：每 2-4 週 PCV 確認穩定。長期：每 3 個月追蹤 CBC。停藥後至少追蹤 6-12 個月（監測復發）。',
    owner_communication: 'IMHA 是一種嚴重的免疫系統疾病。坦白說，即使積極治療，仍有約三成到五成的犬無法存活（主要因為血栓併發症）。但如果能撐過前兩週的危險期，長期預後會好很多。治療需要長期免疫抑制藥物，通常需要 3-6 個月以上才能慢慢減量。藥物不能突然停止。居家需注意牙齦顏色（蒼白或黃染惡化需立即就醫）、呼吸狀況和活動力變化。',
  },
  diagnostic_data: null,
  procedure_data: null,
  visual_placeholders: [
    { position: '病理機轉段落後', type: 'flowchart', description: 'IMHA 病理機轉與溶血途徑流程圖（血管外 vs 血管內）' },
    { position: '診斷核心標準段落後', type: 'annotated_image', description: '血液抹片：球形紅血球、自凝集、polychromasia 標注圖' },
    { position: '治療方案段落後', type: 'flowchart', description: 'IMHA 治療決策流程圖（輸血指標 + 免疫抑制階梯）' },
  ],
  interactive_placeholders: [],
  drug_api_links: ['Prednisolone', 'Dexamethasone', 'Mycophenolate', 'Cyclosporine', 'Azathioprine', 'Clopidogrel', 'Enoxaparin'],
  references: [
    { type: 'guideline', citation: 'Garden OA et al. "ACVIM consensus statement on the diagnosis of immune-mediated hemolytic anemia in dogs and cats." J Vet Intern Med. 2019;33(2):313-334.', relevance: 'IMHA 診斷 ACVIM 共識（診斷分層、自凝集、Coombs）' },
    { type: 'guideline', citation: 'Swann JW et al. "ACVIM consensus statement on the treatment of immune-mediated hemolytic anemia in dogs." J Vet Intern Med. 2019;33(3):1141-1172.', relevance: 'IMHA 治療 ACVIM 共識（免疫抑制階梯 + 全面抗血栓）' },
    { type: 'journal', citation: 'Agnoli C et al. "Randomized controlled trial of mycophenolate mofetil combined with prednisolone versus prednisolone alone for the treatment of canine non-associative immune-mediated hemolytic anemia." J Vet Intern Med. 2024. doi:10.1111/jvim.17122.', relevance: '2024 RCT：一線加 MMF 未改善反應率、存活反而較差（待 DVM 審閱）' },
    { type: 'journal', citation: 'Swann JW, Skelly BJ. "Systematic review of evidence relating to the treatment of immune-mediated hemolytic anemia in dogs." J Vet Intern Med. 2013;27(1):1-9.', relevance: 'IMHA 治療系統性回顧' },
    { type: 'journal', citation: 'Weinkle TK et al. "Evaluation of prognostic factors, survival rates, and treatment protocols for immune-mediated hemolytic anemia in dogs: 151 cases (1993-2002)." J Am Vet Med Assoc. 2005;226(11):1869-1880.', relevance: 'IMHA 預後因子與存活率分析' },
    { type: 'textbook', citation: 'Ettinger SJ, Feldman EC. Textbook of Veterinary Internal Medicine, 8th ed. Elsevier, 2017. Chapter on IMHA.', relevance: 'IMHA 基礎教材' },
  ],
  is_current: true,
  created_at: now,
};

/** 糖尿病，疾病型 */
const contentDM: NodeContent = {
  id: 'CONTENT-IM-L3-006',
  node_id: 'IM-L3-006',
  version: 2,
  summary: '糖尿病在犬貓門診常見得不行，本質上就是長期高血糖加糖尿。犬多半走 Type 1，胰島 β 細胞被打掉，要打一輩子胰島素。貓多走 Type 2，是胰島素阻抗加上 β 細胞功能不全，運氣好的還能緩解。胰島素仍是基石（犬首選中效 NPH，貓首選長效 Glargine/PZI）；但 2022 年起貓多了一個重大新選項——口服 SGLT2 抑制劑（bexagliflozin/Bexacat、velagliflozin/Senvelgo），僅限「健康、新診斷、從未用過胰島素」的貓，且須嚴防正常血糖型酮酸中毒。監測也從住院血糖曲線轉向居家連續血糖監測（CGM）。',
  learning_objectives: [
    '比較犬（Type 1 為主）與貓（Type 2 為主）糖尿病的病因、病理生理與治療差異',
    '正確判讀血糖曲線（blood glucose curve）並據此調整胰島素劑量',
    '辨識糖尿病酮酸中毒（DKA）的臨床特徵並啟動急救處理',
    '說明 Somogyi effect 與胰島素劑量不足的鑑別方式',
    '制定糖尿病犬貓的長期居家管理計畫',
    '說明貓用口服 SGLT2 抑制劑的適應症、禁忌與正常血糖型 DKA 的監測重點',
    '說明連續血糖監測 (CGM/FreeStyle Libre) 取代住院血糖曲線的優勢與限制',
  ],
  key_points: [
    '犬 DM 多為 Type 1（免疫介導 β-cell 破壞），需終生胰島素；貓 DM 多為 Type 2（胰島素阻抗），約 30-40% 可達臨床緩解',
    '診斷標準：持續性高血糖（犬 > 200 mg/dL、貓 > 300 mg/dL）+ 糖尿 + 臨床症狀',
    '犬首選胰島素：NPH（Humulin N）0.25-0.5 U/kg SC BID；貓首選：Glargine（Lantus）0.25-0.5 U/kg SC BID 或 PZI',
    '貓 DM 緩解關鍵：早期積極胰島素治療 + 高蛋白低碳水化合物飲食 + 消除胰島素阻抗因子（肥胖、糖皮質素）',
    'Fructosamine 反映過去 2-3 週的平均血糖控制（犬 < 400 μmol/L、貓 < 450 μmol/L 良好控制）',
    'DKA 為急診：高血糖 + 酮體（β-hydroxybutyrate）+ 代謝性酸中毒 + 脫水',
    'Somogyi effect：胰島素過量 → 低血糖反彈 → 反調節荷爾蒙釋放 → 高血糖。與劑量不足難以區分，需血糖曲線',
    '貓專用口服 SGLT2 抑制劑（bexagliflozin/Bexacat 2022、velagliflozin/Senvelgo 2023）：僅限健康、新診斷、未曾用胰島素之貓；機轉不依賴胰島素故低血糖風險低，但須嚴防正常血糖型 DKA（監測酮體而非血糖）',
    '連續血糖監測 (CGM, 如 FreeStyle Libre) 已納入 AAHA 2022 更新並大致取代住院血糖曲線；低血糖端會低估，疑似低血糖仍須血糖儀確認',
  ],
  body: `# 糖尿病 (Diabetes Mellitus, DM)

## 一、病理機制 (Pathophysiology)

### 犬 DM（以 Type 1 為主）

整個機轉跑起來的時候是這樣：遺傳易感性 + 環境觸發→免疫介導性胰島 β 細胞破壞（T 細胞 + 自體抗體攻擊胰島抗原：insulin、GAD65、IA-2）→漸進性 β 細胞喪失（>80-90% 喪失時出現臨床症狀）→絕對胰島素缺乏→終生需要外源性胰島素

其他犬 DM 病因：胰臟炎（β 細胞破壞）→胰源性 DM；[藥物:Prednisolone]/黃體素→胰島素阻抗→暫時性或永久性 DM（母犬黃體期/progestagen 使用）

### 貓 DM（以 Type 2 為主）

整個機轉跑起來的時候是這樣：肥胖→脂肪細胞 adipokine 失衡 (adiponectin↓, TNF-α↑, resistin↑)→胰島素阻抗 + 長期高血糖→β 細胞持續高負荷分泌→胰島類澱粉沉著 (islet amyloid polypeptide/IAPP deposition)→β 細胞又被壓得更慘→β 細胞功能不全 + 數量減少

[圖片:DM pathophysiology comparison，canine Type 1 (immune-mediated β-cell destruction) vs feline Type 2 (insulin resistance + IAPP amyloidosis)]

貓的糖毒性 (glucose toxicity)：血糖一直壓不下來，β 細胞功能會被壓得更死，惡性循環。但只要早期用胰島素積極把血糖拉回來，糖毒性解除掉，β 細胞功能有機會回來，約 30-40% 的貓最後可以達到臨床緩解 (diabetic remission)。

### DKA 機轉
胰島素缺乏嚴重→脂肪分解↑→FFA→肝臟β-氧化→酮體 (β-hydroxybutyrate, acetoacetate) 過量生成→代謝性酸中毒→電解質紊亂 (K↓, P↓)→脫水→休克

## 二、臨床表現與診斷 (Clinical Signs & Diagnosis)

| 臨床表現 | 犬 | 貓 | 備註 |
|---------|----|----|------|
| 多渴多尿 (PU/PD) | 常見 | 常見 | 滲透性利尿 |
| 多食 (polyphagia) | 常見 | 常見 | 細胞飢餓 |
| 體重減輕 | 常見 | 常見 | 脂肪/蛋白分解 |
| 白內障 | 犬特有 (~75%) | 不發生 | 山梨醇累積 |
| 足底著地 (plantigrade stance) | 不適用 | 貓特有 ~10% | 糖尿病性神經病變 |
| DKA 表現 | 嘔吐/脫水/虛脫 | 嘔吐/脫水/虛脫 | 急診 |

### 診斷標準

| 條件 | 犬 | 貓 |
|------|----|----|
| 空腹血糖 | >200 mg/dL | >300 mg/dL（排除壓力性高血糖） |
| 糖尿 | 持續性 | 持續性 |
| 果糖胺 (Fructosamine) | >350 μmol/L | >400 μmol/L |

貓壓力性高血糖鑑別：貓住院/緊迫可致短暫高血糖 + 糖尿→Fructosamine 可區分（壓力性正常、DM 升高）。

### DKA 診斷
- 高血糖 + 酮尿/酮血 + 代謝性酸中毒 (pH <7.3, HCO3 <15)
- β-hydroxybutyrate >3.0 mmol/L（尿酮試紙可能漏測 BHB）

## 三、治療策略 (Treatment)

### 犬 DM

| 治療 | 首選藥物 | 劑量 | 備註 | 證據等級 |
|------|---------|------|------|---------|
| 胰島素 | [藥物:NPH] (Humulin N) 或 [藥物:Vetsulin] (Caninsulin) | 0.25-0.5 U/kg SC BID | 犬首選中效胰島素 | Level I |
| 飲食 | 高纖維/複合碳水化合物 |—| 減緩葡萄糖吸收 | Level II |
| 運動 | 規律適度運動 |—| 促進胰島素敏感性 | Level III |

### 貓 DM

| 治療 | 首選藥物 | 劑量 | 備註 | 證據等級 |
|------|---------|------|------|---------|
| 胰島素 | [藥物:Glargine] (Lantus) 或 [藥物:PZI] | 0.25-0.5 U/kg SC BID | 貓首選長效胰島素 | Level I |
| 口服 SGLT2 抑制劑 | [藥物:Bexagliflozin] (Bexacat) | 15 mg 錠 PO SID（貓 ≥ 3.0 kg） | **僅限健康、新診斷、未曾用胰島素之貓**；黑框警告：正常血糖型 DKA 風險 | Level I（FDA 核准 2022/12） |
| 口服 SGLT2 抑制劑 | [藥物:Velagliflozin] (Senvelgo) | 1 mg/kg 口服液 PO SID | 同上；**禁用於曾／正用胰島素之貓**（試驗中近 20% 發生 DKA） | Level I（FDA 核准 2023/08） |
| 飲食 | 高蛋白低碳水化合物 | <15% ME from carbs | 緩解關鍵 | Level I |
| 減重 | 消除肥胖 |—| 降低胰島素阻抗 | Level I |

貓 DM 緩解策略：早期積極胰島素 + 高蛋白低碳水飲食 + 消除胰島素阻抗因子→約 30-40% 可達緩解。

#### SGLT2 抑制劑（貓專用，2022 起的新選項）

機轉：阻斷腎近曲小管的鈉-葡萄糖共同轉運蛋白 2，減少腎臟葡萄糖再吸收、促進尿糖排出來降血糖。**機轉不依賴胰島素**，單用低血糖風險低，且為口服、飼主接受度高。

**最關鍵安全議題——正常血糖型酮酸中毒 (euglycemic DKA)**：因藥效與血糖脫鉤，DKA 可在血糖接近正常時發生、可能致死（FDA 黑框警告）。安全試驗中約 5% 新診斷貓發生 DKA，多數於前 7 天內、且約 8 成為 euglycemic。因此監測重點是「臨床症狀 + 酮體」而非血糖：
- 用藥前篩檢血中 β-羥基丁酸（BHB 優於尿試紙；BHB > 2.4 mmol/L 應改用胰島素），並確認貓**食慾、活力、水合正常**、無顯著腎/肝功能異常或胰臟炎。
- 前 14 天密集回測酮體。
- 一旦出現厭食、嗜睡、脫水、嘔吐或體重下降，**無論血糖高低，立即停藥並評估 DKA**。

> 適應症僅限「整體健康、新診斷、從未使用過胰島素」的貓。曾／正在使用胰島素、酮症或厭食的貓**禁用**。緩解率在 SGLT2i 時代尚未確立，且因藥物造成持續尿糖，須暫時停藥才能判定是否緩解。

### DKA 急救

| 步驟 | 措施 | 目的 |
|------|------|------|
| 1 | 0.9% NaCl IV + KCl 補充 | 矯正脫水 + 補鉀 |
| 2 | Regular insulin CRI（**犬：0.05–0.1 U/kg/hr**；**貓：0.025–0.05 U/kg/hr**，貓對胰島素更敏感） | 降血糖（目標速率：50–75 mg/dL/hr，< 50 mg/dL/hr 速度下降需加 dextrose） |
| 3 | 血糖 <250 時加 2.5-5% dextrose | 預防低血糖 |
| 4 | KPO4 補充 | 矯正低磷（再餵食效應） |
| 5 | NaHCO3（僅 pH <7.0） | 嚴重酸中毒時 |

DKA 近期實證：建議以**即時血液 β-羥基丁酸 (β-OHB)** 取代尿酮作為診斷與療效追蹤指標（貓研究中以 β-OHB < 2.55 mmol/L 作為緩解終點，靈敏度高）；貓 DKA 中，basal-bolus [藥物:Glargine] 已被證實為傳統 regular insulin CRI 的有效且更簡便替代方案（Zeugswetter, JVECC 2021）。

## 四、併發症與監控 (Complications & Monitoring)

| 併發症 | 物種 | 機轉 | 監測/處理 |
|--------|------|------|---------|
| 糖尿病性白內障 | 犬特有 | 山梨醇累積→晶體腫脹 | 手術摘除 |
| 糖尿病性神經病變 | 貓為主 | Schwann cell 損傷 | 血糖控制後可改善 |
| Somogyi effect | 兩者 | 低血糖反彈→高血糖 | 血糖曲線確認→降低劑量 |
| 胰島素阻抗 | 兩者 | UTI、庫欣、感染 | 排除潛在原因 |
| 低血糖 | 兩者 | 胰島素過量 | 教育飼主辨識+處理 |

血糖曲線 (Blood Glucose Curve, BGC)：每 2h 測血糖 × 12h。目標犬 100-250 mg/dL；貓 100-300 mg/dL。Nadir 不應 <80 mg/dL。

居家監測：耳廓邊緣採血 + glucometer，每週 spot check（比在院 BGC 更反映真實控制）。

### 現代血糖監測：連續血糖監測 (CGM / FGMS)

監測重心已由「住院、反覆靜脈採血製作血糖曲線」轉向「居家連續血糖監測」。Abbott FreeStyle Libre 等組織間液 CGM 每約 15 分鐘記錄一次、可佩戴達 14 天，提供 24 小時連續血糖曲線，能捕捉到傳統間歇採血會遺漏的低血糖事件與 Somogyi 反應。AAHA 2018 指引之 2022 年更新已正式納入 CGM；對**貓**尤其有利，因居家量測可避免**緊張性高血糖 (stress hyperglycemia)** 造成的判讀誤差，大致終結了「為了血糖曲線而住院」的做法。臨床上亦開始套用人醫的 **TIR（目標範圍內時間，70-250 mg/dL）**、TAR、TBR 與變異係數 (CV%) 等指標評估控制品質。

**使用限制需牢記**：感測器在**低血糖（<70 mg/dL）時可靠度下降、傾向低估血糖**，對快速變化偵測不佳；讀數有上限（FSL1 約 500、FSL2 約 400 mg/dL），會低估重度高血糖的變異；組織間液與血糖間存在數分鐘延遲；貓的感測器附著與留置時間常不足 14 天。臨床疑似低血糖時，仍應以血糖儀確認、不可單憑 CGM 數值。

## 五、預後與預後因子 (Prognosis)

| 情境 | 預後 | 備註 |
|------|------|------|
| 犬穩定 DM | 佳 | 中位存活 2-3 年（多數死於非 DM 相關原因） |
| 貓 DM 達緩解 | 極佳 | 約 30-40%；部分可能復發 |
| 貓 DM 需長期胰島素 | 佳 | 良好控制下生活品質良好 |
| DKA | 謹慎 | 死亡率 ~25-30% |

跟飼主談時：DM 是長期病，但管得起來。犬要打一輩子胰島素，貓有機會緩解。居家監測加上定期回診，這兩件做到位就贏一半了。低血糖是最危險的急症，飼主一定要會看會處理。

## 六、人醫借鑑 (Translational Insights)

- 犬 Type 1 DM 為人類 T1DM 的天然動物模型，自體免疫機轉高度相似
- 人醫 continuous glucose monitoring (CGM) 系統（如 FreeStyle Libre）已在犬貓驗證並廣泛應用，逐步取代住院血糖曲線
- 人醫 SGLT2 抑制劑已「反向轉譯」進獸醫：2022（bexagliflozin）、2023（velagliflozin）相繼獲 FDA 核准用於貓 DM，惟須嚴防正常血糖型 DKA
- 人醫 HbA1c 的概念對應獸醫 Fructosamine，但 Fructosamine 反映時間更短（2-3 週 vs 2-3 個月）
- 人醫 closed-loop insulin pump (artificial pancreas) 概念可能未來應用於獸醫

## 七、臨床爭議與知識空缺 (Controversies & Knowledge Gaps)

| 爭議主題 | 目前立場 | 證據等級 | 研究方向 |
|---------|---------|---------|---------|
| Glargine vs PZI（貓）| 兩者等效，Glargine 較常用 | Level II | 頭對頭比較緩解率 |
| CGM 在獸醫的角色 | 已驗證並納入指引，惟低血糖端準確度仍有限 | Level II | 新世代感測器（FSL2/3）低血糖端驗證 |
| 口服降血糖藥（貓）| SGLT2 抑制劑已核准為首選之一（限胰島素未治療貓），euglycemic DKA 為主要顧慮 | Level I | SGLT2i 的緩解率與長期安全性 |
| 犬胰島素 SID vs BID | BID 為標準 | Level II | 長效胰島素 SID 可行性？ |
| 貓 DM 緩解後的最佳追蹤 | 定期 Fructosamine/血糖 | Level III | 緩解後復發預測因子？ |`,
  clinical_pearl: '貓糖尿病最迷人的地方是「臨床緩解」這個概念。新診斷的糖尿病貓裡，大概 30-40% 在幾週到幾個月內可以做到緩解，貓不再需要打胰島素。關鍵幾件事：第一，越早開始積極打胰島素越好，目的是把糖毒性解開。第二，飲食馬上換成高蛋白低碳水（碳水 < 10% ME）。第三，把胰島素阻抗的因子清掉，類固醇停掉、把體重減下來。Glargine 在促進緩解這件事上，比 PZI 略佔便宜。等胰島素需求量降到 < 1 U/次（一天兩次）、血糖也一直壓在 200 mg/dL 以下，就可以嘗試停藥看看。但要記得，緩解的貓裡有四分之一到三分之一會在幾個月或幾年後復發，所以追蹤不能停。\n\n【台灣流行病學】台灣犬貓糖尿病盛行率這幾年一直在往上爬，跟室內飼養、高熱量飲食、肥胖問題完全脫不了關係。台灣貓的肥胖盛行率估計超過三成，這就是糖尿病最大的引線。犬糖尿病在台灣多半碰到中老年母犬，貴賓、臘腸這些常見小型犬都跑不掉。台灣市場上 Glargine（Lantus）和 NPH 都拿得到，PZI（ProZinc）要特別進口。居家自己量血糖（home glucose monitoring）這件事，台灣飼主慢慢願意配合了。',
  common_mistakes: [
    '僅憑單次高血糖就診斷貓糖尿病（貓壓力性高血糖很常見，需搭配 Fructosamine 和持續性糖尿確診）',
    '犬使用 Glargine 或貓使用 NPH（物種胰島素選擇不同：犬首選 NPH、貓首選 Glargine/PZI）',
    '血糖曲線的 nadir 過低（< 65 mg/dL）未被辨識為 Somogyi effect，反而增加劑量',
    '犬未絕育母犬糖尿病未建議立即絕育（黃體素是強力胰島素拮抗因子）',
    '未積極搜尋胰島素阻抗因子就認定「胰島素劑量不夠」而一直加量',
    '對曾／正在使用胰島素、或有酮症/厭食的貓使用 SGLT2 抑制劑（禁忌；DKA 風險大增），或用藥後僅監測血糖而忽略酮體（漏掉正常血糖型 DKA）',
  ],
  disease_data: {
    signalment: '犬：中老年（7-9 歲），未絕育母犬風險高（黃體素），好發品種：Samoyed、Australian Terrier、Miniature Schnauzer、Miniature/Toy Poodle、Pug、Bichon Frise。貓：中老年（> 8 歲），去勢公貓風險最高（肥胖傾向），Burmese 品種風險 2-4 倍。',
    etiology: '犬：免疫介導性 β-cell 破壞（Type 1 為主）、慢性胰臟炎致 β-cell 損傷、醫源性（長期糖皮質素/progestins）。貓：肥胖致胰島素阻抗（Type 2 為主）、胰島澱粉樣沉積（amylin/IAPP 蓄積 → β-cell 喪失）、糖皮質素使用、慢性胰臟炎。共同加重因子：感染（UTI 常見）、並存內分泌疾病（犬 Cushing、貓甲亢/肢端肥大症）。',
    pathogenesis: '犬走的是 Type 1。自體免疫或胰臟炎把 β-cell 一直打掉，胰島素就完全沒了，血糖飆高、過腎閾（犬大約 180 mg/dL），糖尿跟著來、滲透性利尿把水逼掉，PU/PD 跑出來，能量改用脂肪分解供應，酮體就有了（DKA 的風險）。貓走的是 Type 2。一開始肥胖讓周邊組織胰島素阻抗，β-cell 就代償性多分泌，amylin 也跟著多分泌，最後在胰島裡形成澱粉樣沉積，β-cell 一個個掛掉，胰島素相對不足，血糖一直壓不下來，糖毒性又把剩下的 β-cell 悶住，就是惡性循環。但只要把糖毒性解開（胰島素治療降血糖），殘餘 β-cell 功能還有機會回來，貓就可能緩解。',
    clinical_signs: [
      { sign: '多渴多尿 (PU/PD)', category: 'primary', description: '高血糖致滲透性利尿，最常見主訴' },
      { sign: '多食 (polyphagia)', category: 'primary', description: '細胞無法利用葡萄糖 → 饑餓訊號持續' },
      { sign: '體重減輕', category: 'primary', description: '脂肪和蛋白質分解代替供能' },
      { sign: '後肢跛行姿勢（貓）', category: 'primary', description: '糖尿病性周邊神經病變（plantigrade stance），約 10% 貓 DM 可見' },
      { sign: '白內障（犬）', category: 'secondary', description: '犬 DM 獨特併發症，約 75% 犬在診斷後 1 年內發生白內障' },
      { sign: '肝臟腫大', category: 'secondary', description: '肝臟脂肪蓄積（hepatic lipidosis，貓尤其常見）' },
      { sign: '反覆泌尿道感染', category: 'secondary', description: '高血糖尿液利於細菌繁殖 + 免疫功能低下' },
    ],
    staging: null,
    differential_diagnosis: [
      { condition: '壓力性高血糖（貓）', key_differentiator: '通常 < 300 mg/dL、Fructosamine 正常（< 340 μmol/L）、糖尿為暫時性' },
      { condition: '腎上腺皮質機能亢進（Cushing）', key_differentiator: '犬 Cushing 約 10% 併發 DM；Cushing 有典型皮膚/壺腹腹表現，LDDST 確認' },
      { condition: '肢端肥大症（貓）', key_differentiator: '生長激素過度分泌致胰島素阻抗，IGF-1 升高（> 1000 ng/mL），可能有面容改變和體重增加' },
      { condition: '甲亢併發高血糖（貓）', key_differentiator: '甲亢可增加胰島素阻抗，T4 升高可鑑別' },
      { condition: '腎性糖尿', key_differentiator: '糖尿但血糖正常（腎小管對葡萄糖再吸收缺陷），極罕見' },
    ],
    diagnostic_workup: '1. 血糖（犬 > 200 mg/dL / 貓 > 300 mg/dL 持續性高血糖）→ 2. 尿液分析（糖尿確認 + USG + 沉渣 + 培養排除 UTI）→ 3. Fructosamine（> 400 μmol/L 犬 / > 450 貓 支持持續性高血糖）→ 4. CBC/生化全套（肝指數、電解質、三酸甘油酯、膽固醇、Lipase/cPLI）→ 5. 排除共病：犬測 cortisol / LDDST（Cushing）；貓測 T4（甲亢）→ 6. DKA 評估：血液氣體分析、酮體（β-hydroxybutyrate）、電解質（K、Phos）→ 7. 腹腔超音波（胰臟、肝臟、腎上腺評估）',
    treatment_protocol: 'Primary care，犬：NPH (Humulin N) 0.25-0.5 U/kg SC BID 餐時注射 + 高纖維飲食 + 規律運動 + 未絕育母犬立即絕育。貓：Glargine (Lantus) 0.25-0.5 U/kg SC BID 或 PZI (ProZinc) 0.25-0.5 U/kg SC BID + 高蛋白低碳水化合物飲食（碳水 < 10% ME）+ 緩慢減重。兩者共通：7-14 天後回診做血糖曲線（或居家 FreeStyle Libre）、根據 nadir 調整劑量（每次 0.5-1 U/injection）、監測 Fructosamine 每 4-6 週。Specialty care，DKA 急救：0.9% NaCl 輸液矯正脫水 + Regular insulin CRI 0.05-0.1 U/kg/hr IV（或 IM protocol）+ 鉀補充（依血鉀濃度調整添加量）+ 磷補充（若 < 1.5 mg/dL）+ 碳酸氫鈉僅 pH < 7.0 時使用 + 止吐（Maropitant）+ 處理觸發因子（胰臟炎、UTI、Cushing）。持續性胰島素阻抗調查：尿液培養（隱匿性 UTI）、LDDST（Cushing, 犬）、IGF-1（肢端肥大症, 貓）、腹腔超音波。',
    prognosis: '犬 DM：需終生胰島素治療，緩解極罕見（除非醫源性且移除原因）。控制良好的犬中位存活 2-3 年。約 75% 在 1 年內發生白內障。貓 DM：約 30-40% 可達臨床緩解（尤其新診斷、早期積極治療、消除胰島素阻抗）。緩解貓中約 25-30% 會復發。未緩解貓需終生胰島素。DKA 住院死亡率約 20-30%。不良預後指標：合併胰臟炎、DKA、持續性胰島素阻抗、酮血症。',
    monitoring: '起始治療後 7-14 天：血糖曲線（每 2 小時 × 12 小時，或 FreeStyle Libre）。穩定後每 1-3 個月：Fructosamine + 血糖曲線 + 臨床評估（體重、飲水量、尿量）。每 6 個月：CBC/生化 + 尿液分析與培養（排除 UTI）。貓緩解後：每 2 週居家血糖監測前 3 個月，之後每月。犬白內障監測：每 6 個月眼科評估。',
    owner_communication: '糖尿病是可以管理的慢性疾病。犬需要終生每天注射胰島素，但大多數飼主很快就能學會。貓有機會緩解（約三至四成），早期積極治療和飲食管理是關鍵。居家需注意飲水量和排尿量的變化。低血糖是最需要警覺的急症，如果狗狗或貓咪出現虛弱、顫抖、抽搐，要立即給蜂蜜或糖水塗在牙齦上並立刻就醫。定期回診做血糖曲線是調整劑量的關鍵。',
  },
  diagnostic_data: null,
  procedure_data: null,
  visual_placeholders: [
    { position: '物種差異表後', type: 'comparison_table', description: '犬 vs 貓糖尿病完整比較表' },
    { position: '血糖曲線判讀段落後', type: 'flowchart', description: '血糖曲線判讀與劑量調整流程圖' },
  ],
  interactive_placeholders: [
    { position: '血糖曲線段落', type: 'interactive_staging', description: '輸入血糖曲線數值自動判讀並建議調整方向' },
  ],
  drug_api_links: ['NPH insulin', 'Glargine', 'PZI', 'Regular insulin', 'Maropitant'],
  references: [
    { type: 'guideline', citation: 'Behrend E et al. "2018 AAHA Diabetes Management Guidelines for Dogs and Cats." J Am Anim Hosp Assoc. 2018;54(1):1-21（2022 更新納入 CGM、ProZinc/PZI 犬每日一次）.', relevance: 'AAHA 糖尿病管理指引' },
    { type: 'label', citation: 'FDA/DailyMed. Bexacat (bexagliflozin) prescribing information & boxed warning (FDA approval 2022-12-08).', relevance: '貓口服 SGLT2 抑制劑：適應症、劑量、euglycemic DKA 黑框警告（2026-06 新增）' },
    { type: 'label', citation: 'FDA Animal Drugs / DailyMed. Senvelgo (velagliflozin) oral solution prescribing information (FDA approval 2023-08; 1 mg/kg PO SID).', relevance: '貓口服 SGLT2 抑制劑（液劑）（2026-06 新增）' },
    { type: 'journal', citation: 'Cook AK, Behrend E. "SGLT2 inhibitor use in the management of feline diabetes mellitus." J Vet Pharmacol Ther. 2024.', relevance: 'SGLT2i 機轉、療效與 DKA 風險回顧（2026-06 新增）' },
    { type: 'journal', citation: 'Rothlin-Zachrisson N et al. "Survival, remission, and quality of life in diabetic cats." J Vet Intern Med. 2023;37(1):58-69.', relevance: '貓 DM 緩解率與飲食關聯（2026-06 新增）' },
    { type: 'journal', citation: 'Del Baldo F et al. "Accuracy of a flash glucose monitoring system in cats." J Vet Intern Med. 2021；及 FreeStyle Libre-derived metrics in diabetic dogs, JVIM 2025；Corradini S et al., JVIM 2016（犬驗證）.', relevance: '連續血糖監測（CGM/FreeStyle Libre）驗證（2026-06 新增）' },
    { type: 'journal', citation: 'Zeugswetter FK et al. "Glargine versus regular insulin protocol in feline diabetic ketoacidosis." J Vet Emerg Crit Care. 2021.', relevance: 'DKA 之 basal-bolus glargine 替代 CRI（2026-06 新增）' },
    { type: 'textbook', citation: 'Feldman EC et al. Canine and Feline Endocrinology, 4th ed. Elsevier, 2015. Chapters on Diabetes Mellitus.', relevance: '糖尿病完整參考章節' },
    { type: 'journal', citation: 'Roomp K, Rand J. "Intensive blood glucose control is safe and effective in diabetic cats using home monitoring and treatment with glargine." J Feline Med Surg. 2009;11(8):668-682.', relevance: '貓 Glargine 治療與緩解策略' },
    { type: 'journal', citation: 'O\'Brien MA. "Diabetic emergencies in small animals." Vet Clin North Am Small Anim Pract. 2010;40(2):317-333.', relevance: 'DKA 急救管理' },
  ],
  is_current: true,
  created_at: now,
};

/** 慢性腸病 (IBD/CE)，疾病型 */
const contentCE: NodeContent = {
  id: 'CONTENT-IM-L3-007',
  node_id: 'IM-L3-007',
  version: 2,
  summary: '慢性腸病（CE）這名字其實是一票疾病的總稱：犬貓持續或反覆出現消化道症狀超過 3 週的都算。底下包括食物反應性腸病（FRE）、抗生素反應性腸病（ARE）、免疫抑制劑反應性腸病（IRE/IBD）跟蛋白質流失性腸病（PLE）。現代主流的分類方式不是看組織學長什麼樣，而是看狗對什麼治療有反應。',
  learning_objectives: [
    '說明慢性腸病的現代分類系統（FRE、ARE、IRE、PLE）及其治療反應基礎',
    '制定慢性腸病的系統性排除診斷流程',
    '運用 CCECAI 或 CIBDAI 評分系統量化犬 CE 嚴重度',
    '設計階梯式治療方案（飲食試驗 → 抗生素 → 免疫抑制）',
    '說明腸道微生物群（microbiome）在 CE 中的角色與 FMT 的應用前景',
  ],
  key_points: [
    'CE 定義：消化道症狀 > 3 週 + 排除感染性/結構性/代謝性/腫瘤性原因',
    '分類依治療反應：FRE（食物反應性，約 50-60%）> ARE（抗生素反應性，~15%）> IRE/IBD（免疫抑制劑反應性，~25%）> PLE',
    'FRE 為最常見亞型，飲食試驗是 CE 診斷流程的第一步',
    '組織學確診需內視鏡多部位切片，但組織學分級與臨床嚴重度相關性有限',
    'WSAVA 組織學分級標準化了腸道發炎評估（輕度/中度/重度）',
    '犬 CE 活動指數（CCECAI）≥ 10 分提示較差預後，需積極治療',
    'Cobalamin（Vitamin B12）缺乏在 CE 中常見且影響預後，必須補充',
    '飲食試驗：水解蛋白或新型蛋白飲食，至少 2-4 週（理想 6-8 週）',
    '近期實證（Pilla 2020）：metronidazole 傷腸道菌相且 dysbiosis 停藥後持續數週→抗生素不再是 CE 常規步驟，飲食無效應直接評估內視鏡/免疫抑制（肉芽腫性結腸炎例外）',
  ],
  body: `# 慢性腸病 (Chronic Enteropathy, CE)

## 一、病理機制 (Pathophysiology)

CE 不是一個單一疾病，是一票疾病的集合，重點在於腸道黏膜免疫系統對腸腔裡的食物跟細菌做出不該有的反應。

故事大概這樣跑：個體本來就有遺傳易感性（犬 MHC/DLA 多態性、NOD2/TLR 變異會讓先天免疫辨識變得不正常），再碰到環境觸發因子（飲食抗原、腸道微生物失衡也就是 dysbiosis）。腸道屏障先撐不住（tight junction 鬆掉，通透性升高），腸腔抗原穿過黏膜進去，黏膜免疫系統過度活化（Th1/Th17 失衡、調節性 T 細胞功能也不夠），慢性發炎跟著上來（淋巴漿細胞跟嗜酸球都跑進去），黏膜被打傷，屏障壞得更慘。一旦進入這個迴圈就很難回頭。

[圖片:CE pathophysiology，genetic susceptibility + environmental triggers → mucosal barrier disruption → immune dysregulation → chronic inflammation cycle]

腸道微生物群 (Microbiome) 的角色：
- CE 犬的腸道微生物群組成與健康犬明顯不同（Dysbiosis Index 可量化）
- Fusobacterium、Clostridium hiranonis 等有益菌↓；Escherichia coli↑
- 膽汁酸代謝異常（初級膽汁酸↑、次級膽汁酸↓）→與 dysbiosis 密切相關

### CE 分類（依治療反應）

| 亞型 | 比例 | 特徵 |
|------|------|------|
| 食物反應性 (FRE) | ~50-60% | 飲食試驗改善，最常見 |
| 抗生素反應性 (ARE) | ~10-15% | Metronidazole/Tylosin 改善 |
| 免疫抑制劑反應性 (IRE/IBD) | ~25-30% | 需免疫抑制治療 |
| 蛋白質流失性 (PLE) | ~10% | 白蛋白↓，最嚴重 |

## 二、臨床表現與診斷 (Clinical Signs & Diagnosis)

| 臨床表現 | 小腸型 | 大腸型 | 混合型 |
|---------|--------|--------|--------|
| 下痢特徵 | 量多、水樣、體重↓ | 少量、黏液/血絲、裡急後重 | 兩者混合 |
| 嘔吐 | 常見 | 較少 | 變異大 |
| 體重變化 | 常減輕 | 通常穩定 | 變異大 |
| 食慾 | 可能↓ | 通常正常 | 變異大 |

### 診斷流程（階梯式排除）

Step 1：排除非 CE 原因
- 糞便浮游法/PCR（寄生蟲：Giardia, Whipworm）
- CBC/生化/TLI/fPLI（排除 EPI、胰臟炎、代謝性疾病）
- 影像學（腹部超音波排除結構性病變/腫瘤）

Step 2：飲食試驗（首先執行！）
- 水解蛋白飲食或新型蛋白飲食
- 嚴格執行 2-4 週（理想 6-8 週）
- 反應者 = FRE（最大宗）

Step 3：內視鏡 + 組織病理學
- 適應症：飲食試驗無效 / 嚴重度高 / 低白蛋白
- 多部位切片（胃、十二指腸、迴腸、結腸）
- WSAVA 標準化分級

### 嚴重度評分

| 評分系統 | 指標 | 意義 |
|---------|------|------|
| CCECAI (Canine CE Activity Index) | 9 項（態度、食慾、嘔吐、糞便、體重等） | ≥10 分預後較差 |
| CIBDAI (Canine IBD Activity Index) | 6 項 | 傳統使用 |

## 三、治療策略 (Treatment)

### 階梯式治療

| 層級 | 治療 | 適應症 | 證據等級 |
|------|------|--------|---------|
| 第一層 | 飲食試驗（水解蛋白或新型蛋白） | 所有 CE 首先嘗試 | Level I |
| 第二層 | [藥物:Metronidazole] 10-15 mg/kg PO BID × 4-6 wk | FRE 無效時 | Level II |
| 第二層 | [藥物:Tylosin] 25 mg/kg PO BID | ARE 替代選項 | Level II |
| 第三層 | [藥物:Prednisolone] 1-2 mg/kg PO SID → 漸減 | IRE/IBD 確診後 | Level I |
| 第三層+ | [藥物:Chlorambucil] 4-6 mg/m2 q48h | 類固醇反應不佳 | Level II |
| 第三層+ | [藥物:Cyclosporine] 5 mg/kg PO SID（難治型可考慮 BID） | 替代免疫抑制 | Level II |
| 營養 | [藥物:Cobalamin] 補充（B12 低時必須） | 所有 CE | Level I |
| 新興 | 糞便微生物移植 (FMT) | 難治性 CE | Level III |

> ⚠️ **抗生素層級已過時**：上表「第二層＝抗生素」屬傳統階梯。依近年實證（見§八 Pilla 2020），metronidazole/tylosin 會傷菌相且 ARE 被高估，現代做法是**飲食試驗無效就直接評估內視鏡/免疫抑制**，抗生素保留給肉芽腫性結腸炎等明確適應症。

### 貓 CE 治療差異
- 貓以 lymphoplasmacytic enteritis 和小腸淋巴瘤為主
- [藥物:Prednisolone] + [藥物:Chlorambucil] 為貓 IBD/低度淋巴瘤的標準方案
- 貓 CE 的飲食試驗同樣重要

## 四、併發症與監控 (Complications & Monitoring)

| 併發症 | 機轉 | 監測 | 處理 |
|--------|------|------|------|
| Cobalamin 缺乏 | 迴腸吸收不良 | 血清 Cobalamin | 注射/口服補充 |
| 蛋白流失 (PLE) | 黏膜損傷/淋巴管擴張 | Albumin | 超低脂飲食 + 免疫抑制 |
| 腸道淋巴瘤轉化 | 長期慢性炎症（貓尤甚） | 內視鏡追蹤/clonality | 化療 |
| 免疫抑制副作用 | 長期類固醇 | 體重/血糖/肝指數 | 最低有效劑量 |

監測指標：
- CCECAI 評分 q4-8 週
- Albumin（PLE 風險者 q2-4 週）
- Cobalamin q3-6 個月（補充後）
- 體重 + BCS + MCS 每次回診
- Dysbiosis Index（可選，追蹤微生物群恢復）

## 五、預後與預後因子 (Prognosis)

| CE 亞型 | 預後 | 備註 |
|---------|------|------|
| FRE | 極佳 | 飲食控制下長期緩解 |
| ARE | 佳 | 可能復發，需長期飲食管理 |
| IRE/IBD（輕-中度） | 佳 | 免疫抑制控制下多可管理 |
| IRE/IBD（CCECAI ≥10） | 謹慎 | 需積極治療 |
| PLE（Alb 恢復 >2.0） | 中等 | 取決於根本原因 |
| PLE（Alb 持續 <1.5） | 不良 | 中位存活 2-5 月 |

負面預後因子：CCECAI ≥10、低 Cobalamin 未補充、低白蛋白血症、需要免疫抑制升級、Yorkshire Terrier PLE。

跟飼主談時：CE 多半可以靠飲食加藥物把症狀壓住。飲食試驗是第一步也是最關鍵的一步，就算後來要吃藥，飲食仍然是基本盤。

## 六、人醫借鑑 (Translational Insights)

- 犬 CE/IBD 為人類 Crohn's disease 和 ulcerative colitis 的天然動物模型
- 人醫 biologics (anti-TNF-α: infliximab; anti-integrin: vedolizumab) 在獸醫尚未廣泛使用
- 人醫 fecal microbiota transplantation (FMT) 用於 C. difficile 感染療效卓越，獸醫 FMT 用於 CE 初步有效但 RCT 不足
- 人醫 calprotectin 作為腸道炎症標記物，獸醫使用犬/貓特異性 calprotectin 和 S100A12 的研究增加中
- 人醫 capsule endoscopy 可評估小腸全段，獸醫小腸內視鏡仍有限

## 七、臨床爭議與知識空缺 (Controversies & Knowledge Gaps)

| 爭議主題 | 目前立場 | 證據等級 | 研究方向 |
|---------|---------|---------|---------|
| 組織學分級 vs 臨床嚴重度 | 相關性有限 | Level II | 更好的生物標記？ |
| 抗生素在 CE 中的角色 | 最新指引傾向減少使用 | Level II | 微生物群長期影響？ |
| FMT 最佳方案 | 有效但標準化不足 | Level III | 供體選擇、頻率、途徑 |
| Dysbiosis Index 的臨床價值 | 有用但非診斷性 | Level II | 追蹤治療反應？ |
| IBD vs 低度淋巴瘤鑑別 | 組織學 + clonality 分析 | Level II | 更好的分子標記？ |
| 飲食試驗最佳時長 | 2-4 週常用，6-8 週理想 | Level II | 最短有效試驗期？ |

## 八、近期實證更新 (Recent Evidence Update)

**抗生素退場：metronidazole/tylosin 不再是 CE 的常規步驟（Pilla et al 2020, JVIM）**
這是近年 CE 管理最重要的觀念翻轉。Pilla 2020 證實 **metronidazole 會明顯破壞犬腸道菌相**——多樣性下降、Fusobacterium 等有益菌被打掉、Enterobacteriaceae/E. coli 上升、膽汁酸代謝亂掉，而且**停藥後 dysbiosis 還會持續數週**。加上越來越多證據顯示「飲食 ± 免疫抑制」不靠抗生素也能控制，現代主流已**不建議把抗生素試驗當 CE 的常規第二步**——舊的「ARE（抗生素反應性腸病）」這個分類正在縮水、被認為過去被高估。
- **實務修正**：本節點 §三 的「第二層＝抗生素」屬傳統階梯，現代做法是**飲食試驗無效 → 直接評估內視鏡/免疫抑制**，把抗生素保留給特定情況，而不是每隻都試。
- **重要例外**：Boxer/法鬥的**肉芽腫性結腸炎（granulomatous colitis）**與黏膜內 E. coli 有關，**對 fluoroquinolone（如 enrofloxacin）有效**，這是少數抗生素確實該用的情境——別把「少用抗生素」過度套用到這一型。

**診斷與監測工具的演進（Allenspach & Mochel 2021, Vet Clin Pathol）**
CE 診斷正從「靠組織學嚴重度」往「臨床＋生物標記＋菌相」整合：dysbiosis index、糞便/血清生物標記（calprotectin、S100A12）、cobalamin/folate 仍是實用且可近的工具；組織學分級與臨床嚴重度相關性有限，不該單獨用來決定治療強度。

**主軸沒變、只是更乾淨**：飲食試驗仍是第一步（過半食物反應）、cobalamin 缺一定要補、真正的 IRE 才上免疫抑制。差別是——**少繞抗生素那一圈**。

【台灣落地】台灣門診過去很習慣 CE 先給 metronidazole，依新實證應調整：先嚴格飲食試驗，無效再評估內視鏡/免疫抑制，抗生素留給肉芽腫性結腸炎等明確適應症。`,
  clinical_pearl: '慢性腸病這套診斷流程裡，最常被人跳過、但其實也最關鍵的，是嚴格的飲食排除試驗。一半到六成的慢性腸病犬其實只要換對飲食就能控制（食物反應型）。但飲食試驗要嚴格執行：水解蛋白或真正的新型蛋白，持續至少 2-4 週。這段時間不能餵零食、潔牙骨、有味道的藥物膠囊，一個都不能漏。很多飼主沒辦法嚴格配合，結果做出來變成「飲食沒反應」，狗就被誤分類成 IRE/IBD 進到下一階段的免疫抑制治療。另外要記得 Cobalamin（B12）這件事：CE 裡常缺，而且本身就是個獨立的壞預後因子，治療一開始就要驗、要補。\n\n【台灣流行病學】慢性腸病在台灣門診常見到爆。亞熱帶氣候下，食物過敏跟環境過敏原暴露頻繁，食物反應型的比例可能比文獻還高。常見品種像法鬥、柴犬對飲食特別敏感。台灣的水解蛋白處方飲食選擇也多。最後一件事：在台灣門診看到慢性腸病，要記得跟壁蝨媒介感染（像 Ehrlichia）造成的消化道症狀分開來看，不要直接往 IBD 那條路衝。',
  common_mistakes: [
    '未先進行嚴格飲食排除試驗就給免疫抑制劑（至少 50% CE 是食物反應性的）',
    '飲食試驗不夠嚴格（飼主偷餵零食或其他食物，導致假性失敗）',
    '未測量和補充 Cobalamin（B12 缺乏影響預後，是獨立的不良預後因子）',
    '內視鏡切片數量不足或品質不佳（每部位需 6-8 個高品質切片以避免取樣偏差）',
    '貓 CE 未考慮小細胞淋巴瘤鑑別（兩者組織學可極度相似，需免疫組織化學和 clonality 分析）',
  ],
  disease_data: {
    signalment: '犬：任何年齡和品種，但 German Shepherd、Yorkshire Terrier、Boxer、French Bulldog、Soft-Coated Wheaten Terrier 為高風險品種。FRE 通常較年輕（< 5 歲）。貓：中老年貓（> 6 歲）為主，無明顯品種傾向，但 Siamese 可能有較高風險。',
    etiology: '多因性：遺傳易感性 + 環境觸發因子 + 腸道微生物群失調 + 免疫調節異常。遺傳因子：German Shepherd（IgA 缺乏）、Boxer（granulomatous colitis, E. coli 相關）、Basenji（免疫增生性腸病）。環境因子：飲食抗原、腸道菌群組成改變（dysbiosis）。免疫因子：腸道免疫耐受性喪失 → 對腸腔抗原（食物蛋白、共生菌）異常免疫反應。',
    pathogenesis: '遺傳易感個體 → 腸道屏障功能受損（tight junction 異常、黏液層減少）→ 腸腔抗原（食物蛋白、細菌成分）異常透過屏障 → 先天性和適應性免疫過度活化 → T cell 和 B cell 浸潤腸道固有層 → 慢性發炎 → 腸道吸收功能下降 + 通透性增加 → 營養吸收不良、蛋白質流失。腸道微生物群失調（dysbiosis）為重要的共同路徑：物種多樣性下降、潛在致病菌增加。',
    clinical_signs: [
      { sign: '慢性嘔吐', category: 'primary', description: '> 3 週，可為間歇性。犬和貓均常見' },
      { sign: '慢性腹瀉', category: 'primary', description: '小腸型（量多、水樣）或大腸型（頻繁、黏液血便）' },
      { sign: '體重減輕', category: 'primary', description: '營養吸收不良，蛋白質/脂肪消化異常' },
      { sign: '食慾改變', category: 'primary', description: '食慾下降（常見）或食慾亢進（吸收不良代償）' },
      { sign: '腹鳴/排氣增加', category: 'secondary', description: '腸道菌群失調和發酵異常' },
      { sign: '毛髮粗糙/無光澤', category: 'secondary', description: '慢性營養不良的反映' },
    ],
    staging: { system: 'CCECAI (Canine Chronic Enteropathy Clinical Activity Index)', stages: ['0-3 分：臨床無症狀/緩解', '4-5 分：輕度活動', '6-12 分：中度活動', '≥ 13 分：重度活動（預後不良指標 ≥ 10 分）'] },
    differential_diagnosis: [
      { condition: '腸道淋巴瘤', key_differentiator: '超音波可能見局灶性壁增厚或淋巴結腫大，組織學 + 免疫組織化學 + clonality 鑑別（尤其貓小細胞淋巴瘤 vs IBD）' },
      { condition: '外分泌胰臟機能不全（EPI）', key_differentiator: 'TLI（犬 < 2.5 μg/L、貓 < 8 μg/L）確診；EPI 通常有大量脂肪便' },
      { condition: '慢性胰臟炎', key_differentiator: 'fPLI/cPLI 升高，超音波胰臟異常；可與 CE 共存（尤其貓三體炎）' },
      { condition: '食物過敏/不耐受', key_differentiator: '嚴格來說 FRE 就是 CE 的一個亞型；飲食排除試驗可鑑別' },
      { condition: '寄生蟲感染（Giardia、Tritrichomonas）', key_differentiator: '糞便檢查、Giardia SNAP、PCR 可鑑別；需在 CE 診斷前排除' },
      { condition: 'Addison\'s disease', key_differentiator: '間歇性嘔吐腹瀉但有 Na:K < 27、ACTH stimulation test 可鑑別' },
    ],
    diagnostic_workup: '1. 糞便檢查（浮游法 × 3 + Giardia SNAP/PCR）→ 2. 基礎血檢：CBC/生化/T4（貓）→ 3. 特殊檢測：TLI（排除 EPI）、Cobalamin/Folate、cPLI/fPLI → 4. 尿液分析 → 5. SNAP 4Dx（犬，台灣排除壁蝨媒介疾病）→ 6. 腹腔超音波（腸壁厚度、分層、淋巴結、其他器官）→ 7. 飲食排除試驗 2-4 週 → 8. 若飲食無反應：可嘗試抗生素試驗 2-4 週 → 9. 若仍無反應：上下消化道內視鏡 + 多部位切片（每部位 6-8 個）→ 10. 組織學 WSAVA 分級 + 免疫組織化學（排除淋巴瘤）',
    treatment_protocol: 'Primary care，階梯式治療。Step 1 飲食試驗：水解蛋白飲食或新型蛋白飲食，嚴格執行 2-4 週（理想 6-8 週）。所有 CE 犬貓均測 Cobalamin 並補充（若 < 300 ng/L）。Step 2 抗生素試驗（飲食無反應時）：Metronidazole 10-15 mg/kg PO BID × 2-4 週 或 Tylosin 25 mg/kg PO BID × 2-4 週。Step 3 益生菌和腸道支持：Visbiome 或 Fortiflora，效果證據尚不充分但安全。Specialty care，免疫抑制（IRE/IBD，組織學確診後）：Prednisolone 1-2 mg/kg PO SID（犬）或 1-2 mg/kg PO SID（貓），2-4 週後依反應每 2-4 週減 25%。貓替代：Budesonide 1-3 mg PO SID。二線免疫抑制：Chlorambucil 4-6 mg/m² PO q48h（貓首選二線）+ Azathioprine 1-2 mg/kg PO SID → q48h（犬only）+ Cyclosporine 5 mg/kg PO SID（難治型可考慮 BID）。PLE 合併症：見 PLE 專題（抗血栓、低白蛋白管理）。',
    prognosis: 'FRE（食物反應性）：預後極佳，飲食管理可長期控制。ARE：預後良好，但復發常見。IRE/IBD：CCECAI < 10 且對治療有反應者預後中等至佳。CCECAI ≥ 10、低白蛋白（< 2.0 g/dL）、低 Cobalamin 為不良預後指標。貓小細胞淋巴瘤：Prednisolone + Chlorambucil 中位存活 1.5-2 年以上。整體來看，CE 的預後取決於亞型和治療反應。',
    monitoring: '飲食試驗期間：每 2 週評估臨床症狀、體重、CCECAI 分數。免疫抑制治療：每 2-4 週追蹤 CBC（Azathioprine/Chlorambucil 骨髓毒性）+ Albumin + CCECAI。Cobalamin 補充後 1 個月追蹤血清濃度。穩定後每 3 個月追蹤。貓 IRE：每 3-6 個月追蹤超音波（監測淋巴結和腸壁變化，排除淋巴瘤進展）。',
    owner_communication: '慢性腸病是一堆病的集合，要慢慢一步步診斷，也要長期管理。好消息是過半的狗光換飲食就能控制。飲食試驗期間配合度是成敗的關鍵，這段時間只能吃處方飲食，零食一口都不能給。如果飲食跟簡單藥物沒效，下一步就要安排內視鏡確認診斷。少數狗貓會走到長期免疫抑制這條路，但多數還是能維持很好的生活品質。定期回診追蹤就是長期作戰的底線。',
  },
  diagnostic_data: null,
  procedure_data: null,
  visual_placeholders: [
    { position: '現代分類段落後', type: 'flowchart', description: 'CE 階梯式診斷與治療決策流程圖（飲食 → 抗生素 → 免疫抑制）' },
    { position: '貓特殊考量段落後', type: 'comparison_table', description: '貓 IBD vs 小細胞淋巴瘤鑑別比較表' },
  ],
  interactive_placeholders: [
    { position: '嚴重度評估段落', type: 'interactive_staging', description: 'CCECAI 評分計算器' },
  ],
  drug_api_links: ['Prednisolone', 'Budesonide', 'Metronidazole', 'Tylosin', 'Chlorambucil', 'Azathioprine', 'Cyclosporine', 'Cobalamin'],
  references: [
    { type: 'journal', citation: 'Pilla R, Gaschen FP, Barr JW, Olson E, Honneffer J, et al. "Effects of metronidazole on the fecal microbiome and metabolome in healthy dogs." J Vet Intern Med. 2020;34(5):1853-1866. doi:10.1111/jvim.15871', relevance: '近期關鍵：metronidazole 破壞菌相、停藥後 dysbiosis 持續→抗生素退場依據' },
    { type: 'journal', citation: 'Allenspach K, Mochel JP. "Current diagnostics for chronic enteropathies in dogs." Vet Clin Pathol. 2021;50(S1):18-28. doi:10.1111/vcp.13068', relevance: '近期診斷工具回顧（生物標記、菌相、組織學限制）' },
    { type: 'journal', citation: 'Makielski K, Cullen J, O\'Connor A, Jergens AE. "Narrative review of therapies for chronic enteropathies in dogs and cats." J Vet Intern Med. 2019;33(1):11-22. doi:10.1111/jvim.15345', relevance: 'CE 治療策略回顧' },
    { type: 'journal', citation: 'Dandrieux JRS. "Inflammatory bowel disease versus chronic enteropathy in dogs: are they one and the same?" J Small Anim Pract. 2016;57(11):589-599. doi:10.1111/jsap.12588', relevance: 'CE vs IBD 概念演進與現代分類' },
    { type: 'journal', citation: 'Allenspach K, Wieland B, Gröne A, Gaschen F. "Chronic Enteropathies in Dogs: Evaluation of Risk Factors for Negative Outcome." J Vet Intern Med. 2007;21(4):700-708. doi:10.1111/j.1939-1676.2007.tb03011.x', relevance: 'CE 預後因子分析（CCECAI）' },
    { type: 'guideline', citation: 'Washabau RJ, Day MJ, Willard MD, et al. "Endoscopic, Biopsy, and Histopathologic Guidelines for the Evaluation of Gastrointestinal Inflammation in Companion Animals." J Vet Intern Med. 2010;24(1):10-26. doi:10.1111/j.1939-1676.2009.0443.x', relevance: 'WSAVA 腸道組織學分級標準' },
    { type: 'textbook', citation: 'Washabau RJ, Day MJ. Canine and Feline Gastroenterology. Elsevier, 2013.', relevance: '消化系統疾病基礎教材' },
  ],
  is_current: true,
  created_at: now,
};

/** 獸醫內科學總覽，L0 概念型 */
const contentIMOverview: NodeContent = {
  id: 'CONTENT-IM-L0-001',
  node_id: 'IM-L0-001',
  version: 1,
  summary: '獸醫內科學（Veterinary Internal Medicine）處理小動物所有不需要動刀的病，腎臟泌尿、內分泌、消化、免疫、感染病這幾大塊都在裡面。這份總覽把從基礎科學一路到臨床應用的學習地圖鋪出來，強調用證據（EBM）跟以問題為導向的思考方式來做診斷。',
  learning_objectives: [
    '描述獸醫內科學的範疇與主要次專科領域',
    '說明內科學中從基礎科學到臨床應用的六層知識架構',
    '運用以問題為導向的方法（Problem-Oriented Approach）建構鑑別診斷清單',
    '解釋循證獸醫學（EBM）在臨床決策中的角色與證據等級',
    '概述台灣小動物內科臨床的特殊考量（流行病學、常見疾病譜）',
  ],
  key_points: [
    '內科學核心範疇：腎臟泌尿、內分泌、消化肝膽胰、免疫/血液、感染病、呼吸、心血管（部分與心臟科重疊）',
    '六層知識架構：L0 總覽 → L1 基礎科學 → L2 病理機轉 → L3 臨床疾病各論 → L4 診斷方法論 → L5 治療與管理',
    '以問題為導向的診斷邏輯：臨床問題 → 鑑別診斷清單 → 最低資料庫（MDB）→ 進階檢查 → 確診 → 治療計畫',
    'EBM 證據等級：系統性回顧/Meta-analysis > RCT > 世代研究 > 病例系列 > 專家意見',
    '最低資料庫（MDB）：CBC、生化全套、尿液分析，幾乎所有內科病例的起點',
    '台灣特殊考量：壁蝨媒介疾病高盛行、亞熱帶感染病譜、飲食習慣差異',
  ],
  body: `# 獸醫內科學總覽

## 一、學科定義與知識架構 (Scope & Knowledge Framework)

獸醫內科學研究小動物（犬貓為主）非外科性疾病的病因、病理生理、診斷與治療。核心在於以問題為導向 (Problem-Oriented Approach) 的系統性診斷邏輯。

### 核心次專科
1. 腎臟泌尿學：CKD、AKI、泌尿道感染、尿路結石
2. 內分泌學：甲狀腺疾病、腎上腺疾病、糖尿病
3. 消化肝膽胰臟學：慢性腸病、胰臟炎、肝臟疾病
4. 免疫/血液學：IMHA、ITP、自體免疫疾病
5. 感染病學：壁蝨媒介疾病、黴菌感染、傳染病

### 六層知識架構

| 層級 | 名稱 | 內容 | 難度 |
|------|------|------|------|
| L0 | 學科總覽 | 範疇、學習地圖、方法論 | 1 |
| L1 | 基礎科學 | 正常生理學（腎臟、免疫、消化、內分泌） | 1-2 |
| L2 | 病理機轉 | 疾病如何發生（損傷、發炎、自體免疫機轉） | 2-3 |
| L3 | 臨床疾病各論 | 各疾病的診斷與治療（CKD、DM、IMHA 等） | 3-4 |
| L4 | 診斷方法論 | 檢驗判讀、影像學、內視鏡 | 3-5 |
| L5 | 治療與管理 | 藥物治療方案、長期管理策略 | 4-5 |

### 以問題為導向的診斷邏輯
1. 識別臨床問題：PU/PD、體重減輕、黃疸、貧血等
2. 建構鑑別診斷清單：依據問題列出可能疾病
3. 最低資料庫（MDB）：CBC + 生化 + 尿液分析
4. 進階檢查：影像、特殊血檢、組織切片
5. 確診與治療計畫

### 台灣臨床特殊考量
- 壁蝨媒介疾病全年活動（Ehrlichia、Babesia 高盛行率）
- 亞熱帶環境：黴菌感染、寄生蟲感染譜與溫帶不同
- 飼主餵食習慣：自製鮮食比例較高，需注意營養均衡
- 用藥可及性：部分藥物（如 DOCP）取得不易

## 六、人醫借鑑 (Translational Insights)

- 人醫的專科分化（腎臟科、內分泌科、消化科、免疫科）遠比獸醫精細，獸醫內科醫師需涵蓋人醫多個專科的知識
- 人醫 循證醫學 (EBM) 架構（GRADE 系統、Cochrane 回顧）逐漸被獸醫界採用，但獸醫的高品質 RCT 數量仍遠少於人醫
- 人醫 精準醫學 (Precision Medicine) 趨勢（基因檢測導向治療）在獸醫處於起步階段，犬品種基因多型性研究為潛在突破口
- 人醫的 多專科會診 (MDT) 模式可借鑑至獸醫轉診體系

## 七、臨床爭議與知識空缺 (Controversies & Knowledge Gaps)

| 爭議主題 | 目前立場 | 證據等級 | 研究方向 |
|---------|---------|---------|---------|
| 獸醫 EBM 的可行性 | 支持但高品質 RCT 不足 |—| 多中心合作研究 |
| AI 輔助診斷在獸醫的角色 | 初步應用（影像辨識） | Level IV | 臨床決策支援系統開發 |
| 貓內科學的獨特性 | 貓≠小型犬，需獨立研究 |—| 貓特異性藥動學/疾病機轉 |
| 台灣流行病學數據庫 | 缺乏系統性全國數據 |—| 建立獸醫全國疾病登錄系統 |`,
  clinical_pearl: '內科真正重要的能力，不是把每個病的細節背起來，而是建立系統性的診斷思維。我看一個病例，腦中先問三個問題：第一，這個臨床問題的鑑別診斷清單長什麼樣？第二，最低資料庫（CBC、生化、尿液分析）能告訴我什麼？第三，接下來哪些進階檢查可以最有效縮小範圍？把這套思維跑順了，碰到沒看過的病也不會亂。',
  common_mistakes: [
    '跳過最低資料庫（MDB）直接做昂貴的進階檢查',
    '過度依賴單一檢驗結果而非整合多項數據',
    '忽略台灣特有的流行病學差異（如壁蝨媒介疾病的高盛行率）',
    '未建立完整的鑑別診斷清單就過早鎖定診斷',
  ],
  disease_data: null,
  diagnostic_data: null,
  procedure_data: null,
  visual_placeholders: [
    { position: '六層知識架構表後', type: 'mind_map', description: '獸醫內科學知識樹概覽心智圖' },
    { position: '診斷邏輯段落後', type: 'flowchart', description: 'Problem-Oriented Approach 診斷流程圖' },
  ],
  interactive_placeholders: [],
  drug_api_links: [],
  references: [
    { type: 'textbook', citation: 'Ettinger SJ, Feldman EC, Côté E. Textbook of Veterinary Internal Medicine, 8th ed. Elsevier, 2017.', relevance: '獸醫內科學權威教科書' },
    { type: 'textbook', citation: 'Nelson RW, Couto CG. Small Animal Internal Medicine, 6th ed. Elsevier, 2019.', relevance: '小動物內科學基礎教材' },
    { type: 'journal', citation: 'Cockcroft PD, Holmes MA. "Evidence-based veterinary medicine 1. Why is it important and what skills are needed?" In Practice. 2004;26(1):28-33.', relevance: '循證獸醫學概論' },
    { type: 'guideline', citation: 'Nelson RW, Couto CG. "Small Animal Internal Medicine." 6th ed. Elsevier, 2020.', relevance: '小動物內科教科書' },
  ],
  is_current: true,
  created_at: now,
};

/** 腎臟生理學，L1 概念型 */
const contentRenalPhysiology: NodeContent = {
  id: 'CONTENT-IM-L1-001',
  node_id: 'IM-L1-001',
  version: 1,
  summary: '腎臟生理學是理解腎臟疾病的基石。腎臟透過腎元（nephron）執行過濾、再吸收、分泌與濃縮四大功能，維持體液恆定、電解質平衡、酸鹼調節及廢物排除。GFR 為評估腎功能的核心指標，RAAS 和 ADH 為最重要的調節系統。',
  learning_objectives: [
    '描述腎元的結構組成與各段功能（腎小球、近曲小管、Henle 環、遠曲小管、集尿管）',
    '解釋腎小球濾過率（GFR）的決定因素與臨床評估方式',
    '說明腎素-血管張力素-醛固酮系統（RAAS）在腎臟血流調節中的角色',
    '描述逆流倍增機制（countercurrent multiplication）與尿液濃縮原理',
    '解釋腎臟在酸鹼平衡中的角色（碳酸氫根再吸收、氫離子分泌、銨離子生成）',
  ],
  key_points: [
    '腎元為腎臟功能單位：犬約 40 萬個、貓約 20 萬個，喪失後無法再生',
    'GFR 決定因素：腎小球毛細管壓力、膠體滲透壓、Bowman 囊壓力；犬正常 GFR 約 3-5 mL/min/kg',
    '近曲小管再吸收約 65-70% 的濾液（Na+、glucose、amino acids、HCO3-）',
    'Henle 環的逆流倍增機制建立腎髓質高滲透梯度，決定最終尿液濃縮能力',
    'RAAS 調節：低灌流 → 腎素釋放 → Angiotensin II → 腎出球小動脈收縮 + Aldosterone 分泌 → Na+/H2O 再吸收',
    'ADH（vasopressin）作用於集尿管 V2 receptor → Aquaporin-2 插入 → 水分再吸收 → 尿液濃縮',
    '腎臟酸鹼調節：近曲小管回收 80-90% HCO3-、遠端腎元分泌 H+ 和生成 NH4+',
    'Creatinine 主要經腎小球過濾排出（犬少量管狀分泌）；SDMA 完全經腎小球過濾，兩者皆為 GFR 替代指標',
  ],
  body: `# 腎臟生理學

## 一、核心生理機轉 (Core Physiology)

### 腎元結構與功能

腎小球（Glomerulus）
- 構造：入球小動脈 → 腎小球毛細管叢 → 出球小動脈
- 功能：血漿超濾（ultrafiltration），依分子大小和電荷篩選
- 濾過屏障三層：有孔內皮細胞、基底膜（GBM）、足細胞（podocyte）裂隙膜
- 正常不應通過：白蛋白（MW 69 kDa）以上的蛋白質

近曲小管（Proximal Convoluted Tubule）
- 再吸收約 65-70% 濾液量
- 主動運輸：Na+（Na-K-ATPase）、glucose（SGLT2）、amino acids
- HCO3- 再吸收（80-90%），透過 carbonic anhydrase
- 分泌：有機酸、有機鹼、藥物（如 penicillin、creatinine 少量）

Henle 環（Loop of Henle）
- 下行細支：高水通透性、低溶質通透性 → 水被動流出
- 上行粗支：Na-K-2Cl cotransporter（NKCC2，[藥物:Furosemide] 作用標靶）→ 建立髓質高滲透梯度
- 逆流倍增機制：建立 300（皮質）→ 1200（髓質深部）mOsm/kg 的滲透梯度

遠曲小管與集尿管
- 遠曲小管：Na-Cl cotransporter（NCC，thiazide 標靶）、Ca2+ 再吸收
- 集尿管皮質段：Aldosterone 作用（ENaC → Na+ 再吸收、K+ 分泌）
- 集尿管髓質段：ADH → Aquaporin-2 → 水分再吸收

### GFR 與腎功能評估

| 指標 | 機制 | 優點 | 限制 |
|------|------|------|------|
| Creatinine | 肌肉代謝產物，主要腎小球過濾 | 便宜、廣泛可用 | 受肌肉量影響、GFR 降 >75% 才明顯升高 |
| SDMA | 蛋白質甲基化產物，完全腎小球過濾 | 不受肌肉量影響、較早偵測 | 較新、部分實驗室尚無 |
| Cystatin C | 所有有核細胞產生，腎小球過濾 | 不受肌肉量影響 | 犬貓研究較少 |
| USG | 反映腎臟濃縮能力 | 簡便、即時 | 受飲水、藥物影響 |

### RAAS 系統
低腎臟灌流 / 低 Na+ → 近球細胞釋放 Renin → Angiotensinogen → Angiotensin I → ACE（肺）→ Angiotensin II → 出球小動脈收縮（維持 GFR）+ Aldosterone 分泌（Na+ 再吸收）+ ADH 促進。

臨床意義：CKD 中 RAAS 過度活化 → 腎小球高壓 → 加速損傷。[藥物:Benazepril] 和 [藥物:Telmisartan] 的腎保護機轉即在此。

## 六、人醫借鑑 (Translational Insights)

- 人醫 eGFR 公式（CKD-EPI equation）結合 creatinine + cystatin C 估算 GFR；獸醫尚無標準化 eGFR 公式但以 SDMA 趨勢追蹤替代
- 人醫 SGLT2 抑制劑 (dapagliflozin, empagliflozin) 已成為 CKD 標準治療，作用於近曲小管 SGLT2，減少 glucose/Na+ 再吸收→管球回饋 (tubuloglomerular feedback)→降低腎小球內壓。獸醫貓 CKD 應用研究中
- 人醫腎臟生理的功能性 MRI (BOLD-MRI) 評估腎髓質氧合度，獸醫尚在探索階段

## 七、臨床爭議與知識空缺 (Controversies & Knowledge Gaps)

| 爭議主題 | 目前立場 | 證據等級 | 研究方向 |
|---------|---------|---------|---------|
| SDMA 的臨床最佳 cutoff | IRIS 建議 18 μg/dL | Level II | 品種/年齡特異性正常值 |
| Cystatin C 在獸醫的角色 | 研究中，尚非常規 | Level III | 與 SDMA 的頭對頭比較 |
| 犬貓 GFR 直接測量 | 碘海醇清除率為金標準但不實用 | Level I | 更簡便的替代方法？ |
| USG 最佳判讀標準 | 犬 <1.030 / 貓 <1.035 提示功能異常 | Level II | 品種/飲食影響的系統性研究 |`,
  clinical_pearl: '理解腎臟生理最重要的臨床應用是「USG 的判讀」。如果犬脫水但 USG < 1.030（或貓 < 1.035），代表腎臟無法適當濃縮尿液，即使 Creatinine 仍在正常範圍，這已經暗示腎功能有問題。因為 Creatinine 要在 GFR 下降超過 75% 時才會明顯升高，但尿液濃縮能力的喪失可能更早出現。這也是為什麼 USG 是最低資料庫中不能省的一部分。',
  common_mistakes: [
    'USG 在評估腎功能裡的角色被忽略掉（其實它是最早抓得到腎臟濃縮功能異常的指標之一）',
    '只用 Creatinine 評估腎功能，沒去想肌肉量的影響（消瘦的動物算出來會偏低，會騙人）',
    '忘了近曲小管回收絕大部分的濾液（藥物只要影響近曲小管，電解質就會亂套）',
    '不理解 RAAS 在 CKD 進展裡扮演的角色，這就是為什麼 ACEI/ARB 能保護腎臟',
  ],
  disease_data: null,
  diagnostic_data: null,
  procedure_data: null,
  visual_placeholders: [
    { position: '腎元結構段落後', type: 'annotated_image', description: '腎元各段結構與功能標注圖' },
    { position: 'RAAS 系統段落後', type: 'flowchart', description: 'RAAS 調節路徑與藥物作用位點圖' },
  ],
  interactive_placeholders: [],
  drug_api_links: ['Benazepril', 'Telmisartan', 'Furosemide'],
  references: [
    { type: 'textbook', citation: 'Reece WO. Dukes\' Physiology of Domestic Animals, 13th ed. Wiley-Blackwell, 2015. Chapters on Renal Physiology.', relevance: '動物腎臟生理學基礎教材' },
    { type: 'textbook', citation: 'Ettinger SJ, Feldman EC. Textbook of Veterinary Internal Medicine, 8th ed. Elsevier, 2017. Section on Urinary System.', relevance: '腎臟生理與疾病整合教材' },
    { type: 'journal', citation: 'Hall JA et al. "Biomarkers of kidney function and damage in dogs and cats." Vet Clin North Am Small Anim Pract. 2022;52(3):547-567.', relevance: '腎功能生物標記物回顧' },
    { type: 'guideline', citation: 'IRIS (International Renal Interest Society). "IRIS Staging of CKD (Modified 2023)." iris-kidney.com.', relevance: 'CKD 分期與治療指引' },
  ],
  is_current: true,
  created_at: now,
};

/** 免疫學基礎，L1 概念型 */
const contentImmunologyBasics: NodeContent = {
  id: 'CONTENT-IM-L1-002',
  node_id: 'IM-L1-002',
  version: 1,
  summary: '免疫學基礎涵蓋先天性免疫（innate immunity）與適應性免疫（adaptive immunity）的核心概念。先天性免疫提供快速非特異性防禦，適應性免疫透過 T 細胞與 B 細胞提供抗原特異性反應與免疫記憶。理解正常免疫反應是學習自體免疫疾病（IMHA、ITP）與免疫抑制治療的基礎。',
  learning_objectives: [
    '區分先天性免疫與適應性免疫的組成、特性與作用機轉',
    '描述 T 細胞亞群（Th1、Th2、Treg、Th17、CD8+）的功能與臨床意義',
    '解釋 B 細胞活化、抗體類別轉換與免疫球蛋白（IgG、IgM、IgA、IgE）的功能',
    '說明免疫耐受性（immune tolerance）的機轉與耐受性崩解導致自體免疫的概念',
    '描述補體系統三條活化路徑及其在溶血和發炎中的角色',
  ],
  key_points: [
    '先天性免疫：屏障（皮膚、黏膜）、吞噬細胞（嗜中性球、巨噬細胞）、NK 細胞、補體、Pattern Recognition Receptors（TLRs）',
    '適應性免疫：B 細胞（體液免疫/抗體）、T 細胞（細胞免疫）；特點為抗原特異性和免疫記憶',
    'T 細胞亞群：Th1（細胞內病原）、Th2（寄生蟲/過敏）、Th17（黏膜防禦/自體免疫）、Treg（免疫調節/耐受）、CD8+（細胞毒殺）',
    '免疫球蛋白：IgG（最豐富、血清中主要）、IgM（初次反應、補體活化）、IgA（黏膜免疫）、IgE（過敏/寄生蟲）',
    '免疫耐受性：中樞耐受（胸腺負選擇）+ 周邊耐受（Treg 抑制、anergy、deletion）→ 耐受崩解 = 自體免疫',
    '補體系統：Classical（Ab-Ag）、Alternative（持續低度活化）、Lectin（MBL）→ C3 convertase → C5b-9 MAC → 細胞溶解',
    'Type II 超敏反應（Ab 結合細胞表面抗原）= IMHA/ITP 的核心機轉',
  ],
  body: `# 免疫學基礎

## 一、核心免疫機轉 (Core Immunology)

### 先天性免疫（Innate Immunity）

物理與化學屏障：皮膚、黏膜上皮、胃酸、溶菌酶、防禦素（defensins）

細胞成分：
- 嗜中性球：急性發炎第一線，吞噬和殺菌
- 巨噬細胞：吞噬、抗原呈現（APC）、細胞因子分泌
- 樹突細胞：最重要的 APC，橋接先天與適應性免疫
- NK 細胞：辨識 MHC-I 缺失的細胞（病毒感染、腫瘤）

Pattern Recognition Receptors (PRRs)：Toll-like Receptors (TLRs) 辨識 PAMPs（LPS、dsRNA、CpG DNA）→活化後啟動發炎反應與細胞因子釋放

### 適應性免疫（Adaptive Immunity）

T 細胞免疫

| 亞群 | 功能 | 主要細胞因子 | 臨床關聯 |
|------|------|------------|---------|
| Th1 | 細胞內病原防禦 | IFN-γ, IL-2 | 結核、利什曼原蟲 |
| Th2 | 寄生蟲/過敏 | IL-4, IL-5, IL-13 | 異位性皮膚炎、寄生蟲 |
| Th17 | 黏膜防禦、發炎 | IL-17, IL-22 | IBD、自體免疫 |
| Treg | 免疫抑制/耐受 | IL-10, TGF-β | 耐受崩解→自體免疫 |
| CD8+ | 細胞毒殺 | Perforin, Granzyme | 病毒感染、腫瘤 |

B 細胞與抗體：B 細胞活化需要 T cell help（Th2, Tfh）→ 類別轉換（IgM → IgG/IgA/IgE）；漿細胞分泌抗體；記憶 B 細胞驅動二次反應。

### 免疫耐受性
- 中樞耐受：胸腺 T 細胞負選擇；骨髓 B 細胞刪除或 receptor editing
- 周邊耐受：Treg 抑制、Anergy、Deletion
- 耐受崩解 → 自體免疫疾病（IMHA、ITP、甲狀腺炎）

### Gell-Coombs 超敏反應分類

| 類型 | 機轉 | 時間 | 獸醫範例 |
|------|------|------|---------|
| Type I | IgE + Mast cell | 即時（分鐘） | 異位性皮膚炎、過敏性休克 |
| Type II | Ab 結合細胞表面 | 小時-天 | IMHA、ITP、輸血反應 |
| Type III | 免疫複合體沉積 | 小時-天 | 腎小球腎炎、SLE |
| Type IV | T 細胞介導 | 24-72h | 接觸性皮膚炎、結核菌素反應 |

## 六、人醫借鑑 (Translational Insights)

- 人醫 checkpoint inhibitors (anti-PD-1, anti-CTLA-4) 在腫瘤免疫治療的革命，獸醫犬黑色素瘤疫苗 (Oncept) 為先驅，但 checkpoint inhibitor 研究尚在早期
- 人醫 CAR-T 細胞療法概念在獸醫有初步研究但離臨床應用仍遠
- 人醫對 Treg 細胞療法治療自體免疫疾病的研究，獸醫可借鑑於 IMHA/ITP 治療
- 人醫 microbiome-immune axis 研究揭示腸道菌群調節全身免疫，與獸醫 CE/IBD 的 dysbiosis 研究直接相關

## 七、臨床爭議與知識空缺 (Controversies & Knowledge Gaps)

| 爭議主題 | 目前立場 | 證據等級 | 研究方向 |
|---------|---------|---------|---------|
| 犬 DLA 與自體免疫風險 | 部分 haplotype 已知相關 | Level III | 更多品種的 DLA 定型 |
| 疫苗與自體免疫觸發 | 時間相關但因果難證 | Level IV | 大規模流行病學研究 |
| Treg 功能檢測臨床化 | 研究工具，非常規 | Level IV | 即時 Treg 功能評估方法 |
| 犬貓免疫表型分析 | 流式細胞儀限於研究機構 | Level III | 商品化犬貓免疫表型 panel |`,
  clinical_pearl: '理解 Type II 超敏反應是掌握 IMHA 和 ITP 的關鍵。在 IMHA 中，IgG 結合紅血球表面 → 脾臟巨噬細胞透過 Fc receptor 辨識並吞噬（血管外溶血），或 IgM 活化補體 → C5b-9 MAC 直接裂解紅血球（血管內溶血）。免疫抑制治療的目標就是抑制這些自體抗體的產生和效應。Prednisolone 主要抑制 T 細胞功能和減少巨噬細胞 Fc receptor 表達，而 Mycophenolate 和 Cyclosporine 則分別抑制 B 細胞和 T 細胞增殖。',
  common_mistakes: [
    '混淆先天性免疫和適應性免疫的特性（先天=快速非特異性無記憶；適應=較慢、特異性、有記憶）',
    '不理解 Treg 在維持免疫耐受中的角色（Treg 功能缺陷是多種自體免疫疾病的共同路徑）',
    '忽略補體系統在溶血中的角色（IgM 介導的補體活化造成血管內溶血，比 IgG 介導的血管外溶血更急性且危險）',
    '將所有免疫反應過度簡化，實際上多種機轉常同時存在',
  ],
  disease_data: null,
  diagnostic_data: null,
  procedure_data: null,
  visual_placeholders: [
    { position: 'T 細胞亞群表後', type: 'flowchart', description: 'T 細胞分化路徑與功能圖' },
    { position: 'Gell-Coombs 分類表後', type: 'comparison_table', description: '四型超敏反應機轉比較圖' },
  ],
  interactive_placeholders: [],
  drug_api_links: [],
  references: [
    { type: 'textbook', citation: 'Tizard IR. Veterinary Immunology: An Introduction, 10th ed. Elsevier, 2018.', relevance: '獸醫免疫學權威教科書' },
    { type: 'textbook', citation: 'Day MJ, Schultz RD. Veterinary Immunology: Principles and Practice, 2nd ed. CRC Press, 2014.', relevance: '獸醫免疫學原理與實務' },
    { type: 'journal', citation: 'Garden OA et al. "ACVIM consensus statement on the diagnosis of immune-mediated hemolytic anemia in dogs and cats." J Vet Intern Med. 2019;33(2):313-334.', relevance: '免疫介導性溶血的免疫機轉' },
    { type: 'guideline', citation: 'Garden OA, Kidd L, Mexas AM, et al. "ACVIM consensus statement on the diagnosis of immune-mediated hemolytic anemia in dogs and cats." J Vet Intern Med. 2019;33(2):313-334.', relevance: 'IMHA 診斷共識' },
  ],
  is_current: true,
  created_at: now,
};

/** 消化系統生理，L1 概念型 */
const contentGIPhysiology: NodeContent = {
  id: 'CONTENT-IM-L1-003',
  node_id: 'IM-L1-003',
  version: 1,
  summary: '消化系統生理涵蓋從口腔到肛門的消化、吸收與排泄過程，以及肝臟和胰臟的外分泌功能。腸道屏障功能與腸道微生物群（gut microbiome）是現代消化病學的核心概念。理解正常生理是掌握 IBD/CE、胰臟炎、肝臟疾病的基礎。',
  learning_objectives: [
    '描述消化道各段的消化與吸收功能',
    '解釋腸道屏障功能的組成與維持機轉',
    '說明腸道微生物群在健康和疾病中的角色',
    '描述肝臟的主要代謝功能（蛋白質合成、膽汁分泌、解毒、碳水化合物代謝）',
    '說明胰臟外分泌功能與自身保護機轉',
  ],
  key_points: [
    '消化三大過程：機械性消化（咀嚼、蠕動）+ 化學性消化（酵素）+ 微生物發酵（結腸）',
    '小腸為主要吸收部位：十二指腸（鐵、鈣）、空腸（碳水化合物、蛋白質、脂肪）、迴腸（膽鹽、Vitamin B12）',
    '腸道屏障四層防線：黏液層 → 上皮細胞（tight junctions）→ 固有層免疫細胞 → 腸道微生物群',
    '腸道微生物群：犬腸道約 10^14 微生物，物種多樣性與健康密切相關；dysbiosis 與 CE/IBD 相關',
    '肝臟核心功能：白蛋白合成、凝血因子合成、膽汁酸合成、藥物代謝（CYP450）、尿素循環',
    '胰臟外分泌：胰蛋白酶原（trypsinogen）、脂酶（lipase）、澱粉酶（amylase），以非活化酶原形式儲存防止自身消化',
    '膽汁酸的腸肝循環：肝臟合成 → 膽囊儲存 → 十二指腸排入 → 迴腸主動回收（95%）→ 門脈回到肝臟',
  ],
  body: `# 消化系統生理

## 一、核心消化生理機轉 (Core GI Physiology)

### 消化道各段功能

胃
- 胃酸（HCl）：壁細胞分泌，pH 1-2，殺菌和蛋白質變性
- 胃蛋白酶原（Pepsinogen）：主細胞分泌，HCl 活化為 Pepsin
- 胃排空：犬約 6-8 小時（受食物組成影響，脂肪最慢）

小腸
- 十二指腸：胰液和膽汁排入，主要消化段
- 空腸：最主要吸收段，碳水化合物（刷狀緣雙糖酶→SGLT1/GLUT2）、蛋白質（胜肽酶→胺基酸轉運體）、脂肪（膽鹽乳化→lipase→micelle→乳糜微粒）
- 迴腸：膽鹽主動回收（enterohepatic circulation）、Vitamin B12 (Cobalamin) 吸收（IF-Cbl 受體）

大腸：水分/電解質再吸收、微生物發酵→短鏈脂肪酸 (SCFA, 尤其 butyrate = 結腸上皮主要能量來源)

### 腸道屏障功能四層防線
1. 黏液層：Goblet cell 分泌黏蛋白，隔離細菌與上皮
2. 上皮層：Tight junctions（claudin、occludin）維持細胞間密封
3. 免疫層：GALT（Peyer's patches、固有層淋巴球、sIgA）
4. 微生物層：共生菌群 competitive exclusion 致病菌

### 肝膽胰功能
- 肝臟：白蛋白合成、凝血因子合成、膽汁酸合成、藥物代謝（CYP450）、尿素循環
- 膽汁酸腸肝循環：肝臟合成→膽囊儲存→十二指腸排入→迴腸主動回收（95%）→門脈回到肝臟
- 胰臟外分泌：以非活化酶原形式儲存（trypsinogen、chymotrypsinogen）→Enterokinase 活化 trypsinogen→trypsin 啟動酵素級聯

## 六、人醫借鑑 (Translational Insights)

- 人醫 gut-brain axis 研究揭示腸道微生物群透過迷走神經、免疫和代謝途徑影響中樞神經，獸醫的行為醫學與消化病學交叉研究剛起步
- 人醫 capsule endoscopy 可評估全段小腸黏膜，獸醫小腸評估仍局限於十二指腸/迴腸鏡
- 人醫 hydrogen breath test 診斷小腸細菌過度增生 (SIBO)，獸醫以 Cobalamin/Folate 和 Dysbiosis Index 替代
- 人醫 fecal calprotectin 作為腸道炎症標記物已商品化，獸醫犬/貓特異性 calprotectin 研究增加中

## 七、臨床爭議與知識空缺 (Controversies & Knowledge Gaps)

| 爭議主題 | 目前立場 | 證據等級 | 研究方向 |
|---------|---------|---------|---------|
| 犬貓腸道微生物組的「正常」定義 | 物種/品種/飲食依賴 | Level II | 大規模正常犬貓微生物組資料庫 |
| Butyrate 口服補充的臨床效益 | 理論支持但 RCT 不足 | Level III | 犬 CE 的 butyrate 介入研究 |
| 犬貓腸道通透性的臨床測量 | 研究用（lactulose-rhamnose test） | Level III | 臨床可行的通透性生物標記 |
| 膽汁酸代謝與 CE 的關係 | C. hiranonis 減少→初級膽汁酸↑ | Level II | 膽汁酸調控介入策略 |`,
  clinical_pearl: 'Vitamin B12（Cobalamin）只在迴腸末端被吸收，如果犬貓的迴腸有疾病（如 IBD/CE），B12 就會缺乏。B12 缺乏是 CE 獨立的不良預後因子，而且不補充的話其他治療效果也會打折扣。所以在任何慢性消化道疾病中，B12 都是必測的項目。同理，膽汁酸在迴腸回收，迴腸疾病也會影響膽鹽的腸肝循環，進而影響脂肪吸收。',
  common_mistakes: [
    '忽略迴腸在 B12 吸收中的專一性角色（CE 病患必測 Cobalamin）',
    '不理解腸道屏障崩解與 IBD/CE 的因果關係',
    '將胰臟外分泌不足（EPI）和胰臟炎混淆，EPI 是酵素不足，胰臟炎是酵素異常活化',
    '忘記大腸微生物發酵產生的短鏈脂肪酸（尤其 butyrate）對結腸健康的重要性',
  ],
  disease_data: null,
  diagnostic_data: null,
  procedure_data: null,
  visual_placeholders: [
    { position: '小腸各段功能後', type: 'annotated_image', description: '消化道各段消化吸收功能標注圖' },
    { position: '腸道屏障段落後', type: 'flowchart', description: '腸道屏障四層防線與崩解機轉圖' },
  ],
  interactive_placeholders: [],
  drug_api_links: [],
  references: [
    { type: 'textbook', citation: 'Washabau RJ, Day MJ. Canine and Feline Gastroenterology. Elsevier, 2013.', relevance: '犬貓消化系統生理與疾病教材' },
    { type: 'textbook', citation: 'Reece WO. Dukes\' Physiology of Domestic Animals, 13th ed. Wiley-Blackwell, 2015.', relevance: '動物消化生理基礎教材' },
    { type: 'journal', citation: 'Suchodolski JS. "Intestinal microbiota of dogs and cats: a bigger world than we thought." Vet Clin North Am Small Anim Pract. 2011;41(2):261-272.', relevance: '犬貓腸道微生物群回顧' },
    { type: 'guideline', citation: 'Washabau RJ, Day MJ, Willard MD, et al. "Endoscopic, biopsy, and histopathologic guidelines for the evaluation of gastrointestinal inflammation in companion animals." J Vet Intern Med. 2010;24(1):10-26.', relevance: 'GI 炎症評估指引' },
  ],
  is_current: true,
  created_at: now,
};

/** 內分泌生理學，L1 概念型 */
const contentEndocrinePhysiology: NodeContent = {
  id: 'CONTENT-IM-L1-004',
  node_id: 'IM-L1-004',
  version: 1,
  summary: '內分泌生理學研究荷爾蒙的合成、分泌、運輸、作用機轉與回饋調節。下丘腦-腦下垂體軸（HPA、HPT、HPG）為核心調控架構。負回饋機制維持荷爾蒙恆定，其失調是內分泌疾病的共同病理基礎。',
  learning_objectives: [
    '描述下丘腦-腦下垂體-標靶腺體軸的基本架構與負回饋原理',
    '區分蛋白質/胜肽類荷爾蒙與類固醇荷爾蒙的合成、運輸與作用機轉差異',
    '說明 HPA 軸（下丘腦-腦下垂體-腎上腺軸）的調控與 Cushing/Addison 的病理基礎',
    '說明 HPT 軸（甲狀腺軸）的調控與甲亢/甲低的病理基礎',
    '解釋胰島素與升糖素的血糖調控機轉',
  ],
  key_points: [
    '荷爾蒙分類：蛋白質/胜肽類（insulin, ACTH，水溶性、表面受體）vs 類固醇（cortisol, aldosterone，脂溶性、核內受體）vs 胺類（T4/T3, catecholamines）',
    'HPA 軸：CRH → ACTH → Cortisol → 負回饋抑制 CRH/ACTH。過度活化=Cushing，功能不足=Addison',
    'HPT 軸：TRH → TSH → T4/T3 → 負回饋抑制 TRH/TSH。T4 過多=甲亢，T4 不足=甲低',
    '胰島素：β-cell 分泌，降血糖（促進 glucose uptake、糖原合成、脂肪合成）。缺乏/阻抗=糖尿病',
    '升糖素（Glucagon）：α-cell 分泌，升血糖（促進糖質新生、肝糖分解）',
    '負回饋核心概念：目標荷爾蒙升高 → 抑制上位中樞分泌 → 維持恆定。所有動態功能試驗（LDDST、ACTH stim、TSH）都基於此原理',
    'Aldosterone 調控獨立於 ACTH（由 RAAS 和 K+ 調控），這就是為什麼繼發性 Addison（ACTH 缺乏）通常電解質正常',
  ],
  body: `# 內分泌生理學

## 一、核心內分泌機轉 (Core Endocrine Physiology)

### 荷爾蒙分類與作用機轉

蛋白質/胜肽類荷爾蒙：例 Insulin, ACTH, TSH, GH, ADH，水溶性，作用於細胞表面受體→第二信使系統（cAMP, IP3/DAG），作用迅速（秒至分鐘）

類固醇荷爾蒙：例 Cortisol, Aldosterone, Estrogen，膽固醇衍生，脂溶性，需結合蛋白運輸（CBG, SHBG），穿透細胞膜→核內受體→基因轉錄調控，作用較慢（小時至天）

胺類荷爾蒙：T4/T3 為胺基酸衍生但行為類似類固醇（核內受體）；Catecholamines 為胺基酸衍生，行為類似蛋白質（表面受體）

### 下丘腦-腦下垂體軸

HPA 軸（Cushing's / Addison's 的基礎）
- 下丘腦 CRH → 腦下垂體前葉 ACTH → 腎上腺皮質 Cortisol
- Cortisol 負回饋 → 抑制 CRH 和 ACTH
- LDDST 原理：外源性 Dexamethasone 應抑制 ACTH → Cortisol 下降

HPT 軸（甲亢 / 甲低的基礎）
- 下丘腦 TRH → 腦下垂體前葉 TSH → 甲狀腺 T4/T3
- T4/T3 負回饋 → 抑制 TRH 和 TSH

胰島素-升糖素軸
- 進食 → 血糖↑ → β-cell Insulin → glucose uptake↑ → 血糖↓
- 空腹 → 血糖↓ → α-cell Glucagon → 肝糖分解 + 糖質新生 → 血糖↑

### 動態功能試驗的生理基礎

| 試驗 | 原理 | 診斷目標 |
|------|------|---------|
| LDDST | Dexa 抑制 ACTH → Cortisol 應下降 | Cushing 篩檢 |
| ACTH stim | 外源 ACTH 刺激腎上腺 → Cortisol 應上升 | Addison 確診 / Trilostane 監測 |
| TSH stimulation | 外源 TSH → T4 應上升 | 甲低確診（較少用） |

### 腎上腺皮質三區分泌

| 區域 | 荷爾蒙 | 調控 | 缺乏的結果 |
|------|--------|------|-----------|
| Zona glomerulosa | Aldosterone | RAAS, K+ | 低 Na/高 K（Addison 典型） |
| Zona fasciculata | Cortisol | ACTH | 虛弱、低血糖、無法應對壓力 |
| Zona reticularis | 性激素前驅物 | ACTH | 臨床影響較小 |

## 六、人醫借鑑 (Translational Insights)

- 人醫 midnight salivary cortisol 和 24h urinary free cortisol 為 Cushing 篩檢常規，獸醫使用 UCCR 和 LDDST 作為對應
- 人醫 continuous glucose monitoring (CGM) 改變了糖尿病管理，獸醫 CGM (FreeStyle Libre) 開始被應用於犬貓
- 人醫的 insulin pump 和 closed-loop system (artificial pancreas) 尚無獸醫對應物
- 人醫 GLP-1 receptor agonist (semaglutide) 革命性治療 Type 2 DM 和肥胖，獸醫貓 DM 的潛在應用

## 七、臨床爭議與知識空缺 (Controversies & Knowledge Gaps)

| 爭議主題 | 目前立場 | 證據等級 | 研究方向 |
|---------|---------|---------|---------|
| 犬 TSH 可靠性 | 敏感度僅 ~75% | Level II | 更佳的犬 TSH assay |
| 貓 TSH 測量 | 尚無商品化貓特異性 TSH assay | Level IV | 貓 TSH assay 開發 |
| ACTH 安定性 | 樣本處理不當易假性降低 | Level II | 更穩定的替代標記物 |
| 犬貓胰島素抵抗標準化測量 | 無標準方法 | Level III | HOMA-IR 等指標在獸醫的驗證 |`,
  clinical_pearl: '理解負回饋機制是判讀所有內分泌檢驗的鑰匙。例如：(1) T4 低 + TSH 高 = 原發性甲低（甲狀腺壞了，腦下垂體拼命補償）；(2) T4 低 + TSH 正常 = 可能是 euthyroid sick syndrome（非甲狀腺因素壓抑了整個軸）；(3) Cortisol 高 + ACTH 高 = PDH Cushing（腦下垂體腺瘤，負回饋失效）；(4) Cortisol 高 + ACTH 低 = ADH Cushing（腎上腺腫瘤自主分泌，正常負回饋壓抑了 ACTH）。這套邏輯一旦掌握，內分泌疾病的診斷就不再困難。',
  common_mistakes: [
    '忘記 Aldosterone 主要由 RAAS 和 K+ 調控而非 ACTH，這解釋了繼發性 Addison 電解質通常正常',
    '不理解動態功能試驗的生理基礎就死記結果判讀',
    '混淆類固醇荷爾蒙和蛋白質荷爾蒙的作用機轉（影響對藥物作用時間的理解）',
    '忽略「游離態」才有活性的概念，低白蛋白時游離 T4 和游離 cortisol 比例增加',
  ],
  disease_data: null,
  diagnostic_data: null,
  procedure_data: null,
  visual_placeholders: [
    { position: 'HPA 軸段落後', type: 'flowchart', description: 'HPA 軸調控與 Cushing/Addison 的病理基礎圖' },
    { position: '動態功能試驗表後', type: 'comparison_table', description: '動態功能試驗原理與判讀比較表' },
  ],
  interactive_placeholders: [],
  drug_api_links: [],
  references: [
    { type: 'textbook', citation: 'Feldman EC et al. Canine and Feline Endocrinology, 4th ed. Elsevier, 2015.', relevance: '犬貓內分泌學權威教科書' },
    { type: 'textbook', citation: 'Reece WO. Dukes\' Physiology of Domestic Animals, 13th ed. Wiley-Blackwell, 2015. Chapters on Endocrine System.', relevance: '動物內分泌生理基礎教材' },
    { type: 'journal', citation: 'Behrend EN et al. "Diagnosis of Spontaneous Canine Hyperadrenocorticism: 2012 ACVIM Consensus Statement." J Vet Intern Med. 2013;27(6):1292-1304.', relevance: 'HPA 軸動態試驗的臨床應用' },
    { type: 'guideline', citation: 'Behrend E, Holford A, Lathan P, et al. "2018 AAHA Diabetes Management Guidelines for Dogs and Cats." J Am Anim Hosp Assoc. 2018;54(1):1-21.', relevance: '犬貓糖尿病管理指引' },
  ],
  is_current: true,
  created_at: now,
};

/** 腎損傷機轉，L2 機轉型 */
const contentRenalInjury: NodeContent = {
  id: 'CONTENT-IM-L2-001',
  node_id: 'IM-L2-001',
  version: 1,
  summary: '腎損傷機轉涵蓋急性與慢性腎臟損傷的病理生理。急性腎損傷（AKI）以腎小管壞死和缺血-再灌流損傷為核心，慢性腎損傷以腎元漸進性喪失、腎小管間質纖維化和 RAAS 過度活化的惡性循環為核心。理解這些機轉是制定腎臟保護策略（ACEI/ARB、飲食管理）的理論基礎。',
  learning_objectives: [
    '描述急性腎小管壞死（ATN）的缺血性與腎毒性機轉',
    '解釋缺血-再灌流損傷中活性氧（ROS）和發炎反應的角色',
    '說明慢性腎病中腎元喪失 → 代償性肥大 → 後續損傷的惡性循環',
    '解釋 RAAS 過度活化如何加速 CKD 進展及 ACEI/ARB 的保護機轉',
    '描述腎小管間質纖維化的機轉與促纖維化因子（TGF-β）的角色',
  ],
  key_points: [
    'AKI 三大病因分類：腎前性（低灌流）→ 腎性（實質損傷）→ 腎後性（阻塞）',
    '缺血性 ATN：腎小管上皮細胞對缺氧極度敏感（近曲小管 S3 段和 Henle 上行粗支為最脆弱區域）',
    '腎毒性損傷：aminoglycosides（近曲小管蓄積）、NSAIDs（前列腺素抑制→腎血流減少）、ethylene glycol（草酸鈣結晶沉積）、lily（貓特異性腎毒性）',
    'CKD 惡性循環：腎元喪失 → 殘餘腎元代償性高灌流/高壓 → 腎小球硬化 → 更多腎元喪失',
    'RAAS 在 CKD 中的角色：Angiotensin II → 出球小動脈收縮 → 腎小球高壓 → 蛋白尿 → 腎小管毒性 → 纖維化',
    '腎小管間質纖維化：TGF-β 為核心促纖維化因子 → 纖維母細胞活化 → 膠原蛋白沉積 → 腎功能不可逆喪失',
    '蛋白尿本身具有腎毒性：過濾的蛋白質被近曲小管再吸收 → 溶酶體過載 → 發炎因子釋放 → 間質纖維化',
  ],
  body: `# 腎損傷機轉

## 一、病理機轉 (Pathophysiology)

### 急性腎損傷（AKI）

缺血性 ATN 機轉鏈：
腎血流減少（休克、脫水、麻醉低血壓）→腎小管上皮細胞缺氧（S3 段和 mTAL 最脆弱）→ATP 耗竭→Na-K-ATPase 失能→細胞腫脹→細胞骨架崩解→刷狀緣脫落→管腔阻塞→再灌流損傷：血流恢復→ROS 爆發 + 嗜中性球浸潤→又補一刀

腎毒性損傷

| 毒物 | 機轉 | 靶標 |
|------|------|------|
| Aminoglycosides | 近曲小管細胞內蓄積 → 溶酶體損傷 | PCT |
| NSAIDs | 前列腺素抑制 → 入球小動脈收縮 | 腎小球灌流 |
| Ethylene glycol | 代謝物草酸 → CaOx 結晶沉積 | 腎小管 |
| Lily（貓） | 未知毒素 → 近曲小管壞死 | PCT（貓特異性） |
| Cisplatin | DNA 交聯 → 細胞凋亡 | PCT |

### 慢性腎損傷

腎元喪失的惡性循環：起始損傷→部分腎元喪失→殘餘腎元代償性肥大→單一腎元 GFR 增加 (hyperfiltration)→腎小球毛細管壓力增加→GBM 損傷→蛋白尿→腎小球硬化→更多腎元喪失→循環加速

RAAS 在 CKD 進展中的角色：
- 腎元減少→腎臟灌流不足感知→Renin 釋放
- Angiotensin II：出球小動脈收縮 > 入球→腎小球高壓
- Angiotensin II：直接促纖維化（TGF-β upregulation）
- ACEI/ARB 的腎保護機轉：降低腎小球內壓 + 減少蛋白尿 + 抗纖維化

腎小管間質纖維化：蛋白尿→近曲小管過載→NF-κB 活化→趨化因子→巨噬細胞浸潤→TGF-β→myofibroblast 轉化→膠原蛋白 I/III 沉積→間質纖維化→腎小管萎縮→微血管稀少化→缺氧→纖維化加速

## 六、人醫借鑑 (Translational Insights)

- 人醫 KDIGO AKI 分期 (Stage 1-3) 基於 Creatinine 變化和尿量，獸醫 IRIS AKI 分期借鑑此框架
- 人醫 AKI-to-CKD transition 概念，AKI 後腎臟可能表面恢復但留下纖維化「疤痕」→長期發展為 CKD。獸醫應長期追蹤 AKI 存活者
- 人醫腎毒性藥物的 therapeutic drug monitoring (TDM) 策略（aminoglycoside 用藥後谷值監測）可直接應用於獸醫
- 人醫 renal replacement therapy (RRT) 技術進步（CRRT）在獸醫有限度應用

## 七、臨床爭議與知識空缺 (Controversies & Knowledge Gaps)

| 爭議主題 | 目前立場 | 證據等級 | 研究方向 |
|---------|---------|---------|---------|
| AKI 生物標記 (NGAL, KIM-1) | 研究階段，臨床化初期 | Level III | 獸醫特異性 cutoff 驗證 |
| AKI 輸液最佳方案 | 矯正脫水為首要 | Level II | 最佳輸液速率與晶體液選擇 |
| NSAIDs 在健康動物的腎臟安全性 | 短期使用相對安全 | Level II | 長期使用的累積腎損傷？ |
| 幹細胞治療 AKI | 初步研究有希望 | Level IV | 最佳時機/劑量/途徑 |`,
  clinical_pearl: 'CKD 管理裡有一個觀念非常重要：蛋白尿本身就是腎毒。蛋白被過濾出來、又被近曲小管重新吸收的時候，會引發一連串的發炎反應，催化腎小管間質纖維化。這就是為什麼 IRIS 分期特別把蛋白尿做亞分期（UPC）。哪怕 Creatinine 完全穩定，只要 UPC 一直爬，預後就是不好。Benazepril 跟 Telmisartan 之所以能讓 CKD 進展變慢，不是只因為把腎小球壓力降下來，更關鍵是把蛋白尿減少，近曲小管那邊的毒性負擔才能跟著減。',
  common_mistakes: [
    '將 AKI 和 CKD 視為完全不同的實體，AKI 可以轉變為 CKD（AKI-to-CKD transition）',
    '忽略 NSAIDs 的腎毒性（抑制前列腺素 → 入球小動脈收縮 → 腎血流減少，尤其在脫水或低血壓時）',
    '不理解蛋白尿的腎毒性，僅將其視為診斷指標而非治療靶標',
    '忘記缺血-再灌流損傷的概念，血流恢復後的 ROS 爆發可能比原始缺血造成更大損傷',
  ],
  disease_data: null,
  diagnostic_data: null,
  procedure_data: null,
  visual_placeholders: [
    { position: '腎元喪失惡性循環段落後', type: 'flowchart', description: 'CKD 惡性循環與 RAAS 角色圖' },
    { position: '腎毒性損傷表後', type: 'comparison_table', description: '常見腎毒物與損傷機轉比較表' },
  ],
  interactive_placeholders: [],
  drug_api_links: ['Benazepril', 'Telmisartan'],
  references: [
    { type: 'journal', citation: 'Ross L. "Acute kidney injury in dogs and cats." Vet Clin North Am Small Anim Pract. 2011;41(1):1-14.', relevance: 'AKI 病理生理回顧' },
    { type: 'journal', citation: 'Brown SA. "Oxidative stress and chronic kidney disease." Vet Clin North Am Small Anim Pract. 2008;38(1):157-166.', relevance: 'CKD 氧化壓力機轉' },
    { type: 'textbook', citation: 'Ettinger SJ, Feldman EC. Textbook of Veterinary Internal Medicine, 8th ed. Elsevier, 2017.', relevance: '腎損傷病理生理教材' },
    { type: 'guideline', citation: 'IRIS (International Renal Interest Society). "IRIS Staging of CKD (Modified 2023)." iris-kidney.com.', relevance: 'CKD 分期與治療指引' },
  ],
  is_current: true,
  created_at: now,
};

/** 內分泌失調機轉，L2 機轉型 */
const contentEndocrineDysregulation: NodeContent = {
  id: 'CONTENT-IM-L2-002',
  node_id: 'IM-L2-002',
  version: 1,
  summary: '內分泌失調機轉涵蓋下視丘-垂體-靶腺軸（HPA/HPT/HPG）的回饋失衡、腺體自主性分泌（腫瘤性）、自體免疫性腺體破壞、以及受體層級的訊號異常（胰島素阻抗）。犬貓最常見的內分泌疾病，庫欣症候群、甲狀腺功能低下/亢進、糖尿病、愛迪生氏症，均可追溯至這些核心機轉。',
  learning_objectives: [
    '描述 HPA 軸（下視丘-垂體-腎上腺）的正常回饋調控與失調機轉',
    '說明 HPT 軸（下視丘-垂體-甲狀腺）在犬甲低和貓甲亢中的不同病理機轉',
    '解釋胰島素阻抗（insulin resistance）的分子機轉與臨床後果',
    '描述自體免疫性腺體破壞在愛迪生氏症與第一型糖尿病中的角色',
    '說明腫瘤性自主分泌（autonomous secretion）在垂體腺瘤與腎上腺腫瘤中的機轉',
  ],
  key_points: [
    'HPA 軸正常調控：下視丘 CRH → 垂體 ACTH → 腎上腺 cortisol → 負回饋抑制 CRH/ACTH',
    '犬庫欣（PDH 85%）：垂體 ACTH 腺瘤自主分泌 → 雙側腎上腺增生 → 皮質醇過高 → 負回饋無效',
    '犬庫欣（ADH 15%）：腎上腺腫瘤自主分泌 cortisol → ACTH 被抑制 → 對側腎上腺萎縮',
    'HPT 軸：下視丘 TRH → 垂體 TSH → 甲狀腺 T4/T3 → 負回饋抑制 TRH/TSH',
    '犬甲低（>95% 原發性）：淋巴球性甲狀腺炎（自體免疫）或特發性甲狀腺萎縮 → T4↓ → TSH↑（代償失敗）',
    '貓甲亢：甲狀腺結節性增生/腺瘤 → 自主分泌 T4 → TSH 被抑制 → 正常甲狀腺組織萎縮',
    '胰島素阻抗：受體後訊號障礙（IRS-1 磷酸化異常 → PI3K/Akt 路徑↓）→ 肝臟糖質新生↑ + 周邊葡萄糖攝取↓',
    '犬 DM 多為第一型（β 細胞免疫破壞 + 遺傳易感性）；貓 DM 多為第二型（胰島素阻抗 + β 細胞衰竭 + 澱粉樣沉積）',
    '愛迪生氏症（原發性）：免疫介導腎上腺皮質破壞 → cortisol↓ + aldosterone↓ → Na↓K↑（Na:K <27 為典型）',
    '非典型愛迪生：僅 zona fasciculata 受損 → cortisol↓ 但 aldosterone 正常 → 電解質正常，易漏診',
  ],
  body: `# 內分泌失調機轉

## 一、病理機轉 (Pathophysiology)

### HPA 軸失調：庫欣症候群

正常 HPA 軸：下視丘 CRH（corticotropin-releasing hormone）→ 垂體前葉 ACTH → 腎上腺皮質 zona fasciculata → cortisol 分泌 → 負回饋抑制下視丘和垂體

垂體依賴型（PDH, 85%）：ACTH 分泌型垂體微腺瘤/大腺瘤 → ACTH 自主過度分泌（部分保留回饋敏感性）→ 雙側腎上腺增生 → 皮質醇過高 → 臨床庫欣表現。LDDS 可部分抑制（保留回饋）而 HDDS 可抑制（與腎上腺腫瘤鑑別）

腎上腺依賴型（ADH, 15%）：腎上腺皮質腺瘤/腺癌 → 自主分泌 cortisol → ACTH 負回饋抑制 → 對側腎上腺萎縮。LDDS 和 HDDS 均無法抑制。ACTH 刺激測試呈單側誇大反應。

醫源性庫欣：長期外源性類固醇 → HPA 軸抑制 → 腎上腺萎縮 → 突然停藥可致 Addisonian crisis

### HPT 軸失調：甲狀腺疾病

犬甲低（Hypothyroidism）：
- 原發性（>95%）：淋巴球性甲狀腺炎（自體免疫，anti-thyroglobulin Ab）→ 甲狀腺組織漸進破壞 → T4↓ → TSH 代償性↑（早期）→ 最終代償失敗
- 特發性甲狀腺萎縮：甲狀腺實質被脂肪/纖維組織取代，機轉不明
- 品種易感性：Golden Retriever, Doberman, Beagle 等

貓甲亢（Hyperthyroidism）：
- 甲狀腺結節性增生/腺瘤 → T4 自主過度分泌 → TSH 被抑制至極低
- 可能致病因子：飲食碘含量變化、罐頭 BPA、環境內分泌干擾物
- 繼發性影響：甲亢性心肌病（HCM 樣改變）、腎臟 GFR 假性正常（甲亢掩蓋 CKD）

### 胰島素-葡萄糖軸失調：糖尿病

犬 DM（主要為第一型）：
- 免疫介導 β 細胞破壞 + 遺傳易感性（DLA 相關）→ 絕對胰島素缺乏
- 胰臟炎繼發 β 細胞破壞也常見
- 幾乎所有犬 DM 需終身胰島素治療

貓 DM（主要為第二型）：
- 胰島素阻抗：肥胖 → 脂肪組織分泌促炎細胞因子（TNF-α, IL-6）→ IRS-1 serine 磷酸化 → 干擾正常 tyrosine 磷酸化 → PI3K/Akt 路徑下游訊號↓
- β 細胞衰竭：胰島澱粉樣沉積（amylin/IAPP 聚集）→ β 細胞毒性 → 分泌能力漸失
- 葡萄糖毒性（glucotoxicity）：血糖一直壓不下來，β 細胞功能就一直被悶住（可逆！早期把血糖拉回來有機會緩解）

### 腎上腺皮質機能低下：愛迪生氏症

原發性（免疫介導）：自體免疫攻擊腎上腺皮質 → zona glomerulosa（aldosterone）+ zona fasciculata（cortisol）破壞 → 低鈉高鉀 + 皮質醇缺乏

非典型愛迪生：僅 zona fasciculata 受損或破壞早期 → cortisol↓ 但 aldosterone 尚正常 → 電解質正常 → ACTH 刺激測試確診

繼發性：垂體 ACTH 分泌不足（腫瘤、創傷）→ cortisol↓ 但 aldosterone 正常（RAAS 獨立調控）

## 六、人醫借鑑 (Translational Insights)

- 人醫 GLP-1 receptor agonists（semaglutide）治療 T2DM 與肥胖，獸醫貓 DM 的 GLP-1 類似物 exenatide 有初步研究
- 人醫 continuous glucose monitoring (CGM) 革新糖尿病管理，獸醫 FreeStyle Libre 在犬貓已廣泛使用
- 人醫 pasireotide 治療庫欣病（垂體型），獸醫犬 PDH 的垂體靶向治療正在探索中
- 人醫甲亢的 radioactive iodine (I-131) 治療已成熟，獸醫貓甲亢 I-131 為黃金標準但受設施限制

## 七、臨床爭議與知識空缺 (Controversies & Knowledge Gaps)

| 爭議主題 | 目前立場 | 證據等級 | 研究方向 |
|---------|---------|---------|---------|
| 犬甲低的自體免疫觸發因子 | 遺傳 + 環境（待釐清） | Level III | 犬 DLA 與甲狀腺炎風險 |
| 貓甲亢的環境因素 | BPA/PBDE 假說 | Level III | 流行病學前瞻研究 |
| 貓 DM 緩解率的預測因子 | 早期診斷 + 積極胰島素治療 | Level II | 胰島功能殘存的生物標記 |
| 非典型愛迪生的病程預測 | 部分進展為典型型 | Level IV | 長期追蹤研究 |`,
  clinical_pearl: '貓甲亢會掩蓋同時存在的 CKD。甲亢增加心輸出量和腎臟血流，使 GFR 假性正常。一旦治療甲亢（methimazole 或 I-131），GFR 下降，「隱藏的」CKD 便會浮現。所以在治療貓甲亢前和治療後 2-4 週都必須監測腎功能指標（SDMA, BUN, Creatinine）。臨床上建議先以低劑量 methimazole 試驗性治療 2-4 週評估腎功能變化，再決定是否進行 I-131 永久治療。',
  common_mistakes: [
    '混淆 PDH（垂體型，ACTH 高）與 ADH（腎上腺型，ACTH 低）的 ACTH 水平差異',
    '忽略醫源性庫欣的可能，長期外源性類固醇使用後突然停藥可致 Addisonian crisis',
    '不理解貓甲亢掩蓋 CKD 的機轉，治療前未評估腎功能基線',
    '將犬 DM 和貓 DM 的病理機轉混為一談，犬以免疫破壞為主，貓以胰島素阻抗為主',
    '忽略非典型愛迪生（電解質正常型）的存在，導致漏診',
  ],
  disease_data: null,
  diagnostic_data: null,
  procedure_data: null,
  visual_placeholders: [
    { position: 'HPA 軸段落後', type: 'flowchart', description: 'HPA 軸正常回饋 vs PDH/ADH 失調機轉比較圖' },
    { position: '胰島素阻抗段落後', type: 'flowchart', description: '犬 T1DM vs 貓 T2DM 病理機轉比較圖' },
  ],
  interactive_placeholders: [],
  drug_api_links: ['Trilostane', 'Methimazole', 'Insulin', 'Levothyroxine'],
  references: [
    { type: 'guideline', citation: 'Behrend E et al. "2018 AAHA Diabetes Management Guidelines for Dogs and Cats." J Am Anim Hosp Assoc. 2018;54(1):1-21.', relevance: '犬貓糖尿病管理共識' },
    { type: 'textbook', citation: 'Feldman EC, Nelson RW, Reusch CE, Scott-Moncrieff JC. Canine and Feline Endocrinology, 4th ed. Elsevier, 2015.', relevance: '犬貓內分泌學教材' },
    { type: 'journal', citation: 'Peterson ME. "Hyperthyroidism in cats: what\'s causing this epidemic of thyroid disease and can we prevent it?" J Feline Med Surg. 2012;14(11):804-818.', relevance: '貓甲亢流行病學與病因' },
    { type: 'guideline', citation: 'Scott-Moncrieff JC. "Hypothyroidism." In: Feldman EC et al. Canine and Feline Endocrinology, 4th ed. Elsevier, 2015. pp.77-135.', relevance: '犬甲低診斷與管理' },
  ],
  is_current: true,
  created_at: now,
};

/** 腸道發炎機轉，L2 機轉型 */
const contentGIInflammation: NodeContent = {
  id: 'CONTENT-IM-L2-003',
  node_id: 'IM-L2-003',
  version: 1,
  summary: '腸道發炎機轉是理解慢性腸病（CE/IBD）、蛋白質流失性腸病（PLE）和食物過敏的基礎。核心概念為腸道屏障功能崩解、腸道微生物群失調（dysbiosis）與黏膜免疫失衡三者的交互作用。遺傳易感性決定個體對環境觸發因子的反應。',
  learning_objectives: [
    '描述腸道屏障功能崩解在 CE/IBD 發生中的核心角色',
    '解釋腸道微生物群失調（dysbiosis）與腸道發炎的因果關係',
    '說明黏膜免疫系統（GALT）在腸道恆定與發炎中的雙重角色',
    '描述淋巴管擴張（lymphangiectasia）導致蛋白質流失的機轉',
    '說明食物過敏（food allergy）vs 食物不耐受（food intolerance）的免疫機轉差異',
  ],
  key_points: [
    '腸道發炎核心三角：屏障崩解 + dysbiosis + 免疫失衡，三者互為因果，形成惡性循環',
    '屏障崩解：tight junction 蛋白（claudin、occludin）表達下降 → 通透性增加 → 腸腔抗原穿透',
    'Dysbiosis 特徵：物種多樣性下降、Firmicutes/Bacteroidetes 比例改變、潛在致病菌增加、SCFA 產生減少',
    'GALT（Gut-Associated Lymphoid Tissue）：Peyer patch、固有層淋巴球、IgA 分泌 → 正常時維持口服耐受，異常時驅動發炎',
    '口服耐受（Oral Tolerance）：正常腸道對食物抗原和共生菌產生免疫不反應狀態。耐受崩解 → CE/IBD',
    '淋巴管擴張機轉：淋巴引流受阻 → 淋巴管擴張破裂 → 富含蛋白的淋巴液滲入腸腔 → PLE',
    '食物過敏 vs 食物不耐受：過敏=免疫介導（IgE 或 non-IgE T 細胞介導）；不耐受=非免疫機轉（酵素缺乏、藥理反應）',
  ],
  body: `# 腸道發炎機轉

## 一、病理機轉 (Pathophysiology)

### 核心病理三角：屏障崩解 + Dysbiosis + 免疫失衡

腸道屏障功能崩解：
- Tight Junction 異常：正常 claudin-1/-3/-4/-7 和 occludin 維持細胞間密封→CE/IBD 中促炎細胞因子（TNF-α, IFN-γ）→tight junction 蛋白表達下降→通透性增加→腸腔抗原穿透
- 黏液層損傷：Goblet cell 減少→黏液層變薄→細菌直接接觸上皮→TLR 活化→發炎

腸道微生物群失調（Dysbiosis）：
- 物種多樣性下降（Shannon diversity index↓）
- Clostridium hiranonis 減少（膽鹽代謝關鍵菌）→初級膽鹽累積
- Faecalibacterium prausnitzii 減少（主要 butyrate 生產菌）
- E. coli 和 C. perfringens 增加
- SCFA（尤其 butyrate）產生減少→結腸上皮能量不足
- Dysbiosis Index (DI)：Texas A&M 開發，DI > 2 = dysbiosis

黏膜免疫失衡：
- 正常：口服耐受，食物抗原由腸道 DC 捕獲→優先誘導 Treg 和 IgA 反應
- 異常：口服耐受崩解→Th1/Th17 過度活化→IL-17、TNF-α、IFN-γ→慢性黏膜發炎

### 淋巴管擴張 → PLE
- 原發性：先天性淋巴管發育異常（Yorkshire Terrier、Norwegian Lundehund）
- 繼發性：腸壁慢性發炎→淋巴引流受阻→淋巴管擴張破裂→蛋白質流失
- 右心衰竭→胸管壓力增高→淋巴回流受阻

## 六、人醫借鑑 (Translational Insights)

- 人醫 Crohn's disease 的 NOD2 突變概念在犬 CE 有平行發現（犬 TLR/NOD 變異與 CE 風險相關）
- 人醫 anti-TNF-α biologics (infliximab, adalimumab) 為 IBD 治療革命，獸醫犬用 anti-TNF 抗體尚無
- 人醫 fecal microbiota transplantation (FMT) 對 C. difficile 療效卓越，獸醫 FMT 用於 CE 初步有效
- 人醫 therapeutic drug monitoring for thiopurines (6-thioguanine nucleotides) 可能借鑑至獸醫 Azathioprine 監測

## 七、臨床爭議與知識空缺 (Controversies & Knowledge Gaps)

| 爭議主題 | 目前立場 | 證據等級 | 研究方向 |
|---------|---------|---------|---------|
| Dysbiosis 是 CE 的因還是果 | 互為因果（雙向因果） | Level II | 無菌動物模型研究 |
| 抗生素在 CE 的長期影響 | 可能加重 dysbiosis | Level II | 抗生素 stewardship |
| FMT 標準化方案 | 無共識 | Level III | 供體選擇/劑量/頻率/途徑 |
| 食物不耐受 vs 食物過敏 | 鑑別困難 | Level III | 更好的體外測試方法 |`,
  clinical_pearl: 'Dysbiosis Index（DI）這個工具用來看腸道菌相健康還滿實用的。臨床上會發現，CE 治療有效時，DI 通常也跟著改善。要提醒的是抗生素這件事：Metronidazole、Tylosin 短期用確實壓得下症狀，但長期用反而讓 dysbiosis 雪上加霜。這就是為什麼現代越來越多人主張 CE 不要先想到抗生素。反過來，糞便微生物群移植（FMT）想做的是把菌相多樣性救回來，犬 CE 初步研究看起來有點搞頭。',
  common_mistakes: [
    '把 dysbiosis 當成 CE 的「原因」，而沒看到它也是結果，兩件事其實互為因果',
    '忘了黏液層除了當物理屏障，本身也是免疫調節介面',
    '把食物過敏跟食物不耐受混為一談（前者有免疫機轉，後者沒有）',
    '不理解口服耐受崩解這個概念，這是所有慢性腸病共同的病理起點',
  ],
  disease_data: null,
  diagnostic_data: null,
  procedure_data: null,
  visual_placeholders: [
    { position: '腸道屏障段落後', type: 'flowchart', description: '腸道發炎惡性循環：屏障崩解 ↔ dysbiosis ↔ 免疫失衡' },
    { position: 'Dysbiosis 段落後', type: 'comparison_table', description: '正常 vs dysbiosis 腸道微生物群比較表' },
  ],
  interactive_placeholders: [],
  drug_api_links: [],
  references: [
    { type: 'journal', citation: 'Suchodolski JS. "Diagnosis and interpretation of intestinal dysbiosis in dogs and cats." Vet J. 2016;215:30-37.', relevance: '腸道微生物群失調診斷與判讀' },
    { type: 'journal', citation: 'Dandrieux JRS. "Inflammatory bowel disease versus chronic enteropathy in dogs." J Small Anim Pract. 2016;57(11):589-599.', relevance: '腸道發炎機轉與 CE 分類' },
    { type: 'textbook', citation: 'Washabau RJ, Day MJ. Canine and Feline Gastroenterology. Elsevier, 2013.', relevance: '消化系統病理生理教材' },
    { type: 'guideline', citation: 'Washabau RJ, Day MJ, Willard MD, et al. "Endoscopic, biopsy, and histopathologic guidelines for the evaluation of gastrointestinal inflammation in companion animals." J Vet Intern Med. 2010;24(1):10-26.', relevance: 'GI 炎症評估指引' },
  ],
  is_current: true,
  created_at: now,
};

/** 肝臟損傷與再生，L2 機轉型 */
const contentHepaticInjury: NodeContent = {
  id: 'CONTENT-IM-L2-004',
  node_id: 'IM-L2-004',
  version: 1,
  summary: '肝臟損傷機轉涵蓋肝細胞壞死、凋亡、膽汁鬱積與纖維化等病理過程。肝臟具有強大的再生能力，但持續損傷超過再生能力時將進展為纖維化和肝硬化。犬貓特殊考量包括貓的獨特脂質代謝（FHL）、銅蓄積性肝病（特定犬種）、以及物種間藥物代謝差異。',
  learning_objectives: [
    '描述肝細胞損傷的主要機轉（氧化壓力、線粒體損傷、膽汁酸毒性）',
    '解釋肝臟纖維化的進程與星狀細胞（stellate cell）活化的角色',
    '說明膽汁鬱積的形成機轉與臨床後果',
    '描述肝臟再生的細胞生物學與調控因子',
    '說明貓肝臟脂肪變性的獨特代謝機轉',
  ],
  key_points: [
    '肝細胞損傷兩大途徑：壞死（necrosis, 被動性、發炎性）vs 凋亡（apoptosis, 程序性、非發炎性）',
    '氧化壓力：CYP450 代謝產生 ROS → 脂質過氧化 → 細胞膜損傷 → 肝細胞壞死（藥物性肝損傷常見機轉）',
    '肝臟纖維化關鍵：Hepatic Stellate Cell（HSC）從靜止態活化為 myofibroblast → 膠原蛋白 I/III 沉積',
    '膽汁鬱積：膽汁流受阻 → 膽汁酸在肝細胞內蓄積 → 直接細胞毒性（疏水性膽汁酸）→ 凋亡',
    '肝臟再生：肝細胞可從 G0 進入細胞週期；HGF 和 EGF 為主要促再生因子；正常可再生達 70% 喪失量',
    '貓 FHL 獨特機轉：carnitine/arginine 缺乏 → 脂肪酸 β-氧化不足 + VLDL 合成不足 → TG 蓄積',
    '犬銅蓄積：COMMD1 基因突變（Bedlington Terrier）→ 銅排泄障礙 → 肝細胞銅過載 → 氧化損傷 → 慢性肝炎',
  ],
  body: `# 肝臟損傷與再生

## 一、病理機轉 (Pathophysiology)

### 肝細胞損傷機轉

氧化壓力與 ROS：CYP450 藥物代謝→活性代謝物 + ROS→Glutathione (GSH) 耗竭→脂質過氧化→細胞膜完整性喪失→壞死。範例：Acetaminophen 毒性（貓 glucuronidation 能力低→NAPQI 蓄積→GSH 耗竭）

線粒體損傷：mPTP 開啟→線粒體膜電位喪失→Cytochrome c 釋放→Caspase 活化→凋亡；ATP 完全耗竭→壞死

膽汁酸毒性：膽汁鬱積→疏水性膽汁酸（DCA、CDCA）在肝細胞內蓄積→直接損傷細胞膜 + 誘導線粒體凋亡路徑。[藥物:Ursodiol] (UDCA) = 親水性膽汁酸→保護機轉

### 肝臟纖維化

Hepatic Stellate Cell (HSC) 活化：肝損傷→Kupffer cell 活化→TGF-β/PDGF 釋放→HSC 從靜止態（Vitamin A 儲存）→活化態（myofibroblast）→膠原蛋白 I/III 沉積→Disse 間隙纖維化→竇狀隙毛細管化→持續→肝硬化→門脈高壓→腹水

可逆性：移除損傷因子→活化 HSC 凋亡→MMP 降解膠原。早期纖維化可逆；晚期肝硬化多不可逆。

### 肝臟再生
- 正常肝細胞處於 G0 靜止期（年周轉率 < 1%）
- 肝切除或損傷→HGF、EGF、IL-6 驅動肝細胞進入 S 期→可再生達 70% 喪失量
- 犬肝再生能力佳；貓較差（尤其 FHL 合併營養不良時）

### 物種特異性肝損傷
- 貓 FHL：必需胺基酸依賴性高 + VLDL 合成能力不足→厭食→FFA 湧入→TG 蓄積
- 犬銅蓄積：COMMD1 突變（Bedlington Terrier）→銅排泄障礙→Fenton 反應→氧化損傷

## 六、人醫借鑑 (Translational Insights)

- 人醫 NAFLD/NASH 的全球流行推動了肝纖維化非侵入性評估工具的發展（FibroScan, NAFLD fibrosis score），獸醫缺乏對應工具
- 人醫 N-acetylcysteine (NAC) 治療 Acetaminophen 中毒的金標準，直接適用於獸醫（尤其貓）
- 人醫 Wilson's disease (銅蓄積性肝病) 與犬銅蓄積性肝病機轉高度相似，犬為天然動物模型
- 人醫肝臟的 non-invasive fibrosis assessment 策略可借鑑至獸醫

## 七、臨床爭議與知識空缺 (Controversies & Knowledge Gaps)

| 爭議主題 | 目前立場 | 證據等級 | 研究方向 |
|---------|---------|---------|---------|
| SAMe 在犬貓肝病的效益 | 廣泛使用但 RCT 有限 | Level III | 犬貓特異性 RCT |
| 肝纖維化非侵入性評估 | 超音波 + 肝酶趨勢為主 | Level III | 獸醫 elastography 研究 |
| 犬銅蓄積的篩檢基因檢測 | Bedlington 有 COMMD1 | Level II | 其他品種的多基因定型 |
| 貓肝再生能力差的機轉 | 觀察到但機轉不明 | Level IV | 貓肝細胞增殖調控研究 |`,
  clinical_pearl: '犬肝酶（ALT/AST/ALP/GGT）的判讀需要理解其來源和意義。ALT 是肝細胞損傷的最敏感指標（肝細胞質內豐富），但不代表肝功能。真正反映肝功能的是合成指標（Albumin、BUN、Glucose、Cholesterol、Coagulation factors）和排泄指標（Bile acids、Bilirubin）。一隻犬可以 ALT 升高 10 倍但肝功能正常（急性肝炎早期），也可以 ALT 接近正常但肝功能嚴重受損（終末期肝硬化，因為已經沒有多少肝細胞可以「漏出」ALT 了）。',
  common_mistakes: [
    '將肝酶升高等同於肝功能下降，ALT 反映損傷程度，膽汁酸/Albumin 才反映功能',
    '忽略犬特有的 steroid-induced ALP isoenzyme（Cushing 或外源性類固醇可致 ALP 明顯升高，不代表肝臟疾病）',
    '不理解肝臟纖維化的可逆性，早期纖維化移除病因後可改善',
    '忘記貓對 Acetaminophen 極度敏感（glucuronidation 能力低下）',
  ],
  disease_data: null,
  diagnostic_data: null,
  procedure_data: null,
  visual_placeholders: [
    { position: '肝臟纖維化段落後', type: 'flowchart', description: '肝損傷 → 纖維化 → 肝硬化進程圖' },
    { position: '物種特異性段落後', type: 'comparison_table', description: '犬 vs 貓肝臟代謝差異與疾病傾向比較表' },
  ],
  interactive_placeholders: [],
  drug_api_links: ['SAMe', 'Ursodiol'],
  references: [
    { type: 'textbook', citation: 'Ettinger SJ, Feldman EC. Textbook of Veterinary Internal Medicine, 8th ed. Elsevier, 2017. Hepatobiliary chapters.', relevance: '肝臟疾病病理生理教材' },
    { type: 'journal', citation: 'Center SA. "Feline hepatic lipidosis." Vet Clin North Am Small Anim Pract. 2005;35(1):225-269.', relevance: '貓 FHL 代謝機轉' },
    { type: 'journal', citation: 'Hoffmann G. "Copper-associated liver diseases." Vet Clin North Am Small Anim Pract. 2009;39(3):489-511.', relevance: '犬銅蓄積性肝病機轉' },
    { type: 'guideline', citation: 'Webster CRL, Center SA, Cullen JM, et al. "ACVIM consensus statement on the diagnosis and treatment of chronic hepatitis in dogs." J Vet Intern Med. 2019;33(3):1173-1200.', relevance: '犬慢性肝炎診治共識' },
  ],
  is_current: true,
  created_at: now,
};

/** 酸鹼平衡障礙，L2 機轉型 */
const contentAcidBase: NodeContent = {
  id: 'CONTENT-IM-L2-005',
  node_id: 'IM-L2-005',
  version: 1,
  summary: '酸鹼平衡障礙是內科急重症和慢性疾病中的常見問題。正常 pH 維持在 7.35-7.45，由緩衝系統、肺臟（CO2 排出）和腎臟（HCO3- 再吸收/H+ 分泌）三大機轉調控。Henderson-Hasselbalch 方程式是理解酸鹼的數學基礎。臨床上以代謝性酸中毒最常見（DKA、AKI、乳酸酸中毒）。',
  learning_objectives: [
    '運用 Henderson-Hasselbalch 方程式解釋 pH、pCO2、HCO3- 的關係',
    '描述四種基本酸鹼障礙（代謝性/呼吸性酸中毒和鹼中毒）的機轉與代償',
    '運用 Anion Gap 區分代謝性酸中毒的病因（高 AG vs 正常 AG）',
    '正確判讀血液氣體分析結果並識別混合型酸鹼障礙',
    '說明 DKA 和乳酸酸中毒的酸鹼機轉與矯正原則',
  ],
  key_points: [
    'Henderson-Hasselbalch：pH = 6.1 + log([HCO3-] / 0.03 × pCO2)。pH 由 HCO3-/pCO2 比值決定',
    '三大調控機轉：(1) 緩衝系統（即時）、(2) 肺臟調節 pCO2（分鐘）、(3) 腎臟調節 HCO3-（小時-天）',
    '代謝性酸中毒（最常見）：HCO3-↓ → pH↓ → 代償性過度換氣 → pCO2↓',
    'Anion Gap = Na+ - (Cl- + HCO3-)。正常犬 12-24, 貓 13-27。AG 升高提示有機酸蓄積',
    '高 AG 代謝性酸中毒口訣 MUDPILES：Methanol, Uremia, DKA, Propylene glycol, Isoniazid/Iron, Lactic acidosis, Ethylene glycol, Salicylates',
    '正常 AG 代謝性酸中毒 = 高氯性（HCO3- 流失：腹瀉、RTA、輸液稀釋）',
    '代謝性鹼中毒：最常見原因為嘔吐（HCl 流失）和利尿劑使用',
    '混合型障礙：預期代償公式可判斷是否有第二種酸鹼障礙疊加',
  ],
  body: `# 酸鹼平衡障礙

## 一、病理機轉 (Pathophysiology)

### Henderson-Hasselbalch 基本原理
- pH = 6.1 + log([HCO3-] / 0.03 x pCO2)
- pH 由 HCO3-（代謝成分/腎臟調控）和 pCO2（呼吸成分/肺臟調控）的比值決定

### 三大調控機轉
1. 緩衝系統（秒）：碳酸氫鈉緩衝（最重要）、蛋白質緩衝、磷酸鹽緩衝
2. 肺臟（分鐘）：調節 CO2 排出。pCO2↑→換氣增加→CO2↓
3. 腎臟（小時-天）：HCO3- 再吸收（PCT）、H+ 分泌、NH4+ 生成（遠端腎元）

### 四種基本酸鹼障礙

| 障礙 | 原發改變 | 代償 | 常見原因 |
|------|---------|------|---------|
| 代謝性酸中毒 | HCO3-↓ | pCO2↓ | DKA, AKI, 乳酸酸中毒, 腹瀉 |
| 代謝性鹼中毒 | HCO3-↑ | pCO2↑ | 嘔吐, 利尿劑, 低鉀 |
| 呼吸性酸中毒 | pCO2↑ | HCO3-↑ | 呼吸抑制, 氣道阻塞, 胸腔積液 |
| 呼吸性鹼中毒 | pCO2↓ | HCO3-↓ | 過度換氣, 疼痛, 發燒, 貧血 |

### Anion Gap 分析
AG = Na+ - (Cl- + HCO3-)，犬正常 12-24 mEq/L，貓 13-27 mEq/L

高 AG 代謝性酸中毒（有機酸蓄積）：DKA（酮體）、乳酸酸中毒（組織低灌流）、尿毒症（磷酸/硫酸）、Ethylene glycol（glycolic/oxalic acid）

正常 AG（高氯性）代謝性酸中毒（HCO3- 直接流失）：腹瀉、RTA、大量 0.9% NaCl 輸液

### 血液氣體判讀五步驟
1. 看 pH：< 7.35 酸中毒、> 7.45 鹼中毒
2. 看原發改變：代謝（HCO3-）還是呼吸（pCO2）？
3. 算預期代償：是否有第二種障礙疊加？
4. 算 AG：代謝性酸中毒時區分高 AG vs 正常 AG
5. 必要時算 Delta-delta

### 預期代償公式（犬）

| 原發障礙 | 預期代償 |
|---------|---------|
| 代謝性酸中毒 | pCO2 = 1.5 x HCO3- + 8 (+-2) |
| 代謝性鹼中毒 | pCO2 增加 0.7 mmHg / 每 1 mEq HCO3-↑ |
| 急性呼吸性酸中毒 | HCO3- 增加 1 / 每 10 mmHg pCO2↑ |
| 慢性呼吸性酸中毒 | HCO3- 增加 3.5 / 每 10 mmHg pCO2↑ |

## 六、人醫借鑑 (Translational Insights)

- 人醫 Stewart approach (physicochemical/strong ion difference) 比 Henderson-Hasselbalch 看得更廣，獸醫界慢慢引進，但還沒普及
- 人醫 point-of-care blood gas analyzers 已成為急診/ICU 標配，獸醫急診同樣受益
- 人醫 DKA 管理的 protocolized approach (DKA pathway) 可直接借鑑至獸醫 DKA 管理
- 人醫 balanced crystalloids (Lactated Ringer's, PlasmaLyte) 取代 0.9% NaCl 以減少高氯性酸中毒，獸醫同理

## 七、臨床爭議與知識空缺 (Controversies & Knowledge Gaps)

| 爭議主題 | 目前立場 | 證據等級 | 研究方向 |
|---------|---------|---------|---------|
| Stewart approach vs 傳統 HH | 兩者可互補 | Level II | 獸醫臨床應用的比較研究 |
| DKA 的 NaHCO3 使用 | 僅 pH <7.0 時考慮 | Level III | 最佳 pH 閾值？ |
| 0.9% NaCl vs balanced crystalloids | 傾向 balanced | Level II | 獸醫特異性比較研究 |
| 貓正常 AG 範圍 | 13-27（文獻不一） | Level III | 大規模正常貓 AG 數據 |`,
  clinical_pearl: 'DKA 的酸鹼判讀是最經典也最實用的範例。DKA 通常呈現高 AG 代謝性酸中毒（酮體蓄積），但實際上許多 DKA 患者同時存在混合型障礙：(1) 高 AG 代謝性酸中毒（酮體）+ (2) 正常 AG 代謝性酸中毒（腎臟 HCO3- 流失）+ (3) 代謝性鹼中毒（如果有嘔吐）。Delta-delta ratio 可以幫助拆解這些疊加的障礙。治療上，碳酸氫鈉補充要極度謹慎，僅在 pH < 7.0 時考慮，因為胰島素治療後酮體代謝會自然恢復 HCO3-。',
  common_mistakes: [
    '不會系統性地判讀血液氣體（必須按步驟：pH → 原發改變 → 代償 → AG → Delta-delta）',
    'DKA 患者盲目補碳酸氫鈉（大多數 DKA 僅需胰島素+輸液，酮體代謝後 HCO3- 自然恢復）',
    '忽略混合型酸鹼障礙的存在（預期代償不符時必須懷疑第二種障礙）',
    '大量 0.9% NaCl 輸液導致高氯性酸中毒而不自知',
  ],
  disease_data: null,
  diagnostic_data: null,
  procedure_data: null,
  visual_placeholders: [
    { position: '血液氣體判讀段落後', type: 'flowchart', description: '酸鹼判讀系統性流程圖' },
    { position: 'AG 分析段落後', type: 'comparison_table', description: '高 AG vs 正常 AG 代謝性酸中毒鑑別表' },
  ],
  interactive_placeholders: [
    { position: '血液氣體判讀段落', type: 'interactive_staging', description: '輸入 pH/pCO2/HCO3-/Na/Cl 自動判讀酸鹼障礙' },
  ],
  drug_api_links: [],
  references: [
    { type: 'textbook', citation: 'DiBartola SP. Fluid, Electrolyte, and Acid-Base Disorders in Small Animal Practice, 4th ed. Elsevier, 2012.', relevance: '酸鹼平衡權威教科書' },
    { type: 'journal', citation: 'Hopper K, Epstein SE. "Incidence, nature, and etiology of metabolic acidosis in dogs and cats." J Vet Intern Med. 2012;26(5):1107-1114.', relevance: '犬貓代謝性酸中毒流行病學' },
    { type: 'textbook', citation: 'Ettinger SJ, Feldman EC. Textbook of Veterinary Internal Medicine, 8th ed. Elsevier, 2017.', relevance: '酸鹼障礙臨床教材' },
    { type: 'guideline', citation: 'Nelson RW, Couto CG. "Small Animal Internal Medicine." 6th ed. Elsevier, 2020.', relevance: '小動物內科教科書' },
  ],
  is_current: true,
  created_at: now,
};

/** 內分泌檢驗判讀，L4 診斷型 */
const contentEndocrineTests: NodeContent = {
  id: 'CONTENT-IM-L4-001',
  node_id: 'IM-L4-001',
  version: 2,
  summary: '內分泌檢驗判讀涵蓋甲狀腺功能、腎上腺功能和胰島素相關檢測的正確操作與結果解讀。動態功能試驗（LDDST、ACTH stimulation test）基於負回饋原理，需在正確條件下執行才能獲得有意義的結果。',
  learning_objectives: [
    '正確執行並判讀 LDDST 和 ACTH stimulation test',
    '整合 Total T4、Free T4、TSH 和 TgAA 診斷犬甲低',
    '運用 UCCR 和 LDDST 進行 Cushing 篩檢與鑑別',
    '正確判讀 Fructosamine 和血糖曲線評估糖尿病控制',
    '辨識干擾內分泌檢驗結果的常見因素（藥物、非甲狀腺疾病、壓力）',
  ],
  key_points: [
    'LDDST 操作：基礎 cortisol → Dexamethasone 0.01 mg/kg IV → 4h 和 8h cortisol。8h cortisol > 1.4 μg/dL = 陽性',
    'ACTH stimulation test：基礎 cortisol → Cosyntropin 5 μg/kg IV → 1h cortisol。Post < 2 μg/dL = Addison 確診',
    'Trilostane 監測：ACTH stim 在給藥後 4-6 小時。目標 post-ACTH 1.45-5.4 μg/dL',
    '犬甲低判讀：T4↓ + TSH↑ = 典型；T4↓ + TSH 正常 = 需 fT4ED 鑑別 ESS',
    'Fructosamine 反映 2-3 週平均血糖：犬 < 400 μmol/L 良好控制、貓 < 450 μmol/L',
    '干擾因素：Phenobarbital/糖皮質素壓抑 T4；壓力升高 cortisol；貓壓力性高血糖可達 300-400 mg/dL',
  ],
  body: `# 內分泌檢驗判讀

## 一、檢查原理與適應症 (Principles & Indications)

內分泌動態功能試驗（LDDST、ACTH stim）基於負回饋原理，必須在正確指徵、正確時機、排除干擾下執行才有意義。檢測相關風險與監測時程：

| 檢測相關風險 | 監測 | 處理 |
|-------------|------|------|
| Trilostane 過度抑制 (Post <1.45) | ACTH stim q10-14d 起始 | 減量或暫停 |
| LDDST 壓力偽陽性 | 確認無急性疾病/壓力 | 擇期重測 |
| Insulin 低血糖 (BGC <60) | BGC nadir | 減量胰島素 |
| ESS 誤診為甲低 | 治療原發病後複測 | 避免不必要 L-T4 |

監測時程：Trilostane ACTH stim 開始後 10-14d→30d→q3月。Post-pill T4 在 [藥物:Levothyroxine] 開始後 4-6 週。BGC 在胰島素調整後 5-7 天。

## 二、判讀要點 (Interpretation)

### 腎上腺功能檢測

LDDST（Low-Dose Dexamethasone Suppression Test）
- 適應症：Cushing 篩檢（敏感度 95-100%）
- 操作：基礎 cortisol → Dexamethasone 0.01 mg/kg IV → 4h cortisol → 8h cortisol
- 判讀：8h cortisol > 1.4 ug/dL = 無法抑制 = 陽性
- 附加鑑別：4h 或 8h cortisol < 50% baseline 或 < 1.4 → 提示 PDH

ACTH Stimulation Test
- 適應症：Addison 確診、[藥物:Trilostane] 治療監測
- 操作：基礎 cortisol → Cosyntropin 5 ug/kg IV → 1h post cortisol
- Addison 確診：Pre 和 Post cortisol 均 < 2 ug/dL
- Trilostane 監測：給藥後 4-6 小時執行。Post 1.45-5.4 ug/dL = 適當控制
- 注意：[藥物:Dexamethasone] 不干擾 cortisol 測量；[藥物:Prednisolone] 會干擾

UCCR（Urine Cortisol:Creatinine Ratio）
- 適應症：Cushing 排除用（NPV 極高）
- 居家晨尿，正常 < 10 x 10^-6

Endogenous ACTH：PDH > 40 pg/mL；ADH < 10 pg/mL。EDTA 管立即冰浴送檢。

### 甲狀腺功能檢測

| 臨床情境 | T4 | TSH | fT4ED | 診斷 |
|---------|-----|------|-------|------|
| 典型甲低 | 明顯降低 | 升高 | 降低 | 原發性甲低 |
| ESS | 降低 | 正常 | 正常 | 非甲狀腺疾病 |
| 早期甲低 | 低正常 | 升高 | 正常或降低 | 亞臨床甲低 |
| 藥物干擾 | 降低 | 正常 | 通常正常 | 停藥後再測 |

干擾因素：Glucocorticoids、[藥物:Phenobarbital]、NSAIDs、Sulfonamides；任何非甲狀腺疾病 (ESS)

### 血糖與胰島素評估

| 指標 | 良好控制 | 控制不佳 | 備註 |
|------|---------|---------|------|
| Fructosamine 犬 | < 400 umol/L | > 500 | 反映 2-3 週平均血糖 |
| Fructosamine 貓 | < 450 umol/L | > 550 | 排除壓力性高血糖 |
| BGC nadir | 100-150 mg/dL | <80 或 >300 | 每 2h x 12h |

## 三、常見陷阱 (Pitfalls)

- **在生病/壓力下篩檢內分泌**：急性非甲狀腺疾病使 T4 偽低（ESS，最常見的甲低誤診原因）、壓力使 cortisol 非特異升高（LDDST 偽陽性）——有臨床指徵、病情穩定再驗。
- **Trilostane ACTH stim 時機錯誤**：必須在給藥後 4-6 小時（藥效巔峰）執行；飼主未正確回報給藥時間會直接毀掉判讀。
- **急診用 Prednisolone 後做 ACTH stim**：[藥物:Prednisolone] 會交叉反應使 cortisol 偽高；需用類固醇時改 [藥物:Dexamethasone]（不干擾 cortisol 測定）。
- **只憑 T4 低就診斷甲低**：未排除 ESS、[藥物:Phenobarbital]/糖皮質素/NSAID/磺胺等藥物干擾，會過度診斷、給不必要的 L-T4。
- **內源性 ACTH 樣本處理不當**：須 EDTA 管、立即冰浴、快速分離血漿並冷凍送檢，否則 ACTH 降解、PDH/ADH 鑑別失準。
- **貓壓力性高血糖誤判糖尿病**：壓力可使貓血糖達 300-400 mg/dL；以 Fructosamine（反映 2-3 週均值）鑑別。

## 四、人醫借鑒 (Translational Insights)

- 人醫 midnight salivary cortisol 為 Cushing 篩檢常規，獸醫無對應（犬貓唾液取樣困難）
- 人醫 TSH 為甲狀腺篩檢首選（人醫 TSH assay 高度可靠）；獸醫犬 TSH 敏感度僅 ~75%
- 人醫 HbA1c 反映 2-3 月血糖控制；獸醫 Fructosamine 僅反映 2-3 週，需更頻繁監測
- 人醫 CGM (continuous glucose monitoring) 已普及；獸醫 FreeStyle Libre 開始應用

## 五、臨床爭議與知識空缺 (Controversies & Knowledge Gaps)

| 爭議主題 | 目前立場 | 證據等級 | 研究方向 |
|---------|---------|---------|---------|
| Pre-Trilostane cortisol vs ACTH stim | ACTH stim 為標準，pre-pill cortisol 可能有用 | Level III | 兩者的頭對頭比較 |
| 犬 TSH assay 改良 | 現有 assay 敏感度不足 | Level II | 新一代犬 TSH assay |
| CGM 在獸醫的準確度 | 初步可靠但需驗證 | Level III | 犬貓特異性校正研究 |
| 亞臨床甲低的治療 | 有爭議 | Level IV | 前瞻性比較研究 |

## 六、近期實證更新 (Recent Evidence)

[圖片:內分泌動態試驗判讀軸——先有臨床指徵 → 排除干擾（藥物/ESS/壓力）→ 選對試驗與時機 → 數字結合臨床]

- **Trilostane 監測：從「只看 ACTH stim」走向「臨床症狀＋基礎 cortisol」**：ACTH stim 結果與臨床控制的相關性並不完美（Wehner 2021），越來越多方案以臨床症狀＋pre-trilostane（基礎）cortisol 監測；同時須警覺**醫源性低皮質醇症**（Appleman 2021 顯示並不少見）——post-ACTH 或基礎 cortisol 過低即應減量/暫停，防 Addisonian crisis。
- **Cushing 診斷時效**：2012 ACVIM 共識（Behrend 2013）仍為現行；鐵則是**先有臨床症狀再驗**——LDDST 敏感度高（95-100%）但特異度僅 44-73%，對無症狀犬篩檢易偽陽性（壓力/非腎上腺疾病）。
- **連續/瞬感血糖監測（CGM/FGM）改變糖尿病監測**：FreeStyle Libre 等在犬貓糖尿病提供血糖趨勢、偵測餐後與夜間波動、減少醫院壓力性高血糖假象、降低住院 BGC 需求（Shea 2021）；惟**低血糖區間準確度較差**、疑似低血糖仍需血糖機確認。
- **犬甲低診斷靠組合判讀**：犬 TSH assay 敏感度僅 ~75%，不能單靠 TSH；以 T4＋fT4（平衡透析）＋TSH（±TgAA）組合判讀，並先排除**非甲狀腺疾病（ESS）與藥物干擾**（最常見的 T4 偽低原因）。

> 臨床內容與藥物劑量需獸醫師依現行仿單與指引核對；本節點為 AI 接地生成，停於 review 狀態待 DVM 簽核。`,
  clinical_pearl: 'ACTH stimulation test 的時機在 Trilostane 監測中很重要。必須在 Trilostane 給藥後 4-6 小時的效果巔峰期執行，太早或太晚都會得到錯誤結果。如果 post-ACTH cortisol < 1.45 μg/dL（過度抑制），即使臨床上看起來還好，也需要減量或暫停 Trilostane，因為有 Addisonian crisis 的風險。另一個關鍵：如果急診需要在 ACTH stim test 前給類固醇，選擇 Dexamethasone（不干擾 cortisol assay），避免 Prednisolone（會交叉反應導致 cortisol 測量偽高）。',
  common_mistakes: [
    'Trilostane 監測時在錯誤時間點做 ACTH stim（必須是給藥後 4-6 小時）',
    '急診使用 Prednisolone 後做 ACTH stim test（Prednisolone 干擾 cortisol 測量，應使用 Dexamethasone）',
    '內源性 ACTH 樣本處理不當（必須 EDTA 管、立即冰浴、快速分離血漿並冷凍送檢）',
    '僅憑 T4 低就診斷甲低，未排除 ESS 和藥物干擾',
    '在生病或壓力狀態下篩檢甲狀腺或腎上腺功能（結果不可靠）',
  ],
  disease_data: null,
  diagnostic_data: {
    indication: ['Cushing 篩檢與鑑別', 'Addison 確診', 'Trilostane 治療監測', '甲狀腺功能評估', '糖尿病控制評估', '內分泌異常鑑別診斷'],
    contraindication: ['急性非甲狀腺疾病時不建議篩檢甲狀腺功能（ESS 導致偽低）', '使用 Prednisolone 時不應做 ACTH stim（改用 Dexamethasone）'],
    technique: 'LDDST：靜脈留置針，基礎採血 → Dexamethasone 0.01 mg/kg IV → 4h 和 8h 採血。ACTH stim：基礎採血 → Cosyntropin 5 μg/kg IV → 1h 採血。甲狀腺 panel：空腹採血（T4 + fT4ED + TSH ± TgAA）。Post-pill T4：Levothyroxine 給藥後 4-6 小時採血。',
    normal_findings: [
      { finding: '基礎 Cortisol', description: '犬 1-5 μg/dL', significance: '< 2 μg/dL 時 Addison 可能性高；排除 Cushing' },
      { finding: 'Post-ACTH Cortisol', description: '犬 6-17 μg/dL', significance: '正常腎上腺刺激反應' },
      { finding: 'Total T4', description: '犬 1.0-4.0 μg/dL，貓 1.0-4.0 μg/dL', significance: '甲狀腺功能正常範圍' },
      { finding: 'TSH', description: '犬 0.05-0.42 ng/mL', significance: '正常腦下垂體反應' },
    ],
    abnormal_findings: [
      { finding: 'LDDST 8h cortisol > 1.4', description: '無法被低劑量 Dexamethasone 抑制', significance: '高度提示 Cushing' },
      { finding: 'Post-ACTH cortisol < 2', description: 'Pre 和 Post 均 < 2 μg/dL', significance: '確診 Addison' },
      { finding: 'T4↓ + TSH↑', description: 'Total T4 低於正常 + TSH 高於正常', significance: '典型原發性甲低' },
      { finding: 'T4 > 4.0（貓）', description: '高於正常上限', significance: '確診甲亢' },
    ],
    interpretation_guide: '先想清楚臨床上到底在懷疑什麼，再選對應的試驗。送檢前要排除干擾因素：有沒有吃藥、有沒有正在生別的病、有沒有壓力反應。執行跟採樣要按 SOP 走。最後判讀的時候，數字一定要跟臨床表現一起看，不能單看一個數字下結論。',
    pitfalls: [
      '壓力狀態下 cortisol 可能非特異性升高（LDDST 偽陽性）',
      'ESS 使 T4 偽低（最常見的甲低誤診原因）',
      '貓壓力性高血糖可達 300-400 mg/dL（Fructosamine 可鑑別）',
      '飼主未正確報告 Trilostane 給藥時間導致監測時機錯誤',
    ],
    sensitivity_specificity: 'LDDST 敏感度 95-100%，特異度 44-73%。ACTH stim 敏感度 61-85%，特異度 59-93%。T4+TSH 組合對原發性甲低敏感度約 87%，特異度約 82%。',
    cost_benefit: '動態功能試驗價錢中等，但診斷價值不低。臨床真的有懷疑才做，沒症狀不要無聊去篩檢。',
  },
  procedure_data: null,
  visual_placeholders: [
    { position: 'LDDST 段落後', type: 'flowchart', description: 'LDDST 結果判讀與後續決策流程圖' },
    { position: '甲狀腺檢測段落後', type: 'flowchart', description: '甲狀腺功能檢測判讀決策樹' },
  ],
  interactive_placeholders: [
    { position: '檢驗判讀段落', type: 'interactive_staging', description: '輸入內分泌檢驗數值自動判讀工具' },
  ],
  drug_api_links: ['Dexamethasone', 'Cosyntropin', 'Trilostane', 'Levothyroxine', 'Methimazole'],
  references: [
    { type: 'guideline', citation: 'Behrend EN, Kooistra HS, et al. "Diagnosis of Spontaneous Canine Hyperadrenocorticism: 2012 ACVIM Consensus Statement (Small Animal)." J Vet Intern Med. 2013;27(6):1292-1304. doi:10.1111/jvim.12192', relevance: 'Cushing 診斷現行 ACVIM 共識' },
    { type: 'textbook', citation: 'Feldman EC, Nelson RW, Reusch C, Scott-Moncrieff JC. Canine and Feline Endocrinology, 4th ed. Elsevier, 2015.', relevance: '內分泌檢驗完整參考教材' },
    { type: 'guideline', citation: 'Behrend E, Holford A, et al. "2018 AAHA Diabetes Management Guidelines for Dogs and Cats." J Am Anim Hosp Assoc. 2018;54(1):1-21. doi:10.5326/JAAHA-MS-6822', relevance: '糖尿病管理與監測現行指引' },
    { type: 'journal', citation: 'Wehner A, Glöckner S, Weiss B, Ballhausen D. "Association between ACTH stimulation test results and clinical signs in dogs with hyperadrenocorticism treated with trilostane." Vet J. 2021;276:105740. doi:10.1016/j.tvjl.2021.105740', relevance: 'Trilostane 監測：ACTH stim 與臨床控制相關性不完美' },
    { type: 'journal', citation: 'Appleman E, Schrage A, Lamb KE, Langston C. "Evaluation of Iatrogenic Hypocortisolemia Following Trilostane Therapy in 48 Dogs with Pituitary-Dependent Hyperadrenocorticism." J Am Anim Hosp Assoc. 2021;57(5):217-224. doi:10.5326/jaaha-ms-7076', relevance: 'Trilostane 醫源性低皮質醇症風險' },
    { type: 'journal', citation: 'Shea EK, Hess RS. "Assessment of postprandial hyperglycemia and circadian fluctuation of glucose concentrations in diabetic dogs using a flash glucose monitoring system." J Vet Intern Med. 2021;35(2):843-852. doi:10.1111/jvim.16046', relevance: '瞬感血糖監測偵測餐後/晝夜血糖波動（取代 v1 一條 garbled 影像引用）' },
  ],
  is_current: true,
  created_at: now,
};

/** 腹腔超音波，L4 診斷型 */
const contentAbdoUS: NodeContent = {
  id: 'CONTENT-IM-L4-003',
  node_id: 'IM-L4-003',
  version: 1,
  summary: '腹腔超音波是小動物內科最重要的非侵入性影像診斷工具，可評估所有腹腔臟器的大小、結構、回聲性質和血流。在內科領域尤其重要的是腎臟（CKD 分期輔助）、肝膽系統、胰臟、腸道和腎上腺的評估。操作者依賴性高，需要系統性掃描方法。',
  learning_objectives: [
    '描述腹腔超音波的系統性掃描順序與各臟器正常影像特徵',
    '判讀腎臟超音波異常（大小、結構、腎盂積水、腎結石）',
    '評估肝膽系統異常（肝臟回聲、膽囊、膽道擴張）',
    '判讀腸道超音波異常（壁厚度、分層結構、淋巴結）',
    '評估腎上腺大小以鑑別 Cushing 類型（PDH vs ADH）',
  ],
  key_points: [
    '系統性掃描順序：肝膽 → 脾臟 → 左腎 → 左腎上腺 → 胃 → 胰臟 → 十二指腸 → 空腸 → 右腎 → 右腎上腺 → 膀胱 → 前列腺/子宮',
    '腎臟正常大小：犬 3.5-4.5 cm（與 L2 等長）、貓 3.0-4.3 cm。CKD 時通常縮小、回聲增高、皮髓質界線不清',
    '腸道壁厚度正常值：犬十二指腸 < 5-6 mm、空腸 < 4-5 mm；貓十二指腸 < 2.8 mm、空腸 < 2.5 mm',
    '腸壁正常五層結構：黏膜（低回聲）→ 黏膜下層（高回聲）→ 肌層（低回聲）→ 漿膜下層（高回聲）→ 漿膜',
    '腎上腺正常寬度：犬 < 7.4 mm（大型犬可稍大）。PDH = 雙側對稱增大；ADH = 單側腫塊 + 對側萎縮',
    '胰臟炎超音波：犬敏感度約 68%、貓僅 35-67%。胰臟周圍高回聲脂肪（saponification）、胰臟腫脹/低回聲',
    '腹腔淋巴結：正常不易見或小且紡錘形；腫大/圓形提示淋巴瘤、轉移或反應性增生',
  ],
  body: `# 腹腔超音波

## 一、檢查原理與適應症 (Principles & Indications)



### 系統性掃描方法
標準順序：肝膽→脾臟→左腎/左腎上腺→胃/胰臟→十二指腸→空腸→右腎/右腎上腺→膀胱→前列腺/子宮→腹腔淋巴結

### 各臟器正常與異常影像特徵

腎臟評估

| 特徵 | 正常 | CKD | AKI |
|------|------|-----|-----|
| 大小 | 犬 3.5-4.5 cm / 貓 3.0-4.3 cm | 縮小（雙側） | 正常或腫大 |
| 回聲 | 皮質 <= 肝/脾 | 皮質回聲增高 | 皮質回聲增高 |
| 皮髓界線 | 清晰 | 模糊 | 可能模糊 |
| 腎盂 | 不擴張 | 可能正常 | 可能擴張（腎盂腎炎） |

腸道評估

| 部位 | 犬正常壁厚 | 貓正常壁厚 |
|------|-----------|-----------|
| 十二指腸 | < 5-6 mm | < 2.8 mm |
| 空腸 | < 4-5 mm | < 2.5 mm |
| 迴腸 | < 4-5 mm | < 3.2 mm |
| 結腸 | < 3 mm | < 2.5 mm |

異常模式：均勻增厚+分層保留 = CE/IBD；局灶增厚+分層消失 = 腫瘤；黏膜下層高迴音條紋 = 淋巴管擴張（PLE）

腎上腺評估

| 特徵 | 正常 | PDH | ADH |
|------|------|-----|-----|
| 大小 | < 7.4 mm 寬 | 雙側 > 7.4 mm | 單側腫塊 |
| 形態 | 扁平/花生形 | 圓潤增大 | 不規則腫塊 |
| 對側 | 對稱 | 對稱 | 萎縮 |

胰臟炎超音波：胰臟腫脹低回聲 + 周圍脂肪高回聲 (saponification) + 腹腔游離液。犬敏感度 ~68%，貓 35-67%。

| 監測指標 | 頻率 | 適用情境 |
|---------|------|---------|
| 腎臟大小與回聲 | q3-6 月 | CKD 追蹤 |
| 腸壁厚度 | q3-6 月 | CE 治療反應評估 |
| 腎上腺大小 | q3-6 月 | Cushing 治療監測 |
| 腹腔淋巴結 | 依臨床需要 | 淋巴瘤分期/CE |
| 腹腔積液 | 即時 | PLE/肝病/心衰 |

操作者依賴性：胰臟和腎上腺評估需要大量訓練。正常胰臟可能不易辨識（不代表排除胰臟疾病）。

## 二、判讀要點 (Interpretation)

## 三、常見陷阱 (Pitfalls)

## 四、人醫借鑒 (Translational Insights)

- 人醫 contrast-enhanced ultrasound (CEUS) 評估組織灌流和腫瘤特徵，獸醫應用增加中
- 人醫 shear-wave elastography 評估肝臟纖維化（取代部分肝臟切片），獸醫初步研究中
- 人醫 point-of-care ultrasound (POCUS) 在急診的 FAST protocol 已被獸醫廣泛採用（AFAST/TFAST）
- 人醫 AI-assisted ultrasound interpretation 輔助品質控制，獸醫尚在起步

## 五、臨床爭議與知識空缺 (Controversies & Knowledge Gaps)

| 爭議主題 | 目前立場 | 證據等級 | 研究方向 |
|---------|---------|---------|---------|
| 超音波 vs CT 在胰臟炎 | CT 敏感度可能更高 | Level III | 頭對頭比較研究 |
| 腸壁分層消失 = 腫瘤？ | 高度提示但需切片確認 | Level II | 更好的超音波腫瘤標準 |
| 腎上腺大小 cutoff 標準化 | 7.4 mm 為常用但品種影響 | Level II | 品種特異性正常值 |
| CEUS 在獸醫的角色 | 有潛力但尚未普及 | Level III | 臨床適應症與成本效益 |`,
  clinical_pearl: '腸道超音波中最容易被忽略但臨床意義重大的發現是「黏膜下層高回聲條紋（mucosal striations）」。這些條紋代表擴張的淋巴管中脂肪/蛋白質滲漏，高度提示淋巴管擴張和 PLE。當在超音波上看到腸壁增厚合併黏膜下層條紋時，即使尚未做組織切片，就應該測量血清 Albumin 並考慮 PLE 的可能性。這個發現可以加速診斷流程。',
  common_mistakes: [
    '腹腔超音波未系統性掃描，漏掉腎上腺或腸繫膜淋巴結等容易忽略的結構',
    '胰臟超音波正常就排除胰臟炎（敏感度有限，尤其在貓）',
    '腎臟皮質回聲增高就斷定 CKD，需結合腎臟大小、血檢和尿液分析',
    '未測量腸壁厚度就主觀判斷「增厚」，應使用標準化測量值',
    '忽略腹腔淋巴結評估（對淋巴瘤分期和 CE 鑑別非常重要）',
  ],
  disease_data: null,
  diagnostic_data: {
    indication: ['腹痛/急腹症評估', 'CKD/AKI 腎臟結構評估', '嘔吐/腹瀉原因鑑別', 'Cushing PDH vs ADH 鑑別', '肝臟疾病評估', '腹腔腫瘤篩檢', '腹水原因評估', '泌尿道結石/阻塞評估'],
    contraindication: ['無絕對禁忌症。嚴重皮膚傷口上方需避開。腹部大量氣體可能影響影像品質'],
    technique: '動物側臥或仰臥（V-trough）。剃毛腹部。使用 7.5-12 MHz microconvex 或 linear 探頭（大型犬可用 5 MHz）。充分耦合膠。系統性掃描各臟器。記錄測量值和異常影像。',
    normal_findings: [
      { finding: '肝臟', description: '均勻中等回聲，肝靜脈可見，肝緣銳利', significance: '正常肝臟結構' },
      { finding: '腎臟', description: '光滑被膜，清楚皮髓質界線，腎皮質回聲 ≤ 肝/脾', significance: '正常腎臟結構' },
      { finding: '腸壁', description: '五層結構清晰可見，厚度在正常範圍內', significance: '正常腸道結構' },
      { finding: '腎上腺', description: '寬度 < 7.4 mm，扁平或花生形', significance: '正常腎上腺大小' },
    ],
    abnormal_findings: [
      { finding: '腎臟縮小+回聲增高', description: '雙側腎臟縮小，皮質回聲>肝/脾，皮髓界線模糊', significance: '慢性腎病典型影像' },
      { finding: '腸壁增厚+分層保留', description: '壁厚超過正常值但五層結構保留', significance: '提示 CE/IBD' },
      { finding: '腸壁增厚+分層消失', description: '局灶性壁增厚伴分層結構消失', significance: '高度懷疑腫瘤' },
      { finding: '腎上腺單側腫塊', description: '單側腎上腺腫塊，對側萎縮', significance: '腎上腺腫瘤型 Cushing（ADH）' },
    ],
    interpretation_guide: '臟器一個個過、量值記下來、比對正常範圍，然後跟臨床表現和血檢一起看。覺得有問題的就接 FNA 或組織切片再追下去。',
    pitfalls: [
      '腸道氣體干擾影像品質（禁食 12 小時可改善但非必需）',
      '操作者經驗差異大，胰臟和腎上腺的辨識需要大量訓練',
      '肥胖動物影像品質下降（使用較低頻率探頭）',
      '正常胰臟可能不易辨識（不代表排除胰臟疾病）',
    ],
    sensitivity_specificity: '腎臟結構異常敏感度高（> 90%）。腸壁評估對 CE 敏感度約 70-80%。胰臟炎敏感度犬 68%、貓 35-67%。腎上腺大小對 Cushing 分型敏感度約 80-90%。',
    cost_benefit: '成本不算貴，非侵入性、當場就有結果。在腹腔疾病評估這塊，CP 值最高的影像工具。但品質好不好，技術那關過不過得了才是重點。',
  },
  procedure_data: null,
  visual_placeholders: [
    { position: '腎臟評估段落後', type: 'annotated_image', description: '正常 vs CKD 腎臟超音波影像標注比較' },
    { position: '腸道評估段落後', type: 'annotated_image', description: '腸壁五層結構與異常增厚影像標注' },
  ],
  interactive_placeholders: [],
  drug_api_links: [],
  references: [
    { type: 'textbook', citation: 'Penninck D, d\'Anjou MA. Atlas of Small Animal Ultrasonography, 2nd ed. Wiley-Blackwell, 2015.', relevance: '小動物超音波影像圖譜' },
    { type: 'textbook', citation: 'Mattoon JS, Nyland TG. Small Animal Diagnostic Ultrasound, 3rd ed. Elsevier, 2015.', relevance: '小動物超音波診斷教科書' },
    { type: 'journal', citation: 'Gaschen L. "Ultrasonography of small intestinal inflammatory and neoplastic diseases in dogs and cats." Vet Clin North Am Small Anim Pract. 2011;41(2):329-344. doi:10.1016/j.cvsm.2011.01.002', relevance: '腸道超音波判讀回顧' },
    { type: 'guideline', citation: 'Nelson RW, Couto CG. "Small Animal Internal Medicine." 6th ed. Elsevier, 2020.', relevance: '小動物內科教科書' },
  ],
  is_current: true,
  created_at: now,
};

/** 消化系統影像與內視鏡，L4 診斷型 */
const contentGIEndoscopy: NodeContent = {
  id: 'CONTENT-IM-L4-004',
  node_id: 'IM-L4-004',
  version: 1,
  summary: '消化系統影像與內視鏡是慢性腸病（CE/IBD）、消化道腫瘤和胃腸道異物的重要診斷工具。上下消化道內視鏡可直接觀察黏膜並取得多部位切片進行組織病理學確診。WSAVA 標準化評分系統提供組織學分級的一致性。',
  learning_objectives: [
    '說明上下消化道內視鏡的適應症、禁忌症與操作要點',
    '描述正常與異常消化道黏膜的內視鏡外觀',
    '運用 WSAVA 標準化組織學分級評估腸道發炎',
    '區分消化道 X 光和超音波各自的優勢與限制',
    '說明組織切片品質要求與常見的取樣偏差問題',
  ],
  key_points: [
    '內視鏡適應症：慢性嘔吐/腹瀉（飲食和抗生素試驗無效後）、胃腸道異物、不明原因體重減輕、消化道出血',
    '上消化道內視鏡可達食道、胃、十二指腸；下消化道可達結腸、迴腸（逆行性迴腸鏡）',
    '切片品質要求：每部位 6-8 個高品質切片（含黏膜全層到黏膜肌層），品質不足是最常見的診斷限制',
    'WSAVA 組織學分級：標準化腸道發炎評估（正常/輕度/中度/重度），但組織學與臨床嚴重度相關性有限',
    '內視鏡 vs 全層外科切片：內視鏡切片僅含黏膜層，淋巴管擴張和肌層/漿膜病變需全層外科切片',
    '腹部 X 光優勢：異物偵測、腸道氣體分布（阻塞模式）、自由氣體（穿孔）',
    '貓 IBD vs 小細胞淋巴瘤：組織學可極度相似，需免疫組織化學（CD3/CD20）和 clonality analysis（PARR）鑑別',
  ],
  body: `# 消化系統影像與內視鏡

## 一、檢查原理與適應症 (Principles & Indications)



### 消化道影像診斷

腹部 X 光
- 優勢：異物偵測（金屬、骨頭）、腸道氣體分布評估、腹腔自由氣體（穿孔）
- 腸阻塞影像：近端腸管擴張（> 1.6 倍 L5 椎體寬度/犬）、氣液面
- 限制：軟組織對比度低

對比劑攝影：Barium series 評估通過時間和黏膜表面。穿孔疑慮時禁用 Barium（改用水溶性 Iohexol）

### 消化道內視鏡

上消化道內視鏡 (EGD)：食道→胃（賁門、胃體、幽門）→十二指腸
下消化道內視鏡（結腸鏡）：直腸→降結腸→橫結腸→升結腸→盲腸→迴腸（逆行性）

異常黏膜外觀

| 外觀 | 意義 |
|------|------|
| 顆粒狀/不規則 | CE/IBD |
| 糜爛/潰瘍 | 嚴重發炎、NSAID 損傷、腫瘤 |
| 腫塊/結節 | 腫瘤（淋巴瘤、腺癌、平滑肌瘤） |
| 白色斑點（白斑） | 淋巴管擴張 (lymphangiectasia) |
| 正常外觀但組織學異常 | CE 常見，外觀正常不排除疾病 |

### 組織切片要點
- 每部位至少 6-8 個切片（減少取樣偏差）
- 切片需含黏膜全層（至黏膜肌層）
- WSAVA 標準化組織學分級：正常→輕度→中度→重度

### 內視鏡 vs 全層外科切片

| 特徵 | 內視鏡切片 | 全層外科切片 |
|------|-----------|-------------|
| 侵入性 | 較低 | 較高（開腹） |
| 取得深度 | 僅黏膜層 | 全層 |
| 淋巴管擴張 | 敏感度 60-70% | > 90% |
| 適應症 | CE 首選 | PLE 或懷疑淋巴瘤 |

### 貓 IBD vs 小細胞淋巴瘤鑑別
兩者組織學極相似→需免疫組織化學（CD3/CD20）+ Clonality analysis（PARR）。多克隆=IBD；單克隆=淋巴瘤。

| 風險 | 機轉 | 預防/處理 |
|------|------|---------|
| 穿孔（充氣相關） | 過度充氣/病變組織脆弱 | 控制充氣量、避免疑似穿孔時內視鏡 |
| 出血（切片相關） | 凝血異常/深層切片 | 術前 PT/aPTT、淺切技術 |
| PLE 犬術後癒合不良 | 低白蛋白→傷口癒合差 | 全層切片前白蛋白評估 |
| 麻醉風險 | 衰弱動物 | 穩定後再排程 |

追蹤監測：組織學結果出來後→調整治療→3-6 月後評估臨床反應→考慮是否需重複內視鏡（罕需）

## 二、判讀要點 (Interpretation)

## 三、常見陷阱 (Pitfalls)

## 四、人醫借鑒 (Translational Insights)

- 人醫 capsule endoscopy 可評估全段小腸，獸醫犬用膠囊內視鏡有限度報告但尚未普及
- 人醫 confocal laser endomicroscopy 可在內視鏡時即時組織學評估，獸醫未應用
- 人醫 narrow-band imaging (NBI) 增強黏膜微血管可視化，獸醫設備限制
- 人醫 endoscopic ultrasound (EUS) 評估壁層結構和周圍組織，獸醫少數轉診中心可用

## 五、臨床爭議與知識空缺 (Controversies & Knowledge Gaps)

| 爭議主題 | 目前立場 | 證據等級 | 研究方向 |
|---------|---------|---------|---------|
| 內視鏡切片是否足夠診斷 PLE | 敏感度有限，全層更佳 | Level II | 內視鏡技術改進？ |
| WSAVA 分級的臨床相關性 | 與臨床嚴重度相關有限 | Level II | 更好的組織學預後標記 |
| PARR 對淋巴瘤的敏感度 | ~70-80%，假陰性存在 | Level II | 更敏感的分子檢測 |
| 飲食試驗前是否需先做內視鏡 | 飲食試驗優先，除非嚴重 | Level II | 最佳診斷順序研究 |`,
  clinical_pearl: '內視鏡檢查中最容易被忽略的結構是迴腸。許多 CE 的病變以迴腸為主（尤其淋巴管擴張和小細胞淋巴瘤），如果只做上消化道內視鏡（到十二指腸），可能完全錯過迴腸的病變。理想的 CE 評估應包括上消化道（食道-胃-十二指腸）和下消化道（結腸-迴腸）內視鏡。另外，內視鏡外觀正常不能排除疾病，大約 30% 的 CE 犬貓在內視鏡下黏膜外觀正常但組織學有明顯異常。切片是必須的。',
  common_mistakes: [
    '切片數量不足（每部位需 6-8 個高品質切片以減少取樣偏差）',
    '僅做上消化道內視鏡而未做迴腸鏡（迴腸病變可能被遺漏）',
    '內視鏡外觀正常就不做切片（30% CE 外觀正常但組織學異常）',
    '貓腸道淋巴球浸潤沒再做免疫組織化學和 clonality 分析（小細胞淋巴瘤很容易漏掉）',
    '全層外科切片在低白蛋白 PLE 犬中未注意傷口癒合風險',
  ],
  disease_data: null,
  diagnostic_data: {
    indication: ['慢性嘔吐/腹瀉（飲食和抗生素試驗無效）', '不明原因體重減輕', '消化道異物取出', '消化道出血病因調查', '疑似腸道腫瘤', 'PLE 病因確診'],
    contraindication: ['嚴重凝血障礙（PT/aPTT 延長需先矯正）', '疑似消化道穿孔（禁止充氣）', '嚴重心肺不穩（麻醉風險）', '低白蛋白犬的全層外科切片需謹慎（傷口癒合風險）'],
    technique: '全身麻醉。上消化道內視鏡：左側臥，經口插入軟式內視鏡。系統性檢查食道、胃各區域、幽門、十二指腸。下消化道內視鏡：預先灌腸清腸。經肛門插入。每部位 6-8 個切片，使用活檢鉗取黏膜全層切片。切片立即固定於 10% 福馬林。',
    normal_findings: [
      { finding: '食道黏膜', description: '光滑蒼白，犬可見環形皺褶', significance: '正常食道黏膜' },
      { finding: '胃黏膜', description: '粉紅、光滑皺褶，胃底腺區域較厚', significance: '正常胃黏膜' },
      { finding: '十二指腸黏膜', description: '粉紅色、細緻絨毛可見', significance: '正常十二指腸' },
      { finding: '結腸黏膜', description: '光滑、粉紅、血管紋路可見', significance: '正常結腸黏膜' },
    ],
    abnormal_findings: [
      { finding: '黏膜顆粒狀/不規則', description: '黏膜表面粗糙、不規則', significance: '提示 CE/IBD' },
      { finding: '白色斑點/白斑', description: '黏膜上散在白色斑點', significance: '提示淋巴管擴張（PLE）' },
      { finding: '腫塊/結節', description: '黏膜隆起性病灶', significance: '疑似腫瘤（需切片確診）' },
      { finding: '糜爛/潰瘍', description: '黏膜缺損/出血', significance: '嚴重發炎、NSAID 損傷或腫瘤' },
    ],
    interpretation_guide: '黏膜各個部位都要系統性看一遍，看到異常一定要拍照記錄。切片不能省，每個部位至少 6-8 個。送出去的時候，貓的記得加做免疫組織化學排除淋巴瘤。組織學評分走 WSAVA 標準。判讀的時候，臨床、血檢、影像通通要疊在一起看，光看切片下結論會出事。',
    pitfalls: [
      '切片壓碎（crush artifact）影響組織學判讀',
      '迴腸-結腸瓣進入困難（逆行性迴腸鏡需要經驗）',
      '組織學正常不能 100% 排除疾病（取樣偏差）',
      'WSAVA 分級的觀察者間一致性僅中等',
    ],
    sensitivity_specificity: '內視鏡切片對 CE 的組織學診斷敏感度約 80-90%（含迴腸時更高）。對淋巴管擴張敏感度較全層切片低（約 60-70% vs > 90%）。貓 IBD vs 小細胞淋巴瘤需 PARR 鑑別（敏感度約 70-80%）。',
    cost_benefit: '成本不便宜，全身麻醉跟專業設備都要，但確診 CE 沒有它就不行，黃金標準。要做 PLE 或淋巴管擴張，全層外科切片更敏感，雖然侵入性更高。',
  },
  procedure_data: null,
  visual_placeholders: [
    { position: '異常黏膜外觀表後', type: 'annotated_image', description: '正常 vs 異常腸道黏膜內視鏡影像標注' },
    { position: '內視鏡 vs 全層外科切片表後', type: 'comparison_table', description: '內視鏡切片 vs 全層外科切片適應症比較表' },
  ],
  interactive_placeholders: [],
  drug_api_links: [],
  references: [
    { type: 'guideline', citation: 'Washabau RJ et al. "Endoscopic, Biopsy, and Histopathologic Guidelines for the Evaluation of Gastrointestinal Inflammation in Companion Animals." J Vet Intern Med. 2010;24(1):10-26.', relevance: 'WSAVA 消化道內視鏡與組織學指引' },
    { type: 'textbook', citation: 'Tams TR, Rawlings CA. Small Animal Endoscopy, 3rd ed. Elsevier, 2011.', relevance: '小動物內視鏡操作教科書' },
    { type: 'journal', citation: 'Kiupel M et al. "Proposal of a 2-tier histologic grading system for canine cutaneous mast cell tumors to more accurately predict biological behavior." Vet Pathol. 2011;48(1):147-155.', relevance: '腫瘤組織學分級標準化參考' },
  ],
  is_current: true,
  created_at: now,
};

/** 慢性腎病管理，L5 治療型 */
const contentCKDManagement: NodeContent = {
  id: 'CONTENT-IM-L5-001',
  node_id: 'IM-L5-001',
  version: 2,
  summary: 'CKD 管理就是照 IRIS 分期來走，每一期該做什麼都已經寫清楚。核心策略幾件事：飲食管理（限磷、蛋白適量）、抗蛋白尿（Benazepril 或 Telmisartan）、磷結合劑、處理貧血、症狀支持。早一點介入，存活時間真的差很多。',
  learning_objectives: [
    '依據 IRIS 分期制定各期 CKD 的治療策略',
    '選擇適當的抗蛋白尿藥物並說明其腎保護機轉',
    '制定磷控制方案（飲食限磷 + 磷結合劑）',
    '管理 CKD 相關貧血（Darbepoetin/ESA 的使用指引）',
    '設計 CKD 病患的長期監測計畫',
  ],
  key_points: [
    '飲食管理是 CKD 最有證據支持的介入措施，腎臟處方飲食可延長犬貓 CKD 存活 2-3 倍',
    '抗蛋白尿：UPC > 0.5（犬）/ > 0.4（貓）→ Benazepril 0.5-1.0 mg/kg PO SID 或 Telmisartan 1 mg/kg PO SID（貓首選）',
    '磷控制目標：Stage 1-2 < 4.5 mg/dL、Stage 3 < 5.0 mg/dL、Stage 4 < 6.0 mg/dL',
    '磷結合劑：Aluminum hydroxide 30-90 mg/kg/day 與食物混合給予、Lanthanum carbonate、Chitosan',
    '貧血管理：PCV < 20%（犬）/ < 18%（貓）→ Darbepoetin 1 μg/kg SC q1wk 起始，搭配鐵補充',
    '高血壓控制：Amlodipine（貓首選）0.125-0.25 mg/kg PO SID，目標 SBP < 160 mmHg',
    '鉀補充：低血鉀貓 → Potassium gluconate 2-6 mEq/day PO',
  ],
  body: `# 慢性腎病管理

## 一、治療原理 (Treatment Principles)



### IRIS 分期治療策略

Stage 1（非氮血症）
- 確認並治療可逆因子（腎盂腎炎、腎結石、泌尿道阻塞）
- UPC > 0.5/0.4 → 啟動抗蛋白尿治療
- 血壓 >= 160 mmHg → 降壓治療
- 確保充足飲水

Stage 2（輕度氮血症）
- 上述 + 腎臟處方飲食（限磷、適量優質蛋白、omega-3），Level I 證據
- 貓鼓勵濕食增加水分攝取
- 磷超標時加入磷結合劑

Stage 3（中度氮血症）
- 上述 + 磷結合劑（幾乎所有 Stage 3 都需要）
- [藥物:Maropitant] 2 mg/kg PO SID（止吐）
- 皮下輸液居家 75-150 mL q24-48h
- 鉀補充（貓常見低血鉀）

Stage 4（重度氮血症/尿毒症）
- 積極症狀管理 + 住院靜脈輸液穩定
- 貧血管理 + 生活品質評估

### 藥物治療方案

| 類別 | 藥物 | 劑量 | 證據等級 |
|------|------|------|---------|
| 抗蛋白尿 | [藥物:Benazepril] | 0.5-1.0 mg/kg PO SID | Level I |
| 抗蛋白尿 | [藥物:Telmisartan] | 1 mg/kg PO SID | Level I |
| 磷結合劑 | [藥物:Aluminum hydroxide] | 30-90 mg/kg/day 與食物混合 | Level II |
| 降壓 | [藥物:Amlodipine] | 0.125-0.25 mg/kg PO SID（貓首選） | Level I |
| 貧血 | [藥物:Darbepoetin] | 1 ug/kg SC q1wk → q2-4wk | Level II |
| 止吐 | [藥物:Maropitant] | 2 mg/kg PO SID | Level I |
| 食慾促進 | [藥物:Mirtazapine] | 1.88 mg/cat PO q48h | Level II |
| 補鉀 | Potassium gluconate | 2-6 mEq/day PO | Level II |

### 飲食管理要點
- 限磷最關鍵：目標 Stage 1-2 <4.5 / Stage 3 <5.0 / Stage 4 <6.0 mg/dL
- 適量優質蛋白（貓不應過度限制）
- Omega-3 (EPA/DHA) 具腎保護作用
- 貓建議濕食

## 二、藥物/方法比較 (Comparison)

### 抗蛋白尿：ACEi vs ARB
- ACE 抑制劑（benazepril）與血管收縮素受體阻斷劑（ARB，telmisartan）皆透過降低腎絲球內壓、減少蛋白尿而達腎保護。
- **貓首選 telmisartan**：頭對頭試驗顯示 telmisartan 降蛋白尿不劣於、部分情境優於 benazepril（Sent 2015），且已取得貓 CKD 蛋白尿/高血壓適應症。
- benazepril 經膽汁排泄，腎功能不全時較不需調量；啟動任一者後 3-7 天須複檢 Creatinine/K⁺（GFR 可能暫時下降）。

### 磷結合劑比較
| 結合劑 | 特點 | 注意 |
|--------|------|------|
| 氫氧化鋁 | 便宜、效力強 | 長期理論上鋁蓄積/神經毒性（臨床少見） |
| 碳酸鑭（lanthanum） | 不含鈣、效力佳 | 成本較高 |
| 鈣基（碳酸鈣/醋酸鈣） | 兼補鈣 | 注意高血鈣風險 |
| 殼聚醣+碳酸鈣（chitosan 複方） | 貓常用、順口性佳 | 依血磷調量 |

共通鐵則：**所有磷結合劑必須與食物同時給予**，才能在腸道結合食物中的磷。

### 紅血球生成刺激劑（ESA）
- **darbepoetin 優於 epoetin alfa**：免疫原性較低、抗 EPO 抗體導致純紅血球再生不良（PRCA）風險較小、半衰期長（給藥間隔較長）。
- 須同時補鐵；目標 PCV 勿過衝（過高增加高血壓與血栓風險）。

### 降壓
- 貓 CKD 高血壓首選 **amlodipine**；telmisartan 可同時兼顧蛋白尿與血壓。目標 SBP < 160 mmHg，避免過度降壓造成低灌流。

## 三、併發症與監控 (Complications & Monitoring)

| 併發症 | 處理 | 監測 |
|--------|------|------|
| 高磷血症 | 限磷飲食 + 磷結合劑 | 血磷 |
| 高血壓 | [藥物:Amlodipine] | 收縮壓（目標 <160） |
| 非再生性貧血 | [藥物:Darbepoetin] + 鐵 | PCV（目標 30-40%） |
| 代謝性酸中毒 | NaHCO3 口服 | TCO2/HCO3- |
| 低鉀血症（貓） | K-gluconate 口服 | 血鉀 |
| 脫水 | SQ fluids 居家 | 體重、皮膚彈性 |

監測頻率：Stage 1-2 q3-6月；Stage 3 q1-3月；Stage 4 q2-4週。每次追蹤：BUN/Cre/SDMA、電解質/磷、UPC、血壓、體重/BCS/MCS。

## 四、預後影響 (Prognostic Impact)

| IRIS 分期 | 犬中位存活 | 貓中位存活 |
|----------|----------|----------|
| Stage 1-2 | > 400 天 | > 600 天 |
| Stage 3 | 110-200 天 | 150-300 天 |
| Stage 4 | 14-80 天 | 35-100 天 |

正面預後因子：飲食順從性高、蛋白尿控制良好 (UPC <0.5)、血磷達標、體重穩定
負面預後因子：UPC >1.0、高磷血症無法控制、嚴重貧血、持續體重流失

跟飼主談時：CKD 沒辦法逆轉，但可以管。延壽手段裡，飲食管理的證據最硬。要不要繼續治療、要不要升級，最後看的還是生活品質。

## 五、人醫借鑒 (Translational Insights)

| 人醫工具/概念 | 獸醫應用潛力 | 現況 |
|-------------|-------------|------|
| SGLT2 抑制劑 (Dapagliflozin) | 貓 CKD 腎保護，EMPA-KIDNEY 人醫延伸 | 2023 年貓 CKD 臨床試驗啟動，初步結果待發表 |
| Atrasentan（內皮素受體拮抗劑） | 蛋白尿性腎病新靶點治療 | 人醫 SONAR trial 陽性，獸醫尚無數據 |
| 腎臟替代療法（CRRT） | 犬貓 AKI/急性加重期血液透析 | 獸醫轉介中心逐漸引入 |
| Finerenone（非類固醇 MRA） | 腎臟纖維化延緩 | 人醫 FIDELIO/FIGARO 陽性，獸醫探索中 |

## 六、臨床爭議與知識空缺 (Controversies & Knowledge Gaps)

| 爭議主題 | 目前立場 | 證據等級 | 研究方向 |
|---------|---------|---------|---------|
| SGLT2i 在貓 CKD | 人醫有效，獸醫尚無定論 | Level V | 貓藥動學安全性試驗 |
| 幹細胞治療 CKD | 初步有改善跡象 | Level IV | 劑量、途徑、安全性 |
| 磷早期介入（Stage 1） | IRIS 建議 Stage 2 開始 | Level II | Stage 1 即應限磷？ |
| 最佳蛋白攝取 | 適度限制非嚴格限制 | Level II-III | 貓最適蛋白需求 |

## 七、近期實證更新 (Recent Evidence Updates)

### Telmisartan 確立貓 CKD 蛋白尿/高血壓地位
頭對頭 RCT（Sent 2015）支持 telmisartan 降貓 CKD 蛋白尿；其後取得貓蛋白尿與高血壓適應症，臨床上對貓已成為 RAAS 阻斷的優先選擇（每日一次口服液劑、順從性佳）。

### 腎臟處方飲食實證再確認（犬貓皆然）
經典對照研究確立療效：犬（Jacob 2002）與貓（Ross 2006）使用腎臟處方飲食顯著延長存活、減少尿毒危象。飲食仍是 CKD 最硬的實證介入，臨床落地關鍵在順口性與漸進換食。

### SGLT2 抑制劑於貓 CKD：仍屬研究階段
人醫 SGLT2i（dapagliflozin/empagliflozin）對 CKD 有強腎保護證據（DAPA-CKD、EMPA-KIDNEY），但**貓 CKD 仍無核准適應症**；貓已上市的 SGLT2i（bexagliflozin/velagliflozin）僅核准用於糖尿病、且帶 euglycemic DKA 風險，不可外推至 CKD。內皮素拮抗劑與非類固醇 MRA（finerenone）等亦在探索階段。

### 礦物質骨病與早期標記
FGF23 升高早於高磷血症，可能成為磷負荷的早期指標；早期且積極的磷控制（飲食＋結合劑）與存活相關，惟 Stage 1 是否即須限磷仍待更多證據。`,
  clinical_pearl: '腎臟處方飲食是 CKD 管理裡證據最硬的介入措施。有個經典研究的數字大家要記得：犬 CKD Stage 2-3 用腎臟處方飲食，中位存活是普通飲食的 2.4 倍（595 天 vs 188 天）。但臨床上飼主常常卡在價格或狗貓拒吃這兩關。實際操作的時候我會這樣做：第一，慢慢換，7-14 天漸進式。第二，多試幾個牌子跟口味（Hill\'s k/d、Royal Canin Renal、Purina NF），找到一個吃的就好。第三，貓不愛吃就微波加熱一下，香氣會出來。第四，貓盡量選濕食配方。最後一句話：如果動物就是死都不吃腎臟處方飲食，那給他吃任何東西都比餓肚子強。CKD 貓餓著最怕的就是把 FHL 引出來。',
  common_mistakes: [
    '未依 IRIS 分期制定治療計畫（不同分期的治療強度明顯不同）',
    '抗蛋白尿藥物啟動後未在 7 天追蹤 Creatinine（ACEI/ARB 可能暫時降低 GFR）',
    '磷結合劑在兩餐之間給予而非與食物混合（必須在消化過程中結合食物中的磷）',
    'CKD 貓限制蛋白質過嚴導致肌肉消耗（應適量優質蛋白，非極度限制）',
    'Darbepoetin 使用後未監測 PCV（過度紅血球增生和高血壓風險）',
  ],
  disease_data: null,
  diagnostic_data: null,
  procedure_data: null,
  visual_placeholders: [
    { position: 'IRIS 分期治療段落後', type: 'flowchart', description: 'CKD 分期治療決策流程圖' },
    { position: '藥物治療表後', type: 'comparison_table', description: 'CKD 常用藥物劑量速查表' },
  ],
  interactive_placeholders: [
    { position: '治療方案段落', type: 'interactive_staging', description: '輸入 IRIS 分期/UPC/BP/磷 自動建議治療方案' },
  ],
  drug_api_links: ['Benazepril', 'Telmisartan', 'Aluminum hydroxide', 'Darbepoetin', 'Maropitant', 'Mirtazapine', 'Amlodipine'],
  references: [
    { type: 'guideline', citation: 'IRIS (International Renal Interest Society). IRIS Treatment Recommendations (Modified 2023). Available at: http://www.iris-kidney.com/', relevance: 'CKD 治療指引標準' },
    { type: 'journal', citation: 'Jacob F, Polzin DJ, Osborne CA, et al. Clinical evaluation of dietary modification for treatment of spontaneous chronic renal failure in dogs. J Am Vet Med Assoc. 2002;220(8):1163-1170. doi:10.2460/javma.2002.220.1163.', relevance: '犬腎臟處方飲食延長存活的對照研究' },
    { type: 'journal', citation: 'Ross SJ, Osborne CA, Kirk CA, et al. Clinical evaluation of dietary modification for treatment of spontaneous chronic kidney disease in cats. J Am Vet Med Assoc. 2006;229(6):949-957. doi:10.2460/javma.229.6.949.', relevance: '貓腎臟處方飲食延長存活、減少尿毒危象的對照研究' },
    { type: 'journal', citation: 'Sent U, Gössl R, Elliott J, Syme HM, Zimmering T. Comparison of efficacy of long-term oral treatment with telmisartan and benazepril in cats with chronic kidney disease. J Vet Intern Med. 2015;29(6):1479-1487. doi:10.1111/jvim.13639.', relevance: 'telmisartan vs benazepril 降貓 CKD 蛋白尿的頭對頭 RCT' },
    { type: 'guideline', citation: 'Lees GE, Brown SA, Elliott J, Grauer GF, Vaden SL. Assessment and Management of Proteinuria in Dogs and Cats: ACVIM Consensus Statement. J Vet Intern Med. 2005;19(3):377-385. doi:10.1111/j.1939-1676.2005.tb02713.x.', relevance: '蛋白尿評估與管理 ACVIM 共識' },
    { type: 'textbook', citation: 'Ettinger SJ, Feldman EC. Textbook of Veterinary Internal Medicine, 8th ed. Elsevier, 2017.', relevance: 'CKD 管理教材' },
  ],
  is_current: true,
  created_at: now,
};

/** 內分泌疾病藥物治療，L5 治療型 */
const contentEndocrineTherapy: NodeContent = {
  id: 'CONTENT-IM-L5-002',
  node_id: 'IM-L5-002',
  version: 2,
  summary: '內分泌疾病藥物治療涵蓋 Cushing（Trilostane）、甲低（Levothyroxine）、貓甲亢（Methimazole）、Addison（DOCP + Prednisolone）和糖尿病（胰島素）的標準治療方案。每種藥物都有特定的劑量調整策略、監測方式和副作用管理。',
  learning_objectives: [
    '制定各內分泌疾病的標準藥物治療方案',
    '說明各藥物的監測時程和劑量調整依據',
    '辨識各藥物的主要副作用並制定應對策略',
    '比較同類藥物的選擇依據（如 Trilostane vs Mitotane、Glargine vs PZI）',
    '制定內分泌疾病的長期管理與飼主教育計畫',
  ],
  key_points: [
    'Trilostane：1-2 mg/kg PO SID 餐後，10-14 天後 ACTH stim（給藥後 4-6h），目標 post-ACTH 1.45-5.4 μg/dL',
    'Levothyroxine：0.02 mg/kg PO BID，4-8 週後 post-pill T4（給藥後 4-6h），目標 2.5-5.0 μg/dL',
    'Methimazole：1.25-2.5 mg PO BID 起始（AAFP 2016），2-3 週後追蹤 T4 + 腎功能，目標 T4 1.0-2.5 μg/dL',
    'DOCP：2.2 mg/kg IM q25d + Prednisolone 0.1-0.2 mg/kg PO SID',
    '犬 DM：NPH 0.25-0.5 U/kg SC BID；貓 DM：Glargine 0.25-0.5 U/kg SC BID',
    '監測核心原則：正確時間點採樣 + 追蹤臨床症狀 + 定期評估共病',
    '近期：SGLT2 抑制劑（bexagliflozin/velagliflozin）口服降糖為貓 DM 新選項（Hadd 2023），但限新診斷、非酮症貓，須嚴防 euglycemic DKA',
  ],
  body: `# 內分泌疾病藥物治療

## 一、治療原理 (Treatment Principles)



### Cushing (HAC) 治療

| 類型 | 治療 | 藥物/方法 | 劑量 | 證據等級 |
|------|------|---------|------|---------|
| PDH 首選 | 藥物 | [藥物:Trilostane] (Vetoryl) | 1-2 mg/kg PO SID 與食物 | Level I |
| PDH 替代 | 藥物 | [藥物:Mitotane] (o,p'-DDD) | Loading 25-50 mg/kg/d x7-10d | Level II |
| ADH 腺瘤 | 手術 | 腎上腺切除術 | — | Level II |
| 大腺瘤 | 放射治療 | RT | — | Level III |

Trilostane 監測：ACTH stim 給藥後 4-6h。目標 post-ACTH cortisol 1.5-5.4 ug/dL。

### Addison 治療

| 情境 | 藥物 | 劑量 | 證據等級 |
|------|------|------|---------|
| 鹽皮質素 | [藥物:DOCP] (Zycortal) | 2.2 mg/kg IM/SC q25-28d | Level I |
| 鹽皮質素替代 | [藥物:Fludrocortisone] | 0.01-0.02 mg/kg PO SID-BID | Level II |
| 糖皮質素 | [藥物:Prednisolone] | 0.1-0.2 mg/kg PO SID | Level I |
| Crisis 急救 | 0.9% NaCl + [藥物:Dexamethasone] SP | 休克劑量 + 0.5-2 mg/kg IV | Level I |

### 甲低治療
[藥物:Levothyroxine] 0.02 mg/kg PO BID。Post-pill T4 4-6h 後目標 2.5-5.0 ug/dL。

### 甲亢治療
- [藥物:Methimazole] 1.25-2.5 mg PO BID（起始，CKD 風險高者從低劑量開始），2-3 週追蹤 T4 + Cre
- I-131 放射性碘：唯一治癒性治療，治癒率 >95%

### DM 胰島素治療

| 物種 | 首選胰島素 | 劑量 | 飲食 |
|------|----------|------|------|
| 犬 | [藥物:NPH] 或 [藥物:Vetsulin] | 0.25-0.5 U/kg SC BID | 高纖維 |
| 貓 | [藥物:Glargine] 或 [藥物:PZI] | 0.25-0.5 U/kg SC BID | 高蛋白低碳水 |

## 二、藥物/方法比較 (Comparison)

同一個內分泌病常有多個藥/法可選，這裡比較「同類怎麼挑」：

**犬 Cushing：Trilostane vs Mitotane**
| | Trilostane | Mitotane (o,p'-DDD) |
|--|-----------|---------------------|
| 機轉 | 可逆抑制 3β-HSD（酵素抑制） | 選擇性破壞腎上腺皮質（細胞毒） |
| 可逆性 | 停藥可逆 | 不可逆 |
| 角色 | 現代首選 | 替代/不耐 Trilostane |
| 風險 | 醫源性 Addison（可逆） | 永久性 Addison、loading 期需密切監測 |

→ 現代多以 Trilostane 為首選；Mitotane 用在取得受限或特殊情況。

**Addison 鹽皮質素：DOCP vs Fludrocortisone**
| | DOCP（注射） | Fludrocortisone（口服） |
|--|------------|------------------------|
| 給法 | IM/SC q~25-30d | PO SID-BID |
| 電解質穩定度 | 通常較佳 | 較易飄移、易 PU/PD |
| 糖皮質活性 | 無（需另加 pred） | 有部分糖皮質活性 |

→ DOCP 長期穩定度通常較佳；Fludrocortisone 在 DOCP 取得受限時替代。

**貓 DM 胰島素：長效 vs NPH**
- 貓選**長效**（Glargine/PZI/Detemir）——NPH 在貓作用時間太短，不建議；NPH/lente 是**犬**的選項。
- 近年多了**非胰島素口服選項：SGLT2 抑制劑**（限新診斷貓，見 §七）。

**貓甲亢：Methimazole vs I-131 vs 手術 vs 飲食**
- Methimazole：可逆可調，但需終身、不治本，且可揭露 CKD。
- I-131：唯一治癒性（治癒率 >95%），需特殊設施與隔離。
- 甲狀腺切除：可治癒，但麻醉＋副甲狀腺/喉返神經損傷風險。
- 限碘飲食：適合不能用其他法者，但須完全不吃其他食物才有效。

## 三、併發症與監控 (Complications & Monitoring)

| 疾病 | 併發症 | 監測 | 處理 |
|------|--------|------|------|
| Cushing/Trilostane | 醫源性 Addison | ACTH stim | 停藥 + 類固醇 |
| Addison/DOCP | 高鈉/低鉀 | 電解質 q2wk→q3-6月 | 調整劑量/間隔 |
| 甲低/L-T4 | 醫源性甲亢 | Post-pill T4 q6月 | 減量 |
| 甲亢/Methimazole | CKD 揭露 | Cre 治療後 1-2-4 週 | 調整 T4 目標 |
| DM/Insulin | 低血糖 | BGC、居家監測 | 降低胰島素劑量 |
| DM/Insulin | Somogyi effect | BGC nadir <65→rebound | 降低劑量 |

內分泌治療共通原則：調整任何內分泌藥物後，至少 2 週後才評估效果（荷爾蒙效應需要時間）。

## 四、預後影響 (Prognostic Impact)

| 疾病 | 治療 | 預後 | 中位存活 |
|------|------|------|---------|
| PDH + Trilostane | 藥物 | 佳 | ~2-2.5 年 |
| Addison + DOCP | 長期管理 | 極佳 | 正常壽命 |
| 犬甲低 + L-T4 | 終身補充 | 極佳 | 正常壽命 |
| 貓甲亢 + I-131 | 治癒性 | 極佳 | > 4 年 |
| 犬 DM + 胰島素 | 終身 | 佳 | 2-3 年 |
| 貓 DM | 可能緩解 | 佳-極佳 | 緩解率 30-40% |

飼主溝通：多數內分泌疾病為可管理的慢性病。飼主依從性（規律投藥/回診）是成功關鍵。

## 五、人醫借鑒 (Translational Insights)

| 人醫工具/概念 | 獸醫應用潛力 | 現況 |
|-------------|-------------|------|
| GLP-1 受體促效劑 (Semaglutide) | 犬糖尿病/肥胖管理新途徑 | 人醫重磅藥物，獸醫初步研究中 |
| 連續血糖監測（CGM）如 FreeStyle Libre | 犬貓糖尿病居家血糖曲線 | 獸醫已廣泛使用，準確度驗證完善 |
| SGLT2 抑制劑（bexagliflozin/velagliflozin） | 貓 DM 口服非胰島素降糖（人醫降糖藥跨界） | 已用於新診斷貓 DM；須嚴防酮酸中毒（見 §七） |
| 甲狀腺分子靶向治療 | 貓甲亢術前穩定新方案 | 人醫使用成熟，獸醫探索替代方案 |

## 六、臨床爭議與知識空缺 (Controversies & Knowledge Gaps)

| 爭議主題 | 目前立場 | 證據等級 | 研究方向 |
|---------|---------|---------|---------|
| Trilostane SID vs BID | SID 起始 | Level II | 最佳給藥頻率 |
| 甲亢治療後最佳 T4 目標 | 正常低端 + 顧及腎功能 | Level III | CKD-甲亢平衡最佳化 |
| GLP-1 agonist 在貓 DM | 人醫革命性但獸醫未用 | Level V | 貓藥動學研究 |
| DOCP 最低有效劑量 | 起始 2.2 mg/kg，個別化 | Level II | 更低劑量可行性 |

## 七、近期實證更新 (Recent Evidence Update)

**貓糖尿病的最大變革：SGLT2 抑制劑口服降糖藥（Hadd et al 2023, JVIM）**
SGLT2 抑制劑（bexagliflozin/Bexacat、velagliflozin/Senvelgo）是近年引進獸醫的**口服**降糖藥，機轉是促進尿糖排出、**不依賴胰島素**——對「在家打針困難」的飼主是革命性選項。Hadd 2023 田野試驗顯示對**新診斷**貓 DM 安全有效。但有不可妥協的安全前提：
- **只用於新診斷、相對健康、無明顯酮體/胰島素依賴的貓**；不可用於 DKA 或已長期胰島素依賴者。
- **最大風險＝（正常血糖型）糖尿病酮酸中毒（euglycemic DKA）**——用藥期間監測酮體、食慾、精神，飼主要會辨識 DKA 警訊。
- 不是所有貓都適合；經典胰島素仍是許多貓（尤其已酮症/重症）的主力。

**監測時機仍是內分泌治療的命脈（不變鐵則）**：Trilostane ACTH stim 給藥後 4-6h、Levothyroxine post-pill T4 給藥後 4-6h、Methimazole 2-3 週且必追腎功能、胰島素穩定 5-7 天才做血糖曲線；連續血糖監測（CGM, 如 FreeStyle Libre）已是居家管理的實用工具。

【台灣落地】SGLT2 抑制劑在台灣的可近性與適應症仍在演進，導入務必嚴守「新診斷、非酮症」適應症並做酮體監測；多數重症/酮症貓仍以胰島素為主。內分泌藥（trilostane、methimazole、胰島素）在台取得穩定，飼主依從性與正確採血時機是成敗關鍵。`,
  clinical_pearl: '內分泌藥物治療最常見的錯誤就是在錯的時間點抽血。每個藥都有它的監測時機：Trilostane 要在給藥後 4-6 小時做 ACTH stim、Levothyroxine 也要在給藥後 4-6 小時測 post-pill T4、Methimazole 要等 2-3 週才追蹤（不是給完就抽）、胰島素則要等穩定 5-7 天才做血糖曲線。時機抓錯，劑量就調錯，後面可能爆出大事（像 Trilostane 過量直接做出 Addisonian crisis）。',
  common_mistakes: [
    '內分泌藥物追蹤時抽血時機抓錯',
    'Trilostane 用了沒教飼主辨識 Addisonian crisis 的警訊（吐了、軟掉、不吃）',
    'Methimazole 開下去沒在追腎功能，甲亢壓下來之後底下的 CKD 就跑出來了',
    '胰島素劑量調太頻繁（每次調整至少要等 5-7 天看效果）',
    'Addison 維持治療沒教飼主壓力時要把糖皮質素加倍',
  ],
  disease_data: null,
  diagnostic_data: null,
  procedure_data: null,
  visual_placeholders: [
    { position: '各疾病藥物表後', type: 'comparison_table', description: '內分泌疾病藥物治療速查總表' },
    { position: '監測時程段落後', type: 'timeline', description: '各內分泌藥物監測時程甘特圖' },
  ],
  interactive_placeholders: [],
  drug_api_links: ['Trilostane', 'Levothyroxine', 'Methimazole', 'DOCP', 'Fludrocortisone', 'Prednisolone', 'NPH insulin', 'Glargine', 'PZI'],
  references: [
    { type: 'journal', citation: 'Hadd MJ, Bienhoff SE, Little SE, Geller S, et al. "Safety and effectiveness of the sodium-glucose cotransporter inhibitor bexagliflozin in cats newly diagnosed with diabetes mellitus." J Vet Intern Med. 2023;37(3):915-924. doi:10.1111/jvim.16730', relevance: '近期：SGLT2 抑制劑口服降糖（新診斷貓 DM）田野試驗' },
    { type: 'guideline', citation: 'Behrend EN, Holford AL, Lathan P, Rucinsky R, Schulman R. "2018 AAHA Diabetes Management Guidelines for Dogs and Cats." J Am Anim Hosp Assoc. 2018;54(1):1-21. doi:10.5326/jaaha-ms-6822', relevance: 'DM 藥物管理指引' },
    { type: 'guideline', citation: 'Carney HC, Ward CR, Bailey SJ, Bruyette D, et al. "2016 AAFP Guidelines for the Management of Feline Hyperthyroidism." J Feline Med Surg. 2016;18(5):400-416. doi:10.1177/1098612X16643252', relevance: '貓甲亢藥物管理指引' },
    { type: 'guideline', citation: 'Sparkes AH, Caney S, Chalhoub S, Elliott J, et al. "ISFM Consensus Guidelines on the Diagnosis and Management of Feline Chronic Kidney Disease." J Feline Med Surg. 2016;18(3):219-239. doi:10.1177/1098612X16631234', relevance: '貓 CKD 管理共識（甲亢治療揭露 CKD 相關；修正 v1 殘缺引用）' },
    { type: 'textbook', citation: 'Feldman EC et al. Canine and Feline Endocrinology, 4th ed. Elsevier, 2015.', relevance: '內分泌疾病藥物治療完整參考' },
  ],
  is_current: true,
  created_at: now,
};

/** 免疫抑制治療，L5 治療型 */
const contentImmunosuppression: NodeContent = {
  id: 'CONTENT-IM-L5-003',
  node_id: 'IM-L5-003',
  version: 2,
  summary: '免疫抑制治療用在自體免疫疾病（IMHA、ITP、IBD/CE）跟免疫介導性多關節炎這類病人身上。整體策略分兩段：誘導期用高劑量把症狀快速壓下來，維持期則找最低有效劑量長期管理。常用的藥就那幾個：Prednisolone、Mycophenolate、Cyclosporine、Azathioprine、Chlorambucil，每個藥的作用靶點跟副作用都不一樣，要選對。',
  learning_objectives: [
    '制定 IMHA 的一線和二線免疫抑制治療方案',
    '比較各免疫抑制劑的作用靶點、適應症和副作用',
    '設計免疫抑制劑的緩慢減量時程',
    '說明各藥物需要監測的副作用與相應檢查',
    '處理免疫抑制治療中的繼發感染風險',
  ],
  key_points: [
    'Prednisolone 一線：IMHA 2 mg/kg/day、IBD 1-2 mg/kg/day。誘導 2-4 週後依反應每 2-4 週減 25%',
    'Mycophenolate（ACVIM IMHA 首選二線）：10 mg/kg PO BID，副作用主要為消化道（腹瀉）',
    'Cyclosporine：5-10 mg/kg PO BID（空腹），副作用嘔吐、牙齦增生、多毛',
    'Azathioprine（犬 only，禁用於貓）：2 mg/kg PO SID × 14d → 1 mg/kg q48h。監測 CBC（骨髓抑制）',
    'Chlorambucil（貓首選二線/IBD）：4-6 mg/m² PO q48h。監測 CBC（骨髓抑制）',
    '減量原則：IMHA 至少 3-6 個月、IBD 至少 2-3 個月。過快減量是復發的主要原因',
    '繼發感染風險：長期免疫抑制 → 泌尿道感染、蠕形蟎症、黴菌感染需警覺',
    'IMHA 抗血栓已是標準配備（非選配）：診斷當下即評估 clopidogrel±LMWH，PTE 是主要死因（Swann 2019 共識）',
    '開長期免疫抑制前先排除壁蝨媒介感染（Ehrlichia/Babesia/Anaplasma 可致繼發性 IMHA/ITP）',
  ],
  body: `# 免疫抑制治療

## 一、治療原理 (Treatment Principles)



### IMHA 免疫抑制方案

| 層級 | 藥物 | 劑量 | 角色 | 證據等級 |
|------|------|------|------|---------|
| 一線 | [藥物:Prednisolone] | 2 mg/kg/day PO (ACVIM) | 基石 | Level I |
| 二線A | [藥物:Mycophenolate mofetil] | 10 mg/kg PO BID | 常用搭配 | Level II |
| 二線B | [藥物:Azathioprine] (僅犬) | 2 mg/kg PO SID→隔日 | 經典搭配 | Level II |
| 替代 | [藥物:Cyclosporine] | 5 mg/kg PO BID | 難治性 | Level III |
| 急救 | hIVIG | 0.5-1.5 g/kg IV over 6-12h | Fc blockade | Level III |

ACVIM 2019 建議：Prednisolone 起始 2 mg/kg/day（非更高）。減量時程：4-6 週後開始每 2-3 週減 25%，總療程 3-6 個月以上。

### IMHA 抗血栓治療

| 藥物 | 劑量 | 備註 | 證據等級 |
|------|------|------|---------|
| [藥物:Clopidogrel] | 2 mg/kg PO SID | 抗血小板 | Level II |
| Unfractionated heparin | 150-300 U/kg SC TID | 急性期 | Level III |
| Enoxaparin (LMWH) | 0.8 mg/kg SC BID | 替代 UFH | Level III |

### CE/IBD 免疫抑制

| 層級 | 藥物 | 劑量 | 適應症 | 證據等級 |
|------|------|------|--------|---------|
| 一線 | [藥物:Prednisolone] | 1-2 mg/kg PO SID→漸減 | IRE/IBD | Level I |
| 二線 | [藥物:Chlorambucil] | 4-6 mg/m2 PO q48h | 類固醇反應不佳 | Level II |
| 替代 | [藥物:Cyclosporine] | 5 mg/kg PO SID | 類固醇替代 | Level II |
| 替代 | [藥物:Mycophenolate] | 10 mg/kg PO BID | 難治性 | Level III |
| PLE 特殊 | [藥物:Budesonide] | 3 mg/m2 PO SID | 全身副作用較少 | Level II |

### 各藥物作用機轉比較

| 藥物 | 靶點 | 主要效應 | 起效時間 |
|------|------|---------|---------|
| Prednisolone | NF-kB/GR | 廣效抗炎+免疫抑制 | 24-48h |
| Mycophenolate | IMPDH | 淋巴球增殖抑制 | 1-2 週 |
| Azathioprine | Purine synthesis | T 細胞抑制為主 | 2-4 週 |
| Cyclosporine | Calcineurin | IL-2 抑制→T 細胞 | 1-2 週 |
| Chlorambucil | DNA alkylation | 淋巴球細胞毒殺 | 2-4 週 |

## 二、藥物/方法比較 (Comparison)

§一 已列各藥靶點；這裡是「臨床上怎麼選第二線」的實戰比較。免疫抑制不是越多越強越好，要依疾病、物種、起效速度、監測負擔與成本來選：

| 比較軸 | Prednisolone | Mycophenolate (MMF) | Azathioprine | Cyclosporine | Chlorambucil |
|--------|-------------|---------------------|--------------|--------------|--------------|
| 角色 | 所有一線基石 | IMHA 常用二線 | 犬經典二線 | 難治/類固醇不耐 | 貓首選二線、CE |
| 起效 | 24-48 小時（最快） | 1-2 週 | 2-4 週（最慢） | 1-2 週 | 2-4 週 |
| 物種 | 犬貓皆可 | 犬貓皆可 | **犬 only，貓禁用** | 犬貓皆可 | 犬貓皆可（貓耐受佳） |
| 主要毒性 | 類固醇副作用（PU/PD、易感染、醫源庫欣） | 腹瀉（劑量相關） | 骨髓抑制、肝毒（犬） | 嘔吐、牙齦增生、多毛、機會感染 | 骨髓抑制（緩慢） |
| 監測 | 臨床＋尿培養 | 糞便/臨床 | CBC 密集 | trough level（部分）、臨床 | CBC q2-4wk |
| 成本 | 低 | 中-高 | 低 | 中-高 | 中 |

**選藥心法**：
- **要「快」**：急重症想快點把類固醇撐住，MMF/cyclosporine（1-2 週）比 azathioprine（2-4 週）快；但最快的還是先把 prednisolone 給足。
- **貓**：azathioprine 絕對禁用（致命骨髓抑制）→ 貓的二線是 **chlorambucil**（或 cyclosporine）。
- **IMHA**：ACVIM 2019 治療共識把 MMF 列為常用二線；單藥 vs 雙藥起始無定論，重症/反應差才加二線。
- **CE/IBD**：類固醇反應不佳走 chlorambucil（貓）或 cyclosporine；PLE 想減全身副作用可用 budesonide。
- **難治型**：考慮換機轉（calcineurin ↔ 抗代謝）、人醫新標靶（見 §五）。

## 三、併發症與監控 (Complications & Monitoring)

| 藥物 | 主要副作用 | 監測 | 頻率 |
|------|----------|------|------|
| Prednisolone | PU/PD、多食、皮膚變薄、UTI | 臨床+尿培養 | 每次回診 |
| Mycophenolate | 腹瀉（劑量相關） | 糞便評分 | q1-2 週起始 |
| Azathioprine | 骨髓抑制（嗜中性球↓） | CBC q2wk x8wk | 起始後密集 |
| Cyclosporine | 嘔吐、牙齦增生 | 臨床+trough level | q4-8 週 |
| Chlorambucil | 骨髓抑制 | CBC q2-4wk | 持續治療期間 |

Azathioprine 在貓禁用，貓對此藥極度敏感，可致嚴重骨髓抑制。

IMHA 急性期監測：PCV q6-12h、網織紅血球 q24-48h、凝血功能 q24h、SpO2 + 呼吸型態（PTE 偵測）。

## 四、預後影響 (Prognostic Impact)

| 疾病 | 預後 | 關鍵因子 |
|------|------|---------|
| IMHA 急性存活 >2 週 | 長期預後改善 | 復發率 ~15-20% |
| IMHA 合併 PTE | 不良 | PTE 為主要死因 |
| IRE/IBD 輕-中度 | 佳 | 免疫抑制控制下可管理 |
| PLE (Alb 恢復 >2.0) | 中等 | 飲食順從性關鍵 |
| PLE (Alb 持續 <1.5) | 不良 | 中位存活 2-5 月 |

免疫抑制減量原則：太快減量是復發最常見原因。每 2-3 週減 25%，至少維持 3-6 月。臨床和血檢指標穩定後才減量。

## 五、人醫借鑒 (Translational Insights)

| 人醫工具/概念 | 獸醫應用潛力 | 現況 |
|-------------|-------------|------|
| JAK 抑制劑（Tofacitinib/Oclacitinib） | 犬自體免疫疾病新標靶免疫調節 | Oclacitinib 已廣泛用於皮膚科，內科應用研究中 |
| 抗 CD20 單株抗體（Rituximab） | 犬 IMHA/ITP 難治性病例 B 細胞清除 | 人醫成熟，犬抗 CD20 抗體開發中 |
| Mycophenolate mofetil (MMF) | 犬 IMHA/IBD 類固醇節約療法 | 獸醫使用經驗快速累積，PK 數據完善中 |
| 糞菌移植（FMT） | 犬 IBD/免疫失調的腸道微生態重建 | 獸醫初步臨床應用，標準化不足 |

## 六、臨床爭議與知識空缺 (Controversies & Knowledge Gaps)

| 爭議主題 | 目前立場 | 證據等級 | 研究方向 |
|---------|---------|---------|---------|
| IMHA 單藥 vs 雙藥 | ACVIM 不反對但非必須 | Level III | 前瞻性 RCT |
| Pred 2 vs 4 mg/kg/day | ACVIM 建議 2 mg/kg | Level II | 劑量-反應 RCT |
| Mycophenolate vs Azathioprine | Mycophenolate 可能起效快 | Level III | 頭對頭比較 |
| DOACs 在獸醫的角色 | 人醫取代 warfarin | Level IV | 犬用 rivaroxaban 藥動學 |
| Budesonide vs Prednisolone in CE | Budesonide 副作用少 | Level II | PLE 中等效性？ |

## 七、近期實證更新 (Recent Evidence Update)

**ACVIM 共識把免疫介導病的治療「標準化」了**
- **IMHA（Swann et al 2019 治療共識）**：prednisolone 起始 **2 mg/kg/day（不是更高）**、依風險常規併抗血栓、二線首選 MMF；**緩慢減量（≥3-6 月、每 2-3 週減 25%）** 是降低復發的關鍵。
- **ITP（LeVine et al 2024 診斷共識）**：術語改 primary(non-associative)/secondary、骨髓不再常規、診斷為結構化排除——直接影響「要不要一路免疫抑制」的決策（繼發性要治原發、別盲目壓制免疫）。

**抗血栓已是 IMHA 標準配備，不是選配**
近年一致認為**診斷 IMHA 當下就要評估抗血栓**（clopidogrel ± LMWH），因為血栓栓塞（尤其肺栓塞 PTE）是 IMHA 最主要的死因之一；這與舊年代「先壓免疫、血栓再說」的觀念不同。

**人醫新標靶正在叩門（見 §五）**：JAK 抑制劑、anti-CD20（rituximab）、TPO-RA 在人醫成熟，犬貓多在探索階段；難治型 IMHA/ITP 是這些新藥未來的切入點，但目前仍非標準治療。

【台灣落地】壁蝨媒介病（Ehrlichia/Babesia/Anaplasma）可表現為繼發性 IMHA/ITP——**開長期免疫抑制前務必 PCR/血清學排除感染**，把繼發當原發壓制免疫會讓感染失控（與 IM-L3-005/015 一致）。MMF、cyclosporine 在台灣可取得；azathioprine 便宜但**貓禁用**，下藥前再三確認物種。`,
  clinical_pearl: '免疫抑制治療最常犯的錯誤是減量過快。IMHA 的復發率約 15-20%，而幾乎所有復發都發生在減量過程中。安全的減量策略是「每 2-4 週減 25%，每次減量前確認 PCV 穩定」。如果在減量過程中 PCV 開始下降，立即回到上一個有效劑量並維持更長時間。另一個重要概念：Azathioprine 的效果需要 2-4 週才出現（因為它抑制的是淋巴球增殖，不是已存在的抗體），所以加入二線藥物後不能期待立即效果。',
  common_mistakes: [
    '免疫抑制劑減量過快導致復發（IMHA 至少 3-6 個月、IBD 至少 2-3 個月）',
    '貓使用 Azathioprine（禁用，嚴重致死性骨髓抑制風險，貓應使用 Chlorambucil）',
    '未監測 Azathioprine/Chlorambucil 的骨髓抑制（CBC 每 2 週前 2 個月）',
    '長期 Prednisolone 使用未搭配消化道保護（高風險犬考慮加 Omeprazole）',
    '期待 Azathioprine 立即有效（需要 2-4 週起效）',
  ],
  disease_data: null,
  diagnostic_data: null,
  procedure_data: null,
  visual_placeholders: [
    { position: '藥物治療表後', type: 'flowchart', description: 'IMHA 免疫抑制治療階梯與減量流程圖' },
    { position: '二線藥物表後', type: 'comparison_table', description: '免疫抑制劑選擇決策比較表' },
  ],
  interactive_placeholders: [],
  drug_api_links: ['Prednisolone', 'Dexamethasone', 'Mycophenolate', 'Cyclosporine', 'Azathioprine', 'Chlorambucil', 'Leflunomide', 'Budesonide'],
  references: [
    { type: 'guideline', citation: 'Swann JW, Garden OA, Fellman CL, Glanemann B, Goggs R, LeVine DN, et al. "ACVIM consensus statement on the treatment of immune-mediated hemolytic anemia in dogs." J Vet Intern Med. 2019;33(3):1141-1172. doi:10.1111/jvim.15463', relevance: 'IMHA 免疫抑制與抗血栓治療共識（本節點核心）' },
    { type: 'guideline', citation: 'LeVine DN, Kidd L, Garden OA, Brooks MB, Goggs R, Kohn B, et al. "ACVIM consensus statement on the diagnosis of immune thrombocytopenia in dogs and cats." J Vet Intern Med. 2024;38(4). doi:10.1111/jvim.16996', relevance: '近期：ITP 診斷共識（術語/排除診斷，影響免疫抑制決策）' },
    { type: 'guideline', citation: 'Garden OA, Kidd L, Mexas AM, Chang YM, Jeffery U, et al. "ACVIM consensus statement on the diagnosis of immune-mediated hemolytic anemia in dogs and cats." J Vet Intern Med. 2019;33(2):313-334. doi:10.1111/jvim.15441', relevance: 'IMHA 診斷共識（與治療共識互補）' },
    { type: 'journal', citation: 'Swann JW, Skelly BJ. "Systematic Review of Evidence Relating to the Treatment of Immune-Mediated Hemolytic Anemia in Dogs." J Vet Intern Med. 2013;27(1):1-9. doi:10.1111/jvim.12028', relevance: '免疫抑制治療證據系統性回顧' },
    { type: 'textbook', citation: 'Ettinger SJ, Feldman EC. Textbook of Veterinary Internal Medicine, 8th ed. Elsevier, 2017.', relevance: '免疫抑制治療教材' },
  ],
  is_current: true,
  created_at: now,
};

/** 消化系統疾病治療，L5 治療型 */
const contentGITherapy: NodeContent = {
  id: 'CONTENT-IM-L5-004',
  node_id: 'IM-L5-004',
  version: 2,
  summary: '消化系統疾病的治療範圍很廣：慢性腸病（CE/IBD）走階梯式治療、胰臟炎急性期靠支持療法撐、PLE 要綜合管理、肝臟疾病有自己的藥物路線。飲食管理是這整塊的地基。藥物該怎麼用，原則就是階梯式，不要一次全部開下去。',
  learning_objectives: [
    '制定 CE 的階梯式治療方案（飲食 → 抗生素 → 免疫抑制）',
    '設計胰臟炎的急性期支持療法方案',
    '制定 PLE 的綜合管理策略（飲食 + 免疫抑制 + 併發症管理）',
    '選擇肝臟疾病的適當藥物治療（SAMe、UDCA、抗纖維化）',
    '說明 Cobalamin 補充在消化道疾病中的重要性',
  ],
  key_points: [
    'CE 階梯治療：飲食試驗（水解蛋白/新型蛋白 2-4 週）→ 抗生素試驗（Metronidazole/Tylosin 2-4 週）→ 免疫抑制（Prednisolone ± 二線）',
    '胰臟炎急性期四大支柱：輸液、止痛、止吐、早期營養',
    'PLE 飲食核心：淋巴管擴張型需超低脂（< 10% DM）+ MCT oil；IBD 型需水解蛋白',
    'Cobalamin（B12）補充：犬 250-1500 μg SC q1wk × 6wk → q2wk × 6wk → q1mo。或口服高劑量每日',
    'SAMe 20 mg/kg PO SID（空腹）：肝臟保護，提供 glutathione 前驅物 + 抗氧化',
    'UDCA 10-15 mg/kg PO SID：親水性膽汁酸，取代毒性膽汁酸、促進膽汁流、抗凋亡',
    '止吐藥物：Maropitant 1-2 mg/kg PO/SC SID（NK1 receptor antagonist）、Ondansetron 0.5-1 mg/kg PO/IV BID（5-HT3 antagonist）',
  ],
  body: `# 消化系統治療

## 一、治療原理 (Treatment Principles)



### 慢性腸病 (CE) 階梯式治療

| 層級 | 治療 | 方法 | 適應症 | 證據等級 |
|------|------|------|--------|---------|
| 第一層 | 飲食試驗 | 水解蛋白或新型蛋白飲食 2-8 週 | 所有 CE 首先 | Level I |
| 第二層 | 抗生素 | [藥物:Metronidazole] 10-15 mg/kg BID 4-6wk | FRE 無效時 | Level II |
| 第二層 | 抗生素替代 | [藥物:Tylosin] 25 mg/kg BID | ARE 替代 | Level II |
| 第三層 | 免疫抑制 | [藥物:Prednisolone] 1-2 mg/kg SID→漸減 | IRE/IBD 確診 | Level I |
| 第三層+ | 合併免疫抑制 | [藥物:Chlorambucil] 4-6 mg/m2 q48h | 類固醇反應不佳 | Level II |
| 營養 | B12 補充 | [藥物:Cobalamin] 250-1500 ug SC q1-2wk | 所有 CE | Level I |
| 新興 | FMT | 糞便微生物移植 | 難治性 CE | Level III |

> ⚠️ **「第二層＝抗生素」為傳統階梯**：依近年實證（Pilla 2020、見§七），metronidazole/tylosin 傷腸道菌相且 ARE 被高估，現代不建議常規當第二步——飲食無效宜直接評估內視鏡/免疫抑制，抗生素留給肉芽腫性結腸炎等明確適應症。

### PLE 特殊治療
- 超低脂飲食 (<15% DM fat) + MCT oil，淋巴管擴張核心治療
- 免疫抑制（IBD 相關 PLE）
- [藥物:Clopidogrel] 2 mg/kg PO SID（Alb <2.0 抗血栓）
- FFP 或人血白蛋白（Alb <1.5）

### 胰臟炎治療

| 措施 | 藥物/方法 | 劑量 | 證據等級 |
|------|----------|------|---------|
| 輸液 | LRS 或 PlasmaLyte IV | 矯正脫水 + 維持 | Level I |
| 止痛 | [藥物:Buprenorphine] | 0.01-0.02 mg/kg IV q6-8h | Level I |
| 止痛重症 | [藥物:Fentanyl] CRI | 2-5 ug/kg/hr IV | Level II |
| 止吐 | [藥物:Maropitant] | 1 mg/kg SC/IV SID | Level I |
| 營養 | 腸道營養（鼻食道管） | 24h 內啟動 | Level I |

重要：禁食不再建議超過 24 小時，早期腸道營養維護腸道屏障。

### FHL 治療
- 食道管營養為核心（14-18 Fr，留置 3-6 週）
- 漸增熱量（Day 1: 25-33% RER → Day 4-5: 100% RER）
- [藥物:Vitamin K1] 0.5-1.5 mg/kg SC BID x3（FNA 前必給）
- [藥物:SAMe] 90 mg/cat PO SID + [藥物:L-Carnitine] 250-500 mg/cat/day
- 監測再餵食症候群（前 48h q12h 電解質）

## 二、藥物/方法比較 (Comparison)

§一 已列各病治療；這裡比較「同一目的下幾個藥/法怎麼挑」：

**止吐：Maropitant vs Ondansetron vs Metoclopramide**
| | Maropitant | Ondansetron | Metoclopramide |
|--|-----------|-------------|----------------|
| 靶點 | NK1 受體 | 5-HT3 受體 | D2 拮抗＋促動力 |
| 強項 | 廣效（中樞＋周邊），止吐主力 | 化療/尿毒/parvovirus 相關嘔吐強 | 兼促胃排空 |
| 限制 | 不促動力 | 不促動力 | 機械性阻塞禁用、可錐體外症狀 |

→ 重症嘔吐常 Maropitant ± Ondansetron 併用；需促動力（如術後腸無力）才加 metoclopramide。

**肝臟保護：SAMe vs UDCA vs Silibinin vs Vit E**
| 藥 | 主要作用 | 適用/注意 |
|----|---------|----------|
| SAMe | glutathione 前驅、抗氧化 | 廣泛肝病；**空腹給** |
| UDCA（ursodiol） | 親水膽汁酸、利膽、抗凋亡 | 膽汁淤積；**完全性膽道阻塞禁用** |
| Silibinin（水飛薊） | 抗氧化、抗纖維 | 輔助，常與 SAMe 併（Denamarin） |
| Vit E | 抗氧化 | 銅儲積/慢性肝炎輔助 |

→ 多採「組合」而非單一；UDCA 在完全性膽道阻塞時禁用。

**PLE 飲食：超低脂 vs 水解蛋白**
- **淋巴管擴張型**：核心是**超低脂**（< 15-20% ME fat）± MCT，降低乳糜流入腸腔。
- **IBD 相關型**：以**水解蛋白**為主，搭配免疫抑制。
- 兩型常重疊，實務上低脂＋水解可並行。

**Cobalamin：口服 vs 注射**
- 近年證據（Chang/Lidbury/Steiner 2022）：**每日高劑量口服**在 CE/EPI 低 cobalamin 犬可達**與注射相近的血中濃度**（被動濃度梯度吸收），對怕打針的飼主友善；嚴重缺乏仍可先注射衝起來。

## 三、併發症與監控 (Complications & Monitoring)

| 疾病 | 併發症 | 監測 | 頻率 |
|------|--------|------|------|
| CE/PLE | Cobalamin 缺乏 | 血清 Cobalamin | q3-6 月 |
| CE/PLE | 血栓栓塞 (Alb <2.0) | AT-III 活性/臨床徵兆 | 每次回診 |
| 胰臟炎 | SIRS/DIC | 體溫/HR/RR/凝血 | q6-12h 住院 |
| 胰臟炎 | 肝外膽管阻塞（貓） | Bilirubin/超音波 | q48h |
| FHL | 再餵食症候群 | 磷/鉀/鎂 | q12h 前 48h |
| FHL | 凝血異常 | PT/aPTT | 治療前+追蹤 |

CE 追蹤指標：CCECAI 評分 q4-8wk、Albumin（PLE q2-4wk）、體重/BCS/MCS、Cobalamin q3-6月。

## 四、預後影響 (Prognostic Impact)

| 疾病/亞型 | 預後 | 關鍵因子 |
|----------|------|---------|
| FRE | 極佳 | 飲食控制下長期緩解 |
| IRE/IBD 輕-中度 | 佳 | CCECAI <10 |
| PLE (Alb 恢復 >2.0) | 中等 | 飲食順從性 |
| PLE (Alb <1.5 持續) | 不良 | 2-5 月 |
| 犬輕度胰臟炎 | 良好 | 復發率 30-40% |
| 犬重度壞死性胰臟炎 | 謹慎 | 死亡率 25-50% |
| FHL + 積極營養 | 佳 | 存活率 >80%（原發性） |

飼主溝通：CE 多數可良好控制。飲食管理是基礎，即使用藥也需持續。胰臟炎犬需終身低脂飲食。FHL 食道管灌食是救命措施不是最後手段。

## 五、人醫借鑒 (Translational Insights)

| 人醫工具/概念 | 獸醫應用潛力 | 現況 |
|-------------|-------------|------|
| 糞菌移植（FMT） | 犬急慢性腸炎/難治型 IBD 腸道微生態重建 | 獸醫多中心回顧性研究陽性，前瞻性試驗進行中 |
| 生物製劑（抗 TNF-α/抗 IL-12/23） | 犬 IBD 難治病例精準免疫治療 | 人醫 IBD 標準治療，犬專用生物製劑開發中 |
| 新型止吐劑 Maropitant 延伸適應症 | 犬貓嘔吐以外的腸道發炎抗效果 | 抗炎機轉已確認，臨床應用擴展中 |
| 低 FODMAP 飲食治療 | 犬 IBD 飲食管理精緻化 | 人醫 IBS 標準治療，獸醫營養學探索中 |

## 六、臨床爭議與知識空缺 (Controversies & Knowledge Gaps)

| 爭議主題 | 目前立場 | 證據等級 | 研究方向 |
|---------|---------|---------|---------|
| FMT 最佳方案 | 有效但標準化不足 | Level III | 供體/頻率/途徑 |
| 抗生素在 CE 的角色 | 傾向減少使用 | Level II | dysbiosis 長期影響 |
| Cobalamin 口服 vs 注射 | 兩者可能等效 | Level II | PLE 特異性研究 |
| 貓三體炎最佳治療順序 | 先穩定胰臟炎 | Level IV | 同時 vs 序貫治療 |
| SAMe 在肝病的效益 | 廣泛使用但 RCT 不足 | Level III | 犬貓特異性 RCT |

## 七、近期實證更新 (Recent Evidence Update)

**抗生素在 CE 退場（與慢性腸病節點 IM-L3-007 一致）**
本節點 §一 的 CE 階梯仍列「第二層＝抗生素」，但近年實證（metronidazole 傷腸道菌相、ARE 被高估）已**不建議把抗生素試驗當常規第二步**——飲食無效應直接評估內視鏡/免疫抑制，抗生素留給肉芽腫性結腸炎（Boxer/法鬥、黏膜內 E. coli、fluoroquinolone 有效）等明確適應症。

**貓胰臟炎共識（Forman et al 2021, ACVIM）**：診斷靠 spec fPL＋超音波綜合判讀；治療核心＝**積極輸液＋止痛＋早期腸道營養（禁食 >24h 不再建議）**，止吐用 maropitant；常合併**三體炎（胰臟炎＋膽管炎＋IBD）**，要看共病一起治。

**Cobalamin 口服可等效注射（Chang et al 2022, JVIM）**：CE/EPI 低 cobalamin 犬每日高劑量口服可達與注射相近的血中濃度，對怕打針的飼主是友善選項；嚴重缺乏仍可先注射補起來。

【台灣落地】台灣 CE/胰臟炎/FHL 門診量大；過去習慣 CE 先給 metronidazole，依新實證宜改為「嚴格飲食試驗 → 無效再內視鏡/免疫抑制」。貓三體炎常見，胰臟炎/膽管炎/IBD 要一起看。Cobalamin 口服劑型方便長期補充。`,
  clinical_pearl: '在 CE 的階梯式治療中，飲食試驗的「嚴格執行」是最關鍵也最常失敗的環節。約 50-60% 的 CE 犬是食物反應性的，只要換對飲食就能控制。但飲食試驗失敗的最常見原因不是「飲食無效」，而是「飼主執行不嚴格」。任何零食、潔牙骨、有味道的藥物膠囊、甚至其他寵物的食物都可能導致試驗失敗。所以在開始飲食試驗前，必須花時間和飼主溝通「絕對嚴格」的重要性。另外，Cobalamin 補充是所有 CE 治療中最容易被遺忘但影響預後的步驟，B12 缺乏是獨立的不良預後因子。',
  common_mistakes: [
    '飲食試驗不夠嚴格（飼主偷餵零食或其他食物，導致假性「無反應」）',
    '胰臟炎禁食超過 24 小時（現代觀點建議早期腸道營養）',
    '所有 CE 都未測 Cobalamin（B12 缺乏影響預後且容易補充）',
    '淋巴管擴張型 PLE 使用高脂飲食（需超低脂）',
    'SAMe 與食物同時給予（需空腹以確保吸收）',
    'Albumin < 1.5 g/dL 的 PLE 犬未啟動抗血栓治療',
  ],
  disease_data: null,
  diagnostic_data: null,
  procedure_data: null,
  visual_placeholders: [
    { position: 'CE 階梯治療段落後', type: 'flowchart', description: 'CE 階梯式治療決策流程圖' },
    { position: '肝臟藥物表後', type: 'comparison_table', description: '消化系統常用藥物劑量速查表' },
  ],
  interactive_placeholders: [],
  drug_api_links: ['Prednisolone', 'Budesonide', 'Metronidazole', 'Tylosin', 'Chlorambucil', 'Maropitant', 'Ondansetron', 'SAMe', 'Ursodiol', 'Cobalamin', 'Clopidogrel', 'Buprenorphine'],
  references: [
    { type: 'journal', citation: 'Chang C, Lidbury JA, Suchodolski JS, Steiner JM. "Effect of oral or injectable supplementation with cobalamin in dogs with hypocobalaminemia caused by chronic enteropathy or exocrine pancreatic insufficiency." J Vet Intern Med. 2022;36(5):1607-1621. doi:10.1111/jvim.16528', relevance: '近期：口服 vs 注射 cobalamin 等效性' },
    { type: 'guideline', citation: 'Forman MA, Steiner JM, Armstrong PJ, Camus MS, Gaschen L, et al. "ACVIM consensus statement on pancreatitis in cats." J Vet Intern Med. 2021;35(2):703-723. doi:10.1111/jvim.16053', relevance: '貓胰臟炎診斷與治療共識' },
    { type: 'journal', citation: 'Craven MD, Washabau RJ. "Comparative pathophysiology and management of protein-losing enteropathy." J Vet Intern Med. 2019;33(2):383-402. doi:10.1111/jvim.15406', relevance: 'PLE 管理綜合回顧' },
    { type: 'journal', citation: 'Makielski K, Cullen J, O\'Connor A, Jergens AE. "Narrative review of therapies for chronic enteropathies in dogs and cats." J Vet Intern Med. 2019;33(1):11-22. doi:10.1111/jvim.15345', relevance: 'CE 治療策略回顧' },
    { type: 'textbook', citation: 'Washabau RJ, Day MJ. Canine and Feline Gastroenterology. Elsevier, 2013.', relevance: '消化系統疾病治療教材' },
  ],
  is_current: true,
  created_at: now,
};

/** 免疫介導疾病機轉，L2 機轉型 */
const contentImmuneMediated: NodeContent = {
  id: 'CONTENT-IM-L2-006',
  node_id: 'IM-L2-006',
  version: 1,
  summary: '免疫介導疾病的核心機轉涉及 Type II（抗體介導細胞破壞）和 Type III（免疫複合體沉積）超敏反應。Type II 機轉驅動 IMHA、IMT 和 IMPA，而 Type III 機轉導致腎小球腎炎和 SLE。藥物誘發的免疫反應與分子模仿為重要觸發因子。',
  learning_objectives: [
    '區分 Type II 與 Type III 超敏反應在不同免疫介導疾病中的角色',
    '說明補體活化（classical 與 alternative pathway）在免疫介導細胞破壞中的機轉',
    '解釋自體抗體形成的機轉（分子模仿、交叉反應、表位擴展）',
    '描述藥物誘發免疫反應（hapten-mediated, neoantigen formation）的機轉',
    '說明 SLE 中多器官損傷的免疫複合體沉積機轉',
  ],
  key_points: [
    'Type II 超敏反應：自體抗體（IgG/IgM）結合細胞表面抗原 → Fc receptor 介導吞噬（血管外破壞）或補體 MAC（血管內破壞）',
    'IMHA：抗紅血球抗體 → 球形紅血球（部分吞噬）+ 血管內溶血（IgM + 補體）；IMT：抗血小板抗體 → 血小板破壞/清除加速',
    'IMPA（免疫介導多發性關節炎）：免疫複合體沉積於滑膜 → 補體活化 → 嗜中性球浸潤 → 非侵蝕性關節炎',
    'Type III 超敏反應：Ab-Ag 免疫複合體形成 → 沉積在腎小球基底膜/血管壁 → 補體 C3a/C5a 趨化嗜中性球 → 蛋白酶釋放 → 組織損傷',
    'SLE：多種自體抗體（ANA、anti-dsDNA）→ 多器官免疫複合體沉積（腎/皮膚/關節/血液）→ 全身性疾病',
    '藥物誘發免疫反應：Hapten 模式（藥物結合細胞表面蛋白 → 新抗原 → 抗體產生）；Trimethoprim-sulfonamide 為犬最常見誘因',
    '分子模仿（molecular mimicry）：病原抗原結構類似自身抗原 → 抗病原免疫交叉攻擊自身組織',
    '補體活化路徑：Classical（Ab-Ag 複合體 → C1q）vs Alternative（C3 tick-over）→ 兩者匯聚於 C3 → C5b-9 MAC',
  ],
  body: `# 免疫介導疾病機轉 (Immune-Mediated Disease Pathogenesis)

## 一、Type II 超敏反應：抗體介導細胞破壞

### 核心機轉

自體抗體（IgG/IgM）結合目標細胞表面抗原，透過以下途徑清除細胞：

| 途徑 | 機轉 | 臨床對應 | 速度 |
|------|------|---------|------|
| Fc receptor 介導吞噬 | IgG-opsonized 細胞被脾臟/肝臟巨噬細胞辨識吞噬 | IMHA（血管外溶血）、IMT | 數天 |
| 補體依賴性裂解 | IgM 活化 classical pathway → C5b-9 MAC 形成 → 細胞裂解 | IMHA（血管內溶血） | 數小時 |
| ADCC | NK 細胞 Fc receptor 辨識 IgG → 釋放穿孔素/顆粒酶 | 較少見 | 數天 |

### 各疾病的 Type II 機轉

IMHA：抗紅血球表面抗原抗體 → 球形紅血球（部分吞噬後殘留）→ 再生性溶血性貧血 + 高凝血狀態（phosphatidylserine 暴露→凝血因子活化→血栓栓塞）

IMT：抗血小板膜醣蛋白（GPIIb/IIIa, GPIb）抗體 → 脾臟巨噬細胞加速清除血小板 → 血小板 < 50,000/μL → 瘀斑/黏膜出血。骨髓代償性巨核球增生。

IMPA：Type II/III 混合機轉 → 免疫複合體沉積於關節滑膜 → 補體活化 → 嗜中性球浸潤 → 非侵蝕性多發性關節炎

## 二、Type III 超敏反應：免疫複合體疾病

### 免疫複合體形成與沉積

Ab-Ag 複合體 → 小型複合體較易沉積在腎小球基底膜（高流量/高壓力濾過區域）→ 補體活化（C3a/C5a 為趨化因子）→ 嗜中性球浸潤 → 蛋白酶/自由基釋放 → 基底膜損傷 → 蛋白尿

| 疾病 | 沉積部位 | 自體抗體 | 病理特徵 |
|------|---------|---------|---------|
| 免疫複合體腎小球腎炎 | 腎小球基底膜 | 多種 | 膜性/膜增殖性腎病 |
| SLE 腎炎 | 腎小球、皮膚、關節 | ANA, anti-dsDNA | WHO class I-V |
| 類澱粉沉著症 | 腎小球（犬）、髓質（貓） | SAA 片段 | 剛果紅染色陽性 |

### SLE 的多器官損傷

SLE 為同時涉及 Type II + Type III 機轉的全身性自體免疫疾病：

- 血液：抗紅血球 Ab（IMHA）+ 抗血小板 Ab（IMT）→ Evans syndrome
- 腎臟：anti-dsDNA 免疫複合體沉積 → 蛋白流失性腎病
- 關節：免疫複合體 → 非侵蝕性多發性關節炎
- 皮膚：免疫複合體 → 真皮/表皮交界損傷 → 蝶形紅斑

## 三、自體抗體形成機轉

| 機轉 | 說明 | 範例 |
|------|------|------|
| 分子模仿 | 病原抗原結構類似自身抗原 | Babesia → 紅血球表面抗原修飾 → IMHA |
| 交叉反應 | 抗感染抗體與自身抗原交叉反應 | 鏈球菌 → 心臟瓣膜交叉反應 |
| 表位擴展 | 初始損傷暴露隱藏抗原 → 擴大免疫攻擊 | IMHA 治療後擴展至 IMT（Evans） |
| Hapten 形成 | 藥物結合細胞表面蛋白形成新抗原 | TMP-SMX → 藥物性 IMHA |
| Neoantigen | 藥物修飾自身蛋白結構 | Cephalosporins → 紅血球表面修飾 |

## 四、補體活化系統

Classical pathway（C1q 辨識 Ab-Ag → C4b2a → C3 convertase）與 Alternative pathway（C3 自發水解 → Factor B/D → C3bBb）匯聚於 C3 → C5 → C5b-9 MAC（membrane attack complex）。

臨床意義：血管內溶血的嚴重度取決於補體活化效率；IgM 活化補體能力 >> IgG；DAF (CD55) 和 CD59 為紅血球表面補體調節蛋白。

## 五、藥物誘發免疫反應

| 藥物 | 機轉 | 臨床表現 | 頻率 |
|------|------|---------|------|
| TMP-Sulfonamide | Hapten/neoantigen | 貧血、血小板低、關節炎 | 犬最常見 |
| Cephalosporins | 紅血球表面修飾 | Coombs 陽性溶血 | 偶見 |
| Methimazole | 免疫複合體 | 貓 ANA 陽性、血球減少 | 少見 |
| Propylthiouracil | 免疫介導 | 貓嚴重血球減少（已少用） | 高 |`,
  clinical_pearl: '在犬 IMHA 診斷中，約 25-40% 為繼發性。台灣最重要的繼發原因是壁蝨媒介疾病（Babesia, Ehrlichia）和藥物（TMP-Sulfonamide）。在啟動免疫抑制治療前，必須排除感染性觸發因子，否則免疫抑制可能加重感染。SNAP 4Dx Plus 和 PCR 應列入所有 IMHA 犬的基本檢查。',
  common_mistakes: [
    '混淆 Type II（細胞表面抗體）與 Type III（免疫複合體沉積）機轉的臨床對應',
    '忽略藥物誘發免疫反應的可能性，未詳細詢問用藥史',
    '不理解 Evans syndrome（IMHA + IMT 並存）為表位擴展的臨床表現',
    '將 SLE 簡化為單一型別的超敏反應，實際為 Type II + Type III 混合',
    '忽略補體活化在血管內溶血（IgM 介導）與血管外溶血（IgG 介導）中的差異',
  ],
  disease_data: null,
  diagnostic_data: null,
  procedure_data: null,
  visual_placeholders: [
    { position: 'Type II 超敏反應表後', type: 'flowchart', description: 'Type II vs Type III 超敏反應機轉比較流程圖' },
    { position: '補體活化段落後', type: 'flowchart', description: '補體 Classical vs Alternative pathway 匯聚圖' },
  ],
  interactive_placeholders: [],
  drug_api_links: ['Prednisolone', 'Mycophenolate', 'Cyclosporine', 'Azathioprine', 'Trimethoprim-Sulfonamide'],
  references: [
    { type: 'guideline', citation: 'Garden OA et al. "ACVIM consensus statement on the diagnosis of immune-mediated hemolytic anemia in dogs and cats." J Vet Intern Med. 2019;33(2):313-334.', relevance: 'IMHA 免疫機轉與診斷共識' },
    { type: 'textbook', citation: 'Tizard IR. Veterinary Immunology: An Introduction, 10th ed. Elsevier, 2018. Chapters 30-32: Type II, III Hypersensitivity and Autoimmunity.', relevance: '獸醫免疫學超敏反應教材' },
    { type: 'journal', citation: 'Trepanier LA. "Idiosyncratic toxicity associated with potentiated sulfonamides in the dog." J Vet Pharmacol Ther. 2004;27(3):129-138.', relevance: '藥物誘發免疫反應機轉' },
    { type: 'textbook', citation: 'Nelson RW, Couto CG. Small Animal Internal Medicine, 6th ed. Elsevier, 2020. Chapter 86: Immune-Mediated Diseases.', relevance: '免疫介導疾病臨床教材' },
  ],
  is_current: true,
  created_at: now,
};

/** 急性腎損傷 (AKI)，疾病型 */
const contentAKI: NodeContent = {
  id: 'CONTENT-IM-L3-013',
  node_id: 'IM-L3-013',
  version: 2,
  summary: 'AKI 就是腎功能突然壞掉，主要看到急性氮血症跟尿量變化。IRIS AKI 分級系統把它分成 Grade I-V。常見的兇手有腎毒素（百合花中毒在貓、葡萄/葡萄乾在犬、乙二醇、NSAIDs）、腎缺血、感染。早期積極輸液是關鍵。台灣亞熱帶氣候加上居家環境的特性，百合花（花市便宜又常見）是貓 AKI 最重要、又最容易預防的兇手。鉤端螺旋體感染則是台灣犬 AKI 不能漏掉的本土病因。',
  learning_objectives: [
    '運用 IRIS AKI 分級系統（Grade I-V）正確評估 AKI 嚴重度',
    '區分腎前性、腎性與腎後性 AKI 的病因與診斷策略',
    '列舉犬貓最常見的腎毒素並說明各自的損傷機轉',
    '制定 AKI 的積極輸液治療與尿量監測方案',
    '說明腎臟替代療法（RRT）的適應症與時機',
  ],
  key_points: [
    'IRIS AKI 分級：Grade I（非氮血症但有 AKI 證據）、Grade II（輕度氮血症 Cre 1.6-2.5 犬/1.6-2.8 貓）、Grade III（中度）、Grade IV（重度）、Grade V（Cre > 10）',
    '病因三分類：腎前性（低血容量/低血壓）、腎性（腎毒素/腎炎/缺血）、腎後性（尿路阻塞）',
    '貓常見腎毒素：百合花（所有部位均有毒，微量即可致命）、乙二醇、NSAIDs',
    '犬常見腎毒素：葡萄/葡萄乾（機轉不明，個體差異大）、乙二醇、NSAIDs、Aminoglycosides',
    '急性 vs 慢性鑑別：腎臟大小（AKI 正常或增大 vs CKD 萎縮）、貧血（CKD 非再生性）、腎臟結構',
    '治療核心：積極靜脈輸液（糾正脫水 + 維持尿量 > 1-2 mL/kg/hr）',
    'RRT 適應症：少尿/無尿對利尿劑無反應、高鉀血症 > 8 mEq/L、嚴重酸中毒、尿毒症合併神經症狀',
  ],
  body: `# 急性腎損傷 (Acute Kidney Injury, AKI)

## 一、病理機制 (Pathophysiology)

AKI 核心為腎小管上皮細胞急性損傷，機轉依病因而異：

腎毒素損傷：毒物經腎小管濃縮→直接損傷腎小管上皮細胞→細胞壞死/凋亡→管腔阻塞（脫落細胞+碎片形成管型）→腎小管反向滲漏→GFR 急降

缺血性損傷：腎臟灌注不足→S3 近端小管（外髓質）最易受損（高代謝需求+邊緣血供）→ATP 耗竭→Na-K ATPase 極性喪失→細胞腫脹壞死

| 毒素 | 物種 | 損傷機轉 | 特徵 |
|------|------|---------|------|
| 百合花（Lilium/Hemerocallis） | 貓 | 近端腎小管直接毒性 | 所有部位有毒，花粉亦可 |
| 葡萄/葡萄乾 | 犬 | 不明（tartaric acid 假說） | 個體差異極大 |
| 乙二醇 | 犬貓 | 草酸鈣結晶沉積 → 小管阻塞 | 12-24 hr 內治療關鍵 |
| NSAIDs | 犬貓 | 抑制 PGE2 → 入球小動脈收縮 → 髓質缺血 | 劑量相關 |
| Aminoglycosides | 犬貓 | 溶酶體磷脂蓄積 → 近端小管壞死 | 累積劑量毒性 |

## 二、臨床表現與診斷 (Clinical Signs & Diagnosis)

| 臨床表現 | 說明 | 鑑別意義 |
|---------|------|---------|
| 急性食慾廢絕/嘔吐 | 尿毒素蓄積 | 突發性（vs CKD 漸進） |
| 少尿/無尿 | 尿量 < 1 mL/kg/hr | 嚴重 AKI 指標 |
| 多尿 | 恢復期或部分 AKI | 需監測電解質流失 |
| 腹痛 | 腎腫脹或中毒 | 乙二醇中毒常見 |
| 口腔潰瘍 | 嚴重尿毒症 | 較晚期表現 |

### IRIS AKI 分級系統

| Grade | 血清肌酐 | 臨床意義 | 處置等級 |
|-------|---------|---------|---------|
| I | < 1.6 mg/dL（有 AKI 證據） | 非氮血症期 AKI | 積極輸液 + 監測 |
| II | 1.6-2.5 犬 / 1.6-2.8 貓 | 輕度氮血症 | 積極輸液 + 利尿劑考慮 |
| III | 2.6-5.0 犬 / 2.9-5.0 貓 | 中度氮血症 | ICU 監護 |
| IV | 5.1-10.0 | 重度氮血症 | 考慮 RRT |
| V | > 10.0 | 極重度 | RRT 強烈建議 |

亞分級：依尿量（O: oliguria < 1 mL/kg/hr, NO: non-oliguric, A: anuric）

### 腎前/腎/腎後鑑別

| 類別 | USG | BUN:Cre | 輸液反應 | 超音波 |
|------|-----|---------|---------|--------|
| 腎前性 | > 1.030 犬/1.035 貓 | > 20:1 | 12-24 hr 改善 | 正常 |
| 腎性 | < 1.025 | 10-15:1 | 無明顯改善 | 腎腫大/皮髓質交界模糊 |
| 腎後性 | 變異 | 變異 | 無改善 | 腎盂積水/膀胱破裂 |

## 三、治療策略 (Treatment)

| 階段 | 處置 | 藥物與劑量 |
|------|------|-----------|
| 初始復甦 | 糾正脫水 + 恢復灌注 | 等張晶體液（LRS/0.9% NaCl）脫水量於 4-6 hr 補回 |
| 維持輸液 | 維持尿量 > 1-2 mL/kg/hr | 維持量 + 損失量 + 持續損失 |
| 利尿劑 | 補液充足後仍少尿 | [藥物:Furosemide] 2-6 mg/kg IV bolus 或 CRI 0.5-1 mg/kg/hr |
| 甘露醇 | 乙二醇中毒早期 | [藥物:Mannitol] 0.5-1 g/kg IV over 20 min |
| 高鉀處理 | K > 6.5 mEq/L | Regular insulin 0.25-0.5 U/kg IV + Dextrose；Calcium gluconate 10% 0.5-1 mL/kg slow IV |
| 止吐 | 尿毒症噁心 | [藥物:Maropitant] 1 mg/kg SC SID |

乙二醇解毒劑：[藥物:Fomepizole] 犬 20 mg/kg IV 首劑→後續 15-5 mg/kg；貓效果差（貓改用 Ethanol 20% 5 mL/kg IV q6h）

RRT 適應症：無尿 > 6-12 hr 不反應利尿劑、K > 8 mEq/L、嚴重代謝性酸中毒（pH < 7.1）、volume overload、尿毒症神經症狀

## 四、併發症與監控 (Complications & Monitoring)

| 併發症 | 機轉 | 監測 | 處理 |
|--------|------|------|------|
| 高鉀血症 | 腎臟排鉀功能喪失 | ECG + 血鉀 q4-6h | Insulin-dextrose, Ca gluconate |
| Volume overload | 過度輸液 + 少尿 | 體重 BID、呼吸速率 | 降低輸液速率、利尿劑 |
| 代謝性酸中毒 | 酸排泄↓ | 血氣分析 | NaHCO3 補充 |
| 高磷血症 | 磷排泄↓ | 血磷 | 磷結合劑 |

尿量監測：留置導尿管 + 封閉式集尿系統、每 1-4 hr 記錄尿量、目標 > 1-2 mL/kg/hr

## 五、人醫借鑑 (Translational Insights)

| 人醫概念/工具 | 與獸醫 AKI 的連結 | 現況 |
|-------------|----------------|------|
| KDIGO/AKIN AKI 分期 | IRIS AKI 分級概念對應人類 KDIGO（creatinine + 尿量分期） | 跨物種分級框架共通 |
| 腎臟替代療法（IHD / CRRT） | 人腎科透析技術直接移植獸醫（間歇性血液透析、連續性 CRRT） | 轉介中心已提供，普及受成本/設備限 |
| 新型腎小管損傷標記（NGAL、KIM-1、cystatin C） | 比 creatinine 更早偵測腎小管損傷 | 人醫已臨床用；獸醫 SDMA、cystatin C 研究中 |
| 限制性輸液 / 「ins-and-outs」 | 人 ICU AKI 避免液體過載理念 | 獸醫採同樣理念，體重+尿量導向輸液 |

## 六、臨床爭議與知識空缺 (Controversies & Knowledge Gaps)

| 議題 | 立場 | Evidence Level |
|------|------|---------------|
| Furosemide 於少尿型 AKI 的角色 | 可促尿量但未證實改善存活或腎結局（人醫亦然）；僅在充分水合後試用 | Level II |
| Mannitol 的腎保護 | 證據有限、過量恐加重；多保留特定情境 | Level III |
| 最佳輸液策略（積極 vs 保守） | 初期復甦後須避免液體過載（worsens outcome）；體重/尿量導向 | Level II |
| SDMA 於 AKI 的判讀 | 早期敏感但無法區分 AKI/CKD、非腎性（如淋巴瘤）亦可升 | Level III |
| RRT 啟動時機 | 難治少尿/無尿、致命高鉀/酸中毒/容量過載為適應症；最佳「早 vs 晚」未定 | Level III |
| AKI → CKD 轉化 | 存活者顯著比例進展為 CKD，需長期追蹤 | Level II |

## 七、近期實證更新（待 DVM 覆核）

1. **IRIS AKI 分級廣泛採用**：強調「即使非氮血症（Grade I）也算 AKI」，以連續 creatinine 變化 + 尿量分層、並標註 oliguric/non-oliguric 與是否需 RRT。
2. **液體過載是獨立不良預後因子**（人醫與獸醫一致）：初期復甦後改採「ins-and-outs」配對輸液、每日量體重，勿盲目持續大量輸液。
3. **SDMA 的限制**：早於 creatinine 升高但不具 AKI 特異性、無法分 AKI/CKD，且淋巴瘤等非腎疾病可升——判讀須謹慎。
4. **鉤端螺旋體**為台灣犬 AKI 重要且**可逆/人畜共通**病因（Sykes 2011 ACVIM 共識）：疑似者早期 doxycycline + 支持治療、注意人員防護；疫苗可預防。
5. **RRT（IHD/CRRT）** 對特定重症 AKI 可挽救生命並爭取腎臟恢復時間，惟台灣可及性有限。
> 臨床內容與所有劑量需獸醫師依現行指引與仿單核對。`,
  clinical_pearl: '百合花中毒是貓 AKI 最重要的可預防病因。所有百合屬（Lilium）和萱草屬（Hemerocallis）植物對貓均有腎毒性，包括花瓣、葉片、花粉甚至花瓶水。貓只要舔到少量花粉即可導致致命性 AKI。治療窗口為接觸後 18 小時內開始積極輸液。飼主教育是最重要的預防措施。',
  common_mistakes: [
    '未區分腎前性與腎性 AKI，脫水犬的高 BUN/Cre 可能單純為腎前性（補液後迅速改善）',
    '在尚未充分補液的情況下使用利尿劑（加重腎臟缺血）',
    '忽略尿量監測，少尿/無尿是 AKI 預後的關鍵指標',
    '乙二醇中毒超過 12-24 小時才開始治療（此時腎損傷多已不可逆）',
    '貓百合花中毒未在 18 小時內啟動積極輸液',
  ],
  disease_data: {
    signalment: '任何年齡、品種犬貓均可發生。幼年動物較常見中毒性 AKI（好奇心強、誤食毒物）。老年動物因 NSAIDs 使用和麻醉後低血壓較常見缺血性 AKI。貓百合花中毒無品種偏好。',
    etiology: '腎前性：脫水、出血、心輸出量不足、麻醉低血壓。腎性：腎毒素（百合花、葡萄/葡萄乾、乙二醇、NSAIDs、Aminoglycosides）、鉤端螺旋體、腎盂腎炎、缺血再灌注損傷。腎後性：尿道阻塞、膀胱破裂、輸尿管結石。',
    pathogenesis: '腎毒素/缺血 → 腎小管上皮細胞壞死 → 管腔阻塞（管型形成）+ 反向滲漏 → GFR 急降 → 氮血症 + 電解質/酸鹼異常。嚴重者發展為少尿/無尿性腎衰竭。可逆性取決於損傷程度與治療時機。',
    clinical_signs: [
      { sign: '急性嘔吐/厭食', category: 'primary', description: '尿毒素蓄積引起噁心，突發性發作' },
      { sign: '少尿/無尿', category: 'primary', description: '尿量 < 1 mL/kg/hr 為嚴重指標' },
      { sign: '嗜睡/虛弱', category: 'primary', description: '尿毒症與電解質失衡' },
      { sign: '腹痛', category: 'secondary', description: '腎腫脹或中毒性腹膜刺激' },
      { sign: '多尿', category: 'secondary', description: '恢復期或非少尿型 AKI' },
      { sign: '口腔潰瘍', category: 'secondary', description: '嚴重尿毒症晚期表現' },
    ],
    staging: { system: 'IRIS AKI Grading System', stages: ['Grade I：Cre < 1.6，有 AKI 證據（病史/影像/生物標記）', 'Grade II：Cre 1.6-2.5 犬 / 1.6-2.8 貓', 'Grade III：Cre 2.6-5.0 犬 / 2.9-5.0 貓', 'Grade IV：Cre 5.1-10.0', 'Grade V：Cre > 10.0'] },
    differential_diagnosis: [
      { condition: 'CKD', key_differentiator: '腎臟萎縮、非再生性貧血、病程漸進；AKI 腎臟正常或增大' },
      { condition: '腎前性氮血症', key_differentiator: 'USG > 1.030、BUN:Cre > 20:1、補液後 12-24 hr 改善' },
      { condition: '腎後性阻塞', key_differentiator: '超音波見腎盂積水/膀胱極度膨脹/尿道阻塞' },
      { condition: 'CKD 急性惡化（AKI on CKD）', key_differentiator: '有 CKD 病史但 Cre 急遽升高，腎臟可能萎縮' },
    ],
    diagnostic_workup: '1. 詳細病史（毒物接觸？藥物？）→ 2. 血檢（BUN/Cre/SDMA/電解質/血氣）→ 3. 尿液分析（USG/沉渣/管型/草酸鈣結晶）→ 4. 腹腔超音波（腎臟大小/結構/腎盂）→ 5. 留置導尿管監測尿量 → 6. 必要時乙二醇快篩 → 7. Leptospira PCR（考慮時）',
    treatment_protocol: '立即：積極靜脈輸液（等張晶體液，糾正脫水後維持 2-3 倍維持量）。少尿時：先確認充分水合→ Furosemide 2-6 mg/kg IV。高鉀 > 6.5：Calcium gluconate + Insulin-Dextrose。乙二醇中毒：Fomepizole（犬）或 Ethanol（貓）。止吐：Maropitant。嚴重者轉介 RRT。',
    prognosis: '非少尿型 AKI 經積極治療：預後良好（存活率 > 50-60%）。少尿/無尿型：預後謹慎至不良（存活率 20-40%）。乙二醇中毒 > 24 hr 才治療：預後極差。百合花中毒 < 18 hr 治療：預後較佳。AKI 存活者約 30% 可能發展為 CKD。',
    monitoring: '前 24-48 hr：每 4-6 hr 監測尿量、電解質、血氣。穩定後 q8-12h。每日監測體重（評估水分平衡）。Cre/BUN 每 12-24 hr。出院後每 1-2 週追蹤腎功能至穩定。長期追蹤評估是否進展為 CKD。',
    owner_communication: 'AKI 屬於急診，要住院加護。費用會比較高，尤其是要做 RRT 的話。越早處理預後越好。有的狗貓會完全恢復，有的會留下後遺症變慢性腎病。家裡有毒的東西要移開，百合花、乙二醇（防凍劑）、人用 NSAIDs 都不能留在動物碰得到的地方。',
  },
  diagnostic_data: null,
  procedure_data: null,
  visual_placeholders: [
    { position: 'IRIS AKI 分級表後', type: 'flowchart', description: 'AKI 診斷與分級決策流程圖' },
    { position: '腎前/腎/腎後鑑別表後', type: 'comparison_table', description: '腎前/腎/腎後性 AKI 鑑別比較圖' },
  ],
  interactive_placeholders: [],
  drug_api_links: ['Furosemide', 'Mannitol', 'Fomepizole', 'Maropitant', 'Calcium gluconate'],
  references: [
    { type: 'guideline', citation: 'IRIS (International Renal Interest Society). IRIS Grading of Acute Kidney Injury. Available at: http://www.iris-kidney.com/', relevance: 'AKI 分級標準' },
    { type: 'journal', citation: 'Langston C. "Acute uremia." In: Ettinger SJ, Feldman EC. Textbook of Veterinary Internal Medicine, 8th ed. Elsevier, 2017. pp 1969-1985.', relevance: 'AKI 診斷與治療教材' },
    { type: 'guideline', citation: 'Sykes JE, et al. 2010 ACVIM Small Animal Consensus Statement on Leptospirosis: diagnosis, epidemiology, treatment, and prevention. J Vet Intern Med. 2011;25(1):1-13. doi:10.1111/j.1939-1676.2010.0654.x.', relevance: '鉤端螺旋體（犬 AKI 重要可逆/人畜共通病因）ACVIM 共識' },
    { type: 'journal', citation: 'Bennett SL, Abraham LA. "Treatment of acute kidney injury." Vet Clin North Am Small Anim Pract. 2022;52(3):601-612.', relevance: 'AKI 治療最新回顧' },
    { type: 'textbook', citation: 'Ettinger SJ, Feldman EC, Côté E. Textbook of Veterinary Internal Medicine, 8th ed. Elsevier, 2017. Chapter 311: Acute Kidney Injury.', relevance: 'AKI 診斷與治療標準教科書' },
  ],
  is_current: true,
  created_at: now,
};

/** 蛋白質流失性腎病 (PLN)，疾病型 */
const contentPLN: NodeContent = {
  id: 'CONTENT-IM-L3-014',
  node_id: 'IM-L3-014',
  version: 2,
  summary: 'PLN 的核心特徵是持續性腎小球蛋白尿（UPC > 2.0）。最常見的病因是免疫複合體腎小球腎炎，類澱粉沉著症也佔一部分。Soft-coated Wheaten Terrier 跟 Bernese Mountain Dog 有遺傳傾向。確診的金標準是腎臟切片做三聯染色（光學/免疫螢光/電子顯微鏡）。治療三條路一起走：ACEi/ARB 壓蛋白尿、免疫複合體型加免疫抑制、白蛋白掉下來時開抗血栓預防。台灣這邊要特別小心兩個繼發病因：心絲蟲（Dirofilaria 引起免疫複合體腎炎）跟壁蝨媒介疾病（Ehrlichia）。沒有做預防的犬隻盛行率偏高。',
  learning_objectives: [
    '定義 PLN 並說明 UPC > 2.0 作為診斷標準的意義',
    '區分免疫複合體腎小球腎炎與類澱粉沉著症的病理與治療差異',
    '說明腎臟切片三聯染色（光學/免疫螢光/電子顯微鏡）在 PLN 診斷中的角色',
    '列舉 PLN 遺傳傾向犬種並描述其遺傳機轉',
    '制定 PLN 的抗蛋白尿、免疫抑制與抗血栓治療方案',
  ],
  key_points: [
    'PLN 定義：持續性腎小球蛋白尿 UPC > 2.0（排除腎前性和腎後性蛋白尿）',
    '主要病因：免疫複合體腎小球腎炎（膜性/膜增殖性）、類澱粉沉著症、遺傳性腎病',
    '遺傳傾向：Soft-coated Wheaten Terrier（PLN/PLE 綜合症）、Bernese Mountain Dog（膜增殖性 GN）、Shar-Pei（類澱粉沉著）',
    '腎切片三聯檢查：光學顯微鏡（形態學）+ 免疫螢光（IgG/IgM/C3 沉積模式）+ 電子顯微鏡（沉積物位置）',
    'IRIS 蛋白尿亞分期：UPC < 0.2 非蛋白尿 / 0.2-0.5 犬邊緣 / > 0.5 犬蛋白尿',
    '治療三柱：(1) ACEi/ARB 抗蛋白尿 (2) 免疫抑制（免疫複合體型）(3) 抗血栓預防（Albumin < 2.0 時）',
    '抗血栓重要性：PLN 合併低白蛋白血症時血栓栓塞風險極高（抗凝血因子 III 經尿流失）',
    '近期：telmisartan（ARB）降蛋白尿證據增強（Miyagawa 2020）；免疫抑制應依腎切片病理決定（IRIS 2013，免疫複合體型才有效）',
  ],
  body: `# 蛋白質流失性腎病 (Protein-Losing Nephropathy, PLN)

## 一、病理機制 (Pathophysiology)

### 腎小球蛋白尿機轉

正常腎小球濾過屏障由三層組成：內皮細胞窗孔 + 腎小球基底膜（GBM）+ 足細胞裂隙隔膜。三者共同構成大小選擇性與電荷選擇性屏障。

免疫複合體腎小球腎炎：循環免疫複合體或原位免疫複合體沉積於 GBM → 補體活化 → C5a 趨化嗜中性球/巨噬細胞 → 蛋白酶與氧化物釋放 → GBM 損傷 + 足細胞足突融合 → 大分子蛋白（白蛋白）濾出

類澱粉沉著症：慢性炎症→SAA 蛋白持續升高→SAA 片段錯誤折疊→不溶性纖維沉積於腎小球（犬）或髓質間質（貓）→ 物理性阻塞濾過屏障→蛋白尿

| 病理類型 | IF 特徵 | EM 特徵 | 好發品種 |
|---------|---------|---------|---------|
| 膜性腎病 | IgG + C3 顆粒狀 | 上皮下沉積 | 多品種 |
| 膜增殖性 GN | IgG + IgM + C3 | 內皮下 + 系膜沉積 | Bernese Mountain Dog |
| 類澱粉沉著 | 陰性 | 纖維狀沉積 | Shar-Pei, Beagle |
| 局灶節段硬化 | 陰性 | 足突融合 | 遺傳性 |

## 二、臨床表現與診斷 (Clinical Signs & Diagnosis)

| 臨床表現 | 機轉 | 嚴重度 |
|---------|------|--------|
| 蛋白尿（UPC > 2.0） | 腎小球屏障損傷 | 主要發現 |
| 低白蛋白血症 | 尿液蛋白流失 > 肝臟合成 | Albumin < 2.0 g/dL |
| 肢端水腫/腹水 | 血漿膠體滲透壓下降 | Albumin < 1.5 g/dL |
| 血栓栓塞 | AT-III 流失 + 高凝狀態 | 肺/腎/腸系膜血管 |
| 漸進性氮血症 | 腎小球硬化 | 晚期 |
| 高血壓 | RAAS 活化 + 鈉滯留 | 常見併發症 |

### 診斷流程

1. 篩檢：UPC > 0.5（犬）持續 > 2 次 → 確認腎小球蛋白尿
2. 排除：感染（Leptospira, Ehrlichia, Borrelia）、腫瘤、Cushing's、高血壓
3. 評估：Cre/SDMA（IRIS 分期）+ 血壓 + 膽固醇 + AT-III + Albumin
4. 確診：腎臟切片（超音波引導 Tru-Cut 或手術切片）→ 三聯染色

| 檢查 | 目的 | 臨床意義 |
|------|------|---------|
| UPC | 蛋白尿定量 | > 2.0 強烈提示腎小球疾病 |
| 血清白蛋白 | 流失嚴重度 | < 2.0 需抗血栓；< 1.5 需膠體 |
| AT-III 活性 | 血栓風險 | < 75% 血栓風險明顯增加 |
| 膽固醇 | 腎病症候群 | 高膽固醇 + 低白蛋白 + 蛋白尿 |

## 三、治療策略 (Treatment)

| 治療目標 | 藥物 | 劑量 | 證據等級 |
|---------|------|------|---------|
| 抗蛋白尿 | [藥物:Benazepril] (ACEi) | 0.5 mg/kg PO SID-BID | Level I |
| 抗蛋白尿 | [藥物:Telmisartan] (ARB) | 1 mg/kg PO SID | Level I |
| 免疫抑制（IC-GN） | [藥物:Mycophenolate] | 10 mg/kg PO BID | Level III |
| 抗血栓（Alb < 2.0） | [藥物:Clopidogrel] | 2 mg/kg PO SID | Level II |
| 抗血栓（高風險） | 低劑量 Aspirin 追加 | 1-2 mg/kg PO SID | Level III |
| 抗高血壓 | [藥物:Amlodipine] | 0.1-0.25 mg/kg PO SID | Level II |

IRIS 蛋白尿亞分期指導治療：UPC 0.5-1.0 → ACEi/ARB 單藥；UPC 1.0-2.0 → ACEi + ARB 合併；UPC > 2.0 → 上述 + 腎切片考慮免疫抑制

類澱粉沉著症：無有效治療。控制基礎炎症源、支持性治療、ACEi/ARB 延緩蛋白尿。預後不良。

## 四、遺傳性 PLN

| 品種 | 病理 | 遺傳模式 | 基因檢測 |
|------|------|---------|---------|
| Soft-coated Wheaten Terrier | PLN + PLE 綜合症 | 多基因 | 可用（NPHS1 等） |
| Bernese Mountain Dog | 膜增殖性 GN | 不明 | 研究中 |
| English Cocker Spaniel | 遺傳性腎病 | 常染色體隱性 | COL4A4 |
| Shar-Pei | 腎類澱粉沉著（髓質間質為主） | 與家族性 Shar-Pei Fever 相關 | HAS2 |

## 五、人醫借鑒 (Translational Insights)

| 人醫概念 | 獸醫 PLN 應用 | 現況 |
|---------|-------------|------|
| 腎病症候群 RAAS 阻斷（ACEi/ARB）抗蛋白尿 | 犬 PLN 一線抗蛋白尿主軸 | 已是標準；telmisartan（ARB）證據增加 |
| 抗 PLA2R 抗體（人原發膜性腎病標記） | 犬膜性腎病的血清標記與療效監測 | 人醫已臨床用；獸醫研究中、尚未常規 |
| 腎病症候群抗凝（高凝狀態） | 低白蛋白 PLN 犬抗血栓預防 | 已納入 2019 ACVIM 抗血栓共識邏輯 |
| 腎切片病理分類（膜性/MPGN/FSGS） | 依病理決定要不要免疫抑制 | IRIS 2013 共識核心：依 established pathology |

## 六、臨床爭議與知識空缺 (Controversies & Knowledge Gaps)

| 爭議議題 | 現況 | Evidence Level |
|---------|------|---------------|
| 經驗性免疫抑制 vs 腎切片先行 | IRIS 2013 傾向「有病理才免疫抑制」（免疫複合體型才有效）；但切片可近性/風險使部分採經驗性 | Level III |
| 免疫複合體 GN 用哪個免疫抑制劑 | MMF 常用，但缺頭對頭 RCT，多為專家意見 | Level III |
| ACEi vs ARB vs 兩者併用 | 單藥不夠時併用；telmisartan 近年證據佳，最佳組合未定 | Level II-III |
| 抗血栓的起始門檻（白蛋白多低才開） | 多以 Alb <2.0 為界，但確切閾值與藥物選擇仍有爭議 | Level III |
| 類澱粉沉著 vs 免疫複合體的鑑別 | 必須腎切片＋特殊染色（Congo red）；治療方向天差地別 | Level II |

## 七、近期實證更新 (Recent Evidence Update)

**抗蛋白尿：telmisartan（ARB）證據增強（Miyagawa et al 2020, Res Vet Sci）**
RAAS 阻斷仍是 PLN 抗蛋白尿的主軸；近年 telmisartan（ARB）在犬降蛋白尿與收縮壓的證據增加，對 ACEi 反應不足或不耐受者是好選項；UPC 未達標時可 ACEi＋ARB 併用。治療目標不變：**UPC 下降 >50% 或降到 <0.5**，並追蹤腎功能與血壓。

**免疫抑制要「有病理才用」（IRIS 2013 共識）**
IRIS Canine GN 共識的核心訊息：**免疫抑制應依腎切片病理（established pathology）決定**——只有免疫複合體型 GN 才可能受益，類澱粉沉著／硬化型用了無效還添毒性。臨床現實是切片可近性受限，但「不分型就一律免疫抑制」是該避免的；多數免疫抑制建議仍為專家意見（缺 RCT）。

**抗血栓是 PLN 的標準配備（呼應 2019 ACVIM CURATIVE 抗血栓共識）**
低白蛋白／腎病症候群是高凝狀態（AT-III 隨尿流失），**肺栓塞是主要死因之一**——Alb <2.0 即開抗血栓預防（clopidogrel ± 低劑量 aspirin），別等血栓事件發生才動手。

【台灣落地】台灣 PLN 務必把兩個本土繼發病因排乾淨：**心絲蟲（Dirofilaria 免疫複合體腎炎）與壁蝨媒介（Ehrlichia/Babesia/Leishmania）**——沒做預防的犬盛行率高，原發病不治、單壓蛋白尿效果有限。腎切片三聯染色限大型轉介中心，基層至少要把感染排除＋ACEi/ARB＋低白蛋白時抗血栓做好。`,
  clinical_pearl: 'PLN 犬只要 UPC 超過 3.5、白蛋白又掉到 2.0 g/dL 以下，血栓栓塞的風險就高得嚇人。AT-III 跟著尿液一直流掉，抗凝能力被掏空，加上低白蛋白血症又會推著肝臟多合成凝血因子，兩件事一起發酵。臨床最常爆掉的地方是肺動脈。所以只要 Albumin < 2.0 的 PLN 犬，抗血栓預防（Clopidogrel 加減低劑量 Aspirin）就要開下去，不要等到真的血栓事件才動手。',
  common_mistakes: [
    '未區分腎小球蛋白尿與腎小管/腎後性蛋白尿，UPC > 2.0 幾乎確定為腎小球疾病',
    '未進行腎臟切片就直接開始免疫抑制，類澱粉沉著症對免疫抑制無效',
    '忽略抗血栓治療，低白蛋白 PLN 犬死於血栓的比例遠高於死於腎衰竭',
    '單純依靠 ACEi 而忽略 UPC 追蹤，治療目標是 UPC 下降 > 50% 或降至 < 0.5',
    'Soft-coated Wheaten Terrier 未同時篩檢 PLE（PLN + PLE 常並存）',
  ],
  disease_data: {
    signalment: '中大型犬較常見。遺傳傾向品種：Soft-coated Wheaten Terrier（PLN/PLE 綜合症）、Bernese Mountain Dog、English Cocker Spaniel、Shar-Pei。中年至老年犬。貓 PLN 較少見但可發生（類澱粉沉著於 Abyssinian/Siamese）。',
    etiology: '免疫複合體腎小球腎炎（最常見，50-70%）：感染抗原（Ehrlichia, Borrelia, Leishmania, Dirofilaria）、腫瘤抗原、自體免疫。類澱粉沉著症（10-20%）：慢性炎症 → SAA 蛋白沉積。遺傳性腎小球疾病（品種特異）。特發性（10-20%）。',
    pathogenesis: '免疫複合體沉積於腎小球基底膜 → 補體活化 + 發炎細胞浸潤 → 腎小球損傷 + 足細胞足突融合 → 蛋白濾出 → 蛋白尿 → 低白蛋白血症 → 水腫/血栓 → 腎小球硬化 → 進行性 CKD。',
    clinical_signs: [
      { sign: '蛋白尿', category: 'primary', description: 'UPC > 2.0，常為偶然發現' },
      { sign: '肢端水腫/腹水', category: 'primary', description: 'Albumin < 1.5 g/dL 時出現' },
      { sign: '體重減輕', category: 'primary', description: '蛋白質流失與食慾下降' },
      { sign: '血栓栓塞', category: 'secondary', description: '肺血栓最常見，呼吸急促/猝死' },
      { sign: '高血壓', category: 'secondary', description: 'RAAS 活化，可致視網膜病變' },
    ],
    staging: { system: 'IRIS CKD Staging + Proteinuria Sub-staging', stages: ['非蛋白尿：UPC < 0.2', '邊緣蛋白尿：UPC 0.2-0.5（犬）/ 0.2-0.4（貓）', '蛋白尿：UPC > 0.5（犬）/ > 0.4（貓）', '腎小球蛋白尿：UPC > 2.0（強烈提示腎小球疾病）'] },
    differential_diagnosis: [
      { condition: 'CKD（腎小管性蛋白尿）', key_differentiator: 'UPC 通常 < 2.0；腎小管標記蛋白升高' },
      { condition: 'PLE（蛋白流失性腸病）', key_differentiator: '低白蛋白但 UPC 正常；同時低球蛋白' },
      { condition: '肝臟合成不足', key_differentiator: '低白蛋白但 UPC 正常；膽汁酸/NH3 異常' },
      { condition: '感染性腎炎', key_differentiator: '鉤端螺旋體/萊姆病血清學/PCR 陽性' },
    ],
    diagnostic_workup: '1. 確認持續性蛋白尿（≥2 次 UPC > 0.5）→ 2. 排除感染（Leptospira, Ehrlichia, Borrelia PCR/血清學）→ 3. 排除 Cushing/腫瘤 → 4. 血壓/膽固醇/AT-III/白蛋白 → 5. IRIS 分期 → 6. 腎臟超音波 → 7. 腎臟切片三聯染色（光學/IF/EM）',
    treatment_protocol: '基礎：ACEi (Benazepril 0.5 mg/kg SID-BID) 或 ARB (Telmisartan 1 mg/kg SID)。UPC > 2.0 + 免疫複合體型：加 Mycophenolate 10 mg/kg BID。Albumin < 2.0：Clopidogrel 2 mg/kg SID 抗血栓。高血壓：Amlodipine。腎臟處方飲食。類澱粉沉著：支持性治療為主。',
    prognosis: '免疫複合體 GN 經免疫抑制 + 抗蛋白尿治療：UPC 下降 > 50% 者預後較佳（中位存活 > 1 年）。類澱粉沉著：預後不良（中位存活數月）。血栓栓塞事件發生後預後急劇惡化。遺傳性 PLN 多為進行性。',
    monitoring: '治療開始後 2-4 週追蹤 UPC（目標下降 > 50%）。每 1-3 個月追蹤 UPC + Cre/SDMA + 白蛋白 + 血壓。免疫抑制治療中監測 CBC。穩定後每 3-6 個月追蹤。',
    owner_communication: 'PLN 是腎臟把蛋白漏掉的疾病，問題不小。需要長期吃藥，也要定期回診抽。最怕的併發症是血栓，抗血栓藥不能省。如果是有遺傳傾向的品種，繁殖前最好先篩檢。治療的目標就是把蛋白尿壓下來，把腎功能惡化的速度拖慢。',
  },
  diagnostic_data: null,
  procedure_data: null,
  visual_placeholders: [
    { position: '病理類型表後', type: 'comparison_table', description: '腎小球疾病病理分類與免疫螢光特徵比較表' },
  ],
  interactive_placeholders: [],
  drug_api_links: ['Benazepril', 'Telmisartan', 'Mycophenolate', 'Clopidogrel', 'Amlodipine'],
  references: [
    { type: 'journal', citation: 'Miyagawa Y, Akabane R, Sakatani A, Ogawa M. "Effects of telmisartan on proteinuria and systolic blood pressure in dogs with chronic kidney disease." Res Vet Sci. 2020;133:150-156. doi:10.1016/j.rvsc.2020.09.019', relevance: '近期：telmisartan（ARB）降犬蛋白尿與血壓' },
    { type: 'guideline', citation: 'IRIS Canine GN Study Group; Segev G, Cowgill LD, Heiene R, et al. "Consensus Recommendations for Immunosuppressive Treatment of Dogs with Glomerular Disease Based on Established Pathology." J Vet Intern Med. 2013;27(Suppl 1):S44-S54. doi:10.1111/jvim.12228', relevance: '腎小球疾病免疫抑制治療共識（依病理）' },
    { type: 'journal', citation: 'Littman MP, Wiley CA, Raducha MG, Henthorn PS. "Glomerulopathy and mutations in NPHS1 and KIRREL2 in soft-coated Wheaten Terrier dogs." Mamm Genome. 2013;24(3-4):119-126. doi:10.1007/s00335-012-9445-8', relevance: 'SCWT 遺傳性 PLN 研究（修正 v1 誤標 JVIM）' },
    { type: 'guideline', citation: 'Lees GE, Brown SA, Elliott J, Grauer GF, Vaden SL. "Assessment and Management of Proteinuria in Dogs and Cats: 2004 ACVIM Forum Consensus Statement." J Vet Intern Med. 2005;19(3):377-385. doi:10.1111/j.1939-1676.2005.tb02713.x', relevance: '蛋白尿評估與管理共識' },
    { type: 'textbook', citation: 'Ettinger SJ, Feldman EC. Textbook of Veterinary Internal Medicine, 8th ed. Elsevier, 2017. Chapter 313: Glomerular Disease.', relevance: '腎小球疾病教材' },
  ],
  is_current: true,
  created_at: now,
};

/** 免疫介導血小板減少症 (IMT)，疾病型 */
const contentIMT: NodeContent = {
  id: 'CONTENT-IM-L3-015',
  node_id: 'IM-L3-015',
  version: 2,
  summary: '犬的嚴重血小板減少最常見的原因就是 IMT，免疫系統做出自體抗體去打自家血小板。分原發性（特發性）跟繼發性兩種。IMT 加上 IMHA 一起爆就是 Evans syndrome。血小板掉到 50,000/μL 以下會看到瘀斑跟黏膜出血。治療核心是免疫抑制。台灣的問題在於壁蝨整年都在跑，Ehrlichia canis 跟 Babesia gibsoni 是繼發性 IMT 的重要本土兇手。看到病例先把壁蝨媒介疾病排掉再開免疫抑制，順序不能搞錯。',
  learning_objectives: [
    '區分原發性與繼發性 IMT 的病因與臨床意義',
    '說明 Evans syndrome（IMT + IMHA）的診斷與治療特殊性',
    '制定 IMT 的階梯式免疫抑制治療方案',
    '解釋骨髓穿刺在 IMT 診斷中的角色（巨核球增生 vs 減少）',
    '說明 Vincristine 在難治性 IMT 中的作用機轉與使用時機',
  ],
  key_points: [
    '原發性 IMT（60-70%）：自體抗體（anti-GPIIb/IIIa, anti-GPIb）結合血小板 → 脾臟加速清除',
    '繼發性 IMT（30-40%）：感染（Ehrlichia, Babesia, Anaplasma）、藥物、腫瘤、疫苗觸發',
    '診斷標準：血小板 < 50,000/μL + 排除其他原因 + 骨髓巨核球數正常或增加',
    'Evans syndrome：IMT + IMHA 並存（表位擴展機轉），預後較單純 IMT 差',
    '一線治療：Prednisolone 2 mg/kg/day（分 BID）→ 反應後 2-4 週開始緩慢減量',
    '二線藥物：Mycophenolate 10 mg/kg BID 或 Cyclosporine 5 mg/kg BID',
    'Vincristine：0.02 mg/kg IV 單次，難治性 IMT 的救援藥物（促進血小板從巨核球釋放）',
    '避免不必要的靜脈穿刺和手術，嚴重血小板減少時出血風險極高',
    '2024 ACVIM 共識（LeVine et al）：建議用 ITP（取代 IMT）、分 primary(non-associative)/secondary(associative)、骨髓不再常規要求；診斷為結構化排除',
  ],
  body: `# 免疫介導血小板減少症 (Immune-Mediated Thrombocytopenia, IMT)

## 一、病理機制 (Pathophysiology)

Type II 超敏反應：自體抗體（IgG 為主）結合血小板膜醣蛋白（GPIIb/IIIa 或 GPIb-IX-V 複合體）→ 脾臟邊緣區巨噬細胞 Fcγ receptor 辨識 → 吞噬血小板（血管外清除為主）→ 血小板壽命從 5-7 天縮短至數小時

代償機轉：血小板破壞加速 → 骨髓巨核球反應性增生 → 血小板產生增加（但仍不足以代償破壞速度）→ 巨核球本身也可被自體抗體攻擊（amegakaryocytic thrombocytopenia，預後差）

Evans syndrome 機轉：初始 IMT 或 IMHA → 組織損傷暴露新抗原（表位擴展）→ 免疫反應擴展至紅血球和/或血小板 → 兩系同時受攻擊

| 類型 | 機轉 | 血小板計數 | 骨髓巨核球 | 預後 |
|------|------|-----------|-----------|------|
| 原發性 IMT（破壞型） | 抗體介導脾臟清除 | < 30,000 | 增加 | 良好（反應率 > 80%） |
| Evans syndrome | IMT + IMHA | < 50,000 + 貧血 | 增加 | 謹慎 |
| 繼發性 IMT | 感染/藥物/腫瘤觸發 | 變異 | 正常或增加 | 取決於基礎病因 |
| Amegakaryocytic | 抗巨核球抗體 | 極低 | 減少 | 不良 |

## 二、臨床表現與診斷 (Clinical Signs & Diagnosis)

| 臨床表現 | PLT 閾值 | 描述 |
|---------|---------|------|
| 瘀斑 (petechiae) | < 50,000/μL | 皮膚、口腔黏膜紫紅色針尖大點狀出血 |
| 紫斑 (ecchymoses) | < 30,000/μL | 較大面積皮下出血 |
| 黏膜出血 | < 20,000/μL | 牙齦/鼻腔/結膜/泌尿生殖道 |
| 眼前房出血 | < 20,000/μL | 需眼科檢查 |
| 致命性出血 | < 5,000/μL | 肺/腦/消化道出血 |

### 診斷流程

| 步驟 | 檢查 | 目的 |
|------|------|------|
| 1 | CBC + 血液抹片 | 確認真正血小板減少（排除 EDTA 假性血小板低下/血小板凝集） |
| 2 | 血液抹片巨血小板 | 有巨血小板提示骨髓代償性增生 |
| 3 | Coombs test + 自凝集 | 排除/確認 Evans syndrome |
| 4 | SNAP 4Dx + PCR | 排除壁蝨媒介疾病 |
| 5 | 影像學 | 排除脾臟腫瘤、淋巴瘤 |
| 6 | 骨髓穿刺（選擇性） | 巨核球增生確認 IMT vs 骨髓疾病 |

## 三、治療策略 (Treatment)

| 層級 | 藥物 | 劑量 | 適應症 |
|------|------|------|--------|
| 一線 | [藥物:Prednisolone] | 2 mg/kg/day PO 分 BID | 所有 IMT |
| 二線 | [藥物:Mycophenolate] | 10 mg/kg PO BID | Pred 48-72 hr 無反應或減量復發 |
| 二線替代 | [藥物:Cyclosporine] | 5 mg/kg PO BID | Mycophenolate 不耐受時 |
| 救援 | [藥物:Vincristine] | 0.02 mg/kg IV 單次 | 危及生命的出血 |
| 救援 | hIVIG | 0.5-1 g/kg IV over 6-12 hr | 難治性、等待 Pred 起效 |

Vincristine 機轉：(1) 促進骨髓巨核球碎裂→加速釋放血小板（24-48 hr 見效）；(2) 干擾巨噬細胞微管→降低吞噬功能

減量策略：血小板恢復 > 150,000/μL 後 2-4 週開始。每 2-4 週減 25%。最少持續 3-6 個月。復發率約 20-30%。

## 四、併發症與監控

| 併發症 | 機轉 | 處理 |
|--------|------|------|
| 消化道出血 | 黏膜完整性依賴血小板 | 止酸 + 黏膜保護 + 輸血小板（暫時性） |
| 免疫抑制副作用 | Pred: PU/PD/多食；MMF: 腹瀉 | 調整劑量 |
| Evans syndrome 發展 | 表位擴展 | 加強免疫抑制 |
| 復發 | 減量太快或停藥 | 回升至有效劑量 |

監測頻率：治療開始每 3-5 天追蹤 CBC 至血小板 > 100,000 → 每 1-2 週至穩定 → 減量期每 2-4 週 → 停藥後每月追蹤 3 個月

## 五、預後與預後因子 (Prognosis & Prognostic Factors)

原發性 ITP 對免疫抑制反應好——反應率 > 80%，多數 3-7 天血小板開始回升，住院死亡率約 5-10%。但有幾個因子會把預後往下拉：

| 預後因子 | 影響 | 來源 |
|---------|------|------|
| 黑便（melena）/消化道出血 | 死亡率↑、住院天數↑ | O'Marra 2011 |
| 就診時 BUN 升高 | 與較差結局相關 | O'Marra 2011 |
| Evans syndrome（合併 IMHA） | 死亡率 30-40% | 共識/回顧 |
| Amegakaryocytic（抗巨核球） | 預後不良 | — |
| 繼發於腫瘤 | 取決於原發腫瘤 | — |

復發率約 20-30%，多發生在減量太快或過早停藥時。一個務實提醒：**血小板數字和出血風險不是線性的**——同樣 20,000/μL，有的狗只有零星瘀斑、有的卻黏膜大出血，所以臨床決策要看「有沒有在出血」而不是單看數字。真正致命的是肺出血和顱內出血。

## 六、人醫借鑑 (Translational Insights)

- 人醫原發性免疫性血小板減少症（primary ITP）和獸醫一樣是**排除診斷**，沒有單一確診試驗——這點 2024 ACVIM 共識與人醫立場完全一致。
- 一線同為糖皮質素。**二線人醫已遠比獸醫豐富**：TPO 受體促效劑（romiplostim、eltrombopag，直接刺激血小板生成）、rituximab（anti-CD20 清除產抗體的 B 細胞）、脾切除。
- 這些人醫二線藥在犬貓多半還在探索階段：rituximab 是人源單株抗體，犬會產生抗藥抗體、效果受限；TPO-RA 在犬尚未常規使用。這是獸醫難治性 ITP 的明顯治療缺口。
- 骨髓檢查的角色雙方都在退場：人醫典型 ITP 不再常規做骨髓，2024 ACVIM 共識同樣**不再常規要求骨髓**，只在多系異常或治療無反應時才做。

## 七、臨床爭議與知識空缺 (Controversies & Knowledge Gaps)

| 爭議主題 | 目前立場 | 證據等級 | 研究方向 |
|---------|---------|---------|---------|
| 一線單用 Pred vs 起始即併二線 | 重症/難治可考慮早期併用，但缺前瞻證據 | Level III | RCT 比較單藥 vs 併用 |
| Vincristine 常規納入一線 | 可加速血小板回升，對死亡率影響未定 | Level II | 是否改善硬結局 |
| hIVIG 的定位 | 昂貴、效果短暫，保留給危及生命出血的橋接 | Level III | 成本效益、最佳劑量 |
| 血小板輸注 | 傳統視為無效（抗體快速破壞），僅危及生命出血時暫時用 | Level IV | 大量出血情境的實證 |
| 骨髓穿刺適應症 | 典型病例不需，多系異常/無反應才做 | Level III（2024 共識） | — |
| 減量速度與療程長度 | 經驗性 3-6 個月緩慢減量，最佳方案未定 | Level IV | 個體化減量方案 |

## 八、近期實證更新 (Recent Evidence Update)

**2024 ACVIM ITP 診斷共識（LeVine et al, J Vet Intern Med 38:1958-1981）** 是這個主題目前最高位階的更新，幾個對門診有實質影響的重點：
- **術語標準化**：建議用 **ITP**（immune thrombocytopenia）取代舊稱 IMT，並分為 **primary（non-associative，原發）** 與 **secondary（associative，繼發於感染/藥物/腫瘤）**。本節點沿用 IMT 為與既有教材銜接，但讀者應知新共識用語。
- **診斷是「結構化排除」**：沒有單一確診試驗。標準路徑＝先排除假性血小板減少（EDTA 凝集、CKCS 巨血小板）→ 排除 vector-borne/藥物/腫瘤 → 評估骨髓代償。**骨髓檢查不再常規要求**，僅保留給多系血球異常或治療無反應者。
- **台灣在地校正**：共識的繼發性比例以溫帶地區資料為主；台灣壁蝨媒介病原（**E. canis、B. gibsoni、Anaplasma**）整年流行，繼發性 ITP 占比很可能高於這些報告。**鐵則：開長期免疫抑制前，先 PCR/血清學把壁蝨病原排乾淨**——把繼發當原發來壓制免疫，會讓感染失控。

**Evans syndrome 的治療借鑑 2019 ACVIM IMHA 治療共識（Swann et al, JVIM 33:1141-1172）**：當 ITP 合併 IMHA，免疫抑制策略向 IMHA 共識看齊（含抗血栓預防的考量），且因雙系受攻擊、預後較單純 ITP 差。`,
  clinical_pearl: '在疑似 IMT 犬中，第一步是確認血小板真的減少，EDTA 抗凝管可引起犬的假性血小板減少（EDTA-dependent platelet clumping）。務必檢查血液抹片，看是否有血小板凝集。如果有凝集，改用 citrate 管重抽。另外，Cavalier King Charles Spaniel 品種有生理性巨血小板症（macrothrombocytopenia），自動計數器會低估血小板數量，需手動計數。',
  common_mistakes: [
    'EDTA 假性血小板減少誤診為 IMT（未確認血液抹片）',
    '未排除壁蝨媒介疾病就開始免疫抑制（Ehrlichia/Babesia 可引起繼發性 IMT）',
    '在嚴重血小板減少時進行不必要的靜脈穿刺或侵入性檢查（增加出血風險）',
    '血小板恢復後太快停藥（需緩慢減量 3-6 個月以上）',
    '忽略 Evans syndrome 的可能性（IMT 犬應同時監測 PCV/Coombs）',
  ],
  disease_data: {
    signalment: '犬為主，中年母犬略多。好發品種：Cocker Spaniel、Old English Sheepdog、Poodle。貓 IMT 較少見。繼發性 IMT 無品種偏好。',
    etiology: '原發性/特發性（60-70%）：自體免疫機轉。繼發性（30-40%）：壁蝨媒介感染（Ehrlichia, Babesia, Anaplasma）、藥物（TMP-SMX, Cephalosporins）、腫瘤（淋巴瘤、血管肉瘤）、疫苗後（罕見）。',
    pathogenesis: '自體抗體（anti-GPIIb/IIIa）結合血小板膜 → 脾臟巨噬細胞 Fcγ receptor 辨識 → 加速吞噬清除 → 血小板壽命縮短至數小時 → 骨髓代償性巨核球增生但不足以代償 → 嚴重血小板減少。',
    clinical_signs: [
      { sign: '瘀斑 (petechiae)', category: 'primary', description: '皮膚、口腔黏膜紫紅色針尖大出血點' },
      { sign: '紫斑 (ecchymoses)', category: 'primary', description: '較大面積皮下出血斑' },
      { sign: '黏膜出血', category: 'primary', description: '牙齦、鼻腔、結膜出血' },
      { sign: '黑便/血尿', category: 'secondary', description: '消化道或泌尿道黏膜出血' },
      { sign: '嗜睡', category: 'secondary', description: '出血性貧血或全身炎症' },
    ],
    staging: null,
    differential_diagnosis: [
      { condition: 'EDTA 假性血小板減少', key_differentiator: '血液抹片見血小板凝集，Citrate 管重抽正常' },
      { condition: 'DIC', key_differentiator: 'PT/aPTT 延長、FDP/D-dimer 升高、fibrinogen 低' },
      { condition: '骨髓疾病', key_differentiator: '骨髓穿刺巨核球減少、多系受累' },
      { condition: '壁蝨媒介疾病', key_differentiator: 'SNAP 4Dx/PCR 陽性、可能合併其他血球異常' },
      { condition: '脾臟腫瘤/血管肉瘤', key_differentiator: '影像學脾臟腫塊、可能合併腹腔出血' },
    ],
    diagnostic_workup: '1. CBC + 血液抹片（確認真正血小板減少 + 巨血小板 + 排除凝集）→ 2. 凝血功能（PT/aPTT 排除 DIC）→ 3. Coombs test / 自凝集（排除 Evans syndrome）→ 4. SNAP 4Dx + PCR（排除壁蝨媒介疾病）→ 5. 腹腔超音波（排除脾臟腫瘤）→ 6. 骨髓穿刺（選擇性，若多系受累或治療無反應）',
    treatment_protocol: '一線：Prednisolone 2 mg/kg/day PO（分 BID）。48-72 hr 無反應：加 Mycophenolate 10 mg/kg PO BID 或 Cyclosporine 5 mg/kg PO BID。危及生命出血：Vincristine 0.02 mg/kg IV 單次。血小板恢復後 2-4 週開始減量，每 2-4 週減 25%，最少持續 3-6 個月。',
    prognosis: '原發性 IMT：免疫抑制反應率 > 80%，多數 3-7 天血小板開始回升。住院死亡率 5-10%。復發率 20-30%。Evans syndrome：預後較差（死亡率 30-40%）。Amegakaryocytic IMT：預後不良。繼發性 IMT：取決於基礎病因控制。',
    monitoring: '治療初期每 3-5 天追蹤 CBC 至 PLT > 100,000/μL。穩定後每 1-2 週。減量期每 2-4 週 CBC。同時監測 PCV（排除 Evans syndrome 發展）。免疫抑制藥物副作用監測。停藥後每月追蹤 3 個月。',
    owner_communication: 'IMT 是免疫系統打到自家血小板的疾病。多數狗對藥物反應不錯，不過至少要吃 3-6 個月。停藥後仍有復發的機率。治療期間先別讓狗劇烈跑跳。在家請留意皮膚有沒有出血點、牙齦會不會滲血、有沒有黑便。',
  },
  diagnostic_data: null,
  procedure_data: null,
  visual_placeholders: [
    { position: '治療層級表後', type: 'flowchart', description: 'IMT 階梯式治療決策流程圖' },
  ],
  interactive_placeholders: [],
  drug_api_links: ['Prednisolone', 'Mycophenolate', 'Cyclosporine', 'Vincristine'],
  references: [
    { type: 'guideline', citation: 'LeVine DN, Kidd L, Garden OA, Brooks MB, Goggs R, Kohn B, et al. "ACVIM consensus statement on the diagnosis of immune thrombocytopenia in dogs and cats." J Vet Intern Med. 2024;38(4). doi:10.1111/jvim.16996', relevance: '近期最高位階：ITP 診斷共識（術語、排除診斷流程、骨髓不再常規）' },
    { type: 'journal', citation: 'O\'Marra SK, Delaforcade AM, Shaw SP. "Treatment and predictors of outcome in dogs with immune-mediated thrombocytopenia." J Am Vet Med Assoc. 2011;238(3):346-352. doi:10.2460/javma.238.3.346', relevance: 'IMT 治療結果與預後預測因子（melena/BUN）' },
    { type: 'guideline', citation: 'Swann JW, Garden OA, Fellman CL, Glanemann B, Goggs R, LeVine DN, et al. "ACVIM consensus statement on the treatment of immune-mediated hemolytic anemia in dogs." J Vet Intern Med. 2019;33(3):1141-1172. doi:10.1111/jvim.15463', relevance: 'Evans syndrome 治療借鑑（IMHA 免疫抑制+抗血栓）' },
    { type: 'textbook', citation: 'Nelson RW, Couto CG. Small Animal Internal Medicine, 6th ed. Elsevier, 2020. Chapter 87: Disorders of Hemostasis.', relevance: 'IMT 診斷與治療教材' },
    { type: 'textbook', citation: 'Ettinger SJ, Feldman EC. Textbook of Veterinary Internal Medicine, 8th ed. Elsevier, 2017. Chapter 286: Platelet Disorders.', relevance: '血小板疾病教材' },
  ],
  is_current: true,
  created_at: now,
};

/** 鉤端螺旋體病 (Leptospirosis)，疾病型 */
const contentLepto: NodeContent = {
  id: 'CONTENT-IM-L3-016',
  node_id: 'IM-L3-016',
  version: 2,
  summary:
    '鉤端螺旋體病是致病性 Leptospira（螺旋體）引起的人畜共通感染，犬為易感宿主、貓少見發病。核心病理為全身血管炎導致的急性腎損傷（AKI）合併肝損傷與黃疸，重症可出現肺泡出血（LPHS）與 DIC。診斷以 MAT 配對血清（參考標準）加急性期 PCR，治療以 doxycycline 為現行全程首選抗生素（依 2023 ACVIM 更新共識）。台灣屬亞熱帶、颱風洪水頻繁且鼠患普遍，為地方性流行區；犬多價疫苗可降低嚴重度與腎臟排菌但不涵蓋所有血清群。人的鉤端螺旋體病為台灣第四類法定傳染病，接觸疑似病例務必落實人員防護。',
  learning_objectives: [
    '說明致病性 Leptospira 的傳播途徑與「血管炎 → 多器官損傷」的致病機轉',
    '連結犬常見感染血清群、保毒宿主、器官傾向與台灣在地流行病學',
    '依現行證據選用並判讀 MAT（配對血清）與 PCR（血液/尿液），避開疫苗抗體與採檢時機造成的偽陰/偽陽',
    '制定符合 2023 ACVIM 更新共識的抗生素方案（doxycycline 全程首選，嘔吐時先靜脈 penicillin 類再轉換）與 AKI 支持治療',
    '辨識預後不良指標（LPHS、DIC、少尿性 AKI）並規劃住院監控計畫',
    '執行人畜共通防護與飼主衛教，理解台灣人端（第四類）與動物端通報規範差異',
  ],
  key_points: [
    '病原：致病性 Leptospira（L. interrogans、L. kirschneri 等），逾 250 血清型；犬常見血清群 Canicola、Icterohaemorrhagiae、Pomona、Grippotyphosa，亞洲另見 Australis/Bratislava',
    '致病核心是全身「血管炎」→ 內皮損傷 → 腎小管直接毒性（AKI）＋ 肝內膽汁淤積（黃疸）＋ 肺泡出血（LPHS）＋ 凝血活化（DIC）',
    '典型犬臨床：急性腎損傷/氮血症（azotemia 80–90%、腎受累達 80–100%）±黃疸±發燒±肌痛；貓少見發病但可血清陽性並排菌',
    '診斷：MAT 配對血清 4 倍上升為參考標準（單次 ≥1:800 具提示性）；急性期血液 PCR、之後尿液 PCR 可在血清轉陽前確診，且須在給抗生素前採檢',
    '⚠️ 舊觀念已更正：doxycycline 5 mg/kg PO q12h × 2 週為「全程首選」（依 2023 ACVIM 更新共識，僅明列口服），非僅清除期用藥；嘔吐無法口服時先用靜脈 penicillin 類（IRIS-4 加倍間隔）再轉 doxycycline',
    '人畜共通（人為台灣第四類法定傳染病）：感染犬尿液排菌數週，處理需戴手套/護目，環境以稀釋漂白水消毒',
    '台灣脈絡：亞熱帶氣候＋颱風洪水＋鼠患 → 地方性流行；都市小型犬同樣會發病（勿以體型排除），疫苗降低嚴重度與排菌但不涵蓋所有血清群',
  ],
  body: `# 鉤端螺旋體病 (Leptospirosis)

> 犬最重要的人畜共通感染性 AKI 病因之一。台灣為地方性流行區——任何「急性腎損傷 ± 黃疸」的犬，尤其有雨季/涉水史，都應把鉤端螺旋體列為首要鑑別並儘早經驗性治療，**不要等血清學結果**。本節立場對齊 **2011 ACVIM 共識** 與 **2023 ACVIM 更新共識**。

## 一、病理機制 (Pathophysiology)

感染路徑：接觸受感染動物尿液或汙染水/土 → 經黏膜（結膜、口腔、鼻腔）或皮膚破損進入 → **螺旋體血症（leptospiremia，約 4–12 天）** → 全身散布至腎、肝、肺、眼、腦膜。

核心機轉為**全身血管炎**：Leptospira 的外膜蛋白與脂多醣損傷血管內皮 → 血管通透性上升、組織水腫與出血，並活化凝血/纖溶 → 嚴重時進展為 DIC。

| 靶器官 | 損傷機轉 | 臨床對應 |
|--------|---------|---------|
| 腎臟 | 腎小管上皮直接毒性 + 間質性腎炎 | 急性腎損傷（AKI，IRIS Grade II–V），少尿或多尿 |
| 肝臟 | 肝細胞損傷 + 肝內膽汁淤積（非大量壞死） | 黃疸、ALT/ALP↑、膽紅素↑ |
| 肺臟 | 肺泡毛細血管炎 → 出血 | 鉤端螺旋體肺出血症候群（LPHS），咳血、呼吸窘迫 |
| 凝血 | 血管炎 + 血小板消耗 | 瘀點瘀斑、DIC |

> AKI 之所以最一致，是因為腎臟同時是**損傷靶器官**與**帶原/排菌器官**——螺旋體在近曲小管定殖，即使全身清除後仍可持續排菌，這也是療程必須足量足時的原因。

[圖片:leptospirosis-pathogenesis-flow]（感染 → 螺旋體血症 → 血管炎 → 腎/肝/肺多器官損傷的機轉流程圖）

### 血清群、宿主與器官傾向

| 血清群 (serogroup) | 主要保毒宿主 | 器官傾向 | 台灣相關性 |
|--------|---------|-----------|-----------|
| Canicola | 犬 | 腎臟 | 疫苗涵蓋；流浪犬循環 |
| Icterohaemorrhagiae | 鼠 | 肝（黃疸重） | 都市鼠患高，常見 |
| Pomona | 豬/牛 | 腎 + 肝 | 農牧區 |
| Grippotyphosa | 齧齒/野生動物 | 腎 + 肝 | 較少見 |
| Australis / Bratislava | 多種宿主 | 不定 | 亞洲報告增加，疫苗未必涵蓋 |

> 名詞時效：分類上以**血清群/血清型（serogroup/serovar）**描述抗原，與**基因種（genomospecies，如 L. interrogans、L. kirschneri）**是兩套並行系統；MAT 報告的是血清群反應，**不可靠地預測**實際感染的血清群或基因種（確切分型需序列分型）。上表常見血清群清單依 2010 ACVIM 共識與近年血清流行病學統合分析（Ricardo 2024）。

## 二、臨床表現與診斷 (Clinical Signs & Diagnosis)

### 臨床表現（犬 vs 貓）

| 表現 | 犬頻率 | 說明 |
|------|------|------|
| 急性腎損傷（氮血症） | 80–100% | 最一致表現；azotemia 約 80–90%，AKI/腎受累達 80–100%（IRIS Grade II–V），少尿/多尿 |
| 嘔吐/厭食/沉鬱 | 80–90% | 尿毒 + 肝損傷 |
| 黃疸/肝酵素升高 | ~30–50% | Icterohaemorrhagiae 群較常見；臨床黃疸為其子集 |
| 發燒 | 病程早期常見 | 未有可靠盛行率百分比 |
| 肌肉疼痛/僵硬 | 30–50% | 肌肉內螺旋體 + 炎症 |
| 出血傾向 | 20–40% | 血管炎、血小板下降、DIC |
| 呼吸窘迫/咳血（嚴重 LPHS） | 10–20% | 死亡率高；胸腔影像異常更常見（可達 ~70%） |

貓：自然感染下臨床發病罕見，多為血清陽性/亞臨床帶原，但可排菌，具公衛意義。

### 診斷工具與時機

| 檢查 | 敏感度 | 特異度 | 最佳時機 | 備註 |
|------|--------|--------|---------|------|
| MAT（配對血清） | 高（配對） | 高 | 發病 7–10 天後 + 2 週複檢 | **參考標準**；4 倍上升確診；單次 ≥1:800 具提示性 |
| MAT（單次） | 中 | 中 | 任何時點 | 疫苗/早期偽陰、交叉反應限制判讀 |
| PCR（血液） | 高（早期） | 高 | 螺旋體血症期（前 ~10 天、抗生素前） | 早於血清轉陽即可陽性 |
| PCR（尿液） | 中–高 | 高 | 發病 ~7–14 天後（排菌期） | 抗生素後迅速轉陰 |
| 血液生化/CBC | — | — | 初診 | AKI、膽紅素↑、血小板↓、發炎象 |

判讀陷阱：
- **疫苗抗體**可造成 MAT 陽性，效價多偏低但**可偏高**（文獻可達 ≥1:1600）；因 MAT 交叉反應，陽性血清群**未必對應**疫苗涵蓋之血清群，**不能藉血清群型態區分疫苗 vs 感染**。效價多於接種後約 4 個月遞減、多數一年內轉陰（持續野外暴露則可維持高效價）→ 需配對血清與接種病史判讀。
- **抗生素**會快速降低 PCR 陽性率 → PCR 檢體務必在首劑前採。
- 早期（血清轉陽前）**單靠 MAT 會偽陰** → 高度懷疑時併用 PCR 並經驗性治療。

[互動:lepto-diagnostic-algorithm]（互動式診斷流程：依「發病天數 × 是否已用抗生素」決定先做 PCR 或 MAT、何時複檢配對血清）

## 三、治療策略 (Treatment)

**抗生素（依 2023 ACVIM 更新共識，doxycycline 為全程首選）：**

| 情境 | 藥物 | 常用劑量* | 療程 | 說明 |
|------|------|------|------|------|
| 可口服/耐受 | [藥物:Doxycycline] | 5 mg/kg PO q12h | 14 天 | 現行**首選全程用藥**：同時清除螺旋體血症與腎臟帶原（2023 ACVIM 僅明列口服；IV doxycycline 劑量屬外推、非共識條列） |
| 嘔吐/無法口服（初期） | [藥物:Ampicillin] | 20–30 mg/kg IV q6–8h | 至可口服 | 快速控制螺旋體血症；穩定後**轉 doxycycline 完成 14 天** |
| 初期替代 | [藥物:Penicillin G] | 25,000–40,000 U/kg IV q6–8h | 至可口服 | Ampicillin 替代 |
| 初期替代 | [藥物:Amoxicillin] | 20–30 mg/kg IV q6–8h | 至可口服 | 之後仍需 doxycycline 清除帶原 |

*劑量為臨床常用範圍，**須依現行仿單／Plumb's 與獸醫師核對**、依腎功能調整；**penicillin 類於 IRIS Grade 4 AKI 建議加倍給藥間隔**（2023 ACVIM）。

> 舊觀念更正：早期教材的「先 penicillin 類殺菌、再 doxycycline 清除」兩階段式並非必要；**只要能口服，doxycycline 自始即可全程使用**（2023 ACVIM）。penicillin 類的角色限縮為「無法口服時的過渡」。

**AKI 與支持治療：**
- 積極但**目標導向**的靜脈輸液，避免容量過載（少尿期尤其）；監測體重、尿量、灌流指標。
- 少尿/無尿且對輸液無反應 → 及早考慮**血液透析/腹膜透析**（有透析可用時顯著改善重症存活）。
- 止吐：[藥物:Maropitant] 1 mg/kg IV/SC q24h；併胃保護。
- 電解質：高血鉀依標準流程（鈣、葡萄糖-胰島素）。
- LPHS：氧氣治療，重症正壓通氣；輸血/FFP 依 DIC 與出血狀況。

## 四、併發症與監控

| 併發症 | 頻率 | 處置 |
|--------|------|------|
| AKI → 慢性腎病（CKD） | 存活犬約 30% | 出院後長期腎臟追蹤 |
| 肺出血（LPHS） | 10–20% | 氧氣/通氣支持；預後不良指標 |
| DIC | 10–15% | FFP、輸血、治療原發 |
| 容量過載/肺水腫 | 治療相關 | 輸液再評估、利尿/透析 |

**住院監控計畫：**

| 時間點 | 項目 | 目標/警訊 |
|--------|------|----------|
| 每 4–6 h | 尿量、血壓、呼吸 | 尿量 ≥1–2 mL/kg/h；呼吸窘迫 → 查 LPHS |
| 每 12–24 h | BUN/Cre、電解質（K⁺）、血比容 | Cre 下降趨勢；K⁺ 正常化 |
| 每 24–48 h | 肝指數/膽紅素、血小板、凝血 | 黃疸與血小板回升 |
| 出院後 1–2 週 | 腎功能複查 | 穩定；評估殘餘腎損 |
| 3–6 個月 | IRIS CKD 分級 | 早期發現 CKD |

## 五、預後與預後因子

- 早期積極治療（含透析可用）整體存活率約 **70–85%**；透析病例系列（Ioannou 2024，22 犬）出院存活約 73%、6 個月約 75%。
- 預後不良因子：**LPHS**、少尿/無尿性 AKI、DIC、就診延遲、嚴重高膽紅素。
- 約 **30–40%** AKI 存活犬遺留不同程度 CKD → 需長期追蹤（ACVIM 共識僅定性描述「部分存活犬有殘餘腎損傷」，百分比源自病例系列/回顧）。
- 上述數字為病例系列/回顧（Evidence Level II–III），受透析可近性與就診時機影響大。

## 六、人醫借鑒 (Translational Insights)

鉤端螺旋體病是典型 One Health 疾病，人醫工具與觀念可直接對照：

| 人醫工具/觀念 | 獸醫應用 | 現況 |
|--------------|---------|------|
| Weil's disease（重症黃疸型）管理、AKI 透析 | 犬重症 AKI 早期透析 | 已用於有透析設備的轉診中心 |
| 人重症肺出血型呼吸支持 | 犬 LPHS 氧氣/正壓通氣 | 應用中，證據多為外推 |
| lipL32 即時 PCR | 犬急性期血液/尿液 PCR | 已商化，為早期診斷主力 |
| 側流免疫層析 IgM 快篩 | 犬院內快篩 | 部分可得，仍需 MAT/PCR 確認 |
| WHO/WOAH 人畜共通監測與通報 | 台灣人端第四類法定傳染病通報 | 制度化（動物端未常規化） |

## 七、臨床爭議與知識空缺

| 議題 | 現況 | Evidence Level |
|------|------|----------------|
| 單次 MAT 判讀閾值（1:800）是否可靠 | 受疫苗、早期偽陰、實驗室與地方血清群差異影響；配對血清較可靠 | III（專家共識/實驗室依賴）|
| doxycycline 全程 vs 兩階段抗生素 | 2023 共識傾向 doxycycline 全程首選；比較性 RCT 有限 | III |
| 糖皮質素/免疫調節在 LPHS 的角色 | 部分人醫與個案支持，犬缺對照證據，常規不建議 | III（外推/個案）|
| 疫苗跨血清群保護與保護期 | 降低嚴重度與排菌，交叉保護有限、非終身 | II |
| 台灣在地血清群分布與最佳疫苗組成 | 資料有限，Australis 群等是否漏網待監測 | II–III |

## 八、近期實證更新

- **2023 ACVIM 更新共識取代 2011 版**：重申 **doxycycline 為全程首選**；強化 **PCR（血液早期、尿液稍後）** 在血清轉陽前的角色；更新疫苗建議（多價、年度接種、降低排菌）。
- **舊教條更正**：
  - 「鉤端螺旋體只發生在大型/農村犬」→ 都市小型犬同樣會（都市鼠患、公園積水、狗公園）。
  - 「有打疫苗就不會得」→ 疫苗未涵蓋的血清群仍可感染，且保護非終身。
  - 「先 penicillin 再 doxycycline 的兩階段」→ 能口服即 doxycycline 全程。
- **命名/分類時效**：致病性 Leptospira 以**基因種**（L. interrogans、L. kirschneri 等）與**血清群/血清型**兩套系統並行描述；MAT 反映血清群、不等於基因種。
- **台灣**：屬地方性流行區，颱風/暴雨後約 **1–2 週**為感染高峰（診斷確診可延後至 2–4 週；依 Su 2011 台灣颱風相關鉤端螺旋體病 EID 報告與人流行病學）。**通報**：人的鉤端螺旋體病為**第四類法定傳染病**（傳染病防治法），由醫療端通報疾管署；動物端列為**乙類動物傳染病（B056）**且屬人畜共通，獸醫師依《動物傳染病防治條例》第 17 條對「重大人畜共通乙類」負 24 小時通報義務，惟目前對犬病例尚無常規化通報/統計機制。臨床仍以人員防護與飼主衛教為主。`,
  clinical_pearl:
    '在台灣，颱風或暴雨後約 1–2 週為鉤端螺旋體病的感染高峰（確診可能延後至 2–4 週）：洪水混入鼠尿中的螺旋體，犬涉水後經黏膜或皮膚破損感染。任何「急性腎損傷 ± 黃疸」的犬，尤其有雨季/涉水史，都應把本病列為首要鑑別，並在採好「給藥前」PCR/血清檢體後立即經驗性 doxycycline（口服）治療——不要等 MAT 轉陽（需 7–10 天），延遲治療明顯增加死亡率。同時第一時間啟動人員防護與飼主衛教（人的鉤端螺旋體病屬台灣第四類法定傳染病）。',
  common_mistakes: [
    '等 MAT 結果才開始治療——MAT 需 7–10 天轉陽，延遲抗生素顯著增加死亡率；應在採檢後即經驗性治療',
    '在給抗生素之後才採 PCR 檢體——抗生素快速降低 PCR 陽性率，檢體務必在首劑前採集',
    '沿用「先 penicillin 再 doxycycline」兩階段觀念——現行 2023 ACVIM 為「能口服即 doxycycline 全程首選」，penicillin 類僅為無法口服時的過渡',
    'doxycycline 療程不足 14 天——未清除腎臟帶原，犬持續排菌並成為人的感染源',
    '把疫苗史或單次 MAT 當定論（不論當「陰性排除」或「陽性即感染」）——疫苗抗體可高可低且跨血清群交叉反應、早期又會偽陰，須配對血清＋PCR＋病史綜合判讀',
    '忽略人畜共通防護與法定通報——處理尿液未戴手套、未衛教飼主，也未依規定通報',
  ],
  disease_data: {
    signalment: '任何年齡、品種犬皆可感染。傳統上大型/戶外/工作/農村犬風險較高，但都市小型犬（都市鼠患、公園積水、狗公園）同樣會發病，勿以體型排除。台灣南部/東部及颱風洪水頻繁區風險更高。貓自然發病罕見但可血清陽性並排菌。',
    etiology: '致病性 Leptospira（基因種如 L. interrogans、L. kirschneri），逾 250 血清型。犬常見血清群：Canicola、Icterohaemorrhagiae、Pomona、Grippotyphosa，亞洲另見 Australis/Bratislava。傳播：接觸感染動物尿液或汙染水/土，經黏膜或皮膚破損進入。保毒宿主：鼠、豬、牛、其他犬。',
    pathogenesis: '螺旋體經黏膜/皮膚進入 → 螺旋體血症（約 4–12 天）→ 全身血管內皮損傷（血管炎）→ 器官定殖（腎/肝/肺）→ 腎小管直接毒性（AKI）＋ 肝內膽汁淤積（黃疸）＋ 肺泡出血（LPHS）＋ 凝血活化（DIC）。腎近曲小管定殖使犬即使全身清除後仍持續排菌。',
    clinical_signs: [
      { sign: '急性腎損傷', category: 'primary', description: 'AKI IRIS Grade II–V，少尿或多尿；最一致表現' },
      { sign: '嘔吐/厭食', category: 'primary', description: '尿毒症與肝損傷' },
      { sign: '黃疸', category: 'primary', description: 'Icterohaemorrhagiae 群較常見，膽紅素升高' },
      { sign: '發燒', category: 'secondary', description: '急性期 39.5–41°C，可能自行退' },
      { sign: '肌肉疼痛/僵硬', category: 'secondary', description: '肌肉內螺旋體與炎症' },
      { sign: '呼吸窘迫/咳血', category: 'secondary', description: 'LPHS，預後不良指標' },
    ],
    staging: null,
    differential_diagnosis: [
      { condition: '其他病因 AKI（缺血/腎毒性）', key_differentiator: '無肝損傷合併、無涉水/雨季暴露史' },
      { condition: '急性肝炎/膽管炎', key_differentiator: '腎功能正常、無血管炎/出血傾向' },
      { condition: '免疫介導溶血性貧血', key_differentiator: '球形紅血球/Coombs 陽性、腎功能通常正常' },
      { condition: '鼠藥中毒（抗凝血劑）', key_differentiator: 'PT/PTT 極度延長、維生素 K 反應性出血' },
    ],
    diagnostic_workup: '1. CBC＋生化（BUN/Cre、ALT/ALP、膽紅素、電解質）＋尿檢（糖尿/管型）→ 2. 凝血功能/血小板 → 3. **給抗生素前**採血液 PCR＋（稍後）尿液 PCR → 4. MAT 配對血清（發病 7–10 天＋2 週複檢，4 倍上升確診）→ 5. 腹部超音波（腎大小/皮髓交界/腎盂）→ 6. 胸腔 X 光（評估 LPHS）',
    treatment_protocol: '首選：能口服/耐受即 Doxycycline 5 mg/kg PO q12h × 14 天全程（依 2023 ACVIM 更新共識；共識僅明列口服，IV 劑量屬外推）。嘔吐/無法口服時先 Ampicillin 或 Amoxicillin 20–30 mg/kg IV q6–8h、或 Penicillin G 25,000–40,000 U/kg IV q6–8h（IRIS Grade 4 AKI 加倍給藥間隔），可口服後轉 doxycycline 完成 14 天。支持：目標導向 IV 輸液（防容量過載）、止吐（Maropitant 1 mg/kg IV/SC q24h，依仿單）、高鉀處理；少尿/無尿無反應者及早透析；LPHS 氧氣/通氣。劑量須依仿單與獸醫核對並按腎功能調整。',
    prognosis: '早期積極治療（含可用透析）整體存活率約 70–85%（透析病例系列 Ioannou 2024：出院約 73%、6 個月約 75%）。預後不良因子：LPHS、少尿/無尿性 AKI、DIC、就診延遲、嚴重高膽紅素。約 30–40% AKI 存活犬遺留不同程度 CKD（ACVIM 共識僅定性描述，百分比源自病例系列/回顧），需長期追蹤。',
    monitoring: '住院：尿量/血壓 q4–6h；BUN/Cre、電解質（K⁺）q12–24h；肝指數/膽紅素、血小板、凝血 q24–48h。出院後 1–2 週複查腎功能，3–6 個月以 IRIS 分級評估 CKD。療程完成後可 PCR 確認清除。',
    owner_communication: '鉤端螺旋體會傳給人，要當心。治療期間清狗狗的尿都要戴手套，不要徒手碰。環境消毒用稀釋漂白水。建議每年打疫苗（但疫苗不是萬能，涵蓋不到的血清群還是可能感染）。台灣颱風淹水之後一定要管好狗，不要讓牠去踩積水。飼主自己如果開始發燒、肌肉痠，就醫時記得跟醫師講家裡有狗確診過。',
  },
  diagnostic_data: null,
  procedure_data: null,
  visual_placeholders: [
    { position: '一、病理機制 機轉段後', type: 'flowchart', description: '感染 → 螺旋體血症 → 血管炎 → 腎/肝/肺多器官損傷的機轉流程圖' },
    { position: '血清群表後', type: 'comparison_table', description: '鉤端螺旋體血清群、保毒宿主、器官傾向與台灣相關性對照表' },
  ],
  interactive_placeholders: [
    { position: '二、臨床表現與診斷 診斷工具段後', type: 'decision_tree', description: '互動式診斷流程：依「發病天數 × 是否已用抗生素」決定先做 PCR 或 MAT、何時複檢配對血清' },
  ],
  drug_api_links: ['Doxycycline', 'Ampicillin', 'Penicillin G', 'Amoxicillin', 'Maropitant'],
  references: [
    { type: 'guideline', citation: 'Sykes JE, et al. Updated ACVIM consensus statement on leptospirosis in dogs. J Vet Intern Med. 2023;37(6):1966-1982. doi:10.1111/jvim.16903.', relevance: '現行權威指引（2023 ACVIM 更新共識）：doxycycline 全程首選、PCR 早期診斷、疫苗建議' },
    { type: 'guideline', citation: 'Sykes JE, et al. 2010 ACVIM Small Animal Consensus Statement on Leptospirosis: Diagnosis, Epidemiology, Treatment, and Prevention. J Vet Intern Med. 2011;25(1):1-13. doi:10.1111/j.1939-1676.2010.0654.x.', relevance: '原始 ACVIM 共識（2011），本病診療架構基礎' },
    { type: 'journal', citation: 'Reagan KL, Sykes JE. Diagnosis of Canine Leptospirosis. Vet Clin North Am Small Anim Pract. 2019;49(4):719-731. doi:10.1016/j.cvsm.2019.02.008.', relevance: 'MAT 與 PCR 診斷判讀與時機回顧' },
    { type: 'guideline', citation: 'Schuller S, et al. European consensus statement on leptospirosis in dogs and cats. J Small Anim Pract. 2015;56(3):159-179. doi:10.1111/jsap.12328.', relevance: '歐洲共識，血清群分布與疫苗觀點對照' },
    { type: 'journal', citation: 'Hsu, et al. Seroepidemiologic Survey of Canine Leptospirosis in Northern Taiwan During 2008-2015. Taiwan Vet J. 2018;44(3):141-149. doi:10.1142/S1682648518500038.', relevance: '台灣在地流行病學：北台灣犬鉤端螺旋體血清流行病學調查' },
    { type: 'journal', citation: 'Su, et al. Typhoon-related Leptospirosis and Melioidosis, Taiwan, 2009. Emerg Infect Dis. 2011;17(7):1322-1324. doi:10.3201/eid1707.101050.', relevance: '台灣颱風後鉤端螺旋體病流行時序（人流行病學，支持颱風後高峰）' },
    { type: 'journal', citation: 'Ioannou, et al. Retrospective evaluation of 22 dogs with leptospirosis treated with extracorporeal renal replacement therapies (2018-2021). J Vet Intern Med. 2024. doi:10.1111/jvim.16998.', relevance: '透析治療犬鉤端螺旋體病預後（存活率/CKD 數字溯源）' },
    { type: 'journal', citation: 'Ricardo, et al. Seroprevalence of pathogenic Leptospira serogroups in asymptomatic domestic dogs and cats: systematic review and meta-analysis. Front Vet Sci. 2024;11:1301959. doi:10.3389/fvets.2024.1301959.', relevance: '近年犬貓血清群統合分析（常見血清群清單溯源）' },
    { type: 'textbook', citation: 'Nelson RW, Couto CG. Small Animal Internal Medicine. 6th ed. Elsevier; 2020.', relevance: '小動物內科教科書，鉤端螺旋體病章節（教材）' },
  ],
  is_current: true,
  created_at: now,
};

/** 貓傳染性腹膜炎 (FIP)，疾病型 */
const contentFIP: NodeContent = {
  id: 'CONTENT-IM-L3-017',
  node_id: 'IM-L3-017',
  version: 2,
  summary: 'FIP 是貓冠狀病毒（FCoV）突變成高致病力型搞出來的病。臨床上分濕型（滲出型）跟乾型（肉芽腫型）。以前被當作幾乎 100% 致命，現在 GS-441524 這類抗病毒藥已經把 FIP 變成治得好的病。標準療程是 GS-441524 皮下注射 84 天。台灣多貓家庭、貓咖啡廳密度都高，FCoV 盛行率本來就偏高；GS-441524 在台灣可以透過獸醫處方拿到，本土的治療經驗一直在累積。',
  learning_objectives: [
    '說明 FCoV 突變為 FIPV 的機轉與免疫病理',
    '區分 FIP 濕型與乾型的臨床表現與診斷策略',
    '正確判讀 Rivalta test 並解釋其診斷意義',
    '制定 GS-441524 抗病毒治療方案（劑量、療程、監測）',
    '評估 FIP 治療後的預後與復發風險',
  ],
  key_points: [
    'FCoV（貓腸道冠狀病毒）普遍存在（多貓家庭 40-80% 感染率），僅 5-10% 突變為 FIPV',
    '突變關鍵：FCoV 在巨噬細胞內有效複製能力 → 全身性感染 → 免疫複合體血管炎',
    '濕型（effusive）：高蛋白、低細胞數滲出液，Rivalta test 陽性，A/G ratio < 0.4',
    '乾型（granulomatous）：肉芽腫侵犯腎、肝、CNS、眼，診斷較困難',
    'GS-441524（remdesivir 的母核苷）依病型分級給藥、SC SID × 84 天；乾/眼/神經型需較高劑量以求組織與中樞穿透。注射常從較低劑量起始再依反應上調——劑量為現場常用範圍、須依現行 ABCD 指引（Tasker 2023）與 DVM/仿單核對，勿視為定值',
    'Molnupiravir：替代藥物（人 COVID 口服藥再利用），療效近似但致突變風險未明',
    '治療成功率（系統性回顧 ~650 貓，Gokalsing 2025）：整體約 84.6%，濕型最佳、神經型/重症較低；FIP 已從「絕症」轉為多數可治癒',
  ],
  body: `# 貓傳染性腹膜炎 (Feline Infectious Peritonitis, FIP)

## 一、病理機制 (Pathophysiology)

### FCoV → FIPV 突變

貓腸道冠狀病毒（FCoV）很常見，多貓家庭裡帶原比例本來就有 40-80%。只有少數（5-10%）在貓體內突變（主要是 spike protein 跟 3c gene），讓病毒會在巨噬細胞裡大量複製，這時候就變成 FIPV

免疫病理：FIPV 感染巨噬細胞 → 病毒血症 → 感染的巨噬細胞黏附血管壁 → 補體活化 + 免疫複合體沉積 → 血管周圍肉芽腫性炎症（pyogranulomatous vasculitis）

免疫決定結局：
- 強細胞免疫（CMI）→ 控制感染 → 不發病
- 強體液免疫但弱 CMI → 抗體依賴性增強（ADE）→ 加重感染 → 濕型 FIP
- 部分 CMI → 肉芽腫形成但無法清除 → 乾型 FIP

| 型態 | 免疫反應 | 病理 | 預後（未治療） |
|------|---------|------|--------------|
| 濕型 | 強體液/弱 CMI | 高蛋白滲出液 + 血管炎 | 數天至數週 |
| 乾型 | 部分 CMI | 肉芽腫（腎/肝/CNS/眼） | 數週至數月 |
| 混合型 | 過渡 | 兩者特徵 | 變異 |

## 二、臨床表現與診斷 (Clinical Signs & Diagnosis)

### 濕型 FIP

| 表現 | 頻率 | 描述 |
|------|------|------|
| 腹腔積液 | 70-80% | 黃色、黏稠、高蛋白 |
| 胸腔積液 | 20-30% | 呼吸困難 |
| 發燒（不退） | > 80% | 對抗生素無反應 |
| 體重減輕 | > 70% | 進行性消瘦 |
| 黃疸 | 30-50% | 肝臟受累 |

### 乾型 FIP

| 靶器官 | 表現 | 頻率 |
|--------|------|------|
| 眼 | 前葡萄膜炎、角膜沉澱物（mutton fat KP） | 30-40% |
| CNS | 共濟失調、癲癇、後肢輕癱 | 30-40% |
| 腎 | 腎腫大、腎表面肉芽腫 | 20-30% |
| 肝 | 肝腫大、黃疸 | 20-30% |
| 腸系膜淋巴結 | 觸診可觸及腫大淋巴結 | 常見 |

### 診斷工具

| 檢查 | 濕型 | 乾型 | 備註 |
|------|------|------|------|
| Rivalta test | 陽性（敏感度 91%） | 不適用 | 滲出液一滴入醋酸→不消散 |
| 滲出液分析 | TP > 3.5 g/dL, 低細胞 |—| A/G < 0.4 高度提示 FIP |
| 血液 A/G ratio | < 0.4 | < 0.6 | 非特異但有支持價值 |
| 滲出液 FCoV RT-PCR | 敏感度高 |—| 陽性高度支持但非確診 |
| 組織免疫組化（IHC） | 金標準 | 金標準 | FCoV 抗原在巨噬細胞內 |
| 血清 FCoV 抗體 | 非診斷性 | 非診斷性 | 陽性僅代表 FCoV 接觸 |

Rivalta test 操作：試管中放 8 mL 蒸餾水 + 1 滴冰醋酸→滲出液一滴輕放液面→FIP 滲出液不消散、下沉形成水母狀。非 FIP 滲出液迅速消散。

## 三、治療策略 (Treatment)

### GS-441524 抗病毒治療

| 型態 | 劑量 | 途徑 | 療程 |
|------|------|------|------|
| 濕型 | 6-10 mg/kg SID | SC 注射 | 84 天 |
| 乾型 | 10-12 mg/kg SID | SC 注射 | 84 天 |
| 眼型 | 12-15 mg/kg SID | SC 注射 | 84 天 |
| 神經型 | 15-20 mg/kg SID | SC 注射 | 84 天（或更長） |

> ⚠️ **劑量為臨床現場常用範圍、非單一權威定值（待 DVM 依現行 ABCD 指引與仿單核對）**。注射劑量常從較低起始（接近 Pedersen 2019 原始的濕型約 2–4 mg/kg）再依反應上調；乾/眼/神經型因需更高組織與中樞穿透而採較高劑量。請勿將上表視為固定處方。

GS-441524 機轉：核苷酸類似物 → 被細胞激酶磷酸化為活性三磷酸形式 → 嵌入病毒 RNA 鏈 → 終止 RNA 合成 → 抑制冠狀病毒 RdRp

### 替代藥物

| 藥物 | 劑量 | 優勢 | 劣勢 |
|------|------|------|------|
| Molnupiravir | 20 mg/kg PO BID × 84 天 | 口服、較便宜 | 致突變風險、經驗較少 |
| GC376（蛋白酶抑制劑） | 15 mg/kg SC BID | 早期研究有效 | 口瘡副作用、取得困難 |

### 治療監測

| 時間點 | 監測項目 | 預期變化 |
|--------|---------|---------|
| 第 1-2 週 | 體重、食慾、發燒 | 食慾改善、退燒 |
| 第 2-4 週 | 球蛋白、A/G ratio | 球蛋白下降 |
| 第 4-8 週 | 滲出液消退、CBC | 滲出液完全消退 |
| 第 84 天 | 全面評估 | 臨床緩解 |
| 停藥後 3 個月 | 復發監測 | 體重/A:G ratio 穩定 |

## 四、預後

| 型態 | 治療成功率 | 復發率 | 備註 |
|------|-----------|--------|------|
| 濕型 | > 80% | 10-15% | 預後最佳 |
| 乾型（非神經） | 60-70% | 15-20% | 療程可能需延長 |
| 眼型 | 60-70% | 15-20% | 部分視力損傷不可逆 |
| 神經型 | 50-60% | 20-30% | 需高劑量 + 延長療程 |

## 五、人醫借鑑 (Translational Insights)

FIP 是少見的「獸醫先行、回饋人醫」範例：

| 人醫概念/工具 | 與 FIP 的連結 | 現況 |
|-------------|-------------|------|
| Remdesivir (GS-5734) | GS-441524 即 remdesivir 的母核苷（主要血漿代謝物）；貓 FIP 長療程安全性經驗早於人 COVID 廣泛使用 | 人 COVID-19 靜脈用藥；獸醫長期 SC/口服經驗反向參考 |
| Molnupiravir | 同為人 COVID 口服抗病毒藥，跨物種再利用治療 FIP | FIP 替代/救援用藥（致突變風險待評估） |
| 抗體依賴性增強 (ADE) | FIP 是 ADE 的經典天然模型（強體液、弱 CMI 反而加重） | 對病毒疫苗設計的警示意義 |

## 六、臨床爭議與知識空缺 (Controversies & Knowledge Gaps)

| 爭議主題 | 目前立場 | Evidence Level |
|---------|---------|---------------|
| GS-441524 各病型最佳劑量 | 劑量逐年上修、缺前瞻性頭對頭 RCT；現場以反應導向調整 | Level III |
| 注射 vs 口服 GS-441524 等效性 | 可注射起手、轉口服維持（Coggins 2023 支持） | Level II |
| 神經型療程長度與劑量上限 | 需更高劑量穿透 BBB、療程常需延長，最佳值未定 | Level III |
| 84 天療程與停藥/治癒判定 | 84 天為經驗值非 RCT；停藥後 12 週監測復發 | Level III |
| Molnupiravir 長期安全性 | 療效近似 GS（Sase 2024，回溯性），致突變/致畸風險未明 | Level III |
| 治癒後 FCoV 帶原與再感染 | 治癒不等於清除 FCoV 帶原；再感染/再突變可能 | Level IV |

## 七、近期實證更新（2022–2025，僅列高信度，待 DVM 覆核）

**1. 系統性回顧確立 GS-441524 療效（Gokalsing 2025）**
彙整 2018–2024 共 11 項研究、約 650 隻 FIP 貓：GS-441524（單用或合併）整體成功率約 **84.6%**；合併用藥更高、濕型最佳、**神經型/重症較低**。確立 FIP 已從「絕症」轉為多數可治癒。

**2. 注射起手、口服維持獲實務支持（Coggins 2023, JVIM）**
37 貓以注射 remdesivir 起始、可轉換為口服 GS-441524，存活率高 → 支持「急性期注射、穩定後口服」的路徑。

**3. Molnupiravir 為合理替代（Sase 2024, Front Vet Sci）**
回溯性研究報告 GS-441524 與 molnupiravir **療效相近**（惟為回溯設計、尚非正式 non-inferiority RCT，結論需保留）；molnupiravir 口服便利，致突變風險使其多作替代/救援而非首選。

**4. 診斷標準化（AAFP/EveryCat 2022 診斷指引）**
標準化診斷路徑：滲出液 **A:G < 0.4 高度提示 FIP、> 0.8 幾乎可排除**；組織免疫組化（IHC/ICC）仍為確診金標準（特異度高、敏感度中等），治療年代常以「臨床診斷 + 抗病毒治療反應」作替代確診。FCoV 血清抗體效價不能確診。

**5. 法規與可得性轉變**
多國 GS-441524 已合法化或可獸醫處方（含台灣經獸醫處方）；非法/灰市來源純度與劑量不可靠，應導向合法處方管道。
> 臨床內容與所有劑量需獸醫師依現行指引與仿單核對。`,
  clinical_pearl: 'FIP 的診斷在乾型中仍然是臨床挑戰。單一檢查無法確診，需要「拼圖式」診斷：年輕貓 + 不明原因發燒 + 高球蛋白血症（A/G < 0.6）+ 影像學異常（腎/肝肉芽腫、腸系膜淋巴結腫大）。血清 FCoV 抗體效價僅代表曾接觸 FCoV，不能確診 FIP。確診需組織免疫組化，但在治療年代，臨床診斷加上抗病毒治療反應常作為替代確診標準。',
  common_mistakes: [
    '以血清 FCoV 抗體陽性就診斷 FIP（40-80% 多貓家庭貓有抗體，僅代表接觸過 FCoV）',
    '忽略 Rivalta test 的簡便性與高敏感度，在資源有限的情況下是最佳初篩工具',
    '神經型 FIP 使用濕型劑量（6-10 mg/kg 不足以穿透 BBB，神經型需 15-20 mg/kg）',
    '治療未滿 84 天就停藥（復發風險明顯增加）',
    '仍告知飼主 FIP 為不治之症（GS-441524 已改變預後，治癒率 > 80%）',
  ],
  disease_data: {
    signalment: '好發於 3 個月至 3 歲年輕貓。純種貓（Abyssinian, Bengal, Birman, Ragdoll）風險較高。多貓家庭/收容所貓 FCoV 感染率高。公貓略多於母貓。免疫功能不全（FeLV/FIV 合併感染）增加風險。',
    etiology: '貓冠狀病毒（Feline Coronavirus, FCoV）在宿主體內突變為高致病力 FIPV。突變位點主要在 spike protein（S gene）和 accessory gene 3c。突變為隨機事件，與病毒量和宿主免疫狀態相關。',
    pathogenesis: 'FCoV 腸道感染 → 體內突變獲得巨噬細胞嗜性 → FIPV → 感染巨噬細胞全身散布 → 免疫複合體沉積 + 補體活化 → 血管周圍肉芽腫性炎症 → 體液免疫強/CMI 弱 → 濕型（滲出）；部分 CMI → 乾型（肉芽腫）。',
    clinical_signs: [
      { sign: '腹腔/胸腔積液', category: 'primary', description: '濕型主要表現，黃色高蛋白滲出液' },
      { sign: '不明原因持續發燒', category: 'primary', description: '對抗生素無反應的 >39.5°C 發燒' },
      { sign: '進行性消瘦', category: 'primary', description: '食慾下降與蛋白流失' },
      { sign: '前葡萄膜炎', category: 'secondary', description: '乾型/眼型，mutton fat KP、虹膜色變' },
      { sign: '神經症狀', category: 'secondary', description: '共濟失調、癲癇、後肢輕癱（神經型）' },
      { sign: '黃疸', category: 'secondary', description: '肝臟肉芽腫浸潤' },
    ],
    staging: null,
    differential_diagnosis: [
      { condition: '細菌性腹膜炎', key_differentiator: '滲出液嗜中性球為主、細菌培養陽性、Rivalta 可陽性但細胞學不同' },
      { condition: '淋巴瘤', key_differentiator: '滲出液細胞學見淋巴母細胞、流式細胞儀' },
      { condition: '右心衰竭', key_differentiator: '滲出液蛋白較低（漏出液）、心臟超音波異常' },
      { condition: '肝病性腹水', key_differentiator: '低蛋白漏出液、膽汁酸異常' },
    ],
    diagnostic_workup: '1. CBC + 生化（高球蛋白、A/G < 0.6、淋巴球減少）→ 2. 滲出液分析（TP > 3.5, 低細胞, A/G < 0.4）+ Rivalta test → 3. 滲出液 FCoV RT-PCR → 4. 超音波（腹腔積液、腎表面不規則、淋巴結腫大）→ 5. 眼科檢查 → 6. 確診：組織免疫組化（IHC）或臨床診斷 + 治療反應',
    treatment_protocol: 'GS-441524 SC SID × 84 天，依病型分級（乾/眼/神經型採較高劑量以求中樞穿透；注射常從較低劑量起始再依反應上調）——確切劑量依現行 ABCD 指引（Tasker 2023）與 DVM/仿單核對，勿視為定值。替代：Molnupiravir PO（人 COVID 口服藥再利用，療效相近但致突變風險未明）。支持療法：食慾促進（Mirtazapine）、止吐、營養支持。治療中監測 CBC + 生化 + 體重。',
    prognosis: '濕型（GS-441524 治療）：緩解率 > 80%。乾型/眼型：60-70%。神經型：50-60%。復發率 10-20%，多在停藥後 3 個月內。未治療：100% 致死。早期診斷與治療明顯改善預後。',
    monitoring: '治療中每 2 週：體重、食慾、體溫。每月：CBC + 生化（球蛋白/A:G ratio 趨勢）。滲出液消退時間追蹤。停藥後每月追蹤 3 個月，之後每 3 個月。注意復發徵兆（發燒、球蛋白回升、體重下降）。',
    owner_communication: 'FIP 在以前是聽到就要放棄的病，現在不一樣了，抗病毒藥可以治得好。GS-441524 整個療程是 84 天，每天皮下注射一次。費用會跟貓的體重直接掛勾。多數濕型的貓治療反應都不錯。療程結束之後也要定期回診追蹤，怕復發。多貓家庭裡其他貓可能帶有 FCoV，但帶原不等於會發病。',
  },
  diagnostic_data: null,
  procedure_data: null,
  visual_placeholders: [
    { position: '免疫決定結局段落後', type: 'flowchart', description: 'FCoV 感染後免疫反應與 FIP 發展決策樹' },
    { position: '診斷工具表後', type: 'flowchart', description: 'FIP 診斷決策流程圖（濕型 vs 乾型）' },
  ],
  interactive_placeholders: [],
  drug_api_links: ['GS-441524', 'Molnupiravir', 'GC376', 'Mirtazapine'],
  references: [
    { type: 'guideline', citation: 'Tasker S, Addie DD, Egberink H, et al. Feline Infectious Peritonitis: European Advisory Board on Cat Diseases Guidelines. Viruses. 2023;15(9):1847. doi:10.3390/v15091847.', relevance: 'ABCD 歐洲貓 FIP 現行診療指引（治療/管理主要依據）' },
    { type: 'guideline', citation: 'Thayer V, Gogolski S, Felten S, et al. 2022 AAFP/EveryCat Feline Infectious Peritonitis Diagnosis Guidelines. J Feline Med Surg. 2022;24(9):905-933. doi:10.1177/1098612X221118761.', relevance: 'AAFP/EveryCat 診斷標準化指引（A:G 閾值、IHC、診斷路徑）' },
    { type: 'journal', citation: 'Gokalsing E, et al. Efficacy of GS-441524 for Feline Infectious Peritonitis: A Systematic Review (2018-2024). Pathogens. 2025;14(7):717. doi:10.3390/pathogens14070717.', relevance: '系統性回顧：11 研究約 650 貓，GS-441524 整體成功率約 84.6%' },
    { type: 'journal', citation: 'Coggins SJ, Norris JM, Malik R, et al. Outcomes of treatment of cats with feline infectious peritonitis using parenterally administered remdesivir, with or without transition to orally administered GS-441524. J Vet Intern Med. 2023;37(5):1772-1783. doi:10.1111/jvim.16803.', relevance: '注射 remdesivir 起手、轉口服 GS-441524 之實務療效' },
    { type: 'journal', citation: 'Sase O. GS-441524 and molnupiravir are similarly effective for the treatment of cats with feline infectious peritonitis. Front Vet Sci. 2024;11:1422408. doi:10.3389/fvets.2024.1422408.', relevance: 'GS-441524 與 molnupiravir 療效相近（回溯性，結論需保留）' },
    { type: 'journal', citation: 'Pedersen NC, Perron M, Bannasch M, et al. Efficacy and safety of the nucleoside analog GS-441524 for treatment of cats with naturally occurring feline infectious peritonitis. J Feline Med Surg. 2019;21(4):271-281. doi:10.1177/1098612X19825701.', relevance: 'GS-441524 治療 FIP 的奠基性原始研究（原始劑量基準）' },
    { type: 'textbook', citation: 'Nelson RW, Couto CG. Small Animal Internal Medicine, 6th ed. Elsevier, 2020. Chapter 95: Feline Infectious Peritonitis.', relevance: 'FIP 教科書章節' },
  ],
  is_current: true,
  created_at: now,
};

/** 貓下泌尿道疾病 (FLUTD)，疾病型 */
const contentFLUTD: NodeContent = {
  id: 'CONTENT-IM-L3-018',
  node_id: 'IM-L3-018',
  version: 2,
  summary: 'FLUTD 不是單一疾病，是一群症狀的集合：排尿困難、血尿、頻尿。最常見的病因是貓特發性膀胱炎（FIC），佔了 55-69%，壓力是引信。公貓尿道阻塞屬於急診，不能拖。治療核心是多模式環境改善（MEMO）跟壓力管理。台灣這邊問題特別大：都會區室內貓比例高、乾飼料為主、高溫多濕又喝水少，FLUTD 盛行率偏高。公貓尿道阻塞是台灣貓急診最常見的幾個主訴之一。',
  learning_objectives: [
    '列舉 FLUTD 的主要病因並說明各自的占比與特徵',
    '區分貓特發性膀胱炎（FIC）與其他 FLUTD 病因的診斷策略',
    '說明壓力作為 FIC 觸發因子的神經內分泌機轉',
    '制定多模式環境改善（MEMO）方案',
    '說明公貓尿道阻塞的緊急處理流程（ECC crossover）',
  ],
  key_points: [
    'FLUTD 病因分布：FIC 55-69%、尿路結石 15-22%、尿道栓子 10-21%、UTI < 5%（年輕貓）、腫瘤 < 2%',
    'FIC 核心機轉：壓力 → HPA 軸 + SAM 系統異常 → 膀胱 GAG 層缺損 → 神經源性炎症 → 疼痛/頻尿',
    '結晶尿：Struvite（磷酸銨鎂，可溶解）vs CaOx（草酸鈣，不可溶解，需手術）',
    '公貓尿道阻塞 ⚠️ 急診：高鉀血症 → 心律不整 → 死亡。立即導尿 + 電解質矯正',
    'MEMO（Multimodal Environmental Modification）：增加水源/濕食、乾淨貓砂盆（N+1 規則）、環境豐富化、減少壓力源',
    '飲食：Struvite 溶解用處方飲食（酸化 + 限鎂）；CaOx 預防用非酸化飲食',
    '復發性尿道阻塞公貓：考慮會陰尿道造口術（perineal urethrostomy, PU）',
  ],
  body: `# 貓下泌尿道疾病 (Feline Lower Urinary Tract Disease, FLUTD)

## 一、病理機制 (Pathophysiology)

### 貓特發性膀胱炎 (FIC)，最常見病因

神經內分泌失調模型：

壓力事件 → 中樞交感神經系統過度活化 → 去甲腎上腺素 (NE) 釋放增加 → 膀胱壁感覺神經 C-fiber 活化 → Substance P 釋放 → 肥大細胞脫顆粒 → 組胺/5-HT 釋放 → 黏膜下水腫/疼痛

GAG 層缺損：正常膀胱表面有 glycosaminoglycan (GAG) 層保護上皮 → FIC 貓 GAG 分泌減少 → 尿液中刺激物質直接接觸上皮 → 炎症循環

| 病因 | 占比 | 機轉 | 復發率 |
|------|------|------|--------|
| FIC | 55-69% | 神經源性炎症 + GAG 缺損 | 40-50% |
| Struvite 結石/結晶 | 15-22% | 鹼性尿 + 高鎂 + 高磷 | 飲食控制可預防 |
| CaOx 結石 | 5-10% | 高鈣尿 + 低 citrate | 手術移除、預防復發 |
| 尿道栓子 | 10-21% | 結晶 + 蛋白質基質 + 炎症碎片 | 中等 |
| UTI（細菌性） | < 5%（年輕）、> 50%（>10y） | 細菌上行感染 | 治療可根治 |

### 公貓尿道阻塞

公貓尿道解剖（遠端尿道直徑僅 ~1 mm）→ 結晶/栓子/炎症碎片/尿道痙攣 → 阻塞 → 膀胱過度膨脹 → 腎後性 AKI → 高鉀血症 → 心律不整（心搏過緩 → VF → 心跳停止）

## 二、臨床表現與診斷 (Clinical Signs & Diagnosis)

| 臨床表現 | 描述 | 緊急程度 |
|---------|------|---------|
| 頻尿 (pollakiuria) | 頻繁進出貓砂盆 | 非緊急 |
| 排尿困難 (dysuria) | 蹲踞用力、哀叫 | 中等 |
| 血尿 (hematuria) | 粉紅色至紅色尿液 | 非緊急 |
| 不當排尿 | 貓砂盆外排尿 | 非緊急 |
| 無法排尿 | ⚠️ 阻塞徵兆 | 急診 |
| 嘔吐/嗜睡 | ⚠️ 阻塞合併尿毒症 | 急診 |

### 診斷流程

| 步驟 | 檢查 | 目的 |
|------|------|------|
| 1 | 觸診膀胱 | 阻塞？（膀胱極度膨脹、不可壓迫）|
| 2 | 尿液分析 + 沉渣 | 結晶、細菌、血球 |
| 3 | 尿液培養 | > 10 歲貓、反覆發作、膿尿時 |
| 4 | 血檢 | 阻塞時：Cre/K/血氣 |
| 5 | 腹腔 X 光/超音波 | 結石（CaOx 射線不透光、Struvite 變異）|

### FIC vs 其他病因鑑別

| 特徵 | FIC | 結石 | UTI |
|------|-----|------|-----|
| 年齡 | 1-10 歲 | 任何 | > 10 歲多 |
| 病程 | 自限性（3-7 天）| 持續 | 持續 |
| 壓力觸發 | 常見 | 無 | 無 |
| 結晶 | 可有可無 | 常見 | 可有 |
| 細菌 | 陰性 | 通常陰性 | 陽性 |
| 影像 | 膀胱壁增厚 | 結石 | 通常正常 |

## 三、治療策略 (Treatment)

### FIC 管理，MEMO

| 策略 | 具體措施 | 證據等級 |
|------|---------|---------|
| 增加水攝取 | 濕食、多水碗、流動飲水機 | Level I |
| 貓砂盆優化 | N+1 規則（貓數+1 個砂盆）、每日清理、不加蓋 | Level II |
| 環境豐富化 | 垂直空間、藏匿處、互動遊戲、窗邊觀景台 | Level II |
| 壓力減輕 | 避免環境改變、Feliway（合成臉部費洛蒙） | Level II-III |
| 止痛 | [藥物:Buprenorphine] 0.01-0.03 mg/kg SL q8-12h（急性期） | Level III |

### 尿道阻塞急診處理

| 步驟 | 處置 | 優先序 |
|------|------|--------|
| 1 | ECG + 血鉀 | 立即 |
| 2 | 高鉀處理 | K > 6.5：Calcium gluconate 10% 0.5-1 mL/kg slow IV |
| 3 | IV 輸液 | 平衡晶體液（LRS/Plasma-Lyte）即可——微量鉀可忽略且較快矯正代謝性酸中毒；「必用 0.9% NaCl 避鉀」為過時觀念 |
| 4 | 導尿 | 鎮靜 → 3.5F 紅色橡膠導管 → 生理食鹽水沖洗 |
| 5 | 封閉式導尿系統 | 留置 24-48 hr，監測尿量 |
| 6 | 阻塞後利尿 | 監測多尿期電解質流失 |

### 結石管理

| 結石類型 | 治療 | 飲食 | 預防 |
|---------|------|------|------|
| Struvite | 飲食溶解（2-4 週） | 酸化 + 限鎂處方飲食 | 濕食 + 酸化飲食 |
| CaOx | 手術移除（不可溶解） | 非酸化飲食 + 增加水攝取 | 濕食 + 增加水攝取 |
| 混合型 | 結石分析後決定 | 依主要成分 | 個別化 |

會陰尿道造口術 (PU)：適應症為反覆尿道阻塞（≥ 2-3 次）。手術目的為擴大尿道開口。併發症包括尿道狹窄（5-10%）和反覆 UTI 風險增加。

## 四、人醫借鑒 (Translational Insights)

| 人醫概念 | 獸醫應用潛力 | 現況 |
|---------|-------------|------|
| 間質性膀胱炎／膀胱疼痛症候群（IC/BPS） | FIC 與人 IC/BPS 病理高度相似（GAG 缺損、神經源性炎症），互為自然動物模型 | 雙向 translational；FIC 為人 IC 重要自然模型 |
| Pandora syndrome 概念 | FIC 視為全身性壓力相關疾病（共病腸胃/行為），非僅膀胱局部 | Buffington 提出，整體醫療取向 |
| 行為＋環境多模式療法（人 IC 一線） | 對應貓 MEMO；證據最強的 FIC 介入 | 已為 FIC 治療核心 |
| GAG 補充（人 IC 用 pentosan polysulfate） | 犬貓 GAG 補充劑（PPS/glucosamine） | 人用 PPS 有條件證據，貓證據不足、不建議常規 |

## 五、臨床爭議與知識空缺 (Controversies & Knowledge Gaps)

| 爭議議題 | 現況 | Evidence Level |
|---------|------|---------------|
| Prazosin 預防再阻塞 | 早期回顧性支持，惟前瞻研究（Conway 2022）顯示未降低、甚至增加再阻塞 | Level II |
| GAG 補充劑（PPS/glucosamine）對 FIC 效益 | 多為陰性/證據不足，不建議常規 | Level II |
| 阻塞貓輸液選擇（平衡液 vs 0.9% NaCl） | 平衡晶體液安全且矯酸較快，過時的「避鉀用 NaCl」已被挑戰 | Level II |
| 抗焦慮藥（amitriptyline/fluoxetine）於難治性 FIC | 僅限難治性長期使用，非一線，證據有限 | Level III |

## 六、近期實證更新 (Recent Evidence Updates)

1. **Prazosin 不再常規（Conway 2022）**：前瞻研究顯示 prazosin 未降低、反而可能增加尿道再阻塞，挑戰過去常規使用。
2. **阻塞輸液用平衡晶體液**：LRS/Plasma-Lyte 安全、矯正代謝性酸中毒較快；「必用 0.9% NaCl 避鉀」為過時觀念。
3. **MEMO 為證據最強介入（ISFM）**：多模式環境改善＋全濕食降低 FIC 復發 70-80%，優於藥物。
4. **FIC = Pandora syndrome**：以全身壓力相關疾病框架整體管理（共病評估、減壓）。
> FLUTD 處置須區分阻塞（急診）與非阻塞、依結石成分導向飲食；藥物與輸液選擇由獸醫依個案與現行實證判斷。`,
  clinical_pearl: 'FIC 最重要的治療不是藥物，是環境改善（MEMO）。研究顯示 MEMO 可降低 FIC 復發率 70-80%，效果優於任何藥物。最關鍵的介入是增加水攝取（改為全濕食）和減少環境壓力。FIC 是自限性疾病（通常 3-7 天自行緩解），但如不處理壓力源，40-50% 會在 6-12 個月內復發。GAG 補充劑（pentosan polysulfate, glucosamine）證據不足。',
  common_mistakes: [
    '年輕貓的 FLUTD 給予抗生素，< 10 歲貓 UTI < 5%，多數為 FIC 不需要抗生素',
    '忽略公貓尿道阻塞的高鉀血症危機，未先矯正高鉀就嘗試導尿',
    '未做結石分析就選擇飲食治療，CaOx 不可溶解，酸化飲食反而促進 CaOx 形成',
    'FIC 治療僅靠藥物不改善環境，MEMO 是最重要且證據最強的介入',
    '導尿後太早拔除導尿管（建議留置 24-48 hr 以確保尿道腫脹消退）',
  ],
  disease_data: {
    signalment: '犬貓均可發生，但 FLUTD 以貓為主。好發年齡 1-10 歲。公貓尿道阻塞風險遠高於母貓（解剖差異）。室內貓、肥胖貓、多貓家庭、壓力環境為 FIC 風險因子。',
    etiology: 'FIC（55-69%）：壓力觸發的神經源性膀胱炎。尿路結石（15-22%）：Struvite 或 CaOx。尿道栓子（10-21%）：結晶 + 蛋白基質。UTI（< 5% 年輕貓、> 50% 老年貓）：細菌感染。腫瘤（< 2%）：移行上皮癌。',
    pathogenesis: 'FIC：壓力 → SAM/HPA 軸異常 → 膀胱 C-fiber 過度活化 → Substance P/SP 釋放 → 肥大細胞脫顆粒 → 神經源性炎症 + GAG 層缺損 → 疼痛循環。阻塞：結晶/栓子/水腫阻塞遠端尿道 → 腎後性 AKI → 高鉀 → 心律不整。',
    clinical_signs: [
      { sign: '頻尿/排尿困難', category: 'primary', description: '頻繁進出貓砂盆、蹲踞用力' },
      { sign: '血尿', category: 'primary', description: '粉紅至紅色尿液' },
      { sign: '不當排尿', category: 'primary', description: '貓砂盆外排尿，常被誤認為行為問題' },
      { sign: '無法排尿（阻塞）', category: 'secondary', description: '⚠️ 急診！膀胱膨脹、疼痛、嘔吐' },
      { sign: '嗜睡/嘔吐（阻塞）', category: 'secondary', description: '尿毒症與高鉀血症' },
    ],
    staging: null,
    differential_diagnosis: [
      { condition: '行為性不當排尿', key_differentiator: '無血尿/排尿困難、正常尿量、壓力/領域相關' },
      { condition: '慢性腎病', key_differentiator: '多尿/多渴為主、USG 低、氮血症' },
      { condition: '糖尿病', key_differentiator: '多尿/多渴/多食、高血糖、糖尿' },
      { condition: '甲狀腺機能亢進', key_differentiator: '> 10 歲貓、體重減輕、多食、T4 升高' },
    ],
    diagnostic_workup: '1. 觸診膀胱（阻塞評估）→ 2. 如阻塞：立即 ECG + 血鉀 + 導尿 → 3. 尿液分析 + 沉渣（結晶/細菌/血球）→ 4. 腹腔 X 光（結石）+ 超音波（膀胱壁/結石/腫塊）→ 5. > 10 歲或反覆發作：尿液培養 → 6. 結石分析（手術移除時）',
    treatment_protocol: 'FIC：MEMO（環境改善）為核心 + 急性疼痛：Buprenorphine 0.01-0.03 mg/kg SL。阻塞：高鉀矯正 → 鎮靜導尿 → 留置 24-48 hr → 阻塞後利尿期監測。Struvite：處方飲食溶解 2-4 週。CaOx：手術移除。UTI：依培養敏感性抗生素。復發性阻塞：PU 手術。',
    prognosis: 'FIC：自限性但復發率 40-50%（MEMO 可降至 10-20%）。尿道阻塞：及時治療存活率 > 90%。延遲治療（> 48-72 hr）：高鉀致死風險。結石：治療後預後良好但復發率 Struvite 30-50%、CaOx 30-70% 五年。PU 術後 UTI 風險增加。',
    monitoring: 'FIC：急性發作後 2 週追蹤。MEMO 實施後 1-3 個月評估效果。阻塞後：拔管後 24-48 hr 監測排尿。結石溶解飲食：每 2-4 週 X 光追蹤直到消失。長期：體重管理、飲水量、尿液 pH。',
    owner_communication: 'FLUTD 在貓真的常見到爆。最常見的 FIC 不是感染，是壓力。環境改善（多放幾個水碗、貓砂盆品質、減壓）這些事，往往比吃藥更有效。公貓如果尿不出來，那是急診，掛急診的等級，不能拖。改成全濕食可以把水喝量拉上來，復發率會掉。',
  },
  diagnostic_data: null,
  procedure_data: null,
  visual_placeholders: [
    { position: 'FLUTD 病因分布表後', type: 'flowchart', description: 'FLUTD 診斷與病因鑑別流程圖' },
    { position: '尿道阻塞處理表後', type: 'flowchart', description: '公貓尿道阻塞急診處理流程圖' },
  ],
  interactive_placeholders: [],
  drug_api_links: ['Buprenorphine', 'Calcium gluconate', 'Prazosin', 'Maropitant'],
  references: [
    { type: 'journal', citation: 'Westropp JL, Kass PH, Buffington CAT. Evaluation of the effects of stress in cats with idiopathic cystitis. Am J Vet Res. 2006;67(4):731-736. doi:10.2460/ajvr.67.4.731.', relevance: 'FIC 壓力效應研究' },
    { type: 'journal', citation: 'Buffington CAT. Idiopathic cystitis in domestic cats—beyond the lower urinary tract. J Vet Intern Med. 2011;25(4):784-796. doi:10.1111/j.1939-1676.2011.0732.x.', relevance: 'FIC 神經內分泌機轉與 Pandora syndrome 回顧' },
    { type: 'textbook', citation: 'Nelson RW, Couto CG. Small Animal Internal Medicine, 6th ed. Elsevier, 2020. Chapter 46: Feline Lower Urinary Tract Disease.', relevance: 'FLUTD 教材' },
    { type: 'journal', citation: 'Defauw PAM, Van de Maele I, Duchateau L, et al. Risk factors and clinical presentation of cats with feline idiopathic cystitis. J Feline Med Surg. 2011;13(12):967-975. doi:10.1016/j.jfms.2011.08.001.', relevance: 'FIC 風險因子研究' },
    { type: 'journal', citation: 'Conway DS, Rozanski EA, Wayne AS. Prazosin administration increases the rate of recurrent urethral obstruction in cats. J Am Vet Med Assoc. 2022;260(S2):S7-S11. doi:10.2460/javma.21.10.0469.', relevance: 'Prazosin 與尿道再阻塞前瞻研究（近期實證）' },
  ],
  is_current: true,
  created_at: now,
};

/** 貓膽管炎與三合症 (Feline Cholangitis & Triaditis)，疾病型 */
const contentCholangitis: NodeContent = {
  id: 'CONTENT-IM-L3-019',
  node_id: 'IM-L3-019',
  version: 2,
  summary: '貓的膽管炎大致分兩種：嗜中性球型（化膿性）跟淋巴球型。Triaditis 是膽管炎、胰臟炎跟 IBD 三個一起爆，貓的膽胰管解剖天生就讓這三個器官容易彼此牽動。嗜中性球型主要是細菌上行感染，E. coli 最常見。淋巴球型則可能是免疫介導。確診金標準是肝臟切片。台灣門診中貓膽管炎屬於常見的肝膽疾病，淋巴球型在老年貓盛行率高。診斷 Triaditis 需要把超音波、fPLI、肝切片合起來看，台灣的大動物醫院多半都有這套能力。',
  learning_objectives: [
    '區分嗜中性球型與淋巴球型膽管炎的病因、病理與治療差異',
    '說明 Triaditis 的解剖學基礎與三器官交互影響機轉',
    '制定膽管炎的診斷流程（影像學、FNA、肝切片）',
    '正確選擇膽管炎的抗生素與免疫抑制治療方案',
    '說明 Ursodiol 和 SAMe 在貓肝膽疾病中的輔助角色',
  ],
  key_points: [
    '嗜中性球型（Neutrophilic/Suppurative）：上行性細菌感染（E. coli, Enterococcus），急性表現，需抗生素',
    '淋巴球型（Lymphocytic）：慢性、可能免疫介導，門脈區小膽管周圍淋巴球浸潤，需 Prednisolone',
    'Triaditis 解剖基礎：貓的總膽管與胰管在十二指腸乳頭共同開口 → 腸道細菌/炎症可同時波及膽道與胰管',
    '診斷：超音波（膽囊壁增厚/膽泥/膽管擴張）+ 超音波引導 FNA + 肝臟切片（金標準）',
    '嗜中性球型治療：Amoxicillin-Clavulanate 12.5-25 mg/kg PO BID × 4-6 週 + Ursodiol + SAMe',
    '淋巴球型治療：Prednisolone 1-2 mg/kg/day + Ursodiol + SAMe',
    'Ursodiol（利膽酸）：10-15 mg/kg PO SID，促進膽汁流動 + 細胞保護 + 抗炎（完全性膽道阻塞禁用）',
    '嗜中性球型務必送膽汁培養＋藥敏（常膽汁培養陽性而肝組織培養陰性）；淋巴球型亦驗出細菌 DNA，未必純免疫（Otte 2012）',
  ],
  body: `# 貓膽管炎與三合症 (Feline Cholangitis & Triaditis)

## 一、病理機制 (Pathophysiology)

### 解剖基礎

貓獨特解剖：貓的總膽管（common bile duct）與主胰管（major pancreatic duct）在十二指腸主乳頭（major duodenal papilla）共同開口。此解剖特徵使得腸道細菌可上行感染膽道與胰管，解釋了 Triaditis 的高發生率。

### 嗜中性球型膽管炎

上行性感染機轉：腸道細菌（E. coli, Enterococcus, Clostridium, Bacteroides）→ 經十二指腸乳頭上行 → 膽管感染 → 急性嗜中性球浸潤 → 化膿性膽管炎 → 嚴重者膽管壁壞死 + 膽管周圍膿瘍

促發因子：膽管結石/膽泥 → 膽汁滯留 → 細菌繁殖；IBD → 腸道屏障崩解 → 細菌移位

### 淋巴球型膽管炎

免疫介導機轉（推測）：門脈區小膽管上皮慢性免疫損傷 → 小型淋巴球 + 漿細胞浸潤 → 慢性非化膿性炎症 → 膽管破壞性病變 → 長期可發展為膽管纖維化

與人醫比較：類似人類原發性膽汁性膽管炎（PBC）或原發性硬化性膽管炎（PSC），均為免疫介導的膽管破壞

### Triaditis

| 組成 | 機轉 | 交互影響 |
|------|------|---------|
| 膽管炎 | 細菌上行/免疫介導 | 膽汁酸毒性損傷胰管 |
| 胰臟炎 | 胰管阻塞/炎症擴散 | 胰管水腫阻塞膽管 |
| IBD | 腸道屏障崩解 | 細菌移位 → 膽管 + 胰管感染 |

## 二、臨床表現與診斷 (Clinical Signs & Diagnosis)

| 表現 | 嗜中性球型 | 淋巴球型 |
|------|-----------|---------|
| 發病 | 急性 | 慢性/漸進 |
| 發燒 | 常見 | 少見 |
| 黃疸 | 常見（50-70%） | 變異（30-50%） |
| 嘔吐 | 常見 | 間歇性 |
| 厭食 | 嚴重 | 輕度至中度 |
| 腹痛 | 可能 | 少見 |
| 肝腫大 | 可能 | 少見 |

### 實驗室檢查

| 指標 | 嗜中性球型 | 淋巴球型 |
|------|-----------|---------|
| ALP/GGT | 明顯升高 | 輕度升高 |
| ALT | 中度升高 | 輕-中度升高 |
| Total bilirubin | 升高（膽汁滯留） | 變異 |
| WBC | 嗜中性球升高 ± 左移 | 通常正常 |
| fPLI | 可能升高（合併胰臟炎） | 可能升高 |
| Cobalamin (B12) | 可能低（合併 IBD） | 可能低 |

### 影像學

| 超音波發現 | 意義 |
|-----------|------|
| 膽囊壁增厚 > 1 mm | 膽管炎 |
| 膽泥/膽石 | 促發因子 |
| 總膽管擴張 > 5 mm | 膽管阻塞 |
| 胰臟低回音 + 周圍脂肪高回音 | 合併胰臟炎 |
| 小腸壁層次模糊 | 合併 IBD |

### 確診

| 方法 | 優勢 | 限制 |
|------|------|------|
| 超音波引導 FNA | 微創、快速 | 取樣偏差、無法評估結構 |
| 肝臟切片（手術/腹腔鏡） | 金標準、可分型 | 侵入性、需麻醉 |
| 膽汁培養 | 確認細菌 + 藥敏 | 需超音波引導膽囊穿刺 |

## 三、治療策略 (Treatment)

### 嗜中性球型

| 治療 | 藥物 | 劑量 | 療程 |
|------|------|------|------|
| 抗生素 | [藥物:Amoxicillin-Clavulanate] | 12.5-25 mg/kg PO BID | 4-6 週 |
| 利膽 | [藥物:Ursodiol] | 10-15 mg/kg PO SID | 長期 |
| 肝保護 | [藥物:SAMe] | 90 mg/cat PO SID（空腹） | 長期 |
| 厭氧菌覆蓋（嚴重者） | [藥物:Metronidazole] | 10 mg/kg PO BID | 2-4 週 |
| 止吐 | [藥物:Maropitant] | 1 mg/kg SC SID | 急性期 |

嚴重者：住院 IV 輸液 + Ampicillin-Sulbactam 30 mg/kg IV q8h → 穩定後轉口服

### 淋巴球型

| 治療 | 藥物 | 劑量 | 療程 |
|------|------|------|------|
| 免疫抑制 | [藥物:Prednisolone] | 1-2 mg/kg/day PO | 起始 2-4 週→緩慢減量 |
| 利膽 | [藥物:Ursodiol] | 10-15 mg/kg PO SID | 長期 |
| 肝保護 | [藥物:SAMe] | 90 mg/cat PO SID（空腹） | 長期 |
| 二線免疫抑制 | [藥物:Chlorambucil] | 2 mg/cat PO q48-72h | Pred 無反應時 |

### Triaditis 綜合管理

同時處理三個組成部分：膽管炎治療（如上）+ 胰臟炎管理（止痛 + 止吐 + 早期營養）+ IBD 管理（飲食試驗 + 必要時 Prednisolone）。Cobalamin 補充（250 μg SC q1wk × 6 週）。

## 四、輔助藥物詳解

| 藥物 | 機轉 | 劑量 | 注意事項 |
|------|------|------|---------|
| Ursodiol | 取代毒性膽汁酸 + 促進膽汁流動 + 免疫調節 + 抗凋亡 | 10-15 mg/kg SID | 膽管完全阻塞時禁用 |
| SAMe | 穀胱甘肽前驅物 → 抗氧化 + 甲基化反應 | 90 mg/cat SID（空腹） | 需空腹給予以確保吸收 |
| Vitamin E | 脂溶性抗氧化劑 | 10 IU/kg/day | 膽汁滯留影響吸收 |
| Cobalamin (B12) | Triaditis 合併 IBD 時常缺乏 | 250 μg SC q1wk | 口服吸收不穩定 |

## 五、人醫借鑒 (Translational Insights)

| 人醫概念 | 獸醫貓肝膽應用 | 現況 |
|---------|-------------|------|
| 原發性膽汁性膽管炎（PBC）/原發性硬化性膽管炎（PSC） | 貓淋巴球型膽管炎與之高度相似（免疫介導小膽管破壞） | 病理對應佳；治療借鑒 UDCA |
| UDCA（ursodiol）為人醫 PBC 一線 | 貓肝膽病輔助保肝/利膽主力 | 已是貓膽管炎標準輔助藥 |
| 抗粒線體抗體（AMA，人 PBC 標記） | 貓淋巴球型膽管炎的血清標記 | 獸醫尚無確立對應標記 |
| MRCP/ERCP 非侵入膽道影像 | 貓膽道阻塞/結構評估 | 獸醫以超音波為主，MRCP 限少數中心 |

## 六、臨床爭議與知識空缺 (Controversies & Knowledge Gaps)

| 爭議議題 | 現況 | Evidence Level |
|---------|------|---------------|
| 淋巴球型膽管炎是「純免疫」還是有細菌參與 | Otte 2012 在淋巴球型貓膽汁驗出細菌 DNA，純免疫模型受挑戰；部分病例可能有細菌觸發 | Level III |
| 淋巴球型膽管炎要不要免疫抑制 | 類固醇廣泛使用但缺 RCT；UDCA 單用 vs 加類固醇的最佳組合未定 | Level IV |
| 「Triaditis」是否被過度診斷 | 屍檢常見三器官同時發炎，但臨床顯著性與診斷門檻仍有爭議 | Level IV |
| 膽汁培養是否該常規做 | 膽汁培養常比肝組織培養更敏感（嗜中性球型尤是），但需超音波引導膽囊穿刺 | Level III |
| 確診切片方式（FNA vs 針/楔形切片） | FNA 取樣偏差大、無法分型；組織切片才是金標準但較侵入 | Level III |

## 七、近期實證更新 (Recent Evidence Update)

**膽汁培養與膽囊沉積物的微生物學（Lee et al 2025, JFMS；Otte et al 2012）**
- **膽汁培養是關鍵微生物檢查**：嗜中性球型膽管炎常**膽汁培養陽性而肝組織培養陰性**——要驗菌、要藥敏就送膽汁（超音波引導膽囊穿刺），別只靠肝切片。Lee 2025（166 例）顯示膽囊沉積物（sludge）與膽汁培養陽性、肝指數升高、膽管肝炎相關。
- **淋巴球型未必「純免疫」**：Otte 2012 在淋巴球型貓膽汁驗出細菌 DNA，提示至少部分病例有細菌參與——即使分型為淋巴球型，仍值得評估膽汁培養，別反射性只給類固醇。

**抗菌藥物管理**：嗜中性球型用**培養導向**抗生素（經驗性常用 amox-clav，嚴重者 ampicillin-sulbactam IV），療程足（4-6 週），而非長期盲目用藥。

**fPLI 不能用來「排除」胰臟炎**：fPLI 對組織學胰臟炎敏感度僅約 60-80%，正常不代表沒胰臟炎；Triaditis 評估要靠**超音波＋臨床＋fPLI 綜合**，不是單一數值。

【台灣落地】台灣中老年貓膽管炎門診常見；嗜中性球型務必送膽汁培養＋藥敏（台灣多重抗藥腸道菌不少），淋巴球型也別忽略細菌可能。三體炎要把胰臟炎、IBD 一起評估。UDCA／SAMe 易取得，是長期保肝主力，但完全性膽道阻塞時 UDCA 禁用。`,
  clinical_pearl: '貓的膽管炎診斷中，ALP 升高比 ALT 更有意義，貓 ALP 半衰期僅 6 小時（犬為 72 小時），所以貓 ALP 即使輕度升高（> 2 倍）都有臨床意義。另外，Triaditis 的貓常同時有胰臟炎，但 fPLI 正常不能排除胰臟炎（敏感度約 60-80%）。超音波見胰臟低回音 + 周圍脂肪高回音更有診斷價值。',
  common_mistakes: [
    '未區分嗜中性球型與淋巴球型膽管炎（治療方向完全不同：一個需要抗生素、一個需要免疫抑制）',
    '淋巴球型膽管炎使用抗生素而非 Prednisolone（無效且延誤治療）',
    'SAMe 與食物同時給予（需空腹以確保吸收，建議餐前 1 小時）',
    '忽略 Triaditis 的可能性，僅治療膽管炎而未同時處理胰臟炎和 IBD',
    '膽管完全阻塞時使用 Ursodiol（可加重膽汁淤積損傷）',
  ],
  disease_data: {
    signalment: '貓為主。嗜中性球型：任何年齡，中年多見。淋巴球型：中老年貓。波斯貓可能有品種傾向。公母比無明顯差異。Triaditis 常見於中老年貓。',
    etiology: '嗜中性球型：腸道細菌上行感染（E. coli, Enterococcus, Clostridium, Bacteroides）→ 膽管化膿性炎症。淋巴球型：推測為免疫介導（類似人類 PBC/PSC），確切病因不明。Triaditis：膽管炎 + 胰臟炎 + IBD 三者經共同膽胰管開口互相影響。',
    pathogenesis: '嗜中性球型：腸道細菌經十二指腸乳頭上行 → 膽管急性嗜中性球浸潤 → 化膿性炎症 → 膽管壁損傷。淋巴球型：小膽管周圍免疫性淋巴球 + 漿細胞浸潤 → 慢性膽管破壞 → 纖維化。Triaditis：三器官經共同管道互相傳遞炎症。',
    clinical_signs: [
      { sign: '黃疸', category: 'primary', description: '膽汁滯留，嗜中性球型更常見' },
      { sign: '嘔吐/厭食', category: 'primary', description: '急性（嗜中性球型）或慢性（淋巴球型）' },
      { sign: '體重減輕', category: 'primary', description: '慢性進行性，淋巴球型和 Triaditis 常見' },
      { sign: '發燒', category: 'secondary', description: '嗜中性球型常見，淋巴球型少見' },
      { sign: '腹痛', category: 'secondary', description: '急性膽管炎或合併胰臟炎' },
      { sign: '腹瀉', category: 'secondary', description: '合併 IBD 時（Triaditis）' },
    ],
    staging: null,
    differential_diagnosis: [
      { condition: '貓肝臟脂肪沉積症', key_differentiator: '肥胖貓突然厭食、嚴重黃疸、肝臟 FNA 脂肪空泡' },
      { condition: '肝臟淋巴瘤', key_differentiator: '肝腫大、FNA/切片見淋巴母細胞、流式細胞儀' },
      { condition: '膽管阻塞（結石/腫瘤）', key_differentiator: '超音波見膽管明顯擴張 > 5 mm、膽石' },
      { condition: '貓肝臟類澱粉沉著', key_differentiator: '肝切片剛果紅染色陽性，好發 Siamese/Abyssinian' },
    ],
    diagnostic_workup: '1. CBC + 生化（肝指數/膽紅素/白蛋白）+ fPLI → 2. 腹腔超音波（膽囊壁/膽管/胰臟/小腸）→ 3. 超音波引導膽囊穿刺（培養 + 細胞學）→ 4. 超音波引導肝臟 FNA → 5. 確診：肝臟切片（手術或腹腔鏡，組織病理分型）→ 6. Cobalamin + Folate（評估 IBD）',
    treatment_protocol: '嗜中性球型：Amoxicillin-Clavulanate 12.5-25 mg/kg PO BID × 4-6 週 + Ursodiol 10-15 mg/kg SID + SAMe 90 mg/cat SID（空腹）。淋巴球型：Prednisolone 1-2 mg/kg/day → 緩慢減量 + Ursodiol + SAMe。Triaditis：同時處理三組成。支持：止吐、食慾促進、Cobalamin 補充。',
    prognosis: '嗜中性球型（急性、適當抗生素）：預後良好至謹慎。嚴重化膿性/膽管壞死：預後謹慎。淋巴球型：慢性病程，適當管理可存活數月至數年。Triaditis：取決於三組成各自嚴重度。早期診斷與治療改善預後。長期可能發展為膽管纖維化/硬化。',
    monitoring: '治療開始後 2-4 週追蹤肝指數 + 膽紅素。嗜中性球型：抗生素完成後 1 週追蹤。淋巴球型：Pred 減量期每 2-4 週追蹤。長期每 2-3 個月追蹤肝功能。Triaditis：同時監測 fPLI 和腸道症狀。體重追蹤。',
    owner_communication: '貓的膽管炎有兩種型態，治療方向完全不同。嗜中性球型要把抗生素一個療程吃完。淋巴球型則可能要長期吃低劑量類固醇。所謂 Triaditis 就是膽管、胰臟和腸道一起發炎，三個一起出包，要一起處理。Ursodiol 跟 SAMe 是輔助保肝的好幫手。記得回診追蹤肝功能。',
  },
  diagnostic_data: null,
  procedure_data: null,
  visual_placeholders: [
    { position: 'Triaditis 表後', type: 'flowchart', description: '貓膽管炎分型與 Triaditis 三器官交互關係圖' },
  ],
  interactive_placeholders: [],
  drug_api_links: ['Amoxicillin-Clavulanate', 'Ursodiol', 'SAMe', 'Prednisolone', 'Metronidazole', 'Chlorambucil', 'Maropitant', 'Cobalamin'],
  references: [
    { type: 'journal', citation: 'Lee K, Guess SC, Villarino NF, Haines JM. "Gallbladder sludge in cats: associations with bile culture, liver enzymes and cholangiohepatitis in 166 cases." J Feline Med Surg. 2025;27(10). doi:10.1177/1098612X251379736', relevance: '近期：膽囊沉積物與膽汁培養/肝指數/膽管肝炎關聯（166 例）' },
    { type: 'journal', citation: 'Otte CMA, Gutiérrez OP, Favier RP, Rothuizen J. "Detection of bacterial DNA in bile of cats with lymphocytic cholangitis." Vet Microbiol. 2012;156(1-2):217-221. doi:10.1016/j.vetmic.2011.10.023', relevance: '淋巴球型膽管炎驗出細菌 DNA——挑戰純免疫模型' },
    { type: 'journal', citation: 'Callahan Clark JE, Haddad JL, Brown DC, Morgan MJ, et al. "Feline cholangitis: a necropsy study of 44 cats." J Feline Med Surg. 2011;13(8):570-576. doi:10.1016/j.jfms.2011.05.002', relevance: '貓膽管炎病理研究' },
    { type: 'journal', citation: 'Marolf AJ, Leach L, Gibbons DS, Bachand A, Twedt D. "Ultrasonographic Findings of Feline Cholangitis." J Am Anim Hosp Assoc. 2012;48(1):36-42. doi:10.5326/jaaha-ms-5671', relevance: '貓膽管炎超音波診斷' },
    { type: 'guideline', citation: 'Rothuizen J et al. "WSAVA Standards for Clinical and Histological Diagnosis of Canine and Feline Liver Diseases." WSAVA Liver Standardization Group. 2006.', relevance: '肝臟疾病組織病理分類標準' },
    { type: 'textbook', citation: 'Nelson RW, Couto CG. Small Animal Internal Medicine, 6th ed. Elsevier, 2020. Chapter 37: Hepatobiliary Diseases in the Cat.', relevance: '貓肝膽疾病教材' },
  ],
  is_current: true,
  created_at: now,
};

/** 貓下呼吸道疾病/貓哮喘 (FLAD)，疾病型 */
const contentFelineAsthma: NodeContent = {
  id: 'CONTENT-IM-L3-020',
  node_id: 'IM-L3-020',
  version: 2,
  summary: '貓下呼吸道疾病（FLAD）是一個傘狀概念，最常見的就是大家講的貓哮喘（嗜酸球性），另一型是慢性支氣管炎（嗜中性球性），兩者只能靠 BAL 細胞學分型。盛行率 1-5%。病理上是 Th2 驅動的嗜酸球性氣道發炎，加上支氣管痙攣跟氣道重塑，跟人類的過敏性氣喘長得很像。臨床上看到的是反覆咳嗽、喘鳴、呼吸困難。長期治療首選吸入型類固醇（Fluticasone）加支氣管擴張劑，急性發作的時候要趕快用 Terbutaline 解痙。',
  learning_objectives: [
    '說明貓哮喘的免疫病理機轉（Th2/嗜酸球性氣道發炎）',
    '區分貓哮喘的臨床分級（輕度、中度、重度/急性危象）',
    '正確判讀胸腔 X 光特徵（支氣管壁增厚 doughnut sign、肺過度充氣）',
    '制定 FLAD 的階梯式治療方案（吸入型 vs 全身性類固醇）',
    '說明急性哮喘發作的緊急處理流程',
  ],
  key_points: [
    '盛行率：貓群體約 1-5%，暹羅貓可能有品種傾向',
    '核心病理：Th2 → IL-5 → 嗜酸球浸潤 → 支氣管痙攣 + 黏液過度分泌 + 氣道重塑',
    '胸腔 X 光特徵：支氣管壁增厚（doughnut/tram line sign）、肺過度充氣（橫膈後移、心臟偏小）',
    'BAL 細胞學金標準：嗜酸球 > 17% 高度支持 FLAD',
    '治療階梯：輕度→吸入 Fluticasone 110 μg BID；中度→加 Albuterol PRN；重度→全身性 Prednisolone',
    '急性發作緊急處理：氧氣 + Terbutaline 0.01 mg/kg SC/IM → 支氣管痙攣解除',
    '吸入型治療需搭配貓專用面罩與儲霧器（spacer），飼主衛教很重要',
    'FLAD 是傘狀名詞：氣喘（嗜酸球性）vs 慢性支氣管炎（嗜中性球性）臨床/X 光無法區分，只能靠 BAL 細胞學分型',
    '支氣管擴張劑僅作急救/輔助、不可單用；外消旋 albuterol 的 (S)-鏡像體長期可能加重氣道發炎，優先 (R)-levalbuterol',
  ],
  body: `# 貓下呼吸道疾病 / 貓哮喘 (Feline Asthma / FLAD)

## 一、病理機制 (Pathophysiology)

### 免疫病理

吸入過敏原（室內塵蟎、花粉、黴菌、貓砂粉塵）→ 氣道上皮 DC 攝取 → Th2 分化 → IL-4（IgE 產生）+ IL-5（嗜酸球活化）+ IL-13（杯狀細胞化生、氣道高反應性）→ IgE 結合肥大細胞 → 再次接觸過敏原 → 肥大細胞脫顆粒 → 組胺 + 白三烯 → 急性支氣管痙攣

急性 vs 慢性：
| 階段 | 病理 | 可逆性 | 治療反應 |
|------|------|--------|---------|
| 急性發作 | 支氣管平滑肌痙攣 + 黏膜水腫 | 完全可逆 | 支氣管擴張劑即效 |
| 亞急性 | 嗜酸球浸潤 + 黏液栓塞 | 大部分可逆 | 類固醇 1-2 週 |
| 慢性重塑 | 上皮下纖維化 + 平滑肌增生 | 部分不可逆 | 長期抗炎控制 |

### 嗜酸球的破壞效應

嗜酸球活化 → 釋放 MBP（主要鹼性蛋白）+ ECP → 氣道上皮細胞壞死 → 裸露的基底膜暴露感覺神經 → Substance P → 肥大細胞再活化 → 惡性循環

## 二、臨床表現與診斷

### 臨床分級

| 分級 | 表現 | 頻率 | 日常影響 |
|------|------|------|---------|
| 輕度 | 偶發咳嗽、無呼吸困難 | < 2 次/週 | 無影響 |
| 中度 | 頻繁咳嗽、活動後喘 | 2-7 次/週 | 中度受限 |
| 重度 | 持續呼吸困難、端坐呼吸 | 每日 | 嚴重受限 |
| 急性危象 | 開口呼吸、發紺、呼吸衰竭 | 急性 | 危及生命 |

### 診斷流程

| 檢查 | 發現 | 敏感度 | 備註 |
|------|------|--------|------|
| 胸腔 X 光 | 支氣管壁增厚（doughnut/tram line）| 中等 | 23% 正常 X 光仍可能有 FLAD |
| 肺過度充氣 | 橫膈後移、心臟偏小 | 中等 | 空氣滯留的表現 |
| BAL 細胞學 | 嗜酸球 > 17% | 高 | 金標準，需全身麻醉 |
| 糞便浮游 | 排除肺蟲 (Aelurostrongylus) |—| 台灣盛行率低但需排除 |
| 心絲蟲抗原/抗體 | 排除 HARD |—| 台灣心絲蟲區需檢測 |

鑑別診斷：心絲蟲相關呼吸道疾病（HARD）、肺蟲、細菌性肺炎、肺腫瘤、心衰竭

## 三、治療策略

### 階梯式治療

| 分級 | 抗炎 | 支氣管擴張 | 備註 |
|------|------|-----------|------|
| 輕度 | 吸入 Fluticasone 44-110 μg BID |—| 面罩+spacer 訓練 |
| 中度 | 吸入 Fluticasone 110-220 μg BID | 吸入 Albuterol PRN | 衛教 PRN 使用 |
| 重度 | Prednisolone 1-2 mg/kg PO SID→漸減 | 吸入 Albuterol PRN + 口服 Theophylline | 全身性類固醇 |
| 急性危象 | Dexamethasone 0.25 mg/kg IV | Terbutaline 0.01 mg/kg SC/IM | 氧氣 + 最少刺激 |

### 吸入治療衛教

- 專用貓面罩 + AeroChamber/spacer（人用兒童 spacer 亦可）
- 步驟：搖勻 MDI → 插入 spacer → 面罩輕置貓鼻口 → 按壓 MDI 1 次 → 維持 7-10 次呼吸 → 移除
- Fluticasone 需 2 週達穩態效果；Albuterol 即時起效（5-10 分鐘）
- 飼主訓練要點：先讓貓適應面罩（零食獎勵 3-5 天）→ 再加入藥物

### 環境管理

- 移除已知或疑似過敏原（更換無粉塵貓砂、HEPA 空氣清淨機）
- 避免吸菸、香氛蠟燭、強效清潔劑
- 控制室內塵蟎（定期清洗貓床、控制濕度 < 50%）

## 四、預後

| 情境 | 預後 | 說明 |
|------|------|------|
| 輕中度、規律吸入治療 | 良好 | 大多可控制症狀 |
| 重度、慢性重塑 | 謹慎 | 不可逆氣道變化 |
| 急性危象 | 取決於及時處理 | 未治療可致死 |

## 五、近期實證更新（2018–2025）

### FLAD 是傘狀概念：氣喘 vs 慢性支氣管炎
「貓下呼吸道疾病(FLAD)」是傘狀名詞：**氣喘＝嗜酸球性、可逆性支氣管收縮（第一型過敏）**；**慢性支氣管炎＝嗜中性球性**。兩者在咳嗽（約 95%）、年齡、胸腔 X 光上幾乎無法區分，**唯一可靠分型是 BAL 細胞學**（Grotheer 2020）。分型決定抗炎策略，但**與嚴重度無關**；約半數貓不同肺葉的主要細胞型不同、健康貓 BAL 嗜酸球也可偏高，故不宜用單一固定百分比硬切（Lee 2020）——建議多肺葉採樣。

### 支氣管擴張劑只是急救/輔助、不可單用
β2 受體激動劑只解除支氣管收縮、不治發炎，**單用會增加死亡率**。外消旋 albuterol 含 (S)-鏡像體，長期使用可能加重氣道發炎與高反應性（實驗性貓氣喘證據）；故 albuterol **僅作急救**，若需長期吸入型擴張劑優先 (R)-型 levalbuterol。茶鹼(theophylline)效力較弱、角色式微。

### 吸入型類固醇需口服過渡
吸入 fluticasone 約需 10–14 天才達效，**起始 2–4 週應併用口服 prednisolone 過渡再漸減**；吸入型不可用於急性發作。慢性控制以吸入型優先，對糖尿病/心肌病等高風險貓更安全。

### 急性：氣喘危象 vs 心因性肺水腫(CHF) 的床邊鑑別
呼吸窘迫的貓務必鑑別氣喘 vs CHF。**床邊聚焦心臟超音波看到「左心房擴大」對 CHF 最具特異性（約 97% 敏感、100% 特異）**；肺超音波 B-lines 與 NT-proBNP 快篩**有假陽性**（氣喘貓也可能 NT-proBNP 偽陽），需多項合併判讀、以左心房大小為關鍵（Ward 2018）。

### 新興療法（前景但未成標準）
過敏原專一性免疫治療（ASIT/快速免疫治療）在小型/實驗研究可降低嗜酸球性氣道發炎（一研究 12 隻自然發病貓中 8 隻完全緩解並停類固醇），但證據有限、口服類固醇會削弱其效；抗 IL-5/單株抗體於貓仍屬實驗性、未上市。環境控制（禁菸、低粉塵貓砂、無噴霧）為基本功。
> 臨床內容與所有劑量需獸醫師依仿單核對。`,
  clinical_pearl: '貓哮喘急性發作是真正會掛掉的緊急狀況，此時最高原則只有四個字：最少刺激。不要第一時間衝去拍 X 光或抽血。先給氧氣（flow-by 或氧氣籠），在最少保定的狀態下打 Terbutaline 0.01 mg/kg SC/IM。等穩定下來才談後面的評估。臨床上看過幾隻貓就是被「徹底檢查」逼死的，過度保定的壓力直接把支氣管痙攣推到極致。還有一件事要記住：胸腔 X 光正常不代表沒事，大約四分之一的確診貓 X 光看起來乾乾淨淨。',
  common_mistakes: [
    '將所有貓的咳嗽都診斷為哮喘而忽略心絲蟲相關呼吸道疾病（HARD）和肺蟲鑑別',
    '急性發作時過度保定做檢查，壓力加劇支氣管痙攣，應先穩定再檢查',
    '僅用口服類固醇長期治療而未嘗試吸入型，吸入型副作用遠少於全身性',
    '吸入治療衛教不足，飼主不會正確使用面罩和 spacer 導致治療失敗',
    '胸腔 X 光正常就排除 FLAD，約 23% 確診貓 X 光正常',
  ],
  disease_data: {
    signalment: '盛行率約 1-5% 的貓群體。無明確性別傾向。暹羅貓可能有品種傾向。好發年齡 2-8 歲，但任何年齡均可發生。室內貓暴露於室內過敏原（塵蟎、黴菌、貓砂粉塵）風險較高。',
    etiology: '過敏性氣道發炎為主因。常見過敏原：室內塵蟎（Dermatophagoides）、黴菌孢子、花粉、貓砂粉塵、香菸煙霧、香氛。部分為非過敏性氣道高反應性。感染（Mycoplasma spp.）可能為共病因子。',
    pathogenesis: '吸入過敏原 → APC 呈現 → Th2 分化 → IL-4/IL-5/IL-13 → IgE 產生 + 嗜酸球浸潤 → 肥大細胞脫顆粒 → 急性支氣管痙攣 + 黏液過度分泌 → 慢性：氣道重塑（上皮下纖維化、平滑肌增生、杯狀細胞化生）→ 不可逆氣道狹窄。',
    clinical_signs: [
      { sign: '咳嗽', category: 'primary', description: '最常見主訴，乾咳為主，可呈蹲伏姿勢（neck extension + abdominal effort），易被飼主誤認為嘔吐' },
      { sign: '喘鳴（wheezing）', category: 'primary', description: '呼氣期喘鳴音，反映下呼吸道狹窄' },
      { sign: '呼吸急促/用力', category: 'primary', description: '呼氣性呼吸困難，腹部用力' },
      { sign: '運動不耐', category: 'secondary', description: '中重度患貓活動力下降' },
      { sign: '開口呼吸', category: 'secondary', description: '重度或急性發作，貓正常不會開口呼吸' },
      { sign: '發紺', category: 'secondary', description: '嚴重低氧時舌頭/黏膜變紫' },
    ],
    staging: null,
    differential_diagnosis: [
      { condition: '心絲蟲相關呼吸道疾病（HARD）', key_differentiator: '心絲蟲抗原/抗體陽性，流行區需排除' },
      { condition: '肺蟲（Aelurostrongylus abstrusus）', key_differentiator: '糞便 Baermann 法可見 L1 幼蟲' },
      { condition: '細菌性肺炎', key_differentiator: 'BAL 嗜中性球為主、發燒、X 光肺泡型浸潤' },
      { condition: '肺腫瘤（原發或轉移）', key_differentiator: 'X 光可見結節、CT 更敏感，細胞學/組織學確診' },
      { condition: '充血性心衰竭', key_differentiator: '心臟超音波異常、NT-proBNP 升高、肺靜脈擴張' },
    ],
    diagnostic_workup: '1. 理學檢查（聽診：呼氣期喘鳴音、呼吸型態）→ 2. 胸腔 X 光（支氣管壁增厚、肺過度充氣）→ 3. 排除心絲蟲（抗原 + 抗體）→ 4. 排除肺蟲（糞便浮游）→ 5. BAL 細胞學（嗜酸球 > 17%）+ 培養 → 6. 進階：CT、過敏原檢測',
    treatment_protocol: '階梯式治療：輕度→吸入 Fluticasone 44-110 μg BID via spacer；中度→Fluticasone 110-220 μg BID + Albuterol PRN；重度→Prednisolone 1-2 mg/kg/day PO 漸減 + 吸入療法。急性危象→氧氣 + Terbutaline 0.01 mg/kg SC/IM + Dexamethasone 0.25 mg/kg IV。環境管理：移除過敏原、低粉塵貓砂、HEPA。',
    prognosis: '輕中度規律治療：預後良好，大多可有效控制。重度/慢性重塑：預後謹慎，不可逆氣道變化持續存在。急性危象如及時處理存活率高。長期管理可維持良好生活品質。部分貓隨年齡增加氣道重塑加劇。',
    monitoring: '初始治療 2-4 週後評估症狀改善。穩定後每 3-6 個月追蹤。監測：呼吸頻率（RR）、咳嗽頻率、運動耐力。長期口服類固醇貓需每 6 個月血糖和尿液監測。建議飼主記錄症狀日記。',
    owner_communication: '貓哮喘跟人的氣喘是類似的東西。通常斷根不容易，但可以好好控制。吸入型治療是長期管理裡最安全、效果也最好的方式，飼主需要耐心學一下面罩怎麼用。環境同樣很重要：換低粉塵的貓砂、放台空氣清淨機。萬一急性發作（開口呼吸、舌頭發紫），那是急診，不要等。',
  },
  diagnostic_data: null,
  procedure_data: null,
  visual_placeholders: [
    { position: '診斷流程表後', type: 'flowchart', description: 'FLAD 診斷決策流程圖' },
    { position: '階梯式治療表後', type: 'annotated_image', description: '貓吸入治療示範（面罩 + spacer + MDI）' },
  ],
  interactive_placeholders: [],
  drug_api_links: ['Fluticasone', 'Albuterol', 'Terbutaline', 'Prednisolone', 'Dexamethasone', 'Theophylline'],
  references: [
    { type: 'journal', citation: 'Trzil JE. Feline Asthma: Diagnostic and Treatment Update. Vet Clin North Am Small Anim Pract. 2020;50(2):375-391. doi:10.1016/j.cvsm.2019.10.002.', relevance: '貓哮喘診斷與治療近期回顧（吸入療法、急救、環境控制）' },
    { type: 'journal', citation: 'Grotheer M, Hirschberger J, Hartmann K, et al. Comparison of signalment, clinical, laboratory and radiographic parameters in cats with feline asthma and chronic bronchitis. J Feline Med Surg. 2020;22(7):649-655. doi:10.1177/1098612X19872428.', relevance: '氣喘 vs 慢性支氣管炎臨床/X 光無法區分，須 BAL 細胞學分型——FLAD 傘狀概念依據' },
    { type: 'journal', citation: 'Lee EA, Johnson LR, Johnson EG, Vernau W. Clinical features and radiographic findings in cats with eosinophilic, neutrophilic, and mixed airway inflammation (2011-2018). J Vet Intern Med. 2020;34(3):1291-1299. doi:10.1111/jvim.15772.', relevance: 'BAL 分型與年齡相關、與嚴重度無關；肺葉間細胞型常不同——反對單一固定嗜酸球切點' },
    { type: 'journal', citation: 'Ward JL, Lisciandro GR, Ware WA, et al. Evaluation of point-of-care thoracic ultrasound and NT-proBNP for the diagnosis of congestive heart failure in cats with respiratory distress. J Vet Intern Med. 2018;32(5):1530-1540. doi:10.1111/jvim.15246.', relevance: '急救鑑別氣喘 vs CHF：左心房擴大最具特異性；NT-proBNP/B-lines 有假陽性（含氣喘貓）' },
    { type: 'journal', citation: 'Garrity S, Lee-Fowler T, Reinero C. Feline asthma and heartworm disease: clinical features, diagnostics and therapeutics. J Feline Med Surg. 2019;21(9):825-834. doi:10.1177/1098612X18823348.', relevance: '氣喘 vs HARD 鑑別（皆有氣道嗜酸球增多）；HARD 只需短期類固醇、擴張劑無效' },
    { type: 'journal', citation: 'Reinero CR. Advances in the understanding of pathogenesis, and diagnostics and therapeutics for feline allergic asthma. Vet J. 2011;190(1):28-33. doi:10.1016/j.tvjl.2010.09.022.', relevance: '貓哮喘免疫病理與治療進展（含 ASIT/鏡像體概念基礎）' },
    { type: 'textbook', citation: 'Nelson RW, Couto CG. Small Animal Internal Medicine, 6th ed. Elsevier, 2020. Chapter: Lower Respiratory Tract Disorders.', relevance: '下呼吸道疾病教材' },
  ],
  is_current: true,
  created_at: now,
};

/** 犬貓細菌性肺炎，疾病型 */
const contentBacterialPneumonia: NodeContent = {
  id: 'CONTENT-IM-L3-021',
  node_id: 'IM-L3-021',
  version: 2,
  summary: '細菌性肺炎在犬常見且可致命、貓少見但常較嚴重。最常見型態是吸入性，多繼發於嘔吐/反流、巨食道、喉麻痺或全身麻醉；致病菌多為口腔常駐菌（Pasteurella、E. coli、Streptococcus、Bordetella，貓 Mycoplasma），常為混合感染。診斷靠胸腔 X 光肺泡型浸潤＋BAL/TTW 培養藥敏。抗生素依 ISCAID 2017 依嚴重度分層（輕度 doxycycline；吸入無敗血症可不給藥或非經口 β-lactam；敗血症 fluoroquinolone＋ampicillin/clindamycin），FQ 非經驗一線、培養導向；**以臨床痊癒（非 X 光完全消退）決定停藥**。台灣濕熱、犬舍密度高、流浪犬暴露多，建議積極培養導向用藥。',
  learning_objectives: [
    '列出犬貓細菌性肺炎的主要原因、危險因子與常見病原，並區分犬貓差異',
    '說明吸入的「化學性肺炎 vs 細菌性肺炎」雙重損傷機轉，及其對是否用抗生素的意涵',
    '判讀細菌性肺炎胸腔 X 光（肺泡型浸潤、air bronchogram、重力依賴分布）與 BAL/TTW 培養的角色',
    '依 ISCAID 2017 抗菌管理原則制定經驗性與培養導向抗生素方案（含貓 fluoroquinolone 安全）',
    '說明以臨床痊癒（非影像）為停藥依據的現行療程觀念與其證據限制',
    '規劃監控與併發症處置，並辨識與矯正反覆吸入的基礎原因',
  ],
  key_points: [
    '吸入性是犬最常見肺炎，好發右中葉/右前葉（重力依賴）；貓少見但常較嚴重（Mycoplasma 重要）',
    '危險因子：嘔吐/反流、巨食道、喉麻痺、全身麻醉、口咽/吞嚥疾病、意識不清、短頭品種',
    '吸入為雙重損傷：胃酸化學灼傷（pneumonitis）＋口腔菌感染（pneumonia）——**單純吸入事件未必需抗生素**',
    '診斷：胸腔 X 光肺泡型浸潤＋air bronchogram；BAL/TTW（給藥前採）培養藥敏為金標準、指引降階',
    '抗生素（ISCAID 2017 依嚴重度）：輕度 doxycycline、吸入無敗血症可不給藥或非經口 β-lactam、敗血症 FQ＋ampicillin/clindamycin；**FQ 非經驗一線**（保留重症/培養革蘭氏陰性）；metronidazole 非常規',
    '⚠️ 療程觀念更新：**以臨床痊癒為停藥依據，非等 X 光完全消退**（影像落後）；未併發社區型療程可較舊「3–6 週」教條短',
    '⚠️ 貓 fluoroquinolone：enrofloxacin >5 mg/kg 致視網膜毒性/失明 → 貓優先 pradofloxacin/marbofloxacin',
  ],
  body: `# 犬貓細菌性肺炎 (Bacterial Pneumonia)

> 犬常見、可致命的下呼吸道感染；貓少見但常較嚴重。最常見為**吸入性**，多繼發於嘔吐/反流、巨食道、喉麻痺或全身麻醉。抗生素選擇與療程對齊 **ISCAID 2017 呼吸道抗菌使用指引（Lappin 2017）** 的抗菌管理（stewardship）：**培養導向、避免不必要廣譜、以臨床痊癒（非單看 X 光）決定停藥**。

## 一、病理機制 (Pathophysiology)

### 感染途徑

| 途徑 | 機轉 | 代表情境 | 好發肺葉 |
|------|------|---------|---------|
| 吸入性（最常見） | 口腔/胃內容物吸入 | 嘔吐、反流、麻醉後、巨食道 | 右中葉、右前葉（重力依賴） |
| 吸入性（感染下行） | 上呼吸道感染下行 | Bordetella、犬舍咳 | 前葉為主 |
| 血行性 | 菌血症經肺血管播散 | 感染性心內膜炎、IV 導管感染 | 後葉、瀰漫性 |
| 外傷性 | 穿刺性胸壁損傷 | 咬傷、異物 | 損傷處 |

### 吸入的雙重損傷

1. **化學性（吸入性肺炎 vs 純吸入的區別）**：胃酸（pH < 2.5）直接灼傷肺泡上皮/內皮 → 通透性↑、肺水腫、表面活性劑失活 → 肺泡塌陷。**此為化學性肺炎（pneumonitis），未必等於細菌感染**。
2. **細菌性**：口腔常駐菌（厭氧＋兼性厭氧）隨吸入物進入、黏液纖毛清除受損 → 細菌增殖 → 嗜中性球浸潤 → 化膿性肺炎。

> 臨床意涵：**單純吸入「事件」（化學性肺炎）不一定需要抗生素**；抗生素針對「已建立的細菌感染（pneumonia）」。是否用藥依臨床/影像/培養而非「有吸入就給」（見 §八）。

[圖片:aspiration-pneumonia-mechanism]（吸入 → 化學灼傷＋細菌定殖 → 化膿性肺泡炎的雙重損傷流程圖）

### 危險因子

| 危險因子 | 機轉 | 犬/貓 |
|---------|------|--------|
| 巨食道 | 食物滯留＋反流 | 犬為主 |
| 喉麻痺 | 喉閉合不全 → 吸入 | 犬（老年大型犬） |
| 全身麻醉 | 喉反射抑制＋胃反流 | 犬貓 |
| 持續嘔吐 | 反覆吸入 | 犬貓 |
| 口咽/吞嚥疾病 | 吞嚥困難 | 犬貓 |
| 意識不清/癲癇 | 保護性反射喪失 | 犬貓 |
| 短頭品種 | 上呼吸道解剖異常、反流 | 犬 |

## 二、臨床表現與診斷

### 臨床表現（犬 vs 貓）

| 表現 | 頻率 | 描述 |
|---------|------|------|
| 濕咳（有痰） | 常見（犬） | 可咳出膿性分泌物；貓咳嗽較不明顯 |
| 發燒 | ~60–80% | > 39.5°C；重症敗血症可反而**低體溫** |
| 呼吸急促/困難 | 常見 | 取決於浸潤範圍 |
| 精神沉鬱/食慾↓ | 常見 | 全身性發炎 |
| 聽診囉音/支氣管呼吸音 | 常見 | crackles、tubular breath sounds |

貓：臨床較隱匿（咳嗽少、以呼吸費力/沉鬱表現），常較嚴重；Mycoplasma 為重要病原。

### 診斷

| 檢查 | 發現 | 臨床價值 |
|------|------|---------|
| 胸腔 X 光（三視角） | 肺泡型浸潤＋air bronchogram，好發腹側/重力依賴葉 | 首選影像；**影像變化落後臨床** |
| CBC/生化 | 嗜中性球增多±左移；CRP↑ | 支持感染但非特異 |
| **BAL/TTW 細胞學＋需氧/厭氧培養＋藥敏** | 嗜中性球為主＋細胞內菌＋定菌 | **金標準**，指引抗生素（ISCAID 力薦，尤重症/反應不佳/貓） |
| 肺 FNA＋培養 | 局部實質病灶取樣 | 替代取樣（Preibisz 2025：14 犬 2 貓可行） |
| 血氧/血氣 | PaO₂↓、A-a gradient↑ | 評估氧合 |

> 取樣時機：**盡量在首劑抗生素前**採檢做培養（抗生素會降低培養陽性率）。

[互動:pneumonia-antibiotic-decision]（互動：依「社區型 vs 吸入性 vs 重症/院內」× 是否有培養結果，決定經驗性用藥與是否降階/升階）

## 三、治療策略

### 抗生素（依 ISCAID 2017，依嚴重度分層——非單一口服首選）

| 情境 | ISCAID 2017 建議 | 常用劑量* | 備註 |
|------|------|----------|------|
| 輕度、疑 Bordetella/Mycoplasma、無全身症狀 | [藥物:Doxycycline]（合理經驗首選） | 5 mg/kg PO q12h（或 10 mg/kg q24h） | 貓給藥後**餵水/食物防食道炎** |
| 吸入、無敗血症 | **不給藥** 或 非經口 β-lactam：[藥物:Ampicillin]／[藥物:Ampicillin-Sulbactam]／[藥物:Cefazolin] | ampicillin(-sulbactam) 20–30 mg/kg IV q6–8h | 純化學性吸入未必需抗生素 |
| 敗血症/重症 | (enrofloxacin 或 marbofloxacin) ＋ (ampicillin 或 [藥物:Clindamycin])，非經口 | 犬 [藥物:Enrofloxacin] 5–20 mg/kg IV q24h；貓 ≤5 mg/kg/日 | FQ 補革蘭氏陰性；另一藥補革蘭氏陽性/厭氧 |
| 住院（任何嚴重度） | 一律先非經口，穩定/出院轉口服（培養導向） | — | ISCAID：住院不論嚴重度先靜脈 |
| 門診口服選項 | [藥物:Amoxicillin-Clavulanate]（Plumb's 實務；ISCAID 列為 URI 首選、非肺炎指名藥） | 犬 11／貓 12.5 mg/kg PO q12h（Plumb's 實務可達 ~12.5–25） | 涵蓋多數口腔菌含許多厭氧 |

*劑量為臨床常用範圍，**須依現行仿單／Plumb's 與獸醫師核對**、依腎功能調整。
**⚠️ 貓 fluoroquinolone 安全**：enrofloxacin 於貓 **>5 mg/kg/日** 可致急性視網膜變性/失明；貓優先用 [藥物:Pradofloxacin] 或 [藥物:Marbofloxacin]，enrofloxacin 若用須 ≤5 mg/kg/日。

> **抗菌管理（stewardship）**：ISCAID **不把 fluoroquinolone 當經驗一線**；FQ 保留給**敗血症/重症或培養證實的革蘭氏陰性**。革蘭氏陽性/厭氧覆蓋以 **ampicillin 或 clindamycin**；**metronidazole 非常規**，僅疑/證實 Bacteroides 且 clindamycin 可能無效時考慮。

### 療程（ISCAID 2017）

- 經驗 doxycycline 約 7–10 天；若臨床改善，**治療至臨床緩解後再約 1 週**，**≤10–14 天重新評估**是否停藥。
- **以臨床痊癒為停藥主依據**（胸腔 X 光變化落後臨床、可殘留數週，不宜單以影像完全消退決定）。
- 反覆/併發（巨食道未矯正、多重抗藥）則個別化延長。

### 支持療法

- 氧氣：SpO₂ < 93% → 鼻導管、氧氣籠或 flow-by。
- **霧化（生理食鹽水）＋叩擊排痰（coupage）** Q6–8H：稀釋鬆動分泌物（被低估的輔助）。
- 輸液維持水合，**避免過度**（加重肺水腫）。
- 營養：維持熱量；反覆吸入者評估暫時禁食/管灌並處理基礎原因。
- **避免鎮咳藥**（需咳出分泌物）。

## 四、併發症與監控

| 併發症 | 處置 |
|--------|------|
| 敗血症/敗血性休克 | 積極支持、依藥敏抗生素 |
| 急性呼吸窘迫（ARDS 樣） | 氧氣、重症正壓通氣 |
| 肺膿瘍/壞死性肺炎 | 延長療程、必要時手術 |
| 反覆吸入（基礎病未解） | 處理巨食道/喉麻痺根因 |

**監控計畫：**

| 時間點 | 項目 | 目標/警訊 |
|--------|------|----------|
| 48–72 h | 體溫、呼吸頻率/費力、食慾、SpO₂ | 臨床改善；惡化→重評/升階、查併發 |
| 每 1–2 週 | 胸腔 X 光 | 追蹤消退（但**不以影像單獨決定停藥**） |
| 停藥前 | 臨床痊癒評估（±影像近消退） | 以臨床為主 |
| 反覆者 | 基礎原因檢查（吞嚥透視、喉檢、重症肌無力抗體） | 根因矯正 |

## 五、預後與預後因子

| 因子 | 良好 | 不良 |
|------|------|------|
| 受累肺葉 | 1–2 葉 | ≥3 葉/瀰漫 |
| 基礎原因 | 可矯正（一次性吸入） | 不可矯正（巨食道） |
| 培養/藥敏 | 敏感菌 | 多重抗藥 |
| 氧合/病情 | SpO₂ > 90% | 敗血症、ARDS、需機械通氣 |

- 存活率整體多在 **~77–90%**：吸入性最大病例系列（Kogan 2008 outcome，88 犬）約 **77–82%**；社區型幼犬（Radhakrishnan 2007，65 犬）約 **88%**。跨研究範圍較廣（~30–82%），**敗血症、ARDS、需正壓通氣者顯著較差**。
- 上述為病例系列/回顧（Evidence Level II–III）。

## 六、人醫借鑒 (Translational Insights)

| 人醫工具/觀念 | 獸醫應用 | 現況 |
|--------------|---------|------|
| CAP 抗菌管理與縮短療程（human stewardship） | 犬貓以臨床痊癒導向、避免過長療程 | 趨勢一致，證據仍在累積 |
| 吸入「肺炎 vs 肺炎（pneumonitis）」區分 | 化學性吸入未必需抗生素 | 觀念採用中 |
| 肺部超音波輔助診斷/監測（POCUS） | 犬貓評估實質化與積液 | 應用漸增 |
| 定量培養/藥敏導向降階 | BAL/TTW 培養降階窄譜 | ISCAID 力薦 |

## 七、臨床爭議與知識空缺

| 議題 | 現況 | Evidence Level |
|------|------|----------------|
| 最佳療程長度 | 趨勢縮短、以臨床痊癒為準；犬貓比較性 RCT 有限 | II–III |
| 是否以 X 光消退決定停藥 | 影像落後臨床，不建議單以影像；共識轉向臨床 | III |
| 吸入事件後預防性抗生素 | 純化學性肺炎不建議常規預防；僅感染建立才用 | III |
| 常規加 metronidazole 覆蓋厭氧 | amox-clav 多已涵蓋，常規加藥缺實證 | III |
| 經驗性 fluoroquinolone 為一線 | 抗菌管理反對；ISCAID 保留 FQ 給敗血症/重症/培養革蘭氏陰性 | II–III（指引） |

## 八、近期實證更新

- **ISCAID 2017 抗菌管理（Lappin）——依嚴重度分層**：輕度疑 Bordetella/Mycoplasma → doxycycline；吸入無敗血症 → 不給藥或非經口 β-lactam（ampicillin/ampicillin-sulbactam/cefazolin）；敗血症 → (enrofloxacin 或 marbofloxacin)＋(ampicillin 或 clindamycin)。**fluoroquinolone 非經驗一線**、保留敗血症/重症/培養革蘭氏陰性；**amoxicillin-clavulanate 是 ISCAID 的 URI 首選、非肺炎指名藥**。力薦 BAL/TTW 培養導向降階。
- **療程觀念（ISCAID 2017）**：治療至臨床緩解後約 1 週、**≤10–14 天重評**；**以臨床痊癒（非 X 光完全消退）決定停藥**（影像落後）。
- **吸入性肺炎 ≠ 每次吸入都給藥**：區分化學性肺炎（pneumonitis）與細菌性肺炎；抗生素針對感染。
- **貓 fluoroquinolone 安全**：enrofloxacin >5 mg/kg 於貓致視網膜毒性/失明 → 貓優先 pradofloxacin/marbofloxacin。
- **診斷取樣**：肺 FNA＋培養/藥敏為 BAL/TTW 之外可行取樣（Preibisz 2025，犬貓病例）。
- **台灣**：亞熱帶高溫高濕、犬舍密度高（Bordetella 群聚）、流浪犬暴露多；在地抗藥模式差異大 → **積極 BAL 培養/藥敏導向用藥**，避免經驗性廣譜濫用。`,
  clinical_pearl: '吸入性肺炎最有力的線索是「嘔吐/麻醉事件後的急性呼吸症狀」＋「胸腔 X 光重力依賴部位（右中葉/右前葉）的肺泡型浸潤」。關鍵觀念更新有二：(1) **停藥看臨床痊癒、不是等 X 光完全乾淨**——影像變化落後臨床數週，硬要治到影像消退＝過度用藥；(2) 貓別用高劑量 enrofloxacin（>5 mg/kg 會讓貓視網膜變性失明），要 FQ 就用 pradofloxacin/marbofloxacin。另外 amoxicillin-clavulanate 已涵蓋多數口腔厭氧菌，多數病例不必再加 metronidazole；被低估的是「霧化＋叩擊排痰」，每 6–8 小時能明顯加速痊癒。',
  common_mistakes: [
    '對每次「吸入事件」都給抗生素——純化學性肺炎（pneumonitis）未必需要，抗生素針對已建立的細菌感染',
    '硬把療程拖到 X 光完全消退才停藥——影像落後臨床，應以臨床痊癒為停藥依據，避免過度用藥',
    '把 fluoroquinolone 當經驗一線——ISCAID 保留 FQ 給敗血症/重症/培養革蘭氏陰性；輕度用 doxycycline、吸入無敗血症用非經口 β-lactam 或不給藥（並非以 amox-clav 為肺炎首選）',
    '⚠️ 貓用 enrofloxacin >5 mg/kg——致視網膜變性失明；貓應改 pradofloxacin/marbofloxacin',
    '未在給抗生素前採 BAL/TTW 培養就長期經驗性用藥——失去藥敏導向、助長抗藥',
    '只治肺炎不找/不矯正基礎原因（巨食道、喉麻痺）——會反覆吸入復發',
  ],
  disease_data: {
    signalment: '犬遠多於貓。犬：中大型犬更常見吸入性肺炎。幼犬（社會化階段、犬舍環境）好發 Bordetella 肺炎。老年大型犬（喉麻痺、巨食道）好發吸入性肺炎。貓：較罕見，但 Mycoplasma 為重要病原。短頭犬種因上呼吸道解剖異常風險較高。',
    etiology: '最常見為吸入性（胃內容物或口腔分泌物吸入）。致病菌：Pasteurella spp.、E. coli、Klebsiella spp.、Bordetella bronchiseptica、Streptococcus spp.、Staphylococcus spp.、厭氧菌（Bacteroides、Fusobacterium）。貓：Mycoplasma spp.、Bordetella、Pasteurella。常為混合感染。',
    pathogenesis: '吸入性為雙重損傷：(1) 化學性——胃酸（pH<2.5）灼傷肺泡上皮/內皮 → 通透性↑、肺水腫、表面活性劑失活（此為化學性肺炎 pneumonitis，未必等於感染）；(2) 細菌性——口腔常駐菌（厭氧＋兼性厭氧）隨吸入物進入、黏液纖毛清除受損 → 細菌增殖 → 嗜中性球浸潤 → 化膿性肺泡炎 → 實質化（consolidation）→ 嚴重者壞死/膿瘍。血行性：菌血症 → 肺毛細管菌栓 → 多發性肺炎。',
    clinical_signs: [
      { sign: '濕性咳嗽', category: 'primary', description: '有痰咳嗽，可能咳出膿性分泌物' },
      { sign: '發燒', category: 'primary', description: '> 39.5°C，但重症敗血症可能低體溫' },
      { sign: '呼吸急促/困難', category: 'primary', description: '取決於浸潤範圍和嚴重度' },
      { sign: '精神沉鬱/食慾下降', category: 'primary', description: '全身性發炎反應' },
      { sign: '鼻腔膿性分泌物', category: 'secondary', description: '下呼吸道分泌物上行' },
      { sign: '聽診囉音', category: 'secondary', description: 'Crackles 和/或 tubular breath sounds' },
    ],
    staging: null,
    differential_diagnosis: [
      { condition: '貓哮喘 (FLAD)', key_differentiator: 'BAL 嗜酸球為主、無發燒、通常無細菌' },
      { condition: '肺水腫（心源性）', key_differentiator: '心臟超音波異常、對利尿劑反應、肺門周圍分布' },
      { condition: '肺腫瘤', key_differentiator: '結節狀病灶、CT 特徵、細胞學/組織學確診' },
      { condition: '肺黴菌感染', key_differentiator: '慢性病程、結節狀/腔洞性病灶、培養確診' },
      { condition: '肺出血', key_differentiator: '凝血異常、BAL 血性、中毒史（鼠藥）' },
    ],
    diagnostic_workup: '1. 理學檢查（聽診：crackles、tubular breath sounds）→ 2. 胸腔 X 光三視角（肺泡型浸潤、air bronchogram、重力依賴分布）→ 3. CBC + 生化（白血球增多、CRP 升高）→ 4. SpO2/血液氣體 → 5. **首劑抗生素前**採 BAL 或 TTW（細胞學 + 需氧/厭氧培養 + 藥敏 + Mycoplasma 培養）；局部病灶可肺 FNA 培養 → 6. 評估基礎原因（鋇劑吞嚥/透視 for 巨食道、喉檢查、重症肌無力抗體）',
    treatment_protocol: '依 ISCAID 2017 依嚴重度分層：輕度疑 Bordetella/Mycoplasma → Doxycycline 5 mg/kg PO q12h（或 10 q24h）；吸入無敗血症 → 不給藥或非經口 β-lactam（Ampicillin/Ampicillin-Sulbactam 20-30 mg/kg IV q6-8h 或 Cefazolin）；敗血症/重症 → (犬 Enrofloxacin 5-20 mg/kg IV q24h 或 Marbofloxacin)＋(Ampicillin 或 Clindamycin)。住院一律先非經口、穩定轉口服（培養導向）。門診口服選項 Amoxicillin-Clavulanate（犬 11/貓 12.5 mg/kg PO q12h，Plumb 實務可達 ~12.5-25；ISCAID 列為 URI 首選、非肺炎指名藥）。Metronidazole 非常規（僅疑 Bacteroides）。⚠️ 貓避免 enrofloxacin >5 mg/kg（視網膜毒性）→ 優先 pradofloxacin/marbofloxacin。貓 Doxycycline 給藥後餵水防食道炎。療程：治療至臨床緩解後約 1 週、≤10-14 天重評，以臨床（非影像完全消退）停藥。支持：氧氣（SpO2<93%）、霧化+coupage Q6-8H、輸液避免過度、避免鎮咳。劑量須依仿單與獸醫核對。',
    prognosis: '存活率整體多在 ~77-90%：吸入性最大病例系列（Kogan 2008 outcome，88 犬）約 77-82%；社區型幼犬（Radhakrishnan 2007，65 犬）約 88%。跨研究範圍較廣（~30-82%），敗血症/ARDS/需機械通氣者顯著較差。反覆吸入（巨食道未矯正）預後謹慎；早期適當治療與矯正基礎原因改善預後。',
    monitoring: '治療開始後 48-72 小時評估臨床反應（體溫、呼吸頻率/費力、食慾、SpO2）；惡化則重評、查併發、依藥敏升階。每 1-2 週追蹤胸腔 X 光觀察消退，但**停藥以臨床痊癒為主、不單以影像完全消退決定**（影像落後臨床）。反覆發作者評估與矯正基礎原因（巨食道、喉麻痺、重症肌無力）。',
    owner_communication: '細菌性肺炎抗生素通常要吃好幾週，實際長短由醫師依恢復情況判斷（看狗狗實際好起來、不是硬等 X 光完全乾淨），請務必按時吃完、不要自己提早停。如果是吸入性的，要找出並處理根本原因（像巨食道），不然會一直復發。居家適度活動即可。每天看一下呼吸快不快、吃不吃。萬一更喘、開口呼吸、拒食，馬上回診。',
  },
  diagnostic_data: null,
  procedure_data: null,
  visual_placeholders: [
    { position: '感染途徑表後', type: 'flowchart', description: '細菌性肺炎感染途徑與病理機轉流程圖' },
    { position: '治療策略段落後', type: 'comparison_table', description: '不同情境的抗生素選擇決策表' },
  ],
  interactive_placeholders: [
    { position: '二、臨床表現與診斷 診斷段後', type: 'decision_tree', description: '互動式抗生素決策：社區型 vs 吸入性 vs 重症/院內 × 有無培養結果 → 經驗性用藥與降階/升階' },
  ],
  drug_api_links: ['Doxycycline', 'Ampicillin', 'Ampicillin-Sulbactam', 'Cefazolin', 'Amoxicillin-Clavulanate', 'Enrofloxacin', 'Marbofloxacin', 'Pradofloxacin', 'Clindamycin', 'Metronidazole'],
  references: [
    { type: 'guideline', citation: 'Lappin MR, et al. Antimicrobial use Guidelines for Treatment of Respiratory Tract Disease in Dogs and Cats: Antimicrobial Guidelines Working Group of the International Society for Companion Animal Infectious Diseases. J Vet Intern Med. 2017;31(2):279-294. doi:10.1111/jvim.14627.', relevance: '現行權威指引：ISCAID 呼吸道抗菌使用（依嚴重度分層、FQ 非經驗一線、培養導向、療程以臨床痊癒停藥）' },
    { type: 'journal', citation: 'Dear JD. Bacterial Pneumonia in Dogs and Cats. Vet Clin North Am Small Anim Pract. 2020;50(2):447-465. doi:10.1016/j.cvsm.2019.10.007.', relevance: '犬貓細菌性肺炎回顧（病理/診斷/治療、影像落後臨床）' },
    { type: 'journal', citation: 'Kogan DA, et al. Clinical, clinicopathologic, and radiographic findings in dogs with aspiration pneumonia: 88 cases (2004-2006). J Am Vet Med Assoc. 2008;233(11):1742-1747. doi:10.2460/javma.233.11.1742.', relevance: '犬吸入性肺炎臨床/影像特徵、好發肺葉（findings paper）' },
    { type: 'journal', citation: 'Kogan DA, et al. Etiology and clinical outcome in dogs with aspiration pneumonia: 88 cases (2004-2006). J Am Vet Med Assoc. 2008;233(11):1748-1755. doi:10.2460/javma.233.11.1748.', relevance: '犬吸入性肺炎病原與預後（存活率溯源，outcome paper）' },
    { type: 'journal', citation: 'Radhakrishnan A, et al. Community-acquired infectious pneumonia in puppies: 65 cases (1993-2002). J Am Vet Med Assoc. 2007;230(10):1493-1497. doi:10.2460/javma.230.10.1493.', relevance: '幼犬社區型感染性肺炎預後（社區型存活率溯源）' },
    { type: 'journal', citation: 'Preibisz, et al. Transthoracic fine-needle aspiration of the lungs, and bacterial culture with antimicrobial susceptibility testing used in diagnosing bacterial pneumonia in dogs and cats: 14 dogs and 2 cats (2009-2021). Front Vet Sci. 2025;12:1521793. doi:10.3389/fvets.2025.1521793.', relevance: '近年（≤5年）犬貓肺 FNA 培養/藥敏診斷' },
    { type: 'textbook', citation: 'Nelson RW, Couto CG. Small Animal Internal Medicine. 6th ed. Elsevier; 2020.', relevance: '小動物內科教科書，下呼吸道疾病章節（教材）' },
  ],
  is_current: true,
  created_at: now,
};

/** FeLV/FIV 逆轉錄病毒感染，疾病型 */
const contentFeLVFIV: NodeContent = {
  id: 'CONTENT-IM-L3-022',
  node_id: 'IM-L3-022',
  version: 2,
  summary: 'FeLV（貓白血病）跟 FIV（貓免疫缺陷）是貓最重要的兩個逆轉錄病毒感染。FeLV 會造成淋巴瘤、骨髓抑制、免疫抑制；FIV 則是慢慢搞出免疫缺陷，跟人類的 HIV 很像。台灣收容所貓的盛行率，FeLV 大約 3-10%、FIV 5-15%。第一線篩檢用 SNAP combo test，但要記得有窗口期，必要時還要做確認檢驗。FeLV 有疫苗可以預防，FIV 目前只能支持療法。',
  learning_objectives: [
    '說明 FeLV 與 FIV 的病毒學差異與感染機轉',
    '列出 FeLV 感染的四種結局（進行性/退行性/局灶性/流產性）',
    '正確解讀 SNAP combo test 結果（抗原 vs 抗體、偽陽性/偽陰性）',
    '制定 FeLV/FIV 陽性貓的長期管理方案',
    '說明 FeLV 疫苗的適應症與台灣使用現況',
  ],
  key_points: [
    'FeLV：Gammaretrovirus，感染結局取決於免疫反應，進行性感染（持續抗原血症）預後不良',
    'FIV：Lentivirus（類 HIV），主要經咬傷傳播，分 5 個 subtype（A-E），慢性進行性免疫缺陷',
    'SNAP test：FeLV 偵測 p27 抗原（血中游離）、FIV 偵測抗體，母源抗體可致 FIV 幼貓偽陽性',
    'FeLV 感染結局：進行性（持續病毒血症，預後差）、退行性（病毒潛伏骨髓，可能再活化）、流產性（成功清除）、局灶性（少見）',
    '台灣盛行率：收容所/流浪貓 FeLV 3-10%、FIV 5-15%；戶外接觸為主要風險因子',
    'FeLV 相關疾病：淋巴瘤（最常見腫瘤）、骨髓抑制（貧血/白血球減少）、免疫抑制→伺機感染',
    'FeLV 疫苗：非核心疫苗，建議戶外接觸或高風險貓施打；FIV 無有效疫苗（台灣未上市）',
  ],
  body: `# FeLV/FIV 逆轉錄病毒感染

## 一、病毒學與傳播

### FeLV（貓白血病病毒）

| 特徵 | 說明 |
|------|------|
| 分類 | Gammaretrovirus, Retroviridae |
| 傳播途徑 | 唾液（共用食碗、理毛）、鼻分泌物、血液、乳汁、胎盤 |
| 環境存活 | 脆弱，環境中數分鐘至數小時失活 |
| 感染結局 | 取決於病毒量、年齡與免疫狀態 |

FeLV 感染四種結局：

| 結局 | 機轉 | 抗原血症 | PCR | 預後 |
|------|------|---------|-----|------|
| 流產性（Abortive） | 強免疫反應，早期清除 | 陰性 | 陰性 | 極好 |
| 退行性（Regressive） | 病毒整合入骨髓 DNA 但複製被抑制 | 短暫→陰性 | 骨髓 PCR 可陽性 | 良好（可能再活化） |
| 進行性（Progressive） | 免疫無法控制，持續病毒複製 | 持續陽性 | 陽性 | 不良（中位存活 2-3 年） |
| 局灶性（Focal/Atypical） | 病毒局限於特定組織 | 間歇性陽性 | 組織 PCR 陽性 | 變異 |

### FIV（貓免疫缺陷病毒）

| 特徵 | 說明 |
|------|------|
| 分類 | Lentivirus, Retroviridae（與 HIV 同屬） |
| 傳播途徑 | 主要經咬傷（唾液中病毒量高），偶經垂直傳播 |
| 感染階段 | 急性期（2-4 週）→ 無症狀攜帶期（數年）→ 漸進免疫缺陷期 → AIDS-like 終末期 |
| Subtype | A（最常見）, B, C, D, E |

## 二、台灣流行病學

| 族群 | FeLV 盛行率 | FIV 盛行率 | 風險因子 |
|------|-----------|-----------|---------|
| 收容所貓 | 3-10% | 5-15% | 高密度、壓力 |
| 流浪貓（TNR） | 5-8% | 8-18% | 戶外打鬥、公貓 |
| 家貓（純室內） | < 1% | < 2% | 極低 |
| 家貓（有戶外接觸） | 2-5% | 3-8% | 接觸流浪貓 |

台灣特色：都會區 TNR 計畫普及 → 篩檢率提升 → 早期發現增加。收容所入所貓強制 SNAP 篩檢為趨勢。

## 三、臨床表現

### FeLV 相關疾病

| 類別 | 疾病 | 頻率 | 機轉 |
|------|------|------|------|
| 腫瘤 | 淋巴瘤（縱膈/多中心/消化道） | 最常見 | 病毒整合致癌 |
| 骨髓 | 非再生性貧血 | 常見 | 骨髓前驅細胞感染 |
| 骨髓 | 白血球減少/血小板減少 | 中等 | 骨髓抑制 |
| 免疫 | 繼發感染（口腔炎、FIP、Toxoplasma） | 常見 | 免疫抑制 |
| 生殖 | 流產、新生兒死亡 | 母貓 | 胎盤傳播 |

### FIV 相關疾病

| 階段 | 表現 | 持續時間 |
|------|------|---------|
| 急性期 | 輕度發燒、淋巴結腫大、短暫白血球減少 | 2-4 週 |
| 無症狀期 | 臨床正常 | 數月至數年 |
| 漸進免疫缺陷 | 慢性口腔炎、慢性上呼吸道感染、體重減輕 | 漸進 |
| 終末期 | 嚴重伺機感染、消瘦、腫瘤 |—|

## 四、診斷

### SNAP Combo Test 判讀

| 標靶 | FeLV p27 抗原 | FIV 抗體 |
|------|-------------|---------|
| 偵測 | 血中游離病毒抗原 | 抗 FIV 抗體 |
| 窗口期 | 感染後 2-3 週 | 感染後 2-4 週 |
| 偽陽性 | 少見（IFA 確認） | 母源抗體（< 6 月齡幼貓）、FIV 疫苗（台灣未使用） |
| 偽陰性 | 退行性感染/極早期 | 末期免疫缺陷（無法產生抗體） |
| 確認檢驗 | IFA 或 PCR | 6 個月後重驗或 Western blot/PCR |

## 五、治療與管理

| 面向 | FeLV 陽性貓 | FIV 陽性貓 |
|------|-----------|-----------|
| 室內飼養 | 必須（防傳播 + 減少感染暴露） | 必須 |
| 疫苗 | 其他核心疫苗照常 | 照常（殺毒疫苗優先） |
| 伺機感染 | 積極診斷與治療 | 積極診斷與治療 |
| 監測 | 每 6 月：CBC、生化、胸腔 X 光 | 每 6-12 月：CBC、生化、尿液 |
| 抗病毒 | 沒什麼好藥（Interferonω 有部分證據） | Zidovudine（研究中，非常規） |
| 預防 | FeLV 疫苗（戶外/高風險貓） | 無有效疫苗 |
| 預後 | 進行性：中位存活 2-3 年 | 可有正常壽命（若管理良好） |

## 六、人醫借鑑 (Translational Insights)

| 人醫概念/工具 | 與貓逆轉錄病毒的連結 | 現況 |
|-------------|-------------------|------|
| FIV 作為 HIV 動物模型 | FIV 與 HIV 同為 lentivirus、CD4+ T 細胞耗竭、病程分期相似 | HIV 致病機轉與抗病毒/疫苗研究之經典自然模型 |
| 抗反轉錄病毒治療（ART/AZT） | zidovudine 等源自 HIV 治療 | 貓有研究但非常規，毒性/療效受限 |
| CD4:CD8 比值監測 | HIV 以 CD4 追蹤免疫狀態 | 貓 FIV 研究用，臨床少常規 |
| 反轉錄病毒致癌 | FeLV 致淋巴瘤與人類 HTLV 機轉相通 | 比較腫瘤病毒學 |

## 七、臨床爭議與知識空缺 (Controversies & Knowledge Gaps)

| 議題 | 立場 | Evidence Level |
|------|------|---------------|
| FIV 疫苗的 DIVA 困境 | 疫苗誘導抗體使抗體檢測無法區分感染 vs 接種；Fel-O-Vax FIV 已於美加停產 | Level II |
| 抗病毒藥（AZT / interferon-ω）療效 | 證據有限、非常規 | Level III |
| 單次陽性即安樂 | 反對——應確認檢驗，勿單憑一次陽性安樂（AAFP） | Level II |
| FIV+ 與陰性貓同住 | 穩定不打鬥家庭傳播風險低（主要靠深咬傷） | Level II |
| FeLV 退行性感染長期意義 | provirus 持續、免疫抑制下可再活化；輸血供血篩檢須含 PCR | Level II |

## 八、近期實證更新（2020 AAFP 指引，待 DVM 覆核）

1. **兩階段檢測**：單次時間點未必能定 status；篩檢陽性（尤其健康/低風險貓）須以不同方法確認，**勿單憑一次陽性安樂**。
2. **FeLV 三分類**（abortive / regressive / progressive）取代舊「persistent/transient」；**regressive = 抗原陰性但 provirus PCR 陽性**，免疫抑制（類固醇/化療）或輸血前須警覺再活化/傳播。
3. **FIV 疫苗（Fel-O-Vax）已於美加停產**（DIVA 問題）；判讀抗體檢測務必確認接種史；PCR 不受疫苗影響。
4. **FIV+ 貓管理良好可達正常壽命**；穩定家庭中對其他貓傳播風險低（深咬傷為主）——不應因 FIV+ 逕自安樂或棄養。
5. **檢測時機**：取得後盡早、暴露後、接種 FeLV/FIV 疫苗前、生病時。
> 臨床內容與所有劑量需獸醫師依現行指引與仿單核對。`,
  clinical_pearl: 'SNAP combo test 的 FIV 部分偵測的是「抗體」而非抗原，所以有兩個常見陷阱：(1) 小於 6 個月齡的幼貓可能有母源抗體導致偽陽性，應在 6 個月後重驗；(2) FIV 末期免疫嚴重缺陷的貓可能無法產生足夠抗體而偽陰性。FeLV 部分偵測 p27 抗原，退行性感染的貓抗原血症可以消退，所以「曾經 FeLV 陽性後轉陰」的貓仍有骨髓中病毒再活化的風險，在免疫抑制（如使用類固醇、化療）時應格外注意。',
  common_mistakes: [
    '幼貓 FIV SNAP 陽性就宣判診斷，小於 6 月齡幼貓母源抗體可致偽陽性，需 6 個月後重驗',
    'FeLV SNAP 陽性未做確認檢驗就安樂，應以 IFA 或 PCR 確認，並在 4-6 週後重驗',
    'FIV 陽性貓就建議安樂，管理良好的 FIV 貓可有正常壽命',
    '忽略 FeLV 退行性感染的再活化風險，免疫抑制治療前應考慮病毒狀態',
    '認為 FeLV/FIV 陽性貓不能打疫苗，其他核心疫苗仍需施打，優先使用殺毒疫苗',
  ],
  disease_data: {
    signalment: 'FeLV：年輕貓（< 4 歲）風險最高（成貓有年齡相關抵抗力）。多貓家庭與收容所高風險。無明確品種傾向。FIV：未絕育戶外公貓（打鬥傳播）風險最高，中位診斷年齡 5 歲以上。台灣流浪貓族群盛行率較高。',
    etiology: 'FeLV：Gammaretrovirus，經唾液、鼻分泌物、血液、乳汁、胎盤傳播。長期密切接觸（共用食碗、理毛）為主要傳播方式。FIV：Lentivirus，主要經咬傷傳播，偶經垂直傳播。環境傳播極罕見（病毒脆弱）。',
    pathogenesis: 'FeLV：經口鼻進入 → 扁桃腺/淋巴組織初級複製 → 病毒血症 → 骨髓/上皮組織感染。免疫反應決定結局：強 CMI → 清除（流產性）；部分 → 退行性（骨髓潛伏）；弱 → 進行性（持續病毒血症→淋巴瘤/骨髓抑制/免疫抑制）。FIV：咬傷進入 → 區域淋巴結複製 → 病毒血症 → CD4+ T 細胞感染 → 漸進性 CD4+ 減少 → 免疫缺陷。',
    clinical_signs: [
      { sign: '體重減輕/消瘦', category: 'primary', description: '慢性進行性，兩種病毒皆可見' },
      { sign: '慢性口腔炎/齒齦炎', category: 'primary', description: 'FIV 特別常見，嚴重增生性口腔炎' },
      { sign: '反覆/慢性感染', category: 'primary', description: '上呼吸道、皮膚、泌尿道反覆感染' },
      { sign: '貧血', category: 'primary', description: 'FeLV 骨髓抑制導致非再生性貧血' },
      { sign: '淋巴結腫大', category: 'secondary', description: '全身性，FeLV 淋巴瘤或 FIV 急性期' },
      { sign: '發燒（不明原因）', category: 'secondary', description: '反覆不明原因發燒' },
    ],
    staging: null,
    differential_diagnosis: [
      { condition: 'FIP（貓傳染性腹膜炎）', key_differentiator: '高球蛋白、滲出液分析、FCoV PCR' },
      { condition: '淋巴瘤（非 FeLV 相關）', key_differentiator: 'FeLV 陰性、組織病理/免疫組化分型' },
      { condition: '慢性腎病', key_differentiator: 'IRIS 分期、腎指數、USG' },
      { condition: 'Mycoplasma haemofelis', key_differentiator: 'PCR 確診、血液抹片偶見附著紅血球' },
      { condition: '骨髓疾病（再生不良性貧血）', key_differentiator: '骨髓穿刺/活檢' },
    ],
    diagnostic_workup: '1. SNAP combo test（FeLV p27 抗原 + FIV 抗體）→ 2. 陽性結果確認：FeLV → IFA 或血液 PCR；FIV → 6 月後重驗或 Western blot → 3. 基線評估：CBC（貧血/白血球減少）、生化、尿液分析、胸腔 X 光（縱膈淋巴瘤篩檢）→ 4. FeLV 陽性：骨髓評估（若血球減少持續）',
    treatment_protocol: '無特效抗病毒藥物。管理策略：(1) 室內飼養（減少暴露 + 防傳播）(2) 核心疫苗照常（殺毒疫苗優先）(3) 伺機感染積極治療 (4) 定期健檢監測 (5) FeLV 淋巴瘤→化療（CHOP protocol）(6) 嚴重口腔炎→全口拔牙 ± Cyclosporine (7) 營養支持與環境減壓 (8) FeLV 疫苗預防（高風險貓）。',
    prognosis: 'FeLV 進行性感染：中位存活 2-3 年，30% 於確診後 2 年內因相關疾病死亡。FeLV 退行性/流產性：預後良好。FIV：管理良好可有正常壽命（12-15 年），許多 FIV 貓最終死於非 FIV 相關原因。雙重感染（FeLV + FIV）：預後最差。',
    monitoring: 'FeLV 陽性：每 6 個月 CBC + 生化 + 體重 + 理學檢查。每年胸腔 X 光（淋巴瘤篩檢）。注意貧血、淋巴結腫大、體重下降。FIV 陽性：每 6-12 個月 CBC + 生化 + 尿液。口腔檢查。注意慢性感染徵兆。',
    owner_communication: 'FeLV/FIV 驗出陽性不代表貓就完了。FIV 陽性的貓只要顧得好，壽命跟生活品質都可以接近正常。重點就三件事：純室內養、定期健檢、伺機感染立刻處理。FeLV 預後比較沒那麼樂觀，但通常也還能再過幾年有品質的日子。不建議跟陰性貓住在一起，會傳給其他貓。最後一句：飼主的心理也需要被照顧，這不是一個人就能扛的事。',
  },
  diagnostic_data: null,
  procedure_data: null,
  visual_placeholders: [
    { position: 'FeLV 感染結局表後', type: 'flowchart', description: 'FeLV 感染結局決策樹' },
    { position: 'SNAP 判讀表後', type: 'flowchart', description: 'SNAP combo test 結果判讀與確認檢驗流程' },
  ],
  interactive_placeholders: [],
  drug_api_links: ['Cyclosporine', 'Interferon'],
  references: [
    { type: 'guideline', citation: 'Little S, Levy J, Hartmann K, et al. 2020 AAFP Feline Retrovirus Testing and Management Guidelines. J Feline Med Surg. 2020;22(1):5-30. doi:10.1177/1098612X19895940.', relevance: 'FeLV/FIV 篩檢與管理現行 AAFP 指引（兩階段檢測、勿單次陽性安樂）' },
    { type: 'textbook', citation: 'Nelson RW, Couto CG. Small Animal Internal Medicine, 6th ed. Elsevier, 2020. Chapter 96: Feline Leukemia Virus and Feline Immunodeficiency Virus.', relevance: 'FeLV/FIV 教材' },
    { type: 'journal', citation: 'Hartmann K. "Clinical aspects of feline retroviruses: A review." Viruses. 2012;4(11):2684-2710.', relevance: 'FeLV/FIV 臨床綜述' },
    { type: 'journal', citation: 'Beczkowski PM et al. "Naturally occurring feline immunodeficiency virus (FIV) infection in cats: A review." Vet Microbiol. 2021;261:109195.', relevance: 'FIV 自然感染回顧' },
  ],
  is_current: true,
  created_at: now,
};

/** 犬細小病毒腸炎 (CPV)，疾病型 */
const contentCPV: NodeContent = {
  id: 'CONTENT-IM-L3-023',
  node_id: 'IM-L3-023',
  version: 2,
  summary: '犬細小病毒腸炎（CPV-2）是幼犬最兇的傳染病之一，臨床長相就是急性出血性腸炎加上嚴重白血球減少。病毒專挑快速分裂的細胞下手（腸道隱窩上皮跟骨髓），結果腸道屏障崩潰、細菌移位、敗血症。沒治療的死亡率可以衝到 90%，積極支持療法做下去可以壓到 5-20%。台灣幼犬疫苗覆蓋率不均，夜市或寵物店買來的幼犬、收容所的幼犬都是高風險族群。',
  learning_objectives: [
    '說明 CPV-2 的病毒學特性與腸道隱窩攻擊機轉',
    '列出 CPV 的典型臨床三聯徵（嘔吐、出血性腹瀉、白血球減少）',
    '制定 CPV 的積極支持療法方案（輸液、抗生素、止吐、營養）',
    '解釋 CPV SNAP 抗原檢測的判讀注意事項（疫苗後偽陽性）',
    '說明台灣的犬疫苗接種時程與母源抗體干擾問題',
  ],
  key_points: [
    'CPV-2 為 Parvoviridae 科，無套膜 DNA 病毒，環境抵抗力極強（室溫可存活 > 1 年）',
    '攻擊快速分裂細胞：(1) 腸道隱窩上皮 → 絨毛萎縮 → 出血性腹瀉 (2) 骨髓 → 白血球減少 → 免疫抑制',
    '典型三聯徵：急性嘔吐 + 出血性（番茄醬樣）腹瀉 + 白血球減少（< 2000/μL）',
    '致死機轉：腸道屏障崩潰 → 細菌移位 → 敗血症 + 低血糖 + DIC → 多器官衰竭',
    '診斷：SNAP CPV 抗原檢測（糞便），注意活毒疫苗接種後 5-12 天可偽陽性',
    '治療核心：積極靜脈輸液 + 廣譜抗生素（Ampicillin + Enrofloxacin）+ 止吐（Maropitant）+ 早期腸道營養',
    '台灣疫苗時程：6-8 週起始、每 2-4 週追加、16 週最後一劑；母源抗體可干擾至 12-16 週',
  ],
  body: `# 犬細小病毒腸炎 (Canine Parvovirus Enteritis, CPV)

## 一、病毒學與流行病學

### 病毒特性

| 特徵 | 說明 |
|------|------|
| 分類 | Carnivore protoparvovirus 1, Parvoviridae |
| 基因組 | 單股 DNA，約 5 kb |
| 主要型別 | CPV-2a, 2b, 2c（台灣以 2a/2b 為主） |
| 環境耐受性 | 無套膜，極度穩定，室溫可存活 > 1 年，耐酸耐鹼 |
| 有效消毒 | 1:30 漂白水（sodium hypochlorite）、10 分鐘接觸 |
| 傳播途徑 | 糞口傳播，間接（環境/媒介）傳播常見 |

### 好發族群

| 風險因子 | 說明 |
|---------|------|
| 年齡 | 6 週至 6 個月（母源抗體消退至疫苗保護建立的窗口期） |
| 品種 | Rottweiler, Doberman, German Shepherd, Pit Bull（較高風險） |
| 疫苗狀態 | 未完整接種 3 劑（最後一劑 ≥ 16 週齡） |
| 環境 | 收容所、犬舍、寵物店、夜市（台灣特色高風險來源） |

### 台灣流行病學

- 台灣夜市/寵物店購入未完整疫苗接種幼犬仍為重要感染源
- 收容所幼犬入所後 CPV 爆發為常見問題
- 都會區獸醫院每年仍見明顯病例數，尤其在疫苗「空窗期」（8-16 週齡）幼犬

## 二、病理機制 (Pathophysiology)

### 腸道攻擊

整個機轉跑起來的時候是這樣：
經口感染 → 口咽淋巴組織初級複製（2-5 天）→ 病毒血症 → 攻擊快速分裂細胞

腸道：
CPV 結合 transferrin receptor（TfR）→ 進入腸道隱窩（crypt）上皮幹細胞 → 幹細胞壞死 → 絨毛無法更新 → 絨毛萎縮/塌陷 → 腸道屏障崩潰

| 病理階段 | 發生事件 | 臨床表現 |
|---------|---------|---------|
| Day 0-4 | 病毒複製、口咽→血行散布 | 無症狀或輕度發燒 |
| Day 3-5 | 腸道隱窩壞死 → 絨毛萎縮 | 嘔吐、水樣腹瀉 |
| Day 4-7 | 屏障崩潰 → 出血 + 細菌移位 | 出血性腹瀉、敗血症 |
| Day 5-10 | 骨髓抑制 → 嗜中性球減少 | 白血球 < 2000、發燒/低體溫 |

### 致死機轉

腸道屏障崩潰 → 腸道細菌（E. coli, Clostridium spp.）移位 → 敗血症 → SIRS → 低血壓 + 低血糖（肝糖耗竭 + 敗血症）+ DIC → 多器官衰竭 → 死亡

白血球減少的雙重打擊：骨髓嗜中性球前驅細胞被 CPV 破壞 → 嚴重嗜中性球減少 → 無法對抗移位細菌 → 敗血症風險大幅增加

## 三、臨床表現與診斷

### 典型臨床表現

| 表現 | 頻率 | 描述 |
|------|------|------|
| 嘔吐 | > 90% | 頻繁、劇烈、通常先於腹瀉 |
| 出血性腹瀉 | > 80% | 「番茄醬樣」或血水便，惡臭 |
| 精神極度沉鬱 | > 90% | 虛脫、不願移動 |
| 發燒 → 低體溫 | 變異 | 初期發燒、敗血症後可能低體溫 |
| 腹痛 | 常見 | 觸診腹部疼痛 |
| 脫水 | > 80% | 嚴重脫水（8-12%） |

### 實驗室檢查

| 檢查 | 發現 | 臨床意義 |
|------|------|---------|
| CBC | WBC < 2000/μL（嗜中性球減少） | 預後指標，越低越差 |
| 血糖 | 低血糖 (< 60 mg/dL) | 需積極補充，與預後相關 |
| 電解質 | 低鉀、低鈉 | 嘔吐/腹瀉流失 |
| 白蛋白 | 低白蛋白血症 | 腸道蛋白流失 |
| 凝血 | PT/aPTT 延長 | DIC 徵兆 |

### SNAP CPV 抗原檢測

| 項目 | 說明 |
|------|------|
| 原理 | 偵測糞便中 CPV 抗原 |
| 敏感度 | 80-98%（發病 3-7 天最高） |
| 特異度 | 高（> 95%） |
| 偽陽性 | 活毒疫苗接種後 5-12 天（病毒脫落） |
| 偽陰性 | 發病極早期（Day 1-2）、抗體已中和病毒 |

## 四、治療策略

### 積極支持療法

| 治療 | 方案 | 說明 |
|------|------|------|
| 靜脈輸液 | LRS 或 Plasma-Lyte，先矯正脫水再維持 | 核心治療，維持灌流 |
| 葡萄糖 | 2.5-5% Dextrose in fluids | 低血糖 < 60 mg/dL 時必要 |
| 電解質 | KCl 補充（20-40 mEq/L） | 矯正低鉀 |
| 廣譜抗生素 | Ampicillin 22 mg/kg IV Q8H + Enrofloxacin 5 mg/kg IV SID | 預防/治療敗血症 |
| 止吐 | Maropitant 1 mg/kg SC/IV SID | 核心止吐，改善舒適度與早期進食 |
| 止吐（追加） | Ondansetron 0.5 mg/kg IV Q8-12H | Maropitant 不足時 |
| 早期腸道營養 | 停止嘔吐後 12 小時即可開始少量多餐 | 縮短住院時間 |
| 膠體液 | Hetastarch 20 mL/kg/day（若低白蛋白） | 維持膠體滲透壓 |

### 進階治療

| 治療 | 適應症 | 證據 |
|------|--------|------|
| Oseltamivir 2 mg/kg PO BID × 5d | 嗜中性球減少 | 有限，可能減少菌血症 |
| 高免疫血漿/血清 | 嚴重白血球減少 | 有限，部分研究支持 |
| 輸血 | PCV < 20% 或嚴重出血 | 必要時 |
| G-CSF | 嚴重持續嗜中性球減少 | 研究中 |

## 五、預防，台灣疫苗接種建議

| 週齡 | 疫苗 | 說明 |
|------|------|------|
| 6-8 週 | 第一劑 CPV（多合一） | 起始 |
| 10-12 週 | 第二劑 | 追加 |
| 14-16 週 | 第三劑（≥ 16 週齡必須） | 確保母源抗體不干擾 |
| 1 年後 | 追加 1 劑 | 建立長期免疫 |
| 之後每 3 年 | 追加 | WSAVA 建議 |

母源抗體干擾：母源抗體可持續至 12-16 週齡 → 中和疫苗病毒 → 疫苗失效。所以最後一劑必須在 ≥ 16 週齡施打。

## 六、預後

| 預後因子 | 良好 | 不良 |
|---------|------|------|
| 白血球數 | > 2500/μL | < 1000/μL |
| 血糖 | 正常 | 低血糖 < 40 mg/dL |
| 年齡 | > 12 週 | < 8 週 |
| 治療時機 | 發病 24 小時內 | 延遲治療 |
| 品種 | 混種/一般品種 | Rottweiler, Doberman |
| 整體存活率 | 80-95%（積極治療） | < 10%（未治療） |

## 七、人醫借鑒 (Translational Insights)

| 人醫概念 | 獸醫應用潛力 | 現況 |
|---------|-------------|------|
| 單株抗體被動免疫（人 RSV/COVID mAb） | CPV 單株抗體中和循環病毒 | 美國 2023 條件核准犬 CPV 單株抗體（CPMA），首個專一抗 CPV 製劑 |
| 糞菌移植（FMT，人 C. difficile 標準） | CPV 幼犬腸道菌叢重建、加速腹瀉緩解 | 小型研究（Pereira 2018）顯示輔助 FMT 可加速臨床改善 |
| 早期腸道營養（人重症 ICU 共識） | CPV 停嘔後早期餵食促腸黏膜修復 | 證據支持早期 EN 縮短住院 |
| 抗病毒藥再利用（oseltamivir） | CPV 輔助治療 | 證據有限、不建議常規 |

## 八、臨床爭議與知識空缺 (Controversies & Knowledge Gaps)

| 爭議議題 | 現況 | Evidence Level |
|---------|------|---------------|
| CPV 單株抗體（CPMA）真實世界療效 | 2023 條件核准、廠商數據顯示降低症狀/死亡，獨立同儕審查療效資料仍有限 | Level III |
| 抗生素選擇與抗藥性管理 | 非敗血症/白血球未過低者是否需 fluoroquinolone 有爭議；enrofloxacin 幼犬軟骨病變風險 | Level III |
| 門診 vs 住院治療 | Venn 2017 門診方案存活 ~80%，資源受限可行，住院仍為標準 | Level II |
| 輔助療法（FMT、血漿、G-CSF、oseltamivir） | 多為小型研究或證據不足，非常規 | Level III |

## 九、近期實證更新 (Recent Evidence Updates)

1. **CPV 單株抗體（CPMA, 2023）**：美國 USDA 條件核准之首個專一抗 CPV 被動免疫；廠商試驗示可降低臨床症狀，獨立 RCT 療效資料仍累積中，**不取代積極支持療法**。注意：一項研究（Larson 2025）顯示預防性 CPMA 可能像母源抗體般阻斷後續疫苗免疫應答，使用後疫苗時程需評估。
2. **門診治療方案（Venn 2017）**：資源受限時，SC 輸液 + maropitant + 長效抗生素 + 口服營養之門診方案存活率約 80%，低於住院但顯著優於不治療。
3. **早期腸道營養**：停嘔後 12h 早期餵食（vs 傳統長時間 NPO）縮短住院、促腸黏膜修復。
4. **輔助 FMT（Pereira 2018）**：小型研究顯示糞菌移植可加速 CPV 幼犬腹瀉緩解，仍待更大型驗證。
5. **抗生素管理**：警惕 fluoroquinolone（如 enrofloxacin）對幼犬軟骨之潛在影響；依敗血症風險與嗜中性球程度個別化抗生素選擇。
> 以上治療之劑量、適應症與新藥使用須由獸醫師依現行核准與個案覆核。`,
  clinical_pearl: 'CPV 治療中最被低估的兩件事：(1) 早期腸道營養，傳統觀念是 NPO 直到停止嘔吐，但新研究顯示在 Maropitant 控制嘔吐後儘早開始少量多餐（高消化性低脂飲食）可促進腸道上皮修復、縮短住院時間。(2) 低血糖監測，CPV 幼犬低血糖（< 40 mg/dL）是獨立死亡預測因子，必須每 4-6 小時監測並積極補充。白血球計數低谷通常在 Day 5-7，之後若開始回升（> 2500/μL）通常預後良好。',
  common_mistakes: [
    '疫苗接種最後一劑在 12 週齡就結束，母源抗體可干擾至 16 週，最後一劑必須 ≥ 16 週齡',
    'SNAP 陽性但近期接種過疫苗，活毒疫苗後 5-12 天可偽陽性，需結合臨床判斷',
    'CPV 幼犬長時間禁食等嘔吐完全停止，早期腸道營養（停嘔後 12 小時）可加速復原',
    '忽略低血糖監測，低血糖是 CPV 重要死亡因子，需每 4-6 小時測量',
    '僅用單一抗生素，敗血症風險下需覆蓋革蘭氏陽性 + 陰性菌（Ampicillin + Fluoroquinolone）',
  ],
  disease_data: {
    signalment: '好發 6 週至 6 個月齡幼犬。Rottweiler、Doberman、German Shepherd、American Pit Bull Terrier 品種風險較高。未完整接種疫苗的幼犬為最高風險族群。台灣夜市/寵物店購入幼犬和收容所幼犬為高風險群體。',
    etiology: 'Carnivore protoparvovirus 1（CPV-2a, 2b, 2c）。無套膜單股 DNA 病毒，環境抵抗力極強（室溫存活 > 1 年）。糞口傳播為主，間接傳播（環境汙染、鞋底、器具）常見。感染量極低即可致病（< 1000 virus particles）。',
    pathogenesis: '經口感染 → 口咽淋巴組織 2-5 天初級複製 → 病毒血症 → 攻擊快速分裂細胞 → (1) 腸道隱窩幹細胞壞死 → 絨毛萎縮 → 腸道屏障崩潰 → 出血性腹瀉 + 細菌移位 (2) 骨髓前驅細胞 → 白血球減少 → 免疫抑制 → 敗血症 + 低血糖 + DIC → 多器官衰竭。',
    clinical_signs: [
      { sign: '急性劇烈嘔吐', category: 'primary', description: '通常為首發症狀，頻繁劇烈' },
      { sign: '出血性腹瀉', category: 'primary', description: '番茄醬樣或血水便，惡臭' },
      { sign: '極度精神沉鬱', category: 'primary', description: '虛脫、不願移動' },
      { sign: '嚴重脫水', category: 'primary', description: '皮膚帳幕延遲、黏膜乾燥' },
      { sign: '發燒或低體溫', category: 'primary', description: '初期發燒，敗血症後低體溫（不良預兆）' },
      { sign: '腹痛', category: 'secondary', description: '觸診腹部疼痛反應' },
    ],
    staging: null,
    differential_diagnosis: [
      { condition: '犬冠狀病毒腸炎', key_differentiator: '通常較輕、白血球正常、CPV SNAP 陰性' },
      { condition: '犬瘟熱', key_differentiator: '呼吸道 + 消化道 + 神經症狀、結膜炎、角質墊增厚' },
      { condition: '出血性胃腸炎（HGE/AHDS）', key_differentiator: '成犬、WBC 正常或升高、CPV 陰性' },
      { condition: '腸套疊', key_differentiator: '超音波可見 target sign、觸診可摸到腸管' },
      { condition: '異物/中毒', key_differentiator: '病史、X 光/超音波異物、毒物暴露史' },
    ],
    diagnostic_workup: '1. 病史（年齡、疫苗狀態、接觸史）→ 2. SNAP CPV 糞便抗原檢測 → 3. CBC（白血球計數，預後指標）→ 4. 生化 + 電解質（血糖、K+、Na+、白蛋白）→ 5. 凝血檢查（疑似 DIC 時）→ 6. 腹腔超音波（排除套疊/異物、評估腸壁厚度）',
    treatment_protocol: '積極支持療法：(1) IV 輸液（LRS，先矯正脫水 4-6 hr 再維持）+ KCl 20-40 mEq/L (2) 2.5-5% Dextrose 維持血糖 > 60 mg/dL (3) Ampicillin 22 mg/kg IV Q8H + Enrofloxacin 5 mg/kg IV SID (4) Maropitant 1 mg/kg SC/IV SID ± Ondansetron (5) 早期腸道營養（停嘔 12 hr 後開始）(6) 低白蛋白→膠體液。療程直至進食正常、白血球回升、無嘔吐腹瀉 24-48 hr。',
    prognosis: '積極治療存活率 80-95%。未治療死亡率 > 90%。不良預後因子：WBC < 1000/μL、低血糖 < 40 mg/dL、低體溫、< 8 週齡、Rottweiler/Doberman。大多數存活犬在 5-7 天內開始改善。存活者通常完全康復並獲得長期免疫。',
    monitoring: '住院期間每 4-6 小時：體溫、心率、血壓、血糖。每日：CBC（白血球趨勢）、體重、嘔吐/腹瀉次數。每 12-24 小時：電解質。出院標準：停止嘔吐 + 自主進食 + WBC 回升 + 正常水合。出院後 1-2 週追蹤。',
    owner_communication: 'CPV 確實嚴重，但能治。通常要住院 5-7 天。積極治療下存活率可以到 80-95%。費用會跟住院天數成正比。康復過的幼犬基本上都有長期免疫了。環境消毒這件事不能省，用 1:30 稀釋的漂白水把所有狗會碰的地方擦過。其他疫苗還沒打完的狗，最近半年都不要進到這個被污染的環境。最好的預防永遠是把疫苗打齊。',
  },
  diagnostic_data: null,
  procedure_data: null,
  visual_placeholders: [
    { position: '腸道攻擊機轉段落後', type: 'flowchart', description: 'CPV 感染病理機轉與致死途徑流程圖' },
    { position: '疫苗接種表後', type: 'timeline', description: '台灣幼犬疫苗接種時程與母源抗體干擾示意圖' },
  ],
  interactive_placeholders: [],
  drug_api_links: ['Ampicillin', 'Enrofloxacin', 'Maropitant', 'Ondansetron', 'Oseltamivir'],
  references: [
    { type: 'journal', citation: 'Goddard A, Leisewitz AL. Canine parvovirus. Vet Clin North Am Small Anim Pract. 2010;40(6):1041-1053. doi:10.1016/j.cvsm.2010.07.007.', relevance: 'CPV 診斷與治療綜述' },
    { type: 'journal', citation: 'Venn EC, et al. Evaluation of an outpatient protocol in the treatment of canine parvoviral enteritis. J Vet Emerg Crit Care. 2017;27(1):52-65. doi:10.1111/vec.12561.', relevance: 'CPV 門診治療方案研究' },
    { type: 'journal', citation: 'Pereira GQ, Gomes LA, Santos IS, et al. Fecal microbiota transplantation in puppies with canine parvovirus infection. J Vet Intern Med. 2018;32(2):707-711. doi:10.1111/jvim.15072.', relevance: 'FMT 輔助治療 CPV 幼犬（近期實證）' },
    { type: 'journal', citation: 'Larson L, Hansen J, Ramasami P, et al. Prophylactic use of canine parvovirus monoclonal antibody induces blockade of vaccinal canine parvovirus immunization similar to maternally derived passive immunity. Am J Vet Res. 2025;86(12). doi:10.2460/ajvr.25.07.0233.', relevance: 'CPV 單株抗體與疫苗干擾（近期實證/警示）' },
    { type: 'textbook', citation: 'Nelson RW, Couto CG. Small Animal Internal Medicine, 6th ed. Elsevier, 2020. Chapter 91: Canine Viral Diseases.', relevance: 'CPV 教材' },
    { type: 'guideline', citation: 'Day MJ, Horzinek MC, Schultz RD, Squires RA. WSAVA Guidelines for the vaccination of dogs and cats. J Small Anim Pract. 2016;57(1):E1-E45. doi:10.1111/jsap.2_12431.', relevance: 'WSAVA 犬貓疫苗接種指引' },
  ],
  is_current: true,
  created_at: now,
};

/** 呼吸系統生理，L1 概念型 */
const contentRespiratoryPhysiology: NodeContent = {
  id: 'CONTENT-IM-L1-005',
  node_id: 'IM-L1-005',
  version: 1,
  summary: '呼吸系統生理涵蓋通氣、氣體交換、氧氣運輸與呼吸調控四大面向。犬貓呼吸系統在解剖與功能上與人類相似但有物種差異，貓的氣道對刺激物特別敏感，犬的熱散逸高度依賴呼吸（喘氣）。理解正常呼吸生理是診斷呼吸道疾病的基石。',
  learning_objectives: [
    '描述犬貓呼吸系統的解剖結構（上呼吸道、下呼吸道、肺泡）與各段功能',
    '解釋通氣力學（肺順應性、氣道阻力、呼吸功）及其臨床意義',
    '說明肺泡氣體交換原理（擴散定律、V/Q 匹配）與氧合評估指標',
    '描述氧氣運輸系統（血紅素氧解離曲線）與組織氧供需平衡',
    '說明呼吸中樞調控機制（延腦、橋腦、化學受體）與臨床應用',
  ],
  key_points: [
    '犬貓氣道分為傳導區（鼻腔→氣管→支氣管至終末細支氣管）與呼吸區（呼吸性細支氣管→肺泡管→肺泡）',
    '肺泡表面活性劑（surfactant）由 Type II 肺泡細胞分泌，降低表面張力防止肺泡塌陷',
    '氣體交換依 Fick 擴散定律：擴散量 ∝ 面積 × 分壓差 / 厚度；V/Q 不匹配是低氧血症最常見原因',
    '血紅素氧解離曲線：右移（↑ CO2、↑ H+、↑ 溫度、↑ 2,3-DPG）→ 促進組織卸氧',
    '貓的支氣管平滑肌對刺激物反應特別強烈，此為貓哮喘的生理基礎',
    '犬缺乏有效汗腺，散熱高度依賴呼吸蒸發（喘氣 panting），短頭犬種易熱衰竭',
    'SpO2 ≥ 95% 對應 PaO2 ≥ 80 mmHg（安全區）；SpO2 < 90% 提示嚴重低氧',
  ],
  body: `# 呼吸系統生理 (Respiratory Physiology)

## 一、呼吸道解剖與功能分區

### 傳導區 (Conducting Zone)
- 上呼吸道：鼻腔（加溫、加濕、過濾）→ 咽 → 喉
- 下呼吸道：氣管 → 主支氣管 → 葉支氣管 → 段支氣管 → 終末細支氣管
- 傳導區功能：空氣調節、黏液纖毛清除（mucociliary escalator）、IgA 免疫防禦
- 犬貓差異：貓氣管直徑較小（4-5 mm），支氣管平滑肌更為發達

### 呼吸區 (Respiratory Zone)
- 呼吸性細支氣管 → 肺泡管 → 肺泡囊 → 肺泡
- 犬肺泡約 5 億個，總面積約 50-100 m²
- 肺泡壁：Type I 細胞（氣體交換，佔 95% 面積）+ Type II 細胞（surfactant 分泌）+ 肺泡巨噬細胞

## 二、通氣力學 (Ventilation Mechanics)

| 參數 | 定義 | 犬正常值 | 臨床意義 |
|------|------|---------|---------|
| 潮氣量 (Vt) | 每次呼吸進出肺的氣體量 | 10-15 mL/kg | 淺快呼吸時 Vt 下降 |
| 呼吸頻率 (RR) | 每分鐘呼吸次數 | 犬 15-30、貓 20-40 | 異常需評估原因 |
| 每分通氣量 (MV) | Vt × RR | 150-300 mL/kg/min | 反映整體通氣效率 |
| 肺順應性 (C) | ΔV/ΔP |—| 纖維化↓、肺水腫↓ |
| 氣道阻力 (R) | ΔP/Flow |—| 哮喘↑、異物↑ |

呼吸功 (Work of Breathing)：
- 正常呼吸主要依賴吸氣肌（橫膈膜 75%、外肋間肌）
- 呼氣為被動過程（肺彈性回縮力）
- 氣道阻力增加（哮喘/異物）→ 呼氣需主動出力 → 呼氣性呼吸困難

## 三、氣體交換 (Gas Exchange)

Fick 擴散定律：Vgas = A × D × (P1 - P2) / T
- A = 擴散面積、D = 擴散係數、P1-P2 = 分壓差、T = 擴散距離
- CO2 擴散速率為 O2 的 20 倍 → 低氧血症通常先於高碳酸血症

V/Q 匹配：
- 正常 V/Q ≈ 0.8（通氣/灌流比）
- V/Q = 0（分流，shunt）→ 對氧氣無反應的低氧
- V/Q = ∞（死腔，deadspace）→ 通氣浪費
- V/Q 不匹配是臨床低氧血症最常見原因（肺炎、肺水腫、肺不張）

## 四、氧氣運輸與血紅素氧解離曲線

氧氣運輸三形式：
1. 溶解氧（PaO2，僅占 1.5%）
2. 與血紅素結合（SaO2/SpO2，占 98.5%）
3. 氧含量（CaO2） = (1.34 × Hb × SaO2) + (0.003 × PaO2)

| 右移因子 | 左移因子 | 臨床意義 |
|---------|---------|---------|
| ↑ CO2 (Bohr effect) | ↓ CO2 | 組織代謝活躍處卸氧 |
| ↑ H+ (酸中毒) | ↓ H+ (鹼中毒) | 酸中毒促進組織供氧 |
| ↑ 溫度 | ↓ 溫度 | 發燒動物卸氧增加 |
| ↑ 2,3-DPG | ↓ 2,3-DPG | 貧血代償性↑ 2,3-DPG |

## 五、呼吸調控

延腦呼吸中樞：
- 背側呼吸群（DRG）：主要驅動吸氣
- 腹側呼吸群（VRG）：用力呼吸時活化

化學受體：
- 中樞化學受體（延腦腹外側）：對 CO2/H+ 敏感（主要驅動力）
- 周邊化學受體（頸動脈體、主動脈體）：對 PaO2 < 60 mmHg 敏感

## 六、犬貓物種差異

| 特徵 | 犬 | 貓 | 臨床意義 |
|------|----|----|---------|
| 氣管直徑 | 較大 | 較小（4-5 mm） | 貓氣管插管選管重要 |
| 支氣管反應性 | 中等 | 高度敏感 | 貓哮喘好發基礎 |
| 散熱方式 | 喘氣為主 | 出汗+喘氣 | 短頭犬易熱衰竭 |
| 呼吸頻率 | 15-30/min | 20-40/min |—|`,
  clinical_pearl: '評估呼吸困難動物時，先區分是「吸氣性」還是「呼氣性」呼吸困難，吸氣性（stridor、頸部伸展）提示上呼吸道阻塞（喉麻痺、塌陷氣管），呼氣性（腹部用力、延長呼氣）提示下呼吸道問題（哮喘、慢性支氣管炎）。這個簡單的臨床觀察可以在第一秒就縮小鑑別診斷範圍。SpO2 是非侵入性監測的利器，但要記住它反映的是 SaO2 而非 PaO2，在氧解離曲線的平坦區（SpO2 > 90%），PaO2 的大幅下降可能只造成 SpO2 的微小變化。',
  common_mistakes: [
    '將 SpO2 和 PaO2 混為一談（SpO2 90% 對應 PaO2 約 60 mmHg，非線性關係）',
    '忘記 CO2 擴散速率遠快於 O2，所以「正常 CO2 但低氧」常見於 V/Q 不匹配初期',
    '未區分吸氣性與呼氣性呼吸困難的解剖意義',
    '忽略貓支氣管平滑肌高反應性，操作時過度刺激可誘發支氣管痙攣',
  ],
  disease_data: null,
  diagnostic_data: null,
  procedure_data: null,
  visual_placeholders: [
    { position: '呼吸道解剖段落後', type: 'annotated_image', description: '犬貓呼吸道解剖與功能分區標注圖' },
    { position: '氧解離曲線段落後', type: 'flowchart', description: '血紅素氧解離曲線與移動因子示意圖' },
  ],
  interactive_placeholders: [],
  drug_api_links: [],
  references: [
    { type: 'textbook', citation: 'Cunningham JG, Klein BG. Textbook of Veterinary Physiology, 6th ed. Elsevier, 2020. Section IV: Respiratory Physiology.', relevance: '動物呼吸生理學基礎教材' },
    { type: 'textbook', citation: 'Ettinger SJ, Feldman EC, Cote E. Textbook of Veterinary Internal Medicine, 8th ed. Elsevier, 2017. Section on Respiratory System.', relevance: '呼吸系統生理與疾病整合教材' },
    { type: 'journal', citation: 'Rozanski E. "Canine chronic bronchitis." Vet Clin North Am Small Anim Pract. 2020;50(2):393-404.', relevance: '犬慢性支氣管疾病與呼吸生理' },
    { type: 'guideline', citation: 'Sumner C, Rozanski E. "Management of respiratory emergencies in small animals." Vet Clin North Am Small Anim Pract. 2013;43(4):799-815.', relevance: '呼吸急診中的生理學應用' },
  ],
  is_current: true,
  created_at: now,
};

/** 呼吸道發炎與氣道重塑，L2 機轉型 */
const contentAirwayInflammation: NodeContent = {
  id: 'CONTENT-IM-L2-007',
  node_id: 'IM-L2-007',
  version: 1,
  summary: '氣道發炎與重塑（airway remodeling）是連接呼吸生理與臨床呼吸道疾病的核心病理機轉。急性發炎以嗜酸球或嗜中性球浸潤為主，慢性則進展至氣道平滑肌增生、杯狀細胞化生和上皮下纖維化。貓的氣道重塑與人類哮喘病理高度相似，犬的慢性支氣管炎則更類似人類 COPD。',
  learning_objectives: [
    '描述氣道發炎的免疫學機轉（Th2 pathway 與嗜酸球性發炎）',
    '說明氣道重塑的組織學變化（平滑肌增生、杯狀細胞化生、上皮下纖維化）',
    '比較嗜酸球性與嗜中性球性氣道發炎的病因與治療差異',
    '解釋黏液纖毛清除功能障礙在呼吸道感染中的角色',
    '說明犬貓氣道發炎的物種差異與臨床意義',
  ],
  key_points: [
    'Th2 pathway：過敏原 → APC → Th2 細胞 → IL-4/IL-5/IL-13 → IgE 產生 + 嗜酸球活化 + 杯狀細胞增生',
    '嗜酸球性發炎：釋放 MBP、ECP 等陽離子蛋白，把氣道上皮燒一頓，發炎接著一輪一輪滾',
    '氣道重塑四大特徵：(1) 上皮下纖維化 (2) 平滑肌肥大/增生 (3) 杯狀細胞化生 (4) 血管新生',
    '黏液纖毛清除（mucociliary escalator）：正常每分鐘 1-2 cm 速率 → 感染/發炎時纖毛運動減慢 → 黏液蓄積 → 細菌定殖',
    '貓哮喘 = Th2/嗜酸球主導（類似人類哮喘）；犬慢性支氣管炎 = 嗜中性球主導（類似人類 COPD）',
    '氣道重塑為部分不可逆，早期介入抗炎治療可減緩進展',
  ],
  body: `# 呼吸道發炎與氣道重塑 (Airway Inflammation & Remodeling)

## 一、氣道發炎的免疫學機轉

### Th2 型嗜酸球性發炎（貓哮喘模型）

整個機轉跑起來的時候是這樣：
吸入過敏原 → 氣道上皮樹突細胞（DC）攝取 → 遷移至淋巴結呈現 → 初始 T 細胞分化為 Th2 → 產生 IL-4（促 B cell class switch → IgE）、IL-5（嗜酸球活化與存活）、IL-13（杯狀細胞化生 + 氣道高反應性）

嗜酸球效應：
| 釋放物質 | 效應 | 臨床結果 |
|---------|------|---------|
| MBP（主要鹼性蛋白） | 上皮細胞毒性 | 氣道上皮脫落 |
| ECP（嗜酸球陽離子蛋白） | 黏液腺刺激 | 黏液過度分泌 |
| LTC4/LTD4（白三烯） | 支氣管平滑肌收縮 | 氣道狹窄 |
| TGF-β | 促纖維化 | 上皮下纖維化 |

### 嗜中性球性發炎（犬慢性支氣管炎模型）

整個機轉跑起來的時候是這樣：
慢性刺激（吸入刺激物、感染、汙染物）→ 上皮細胞與巨噬細胞活化 → IL-8/CXCL8 → 嗜中性球趨化 → 蛋白酶（elastase、MMP-9）釋放 → 彈性纖維與膠原蛋白降解 → 氣道壁損傷 → 修復時結締組織沉積 → 纖維化

| 特徵 | 嗜酸球性（Th2 型） | 嗜中性球性 |
|------|-------------------|-----------|
| 代表疾病 | 貓哮喘 | 犬慢性支氣管炎 |
| 驅動細胞因子 | IL-4, IL-5, IL-13 | IL-8, TNF-α, IL-17 |
| BAL 細胞學 | 嗜酸球 > 17% | 嗜中性球 > 12% |
| 類固醇反應 | 良好 | 部分有效 |
| 人類對應 | 過敏性哮喘 | COPD |

## 二、氣道重塑 (Airway Remodeling)

### 四大組織學特徵

1. 上皮下纖維化：TGF-β → 纖維母細胞活化 → 膠原蛋白 I/III 沉積於基底膜下 → 氣道壁增厚
2. 平滑肌肥大/增生：慢性收縮刺激 + 生長因子 → 平滑肌質量增加 → 氣道高反應性
3. 杯狀細胞化生：IL-13 驅動 → 正常纖毛上皮被杯狀細胞取代 → 黏液過度分泌
4. 血管新生：VEGF 增加 → 氣道壁血管增多 → 促進炎症細胞浸潤 + 水腫

### 重塑的不可逆性

| 階段 | 病理 | 可逆性 | 治療策略 |
|------|------|--------|---------|
| 急性發炎 | 支氣管痙攣 + 黏膜水腫 | 完全可逆 | 支氣管擴張劑 |
| 亞急性 | 黏液栓塞 + 嗜酸球浸潤 | 大部分可逆 | 類固醇 |
| 慢性重塑 | 纖維化 + 平滑肌增生 | 部分不可逆 | 長期抗炎 |

## 三、黏液纖毛清除功能障礙

正常氣道防禦的第一道防線：

黏液纖毛系統：
- 杯狀細胞和漿液腺分泌黏液（gel 層 + sol 層）
- 纖毛以 12-15 Hz 頻率協調擺動 → 推送黏液向咽方向（每分鐘 1-2 cm）
- 黏液中含 IgA、lysozyme、lactoferrin 等抗菌物質

失能機轉：
| 原因 | 機轉 | 後果 |
|------|------|------|
| 病毒感染 | 纖毛上皮破壞 | 繼發細菌性肺炎 |
| 黏液過度分泌 | 超過纖毛清除能力 | 黏液栓塞 |
| 脫水/乾燥 | sol 層減少 → 纖毛無法有效擺動 | 黏液滯留 |
| 全身麻醉 | 纖毛運動抑制 | 術後肺炎風險 |
| 慢性發炎 | 纖毛細胞被杯狀細胞取代 | 清除功能永久下降 |`,
  clinical_pearl: '支氣管肺泡沖洗液（BAL）的細胞學分析是區分氣道發炎類型的金標準工具。正常貓 BAL：巨噬細胞 > 70%、嗜酸球 < 17%、嗜中性球 < 7%。嗜酸球 > 17% 強烈提示過敏性/哮喘性氣道發炎（類固醇反應良好）；嗜中性球明顯增加伴細菌吞噬 → 感染性氣道發炎（需抗生素）。不過實際臨床中約 30% 的貓哮喘 BAL 同時有嗜中性球增加，要注意混合型發炎的可能。',
  common_mistakes: [
    '將所有氣道發炎都視為嗜酸球性而直接使用類固醇，嗜中性球性感染型發炎用類固醇會惡化',
    '忽略氣道重塑的不可逆性，延遲抗炎治療導致永久性氣道壁增厚',
    '不做 BAL 細胞學就經驗性治療呼吸道疾病，嗜酸球 vs 嗜中性球的治療方向完全不同',
    '忘記全身麻醉會抑制黏液纖毛清除功能，術後應注意肺炎風險特別是在已有呼吸道疾病的患者',
  ],
  disease_data: null,
  diagnostic_data: null,
  procedure_data: null,
  visual_placeholders: [
    { position: 'Th2 機轉鏈段落後', type: 'flowchart', description: 'Th2 pathway 與嗜酸球性氣道發炎流程圖' },
    { position: '氣道重塑段落後', type: 'comparison_table', description: '正常氣道 vs 急性發炎 vs 慢性重塑組織學比較' },
  ],
  interactive_placeholders: [],
  drug_api_links: [],
  references: [
    { type: 'textbook', citation: 'Ettinger SJ, Feldman EC, Cote E. Textbook of Veterinary Internal Medicine, 8th ed. Elsevier, 2017. Chapter 46: Diseases of the Lower Respiratory Tract.', relevance: '下呼吸道疾病病理生理教材' },
    { type: 'journal', citation: 'Reinero CR. "Advances in the understanding of pathogenesis, and diagnostics and therapeutics for feline allergic asthma." Vet J. 2011;190(1):28-33.', relevance: '貓哮喘免疫病理機轉' },
    { type: 'journal', citation: 'Trzil JE. "Feline Asthma: Diagnostic and Treatment Update." Vet Clin North Am Small Anim Pract. 2020;50(2):375-391.', relevance: '貓哮喘發炎與重塑最新知識' },
    { type: 'guideline', citation: 'Hawkins EC. "Chronic bronchitis in dogs." In: Bonagura JD, Twedt DC, eds. Kirk\'s Current Veterinary Therapy XV. Elsevier, 2014:672-678.', relevance: '犬慢性支氣管炎臨床指引' },
  ],
  is_current: true,
  created_at: now,
};

/** 胰外分泌不全 (EPI)，疾病型 */
const contentEPI: NodeContent = {
  id: 'CONTENT-IM-L3-024',
  node_id: 'IM-L3-024',
  version: 2,
  summary: 'EPI 是胰臟腺泡細胞功能喪失、消化酵素分泌不足（需喪失 >90% 才發病）造成的吸收不良症候群。犬最常見病因為胰腺腺泡萎縮（PAA），好發德國牧羊犬；貓則多為慢性胰臟炎終末期。典型是「食慾正常/增加卻持續消瘦＋大量脂肪便」。確診靠空腹血清 cTLI ≤ 5.5 μg/L（現行參考值；舊 2.5 因商用 assay 位移已上修，見內文；與胰臟炎用的 cPLI 是不同檢驗）。治療為終生胰酶替代（PERT）＋矯正 cobalamin 缺乏——近年證實口服 cobalamin 亦有效，非僅皮下注射。台灣以 GSD 為主、混種犬占比上升。',
  learning_objectives: [
    '說明 EPI 兩大病因（PAA vs 慢性胰臟炎終末期）與犬貓差異',
    '正確運用空腹 cTLI 診斷 EPI，並區分 cTLI（腺泡功能）與 cPLI（胰臟炎）之不同',
    '制定 PERT（胰酶替代）＋ cobalamin 矯正＋飲食的完整治療計畫',
    '說明 cobalamin 缺乏的意義與現行「口服 vs 注射」補充選擇（近年更新）',
    '列出 EPI 與慢性腸病（CE）、慢性胰臟炎、PLE 的鑑別要點',
    '規劃治療反應評估與監控，辨識反應不佳的可矯正因子',
  ],
  key_points: [
    'cTLI（空腹）**≤ 5.5 μg/L（犬）＝確診**；5.6–7.5 灰色地帶（無法排除、複檢）；≥ 10.9 正常（現行參考值 Cridge 2024；舊 ≤2.5 因商用 assay 位移已上修，用舊值會漏診）',
    '⚠️ cTLI（反映腺泡分泌）≠ cPLI（胰脂肪酶，用於胰臟炎）——EPI 診斷用 cTLI，勿混用',
    '犬最常見病因為胰腺腺泡萎縮（PAA），好發 GSD、Rough Collie；貓主因為慢性胰臟炎',
    '治療三支柱：胰酶替代（PERT，粉劑不需預孵育）＋ cobalamin 矯正 ＋ 飲食個別化，終生治療',
    '⚠️ cobalamin 更新：**每日口服 cyanocobalamin 亦有效**（Chang 2022、Toresson 2021），非僅 SC 注射',
    '預後：達臨床緩解者可長期存活（Batchelor 2007）；主要負擔為費用與配合度',
    '台灣：GSD 仍為最常見品種，近年混種犬占比上升',
  ],
  body: `# 胰外分泌不全 (Exocrine Pancreatic Insufficiency, EPI)

> 犬慢性吸收不良的重要**可治**病因；典型是「食慾正常/增加卻持續消瘦＋大量脂肪便」。犬最常見病因為**胰腺腺泡萎縮（PAA）**，好發德國牧羊犬。確診靠**空腹血清 cTLI < 2.5 μg/L**（Williams & Batt 定義的參考標準）。治療是終生**胰酶替代（PERT）**＋矯正 **cobalamin 缺乏**（近年證實**口服 cobalamin 亦有效**，非僅注射）。

## 一、病理機制 (Pathophysiology)

胰臟腺泡細胞功能喪失 → 脂肪酶、澱粉酶、蛋白酶分泌嚴重不足（需喪失 **>90%** 分泌功能才出現臨床症狀，故病程常隱匿）。

### 病因分類

| 病因 | 機轉 | 好發 | 佔比 |
|------|------|------|------|
| 胰腺腺泡萎縮 (PAA) | 淋巴球性胰臟炎 → 腺泡進行性萎縮/纖維化 | 犬（GSD、Rough Collie）1–5 歲 | 犬最主要 |
| 慢性胰臟炎終末期 | 反覆發炎 → 纖維化 → 腺泡破壞殆盡 | 犬貓中老年 | 犬次要；**貓主因** |
| 胰管阻塞 | 結石/腫瘤壓迫 → 腺泡萎縮 | 貓較多 | 少見 |
| 先天性胰臟發育不全 | 腺泡發育不良 | 幼犬 | 罕見 |

> PAA 免疫病理：亞臨床期可見 T 淋巴球浸潤腺泡（preclinical/subclinical phase），此時 cTLI 可能仍在灰色地帶、尚未達確診值——故單次灰色地帶值需追蹤複檢。

### 吸收不良機轉鏈

胰酶不足 → 脂肪/蛋白質/醣類消化障礙 → 吸收不良、滲透性腹瀉 → **小腸菌叢失衡/過度生長** → cobalamin（維生素 B12）吸收受損（胰臟分泌的 intrinsic factor 對犬 B12 吸收關鍵）→ 全身營養不良、脂溶性維生素缺乏。

[圖片:epi-malabsorption-cascade]（EPI 吸收不良機轉鏈：酵素不足→消化障礙→菌叢失衡→B12 缺乏→營養不良）

## 二、臨床表現與診斷

### 臨床表現

| 表現 | 頻率 | 描述 |
|---------|------|------|
| 體重減輕（食慾正常/增加） | >90% | 典型「吃不胖」 |
| 脂肪便（steatorrhea） | 常見 | 大量、黃灰、油膩惡臭、難沖洗 |
| 多食（polyphagia） | 常見 | 吸收不良的飢餓 |
| 糞量增加/軟便 | 常見 | 未消化食物 |
| 被毛品質差 | 常見 | 脂溶性維生素缺乏 |
| 排氣/腸鳴、食糞 | 部分 | 菌叢失衡、營養缺乏行為 |

### 確診（cTLI 為參考標準）

| 檢測 | 判讀 | 備註 |
|------|------|------|
| **cTLI（犬，空腹 12 h）** | **≤ 5.5 μg/L = 確診**；5.6–7.5 = 灰色地帶（無法排除 EPI，複檢）；7.6–10.8 = 不太可能；≥ 10.9 = 正常 | 現行參考實驗室值（Cridge 2024）；**舊 ≤2.5 因 assay 位移已上修**；非空腹可偽高 |
| fTLI（貓，空腹） | < 8 μg/L 支持診斷 | 貓 EPI 診斷 |
| 血清 Cobalamin（B12） | 低值支持並須補充 | EPI 犬缺乏率高 |
| 血清 Folate | 升高提示小腸菌叢失衡 | 輔助 |

> **要點**：cTLI 直接反映胰臟腺泡功能（分泌的 trypsinogen），**與 cPLI（胰脂肪酶，用於胰臟炎）是不同檢驗**，勿混用；EPI 診斷用 **cTLI**，不是 cPLI。

[互動:epi-diagnostic-flow]（互動：慢性腹瀉/消瘦 → cTLI 判讀（確診/灰色地帶/正常）→ 灰色地帶追蹤 vs 轉查 CE/胰臟炎的決策）

## 三、治療策略

### 三大支柱

| 支柱 | 措施 | 劑量/方式 | 備註 |
|------|------|----------|------|
| 胰酶替代（PERT） | [藥物:Pancreatin]（pancrelipase）粉劑 | 依產品，每餐混食（起始約 1 茶匙/10 kg，依反應調整） | **不需預孵育**；粉劑優於錠劑；生胰臟為替代 |
| Cobalamin 矯正 | [藥物:Cyanocobalamin] | **每日口服**或注射 SC（見下） | 近年證實**口服亦有效** |
| 飲食 | 高消化性；脂肪量個別化 | — | 不必一律極低脂；依反應調整 |

**Cobalamin 途徑更新（Chang 2022、Toresson 2021）：**
- 傳統：SC 注射（犬 250–1500 μg，依體型，每週 → 漸減）。
- **現行證據：每日口服 cyanocobalamin 亦能有效正常化血清 B12**（犬 CE/EPI），為注射的有效替代；依複檢 B12 調整。

### 輔助
- 小腸菌叢失衡/治療反應不佳：試 [藥物:Tylosin]（或 [藥物:Metronidazole]）一療程。
- 胃酸抑制（[藥物:Omeprazole]）可減少胃酸對酵素破壞——**證據有限、非常規**。
- 反應評估：2–4 週應見糞質改善與增重。

## 四、併發症與監控

| 議題 | 處置 |
|------|------|
| Cobalamin（B12）缺乏 | 常見（~67%）且為獨立預後（存活）不良因子 → 測量並補充/複檢 |
| 治療反應不佳（犬） | 主因為合併 CE/IBD、菌叢失衡、酶量/劑型、飲食（非單純未補 B12）→ 逐項排查 |
| 口腔黏膜刺激（高劑量生胰酶粉） | 減量、混勻、給後清潔口腔 |
| 脂溶性維生素/凝血異常（罕見） | 嚴重者評估補充 |

**監控計畫：**

| 時間點 | 項目 | 目標 |
|--------|------|------|
| 2–4 週 | 糞質、體重、食慾 | 糞質改善、體重回升 |
| 每 4–12 週（初期） | 血清 cobalamin | 正常化後拉長間隔 |
| 穩定後 | 嘗試最低有效酶量 | 兼顧療效與成本 |
| 反應不佳 | 排查 B12、CE、菌叢、劑量/配合度 | 找出可矯正因子 |

## 五、預後與預後因子

- **達到臨床緩解者預後佳、可長期存活**（Batchelor 2007：clinical remission 達成則 prolonged survival likely）。
- **低血清 cobalamin（及 folate）為獨立預後不良因子**（Soetart 2019，299 犬世代）→ 應測量並矯正。
- 需**終生**治療；主要負擔為**費用與每餐給藥的配合度**。
- 不良因子：低 cobalamin、合併 CE/IBD、飼主配合差、腫瘤性病因。
- 上述預後數字/因子來自病例系列/世代研究（Evidence Level II–III）。

## 六、人醫借鑒 (Translational Insights)

| 人醫工具/觀念 | 獸醫應用 | 現況 |
|--------------|---------|------|
| PERT（胰酶替代）與腸溶微球劑型 | 犬粉劑 PERT；劑型/酸抑制研究 | 應用中 |
| 口服 vs 注射維生素 B12 對等性 | 犬口服 cobalamin 取代注射 | 已有犬證據（Chang 2022） |
| 囊性纖維化/胰切除後 EPI 管理 | 病理生理對照 | 概念借鑒 |
| 糞便彈性蛋白酶（human FE-1） | 犬應用受限、以 cTLI 為準 | 人用為主、犬不採 |

## 七、臨床爭議與知識空缺

| 議題 | 現況 | Evidence Level |
|------|------|----------------|
| Cobalamin 口服 vs 注射 | 犬證據支持口服有效；長期/重症資料續累積 | II |
| 最佳胰酶劑型/劑量與酸抑制加乘 | 個別化調整，缺標準化 RCT | III |
| 飲食脂肪含量（低脂是否必要） | 個別反應差異大，非一律極低脂 | III |
| PAA 免疫病理與早期免疫調節 | 假說為免疫介導；早期介入證據不足 | III |
| 灰色地帶 cTLI 的處置 | 追蹤複檢；臨界值判讀仍有變異 | III |

## 八、近期實證更新

- **Cobalamin 可口服**：每日口服 cyanocobalamin 能有效正常化 EPI/CE 犬的血清 B12（Chang 2022、Toresson 2021）→ 不再只有 SC 注射；依複檢調整。
- **診斷閾值更新**：cTLI 因商用 assay 位移，**EPI 診斷值由舊 ≤2.5 上修至 ≤5.5 μg/L**（灰色地帶 5.6–7.5、正常 ≥10.9；現行參考實驗室/Cridge 2024）——用舊 <2.5 會漏診。cTLI（空腹）仍是參考標準（Williams & Batt 為原始 assay 驗證）；**cTLI ≠ cPLI**（cPLI 用於胰臟炎）勿混用。
- **PERT**：粉劑不需預孵育、亦不需常規併用制酸劑（Szkopek 2024 回顧）；依反應個別化。
- **綜合回顧**：Cridge 2024（JAVMA）更新犬貓 EPI 診療全貌。
- **台灣**：GSD 仍為最常見品種，近年混種犬占比上升；PERT/生胰臟與 cobalamin 的長期取得與費用為在地照護重點；建議定期複檢 B12。`,
  clinical_pearl: '任何年輕 GSD（或 Rough Collie）出現「慢性腹瀉＋大量脂肪便＋食慾正常/增加卻消瘦」，第一個要想到並排除 EPI——診斷延誤最常見原因就是沒想到它。確診靠**空腹 12 小時**的 cTLI（非空腹會偽性正常而漏診）；別把 cPLI（那是驗胰臟炎的）當成 EPI 檢驗。治療初期 cobalamin 矯正與胰酶同等重要——而且現在有證據支持**每日口服 B12** 就能有效，不一定要一直挨針。',
  common_mistakes: [
    '未空腹採血做 cTLI → 偽性正常而漏診',
    '拿 cPLI（胰脂肪酶）當 EPI 檢驗 → cPLI 是驗胰臟炎的，EPI 要用 cTLI',
    '只驗胰酶、不測/不矯正 cobalamin——低 B12 常見（~67%）且為獨立預後（存活）不良因子，需測量並補充；但犬反應不佳更常因合併 CE/菌叢失衡/酶量/飲食，非單純未補 B12',
    '把 EPI 誤當 IBD/CE 而做不必要的免疫抑制',
    '以為胰酶粉需與食物預孵育（現已證實不需要）',
    '認定 cobalamin 只能注射 → 近年證據支持每日口服亦有效，可依複檢調整',
  ],
  disease_data: {
    signalment: '犬最常見，尤其 GSD（德國牧羊犬）和 Rough-coated Collie，好發年齡 1-5 歲（PAA）。貓少見但多因慢性胰臟炎，好發中老年。',
    etiology: '犬最常見為胰腺腺泡萎縮（PAA），推測為自體免疫機轉。其次為慢性胰臟炎終末期。貓以慢性胰臟炎為主因。罕見病因包括胰管阻塞和先天性胰臟發育不全。',
    pathogenesis: 'PAA：T 淋巴球浸潤胰臟腺泡 → 進行性腺泡萎縮與纖維化 → 消化酵素分泌不足（需喪失 > 90% 功能才出現症狀）→ 脂肪/蛋白質/碳水化合物吸收不良 → SIBO → Cobalamin/脂溶性維生素缺乏。',
    clinical_signs: [
      { sign: '體重減輕伴多食', category: 'primary', description: '吃不胖為最典型表現，食慾正常或增加但持續消瘦' },
      { sign: '脂肪便', category: 'primary', description: '大量、黃灰色、油膩惡臭、難以沖洗的糞便' },
      { sign: '腹瀉', category: 'primary', description: '慢性大腸或小腸型腹瀉，糞便量多' },
      { sign: '被毛品質差', category: 'secondary', description: '脂溶性維生素缺乏導致毛髮乾燥粗糙' },
      { sign: '食糞', category: 'secondary', description: '營養缺乏驅動的異常進食行為' },
    ],
    staging: null,
    differential_diagnosis: [
      { condition: '慢性腸病 (CE/IBD)', key_differentiator: 'cTLI 正常；需內視鏡切片；食慾常減退而非增加' },
      { condition: '慢性胰臟炎', key_differentiator: 'cPLI 升高；cTLI 可能正常或降低；超音波胰臟異常' },
      { condition: '小腸淋巴瘤', key_differentiator: '超音波腸壁增厚/淋巴結腫大；需切片確診' },
      { condition: '蛋白質流失性腸病 (PLE)', key_differentiator: '低白蛋白血症為特徵；cTLI 正常' },
    ],
    diagnostic_workup: '1. 空腹 12 hr 採血 cTLI（犬 ≤ 5.5 μg/L 確診，5.6–7.5 灰色地帶複檢；現行參考值，舊 ≤2.5 因 assay 位移已上修；注意 cTLI≠cPLI，後者用於胰臟炎）→ 2. 同時測血清 Cobalamin/Folate → 3. CBC/生化排查共病 → 4. 腹腔超音波評估胰臟萎縮/排除腫瘤 → 5. 糞便檢查排除寄生蟲；反應不佳時排查 CE/IBD',
    treatment_protocol: '三支柱、終生治療：(1) 胰酶替代 PERT（Pancreatin/pancrelipase 粉劑每餐混食，不需預孵育，依反應調量）；(2) Cobalamin 矯正——每日口服 cyanocobalamin 或 SC 注射（250-1500 μg 依體型），近年證實口服亦有效，依複檢 B12 調整；(3) 高消化性飲食、脂肪量個別化（不必一律極低脂）。小腸菌叢失衡/反應不佳時試 Tylosin（或 metronidazole）一療程。反應 2-4 週見糞質改善與增重。劑量須依仿單與獸醫核對。',
    prognosis: '達臨床緩解者預後佳、可長期存活（Batchelor 2007）；低血清 cobalamin/folate 為獨立預後不良因子（Soetart 2019，299 犬）。需終生治療，主要負擔為費用與配合度。犬反應不佳最常見原因為合併 CE/IBD、菌叢失衡、酶量/劑型、飲食（非單純未補 B12，惟 B12 仍應矯正）；腫瘤性病因預後較差。',
    monitoring: '治療 2-4 週評估糞質、體重、食慾。初期每 4-12 週複檢血清 cobalamin 至正常化再拉長間隔。穩定後嘗試最低有效胰酶劑量兼顧療效與成本。反應不佳者排查 B12、CE、菌叢、劑量與配合度。',
    owner_communication: 'EPI 是終身的事，每餐都要加胰酶粉，治療成本要先想清楚。多數狗對治療反應不錯，生活品質可以維持得很好。維生素 B12 的矯正很重要，好消息是現在有證據支持「每天口服」就有效，不一定要一直挨針，可以跟醫師討論。定期回診複檢 B12 與體重。',
  },
  diagnostic_data: null,
  procedure_data: null,
  visual_placeholders: [
    { position: '吸收不良機轉鏈段落後', type: 'flowchart', description: 'EPI 吸收不良機轉鏈流程圖：酵素不足→消化障礙→菌叢失衡→B12缺乏→營養不良' },
  ],
  interactive_placeholders: [
    { position: '二、臨床表現與診斷 確診段後', type: 'decision_tree', description: '互動：慢性腹瀉/消瘦 → cTLI 判讀（確診/灰色地帶/正常）→ 灰色地帶追蹤 vs 轉查 CE/胰臟炎' },
  ],
  drug_api_links: ['Pancreatin', 'Cyanocobalamin', 'Tylosin', 'Metronidazole', 'Omeprazole'],
  references: [
    { type: 'journal', citation: 'Williams DA, Batt RM. Sensitivity and specificity of radioimmunoassay of serum trypsin-like immunoreactivity for the diagnosis of canine exocrine pancreatic insufficiency. J Am Vet Med Assoc. 1988;192(2):195-201. doi:10.2460/javma.1988.192.02.195.', relevance: 'cTLI 診斷 EPI 的敏感/特異度定義（參考標準經典）' },
    { type: 'journal', citation: 'Cridge H, Steiner JM. Exocrine pancreatic insufficiency in dogs and cats. J Am Vet Med Assoc. 2024;262(2):246-255. doi:10.2460/javma.23.09.0505.', relevance: '近年（≤5年）犬貓 EPI 診療綜合回顧' },
    { type: 'journal', citation: 'Chang H, et al. Effect of oral or injectable supplementation with cobalamin in dogs with hypocobalaminemia caused by chronic enteropathy or exocrine pancreatic insufficiency. J Vet Intern Med. 2022;36(5):1607-1621. doi:10.1111/jvim.16528.', relevance: '口服 vs 注射 cobalamin 補充（口服有效性溯源）' },
    { type: 'journal', citation: 'Batchelor DJ, et al. Breed Associations for Canine Exocrine Pancreatic Insufficiency. J Vet Intern Med. 2007;21(2):207-214. doi:10.1111/j.1939-1676.2007.tb02950.x.', relevance: 'EPI 品種好發流行病學' },
    { type: 'journal', citation: 'Batchelor DJ, et al. Prognostic Factors in Canine Exocrine Pancreatic Insufficiency: Prolonged Survival is Likely if Clinical Remission is Achieved. J Vet Intern Med. 2007;21(1):54-60. doi:10.1111/j.1939-1676.2007.tb02928.x.', relevance: '預後因子（達臨床緩解則長期存活）' },
    { type: 'journal', citation: 'Westermarck E, Wiberg M. Exocrine pancreatic insufficiency in dogs. Vet Clin North Am Small Anim Pract. 2003;33(5):1165-1179. doi:10.1016/S0195-5616(03)00057-3.', relevance: 'EPI 病因/診斷/治療綜合回顧' },
    { type: 'journal', citation: 'Soetart N, et al. Serum cobalamin and folate as prognostic factors in canine exocrine pancreatic insufficiency: An observational cohort study of 299 dogs. Vet J. 2019;243:15-20. doi:10.1016/j.tvjl.2018.11.003.', relevance: 'cobalamin/folate 為 EPI 獨立預後因子（299 犬世代，預後溯源）' },
    { type: 'journal', citation: 'Szkopek D, et al. A review: Pancreatic enzymes in the treatment of chronic pancreatic insufficiency in companion animals. J Vet Intern Med. 2024;38(4):2026-2033. doi:10.1111/jvim.17096.', relevance: '近年（≤5年）PERT 胰酶治療回顧（含不需預孵育）' },
    { type: 'textbook', citation: 'Ettinger SJ, Feldman EC, Cote E. Textbook of Veterinary Internal Medicine. 8th ed. Elsevier; 2017.', relevance: '內科教科書，胰外分泌疾病章節（教材）' },
  ],
  is_current: true,
  created_at: now,
};

/** 膽囊黏液囊腫 (Gallbladder Mucocele)，疾病型 */
const contentGBMucocele: NodeContent = {
  id: 'CONTENT-IM-L3-025',
  node_id: 'IM-L3-025',
  version: 1,
  summary: '膽囊黏液囊腫是犬膽囊裡黏液不正常累積，把膽囊撐到擴張的進行性疾病。腹腔超音波會看到典型的「奇異果切面（kiwi fruit sign）」。常跟高脂血症、甲狀腺機能低下、Cushing 這些內分泌疾病掛在一起。最怕的併發症是膽囊破裂變成膽汁性腹膜炎。要根治就是把膽囊切掉。',
  learning_objectives: [
    '描述膽囊黏液囊腫的病理生理機轉與危險因子',
    '辨識腹腔超音波中「kiwi fruit sign」的特徵表現',
    '評估膽囊黏液囊腫的外科 vs 內科治療適應症',
    '列出膽囊黏液囊腫與高脂血症、內分泌疾病的關聯',
    '說明膽囊破裂導致膽汁性腹膜炎的緊急處理',
  ],
  key_points: [
    '超音波特徵性「kiwi fruit sign」（放射狀黏液條紋）為診斷關鍵',
    '危險因子：高脂血症、甲低、Cushing、ABCB4 基因突變（Shetland Sheepdog）',
    '膽囊切除術（cholecystectomy）為根治性治療',
    '膽囊破裂 → 膽汁性腹膜炎為最危險併發症，死亡率 20-40%',
    'Ursodeoxycholic acid (UDCA) 可用於早期內科保守管理',
    '好發品種：Shetland Sheepdog、Cocker Spaniel、Miniature Schnauzer',
    '台灣地區膽囊黏液囊腫診斷率隨超音波普及而上升，貴賓犬與雪納瑞為高風險品種',
  ],
  body: `# 膽囊黏液囊腫 (Gallbladder Mucocele)

## 一、病理機制 (Pathophysiology)

膽囊黏液囊腫的核心為膽囊上皮細胞分泌過量黏液 (mucin) → 膽囊內黏液蓄積 → 膽囊進行性擴張 → 膽管阻塞/膽囊壁缺血壞死 → 膽囊破裂。

### 病因與機轉

| 因素 | 機轉 | 關聯性 |
|------|------|--------|
| 高脂血症 (dyslipidemia) | 異常脂質代謝改變膽囊上皮細胞功能 → 黏液分泌增加 | 強 |
| 甲狀腺機能低下 | 甲低 → 高膽固醇血症 → 膽汁成分改變 | 中-強 |
| Cushing's disease | 高皮質醇 → 高脂血症 + 膽囊運動功能下降 | 中 |
| ABCB4 基因突變 | 磷脂轉運蛋白缺陷 → 膽汁成分異常 | Shetland Sheepdog |
| 膽囊運動功能障礙 | 膽汁淤滯 → 黏液蓄積 | 推測相關 |

進展路徑：黏液分泌過量 → 膽汁淤滯 → 膽囊擴張 → 壁內壓力升高 → 膽囊壁缺血 → 壞死/破裂 → 膽汁性腹膜炎

## 二、臨床表現與診斷 (Clinical Signs & Diagnosis)

| 臨床表現 | 頻率 | 描述 |
|---------|------|------|
| 嘔吐 | ~60% | 非特異性，間歇性 |
| 厭食/食慾下降 | ~50% | 可能緩慢進展 |
| 腹部疼痛 | ~40% | 右前腹觸診痛 |
| 黃疸 | ~30% | 膽管阻塞時出現 |
| 無症狀 | ~25% | 偶然超音波發現 |
| 急性腹症 | ~15% | 膽囊破裂導致 |

### 超音波診斷

| 特徵 | 描述 | 臨床意義 |
|------|------|---------|
| Kiwi fruit sign | 膽囊內放射狀高回音條紋，似奇異果切面 | 特徵性表現，高度提示 mucocele |
| Immobile stellate pattern | 不動的星狀高回音結構 | 成熟 mucocele |
| 膽囊壁增厚 | > 2-3 mm | 提示發炎或缺血 |
| 不連續膽囊壁 | 壁缺損 | 提示破裂 |
| 腹腔游離液 | 高回音液體 | 膽汁性腹膜炎 |

### 血液學異常

| 檢查 | 常見異常 | 意義 |
|------|---------|------|
| ALP | 升高（80-90%） | 膽汁淤滯 |
| GGT | 升高（70%） | 膽管損傷 |
| ALT | 升高（50-60%） | 肝細胞損傷 |
| 膽固醇/三酸甘油酯 | 升高 | 基礎高脂血症 |
| Total bilirubin | 升高（30%） | 膽管阻塞 |
| 白血球 | 升高 | 膽囊炎/腹膜炎 |

## 三、治療策略 (Treatment)

### 外科治療（首選）

膽囊切除術 (cholecystectomy) 為根治性治療。

| 適應症 | 處理 |
|--------|------|
| 有臨床症狀的 mucocele | 擇期膽囊切除術 |
| 膽囊破裂/腹膜炎 | 緊急膽囊切除 + 腹腔灌洗 |
| 膽管阻塞 | 膽囊切除 ± 膽管沖洗/支架 |

手術預後：未破裂者手術死亡率 < 10%；已破裂者死亡率 20-40%。

### 內科保守治療

| 藥物 | 劑量 | 目的 |
|------|------|------|
| [藥物:Ursodeoxycholic acid] (UDCA) | 10-15 mg/kg PO SID | 促進膽汁流動、減少黏液蓄積 |
| [藥物:SAMe] (S-adenosylmethionine) | 20 mg/kg PO SID 空腹 | 肝臟保護 |
| 低脂飲食 |—| 控制高脂血症 |
| 治療基礎內分泌疾病 |—| 甲低：levothyroxine；Cushing：trilostane |

內科治療適應症：早期偶然發現的無症狀 mucocele，飼主拒絕手術，或手術高風險病患。需每 1-3 個月超音波追蹤。

## 四、預後 (Prognosis)

| 情境 | 預後 | 存活率 |
|------|------|--------|
| 擇期膽囊切除（未破裂） | 良好 | > 90% |
| 緊急手術（已破裂） | 警戒 | 60-80% |
| 內科保守管理 | 不確定 | 約 50% 最終仍需手術 |
| 膽汁性腹膜炎未手術 | 極差 | 極低 |

關鍵: 早期外科介入明顯優於等待破裂後緊急手術。`,
  clinical_pearl: '任何犬在腹腔超音波看到「kiwi fruit sign」即應高度懷疑膽囊黏液囊腫。此病與內分泌疾病（甲低、Cushing）密切相關，確診 mucocele 後應篩檢基礎內分泌疾病。在擇期手術與觀察等待之間，早期手術的預後明顯優於等到膽囊破裂後緊急手術。',
  common_mistakes: [
    '將 mucocele 誤判為單純膽泥（sludge）而未積極處理',
    '診斷 mucocele 但未篩檢基礎內分泌疾病（甲低、Cushing）',
    '內科保守管理未定期超音波追蹤，錯失手術時機',
    '已有臨床症狀仍選擇保守治療而非手術',
  ],
  disease_data: {
    signalment: '中老年犬（中位年齡 9-11 歲）。好發品種：Shetland Sheepdog（ABCB4 基因突變）、Cocker Spaniel、Miniature Schnauzer、Pomeranian。貓極罕見。',
    etiology: '多因子：高脂血症（原發性或繼發於甲低/Cushing）、ABCB4 基因突變（Shetland Sheepdog）、膽囊運動功能障礙。確切觸發機轉尚不完全清楚。',
    pathogenesis: '膽囊上皮細胞黏液分泌過量 → 黏液蓄積 → 膽囊進行性擴張 → 膽管阻塞/膽囊壁缺血壞死 → 破裂 → 膽汁性腹膜炎。',
    clinical_signs: [
      { sign: '嘔吐', category: 'primary', description: '間歇性，非特異性' },
      { sign: '厭食', category: 'primary', description: '食慾漸進性下降' },
      { sign: '腹部疼痛', category: 'primary', description: '右前腹觸診痛' },
      { sign: '黃疸', category: 'secondary', description: '膽管阻塞時出現，鞏膜/耳朵黃染' },
      { sign: '急性腹症', category: 'secondary', description: '膽囊破裂時突發劇烈腹痛、休克' },
    ],
    staging: null,
    differential_diagnosis: [
      { condition: '膽泥 (biliary sludge)', key_differentiator: '膽泥為均勻低回音沉積，可移動；mucocele 為不動的放射狀/星狀結構' },
      { condition: '膽囊炎 (cholecystitis)', key_differentiator: '膽囊壁增厚明顯但內容物不同；可合併存在' },
      { condition: '膽石 (cholelithiasis)', key_differentiator: '強回音結構伴聲影' },
      { condition: '膽囊腫瘤', key_differentiator: '壁內腫塊，不規則增厚' },
    ],
    diagnostic_workup: '1. 腹腔超音波（kiwi fruit sign / stellate pattern）→ 2. CBC/生化（ALP/GGT/ALT/膽紅素/膽固醇/三酸甘油酯）→ 3. T4/TSH 篩檢甲低 → 4. LDDS/UCCR 篩檢 Cushing → 5. 凝血功能（術前評估）',
    treatment_protocol: '有症狀：膽囊切除術（cholecystectomy）為首選。無症狀早期：UDCA 10-15 mg/kg PO SID + SAMe + 低脂飲食 + 治療基礎內分泌疾病 + q1-3mo 超音波追蹤。膽囊破裂：緊急手術 + 腹腔灌洗 + 廣譜抗生素。',
    prognosis: '擇期手術存活率 > 90%，預後良好。膽囊破裂後緊急手術死亡率 20-40%。內科保守管理約 50% 最終仍需手術。早期介入是改善預後的關鍵。',
    monitoring: '內科管理者：每 1-3 個月腹腔超音波追蹤膽囊大小與型態變化。術後：2 週拆線/追蹤，1-3 個月生化追蹤肝指數。長期追蹤基礎內分泌疾病控制。',
    owner_communication: '膽囊黏液囊腫會慢慢進展，時間拖越久破裂的風險越高。擇期手術相對安全、預後也好。等到破了再進開刀房，風險完全不同等級。如果要保守治療，超音波追蹤就不能停。',
  },
  diagnostic_data: null,
  procedure_data: null,
  visual_placeholders: [
    { position: '超音波診斷段落後', type: 'comparison_table', description: '膽囊超音波影像比較：正常膽囊 vs 膽泥 vs kiwi fruit sign vs 破裂' },
  ],
  interactive_placeholders: [],
  drug_api_links: ['Ursodeoxycholic acid', 'SAMe'],
  references: [
    { type: 'textbook', citation: 'Ettinger SJ, Feldman EC, Cote E. Textbook of Veterinary Internal Medicine, 8th ed. Elsevier, 2017. Chapter 63: Diseases of the Gallbladder and Extrahepatic Biliary System.', relevance: '膽囊疾病病理與臨床管理教材' },
    { type: 'journal', citation: 'Aguirre AL, Center SA, Randolph JF, et al. "Gallbladder disease in Shetland Sheepdogs: 38 cases (1995-2005)." J Am Vet Med Assoc. 2007;231(1):79-88.', relevance: 'Shetland Sheepdog 膽囊黏液囊腫品種傾向' },
    { type: 'journal', citation: 'Parkanzky M, Grimes J, Schmiedt C, et al. "Long-term survival of dogs treated for gallbladder mucocele by cholecystectomy, medical management, or both." J Vet Intern Med. 2019;33(5):2057-2066. doi:10.1111/jvim.15611', relevance: '膽囊切除 vs 內科管理預後比較' },
    { type: 'guideline', citation: 'Jaffey JA, Graham A, VanEerde E, et al. "Gallbladder mucocele: variables associated with outcome and the utility of ultrasonography to identify gallbladder rupture in 219 dogs." J Vet Intern Med. 2018;32(1):195-200.', relevance: '超音波診斷與預後因子分析' },
  ],
  is_current: true,
  created_at: now,
};

/** 犬慢性肝炎 (Canine Chronic Hepatitis)，疾病型 */
const contentCanineChronicHepatitis: NodeContent = {
  id: 'CONTENT-IM-L3-026',
  node_id: 'IM-L3-026',
  version: 2,
  summary: '犬慢性肝炎不是單一疾病，是一群以肝臟持續發炎、慢慢往纖維化走的異質性疾病。病因有銅蓄積性（Doberman、Bedlington Terrier 那群）、免疫介導性、還有特發性。肝臟切片是確診金標準，要用 WSAVA 標準化評分。治療看病因走不同路：銅蓄積用 D-penicillamine 加鋅，免疫介導用 prednisolone 加 azathioprine。ACVIM 共識聲明是重要的治療指引。',
  learning_objectives: [
    '分類犬慢性肝炎的病因（銅蓄積 vs 免疫介導 vs 特發性）',
    '說明品種特異性肝病的分子機轉（Doberman 銅代謝基因突變）',
    '解釋肝臟切片在慢性肝炎診斷中的角色與 WSAVA 標準化評分',
    '制定銅蓄積性肝炎與免疫介導性肝炎的差異化治療方案',
    '評估肝纖維化/肝硬化的進展與預後因子',
  ],
  key_points: [
    '肝臟切片為確診金標準，需 WSAVA 標準化組織學評分與銅染色（rhodanine/rubeanic acid）',
    '品種特異性：Doberman（COMMD1/ATP7A 銅代謝缺陷）、Bedlington Terrier（COMMD1 突變）、Labrador、Cocker Spaniel',
    '銅蓄積治療：D-penicillamine 10-15 mg/kg PO BID + 低銅飲食 + 鋅（乙酸鋅）',
    '免疫介導治療：Prednisolone 1-2 mg/kg/day + Azathioprine 1-2 mg/kg/day',
    'ACVIM 2019 共識聲明為犬慢性肝炎診斷與治療的重要參考',
    '肝硬化為不可逆終末期；門脈高壓與腹水為預後不良指標',
    '近期實證（Ullal 2022）：異常肝銅蓄積跨品種化、與飼料銅上升相關→任何犬 CH 都該驗肝銅（染色＋定量），勿只憑品種預判',
  ],
  body: `# 犬慢性肝炎 (Canine Chronic Hepatitis)

## 一、病理機制 (Pathophysiology)

犬慢性肝炎是一組以肝細胞壞死、淋巴球漿細胞浸潤、進行性纖維化為特徵的異質性疾病群。持續的肝損傷 → 星狀細胞活化 → 膠原沉積 → 橋接性纖維化 → 肝硬化。

### 病因分類

| 類型 | 機轉 | 好發品種 | 特徵 |
|------|------|---------|------|
| 銅蓄積性 | 銅代謝基因突變（COMMD1、ATP7A、ATP7B）→ 肝細胞銅排泄障礙 → 銅蓄積 → 氧化損傷 → 肝細胞壞死 | Bedlington Terrier, Doberman, Labrador, West Highland White Terrier | 肝銅 > 400 μg/g (DW)；rhodanine 染色陽性 |
| 免疫介導性 | 自體免疫或觸發因子 → T/B 淋巴球攻擊肝細胞 → interface hepatitis | Doberman, Cocker Spaniel, Standard Poodle | 大量淋巴球/漿細胞浸潤、interface hepatitis |
| 感染性 | Leptospira, 犬傳染性肝炎（CAV-1）, Bartonella | 任何品種 | 需排查培養/PCR |
| 藥物誘發性 | Phenobarbital, CCNU, Carprofen, Ketoconazole 等 | 接受相關藥物者 | 藥物暴露史 + 停藥後改善 |
| 特發性 | 病因不明，排除上述所有原因 | 任何品種 | 排除性診斷 |

### Doberman 肝病特殊性
Doberman Pinscher 慢性肝炎盛行率高達 6-12%。涉及銅蓄積 + 免疫介導雙重機轉。COMMD1 和 ATP7B 基因變異影響肝細胞銅排泄。雌犬比雄犬更早發病且更嚴重。

## 二、臨床表現與診斷 (Clinical Signs & Diagnosis)

| 臨床表現 | 頻率 | 描述 |
|---------|------|------|
| 食慾下降 | ~70% | 漸進性 |
| 嘔吐 | ~60% | 間歇性 |
| 嗜睡/精神沉鬱 | ~60% | 漸進性 |
| 多渴多尿 | ~40% | 肝臟尿素循環受損 |
| 黃疸 | ~30% | 提示膽汁淤滯或嚴重肝損傷 |
| 腹水 | ~25% | 門脈高壓 + 低白蛋白血症 |
| 體重減輕 | ~50% | 蛋白質代謝異常 |
| 肝性腦病 (HE) | ~15% | 高血氨 → 神經症狀 |

### 診斷流程

| 步驟 | 檢查 | 期待發現 |
|------|------|---------|
| 1 | CBC/生化 | ALT/AST 升高、ALP/GGT 升高、低白蛋白、低 BUN、高膽汁酸、高 NH3 |
| 2 | 凝血功能 | PT/aPTT 延長（肝臟合成凝血因子下降） |
| 3 | 腹腔超音波 | 肝臟大小/回音性異常、門脈血流評估、腹水 |
| 4 | 肝臟切片（金標準） | WSAVA 標準化評分：壞死、發炎（門脈區/小葉）、纖維化分級 + rhodanine 銅染色 + 銅定量 |
| 5 | 排查性檢驗 | Leptospira PCR、CAV-1 抗體、藥物暴露史 |

肝臟銅定量標準（乾重）：
- 正常：< 200 μg/g
- 邊緣：200-400 μg/g
- 異常蓄積：> 400 μg/g
- 嚴重蓄積：> 1000 μg/g（Bedlington 可達 > 10,000 μg/g）

## 三、治療策略 (Treatment)

### 銅蓄積性肝炎

| 藥物 | 劑量 | 機轉 | 備註 |
|------|------|------|------|
| [藥物:D-penicillamine] | 10-15 mg/kg PO BID（空腹） | 銅螯合 → 增加尿銅排泄 | 副作用：嘔吐（可從低劑量漸增）|
| [藥物:Zinc acetate] | 5-10 mg/kg PO BID（空腹） | 誘導腸道 metallothionein → 阻斷銅吸收 | 不可與 D-penicillamine 同時給予 |
| 低銅飲食 | — | 減少飲食銅攝入 | 避免高銅食物（肝臟、貝類、堅果） |
| [藥物:Vitamin E] | 10 IU/kg PO SID | 抗氧化保護 | 輔助治療 |

### 免疫介導性肝炎

| 藥物 | 劑量 | 備註 |
|------|------|------|
| [藥物:Prednisolone] | 1-2 mg/kg PO SID → 漸減 | 第一線免疫抑制 |
| [藥物:Azathioprine] | 1-2 mg/kg PO SID（犬）| 第二線，減少類固醇劑量 |
| [藥物:Mycophenolate] | 10 mg/kg PO BID | 替代 azathioprine |

### 肝臟支持治療

| 藥物 | 劑量 | 適應症 |
|------|------|--------|
| [藥物:SAMe] | 20 mg/kg PO SID 空腹 | 所有慢性肝炎 |
| [藥物:UDCA] | 10-15 mg/kg PO SID | 膽汁淤滯 |
| [藥物:Lactulose] | 0.5 mL/kg PO BID-TID | 肝性腦病 |
| 低蛋白飲食（適度） | — | 肝性腦病（HE） |

## 四、預後 (Prognosis)

| 因素 | 良好預後 | 不良預後 |
|------|---------|---------|
| 纖維化程度 | 輕度/中度纖維化 | 橋接纖維化/肝硬化 |
| 病因 | 銅蓄積（可螯合治療）| 特發性 |
| 白蛋白 | > 2.0 g/dL | < 2.0 g/dL |
| 臨床表現 | 無腹水/HE | 腹水 + 肝性腦病 |
| 治療反應 | ALT 下降 > 50% | ALT 持續升高 |

中位存活：及時診治的犬可存活 1-5 年。肝硬化伴腹水者中位存活約 1-3 個月。

## 五、人醫借鑒 (Translational Insights)

| 人醫概念 | 獸醫犬慢性肝炎應用 | 現況 |
|---------|------------------|------|
| Wilson disease（人銅儲積病） | 犬銅蓄積性肝炎的直接對應；螯合（penicillamine/trientine）＋鋅＋低銅飲食 | 病理機轉與治療策略高度平行 |
| 自體免疫性肝炎（AIH） | 免疫介導型犬 CH 的對應（類固醇＋azathioprine 反應） | 治療邏輯沿用 |
| Trientine（替代螯合劑） | D-penicillamine 不耐受時的替代 | 人醫常用；獸醫可近性/成本因地而異 |
| 肝臟彈性影像（FibroScan/SWE） | 非侵入評估纖維化、減少重複切片 | 人醫常規；獸醫研究驗證中 |

## 六、臨床爭議與知識空缺 (Controversies & Knowledge Gaps)

| 爭議議題 | 現況 | Evidence Level |
|---------|------|---------------|
| 經驗性治療 vs 切片先行（銅 vs 免疫） | **must-not-miss**：用錯方向會害到病人（銅蓄積給類固醇可能加重；純免疫給螯合無益）→ 切片＋銅定量才是分流關鍵 | Level II |
| 銅蓄積性肝炎能不能用類固醇 | 純銅型不建議；銅免疫雙重機轉（如部分 Doberman）需個別權衡 | Level III |
| 最佳螯合療程長度與停藥標準 | 依重複肝切片銅含量調整，最佳間隔未統一 | Level III |
| 抗纖維化治療的角色 | SAMe/UDCA 廣用但缺強 RCT；專一抗纖維藥未確立 | Level III |
| 低銅飲食單獨能否控制亞臨床銅蓄積 | 部分證據支持，但與螯合的分工未定 | Level III |

## 七、近期實證更新 (Recent Evidence Update)

**銅蓄積性肝炎不再只是 Bedlington/Labrador 的事——飲食銅是新焦點（Ullal et al 2022, JVIM）**
近年認知大轉變：**異常肝銅蓄積在許多品種（甚至混種）都看得到**，且與**商業飼料銅含量上升/生物可利用度提高**有關（AAFCO 1990s 末調整後）。臨床意涵：
- **任何犬慢性肝炎都該驗肝銅**（rhodanine 染色＋定量），不能只憑品種預判。
- **低銅飲食的角色變重**——慎選低銅處方、避開高銅食材（肝臟、貝類、堅果）。

**切片定病因是 must-not-miss（Webster et al 2019 ACVIM 共識）**
ACVIM 2019 犬慢性肝炎共識核心：**肝切片＋組織學＋銅定量決定病因**，因為治療天差地別——**銅型走螯合（D-penicillamine/trientine）＋鋅＋低銅飲食；免疫型才走類固醇±azathioprine**。給錯方向（銅型誤用類固醇）可能加重肝損傷。SAMe/UDCA 為共通輔助。

【台灣落地】台灣 Doberman、拉布拉多、可卡等好發品種不少，但「飲食銅上升」讓銅蓄積跨品種化——**台灣門診遇到犬慢性肝炎，肝切片時務必加做銅染色＋定量**，別只憑品種或 ALT 就分型治療。Trientine/低銅處方飼料的可近性逐步改善。`,
  clinical_pearl: '犬慢性肝炎的確診必須依賴肝臟切片，僅憑 ALT 升高無法區分銅蓄積、免疫介導、藥物性或特發性。切片時務必同時送 WSAVA 標準化評分和銅定量（rhodanine 染色 + 原子吸收光譜分析）。Doberman 品種應在 4-6 歲時進行肝指數篩檢。',
  common_mistakes: [
    '僅憑血液生化升高就開始治療，未做肝臟切片確認病因',
    '銅蓄積性肝炎使用免疫抑制劑（可能加速銅沉積的肝損傷）',
    '肝切片未同時做銅染色與銅定量',
    '免疫介導型肝炎過快減量 prednisolone 導致復發',
  ],
  disease_data: {
    signalment: '犬，中老年（5-10 歲）。品種傾向：Doberman Pinscher、Bedlington Terrier、Labrador Retriever、Cocker Spaniel、West Highland White Terrier、Standard Poodle。Doberman 雌犬更嚴重。',
    etiology: '銅蓄積性（基因突變致銅代謝障礙）、免疫介導性（自體免疫攻擊肝細胞）、感染性（Leptospira、CAV-1）、藥物誘發性（Phenobarbital、CCNU）、特發性（排除性診斷）。',
    pathogenesis: '持續性肝損傷 → 肝細胞壞死 → 淋巴球/漿細胞浸潤 → 肝星狀細胞活化 → 膠原沉積 → 進行性纖維化 → 橋接纖維化 → 肝硬化 → 門脈高壓/肝衰竭。',
    clinical_signs: [
      { sign: '食慾下降/嘔吐', category: 'primary', description: '漸進性，為最常見初始症狀' },
      { sign: '嗜睡/精神沉鬱', category: 'primary', description: '活動力下降' },
      { sign: '黃疸', category: 'secondary', description: '嚴重肝損傷或膽汁淤滯' },
      { sign: '腹水', category: 'secondary', description: '門脈高壓 + 低白蛋白血症' },
      { sign: '肝性腦病', category: 'secondary', description: '高血氨→神經症狀（行為異常、轉圈、抽搐）' },
    ],
    staging: { system: 'WSAVA 肝臟組織學評分系統', stages: ['Grade 1：輕度門脈區發炎', 'Grade 2：中度門脈區發炎 + 輕度 interface hepatitis', 'Grade 3：嚴重發炎 + 橋接壞死 + 中度纖維化', 'Grade 4：肝硬化（不可逆）'] },
    differential_diagnosis: [
      { condition: '反應性肝病 (reactive hepatopathy)', key_differentiator: '繼發於其他系統性疾病（腸病、胰臟炎），通常 ALT 升高較輕微' },
      { condition: '肝臟腫瘤', key_differentiator: '超音波局灶性病變；切片確診' },
      { condition: '類固醇肝病 (steroid hepatopathy)', key_differentiator: '糖皮質素暴露史；ALP 明顯升高；空泡性肝病變' },
      { condition: '貓膽管炎', key_differentiator: '為貓特有疾病，犬極罕見' },
    ],
    diagnostic_workup: '1. CBC/生化（ALT/ALP/Albumin/膽汁酸/NH3）→ 2. 凝血功能 → 3. 腹腔超音波 → 4. 肝臟切片（超音波引導 Tru-cut 或腹腔鏡）+ 銅染色 + 銅定量 → 5. 排查：Leptospira PCR、藥物暴露史',
    treatment_protocol: '銅蓄積：D-penicillamine 10-15 mg/kg PO BID + Zinc acetate（與 D-pen 分開）+ 低銅飲食 + Vitamin E。免疫介導：Prednisolone 1-2 mg/kg/day → 漸減 + Azathioprine 1-2 mg/kg/day。所有類型：SAMe 20 mg/kg + UDCA 10-15 mg/kg。HE：Lactulose + 低蛋白飲食。',
    prognosis: '早期纖維化（Grade 1-2）且治療反應佳者可存活 1-5 年。肝硬化（Grade 4）伴腹水/HE 者預後極差，中位存活 1-3 個月。白蛋白 < 2.0 g/dL 為獨立不良預後因子。',
    monitoring: '治療後 2-4 週追蹤 ALT/ALP/Albumin。穩定後每 2-3 個月追蹤。免疫抑制劑治療時需監測 CBC（azathioprine 骨髓抑制）。銅蓄積型 6-12 個月重複肝切片評估銅含量。',
    owner_communication: '犬慢性肝炎能不能治好，看能不能把病因抓對，這是為什麼肝切片這一步省不掉。每隻狗對治療的反應差異很大。越早抓到、越早動手，預後越好。不過一旦走到肝硬化，那一段路就回不去了。',
  },
  diagnostic_data: null,
  procedure_data: null,
  visual_placeholders: [
    { position: '病因分類表後', type: 'flowchart', description: '犬慢性肝炎診斷流程圖：生化異常→超音波→肝切片→銅染色→分類治療' },
  ],
  interactive_placeholders: [],
  drug_api_links: ['D-penicillamine', 'Zinc acetate', 'Prednisolone', 'Azathioprine', 'SAMe', 'UDCA', 'Lactulose'],
  references: [
    { type: 'journal', citation: 'Ullal T, Lakin S, Gallagher B, Sbardellati N, et al. "Demographic and histopathologic features of dogs with abnormally high concentrations of hepatic copper." J Vet Intern Med. 2022;36(6). doi:10.1111/jvim.16580', relevance: '近期：異常肝銅蓄積跨品種化，飲食銅為新焦點' },
    { type: 'guideline', citation: 'Webster CRL, Center SA, Cullen JM, Penninck DG, et al. "ACVIM consensus statement on the diagnosis and treatment of chronic hepatitis in dogs." J Vet Intern Med. 2019;33(3):1173-1200. doi:10.1111/jvim.15467', relevance: 'ACVIM 犬慢性肝炎診斷與治療共識聲明' },
    { type: 'journal', citation: 'Hoffmann G, van den Ingh TSGAM, Bode P, Rothuizen J. "Copper-Associated Chronic Hepatitis in Labrador Retrievers." J Vet Intern Med. 2006;20(4):856-861. doi:10.1111/j.1939-1676.2006.tb01798.x', relevance: 'Labrador 銅蓄積性肝炎品種研究' },
    { type: 'journal', citation: 'Poldervaart JH, Favier RP, Penning LC, van den Ingh TSGAM, Rothuizen J. "Primary Hepatitis in Dogs: A Retrospective Review." J Vet Intern Med. 2009;23(1):72-80. doi:10.1111/j.1939-1676.2008.0215.x', relevance: '犬原發性肝炎回顧性研究' },
    { type: 'textbook', citation: 'Ettinger SJ, Feldman EC, Cote E. Textbook of Veterinary Internal Medicine, 8th ed. Elsevier, 2017. Chapter 62: Chronic Hepatitis in Dogs.', relevance: '犬慢性肝炎病理與臨床管理教材' },
  ],
  is_current: true,
  created_at: now,
};

/** 巨食道症 (Megaesophagus)，疾病型 */
const contentMegaesophagus: NodeContent = {
  id: 'CONTENT-IM-L3-027',
  node_id: 'IM-L3-027',
  version: 2,
  summary: '巨食道症是食道體部（犬全段為橫紋肌）蠕動障礙導致食道擴張、食物滯留與反流（regurgitation），吸入性肺炎的風險持續存在且為最主要致死原因。分先天特發性（幼犬，部分可自發改善）、後天特發性（成犬最常見）與後天繼發性；後天性一定要篩重症肌無力（MG，最常見可辨識病因），甲低關聯薄弱但仍可篩。治療核心是姿勢性餵食（Bailey chair）＋吸入性肺炎防治；sildenafil（1 mg/kg BID）可輔助降低下食道括約肌張力。',
  learning_objectives: [
    '區分反流（regurgitation）與嘔吐（vomiting）的臨床特徵與鑑別意義',
    '列出後天性巨食道症的可逆性病因並制定系統性排查計畫',
    '說明重症肌無力（MG）與巨食道症的關聯及 AChR 抗體檢測',
    '制定巨食道症的營養管理策略（Bailey chair、飲食稠度調整）',
    '評估吸入性肺炎在巨食道症預後中的角色',
  ],
  key_points: [
    '反流 vs 嘔吐鑑別最可靠依據為「前驅噁心＋腹部用力收縮」，而非 pH 或時間（反流被動、無腹肌收縮、食物未消化）',
    '後天性需篩可逆病因：重症肌無力（AChR 抗體，最常見可辨識病因、約佔後天 26%）、Addison、多發性肌炎、鉛中毒（甲低關聯薄弱、仍可篩）',
    '成犬以後天特發性最常見；「先天 25%／後天特發 50%／後天繼發 25%」配比無一手依據，勿引用',
    '胸腔 X 光見食道擴張；動態評估首選 videofluoroscopic swallow study（VFSS）；疑吸入時改用碘造影劑',
    'Bailey chair 直立進食 10-15 分鐘為管理核心；重症營養不良可用胃造口管',
    'Sildenafil 1 mg/kg PO q12h（BID、liquid、空腹餐前）降 LES 張力，RCT 對先天與後天/全身性皆有效（Quintavalla 2017、Mehain 2022）',
    '吸入性肺炎為最主要死因（診斷時盛行率約 38%、中位存活約 90 天）；抗生素依 ISCAID 分層、巨食道採腸道外給藥',
    '先天性好發 GSD（發生率最高）、Great Dane、Mini Schnauzer、Wire Fox Terrier、Irish Setter、Shar Pei、Newfoundland、Labrador；約 20-46% 於 1 歲前自發改善',
    '台灣地區巨食道症以犬為主，飼主衛教 Bailey Chair 方法時需考量居住空間較小的在地狀況',
  ],
  body: `# 巨食道症 (Megaesophagus)

## 一、病理機制 (Pathophysiology)

巨食道症的核心為食道體部蠕動功能障礙，導致食道擴張與食物滯留。**犬食道體部全段為橫紋（骨骼）肌**（貓則近端約 2/3 橫紋肌、遠端約 1/3 平滑肌），蠕動受迷走神經與食道神經叢控制；目前認為特發性巨食道與**食道傳入（感覺）神經功能異常**有關，非單純運動神經問題。

### 分類與病因
依病因分三型；**成犬以後天特發性最常見**（文獻多描述為成年病例之多數），但目前**無可靠一手族群研究**支持「先天 25%／後天特發 50%／後天繼發 25%」這類精確配比，故不採用具體百分比。

| 類型 | 病因 | 特徵 |
|------|------|------|
| 先天特發性 | 食道神經肌肉（傳入神經）發育/成熟異常 | 幼犬斷奶引入固體食物後發病；約 20-46% 可於 1 歲齡前隨成熟自發改善 |
| 後天特發性（原發） | 不明（推測食道傳入神經退化） | 成犬最常見型；排除所有已知病因後之診斷 |
| 後天繼發性 | 可辨識/可逆基礎病因 | 治療基礎病因後**部分**可能改善 |

### 後天繼發性病因（需系統性排查）
重症肌無力（MG）為後天性巨食道**最常見的可辨識病因**，約佔後天/特發性巨食道的 **26%（至少 25%）**（Shelton 1990，152 隻中 40 隻 AChR 抗體陽性）。

| 病因 | 機轉 | 篩檢方法 | 備註 |
|------|------|---------|------|
| 重症肌無力 (MG) | AChR 抗體 → NMJ 傳導障礙 → 食道橫紋肌無力 | AChR 抗體滴度 | 最重要可辨識病因（~26%）；治療後巨食道**未必**消退（見預後）|
| 甲狀腺機能低下 | 關聯**薄弱/未證實** | T4/TSH（仍建議篩）| ⚠️ Gaynor 1997 case-control 顯示甲低**與巨食道無顯著關聯**；補充 levothyroxine 多數不使巨食道消退（Jaggy 1994：4 隻補充後影像巨食道皆持續），全消退僅零星個案、多屬偶合 |
| Addison's disease | 電解質異常 → 肌肉功能障礙 | ACTH 刺激試驗 | |
| 多發性肌炎 | 肌肉發炎 → 食道肌肉受累 | CK、肌肉切片、2M 抗體 | |
| 鉛中毒 | 神經毒性 | 血鉛濃度 | |
| SLE（全身性紅斑狼瘡）| 免疫複合物 → 多器官 | ANA | |
| 食道外壓迫（縱膈腫瘤/淋巴結）| 機械壓迫 | 胸腔 X 光/CT | |

### 吸入性肺炎機轉
食道擴張 → 食物/液體滯留 → 反流 → 咽喉保護反射不足 → 內容物誤吸入氣管 → 化學性 + 細菌性肺炎 → 呼吸窘迫。**吸入性肺炎是本病最主要的致死/安樂死原因。**

## 二、臨床表現與診斷 (Clinical Signs & Diagnosis)

### 反流 vs 嘔吐鑑別
**最可靠依據是「有無前驅噁心徵象與腹部用力收縮」，而非 pH 或時間：**

| 特徵 | 反流 (Regurgitation) | 嘔吐 (Vomiting) |
|------|---------------------|-----------------|
| 腹部收縮 | 無（被動） | 有（主動乾嘔、腹肌用力）|
| 前驅噁心（流涎/舔唇/不安）| 無 | 有 |
| 內容物 | 未消化食物/黏液、可呈管狀 | 消化中食物 ± 膽汁 |
| pH（輔助、可靠度有限）| 多偏中性，但反流性食道炎可呈酸性 | 多酸性(<5)，但含十二指腸液可中性/偏鹼 |
| 與進食時間關係 | 不可靠（數分至數小時皆可）| 不可靠 |

> ⚠️ pH 與進食時間**皆為不可靠的單一判準**（Gallagher 2012；Washabau & Day 2013）；鑑別應以「前驅噁心＋腹部用力」為主。

### 臨床表現

| 表現 | 頻率 | 描述 |
|------|------|------|
| 反流 | > 90% | 進食後被動排出未消化食物 |
| 體重減輕/營養不良 | > 70% | 營養攝入不足 |
| 咳嗽/呼吸困難 | ~40% | 吸入性肺炎徵兆 |
| 食慾正常或增加 | ~60% | 營養需求未滿足 |
| 流涎 | ~30% | 食道擴張刺激 |
| 發燒 | ~25% | 吸入性肺炎繼發 |

### 診斷
- **影像學**：胸腔 X 光見食道擴張（充氣/充液）、腹背位氣管條紋與食道重疊。**動態評估首選 videofluoroscopic swallow study (VFSS)**——比靜態鋇劑造影更能評估蠕動與吸入風險；靜態鋇劑造影仍可確認擴張與滯留，但**疑吸入時應改用碘造影劑**（避免鋇劑誤吸）。
- **病因排查**：AChR 抗體（排 MG）、T4/TSH、ACTH 刺激試驗、CK/2M 抗體、血鉛、ANA、CBC/生化，依臨床線索取捨。

## 三、治療策略 (Treatment)

> 核心：**姿勢性餵食管理 + 積極處理/預防吸入性肺炎 + 治療可逆病因**。目前無藥物能恢復犬橫紋肌食道體部的蠕動。

### 營養與姿勢管理（核心）

| 措施 | 方法 | 目的 |
|------|------|------|
| Bailey chair | 進食時犬以直立姿勢坐於特製椅中，維持 10-15 分鐘 | 利用重力幫助食物通過食道進入胃 |
| 飲食稠度調整 | 嘗試不同稠度（泥狀 vs 液態 vs 小丸狀），找個體最佳反應 | 每隻犬反應不同，需個體化 |
| 少量多餐 | 每日 3-4 餐 | 減少每次食道負荷 |
| 高熱量飲食 | 熱量密集飲食 | 以最少體積提供足夠營養 |
| 胃造口管（重症）| 反覆吸入/嚴重營養不良者，經 PEG/胃造口管繞過食道餵食 | 降低吸入、維持營養 |

### 藥物治療

| 藥物 | 劑量 | 適應症/備註 |
|------|------|--------|
| [藥物:Sildenafil] | **1 mg/kg PO q12h（BID）**，建議 liquid/口服懸液、空腹餐前約 1 小時 | PDE5 抑制 → 降 LES 張力、助食道排空。RCT：Quintavalla 2017（先天性特發性）、**Mehain 2022（後天/全身性亦有效）**；**非僅限先天性**。文獻無 2 mg/kg 或 TID 依據 |
| [藥物:Metoclopramide] | — | ⚠️ **對犬食道體部蠕動無效**（橫紋肌非平滑肌）；「提高 LES 張力」在犬未獲直接證實（Kempf 2014 測壓：口服 metoclopramide 未顯著升 LES 壓）。欲提 LES 張力用 [藥物:Cisapride] 較有依據 |
| [藥物:Sucralfate] | 0.5-1 g PO q8h（懸液）| 併發食道炎之黏膜保護 |
| [藥物:Pyridostigmine] | 0.5-3 mg/kg PO BID-TID | 確診 MG 時（AChE 抑制劑）|
| 基礎病因治療 |—| 甲低：[藥物:Levothyroxine]（惟巨食道多不因此消退）；Addison：DOCP + Prednisolone |

### 吸入性肺炎處理（依 ISCAID 2017 分層）
- **因巨食道存在食道動力障礙，ISCAID 明確建議「腸道外（parenteral）給藥」；口服不宜為首選（吸入/吸收風險）。**
- **輕度、無敗血症**：可觀察或單用 β-lactam（ampicillin、ampicillin-sulbactam 或第一代頭孢 cefazolin，腸道外）。
- **有敗血症徵象或疑革蘭氏陰性菌**：加 fluoroquinolone（enrofloxacin 或 marbofloxacin）併用具革蘭氏陽性/厭氧覆蓋之藥（ampicillin 或 clindamycin）。
- ⚠️ **amoxicillin-clavulanate 並非 ISCAID 對下呼吸道肺炎之首選**（僅為犬傳染性呼吸道疾病複合症／上呼吸道之 doxycycline 替代）。
- 理想上以氣管沖洗採樣培養/藥敏導向降階；併氧氣支持（SpO2 < 94%）、霧化 + coupage、急性期暫停口服。

## 四、併發症與監控 (Complications & Monitoring)

### 常見併發症
- **吸入性肺炎**：最主要致死/安樂死原因；診斷時盛行率約 38%（Thomson 2008）。
- **反流性食道炎**：食物滯留與胃內容反流刺激；可加重不適、續發狹窄。
- **營養不良/消瘦**：攝入不足。
- **食道念珠菌症（esophageal candidiasis）**：滯留＋黏膜損傷/長期用藥下之少見續發感染（近期有病例報告）。

### 監控計畫
| 時間點 | 監測項目 | 目標 |
|--------|---------|------|
| 每 2-4 週 | 體重與體態評分（BCS） | 維持理想體態、無持續消瘦 |
| 每 1-2 個月 或 症狀變化時 | 胸腔 X 光（吸入性肺炎） | 早期發現吸入性肺炎 |
| MG 患者 | AChR 抗體滴度追蹤 | 監測免疫緩解（惟巨食道未必同步消退）|
| 每日（飼主） | 呼吸狀況、反流頻率、精神食慾 | 及早察覺吸入性肺炎徵兆 |

## 五、預後與預後因子 (Prognosis)

- **整體預後謹慎**：中位存活約 **90 天（1-3 個月）**、整體致死率可達約 **74%**（McBrearty 2011, n=71；Merck）。
- **最重要的獨立預後因子（McBrearty 2011）**：**影像學吸入性肺炎**（有 AP 者死前死亡風險約增 7.7 倍）與**發病年齡**——為僅有的兩個顯著關聯因子。
- **先天性（幼犬）**：約 20-46% 於 1 歲齡前自發改善（Bell 2022；雪納瑞、剛毛獵狐㹴預後較佳）。
- **後天繼發性**：取決於基礎病因；MG 免疫緩解後**巨食道未必消退**（影像消退僅見於部分經治療複查者，Dos Santos 2025 為 13/28≈46%，但食道功能未必恢復），有食道無力者存活顯著較短。
- **後天特發性**：謹慎至不良，需終生管理。
- **飼主長期照護配合度是最關鍵的可改變預後因子。**

## 六、人醫借鑒 (Translational Insights)

| 人醫工具/概念 | 獸醫應用潛力 | 現況 |
|-------------|-------------|------|
| 高解析度食道測壓 (HRM) | 客觀量化 LES 壓力與蠕動、指導藥物選擇 | 犬研究用（Kempf 2014）；臨床尚未普及 |
| Videofluoroscopic swallow study (VFSS) | 動態評估吞嚥/蠕動/誤吸風險 | 獸醫轉診中心漸增，優於靜態鋇劑造影 |
| PDE5 抑制劑（sildenafil）降 LES | 藥物性協助食道排空 | 已有犬 RCT（Quintavalla 2017、Mehain 2022）|
| 食道內留置管抽吸滯留內容 | 降低反覆吸入性肺炎 | 已有犬個案報告（居家間歇抽吸／食道造口管）|

## 七、臨床爭議與知識空缺 (Controversies & Knowledge Gaps)

| 爭議議題 | 現況 | Evidence Level |
|---------|------|---------------|
| Sildenafil 的角色與適應範圍 | 先天性（Quintavalla 2017 RCT）與後天/全身性（Mehain 2022 交叉 RCT）皆顯示減少逆流、增重；惟樣本小、長期存活效益未證 | Level II |
| 甲狀腺機能低下與巨食道的因果關聯 | Case-control 未見關聯（Gaynor 1997）、補充後多不消退（Jaggy 1994）；仍建議篩檢但因果薄弱 | Level III |
| MG 治療後巨食道是否消退 | 影像消退見於部分治療反應者（Dos Santos 2025 ~46%），但功能恢復有限、常持續終生 | Level III |
| 促動力藥（metoclopramide/cisapride）於犬巨食道 | 對橫紋肌食道體部無效；cisapride 對 LES/胃排空或有助益但無法恢復食道體部蠕動 | Level III |
| Bethanechol 等膽鹼性促動力藥 | 缺乏犬對照證據，僅屬經驗性/個案，不建議常規使用 | Level IV |

## 八、近期實證更新 (Recent Updates)

- **Sildenafil 擴及後天/全身性巨食道（Mehain 2022, AJVR）**：compounded liquid sildenafil 1 mg/kg PO q12h 交叉 RCT（10 隻全身性巨食道犬）顯著減少每週逆流並增重——證據不再限於先天性特發性；標準劑量為 **1 mg/kg BID**（非 1-2 mg/kg TID），liquid、空腹餐前給。
- **先天性巨食道的遺傳學（Bell 2022, PLOS Genetics）**：德國牧羊犬先天性特發性巨食道為**性別差異性狀**，與 CFA12 上 **MCHR2** 基因內含子 VNTR 相關；並整合文獻指出約 20-46% 先天病例於 1 歲齡前自發緩解。
- **MG 相關巨食道的預後再認識（Dos Santos 2025, JVIM）**：pyridostigmine 治療後複查約 46%（13/28）出現巨食道影像消失，但食道/球部無力於初診與複查間無顯著差異，且食道無力為存活與緩解的負向預測因子（有食道無力時中位存活僅約 65 天）——「MG 治療→巨食道消退」不宜過度樂觀。
- **抗生素選擇對齊 ISCAID（Lappin 2017）**：吸入性肺炎依嚴重度分層、巨食道者採腸道外給藥；amoxicillin-clavulanate 非下呼吸道肺炎首選。`,
  clinical_pearl: '區分反流與嘔吐是診斷巨食道症的第一步，靠的是「有沒有前驅噁心與腹部用力」而不是 pH（pH 其實不可靠）——反流是被動、無腹肌收縮、排出未消化食物。後天性巨食道一定要篩重症肌無力（AChR 抗體），但要提醒飼主：即使 MG 免疫緩解，巨食道也常不會跟著消退，吸入性肺炎的風險是長期的。Bailey chair「維持直立 10-15 分鐘」比食物稠度更關鍵。',
  common_mistakes: [
    '將反流誤判為嘔吐而使用止吐藥（止吐藥對反流無效）；用 pH／進食時間當唯一鑑別（皆不可靠）',
    '後天性巨食道症未篩檢 MG（AChR 抗體）等可逆病因',
    '把甲低當「治療就會好」的可逆病因（因果薄弱、補充後巨食道多不消退）',
    'Sildenafil 劑量錯用 1-2 mg/kg TID（正確為 1 mg/kg BID、liquid、空腹餐前）',
    '對犬用 metoclopramide 想恢復食道體部蠕動（橫紋肌無效）',
    '吸入性肺炎以口服 amoxicillin-clavulanate 為首選（巨食道應腸道外給藥、依 ISCAID 分層）',
    '忽視吸入性肺炎的早期徵兆（輕微咳嗽、低燒、呼吸加速）',
  ],
  disease_data: {
    signalment: '先天性：幼犬斷奶引入固體食物後發病，好發 German Shepherd（發生率最高，與 CFA12 MCHR2 VNTR 相關、性別差異性狀）、Great Dane、Miniature Schnauzer（體染色體顯性）、Wire-haired Fox Terrier（體染色體隱性）、Irish Setter、Chinese Shar-Pei、Newfoundland、Labrador Retriever。後天性：成年至老年犬，任何品種。犬遠多於貓。',
    etiology: '先天特發性：食道傳入神經/神經肌肉成熟異常（GSD 與 CFA12 MCHR2 VNTR 相關，Bell 2022）。後天特發性：推測食道傳入神經退化，成犬最常見。後天繼發性：重症肌無力（最常見可辨識病因，約佔後天 26%，Shelton 1990）、Addison、多發性肌炎、鉛中毒、SLE、縱膈壓迫；甲狀腺機能低下與巨食道之因果關聯薄弱（Gaynor 1997 case-control 未見關聯）。',
    pathogenesis: '食道體部蠕動障礙（犬全段橫紋肌，可能涉食道傳入神經功能異常）→ 食道擴張 → 食物/液體滯留 → 反流 → 營養不良 + 吸入性肺炎風險。MG 機轉：AChR 自體抗體 → 神經肌肉接合處傳導障礙 → 食道橫紋肌收縮無力；惟免疫緩解後巨食道未必消退。',
    clinical_signs: [
      { sign: '反流', category: 'primary', description: '進食後被動排出未消化食物，無腹部收縮' },
      { sign: '體重減輕', category: 'primary', description: '營養攝入不足導致消瘦' },
      { sign: '咳嗽/呼吸困難', category: 'secondary', description: '吸入性肺炎徵兆' },
      { sign: '流涎', category: 'secondary', description: '食道擴張刺激唾液分泌' },
      { sign: '發燒', category: 'secondary', description: '吸入性肺炎繼發感染' },
    ],
    staging: null,
    differential_diagnosis: [
      { condition: '食道異物', key_differentiator: '急性發作；內視鏡/X 光可見異物' },
      { condition: '食道狹窄', key_differentiator: '特定位置狹窄（鋇劑造影）；可能有麻醉/腐蝕劑暴露史' },
      { condition: '血管環異常 (PRAA)', key_differentiator: '幼犬斷奶後發病；擴張僅在心基部前方（focal dilation）' },
      { condition: '食道腫瘤', key_differentiator: '內視鏡可見腫塊；好發老年犬' },
      { condition: '胃食道反流 (GERD)', key_differentiator: '食道大小正常；反流物為酸性' },
    ],
    diagnostic_workup: '1. 病史（反流 vs 嘔吐，靠前驅噁心/腹部用力鑑別，非 pH）→ 2. 胸腔 X 光（食道擴張、吸入性肺炎）→ 3. 動態吞嚥評估：videofluoroscopic swallow study（優於靜態鋇劑；疑吸入改碘造影劑）→ 4. AChR 抗體（排查 MG）→ 5. T4/TSH、ACTH 刺激試驗、CK/2M 抗體、血鉛、ANA → 6. CBC/生化排查系統性疾病',
    treatment_protocol: '姿勢性餵食：Bailey chair 直立 10-15 min + 稠度個體化 + 少量多餐 + 高熱量；重症營養不良可用胃造口管。藥物：Sildenafil 1 mg/kg PO q12h（liquid、空腹餐前；先天與後天/全身性皆有 RCT 證據）。MG：Pyridostigmine 0.5-3 mg/kg BID-TID。Metoclopramide 對橫紋肌食道體部無效（欲提 LES 張力用 cisapride）。吸入性肺炎依 ISCAID 分層、腸道外給藥（β-lactam；敗血症才加 FQ），非口服 amox-clav 首選。',
    prognosis: '整體謹慎：中位存活約 90 天、致死率可達約 74%（McBrearty 2011, n=71）。影像學吸入性肺炎與發病年齡為僅有的兩個顯著預後因子（有 AP 死亡風險增約 7.7 倍）。先天性約 20-46% 於 1 歲前自發改善。MG 免疫緩解後巨食道常持續（影像消退僅見於部分治療反應者，Dos Santos 2025 ~46%）。飼主長期配合度是最關鍵的可改變預後因子。',
    monitoring: '每 2-4 週評估體重與 BCS。每 1-2 月或症狀變化時胸腔 X 光監測吸入性肺炎（含少見的食道念珠菌症）。MG 患者追蹤 AChR 抗體滴度（惟巨食道未必同步消退）。教導飼主識別吸入性肺炎早期徵兆（咳嗽增加、呼吸費力、發燒、精神沉鬱）。',
    owner_communication: '巨食道症飼主的配合很關鍵，是一場長期戰。Bailey chair 餵食目前是最有效的方法。要盯的是吸入性肺炎這個最大的雷，呼吸狀況要每天看。如果是其他病引起的繼發型，把原本的病處理好，部分狗會明顯好轉。',
  },
  diagnostic_data: null,
  procedure_data: null,
  visual_placeholders: [
    { position: '反流 vs 嘔吐鑑別表後', type: 'comparison_table', description: '反流 vs 嘔吐臨床表現比較圖' },
    { position: 'Bailey chair 段落後', type: 'flowchart', description: 'Bailey chair 姿勢進食示意圖與管理流程' },
  ],
  interactive_placeholders: [
    { position: '反流 vs 嘔吐段落後', type: 'interactive_quiz', description: '反流 vs 嘔吐情境判別 + 後天性巨食道可逆病因排查決策練習' },
  ],
  drug_api_links: ['Sildenafil', 'Metoclopramide', 'Cisapride', 'Sucralfate', 'Pyridostigmine', 'Levothyroxine'],
  references: [
    { type: 'textbook', citation: 'Ettinger SJ, Feldman EC, Cote E. Textbook of Veterinary Internal Medicine, 8th ed. St. Louis: Elsevier; 2017. Chapter 55: Diseases of the Esophagus.', relevance: '食道疾病病理與臨床管理教材' },
    { type: 'journal', citation: 'Gaynor AR, Shofer FS, Washabau RJ. Risk factors for acquired megaesophagus in dogs. J Am Vet Med Assoc. 1997;211(11):1406-1412. doi:10.2460/javma.1997.211.11.1406.', relevance: '後天性巨食道症危險因子 case-control（甲低與巨食道無關聯之來源）' },
    { type: 'journal', citation: 'Shelton GD, Willard MD, Cardinet GH 3rd, Lindstrom J. Acquired myasthenia gravis: selective involvement of esophageal, pharyngeal, and facial muscles. J Vet Intern Med. 1990;4(6):281-284. doi:10.1111/j.1939-1676.1990.tb03124.x.', relevance: 'MG 約佔特發性巨食道 26%（40/152）之原始出處' },
    { type: 'journal', citation: 'Shelton GD. Myasthenia gravis and disorders of neuromuscular transmission. Vet Clin North Am Small Anim Pract. 2002;32(1):189-206. doi:10.1016/s0195-5616(03)00085-8.', relevance: '重症肌無力與巨食道症的關聯回顧' },
    { type: 'journal', citation: 'Bell SM, Evans JM, Evans KM, et al. Congenital idiopathic megaesophagus in the German shepherd dog is a sex-differentiated trait and is associated with an intronic VNTR in Melanin-Concentrating Hormone Receptor 2. PLoS Genet. 2022;18(3):e1010044. doi:10.1371/journal.pgen.1010044.', relevance: '先天性巨食道遺傳學（GSD MCHR2 VNTR）與 20-46% 自發緩解' },
    { type: 'journal', citation: 'McBrearty AR, Ramsey IK, Courcier EA, et al. Clinical factors associated with death before discharge and overall survival time in dogs with generalized megaesophagus. J Am Vet Med Assoc. 2011;238(12):1622-1628. doi:10.2460/javma.238.12.1622.', relevance: '預後因子（吸入性肺炎與發病年齡）與中位存活約 90 天' },
    { type: 'journal', citation: 'Quintavalla C, Menozzi A, Pozzoli C, et al. Sildenafil improves clinical signs and radiographic features in dogs with congenital idiopathic megaoesophagus: a randomised controlled trial. Vet Rec. 2017;180(16):404. doi:10.1136/vr.103832.', relevance: 'Sildenafil 對先天性特發性巨食道之 RCT（1 mg/kg BID）' },
    { type: 'journal', citation: 'Mehain SO, Haines JM, Guess SC. A randomized crossover study of compounded liquid sildenafil for treatment of generalized megaesophagus in dogs. Am J Vet Res. 2022;83(4):317-323. doi:10.2460/ajvr.21.02.0030.', relevance: 'Sildenafil 對後天/全身性巨食道亦有效之交叉 RCT（近期）' },
    { type: 'journal', citation: 'Kempf J, Lewis F, Reusch CE, Kook PH. High-resolution manometric evaluation of the effects of cisapride and metoclopramide hydrochloride administered orally on lower esophageal sphincter pressure in awake dogs. Am J Vet Res. 2014;75(4):361-366. doi:10.2460/ajvr.75.4.361.', relevance: '口服 metoclopramide 未顯著提升犬 LES 壓、cisapride 有效' },
    { type: 'journal', citation: 'Jaggy A, Oliver JE, Ferguson DC, Mahaffey EA. Neurological manifestations of hypothyroidism: a retrospective study of 29 dogs. J Vet Intern Med. 1994;8(5):328-336. doi:10.1111/j.1939-1676.1994.tb03245.x.', relevance: '甲低犬補充後巨食道多持續（4 隻皆未消退）' },
    { type: 'guideline', citation: 'Lappin MR, Blondeau J, Boothe D, et al. Antimicrobial use guidelines for treatment of respiratory tract disease in dogs and cats: Antimicrobial Guidelines Working Group of the ISCAID. J Vet Intern Med. 2017;31(2):279-294. doi:10.1111/jvim.14627.', relevance: 'ISCAID 呼吸道感染指引（吸入性肺炎依嚴重度分層、巨食道採腸道外給藥）' },
    { type: 'journal', citation: 'Haines JM. Survey of owners on population characteristics, diagnosis, and environmental, health, and disease associations in dogs with megaesophagus. Res Vet Sci. 2019;123:1-6. doi:10.1016/j.rvsc.2018.11.026.', relevance: '犬巨食道症族群特徵與飼主調查' },
    { type: 'journal', citation: 'Tu Y, Chung C, Lin L. Using sildenafil to treat a dog with idiopathic megaesophagus. Taiwan Vet J. 2020;46(1):1-6. doi:10.1142/s1682648520720014.', relevance: '台灣本土 sildenafil 治療特發性巨食道之個案報告' },
  ],
  is_current: true,
  created_at: now,
};

/** FPV 貓泛白血球減少症 — 疾病型（2026-05-18 新增） */
const contentFPV: NodeContent = {
  id: 'CONTENT-IM-L3-028',
  node_id: 'IM-L3-028',
  version: 1,
  summary: '貓泛白血球減少症（FPV，俗稱貓瘟）由 feline parvovirus 引起，幾乎所有未疫苗幼貓暴露後都會發病。台灣多貓家庭、收容所、貓咖啡廳環境風險特別高。病程急，沒治療死亡率 50-90%，但早期積極支持治療可以拉回來。',
  learning_objectives: [
    '辨識 FPV 的臨床三聯徵（嘔吐+腹瀉+全血球減少）',
    '正確使用 SNAP CPV/FPV 與 PCR 確診',
    '制定急性 FPV 的支持治療方案（IV 補液、止吐、抗生素、營養）',
    '掌握收容所/多貓家庭的隔離與環境消毒原則',
    '說明 FPV 疫苗接種時程與母源抗體干擾',
  ],
  key_points: [
    '好發 8-16 週齡未疫苗幼貓',
    '潛伏期 2-7 天，症狀來得又急又猛',
    'CBC 三系減少（WBC < 2000 是典型）',
    'SNAP CPV 對 FPV 有交叉反應、可篩檢',
    'Parvo 在環境可存活 1 年以上，漂白水稀釋 1:32 才能滅活',
    '台灣收容所每年都有 FPV 群聚爆發，幼貓進場前必篩',
  ],
  body: `# 貓泛白血球減少症 (FPV / 貓瘟)

## 一、病理機制

FPV 是 single-stranded DNA parvovirus（與犬 CPV-2 同屬），高度感染力，環境穩定度極強。病毒專挑分裂快的細胞下手：

骨髓造血幹細胞、腸隱窩細胞、淋巴組織、胎兒小腦。所以病程上會看到「全血球減少 + 嚴重腸炎 + 免疫崩潰」三個系統同時被打。懷孕母貓感染還可能讓胎兒得小腦發育不全（cerebellar hypoplasia）。

機轉鏈：糞口傳播（也可垂直傳染）→ 病毒在口咽淋巴組織複製 → 病毒血症 → 攻擊骨髓 + 腸隱窩 → 全血球減少 + 出血性腸炎 → 細菌移位 + 敗血症 → 休克或 DIC。

## 二、臨床表現

| 系統 | 表現 | 發生時機 |
|------|------|---------|
| 全身 | 高燒（後期反而低體溫）、嗜睡、厭食 | 發病 24-48h |
| 消化 | 噴射型嘔吐、血樣腹瀉、嚴重脫水 | 發病 48-72h |
| 血液 | WBC < 2000，重者 < 500 | 發病 3-5 天 |
| 神經 | 共濟失調（垂直傳染胎兒） | 出生即有 |

幼貓常常半天前還活蹦亂跳，下午就趴著不動。看到典型病史一定要當急診處理。

## 三、診斷

主要靠：

SNAP CPV 快篩（FPV 與 CPV 有交叉反應，敏感度約 80%，治療後 5-12 天可能假陰性）。陰性也不能完全排除。
PCR 確診（敏感度高，但要送外送實驗室）。
CBC 是即時又便宜的關鍵：WBC < 2000 配上典型病史，臨床診斷就成立了。

鑑別診斷要排除：FeLV/FIV 引起的骨髓抑制、敗血症、急性化療毒性。

## 四、治療

沒有特效抗病毒藥（GS-441524 對 FPV 效果不像對 FCoV 明確）。核心是支持治療把貓撐過骨髓抑制期：

積極 IV 補液：等張晶體液 shock dose 起手（休克時 20-30 mL/kg IV bolus），之後依脫水程度 + 維持量。
止吐：[藥物:Maropitant] 1 mg/kg SC SID（首選），[藥物:Ondansetron] 0.5 mg/kg IV TID 加強。
廣效抗生素：腸黏膜破壞 + 嗜中性球低 = 細菌移位風險極高。[藥物:Ampicillin-sulbactam] 30 mg/kg IV TID 是經典首選，重症可改 [藥物:Cefoxitin] + [藥物:Metronidazole]。
營養支持：早期經腸道餵食（食道造口管或鼻飼管），不要等貓自己吃，能撐多久撐多久。
血漿輸注：合併 DIC 或重度低白蛋白時考慮。
顆粒球生成素（G-CSF）：經驗性使用，證據等級 III。

成功率：及時積極治療下，存活率可拉到 65-80%。

## 五、預防與管理

疫苗：FPV 是核心疫苗。幼貓 6-8 週起每 3-4 週一劑，至少打到 16 週齡（壓母源抗體窗口）。一歲後 booster，之後 3 年一劑（WSAVA 2024）。
環境消毒：parvo 對普通消毒劑（chlorhexidine、四級銨）都沒用。要用 1:32 漂白水（約 1500 ppm）作用 10 分鐘以上，或過硫酸氫鉀（Virkon）。
新貓引入：隔離至少 14 天 + SNAP 篩檢陰性才能入群。
收容所：所有進場貓在收容門口先 SNAP 篩，陽性的隔離區處理。

## 六、台灣現況與飼主溝通

收容所、貓中途、貓咖啡廳每年都有 FPV 群聚爆發紀錄。流浪幼貓帶回家前若沒篩檢直接放給家裡的成貓，2 週內爆發機率不低。

跟飼主溝通三件事：
住院積極治療有救，撐過 5-7 天造血恢復就過關。
家裡其他貓暫時隔離、消毒環境。
未來新貓進來一律 14 天隔離 + 篩檢。
`,
  clinical_pearl: '看到「未疫苗幼貓 + 急性嘔吐腹瀉 + WBC 低到看不到」直接當 FPV 處理，不要等 PCR 回來。早 6 小時開始補液跟止吐，存活率差很多。',
  common_mistakes: [
    'SNAP 陰性就排除 FPV：治療後 5-12 天會假陰性，加上 PCR 才穩妥',
    '怕貓吐就不放鼻飼管，結果貓三天沒吃肝臟脂肪肝跑出來',
    '用 chlorhexidine 消毒環境，對 parvo 沒用，要 1:32 漂白水',
    '幼貓 8 週打完一劑就以為沒事，母源抗體可能干擾，要打到 16 週齡',
    '把流浪幼貓直接放進家裡多貓環境沒先隔離篩檢',
  ],
  disease_data: {
    signalment: '8-16 週齡未完整疫苗幼貓最常見，收容所、貓咖啡廳、多貓家庭環境風險最高。少數成貓在免疫低下或疫苗失效時仍會發病。懷孕母貓感染可導致胎兒小腦發育不全。',
    etiology: 'Feline panvovirus（FPV），ssDNA virus。可透過糞口、體液、嘔吐物、被汙染環境傳播，環境中可存活 1 年以上。對普通消毒劑抗性極高。',
    pathogenesis: '病毒攻擊分裂快的細胞：骨髓造血幹細胞 → 全血球減少；腸隱窩細胞 → 出血性腸炎 + 細菌移位；淋巴組織 → 免疫崩潰；胎兒小腦 Purkinje 細胞 → 出生小腦發育不全。',
    clinical_signs: [
      { sign: '嘔吐', category: 'primary', description: '噴射型，可帶血絲，發病 24-48h 內出現' },
      { sign: '腹瀉', category: 'primary', description: '水樣到血樣，迅速脫水' },
      { sign: '高燒', category: 'primary', description: '初期 40-41°C，後期反而低體溫提示敗血休克' },
      { sign: '全血球減少', category: 'primary', description: 'WBC < 2000，多為嗜中性球減少' },
      { sign: '小腦共濟失調', category: 'secondary', description: '垂直感染胎兒，出生即可見，貓本身能成長但動作協調差' },
    ],
    staging: null,
    differential_diagnosis: [
      { condition: 'FeLV / FIV 骨髓抑制', key_differentiator: 'SNAP FeLV/FIV 篩檢，FPV SNAP 陰性，骨髓細胞學差異' },
      { condition: '敗血症', key_differentiator: '血培養陽性，原發感染灶可辨識' },
      { condition: '急性中毒（ethylene glycol、aspirin）', key_differentiator: '病史 + 生化（腎臟、酸鹼）異常' },
      { condition: '腸道淋巴瘤', key_differentiator: '腹部觸診可摸到腫塊或腸壁增厚，超音波 + 細針抽吸' },
    ],
    diagnostic_workup: '1. 臨床診斷優先：典型病史 + 幼貓 + CBC WBC < 2000 → 立刻當 FPV 處置。2. SNAP CPV 快篩確認（敏感度 80%）。3. PCR 送檢確診（治療不等結果）。4. 完整 CBC + 生化評估脫水與酸鹼。5. 排除 FeLV/FIV 共感染。',
    treatment_protocol: 'IV 補液（晶體液 shock dose 20-30 mL/kg IV 起手，依脫水程度維持）+ Maropitant 1 mg/kg SC SID（止吐）+ Ampicillin-sulbactam 30 mg/kg IV TID（廣效抗生素）+ 早期經腸道營養（鼻飼/食道造口管）+ 必要時血漿、G-CSF。隔離治療 14 天以上至 PCR 陰性。',
    prognosis: '未治療死亡率 50-90%。積極支持治療下存活率 65-80%。預後不良因子：低體溫、低白蛋白 < 2.0、嚴重低血糖、合併 DIC。撐過 5-7 天造血恢復通常會好轉。',
    monitoring: '住院每日 CBC + 電解質追蹤直到 WBC 回升、體重穩定。出院後 2 週 SNAP 複測排除排毒，1 個月後追加疫苗。',
    owner_communication: 'FPV 來得又急又猛，但住院積極治療有相當機會救得回來，撐過第一週造血恢復就過關。家裡其他貓暫時隔離不要共用食盆貓砂、環境用 1:32 漂白水消毒。未來新進貓一律隔離 14 天並篩檢陰性才能入群。疫苗接種要打到 16 週齡才能完整覆蓋。',
  },
  diagnostic_data: null,
  procedure_data: null,
  visual_placeholders: [
    { position: '病理機制段落後', type: 'flowchart', description: 'FPV 病毒複製與多系統攻擊機轉圖' },
  ],
  interactive_placeholders: [],
  drug_api_links: ['Maropitant', 'Ondansetron', 'Ampicillin-sulbactam', 'Cefoxitin', 'Metronidazole'],
  references: [
    { type: 'guideline', citation: 'WSAVA Vaccination Guidelines for the Owners and Breeders of Dogs and Cats (2024).', relevance: '最新核心疫苗與母源抗體建議' },
    { type: 'guideline', citation: 'ABCD (European Advisory Board on Cat Diseases) — Feline Panleukopenia Virus Infection (2022).', relevance: '貓 FPV 診斷與治療共識' },
    { type: 'textbook', citation: 'Greene CE. Infectious Diseases of the Dog and Cat, 4th ed. Elsevier, 2012.', relevance: '感染症教科書' },
    { type: 'journal', citation: 'Litster A, Benjanirut C. Case series of feline panleukopenia virus in an animal shelter. J Feline Med Surg. 2014;16(4):346-353.', relevance: '收容所群聚案例' },
  ],
  is_current: true,
  created_at: now,
};

// ─── IM-L4-005: 肝功能評估與膽汁酸 (2026-05-23) ─────────────────────────────
const contentHepFuncAssessment: NodeContent = {
  id: 'CONTENT-IM-L4-005',
  node_id: 'IM-L4-005',
  version: 2,
  summary: '肝功能評估包含兩大類指標：肝細胞損傷（ALT/AST）與膽汁鬱滯（ALP/GGT），搭配肝臟合成功能（白蛋白、PT、膽固醇）及膽汁酸試驗。犬貓的 ALP 有顯著物種差異——犬的 ALP 可被類固醇及苯巴比妥誘導大幅升高（非真性肝毒性），而貓的 ALP 半衰期極短（6h），任何升高都具臨床意義。膽汁酸（空腹 + 餐後 2h）是評估肝臟實際合成與排泄功能的黃金標準，用於鑑別酵素誘導（正常）與真性肝損傷（升高）。',
  learning_objectives: [
    '說明 ALT、AST、ALP、GGT 的組織來源及犬貓半衰期差異',
    '正確解讀肝細胞損傷型 vs 膽汁鬱滯型 vs 混合型肝酵素模式',
    '解釋苯巴比妥（PB）與類固醇誘發 ALP 升高的機轉，並用膽汁酸試驗鑑別真性肝毒性',
    '執行空腹與餐後膽汁酸試驗並解讀結果',
    '比較貓與犬 ALP 的臨床意義差異',
  ],
  key_points: [
    'ALT 是犬貓肝細胞特異性標記；AST 來源包括肝臟和肌肉（AST/ALT > 1.5 時考慮肌肉來源）',
    '犬 ALP 有三種同功異構酶：L-ALP（肝膽管）、B-ALP（骨）、C-ALP（類固醇誘導），PB/類固醇可使犬 ALP 升高至正常值 20× 以上',
    '貓 ALP 半衰期僅 6 小時（犬為 72 小時），貓 ALP 升高需高度警惕；貓無類固醇誘發型 ALP',
    'GGT 在貓中優於 ALP 偵測膽道疾病；脂肪肝（貓）特徵：ALP↑↑ 但 GGT 正常',
    '膽汁酸試驗：空腹 < 10 µmol/L（犬）/ < 5 µmol/L（貓）；餐後 2h < 25 µmol/L（犬）/ < 15 µmol/L（貓）',
    'PB 誘發 ALP 升高：膽汁酸正常 → 酵素誘導（不需換藥）；膽汁酸升高 → 真性肝損傷（需評估換藥或加 SAMe/S-adenosylmethionine）',
    '白蛋白低下、PT 延長、低血糖 = 肝臟合成功能受損，提示重症肝衰竭',
  ],
  body: `# 肝功能評估與膽汁酸 (Hepatic Function Assessment & Bile Acids)

## 一、肝酵素概覽

### 肝細胞損傷指標

| 酵素 | 主要來源 | 半衰期（犬） | 半衰期（貓） | 臨床意義 |
|------|---------|------------|------------|---------|
| **ALT**（SGPT）| 肝細胞胞質 | ~60 小時 | ~6 小時 | 肝細胞損傷特異性高，5× ULN 以上為顯著升高 |
| **AST**（SGOT）| 肝線粒體 + 肌肉 | ~22 小時 | ~1.5 小時 | 肝臟 + 肌肉來源，需與 CK 合用鑑別 |

**AST/ALT 比值解讀：**
- AST/ALT < 1：以肝細胞損傷為主（肝炎、脂肪肝）
- AST/ALT > 1.5：提示肌肉損傷參與，或嚴重肝細胞壞死（線粒體釋放 AST）

### 膽汁鬱滯指標

| 酵素 | 主要來源 | 半衰期（犬） | 半衰期（貓） | 特殊注意 |
|------|---------|------------|------------|---------|
| **ALP** | 肝膽管、骨、[類固醇/PB 誘導（犬）] | ~72 小時 | **~6 小時** | 犬貓最大差異所在（見下表） |
| **GGT** | 肝膽管上皮、腎 | ~3 天 | ~3 天 | 貓：GGT 比 ALP 更敏感於膽道疾病 |

### ALP 犬貓物種差異（核心考點）

| 特性 | 犬 | 貓 |
|------|-----|-----|
| 半衰期 | ~72 小時 | **~6 小時** |
| 類固醇誘導型 | **YES**（C-ALP 同功酶，最高 20×↑）| **NO** |
| 苯巴比妥誘導 | **YES**（L-ALP 同功酶誘導）| **NO** |
| 骨骼來源（幼年）| 輕度↑（生長期） | 輕度↑（生長期） |
| 升高的臨床意義 | 需依程度和情境解讀 | **任何升高均具臨床意義** |
| 甲狀腺機能亢進 | 不影響 | 輕度升高（常見）|

> **核心記憶：貓 ALP 半衰期極短，升高代表「此刻」有問題；犬 ALP 半衰期長，升高需鑑別來源。**

## 二、酵素模式判讀

### 三種基本模式

| 模式 | ALT/AST | ALP/GGT | 常見病因 |
|------|---------|---------|---------|
| **肝細胞損傷型** | 顯著↑（>5× ULN）| 正常或輕度↑ | 急性肝炎、毒素、缺氧、低血壓 |
| **膽汁鬱滯型** | 正常或輕度↑ | 顯著↑（>5× ULN）| 膽管炎、膽囊黏液囊腫、類固醇肝病 |
| **混合型** | 中度↑ | 中度↑ | IBD 繼發、胰臟炎、淋巴瘤浸潤 |

### 貓脂肪肝（肝臟脂肪變性）特徵模式

$$\\text{ALP} \\uparrow\\uparrow \\;(常 >10×\\text{ ULN}) \\quad + \\quad \\text{GGT} \\text{正常或僅輕度↑}$$

這個「ALP/GGT 分離」是貓脂肪肝（非膽道疾病）的特徵標記。若 GGT 也顯著升高 → 合併膽管炎可能。

## 三、PB（苯巴比妥）誘發 ALP 升高 — 鑑別流程

苯巴比妥是犬常用癲癇藥物，可誘導肝臟 CYP450 酵素，使 ALP 升高至 2-20× ULN，但**不代表肝損傷**。

\`\`\`
犬 ALP 升高（on PB）
         │
         ▼
  膽汁酸試驗
  空腹 + 餐後 2h
         │
    ┌────┴────┐
    │正常       │升高
    ▼           ▼
PB 誘導     真性肝毒性
（酵素誘導）    → 評估換 LEV
不需換藥     → 加 SAMe/肝保護
繼續監測     → Hepatic biopsy if severe
\`\`\`

**配套監測：**
- PB 開始後每 6 個月：CBC + 生化 + 膽汁酸
- ALP > 5× ULN 或 ALT 顯著升高 → 立即做膽汁酸試驗

## 四、膽汁酸試驗（Bile Acid Test）

### 操作方法

1. 禁食 12 小時 → 採血（空腹值，BA₁）
2. 給予少量高脂食物刺激膽囊收縮
3. 2 小時後採血（餐後值，BA₂）

### 正常值

| 物種 | 空腹（BA₁）| 餐後 2h（BA₂）|
|------|------------|--------------|
| 犬 | < 10 µmol/L | < 25 µmol/L |
| 貓 | < 5 µmol/L | < 15 µmol/L |

### 結果解讀

| 結果 | 意義 |
|------|------|
| BA₁ 正常，BA₂ < 25（犬）| 肝功能正常 |
| BA₁ > BA₂（空腹 > 餐後）| 自發性膽囊收縮 → 重複試驗 |
| BA₂ 輕度升高（25-50）| 輕度肝功能不全或門脈異常 |
| BA₂ 顯著升高（>100）| 門脈體循環分流（PSS）或重症肝病 |

> 膽汁酸是「肝臟功能的積分」：需要肝臟正常攝取（Na⁺/牛磺酸共輸送）、結合、分泌，缺一不可。

## 五、肝臟合成功能評估

| 指標 | 正常值 | 異常意義 |
|------|--------|---------|
| 白蛋白 | 2.5-4.0 g/dL | < 2.0 g/dL：重症肝衰 or PLE/PLN |
| PT（凝血酶原時間）| 犬 < 9s，貓 < 12s | 延長 > 1.5× ULN：凝血因子合成不足 |
| 膽固醇 | 犬 110-290 mg/dL，貓 65-225 mg/dL | 低下：肝臟合成受損（< 80 mg/dL 提示肝衰）|
| 血糖 | 70-120 mg/dL | 低血糖：嚴重肝衰或 PSS |

## 六、臨床整合案例

### 案例 A：5 歲 Labrador，長期服用 PB，ALP 680 U/L（ULN=120），ALT 95 U/L
- 膽汁酸：空腹 8，餐後 18（均正常）
- **結論：PB 誘發 ALP 升高，非真性肝毒性，繼續監測**

### 案例 B：8 歲貓，食慾減退 5 天，ALP 580 U/L（ULN=80），GGT 12 U/L
- ALP 顯著升高但 GGT 正常 → 脂肪肝高度懷疑
- **結論：ALP/GGT 分離模式 → 貓脂肪肝，啟動鼻管灌食**

### 案例 C：3 歲 Golden，ALP 2400（20× ULN），ALT 480（8× ULN），白蛋白 1.8 g/dL
- 膽汁酸：空腹 65，餐後 180 µmol/L
- **結論：重症肝病 + 合成功能受損，PSS 鑑別，肝臟生檢適應症**

## 七、人醫借鑒 (Translational Insights)

| 人醫工具/概念 | 獸醫應用潛力 | 現況 |
|-------------|-------------|------|
| R-factor（ALT/ALP 比，肝細胞 vs 膽汁鬱滯型分類） | 系統化分類肝損傷模式、指引鑑別 | 人醫常規分型工具，獸醫概念可借鏡 |
| 肝彈性造影（FibroScan / shear-wave elastography） | 非侵入性評估肝纖維化、減少生檢 | 人醫成熟，獸醫剪切波彈性造影研究中 |
| 動態肝功能試驗（ICG 清除率） | 量化肝臟實際代謝/排泄功能 | 人醫術前評估用，獸醫零星研究 |
| 血清纖維化標記組合 / microRNA | 非侵入性肝纖維化/損傷分子標記 | 人醫進展，獸醫研究階段 |

## 八、臨床爭議與知識空缺 (Controversies & Knowledge Gaps)

| 爭議議題 | 現況 | Evidence Level |
|---------|------|---------------|
| 膽汁酸 vs 血氨 篩檢 PSS/肝功能 | 膽汁酸敏感度高但膽汁鬱滯/腸吸收會干擾；血氨對 PSS/肝腦病更專一但檢體不穩定 | Level III |
| ALT/ALP 升高到何種程度才做肝生檢 | 無統一閾值；須結合合成功能、影像、膽汁酸（Webster 2019 consensus 框架） | Level III |
| 貓 ALP 任何升高的解讀 | 半衰期短故「值得追查」，但「升高＝肝功能不全」過絕對，仍須結合 GGT/膽汁酸/影像 | Level III |
| PB 監測是否常規做膽汁酸 | 多建議定期，但最佳頻率與成本效益未統一 | Level IV |

## 九、近期實證更新 (Recent Evidence Updates)

### ACVIM 慢性肝炎共識框架（Webster 2019）
2019 ACVIM 犬慢性肝炎共識統一了診斷（含肝生檢與銅染色）、分級與治療路徑，並界定肝酵素/膽汁酸/影像在何時觸發生檢，是現行犬慢性肝病評估的權威依據。

### 非侵入性肝纖維化評估興起
剪切波彈性造影（shear-wave elastography）等非侵入工具在犬貓研究中漸增，未來可能減少對肝生檢的依賴；目前肝生檢仍為纖維化/銅蓄積的金標準。

### 膽汁酸的定位與限制再確認
膽汁酸仍是低成本、高性價比的肝功能性檢查，特別用於 PSS 篩檢與「酵素誘導 vs 真性肝損傷」的鑑別；但膽汁鬱滯、迴腸吸收障礙會干擾，重症/膽汁鬱滯時可用血氨或蛋白 C 補充判讀。

### 貓肝臟特化指標
GGT 對貓膽道疾病優於 ALP；ALP-GGT 分離仍是貓脂肪肝的實用線索；貓 ALP 任何升高都值得追查（半衰期短），但須整合 GGT、膽汁酸與影像判讀，而非逕自等同肝功能不全。`,
  clinical_pearl: '貓的 ALP 半衰期只有 6 小時，意味著貓 ALP 100 U/L 在臨床意義上相當於犬 ALP 1200 U/L。另一個記憶訣竅：「貓 ALP 升高必追查，犬 ALP 先問藥」。在台灣診所，最常見的 ALP 升高混淆原因是犬類固醇治療（皮膚科常用）和 PB（神經科常用）。膽汁酸試驗是最簡單的確認工具，費用低廉，應優先使用。',
  common_mistakes: [
    '看到犬 ALP 升高就直接診斷肝病（最常見錯誤：忽略 PB 和類固醇誘導型）',
    '用犬的標準解讀貓 ALP（貓 ALP 80 U/L 就應追查，而非等到 400 U/L）',
    '忽略 GGT 在貓膽道疾病中的優越性（貓脂肪肝 ALP 升但 GGT 正常；膽管炎則 GGT 也升）',
    '膽汁酸試驗空腹值 > 餐後值時不重複試驗（自發性膽囊收縮假陽性）',
    '用 PT 延長診斷肝衰竭時忘記鑑別抗凝血劑中毒（鼠藥、vitamin K 拮抗）',
  ],
  disease_data: null,
  diagnostic_data: {
    indication: [
      '疑似肝病（嘔吐、黃疸、腹水、PU/PD）',
      '長期使用 PB 或類固醇的追蹤監測',
      '篩查門脈體循環分流（PSS）—尤其年輕小型犬貓',
      'CBC/生化發現肝酵素異常的進一步評估',
      '術前評估（凝血因子合成能力）',
    ],
    contraindication: [
      '膽汁酸試驗：禁食不足（< 12h）會造成假性升高',
      '膽汁酸試驗：腸道吸收障礙（IBD/PLE）可造成假性降低',
      '若懷疑抗凝血劑中毒，PT/aPTT 測量前先補 VitK 可影響診斷',
    ],
    technique: '膽汁酸試驗操作：1. 禁食 12h 後採靜脈血 2 mL（空腹值）；2. 給予少量高脂罐頭（1-2 茶匙）刺激膽囊收縮；3. 精確計時 2 小時後再採血（餐後值）；4. 兩管同步送 BA 檢測。注意：貓易嘔吐，可改為藥物刺激（cerulein 0.3 µg/kg IV）代替食物刺激。',
    normal_findings: [
      { finding: 'ALT 5-60 U/L（犬）/ 5-50 U/L（貓）', description: '肝細胞完整', significance: '無肝細胞損傷' },
      { finding: 'ALP 20-150 U/L（犬）/ 10-90 U/L（貓）', description: '膽汁流動正常', significance: '無膽汁鬱滯或藥物誘導' },
      { finding: '空腹 BA < 10 µmol/L（犬）/ < 5 µmol/L（貓）', description: '肝臟攝取功能正常', significance: '肝功能完整' },
      { finding: '餐後 BA < 25 µmol/L（犬）/ < 15 µmol/L（貓）', description: '腸肝循環正常', significance: '無門脈異常或重症肝病' },
    ],
    abnormal_findings: [
      { finding: 'ALT > 5× ULN', description: '顯著肝細胞損傷', significance: '急性肝炎、毒素、缺氧、肝壞死' },
      { finding: 'ALP > 10× ULN（犬）', description: '膽汁鬱滯或誘導型', significance: '類固醇肝病、PB 誘導、膽管疾病、Cushing' },
      { finding: '貓 ALP > 2× ULN（任何原因）', description: '貓 ALP 極敏感', significance: '脂肪肝、膽管炎、甲亢、胰臟炎繼發' },
      { finding: '餐後 BA > 100 µmol/L', description: '嚴重肝功能異常', significance: '門脈體循環分流、重症肝衰、晚期纖維化' },
      { finding: '白蛋白 < 2.0 g/dL + PT 延長', description: '肝臟合成功能受損', significance: '急性肝衰竭 or 末期慢性肝病' },
    ],
    interpretation_guide: 'Step 1：確認模式（肝細胞 vs 膽汁鬱滯 vs 混合）。Step 2：排除藥物誘導（PB、類固醇）。Step 3：若 ALP 升高且有藥物史 → 膽汁酸試驗。Step 4：若混合型或 BA 升高 → 超音波評估肝臟結構。Step 5：評估合成功能（白蛋白、PT、血糖）。Step 6：考慮肝臟穿刺活檢適應症（BA > 100 或 ALT > 10×，無禁忌症）。',
    pitfalls: [
      'PB 誘導 ALP 最高可達 20× ULN，看起來非常嚴重，但膽汁酸正常代表非真性肝毒性',
      '貓禁食時間過短（< 4h）膽囊會自發收縮，造成空腹 BA 假性升高（重複試驗）',
      '肌肉損傷（外傷、注射、肌炎）會使 AST 升高但 ALT 正常，不代表肝病',
      'IBD 的腸道黏膜損傷可降低 BA 的腸道吸收，造成膽汁酸試驗假性「偏低」',
    ],
    sensitivity_specificity: '膽汁酸試驗（空腹+餐後）診斷 PSS：敏感度 ~95%，特異度 ~67%；診斷肝功能不全（任何原因）：敏感度 ~78-88%，特異度取決於切值。ALT 對犬急性肝炎：敏感度高但特異度低（肌肉、腸道也可升高）。',
    cost_benefit: '膽汁酸試驗（NT$300-500）是評估肝功能最具性價比的功能性檢查，在 ALP 升高且有藥物史時可快速分流（是否需要進一步影像或生檢）。超音波+生檢費用可達 NT$5000-15000，應在 BA 試驗後再決定。',
  },
  procedure_data: null,
  visual_placeholders: [
    { position: 'ALP 物種差異表後', type: 'comparison_table', description: '犬貓 ALP 特性全面比較圖（半衰期、誘導型、臨床意義）' },
    { position: 'PB 誘發 ALP 鑑別流程', type: 'flowchart', description: 'PB 犬 ALP 升高臨床決策樹（膽汁酸試驗分流）' },
  ],
  interactive_placeholders: [
    { position: '膽汁酸試驗解讀段落', type: 'interactive_calculator', description: '膽汁酸結果輸入器：輸入空腹值 + 餐後值 → 自動判讀正常/異常/PSS 高風險' },
  ],
  drug_api_links: ['SAMe', 'Ursodiol', 'Milk Thistle', 'Phenobarbital', 'Prednisolone'],
  is_current: true,
  created_at: '2026-05-23',
  references: [
    { type: 'textbook', citation: 'Ettinger SJ, Feldman EC, Côté E. Textbook of Veterinary Internal Medicine. 8th ed. Elsevier, 2017. Chapter 91: Diagnostic Evaluation of the Liver.', relevance: '肝功能評估標準教材' },
    { type: 'guideline', citation: 'Webster CRL, Center SA, Cullen JM, et al. ACVIM consensus statement on the diagnosis and treatment of chronic hepatitis in dogs. J Vet Intern Med. 2019;33(3):1173-1200. doi:10.1111/jvim.15467.', relevance: '犬慢性肝炎診斷與治療 ACVIM 共識（生檢/膽汁酸觸發框架）' },
    { type: 'textbook', citation: 'Scherk MA, Center SA. Toxic, metabolic, infectious, and neoplastic liver diseases. In: Ettinger SJ, ed. Textbook of Veterinary Internal Medicine. Elsevier, 2010.', relevance: '貓肝病 ALP/GGT 分離模式' },
    { type: 'journal', citation: 'Center SA. Interpretation of liver enzymes. Vet Clin North Am Small Anim Pract. 2007;37(2):297-333. doi:10.1016/j.cvsm.2006.11.009.', relevance: '肝酵素解讀完整指引，含犬貓物種差異' },
  ],
};

// ─── IM-L3-029: 系統性高血壓 (2026-06-07 iter 2) ─────────────────────────────
const contentSystemicHypertension: NodeContent = {
  id: 'CONTENT-IM-L3-029',
  node_id: 'IM-L3-029',
  version: 2,
  summary: '系統性高血壓在小動物臨床多為「繼發性」（CKD、甲亢、Cushing、嗜鉻細胞瘤），原發性少見。ACVIM 2018 共識把收縮壓切成四級：< 140 正常、140-159 前期、160-179 高血壓、≥ 180 嚴重。診斷不靠單一次測量，要排除白袍效應、取多次平均。最要命的是靶器官損傷（TOD）：眼睛（急性失明，貓 50% 以上以這個為首發）、腦（高血壓腦病、發作）、心（向心性肥厚）、腎（蛋白尿放大、CKD 加速）。治療上貓首選 amlodipine 0.625-1.25 mg/cat PO SID，犬首選 telmisartan 1 mg/kg PO SID。',
  learning_objectives: [
    '應用 ACVIM 2018 BP 分期系統正確判讀犬貓血壓',
    '列出系統性高血壓最常見的 5 個繼發性病因',
    '說明靶器官損傷（TOD）的四大標靶與篩查方法',
    '針對貓與犬選擇正確的一線降壓藥物及劑量',
    '辨識高血壓急症（hypertensive crisis）並啟動緊急降壓',
    '建立繼發性高血壓的篩查與長期監測計畫',
  ],
  key_points: [
    'ACVIM 2018 BP 分期：< 140 正常 / 140-159 前期 / 160-179 高血壓 / ≥ 180 嚴重（單位：mmHg 收縮壓）',
    '診斷必須多次測量平均（首診至少 5-7 次取平均），排除白袍效應；理想環境：飼主在場、安靜房間、5-10 分鐘適應期',
    '繼發性病因最常見：CKD（貓 20-65%、犬 30-93%）> 甲亢（貓 23%）> Cushing（犬 31-86%）> 糖尿病（10-46%）> 嗜鉻細胞瘤（罕見但 50% 以上有 HTN）',
    'TOD 四大標靶：眼（視網膜出血/剝離、急性失明）、腦（昏迷、發作）、心（LV 向心性肥厚、奔馬律）、腎（蛋白尿放大、CKD 加速）',
    '貓首選 amlodipine 0.625-1.25 mg/cat PO SID；若 SBP 仍 > 160 可加至 2.5 mg/cat 或加 telmisartan 1-2 mg/kg PO SID',
    '犬首選 RAAS 阻斷（telmisartan 1 mg/kg PO SID，蛋白尿首選；或 ACEI benazepril 0.25-0.5 mg/kg PO BID）；amlodipine 0.1-0.5 mg/kg PO SID 用於較嚴重或加成（合用），非單獨一線',
    '高血壓急症（SBP ≥ 180 + 急性 TOD）：貓 amlodipine 加量至 2.5 mg PO、犬靜脈 hydralazine 0.5-2 mg/kg slow IV；24h 內目標 SBP < 160',
    '高血壓視網膜病變在貓常為首發症狀（急性失明 + 雙側散大瞳孔），檢眼鏡是低成本高價值篩檢工具',
  ],
  body: '# 系統性高血壓 (Systemic Hypertension)\n\n## 一、流行病學與分類\n\n系統性高血壓在犬貓臨床絕大多數是繼發性的，原發性（特發性）高血壓在貓的盛行率約 13-20%、犬更少。重點不在「有沒有高血壓」，而在「為什麼會高血壓」。\n\n| 分類 | 定義 | 犬貓比例 |\n|------|------|---------|\n| 原發性 | 找不到底層原因 | 貓 13-20%、犬 < 10% |\n| 繼發性 | 有可辨識的底層疾病 | 貓 80%、犬 > 90% |\n| 情境性（白袍）| 醫院環境緊張造成的暫時性升高 | 任何年齡，需鑑別 |\n\n## 二、ACVIM 2018 BP 分期 (Acierno consensus)\n\n| 分期 | 收縮壓 (mmHg) | TOD 風險 | 處置建議 |\n|------|--------------|---------|---------|\n| Normotensive | < 140 | 極低 | 例行監測 |\n| Prehypertensive | 140-159 | 低 | 找原因、3 個月內複測 |\n| Hypertensive | 160-179 | 中度 | 啟動降壓 + 找原因 + TOD 評估 |\n| Severely Hypertensive | ≥ 180 | 高 | 立即降壓 + 急診 TOD 評估 |\n\n> 注意：上述切點是「持續性」高血壓，單次量測 > 160 但無 TOD 應重複測量數次（至少 2-3 次間隔數天到 1-2 週）才能確診。\n\n## 三、測量技術（標準化要點）\n\n1. **環境**：安靜獨立房間、飼主在場、5-10 分鐘適應期。\n2. **設備**：Doppler（貓首選、準確度高）或示波法 oscillometric（HDO 高解析示波）。\n3. **袖帶**：寬度 = 肢體周徑的 30-40%。袖帶太小高估 BP、太大低估 BP。\n4. **量測部位**：貓尾根或前肢；犬前肢或後肢。\n5. **重複次數**：捨棄第 1 次，取連續 3-7 次平均，差異 > 20% 須重測。\n6. **白袍效應辨識**：第一次明顯高、後面遞減 → 高度懷疑白袍。\n\n## 四、繼發性病因（必查清單）\n\n| 病因 | 機轉 | 高血壓盛行率 | 篩檢 |\n|------|------|------------|------|\n| **CKD** | RAAS 活化 + 鈉滯留 + 內皮功能異常 | 貓 20-65%、犬 30-93% | BUN/Cre/SDMA/UPC、超音波 |\n| **甲狀腺機能亢進**（貓）| ↑β1 腎上腺素能、↑心輸出 | 23%（治療前）| TT4 |\n| **Cushing**（犬）| ↑皮質醇 → 內皮功能異常、RAAS | 31-86% | LDDST/UCCR/ACTH 刺激 |\n| **糖尿病** | 內皮功能受損、肥胖 | 10-46% | 血糖、果糖胺 |\n| **嗜鉻細胞瘤** | 兒茶酚胺陣發性釋放 | 50% 以上 | 腹部超音波（腎上腺腫塊）、血漿/尿 metanephrine |\n| **原發性醛固酮增多症**（貓）| 高 aldosterone → Na+/K+ 失衡 | > 50% | aldosterone:renin 比值、超音波 |\n| **NSAID/類固醇/EPO 等藥物** | 鈉滯留、RAAS | 變異大 | 用藥史 |\n\n## 五、靶器官損傷 (TOD) — 四大標靶\n\n### 1. 眼 (Ophthalmic) — 貓 50% 以上首發症狀\n\n| 表現 | 機轉 | 處置 |\n|------|------|------|\n| 視網膜水腫/出血 | 視網膜小動脈受損 | 緊急降壓 |\n| 視網膜剝離（漿液性/出血性）| 脈絡膜灌流異常 | 緊急降壓，部分可逆 |\n| 急性失明 + 雙側散大瞳孔 | 視網膜或視神經缺血 | 24h 內降壓有機會復明 |\n| 前房出血 (hyphema) | 虹膜小血管破裂 | 評估全身性病因 |\n\n> 任何年長貓「突然眼睛看不到」首要鑑別就是高血壓視網膜病變，當下量 BP 而非先點眼藥。\n\n### 2. 腦 (Neurologic)\n\n行為異常、運動失調、發作、昏迷、頭傾。MRI 可見 PRES 樣高訊號。降壓後通常 24-72h 內改善。\n\n### 3. 心 (Cardiac)\n\n左心室向心性肥厚（concentric LVH）為慢性 HTN 特徵；需與 HCM 鑑別（HCM 多為非對稱性、SAM 陽性、無 HTN 史）。可伴 S4 奔馬律。\n\n### 4. 腎 (Renal)\n\n蛋白尿放大（UPC 上升）、CKD 加速進展。降壓 + ACEI/ARB 為 nephroprotection 核心。\n\n## 六、治療策略\n\n### 一線藥物\n\n| 物種 | 藥物 | 劑量 | 注意 |\n|------|------|------|------|\n| 貓 | [藥物:Amlodipine] | 0.625-1.25 mg/cat PO SID | 反應 1-2 週評估；若 SBP > 160 可加至 2.5 mg |\n| 貓 | [藥物:Telmisartan] | 1-2 mg/kg PO SID | amlodipine 反應不足時加；蛋白尿首選 |\n| 犬 | [藥物:Telmisartan] | 1 mg/kg PO SID | 蛋白尿/CKD 首選 |\n| 犬 | [藥物:Amlodipine] | 0.1-0.5 mg/kg PO SID | 與 telmisartan 可合用 |\n| 犬 | [藥物:Benazepril] | 0.25-0.5 mg/kg PO BID | 蛋白尿 + 輕度 HTN |\n\n### 高血壓急症處置 (SBP ≥ 180 + 急性 TOD)\n\n| 物種 | 急性降壓 | 維持 |\n|------|---------|------|\n| 貓 | Amlodipine 加量至 2.5 mg/cat PO 立刻給藥 | 24h 內目標 SBP < 160 |\n| 犬 | [藥物:Hydralazine] 0.5-2 mg/kg slow IV q15min 至 SBP < 170 | 過渡至口服 amlodipine + telmisartan |\n\n> 急性降壓最忌「降太快、降太低」：目標 24h 內降到 < 160，不要在 1 小時內把 SBP 從 220 拉到 130（會引發腦灌流不足與梗塞）。\n\n### 嗜鉻細胞瘤特殊處置\n\n手術前必須先 α-blocker（[藥物:Phenoxybenzamine] 0.25-0.5 mg/kg PO BID × 14-21 天）控制 BP，再考慮 β-blocker（單用 β-blocker 會使 α-effect 失代償，BP 反而飆升）。\n\n## 七、監測計畫\n\n| 階段 | 頻率 | 項目 |\n|------|------|------|\n| 啟動治療後 | 1-2 週 | SBP、Cre、K+、UPC |\n| 達標後 | 1-3 個月 | SBP、Cre/SDMA、K+、UPC、眼底 |\n| 穩定維持 | 3-6 個月 | SBP、生化、UPC、眼底 |\n| 任何 TOD 改變 | 立即 | 重新評估藥物 |\n\n## 八、人醫借鑒 (Translational Insights)\n\n| 人醫概念 | 獸醫應用潛力 | 現況 |\n|---------|-------------|------|\n| 24h 動態血壓監測 (ABPM) | 犬貓居家連續 BP 監測、減少白袍效應 | 人醫標準；獸醫設備/驗證受限、研究中 |\n| 強化降壓目標 (SPRINT) | 犬貓最佳目標 BP 是否更低 | 人醫 SPRINT 下修目標；獸醫仍 <160 |\n| RAAS 雙重阻斷 / ARB (telmisartan) | 蛋白尿性 CKD-HTN 腎保護 | telmisartan 已為犬貓常用 |\n| 醛固酮 breakthrough / MRA | spironolactone 用於難治性 HTN / 原發性醛固酮增多 | 人醫常用；獸醫證據累積中 |\n\n## 九、臨床爭議與知識空缺 (Controversies & Knowledge Gaps)\n\n| 爭議議題 | 現況 | Evidence Level |\n|---------|------|---------------|\n| 啟動治療閾值 (≥160 vs ≥150+TOD) | ACVIM 2018 以 TOD 風險分級，灰色地帶個別化 | Level III |\n| 最佳目標 BP (<160 vs 更低) | 過低有腦/腎灌流不足風險，缺前瞻 RCT | Level III |\n| 犬一線藥 (RAAS-i vs amlodipine) | 蛋白尿者 RAAS-i 首選；amlodipine 多用於嚴重/加成 | Level II |\n| 原發性高血壓真實盛行率 | 受診斷嚴謹度影響，數據變異大 | Level III |\n\n## 十、近期實證更新 (Recent Evidence Updates)\n\n1. **Telmisartan（ARB）**：貓 CKD 蛋白尿之降壓/腎保護 RCT 支持；犬亦用。amlodipine 仍為貓快速降壓首選。\n2. **居家/動態 BP 監測**：減少白袍效應、研究增加；單次院內值不可靠。\n3. **視網膜 TOD 時間敏感**：24-72h 內降壓有 30-50% 復明機會，逾時多永久失明。\n4. **目標 SBP <160、避免過快降壓**：急症 24h 內降至 <160，勿 1h 內驟降以免腦灌流不足。\n> 高血壓多為繼發性；診斷須多次標準化測量，降壓藥與目標由獸醫依物種/病因/TOD 個別化。\n',
  clinical_pearl: '貓的高血壓視網膜病變是「來看眼睛、其實是高血壓」的經典場景。任何年長貓突然撞牆、雙側瞳孔散大、不認路，第一件事不是點眼藥水，而是當下量 BP + 看眼底。24 小時內把 amlodipine 加上去，視網膜剝離還有機會回復、貓有機會重新看得到。錯過這個窗口就終身失明。另一個常被忽略：所有開始 erythropoietin 的 CKD 貓必須先把 BP 控好，否則 EPO 會把 BP 推得更高、誘發 TOD。',
  common_mistakes: [
    '單次測量 SBP > 160 就診斷高血壓（沒排除白袍效應）',
    '只看 SBP 而忽略 TOD 篩查（眼底、UPC、神經）',
    '貓 HTN 治療後沒有逐月追蹤、劑量沒往上 titrate（amlodipine 0.625 起步常常壓不到目標）',
    '高血壓急症一小時內把 SBP 從 220 拉到 130（誘發腦梗塞）',
    '嗜鉻細胞瘤手術前單用 β-blocker（會使 α-effect 失代償、BP 暴衝）',
    '看到 LV 向心性肥厚就診斷 HCM（沒量 BP、忽略繼發性高血壓性心肌病）',
    '貓開始 erythropoietin 前沒控 BP（會加重 HTN）',
  ],
  disease_data: {
    signalment: '中老年犬貓最常見。貓 > 9 歲、犬中老年。任何年齡若伴隨 CKD、內分泌疾病、急性視力喪失、神經症狀都應量 BP。台灣門診常見族群：老年貓（合併 CKD 或甲亢）、中老年犬（Cushing 或 CKD）。嗜鉻細胞瘤好發中老年大型犬。',
    etiology: '繼發性為主（貓 80%、犬 > 90%）。最常見：(1) CKD（貓 20-65%、犬 30-93%）；(2) 甲狀腺機能亢進（貓 23%）；(3) Cushing（犬 31-86%）；(4) 糖尿病（10-46%）；(5) 嗜鉻細胞瘤（罕但 > 50% 有 HTN）；(6) 原發性醛固酮增多症（貓）；(7) 藥物誘發（NSAID、類固醇、EPO、phenylpropanolamine）。原發性（特發性）高血壓在貓佔 13-20%、犬罕見。',
    pathogenesis: '核心機轉是 RAAS 活化 + 鈉滯留 + 內皮功能異常 + 交感神經張力升高。CKD：腎元減少 → RAAS 活化 → angiotensin II 升 → 血管收縮 + 鈉水滯留；同時 ADMA 累積抑制 NO → 內皮功能受損。甲亢：T4 直接增加 β1 受體密度 → ↑心輸出 + ↑全身血管阻力。Cushing：皮質醇放大 catecholamine 反應 + 鈉滯留 + 內皮 NO 合成受抑。嗜鉻細胞瘤：腫瘤陣發性釋放 norepinephrine/epinephrine → α1 血管收縮 + β1 心搏增加。長期高 BP → 小動脈玻璃樣變性 + 中膜肥厚 → TOD（視網膜、腦、心、腎）。',
    clinical_signs: [
      { sign: '急性失明 / 視網膜出血或剝離', category: 'primary', description: '貓最常見首發症狀（> 50%），雙側散大瞳孔，眼底可見視網膜小血管曲張、出血、視網膜下水腫' },
      { sign: '神經症狀（運動失調、發作、昏迷、行為改變）', category: 'primary', description: '高血壓性腦病；MRI 可見 PRES 樣後部白質高訊號' },
      { sign: '心搏徐緩或奔馬律', category: 'primary', description: '反射性 baroreceptor 反應；LVH 引起 S4 奔馬律' },
      { sign: '蛋白尿 (UPC 上升)', category: 'primary', description: '腎絲球高壓誘發，是 CKD-HTN 患者的關鍵監測指標' },
      { sign: '鼻出血', category: 'secondary', description: '鼻腔小血管破裂' },
      { sign: 'PU/PD', category: 'secondary', description: '繼發於底層 CKD 或 Cushing' },
      { sign: '無症狀（健檢偶發）', category: 'secondary', description: '輕中度 HTN 多為無症狀，需主動篩查' },
    ],
    staging: { system: 'ACVIM 2018 (Acierno) Blood Pressure Categories', stages: ['Normotensive：SBP < 140 mmHg', 'Prehypertensive：SBP 140-159 mmHg', 'Hypertensive：SBP 160-179 mmHg（需啟動降壓）', 'Severely Hypertensive：SBP ≥ 180 mmHg（高 TOD 風險、視為高血壓急症）'] },
    differential_diagnosis: [
      { condition: '白袍效應 (situational hypertension)', key_differentiator: '醫院測量數值高但家中或多次平均 < 140；通常第 1-2 次量測明顯高、後續遞減' },
      { condition: '慢性腎病 (CKD)', key_differentiator: '貓老年 + Cre/SDMA 升 + USG < 1.035；HTN 為 CKD 最常見併發症' },
      { condition: '貓甲狀腺機能亢進', key_differentiator: '消瘦 + 多食 + TT4 升；甲狀腺結節可觸診' },
      { condition: 'Cushing 症候群', key_differentiator: '犬軀幹脫毛、多渴多尿、LDDST/UCCR 異常' },
      { condition: '嗜鉻細胞瘤 (Pheochromocytoma)', key_differentiator: '陣發性 BP 飆升（不是持續性）、超音波發現腎上腺腫塊、血漿游離 normetanephrine > 4× 參考上限（犬 > ~1500 pg/mL，UCSF/Texas A&M 參考實驗室）或 24h 尿 fractionated metanephrines > 4× ULN（creatinine-normalized）— 特異度 > 95%；2-3× ULN 為臨界，需 CT/MRI 確認腎上腺腫塊 + clonidine suppression test；可伴心搏過速與崩潰發作（α-receptor 與 β-receptor 同時刺激）；HTN 不易單用 amlodipine 控制 — 手術前必須 α-blocker phenoxybenzamine 0.25-0.5 mg/kg PO BID × 14-21 天再考慮 β-blocker' },
      { condition: '原發性醛固酮增多症（Conn）', key_differentiator: '貓老年、低鉀、肌無力、aldosterone:renin 比值升、腎上腺腫塊' },
      { condition: '原發性 (idiopathic) HTN', key_differentiator: '排除上述所有繼發性病因後才下；貓 13-20%、犬 < 10%' },
      { condition: '肥厚型心肌病 (HCM)', key_differentiator: 'HCM 為非對稱性肥厚 + SAM 陽性；HTN-LVH 為向心性肥厚 + 高 BP；兩者可共存' },
    ],
    diagnostic_workup: '1. 標準化 BP 測量（安靜環境、5-10 分鐘適應、3-7 次平均、捨棄第 1 次）→ 2. 確認持續性（間隔數天再測一次）→ 3. 完整 TOD 評估：眼底鏡（視網膜出血/剝離）、神經學檢查、心臟聽診/X 光/心超（LVH）、UPC + Cre/SDMA → 4. 繼發病因排查：CBC/生化/T4（貓）/LDDST 或 UCCR（犬可疑 Cushing）/腹部超音波（腎上腺腫塊、CKD 結構評估）→ 5. 嗜鉻細胞瘤可疑時：血漿或尿 metanephrine → 6. 原發性醛固酮增多症可疑時：aldosterone:renin 比值。',
    treatment_protocol: 'SBP ≥ 160（或 ≥ 150 合併 TOD）即啟動降壓。貓首選 amlodipine 0.625-1.25 mg/cat PO SID，1-2 週後評估；若 SBP > 160 可加量至 2.5 mg/cat 或加 telmisartan 1-2 mg/kg PO SID。犬首選 RAAS 阻斷（telmisartan 1 mg/kg PO SID，蛋白尿首選；或 benazepril 0.25-0.5 mg/kg PO BID）；amlodipine 0.1-0.5 mg/kg PO SID 用於較嚴重或加成，非單獨一線。高血壓急症 (SBP ≥ 180 + 急性 TOD)：貓 amlodipine 加量至 2.5 mg PO 立刻給藥；犬 hydralazine 0.5-2 mg/kg slow IV q15min 直至 SBP < 170，24h 內目標 < 160。同時並進處理底層病因（治療 CKD、甲亢、Cushing、嗜鉻細胞瘤手術）。嗜鉻細胞瘤手術前必須 α-blocker (phenoxybenzamine) 14-21 天，再考慮 β-blocker。',
    prognosis: '繼發性高血壓的預後與底層病因強相關。CKD-HTN 控制良好可延長存活；甲亢-HTN 治療甲亢後 50% 患者 BP 可恢復正常；Cushing-HTN 治療 Cushing 後部分改善。嗜鉻細胞瘤手術切除後 BP 多可恢復。視網膜剝離若 24-72h 內降壓有 30-50% 機會復明，超過 72h 則多為永久性失明。長期未控制的 HTN 會加速 CKD 進展、誘發 LV 衰竭、增加 CVA 風險。',
    monitoring: '啟動治療 1-2 週內回診量 BP、Cre、K+。穩定後 1-3 個月追蹤 SBP、Cre/SDMA、K+、UPC、眼底。長期穩定 3-6 個月一次。任何 TOD 改變或藥物換劑量都要立即追加 BP + 生化。同時追蹤底層疾病（CKD 走 IRIS、甲亢追 T4、Cushing 追 ACTH stim/UCCR）。',
    owner_communication: '高血壓是「沉默的殺手」，很多時候等到眼睛看不到或發作才被抓到。每年健檢的 BP 一定要量，尤其是老貓老犬、有 CKD/甲亢/Cushing 的更要量。藥要每天吃、不能停，停藥 24-48h BP 就會反彈。在家可以觀察兩件事：(1) 撞東西、看不清楚或瞳孔變大 → 急診；(2) 食慾忽然差、呼吸變快、走路不穩 → 回診。降壓的目標不是「壓越低越好」，而是 SBP < 160 + 沒有 TOD。',
  },
  diagnostic_data: null,
  procedure_data: null,
  visual_placeholders: [
    { position: 'ACVIM BP 分期表後', type: 'comparison_table', description: 'ACVIM 2018 BP 四分期 vs TOD 風險視覺對照' },
    { position: '繼發性病因段落', type: 'flowchart', description: '系統性高血壓繼發性病因鑑別決策樹' },
    { position: 'TOD 段落', type: 'annotated_image', description: '貓高血壓視網膜病變眼底照（視網膜剝離、出血、血管曲張標示）' },
  ],
  interactive_placeholders: [
    { position: 'ACVIM BP 分期段落', type: 'interactive_staging', description: '輸入 SBP + TOD 狀態自動建議是否啟動治療、藥物選擇' },
  ],
  drug_api_links: ['Amlodipine', 'Telmisartan', 'Benazepril', 'Hydralazine', 'Phenoxybenzamine'],
  references: [
    { type: 'guideline', citation: 'Acierno MJ, Brown S, Coleman AE, et al. ACVIM consensus statement: Guidelines for the identification, evaluation, and management of systemic hypertension in dogs and cats. J Vet Intern Med. 2018;32(6):1803-1822. doi:10.1111/jvim.15331.', relevance: 'ACVIM 2018 高血壓共識核心指引（BP 分期、診斷、治療）' },
    { type: 'guideline', citation: 'Brown S, Atkins C, Bagley R, et al. Guidelines for the identification, evaluation, and management of systemic hypertension in dogs and cats. J Vet Intern Med. 2007;21(3):542-558. doi:10.1111/j.1939-1676.2007.tb03005.x.', relevance: 'ACVIM 2007 原始高血壓共識（TOD 概念奠基）' },
    { type: 'journal', citation: 'Syme HM, Markwell PJ, Pfeiffer D, Elliott J. Survival of cats with naturally occurring chronic renal failure is related to severity of proteinuria. J Vet Intern Med. 2006;20(3):528-535. doi:10.1111/j.1939-1676.2006.tb02892.x.', relevance: 'CKD-HTN-蛋白尿三角關係的關鍵研究' },
    { type: 'journal', citation: 'Williams TL, Peak KJ, Brodbelt D, Elliott J, Syme HM. Survival and the development of azotemia after treatment of hyperthyroid cats. J Vet Intern Med. 2010;24(4):863-869. doi:10.1111/j.1939-1676.2010.0550.x.', relevance: '甲亢-HTN 治療後轉歸的長期追蹤研究' },
    { type: 'journal', citation: 'Jepson RE. Feline systemic hypertension: classification and pathogenesis. J Feline Med Surg. 2011;13(1):25-34. doi:10.1016/j.jfms.2010.11.007.', relevance: '貓系統性高血壓分類與病理機轉回顧' },
    { type: 'journal', citation: 'Bijsmans ES, Jepson RE, Chang YM, Syme HM, Elliott J. Changes in systolic blood pressure over time in healthy cats and cats with chronic kidney disease. J Vet Intern Med. 2015;29(3):855-861. doi:10.1111/jvim.12600.', relevance: 'CKD 貓 BP 縱向變化（建立基線與監測頻率）' },
  ],
  is_current: true,
  created_at: '2026-06-07',
};

// ─── IM-L3-030: MDR1 (ABCB1-1Δ) 突變與伊維菌素中毒 (2026-06-07 iter 4) ─────────
const contentMDR1Toxicity: NodeContent = {
  id: 'CONTENT-IM-L3-030',
  node_id: 'IM-L3-030',
  version: 2,
  summary: 'MDR1 (ABCB1-1Δ) 為 ABCB1 基因第 4 個外顯子 4-bp 缺失造成的框移突變，導致 P-glycoprotein (P-gp) 截短、血腦屏障 (BBB) 排藥功能喪失。柯利犬 (Collie) 約 75%、長毛威比特 (Long-haired Whippet) 約 65%、澳洲牧羊犬 (Aussie) 約 50%、喜樂蒂 (Sheltie) 約 15% 帶有突變等位基因。常見受影響藥物：macrocyclic lactones (ivermectin、milbemycin、moxidectin、selamectin)、loperamide、vincristine/doxorubicin/paclitaxel、部分鴉片類。臨床表現：運動失調、瞳孔散大、流涎、震顫、視覺異常、昏迷。診斷：WSU VCPL 或 UC Davis VGL 頰部黏膜拭子基因檢測 (USD 60-70)。治療核心：20% IV lipid emulsion (ILE) 1.5 mL/kg bolus + 0.25 mL/kg/min CRI × 30-60 min（單日上限 8 mL/kg），加上支持療法。預後：及早 ILE 介入可完全康復。',
  learning_objectives: [
    '解釋 MDR1 (ABCB1-1Δ) 突變如何造成 P-glycoprotein 功能喪失與 BBB 滲漏',
    '辨識 ABCB1-1Δ 高風險犬種與各品種的突變等位基因頻率',
    '列出 11 種常見受 P-gp 影響、可能造成 MDR1 突變犬中毒的藥物',
    '解讀 WSU VCPL / UC Davis VGL 基因檢測結果（normal/mutant heterozygous/mutant homozygous）',
    '依據 ACVIM 共識正確執行 20% IV 脂肪乳劑 (ILE) 中毒解救方案',
    '指導飼主在風險犬種的藥物使用安全（心絲蟲預防劑、止瀉藥、化療藥物）',
  ],
  key_points: [
    'ABCB1 基因 (舊稱 MDR1) 第 4 外顯子的 4-bp 缺失 (c.227_230del) 造成框移與提前終止，P-gp 蛋白截短、無功能',
    'P-gp 是 BBB、腸黏膜、肝臟、腎臟的外排幫浦；缺失後脂溶性藥物大量進入中樞神經系統',
    '高風險犬種帶因率（攜帶 ≥1 突變等位基因之比例，非等位基因頻率）：Collie ~75%、Long-haired Whippet ~65%、Aussie/Mini Aussie ~50%、Old English Sheepdog ~15%、Sheltie ~15%、German Shepherd ~10%、Border Collie ~5%',
    '受影響藥物（11 大類）：1) macrocyclic lactones (ivermectin/milbemycin/moxidectin/selamectin)；2) loperamide (止瀉)；3) 化療：vincristine/vinblastine/doxorubicin/paclitaxel；4) digoxin；5) acepromazine（鎮靜時間延長 2-3 倍）',
    '心絲蟲預防劑「預防劑量」(ivermectin 6 μg/kg/月) 對 MDR1 突變犬安全；致毒劑量需 >50× FDA 核准犬用預防劑量',
    '臨床中毒劑量：ivermectin >100 μg/kg PO 對純合子突變犬即可致毒（牛羊驅蟲劑或外用「滴在皮膚」型劑型最危險）',
    '臨床表現：早期 - 流涎、嘔吐、運動失調、瞳孔散大；中期 - 震顫、視覺喪失、低血壓；嚴重 - 昏迷、低體溫、呼吸抑制',
    '診斷金標準：頰部拭子基因檢測（WSU VCPL https://vcpl.vetmed.wsu.edu/，USD 60-70；UC Davis VGL https://vgl.ucdavis.edu/test/mdr1）',
    '治療核心：20% IV lipid emulsion (Intralipid/SMOFlipid)：1.5 mL/kg slow IV bolus 1 分鐘 → 0.25 mL/kg/min CRI × 30-60 min（單日上限 8 mL/kg）；可重複 q4h × 24h 直至症狀緩解',
    '預後：早期 ILE 介入（症狀出現 4-6h 內）可完全康復；延誤 24h 以上死亡率顯著升高',
  ],
  body: '# MDR1 (ABCB1-1Δ) 突變與伊維菌素中毒\n\n## 一、分子遺傳學基礎\n\nABCB1 基因（舊稱 MDR1）位於犬 14 號染色體，編碼 P-glycoprotein (P-gp)，一種 ATP 依賴性外排幫浦，分布於 BBB、腸黏膜、肝細胞膽管面、腎近曲小管。ABCB1-1Δ 是第 4 個外顯子的 4 鹼基缺失 (c.227_230del GATA)，造成 reading frame shift 與提前終止 → 截短的 P-gp 蛋白無功能 → BBB 滲漏。\n\n## 二、品種與帶因率\n\n> 註：下表「帶因率」為攜帶 ≥1 突變等位基因之犬隻比例（carrier/affected prevalence），非等位基因頻率（allele frequency，後者較低）。\n\n| 品種 | 帶因率（≥1 突變等位基因） | 雙等位基因（homozygous）盛行率 |\n|------|------------------------|----------------------|\n| **Collie** | ~75% | ~50% homozygous |\n| **Long-haired Whippet** | ~65% | ~42% homozygous |\n| **Australian Shepherd** | ~50% | ~25% homozygous |\n| **Old English Sheepdog** | ~15% | ~2-5% homozygous |\n| **Shetland Sheepdog** | ~15% | ~2-5% homozygous |\n| **German Shepherd** | ~10% | ~1% homozygous |\n| **Border Collie** | ~5% | <1% homozygous |\n\n## 三、受 P-gp 影響的藥物\n\n| 類別 | 代表藥物 | 中毒風險 |\n|---------|---------|---------|\n| Macrocyclic Lactones | [藥物:Ivermectin]、Milbemycin、Moxidectin | 預防劑量安全；治療劑量危險 |\n| 止瀉藥 | [藥物:Loperamide] | OTC 劑量即可造成 CNS 抑制 |\n| 化療 | [藥物:Vincristine]、[藥物:Doxorubicin] | 神經毒性、骨髓抑制放大 |\n| 鎮靜劑 | [藥物:Acepromazine] | 鎮靜時間延長 2-3 倍（臨床觀察；其 P-gp 受質地位較不確定）|\n| 強心配醣體 | [藥物:Digoxin] | 半衰期延長 |\n\n## 四、臨床分期\n\n| 階段 | 出現時間 | 臨床表現 |\n|------|---------|---------|\n| 早期 | 4-12h | 流涎、嘔吐、運動失調、瞳孔散大 |\n| 中期 | 12-24h | 震顫、視覺喪失、低血壓、心搏徐緩 |\n| 嚴重 | 24h+ | 昏迷、低體溫、呼吸抑制；死亡率 >50% |\n\n## 五、治療：IV Lipid Emulsion (ILE)\n\n**機轉**：脂溶性藥物在血中被「lipid sink」吸附、從 CNS 移回血液被代謝清除。\n\n**標準方案**：20% Intralipid 或 SMOFlipid\n- Loading: 1.5 mL/kg slow IV bolus（1 分鐘）\n- CRI: 0.25 mL/kg/min × 30-60 min\n- 單日上限 8 mL/kg/day；可 q4-6h 重複 × 24-72h\n\n**支持療法**：氣道保護（插管）、體溫維持、輸液、atropine（心搏徐緩）、diazepam（發作控制）。\n\n## 六、預後\n\n- 早期 ILE 介入（4-6h 內）完全康復率 >90% (Wright 2011)\n- 延誤 12-24h 康復率 60-80%\n- 延誤 >24h 或已昏迷死亡率 >50%\n\n## 七、人醫借鑒 (Translational Insights)\n\n| 人醫概念 | 獸醫對應 | 現況 |\n|---------|---------|------|\n| 藥物基因體學術前基因分型 | 化療/巨環內酯前先驗 ABCB1 基因型再定劑量 | 人醫精準醫療常規，獸醫漸推廣於高風險犬種 |\n| 脂質救援（ILE）治療局麻全身毒性（LAST） | 延伸用於犬脂溶性藥物中毒（ivermectin/loperamide） | 源自人醫 LAST，獸醫採 lipid sink 機轉 |\n| P-gp 為腫瘤後天多重抗藥性（MDR）機轉 | 犬為生殖系 P-gp 缺失（與腫瘤後天 MDR 方向相反） | 概念互補，助理解 P-gp 生理 |\n\n## 八、臨床爭議與知識空缺 (Controversies & Knowledge Gaps)\n\n| 爭議議題 | 現況 | Evidence Level |\n|---------|------|---------------|\n| ILE 最佳劑量/療程與療效 | 多為病例系列/個案報告、缺 RCT；8 mL/kg/day 上限為經驗共識 | Level IV |\n| 雜合子（het）對 P-gp 受質的減量幅度 | 缺明確劑量指引；高劑量或多重受質仍可中毒 | Level IV |\n| 化療前常規 ABCB1 基因分型的成本效益 | 高風險犬種建議分型，但常規普及度/成本效益待評 | Level III |\n| acepromazine 是否為真正 P-gp 受質 | 臨床觀察 MDR1 犬鎮靜延長，但 P-gp 受質地位不如其他藥物明確 | Level IV |\n| ABCB1-1Δ 以外的新變異與貓 ABCB1 | 陸續描述新變異；貓 ABCB1 缺失突變已報告 | Level IV |\n\n## 九、近期實證更新 (Recent Evidence Updates)\n\n- **貓也有 ABCB1 功能缺失突變**：Mealey & Burke（2015）於貓鑑定 ABCB1 無義突變，提示部分貓對巨環內酯/化療藥可能敏感，惟臨床盛行率與意義仍在累積。〔Evidence Level IV〕\n- **藥物交互作用放大毒性**：併用 P-gp 抑制劑（如 ketoconazole、cyclosporine、部分鈣通道阻斷劑）可在「正常基因型」犬亦誘發巨環內酯毒性，用藥史評估不應只看基因型。〔Evidence Level IV〕\n- **ILE 證據持續累積但仍屬低階**：以病例系列為主、缺 RCT；療效與預後取決於劑量、嚴重度與介入時機，勿過度承諾。〔Evidence Level IV〕\n- **擴展型藥物基因體學**：犬用多基因藥物反應檢測（不限 ABCB1）發展中，朝高風險犬種術前/化療前預先分型的管理方向。〔Evidence Level IV〕\n\n> ⚠️ 上述更新（特別是貓 ABCB1、藥物交互作用與 ILE 證據層級）仍待 DVM 依個案與最新實證覆核後採用。\n',
  clinical_pearl: '看到牧羊犬血統 + 神經症狀 + 「最近吃了 XX 藥」，先把 IV lipid emulsion 拿出來、再去開檢驗單。臨床決策走「品種風險 + 用藥史」推定診斷即可，ILE 1.5 mL/kg bolus + 0.25 mL/kg/min CRI 是兩條救命指令，全院都該知道在哪個冰箱。心絲蟲預防劑在 MDR1 犬完全安全（FDA 預防劑量遠低於 100× 致毒劑量），不要因為一個帶突變的 Collie 就停掉所有伊維菌素類預防 — 心絲蟲死亡率高得多。',
  common_mistakes: [
    '誤以為「MDR1 突變的 Collie 不能用任何心絲蟲預防」— 預防劑量 (6 μg/kg/月) 安全',
    '看到 ivermectin 中毒只給活性炭、沒有第一時間給 IV lipid emulsion',
    '把牛羊用驅蟲劑「稀釋後」給 Collie — 濃度為犬用 100× 以上',
    'IV lipid emulsion 推太快（< 30 秒）— 增加脂肪栓塞風險',
    'MDR1 犬使用 acepromazine 標準劑量、結果鎮靜 2-3 天醒不來',
    '化療前沒做 MDR1 基因檢測就用標準劑量 vincristine',
    'MDR1 雜合子視為「沒事」— 高劑量或多重 P-gp 受質仍會中毒',
  ],
  disease_data: {
    signalment: 'MDR1 突變高風險犬種：Collie、Long-haired Whippet、Australian Shepherd、Old English Sheepdog、Shetland Sheepdog、English Shepherd、Silken Windhound、German Shepherd、Border Collie。台灣門診常見：Collie、Border Collie、Aussie、Sheltie。中毒臨床表現好發於餵食牛羊驅蟲劑、外用大動物 ivermectin 滴劑、人用止瀉藥或標準劑量化療後。',
    etiology: 'ABCB1 基因第 4 外顯子 4-bp 缺失 (c.227_230del GATA) 造成 frame shift → 截短的 P-glycoprotein 無功能 → BBB 喪失外排藥物能力。純合子完全缺失；雜合子仍有約 50% 功能、高劑量下仍可中毒。中毒劑量：ivermectin >100 μg/kg PO 對純合子致毒；犬用心絲蟲預防劑 6 μg/kg/月安全。',
    pathogenesis: '正常 P-gp 在 BBB 主動把脂溶性受質從腦內泵回血液。ABCB1-1Δ 突變 → P-gp 失能 → BBB 對 macrocyclic lactones、loperamide、長春花鹼類化療藥的滲透性大幅升高。Ivermectin 在腦內作用於 GABA-gated chloride channels，造成神經元過度抑制 → 運動失調、震顫、CNS 抑制、昏迷。',
    clinical_signs: [
      { sign: '運動失調與後肢無力', category: 'primary', description: '早期 4-12h 出現' },
      { sign: '瞳孔散大（雙側對稱）', category: 'primary', description: '對光反射可能保留；與顱壓升高鑑別' },
      { sign: '流涎與嘔吐', category: 'primary', description: '早期常見' },
      { sign: '全身性震顫與發作', category: 'primary', description: '中期出現' },
      { sign: '視覺喪失（中樞性盲）', category: 'primary', description: '眼底鏡通常正常' },
      { sign: '昏迷與低體溫', category: 'primary', description: '嚴重中毒；常需插管支持' },
      { sign: '心搏徐緩與低血壓', category: 'secondary', description: '副交感過度活化' },
      { sign: '呼吸抑制', category: 'secondary', description: '中樞性；嚴重需 IPPV' },
    ],
    staging: { system: 'Ivermectin Toxicity Severity', stages: ['Stage I (Mild)：流涎、嘔吐、輕度運動失調 — ILE + 支持療法、預後良好', 'Stage II (Moderate)：明顯運動失調、視覺喪失、震顫 — ILE 立即啟動、預後良好', 'Stage III (Severe)：昏迷、低體溫、呼吸抑制、發作 — ILE + 插管 + ICU、預後保留'] },
    differential_diagnosis: [
      { condition: 'Moxidectin 中毒', key_differentiator: '半衰期更長（28-44 天）、症狀持續更久；治療相同' },
      { condition: 'Loperamide 中毒', key_differentiator: '人用止瀉藥史；以嚴重鎮靜與呼吸抑制為主；naloxone 可部分逆轉' },
      { condition: '癲癇重積', key_differentiator: '無用藥史；強直陣攣型發作；diazepam + levetiracetam' },
      { condition: '高血壓性腦病', key_differentiator: 'BP > 180、TOD 表現；CKD/甲亢病史' },
      { condition: '肝腦症', key_differentiator: '血氨升高、PSS 病史；頭壓牆、行為改變' },
      { condition: '化療毒性 (vincristine 周邊神經病變)', key_differentiator: '化療史 + MDR1 突變犬；周邊神經為主、CNS 表現輕' },
    ],
    diagnostic_workup: '1. 詳細用藥史（牛羊驅蟲劑、loperamide、化療、外用大動物驅蟲劑）→ 2. 神經學檢查 → 3. 急性中毒：基於品種 + 用藥史推定診斷、立即啟動 ILE → 4. 基因檢測（WSU VCPL 或 UC Davis VGL，USD 60-70）→ 5. 排除鑑別：CBC/生化、BP、MRI/CSF（若疑似結構性病變）。',
    treatment_protocol: '**第一線：IV Lipid Emulsion** — 20% Intralipid/SMOFlipid，1.5 mL/kg slow IV bolus → 0.25 mL/kg/min CRI × 30-60 min（單日上限 8 mL/kg）。q4-6h 可重複 × 24-72h。**去汙染**：apomorphine 0.04 mg/kg IV 催吐（攝食 1-2h 內）→ 活性炭 1-4 g/kg PO q4-6h × 24-48h。**支持療法**：插管 + IPPV、循環式溫毯、lactated Ringer、atropine 0.02-0.04 mg/kg、diazepam 0.5 mg/kg IV。**禁忌**：類固醇、acepromazine、再次 P-gp 受質。',
    prognosis: '及早 ILE 介入（4-6h 內）完全康復率 >90%（Wright 2011：27 例中 22 例 ILE 後完全康復）。延誤 12-24h 康復率 60-80%、可能殘留神經缺失。延誤 >24h 或昏迷死亡率 >50%。長期：基因突變終身，需建立用藥黑名單。',
    monitoring: '**急性期**：每 1-2h 神經狀態、瞳孔、BP、體溫；每 4-6h 評估 ILE 效應。**亞急性**：神經評分 q6-12h、嗜中性球（化療毒性時）q3-5d。**長期**：建立病歷紅旗「MDR1 Mutant」、每年提醒飼主藥物黑名單、新藥前查 WSU VCPL 清單。',
    owner_communication: '您家的狗可能帶有 MDR1 基因突變（牧羊犬血統常見），這是一種「天生少了一道腦部防護網」的狀況。重點：(1) 強烈建議做基因檢測（USD 60，頰部拭子寄到 WSU 實驗室，3-7 天）；(2) 心絲蟲預防劑按犬用標準劑量「完全安全」，請不要因為害怕而停藥；(3) 絕對不可使用：牛羊驅蟲劑、外用大動物滴劑、人用 Imodium；(4) 化療前必須告知獸醫品種、做基因檢測再決定劑量；(5) 隨身攜帶或在病歷上標註 MDR1 警示。若已疑似中毒（流口水、走路不穩、瞳孔變大），立即急診，4-6 小時內治療康復率 >90%。',
  },
  diagnostic_data: null,
  procedure_data: null,
  visual_placeholders: [
    { position: '分子遺傳學段落', type: 'annotated_image', description: 'ABCB1-1Δ 基因 4-bp 缺失示意圖（DNA 序列 + 框移 + 截短蛋白）' },
    { position: '品種頻率段落', type: 'comparison_table', description: '10 個高風險犬種等位基因頻率長條圖' },
  ],
  interactive_placeholders: [
    { position: '受影響藥物段落', type: 'drug_safety_checker', description: '輸入藥名查詢是否為 P-gp 受質、是否安全給 MDR1 突變犬使用' },
  ],
  drug_api_links: ['Ivermectin', 'Milbemycin', 'Moxidectin', 'Selamectin', 'Loperamide', 'Vincristine', 'Doxorubicin', 'Acepromazine', 'Digoxin', 'Atropine', 'Diazepam', 'Apomorphine'],
  references: [
    { type: 'journal', citation: 'Mealey KL, Bentjen SA, Gay JM, Cantor GH. Ivermectin sensitivity in collies is associated with a deletion mutation of the mdr1 gene. Pharmacogenetics. 2001;11(8):727-733. doi:10.1097/00008571-200111000-00012', relevance: '原始 MDR1 突變發現論文' },
    { type: 'journal', citation: 'Mealey KL, Meurs KM. Breed distribution of the ABCB1-1Δ (multidrug sensitivity) polymorphism among dogs undergoing ABCB1 genotyping. J Am Vet Med Assoc. 2008;233(6):921-924. doi:10.2460/javma.233.6.921', relevance: '大規模族群分析，確立各品種帶因率' },
    { type: 'journal', citation: 'Geyer J, Janko C. Treatment of MDR1 mutant dogs with macrocyclic lactones. Curr Pharm Biotechnol. 2012;13(6):969-986. doi:10.2174/138920112800399301', relevance: '回顧：MDR1 受質藥物清單、安全劑量、ILE 治療準則' },
    { type: 'journal', citation: 'Wright HM, Chen AV, Talcott PA, et al. Intravenous fat emulsion as treatment for ivermectin toxicosis in three dogs homozygous for the ABCB1-1Δ gene mutation. J Vet Emerg Crit Care. 2011;21(6):666-672. doi:10.1111/j.1476-4431.2011.00687.x', relevance: 'ILE 治療純合子 MDR1 突變犬 ivermectin 中毒的關鍵案例系列' },
    { type: 'journal', citation: 'Mealey KL, Burke NS. Identification of a nonsense mutation in feline ABCB1. J Vet Pharmacol Ther. 2015;38(5):429-433. doi:10.1111/jvp.12212', relevance: '貓 ABCB1 功能缺失突變的鑑定（近期實證）' },
    { type: 'journal', citation: 'Bates N, Chatterton J, Robbins C, et al. Lipid infusion in the management of poisoning: a report of 6 canine cases. Vet Rec. 2013;172(13):339.', relevance: '英國毒物中心 ILE 病例系列，確立 8 mL/kg/day 上限' },
    { type: 'web', citation: 'Washington State University Veterinary Clinical Pharmacology Lab — MDR1 Testing. https://vcpl.vetmed.wsu.edu/', relevance: '官方基因檢測單位（頰部拭子 USD 60、3-7 工作天）' },
    { type: 'web', citation: 'University of California Davis Veterinary Genetics Laboratory — MDR1. https://vgl.ucdavis.edu/test/mdr1', relevance: '北美第二大基因檢測中心（USD 70）' },
  ],
  is_current: true,
  created_at: '2026-06-07',
};

/** 以 Map 方式匯出，方便用 nodeId 快速查找 */
/** 犬貓肥胖症，疾病型（2026-06-15 新增節點）。臨床內容待 DVM 覆核。 */
const contentObesity: NodeContent = {
  id: 'CONTENT-IM-L3-031',
  node_id: 'IM-L3-031',
  version: 2,
  summary:
    '肥胖是犬貓最常見的營養性疾病，本質為一種伴隨慢性低度發炎的慢性疾病，定義為體重超過理想值約 30% 以上（九分制 BCS 8–9 分）。多數族群中約半數以上的成年犬貓過重或肥胖，且肥胖與骨關節炎、糖尿病（尤其貓）、呼吸道負擔及壽命縮短直接相關。治療核心為「處方減重飲食＋以理想體重計算熱量的限食＋運動與飼主配合」，而非單純少餵維持期飼料。',
  learning_objectives: [
    '說明肥胖為一種慢性低度發炎疾病，並引用 ≥30% 超出理想體重的共識定義',
    '正確執行九分制體態評分（BCS）與肌肉評分（MCS），並理解兩者各自獨立評估脂肪與肌肉量',
    '描述脂肪組織作為內分泌器官的角色（leptin、adiponectin、發炎細胞激素）與胰島素阻抗之關聯',
    '以 RER ＝ 70 ×（理想體重 kg）^0.75 計算減重熱量目標，並設定犬貓安全減重速率',
    '解釋為何應使用處方減重飲食而非少餵維持期飼料（營養素稀釋風險）',
    '在鑑別診斷中排除甲狀腺低下與腎上腺皮質機能亢進，並以非批判方式與飼主溝通',
  ],
  key_points: [
    '肥胖＝慢性低度發炎疾病，2018 年 AVMA（與 Global Pet Obesity Initiative）已正式認定其為疾病（共識定義：超過理想體重約 30%）',
    '九分制 BCS 理想為 5/9；每多 1 分約多 10-15% 體重（BCS 9 ≈ 超過理想 40%）；BCS 8–9 為肥胖表型',
    'BCS 評脂肪、MCS 評肌肉，兩者需分開評估；肥胖動物也可能合併嚴重肌肉流失',
    '脂肪組織分泌 leptin、TNF-α、IL-6 上升、adiponectin 下降，導致發炎與胰島素阻抗',
    'Kealy 2002 拉布拉多終生限食研究：精瘦組中位壽命顯著較長（約多 1.8 年）並延後骨關節炎發生',
    '熱量以「理想體重」計算 RER ＝ 70 ×（BWkg）^0.75，犬貓僅餵其 60–70%（待 DVM 依個案確認）',
    '安全減重速率：犬 1-2%/週、貓 0.5-2%/週（上限同犬）；肝脂質沉積主因是完全拒食/厭食（非控制飲食下的週減重率），關鍵是確保持續攝食',
    '減重藥（MTP 抑制劑 dirlotapide/mitratapide）皆已停售/撤銷，飲食＋運動仍為主軸',
  ],
  body: `# 犬貓肥胖症 (Canine & Feline Obesity)

## 一、定義與流行病學 (Definition & Epidemiology)

肥胖是一種**慢性疾病**，特徵為體脂過量到足以損害健康、縮短壽命，並伴隨**慢性低度全身性發炎**（meta-inflammation）。共識的工作定義為**超過理想體重約 30% 以上**（九分制 BCS 8–9 為肥胖表型、6–7 為過重表型）。

- **疾病認定**：2018 年 6 月，**AVMA 理事會背書 Global Pet Obesity Initiative 的立場聲明**，正式將犬貓肥胖認定為疾病，並採用「超過理想體重約 30%」之統一定義與 1–9 分 BCS 量表。（注意：此為 AVMA＋Global Pet Obesity Initiative，**非 WSAVA**；WSAVA 的貢獻是另一套「全球營養指引／工具包」，把體態與肌肉評分納入營養評估，即「第五項生命徵象」。勿混淆。）
- **盛行率**：Montoya 等 2025（Banfield，約 490 萬犬、130 萬貓）顯示成熟期犬約 50.1% 過重＋12.6% 肥胖、成熟期貓約 44.8% 過重＋21.7% 肥胖，貓的肥胖負擔更重。

## 二、體態評估工具 (Body Assessment)

- **九分制 BCS**：最具驗證、WSAVA 採用的量表。理想＝5/9（4-5 皆可接受）；每超過 1 分約等於多 10-15% 體重（body fat 每分約 +5%；BCS 9 ≈ 超過理想 40%、體脂 >40%）。原始驗證為 Laflamme 1997（犬 Canine Practice 22(4)、貓 Feline Practice，與 DEXA 對照）。
- **肌肉評分（MCS）**：**獨立於脂肪**評估肌肉量，觸診顳骨、肩胛、肋骨、腰椎、骨盆，分為正常／輕／中／重度肌肉流失。肥胖動物可同時有嚴重肌肉流失——兩者都要評。
- **形態測量／理想體重估計**：常由 BCS 回推（每超過 5 分以上 1 分 ≈ 多 10-15%）或以過去精瘦體重為基準。

## 三、病理機轉與後果 (Pathophysiology & Consequences)

脂肪組織是**活躍的內分泌器官**，分泌上百種脂肪激素。脂肪細胞肥大／缺氧後轉為促發炎分泌型態：**leptin↑、adiponectin↓**（犬貓證據最一致、最強），**TNF-α↑、IL-6↑**（多為脂肪組織/浸潤巨噬細胞來源，循環濃度較不穩定）→ 慢性低度發炎＋**胰島素阻抗**。⚠️ **CRP 有物種差異**：犬肥胖與 CRP 關聯不一致（部分研究反而下降），貓 CRP 僅為次要急性期蛋白（主要為 SAA、α1-酸性醣蛋白），故 CRP 不宜當作犬貓肥胖發炎的可靠指標。
相關／惡化之共病：**骨關節炎**（機械＋發炎）、**糖尿病**（尤其貓）、**呼吸道負擔／惡化 BOAS**、**下泌尿道疾病**、**腫瘤風險上升**、**壽命縮短**。

- **壽命里程碑證據**：Kealy 等 2002（JAVMA 220(9):1315-1320）——48 隻拉布拉多配對餵食、終生限食 25%，精瘦組中位壽命顯著較長（後續報告約多 1.8 年）並**延後包含骨關節炎在內的慢性病**發生。

## 四、病因與風險因子 (Etiology & Risk Factors)

絕育（代謝率下降、食慾上升）、中年、好發品種（拉布拉多、米格魯、可卡犬；混種／家貓）、室內低活動、**自由採食**、高熱量飲食／點心、飼主因素（低估、擬人化餵食）。**須排除的鑑別**：甲狀腺機能低下（犬）與腎上腺皮質機能亢進（庫欣），兩者皆可造成體重增加／腹圍變大而貌似單純肥胖。

## 五、管理 (Management)

- **處方減重飲食，而非「少餵維持期飼料」**：專門配方為**高蛋白**（保留瘦肉、增加飽足）、**增加纖維**（飽足、降能量密度）、**控制能量**，且營養素相對熱量密度提高，使病患在熱量赤字中仍營養充足。單純減量餵食維持期飼料會造成**營養素稀釋**——實證上最易不足的是微量營養素與特定胺基酸/脂肪酸（膽鹼、硒、甲硫胺酸、EPA/DHA、B 群），而**非蛋白質**（治療性減重飲食通常反而提高蛋白質密度）；此風險同樣適用於市售 OTC「體重管理」飼料（Gaylord 2018、German 2015）。
- **熱量計算**：RER ＝ **70 ×（BWkg）^0.75**（標準異速公式；線性近似 30×BW+70 僅適用約 2–45 kg）。以**理想（目標）體重**計算 RER，再餵其分數作為起始量：犬約 60–70%（部分指引以 80% 起始）、貓約 70–80%（起始「較不激進」而非更低）；未經獸醫營養師指導不應低於 70% RER。
- **安全減重速率**：犬 1–2%/週；**貓 0.5–2%/週（AAHA 建議範圍，上限同犬）**——臨床上飼主家貓實際多 <1%/週（為觀察值、非下限）。⚠️ **肝臟脂質沉積（hepatic lipidosis）的主因是完全拒食/自發性厭食造成的饑餓性負能量平衡，而非「控制飲食下的每週減重率」**——關鍵安全措施是確保貓持續攝食足量蛋白質與熱量、循序漸進並定期監測，而非把 2%/週當硬性上限。
- **非飲食面**：結構化運動（犬）、環境豐富化＋遊戲＋**益智／覓食餵食器**（貓）、定量分餐（不自由採食）、多寵分開餵食，以及**飼主配合定期量體重**（每 2–4 週）。
- **藥物輔助**：dirlotapide（Slentrol，2007 FDA 首個犬肥胖藥）、mitratapide（Yarvitan）為 MTP 抑制劑（減重主要來自局部腸道 MTP 抑制之飽足/食慾抑制約 90%、非脂肪吸收阻斷），曾有犬減重適應症，但**兩藥現皆已停售/撤回上市許可**（美國 Slentrol ~2013 停產、歐盟兩者撤回）。**飲食＋運動仍為主軸。**
- **復胖／維持**：達標後轉維持／輕量飼料，熱量設在體重穩定點略下方，並持續定期量體重——缺乏結構容易復胖。

## 六、預後、監測與溝通 (Prognosis, Monitoring & Communication)

結果**高度取決於飼主行為**；許多計畫失敗源於依從性不足而非生理因素。以**定期量體重＋BCS/MCS＋每週減重百分比**監測，偏離目標時調整熱量約 10–20%。溝通須**非批判**——把肥胖框定為醫療問題而非飼主過失，設定務實漸進目標、肯定每個小進步。

## 七、臨床爭議與知識空缺 (Controversies & Gaps)

| 議題 | 現況 | Evidence Level |
|------|------|---------------|
| 減重藥物角色 | dirlotapide/mitratapide 多已停售，飲食＋運動為主；新藥有限 | Level III |
| 最佳減重飲食巨量營養素比例 | 高蛋白＋高纖有共識，最佳比例仍研究中 | Level II |
| 貓肥胖與糖尿病可逆性 | 減重可改善胰島素敏感性、部分貓糖尿病可緩解 | Level II |

## 八、人醫借鑒 (Translational Insights)

| 人醫工具/概念 | 獸醫應用潛力 | 現況 |
|-------------|-------------|------|
| GLP-1 受體促效劑（semaglutide 等）| 犬貓減重之藥理新標的 | 人醫肥胖治療突破，獸醫尚無核准藥、研究早期 |
| 客觀體脂量化（DEXA、生物電阻抗）| 取代主觀 BCS 之精確體脂評估 | 人醫常規，獸醫多用於研究 |
| 肥胖為「慢性發炎性疾病」框架 | 以疾病（非飼主過失）框定，改善醫病溝通與依從性 | AVMA/GPOI 2018 已認定為疾病 |
| 行為經濟學/助推（nudge）飼主依從 | 結構化回診、量化點心、獎勵小進步 | 依從性為成敗關鍵，行為介入研究漸增 |

## 九、近期更新 (Recent Updates)

- **盛行率再確認**：Montoya 2025（Prev Vet Med，Banfield ~490 萬犬/~134 萬貓）示成熟期犬 50.1%+12.6%、貓 44.8%+21.7% 過重/肥胖，貓負擔更重、且盛行率於成熟期達峰。
- **貓減重速率去教條化**：AAHA 建議貓 0.5-2%/週（上限同犬）；肝脂質沉積主因是「完全拒食/厭食」而非控制飲食下的週減重率——關鍵是確保持續攝食。
- **營養素稀釋實證**：Gaylord 2018/German 2015 顯示限食下最易不足者為微量營養素（膽鹼、硒、B 群、EPA/DHA），非蛋白質；OTC 體重管理飼料亦有風險——支持使用治療性高密度減重飲食。
- **CRP 物種差異**：CRP 非犬貓肥胖發炎的可靠指標（犬關聯不一致、貓為次要急性期蛋白）；leptin↑/adiponectin↓ 才是最一致的變化。
- **減重藥退場**：MTP 抑制劑 dirlotapide/mitratapide 皆已停售/撤銷，飲食+運動仍為主軸；GLP-1 類為研究方向。
`,
  clinical_pearl:
    '減重熱量一定要用「理想體重」而非「目前體重」來計算 RER；同時，肥胖貓減重期間務必密集量體重，一旦每週減重超過約 2% 或出現厭食，應立即介入——過快、厭食的貓即是潛在的肝臟脂質沉積急症。',
  common_mistakes: [
    '只是少餵維持期飼料而非改用處方減重飼料，造成蛋白質與微量營養素相對不足（營養素稀釋）',
    '用「目前體重」而非「理想體重」計算熱量，導致限食不足、減重失敗',
    '未設定目標體重、也未定期回診量體重追蹤減重速率',
    '貓限食過快或讓貓厭食，引發肝臟脂質沉積',
    '計算熱量時忽略零食、點心與餐桌剩食，低估實際攝取',
  ],
  disease_data: {
    signalment:
      '好發於中年、已絕育之犬貓；犬以拉布拉多、米格魯、可卡犬等品種風險較高，貓以室內、活動量低之家貓常見；自由採食與高熱量點心為共同風險。',
    etiology:
      '能量攝取長期大於消耗。風險因子包含絕育（代謝率下降、食慾上升）、年齡、品種、室內低活動、自由採食、高熱量飲食與點心，以及飼主餵食行為與對體態的低估。',
    pathogenesis:
      '過量白色脂肪堆積使脂肪細胞肥大、缺氧，轉為促發炎分泌型態（leptin↑、adiponectin↓ 最一致；TNF-α、IL-6 傾向上升；CRP 有物種差異、非可靠指標），形成全身慢性低度發炎並導致胰島素阻抗，進而誘發或惡化多種共病。',
    clinical_signs: [
      { sign: '體重與 BCS 上升（8–9/9）', category: 'primary', description: '客觀體態評分達肥胖表型' },
      { sign: '肋骨、腰椎不易觸及、腰線消失、腹部下垂', category: 'primary', description: '脂肪堆積之理學特徵' },
      { sign: '運動耐受度下降、易喘、活動量減少', category: 'secondary', description: '心肺負擔增加與體能下降' },
      { sign: '理毛困難（尤其貓）、皮膚問題', category: 'secondary', description: '體型限制自我清潔' },
      { sign: '關節不適、跛行（合併骨關節炎時）', category: 'secondary', description: '體重加重關節負荷' },
      { sign: '合併疾病徵候（如糖尿病之多飲多尿）', category: 'secondary', description: '肥胖相關共病表現' },
    ],
    staging: null,
    differential_diagnosis: [
      { condition: '甲狀腺機能低下（犬）', key_differentiator: '體重增加伴嗜睡、皮毛問題、T4/TSH 異常' },
      { condition: '腎上腺皮質機能亢進（庫欣氏症）', key_differentiator: '腹部膨大為肝腫大/脂肪重分佈，伴 PU/PD、皮膚變化，內分泌試驗陽性' },
      { condition: '胰島素瘤或其他內分泌異常', key_differentiator: '低血糖發作等特異徵象，影像與生化鑑別' },
      { condition: '腹水或腹腔腫塊造成之腹部膨大（假性肥胖）', key_differentiator: 'BCS 其餘部位未必過重，影像可見積液/腫塊' },
      { condition: '妊娠（未絕育母畜）', key_differentiator: '生殖史，影像/超音波確認' },
    ],
    diagnostic_workup:
      '完整病史（飲食、點心、活動）＋體重、九分制 BCS、MCS；測量並記錄基準體重；必要時生化與內分泌檢查（T4／TSH、ACTH 刺激或低劑量 dexamethasone 抑制試驗）以排除甲低與庫欣；計算理想體重與目標熱量。',
    treatment_protocol:
      '採用處方減重飲食（高蛋白、增加纖維、控制能量）；以理想體重計算 RER ＝ 70 ×（BWkg）^0.75，犬餵 60–70%、貓約 70-80%（起始較不激進、不低於 70% RER）；搭配運動（犬）與環境豐富化、益智餵食器、定量分餐（貓）；每 2–4 週回診量體重並依減重速率微調熱量；達標後轉維持期飲食並持續追蹤防止復胖。【所有熱量與速率須由具執照獸醫師依個案確認】',
    prognosis:
      '減重可逆轉胰島素阻抗、改善關節負擔並延長壽命，預後良好，但高度取決於飼主長期配合度；多數失敗源於依從性不足而非生理因素，且停止管理後復胖常見。',
    monitoring:
      '定期量體重、計算每週減重百分比（犬 1–2%、貓 0.5–2%）、重新評分 BCS／MCS；偏離目標時調整熱量約 10–20%；貓需警覺「完全拒食/厭食」——此為肝臟脂質沉積的主要風險（非控制飲食下的週減重率）。',
    owner_communication:
      '以非批判方式說明肥胖是可治療的醫療問題而非飼主過失；設定務實、漸進的目標，量化點心熱量並納入總量，肯定每一次小進步以維持長期配合。',
  },
  diagnostic_data: null,
  procedure_data: null,
  visual_placeholders: [
    { position: '體態評估段落後', type: 'annotated_image', description: '九分制 BCS 與 MCS 圖解（犬貓）' },
    { position: '管理段落後', type: 'flowchart', description: '減重計畫流程：理想體重→RER→處方飲食→定期追蹤調整' },
  ],
  interactive_placeholders: [
    { position: '管理段落', type: 'calculator', description: 'RER／減重熱量計算器（輸入理想體重自動估算）' },
  ],
  drug_api_links: [],
  references: [
    { type: 'journal', citation: 'Kealy RD, Lawler DF, Ballam JM, et al. Effects of diet restriction on life span and age-related changes in dogs. J Am Vet Med Assoc. 2002;220(9):1315-1320. doi:10.2460/javma.2002.220.1315.', relevance: '經典終生研究：精瘦組中位壽命顯著較長（約多 1.8 年）並延後骨關節炎；證明維持理想體態可延壽（基礎里程碑）' },
    { type: 'journal', citation: 'Laflamme DP. Development and validation of a body condition score system for dogs / for cats. Canine Practice. 1997;22(4):10-15 / Feline Practice. 1997;25(5-6):13-18.', relevance: '九分制 BCS 原始開發與 DEXA 驗證來源，WSAVA 採用之標準（真實基礎文獻；Canine/Feline Practice 為 pre-DOI 期刊、Crossref 無 DOI 索引，卷期已由 v1 之 22(1) 更正為 22(4)）' },
    { type: 'journal', citation: 'Montoya M, Péron F, Hookey T, et al. Overweight and obese body condition in ~4.9 million dogs and ~1.3 million cats across the USA: prevalences by life stage. Prev Vet Med. 2025;235:106398. doi:10.1016/j.prevetmed.2024.106398.', relevance: '近期大規模流行病學：成熟期犬 50.1% 過重+12.6% 肥胖、貓 44.8%+21.7%，貓負擔更重' },
    { type: 'guideline', citation: 'Freeman L, Becvarova I, Cave N, et al. (WSAVA Nutritional Assessment Guidelines Task Force). WSAVA Nutritional Assessment Guidelines. J Small Anim Pract. 2011;52(7):385-396. doi:10.1111/j.1748-5827.2011.01079.x', relevance: '確立營養評估為第五項生命徵象，提供 BCS/MCS 標準工具與評分定義' },
    { type: 'journal', citation: 'Loftus JP, Wakshlag JJ. Canine and feline obesity: a review of pathophysiology, epidemiology, and clinical management. Vet Med (Auckl). 2014;6:49-60. doi:10.2147/VMRR.S40868.', relevance: '整合性綜述：脂肪內分泌與發炎機轉、RER 熱量計算、犬餵理想體重 RER 之 60–70%、貓保守限食避免肝脂質沉積' },
    { type: 'reference', citation: 'Global Pet Obesity Initiative Position Statement (Ward E, Churchill J, German AJ, et al.); endorsed by AVMA Board of Directors, June 2018.', relevance: '正式將犬貓肥胖認定為疾病、採用 ~30% 超出理想體重之統一定義（注意：AVMA＋GPOI，非 WSAVA）' },
    { type: 'journal', citation: 'Radin MJ, Sharkey LC, Holycross BJ. Adipokines: a review of biological and analytical principles and an update in dogs, cats, and horses. Vet Clin Pathol. 2009;38(2):136-156. doi:10.1111/j.1939-165X.2009.00133.x.', relevance: '詳述 leptin/adiponectin 與發炎細胞激素在犬貓之角色，支持脂肪為內分泌器官之病理基礎' },
  ],
  is_current: true,
  created_at: now,
};

/** 疫苗接種與預防醫學，治療/概念型（2026-06-15 新增節點）。臨床內容待 DVM 覆核；台灣法規須向農業部/防檢署查核。 */
const contentVaccination: NodeContent = {
  id: 'CONTENT-IM-L5-005',
  node_id: 'IM-L5-005',
  version: 2,
  summary:
    '犬貓疫苗接種以「核心 vs 非核心疫苗」為核心架構：核心疫苗（犬 CDV/CAV/CPV/狂犬病；貓 FPV/FHV-1/FCV/狂犬病）每隻動物都應施打，非核心疫苗依生活型態與地區風險評估。幼齡系列須在滿 16 週齡後完成最後一劑以突破母源抗體，成年核心 MLV 多採每 3 年追加，狂犬病依當地法規。現行準則為 WSAVA 2024（取代 2016），AAHA 2024 已將鉤端螺旋體列為核心。台灣自 2013 鼬獾狂犬病再現後狂犬病疫苗具法定重要性，且鉤端螺旋體與心絲蟲為本地流行病。',
  learning_objectives: [
    '區分犬與貓的核心與非核心疫苗，並說明分類依據（疾病嚴重度、分布、人畜共通風險）',
    '解釋母源抗體干擾與「易感空窗期」，並說明幼齡系列為何須在滿 16 週齡後完成最後一劑',
    '陳述成年動物核心疫苗轉為每 3 年追加的依據，以及狂犬病須依法規施打的原則',
    '說明抗體效價檢測（CDV/CAV/CPV；FPV）作為替代自動補種的用途與限制',
    '比較減毒活毒（MLV）、不活化、重組型疫苗特性，並說明貓選用非佐劑/重組疫苗以降低 FISS 風險',
    '辨識疫苗不良反應與貓注射部位肉瘤（FISS），並指出正確注射部位（四肢遠端/尾部）',
  ],
  key_points: [
    '核心疫苗適用所有犬貓；非核心疫苗依個別風險評估給予',
    '幼犬貓系列須施打到滿 16 週齡以上才完成，以突破不可預測的母源抗體',
    '系列完成後於 6 個月～1 歲追加一劑，確保未轉陰個體獲得保護',
    '成年核心 MLV 疫苗每 3 年追加即可，年年補打核心疫苗屬過度接種',
    'WSAVA 2016（Day 等）已由 WSAVA 2024（Squires 等）取代；AAHA 2022 經 2024 更新後將鉤端螺旋體列為核心',
    '核心 MLV 抗原有抗體即代表受保護，可用效價檢測替代自動補種；但不適用於鉤端螺旋體等，且不可取代法定狂犬病補種',
    '貓疫苗應打在四肢遠端或尾部、絕不打肩胛間，並優先選非佐劑/重組疫苗以降低 FISS 風險',
    '台灣：狂犬病自 2013 鼬獾再現後具法定重要性；鉤端螺旋體（人畜共通）與心絲蟲為本地流行病（法規細節須向農業部/防檢署查核）',
  ],
  body: `# 疫苗接種與預防醫學 (Vaccination & Preventive Medicine)

> ⚠️ 臨床內容須由具執照獸醫師覆核；台灣疫苗法規（狂犬病施打間隔/物種範圍）請向農業部動植物防疫檢疫署查核。

## 一、核心 vs 非核心疫苗架構 (Core vs Non-core)

核心/非核心是小動物疫苗學的組織原則：**核心疫苗**針對全球分布、可致死/具人畜共通風險之病原，不分生活型態每隻都應接種；**非核心疫苗**依個別風險（地理、生活型態、密度、暴露）評估給予。

**犬—核心**：犬瘟熱（CDV）、犬腺病毒（CAV-2，交叉保護 CAV-1 傳染性肝炎）、犬小病毒（CPV-2）、狂犬病（流行/法定地區為核心）。
**犬—非核心（風險導向）**：鉤端螺旋體、博德氏菌、副流感（CPiV）、犬流感（CIV）、萊姆病（地區性）。
- ⚠️ **更新**：**AAHA 2022 於 2024 年更新，將鉤端螺旋體廣泛改列為犬核心疫苗（≥12 週齡；不再僅限「戶外/生活型態」族群）**（反映地理擴散與人畜共通風險）。對台灣（鉤端螺旋體流行）尤其相關——應視為核心/強烈建議，而非傳統「非核心」。

**貓—核心**：貓泛白血球減少症（FPV）、貓皰疹病毒（FHV-1）、貓卡里西病毒（FCV）、狂犬病（流行/法定地區）。
**貓—非核心/情境**：貓白血病（**FeLV——2020 AAHA/AAFP 建議所有 <1 歲幼貓為核心**，成貓再依風險）、披衣菌、博德氏菌。

**現行準則**：WSAVA 2024（Squires 等，取代 2016 Day 等）、AAHA 2022 犬（含 2024 鉤端核心更新）、AAHA/AAFP 2020 貓。

## 二、幼齡系列與時機：母源抗體干擾 (Puppy/Kitten Series & MDA)

幼齡疫苗最重要的觀念是**母源抗體（MDA）干擾**：初乳抗體保護新生兒，同時**中和疫苗抗原**造成疫苗失效；MDA 消退速率因個體而異，存在一段「**易感空窗期**」——MDA 已不足以保護、卻仍足以阻斷疫苗。

- 因 MDA 消退時機不一，採**一系列**接種，使至少一劑落在 MDA 消退後。**最後一劑必須在滿 16 週齡（部分準則延至 16–20 週）以後**。
- 典型排程：**6–8 週**起始，**每 2–4 週一劑直到 ≥16 週**（如 8、12、16 週）。
- **6 個月（WSAVA 2024 偏好）或 6–12 個月追加一劑**收尾，補足幼齡未轉陰個體。

## 三、成年補種間隔：三年制 (Triennial)

完成適當幼齡系列＋約 12 個月追加的成年犬貓，**核心 MLV 疫苗（CDV/CAV/CPV、FPV）免疫持續期 ≥3 年**，故建議核心 MLV **每 3 年補種即可**，年年補打核心屬過度接種。
- **狂犬病**：間隔（1 年 vs 3 年劑型）依**當地法規與產品許可**，非單以免疫學決定。
- **非核心/不活化抗原**（鉤端、博德氏菌、CIV、披衣菌、FeLV）免疫持續期短，多需**每年**追加。

## 四、抗體效價檢測 (Titer Testing)

核心 MLV 抗原（犬 CDV/CAV/CPV、貓 FPV）**有抗體即與保護力高度相關**，正抗體可作為保護的可靠替代指標，故效價檢測可替代自動的三年補種。
- **用途**：確認幼齡系列後是否轉陰（尤其最後一劑 <16 週時）；判斷成年是否真需補種；管理收容所疫情；安撫擔心過度接種的飼主。
- **限制**：負/低效價未必代表不受保護（記憶/細胞免疫可能仍在），但實務上多視為「需補種」；效價僅對核心 MLV 抗原有效，**不適用**鉤端、博德氏菌等；**狂犬病效價不能豁免法定補種**（用於旅行/檢疫，如 FAVN/RNATT）。

## 五、疫苗技術類型 (Vaccine Technology)

| 類型 | 例子 | 意涵 |
|------|------|------|
| 減毒活毒（MLV） | CDV、CAV-2、CPV-2、FPV、FHV-1、FCV | 單一有效劑即可快速、長效免疫，較能克服低 MDA；**孕期/免疫抑制慎用**，理論上有回復毒力風險 |
| 不活化/killed | 傳統狂犬病、鉤端、披衣菌、部分 FeLV | 孕期/免疫抑制安全；常需 ≥2 劑啟動＋佐劑；**佐劑與貓 FISS 相關**、局部發炎較多 |
| 重組/載體 | 金絲雀痘載體狂犬病與 FeLV（貓）、重組 CDV | 非佐劑、兼具 MLV 級效力與 killed 安全性；**貓建議優先用以降低 FISS 風險** |

## 六、不良反應與安全 (Adverse Events & Safety)

- **第一型過敏/過敏性休克**（分鐘～數小時）：顏面/眼周水腫、蕁麻疹、嘔吐、虛脫、低血壓——視為急症（epinephrine ± 抗組織胺/類固醇）；有病史者下次預先給藥或分次施打（小型犬風險較高）。
- **自限性反應**：接種後嗜睡、短暫發燒、注射部位痠痛 24–48 小時，常見且良性。
- **貓注射部位肉瘤（FISS）**：注射部位產生的侵襲性軟組織肉瘤，歷史上與**佐劑型疫苗（狂犬病、FeLV）**相關。重點：
  - **注射在四肢盡量遠端**（膝/肘以下）或**尾部**，**絕不打肩胛間**——遠端發生肉瘤時可截肢根治。
  - 優先用**非佐劑/重組貓疫苗**。
  - **「3-2-1 法則」**：注射後腫塊持續 **>3 個月、>2 cm、或注射後 >1 個月仍在增大** → 切片/轉診。
  - **交叉連結**：FISS 之診斷/分期/廣切與腫瘤治療見 FISS 節點。

## 七、台灣在地考量 (Taiwan) ⚠️ 法規須向農業部/防檢署查核

- **狂犬病**：台灣曾約 52 年無家養肉食動物狂犬病，但 **2013 年於野生鼬獾再現**（2013/7 確認），逆轉長年自滿。**犬（貓）狂犬病疫苗在台具法定重要性**——施打間隔/物種範圍請依現行法規確認。臨床訊息：在台灣狂犬病為核心且具法定強制性，不可視為選配。
- **鉤端螺旋體**：台灣溫暖潮濕、鼠患、易淹水環境下**流行且人畜共通**，正呼應 2024 AAHA 將鉤端列為外出犬核心。
- **多貓家庭/收容所/TNR**：密度高 → FPV/FHV-1/FCV 與 **FeLV** 暴露壓力大，支持幼貓 FeLV 核心化與入所即接種。
- **心絲蟲（Dirofilaria immitis）**：亞熱帶多蚊環境下**流行**，全年預防是預防醫學的基石（與疫苗並行但獨立）。

## 八、廣義預防醫學 (Broader Preventive Medicine)

疫苗是健康計畫的一根支柱，其餘包括：**心絲蟲預防**（每月巨環內酯，台灣流行）、**腸道寄生蟲控制**（蛔/鉤/鞭蟲、絛蟲，多具人畜共通）、**外寄生蟲控制**（蚤/蜱——壁蝨媒介疾病＋跳蚤過敏）、**定期健康檢查**（即使當年無核心疫苗到期，年度回診仍是關鍵接觸點——「年度健檢，而非年度打針」），以及營養、牙科與生殖諮詢。

## 九、人醫借鑒 (Translational Insights)

| 人醫工具/概念 | 獸醫應用潛力 | 現況 |
|-------------|-------------|------|
| 血清保護相關性（serologic correlates of protection）/ 抗體效價 | 核心 MLV 抗原以抗體效價替代自動補種 | 人醫疫苗學成熟概念，獸醫犬 CDV/CAV/CPV、貓 FPV 已採用 |
| 免疫持續期（DOI）研究驅動延長補種間隔 | 由「每年」改「每 3 年」核心補種 | 人醫長 DOI 概念，獸醫挑戰試驗支持三年制 |
| 重組/載體與 mRNA 疫苗平台 | 非佐劑貓疫苗降 FISS；新世代犬貓疫苗 | 人醫 mRNA/載體成熟，獸醫金絲雀痘載體已上市、mRNA 研發中 |
| 疫苗藥物警戒與「過度接種」溝通 | 不良反應通報系統、循證衛教對抗疫苗猶豫 | 人醫 pharmacovigilance／疫苗信心框架可借鏡 |

## 十、臨床爭議與知識空缺 (Controversies & Knowledge Gaps)

| 爭議議題 | 現況 | Evidence Level |
|---------|------|---------------|
| 核心三年制 vs 年年補打 | 三年制有挑戰試驗與 DOI 支持，但臨床/飼主習慣仍年打 | Level I-II |
| 效價檢測 vs 自動補種 | 對核心 MLV 與保護相關性高；負效價判讀、成本/可近性與適用範圍仍爭議 | Level II |
| 鉤端螺旋體核心化範圍 | AAHA 2024 廣泛列核心；實際施打受地區流行與不良反應顧慮影響 | Level III |
| 貓 FeLV 核心化（幼貓 vs 生活型態） | 2020 AAHA/AAFP 建議 <1 歲幼貓核心，成貓依風險；長期成本效益待評 | Level III |
| 非佐劑/重組貓疫苗是否真降 FISS | 生物學合理、趨勢採用，但風險降低未經大型流病確證 | Level III |

## 十一、近期實證更新 (Recent Evidence Updates)

### 全球準則世代更替（WSAVA 2024）
WSAVA 2024（Squires）取代 2016（Day），重申核心/非核心架構、幼齡系列末劑 ≥16 週、核心 MLV 三年制與效價檢測定位，為現行全球通用依據。

### 鉤端螺旋體核心化（AAHA 2024）
AAHA 2022 犬準則之 2024 更新將鉤端螺旋體廣泛改列核心（反映地理擴散與人畜共通風險）；對台灣（鉤端流行）尤其切題。

### 貓疫苗：FeLV 幼貓核心與非佐劑優先
2020 AAHA/AAFP 將 FeLV 列為 <1 歲幼貓核心；並推動非佐劑/重組疫苗 + 遠端/尾部注射以降 FISS（ABCD 2015；見 FISS 節點）。

### 從「年度打針」到「年度健檢」
預防醫學重心由疫苗轉向整體健康計畫——心絲蟲/腸道/外寄生蟲控制、年度健檢接觸點、營養與牙科；即使當年無核心疫苗到期仍應年度評估。
`,
  clinical_pearl:
    '核心 MLV 抗原（犬 CDV/CAV/CPV；貓 FPV）的抗體效價是「是否受保護」的可靠替代指標——但僅限這些抗原。效價無法用於判斷鉤端螺旋體/博德氏菌是否需補打，也絕不能用來規避法定的狂犬病補種。',
  common_mistakes: [
    '幼犬貓系列在 16 週齡前就停止——母源抗體可能仍在阻斷，是犬小病毒/貓泛白血球減少症突破感染的首要原因',
    '在貓的肩胛間注射——一旦發生 FISS，會把原本可手術切除的遠端腫瘤變成幾乎致命的軀幹腫瘤；應打四肢遠端或尾部',
    '健康成犬貓每年補打核心疫苗——屬過度接種，核心 MLV 應為每 3 年',
    '把抗體效價當作可跳過法定狂犬病補種的理由——效價不能凌駕法規',
    '以「室內、低風險」為由在台灣略過狂犬病或鉤端螺旋體疫苗——兩者在台灣分別具法定重要性與本地流行性',
  ],
  disease_data: null,
  diagnostic_data: null,
  procedure_data: null,
  visual_placeholders: [
    { position: '核心/非核心段落後', type: 'comparison_table', description: '犬貓核心 vs 非核心疫苗對照表（含 2024 鉤端核心更新）' },
    { position: '幼齡系列段落後', type: 'timeline', description: '幼犬貓疫苗排程時間軸（6–8 週起至 ≥16 週 + 6–12 月追加）' },
  ],
  interactive_placeholders: [],
  drug_api_links: [],
  references: [
    { type: 'guideline', citation: 'Squires RA, Crawford C, Marcondes M, Whitley N. 2024 guidelines for the vaccination of dogs and cats (WSAVA Vaccination Guidelines Group). J Small Anim Pract. 2024;65(5):277-316. doi:10.1111/jsap.13718.', relevance: '現行全球通用犬貓疫苗準則（取代 2016 Day 版）：核心/非核心、幼齡系列、每 3 年追加' },
    { type: 'guideline', citation: 'Day MJ, Horzinek MC, Schultz RD, Squires RA. WSAVA Guidelines for the vaccination of dogs and cats. J Small Anim Pract. 2016;57(1):E1-E45. doi:10.1111/jsap.2_12431.', relevance: '奠基性 WSAVA 2016 準則（已被 2024 取代，仍為重要概念參考）：核心/非核心與母源抗體干擾概念' },
    { type: 'guideline', citation: 'Ellis J, Marziani E, Aziz C, et al. 2022 AAHA Canine Vaccination Guidelines (2024 Update). J Am Anim Hosp Assoc. 2024;60(6). doi:10.5326/jaaha-ms-7468.', relevance: '美國 AAHA 犬疫苗準則 2024 更新：將鉤端螺旋體廣泛列核心，對台灣（鉤端流行）高度相關' },
    { type: 'guideline', citation: 'Stone AES, Brummet GO, Carozza EM, et al. 2020 AAHA/AAFP Feline Vaccination Guidelines. J Feline Med Surg. 2020;22(9):813-830. doi:10.1177/1098612X20941784.', relevance: '現行貓疫苗準則：貓核心疫苗、幼貓 FeLV 核心建議、FISS 與注射部位' },
    { type: 'guideline', citation: 'Hartmann K, Day MJ, Thiry E, et al. Feline injection-site sarcoma: ABCD guidelines on prevention and management. J Feline Med Surg. 2015;17(7):606-613. doi:10.1177/1098612X15588451.', relevance: '貓注射部位肉瘤（FISS）預防與處置：四肢遠端/尾部注射、非佐劑優先、3-2-1 追蹤' },
    { type: 'journal', citation: 'Hsu CH, Chu YH, Wang CY, et al. Public Health Responses to Reemergence of Animal Rabies, Taiwan, July 16–December 28, 2013. PLOS ONE. 2015;10(7):e0132160. doi:10.1371/journal.pone.0132160.', relevance: '台灣 2013 鼬獾狂犬病再現紀錄，支持台灣狂犬病疫苗的法定與臨床重要性（法規細節仍須查核）' },
  ],
  is_current: true,
  created_at: now,
};

/** 抗生素合理用藥（抗菌藥物管理），治療/概念型（2026-06-15 新增節點）。臨床內容待 DVM 覆核；台灣法規須向農業部查核。 */
const contentAntimicrobialStewardship: NodeContent = {
  id: 'CONTENT-IM-L5-006',
  node_id: 'IM-L5-006',
  version: 2,
  summary:
    '抗菌藥物管理（Antimicrobial Stewardship）是一套跨越疾病的用藥原則，目標是在對的時機、用對的藥、用對的劑量與療程，以減緩抗藥性（AMR）這個 One Health 危機。小動物臨床中 MRSP、ESBL 大腸桿菌等多重抗藥性病原已普遍，每一次不必要的抗生素都會加速抗藥性篩選。核心做法：先判斷是否真的需要抗生素、優先送培養與藥敏（C&S）、選最窄效有效藥、用最短有效療程，並把氟喹諾酮與第三/四代頭孢等高優先重要抗生素（HPCIA）留作後線。',
  learning_objectives: [
    '說明抗藥性為何是 One Health 危機，並舉出三種小動物重要多重抗藥性病原（MRSP、ESBL/碳青黴烯抗藥性腸桿菌、MRSA）',
    '區分主要 ISCAID 各系統指引（泌尿道 2019、犬膿皮症 2025 取代 2014、呼吸道 2017）的適用情境',
    '解釋 WHO/WOAH 抗生素重要性分級，說明為何氟喹諾酮與第三/四代頭孢應被保留而非當第一線',
    '運用實務決策流程判斷個案是否需要抗生素，以及何時應在投藥前先送 C&S',
    '依現行證據選最窄效藥與最短有效療程（如單純性膀胱炎 3–5 天），並於藥敏後降階治療',
    '辨識常見濫用驅動因素，並對表淺膿皮症/外耳炎優先採局部治療以減少全身性抗生素',
  ],
  key_points: [
    '抗生素治療的是「細菌感染」，不是發炎、過敏或發燒；很多病毒性或自限性疾病根本不需要抗生素',
    'MRSP 是犬膿皮症/外耳炎最主要致病菌，常為多重抗藥，且有犬↔飼主互傳紀錄',
    'ISCAID 指引為小動物用藥實質標準：泌尿道（Weese 2019）、犬膿皮症（Loeffler 2025 取代 Hillier 2014）、呼吸道（Lappin 2017）',
    '高優先重要抗生素（HPCIA：氟喹諾酮、第三/四代頭孢、colistin 等）不可當預防或反射性第一線，使用前最好有藥敏依據',
    '療程趨勢「越短越好」：單純性膀胱炎 3–5 天即可（ISCAID 2019），取代舊的 10–14 天',
    '表淺膿皮症與外耳炎應局部優先，能不全身用藥就不用（ISCAID 2025）',
    '投藥前先做細胞學與培養藥敏（尤其復發、難治、懷疑多重抗藥、要動用 HPCIA 時）；MIC 對照 CLSI VET 斷點判讀，MIC 低不等於更有效',
    '乾淨手術的外科預防只需術前單次達組織濃度，術後一般不需延長給藥',
  ],
  body: `# 抗生素合理用藥（抗菌藥物管理）(Antimicrobial Stewardship)

> ⚠️ 臨床內容（藥物選擇、劑量、療程）須由具執照獸醫師覆核；台灣抗生素處方/管制法規請向農業部查核。

## 一、為什麼需要管理 (Why Stewardship Matters)

- **AMR 是 One Health 危機**：抗藥基因與抗藥菌在人、動物與共享環境間流動；小動物臨床用藥造成的選擇壓力會貢獻到這個共享池，人寵密切接觸是已知傳播途徑。
- **多重抗藥病原已在小動物立足**：
  - **MRSP**（甲氧西林抗藥性 *Staphylococcus pseudintermedius*）：自 ~2006 全球株系擴散，為犬膿皮症/外耳炎主因，常多重抗藥（β-lactam、氟喹諾酮、macrolide…），口服選項所剩無幾；有犬↔飼主互傳紀錄。
  - **ESBL／碳青黴烯抗藥性腸桿菌**（尤其大腸桿菌）：在小動物 UTI 日益常見，基因藉可移動元件擴散。
  - **MRSA**：主要為人的菌，寵物可由人取得（reverse zoonosis）並帶回傳人，對獸醫人員與免疫低下飼主是真實風險。
- **與用藥的關連**：廣效與高優先藥物、不必要療程、錯誤療程都加速抗藥；**減少不必要使用是臨床最可控的槓桿**。

## 二、核心原則與框架 (Principles & Frameworks)

**ISCAID 各系統指引**（小動物實質標準）：
- 泌尿道感染：Weese 等 2019，*Vet J* 247:8–25（修訂 2011 版）。
- 犬表淺細菌性毛囊炎/膿皮症：Hillier 等 2014（*Vet Dermatol* 25(3)）——奠基但已被 **Loeffler 等 2025（*Vet Dermatol* 36(3):234–282）取代**；新版強調投藥前細胞學、表面/表淺膿皮症局部優先，並更新療程與藥物。
- 呼吸道疾病：Lappin 等 2017，*JVIM* 31(2):279–294。

**實務工具**：BSAVA/SAMSoc **「PROTECT ME」**（負責任用藥海報/口訣，含「無需抗生素」溝通表單）；WSAVA/FECAVA 推廣 ISCAID 指引。

**WHO/WOAH 重要性分級——保留最高層級**：
- WHO 的最高優先重要抗生素（HPCIA）含**氟喹諾酮、第三/四代頭孢、colistin（多黏菌素）、macrolide** 等。
- WOAH《獸醫重要抗生素清單》（2025 版）分級獸用藥；氟喹諾酮與三/四代頭孢於人醫與獸醫皆為關鍵重要。
- **核心原則**：HPCIA 不可用於預防或反射性第一線，使用應由 **C&S** 引導。

## 三、實務決策流程 (Decision Framework)

1. **這隻病患真的需要抗生素嗎？** 許多情況（病毒、自限、發炎/過敏、污染/定殖）**不需要**。抗生素治細菌感染，不治發炎或發燒本身。
2. **投藥前送 C&S** 的時機：復發/難治、曾用過抗生素、疑多重抗藥、嚴重/深部感染、或要動用 HPCIA。以 **CLSI VET 斷點**判讀（MIC vs 部位/菌種斷點 → S/I/R）；MIC 低不代表更敏感。
3. **經驗性選藥**：依症候群與當地抗藥型態，選最窄效有效藥；正確劑量、間隔、最短有效療程；藥敏回來後**降階（de-escalation）**至最窄效。
4. **療程——越短越好**：如單純散發性膀胱炎 **3–5 天**（ISCAID 2019）取代舊 10–14 天；治到臨床緩解、不用任意長療程。
5. **局部優先**：表淺膿皮症與外耳炎用 chlorhexidine/局部抗菌，能完全避免全身性抗生素就避免（ISCAID 2025）。

[圖片:抗生素使用決策流程——需要嗎？→ 投藥前 C&S → 最窄效有效藥 → 最短有效療程 → 藥敏後降階]

## 四、常見濫用驅動 (Drivers of Misuse)

預防性用藥過度（尤其術後無indication延長）、把定殖/污染當感染治療、飼主壓力/「以防萬一」、療程錯誤（太長；或太短復發）、復發難治卻跳過 C&S、反射性使用廣效/長效便利藥（如 cefovecin、氟喹諾酮）。

## 五、高價值規則 (High-value Rules)

- **氟喹諾酮、第三代頭孢不可當反射性第一線**——保留給有藥敏依據、無更窄選項者。
- **多數單純急性腹瀉不需抗生素**（常自限，抗生素反而惡化菌叢失衡）——保留給敗血/全身徵象或確認特定病原。
- **未併發的犬咳（kennel cough）**多為病毒/自限，多數不需抗生素（ISCAID 2017）。
- **局部/表淺膿皮症 → 局部治療優先**（ISCAID 2025）。
- **外科預防**：乾淨手術只需**術前單次**於切皮時達組織濃度即可，乾淨/乾淨污染手術一般不需術後延長。

## 六、台灣在地 (Taiwan) ⚠️ 法規須向農業部查核

- 區域上歷史性**抗生素取得較易、經驗性處方文化**，小動物**多重抗藥盛行是真實隱憂**。某區域資料報告台灣犬貓 **ESBL 大腸桿菌約 22.8%**（單一研究數字，須以現行在地監測查證）。
- 實務意涵：在多重抗藥盛行、經驗猜測較常失準的環境，**C&S 導向治療尤其重要**。
- 現行處方限定/管制獸用抗生素清單/調劑規定，**須對照農業部現行法規**，勿當定論直接教學。

## 七、臨床要訣與常見錯誤

見 key_points 與 common_mistakes。最有力的管理介入常只要五分鐘：**先細胞學、再培養、最後才考慮抗生素**——膿皮症抹片看到球菌，往往就足以導向「只用局部抗菌」而省下整個全身性療程。

## 八、臨床爭議與知識空缺 (Controversies & Knowledge Gaps)

| 爭議議題 | 現況 | Evidence Level |
|---------|------|---------------|
| 最佳療程長度（「越短越好」但多短才安全） | 單純性膀胱炎 3-5 天已有證據；多數適應症缺前瞻最短療程數據，傾向「治到臨床緩解即停」 | Level II |
| 生物標記導向用藥（犬 CRP、procalcitonin） | 可能輔助「要不要開／何時停」抗生素，但獸醫尚未常規化、切點未定 | Level III |
| MRSP 膿皮症純局部治療的可行性 | 表淺/表面膿皮症局部優先（chlorhexidine）已獲 ISCAID 2025 支持、可避全身性抗生素；深部仍需系統性 | Level II |
| 急性（非出血）腹瀉是否用 metronidazole | 越來越多證據顯示無臨床益處且擾動核心菌叢 → 不建議常規使用 | Level II |
| 無症狀菌尿是否治療 | ISCAID 不建議常規治療多數無症狀菌尿 | Level II |

## 九、近期實證更新 (Recent Evidence)

- **膿皮症「局部優先」成為現行標準**：ISCAID 2025 犬膿皮症指引（Loeffler 2025，取代 Hillier 2014）強調投藥前細胞學、**表淺/表面膿皮症以局部抗菌為第一線**、保留全身性抗生素——直接減少 HPCIA 與全身用量。
- **急性腹瀉不該反射開抗生素**：近期研究顯示 metronidazole 對犬急性腹瀉**無臨床益處、且擾動核心腸道菌叢**（Stübing 2024 vs 合生元；Ellis 2023 回顧）——多數非出血性急性腹瀉應避免抗生素、優先支持療法/合生元。
- **管理介入確實能降低用量**：抗菌藥物管理介入（指引＋稽核回饋）可改變獸醫處方行為、減少不必要與廣效抗生素使用（Walker 2022）——證明 stewardship 不只是口號。
- **國際分級持續收緊**：WOAH（2025）與 WHO（2024）重要性清單持續把**氟喹諾酮、第三/四代頭孢**列為最高優先、應保留；歐洲 ENOVAT 等網絡推動實證化的抗菌治療指引。

> 臨床內容與藥物劑量需獸醫師依現行仿單與指引核對；台灣抗生素處方/管制法規請向農業部查核；本節點為 AI 接地生成，停於 review 狀態待 DVM 簽核。
`,
  clinical_pearl:
    '最有效的管理介入往往只要五分鐘：投藥前先做院內細胞學。膿皮症抹片看到球菌，常常就足以把治療導向「只用局部抗菌」而省下一整個療程的全身性抗生素——先細胞學、再培養、最後才考慮抗生素。',
  common_mistakes: [
    '把「定殖／污染」當「感染」治療（例如無症狀或採檢污染的陽性培養也開藥）',
    '反射性使用廣效或長效便利藥（如 cefovecin、氟喹諾酮）當第一線，未保留 HPCIA',
    '復發或難治個案仍跳過培養藥敏，憑經驗一直換藥',
    '療程開太長（或太短導致復發）；未依新證據縮短療程或「好了就停」',
    '對單純急性腹瀉、未併發的犬咳（kennel cough）等多半自限的情況常規開抗生素',
  ],
  disease_data: null,
  diagnostic_data: null,
  procedure_data: null,
  visual_placeholders: [
    { position: '決策流程段落後', type: 'flowchart', description: '抗生素使用決策流程：需要嗎？→ C&S → 最窄效 → 最短療程 → 降階' },
    { position: '重要性分級段落後', type: 'comparison_table', description: 'WHO/WOAH 抗生素重要性分級與 HPCIA 保留清單' },
  ],
  interactive_placeholders: [],
  drug_api_links: [],
  references: [
    { type: 'guideline', citation: 'Weese JS, Blondeau J, Boothe D, et al. ISCAID guidelines for the diagnosis and management of bacterial urinary tract infections in dogs and cats. Vet J. 2019;247:8-25. doi:10.1016/j.tvjl.2019.02.008.', relevance: '小動物 UTI 用藥實質標準；確立單純性膀胱炎 3–5 天短療程與 C&S 導向' },
    { type: 'guideline', citation: 'Loeffler A, Cain CL, Ferrer L, et al. Antimicrobial use guidelines for canine pyoderma by ISCAID. Vet Dermatol. 2025;36(3):234-282. doi:10.1111/vde.13342.', relevance: '2025 最新犬膿皮症指引（取代 2014 版）：投藥前細胞學、表淺膿皮症局部優先、更新療程/藥物' },
    { type: 'guideline', citation: 'Hillier A, Lloyd DH, Weese JS, et al. Guidelines for the diagnosis and antimicrobial therapy of canine superficial bacterial folliculitis (ISCAID). Vet Dermatol. 2014;25(3):163-e43. doi:10.1111/vde.12118.', relevance: '膿皮症抗生素分層用藥奠基性指引（基礎文獻，已由 Loeffler 2025 取代）' },
    { type: 'guideline', citation: 'Lappin MR, Blondeau J, Boothe D, et al. Antimicrobial use Guidelines for Treatment of Respiratory Tract Disease in Dogs and Cats (ISCAID). J Vet Intern Med. 2017;31(2):279-294. doi:10.1111/jvim.14627.', relevance: '呼吸道用藥指引；支持多數未併發犬咳/上呼吸道為自限、不需常規抗生素' },
    { type: 'guideline', citation: 'World Organisation for Animal Health (WOAH/OIE). List of Antimicrobial Agents of Veterinary Importance, 2025 ed.; cf. WHO Medically Important Antimicrobials, 2024.', relevance: '國際抗生素重要性分級；氟喹諾酮與三/四代頭孢屬最高優先，應保留、不可當預防或第一線' },
    { type: 'reference', citation: 'BSAVA/SAMSoc Guide to Responsible Use of Antibacterials: PROTECT ME. PROTECT 2012; PROTECT ME 2018; updated 2023/2024.', relevance: '實務層級負責任用藥工具與口訣（含「無需抗生素」溝通表單），可落地為診所管理政策' },
    { type: 'journal', citation: 'van Duijkeren E, Catry B, Greko C, et al. Review on methicillin-resistant Staphylococcus pseudintermedius. J Antimicrob Chemother. 2011;66(12):2705-2714. doi:10.1093/jac/dkr367.', relevance: 'MRSP 流行病學與多重抗藥性代表性綜述，說明小動物多重抗藥葡萄球菌興起與人畜共通風險' },
    { type: 'journal', citation: 'Stübing H, Suchodolski JS, Reisinger A, Werner M, et al. "The Effect of Metronidazole versus a Synbiotic on Clinical Course and Core Intestinal Microbiota in Dogs with Acute Diarrhea." Vet Sci. 2024;11(5):197. doi:10.3390/vetsci11050197', relevance: '急性腹瀉 metronidazole vs 合生元：無臨床益處且擾動核心菌叢（支持不反射用抗生素）' },
    { type: 'journal', citation: 'Ellis C, Odunayo A, Tolbert MK. "The use of metronidazole in acute diarrhea in dogs: a narrative review." Top Companion Anim Med. 2023;56-57:100824. doi:10.1016/j.tcam.2023.100824', relevance: '犬急性腹瀉 metronidazole 使用回顧（多數不需）' },
    { type: 'journal', citation: 'Walker B, Sánchez-Vizcaíno F, Barker EN. "Effect of an antimicrobial stewardship intervention on the prescribing behaviours of companion animal veterinarians: A pre-post study." Vet Rec. 2022;190(12):e1485. doi:10.1002/vetr.1485', relevance: '抗菌藥物管理介入確實減少不必要/廣效處方（stewardship 有效）' },
  ],
  is_current: true,
  created_at: now,
};

/** 高血鈣診斷工作流程，L4 診斷型（2026-06-27 新增；review #1/#2 揪出的 IM 核心「以症狀為導向」缺口）。臨床內容待 DVM 覆核。 */
const contentHypercalcemiaWorkup: NodeContent = {
  id: 'CONTENT-IM-L4-006',
  node_id: 'IM-L4-006',
  version: 2,
  summary: '高血鈣常被偶然發現，卻可能指向嚴重疾病。第一步永遠是「以離子鈣（iCa）確認」——總鈣受白蛋白、酸鹼、脂血影響，犬的校正公式不可靠。確認後依「先腫瘤、後內分泌、再中毒/腎」的系統性鑑別（犬：淋巴瘤/肛囊腺癌/原發性副甲狀腺亢進/愛迪生氏症/腎病/維生素 D 中毒/肉芽腫；貓：特發性高血鈣最常見）。關鍵工具是「高血鈣套組」（iCa+PTH+PTHrP+維生素 D）。鐵則：診斷未明前不要給類固醇（會溶解並掩蓋淋巴瘤）。',
  learning_objectives: [
    '說明為何高血鈣必須以離子鈣（iCa）確認、總鈣與校正公式的侷限',
    '運用系統性鑑別（腫瘤-內分泌-中毒-腎）建立高血鈣的鑑別清單',
    '判讀高血鈣套組（iCa/PTH/PTHrP/維生素 D）以區分原發性副甲狀腺亢進與惡性高血鈣',
    '辨識犬貓高血鈣最常見病因的差異（犬腫瘤為主、貓特發性最常見）',
    '制定症狀性嚴重高血鈣的急診處置並避免「未診斷先給類固醇」的陷阱',
  ],
  key_points: [
    '第一步＝以離子鈣（iCa）確認：總鈣受白蛋白/酸鹼/脂血影響，犬的校正/預測公式不可靠',
    '犬最常見病理性病因：腫瘤（淋巴瘤、肛門囊腺癌、多發性骨髓瘤＝PTHrP 介導的惡性高血鈣）',
    '其他犬病因：原發性副甲狀腺亢進、愛迪生氏症、慢性腎病、維生素 D 中毒、肉芽腫病',
    '貓最常見＝特發性高血鈣（IHC），多為慢性、常合併 CaOx 結石',
    '套組判讀：原發性副甲狀腺亢進＝iCa↑＋PTH 不當地正常/升高；惡性高血鈣＝PTH 受抑＋PTHrP↑',
    'Ca×P 乘積 > 60-70 → 軟組織/腎臟礦化、AKI 風險；慢性高血鈣→CaOx 結石、PU/PD',
    '🔴 鐵則：診斷未明前勿給糖皮質素——會溶解並掩蓋淋巴瘤、毀掉診斷',
    '症狀性嚴重高血鈣急診：0.9% 食鹽水利尿（補足容量後 ± furosemide）、雙磷酸鹽（pamidronate IV；貓 IHC 用 alendronate PO）',
  ],
  body: `# 高血鈣診斷工作流程 (Approach to Hypercalcemia)

## 一、檢查原理與適應症 (Principles & Indications)

高血鈣常是健檢或其他原因抽血時偶然發現，但它可能是淋巴瘤、肛囊腺癌、原發性副甲狀腺亢進或愛迪生氏症的第一個線索——**不能當「順便的數字」放過**。本節是「以異常為導向」的診斷工作流程。

### 第一步：以離子鈣確認（最關鍵）
- **總鈣（tCa）會騙人**：受白蛋白、酸鹼狀態、脂血、溶血影響；**犬的「校正鈣」公式不可靠**、不應用來決策（Lebastard 2021）。
- **離子鈣（iCa）才是生物活性、診斷標準**：厭氧採血、盡快測定。先確認「真的有高血鈣」再往下查。

### 適應症
| 情境 | 為何要走高血鈣工作流程 |
|------|----------------------|
| 偶然發現 tCa 升高 | 先 iCa 確認真偽 |
| PU/PD、厭食、嘔吐、虛弱 | 高血鈣為可逆病因之一 |
| CaOx 尿石、反覆泌尿結石 | 慢性高血鈣（尤其貓 IHC） |
| 已知腫瘤（淋巴瘤/肛囊腺癌） | 監測惡性高血鈣 |
| 不明虛脫/低血壓 | 警覺愛迪生氏症 |

## 二、判讀要點 (Interpretation)

### 系統性鑑別（先腫瘤、後內分泌、再中毒/腎）
犬最重要的是**腫瘤**：

| 類別 | 病因 | 機轉/線索 |
|------|------|----------|
| **腫瘤（犬最常見病理性）** | 淋巴瘤、**肛門囊腺癌（ASAC）**、多發性骨髓瘤、其他癌 | 惡性高血鈣（HHM）＝PTHrP 介導；查肛門腺、淋巴結 |
| 原發性副甲狀腺亢進（PHPT） | 副甲狀腺腺瘤 | iCa↑＋PTH 不當正常/升高；老年犬、頸部超音波 |
| **愛迪生氏症** | hypoadrenocorticism | 常可逆！查 Na:K、basal cortisol/ACTH stim |
| 腎病 | CKD/AKI | Ca-P 失調；iCa 可能反而低或正常 |
| 維生素 D 中毒 | 膽鈣化醇鼠藥、calcipotriene 乾癬藥膏、植物 | 高血磷＋高血鈣；毒物史 |
| 肉芽腫病 | 黴菌（芽生菌/組織漿菌） | 1,25-vit D 增生 |
| 特發性（**貓最常見**） | feline IHC | 慢性、常 CaOx 結石、排除性診斷 |

### 高血鈣套組（iCa + PTH + PTHrP + 維生素 D 代謝物）
這是區分機轉的關鍵：

| 診斷 | iCa | PTH | PTHrP |
|------|-----|-----|-------|
| 原發性副甲狀腺亢進 | ↑ | **不當地正常或升高** | 低/陰性 |
| 惡性高血鈣（HHM） | ↑ | **受抑（低）** | **升高** |
| 維生素 D 中毒 | ↑ | 受抑 | 陰性（查 25-OH-D/calcitriol） |

> 註：iCa:P 比值近期被研究用於氮血症犬預測腫瘤（McDaniel 2023）；惟為輔助、非取代套組。

### 診斷流程
1. **iCa 確認** → 2. 病史/理學（肛門腺指診、淋巴結、毒物/藥物、品種年齡）→ 3. 最小資料庫（CBC/生化含磷/UA）→ 4. **高血鈣套組**（iCa/PTH/PTHrP/vit D）→ 5. 影像（胸腹 X 光/超音波找腫瘤、頸部超音波找副甲狀腺）→ 6. 特異檢查（ACTH stim 查愛迪生、淋巴結/骨髓 FNA）。

[圖片:高血鈣診斷決策樹——iCa 確認 → 套組（PTH/PTHrP）分流 → 腫瘤/PHPT/中毒/愛迪生]

## 三、常見陷阱 (Pitfalls)

- **🔴 診斷未明前給類固醇**：糖皮質素會降鈣，但**會溶解並掩蓋淋巴瘤**——抽完套組、找完病因前**絕對不給**。最嚴重的陷阱。
- **只看總鈣、用校正公式**：犬校正鈣不可靠，務必 iCa 確認；脂血/溶血/久放都會干擾。
- **漏做肛門腺指診**：肛囊腺癌是犬惡性高血鈣常見來源，易被漏。
- **忘了愛迪生氏症**：高血鈣＋低血鈉/高血鉀＋虛脫，是「可逆」病因，別只往腫瘤想。
- **忽略 Ca×P 乘積**：> 60-70 有軟組織/腎礦化與 AKI 風險，需積極降鈣。

## 四、人醫借鑒 (Translational Insights)

| 人醫工具/概念 | 獸醫應用潛力 | 現況 |
|-------------|-------------|------|
| 術中即時 PTH 監測 | 犬 PHPT 副甲狀腺切除的即時確認 | 人醫常規，獸醫送外部實驗室為主 |
| 頸部超音波/核醫定位副甲狀腺 | 犬 PHPT 術前/微創消融定位 | 人醫標準，獸醫頸超漸普及、消融少數中心 |
| 雙磷酸鹽（zoledronate/pamidronate） | 犬貓惡性/難治高血鈣降鈣 | 人醫腫瘤高血鈣標準，獸醫 pamidronate IV / alendronate PO（貓 IHC）證據增加 |

## 五、臨床爭議與知識空缺 (Controversies & Knowledge Gaps)

| 爭議議題 | 現況 | Evidence Level |
|---------|------|---------------|
| 貓特發性高血鈣（IHC）的最佳一線治療 | 高纖/腎處方飲食 vs 雙磷酸鹽（alendronate）順序未定 | Level III |
| iCa:P 比值作為腫瘤預測指標的臨床價值 | 近期於氮血症犬有預測力，但切點/外推待驗證 | Level III |
| 原發性副甲狀腺亢進：手術 vs 超音波導引熱消融 vs 內科 | 各有適應症，缺頭對頭比較 | Level III |
| 輕度無症狀離子高血鈣是否一律深究 | 持續性需查、單次輕微可複測；過度檢查 vs 漏診之衡量 | Level IV |

## 六、近期實證更新 (Recent Evidence)

- **「測 iCa、別算」獲再確認**：預測/校正鈣在犬診斷表現不足（Lebastard 2021）——持續高血鈣應直接測離子鈣、不靠公式。
- **iCa:P 比值輔助腫瘤預測**：近期於氮血症犬，iCa:P 比值對腫瘤性高血鈣有預測價值（McDaniel 2023）；定位為輔助分流、非取代 PTH/PTHrP 套組。
- **雙磷酸鹽於貓 IHC**：alendronate 口服對持續性離子高血鈣的貓有效（Kurtz 2022），與飲食調整並列為現行選項。
- **分流鐵則不變**：iCa→套組（PTH/PTHrP）→影像，且**診斷前不給類固醇**仍是現行教學核心（de Brito Galvão & Schenck 2017）。

> 臨床內容與藥物劑量需獸醫師依現行仿單與指引核對；本節點為 AI 接地生成，停於 review 狀態待 DVM 簽核。`,
  clinical_pearl: '高血鈣工作流程兩條保命鐵則：①「測離子鈣、不要用校正公式」——犬的校正鈣會誤導決策；②「診斷講清楚之前，絕對不給類固醇」——類固醇會把淋巴瘤溶掉、暫時壓低血鈣，看起來好轉卻毀掉確診機會。先抽完高血鈣套組（iCa/PTH/PTHrP/vit D）、做完肛門腺指診與影像，再談治療。\n\n【台灣脈絡】台灣犬高血鈣以淋巴瘤、肛囊腺癌為常見；貓門診偶見特發性高血鈣（常因 CaOx 結石或健檢發現）。PTH/PTHrP 多需送外部實驗室，採血與保存條件要先確認。',
  common_mistakes: [
    '只看總鈣、用校正/預測鈣公式就下結論（犬不可靠，必須離子鈣確認）',
    '診斷未明就給糖皮質素（會溶解掩蓋淋巴瘤、毀掉診斷）',
    '漏做肛門腺指診（肛囊腺癌是犬惡性高血鈣常見來源）',
    '忘記愛迪生氏症這個「可逆」病因（高血鈣＋電解質異常＋虛脫）',
    '忽略 Ca×P 乘積與腎礦化/AKI 風險，延誤積極降鈣',
  ],
  disease_data: null,
  diagnostic_data: {
    indication: ['偶然發現總鈣升高（需 iCa 確認）', 'PU/PD、厭食、虛弱的鑑別', 'CaOx 尿石/反覆泌尿結石', '已知腫瘤的惡性高血鈣監測', '不明虛脫疑愛迪生氏症'],
    contraindication: ['無絕對禁忌；惟離子鈣樣本須厭氧處理、盡快測定，避免暴露空氣/久放影響 iCa'],
    technique: '離子鈣：厭氧採血、盡快測定（pH 影響 iCa）。高血鈣套組：同次採血送 iCa + PTH + PTHrP + 25-OH-vit D/calcitriol（外部實驗室、注意保存）。輔以最小資料庫（CBC/生化含磷/UA）、肛門腺指診、胸腹影像、頸部超音波（副甲狀腺）。',
    normal_findings: [
      { finding: '離子鈣正常', description: '犬 iCa 約 1.25-1.45 mmol/L、貓約 1.1-1.4 mmol/L（依儀器）', significance: '排除真性高血鈣（總鈣升高為假象/蛋白結合）' },
      { finding: 'PTH 正常 + iCa 正常', description: '鈣-PTH 軸正常', significance: '無原發性副甲狀腺亢進' },
    ],
    abnormal_findings: [
      { finding: 'iCa↑ + PTH 受抑 + PTHrP↑', description: '惡性高血鈣（HHM）', significance: '找腫瘤：淋巴瘤、肛囊腺癌、多發性骨髓瘤' },
      { finding: 'iCa↑ + PTH 不當地正常/升高', description: '原發性副甲狀腺亢進', significance: '老年犬副甲狀腺腺瘤；頸部超音波、手術/消融' },
      { finding: 'iCa↑ + 高血磷 + 毒物史', description: '維生素 D 中毒', significance: '膽鈣化醇鼠藥/calcipotriene/植物；查 calcitriol' },
      { finding: 'iCa↑ + 低血鈉/高血鉀 + 虛脫', description: '愛迪生氏症', significance: '可逆！ACTH stim 確診' },
      { finding: '貓慢性 iCa↑ 排除其他', description: '特發性高血鈣（IHC）', significance: '常合併 CaOx 結石；飲食/雙磷酸鹽' },
    ],
    interpretation_guide: '1. 先 iCa 確認真性高血鈣（勿用校正公式）。2. 病史/理學＋最小資料庫找線索（肛門腺、淋巴結、毒物、電解質）。3. 高血鈣套組（PTH/PTHrP）分流：PTH 高→PHPT；PTHrP 高/PTH 低→惡性。4. 影像找腫瘤/副甲狀腺。5. 疑愛迪生即 ACTH stim。**診斷未明前不給類固醇。**',
    pitfalls: [
      '用總鈣/校正鈣下結論（犬不可靠）',
      '診斷前給類固醇掩蓋淋巴瘤',
      '離子鈣樣本暴露空氣/久放使 iCa 失準',
      '漏做肛門腺指診與電解質（漏掉 ASAC、愛迪生）',
    ],
    sensitivity_specificity: '離子鈣為高血鈣的診斷標準（總鈣/校正鈣對真性高血鈣的判別不足，Lebastard 2021）。PTH/PTHrP 套組對機轉分流價值高，但須正確採樣保存。',
    cost_benefit: '離子鈣便宜、應為第一步；高血鈣套組（PTH/PTHrP/vit D）成本中等但對機轉分流關鍵，能避免錯誤治療（尤其避免未診斷先給類固醇）。',
  },
  procedure_data: null,
  visual_placeholders: [
    { position: '診斷流程段落後', type: 'flowchart', description: '高血鈣分流決策樹（iCa→PTH/PTHrP→腫瘤/PHPT/中毒/愛迪生）' },
    { position: '高血鈣套組表後', type: 'comparison_table', description: 'PTH/PTHrP 判讀對照表' },
  ],
  interactive_placeholders: [
    { position: '判讀段落', type: 'interactive_staging', description: '輸入 iCa/PTH/PTHrP 自動建議鑑別方向' },
  ],
  drug_api_links: ['Prednisolone', 'Furosemide', 'Pamidronate', 'Alendronate'],
  references: [
    { type: 'journal', citation: 'Messinger JS, Windham WR, Ward CR. "Ionized Hypercalcemia in Dogs: A Retrospective Study of 109 Cases (1998-2003)." J Vet Intern Med. 2009;23(3):514-519. doi:10.1111/j.1939-1676.2009.0288.x', relevance: '犬離子高血鈣病因分布回顧（腫瘤為主）' },
    { type: 'journal', citation: 'de Brito Galvão JF, Schenck PA, Chew DJ. "A Quick Reference on Hypercalcemia." Vet Clin North Am Small Anim Pract. 2017;47(2):241-248. doi:10.1016/j.cvsm.2016.10.016', relevance: '高血鈣鑑別與工作流程快速參考' },
    { type: 'journal', citation: 'de Brito Galvão JF, Parker V, Schenck PA, Chew DJ. "Update on Feline Ionized Hypercalcemia." Vet Clin North Am Small Anim Pract. 2017;47(2):273-292. doi:10.1016/j.cvsm.2016.09.004', relevance: '貓特發性離子高血鈣更新' },
    { type: 'journal', citation: 'Lebastard M, Cuq B, Sharman MJ, et al. "Diagnostic performance of predicted ionized calcium in dogs with total hypercalcemia and total hypocalcemia." Vet Clin Pathol. 2021;50(4):515-524. doi:10.1111/vcp.13024', relevance: '預測/校正鈣在犬診斷表現不足→應測離子鈣（近期）' },
    { type: 'journal', citation: 'McDaniel K, Guess SC, Haines JM, et al. "Ionized calcium-to-phosphorus ratio predicts neoplasia in azotemic dogs: a retrospective study of 105 cases." J Am Vet Med Assoc. 2023;261(11):1-5. doi:10.2460/javma.23.01.0039', relevance: 'iCa:P 比值預測氮血症犬腫瘤性高血鈣（近期）' },
    { type: 'journal', citation: 'Kurtz M, Desquilbet L, Maire J, et al. "Alendronate treatment in cats with persistent ionized hypercalcemia: A retrospective cohort study of 20 cases." J Vet Intern Med. 2022;36(6). doi:10.1111/jvim.16508', relevance: '貓持續性離子高血鈣口服雙磷酸鹽治療（近期）' },
    { type: 'textbook', citation: 'Feldman EC, Nelson RW, Reusch C, Scott-Moncrieff JC. Canine and Feline Endocrinology, 4th ed. Elsevier, 2015. Chapter: Hypercalcemia and Primary Hyperparathyroidism.', relevance: '鈣代謝障礙與原發性副甲狀腺亢進完整教材' },
  ],
  is_current: true,
  created_at: now,
};

/** 多渴多尿（PU/PD）診斷工作流程與尿崩症，L4 診斷型（2026-06-27 新增；review #1/#2 揪出的 IM 核心「以症狀為導向」缺口）。臨床內容待 DVM 覆核。 */
const contentPUPDWorkup: NodeContent = {
  id: 'CONTENT-IM-L4-007',
  node_id: 'IM-L4-007',
  version: 2,
  summary: 'PU/PD（多尿/多渴）是門診最常見主訴之一，背後可能是 CKD、糖尿病、Cushing、子宮蓄膿、高血鈣等一長串疾病。鐵則：①先確認「真的是 PU/PD」（飲水 > ~100 mL/kg/day、尿量 > ~50 mL/kg/day，與頻尿/失禁區分）；②以最小資料庫＋臨床分流「先排除常見病」；③常見病全陰性才查尿崩症。區分中樞性尿崩症（CDI）、腎性尿崩症（NDI）與原發性多渴可用改良式水剝奪試驗（風險高、禁忌氮血/脫水）或較安全的 DDAVP（desmopressin）試驗；惟結果為支持性、非絕對（髓質沖刷與部分反應會重疊）。',
  learning_objectives: [
    '確認真性 PU/PD 並與頻尿、尿失禁、行為性喝水區分',
    '依機轉（滲透性利尿/髓質沖刷/ADH 抗性/ADH 缺乏/原發性多渴）建立 PU/PD 病因鑑別',
    '運用最小資料庫與臨床分流「先排除常見病」（CKD/DM/Cushing/高血鈣/子宮蓄膿等）',
    '說明改良式水剝奪試驗與 DDAVP 試驗如何區分 CDI/NDI/原發性多渴及其侷限',
    '辨識中樞性尿崩症的病因與 DDAVP 治療，及避免在氮血/脫水病患貿然做水剝奪試驗',
  ],
  key_points: [
    '先確認真性 PU/PD：飲水 > ~100 mL/kg/day、尿量 > ~50 mL/kg/day（犬）；與頻尿/失禁/行為性喝水區分',
    '診斷順序鐵則：確認真性 → 先排除常見病 → 最後才查尿崩症',
    'PU/PD 機轉：滲透性利尿（DM）、髓質沖刷、ADH 抗性（腎性：高血鈣/子宮蓄膿/Cushing/低血鉀）、ADH 缺乏（CDI）、原發性多渴',
    '最小資料庫：CBC、生化（含血鈣/血鉀/血糖/肝腎）、UA（USG+沉渣+培養）、貓加 T4',
    '🔴 別跳過常見病直接做水剝奪試驗——MWDT 在氮血/脫水病患危險、且髓質沖刷會扭曲結果',
    'DDAVP 試驗（較安全替代）：CDI 明顯改善、NDI 反應差、原發性多渴介於之間；結果為支持性非絕對',
    '中樞性尿崩症（CDI）對 DDAVP 反應好；病因含特發性、外傷、腦下垂體/下視丘腫瘤；原發性（先天）NDI 罕見',
  ],
  body: `# 多渴多尿 (PU/PD) 診斷工作流程與尿崩症 (Diabetes Insipidus)

## 一、檢查原理與適應症 (Principles & Indications)

PU/PD 背後可能是 CKD、糖尿病、Cushing、子宮蓄膿、高血鈣等一長串疾病——**先確認「真的是 PU/PD」、再「先排除常見病、最後才查尿崩症」**。

### 第一步：確認真性 PU/PD
- 真性多尿：尿量 > ~50 mL/kg/day；真性多渴：飲水 > ~100 mL/kg/day（犬）。
- **先和這些區分**：頻尿（pollakiuria，下泌尿道）、尿失禁、行為性喝水。
- 客觀化：飲水量日誌 + 多次 USG。

### 適應症
| 情境 | 為何走 PU/PD 工作流程 |
|------|---------------------|
| 飼主主訴喝多尿多 | 確認真性 PU/PD、找病因 |
| USG 持續偏低（< 1.030 犬 / < 1.035 貓） | 濃縮力異常 |
| 體重下降/多食合併 PU/PD | DM/Cushing/甲亢（貓） |

## 二、判讀要點 (Interpretation)

### PU/PD 的機轉與病因（先常見、後罕見）
| 機轉 | 病因 |
|------|------|
| 滲透性利尿 | 糖尿病（糖尿）、阻塞後利尿 |
| 髓質沖刷（medullary washout） | 長期多尿、低蛋白/低鈉飲食 |
| **ADH 抗性（腎性，最常見的「次發」）** | **高血鈣**、子宮蓄膿/腎盂腎炎（E. coli 內毒素）、Cushing、低血鉀 |
| ADH 缺乏 | **中樞性尿崩症（CDI）** |
| 原發性多渴 | 行為性/精神性 polydipsia |

### 診斷流程（先排除常見病）
1. **最小資料庫**：CBC、生化（含血鈣、血鉀、血糖、肝腎指標）、UA（USG + 沉渣 + 培養）、T4（貓）。
2. **依線索分流**：糖尿→DM；ALP↑/壺腹腹→Cushing（LDDST）；高血鈣→高血鈣工作流程；未絕育母犬→子宮蓄膿超音波；低 USG+氮血→CKD（IRIS 分期）。
3. **常見病全陰性後** → 才考慮尿崩症（CDI/NDI）vs 原發性多渴。

[圖片:PU/PD 診斷決策樹——確認真性→最小資料庫→分流常見病→（全陰）水剝奪/DDAVP 試驗]

### 區分 CDI / NDI / 原發性多渴
- **改良式水剝奪試驗（MWDT）**：觀察脫水時 USG 反應、再給 DDAVP 看是否進一步濃縮。**風險高、禁忌於氮血/脫水/已知病因**；髓質沖刷會讓結果失準。
- **DDAVP（desmopressin）試驗（較安全的實務替代）**：給 DDAVP 5-7 天，看飲水量/USG 反應——**CDI 明顯改善**；NDI 反應差；**原發性多渴介於之間（水剝奪下可能部分濃縮）**。結果為**支持性、非絕對**（髓質沖刷與部分反應會重疊）。

## 三、常見陷阱 (Pitfalls)

- **跳過常見病直接做水剝奪試驗**：MWDT 在氮血/脫水病患危險；務必先排除 CKD/DM/Cushing/高血鈣/子宮蓄膿。
- **單次 USG 下結論**：USG 會波動、需多次；剛喝完水的低 USG 不代表濃縮力異常。
- **忽略子宮蓄膿**：未絕育母犬 PU/PD＋白血球升高要先想到，超音波確認。
- **把原發性多渴當 CDI**：兩者 DDAVP/水剝奪反應可重疊，需綜合判斷、必要時行為評估。
- **髓質沖刷干擾**：長期多尿造成髓質溶質流失，使動物即使 ADH 正常也無法充分濃縮、扭曲試驗結果。

## 四、人醫借鑒 (Translational Insights)

| 人醫工具/概念 | 獸醫應用潛力 | 現況 |
|-------------|-------------|------|
| Copeptin（ADH 替代標記）+ 高張鹽水刺激 | 犬貓 CDI vs 原發性多渴的客觀分流、取代高風險 MWDT | 人醫已取代傳統水剝奪試驗，獸醫 copeptin 檢測尚未商業化 |
| Aquaporin-2 尿液檢測 | 評估腎性 ADH 反應（NDI） | 人醫研究指標，獸醫探索階段 |
| 腦下垂體 MRI 定位 CDI 病灶 | 犬 CDI 找腫瘤/結構性病因 | 人醫標準，獸醫轉介中心可行 |

## 五、臨床爭議與知識空缺 (Controversies & Knowledge Gaps)

| 爭議議題 | 現況 | Evidence Level |
|---------|------|---------------|
| 改良式水剝奪試驗 vs DDAVP 試驗作為一線分流 | MWDT 風險高、漸被 DDAVP 試驗取代，但缺標準化方案 | Level III |
| 原發性多渴與部分性 CDI 的鑑別 | DDAVP/水剝奪反應重疊、髓質沖刷干擾，無單一決定性試驗 | Level IV |
| Copeptin 等新標記在犬貓的價值 | 人醫已用，獸醫尚無商業化檢測與切點 | Level IV |

## 六、近期實證更新 (Recent Evidence)

- **先排除常見病、別急著做水剝奪**：現行實務強調 PU/PD 應以最小資料庫＋臨床分流排除 CKD/DM/Cushing/高血鈣/子宮蓄膿等常見病，**尿崩症是排除後的診斷**（McGrotty 2019）。
- **DDAVP 試驗取代高風險 MWDT 的趨勢**：改良式水剝奪試驗風險高（脫水/高血鈉），實務漸以較安全的 DDAVP 試驗分流 CDI；惟反應為支持性、非絕對。
- **CKD 是 PU/PD 最常見病因之一**：以 IRIS（2023 修訂）分期評估濃縮力喪失與氮血症，為 PU/PD 工作流程的關鍵分支。
- **客觀分流的未來**：人醫已以 copeptin＋高張鹽水刺激取代傳統水剝奪試驗（van Vonderen 的 ADH 生理研究奠基了犬 PU/PD 病生理理解）；獸醫尚待商業化檢測。

> 臨床內容與藥物劑量需獸醫師依現行仿單與指引核對；本節點為 AI 接地生成，停於 review 狀態待 DVM 簽核。`,
  clinical_pearl: 'PU/PD 工作流程的順序鐵則：「確認真性 → 先排除常見病 → 最後才查尿崩症」。最常見陷阱是看到低 USG 就直接做改良式水剝奪試驗——在已氮血或脫水的病患很危險。先用最小資料庫（含血鈣、血糖、UA/培養、Cushing 篩檢、未絕育母犬查子宮蓄膿）把常見病掃一輪；全陰性才輪到 DDAVP 試驗分中樞性尿崩症、腎性尿崩症與原發性多渴——而且結果是支持性、不是絕對。\n\n【台灣脈絡】台灣犬貓 PU/PD 門診常見，CKD（尤其老貓）、糖尿病、Cushing 為大宗；未絕育母犬要警覺子宮蓄膿。Copeptin 等新標記尚未在台灣商業化。',
  common_mistakes: [
    '看到低 USG 就直接做改良式水剝奪試驗（氮血/脫水病患危險，先排除常見病）',
    '單次 USG 就下結論（USG 會波動，需多次；剛喝水後低 USG 不等於濃縮異常）',
    '漏掉未絕育母犬的子宮蓄膿（PU/PD＋白血球升高要先想到）',
    '把原發性多渴當中樞性尿崩症（DDAVP/水剝奪反應可重疊，需綜合判斷）',
    '忽略髓質沖刷對水剝奪試驗結果的干擾',
  ],
  disease_data: null,
  diagnostic_data: {
    indication: ['飼主主訴喝多尿多（先確認真性 PU/PD）', 'USG 持續偏低', '體重下降/多食合併 PU/PD', '不明原因 PU/PD 排除常見病後查尿崩症'],
    contraindication: ['改良式水剝奪試驗禁忌於氮血、脫水、已知病因或疑髓質沖刷者（危險）——此時改用 DDAVP 試驗'],
    technique: '先以飲水量日誌＋多次 USG 確認真性 PU/PD。最小資料庫：CBC、生化（血鈣/血鉀/血糖/肝腎）、UA（USG+沉渣+培養）、貓加 T4。依線索分流常見病（DM/Cushing/高血鈣/子宮蓄膿/CKD）。常見病全陰性後分流尿崩症：改良式水剝奪試驗（住院密切監測體重/USG/電解質，禁忌氮血脫水）或較安全的 DDAVP 試驗（門診 5-7 天觀察飲水/USG 反應）。',
    normal_findings: [
      { finding: 'USG 可濃縮（> 1.030 犬 / > 1.035 貓）', description: '禁水或自然狀態下尿可濃縮', significance: '濃縮力正常，PU/PD 機轉存疑或為行為性' },
      { finding: '最小資料庫無異常', description: 'CBC/生化/UA 正常', significance: '需進一步分流尿崩症 vs 原發性多渴' },
    ],
    abnormal_findings: [
      { finding: '糖尿 + 高血糖', description: 'UA 糖尿、血糖持續升高', significance: '糖尿病（滲透性利尿）' },
      { finding: '低 USG + 氮血', description: 'USG < 1.030 + BUN/Cre 升高', significance: 'CKD（IRIS 分期）' },
      { finding: '高血鈣', description: 'iCa 升高', significance: '走高血鈣工作流程（腎性 ADH 抗性）' },
      { finding: 'DDAVP 後 USG 明顯上升、飲水大減', description: 'DDAVP 試驗反應佳', significance: '支持中樞性尿崩症（CDI）' },
      { finding: 'DDAVP 後反應差', description: 'USG/飲水無明顯改善', significance: '提示腎性尿崩症或原發性多渴（反應可重疊，非絕對）' },
    ],
    interpretation_guide: '1. 確認真性 PU/PD。2. 最小資料庫＋臨床分流先排除常見病（DM/CKD/Cushing/高血鈣/子宮蓄膿/甲亢）。3. 常見病全陰性 → 分流尿崩症：DDAVP 試驗（較安全）或改良式水剝奪試驗（風險高、禁忌氮血脫水）。4. CDI 對 DDAVP 反應佳；NDI/原發性多渴反應差或重疊，結果為支持性。5. 疑 CDI 可腦下垂體 MRI 找病因。',
    pitfalls: [
      '氮血/脫水病患做水剝奪試驗（危險）',
      '單次 USG 下結論',
      '漏掉子宮蓄膿',
      '原發性多渴與部分性 CDI 反應重疊誤判',
    ],
    sensitivity_specificity: '無單一決定性試驗：改良式水剝奪與 DDAVP 試驗的結果為支持性，受髓質沖刷與部分反應重疊影響；須結合臨床與常見病排除綜合判讀。',
    cost_benefit: '最小資料庫便宜、應先做且常能直接找到病因；尿崩症分流（水剝奪/DDAVP 試驗、MRI）成本與風險較高，僅在排除常見病後進行。',
  },
  procedure_data: null,
  visual_placeholders: [
    { position: '診斷流程段落後', type: 'flowchart', description: 'PU/PD 分流決策樹（確認真性→最小資料庫→常見病分流→水剝奪/DDAVP 試驗）' },
    { position: '尿崩症區分段落後', type: 'comparison_table', description: 'CDI vs NDI vs 原發性多渴的試驗反應對照表' },
  ],
  interactive_placeholders: [
    { position: '判讀段落', type: 'interactive_staging', description: '輸入 USG/生化/DDAVP 反應自動建議鑑別方向' },
  ],
  drug_api_links: ['Desmopressin'],
  references: [
    { type: 'journal', citation: 'Ramsey IK. "Approach to polyuria/polydipsia in dogs and cats." Companion Anim. 2009;14(7):35-42. doi:10.1111/j.2044-3862.2009.tb00552.x', relevance: '犬貓 PU/PD 診斷工作流程綜述（框架）' },
    { type: 'journal', citation: 'McGrotty Y, Randell S. "How to diagnose polyuria and polydipsia in dogs." Vet Rec. 2019;185(4):110-111. doi:10.1136/vr.l4865', relevance: '犬 PU/PD 實務診斷流程（近期）' },
    { type: 'journal', citation: 'van Vonderen IK, Kooistra HS, Rijnberk A. "Vasopressin Response to Osmotic Stimulation in 18 Young Dogs with Polyuria and Polydipsia." J Vet Intern Med. 2004;18(6):800-806. doi:10.1111/j.1939-1676.2004.tb02625.x', relevance: '犬 ADH 對滲透刺激的反應（PU/PD 病生理）' },
    { type: 'journal', citation: 'van Vonderen IK, Kooistra HS, Rijnberk A. "Disturbed Vasopressin Release in 4 Dogs with So-Called Primary Polydipsia." J Vet Intern Med. 1999;13(5):419-425. doi:10.1111/j.1939-1676.1999.tb01457.x', relevance: '原發性多渴的 ADH 異常（與 CDI 鑑別之難）' },
    { type: 'guideline', citation: 'IRIS (International Renal Interest Society). "IRIS Staging of CKD (Modified 2023)." iris-kidney.com.', relevance: 'CKD 為 PU/PD 最常見病因之一的現行分期指引' },
    { type: 'textbook', citation: 'Feldman EC, Nelson RW, Reusch C, Scott-Moncrieff JC. Canine and Feline Endocrinology, 4th ed. Elsevier, 2015. Chapter: Water Metabolism and Diabetes Insipidus.', relevance: '水分代謝與尿崩症完整教材' },
  ],
  is_current: true,
  created_at: now,
};

export const IM_CONTENTS = new Map<string, NodeContent>([
  // L0 Overview
  ['IM-L0-001', contentIMOverview],
  // L1 Basic Science
  ['IM-L1-001', contentRenalPhysiology],
  ['IM-L1-002', contentImmunologyBasics],
  ['IM-L1-003', contentGIPhysiology],
  ['IM-L1-004', contentEndocrinePhysiology],
  // L2 Mechanisms
  ['IM-L2-001', contentRenalInjury],
  ['IM-L2-002', contentEndocrineDysregulation],
  ['IM-L2-003', contentGIInflammation],
  ['IM-L2-004', contentHepaticInjury],
  ['IM-L2-005', contentAcidBase],
  ['IM-L2-006', contentImmuneMediated],
  // L3 Clinical Diseases
  ['IM-L3-001', contentCushings],
  ['IM-L3-002', contentHypothyroidism],
  ['IM-L3-003', contentFelineHyperthyroidism],
  ['IM-L3-004', contentCKD],
  ['IM-L3-005', contentIMHA],
  ['IM-L3-006', contentDM],
  ['IM-L3-007', contentCE],
  ['IM-L3-008', contentPancreatitis],
  ['IM-L3-009', contentHepaticLipidosis],
  ['IM-L3-010', contentTickBorne],
  ['IM-L3-011', contentAddisons],
  ['IM-L3-012', contentPLE],
  ['IM-L3-013', contentAKI],
  ['IM-L3-014', contentPLN],
  ['IM-L3-015', contentIMT],
  ['IM-L3-016', contentLepto],
  ['IM-L3-017', contentFIP],
  ['IM-L3-018', contentFLUTD],
  ['IM-L3-019', contentCholangitis],
  // L4 Diagnostics
  ['IM-L4-001', contentEndocrineTests],
  ['IM-L4-002', contentUrinalysis],
  ['IM-L4-003', contentAbdoUS],
  ['IM-L4-004', contentGIEndoscopy],
  // L4 Diagnostics — 2026-05-23 新增
  ['IM-L4-005', contentHepFuncAssessment],
  // L4 Diagnostics — 2026-06-27 新增（review #1/#2 缺口：以症狀為導向工作流程）
  ['IM-L4-006', contentHypercalcemiaWorkup],
  ['IM-L4-007', contentPUPDWorkup],
  // L5 Therapeutics
  ['IM-L5-001', contentCKDManagement],
  ['IM-L5-002', contentEndocrineTherapy],
  ['IM-L5-003', contentImmunosuppression],
  ['IM-L5-004', contentGITherapy],
  ['IM-L5-005', contentVaccination],
  ['IM-L5-006', contentAntimicrobialStewardship],
  // Respiratory & Infectious expansion
  ['IM-L1-005', contentRespiratoryPhysiology],
  ['IM-L2-007', contentAirwayInflammation],
  ['IM-L3-020', contentFelineAsthma],
  ['IM-L3-021', contentBacterialPneumonia],
  ['IM-L3-022', contentFeLVFIV],
  ['IM-L3-023', contentCPV],
  // GI/Hepatobiliary expansion
  ['IM-L3-024', contentEPI],
  ['IM-L3-025', contentGBMucocele],
  ['IM-L3-026', contentCanineChronicHepatitis],
  ['IM-L3-027', contentMegaesophagus],
  // 2026-05-18 新增
  ['IM-L3-028', contentFPV],
  // 2026-06-07 iter 2 新增 (內分泌/心血管交界)
  ['IM-L3-029', contentSystemicHypertension],
  // 2026-06-07 iter 4 新增 (藥物基因體學)
  ['IM-L3-030', contentMDR1Toxicity],
  ['IM-L3-031', contentObesity],
]);
