'use client';

import { BarChart3, Users, BookOpen, TrendingUp, Activity } from 'lucide-react';
import { Card, CardBody, CardHeader } from '@/components/ui/Card';
import { Progress } from '@/components/ui/Progress';

// Mock analytics data
const MOCK_STATS = {
  activeUsers: 128,
  totalNodes: 342,
  completedToday: 56,
  avgSessionMinutes: 23,
};

const NODE_DISTRIBUTION = [
  { specialty: '小動物內科', count: 85, total: 100 },
  { specialty: '外科', count: 62, total: 80 },
  { specialty: '皮膚科', count: 45, total: 60 },
  { specialty: '心臟科', count: 38, total: 50 },
  { specialty: '神經科', count: 32, total: 50 },
  { specialty: '腫瘤科', count: 28, total: 40 },
] as const;

export default function AdminAnalyticsPage() {
  return (
    <div className="space-y-6">
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

      {/* Node Completion Distribution */}
      <Card>
        <CardHeader>
          <h2 className="text-lg font-semibold text-gray-900">各專科節點完成分佈</h2>
        </CardHeader>
        <CardBody className="space-y-4">
          {NODE_DISTRIBUTION.map((item) => (
            <div key={item.specialty} className="space-y-1">
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-700">{item.specialty}</span>
                <span className="text-gray-500">
                  {item.count} / {item.total}
                </span>
              </div>
              <Progress
                value={item.count}
                max={item.total}
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
