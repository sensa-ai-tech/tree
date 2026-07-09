'use client';

import { use, useState, useEffect, useMemo, useCallback } from 'react';
import { useRouter, notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, CheckCircle, XCircle, ChevronRight, Trophy } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card, CardBody, CardHeader } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { showToast } from '@/components/ui/Toast';
import { useGamificationStore } from '@/stores/gamification-store';
import { calculateXP } from '@/lib/gamification/xp-calculator';
import type { CaseChallenge, CaseStepData } from '@/types/case';

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
  const [allCases, setAllCases] = useState<CaseChallenge[]>([]);
  const [isLoadingCases, setIsLoadingCases] = useState(true);
  const [loadError, setLoadError] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedActions, setSelectedActions] = useState<Set<string>>(new Set());
  const [showFeedback, setShowFeedback] = useState(false);
  const [stepResults, setStepResults] = useState<Map<number, boolean>>(new Map());
  const [xpAwarded, setXPAwarded] = useState(false);
  const addXP = useGamificationStore((s) => s.addXP);
  const addSpecialty = useGamificationStore((s) => s.addSpecialty);

  useEffect(() => {
    let cancelled = false;
    import('@/data/seed/case-lookup')
      .then(({ ALL_CASES }) => {
        if (!cancelled) setAllCases(ALL_CASES);
      })
      .catch(() => {
        // chunk 載入失敗（ChunkLoadError）不可讓頁面永久停在「病例載入中」
        if (!cancelled) setLoadError(true);
      })
      .finally(() => {
        if (!cancelled) setIsLoadingCases(false);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  const caseData = useMemo(
    () => allCases.find((c) => c.id === caseId) ?? null,
    [caseId, allCases]
  );

  const step: CaseStepData | undefined = caseData?.steps[currentStep];
  const totalSteps = caseData?.steps.length ?? 0;

  const completedSteps = stepResults.size;
  const correctCount = [...stepResults.values()].filter(Boolean).length;

  // 病例完成時獎勵 XP — 必須在所有 early return 之前呼叫
  const handleCaseComplete = useCallback(() => {
    if (xpAwarded || !caseData) return;

    const accuracy = completedSteps > 0 ? correctCount / completedSteps : 0;
    const xpAmount = calculateXP('case_challenge', {
      difficulty: caseData.difficulty as 1 | 2 | 3 | 4 | 5,
      accuracy,
    });

    addXP({
      source: 'case_challenge',
      amount: xpAmount,
      description: `完成病例：${caseData.title}`,
      timestamp: new Date().toISOString(),
    });

    addSpecialty(caseData.specialty);
    setXPAwarded(true);
    showToast.success(`病例完成！獲得 ${xpAmount} XP`);
  }, [xpAwarded, caseData, completedSteps, correctCount, addXP, addSpecialty]);

  if (isLoadingCases) {
    return (
      <div className="flex h-64 items-center justify-center">
        <p className="text-sm text-gray-600">病例載入中...</p>
      </div>
    );
  }

  if (loadError) {
    return (
      <div className="flex h-64 flex-col items-center justify-center gap-3 text-center" role="alert">
        <p className="text-sm text-gray-600">病例載入失敗，請稍後再試或重新整理頁面</p>
        <Link href="/cases" className="text-sm font-medium text-indigo-600 hover:underline">
          返回病例列表
        </Link>
      </div>
    );
  }

  if (!caseData) {
    notFound();
  }

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
      <ol className="flex items-center gap-1 overflow-x-auto pb-2" aria-label="病例挑戰進度">
        {caseData.steps.map((s, i) => {
          const isCurrent = i === currentStep;
          const isDone = stepResults.has(i);
          const isCorrect = isDone && stepResults.get(i);
          const stateLabel = isCurrent
            ? '（目前）'
            : isCorrect
              ? '（已答對）'
              : isDone
                ? '（已答錯）'
                : '（未開始）';
          const typeLabel = STEP_TYPE_LABELS[s.step_type] ?? s.step_type;
          return (
          <li
            key={s.step_number}
            aria-current={isCurrent ? 'step' : undefined}
            aria-label={`步驟 ${s.step_number} ${typeLabel}${stateLabel}`}
            className={`flex items-center gap-1 text-xs whitespace-nowrap ${
              isCurrent ? 'text-indigo-600 font-semibold' :
              isDone ? (isCorrect ? 'text-green-600' : 'text-red-500') :
              'text-gray-400'
            }`}
          >
            <span aria-hidden="true" className={`flex h-6 w-6 items-center justify-center rounded-full text-xs font-medium ${
              isCurrent ? 'bg-indigo-100 text-indigo-700' :
              isDone ? (isCorrect ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700') :
              'bg-gray-100 text-gray-500'
            }`}>
              {isCorrect ? '✓' : isDone ? '✗' : s.step_number}
            </span>
            <span className="hidden sm:inline" aria-hidden="true">{typeLabel}</span>
            {i < totalSteps - 1 && <ChevronRight className="h-3 w-3 text-gray-300 mx-1" aria-hidden="true" />}
          </li>
          );
        })}
      </ol>

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
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-gray-600">選擇你的行動：</p>
                {!showFeedback && (
                  <p className="text-xs text-gray-500" aria-live="polite">
                    已選 {selectedActions.size} 項 · 正解 {step.correct_actions.length} 項
                  </p>
                )}
              </div>
              <div className="grid gap-2 sm:grid-cols-2">
                {step.available_actions.map((action) => {
                  // 提交後揭露每個選項的對錯，讓學生知道正解是哪幾項（而非只給通用回饋）。
                  const isCorrectAction = step.correct_actions.includes(action);
                  const isSelected = selectedActions.has(action);
                  let stateClass: string;
                  if (showFeedback) {
                    if (isCorrectAction) {
                      stateClass = 'border-green-500 bg-green-50 text-green-700';
                    } else if (isSelected) {
                      stateClass = 'border-red-400 bg-red-50 text-red-700 line-through';
                    } else {
                      stateClass = 'border-gray-200 bg-white text-gray-400';
                    }
                  } else if (isSelected) {
                    stateClass = 'border-indigo-500 bg-indigo-50 text-indigo-700';
                  } else {
                    stateClass = 'border-gray-200 bg-white text-gray-700 hover:border-gray-300 hover:bg-gray-50';
                  }
                  return (
                    <button
                      key={action}
                      type="button"
                      disabled={showFeedback}
                      onClick={() => toggleAction(action)}
                      className={`flex items-start justify-between gap-2 rounded-lg border p-3 text-left text-sm transition-colors ${stateClass} ${
                        showFeedback ? 'cursor-not-allowed' : 'cursor-pointer'
                      }`}
                    >
                      <span>{action}</span>
                      {showFeedback && isCorrectAction && (
                        <CheckCircle className="h-4 w-4 shrink-0 text-green-600" />
                      )}
                      {showFeedback && !isCorrectAction && isSelected && (
                        <XCircle className="h-4 w-4 shrink-0 text-red-500" />
                      )}
                    </button>
                  );
                })}
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
                <div className="text-center w-full space-y-3">
                  <div className="flex items-center justify-center gap-2 text-amber-600">
                    <Trophy className="h-5 w-5" />
                    <p className="text-sm font-semibold">病例完成！</p>
                  </div>
                  <p className="text-sm text-gray-700">
                    正確率：{completedSteps > 0 ? Math.round((correctCount / completedSteps) * 100) : 0}%
                    （{correctCount}/{completedSteps}）
                  </p>
                  <Button variant="secondary" onClick={() => { handleCaseComplete(); router.push('/cases'); }}>
                    完成並返回
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
