'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Search, Bell, User, BookOpen } from 'lucide-react';
import { cn } from '@/lib/utils/cn';
import { useAuthStore } from '@/stores/auth-store';
import { useKnowledgeStore } from '@/stores/knowledge-store';
import Link from 'next/link';

interface NavbarProps {
  className?: string;
}

export function Navbar({ className }: NavbarProps) {
  const { user } = useAuthStore();
  const { setFilters } = useKnowledgeStore();
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');

  function handleSearchSubmit(e: React.FormEvent<HTMLFormElement>): void {
    e.preventDefault();
    if (searchQuery.trim()) {
      setFilters({ search: searchQuery.trim() });
      router.push('/graph');
    }
  }

  return (
    <header
      className={cn(
        'sticky top-0 z-40 flex h-14 items-center justify-between border-b border-gray-200 bg-white px-4 shadow-sm',
        className
      )}
    >
      {/* Logo */}
      <Link href="/" className="flex items-center gap-2 text-indigo-600 hover:text-indigo-700 transition-colors">
        <BookOpen className="h-6 w-6" />
        <span className="hidden sm:inline text-lg font-bold tracking-tight">VetKnowledgeTree</span>
      </Link>

      {/* Search */}
      <form onSubmit={handleSearchSubmit} className="mx-4 flex-1 max-w-md">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="搜尋知識節點..."
            className="w-full rounded-lg border border-gray-300 bg-gray-50 py-1.5 pl-9 pr-3 text-sm placeholder:text-gray-400 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
          />
        </div>
      </form>

      {/* Right section */}
      <div className="flex items-center gap-3">
        <button
          type="button"
          className="relative rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700 transition-colors"
          aria-label="通知"
        >
          <Bell className="h-5 w-5" />
        </button>

        <Link
          href="/profile"
          className="flex items-center gap-2 rounded-lg px-2 py-1 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
        >
          <User className="h-5 w-5 text-gray-500" />
          <span className="hidden md:inline">{user?.email ?? '訪客'}</span>
        </Link>
      </div>
    </header>
  );
}
