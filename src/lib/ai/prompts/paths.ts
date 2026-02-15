import type { KnowledgeNode, KnowledgeEdge } from '@/types/knowledge';

export function buildPathsPrompt(
  nodes: KnowledgeNode[],
  edges: KnowledgeEdge[],
  specialtyName: string
): string {
  const nodeList = nodes
    .map((n) => `  - ${n.id}: ${n.title} (L${n.layer}, 難度${n.difficulty}, ${n.estimated_minutes}min)`)
    .join('\n');

  return `你是一位獸醫教育課程設計師。請為「${specialtyName}」設計三條學習路徑。

可用節點：
${nodeList}

邊數量：${edges.length} 條（含 prerequisite 依賴關係）

## 三條路徑

### 1. 新手入門（20-30 小時）
- 目標受眾：獸醫系學生 / 實習獸醫
- 涵蓋 L0-L3 核心 + L4 基礎 + L5 基礎
- 跳過高難度和罕見疾病

### 2. 臨床快速上手（15-20 小時）
- 目標受眾：已畢業、想快速上手的獸醫
- 可跳過 L1 基礎，直接從 L3 常見疾病開始
- 聚焦高 clinical_relevance 節點

### 3. 專科深造（40-60 小時）
- 目標受眾：想深入專科的獸醫
- 涵蓋所有節點
- 含進階診斷和罕見疾病

## 輸出 JSON
{
  "paths": [
    {
      "id": "path_<abbr>_<type>",
      "title": "<路徑名稱>",
      "description": "<簡述>",
      "target_audience": "<目標受眾>",
      "estimated_hours": <number>,
      "path_nodes": [
        {"node_id": "<id>", "is_required": true, "phase": "M1 基礎週", "learning_note": "<選填>"}
      ],
      "milestones": [
        {"id": "m1", "title": "<里程碑名>", "description": "<描述>", "required_nodes": ["<id>"], "checkpoint_type": "quiz", "pass_criteria": "80%"}
      ]
    }
  ]
}

## 重要原則
1. 節點順序必須遵守 prerequisite 邊的依賴關係
2. 每個 milestone 對應一個學習階段
3. is_required=false 的節點為選修加分項`;
}
