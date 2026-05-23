'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import { Bell, Star, Trophy, Flame } from 'lucide-react';
import Link from 'next/link';
import { useGamificationStore } from '@/stores/gamification-store';

export function NavbarNotifications() {
  const recentXPEvents = useGamificationStore((s) => s.recentXPEvents);
  const [showNotifications, setShowNotifications] = useState(false);
  const notifRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = useCallback((e: MouseEvent) => {
    if (notifRef.current && !notifRef.current.contains(e.target as Node)) {
      setShowNotifications(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [handleClickOutside]);

  return (
    <div ref={notifRef} className="relative">
      <button
        type="button"
        onClick={() => setShowNotifications((v) => !v)}
        className="relative rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-1"
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
  );
}
