/**
 * Tests for lib/constants/navigation.ts
 *
 * Validates the structure and content of NAV_ITEMS and MOBILE_NAV_ITEMS
 * that are shared across Sidebar and MobileBottomNav.
 */
import { describe, it, expect } from 'vitest';
import { NAV_ITEMS, MOBILE_NAV_ITEMS } from '@/lib/constants/navigation';

describe('NAV_ITEMS', () => {
  it('is a non-empty array', () => {
    expect(Array.isArray(NAV_ITEMS)).toBe(true);
    expect(NAV_ITEMS.length).toBeGreaterThan(0);
  });

  it('every item has an href string', () => {
    for (const item of NAV_ITEMS) {
      expect(typeof item.href).toBe('string');
      expect(item.href.startsWith('/')).toBe(true);
    }
  });

  it('every item has a label string', () => {
    for (const item of NAV_ITEMS) {
      expect(typeof item.label).toBe('string');
      expect(item.label.length).toBeGreaterThan(0);
    }
  });

  it('every item has an icon (function or forwardRef object)', () => {
    for (const item of NAV_ITEMS) {
      // Lucide icons may be plain functions or React.forwardRef() objects
      expect(['function', 'object']).toContain(typeof item.icon);
      expect(item.icon).not.toBeNull();
    }
  });

  it('contains expected routes (/home, /graph, /review, /cases, /admin)', () => {
    const hrefs = NAV_ITEMS.map((i) => i.href);
    expect(hrefs).toContain('/home');
    expect(hrefs).toContain('/graph');
    expect(hrefs).toContain('/review');
    expect(hrefs).toContain('/cases');
    expect(hrefs).toContain('/admin');
  });

  it('only the /admin item has adminOnly: true', () => {
    const adminItems = NAV_ITEMS.filter((i) => i.adminOnly === true);
    expect(adminItems).toHaveLength(1);
    expect(adminItems[0].href).toBe('/admin');
  });
});

describe('MOBILE_NAV_ITEMS', () => {
  it('contains exactly 5 items', () => {
    expect(MOBILE_NAV_ITEMS).toHaveLength(5);
  });

  it('contains no adminOnly items', () => {
    for (const item of MOBILE_NAV_ITEMS) {
      expect(item.adminOnly).toBeFalsy();
    }
  });

  it('is a subset of NAV_ITEMS (same object references)', () => {
    for (const mobileItem of MOBILE_NAV_ITEMS) {
      expect(NAV_ITEMS).toContain(mobileItem);
    }
  });

  it('starts with /home', () => {
    expect(MOBILE_NAV_ITEMS[0].href).toBe('/home');
  });
});
