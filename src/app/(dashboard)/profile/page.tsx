'use client';

import { User, Award, BookOpen, Flame, BarChart3, LogOut } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { Card, CardBody, CardHeader } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Progress } from '@/components/ui/Progress';
import { Button } from '@/components/ui/Button';
import { useAuthStore } from '@/stores/auth-store';
import { useGamificationStore } from '@/stores/gamification-store';
import { useLearningStore } from '@/stores/learning-store';
import { getLevelInfo } from '@/lib/gamification/level-system';
import { showToast } from '@/components/ui/Toast';

export default function ProfilePage() {
  const router = useRouter();
  const { user, logout } = useAuthStore();
  const { experience, achievements } = useGamificationStore();
  const { getCompletedCount, getInProgressCount } = useLearningStore();

  const levelInfo = getLevelInfo(experience.total_xp);
  const completedCount = getCompletedCount();
  const inProgressCount = getInProgressCount();

  async function handleLogout(): Promise<void> {
    await logout();
    showToast.success('已登出');
    router.push('/login');
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <User className="h-6 w-6 text-indigo-600" />
          <h1 className="text-2xl font-bold text-gray-900">個人資料</h1>
        </div>
        <Button variant="ghost" onClick={handleLogout} icon={<LogOut className="h-4 w-4" />}>
          登出
        </Button>
      </div>

      {/* XP Progress */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <h2 className="flex items-center gap-2 text-lg font-semibold text-gray-900">
              <Award className="h-5 w-5 text-amber-500" />
              等級與經驗值
            </h2>
            <Badge className="bg-indigo-100 text-indigo-700">
              Lv.{levelInfo.level} {levelInfo.tierLabel}
            </Badge>
          </div>
        </CardHeader>
        <CardBody className="space-y-4">
          <div className="text-center">
            <p className="text-3xl font-bold text-indigo-600">{experience.total_xp} XP</p>
            <p className="text-sm text-gray-500">{levelInfo.tierLabelEn}</p>
          </div>
          <Progress
            value={levelInfo.progressToNext * 100}
            max={100}
            variant="xp"
            size="lg"
            label={`距離下一級：${Math.round(levelInfo.progressToNext * 100)}%`}
            showPercentage
          />
          <div className="text-center text-xs text-gray-400">
            目前 {levelInfo.xpForCurrentLevel} XP / 下一級 {levelInfo.xpForNextLevel} XP
          </div>
        </CardBody>
      </Card>

      {/* Learning Stats */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardBody className="flex items-center gap-3">
            <div className="rounded-lg bg-emerald-50 p-2">
              <BookOpen className="h-5 w-5 text-emerald-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">已完成節點</p>
              <p className="text-xl font-bold text-gray-900">{completedCount}</p>
            </div>
          </CardBody>
        </Card>

        <Card>
          <CardBody className="flex items-center gap-3">
            <div className="rounded-lg bg-blue-50 p-2">
              <BarChart3 className="h-5 w-5 text-blue-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">進行中</p>
              <p className="text-xl font-bold text-gray-900">{inProgressCount}</p>
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

        <Card>
          <CardBody className="flex items-center gap-3">
            <div className="rounded-lg bg-amber-50 p-2">
              <Award className="h-5 w-5 text-amber-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">已解鎖成就</p>
              <p className="text-xl font-bold text-gray-900">{achievements.length}</p>
            </div>
          </CardBody>
        </Card>
      </div>

      {/* Specialty Distribution */}
      <Card>
        <CardHeader>
          <h2 className="text-lg font-semibold text-gray-900">專科探索分佈</h2>
        </CardHeader>
        <CardBody>
          {experience.specialties_explored.length > 0 ? (
            <div className="flex flex-wrap gap-2">
              {experience.specialties_explored.map((specialty) => (
                <Badge key={specialty} variant="outline">
                  {specialty}
                </Badge>
              ))}
            </div>
          ) : (
            <p className="text-sm text-gray-500">尚未開始探索任何專科</p>
          )}
        </CardBody>
      </Card>

      {/* User Info */}
      <Card>
        <CardHeader>
          <h2 className="text-lg font-semibold text-gray-900">帳號資訊</h2>
        </CardHeader>
        <CardBody className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-gray-500">Email</span>
            <span className="text-gray-900">{user?.email ?? '-'}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500">角色</span>
            <span className="text-gray-900">{user?.role === 'admin' ? '管理員' : '學習者'}</span>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}
