'use client';

import { useState, useMemo, useRef, useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { Search, Bell, User, BookOpen, Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils/cn';
import { useAuthStore } from '@/stores/auth-store';
import { useKnowledgeStore } from '@/stores/knowledge-store';
import Link from 'next/link';

interface NavbarProps {
  className?: string;
  /** 手機端漢堡按鈕觸發 sidebar 開啟 */
  onMenuClick?: () => void;
}

const SPECIALTY_LABELS: Record<string, string> = {
  CARDIO: '心臟科', IM: '內科', DERM: '皮膚科', SURG: '外科',
  NEURO: '神經科', ONCO: '腫瘤科', ECC: '急診加護', CPATH: '臨床病理',
};

export function Navbar({ className, onMenuClick }: NavbarProps) {
  const { user } = useAuthStore();
  const { nodes, setFilters } = useKnowledgeStore();
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // 即時搜尋結果（最多 8 筆）
  const searchResults = useMemo(() => {
    if (!searchQuery.trim() || searchQuery.trim().length < 1) return [];
    const query = searchQuery.trim().toLowerCase();
    return nodes
      .filter(
        (n) =>
          n.title.toLowerCase().includes(query) ||
          (n.title_en?.toLowerCase().includes(query) ?? false) ||
          n.id.toLowerCase().includes(query)
      )
      .slice(0, 8);
  }, [nodes, searchQuery]);

  function handleSearchSubmit(e: React.FormEvent<HTMLFormElement>): void {
    e.preventDefault();
    if (searchQuery.trim()) {
      setFilters({ search: searchQuery.trim() });
      setShowDropdown(false);
      router.push('/graph');
    }
  }

  function handleResultClick(nodeId: string): void {
    setShowDropdown(false);
    setSearchQuery('');
    router.push(`/nodes/${nodeId}`);
  }

  function handleClearSearch(): void {
    setSearchQuery('');
    setShowDropdown(false);
    inputRef.current?.focus();
  }

  // 關閉下拉（點擊外部）
  const handleClickOutside = useCallback((e: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
      setShowDropdown(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [handleClickOutside]);

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
            className="rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700 transition-colors md:hidden"
            aria-label="開啟選單"
          >
            <Menu className="h-5 w-5" />
          </button>
        )}
        <Link href="/home" className="flex items-center gap-2 text-indigo-600 hover:text-indigo-700 transition-colors">
          <BookOpen className="h-6 w-6" />
          <span className="hidden sm:inline text-lg font-bold tracking-tight">VetKnowledgeTree</span>
        </Link>
      </div>

      {/* Search with instant results */}
      <div ref={dropdownRef} className="relative mx-4 flex-1 max-w-md">
        <form onSubmit={handleSearchSubmit}>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
            <input
              ref={inputRef}
              type="text"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setShowDropdown(e.target.value.trim().length > 0);
              }}
              onFocus={() => {
                if (searchQuery.trim().length > 0) setShowDropdown(true);
              }}
              placeholder="搜尋知識節點..."
              className="w-full rounded-lg border border-gray-300 bg-gray-50 py-1.5 pl-9 pr-8 text-sm placeholder:text-gray-400 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
              role="combobox"
              aria-expanded={showDropdown}
              aria-haspopup="listbox"
              aria-controls="search-results"
              autoComplete="off"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={handleClearSearch}
                className="absolute right-2 top-1/2 -translate-y-1/2 rounded p-0.5 text-gray-400 hover:text-gray-600"
                aria-label="清除搜尋"
              >
                <X className="h-3.5 w-3.5" />
              </button>
            )}
          </div>
        </form>

        {/* 即時搜尋下拉結果 */}
        {showDropdown && searchQuery.trim().length > 0 && (
          <div
            id="search-results"
            role="listbox"
            className="absolute top-full left-0 right-0 mt-1 max-h-80 overflow-y-auto rounded-lg border border-gray-200 bg-white shadow-lg"
          >
            {searchResults.length > 0 ? (
              <>
                {searchResults.map((node) => (
                  <button
                    key={node.id}
                    type="button"
                    role="option"
                    aria-selected={false}
                    onClick={() => handleResultClick(node.id)}
                    className="flex w-full items-center gap-3 px-3 py-2.5 text-left hover:bg-indigo-50 transition-colors"
                  >
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-sm font-medium text-gray-900">{node.title}</p>
                      <p className="truncate text-xs text-gray-500">
                        {SPECIALTY_LABELS[node.specialty] ?? node.specialty} · L{node.layer} · {node.node_type}
                      </p>
                    </div>
                  </button>
                ))}
                <button
                  type="button"
                  onClick={() => {
                    setFilters({ search: searchQuery.trim() });
                    setShowDropdown(false);
                    router.push('/graph');
                  }}
                  className="flex w-full items-center justify-center gap-1 border-t border-gray-100 px-3 py-2 text-xs font-medium text-indigo-600 hover:bg-indigo-50 transition-colors"
                >
                  <Search className="h-3 w-3" />
                  在圖譜中查看全部結果
                </button>
              </>
            ) : (
              <div className="px-3 py-4 text-center text-sm text-gray-500">
                找不到符合「{searchQuery}」的節點
              </div>
            )}
          </div>
        )}
      </div>

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
