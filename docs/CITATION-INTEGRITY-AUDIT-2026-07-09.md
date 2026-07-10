# 引用真偽稽核報告（Citation Integrity Audit）— 2026-07-09

> **給 DVM：** 本報告列出 v1 seed 中**通過自動 `verify:citations`（loose biblio-resolve）、但逐條 Crossref 查真後發現有問題**的 journal 引用。自動閘門只驗「DOI 解得開 + 標題相符」，抓不到「來源錯配 / 卷期頁誤植 / 整條捏造」——這些需人工判定。
>
> **稽核方法**：抽出全 seed **~189 條無-DOI journal 引用**（loose-resolve 類，最可能藏問題），逐條打 Crossref REST API 以「作者 + 期刊 + 年 + 標題」查證。**✅ 全 8 科（IM / ONCO / SURG / CPATH / DERM / NEURO / ECC / CARDIO）已稽核完畢**——CPATH/IM/ONCO/SURG 為第一批，DERM/NEURO/ECC/CARDIO 為第二批（平行 agent 稽核 + 主 thread 每條 Crossref 二次覆核）。
>
> **最終統計**：共揪出 **~18 條疑捏造（⚠️ 標記待裁）+ ~15 處誤植（已更正為真實文+DOI）**，全部是自動 `verify:citations` 閘門**放行**的問題引用。
>
> **重要原則**：所有標記 `⚠️` 的引用**均未刪除**，只在該 ref 的 `relevance` 加註記；請 DVM 逐條裁定「保留／移除／替換」。

---

## A. 已由主 thread Crossref 覆核並處置（高信心）

### A1. 已「更正」為真實文獻（原引用捏造/誤植 → 換上 Crossref 驗證的真實文 + DOI）
| 節點 | 原（有問題）引用 | 更正為 |
|---|---|---|
| ONCO（MCT 切緣） | Simpson S「Comparative review of surgical margins…」Vet Surg 2019;48(7):1108-1116（查無） | **Simpson AM「Evaluation of surgical margins required for complete excision of cutaneous MCT in dogs」JAVMA 2004;224(2):236-240** `10.2460/javma.2004.224.236` |
| CPATH（DIC） | Wiinberg「Tissue factor and thromboelastography…」JVIM 2008;22(4):826-832（標題/卷期頁誤） | **Wiinberg「Thromboelastographic Evaluation of Hemostatic Function in Dogs with DIC」JVIM 2008;22(2):357-365** `10.1111/j.1939-1676.2008.0058.x` |
| ONCO（教科書） | Withrow/Vail/Page 6th ed 編者誤 | 更正為 Vail/Thamm/Liptak（Withrow/Page 為 5th ed） |
| DERM（ICADA） | Olivry「BMC Vet Dermatol 2015;26:210」期刊名/卷誤 | BMC Vet Res 2015;11:210 `10.1186/s12917-015-0514-6` |
| CPATH ×2 | Weese / Moriello（無 DOI） | 確認真實、補 DOI `10.1111/jvim.12562` / `10.1111/vde.12440` |

### A2. 已「標記 ⚠️ 待查證」（Crossref 查無、疑捏造，但無明確真實替代 → 交 DVM 裁定）
| 節點 | 疑似捏造引用 | Crossref 證據 |
|---|---|---|
| SURG-L0-001 | Burn CC「systematic review of veterinary surgical outcomes」Vet Surg 2020;49(Suppl1):O8-O17 | 查無此獸醫外科文；Burn 作者僅見人醫 |
| IM-L1-001 | Hall JA「Biomarkers of kidney function and damage」CVSM 2022;52(3):547-567 | 該期真實文為 Ross 659-672 等，無 Hall 547-567 |
| IM | Bennett SL, Abraham LA「Treatment of acute kidney injury」CVSM 2022;52(3):601-612 | 頁碼與真實排版衝突（Olin 581-608/Michael 609-629）；該期 AKI 主文為 Ross 659-672 |
| ~~CPATH~~ **✅已解決** | ~~Nabity「IRIS Canine GFR Working Group SDMA consensus」JVIM 2023~~ | 查無 → **iter20 已以真實 Nabity 2015 SDMA assay validation（JVIM 29(4):1036-1044 `10.1111/jvim.12835`）替換**（原 relevance 述「SDMA 方法學驗證」正指此真實文；同作者、主題吻合）|
| ONCO | Boston SE「palliative radiation…2-3 fraction」VRU 2007;48(2):141-145 | VRU 2007 已完整索引，獨缺此篇 |
| ONCO | Worth AJ「Thyroidectomy…12 cases」N Z Vet J 2005;53(4):228-233 | Worth 2005 真實文為 Aust Vet J 83(4):208-214（放射碘，主題/期刊被混植） |

