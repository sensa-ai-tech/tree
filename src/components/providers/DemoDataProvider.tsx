'use client';

import { useEffect, useRef } from 'react';
import { initializeDemoData, isMockMode } from '@/data/seed';

interface DemoDataProviderProps {
  children: React.ReactNode;
}

/**
 * Mock 模式下自動注入 seed 資料的 Client 元件。
 * 在 production 有 Supabase URL 時不會執行任何注入。
 */
export function DemoDataProvider({ children }: DemoDataProviderProps) {
  const initialized = useRef(false);

  useEffect(() => {
    if (!initialized.current && isMockMode()) {
      initializeDemoData();
      initialized.current = true;
    }
  }, []);

  return <>{children}</>;
}
