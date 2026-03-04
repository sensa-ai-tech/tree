/**
 * Script to fill in 待補充 placeholders with real translational insights
 * and clinical controversies content based on node specialty and layer.
 */
const fs = require('fs');
const path = require('path');

const SEED_DIR = path.join(__dirname, '..', 'src', 'data', 'seed');

// === TRANSLATIONAL INSIGHTS DATA ===
const TRANSLATIONAL = {
  surg: {
    L0: [
      ['微創手術/機器人輔助手術 (da Vinci)', '犬腹腔鏡/胸腔鏡手術進階應用', '獸醫腹腔鏡 OVE/腎上腺切除漸增'],
      ['3D 列印術前規劃模型', '犬複雜骨折/關節手術精確規劃', '研究階段，少數機構已採用'],
      ['術中導航系統（IGS）', '脊椎手術精確植入物定位', '獸醫神經外科初步引入'],
      ['增強實境（AR）手術訓練', '外科住院醫師模擬訓練', '概念驗證階段'],
    ],
    L1: [
      ['組織工程與再生醫學', '犬骨缺損/軟骨修復的生物材料應用', '幹細胞治療研究活躍，臨床轉譯有限'],
      ['生物可吸收植入物', '骨折固定免除二次拆除手術', '部分產品已獸醫商業化'],
      ['Negative pressure wound therapy (NPWT)', '犬大面積傷口/開放性骨折加速癒合', '獸醫已廣泛使用 VAC 系統'],
      ['富血小板血漿（PRP）', '犬肌腱/韌帶損傷修復', '臨床使用漸增，標準化不足'],
    ],
    L2: [
      ['免疫調節型生物材料', '術後植入物感染預防', '人醫研究活躍，獸醫引入中'],
      ['傷口癒合分子機轉靶向治療', '慢性不癒合傷口新療法', '基礎研究階段'],
      ['生物膜（biofilm）破壞策略', '植入物相關感染的治療突破', '人醫與獸醫共同面臨的挑戰'],
    ],
    L3: [
      ['腹腔鏡/內視鏡微創手術', '犬 GDV 預防性胃固定術腹腔鏡化', '獸醫微創外科快速發展中'],
      ['術中血管吻合技術（如 OPSI shunt）', '門靜脈分流手術的微創化趨勢', '少數轉介中心可執行'],
      ['生物補片（biologic mesh）', '犬腹壁缺損/會陰疝修復的生物材料替代合成', '獸醫使用經驗增加中'],
      ['手術部位感染（SSI）監控 bundle', '獸醫外科感染率追蹤與品質改善', '人醫 WHO SSI bundle 廣泛推行，獸醫開始建立'],
    ],
    L4: [
      ['術中 CT/MRI 導航', '脊椎手術即時影像導引', '少數獸醫轉介中心引入'],
      ['AI 輔助影像診斷', '骨折分類、關節評估自動化', '人醫 AI 已商業化，獸醫開發中'],
      ['Contrast-enhanced 超音波（CEUS）', '腹腔腫塊血管化評估、術前規劃', '獸醫研究階段'],
      ['雙能 CT（DECT）', '組織成分分析、結石成分鑑定', '人醫成熟，獸醫引入中'],
    ],
    L5: [
      ['ERAS（Enhanced Recovery After Surgery）protocol', '犬術後加速康復方案——減少住院天數', '獸醫個別要素已被採用（多模式止痛、早期進食）'],
      ['多模式止痛（multimodal analgesia）', '犬貓術後疼痛管理標準化', '獸醫廣泛推行中'],
      ['區域麻醉/超音波導引神經阻斷', '犬後肢手術的 sciatic/femoral block', '獸醫使用快速增長'],
      ['抗生素骨水泥（ALBC）', '犬骨髓炎/植入物感染局部高濃度抗生素', '獸醫骨科已採用'],
    ],
  },
  derm: {
    L0: [
      ['精準醫學（precision medicine）皮膚藥物基因組學', '犬異位性皮膚炎個人化治療選擇', '品種特異性基因關聯研究中'],
      ['遠距皮膚科（teledermatology）', '飼主上傳皮膚照片的 AI 初步分級', '獸醫遠距診療法規發展中'],
      ['AI 皮膚病灶辨識', '犬貓皮膚腫塊良惡性預判', '人醫 AI 準確度達皮膚科醫師水準，獸醫訓練中'],
    ],
    L1: [
      ['皮膚微生物組（skin microbiome）研究', '犬異位性皮膚炎微生物組失衡的治療靶向', '人醫已有微生物組移植研究，獸醫基礎研究中'],
      ['皮膚屏障修復技術', '犬 AD 皮膚屏障缺陷的局部治療新策略', '神經酰胺/脂質補充產品已獸醫商業化'],
      ['表觀遺傳學（epigenetics）', '環境因素如何影響犬皮膚免疫表達', '基礎研究階段'],
    ],
    L2: [
      ['JAK-STAT 訊號通路研究', '犬 AD 新標靶藥物開發基礎', 'Oclacitinib（JAK1 抑制劑）已是獸醫 AD 一線用藥'],
      ['Th2 免疫偏移機轉', '犬 AD 與人類 AD 的免疫病理相似性', '犬為人 AD 重要轉譯模型'],
      ['生物膜在皮膚感染的角色', '犬反覆膿皮症的抗生物膜策略', '人獸醫共同研究領域'],
    ],
    L3: [
      ['Dupilumab（抗 IL-4/IL-13 單抗）', '犬 AD 的抗細胞激素單抗開發', '犬 anti-IL-31（Lokivetmab）已上市，anti-IL-4/13 研究中'],
      ['過敏原免疫療法（AIT）次世代技術', '舌下免疫療法（SLIT）、肽段免疫療法', '犬 SLIT 已有商業化產品'],
      ['光動力療法（PDT）', '犬淺表腫瘤/角化異常的非手術治療', '人醫成熟，獸醫病例報告增加'],
      ['生物製劑（biologics）', '犬自體免疫皮膚病的精準治療', '獸醫可用生物製劑仍有限'],
    ],
    L4: [
      ['皮膚鏡（dermoscopy）', '犬皮膚病灶非侵入性放大觀察', '人醫標準工具，獸醫研究增加'],
      ['共聚焦顯微鏡（confocal microscopy）', '活體皮膚細胞學——免組織切片', '研究工具，臨床應用前'],
      ['次世代定序（NGS）微生物鑑定', '犬皮膚感染病原精準鑑定', '研究中，成本尚高'],
    ],
    L5: [
      ['Oclacitinib/Lokivetmab 長期安全性追蹤', '犬 AD 長期免疫調節治療安全性', '上市後監測資料累積中'],
      ['局部 calcineurin 抑制劑（Tacrolimus）', '犬局部免疫調節——減少全身性藥物使用', '獸醫已有使用經驗'],
      ['微針（microneedle）藥物遞送', '犬皮膚局部藥物精準投遞', '人醫研究活躍，獸醫概念階段'],
    ],
  },
  neuro: {
    L0: [
      ['功能性神經影像（fMRI）', '犬腦功能定位與認知研究', '研究工具，非臨床常規'],
      ['神經調控技術（neuromodulation）', '犬難治性癲癇的迷走神經刺激（VNS）', '人醫成熟，獸醫少數病例報告'],
      ['AI 腦部 MRI 自動分析', '犬腦腫瘤/腦炎的影像 AI 輔助診斷', '人醫商業化，獸醫研究中'],
    ],
    L1: [
      ['腦源性神經營養因子（BDNF）研究', '犬神經退化疾病的神經保護策略', '基礎研究階段'],
      ['血腦屏障通透性調控', '犬腦腫瘤/腦炎藥物遞送增強', '聚焦超音波（FUS）開BBB 研究中'],
      ['犬為人類神經疾病自然模型', '犬癲癇/認知障礙作為人類轉譯研究平台', '犬被 NIH 認可為重要轉譯模型'],
    ],
    L2: [
      ['自體免疫性腦炎抗體檢測', '犬 MUO/NME/GME 的自體抗體分型', '人醫已有抗 NMDAR 等商業檢測，獸醫研究中'],
      ['神經發炎生物標記', '犬 CSF 細胞激素/神經絲蛋白定量', '獸醫 NfL 研究增加中'],
      ['椎間盤退化分子機轉', 'IVDD 的疾病修飾療法開發基礎', '基礎研究活躍'],
    ],
    L3: [
      ['抗癲癇新藥（Brivaracetam/Cenobamate）', '犬難治性癲癇的新一代 AED', '人醫多款新藥上市，獸醫藥動學研究中'],
      ['免疫檢查點抑制劑治療腦腫瘤', '犬膠質瘤/腦膜瘤的免疫療法', '犬為人腦腫瘤免疫治療重要試驗模型'],
      ['幹細胞治療脊髓損傷', '犬 IVDD Hansen Type I 術後神經修復', '多項犬臨床試驗進行中'],
      ['基因治療神經退化疾病', '犬 NCL/GM 等溶酶體儲積症的基因替代療法', '部分犬基因治療已進入臨床試驗'],
    ],
    L4: [
      ['7T MRI 高場強影像', '犬細微腦部病灶偵測', '人醫漸普及，獸醫極少數機構擁有'],
      ['PET-CT 腦代謝影像', '犬腦腫瘤分級與癲癇灶定位', '人醫標準，獸醫研究中'],
      ['脊髓造影 CT（CT myelography）3D 重建', '犬多處 IVDD 的精確手術規劃', '獸醫已廣泛使用'],
    ],
    L5: [
      ['雷射椎間盤減壓（PLDD）', '犬 IVDD 微創替代手術', '獸醫有限病例報告，療效爭議'],
      ['經顱磁刺激（TMS）', '犬癲癇/疼痛的非侵入性神經調控', '人醫成熟，獸醫早期研究'],
      ['標靶放射治療（SRS/SRT）', '犬顱內腫瘤精準放射治療', '獸醫放射腫瘤學漸增'],
    ],
  },
  onco: {
    L0: [
      ['精準腫瘤醫學（precision oncology）', '犬腫瘤基因定序導引治療選擇', '犬腫瘤 NGS panel 已商業化（如 FidoCure）'],
      ['液態切片（liquid biopsy）', '犬腫瘤 ctDNA 早期偵測與監測', '人醫已上市（Guardant360），獸醫研究中'],
      ['比較腫瘤學（comparative oncology）', '犬自發性腫瘤作為人類新藥試驗平台', 'NCI COTC 已推動多項犬臨床試驗'],
    ],
    L1: [
      ['腫瘤微環境（TME）研究', '犬腫瘤免疫逃脫機轉——免疫療法設計基礎', '活躍研究領域'],
      ['腫瘤幹細胞（CSC）', '犬腫瘤復發/轉移的核心機轉', '基礎研究中'],
      ['犬腫瘤分子分類', '超越組織學分類的分子亞型治療策略', '人醫已改變治療指引，獸醫研究中'],
    ],
    L2: [
      ['免疫檢查點（PD-1/PD-L1/CTLA-4）', '犬腫瘤免疫療法的分子靶點', '犬 anti-PD-1 抗體已進入臨床試驗'],
      ['酪胺酸激酶（TK）突變', '犬 MCT c-KIT 突變→TKI 標靶治療', 'Toceranib/Masitinib 已是 MCT 標準治療'],
      ['表觀遺傳調控', '犬腫瘤的 HDAC 抑制劑/去甲基化治療', '研究階段'],
    ],
    L3: [
      ['CAR-T 細胞療法', '犬 B 細胞淋巴瘤的細胞免疫治療', '犬 CAR-T 試驗已啟動'],
      ['腫瘤疫苗', '犬黑色素瘤 DNA 疫苗（Oncept）', '犬黑色素瘤疫苗已 USDA 核准'],
      ['光免疫療法（photoimmunotherapy）', '犬淺表腫瘤的免疫導引光動力治療', '早期臨床試驗中'],
      ['奈米藥物遞送', '犬腫瘤局部高濃度化療——減少全身毒性', '研究階段'],
    ],
    L4: [
      ['循環腫瘤 DNA（ctDNA）監測', '犬化療反應/復發早期偵測', '研究階段，人醫已商業化'],
      ['PET-CT 腫瘤分期', '犬淋巴瘤/全身轉移的精確分期', '少數獸醫機構可執行'],
      ['全基因組定序（WGS/WES）', '犬腫瘤可行動突變鑑定→精準用藥', '犬腫瘤 NGS panel 已可取得'],
    ],
    L5: [
      ['免疫檢查點抑制劑（anti-PD-1）', '犬多種腫瘤的免疫治療', '犬 anti-PD-1 (AT-005) 臨床試驗進行中'],
      ['酪胺酸激酶抑制劑（TKI）新一代', '犬 MCT/HSA 的次世代 TKI', 'Toceranib/Masitinib 已上市，新藥研發中'],
      ['介入性放射學（IR）', '犬肝臟/脾臟腫瘤的動脈栓塞（TAE/TACE）', '人醫標準，獸醫少數中心可執行'],
      ['熱消融/冷凍消融', '犬不可切除腫瘤的局部控制', '獸醫使用增加中'],
    ],
  },
  ecc: {
    L0: [
      ['Point-of-care 超音波（POCUS）', '犬貓急診即時心肺腹超音波評估', '獸醫急診 POCUS 教育快速普及'],
      ['RECOVER CPR 指引', '犬貓心肺復甦標準化——基於人醫 AHA 指引', '2012 年首版已發布，獸醫普及度增加'],
      ['急診 AI 分診系統', '犬貓急診嚴重度自動評估', '人醫已有成熟系統，獸醫研發中'],
    ],
    L1: [
      ['休克的分子機轉研究', '犬 SIRS/sepsis 的早期生物標記', 'Procalcitonin/CRP 在犬的驗證中'],
      ['血管內皮糖萼層（glycocalyx）', '犬體液復甦策略最佳化', '人醫「損傷控制復甦」理念引入獸醫'],
      ['凝血纖溶平衡的即時監測', '犬 DIC 的 TEG/ROTEM 指引治療', '獸醫使用漸增'],
    ],
    L2: [
      ['缺血再灌流損傷（IRI）機轉', '犬 GDV/腸扭轉術後器官保護', '基礎研究與臨床策略並行'],
      ['急性腎損傷（AKI）早期生物標記', '犬 NGAL/KIM-1/Cystatin C', '人醫已常規使用，獸醫研究階段'],
      ['炎症體（inflammasome）在急性疾病', '犬 sepsis/pancreatitis 的新治療靶點', '基礎研究中'],
    ],
    L3: [
      ['體外膜氧合（ECMO）', '犬嚴重急性呼吸窘迫/心因性休克', '人醫成熟技術，獸醫因成本極少使用'],
      ['毒物即時檢測（POC toxicology）', '犬中毒即時確認毒物種類', '人醫快速檢測套組，獸醫可用性有限'],
      ['治療性低溫（targeted temperature management）', '犬心停復甦後腦保護', '人醫已為標準，獸醫初步研究'],
      ['血漿交換（plasmapheresis）', '犬嚴重免疫介導疾病急救', '少數獸醫轉介中心可執行'],
    ],
    L4: [
      ['床邊凝血分析（TEG/ROTEM）', '犬凝血功能即時全面評估', '獸醫 ICU 漸增使用'],
      ['連續血糖監測（CGM）', '犬 DKA/胰島素瘤的血糖趨勢追蹤', '人醫 Freestyle Libre 獸醫已有使用報告'],
      ['POCUS 肺超音波 B-lines', '犬急診即時肺水腫/胸水評估', '獸醫急診 POCUS 教育快速普及'],
    ],
    L5: [
      ['目標導向體液治療（GDFT）', '犬休克復甦的個人化輸液策略', '人醫 GDFT 已改變實踐，獸醫引入中'],
      ['高流量鼻導管氧氣（HFNC）', '犬呼吸窘迫的非侵入性氧氣支持', '人醫廣泛使用，獸醫經驗增加'],
      ['抗蛇毒血清精製化', '台灣特有蛇種抗毒血清改進', '疾管署持續更新，F(ab\')2 製劑研究中'],
      ['脂質乳劑療法（ILE/Intralipid）', '犬局部麻醉劑/脂溶性毒物中毒的解毒', '獸醫急診已廣泛採用'],
    ],
  },
  cpath: {
    L0: [
      ['自動化血液分析儀整合 AI 判讀', '犬貓 CBC 自動複檢減少人工覆核', '人醫已有 AI 血液抹片判讀，獸醫開發中'],
      ['即時檢驗（POCT）品質管理', '獸醫院內 POCT 結果一致性確保', '人醫 ISO 22870 標準，獸醫標準化進展中'],
      ['分析前品質指標自動化監測', '檢體品質自動評估（溶血/脂血/黃疸指數）', '現代自動化儀器多已內建'],
    ],
    L1: [
      ['質譜分析（mass spectrometry）', '犬貓藥物/毒物精確定量', '人醫臨床常規，獸醫限於參考實驗室'],
      ['流式細胞術（flow cytometry）', '犬淋巴瘤免疫表型分型', '獸醫已有商業服務'],
      ['分子診斷（PCR/NGS）', '犬貓感染性疾病精準病原鑑定', '獸醫 PCR panel 已普及'],
    ],
    L2: [
      ['全自動尿液分析系統', '犬貓尿沉渣 AI 辨識標準化', '人醫自動化成熟，獸醫引入中'],
      ['血氣分析 POCT 整合', '犬貓急診床邊即時血氣+電解質+乳酸', '獸醫急診 iSTAT 等設備普及'],
    ],
    L4: [
      ['數位病理學（digital pathology）', '犬貓組織切片遠距判讀與 AI 輔助', '人醫快速發展，獸醫數位病理服務增加'],
      ['液態切片腫瘤標記', '犬腫瘤 ctDNA/CTC 非侵入性監測', '研究階段'],
      ['MALDI-TOF 微生物鑑定', '犬貓感染病原快速鑑定（分鐘級）', '人醫臨床常規，獸醫引入中'],
    ],
  },
};

