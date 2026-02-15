import type { KnowledgeNode } from '@/types/knowledge';

export function buildQuestionsPrompt(
  node: KnowledgeNode,
  contentSummary: string,
  keyPoints: string[]
): string {
  const keyPointsList = keyPoints.map((p, i) => `  ${i + 1}. ${p}`).join('\n');

  return `你是一位獸醫考試出題專家。請為以下知識節點設計複習題。

節點：${node.title}（${node.title_en ?? ''}）
難度：${node.difficulty}/5
摘要：${contentSummary}

核心要點：
${keyPointsList}

## 出題要求

請生成以下題型：
1. **5 題選擇題 (MCQ)**：4 個選項，無負面題幹
2. **3 題是非題**
3. **2 題填空題**
4. **1 題圖片標注**（預留，提供文字描述）
5. **2 題臨床情境題**

## 輸出 JSON
{
  "questions": [
    {
      "question_type": "mcq|true_false|fill_blank|image_label|case_based",
      "question": "<題目>",
      "options": ["A. ...", "B. ...", "C. ...", "D. ..."],
      "correct_answer": "A",
      "explanation": "<為什麼對 + 為什麼其他選項錯>",
      "difficulty": ${node.difficulty},
      "spaced_rep": true,
      "tags": ["<tag>"]
    }
  ]
}

## 品質要求
1. 錯誤選項必須是常見迷思，不是荒謬選項
2. 正確答案位置分佈均勻（不都是 B）
3. 每題附完整解釋
4. 難度可上下浮動 1 級
5. 情境題使用不同物種/品種的病例`;
}
