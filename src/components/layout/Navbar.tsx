'use client';

import { BookOpen, Menu, User } from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils/cn';
import { useAuthStore } from '@/stores/auth-store';
import { NavbarSearch } from './NavbarSearch';
import { NavbarNotifications } from './NavbarNotifications';

interface NavbarProps {
  className?: string;
  /** 手機端漢堡按鈕觸發 sidebar 開啟 */
  onMenuClick?: () => void;
}

export function Navbar({ className, onMenuClick }: NavbarProps) {
  const { user } = useAuthStore();

  return (
    <header
      className={cn(
        'sticky top-0 z-40 flex h-14 items-center justify-between border-b border-gray-200 bg-white px-4 shadow-sm',
        className
      )}
    >
      {/* Left: 漢堡按鈕 (手機) + Logo */}
      <div className="flex items-center gap-2">
        {onMenuClick && (
          <button
            type="button"
            onClick={onMenuClick}
            className="rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-1 md:hidden"
            aria-label="開啟選單"
          >
            <Menu className="h-5 w-5" aria-hidden="true" />
          </button>
        )}
        <Link href="/home" className="flex items-center gap-2 text-indigo-600 hover:text-indigo-700 transition-colors">
          <BookOpen className="h-6 w-6" aria-hidden="true" />
          <span className="hidden sm:inline text-lg font-bold tracking-tight">VetKnowledgeTree</span>
        </Link>
      </div>

      <NavbarSearch />

      {/* Right section */}
      <div className="flex items-center gap-3">
        <NavbarNotifications />

        {/* A18 fix: add aria-label since email is hidden on mobile (icon-only on small screens) */}
        <Link
          href="/profile"
          aria-label="個人檔案"
          className="flex items-center gap-2 rounded-lg px-2 py-1 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
        >
          <User className="h-5 w-5 text-gray-500" aria-hidden="true" />
          <span className="hidden md:inline">{user?.email ?? '訪客'}</span>
        </Link>
      </div>
    </header>
  );
}
