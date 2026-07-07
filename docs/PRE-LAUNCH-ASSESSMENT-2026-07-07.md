# 上線前總體檢報告（第三輪） — VetKnowledgeTree

> 評測日期：2026-07-07
> 前次基線：`docs/PRE-LAUNCH-RETEST-2026-07-04.md`（第二輪，50 代理對抗式）、`docs/PRE-LAUNCH-ASSESSMENT-2026-07-02.md`（首輪）
> 評測範圍：專案安全性、內容完整性、實際瀏覽器操作、後台可使用性
> 執行方式：指揮官模式（主控親自瀏覽器實測 + 2 個唯讀深度稽核子代理：安全性 / 內容完整性）
> 專案狀態：本機 Mock 模式（seed 283 節點）；P0 真實 Auth **程式已接線、待營運端啟用**
> 對應規範：`~/.claude/CLAUDE.md`（自我驗證 SOP）、專案 `CLAUDE.md` rule 11（build 硬性門控）

---

## 一、為什麼要做第三輪

自 07-04 第二輪複測後，程式樹又有兩類實質變更，第二輪部分結論需重驗：

1. **技術債清償（commit `b3dbcd7`）**：把第二輪列為 P1 延後的兩項一次做掉——
   - `middleware.ts → proxy.ts` 遷移（Next.js 16 已棄用 `middleware` 慣例）。**這是安全關鍵層**：遷移若失手，CSP／安全標頭／`/admin/*` JWT 閘門會被靜默停用。
   - 持久化 user **auth-flash** 修復：新增 `sessionVerified` 旗標，避免過期 session 的「已登入 UI 閃現 → 彈回」。
2. **後台分析頁改真（commit `8d09e2f`）**：`/admin/analytics` 從硬編碼假數字改為真實「各專科節點數分佈」，並移除 `admin/loading.tsx` 修掉間歇性 loading hang。
3. **內容巡航（C3，數十個 commit）**：v1→v2 大量升級，內容需全量重驗引用並抽查新升級節點。

因此第三輪的核心問題是：**遷移過的安全層是否仍完整、auth 修復是否可被繞過、新升級內容是否零回歸、後台分析頁是否真的可用。**

---

## 二、總結論（Executive Summary）

**判定：GO-with-conditions（三輪中最穩固）。** 四大面向全數通過；六道靜態門控全綠；安全面**零 GO-阻斷缺陷**（proxy 遷移經查為乾淨改名、安全層完整、8 項既有修復全 INTACT）；內容面**零捏造／錯誤 DOI**（1271 unique 引用，0 標題不符 / 0 DOI 解不出 / 0 錯誤）；前台核心學習迴圈全可用。**本輪實測揪出並當場修復 1 個真實資料 bug**（跨科邊 ID 碰撞導致 2 條關聯邊被丟棄 + React duplicate-key），修後瀏覽器複驗 console 零新增 error。上線阻斷仍集中在**營運端接線**，非程式漏洞。

| 測試大項 | 首輪(07-02) | 二輪(07-04) | 三輪(07-07) | 變化 |
|---|---|---|---|---|
| 專案安全性 | 🟡 HIGH: SSR 未接線 | 🟢 SSR 已接線 | 🟢 proxy 遷移乾淨、auth-flash 不可繞過、8 修復 INTACT | ⬆ 更穩固 |
| 內容完整性 | 🟢 0 捏造（1162） | 🟢 0 標題不符（1162） | 🟢 0 標題不符 / 0 解不出（**1271**，v2 55%→**68.6%**） | ⬆ 覆蓋↑ |
| 實際瀏覽器操作 | 🟢 修 1 bug | 🟢 修死代碼 a11y | 🟢 修 1 資料 bug（跨科邊碰撞） | ＝ 維持 |
| 後台可使用性 | 🟡 假數據誤導 | 🟢 283 + Demo 橫幅 | 🟢 analytics 改真實專科分佈 + hang 修復 | ⬆ 改善 |

---

## 三、測試方法論（遵循正式 SOP，無跳過）

依 `~/.claude/CLAUDE.md` 第五節與 rule 11 全程執行：

1. **六道靜態門控**：`tsc --noEmit` → `vitest run` → `eslint` → `vitest --coverage` → `verify:citations` → `next build`（build 於瀏覽器實測後最後跑，避 `.next` 衝突）。
2. **平行深度稽核（2 個唯讀子代理）**：
   - **安全性**：聚焦兩個新 checkpoint（proxy 遷移、auth-flash）+ 全量安全面重驗 + 8 項 07-04 修復回歸核對，逐條要求可利用攻擊路徑或明確反證。
   - **內容完整性**：v2 覆蓋盤點、狀態機核對、捏造共識全科掃描、8 個新升級節點抽查全文、引用 shape 驗證。
