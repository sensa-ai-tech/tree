'use client';

import { useState, useMemo, useRef, useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { Search, X } from 'lucide-react';
import { cn } from '@/lib/utils/cn';
import { useKnowledgeStore } from '@/stores/knowledge-store';

const SPECIALTY_LABELS: Record<string, string> = {
  CARDIO: '心臟科', IM: '內科', DERM: '皮膚科', SURG: '外科',
  NEURO: '神經科', ONCO: '腫瘤科', ECC: '急診加護', CPATH: '臨床病理',
};

export function NavbarSearch() {
  const { nodes, setFilters } = useKnowledgeStore();
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

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

  useEffect(() => {
    setActiveIndex(-1);
  }, [searchResults.length]);

  function handleSearchKeyDown(e: React.KeyboardEvent): void {
    if (!showDropdown || searchResults.length === 0) return;

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setActiveIndex((prev) => (prev + 1) % (searchResults.length + 1));
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

  const handleClickOutside = useCallback((e: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
      setShowDropdown(false);
      setActiveIndex(-1);
    }
  }, []);

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [handleClickOutside]);

  return (
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
              className="absolute right-2 top-1/2 -translate-y-1/2 rounded p-0.5 text-gray-400 hover:text-gray-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-1"
              aria-label="清除搜尋"
            >
              <X className="h-3.5 w-3.5" aria-hidden="true" />
            </button>
          )}
        </div>
      </form>

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
                    'flex w-full items-center gap-3 px-3 py-2.5 text-left transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-indigo-500',
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
                  'flex w-full items-center justify-center gap-1 border-t border-gray-100 px-3 py-2 text-xs font-medium text-indigo-600 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-indigo-500',
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
  );
}
