'use client';

import { useCallback, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import { Map, Info } from 'lucide-react';
import { Card, CardBody } from '@/components/ui/Card';
import { GraphSkeleton } from '@/components/ui/Skeleton';
import { KnowledgeGraph } from '@/components/features/KnowledgeGraph';
import { useKnowledgeStore } from '@/stores/knowledge-store';

const SPECIALTIES = [
  { value: '', label: '全部專科' },
  { value: 'CARDIO', label: '心臟科' },
  { value: 'IM', label: '內科' },
  { value: 'DERM', label: '皮膚科' },
  { value: 'SURG', label: '外科' },
  { value: 'NEURO', label: '神經科' },
  { value: 'ONCO', label: '腫瘤科' },
  { value: 'ECC', label: '急診加護' },
  { value: 'CPATH', label: '臨床病理' },
] as const;

export default function GraphPage() {
  const { nodes, edges, filters, isLoading, setFilters, getFilteredNodes } = useKnowledgeStore();
  const router = useRouter();

  // 直接從 Zustand store 讀取 specialty，避免雙重狀態
  const selectedSpecialty = filters.specialty ?? '';

  // 根據篩選條件過濾 nodes 和 edges
  const filteredNodes = useMemo(() => getFilteredNodes(), [getFilteredNodes, nodes, filters.specialty]);
  const filteredNodeIds = useMemo(() => new Set(filteredNodes.map((n) => n.id)), [filteredNodes]);
  const filteredEdges = useMemo(
    () => edges.filter((e) => filteredNodeIds.has(e.source_node_id) && filteredNodeIds.has(e.target_node_id)),
    [edges, filteredNodeIds]
  );

  function handleSpecialtyChange(e: React.ChangeEvent<HTMLSelectElement>): void {
    const value = e.target.value;
    setFilters({ specialty: value || null });
  }

  const handleNodeClick = useCallback(
    (nodeId: string) => {
      router.push(`/nodes/${nodeId}`);
    },
    [router]
  );

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Map className="h-6 w-6 text-indigo-600" />
          <h1 className="text-2xl font-bold text-gray-900">知識圖譜</h1>
        </div>
        <select
          value={selectedSpecialty}
          onChange={handleSpecialtyChange}
          className="rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
        >
          {SPECIALTIES.map((s) => (
            <option key={s.value} value={s.value}>
              {s.label}
            </option>
          ))}
        </select>
      </div>

      <Card className="border-blue-100 bg-blue-50">
        <CardBody className="flex items-start gap-2">
          <Info className="mt-0.5 h-4 w-4 flex-shrink-0 text-blue-600" />
          <p className="text-sm text-blue-700">
            知識圖譜以互動方式展現各知識節點間的關聯。點選節點可檢視詳細內容，拖拉可移動視圖。
          </p>
        </CardBody>
      </Card>

      {isLoading ? (
        <GraphSkeleton />
      ) : filteredNodes.length === 0 ? (
        <div className="flex h-96 items-center justify-center rounded-xl border border-dashed border-gray-300 bg-white">
          <p className="text-gray-500">
            {selectedSpecialty ? '此專科尚無知識節點資料。' : '尚無知識節點資料，請先由管理員匯入內容。'}
          </p>
        </div>
      ) : (
        <KnowledgeGraph
          nodes={filteredNodes}
          edges={filteredEdges}
          onNodeClick={handleNodeClick}
          className="h-[calc(100vh-220px)] min-h-[400px]"
        />
      )}
    </div>
  );
}