---

## B. SURG 批 — ✅ 已於後續迭代逐條覆核並套用

> 以下由 SURG 稽核 agent 提出、附 Crossref 理由；**主 thread 已逐條 Crossref 覆核完成**：誤植者已更正為真實文+DOI，疑捏造者已 ⚠️ 標記（citation 不刪）。狀態如各條所示。

**疑捏造（Crossref 查無對應文）**
- de Battisti「Lactate…GDV」JAVMA 2009;235(1):46-52 → 疑為 **de Papp 1999 JAVMA 215(1):49-52**（`10.2460/javma.1999.215.01.49`）之訛誤。
- Bardet「Radiographic assessment of fracture healing…review」VCOT 2010;23(6):379-388 → 查無。
- Turk「Antimicrobial prophylaxis…systematic review…」Vet Surg 2015;44(4):385-396 → 疑與同作者真實文 Vet Surg 2015;44(1):2-8（SSI surveillance）混淆。
- Mayhew「Comparison of three techniques for ovariectomy」Vet Surg 2012;41(5):629-634 → 查無此標題/卷期頁。

**誤植（真實文存在、卷期頁/標題誤）**
- Hagman 2018 Pyometra CVSM → 應為 48(4):639-661（非 48(2):339-372）`10.1016/j.cvsm.2018.03.001`
- Slocum 1993 TPLO → 應為 23(4):777-795（非 23(6):1325-1354）
- Giannoudis 2007 diamond concept Injury → 應為 38(Suppl 4):S3-S6（非 S11-25）
- Bentley 2007 septic peritonitis JVECC → 真實文為 17(4):391-398（標題/病例數/species 不符）
- Stanley LP Vet Surg → 兩候選：Bookbinder 2016 45(2):254-260（標題吻合）或 Stanley 2010 39(2):139-149（作者/年吻合）
- Devitt TECA-LBO drainage → 真實為 Vet Surg **1997**;26(3):210-216（`10.1111/j.1532-950x.1997.tb01486.x`）；原引 2013/active-suction 皆誤

---

## C. Inconclusive（Crossref 覆蓋盲區，**無捏造證據**，維持原樣、DVM 可選擇以 PubMed 覆核）
- IM：Klein/Peterson（Can Vet J 2010）、Laflamme（Canine/Feline Practice 1997，pre-DOI）、**Beczkowski FIV review（Vet Microbiol 2021;261:109195——波蘭姓氏特殊字符可能干擾 Crossref author 比對，建議 PubMed 覆核）**。
- ONCO：Bergman 2003（CCR 收錄不全）、Price 1991（ACVIM 摘要）、Villalobos（業界雜誌）、Theon ×2（pre-DOI JAVMA）、Matsuyama 2022（JAVMA 換版期）。
- SURG：Hsieh（Taiwan Vet J）、Findji（Wien Tierarztl Monatsschr）。
- CPATH：Braun / Knoll（Crossref 無法確認確切引用，作者/主題合理）。

---

## D. 第二批稽核結果（DERM / NEURO / ECC / CARDIO）— ✅ 完成

