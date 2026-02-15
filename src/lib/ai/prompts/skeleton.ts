import type { SkeletonInput } from '@/types/knowledge';

export function buildSkeletonPrompt(input: SkeletonInput): string {
  return `你是一位獸醫專科知識架構師。請為「${input.specialty_name}（${input.specialty_name_en}）」建構完整的六層知識樹骨架。

## 輸出格式要求
請以 JSON 格式回傳，結構如下：

{
  "specialty": "${input.specialty_abbr}",
  "total_nodes": <number>,
  "estimated_total_hours": <number>,
  "nodes": [
    {
      "id": "${input.specialty_abbr}_<3位數編號>",
      "specialty": "${input.specialty_abbr}",
      "title": "<中文標題>",
      "title_en": "<English Title>",
      "layer": <0-5>,
      "node_type": "<concept|mechanism|disease|diagnostic|therapeutic|procedure|case_study|decision_tree>",
      "difficulty": <1-5>,
      "estimated_minutes": <number>,
      "clinical_relevance": <1-5>,
      "exam_relevance": <1-5>,
      "tags": ["<tag1>", "<tag2>"]
    }
  ],
  "validation_report": {
    "completeness_score": <0-1>,
    "issues_found": [],
    "taiwan_specific_additions": []
  }
}

## 六層結構
- Layer 0: 學科總覽（1-2 個節點）
- Layer 1: 基礎科學（解剖/組織/生理/生化，5-10 個）
- Layer 2: 病理機轉（4-8 個）
- Layer 3: 臨床疾病各論（15-25 個，含台灣常見疾病）
- Layer 4: 診斷方法論（8-15 個）
- Layer 5: 治療與管理（10-20 個）

## 重要原則
1. 以台灣獸醫臨床實務為基準
2. 特別標注台灣高盛行率疾病（如心絲蟲）
3. node_type 須與 layer 對應合理
4. 難度分佈應涵蓋 1-5 各等級
5. estimated_minutes 範圍 15-90 分鐘
6. 總節點數建議 40-80 個`;
}

export function buildSkeletonValidationPrompt(
  skeletonJson: string,
  specialtyName: string
): string {
  return `你是一位資深獸醫教育專家。請審核以下「${specialtyName}」知識樹骨架的完整性與準確性。

骨架 JSON：
${skeletonJson}

請檢查：
1. 醫學準確性：節點名稱和分類是否正確
2. 完整性：是否遺漏重要疾病或診斷方法
3. 台灣在地化：是否包含台灣特有或高盛行率的疾病
4. 層級合理性：每個節點的 layer 和 node_type 是否匹配
5. 難度分佈：是否涵蓋各難度等級

以 JSON 格式回傳修正建議：
{
  "completeness_score": <0-1>,
  "issues_found": ["<issue1>", "<issue2>"],
  "taiwan_specific_additions": ["<addition1>"],
  "suggested_additions": [<node objects to add>],
  "suggested_modifications": [{"id": "<node_id>", "field": "<field>", "old_value": "<old>", "new_value": "<new>"}]
}`;
}

export function buildBatchSkeletonPrompt(
  specialties: SkeletonInput[]
): string {
  const list = specialties
    .map((s) => `- ${s.specialty_name}（${s.specialty_name_en}，縮寫: ${s.specialty_abbr}）`)
    .join('\n');

  return `你是一位獸醫專科知識架構師。請為以下多個專科同時建構知識樹骨架：

${list}

每個專科請遵循標準六層結構（Layer 0-5），並注意跨科節點的一致性。

以 JSON 陣列格式回傳，每個元素結構同單一專科骨架格式。`;
}
