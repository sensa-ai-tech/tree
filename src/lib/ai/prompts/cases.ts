import type { KnowledgeNode } from '@/types/knowledge';

export function buildCasePrompt(
  relatedNodes: KnowledgeNode[],
  specialty: string,
  difficulty: number,
  species: string
): string {
  const nodeList = relatedNodes
    .map((n) => `  - ${n.id}: ${n.title}`)
    .join('\n');

  return `你是一位資深獸醫臨床教學專家。請設計一個 7 步驟互動式病例闖關。

相關知識節點：
${nodeList}

專科：${specialty}
難度：${difficulty}/5
物種：${species}

## 7 步驟闖關流程

1. **病史收集** (history_collection)：呈現信號，學生選擇要問的病史問題
2. **理學檢查** (physical_examination)：選擇要執行的檢查，揭露發現
3. **鑑別診斷** (differential_diagnosis)：列出鑑別診斷清單並排序
4. **診斷計畫** (diagnostic_plan)：選擇要執行的檢查
5. **結果判讀** (result_interpretation)：判讀檢查結果
6. **治療計畫** (treatment_plan)：制定治療方案
7. **病例總結** (case_summary)：回顧關鍵決策點

## 輸出 JSON
{
  "title": "<病例標題>",
  "specialty": "${specialty}",
  "cross_specialties": ["<跨科>"],
  "required_nodes": [${relatedNodes.map((n) => `"${n.id}"`).join(', ')}],
  "difficulty": ${difficulty},
  "species": "${species}",
  "scenario": {
    "signalment": "<物種/品種/年齡/性別/體重>",
    "chief_complaint": "<主訴>",
    "brief_history": "<簡短病史>"
  },
  "steps": [
    {
      "step_number": 1,
      "step_type": "history_collection",
      "title": "<步驟標題>",
      "prompt": "<情境描述與提問>",
      "available_actions": ["<可選動作1>", "<可選動作2>", ...],
      "correct_actions": ["<正確動作>"],
      "feedback_correct": "<正確回饋>",
      "feedback_incorrect": "<錯誤回饋>",
      "key_learning_points": ["<學習重點>"]
    }
  ],
  "expert_pathway": {
    "reasoning": "<專家思路>",
    "key_decisions": ["<關鍵決策>"],
    "common_pitfalls": ["<常見陷阱>"]
  },
  "related_nodes_for_review": [${relatedNodes.map((n) => `"${n.id}"`).join(', ')}],
  "tags": ["<tag>"]
}

## 原則
1. 病例要真實可信
2. 每步至少提供 4 個可選動作
3. 正確動作可能多於一個
4. 回饋要具教育性
5. 考量台灣臨床實務情境`;
}
