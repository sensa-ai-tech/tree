'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { UserPlus } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Card, CardBody, CardHeader } from '@/components/ui/Card';
import { useAuthStore } from '@/stores/auth-store';
import { showToast } from '@/components/ui/Toast';

export default function RegisterPage() {
  const router = useRouter();
  const { register, isLoading, error, clearError, user, _hasHydrated } = useAuthStore();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [localError, setLocalError] = useState<string | null>(null);

  // 已登入使用者直接導向首頁
  useEffect(() => {
    if (_hasHydrated && user) {
      router.replace('/graph');
    }
  }, [user, _hasHydrated, router]);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>): Promise<void> {
    e.preventDefault();
    clearError();
    setLocalError(null);

    if (!email || !password || !confirmPassword) {
      showToast.error('請填寫所有欄位');
      return;
    }

    if (password !== confirmPassword) {
      setLocalError('兩次輸入的密碼不一致');
      return;
    }

    if (password.length < 6) {
      setLocalError('密碼至少需要 6 個字元');
      return;
    }

    await register(email, password);

    const currentError = useAuthStore.getState().error;
    if (!currentError) {
      showToast.success('註冊成功');
      router.push('/graph');
    } else {
      showToast.error(currentError);
    }
  }

  const displayError = localError ?? error;

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <div className="flex items-center gap-2">
            <UserPlus className="h-5 w-5 text-indigo-600" />
            <h1 className="text-xl font-semibold text-gray-900">註冊</h1>
          </div>
        </CardHeader>
        <CardBody>
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              label="Email"
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Input
              label="密碼"
              type="password"
              placeholder="至少 6 個字元"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <Input
              label="確認密碼"
              type="password"
              placeholder="再次輸入密碼"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              error={localError === '兩次輸入的密碼不一致' ? localError : undefined}
              required
            />
            {displayError && <p className="text-sm text-red-600">{displayError}</p>}
            <Button type="submit" isLoading={isLoading} className="w-full">
              註冊
            </Button>
          </form>
          <p className="mt-4 text-center text-sm text-gray-600">
            已有帳號？{' '}
            <Link href="/login" className="font-medium text-indigo-600 hover:text-indigo-500">
              登入
            </Link>
          </p>
        </CardBody>
      </Card>
    </div>
  );
}
