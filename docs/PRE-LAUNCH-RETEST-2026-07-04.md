# 上線前複測報告（第二輪總體檢） — VetKnowledgeTree

> 複測日期：2026-07-04
> 前次基線：`docs/PRE-LAUNCH-ASSESSMENT-2026-07-02.md`（第一輪）
> 範圍：專案安全性、內容完整性、實際瀏覽器操作、後台可使用性 —— 針對 07-02 以來的**大量落地變更**重新驗證
> 方法：指揮官模式 + **50 個代理的對抗式複審 Workflow**（驗證修復 → 獵新問題 → 每個發現 3 名反駁者表決）+ 主控親自瀏覽器複測
> 狀態：本機 Mock 模式（seed）；P0 真實 Auth **程式已接線、待營運端啟用**

---

## 一、為什麼要複測

自 07-02 第一輪後，程式樹發生**重大變更**，第一輪的多項結論已過時：
- 5 輪 Claude↔Codex 對抗式修復（10 項）+ RelatedNodes 去重 + 4 個公開 POST 的 body-size 硬化。
- **P0 上線阻斷項工程落地**：Supabase SSR session 接線（`updateSession` + cookie-aware client）、雙模式 auth-store、後台 Demo 標示、`createAnonServerClient` 分離。
- 測試 832 → 847；新增 `@supabase/ssr` 依賴。

第一輪的 HIGH「Supabase SSR 未接線」已修；後台假數據已修並標示 Demo。**因此需要重測以確認：既有修復未回歸、且新代碼未引入新缺陷。**

---

## 二、總結論

**判定：GO-with-conditions（較第一輪更穩固）。** 22 項既有修復**全部 INTACT（0 回歸）**；內容零真實缺陷；本輪對抗式複審在**新 P0 代碼**中揪出 8 個真實缺陷（6 個當場修復、2 個具明確理由延後）；瀏覽器複測另揪出並修復 1 個「修在死代碼上」的 a11y 漏修。上線阻斷仍是**營運端接線**（Supabase 專案 / 環境變數 / 金鑰輪替 / Upstash），非程式安全漏洞。

| 測試大項 | 第一輪(07-02) | 本輪(07-04) | 變化 |
|---|---|---|---|
| 專案安全性 | 🟡 HIGH: SSR 未接線 | 🟢 SSR 已接線；新揪 8 缺陷 6 修 2 延 | ⬆ 改善 |
| 內容完整性 | 🟢 0 捏造引用 | 🟢 0 標題不符 / 0 DOI 解不出 | ＝ 維持 |
| 實際瀏覽器操作 | 🟢 全頁可用 | 🟢 全頁可用 + 揪修死代碼 a11y 漏修 | ⬆ 改善 |
| 後台可使用性 | 🟡 假數據誤導 | 🟢 283 + 三頁 Demo 橫幅 | ⬆ 改善 |

---

## 三、方法論（遵循 SOP，無跳過）

1. **靜態門控**：tsc / vitest / eslint 先跑（build 於瀏覽器測後補跑，避 `.next` 衝突）。
2. **內容重驗**：`npm run verify:citations` 全量重跑（1162 unique，Crossref）。
3. **對抗式複審 Workflow（50 代理）**：4 代理逐條驗證 22 項落地修復是否 INTACT → 4 視角獵人（security-auth / runtime-correctness / test-gaps / ux-a11y）在**變更面**找新問題 → 每個新發現交 3 名反駁者（reproduce / mitigated / severity 三種鏡頭）表決，多數不反駁才算 CONFIRMED。
4. **瀏覽器複測**：主控親自登入（含 admin JWT flow）、DOM 驗證每個新修復的實際渲染。
5. **發現即修 + 重跑門控**。

---

## 四、複審結果

### 4.1 既有修復驗證：22 / 22 全部 INTACT（0 回歸）

4 個驗證代理逐條核對第一輪 + P0 的落地修復，全部確認完好（附 file:line 證據）：a11y（CaseChallenge ol/li/aria-current）、效能 selector、paths error 分支、KnowledgeGraph cast 清除、RelatedNodes 去重 + 7 測試、body-cap helper 四路一致、admin login json 防護、csp-report 常數、node canonical、analytics 283+橫幅、SSR updateSession、middleware 接線、雙模式 auth-store、supabase.test mock。**無 PARTIAL、無 REGRESSED。**

### 4.2 對抗式獵新：14 發現 → 8 CONFIRMED（全在新 P0 代碼）

複審在本 session 新寫的 P0 / 硬化代碼中揪出真實缺陷（這正是對抗式複審的價值——查自己剛寫的東西）：