3. **真實瀏覽器操作（主控親自）**：`next dev`(3001) + preview 工具，以最貼近人類的方式走完使用者鏈——實際填表登入、翻牌評分、多選作答提交、圖譜載入、後台閘門測試，DOM 快照 / console / network 三路存證。
4. **發現即修（rule 20）**：實測 bug 當場修復並以「delta 測試」重新驗證，再回跑 build 門控。
5. **產出**：本報告 + 刷新競爭評估表 + 更新工程藍圖／使用說明書。

---

## 四、測試結果詳述

### 4.1 專案安全性 🟢（mock 無可利用漏洞；上線需營運接線）

**結論：無 GO-阻斷安全缺陷。** 本輪重點是驗證兩個新 checkpoint 沒有破壞安全層——結果兩者皆乾淨。

**A. `middleware → proxy` 遷移＝已驗證的乾淨改名，安全中介層仍在所有受保護路由上運作。**
- git 記錄 `b3dbcd7` 為純改名（`src/{middleware.ts => proxy.ts}`），僅 9 行差異且全為註解／函式名 `middleware`→`proxy`；CSP、安全標頭、admin JWT 閘門、matcher、Supabase session 刷新與遷移前逐字相同。
- `src/proxy.ts` 匯出 Next 16 要求的具名 `export async function proxy(request)` + `export const config` matcher；舊 `src/middleware.ts` 已不存在。
- admin 閘門 fail-closed：任何 `/admin/*`（除 `/admin/login`）缺／壞 `vkt-admin-token` JWT → 導向登入；`verifyAdminCookie` 出錯或缺 secret 一律回 `false`。
- matcher 只排除靜態資產，仍覆蓋 `/admin/*`、`/api/*` 與所有頁面——**受保護路由未被誤排除**。
- **build 佐證**：本輪 `next build` 輸出 `ƒ Proxy (Middleware)` 且**不再有 07-02/07-04 的 `middleware→proxy` deprecation 警告**——遷移確實完成。
- **瀏覽器實測佐證**：未帶 admin cookie 存取 `/admin/analytics` → `fetch(redirect:'manual')` 回 `opaqueredirect`、瀏覽器導覽落在 `/admin/login`（管理員登入）。

**B. `sessionVerified` auth-flash 修復＝完整且無法經 localStorage 繞過。**
- `partialize` 只持久化 `user`（`auth-store.ts:186`），`sessionVerified` 永不寫入 localStorage → 攻擊者無法靠竄改 `vet-auth-storage` 強制其為 `true`。
- real 模式 rehydrate 後保持 `sessionVerified=false`，直到 Supabase `onAuthStateChange(INITIAL_SESSION)` 以真 session 覆寫；mock 模式立即設 true（持久化 user 即權威）。雙模式切分一致。
- 閘門套用於每個導向面（dashboard layout / login / register / landing）皆要求 `_hasHydrated && sessionVerified` 才信任 `user`；脆弱窗口期只渲染 loading，不閃現已登入內容。

**C. 8 項 07-04 安全修復全部 INTACT（附 file:line）**：開放重導白名單（多種繞過嘗試全部落回 `/admin/generate`）、API key timing-safe 比對、production 拒明文密碼、密碼長度 DoS 上限、rate-limit 降級不 fail-open、雙 CSP 上報（report-uri + Reporting API）、Supabase cookie production `Secure`、CSP nonce + 安全標頭全套。

**本輪安全發現（皆非阻斷）：**

| 級別 | 位置 | 問題 | 性質 |
|---|---|---|---|
| LOW | `lib/api/middleware.ts:25` | `Number(content-length ?? 0)` 對缺失／非數值標頭為 NaN/0 → body-size 守衛可被偽造 `Content-Length` 繞過（已文件化 fail-open；生產由 HTTP 層提供正確長度） | 既存、已知 |
| LOW | `scripts/audit-fullstack.ts:119` | dev 稽核腳本仍讀已刪除的 `src/middleware.ts` → 該檢查靜默 no-op（誤報 clean）。**僅 dev 工具，非執行期** | 遷移遺留 |
| INFO | `proxy.ts:97` | CSP `script-src` 保留 `'unsafe-eval'`（Mermaid 需要）；已由 `securityLevel:'strict'` + DOMPurify 緩解 | 既存、已文件化 |

