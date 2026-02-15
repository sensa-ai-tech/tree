'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { LogIn } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Card, CardBody, CardHeader } from '@/components/ui/Card';
import { useAuthStore } from '@/stores/auth-store';
import { showToast } from '@/components/ui/Toast';

export default function LoginPage() {
  const router = useRouter();
  const { login, isLoading, error, clearError } = useAuthStore();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>): Promise<void> {
    e.preventDefault();
    clearError();

    if (!email || !password) {
      showToast.error('請填寫所有欄位');
      return;
    }

    await login(email, password);

    const currentError = useAuthStore.getState().error;
    if (!currentError) {
      showToast.success('登入成功');
      router.push('/');
    } else {
      showToast.error(currentError);
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
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              label="Email"
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              error={error && !email ? '請輸入 Email' : undefined}
              required
            />
            <Input
              label="密碼"
              type="password"
              placeholder="請輸入密碼"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            {error && <p className="text-sm text-red-600">{error}</p>}
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
