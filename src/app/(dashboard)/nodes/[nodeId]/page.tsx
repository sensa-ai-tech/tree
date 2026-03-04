'use client';

import { use, useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import { ChevronRight, CheckCircle, BookOpen, Stethoscope, Search, Lightbulb, AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card, CardBody, CardHeader } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Skeleton } from '@/components/ui/Skeleton';
import { showToast } from '@/components/ui/Toast';
import { DiseaseContent } from '@/components/features/DiseaseContent';
import { DiagnosticContent } from '@/components/features/DiagnosticContent';
import { MarkdownRenderer } from '@/components/features/MarkdownRenderer';
import { ReferenceList } from '@/components/features/ReferenceList';
import { RelatedNodes } from '@/components/features/RelatedNodes';
import { useKnowledgeStore } from '@/stores/knowledge-store';
import { useLearningStore } from '@/stores/learning-store';
import { useGamificationStore } from '@/stores/gamification-store';

interface NodeDetailPageProps {
  params: Promise<{ nodeId: string }>;
}

export default function NodeDetailPage({ params }: NodeDetailPageProps) {
  const { nodeId } = use(params);
  const { nodes, edges, getNodeById, selectedNodeContent, setNodeContent } = useKnowledgeStore();
  const { getStatus, completeNode, startNode } = useLearningStore();
  const { addXP } = useGamificationStore();
  const [isCompleting, setIsCompleting] = useState(false);

  // 依賴 nodes 以便 DemoDataProvider 注入資料後重新計算
  const node = useMemo(() => getNodeById(nodeId), [getNodeById, nodeId, nodes]);
  const status = getStatus(nodeId);

  // 自動從 seed 載入內容（動態 import 避免打包到 client bundle）
  useEffect(() => {
    if (!selectedNodeContent || selectedNodeContent.node_id !== nodeId) {
      import('@/data/seed').then(({ SEED_NODE_CONTENTS }) => {
        const seedContent = SEED_NODE_CONTENTS.get(nodeId);
        setNodeContent(seedContent ?? null);
      });
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

  // 動態產生 TOC 章節項目（必須在所有 early return 之前，遵守 Rules of Hooks）
  const tocSections = useMemo(() => {
    if (!content || !node) return [];
    const items: { id: string; label: string }[] = [];
    items.push({ id: 'summary', label: '摘要' });
    if (content.learning_objectives.length > 0) items.push({ id: 'objectives', label: '學習目標' });
    if (node.node_type === 'disease' && content.disease_data) items.push({ id: 'disease', label: '疾病資料' });
    if (node.node_type === 'diagnostic' && content.diagnostic_data) items.push({ id: 'diagnostic', label: '診斷方法' });
    if (content.body) items.push({ id: 'body', label: '詳細內容' });
    if (content.key_points && content.key_points.length > 0) items.push({ id: 'keypoints', label: '重點整理' });
    if (content.clinical_pearl) items.push({ id: 'pearl', label: '臨床珍珠' });
    if (content.common_mistakes && content.common_mistakes.length > 0) items.push({ id: 'mistakes', label: '常見錯誤' });
    if (content.references && content.references.length > 0) items.push({ id: 'references', label: '參考文獻' });
    return items;
  }, [content, node]);

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
        <p className="text-gray-500">找不到此知識節點（ID: {nodeId}）</p>
        <Link href="/graph">
          <Button variant="secondary">返回知識圖譜</Button>
        </Link>
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

  const specialtyLabel: Record<string, string> = {
    CARDIO: '心臟科', IM: '內科', DERM: '皮膚科', SURG: '外科',
    NEURO: '神經科', ONCO: '腫瘤科', ECC: '急診加護', CPATH: '臨床病理',
  };

  return (
    <div className="space-y-4">
      {/* Breadcrumb */}
      <nav aria-label="麵包屑導航" className="flex items-center gap-1 text-sm text-gray-500">
        <Link href="/home" className="hover:text-indigo-600 transition-colors">首頁</Link>
        <ChevronRight className="h-3.5 w-3.5" />
        <Link href="/graph" className="hover:text-indigo-600 transition-colors">知識圖譜</Link>
        <ChevronRight className="h-3.5 w-3.5" />
        <Link href={`/graph?specialty=${node.specialty}`} className="hover:text-indigo-600 transition-colors">
          {specialtyLabel[node.specialty] ?? node.specialty}
        </Link>
        <ChevronRight className="h-3.5 w-3.5" />
        <span className="font-medium text-gray-900 truncate max-w-[180px]">{node.title}</span>
      </nav>

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

      {/* Sticky TOC Navigator */}
      {tocSections.length > 0 && (
        <div className="scrollbar-hide sticky top-14 z-20 -mx-4 flex gap-1.5 overflow-x-auto bg-gray-50/95 px-4 py-2 backdrop-blur-sm border-b border-gray-200 md:-mx-6 md:px-6 lg:-mx-8 lg:px-8">
          {tocSections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className="shrink-0 rounded-full bg-white px-3 py-1.5 text-xs font-medium text-gray-600 shadow-sm ring-1 ring-gray-200 transition-colors hover:bg-indigo-50 hover:text-indigo-600 hover:ring-indigo-200"
            >
              {section.label}
            </a>
          ))}
        </div>
      )}

      {/* Content Area */}
      {content ? (
        <div className="space-y-6">
          {/* Summary */}
          <Card id="summary" className="border-indigo-100 bg-indigo-50/50 scroll-mt-24">
            <CardBody>
              <p className="text-base leading-relaxed text-indigo-900">{content.summary}</p>
            </CardBody>
          </Card>

          {/* Learning Objectives */}
          {content.learning_objectives.length > 0 && (
            <Card id="objectives" className="scroll-mt-24">
              <CardHeader>
                <h2 className="font-semibold text-gray-900">🎯 學習目標</h2>
              </CardHeader>
              <CardBody>
                <ul className="list-inside list-disc space-y-1.5 text-base text-gray-700">
                  {content.learning_objectives.map((obj, i) => (
                    <li key={i}>{obj}</li>
                  ))}
                </ul>
              </CardBody>
            </Card>
          )}

          {/* Disease-specific Content — 完整 Accordion */}
          {node.node_type === 'disease' && content.disease_data && (
            <Card id="disease" className="scroll-mt-24">
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
            <Card id="diagnostic" className="scroll-mt-24">
              <CardHeader>
                <h2 className="font-semibold text-gray-900">🔬 診斷方法詳細</h2>
              </CardHeader>
              <CardBody>
                <DiagnosticContent data={content.diagnostic_data} />
              </CardBody>
            </Card>
          )}

          {/* Body content */}
          {content.body && (
            <Card id="body" className="scroll-mt-24">
              <CardHeader>
                <h2 className="font-semibold text-gray-900">📖 詳細內容</h2>
              </CardHeader>
              <CardBody>
                <MarkdownRenderer content={filteredBody} />
              </CardBody>
            </Card>
          )}

          {/* Key Points */}
          {content.key_points && content.key_points.length > 0 && (
            <Card id="keypoints" className="border-green-200 bg-green-50 scroll-mt-24">
              <CardBody>
                <h3 className="mb-2 flex items-center gap-2 text-base font-semibold text-green-800">
                  <CheckCircle className="h-4 w-4" />
                  重點整理
                </h3>
                <ul className="space-y-1.5">
                  {content.key_points.map((point, i) => (
                    <li key={i} className="text-base text-green-700">&bull; {point}</li>
                  ))}
                </ul>
              </CardBody>
            </Card>
          )}

          {/* Clinical Pearl */}
          {content.clinical_pearl && (
            <Card id="pearl" className="border-amber-200 bg-amber-50 scroll-mt-24">
              <CardBody>
                <h3 className="mb-1 flex items-center gap-2 text-base font-semibold text-amber-800">
                  <Lightbulb className="h-4 w-4" />
                  臨床珍珠
                </h3>
                <p className="text-base text-amber-700">{content.clinical_pearl}</p>
              </CardBody>
            </Card>
          )}

          {/* Common Mistakes */}
          {content.common_mistakes && content.common_mistakes.length > 0 && (
            <Card id="mistakes" className="border-red-200 bg-red-50 scroll-mt-24">
              <CardBody>
                <h3 className="mb-2 flex items-center gap-2 text-base font-semibold text-red-800">
                  <AlertTriangle className="h-4 w-4" />
                  常見錯誤
                </h3>
                <ul className="space-y-1.5">
                  {content.common_mistakes.map((mistake, i) => (
                    <li key={i} className="text-base text-red-700">&bull; {mistake}</li>
                  ))}
                </ul>
              </CardBody>
            </Card>
          )}

          {/* References */}
          {content.references && content.references.length > 0 && (
            <Card id="references" className="scroll-mt-24">
              <CardHeader>
                <h2 className="font-semibold text-gray-900">📚 參考文獻</h2>
              </CardHeader>
              <CardBody>
                <ReferenceList references={content.references} />
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

      {/* Related Nodes */}
      <RelatedNodes
        currentNodeId={nodeId}
        edges={edges}
        allNodes={nodes}
      />

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
