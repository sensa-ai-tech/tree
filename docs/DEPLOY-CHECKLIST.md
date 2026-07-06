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

> ✅ **程式面已接線（2026-07-03）**：`auth-store` 改為雙模式——偵測到 `NEXT_PUBLIC_SUPABASE_URL` + `ANON_KEY` 就走真實 `supabase.auth.signInWithPassword`（role 只認 JWT `app_metadata.role`，前端不再決定），沒設則退回本機 mock。`middleware.ts` 已呼叫 `updateSession` 刷新 session cookie；`/api/account` 用 cookie-aware `createServerClient`、`/api/health` 用不綁 cookie 的 `createAnonServerClient`。已新增 `@supabase/ssr` 依賴（`supabase-js` 隨之升到 2.110，仍在 `^2.95.3` 範圍內）。
>
> **因此以下純粹是 Supabase 專案端 + 環境變數設定，不需再改任何 app code。** 設了 env → 自動切真 Auth；沒設 → 維持 mock。

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

## 3.5 🔴 必做：金鑰輪替（本機 .env.local 已外顯 live secrets）

> 本機 `.env.local` 目前含真實 live secrets（Anthropic API key、Supabase service-role key、admin 密碼、JWT secret、Vercel OIDC token）。已 gitignore、未進版控，但上線前一律輪替，且勿在任何測試指引／訊息外流。

- [ ] Anthropic Console 重簽 `ANTHROPIC_API_KEY`，撤銷舊 key
- [ ] Supabase Dashboard → Settings → API 重簽 `service_role` key（`SUPABASE_SERVICE_ROLE_KEY`）；anon key 如曾外流一併輪替
- [ ] `VKT_ADMIN_PASSWORD` 改新密碼並轉 `sha256:` 格式（見 §3）
- [ ] `VKT_JWT_SECRET` 重新產生 ≥32 字元：`node -e "console.log(require('crypto').randomBytes(48).toString('base64url'))"`
- [ ] `ADMIN_API_KEY` 重新產生
- [ ] 全部更新到 Vercel 環境變數 → redeploy；本機 `.env.local` 同步新值
- **驗收**：用舊 key 呼叫 API 應被拒；新 key 正常

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
- [x] **#13**（LOW，✅ 2026-07-04 已修）：`/admin/analytics` dev 卡載入骨架。根因＝admin segment `loading.tsx` 的 Suspense fallback 在 dev 不解除；**已移除 `src/app/admin/loading.tsx`**（admin 頁皆 client-static、instant render，不需骨架），瀏覽器驗證 hard-nav + sidebar in-app nav 皆乾淨渲染。

---

## 部署前最終 gate（CLAUDE.md rule 11）

```
npx tsc --noEmit     # 0 errors
npm test             # 832/832 pass
npm run lint         # 0 errors
npm run build        # 必過 — Tailwind v4 production class-scan 只有 build 才會跑
```
