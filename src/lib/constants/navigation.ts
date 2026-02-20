import {
  Home,
  Map,
  Route,
  RotateCcw,
  Briefcase,
  Trophy,
  User,
  Settings,
} from 'lucide-react';
import { createElement } from 'react';

export interface NavItem {
  href: string;
  label: string;
  /** lucide icon component — 用 createElement 延遲渲染 */
  icon: typeof Home;
  adminOnly?: boolean;
}

/**
 * 全站導航項目（Sidebar + MobileBottomNav 共用）。
 * icon 儲存元件參考，各消費端自行 createElement 指定 className。
 */
export const NAV_ITEMS: NavItem[] = [
  { href: '/', label: '首頁', icon: Home },
  { href: '/graph', label: '知識圖譜', icon: Map },
  { href: '/paths', label: '學習路徑', icon: Route },
  { href: '/review', label: '每日複習', icon: RotateCcw },
  { href: '/cases', label: '病例挑戰', icon: Briefcase },
  { href: '/achievements', label: '成就', icon: Trophy },
  { href: '/profile', label: '個人資料', icon: User },
  { href: '/admin', label: 'Admin', icon: Settings, adminOnly: true },
];

/** 手機底部導航僅顯示 5 個高頻非管理項目 */
export const MOBILE_NAV_ITEMS = NAV_ITEMS.filter((i) => !i.adminOnly).slice(0, 5);
