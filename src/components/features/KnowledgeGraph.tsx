'use client';

import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import {
  ReactFlow,
  Background,
  Controls,
  MarkerType,
  ReactFlowProvider,
  useReactFlow,
  useNodesState,
  useEdgesState,
  type Node,
  type Edge,
  type NodeMouseHandler,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { List, Network } from 'lucide-react';
import type { KnowledgeNode, KnowledgeEdge } from '@/types/knowledge';
import { LAYER_COLORS } from '@/types/knowledge';
import { Skeleton } from '@/components/ui/Skeleton';
import { cn } from '@/lib/utils/cn';
import { KnowledgeNodeComponent } from './KnowledgeNodeComponent';
import type { KnowledgeFlowNode } from './KnowledgeNodeComponent';
import { getLayoutedElements } from '@/lib/utils/dagre-layout';

interface KnowledgeGraphProps {
  nodes: KnowledgeNode[];
  edges: KnowledgeEdge[];
  onNodeClick?: (nodeId: string) => void;
  highlightPath?: string[];
  isLoading?: boolean;
  error?: string | null;
  className?: string;
}

// 在元件外部定義，避免每次渲染創建新物件觸發 React Flow 警告
const NODE_TYPES = { knowledge: KnowledgeNodeComponent };
const DEFAULT_EDGE_TYPES = {};

function buildFlowNodes(
  knowledgeNodes: KnowledgeNode[],
  highlightPath: string[]
): KnowledgeFlowNode[] {
  return knowledgeNodes.map((node) => {
    const isHighlighted = highlightPath.includes(node.id);
    const color = LAYER_COLORS[node.layer] ?? '#6b7280';

    return {
      id: node.id,
      type: 'knowledge',
      // 初始位置 (0,0)，dagre 會覆寫
      position: { x: 0, y: 0 },
      data: {
        label: node.title,
        color,
        isHighlighted,
        layer: node.layer,
      },
    };
  });
}

function buildFlowEdges(knowledgeEdges: KnowledgeEdge[]): Edge[] {
  return knowledgeEdges.map((edge) => ({
    id: edge.id,
    source: edge.source_node_id,
    target: edge.target_node_id,
    label: edge.description ?? undefined,
    animated: edge.relation_type === 'prerequisite',
    style: {
      stroke: edge.relation_type === 'prerequisite' ? '#6366f1' : '#9ca3af',
      strokeWidth: Math.max(1, edge.weight),
    },
    markerEnd: edge.bidirectional
      ? undefined
      : { type: MarkerType.ArrowClosed },
  }));
}

/** Inner component。
 *
 * 為什麼用 useNodesState / useEdgesState 而非直接傳 props：
 * React Flow v11 + React 19 環境下，純 controlled mode（只傳 nodes/edges prop）
 * 在 props 後續更新時，edges 不會被加入內部 lookup，導致 SVG 中的 edge path 始終為空。
 * 改用 useNodesState/useEdgesState 並透過 useEffect 同步 props，可解這個渲染斷層。
 */
function KnowledgeGraphInner({
  flowNodes,
  flowEdges,
  onNodeClick,
}: {
  flowNodes: KnowledgeFlowNode[];
  flowEdges: Edge[];
  onNodeClick?: NodeMouseHandler;
}) {
  const { fitView } = useReactFlow();
  const [nodes, setNodes, onNodesChange] = useNodesState(flowNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(flowEdges);
  const prevNodeCountRef = useRef(flowNodes.length);

  // 同步 props 變動到內部 state
  useEffect(() => {
    setNodes(flowNodes);
  }, [flowNodes, setNodes]);

  useEffect(() => {
    setEdges(flowEdges);
  }, [flowEdges, setEdges]);

  useEffect(() => {
    if (flowNodes.length !== prevNodeCountRef.current) {
      prevNodeCountRef.current = flowNodes.length;
      const timer = setTimeout(() => {
        fitView({ padding: 0.15, duration: 300 });
      }, 200);
      return () => clearTimeout(timer);
    }
  }, [flowNodes.length, fitView]);

  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onNodeClick={onNodeClick}
      nodeTypes={NODE_TYPES}
      edgeTypes={DEFAULT_EDGE_TYPES}
      fitView
      fitViewOptions={{ padding: 0.15 }}
      minZoom={0.1}
      maxZoom={3}
      attributionPosition="bottom-left"
      onInit={() => {
        setTimeout(() => {
          fitView({ padding: 0.15, duration: 300 });
        }, 300);
      }}
    >
      <Background color="#e5e7eb" gap={20} />
      <Controls />
    </ReactFlow>
  );
}

/** A15 fix: keyboard-accessible list view for screen readers / keyboard-only users */
function KnowledgeGraphListView({
  nodes,
  onNodeClick,
}: {
  nodes: KnowledgeNode[];
  onNodeClick?: (nodeId: string) => void;
}) {
  // Group nodes by specialty prefix (e.g., CARDIO, IM, SURG)
  const grouped = useMemo(() => {
    const map = new Map<string, KnowledgeNode[]>();
    for (const node of nodes) {
      const specialty = node.id.split('-')[0] ?? '其他';
      if (!map.has(specialty)) map.set(specialty, []);
      map.get(specialty)!.push(node);
    }
    return Array.from(map.entries()).sort(([a], [b]) => a.localeCompare(b));
  }, [nodes]);

  return (
    <div className="overflow-y-auto rounded-xl border border-gray-200 bg-white p-4">
      <p className="mb-3 text-xs text-gray-500">
        共 {nodes.length} 個知識節點 — 點擊節點可查看詳情
      </p>
      {grouped.map(([specialty, groupNodes]) => (
        <section key={specialty} className="mb-4">
          <h3 className="mb-1.5 text-xs font-semibold uppercase tracking-wide text-gray-500">
            {specialty}
          </h3>
          <ul className="space-y-1">
            {groupNodes.map((node) => {
              const color = LAYER_COLORS[node.layer] ?? '#6b7280';
              return (
                <li key={node.id}>
                  <button
                    type="button"
                    onClick={() => onNodeClick?.(node.id)}
                    className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-left text-sm hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
                  >
                    <span
                      className="h-2.5 w-2.5 flex-shrink-0 rounded-full"
                      style={{ backgroundColor: color }}
                      aria-hidden="true"
                    />
                    <span className="flex-1 font-medium text-gray-900">{node.title}</span>
                    <span className="text-xs text-gray-400">L{node.layer}</span>
                  </button>
                </li>
              );
            })}
          </ul>
        </section>
      ))}
    </div>
  );
}

export function KnowledgeGraph({
  nodes: knowledgeNodes,
  edges: knowledgeEdges,
  onNodeClick,
  highlightPath = [],
  isLoading = false,
  error = null,
  className,
}: KnowledgeGraphProps) {
  // A15 fix: toggle between visual graph and accessible list view
  const [viewMode, setViewMode] = useState<'graph' | 'list'>('graph');
  // 使用 dagre 佈局計算節點位置
  const { layoutedNodes, layoutedEdges } = useMemo(() => {
    const rawNodes = buildFlowNodes(knowledgeNodes, highlightPath);
    const rawEdges = buildFlowEdges(knowledgeEdges);

    if (rawNodes.length === 0) {
      return { layoutedNodes: rawNodes, layoutedEdges: rawEdges };
    }

    const { nodes: ln, edges: le } = getLayoutedElements(rawNodes as Node[], rawEdges, {
      direction: 'TB',
      nodeWidth: 260,
      nodeHeight: 80,
      rankSep: 120,
      nodeSep: 60,
    });

    return { layoutedNodes: ln as KnowledgeFlowNode[], layoutedEdges: le };
  }, [knowledgeNodes, knowledgeEdges, highlightPath]);

  const handleNodeClick: NodeMouseHandler = useCallback(
    (_event, node) => {
      onNodeClick?.(node.id);
    },
    [onNodeClick]
  );

  // Loading state
  if (isLoading) {
    return (
      <div aria-busy="true" aria-label="知識圖譜載入中" className={cn('space-y-4', className)}>
        <Skeleton variant="rectangular" height={400} />
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div
        className={cn(
          'flex h-96 items-center justify-center rounded-xl border border-red-200 bg-red-50',
          className
        )}
      >
        <div className="text-center">
          <p className="text-sm font-medium text-red-700">
            載入知識圖譜時發生錯誤
          </p>
          <p className="mt-1 text-xs text-red-500">{error}</p>
        </div>
      </div>
    );
  }

  // Empty state
  if (knowledgeNodes.length === 0) {
    return (
      <div
        className={cn(
          'flex h-96 items-center justify-center rounded-xl border border-gray-200 bg-gray-50',
          className
        )}
      >
        <div className="text-center">
          <p className="text-sm font-medium text-gray-500">尚無知識節點</p>
          <p className="mt-1 text-xs text-gray-400">
            新增節點後即可看到知識圖譜
          </p>
        </div>
      </div>
    );
  }

  return (
    <div role="region" aria-label="知識圖譜" className={cn('w-full', className)}>
      {/* A15: view-mode toggle — always visible for keyboard users */}
      <div className="mb-2 flex justify-end">
        <div role="group" aria-label="圖譜顯示模式" className="inline-flex rounded-lg border border-gray-200 bg-white p-0.5 shadow-sm">
          <button
            type="button"
            onClick={() => setViewMode('graph')}
            aria-pressed={viewMode === 'graph'}
            className={cn(
              'flex items-center gap-1.5 rounded-md px-3 py-1.5 text-xs font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500',
              viewMode === 'graph'
                ? 'bg-indigo-600 text-white'
                : 'text-gray-600 hover:bg-gray-50'
            )}
          >
            <Network className="h-3.5 w-3.5" aria-hidden="true" />
            圖譜
          </button>
          <button
            type="button"
            onClick={() => setViewMode('list')}
            aria-pressed={viewMode === 'list'}
            className={cn(
              'flex items-center gap-1.5 rounded-md px-3 py-1.5 text-xs font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500',
              viewMode === 'list'
                ? 'bg-indigo-600 text-white'
                : 'text-gray-600 hover:bg-gray-50'
            )}
          >
            <List className="h-3.5 w-3.5" aria-hidden="true" />
            清單
          </button>
        </div>
      </div>

      {viewMode === 'list' ? (
        <KnowledgeGraphListView nodes={knowledgeNodes} onNodeClick={onNodeClick} />
      ) : (
        <div
          aria-label="知識圖譜視覺化，可使用上方「清單」按鈕切換至無障礙版本"
          className="h-[500px] w-full rounded-xl border border-gray-200 bg-white"
        >
          <ReactFlowProvider>
            <KnowledgeGraphInner
              flowNodes={layoutedNodes}
              flowEdges={layoutedEdges}
              onNodeClick={handleNodeClick}
            />
          </ReactFlowProvider>
        </div>
      )}
    </div>
  );
}
