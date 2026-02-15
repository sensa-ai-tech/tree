import type { KnowledgeNode } from '@/types/knowledge';

export function buildConceptContentPrompt(
  node: KnowledgeNode,
  prerequisites: string[]
): string {
  const prereqSection = prerequisites.length > 0
    ? `\n前置知識：${prerequisites.join('、')}`
    : '';

  const wordCount = node.difficulty <= 2 ? '800-1200' : node.difficulty === 3 ? '1200-1800' : '1800-2500';

  return `你是一位獸醫專科教育內容專家。請為以下知識節點撰寫完整的教學內容。

節點資訊：
- 標題：${node.title}（${node.title_en ?? ''}）
- 專科：${node.specialty}
- 層級：Layer ${node.layer}
- 類型：${node.node_type}（概念/機轉型）
- 難度：${node.difficulty}/5
- 預估時間：${node.estimated_minutes} 分鐘${prereqSection}

## 輸出格式（JSON）

{
  "summary": "<30 秒可讀完的一段話摘要>",
  "learning_objectives": [
    "<使用 Bloom's Taxonomy 動詞，3-5 條>"
  ],
  "key_points": [
    "<5-8 條核心要點>"
  ],
  "body": "<Markdown 格式主體內容，約 ${wordCount} 字>",
  "clinical_pearl": "<一條臨床小提醒>",
  "common_mistakes": [
    "<常見錯誤觀念或迷思>"
  ],
  "visual_placeholders": [
    {"position": "<在 body 中的位置描述>", "type": "<圖表類型>", "description": "<圖像內容描述>"}
  ],
  "interactive_placeholders": [
    {"position": "<位置>", "type": "<互動類型>", "description": "<互動內容描述>"}
  ],
  "references": [
    {"type": "textbook|journal|guideline", "citation": "<參考文獻>", "relevance": "<與本節點的關聯>"}
  ]
}

## 寫作原則
1. 使用繁體中文，專業術語附英文原文
2. 語氣專業但易懂，適合獸醫系學生
3. body 中使用 [藥物:藥名] 標記藥物名稱
4. body 中使用 [圖片:描述] 標記建議插圖位置
5. body 中使用 [互動:描述] 標記互動元件位置
6. 引用台灣本土流行病學數據（如有）`;
}
