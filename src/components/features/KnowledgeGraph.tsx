'use client';

import { useCallback, useEffect, useMemo, useRef } from 'react';
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
import type { KnowledgeNode, KnowledgeEdge } from '@/types/knowledge';
import { LAYER_COLORS, type Layer } from '@/types/knowledge';
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
    const color = LAYER_COLORS[node.layer as Layer] ?? '#6b7280';

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

export function KnowledgeGraph({
  nodes: knowledgeNodes,
  edges: knowledgeEdges,
  onNodeClick,
  highlightPath = [],
  isLoading = false,
  error = null,
  className,
}: KnowledgeGraphProps) {
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
    <div
      role="region"
      aria-label="知識圖譜，點擊節點查看詳情"
      className={cn(
        'h-[500px] w-full rounded-xl border border-gray-200 bg-white',
        className
      )}
    >
      <ReactFlowProvider>
        <KnowledgeGraphInner
          flowNodes={layoutedNodes}
          flowEdges={layoutedEdges}
          onNodeClick={handleNodeClick}
        />
      </ReactFlowProvider>
    </div>
  );
}
