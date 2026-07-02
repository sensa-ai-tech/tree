# VetKnowledgeTree — 工程藍圖與使用說明書

> 本檔是專案的**單一權威技術總覽**：任何人（工程/內容/營運）讀完即可知道系統怎麼運作、怎麼跑、怎麼用、怎麼上線。
> 內部規則細節見 `CLAUDE.md`（根目錄）；巡航進度見 `docs/CRUISE-LOG.md`；上線前評測見 `docs/PRE-LAUNCH-ASSESSMENT-2026-07-02.md`。
> 最後更新：2026-07-02（上線前總體檢後）

---

## 1. 這是什麼

**繁體中文 / 台灣在地化的小動物（犬貓）臨床學習平台**，把獸醫專科知識做成「節點化線上教科書」：

- **283 個知識節點** × 8 專科（內科/外科/皮膚/神經/腫瘤/急診/臨床病理/心臟），以**知識圖譜**呈現節點間的前置依賴與跨科關聯（**727 條邊**）。
- **103 個互動病例**：模擬真實臨床決策流程（問診 → 檢查 → 診斷 → 治療）。
- **學習系統**：FSRS 間隔重複 + 遊戲化（XP/等級/成就）+ 結構化學習路徑。
- **內容正確性為最高原則**：每一條參考文獻經 `verify:citations` 對 Crossref 驗證（0 捏造引用）。內容分 v1（基礎）/ v2（精通級 8 段結構），目前 **156/283 為 v2（55%）**。

---

## 2. 技術棧

| 層 | 技術 |
|---|---|
| 框架 | Next.js 16（App Router, Turbopack）+ React 19 + TypeScript（strict） |
| 樣式 | Tailwind CSS **≥ 4.3.0**（勿降版；4.1.18 的 Oxide scanner 會在 CJK 內容上 crash `next build`） |
| 狀態 | Zustand（4 個 store：auth / knowledge / learning / gamification） |
| 圖譜 | `@xyflow/react`（React Flow）+ `@dagrejs/dagre`（自動佈局） |
| 間隔重複 | `ts-fsrs`（FSRS，4 級評分） |
| 內容渲染 | react-markdown + remark-gfm + rehype-raw + **rehype-sanitize** + DOMPurify + Mermaid（strict） |
| 資料庫 | Supabase（Postgres + Auth + RLS）— **上線才接；本機用 seed** |
| AI | `@anthropic-ai/sdk`（內容生成管線，含 mock 模式） |
| 測試 | Vitest（832 測試）+ Testing Library + fast-check（property）+ MSW；Playwright、Stryker 已備 |
| 部署 | Vercel + Upstash Redis（rate-limit）+ 選配 Sentry |

---

## 3. 兩種執行模式（關鍵！）

系統有**兩個各自獨立的「mock 開關」**，別混淆：

| 開關 | 判定 | 影響 | 本機現況 |
|---|---|---|---|
| **資料 mock** | `NEXT_PUBLIC_SUPABASE_URL` 未設 → `isMockMode()=true` | 用 `src/data/seed/` 的 283 節點 seed；auth 為前端 mock 角色 | **開啟**（`.env.local` 已註解該行） |
| **AI mock** | `ANTHROPIC_API_KEY` 未設 → mock | `callClaude()` 回 `getMockResponse()` 決定性 JSON | 視 `.env.local` 而定（有設 key＝關閉，但後台生成頁不呼叫 AI，故無影響） |

- **本機開發/實測**：什麼外部服務都不用設，`npm run dev` 直接跑 seed。
- **登入**：mock 模式下任意 email/密碼皆可登入；`admin@vetknowledgetree.com` → admin 角色，其餘 → 一般使用者。
- **上線**：必須接真 Supabase Auth 取代前端 mock 角色（見 §8 與 `DEPLOY-CHECKLIST.md`）。

---

## 4. 路由地圖

### 前台頁面（`src/app/`）
| 群組 | 路徑 | 說明 |
|---|---|---|
| 公開 | `/` `/login` `/register` `/privacy` `/terms` | 登陸/認證/法務 |
| `(dashboard)` | `/home` `/graph` `/paths` `/paths/[pathId]` `/nodes/[nodeId]` `/cases` `/cases/[caseId]` `/review` `/achievements` `/profile` | 主功能（需登入） |
| admin | `/admin/login` `/admin/generate` `/admin/review` `/admin/analytics` | 後台（JWT cookie 保護） |

> ⚠️ `(dashboard)`、`(auth)`、`(legal)` 是 **route group**（括號 = 只分組、不產生 URL 區段）。頁面實際 URL 是 `/home` 不是 `/dashboard/home`。新增有 URL 的頁面必須用**真實資料夾**（無括號），改動路由後 diff `npm run build` 的路由表。

### API（`src/app/api/`，共 17 條）
- 讀取：`/api/nodes`、`/api/nodes/[nodeId]`、`/api/paths`、`/api/cases`、`/api/cases/[caseId]`、`/api/progress`、`/api/review`、`/api/gamification`、`/api/health`
- 帳號：`/api/account`（DELETE，帳號刪除，對應隱私政策 §六）
- 後台：`/api/admin/login`、`/api/admin/logout`
- AI 生成（皆 `withAuth` + `withRateLimit` + Zod 驗證）：`/api/generate/{skeleton,content,edges,questions,cases}`
- 觀測：`/api/csp-report`

---

## 5. 核心子系統

