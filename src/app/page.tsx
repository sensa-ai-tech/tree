'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Map, Stethoscope, Gamepad2 } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card, CardBody } from '@/components/ui/Card';
import { useAuthStore } from '@/stores/auth-store';

const FEATURES = [
  {
    icon: <Map className="h-8 w-8 text-indigo-600" />,
    title: '知識圖譜',
    description: '以互動式圖譜呈現獸醫專科知識，清楚掌握各概念間的關聯與脈絡。',
  },
  {
    icon: <Stethoscope className="h-8 w-8 text-emerald-600" />,
    title: '互動病例',
    description: '模擬真實臨床情境的病例闖關，從問診到治療逐步訓練診斷思維。',
  },
  {
    icon: <Gamepad2 className="h-8 w-8 text-amber-600" />,
    title: '遊戲化學習',
    description: '經驗值、等級、成就徽章與間隔重複，讓專科知識學習充滿動力。',
  },
] as const;

export default function HomePage() {
  const router = useRouter();
  const { user, _hasHydrated } = useAuthStore();
  const [redirecting, setRedirecting] = useState(false);

  // 已登入使用者自動導向 Dashboard
  useEffect(() => {
    if (_hasHydrated && user) {
      setRedirecting(true);
      router.replace('/graph');
    }
  }, [user, _hasHydrated, router]);

  if (!_hasHydrated || redirecting) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-50">
        <div className="flex flex-col items-center gap-3">
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-indigo-200 border-t-indigo-600" />
          <p className="text-sm text-gray-500">載入中...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 via-white to-white">
      {/* Hero */}
      <section className="flex flex-col items-center justify-center px-6 pt-32 pb-20 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
          獸醫專科知識樹
        </h1>
        <p className="mt-4 max-w-xl text-lg text-gray-600">
          結構化 &middot; 互動式 &middot; 遊戲化的獸醫專科學習平台
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link href="/login">
            <Button size="lg">開始學習</Button>
          </Link>
          <a href="#features">
            <Button variant="secondary" size="lg">
              了解更多
            </Button>
          </a>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="mx-auto max-w-5xl px-6 pb-24">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature) => (
            <Card key={feature.title} hoverable className="p-0">
              <CardBody className="flex flex-col items-start gap-3">
                <div className="rounded-lg bg-gray-50 p-3">{feature.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900">{feature.title}</h3>
                <p className="text-sm leading-relaxed text-gray-600">{feature.description}</p>
              </CardBody>
            </Card>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 py-8 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} VetKnowledgeTree. All rights reserved.
      </footer>
    </div>
  );
}
