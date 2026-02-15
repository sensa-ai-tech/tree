'use client';

import { useState } from 'react';
import { RotateCcw, Brain, Trophy, BarChart3 } from 'lucide-react';
import { Card, CardBody, CardHeader } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Progress } from '@/components/ui/Progress';
import { useLearningStore } from '@/stores/learning-store';
import { useGamificationStore } from '@/stores/gamification-store';
import { showToast } from '@/components/ui/Toast';

export default function ReviewPage() {
  const { todayReviewCount, incrementReviewCount } = useLearningStore();
  const { addXP } = useGamificationStore();
  const [isReviewing, setIsReviewing] = useState(false);
  const [reviewDone, setReviewDone] = useState(false);

  // Mock: pending review count
  const pendingReviewCount = 5;
  const dailyGoal = 10;

  function handleStartReview(): void {
    setIsReviewing(true);
    showToast.info('開始今日複習');
  }

  function handleCompleteReview(): void {
    incrementReviewCount();
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
            <Badge>{pendingReviewCount} 題待複習</Badge>
          </div>
        </CardHeader>
        <CardBody>
          {reviewDone ? (
            <div className="flex flex-col items-center gap-4 py-8">
              <Trophy className="h-12 w-12 text-amber-500" />
              <p className="text-lg font-medium text-gray-900">做得好！今日複習已完成</p>
              <p className="text-sm text-gray-500">明天會有新的複習內容，請保持學習節奏</p>
            </div>
          ) : isReviewing ? (
            <div className="space-y-4 py-4">
              {/* SpacedRepReview component placeholder */}
              <div className="rounded-lg border border-gray-200 p-6 text-center">
                <p className="text-gray-500">SpacedRepReview 元件將在此渲染</p>
              </div>
              <div className="flex justify-center">
                <Button onClick={handleCompleteReview}>完成複習</Button>
              </div>
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
              <p className="text-sm text-gray-400">學習更多節點後會產生複習排程</p>
            </div>
          )}
        </CardBody>
      </Card>
    </div>
  );
}
