'use client';

import { BarChart3, Users, BookOpen, TrendingUp, Activity } from 'lucide-react';
import { Card, CardBody, CardHeader } from '@/components/ui/Card';
import { Progress } from '@/components/ui/Progress';
import { TOTAL_KNOWLEDGE_NODES, NODES_BY_SPECIALTY } from '@/lib/constants/content-stats';

// Mock analytics data (示範用；唯「總節點數」取自真實 seed 常數)
const MOCK_STATS = {
  activeUsers: 128,
  totalNodes: TOTAL_KNOWLEDGE_NODES,
  completedToday: 56,
  avgSessionMinutes: 23,
};

export default function AdminAnalyticsPage() {
  return (
    <div className="space-y-6">
      <div
        role="note"
        className="rounded-lg border border-amber-300 bg-amber-50 px-4 py-3 text-sm text-amber-800"
      >
        示範資料 Demo data —「總節點數」與「各專科節點數分佈」為真實 seed 數字；活躍使用者、今日完成、平均學習時長為示範用途，尚未接上真實後端。
      </div>
      <div className="flex items-center gap-2">
        <BarChart3 className="h-6 w-6 text-indigo-600" />
        <h1 className="text-2xl font-bold text-gray-900">學習數據分析</h1>
      </div>

      {/* Overview Stats */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardBody className="flex items-center gap-3">
            <div className="rounded-lg bg-blue-50 p-2">
              <Users className="h-5 w-5 text-blue-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">活躍使用者</p>
              <p className="text-xl font-bold text-gray-900">{MOCK_STATS.activeUsers}</p>
            </div>
          </CardBody>
        </Card>

        <Card>
          <CardBody className="flex items-center gap-3">
            <div className="rounded-lg bg-indigo-50 p-2">
              <BookOpen className="h-5 w-5 text-indigo-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">總節點數</p>
              <p className="text-xl font-bold text-gray-900">{MOCK_STATS.totalNodes}</p>
            </div>
          </CardBody>
        </Card>

        <Card>
          <CardBody className="flex items-center gap-3">
            <div className="rounded-lg bg-emerald-50 p-2">
              <TrendingUp className="h-5 w-5 text-emerald-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">今日完成</p>
              <p className="text-xl font-bold text-gray-900">{MOCK_STATS.completedToday}</p>
            </div>
          </CardBody>
        </Card>

        <Card>
          <CardBody className="flex items-center gap-3">
            <div className="rounded-lg bg-amber-50 p-2">
              <Activity className="h-5 w-5 text-amber-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">平均學習時長</p>
              <p className="text-xl font-bold text-gray-900">{MOCK_STATS.avgSessionMinutes} 分鐘</p>
            </div>
          </CardBody>
        </Card>
      </div>

      {/* Per-specialty node distribution — real seed counts (B3) */}
      <Card>
        <CardHeader>
          <h2 className="text-lg font-semibold text-gray-900">各專科節點數分佈</h2>
        </CardHeader>
        <CardBody className="space-y-4">
          {NODES_BY_SPECIALTY.map((item) => (
            <div key={item.code} className="space-y-1">
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-700">{item.label}</span>
                <span className="text-gray-500">{item.count} 節點</span>
              </div>
              <Progress
                value={item.count}
                max={NODES_BY_SPECIALTY[0].count}
                variant="mastery"
                size="sm"
              />
            </div>
          ))}
        </CardBody>
      </Card>
    </div>
  );
}
