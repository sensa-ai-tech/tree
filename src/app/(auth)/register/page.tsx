'use client';

import { useState, useEffect, useRef } from 'react';
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
  const { register, isLoading, error, clearError, user, _hasHydrated, sessionVerified } = useAuthStore();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [localError, setLocalError] = useState<string | null>(null);
  // In-flight guard — mirrors login (iter 9). Mock register() resolves in one tick
  // so isLoading never disables the button long enough to block a rapid double-click;
  // without this each synchronous submit fires its own 註冊成功 toast + navigation.
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
    setLocalError(null);

    if (!email || !password || !confirmPassword) {
      showToast.error('請填寫所有欄位');
      return;
    }

    // UX-cruise iter 1: explicit email-format check — `type=email` only validates
    // on native submit, which preventDefault() bypasses. Guard here so a malformed
    // address fails fast instead of registering a broken mock account.
    const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!EMAIL_RE.test(email)) {
      setLocalError('請輸入有效的 Email 格式');
      return;
    }

    if (password !== confirmPassword) {
      setLocalError('兩次輸入的密碼不一致');
      return;
    }

    const MIN_PASSWORD_LENGTH = 6;
    if (password.length < MIN_PASSWORD_LENGTH) {
      setLocalError(`密碼至少需要 ${MIN_PASSWORD_LENGTH} 個字元`);
      return;
    }

    // Guard set only after validation passes, so a failed attempt doesn't lock out retries.
    submittingRef.current = true;
    try {
      await register(email, password);

      const currentError = useAuthStore.getState().error;
      if (!currentError) {
        showToast.success('註冊成功');
        // 導向 /home 讓 WelcomeOnboarding modal 在首次註冊時觸發
        router.push('/home');
      } else {
        showToast.error(currentError);
      }
    } finally {
      submittingRef.current = false;
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
