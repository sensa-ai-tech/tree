import Link from 'next/link';
import { Settings, Sparkles, ClipboardCheck, BarChart3, ArrowLeft } from 'lucide-react';

const ADMIN_NAV = [
  { href: '/admin/generate', label: 'AI 生成', icon: <Sparkles className="h-4 w-4" /> },
  { href: '/admin/review', label: '內容審核', icon: <ClipboardCheck className="h-4 w-4" /> },
  { href: '/admin/analytics', label: '數據分析', icon: <BarChart3 className="h-4 w-4" /> },
] as const;

export default function AdminLayout({ children }: { children: React.ReactNode }) {
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
      </header>

      <div className="flex">
        {/* Admin Sidebar */}
        <aside className="w-56 border-r border-gray-200 bg-white">
          <nav className="space-y-1 p-3">
            {ADMIN_NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors"
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