| 級別 | 發現 | 位置 | 處置 |
|---|---|---|---|
| **HIGH** | 真實模式 `register()` 遇 Email 確認：`signUp` 回 user 但 session=null → 假成功導向 /home → 被 layout 靜默踢回 /login 死路 | `stores/auth-store.ts` | ✅ **已修**：偵測 `user && !session` → 明確提示「驗證信已寄出，請收信」、不設 user |
| **MEDIUM×2** | 真實部署缺 `SUPABASE_SERVICE_ROLE_KEY` 時，`DELETE /api/account` 用 mock proxy → `.from().delete().eq()` 無法串接 → 未捕捉 TypeError → 500 | `api/account/route.ts` | ✅ **已修**：加 guard（有 URL+anon 但缺 service key → 回 503 可用性訊息，不崩） |
| MEDIUM | 持久化 localStorage user 在 session 驗證前被信任 → 過期 session 有「已登入 UI 閃現→彈回」 | `stores/auth-store.ts` | ⏳ **延後**（見 §六，需 sessionVerified 跨層改動、真實模式無法本機測） |
| MEDIUM | `enforceJsonBodyLimit` 零單元測試（邊界 / NaN fail-open 未釘住） | `lib/api/middleware.ts` | ✅ **已修**：新增 5 個單元測試（含 NaN fail-open） |
| MEDIUM | 四個硬化 POST 的 413 路徑在整合測試中未涵蓋 | 4 個路由測試 | ⚠️ **改以單元覆蓋**（見 §六，整合層因 forbidden header 不可行） |
| LOW | Supabase session cookie 未明設 `Secure`（@supabase/ssr 0.12 預設、未傳 cookieOptions） | 3 個 SSR client | ✅ **已修**：三處加 `cookieOptions: { secure: production }` |
| LOW | Next 16 已棄用 `middleware` 慣例（建議遷 `proxy`） | `middleware.ts` | ⏳ **延後**（見 §六，結構性 rename、僅棄用警告非 bug） |

### 4.3 瀏覽器複測揪出的漏修（第一輪 R1 修錯對象）

**關鍵發現**：第一輪 R1 的 a11y 修復落在 `components/features/CaseChallenge.tsx`，但 `grep` 證實**該元件全專案零引用（死代碼）**。使用者實際看到的病例進度條是 `cases/[caseId]/page.tsx:163` 的**內嵌實作**，仍是原本「純顏色表達狀態、無 `aria-current`、無清單語意」的缺陷。→ **本輪當場修復真正的元件**：改 `<ol aria-label>` / `<li aria-current>` / 完成步驟顯示 ✓✗ 非顏色線索，並瀏覽器驗證（`aria-label="步驟 1 病史收集（目前）"`、`aria-current="step"`）。

其餘瀏覽器驗證全過：mock 登入（admin role 正確）、節點頁 canonical、RelatedNodes 6 連結 0 重複、analytics 顯示 283 + Demo 橫幅、generate/review Demo 橫幅、全程 console 零錯誤。

### 4.4 內容完整性重驗

`verify:citations` 全量：**1162 unique，0 SUSPECT_TITLE_MISMATCH，0 SUSPECT_DOI_UNRESOLVED**。7 SUSPECT_NOT_FOUND（皆已知 DOI-less 真實論文，較上輪 8 少 1）。**1 ERROR = Crossref 429 速率限制**（IM-L3-022 的 2020 AAFP 貓反轉錄病毒指南，DOI `10.1177/1098612X19895940` 為真實有效）＝暫時性網路錯誤，非內容問題。內容零回歸。

---

## 五、靜態門控（複測後）

| 門控 | 結果 |
|---|---|
| `tsc --noEmit` | 0 errors |
| `vitest run` | **847 tests passed / 56 files**（+5 enforceJsonBodyLimit 單元測試） |
| `eslint` | 0 errors、**20 warnings**（清掉 1 個 unused eslint-disable，21→20） |
| `next build` | 成功（24.3s），全路由在 |

---

## 六、延後項目與理由（誠實揭露）

1. **持久化 user auth-flash（MEDIUM）**：正解是加 `sessionVerified` 旗標並讓 dashboard layout / login 在真實模式等待 `INITIAL_SESSION` 才判定。此改動跨 store + layout + login 三處、且只在真實 Supabase 模式重現（本機 mock 無法驗證），上線前貿然改動 auth 閘門風險高於效益 → 列為 **P1**，附上建議做法。UX 為「閃現後自動修正」，非阻斷。
2. **413 整合測試（MEDIUM→改單元覆蓋）**：`content-length` 是 fetch 規範的 *forbidden header*，JS 建構的 `NextRequest` 會靜默丟棄，故整合層無法可靠觸發 413（生產環境由 HTTP 層提供 content-length，守衛正常運作）。→ 已改以 `enforceJsonBodyLimit` 的 **5 個單元測試**直接覆蓋守衛邏輯（含邊界 + NaN fail-open），四路由呼叫同一 helper 已由驗證代理確認。
3. **Next 16 `middleware`→`proxy`（LOW）**：僅棄用警告（build 可過），rename 為結構性變更、可能牽動安全 middleware，列為獨立任務。

