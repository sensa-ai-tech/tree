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

interface KnowledgeGraphProps {
  nodes: KnowledgeNode[];
  edges: KnowledgeEdge[];
  onNodeClick?: (nodeId: string) => void;
  highlightPath?: string[];
  isLoading?: boolean;
  error?: string | null;
  className?: string;
}

const LAYER_Y_OFFSET = 150;
const NODE_X_SPACING = 220;

// 在元件外部定義，避免每次渲染創建新物件觸發 React Flow 警告
const DEFAULT_NODE_TYPES = {};
const DEFAULT_EDGE_TYPES = {};

function buildFlowNodes(
  knowledgeNodes: KnowledgeNode[],
  highlightPath: string[]
): Node[] {
  const nodesByLayer = new Map<number, KnowledgeNode[]>();
  for (const node of knowledgeNodes) {
    const layerNodes = nodesByLayer.get(node.layer) ?? [];
    layerNodes.push(node);
    nodesByLayer.set(node.layer, layerNodes);
  }

  const flowNodes: Node[] = [];

  for (const [layer, layerNodes] of nodesByLayer) {
    layerNodes.forEach((node, index) => {
      const isHighlighted = highlightPath.includes(node.id);
      const color = LAYER_COLORS[layer as Layer] ?? '#6b7280';

      flowNodes.push({
        id: node.id,
        position: {
          x: index * NODE_X_SPACING,
          y: layer * LAYER_Y_OFFSET,
        },
        data: { label: node.title },
        style: {
          background: isHighlighted ? color : `${color}33`,
          color: isHighlighted ? '#ffffff' : '#1f2937',
          border: `2px solid ${color}`,
          borderRadius: '8px',
          padding: '8px 12px',
          fontSize: '12px',
          fontWeight: isHighlighted ? 600 : 400,
          minWidth: '120px',
          textAlign: 'center' as const,
          boxShadow: isHighlighted ? `0 0 12px ${color}66` : 'none',
        },
      });
    });
  }

  return flowNodes;
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
    markerEnd: edge.bidirectional ? undefined : { type: MarkerType.ArrowClosed },
  }));
}

/** Inner component that uses useReactFlow to auto-fitView on node changes */
function KnowledgeGraphInner({
  flowNodes,
  flowEdges,
  onNodeClick,
}: {
  flowNodes: Node[];
  flowEdges: Edge[];
  onNodeClick?: NodeMouseHandler;
}) {
  const { fitView } = useReactFlow();
  const prevNodeCountRef = useRef(flowNodes.length);

  useEffect(() => {
    if (flowNodes.length !== prevNodeCountRef.current) {
      prevNodeCountRef.current = flowNodes.length;
      // Delay to let ReactFlow update internal node positions
      const timer = setTimeout(() => {
        fitView({ padding: 0.2, duration: 300 });
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [flowNodes.length, fitView]);

  return (
    <ReactFlow
      nodes={flowNodes}
      edges={flowEdges}
      onNodeClick={onNodeClick}
      nodeTypes={DEFAULT_NODE_TYPES}
      edgeTypes={DEFAULT_EDGE_TYPES}
      fitView
      fitViewOptions={{ padding: 0.2 }}
      minZoom={0.2}
      maxZoom={2}
      attributionPosition="bottom-left"
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
  const flowNodes = useMemo(
    () => buildFlowNodes(knowledgeNodes, highlightPath),
    [knowledgeNodes, highlightPath]
  );

  const flowEdges = useMemo(
    () => buildFlowEdges(knowledgeEdges),
    [knowledgeEdges]
  );

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
      <div className={cn('flex h-96 items-center justify-center rounded-xl border border-red-200 bg-red-50', className)}>
        <div className="text-center">
          <p className="text-sm font-medium text-red-700">載入知識圖譜時發生錯誤</p>
          <p className="mt-1 text-xs text-red-500">{error}</p>
        </div>
      </div>
    );
  }

  // Empty state
  if (knowledgeNodes.length === 0) {
    return (
      <div className={cn('flex h-96 items-center justify-center rounded-xl border border-gray-200 bg-gray-50', className)}>
        <div className="text-center">
          <p className="text-sm font-medium text-gray-500">尚無知識節點</p>
          <p className="mt-1 text-xs text-gray-400">新增節點後即可看到知識圖譜</p>
        </div>
      </div>
    );
  }

  return (
    <div className={cn('h-[500px] w-full rounded-xl border border-gray-200 bg-white', className)}>
      <ReactFlowProvider>
        <KnowledgeGraphInner
          flowNodes={flowNodes}
          flowEdges={flowEdges}
          onNodeClick={handleNodeClick}
        />
      </ReactFlowProvider>
    </div>
  );
}
