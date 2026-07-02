# 上線前總體檢評測報告 — VetKnowledgeTree

> 評測日期：2026-07-02
> 評測範圍：專案安全性、內容完整性、實際瀏覽器操作、後台可使用性
> 執行方式：指揮官模式（1 主控 + 3 平行稽核子代理 + 真實瀏覽器操作）
> 專案狀態：本機 Mock 模式（無 Supabase、以 274/283 節點 seed 運行）
> 對應規範：`~/.claude/CLAUDE.md`（自我驗證 SOP）、`專案/CLAUDE.md` rule 11（build 硬性門控）

---

## 一、總結論（Executive Summary）

**判定：有條件 GO（GO-with-conditions）。** 專案在**程式品質、內容正確性、前台使用者體驗**三個面向已達可上線水準；核心學習迴圈（知識圖譜 → 節點 → 間隔複習 → 病例 → 學習路徑 → 成就）在真實瀏覽器操作下**全數可用、零新增 console error**。上線前的**阻斷項全部集中在「營運接線」而非「程式安全漏洞」**：真實 Supabase Auth 尚未接上（目前為前端 mock 角色）、後台三個「動作型」頁面（生成／審核／分析）為**空殼 demo（不呼叫任何後端）**。內容面**無捏造引用類的上線阻斷**（1,162 條 unique 引用，0 標題不符 / 0 DOI 解不出 / 0 錯誤）。

本次總體檢**實測中發現並當場修復 1 個真實前台 bug**（`RelatedNodes` React duplicate-key），並依 SOP 重跑 build 門控——**build 門控攔截到一個 `tsc --noEmit` 漏掉的型別錯誤**，已二次修復並重新驗證通過（見 §六）。

| 測試大項 | 判定 | 一句話結論 |
|---|---|---|
| 專案安全性 | 🟢 PASS（mock）／🟡 上線需接線 | 防禦縱深成熟，mock 模式無可利用漏洞；上線前須接 Supabase SSR session + 退役 mock auth |
| 內容完整性 | 🟢 PASS | 0 捏造引用、0 stats drift；283 節點／156 v2（55%）／103 病例 |
| 實際瀏覽器操作 | 🟢 PASS | 10 個前台頁面全可用；FSRS 複習/互動病例/學習路徑實測通過；修掉 1 bug |
| 後台可使用性 | 🟡 CONDITIONAL | 登入/登出/權限閘門正常；但生成/審核/分析為 demo，0 後端呼叫 |

---

## 二、測試方法論（遵循正式 SOP，無跳過）

依 `CLAUDE.md` 第五節「修改後自我驗證」與 rule 11「build 硬性門控」全程執行：

1. **靜態品質門控**（4 道，序列執行、log 落地）：`tsc --noEmit` → `vitest run` → `eslint` → `next build`。
2. **平行深度稽核**（3 個唯讀子代理，同時進行）：安全性、內容完整性、後台可使用性（code-level）。
3. **真實瀏覽器操作**（主控親自執行）：`next dev` + preview 工具，以「最貼近人類思考」的方式走完使用者操作鏈與後台操作鏈——實際填表、點擊、翻牌、評分、登入、觸發生成、登出，並以 DOM 快照／console／network 三路存證。
4. **發現即修**（rule 20）：實測發現的 bug 當場修復並重新驗證，再回跑 build 門控。
5. **產出**：本報告 + 競爭評估表 + 更新工程藍圖/使用說明書。

---

## 三、測試結果詳述

### 3.1 專案安全性 🟢（mock）／🟡（上線接線）

**結論：防禦縱深（defense-in-depth）成熟，目前 mock 部署下無任何可利用的程式層漏洞。** 阻斷項均為「營運者需完成的接線」而非破損的安全機制。

