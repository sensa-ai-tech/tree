'use client';

import { use, useState, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Briefcase, CheckCircle, XCircle, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card, CardBody, CardHeader } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { ALL_CASES } from '@/data/seed/case-lookup';
import type { CaseStepData } from '@/types/case';

interface CaseDetailPageProps {
  params: Promise<{ caseId: string }>;
}

const STEP_TYPE_LABELS: Record<string, string> = {
  history_collection: '病史收集',
  physical_examination: '理學檢查',
  differential_diagnosis: '鑑別診斷',
  diagnostic_plan: '診斷計畫',
  result_interpretation: '結果判讀',
  treatment_plan: '治療計畫',
  case_summary: '病例總結',
};

export default function CaseDetailPage({ params }: CaseDetailPageProps) {
  const { caseId } = use(params);
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedActions, setSelectedActions] = useState<Set<string>>(new Set());
  const [showFeedback, setShowFeedback] = useState(false);
  const [stepResults, setStepResults] = useState<Map<number, boolean>>(new Map());

  const caseData = useMemo(
    () => ALL_CASES.find((c) => c.id === caseId) ?? null,
    [caseId]
  );

  if (!caseData) {
    return (
      <div className="space-y-6">
        <div className="flex items-center gap-3">
          <Link href="/cases">
            <Button variant="ghost" size="sm" icon={<ArrowLeft className="h-4 w-4" />}>
              返回病例列表
            </Button>
          </Link>
        </div>
        <Card>
          <CardBody className="flex flex-col items-center gap-4 py-12">
            <Briefcase className="h-12 w-12 text-gray-300" />
            <p className="text-gray-500">找不到病例 ID: {caseId}</p>
            <p className="text-sm text-gray-400">此病例可能尚未建立或已被移除</p>
            <Button variant="secondary" onClick={() => router.push('/cases')}>
              返回病例列表
            </Button>
          </CardBody>
        </Card>
      </div>
    );
  }

  const step: CaseStepData | undefined = caseData.steps[currentStep];
  const totalSteps = caseData.steps.length;

  function toggleAction(action: string) {
    setSelectedActions((prev) => {
      const next = new Set(prev);
      if (next.has(action)) {
        next.delete(action);
      } else {
        next.add(action);
      }
      return next;
    });
  }

  function handleSubmitStep() {
    if (!step) return;
    const correct = step.correct_actions;
    const isCorrect =
      correct.length === selectedActions.size &&
      correct.every((a) => selectedActions.has(a));

    setStepResults((prev) => new Map(prev).set(currentStep, isCorrect));
    setShowFeedback(true);
  }

  function handleNextStep() {
    setShowFeedback(false);
    setSelectedActions(new Set());
    if (currentStep < totalSteps - 1) {
      setCurrentStep((s) => s + 1);
    }
  }

  const completedSteps = stepResults.size;
  const correctCount = [...stepResults.values()].filter(Boolean).length;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center gap-3">
        <Link href="/cases">
          <Button variant="ghost" size="sm" icon={<ArrowLeft className="h-4 w-4" />}>
            返回病例列表
          </Button>
        </Link>
      </div>

      {/* Case Info */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-bold text-gray-900">{caseData.title}</h1>
            <div className="flex items-center gap-2">
              <Badge variant="outline">{caseData.specialty}</Badge>
              <Badge variant="difficulty" difficulty={caseData.difficulty}>
                難度 {caseData.difficulty}
              </Badge>
            </div>
          </div>
        </CardHeader>
        <CardBody className="space-y-2">
          <p className="text-sm text-gray-600">
            <span className="font-medium">訊號：</span>{caseData.scenario.signalment}
          </p>
          <p className="text-sm text-gray-600">
            <span className="font-medium">主訴：</span>{caseData.scenario.chief_complaint}
          </p>
          <p className="text-sm text-gray-600">
            <span className="font-medium">簡史：</span>{caseData.scenario.brief_history}
          </p>
        </CardBody>
      </Card>

      {/* Progress */}
      <div className="flex items-center gap-1 overflow-x-auto pb-2">
        {caseData.steps.map((s, i) => (
          <div
            key={s.step_number}
            className={`flex items-center gap-1 text-xs whitespace-nowrap ${
              i === currentStep ? 'text-indigo-600 font-semibold' :
              stepResults.has(i) ? (stepResults.get(i) ? 'text-green-600' : 'text-red-500') :
              'text-gray-400'
            }`}
          >
            <span className={`flex h-6 w-6 items-center justify-center rounded-full text-xs font-medium ${
              i === currentStep ? 'bg-indigo-100 text-indigo-700' :
              stepResults.has(i) ? (stepResults.get(i) ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700') :
              'bg-gray-100 text-gray-500'
            }`}>
              {s.step_number}
            </span>
            <span className="hidden sm:inline">{STEP_TYPE_LABELS[s.step_type] ?? s.step_type}</span>
            {i < totalSteps - 1 && <ChevronRight className="h-3 w-3 text-gray-300 mx-1" />}
          </div>
        ))}
      </div>

      {/* Current Step */}
      {step && (
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium text-indigo-600">
                步驟 {step.step_number}/{totalSteps}
              </span>
              <Badge variant="outline" size="sm">
                {STEP_TYPE_LABELS[step.step_type] ?? step.step_type}
              </Badge>
            </div>
            <h2 className="mt-1 text-lg font-semibold text-gray-900">{step.title}</h2>
          </CardHeader>
          <CardBody className="space-y-4">
            <p className="text-sm text-gray-700">{step.prompt}</p>

            {/* Action Selection */}
            <div className="space-y-2">
              <p className="text-sm font-medium text-gray-600">選擇你的行動：</p>
              <div className="grid gap-2 sm:grid-cols-2">
                {step.available_actions.map((action) => (
                  <button
                    key={action}
                    type="button"
                    disabled={showFeedback}
                    onClick={() => toggleAction(action)}
                    className={`rounded-lg border p-3 text-left text-sm transition-colors ${
                      selectedActions.has(action)
                        ? 'border-indigo-500 bg-indigo-50 text-indigo-700'
                        : 'border-gray-200 bg-white text-gray-700 hover:border-gray-300 hover:bg-gray-50'
                    } ${showFeedback ? 'cursor-not-allowed opacity-60' : 'cursor-pointer'}`}
                  >
                    {action}
                  </button>
                ))}
              </div>
            </div>

            {/* Feedback */}
            {showFeedback && (
              <div className={`rounded-lg p-4 ${
                stepResults.get(currentStep) ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'
              }`}>
                <div className="flex items-center gap-2 mb-2">
                  {stepResults.get(currentStep) ? (
                    <><CheckCircle className="h-5 w-5 text-green-600" /><span className="font-medium text-green-700">正確！</span></>
                  ) : (
                    <><XCircle className="h-5 w-5 text-red-600" /><span className="font-medium text-red-700">需要改進</span></>
                  )}
                </div>
                <p className="text-sm text-gray-700">
                  {stepResults.get(currentStep) ? step.feedback_correct : step.feedback_incorrect}
                </p>
                {step.key_learning_points.length > 0 && (
                  <div className="mt-3">
                    <p className="text-xs font-medium text-gray-500 mb-1">學習重點：</p>
                    <ul className="list-disc list-inside text-xs text-gray-600 space-y-0.5">
                      {step.key_learning_points.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}

            {/* Actions */}
            <div className="flex justify-end gap-3">
              {!showFeedback ? (
                <Button
                  onClick={handleSubmitStep}
                  disabled={selectedActions.size === 0}
                >
                  提交答案
                </Button>
              ) : currentStep < totalSteps - 1 ? (
                <Button onClick={handleNextStep}>
                  下一步
                </Button>
              ) : (
                <div className="text-center w-full space-y-2">
                  <p className="text-sm font-medium text-gray-700">
                    病例完成！正確率：{completedSteps > 0 ? Math.round((correctCount / completedSteps) * 100) : 0}%
                    （{correctCount}/{completedSteps}）
                  </p>
                  <Button variant="secondary" onClick={() => router.push('/cases')}>
                    返回病例列表
                  </Button>
                </div>
              )}
            </div>
          </CardBody>
        </Card>
      )}
    </div>
  );
}
