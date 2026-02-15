import type { KnowledgeNode } from '@/types/knowledge';

export function buildVisualsPrompt(node: KnowledgeNode): string {
  return `你是一位獸醫教育視覺設計師。請為以下節點設計視覺輔助素材規格。

節點：${node.title}（${node.title_en ?? ''}）
類型：${node.node_type}
層級：Layer ${node.layer}

## 可用圖像類型
- annotated_image: 標註式圖片（解剖、影像判讀）
- flowchart: 流程圖（診斷決策、治療流程）
- comparison_table: 視覺化比較表
- timeline: 時間軸（疾病進程）
- animated_diagram: 動態圖（機轉演示）
- interactive_overlay: 互動覆蓋層
- waveform: 波形圖（ECG、血壓）
- mind_map: 心智圖

## 輸出 JSON
{
  "visuals": [
    {
      "type": "<visual_type>",
      "data": {
        "title": "<圖標題>",
        "description": "<詳細規格描述>",
        "elements": ["<元素1>", "<元素2>"],
        "labels": ["<標注1>", "<標注2>"],
        "notes": "<製作備註>"
      },
      "caption": "<圖說>",
      "alt_text": "<無障礙替代文字>",
      "priority": 1
    }
  ]
}

請為此節點建議 2-4 個最有教學價值的視覺輔助。`;
}

export function buildMermaidPrompt(
  title: string,
  content: string
): string {
  return `請將以下內容轉換為 Mermaid 流程圖語法。

主題：${title}
內容：${content}

輸出純 Mermaid 語法（不要 code block 包裹），使用 graph TD 或 flowchart TD 格式。
節點標籤使用繁體中文。`;
}