**已正確實作的安全控制（強項）：**
- **管理員密碼處理**：production 拒絕明文比對（`admin-auth.ts:116`）、`sha256:` 以 `crypto.timingSafeEqual` 比對、多管理員走訪不短路（防 timing leak）。
- **JWT session**：`jose` HS256 + issuer/audience 驗證、2 小時到期、`VKT_JWT_SECRET < 32` 字元直接 fail。
- **Cookie 旗標**：`httpOnly` + production `secure` + `sameSite: 'strict'`。
- **登入路由硬化**：256 字元密碼上限（防 CPU-DoS）、~200ms 回應地板（timing 混淆）、log-injection 消毒、`5 次 / 15 分鐘` rate-limit。
- **CSP / headers**：per-request nonce + `strict-dynamic`（script-src 無 `unsafe-inline`）、`frame-ancestors 'none'`、COOP/COEP/CORP、HSTS preload、`X-Frame-Options: DENY`、`poweredByHeader: false`。
- **XSS 縱深防禦**：`parseContentMarkers` 先 HTML-escape `<>&"'` 再插值；`rehype-raw` 嚴格置於 `rehype-sanitize` 之後（收緊 schema、排除 `javascript:`）；Mermaid `securityLevel: 'strict'` + DOMPurify 二次消毒。
- **Open-redirect**：登入後導向採白名單 regex `^\/admin\/[A-Za-z0-9/_-]{0,128}$` + 第二字元守衛。
- **不可逆端點 CSRF**：`DELETE /api/account` 強制 `Sec-Fetch-Site`/Origin/Referer 同源檢查、fail-closed。
- **錯誤衛生**：`reportError` 不回傳上游 `error.message`（防洩漏 Anthropic request ID）。
- **Secrets**：`src` 無硬編碼金鑰；`.gitignore` 正確排除 `.env*`，`git ls-files` 確認僅 `.env.local.example` 進版控。

**上線阻斷項 / 風險（依嚴重度）：**

| 級別 | 位置 | 問題 | 建議 |
|---|---|---|---|
| **HIGH** | `lib/supabase/middleware.ts` + `middleware.ts:34` + `lib/supabase/server.ts:45` | Supabase session 刷新 `updateSession` 為 stub 且從未被 root middleware 呼叫；`createServerClient()` 用非 SSR 的 `createClient`（無 cookie 綁定）→ 一旦接上真 Supabase，`/api/account` 的 `auth.getUser()` 讀不到 session（fail-closed 或誤 fail-open） | 用 `@supabase/ssr` 的 `createServerClient` + cookie handlers 實作 `updateSession` 並在 middleware 呼叫；切換 server client 為 cookie-aware |
| **MEDIUM** | `stores/auth-store.ts:33-63` | 前端決定 `role: 'admin'`（`email === 'admin@vetknowledgetree.com'`），僅靠 `NEXT_PUBLIC_SUPABASE_URL` 不存在來 gate | mock 模式安全（真權限仍由 JWT cookie 獨立驗證），但**上線前必須以 `supabase.auth.signInWithPassword` + 伺服器端 role 取代** |
| **LOW** | `api/csp-report`、`api/progress`、`api/review` | 公開 POST 端點 `request.json()` 無 body 大小上限 | 加 `Content-Length`/body 上限 |
| **LOW** | `lib/api/middleware.ts:74`（`extractClientIp`） | rate-limit 以可偽造的 `x-forwarded-for` 為 key（在非 Vercel 反代上可繞過） | 部署文件釘死信任代理行為（Vercel 上正確） |
| **INFO** | `lib/security/csrf.ts:49` | 冗餘三元式 `? false : false`（fail-closed 正確但可簡化） | 簡化為 `return false;` |
| **營運衛生** | `.env.local`（工作目錄） | 內含真實 live secrets（Anthropic key、Supabase service-role key、admin 密碼、JWT secret、Vercel OIDC token）。**已 gitignore、未進版控**，但仍存在於工作樹 | 上線前輪替（rotate）所有金鑰；勿於任何測試指引外流本機密碼 |

