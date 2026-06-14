# 新增知識節點 SOP（ADD-NODE-SOP）

> 在不破壞 build / graph / 測試的前提下，新增一個知識樹節點要動哪些檔案、依什麼順序。
> 來源：2026-06-15 指揮官對 seed 架構的唯讀 scope。對應 `src/types/knowledge.ts` 與 `src/data/seed/`。

---

## 架構速覽

- 8 個專科，每科一個資料夾：`src/data/seed/<specialty>/`，內含 `nodes.ts`、`edges.ts`、`contents.ts`、`questions.ts`、`cases.ts`、`paths.ts`。
- `src/data/seed/index.ts` 把各科 merge 成 `ALL_NODES` / `ALL_EDGES` / `SEED_NODE_CONTENTS`(Map) / `SEED_QUESTIONS` / `ALL_CASES` / `ALL_PATHS`，並在 mock 模式由 `initializeDemoData()` 灌進 store。
- 節點 ID 慣例：`<SPECIALTY>-L<layer>-<3碼序號>`，例：`ONCO-L3-009`。Layer 0–5（見 `LAYER_LABELS`）。
- `node_type`（8 種）：concept / mechanism / disease / diagnostic / therapeutic / procedure / case_study / decision_tree。新 NodeType 會讓 `prompt-registry.ts` 的 `PROMPT_MAP` 編譯失敗——**新增節點請沿用既有 8 型，不要加新 type**。
- `(dashboard)` 是路由群組（無 URL 段）；節點詳情頁是動態路由 `nodes/[nodeId]/page.tsx`，找不到 node 會 `notFound()`。

---

## 新增「1 個節點」必動檔案（同一專科內）

依序操作：

1. **`<specialty>/nodes.ts`** — 在 `XXX_NODES` 陣列加一筆 `KnowledgeNode`（完整欄位：id、specialty、title、title_en、layer、node_type、difficulty 1–5、estimated_minutes、clinical_relevance 1–5、exam_relevance 1–5、status:'published'、version:1、tags[]、encyclopedia_link:null、cross_specialty_notes、created_at/updated_at 用檔頭 `now`）。
2. **`<specialty>/contents.ts`** —
   a. 新增一個 `const contentXXX: NodeContent = { ... }`（id 用 `CONTENT-<node_id>`、node_id、version:1、summary、learning_objectives[]、key_points[]、body(template literal)、clinical_pearl、common_mistakes[]、disease_data/diagnostic_data/procedure_data 三選一其餘為 null、visual_placeholders[]、interactive_placeholders[]、drug_api_links[]、references[]、is_current:true、created_at:now）。
   b. 在檔尾 `export const XXX_CONTENTS = new Map([...])` 加 `['<node_id>', contentXXX],`。**沒加這行 → 詳情頁有節點但無內容。**
3. **`<specialty>/edges.ts`** — 在 `XXX_EDGES` 加至少 1 條 `KnowledgeEdge`（id `<SPECIALTY>-E-<序號>`、source/target、relation_type（8 種：prerequisite/builds_on/cross_specialty/differential/clinical_apply/complication/same_system/drug_related）、weight、description、bidirectional、unlock_condition）。讓新節點**不要變孤點**（通常從同層或上一層接 prerequisite/builds_on）。注意：`graph-algorithms` 會過濾 ghost edge（指向不存在節點）與 self-loop，但孤點仍會被 `getConnectedComponents` 標出。
4. **`src/lib/constants/content-stats.ts`** — **必改**：`TOTAL_KNOWLEDGE_NODES` +1。否則 `content-stats.test.ts` drift guard 會 fail（它斷言 == `ALL_NODES.length`）。若同時加 case 也要改 `TOTAL_CASE_CHALLENGES`。

### 選配（建議但非必須）
5. **`<specialty>/questions.ts`** — 加複習題（FSRS 複習佇列用）。
6. **`<specialty>/paths.ts`** 或 `cross-specialty-paths.ts` — 把節點掛進學習路徑的 `path_nodes`（否則只在 graph/search 出現，不在任何 path）。
7. **`<specialty>/cases.ts`** — 若加病例（記得同步 `TOTAL_CASE_CHALLENGES`）。

---

## 不需要動的地方
- `index.ts`：用 spread merge，新 node/content/edge 自動納入，**無需改 index**（除非新增整個專科）。
- `seed-nodes.ts`：是舊版/僅 CARDIO 的遺留檔，非真實來源，勿誤改。
- snapshot：只有 GOLD_NODES（`CARDIO-L3-001`、`CARDIO-L4-001`、`IM-L3-001`、`IM-L3-028`、`SURG-L5-006`）改核心欄位才需 `-u`；新節點不在其中，不影響。Phase2 不變式節點清單見 `seed-content.test.ts`。

---

## 驗證門檻（CLAUDE.md rule 11，逐項過）
```
npx tsc --noEmit         # 0 errors（NodeType/欄位型別不符會擋下）
npm test                 # 全過；特別注意 content-stats.test.ts（count drift）
npm run build            # 必過（Tailwind v4 prod class-scan，CJK 內容地雷）
```
新增後手動確認：`/nodes/<新node_id>` 渲染正常、graph 不孤點、search 搜得到。

---

## 編輯 contents.ts 的踩雷提醒
- `body` 是 template literal（反引號）。編輯**緊貼結尾**的表格列（`...|`,`）時極易掉收尾 backtick → template 暴走吞到下一個節點的 backtick，tsc 噴一堆「Invalid character」。改完務必確認收尾 `` `, `` 還在。
- 單檔已很大（onco/contents.ts ~5200 行），用增量 Edit、勿整檔覆寫（CLAUDE.md 檔案操作規則）。
- 臨床內容一律標「待 DVM 覆核」，新藥劑量引官方仿單。
