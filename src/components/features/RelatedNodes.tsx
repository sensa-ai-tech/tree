'use client';

import Link from 'next/link';
import { ArrowRight, GitBranch } from 'lucide-react';
import type { KnowledgeNode, KnowledgeEdge } from '@/types/knowledge';
import { LAYER_COLORS, type Layer } from '@/types/knowledge';
import { cn } from '@/lib/utils/cn';

const EDGE_TYPE_LABELS: Record<string, string> = {
  prerequisite: '前置知識',
  builds_on: '進階延伸',
  cross_specialty: '跨科關聯',
  differential: '鑑別診斷',
  clinical_apply: '臨床應用',
  complication: '併發症',
  same_system: '同系統',
  drug_related: '藥物相關',
};

interface RelatedNodesProps {
  currentNodeId: string;
  edges: KnowledgeEdge[];
  allNodes: KnowledgeNode[];
  className?: string;
}

export function RelatedNodes({ currentNodeId, edges, allNodes, className }: RelatedNodesProps) {
  // 找出與當前節點相連的所有邊
  const relatedEdges = edges.filter(
    (e) => e.source_node_id === currentNodeId || e.target_node_id === currentNodeId
  );

  if (relatedEdges.length === 0) return null;

  // 建立 nodeId → KnowledgeNode 查找表
  const nodeMap = new Map(allNodes.map((n) => [n.id, n]));

  // 整理成顯示用結構
  const relatedItems = relatedEdges
    .map((edge) => {
      const isSource = edge.source_node_id === currentNodeId;
      const relatedNodeId = isSource ? edge.target_node_id : edge.source_node_id;
      const relatedNode = nodeMap.get(relatedNodeId);
      if (!relatedNode) return null;
      return {
        node: relatedNode,
        edgeType: edge.relation_type,
        direction: isSource ? 'outgoing' as const : 'incoming' as const,
      };
    })
    .filter(Boolean) as Array<{
      node: KnowledgeNode;
      edgeType: string;
      direction: 'incoming' | 'outgoing';
    }>;

  if (relatedItems.length === 0) return null;

  return (
    <div className={cn('space-y-3', className)}>
      <div className="flex items-center gap-2">
        <GitBranch className="h-4 w-4 text-gray-500" />
        <h3 className="text-base font-semibold text-gray-900">相關知識節點</h3>
        <span className="rounded-full bg-gray-100 px-2 py-0.5 text-xs text-gray-500">
          {relatedItems.length}
        </span>
      </div>

      <div className="grid gap-2 sm:grid-cols-2">
        {relatedItems.slice(0, 6).map(({ node, edgeType, direction }) => {
          const layerColor = LAYER_COLORS[node.layer as Layer] ?? '#6b7280';
          return (
            <Link
              key={node.id}
              href={`/nodes/${node.id}`}
              className="group flex items-center gap-3 rounded-lg border border-gray-100 bg-white p-3 transition-all hover:border-indigo-200 hover:bg-indigo-50/50 hover:shadow-sm"
            >
              {/* Layer 色條 */}
              <div
                className="h-10 w-1 rounded-full flex-shrink-0"
                style={{ backgroundColor: layerColor }}
              />
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-medium text-gray-900 group-hover:text-indigo-700">
                  {node.title}
                </p>
                <p className="text-xs text-gray-500">
                  <span className="inline-flex items-center gap-1">
                    {direction === 'incoming' ? '←' : '→'}
                    {EDGE_TYPE_LABELS[edgeType] ?? edgeType}
                  </span>
                  {' · '}L{node.layer}
                </p>
              </div>
              <ArrowRight className="h-4 w-4 flex-shrink-0 text-gray-300 group-hover:text-indigo-400 transition-colors" />
            </Link>
          );
        })}
      </div>

      {relatedItems.length > 6 && (
        <p className="text-xs text-gray-400 text-center">
          還有 {relatedItems.length - 6} 個相關節點
        </p>
      )}
    </div>
  );
}
