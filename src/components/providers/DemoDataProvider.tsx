'use client';

import { useEffect, useRef } from 'react';
import { isMockMode } from '@/data/seed/mock-mode';

interface DemoDataProviderProps {
  children: React.ReactNode;
}

/**
 * Mock 模式下自動注入 seed 資料的 Client 元件。
 * 在 production 有 Supabase URL 時不會執行任何注入。
 * Seed data 透過 dynamic import 按需載入，避免打包到 client bundle。
 */
export function DemoDataProvider({ children }: DemoDataProviderProps) {
  const initialized = useRef(false);

  useEffect(() => {
    if (!initialized.current && isMockMode()) {
      import('@/data/seed').then(({ initializeDemoData }) => {
        initializeDemoData();
        initialized.current = true;
      });
    }
  }, []);

  return <>{children}</>;
}
