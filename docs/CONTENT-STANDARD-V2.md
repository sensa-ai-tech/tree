# v2 教科書節點標準（CONTENT-STANDARD-V2）

> 一個知識節點要達到「線上節點化教科書」品質、可標記 `version: 2` 的明文標準。
> 範本：`DERM-L3-008`（皮膚癬菌症）。最高原則：**100% 資料正確性**——每一句臨床主張都能追溯到一個已驗證的真實來源。
> 對應 `src/types/knowledge.ts` 的 `NodeContent`、`scripts/verify-citations.ts`、`docs/ADD-NODE-SOP.md`。

---

## 0. 適用與分級

- 本標準定義 **v2**。新節點與 v1 升級都以此為目標。達標才把 `NodeContent.version` 設為 `2`、`status` 進入 `review`。
- 範圍鎖定**台灣小動物（犬貓）臨床**，深度優先（與現有 `台灣 / 犬貓` 標註一致）。
- node_type 決定 body 結構（見 §2）；**欄位要求（§1）與正確性要求（§3）對所有型別一律適用**。

---

## 1. NodeContent 欄位最低要求

| 欄位 | 最低要求 |
|------|---------|
| `summary` | 80–200 字，講清楚「這個病/概念到底是什麼、為何重要」，可含現行指引立場 |
| `learning_objectives` | ≥ 4 條，動詞開頭、可評量 |
| `key_points` | ≥ 5 條，每條是一個可考、可臨床決策的事實；過時觀念要標明已更正 |
| `body` | 依型別的段落結構（§2），Markdown，含至少 1 個表格與 1 個 `[圖片:...]` / `[互動:...]` placeholder |
| `clinical_pearl` | 1 段，臨床上「最容易忽略但最關鍵」的一點 |
| `common_mistakes` | ≥ 4 條，真實會犯的錯（含「把過時教條當現行」這類） |
| `disease_data` / `diagnostic_data` / `procedure_data` | 依型別三選一填滿，其餘為 `null`（疾病型 11 欄全填） |
| `references` | ≥ 5 條，**全部通過 `verify:citations`**（§3）；至少 1 條現行權威指引 + 1 條近 5 年文獻 |
| `drug_api_links` | 列出 body 出現的所有藥名（對應藥物資料庫） |
| `visual_placeholders` / `interactive_placeholders` | 各 ≥ 1，標好 position/type/description |

---

## 2. body 段落結構（依型別）

**疾病 / 治療型（disease / therapeutic）— 八段（DERM-L3-008 範本）：**
1. 病理機制（概述 / 病原學 / 病理機轉）
2. 臨床表現與診斷（含犬貓分述、診斷流程、各檢查敏感/特異度）
3. 治療策略（全身 / 局部 / 環境，藥名用 `[藥物:X]` 標記）
4. 併發症與監控（**含監控計畫表**：時間點 / 項目 / 目標）
5. 預後與預後因子
6. 人醫借鑒（Translational Insights，表格：人醫工具 → 獸醫應用 → 現況）
7. 臨床爭議與知識空缺（表格，每列標 **Evidence Level I/II/III**）
8. 近期實證更新（對齊**現行**指引、列出被更正的舊觀念、命名更新）

**診斷 / 操作型（diagnostic / procedure）：** 改用 step-by-step 結構（適應症/禁忌、器材、步驟、判讀、pitfalls、敏感度特異度），仍保留第 6–8 段（人醫借鑒 / 爭議 / 近期更新）。

**概念 / 機轉型（concept / mechanism）：** 概述 → 機轉分層 → 臨床連結 → 第 7–8 段。

---

## 3. 正確性要求（核心，不可妥協）

1. **可追溯**：每一句臨床主張都對應 `references` 裡某一條來源；劑量必引官方仿單（FDA/EMA/Plumb's）。
2. **引用全驗證**：所有 `references` 跑 `npm run verify:citations` 必須是 `VERIFIED_*`；**0 條 `SUSPECT_*`**。帶 DOI 的要 DOI 解得開且標題相符；無 DOI 的期刊要書目查得到。
3. **劑量聲明**：藥物劑量一律附「臨床內容與劑量需獸醫師依仿單核對」。
4. **證據分級**：爭議/不確定處標 Evidence Level（I = RCT/系統回顧、II = 對照研究、III = 專家意見/病例系列）。
5. **指引時效**：引用**現行**版本；若有舊版被取代，明寫「舊觀念 X 已更正為 Y（依 〔指引〕）」。
6. **命名時效**：用現行分類學（例：M. gypseum → *Nannizzia gypsea*），首次出現時註明更名。
7. **DVM 覆核 gate**：AI 產出停在 `status: 'review'`，附上每條主張的來源連結，獸醫簽核後才升 `published`（= 100% 章）。
8. **台灣脈絡**：氣候、法規、可取得藥物、在地流行病學有差異時要點出。

---

## 4. 反模式（看到就擋下）

- ❌ **捏造共識**：`"〔某學會〕Consensus – 〔主題〕"` 這種權威感十足但**查無此共識**的引用，常配一個錯 DOI（解到不相干論文）或錯 URL。新增任何「共識/指引」引用前，先確認它真的存在。（v1 seed 的通病，已知踩雷見 CLAUDE.md §11 註。）
- ❌ **過時教條當現行**（例：「Wood 燈只有 50%」「環境要燻蒸全屋」）。
- ❌ **猜 DOI**：套對期刊前綴、編號用猜的 → DOI 解得開但指到別篇。
- ❌ **全形標點混入英文引用**（`，`）→ 破壞解析也不專業。
- ❌ 單一檔案整檔覆寫（用增量 Edit）；`body` 反引號 template 收尾要顧好（見 ADD-NODE-SOP）。

---

## 5. 狀態流程

```
draft  ──AI 接地生成 + verify:citations 全綠──▶  review  ──獸醫簽核──▶  published
```
- `version: 1` = 舊 seed；`version: 2` = 達本標準。
- 升級時 `version` +1、保留舊版於版本史（`is_current` 切換）。

---

## 6. 驗證門檻（達標才算完成）

1. `npm run verify:citations` —— 該節點所有引用 0 個 `SUSPECT_*`
2. `npx tsc --noEmit` —— 0 errors
3. `npm test` —— 全過（注意 `content-stats` / 結構性 snapshot drift，依 ADD-NODE-SOP 更新）
4. `npm run build` —— 必過（CLAUDE.md rule 11，CJK 地雷）
5. （建議）`scripts/audit-seed-quality.ts` 加掛兩個新維度：**引用可解析率**、**主張-來源接地**，納入 10 維度評分

---

## 7. 黃金範例

`src/data/seed/derm/contents.ts` 的 `CONTENT-DERM-L3-008`（皮膚癬菌症 v2）：八段齊備、6 條真實 DOI 引用、WAVD 2017 對齊、Evidence Level 標註、命名更新、DVM 覆核聲明。新節點與升級對照它即可。
