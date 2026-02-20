'use client';

import { useState, createElement } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { cn } from '@/lib/utils/cn';
import { useAuthStore } from '@/stores/auth-store';
import { NAV_ITEMS } from '@/lib/constants/navigation';

interface SidebarProps {
  className?: string;
  /** 手機 drawer 模式下關閉 callback */
  onClose?: () => void;
}

export function Sidebar({ className, onClose }: SidebarProps) {
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

  function handleNavClick(): void {
    // 手機 drawer 模式：點擊導航項目後自動關閉
    onClose?.();
  }

  return (
    <aside
      className={cn(
        'flex h-screen flex-col border-r border-gray-200 bg-white transition-all duration-200',
        collapsed ? 'w-16' : 'w-56',
        className
      )}
    >
      {/* Header: 手機顯示關閉按鈕，桌面顯示 collapse toggle */}
      <div className="flex items-center justify-between p-2">
        {onClose && (
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg p-1.5 text-gray-400 hover:bg-gray-100 hover:text-gray-600 transition-colors md:hidden"
            aria-label="關閉側邊欄"
          >
            <X className="h-5 w-5" />
          </button>
        )}
        <div className="hidden md:flex md:ml-auto">
          <button
            type="button"
            onClick={handleToggleCollapse}
            className="rounded-lg p-1.5 text-gray-400 hover:bg-gray-100 hover:text-gray-600 transition-colors"
            aria-label={collapsed ? '展開側邊欄' : '收合側邊欄'}
          >
            {collapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-1 px-2 overflow-y-auto">
        {visibleItems.map((item) => {
          const isActive = item.href === '/'
            ? pathname === '/'
            : pathname.startsWith(item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={handleNavClick}
              className={cn(
                'flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors',
                isActive
                  ? 'bg-indigo-50 text-indigo-700'
                  : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
              )}
              title={collapsed ? item.label : undefined}
            >
              <span className="flex-shrink-0">
                {createElement(item.icon, { className: 'h-5 w-5' })}
              </span>
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