> **安全判定**：mock 部署無可利用漏洞；proxy 遷移與 auth-flash 修復皆經對抗式查核確認完整。上線阻斷為營運端 `DEPLOY-CHECKLIST §1–4`（真 Auth / `sha256:` 密碼 / `VKT_JWT_SECRET` / `ADMIN_API_KEY` / Upstash / 金鑰輪替）。建議把 LOW#2 的 dev 腳本指向 `proxy.ts`（1 行）。

### 4.2 內容完整性 🟢

**結論：v2 內容 GO-ready，零捏造／錯誤 DOI。**

**引用驗證（`verify:citations` 全量對 Crossref）：**

| 指標 | 07-04 | 07-07 |
|---|---|---|
| Unique 引用 | 1162 | **1271** |
| VERIFIED_DOI | — | 720 |
| VERIFIED_BIBLIO | — | 202 |
| **SUSPECT_TITLE_MISMATCH** | 0 | **0** ✅ |
| **SUSPECT_DOI_UNRESOLVED** | 0 | **0** ✅ |
| **ERROR** | 1（Crossref 429） | **0** ✅ |
| SUSPECT_NOT_FOUND | 7 | **3** |
| MANUAL_TEXTBOOK / REGISTRY | — | 269 / 77 |

3 條 NOT_FOUND 皆為**真實、無 DOI 的老期刊／教科書引用**（Laflamme BCS 1997 Canine/Feline Practice、Frank LA JAVMA 2001、Gwaltney-Brant 巧克力中毒 Vet Med 2001），非捏造；DVM 簽核前建議人工回填或標註。

**v2 覆蓋盤點（283 節點）：194 v2 / 89 v1 → 68.6%**（自 07-02 的 156/283＝55.1%，**淨 +38 節點、+13.4pp**）。

| 專科 | 總數 | v2 | v1 | v2% |
|---|---|---|---|---|
| 心臟 CARDIO | 28 | 21 | 7 | 75.0% |
| 急診 ECC | 33 | 25 | 8 | 75.8% |
| 外科 SURG | 39 | 29 | 10 | 74.4% |
| 內科 IM | 57 | 41 | 16 | 71.9% |
| 臨床病理 CPATH | 22 | 15 | 7 | 68.2% |
| 皮膚 DERM | 35 | 23 | 12 | 65.7% |
| 腫瘤 ONCO | 34 | 20 | 14 | 58.8% |
| 神經 NEURO | 35 | 20 | 15 | 57.1% |
| **合計** | **283** | **194** | **89** | **68.6%** |

**8 個新升級 v2 節點全文抽查（皆 CLEAN）**：NEURO-L3-010 FCE、DERM-L3-013 皮膚淋巴瘤、ONCO-L3-012 組織球肉瘤、SURG-L3-006 會陰疝氣、ECC-L3-012 多發性創傷、NEURO-L3-009 Wobbler、DERM-L3-010 天疱瘡、CARDIO-L2-001 MMVD 機轉——皆 8 段（或 concept 機轉節點的較短 rubric）結構齊全、引用皆 DOI-anchored、免疫表型／分期正確、且每節點在 `relevance` 內就地記錄了 v1→v2 的引用修正（對抗式審查確有運作的強訊號）。

**非阻斷內容債（需 DVM／巡航處理，非本輪阻斷）：**
- **3 條幻影「Moore 2020 ACVIM consensus」引用**仍存在，但**僅在未升級的 v1 神經節點**（`neuro/contents.ts` 的 NEURO-L2-004:2556、NEURO-L5-002:3339、NEURO-L5-003:3491），皆無 DOI。這是巡航正在系統性移除的同一種幻覺；真實引用為 Olby 2022 `10.1111/jvim.16480`（升級版節點已正確引用）。**v2 層零此問題。**
- **節點狀態機語意需澄清（已於藍圖修正）**：`NodeContent` 無 `status` 欄位（用 `is_current: true`）；`status` 在 `KnowledgeNode`，且 **283 節點皆為 `status:'published'`**（seed 原始預設，非巡航變更）。v1→v2 追蹤靠 `content.version`，非 status 轉移。**若前端把 `published` 當「對使用者可見」，則 89 個 v1 節點（含上述 3 條幻影引用）已可見**——建議在 v1 層被視為正式對外前先掃除或閘門化。
- `node.version` 陳舊：281 節點仍 `node.version:1`（僅 IM-L4-006/007 為 2），權威 v2 追蹤是 `content.version`；任何讀 `node.version` 的程式會低估 v2，屬內部一致性、非顯示缺陷。

