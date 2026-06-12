'use client';

import { useState } from 'react';
import { User, Award, BookOpen, Flame, BarChart3, LogOut, Trash2 } from 'lucide-react';
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
  const [isDeleting, setIsDeleting] = useState(false);

  const levelInfo = getLevelInfo(experience.total_xp);
  const completedCount = getCompletedCount();
  const inProgressCount = getInProgressCount();

  async function handleLogout(): Promise<void> {
    await logout();
    useLearningStore.getState().resetStore();
    useGamificationStore.getState().resetStore();
    showToast.success('已登出');
    router.push('/login');
  }

  // 個資法 §3 / GDPR Art.17 right-to-erasure — calls /api/account DELETE
  // (added iter 1), clears stores, redirects /login. window.confirm is
  // friction-by-design so a stray click cannot wipe real student progress.
  async function handleDeleteAccount(): Promise<void> {
    const confirmed = window.confirm(
      '確定要永久刪除帳號嗎？此動作會清除你的學習進度、複習紀錄、成就和經驗值，無法復原。'
    );
    if (!confirmed) return;

    setIsDeleting(true);
    try {
      const res = await fetch('/api/account', { method: 'DELETE' });
      if (!res.ok && res.status !== 204) {
        const body = (await res.json().catch(() => ({}))) as { error?: string };
        showToast.error(body.error ?? '帳號刪除失敗，請聯絡客服');
        return;
      }
      await logout();
      useLearningStore.getState().resetStore();
      useGamificationStore.getState().resetStore();
      showToast.success('帳號已刪除');
      router.push('/login');
    } catch {
      showToast.error('帳號刪除失敗，請稍後再試');
    } finally {
      setIsDeleting(false);
    }
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
              <Award className="h-5 w-5 text-amber-500" aria-hidden="true" />
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
          <div className="text-center text-xs text-gray-600">
            {levelInfo.xpForNextLevel > levelInfo.xpForCurrentLevel ? (
              // 顯示「本級進度」而非等級門檻。舊文案「目前 {xpForCurrentLevel} XP」會印出該等級的
              // 累計起始門檻（Lv.1 = 0），與上方的總 XP（129）並排時讓人誤以為自己只有 0 XP。
              // 改為本級已累積 / 本級所需，與進度條的百分比一致。
              <>本級進度 {experience.total_xp - levelInfo.xpForCurrentLevel} / {levelInfo.xpForNextLevel - levelInfo.xpForCurrentLevel} XP</>
            ) : (
              <>已達最高等級</>
            )}
          </div>
        </CardBody>
      </Card>

      {/* Learning Stats */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardBody className="flex items-center gap-3">
            <div className="rounded-lg bg-emerald-50 p-2">
              <BookOpen className="h-5 w-5 text-emerald-600" aria-hidden="true" />
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
              <BarChart3 className="h-5 w-5 text-blue-600" aria-hidden="true" />
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
              <Flame className="h-5 w-5 text-orange-600" aria-hidden="true" />
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
              <Award className="h-5 w-5 text-amber-600" aria-hidden="true" />
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

      {/* 危險區 — 個資法 §3 / GDPR Art.17 right-to-erasure */}
      <Card className="border-red-200">
        <CardHeader>
          <h2 className="flex items-center gap-2 text-lg font-semibold text-red-700">
            <Trash2 className="h-5 w-5" aria-hidden="true" />
            危險區
          </h2>
        </CardHeader>
        <CardBody className="space-y-3">
          <p className="text-sm text-gray-600">
            刪除帳號會永久清除你的學習進度、複習紀錄、成就紀錄與經驗值，且<strong className="text-red-700">無法復原</strong>。請於確認後再執行。
          </p>
          <Button
            variant="ghost"
            onClick={handleDeleteAccount}
            isLoading={isDeleting}
            disabled={isDeleting}
            icon={<Trash2 className="h-4 w-4" />}
            className="text-red-700 hover:bg-red-50"
          >
            {isDeleting ? '正在刪除…' : '刪除我的帳號'}
          </Button>
        </CardBody>
      </Card>
    </div>
  );
}