- **AI 內容管線**（`src/lib/ai/`）：`prompt-registry.ts` 是單一分派表（8 種 NodeType → 3 個 builder）；`claude-client.ts` 含 mock 模式與結構化 log；`parsers/` 做 JSON 解析 + 驗證。
- **知識圖譜演算法**（`src/lib/utils/graph-algorithms.ts`）：`filterDependencyEdges`（去自環）、`topologicalSort`、`getConnectedComponents`、`detectCycles`（**迭代 DFS**，避免大鏈 stack overflow）。
- **遊戲化**（`src/lib/gamification/`）：XP 計算、等級系統、成就追蹤、`spaced-rep.ts`（包 ts-fsrs）。
- **安全**（`src/lib/`）：`admin-auth.ts`（JWT/密碼）、`security/csrf.ts`、`api/middleware.ts`（`withAuth`/`withRateLimit`）、`api/rate-limit-store.ts`（Upstash + in-memory 降級）。
- **觀測**（`src/lib/observability/error-reporter.ts`）：DSN-gated，無 Sentry → `console.error`；client 訊息一律通用（不洩上游 error）。
- **內容渲染**（`src/lib/utils/markdown-renderer.ts`）：`parseContentMarkers` 先 escape 再插值（rehype-sanitize 為縱深防禦）。

---

## 6. 資料與內容

- **Seed**：`src/data/seed/<專科>/{nodes,edges,contents}.ts` + `open-access-resources.ts`（⚠️ dead data，未接 UI，67% 連結失效，接 UI 前須重建/刪除）。
- **節點 ID 格式**：`<專科>-L<層級>-<序號>`，例：`CARDIO-L3-001`（心臟科 L3 第 1 個，MMVD）。層級 L0（總覽）→ L5（進階/治療）。
- **內容標準**：`docs/CONTENT-STANDARD-V2.md` 定義 v2 的 8 段 rubric（病理機制/臨床診斷/治療/併發監控/預後/人醫借鑑/爭議與空缺/近期實證）+ 每條 reference 附真實 DOI + Evidence Level。
- **內容狀態機**：節點內容有 `status`（draft → review → published）與 `version`（1/2）。目前全部停在 `review`，等 DVM 簽核才 `published`。
- **正確性閘門**：新增/更新任何 reference 後跑 `npm run verify:citations`；`SUSPECT_*` = 錯/捏造 DOI，commit 前必修。報告落在 `reports/`。

---

## 7. 開發與驗證 SOP

```bash
npm run dev              # 開發（port 3001）
npx tsc --noEmit         # 型別檢查（0 errors）
npm test                 # 832 測試
npm run test:cov         # 覆蓋率（istanbul，勿換 v8）
npm run lint             # 0 errors（測試檔的 any warning 可容忍）
npm run build            # ★ 硬性門控，永不跳過 ★
npm run verify:citations # 引用完整性
```

> **rule 11（血淚教訓）**：`tsc` + `vitest` **不會**跑 Tailwind v4 production class-scan，也可能漏掉 `next build` 才抓的型別錯誤——**綠色測試可與失敗 build 並存**。任何「完成/收斂」宣稱前，`next build` 必須成功。本次總體檢即再次驗證：一個 `tsc --noEmit` 報 0 錯的型別謂詞錯誤，被 `next build` 攔下。

---

## 8. 上線接線（摘要，完整見 `DEPLOY-CHECKLIST.md`）

1. **Supabase**：建 project、跑 migrations、啟用 custom access token hook + `handle_new_user` trigger、設 URL 白名單；**接上 SSR session（實作 `updateSession` + cookie-aware server client）並退役前端 mock auth store**。
2. **環境變數**：`VKT_ADMIN_PASSWORD` 用 `sha256:` 格式、`VKT_JWT_SECRET`(≥32)、`ADMIN_API_KEY`；確認值不含換行。
3. **Upstash Redis**：rate-limit 跨 instance 共享。
4. **（選）Sentry**：錯誤上報。
5. **輪替所有 `.env.local` live secrets**（勿外流、勿進版控）。
6. 部署後：確認 live URL、`/api/health`、admin 登入、rate-limit 429。

---

## 9. 已知限制與注意事項

- **圖譜箭頭**：headless 預覽無法繪製 React Flow 的 SVG 邊，但資料層 727 條邊正常、arrowhead marker 已註冊 → 需真桌面瀏覽器確認（DEPLOY-CHECKLIST #12）。
- **後台動作頁為 Demo**：`/admin/generate`（0 後端呼叫）、`/admin/review`（永久空）、`/admin/analytics`（假數據，總節點數顯示 342≠283）。上線前決定接後端或標示 Demo。
- **`/admin/analytics` dev loading hang**：間歇性、dev 專屬（production build 不受影響）；最簡解為移除 `admin/loading.tsx`。
- **Next.js 16**：`middleware` 慣例已 deprecated（提示改 `proxy`），build 有警告但尚不阻斷。

---

## 10. 文件索引

| 文件 | 用途 |
|---|---|
| `docs/QUICKSTART.md` | 實測者 10 分鐘上手 |
| `docs/BLUEPRINT.md`（本檔） | 工程藍圖 / 系統總覽 |
| `docs/PRE-LAUNCH-ASSESSMENT-2026-07-02.md` | 上線前總體檢評測 + 競爭評估表 |
| `docs/CONTENT-STANDARD-V2.md` | v2 內容 rubric |
| `docs/ADD-NODE-SOP.md` | 新增節點流程 |
| `docs/DEPLOY-CHECKLIST.md` | 上線接線清單 |
| `docs/SUPABASE-AUTH-SPEC.md` | Supabase Auth 規格 |
| `docs/CRUISE-LOG.md` | 內容升級巡航進度錨點 |
| `CLAUDE.md`（根） | 專案不變式與踩坑速查（AI 開發者必讀） |