// === CONTROVERSIES DATA ===
const CONTROVERSIES = {
  surg: {
    L0: [
      ['獸醫外科專科訓練年限與能力認證標準', '各國標準不一（美國 ACVS 3 年 vs 歐洲 ECVS 差異）', 'Level IV'],
      ['微創手術在獸醫的適應症範圍', '腹腔鏡 OVE 已廣泛接受，其他術式適應症持續擴展', 'Level III'],
      ['外科手術教學中動物模型 vs 模擬器的倫理與效果', '減少活體動物使用的趨勢', 'Level IV'],
    ],
    L1: [
      ['不鏽鋼 vs 鈦合金植入物的優劣', '鈦合金生物相容性較好但成本高，兩者臨床差異證據有限', 'Level III'],
      ['可吸收縫線材質選擇（PDS vs Monocryl vs V-Loc）', '單絲 vs 倒鉤線在特定術式的優劣尚無大型比較', 'Level III'],
      ['術前預防性抗生素的時機與選擇', '第一代頭孢菌素為首選已有共識，但給藥時機（切皮前 30 min）的遵從率待提升', 'Level I'],
    ],
    L2: [
      ['犬術後感染率基準值', '各醫院感染監控標準化不足，數據差異大', 'Level III'],
      ['電燒/超音波刀 vs 傳統止血的組織損傷比較', '超音波刀/LigaSure 組織損傷較小的體外證據明確，臨床預後差異不一', 'Level II'],
    ],
    L3: [
      ['犬 TPLO vs TTA vs 側副韌帶穩定術治療 CCL 斷裂', '大型犬 TPLO 為主流但 TTA 同等級證據，小型犬側副韌帶穩定術仍有支持者', 'Level I'],
      ['犬 GDV 預防性胃固定術適應症', '大型犬/深胸犬是否應常規預防性胃固定仍有爭議', 'Level III'],
      ['犬脾臟腫塊的術前活檢價值', '脾臟 FNA 的診斷敏感度/出血風險的風險效益分析', 'Level III'],
      ['犬貓 OVE vs OVH', '歐洲傾向 OVE（微創、術後疼痛少），美洲傳統 OVH——長期子宮殘端併發症證據不足', 'Level II'],
    ],
    L4: [
      ['犬髖關節發育不良的影像篩檢方法（OFA vs PennHIP）', '兩種系統的敏感度/特異度比較，品種計畫採用標準不同', 'Level II'],
      ['術前 CT vs 傳統 X 光在骨折評估的必要性', '複雜骨折 CT 增加手術規劃精確度，但成本效益待評估', 'Level III'],
    ],
    L5: [
      ['犬 NSAIDs 長期使用的腎毒性風險', '短期安全性確認，長期（>6 月）腎功能影響數據有限', 'Level II'],
      ['犬骨折固定——鎖定板（LCP）vs 傳統 DCP 的臨床差異', '生物力學優勢明確，臨床預後差異的前瞻性比較不足', 'Level II'],
      ['犬 CCL 手術後復健物理治療的證據等級', '經驗性支持復健加速恢復，但 RCT 數據有限', 'Level III'],
    ],
  },
  derm: {
    L0: [
      ['犬異位性皮膚炎的診斷標準（Favrot criteria）敏感度/特異度', '敏感度 ~85%/特異度 ~79%，仍有誤判空間', 'Level II'],
      ['獸醫皮膚科遠距診療的診斷準確度', '照片品質與臨床觸診缺失影響判斷', 'Level IV'],
    ],
    L1: [
      ['犬皮膚微生物組在疾病中的因果角色', '相關性已建立但因果關係證據不足', 'Level IV'],
      ['filaggrin 基因缺陷在犬 AD 的角色', '人類 AD 的關鍵基因，犬的同源基因研究結果不一致', 'Level III'],
    ],
    L2: [
      ['Oclacitinib vs Lokivetmab 作為犬 AD 一線治療的選擇', '兩者皆有 Level I 證據，head-to-head 比較研究不足', 'Level I'],
      ['犬 AD 長期免疫抑制的腫瘤風險', '理論風險存在，長期監控數據累積中', 'Level III'],
    ],
    L3: [
      ['犬膿皮症的經驗性 vs 培養導引抗生素選擇', 'MRSP 盛行率升高使經驗性治療風險增加', 'Level II'],
      ['犬食物不良反應的排除飲食試驗持續時間', '傳統 8 週 vs 新研究建議 6 週可能足夠', 'Level II'],
      ['犬蠕形蟎蟲症是否需治療至兩次皮膚刮搔陰性', '傳統標準 vs 較短療程的新證據', 'Level III'],
      ['貓嗜酸球肉芽腫複合體的分類系統', '現有分類是否反映不同病因仍不確定', 'Level IV'],
    ],
    L4: [
      ['犬過敏原特異性 IgE 檢測（血清 vs 皮膚點刺）的一致性', '兩種方法結果不一致率高達 30-40%', 'Level II'],
      ['犬皮膚組織病理的品質與標準化', '不同病理醫師間判讀一致性待改善', 'Level III'],
    ],
    L5: [
      ['犬 AD 的 Oclacitinib 是否可安全與疫苗同時使用', '有限數據建議可能降低疫苗效力', 'Level III'],
      ['犬局部 glucocorticoid 的長期安全性（皮膚萎縮）', '犬皮膚較薄區域長期使用風險待量化', 'Level IV'],
    ],
  },
  neuro: {
    L0: [
      ['犬癲癇分類系統（IVETF 2015）的臨床實用性', '分類過於複雜，基層獸醫使用率低', 'Level IV'],
      ['犬認知功能障礙（CCD）的診斷標準', '缺乏金標準，依賴行為問卷——主觀性高', 'Level IV'],
    ],
    L1: [
      ['犬腦脊髓液（CSF）常規分析的診斷價值', 'CSF 蛋白/細胞計數的特異度低，需結合 MRI', 'Level III'],
      ['犬脊髓 MRI T2 高信號的預後預測價值', 'IVDD 犬 T2 信號變化與功能恢復的相關性不一致', 'Level II'],
    ],
    L2: [
      ['犬 MUO（GME/NME/NLE）是否為同一疾病譜', '三者組織病理不同但臨床處理相似，統稱 MUO 是否適當', 'Level IV'],
      ['犬前庭症候群的「特發性」診斷是排除性的', '缺乏確認性診斷工具，可能遺漏早期腫瘤/感染', 'Level IV'],
    ],
    L3: [
      ['犬特發性癲癇的 AED 起始時機', '首次發作即治療 vs 觀察等待 vs cluster 後才治療——缺乏 RCT', 'Level III'],
      ['犬 IVDD Hansen Type I 手術 vs 保守治療（Grade I-III）', 'Grade I-II 保守治療成功率高，Grade III 手術利弊爭議', 'Level II'],
      ['犬 Chiari-like malformation/SM 手術指征', '哪些 CM/SM 犬真正受益於 foramen magnum 減壓術', 'Level III'],
      ['犬 MUO 的最佳免疫抑制方案', 'Prednisolone vs Cytarabine vs Cyclosporine——缺乏 head-to-head RCT', 'Level III'],
    ],
    L4: [
      ['犬腦脊髓液採集的安全性（枕骨大孔 vs 腰椎穿刺）', '枕骨大孔穿刺在腦幹病變時的風險', 'Level III'],
      ['犬 MRI 序列選擇的標準化', '各機構 MRI protocol 差異影響跨機構比較', 'Level IV'],
    ],
    L5: [
      ['犬第三代 AED（Levetiracetam）作為一線 vs 二線的定位', 'LEV 副作用少但需 TID 給藥，一線地位的證據累積中', 'Level II'],
      ['犬 IVDD 術後類固醇使用', '爭議已久——可能加重脊髓損傷，多數專家不建議', 'Level II'],
    ],
  },
  onco: {
    L0: [
      ['犬腫瘤分期系統的統一性', 'WHO vs VCOG vs 個別腫瘤特異分期——缺乏跨腫瘤一致標準', 'Level IV'],
      ['比較腫瘤學中犬模型的代表性', '犬自發腫瘤與人類腫瘤的分子相似度因腫瘤類型而異', 'Level III'],
    ],
    L1: [
      ['犬腫瘤的分子分類是否應取代組織學分類', '分子分類成本高，臨床可行性待提升', 'Level III'],
      ['犬腫瘤微環境（TME）的種間差異', '犬 TME 與人不完全相同，影響免疫療法轉譯', 'Level IV'],
    ],
    L2: [
      ['犬 MCT c-KIT 突變檢測的常規必要性', 'c-KIT 突變影響 TKI 反應，但非突變型也可能有效', 'Level II'],
      ['犬淋巴瘤 CHOP 方案是否仍為金標準', '多中心研究結果一致但 MST 未顯著延長近 20 年', 'Level I'],
    ],
    L3: [
      ['犬 MCT Grade II（Patnaik）的異質性', '同一級別預後差異大——Kiupel 二級制是否更好？', 'Level II'],
      ['犬骨肉瘤截肢+化療 vs 保肢+化療', '保肢術感染/植入物失敗率高，長期存活是否等同', 'Level II'],
      ['犬 HSA 化療（Doxorubicin ± DACTILi）的實際獲益', 'MST 延長有限（~140 vs ~90 天），飼主生活品質考量', 'Level I'],
      ['犬淋巴瘤「rescue」protocol 的選擇', '多種 rescue 方案存在但無 head-to-head 比較', 'Level III'],
    ],
    L4: [
      ['犬腫瘤 FNA vs 組織切片作為治療決策依據', 'FNA 準確度因腫瘤類型差異大，何時需組織切片', 'Level II'],
      ['犬腫瘤分期影像檢查的最低標準', '三視圖 X 光 vs CT 的成本效益——何時升級', 'Level III'],
    ],
    L5: [
      ['犬腫瘤 metronomic chemotherapy 的適應症', '低劑量連續化療的抗血管新生機轉吸引人，但 RCT 不足', 'Level III'],
      ['犬 MCT Toceranib vs Masitinib 的選擇', '兩者皆為 TKI，head-to-head 比較數據極有限', 'Level III'],
      ['犬腫瘤安樂死時機的客觀標準', '生活品質評估主觀性高，缺乏標準化工具', 'Level IV'],
    ],
  },
  ecc: {
    L0: [
      ['獸醫急診分診系統的標準化', '各系統（VTS, ATT, APPLE）的比較驗證不足', 'Level III'],
      ['犬貓 CPR 存活率的真實數據', 'RECOVER 登錄處報告 ROSC ~45% 但出院存活僅 ~5-10%', 'Level II'],
    ],
    L1: [
      ['犬 sepsis 的診斷標準（SIRS criteria）特異度', '犬 SIRS criteria 特異度偏低——疼痛/緊迫也可觸發', 'Level III'],
      ['犬乳酸正常值與清除率作為預後指標', '清除率比絕對值更有預測力，但採樣時間點標準化不足', 'Level II'],
    ],
    L2: [
      ['犬急性胰臟炎的確診方法', 'Spec cPL 敏感度高但特異度變異大，超音波敏感度 ~70%', 'Level II'],
      ['犬 DIC 的診斷標準', '缺乏犬特異性 DIC 評分系統，多借用人醫 ISTH 標準', 'Level III'],
    ],
    L3: [
      ['犬 GDV 術後心律不整的治療閾值', 'Lidocaine 何時開始？VPC rate >20/min vs 出現 R-on-T 的爭議', 'Level III'],
      ['犬中毒洗胃 vs 催吐 vs 活性碳的適用時機', '催吐時間窗（2 小時）、活性碳對特定毒物效果的個別化決策', 'Level II'],
      ['犬急性腎損傷的體液治療量', '傳統大量輸液 vs 限制性輸液策略——獸醫缺乏比較數據', 'Level III'],
      ['犬蛇咬傷抗毒血清的劑量與重複給藥標準', '台灣蛇種特異性數據不足，多參考國際經驗', 'Level III'],
    ],
    L4: [
      ['犬 POCUS TFAST/AFAST 的標準化訓練與能力認證', '操作者依賴性高，獸醫 POCUS 認證制度尚未統一', 'Level IV'],
      ['犬血氣分析 Stewart approach vs Henderson-Hasselbalch', '物理化學方法理論更完整，但臨床實用性爭議', 'Level III'],
    ],
    L5: [
      ['犬休克的晶體液 vs 膠體液選擇', '人醫大型 RCT 不支持膠體液優勢，獸醫 HES 安全性疑慮增加', 'Level I'],
      ['犬急性疼痛管理——Opioid 劑量個體化', '犬對 opioid 反應個體差異大，固定劑量方案不一定適合所有病患', 'Level III'],
      ['犬 DKA 的 insulin CRI protocol（0.05 vs 0.1 U/kg/h）', '低劑量方案減少低血糖風險但血糖控制速度較慢', 'Level III'],
    ],
  },
  cpath: {
    L0: [
      ['獸醫臨床病理品質管理標準', 'ASVCP 有建議但非強制——各實驗室 QC 落差大', 'Level III'],
      ['POCT vs 中央實驗室結果的一致性', '部分項目差異顯著（如白血球分類計數），需了解設備限制', 'Level II'],
    ],
    L1: [
      ['犬貓參考區間的品種特異性', '灰狗、秋田犬、緬甸貓等品種有顯著差異，通用參考區間不適用', 'Level II'],
      ['溶血/脂血/黃疸對化學分析的干擾程度', '不同分析平台的干擾程度不同，需了解各平台限制', 'Level II'],
    ],
    L2: [
      ['犬貓 CRP/SAA 等急性期蛋白的臨床決策價值', '具有發炎指標價值，但疾病特異度低', 'Level III'],
      ['犬尿蛋白/肌酸酐比值（UPC）的採樣標準化', '單次 vs 池尿的差異、禁食狀態影響', 'Level III'],
    ],
    L4: [
      ['犬貓 FNA 細胞學 vs 組織病理的一致性', '因組織類型差異大——淋巴結 FNA 準確度高、脾臟/肝臟較低', 'Level II'],
      ['犬骨髓抹片判讀標準化', '不同判讀者間一致性待提升', 'Level IV'],
      ['犬貓內分泌功能檢測結果在不同平台間的比較性', 'T4/cortisol 等結果因分析方法差異可能不可直接比較', 'Level III'],
    ],
  },
};

