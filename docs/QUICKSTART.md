# VetKnowledgeTree 實測者快速上手指南

> 歡迎加入 VetKnowledgeTree 獸醫專科知識樹平台的實測！
> 本指南幫助你在 10 分鐘內完成環境設定並開始測試。

---

## 前置需求

- [Node.js](https://nodejs.org/) v18 以上（建議 v20+）
- Git
- 任意程式碼編輯器（VS Code 推薦）

---

## 快速開始

### 1. 取得程式碼

```bash
git clone https://github.com/sensa-ai-tech/tree.git
cd tree
```

### 2. 安裝依賴

```bash
npm install
```

### 3. 設定環境變數

```bash
cp .env.local.example .env.local
```

> 目前使用 Mock 模式，**不需要**設定 Supabase 或 Anthropic API 金鑰即可運行。

### 4. 啟動開發伺服器

```bash
npm run dev
```

開啟瀏覽器前往 **http://localhost:3000** 即可看到平台。

---

## 專案架構概覽

```
src/
├── app/                    # Next.js 頁面與 API
│   ├── (auth)/             # 登入/註冊頁面
│   ├── (dashboard)/        # 主要功能頁面
│   │   ├── graph/          # 知識圖譜（互動式網絡圖）
│   │   ├── nodes/[nodeId]/ # 節點內容詳情
│   │   ├── paths/          # 學習路徑
│   │   ├── cases/          # 病例闘關
│   │   ├── review/         # 間隔重複複習
│   │   ├── achievements/   # 成就總覽
│   │   └── profile/        # 個人檔案
│   ├── admin/              # 管理後台
│   └── api/                # 13 個 API 端點
├── components/
│   ├── ui/                 # 基礎 UI 元件
│   └── features/           # 功能性元件
├── lib/
│   ├── ai/                 # AI 管線（prompt + parser + validator）
│   ├── gamification/       # 遊戲化邏輯
│   ├── supabase/           # 資料庫客戶端
│   └── utils/              # 工具函式
├── stores/                 # Zustand 狀態管理
├── types/                  # TypeScript 型別定義
└── tests/                  # 測試檔案
```

---

## 主要功能頁面

| 頁面 | 路徑 | 說明 |
|------|------|------|
| 儀表板 | `/` | 學習進度總覽、最近活動 |
| 知識圖譜 | `/graph` | 互動式節點網絡圖，可縮放拖曳 |
| 節點詳情 | `/nodes/[id]` | 教學內容（含疾病/診斷特化視圖） |
| 學習路徑 | `/paths` | 結構化學習路線 |
| 病例闖關 | `/cases` | 7 步驟互動式臨床病例 |
| 間隔複習 | `/review` | SM-2 演算法排程的複習測驗 |
| 成就 | `/achievements` | 20+ 成就徽章 |
| 管理後台 | `/admin/generate` | AI 內容生成工具 |

---

## 實測流程

### Phase 1：知識模型審核（第 1 週）

1. 前往 `/graph` 查看知識圖譜
2. 點擊節點查看詳情（層級、類型、難度）
3. 檢視節點間的關聯線（前置依賴、跨科關聯等）
4. 對照 `docs/TESTING_PLAN.md` 中的評估表進行評分
5. 提交反饋 → GitHub Issue（使用「知識模型反饋」模板）

### Phase 2：內容品質評估（第 2 週）

1. 前往 `/nodes/CARD_010` 閱讀 MMVD 教學內容
2. 檢查醫學正確性（事實、藥物劑量、分期標準）
3. 評估台灣在地化程度
4. 提交反饋 → GitHub Issue（使用「內容品質反饋」模板）

### Phase 3：互動功能測試（第 3 週）

1. 完成至少 1 組測驗（`/review`）
2. 完成至少 1 個病例闘關（`/cases`）
3. 檢查遊戲化回饋（XP 獲得、等級提升）
4. 提交反饋

---

## 反饋提交方式

### GitHub Issue（推薦）

1. 前往 https://github.com/sensa-ai-tech/tree/issues/new/choose
2. 選擇對應的模板：
   - 📋 知識模型反饋
   - 📖 內容品質反饋
   - 🐛 Bug 回報
   - 💡 功能建議
3. 填寫模板並提交

### Slack / LINE

在群組中使用以下格式：

```
【反饋類型】模型 / 內容 / 互動 / 遊戲化 / Bug
【測試階段】Phase 1 / 2 / 3
【評分】1-5
【具體描述】...
【建議改善】...
```

---

## 常用指令

```bash
# 啟動開發伺服器
npm run dev

# 執行測試（99 個測試）
npx vitest run

# TypeScript 型別檢查
npx tsc --noEmit

# 建置生產版本
npm run build
```

---

## 常見問題

### Q: 需要 Supabase 帳號嗎？

不需要。目前系統使用 Mock 模式，所有資料庫和 API 呼叫都有 fallback 機制，不需要設定任何外部服務。

### Q: 看到的內容是 AI 真的生成的嗎？

Mock 模式下顯示的是預設範例內容。要測試真實 AI 生成功能，需要在 `.env.local` 中設定 `ANTHROPIC_API_KEY`。

### Q: 可以在手機上測試嗎？

可以。開發伺服器啟動後，在同一網路下的裝置可以透過你的 IP 位址存取（例如 `http://192.168.x.x:3000`）。

### Q: 如何查看資料庫 Schema？

資料庫結構定義在 `supabase/migrations/001_initial_schema.sql`，包含所有 10 張表的定義。

---

## 有問題？

- Slack: #vet-knowledge-tree
- GitHub Issues: https://github.com/sensa-ai-tech/tree/issues
- 負責人：[填入聯絡資訊]

---

*感謝你參與實測，你的反饋對我們非常重要！*
