'use client';

import { useCallback, useEffect, useMemo } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Map, Info, X, ArrowLeft } from 'lucide-react';
import dynamic from 'next/dynamic';
import { Card, CardBody } from '@/components/ui/Card';
import { GraphSkeleton } from '@/components/ui/Skeleton';
import { SpecialtyGrid } from '@/components/features/SpecialtyGrid';

const KnowledgeGraph = dynamic(
  () => import('@/components/features/KnowledgeGraph').then(m => m.KnowledgeGraph),
  { ssr: false, loading: () => <GraphSkeleton /> }
);
import { useKnowledgeStore } from '@/stores/knowledge-store';

const SPECIALTIES = [
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
  const searchParams = useSearchParams();

  // 從 URL query param 初始化專科篩選（供 /home 專科卡片連結使用）
  useEffect(() => {
    const urlSpecialty = searchParams.get('specialty');
    if (urlSpecialty && urlSpecialty !== filters.specialty) {
      setFilters({ specialty: urlSpecialty });
    }
  }, [searchParams, setFilters, filters.specialty]);

  const selectedSpecialty = filters.specialty ?? '';

  // 計算各專科節點數
  const nodeCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    for (const node of nodes) {
      counts[node.specialty] = (counts[node.specialty] ?? 0) + 1;
    }
    return counts;
  }, [nodes]);

  // 根據篩選條件過濾 nodes 和 edges
  const filteredNodes = useMemo(() => getFilteredNodes(), [getFilteredNodes, nodes, filters.specialty, filters.search]);
  const filteredNodeIds = useMemo(() => new Set(filteredNodes.map((n) => n.id)), [filteredNodes]);
  const filteredEdges = useMemo(
    () => edges.filter((e) => filteredNodeIds.has(e.source_node_id) && filteredNodeIds.has(e.target_node_id)),
    [edges, filteredNodeIds]
  );

  function handleSpecialtySelect(value: string): void {
    setFilters({ specialty: value || null });
  }

  function handleClearSpecialty(): void {
    setFilters({ specialty: null, search: '' });
  }

  const handleNodeClick = useCallback(
    (nodeId: string) => {
      router.push(`/nodes/${nodeId}`);
    },
    [router]
  );

  // 目前選中專科的中文名稱
  const selectedSpecLabel = SPECIALTIES.find((s) => s.value === selectedSpecialty)?.label ?? '';

  return (
    <div className="space-y-4 md:space-y-6">
      {/* 標題列 */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Map className="h-5 w-5 text-indigo-600 md:h-6 md:w-6" />
          <h1 className="text-xl font-bold text-gray-900 md:text-2xl">知識圖譜</h1>
        </div>
      </div>

      {isLoading ? (
        <GraphSkeleton />
      ) : !selectedSpecialty && !filters.search ? (
        /* ===== 未選專科：顯示專科選擇卡片 ===== */
        <SpecialtyGrid
          nodeCounts={nodeCounts}
          onSelect={handleSpecialtySelect}
        />
      ) : (
        /* ===== 已選專科：顯示該專科圖譜 ===== */
        <>
          {/* 專科切換列 */}
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            {/* 左側：返回 + 當前專科 */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handleClearSpecialty}
                className="flex items-center gap-1 rounded-lg px-2 py-1.5 text-sm font-medium text-gray-600 hover:bg-gray-100 transition-colors"
              >
                <ArrowLeft className="h-4 w-4" />
                <span className="hidden sm:inline">所有專科</span>
              </button>
              <span className="text-gray-300">/</span>
              <span className="text-base font-bold text-indigo-700">
                {selectedSpecLabel || '搜尋結果'}
              </span>
              <span className="rounded-full bg-indigo-100 px-2 py-0.5 text-xs font-medium text-indigo-600">
                {filteredNodes.length} 節點
              </span>
            </div>

            {/* 右側：專科快速切換 pill */}
            <div className="scrollbar-hide -mx-1 flex gap-1.5 overflow-x-auto px-1 pb-1">
              {SPECIALTIES.map((s) => {
                const isActive = selectedSpecialty === s.value;
                const count = nodeCounts[s.value] ?? 0;
                return (
                  <button
                    key={s.value}
                    type="button"
                    onClick={() => handleSpecialtySelect(s.value)}
                    className={`shrink-0 rounded-full px-3 py-1.5 text-xs font-medium transition-all ${
                      isActive
                        ? 'bg-indigo-600 text-white shadow-sm ring-2 ring-indigo-300'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    {s.label}
                    <span className={`ml-1 ${isActive ? 'text-indigo-200' : 'text-gray-400'}`}>
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* 搜尋清除提示 */}
          {filters.search && (
            <div className="flex items-center gap-2 rounded-lg bg-amber-50 border border-amber-200 px-3 py-2">
              <p className="text-sm text-amber-700">
                搜尋「<strong>{filters.search}</strong>」的結果
              </p>
              <button
                type="button"
                onClick={() => setFilters({ search: '' })}
                className="ml-auto rounded-full p-1 text-amber-500 hover:bg-amber-100"
              >
                <X className="h-3.5 w-3.5" />
              </button>
            </div>
          )}

          {/* 提示卡片 */}
          <Card className="hidden border-blue-100 bg-blue-50 md:block">
            <CardBody className="flex items-start gap-2">
              <Info className="mt-0.5 h-4 w-4 flex-shrink-0 text-blue-600" />
              <p className="text-sm text-blue-700">
                點選節點查看詳細內容。拖拉可移動視圖，滾輪可縮放。
              </p>
            </CardBody>
          </Card>

          {filteredNodes.length === 0 ? (
            <div className="flex h-96 items-center justify-center rounded-xl border border-dashed border-gray-300 bg-white">
              <div className="text-center">
                <p className="text-gray-500">
                  {filters.search ? `找不到符合「${filters.search}」的節點` : '此專科尚無知識節點資料。'}
                </p>
                {filters.search && (
                  <button
                    type="button"
                    onClick={() => setFilters({ search: '' })}
                    className="mt-2 text-sm text-indigo-600 hover:underline"
                  >
                    清除搜尋
                  </button>
                )}
              </div>
            </div>
          ) : (
            <KnowledgeGraph
              nodes={filteredNodes}
              edges={filteredEdges}
              onNodeClick={handleNodeClick}
              className="h-[calc(100vh-260px)] min-h-[350px] md:h-[calc(100vh-280px)] md:min-h-[400px]"
            />
          )}
        </>
      )}
    </div>
  );
}
