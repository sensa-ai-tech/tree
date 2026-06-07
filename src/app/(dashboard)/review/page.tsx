'use client';

import { useState, useEffect, useCallback } from 'react';
import { RotateCcw, Brain, Trophy, BarChart3 } from 'lucide-react';
import { Card, CardBody, CardHeader } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Progress } from '@/components/ui/Progress';
import { SpacedRepReview } from '@/components/features/SpacedRepReview';
import { useLearningStore } from '@/stores/learning-store';
import { useGamificationStore } from '@/stores/gamification-store';
import { showToast } from '@/components/ui/Toast';
import { createInitialState, calculateNextReview, isDueForReview } from '@/lib/gamification/spaced-rep';
import type { FSRSRating, SpacedRepetitionState } from '@/types/gamification';

interface ReviewItem {
  node_id: string;
  question: string;
  answer: string;
  state: SpacedRepetitionState;
}

export default function ReviewPage() {
  const { todayReviewCount, incrementReviewCount, progress } = useLearningStore();
  const { addXP } = useGamificationStore();
  const [isReviewing, setIsReviewing] = useState(false);
  const [reviewDone, setReviewDone] = useState(false);
  const [reviewItems, setReviewItems] = useState<ReviewItem[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const dailyGoal = 10;

  useEffect(() => {
    async function loadReviewItems() {
      try {
        // iter 2 fix: gate review queue on actual completed nodes — home page promises
        // 「完成知識節點後，系統會自動排程複習」(iter 1), so /review must only synthesize
        // items for nodes the user has actually completed. Brand-new accounts fall
        // through to the empty-state branch.
        const completedNodeIds = new Set<string>();
        for (const p of progress.values()) {
          if (p.status === 'completed') completedNodeIds.add(p.node_id);
        }
        if (completedNodeIds.size === 0) {
          setReviewItems([]);
          return;
        }

        // Mock mode: pull spaced-rep questions but only for completed nodes.
        // In prod this will read from review_history.
        const { SEED_QUESTIONS } = await import('@/data/seed');
        const dueItems: ReviewItem[] = SEED_QUESTIONS
          .filter((q) => q.spaced_rep && completedNodeIds.has(q.node_id))
          .slice(0, 10)
          .map((q) => {
            const state = createInitialState();
            // Set due to past so they appear as "due"
            state.due = new Date(Date.now() - 86400000).toISOString();
            return {
              node_id: q.node_id,
              question: q.question,
              answer: q.correct_answer + (q.explanation ? `，${q.explanation}` : ''),
              state,
            };
          });

        setReviewItems(dueItems);
      } finally {
        setIsLoading(false);
      }
    }
    loadReviewItems();
  }, [progress]);

  const pendingReviewCount = reviewItems.filter((item) => isDueForReview(item.state)).length;
  const currentItem = reviewItems[currentIndex] ?? null;

  function handleStartReview(): void {
    setCurrentIndex(0);
    setIsReviewing(true);
    showToast.info('開始今日複習');
  }

  const handleRate = useCallback((rating: FSRSRating) => {
    if (!currentItem) return;

    const nextState = calculateNextReview(rating, currentItem.state);

    // Update the item's state
    setReviewItems((prev) =>
      prev.map((item, i) => (i === currentIndex ? { ...item, state: nextState } : item))
    );

    incrementReviewCount();

    if (currentIndex < reviewItems.length - 1) {
      setCurrentIndex((i) => i + 1);
    } else {
      // All done
      addXP({
        source: 'daily_review',
        amount: 30,
        description: '完成每日複習',
        timestamp: new Date().toISOString(),
      });
      setIsReviewing(false);
      setReviewDone(true);
      showToast.success('複習完成！獲得 30 XP');
    }
  }, [currentItem, currentIndex, reviewItems.length, incrementReviewCount, addXP]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-20">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-indigo-600 border-t-transparent" />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2">
        <RotateCcw className="h-6 w-6 text-indigo-600" />
        <h1 className="text-2xl font-bold text-gray-900">每日複習</h1>
      </div>

      {/* Stats */}
      <div className="grid gap-4 sm:grid-cols-3">
        <Card>
          <CardBody className="flex items-center gap-3">
            <div className="rounded-lg bg-amber-50 p-2">
              <Brain className="h-5 w-5 text-amber-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">待複習</p>
              <p className="text-xl font-bold text-gray-900">{pendingReviewCount}</p>
            </div>
          </CardBody>
        </Card>

        <Card>
          <CardBody className="flex items-center gap-3">
            <div className="rounded-lg bg-emerald-50 p-2">
              <Trophy className="h-5 w-5 text-emerald-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">今日已複習</p>
              <p className="text-xl font-bold text-gray-900">{todayReviewCount}</p>
            </div>
          </CardBody>
        </Card>

        <Card>
          <CardBody className="flex items-center gap-3">
            <div className="rounded-lg bg-indigo-50 p-2">
              <BarChart3 className="h-5 w-5 text-indigo-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">每日目標</p>
              <Progress value={todayReviewCount} max={dailyGoal} showPercentage size="sm" />
            </div>
          </CardBody>
        </Card>
      </div>

      {/* Review Area */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-gray-900">間隔重複複習</h2>
            <div className="flex items-center gap-2">
              {isReviewing && (
                <Badge variant="outline">
                  {currentIndex + 1} / {reviewItems.length}
                </Badge>
              )}
              <Badge>{pendingReviewCount} 題待複習</Badge>
            </div>
          </div>
        </CardHeader>
        <CardBody>
          {reviewDone ? (
            <div className="flex flex-col items-center gap-4 py-8">
              <Trophy className="h-12 w-12 text-amber-500" />
              <p className="text-lg font-medium text-gray-900">做得好！今日複習已完成</p>
              <p className="text-sm text-gray-500">明天會有新的複習內容，請保持學習節奏</p>
            </div>
          ) : isReviewing && currentItem ? (
            <div className="py-4">
              <SpacedRepReview
                nodeId={currentItem.node_id}
                question={currentItem.question}
                answer={currentItem.answer}
                currentState={currentItem.state}
                onRate={handleRate}
              />
            </div>
          ) : pendingReviewCount > 0 ? (
            <div className="flex flex-col items-center gap-4 py-8">
              <Brain className="h-12 w-12 text-indigo-400" />
              <p className="text-gray-600">
                你有 <strong>{pendingReviewCount}</strong> 個知識節點需要複習
              </p>
              <Button onClick={handleStartReview} icon={<RotateCcw className="h-4 w-4" />}>
                開始複習
              </Button>
            </div>
          ) : (
            <div className="flex flex-col items-center gap-4 py-8">
              <p className="text-gray-500">目前沒有待複習的內容</p>
              <p className="text-sm text-gray-600">學習更多節點後會產生複習排程</p>
            </div>
          )}
        </CardBody>
      </Card>
    </div>
  );
}
