'use client';

import { useState, useMemo, useRef, useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { Search, Bell, User, BookOpen, Menu, X, Trophy, Flame, Star } from 'lucide-react';
import { cn } from '@/lib/utils/cn';
import { useAuthStore } from '@/stores/auth-store';
import { useKnowledgeStore } from '@/stores/knowledge-store';
import { useGamificationStore } from '@/stores/gamification-store';
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
  const recentXPEvents = useGamificationStore((s) => s.recentXPEvents);
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const notifRef = useRef<HTMLDivElement>(null);
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

  // 重設 activeIndex 當搜尋結果變化
  useEffect(() => {
    setActiveIndex(-1);
  }, [searchResults.length]);

  // 搜尋鍵盤導航
  function handleSearchKeyDown(e: React.KeyboardEvent): void {
    if (!showDropdown || searchResults.length === 0) return;

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setActiveIndex((prev) => (prev + 1) % (searchResults.length + 1)); // +1 for "view all" button
        break;
      case 'ArrowUp':
        e.preventDefault();
        setActiveIndex((prev) => (prev - 1 + searchResults.length + 1) % (searchResults.length + 1));
        break;
      case 'Enter':
        e.preventDefault();
        if (activeIndex >= 0 && activeIndex < searchResults.length) {
          handleResultClick(searchResults[activeIndex].id);
        } else if (activeIndex === searchResults.length) {
          // "View all" button
          setFilters({ search: searchQuery.trim() });
          setShowDropdown(false);
          router.push('/graph');
        }
        break;
      case 'Escape':
        setShowDropdown(false);
        setActiveIndex(-1);
        break;
    }
  }

  // 關閉下拉（點擊外部）
  const handleClickOutside = useCallback((e: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
      setShowDropdown(false);
      setActiveIndex(-1);
    }
    if (notifRef.current && !notifRef.current.contains(e.target as Node)) {
      setShowNotifications(false);
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
            <Menu className="h-5 w-5" aria-hidden="true" />
          </button>
        )}
        <Link href="/home" className="flex items-center gap-2 text-indigo-600 hover:text-indigo-700 transition-colors">
          <BookOpen className="h-6 w-6" aria-hidden="true" />
          <span className="hidden sm:inline text-lg font-bold tracking-tight">VetKnowledgeTree</span>
        </Link>
      </div>

      {/* Search with instant results */}
      <div ref={dropdownRef} className="relative mx-4 flex-1 max-w-md">
        <form onSubmit={handleSearchSubmit}>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" aria-hidden="true" />
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
              aria-activedescendant={activeIndex >= 0 ? `search-result-${activeIndex}` : undefined}
              autoComplete="off"
              onKeyDown={handleSearchKeyDown}
            />
            {searchQuery && (
              <button
                type="button"
                onClick={handleClearSearch}
                className="absolute right-2 top-1/2 -translate-y-1/2 rounded p-0.5 text-gray-400 hover:text-gray-600"
                aria-label="清除搜尋"
              >
                <X className="h-3.5 w-3.5" aria-hidden="true" />
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
                {searchResults.map((node, i) => (
                  <button
                    key={node.id}
                    id={`search-result-${i}`}
                    type="button"
                    role="option"
                    aria-selected={i === activeIndex}
                    onClick={() => handleResultClick(node.id)}
                    className={cn(
                      'flex w-full items-center gap-3 px-3 py-2.5 text-left transition-colors',
                      i === activeIndex ? 'bg-indigo-50' : 'hover:bg-indigo-50'
                    )}
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
                  id={`search-result-${searchResults.length}`}
                  type="button"
                  onClick={() => {
                    setFilters({ search: searchQuery.trim() });
                    setShowDropdown(false);
                    router.push('/graph');
                  }}
                  className={cn(
                    'flex w-full items-center justify-center gap-1 border-t border-gray-100 px-3 py-2 text-xs font-medium text-indigo-600 transition-colors',
                    activeIndex === searchResults.length ? 'bg-indigo-50' : 'hover:bg-indigo-50'
                  )}
                >
                  <Search className="h-3 w-3" aria-hidden="true" />
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
        <div ref={notifRef} className="relative">
          <button
            type="button"
            onClick={() => setShowNotifications((v) => !v)}
            className="relative rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700 transition-colors"
            // A17 fix: expose notification count to screen readers
            aria-label={recentXPEvents.length > 0 ? `通知（${recentXPEvents.length} 則新動態）` : '通知'}
            aria-expanded={showNotifications}
          >
            <Bell className="h-5 w-5" aria-hidden="true" />
            {recentXPEvents.length > 0 && (
              <span className="absolute right-1 top-1 h-2 w-2 rounded-full bg-indigo-500" />
            )}
          </button>

          {showNotifications && (
            <div className="absolute right-0 top-full mt-1 w-72 rounded-lg border border-gray-200 bg-white shadow-lg z-50">
              <div className="border-b border-gray-100 px-3 py-2">
                <p className="text-xs font-semibold text-gray-700">最近動態</p>
              </div>
              <div className="max-h-64 overflow-y-auto">
                {recentXPEvents.length > 0 ? (
                  recentXPEvents.slice(0, 10).map((event, i) => (
                    <div key={i} className="flex items-center gap-2.5 px-3 py-2 text-xs hover:bg-gray-50 transition-colors">
                      {event.source === 'complete_node' && <Star className="h-3.5 w-3.5 flex-shrink-0 text-indigo-500" aria-hidden="true" />}
                      {event.source === 'case_challenge' && <Trophy className="h-3.5 w-3.5 flex-shrink-0 text-amber-500" aria-hidden="true" />}
                      {event.source === 'streak_bonus' && <Flame className="h-3.5 w-3.5 flex-shrink-0 text-orange-500" aria-hidden="true" />}
                      {!['complete_node', 'case_challenge', 'streak_bonus'].includes(event.source) && (
                        <Star className="h-3.5 w-3.5 flex-shrink-0 text-gray-400" aria-hidden="true" />
                      )}
                      <div className="min-w-0 flex-1">
                        <p className="truncate text-gray-700">{event.description}</p>
                        <p className="text-gray-400">{new Date(event.timestamp).toLocaleDateString('zh-TW')}</p>
                      </div>
                      <span className="flex-shrink-0 font-medium text-indigo-600">+{event.amount}</span>
                    </div>
                  ))
                ) : (
                  <div className="px-3 py-6 text-center text-xs text-gray-400">
                    尚無動態記錄
                  </div>
                )}
              </div>
              {recentXPEvents.length > 0 && (
                <Link
                  href="/profile"
                  onClick={() => setShowNotifications(false)}
                  className="block border-t border-gray-100 px-3 py-2 text-center text-xs font-medium text-indigo-600 hover:bg-indigo-50 transition-colors"
                >
                  查看完整記錄
                </Link>
              )}
            </div>
          )}
        </div>

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
