import type { NodeContent } from '@/types/knowledge';

const now = '2026-02-15T00:00:00Z';

/** 犬淋巴瘤，疾病型 */
const contentCanineLymphoma: NodeContent = {
  id: 'CONTENT-ONCO-L3-001',
  node_id: 'ONCO-L3-001',
  version: 2,
  summary: '犬淋巴瘤是犬最常見的血液腫瘤，大約占所有犬腫瘤 7 到 24%。最常見的是多中心型，大概占 80%，臨床上就是全身淋巴結腫起來。WHO 分期分 I 到 V 期，再加 substage a（沒有全身症狀）跟 b（有全身症狀）。治療主軸是 CHOP-based 化療，B-cell 預後比 T-cell 好，CHOP 完全緩解率約 80 到 90%，中位存活期 12 到 14 個月。近年 FDA 核准了 rabacfosadine（Tanovea，2021 完全核准）與口服 verdinexor（Laverdia-CA1），流式細胞術也讓「惰性 vs 侵襲性」（如 T-zone 淋巴瘤）的區分更明確。',
  learning_objectives: [
    '說明犬淋巴瘤的解剖分型與 WHO 分期系統',
    '描述 B-cell 與 T-cell 免疫表型對預後的影響',
    '列出 CHOP 方案的組成藥物與主要毒性',
    '執行淋巴瘤的完整分期檢查流程',
    '向飼主說明淋巴瘤的治療選項與預後',
  ],
  key_points: [
    '多中心型占 80%，表現是全身周邊淋巴結無痛腫大',
    'WHO 分期由輕到重：I 是單一淋巴結，II 同側多淋巴結，III 全身淋巴結，IV 肝脾浸潤，V 骨髓血液或非淋巴器官浸潤',
    'B-cell 預後比 T-cell 好，CHOP 中位存活 12 到 14 個月，T-cell 只有 6 到 9 個月',
    'CHOP 方案的組成是 Cyclophosphamide、Hydroxydaunorubicin (Doxorubicin)、Oncovin (Vincristine) 加 Prednisone',
    '完全緩解率 80 到 90%，但多數會在 6 到 9 個月後復發',
    '高血鈣是 T-cell 淋巴瘤常見的副腫瘤症候群',
    'FDA 已核准 rabacfosadine（Tanovea，IV，注意肺纖維化）與口服 verdinexor（Laverdia-CA1）作為 CHOP 以外選項（待 DVM 覆核劑量）',
    '「T-cell 一律較差」需修正：T-zone 淋巴瘤（CD45−/CD3,CD5＋，約佔 10%）屬惰性，常採保守監測，過度治療是常見錯誤',
  ],
  body: `# 犬淋巴瘤 (Canine Lymphoma)

## 一、病理機制 (Pathophysiology)



### 概述
犬淋巴瘤（lymphoma / lymphosarcoma）是犬最常見的造血系統腫瘤，大約占所有犬腫瘤 7 到 24%。中老年犬好發，中位年齡 6 到 9 歲，公母沒什麼差別。臨床上看到黃金、Boxer、Bullmastiff、Basset Hound 這幾個品種要特別留意，發病率比較高。

### 解剖分型
多中心型（Multicentric）大概占 80%，整身周邊淋巴結都腫起來。消化道型（Alimentary）約 5 到 7%，浸潤到胃腸道。縱膈型（Mediastinal）約 5%，前縱膈長腫塊。皮膚型（Cutaneous）約 5%，再分上皮親和跟非上皮親和兩種。剩下的結外型（Extranodal）會跑到眼、腎、神經系統這些地方去。

### CHOP 化療方案
[藥物:Cyclophosphamide] + [藥物:Doxorubicin] + [藥物:Vincristine] + [藥物:Prednisone]

標準 CHOP 是 25 週、19 次療程，每週交替給藥。主要毒性大致這幾項：Doxorubicin 是累積性心臟毒性（總劑量超過 180-240 mg/m² 要小心）；Cyclophosphamide 容易引起無菌性的出血性膀胱炎；Vincristine 則是周邊神經毒性跟便秘。

## 二、臨床表現與診斷 (Clinical Signs & Diagnosis)

### WHO 臨床分期
[互動:WHO 分期互動圖表]

| 期別 | 定義 |
|------|------|
| I | 僅一個淋巴結（或單一結外部位）受侵犯 |
| II | 同側橫膈膜多個淋巴結受侵犯 |
| III | 全身性淋巴結侵犯 |
| IV | 肝臟和/或脾臟侵犯（± 第 I-III 期） |
| V | 骨髓浸潤、血液侵犯或非淋巴器官侵犯（± 第 I-IV 期） |

Substage 分兩種：a 是沒有全身症狀，b 是有全身症狀，像體重減輕、發燒、食慾下降這些。

## 三、治療策略 (Treatment)

### 其他治療選項
單劑 Doxorubicin 方案緩解率比較低但療程簡單。節拍式化療給的是低劑量口服藥，適合飼主沒辦法頻繁回診或經濟上有壓力的情況。[藥物:Lomustine]（CCNU）通常拿來救援 T-cell 或復發案例。[藥物:Prednisone] 單獨用的話中位存活只剩 1 到 2 個月。

### 新藥與近期實證更新（2021–2025，待 DVM 覆核）

近年 FDA 核准兩個犬淋巴瘤專用藥，是 CHOP 之外的重要新選項：

| 藥物 | 機轉 | FDA 狀態 | 給藥 | 重點毒性 |
|------|------|---------|------|---------|
| Rabacfosadine（Tanovea-CA1） | 核苷酸前驅藥（PMEG prodrug），淋巴細胞內活化 | 2016 條件式 → **2021/7/15 完全核准** | IV，每 21 天一次（1.0 mg/kg；高風險犬種 0.82） | **肺纖維化（劑量限制）**、皮膚病變、腸胃道、骨髓抑制 |
| Verdinexor（Laverdia-CA1） | 口服 SINE／XPO1（CRM1）核輸出抑制劑 | 2021/1 條件式 → 2025 完全核准（確切日期待確認） | **口服**，每週兩次（間隔 ≥72 小時），1.25→1.5 mg/kg | 食慾不振、嘔吐、腹瀉、體重減輕、血小板低下、肝指數上升；具致畸性需接觸防護 |

- **證據等級**：一項多中心、隨機、雙盲、安慰劑對照試驗證實 rabacfosadine 整體反應率達 73.2%（安慰劑僅 5.6%），為目前犬淋巴瘤新藥中證據等級最高者（Weishaar 2022）。
- **初治替代方案**：rabacfosadine 與 doxorubicin **交替使用**作為初治方案（59 隻犬 ORR 93%、CR 79%、中位 PFS 199 天），就診次數少於完整 CHOP，可作為 logistics／費用受限時的選項（Saba 2024）。
- **救援預後判斷**：第一線 CHOP 後若**早期進展**（LAP < 86 天、rabacfosadine < 154 天），各類救援方案反應均差，可作為是否積極救援的判斷依據（Parker 2024）。
- **免疫治療現況**：犬目前**尚無**已上市的「rituximab 等效」抗 CD20 單株抗體；早期商品（Blontress／blontuvetmab、Tactress）因缺療效/專一性資料已退出市場。新一代犬抗 CD20 mAb（1E4-cIgGB）早期試驗顯示安全且能清除 B 細胞，仍屬研究階段（McLinden 2024）。

[圖片:CHOP 方案 25 週用藥時程表]

## 四、併發症與監控 (Complications & Monitoring)

化療期間血液學毒性要盯緊，每次給藥前先確認 ANC 大於 2,000/μL。常見的併發症像是骨髓抑制（nadir 通常落在給藥後 7 到 10 天）、消化道毒性（嘔吐、腹瀉、食慾下降），還有免疫抑制造成的繼發感染。Doxorubicin 累積心毒性要追，Cyclophosphamide 則要小心無菌性出血性膀胱炎。建議每兩週回診一次，看看淋巴結大小、血球數跟體重變化。

## 五、預後與預後因子 (Prognosis)

### 免疫表型與預後
用 IHC 或流式細胞儀做分型。B-cell 大約 60 到 70%，CD79a+/CD3-，跑 CHOP 中位存活 12 到 14 個月。T-cell 約 20 到 30%，CD3+/CD79a-，中位存活只剩 6 到 9 個月，而且高血鈣發生率比較高。

但「T-cell＝預後差」這個老規則要修正：T 細胞型異質性很高。**T-zone 淋巴瘤（TZL）**約佔犬淋巴瘤 10%，是最常見的惰性型，流式表型為 **CD45 陰性、CD3/CD5 陽性**，病程緩慢、存活長，常採**保守監測**而非積極 CHOP；其周邊淋巴球增多不代表預後較差。更新版 Kiel 分類可在高惡性度 T 細胞型內進一步分層。另外，流式 Ki67 偏低可在小細胞型 B 細胞淋巴瘤中辨識預後較佳者。

## 六、人醫借鑒 (Translational Insights)

| 人醫工具/概念 | 獸醫應用潛力 | 現況 |
|-------------|-------------|------|
| CAR-T 細胞療法 | 犬 B-cell 淋巴瘤的 CD19/CD20 靶向細胞免疫治療 | 犬 CD20-CAR-T 臨床試驗進行中（Tufts/Penn） |
| 雙特異性抗體（Bispecific T-cell engager） | 犬淋巴瘤的 T 細胞導向免疫橋接療法 | 早期研究階段 |
| 液態活檢 ctDNA 監測 | 犬淋巴瘤化療反應及微小殘留病灶偵測 | 犬淋巴瘤 ctDNA 已有初步研究 |
| Bruton 酪胺酸激酶抑制劑（BTKi） | 犬 B-cell 淋巴瘤的口服標靶治療 | 人醫 CLL/MCL 已核准，犬研究中 |

## 七、臨床爭議與知識空缺 (Controversies & Knowledge Gaps)

| 爭議議題 | 現況 | Evidence Level |
|---------|------|---------------|
| CHOP 25 週 vs 短縮 CHOP（15 週）的療效比較 | 部分研究顯示縮短方案可能不影響 OS，但數據不一致 | Level II |
| 化療前 steroid 使用對後續 CHOP 反應的影響程度 | 公認有害但實際 OS 降低幅度還有爭議（部分研究差異不大） | Level II |
| T-cell 淋巴瘤的最佳化療方案 | CHOP 對 T-cell 效果差，LOPP/Lomustine 可能較好但缺乏 RCT | Level III |
| 免疫分型（流式 vs IHC）在預後預測的標準化 | 不同實驗室結果一致性存疑，需建立犬淋巴瘤統一分型標準 | Level IV |
| 惰性淋巴瘤（T-zone）是否該積極化療 | 流式可辨識 TZL（CD45−/CD3,CD5＋），多採保守監測；積極 CHOP 反而過度治療 | Level II–III |
| Rabacfosadine 在第一線 vs 救援的定位 | RCT 證實有效（ORR 73.2%）；與 doxorubicin 交替可作初治，但與完整 CHOP 的頭對頭長期數據仍有限 | Level II |`,
  clinical_pearl: '犬淋巴瘤 FNA 第一線通常就能得到初步診斷，可以看到中大型淋巴球增多、取代掉正常淋巴結結構。但是免疫表型確認（B 還是 T cell）對預後評估跟治療選擇不能省，建議同時送流式細胞儀或 IHC 染色。\n\n【台灣流行病學】犬淋巴瘤在台灣是最常見的血液腫瘤之一，黃金 lymphoma 好發，加上拉布拉多在台灣飼養數量大。台灣獸醫腫瘤科這幾年發展很快，CHOP 化療方案在主要動物醫院都能跑。流式細胞儀免疫分型台灣部分實驗室已有服務。飼主對化療的接受度有提升，但費用還是要考慮的點。',
  common_mistakes: [
    '沒做免疫分型就直接上 CHOP，T-cell 預後本來就差，飼主決策也會被影響',
    '化療前先給了 corticosteroids，後續可能跑出多重抗藥性',
    '分期檢查跳過，只憑淋巴結 FNA 就決定治療',
    '把反應性淋巴結增生誤判成淋巴瘤，要看細胞群是不是均質',
  ],
  disease_data: {
    signalment: '中老年犬好發，中位年齡 6 到 9 歲，公母差異不大。好發品種：黃金、Boxer、Bullmastiff、Basset Hound、Scottish Terrier、Rottweiler。',
    etiology: '確切病因還沒搞清楚，可能跟遺傳、環境暴露（除草劑 2,4-D）、免疫失調有關。跟貓不一樣，犬淋巴瘤跟病毒感染（像 FeLV）沒有明確關聯。',
    pathogenesis: '淋巴細胞克隆性增殖，把淋巴結結構撐爛掉，接著全身淋巴組織都被浸潤，跑到肝脾骨髓去，免疫功能整個垮，最後跑出高血鈣、貧血這類副腫瘤症候群。',
    clinical_signs: [
      { sign: '全身周邊淋巴結腫大', category: 'primary', description: '無痛、對稱性的腫大，下頷、肩前、腋下、腹股溝、膝窩這些位置都可能中標' },
      { sign: '精神食慾正常（substage a）', category: 'primary', description: '多數犬在早期（WHO III-IV a）活力跟食慾還可以' },
      { sign: '體重減輕', category: 'secondary', description: '晚期或 substage b 病人會伴隨惡病質' },
      { sign: '多尿多渴', category: 'secondary', description: '可能來自高血鈣，這是 T-cell 型副腫瘤的表現' },
      { sign: '呼吸困難', category: 'secondary', description: '縱膈型會壓迫氣管或造成胸腔積液' },
    ],
    staging: {
      system: 'WHO Clinical Staging for Canine Lymphoma',
      stages: [
        'Stage I：單一淋巴結侵犯',
        'Stage II：同側橫膈膜多個淋巴結侵犯',
        'Stage III：全身性淋巴結侵犯',
        'Stage IV：肝臟和/或脾臟侵犯',
        'Stage V：骨髓、血液或非淋巴器官侵犯',
      ],
    },
    differential_diagnosis: [
      { condition: '反應性淋巴結增生', key_differentiator: '細胞學會看到小中大混合的淋巴球群，不是均質的中大型淋巴球' },
      { condition: '其他轉移性腫瘤的淋巴結侵犯', key_differentiator: '細胞學會看到非淋巴系異常細胞，上皮性或間質性都有可能' },
      { condition: '感染性淋巴結炎', key_differentiator: '通常會發燒、白血球升高，細胞學上看到中性球或巨噬細胞吞噬' },
      { condition: '多中心肥大細胞瘤', key_differentiator: '細胞學會看到有嗜鹼性顆粒的圓形細胞' },
    ],
    diagnostic_workup: '流程大致是這樣：淋巴結 FNA 第一線，免疫分型分 B 或 T cell（流式或 IHC），接著 CBC/BCS 加血鈣，腹超評估肝脾，胸腔 X 光看縱膈跟肺轉移，懷疑 Stage V 再加骨髓抹片。',
    treatment_protocol: '主流是 CHOP-based 多藥化療，25 週 19 次。劑量是 Cyclophosphamide 250 mg/m² PO、Doxorubicin 30 mg/m² IV、Vincristine 0.7 mg/m² IV（**單次劑量上限 1.0 mg，超過此上限不增加療效但神經毒性顯著增加**，Plumb\'s 2023）、Prednisone 2 mg/kg PO 漸減。完全緩解率 80 到 90%。如果復發就用 rescue protocol（DMAC 或 Lomustine）。',
    prognosis: 'B-cell 跑 CHOP 中位存活 12 到 14 個月，2 年存活率約 20%。T-cell 跑 CHOP 中位存活 6 到 9 個月。單劑 Doxorubicin 中位存活 8 到 10 個月。只給 Prednisone 中位存活 1 到 2 個月。不治療只有 4 到 6 週。',
    monitoring: '化療期間每次治療前要做 CBC，嗜中性球大於 2000/μL 才能給藥。每個月觸診淋巴結看緩解狀況，每 2 到 3 個月追蹤腹超。化療副作用用 VCOG-CTCAE v2 評估。',
    owner_communication: '淋巴瘤在犬腫瘤裡對化療反應算是最好的，多數犬化療期間生活品質還可以。要先讓飼主有概念：目標是延長有品質的生存時間，不是治癒。CHOP 要每週回診，費用一定要事前談清楚。化療藥物在家怎麼處理也要花時間衛教。',
  },
  diagnostic_data: null,
  procedure_data: null,
  visual_placeholders: [
    { position: 'WHO 分期表格前', type: 'flowchart', description: 'WHO 臨床分期流程圖' },
    { position: 'CHOP 段落後', type: 'timeline', description: 'CHOP 25 週用藥時程圖' },
  ],
  interactive_placeholders: [
    { position: 'WHO 分期段落', type: 'interactive_staging', description: '輸入檢查數據自動判定 WHO 分期' },
  ],
  drug_api_links: ['Cyclophosphamide', 'Doxorubicin', 'Vincristine', 'Prednisone', 'Lomustine'],
  references: [
    { type: 'journal', citation: 'Zandvliet M. Canine lymphoma: a review. Vet Q. 2016;36(2):76-104. doi:10.1080/01652176.2016.1152633.', relevance: '犬淋巴瘤診斷與治療回顧' },
    { type: 'journal', citation: 'Weishaar KM, Wright ZM, Rosenberg MP, et al. Multicenter, randomized, double-blinded, placebo-controlled study of rabacfosadine in dogs with lymphoma. J Vet Intern Med. 2022;36(1):215-226. doi:10.1111/jvim.16341.', relevance: '犬淋巴瘤新藥中證據等級最高的 RCT，確立 rabacfosadine（Tanovea）療效（ORR 73.2% vs 5.6%）' },
    { type: 'guideline', citation: 'U.S. FDA Center for Veterinary Medicine. Freedom of Information Summary, TANOVEA (rabacfosadine for injection), full approval July 15, 2021 (FOI doc 11083).', relevance: 'Tanovea 由條件式升級為完全核准之官方依據，含適應症、劑量與肺纖維化警示（NADA/劑量待 DVM 依仿單核對）' },
    { type: 'guideline', citation: 'U.S. FDA Center for Veterinary Medicine. Laverdia-CA1 (verdinexor tablets) — conditional approval Jan 11, 2021; full approval 2025; DailyMed label.', relevance: '唯一口服 SINE/XPO1 抑制劑之核准依據與劑量（每週兩次）；完全核准確切日期待 DVM 確認' },
    { type: 'journal', citation: 'Saba CF, Fan TM, Phillips BS, Wright ZM, Thamm DH. Alternating rabacfosadine and doxorubicin for treatment of naive canine lymphoma. Vet Comp Oncol. 2024;22(2):278-283. doi:10.1111/vco.12975.', relevance: '初治犬交替 rabacfosadine/doxorubicin 方案（ORR 93%、PFS 199 天），就診次數少於完整 CHOP 的替代選項' },
    { type: 'journal', citation: 'Parker AS, Burton JH, Curran KM, Wolf-Ringwall A, Thamm DH. Early progression during/after CHOP indicates poor outcome with rescue protocols in dogs with multicentric lymphoma. J Vet Intern Med. 2024;38(4):2282-2292. doi:10.1111/jvim.17139.', relevance: '是否積極救援的預後判斷依據：第一線 CHOP 早期進展者各類 rescue 反應均差' },
    { type: 'journal', citation: 'McLinden GP, Avery AC, Gardner HL, et al. Safety and biologic activity of a canine anti-CD20 monoclonal antibody in dogs with diffuse large B-cell lymphoma. J Vet Intern Med. 2024;38(3):1666-1674. doi:10.1111/jvim.17080.', relevance: '新一代犬抗 CD20 mAb 早期安全/活性數據；說明犬目前尚無已上市 rituximab 等效藥' },
    { type: 'guideline', citation: 'VCOG，Veterinary Cooperative Oncology Group. Common Terminology Criteria for Adverse Events (VCOG-CTCAE) v2.', relevance: '化療副作用分級標準' },
    { type: 'textbook', citation: 'Vail DM, Thamm DH, Liptak JM. Withrow & MacEwen\'s Small Animal Clinical Oncology, 6th ed. Elsevier, 2020.', relevance: '腫瘤科主要教科書' },
    { type: 'journal', citation: 'Garrett LD et al. Evaluation of a 6-month chemotherapy protocol with no maintenance therapy for dogs with lymphoma. J Vet Intern Med. 2002;16(6):704-709.', relevance: '犬淋巴瘤 CHOP 方案臨床研究' },
  ],
  is_current: true,
  created_at: now,
};

/** 腫瘤細胞學，診斷型 */
const contentTumorCytology: NodeContent = {
  id: 'CONTENT-ONCO-L4-001',
  node_id: 'ONCO-L4-001',
  version: 2,
  summary: '腫瘤細胞學就是用細針抽吸（FNA）把腫塊細胞抽出來，染色後顯微鏡下看。門診當場可以做，不用全身麻醉。判讀重點是把細胞歸到 round cell、epithelial cell 還是 mesenchymal cell 三大型態，加上惡性度標準（核仁異常、核分裂指數那些），可以給後面組織病理跟治療決策當參考。',
  learning_objectives: [
    '執行正確的 FNA 技術並製作細胞學抹片',
    '說明 Diff-Quick 與 Wright-Giemsa 染色的適用時機',
    '運用 round cell / epithelial / mesenchymal 三分法判斷腫瘤起源',
    '列出細胞學上惡性度判斷的主要標準',
    '辨識常見腫瘤的典型細胞學特徵（淋巴瘤、MCT、黑色素瘤等）',
  ],
  key_points: [
    'FNA 用 22 到 25G 針頭，aspiration 或 non-aspiration 都可以',
    'Diff-Quick 染色 5 分鐘內就能完成，門診現場判讀很方便',
    '三大型態：Round cell（淋巴瘤、MCT、組織球瘤等）、Epithelial cell（癌）、Mesenchymal cell（肉瘤）',
    '惡性度判讀重點：核仁多且大且不規則、N:C 比偏高、核分裂指數上升、核型異常（anisokaryosis）',
    'FNA 細胞學跟組織病理的一致性大約 70 到 90%，但是浸潤深度跟切緣沒辦法評估',
  ],
  body: `# 腫瘤細胞學 (Tumor Cytology)

## 一、檢查原理與適應症 (Principles & Indications)



### 概述
細胞學是腫瘤診斷的第一線工具，特點是快、低侵入性、便宜。大部分體表腫塊跟可以摸到的淋巴結，門診都能做 FNA。

### FNA 技術
### Aspiration 技術（抽吸法）
1. 22-25G 針頭接上 6-12 mL 注射器
2. 固定腫塊，針頭刺入後施加負壓
3. 在腫塊內多方向移動 3-4 次
4. 釋放負壓後拔出針頭
5. 將取得的檢體推吹至玻片上

### Non-aspiration 技術（穿刺法）
1. 22-25G 針頭不接注射器
2. 利用毛細作用收集細胞
3. 血管豐富的腫塊比較適合，可以減少血液污染

### 染色方法
最常用 Diff-Quick（Romanowsky 類），三液浸泡各 5 到 10 秒，門診就能做。Wright-Giemsa 細胞形態看得比較清楚，但是染色時間比較久。New Methylene Blue（NMB）是快速濕片染色，初步篩檢用。

### 三大細胞型態
[圖片:三大細胞型態示意圖]

### Round Cell Tumors（圓形細胞腫瘤）
特徵是細胞分散排列（non-cohesive），形狀圓形到卵形。淋巴瘤是均質性中大型淋巴球、核仁明顯；MCT 是胞質內有紫色嗜鹼性顆粒；組織球瘤是大型圓形細胞配灰藍色胞質；漿細胞瘤是偏心核加上核旁淡染帶（perinuclear halo）；TVT 則是胞質內有空泡，台灣還是見得到。

### Epithelial Cell Tumors（上皮細胞腫瘤/癌）
特徵是細胞成簇排列（cohesive clusters），細胞間連接明顯。鱗狀細胞癌、腺癌、移行上皮細胞癌都屬於這類。

### Mesenchymal Cell Tumors（間質細胞腫瘤/肉瘤）
紡錘形細胞，分散或鬆散排列，細胞脫落率低。常見的有纖維肉瘤、血管肉瘤、貓打針位置纖維肉瘤（FISS）等。

### 惡性度判斷標準
| 標準 | 描述 |
|------|------|
| Anisocytosis | 細胞大小不一致 |
| Anisokaryosis | 核大小不一致（最重要的惡性指標之一） |
| 高 N:C 比 | 核佔細胞面積比例增大 |
| 核仁異常 | 核仁多、大、形狀不規則 |
| 核分裂象 | 有絲分裂指數增加，尤其不正常核分裂 |
| 多核巨細胞 | 非發炎性背景下的多核細胞 |
| 胞質嗜鹼性增加 | 反映高蛋白合成活性 |

> 經驗法則：多項惡性標準（常以 ≥3 項為參考）並存時惡性可能性高，但**須結合臨床背景判讀**——少數高惡性度腫瘤可能僅見少數標準，而反應性／發炎性增生也會模擬部分標準（核仁明顯、嗜鹼性增加），不可僵化套用數目門檻

[互動:細胞學練習題，辨識腫瘤型態]

## 二、判讀要點 (Interpretation)

判讀要點分幾項。第一是細胞量夠不夠，至少要有 10 個以上完整保存的細胞群。第二是看背景，血液、壞死碎片、發炎細胞各占多少。第三是細胞形態，大小均一性（anisocytosis）、核質比、核仁是否明顯、有沒有分裂圖象。第四是分型歸類，round cell、epithelial、mesenchymal 還是混合型。記得假陰性率可以到 10 到 30%，陰性不能完全排除腫瘤。

## 三、常見陷阱 (Pitfalls)

常見陷阱有幾個。一是血液污染太重，稀釋掉細胞被判成「無腫瘤細胞」。二是反應性淋巴結增生誤判成淋巴瘤，要看細胞群是單型還是多型。三是高度分化的肉瘤跟纖維母細胞長得太像被漏掉。四是 MCT 脫顆粒之後很難辨識，要配 Toluidine blue 特殊染色。五是取到壞死區域，只看到碎片沒有完整腫瘤細胞。

## 四、人醫借鑒 (Translational Insights)

| 人醫工具/概念 | 獸醫應用潛力 | 現況 |
|-------------|-------------|------|
| 數位病理（Digital Pathology + AI） | 犬腫瘤細胞學/組織學 AI 輔助判讀提高準確度 | 犬 MCT 自動分級 AI 已有原型 |
| 液態活檢 ctDNA | 犬腫瘤非侵入性偵測與化療反應監控 | BRAF 尿液 PCR 已臨床可用，血液 ctDNA 研究中 |
| 多參數流式細胞儀 | 犬淋巴瘤精確免疫分型及微小殘留病灶偵測 | 部分商業實驗室已提供 8-色 panel |

## 五、臨床爭議與知識空缺 (Controversies & Knowledge Gaps)

| 爭議議題 | 現況 | Evidence Level |
|---------|------|---------------|
| FNA 細胞學 vs 組織切片作為治療決策的充分性 | FNA 對 round cell tumor 準確度超過 90%，但是肉瘤只有 60 到 70%，什麼時候要升級為組織切片是個議題 | Level II |
| 犬腫瘤細胞學判讀的觀察者間一致性（interobserver agreement） | 不同臨床病理學家對惡性度判斷可能差很多，要靠標準化訓練 | Level III |
| Non-aspiration 技術 vs Aspiration 技術的診斷率比較 | 多數研究兩者差不多，但血管豐富的腫塊用 non-aspiration 可能比較好 | Level II |

## 六、近期實證更新 (Recent Evidence Updates)

1. **犬 MCT 細胞學分級（Camus 2016）**：提出細胞學二階分級——出現高分級特徵（核分裂象、多核細胞、核多形性、明顯 anisokaryosis）者，與 Kiupel 組織學二分級高度相關（敏感度/特異度約 85-95%），讓 FNA 在術前即可粗估 MCT 預後；惟**組織學分級仍為治療決策標準**。
2. **數位／遠距細胞學（telecytology）**：全玻片掃描（WSI）可送專科臨床病理師遠距判讀，台灣偏鄉或夜間急診可受益；判讀一致性與掃描、染色標準化高度相關。
3. **AI 輔助判讀**：犬細胞學影像深度學習分類（含 MCT 自動分級）已有原型，準確度接近專科，但臨床落地仍待前瞻驗證與法規認可。
> 細胞學判讀與分級結果仍需獸醫臨床病理師依現行標準覆核。`,
  clinical_pearl: '腫瘤科的黃金法則：遇到任何體表腫塊，FNA 第一線，做完再決定下一步。一支 25G 針頭加一片玻片，10 分鐘就能告訴你是 round cell、epithelial 還是 mesenchymal，這會直接影響手術計畫（像 MCT 切緣要寬 2-3 cm）。',
  common_mistakes: [
    '針頭在腫塊內停留太久或反覆穿刺，血液污染太重',
    '抹片做太厚，細胞堆疊在一起沒辦法判讀',
    '只憑一次 FNA 陰性就排除腫瘤，假陰性率有 10 到 30%',
    '反應性淋巴結增生誤判成淋巴瘤，要看細胞群均質性',
  ],
  disease_data: null,
  diagnostic_data: {
    indication: [
      '任何新發現的體表腫塊或淋巴結腫大',
      '內臟腫塊在超音波引導下做 FNA',
      '胸腔或腹腔積液的細胞學分析',
      '腫塊術前評估，決定手術計畫',
    ],
    contraindication: [
      '懷疑嗜鉻細胞瘤（pheochromocytoma）：FNA 可能誘發高血壓危象，多予避免',
      '嚴重凝血障礙（血小板少於 40,000/μL）',
      '脾臟疑血管肉瘤腫塊（相對禁忌，非絕對）：經皮 FNA 診斷率低（血液稀釋）且有出血風險，多建議手術切除／切片而非 FNA',
    ],
    technique: '步驟大致這樣走：固定腫塊，22 到 25G 針頭刺入，aspiration 或 non-aspiration 採樣，釋放負壓後拔針，把檢體推吹到玻片上，做出均勻抹片，風乾，Diff-Quick 染色，顯微鏡判讀（4x 看總覽、10x 定位、40 到 100x 看細節）。',
    normal_findings: [
      { finding: '正常淋巴結', description: '混合淋巴球群（小的 75%、中的 15%、大的 5%）加上少量漿細胞跟巨噬細胞', significance: '排除淋巴瘤或轉移' },
      { finding: '脂肪瘤', description: '大量脂肪細胞（大型透明胞質），沒有異型性', significance: '良性腫瘤，通常追蹤觀察就好' },
    ],
    abnormal_findings: [
      { finding: '均質性中大型淋巴球增多', description: '超過 50% 是中大型淋巴球，取代正常結構', significance: '高度懷疑淋巴瘤，接著要做免疫分型' },
      { finding: '嗜鹼性顆粒圓形細胞', description: '胞質塞滿紫色嗜鹼性顆粒', significance: '肥大細胞瘤（MCT），用 Diff-Quick 染色效果最好' },
      { finding: '成簇上皮樣細胞伴惡性標準', description: '黏附性強的細胞團配上核仁異常', significance: '上皮來源惡性腫瘤（癌），組織病理才能確認分類' },
      { finding: '紡錘形細胞伴惡性標準', description: '梭形細胞，看得到核型異常', significance: '間質來源腫瘤（肉瘤），細胞脫落率低，可能要組織切片確診' },
    ],
    interpretation_guide: '判讀順序：先低倍鏡（4x）看抹片品質、細胞量、整體型態，再用中倍鏡（10x）分三大型態（round / epithelial / mesenchymal），高倍鏡（40 到 100x）下評估惡性度標準，最後結合臨床資訊給初步診斷。',
    pitfalls: [
      '脂肪瘤的脂肪細胞會被誤認為染色不佳的空白玻片',
      '低度分化 MCT 顆粒可能不多，Diff-Quick 比 Wright-Giemsa 容易看到顆粒',
      '肉瘤細胞脫落率低，FNA 拿到的細胞可能很少',
      '發炎反應特別是化膿性，會把底下的腫瘤細胞蓋住',
    ],
    sensitivity_specificity: 'FNA 細胞學整體敏感度大約 70 到 90%，特異度 85 到 95%。Round cell tumors（像淋巴瘤、MCT）診斷率最高，超過 90%；mesenchymal tumors 最低，大概 60 到 70%。',
    cost_benefit: '成本很低，針頭、玻片、Diff-Quick 染液就夠，門診當場能做，不用全身麻醉。當作腫瘤診斷第一線工具，可以快速分發炎還是腫瘤、良性還是惡性，後面治療決策也比較好走。',
  },
  procedure_data: null,
  visual_placeholders: [
    { position: '三大細胞型態段落', type: 'comparison_table', description: 'Round vs Epithelial vs Mesenchymal 比較圖' },
    { position: '惡性度標準表格後', type: 'annotated_image', description: '細胞學惡性度標準標註圖' },
  ],
  interactive_placeholders: [
    { position: '判讀段落後', type: 'interactive_quiz', description: '細胞學圖片辨識練習' },
  ],
  drug_api_links: [],
  references: [
    { type: 'textbook', citation: 'Vail DM, Thamm DH, Liptak JM. Withrow & MacEwen\'s Small Animal Clinical Oncology, 6th ed. Elsevier, 2020.', relevance: '腫瘤細胞學基礎章節' },
    { type: 'textbook', citation: 'Cowell RL, Tyler RD, Meinkoth JH, DeNicola DB. Diagnostic Cytology and Hematology of the Dog and Cat, 5th ed. Elsevier, 2020.', relevance: '獸醫細胞學主要參考教材' },
    { type: 'textbook', citation: 'Raskin RE, Meyer DJ. Canine and Feline Cytology: A Color Atlas and Interpretation Guide, 3rd ed. Elsevier, 2016.', relevance: '犬貓細胞學圖譜與判讀指引' },
    { type: 'guideline', citation: 'Veterinary Cooperative Oncology Group. Common Terminology Criteria for Adverse Events (VCOG-CTCAE) following chemotherapy or biological antineoplastic therapy in dogs and cats v1.1. Vet Comp Oncol. 2016;14(4):417-446. doi:10.1111/vco.283.', relevance: '腫瘤治療不良事件標準化術語（v1.1）' },
    { type: 'journal', citation: 'Ghisleni G, Roccabianca P, Ceruti R, et al. Correlation between fine-needle aspiration cytology and histopathology in the evaluation of cutaneous and subcutaneous masses from dogs and cats. Vet Clin Pathol. 2006;35(1):24-30. doi:10.1111/j.1939-165X.2006.tb00084.x.', relevance: 'FNA 細胞學與組織病理一致性研究' },
    { type: 'journal', citation: 'Camus MS, Priest HL, Koehler JW, et al. Cytologic criteria for mast cell tumor grading in dogs with evaluation of clinical outcome. Vet Pathol. 2016;53(6):1117-1123. doi:10.1177/0300985816638721.', relevance: '犬 MCT 細胞學分級與預後（近期實證）' },
  ],
  is_current: true,
  created_at: now,
};

/** 肥大細胞瘤 (MCT)，疾病型 */
const contentMCT: NodeContent = {
  id: 'CONTENT-ONCO-L3-002',
  node_id: 'ONCO-L3-002',
  version: 2,
  summary: '犬肥大細胞瘤（Mast Cell Tumor, MCT）是犬皮膚最常見的惡性腫瘤，大約占所有犬皮膚腫瘤 16 到 21%。臨床表現變化很大，可以是單一小結節，也可以是多發侵襲性腫塊。分級系統現在主流是 Kiupel 二級（低度跟高度），已經取代了舊的 Patnaik 三級。手術是第一線治療，近年實證支持低度 MCT 採「比例式切緣」（側緣＝腫瘤直徑、上限 2 cm）。2020 年 FDA 核准瘤內注射劑 tigilanol tiglate（Stelfonta）作為不可切除/拒絕手術腫瘤的非手術選項。c-KIT 突變檢測可以決定要不要用標靶治療（Toceranib 或 Masitinib）。',
  learning_objectives: [
    '比較 Patnaik 三級與 Kiupel 二級 MCT 分級系統',
    '描述 MCT 手術切緣的標準建議與切緣評估',
    '說明 c-KIT 突變對預後判斷與標靶治療選擇的意義',
    '列出 MCT 的完整分期檢查流程',
    '辨識 MCT 相關的副腫瘤症候群（組織胺釋放）',
  ],
  key_points: [
    '犬最常見的皮膚惡性腫瘤，大約占所有皮膚腫瘤 16 到 21%',
    '好發品種包括拳師犬 MCT、Boston Terrier、拉布拉多、黃金、巴哥、Bulldog',
    'Kiupel 二級分級（2011）：低度（low-grade）跟高度（high-grade），判讀標準是有絲分裂指數、多核細胞、奇異核、核分裂異常',
    '手術切緣：傳統 lateral 2-3 cm；近年實證支持低度 MCT 採比例式切緣（側緣＝腫瘤直徑、上限 2 cm）+ deep 一個 fascial plane，與 3 cm 廣切等效',
    'c-KIT 突變（exon 11 最常見）是預後較差的指標，也是 TKI 標靶治療的適應症',
    'Tigilanol tiglate（Stelfonta，FDA 2020）瘤內注射為不可切除/拒絕手術 MCT 的非手術選項，但**必須**前置 H1+H2+類固醇防去顆粒（劑量待 DVM 依仿單覆核）',
    '組織胺釋放會引起的副作用：Darier sign（搓揉後局部紅腫）、胃潰瘍、低血壓',
  ],
  body: `# 肥大細胞瘤 (MCT)

## 一、病理機制 (Pathophysiology)



### 概述
犬肥大細胞瘤是犬皮膚最常見的惡性腫瘤。MCT 臨床表現千變萬化，可以模擬幾乎任何皮膚腫塊的外觀，所以腫瘤科有句話：「任何皮膚腫塊在證實之前都可能是 MCT」。

### 分期檢查
1. FNA 細胞學（初步診斷）
2. 區域淋巴結 FNA（即使觸診正常）
3. 腹部超音波（肝脾評估）
4. CBC/BCS/肝脾 FNA（如超音波異常）
5. 組織病理（切除後分級）
6. c-KIT 突變檢測（PCR）

## 二、臨床表現與診斷 (Clinical Signs & Diagnosis)

### 組織學分級
### Patnaik 三級系統（1984）
- Grade I：分化良好，局限於真皮
- Grade II：中度分化，浸潤至皮下（最常見，預後最難預測）
- Grade III：分化不良，高侵襲性

### Kiupel 二級系統（2011，目前主流）
低度（Low-grade）就是不符合下列任一標準。高度（High-grade）只要符合以下任一條件就算：有絲分裂指數 ≥ 7/10 HPF、≥ 3 個多核細胞/10 HPF、≥ 3 個奇異核細胞/10 HPF，或核分裂異常（karyomegaly）。

## 三、治療策略 (Treatment)

### 治療
### 手術（首選）
切緣標準是 lateral 至少 2 cm、deep 至少一個 fascial plane。切緣乾淨（clean margins）的低度 MCT 預後很好。切緣不淨（dirty 或 close）的話要考慮二次手術或輔助放療。

### 輔助治療
切緣不淨或沒辦法再手術時用放射治療。高度 MCT 或有轉移就上化療：[藥物:Vinblastine] 加 [藥物:Prednisolone]（VBL-Pred protocol）。標靶治療（TKI）有兩個選擇：[藥物:Toceranib]（Palladia）**3.25 mg/kg PO QOD**（FDA 標準劑量；臨床常因 GI 副作用減量至 2.75 mg/kg）、[藥物:Masitinib]（Kinavet）12.5 mg/kg PO SID。c-KIT 突變陽性的反應率比較高。

### 副腫瘤管理
搭配的藥物有 [藥物:Famotidine] 0.5-1 mg/kg PO BID（H2 blocker，預防胃潰瘍）、[藥物:Diphenhydramine] 2-4 mg/kg PO BID（H1 blocker）。

### 2020–2025 新藥與切緣實證更新（待 DVM 覆核）

**瘤內注射 tigilanol tiglate（Stelfonta / EBC-46）—— 非手術新選項**
FDA 於 **2020/11/9** 核准（EMA 2020 初已核准），適應症為**不可轉移之皮膚 MCT（全身任何部位）**與**位於肘關節或跗關節以下之不可轉移皮下 MCT**。機轉為 **PKC 活化劑**（取自 *Fontainea picrosperma* 種子），瘤內注射後造成腫瘤局部壞死、血管破壞，留下開放性傷口以二期癒合（多數 4–6 週收口，傷口常大於原腫瘤，屬預期非併發症）。關鍵 RCT：單次治療 28 天完全反應率約 **75%**，再治療後整體約 **88%**。

> ⚠️ **務必執行的前置給藥（防大量去顆粒／溶瘤反應，依美國仿單）**：
> - **Prednisolone 0.5 mg/kg PO q12h**，治療前 2 天開始，約 10 天（後段轉 q24h）
> - **Diphenhydramine（H1）2 mg/kg PO q12h**，治療當天起共 8 天
> - **Famotidine（H2）0.5 mg/kg PO q12h**，治療當天起共 8 天
>
> 省略前置給藥可能引發大量組織胺去顆粒（低血壓、胃腸潰瘍）。**實際劑量請以當地現行仿單為準，由執業獸醫師確認。**

**手術切緣可「比例化」縮小（低惡性度）**：針對 grade I/II 皮膚 MCT，**側緣＝腫瘤直徑（上限 2 cm）+ 深層一個筋膜層**，完整切除率（~93%）與傳統 3 cm 廣切（~92%）相當（Chu 2020）；100 例比例切緣研究局部復發率僅約 **3%**（Saunders 2021）。對低度腫瘤可採組織保留式手術，不必一律 3 cm。

**Kiupel 二級分級延伸驗證**：2024 年研究顯示二級分級可辨識具侵襲行為的 MCT，**且不受生長型態影響（皮膚與皮下皆適用）**（Sabattini 2024），填補 2011 原始系統對皮下型的空白。

[圖片:MCT FNA 細胞學典型影像，嗜鹼性顆粒圓形細胞]

## 四、併發症與監控 (Complications & Monitoring)

MCT 併發症主要來自組胺跟肝素大量釋放（脫顆粒），會造成胃潰瘍（用 H2 blocker 或 PPI 預防）、低血壓、凝血異常跟傷口癒合延遲。術後監控重點是每個月觸診手術區域跟區域淋巴結，每三個月腹超評估肝脾轉移。Toceranib 治療期間要監控肝腎功能跟血壓，常見副作用是腹瀉、嗜中性球低下跟蛋白尿。

## 五、預後與預後因子 (Prognosis)

預後因子幾個重點：組織學分級是 Kiupel low-grade 中位存活超過兩年，high-grade 只剩不到 4 個月。手術切緣方面，low-grade 完整切除治癒率超過 90%。KIT 突變部分，c-KIT exon 11 突變跟 TKI 治療反應有關。Ki-67 增殖指數超過 23 個/10 HPF 預後就比較差。臨床分期方面，WHO Stage III-IV 預後明顯下降。犬種差異：巴哥跟拳師犬的 MCT 多半是 low-grade，預後比較好。

## 六、人醫借鑒 (Translational Insights)

| 人醫工具/概念 | 獸醫應用潛力 | 現況 |
|-------------|-------------|------|
| KIT 標靶治療（Imatinib/Sunitinib） | 犬 MCT 的 c-KIT 突變標靶治療（Toceranib/Masitinib） | Toceranib (Palladia) 已 FDA 核准用於犬 MCT |
| 液態活檢監測 KIT 突變 | 犬 MCT 治療反應及復發的血液 ctDNA 監控 | 研究階段 |
| 免疫檢查點抑制劑（anti-PD-1） | 犬 MCT 的免疫療法，尤其 TKI 耐藥後 | 犬 PD-1 抗體早期臨床試驗中 |
| 組織胺受體標靶（HDC + IL-2） | 犬 MCT 組織胺驅動腫瘤微環境的免疫調節 | 人醫 AML 已核准，獸醫尚未應用 |

## 七、臨床爭議與知識空缺 (Controversies & Knowledge Gaps)

| 爭議議題 | 現況 | Evidence Level |
|---------|------|---------------|
| Patnaik Grade II 的預後異質性，是否應全面採用 Kiupel 二級制？ | Kiupel 再現性較好但可能遺漏部分中間風險群，Ki-67/c-KIT 輔助有助分層 | Level II |
| 低度 MCT 切緣乾淨後是否仍需輔助化療？ | 多數共識認為不需要，但 Ki-67 > 23 或 c-KIT pattern 2/3 可能受益 | Level III |
| MCT 前哨淋巴結（SLN）活檢的臨床價值 | SLN mapping 可發現觸診正常淋巴結的轉移，但標準化流程仍在建立 | Level III |
| 多發性低度 MCT 的最佳管理策略 | 同時多發 vs 異時多發預後不同，是否需全身化療尚無共識 | Level IV |
| 比例式切緣是否可全面取代固定 2-3 cm | grade I/II RCT/世代研究支持側緣＝直徑（上限 2 cm）等效，high-grade 仍宜廣切 | Level II |
| Tigilanol tiglate 相對手術的定位 | 對不可切除/拒絕手術或高手術風險部位有價值；與廣切的長期頭對頭數據仍有限 | Level II |`,
  clinical_pearl: 'MCT 的 FNA 細胞學診斷率超過 90%，因為肥大細胞的嗜鹼性顆粒在 Diff-Quick 染色下很有特徵。要注意的是：low-grade 分化差（high-grade）的 MCT 顆粒可能很少甚至看不到。另一個原則是區域淋巴結 FNA 絕對不能跳過，就算觸診正常，淋巴結轉移率還是有 25 到 50%，Grade II/III 或 high-grade 更嚴重。\n\n【台灣流行病學】肥大細胞瘤是台灣犬最常見的皮膚惡性腫瘤。好發品種裡面拳師犬 MCT、拉布拉多、黃金、巴哥犬在台灣飼養數量都不少。台灣亞熱帶氣候下犬隻戶外活動頻繁，皮膚腫塊的早期發現率還有空間。c-KIT 突變檢測跟 TKI 標靶治療（Toceranib 或 Masitinib）在台灣部分腫瘤專科已有提供。臨床上體表腫塊的 FNA 細胞學篩檢還是要更積極推廣。',
  common_mistakes: [
    '手術切緣不夠，MCT 要 lateral 至少 2 cm，不少一般外科只切 1 cm，結果局部復發',
    '沒做區域淋巴結 FNA 就直接分期完成，淋巴結轉移是很重要的預後因子',
    '只看腫塊外觀判斷良惡性而沒做 FNA，MCT 可以長得像任何皮膚腫塊',
    '術前搓揉 MCT 造成大量組織胺釋放（Darier sign），會引發低血壓跟胃潰瘍風險',
    '所有 MCT 一律上化療：low-grade 切緣乾淨預後很好，通常不需要輔助治療',
  ],
  disease_data: {
    signalment: '中老年犬好發，中位年齡 8 到 9 歲。好發品種有拳師犬、Boston Terrier、拉布拉多、黃金、巴哥、Bulldog、Shar-Pei、Weimaraner。拳師犬跟巴哥的 MCT 通常是低度。Shar-Pei 容易多發而且侵襲性可能比較強。',
    etiology: '確切病因還不清楚。c-KIT 受體（stem cell factor receptor）的功能獲得性突變（gain-of-function mutation）讓細胞增殖失控，這是 MCT 發病的關鍵分子機轉。大約 30 到 50% 的 MCT 帶有 c-KIT 突變，exon 11 最常見。',
    pathogenesis: 'c-KIT 突變之後 SCF 受體持續活化，下游 MAPK/PI3K 信號通路跑掉，肥大細胞克隆性增殖，從真皮開始侵到皮下、深層組織，接著區域淋巴結轉移，最後遠端轉移到肝、脾、骨髓。同時組織胺、肝素、蛋白酶這些顆粒內容物釋放，造成局部水腫紅腫（Darier sign）、胃酸分泌增加（胃潰瘍）、凝血異常。',
    clinical_signs: [
      { sign: '皮膚/皮下腫塊', category: 'primary', description: '單發或多發，外觀變化大（粉紅色結節、紅腫團塊、潰瘍性病灶都有），可以長在任何位置' },
      { sign: 'Darier sign', category: 'primary', description: '搓揉腫塊後局部紅腫充血（組織胺釋放），是 MCT 的特徵性表現' },
      { sign: '周圍組織水腫', category: 'secondary', description: '腫塊周圍紅腫、衛星病灶，反映組織胺跟血管活性物質釋放' },
      { sign: '胃腸道症狀', category: 'secondary', description: '嘔吐、黑便，來自組織胺刺激胃酸分泌跑出胃潰瘍' },
      { sign: '全身性低血壓', category: 'secondary', description: '大量組織胺釋放（去顆粒化）會造成過敏樣反應' },
    ],
    staging: {
      system: 'WHO Clinical Staging for Canine MCT',
      stages: [
        'Stage 0：不完全切除的單一腫塊，無區域淋巴結轉移',
        'Stage I：單一皮膚腫塊，無區域淋巴結轉移',
        'Stage II：單一皮膚腫塊，有區域淋巴結轉移',
        'Stage III：多發性皮膚腫塊或大型浸潤性腫塊 ± 淋巴結轉移',
        'Stage IV：遠端轉移（包括血液、骨髓轉移）',
      ],
    },
    differential_diagnosis: [
      { condition: '組織球瘤', key_differentiator: '幼犬好發，FNA 看到大型圓形細胞但是沒有嗜鹼性顆粒，多數會自己消退' },
      { condition: '皮膚淋巴瘤', key_differentiator: 'FNA 是均質中大型淋巴球，免疫分型大多是 T-cell' },
      { condition: '脂肪瘤', key_differentiator: 'FNA 看到脂肪細胞，觸感柔軟可移動。MCT 外觀有時候很像，但 FNA 很容易分' },
      { condition: '漿細胞瘤', key_differentiator: 'FNA 是偏心核細胞加上核旁淡染帶，沒有嗜鹼性顆粒' },
      { condition: '軟組織肉瘤（STS）', key_differentiator: 'FNA 看到紡錘形細胞，局部侵襲性高但轉移率低（不到 20%）。MCT 是圓形細胞可鑑別' },
      { condition: '皮膚血管肉瘤（Cutaneous HSA）', key_differentiator: '深色或出血性皮膚腫塊，FNA 常常被血液稀釋，組織病理看得到異型血管內皮細胞' },
    ],
    diagnostic_workup: '工作流程是：FNA 第一線（診斷率超過 90%，會看到嗜鹼性顆粒圓形細胞），接著區域淋巴結 FNA、腹超評估肝脾、CBC 加 buffy coat 評估，手術切除送組織病理分級（Kiupel 二級），加做 c-KIT 突變 PCR，必要時加 Ki-67 增殖指數。',
    treatment_protocol: '手術第一線：lateral 至少 2 cm 加 deep 至少一個 fascial plane。切緣乾淨的 low-grade 定期追蹤就好。切緣不淨要二次手術或輔助放療。high-grade 或有轉移用 VBL-Pred 化療（Vinblastine 2 mg/m² IV 每週 × 4 次後改 q2 weeks 加 Prednisolone 2 mg/kg PO 漸減），或 TKI（Toceranib 3.25 mg/kg PO QOD（FDA 標準劑量；臨床常減量至 2.75 mg/kg）或 Masitinib 12.5 mg/kg PO SID）。所有 MCT 都建議搭配抗組織胺（H1 加 H2 blocker）。',
    prognosis: 'Kiupel low-grade 加切緣乾淨中位存活超過 2 年，治癒率高。Kiupel high-grade 有治療中位存活 4 到 6 個月，局部復發跟轉移率都高。c-KIT 突變陽性預後比較差，但是可以走 TKI 標靶治療。Patnaik Grade II 最難預測，大約一半表現良好、一半會復發或轉移。',
    monitoring: '術後 1 個月回診看傷口跟有沒有局部復發。low-grade MCT 每 3 個月觸診加區域淋巴結檢查，追蹤 2 年。high-grade MCT 每個月觸診，每 3 個月做腹超跟淋巴結 FNA。化療期間每次治療前 CBC。TKI 治療每 2 到 4 週 CBC/BCS 監測副作用。',
    owner_communication: 'MCT 是犬最常見的皮膚惡性腫瘤。好消息是 low-grade 經過適當手術後多數預後很好，手術切緣夠不夠是治癒的關鍵。high-grade 比較棘手，可能要走化療或標靶治療。可以建議飼主養成定期摸摸全身皮膚的習慣，發現新腫塊就早點來做 FNA。',
  },
  diagnostic_data: null,
  procedure_data: null,
  visual_placeholders: [
    { position: '分級系統段落後', type: 'comparison_table', description: 'Patnaik vs Kiupel 分級系統比較' },
    { position: '治療段落後', type: 'flowchart', description: 'MCT 治療決策流程圖' },
  ],
  interactive_placeholders: [],
  drug_api_links: ['Vinblastine', 'Prednisolone', 'Toceranib', 'Masitinib', 'Famotidine', 'Diphenhydramine'],
  references: [
    { type: 'journal', citation: 'Kiupel M et al. Proposal of a 2-tier histologic grading system for canine cutaneous mast cell tumors to more accurately predict biological behavior. Vet Pathol. 2011;48(1):147-155.', relevance: 'Kiupel 二級分級系統原始文獻' },
    { type: 'guideline', citation: 'U.S. FDA CVM. STELFONTA (tigilanol tiglate injection) label, approved Nov 9, 2020 (DailyMed setid 05b71840-ac18-4f83-8701-bd63d8782aaf); EMA EPAR Stelfonta (EU 2020).', relevance: '官方仿單：適應症（皮膚 MCT、肘/跗以下皮下 MCT）+ 強制前置給藥（類固醇+H1+H2），最關鍵臨床安全依據（劑量待 DVM 依仿單核對）' },
    { type: 'journal', citation: 'De Ridder TR, Campbell JE, Burke-Schwarz C, et al. Randomized controlled clinical study evaluating the efficacy and safety of intratumoral treatment of canine mast cell tumors with tigilanol tiglate (EBC-46). J Vet Intern Med. 2021;35(1):415-429. doi:10.1111/jvim.15806.', relevance: 'Stelfonta 關鍵 RCT：單次 75%／再治療後約 88% 完全反應率' },
    { type: 'journal', citation: 'Chu ML, Hayes GM, Henry JG, Oblak ML. Comparison of lateral surgical margins of up to two centimeters with margins of three centimeters for grade I or II cutaneous mast cell tumors in dogs. J Am Vet Med Assoc. 2020;256(5):567-572. doi:10.2460/javma.256.5.567.', relevance: '證實低度 MCT 比例化/2 cm 側緣與 3 cm 廣切等效，支持組織保留式手術' },
    { type: 'journal', citation: "Saunders H, Thomson MJ, O'Connell K, et al. Evaluation of a modified proportional margin approach for complete surgical excision of canine cutaneous mast cell tumours. Vet Comp Oncol. 2021;19(4):604-615. doi:10.1111/vco.12630.", relevance: '100 例比例切緣局部復發率僅約 3%，切緣去階梯化核心實證（頁碼待覆核）' },
    { type: 'journal', citation: 'Sabattini S, Brocanelli A, Zaccone R, et al. The 2-tier grading system identifies canine cutaneous and/or subcutaneous mast cell tumors with aggressive biological behavior regardless of growth model. Vet Pathol. 2024;61(6):874-881. doi:10.1177/03009858241240443.', relevance: '將 Kiupel 二級分級預後價值延伸至皮下型 MCT' },
    { type: 'journal', citation: 'London CA et al. Multi-center, placebo-controlled, double-blind, randomized study of oral toceranib phosphate (SU11654) for the treatment of dogs with recurrent mast cell tumor. Clin Cancer Res. 2009;15(11):3856-3865.', relevance: 'Toceranib 治療 MCT 的臨床試驗（基礎）' },
    { type: 'guideline', citation: 'VCOG，Veterinary Cooperative Oncology Group. Common Terminology Criteria for Adverse Events (VCOG-CTCAE) v2. Vet Comp Oncol. 2016;14(4):417-446.', relevance: 'MCT 化療副作用分級標準' },
  ],
  is_current: true,
  created_at: now,
};

/** 骨肉瘤，疾病型 */
const contentOsteosarcoma: NodeContent = {
  id: 'CONTENT-ONCO-L3-003',
  node_id: 'ONCO-L3-003',
  version: 2,
  summary: '犬骨肉瘤（Osteosarcoma, OSA）是犬最常見的原發性骨腫瘤，大約占所有骨腫瘤 85%。好發大型到巨型犬的長骨幹骺端（metaphysis），尤其是前肢遠端橈骨跟近端肱骨。OSA 是高度惡性，確診時超過 90% 已經有微轉移（主要跑到肺）。標準治療是截肢加輔助化療，中位存活 10 到 12 個月；只截肢不化療只剩 4 到 5 個月。',
  learning_objectives: [
    '描述犬骨肉瘤的好發部位與「遠離肘關節、靠近膝關節」的規律',
    '說明 OSA 影像學特徵與組織病理確診的必要性',
    '比較截肢 vs 保肢手術的適應症與預後差異',
    '列出輔助化療方案及其對存活的影響',
    '評估 OSA 的預後因子並進行飼主溝通',
  ],
  key_points: [
    '犬最常見的原發性骨腫瘤（大約 85%），高度惡性',
    '好發大型或巨型犬（超過 25 kg）：Great Dane、Irish Wolfhound、Rottweiler、德國牧羊犬、Greyhound',
    '長骨好發部位的口訣：「Away from the elbow, toward the knee」，順序是遠端橈骨、近端肱骨、遠端股骨或近端脛骨',
    '確診時超過 90% 已經有肺微轉移，這時候胸腔 X 光可能還看不到',
    '標準治療：截肢加化療（Carboplatin 或 Doxorubicin），中位存活 10 到 12 個月',
    '單獨截肢不化療中位存活只剩 4 到 5 個月，因為肺轉移',
    'ALP 升高是很重要的不良預後因子',
  ],
  body: `# 骨肉瘤 (Osteosarcoma)

## 一、病理機制 (Pathophysiology)



### 概述
犬骨肉瘤是最常見也最具侵襲性的原發性骨腫瘤。特徵是骨母細胞會產生骨樣基質（osteoid）。犬 OSA 的生物學行為跟人類青少年 OSA 很像，所以犬被當成重要的比較腫瘤學模型。

### 好發部位
- 附肢骨（75%）：長骨幹骺端
  - 前肢遠端橈骨（最常見）
  - 前肢近端肱骨
  - 後肢遠端股骨
  - 後肢近端脛骨
  - 記憶口訣：「Away from the elbow, toward the knee」
- 中軸骨（25%）：下頷骨、上頷骨、脊椎、顱骨、骨盆

### 影像學特徵
X 光會看到侵襲性骨溶解（osteolysis）加上新骨增生（periosteal reaction），混合型溶骨/增骨模式最常見。Codman triangle（骨膜三角）是骨膜被抬起的特徵性表現。OSA 典型不跨越關節面，但此特徵**不足以可靠區分感染性骨髓炎**（黴菌/細菌性骨髓炎可酷似 OSA）；確診仍須組織病理（± 培養）。胸腔 X 光要拍三面投射看肺轉移，確診時看得到結節的大約 10 到 15%。CT 對肺轉移偵測比較敏感，也可以幫忙做手術計畫。

## 二、臨床表現與診斷 (Clinical Signs & Diagnosis)

好發在大型到巨型犬（超過 30 kg）的四肢長骨幹骺端，尤其是橈骨遠端跟脛骨近端。主訴多半是漸進性跛行加肢體腫脹疼痛，觸診摸得到局部硬性腫脹跟壓痛。X 光典型表現是溶骨性跟增生性混合病變、Codman 三角、日光放射狀骨膜反應。診斷順序是先拍三視圖胸腔 X 光排除肺轉移，接著拍病灶 X 光，最後 FNA 或組織切片確診。ALP 升高是不良預後指標。

## 三、治療策略 (Treatment)

### 治療
### 截肢 + 輔助化療（標準治療）
截肢可以根治局部疼痛，多數犬在 1 到 2 週內就能適應三隻腳走路。化療最常用的是 [藥物:Carboplatin] 300 mg/m² IV q3 weeks × 4 到 6 次。替代方案是 [藥物:Doxorubicin] 30 mg/m² IV q3 weeks × 5 次。中位存活 10 到 12 個月，1 年存活率約 40 到 50%。

### 保肢手術（Limb-sparing surgery）
適合遠端橈骨 OSA（最成功的部位）或飼主拒絕截肢的案例。腫瘤切除後做骨缺損重建（骨移植或金屬植入物）。併發症率比較高，感染就有 30 到 50%。整體預後跟截肢加化療差不多。

### 姑息性治療
姑息性放射治療 2 到 3 次大分割放射就能有效控制疼痛。疼痛管理用 NSAIDs 加 Gabapentin 加 Tramadol。[藥物:Bisphosphonates]（Pamidronate 或 Zoledronate）可以減緩骨溶解跟疼痛。

[圖片:OSA 典型 X 光影像，骨溶解伴骨膜反應]

## 四、併發症與監控 (Complications & Monitoring)

截肢後併發症少，多數犬適應良好。保肢術併發症比較多，植入物感染 15 到 40%、植入物鬆脫跟局部復發都有可能。化療（Carboplatin 或 Doxorubicin）相關毒性有骨髓抑制（要定期 CBC 監控）、消化道症狀，Carboplatin 還有腎毒性要監控 BUN/Cre。術後每 3 個月拍胸腔 X 光追蹤肺轉移，因為大約 90% 在診斷時就有微轉移。

## 五、預後與預後因子 (Prognosis)

單純截肢不化療中位存活 4 到 5 個月，截肢加 Carboplatin 或 Doxorubicin 化療中位存活 10 到 12 個月，1 年存活率約 35 到 50%。不良預後因子包括 ALP 升高、診斷時就有看得到的肺轉移、體重超過 40 kg、近端肱骨病變、組織學有絲分裂指數高。保肢術跟截肢的長期存活率差不多。

## 六、人醫借鑒 (Translational Insights)

| 人醫工具/概念 | 獸醫應用潛力 | 現況 |
|-------------|-------------|------|
| 免疫檢查點抑制劑（anti-PD-1/CTLA-4） | 犬 OSA 術後免疫輔助治療，延長轉移出現時間 | 犬 OSA 免疫治療臨床試驗進行中 |
| mRNA 新抗原疫苗（personalized neoantigen vaccine） | 犬 OSA 個體化免疫治療，針對腫瘤特異突變 | 犬腫瘤新抗原鑑定研究階段 |
| 雙磷酸鹽（Zoledronic acid） | 犬 OSA 抗骨溶蝕及直接抗腫瘤活性 | Pamidronate 已用於犬 OSA 止痛，Zoledronate 研究中 |
| 3D 列印客製化骨植入物 | 犬 OSA 保肢手術的骨缺損重建 | 少數獸醫機構已有臨床案例 |

## 七、臨床爭議與知識空缺 (Controversies & Knowledge Gaps)

| 爭議議題 | 現況 | Evidence Level |
|---------|------|---------------|
| 截肢+化療 vs 保肢+化療的長期存活是否等同 | 多數回顧性研究 OS 差不多，但保肢術感染率有 30 到 50% | Level II |
| Carboplatin vs Doxorubicin vs 交替方案的最佳化療選擇 | 大型回顧性研究沒有明顯差異，交替方案是不是比單藥好仍不確定 | Level II |
| ALP 作為預後指標的臨界值標準化 | ALP 升高公認不好，但是具體切點（正常上限或 2 倍上限）還沒統一 | Level III |
| 免疫治療在犬 OSA 的角色 | 細菌細胞壁提取物（L-MTP-PE）曾經有延長 DFI 的數據，但取得困難。新的免疫療法還在研究 | Level II |

## 八、近期實證更新 (Recent Evidence Updates)

1. **化療方案等效（Selmic 2014, 470 犬）**：carboplatin 與 doxorubicin 為基礎之輔助化療存活相當，無單一最佳方案；交替方案未證實更優。
2. **免疫治療研究中**：免疫檢查點抑制劑（anti-PD-1/L1）、Listeria 載體 HER2 疫苗等臨床試驗進行中；早年 L-MTP-PE 有延長 DFI 數據但取得困難——目前皆非標準治療。
3. **立體定位放射（SRT/SRS）保肢**：作為遠端橈骨等部位的非手術保肢選項漸增，可緩解疼痛、保留肢體，須慎選病例（病理性骨折風險）。
4. **雙磷酸鹽緩和止痛**：pamidronate（Fan 2005）等可減骨溶蝕與疼痛，作為姑息輔助。
> OSA 確診須組織病理（osteoid）；治療與新療法選擇由獸醫腫瘤專科依分期與個案評估。`,
  clinical_pearl: '腫瘤科有個鐵則：「任何大型犬的跛行伴長骨溶蝕性病灶，在證實之前都要先假設是骨肉瘤。」確診一定要靠組織病理，但是骨活檢會增加病理性骨折風險，所以建議同時排截肢或保肢手術。FNA 對 OSA 的診斷率不高，大約 50 到 60%。另一個觀念：胸腔 X 光看起來正常不代表沒事，確診時超過 90% 的犬已經有微轉移，這就是為什麼只截肢不化療中位存活只剩 4 到 5 個月。\n\n【台灣流行病學】犬骨肉瘤在台灣以大型犬好發，黃金、羅威納、德國牧羊犬 HSA 跟 OSA 都是高風險品種。台灣大型犬飼養數量雖然比不上歐美，但是逐年增加，骨肉瘤病例也跟著上升。截肢手術在台灣飼主接受度比較低（文化因素），所以術前溝通跟三腳犬生活品質的衛教就特別重要。Carboplatin 輔助化療在台灣主要動物醫院都做得來。',
  common_mistakes: [
    '只靠 X 光就確診 OSA 沒做組織病理，真菌性骨髓炎的 X 光跟 OSA 長得很像',
    '沒跟飼主說明化療的必要性，截肢不化療中位存活只剩 4 到 5 個月',
    '因為「捨不得截肢」延誤治療，多數大型犬截肢後其實適應良好',
    '忽略 ALP 這個預後因子，ALP 持續升高是不良預後指標',
    '胸腔 X 光只拍兩面：OSA 分期要拍三面投射（VD 加雙側 lateral），這樣肺轉移才容易抓到',
  ],
  disease_data: {
    signalment: '好發大型到巨型犬（超過 25 kg），中位年齡 7 到 8 歲。好發品種：Great Dane、Irish Wolfhound、Rottweiler、德國牧羊犬、Greyhound、Saint Bernard、Doberman、黃金。公犬比母犬略多。絕育犬發病率可能比未絕育的高。',
    etiology: '確切病因還沒搞清楚。風險因子有體重（跟長骨承重壓力正相關）、品種遺傳因素、之前骨折部位有金屬植入物（少見）、骨梗塞。跟人 OSA 不同的是，犬 OSA 跟 retinoblastoma 基因沒有一致關聯。',
    pathogenesis: '骨母細胞惡性轉化後產生骨樣基質（osteoid），這是 OSA 的定義條件。接著局部骨破壞（骨溶解）加上反應性新骨增生，腫瘤侵犯骨皮質跟周圍軟組織，跑出病理性骨折風險，最後早期血行性轉移，主要跑到肺，其次是骨、肝、淋巴結。',
    clinical_signs: [
      { sign: '進行性跛行', category: 'primary', description: '慢性漸進性承重跛行，剛開始 NSAIDs 可能還有效，後來會慢慢失效' },
      { sign: '長骨腫脹', category: 'primary', description: '觸診患肢長骨摸得到硬性腫脹，壓下去會痛' },
      { sign: '骨疼痛', category: 'primary', description: '觸壓患處劇烈疼痛，晚期會變持續性' },
      { sign: '病理性骨折', category: 'secondary', description: '腫瘤把骨結構弱化後自發性骨折，大約 3% 是這樣來就診' },
      { sign: '呼吸症狀', category: 'secondary', description: '晚期肺轉移會咳嗽、呼吸困難，但就診時比較少見' },
    ],
    staging: {
      system: 'TNM Staging for Canine Appendicular OSA',
      stages: [
        'Stage I：低度組織學分級（G1），無轉移（T1-2 N0 M0）',
        'Stage IIA：高度組織學分級（G2），腫瘤未超出骨皮質（T1 N0 M0）',
        'Stage IIB：高度組織學分級，腫瘤超出骨皮質（T2 N0 M0）',
        'Stage III：任何分級，有遠端轉移（任何 T/N，M1）',
      ],
    },
    differential_diagnosis: [
      { condition: '真菌性骨髓炎（Coccidioidomycosis/Blastomycosis）', key_differentiator: 'X 光長得很像 OSA，但是可能跨關節面，血清真菌學檢測陽性，骨活檢可看到真菌' },
      { condition: '細菌性骨髓炎', key_differentiator: '可能會發燒、白血球升高，X 光有骨膜反應但溶骨比較少，培養陽性' },
      { condition: '其他原發性骨腫瘤（軟骨肉瘤、纖維肉瘤）', key_differentiator: '組織病理鑑別重點是沒有 osteoid 產生，生物學行為也不同' },
      { condition: '轉移性骨腫瘤', key_differentiator: '多灶性溶骨病灶加上已知原發腫瘤病史' },
    ],
    diagnostic_workup: '工作流程是：理學檢查（觸診患肢腫脹壓痛），患肢 X 光（看溶骨/增骨混合病灶跟 Codman triangle），胸腔 X 光三面投射做肺轉移篩檢，CBC/BCS（ALP 是重要預後指標），骨活檢或切除後組織病理確診，必要時加 CT 評估肺轉移、腫瘤範圍跟保肢手術計畫。',
    treatment_protocol: '標準治療是截肢加輔助化療。化療首選 Carboplatin 300 mg/m² IV q3 weeks × 4 到 6 次，替代是 Doxorubicin 30 mg/m² IV q3 weeks × 5 次，或者 alternating Carboplatin/Doxorubicin。保肢手術最適合遠端橈骨 OSA。姑息性治療用放射治療（像 3 × 8-10 Gy）加疼痛管理。Bisphosphonates（Pamidronate 1-2 mg/kg IV q4 weeks）可以幫忙止痛。',
    prognosis: '截肢加化療中位存活 10 到 12 個月，1 年存活率 40 到 50%，2 年存活率 15 到 20%。單獨截肢中位存活 4 到 5 個月。姑息性治療中位存活 2 到 4 個月。不良預後因子有 ALP 升高、骨腫瘤體積大、近端肱骨位置、組織學分級高、確診時已經看得到肺轉移。',
    monitoring: '化療期間每次治療前要 CBC。術後每 2 到 3 個月拍胸腔 X 光監測肺轉移。每 3 個月測 ALP。每次回診觸診截肢處跟全身淋巴結。保肢手術要額外監測植入物穩定性跟感染徵兆。',
    owner_communication: '骨肉瘤是犬最常見也最具侵襲性的骨腫瘤。飼主聽到要截肢臉色都會變，但其實多數大型犬截肢後 1 到 2 週內就能適應，生活品質會回來。化療這部分不能省，截肢搭配化療的存活期大概是只截肢的 2 到 3 倍。治療目標是延長有品質的生活時間。預後談話很難講，要誠實告知飼主就算積極治療，多數犬還是會在 1 到 2 年內因為肺轉移過世。',
  },
  diagnostic_data: null,
  procedure_data: null,
  visual_placeholders: [
    { position: '好發部位段落後', type: 'annotated_image', description: '犬骨肉瘤好發長骨部位標示圖' },
    { position: '影像學段落後', type: 'comparison_table', description: 'OSA vs 真菌性骨髓炎 X 光鑑別表' },
  ],
  interactive_placeholders: [],
  drug_api_links: ['Carboplatin', 'Doxorubicin', 'Gabapentin', 'Tramadol'],
  references: [
    { type: 'textbook', citation: 'Vail DM, Thamm DH, Liptak JM. Withrow & MacEwen\'s Small Animal Clinical Oncology, 6th ed. Elsevier, 2020.', relevance: 'OSA 完整章節' },
    { type: 'journal', citation: 'Selmic LE, Burton JH, Thamm DH, et al. Comparison of carboplatin and doxorubicin-based chemotherapy protocols in 470 dogs after amputation for treatment of appendicular osteosarcoma. J Vet Intern Med. 2014;28(2):554-563. doi:10.1111/jvim.12313.', relevance: '化療方案比較大型研究（470 犬）' },
    { type: 'journal', citation: 'Szewczyk M, Lechowski R, Zabielska K. What do we know about canine osteosarcoma treatment? Vet Res Commun. 2015;39(1):61-67. doi:10.1007/s11259-014-9623-0.', relevance: 'OSA 治療綜合回顧' },
    { type: 'journal', citation: 'Fan TM, de Lorimier LP, Charney SC, et al. Evaluation of intravenous pamidronate administration in 33 cancer-bearing dogs with primary or secondary bone involvement. J Vet Intern Med. 2005;19(1):74-80. doi:10.1111/j.1939-1676.2005.tb02661.x.', relevance: '雙磷酸鹽（pamidronate）骨腫瘤緩和止痛' },
    { type: 'guideline', citation: 'Biller B, Berg J, Garrett L, et al. 2016 AAHA Oncology Guidelines for Dogs and Cats. J Am Anim Hosp Assoc. 2016;52(4):181-204. doi:10.5326/JAAHA-MS-6570.', relevance: 'AAHA 腫瘤科指引，OSA 診斷與治療建議' },
  ],
  is_current: true,
  created_at: now,
};

/** 血管肉瘤 (HSA)，疾病型 */
const contentHSA: NodeContent = {
  id: 'CONTENT-ONCO-L3-004',
  node_id: 'ONCO-L3-004',
  version: 2,
  summary: '犬血管肉瘤（Hemangiosarcoma, HSA）起源於血管內皮細胞，高度惡性，好發於脾臟、右心耳跟肝臟。德國牧羊犬 HSA 跟黃金是最高風險的兩個品種。臨床上常見急性腹腔內出血（脾臟 HSA 破裂）或心包積液（心臟 HSA），確診時多半已經有廣泛轉移。就算積極治療（脾臟切除加化療），中位存活也只有 4 到 6 個月。',
  learning_objectives: [
    '列出 HSA 的三大好發內臟部位及其各自臨床表現',
    '描述脾臟腫塊破裂伴急性血腹的緊急處置流程',
    '說明脾臟腫塊的 2/3 規律與血管肉瘤的關聯',
    '比較手術 + 化療 vs 單獨手術的預後差異',
    '辨識心臟 HSA 導致心包積液的臨床特徵',
  ],
  key_points: [
    '起源於血管內皮細胞，高度惡性，很早就會廣泛血行性轉移',
    '三大好發部位：脾臟（50%）、右心耳（25%）、肝臟（5 到 15%）',
    '好發品種：德國牧羊犬、黃金、拉布拉多。中位年齡 9 到 12 歲',
    '脾臟腫塊的 2/3 規律：脾臟腫塊大約 2/3 是惡性，惡性腫塊裡面大約 2/3 是 HSA',
    '常見的急性表現是脾臟 HSA 破裂跑出血腹，導致急性虛脫，這是急診常見的就診模式',
    '標準治療：脾臟切除加 Doxorubicin 化療，中位存活 4 到 6 個月',
    '單獨脾臟切除不化療中位存活只剩 1 到 3 個月',
  ],
  body: `# 血管肉瘤 (Hemangiosarcoma)

## 一、病理機制 (Pathophysiology)



### 概述
犬血管肉瘤（HSA）起源於血管內皮細胞，是侵襲性很強的惡性腫瘤。腫瘤細胞保留血管內皮特性，會形成血竇跟血管腔，所以出血跟轉移的傾向都很高。

### 好發部位
### 脾臟 HSA（約 50%）
- 最常見的內臟 HSA
- 常以急性腹腔內出血（血腹）為首次臨床表現
- 脾臟腫塊的「2/3 規律」

### 心臟 HSA（約 25%）
好發右心耳（right auricular appendage）。會造成心包積液變成心包填塞。主要症狀是急性虛脫、運動不耐、腹水。

### 肝臟 HSA（5 到 15%）
表現是肝臟腫塊或彌漫性浸潤，也可能造成腹腔內出血。

### 皮膚/皮下 HSA
皮膚型預後最好，局部切除有機會治癒。皮下型生物學行為介於皮膚型跟內臟型之間。

### 急診處置：脾臟 HSA 破裂
1. 快速評估（ABC）：蒼白黏膜、心搏過速、弱脈
2. 穩定：靜脈輸液（crystalloid + colloid）± 輸血
3. 腹部快速超音波（AFAST）：確認腹腔積液
4. 腹腔穿刺：PCV > 25% 高度提示內臟出血
5. 穩定後手術探查 + 脾臟切除
6. 組織病理確認

## 二、臨床表現與診斷 (Clinical Signs & Diagnosis)

脾臟型最常見，會以急性腹腔出血表現，突發無力、黏膜蒼白、腹部膨大。心臟型則表現為心包填塞，可看到頸靜脈怒張、低血壓、心音減弱。皮膚型預後相對比較好，會看到皮下暗紅色腫塊。診斷重點是腹超見脾臟不均質腫塊加減腹水、心超見心包積液、胸腔 X 光排除肺轉移。術前 FNA 出血風險高，多半靠影像學加手術切除後病理確診。

## 三、治療策略 (Treatment)

### 治療
- 脾臟切除 + 化療：[藥物:Doxorubicin] 30 mg/m² IV q3 weeks × 5-6 次
- 替代方案：Doxorubicin + [藥物:Cyclophosphamide] + [藥物:Vincristine] (VAC protocol)
- 節拍式化療：[藥物:Cyclophosphamide] 低劑量口服 + [藥物:Piroxicam]
- 心臟 HSA：心包切除（pericardectomy）± 化療

[圖片:脾臟 HSA 超音波與外觀影像]

## 四、併發症與監控 (Complications & Monitoring)

主要併發症是腫瘤破裂造成急性內出血跟 DIC。脾切除術後 72 小時要盯緊：心律不整（尤其 VPC）發生率 25 到 50%，必要時用 Lidocaine 持續輸注。化療（Doxorubicin）期間要監控心功能跟血球計數。術後每個月腹超、每 2 到 3 個月拍胸腔 X 光追蹤轉移。右心房型要長期監控心包積液復發。

## 五、預後與預後因子 (Prognosis)

脾臟 HSA 預後很差：單純脾切除中位存活 1 到 3 個月，脾切除加 Doxorubicin 化療中位存活約 4 到 6 個月。心臟型更糟，中位存活不到 4 個月。皮膚型（真皮層）預後相對好，完整切除後中位存活可以到 6 到 12 個月以上。不良預後因子有：診斷時腹腔積血量大、脾臟破裂、Stage III（已轉移）、有 DIC 發生。

## 六、人醫借鑒 (Translational Insights)

| 人醫工具/概念 | 獸醫應用潛力 | 現況 |
|-------------|-------------|------|
| 抗 VEGF 標靶治療（Bevacizumab） | 犬 HSA 的抗血管新生標靶治療，腫瘤為血管來源 | Toceranib (VEGFR-TKI) 已用於犬 HSA 臨床研究 |
| eBAT（雙特異性標靶毒素） | 犬 HSA 血管內皮特異靶向治療 | eBAT 犬 HSA 試驗顯示延長 DFI 的初步結果 |
| 液態活檢（cfDNA/ctDNA） | 犬 HSA 的早期偵測，尤其高風險品種篩檢 | 犬 HSA 特異性 ctDNA 標記研究中 |
| 免疫治療（anti-PD-L1 + Doxorubicin） | 犬 HSA 免疫化療聯合治療 | 犬 HSA 免疫治療早期試驗進行中 |

## 七、臨床爭議與知識空缺 (Controversies & Knowledge Gaps)

| 爭議議題 | 現況 | Evidence Level |
|---------|------|---------------|
| Doxorubicin 化療對脾臟 HSA 的實際存活獲益 | MST 從約 90 天延長到 140 到 180 天，飼主 QoL 負擔跟獲益要權衡 | Level I |
| 節拍式化療 vs MTD Doxorubicin 在 HSA 輔助治療中的比較 | 回顧性數據看起來節拍式方案存活類似，但前瞻性 RCT 還沒有 | Level III |
| 術前腹超「黃金規則」：脾臟腫塊 2/3 惡性中 2/3 為 HSA 是否仍成立 | 近年研究 HSA 比例可能因篩檢偏差偏高，良性腫塊比例可能被低估 | Level II |
| 心臟 HSA 心包切除 ± 右心耳切除的手術可行性跟預後 | 部分外科中心做得到，但手術風險高、存活延長有限 | Level III |

## 八、近期實證更新 (Recent Evidence Updates)

1. **化療存活有限（Wendelburg 2015, 208 例）**：脾切+doxorubicin MST ~4-6 月、1 年存活 <10%；化療獲益真實但有限，須與飼主充分溝通。
2. **節拍式化療（Lana 2007）**：低劑量口服 cyclophosphamide/etoposide ± piroxicam 作為替代/輔助，耐受佳、回顧性存活與傳統方案相近。
3. **eBAT 雙特異標靶毒素（Borgatti 2017）**：靶向 EGFR/uPAR，初步延長 DFI；屬研究階段、非標準。
4. **免疫治療 + ctDNA**：anti-PD-L1 化免合併、ctDNA 早期偵測研究中（高風險品種篩檢潛力）。
5. **輔助療法（Yunnan Baiyao、PSP/I'M-YUNITY）**：證據有限/不一致，僅作輔助、不取代手術+化療。
> HSA 高度惡性、確診多已微轉移；治療目標為延長有品質存活，方案由獸醫腫瘤專科依分期與個案評估。`,
  clinical_pearl: '脾臟 HSA 急診典型就診模式：老年黃金或德國牧羊犬突然倒地、黏膜蒼白，這就是脾臟 HSA 破裂跑出血腹的標準畫面。急診處置第一步是穩定（輸液、輸血），不是直接衝手術室。AFAST 加上腹腔穿刺液 PCV 是快速確認血腹最實用的工具。手術前一定要先跟飼主把 HSA 的可能性跟預後談清楚，就算手術成功，後面的治療決策也要建立在飼主對預後有正確認知的前提。\n\n【台灣流行病學】血管肉瘤在台灣以黃金跟德國牧羊犬 HSA 最常見，這兩個品種在台灣飼養數量大。台灣獸醫腹超篩檢已經普及，脾臟腫塊常常在例行健檢時就被抓到，這對早期診斷很有幫助。台灣犬隻血庫資源有限，HSA 急性出血病例的輸血需求是臨床挑戰。Doxorubicin 化療在台灣主要腫瘤專科都做得來，但是飼主對 HSA 預後的認知還可以再加強。',
  common_mistakes: [
    '術前沒跟飼主好好談 HSA 的可能性跟預後，術後才說「可能是血管肉瘤」，飼主會措手不及',
    '脾臟腫塊去做 FNA：血管性腫塊 FNA 出血風險高、診斷率又低，建議直接手術探查',
    '脾臟切除後沒送組織病理：大約 1/3 的脾臟腫塊是良性（血腫），確認病理對後面的決策很重要',
    '忽略心臟 HSA 作為心包積液的鑑別診斷，老年大型犬心包積液最常見原因就是 HSA',
    '對皮膚或皮下型 HSA 用跟內臟型一樣的悲觀預後：皮膚型 HSA 手術切除後預後其實好很多',
  ],
  disease_data: {
    signalment: '好發大型犬，中位年齡 9 到 12 歲。最高風險品種：德國牧羊犬、黃金、拉布拉多。其他好發品種：Flat-Coated Retriever、拳師犬、Bernese Mountain Dog。公犬可能略多。',
    etiology: '確切病因還沒搞清楚。血管內皮細胞惡性轉化，可能跟遺傳因素（品種偏好很強）跟環境因素（紫外線暴露跟皮膚型有關）都有關。研究發現 VEGF/VEGFR 跟 PDGF 信號通路在 HSA 發生中扮演重要角色。',
    pathogenesis: '血管內皮細胞惡性增殖之後形成異常血管腔跟血竇，腫瘤血管很脆弱容易破裂，反覆出血跟血腫形成，最後跑出急性大出血（破到腹腔或心包腔）。同時，血管內皮來源讓腫瘤細胞直接接觸血液，所以很早期就廣泛血行性轉移（肺、肝、腦、骨、大網膜），DIC（瀰漫性血管內凝血）很常見。',
    clinical_signs: [
      { sign: '急性虛脫', category: 'primary', description: '脾臟 HSA 破裂跑出急性血腹：突然無力倒地、黏膜蒼白、心搏過速、弱脈' },
      { sign: '間歇性虛弱', category: 'primary', description: '反覆小量出血加上自行止血，飼主常會描述「昨天很虛弱但今天又好了」' },
      { sign: '腹部膨大', category: 'primary', description: '腹腔積液（血腹）或脾腫' },
      { sign: '心包積液/心包填塞', category: 'secondary', description: '心臟 HSA 會看到頸靜脈怒張、脈搏消失（pulsus paradoxus）、心音低沉' },
      { sign: '貧血', category: 'secondary', description: '慢性失血或 DIC 造成的再生性或非再生性貧血' },
    ],
    staging: {
      system: 'Modified WHO Staging for Canine Splenic HSA',
      stages: [
        'Stage I：原發腫瘤局限（< 5 cm），無破裂，無轉移',
        'Stage II：破裂腫瘤伴局部出血，或腫瘤 > 5 cm 但無遠端轉移',
        'Stage III：有遠端轉移（肝、肺、大網膜等）',
      ],
    },
    differential_diagnosis: [
      { condition: '脾臟血腫/結節性增生', key_differentiator: '良性，組織病理確認，大約占脾臟腫塊的 1/3' },
      { condition: '脾臟淋巴瘤', key_differentiator: '脾臟是瀰漫性腫大而不是局灶性腫塊，FNA 看得到淋巴瘤細胞' },
      { condition: '特發性心包積液', key_differentiator: '心包積液細胞學是反應性間皮細胞，心超看不到右心耳腫塊' },
      { condition: '心基底腫瘤（Chemodectoma）', key_differentiator: '短頭犬種好發，心超看得到心基底腫塊，不是右心耳' },
    ],
    diagnostic_workup: '流程是：急診評估（AFAST、腹腔穿刺 PCV）；穩定病人（輸液/輸血）；CBC/BCS/凝血（常見貧血、血小板減少、DIC）；腹部超音波看脾臟腫塊、肝臟轉移、腹水；心臟超音波排除心臟 HSA 跟心包積液；胸腔 X 光三面投射；手術探查加脾臟切除；組織病理確診。',
    treatment_protocol: '脾臟 HSA 是脾臟切除加化療。首選 Doxorubicin 30 mg/m² IV q3 weeks × 5 到 6 次。替代方案是 VAC protocol（Vincristine 加 Doxorubicin 加 Cyclophosphamide）。節拍式化療是低劑量 Cyclophosphamide 10 到 15 mg/m²/day PO 加 Piroxicam 0.3 mg/kg PO SID。心臟 HSA 是心包切除（pericardectomy）加減右心耳切除（如果做得到）加化療。皮膚型則是局部廣泛切除加減化療。',
    prognosis: '內臟 HSA 預後不好。脾臟切除加化療中位存活 4 到 6 個月，1 年存活率不到 10%。單獨脾臟切除不化療中位存活 1 到 3 個月。心臟 HSA 有治療中位存活也只有 1 到 4 個月。Stage I（沒破裂、無轉移）預後比較好，中位存活可以到 8 到 12 個月。皮膚型切緣乾淨手術後中位存活超過 12 個月。',
    monitoring: '化療期間每次治療前要做 CBC（Doxorubicin 會骨髓抑制）。累積劑量要監測（Doxorubicin 心臟毒性的警戒線是總劑量超過 180 到 240 mg/m²）。每 2 到 3 個月腹超跟胸腔 X 光監測轉移，加上心超追蹤心功能。',
    owner_communication: 'HSA 是犬最具侵襲性的腫瘤之一，確診時多半已經有微轉移。就算脾臟切除手術成功，化療效果也很有限。治療目標是延長有品質的生命時間。脾臟切除後多數犬 1 到 2 天內就能恢復，化療期間生活品質也還可以。預後談話很難講，要誠實告知飼主中位存活大約 4 到 6 個月，讓他們在資訊充足下做決定。',
  },
  diagnostic_data: null,
  procedure_data: null,
  visual_placeholders: [
    { position: '急診處置段落後', type: 'flowchart', description: '脾臟 HSA 破裂急診處置流程圖' },
    { position: '好發部位段落後', type: 'annotated_image', description: 'HSA 三大內臟好發部位示意圖' },
  ],
  interactive_placeholders: [],
  drug_api_links: ['Doxorubicin', 'Cyclophosphamide', 'Vincristine', 'Piroxicam'],
  references: [
    { type: 'textbook', citation: 'Vail DM, Thamm DH, Liptak JM. Withrow & MacEwen\'s Small Animal Clinical Oncology, 6th ed. Elsevier, 2020. Chapter: Hemangiosarcoma.', relevance: 'HSA 完整章節' },
    { type: 'journal', citation: 'Wendelburg KM, Price LL, Burgess KE, et al. Survival time of dogs with splenic hemangiosarcoma treated by splenectomy with or without adjuvant chemotherapy: 208 cases (2001-2012). J Am Vet Med Assoc. 2015;247(4):393-403. doi:10.2460/javma.247.4.393.', relevance: '脾臟 HSA 脾切±化療存活大型回顧' },
    { type: 'journal', citation: 'Lana S, U\'ren L, Plaza S, et al. Continuous low-dose oral chemotherapy for adjuvant therapy of splenic hemangiosarcoma in dogs. J Vet Intern Med. 2007;21(4):764-769. doi:10.1111/j.1939-1676.2007.tb03019.x.', relevance: '脾臟 HSA 節拍式化療（近期實證）' },
    { type: 'journal', citation: 'Borgatti A, Koopmeiners JS, Sarver AL, et al. Safe and effective sarcoma therapy through bispecific targeting of EGFR and uPAR. Mol Cancer Ther. 2017;16(5):956-965. doi:10.1158/1535-7163.MCT-16-0637.', relevance: 'eBAT 雙特異標靶毒素治療犬 HSA/肉瘤（近期實證）' },
    { type: 'guideline', citation: 'Biller B, Berg J, Garrett L, et al. 2016 AAHA Oncology Guidelines for Dogs and Cats. J Am Anim Hosp Assoc. 2016;52(4):181-204. doi:10.5326/JAAHA-MS-6570.', relevance: 'AAHA 腫瘤科指引，HSA 管理建議' },
  ],
  is_current: true,
  created_at: now,
};

/** 口腔黑色素瘤，疾病型 */
const contentOralMelanoma: NodeContent = {
  id: 'CONTENT-ONCO-L3-005',
  node_id: 'ONCO-L3-005',
  version: 2,
  summary: '犬口腔黑色素瘤（Oral Melanoma）是犬口腔最常見的惡性腫瘤（約占惡性口腔腫瘤 30-40%）。多數呈惡性、局部侵襲性強（常侵犯骨）、轉移率高（肺、區域淋巴結），但並非「一律惡性」——組織學高分化型（HWDMN）可呈良性行為，現行以「位置＋組織學分級（有絲分裂數口腔 ≥4/10 HPF、Ki-67）」共同判讀。治療以積極手術（軟組織切緣 ≥2cm）為主，輔以粗分割放療、化療（反應率有限）或免疫治療。Oncept 疫苗是首個獲 USDA 核准的治療性腫瘤疫苗（2010 完全核准），但其存活獲益在獨立回顧研究中未獲證實。',
  learning_objectives: [
    '說明犬口腔黑色素瘤的 WHO 臨床分期系統',
    '描述口腔黑色素瘤的典型臨床表現與好發部位',
    '比較手術 ± 放射治療 ± 免疫治療的效果',
    '解釋犬黑色素瘤疫苗（Oncept）的作用機轉與適應症',
    '列出影響口腔黑色素瘤預後的關鍵因子',
  ],
  key_points: [
    '犬口腔最常見的惡性腫瘤（約占惡性口腔腫瘤 30-40%），好發中老年小型犬（口腔黏膜深色素品種風險較高）',
    '多數惡性、預後較皮膚型差，但「非一律惡性」——組織學高分化型（HWDMN）可良性行為；惡性度以位置＋組織學分級（有絲分裂數、核異型性、Ki-67）判讀',
    'WHO 分期依腫瘤最大直徑：I <2cm、II 2-4cm、III >4cm 或任何大小合併淋巴結轉移(N1)、IV 遠端轉移',
    '局部侵襲性強，常侵犯下頷骨/上頷骨；約 1/3 為無色素（amelanotic），確診常需 IHC（Melan-A/PNL2/S-100/tyrosinase）',
    '治療首選積極手術（軟組織切緣 ≥2cm、骨 1-2cm），輔以粗分割放療；化療反應率有限（~18-28%）且不延長存活',
    'Oncept 是異種人 tyrosinase DNA 疫苗（打破免疫耐受），2010 完全核准；但存活獲益在獨立回顧研究（Ottnod 2013）未獲證實',
    '腫瘤大小/分期是最重要預後因子（Stage I MST ~17-18 個月、Stage III ~3-6 個月）；不良預後 MI ≥4/10 HPF（口腔閾值，非皮膚型的 ≥3）',
  ],
  body: `# 口腔黑色素瘤 (Oral Melanoma)

## 一、病理機制 (Pathophysiology)



### 概述
犬口腔黑色素瘤是犬口腔「最常見的惡性腫瘤」，約占所有犬口腔「惡性」腫瘤 30 到 40%（其次為鱗狀細胞癌 SCC 17 到 25%、纖維肉瘤 8 到 25%）。⚠️ 此「居首」排序取決於是否納入扁桃體 SCC——納入時 SCC（約 41%）可反超黑色素瘤（約 37%），排除扁桃體 SCC 時黑色素瘤才明確居首（約 46%）。多數口腔黑色素瘤呈惡性、局部侵襲性強、轉移潛力高，預後一般較皮膚型差；但現行共識（OPWG 2022）已把舊「口腔＝一律惡性」二分法修正為「解剖位置＋組織學分級共同判讀」——少數組織學高分化型（HWDMN：有絲分裂數 ≤3/10 HPF、核異型性極小）可呈良性行為（Esplin 2008：中位存活約 34 個月、復發率約 3%）。

### 好發部位與特徵
口腔內任何部位都可能長，牙齦最常見，其他像唇黏膜、舌、硬顎、扁桃腺也有。外觀可以是色素性（黑色或棕色），或無色素性（amelanotic，粉紅色）。無色素性約占 1/3，因缺乏黑色素顆粒常在細胞學/H&E 下被誤認為低分化癌或肉瘤，確診常需免疫組化（IHC）標記：Melan-A、PNL2、S-100、tyrosinase；無色素型的生物行為與有色素型相同。

## 二、臨床表現與診斷 (Clinical Signs & Diagnosis)

### WHO 臨床分期
| 期別 | 定義 |
|------|------|
| I | 腫瘤最大直徑 < 2 cm，無轉移 |
| II | 腫瘤最大直徑 2-4 cm，無轉移 |
| III | 腫瘤最大直徑 > 4 cm 和/或有區域淋巴結轉移（N1） |
| IV | 有遠端轉移 |

> 註：任何大小腫瘤只要有區域淋巴結轉移（N1）即上修為 Stage III（不限 >4 cm）。分期依 WHO / Owen 1980 TNM，Polton 2024 共識沿用。

## 三、治療策略 (Treatment)

### 治療
### 手術（首選）
切緣要積極：軟組織切緣建議 ≥ 2 cm、骨切緣 1 到 2 cm 健康骨質（依 CT 規劃節段性 mandibulectomy 下頷骨切除或 maxillectomy 上頷骨切除）。完整切除局部復發率約 15 到 22%，不完整切除可高達約 65%。功能預後：多數犬術後進食飲水恢復良好、飼主滿意度高（Bull 2023：約 71% 於 4 週內正常進食、90% 願再次選擇；Fox 1997：85% 滿意），但仍有相當比例（約 29 到 44%）出現暫時或持續進食困難，術前須與飼主充分溝通。

### 放射治療
術後輔助或無法手術時當姑息/減積治療用。黑色素瘤對大劑量分割（hypofractionated）放射反應較好。常用粗分割方案：8 Gy × 4（=32 Gy，現行常用）或 Proulx 2003 經典的 9 Gy × 4（=36 Gy），每週一次；其他如 6 Gy × 6。整體反應率高（常 > 70% 可見腫瘤縮小），但局部控制不持久，且不改變遠端轉移主導的整體存活。

### 免疫治療
[藥物:Oncept] 犬黑色素瘤疫苗是「異種（xenogeneic）人 tyrosinase 質體 DNA 疫苗」，以無針經皮裝置（VET JET）肌肉給藥，機轉是打破對黑色素細胞抗原（tyrosinase）的免疫耐受。療程：初始每 2 週 × 4 次、之後每 6 個月追加；適應症為 WHO Stage II 到 III、局部控制良好後之輔助治療。核准：2007 年 USDA 條件性核准、2010 年 2 月升為完全核准，為首個獲 USDA 核准的治療性腫瘤疫苗。⚠️ 存活獲益有爭議：廠商相關研究（Grosenbaugh 2011）提示改善存活，但獨立回顧性研究（Ottnod 2013）未能證實存活獲益——詳見第七節爭議。

### 化療
對肉眼可見腫瘤反應率有限（約 18 到 28%，完全緩解少見且不持久）。證據最充分者為 [藥物:Carboplatin]（300 到 350 mg/m² IV q3wk，反應率約 28%；Rassnick 2001）；cisplatin + piroxicam 約 18%；[藥物:Melphalan] 為次要選項、非與 carboplatin 並列首選；toceranib（Palladia）僅零星病例報告活性、無確立反應率。⚠️ 多項研究顯示化療加於手術/放療並未延長存活，角色有限。

[圖片:口腔黑色素瘤色素性與無色素性臨床照片對比]

## 四、併發症與監控 (Complications & Monitoring)

手術併發症有術後口腔出血、進食困難（手術範圍對咬合的影響要評估）、下頷骨切除後的美觀跟功能適應期。放射治療可能引起口腔黏膜炎、唾液腺功能下降、晚期骨壞死。Oncept 黑色素瘤疫苗注射部位偶爾會看到局部反應。監控重點是每個月口腔檢查看局部復發，每 2 到 3 個月拍胸腔 X 光跟區域淋巴結評估（觸診加 FNA）追蹤轉移。

## 五、預後與預後因子 (Prognosis)

口腔黑色素瘤多為高度惡性腫瘤，腫瘤大小/分期是最重要的預後因子。以手術治療，WHO Stage I（< 2 cm）中位存活約 17 到 18 個月（MacEwen 1986：511 天），Stage II（2 到 4 cm）約 5 到 6 個月（MacEwen 1986：160 天），Stage III（> 4 cm 或淋巴結轉移）教科書標竿常引約 3 個月（惟 MacEwen 1986 手術組實為 168 天、約 5.6 個月，數值依世代/治療而異），Stage IV（遠端轉移）預後最差。不良預後因子：腫瘤 > 2 cm/分期高、骨侵犯（溶骨）、有絲分裂指數達統計閾值 **≥ 4/10 HPF**（4 即屬不良；Bergin/Smedley 2011、OPWG 2022；注意 ≥ 3/10 HPF 是「皮膚型」的良惡分界、不適用口腔型）、Ki-67 高（> 19.5）、診斷時已有淋巴結或遠端轉移。Oncept 疫苗對存活的實際獲益尚未在獨立研究中確認（見爭議）。

## 六、人醫借鑒 (Translational Insights)

| 人醫工具/概念 | 獸醫應用潛力 | 現況 |
|-------------|-------------|------|
| 免疫檢查點抑制劑（anti-PD-1/anti-CTLA-4） | 犬口腔黑色素瘤的免疫治療，PD-L1 高表達腫瘤 | 犬用抗 PD-L1 抗體（c4G12）初步臨床療效已發表（Maekawa 2023） |
| Oncept 黑色素瘤疫苗（xenogeneic tyrosinase DNA） | 犬口腔黑色素瘤 WHO Stage II-III 的免疫輔助治療 | USDA 2007 條件性、2010 完全核准；廠商研究提示獲益，惟獨立回顧研究（Ottnod 2013）未證實存活優勢 |
| BRAF/NRAS 標靶治療 | 犬黑色素瘤可能攜帶可治療性突變，精準醫療 | 犬黑色素瘤突變圖譜研究進行中 |
| 腫瘤浸潤淋巴球（TIL）治療 | 犬黑色素瘤的個體化細胞免疫治療 | 人醫黑色素瘤已有突破，犬尚在早期研究 |

## 七、臨床爭議與知識空缺 (Controversies & Knowledge Gaps)

| 爭議議題 | 現況 | Evidence Level |
|---------|------|---------------|
| Oncept 疫苗的實際存活獲益 | 廠商相關研究（Grosenbaugh 2011 AJVR）提示改善存活並支持 USDA 核准，但獨立回顧性研究（Ottnod 2013 VCO）未能證實存活獲益；Polton 2024 共識視為「可考慮」之輔助治療、獲益證據仍不一致 | Level II |
| 口腔黑色素瘤惡性度判定 | 舊「口腔＝一律惡性」二分法已修正；OPWG 2022 主張以有絲分裂數（口腔 ≥ 4/10 HPF）、核異型性、Ki-67 分級，HWDMN 為良性行為變異型 | Level II |
| 無色素性（amelanotic）黑色素瘤的預後是否更差 | 生物行為與有色素型相同；部分研究提示更具侵襲性，但尚未有定論 | Level III |
| 粗分割放療（8-9 Gy × 4）vs 標準分割在口腔黑色素瘤的最佳方案 | 粗分割反應率佳且麻醉次數少，但長期局部控制率的比較數據有限 | Level III |
| 手術切緣 1 cm vs 2 cm 對局部復發率的影響 | 軟組織建議 ≥ 2 cm、骨 1-2 cm；口腔解剖限制下小腫瘤 1 cm 軟組織可能足夠 | Level III |

## 八、近期更新 (Recent Updates)

- **Polton 2024（Front Vet Sci 犬貓黑色素瘤共識與指引）**：整合手術切緣（軟組織 ≥ 2 cm、骨 1-2 cm）、TNM 分期與輔助治療建議；將 Oncept 定位為「可考慮」而非必然獲益之輔助治療。
- **OPWG 2022（Smedley 等，Vet Comp Oncol）**：確立犬黑色素細胞腫瘤組織學預後分級——口腔/唇有絲分裂數 ≥ 4/10 HPF、核異型性 ≥ 30%、Ki-67、色素 ≥ 50%、骨/血管侵犯；並強調「單靠解剖位置無法預測預後」，修正舊二分法。
- **anti-PD-L1 免疫檢查點治療**：Maekawa 2023（PLOS ONE）發表犬用抗 PD-L1 抗體（c4G12）於晚期惡性腫瘤（含口腔黑色素瘤）之安全性與臨床療效初步數據，為犬黑色素瘤免疫治療新方向。
- **Oncept 存活獲益再評估**：多篇獨立回顧性研究（Ottnod 2013 等）未複製出廠商研究的存活優勢，其臨床價值仍待前瞻對照試驗釐清。`,
  clinical_pearl: '口腔黑色素瘤有兩大陷阱要小心。第一是大約 1/3 是無色素性（amelanotic），外觀是粉紅色，很容易被誤認為良性增生或其他口腔腫瘤，所以任何口腔腫塊都要 FNA 或活檢。第二是口腔黑色素瘤常侵犯骨組織，手術前一定要拍 X 光或 CT 評估骨侵犯程度，不然切緣可能不夠。腫瘤型態跟生物行為先確認，術前 CT 對手術計畫很重要。\n\n【台灣流行病學】口腔黑色素瘤在台灣是犬常見的口腔惡性腫瘤，好發中老年小型犬，台灣常見的迷你型犬像貴賓、雪納瑞都有報告。飼主通常等到犬進食困難或口臭加重才就醫，這時候腫瘤多半已經偏大，所以推廣定期口腔檢查對早期發現很有幫助。Oncept 黑色素瘤疫苗在台灣取得管道有限，但放射治療在部分教學醫院都有提供。',
  common_mistakes: [
    '將無色素性口腔黑色素瘤誤認為良性增生而延誤診斷（約 1/3 為 amelanotic，確診常需 IHC）',
    '手術切緣不足：軟組織應 ≥2cm、骨 1-2cm，口腔黑色素瘤常浸潤深層骨組織需考慮骨切除',
    '未進行區域淋巴結（下頷/咽後淋巴結）FNA 評估（N1 會把任何大小腫瘤上修為 Stage III）',
    '拿皮膚黑色素瘤的預後類比口腔黑色素瘤：口腔型預後差很多（但少數口腔 HWDMN 為良性變異型，勿反向一律當高度惡性）',
    '用皮膚型的有絲分裂閾值（≥3/10 HPF）判口腔型：口腔型統計預後閾值是 ≥4/10 HPF',
    '把 Oncept 疫苗當成確定能延長存活：獨立回顧研究（Ottnod 2013）未證實存活獲益，屬可考慮之輔助治療',
    '忽略術前影像評估骨侵犯，未拍攝頭顱 X 光或 CT 就安排手術',
  ],
  disease_data: {
    signalment: '中老年犬（中位年齡約 11 歲、多在 10-12 歲）。好發品種：Scottish Terrier、Cocker Spaniel、Golden Retriever、Poodle（含迷你型）、Chow Chow、Dachshund。小型犬和口腔黏膜色素沉著較深的品種（如 Chow Chow）風險較高。性別傾向未有定論——最大宗回顧（Ramos-Vara 2000, n=338）未見性別差異，僅早期小型研究曾提示雄性略多。',
    etiology: '確切病因不明。口腔黑色素細胞的惡性轉化可能與慢性刺激、遺傳易感性相關。BRAF 突變在犬口腔黑色素瘤中的角色正在研究中。',
    pathogenesis: '口腔黑色素細胞惡性增殖 → 局部浸潤（黏膜下層 → 骨膜 → 骨組織）→ 區域淋巴結轉移（下頷淋巴結、咽後淋巴結）→ 遠端血行性轉移（肺為主，其次肝、腦）。無色素性黑色素瘤的生物學行為可能更具侵襲性。',
    clinical_signs: [
      { sign: '口腔腫塊', category: 'primary', description: '牙齦或口腔黏膜上的色素性（黑色/棕色）或無色素性（粉紅色）腫塊' },
      { sign: '口臭', category: 'primary', description: '腫瘤壞死或繼發感染導致的嚴重口臭' },
      { sign: '流涎/口腔出血', category: 'primary', description: '腫瘤表面潰瘍導致口腔出血和過度流涎' },
      { sign: '進食困難', category: 'secondary', description: '大型腫瘤影響咀嚼和吞嚥' },
      { sign: '面部腫脹', category: 'secondary', description: '腫瘤侵犯骨組織導致面部不對稱腫脹' },
    ],
    staging: {
      system: 'WHO Clinical Staging for Canine Oral Melanoma（Owen 1980 TNM；Polton 2024 共識沿用）',
      stages: [
        'Stage I：腫瘤最大直徑 < 2 cm（T1），無淋巴結或遠端轉移',
        'Stage II：腫瘤最大直徑 2-4 cm（T2），無淋巴結或遠端轉移',
        'Stage III：腫瘤最大直徑 > 4 cm（T3），或任何大小合併區域淋巴結轉移（N1）',
        'Stage IV：有遠端轉移（肺、肝等，M1）',
      ],
    },
    differential_diagnosis: [
      { condition: '口腔鱗狀細胞癌', key_differentiator: '常見於牙齦前端（吻側），X 光見骨溶解但組織學為鱗狀上皮，局部侵襲性高但轉移率較低' },
      { condition: '口腔纖維肉瘤', key_differentiator: '較少色素沉著，組織學見紡錘形細胞，局部侵襲性高但轉移率較黑色素瘤低' },
      { condition: '牙齦增生（epulis）', key_differentiator: '多為良性，生長緩慢，FNA 或活檢可鑑別' },
      { condition: '棘皮瘤性棘狀瘤（Acanthomatous ameloblastoma）', key_differentiator: '局部侵襲骨組織但不轉移，手術切除後預後極佳' },
    ],
    diagnostic_workup: '1. 口腔檢查（腫塊大小、位置、是否固定於骨）→ 2. FNA 細胞學或楔形活檢 → 3. 區域淋巴結 FNA → 4. 頭顱 X 光或 CT（評估骨侵犯範圍，手術計畫必需）→ 5. 胸腔 X 光三面投射 → 6. 腹部超音波 → 7. CBC/BCS',
    treatment_protocol: '手術為首選：mandibulectomy/maxillectomy，軟組織切緣 ≥ 2 cm、骨 1-2 cm（依 CT 規劃）；完整切除復發率約 15-22%。術後輔助：粗分割放射 8-9 Gy × 4 q1week（切緣不淨或無法手術時）。Oncept 疫苗：局部控制良好後 q2wk × 4、之後 q6mo（WHO Stage II-III；存活獲益未經獨立研究證實）。化療效果有限（反應率約 18-28%）：Carboplatin 300-350 mg/m² IV q3wk 為首選細胞毒藥、但不延長存活。',
    prognosis: '以手術治療，WHO Stage I（< 2 cm）中位存活約 17-18 個月（MacEwen 1986: 511 天）、Stage II（2-4 cm）約 5-6 個月（160 天）、Stage III（> 4 cm 或 N1）教科書常引約 3 個月（MacEwen 手術組實 168 天，約 5.6 個月）、Stage IV 最差。最重要預後因子為腫瘤大小/分期；其他不良因子：骨侵犯、有絲分裂指數 ≥ 4/10 HPF（口腔閾值，非皮膚型的 ≥3）、Ki-67 > 19.5、診斷時已轉移。Oncept 疫苗對存活的實際獲益未在獨立回顧研究（Ottnod 2013）中確認。',
    monitoring: '術後 2 週回診評估傷口。每月口腔檢查和區域淋巴結觸診。每 2-3 個月胸腔 X 光監測肺轉移。Oncept 療程每 6 個月追加。注意口腔功能（進食、飲水能力）。',
    owner_communication: '口腔黑色素瘤是犬口腔最常見的惡性腫瘤。手術是最重要的治療，部分下頷骨或上頷骨切除聽起來會嚇到飼主，但多數犬術後功能恢復良好還能正常進食。腫瘤大小是最重要的預後因子，早期發現跟治療不能省。建議飼主定期檢查犬的口腔。黑色素瘤疫苗是獸醫腫瘤學的新進展，可以考慮當手術後的輔助治療。',
  },
  diagnostic_data: null,
  procedure_data: null,
  visual_placeholders: [
    { position: 'WHO 分期表格後', type: 'flowchart', description: '口腔黑色素瘤治療決策流程圖' },
  ],
  interactive_placeholders: [
    { position: 'WHO 分期表格後', type: 'staging_tool', description: 'WHO 分期/預後互動計算器：輸入腫瘤最大直徑與淋巴結/遠端轉移狀態 → 回傳 Stage 與對應手術治療中位存活（I ~17-18mo、II ~5-6mo、III ~3-6mo）；並示範 N1 上修任何大小為 Stage III' },
  ],
  drug_api_links: ['Carboplatin', 'Melphalan', 'Oncept'],
  references: [
    { type: 'textbook', citation: 'Withrow SJ, Vail DM, Thamm DH, Liptak JM, eds. Withrow & MacEwen\'s Small Animal Clinical Oncology, 6th ed. St. Louis: Elsevier, 2020. Melanoma & Oral Tumors chapters.', relevance: '口腔黑色素瘤流行病學/分期/治療/預後完整章節' },
    { type: 'guideline', citation: 'Polton G, Borrego JF, Clemente-Vicario F, Clifford CA, et al. Melanoma of the dog and cat: consensus and guidelines. Front Vet Sci. 2024;11:1359426. doi:10.3389/fvets.2024.1359426', relevance: '近期：犬貓黑色素瘤共識——切緣/分期/輔助治療與 Oncept 定位' },
    { type: 'journal', citation: 'Smedley RC, Sebastian K, Kiupel M, et al. Diagnosis and histopathologic prognostication of canine melanocytic neoplasms: A consensus of the Oncology-Pathology Working Group. Vet Comp Oncol. 2022;20(4):739-751. doi:10.1111/vco.12827', relevance: '近期：OPWG 組織學預後分級（口腔有絲分裂數 ≥4/10 HPF、Ki-67）' },
    { type: 'journal', citation: 'Esplin DG. Survival of dogs following surgical excision of histologically well-differentiated melanocytic neoplasms of the mucous membranes of the lips and oral cavity. Vet Pathol. 2008;45(6):889-896. doi:10.1354/vp.45-6-889', relevance: 'HWDMN 良性行為變異型（MST ~34mo、低復發），佐證「非一律惡性」' },
    { type: 'journal', citation: 'Bergman PJ, McKnight J, Novosad A, et al. Long-term survival of dogs with advanced malignant melanoma after DNA vaccination with xenogeneic human tyrosinase: a phase I trial. Clin Cancer Res. 2003;9(4):1284-1290.', relevance: 'Oncept 疫苗原始研究（xenogeneic tyrosinase 機轉）' },
    { type: 'journal', citation: 'Grosenbaugh DA, Leard AT, Bergman PJ, et al. Safety and efficacy of a xenogeneic DNA vaccine encoding for human tyrosinase as adjunctive treatment for oral malignant melanoma in dogs following surgical excision of the primary tumor. Am J Vet Res. 2011;72(12):1631-1638. doi:10.2460/ajvr.72.12.1631', relevance: 'Oncept 支持 USDA 核准之廠商相關療效研究' },
    { type: 'journal', citation: 'Ottnod JM, Smedley RC, Walshaw R, et al. A retrospective analysis of the efficacy of Oncept vaccine for the adjunct treatment of canine oral malignant melanoma. Vet Comp Oncol. 2013;11(3):219-229. doi:10.1111/vco.12057', relevance: '獨立回顧研究：Oncept 未證實存活獲益（爭議核心）' },
    { type: 'journal', citation: 'Tuohy JL, Selmic LE, Worley DR, et al. Outcome following curative-intent surgery for oral melanoma in dogs: 70 cases (1998-2011). J Am Vet Med Assoc. 2014;245(11):1266-1273. doi:10.2460/javma.245.11.1266', relevance: '口腔黑色素瘤根治性手術預後（70 例）' },
    { type: 'journal', citation: 'Maekawa N, Konnai S, Hosoya K, et al. Safety and clinical efficacy of an anti-PD-L1 antibody (c4G12) in dogs with advanced malignant tumours. PLoS One. 2023;18(9):e0291727. doi:10.1371/journal.pone.0291727', relevance: '近期：犬用抗 PD-L1 抗體免疫治療臨床數據' },
  ],
  is_current: true,
  created_at: now,
};

/** 乳腺腫瘤，疾病型 */
const contentMammaryTumor: NodeContent = {
  id: 'CONTENT-ONCO-L3-006',
  node_id: 'ONCO-L3-006',
  version: 2,
  summary: '犬貓乳腺腫瘤是母犬母貓最常見的腫瘤之一。犬乳腺腫瘤良惡性大概各半；貓乳腺腫瘤則超過 85% 是惡性。早期卵巢切除術（OHE）可以明顯降低犬乳腺腫瘤風險。治療以手術為主，切除範圍看腫瘤位置跟數量決定。貓乳腺腫瘤預後比犬差，建議走積極手術（雙側乳腺鏈全切除）加輔助化療。',
  learning_objectives: [
    '比較犬與貓乳腺腫瘤的生物學行為差異',
    '說明卵巢切除時機對犬乳腺腫瘤風險的影響',
    '描述乳腺腫瘤的手術切除範圍選擇原則',
    '列出乳腺腫瘤的完整分期檢查流程',
    '辨識炎性乳腺癌（inflammatory mammary carcinoma）的臨床特徵',
  ],
  key_points: [
    '犬乳腺腫瘤大約良惡性各半。貓乳腺腫瘤則超過 85% 是惡性，多半是腺癌',
    '早期 OHE 保護效果（犬）：首次發情前 0.5%、第一次發情後 8%、第二次發情後 26%，超過 2.5 歲再做就沒明顯保護了',
    '犬手術選擇：lumpectomy（小於 0.5 cm 的小腫瘤）、區域乳腺切除、半側或全鏈切除（多發性腫瘤）',
    '貓手術：建議雙側乳腺鏈全切除（bilateral radical mastectomy），分兩次手術',
    '炎性乳腺癌預後很差，手術反而禁忌，臨床上常被誤診成乳腺炎',
    '預後因子有：腫瘤大小（小於 3 cm 比較好）、組織學分級、淋巴結轉移、Ki-67 指數',
  ],
  body: `# 乳腺腫瘤 (Mammary Tumors)

## 一、病理機制 (Pathophysiology)



### 概述
犬貓乳腺腫瘤是未絕育母動物最常見的腫瘤。犬有 5 對乳腺，貓有 4 對。犬乳腺腫瘤良惡性大約 50:50，貓乳腺腫瘤則絕大多數是惡性。

### 犬 vs 貓比較
| 特徵 | 犬 | 貓 |
|------|----|----|
| 惡性比例 | 約 50% | 超過 85% |
| 最常見類型 | 混合型乳腺瘤（良性）、腺癌 | 腺癌 |
| 好發年齡 | 10-12 歲 | 10-14 歲 |
| OHE 保護 | 明顯 | 有，但數據比較少 |
| 建議手術範圍 | 看腫瘤決定 | 雙側全鏈切除 |

### OHE 與乳腺腫瘤風險（犬）
首次發情前 OHE 風險只有 0.5%，第一次發情後 OHE 風險升到 8%，第二次發情後 OHE 風險就到 26% 了，超過 2.5 歲再做就沒明顯保護，但還是建議同時 OHE 避免黃體素影響。

### 手術範圍選擇
### 犬
Lumpectomy 適合小於 0.5 cm、活動性強、看起來偏良性的腫塊。比較大的腫瘤要做區域乳腺切除，含同側相鄰乳腺，因為淋巴引流的關係。多發性腫瘤就做半側乳腺鏈切除，把同側 1 到 5 號乳腺一次處理掉。淋巴引流路線是 1 到 3 號去腋窩淋巴結，3 到 5 號去腹股溝淋巴結，3 號是分水嶺。

### 貓
建議標準是雙側乳腺鏈全切除。分兩次手術，間隔 2 到 4 週，每次切一側。這樣比局部手術能明顯降低局部復發率。

### 炎性乳腺癌
高度惡性，瀰漫性浸潤。臨床表現是乳腺區域瀰漫性紅腫、水腫、硬化、疼痛，臨床上常被誤診為乳腺炎。手術反而是禁忌，因為清不乾淨還會加速擴散。預後很差，中位存活只有幾週。

[圖片:犬乳腺淋巴引流路徑示意圖]

## 二、臨床表現與診斷 (Clinical Signs & Diagnosis)

好發在未絕育或晚期絕育的中老年母犬（貓的話約 85 到 90% 是惡性）。常見表現是乳腺區單發或多發結節，可能伴隨皮膚潰瘍、跟周圍組織沾黏、區域淋巴結腫大。診斷流程：全身理學檢查要把所有乳腺都觸診一遍；FNA 細胞學初步判定良惡性；胸腔 X 光三視圖排除肺轉移；腹超評估內臟轉移；切除後送組織病理確診，分簡單型、複雜型、混合型還有惡性度分級。

## 三、治療策略 (Treatment)

手術切除是第一線。犬的標準是區域乳腺切除術或單側全乳腺鏈切除術，切緣至少 2 cm。貓建議積極的單側或雙側全乳腺鏈切除，因為貓乳腺腫瘤 85 到 90% 是惡性而且局部復發率高。輔助化療用在高級別或已轉移病例：Doxorubicin 或 Carboplatin。預防性措施是早期 OHE，犬第一次發情前絕育可以把乳腺腫瘤風險壓到 0.05%。

## 四、併發症與監控 (Complications & Monitoring)

術後併發症最常見的是切口部位血清腫，大範圍切除可能傷口裂開，區域淋巴結同時切除可能跑出皮膚壞死跟肢體水腫。監控計畫是術後每 3 個月胸腔 X 光跟腹超追蹤轉移，觸診手術區域跟對側乳腺鏈，看有沒有新發腫塊或局部復發。化療期間要定期監控 CBC 跟肝腎功能。

## 五、預後與預後因子 (Prognosis)

犬乳腺腫瘤約 50% 是惡性，預後因子有：腫瘤大小（小於 3 cm 預後最好）、組織學分級（WHO Grade I 兩年存活率超過 90%，Grade III 不到 20%）、淋巴血管侵犯、淋巴結轉移，還有組織學類型（簡單型比複雜型好）。貓乳腺腫瘤預後比較差：中位存活約 12 個月（小於 2 cm 預後比較好），早期積極手術可以改善預後。

## 六、人醫借鑒 (Translational Insights)

| 人醫工具/概念 | 獸醫應用潛力 | 現況 |
|-------------|-------------|------|
| HER2 標靶治療（Trastuzumab） | 犬乳腺腫瘤 HER2 過表達的標靶治療 | 犬乳腺腫瘤 HER2 表達已有報告，但標靶藥尚未獸醫適用 |
| 荷爾蒙受體（ER/PR）靶向治療 | 犬乳腺腫瘤的 Tamoxifen 或 AI 治療 | 犬 ER/PR 表達與人不同，Tamoxifen 犬副作用大，臨床不建議 |
| Oncotype DX 基因檢測 | 犬乳腺腫瘤分子分型預測化療獲益 | 犬乳腺腫瘤分子分型研究中（Luminal A/B、Basal-like 等） |
| 前哨淋巴結活檢（SLN biopsy） | 犬貓乳腺腫瘤精確淋巴結分期 | 犬 SLN mapping 技術已有初步臨床應用 |

## 七、臨床爭議與知識空缺 (Controversies & Knowledge Gaps)

| 爭議議題 | 現況 | Evidence Level |
|---------|------|---------------|
| 犬乳腺腫瘤手術同時 OHE 是否改善預後 | 唯一一個 RCT（Kristiansen 2016）顯示 OS 沒有明顯差異，但研究設計受質疑 | Level I |
| 貓乳腺腫瘤雙側全鏈切除 vs 單側切除 | 雙側全鏈降低復發率的回顧性證據充分，但是缺乏前瞻性比較 | Level II |
| 犬乳腺腫瘤輔助化療的適應症與獲益 | 高級別或淋巴結轉移者可能受益，但 RCT 數據很少 | Level III |
| 炎性乳腺癌（IMC）的最佳管理策略 | 手術禁忌、化療反應差，NSAIDs 或 Toceranib 的初步數據還很有限 | Level IV |

## 八、近期實證更新 (Recent Evidence Updates)

- **絕育對乳腺腫瘤保護的證據強度被重新檢視**：Beauvais 等人（2012）系統性回顧指出，雖臨床普遍引用「首次發情前絕育保護最大」，但支持此說的研究多有偏倚風險、證據強度其實有限——保護效應方向一致但量化數字（0.5%/8%/26%）應審慎引用。〔Evidence Level II（納入研究品質參差）〕
- **手術同時 OHE 不改善已患癌母犬預後**：Kristiansen 等人（2016）RCT 顯示乳腺癌切除時併行 OHE 對總存活無顯著助益；惟若有黃體素暴露（未絕育/外源黃體素）考量仍可併做。〔Evidence Level I〕
- **貓乳腺癌的分級與分子標記**：Hughes & Dobson（2012）等強調組織學分級、有絲分裂指數、Ki-67、HER2/ER 等預後標記；腫瘤大小（> 2-3 cm）與分級為貓關鍵不良預後因子，支持積極手術 + 輔助化療。〔Evidence Level III〕
- **標靶/分子分型探索**：犬乳腺癌分子亞型（Luminal/Basal-like）與 HER2 表達研究累積中，前哨淋巴結定位提升分期精度；臨床標靶治療仍未成熟。〔Evidence Level IV〕

> ⚠️ 上述更新（特別是絕育保護的證據強度與貓分子標記的臨床應用）仍待 DVM 依個案與最新實證覆核後採用。`,
  clinical_pearl: '乳腺腫瘤手術前最常被忽略的一步是淋巴結評估。犬乳腺 1 到 3 號引流到腋窩淋巴結，4 到 5 號引流到腹股溝淋巴結，3 號乳腺是分水嶺，可以引流到兩側。所以手術時要根據腫瘤位置評估對應的引流淋巴結。另一個觀念：犬乳腺腫瘤跟腫瘤一起做 OHE 對預後有沒有幫助仍有爭議，但是如果有黃體素影響的可能（未絕育或用過外源性黃體素），OHE 還是建議做。\n\n【台灣流行病學】乳腺腫瘤是台灣未絕育母犬最常見的腫瘤類型。台灣早期絕育觀念推廣不太夠，很多母犬第一次發情前沒絕育，導致乳腺腫瘤盛行率偏高。台灣常見品種像貴賓、馬爾濟斯、吉娃娃這些小型犬都是好發族群。貓乳腺腫瘤在台灣也不少，而且超過 85% 是惡性。推廣早期絕育（第一次發情前）是台灣預防乳腺腫瘤最重要的策略。',
  common_mistakes: [
    '手術前沒做完整分期檢查（胸腔 X 光加腹超加區域淋巴結評估）',
    '對貓乳腺腫瘤做太保守的局部切除：建議雙側全鏈切除來降低復發率',
    '把炎性乳腺癌誤診為乳腺炎而用抗生素治療，臨床惡化是重要線索',
    '對犬乳腺腫瘤一律做最大範圍手術：良性小腫瘤（小於 0.5 cm）可以考慮 lumpectomy',
    '忽略同時做 OHE 的考量，尤其是未絕育動物',
  ],
  disease_data: {
    signalment: '犬：未絕育母犬，中位年齡 10 到 12 歲。好發品種：貴賓、Dachshund、Springer Spaniel、德國牧羊犬、Cocker Spaniel。公犬乳腺腫瘤少見但是幾乎都是惡性。貓：未絕育母貓，中位年齡 10 到 14 歲。Siamese 貓風險比較高。',
    etiology: '乳腺腫瘤是荷爾蒙依賴性的：卵巢性激素（雌激素、黃體素）是主要促進因子。長期使用外源性黃體素避孕藥會增加風險。肥胖也會（因為周邊雌激素轉化增加）。遺傳因素方面有品種偏好。犬乳腺腫瘤部分會表達 ER/PR（荷爾蒙受體），但是惡性度越高受體表達越低。',
    pathogenesis: '荷爾蒙反覆刺激乳腺上皮造成增生，跑出良性腫瘤（腺瘤、混合型），部分良性會轉化成惡性（主要是腺癌）。惡性腫瘤局部浸潤後侵犯淋巴管，跑到區域淋巴結，再來血行性轉移（主要是肺）。貓乳腺腫瘤多半跳過良性階段，直接是惡性。',
    clinical_signs: [
      { sign: '乳腺腫塊', category: 'primary', description: '單發或多發的乳腺區域腫塊，可以小到幾毫米也可以好幾公分。觸診可能活動性或固定' },
      { sign: '腫塊潰瘍/分泌物', category: 'primary', description: '表面潰瘍伴分泌物（血性或化膿性），通常代表惡性度比較高' },
      { sign: '區域淋巴結腫大', category: 'secondary', description: '腋窩或腹股溝淋巴結腫大，提示轉移' },
      { sign: '呼吸困難', category: 'secondary', description: '晚期肺轉移的表現' },
      { sign: '乳腺區域瀰漫性紅腫', category: 'secondary', description: '炎性乳腺癌的特徵是瀰漫性水腫、紅腫、硬化、疼痛' },
    ],
    staging: {
      system: 'Modified WHO Staging for Canine Mammary Tumors',
      stages: [
        'Stage I：T1（< 3 cm），N0，M0',
        'Stage II：T2（3-5 cm），N0，M0',
        'Stage III：T3（> 5 cm），N0，M0',
        'Stage IV：任何 T，N1（淋巴結轉移），M0',
        'Stage V：任何 T，任何 N，M1（遠端轉移）',
      ],
    },
    differential_diagnosis: [
      { condition: '乳腺增生/囊腫', key_differentiator: '跟發情週期有關，大小會波動變化，FNA 看到正常乳腺細胞或囊性液體' },
      { condition: '乳腺炎', key_differentiator: '跟泌乳期或假孕有關，會發燒、觸痛、乳腺區域紅腫，抗生素治療有反應（但要跟炎性乳腺癌鑑別）' },
      { condition: '脂肪瘤', key_differentiator: '柔軟可移動，FNA 看到脂肪細胞，常在皮下但是可能長在乳腺區域' },
      { condition: '皮膚 MCT', key_differentiator: 'FNA 看到嗜鹼性顆粒圓形細胞，可能長在乳腺區域皮膚' },
    ],
    diagnostic_workup: '流程是：先觸診所有乳腺（雙側 5 對或 4 對），FNA 細胞學或楔形活檢，區域淋巴結（腋窩或腹股溝）FNA，胸腔 X 光三面投射做肺轉移篩檢，腹部超音波，CBC/BCS，手術切除後完整組織病理（分級加切緣評估加 ER/PR）。',
    treatment_protocol: '手術第一線。犬看腫瘤大小跟數量決定 lumpectomy、區域切除或半側全鏈切除。貓做雙側乳腺鏈全切除（分兩次，間隔 2 到 4 週）。未絕育動物同時 OHE。惡性腫瘤輔助化療用 Doxorubicin 30 mg/m² IV q3 weeks 或 Carboplatin 300 mg/m² IV q3 weeks × 4 到 6 次。貓用 Doxorubicin 25 mg/m² IV q3 weeks × 5 次（**貓使用 Doxorubicin 前必須建立基線腎功能：BUN + Creatinine + UPC；每療程前重複評估腎功能，Cre > 2.0 mg/dL 者考慮改 Carboplatin；貓 Doxorubicin 腎毒性風險高於犬**）。炎性乳腺癌手術禁忌，可以試 NSAIDs 或姑息性化療。',
    prognosis: '犬的良性腫瘤手術可以治癒。惡性腫瘤小於 3 cm 加切緣乾淨中位存活超過 2 年；3 到 5 cm 中位存活 1 到 2 年；超過 5 cm 中位存活不到 1 年。淋巴結轉移是不良預後指標。貓即使積極治療中位存活也只有約 1 年。小於 2 cm 預後比較好（中位存活超過 3 年），超過 3 cm 預後差（中位存活 4 到 6 個月）。炎性乳腺癌預後很差。',
    monitoring: '術後 2 週檢查傷口。每 2 到 3 個月觸診全身乳腺看有沒有新腫瘤或復發，加上區域淋巴結評估。惡性腫瘤每 3 個月拍胸腔 X 光。化療期間每次治療前 CBC。長期追蹤每 6 個月一次。',
    owner_communication: '犬乳腺腫瘤大約一半是良性，手術後預後不錯。惡性腫瘤的預後要看腫瘤大小跟有沒有轉移，越早發現越好。貓的乳腺腫瘤絕大多數是惡性，建議積極手術跟化療。要跟飼主強調早期絕育（OHE）對預防乳腺腫瘤的重要性。可以建議飼主定期摸摸犬貓的乳腺區域，發現腫塊就早點就醫。',
  },
  diagnostic_data: null,
  procedure_data: null,
  visual_placeholders: [
    { position: '手術範圍段落後', type: 'annotated_image', description: '犬乳腺淋巴引流與手術範圍選擇圖' },
    { position: '犬 vs 貓比較表後', type: 'comparison_table', description: '犬 vs 貓乳腺腫瘤生物學行為比較' },
  ],
  interactive_placeholders: [],
  drug_api_links: ['Doxorubicin', 'Carboplatin'],
  references: [
    { type: 'textbook', citation: 'Vail DM, Thamm DH, Liptak JM. Withrow & MacEwen\'s Small Animal Clinical Oncology, 6th ed. Elsevier, 2020.', relevance: '乳腺腫瘤完整章節' },
    { type: 'journal', citation: 'Sorenmo KU, Kristiansen VM, Cofone MA, et al. Canine mammary gland tumours; a histological continuum from benign to malignant; clinical and histopathological evidence. Vet Comp Oncol. 2009;7(3):162-172. doi:10.1111/j.1476-5829.2009.00184.x', relevance: '犬乳腺腫瘤良性至惡性的組織學連續體' },
    { type: 'journal', citation: 'Kristiansen VM, Peña L, Díez Córdova L, et al. Effect of ovariohysterectomy at the time of tumor removal in dogs with mammary carcinomas: a randomized controlled trial. J Vet Intern Med. 2016;30(1):230-241. doi:10.1111/jvim.13812', relevance: '乳腺癌切除時同時 OHE 的 RCT（對總存活無顯著助益）' },
    { type: 'journal', citation: 'Beauvais W, Cardwell JM, Brodbelt DC. The effect of neutering on the risk of mammary tumours in dogs - a systematic review. J Small Anim Pract. 2012;53(6):314-322. doi:10.1111/j.1748-5827.2011.01220.x', relevance: '絕育與犬乳腺腫瘤風險的系統性回顧（指出證據強度有限）' },
    { type: 'journal', citation: 'Hughes K, Dobson JM. Prognostic histopathological and molecular markers in feline mammary neoplasia. Vet J. 2012;194(1):19-26. doi:10.1016/j.tvjl.2012.05.008', relevance: '貓乳腺腫瘤的組織學分級與分子預後標記' },
  ],
  is_current: true,
  created_at: now,
};

/** 移行上皮細胞癌 (TCC)，疾病型 */
const contentTCC: NodeContent = {
  id: 'CONTENT-ONCO-L3-007',
  node_id: 'ONCO-L3-007',
  version: 2,
  summary: '犬移行上皮細胞癌（Transitional Cell Carcinoma, TCC）是犬泌尿道最常見的惡性腫瘤，好發在膀胱三角區。Scottish Terrier 風險最高，大約是其他品種的 18 到 20 倍。因為好發位置就在三角區，完整手術切除通常做不到。治療標準是 Piroxicam（COX 抑制劑）加減 Mitoxantrone 化療。BRAF 突變檢測（尿液 PCR）是新的非侵入性診斷工具。',
  learning_objectives: [
    '描述 TCC 好發於膀胱三角區的臨床意義',
    '列出 TCC 的危險因子與好發品種',
    '說明 BRAF 突變尿液 PCR 作為診斷工具的價值',
    '比較 TCC 的治療選項及其療效',
    '辨識 TCC 導致尿道阻塞的臨床處置',
  ],
  key_points: [
    '犬泌尿道最常見的惡性腫瘤，超過 90% 長在膀胱（三角區最常見）',
    '好發品種：Scottish Terrier（風險 18 到 20 倍）、Shetland Sheepdog、Beagle、West Highland White Terrier',
    '母犬大約是公犬的 2 倍。中位年齡 11 歲。肥胖是風險因子',
    '臨床表現跟下泌尿道疾病很像：血尿、頻尿、排尿困難，常被誤診為膀胱炎',
    'BRAF V595E 突變：大約 85% 的犬 TCC 有這個突變，尿液游離 DNA PCR 可當非侵入性篩檢',
    '治療標準：Piroxicam 0.3 mg/kg PO SID 加減 Mitoxantrone 5 mg/m² IV q3 weeks',
    '完整手術切除通常做不到（位置在三角區），但部分膀胱切除或支架置入可以考慮',
    '近期實證（Sommer 2021）：犬 TCC 如人膀胱癌可分 basal/luminal 分子亞型（與免疫特徵、品種相關），精準腫瘤學正從「一律 Piroxicam±化療」往分層治療演進',
  ],
  body: `# 移行上皮細胞癌 (TCC)

## 一、病理機制 (Pathophysiology)



### 概述
犬膀胱 TCC（又稱 urothelial carcinoma）是犬泌尿系統最常見的惡性腫瘤。因為好發在膀胱三角區（trigone），常造成尿道阻塞跟輸尿管阻塞，完整手術切除也很困難。

### 危險因子
品種上 Scottish Terrier 風險最高。性別方面母犬大約是公犬 2 倍。肥胖也算。環境暴露包括除草劑、殺蟲劑（flea/tick dips）、cyclophosphamide 暴露。已知致癌物是 2-naphthylamine 跟相關化合物。

## 二、臨床表現與診斷 (Clinical Signs & Diagnosis)

### 臨床表現
最常見的是血尿（hematuria）。其他包括頻尿（pollakiuria）、排尿困難（stranguria/dysuria）。臨床上常被初步診斷成「膀胱炎」而延誤。嚴重的話會跑出尿道阻塞，造成急性腎後性腎衰竭。

### 診斷
### BRAF V595E 突變檢測
大約 85% 的犬 TCC 有這個突變。尿液游離 DNA PCR 是非侵入性、特異度超過 99%，適合篩檢跟早期偵測。

### 影像學
腹超可以看到三角區腫塊、膀胱壁增厚。對比增強 CT 用來評估腫瘤範圍跟淋巴結轉移。

### 膀胱鏡 + 活檢
可以直接看到腫瘤並取組織。要注意：經腹壁膀胱穿刺活檢（cystocentesis-guided）有種植轉移風險。

## 三、治療策略 (Treatment)

### 治療
### 藥物治療（標準）
首選 [藥物:Piroxicam] 0.3 mg/kg PO SID（COX-2 抑制，有抗腫瘤活性）。加上 [藥物:Mitoxantrone] 5 mg/m² IV q3 weeks 加 Piroxicam。替代方案是 [藥物:Carboplatin] 加 Piroxicam，或 [藥物:Vinblastine] 口服節拍式加 Piroxicam。

### 手術
完整切除通常做不到（位置在三角區）。腫瘤不在三角區的時候可以考慮部分膀胱切除。尿道支架置入可以緩解尿道阻塞。

[圖片:膀胱 TCC 超音波影像，三角區腫塊]

## 四、併發症與監控 (Complications & Monitoring)

主要併發症是泌尿道阻塞（腫瘤長在膀胱三角區會壓迫輸尿管口或尿道），會造成腎後性氮血症。NSAID（Piroxicam）長期使用要監控消化道毒性（GI 潰瘍）跟腎功能。化療（Mitoxantrone 或 Vinblastine）期間要監控血球計數。建議每 4 到 6 週做腹超追蹤腫瘤大小變化跟腎盂積水，定期尿液分析評估血尿嚴重度。

## 五、預後與預後因子 (Prognosis)

犬膀胱 TCC 中位存活：保守治療大約 4 到 6 個月，Piroxicam 加減化療可以到 6 到 12 個月。不良預後因子有：攝護腺或尿道被侵犯、診斷時已有遠端轉移（大約 20% 已肺轉移）、輸尿管阻塞造成腎衰竭、腫瘤體積大。Piroxicam 加 Mitoxantrone 或 Piroxicam 加 Vinblastine 合併治療可以延長存活期。COX-2 抑制劑單獨使用的客觀反應率大約 18%。

## 六、人醫借鑒 (Translational Insights)

| 人醫工具/概念 | 獸醫應用潛力 | 現況 |
|-------------|-------------|------|
| BRAF 標靶治療（Vemurafenib/Dabrafenib） | 犬 TCC BRAF V595E 突變的口服標靶治療 | 犬 BRAF V595E 等同人 V600E，犬 BRAF 抑制劑試驗進行中 |
| 免疫檢查點抑制劑（anti-PD-1/PD-L1） | 犬 TCC 的免疫治療，人膀胱癌已為標準治療 | 犬 TCC PD-L1 表達已報告，anti-PD-1 臨床試驗中 |
| Erdafitinib（FGFR 抑制劑） | 犬 TCC 的 FGFR 信號通路標靶治療 | 犬 TCC FGFR 突變頻率正在研究中 |
| 尿液 ctDNA 監測 | 犬 TCC 的非侵入性治療反應追蹤與復發偵測 | BRAF 尿液 PCR 已可用，廣泛 ctDNA panel 研究中 |

## 七、臨床爭議與知識空缺 (Controversies & Knowledge Gaps)

| 爭議議題 | 現況 | Evidence Level |
|---------|------|---------------|
| Piroxicam vs 其他 COX-2 抑制劑（Meloxicam/Deracoxib）在 TCC 的療效比較 | Piroxicam 數據最多，其他 NSAIDs 的直接抗腫瘤活性比較還缺乏 | Level III |
| 經腹壁 FNA vs 膀胱鏡活檢的種植轉移風險到底多大 | 個案報告支持種植風險存在，但大規模發生率數據不夠 | Level IV |
| BRAF V595E 陰性 TCC 的最佳治療策略 | 大約 15% 的犬 TCC 是 BRAF 陰性，替代驅動突變跟治療靶點還不清楚 | Level IV |
| Toceranib + Piroxicam 聯合治療在 TCC 的角色 | 初步數據看到臨床獲益，但缺乏前瞻性對照研究 | Level III |

## 八、近期實證更新 (Recent Evidence Update)

**犬膀胱 TCC 進入「分子亞型」時代（Sommer et al 2021, Bladder Cancer）**
就像人膀胱癌，自然發生的犬侵襲性泌尿上皮癌也可分成 **basal（基底）與 luminal（管腔）兩種分子亞型**，且亞型與**腫瘤免疫特徵、好發品種**相關。臨床意涵：未來治療可能走向「依分子亞型選藥」（人膀胱癌已用此概念決定化療/免疫治療順序），犬 TCC 的精準腫瘤學正在從「一律 Piroxicam±化療」往分層治療演進。

**犬 TCC 作為人膀胱癌的比較腫瘤學模型（Knapp 2014 ILAR；Sommer & Knapp 2018）**
犬自然發生的侵襲性泌尿上皮癌在生物行為、BRAF/MAPK 驅動、對 COX 抑制與化療的反應上，與人肌肉侵襲性膀胱癌高度相似，是新興療法（BRAF 抑制劑、免疫檢查點抑制劑）的重要動物模型——犬的臨床試驗結果常能回饋人醫，也讓飼主有機會參與 cutting-edge 試驗。

**標靶與免疫治療的轉譯進度**
- **BRAF 抑制劑**：~85% 犬 TCC 帶 BRAF V595E（＝人 V600E 的犬同源突變），口服 BRAF 抑制劑試驗進行中；但單用易出現抗藥性，與 COX 抑制/MEK 抑制併用是研究方向。
- **免疫檢查點抑制（anti-PD-1/PD-L1）**：犬 TCC 有 PD-L1 表達，臨床試驗進行中，尚非標準治療。

【台灣落地】尿液 BRAF V595E PCR 在台灣部分實驗室已可送驗，是中老年犬慢性血尿「抗生素無效」時很值得加做的非侵入性篩檢；分子亞型與標靶/免疫治療多數仍在試驗階段，現階段標準治療仍是 Piroxicam（或 Meloxicam）± Mitoxantrone/Vinblastine。`,
  clinical_pearl: 'TCC 最常被延誤診斷的原因是初始症狀（血尿、頻尿）跟膀胱炎完全一樣。臨床經驗法則：中老年犬（特別是 Scottish Terrier 或其他好發品種）因為「膀胱炎」就診，抗生素治療 2 到 4 週後症狀沒改善的話，一定要做膀胱超音波加尿液 BRAF 檢測。另一個要小心的點：膀胱 TCC 不要用經腹壁穿刺採樣，有報告指出穿刺路徑會發生種植轉移（seeding）。\n\n【台灣流行病學】膀胱移行上皮細胞癌在台灣犬是重要的泌尿道腫瘤。Scottish Terrier 在台灣飼養比較少，但其他品種像雪納瑞、比乏犬也有報告。中老年犬慢性血尿常常被反覆當膀胱炎治療結果延誤 TCC 診斷，獸醫師的警覺性要提高。尿液 BRAF V595E 突變檢測在台灣部分實驗室已可提供，是不錯的非侵入性篩檢工具。Piroxicam 或 Meloxicam 加上 Mitoxantrone，或節拍式 Chlorambucil 化療，是台灣常用的治療方案。',
  common_mistakes: [
    '反覆當「膀胱炎」治療而沒做影像學檢查：中老年犬持續血尿或頻尿要排除 TCC',
    '經腹壁膀胱穿刺對 TCC 做 FNA，有種植轉移風險，建議用膀胱鏡或創傷性導尿管沖洗採樣',
    '對三角區 TCC 嘗試完整手術切除：位置通常不允許完整切除，術後生活品質可能很差',
    'TCC 治療沒用 Piroxicam 或其他 NSAIDs 當基礎：COX-2 抑制對 TCC 有直接抗腫瘤活性',
    '忽略 BRAF 突變檢測這個非侵入性診斷工具的價值',
  ],
  disease_data: {
    signalment: '中老年犬，中位年齡 11 歲。最高風險品種：Scottish Terrier（18 到 20 倍）、Shetland Sheepdog、Beagle、West Highland White Terrier、Wire Fox Terrier。母犬大約是公犬 2 倍。肥胖犬風險增加。',
    etiology: '多因子：遺傳易感性（品種偏好）加上環境致癌物暴露（除草劑、殺蟲劑、cyclophosphamide）。BRAF V595E 體細胞突變大約 85% 的犬 TCC 都有，是關鍵的驅動突變。肥胖可能因為排尿頻率降低、致癌物接觸時間變長，加上慢性發炎，所以風險增加。',
    pathogenesis: 'BRAF V595E 突變之後 MAPK/ERK 信號通路持續活化，移行上皮細胞克隆性增殖，浸潤膀胱壁（從黏膜到肌層到漿膜）。三角區腫塊會阻塞輸尿管口（腎後性腎衰竭）或尿道（排尿困難或阻塞），接著區域淋巴結轉移、遠端轉移（肺、骨、肝）。',
    clinical_signs: [
      { sign: '血尿', category: 'primary', description: '最常見的首發症狀，可能是持續性或間歇性，抗生素治療沒改善' },
      { sign: '頻尿/排尿困難', category: 'primary', description: '頻繁少量排尿、排尿時間變長、排尿疼痛表現' },
      { sign: '尿道阻塞', category: 'primary', description: '腫瘤侵犯尿道導致排尿困難或排不出來，這是急診' },
      { sign: '腎後性腎衰竭', category: 'secondary', description: '腫瘤阻塞輸尿管口，BUN/Cre 升高、少尿或無尿' },
      { sign: '跛行', category: 'secondary', description: '肥大型骨病（hypertrophic osteopathy）這個副腫瘤症候群，少見但很有特徵' },
    ],
    staging: {
      system: 'TNM Staging for Canine Bladder TCC',
      stages: [
        'T0：無原發腫瘤證據',
        'Tis：原位癌（carcinoma in situ）',
        'T1：淺層腫瘤（黏膜/黏膜下層）',
        'T2：腫瘤侵犯肌層',
        'T3：腫瘤侵犯鄰近器官（前列腺、子宮、陰道）',
      ],
    },
    differential_diagnosis: [
      { condition: '細菌性膀胱炎', key_differentiator: '尿液培養陽性，抗生素治療反應好，超音波看不到腫塊' },
      { condition: '膀胱息肉', key_differentiator: '良性，超音波看到帶蒂腫塊，組織病理是移行上皮增生不是惡性' },
      { condition: '膀胱結石', key_differentiator: '超音波看到高回音結構伴聲影，X 光可能看得到' },
      { condition: '前列腺疾病', key_differentiator: '前列腺腫大、尿道分泌物，超音波可以區分' },
    ],
    diagnostic_workup: '流程：先做尿液分析加培養排除感染，接著尿液 BRAF V595E 突變 PCR 做非侵入性篩檢（敏感度約 85%，特異度超過 99%），腹超看三角區腫塊、腎盂擴張、淋巴結，胸腔 X 光，膀胱鏡加活檢確定診斷（或創傷性導尿管沖洗採樣），CBC/BCS 評估腎功能，必要時加 CT 評估腫瘤範圍跟手術計畫。',
    treatment_protocol: '藥物首選 Piroxicam 0.3 mg/kg PO SID（COX-2 抑制劑，有直接抗腫瘤跟抗血管生成活性）。合併化療用 Mitoxantrone 5 mg/m² IV q3 weeks × 4 到 6 次加 Piroxicam（反應率約 35%）。替代方案是 Carboplatin 加 Piroxicam、Vinblastine 口服加 Piroxicam。手術可以做部分膀胱切除（非三角區腫瘤）、尿道支架置入（緩解尿道阻塞）。姑息性處理用輸尿管支架或腎造瘻（腎後性阻塞）。',
    prognosis: 'Piroxicam 單獨用部分緩解率約 18%、穩定約 50%，中位存活約 6 個月。Mitoxantrone 加 Piroxicam 中位存活 8 到 10 個月。Carboplatin 加 Piroxicam 中位存活 6 到 8 個月。尿道阻塞放支架後額外中位存活 2 到 3 個月。整體中位存活 6 到 12 個月。不良預後因子有尿道浸潤、前列腺侵犯、腎後性阻塞。',
    monitoring: '每個月做尿液分析。每 2 到 3 個月腹超評估腫瘤大小變化。腎功能（BUN/Cre）每 1 到 2 個月測一次。用 Piroxicam 期間要監測腎功能跟 GI 副作用。化療期間每次治療前 CBC。同時要監測排尿功能跟生活品質。',
    owner_communication: 'TCC 是犬膀胱最常見的癌症，因為位置在膀胱三角區，完整手術切除通常做不到。不過藥物治療（Piroxicam 加減化療）可以有效控制腫瘤生長，多數犬在治療期間生活品質還可以。最大的風險是尿道或輸尿管阻塞，所以排尿功能要盯緊。一旦排尿困難或排不出來就要當急診處理。',
  },
  diagnostic_data: null,
  procedure_data: null,
  visual_placeholders: [
    { position: '臨床表現段落後', type: 'annotated_image', description: '膀胱三角區 TCC 好發位置示意圖' },
    { position: '治療段落後', type: 'flowchart', description: 'TCC 治療決策流程圖' },
  ],
  interactive_placeholders: [],
  drug_api_links: ['Piroxicam', 'Mitoxantrone', 'Carboplatin', 'Vinblastine'],
  references: [
    { type: 'journal', citation: 'Sommer BC, Dhawan D, Ruple A, Ramos-Vara JA, Hahn NM, et al. "Basal and Luminal Molecular Subtypes in Naturally-Occurring Canine Urothelial Carcinoma are Associated with Tumor Immune Signatures and Dog Breed." Bladder Cancer. 2021;7(3):317-333. doi:10.3233/BLC-201523', relevance: '近期：犬 TCC 分子亞型（basal/luminal）＋免疫特徵＋品種關聯' },
    { type: 'journal', citation: 'Sommer BC, Dhawan D, Ratliff TL, Knapp DW. "Naturally-Occurring Canine Invasive Urothelial Carcinoma: A Model for Emerging Therapies." Bladder Cancer. 2018;4(2):149-159. doi:10.3233/BLC-170145', relevance: '近期：犬 TCC 作為新興療法的比較腫瘤學模型' },
    { type: 'journal', citation: 'Mochizuki H, Kennedy K, Shapiro SG, Breen M. "BRAF Mutations in Canine Cancers." PLoS One. 2015;10(6):e0129534. doi:10.1371/journal.pone.0129534', relevance: 'BRAF V595E 突變在犬 TCC 的發現' },
    { type: 'journal', citation: 'Knapp DW, Ramos-Vara JA, Moore GE, Dhawan D, et al. "Urinary Bladder Cancer in Dogs, a Naturally Occurring Model for Cancer Biology and Drug Development." ILAR J. 2014;55(1):100-118. doi:10.1093/ilar/ilu018', relevance: '犬 TCC 作為人膀胱癌模型（修正 v1 garbled 引用）' },
    { type: 'guideline', citation: 'Biller B, Berg J, Garrett L, et al. "2016 AAHA Oncology Guidelines for Dogs and Cats." J Am Anim Hosp Assoc. 2016;52(4):181-204. doi:10.5326/jaaha-ms-6570', relevance: 'AAHA 腫瘤科指引，TCC 診斷與管理' },
    { type: 'textbook', citation: 'Vail DM, Thamm DH, Liptak JM. Withrow & MacEwen\'s Small Animal Clinical Oncology, 6th ed. Elsevier, 2020.', relevance: 'TCC 完整章節' },
  ],
  is_current: true,
  created_at: now,
};

/** 貓注射處肉瘤 (FISS)，疾病型 */
const contentFISS: NodeContent = {
  id: 'CONTENT-ONCO-L3-008',
  node_id: 'ONCO-L3-008',
  version: 2,
  summary: '貓打針位置纖維肉瘤（Feline Injection-Site Sarcoma, FISS）是跟疫苗或其他注射有關的貓特有惡性腫瘤，由注射部位慢性發炎反應誘發，組織學多半是纖維肉瘤。局部侵襲性很強，手術切緣要非常積極（lateral 至少 3 到 5 cm 加 2 個 fascial planes deep）。建議的注射部位已經調整到遠端肢體，必要時可以截肢。台灣疫苗施打普及，FISS 是臨床上要特別小心的腫瘤。',
  learning_objectives: [
    '描述 FISS 的病因假說與慢性發炎角色',
    '說明「3-2-1 規則」用於篩檢疑似 FISS 的注射部位腫塊',
    '列出 FISS 手術切緣標準與手術計畫原則',
    '解釋 VAFSTF 建議的疫苗注射部位指引',
    '評估 FISS 的預後與多模式治療策略',
  ],
  key_points: [
    '跟疫苗（特別是含佐劑的 FeLV 跟 Rabies 疫苗）或其他注射（長效類固醇、Lufenuron）有關',
    '發生率大約 1/1,000 到 1/10,000 次注射（不同研究差異很大）',
    '組織學多半是纖維肉瘤（fibrosarcoma），特徵是周圍有淋巴球-巨噬細胞浸潤（慢性發炎的證據）',
    '「3-2-1 規則」：腫塊超過 3 個月還在、直徑超過 2 cm、注射後 1 個月還在變大，符合任一條件就建議活檢',
    '手術切緣要非常積極：lateral 至少 3 到 5 cm 加 deep 至少 2 個 fascial planes（含筋膜面）',
    'VAFSTF 建議：FeLV 疫苗打左後肢遠端、Rabies 疫苗打右後肢遠端，必要時可以截肢',
    '台灣臨床要注意：狂犬病疫苗是法定必打，飼主衛教注射後追蹤很重要',
  ],
  body: `# 貓注射處肉瘤 (FISS)

## 一、病理機制 (Pathophysiology)



### 概述
貓打針位置纖維肉瘤是跟注射部位慢性發炎反應有關的惡性腫瘤，最早在 1990 年代被報導跟含佐劑疫苗注射有關。FISS 的發生改變了獸醫界對貓疫苗施打部位的建議。

### 病因假說
慢性發炎假說：注射部位持續性發炎反應是關鍵。含鋁鹽佐劑的疫苗（FeLV、Rabies）風險最高。其他注射也可能誘發，像長效類固醇、Lufenuron、微晶片。慢性發炎讓纖維母細胞持續增殖，p53 這些抑癌基因突變，最後跑出惡性轉化。不是每隻貓都會發生，個體遺傳易感性可能也有影響。

### 3-2-1 規則
疑似 FISS 的注射部位腫塊篩檢標準是這樣：3 個月（注射後腫塊持續超過 3 個月）、2 cm（腫塊直徑超過 2 cm）、1 個月（注射後 1 個月腫塊還在變大）。符合任一條件就建議做 incisional biopsy（切取活檢）。

### VAFSTF 疫苗注射部位建議
FeLV 疫苗打左後肢遠端（膝關節以下），Rabies 疫苗打右後肢遠端（膝關節以下），FVRCP 疫苗打右前肢遠端。目的是離開肩胛間區避免手術困難，遠端肢體必要時可以截肢。重點是：絕對不要在肩胛間區打含佐劑疫苗。

## 二、臨床表現與診斷 (Clinical Signs & Diagnosis)

典型表現是注射部位（肩胛間、後肢、腹壁）出現堅硬、快速生長的皮下腫塊，通常在注射後幾個月到幾年才會冒出來。用 3-2-1 法則篩檢：腫塊持續超過 3 個月、直徑超過 2 cm、或注射後 1 個月還在變大，符合任一條件就要切片。診斷上 FNA 細胞學可以看到梭形細胞，但確診要組織切片。術前建議 CT/MRI 評估腫瘤範圍，因為 FISS 常常沿筋膜平面浸潤，臨床可見範圍比實際小很多。

## 三、治療策略 (Treatment)

### 治療
### 手術（首選且最重要）
切緣標準是 lateral 至少 3 到 5 cm 加 deep 至少 2 個 fascial planes。肩胛間區腫瘤可能要做脊突切除。肢體腫瘤通常截肢是最好的選擇，切緣最充足。

### 多模式治療
術前放射治療可以縮小腫瘤，提高手術成功率。術後放射治療用在切緣不淨或 close margins 的情況。化療方案是 [藥物:Doxorubicin] 25 mg/m² IV q3 weeks × 5 次或 [藥物:Carboplatin]。

[圖片:VAFSTF 建議疫苗注射部位示意圖]

## 四、併發症與監控 (Complications & Monitoring)

手術併發症跟切除範圍有關，因為 FISS 切緣很寬（lateral 至少 3 到 5 cm 加深度至少一個筋膜面），大範圍切除常常會遇到傷口癒合問題。放射治療會引起皮膚毒性（脫毛、濕性脫皮）。局部復發率落在 30 到 70%，看手術切緣決定。監控重點是每個月觸診手術區域，建議每 3 個月做影像追蹤。遠端轉移率大約 10 到 25%，每 3 到 6 個月拍胸腔 X 光追蹤。

## 五、預後與預後因子 (Prognosis)

預後最關鍵的是首次手術的完整度，首次就達到完整寬切緣的治癒率最高。局部復發中位時間 4 到 16 個月（看切緣狀態），每次復發後再切除難度都會增加。完整切除加放射治療中位存活可以到 2 到 3 年以上。預後因子主要看：手術切緣是否完整（最重要）、腫瘤分級、腫瘤大小、有絲分裂指數，還有是首次手術還是復發手術。

## 六、人醫借鑒 (Translational Insights)

| 人醫工具/概念 | 獸醫應用潛力 | 現況 |
|-------------|-------------|------|
| 非佐劑疫苗技術（recombinant/mRNA） | 貓疫苗改良，無佐劑配方降低 FISS 發生風險 | 非佐劑重組 FeLV/Rabies 疫苗已有市售產品 |
| 術前新輔助放療（Neoadjuvant RT） | 貓 FISS 術前縮小腫瘤提高完整切除率 | 獸醫放療中心已有 FISS 術前 RT 的臨床方案 |
| 電化學療法（Electrochemotherapy, ECT） | 貓 FISS 局部控制，電穿孔結合 Bleomycin/Cisplatin | 歐洲獸醫機構已有 FISS ECT 臨床報告 |
| 腫瘤溶解病毒（Oncolytic virus） | 貓肉瘤的局部免疫激活治療 | 早期動物模型研究中 |

## 七、臨床爭議與知識空缺 (Controversies & Knowledge Gaps)

| 爭議議題 | 現況 | Evidence Level |
|---------|------|---------------|
| 非佐劑疫苗是否真的能降低 FISS 風險 | 流行病學數據還不足以確認非佐劑配方有沒有完全消除風險 | Level III |
| FISS 手術切緣 3 cm vs 5 cm 的最低充分標準 | 3 cm 對小腫瘤可能夠，但是大型或復發腫瘤要 5 cm，缺乏前瞻性比較 | Level III |
| 化療（Doxorubicin/Carboplatin）在 FISS 多模式治療中的實際獲益 | 回顧性研究結果不一致，化療是不是能額外延長存活還不確定 | Level III |
| FISS 發生的個體遺傳易感性基礎 | 為什麼只有少數貓發生 FISS？遺傳學研究（像 p53 多型性）還沒有明確結論 | Level IV |

## 八、近期實證更新 (Recent Evidence Updates)

### 疫苗指引演進：注射部位與非佐劑疫苗
2020 AAHA/AAFP 貓疫苗指引（Stone 2020）延續 VAFSTF 精神，建議離開肩胛間區、改打遠端肢體（必要時可截肢之部位），部分主張更遠端/尾部；並傾向使用非佐劑/重組疫苗（如 canarypox 載體 FeLV、重組狂犬）以降低慢性發炎與 FISS 風險（惟風險降低尚未完全證實）。逐劑記錄疫苗品項與部位以利日後追蹤。

### 影像導引與「一次到位」手術
術前 CT/MRI 評估指狀浸潤範圍已是標準，避免低估切除範圍；首次即達寬切緣（lateral 3-5 cm + ≥2 筋膜面）是預後最關鍵因子，邊緣切除使局部復發率由 ~14% 升至 >60%。

### 放療與電化學療法
術前/術後放療用於縮腫瘤或處理 close/dirty margin；電化學療法（ECT，電穿孔結合 bleomycin/cisplatin）在歐洲報告用於 FISS 局部控制或輔助（Spugnini 2020），為不可完全切除/復發病例的選項。

### 化療角色與分子研究
doxorubicin/carboplatin 的存活益處在回顧性研究結果不一致，多模式仍以「手術＋放療」為主幹；個體遺傳易感性（p53 等）與分子標靶為研究方向。`,
  clinical_pearl: 'FISS 治療的黃金法則就是「先活檢、再手術」。很多一般獸醫師發現注射部位腫塊會想用邊緣切除（marginal excision）「先拿掉看看」，這是 FISS 治療最常見的錯誤。首次手術切不乾淨會讓局部復發率從 14%（首次積極手術）飆到超過 60%。正確做法是先做 incisional biopsy 確診，CT 評估腫瘤範圍，再做有計畫的積極手術（至少 3 cm 加 2 個 fascial planes）。腫瘤型態跟生物行為先確認，首次手術不能省。\n\n【台灣流行病學】FISS 在台灣是有臨床重要性的貓特有腫瘤，因為台灣疫苗施打率高（狂犬病疫苗法定必打），年施打量大，累積病例數不能小看。台灣獸醫師要遵循 VAFSTF 建議把注射部位改到遠端肢體（右後肢打狂犬病疫苗、左後肢打 FVRCP 等）。台灣飼主衛教重點：疫苗注射後如果注射部位出現腫塊，用 3-2-1 rule 觀察（3 個月還在、直徑超過 2 cm、1 個月內還在變大）就要立刻就醫。',
  common_mistakes: [
    '用邊緣切除（marginal excision）「先拿掉看看」而不是積極手術：首次手術切緣是預後最重要的決定因子',
    '繼續在肩胛間區打含佐劑疫苗：應該遵循 VAFSTF 建議改打遠端肢體',
    '手術前沒做 CT 評估腫瘤範圍：FISS 的實際侵犯範圍常常比觸診大很多',
    '沒跟飼主交代疫苗接種後要追蹤注射部位腫塊：飼主衛教是早期發現的關鍵',
    '因為「發生率低」就覺得不用改變注射習慣：台灣年施打量大，累積病例數不能小看',
  ],
  disease_data: {
    signalment: '貓，沒有品種偏好。中位年齡 8 到 10 歲（但任何年齡都可能）。沒有性別偏好。發生部位跟注射部位有關：以前肩胛間區最常見（因為過去的注射習慣），近年遠端肢體比例慢慢上升。',
    etiology: '注射部位慢性發炎反應誘發的惡性轉化。主要風險因子是含鋁鹽佐劑疫苗（FeLV、Rabies）、長效類固醇注射。發炎反應中的活性氧物質（ROS）跟生長因子讓纖維母細胞 DNA 損傷（p53 突變等），跑出克隆性惡性增殖。個體遺傳易感性可能也影響發生率。',
    pathogenesis: '注射刺激造成局部慢性肉芽腫性發炎，纖維母細胞持續增殖修復，基因突變累積（p53 這些抑癌基因），最後惡性轉化成肉瘤。局部高度侵襲性生長，指狀突起會延伸到周圍組織，遠遠超出可見腫塊邊界。區域轉移少見（淋巴結），遠端轉移大約 10 到 25%（主要是肺）。',
    clinical_signs: [
      { sign: '注射部位硬性腫塊', category: 'primary', description: '注射後幾週到幾年出現的堅硬、不可移動腫塊，跟周圍組織黏連' },
      { sign: '腫塊持續增大', category: 'primary', description: '漸進性增大，符合 3-2-1 規則任一條件就要警覺' },
      { sign: '局部皮膚潰瘍', category: 'secondary', description: '大型腫塊表面皮膚壞死潰瘍' },
      { sign: '活動受限', category: 'secondary', description: '肩胛間區大型腫瘤會影響前肢活動' },
    ],
    staging: null,
    differential_diagnosis: [
      { condition: '疫苗注射後反應性腫脹', key_differentiator: '通常 2 到 4 週內消退，質軟，大小穩定或縮小。超過 1 個月還在就要再評估' },
      { condition: '皮下脂肪瘤', key_differentiator: '質軟、可移動、FNA 看到脂肪細胞' },
      { condition: '膿瘍', key_differentiator: '波動感、觸痛、可能發燒，FNA 看到化膿性滲出物' },
      { condition: '其他皮下肉瘤（非注射相關）', key_differentiator: '組織學沒有注射部位特徵性的淋巴球-巨噬細胞周邊浸潤帶' },
    ],
    diagnostic_workup: '流程：先看病史（注射紀錄、腫塊出現時間），觸診評估（大小、活動性、跟周圍組織關係），做 Incisional biopsy（切取活檢，不是 excisional），組織病理確診（纖維肉瘤加周邊淋巴球浸潤帶），CT 評估腫瘤實際侵犯範圍（遠大於觸診），胸腔 X 光三面投射，CBC/BCS，最後制定手術計畫。',
    treatment_protocol: '手術第一線而且最重要。首次手術切緣：lateral 至少 3 到 5 cm 加 deep 至少 2 個 fascial planes。肢體腫瘤截肢通常切緣最好。肩胛間區可能要做部分脊突切除跟肩胛骨切除。多模式治療：術前放療（16 到 20 次分割，共 48 到 54 Gy）可以縮小腫瘤。術後放療用在切緣不淨或 close margins。化療用 Doxorubicin 25 mg/m² IV q3 weeks × 5 次，Carboplatin 是替代方案。三合一（手術加放療加化療）用在高風險病例。',
    prognosis: '首次積極手術（切緣乾淨）局部復發率約 14%，中位存活超過 2 年。首次邊緣切除後復發再手術復發率超過 60%。多模式治療（手術加放療加減化療）中位存活 2 到 3 年。遠端轉移率約 10 到 25%（主要是肺）。首次手術的品質是決定預後最關鍵的因子。',
    monitoring: '術後每個月觸診手術部位監測復發共 6 個月，之後每 3 個月共 2 年，再之後每 6 個月。每 3 到 6 個月拍胸腔 X 光。化療期間每次治療前 CBC。要長期追蹤：FISS 可能在術後好幾年才復發。',
    owner_communication: 'FISS 是跟注射（特別是疫苗）有關的併發症，雖然罕見但是嚴重。疫苗還是保護貓健康的重要工具，不應該因為 FISS 就停打疫苗，要做的是調整注射部位跟方式。建議飼主每次注射後追蹤注射部位，出現 3-2-1 規則任一條件就要就醫。早期發現加上首次積極手術是最佳預後的關鍵。要強調不要在肩胛間區注射。',
  },
  diagnostic_data: null,
  procedure_data: null,
  visual_placeholders: [
    { position: 'VAFSTF 段落後', type: 'annotated_image', description: 'VAFSTF 建議疫苗注射部位貓體圖標示' },
    { position: '治療段落後', type: 'flowchart', description: 'FISS 多模式治療決策流程圖' },
  ],
  interactive_placeholders: [],
  drug_api_links: ['Doxorubicin', 'Carboplatin'],
  references: [
    { type: 'guideline', citation: 'Vaccine-Associated Feline Sarcoma Task Force. The current understanding and management of vaccine-associated sarcomas in cats. J Am Vet Med Assoc. 2005;226(11):1821-1842. doi:10.2460/javma.2005.226.1821.', relevance: 'VAFSTF 官方指引' },
    { type: 'textbook', citation: 'Vail DM, Thamm DH, Liptak JM. Withrow & MacEwen\'s Small Animal Clinical Oncology, 6th ed. Elsevier, 2020.', relevance: 'FISS 完整章節' },
    { type: 'journal', citation: 'Ladlow J. Injection site-associated sarcoma in the cat: treatment recommendations and results to date. J Feline Med Surg. 2013;15(5):409-418. doi:10.1177/1098612x13483239.', relevance: 'FISS 治療建議與預後數據' },
    { type: 'guideline', citation: 'Stone AE, Brummet GO, Carozza EM, et al. 2020 AAHA/AAFP Feline Vaccination Guidelines. J Feline Med Surg. 2020;22(9):813-830. doi:10.1177/1098612x20941784.', relevance: '貓疫苗指引：注射部位與非佐劑疫苗降低 FISS 風險' },
    { type: 'journal', citation: 'Spugnini EP, Baldi A. Combination of bleomycin and cisplatin as adjuvant electrochemotherapy protocol for the treatment of feline injection-site sarcomas. Open Vet J. 2020;10(3):267-271. doi:10.4314/ovj.v10i3.4.', relevance: '電化學療法（ECT）輔助治療貓 FISS' },
  ],
  is_current: true,
  created_at: now,
};

/** 獸醫腫瘤科總覽，概念型 */
const contentOncoOverview: NodeContent = {
  id: 'CONTENT-ONCO-L0-001',
  node_id: 'ONCO-L0-001',
  version: 2,
  summary: '獸醫腫瘤科是專門研究和治療伴侶動物腫瘤的臨床專科。隨著犬貓壽命延長，腫瘤已成為老年伴侶動物最主要的死因之一。犬的腫瘤發生率約為人的 10 倍，貓的某些腫瘤（如注射處肉瘤）則具物種特異性。獸醫腫瘤科涵蓋腫瘤的診斷、分期、多模式治療（手術、化療、放療、免疫治療）及緩和醫療。比較腫瘤學（Comparative Oncology）使犬貓腫瘤成為人類腫瘤研究的重要自然發生模型。',
  learning_objectives: [
    '描述獸醫腫瘤科的範疇與伴侶動物常見腫瘤的流行病學概況',
    '說明腫瘤診斷的基本流程：從臨床懷疑到組織學確診',
    '列出犬貓腫瘤治療的四大模式：手術、化療、放療、免疫治療',
    '解釋比較腫瘤學（Comparative Oncology）的概念與臨床價值',
    '辨識台灣地區伴侶動物常見腫瘤的流行病學特點',
  ],
  key_points: [
    '腫瘤為老年犬貓最主要死因之一：犬腫瘤發生率約 381/100,000，貓約 264/100,000',
    '犬最常見惡性腫瘤：淋巴瘤、MCT、骨肉瘤、血管肉瘤、口腔黑色素瘤',
    '貓最常見惡性腫瘤：淋巴瘤、鱗狀細胞癌、乳腺腫瘤、注射處肉瘤、纖維肉瘤',
    '腫瘤診斷金字塔：臨床懷疑 → FNA 細胞學 → 組織病理 → 免疫組織化學/分子診斷',
    '治療目標：治癒（cure）、控制（control）、或緩和（palliation），依腫瘤類型、分期和飼主意願而定',
    '比較腫瘤學：犬貓腫瘤為自然發生模型，與人類腫瘤在生物學行為上高度相似',
    'VCOG（Veterinary Cooperative Oncology Group）建立了標準化的化療毒性評估標準（VCOG-CTCAE）',
    '台灣特別注意：FISS 因疫苗施打普及而具臨床重要性；TVT（傳染性性病腫瘤）在流浪犬仍可見',
  ],
  body: `# 獸醫腫瘤科總覽 (Veterinary Oncology Overview)

## 一、核心概念與機轉 (Core Concept & Mechanism)



### 學科定義與範疇
獸醫腫瘤科為專門處理伴侶動物（犬、貓為主）腫瘤性疾病的臨床專科。美國獸醫內科學院腫瘤專科（ACVIM-Oncology）與美國獸醫放射腫瘤學院（ACVR-RO）為主要認證機構。學科涵蓋：

- 腫瘤內科：化學治療、標靶治療、免疫治療
- 腫瘤外科：腫瘤切除原則、切緣評估
- 放射腫瘤科：根治性與姑息性放射治療
- 緩和醫療：疼痛管理、生活品質評估

### 流行病學概況
### 犬
- 腫瘤為 10 歲以上犬最主要死因（約 50%）
- 皮膚腫瘤最常見（MCT、軟組織肉瘤、脂肪瘤）
- 好發品種偏好強烈（如 Golden Retriever：淋巴瘤、HSA；Boxer：MCT）

### 貓
- 淋巴瘤為最常見惡性腫瘤（FeLV 相關性已降低）
- 乳腺腫瘤超過 85% 是惡性（跟犬差很多）
- FISS 為台灣臨床重要議題

### 腫瘤診斷基本流程
1. 臨床懷疑：腫塊發現、異常症狀
2. 細胞學（FNA）：快速、低侵入性的第一線工具
3. 組織病理學：確定診斷、分級（grading）
4. 分期檢查（Staging）：影像學 + 實驗室 → TNM 分期
5. 分子診斷：免疫分型、基因突變檢測（如 c-KIT、BRAF）

### 治療四大模式
| 模式 | 適用時機 | 優點 | 限制 |
|------|----------|------|------|
| 手術 | 局部實體腫瘤 | 可能治癒、組織病理評估 | 需足夠切緣、全身麻醉 |
| 化療 | 全身性腫瘤、輔助治療 | 控制微轉移 | 骨髓抑制、GI 副作用 |
| 放療 | 局部控制、姑息止痛 | 非侵入性 | 設備昂貴、需多次麻醉 |
| 免疫治療 | 特定腫瘤輔助 | 低副作用 | 效果可變、費用高 |

### 比較腫瘤學
犬貓腫瘤作為人類腫瘤的自然發生模型，具有以下優勢：
- 自然免疫環境中發展（非移植模型）
- 與人類共享生活環境
- 腫瘤生物學行為高度相似（如犬 OSA ↔ 人青少年 OSA）
- 臨床試驗流程較短

[圖片:獸醫腫瘤科知識架構總覽圖]

## 二、臨床意義 (Clinical Significance)

腫瘤是老年伴侶動物最常見的死因之一，犬的腫瘤發生率大約是人的 10 倍。隨著獸醫診斷能力提升、飼主健康意識變強，腫瘤科在獸醫臨床的角色越來越吃重。早期診斷加上正確分期能明顯改善治療結果，外科、腫瘤內科、放射治療、病理多學科團隊合作是最佳治療模式的基礎。

## 三、人醫借鑒 (Translational Insights)

| 人醫工具/概念 | 獸醫應用潛力 | 現況 |
|-------------|-------------|------|
| 精準醫療（Precision Medicine）基因導向治療 | 犬腫瘤依分子分型選擇標靶治療（c-KIT/BRAF/PD-L1） | 犬 MCT TKI、TCC BRAF 抑制劑已進入臨床 |
| 比較腫瘤學臨床試驗網絡（COTC） | 犬腫瘤作為人癌新藥的天然模型加速藥物開發 | NCI-COTC 持續運作中，犬試驗數據回饋人醫 |
| 液態活檢多癌種早篩（Galleri/GRAIL） | 犬腫瘤的血液多癌種早期篩檢，高風險品種受惠 | 犬 cfDNA 早篩平台正在開發中 |
| One Health 腫瘤流行病學 | 犬貓與人共享環境致癌物暴露，互惠研究 | 犬 OSA/淋巴瘤/TCC 作為環境致癌物哨兵模型 |

## 四、臨床爭議與知識空缺 (Controversies & Knowledge Gaps)

| 爭議議題 | 現況 | Evidence Level |
|---------|------|---------------|
| 獸醫化療的最佳劑量策略，MTD vs 節拍式 vs 劑量密集 | 缺乏前瞻性 RCT 比較不同化療策略的 OS 和 QoL | Level III |
| 犬貓腫瘤篩檢的成本效益，高風險品種是否應定期篩檢 | 篩檢可能提早診斷但對 OS 影響未經驗證 | Level IV |
| 獸醫腫瘤科治療結果的標準化報告，VCOG RECIST 的採用程度 | 不同研究使用不同療效評估標準，跨研究比較困難 | Level IV |
| 安樂死時機的客觀標準，QoL 量表的信度和效度 | HHHHHMM 等量表被廣泛使用但缺乏正式驗證研究 | Level IV |`,
  clinical_pearl: '腫瘤科黃金法則：發現任何新腫塊先 FNA 再決定。一支 22 到 25G 針頭加上 Diff-Quick 染色，10 分鐘內就能告訴你最關鍵的第一步資訊，是發炎還是腫瘤、是 round cell 還是 epithelial 或 mesenchymal。這會直接影響後續決策（像 MCT 要寬切緣手術，不能簡單摘除）。',
  common_mistakes: [
    '沒做細胞學或組織病理就「先切掉再說」，結果切緣不夠要二次手術',
    '把老年動物的腫塊當成「老了正常」而延誤診斷',
    '化療前沒跟飼主好好溝通治療目標：治癒、控制還是緩和',
    '忽略品種易感性，沒做適當的腫瘤篩檢',
  ],
  disease_data: null,
  diagnostic_data: null,
  procedure_data: null,
  visual_placeholders: [
    { position: '診斷流程段落後', type: 'flowchart', description: '腫瘤診斷金字塔流程圖' },
    { position: '治療模式段落後', type: 'mind_map', description: '腫瘤治療四大模式心智圖' },
  ],
  interactive_placeholders: [],
  drug_api_links: [],
  references: [
    { type: 'textbook', citation: 'Vail DM, Thamm DH, Liptak JM. Withrow and MacEwen\'s Small Animal Clinical Oncology, 6th ed. Elsevier, 2020.', relevance: '獸醫腫瘤科主要教科書（6th ed 編者更正：Vail/Thamm/Liptak；Withrow/Page 為 5th ed 編者）' },
    { type: 'guideline', citation: 'VCOG，Veterinary Cooperative Oncology Group. Common Terminology Criteria for Adverse Events (VCOG-CTCAE) v2. Vet Comp Oncol. 2016;14(4):417-446.', relevance: '化療副作用分級標準（毒性分級）' },
    { type: 'guideline', citation: 'Nguyen SM, et al. "Response evaluation criteria for solid tumours in dogs (v1.0): a Veterinary Cooperative Oncology Group (VCOG) consensus document." Vet Comp Oncol. 2013;13(3):176-183. doi:10.1111/vco.12032', relevance: '犬實體腫瘤反應評估準則（VCOG 版 RECIST），與上方 CTCAE 併用評估療效與毒性；標示 online-first 年 2013（印刷 vol 13(3)=2015），Crossref 驗證' },
    { type: 'journal', citation: 'Paoloni M, Khanna C. Translation of new cancer treatments from pet dogs to humans. Nat Rev Cancer. 2008;8(2):147-156.', relevance: '比較腫瘤學概念與價值（奠基文獻）' },
    { type: 'journal', citation: 'Ahn, et al. "Comparative Cancer Genetics and Veterinary Therapeutics in Dogs and Cats: A Species-Aware Framework for Comparative Oncology." Life. 2026;16(3):430. doi:10.3390/life16030430', relevance: '2026 近期綜述：犬貓比較腫瘤學的物種感知框架（Crossref 驗證）' },
  ],
  is_current: true,
  created_at: now,
};

/** 腫瘤生物學，概念型 */
const contentTumorBiology: NodeContent = {
  id: 'CONTENT-ONCO-L1-001',
  node_id: 'ONCO-L1-001',
  version: 1,
  summary: '腫瘤生物學是理解腫瘤發生、生長、浸潤跟轉移的基礎科學。正常細胞要經過多步驟基因突變（multistep carcinogenesis）才會轉化成腫瘤細胞，過程牽涉到原癌基因活化（oncogene activation）跟抑癌基因失活（tumor suppressor loss）。Hallmarks of Cancer 架構描述了腫瘤細胞的十大核心特徵，包括持續增殖信號、逃避生長抑制、抗凋亡、啟動血管新生、啟動浸潤轉移、能量代謝重編程等。這些基本原理對腫瘤診斷、預後判斷跟治療選擇都不能省。',
  learning_objectives: [
    '說明多步驟致癌機轉（multistep carcinogenesis）的概念',
    '區分原癌基因（proto-oncogene）與抑癌基因（tumor suppressor gene）的角色',
    '列出 Hallmarks of Cancer 的十大核心特徵',
    '描述細胞週期調控與腫瘤增殖的關聯',
    '解釋腫瘤分級（grading）與分期（staging）的生物學基礎',
  ],
  key_points: [
    '多步驟致癌機轉：正常細胞需累積多個基因突變才會轉化為惡性腫瘤（initiation → promotion → progression）',
    '原癌基因（如 c-KIT、RAS、MYC）：功能獲得性突變 → 持續增殖信號（油門卡住）',
    '抑癌基因（如 p53、Rb、PTEN）：功能喪失性突變 → 失去生長抑制（煞車失靈）',
    'Hallmarks of Cancer（Hanahan & Weinberg）：持續增殖信號、逃避生長抑制、抗凋亡、無限複製潛力、啟動血管新生、啟動浸潤轉移、基因不穩定、腫瘤促進性發炎、能量代謝重編程、免疫逃脫',
    '細胞週期：G1 → S → G2 → M，CDK/Cyclin 調控，p53 為 G1/S 檢查點關鍵',
    '腫瘤分級（Grade）反映細胞分化程度與生物學侵襲性；分期（Stage）反映腫瘤範圍',
    '獸醫臨床重要突變：c-KIT（MCT）、BRAF V595E（TCC）、p53（多種腫瘤）',
  ],
  body: `# 腫瘤生物學 (Tumor Biology)

## 一、核心概念與機轉 (Core Concept & Mechanism)



### 多步驟致癌機轉
腫瘤的形成並非單一事件，而是多個基因突變逐步累積的結果：

### 三階段模型
1. 啟動（Initiation）：DNA 不可逆損傷（基因突變），但細胞外觀正常
2. 促進（Promotion）：促進因子使突變細胞增殖擴張（可逆階段）
3. 進展（Progression）：額外突變累積 → 惡性轉化 → 浸潤與轉移能力

### 原癌基因與抑癌基因
### 原癌基因（Proto-oncogenes → Oncogenes）
- 正常功能：促進細胞生長與分裂
- 突變類型：功能獲得性（gain-of-function）
- 比喻：油門卡住
- 獸醫重要範例：
  - c-KIT：SCF 受體，MCT 中約 30-50% 突變 → TKI 標靶治療
  - RAS 家族：MAPK 通路，多種腫瘤
  - BRAF V595E：犬 TCC 約 85% 帶有此突變

### 抑癌基因（Tumor Suppressor Genes）
- 正常功能：抑制細胞生長、啟動凋亡、修復 DNA
- 突變類型：功能喪失性（loss-of-function），通常需要雙等位基因失活（two-hit hypothesis）
- 比喻：煞車失靈
- 獸醫重要範例：
  - p53：「基因組的守護者」，超過 50% 的犬腫瘤有 p53 突變
  - Rb：G1/S 檢查點調控，骨肉瘤相關
  - PTEN：PI3K/AKT 通路負調控

### Hallmarks of Cancer
[圖片:Hallmarks of Cancer 十大特徵示意圖]

| 特徵 | 說明 | 獸醫臨床範例 |
|------|------|-------------|
| 持續增殖信號 | 自分泌/旁分泌生長因子 | c-KIT 突變 MCT |
| 逃避生長抑制 | 抑癌基因失活 | p53 突變 |
| 抗凋亡 | 逃避程序性細胞死亡 | Bcl-2 過表達淋巴瘤 |
| 無限複製潛力 | 端粒酶活化 | 多數惡性腫瘤 |
| 啟動血管新生 | VEGF 驅動新血管形成 | HSA（血管來源腫瘤） |
| 啟動浸潤轉移 | EMT、基質金屬蛋白酶 | OSA 肺轉移 |
| 基因不穩定 | DNA 修復缺陷 | 多種腫瘤 |
| 腫瘤促進性發炎 | 慢性發炎促進腫瘤 | FISS（注射處慢性發炎） |
| 能量代謝重編程 | Warburg effect（有氧糖酵解） | 腫瘤惡病質 |
| 免疫逃脫 | 逃避免疫監視 | PD-L1 表達 |

### 細胞週期與腫瘤增殖
細胞週期：G0（靜止期）→ G1 → S（DNA 合成）→ G2 → M（有絲分裂）

- G1/S 檢查點：p53/Rb 調控，決定是否進入 DNA 合成
- G2/M 檢查點：確認 DNA 複製正確性
- 有絲分裂指數（Mitotic Index）：每 10 HPF 的有絲分裂數，為重要的組織學預後指標
- Ki-67 指數：增殖標記，標示所有非 G0 期細胞

化療藥物的細胞週期特異性：
- 週期特異性：Vincristine（M 期）、Cytarabine（S 期）
- 週期非特異性：Alkylating agents（Cyclophosphamide）、Doxorubicin

[互動:細胞週期與化療藥物作用位點互動圖]

## 二、臨床意義 (Clinical Significance)

理解腫瘤生物學行為（增殖速率、侵襲性、轉移傾向）會直接影響臨床決策。快速增殖的腫瘤對化療比較敏感但也比較有侵略性；慢速生長的腫瘤對化療可能不敏感，但手術治癒率比較高。增殖指標（Ki-67、有絲分裂指數）可以幫忙預測腫瘤行為跟預後，制定個體化治療計畫時很有幫助。

## 三、人醫借鑒 (Translational Insights)

| 人醫工具/概念 | 獸醫應用潛力 | 現況 |
|-------------|-------------|------|
| 腫瘤突變負荷（TMB）預測免疫治療反應 | 犬腫瘤 TMB 評估，預測免疫檢查點治療反應性 | 犬腫瘤 WES 研究已開始建立 TMB 資料庫 |
| 合成致死（Synthetic Lethality, PARP 抑制劑） | 犬腫瘤 BRCA/DNA 修復缺陷的標靶治療 | 人醫 BRCA 突變腫瘤已核准 PARP 抑制劑，犬研究中 |
| 突變特徵（Mutational Signature）分析 | 犬腫瘤致癌機轉推斷，指導治療選擇 | 犬 OSA/淋巴瘤/TCC 突變特徵已初步報告 |
| 基因組導向化療選擇 | 犬腫瘤分子分型指導個體化化療方案 | 犬腫瘤 NGS panel 商業化服務逐漸普及 |

## 四、臨床爭議與知識空缺 (Controversies & Knowledge Gaps)

| 爭議議題 | 現況 | Evidence Level |
|---------|------|---------------|
| Hallmarks of Cancer 框架在獸醫腫瘤學的完整適用性 | 多數 hallmark 在犬腫瘤已驗證，但免疫逃脫和代謝重編程研究仍不足 | Level IV |
| 腫瘤分級（Grade）vs 分期（Stage）哪個對預後預測更重要？ | 因腫瘤類型而異，MCT 以 Grade 為主，口腔黑色素瘤以 Stage 為主 | Level II |
| Ki-67 增殖指數的切點標準化 | 不同實驗室使用不同抗體和計數方法，犬腫瘤統一標準尚未建立 | Level III |
| 犬腫瘤的表觀遺傳學治療潛力 | DNA 甲基化抑制劑和 HDAC 抑制劑在犬腫瘤中的效果尚未臨床驗證 | Level IV |`,
  clinical_pearl: '理解原癌基因跟抑癌基因的概念會直接影響臨床決策。最典型的例子就是犬 MCT 的 c-KIT 突變，這不只是學術概念，而是決定要不要用 TKI 標靶治療（Toceranib 或 Masitinib）的關鍵。同樣道理，BRAF V595E 突變讓犬 TCC 有了非侵入性的尿液 PCR 診斷工具。分子腫瘤學從基礎慢慢走向臨床了。',
  common_mistakes: [
    '把良性腫瘤跟惡性腫瘤混為一談：兩者在生物學行為（浸潤、轉移能力）上本質就不一樣',
    '以為單一基因突變就足以導致癌症：多步驟致癌機轉需要多個突變累積',
    '忽略有絲分裂指數這個預後指標的重要性，Kiupel MCT 分級就是以有絲分裂指數為核心',
    '不理解細胞週期特異性對化療排程的影響：週期特異性藥物需要足夠的暴露時間',
  ],
  disease_data: null,
  diagnostic_data: null,
  procedure_data: null,
  visual_placeholders: [
    { position: 'Hallmarks 段落', type: 'mind_map', description: 'Hallmarks of Cancer 十大特徵心智圖' },
    { position: '細胞週期段落', type: 'animated_diagram', description: '細胞週期與化療藥物作用位點動態圖' },
  ],
  interactive_placeholders: [
    { position: '細胞週期段落後', type: 'interactive_diagram', description: '點擊細胞週期各階段顯示對應化療藥物' },
  ],
  drug_api_links: ['Vincristine', 'Cyclophosphamide', 'Doxorubicin'],
  references: [
    { type: 'textbook', citation: 'Vail DM, Thamm DH, Liptak JM. Withrow & MacEwen\'s Small Animal Clinical Oncology, 6th ed. Elsevier, 2020. Chapter 1: The Biology of Cancer.', relevance: '腫瘤生物學基礎章節（更正 6th ed 編者：Withrow/Page 為 5th ed，6th ed 實為 Vail/Thamm/Liptak）' },
    { type: 'journal', citation: 'Hanahan D, Weinberg RA. Hallmarks of cancer: the next generation. Cell. 2011;144(5):646-674. doi:10.1016/j.cell.2011.02.013', relevance: 'Hallmarks of Cancer 經典文獻' },
    { type: 'journal', citation: 'Schiffman JD, Breen M. Comparative oncology: what dogs and other species can teach us about humans with cancer. Philos Trans R Soc Lond B Biol Sci. 2015;370(1673):20140231. doi:10.1098/rstb.2014.0231', relevance: '比較腫瘤學與犬腫瘤遺傳學' },
    { type: 'guideline', citation: 'AAHA Oncology Guidelines for Dogs and Cats. J Am Anim Hosp Assoc. 2016;52(4):181-204.', relevance: 'AAHA 腫瘤科指引，腫瘤生物學基本概念' },
  ],
  is_current: true,
  created_at: now,
};

/** 腫瘤免疫學，概念型 */
const contentTumorImmunology: NodeContent = {
  id: 'CONTENT-ONCO-L1-002',
  node_id: 'ONCO-L1-002',
  version: 1,
  summary: '腫瘤免疫學研究的是免疫系統跟腫瘤之間的交互作用。免疫監視（immunosurveillance）理論指出免疫系統可以辨識並消滅腫瘤細胞，但是腫瘤會透過很多機制逃脫免疫攻擊。Cancer Immunoediting 三階段模型（消滅、平衡、逃脫）描述了腫瘤跟免疫系統的動態關係。在獸醫腫瘤科，犬黑色素瘤疫苗（Oncept）是第一個獲 USDA 核准的治療性腫瘤疫苗（2007 條件性、2010 完全核准），是腫瘤免疫治療在獸醫領域的重要突破。',
  learning_objectives: [
    '說明免疫監視（immunosurveillance）與免疫逃脫（immune escape）的概念',
    '描述 Cancer Immunoediting 的三個階段：消滅、平衡、逃脫',
    '列出腫瘤免疫逃脫的主要機制',
    '解釋犬黑色素瘤疫苗（Oncept）的免疫學原理',
    '辨識獸醫領域中免疫檢查點（immune checkpoint）治療的發展現況',
  ],
  key_points: [
    '免疫監視：NK 細胞、CD8+ CTL、巨噬細胞可辨識並殺滅腫瘤細胞',
    'Cancer Immunoediting：消滅（Elimination）→ 平衡（Equilibrium）→ 逃脫（Escape）',
    '腫瘤抗原分類：腫瘤特異性抗原（TSA，如 mutated proteins）和腫瘤相關抗原（TAA，如 tyrosinase）',
    '免疫逃脫機制：MHC-I 下調、PD-L1 表達、Treg 細胞招募、免疫抑制性細胞激素分泌（TGF-β、IL-10）、骨髓來源抑制細胞（MDSC）',
    'Oncept 疫苗：人 tyrosinase DNA 疫苗，打破對自身腫瘤抗原的免疫耐受',
    '免疫檢查點：PD-1/PD-L1 與 CTLA-4 通路在犬腫瘤中正在被研究',
    '腫瘤浸潤淋巴球（TIL）：與預後相關，高 TIL 通常預後較好',
  ],
  body: `# 腫瘤免疫學 (Tumor Immunology)

## 一、核心概念與機轉 (Core Concept & Mechanism)



### 免疫監視理論
免疫系統能辨識並消滅腫瘤細胞，這個概念叫做免疫監視（immunosurveillance）。參與的免疫細胞包括 NK 細胞（辨識 MHC-I 表達下降的腫瘤細胞，也就是「missing self」）、CD8+ 細胞毒性 T 細胞（CTL）（辨識 MHC-I 呈現的腫瘤抗原）、巨噬細胞（M1 型有抗腫瘤活性，但是 M2 型反而促進腫瘤），還有樹突細胞（DC）負責抗原呈現、啟動適應性免疫。

### Cancer Immunoediting
腫瘤跟免疫系統的交互作用是動態過程，分三個階段。

### 1. 消滅期（Elimination）
免疫系統成功辨識並清除腫瘤細胞，先天免疫（NK）跟適應性免疫（CTL）一起作用。多數早期腫瘤細胞會在這階段被消滅，不會跑出臨床腫瘤。

### 2. 平衡期（Equilibrium）
免疫系統控制住腫瘤生長，但是沒辦法完全清除。免疫壓力會篩選出低免疫原性（low immunogenicity）的克隆。可以持續幾個月到幾年的潛伏期。

### 3. 逃脫期（Escape）
腫瘤細胞獲得逃避免疫的能力，臨床上才看得到腫瘤出現。逃脫機制有很多種。

### 腫瘤免疫逃脫機制
| 機制 | 說明 | 臨床意義 |
|------|------|----------|
| MHC-I 下調 | 減少腫瘤抗原呈現 | CTL 無法辨識腫瘤 |
| PD-L1 過表達 | 與 T 細胞 PD-1 結合 → 抑制 T 細胞 | 免疫檢查點治療標靶 |
| Treg 細胞招募 | CD4+CD25+FoxP3+ → 抑制效應 T 細胞 | 腫瘤微環境免疫抑制 |
| MDSC 招募 | 骨髓來源抑制細胞 → 多重免疫抑制 | 與預後不良相關 |
| 免疫抑制細胞激素 | TGF-β、IL-10、VEGF | 抑制抗腫瘤免疫 |
| 免疫原性喪失 | 腫瘤抗原突變或喪失 | 免疫逃避的最終機制 |

### 獸醫腫瘤免疫治療
### 犬黑色素瘤疫苗（Oncept）
類型是人 tyrosinase DNA 疫苗。原理是利用人 tyrosinase 跟犬同源但不完全一樣，藉此打破自身抗原的免疫耐受。適應症是犬口腔黑色素瘤 WHO Stage II 到 III，局部控制好之後使用。療程是經皮注射（Canine Transdermal Device），每 2 週一次共 4 次，之後每 6 個月追加。

### 免疫檢查點抑制劑（研究中）
犬抗 PD-1 或 PD-L1 抗體在臨床試驗中。初步數據顯示對犬口腔黑色素瘤跟未分化肉瘤有潛在療效。獸醫市售產品到 2025 年還沒有。

[圖片:Cancer Immunoediting 三階段示意圖]

## 二、臨床意義 (Clinical Significance)

腫瘤免疫逃逸機制（PD-L1 表現上升、調節性 T 細胞浸潤、MHC-I 表現下降這些）會影響腫瘤預後跟免疫治療反應。犬腫瘤免疫治療已經有初步成果：Oncept 黑色素瘤 DNA 疫苗是第一個 USDA 核准的犬癌症疫苗。腫瘤浸潤淋巴球（TIL）的密度跟表型跟預後有關，高 CD8+ T 細胞浸潤通常預後比較好。

## 三、人醫借鑒 (Translational Insights)

| 人醫工具/概念 | 獸醫應用潛力 | 現況 |
|-------------|-------------|------|
| 免疫檢查點抑制劑（anti-PD-1/PD-L1/CTLA-4） | 犬腫瘤的免疫檢查點阻斷治療 | 犬 anti-PD-L1 抗體已有初步臨床數據（黑色素瘤/肉瘤） |
| CAR-T 細胞療法 | 犬 B-cell 淋巴瘤的 CD19/CD20 靶向 T 細胞治療 | 犬 CAR-T 臨床試驗進行中（多中心） |
| 新抗原疫苗（Personalized Neoantigen Vaccine） | 犬腫瘤個體化免疫治療，基於 WES+RNA-seq 鑑定新抗原 | 概念驗證階段 |
| 雙特異性抗體（BiTE） | 犬腫瘤的 T 細胞導向橋接療法 | 人醫 B-ALL 已核准，犬研究啟動中 |

## 四、臨床爭議與知識空缺 (Controversies & Knowledge Gaps)

| 爭議議題 | 現況 | Evidence Level |
|---------|------|---------------|
| Oncept 黑色素瘤疫苗的長期療效，是否真正延長 OS？ | 初始數據樂觀但後續大型回顧性研究結果不一致 | Level II |
| 犬腫瘤中 PD-L1 表達的標準化檢測方法 | 不同研究使用不同抗體和 cut-off，缺乏統一標準 | Level IV |
| 免疫抑制劑（cyclosporine/corticosteroids）長期使用與腫瘤風險 | 流行病學數據有限，因果關係尚未確立 | Level III |
| TIL（腫瘤浸潤淋巴球）密度作為犬腫瘤預後指標的標準化 | 高 CD8+ TIL 通常預後較好，但犬腫瘤 TIL 評估方法未統一 | Level III |`,
  clinical_pearl: '免疫抑制狀態下動物腫瘤發生率會增加，這就是免疫監視理論的驗證。臨床上要注意的是，長期使用免疫抑制劑（cyclosporine 或高劑量 corticosteroids 之類的）的犬貓，腫瘤（特別是淋巴瘤跟皮膚鱗狀細胞癌）的風險可能上升。化療開始前先用 corticosteroids 也可能誘導多重抗藥性蛋白（P-glycoprotein）表達，影響後續化療效果，淋巴瘤特別明顯。',
  common_mistakes: [
    '以為免疫系統完全沒辦法對抗腫瘤：免疫監視確實存在，但腫瘤會透過免疫逃脫機制克服',
    '誤以為所有腫瘤疫苗都是預防性的：Oncept 是治療性疫苗，用在已確診的黑色素瘤',
    'CHOP 化療開始前用 corticosteroids 治療淋巴瘤：可能誘導 P-glycoprotein 跑出多重抗藥性',
    '把人醫免疫檢查點抑制劑的療效直接套用到獸醫：犬的 PD-1 或 PD-L1 通路還在研究階段',
  ],
  disease_data: null,
  diagnostic_data: null,
  procedure_data: null,
  visual_placeholders: [
    { position: 'Immunoediting 段落後', type: 'timeline', description: 'Cancer Immunoediting 三階段時間軸' },
    { position: '免疫逃脫表格後', type: 'flowchart', description: '腫瘤免疫逃脫機制示意圖' },
  ],
  interactive_placeholders: [],
  drug_api_links: [],
  references: [
    { type: 'textbook', citation: 'Vail DM, Thamm DH, Liptak JM. Withrow & MacEwen\'s Small Animal Clinical Oncology, 6th ed. Elsevier, 2020. Chapter 11: Tumor Immunology and Immunotherapy.', relevance: '獸醫腫瘤免疫學基礎' },
    { type: 'journal', citation: 'Bergman PJ et al. Long-term survival of dogs with advanced malignant melanoma after DNA vaccination with xenogeneic human tyrosinase. Clin Cancer Res. 2003;9(4):1284-1290.', relevance: 'Oncept 疫苗原始研究' },
    { type: 'journal', citation: 'Maekawa N et al. A canine chimeric monoclonal antibody targeting PD-L1 and its clinical efficacy in canine oral malignant melanoma or undifferentiated sarcoma. Sci Rep. 2017;7(1):8951.', relevance: '犬 PD-L1 抗體初步研究' },
    { type: 'guideline', citation: 'VCOG，Veterinary Cooperative Oncology Group. Common Terminology Criteria for Adverse Events (VCOG-CTCAE) v2. Vet Comp Oncol. 2016;14(4):417-446.', relevance: '免疫治療相關副作用評估標準' },
  ],
  is_current: true,
  created_at: now,
};

/** 腫瘤遺傳學基礎，概念型 */
const contentCancerGenetics: NodeContent = {
  id: 'CONTENT-ONCO-L1-003',
  node_id: 'ONCO-L1-003',
  version: 1,
  summary: '腫瘤遺傳學研究的是基因突變跟腫瘤發生的關聯。伴侶動物腫瘤裡面已經找到多個有臨床意義的基因變異，像 c-KIT 突變（MCT）、BRAF V595E（TCC）、p53 突變（多種腫瘤）。品種遺傳因素在犬腫瘤中扮演很重要的角色：特定品種對特定腫瘤的高度易感性（像黃金 lymphoma 好發、黃金 HSA 好發、拳師犬 MCT）就是遺傳背景影響的證據。基因組學跟液態活檢這些技術慢慢進入獸醫腫瘤臨床實踐。',
  learning_objectives: [
    '說明驅動突變（driver mutation）與乘客突變（passenger mutation）的區別',
    '列出獸醫腫瘤學中具臨床意義的關鍵基因突變',
    '描述犬品種遺傳因素對腫瘤易感性的影響',
    '解釋基因檢測在腫瘤診斷和治療中的應用（如 c-KIT PCR、BRAF 尿液 PCR）',
    '概述液態活檢（liquid biopsy）在獸醫腫瘤科的發展',
  ],
  key_points: [
    '驅動突變（driver）：直接促進腫瘤發展，為治療標靶；乘客突變（passenger）：伴隨存在但非致癌關鍵',
    '犬腫瘤關鍵突變：c-KIT（MCT 30-50%）、BRAF V595E（TCC 85%）、p53（多種腫瘤 > 50%）',
    '品種遺傳易感性範例：Golden Retriever（淋巴瘤、HSA、MCT）、Boxer（MCT、淋巴瘤）、Scottish Terrier（TCC 18-20x）、Flat-Coated Retriever（組織球性肉瘤）',
    'Two-hit hypothesis（Knudson）：抑癌基因需雙等位基因失活才喪失功能',
    '表觀遺傳學（epigenetics）：DNA 甲基化、組蛋白修飾影響基因表達而不改變 DNA 序列',
    '液態活檢：血液中的循環腫瘤 DNA（ctDNA）和循環腫瘤細胞（CTC）用於腫瘤監測',
    '基因組學應用：全基因組定序（WGS）揭示犬腫瘤的突變特徵（mutational signature）',
  ],
  body: `# 腫瘤遺傳學基礎 (Cancer Genetics Basics)

## 一、核心概念與機轉 (Core Concept & Mechanism)



### 基因突變與腫瘤發生
### 驅動突變 vs 乘客突變
- 驅動突變（Driver mutation）：直接促進腫瘤形成和進展，為治療標靶
- 乘客突變（Passenger mutation）：隨細胞分裂累積但不影響腫瘤生長

### 突變類型
- 點突變（Point mutation）：單一核苷酸改變（如 BRAF V595E）
- 基因擴增（Gene amplification）：基因拷貝數增加
- 染色體轉位（Translocation）：基因融合產生新型蛋白
- 基因缺失（Deletion）：抑癌基因喪失

### 獸醫腫瘤關鍵基因突變
| 基因 | 突變類型 | 腫瘤 | 臨床應用 |
|------|----------|------|----------|
| c-KIT | 功能獲得性（exon 11 最常見） | 犬 MCT（30-50%） | 預後指標 + TKI 標靶（Toceranib） |
| BRAF | V595E 點突變 | 犬 TCC（~85%） | 尿液 PCR 非侵入性診斷 |
| p53 | 功能喪失性 | 多種犬腫瘤（> 50%） | 預後不良指標 |
| MDM2 | 過表達 | 軟組織肉瘤 | p53 降解增加 |
| PDGFR | 功能獲得性 | GIST | TKI 標靶 |

### 品種遺傳易感性
犬腫瘤的品種偏好是腫瘤遺傳學最直觀的表現：

### 高風險品種-腫瘤關聯
- Golden Retriever：淋巴瘤、HSA、MCT（終生腫瘤風險 > 60%）
- Boxer：MCT、淋巴瘤、腦腫瘤
- Scottish Terrier：TCC（18-20 倍風險）
- Flat-Coated Retriever：組織球性肉瘤（極高風險）
- Bernese Mountain Dog：組織球性肉瘤
- Rottweiler：骨肉瘤
- German Shepherd：HSA

GWAS（全基因組關聯分析）研究已辨識出多個與犬腫瘤易感性相關的基因座位。

### 表觀遺傳學與腫瘤
不改變 DNA 序列但影響基因表達的可遺傳修飾：
- DNA 甲基化：啟動子過度甲基化 → 抑癌基因沉默
- 組蛋白修飾：乙醯化/甲基化影響染色質結構
- 非編碼 RNA（miRNA）：調控 mRNA 穩定性和翻譯

### 分子診斷技術進展
### 液態活檢（Liquid Biopsy）
- 循環腫瘤 DNA（ctDNA）：腫瘤釋放的游離 DNA 片段
- 循環腫瘤細胞（CTC）：血液中的腫瘤細胞
- 應用：早期偵測、治療監測、微小殘留病灶追蹤
- 犬 TCC BRAF 尿液 PCR 為液態活檢的成功範例

### 次世代定序（NGS）
- 全基因組定序（WGS）、全外顯子組定序（WES）
- 突變特徵（Mutational Signature）分析
- 犬腫瘤基因組研究資源日益豐富

[圖片:犬品種-腫瘤遺傳易感性關聯圖]

## 二、臨床意義 (Clinical Significance)

特定基因突變驅動腫瘤發生，也可以當治療標靶。犬 MCT 的 c-KIT 突變可以用 TKI（Toceranib、Masitinib）治療；犬 TCC 的 BRAF V595E 突變（等同人類 V600E）可以當診斷標記。品種遺傳傾向會影響腫瘤篩檢建議：像黃金 lymphoma 跟 HSA 高風險、Flat-coated Retriever 的組織細胞肉瘤。液態切片（ctDNA）技術也慢慢應用到獸醫腫瘤的早期偵測跟監控。

## 三、人醫借鑒 (Translational Insights)

| 人醫工具/概念 | 獸醫應用潛力 | 現況 |
|-------------|-------------|------|
| 全基因組關聯分析（GWAS） | 犬腫瘤品種易感性基因座位鑑定，遺傳風險評估 | 犬 OSA/淋巴瘤/HSA GWAS 已辨識多個候選座位 |
| 液態活檢多基因面板（ctDNA panel） | 犬腫瘤的非侵入性多基因突變篩檢與監控 | 犬 TCC BRAF 尿液 PCR 已臨床可用，血液 panel 研發中 |
| 藥物基因組學（Pharmacogenomics） | 犬化療藥物代謝個體差異預測，避免毒性 | MDR1 基因型檢測已常規可用，更廣泛面板研究中 |
| 多基因風險評分（Polygenic Risk Score） | 犬特定品種的腫瘤終生風險預測 | 概念驗證階段，Golden Retriever Lifetime Study 數據分析中 |

## 四、臨床爭議與知識空缺 (Controversies & Knowledge Gaps)

| 爭議議題 | 現況 | Evidence Level |
|---------|------|---------------|
| 犬腫瘤基因檢測的臨床可行動性，檢測出突變後有多少有對應治療？ | c-KIT 和 BRAF 有直接治療意義，但多數突變尚無對應獸醫藥物 | Level III |
| Golden Retriever 的高腫瘤發生率，是否應基因組導向育種篩選？ | 倫理與實務均有爭議，遺傳多樣性損失 vs 腫瘤風險降低的權衡 | Level IV |
| 液態活檢（ctDNA）在犬腫瘤中的假陽性/假陰性率 | 技術尚在發展中，犬腫瘤特異性 ctDNA 面板的靈敏度/特異度數據不足 | Level III |
| 表觀遺傳學（DNA 甲基化）作為犬腫瘤早期診斷工具 | 人醫已有多癌種甲基化篩檢產品（Galleri），犬研究起步中 | Level IV |`,
  clinical_pearl: '在台灣的臨床實務裡，品種遺傳易感性是腫瘤篩檢建議很重要的依據。例如黃金 lymphoma 好發加 HSA 也好發，黃金飼主應該在 5 到 6 歲後定期做全面健檢（腹超篩檢 HSA、觸診淋巴結跟皮膚腫塊）。Scottish Terrier 飼主則要注意血尿這類泌尿道症狀的早期評估。基因檢測（c-KIT PCR 用在 MCT、BRAF PCR 用在 TCC）已經不是研究室專利，很多商業實驗室都有提供臨床服務。',
  common_mistakes: [
    '把品種偏好誤解成「只有這些品種會得這種腫瘤」：任何品種跟混種犬都可能發生任何腫瘤',
    'MCT 手術後沒送 c-KIT 突變檢測：突變結果會影響預後評估跟後續 TKI 治療決策',
    '不了解 BRAF V595E 尿液 PCR 的限制：敏感度約 85%（15% 假陰性），要搭配影像學',
    '忽略表觀遺傳學在腫瘤中的角色：DNA 甲基化異常是腫瘤發生的重要早期事件',
  ],
  disease_data: null,
  diagnostic_data: null,
  procedure_data: null,
  visual_placeholders: [
    { position: '品種易感性段落後', type: 'comparison_table', description: '犬品種-腫瘤易感性對照表' },
    { position: '基因突變表格後', type: 'flowchart', description: '基因突變 → 信號通路 → 治療標靶關聯圖' },
  ],
  interactive_placeholders: [],
  drug_api_links: ['Toceranib'],
  references: [
    { type: 'textbook', citation: 'Vail DM, Thamm DH, Liptak JM. Withrow & MacEwen\'s Small Animal Clinical Oncology, 6th ed. Elsevier, 2020. Chapter 2: Tumor Biology and Metastasis.', relevance: '腫瘤遺傳學基礎章節' },
    { type: 'journal', citation: 'Mochizuki H et al. BRAF mutations in canine cancers. PLoS One. 2015;10(6):e0129534.', relevance: 'BRAF 突變在犬腫瘤的發現與臨床應用' },
    { type: 'journal', citation: 'Schiffman JD, Breen M. Comparative oncology: what dogs and other species can teach us about humans with cancer. Philos Trans R Soc Lond B Biol Sci. 2015;370(1673):20140231.', relevance: '犬腫瘤基因組學比較研究' },
    { type: 'guideline', citation: 'AAHA Oncology Guidelines for Dogs and Cats. J Am Anim Hosp Assoc. 2016;52(4):181-204.', relevance: 'AAHA 腫瘤科指引，分子檢測與標靶治療概述' },
  ],
  is_current: true,
  created_at: now,
};

/** 腫瘤轉移機轉，機轉型 */
const contentMetastasis: NodeContent = {
  id: 'CONTENT-ONCO-L2-001',
  node_id: 'ONCO-L2-001',
  version: 2,
  summary: '腫瘤轉移是惡性腫瘤細胞從原發部位擴散到遠處器官，並在那邊建立新腫瘤病灶的過程，也是多數腫瘤患者死亡的主因。轉移級聯（metastatic cascade）包括局部浸潤、內滲、循環中存活、外滲跟轉移部位定殖五個步驟。上皮-間質轉化（EMT）讓腫瘤細胞獲得運動跟浸潤能力。不同腫瘤有特定的器官親和性（organ tropism），像犬骨肉瘤愛跑肺、HSA 愛跑肝肺。理解轉移機轉是化療輔助治療跟新藥開發的基礎。',
  learning_objectives: [
    '描述轉移級聯（metastatic cascade）的五個主要步驟',
    '說明上皮-間質轉化（EMT）在浸潤轉移中的角色',
    '列出影響腫瘤器官親和性的 seed-and-soil 理論',
    '區分血行性轉移與淋巴性轉移的途徑與腫瘤類型偏好',
    '解釋轉移前微環境（pre-metastatic niche）的概念',
  ],
  key_points: [
    '轉移級聯：局部浸潤 → 內滲（intravasation）→ 循環中存活 → 外滲（extravasation）→ 轉移定殖（colonization）',
    'EMT（上皮-間質轉化）：E-cadherin 下調 + N-cadherin 上調 → 細胞黏附力降低、運動能力增加',
    'Seed-and-soil 理論（Paget, 1889）：轉移不是隨機的，腫瘤細胞（seed）在特定器官微環境（soil）中才能生長',
    '基質金屬蛋白酶（MMP）：降解細胞外基質（ECM）→ 促進浸潤和血管內滲',
    '血行性轉移：肉瘤（OSA → 肺、HSA → 肝/肺）；淋巴性轉移：癌（乳腺癌 → 區域淋巴結）',
    '轉移前微環境（pre-metastatic niche）：原發腫瘤釋放因子預先改造遠端器官的微環境',
    '犬 OSA 確診時 > 90% 已有微轉移（胸腔 X 光正常），解釋了截肢不加化療預後差的原因',
    '轉移效率極低：僅 < 0.01% 的循環腫瘤細胞最終成功定殖形成轉移灶',
  ],
  body: `# 腫瘤轉移機轉 (Metastasis Mechanisms)

## 一、核心概念與機轉 (Core Concept & Mechanism)



### 轉移級聯
轉移是一個多步驟、低效率的過程。腫瘤細胞必須成功完成每一個步驟才能形成遠端轉移灶：

### 1. 局部浸潤（Local Invasion）
- EMT 啟動 → 細胞間黏附降低
- MMP 分泌 → 基底膜和 ECM 降解
- 腫瘤細胞獲得運動能力

### 2. 內滲（Intravasation）
- 腫瘤細胞穿過血管或淋巴管壁進入循環
- 腫瘤相關血管新生提供更多進入點（新生血管通透性高）

### 3. 循環中存活
- 循環腫瘤細胞（CTC）面臨剪切力、免疫攻擊
- 形成腫瘤細胞-血小板聚集體以保護自身
- 存活率極低（< 0.01% 成功轉移）

### 4. 外滲（Extravasation）
- CTC 黏附於目標器官微血管內皮
- 穿過血管壁進入目標器官
- 黏附分子（selectin、integrin）介導

### 5. 轉移定殖（Colonization）
- 最關鍵也最困難的步驟
- 需適應新微環境（seed-and-soil）
- 微轉移可長期休眠後再活化

### 上皮-間質轉化（EMT）
EMT 是上皮細胞失去極性和細胞間黏附、獲得間質細胞表型的過程：

- E-cadherin 下調 → 細胞間黏附喪失
- N-cadherin 上調 → 與間質細胞互動增強
- Vimentin 表達增加 → 細胞骨架重組
- Snail、Twist、ZEB 等轉錄因子驅動

### 器官親和性（Organ Tropism）
### 獸醫臨床常見轉移模式
| 原發腫瘤 | 主要轉移部位 | 機制 |
|----------|-------------|------|
| 犬 OSA | 肺（> 90%） | 血行性，肺毛細血管床 |
| 犬 HSA | 肝、肺、大網膜 | 血行性，血管來源 |
| 犬口腔黑色素瘤 | 肺、區域淋巴結 | 血行性 + 淋巴性 |
| 犬乳腺癌 | 肺、區域淋巴結 | 血行性 + 淋巴性 |
| 犬淋巴瘤 | 全身淋巴組織、肝脾 | 淋巴性 + 血行性 |
| 貓乳腺癌 | 肺、胸膜 | 血行性 |

### 轉移前微環境
原發腫瘤在轉移發生前即透過以下機制「預處理」遠端器官：
- 分泌外泌體（exosomes）至目標器官
- VEGF/PIGF 招募骨髓來源細胞至目標器官
- 改變目標器官的 ECM 和免疫環境
- 建立有利於轉移細胞存活的微環境

[圖片:轉移級聯五步驟示意圖]

## 二、臨床意義 (Clinical Significance)

轉移是多數腫瘤死亡的主因。了解轉移途徑（血行轉移到肺最常見、淋巴轉移到區域淋巴結、種植性轉移到體腔）對正確分期跟監控策略的制定很有幫助。前哨淋巴結（SLN）概念在獸醫腫瘤科慢慢被採用，可以幫忙判斷區域轉移狀態跟指導手術範圍。

## 三、人醫借鑒 (Translational Insights)

| 人醫工具/概念 | 獸醫應用潛力 | 現況 |
|-------------|-------------|------|
| 循環腫瘤細胞（CTC）分離與分析 | 犬轉移性腫瘤的非侵入性監測，即時追蹤轉移動態 | 犬 CTC 偵測技術已有初步研究，但標準化不足 |
| 抗轉移標靶藥物（MMP 抑制劑/integrin 拮抗劑） | 犬高轉移性腫瘤（OSA、HSA）的抗轉移輔助治療 | 人醫 MMP 抑制劑臨床試驗多失敗，犬 cilengitide 研究中 |
| 轉移前微環境（pre-metastatic niche）阻斷 | 犬 OSA/HSA 術後阻止轉移灶建立的預防策略 | 外泌體阻斷策略在動物模型中顯示潛力，臨床轉譯初期 |
| 休眠轉移細胞再活化機制研究 | 犬腫瘤長期緩解後復發的預測與預防 | 人醫已辨識多個休眠調控因子，犬研究起步中 |

## 四、臨床爭議與知識空缺 (Controversies & Knowledge Gaps)

| 爭議議題 | 現況 | Evidence Level |
|---------|------|---------------|
| 犬 OSA 微轉移的最佳化療時機，術後立即 vs 延遲化療 | 回顧性數據支持早期化療，但最佳起始時間點缺乏前瞻性證據 | Level III |
| 前哨淋巴結（SLN）mapping 在犬腫瘤分期的標準化 | 技術可行性已證實（MCT、乳腺腫瘤），但操作方法與判讀標準尚未統一 | Level III |
| 犬腫瘤轉移的器官親和性是否可透過分子標記預測 | 人醫已辨識部分器官歸巢分子，犬腫瘤轉錄組數據累積中但臨床應用遙遠 | Level IV |
| 抗血管新生治療對犬腫瘤轉移抑制的實際效果 | Toceranib（VEGFR-TKI）對部分腫瘤有效，但抗轉移效果 vs 抗原發腫瘤效果難以區分 | Level II |

## 五、近期實證更新 (Recent Evidence Updates)

| 主題 | 實證更新 | 臨床意涵 | 來源 |
|------|---------|---------|------|
| 液態生檢（cfDNA） | Flory 等 2022 臨床驗證犬多癌種早期偵測「液態生檢」血檢（NGS 偵測血漿 cfDNA），特異度高、敏感度依腫瘤類型與分期而異（淋巴瘤／HSA／OSA 較高，低負荷／早期腫瘤偵測率低）。 | 非侵入性偵測腫瘤／轉移的新工具；陰性不可排除腫瘤，須與影像／細胞學併用。 | Flory 2022 |
| 前哨淋巴結 mapping | 近紅外 ICG 螢光、CT／間接淋巴造影、對比超音波等使犬前哨淋巴結定位日益可行（Favril 等 2019）；前哨節未必是解剖上最近的區域淋巴結。 | 較「盲取最近區域淋巴結」更準確找到真正引流節、提升轉移分期準確度（呼應 §四 SLN 標準化爭議）。 | Favril 2019 |
| 抗血管新生／節拍式化療 | Toceranib（VEGFR/PDGFR/KIT-TKI）與節拍式 cyclophosphamide 具抗血管新生理論基礎，作為抗轉移輔助被探討；惟「抗轉移」與「抗原發」效益難以區分，證據仍混合。 | 勿過度期待 TKI／節拍式化療的純抗轉移效果；須個體化評估、納入整體治療策略。 | Withrow 2020 |
| 轉移前微環境／外泌體 | 原發腫瘤經外泌體與骨髓來源細胞「預處理」遠端器官的機制研究持續累積，但犬臨床轉譯仍處早期。 | 阻斷 pre-metastatic niche 為未來輔助治療方向；目前屬研究性。 | Fidler 2003 |`,
  clinical_pearl: '「微轉移」這個概念會直接影響臨床治療決策。犬骨肉瘤就是最好的例子：胸腔 X 光看起來完全正常，但確診時超過 90% 的犬已經有肺微轉移。這就是為什麼「截肢不搭配化療」中位存活只剩 4 到 5 個月。Carboplatin 或 Doxorubicin 輔助化療的目標就是要消滅這些看不見的微轉移，把中位存活拉長到 10 到 12 個月。同樣的邏輯也適用犬 HSA：脾臟切除後化療不能省。',
  common_mistakes: [
    '以為「X 光看不到轉移就沒有轉移」：微轉移在影像學看到前就已經存在',
    '忽略區域淋巴結是轉移的第一站：就算觸診正常也要 FNA（像 MCT、乳腺腫瘤）',
    '不理解化療輔助治療的目標是消滅微轉移，不是對已經看得到的轉移灶有效',
    '把所有腫瘤的轉移模式一概而論：不同腫瘤的器官親和性跟轉移途徑都不一樣',
  ],
  disease_data: null,
  diagnostic_data: null,
  procedure_data: null,
  visual_placeholders: [
    { position: '轉移級聯段落後', type: 'animated_diagram', description: '轉移級聯五步驟動態示意圖' },
    { position: '器官親和性段落後', type: 'annotated_image', description: '犬腫瘤常見轉移模式器官圖' },
  ],
  interactive_placeholders: [],
  drug_api_links: ['Carboplatin', 'Doxorubicin'],
  references: [
    { type: 'textbook', citation: 'Vail DM, Thamm DH, Liptak JM. Withrow & MacEwen\'s Small Animal Clinical Oncology, 6th ed. Elsevier, 2020. Chapter 2: Tumor Biology and Metastasis.', relevance: '腫瘤轉移機轉完整章節' },
    { type: 'journal', citation: 'Paget S. "The distribution of secondary growths in cancer of the breast." Lancet. 1889;133(3421):571-573.', relevance: 'Seed-and-soil 理論經典文獻（1889；以 biblio 解析）' },
    { type: 'journal', citation: 'Fidler IJ. "The pathogenesis of cancer metastasis: the \'seed and soil\' hypothesis revisited." Nat Rev Cancer. 2003;3(6):453-458. doi:10.1038/nrc1098', relevance: '轉移機轉現代回顧' },
    { type: 'journal', citation: 'Flory A, Kruglyak KM, Tynan JA, et al. "Clinical validation of a next-generation sequencing-based multi-cancer early detection \'liquid biopsy\' blood test in over 1,000 dogs using an independent testing set: The CANcer Detection in Dogs (CANDiD) study." PLoS One. 2022;17(4):e0266623. doi:10.1371/journal.pone.0266623', relevance: '犬 cfDNA 液態生檢臨床驗證（近期實證）' },
    { type: 'journal', citation: 'Favril S, Stock E, Hernot S, et al. "Sentinel lymph node mapping by near-infrared fluorescence imaging and contrast-enhanced ultrasound in healthy dogs." Vet Comp Oncol. 2019;17(1):89-98. doi:10.1111/vco.12449', relevance: '犬前哨淋巴結 mapping 技術（近期實證）' },
    { type: 'guideline', citation: 'Owen LN. TNM Classification of Tumours in Domestic Animals. WHO, 1st ed. 1980.', relevance: 'WHO 獸醫腫瘤 TNM 分期，轉移（M）分類標準' },
  ],
  is_current: true,
  created_at: now,
};

/** 副腫瘤症候群，機轉型 */
const contentParaneoplastic: NodeContent = {
  id: 'CONTENT-ONCO-L2-002',
  node_id: 'ONCO-L2-002',
  version: 1,
  summary: '副腫瘤症候群（Paraneoplastic Syndromes, PNS）是腫瘤分泌的荷爾蒙、細胞激素或自體抗體引起的遠端系統性效應，不是腫瘤的局部浸潤或轉移直接造成的。高血鈣症（Humoral Hypercalcemia of Malignancy, HHM）是犬最常見的 PNS，常見在淋巴瘤（T-cell）跟肛門囊腺癌。臨床上認得 PNS 很有意義：可能是腫瘤的首發線索、會影響治療決策，也能拿來當腫瘤反應的監測指標。',
  learning_objectives: [
    '列出獸醫腫瘤科最常見的副腫瘤症候群及其相關腫瘤',
    '說明惡性腫瘤高血鈣症（HHM）的病理生理機轉',
    '描述副腫瘤相關低血糖與胰島素瘤的臨床表現',
    '解釋癌症惡病質（cancer cachexia）的代謝機轉',
    '辨識 PNS 作為腫瘤診斷線索和治療反應指標的臨床應用',
  ],
  key_points: [
    'HHM 為犬最常見 PNS：PTHrP（副甲狀腺素相關蛋白）分泌 → 骨吸收增加 + 腎鈣回收增加',
    'HHM 常見相關腫瘤：淋巴瘤（T-cell，約 10-40%）、肛門囊腺癌（> 25%）、多發性骨髓瘤',
    '低血糖 PNS：胰島素瘤（β 細胞腫瘤）→ 過量胰島素分泌；大型間質腫瘤 → IGF-II 分泌',
    '癌症惡病質：TNF-α、IL-1、IL-6 介導的代謝重編程 → 肌肉流失、脂肪分解、負氮平衡',
    '紅血球增多症：腎臟腫瘤分泌 EPO → 繼發性紅血球增多',
    '肥大型骨病（Hypertrophic Osteopathy, HO）：肺部腫瘤相關的肢端骨膜增生，犬 TCC 也可見',
    'PNS 處理原則：治療原發腫瘤為根本，同時進行症狀支持治療',
    '高血鈣緊急處置：0.9% NaCl 利尿 + Furosemide + Prednisone（若非淋巴瘤）± Bisphosphonates',
  ],
  body: `# 副腫瘤症候群 (Paraneoplastic Syndromes)

## 一、核心概念與機轉 (Core Concept & Mechanism)



### 定義
副腫瘤症候群是腫瘤產生的荷爾蒙、肽類、細胞激素或自體抗體引起的遠端全身性效應。PNS 不是由腫瘤的直接侵犯、壓迫或轉移造成的。

### 惡性腫瘤高血鈣症（HHM）
### 機轉
- PTHrP（副甲狀腺素相關蛋白）：腫瘤分泌，為最主要機轉（> 80%）
  - 與 PTH 受體結合 → 骨吸收增加 + 腎小管鈣回收增加
  - 但不刺激 1,25-(OH)₂D₃ 合成（與原發性副甲狀腺機能亢進不同）
- 其他機轉：腫瘤直接骨溶蝕、腫瘤分泌活性維生素 D（淋巴瘤）

### 常見相關腫瘤
| 腫瘤 | HHM 發生率 | 特點 |
|------|-----------|------|
| T-cell 淋巴瘤 | 10-40% | 犬 HHM 最常見原因 |
| 肛門囊腺癌 | > 25% | 腫瘤可能很小但已造成高血鈣 |
| 多發性骨髓瘤 | 15-20% | 伴溶骨性病灶 |
| 胸腺瘤 | 偶見 | 貓較犬常見 |

### 臨床表現
- 多尿多渴（PU/PD）：最常見首發症狀
- 食慾減退、嗜睡、虛弱
- 嘔吐、便秘
- 心律不整（嚴重高血鈣）
- 腎損傷（鈣沉積導致腎小管損傷）

### 緊急處置
1. 0.9% NaCl 輸液利尿（促進鈣排出）：2-3 倍維持量
2. [藥物:Furosemide] 2-4 mg/kg IV q8-12h（增加鈣排出）
3. [藥物:Dexamethasone] 0.1-0.2 mg/kg IV（若確認非淋巴瘤，淋巴瘤需先取樣）
4. [藥物:Pamidronate] 1-2 mg/kg IV（bisphosphonate，抑制破骨細胞）
5. 最根本：治療原發腫瘤

### 副腫瘤低血糖
### 胰島素瘤（Insulinoma）
- β 細胞腫瘤 → 過量胰島素分泌 → 低血糖
- 好發中老年犬（中大型犬）
- Whipple's triad：低血糖症狀 + 血糖 < 60 mg/dL + 補糖後症狀緩解
- 診斷：低血糖時胰島素不適當升高（insulin:glucose ratio）

### 大型間質腫瘤（如肝臟腫瘤、平滑肌肉瘤）
- 分泌 IGF-II（非胰島素）→ 低血糖
- 腫瘤通常體積很大

### 癌症惡病質（Cancer Cachexia）
- 腫瘤分泌 TNF-α、IL-1、IL-6 → 代謝重編程
- 蛋白質分解增加 → 肌肉流失（sarcopenia）
- 脂肪分解增加 → 體重減輕
- 碳水化合物代謝：乳酸增加（Warburg effect）
- 營養支持原則：高蛋白、高脂肪、低碳水化合物飲食

### 其他 PNS
| PNS | 相關腫瘤 | 機轉 |
|-----|----------|------|
| 紅血球增多症 | 腎臟腫瘤、肝臟腫瘤 | EPO 分泌 |
| 肥大型骨病（HO） | 肺腫瘤、TCC | 神經/體液反射性骨膜增生 |
| DIC | HSA、肺癌 | 腫瘤促凝活性 |
| 重症肌無力 | 胸腺瘤 | 抗 AChR 自體抗體 |
| 發燒 | 淋巴瘤、白血病 | IL-1/IL-6 釋放 |

[圖片:副腫瘤症候群分類與臨床表現示意圖]

## 二、臨床意義 (Clinical Significance)

副腫瘤症候群可能是腫瘤的首發表現，認得出來對早期診斷有幫助。常見的有幾類：高血鈣（T-cell 淋巴瘤、肛囊腺癌，PTHrP 分泌）、低血糖（肝細胞癌、胰島素瘤、平滑肌肉瘤的 IGF-II）、紅血球增多（腎腫瘤的 EPO）、嗜酸球增多（MCT、淋巴瘤）。治療腫瘤通常可以緩解副腫瘤症狀，症狀復發常常代表腫瘤復發。

## 三、人醫借鑒 (Translational Insights)

| 人醫工具/概念 | 獸醫應用潛力 | 現況 |
|-------------|-------------|------|
| PTHrP 單株抗體（anti-PTHrP） | 犬惡性腫瘤高血鈣症的標靶治療，直接中和 PTHrP | 人醫 anti-PTHrP 臨床試驗中，犬尚無可用製劑 |
| Denosumab（anti-RANKL 抗體） | 犬 HHM 及骨轉移相關高血鈣的精準骨吸收抑制 | 人醫已核准上市，犬種間交叉反應性研究初期 |
| 液態活檢腫瘤標記監測（PTHrP/IGF-II ctDNA） | 犬 PNS 作為腫瘤復發早期偵測指標，非侵入性監控 | 概念驗證階段，犬 PTHrP 血清定量已技術可行 |
| 癌症惡病質多標靶治療（Anamorelin/Ghrelin 受體促效劑） | 犬腫瘤惡病質的食慾刺激與肌肉保留 | 人醫 Anamorelin 已核准，犬 Capromorelin（ghrelin 促效劑）已用於食慾刺激 |

## 四、臨床爭議與知識空缺 (Controversies & Knowledge Gaps)

| 爭議議題 | 現況 | Evidence Level |
|---------|------|---------------|
| 犬 HHM 以 Bisphosphonates vs Corticosteroids 作為第一線控制的最佳策略 | Bisphosphonates 效果持久但起效慢（24-48h），Steroids 快速但可能影響淋巴瘤取樣，最佳組合順序缺乏前瞻性比較 | Level III |
| 犬癌症惡病質的營養介入，高蛋白高脂低碳飲食的實際臨床獲益 | 理論基礎充分（Warburg effect），但犬 RCT 極少，營養介入對存活的影響不確定 | Level III |
| 肛門囊腺癌伴 HHM 的犬，腫瘤切除後高血鈣是否必然恢復正常 | 多數恢復，但持續高血鈣可能暗示微轉移或其他共病（如原發性副甲狀腺機能亢進） | Level III |
| 副腫瘤紅血球增多症的最佳管理，放血 vs 治療原發腫瘤 vs Hydroxyurea | 放血為緊急處置但非長期方案，Hydroxyurea 在犬的安全性數據有限 | Level IV |`,
  clinical_pearl: '高血鈣症是隱藏的腫瘤線索。鑑別「多尿多渴」的時候血鈣檢測很容易漏掉。「HARDIONS」助記法可以幫忙高血鈣鑑別：Hyperparathyroidism、Addison\'s、Renal disease、Vitamin D toxicity、Idiopathic（貓）、Osteolytic lesions、Neoplasia（HHM）、Spurious。還有一個原則：淋巴瘤確診前盡量不要用 corticosteroids 治療高血鈣，因為 steroids 會殺淋巴瘤細胞導致後續取樣困難，還可能誘導多重抗藥性。',
  common_mistakes: [
    '腫瘤類型沒確認前就用 corticosteroids 治療高血鈣：如果是淋巴瘤會影響後續診斷跟化療效果',
    '忽略肛門囊腺癌是 HHM 的原因之一：高血鈣犬一定要做直腸指檢',
    '把癌症惡病質當「吃不夠」只想加熱量：惡病質是代謝重編程，要用特殊營養策略',
    '沒把副腫瘤症候群的緩解或復發當腫瘤治療反應的指標：像高血鈣恢復正常通常代表淋巴瘤對化療有反應',
  ],
  disease_data: null,
  diagnostic_data: null,
  procedure_data: null,
  visual_placeholders: [
    { position: 'HHM 段落後', type: 'flowchart', description: '惡性腫瘤高血鈣症診斷與處置流程圖' },
    { position: '其他 PNS 表格後', type: 'mind_map', description: '副腫瘤症候群分類心智圖' },
  ],
  interactive_placeholders: [],
  drug_api_links: ['Furosemide', 'Dexamethasone', 'Pamidronate'],
  references: [
    { type: 'textbook', citation: 'Vail DM, Thamm DH, Liptak JM. Withrow & MacEwen\'s Small Animal Clinical Oncology, 6th ed. Elsevier, 2020. Chapter 5: Paraneoplastic Syndromes.', relevance: '副腫瘤症候群完整章節' },
    { type: 'journal', citation: 'Bergman PJ. Paraneoplastic syndromes. In: Vail DM et al., eds. Withrow & MacEwen\'s Small Animal Clinical Oncology, 6th ed. 2020:83-97.', relevance: '獸醫副腫瘤症候群全面回顧' },
    { type: 'guideline', citation: 'Schenck PA et al. Disorders of calcium. In: DiBartola SP, ed. Fluid, Electrolyte, and Acid-Base Disorders in Small Animal Practice, 4th ed. Elsevier, 2012.', relevance: '高血鈣症診斷與治療指引' },
  ],
  is_current: true,
  created_at: now,
};

/** 抗藥機轉，機轉型 */
const contentDrugResistance: NodeContent = {
  id: 'CONTENT-ONCO-L2-003',
  node_id: 'ONCO-L2-003',
  version: 1,
  summary: '化療抗藥性（chemoresistance）是腫瘤治療失敗的主因。抗藥性分先天性（intrinsic）跟後天獲得性（acquired）。最重要的機制是多重抗藥性（Multidrug Resistance, MDR），由 P-glycoprotein（P-gp，MDR1 基因產物）介導的藥物外排幫浦把化療藥物泵出細胞。獸醫腫瘤科最關鍵的抗藥性議題是犬淋巴瘤化療前用 corticosteroids 會誘導 P-gp 表達。理解抗藥機轉對設計更有效的化療策略跟避免不當用藥很有幫助。',
  learning_objectives: [
    '區分先天性和後天獲得性化療抗藥性',
    '說明 P-glycoprotein（MDR1）介導的多重抗藥性機轉',
    '描述 corticosteroids 誘導 P-gp 表達對犬淋巴瘤化療的影響',
    '列出非 P-gp 相關的其他抗藥機制',
    '解釋抗藥性對化療方案設計（包括救援方案）的臨床指導意義',
  ],
  key_points: [
    '先天性抗藥：腫瘤對化療一開始即無反應；後天獲得性：初始有效後逐漸失去反應',
    'P-gp（MDR1 基因）：ABC 轉運蛋白家族，將脂溶性化療藥物泵出細胞（Doxorubicin、Vincristine、Vinblastine 等）',
    '犬淋巴瘤化療前使用 prednisone → 可誘導 P-gp 過表達 → 後續 CHOP 化療反應率降低',
    '非 P-gp 抗藥機制：藥物代謝酶增加、藥物標靶突變、DNA 修復增強、凋亡途徑缺陷、腫瘤幹細胞',
    'Goldie-Coldman 假說：腫瘤體積越大、突變累積越多、抗藥性克隆出現機率越高',
    'Norton-Simon 假說：化療效果與腫瘤生長速率成正比 → 支持劑量密集方案',
    '多藥聯合化療的理論基礎：使用不同機轉藥物降低抗藥性產生的機率',
    '犬 MDR1 基因突變（ABCB1-1Δ）：Collie 等品種的 P-gp 功能喪失 → 對 Ivermectin 等敏感（但這是藥物毒性而非抗藥性問題）',
  ],
  body: `# 抗藥機轉 (Drug Resistance Mechanisms)

## 一、核心概念與機轉 (Core Concept & Mechanism)



### 分類
### 先天性抗藥性（Intrinsic Resistance）
- 腫瘤對化療從一開始即無反應
- 可能原因：P-gp 基礎表達高、標靶缺失、凋亡途徑缺陷
- 範例：犬肉瘤對大多數化療藥物的反應率低（< 20%）

### 後天獲得性抗藥性（Acquired Resistance）
- 初始對化療有反應，但治療過程中逐漸失效
- 化療選擇壓力下，抗藥性克隆被篩選出來
- 範例：犬淋巴瘤 CHOP 化療後復發

### P-glycoprotein 與多重抗藥性（MDR）
### P-gp（MDR1/ABCB1）
- ABC 轉運蛋白超家族成員
- 功能：ATP 依賴性藥物外排幫浦
- 將脂溶性化療藥物從細胞內泵出至細胞外

### P-gp 的受質藥物
| 化療藥物 | P-gp 受質 | 臨床影響 |
|----------|-----------|----------|
| Doxorubicin | 是 | MDR 後反應率降低 |
| Vincristine | 是 | MDR 後反應率降低 |
| Vinblastine | 是 | MDR 後反應率降低 |
| Cyclophosphamide | 否 | MDR 不影響 |
| Carboplatin | 否 | MDR 不影響 |
| Lomustine (CCNU) | 部分 | 可作為救援藥物 |
| L-Asparaginase | 否 | MDR 不影響 |

### Corticosteroids 與 P-gp 誘導
- Prednisone/Prednisolone 可誘導 P-gp 表達
- 犬淋巴瘤化療前使用 steroids：
  - 完全緩解率下降
  - 緩解持續時間縮短
  - 總存活時間縮短
- 重要臨床原則：確診犬淋巴瘤後盡快開始 CHOP 化療，避免先用 steroids

### 其他抗藥機制
### 藥物代謝與解毒
- 谷胱甘肽（Glutathione, GSH）系統：解毒 alkylating agents
- Glutathione S-transferase（GST）過表達

### DNA 修復增強
- 核苷酸切除修復（NER）：修復 Cisplatin/Carboplatin 造成的 DNA 交聯
- O6-Methylguanine-DNA methyltransferase（MGMT）：修復 alkylating agents 損傷

### 凋亡途徑缺陷
- p53 突變 → 無法啟動化療誘導的凋亡
- Bcl-2 過表達 → 抗凋亡

### 腫瘤幹細胞（Cancer Stem Cells）
- 小比例的自我更新細胞群
- 天然具有高 P-gp 表達和慢週期特性
- 化療可殺滅腫瘤主體但殘存幹細胞 → 復發

### 對化療策略的指導
### Goldie-Coldman 假說
- 腫瘤突變率恆定 → 體積越大 → 抗藥克隆越多
- 理論支持：早期治療、多藥聯合

### 多藥聯合化療原則
1. 各藥物需有不同的抗腫瘤機轉
2. 各藥物的毒性譜不重疊
3. 各藥物作為單一用藥均有效
4. 不同細胞週期作用位點

### 救援化療（Rescue Protocol）
- 使用非 P-gp 受質的藥物
- 犬淋巴瘤復發常用：Lomustine (CCNU)、DMAC 方案、Rabacfosadine

[圖片:P-glycoprotein 藥物外排幫浦作用機轉示意圖]

## 二、臨床意義 (Clinical Significance)

抗藥性是化療失敗的主要原因。多重抗藥性（MDR）機轉中最重要的是 P-glycoprotein（P-gp，MDR1 基因產物）的過度表現，會將化療藥物泵出細胞。這在犬淋巴瘤復發時特別重要，初次治療反應良好但復發後往往對同方案產生抗性。了解抗藥機轉有助於選擇救援方案（如 MOPP、L-CHOP）及開發新治療策略。

## 三、人醫借鑒 (Translational Insights)

| 人醫工具/概念 | 獸醫應用潛力 | 現況 |
|-------------|-------------|------|
| P-gp 抑制劑（Valspodar、Tariquidar） | 犬淋巴瘤復發時逆轉 MDR，恢復 Doxorubicin/Vincristine 敏感性 | 人醫臨床試驗毒性問題多，犬 P-gp 抑制劑研究極初期 |
| 抗體-藥物偶聯物（ADC） | 犬腫瘤標靶藥物遞送，繞過 P-gp 外排機制 | 人醫已多款核准（T-DXd 等），犬腫瘤靶點辨識研究中 |
| BH3 mimetics（Venetoclax，Bcl-2 抑制劑） | 犬淋巴瘤 Bcl-2 過表達介導抗藥的克服 | 人醫 CLL/AML 已核准，犬淋巴瘤 Bcl-2 表達數據有限 |
| 腫瘤幹細胞標靶治療（Wnt/Notch 通路抑制劑） | 犬腫瘤復發的根源，幹細胞群的消滅 | 研究階段，犬腫瘤幹細胞標記辨識（CD34/CD44/ALDH）進行中 |

## 四、臨床爭議與知識空缺 (Controversies & Knowledge Gaps)

| 爭議議題 | 現況 | Evidence Level |
|---------|------|---------------|
| Corticosteroids 預處理對犬淋巴瘤化療結果的實際影響幅度 | 回顧性研究一致顯示 CR 率跟 OS 都降低，但影響量級不一（部分研究差異不大） | Level II |
| 犬淋巴瘤復發後最佳 rescue 方案，MOPP vs LAP vs DMAC vs Rabacfosadine | 各方案單獨報告反應率 40-70%，但缺乏 head-to-head RCT 比較 | Level III |
| P-gp 表達檢測作為犬淋巴瘤化療方案選擇的臨床工具 | 技術可行（免疫組化/流式），但檢測標準化不足且結果的臨床可行動性有限 | Level III |
| 化療劑量強度（dose intensity）vs 劑量密度（dose density）對犬腫瘤抗藥性產生的影響 | Norton-Simon 和 Goldie-Coldman 假說支持不同策略，犬腫瘤前瞻性比較數據缺乏 | Level IV |`,
  clinical_pearl: '犬淋巴瘤的「不要先用 steroids」原則是臨床上最重要的抗藥性應用。常見情況：淋巴瘤犬被初診診所以「淋巴結炎」開了 prednisolone，用藥後淋巴結縮小（steroids 對淋巴瘤有直接細胞毒性），但同時誘導了 P-gp 表達。等轉診到腫瘤科開始 CHOP 時，Doxorubicin 和 Vincristine 的效果已打折。所以教育初級獸醫師「懷疑淋巴瘤時不要先用 steroids」極為重要。',
  common_mistakes: [
    '在犬淋巴瘤確診前使用 corticosteroids，可誘導 P-gp 表達降低後續化療效果',
    '復發時使用與初始方案相同的藥物，應選擇不同機轉或非 P-gp 受質的救援藥物',
    '將 Collie 的 MDR1 基因突變與腫瘤抗藥性混為一談，前者是藥物毒性問題，後者是腫瘤治療問題',
    '忽略腫瘤幹細胞在復發中的角色，即使腫瘤完全緩解，殘存幹細胞仍可導致復發',
  ],
  disease_data: null,
  diagnostic_data: null,
  procedure_data: null,
  visual_placeholders: [
    { position: 'P-gp 段落後', type: 'animated_diagram', description: 'P-glycoprotein 藥物外排機轉動態圖' },
    { position: '化療策略段落後', type: 'flowchart', description: '抗藥性復發後救援方案決策流程圖' },
  ],
  interactive_placeholders: [],
  drug_api_links: ['Doxorubicin', 'Vincristine', 'Vinblastine', 'Cyclophosphamide', 'Carboplatin', 'Lomustine'],
  references: [
    { type: 'textbook', citation: 'Vail DM, Thamm DH, Liptak JM. Withrow & MacEwen\'s Small Animal Clinical Oncology, 6th ed. Elsevier, 2020. Chapter 9: Chemotherapy.', relevance: '化療抗藥性機轉章節' },
    { type: 'journal', citation: 'Zandvliet M, Teske E. Mechanisms of drug resistance in veterinary oncology: a review with an emphasis on canine lymphoma. Vet Sci. 2015;2(3):150-184.', relevance: '獸醫腫瘤抗藥性全面回顧' },
    { type: 'journal', citation: 'Price GS et al. Multidrug resistance gene (MDR1) expression and effect on treatment response in canine lymphoma. J Vet Intern Med. 1991;5(2):96.', relevance: 'P-gp 在犬淋巴瘤抗藥性的研究' },
    { type: 'guideline', citation: 'VCOG，Veterinary Cooperative Oncology Group. Common Terminology Criteria for Adverse Events (VCOG-CTCAE) v2. Vet Comp Oncol. 2016;14(4):417-446.', relevance: '化療抗藥後毒性分級與劑量調整指引' },
  ],
  is_current: true,
  created_at: now,
};

/** 腫瘤分期檢查，診斷型 */
const contentStagingWorkup: NodeContent = {
  id: 'CONTENT-ONCO-L4-002',
  node_id: 'ONCO-L4-002',
  version: 2,
  summary: '腫瘤分期檢查（staging workup）是確診腫瘤後系統性評估腫瘤範圍跟全身狀態的過程。分期結果會直接影響治療計畫跟預後評估。基本分期包括：血液學跟生化評估（全身狀態）、區域淋巴結評估（局部擴散）、胸腔 X 光三面投射（肺轉移）、腹部超音波（腹腔器官轉移）。進階分期可以加 CT/MRI、骨髓穿刺等。不同腫瘤有自己特定的分期流程。',
  learning_objectives: [
    '列出腫瘤分期的基本檢查項目及各自目的',
    '說明胸腔 X 光三面投射較雙面投射的優勢',
    '描述區域淋巴結評估在分期中的重要性',
    '比較不同腫瘤的分期檢查需求差異',
    '解釋 CT 在腫瘤分期中的角色與適應症',
  ],
  key_points: [
    '分期目的：確定腫瘤範圍（T）、淋巴結狀態（N）、遠端轉移（M）→ 指導治療和預後',
    '基本分期四件套：CBC/BCS + 區域淋巴結 FNA + 胸腔 X 光三面投射 + 腹部超音波',
    '胸腔 X 光三面投射（右側臥、左側臥、VD）：比雙面投射多偵測約 9-15% 的肺結節',
    '區域淋巴結 FNA：即使觸診大小正常也應進行（MCT 淋巴結轉移率 25-50% 即使觸診正常）',
    'CT 較 X 光敏感：可偵測 1-2 mm 肺結節（X 光最小偵測約 6-8 mm）',
    '不同腫瘤特定分期：淋巴瘤需骨髓穿刺（Stage V）、TCC 需尿液 BRAF + 膀胱超音波、OSA 需 ALP 評估',
    '分期影響治療決策範例：犬淋巴瘤 Stage V 預後較差、MCT 有淋巴結轉移需化療、OSA 已見肺轉移可能不適合截肢+化療',
  ],
  body: `# 腫瘤分期檢查 (Tumor Staging Workup)

## 一、檢查原理與適應症 (Principles & Indications)

腫瘤分期是確診後系統性評估腫瘤範圍（T/N/M）與全身狀態的流程，結果直接決定治療計畫與預後溝通。

### 分期的意義
分期檢查系統性地評估腫瘤的範圍，其結果直接影響：
- 治療計畫：手術是否可行、是否需要輔助化療
- 預後評估：與飼主討論期望值
- 基線數據：後續追蹤比較的基準

### 基本分期檢查
### 1. 血液學與生化評估
- CBC：評估骨髓功能（化療前基線）、排除白血病
- BCS（血液生化）：肝腎功能（化療藥物代謝）、血鈣（PNS 篩檢）
- 尿液分析：腎功能完整評估
- 凝血功能：HSA 常伴 DIC

### 2. 區域淋巴結評估
- FNA 細胞學：即使觸診大小正常也應進行
- 重要性：MCT 觸診正常淋巴結的轉移率仍達 25-50%
- 標準：每個腫瘤對應的引流淋巴結均需評估

### 3. 胸腔 X 光，三面投射
- 右側臥（Right lateral）：評估左肺（朝上的肺充氣較好）
- 左側臥（Left lateral）：評估右肺
- VD（Ventrodorsal）：評估肺門和縱膈
- 三面投射 > 雙面投射：額外偵測 9-15% 的肺結節

### 4. 腹部超音波
- 肝脾評估：HSA、淋巴瘤轉移
- 腹腔淋巴結：腸繫膜、髂下淋巴結
- 腎臟、腎上腺：佔位性病灶
- 膀胱（TCC 時）：三角區腫塊

### 進階分期
### CT（電腦斷層）
- 肺轉移偵測：敏感度遠高於 X 光（1-2 mm vs 6-8 mm）
- 腫瘤範圍評估：FISS、口腔黑色素瘤手術計畫
- 對比增強：血管侵犯、淋巴結評估

### 骨髓穿刺/活檢
- 適應症：淋巴瘤 Stage V 確認、白血病、多發性骨髓瘤
- 部位：肱骨或股骨近端

### 特殊檢測
- c-KIT PCR（MCT）
- BRAF 尿液 PCR（TCC）
- 流式細胞儀免疫分型（淋巴瘤 B vs T cell）
- Ki-67 增殖指數

### 腫瘤別分期重點
| 腫瘤 | 基本四件套 | 特殊分期項目 |
|------|-----------|-------------|
| 犬淋巴瘤 | 全部 | 骨髓穿刺、流式細胞儀免疫分型 |
| MCT | 全部 | 區域淋巴結 FNA（必須）、buffy coat、c-KIT PCR |
| OSA | 全部 | 患肢 X 光、ALP、CT（可選） |
| HSA | 全部 | 心臟超音波（右心耳）、凝血、AFAST |
| 口腔黑色素瘤 | 全部 | 頭顱 CT（骨侵犯評估）、下頷淋巴結 FNA |
| 乳腺腫瘤 | 全部 | 腋窩/腹股溝淋巴結 FNA |
| TCC | 全部 | BRAF 尿液 PCR、膀胱超音波/膀胱鏡 |
| FISS | 全部 | CT（腫瘤實際範圍 >> 觸診）|

[圖片:腫瘤分期基本檢查示意圖]

## 二、判讀要點 (Interpretation)

分期檢查結果判讀要把影像跟病理整合起來。胸腔 X 光看到肺結節 3 mm 以上就要懷疑轉移，三視圖可以提高偵測率。腹部超音波看到肝脾實質不均質要做 FNA 確認是不是轉移。區域淋巴結觸診腫大就要 FNA 確認是反應性還是轉移性。CBC/生化的 ALP 升高（骨肉瘤）、高血鈣（淋巴瘤或肛囊腺癌）這些能提供預後資訊。

## 三、常見陷阱 (Pitfalls)

常見陷阱有幾個。一是只做正側位 X 光漏掉肺結節，要包含 VD 或 DV 視圖。二是把反應性淋巴結腫大判為轉移而過度分期。三是忽略骨髓評估，淋巴瘤 Stage V 要骨髓抹片或切片確認。四是對已知會轉移的腫瘤類型（像 HSA、高級別 MCT）沒做完整分期就倉促手術。五是 CT 對微小肺轉移敏感度比 X 光好，但不是每個病例都必要。

## 四、人醫借鑒 (Translational Insights)

| 人醫工具/概念 | 獸醫應用潛力 | 現況 |
|-------------|-------------|------|
| AI 輔助影像判讀（胸腔 X 光肺結節偵測） | 犬腫瘤分期 X 光自動篩檢肺轉移結節，降低漏診率 | 人醫 AI 胸腔影像已商業化，獸醫 AI 判讀平台開發中 |
| 液態活檢分期（ctDNA 腫瘤負荷量化） | 犬腫瘤的非侵入性分期輔助，補充影像學的微轉移偵測 | 犬 TCC BRAF ctDNA 已臨床可用，多癌種 panel 研發中 |
| 前哨淋巴結 mapping（ICG 螢光導引） | 犬 MCT/乳腺腫瘤的精確淋巴結分期，取代經驗性淋巴結評估 | ICG 近紅外線 SLN mapping 犬初步研究顯示可行 |

## 五、臨床爭議與知識空缺 (Controversies & Knowledge Gaps)

| 爭議議題 | 現況 | Evidence Level |
|---------|------|---------------|
| 犬腫瘤分期 CT vs 胸腔三視圖 X 光的成本效益，何時升級為 CT | CT 偵測 1-2 mm 結節優於 X 光（6-8 mm），但費用高且需麻醉，最佳適應症指引缺乏 | Level III |
| 觸診正常的區域淋巴結是否一律需要 FNA，分期過度 vs 分期不足的平衡 | MCT 觸診正常淋巴結轉移率 25-50%（需 FNA），但其他腫瘤的數據不一致 | Level II |
| 犬腫瘤分期的標準化，不同機構間分期流程差異對治療決策的影響 | 各腫瘤科中心分期流程不一（如是否常規做 CT），影響病例間預後比較的可靠性 | Level IV |

## 六、近期實證更新 (Recent Evidence)

- **前哨淋巴結（SLN）定位改寫淋巴結分期**：真正引流的前哨淋巴結**未必是觸診最近的局部淋巴結**。以 CT 淋巴造影或 ICG 近紅外螢光定位前哨節，較「就近 FNA」更準——犬皮膚肥大細胞瘤研究顯示 SLN 定位＋切片會改變疾病分期判定（Lapsley 2020）；經驗式只抽最近淋巴結可能低估分期。
- **影像分期工具的層級**：胸腔 X 光仍是第一線，但對 < 6-8 mm 結節敏感度有限；CT 對微小肺轉移最敏感（Nemanic 2006 確立 X 光 vs 螺旋 CT 的差距），高轉移率腫瘤（如 OSA）尤其受益。肺超音波近期被評估為周邊（貼近胸膜）肺結節的輔助篩檢，但僅能看到貼近胸膜的病灶、仍以 CT 為判準（Pacholec 2021）。
- **液態活檢（cfDNA/ctDNA）為新興非侵入性輔助**：次世代定序多癌種液態生檢（如 CANDiD）已於犬臨床可用、可非侵入性偵測腫瘤訊號（Flory 2022）；惟敏感度依腫瘤型別與分期差異大，**目前定位為偵測/監測的新興輔助、尚不能取代影像分期**，正規分期仍以影像為準。
- **分期標準化仍是缺口**：各腫瘤中心分期流程（是否常規 CT、是否做 SLN）不一，影響病例間預後比較；AI 輔助胸腔影像判讀正在發展（呼應 §四、§五）。

> 臨床內容與藥物劑量需獸醫師依現行仿單與指引核對；本節點為 AI 接地生成，停於 review 狀態待 DVM 簽核。`,
  clinical_pearl: '胸腔 X 光「三面投射」是腫瘤分期的基本要求，但在臨床上常被省略為兩面。記住：由於重力效應，下方的肺葉會有部分塌陷（atelectasis），上方的肺葉充氣較好。所以右側臥看左肺、左側臥看右肺、VD 看肺門。單側 lateral 可能遺漏位於塌陷肺葉中的小結節。對於 OSA 這種 > 90% 微轉移但 X 光常正常的腫瘤，CT 是更敏感的替代選擇。',
  common_mistakes: [
    '胸腔 X 光僅拍兩面投射，三面投射可額外偵測 9-15% 的肺結節',
    '觸診淋巴結大小正常就跳過 FNA：像 MCT、乳腺腫瘤這些，觸診正常照樣有不低的轉移率',
    '未在化療前建立完整的 CBC/BCS 基線，化療後無法區分是藥物副作用還是原有異常',
    '所有腫瘤使用相同的分期流程，不同腫瘤有不同的分期重點（如淋巴瘤需骨髓穿刺，OSA 需 ALP）',
    'FISS 僅靠觸診評估腫瘤範圍，CT 顯示的實際浸潤範圍遠大於觸診，手術計畫必需 CT',
  ],
  disease_data: null,
  diagnostic_data: {
    indication: [
      '任何已確診的惡性腫瘤在制定治療計畫前',
      '腫瘤手術前評估可行性和範圍',
      '化療開始前建立基線數據',
      '評估腫瘤治療後的反應和復發',
    ],
    contraindication: [
      '分期檢查本身無絕對禁忌症',
      '緊急手術情況（如脾臟 HSA 破裂急性血腹）可先穩定手術後再完成分期',
      '嚴重凝血障礙時骨髓穿刺需謹慎',
    ],
    technique: '系統性評估流程：1. CBC/BCS/凝血/尿液 → 2. 區域淋巴結 FNA（依腫瘤位置選擇引流淋巴結）→ 3. 胸腔 X 光三面投射（右側臥+左側臥+VD）→ 4. 腹部超音波全面掃描 → 5. 進階項目依腫瘤類型加選（CT/骨髓穿刺/分子診斷）',
    normal_findings: [
      { finding: 'CBC/BCS 正常', description: '所有血液學和生化指標在參考範圍內', significance: '良好的全身狀態基線，化療耐受性較好' },
      { finding: '區域淋巴結 FNA 陰性', description: '淋巴結細胞學正常（反應性或正常結構）', significance: '無局部淋巴結轉移，分期較低' },
      { finding: '胸腔 X 光正常', description: '三面投射均無可見肺結節或縱膈腫塊', significance: '無可見肺轉移（但不排除微轉移）' },
    ],
    abnormal_findings: [
      { finding: '肺結節', description: '胸腔 X 光見一個或多個軟組織密度結節', significance: '肺轉移可能性高，影響治療決策和預後。單一結節需與原發肺腫瘤鑑別' },
      { finding: '淋巴結細胞學異常', description: '轉移性腫瘤細胞或淋巴瘤細胞', significance: '分期升高，可能需要更積極的全身治療' },
      { finding: '肝脾異常超音波', description: '結節性病灶、瀰漫性回音改變', significance: '需 FNA 確認是否為轉移' },
      { finding: '高血鈣', description: 'Total Ca > 12 mg/dL 或 iCa 升高', significance: '副腫瘤症候群，需排除淋巴瘤/肛門囊腺癌' },
    ],
    interpretation_guide: '判讀流程：把所有結果綜合起來判定 TNM 分期，異常結果接著確認（肺結節做 CT、肝脾結節做 FNA），分期結果結合腫瘤類型決定治療策略，最後完整跟飼主溝通分期結果跟預後。',
    pitfalls: [
      '胸腔 X 光無法偵測 < 6-8 mm 的肺結節，對於高轉移率腫瘤（OSA、HSA）應考慮 CT',
      '超音波對操作者依賴性高，小型結節可能被遺漏',
      '淋巴結反應性增生可能被誤判為轉移，細胞學判讀需有經驗',
      '分期正常不代表沒有微轉移，尤其是 OSA（> 90% 微轉移）和 HSA',
    ],
    sensitivity_specificity: '胸腔 X 光三面投射對 > 8 mm 肺結節敏感度約 90%，對 < 5 mm 結節敏感度 < 50%。CT 對 1-3 mm 結節敏感度 > 90%。腹部超音波對 > 1 cm 肝脾病灶敏感度約 80-90%。淋巴結 FNA 對轉移的敏感度約 70-90%，取決於腫瘤類型。',
    cost_benefit: '基本分期四件套（CBC/BCS + 淋巴結 FNA + 胸腔 X 光 + 腹超）為最具成本效益的組合。CT 在需要精確手術計畫（FISS、口腔腫瘤）或高轉移風險評估（OSA）時具額外價值。完整分期可避免不必要的手術或過度治療。',
  },
  procedure_data: null,
  visual_placeholders: [
    { position: '基本分期段落後', type: 'flowchart', description: '腫瘤分期標準流程圖' },
    { position: '腫瘤別分期表後', type: 'comparison_table', description: '各腫瘤分期重點比較表' },
  ],
  interactive_placeholders: [
    { position: '全文後', type: 'interactive_checklist', description: '依腫瘤類型自動產生分期檢查清單' },
  ],
  drug_api_links: [],
  references: [
    { type: 'textbook', citation: 'Vail DM, Thamm DH, Liptak JM. Withrow & MacEwen\'s Small Animal Clinical Oncology, 6th ed. Elsevier, 2020. Chapter 4: Staging and Diagnosis.', relevance: '腫瘤分期完整章節' },
    { type: 'journal', citation: 'Nemanic S, London CA, Wisner ER. "Comparison of Thoracic Radiographs and Single Breath-Hold Helical CT for Detection of Pulmonary Nodules in Dogs with Metastatic Neoplasia." J Vet Intern Med. 2006;20(3):508-515. doi:10.1111/j.1939-1676.2006.tb02889.x', relevance: '胸腔 X 光 vs 螺旋 CT 偵測肺結節（CT 較敏感；修正 v1 誤標期刊/標題）' },
    { type: 'guideline', citation: 'Thamm DH, Vail DM. Staging and initial treatment decisions. In: Withrow & MacEwen\'s Small Animal Clinical Oncology, 6th ed. Elsevier, 2020.', relevance: '分期與治療決策章節' },
    { type: 'journal', citation: 'Lapsley J, Hayes GM, Janvier V, Newman AW. "Influence of locoregional lymph node aspiration cytology vs sentinel lymph node mapping and biopsy on disease stage assignment in dogs with integumentary mast cell tumors." Vet Surg. 2020;50(1):133-141. doi:10.1111/vsu.13537', relevance: '前哨淋巴結定位改變 MCT 分期（最近節未必前哨）' },
    { type: 'journal', citation: 'Pacholec C, Lisciandro GR, Masseau I, Donnelly L. "Lung ultrasound nodule sign for detection of pulmonary nodule lesions in dogs: Comparison to thoracic radiography using computed tomography as the criterion standard." Vet J. 2021;275:105727. doi:10.1016/j.tvjl.2021.105727', relevance: '肺超音波偵測肺結節（以 CT 為判準）' },
    { type: 'journal', citation: 'Flory A, Kruglyak KM, Tynan JA, McLennan LM. "Clinical validation of a next-generation sequencing-based multi-cancer early detection liquid biopsy blood test in over 1,000 dogs using an independent testing set: The CANcer Detection in Dogs (CANDiD) study." PLoS One. 2022;17(4):e0266623. doi:10.1371/journal.pone.0266623', relevance: '犬 cfDNA 液態生檢多癌種偵測（非侵入性輔助）' },
  ],
  is_current: true,
  created_at: now,
};

/** TNM 分期系統，診斷型 */
const contentTNM: NodeContent = {
  id: 'CONTENT-ONCO-L4-003',
  node_id: 'ONCO-L4-003',
  version: 2,
  summary: 'TNM 分期系統是國際通用的腫瘤分期標準，獸醫版原始文獻為 Owen 1980 WHO《TNM Classification of Tumours in Domestic Animals》（迄今無正式第二版）。T（Tumor）描述原發腫瘤大小/浸潤、N（Node）描述區域淋巴結、M（Metastasis）描述遠端轉移。各腫瘤 T/N 定義依部位而異（口腔腫瘤以直徑、膀胱 TCC 以臨床肉眼描述、乳腺以直徑），且部分腫瘤另用專屬系統（犬淋巴瘤 WHO 臨床 Stage I-V、犬骨肉瘤 Enneking/MSTS 外科分期）。分期須與組織學分級（Grade）分開判讀，兩者為互補而各自獨立的預後維度。',
  learning_objectives: [
    '解釋 TNM 分期系統的基本結構：T、N、M 各自的定義',
    '比較不同犬貓腫瘤的 TNM 分級標準差異',
    '描述 clinical stage（cTNM）與 pathological stage（pTNM）的區別',
    '說明 TNM 分期如何轉換為 WHO 臨床分期（Stage I-IV/V）',
    '辨識 TNM 各項目的評估方法和工具',
  ],
  key_points: [
    'T（Tumor）：原發腫瘤大小/範圍。T0（無腫瘤）→ T1-T4（由小到大/由淺到深）',
    'N（Node）：區域淋巴結（口腔/皮膚方案）。N0（無轉移）→ N1（可移動同側）→ N2（可移動對側/雙側）→ N3（固定的區域淋巴結）；遠端淋巴結轉移歸 M 而非 N3',
    'M（Metastasis）：遠端轉移。M0（無）→ M1（有遠端轉移）',
    'N 定義依腫瘤而異：MCT 臨床分期把淋巴結併入整體 Stage、犬淋巴瘤用解剖 Stage I-V，非皆用 N0-N3',
    'cTNM：臨床分期（術前影像和檢查）；pTNM：病理分期（術後組織病理確認）',
    '各腫瘤 T 定義不同：口腔腫瘤（直徑 < 2/2-4/ > 4 cm）、MCT（數量+位置）、TCC（臨床肉眼描述，非組織層次深度）、OSA（Enneking 骨皮質內外）、乳腺（直徑）',
    '口腔腫瘤 Stage 分組：I=T1N0M0、II=T2N0M0、III=T1N1M0/T2N1M0/T3N0M0、IV=任何 M1（淋巴結陽性僅 T1/T2 才是 Stage III）',
    'Grade（組織學惡性度）≠ Stage（解剖範圍）：兩者獨立、須分別評估',
  ],
  body: `# TNM 分期系統 (TNM Staging System)

## 一、檢查原理與適應症 (Principles & Indications)



### 基本結構
TNM 是由世界衛生組織（WHO）建立的腫瘤分期框架，適用於所有實體腫瘤：

### T，原發腫瘤（Primary Tumor）
- TX：無法評估原發腫瘤
- T0：無原發腫瘤證據
- Tis：原位癌（carcinoma in situ）
- T1 → T4：腫瘤大小或浸潤程度遞增

### N，區域淋巴結（Regional Lymph Nodes）
> ⚠️ N 分級**非單一通用定義，依腫瘤部位而異**。下列為 WHO（Owen 1980）口腔／皮膚腫瘤方案：
- NX：無法評估區域淋巴結
- N0：無區域淋巴結轉移證據
- N1：可移動的**同側**區域淋巴結（N1a 無腫瘤細胞／N1b 有腫瘤細胞）
- N2：可移動的**對側或雙側**區域淋巴結（N2a／N2b）
- N3：**固定的**區域淋巴結

注意：**N3 指「固定」而非「遠端」**——遠端淋巴結轉移歸類於 M（遠端轉移），不算 N3。其他腫瘤的 N 定義不同：WHO 犬 MCT 臨床分期不使用獨立 N0-N3、而將淋巴結狀態併入整體 Stage；犬淋巴瘤採解剖 Stage I-V；部分系統僅分 N0／N1。

### M，遠端轉移（Distant Metastasis）
- M0：無遠端轉移
- M1：有遠端轉移（含遠端淋巴結轉移）

### Clinical vs Pathological Stage
| 類型 | 代碼 | 資料來源 | 時機 |
|------|------|----------|------|
| 臨床分期 | cTNM | 理學檢查、影像、FNA | 治療前 |
| 病理分期 | pTNM | 組織病理、手術標本 | 術後 |

pTNM 通常更精確，因為可直接評估腫瘤浸潤深度和淋巴結微轉移。

### 主要犬貓腫瘤 TNM 定義
### 犬口腔腫瘤（黑色素瘤、SCC、纖維肉瘤）
| T | 定義 |
|---|------|
| T1 | 最大直徑 < 2 cm |
| T2 | 最大直徑 2-4 cm |
| T3 | 最大直徑 > 4 cm |

N0＝無淋巴結轉移、N1＝細胞學/組織學證實淋巴結轉移、N2＝固著淋巴結。

→ **Stage I**: T1N0M0 | **Stage II**: T2N0M0 | **Stage III**: T1N1M0 或 T2N1M0 或 T3N0M0 | **Stage IV**: 任何 M1

> ⚠️ 淋巴結陽性只有在 **T1 或 T2** 時才是 Stage III（T1N1M0／T2N1M0）；**並非「任何 T 只要 N1 就是 Stage III」**——T3N1M0 不在 WHO Stage III 明列組合內。（Bergman 黑色素瘤共識重製 WHO 口腔腫瘤分期表）

### 犬 MCT（修訂版）
| Stage | 定義 |
|-------|------|
| 0 | 不完全切除單一腫塊，N0M0 |
| I | 單一皮膚腫塊，N0M0 |
| II | 單一皮膚腫塊，N1M0 |
| III | 多發性皮膚腫塊或大型浸潤性，±N1M0 |
| IV | 遠端轉移（任何 T/N，M1） |

### 犬膀胱 TCC/UC（WHO Owen 1980，臨床肉眼描述，非組織層次深度）
| T | 定義 |
|---|------|
| Tis | 原位癌 |
| T0 | 無原發腫瘤證據 |
| T1 | 表淺乳頭狀腫瘤（superficial papillary tumor） |
| T2 | 侵犯膀胱壁並伴硬結（invading bladder wall with induration；已涵蓋肌層浸潤） |
| T3 | 侵犯鄰近器官（前列腺、子宮、陰道、骨盆腔） |

> ⚠️ 犬 WHO 系統**不像人類 AJCC 那樣區分黏膜／黏膜下／肌層**；勿把 T1 當「黏膜浸潤」、T2 當「肌層浸潤」（此為人醫 AJCC 定義）。臨床上多數犬 TCC 診斷時已達 T2（約 78%）（Knapp 2014）。

### 犬附肢 OSA（Enneking/MSTS 外科分期，非 WHO TNM）
> 骨肉瘤沿用 **Enneking（1980）肌肉骨骼腫瘤外科分期**（G 分級＋T 腔室＋M 轉移），非 Owen WHO TNM：
| Stage | 定義 |
|-------|------|
| I | 低度惡性（G1），無轉移（IA 腔室內 T1／IB 腔室外 T2） |
| IIA | 高度惡性（G2），腔室內（intracompartmental，T1）N0M0 |
| IIB | 高度惡性（G2），腔室外（extracompartmental，T2）N0M0 |
| III | 任何分級，有轉移（區域或遠端，M1） |

### 犬淋巴瘤（WHO Clinical Stage）
| Stage | 定義 |
|-------|------|
| I | 單一淋巴結（或結外部位） |
| II | 同側橫膈膜多個淋巴結 |
| III | 全身性淋巴結侵犯 |
| IV | 肝脾侵犯 |
| V | 骨髓/血液/非淋巴器官侵犯 |

加上 substage：a（無全身症狀）/ b（有全身症狀）

### 犬貓乳腺腫瘤
| T | 犬 | 貓 |
|---|----|----|
| T1 | < 3 cm | < 2 cm |
| T2 | 3-5 cm | 2-3 cm |
| T3 | > 5 cm | > 3 cm |

[圖片:TNM 分期系統架構圖]

## 二、判讀要點 (Interpretation)

判讀要點：(1) T 分期須精確測量腫瘤最大直徑，並評估是否侵犯周圍組織或固定不可動；(2) N 分期需區分觸診大小與細胞學/組織學確認的轉移，反應性腫大不等於轉移；(3) M 分期需系統性影像篩檢，已知好發轉移部位須重點評估。不同腫瘤類型有各自的 TNM 分期標準（如口腔黑色素瘤以 2 cm、4 cm 劃分 T1-T3）。

## 三、常見陷阱 (Pitfalls)

常見陷阱：(1) 僅依據觸診判定淋巴結轉移而未做 FNA 或組織學確認，導致分期錯誤；(2) 混淆不同腫瘤類型的 TNM 標準，犬口腔黑色素瘤與犬 MCT 的 T 分期切點不同；(3) 低估腫瘤實際範圍，表面可見腫瘤遠小於深層浸潤範圍（尤其 FISS、口腔腫瘤）；(4) 未在治療前完成分期而事後補做，影響預後判斷的基準。

## 四、人醫借鑒 (Translational Insights)

| 人醫工具/概念 | 獸醫應用潛力 | 現況 |
|-------------|-------------|------|
| AJCC 第 8 版分子分期（整合基因組數據） | 犬腫瘤 TNM 分期加入分子標記，如 c-KIT 突變狀態整合至 MCT 分期 | 人醫已將分子標記納入多癌種分期，犬標準化提案初步討論中 |
| 免疫評分（Immunoscore）納入分期系統 | 犬腫瘤微環境免疫細胞浸潤程度作為預後分層工具 | 人醫大腸癌 Immunoscore 已被認可，犬研究僅限學術報告 |
| 液態活檢分期（ctDNA 作為 M 分期的分子替代指標） | 犬腫瘤 M0 vs M1 的精確化，偵測影像學不可見的分子性轉移 | 人醫 ctDNA-MRD 已商業化，犬技術可行性研究中 |

## 五、臨床爭議與知識空缺 (Controversies & Knowledge Gaps)

| 爭議議題 | 現況 | Evidence Level |
|---------|------|---------------|
| 獸醫 TNM 分期系統是否需要從 1980 年 WHO 版本全面更新 | 現行 Owen 1980 版已過時，部分腫瘤（MCT、淋巴瘤）已有修訂版但非全面統一 | Level IV |
| cTNM 與 pTNM 不一致時的臨床決策，升期後是否改變治療計畫 | 術後發現淋巴結微轉移（cN0→pN1）的臨床意義因腫瘤類型而異，指引不一致 | Level III |
| 犬 MCT WHO 臨床分期的預後排序矛盾 | WHO MCT 臨床分期把「多發性皮膚腫塊（Stage III）」排在「單發+淋巴結轉移（Stage II）」之後，但多發性但無淋巴結轉移者預後常反而優於單發但淋巴結陽性者；且該分期不納入組織學 grade 與確實的淋巴結狀態 | Level II |
| 犬 MCT 的最佳分期系統，Patnaik 三級 vs Kiupel 二級 vs 修訂版臨床分期 | Kiupel 二級制預後區分力較佳；2024 年 Marconato 等提出納入 grade 的 UBo pTNM 修訂系統，但整合方式尚未標準化 | Level II |
| 犬腫瘤分期是否應納入分子生物標記（如 Ki-67、c-KIT 突變）作為獨立變項 | 分子標記提供額外預後資訊，但其是否應正式整合至分期系統仍有爭議 | Level III |

## 六、近期更新 (Recent Updates)

- **WHO 獸醫 TNM（Owen 1980）仍無正式第二版**：現行臨床分期以 Owen 1980 為骨幹、由 Withrow & MacEwen's Small Animal Clinical Oncology（第 6 版，2019）之重製版與各腫瘤專屬系統補充；被視為部分過時（尤其 MCT 分期）。
- **犬 MCT 分期修訂（UBo pTNM）**：Marconato 2024（VCO）提出把組織學 grade（Kiupel 二級）與生物變數納入的 UBo pTNM 系統，回應 WHO MCT 臨床分期「不含 grade／淋巴結狀態、Stage II/III 排序矛盾」的長期批評。
- **淋巴結分期走向細胞學/流式細胞**：Fournier 2018（Vet Clin Pathol）量化淋巴結 FNA 對各腫瘤轉移的敏感度差異；流式細胞（Iamone 2024）與 HN0/HN1-3（淋巴結轉移的組織學分級，MCT）提升淋巴結微轉移偵測。
- **胸腔分期以 CT 為準**：多篇犬研究（Nemanic 2006；Eberle 2011；Armbrust 2012）證實胸腔 CT 對肺轉移敏感度顯著高於三視角 X 光（X 光僅見約 9% 的 CT 可見結節），資源允許時 CT 漸成高風險腫瘤 M 分期標準。
- **犬淋巴瘤 substage 判定標準化**：Barber 2014（VCO）調查獸醫腫瘤科醫師對 substage a/b（有無全身症狀）的判定準則，減少主觀差異。`,
  clinical_pearl: 'TNM 分期的臨床價值不僅在於分類，更在於它標準化了不同病例之間的比較。在與飼主溝通預後時，引用的存活數據都是基於特定 TNM 分期的，例如犬口腔黑色素瘤單純手術後的中位存活：Stage I（< 2 cm）約 17-18 個月、Stage II（2-4 cm）約 5-6 個月、Stage III（> 4 cm 或淋巴結轉移）約 3 個月（MacEwen 等；Withrow & MacEwen 教科書）；現代 curative-intent 手術，低分期（I-II）中位存活可達 2 年以上（Boston 2014）。所以準確的分期是精確預後溝通的基礎。另外要記住 cTNM 和 pTNM 可能不同，術後病理可能發現術前未偵測到的淋巴結微轉移而升期。',
  common_mistakes: [
    '不同腫瘤使用相同的 T 定義，每種腫瘤的 T 分級標準不同',
    '忽略淋巴結評估（N）而僅關注原發腫瘤（T），N 是許多腫瘤最重要的預後因子之一',
    '僅依賴臨床分期（cTNM）而未在術後確認病理分期（pTNM），病理分期更精確',
    '將犬淋巴瘤的 WHO Clinical Stage 與其他實體腫瘤的 TNM 混為一談，淋巴瘤有其特殊分期系統',
    '混淆腫瘤分級（Grade，組織學）和分期（Stage，範圍），兩者為獨立的預後指標',
  ],
  disease_data: null,
  diagnostic_data: {
    indication: [
      '所有已確診的惡性腫瘤在制定治療計畫前',
      '多學科腫瘤討論會（tumor board）的病例呈現',
      '化療或手術後評估治療反應',
      '臨床研究中標準化病例分類',
    ],
    contraindication: [
      'TNM 分期系統本身無禁忌症',
      '良性腫瘤不需要 TNM 分期',
      '部分腫瘤（如犬淋巴瘤）使用自身的分期系統而非標準 TNM',
    ],
    technique: 'TNM 評估流程：T，理學檢查測量腫瘤最大直徑 + 影像學評估浸潤深度（CT/超音波）→ N，區域淋巴結觸診 + FNA 細胞學（± 術後組織病理確認）→ M，胸腔 X 光三面投射 + 腹部超音波（± CT）→ 綜合 TNM 判定 Clinical Stage',
    normal_findings: [
      { finding: 'T1N0M0', description: '小型原發腫瘤，無淋巴結轉移，無遠端轉移', significance: '最低分期（Stage I），預後最佳，手術可能治癒' },
      { finding: 'N0（FNA 確認）', description: '引流淋巴結細胞學正常', significance: '無局部擴散，分期較低' },
    ],
    abnormal_findings: [
      { finding: 'N1（淋巴結轉移）', description: '區域淋巴結 FNA 或組織病理確認腫瘤轉移', significance: '分期升高，多數腫瘤預後就明顯變差，要考慮全身治療' },
      { finding: 'M1（遠端轉移）', description: '胸腔 X 光見肺結節或腹超見肝脾轉移', significance: '最高分期，預後差，治療目標通常轉為緩和' },
      { finding: 'T3-T4（大型/深層浸潤）', description: '腫瘤直徑大或浸潤深層結構', significance: '手術切緣困難，可能需要更積極的手術或輔助治療' },
    ],
    interpretation_guide: '1. 根據腫瘤類型查詢對應的 TNM 定義標準。2. 分別評估 T、N、M 各項。3. 綜合判定 WHO Clinical Stage（Stage I-IV/V）。4. 結合腫瘤分級（Grade）進行完整的預後評估。5. 術後更新為 pTNM（若與 cTNM 不同需記錄）。',
    pitfalls: [
      '不同腫瘤的 T 標準不同，必須查詢對應腫瘤的 TNM 定義',
      '淋巴結觸診大小不等於轉移狀態，反應性增生可使淋巴結增大，微轉移可在正常大小淋巴結中',
      '犬淋巴瘤使用 WHO Clinical Stage 而非標準 TNM 框架',
      'X 光可見的肺結節不一定是轉移，肺部肉芽腫、原發肺腫瘤需鑑別',
    ],
    sensitivity_specificity: 'TNM 分期精確度取決於檢查工具。T 評估：理學檢查+影像（CT > 超音波 > 觸診）。N 評估：淋巴結 FNA 細胞學敏感度「高度依腫瘤類型」，非一律 70-90%——癌/圓細胞瘤約 100%、肥大細胞瘤約 75%、肉瘤約 67%、黑色素瘤約 63%（Fournier 2018，特異度 83-96%，約 25% 抽吸不具診斷性），組織病理為金標準。M 評估：胸腔 X 光的「7-9 mm」是「可偵測結節最小尺寸門檻」而非臨床敏感度，其對肺轉移真實敏感度變異大且常被高估（僅約 9% 的 CT 可見結節能在 X 光看到，Nemanic 2006；犬骨肉瘤 X 光 5% vs CT 28%，Eberle 2011；Armbrust 2012 X 光敏感度 71-95%）；胸腔 CT 可偵測約 1 mm 結節、顯著優於 X 光但仍非 100%。',
    cost_benefit: 'TNM 分期系統本身無額外成本，它是一個分類框架。成本取決於進行哪些分期檢查（見 ONCO-L4-002 腫瘤分期檢查）。精確分期的價值在於避免對已有遠端轉移的病例進行不必要的根治性手術，以及確保局限性腫瘤獲得適當的積極治療。',
  },
  procedure_data: null,
  visual_placeholders: [
    { position: 'TNM 基本結構後', type: 'flowchart', description: 'TNM 評估流程圖' },
    { position: '各腫瘤 TNM 表後', type: 'comparison_table', description: '不同腫瘤 TNM 定義速查比較表' },
  ],
  interactive_placeholders: [
    { position: '全文後', type: 'interactive_staging', description: '輸入 T/N/M 值自動判定 Stage 的互動工具' },
  ],
  drug_api_links: [],
  references: [
    { type: 'guideline', citation: 'Owen LN (ed.). TNM Classification of Tumours in Domestic Animals. 1st ed. Geneva: World Health Organization, 1980.', relevance: 'WHO 獸醫 TNM 分期原始/基礎文獻（現行權威分期來源，迄今無正式第二版；已移除 v1 疑捏造之「Nguyen 2015 staging, Vet Comp Oncol 13(4):369-383」——Crossref 查無此文，真實 Nguyen 2015 為 VCOG RECIST 反應評估標準 13(3):176-183，非分期）' },
    { type: 'textbook', citation: 'Vail DM, Thamm DH, Liptak JM (eds). Withrow & MacEwen\'s Small Animal Clinical Oncology, 6th ed. St. Louis: Elsevier, 2019.', relevance: '各腫瘤 TNM/分期定義之現行臨床標準重製版' },
    { type: 'journal', citation: 'MacEwen EG, Hayes AA, Harvey HJ, et al. Prognostic factors for feline mammary tumors. J Am Vet Med Assoc. 1984;185(2):201-204. doi:10.2460/javma.1984.185.02.201', relevance: '貓乳腺腫瘤 T 分期切點（2/3 cm）之預後驗證' },
    { type: 'journal', citation: 'Armbrust LJ, Biller DS, Bamford A, et al. Comparison of three-view thoracic radiography and computed tomography for detection of pulmonary nodules in dogs with neoplasia. J Am Vet Med Assoc. 2012;240(9):1088-1094. doi:10.2460/javma.240.9.1088', relevance: 'M 分期：胸腔 X 光敏感度變異大、CT 顯著較優' },
    { type: 'journal', citation: 'Fournier Q, Cazzini P, Bavcar S, et al. Investigation of the utility of lymph node fine-needle aspiration cytology for the staging of malignant solid tumors in dogs. Vet Clin Pathol. 2018;47(3):489-500. doi:10.1111/vcp.12636', relevance: 'N 分期：淋巴結 FNA 敏感度依腫瘤類型差異' },
    { type: 'journal', citation: 'Marconato L, Faroni E, Del Magno S, et al. Incorporation of biologic variables into the staging for canine cutaneous and subcutaneous mast cell tumours: proposal of the UBo pTNM system. Vet Comp Oncol. 2024;22(4):513-522. doi:10.1111/vco.13000', relevance: 'MCT 分期修訂提案（納入 grade），回應 WHO MCT 分期排序矛盾' },
    { type: 'journal', citation: 'Barber LG, Weishaar KM. Criteria for designation of clinical substage in canine lymphoma: a survey of veterinary oncologists. Vet Comp Oncol. 2014;14(S1):32-39. doi:10.1111/vco.12086', relevance: '犬淋巴瘤 substage a/b 判定標準化' },
    { type: 'journal', citation: 'Kiupel M, Webster JD, Bailey KL, et al. Proposal of a 2-tier histologic grading system for canine cutaneous mast cell tumors to more accurately predict biological behavior. Vet Pathol. 2011;48(1):147-155. doi:10.1177/0300985810386469', relevance: 'MCT 組織學分級（Grade≠Stage）' },
  ],
  is_current: true,
  created_at: now,
};

/** 化學治療基礎，治療型 */
const contentChemotherapy: NodeContent = {
  id: 'CONTENT-ONCO-L5-001',
  node_id: 'ONCO-L5-001',
  version: 2,
  summary: '化學治療是用細胞毒性藥物殺滅或抑制腫瘤細胞增殖的全身性治療。在獸醫腫瘤科，化療的目標是延長有品質的生存時間，不是不惜代價追求治癒。犬貓化療的副作用發生率跟嚴重度比人醫低很多（因為用比較低的劑量強度）。VCOG-CTCAE v2 是標準化的化療毒性評估標準。主要化療藥物依作用機轉分為 alkylating agents、antimetabolites、anthracyclines、vinca alkaloids、platinum compounds 等。',
  learning_objectives: [
    '列出獸醫腫瘤科常用化療藥物的分類和作用機轉',
    '描述 VCOG-CTCAE v2 化療毒性分級系統',
    '說明犬貓化療劑量計算的基本原則（BSA vs 體重）',
    '解釋化療給藥前的安全確認流程',
    '辨識化療藥物外滲（extravasation）的處置方式',
  ],
  key_points: [
    '獸醫化療目標：延長有品質的生命，而非不惜代價治癒。約 80% 犬貓無嚴重副作用',
    '劑量計算：依體表面積（BSA，mg/m²）；< 10 kg 犬和貓需降低約 20% 避免過量',
    '給藥前確認：CBC（嗜中性球 > 2,000-3,000/μL）、全身狀態、體重',
    'VCOG-CTCAE v2 毒性分級：Grade 1（輕微）→ Grade 5（死亡），嗜中性球減少和 GI 毒性最常見',
    '嗜中性球最低點（nadir）：多數藥物在給藥後 5-10 天；Carboplatin 在犬約第 14 天',
    '化療藥物安全處置：手套 + 防護衣、封閉系統給藥、生物安全櫃配藥、排泄物處理 48-72 小時',
    'Doxorubicin 累積性心臟毒性：犬總劑量 > 180-240 mg/m² → 心肌病風險增加',
    'Cyclophosphamide 出血性膀胱炎：同時給予 furosemide 促排尿或充分水化預防',
  ],
  body: `# 化學治療基礎 (Chemotherapy Basics)

## 一、治療原理 (Treatment Principles)



### 化療原則
### 治療目標
- 獸醫化療：延長有品質的生命（quality of life, QoL）
- 人醫化療：常追求治癒（更高劑量強度 → 更多副作用）
- 約 80% 的犬貓在化療期間無嚴重副作用

### 劑量計算
- 標準：體表面積（BSA），單位 mg/m²
- BSA 公式：BSA (m²) = (體重 kg)^0.667 × 10.1 / 10,000
- 注意：< 10 kg 犬和貓的 BSA 相對體重比較高 → 需降低劑量約 20%

### 化療給藥安全確認
給藥前 checklist：
1. 確認 CBC 結果：嗜中性球 > 2,000-3,000/μL
2. 確認全身狀態：ECOG 評分
3. 確認體重：重新計算劑量
4. 確認前次毒性：有無需要降低劑量的情況
5. 確認藥物、劑量、給藥途徑正確

## 二、藥物/方法比較 (Comparison)

### 常用化療藥物分類
| 藥物 | 分類 | 機轉 | 主要適應症 | 主要毒性 |
|------|------|------|-----------|----------|
| [藥物:Cyclophosphamide] | Alkylating agent | DNA 交聯 | 淋巴瘤（CHOP）、HSA | 骨髓抑制、出血性膀胱炎 |
| [藥物:Chlorambucil] | Alkylating agent | DNA 交聯 | 低度淋巴瘤、CLL | 輕度骨髓抑制 |
| [藥物:Lomustine] (CCNU) | Alkylating (nitrosourea) | DNA 交聯 | 淋巴瘤救援、MCT、腦瘤 | 肝毒性（犬）、骨髓抑制（延遲型） |
| [藥物:Doxorubicin] | Anthracycline | Topoisomerase II 抑制 | 淋巴瘤（CHOP）、OSA、HSA | 骨髓抑制、心臟毒性（累積性）、腎毒性（貓） |
| [藥物:Mitoxantrone] | Anthracenedione | Topoisomerase II 抑制 | TCC、癌 | 骨髓抑制 |
| [藥物:Vincristine] | Vinca alkaloid | 微管抑制（M 期） | 淋巴瘤（CHOP）、TVT | 周邊神經毒性、便秘、外滲壞死 |
| [藥物:Vinblastine] | Vinca alkaloid | 微管抑制（M 期） | MCT（VBL-Pred） | 骨髓抑制 |
| [藥物:Carboplatin] | Platinum compound | DNA 交聯 | OSA、黑色素瘤、癌 | 骨髓抑制（犬 nadir 第 14 天） |
| [藥物:Toceranib] | TKI（標靶） | VEGFR/PDGFR/c-KIT | MCT、TCC | GI（腹瀉/嘔吐）、蛋白尿 |
| [藥物:L-Asparaginase] | 酵素 | 消耗 Asparagine | 淋巴瘤（誘導） | 過敏反應（重複使用） |

### 藥物外滲處置
起泡性藥物（vesicants）外滲可造成嚴重組織壞死：
- Doxorubicin：冷敷、Dexrazoxane（若可取得）
- Vincristine/Vinblastine：溫敷、Hyaluronidase 局部注射
- 關鍵：預防勝於治療，IV 留置針確認回血良好、緩慢給藥、全程監測

[圖片:CHOP 方案 25 週化療時程表]

## 三、併發症與監控 (Complications & Monitoring)

### VCOG-CTCAE v2 毒性分級
| Grade | 定義 | 處置 |
|-------|------|------|
| 1 | 輕微，無需醫療介入 | 觀察 |
| 2 | 需藥物治療但不需住院 | 門診處方 |
| 3 | 需住院或侵入性治療 | 降低劑量 10-25% |
| 4 | 危及生命 | 考慮停止化療 |
| 5 | 死亡 | — |

### 最常見化療毒性
1. 嗜中性球減少症：最常見的劑量限制毒性
   - Nadir：多數藥物第 5-10 天，Carboplatin 犬第 14 天
   - Grade 3（< 1,000/μL）：延遲下次治療、預防性抗生素
   - Grade 4（< 500/μL）：住院、廣效抗生素

2. GI 毒性：嘔吐和腹瀉
   - 通常在給藥後 2-5 天
   - [藥物:Maropitant] 1 mg/kg SC/PO 為一線止吐
   - [藥物:Metoclopramide] 0.2-0.5 mg/kg PO q8h

## 四、預後影響 (Prognostic Impact)

化療對預後的影響每種腫瘤都不一樣。淋巴瘤 CHOP 方案可以到 80 到 90% 完全緩解率，中位存活 12 到 14 個月。骨肉瘤術後 Carboplatin 輔助化療把中位存活從 4 到 5 個月拉到 10 到 12 個月。HSA 的 Doxorubicin 化療只能中等程度延長存活（大約 4 到 6 個月 vs 1 到 3 個月）。化療的生活品質通常還可以，大約 80% 犬隻沒有嚴重副作用。

## 五、人醫借鑒 (Translational Insights)

| 人醫工具/概念 | 獸醫應用潛力 | 現況 |
|-------------|-------------|------|
| 藥物基因組學導向劑量調整（DPYD/UGT1A1 基因型） | 犬化療藥物代謝個體差異預測，避免 Grade 4+ 毒性 | 犬 MDR1（ABCB1-1Δ）已常規可用，更廣泛代謝酶面板研發中 |
| 閉合系統藥物轉運裝置（CSTD）強制規範 | 獸醫化療操作人員的職業安全保護，減少藥物暴露 | 人醫已強制使用，獸醫領域推廣中但合規率參差不齊 |
| G-CSF（Filgrastim）預防性使用 | 犬化療後嚴重嗜中性球減少的預防，減少發熱性嗜中性球減少住院 | 犬已有 G-CSF 使用報告，但預防性 vs 治療性使用的成本效益未確立 |
| 奈米脂質體 Doxorubicin（Doxil） | 犬化療心臟毒性降低，延長 Doxorubicin 累積劑量上限 | 獸醫初步藥動學研究已有，但臨床試驗數據極少且成本高 |

## 六、臨床爭議與知識空缺 (Controversies & Knowledge Gaps)

| 爭議議題 | 現況 | Evidence Level |
|---------|------|---------------|
| 犬淋巴瘤 CHOP 方案的最佳週數，19 週 vs 25 週 vs 維持治療 | 短方案完成率高但部分研究顯示 OS 稍短，最佳方案長度未有定論 | Level II |
| 小型犬（< 10 kg）和貓的 BSA 劑量折減幅度，降低 20% 是否足夠 | 小型犬 BSA/BW 比值高導致相對過量，但統一降 20% 可能不精確，體重制劑量的安全性比較不足 | Level III |
| Doxorubicin 累積劑量上限，180 mg/m² vs 240 mg/m² 作為心臟毒性閾值 | 心臟毒性風險隨累積劑量增加，但個體差異大，定期心超是否能安全延長使用尚未確定 | Level II |
| 化療引致嗜中性球減少性發燒的預防性抗生素，常規預防 vs 僅在 Grade 4 時使用 | 人醫高風險方案常規預防，獸醫毒性較低但預防性使用的成本效益分析缺乏 | Level III |

## 七、近期實證更新 (Recent Evidence Updates)

1. **節拍式化療（metronomic）**：低劑量、連續口服（如 cyclophosphamide + NSAID）以抗血管新生／免疫調節為主，可延緩不完全切除軟組織肉瘤的局部復發（Elmslie 2008）；耐受佳、適合門診長期使用。
2. **標靶治療（TKI）**：toceranib（Palladia）等酪胺酸激酶抑制劑已成 MCT 及部分癌症（off-label TCC 等）主流選項；屬口服標靶，毒性譜（GI、蛋白尿、高血壓）與傳統細胞毒藥不同。
3. **新型化療藥 rabacfosadine（Tanovea）**：核苷酸前驅藥，美國 FDA 核准用於犬淋巴瘤，可與 doxorubicin 交替使用（Thamm 2017）。
4. **免疫治療萌芽**：犬黑色素瘤 DNA 疫苗（Oncept）已上市；抗 PD-1／PD-L1 犬源化單株抗體進入試驗，未來可能與化療整合。
> 化療藥物選擇、劑量與安全處置須由獸醫腫瘤專科依個案與現行方案執行、覆核。`,
  clinical_pearl: '獸醫化療最重要的觀念是「劑量調整」。跟人醫不一樣的是，我們不追求最大耐受劑量（MTD），而是在療效跟生活品質之間取得平衡。化療犬貓的飼主最關心的問題是「牠會不會很痛苦？」答案是大約 80% 的動物沒有明顯副作用，需要住院處理的嚴重毒性（Grade 3 到 4）大約 5 到 10%。但是每次化療前還是要跟飼主確認動物在家的狀態，依前次毒性適時調整劑量。化療飼主溝通要花時間。',
  common_mistakes: [
    '未在化療前確認 CBC，嗜中性球過低時給藥會加劇骨髓抑制',
    '小型犬和貓未降低劑量，BSA 相對體重比較高，需降低約 20%',
    '忽略 Doxorubicin 累積劑量追蹤：超過 180 到 240 mg/m² 心肌病風險就會明顯增加',
    'Cyclophosphamide 未同時促進排尿，出血性膀胱炎為可預防但嚴重的併發症',
    '起泡性藥物 IV 給藥未全程監測，外滲造成的組織壞死可能需要手術清創',
  ],
  disease_data: null,
  diagnostic_data: null,
  procedure_data: null,
  visual_placeholders: [
    { position: '藥物分類表後', type: 'comparison_table', description: '化療藥物分類與毒性譜比較表' },
    { position: 'VCOG 分級後', type: 'flowchart', description: '化療毒性處置流程圖' },
  ],
  interactive_placeholders: [
    { position: '劑量計算段落後', type: 'interactive_calculator', description: '輸入體重自動計算 BSA 和藥物劑量' },
  ],
  drug_api_links: ['Cyclophosphamide', 'Chlorambucil', 'Lomustine', 'Doxorubicin', 'Mitoxantrone', 'Vincristine', 'Vinblastine', 'Carboplatin', 'Toceranib', 'L-Asparaginase', 'Maropitant', 'Metoclopramide'],
  references: [
    { type: 'textbook', citation: 'Vail DM, Thamm DH, Liptak JM. Withrow & MacEwen\'s Small Animal Clinical Oncology, 6th ed. Elsevier, 2020. Chapter 9: Chemotherapy.', relevance: '化學治療基礎完整章節' },
    { type: 'guideline', citation: 'Veterinary Cooperative Oncology Group. Common Terminology Criteria for Adverse Events (VCOG-CTCAE) following chemotherapy or biological antineoplastic therapy in dogs and cats v1.1. Vet Comp Oncol. 2016;14(4):417-446. doi:10.1111/vco.283.', relevance: 'VCOG-CTCAE 化療毒性分級標準（v1.1）' },
    { type: 'journal', citation: 'Thamm DH, Vail DM. Aftershocks of cancer chemotherapy: managing adverse effects. J Am Anim Hosp Assoc. 2007;43(1):1-7. doi:10.5326/0430001.', relevance: '化療副作用管理實務' },
    { type: 'journal', citation: 'Elmslie RE, Glawe P, Dow SW. Metronomic therapy with cyclophosphamide and piroxicam effectively delays tumor recurrence in dogs with incompletely resected soft tissue sarcomas. J Vet Intern Med. 2008;22(6):1373-1379. doi:10.1111/j.1939-1676.2008.0179.x.', relevance: '節拍式化療延緩軟組織肉瘤復發（近期實證）' },
    { type: 'journal', citation: 'Thamm DH, Vail DM, Post GS, et al. Alternating rabacfosadine/doxorubicin: efficacy and tolerability in treatment-naive dogs with lymphoma. J Vet Intern Med. 2017;31(3):872-878. doi:10.1111/jvim.14700.', relevance: '新型化療藥 rabacfosadine 犬淋巴瘤（近期實證）' },
  ],
  is_current: true,
  created_at: now,
};

/** 腫瘤外科原則，治療型 */
const contentSurgicalOncology: NodeContent = {
  id: 'CONTENT-ONCO-L5-002',
  node_id: 'ONCO-L5-002',
  version: 1,
  summary: '腫瘤外科是多數實體腫瘤的首選治療，核心原則是以足夠的手術切緣（surgical margin）完整移除腫瘤。腫瘤科有句話：「首次手術是最佳手術」，首次切除不夠會造成局部復發、後續手術難度增加，預後也可能變差。不同腫瘤的切緣標準不一樣：MCT 要 2 到 3 cm lateral 加 1 個 fascial plane deep，FISS 要 3 到 5 cm 加 2 個 fascial planes，良性腫瘤則可以邊緣切除。組織病理的切緣評估（clean/close/dirty）是術後決策的關鍵。',
  learning_objectives: [
    '說明腫瘤外科切緣的定義和分類（marginal/wide/radical）',
    '列出不同腫瘤類型建議的手術切緣標準',
    '描述術後組織病理切緣評估的意義和報告解讀',
    '解釋「首次手術是最佳手術」原則的生物學基礎',
    '比較根治性手術、減積手術和姑息性手術的適應症',
  ],
  key_points: [
    '手術切緣分類：intracapsular（囊內）→ marginal（邊緣）→ wide（寬切緣）→ radical（根治）',
    '切緣標準因腫瘤而異：MCT 2-3 cm lateral + 1 fascial plane；FISS 3-5 cm + 2 fascial planes；STS 2-3 cm + 1 fascial plane',
    '病理切緣評估：clean（> 1 cm 或完整筋膜面）、close（1-3 mm）、dirty/incomplete（腫瘤達切面）',
    '首次手術是最佳手術：腫瘤周圍組織結構完整、手術計畫空間大、不受疤痕組織影響',
    '再手術（scar revision）的困難：疤痕中殘留腫瘤細胞的擴散範圍無法預測，需更大切緣',
    '術前活檢（incisional biopsy）的重要性：確認腫瘤類型 → 決定切緣 → 制定手術計畫',
    '根治性手術：截肢（OSA）、mandibulectomy/maxillectomy（口腔腫瘤）、脾臟切除（HSA）',
    '減積手術（debulking/cytoreductive）：無法完全切除但減少腫瘤量 → 搭配放療或化療',
  ],
  body: `# 腫瘤外科原則 (Surgical Oncology Principles)

## 一、治療原理 (Treatment Principles)



### 各腫瘤切緣建議
| 腫瘤 | Lateral margin | Deep margin | 備註 |
|------|---------------|-------------|------|
| MCT（低度） | ≥ 2 cm | ≥ 1 fascial plane | Kiupel low-grade |
| MCT（高度） | ≥ 2-3 cm | ≥ 1 fascial plane | 考慮輔助治療 |
| FISS | ≥ 3-5 cm | ≥ 2 fascial planes | 首次手術不能省 |
| 軟組織肉瘤（STS） | ≥ 2-3 cm | ≥ 1 fascial plane | 假包膜外有微觀延伸 |
| 口腔黑色素瘤 | ≥ 1-2 cm | 含骨切除 | 常需 mandibulectomy |
| 乳腺腫瘤（犬） | 依位置選擇範圍 | 含筋膜 | 區域至鏈切除 |
| 乳腺腫瘤（貓） | 雙側全鏈 | 含筋膜 | 分兩次手術 |

### 首次手術是最佳手術
### 為什麼首次手術最重要？
1. 腫瘤周圍解剖結構完整，可精確規劃切緣
2. 腫瘤尚未被手術疤痕組織干擾
3. 手術空間最大，重建選項最多
4. 不充分首次手術的後果：
   - 殘留腫瘤細胞在疤痕中擴散範圍無法預測
   - 再手術需更大切緣（增加 1-2 cm）
   - FISS 首次邊緣切除後復發率 > 60%，vs 首次積極手術 14%

### 正確流程
1. 發現腫塊 → FNA 細胞學
2. 若為惡性（或懷疑高度惡性）→ incisional biopsy 確認
3. 根據組織病理結果決定切緣和手術計畫
4. 一次性完成足夠切緣的手術

### 術後切緣評估
### 病理報告解讀
- Clean margin：切緣處無腫瘤細胞（通常定義 > 1 cm 或完整筋膜面）
- Close margin：切緣處有腫瘤細胞接近但未達（通常 1-3 mm）
- Dirty/incomplete margin：腫瘤細胞達切面（不完全切除）

### 切緣不淨的處置
- 首選：再手術（scar revision） → 切除原手術疤痕 + 更大切緣
- 無法再手術時：輔助放射治療 → 術後 3-4 週內開始
- 輔助化療：高度惡性腫瘤可考慮

### 特殊手術類型
### 減積手術（Debulking/Cytoreductive）
- 無法完全切除但最大程度減少腫瘤量
- 搭配放療（如口腔腫瘤）或化療
- 需預先告知飼主手術無法治癒

### 姑息性手術
- 目的：改善生活品質而非治癒
- 範例：尿道阻塞的 TCC 支架置入、出血性腫瘤的止血手術

[圖片:腫瘤手術切緣示意圖，lateral 和 deep margin]

## 二、藥物/方法比較 (Comparison)

### 手術切緣分類
| 類型 | 定義 | 適用時機 |
|------|------|----------|
| Intracapsular | 囊內切除（留下肉眼可見腫瘤） | 僅用於活檢 |
| Marginal | 沿腫瘤假包膜切除 | 良性腫瘤 |
| Wide | 腫瘤周圍加上正常組織切緣 | 惡性腫瘤標準 |
| Radical | 整個解剖區室切除（如截肢） | 高度侵襲性腫瘤 |

## 三、併發症與監控 (Complications & Monitoring)

腫瘤手術併發症大致幾類。一是出血，大血管腫瘤（像脾臟 HSA）風險高。二是傷口併發症，大範圍切除後皮膚張力過大、血清腫、感染都可能。三是功能喪失，截肢、下頷切除、眼球摘除這些術前要跟飼主好好討論。四是腫瘤細胞播種，術中操作不當會導致局部種植。術後監控要定期觸診手術部位、用影像追蹤轉移。

## 四、預後影響 (Prognostic Impact)

手術切緣品質是影響預後最重要的手術因素。完整切除（clean margins）的局部復發率遠低於不完整切除。切緣評估要病理科確認：側面切緣跟深部切緣都要 1 到 3 cm 以上（看腫瘤類型決定），「dirty margin」就是腫瘤細胞延伸到切緣墨染處。首次手術做到完整切除的重要性遠遠大過二次修正手術。

## 五、人醫借鑒 (Translational Insights)

| 人醫工具/概念 | 獸醫應用潛力 | 現況 |
|-------------|-------------|------|
| 術中螢光導引手術（ICG/5-ALA 螢光） | 犬腫瘤手術的即時切緣評估，減少 dirty margin 發生率 | ICG 近紅外線螢光在犬 SLN mapping 已有報告，腫瘤邊界應用初期 |
| 3D 列印手術模型與導板 | 犬口腔/鼻腔腫瘤的精確手術切緣規劃，個體化術前模擬 | 犬 mandibulectomy 3D 列印輔助已有病例報告 |
| 術中冷凍切片快速病理（Frozen Section） | 犬腫瘤手術中即時確認切緣，避免二次手術 | 部分獸醫教學醫院已可執行，但普及率低且判讀經驗需累積 |
| 機器人輔助微創手術（Da Vinci） | 犬胸腔/腹腔腫瘤的微創精確切除 | 人醫已廣泛應用，獸醫因動物體型差異大且成本極高而未發展 |

## 六、臨床爭議與知識空缺 (Controversies & Knowledge Gaps)

| 爭議議題 | 現況 | Evidence Level |
|---------|------|---------------|
| 犬 MCT 手術切緣 2 cm vs 3 cm lateral margin 的局部復發率差異 | 近年研究提示低度 MCT 2 cm 可能足夠，但高度 MCT 仍建議 3 cm，統一標準缺乏前瞻性比較 | Level II |
| 切緣不淨（dirty margin）後再手術 vs 輔助放療，最佳二線處置策略 | 再手術（scar revision）為首選但不一定可行，放療在獸醫可近性有限，最佳時機與選擇指引不完整 | Level III |
| FISS 手術切緣 3 cm vs 5 cm 的實際可行性與預後差異 | 5 cm 切緣理論上更好但常受解剖結構限制，部分研究顯示 3 cm 加筋膜面在首次手術已可達良好控制 | Level II |
| 術前 incisional biopsy 是否延遲治療時機並增加腫瘤播散風險 | 活檢可提供關鍵資訊指導手術計畫，正確的 biopsy 技術不會增加播散，但臨床上常被跳過 | Level III |`,
  clinical_pearl: '一般獸醫門診最常見的腫瘤外科錯誤就是「先摘掉再說」（shelling out）。對良性腫瘤（像脂肪瘤）這樣做沒問題，但是對 MCT、STS、FISS 這些惡性腫瘤來說，邊緣切除（marginal excision）幾乎就是注定失敗。關鍵原則：切除任何腫塊前，先用 FNA 拿到初步診斷。腫瘤型態跟生物行為先確認：如果是 MCT，你就知道要 2 到 3 cm 切緣，而不是「沿著腫塊邊緣挖」。一個正確的首次手術勝過三次不足的追加手術。',
  common_mistakes: [
    '沒做 FNA 就直接邊緣切除，會讓 MCT 或 STS 切緣不夠要再手術',
    'FISS 用邊緣切除「先看看」：首次不充分手術會讓復發率從 14% 飆到超過 60%',
    '把 close margin 當 clean margin：close margin 要看腫瘤類型決定要不要再手術或放療',
    '術中打開腫瘤包膜（capsule），會造成腫瘤細胞播散到手術區域',
    '手術前沒做影像學評估（像 FISS 的 CT）：實際侵犯範圍可能比觸診大很多',
  ],
  disease_data: null,
  diagnostic_data: null,
  procedure_data: null,
  visual_placeholders: [
    { position: '切緣分類段落後', type: 'annotated_image', description: '手術切緣（lateral + deep margin）示意圖' },
    { position: '首次手術段落後', type: 'flowchart', description: '腫瘤外科術前至術後決策流程圖' },
  ],
  interactive_placeholders: [],
  drug_api_links: [],
  references: [
    { type: 'textbook', citation: 'Vail DM, Thamm DH, Liptak JM. Withrow & MacEwen\'s Small Animal Clinical Oncology, 6th ed. Elsevier, 2020. Chapter 8: Surgical Oncology.', relevance: '腫瘤外科原則完整章節' },
    { type: 'journal', citation: 'Ehrhart NP, Culp WTN. Principles of surgical oncology. In: Veterinary Surgical Oncology. Wiley-Blackwell, 2022.', relevance: '獸醫腫瘤外科專著' },
    { type: 'journal', citation: 'Simpson AM, et al. "Evaluation of surgical margins required for complete excision of cutaneous mast cell tumors in dogs." J Am Vet Med Assoc. 2004;224(2):236-240. doi:10.2460/javma.2004.224.236', relevance: 'MCT 手術切緣（引用真偽稽核：原「Simpson S, Vet Surg 2019;48(7):1108-1116」Crossref 查無、疑捏造 → 更正為真實奠基文獻 Simpson 2004 JAVMA + DOI）' },
    { type: 'guideline', citation: 'VCOG，Veterinary Cooperative Oncology Group. Surgical Oncology: Guidelines for First Surgery Principles. Vet Comp Oncol. 2015.', relevance: '腫瘤外科首次手術指引' },
  ],
  is_current: true,
  created_at: now,
};

/** 腫瘤疼痛管理，治療型 */
const contentCancerPain: NodeContent = {
  id: 'CONTENT-ONCO-L5-003',
  node_id: 'ONCO-L5-003',
  version: 2,
  summary: '腫瘤疼痛管理是獸醫腫瘤科緩和醫療的核心。腫瘤疼痛可能來自腫瘤本身（浸潤、壓迫、骨破壞）、治療相關（手術傷口、化療神經毒性）或副腫瘤症候群。多模式止痛（multimodal analgesia）是基本策略，結合 NSAIDs、Gabapentin、Tramadol 和必要時的鴉片類藥物。WHO 止痛階梯經修改後適用於獸醫。定期使用疼痛評估量表監測疼痛程度和治療效果，是維持腫瘤動物生活品質的關鍵。',
  learning_objectives: [
    '描述腫瘤疼痛的來源分類（腫瘤相關、治療相關、副腫瘤相關）',
    '說明多模式止痛（multimodal analgesia）的概念和優勢',
    '列出犬貓腫瘤疼痛管理的常用藥物及其劑量',
    '應用修改版 WHO 止痛階梯於獸醫患者',
    '使用疼痛評估量表監測腫瘤動物的疼痛和生活品質',
  ],
  key_points: [
    '腫瘤疼痛來源：體感性疼痛（somatic，如骨破壞）、內臟性疼痛（visceral，如腹腔腫瘤壓迫）、神經病變性疼痛（neuropathic，如腫瘤浸潤神經）',
    '多模式止痛：結合不同機轉藥物 → 增效（synergism）+ 減少個別藥物劑量和副作用',
    'WHO 止痛階梯（修改版）：Step 1（NSAIDs ± Gabapentin）→ Step 2（+ Tramadol）→ Step 3（+ 鴉片類）',
    'NSAIDs（Meloxicam、Carprofen）：第一線，抗發炎 + 部分腫瘤有抗腫瘤活性（COX-2 抑制）',
    'Gabapentin：神經病變性疼痛和中樞敏感化（central sensitization）的重要輔助藥物',
    'Tramadol：犬的止痛效果有爭議（生物利用率低），但貓的止痛效果較好',
    '生活品質評估：HHHHHMM 量表（Hurt, Hunger, Hydration, Hygiene, Happiness, Mobility, More good days than bad）',
    '安樂死時機：疼痛無法控制時，安樂死是最後的慈悲，與飼主預先討論',
  ],
  body: `# 腫瘤疼痛管理 (Cancer Pain Management)

## 一、治療原理 (Treatment Principles)



### 修改版 WHO 止痛階梯
### Step 1：輕度疼痛
| 藥物 | 劑量 | 備註 |
|------|------|------|
| [藥物:Meloxicam] | 犬 0.1 mg/kg PO SID；貓 0.05 mg/kg PO q24-48h | COX-2 偏好性，監測腎功能 |
| [藥物:Carprofen] | 犬 2.2 mg/kg PO BID 或 4.4 mg/kg PO SID | 監測肝功能 |
| [藥物:Piroxicam] | 犬 0.3 mg/kg PO SID | 兼具抗腫瘤活性（TCC、SCC） |
| [藥物:Gabapentin] | 犬 5-10 mg/kg PO BID-TID；貓 5-10 mg/kg PO BID | 神經病變性疼痛和中樞敏感化 |

### Step 2：中度疼痛（加上）
| 藥物 | 劑量 | 備註 |
|------|------|------|
| [藥物:Tramadol] | 犬 2-5 mg/kg PO BID-TID；貓 2-4 mg/kg PO BID | 犬止痛效果有爭議，貓效果較好 |
| [藥物:Amantadine] | 犬貓 3-5 mg/kg PO SID | NMDA 受體拮抗劑，抗中樞敏感化 |

### Step 3：重度疼痛（加上）
| 藥物 | 劑量 | 備註 |
|------|------|------|
| [藥物:Buprenorphine] | 貓 0.02-0.03 mg/kg 口腔黏膜 q6-8h | 貓首選鴉片類 |
| Codeine | 犬 1-2 mg/kg PO BID-TID | 弱鴉片類 |
| Fentanyl 貼片 | 犬 2-5 μg/kg/hr；貓 25 μg/hr 貼片 | 持續性疼痛控制，72 小時更換 |

### 特殊疼痛情況
### 骨肉瘤疼痛
- NSAIDs 為基礎
- [藥物:Pamidronate] 1-2 mg/kg IV q4 weeks（bisphosphonate，抑制骨吸收→止痛）
- Gabapentin 輔助
- 姑息性放射治療（2-3 次大分割，疼痛緩解率 > 70%）
- 截肢為最有效的止痛手段

### 口腔腫瘤疼痛
- NSAIDs + Gabapentin
- Tramadol/Buprenorphine
- 局部利多卡因凝膠
- 軟食/流質飲食

### 疼痛評估量表
### Glasgow Composite Pain Scale（術後疼痛）
- 行為觀察 + 觸診反應
- 分數制，超過閾值需要止痛介入

### HHHHHMM 生活品質量表（慢性/腫瘤疼痛）
- Hurt（疼痛）：疼痛是否被控制？
- Hunger（食慾）：是否進食足夠？
- Hydration（水分）：是否脫水？
- Hygiene（衛生）：是否能保持清潔？
- Happiness（快樂）：是否有愉悅表現？
- Mobility（行動力）：是否能自主活動？
- More good days than bad（好日子 > 壞日子）

各項 1-10 分，總分 > 35 分為可接受的生活品質。

[圖片:修改版 WHO 止痛階梯示意圖]

## 二、藥物/方法比較 (Comparison)

### 腫瘤疼痛分類
### 按來源
- 腫瘤直接造成：骨破壞（OSA）、器官壓迫/膨脹、神經浸潤
- 治療相關：手術傷口、化療神經毒性（Vincristine）、放療黏膜炎
- 副腫瘤相關：肥大型骨病（HO）、肌肉痙攣

### 按機轉
- 體感性疼痛（Somatic）：定位明確、銳痛（骨、肌肉、皮膚）
- 內臟性疼痛（Visceral）：定位模糊、鈍痛（腹腔/胸腔器官膨脹或壓迫）
- 神經病變性疼痛（Neuropathic）：灼痛、電擊感（腫瘤浸潤或壓迫神經）

## 三、併發症與監控 (Complications & Monitoring)

止痛藥物併發症分幾類。NSAIDs 可能消化道潰瘍出血（要定期 PCV/TS 跟糞便潛血）、腎毒性（監控 BUN/Cre）、肝毒性（定期 ALT）。Tramadol 會便秘、鎮靜，犬對 Tramadol 代謝能力低（生體可用率差很多）。Gabapentin 會鎮靜、共濟失調，建議起始低劑量慢慢加。類鴉片會便秘、呼吸抑制（高劑量）、耐受性。監控重點是定期用疼痛評分量表評估止痛效果。

## 四、預後影響 (Prognostic Impact)

有效的疼痛管理會直接影響腫瘤患者的生活品質跟飼主的治療意願。疼痛控制不好是飼主選擇安樂死的主因之一。多模式止痛（NSAIDs 加神經病變性疼痛藥物加類鴉片）比單一藥物有效，也可以減少個別藥物劑量、降低副作用。早點介入止痛可以預防中樞敏感化，避免疼痛變成難治性。

## 五、人醫借鑒 (Translational Insights)

| 人醫工具/概念 | 獸醫應用潛力 | 現況 |
|-------------|-------------|------|
| 抗 NGF 單株抗體（Tanezumab 類藥物） | 犬骨肉瘤/骨轉移疼痛的非類鴉片標靶止痛 | 犬 anti-NGF 抗體（Bedinvetmab/Librela）已核准用於骨關節炎疼痛，腫瘤疼痛適應症研究中 |
| Palliative Performance Scale（PPS）標準化 | 犬腫瘤患者的功能狀態客觀評估，標準化安樂死時機討論 | 人醫 PPS 已廣泛使用，犬 HHHHHMM 量表為替代但主觀性較高 |
| 介入性疼痛治療（神經阻斷/鞘內給藥） | 犬難治性腫瘤疼痛的進階處置，超音波導引神經阻斷 | 犬超音波導引局部麻醉已在術後疼痛應用，腫瘤慢性疼痛適應症初步報告 |
| 大麻素類止痛（CBD/THC） | 犬腫瘤疼痛的多模式止痛輔助，抗發炎 + 鎮痛 | CBD 犬安全性數據增加中，但抗腫瘤痛的 RCT 證據不足，法規限制因地區而異 |

## 六、臨床爭議與知識空缺 (Controversies & Knowledge Gaps)

| 爭議議題 | 現況 | Evidence Level |
|---------|------|---------------|
| Tramadol 在犬的實際止痛效果，是否應繼續作為犬止痛標準藥物 | 犬 CYP2D6 活性低導致 M1 代謝物（主要止痛活性成分）產量不足，多項研究質疑犬的止痛效力 | Level I |
| 犬腫瘤疼痛評估量表的標準化，HHHHHMM vs CBPI vs Glasgow 的最佳選擇 | 各量表各有優缺點，缺乏犬腫瘤疼痛特異性的驗證研究，量表間的一致性未確立 | Level III |
| NSAIDs 在腫瘤患者的長期安全性，腎毒性風險 vs 止痛/抗腫瘤獲益 | 腫瘤患者常有腎灌注不足風險（脫水、化療），但 NSAIDs 的 COX-2 抗腫瘤活性亦有臨床意義 | Level II |
| 安樂死時機決策的客觀化，是否存在可靠的「生活品質閾值」 | HHHHHMM 總分 < 35 為建議參考但未經嚴格驗證，飼主主觀因素影響極大 | Level IV |

## 七、近期實證更新 (Recent Evidence Updates)

### Tramadol 在犬止痛地位的崩解
高品質 RCT（Budsberg 2018）顯示 tramadol 對犬骨關節炎臨床疼痛無顯著效果，呼應犬代謝產生 M1 活性代謝物不足的藥理限制。腫瘤疼痛雖不同於 OA，但「犬單用 tramadol 可靠止痛」的假設已不成立；應以 NSAID＋gabapentin±鴉片為主幹，tramadol 不宜作犬的主力止痛藥（貓較有效）。

### 抗 NGF 單株抗體進軍腫瘤/骨痛
犬 bedinvetmab、貓 frunevetmab（已核准用於 OA 疼痛）為非鴉片、每月一針的止痛新工具；人醫 tanezumab 對癌症骨痛有效，獸醫腫瘤/骨痛適應症研究中。對 OSA 等骨破壞性疼痛是值得關注的方向（須注意關節/骨安全性監測，參見 OA 節點之 RPOA 教訓）。

### 骨痛的雙磷酸鹽與姑息放療
OSA 骨痛除 NSAID＋gabapentin 外，雙磷酸鹽（pamidronate，Fan 2007；zoledronate 效力更強）抑制蝕骨、提供部分鎮痛；姑息性放療（單次或少數大分割、立體定位 SRT）對多數犬骨痛有效。截肢仍是最有效的單一止痛手段。

### 指引更新與標準化
2022 WSAVA 全球疼痛指引（Monteiro 2022）整合急慢性疼痛辨識、量表與多模式治療，強調主動評估與個體化；腫瘤疼痛應定期以量表（CBPI/HHHHHMM）追蹤、早期介入以防中樞敏化。`,
  clinical_pearl: '腫瘤疼痛管理最容易被忽略的是神經病變性疼痛（neuropathic pain）。OSA 的疼痛不只是骨破壞的體感性疼痛，腫瘤浸潤骨膜跟周圍神經會跑出神經病變性成分。這就是為什麼單獨用 NSAIDs 對晚期 OSA 效果有限，要加 Gabapentin（神經病變性疼痛）跟 Amantadine（中樞敏感化）。另外，HHHHHMM 量表是跟飼主討論安樂死時機最實用的工具，可以把主觀感受轉成可量化的評估。',
  common_mistakes: [
    '只用單一止痛藥物而不用多模式止痛：組合用藥可以增效又減少副作用',
    '忽略 Gabapentin 在腫瘤疼痛中的角色：神經病變性疼痛要有特定機轉藥物',
    '長期用 NSAIDs 沒監測腎功能跟 GI：定期 BCS 跟糞便潛血很重要',
    '不敢用鴉片類藥物：獸醫患者用鴉片類是為了控制疼痛，不是成癮',
    '沒用生活品質量表客觀評估，主觀判斷可能低估或高估疼痛程度',
  ],
  disease_data: null,
  diagnostic_data: null,
  procedure_data: null,
  visual_placeholders: [
    { position: 'WHO 階梯段落後', type: 'flowchart', description: '修改版 WHO 止痛階梯流程圖' },
    { position: 'HHHHHMM 段落後', type: 'interactive_overlay', description: 'HHHHHMM 生活品質評估互動量表' },
  ],
  interactive_placeholders: [
    { position: '全文後', type: 'interactive_assessment', description: 'HHHHHMM 生活品質評分互動計算器' },
  ],
  drug_api_links: ['Meloxicam', 'Carprofen', 'Piroxicam', 'Gabapentin', 'Tramadol', 'Amantadine', 'Buprenorphine', 'Pamidronate'],
  references: [
    { type: 'textbook', citation: 'Vail DM, Thamm DH, Liptak JM. Withrow & MacEwen\'s Small Animal Clinical Oncology, 6th ed. Elsevier, 2020. Chapter 14: Cancer Pain Management.', relevance: '腫瘤疼痛管理完整章節' },
    { type: 'journal', citation: 'Villalobos A. Quality of life scale helps make final call. Veterinary Practice News. 2004;Sept:9-11.', relevance: 'HHHHHMM 生活品質量表原始文獻（業界刊物，無 DOI）' },
    { type: 'guideline', citation: 'Epstein ME, Rodan I, Griffenhagen G, et al. 2015 AAHA/AAFP Pain Management Guidelines for Dogs and Cats. J Feline Med Surg. 2015;17(3):251-272. doi:10.1177/1098612x15572062.', relevance: '犬貓疼痛管理指引（2015 AAHA/AAFP）' },
    { type: 'guideline', citation: 'Monteiro BP, Lascelles BDX, Murrell J, et al. 2022 WSAVA guidelines for the recognition, assessment and treatment of pain. J Small Anim Pract. 2023;64(4):177-254. doi:10.1111/jsap.13566.', relevance: 'WSAVA 全球疼痛管理指引（多模式止痛權威依據）' },
    { type: 'journal', citation: 'Budsberg SC, Torres BT, Kleine SA, et al. Lack of effectiveness of tramadol hydrochloride for the treatment of pain and joint dysfunction in dogs with chronic osteoarthritis. J Am Vet Med Assoc. 2018;252(4):427-432. doi:10.2460/javma.252.4.427.', relevance: 'tramadol 對犬 OA 疼痛無效的 RCT（質疑犬 tramadol 止痛地位）' },
    { type: 'journal', citation: 'Fan TM, de Lorimier LP, Charney SC, et al. Single-Agent Pamidronate for Palliative Therapy of Canine Appendicular Osteosarcoma Bone Pain. J Vet Intern Med. 2007;21(3):431-439. doi:10.1111/j.1939-1676.2007.tb02986.x.', relevance: '雙磷酸鹽 pamidronate 緩解犬 OSA 骨痛的臨床證據' },
  ],
  is_current: true,
  created_at: now,
};

/** 放射治療，治療型 */
const contentRadiationTherapy: NodeContent = {
  id: 'CONTENT-ONCO-L5-004',
  node_id: 'ONCO-L5-004',
  version: 1,
  summary: '放射治療（Radiation Therapy, RT）用游離輻射破壞腫瘤 DNA 達到局部控制。分根治性放療（多次小分割、總劑量高）跟姑息性放療（少次大分割、快速緩解症狀）兩種。獸醫 RT 每次治療都要全身麻醉才能精確定位。設備包括 Linear Accelerator（Linac）跟 Cobalt-60。主要適應症有不完全切除腫瘤的術後輔助、不可手術腫瘤的姑息治療、骨肉瘤的姑息性止痛這些。台灣目前已經有幾個獸醫放療中心提供服務。',
  learning_objectives: [
    '區分根治性放療和姑息性放療的目標、分割方式和適應症',
    '說明放射治療的基本物理學原理和生物學效應（4Rs）',
    '列出獸醫腫瘤科中放射治療的主要適應症',
    '描述放射治療的急性和晚期副作用',
    '解釋為何獸醫放射治療需要每次全身麻醉',
  ],
  key_points: [
    '放射治療為局部治療，控制原發腫瘤或手術殘留，不處理全身性轉移',
    '根治性放療：每次 2.5-4 Gy × 12-20 次（每日或隔日），總劑量 48-60 Gy，目標為長期控制',
    '姑息性放療：每次 6-10 Gy × 3-5 次（每週一次），快速緩解疼痛或症狀',
    '放射生物學 4Rs：Repair（修復）、Redistribution（再分配）、Reoxygenation（再氧合）、Repopulation（再增殖）',
    '每次治療需全身麻醉：確保精確定位（毫米級），動物無法配合固定不動',
    '急性副作用：皮膚紅腫脫毛（radiation dermatitis）、口腔黏膜炎（口腔腫瘤 RT），通常可逆',
    '晚期副作用：纖維化、壞死、白內障，不可逆，限制終生總劑量',
    '口腔黑色素瘤對大分割放療反應良好（粗分割 4 × 8-9 Gy）',
    'OSA 姑息性放療止痛：2-4 次大分割，疼痛緩解率 > 70%，持續約 2-4 個月',
  ],
  body: `# 放射治療 (Radiation Therapy)

## 一、治療原理 (Treatment Principles)



### 基本原理
放射治療利用高能量游離輻射（光子或電子束）直接損傷腫瘤細胞 DNA，造成雙股斷裂（double-strand breaks）→ 細胞無法修復 → 在下一次有絲分裂時死亡（mitotic death）。

### 設備
- Linear Accelerator（Linac）：最常用，可產生光子和電子束
- Cobalt-60：放射性同位素源，逐漸被 Linac 取代
- Stereotactic Radiation（SRS/SRT）：高精度立體定位放射，單次或少次大劑量

### 放射生物學 4Rs
| R | 說明 | 臨床意義 |
|---|------|----------|
| Repair | 正常細胞修復亞致死損傷 | 分割給予讓正常組織修復 |
| Redistribution | 腫瘤細胞重新分配至放射敏感期 | 多次分割捕獲更多 S/M 期細胞 |
| Reoxygenation | 缺氧腫瘤區域在分割間重新氧合 | 氧氣增加放射敏感度 2-3 倍 |
| Repopulation | 腫瘤細胞在治療間隔增殖 | 治療不宜中斷過久 |

### 放療類型
### 根治性放療（Definitive/Curative-Intent RT）
- 目標：長期局部控制或治癒
- 分割：每次 2.5-4 Gy × 12-20 次
- 總劑量：48-60 Gy
- 頻率：每日或隔日
- 治療期間：3-4 週
- 每次需全身麻醉（共 12-20 次）

### 姑息性放療（Palliative RT）
- 目標：快速緩解症狀（疼痛、出血、阻塞）
- 分割：每次 6-10 Gy × 3-5 次
- 總劑量：18-32 Gy
- 頻率：每週一次
- 全身麻醉次數較少（3-5 次）

### 獸醫 RT 主要適應症
| 適應症 | 放療類型 | 說明 |
|--------|----------|------|
| 術後切緣不淨（MCT、STS、FISS） | 根治性 | 最常見適應症之一 |
| 不可手術的腫瘤 | 根治性或姑息性 | 鼻腔腫瘤、腦瘤 |
| 口腔黑色素瘤 | 粗分割（4 × 8-9 Gy） | 黑色素瘤對大分割反應好 |
| OSA 止痛 | 姑息性（2-4 次） | 緩解率 > 70%，持續 2-4 個月 |
| 腦瘤（meningioma） | 根治性 | 中位存活 > 12 個月 |
| 鼻腔腫瘤 | 根治性 | 手術+放療中位存活 > 12-20 個月 |

## 二、藥物/方法比較 (Comparison)

放射治療方案比較大致這樣分。根治性放射治療（definitive RT）每次劑量小（2 到 4 Gy）、次數多（15 到 20 次）、總療程 3 到 4 週，適合可治癒的局部腫瘤。姑息性放射治療（palliative RT）每次劑量大（4 到 10 Gy）、次數少（3 到 6 次），目標是止痛跟改善生活品質。立體定位放射治療（SRT/SRS）高精準度單次或少數次照射，台灣還沒普及。

## 三、併發症與監控 (Complications & Monitoring)

### 副作用
### 急性副作用（治療期間至結束後數週）
- 皮膚：紅腫（erythema）→ 脫毛（alopecia）→ 濕性脫皮（moist desquamation）
- 口腔黏膜炎：口腔腫瘤 RT 時，疼痛、流涎、食慾下降
- 眼睛：結膜炎、乾眼症（若在照射範圍內）
- 通常在 RT 結束後 2-4 週內自行緩解

### 晚期副作用（數月至數年後）
- 纖維化：照射區域結締組織增生
- 骨壞死：下頷骨在口腔 RT 後
- 白內障：眼球在照射範圍內時
- 腦壞死：腦部 RT 的罕見但嚴重併發症
- 不可逆，限制終生總劑量

[圖片:根治性 vs 姑息性放療分割方案比較圖]

## 四、預後影響 (Prognostic Impact)

放射治療對預後的影響每種腫瘤差很多。口腔黑色素瘤的姑息性 RT 可以有效控制疼痛、改善進食能力。鼻腔腫瘤放射治療是主要治療，可以把中位存活從幾個月拉長到 12 到 18 個月。不完整切除的軟組織肉瘤術後 RT 可以降低局部復發率。腦瘤的 RT 可以延長存活期 6 到 12 個月。急性放射毒性（口腔黏膜炎、皮膚炎）通常可逆。

## 五、人醫借鑒 (Translational Insights)

| 人醫工具/概念 | 獸醫應用潛力 | 現況 |
|-------------|-------------|------|
| 立體定位放射手術（SRS/SBRT） | 犬腦腫瘤/肺轉移的高精度少次照射，減少麻醉次數 | 北美少數獸醫中心已有 SRS/SRT 設備，初步臨床數據發表中 |
| 質子治療（Proton Therapy） | 犬鼻腔/腦部腫瘤的精確照射，大幅減少正常組織劑量 | 人醫已廣泛應用，獸醫因設備成本極高目前無可用設施 |
| 放射免疫聯合治療（RT + anti-PD-1），遠隔效應（Abscopal Effect） | 犬腫瘤放療後激活全身抗腫瘤免疫，控制遠端轉移 | 人醫已有多項 RCT 證據，犬 RT + 免疫治療聯合試驗極初期 |
| 即時適應性放療（Adaptive RT，MR-Linac） | 犬腫瘤每次照射前即時影像修正計畫，提高精確度 | 人醫 MR-Linac 已臨床應用，獸醫因每次需麻醉且設備稀缺而不可行 |

## 六、臨床爭議與知識空缺 (Controversies & Knowledge Gaps)

| 爭議議題 | 現況 | Evidence Level |
|---------|------|---------------|
| 犬鼻腔腫瘤最佳放療分割方案，根治性（18-20 次）vs 粗分割（10 次）vs 加速分割 | 根治性方案控制率最佳但麻醉次數多，粗分割方案的長期比較數據不足 | Level II |
| 術後輔助 RT 的最佳啟動時機，手術後 2 週 vs 4 週 vs 傷口完全癒合後 | 太早增加傷口併發症，太晚可能讓殘留腫瘤增殖，最佳窗口缺乏前瞻性研究 | Level III |
| 姑息性放療每次分割劑量，4 × 8 Gy vs 3 × 10 Gy vs 單次 10 Gy 的比較 | 各方案止痛效果類似但持續時間可能不同，缺乏 head-to-head 比較 | Level III |
| 獸醫放療中反覆全身麻醉（12-20 次）的累積風險 | 每次麻醉風險低（< 0.1%），但多次累積風險、飼主時間與經濟負擔為主要障礙 | Level III |`,
  clinical_pearl: '台灣的放射治療可近性慢慢改善，但是還不是所有腫瘤轉診中心都有設備。所以臨床決策時要考量幾點：有沒有其他替代方案（再手術、化療）、飼主能不能配合多次麻醉跟交通往返、費用承受能力。姑息性放療（3 到 5 次）對 OSA 止痛效果很好而且麻醉次數少，是最實際可行的放療應用之一。口腔黑色素瘤的粗分割放療（4 次）也是不錯的選項。',
  common_mistakes: [
    '以為放射治療可以治療全身轉移：RT 是局部治療，全身性疾病要靠化療',
    '忽略每次 RT 都要全身麻醉這件事，飼主要理解治療排程的負擔',
    '術後太晚才開始輔助放療：建議手術後 2 到 4 週內開始（傷口癒合後）',
    '把急性副作用跟晚期副作用混為一談：急性通常可逆、晚期不可逆',
    '不知道口腔黑色素瘤對大分割放療反應比較好，標準小分割不一定是最佳選擇',
  ],
  disease_data: null,
  diagnostic_data: null,
  procedure_data: null,
  visual_placeholders: [
    { position: '放療類型段落後', type: 'comparison_table', description: '根治性 vs 姑息性放療比較表' },
    { position: '副作用段落後', type: 'timeline', description: '放射治療急性與晚期副作用時間軸' },
  ],
  interactive_placeholders: [],
  drug_api_links: [],
  references: [
    { type: 'textbook', citation: 'Vail DM, Thamm DH, Liptak JM. Withrow & MacEwen\'s Small Animal Clinical Oncology, 6th ed. Elsevier, 2020. Chapter 10: Radiation Therapy.', relevance: '放射治療完整章節' },
    { type: 'journal', citation: 'Larue SM, Gordon IK. Radiation therapy. In: Withrow & MacEwen\'s Small Animal Clinical Oncology, 6th ed.', relevance: '獸醫放射治療基礎' },
    { type: 'journal', citation: 'Pagano C et al. Safety and toxicity of an accelerated coarsely fractionated radiation protocol for treatment of appendicular osteosarcoma in 14 dogs: 10 Gy x 2 fractions. Vet Radiol Ultrasound. 2016;57(5):551-556. doi:10.1111/vru.12389', relevance: '犬四肢骨肉瘤加速粗分次緩和放療（10 Gy×2）之安全性與毒性。Crossref 驗證真實，取代原疑捏造之 Boston「8 dogs 2-3 fraction」引用（VRU 2007 查無該篇）' },
    { type: 'guideline', citation: 'AAHA Oncology Guidelines for Dogs and Cats. J Am Anim Hosp Assoc. 2016;52(4):181-204.', relevance: 'AAHA 腫瘤科指引，放射治療角色與轉介建議' },
  ],
  is_current: true,
  created_at: now,
};

/** 節拍式化療，治療型 */
const contentMetronomicChemo: NodeContent = {
  id: 'CONTENT-ONCO-L5-005',
  node_id: 'ONCO-L5-005',
  version: 1,
  summary: '節拍式化療（Metronomic Chemotherapy）是用低劑量、高頻率（通常每日口服）持續給化療藥物的策略。跟傳統最大耐受劑量（MTD）化療不一樣，節拍式化療主要作用機轉是抗血管新生（anti-angiogenesis）跟免疫調節，不是直接細胞毒性。最常用的方案是低劑量 Cyclophosphamide 加 NSAIDs（像 Piroxicam）。適合維持治療、不適合高強度化療的患者，或飼主因為經濟或生活考量沒辦法頻繁回診的情況。',
  learning_objectives: [
    '比較節拍式化療與傳統 MTD 化療的作用機轉和目標差異',
    '說明抗血管新生（anti-angiogenesis）在節拍式化療中的角色',
    '列出節拍式化療的常用藥物組合和劑量',
    '描述節拍式化療的適應症和適用患者群',
    '監測節拍式化療的副作用和療效評估',
  ],
  key_points: [
    '節拍式化療：低劑量 + 高頻率 + 持續給藥（通常每日口服），無休息期',
    '主要機轉：抗血管新生（targeting 腫瘤血管內皮細胞的增殖）+ 免疫調節（降低 Treg 細胞）',
    '與 MTD 化療的本質差異：MTD 針對快速增殖的腫瘤細胞；節拍式針對腫瘤微環境（血管和免疫）',
    '最常用方案：Cyclophosphamide 10-15 mg/m²/day PO + Piroxicam 0.3 mg/kg PO SID',
    '替代方案：Chlorambucil 4 mg/m² PO q48h + NSAIDs；低劑量口服 Etoposide',
    '適應症：軟組織肉瘤術後維持、HSA 輔助、不適合 MTD 化療的患者、經濟限制',
    '優點：口服居家用藥、副作用輕微、費用較低、無需頻繁住院',
    '監測：每 2-4 週 CBC（低度骨髓抑制可能）、尿液分析（出血性膀胱炎）、腎功能（NSAIDs）',
    '出血性膀胱炎預防：低劑量 Cyclophosphamide 仍有風險，每日最後一次排尿前充分飲水',
  ],
  body: `# 節拍式化療 (Metronomic Chemotherapy)

## 一、治療原理 (Treatment Principles)



### 概念與原理
### MTD vs 節拍式化療
| 特點 | 傳統 MTD 化療 | 節拍式化療 |
|------|-------------|-----------|
| 劑量 | 最大耐受劑量 | 低劑量（MTD 的 10-33%） |
| 頻率 | 間歇性（q2-3 weeks） | 持續性（每日或隔日） |
| 休息期 | 有（恢復骨髓功能） | 無 |
| 主要標靶 | 腫瘤細胞 | 腫瘤血管內皮 + 免疫調節 |
| 給藥途徑 | 多為 IV | 口服（居家） |
| 副作用 | 較嚴重（骨髓抑制、GI） | 輕微 |

### 抗血管新生機轉
- 腫瘤血管內皮細胞持續增殖以供應腫瘤營養
- 低劑量持續化療 → 選擇性抑制增殖中的血管內皮細胞
- 血管內皮細胞基因組穩定（不易產生抗藥性）→ 長期有效
- Cyclophosphamide 低劑量可抑制 VEGF 和 TSP-1 調控

### 免疫調節機轉
- 低劑量 Cyclophosphamide → 選擇性降低 Treg 細胞（CD4+CD25+FoxP3+）
- Treg 降低 → 解除對效應 T 細胞的抑制 → 增強抗腫瘤免疫
- NSAIDs → 抑制 COX-2/PGE2 → 減少免疫抑制性微環境

### 常用節拍式化療方案
### 方案一：Cyclophosphamide + Piroxicam（最常用）
| 藥物 | 劑量 | 頻率 | 監測 |
|------|------|------|------|
| [藥物:Cyclophosphamide] | 10-15 mg/m²/day PO | 每日或隔日 | CBC q2-4 週，尿液分析 |
| [藥物:Piroxicam] | 0.3 mg/kg PO SID | 每日 | 腎功能 q4-8 週 |

### 方案二：Chlorambucil + NSAIDs
| 藥物 | 劑量 | 頻率 | 監測 |
|------|------|------|------|
| [藥物:Chlorambucil] | 4 mg/m² PO | 隔日 | CBC q2-4 週 |
| [藥物:Meloxicam] | 0.1 mg/kg PO SID | 每日 | 腎功能 |

### 方案三：搭配 TKI
| 藥物 | 劑量 | 頻率 | 備註 |
|------|------|------|------|
| [藥物:Toceranib] | 3.25 mg/kg PO（FDA 標籤量；臨床可減量至 2.75 mg/kg） | 隔日（QOD） | 抗 VEGFR/c-KIT |
| + Cyclophosphamide | 10 mg/m²/day PO | 每日 | 低劑量搭配 |

### 適應症
### 主要適應症
- 軟組織肉瘤（STS）術後維持：切緣乾淨但高級別
- HSA 脾臟切除後輔助：替代或接續 Doxorubicin
- MCT 術後維持：中度風險（Patnaik II / Kiupel 低度但有不良因子）
- 不適合 MTD 化療的患者：高齡、併發疾病、飼主偏好

### 特殊考量
- 經濟因素：節拍式化療月費用比 MTD 化療便宜很多
- 飼主便利性：居家口服用藥，無需每週住院 IV 化療
- 台灣臨床實務：部分飼主因工作或距離無法頻繁回診，節拍式化療為良好替代

## 二、藥物/方法比較 (Comparison)

節拍式 vs 最大耐受劑量（MTD）化療比較。MTD 化療是高劑量、間歇給藥，目標是殺腫瘤細胞，但骨髓毒性高、要頻繁回診監控。節拍式化療是低劑量口服持續給藥（像 Cyclophosphamide 10 到 15 mg/m²/day 加 Piroxicam），目標是抑制血管新生而不是直接殺腫瘤，毒性低、費用低、飼主可以居家給藥。適合飼主沒辦法配合 MTD 頻繁回診的情況，或當 MTD 後的維持治療。

## 三、併發症與監控 (Complications & Monitoring)

### 副作用與監測
### 常見副作用
- 出血性膀胱炎（Cyclophosphamide）：即使低劑量仍有風險（約 5-10%）
  - 預防：鼓勵飲水、傍晚給藥（睡前排尿）
  - 症狀：血尿、頻尿 → 停藥 + 換用 Chlorambucil
- 輕度骨髓抑制：通常 Grade 1-2，罕見嚴重
- GI 症狀（NSAIDs 相關）：食慾下降、嘔吐

### 療效評估
- 穩定（Stable Disease）即為治療成功，節拍式化療的目標是控制而非縮小
- 每 2-3 個月影像學追蹤（超音波/X 光）
- RECIST 標準（若有可測量病灶）

[圖片:節拍式 vs MTD 化療用藥時程比較圖]

## 四、預後影響 (Prognostic Impact)

節拍式化療的客觀腫瘤縮小率比 MTD 化療低，但是疾病穩定率可以到 40 到 60%。對犬軟組織肉瘤（不完整切除），節拍式 Cyclophosphamide 加 Piroxicam 可以延長無病間隔期。對犬 HSA 術後，節拍式化療跟 MTD Doxorubicin 的存活期比較還沒結論，但是生活品質可能比較好。節拍式化療的優勢在於持續性抗血管新生效應，可以長期給藥維持腫瘤穩定。

## 五、人醫借鑒 (Translational Insights)

| 人醫工具/概念 | 獸醫應用潛力 | 現況 |
|-------------|-------------|------|
| 節拍式化療 + 免疫檢查點抑制劑聯合 | 犬腫瘤的 Treg 降低（節拍式 CPA）+ 免疫激活（anti-PD-1）雙重策略 | 人醫乳癌/軟組織肉瘤已有聯合試驗，犬聯合方案設計階段 |
| 抗血管新生生物標記監測（VEGF/TSP-1 血清濃度） | 犬節拍式化療療效的即時評估，個體化劑量調整依據 | 人醫已有 VEGF 監測指導方案，犬血清 VEGF 檢測技術可行但缺乏參考值 |
| 節拍式 + 標靶藥物（TKI）聯合方案 | 犬腫瘤的多靶點抗血管新生，Cyclophosphamide + Toceranib 聯合最佳化 | 犬 Toceranib + 節拍式 CPA 聯合已有回顧性報告，前瞻性最佳劑量研究進行中 |
| 口服 Temozolomide 節拍式給藥 | 犬腦腫瘤/黑色素瘤的口服節拍式替代方案，穿越血腦屏障 | 犬 Temozolomide 藥動學研究已有，但節拍式方案的療效數據極少 |

## 六、臨床爭議與知識空缺 (Controversies & Knowledge Gaps)

| 爭議議題 | 現況 | Evidence Level |
|---------|------|---------------|
| 節拍式化療 vs MTD 化療在犬 HSA 術後輔助的存活比較 | 回顧性數據提示兩者 MST 差異不大，但前瞻性 RCT 缺乏，節拍式 QoL 可能較好 | Level III |
| 節拍式 Cyclophosphamide 的最佳劑量，每日 vs 隔日 vs 週期性給藥 | 10-15 mg/m²/day 為最常引用但非經嚴格劑量尋找確定，抗血管新生最佳劑量窗口未明 | Level III |
| 節拍式化療的最佳療效評估標準，RECIST vs 疾病穩定持續時間 vs 生物標記 | RECIST 對節拍式化療不敏感（目標為穩定而非縮小），替代評估指標尚未標準化 | Level IV |
| 節拍式化療的最佳持續時間，持續到疾病進展 vs 固定療程 | 多數方案為持續給藥直到進展，但長期 Cyclophosphamide 的累積出血性膀胱炎風險需權衡 | Level III |`,
  clinical_pearl: '節拍式化療是「實務導向」的治療策略。飼主說「我沒辦法每週帶牠來打針」或「化療費用太高」的時候，節拍式化療就是一個居家口服、費用比較低、副作用比較輕的替代方案。它的療效數據雖然沒有 MTD 化療那麼強，但是對很多沒辦法接受傳統化療的患者來說，至少有個「做點什麼」的選項。提醒：就算是低劑量 Cyclophosphamide，出血性膀胱炎還是可能發生，要交代飼主注意尿液顏色變化。',
  common_mistakes: [
    '期望節拍式化療能像 MTD 化療一樣快速縮小腫瘤：節拍式化療的目標是穩定不是消退',
    '忘記監測 Cyclophosphamide 的出血性膀胱炎：低劑量還是有 5 到 10% 風險',
    '沒搭配 NSAIDs：NSAIDs 的抗血管新生跟免疫調節作用是節拍式化療的重要組成',
    '把節拍式化療看成「什麼都沒做」：它的抗血管新生跟免疫調節機轉有科學依據',
    '沒定期（每 2 到 4 週）監測 CBC：就算副作用輕微還是要追蹤',
  ],
  disease_data: null,
  diagnostic_data: null,
  procedure_data: null,
  visual_placeholders: [
    { position: 'MTD vs 節拍式比較表後', type: 'comparison_table', description: 'MTD vs 節拍式化療全面比較圖' },
    { position: '抗血管新生段落後', type: 'animated_diagram', description: '節拍式化療抗血管新生機轉動態圖' },
  ],
  interactive_placeholders: [],
  drug_api_links: ['Cyclophosphamide', 'Piroxicam', 'Chlorambucil', 'Meloxicam', 'Toceranib'],
  references: [
    { type: 'textbook', citation: 'Vail DM, Thamm DH, Liptak JM. Withrow & MacEwen\'s Small Animal Clinical Oncology, 6th ed. Elsevier, 2020. Chapter 9: Chemotherapy，Metronomic Section.', relevance: '節拍式化療章節' },
    { type: 'journal', citation: 'Leach TN et al. Prospective trial of metronomic chlorambucil chemotherapy in dogs with naturally occurring cancer. Vet Comp Oncol. 2012;10(2):102-112.', relevance: '節拍式 Chlorambucil 前瞻性試驗' },
    { type: 'journal', citation: 'Burton JH et al. Low-dose cyclophosphamide selectively decreases regulatory T cells and inhibits angiogenesis in dogs with soft tissue sarcoma. J Vet Intern Med. 2011;25(4):920-926.', relevance: '犬低劑量 Cyclophosphamide 的免疫調節和抗血管新生機轉' },
    { type: 'guideline', citation: 'VCOG，Veterinary Cooperative Oncology Group. Common Terminology Criteria for Adverse Events (VCOG-CTCAE) v2. Vet Comp Oncol. 2016;14(4):417-446.', relevance: '節拍式化療副作用分級與監測標準' },
  ],
  is_current: true,
  created_at: now,
};

/** 腫瘤微環境，機轉型 */
const contentTME: NodeContent = {
  id: 'CONTENT-ONCO-L2-004',
  node_id: 'ONCO-L2-004',
  version: 1,
  summary: '腫瘤微環境（Tumor Microenvironment, TME）指的是腫瘤細胞周圍由免疫細胞、纖維母細胞、血管內皮細胞、細胞外基質跟可溶性因子組成的複雜生態系統。TME 不只支持腫瘤生長跟轉移，還透過免疫抑制機轉幫助腫瘤逃脫宿主免疫監控。理解 TME 是當代免疫治療（像 PD-1/PD-L1 免疫檢查點抑制劑）跟抗血管新生治療的理論基礎。',
  learning_objectives: [
    '描述腫瘤微環境的主要細胞組成及其功能角色',
    '說明腫瘤相關巨噬細胞（TAM）的 M1/M2 極化及其對腫瘤進展的影響',
    '解釋癌症相關纖維母細胞（CAF）如何促進腫瘤生長與轉移',
    '列出免疫檢查點分子（PD-1/PD-L1、CTLA-4）在 TME 免疫逃脫中的角色',
    '說明腫瘤血管新生（angiogenesis）的機轉與 VEGF 信號通路',
    '比較「冷腫瘤」與「熱腫瘤」的 TME 特徵及其對免疫治療反應的影響',
  ],
  key_points: [
    'TME 由腫瘤細胞、免疫細胞（T 細胞、TAM、MDSC、Treg）、CAF、血管內皮細胞和 ECM 組成',
    'TAM 以 M2 極化為主（促腫瘤表型）：分泌 IL-10、TGF-β → 抑制抗腫瘤免疫 + 促進血管新生',
    'CAF 分泌生長因子（HGF、FGF）和 ECM 重塑酶（MMP）→ 促進腫瘤浸潤和轉移',
    '免疫檢查點：PD-1（T 細胞）與 PD-L1（腫瘤細胞/APC）結合 → T 細胞耗竭（exhaustion）→ 免疫逃脫',
    'VEGF 驅動腫瘤血管新生：新生血管結構異常（高通透性、無周皮細胞覆蓋）→ 缺氧 + 免疫細胞浸潤受阻',
    'Treg 和 MDSC 在 TME 中累積 → 抑制效應 T 細胞功能 → 免疫抑制微環境',
    '犬腫瘤 PD-L1 表達已被證實：犬口腔黑色素瘤、MCT、乳腺癌等均有報告',
    '「熱腫瘤」（T 細胞浸潤多）對免疫治療反應較好；「冷腫瘤」（免疫荒漠）需策略性活化',
  ],
  body: `# 腫瘤微環境 (Tumor Microenvironment, TME)

## 一、核心概念 (Core Concept)

腫瘤不僅是癌細胞的集合體，更是一個由多種細胞和非細胞成分構成的複雜「器官」。腫瘤微環境（TME）涵蓋了腫瘤細胞周圍所有的基質細胞（stromal cells）、免疫細胞、血管系統、細胞外基質（ECM）和可溶性因子（細胞激素、趨化因子、生長因子）。TME 與腫瘤細胞之間存在持續的雙向溝通（crosstalk），共同決定腫瘤的生長速率、侵襲能力、轉移潛力和治療反應。

## 二、TME 的主要細胞組成

### 1. 腫瘤相關巨噬細胞（Tumor-Associated Macrophages, TAM）
TAM 是 TME 中數量最多的免疫細胞。在腫瘤的影響下，TAM 以 M2 極化（促腫瘤表型）為主：

- M1 表型（抗腫瘤）：分泌 TNF-α、IL-12、iNOS → 殺傷腫瘤細胞
- M2 表型（促腫瘤）：分泌 IL-10、TGF-β、VEGF → 免疫抑制 + 血管新生 + ECM 重塑

TAM 密度高與多種犬貓腫瘤的不良預後相關，包括犬乳腺腫瘤和口腔黑色素瘤。

### 2. 癌症相關纖維母細胞（Cancer-Associated Fibroblasts, CAF）
CAF 是 TME 中主要的基質細胞，由正常纖維母細胞在腫瘤信號的作用下活化而來：

- 分泌生長因子：HGF、FGF、SDF-1 → 促進腫瘤細胞增殖和遷移
- ECM 重塑：分泌膠原蛋白、纖維連接蛋白和 MMP → 形成有利於浸潤的基質
- 促進 EMT：透過 TGF-β 等信號促進腫瘤細胞上皮-間質轉化
- 免疫排斥：形成緻密的纖維化屏障阻止 T 細胞浸潤（desmoplastic reaction）

### 3. 調節性 T 細胞（Treg）與骨髓來源抑制細胞（MDSC）
- Treg（CD4+CD25+FoxP3+）：在 TME 中被腫瘤來源 TGF-β 和 IDO 招募並擴增，抑制 CD8+ 效應 T 細胞
- MDSC：異質性骨髓細胞群，透過 arginase-1、iNOS 和 ROS 產生 → 抑制 T 細胞活化和增殖

### 4. 血管內皮細胞與腫瘤血管新生
腫瘤透過 VEGF/VEGFR 信號通路驅動新血管生成（angiogenesis）。腫瘤新生血管結構異常：
- 血管壁不完整、缺乏周皮細胞覆蓋 → 高通透性 → 組織間隙壓力升高
- 血流紊亂 → 缺氧微環境 → HIF-1α 上調 → 更多 VEGF 分泌（惡性循環）
- 免疫細胞進入困難 → 「免疫冷」表型

## 三、免疫逃脫機轉 (Immune Evasion)

### 免疫檢查點（Immune Checkpoints）
- PD-1/PD-L1 軸：活化 T 細胞表達 PD-1，腫瘤細胞和 TAM 上調 PD-L1 → PD-1/PD-L1 結合 → T 細胞功能耗竭
- CTLA-4：與 CD28 競爭結合 B7（CD80/CD86）→ 抑制 T 細胞初始活化
- LAG-3、TIM-3、TIGIT：新興免疫檢查點，在犬腫瘤中的表達已有初步報告

犬口腔黑色素瘤的 PD-L1 表達已被多項研究證實，成為犬免疫治療的重要靶點。日本 Kindred Biosciences 已開發犬 PD-1 抗體（c4G12）進入臨床試驗。

### 免疫抑制性代謝微環境
- IDO（indoleamine 2,3-dioxygenase）：消耗色胺酸 → T 細胞增殖受抑
- 腺苷 A2A 受體：TME 中 ATP 降解產生腺苷 → 抑制 T 細胞和 NK 細胞
- 乳酸堆積：Warburg 效應 → TME 酸化 → T 細胞功能受損

## 四、獸醫臨床意義 (Veterinary Clinical Relevance)

### 犬腫瘤 TME 研究進展
| 腫瘤類型 | TME 特徵 | 臨床意義 |
|---------|----------|---------|
| 犬口腔黑色素瘤 | PD-L1 高表達，TIL 浸潤 | 犬 PD-1 抗體臨床試驗 |
| 犬 MCT | TAM 浸潤，c-KIT 驅動的 VEGF | TKI（Toceranib）抗血管新生 |
| 犬 OSA | 免疫抑制性 TME，低 TIL | 免疫治療挑戰性高 |
| 犬 HSA | 高度血管化，VEGF 驅動 | Toceranib 輔助治療 |
| 犬乳腺腫瘤 | TAM 密度與分級相關 | TAM 作為預後生物標記 |

### 治療策略中的 TME 靶向
1. 抗血管新生：Toceranib（VEGFR-TKI）已 FDA 核准用於犬 MCT，同時抑制腫瘤血管新生
2. 免疫檢查點抑制：犬 PD-1 抗體、犬 CTLA-4 抗體，多個獸醫免疫治療臨床試驗進行中
3. 節拍式化療：低劑量 cyclophosphamide 可選擇性減少 Treg + 抗血管新生效應
4. 腫瘤疫苗：犬口腔黑色素瘤 DNA 疫苗（ONCEPT），USDA 核准（2007 條件性、2010 完全核准）

## 五、「熱腫瘤」vs「冷腫瘤」

免疫腫瘤學的核心概念是將腫瘤分為：
- 熱腫瘤（Hot tumor）：T 細胞浸潤豐富、PD-L1 表達高 → 免疫檢查點抑制劑反應率高
- 冷腫瘤（Cold tumor）：T 細胞浸潤少（免疫荒漠）→ 免疫治療反應差
- 免疫排斥型（Immune-excluded）：T 細胞被困在腫瘤邊緣無法進入 → 需破壞基質屏障

[圖片:TME 細胞組成與交互作用示意圖]

## 六、人醫借鑒與展望 (Translational Insights)

| 人醫工具/概念 | 獸醫應用潛力 | 現況 |
|-------------|-------------|------|
| PD-1/PD-L1 抑制劑（Nivolumab/Pembrolizumab） | 犬 PD-1 抗體用於口腔黑色素瘤等 | 犬 c4G12 臨床試驗中（日本） |
| CAR-T 細胞療法 | 犬腫瘤的過繼性細胞免疫治療 | 犬 CD20-CAR-T 淋巴瘤試驗中 |
| 腫瘤突變負荷（TMB）預測免疫治療反應 | 犬腫瘤 TMB 與免疫治療反應的相關性 | 犬腫瘤 WES 數據累積中 |
| 雙特異性抗體（BiTE） | 犬腫瘤的 T 細胞導向免疫療法 | 概念驗證階段 |`,
  clinical_pearl: '理解 TME 的臨床重要性：Toceranib（Palladia）的療效不只是直接抑制腫瘤細胞的受體酪胺酸激酶，更透過 VEGFR 抑制阻斷腫瘤血管新生、調節 TME 中的免疫反應。這就解釋了為什麼 Toceranib 對不帶 c-KIT 突變的腫瘤還可能有效，因為它的抗 TME 效應是廣譜的。同樣道理，節拍式化療的抗腫瘤機轉也主要作用在 TME（抗血管新生加 Treg 減少），而不是直接殺傷腫瘤細胞。',
  common_mistakes: [
    '把腫瘤看成單純的癌細胞集合體而忽略 TME 的角色：TME 會決定治療反應跟預後',
    '以為所有免疫浸潤都是抗腫瘤的：TAM（M2）跟 Treg 實際上會促進腫瘤進展',
    '不理解 TKI（像 Toceranib）的多靶點作用：療效部分來自 TME 調節，不只是靶向腫瘤細胞',
    '忽略缺氧微環境對治療的影響：腫瘤缺氧會降低放射線治療跟化療的效果',
  ],
  disease_data: null,
  diagnostic_data: null,
  procedure_data: null,
  visual_placeholders: [
    { position: 'TME 細胞組成段落後', type: 'animated_diagram', description: 'TME 細胞組成與交互作用動態圖' },
    { position: '免疫檢查點段落後', type: 'flowchart', description: 'PD-1/PD-L1 免疫逃脫機轉圖' },
  ],
  interactive_placeholders: [],
  drug_api_links: ['Toceranib', 'Cyclophosphamide'],
  references: [
    { type: 'textbook', citation: 'Vail DM, Thamm DH, Liptak JM. Withrow & MacEwen\'s Small Animal Clinical Oncology, 6th ed. Elsevier, 2020. Chapter 2: Tumor Biology，Tumor Microenvironment Section.', relevance: '腫瘤微環境基礎章節' },
    { type: 'journal', citation: 'Maekawa N et al. A canine chimeric monoclonal antibody targeting PD-L1 and its clinical efficacy in canine oral malignant melanoma or undifferentiated sarcoma. Sci Rep. 2017;7(1):8951.', relevance: '犬 PD-L1 抗體臨床效果' },
    { type: 'journal', citation: 'Hanahan D, Weinberg RA. Hallmarks of cancer: the next generation. Cell. 2011;144(5):646-674.', relevance: '癌症標誌，腫瘤微環境作為新興標誌' },
    { type: 'guideline', citation: 'Bergman PJ et al. Development of a xenogeneic DNA vaccine program for canine malignant melanoma at the Animal Medical Center. Vaccine. 2006;24(21):4582-4585.', relevance: '犬黑色素瘤 DNA 疫苗，TME 免疫調節策略' },
  ],
  is_current: true,
  created_at: now,
};

/** 軟組織肉瘤，疾病型 */
const contentSTS: NodeContent = {
  id: 'CONTENT-ONCO-L3-009',
  node_id: 'ONCO-L3-009',
  version: 2,
  summary: '軟組織肉瘤（Soft Tissue Sarcoma, STS）是一群源自間葉組織的惡性腫瘤，包括纖維肉瘤、血管外膜細胞瘤、神經鞘瘤、脂肪肉瘤跟黏液肉瘤這些。共同特徵是局部侵襲性高但轉移率相對低（Grade I/II 不到 20%）。組織學分級（Grade I/II/III）是最重要的預後因子。手術治療要廣泛切緣（lateral 至少 3 cm 加 deep 至少一個 fascial plane），切緣不夠是局部復發的首要原因。',
  learning_objectives: [
    '列出 STS 所涵蓋的主要組織學亞型',
    '說明 STS 三級組織學分級系統（Kuntz et al.）及其預後意義',
    '描述 STS 廣泛手術切緣的標準與原理',
    '比較 STS 的局部復發率與遠端轉移率',
    '擬定 STS 的完整分期與治療計畫',
  ],
  key_points: [
    'STS 為一群間葉來源腫瘤的統稱，包括纖維肉瘤、血管外膜細胞瘤（perivascular wall tumor）、周邊神經鞘瘤、脂肪肉瘤、黏液肉瘤等',
    '共同特性：局部侵襲性高（假性包膜外有腫瘤細胞浸潤）但轉移率相對低',
    '三級分級：Grade I（低度，有絲分裂指數 < 9/10 HPF）、Grade II（中度）、Grade III（高度，≥ 20/10 HPF）。分級是最重要的「轉移/存活」預後因子；而「局部復發」主要取決於手術切緣完整性',
    'Grade I/II 轉移率 < 20%；Grade III 轉移率可達 40-50%',
    '手術切緣標準：lateral ≥ 3 cm + deep ≥ 1 fascial plane（比 MCT 更寬）',
    '不完全切除後局部復發率約 30-75%，完全切除後降至 7-15%',
    '好發於四肢和軀幹的皮下組織，中大型犬較常見',
    'FNA 細胞學診斷率低（間葉細胞剝離性差），常需切開或切除活檢確認',
  ],
  body: `# 軟組織肉瘤 (Soft Tissue Sarcoma, STS)

## 一、概述 (Overview)

軟組織肉瘤是一群源自間葉組織（mesenchymal tissue）的惡性腫瘤統稱。之所以把這些組織學亞型歸成一組，是因為它們的生物行為相似：局部侵襲性高，但遠端轉移率相對低。STS 大約占犬所有皮膚及皮下腫瘤 15%，好發部位是四肢跟軀幹。

### 主要組織學亞型
- 纖維肉瘤（Fibrosarcoma）：最常見亞型之一
- 血管外膜細胞瘤（Perivascular wall tumor / Hemangiopericytoma）：現已重新分類
- 周邊神經鞘瘤（Peripheral nerve sheath tumor, PNST）
- 脂肪肉瘤（Liposarcoma）
- 黏液肉瘤（Myxosarcoma）
- 間葉瘤（Mesenchymoma）
- 未分化肉瘤（Undifferentiated sarcoma）

## 二、臨床表現 (Clinical Signs)

STS 典型表現是緩慢生長的皮下腫塊，觸診質地堅實，通常跟皮下組織黏連但表面皮膚可能還正常。腫塊常常被飼主忽略到很大才就診。

關鍵臨床特徵：好發在四肢（尤其遠端）跟軀幹，緩慢生長（幾週到幾個月），觸診堅實、邊界不清，通常不會痛（除非壓迫神經，PNST 會跛行），大型或快速生長的可能表面皮膚潰瘍。

## 三、分級系統 (Grading)

### 三級組織學分級（Kuntz et al. / McSporran）
STS 的組織學分級是最重要的預後因子：

| 項目 | Grade I（低度） | Grade II（中度） | Grade III（高度） |
|------|----------------|-----------------|------------------|
| 分化程度 | 良好 | 中等 | 差 |
| 有絲分裂指數 | < 9/10 HPF | 10-19/10 HPF | ≥ 20/10 HPF |
| 壞死 | < 10% | 10-50% | > 50% |
| 局部復發率 | 7-15%（完全切除） | 20-35% | 35-75% |
| 轉移率 | < 15% | 15-20% | 40-50% |

## 四、診斷 (Diagnosis)

### FNA 細胞學的限制
STS 的 FNA 細胞學診斷率較低（約 50-60%），因為：
- 間葉細胞剝離性差，取得細胞量少
- 細胞學下紡錘形細胞的惡性度難以判斷
- 無法準確區分亞型或分級

所以，組織活檢（incisional biopsy 或 excisional biopsy）是確診和分級的必要步驟。

### 分期檢查
1. 切開活檢或楔形活檢（術前規劃切除範圍）
2. 區域淋巴結評估（FNA，STS 淋巴結轉移率低但仍需評估）
3. 胸腔三面 X 光（肺轉移篩檢）
4. 腹部超音波（視腫瘤位置）
5. CT/MRI（四肢腫塊，評估浸潤深度、與血管神經的關係，手術規劃必備）

## 五、治療 (Treatment)

### 手術：治療核心
- 廣泛切除：lateral ≥ 3 cm + deep ≥ 1 fascial plane
- 假性包膜（pseudocapsule）不是真正的邊界，外側仍有腫瘤細胞浸潤
- 四肢遠端：切緣受限時考慮截肢
- 術前 CT/MRI 是四肢 STS 手術規劃的關鍵

### 輔助放射線治療
- 切緣不完全（dirty margin）或切緣狹窄（close margin）：術後放療可降低局部復發率至 15-20%
- 術前放療：縮小腫瘤體積，改善手術切除範圍
- 等效果為 16-19 次分次照射，總劑量 48-57 Gy

### 化療
- Grade I/II：切緣完全時通常不需化療
- Grade III：考慮輔助化療（Doxorubicin ± Cyclophosphamide）降低轉移風險
- 節拍式化療：Cyclophosphamide + Piroxicam 可作為姑息或維持選項

## 六、預後 (Prognosis)

- Grade I + 完全切除：中位存活 > 3 年，局部復發率 7-15%
- Grade II + 完全切除：中位存活 2-3 年
- Grade III + 完全切除：中位存活約 1 年，轉移率 40-50%
- 不完全切除不加放療：局部復發率 30-75%（視分級而定）
- 截肢：四肢 STS 截肢後局部控制率極高（> 95%）

## 七、監控 (Monitoring)

- 術後每 3 個月追蹤手術部位和區域淋巴結（共 2 年）
- 胸腔 X 光：Grade III 每 3 個月、Grade I/II 每 6 個月
- 局部復發最常在術後 1 年內發生
- 影像學追蹤評估軟組織腫塊復發（超音波或 CT）

[圖片:STS 手術切緣示意圖，假性包膜與真正切緣的差異]

## 八、人醫借鑒 (Translational Insights)

| 人醫工具/概念 | 獸醫應用潛力 | 現況 |
|-------------|-------------|------|
| FNCLCC 三級分級系統（人類 STS 標準） | 犬 STS 分級概念同源；犬 STS 為人類 STS 的自然發生模型 | 人醫標準，獸醫 Kuntz/McSporran 分級與之平行，跨物種轉譯研究進行中 |
| 新輔助（術前）放射治療 | 縮小腫瘤、改善切除完整性、提高保肢機會 | 人類肢體 STS 標準流程之一，獸醫漸增採用 |
| 節拍式（metronomic）抗血管新生化療 | 術後維持、降低不完全切除後復發 | 概念源自人醫，獸醫 Elmslie 2008 RCT 驗證 |
| 多學科 sarcoma team + MRI 手術規劃 | 保肢手術的影像導引與整合決策 | 人醫 sarcoma centre 模式，獸醫轉介中心逐步建立 |

## 九、臨床爭議與知識空缺 (Controversies & Knowledge Gaps)

| 爭議議題 | 現況 | Evidence Level |
|---------|------|---------------|
| 「固定 3 cm 廣泛切緣」是否一律必要 | 小型、低度（Grade I）STS 以較窄/邊緣切除，局部控制率仍可接受 → 支持依分級與大小個體化切緣，而非一律 3 cm（Stefanello 2008、Bray 2014） | Level III |
| Grade III STS 輔助 doxorubicin 的存活效益 | 臨床常用以降低轉移風險，但缺乏明確顯示延長存活的前瞻性證據 | Level III |
| 不完全切除後：再次手術 vs 放療 vs 節拍式化療 | 三者皆為合理選項，最佳排序尚未確立；節拍式 cyclophosphamide 可顯著延遲復發（Elmslie 2008） | Level II |
| 分級系統的觀察者間一致性與有絲分裂計數標準化 | 不同病理醫師對同一腫瘤的分級/MI 計數可能不一致，影響預後判讀 | Level III |

## 十、近期實證更新 (Recent Evidence Updates)

### 切緣「少即是多」：低度 STS 不必過度截肢
近年實證顯示，小型、低度（Grade I）STS 即使以邊緣/窄切緣切除，局部復發率仍在可接受範圍（Stefanello 2008 犬肢端低度紡錘細胞肉瘤、Bray 2014 第一線臨床實務 350 例）。臨床意涵：手術切緣應依「分級＋大小＋部位」個體化規劃，避免對低度小腫瘤一律施行廣泛切除或截肢；高度（Grade III）或大型腫瘤仍須積極廣泛切緣。

### 節拍式化療鞏固不完全切除後的局部控制
Elmslie 2008 RCT 證實 cyclophosphamide + piroxicam 節拍式化療能顯著延遲不完全切除 STS 的局部復發，成為「切緣不足、又無法再手術或放療」時的實證選項，且口服、低毒、適合居家長期給藥。

### 預後工具與新興治療
有絲分裂計數精化、Ki-67 等增殖標記與預後 nomogram（Bray 2023）逐步輔助個體化預後評估；立體定位放射治療（SRT）用於不可切除或保肢病例漸增；toceranib（Palladia）對部分 STS 顯示姑息性活性（仍屬研究階段，非一線）。`,
  clinical_pearl: '千萬不要沿假性包膜（pseudocapsule）做「剝離式」（shell-out）切除，這是 STS 局部復發的首要原因。假性包膜是壓迫性纖維組織構成，外側其實還有浸潤性腫瘤細胞。術前影像學（CT/MRI）評估浸潤範圍對規劃廣泛切緣很關鍵。另外，FNA 細胞學看到「紡錘形細胞」不等於 STS：反應性纖維增生、肉芽組織、甚至紡錘形 MCT 都可能有類似表現，切開活檢才能確定診斷跟分級。\n\n【台灣流行病學】STS 在台灣犬是常見的皮下惡性腫瘤。四肢 STS 因為切緣受限常常要截肢，台灣飼主因為文化因素接受度比較低，術前充分溝通不能省。CT 術前規劃在台灣大型動物醫院都能執行。輔助放射線治療在台灣可及性有限，要轉診到有放療設備的教學醫院。',
  common_mistakes: [
    '沿假性包膜剝離切除（shell-out 或 marginal excision）而不是廣泛切緣，局部復發率會明顯飆高',
    '只憑 FNA 細胞學「紡錘形細胞」就診斷 STS 而沒做組織活檢分級',
    '沒做術前影像學（CT/MRI）就動手術，沒辦法準確規劃切除範圍',
    '對 Grade I/II STS 不必要地做化療：完全切除大部分低度 STS 就能治癒',
    '忽略 Grade III STS 的轉移風險，只處理局部問題',
  ],
  disease_data: {
    signalment: '中老年犬，中位年齡 9 到 11 歲，中大型犬比較常見。沒有明顯品種或性別偏好，但大型犬因為體表面積大所以報告數比較多。',
    etiology: '確切病因還沒搞清楚。大多數 STS 是自發性的。注射部位肉瘤（vaccine-associated 或 injection-site sarcoma）在貓比較有名，犬偶爾有報告。慢性異物反應、輻射暴露可能是潛在風險因子。',
    pathogenesis: '間葉幹細胞或分化的間葉細胞發生基因突變（p53、Rb 這些抑癌基因失活），克隆性增殖之後形成假性包膜（壓迫性纖維，不是真正邊界），腫瘤細胞沿筋膜面跟組織間隙浸潤，局部侵襲擴大，Grade III 者可能經血行轉移到肺。',
    clinical_signs: [
      { sign: '皮下堅實腫塊', category: 'primary', description: '緩慢生長，觸診堅實，邊界不清，跟深層組織黏連，好發在四肢跟軀幹' },
      { sign: '腫塊無疼痛', category: 'primary', description: '多數 STS 不會引起疼痛，除非壓迫神經（PNST）或長到很大' },
      { sign: '跛行', category: 'secondary', description: '四肢 STS 壓迫神經或侵犯關節時會出現，PNST 特別常見' },
      { sign: '表面潰瘍', category: 'secondary', description: '大型或快速生長的 STS 可能導致表面皮膚壞死潰瘍' },
      { sign: '運動受限', category: 'secondary', description: '大型四肢 STS 會影響關節活動度' },
    ],
    staging: {
      system: 'STS Histologic Grading System (Kuntz et al.)',
      stages: [
        'Grade I（低度）：分化良好，有絲分裂 < 9/10 HPF，壞死 < 10%',
        'Grade II（中度）：中度分化，有絲分裂 10-19/10 HPF，壞死 10-50%',
        'Grade III（高度）：分化不良，有絲分裂 ≥ 20/10 HPF，壞死 > 50%',
      ],
    },
    differential_diagnosis: [
      { condition: '脂肪瘤', key_differentiator: '觸診柔軟可移動，FNA 看到脂肪細胞；浸潤性脂肪瘤可能會模擬 STS，但 FNA 跟組織學可以區分' },
      { condition: '肥大細胞瘤（MCT）', key_differentiator: 'FNA 看到嗜鹼性顆粒的圓形細胞，不是紡錘形細胞；紡錘形 MCT 雖然罕見但有' },
      { condition: '注射部位反應/肉芽腫', key_differentiator: '有注射部位病史，通常小於 2 cm 而且 3 個月內會消退；持續變大就要活檢排除' },
      { condition: '血管肉瘤（Cutaneous HSA）', key_differentiator: '皮膚或皮下出血性腫塊，FNA 常看到大量血液；組織學看得到異型血管腔' },
      { condition: '黑色素瘤', key_differentiator: 'FNA 看到含黑色素顆粒的圓形或紡錘形細胞，Melan-A/PNL-2 免疫染色陽性' },
    ],
    diagnostic_workup: '流程：FNA 細胞學（初步篩檢，但診斷率只有 50 到 60%），切開活檢（incisional biopsy）確診跟分級，胸腔三面 X 光做肺轉移篩檢，區域淋巴結 FNA，最後 CT/MRI（四肢 STS 手術規劃必備，評估浸潤範圍跟血管神經關係）。',
    treatment_protocol: '手術是治療核心：廣泛切除 lateral 至少 3 cm 加 deep 至少一個 fascial plane。四肢遠端切緣不夠就考慮截肢。不完全切除的話用術後放療（48-57 Gy 分 16-19 次）降低復發率。Grade III 考慮 Doxorubicin 加減 Cyclophosphamide 輔助化療。姑息性處理用節拍式 Cyclophosphamide 加 Piroxicam。',
    prognosis: 'Grade I 加完全切除中位存活超過 3 年，局部復發率 7 到 15%。Grade II 加完全切除中位存活大約 2 到 3 年。Grade III 中位存活約 1 年，轉移率 40 到 50%。不完全切除（不加放療）局部復發率 30 到 75%。手術切緣狀態是局部控制最關鍵的因子。',
    monitoring: '術後每 3 個月回診評估手術部位（觸診加超音波）跟區域淋巴結，追蹤 2 年。胸腔 X 光部分，Grade III 每 3 個月、Grade I/II 每 6 個月追蹤肺轉移。局部復發最常在術後 6 到 12 個月內發生。',
    owner_communication: 'STS 好消息是轉移率相對低（特別是 Grade I/II），手術切乾淨治癒率高。壞消息是切緣要很寬，四肢腫瘤可能要截肢。術前影像學規劃可以幫忙判斷能不能保肢。如果切緣不夠，放射線治療是有效的輔助手段。建議術前充分討論所有治療選項跟費用預估。',
  },
  diagnostic_data: null,
  procedure_data: null,
  visual_placeholders: [
    { position: '分級系統表格後', type: 'comparison_table', description: 'STS Grade I/II/III 預後比較圖' },
    { position: '手術段落後', type: 'annotated_image', description: 'STS 手術切緣示意圖（假性包膜 vs 廣泛切緣）' },
  ],
  interactive_placeholders: [],
  drug_api_links: ['Doxorubicin', 'Cyclophosphamide', 'Piroxicam'],
  references: [
    { type: 'textbook', citation: 'Vail DM, Thamm DH, Liptak JM. Withrow & MacEwen\'s Small Animal Clinical Oncology, 6th ed. Elsevier, 2020. Chapter 21: Soft Tissue Sarcomas.', relevance: 'STS 完整章節' },
    { type: 'journal', citation: 'Kuntz CA, Dernell WS, Powers BE, et al. Prognostic factors for surgical treatment of soft-tissue sarcomas in dogs: 75 cases (1986-1996). J Am Vet Med Assoc. 1997;211(9):1147-1151. doi:10.2460/javma.1997.211.09.1147.', relevance: 'STS 分級與預後經典文獻' },
    { type: 'journal', citation: 'McSporran KD. Histologic grade predicts recurrence for marginally excised canine subcutaneous soft tissue sarcomas. Vet Pathol. 2009;46(5):928-933. doi:10.1354/vp.08-vp-0277-m-fl.', relevance: 'STS 切緣與分級對復發的預測' },
    { type: 'journal', citation: 'Elmslie RE, Glawe P, Dow SW. Metronomic therapy with cyclophosphamide and piroxicam effectively delays tumor recurrence in dogs with incompletely resected soft tissue sarcomas. J Vet Intern Med. 2008;22(6):1373-1379. doi:10.1111/j.1939-1676.2008.0179.x.', relevance: '節拍式化療延遲不完全切除 STS 復發的 RCT' },
    { type: 'journal', citation: 'Stefanello D, Morello E, Roccabianca P, et al. Marginal excision of low-grade spindle cell sarcoma of canine extremities: 35 dogs. Vet Surg. 2008;37(5):461-465. doi:10.1111/j.1532-950x.2008.00408.x.', relevance: '低度 STS 邊緣切除局部控制可接受（個體化切緣證據）' },
    { type: 'journal', citation: 'Bray JP, Polton GA, McSporran KD, et al. Canine soft tissue sarcoma managed in first opinion practice: outcome in 350 cases. Vet Surg. 2014;43(7):774-782. doi:10.1111/j.1532-950x.2014.12185.x.', relevance: '第一線臨床實務大型 STS 切緣與預後資料' },
    { type: 'textbook', citation: 'Ehrhart NP, et al. Principles of Musculoskeletal Oncology in Dogs and Cats. In: Johnston SA, Tobias KM. Veterinary Surgery: Small Animal, 2nd ed. Elsevier, 2018.', relevance: 'STS 手術原則與切緣建議' },
  ],
  is_current: true,
  created_at: now,
};

/** 肛囊腺癌，疾病型 */
const contentASAC: NodeContent = {
  id: 'CONTENT-ONCO-L3-010',
  node_id: 'ONCO-L3-010',
  version: 2,
  summary: '犬肛囊腺癌（Anal Sac Adenocarcinoma, ASAC / Apocrine Gland Adenocarcinoma of the Anal Sac）是犬肛囊頂泌腺體的惡性腫瘤。大約 25 到 50% 病例確診時會伴有副腫瘤性高血鈣。腹下淋巴結（sublumbar lymph node）轉移率很高，確診時大約 50 到 96% 已經有轉移，是重要的預後因子。手術切除是治療首選，術後輔助化療或放療可以延長存活時間，中位存活大約 12 到 18 個月。',
  learning_objectives: [
    '說明 ASAC 副腫瘤性高血鈣的發生機轉與臨床表現',
    '描述腹下淋巴結轉移在 ASAC 分期中的重要性',
    '擬定 ASAC 的完整分期檢查流程',
    '比較 ASAC 單純手術與手術加輔助治療的預後差異',
    '辨識 ASAC 與其他肛門區腫瘤的鑑別診斷',
  ],
  key_points: [
    'ASAC 起源於肛囊的頂泌腺體（apocrine gland），為犬肛門區域最常見的惡性腫瘤',
    '副腫瘤性高血鈣發生率 25-50%：腫瘤分泌 PTHrP → 高血鈣 → 多尿多渴、食慾下降、嗜睡',
    '腹下淋巴結（sublumbar / medial iliac）轉移率極高，確診時 50-96% 已有轉移',
    '直腸觸診可觸及肛囊腫塊和/或腹下淋巴結腫大',
    '手術切除（肛囊腫塊 ± 腹下淋巴結）為治療首選',
    '手術 + 化療（Carboplatin 或 Mitoxantrone）可延長存活至 15-24 個月',
    '腫瘤大小、淋巴結轉移和高血鈣是主要預後因子',
    '好發於中老年犬（中位年齡 10-11 歲），英國可卡犬和德國牧羊犬等有較高發病率',
  ],
  body: `# 肛囊腺癌 (Anal Sac Adenocarcinoma, ASAC)

## 一、概述 (Overview)

犬肛囊腺癌源自肛囊壁的頂泌腺體（apocrine gland），是犬肛門區域最重要的惡性腫瘤。雖然發病率不算最高，但是因為高轉移率跟副腫瘤症候群的特殊性，臨床上很受重視。很多病例是在例行直腸觸診或因為高血鈣症狀就診時意外發現的。

## 二、臨床表現 (Clinical Signs)

### 局部症狀
- 肛門區腫塊（可能僅在直腸觸診時發現）
- 排便困難（tenesmus），腫塊壓迫直腸
- 排便帶血或黏液
- 肛門區舔舐增加
- 會陰部腫脹

### 副腫瘤性高血鈣（Paraneoplastic Hypercalcemia）
ASAC 是犬高血鈣最常見的腫瘤原因之一（僅次於淋巴瘤），發生率約 25-50%：
- 腫瘤分泌副甲狀腺素相關蛋白（PTHrP）→ 破骨細胞活化 + 腎臟鈣重吸收增加
- 臨床表現：多尿多渴（PU/PD）、食慾下降、嗜睡、肌肉無力
- 嚴重時：心律不整、急性腎損傷
- 血鈣 > 18 mg/dL（> 4.5 mmol/L）為緊急狀態

### 腹下淋巴結轉移
- 確診時 50-96% 已有腹下淋巴結轉移
- 腹下淋巴結極度腫大可壓迫結腸 → 排便困難
- 壓迫輸尿管 → 腎後性阻塞（少見但嚴重）

## 三、分期 (Staging)

### Modified WHO Staging
| 期別 | 定義 |
|------|------|
| T1 | 腫瘤 < 2.5 cm |
| T2 | 腫瘤 2.5-5 cm |
| T3 | 腫瘤 > 5 cm |
| N0 | 無區域淋巴結轉移 |
| N1 | 區域淋巴結轉移（sublumbar LN < 4.5 cm） |
| N2 | 區域淋巴結轉移（sublumbar LN ≥ 4.5 cm） |
| M0 | 無遠端轉移 |
| M1 | 有遠端轉移（肺、肝、脾等） |

## 四、診斷 (Diagnosis)

1. 直腸觸診：最重要的初步檢查，觸診肛囊區腫塊和腹下淋巴結
2. FNA 細胞學：肛囊腫塊和/或腹下淋巴結
3. 血液學：CBC + 全套生化（特別注意血鈣和 ionized Ca²⁺）
4. 腹部超音波：腹下淋巴結評估（大小、形態）+ 肝脾檢查
5. 胸腔 X 光：肺轉移篩檢
6. 腹部 CT：精確評估腹下淋巴結範圍，手術規劃

## 五、治療 (Treatment)

### 手術
- 肛囊切除術：完整切除肛囊及腫瘤
- 腹下淋巴結切除術：腫大的淋巴結應同時切除，多項研究顯示淋巴結切除可延長存活
- 手術技術：肛囊腫塊需避免傷及肛門括約肌；腹下淋巴結切除為腹部手術

### 輔助治療
- 化療：Carboplatin（300 mg/m² IV q3 weeks × 4-6 cycles）或 Mitoxantrone + Cyclophosphamide
- 放射線治療：術後對腹下淋巴結區域放療，可用於無法完全切除的淋巴結
- Toceranib（Palladia）：部分案例報告顯示對 ASAC 有反應

### 高血鈣的緊急處理
- 生理食鹽水靜脈輸液（優先，矯正脫水 + 促進鈣排泄）
- Furosemide（利尿排鈣）
- Dexamethasone / Prednisone（抑制 PTHrP 作用，但注意若淋巴瘤未排除則可能影響診斷）
- Bisphosphonates（Pamidronate / Zoledronate），嚴重高血鈣的輔助

## 六、預後 (Prognosis)

- 手術單獨：中位存活 12-18 個月
- 手術 + 化療：中位存活 15-24 個月
- 手術 + 放療：部分研究報告中位存活 > 20 個月
- 腫瘤大小 < 2.5 cm 預後好很多（中位存活超過 24 個月）
- 淋巴結未轉移的病例預後優於已轉移者
- 高血鈣本身不一定代表預後差（手術後常可恢復正常）

## 七、監控 (Monitoring)

- 術後每 3 個月：直腸觸診 + 血鈣 + 腹部超音波（腹下淋巴結追蹤）
- 胸腔 X 光每 3-6 個月
- 血鈣恢復正常後再次升高 → 高度懷疑復發或轉移
- 化療期間每次治療前 CBC + BCS

[圖片:ASAC 解剖位置與腹下淋巴結轉移示意圖]

## 八、人醫借鑒 (Translational Insights)

| 人醫工具/概念 | 獸醫應用潛力 | 現況 |
|-------------|-------------|------|
| PTHrP 介導之惡性體液性高血鈣（HHM） | 副腫瘤性高血鈣的機轉與處置（人醫鱗癌/腎癌同源） | 人醫 HHM 機制成熟，獸醫 AGASACA/淋巴瘤為兩大主因 |
| 區域淋巴結廓清的腫瘤學價值 | 轉移性腹下淋巴結廓清延長存活 | 人醫實體瘤淋巴廓清概念，獸醫 AGASACA 回顧支持 |
| RTK 抑制劑（TKI）標靶治療 | toceranib 用於不可切除/晚期 AGASACA | 人醫 TKI 成熟，獸醫 toceranib 已有療效報告（Heaton 2020）|
| 低分次／立體定位放療（SRT）治淋巴結 | 不可切除腹下淋巴結之放療 | 人醫盆腔放療成熟，獸醫 SRT 漸用 |

## 九、臨床爭議與知識空缺 (Controversies & Knowledge Gaps)

| 爭議議題 | 現況 | Evidence Level |
|---------|------|---------------|
| 轉移性淋巴結廓清是否延長存活 | 回顧性研究支持廓清+手術延長存活，但無 RCT | Level III |
| 輔助化療（carboplatin/mitoxantrone）效益 | 結果不一致，是否額外延長存活未定 | Level III |
| toceranib 的定位（一線 vs 救援/維持） | 有療效與臨床獲益報告（Heaton 2020），多用於晚期/不可切除 | Level III |
| 高血鈣是否為獨立預後不良因子 | 部分研究關聯較差預後，但切除後常恢復；獨立性有爭議 | Level III |

## 十、近期實證更新 (Recent Evidence Updates)

### toceranib 進入 AGASACA 治療
toceranib（Palladia）對 AGASACA 有臨床獲益/部分反應（Heaton 2020），用於不可切除、轉移或術後維持；對控制腹下淋巴結與高血鈣亦有報告。

### 淋巴結廓清的存活益處
轉移性腹下/髂內淋巴結廓清（搭配肛囊切除）與較長存活相關（Polton 2007 等）；即使已轉移，積極手術仍有意義。

### 分期-預後精緻化
腫瘤大小、淋巴結轉移程度、遠端轉移與高血鈣構成預後分層；小型（<2.5 cm）偶發於直腸觸診者預後最佳——支持中老年犬常規直腸觸診早篩。

### 放療與多模式
不可完全切除之腹下淋巴結可用放療（低分次/SRT）局部控制；手術+化療±放療的多模式為晚期主流。`,
  clinical_pearl: '直腸觸診是發現 ASAC 最重要的第一步，很多 ASAC 在腫瘤還小的時候沒有明顯外部症狀，但例行直腸觸診就能早期發現。建議所有中老年犬（特別是好發品種）的年度健檢都要納入直腸觸診。另一個臨床要點：當犬出現不明原因的高血鈣（PU/PD 加高血鈣）時，就算沒有明顯肛門症狀，也一定要做直腸觸診跟腹超，因為 ASAC 跟淋巴瘤是犬副腫瘤性高血鈣的兩大原因。\n\n【台灣流行病學】ASAC 在台灣犬不算罕見，但因為早期症狀不明顯常常被延誤診斷。台灣獸醫師應該更積極在中老年犬健檢中納入直腸觸診。英國可卡犬在台灣飼養數量不少，是好發品種之一。台灣的化療跟手術治療在主要動物醫院都做得來，但是腹下淋巴結切除需要比較高的外科技術。',
  common_mistakes: [
    '中老年犬年度健檢沒做直腸觸診：ASAC 的早期發現要靠觸診',
    '把 ASAC 引起的高血鈣歸因於其他原因而延誤診斷',
    '手術切除肛囊腫塊但忽略腹下淋巴結的評估跟切除',
    '以為腹下淋巴結轉移就不能手術：就算有淋巴結轉移，手術還是能明顯延長存活',
    '對高血鈣緊急病例直接給 corticosteroids 而沒先排除淋巴瘤：steroids 會影響淋巴瘤的後續診斷',
  ],
  disease_data: {
    signalment: '中老年犬，中位年齡 10 到 11 歲。好發品種：英國可卡犬（English Cocker Spaniel）、德國牧羊犬、英國史賓格犬（English Springer Spaniel）、Cavalier King Charles Spaniel。以前認為母犬比較好發，但近期研究兩性差異不大。',
    etiology: '確切病因還沒搞清楚。起源於肛囊壁的頂泌腺體（apocrine gland）。有品種易感性但是具體遺傳機轉還沒確定。跟肛囊炎或肛囊阻塞沒有已知因果關係。',
    pathogenesis: '肛囊頂泌腺體上皮惡性轉化後局部浸潤性生長，淋巴引流到腹下淋巴結（medial iliac lymph node），淋巴結轉移（50 到 96%），接著遠端轉移到肺、肝。腫瘤細胞會分泌 PTHrP，造成破骨細胞活化加上腎臟鈣重吸收增加，跑出副腫瘤性高血鈣（25 到 50%）。',
    clinical_signs: [
      { sign: '肛門區腫塊', category: 'primary', description: '直腸觸診可以摸到肛囊內堅實腫塊，小型腫瘤可能只有觸診時才發現' },
      { sign: '排便困難/裡急後重', category: 'primary', description: '腫塊壓迫直腸或腹下淋巴結極度腫大壓迫結腸' },
      { sign: '多尿多渴', category: 'primary', description: '副腫瘤性高血鈣（PTHrP 分泌）造成腎臟濃縮能力下降' },
      { sign: '食慾下降/嗜睡', category: 'secondary', description: '高血鈣的全身性症狀，也可能跟腫瘤進展有關' },
      { sign: '肛門區舔舐', category: 'secondary', description: '局部刺激或不適' },
    ],
    staging: {
      system: 'Modified WHO Staging for Canine ASAC',
      stages: [
        'T1N0M0：腫瘤 < 2.5 cm，無淋巴結轉移，無遠端轉移',
        'T2N0-1M0：腫瘤 2.5-5 cm，± 淋巴結轉移',
        'T3N0-2M0：腫瘤 > 5 cm，± 淋巴結轉移',
        'Any T, Any N, M1：有遠端轉移',
      ],
    },
    differential_diagnosis: [
      { condition: '肛囊炎/肛囊膿瘍', key_differentiator: '通常會伴隨急性疼痛、分泌物，觸診是液態或波動感，不是堅實腫塊' },
      { condition: '肛周腺瘤（Perianal adenoma）', key_differentiator: '好發未結紮公犬，長在肛門皮膚而不是肛囊內，通常良性' },
      { condition: '肛周腺癌（Perianal adenocarcinoma）', key_differentiator: '起源於肛周腺而不是肛囊腺，要組織學區分；肛周腺癌不會分泌 PTHrP' },
      { condition: '淋巴瘤（引起高血鈣）', key_differentiator: '直腸觸診沒有肛囊腫塊，全身淋巴結腫大，FNA 看到均質淋巴球' },
    ],
    diagnostic_workup: '流程：直腸觸診（必做，要摸肛囊腫塊跟腹下淋巴結），FNA 細胞學（肛囊腫塊加減腹下淋巴結），CBC 加全套生化（特別注意總鈣加 ionized Ca²⁺），腹超看腹下淋巴結大小跟肝脾，胸腔三面 X 光，最後腹部 CT 規劃手術，評估腹下淋巴結範圍。',
    treatment_protocol: '手術第一線：肛囊切除加減腹下淋巴結切除。輔助化療用 Carboplatin 300 mg/m² IV q3w × 4 到 6 cycles，或 Mitoxantrone 5 到 5.5 mg/m² IV q3w 加 Cyclophosphamide。輔助放療針對沒辦法完全切除的腹下淋巴結。Toceranib 3.25 mg/kg PO QOD（FDA 標準劑量；臨床常減量至 2.75 mg/kg）可以當替代或維持選項。高血鈣急救用 0.9% NaCl 輸液加 Furosemide 加減 Pamidronate。',
    prognosis: '手術單獨中位存活 12 到 18 個月。手術加化療 15 到 24 個月。腫瘤小於 2.5 cm 中位存活超過 24 個月。腫瘤超過 10 cm 或已有遠端轉移中位存活不到 6 個月。腹下淋巴結切除可以延長存活，就算已經有轉移還是建議手術。高血鈣在腫瘤切除後通常會恢復正常。',
    monitoring: '術後每 3 個月：直腸觸診加血鈣（total 加 ionized）加腹超（腹下淋巴結追蹤）加胸腔 X 光。血鈣恢復正常後再升高就要高度懷疑復發。化療期間每次治療前 CBC 加 BCS。',
    owner_communication: 'ASAC 是要積極治療的惡性腫瘤，但是手術加化療可以給出有意義的存活時間。就算有淋巴結轉移，手術還是有幫助。高血鈣是可以控制的，通常腫瘤切除後就會改善。建議飼主了解需要定期追蹤（每 3 個月），早點發現復發才能及時處理。',
  },
  diagnostic_data: null,
  procedure_data: null,
  visual_placeholders: [
    { position: '分期表格後', type: 'annotated_image', description: 'ASAC 解剖位置與腹下淋巴結轉移示意圖' },
    { position: '治療段落後', type: 'flowchart', description: 'ASAC 治療決策流程圖' },
  ],
  interactive_placeholders: [],
  drug_api_links: ['Carboplatin', 'Mitoxantrone', 'Cyclophosphamide', 'Toceranib', 'Furosemide', 'Pamidronate'],
  references: [
    { type: 'textbook', citation: 'Vail DM, Thamm DH, Liptak JM. Withrow & MacEwen\'s Small Animal Clinical Oncology, 6th ed. Elsevier, 2020. Chapter: Tumors of the Anal Sac.', relevance: 'ASAC 完整章節' },
    { type: 'journal', citation: 'Williams LE, Gliatto JM, Dernell WS, et al. Carcinoma of the apocrine glands of the anal sac in dogs: 113 cases (1985-1995). J Am Vet Med Assoc. 2003;223(6):825-831. doi:10.2460/javma.2003.223.825.', relevance: 'ASAC 大型回顧性研究，預後因子分析' },
    { type: 'journal', citation: 'Polton GA, Brearley MJ. Clinical stage, therapy, and prognosis in canine anal sac gland carcinoma. J Vet Intern Med. 2007;21(2):274-280. doi:10.1111/j.1939-1676.2007.tb02960.x.', relevance: 'ASAC 臨床分期、治療與預後（含淋巴結/手術）' },
    { type: 'journal', citation: 'Heaton CM, Fernandes AFA, Jark PC, et al. Evaluation of toceranib for treatment of apocrine gland anal sac adenocarcinoma in dogs. J Vet Intern Med. 2020;34(2):873-881. doi:10.1111/jvim.15706.', relevance: 'toceranib 治療 AGASACA 的療效評估（近期實證）' },
    { type: 'textbook', citation: 'Hobson HP, et al. Surgery of the anal sacs. In: Fossum TW. Small Animal Surgery, 5th ed. Elsevier, 2019.', relevance: '肛囊切除手術技術參考' },
  ],
  is_current: true,
  created_at: now,
};

/** 鼻腔腫瘤，疾病型 */
const contentNasalTumor: NodeContent = {
  id: 'CONTENT-ONCO-L3-011',
  node_id: 'ONCO-L3-011',
  version: 1,
  summary: '鼻腔腫瘤大約占犬所有腫瘤 1 到 2%，主要是上皮來源（腺癌、鱗狀細胞癌）跟間葉來源（軟骨肉瘤、纖維肉瘤）。犬鼻腔腫瘤大約 2/3 是惡性，貓的話最常見是淋巴瘤。鼻出血（epistaxis）是最常見的初始症狀。CT 引導活檢是確診標準，Modified Adams 分期系統用來評估侵犯範圍。放射線治療是犬鼻腔腫瘤的治療首選（中位存活 12 到 18 個月），手術單獨效果不好。',
  learning_objectives: [
    '列出犬和貓鼻腔腫瘤的常見組織學類型差異',
    '說明犬鼻腔腫瘤的 Modified Adams 分期系統',
    '描述 CT 引導活檢在鼻腔腫瘤診斷中的關鍵角色',
    '比較放射線治療、手術和化療在鼻腔腫瘤中的療效',
    '辨識鼻腔腫瘤與慢性鼻炎、鼻黴菌症的鑑別診斷',
  ],
  key_points: [
    '犬鼻腔腫瘤約 2/3 為上皮來源（腺癌最常見），1/3 為間葉來源（軟骨肉瘤、纖維肉瘤）',
    '貓鼻腔腫瘤以淋巴瘤最常見，對化療反應良好，預後與犬不同',
    '鼻出血（epistaxis）為最常見初始症狀，常被誤為慢性鼻炎而延誤診斷',
    '確診必需 CT + CT 引導活檢，鼻鏡檢查和盲目活檢準確性不足',
    'Modified Adams 分期：Stage I（單側鼻腔）→ II（雙側/篩板侵犯）→ III（眼眶/皮下侵犯）→ IV（腦部侵犯）',
    '放射線治療為犬鼻腔腫瘤的治療首選：中位存活 12-18 個月（vs 手術單獨 3-6 個月）',
    '手術（鼻甲骨切除術 rhinotomy）單獨效果差，但可減瘤後接放療',
    '遠端轉移率在確診時相對低（< 10%），但局部侵犯和腦部浸潤是致死主因',
  ],
  body: `# 鼻腔腫瘤 (Nasal Tumors)

## 一、概述 (Overview)

鼻腔腫瘤大約占犬所有腫瘤 1 到 2%，雖然發病率不算高，但是因為位置特殊（靠近腦部跟眼眶）、局部侵襲性強、早期症狀容易被誤診，臨床上很重要。犬跟貓的鼻腔腫瘤在組織學類型跟治療策略上差很多。

### 犬鼻腔腫瘤組織學分類
上皮來源（約 2/3）
- 腺癌（Adenocarcinoma），最常見
- 鱗狀細胞癌（Squamous cell carcinoma）
- 移行上皮癌（Transitional carcinoma）

間葉來源（約 1/3）
- 軟骨肉瘤（Chondrosarcoma），間葉來源中預後最好
- 纖維肉瘤（Fibrosarcoma）
- 骨肉瘤（Osteosarcoma）
- 未分化肉瘤

### 貓鼻腔腫瘤
- 淋巴瘤最常見（約 40-50%），對化療（CHOP 或 COP）反應良好
- 鱗狀細胞癌
- 腺癌

## 二、臨床表現 (Clinical Signs)

犬鼻腔腫瘤典型表現是漸進性、單側或雙側的鼻症狀。最常見的是鼻出血（Epistaxis），初期是單側、間歇性。鼻分泌物會從漿液性、黏液膿性、最後到血性。其他還有打噴嚏跟反向打噴嚏。面部變形（鼻梁腫脹、不對稱）代表腫瘤侵犯骨壁。眼球突出（Exophthalmos）代表腫瘤侵犯眼眶。神經症狀（癲癇、行為改變、視力喪失）代表腫瘤穿過篩板侵犯腦部。

重要臨床規則：單側鼻出血的中老年犬要高度懷疑鼻腔腫瘤，在證實不是之前都要當鼻腔腫瘤處理。

## 三、分期 (Staging)

### Modified Adams 臨床分期
| 期別 | CT 影像特徵 |
|------|-----------|
| Stage I | 腫瘤限於單側鼻腔，無骨質破壞 |
| Stage II | 腫瘤雙側鼻腔侵犯或單側伴篩板侵蝕 |
| Stage III | 腫瘤侵犯眼眶或皮下軟組織 |
| Stage IV | 腫瘤穿過篩板侵犯腦部（cribriform plate destruction） |

分期對預後跟治療規劃不能省：Stage I/II 放療預後比 Stage III/IV 好很多。

## 四、診斷 (Diagnosis)

### CT 是診斷和分期的金標準
- 精確評估腫瘤範圍、骨質破壞程度、篩板完整性
- 區分腫瘤組織與阻塞性分泌物/黏液
- CT 引導活檢：避免盲目活檢的低準確率
- 評估區域淋巴結（下頷、咽後淋巴結）

### 鼻鏡檢查
- 可直視腫塊並進行切片
- 但僅能看到鼻腔前段，後段和篩板區域無法評估
- 需在全身麻醉下進行

### 組織活檢
- CT 引導活檢優於盲目活檢
- 活檢前需確認凝血功能正常（鼻腔腫瘤常伴出血）
- 需取足夠深度組織，表層常為壞死或發炎組織

## 五、治療 (Treatment)

### 放射線治療（Treatment of Choice for Dogs）
- 根治性放療（Definitive RT）：18-21 次分次照射，總劑量 48-57 Gy
- 中位存活：12-18 個月（Stage I/II 可達 18-24 個月）
- 急性副作用：口腔黏膜炎、鼻炎、結膜炎（通常 2-3 週自行緩解）
- 晚期副作用：白內障、骨壞死、腦壞死（少見）

### 姑息性放療
- 4-5 次大分次（8-10 Gy/次）
- 中位存活：6-8 個月
- 副作用較輕，適合無法接受長期多次治療的病例

### 手術
- 鼻甲骨切除術（Rhinotomy）單獨：中位存活僅 3-6 個月
- 手術用於減瘤後接放療（debulking + RT），可能改善放療反應

### 化療
- 犬鼻腔癌對化療反應有限
- Carboplatin 或 Doxorubicin 可作為輔助或姑息選項
- 貓鼻腔淋巴瘤例外：CHOP 方案反應率 > 70%，中位存活 12-24 個月

## 六、預後 (Prognosis)

| 治療方式 | 中位存活時間 |
|---------|------------|
| 不治療 | 3-5 個月 |
| 手術單獨 | 3-6 個月 |
| 放療（根治性） | 12-18 個月 |
| 放療（姑息性） | 6-8 個月 |
| 手術 + 放療 | 14-20 個月 |
| 貓淋巴瘤（化療） | 12-24 個月 |

預後因子：Stage（最重要）、組織學類型（軟骨肉瘤 > 腺癌 > 鱗狀細胞癌）、腫瘤體積。

## 七、監控 (Monitoring)

- 放療後每 3 個月進行 CT 追蹤（評估腫瘤反應和復發）
- 鼻症狀評估（鼻出血、分泌物、打噴嚏頻率）
- 神經學檢查（篩板侵犯風險）
- 眼科檢查（放療後白內障監測）

[圖片:犬鼻腔 CT 影像，Modified Adams 各分期示意]`,
  clinical_pearl: '腫瘤科有句格言：「中老年犬的單側鼻出血在證實不是之前，都要當鼻腔腫瘤處理。」很多犬鼻腔腫瘤因為初期症狀像慢性鼻炎，被經驗性治療（抗生素、抗黴菌藥）好幾個月才轉診，最佳治療時機就這樣錯過了。CT 是必備的，不只用在診斷，分期跟治療規劃也都靠它。另外，貓的鼻腔腫瘤治療策略跟犬完全不同：貓鼻腔淋巴瘤對化療反應很好，不需要放療也有不錯的存活時間。\n\n【台灣流行病學】鼻腔腫瘤在台灣犬不算罕見，長鼻品種（像柯利犬、牧羊犬）風險比較高。台灣的放射線治療可及性有限（只有少數教學醫院跟大型醫院有配備），多數病例可能只能接受姑息性治療或化療。CT 在台灣大型動物醫院已經普及，應該積極用於鼻腔疾病的診斷。',
  common_mistakes: [
    '中老年犬單側鼻出血當「鼻炎」經驗性治療好幾個月，延誤鼻腔腫瘤診斷',
    '只做 X 光沒做 CT：X 光沒辦法精確評估鼻腔腫瘤範圍跟篩板完整性',
    '做盲目鼻腔活檢而不是 CT 引導活檢：表層組織常常壞死或發炎，假陰性率高',
    '犬鼻腔腫瘤選擇單獨手術治療：放射線治療效果其實比手術好很多',
    '把犬跟貓鼻腔腫瘤治療策略混為一談：貓淋巴瘤用化療、犬上皮腫瘤用放療',
  ],
  disease_data: {
    signalment: '犬：中老年，中位年齡 10 歲，長鼻品種（dolichocephalic）風險比較高，像 Collie、Shetland Sheepdog、德國牧羊犬、拉布拉多。貓：中老年貓，沒有明顯品種偏好。犬貓的性別差異都不大。',
    etiology: '確切病因還沒搞清楚。犬可能跟都市環境的空氣汙染暴露有關（早期流行病學研究）。二手菸暴露在貓鼻腔淋巴瘤中被提出可能是風險因子。長鼻品種可能因為鼻腔黏膜面積比較大、暴露風險增加。',
    pathogenesis: '犬的話是鼻腔黏膜上皮或間葉組織惡性轉化，局部侵襲性生長，破壞鼻甲骨，侵犯對側鼻腔跟篩板，再到眼眶或腦部浸潤。遠端轉移率確診時相對低（不到 10%），但是疾病後期可以到 40 到 50%。貓的鼻腔淋巴瘤是淋巴組織克隆性增殖。',
    clinical_signs: [
      { sign: '鼻出血（Epistaxis）', category: 'primary', description: '最常見的初始症狀，初期通常單側、間歇性，後期會變成雙側、持續性' },
      { sign: '鼻分泌物', category: 'primary', description: '從漿液性、黏液膿性到血性鼻分泌物，初期通常單側' },
      { sign: '打噴嚏/反向打噴嚏', category: 'primary', description: '腫瘤刺激鼻腔黏膜，可能伴隨黏液或血液排出' },
      { sign: '面部變形', category: 'secondary', description: '鼻梁腫脹或面部不對稱，代表腫瘤侵犯鼻骨' },
      { sign: '眼球突出', category: 'secondary', description: '腫瘤侵犯眼眶，可能伴隨結膜充血跟視力受損' },
      { sign: '神經症狀', category: 'secondary', description: '癲癇、行為改變、轉圈，代表腫瘤穿過篩板侵犯腦部' },
    ],
    staging: {
      system: 'Modified Adams Clinical Staging for Canine Nasal Tumors (CT-based)',
      stages: [
        'Stage I：腫瘤限於單側鼻腔，無骨質破壞',
        'Stage II：腫瘤侵犯雙側鼻腔或單側伴篩板侵蝕',
        'Stage III：腫瘤侵犯眼眶或皮下軟組織',
        'Stage IV：腫瘤穿過篩板侵犯腦部（cribriform plate destruction）',
      ],
    },
    differential_diagnosis: [
      { condition: '慢性鼻炎（淋巴球-漿細胞性）', key_differentiator: '通常雙側鼻分泌物，CT 看到鼻甲骨破壞比較少或沒有軟組織腫塊' },
      { condition: '鼻黴菌症（Aspergillosis）', key_differentiator: '鼻鏡看到黴菌斑塊（fungal plaque），CT 看到鼻甲骨破壞而且額竇受累明顯，血清學或 PCR 可以輔助' },
      { condition: '鼻腔異物', key_differentiator: '急性發作，鼻鏡可以看到異物，通常單側' },
      { condition: '牙根膿瘍', key_differentiator: '口腔檢查看到上頷齒異常，X 光或 CT 看到齒根病灶跟鼻口瘻管' },
    ],
    diagnostic_workup: '流程：口腔檢查排除齒源性疾病，頭部 CT 必做（分期、活檢規劃、評估篩板完整性），CT 引導活檢或鼻鏡活檢，組織病理確診，胸腔三面 X 光做肺轉移篩檢，區域淋巴結 FNA（下頷、咽後），活檢前要做凝血功能檢測。',
    treatment_protocol: '犬的上皮或間葉腫瘤：根治性放療（18 到 21 次，48 到 57 Gy）是首選。姑息性放療（4 到 5 次，32 到 40 Gy）用於沒辦法接受完整療程的病人。手術（rhinotomy）單獨效果差（MST 3 到 6 個月），但可以結合放療。化療（Carboplatin）可以當輔助。貓的鼻腔淋巴瘤首選 CHOP 或 COP 化療，反應率超過 70%。',
    prognosis: '犬放療（根治性）中位存活 12 到 18 個月，1 年存活率 50 到 60%。犬放療（姑息性）中位存活 6 到 8 個月。犬手術單獨 3 到 6 個月。Stage I/II 預後比 Stage III/IV 好很多。軟骨肉瘤預後最好（MST 超過 24 個月）。貓鼻腔淋巴瘤化療中位存活 12 到 24 個月。',
    monitoring: '放療後每 3 個月做頭部 CT 追蹤腫瘤反應。每個月評估鼻症狀（出血、分泌物）。每次回診都要做神經學檢查。眼科檢查（放療後有白內障風險）。胸腔 X 光每 6 個月。',
    owner_communication: '鼻腔腫瘤治療目標是控制疾病進展跟維持生活品質。放射線治療是目前最有效的方法，但要多次全身麻醉。治療期間可能有鼻炎加重跟口腔黏膜炎的急性副作用，通常 2 到 3 週內就會緩解。貓鼻腔淋巴瘤的預後比犬上皮腫瘤好，化療反應率高。建議飼主決策時充分了解治療過程跟預期效果。',
  },
  diagnostic_data: null,
  procedure_data: null,
  visual_placeholders: [
    { position: 'Modified Adams 分期表格後', type: 'annotated_image', description: '犬鼻腔 CT 影像各分期比較' },
    { position: '治療段落後', type: 'flowchart', description: '犬 vs 貓鼻腔腫瘤治療決策流程圖' },
  ],
  interactive_placeholders: [],
  drug_api_links: ['Carboplatin', 'Doxorubicin', 'Cyclophosphamide', 'Vincristine', 'Prednisone'],
  references: [
    { type: 'textbook', citation: 'Vail DM, Thamm DH, Liptak JM. Withrow & MacEwen\'s Small Animal Clinical Oncology, 6th ed. Elsevier, 2020. Chapter 22: Tumors of the Respiratory System，Nasal Tumors Section.', relevance: '鼻腔腫瘤完整章節' },
    { type: 'journal', citation: 'Adams WM et al. Radiotherapy of malignant nasal tumors in 67 dogs. J Am Vet Med Assoc. 1987;191(3):311-315.', relevance: '犬鼻腔腫瘤放療經典文獻，Adams 分期原始資料' },
    { type: 'journal', citation: 'Theon AP et al. Megavoltage irradiation of neoplasms of the nasal and paranasal cavities in 77 dogs. J Am Vet Med Assoc. 1993;202(9):1469-1475.', relevance: '犬鼻腔腫瘤放療預後因子分析' },
    { type: 'journal', citation: 'Fox-Alvarez S et al. Outcome of intensity-modulated radiation therapy-based stereotactic radiation therapy for treatment of canine nasal carcinomas. Vet Radiol Ultrasound. 2020;61(3):370-378. doi:10.1111/vru.12854', relevance: '犬鼻腔癌 IMRT-based SRT 現代放療結果研究（Crossref 驗證真實）。取代原誤植之 Sfiligoi 2007——該文實為貓鼻淋巴瘤放化療（VRU 48(4):388-393），非犬鼻腫瘤 IMRT' },
  ],
  is_current: true,
  created_at: now,
};

/** 組織球肉瘤，疾病型 */
const contentHistiocyticSarcoma: NodeContent = {
  id: 'CONTENT-ONCO-L3-012',
  node_id: 'ONCO-L3-012',
  version: 2,
  summary: '犬組織球肉瘤（Histiocytic Sarcoma, HS）是高度侵襲性惡性腫瘤——局部型與播散型源自「間質樹突狀細胞（interstitial DC）」，噬血細胞型源自「脾紅髓/骨髓巨噬細胞」。伯恩山犬（Bernese Mountain Dog）與平毛獵犬（Flat-Coated Retriever）品種易感性極高（BMD 相較他犬約 225 倍）。免疫表型依來源不同：DC 型為 CD1a+/CD11c+/CD18+/MHCII+（CD11d 陰性），噬血細胞型為 CD11d+/CD18+（CD11d 非通用 HS 標記）。Lomustine（CCNU）為主要化療，整體預後不良——局部型手術+CCNU 可達 ~18 個月，播散型反應者 ~5-6 個月，噬血細胞型 <7 週。',
  learning_objectives: [
    '區分局部型與播散型組織球肉瘤的臨床特徵與預後差異',
    '說明伯恩山犬和平毛獵犬的品種易感性及遺傳背景',
    '描述組織球肉瘤的免疫組織化學診斷標記（CD18、CD11d、MHCII）',
    '擬定組織球肉瘤的分期檢查流程和治療方案',
    '辨識組織球肉瘤與其他組織球增生性疾病的鑑別診斷',
  ],
  key_points: [
    '細胞來源：局部型/播散型源自「間質樹突狀細胞（DC）」；噬血細胞型源自「脾紅髓/骨髓巨噬細胞」',
    '兩種形式：局部型（四肢關節周圍、皮膚、肺、脾等）與播散型（多器官同時受累）',
    '伯恩山犬品種易感性極高（約 225 倍風險）；「25%」是 Padgett 1995 之腫瘤占比（非終生罹病率），族群約每 7 隻有 1 隻死於 HS',
    '遺傳：MTAP-CDKN2A/B 位點（CFA11q16）——生殖細胞為「易感單倍型（調控性）」（Shearin 2012），腫瘤為「體細胞缺失」（Hedan 2011），勿混為一談',
    '平毛獵犬也是高風險品種，HS 為此品種最常見致死性腫瘤，好發「關節周圍（periarticular）HS」',
    '⚠️ 免疫表型依來源分：DC 型 HS＝CD1a+/CD11c+/CD18+/MHCII+（CD11d 陰性）；噬血細胞型＝CD11d+/CD18+（CD1/CD11c 低）。CD18 為泛組織球標記，CD11d 專屬噬血細胞型、非通用 HS 標記。E-cadherin 陰性支持（非證實）間質 DC 來源',
    '噬血細胞型 HS：源自脾紅髓巨噬細胞，再生性溶血性貧血（Coombs 陰性）+ 血小板低下 + 低白蛋白/低膽固醇；似 IMHA 但免疫抑制無效',
    'Lomustine（CCNU）60-90 mg/m² PO q3w 為主要化療，可測病灶反應率約 46%（Skorupski 2007）',
    '預後：局部型手術+CCNU ~18 個月（Skorupski 2009；關節周圍無轉移可達 ~32 月），播散型反應者 ~5-6 月，噬血細胞型 <7 週',
  ],
  body: `# 組織球肉瘤 (Histiocytic Sarcoma, HS)

## 一、概述 (Overview)

組織球肉瘤是犬特有的高度侵襲性惡性腫瘤，源自樹突狀細胞或巨噬細胞系統。這是一種在特定品種（伯恩山犬、平毛獵犬）中發病率極高的腫瘤，也是獸醫腫瘤學中預後最差的腫瘤類型之一。

### 組織球增生性疾病分類
| 疾病 | 細胞起源 | 生物行為 |
|------|---------|---------|
| 皮膚組織球瘤（Cutaneous histiocytoma） | Langerhans 細胞 | 良性，常自發消退 |
| 反應性組織球症（Reactive histiocytosis） | 樹突狀細胞 | 非腫瘤性增殖 |
| 局部型組織球肉瘤 | 樹突狀細胞 | 局部侵襲性惡性腫瘤 |
| 播散型組織球肉瘤 | 樹突狀細胞 | 多器官惡性腫瘤 |
| 噬血細胞性組織球肉瘤 | 脾紅髓巨噬細胞 | 極度侵襲性，伴噬血現象 |

## 二、臨床表現 (Clinical Signs)

### 局部型 HS
- 好發部位：四肢關節周圍（尤其肘關節、膝關節）、皮膚/皮下、肺、脾臟
- 皮膚/皮下：快速生長的堅實腫塊
- 四肢關節周圍：跛行、關節腫脹，常被誤診為骨關節炎或韌帶損傷
- 肺原發：咳嗽、呼吸困難

### 播散型 HS
- 多器官同時受累：肺、肝、脾、骨髓、淋巴結
- 全身症狀嚴重：體重急速減輕、厭食、嗜睡、發燒
- 肺浸潤：呼吸困難、咳嗽
- 肝脾腫大：腹部膨大

### 噬血細胞性 HS（Hemophagocytic HS）
- 源自脾臟紅髓巨噬細胞
- 嚴重再生性或非再生性貧血（Coombs 陰性溶血性貧血）
- 血小板嚴重低下
- 低蛋白血症
- 臨床表現類似免疫介導性溶血性貧血（IMHA），但對免疫抑制治療無反應

## 三、分期 (Staging)

目前無統一的 WHO 分期系統，臨床上依侵犯範圍分類：

- 局部型：腫瘤限於單一解剖部位（可切除性）
- 區域轉移：原發部位 + 區域淋巴結
- 播散型：≥ 2 個不相鄰的器官受累
- 噬血細胞型：脾臟起源 + 噬血現象 + 全身性血液學異常

## 四、診斷 (Diagnosis)

### 免疫組織化學（IHC）是確診關鍵
細胞學見大型多形性組織球樣細胞，但確認需 IHC——**標記依細胞來源不同，CD11d 並非通用 HS 標記**：
- **CD18+**：泛白血球 β2 整合素，兩型皆陽性，為真正的「泛組織球」共同標記。
- **樹突狀細胞來源型（局部/播散型，較常見）**：CD1a+、**CD11c+**、MHCII+、ICAM-1+，且 **CD11d 陰性**。
- **噬血細胞型（macrophage/脾紅髓來源）**：**CD11d+**/CD18+、MHCII+，但 CD1a、CD11c 低表現或陰性。⚠️ CD11d 專屬於此型、用來與 DC 型「鑑別」，不可當作所有 HS 的通用陽性標記。
- **E-cadherin**：LC 之 lineage-associated（非 lineage-specific）標記——E-cadherin 陰性「支持（非證實）」間質 DC 來源；但陰性不能可靠排除 LC 來源，且已有 E-cadherin **陽性**的 HS 病例（Ramos-Vara 2011：5/5 HS 陽性；Hirako 2015 皮膚 HS），MCT/上皮嗜性淋巴瘤/漿細胞瘤亦常陽性，須置於完整 panel（含 MUM1/KIT/CD3/CD79a）判讀。

### 分期檢查
1. 原發部位組織活檢 + IHC
2. 全身 CBC + 生化（注意貧血、血小板低下）
3. 胸腔 X 光（肺浸潤/轉移）
4. 腹部超音波（肝脾、淋巴結）
5. 骨髓穿刺（播散型/噬血細胞型）
6. 全身 CT（評估完整侵犯範圍）

## 五、治療 (Treatment)

### 局部型 HS
- 手術：可切除的局部型 HS 應積極手術，完全切除是延長存活的關鍵
- 術後化療：Lomustine (CCNU) 60-90 mg/m² PO q3w × 4-6 cycles
- 手術 + Lomustine 可將中位存活延長至 12-18 個月（vs 手術單獨 4-6 個月）

### 播散型/不可切除 HS
- Lomustine (CCNU)：60-90 mg/m² PO q3w，反應率約 40-50%
- Lomustine + Doxorubicin：部分報告反應率可能更高
- Toceranib：對部分 HS 有反應，可作為替代或聯合用藥
- 反應者中位存活約 3-6 個月

### 噬血細胞型 HS
- 預後極差，中位存活 < 7 週
- 化療反應率極低
- 支持療法（輸血、營養支持）為主
- 脾臟切除（如脾臟為主要病灶）可暫時改善

### Lomustine 注意事項
- 延遲性骨髓抑制（nadir 第 3-4 週），需在給藥後 3 週查 CBC
- 肝毒性（累積性），每次給藥前查肝指數（ALT、ALP）
- ALT > 3x 正常上限考慮停藥或減量

## 六、預後 (Prognosis)

| 類型 | 治療 | 中位存活 |
|------|------|---------|
| 局部型（手術 + Lomustine） | 積極治療 | 12-18 個月 |
| 局部型（手術單獨） | 手術 | 4-6 個月 |
| 播散型（Lomustine） | 化療 | 3-6 個月 |
| 噬血細胞型 | 支持/化療 | < 7 週 |

品種影響預後：伯恩山犬的 HS 預後可能比其他品種更差。

## 七、監控 (Monitoring)

- Lomustine 化療：給藥後第 3 週 CBC（延遲性骨髓抑制）+ 每次給藥前肝指數
- 每月觸診和影像追蹤（胸腔 X 光 + 腹超）
- 體重和生活品質評估
- 噬血細胞型：每週 CBC 監測貧血和血小板

## 八、人醫借鑒 (Translational Insights)

| 人醫工具/概念 | 獸醫應用潛力 | 現況 |
|-------------|-------------|------|
| 犬 HS 為人類組織細胞肉瘤（histiocytic/dendritic cell sarcoma）之自然發生模型 | MTAP-CDKN2A/9p21 缺失、PTPN11/BRAF 路徑於跨物種比較腫瘤學研究 | 犬 HS 已成為人類罕見組織球腫瘤之比較模型 |
| BRAF/MAPK 抑制劑（人類組織球疾病如 ECD/LCH 之標靶治療） | 犬 HS 部分帶 PTPN11/MAPK 路徑活化，探索標靶治療 | 犬 HS 之 PTPN11 突變已報告，標靶治療研究初期 |
| 液態活檢/循環腫瘤 DNA（ctDNA）偵測 CDKN2A 缺失 | 高風險品種（BMD/FCR）早期偵測與復發監測 | 概念階段 |

## 九、臨床爭議與知識空缺 (Controversies & Knowledge Gaps)

| 爭議議題 | 現況 | Evidence Level |
|---------|------|---------------|
| Toceranib（TKI）於犬 HS 的角色 | 部分病例有反應，但缺乏大型前瞻試驗確立其地位 | Level III |
| CCNU + doxorubicin 或其他多藥方案是否優於 CCNU 單藥 | 回顧性資料提示可能較高反應率，尚無隨機對照 | Level III |
| 播散型 HS 何時應轉為緩和照護 | 預後極差時的治療 vs 生活品質權衡缺乏客觀指標 | Level IV |
| 高風險品種（BMD/FCR）之基因篩檢與繁殖建議 | MTAP-CDKN2A 易感單倍型可檢測，但外顯率與臨床應用尚未標準化 | Level III |

## 十、近期更新 (Recent Updates)

- **免疫表型分型釐清**：CD11d 專屬「噬血細胞型（macrophage）HS」（Moore 2006），DC 型 HS 為 CD11d 陰性、以 CD1a/CD11c/MHCII 陽性為主；CD18 才是泛組織球標記——舊教材把 CD11d 當通用標記為錯誤。
- **遺傳學雙層機轉**：Shearin 2012（MTAP-CDKN2A 易感單倍型，調控性、非缺失）與 Hedan 2011（腫瘤體細胞 CDKN2A/B+MTAP 缺失，並常伴 RB1/PTEN 缺失）——生殖細胞「易感」與體細胞「缺失」為不同層面。
- **局部/關節周圍 HS 存活**：Skorupski 2009（VCO，局部 HS 手術+CCNU MST 568 天）、Klahn 2011（關節周圍 HS 無轉移 MST 980 天）確立積極治療之意義。
- **E-cadherin 非 LC 專一**：Ramos-Vara & Miller 2011 證實 E-cadherin 於 MCT/淋巴瘤/漿細胞瘤/HS 皆可陽性，不能單獨鑑別組織球瘤，須置於完整 panel。

[圖片:犬組織球增生性疾病分類鑑別圖]`,
  clinical_pearl: '組織球肉瘤的診斷陷阱：四肢關節周圍的局部型 HS 常常被誤診為骨關節炎或韌帶損傷，延誤好幾個月。伯恩山犬或平毛獵犬出現不明原因跛行加關節腫脹時，要把 HS 列入鑑別診斷，做影像學跟活檢。另一個常見陷阱：噬血細胞型 HS 會被誤診為 IMHA，兩者都表現為 Coombs 陰性溶血性貧血，但是 HS 對免疫抑制治療沒反應。脾臟超音波跟骨髓穿刺是區分的關鍵。\n\n【台灣流行病學】伯恩山犬跟平毛獵犬在台灣飼養數量雖然沒歐美多，但還是有一定族群。Lomustine 在台灣獸醫市場的取得性要確認一下。組織球肉瘤的 IHC 確診要送到有免疫組化服務的病理實驗室。台灣臨床上要提高對中大型犬不明原因跛行或多器官病變時 HS 的警覺性。',
  common_mistakes: [
    '把四肢關節周圍的 HS 誤診為骨關節炎或韌帶損傷：伯恩山犬或平毛獵犬跛行要考慮 HS',
    '沒做 IHC 就用細胞學「組織球樣細胞」診斷：確認要用 CD18（泛組織球）+ 依來源分（DC 型 CD1a/CD11c、噬血細胞型 CD11d）——勿把 CD11d 當通用 HS 標記',
    '把噬血細胞型 HS 誤診為 IMHA 而長期用免疫抑制治療',
    '對播散型 HS 過度積極治療而忽略生活品質評估：預後極差時姑息照護可能比較適當',
    'Lomustine 治療第 3 週沒監測 CBC：延遲性骨髓抑制會致命',
  ],
  disease_data: {
    signalment: '中老年犬，中位年齡約 6-7 歲。高風險品種：伯恩山犬（BMD，相較他犬約 225 倍風險——常引的「25%」為 Padgett 1995 之腫瘤診斷占比、非終生罹病率；族群約每 7 隻有 1 隻死於 HS）、平毛獵犬。黃金、拉布拉多、羅威納發病率也偏高。性別差異不大。',
    etiology: '確切病因未完全確立，但有強烈遺傳背景。關鍵位點為 MTAP-CDKN2A/CDKN2B 區域（CFA11q16，對應人類 9p21）——生殖細胞層面為「易感單倍型（CA haplotype，調控 CDKN2A/B 表現，非缺失）」（Shearin 2012），腫瘤層面為「體細胞缺失」（CDKN2A/B+MTAP，約 62.8% 腫瘤，常伴 RB1/PTEN 缺失，Hedan 2011）。平毛獵犬有複雜多基因遺傳模式。',
    pathogenesis: '間質樹突狀細胞（局部/播散型）或脾紅髓/骨髓巨噬細胞（噬血細胞型）惡性轉化，CDKN2A（p16）/CDKN2B（p15）等腫瘤抑制基因體細胞失活造成不受控增殖。局部型在單一部位浸潤性生長，播散型則多器官轉移（肺、肝、脾、骨髓）。噬血細胞型是脾紅髓巨噬細胞（CD11d+）惡性增殖，造成噬血現象，跑出再生性溶血性貧血（Coombs 陰性）、血小板低下、低白蛋白/低膽固醇血症。',
    clinical_signs: [
      { sign: '四肢跛行/關節腫脹', category: 'primary', description: '局部型好發在關節周圍（肘、膝），常被誤診為骨關節炎' },
      { sign: '快速生長的腫塊', category: 'primary', description: '皮膚或皮下局部型，堅實、浸潤性' },
      { sign: '體重減輕/厭食/嗜睡', category: 'primary', description: '播散型的全身症狀，常常是就診主訴' },
      { sign: '呼吸困難/咳嗽', category: 'secondary', description: '肺原發或肺轉移，X 光看到瀰漫性肺浸潤' },
      { sign: '嚴重貧血/黏膜蒼白', category: 'secondary', description: '噬血細胞型造成溶血性貧血跟血小板低下' },
    ],
    staging: null,
    differential_diagnosis: [
      { condition: '皮膚組織球瘤（Histiocytoma）', key_differentiator: '好發幼犬（小於 3 歲），單發小結節，多數會自己消退，IHC 是 E-cadherin+（Langerhans 細胞來源）' },
      { condition: '反應性組織球症', key_differentiator: '非腫瘤性增殖，多灶性但對免疫調節治療有反應，IHC 相似但是沒有明顯異型性' },
      { condition: '淋巴瘤', key_differentiator: '主要表現是全身淋巴結腫大，FNA 看到均質淋巴球，IHC 是 CD3/CD79a+' },
      { condition: '免疫介導性溶血性貧血（IMHA）', key_differentiator: '跟噬血細胞型 HS 鑑別：IMHA 通常 Coombs 陽性、對免疫抑制有反應；HS 要靠影像加活檢確認' },
    ],
    diagnostic_workup: '流程：原發部位 FNA 或活檢，免疫組織化學（CD18 泛組織球；DC 型加 CD1a/CD11c、噬血細胞型加 CD11d；E-cadherin 於完整 panel 內判讀），CBC 加全套生化，胸腔 X 光，腹超看肝脾跟淋巴結，骨髓穿刺（播散型或噬血細胞型），全身 CT 做手術規劃。',
    treatment_protocol: '局部型：手術（完全切除）加 Lomustine (CCNU) 60 到 90 mg/m² PO q3w × 4 到 6 cycles。播散型或不可切除：Lomustine 單獨，或 Lomustine 加 Doxorubicin 聯合。Toceranib 可以當替代。噬血細胞型預後極差，以支持療法（輸血）為主。Lomustine 要監測延遲性骨髓抑制（第 3 週 CBC）跟肝毒性。',
    prognosis: '局部型（手術加 Lomustine）中位存活 12 到 18 個月。局部型（手術單獨）4 到 6 個月。播散型（Lomustine）3 到 6 個月。噬血細胞型不到 7 週。整體來說 HS 預後不好，特別是播散型跟噬血細胞型。品種跟有沒有完全手術切除是關鍵預後因子。',
    monitoring: 'Lomustine 化療：第 3 週 CBC（監測 nadir）加每次給藥前肝指數（ALT、ALP）。每個月影像追蹤（胸腔 X 光加腹超）。每次回診評估體重跟生活品質。噬血細胞型每週 CBC。',
    owner_communication: '組織球肉瘤是侵襲性很高的腫瘤，特別是伯恩山犬跟平毛獵犬有遺傳傾向。局部型如果能完全手術切除再配合化療，可以拿到有意義的存活時間。播散型預後比較差，治療目標是控制症狀跟維持生活品質。化療藥物 Lomustine 要定期驗血監測副作用。預後談話很難講，建議讓飼主在了解預後的前提下，做出符合家庭跟毛孩最佳利益的決定。',
  },
  diagnostic_data: null,
  procedure_data: null,
  visual_placeholders: [
    { position: '組織球疾病分類表後', type: 'comparison_table', description: '組織球增生性疾病分類與鑑別比較表' },
    { position: '治療段落後', type: 'flowchart', description: 'HS 治療決策流程圖（局部型 vs 播散型 vs 噬血細胞型）' },
  ],
  interactive_placeholders: [],
  drug_api_links: ['Lomustine', 'Doxorubicin', 'Toceranib'],
  references: [
    { type: 'textbook', citation: 'Vail DM, Thamm DH, Liptak JM (eds). Withrow & MacEwen\'s Small Animal Clinical Oncology, 6th ed. St. Louis: Elsevier, 2019. Chapter: Histiocytic Diseases.', relevance: '組織球肉瘤完整章節' },
    { type: 'journal', citation: 'Affolter VK, Moore PF. Localized and disseminated histiocytic sarcoma of dendritic cell origin in dogs. Vet Pathol. 2002;39(1):74-83. doi:10.1354/vp.39-1-74', relevance: 'HS 樹突狀細胞起源分類與免疫表型（CD1+/CD11c+/CD11d-）之經典文獻' },
    { type: 'journal', citation: 'Moore PF, Affolter VK, Vernau W. Canine hemophagocytic histiocytic sarcoma: a proliferative disorder of CD11d+ macrophages. Vet Pathol. 2006;43(5):632-645. doi:10.1354/vp.43-5-632', relevance: '噬血細胞型 HS＝CD11d+ 巨噬細胞（CD11d 專屬此型、非通用標記）' },
    { type: 'journal', citation: 'Skorupski KA, Clifford CA, Paoloni MC, et al. CCNU for the treatment of dogs with histiocytic sarcoma. J Vet Intern Med. 2007;21(1):121-126. doi:10.1111/j.1939-1676.2007.tb02937.x', relevance: 'Lomustine 治療 HS（可測病灶反應率 46%）' },
    { type: 'journal', citation: 'Skorupski KA, Rodriguez CO, Krick EL, et al. Long-term survival in dogs with localized histiocytic sarcoma treated with CCNU as an adjuvant to local therapy. Vet Comp Oncol. 2009;7(2):139-144. doi:10.1111/j.1476-5829.2009.00186.x', relevance: '局部型 HS 手術+CCNU 之長期存活（MST 568 天）' },
    { type: 'journal', citation: 'Abadie J, Hédan B, Cadieu E, et al. Epidemiology, pathology, and genetics of histiocytic sarcoma in the Bernese mountain dog breed. J Hered. 2009;100(Suppl 1):S19-S27. doi:10.1093/jhered/esp039', relevance: '伯恩山犬 HS 流行病學/病理/遺傳（v1 誤植為 Vet Pathol 46(3):385-397）' },
    { type: 'journal', citation: 'Moore PF. A review of histiocytic diseases of dogs and cats. Vet Pathol. 2014;51(1):167-184. doi:10.1177/0300985813510413', relevance: '犬貓組織球疾病分類權威綜述（UC Davis Moore/Affolter 體系；為單一作者 review，非 ACVP/ASVCP 共識）' },
  ],
  is_current: true,
  created_at: now,
};

/** 甲狀腺癌，疾病型 */
const contentThyroidCarcinoma: NodeContent = {
  id: 'CONTENT-ONCO-L3-013',
  node_id: 'ONCO-L3-013',
  version: 1,
  summary: '犬甲狀腺癌（Thyroid Carcinoma）是犬甲狀腺腫瘤中最常見的惡性類型，多數是非功能性（不分泌甲狀腺素），大約 10 到 20% 可能是功能性。腫瘤「可移動性（freely movable）」跟「固定性（fixed）」是決定手術可切除性的關鍵臨床指標。貓甲狀腺癌罕見（大約 2 到 3% 的甲狀腺機能亢進是惡性），但一旦確診為癌症預後就很差。犬可移動甲狀腺腫塊手術切除後中位存活可以到 20 到 36 個月。',
  learning_objectives: [
    '比較犬與貓甲狀腺腫瘤的生物行為差異',
    '說明「freely movable」vs「fixed」甲狀腺腫塊的臨床意義和手術決策',
    '描述犬甲狀腺癌的分期檢查流程',
    '列出甲狀腺癌的治療選項（手術、放射性碘、化療）',
    '擬定甲狀腺功能監測計畫',
  ],
  key_points: [
    '犬甲狀腺腫塊約 90% 為惡性（腺癌），但多數為非功能性（euthyroid 或 hypothyroid）',
    '犬甲狀腺癌 10-20% 為功能性（分泌 T4）→ 甲狀腺機能亢進症狀',
    '「Freely movable」腫塊：通常可手術完全切除，預後較好（MST 20-36 個月）',
    '「Fixed」腫塊：侵犯周圍組織（頸動脈、食道、氣管），手術困難，預後較差',
    '貓甲狀腺癌罕見（約 2-3% 的甲亢為惡性）：若甲狀腺腫塊 > 3 cm 或甲巰咪唑治療反應差需懷疑',
    '遠端轉移（肺）率約 30-40%，確診時需胸腔 X 光篩檢',
    '放射性碘（¹³¹I）可用於不可切除或功能性甲狀腺癌',
    '甲狀腺閃爍掃描（scintigraphy）：評估腫瘤功能狀態和異位組織',
  ],
  body: `# 甲狀腺癌 (Thyroid Carcinoma)

## 一、概述 (Overview)

甲狀腺腫瘤在犬大約占所有腫瘤 1 到 4%。犬甲狀腺腫塊有個重要特點：大約 90% 是惡性（腺癌或髓質癌），這跟人類甲狀腺結節多半是良性的情況完全不同。不過犬甲狀腺癌多數是非功能性（不會造成甲亢），所以常常以頸部腫塊為主要就診原因。

### 犬 vs 貓的關鍵差異
| 特徵 | 犬 | 貓 |
|------|----|----|
| 腫瘤性質 | 約 90% 惡性 | 約 97-98% 良性（腺瘤/增生） |
| 功能狀態 | 多數非功能性 | 多數功能性（甲亢） |
| 惡性比例 | 甲狀腺腫塊幾乎都是癌 | 僅 2-3% 的甲亢為惡性 |
| 臨床表現 | 頸部腫塊為主 | 甲亢症狀為主 |

## 二、臨床表現 (Clinical Signs)

### 犬甲狀腺癌
頸部腫塊：腹頸部（ventral neck）摸得到腫塊，通常單側。腫塊觸診分兩類：Freely movable 是腫塊可以在皮下自由移動（通常小於 5 cm），跟周圍組織沒有黏連；Fixed 是腫塊固定不動，跟頸動脈、氣管或食道黏連。其他症狀有吞嚥困難（dysphagia，大型腫塊壓迫食道）、呼吸困難（壓迫或侵犯氣管）、聲音改變（voice change，侵犯喉返神經）、甲亢症狀（10 到 20%，包括多尿多渴、體重減輕、心搏過速、焦躁不安）。

### 貓甲狀腺癌
很難跟良性甲亢區分。懷疑指標包括甲狀腺腫塊超過 3 cm、甲巰咪唑治療後 T4 控制不好、腫塊快速變大。肺轉移率高。

## 三、分期 (Staging)

### WHO TNM 分期
| 分期 | 定義 |
|------|------|
| T0 | 觸診無腫塊 |
| T1 | 腫瘤 ≤ 2 cm，可移動 |
| T2 | 腫瘤 2-5 cm，可移動 |
| T3 | 腫瘤 > 5 cm，或任何大小但固定 |
| N0 | 無區域淋巴結轉移 |
| N1 | 同側淋巴結轉移 |
| M0 | 無遠端轉移 |
| M1 | 有遠端轉移 |

「Freely movable」vs「fixed」是手術決策的關鍵分水嶺。

## 四、診斷 (Diagnosis)

### 診斷流程
1. 觸診：評估腫塊大小、可移動性、雙側 vs 單側
2. FNA 細胞學：可初步判斷為甲狀腺來源，但區分良惡性困難（甲狀腺 FNA 可能出血多）
3. 血液學：CBC + 生化 + T4/fT4（評估功能狀態）+ TSH
4. 胸腔三面 X 光：肺轉移篩檢（轉移率 30-40%）
5. 頸部超音波：評估腫塊大小、血流、與頸動脈/頸靜脈的關係
6. 頸部 CT（造影）：手術規劃必備，精確評估血管侵犯和切除可能性
7. 甲狀腺閃爍掃描（⁹⁹ᵐTc / ¹²³I）：評估功能狀態、對側甲狀腺、異位組織、轉移灶攝取

### 重要注意事項
- FNA 時須避免穿刺頸動脈，超音波引導推薦
- 組織活檢（Tru-cut）優於 FNA 在區分良惡性的準確度
- 功能性甲狀腺癌：T4 升高 + 甲狀腺腫塊 → 需排除良性甲亢（犬良性甲亢極罕見）

## 五、治療 (Treatment)

### 手術（Freely Movable Tumors）
- 甲狀腺切除術（Thyroidectomy）是 freely movable 腫瘤的治療首選
- 手術需仔細分離腫塊與頸動脈、頸靜脈、喉返神經
- 副甲狀腺保存：盡可能保留對側甲狀腺和至少一個副甲狀腺
- 術後低血鈣風險：雙側甲狀腺切除後需監測 ionized Ca²⁺

### Fixed Tumors 的處理
- 手術困難且出血風險極高
- 術前放療或化療（neoadjuvant）可能縮小腫瘤使其變為可切除
- 放射性碘（¹³¹I）：功能性固定腫瘤的良好選擇

### 放射性碘（¹³¹I）
- 功能性甲狀腺癌的理想治療
- 非功能性腫瘤攝取碘能力低，效果不佳
- 需核醫學設施，治療後需隔離（通常 1-2 週）

### 化療
- Doxorubicin：對甲狀腺癌有一定反應率
- Toceranib（Palladia）：部分甲狀腺癌有反應
- 化療通常用於不可切除、已轉移或術後輔助

### 外照射放療（External Beam RT）
- 不可切除腫瘤的局部控制
- 術後切緣不淨的輔助治療
- 姑息性放療用於症狀控制

## 六、預後 (Prognosis)

| 情境 | 中位存活 |
|------|---------|
| Freely movable + 手術完全切除 | 20-36 個月 |
| Freely movable + 手術 + 化療 | 可能 > 36 個月 |
| Fixed tumor + 姑息治療 | 6-12 個月 |
| 功能性 + ¹³¹I | 24-30 個月 |
| 已有肺轉移 | 3-6 個月 |
| 貓甲狀腺癌 | 預後差（數據有限） |

腫瘤大小（< 5 cm 較好）、可移動性、組織學亞型（濾泡型 > 乳頭型 > 髓質型 > 未分化型）和是否有轉移為主要預後因子。

## 七、監控 (Monitoring)

- 術後 1 週：ionized Ca²⁺ 監測（低血鈣風險）
- 術後第 1 個月：T4 + 甲狀腺功能評估
- 每 3 個月：頸部超音波（局部復發）+ 胸腔 X 光（肺轉移）+ T4
- 功能性腫瘤：T4 是監測復發的敏感指標
- 雙側切除後：終生甲狀腺素補充（Levothyroxine）

[圖片:犬甲狀腺癌 freely movable vs fixed 觸診示意圖]`,
  clinical_pearl: '「觸診甲狀腺腫塊的可移動性」是犬甲狀腺癌治療決策的第一步，也是最重要的一步。Freely movable 腫塊手術切除的預後出乎意料地好（MST 20 到 36 個月），fixed 腫塊則因為侵犯大血管，手術風險飆高。另一個實用的臨床要點：犬甲狀腺機能亢進非常罕見（跟貓不一樣），所以犬如果出現甲亢症狀加頸部腫塊，幾乎可以確定是功能性甲狀腺癌，不是良性甲亢。\n\n【台灣流行病學】犬甲狀腺癌在台灣不算少見，中大型犬（黃金、Beagle、拳師犬）是好發品種。台灣獸醫師年度健檢時應該養成觸診頸部的習慣。放射性碘治療在台灣的可及性受核醫設施限制。手術需要熟練的軟組織外科技術，術前 CT 造影是手術規劃的關鍵。',
  common_mistakes: [
    '沒觸診評估甲狀腺腫塊的可移動性就動手術：fixed tumor 手術出血風險極高',
    '把犬甲狀腺腫塊當良性結節觀察：犬甲狀腺腫塊大約 90% 是惡性',
    '雙側甲狀腺切除後沒監測血鈣：低血鈣會致命（副甲狀腺損傷）',
    '沒做術前 CT 造影就手術：沒辦法評估腫塊跟頸動脈的關係',
    '對非功能性甲狀腺癌用放射性碘：非功能性腫瘤攝碘能力低，效果不好',
  ],
  disease_data: {
    signalment: '犬：中老年，中位年齡 9 到 11 歲，好發品種：拳師犬、Beagle、黃金、Siberian Husky。中大型犬比較常見。性別差異不大。貓：老年貓（10 歲以上），甲狀腺癌只占甲狀腺疾病的 2 到 3%。',
    etiology: '確切病因不明。犬甲狀腺癌為自發性，可能涉及 TSH 長期刺激（甲低症犬的代償性增生理論）。RAS 和 RET 基因突變在人醫甲狀腺癌已知，犬中的研究有限。貓甲狀腺癌可能與長期甲亢的腺瘤惡性轉化有關。',
    pathogenesis: '犬：甲狀腺濾泡上皮或旁濾泡 C 細胞惡性轉化 → 局部浸潤性生長 → 侵犯周圍組織（fixed tumor：頸動脈、食道、氣管、喉返神經）→ 淋巴轉移（頸部淋巴結）和血行轉移（肺，30-40%）。功能性腫瘤（10-20%）：自主分泌 T4/T3 → 甲狀腺機能亢進。',
    clinical_signs: [
      { sign: '頸部腫塊', category: 'primary', description: '腹頸部可觸及腫塊，通常單側，大小和可移動性為關鍵評估指標' },
      { sign: '吞嚥困難', category: 'secondary', description: '大型腫塊壓迫或侵犯食道' },
      { sign: '呼吸困難/喘鳴', category: 'secondary', description: '腫塊壓迫或侵犯氣管' },
      { sign: '聲音改變', category: 'secondary', description: '喉返神經侵犯導致聲帶麻痺' },
      { sign: '甲亢症狀', category: 'secondary', description: '功能性腫瘤（10-20%）：多尿多渴、體重減輕、心搏過速、焦躁' },
    ],
    staging: {
      system: 'WHO TNM Staging for Canine Thyroid Carcinoma',
      stages: [
        'T1：腫瘤 ≤ 2 cm，可移動',
        'T2：腫瘤 2-5 cm，可移動',
        'T3：腫瘤 > 5 cm，或任何大小但固定不可移動',
        'N0/N1：無/有區域淋巴結轉移',
        'M0/M1：無/有遠端轉移（肺轉移率 30-40%）',
      ],
    },
    differential_diagnosis: [
      { condition: '甲狀腺良性結節/腺瘤', key_differentiator: '犬中罕見（< 10%），通常較小且可移動，但臨床觸診無法可靠區分，組織學確認必要' },
      { condition: '頸部淋巴結腫大', key_differentiator: '位置偏外側而非腹側中線，FNA 見淋巴細胞，超音波結構不同' },
      { condition: '頸部軟組織腫瘤', key_differentiator: '非甲狀腺來源，超音波可定位腫塊與甲狀腺的關係' },
      { condition: '甲狀舌管囊腫（Thyroglossal duct cyst）', key_differentiator: '通常為年輕犬，囊性結構，超音波見液態內容' },
    ],
    diagnostic_workup: '1. 觸診（大小、可移動性、單側/雙側）→ 2. 頸部超音波（腫塊特徵、血流、與血管關係）→ 3. FNA 細胞學（超音波引導，注意出血風險）→ 4. 血液學（CBC + 生化 + T4/fT4 + TSH）→ 5. 胸腔三面 X 光（肺轉移）→ 6. 頸部 CT 造影（手術規劃，血管侵犯評估）→ 7. 甲狀腺閃爍掃描（功能性腫瘤/¹³¹I 治療規劃）',
    treatment_protocol: 'Freely movable：甲狀腺切除術為首選（MST 20-36 個月）。Fixed tumor：術前化療或放療嘗試縮小後手術，或放射性碘（¹³¹I，功能性者）。輔助化療：Doxorubicin 30 mg/m² IV q3w 或 Toceranib 3.25 mg/kg PO QOD（FDA 標準劑量；臨床常減量至 2.75 mg/kg）。外照射放療：不可切除者的局部控制。雙側切除後需終生 Levothyroxine 補充。',
    prognosis: 'Freely movable + 完全切除：中位存活 20-36 個月，3 年存活率約 50%。Fixed tumor（姑息治療）：6-12 個月。功能性 + ¹³¹I：24-30 個月。已有肺轉移：3-6 個月。濾泡型/乳頭型較好，髓質型/未分化型較差。貓甲狀腺癌預後差，數據有限。',
    monitoring: '術後第 1 週：ionized Ca²⁺（每 12-24 小時，低血鈣風險）。術後 1 個月：T4 + TSH。每 3 個月：頸部超音波 + 胸腔 X 光 + T4。功能性腫瘤：T4 為復發監測指標。雙側切除後：Levothyroxine 劑量調整依 T4 監測。',
    owner_communication: '犬甲狀腺腫塊幾乎都是惡性的，但如果腫塊可以自由移動（freely movable），手術切除的預後非常好，很多犬可以存活 2-3 年以上。手術前需要做 CT 確認腫塊與血管的關係。如果腫塊固定不動，治療較為困難但仍有化療和放射性碘等選項。術後需要定期追蹤血液檢查和影像學。若雙側甲狀腺都需切除，需終生補充甲狀腺素。',
  },
  diagnostic_data: null,
  procedure_data: null,
  visual_placeholders: [
    { position: '犬貓比較表後', type: 'comparison_table', description: '犬 vs 貓甲狀腺腫瘤特徵比較圖' },
    { position: '治療段落後', type: 'flowchart', description: '甲狀腺癌治療決策流程圖（freely movable vs fixed）' },
  ],
  interactive_placeholders: [],
  drug_api_links: ['Doxorubicin', 'Toceranib', 'Levothyroxine'],
  references: [
    { type: 'textbook', citation: 'Vail DM, Thamm DH, Liptak JM. Withrow & MacEwen\'s Small Animal Clinical Oncology, 6th ed. Elsevier, 2020. Chapter 23: Tumors of the Endocrine System，Thyroid Section.', relevance: '甲狀腺癌完整章節' },
    { type: 'journal', citation: 'Theon AP et al. Prognostic factors and patterns of treatment failure in dogs with unresectable differentiated thyroid carcinomas treated with megavoltage irradiation. J Am Vet Med Assoc. 2000;216(11):1775-1779.', relevance: '犬甲狀腺癌放療預後因子' },
    { type: 'journal', citation: 'Worth AJ et al. Thyroidectomy as a treatment for canine thyroid carcinoma: 12 cases. N Z Vet J. 2005;53(4):228-233.', relevance: '⚠️ 待 DVM 查證：N Z Vet J 2005 查無此篇；Worth 2005 真實甲狀腺癌文為 Aust Vet J 2005;83(4):208-214（放射碘 131I，非甲狀腺切除，主題/期刊被混植）；疑捏造/誤引，DVM 確認前不宜視為已驗證' },
    { type: 'guideline', citation: 'Campos M et al. Thyroid tumours in dogs and cats. In: BSAVA Manual of Canine and Feline Oncology, 4th ed. BSAVA, 2024.', relevance: '犬貓甲狀腺腫瘤臨床指引' },
  ],
  is_current: true,
  created_at: now,
};

/** 鱗狀上皮細胞癌，疾病型 */
const contentSCC: NodeContent = {
  id: 'CONTENT-ONCO-L3-014',
  node_id: 'ONCO-L3-014',
  version: 2,
  summary: '鱗狀上皮細胞癌（Squamous Cell Carcinoma, SCC）是犬貓常見的上皮惡性腫瘤，可以發生在口腔、皮膚、甲床等多個位置。貓口腔 SCC 是貓最常見的口腔腫瘤，預後極差，中位存活只有大約 2 個月。犬甲床 SCC 要截趾治療，預後相對好一些。貓鼻平面跟耳尖 SCC 跟紫外線暴露關係密切，白色短毛貓是高危族群。各解剖位置的臨床行為跟治療策略差很多。',
  learning_objectives: [
    '區分 SCC 在不同解剖位置（口腔、皮膚、甲床）的臨床行為差異',
    '說明紫外線暴露與貓鼻平面/耳尖 SCC 的因果關係',
    '掌握貓口腔 SCC 預後極差的原因及目前治療困境',
    '描述犬甲床 SCC 的診斷與截趾治療原則',
    '擬定不同解剖位置 SCC 的分期檢查與治療計畫',
    '比較手術、放射治療、化療在 SCC 各亞型中的角色',
  ],
  key_points: [
    '貓口腔 SCC 是貓最常見的口腔惡性腫瘤（約 70%），預後極差，中位存活僅約 2 個月',
    '貓口腔 SCC 容易被誤診為齒齦炎或牙周病，任何不癒合的口腔潰瘍應活檢',
    '紫外線暴露是貓鼻平面、耳尖 SCC 的主要危險因子，白色或淺色短毛貓為高危族群',
    '犬甲床 SCC 是犬趾部最常見的惡性腫瘤，截趾（digit amputation）後預後良好（中位存活 > 1 年）',
    '犬口腔 SCC 分為非扁桃體型（rostrally located，預後較佳）和扁桃體型（tonsillar，預後極差）',
    'CT 是口腔 SCC 術前評估骨侵犯範圍的關鍵影像工具',
    '貓鼻平面 SCC 早期可用放射治療（curative-intent RT）或光動力療法（PDT），效果佳',
    'Piroxicam 可作為 SCC 的輔助或姑息性治療（COX-2 抑制劑抗腫瘤效應）',
  ],
  body: `# 鱗狀上皮細胞癌 (Squamous Cell Carcinoma, SCC)

## 一、流行病學與病因 (Epidemiology & Etiology)

### 犬 SCC
- 口腔 SCC：犬第二常見口腔惡性腫瘤（僅次於黑色素瘤）。好發於中老年犬（中位年齡 8-10 歲），大型犬較常見。非扁桃體型（rostral, gingival）預後優於扁桃體型（tonsillar）
- 甲床 SCC（Subungual SCC）：犬趾部最常見的惡性腫瘤，約占趾部腫瘤的 30-50%。黑色大型犬品種（Labrador、Standard Poodle、Rottweiler、Giant Schnauzer）好發。可能與色素沉著有關（非紫外線）
- 皮膚 SCC：較少見，好發於腹側皮膚（紫外線暴露少毛區域）。Dalmatian、Bull Terrier、Beagle 等淺色品種較易發生

### 貓 SCC
- 口腔 SCC：貓最常見的口腔惡性腫瘤，大約占 70%。好發老年貓（中位年齡 12 到 14 歲），舌底跟齒齦是最常見位置
- 鼻平面/耳尖 SCC（Solar/Actinic SCC）：紫外線暴露是主因。白色或淺色短毛貓好發（因為缺乏黑色素保護）。通常會從日光性角化症（actinic keratosis）、SCC in situ 一路進展到侵犯性 SCC
- 病因或風險因子：紫外線（UV-B）造成 DNA 損傷、p53 突變；環境致癌物接觸（跳蚤圈中的化學物質、二手菸有研究顯示跟貓口腔 SCC 風險增加有關）

## 二、臨床分類 (Clinical Classification)

### 貓口腔 SCC
- 好發位置：舌底（sublingual）、齒齦（gingival）、硬顎（hard palate）
- 臨床特徵：局部侵犯性極強，早期即侵犯下顎骨或上顎骨；遠端轉移率相對低（< 10-15%，但多數患貓在轉移前已因局部疾病惡化而安樂死）
- 預後：極差，各種治療方案的中位存活僅約 2-3 個月

### 貓鼻平面/耳尖 SCC
- 外觀：鼻平面、耳尖的結痂、潰瘍、紅斑，不癒合的傷口
- 進程：日光性皮膚炎 → 日光性角化症 → carcinoma in situ → 侵犯性 SCC
- 特性：早期局限於表皮/真皮，轉移率低；晚期可侵犯深層組織和軟骨

### 犬口腔 SCC
- 非扁桃體型（Rostral/Gingival）：最常見，局部侵犯骨骼但轉移率較低（< 20%），手術切除預後佳
- 扁桃體型（Tonsillar SCC）：極具侵犯性，確診時多已轉移（區域淋巴結 > 70%），預後極差

### 犬甲床 SCC
- 特徵：趾頭腫脹、蹄爪脫落（onychomadesis）、跛行
- 影像學：X 光顯示 P3（末端趾骨）溶骨性病變
- 生物行為：局部侵犯性強但遠端轉移率低（< 15%），截趾後預後良好

## 三、臨床表現 (Clinical Signs)

### 口腔 SCC（犬貓）
- 流涎（ptyalism）、口臭（halitosis）
- 進食困難（dysphagia）、食慾下降
- 口腔出血、牙齒鬆動
- 顏面腫脹（上顎）或下頷腫脹（下顎）
- 體重減輕

### 甲床 SCC（犬）
- 單一趾頭腫脹（digital swelling）
- 蹄爪脫落或變形
- 跛行
- 趾間潰瘍或出血
- 可能被誤診為甲溝炎或異物

### 皮膚/鼻平面 SCC（貓）
- 鼻平面結痂、潰瘍、出血
- 耳尖捲曲（ear tip curling）、結痂
- 慢性不癒合的皮膚傷口
- 可能伴有二次細菌感染

## 四、診斷 (Diagnosis)

### 細胞學與組織病理
- FNA 細胞學：可見角化的上皮細胞群，部分有核異型性。口腔 SCC 的 FNA 診斷率中等
- 組織活檢：確診的金標準。punch biopsy 或 incisional biopsy。注意貓口腔 SCC 常伴大量發炎，表層活檢可能只見發炎而漏診深層的腫瘤，需取深層組織

### 影像分期
- 口腔 SCC：CT 一定要做，評估骨侵犯範圍、淋巴結、肺轉移。CT 對手術切除範圍的規劃不能省
- 甲床 SCC：趾部 X 光（P3 溶骨性病變）+ 胸腔 X 光（肺轉移篩檢）
- 貓鼻平面 SCC：CT 評估侵犯深度，尤其是鼻腔和眶腔是否受侵犯

### 分期系統
- 犬口腔 SCC：WHO TNM 分期（T1 ≤ 2 cm, T2 2-4 cm, T3 > 4 cm）
- 區域淋巴結評估（下頷/咽後淋巴結 FNA）

## 五、治療 (Treatment)

### 手術
- 犬口腔 SCC（非扁桃體型）：mandibulectomy（下顎切除）或 maxillectomy（上顎切除），需 ≥ 1 cm 骨骼切緣。術後犬的功能恢復和生活品質通常良好
- 犬甲床 SCC：digit amputation（截趾），預後良好
- 貓口腔 SCC：mandibulectomy/maxillectomy 效果有限，因確診時多已廣泛侵犯
- 貓鼻平面 SCC：鼻平面切除（nosectomy）對早期病變有效

### 放射治療
- 貓鼻平面 SCC：curative-intent RT（strontium-90 plesiotherapy 或 orthovoltage RT）對 T1 病變有效，完全緩解率可達 85-95%（carcinoma in situ 或早期侵犯性 SCC）
- 犬口腔 SCC：術後 RT 用於切緣不完全的病例
- 貓口腔 SCC：palliative RT 可以短暫緩解，但是沒辦法明顯延長存活

### 化療與藥物治療
- Carboplatin：對 SCC 有中度療效（response rate 約 20-30%），可作為輔助或姑息治療
- Piroxicam（NSAID/COX-2 抑制劑）：有抗腫瘤效應，可作為姑息性單藥或與 carboplatin 併用
- Toceranib（Palladia）：多靶點 TKI，部分研究顯示對 SCC 有療效
- 光動力療法（PDT）：貓鼻平面/耳尖早期 SCC 的替代治療，需特殊設備

## 六、預後 (Prognosis)

| 亞型 | 中位存活時間 | 關鍵預後因子 |
|------|-------------|-------------|
| 犬口腔 SCC（非扁桃體） | 手術後 1-2 年以上 | 腫瘤位置（rostral 佳）、切緣狀態、TNM 分期 |
| 犬口腔 SCC（扁桃體） | 3-6 個月 | 確診時多已轉移，預後極差 |
| 犬甲床 SCC | 截趾後 > 1-2 年 | 單趾受侵犯且截趾，轉移率低 |
| 貓口腔 SCC | 約 2 個月（各治療方式） | 確診時多已晚期，治療反應差 |
| 貓鼻平面 SCC（早期） | RT 後 > 1-3 年 | 腫瘤分期（T1 佳）、完全切除/放療 |

## 七、台灣臨床相關性 (Taiwan Clinical Relevance)

- 白色短毛貓鼻平面/耳尖 SCC：台灣位於亞熱帶，日照強烈，白色短毛貓 SCC 發生率高。應建議飼主限制白色貓的日曬暴露
- 貓口腔 SCC：台灣貓口腔腫瘤中 SCC 占比最高，常因初期被誤診為齒齦炎而延誤就醫
- 犬甲床 SCC：台灣飼養大型犬（Labrador、Golden Retriever）普遍，甲床 SCC 並不罕見
- 治療可及性：放射治療在台灣僅少數教學醫院可提供；光動力療法更為稀少。手術和姑息性藥物治療為台灣目前主要可行的治療模式

[圖片:SCC 各解剖位置臨床影像，貓口腔/貓鼻平面/犬甲床/犬口腔比較]

## 八、人醫借鑑 (Translational Insights)

| 人醫概念/工具 | 與動物 SCC 的連結 | 現況 |
|-------------|----------------|------|
| UV/p53 致癌路徑 | 人皮膚/頭頸 SCC 與貓日光性 SCC 共享 UV-B → p53 突變機轉 | 機轉互通；防曬一級預防概念共用 |
| EGFR 標靶（cetuximab） | 人頭頸 SCC 標準療法之一 | 概念相關，但**獸醫直接應用證據有限**，非現行常規 |
| COX-2 抑制（piroxicam） | 人化學預防/抗腫瘤概念 | 獸醫用於 SCC 姑息/輔助；COX-2 表現於部分 SCC |
| 電化療（electrochemotherapy） | 人皮膚腫瘤局部控制技術 | 已移植到貓皮膚/鼻平面 SCC，局部控制佳 |
| Papillomavirus 相關 SCC | 人部分 SCC 與 HPV 相關 | 貓 papillomavirus 與部分皮膚 SCC（Bowenoid in situ）相關性研究中 |

## 九、臨床爭議與知識空缺 (Controversies & Knowledge Gaps)

| 議題 | 立場 | Evidence Level |
|------|------|---------------|
| 貓口腔 SCC 缺乏有效全身療法 | 各治療 MST 仍僅約 2-3 月；新療法（電化療、放療強化）多為小型研究 | Level III |
| 早期貓鼻平面 SCC 最佳局部療法 | RT/nosectomy/電化療/PDT 早期皆高控制率，缺頭對頭比較 | Level III |
| 電化療最佳藥物/劑量方案 | bleomycin/cisplatin + 電穿孔局部控制佳，劑量仍在優化（Dos Anjos 2020） | Level II |
| Piroxicam/COX-2 抑制的真實療效 | 機轉合理、部分反應，但缺大型 RCT | Level III |
| 犬甲床 SCC 是否需輔助治療 | 截趾多已足夠、轉移率低，輔助治療角色未定 | Level III |

## 十、近期實證更新（待 DVM 覆核）

1. **電化療（electrochemotherapy）**：bleomycin/cisplatin 瘤內注射 + 電穿孔，對貓皮膚/鼻平面 SCC 局部控制良好，為放療設備不足時的替代（Dos Anjos 2020, Sci Rep）。
2. **鍶-90 近接放療（Sr-90 plesiotherapy）**：早期（淺層）貓鼻平面 SCC 反應率與無病間隔佳（Berlato 2018, JFMS）。
3. **貓口腔 SCC 預後仍嚴峻**：跨治療 MST 約 2-3 月；早期診斷（任何不癒口腔病灶取深層活檢）與姑息照護仍是現實重點（Bilgic 2015）。
4. **防曬一級預防**：白色貓限制日曬、日光性角化症階段即積極處理，預後遠優於侵犯性 SCC。
> 臨床內容與所有劑量需獸醫師依現行指引與仿單核對。`,
  clinical_pearl: '貓口腔 SCC 很容易被誤診為慢性齒齦炎（gingivostomatitis），任何老年貓口腔中不癒合的潰瘍或「肉芽組織」樣病變，都要做深層組織活檢排除 SCC。表層活檢常常只看到發炎跟壞死組織，漏掉深處的腫瘤，至少要取到黏膜下層。\n\n犬甲床 SCC 的「趾頭紅腫」常常一開始被誤診為甲溝炎（paronychia）或異物感染，給抗生素治療幾週沒改善就要立刻拍 X 光檢查 P3 骨溶解。黑色大型犬任何單一趾頭腫脹都要高度懷疑甲床腫瘤。\n\n【台灣流行病學】白色短毛貓在台灣亞熱帶氣候下鼻平面跟耳尖 SCC 相當常見。早期病變（結痂期或日光性角化症）就要積極治療，等到侵犯性 SCC 形成治療難度就飆高。建議飼主給白色貓提供遮陰環境，避免中午時段日曬。',
  common_mistakes: [
    '老年貓口腔潰瘍只給抗生素沒活檢，延誤貓口腔 SCC 診斷',
    '口腔 SCC 活檢只取表層組織：常只看到發炎而漏掉深層腫瘤，要取深層組織',
    '犬趾頭腫脹長期用甲溝炎治療沒拍 X 光：延誤甲床 SCC 診斷',
    '告訴飼主貓口腔 SCC「手術可以治癒」：實際上各種治療方式中位存活只有大約 2 個月',
    '忽略白色短毛貓鼻平面結痂的早期預防：日光性角化症階段積極治療預後比侵犯性 SCC 好很多',
  ],
  disease_data: {
    signalment: '犬口腔 SCC：中老年犬（8-10 歲），大型犬；犬甲床 SCC：黑色大型犬（Labrador、Standard Poodle、Rottweiler、Giant Schnauzer），中位年齡 10 歲。貓口腔 SCC：老年貓（12-14 歲），無品種偏好。貓鼻平面/耳尖 SCC：白色或淺色短毛貓，中位年齡 11-12 歲。',
    etiology: '多因性。紫外線（UV-B）暴露為貓鼻平面/耳尖 SCC 的主因（p53 突變）。犬甲床 SCC 可能與色素沉著有關。環境致癌物（二手菸可能增加貓口腔 SCC 風險）。犬口腔 SCC 病因不明。',
    pathogenesis: '上皮細胞 DNA 損傷（UV、化學致癌物）→ p53/Rb 突變 → 上皮異型增生（dysplasia）→ carcinoma in situ → 突破基底膜形成侵犯性 SCC → 局部侵犯（骨骼、軟組織）→ 區域淋巴結轉移（口腔型）→ 遠端轉移（少見，但扁桃體型例外）',
    clinical_signs: [
      { sign: '口腔潰瘍或腫塊', category: 'primary', description: '口腔 SCC 的典型表現，常伴流涎、口臭、進食困難' },
      { sign: '趾頭腫脹/蹄爪脫落', category: 'primary', description: '犬甲床 SCC 的典型表現，伴跛行' },
      { sign: '鼻平面結痂/潰瘍', category: 'primary', description: '貓鼻平面 SCC 的典型表現，慢性不癒合' },
      { sign: '流涎和口臭', category: 'secondary', description: '口腔 SCC 伴隨的常見症狀' },
      { sign: '體重減輕', category: 'secondary', description: '因進食困難導致，尤其貓口腔 SCC' },
      { sign: '耳尖捲曲/結痂', category: 'secondary', description: '貓耳尖 SCC 的早期表現' },
    ],
    staging: {
      system: 'WHO TNM Staging for Oral Tumors',
      stages: [
        'T1：腫瘤最大徑 ≤ 2 cm',
        'T2：腫瘤最大徑 2-4 cm',
        'T3：腫瘤最大徑 > 4 cm',
        'N0：無區域淋巴結轉移',
        'N1：同側淋巴結轉移',
        'N2：對側或雙側淋巴結轉移',
      ],
    },
    differential_diagnosis: [
      { condition: '貓齒齦炎/口炎（Gingivostomatitis）', key_differentiator: '通常為雙側對稱性發炎，FIV/FCV 相關；SCC 多為單側或局灶性潰瘍/腫塊' },
      { condition: '口腔黑色素瘤', key_differentiator: '常有色素沉著（但無色素型存在），免疫組化 Melan-A/PNL-2 陽性' },
      { condition: '纖維肉瘤（Oral FSA）', key_differentiator: '組織學見紡錘形細胞而非角化上皮細胞' },
      { condition: '甲溝炎/異物（趾部）', key_differentiator: '抗生素反應佳、X 光無 P3 溶骨；SCC 抗生素無效且 X 光見骨溶解' },
      { condition: '嗜酸球性肉芽腫（貓）', key_differentiator: '口腔嗜酸球性肉芽腫複合體可模擬 SCC，但細胞學見嗜酸球浸潤' },
    ],
    diagnostic_workup: '1. 口腔檢查（需鎮靜/麻醉下完整檢查）→ 2. FNA 細胞學或深層活檢（組織病理為金標準）→ 3. CT（口腔 SCC 必備，骨侵犯評估、手術規劃）→ 4. 區域淋巴結 FNA（下頷/咽後）→ 5. 胸腔三面 X 光（肺轉移篩檢）→ 6. 趾部 X 光（甲床 SCC，P3 溶骨評估）',
    treatment_protocol: '依解剖位置而異。犬口腔 SCC（非扁桃體型）：mandibulectomy/maxillectomy ≥ 1 cm 骨切緣，預後佳。犬甲床 SCC：digit amputation，預後良好。貓口腔 SCC：各治療效果有限，palliative care 為主。貓鼻平面 SCC（早期）：nosectomy 或 curative-intent RT（Sr-90 或 orthovoltage），完全緩解率高。藥物輔助：Piroxicam（COX-2 抑制）± Carboplatin。',
    prognosis: '犬口腔 SCC（非扁桃體型）手術後：MST 1-2 年以上。犬扁桃體 SCC：MST 3-6 個月（多已轉移）。犬甲床 SCC 截趾後：MST > 1-2 年。貓口腔 SCC：MST 約 2 個月（各治療方式）。貓鼻平面 SCC（早期 + RT）：MST > 1-3 年。',
    monitoring: '口腔 SCC 術後：每 2-3 個月口腔檢查（鎮靜下）+ 區域淋巴結評估。每 3 個月胸腔 X 光追蹤。甲床 SCC 截趾後：每 3 個月追蹤 + 檢查其他趾頭（可能多趾發生）。貓鼻平面 SCC RT 後：每 2 個月追蹤局部復發。',
    owner_communication: '不同解剖位置的 SCC 預後差異極大，犬甲床 SCC 截趾後預後良好，但貓口腔 SCC 預後極差。貓口腔 SCC 確診後應坦誠告知飼主預後有限，討論姑息性照護和生活品質目標。白色貓飼主應被教育防曬的重要性，限制日曬暴露可預防鼻平面/耳尖 SCC。犬口腔 SCC 飼主需了解 mandibulectomy/maxillectomy 術後犬的外觀和功能恢復通常良好。',
  },
  diagnostic_data: null,
  procedure_data: null,
  visual_placeholders: [
    { position: '臨床分類段落後', type: 'comparison_table', description: '犬貓 SCC 各解剖位置臨床特徵與預後比較表' },
    { position: '治療段落後', type: 'flowchart', description: 'SCC 治療決策流程圖（依解剖位置分流）' },
  ],
  interactive_placeholders: [],
  drug_api_links: ['Carboplatin', 'Piroxicam', 'Toceranib'],
  references: [
    { type: 'textbook', citation: 'Vail DM, Thamm DH, Liptak JM. Withrow & MacEwen\'s Small Animal Clinical Oncology, 6th ed. Elsevier, 2020. Chapter 20: Tumors of the Alimentary Tract，Oral Tumors Section; Chapter 19: Tumors of the Skin and Subcutaneous Tissues，SCC Section.', relevance: 'SCC 完整章節（口腔與皮膚）' },
    { type: 'journal', citation: 'Bilgic O, et al. Feline Oral Squamous Cell Carcinoma: Clinical Manifestations and Literature Review. J Vet Dent. 2015;32(1):30-40. doi:10.1177/089875641503200104.', relevance: '貓口腔 SCC 臨床表現與文獻回顧' },
    { type: 'journal', citation: 'Dos Anjos C, et al. Comparison of two different doses of bleomycin in electrochemotherapy protocols for feline cutaneous squamous cell carcinoma. Sci Rep. 2020;10. doi:10.1038/s41598-020-75472-0.', relevance: '貓皮膚 SCC 電化療（bleomycin）劑量比較' },
    { type: 'journal', citation: 'Berlato D, et al. Response, disease-free interval and overall survival of cats with nasal planum squamous cell carcinoma treated with strontium-90 plesiotherapy. J Feline Med Surg. 2018. doi:10.1177/1098612X18773913.', relevance: '貓鼻平面 SCC 鍶-90 近接放療之反應與存活' },
    { type: 'journal', citation: 'Wobeser BK et al. Diagnoses and clinical outcomes associated with surgically amputated canine digits submitted to multiple veterinary diagnostic laboratories. Vet Pathol. 2007;44(3):355-361.', relevance: '犬趾部腫瘤（甲床 SCC）截趾預後' },
    { type: 'guideline', citation: 'Liptak JM, Withrow SJ. Oral Tumors. In: Withrow & MacEwen\'s Small Animal Clinical Oncology, 6th ed. Elsevier, 2020. pp. 381-398.', relevance: '口腔腫瘤手術與治療指引' },
  ],
  is_current: true,
  created_at: now,
};

/** 胰島素瘤，疾病型 */
const contentInsulinoma: NodeContent = {
  id: 'CONTENT-ONCO-L3-015',
  node_id: 'ONCO-L3-015',
  version: 2,
  summary: '胰島素瘤（Insulinoma）是犬最常見的功能性胰臟內分泌腫瘤，起源於胰臟 β 細胞，會過度分泌胰島素造成低血糖。中大型犬好發，中位年齡 9 到 10 歲。臨床表現是發作性虛弱、癲癇、collapse，符合 Whipple\'s triad（低血糖加低血糖症狀加給糖後症狀緩解）。診斷依據是禁食低血糖伴不適當的高胰島素。手術切除是首選治療，術後中位存活 12 到 18 個月。內科管理包括 Diazoxide 跟頻繁小餐。',
  learning_objectives: [
    '說明 Insulinoma 的病理生理機轉（β 細胞胰島素過度分泌 → 低血糖）',
    '描述 Whipple\'s triad 並應用於臨床診斷',
    '說明現行診斷（配對低血糖＋不適當胰島素），並理解 AIGR 已列為過時、不建議單獨使用',
    '擬定 Insulinoma 的診斷檢查流程（禁食試驗、影像學定位）',
    '比較手術治療與內科管理的適應症和預後',
    '掌握低血糖急救的處理步驟（dextrose bolus）',
  ],
  key_points: [
    'Insulinoma 是犬最常見的功能性胰臟內分泌腫瘤，β 細胞不受調節地分泌胰島素',
    '好發於中大型犬（中位年齡 9-10 歲），German Shepherd、Irish Setter、Golden Retriever、Boxer 較常見',
    'Whipple\'s triad：(1) 空腹或運動後低血糖症狀、(2) 血糖 < 60 mg/dL、(3) 給糖後症狀緩解',
    '低血糖 + 血清胰島素不適當偏高（insulin > 正常下限 when glucose < 60 mg/dL）為診斷關鍵',
    '手術為首選治療：胰臟部分切除（partial pancreatectomy），術中肉眼檢查+觸診定位腫瘤',
    'Diazoxide 為首選內科藥物（起始 5 mg/kg PO q12h、可上調至最高 30 mg/kg q12h）：抑制胰島素分泌、促糖質新生/肝醣分解、抑組織攝糖',
    '低血糖急救：dextrose 稀釋（約 1:2-1:4，達 ~10-25%）緩慢 IV、給控制症狀所需最小量、不追求血糖正常化；避免快速大量（刺激更多胰島素分泌）',
    '絕大多數為惡性（>95%，與人類 ~80% 良性相反）；約 40-50% 確診時已有可見轉移，最常見於區域淋巴結與肝臟（Buishand 2022）',
  ],
  body: `# 胰島素瘤 (Insulinoma)

## 一、流行病學 (Epidemiology)

Insulinoma 是犬最常見的功能性胰臟內分泌腫瘤，但整體發病率還是算罕見。

### 好發特徵
- 物種：主要發生在犬，貓極罕見
- 年齡：中老年犬，中位年齡 9 到 10 歲（範圍 3 到 14 歲）
- 品種：中大型犬比較常見，德國牧羊犬、Irish Setter、黃金、拳師犬、Standard Poodle、Fox Terrier
- 性別：沒有明顯性別偏好

## 二、病理生理 (Pathophysiology)

### β 細胞腫瘤的胰島素過度分泌
正常情況下，胰臟 β 細胞的胰島素分泌受血糖濃度負回饋調控，血糖降低時，胰島素分泌減少。Insulinoma 的腫瘤性 β 細胞喪失此負回饋機制，在血糖已低的情況下仍持續分泌胰島素。

### 低血糖的後果
- 神經性低血糖症狀（Neuroglycopenia）：大腦幾乎完全依賴葡萄糖作為能量來源。血糖 < 60 mg/dL 時出現：虛弱、共濟失調、迷茫、顫抖、癲癇發作、昏迷
- 腎上腺素反應（Adrenergic response）：交感神經活化，心搏加速、顫抖、焦躁、飢餓感
- 慢性適應：長期慢性低血糖的犬可能因大腦適應而症狀不明顯，直到血糖極低時才發作

### Whipple's Triad
診斷 insulinoma 的經典臨床三要素：
1. 空腹或運動後出現低血糖相關症狀
2. 發作時血糖 < 60 mg/dL（< 3.3 mmol/L）
3. 給予葡萄糖後症狀迅速緩解

## 三、臨床表現 (Clinical Signs)

### 發作性特徵
Insulinoma 的臨床表現具有間歇性和發作性的特點，症狀常在空腹、運動或興奮後出現，持續數秒至數分鐘後自行緩解（因 counter-regulatory hormones 作用）。

### 常見症狀（依頻率排列）
1. 發作性虛弱/無力（最常見，約 65-80%）
2. 癲癇發作（seizures）（約 30-50%）
3. 共濟失調（ataxia）
4. 後肢無力（pelvic limb weakness）
5. collapse
6. 顫抖（trembling/fasciculations）
7. 意識混亂/迷茫
8. 過度飢餓感

### 重要：症狀的間歇性
飼主常描述「突然軟腳」、「呆滯」、「走路不穩」，數分鐘後恢復正常。這種間歇性症狀是 insulinoma 的重要線索。

## 四、診斷 (Diagnosis)

### 實驗室檢查
- 血糖：禁食後（或發作時）血糖 < 60 mg/dL。注意：隨機血糖可能正常（因 counter-regulatory hormones）
- **血清胰島素（配對取樣，現行金標準）**：低血糖時（血糖 <60 mg/dL / <3.5 mmol/L）同步測胰島素，若不適當偏高（>正常下限；Buishand 建議 >10 μU/mL）高度支持 insulinoma——不需絕對值很高
- ⚠️ **AIGR（Amended Insulin-to-Glucose Ratio）已過時、不建議單獨使用**：公式 = [胰島素(μU/mL)×100]÷[血糖(mg/dL)−30]，AIGR>30 曾為傳統閾值；但現行文獻（Buishand 2022）認為各種 insulin:glucose 比值**特異性差、偽陽性高**（肝病、敗血症、非胰島腫瘤皆可升高，且部分 insulinoma 犬 AIGR 反而正常），禁食計算過程亦有誘發低血糖風險，已列為 obsolete。現行以**配對取樣**診斷（見上）。
- 禁食試驗：若隨機血糖正常，可進行 12-72 小時禁食試驗（住院監控下），每 1-2 小時測血糖和胰島素，直到血糖 < 60 mg/dL（<3.5 mmol/L）時配對測胰島素

### 影像學定位
- 腹部超音波：偵測率約 25-40%（文獻 23-75%、操作者依賴），腫瘤常很小（< 1-2 cm）
- 增強 CT（首選**三相 triple-phase**）：原發瘤偵測率約 **96%**（傳統單/雙相約 71%）；惟腫瘤在胰內的精確定位準確率僅約 50%；淋巴結轉移敏感度約 67%、肝轉移約 75%（Buishand 2022）
- 術中觸診/探查性剖腹：**偵測原發及轉移病灶最可靠的方法**，仔細檢查整個胰臟和肝臟

### 排除其他低血糖原因
- 肝功能不全（低白蛋白、BUN 降低、膽酸升高）
- 敗血症（發燒、白血球異常）
- Addison's disease（低鈉高鉀、ACTH 刺激試驗）
- 腫瘤相關低血糖（大型肉瘤分泌 IGF-II）
- 幼犬/toy 品種低血糖
- 外源性胰島素過量（醫源性）

## 五、治療 (Treatment)

### 手術治療（首選）
- 胰臟部分切除術（Partial pancreatectomy）：術中仔細觸診和檢查整個胰臟，切除可見腫瘤。若未見明顯腫塊，可考慮 distal pancreatectomy
- 術中肝臟檢查：評估肝臟轉移灶並取活檢
- 術後併發症：胰臟炎（最常見）、暫時性高血糖（殘存正常 β 細胞被長期低血糖抑制後功能恢復）、傷口感染
- 術後 24-48 小時監控血糖：每 2-4 小時測一次

### 內科管理
適用於不宜手術、拒絕手術、術後復發或轉移性患犬：

- 飲食管理：頻繁小餐（每天 4-6 餐），高蛋白質、高脂肪、高複合碳水化合物飲食。避免單純糖類（刺激更多胰島素分泌）。避免空腹和劇烈運動
- Diazoxide：**起始 5 mg/kg PO q12h，依需要上調至最高 30 mg/kg q12h（≈60 mg/kg/day）**，首選內科藥物。機轉：抑制 β 細胞胰島素分泌 + 促糖質新生/肝醣分解 + 抑制組織攝糖。副作用：嘔吐、腹瀉、食慾下降
- Prednisone/Prednisolone：0.25-0.5 mg/kg PO BID。機轉：促進糖質新生、拮抗胰島素作用。長期使用的副作用：PU/PD、肌肉萎縮、醫源性 Cushing
- Octreotide（Somatostatin analogue）：10-40 μg/dog SC BID-TID。抑制胰島素分泌，但療效個體差異大
- Streptozotocin：針對 β 細胞的化療藥物，需大量生理食鹽水利尿防止腎毒性。使用經驗有限，不是常規推薦

### 低血糖急救
- 緊急處理：dextrose **稀釋（約 1:2-1:4，達 ~10-25%）緩慢 IV（5-10 分鐘）**，給**控制症狀所需最小量、不追求血糖正常化**（Buishand 2022：20% glucose 1 mL/kg over 5-10 min）
- 維持輸液：2.5-5% dextrose in 0.9% NaCl CRI，維持血糖 60-120 mg/dL
- 注意：避免快速大量高濃度 dextrose，會刺激（腫瘤）胰島素分泌更多、造成反彈性低血糖
- 居家急救：飼主可給予少量 corn syrup / honey 塗抹牙齦

## 六、預後 (Prognosis)

### 手術預後
- 術後 MST 與分期強相關（Cleland 2020，n=49）：**Stage I 約 766 天（~25 個月）；Stage II 約 574 天（~19 個月）；Stage III 約 182 天（~6 個月）；整體 MST 561 天**（早期 Caywood 1988：Stage I ~18 個月、Stage III ~6 個月）。**⚠️ Stage II 存活接近 Stage I，勿與 Stage III 混為一談**。
- 手術+內科（復發時加 prednisolone）可延長存活（Polton 2007：手術 785 天、加 prednisolone 1316 天）。
- 手術後低血糖初期多緩解，但長期預後保守：**約 40-45% 於術後 2 年內復發**（中位無病間隔 ~9-16 個月）。

### 臨床分期（Modified WHO）
- Stage I：胰臟腫瘤，無轉移
- Stage II：胰臟腫瘤 + 區域淋巴結轉移
- Stage III：遠端轉移（肝臟最常見）

### 預後因子
- 臨床分期（最重要）
- 術後血糖是否恢復正常（恢復 = 完全切除，預後較佳）
- 腫瘤大小（較大腫瘤預後較差）
- 低血糖的嚴重程度

## 七、台灣臨床相關性 (Taiwan Clinical Relevance)

- 台灣犬隻以中大型犬（Labrador、Golden Retriever、German Shepherd）為多，insulinoma 並非罕見
- 需與其他低血糖原因鑑別：幼犬/toy breed 低血糖、Addison's disease、肝功能不全
- **口服 Diazoxide（Proglycem 口服懸浮液）在台灣未取得一般藥證**，屬罕見疾病專案進口藥（經食藥署專案進口、由罕病物流中心配送，人用適應症為 PHHI）；台灣核准的 diazoxide 多為注射劑（高血壓危象用），非本適應症所需劑型。實務上多依賴專案進口人用製劑或專門調劑藥局配製
- 腹部超音波為初步定位工具，CT 增強掃描在大型教學醫院可執行
- 飼主教育重點：頻繁小餐、避免空腹和劇烈運動、居家低血糖急救處理

[圖片:Insulinoma 診斷與治療決策流程圖，低血糖鑑別 → 禁食試驗 → 影像定位 → 手術/內科管理]`,
  clinical_pearl: '「低血糖時胰島素卻不低」是 insulinoma 的核心診斷概念。正常低血糖時胰島素應被抑制至極低；若低血糖時胰島素仍 > 正常下限（即使不是特別高），即屬「不適當偏高」，高度支持 insulinoma。不需要胰島素絕對值很高才能診斷。\n\n低血糖急救的陷阱：避免快速大量推注高濃度 dextrose（50%），會刺激（腫瘤）胰島素分泌更多、造成反彈性低血糖。應稀釋（約 1:2-1:4，~10-25%）後緩慢推注、給控制症狀所需最小量。\n\n【台灣流行病學】台灣中大型犬飼養比例高，insulinoma 並非少見。許多患犬初期以「癲癇」或「後肢無力」就診被誤導至神經科方向，測量血糖是低成本高收益的篩檢步驟。任何中老年大型犬的新發癲癇都應先排除低血糖。',
  common_mistakes: [
    '中老年犬新發癲癇直接進行腦部 MRI 而未先測血糖，insulinoma 是可治療的低血糖原因',
    '隨機血糖正常即排除 insulinoma，需在低血糖發作時同步測胰島素，或進行禁食試驗',
    '快速靜脈推注 50% dextrose，刺激更多胰島素分泌造成反彈性低血糖，應稀釋後緩慢給予',
    '術後血糖正常即認為治癒——約 40-45% 於 2 年內復發（中位無病間隔 ~9-16 個月），需長期監控',
    '餵食單純糖類（果糖、蜂蜜大量給予）來治療慢性低血糖，會刺激更多胰島素分泌，應用複合碳水化合物和蛋白質',
  ],
  disease_data: {
    signalment: '中大型犬，中位年齡 9-10 歲（範圍 3-14 歲）。German Shepherd、Irish Setter、Golden Retriever、Boxer、Standard Poodle 較常見。無明顯性別偏好。貓極罕見。',
    etiology: '確切病因不明。胰臟 β 細胞發生腫瘤性轉化，可能涉及 MEN1 等基因。犬 insulinoma 絕大多數為惡性（>95%，與人類 ~80% 良性腺瘤相反）；約 40-50% 確診/手術時已有可見轉移，最常見於區域（胰周/腹腔）淋巴結與肝臟（Buishand 2022）。',
    pathogenesis: '胰臟 β 細胞腫瘤性轉化 → 喪失血糖負回饋調控 → 不受調節地持續分泌胰島素 → 持續性低血糖 → 神經性低血糖症狀（大腦能量不足）+ 腎上腺素代償反應 → 反覆發作性虛弱/癲癇/collapse',
    clinical_signs: [
      { sign: '發作性虛弱/無力', category: 'primary', description: '最常見症狀（65-80%），空腹或運動後出現，數分鐘內可自行緩解' },
      { sign: '癲癇發作', category: 'primary', description: '約 30-50%，嚴重低血糖導致的大腦能量不足' },
      { sign: '後肢無力/共濟失調', category: 'primary', description: '「突然軟腳」是飼主常見描述' },
      { sign: 'Collapse/昏迷', category: 'primary', description: '嚴重低血糖可致失去意識' },
      { sign: '顫抖/肌肉束狀跳動', category: 'secondary', description: '腎上腺素反應和神經肌肉興奮性增加' },
      { sign: '過度飢餓/焦躁', category: 'secondary', description: '低血糖引發的代償性反應' },
    ],
    staging: {
      system: 'Modified WHO Clinical Staging for Canine Insulinoma',
      stages: [
        'Stage I：腫瘤局限於胰臟，無轉移',
        'Stage II：腫瘤侵犯區域淋巴結',
        'Stage III：遠端轉移（最常見為肝臟）',
      ],
    },
    differential_diagnosis: [
      { condition: '肝功能不全', key_differentiator: '低白蛋白、低 BUN、膽酸升高、肝酵素異常；insulin 正常偏低' },
      { condition: 'Addison\'s disease（腎上腺皮質不全）', key_differentiator: '低鈉高鉀、ACTH 刺激試驗異常；可伴低血糖但胰島素正常' },
      { condition: '敗血症', key_differentiator: '發燒、白血球異常、明確感染源；低血糖為全身疾病的一部分' },
      { condition: '腫瘤相關低血糖（Non-islet cell tumor）', key_differentiator: '大型肉瘤（肝臟或腹腔）分泌 IGF-II 導致低血糖；胰島素通常偏低' },
      { condition: '幼犬/Toy breed 低血糖', key_differentiator: '幼齡或極小型犬，肝醣儲存不足；禁食即發作，給糖即緩解' },
      { condition: '外源性胰島素過量', key_differentiator: '病史（糖尿病治療中犬）、胰島素極高但 C-peptide 低（外源性 insulin 不含 C-peptide）' },
    ],
    diagnostic_workup: '工作流程：先做 CBC/生化（基礎評估、排除肝病），接著空腹血糖（<60 mg/dL / <3.5 mmol/L 時**配對同步測血清 insulin**，不適當偏高即支持）；隨機血糖正常則住院禁食 12-72 小時試驗；**AIGR 已過時、不建議單獨使用**；腹超初步定位＋三相增強 CT 精準定位/分期（術中觸診/剖腹最可靠），胸腔 X 光/CT 看遠端轉移。',
    treatment_protocol: '首選手術：partial pancreatectomy ± 肝轉移灶活檢/切除。術前穩定血糖（dextrose CRI）。術後監控血糖 48 小時。內科管理（不宜手術者）：頻繁小餐 + Diazoxide（起始 5 mg/kg PO q12h，上調至最高 30 mg/kg q12h）+ Prednisolone 0.25-0.5 mg/kg PO BID。低血糖急救：稀釋 dextrose（~10-25%）緩慢 IV、給最小必要量 + 2.5-5% dextrose CRI。劑量須依仿單與獸醫核對。',
    prognosis: '術後 MST 與分期強相關（Cleland 2020，n=49）：Stage I ~766 天(~25mo)、Stage II ~574 天(~19mo，接近 Stage I)、Stage III ~182 天(~6mo)，整體 561 天。手術+內科（復發加 prednisolone）可延長（Polton 2007：手術 785 天、加 pred 1316 天）。約 40-45% 於術後 2 年內復發（中位無病間隔 ~9-16 個月）。術後血糖正常化為良好預後指標。',
    monitoring: '術後：每 2-4 小時測血糖共 48 小時 → 穩定後每 1-2 個月追蹤空腹血糖 → 每 3 個月腹部超音波（胰臟復發/肝轉移）→ 低血糖復發時重新評估手術或調整內科藥物。內科管理者：每 2-4 週追蹤血糖和症狀，漸進調整 Diazoxide 劑量。',
    owner_communication: 'Insulinoma 是可以治療但通常沒辦法治癒的腫瘤。手術可以明顯延長存活時間、改善生活品質。飼主要學居家低血糖急救（corn syrup 塗抹牙齦）。飲食管理是長期照護的關鍵：少量多餐、避免空腹跟劇烈運動。內科藥物可以有效控制低血糖，但可能要慢慢加量。要定期回診監控。',
  },
  diagnostic_data: null,
  procedure_data: null,
  visual_placeholders: [
    { position: '病理生理段落後', type: 'flowchart', description: 'Insulinoma 低血糖病理機轉示意圖' },
    { position: '治療段落後', type: 'flowchart', description: 'Insulinoma 診斷與治療決策流程圖' },
  ],
  interactive_placeholders: [
    { position: '診斷段落後', type: 'decision_tree', description: '互動：中老年犬發作性虛弱/新發癲癇 → 測血糖 → 低血糖時配對測胰島素（不適當偏高）→ 影像定位（超音波/CT）→ 手術 vs 內科' },
  ],
  drug_api_links: ['Diazoxide', 'Prednisone', 'Dextrose', 'Octreotide'],
  references: [
    { type: 'journal', citation: 'Buishand FO. Current Trends in Diagnosis, Treatment and Prognosis of Canine Insulinoma. Vet Sci. 2022;9(10):540. doi:10.3390/vetsci9100540.', relevance: '現行綜述（≤5年）：犬 insulinoma 診斷/治療/預後（含診斷方法演變）' },
    { type: 'journal', citation: 'Cleland NT, et al. Outcome after surgical management of canine insulinoma in 49 cases. Vet Comp Oncol. 2020;19(3):428-441. doi:10.1111/vco.12628.', relevance: '近年犬 insulinoma 手術治療結果（49 例，預後溯源）' },
    { type: 'journal', citation: 'Tobin RL, et al. Outcome of surgical versus medical treatment of dogs with beta cell neoplasia: 39 cases (1990-1997). J Am Vet Med Assoc. 1999;215(2):226-230. doi:10.2460/javma.1999.215.02.226.', relevance: '犬 insulinoma 手術 vs 內科治療比較（39 例）' },
    { type: 'textbook', citation: 'Vail DM, Thamm DH, Liptak JM. Withrow & MacEwen\'s Small Animal Clinical Oncology. 6th ed. Elsevier; 2020.', relevance: '腫瘤科教科書，內分泌腫瘤/insulinoma 章節' },
    { type: 'textbook', citation: 'Nelson RW, Couto CG. Small Animal Internal Medicine. 6th ed. Elsevier; 2020.', relevance: '內科教科書，內分泌胰臟疾病/insulinoma 章節' },
  ],
  is_current: true,
  created_at: now,
};

/** 靶向治療與酪氨酸激酶抑制劑，治療型 */
const contentTKI: NodeContent = {
  id: 'CONTENT-ONCO-L5-006',
  node_id: 'ONCO-L5-006',
  version: 1,
  summary: '酪氨酸激酶抑制劑（Tyrosine Kinase Inhibitors, TKIs）是獸醫腫瘤科第一類真正的靶向治療藥物。Toceranib phosphate（Palladia）是 FDA 核准的犬用多靶點 TKI，抑制 VEGFR、PDGFR 跟 KIT；Masitinib（Masivet/Kinavet）主要靶向 c-KIT 突變型 MCT。TKI 是獸醫腫瘤治療從傳統細胞毒性化療邁向精準醫學的里程碑。',
  learning_objectives: [
    '說明 TKI 的作用機轉（VEGFR、PDGFR、KIT 抑制）',
    '比較 Toceranib 與 Masitinib 的適應症、劑量與副作用差異',
    '描述 c-KIT 突變檢測在 MCT 治療決策中的角色',
    '列出 TKI 常見副作用與監控計畫',
    '說明節拍式化療（metronomic chemotherapy）與 TKI 的協同策略',
  ],
  key_points: [
    'Toceranib（Palladia）：多靶點 TKI，抑制 VEGFR2、PDGFR-β、KIT、Flt-3、RET',
    'Masitinib（Masivet）：選擇性 KIT 抑制劑，主要用於不可切除 c-KIT 突變型 MCT',
    '犬 MCT 約 25-30% 有 c-KIT（exon 11）突變，突變型對 TKI 反應率更高（~60% vs ~40%）',
    'Toceranib 標準劑量：3.25 mg/kg PO 隔日給藥（Monday-Wednesday-Friday）；副作用管理常需劑量調整',
    '主要副作用：腸胃道（厭食/嘔吐/腹瀉 40-50%）、蛋白尿（30%）、高血壓、嗜中性球減少、跛行',
    '監控：每 2 週 CBC + 生化（最初 6 週），之後每 4-6 週；每月血壓 + 尿蛋白/肌酐比值',
  ],
  body: `# 靶向治療與酪氨酸激酶抑制劑 (TKI)

## 一、作用機轉 (Mechanism of Action)

### 酪氨酸激酶信號通路
受體酪氨酸激酶（Receptor Tyrosine Kinases, RTKs）在腫瘤增殖、血管新生與轉移中扮演關鍵角色：
- KIT（CD117）：肥大細胞、造血幹細胞表面受體，c-KIT 突變導致構成性活化（constitutive activation）→ 不受控增殖
- VEGFR（1/2/3）：血管內皮生長因子受體，驅動腫瘤血管新生（tumor angiogenesis）
- PDGFR（α/β）：血小板衍生生長因子受體，促進基質細胞增殖與腫瘤微環境重塑

### TKI 作用原理
TKI 為小分子藥物，競爭性結合 RTK 的 ATP 結合位點，阻斷下游訊號傳遞（Ras-MAPK、PI3K-AKT 等），導致腫瘤細胞增殖停止與凋亡。

## 二、藥物各論

### Toceranib phosphate（Palladia）
| 項目 | 內容 |
|------|------|
| 靶點 | VEGFR2, PDGFR-β, KIT, Flt-3, RET |
| FDA 核准適應症 | 犬不可切除 Grade II-III MCT（Patnaik 分級） |
| 劑量 | 3.25 mg/kg PO 隔日（MWF 給藥常見） |
| 反應率 | 整體 ORR ~42%；c-KIT 突變型 ~60%；野生型 ~37% |
| 藥物交互 | 避免與 NSAIDs 併用（增加 GI 毒性）；P-glycoprotein 基質 |

### Masitinib（Masivet/Kinavet）
| 項目 | 內容 |
|------|------|
| 靶點 | KIT（高選擇性）、PDGFR-α、LYN、FGFR3 |
| 核准適應症 | 犬不可切除 c-KIT 突變型 MCT（EMA 核准） |
| 劑量 | 12.5 mg/kg PO SID |
| 反應率 | c-KIT 突變型 ORR ~50%；中位存活時間較對照組延長 |
| 特點 | 對 c-KIT exon 11 突變選擇性高，非 KIT 依賴腫瘤效果有限 |

## 三、c-KIT 突變檢測（生物標記驅動治療）

### c-KIT 突變的臨床意義
- 犬 MCT 約 25-30% 有 c-KIT 突變（主要在 exon 11 juxtamembrane domain）
- 突變導致 KIT 受體構成性磷酸化，不需 SCF 配體即持續活化
- 突變型對 TKI 反應較好：但野生型也可從 VEGFR/PDGFR 抑制中獲益
- KIT 免疫組化染色模式（pattern I/II/III）可預測生物行為

### 檢測方法
- PCR + 定序：金標準，檢測 exon 11 內部串聯重複（ITD）
- KIT IHC 染色模式：Pattern III（瀰漫性細胞質染色）與較差預後相關
- 建議不可切除/復發 MCT 均應送 c-KIT 突變檢測

## 四、副作用與監控

### 常見副作用（Toceranib 為例）
| 副作用 | 發生率 | 管理 |
|--------|--------|------|
| 腸胃道（厭食/嘔吐/腹瀉） | 40-50% | 劑量減量、止吐藥（Maropitant）、drug holiday |
| 嗜中性球減少 | 20-30% | 暫停至 ANC > 1500/μL 再恢復 |
| 蛋白尿 | ~30% | 監控 UPC；UPC > 2.0 考慮劑量調整或停藥 |
| 高血壓 | 15-25% | 定期血壓監測；Amlodipine 5-10 mg/kg 控制 |
| 跛行/肌肉疼痛 | 10-20% | 鎮痛處理、drug holiday |
| 手掌/足底角質增生（hand-foot 等效） | 少見 | 保溼、劑量調整 |

### 監控計畫
| 時間點 | 監測項目 |
|--------|---------|
| 基線 | CBC、生化（含 BUN/Cre/ALT/ALP）、UPC、血壓、腫瘤測量 |
| 每 2 週（最初 6 週） | CBC、生化 |
| 之後每 4-6 週 | CBC、生化、UPC、血壓 |
| 每 4-8 週 | 腫瘤測量/影像評估療效 |

## 五、節拍式化療與 TKI 的協同

### 概念
低劑量持續給藥（metronomic chemotherapy）+ TKI 可同時靶向腫瘤細胞與腫瘤微環境：
- Cyclophosphamide metronomic（10-15 mg/m² PO SID）：抗血管新生 + 免疫調節
- Toceranib + Cyclophosphamide：協同抗血管新生，部分研究顯示比單藥更佳
- Piroxicam + Toceranib：注意 GI 毒性風險增加，需謹慎監控

## 六、台灣可用性與實務考量

- Toceranib（Palladia）：台灣可通過進口取得，但價格昂貴
- Masitinib（Masivet）：台灣可用性更受限
- c-KIT 突變檢測：可外送至國外實驗室（美國 CU/MSU），周轉時間 2-3 週
- 替代方案：Imatinib（人用 Glivec）偶有超標使用報告，但缺乏獸醫藥動學資料

## 七、人醫借鑒 (Translational Insights)

| 人醫工具/概念 | 獸醫應用潛力 | 現況 |
|-------------|-------------|------|
| 液態切片（circulating tumor DNA） | MCT 治療中的微小殘留病偵測與早期復發預警 | 犬初步研究中 |
| 免疫查核點抑制劑（anti-PD-1/PD-L1） | 犬腫瘤免疫治療的新前沿 | 犬專用 anti-PD-L1 臨床試驗進行中 |
| 多靶點組合（TKI + 免疫治療） | 協同抗腫瘤效果 | 人醫已成為多種癌症標準治療，獸醫探索階段 |`,
  clinical_pearl: 'Toceranib 實務處方有幾個技巧。第一，起始劑量 3.25 mg/kg 隔日，但臨床上大約 50% 的犬在治療初期會因為 GI 副作用減量到 2.75 mg/kg 或暫停 1 到 2 天（drug holiday）。第二，絕對不要跟 NSAIDs 併用，GI 穿孔風險會飆高。第三，蛋白尿是常被低估的副作用，每次回診都要檢查 UPC。第四，就算是野生型 MCT，Toceranib 還是有大約 37% 反應率（靠 VEGFR/PDGFR 抑制），所以不要因為 c-KIT 陰性就放棄 TKI。第五，要跟飼主說清楚：TKI 是「長期口服管理」不是短期療程，要準備好持續用藥跟監控的費用跟時間。\n\n【台灣實務】Toceranib 價格大約每錠 500 到 1000 台幣，中大型犬月費可以到 15,000 到 30,000 台幣。建議開始 TKI 前先跟飼主把費用跟預期效果談清楚。',
  common_mistakes: [
    '開始 TKI 前沒做 c-KIT 突變檢測：會錯失精準治療機會',
    '把 Toceranib 跟 NSAIDs（像 Piroxicam）併用而沒有密切監控 GI 毒性',
    '忽略定期監控蛋白尿（UPC）跟血壓：等到臨床症狀出現才發現就已經嚴重了',
    '嗜中性球過低（ANC 小於 1500/μL）時還繼續給藥：感染風險會增加',
    'c-KIT 突變陰性就完全排除 TKI：野生型還是可以從 VEGFR 抑制獲益',
  ],
  disease_data: null,
  diagnostic_data: null,
  procedure_data: null,
  visual_placeholders: [
    { position: 'RTK 信號通路段落後', type: 'pathway_diagram', description: 'VEGFR/PDGFR/KIT 訊號通路與 TKI 作用位點示意圖' },
    { position: '副作用表格後', type: 'monitoring_timeline', description: 'TKI 監控計畫時間軸圖' },
  ],
  interactive_placeholders: [
    { position: '文末', type: 'decision_tree', description: 'MCT 治療決策樹：可切除 vs 不可切除 × c-KIT 突變狀態' },
  ],
  drug_api_links: ['Toceranib', 'Masitinib', 'Cyclophosphamide', 'Piroxicam'],
  references: [
    { type: 'journal', citation: 'London CA et al. Multi-center, placebo-controlled, double-blind, randomized study of oral toceranib phosphate (Palladia, SU11654), a receptor tyrosine kinase inhibitor, for the treatment of dogs with recurrent (either local or distant) mast cell tumor following surgical excision. Clin Cancer Res. 2009;15(11):3856-3865.', relevance: 'Toceranib FDA 核准臨床試驗（MCT）' },
    { type: 'journal', citation: 'Hahn KA et al. Masitinib is safe and effective for the treatment of canine mast cell tumors. J Vet Intern Med. 2008;22(6):1301-1309.', relevance: 'Masitinib 犬 MCT 臨床試驗' },
    { type: 'textbook', citation: 'Vail DM, Thamm DH, Liptak JM. Withrow and MacEwen\'s Small Animal Clinical Oncology, 6th ed. Elsevier, 2020. Chapter 18: Targeted Therapy.', relevance: '獸醫腫瘤靶向治療教材' },
    { type: 'journal', citation: 'Weishaar KM, et al. c-Kit Mutation and Localization Status as Response Predictors in Mast Cell Tumors in Dogs Treated with Prednisone and Toceranib or Vinblastine. J Vet Intern Med. 2018;32(1):394-405. doi:10.1111/jvim.14889.', relevance: 'c-KIT 突變與 TKI 治療反應預測' },
    { type: 'journal', citation: 'London CA, Malpas PB, Wood-Follis SL, et al. Multi-center, placebo-controlled, double-blind, randomized study of oral toceranib phosphate (SU11654) for the treatment of dogs with recurrent mast cell tumor following surgical excision. Clin Cancer Res. 2009;15(11):3856-3865. doi:10.1158/1078-0432.CCR-08-1860.', relevance: '酪胺酸激酶抑制劑 toceranib 樞紐 RCT' },
  ],
  is_current: true,
  created_at: now,
};

/** 肝細胞癌，疾病型 */
const contentHCC: NodeContent = {
  id: 'CONTENT-ONCO-L3-016',
  node_id: 'ONCO-L3-016',
  version: 1,
  summary: '肝細胞癌（Hepatocellular Carcinoma, HCC）是犬最常見的原發性肝臟腫瘤，占所有犬原發性肝臟腫瘤超過 50%。依形態學分成 massive（巨塊型，53 到 61%）、nodular（結節型）、diffuse（瀰漫型）三種。Massive 型預後最好，肝葉切除後中位存活時間超過 1460 天；diffuse 型預後最差。ALP 升高大約 80% 病例會出現。超音波是首要篩檢工具，CT 增強掃描用來做手術計畫。Toceranib 2.5 mg/kg EOD 可以當不可切除型的緩和治療。',
  learning_objectives: [
    '描述犬 HCC 的三種形態學分型及其預後差異',
    '說明 ALP 升高在 HCC 篩檢中的臨床意義',
    '列出 massive HCC 肝葉切除的手術適應症與禁忌症',
    '比較 HCC 與其他原發性肝臟腫瘤（膽管癌、類癌）的鑑別要點',
    '說明 Toceranib 在不可切除 HCC 的緩和治療角色',
  ],
  key_points: [
    'HCC 占犬原發性肝臟惡性腫瘤 > 50%，中老年犬好發（中位年齡 10-11 歲）',
    '三種形態：massive（53-61%，單一大腫塊，預後最好）、nodular（多個結節）、diffuse（瀰漫浸潤，預後最差）',
    'ALP 升高見於約 80% 病例（非特異性但高敏感度的篩檢指標）',
    'Massive HCC 肝葉切除後 MST > 1460 天（> 4 年），是少數手術可治癒的犬惡性腫瘤',
    'Nodular 型 MST 270-428 天，diffuse 型 MST < 6 個月',
    '轉移率整體低（0-37%），massive 型轉移率最低',
  ],
  body: `# 肝細胞癌 (Hepatocellular Carcinoma, HCC)

## 一、病理機制 (Pathophysiology)

### 概述
肝細胞癌是犬最常見的原發性肝臟惡性腫瘤，占所有犬原發性肝腫瘤超過 50%。中老年犬好發（中位年齡 10 到 11 歲），沒有明確品種偏好，部分研究顯示公犬稍多。病因還不清楚，跟人類不一樣的是，犬 HCC 跟肝硬化或病毒性肝炎沒有明確關聯。

### 形態學分型
Massive（巨塊型）占 53 到 61%，單一大腫塊侵犯單一肝葉，最常見的亞型也是預後最好的。Nodular（結節型）大約 20 到 30%，多個結節散布在多個肝葉。Diffuse（瀰漫型）最少見但預後最差，整個肝臟瀰漫性浸潤。

### 生物行為
Massive 型以局部侵犯為主，轉移率低（0 到 5%），手術切除可以治癒。Nodular 型中度惡性，可能會有區域淋巴結跟肺轉移。Diffuse 型高度惡性，早期轉移常見，會跑到肝門淋巴結、腹膜、肺。

## 二、臨床表現與診斷 (Clinical Signs & Diagnosis)

### 臨床表現
| 症狀類別 | 表現 | 發生率/備註 |
|---------|------|-----------|
| 非特異性 | 食慾下降、體重減輕、嗜睡 | 最常見主訴 |
| 腹部 | 腹部腫塊、腹部膨大 | Massive 型可觸及大型肝腫塊 |
| 急性 | 腹腔出血（腫瘤破裂） | 少見但可為首次就診主訴 |
| 肝功能 | 黃疸、腹水 | 晚期或 diffuse 型較常見 |
| 副腫瘤 | 低血糖（大型腫瘤分泌 IGF-II）、紅血球增多症 | 少見 |

### 實驗室檢查
- ALP 升高：約 80% 病例，HCC 可產生 corticosteroid-induced ALP isoenzyme
- ALT/AST：可正常或輕度升高
- 低白蛋白：晚期肝功能不全
- 低血糖：大型 HCC 可分泌 IGF-II 類物質

### 影像學
- 腹部超音波：首要篩檢，massive 型表現為單一肝葉大型混合回音腫塊
- 三期 CT 增強：手術前必備，評估腫瘤範圍、血管侵犯、手術可行性
- 胸腔 X 光：排除肺轉移

### 診斷確認
- FNA 細胞學：可輔助但有出血風險（肝臟高血管性腫瘤），且難以區分良性肝結節性增生 vs HCC
- 組織病理：金標準，Tru-cut biopsy 或手術切除後病理

## 三、治療策略 (Treatment)

### 手術治療（Massive 型首選）
- 肝葉切除（Hepatic lobectomy）：massive 型的治療首選，左側肝葉切除較右側/中央葉技術難度低
- 術前評估：凝血功能、肝功能儲備、CT 血管重建確認血管侵犯
- 術後併發症：出血（最常見）、膽汁漏、低白蛋白、低血糖
- 手術死亡率：約 5-10%（大型轉診醫院數據）

### 化學治療
- 傳統化療對 HCC 效果有限
- Toceranib（Palladia）：2.5 mg/kg PO 隔日，可作為不可切除型的緩和治療，部分病例見疾病穩定
- Metronomic cyclophosphamide：可考慮合併使用

### Nodular/Diffuse 型
- 手術切除通常不可行
- 緩和治療為主（Toceranib、支持療法）
- 預後不佳

## 四、鑑別診斷 (Differential Diagnosis)

| 鑑別疾病 | 關鍵區分點 |
|---------|-----------|
| 肝臟結節性增生（Nodular hyperplasia） | 老年犬極常見的良性病變，超音波難以區分，需病理確認 |
| 膽管癌（Cholangiocarcinoma） | 占原發肝腫瘤 22-41%，侵犯性更強，ALP 也會升高 |
| 肝臟類癌（Hepatic carcinoid） | 罕見，神經內分泌腫瘤 |
| 轉移性肝腫瘤 | 多發結節，需找到原發腫瘤（脾臟 HSA、胰臟腫瘤等） |
| 肝臟淋巴瘤 | 肝脾浸潤型淋巴瘤，FNA 可見淋巴母細胞 |

## 五、預後 (Prognosis)

| 亞型 | 中位存活時間 | 備註 |
|------|------------|------|
| Massive（手術切除） | > 1460 天（> 4 年） | 少數可手術治癒的犬惡性腫瘤 |
| Nodular | 270-428 天 | 手術切除困難 |
| Diffuse | < 180 天 | 預後最差，緩和治療為主 |

[圖片:HCC 形態學分型與預後比較圖，massive vs nodular vs diffuse]`,
  clinical_pearl: 'HCC 是犬少數「手術可治癒」的惡性腫瘤之一，但前提是 massive 型。臨床上遇到老年犬 ALP 異常升高（有時候可以到正常值 10 到 20 倍以上）加上腹超發現單一肝葉大型腫塊時，不要急著放棄，安排 CT 評估手術可行性，因為成功切除後的存活時間可以超過 4 年。\n\n台灣臨床實務重點幾個。第一，很多肝臟腫塊是健檢超音波意外發現的，ALP 異常升高是重要線索。第二，左側肝葉切除在有經驗的外科醫師手上是可行的手術。第三，不要只靠 FNA 就放棄手術，FNA 通常沒辦法區分良性增生跟 HCC。',
  common_mistakes: [
    '把 HCC 等同於人類肝癌的預後認知：犬 massive HCC 手術後預後很好（MST 超過 4 年），不該因為「肝癌」標籤就放棄治療',
    '只靠超音波判斷肝腫塊良惡性：超音波沒辦法可靠區分 HCC 跟結節性增生，要病理確認',
    '對所有型態的 HCC 一概而論：massive 型預後比 nodular 跟 diffuse 好很多，治療策略完全不同',
    '忽略術前 CT 評估：沒評估血管侵犯就動手術會增加術中大出血風險',
    'ALP 正常就排除 HCC：大約 20% 的 HCC 病例 ALP 可以正常',
  ],
  disease_data: {
    signalment: '中老年犬，中位年齡 10 到 11 歲（範圍 5 到 16 歲）。沒有明確品種偏好，部分研究顯示公犬稍多。貓的肝臟腫瘤以膽管癌比較常見。',
    etiology: '犬 HCC 病因不明。跟人類不一樣，犬 HCC 跟肝硬化、B/C 肝病毒沒關聯。可能跟慢性肝損傷、黃麴毒素暴露（動物模型已證實）、遺傳因素有關。',
    pathogenesis: '肝細胞惡性轉化後依型態分成局灶（massive）或多灶（nodular/diffuse）腫瘤。Massive 型形成單一大腫塊，壓迫鄰近肝組織但通常不侵犯血管。Nodular/diffuse 型多灶性生長，難以完全切除。隨著腫瘤進展，肝功能逐漸受損，ALP 異常升高（腫瘤細胞自分泌 corticosteroid-induced isoenzyme）。',
    clinical_signs: [
      { sign: '食慾下降/體重減輕', category: 'primary', description: '非特異性但最常見的主訴' },
      { sign: '腹部腫塊/腹部膨大', category: 'primary', description: 'Massive 型可觸及大型肝腫塊' },
      { sign: '嗜睡/虛弱', category: 'primary', description: '慢性病程' },
      { sign: '急性腹腔出血', category: 'secondary', description: '腫瘤破裂出血可為首次就診主訴（少見）' },
      { sign: '黃疸', category: 'secondary', description: '晚期或 diffuse 型肝功能不全' },
      { sign: '低血糖', category: 'secondary', description: '大型腫瘤分泌 IGF-II 類物質（副腫瘤症候群，罕見）' },
    ],
    staging: {
      system: '依形態學分型（Massive / Nodular / Diffuse）結合轉移評估',
      stages: [
        'Massive 型：單一肝葉大型腫塊，無轉移 → 手術可治癒',
        'Nodular 型：多個結節散布多肝葉 ± 區域淋巴結轉移',
        'Diffuse 型：整個肝臟瀰漫性浸潤 ± 遠端轉移',
      ],
    },
    differential_diagnosis: [
      { condition: '肝臟結節性增生', key_differentiator: '老年犬極常見的良性病變，超音波難以區分，ALP 通常正常或輕度升高，需病理確認' },
      { condition: '膽管癌', key_differentiator: '侵犯性更強、更易轉移，超音波可見不規則低回音腫塊' },
      { condition: '轉移性肝腫瘤', key_differentiator: '多發小結節，需尋找原發腫瘤（脾臟 HSA 最常見）' },
      { condition: '肝臟淋巴瘤', key_differentiator: '全身性疾病的一部分，FNA 可見淋巴母細胞，常伴脾臟浸潤' },
      { condition: '肝臟膿瘍', key_differentiator: '發燒、白血球升高，超音波見含液腫塊' },
    ],
    diagnostic_workup: '1. CBC/BCS（注意 ALP 升高程度）→ 2. 腹部超音波（肝腫塊型態評估）→ 3. 三期 CT 增強（手術計畫、血管侵犯評估）→ 4. 胸腔三視圖 X 光（排除肺轉移）→ 5. 凝血功能檢查（術前必要）→ 6. FNA/Tru-cut 或術中病理',
    treatment_protocol: '【Massive 型】肝葉切除為首選治療，左側/外側肝葉切除技術上較可行。術前：凝血功能評估、CT 血管重建。術後監控出血和肝功能。手術死亡率 5-10%。【不可切除型】Toceranib 2.5 mg/kg PO 隔日（緩和治療）± metronomic cyclophosphamide。支持療法：營養管理、肝保護劑。',
    prognosis: 'Massive 型肝葉切除：MST > 1460 天（> 4 年），是犬惡性腫瘤中預後最佳的之一。Nodular 型：MST 270-428 天。Diffuse 型：MST < 180 天。整體轉移率低（0-37%），massive 型最低。術後 ALP 恢復正常為良好預後指標。',
    monitoring: '術後：每 24 小時肝功能和凝血功能 × 3 天。出院後每 3 個月腹部超音波 + ALP 追蹤（首年），之後每 6 個月。胸腔 X 光每 6 個月。ALP 再度升高提示復發。',
    owner_communication: '犬肝細胞癌如果是巨塊型（最常見），手術切除後預後非常好，平均存活超過 4 年，是少數可以手術治癒的犬惡性腫瘤。手術有一定風險（出血），但成功率高。術後需要定期追蹤超音波和血檢。如果是多發結節型或瀰漫型，預後較差，治療以緩和療法為主。',
  },
  diagnostic_data: null,
  procedure_data: null,
  visual_placeholders: [
    { position: '形態學分型段落後', type: 'comparison_table', description: 'HCC 三種形態學分型超音波影像與預後比較' },
    { position: '治療段落後', type: 'flowchart', description: 'HCC 診斷與治療決策流程圖' },
  ],
  interactive_placeholders: [],
  drug_api_links: ['Toceranib', 'Cyclophosphamide'],
  references: [
    { type: 'textbook', citation: 'Vail DM, Thamm DH, Liptak JM. Withrow & MacEwen\'s Small Animal Clinical Oncology, 6th ed. Elsevier, 2020. Chapter 24: Hepatobiliary Tumors.', relevance: '犬肝臟腫瘤完整章節' },
    { type: 'journal', citation: 'Liptak JM, Dernell WS, Monnet E, et al. Massive hepatocellular carcinoma in dogs: 48 cases (1992-2002). JAVMA. 2004;225(8):1225-1230.', relevance: '犬 massive HCC 最大型回顧研究，MST > 1460 天' },
    { type: 'journal', citation: 'Patnaik AK, Hurvitz AI, Lieberman PH. Canine hepatic neoplasms: a clinicopathologic study. Vet Pathol. 1980;17(5):553-564.', relevance: '犬肝臟腫瘤分類與臨床病理經典研究' },
    { type: 'journal', citation: 'Matsuyama A, Poirier VJ, Bhatt A, et al. Outcome of dogs with hepatocellular carcinoma treated with hepatic lobectomy: 52 cases. JAVMA. 2022;260(10):1172-1179.', relevance: 'HCC 肝葉切除最新預後數據' },
    { type: 'journal', citation: 'Lapsley JM, Wavreille V, Barry S, et al. Risk factors and outcome in dogs with recurrent massive hepatocellular carcinoma: a Veterinary Society of Surgical Oncology case-control study. Vet Comp Oncol. 2022;20(3):697-709. doi:10.1111/vco.12824.', relevance: '犬巨塊型肝細胞癌復發風險與預後（VSSO 病例對照研究）' },
  ],
  is_current: true,
  created_at: now,
};

/** 多發性骨髓瘤，疾病型 */
const contentMultipleMyeloma: NodeContent = {
  id: 'CONTENT-ONCO-L3-017',
  node_id: 'ONCO-L3-017',
  version: 2,
  summary: '多發性骨髓瘤（Multiple Myeloma, MM）是相對少見的犬造血系統腫瘤（約占造血腫瘤 8%、遠少於淋巴瘤；「第二常見」是人醫排序、不適用於犬），由骨髓漿細胞惡性克隆性增殖引起。診斷採「四取二」非加權準則：骨溶解性病變、單株免疫球蛋白血症（SPE M spike）、Bence Jones 蛋白尿、骨髓漿細胞 > 20%（高鈣血症與高黏滯度為副腫瘤表現、非診斷準則）。首選治療為 Melphalan（0.1 mg/kg PO SID × 7-10 天誘導、後降 0.05 mg/kg 維持）＋ Prednisone；整體反應率約 92%（CR 43%＋PR 49%）、MST 約 540 天。犬無經驗證的臨床分期系統，改以預後因子（高鈣、Bence Jones 蛋白尿、治療反應）分層。',
  learning_objectives: [
    '說明犬多發性骨髓瘤的四項診斷標準',
    '描述血清蛋白電泳 M spike 的診斷意義',
    '列出高黏滯度症候群的臨床表現與緊急處理',
    '說明 Melphalan + Prednisone 治療方案的用法與骨髓毒性監控',
    '比較骨髓瘤與淋巴瘤在造血系統腫瘤鑑別中的差異',
  ],
  key_points: [
    '相對少見的犬造血系統腫瘤（約占造血腫瘤 8%、遠少於淋巴瘤），中老年犬好發；「第二常見」是人醫排序、不適用於犬',
    '診斷四取二（非加權）：骨溶解性病變、SPE M spike、Bence Jones 蛋白尿、骨髓漿細胞 > 20%；高鈣與高黏滯度為副腫瘤、非診斷準則',
    '血清蛋白電泳（SPE）見單株 M spike 為關鍵診斷工具；犬 IgG≈IgA（各約 40-50%），非以 IgG 為主（人醫數據勿直接套用）',
    '高黏滯度症候群單分子關聯強度 IgM > IgA > IgG；但犬 IgM 罕見，臨床最常伴 HVS 的是 IgA',
    'Melphalan 0.1 mg/kg PO SID × 7-10 天誘導 → 0.05 mg/kg SID 維持（或 7 mg/m² × 5 天脈衝，Fernández 2018 相當）＋ Prednisone',
    '整體反應率約 92%（CR 43%＋PR 49%）、MST 約 540 天；犬無經驗證分期系統，以預後因子分層',
  ],
  body: `# 多發性骨髓瘤 (Multiple Myeloma)

## 一、病理機制 (Pathophysiology)

### 概述
多發性骨髓瘤（MM）起源於骨髓中成熟漿細胞（plasma cell）的惡性克隆性增殖。它其實是「相對少見」的造血系統腫瘤——約占犬所有造血（淋巴網狀）系統腫瘤的 8%、占所有惡性腫瘤 < 1%（另約占原發＋繼發性骨腫瘤 3.6%）。犬造血系統惡性腫瘤中，淋巴瘤獨占約 83%，MM 遠少於淋巴瘤，並非「第二常見」（該排序是人醫的分類，不可直接套用於犬）。好發於中老年犬（中位年齡 8 到 9 歲）；德國牧羊犬在多個回顧性病例系列被觀察到通報比例較高，但成因不明、屬觀察性關聯（可能部分反映品種普及度／轉診偏差），並非量化驗證過的品種傾向。

### 病理機轉
惡性漿細胞在骨髓中克隆性增殖，造成四大病理效應。第一是單株免疫球蛋白過度分泌（M protein），造成高蛋白血症跟高黏滯度症候群。第二是骨髓基質破壞（分泌 RANKL、MIP-1α 等活化破骨細胞），跑出骨溶解性病變、病理性骨折跟高鈣血症。第三是正常造血被排擠/抑制，跑出貧血、血小板減少、免疫球蛋白正常組分下降（免疫低下）。第四是免疫球蛋白輕鏈過量分泌，跑出 Bence Jones 蛋白尿、腎小管損傷、腎衰竭。

### 免疫球蛋白分型
犬 MM 以 IgG 型與 IgA 型「兩者大致等比」（各約占 40 到 50% 病例）——並非以 IgG 為主。常見錯誤是把人醫數據（IgG 約 60 到 70%、IgA 約 20 到 30%）直接搬到犬身上；犬的實況是 IgG≈IgA。IgM 型（巨球蛋白血症／Waldenström）罕見，純輕鏈型（Bence Jones only）myeloma 亦僅零星報告。（貓則以 IgG 型為主，約 80%。）

## 二、臨床表現與診斷 (Clinical Signs & Diagnosis)

### 臨床表現
| 症狀 | 機轉 | 發生率 |
|------|------|--------|
| 骨痛/跛行 | 骨溶解性病變 | 50-60% |
| 嗜睡/虛弱 | 貧血、高鈣 | 常見 |
| PU/PD | 高鈣血症、腎損傷 | 25-40% |
| 出血傾向 | M protein 干擾血小板/凝血因子 | 20-30% |
| 視覺障礙 | 高黏滯度→視網膜血管病變 | 10-15% |
| 神經症狀 | 高黏滯度、脊椎骨溶解壓迫 | 少見 |

### 高黏滯度症候群（Hyperviscosity Syndrome, HVS）
- 發生率：犬 MM 約 20%
- **同型關聯（重要，勿倒置）**：以「單分子黏滯度／關聯強度」排序為 **IgM > IgA > IgG**。IgM 為五聚體（約 950 到 970 kDa），單分子黏滯度最高、是 HVS 最經典成因（人醫 Waldenström 巨球蛋白血症即為代表）；IgA（約 320 kDa）因可形成二聚體並聚合而居中；IgG（約 180 kDa 單體）最低、通常要極高濃度才引發。但因犬 IgM 骨髓瘤罕見、而 IgA 與 IgG 骨髓瘤發生率相當，所以在犬 MM 病例中，臨床「最常伴隨 HVS」的同型是 IgA。務必區分「同型引發 HVS 的單分子傾向」（IgM 最高）與「同型在犬 MM 中的出現頻率」（IgA 較顯著）——舊敘述把 IgM 與 IgA 順序顛倒是錯的。
- 表現：眼底出血/視網膜剝離、鼻出血、心衰竭、神經症狀、意識改變
- 緊急處理：plasmapheresis（血漿置換）或治療性放血（10 到 20 mL/kg）後輸注等量晶體液；同時啟動化療降低 M protein

### 診斷準則（四項中至少符合兩項）
> 犬 MM 採「四取二」非加權準則（MacEwen & Hurvitz 1977 提出、沿用至今）：
1. 骨溶解性病變：全身骨骼 X 光可見「打孔式」（punched-out）溶骨性病灶
2. 單株免疫球蛋白血症：血清蛋白電泳（SPE）見 M spike
3. Bence Jones 蛋白尿：尿液蛋白電泳檢測免疫球蛋白輕鏈
4. 骨髓漿細胞增生 > 20%：骨髓穿刺/活檢確認

**閾值註記**：骨髓漿細胞閾值歷史上非固定——最早的 Matus 1986 系列以 > 5% 漿細胞＋單株 gammopathy 診斷，部分回顧引用 > 10 到 20%，現行主流採 > 20%。
**⚠️ 高鈣血症與高黏滯度症候群「不是」診斷準則**：兩者是副腫瘤（paraneoplastic）表現（PTHrP／破骨細胞骨吸收／高球蛋白），屬預後/併發症範疇，不可拿來湊「四取二」。（與 CPATH 骨髓抹片節點一致。）

### 診斷流程
1. CBC/生化：貧血、高蛋白（globulin 選擇性升高）、高鈣血症、氮血症
2. 血清蛋白電泳（SPE）：確認單株 M spike（區分 monoclonal vs polyclonal）
3. 尿液蛋白電泳：Bence Jones（輕鏈）蛋白
4. 全身骨骼 X 光：溶骨性病灶（脊椎、骨盆、肋骨、四肢長骨）
5. 骨髓穿刺：漿細胞比例 > 20%
> 台灣現況：SPE 於大型轉診/教學醫院可執行；Bence Jones 尿液蛋白電泳多外送人醫實驗室；骨髓穿刺常取髂骨翼或肱骨近端，需適當鎮靜。

## 三、治療策略 (Treatment)

### 化學治療（首選）— Melphalan + Prednisone
- **誘導期**：Melphalan 0.1 mg/kg PO SID × 7 到 10 天 ＋ Prednisone 0.5 mg/kg PO SID × 10 天
- **維持期**：Melphalan 降為 0.05 mg/kg PO SID 持續給藥（至復發或骨髓抑制）；Prednisone 於 10 天後改 0.5 mg/kg PO 隔日（EOD）給 30 到 60 天後停，melphalan 則持續
- **脈衝式替代**：Melphalan 7 mg/m² PO SID × 連續 5 天、每 21 天一循環——Fernández 2018 JVIM 顯示每日與脈衝方案療效/耐受性相當
- **監控**：每 2 週 CBC；劑量限制毒性是骨髓抑制，尤其「延遲性血小板減少」
- **復發/抗性 rescue**：cyclophosphamide、chlorambucil、lomustine（CCNU）、VAD、thalidomide、bortezomib（犬資料有限）
> 台灣現況：Melphalan 需透過藥局調劑或專案進口，開立前確認取得管道。

### 高鈣血症處理（依序，勿顛倒）
1. **先**以 0.9% NaCl IV 補足血管內容積、矯正脫水
2. **待容積補足後**再給 Furosemide 2 到 4 mg/kg IV 促進鈣尿排泄（切勿在脫水未矯正前先利尿——會降低 GFR 與鈣清除、反而惡化高鈣），並於利尿期間持續輸液維持水合
3. Prednisone 輔助降鈣（抑制骨吸收與腫瘤細胞）
4. Bisphosphonate：Pamidronate 1 到 2 mg/kg（犬文獻範圍 0.65 到 2.0）稀釋於 0.9% NaCl、IV 緩慢輸注約 2 小時（可延長至 2 到 4 小時）；現多改用效價更高、輸注更短的 zoledronate

## 四、併發症與監控 (Complications & Monitoring)

### 主要併發症
- **腎衰竭**：輕鏈腎病＋高鈣＋高黏滯度多重打擊，為主要死因之一
- **病理性骨折**：承重長骨/脊椎溶骨，脊椎病灶可壓迫脊髓
- **敗血症/反覆感染**：正常免疫球蛋白下降＋化療骨髓抑制
- **出血傾向**：M protein 干擾血小板功能與凝血因子
- **高黏滯度危象**：視網膜剝離失明、心衰竭、神經症狀

### 監控計畫
| 時間點 | 項目 | 目標/警訊 |
|--------|------|-----------|
| 每 2 週 | CBC | 骨髓毒性（嗜中性球/血小板減少，尤其延遲性血小板↓）；血小板 < 100k 或嗜中性球 < 2000 需調藥 |
| 每 4 到 6 週 | SPE M spike 高度 | 治療反應；M protein 下降 ≥ 50% 為部分緩解 |
| 每 3 個月 | 腎功能、離子鈣 | 早期抓腎損傷/高鈣復發 |
| 每 6 個月 | 全身骨骼 X 光 | 追蹤溶骨病灶穩定或新增 |

## 五、預後 (Prognosis)

### ⚠️ 犬 MM「沒有」經驗證的臨床分期系統
坊間常見的 Stage I/II/III 表其實是「人醫 Durie-Salmon 分期」的改編，Durie-Salmon 本身也從未在犬隻驗證，不應以「已建立之分期系統」呈現。權威立場（Vail, Withrow & MacEwen）：犬 MM「曾有人提出分期系統，但至今未賦予其預後意義」。犬改以「離散的預後因子」（非分期）做風險分層。

### 預後因子（Matus 1986）
- **負向因子**：高鈣血症、Bence Jones（輕鏈）蛋白尿、廣泛骨溶解
- **最具預測力**：對治療的反應（M protein 下降幅度）

### 存活數據
| 情境 | 反應/存活 |
|------|-----------|
| Melphalan + Prednisone | 整體反應率約 92%（完全緩解 CR 約 43%＋部分緩解 PR 約 49%），MST 約 540 天（~18 個月） |
| Fernández 2018 JVIM | MST 可達約 930 天 |
| 僅 Prednisone / 未治療 | 單用 prednisone MST 約 220 天；未治療多僅數週至數月 |
| IMWG 反應判定（Moore 2021 JVIM） | M protein 下降 ≥ 90% 者存活較長（630 天 vs 284 天） |

> **勿把「43-93%」當反應率區間**：43% 是完全緩解率（CR）、不是區間下限；整體反應率約 92%（CR 43%＋PR 49%）。

## 六、人醫借鑒 (Translational Insights)

| 人醫工具 | 獸醫應用 | 現況 |
|----------|----------|------|
| 蛋白酶體抑制劑 bortezomib、免疫調節劑 thalidomide/lenalidomide | 難治性 MM 的 rescue | 犬僅少量報告，未成標準 |
| 血清游離輕鏈（sFLC）定量 | 監控輕鏈型/微量殘留 | 犬尚未驗證，臨床仍靠 SPE |
| IMWG 治療反應判定準則 | 客觀量化緩解程度 | Moore 2021 已回溯應用於犬（非診斷分期） |
| 自體幹細胞移植（ASCT） | 人醫鞏固治療主力 | 犬不實際、未採用 |
| 高效價 bisphosphonate（zoledronate） | 骨病變/高鈣控制 | 獸醫使用漸增，取代 pamidronate |

## 七、臨床爭議與知識空缺 (Controversies & Knowledge Gaps)

| 主題 | 現況 | Evidence Level |
|------|------|----------------|
| 骨髓漿細胞診斷閾值（> 5% vs > 10-20% vs > 20%） | 現行主流 > 20%，但歷史值不一，缺前瞻驗證 | III（專家/教科書） |
| 犬 MM 臨床分期系統 | 無經驗證系統，改以預後因子分層 | III |
| Melphalan 每日 vs 脈衝式給藥 | Fernández 2018 顯示相當，但為回顧性 | II（回顧性對照） |
| 新型藥物（bortezomib/IMiDs）在犬的角色 | 僅零星報告，療效/安全未定 | III |
| 孤立性骨性漿細胞瘤（SOP）進展為 MM 的風險 | 犬近期小型系列 0/13 進展，與人醫不同 | III（小樣本病例系列） |

## 八、近期更新 (Recent Updates)

- **Moore 2021（JVIM）**：首度將人醫 IMWG「治療反應」判定準則回溯應用於犬分泌型 MM，M protein 下降 ≥ 90% 與較長存活相關（630 vs 284 天）——為犬 MM 提供客觀反應量化工具（非診斷分期）。
- **Fernández 2018（JVIM）**：比較兩種 melphalan 方案（每日 vs 脈衝），療效與耐受性相當，MST 可達約 930 天，優於早期報告。
- **Reising 2021（JSAP）**：孤立性骨性漿細胞瘤（SOP）13 例，0/13 進展為 MM、中位存活 912 天且對放療反應佳——顯示犬 SOP→MM 的進展風險遠低於人醫傳統認知。
- **趨勢**：zoledronate 漸取代 pamidronate；蛋白酶體抑制劑於犬 MM 的探索性使用增加。

[圖片:多發性骨髓瘤四大病理效應示意圖，M protein/骨溶解/造血抑制/輕鏈腎病]
[圖片:犬骨髓瘤診斷與治療流程，SPE M spike + 骨溶解 + Bence Jones + 骨髓漿細胞>20% →（四取二）→ Melphalan/Prednisone]
[互動:診斷準則自我檢核——勾選 4 項準則（溶骨/M spike/Bence Jones/骨髓漿細胞>20%），達 2 項即符合診斷；高鈣與高黏滯度標為「副腫瘤、非準則」]`,
  clinical_pearl: '看到老年犬有「不明原因的高蛋白血症」（total protein 超過 9 g/dL，主要是 globulin 升高）加上貧血加骨痛，腦中就要浮現「多發性骨髓瘤」這幾個字。下一步是做血清蛋白電泳（SPE），如果看到明確的 M spike，幾乎就確診了。\n\n高黏滯度症候群有個小技巧：眼底檢查是快速篩檢高黏滯度的方法，如果看到視網膜血管擴張扭曲、出血、視網膜剝離，就要高度懷疑。另外，驗血時離心後如果血清看起來異常濃稠（試管傾斜時流動很慢），也是高黏滯度的非正式線索。\n\n治療的好消息：犬骨髓瘤對 Melphalan 反應率很高，而且化療副作用相對可控（主要是骨髓抑制），很多飼主可以接受「口服藥回家吃」的治療模式。',
  common_mistakes: [
    '高蛋白血症只想到脫水：脫水是 albumin 跟 globulin 同時升高，骨髓瘤是 globulin 選擇性極度升高',
    '沒做血清蛋白電泳就排除骨髓瘤：total protein 可能「正常偏高」但 SPE 已經有 M spike',
    '骨痛或跛行只想到骨科問題：老年犬骨溶解性病變要做全身骨骼 X 光排除骨髓瘤',
    '忽略 Melphalan 的骨髓毒性監控：沒每 2 週驗 CBC 會導致嚴重（尤其延遲性）血小板/嗜中性球減少',
    '把骨髓瘤跟漿細胞瘤（solitary/extramedullary plasmacytoma）混淆：後者多為局部良性、手術切除治癒率約 90-95%，且犬 EMP 進展為 MM 屬罕見',
    '把高鈣血症或高黏滯度當「診斷準則」湊四取二：兩者是副腫瘤表現、不在四項診斷準則內',
    '照搬人醫數據：犬 IgG≈IgA（非 IgG 佔多數）、HVS 單分子傾向 IgM 最高（非 IgA）、且犬無經驗證的 Durie-Salmon 式臨床分期系統',
    '高鈣血症在脫水未矯正前就先打 Furosemide：會降低 GFR 與鈣清除、反而惡化高鈣——必須先補容積再利尿',
  ],
  disease_data: {
    signalment: '中老年犬，中位年齡 8 到 9 歲（範圍 2 到 15 歲）。德國牧羊犬在多個回顧性系列被觀察到通報比例較高（觀察性關聯、成因不明，非量化驗證的品種傾向，可能部分反映品種普及度/轉診偏差）。無明顯性別偏好。貓罕見（且貓以 IgG 型為主，約 80%）。',
    etiology: '確切病因還不清楚。跟人類骨髓瘤相似，可能跟慢性抗原刺激導致漿細胞失控增殖、基因突變有關。',
    pathogenesis: '骨髓漿細胞克隆性增殖之後大量分泌單株免疫球蛋白（M protein），跑出高蛋白血症跟高黏滯度。同時骨質被破壞（RANKL/OPG 失衡）造成骨溶解跟高鈣血症。正常造血被抑制造成貧血、感染、出血。輕鏈腎病造成腎衰竭。最後跑出多器官功能障礙。',
    clinical_signs: [
      { sign: '骨痛/跛行', category: 'primary', description: '骨溶解性病變造成疼痛跟病理性骨折，50 到 60% 病例' },
      { sign: '嗜睡/虛弱', category: 'primary', description: '貧血跟高鈣血症引起' },
      { sign: 'PU/PD', category: 'primary', description: '高鈣血症跟腎損傷造成' },
      { sign: '出血傾向（鼻出血、牙齦出血）', category: 'secondary', description: 'M protein 干擾凝血因子跟血小板功能' },
      { sign: '視覺障礙/失明', category: 'secondary', description: '高黏滯度造成視網膜血管病變' },
      { sign: '反覆感染', category: 'secondary', description: '正常免疫球蛋白被抑制（免疫低下）' },
    ],
    staging: {
      system: '犬 MM 無經驗證的臨床分期系統（坊間 Stage I/II/III 表屬人醫 Durie-Salmon 分期改編、從未在犬驗證；Vail: 曾有人提出分期但未賦予預後意義）。改以「離散預後因子」做風險分層。',
      stages: [
        '負向預後因子：高鈣血症',
        '負向預後因子：Bence Jones（輕鏈）蛋白尿',
        '負向預後因子：廣泛骨溶解',
        '最具預測力：對治療的反應（M protein 下降幅度；Moore 2021 IMWG ≥90% 下降者存活 630 vs 284 天）',
      ],
    },
    differential_diagnosis: [
      { condition: '淋巴瘤（造血型）', key_differentiator: '淋巴母細胞為主，SPE 通常為多株增高而非 M spike，免疫表型 B/T cell marker' },
      { condition: '髓外漿細胞瘤（Extramedullary plasmacytoma）', key_differentiator: '局部腫瘤（皮膚/口腔最常見），無全身骨髓浸潤，手術可治癒' },
      { condition: '慢性 Ehrlichiosis', key_differentiator: '可見多株高蛋白血症（polyclonal gammopathy），PCR 或抗體可確診' },
      { condition: '淋巴漿細胞性淋巴瘤', key_differentiator: '介於淋巴瘤與骨髓瘤之間，常伴 IgM 分泌' },
      { condition: '反應性漿細胞增生', key_differentiator: '多株增生（polyclonal），骨髓漿細胞通常 < 10%' },
    ],
    diagnostic_workup: '流程：CBC/BCS（看高蛋白、貧血、高鈣），血清蛋白電泳（M spike），尿液蛋白電泳（Bence Jones 蛋白），全身骨骼 X 光（溶骨性病灶），骨髓穿刺（漿細胞超過 20%），凝血功能（評估出血傾向），腎功能（Bence Jones 腎病）。',
    treatment_protocol: '首選 Melphalan 0.1 mg/kg PO SID × 7 到 10 天（誘導）→ 0.05 mg/kg PO SID 維持（至復發或骨髓抑制），或脈衝式 7 mg/m² PO SID × 5 天 q21d（Fernández 2018 顯示與每日方案療效/耐受性相當），加 Prednisone 0.5 mg/kg PO SID × 10 天後改隔日（EOD）。每 2 週 CBC 監控骨髓毒性（尤其延遲性血小板減少）。復發/抗性 rescue：cyclophosphamide/chlorambucil/lomustine/thalidomide/bortezomib（犬資料有限）。高鈣血症依序：先 0.9% NaCl IV 補容積、待再水化後再給 Furosemide 2 到 4 mg/kg（勿在脫水未矯正前利尿）＋ Prednisone ＋ Pamidronate 1 到 2 mg/kg IV over ~2 hr（或改用 zoledronate）。高黏滯度用 plasmapheresis 或治療性放血加晶體液置換。',
    prognosis: 'Melphalan 加 Prednisone 整體反應率約 92%（完全緩解 CR 約 43% ＋ 部分緩解 PR 約 49%），MST 約 540 天（18 個月）；Fernández 2018 報告 MST 可達約 930 天。單用 prednisone MST 約 220 天，未治療多僅數週至數月。犬無經驗證的臨床分期系統，負向預後因子有高鈣血症、Bence Jones（輕鏈）蛋白尿、廣泛骨溶解；最具預測力者為對治療的反應（Moore 2021：M protein 下降 ≥ 90% 者存活 630 天 vs 284 天）。註：勿把「43-93%」當反應率區間——43% 是 CR 率、不是下限。',
    monitoring: '每 2 週做 CBC（監控骨髓毒性），每 4 到 6 週做 SPE 追蹤 M spike 高度（評估治療反應），每 3 個月測腎功能跟鈣離子，每 6 個月拍全身骨骼 X 光。M spike 下降超過 50% 算部分緩解。',
    owner_communication: '多發性骨髓瘤是骨髓漿細胞的惡性腫瘤，會造成骨骼破壞跟蛋白質異常。好消息是這種腫瘤對化療反應通常很好，治療後平均可以活 1.5 年以上。治療主要是口服藥物（Melphalan 加 Prednisone），可以在家給藥，但是要每 2 週回診驗血監控藥物副作用。骨痛通常治療後就會明顯改善。',
  },
  diagnostic_data: null,
  procedure_data: null,
  visual_placeholders: [
    { position: '病理機轉段落後', type: 'flowchart', description: '骨髓瘤四大病理效應示意圖' },
    { position: '骨骼 X 光段落', type: 'annotated_image', description: '犬骨髓瘤溶骨性病變 X 光影像（punched-out lesions）' },
  ],
  interactive_placeholders: [
    { position: '診斷準則段落', type: 'checklist', description: '四取二診斷準則自我檢核：勾選（1）溶骨性病變（2）SPE M spike（3）Bence Jones 蛋白尿（4）骨髓漿細胞>20%，達 2 項即符合診斷；高鈣與高黏滯度標為「副腫瘤、非準則」不計入' },
  ],
  drug_api_links: ['Melphalan', 'Prednisone', 'Cyclophosphamide', 'Pamidronate', 'Furosemide'],
  references: [
    { type: 'textbook', citation: 'Vail DM. Plasma Cell Neoplasms & Myeloma-Related Disorders. In: Withrow SJ, Vail DM, Thamm DH, Liptak JM, eds. Withrow & MacEwen\'s Small Animal Clinical Oncology, 6th ed. St. Louis: Elsevier, 2020.', relevance: '犬漿細胞腫瘤診斷準則/同型分型（IgG≈IgA）/治療/無經驗證分期的權威章節' },
    { type: 'journal', citation: 'Matus RE, Leifer CE, MacEwen EG, Hurvitz AI. Prognostic factors for multiple myeloma in the dog. J Am Vet Med Assoc. 1986;188(11):1288-1292. doi:10.2460/javma.1986.188.11.1288', relevance: '60 犬經典世代：預後因子（高鈣/Bence Jones/治療反應）＋MST 540 天＋整體反應率 92%（CR 43%/PR 49%）' },
    { type: 'journal', citation: 'Moore AR, Harris A, Jeffries C, et al. Retrospective evaluation of the use of the International Myeloma Working Group response criteria in dogs with secretory multiple myeloma. J Vet Intern Med. 2021;35(1):442-450. doi:10.1111/jvim.15967', relevance: '近期：IMWG 反應判定回溯應用於犬，M protein 下降 ≥90% 者存活較長（630 vs 284 天）' },
    { type: 'journal', citation: 'Fernández R, Chon E. Comparison of two melphalan protocols and evaluation of outcome and prognostic factors in multiple myeloma in dogs. J Vet Intern Med. 2018;32(3):1060-1069. doi:10.1111/jvim.15084', relevance: '每日 vs 脈衝式 melphalan 療效相當、MST 可達約 930 天' },
    { type: 'journal', citation: 'Hostutler RA, Chew DJ, Jaeger JQ, et al. Uses and effectiveness of pamidronate disodium for treatment of dogs and cats with hypercalcemia. J Vet Intern Med. 2005;19(1):29-33. doi:10.1111/j.1939-1676.2005.tb02654.x', relevance: '犬貓惡性高鈣 pamidronate 劑量/療效一手依據' },
    { type: 'journal', citation: 'Reising AJ, Donnelly LL, Flesner BK, et al. Solitary osseous plasmacytomas in dogs: 13 cases (2004-2019). J Small Anim Pract. 2021;62(12):1114-1121. doi:10.1111/jsap.13411', relevance: '近期：犬孤立性骨性漿細胞瘤 0/13 進展為 MM、MST 912 天（與人醫傳統認知不同）' },
    { type: 'textbook', citation: 'Nelson RW, Couto CG. Small Animal Internal Medicine, 6th ed. St. Louis: Elsevier, 2020. Multiple Myeloma & Monoclonal Gammopathies.', relevance: '骨髓瘤內科診斷與管理補充' },
  ],
  is_current: true,
  created_at: now,
};

/** 以 Map 方式匯出，方便用 nodeId 快速查找 */
export const ONCO_CONTENTS = new Map<string, NodeContent>([
  // Layer 0
  ['ONCO-L0-001', contentOncoOverview],
  // Layer 1
  ['ONCO-L1-001', contentTumorBiology],
  ['ONCO-L1-002', contentTumorImmunology],
  ['ONCO-L1-003', contentCancerGenetics],
  // Layer 2
  ['ONCO-L2-001', contentMetastasis],
  ['ONCO-L2-002', contentParaneoplastic],
  ['ONCO-L2-003', contentDrugResistance],
  ['ONCO-L2-004', contentTME],
  // Layer 3
  ['ONCO-L3-001', contentCanineLymphoma],
  ['ONCO-L3-002', contentMCT],
  ['ONCO-L3-003', contentOsteosarcoma],
  ['ONCO-L3-004', contentHSA],
  ['ONCO-L3-005', contentOralMelanoma],
  ['ONCO-L3-006', contentMammaryTumor],
  ['ONCO-L3-007', contentTCC],
  ['ONCO-L3-008', contentFISS],
  ['ONCO-L3-009', contentSTS],
  ['ONCO-L3-010', contentASAC],
  ['ONCO-L3-011', contentNasalTumor],
  ['ONCO-L3-012', contentHistiocyticSarcoma],
  ['ONCO-L3-013', contentThyroidCarcinoma],
  ['ONCO-L3-014', contentSCC],
  ['ONCO-L3-015', contentInsulinoma],
  // Layer 4
  ['ONCO-L4-001', contentTumorCytology],
  ['ONCO-L4-002', contentStagingWorkup],
  ['ONCO-L4-003', contentTNM],
  // Layer 5
  ['ONCO-L5-001', contentChemotherapy],
  ['ONCO-L5-002', contentSurgicalOncology],
  ['ONCO-L5-003', contentCancerPain],
  ['ONCO-L5-004', contentRadiationTherapy],
  ['ONCO-L5-005', contentMetronomicChemo],
  ['ONCO-L5-006', contentTKI],
  ['ONCO-L3-016', contentHCC],
  ['ONCO-L3-017', contentMultipleMyeloma],
]);