### 4.3 實際瀏覽器操作 🟢

以真實 `next dev`(3001) + preview 親自走完使用者鏈。**全前台頁面可用，修復後 console 零新增 error。**

| 頁面 | 路徑 | 實測結果 |
|---|---|---|
| 登陸頁 | `/` | ✅ Hero + 3 特色卡 + CTA |
| 登入 | `/login` | ✅ 表單驗證（email 格式、密碼 ≥6、in-flight guard）；登入後導 `/home`，`WelcomeOnboarding` 如期彈出 |
| 首頁 | `/home` | ✅ 統計卡（5 已完成 / Lv.2 / 930 XP / 連續 1 天）、複習提醒卡（正確 gate 於 completedCount>0）、進度條 5/283、專科總覽加總＝283 |
| 知識圖譜 | `/graph` | ✅ 先選專科；「綜覽全圖」載入 **283 節點**；邊資料層已修（見 §五），arrowhead marker 已註冊；**headless 無法繪製 SVG 邊、真桌面瀏覽器簽核**（已知限制） |
| 節點詳情 | `/nodes/[id]` | ✅ 點圖譜節點導向 `/nodes/CARDIO-L0-001`；摘要／學習目標／詳細內容／重點整理／臨床珍珠／常見錯誤／參考文獻齊全，台灣在地化 |
| 每日複習 | `/review` | ✅ FSRS：10 題待複習（依完成節點合成）→ 顯示答案 → **4 級評分（忘記/困難/良好/簡單 + 間隔預測）**→ 評「良好」後 1/10→2/10、今日已複習 0→1 |
| 病例挑戰 | `/cases` | ✅ **103 病例** + 專科/難度篩選；開 CASE-CARDIO-001（老年 CKCS 呼吸困難）→ 多選作答「提交答案」→ **引擎評分「✗ 需要改進」+ 臨床回饋 + 學習重點**，互動迴圈完整 |
| 病例進度條 a11y | `/cases/[caseId]` | ✅ `<ol>` + 每步 `aria-current="step"` + `aria-label="步驟 N …（目前/未開始）"`，非顏色狀態線索——07-04 a11y 修復 INTACT |
| 學習路徑 | `/paths` | ✅ 47 路徑 + 篩選；PATH-CARDIO-FOUNDATION 詳情：12 節點連結 + 進度 42% + 里程碑通過條件 |
| 成就 | `/achievements` | ✅ 2/19 已解鎖，分類徽章（學習進度/知識精熟/診斷技能）+ 鎖定狀態 |
| 個人資料 | `/profile` | ✅ 等級/XP（Lv.2 見習獸醫 430/700）、專科分佈、帳號資訊、**危險區「刪除我的帳號」**（對應隱私政策 §六） |

- **console**：整場唯一殘留為修復前的 4 筆 duplicate-key（見 §五），修後 delta 測試證實零新增。
- **截圖**：全 283 節點 React Flow 畫布 rasterize 在 headless 逾時（已知 preview 限制，DOM 283 節點正常渲染）；改以 DOM 快照 / console / network 存證。

### 4.4 後台可使用性 🟢（外殼 + 認證可上線；動作頁維持已標示 Demo）

| 後台面 | 實測結果 |
|---|---|
| 權限閘門（proxy JWT） | ✅ 未帶 admin cookie 存取 `/admin/*` → `opaqueredirect` → 落在 `/admin/login` |
| 登入端點負向 | ✅ 錯誤密碼 POST `/api/admin/login` → **401 `密碼錯誤`**；端點含 200ms timing 地板、256 字元上限、`5 次/15 分鐘` rate-limit、log-injection 消毒 |
| `/admin/analytics` | ✅（原始碼驗證）Demo 橫幅在；**總節點數讀真實 `TOTAL_KNOWLEDGE_NODES`=283**；新增**各專科節點數分佈讀真實 `NODES_BY_SPECIALTY`**（57/39/35/35/34/33/28/22，加總 283，有 drift-guard 測試）；無 async fetch＝無 hang；`admin/loading.tsx` **已移除**（hang 修復確認） |
| `/admin/generate` | ✅ Demo 橫幅「示範模式 — 尚未接上 AI 生成後端；產出為範例、不寫入資料庫」 |
| `/admin/review` | ✅ Demo 橫幅「審核佇列尚未接上資料源，目前為空；核准/退回僅暫存前端」 |