### D1. 已「更正」為真實文獻（誤植 → Crossref 驗證真實文 + DOI）
| 節點 | 原（有問題）引用 | 更正為 |
|---|---|---|
| NEURO（IVDD） | Suwankong「Steinberg VCOT…」卷期誤 | Suwankong VCOT **2008;21(3):285-293** `10.1055/s-0037-1617374` |
| NEURO（MUO） | Lowrie「…meningoencephalitis…」卷期誤 | Lowrie **Vet J 2016;213:1-5** `10.1016/j.tvjl.2016.03.026` |
| DERM（秋田犬 VKH-like） | Reichler 標題/卷期誤 | Reichler Vet Dermatol 2001 `10.1046/j.0959-4493.2001.00251.x` |
| DERM（哈瓦那犬） | Frazer 卷期誤 | Frazer Vet Dermatol 2011 `10.1111/j.1365-3164.2010.00942.x` |
| DERM（醫源性庫欣） | Frank hypercortisolemia 頁碼誤 | Frank JAVMA 2001;218:214-216 `10.2460/javma.2001.218.214` |
| CARDIO（心絲蟲） | Fan 台灣心絲蟲 97(3):203-210 | Fan Vet Parasitol **2001;102(1-2):113-120** `10.1016/S0304-4017(01)00511-8` |
| CARDIO（心包積液） | Stafford Johnson「29 cases;546-553」 | 真實 143-dog 世代 **546-552** `10.1111/j.1748-5827.2004.tb00202.x` |

### D2. 已「標記 ⚠️ 待查證」（Crossref 查無、疑捏造 → 交 DVM 裁定，citation 未刪）
| 節點 | 疑似捏造引用 | Crossref 證據 |
|---|---|---|
| DERM **5✅已解決 / 1待決** | Bizikova / Noli / Mueller / Marsella×2（✅）、Perego（待決） | **iter21 已以 Crossref 驗證真實文替換 5 條**：Mueller→PF in 91 dogs JAAHA `10.5326/0420189`；Marsella-1→2011 skin barrier `10.1111/j.1365-3164.2011.00967.x`；Marsella-2→2009 house dust mites `10.1111/j.1365-3164.2009.00809.x`；Bizikova→2014 drug-triggered PF `10.1111/vde.12117`（同作者）；Noli→**Yager 2014 EM/SJS/TEN 綜述** `10.1111/vde.12142`（作者由 Noli 改為真實 Yager）。**Perego「商業飼料治 demodicosis」主張無文獻支持→維持旗標，建議 DVM 移除**（真實 Perego 2019 為治療綜述 BMC Vet Res `10.1186/s12917-018-1767-7`，不涉飼料）|
| ~~CARDIO~~ **✅已解決** | ~~Chetboul「貓心超參考值 systematic review & meta-analysis」JVIM 2012;26(4):773-788~~ | 48 篇 Chetboul 文獻皆無此篇 → **iter18 已替換為 Crossref 驗證真實文** Schober K 2017 貓 2D 心超參考值 `10.1292/jvms.17-0250`（＋補犬 Cornell 2004 `10.1111/j.1939-1676.2004.tb02551.x`）|
| ~~ECC~~ **✅已解決** | ~~Holowaychuk「Transfusion medicine…」JVECC 2014;24(2):135-153~~ | 該作者當年 JVECC 僅 24(1)/24(5) → **iter19 已以 2 真實文替換**：Davidow B. 2013 CVSM 43(4):735-756 `10.1016/j.cvsm.2013.03.007`（標題來源、完整回顧）＋ 真實 Holowaychuk 2014 JAVMA 244(4):431-437 `10.2460/javma.244.4.431`（作者來源、pRBC 輸血風險因子）|

### D3. Inconclusive（Crossref 盲區、無捏造證據，維持原樣）
- ECC：Gwaltney-Brant「Chocolate intoxication」Vet Med 2001、Klein/Peterson Can Vet J 2010（均 pre-DOI/未索引真實文；`verify:citations` 會持續報 SUSPECT_NOT_FOUND，屬已知假陽性）。
- CARDIO：Shaw/Rush ×2（Compend Contin Educ Vet 2007，Compendium 未被 Crossref 索引）。

### D4. SURG / IM / ONCO 殘餘旗標查證（iter22，唯讀 agent + 主 thread 逐條 Crossref 覆核）

**已解決（2，IM，主 thread 覆核 body 無依賴後替換）**
| 節點 | 原捏造引用 | 已替換為（Crossref 驗證真實文）|
|---|---|---|
| IM 腎生物標記 | Hall JA「Biomarkers of kidney function…CVSM 2022;52(3):547-567」 | **Hall JA 2016 犬 SDMA** JVIM 30(3):794-802 `10.1111/jvim.13942`（同作者真實文）|
| IM AKI | Bennett/Abraham「Treatment of AKI CVSM 2022;52(3):601-612」 | **Ross L. Acute Kidney Injury in Dogs and Cats** CVSM 2022;52(3):659-672 `10.1016/j.cvsm.2022.01.005`（該期真實 AKI 主文；作者由捏造之 Bennett/Abraham 更正為真實 Ross）|