---

## 七、線上專案競爭評估表（複測刷新）

定位不變：**繁中／台灣在地化、知識圖譜為核心、圖譜×病例×FSRS×遊戲化四合一、引用可驗證**的小動物臨床學習平台——仍是市場空白區。相對 07-02，**平台成熟度/穩定性** 因 P0 真實 Auth 程式接線 + 兩輪對抗式稽核 + 847 測試而上調。

評分 1–5：

| 維度 | VetKnowledgeTree | VIN | Clinician's Brief | VetGirl | Zuku/VetPrep | Anki+社群 | Osmosis(人醫) |
|---|:--:|:--:|:--:|:--:|:--:|:--:|:--:|
| 繁中／台灣在地化 | **5** | 1 | 1 | 1 | 1 | 2 | 1 |
| 內容正確性/引用可驗證 | **4** | 5 | 5 | 4 | 3 | 2 | 4 |
| 知識圖譜視覺化 | **5** | 1 | 1 | 1 | 1 | 1 | 3 |
| 互動病例模擬 | **4** | 2 | 2 | 2 | 2 | 1 | 3 |
| 間隔重複（FSRS） | **5** | 1 | 1 | 1 | 3 | 5 | 4 |
| 遊戲化 | **5** | 1 | 1 | 2 | 3 | 2 | 3 |
| 內容廣度/覆蓋 | **2** | 5 | 4 | 4 | 4 | 4 | 4 |
| 取得門檻/價格 | **5** | 2 | 4 | 2 | 2 | 5 | 3 |
| 平台成熟度/穩定性 | **3**（↑ 自 2） | 5 | 5 | 4 | 4 | 4 | 5 |
| 社群/更新頻率 | **2** | 5 | 5 | 4 | 3 | 4 | 4 |

護城河（繁中×圖譜×四合一×可驗證引用）不變；落差仍在廣度與社群——時間/營運問題，非架構。

---

## 八、上線前待辦（更新後）

**P0（阻斷，營運端 — 程式已就緒）**
1. 建 Supabase 專案、跑 migrations + auth hook/trigger + bootstrap admin（`DEPLOY-CHECKLIST.md §1`）。設 env → auth-store 自動切真實模式。
2. `DEPLOY-CHECKLIST §3–4`：`sha256:` admin 密碼、`VKT_JWT_SECRET`、`ADMIN_API_KEY`、Upstash。
3. **輪替 `.env.local` 全部 live secrets**（`§3.5`）。
4. generate/review 若要「真正可用」需接 `/api/generate/*` + 持久層（否則維持已標示的 Demo）。

**P1（本輪延後 / 建議）**
5. 持久化 user auth-flash：加 `sessionVerified` 旗標。
6. `middleware`→`proxy` 遷移（Next 16 棄用）。
7. 真桌面瀏覽器確認 `/graph` 各專科節點箭頭連線（headless 測不出）。

**P2**
8. 回填 2 條 v2 NOT_FOUND DOI（CARDIO-L3-001、ECC-L3-007）後再 DVM 簽核。
9. 續攻 127 個 v1 → v2。
10. 移除死代碼 `CaseChallenge.tsx`（未被引用；a11y 已改修在真正的 `cases/[caseId]/page.tsx`）。

---

## 附錄：本輪變更檔案（未提交，待簽核）

```
src/app/(dashboard)/cases/[caseId]/page.tsx   (a11y：真正的病例進度條 ol/li/aria-current/✓✗)
src/stores/auth-store.ts                        (register email-confirm 提示)
src/app/api/account/route.ts                    (缺 service key → 503 guard)
src/lib/supabase/middleware.ts                  (cookie Secure)
src/lib/supabase/server.ts                      (cookie Secure)
src/lib/supabase/client.ts                      (cookie Secure)
src/tests/unit/api/middleware.test.ts           (+5 enforceJsonBodyLimit 測試)
src/components/features/RelatedNodes.tsx        (移除多餘 as Layer cast + import)
src/lib/utils/graph-algorithms.ts               (移除 unused eslint-disable)
```
門控：tsc 0 / lint 0 err（20 warn）/ 847 tests / build ✓。
