'use client';

import { useEffect, useState, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { Navbar } from '@/components/layout/Navbar';
import { Sidebar } from '@/components/layout/Sidebar';
import { MobileBottomNav } from '@/components/layout/MobileBottomNav';
import { DemoDataProvider } from '@/components/providers/DemoDataProvider';
import { useAuthStore } from '@/stores/auth-store';
import { cn } from '@/lib/utils/cn';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const { user, _hasHydrated } = useAuthStore();
  const [isChecking, setIsChecking] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    if (!_hasHydrated) return;

    if (!user) {
      router.replace('/login');
    } else {
      setIsChecking(false);
    }
  }, [user, _hasHydrated, router]);

  const handleOpenSidebar = useCallback(() => {
    setSidebarOpen(true);
  }, []);

  const handleCloseSidebar = useCallback(() => {
    setSidebarOpen(false);
  }, []);

  // 等待 hydration 完成 + auth check
  if (!_hasHydrated || isChecking) {
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
    <DemoDataProvider>
      <div className="min-h-screen bg-gray-50">
        <Navbar onMenuClick={handleOpenSidebar} />
        <div className="flex">
          {/* 手機 overlay backdrop */}
          {sidebarOpen && (
            <div
              className="fixed inset-0 z-40 bg-black/50 transition-opacity md:hidden"
              onClick={handleCloseSidebar}
              aria-hidden="true"
            />
          )}

          {/* Sidebar: 手機 off-canvas drawer, 桌面 static */}
          <Sidebar
            className={cn(
              'fixed inset-y-0 left-0 z-50 transition-transform duration-200 md:sticky md:top-14 md:z-auto md:h-[calc(100vh-3.5rem)]',
              sidebarOpen
                ? 'translate-x-0'
                : '-translate-x-full md:translate-x-0'
            )}
            onClose={handleCloseSidebar}
          />

          {/* 主要內容區 — 手機底部留空給 bottom nav */}
          <main className="min-w-0 flex-1 p-4 pb-20 md:p-6 md:pb-6 lg:p-8 lg:pb-8">
            {children}
          </main>
        </div>

        {/* 手機底部導航 */}
        <MobileBottomNav />
      </div>
    </DemoDataProvider>
  );
}