**維持旗標交 DVM（6，含驗證後之候選與警示——皆因異作者/主題位移/物種不符/數字失據/無原型，不宜自動替換）**
| 節點 | 疑捏造引用 | Crossref 查證結論（供 DVM 裁定）|
|---|---|---|
| SURG Burn（L0） | Burn CC「Systematic review of veterinary surgical outcomes」Vet Surg 2020;49(S1):O8-O17 | **NONE——查無真實原型**。Burn 於 Crossref 僅人醫外科；真實獸醫 Charlotte Burn 著作全為動物福利。**建議 DVM 移除**或改引真實 SSI 文 |
| SURG Bardet | Bardet「Radiographic assessment of fracture healing: a review」VCOT 2010;23(6):379-388 | **NONE——查無真實原型**。座標查無、Bardet 名下無此文。**建議 DVM 移除** |
| SURG Turk | Turk「Antimicrobial prophylaxis…systematic review」Vet Surg 2015;44(4):385-396 | 真實 Turk 2015 文為 **SSI surveillance 44(1):2-8**（本檔他處已收錄，屬**不同主題**）。此「prophylaxis 系統回顧」疑捏造 → DVM 移除或另尋真實抗生素預防文 |
| SURG Mayhew | Mayhew「Comparison of three techniques for ovariectomy」Vet Surg 2012;41(5):629-634 | 座標查無。同作者最接近真實文為 **Culp/Mayhew 2009「lap vs open ovariectomy」Vet Surg 38(7):811-817 `10.1111/j.1532-950x.2009.00572.x`**——但為**二術式非三術式**，主題位移，DVM 決定 |
| ONCO Boston | Boston「8 dogs osteosarcoma palliative RT 2-3 fraction」VRU 2007;48(2):141-145 | 座標查無。主題最接近真實文為 **Pagano 2016「14 dogs, 10 Gy×2」VRU 57(5):551-556 `10.1111/vru.12389`**——但**病例數不同（8 vs 14）**，若 body 引用「8 例」數據會失據，DVM 需併同 body 校 |
| ONCO Worth | Worth「Thyroidectomy…canine thyroid carcinoma: 12 cases」N Z Vet J 2005;53(4):228-233 | 座標查無。⚠️ agent 建議之 Naan 2006 為**貓甲亢**（101 cats）**≠ 節點之犬甲狀腺癌**，物種+疾病皆不符、**不可採用**。DVM 需另尋真實犬甲狀腺癌手術文或移除 |

> 另兩條 SURG（Bentley 敗血性腹膜炎、Stanley 喉麻痺）之誤植/含糊旗標已於 iter14 附真實候選，維持交 DVM。

---

## 結論與建議
1. **v1 seed 確實散落著自動閘門抓不到的捏造/誤植引用**——全 8 科稽核共找到 **~18 條疑捏造（⚠️ 待裁）+ ~15 處誤植（已更正）**。這對「100% 正確全書」是根基性風險，且已系統性排查完畢。
2. **關鍵發現**：捏造引用常被 `verify:citations` 的 loose biblio-resolve **放行**（biblio-resolve 到鄰近真實文即判 VERIFIED）——例如 ECC Holowaychuk 捏造篇通過自動閘門，只有人工 Crossref 覆核才揪出。**⚠️ 人工標記不可省。**
3. 建議 DVM **逐條裁定所有 ⚠️ 標記**（A2 六條 + D2 八條，共 ~14 條疑捏造）之保留/移除/替換；誤植（A1 + D1）已更正為真實文+DOI，可覆核確認。
4. 長期建議：把 `verify-citations.ts` 增強為「對無-DOI 的 journal 引用，額外做作者+期刊+年 Crossref 存在性檢查」，讓此類問題未來能被自動攔下（並維護一份 pre-DOI 真實文 allowlist 以抑制 D3 類假陽性）。
