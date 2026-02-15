'use client';

import { use, useMemo } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ArrowLeft, Clock, CheckCircle2, Circle, Flag } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card, CardBody, CardHeader } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Progress } from '@/components/ui/Progress';
import { useKnowledgeStore } from '@/stores/knowledge-store';
import { useLearningStore } from '@/stores/learning-store';

interface PathDetailPageProps {
  params: Promise<{ pathId: string }>;
}

export default function PathDetailPage({ params }: PathDetailPageProps) {
  const { pathId } = use(params);
  const router = useRouter();
  const { paths, getNodeById } = useKnowledgeStore();
  const { getStatus } = useLearningStore();

  const path = useMemo(() => paths.find((p) => p.id === pathId), [paths, pathId]);

  if (!path) {
    return (
      <div className="flex h-64 flex-col items-center justify-center gap-4">
        <p className="text-gray-500">找不到此學習路徑</p>
        <Button variant="secondary" onClick={() => router.push('/paths')}>
          返回路徑列表
        </Button>
      </div>
    );
  }

  const completedNodes = path.path_nodes.filter((pn) => getStatus(pn.node_id) === 'completed').length;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center gap-3">
        <Link href="/paths">
          <Button variant="ghost" size="sm" icon={<ArrowLeft className="h-4 w-4" />}>
            返回
          </Button>
        </Link>
      </div>

      <div>
        <div className="flex items-center gap-3">
          <h1 className="text-2xl font-bold text-gray-900">{path.title}</h1>
          <Badge variant="outline">{path.specialty}</Badge>
        </div>
        {path.description && <p className="mt-2 text-gray-600">{path.description}</p>}
        <div className="mt-3 flex items-center gap-4 text-sm text-gray-500">
          <span className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            預估 {path.estimated_hours} 小時
          </span>
        </div>
      </div>

      {/* Progress */}
      <Progress
        value={completedNodes}
        max={path.path_nodes.length}
        label="學習進度"
        showPercentage
        size="lg"
      />

      {/* Milestones */}
      {path.milestones.length > 0 && (
        <Card>
          <CardHeader>
            <h2 className="flex items-center gap-2 text-lg font-semibold text-gray-900">
              <Flag className="h-5 w-5 text-amber-500" />
              里程碑
            </h2>
          </CardHeader>
          <CardBody>
            <div className="space-y-4">
              {path.milestones.map((milestone, index) => (
                <div key={milestone.id} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-100 text-sm font-medium text-indigo-700">
                      {index + 1}
                    </div>
                    {index < path.milestones.length - 1 && (
                      <div className="mt-1 h-full w-0.5 bg-gray-200" />
                    )}
                  </div>
                  <div className="pb-4">
                    <h3 className="font-medium text-gray-900">{milestone.title}</h3>
                    <p className="mt-1 text-sm text-gray-600">{milestone.description}</p>
                    <p className="mt-1 text-xs text-gray-400">通過條件：{milestone.pass_criteria}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardBody>
        </Card>
      )}

      {/* Node List */}
      <Card>
        <CardHeader>
          <h2 className="text-lg font-semibold text-gray-900">知識節點清單</h2>
        </CardHeader>
        <CardBody>
          {path.path_nodes.length === 0 ? (
            <p className="text-sm text-gray-500">此路徑尚無節點</p>
          ) : (
            <ul className="divide-y divide-gray-100">
              {path.path_nodes.map((pn) => {
                const node = getNodeById(pn.node_id);
                const status = getStatus(pn.node_id);
                const isCompleted = status === 'completed';

                return (
                  <li key={pn.node_id} className="flex items-center gap-3 py-3">
                    {isCompleted ? (
                      <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-emerald-500" />
                    ) : (
                      <Circle className="h-5 w-5 flex-shrink-0 text-gray-300" />
                    )}
                    <Link
                      href={`/nodes/${pn.node_id}`}
                      className="flex-1 text-sm font-medium text-gray-700 hover:text-indigo-600"
                    >
                      {node?.title ?? pn.node_id}
                    </Link>
                    {pn.is_required && <Badge variant="outline">必修</Badge>}
                    <Badge variant="outline">{pn.phase}</Badge>
                  </li>
                );
              })}
            </ul>
          )}
        </CardBody>
      </Card>
    </div>
  );
}