> **安全面判定：mock 部署無可利用漏洞。上線前須（工程）接上 Supabase SSR session、退役 mock auth store；（營運）完成 `DEPLOY-CHECKLIST.md` §1–4（真 Auth、`sha256:` 密碼、`VKT_JWT_SECRET`、`ADMIN_API_KEY`、Upstash）。**

### 3.2 內容完整性 🟢

**結論：無「捏造引用／錯誤 DOI」類的上線阻斷。** 這是本專案最高原則（100% 正確性），實測全數達標。

**引用驗證（`npm run verify:citations` 完整跑完 8 專科）：**

| 指標 | 數值 |
|---|---|
| 引用出現總數 | 1,443 |
| Unique 引用 | 1,162 |
| VERIFIED_DOI | 521 |
| VERIFIED_BIBLIO | 282 |
| 自動驗證覆蓋 | 65.4%（944 條） |
| MANUAL_TEXTBOOK / REGISTRY | 271 / 80（低幻覺風險） |
| **SUSPECT_TITLE_MISMATCH** | **0** ✅ |
| **SUSPECT_DOI_UNRESOLVED** | **0** ✅ |
| **ERROR** | **0** ✅ |
| SUSPECT_NOT_FOUND | 8 ⚠️（無 DOI 的真實老論文書目 soft-miss，非捏造） |

8 條 NOT_FOUND 皆為**真實、知名論文**（Borgarelli DELAY、De Risio FCE、Nabity SDMA/IRIS、Nguyen tumor-staging 等），僅因無 DOI 未通過 Crossref 60% 標題比對；6 條為 v1（隨常規升級回填），2 條為 v2 已知債（CARDIO-L3-001、ECC-L3-007），建議 DVM 簽核「published」前人工回填 DOI。

**節點盤點（`node-inventory.ts`）：283 節點 / 156 v2 / 127 v1 → v2 覆蓋 55.1%。**

| 專科 | 總數 | v2 | v1 | v2% |
|---|---|---|---|---|
| 內科 IM | 57 | 35 | 22 | 61% |
| 外科 SURG | 39 | 25 | 14 | 64% |
| 皮膚 DERM | 35 | 18 | 17 | 51% |
| 神經 NEURO | 35 | 15 | 20 | 43% |
| 腫瘤 ONCO | 34 | 15 | 19 | 44% |
| 急診 ECC | 33 | 19 | 14 | 58% |
| 心臟 CARDIO | 28 | 17 | 11 | 61% |
| 臨床病理 CPATH | 22 | 12 | 10 | 55% |
| **合計** | **283** | **156** | **127** | **55.1%** |

- **content-stats.ts 零漂移**：宣告 283 節點 / 103 病例 / 8 專科，與 seed 實測完全一致（drift-guard 測試 3/3 通過）；首頁專科總覽實測加總亦為 283。
- **v2 品質抽查（3 節點 / 3 專科全文閱讀）**：CARDIO-L3-005 犬心絲蟲、NEURO-L3-003 GME/MUO、ONCO-L3-007 TCC——皆為 8 段結構齊全、Evidence-Level 標註、真實 DOI、無空段/無捏造共識，達精通級。

**非阻斷內容債：**
- `open-access-resources.ts`：100 條中 67 條失效/標題不符（32 死連結 + 35 PMC 誤連），符合 CLAUDE.md 警示的捏造 URL pattern。**但此資料零消費者（無 UI、無測試強制）＝ dead data**，無使用者危害；接 UI 前須重建或刪除。
- 8 條 NOT_FOUND DOI 回填（見上）。
- 127 個 v1 節點（45%）——review #3/#4 判定為非關鍵低頻主題，僅需補 3 段 + DOI，非重建；全部內容目前為 `status: 'review'`，尚未 `published`（DVM 簽核閘門正確）。

### 3.3 實際瀏覽器操作 🟢

以真實 `next dev`（port 3001）+ preview 工具，親自走完使用者操作鏈。**10 個前台頁面全數可用，操作鏈完整，修復後 console 零新增 error。**

