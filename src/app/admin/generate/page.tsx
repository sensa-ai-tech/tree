'use client';

import { useState } from 'react';
import { Sparkles, Play, Loader2, FileJson } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Card, CardBody, CardHeader } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Progress } from '@/components/ui/Progress';
import { showToast } from '@/components/ui/Toast';

interface GenerationState {
  status: 'idle' | 'generating' | 'completed' | 'error';
  progress: number;
  progressLabel: string;
  result: string | null;
  error: string | null;
}

export default function AdminGeneratePage() {
  const [name, setName] = useState('');
  const [nameEn, setNameEn] = useState('');
  const [abbr, setAbbr] = useState('');
  const [generation, setGeneration] = useState<GenerationState>({
    status: 'idle',
    progress: 0,
    progressLabel: '',
    result: null,
    error: null,
  });

  async function handleGenerate(e: React.FormEvent<HTMLFormElement>): Promise<void> {
    e.preventDefault();

    if (!name || !nameEn || !abbr) {
      showToast.error('請填寫所有欄位');
      return;
    }

    setGeneration({
      status: 'generating',
      progress: 0,
      progressLabel: '初始化...',
      result: null,
      error: null,
    });

    try {
      // Simulate generation steps
      const steps = [
        { progress: 20, label: '分析專科結構...' },
        { progress: 40, label: '生成知識節點骨架...' },
        { progress: 60, label: '建立節點關聯...' },
        { progress: 80, label: '生成學習路徑...' },
        { progress: 100, label: '完成！' },
      ];

      for (const step of steps) {
        await new Promise<void>((resolve) => setTimeout(resolve, 800));
        setGeneration((prev) => ({
          ...prev,
          progress: step.progress,
          progressLabel: step.label,
        }));
      }

      const mockResult = JSON.stringify(
        {
          specialty: abbr,
          total_nodes: 42,
          estimated_total_hours: 85,
          nodes: [
            { id: `${abbr}-001`, title: `${name}總論`, layer: 0, node_type: 'concept' },
            { id: `${abbr}-002`, title: `${name}基礎解剖`, layer: 1, node_type: 'concept' },
          ],
          validation_report: {
            completeness_score: 0.92,
            issues_found: [],
            taiwan_specific_additions: ['台灣常見品種特殊考量'],
          },
        },
        null,
        2
      );

      setGeneration({
        status: 'completed',
        progress: 100,
        progressLabel: '生成完成',
        result: mockResult,
        error: null,
      });

      showToast.success(`${name}專科骨架生成完成！`);
    } catch (err) {
      const message = err instanceof Error ? err.message : '生成失敗';
      setGeneration((prev) => ({
        ...prev,
        status: 'error',
        error: message,
      }));
      showToast.error(message);
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2">
        <Sparkles className="h-6 w-6 text-indigo-600" />
        <h1 className="text-2xl font-bold text-gray-900">AI 生成管理</h1>
      </div>

      {/* Input Form */}
      <Card>
        <CardHeader>
          <h2 className="text-lg font-semibold text-gray-900">專科骨架生成</h2>
        </CardHeader>
        <CardBody>
          <form onSubmit={handleGenerate} className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-3">
              <Input
                label="專科名稱（中文）"
                placeholder="例如：小動物內科"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <Input
                label="專科名稱（英文）"
                placeholder="例如：Small Animal Internal Medicine"
                value={nameEn}
                onChange={(e) => setNameEn(e.target.value)}
                required
              />
              <Input
                label="專科縮寫"
                placeholder="例如：SAIM"
                value={abbr}
                onChange={(e) => setAbbr(e.target.value.toUpperCase())}
                required
              />
            </div>
            <Button
              type="submit"
              isLoading={generation.status === 'generating'}
              icon={generation.status === 'generating' ? undefined : <Play className="h-4 w-4" />}
              disabled={generation.status === 'generating'}
            >
              {generation.status === 'generating' ? '生成中...' : '生成骨架'}
            </Button>
          </form>
        </CardBody>
      </Card>

      {/* Progress */}
      {generation.status === 'generating' && (
        <Card>
          <CardBody className="space-y-3">
            <div className="flex items-center gap-2">
              <Loader2 className="h-4 w-4 animate-spin text-indigo-600" />
              <span className="text-sm text-gray-600">{generation.progressLabel}</span>
            </div>
            <Progress value={generation.progress} max={100} showPercentage size="lg" />
          </CardBody>
        </Card>
      )}

      {/* Error */}
      {generation.status === 'error' && generation.error && (
        <Card className="border-red-200 bg-red-50">
          <CardBody>
            <p className="text-sm text-red-700">{generation.error}</p>
          </CardBody>
        </Card>
      )}

      {/* Result Preview */}
      {generation.status === 'completed' && generation.result && (
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <h2 className="flex items-center gap-2 text-lg font-semibold text-gray-900">
                <FileJson className="h-5 w-5 text-emerald-600" />
                生成結果預覽
              </h2>
              <Badge className="bg-emerald-100 text-emerald-700">完成</Badge>
            </div>
          </CardHeader>
          <CardBody>
            <pre className="max-h-96 overflow-auto rounded-lg bg-gray-900 p-4 text-sm text-green-400">
              {generation.result}
            </pre>
          </CardBody>
        </Card>
      )}
    </div>
  );
}
