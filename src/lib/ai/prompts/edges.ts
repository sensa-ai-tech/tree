import type { KnowledgeNode } from '@/types/knowledge';

export function buildEdgesPrompt(
  nodes: KnowledgeNode[],
  specialtyAbbr: string
): string {
  const nodeList = nodes
    .map((n) => `  - ${n.id}: ${n.title} (L${n.layer}, ${n.node_type})`)
    .join('\n');

  return `你是一位獸醫知識圖譜架構師。請為「${specialtyAbbr}」專科的以下節點定義關聯邊。

節點列表：
${nodeList}

## 關聯類型
- prerequisite: 前置依賴（必須先學 A 才能學 B）
- builds_on: 延伸進階
- cross_specialty: 跨科相關
- differential: 鑑別比較
- clinical_apply: 臨床應用（理論→臨床）
- complication: 併發關聯
- same_system: 同系統
- drug_related: 藥物相關

## 驗證規則
1. 每個 L3 疾病至少有 1+ prerequisite 到 L1/L2
2. 每個 L3 疾病至少有 1+ clinical_apply 到 L4
3. 每個 L4 診斷至少連到 2+ 個 L3 疾病
4. 不允許環狀 prerequisite

## weight 評分
- 1.0: 核心依賴
- 0.7-0.9: 重要關聯
- 0.4-0.6: 有幫助
- 0.1-0.3: 邊緣關聯

## 輸出 JSON
{
  "edges": [
    {
      "source_node_id": "<id>",
      "target_node_id": "<id>",
      "relation_type": "<type>",
      "weight": <0-1>,
      "description": "<關聯描述>",
      "bidirectional": false
    }
  ],
  "statistics": {
    "total_edges": <number>,
    "edges_by_type": {"prerequisite": <n>, ...},
    "orphan_nodes": ["<無邊節點>"],
    "high_connectivity_nodes": [{"id": "<id>", "count": <n>}]
  }
}`;
}

export function buildCrossSpecialtyEdgesPrompt(
  sourceNodes: KnowledgeNode[],
  targetNodes: KnowledgeNode[]
): string {
  const sourceList = sourceNodes
    .map((n) => `  - ${n.id}: ${n.title} (${n.specialty}, L${n.layer})`)
    .join('\n');
  const targetList = targetNodes
    .map((n) => `  - ${n.id}: ${n.title} (${n.specialty}, L${n.layer})`)
    .join('\n');

  return `你是一位獸醫跨科知識整合專家。請找出以下兩組節點之間的跨科關聯。

來源專科節點：
${sourceList}

目標專科節點：
${targetList}

請只列出有明確醫學關聯的跨科邊，使用 cross_specialty、differential、complication、drug_related 類型。

輸出 JSON 格式同標準邊格式。`;
}
