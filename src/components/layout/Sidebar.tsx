'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Home,
  Map,
  Route,
  RotateCcw,
  Briefcase,
  Trophy,
  User,
  Settings,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import { cn } from '@/lib/utils/cn';
import { useAuthStore } from '@/stores/auth-store';

interface NavItem {
  href: string;
  label: string;
  icon: React.ReactNode;
  adminOnly?: boolean;
}

const NAV_ITEMS: NavItem[] = [
  { href: '/', label: '首頁', icon: <Home className="h-5 w-5" /> },
  { href: '/knowledge-graph', label: '知識圖譜', icon: <Map className="h-5 w-5" /> },
  { href: '/learning-paths', label: '學習路徑', icon: <Route className="h-5 w-5" /> },
  { href: '/daily-review', label: '每日複習', icon: <RotateCcw className="h-5 w-5" /> },
  { href: '/case-challenges', label: '病例挑戰', icon: <Briefcase className="h-5 w-5" /> },
  { href: '/achievements', label: '成就', icon: <Trophy className="h-5 w-5" /> },
  { href: '/profile', label: '個人資料', icon: <User className="h-5 w-5" /> },
  { href: '/admin', label: 'Admin', icon: <Settings className="h-5 w-5" />, adminOnly: true },
];

interface SidebarProps {
  className?: string;
}

export function Sidebar({ className }: SidebarProps) {
  const [collapsed, setCollapsed] = useState(false);
  const pathname = usePathname();
  const { user } = useAuthStore();

  const isAdmin = user?.role === 'admin';

  const visibleItems = NAV_ITEMS.filter((item) => {
    if (item.adminOnly && !isAdmin) return false;
    return true;
  });

  function handleToggleCollapse(): void {
    setCollapsed((prev) => !prev);
  }

  return (
    <aside
      className={cn(
        'flex flex-col border-r border-gray-200 bg-white transition-all duration-200',
        collapsed ? 'w-16' : 'w-56',
        className
      )}
    >
      {/* Toggle button */}
      <div className="flex justify-end p-2">
        <button
          type="button"
          onClick={handleToggleCollapse}
          className="rounded-lg p-1.5 text-gray-400 hover:bg-gray-100 hover:text-gray-600 transition-colors"
          aria-label={collapsed ? '展開側邊欄' : '收合側邊欄'}
        >
          {collapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-1 px-2">
        {visibleItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors',
                isActive
                  ? 'bg-indigo-50 text-indigo-700'
                  : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
              )}
              title={collapsed ? item.label : undefined}
            >
              <span className="flex-shrink-0">{item.icon}</span>
              {!collapsed && <span>{item.label}</span>}
            </Link>
          );
        })}
      </nav>

      {/* Bottom section */}
      {!collapsed && (
        <div className="border-t border-gray-100 px-4 py-3">
          <p className="truncate text-xs text-gray-400">
            {user ? user.email : '未登入'}
          </p>
        </div>
      )}
    </aside>
  );
}