> **後台判定**：認證流程（閘門 + 負向）已瀏覽器實測通過；三動作頁皆有誠實 Demo 標示、analytics 已改真實計數與專科分佈、loading hang 已修。**唯一未在瀏覽器完成的是「以真 admin 憑證登入後的畫面渲染」——因安全分類器（正確地）阻擋在對話中實體化本機 admin 密碼**；此步已於 07-04 以真登入驗證過全部橫幅與 283，且本輪唯一變更（analytics 專科分佈 + hang 修復）已於原始碼層驗證。**建議上線前由營運者（持密碼）親自登入做一次 admin 冒煙測試。** 若要「真正可用」，generate/review 仍需接 `/api/generate/*` + 持久層。

---

## 五、本輪實測發現並修復的 Bug

**Bug：跨科邊 ID 碰撞 → 2 條關聯邊被丟棄 + React duplicate-key**（實測於 `/graph` 綜覽全圖由 console 揪出）

- **現象**：console 反覆 `Encountered two children with the same key … CROSS-IM-ONCO-001` / `CROSS-IM-DERM-001`。
- **根因**：`src/data/seed/cross-specialty-edges.ts` 內 `CROSS-IM-ONCO-001` 與 `CROSS-IM-DERM-001` **各被定義兩次**——2026-06-15 新增節點時，新邊沿用了既有 ID 而非遞增序號。兩對其實是**不同的關聯**：
  - `CROSS-IM-ONCO-001`：（IMHA→淋巴瘤）vs（疫苗→貓注射部位肉瘤 FISS）
  - `CROSS-IM-DERM-001`：（Cushing→膿皮症）vs（抗生素管理→MRSP）
- **後果**：React 以相同 key 去重／覆蓋 → **每對其中一條合法跨科關聯邊被靜默丟棄**，且違反「console 零錯誤」門控。
- **修復**：把兩條 2026-06-15 新增邊改為未使用的唯一 ID（`CROSS-IM-ONCO-003`、`CROSS-IM-DERM-005`），保留原 `-001` 給較舊的邊。2 條關聯邊恢復。
- **驗證（delta 測試，排除 console buffer 語意干擾）**：硬重載後於「未渲染全圖」階段測得 buffer 殘留 4 筆舊 error（證明 buffer 跨 reload 持存）；再渲染全 283 節點圖，error 數維持 4（引用的仍是舊 `-001` 碰撞）＝**新渲染零新增 duplicate-key** → 修復生效。`next build` 亦通過。
- **狀態**：依巡航模式（使用者自審、不自動 commit），此修改**已落地工作樹、未 commit**，待簽核。

檔案：`src/data/seed/cross-specialty-edges.ts`（+2 行改 ID）。

---

## 六、六道靜態品質門控結果

| 門控 | 結果 |
|---|---|
| `tsc --noEmit` | **0 errors** |
| `vitest run` | **848 tests passed / 56 files**（自 07-04 的 847，+1 為 content-stats 專科分佈 drift-guard） |
| `eslint` | **0 errors、20 warnings**（皆 `any`／console，僅測試檔與既有豁免，CLAUDE.md 容許） |
| `vitest --coverage`（istanbul） | Stmts **71.19%** / Branch **62.5%** / Func **70.27%** / Lines **72.22%**——**四項全高於門檻**（64/54/61/65） |
| `verify:citations` | **1271 unique；0 標題不符 / 0 DOI 解不出 / 0 錯誤 / 3 NOT_FOUND（皆真實無 DOI）** |
| `next build` | **成功（exit 0）**；38 app 路由 + API 全在；`ƒ Proxy (Middleware)` 已辨識、**無 deprecation 警告**；無 Tailwind/CJK 掃描崩潰 |

---

## 七、線上專案競爭評估表（第三輪刷新）

定位不變：**繁中／台灣在地化、以「知識圖譜」為核心、圖譜×病例×FSRS×遊戲化四合一整合、引用經 Crossref 驗證**的小動物臨床學習平台——仍是市場空白區。相對 07-04，**內容廣度**因 v2 覆蓋 55%→68.6% 微升，**平台成熟度**因三輪稽核 + proxy/auth 技術債清償 + 848 測試 + 乾淨 build 再上調。

評分 1–5（5 最佳）：

