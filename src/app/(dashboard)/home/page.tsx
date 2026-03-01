'use client';

import { useMemo } from 'react';
import Link from 'next/link';
import {
  Map,
  BookOpen,
  RotateCcw,
  Briefcase,
  Trophy,
  TrendingUp,
  Clock,
  Target,
  Flame,
  ChevronRight,
} from 'lucide-react';
import { Card, CardBody, CardHeader } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Progress } from '@/components/ui/Progress';
import { useAuthStore } from '@/stores/auth-store';
import { useKnowledgeStore } from '@/stores/knowledge-store';
import { useLearningStore } from '@/stores/learning-store';
import { useGamificationStore } from '@/stores/gamification-store';

const SPECIALTY_LABELS: Record<string, string> = {
  CARDIO: '心臟科',
  IM: '內科',
  DERM: '皮膚科',
  SURG: '外科',
  NEURO: '神經科',
  ONCO: '腫瘤科',
  ECC: '急診加護',
  CPATH: '臨床病理',
};

const QUICK_ACTIONS = [
  { href: '/graph', label: '知識圖譜', icon: Map, color: 'text-indigo-600', bg: 'bg-indigo-50' },
  { href: '/paths', label: '學習路徑', icon: BookOpen, color: 'text-emerald-600', bg: 'bg-emerald-50' },
  { href: '/review', label: '每日複習', icon: RotateCcw, color: 'text-amber-600', bg: 'bg-amber-50' },
  { href: '/cases', label: '病例挑戰', icon: Briefcase, color: 'text-rose-600', bg: 'bg-rose-50' },
  { href: '/achievements', label: '成就', icon: Trophy, color: 'text-purple-600', bg: 'bg-purple-50' },
] as const;

export default function DashboardHomePage() {
  const { user } = useAuthStore();
  const { nodes } = useKnowledgeStore();
  const { getCompletedCount, getInProgressCount, todayReviewCount } = useLearningStore();
  const { experience } = useGamificationStore();

  const completedCount = getCompletedCount();
  const inProgressCount = getInProgressCount();
  const totalNodes = nodes.length;
  const _completionPercent = totalNodes > 0 ? Math.round((completedCount / totalNodes) * 100) : 0;

  // 各專科節點數
  const specialtyProgress = useMemo(() => {
    const counts: Record<string, number> = {};
    for (const node of nodes) {
      counts[node.specialty] = (counts[node.specialty] ?? 0) + 1;
    }
    return Object.entries(counts)
      .map(([key, total]) => ({
        key,
        label: SPECIALTY_LABELS[key] ?? key,
        total,
      }))
      .sort((a, b) => b.total - a.total);
  }, [nodes]);

  const displayName = user?.email?.split('@')[0] ?? '學員';

  return (
    <div className="space-y-6">
      {/* 歡迎訊息 */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900">
          你好，{displayName} 👋
        </h1>
        <p className="mt-1 text-sm text-gray-500">
          歡迎回到獸醫知識樹學習平台
        </p>
      </div>

      {/* 統計卡片 */}
      <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
        <Card className="border-indigo-100">
          <CardBody className="flex items-center gap-3">
            <div className="rounded-lg bg-indigo-50 p-2">
              <Target className="h-5 w-5 text-indigo-600" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900">{completedCount}</p>
              <p className="text-xs text-gray-500">已完成節點</p>
            </div>
          </CardBody>
        </Card>

        <Card className="border-amber-100">
          <CardBody className="flex items-center gap-3">
            <div className="rounded-lg bg-amber-50 p-2">
              <Clock className="h-5 w-5 text-amber-600" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900">{inProgressCount}</p>
              <p className="text-xs text-gray-500">學習中</p>
            </div>
          </CardBody>
        </Card>

        <Card className="border-emerald-100">
          <CardBody className="flex items-center gap-3">
            <div className="rounded-lg bg-emerald-50 p-2">
              <TrendingUp className="h-5 w-5 text-emerald-600" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900">Lv.{experience.current_level}</p>
              <p className="text-xs text-gray-500">{experience.total_xp} XP</p>
            </div>
          </CardBody>
        </Card>

        <Card className="border-orange-100">
          <CardBody className="flex items-center gap-3">
            <div className="rounded-lg bg-orange-50 p-2">
              <Flame className="h-5 w-5 text-orange-600" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900">{experience.streak_days}</p>
              <p className="text-xs text-gray-500">連續天數</p>
            </div>
          </CardBody>
        </Card>
      </div>

      {/* 複習提醒 */}
      {todayReviewCount === 0 && (
        <Card className="border-amber-200 bg-amber-50">
          <CardBody className="flex items-center justify-between">
            <div>
              <p className="font-medium text-amber-800">📚 今日複習提醒</p>
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

      {/* 整體進度 */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-indigo-600" />
            <h2 className="text-lg font-semibold text-gray-900">學習進度概覽</h2>
          </div>
        </CardHeader>
        <CardBody className="space-y-3">
          <Progress
            value={completedCount}
            max={totalNodes || 1}
            label={`${completedCount} / ${totalNodes} 節點已完成`}
            showPercentage
            size="lg"
          />
        </CardBody>
      </Card>

      {/* 快速操作 */}
      <div>
        <h2 className="mb-3 text-base font-semibold text-gray-900">快速開始</h2>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5">
          {QUICK_ACTIONS.map((action) => (
            <Link key={action.href} href={action.href}>
              <Card hoverable className="h-full">
                <CardBody className="flex flex-col items-center gap-2 py-4 text-center">
                  <div className={`rounded-lg p-2 ${action.bg}`}>
                    <action.icon className={`h-6 w-6 ${action.color}`} />
                  </div>
                  <span className="text-sm font-medium text-gray-700">{action.label}</span>
                </CardBody>
              </Card>
            </Link>
          ))}
        </div>
      </div>

      {/* 專科總覽 */}
      <Card>
        <CardHeader className="flex items-center justify-between">
          <h2 className="text-base font-semibold text-gray-900">專科總覽</h2>
          <Link href="/graph">
            <Button variant="ghost" size="sm">
              前往圖譜
              <ChevronRight className="ml-1 h-4 w-4" />
            </Button>
          </Link>
        </CardHeader>
        <CardBody>
          <div className="grid grid-cols-2 gap-2 md:grid-cols-4">
            {specialtyProgress.map((spec) => (
              <Link
                key={spec.key}
                href={`/graph?specialty=${spec.key}`}
                className="flex items-center justify-between rounded-lg border border-gray-100 bg-gray-50 px-3 py-2.5 transition-colors hover:bg-gray-100"
              >
                <span className="text-sm font-medium text-gray-800">{spec.label}</span>
                <span className="rounded-full bg-white px-2 py-0.5 text-xs font-medium text-gray-500 shadow-sm">
                  {spec.total}
                </span>
              </Link>
            ))}
          </div>
        </CardBody>
      </Card>
    </div>
  );
}
