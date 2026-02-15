'use client';

import { useState, useCallback } from 'react';
import type { CaseChallenge as CaseChallengeType, CaseResult, CaseStepResult } from '@/types/case';
import { Button } from '@/components/ui/Button';
import { Card, CardBody } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Progress } from '@/components/ui/Progress';
import { cn } from '@/lib/utils/cn';
import { CheckCircle2, XCircle, ArrowRight } from 'lucide-react';

interface CaseChallengeProps {
  caseData: CaseChallengeType;
  onComplete: (result: CaseResult) => void;
  className?: string;
}

type ChallengeState = 'in_progress' | 'feedback' | 'complete';

const STEP_TYPE_LABELS: Record<string, string> = {
  history_collection: '病史收集',
  physical_examination: '理學檢查',
  differential_diagnosis: '鑑別診斷',
  diagnostic_plan: '診斷計畫',
  result_interpretation: '結果判讀',
  treatment_plan: '治療計畫',
  case_summary: '病例總結',
};

export function CaseChallenge({ caseData, onComplete, className }: CaseChallengeProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedActions, setSelectedActions] = useState<Set<string>>(new Set());
  const [stepResults, setStepResults] = useState<CaseStepResult[]>([]);
  const [state, setState] = useState<ChallengeState>('in_progress');
  const [startTime] = useState(() => Date.now());
  const [stepStartTime, setStepStartTime] = useState(() => Date.now());

  const steps = caseData.steps;
  const step = steps[currentStep];

  // Empty state
  if (steps.length === 0) {
    return (
      <div className={cn('flex items-center justify-center rounded-xl border border-gray-200 bg-gray-50 p-8', className)}>
        <p className="text-sm text-gray-500">此病例無挑戰步驟</p>
      </div>
    );
  }

  const handleToggleAction = (action: string): void => {
    if (state !== 'in_progress') return;
    setSelectedActions((prev) => {
      const next = new Set(prev);
      if (next.has(action)) {
        next.delete(action);
      } else {
        next.add(action);
      }
      return next;
    });
  };

  const handleSubmitStep = (): void => {
    if (!step) return;

    const selected = Array.from(selectedActions);
    const correctSet = new Set(step.correct_actions);
    const correctSelected = selected.filter((a) => correctSet.has(a));
    const score = correctSet.size > 0 ? Math.round((correctSelected.length / correctSet.size) * 100) : 0;
    const timeSpent = Math.round((Date.now() - stepStartTime) / 1000);

    const result: CaseStepResult = {
      step_number: step.step_number,
      selected_actions: selected,
      is_correct: score >= 70,
      score,
      time_spent_seconds: timeSpent,
    };

    setStepResults((prev) => [...prev, result]);
    setState('feedback');
  };

  const handleNextStep = (): void => {
    const nextStep = currentStep + 1;

    if (nextStep >= steps.length) {
      setState('complete');

      const allResults = stepResults;
      const totalScore = allResults.reduce((sum, r) => sum + r.score, 0);
      const maxScore = allResults.length * 100;
      const totalTime = Math.round((Date.now() - startTime) / 1000);

      const result: CaseResult = {
        case_id: caseData.id,
        total_score: totalScore,
        max_score: maxScore,
        accuracy: maxScore > 0 ? totalScore / maxScore : 0,
        step_results: allResults,
        total_time_seconds: totalTime,
        completed_at: new Date().toISOString(),
      };

      onComplete(result);
      return;
    }

    setCurrentStep(nextStep);
    setSelectedActions(new Set());
    setStepStartTime(Date.now());
    setState('in_progress');
  };

  // Complete state
  if (state === 'complete') {
    const totalScore = stepResults.reduce((sum, r) => sum + r.score, 0);
    const maxScore = stepResults.length * 100;
    const avgScore = maxScore > 0 ? Math.round((totalScore / maxScore) * 100) : 0;

    return (
      <Card className={cn('mx-auto max-w-lg', className)}>
        <CardBody className="space-y-4 text-center">
          <h3 className="text-lg font-semibold text-gray-900">病例挑戰完成</h3>
          <p className="text-sm text-gray-500">{caseData.title}</p>
          <p className="text-3xl font-bold text-indigo-600">{avgScore}%</p>
          <Progress value={avgScore} max={100} variant="mastery" showPercentage />
          <div className="space-y-1 text-left">
            {stepResults.map((sr, i) => (
              <div key={i} className="flex items-center gap-2 text-sm">
                {sr.is_correct ? (
                  <CheckCircle2 className="h-4 w-4 text-green-500" />
                ) : (
                  <XCircle className="h-4 w-4 text-red-500" />
                )}
                <span className="text-gray-600">
                  步驟 {sr.step_number}: {sr.score}分 ({sr.time_spent_seconds}s)
                </span>
              </div>
            ))}
          </div>
        </CardBody>
      </Card>
    );
  }

  if (!step) return null;

  const isCorrectAction = (action: string): boolean => step.correct_actions.includes(action);
  const isFeedback = state === 'feedback';

  return (
    <Card className={cn('mx-auto max-w-2xl', className)}>
      <CardBody className="space-y-4">
        {/* Scenario header */}
        <div className="rounded-lg bg-indigo-50 p-3">
          <p className="text-xs font-medium text-indigo-600">
            {caseData.scenario.signalment} &mdash; {caseData.scenario.chief_complaint}
          </p>
          <p className="mt-1 text-sm text-indigo-800">{caseData.scenario.brief_history}</p>
        </div>

        {/* Step navigation */}
        <div className="flex items-center gap-1 overflow-x-auto pb-1">
          {steps.map((s, i) => (
            <div
              key={i}
              className={cn(
                'flex-shrink-0 rounded-full px-2.5 py-1 text-xs font-medium',
                i === currentStep
                  ? 'bg-indigo-600 text-white'
                  : i < currentStep
                    ? 'bg-green-100 text-green-700'
                    : 'bg-gray-100 text-gray-400'
              )}
            >
              {i + 1}
            </div>
          ))}
        </div>

        {/* Current step */}
        <div>
          <div className="mb-2 flex items-center gap-2">
            <Badge variant="outline">{STEP_TYPE_LABELS[step.step_type] ?? step.step_type}</Badge>
            <h4 className="text-sm font-semibold text-gray-900">{step.title}</h4>
          </div>
          <p className="text-sm text-gray-700">{step.prompt}</p>
        </div>

        {/* Actions */}
        <div className="space-y-2">
          {step.available_actions.map((action, i) => {
            const isSelected = selectedActions.has(action);
            const correct = isCorrectAction(action);

            let actionStyle = 'border-gray-200 hover:border-indigo-300';
            if (isFeedback && isSelected && correct) {
              actionStyle = 'border-green-400 bg-green-50';
            } else if (isFeedback && isSelected && !correct) {
              actionStyle = 'border-red-400 bg-red-50';
            } else if (isFeedback && !isSelected && correct) {
              actionStyle = 'border-green-300 bg-green-50/50';
            } else if (isSelected) {
              actionStyle = 'border-indigo-500 bg-indigo-50';
            }

            return (
              <button
                key={i}
                type="button"
                onClick={() => handleToggleAction(action)}
                disabled={isFeedback}
                className={cn(
                  'flex w-full items-center gap-2 rounded-lg border p-3 text-left text-sm transition-colors disabled:cursor-default',
                  actionStyle
                )}
              >
                <input
                  type="checkbox"
                  checked={isSelected}
                  readOnly
                  className="h-4 w-4 rounded border-gray-300 text-indigo-600"
                />
                <span className="text-gray-700">{action}</span>
              </button>
            );
          })}
        </div>

        {/* Feedback */}
        {isFeedback && (
          <div className="space-y-2">
            <div className="rounded-lg bg-blue-50 p-3">
              <p className="text-sm text-blue-800">
                {stepResults[stepResults.length - 1]?.is_correct
                  ? step.feedback_correct
                  : step.feedback_incorrect}
              </p>
            </div>
            {step.key_learning_points.length > 0 && (
              <div className="rounded-lg bg-amber-50 p-3">
                <p className="mb-1 text-xs font-medium text-amber-700">學習重點</p>
                <ul className="space-y-0.5">
                  {step.key_learning_points.map((point, i) => (
                    <li key={i} className="text-sm text-amber-800">&bull; {point}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}

        {/* Actions */}
        <div className="flex justify-end">
          {state === 'in_progress' ? (
            <Button size="sm" onClick={handleSubmitStep} disabled={selectedActions.size === 0}>
              提交選擇
            </Button>
          ) : (
            <Button size="sm" onClick={handleNextStep} icon={<ArrowRight className="h-4 w-4" />}>
              {currentStep + 1 >= steps.length ? '查看結果' : '下一步'}
            </Button>
          )}
        </div>
      </CardBody>
    </Card>
  );
}