| 維度 | VetKnowledgeTree | VIN | Clinician's Brief | VetGirl (CE) | Zuku/VetPrep（考照） | Anki+社群 | Osmosis（人醫參照） |
|---|:--:|:--:|:--:|:--:|:--:|:--:|:--:|
| 繁中／台灣在地化 | **5** | 1 | 1 | 1 | 1 | 2 | 1 |
| 內容正確性/引用可驗證 | **4** | 5 | 5 | 4 | 3 | 2 | 4 |
| 知識圖譜視覺化 | **5** | 1 | 1 | 1 | 1 | 1 | 3 |
| 互動病例模擬 | **4** | 2 | 2 | 2 | 2 | 1 | 3 |
| 間隔重複（FSRS） | **5** | 1 | 1 | 1 | 3 | 5 | 4 |
| 遊戲化（XP/等級/成就） | **5** | 1 | 1 | 2 | 3 | 2 | 3 |
| 內容廣度/覆蓋 | **2→3**（v2 68.6%） | 5 | 4 | 4 | 4 | 4 | 4 |
| 取得門檻/價格 | **5** | 2 | 4 | 2 | 2 | 5 | 3 |
| 平台成熟度/穩定性 | **3→4**（三輪稽核 + 技術債清償） | 5 | 5 | 4 | 4 | 4 | 5 |
| 社群/更新頻率 | **2** | 5 | 5 | 4 | 3 | 4 | 4 |

**解讀：**
- **護城河（不變）**：繁中在地化 × 知識圖譜 × 四合一學習迴圈 × 可驗證引用管線——整合成單一台灣小動物臨床學習迴圈是唯一。
- **主要落差**：內容廣度（283 節點 vs VIN 級全科，但 v2 精通級深度已達 68.6%）、社群/更新（單一來源）——**時間與營運問題，非架構問題**。
- **戰略建議**：以「深度優先、台灣小動物」錨定，不與 VIN 比廣度；以 v2 精通級 + 互動病例作差異化行銷；上線後補齊社群回饋迴圈。

---

## 八、上線前待辦（更新後）

**P0（阻斷，營運端 — 程式已就緒）**
1. 建 Supabase 專案、跑 migrations + auth hook/trigger + bootstrap admin（`DEPLOY-CHECKLIST §1`）。設 env → auth-store 自動切真實模式。
2. `DEPLOY-CHECKLIST §3–4`：`sha256:` admin 密碼、`VKT_JWT_SECRET`(≥32)、`ADMIN_API_KEY`、Upstash。
3. **輪替 `.env.local` 全部 live secrets**。
4. 營運者（持密碼）親自 admin 冒煙測試一輪（本輪因安全分類器阻擋憑證實體化未在瀏覽器完成）。
5. generate/review 若要「真正可用」需接 `/api/generate/*` + 持久層（否則維持已標示 Demo）。

**P1（建議）**
6. **簽核本輪跨科邊 ID 修復**（`cross-specialty-edges.ts`，已落地未 commit）。
7. 真桌面瀏覽器確認 `/graph` 各專科節點箭頭連線（headless 測不出）。
8. dev 稽核腳本 `scripts/audit-fullstack.ts:119` 指向 `proxy.ts`（1 行，遷移遺留）。

**P2（非阻斷）**
9. 掃除 3 條 v1 神經節點的幻影「Moore 2020 ACVIM」引用（改 Olby 2022 `10.1111/jvim.16480`），或在 v1 層對外前閘門化。
10. 回填 3 條 NOT_FOUND 的 DOI-less 引用標註後再 DVM 簽核。
11. 續攻 89 個 v1 → v2（NEURO/ONCO 覆蓋最低，優先）。
12. 釐清 `status:'published'` 語意 vs v1 對使用者可見性；同步 `node.version`。

---

## 附錄：測試環境與產物

- 分支 `main`（領先 origin 57 commits）；Next.js 16.2.2（Turbopack）、React 19.2.3、TypeScript strict、Tailwind ≥4.3.0。
- 本機 Mock 模式：`.env.local` 無 `NEXT_PUBLIC_SUPABASE_URL` → seed 283 節點；`ANTHROPIC_API_KEY` 有設但後台生成頁不呼叫。
- 稽核產物：`reports/citation-audit-2026-07-07T08-48-33-544Z.{md,json}`。
- 本輪未提交變更（待簽核）：`src/data/seed/cross-specialty-edges.ts`（跨科邊 ID 去碰撞）。
