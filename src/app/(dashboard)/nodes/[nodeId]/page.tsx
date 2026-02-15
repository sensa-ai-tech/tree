'use client';

import { use, useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, CheckCircle, BookOpen, Stethoscope, Search } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card, CardBody, CardHeader } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Skeleton } from '@/components/ui/Skeleton';
import { showToast } from '@/components/ui/Toast';
import { useKnowledgeStore } from '@/stores/knowledge-store';
import { useLearningStore } from '@/stores/learning-store';
import { useGamificationStore } from '@/stores/gamification-store';

interface NodeDetailPageProps {
  params: Promise<{ nodeId: string }>;
}

export default function NodeDetailPage({ params }: NodeDetailPageProps) {
  const { nodeId } = use(params);
  const router = useRouter();
  const { getNodeById, selectedNodeContent } = useKnowledgeStore();
  const { getStatus, completeNode, startNode } = useLearningStore();
  const { addXP } = useGamificationStore();
  const [isCompleting, setIsCompleting] = useState(false);

  const node = useMemo(() => getNodeById(nodeId), [getNodeById, nodeId]);
  const status = getStatus(nodeId);
  const content = selectedNodeContent;

  if (!node) {
    return (
      <div className="flex h-64 flex-col items-center justify-center gap-4">
        <p className="text-gray-500">找不到此知識節點</p>
        <Button variant="secondary" onClick={() => router.back()}>
          返回上一頁
        </Button>
      </div>
    );
  }

  function handleStartLearning(): void {
    startNode(nodeId);
    showToast.info('開始學習此節點');
  }

  async function handleComplete(): Promise<void> {
    setIsCompleting(true);
    try {
      completeNode(nodeId, 100, 15);
      addXP({
        source: 'complete_node',
        amount: 100,
        description: `完成節點：${node?.title}`,
        timestamp: new Date().toISOString(),
      });
      showToast.success('恭喜完成此節點！');
    } finally {
      setIsCompleting(false);
    }
  }

  const nodeTypeIcon = {
    disease: <Stethoscope className="h-5 w-5" />,
    diagnostic: <Search className="h-5 w-5" />,
  } as Record<string, React.ReactNode>;

  return (
    <div className="space-y-6">
      {/* Back button */}
      <div className="flex items-center gap-3">
        <Link href="/graph">
          <Button variant="ghost" size="sm" icon={<ArrowLeft className="h-4 w-4" />}>
            返回圖譜
          </Button>
        </Link>
      </div>

      {/* Node Info */}
      <div>
        <div className="flex items-center gap-3">
          <div className="rounded-lg bg-indigo-50 p-2">
            {nodeTypeIcon[node.node_type] ?? <BookOpen className="h-5 w-5 text-indigo-600" />}
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-900">{node.title}</h1>
            {node.title_en && <p className="text-sm text-gray-500">{node.title_en}</p>}
          </div>
        </div>
        <div className="mt-3 flex flex-wrap items-center gap-2">
          <Badge variant="nodeType" nodeType={node.node_type}>{node.node_type}</Badge>
          <Badge variant="layer" layer={node.layer}>Layer {node.layer}</Badge>
          <Badge variant="difficulty" difficulty={node.difficulty}>
            難度 {node.difficulty}
          </Badge>
          <Badge variant="outline">{node.estimated_minutes} 分鐘</Badge>
        </div>
      </div>

      {/* Content Area */}
      {content ? (
        <div className="space-y-6">
          {/* Summary */}
          <Card>
            <CardHeader>
              <h2 className="font-semibold text-gray-900">摘要</h2>
            </CardHeader>
            <CardBody>
              <p className="text-sm text-gray-700">{content.summary}</p>
            </CardBody>
          </Card>

          {/* Learning Objectives */}
          {content.learning_objectives.length > 0 && (
            <Card>
              <CardHeader>
                <h2 className="font-semibold text-gray-900">學習目標</h2>
              </CardHeader>
              <CardBody>
                <ul className="list-inside list-disc space-y-1 text-sm text-gray-700">
                  {content.learning_objectives.map((obj, i) => (
                    <li key={i}>{obj}</li>
                  ))}
                </ul>
              </CardBody>
            </Card>
          )}

          {/* Disease-specific Content */}
          {node.node_type === 'disease' && content.disease_data && (
            <Card>
              <CardHeader>
                <h2 className="font-semibold text-gray-900">疾病資料</h2>
              </CardHeader>
              <CardBody className="space-y-3 text-sm text-gray-700">
                <div>
                  <strong>好發動物：</strong>{content.disease_data.signalment}
                </div>
                <div>
                  <strong>病因：</strong>{content.disease_data.etiology}
                </div>
                <div>
                  <strong>預後：</strong>{content.disease_data.prognosis}
                </div>
              </CardBody>
            </Card>
          )}

          {/* Diagnostic-specific Content */}
          {node.node_type === 'diagnostic' && content.diagnostic_data && (
            <Card>
              <CardHeader>
                <h2 className="font-semibold text-gray-900">診斷方法</h2>
              </CardHeader>
              <CardBody className="space-y-3 text-sm text-gray-700">
                <div>
                  <strong>適應症：</strong>
                  {content.diagnostic_data.indication.join('、')}
                </div>
                <div>
                  <strong>技術：</strong>{content.diagnostic_data.technique}
                </div>
              </CardBody>
            </Card>
          )}

          {/* Body content */}
          <Card>
            <CardHeader>
              <h2 className="font-semibold text-gray-900">詳細內容</h2>
            </CardHeader>
            <CardBody>
              <div className="prose prose-sm max-w-none text-gray-700">
                {content.body}
              </div>
            </CardBody>
          </Card>

          {/* Clinical Pearl */}
          {content.clinical_pearl && (
            <Card className="border-amber-200 bg-amber-50">
              <CardBody>
                <p className="text-sm font-medium text-amber-800">臨床小提醒</p>
                <p className="mt-1 text-sm text-amber-700">{content.clinical_pearl}</p>
              </CardBody>
            </Card>
          )}
        </div>
      ) : (
        <Card>
          <CardBody>
            <Skeleton variant="text" lines={5} />
            <p className="mt-4 text-sm text-gray-400">節點內容載入中或尚未建立...</p>
          </CardBody>
        </Card>
      )}

      {/* Action Button */}
      <div className="flex justify-end gap-3">
        {status === 'locked' || status === 'available' ? (
          <Button onClick={handleStartLearning} icon={<BookOpen className="h-4 w-4" />}>
            開始學習
          </Button>
        ) : status === 'in_progress' ? (
          <Button
            onClick={handleComplete}
            isLoading={isCompleting}
            icon={<CheckCircle className="h-4 w-4" />}
          >
            完成學習
          </Button>
        ) : (
          <Button variant="secondary" disabled icon={<CheckCircle className="h-4 w-4" />}>
            已完成
          </Button>
        )}
      </div>
    </div>
  );
}
