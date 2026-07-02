'use client';

import { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Card, CardBody, CardHeader } from '@/components/ui/Card';

export default function AdminLoginPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError('');

    if (!password) {
      setError('請輸入管理員密碼');
      return;
    }

    setIsLoading(true);
    try {
      const res = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      });

      if (!res.ok) {
        const data = (await res.json().catch(() => ({}))) as { error?: string };
        setError(data.error || (res.status === 429 ? '嘗試次數過多，請稍後再試' : '登入失敗'));
        return;
      }

      // SEC-002 fix (hardened): strict allowlist for post-login redirect.
      // Must be a same-origin admin path with no second-char / or \, no control chars,
      // no scheme, no userinfo. Anything else falls back to the safe default.
      const rawFrom = searchParams.get('from') || '/admin/generate';
      const SAFE_FROM = /^\/admin\/[A-Za-z0-9/_-]{0,128}$/;
      const from = SAFE_FROM.test(rawFrom) && rawFrom[1] !== '/' && rawFrom[1] !== '\\'
        ? rawFrom
        : '/admin/generate';
      router.push(from);
      router.refresh();
    } catch {
      setError('連線錯誤，請稍後再試');
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <div className="flex items-center gap-2">
            <ShieldCheck className="h-5 w-5 text-indigo-600" />
            <h1 className="text-xl font-semibold text-gray-900">管理員登入</h1>
          </div>
          <p className="mt-1 text-sm text-gray-500">請輸入管理員密碼以存取後台</p>
        </CardHeader>
        <CardBody>
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              label="管理員密碼"
              type="password"
              placeholder="請輸入密碼"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            {error && <p role="alert" className="text-sm text-red-600">{error}</p>}
            <Button type="submit" isLoading={isLoading} className="w-full">
              登入
            </Button>
          </form>
        </CardBody>
      </Card>
    </div>
  );
}
