'use client';

import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { LogIn } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Card, CardBody, CardHeader } from '@/components/ui/Card';
import { useAuthStore } from '@/stores/auth-store';
import { showToast } from '@/components/ui/Toast';
import { isMockMode } from '@/data/seed/mock-mode';

export default function LoginPage() {
  const router = useRouter();
  const { login, isLoading, error, clearError, user, _hasHydrated, sessionVerified } = useAuthStore();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // In-flight guard: the mock auth store resolves login() synchronously, so
  // isLoading flips true→false within one tick and never disables the button
  // long enough to block a rapid double/triple click — each synchronous submit
  // then fires its own 登入成功 toast + router.push. This ref rejects concurrent
  // submits regardless of how fast the store resolves.
  const submittingRef = useRef(false);

  // 已登入使用者直接導向 dashboard（與 app/page.tsx 的根目錄 redirect 一致）
  useEffect(() => {
    if (_hasHydrated && sessionVerified && user) {
      router.replace('/home');
    }
  }, [user, _hasHydrated, sessionVerified, router]);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>): Promise<void> {
    e.preventDefault();
    if (submittingRef.current) return;
    clearError();

    if (!email || !password) {
      showToast.error('請填寫所有欄位');
      return;
    }

    // UX-cruise iter 1: email-format check symmetric with register.
    const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!EMAIL_RE.test(email)) {
      showToast.error('請輸入有效的 Email 格式');
      return;
    }

    // user-r3-002: symmetric with register (which enforces ≥6 chars).
    // Mock store ignores password but real Supabase will reject short ones — fail fast here.
    const MIN_PASSWORD_LENGTH = 6;
    if (password.length < MIN_PASSWORD_LENGTH) {
      showToast.error(`密碼至少需要 ${MIN_PASSWORD_LENGTH} 個字元`);
      return;
    }

    // Guard set only after validation passes, so a failed attempt doesn't lock out retries.
    submittingRef.current = true;
    try {
      await login(email, password);

      const currentError = useAuthStore.getState().error;
      if (!currentError) {
        showToast.success('登入成功');
        // 導向 /home 而非 /graph：讓 WelcomeOnboarding modal 在首次登入時觸發，
        // 並提供等級/XP/連續天數的個人化脈絡，而不是丟到 8 格的 specialty 選單。
        router.push('/home');
      } else {
        showToast.error(currentError);
      }
    } finally {
      submittingRef.current = false;
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <div className="flex items-center gap-2">
            <LogIn className="h-5 w-5 text-indigo-600" />
            <h1 className="text-xl font-semibold text-gray-900">登入</h1>
          </div>
        </CardHeader>
        <CardBody>
          {isMockMode() && (
            <div className="mb-4 rounded-lg border border-indigo-100 bg-indigo-50 p-3 text-sm text-indigo-700">
              示範模式：輸入任意 Email 與密碼（至少 6 字元）即可直接體驗，無需真實帳號。
            </div>
          )}
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              label="Email"
              type="email"
              placeholder="you@example.com"
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              error={error && !email ? '請輸入 Email' : undefined}
              required
            />
            <Input
              label="密碼"
              type="password"
              placeholder="請輸入密碼"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            {error && <p role="alert" className="text-sm text-red-600">{error}</p>}
            <Button type="submit" isLoading={isLoading} className="w-full">
              登入
            </Button>
          </form>
          <p className="mt-4 text-center text-sm text-gray-600">
            還沒有帳號？{' '}
            <Link href="/register" className="font-medium text-indigo-600 hover:text-indigo-500">
              立即註冊
            </Link>
          </p>
        </CardBody>
      </Card>
    </div>
  );
}
