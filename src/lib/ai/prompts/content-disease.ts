import type { KnowledgeNode } from '@/types/knowledge';

export function buildDiseaseContentPrompt(
  node: KnowledgeNode,
  prerequisites: string[]
): string {
  const prereqSection = prerequisites.length > 0
    ? `\n前置知識：${prerequisites.join('、')}`
    : '';

  const wordCount = node.difficulty <= 2 ? '800-1200' : node.difficulty === 3 ? '1200-1800' : '1800-2500';

  return `你是一位獸醫內科專家與教育內容撰寫者。請為以下疾病節點撰寫完整的 14 區塊教學內容。

節點資訊：
- 疾病名稱：${node.title}（${node.title_en ?? ''}）
- 專科：${node.specialty}
- 難度：${node.difficulty}/5
- 預估時間：${node.estimated_minutes} 分鐘${prereqSection}

## 輸出格式（JSON）

{
  "summary": "<30 秒摘要>",
  "learning_objectives": ["<3-5 條>"],
  "key_points": ["<5-8 條>"],
  "body": "<Markdown 格式主體，約 ${wordCount} 字>",
  "clinical_pearl": "<臨床小提醒>",
  "common_mistakes": ["<常見錯誤>"],
  "disease_data": {
    "signalment": "<好發品種/年齡/性別>",
    "etiology": "<病因學>",
    "pathogenesis": "<發病機轉>",
    "clinical_signs": [
      {"sign": "<症狀>", "category": "primary|secondary", "description": "<描述>"}
    ],
    "staging": {"system": "<分期系統名稱>", "stages": ["<Stage I>", "<Stage II>"]} 或 null,
    "differential_diagnosis": [
      {"condition": "<鑑別疾病>", "key_differentiator": "<區分要點>"}
    ],
    "diagnostic_workup": "<診斷計畫步驟>",
    "treatment_protocol": "<治療方案>",
    "prognosis": "<預後資訊>",
    "monitoring": "<追蹤計畫>",
    "owner_communication": "<飼主溝通要點>"
  },
  "visual_placeholders": [],
  "interactive_placeholders": [],
  "references": []
}

## 重要原則
1. 疾病描述以犬貓為主，註明物種差異
2. 藥物劑量必須準確，使用 [藥物:藥名] 標記
3. 分期系統使用國際通用標準（如 ACVIM 分期）
4. 鑑別診斷至少列出 3-5 個
5. 飼主溝通要點要實用且具同理心
6. 台灣特殊考量（如心絲蟲高盛行區）需標注`;
}
