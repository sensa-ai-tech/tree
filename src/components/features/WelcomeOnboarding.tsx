'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Map, Stethoscope, Gamepad2, BookOpen, ArrowRight } from 'lucide-react';
import { Modal } from '@/components/ui/Modal';
import { Button } from '@/components/ui/Button';

const ONBOARDING_KEY = 'vet-onboarding-completed';

const FEATURES = [
  {
    icon: Map,
    color: 'bg-indigo-50 text-indigo-600',
    title: '知識圖譜',
    desc: '264 個知識節點，8 大獸醫專科的互動式視覺化學習路徑。',
    link: '/graph',
  },
  {
    icon: Stethoscope,
    color: 'bg-emerald-50 text-emerald-600',
    title: '臨床病例',
    desc: '99 個互動病例挑戰，模擬真實臨床決策流程。',
    link: '/cases',
  },
  {
    icon: BookOpen,
    color: 'bg-amber-50 text-amber-600',
    title: '間隔複習',
    desc: 'SM-2 演算法優化複習排程，強化長期記憶。',
    link: '/review',
  },
  {
    icon: Gamepad2,
    color: 'bg-orange-50 text-orange-600',
    title: '遊戲化學習',
    desc: 'XP 經驗值、等級提升、成就徽章，讓學習更有動力。',
    link: '/achievements',
  },
] as const;

export function WelcomeOnboarding() {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState(0);

  useEffect(() => {
    const completed = localStorage.getItem(ONBOARDING_KEY);
    if (!completed) {
      setIsOpen(true);
    }
  }, []);

  function handleComplete() {
    localStorage.setItem(ONBOARDING_KEY, 'true');
    setIsOpen(false);
  }

  function handleNext() {
    if (step < 1) {
      setStep(step + 1);
    } else {
      handleComplete();
    }
  }

  return (
    <Modal isOpen={isOpen} onClose={handleComplete} className="max-w-md">
      {step === 0 ? (
        <div className="space-y-4">
          <div className="text-center">
            <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-100">
              <Map className="h-7 w-7 text-indigo-600" />
            </div>
            <h2 className="text-xl font-bold text-gray-900">
              Welcome to VetKnowledgeTree
            </h2>
            <p className="mt-2 text-sm text-gray-500">
              結構化的獸醫專科互動學習平台，幫助你系統性地掌握臨床知識。
            </p>
          </div>
          <div className="space-y-2">
            {FEATURES.map((f) => (
              <div key={f.title} className="flex items-start gap-3 rounded-lg border border-gray-100 p-3">
                <div className={`rounded-lg p-1.5 ${f.color}`}>
                  <f.icon className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">{f.title}</p>
                  <p className="text-xs text-gray-500">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <Button onClick={handleNext} className="w-full" icon={<ArrowRight className="h-4 w-4" />}>
            下一步
          </Button>
        </div>
      ) : (
        <div className="space-y-4">
          <div className="text-center">
            <h2 className="text-lg font-bold text-gray-900">建議的學習路徑</h2>
            <p className="mt-1 text-sm text-gray-500">從以下任一入口開始你的學習之旅：</p>
          </div>
          <div className="space-y-2">
            <Link
              href="/graph"
              onClick={handleComplete}
              className="flex items-center justify-between rounded-lg border border-indigo-200 bg-indigo-50 p-3 transition-colors hover:bg-indigo-100"
            >
              <div className="flex items-center gap-2">
                <Map className="h-4 w-4 text-indigo-600" />
                <span className="text-sm font-medium text-indigo-700">探索知識圖譜</span>
              </div>
              <ArrowRight className="h-4 w-4 text-indigo-400" />
            </Link>
            <Link
              href="/paths"
              onClick={handleComplete}
              className="flex items-center justify-between rounded-lg border border-gray-200 p-3 transition-colors hover:bg-gray-50"
            >
              <div className="flex items-center gap-2">
                <BookOpen className="h-4 w-4 text-gray-600" />
                <span className="text-sm font-medium text-gray-700">選擇學習路徑</span>
              </div>
              <ArrowRight className="h-4 w-4 text-gray-400" />
            </Link>
            <Link
              href="/cases"
              onClick={handleComplete}
              className="flex items-center justify-between rounded-lg border border-gray-200 p-3 transition-colors hover:bg-gray-50"
            >
              <div className="flex items-center gap-2">
                <Stethoscope className="h-4 w-4 text-gray-600" />
                <span className="text-sm font-medium text-gray-700">嘗試病例挑戰</span>
              </div>
              <ArrowRight className="h-4 w-4 text-gray-400" />
            </Link>
          </div>
          <Button onClick={handleComplete} variant="secondary" className="w-full">
            稍後再看
          </Button>
        </div>
      )}
    </Modal>
  );
}
