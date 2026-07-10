# 引用真偽稽核報告（Citation Integrity Audit）— 2026-07-09

> **給 DVM：** 本報告列出 v1 seed 中**通過自動 `verify:citations`（loose biblio-resolve）、但逐條 Crossref 查真後發現有問題**的 journal 引用。自動閘門只驗「DOI 解得開 + 標題相符」，抓不到「來源錯配 / 卷期頁誤植 / 整條捏造」——這些需人工判定。
>
> **稽核方法**：抽出全 seed **189 條無-DOI journal 引用**（loose-resolve 類，最可能藏問題），逐條打 Crossref REST API 以「作者 + 期刊 + 年 + 標題」查證。已完成 **CPATH（主 thread）+ IM/ONCO/SURG（平行 agent 稽核 + 主 thread 覆核）**。
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
| CPATH | Nabity「IRIS Canine GFR Working Group SDMA consensus」JVIM 2023 | 查無；真實者為 2013 IRIS Canine **GN** Study Group（主題不同）；疑 Nabity 2015 SDMA validation 之誤植 |
| ONCO | Boston SE「palliative radiation…2-3 fraction」VRU 2007;48(2):141-145 | VRU 2007 已完整索引，獨缺此篇 |
| ONCO | Worth AJ「Thyroidectomy…12 cases」N Z Vet J 2005;53(4):228-233 | Worth 2005 真實文為 Aust Vet J 83(4):208-214（放射碘，主題/期刊被混植） |

---

## B. 平行 agent 標記、待主 thread 逐條覆核後處置（SURG，尚未動 code）

> 以下由 SURG 稽核 agent 提出、附 Crossref 理由；**主 thread 尚未逐條覆核，暫未改 code**。將於後續迭代逐條 Crossref 確認後套用（修正或標記）。

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

## D. 尚未稽核（後續迭代）
- 其他 5 科的無-DOI journal 引用：DERM(24)、NEURO(27)、ECC(14)、CARDIO(18) 大部分、IM/ONCO/SURG 的 VERIFIED 條（可選擇性補 DOI 強化）。

---

## 結論與建議
1. **v1 seed 確實散落著自動閘門抓不到的捏造/誤植引用**——本次已於 IM/ONCO/SURG/CPATH 4 科找到 **≥6 條疑捏造 + ≥8 處誤植**。這對「100% 正確全書」是根基性風險。
2. 建議 DVM **優先裁定 A2 的 6 條疑捏造**（保留/移除/替換），並覆核 B 的 SURG 批。
3. 長期建議：把 `verify-citations.ts` 增強為「對無-DOI 的 journal 引用，額外做作者+期刊+年 Crossref 存在性檢查」，讓此類問題未來能被自動攔下。
