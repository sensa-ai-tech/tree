# 部署清單（DEPLOY CHECKLIST）

> 上線到 Vercel + 真實 Supabase 前，照這份由上而下走。
> 純本機開發（seed/mock 模式）**完全不需要**這些 —— 只在要 deploy 時才做。
> 來源彙整自 UX-Cruise 巡航的 BLOCKED-OPERATIONS（Obsidian）。最後更新：2026-06-13。

---

## 0. 本機開發模式（現況，無需操作）

- `.env.local` 的 `NEXT_PUBLIC_SUPABASE_URL` 已註解 → `isMockMode()=true` → 本機用乾淨的 274 節點 seed。
- 要臨時測真實 Supabase：把該行取消註解、`rm -rf .next`、`npm run dev`（但會碰到下方 #2 的髒資料，需先做 B2）。
- 每次本機開發前若遇到怪畫面：先 `rm -rf .next` 再 `npm run dev`（避免 prod build 殘留污染 dev）。

---

## 1. 🔴 必做：Supabase 正式專案 + 真實 Auth

> 目前 `auth-store` 是 mock（前端決定 role）。上線必須換成真實 Supabase Auth。

- [ ] supabase.com 建 project
- [ ] SQL Editor 跑 `supabase/migrations/001_initial_schema.sql`
- [ ] 跑 `docs/SUPABASE-AUTH-SPEC.md` §2.1 的 `custom_access_token_hook`
- [ ] 跑 §4 的 `handle_new_user` trigger
- [ ] Authentication → Hooks → 啟用 `Custom Access Token`
- [ ] Authentication → URL Configuration → 加 `*.vercel.app`、`http://localhost:3001`
- [ ] 註冊一個 email 帳號（給 bootstrap admin 用）
- [ ] 跑 §2.3 bootstrap admin migration（換成你的 email）
- [ ] 複製 `NEXT_PUBLIC_SUPABASE_URL` + `NEXT_PUBLIC_SUPABASE_ANON_KEY` 到 Vercel 環境變數
- **驗收**：用 bootstrap email 登入，DevTools → Cookies 看到 `sb-*-auth-token`，JWT 解出 `app_metadata.role==='admin'`

---

## 2. 🔴 必做：修好 Supabase 學習路徑資料（BLOCKED #8/#9，腳本已備妥）

> 接在 #1 之後。修正 node_ids 雙重序列化 + 匯入 milestones。app 端已相容，不用改 code。

- [ ] SQL Editor 跑 `supabase/migrations/002_path_fidelity.sql`（加 milestones / path_nodes / target_audience / has_certificate 欄）
- [ ] 終端機跑 `npx tsx scripts/seed-to-supabase.ts`（重新匯入，這次 node_ids 存裸 id、path_nodes 存物件、灌入 milestones）
- **驗收**：`/paths/PATH-CARDIO-FOUNDATION` 顯示里程碑（基礎過關/疾病與診斷/路徑完成）+ 節點連結為 `/nodes/CARDIO-L0-001`

---

## 3. 🔴 必做：Production 環境變數修正（BLOCKED #10）

- [ ] Vercel Dashboard → 確認所有環境變數值**不含換行 `\n`**（`vercel env pull` 曾寫入損壞值）
- [ ] `VKT_ADMIN_PASSWORD` 改成 `sha256:<雜湊>` 格式（production 拒絕明文；產生：`node -e "console.log('sha256:'+require('crypto').createHash('sha256').update('你的密碼').digest('hex'))"`）
- [ ] 確認 `VKT_JWT_SECRET`（≥32 字元）、`ADMIN_API_KEY` 已設

---

## 4. 🔴 必做：Upstash Redis（rate-limit，BLOCKED #1）

> In-memory rate-limit 在 Vercel 多 instance 不共享，cold start 會 reset。

- [ ] console.upstash.com 註冊 → Create Database（Region: ap-southeast-1 / Singapore）
- [ ] 複製 `UPSTASH_REDIS_REST_URL` + `UPSTASH_REDIS_REST_TOKEN` → Vercel 環境變數（all environments）
- [ ] Redeploy
- **驗收**：`curl -i https://<prod-url>/api/admin/login -X POST -d '{}'` 連 6 次，第 6 次回 429 + `X-RateLimit-*` headers

---

## 5. ⚪ 可選：錯誤上報 Sentry（BLOCKED #3）

- [ ] sentry.io 建 Next.js project → 取得 DSN
- [ ] Vercel 加 `SENTRY_DSN` + `NEXT_PUBLIC_SENTRY_DSN`（可選 `SENTRY_RELEASE`=commit SHA）
- [ ] Redeploy
- **驗收**：故意打錯 admin 密碼 1 次，Sentry 出現 event，`transaction==='route:/api/admin/login'`

---

## 6. ⚪ 可選：CI secrets（BLOCKED #4，若有 GitHub Actions）

- [ ] Repo → Settings → Secrets and variables → Actions
- [ ] 加 `ADMIN_API_KEY`、`VKT_JWT_SECRET`、`VKT_ADMIN_PASSWORD`（+ 若 CI 連 Supabase：`NEXT_PUBLIC_SUPABASE_URL`、`ANON_KEY`）

---

## 7. 🟡 待人工驗證 / 已知 LOW issue（非阻塞）

- [ ] **#12**：用真實桌面瀏覽器開 `/graph` → 心臟科，確認節點間有箭頭連線（headless 預覽下測不出，但資料層 806 條 edge 正常）。沒連線才需 debug。
- [ ] **#13**（LOW）：`/admin/analytics` 在 dev 卡載入骨架（mock 資料頁，admin-only）。已排除 stale-build / client-server / Progress / 頁面源碼；根因在 App-Router segment-loading.tsx Suspense 層。候選修法見 BLOCKED-OPERATIONS.md #13。

---

## 部署前最終 gate（CLAUDE.md rule 11）

```
npx tsc --noEmit     # 0 errors
npm test             # 832/832 pass
npm run lint         # 0 errors
npm run build        # 必過 — Tailwind v4 production class-scan 只有 build 才會跑
```