function getLayerFromContext(content, bodyStart) {
  const before = content.substring(Math.max(0, bodyStart - 800), bodyStart);
  if (before.includes('-L0-')) return 'L0';
  if (before.includes('-L1-')) return 'L1';
  if (before.includes('-L2-')) return 'L2';
  if (before.includes('-L3-')) return 'L3';
  if (before.includes('-L4-')) return 'L4';
  if (before.includes('-L5-')) return 'L5';
  return 'unknown';
}

function getNodeIdFromContext(content, bodyStart) {
  const before = content.substring(Math.max(0, bodyStart - 500), bodyStart);
  const m = before.match(/node_id:\s*'([^']+)'/);
  return m ? m[1] : 'UNKNOWN';
}

function buildTranslationalTable(rows) {
  let table = '| 人醫工具/概念 | 獸醫應用潛力 | 現況 |\n';
  table += '|-------------|-------------|------|\n';
  for (const row of rows) {
    table += `| ${row[0]} | ${row[1]} | ${row[2]} |\n`;
  }
  return table;
}

function buildControversyTable(rows) {
  let table = '| 爭議議題 | 現況 | Evidence Level |\n';
  table += '|---------|------|---------------|\n';
  for (const row of rows) {
    table += `| ${row[0]} | ${row[1]} | ${row[2]} |\n`;
  }
  return table;
}

