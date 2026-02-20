/**
 * dagre 佈局工具函數
 *
 * 使用 dagre 自動計算節點在有向圖中的位置，
 * 取代手動 grid 排版，確保節點不重疊且層級分明。
 */

import dagre from '@dagrejs/dagre';
import type { Node, Edge } from 'reactflow';

interface LayoutOptions {
  direction?: 'TB' | 'BT' | 'LR' | 'RL';
  nodeWidth?: number;
  nodeHeight?: number;
  rankSep?: number;
  nodeSep?: number;
}

const DEFAULT_OPTIONS: Required<LayoutOptions> = {
  direction: 'TB',
  nodeWidth: 180,
  nodeHeight: 56,
  rankSep: 80,
  nodeSep: 40,
};

/**
 * 使用 dagre 計算 ReactFlow 節點的佈局位置。
 *
 * @param nodes - ReactFlow 節點陣列（位置會被覆寫）
 * @param edges - ReactFlow 邊陣列
 * @param options - 佈局設定
 * @returns 帶有正確位置的 { nodes, edges }
 */
export function getLayoutedElements(
  nodes: Node[],
  edges: Edge[],
  options: LayoutOptions = {}
): { nodes: Node[]; edges: Edge[] } {
  const opts = { ...DEFAULT_OPTIONS, ...options };

  const g = new dagre.graphlib.Graph();
  g.setDefaultEdgeLabel(() => ({}));
  g.setGraph({
    rankdir: opts.direction,
    ranksep: opts.rankSep,
    nodesep: opts.nodeSep,
    marginx: 20,
    marginy: 20,
  });

  // 加入所有節點
  for (const node of nodes) {
    g.setNode(node.id, {
      width: opts.nodeWidth,
      height: opts.nodeHeight,
    });
  }

  // 加入所有邊
  for (const edge of edges) {
    g.setEdge(edge.source, edge.target);
  }

  // 執行佈局計算
  dagre.layout(g);

  // 將 dagre 計算的位置寫回 ReactFlow 節點
  const layoutedNodes = nodes.map((node) => {
    const nodeWithPosition = g.node(node.id);
    if (!nodeWithPosition) return node;

    return {
      ...node,
      position: {
        // dagre 回傳的是節點中心點，ReactFlow 需要左上角
        x: nodeWithPosition.x - opts.nodeWidth / 2,
        y: nodeWithPosition.y - opts.nodeHeight / 2,
      },
    };
  });

  return { nodes: layoutedNodes, edges };
}
