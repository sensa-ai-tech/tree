'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { BookOpen, RotateCcw, TrendingUp, Flame, Clock } from 'lucide-react';
import { Card, CardBody, CardHeader } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Progress } from '@/components/ui/Progress';
import { Skeleton, CardSkeleton } from '@/components/ui/Skeleton';
import { useAuthStore } from '@/stores/auth-store';
import { useLearningStore } from '@/stores/learning-store';
import { useKnowledgeStore } from '@/stores/knowledge-store';
import { useGamificationStore } from '@/stores/gamification-store';

export default function DashboardPage() {
  const { user } = useAuthStore();
  const { getCompletedCount, getInProgressCount, todayReviewCount } = useLearningStore();
  const { nodes } = useKnowledgeStore();
  const { experience } = useGamificationStore();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate initial data loading
    const timer = setTimeout(() => setIsLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  const completedCount = getCompletedCount();
  const inProgressCount = getInProgressCount();
  const totalNodes = nodes.length;

  if (isLoading) {
    return (
      <div className="space-y-6">
        <Skeleton variant="text" width="40%" />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {Array.from({ length: 4 }).map((_, i) => (
            <CardSkeleton key={i} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Welcome */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900">
          歡迎回來，{user?.email ?? '學習者'}
        </h1>
        <p className="mt-1 text-sm text-gray-500">繼續你的獸醫專科學習之旅</p>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardBody className="flex items-center gap-3">
            <div className="rounded-lg bg-indigo-50 p-2">
              <BookOpen className="h-5 w-5 text-indigo-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">已完成節點</p>
              <p className="text-xl font-bold text-gray-900">{completedCount}</p>
            </div>
          </CardBody>
        </Card>

        <Card>
          <CardBody className="flex items-center gap-3">
            <div className="rounded-lg bg-amber-50 p-2">
              <Clock className="h-5 w-5 text-amber-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">進行中</p>
              <p className="text-xl font-bold text-gray-900">{inProgressCount}</p>
            </div>
          </CardBody>
        </Card>

        <Card>
          <CardBody className="flex items-center gap-3">
            <div className="rounded-lg bg-emerald-50 p-2">
              <RotateCcw className="h-5 w-5 text-emerald-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">今日複習</p>
              <p className="text-xl font-bold text-gray-900">{todayReviewCount}</p>
            </div>
          </CardBody>
        </Card>

        <Card>
          <CardBody className="flex items-center gap-3">
            <div className="rounded-lg bg-orange-50 p-2">
              <Flame className="h-5 w-5 text-orange-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">連續天數</p>
              <p className="text-xl font-bold text-gray-900">{experience.streak_days} 天</p>
            </div>
          </CardBody>
        </Card>
      </div>

      {/* Review Reminder */}
      {todayReviewCount === 0 && (
        <Card className="border-amber-200 bg-amber-50">
          <CardBody className="flex items-center justify-between">
            <div>
              <p className="font-medium text-amber-800">今日複習提醒</p>
              <p className="text-sm text-amber-600">你有待複習的知識節點，別忘了鞏固記憶！</p>
            </div>
            <Link href="/review">
              <Badge className="cursor-pointer bg-amber-600 text-white hover:bg-amber-700">
                前往複習
              </Badge>
            </Link>
          </CardBody>
        </Card>
      )}

      {/* Learning Progress */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-indigo-600" />
            <h2 className="text-lg font-semibold text-gray-900">學習進度概覽</h2>
          </div>
        </CardHeader>
        <CardBody>
          {totalNodes > 0 ? (
            <Progress
              value={completedCount}
              max={totalNodes}
              label={`${completedCount} / ${totalNodes} 節點已完成`}
              showPercentage
              size="lg"
            />
          ) : (
            <p className="text-sm text-gray-500">
              尚無知識節點資料。請先至知識圖譜探索或由管理員匯入內容。
            </p>
          )}
        </CardBody>
      </Card>
    </div>
  );
}