function processFile(specialty) {
  const filePath = path.join(SEED_DIR, specialty, 'contents.ts');
  if (!fs.existsSync(filePath)) {
    console.log(`[SKIP] ${specialty}/contents.ts not found`);
    return 0;
  }

  let content = fs.readFileSync(filePath, 'utf-8');

  const transData = TRANSLATIONAL[specialty];
  const contData = CONTROVERSIES[specialty];

  if (!transData || !contData) {
    console.log(`[SKIP] ${specialty} — no content data defined`);
    return 0;
  }

  // Track layer usage counters for rotating through content
  const layerTransIdx = {};
  const layerContIdx = {};

  const bodyRegex = /body: `([\s\S]*?)(?<!\\)`/g;
  let match;
  const replacements = [];

  while ((match = bodyRegex.exec(content)) !== null) {
    const bodyContent = match[1];
    const bodyStart = match.index;

    // Only process bodies with 待補充
    if (!bodyContent.includes('\u5f85\u88dc\u5145')) continue;

    const layer = getLayerFromContext(content, bodyStart);
    const nodeId = getNodeIdFromContext(content, bodyStart);

    // Get translational rows for this layer
    const transRows = transData[layer] || transData['L3'] || transData['L0'] || [];
    const contRows = contData[layer] || contData['L3'] || contData['L0'] || [];

    if (transRows.length === 0 && contRows.length === 0) continue;

    // Build replacement tables
    const transTable = buildTranslationalTable(transRows);
    const contTable = buildControversyTable(contRows);

    // Replace placeholder translational table
    let newBody = bodyContent;

    // Replace translational placeholder
    newBody = newBody.replace(
      /\| 人醫工具\/概念 \| 獸醫應用潛力 \| 現況 \|\n\|[-|]+\n\| （待補充） \| — \| — \|/g,
      transTable.trim()
    );

    // Replace controversy placeholder
    newBody = newBody.replace(
      /\| 爭議議題 \| 現況 \| Evidence Level \|\n\|[-|]+\n\| （待補充） \| — \| — \|/g,
      contTable.trim()
    );

    if (newBody !== bodyContent) {
      replacements.push({
        original: match[0],
        replacement: `body: \`${newBody}\``,
        index: match.index
      });
      console.log(`  [FILL] ${nodeId} (${layer})`);
    }
  }

  // Apply replacements in reverse order
  for (let i = replacements.length - 1; i >= 0; i--) {
    const r = replacements[i];
    content = content.substring(0, r.index) + r.replacement + content.substring(r.index + r.original.length);
  }

  fs.writeFileSync(filePath, content, 'utf-8');
  return replacements.length;
}

console.log('=== Filling placeholder tables with real content ===\n');
let total = 0;
for (const sp of ['surg', 'derm', 'neuro', 'onco', 'ecc', 'cpath']) {
  console.log(`[${sp.toUpperCase()}]`);
  const count = processFile(sp);
  console.log(`  → ${count} bodies updated\n`);
  total += count;
}
console.log(`=== Total: ${total} bodies updated ===`);
