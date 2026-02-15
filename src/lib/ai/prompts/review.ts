export function buildContentReviewPrompt(
  nodeTitle: string,
  contentJson: string
): string {
  return `你是一位資深獸醫教育審核專家。請審核以下教學內容的品質。

節點：${nodeTitle}

內容 JSON：
${contentJson}

## 審核項目

### 1. 醫學準確性 (0-100)
- 事實是否正確
- 藥物劑量是否準確
- 分期系統是否為最新版本

### 2. 完整性 (0-100)
- 是否涵蓋所有必要面向
- 是否有遺漏的重要資訊

### 3. 教學品質 (0-100)
- 學習目標是否使用 Bloom's Taxonomy
- 內容是否循序漸進
- 是否有足夠的臨床連結

### 4. 一致性 (0-100)
- 術語使用是否一致
- 與其他節點的交叉引用是否正確

## 輸出 JSON
{
  "scores": {
    "accuracy": <0-100>,
    "completeness": <0-100>,
    "teaching_quality": <0-100>,
    "consistency": <0-100>,
    "overall": <0-100>
  },
  "review_status": "approved|minor_revision|major_revision|reject",
  "issues": [
    {"severity": "critical|major|minor", "location": "<位置>", "description": "<問題描述>", "suggestion": "<修改建議>"}
  ],
  "strengths": ["<優點>"],
  "summary": "<審核摘要>"
}`;
}

export function buildQuestionReviewPrompt(
  nodeTitle: string,
  questionsJson: string
): string {
  return `你是一位獸醫考試品質審核專家。請審核以下題庫品質。

節點：${nodeTitle}

題目 JSON：
${questionsJson}

## 審核項目
1. 題幹品質：是否清晰、無歧義
2. 選項品質：錯誤選項是否為合理迷思
3. 解釋品質：是否完整說明對錯理由
4. 正確答案分佈：是否均勻
5. 難度適當性：是否符合標注難度

## 輸出 JSON
{
  "scores": {
    "stem_quality": <0-100>,
    "option_quality": <0-100>,
    "explanation_quality": <0-100>,
    "distribution": <0-100>,
    "overall": <0-100>
  },
  "review_status": "approved|minor_revision|major_revision|reject",
  "issues": [
    {"question_index": <n>, "severity": "critical|major|minor", "description": "<問題>", "suggestion": "<建議>"}
  ],
  "answer_distribution": {"A": <n>, "B": <n>, "C": <n>, "D": <n>}
}`;
}
