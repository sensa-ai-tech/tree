import type { KnowledgeNode } from '@/types/knowledge';

export function buildDiagnosticContentPrompt(
  node: KnowledgeNode,
  prerequisites: string[]
): string {
  const prereqSection = prerequisites.length > 0
    ? `\n前置知識：${prerequisites.join('、')}`
    : '';

  return `你是一位獸醫診斷學專家。請為以下診斷方法節點撰寫完整的教學內容。

節點資訊：
- 診斷方法：${node.title}（${node.title_en ?? ''}）
- 專科：${node.specialty}
- 難度：${node.difficulty}/5
- 預估時間：${node.estimated_minutes} 分鐘${prereqSection}

## 輸出格式（JSON）

{
  "summary": "<30 秒摘要>",
  "learning_objectives": ["<3-5 條>"],
  "key_points": ["<5-8 條>"],
  "body": "<Markdown 格式主體>",
  "clinical_pearl": "<臨床小提醒>",
  "common_mistakes": ["<常見判讀錯誤>"],
  "diagnostic_data": {
    "indication": ["<適應症>"],
    "contraindication": ["<禁忌>"],
    "technique": "<操作技術描述（步驟式）>",
    "normal_findings": [
      {"finding": "<正常表現>", "description": "<描述>", "significance": "<臨床意義>"}
    ],
    "abnormal_findings": [
      {"finding": "<異常表現>", "description": "<描述>", "significance": "<可能代表的疾病>"}
    ],
    "interpretation_guide": "<系統性判讀指引>",
    "pitfalls": ["<判讀陷阱>"],
    "sensitivity_specificity": "<敏感度/特異度資訊>",
    "cost_benefit": "<成本效益分析>"
  },
  "visual_placeholders": [],
  "interactive_placeholders": [],
  "references": []
}

## 重要原則
1. 操作技術須可實際操作
2. 正常/異常表現盡可能配圖（使用 [圖片:描述]）
3. 判讀指引要系統化（Step-by-step）
4. 列出常見判讀陷阱
5. 考量台灣診所實務（設備可及性）`;
}
