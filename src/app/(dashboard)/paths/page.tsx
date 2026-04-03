'use client';

import { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import { Route, Clock, BookOpen, Filter } from 'lucide-react';
import { Card, CardBody, CardFooter } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { CardSkeleton } from '@/components/ui/Skeleton';
import { useKnowledgeStore } from '@/stores/knowledge-store';
import type { LearningPath } from '@/types/knowledge';

const SPECIALTY_LABELS: Record<string, string> = {
  CARDIO: '心臟科',
  IM: '內科',
  DERM: '皮膚科',
  SURG: '外科',
  NEURO: '神經科',
  ONCO: '腫瘤科',
  ECC: '急診加護',
  CPATH: '臨床病理',
  CROSS: '跨專科',
};

function LearningPathCard({ path }: { path: LearningPath }) {
  return (
    <Link href={`/paths/${path.id}`}>
      <Card hoverable className="h-full">
        <CardBody className="space-y-3">
          <div className="flex items-start justify-between">
            <h3 className="font-semibold text-gray-900">{path.title}</h3>
            <Badge variant="outline">{path.specialty}</Badge>
          </div>
          {path.description && (
            <p className="line-clamp-2 text-sm text-gray-600">{path.description}</p>
          )}
          <div className="flex items-center gap-4 text-xs text-gray-500">
            <span className="flex items-center gap-1">
              <Clock className="h-3.5 w-3.5" />
              {path.estimated_hours} 小時
            </span>
            <span className="flex items-center gap-1">
              <BookOpen className="h-3.5 w-3.5" />
              {path.path_nodes.length} 個節點
            </span>
          </div>
        </CardBody>
        <CardFooter>
          <div className="flex items-center gap-2">
            <Badge>{path.milestones.length} 個里程碑</Badge>
            {path.has_certificate && <Badge className="bg-amber-100 text-amber-700">含證書</Badge>}
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
}

export default function PathsPage() {
  const { paths, isLoading } = useKnowledgeStore();
  const [isInitializing, setIsInitializing] = useState(true);
  const [selectedSpecialty, setSelectedSpecialty] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => setIsInitializing(false), 300);
    return () => clearTimeout(timer);
  }, []);

  const loading = isLoading || isInitializing;

  // 取得所有存在的專科選項（依資料動態產生）
  const availableSpecialties = useMemo(() => {
    const set = new Set(paths.map((p) => p.specialty));
    return Array.from(set).sort();
  }, [paths]);

  const filteredPaths = useMemo(() => {
    if (!selectedSpecialty) return paths;
    return paths.filter((p) => p.specialty === selectedSpecialty);
  }, [paths, selectedSpecialty]);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Route className="h-6 w-6 text-indigo-600" />
          <h1 className="text-2xl font-bold text-gray-900">學習路徑</h1>
        </div>
        {!loading && paths.length > 0 && (
          <div className="flex items-center gap-2">
            <Filter className="h-4 w-4 text-gray-500" />
            <select
              value={selectedSpecialty}
              onChange={(e) => setSelectedSpecialty(e.target.value)}
              className="rounded-lg border border-gray-300 bg-white px-3 py-1.5 text-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
            >
              <option value="">全部專科</option>
              {availableSpecialties.map((s) => (
                <option key={s} value={s}>{SPECIALTY_LABELS[s] ?? s}</option>
              ))}
            </select>
          </div>
        )}
      </div>

      {loading ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <CardSkeleton key={i} />
          ))}
        </div>
      ) : paths.length === 0 ? (
        <div className="flex h-64 items-center justify-center rounded-xl border border-dashed border-gray-300 bg-white">
          <div className="text-center">
            <Route className="mx-auto h-10 w-10 text-gray-300" />
            <p className="mt-2 text-gray-500">尚無學習路徑</p>
            <p className="text-sm text-gray-400">學習路徑將在管理員建立後顯示</p>
          </div>
        </div>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredPaths.map((path) => (
            <LearningPathCard key={path.id} path={path} />
          ))}
        </div>
      )}
    </div>
  );
}
