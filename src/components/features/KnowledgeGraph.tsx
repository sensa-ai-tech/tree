'use client';

import { useCallback, useEffect, useMemo, useRef } from 'react';
import ReactFlow, {
  Background,
  Controls,
  MarkerType,
  ReactFlowProvider,
  useReactFlow,
  type Node,
  type Edge,
  type NodeMouseHandler,
} from 'reactflow';
import 'reactflow/dist/style.css';
import type { KnowledgeNode, KnowledgeEdge } from '@/types/knowledge';
import { LAYER_COLORS, type Layer } from '@/types/knowledge';
import { Skeleton } from '@/components/ui/Skeleton';
import { cn } from '@/lib/utils/cn';
import { KnowledgeNodeComponent } from './KnowledgeNodeComponent';
import type { KnowledgeNodeData } from './KnowledgeNodeComponent';
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
): Node<KnowledgeNodeData>[] {
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

/** Inner component that uses useReactFlow to auto-fitView on node changes */
function KnowledgeGraphInner({
  flowNodes,
  flowEdges,
  onNodeClick,
}: {
  flowNodes: Node<KnowledgeNodeData>[];
  flowEdges: Edge[];
  onNodeClick?: NodeMouseHandler;
}) {
  const { fitView } = useReactFlow();
  const prevNodeCountRef = useRef(flowNodes.length);

  useEffect(() => {
    if (flowNodes.length !== prevNodeCountRef.current) {
      prevNodeCountRef.current = flowNodes.length;
      // Delay to let ReactFlow update internal node positions (increased from 50ms to 200ms)
      const timer = setTimeout(() => {
        fitView({ padding: 0.2, duration: 300 });
      }, 200);
      return () => clearTimeout(timer);
    }
  }, [flowNodes.length, fitView]);

  return (
    <ReactFlow
      nodes={flowNodes}
      edges={flowEdges}
      onNodeClick={onNodeClick}
      nodeTypes={NODE_TYPES}
      edgeTypes={DEFAULT_EDGE_TYPES}
      fitView
      fitViewOptions={{ padding: 0.2 }}
      minZoom={0.1}
      maxZoom={2}
      attributionPosition="bottom-left"
      onInit={() => {
        // 備援 fitView：onInit 時也觸發一次，確保首次載入正確
        setTimeout(() => {
          fitView({ padding: 0.2, duration: 300 });
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

    const { nodes: ln, edges: le } = getLayoutedElements(rawNodes, rawEdges, {
      direction: 'TB',
      nodeWidth: 180,
      nodeHeight: 56,
      rankSep: 80,
      nodeSep: 40,
    });

    return { layoutedNodes: ln, layoutedEdges: le };
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
      <div className={cn('space-y-4', className)}>
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
