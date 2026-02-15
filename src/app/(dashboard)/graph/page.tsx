'use client';

import { useState } from 'react';
import { Map, Info } from 'lucide-react';
import { Card, CardBody } from '@/components/ui/Card';
import { GraphSkeleton } from '@/components/ui/Skeleton';
import { useKnowledgeStore } from '@/stores/knowledge-store';

const SPECIALTIES = [
  { value: '', label: '全部專科' },
  { value: 'IM', label: '內科' },
  { value: 'SURG', label: '外科' },
  { value: 'DERM', label: '皮膚科' },
  { value: 'CARDIO', label: '心臟科' },
  { value: 'NEURO', label: '神經科' },
  { value: 'ONCO', label: '腫瘤科' },
] as const;

export default function GraphPage() {
  const { nodes, isLoading, setFilters } = useKnowledgeStore();
  const [selectedSpecialty, setSelectedSpecialty] = useState('');

  function handleSpecialtyChange(e: React.ChangeEvent<HTMLSelectElement>): void {
    const value = e.target.value;
    setSelectedSpecialty(value);
    setFilters({ specialty: value || null });
  }

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
      ) : nodes.length === 0 ? (
        <div className="flex h-96 items-center justify-center rounded-xl border border-dashed border-gray-300 bg-white">
          <p className="text-gray-500">尚無知識節點資料，請先由管理員匯入內容。</p>
        </div>
      ) : (
        <div className="h-[600px] rounded-xl border border-gray-200 bg-white p-4">
          {/* KnowledgeGraph component placeholder */}
          <p className="flex h-full items-center justify-center text-gray-400">
            KnowledgeGraph 元件將在此渲染（共 {nodes.length} 個節點）
          </p>
        </div>
      )}
    </div>
  );
}
