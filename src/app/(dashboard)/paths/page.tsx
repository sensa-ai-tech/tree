'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Route, Clock, BookOpen } from 'lucide-react';
import { Card, CardBody, CardFooter } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { CardSkeleton } from '@/components/ui/Skeleton';
import { useKnowledgeStore } from '@/stores/knowledge-store';
import type { LearningPath } from '@/types/knowledge';

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

  useEffect(() => {
    const timer = setTimeout(() => setIsInitializing(false), 300);
    return () => clearTimeout(timer);
  }, []);

  const loading = isLoading || isInitializing;

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2">
        <Route className="h-6 w-6 text-indigo-600" />
        <h1 className="text-2xl font-bold text-gray-900">學習路徑</h1>
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
          {paths.map((path) => (
            <LearningPathCard key={path.id} path={path} />
          ))}
        </div>
      )}
    </div>
  );
}
