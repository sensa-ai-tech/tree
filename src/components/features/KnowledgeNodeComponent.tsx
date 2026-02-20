'use client';

import { memo } from 'react';
import { Handle, Position, type NodeProps } from 'reactflow';

export interface KnowledgeNodeData {
  label: string;
  color: string;
  isHighlighted: boolean;
  layer: number;
}

const LAYER_SHORT: Record<number, string> = {
  0: 'L0',
  1: 'L1',
  2: 'L2',
  3: 'L3',
  4: 'L4',
  5: 'L5',
};

/**
 * Custom ReactFlow node component for knowledge graph.
 *
 * - memo() 避免不必要的重渲染
 * - Handle(Top=target, Bottom=source) 正確錨定邊
 * - 文字換行 + maxWidth 防止溢出
 * - Layer badge 小標籤
 * - isHighlighted 視覺回饋
 */
function KnowledgeNodeComponentInner({ data }: NodeProps<KnowledgeNodeData>) {
  const { label, color, isHighlighted, layer } = data;

  return (
    <>
      {/* 入邊錨點（上方） */}
      <Handle
        type="target"
        position={Position.Top}
        style={{ background: color, width: 6, height: 6, border: 'none' }}
      />

      {/* 節點本體 */}
      <div
        style={{
          background: isHighlighted ? color : `${color}22`,
          border: `2px solid ${color}`,
          borderRadius: '10px',
          padding: '8px 14px',
          minWidth: '120px',
          maxWidth: '180px',
          textAlign: 'center',
          boxShadow: isHighlighted
            ? `0 2px 12px ${color}44`
            : '0 1px 3px rgba(0,0,0,0.08)',
          transition: 'all 0.2s ease',
          cursor: 'pointer',
        }}
      >
        {/* Layer badge */}
        <div
          style={{
            position: 'absolute',
            top: -8,
            right: -6,
            background: color,
            color: '#fff',
            fontSize: '9px',
            fontWeight: 700,
            padding: '1px 5px',
            borderRadius: '6px',
            letterSpacing: '0.5px',
            lineHeight: '14px',
          }}
        >
          {LAYER_SHORT[layer] ?? `L${layer}`}
        </div>

        {/* 標題文字 */}
        <div
          style={{
            color: isHighlighted ? '#ffffff' : '#1f2937',
            fontSize: '12px',
            fontWeight: isHighlighted ? 600 : 500,
            lineHeight: '1.3',
            overflowWrap: 'break-word',
            wordBreak: 'break-word',
            whiteSpace: 'normal',
          }}
        >
          {label}
        </div>
      </div>

      {/* 出邊錨點（下方） */}
      <Handle
        type="source"
        position={Position.Bottom}
        style={{ background: color, width: 6, height: 6, border: 'none' }}
      />
    </>
  );
}

export const KnowledgeNodeComponent = memo(KnowledgeNodeComponentInner);