| 頁面 | 路徑 | 實測結果 |
|---|---|---|
| 登陸頁 | `/` | ✅ Hero + 3 特色卡 + CTA「開始學習」導向 `/login` |
| 登入 | `/login` | ✅ 表單驗證正常；登入後導向 `/home`，`WelcomeOnboarding` 彈窗如期觸發 |
| 首頁 | `/home` | ✅ 統計卡（5 已完成 / Lv.2 / 930 XP）、複習提醒卡（正確 gate 於 completedCount>0）、專科總覽加總＝283 |
| 知識圖譜 | `/graph` | ✅ 先選專科（避免一次渲染 283）；心臟科載入 **28 節點** + controls；**邊資料層 727 條、arrowhead marker 已註冊，但 headless 預覽無法繪製 SVG 邊**（見已知限制 #12，須真桌面瀏覽器簽核） |
| 節點詳情 | `/nodes/[id]` | ✅ 犬心絲蟲 v2：8 段結構、**12 個表格**、**4 個 DOI 連結**、~11K 字；**實測發現並修復 duplicate-key bug（見 §六）** |
| 每日複習 | `/review` | ✅ FSRS：10 題待複習 → 顯示答案 → **4 級評分（忘記/困難/良好/簡單，含間隔預測）** → 評「良好」後「今日已複習」0→1，迴圈前進 |
| 病例挑戰 | `/cases` | ✅ **103 個病例**；開啟 CASE-CARDIO-001（老年 CKCS 呼吸困難，臨床設定貼切）→ 問診多選 + 提交答案，互動流程正常 |
| 學習路徑 | `/paths` | ✅ 47 路徑；PATH-CARDIO-FOUNDATION 詳情：12 節點連結（`/nodes/CARDIO-L0-001` 格式）+ 里程碑（基礎過關/路徑完成），符合 DEPLOY-CHECKLIST #2 驗收 |
| 成就 | `/achievements` | ✅ 學習進度 + 成就徽章階梯（踏出第一步/初窺門徑/專科之路…） |
| 個人資料 | `/profile` | ✅ 等級/專科分佈/帳號資訊/**危險區**（登出 + 刪除我的帳號，對應隱私政策 §六） |

- **導覽列/側邊欄/手機底部導航**：連結齊全、`aria-label`、skip-to-content（WCAG 2.1 A）皆在。
- **console**：整場唯二 error 為修復前首次載入節點頁殘留的 duplicate-key（已修，之後全程零新增）。
- **截圖**：dev 工具 overlay 導致 `preview_screenshot` 逾時；改以 DOM 快照 + console + network + inspect 四路存證（本為 preview 指南建議的更可靠驗證方式）。

### 3.4 後台可使用性 🟡 CONDITIONAL

實測登入後台並操作每一頁。**權限閘門、登入、登出正常；但三個「動作型」頁面為空殼 demo。**

| 後台頁 | 路徑 | 實測結果 |
|---|---|---|
| 權限閘門 | middleware | ✅ 未登入存取 `/admin/generate` → 導向 `/admin/login?from=%2Fadmin%2Fgenerate` |
| 登入 | `/admin/login` | ✅ 以 dev 密碼登入成功 → 導向 `/admin/generate`（React 受控輸入需正確派發 input 事件才提交） |
| AI 生成 | `/admin/generate` | ⚠️ **空殼**：填表 + 點「生成骨架」後，**整場 network 僅 1 筆 `/api/admin/login`，0 筆 `/api/generate/*`**。是純前端 `setTimeout` 動畫產出假 JSON、不寫入、不呼叫已建好的後端路由。error UI 為不可達 dead code |
| 內容審核 | `/admin/review` | ⚠️ **永久空**：`MOCK_ITEMS` 為空陣列、無資料源；顯示「目前沒有待審核的內容」（空狀態優雅）。核准/退回僅改本地 state；預覽為「開發中」stub |
| 數據分析 | `/admin/analytics` | ⚠️ **假數據**：本次由側邊欄點入**未重現卡 loading**、完整渲染；但顯示硬編碼 mock（活躍 128、**總節點數 342 ≠ 實際 283**、今日完成 56），會誤導營運者。DEPLOY-CHECKLIST #13 的 dev loading hang 為間歇性、production build 不受影響 |
| 登出 | 導覽列 | ✅ 呼叫 `/api/admin/logout` → 回 `/admin/login` |

> **後台判定：以「後台外殼 + 認證 demo」而言可上線；若營運者被期待能真正「生成/審核/分析」內容，則生成與審核須接上（已存在、已鑑權的）`/api/generate/*` + 持久層，否則須明確標示「示範/Demo」避免誤導。analytics 假數字（342≠283）建議改為真實或明確標示的 placeholder。**

---

## 四、上線前待辦（依優先序）

**P0（阻斷，上線必做）**
1. 接上真實 Supabase Auth 取代前端 mock role（`DEPLOY-CHECKLIST.md` §1）；實作 `updateSession` + SSR cookie client（安全 HIGH）。
2. 完成 `DEPLOY-CHECKLIST.md` §3–4：`VKT_ADMIN_PASSWORD` 改 `sha256:`、`VKT_JWT_SECRET`(≥32)、`ADMIN_API_KEY`、Upstash Redis rate-limit。
3. **輪替 `.env.local` 內所有 live secrets**（已外顯於本機）。
4. 決定後台生成/審核的上線範疇：接上後端或明確標示 Demo。

**P1（強烈建議）**
5. 修 analytics 假數據（342≠283）→ 真實或標示 placeholder；處理間歇性 dev loading hang（最簡：移除 `admin/loading.tsx`）。
6. 真桌面瀏覽器確認 `/graph` 各專科節點間箭頭連線（DEPLOY-CHECKLIST #12）。
7. 回填 2 條 v2 NOT_FOUND DOI（CARDIO-L3-001、ECC-L3-007）後再 DVM 簽核 published。

**P2（非阻斷、可排程）**
8. 公開 POST 端點加 body 大小上限；簡化 csrf 冗餘分支。
9. 重建或移除 `open-access-resources.ts`（dead data）。
10. 續攻 127 個 v1 → v2；回填其餘 6 條 NOT_FOUND DOI。
11. Next.js 16 `middleware` → `proxy` 慣例遷移（build 有 deprecation 警告，尚不阻斷）。

---

## 五、線上專案競爭評估表

**定位**：VetKnowledgeTree 是**繁體中文／台灣在地化、以「知識圖譜」為核心、整合遊戲化 + FSRS 間隔重複 + 互動病例、且引用經 Crossref 驗證**的小動物臨床學習平台。此組合在現有市場中是**空白區**——現有產品要嘛英文、要嘛只做單一維度（純題庫／純 CE 影片／純參考書）。

評分 1–5（5 最佳）：

| 維度 | VetKnowledgeTree | VIN | Clinician's Brief | VetGirl (CE) | Zuku/VetPrep（考照） | Anki + 社群牌組 | Osmosis（人醫參照） |
|---|:--:|:--:|:--:|:--:|:--:|:--:|:--:|
| 繁中／台灣在地化 | **5** | 1 | 1 | 1 | 1 | 2 | 1 |
| 內容正確性/引用可驗證 | **4** | 5 | 5 | 4 | 3 | 2 | 4 |
| 知識圖譜視覺化 | **5** | 1 | 1 | 1 | 1 | 1 | 3 |
| 互動病例模擬 | **4** | 2 | 2 | 2 | 2 | 1 | 3 |
| 間隔重複（FSRS） | **5** | 1 | 1 | 1 | 3 | 5 | 4 |
| 遊戲化（XP/等級/成就） | **5** | 1 | 1 | 2 | 3 | 2 | 3 |
| 內容廣度/覆蓋 | **2** | 5 | 4 | 4 | 4 | 4 | 4 |
| 取得門檻/價格 | **5**（免費/自架） | 2（訂閱） | 4 | 2 | 2 | 5 | 3 |
| 平台成熟度/穩定性 | **2**（未上線） | 5 | 5 | 4 | 4 | 4 | 5 |
| 社群/更新頻率 | **2** | 5 | 5 | 4 | 3 | 4 | 4 |
| **加權印象** | **獨特但年輕** | 產業標竿 | 精緻參考 | CE 影音 | 考照特化 | 記憶工具 | 人醫模板 |

**解讀：**
- **決定性優勢（護城河）**：繁中在地化 + 知識圖譜 + 「圖譜×病例×間隔重複×遊戲化」四合一整合 + 引用可驗證管線。單看任一維度都有對手，但**整合成一個學習迴圈、且針對台灣小動物臨床**是唯一。
- **主要落差**：內容廣度（283 節點 vs VIN 級全科）、平台成熟度（尚未上線）、社群/更新（單一來源）。這些是「時間與營運」問題，非「架構」問題。
- **戰略建議**：以「深度優先、台灣小動物」為錨定，不與 VIN 比廣度；以 v2 精通級節點 + 互動病例作為差異化行銷點；上線後補齊社群回饋迴圈（GitHub Issue 模板已備）。

---

## 六、本次實測發現並修復的 Bug

**Bug：`RelatedNodes` 相關節點 React duplicate-key**（實測於 `/nodes/CARDIO-L3-005` 由 console 揪出）

- **現象**：console 反覆 `Encountered two children with the same key, CARDIO-L3-009`；相關節點卡片可能重複/漏顯。
- **根因**：`RelatedNodes.tsx` 收集所有與當前節點相連的邊，但雙向關係以「兩條有向邊」表示（`CARDIO-E-033` L3-005→L3-009 與 `CARDIO-E-052` L3-009→L3-005），使同一鄰居 L3-009 出現兩次、皆以 `node.id` 為 key。
- **修復**：以 `node.id` 去重（同一鄰居只顯示一次，且「相關知識節點」計數改為 unique 節點數）。
- **驗證**：修後 CARDIO-L3-005 頁 L3-009 只出現 1 次；互訪 CARDIO-L3-009 頁零重複、零新增 console error。
- **SOP 教訓（重要）**：第一版修復用型別謂詞 `item is {edgeType: string}`，`tsc --noEmit` 竟報 0 錯，但 **`next build` 的 TypeScript 檢查攔截到「型別謂詞須可指派給參數型別」錯誤**（`string` 不可指派給 `EdgeRelationType`）。二次以 `NonNullable<typeof item>` 修正並重跑門控通過。**這正是 CLAUDE.md rule 11「build 為硬性門控、永不跳過」的活教材——綠色 tsc/test 可與失敗 build 並存。**

檔案：`src/components/features/RelatedNodes.tsx`

---

## 七、靜態品質門控結果

| 門控 | 結果 |
|---|---|
| `tsc --noEmit` | 0 errors |
| `vitest run` | **832 tests passed / 55 files** |
| `eslint` | 0 errors、20 warnings（皆 `any`，僅測試檔，CLAUDE.md 容許） |
| `next build` | 成功，41 條路由全在（含所有動態路由）；1 個 `middleware→proxy` deprecation 警告（非阻斷） |
| 修復後重驗 | tsc + build 重跑通過（見 §六） |

---

## 附錄：測試環境

- 分支 `main`；Next.js 16.2.6（Turbopack）、React 19.2.3、TypeScript strict。
- 本機 Mock 模式：`.env.local` 的 `NEXT_PUBLIC_SUPABASE_URL` 註解 → seed 283 節點；`ANTHROPIC_API_KEY` 有設但後台生成頁不呼叫。
- 稽核產物：`reports/citation-audit-*.md/json`、`reports/resource-audit-*.json`。
