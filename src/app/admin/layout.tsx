'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { Settings, Sparkles, ClipboardCheck, BarChart3, ArrowLeft, LogOut } from 'lucide-react';

const ADMIN_NAV = [
  { href: '/admin/generate', label: 'AI 生成', icon: <Sparkles className="h-4 w-4" aria-hidden="true" /> },
  { href: '/admin/review', label: '內容審核', icon: <ClipboardCheck className="h-4 w-4" aria-hidden="true" /> },
  { href: '/admin/analytics', label: '數據分析', icon: <BarChart3 className="h-4 w-4" aria-hidden="true" /> },
] as const;

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();

  // Admin login page renders without admin chrome
  if (pathname === '/admin/login') {
    return <>{children}</>;
  }

  async function handleLogout() {
    await fetch('/api/admin/logout', { method: 'POST' });
    router.push('/admin/login');
    router.refresh();
  }

  // Middleware ensures only authenticated admins reach here
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Admin Navbar */}
      <header className="sticky top-0 z-40 flex h-14 items-center justify-between border-b border-gray-200 bg-white px-4 shadow-sm">
        <div className="flex items-center gap-3">
          <Link
            href="/"
            className="flex items-center gap-1 text-sm text-gray-500 hover:text-gray-700 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            返回
          </Link>
          <div className="h-5 w-px bg-gray-200" />
          <div className="flex items-center gap-2 text-indigo-600">
            <Settings className="h-5 w-5" />
            <span className="font-semibold">管理後台</span>
          </div>
        </div>
        <button
          onClick={handleLogout}
          className="flex items-center gap-1 rounded-lg px-3 py-1.5 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-700 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-1"
        >
          <LogOut className="h-4 w-4" aria-hidden="true" />
          登出
        </button>
      </header>

      <div className="flex">
        {/* Admin Sidebar */}
        <aside className="w-56 border-r border-gray-200 bg-white">
          <nav className="space-y-1 p-3">
            {ADMIN_NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={pathname === item.href ? 'page' : undefined}
                className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-1"
              >
                {item.icon}
                {item.label}
              </Link>
            ))}
          </nav>
        </aside>

        {/* Main content */}
        <main className="flex-1 p-6 lg:p-8">{children}</main>
      </div>
    </div>
  );
}
