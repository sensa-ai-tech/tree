'use client';

import { use, useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, CheckCircle, BookOpen, Stethoscope, Search, Lightbulb, AlertTriangle } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Button } from '@/components/ui/Button';
import { Card, CardBody, CardHeader } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Skeleton } from '@/components/ui/Skeleton';
import { showToast } from '@/components/ui/Toast';
import { DiseaseContent } from '@/components/features/DiseaseContent';
import { DiagnosticContent } from '@/components/features/DiagnosticContent';
import { useKnowledgeStore } from '@/stores/knowledge-store';
import { useLearningStore } from '@/stores/learning-store';
import { useGamificationStore } from '@/stores/gamification-store';
import { SEED_NODE_CONTENTS } from '@/data/seed';

interface NodeDetailPageProps {
  params: Promise<{ nodeId: string }>;
}

export default function NodeDetailPage({ params }: NodeDetailPageProps) {
  const { nodeId } = use(params);
  const router = useRouter();
  const { nodes, getNodeById, selectedNodeContent, setNodeContent } = useKnowledgeStore();
  const { getStatus, completeNode, startNode } = useLearningStore();
  const { addXP } = useGamificationStore();
  const [isCompleting, setIsCompleting] = useState(false);

  // 依賴 nodes 以便 DemoDataProvider 注入資料後重新計算
  const node = useMemo(() => getNodeById(nodeId), [getNodeById, nodeId, nodes]);
  const status = getStatus(nodeId);

  // 自動從 seed 載入內容（當 store 尚未設定時）
  useEffect(() => {
    if (!selectedNodeContent || selectedNodeContent.node_id !== nodeId) {
      const seedContent = SEED_NODE_CONTENTS.get(nodeId);
      if (seedContent) {
        setNodeContent(seedContent);
      } else {
        setNodeContent(null);
      }
    }
  }, [nodeId, selectedNodeContent, setNodeContent]);

  const content = selectedNodeContent;

  /**
   * 過濾空白 Markdown 章節（安全網）：
   * 若 body 中存在 `## 標題\n\n## 下一標題` 這類空章節，將其移除避免畫面出現空白標題。
   */
  const filteredBody = useMemo(() => {
    if (!content?.body) return '';
    return content.body
      .replace(/^(##\s+[^\n]+)\n{1,3}(?=##\s+)/gm, '')
      .trim();
  }, [content?.body]);

  // nodes 尚未載入時顯示 loading（DemoDataProvider 注入需要時間）
  if (nodes.length === 0) {
    return (
      <div className="flex h-64 flex-col items-center justify-center gap-4">
        <Skeleton variant="text" width="40%" />
        <Skeleton variant="rectangular" height={200} />
        <p className="text-sm text-gray-400">知識節點載入中...</p>
      </div>
    );
  }

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
          <Card className="border-indigo-100 bg-indigo-50/50">
            <CardBody>
              <p className="text-sm leading-relaxed text-indigo-900">{content.summary}</p>
            </CardBody>
          </Card>

          {/* Learning Objectives */}
          {content.learning_objectives.length > 0 && (
            <Card>
              <CardHeader>
                <h2 className="font-semibold text-gray-900">🎯 學習目標</h2>
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

          {/* Disease-specific Content — 完整 Accordion */}
          {node.node_type === 'disease' && content.disease_data && (
            <Card>
              <CardHeader>
                <h2 className="font-semibold text-gray-900">🩺 疾病詳細資料</h2>
              </CardHeader>
              <CardBody>
                <DiseaseContent data={content.disease_data} />
              </CardBody>
            </Card>
          )}

          {/* Diagnostic-specific Content — Tab 介面 */}
          {node.node_type === 'diagnostic' && content.diagnostic_data && (
            <Card>
              <CardHeader>
                <h2 className="font-semibold text-gray-900">🔬 診斷方法詳細</h2>
              </CardHeader>
              <CardBody>
                <DiagnosticContent data={content.diagnostic_data} />
              </CardBody>
            </Card>
          )}

          {/* Body content — Markdown 渲染 */}
          {content.body && (
            <Card>
              <CardHeader>
                <h2 className="font-semibold text-gray-900">📖 詳細內容</h2>
              </CardHeader>
              <CardBody>
                <div className="prose prose-sm max-w-none text-gray-700 prose-headings:text-gray-900 prose-a:text-indigo-600 prose-strong:text-gray-900 prose-table:text-sm">
                  <ReactMarkdown remarkPlugins={[remarkGfm]}>
                    {filteredBody}
                  </ReactMarkdown>
                </div>
              </CardBody>
            </Card>
          )}

          {/* Key Points */}
          {content.key_points && content.key_points.length > 0 && (
            <Card className="border-green-200 bg-green-50">
              <CardBody>
                <h3 className="mb-2 flex items-center gap-2 text-sm font-semibold text-green-800">
                  <CheckCircle className="h-4 w-4" />
                  重點整理
                </h3>
                <ul className="space-y-1">
                  {content.key_points.map((point, i) => (
                    <li key={i} className="text-sm text-green-700">&bull; {point}</li>
                  ))}
                </ul>
              </CardBody>
            </Card>
          )}

          {/* Clinical Pearl */}
          {content.clinical_pearl && (
            <Card className="border-amber-200 bg-amber-50">
              <CardBody>
                <h3 className="mb-1 flex items-center gap-2 text-sm font-semibold text-amber-800">
                  <Lightbulb className="h-4 w-4" />
                  臨床珍珠
                </h3>
                <p className="text-sm text-amber-700">{content.clinical_pearl}</p>
              </CardBody>
            </Card>
          )}

          {/* Common Mistakes */}
          {content.common_mistakes && content.common_mistakes.length > 0 && (
            <Card className="border-red-200 bg-red-50">
              <CardBody>
                <h3 className="mb-2 flex items-center gap-2 text-sm font-semibold text-red-800">
                  <AlertTriangle className="h-4 w-4" />
                  常見錯誤
                </h3>
                <ul className="space-y-1">
                  {content.common_mistakes.map((mistake, i) => (
                    <li key={i} className="text-sm text-red-700">&bull; {mistake}</li>
                  ))}
                </ul>
              </CardBody>
            </Card>
          )}

          {/* References */}
          {content.references && content.references.length > 0 && (
            <Card>
              <CardHeader>
                <h2 className="font-semibold text-gray-900">📚 參考文獻</h2>
              </CardHeader>
              <CardBody>
                <ol className="list-decimal list-inside space-y-2 text-xs text-gray-500">
                  {content.references.map((ref, i) => (
                    <li key={i}>
                      <span className="text-gray-700">{ref.citation}</span>
                      {ref.relevance && <span className="ml-1 text-gray-400">— {ref.relevance}</span>}
                    </li>
                  ))}
                </ol>
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
