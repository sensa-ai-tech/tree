import { test, expect, type Page } from '@playwright/test';

/**
 * Navigation E2E — Round 10 新增
 *
 * 覆蓋三個 layout 元件的互動動線：
 *   - Navbar: logo / search / profile link
 *   - Sidebar: nav items / collapse toggle (desktop only)
 *   - MobileBottomNav: 5 個 tab (mobile only)
 *
 * 策略：
 * - Navbar 測試跑在 chromium + mobile 兩個 project（元件本身在兩種 viewport 都存在）
 * - Sidebar collapse 只跑 desktop viewport（sidebar 在 mobile 是 off-canvas）
 * - MobileBottomNav 只跑 mobile（是 md:hidden，desktop 不顯示）
 */

async function mockLogin(page: Page): Promise<void> {
  await page.goto('/login');
  await page.fill('input[type="email"]', 'student@example.com');
  await page.fill('input[type="password"]', 'demo123');
  await page.locator('form button[type="submit"]').click();
  await page.waitForURL((url) => !url.pathname.startsWith('/login'), {
    timeout: 15_000,
  });
}

/**
 * Dismiss any open modal (e.g. LevelUpModal from gamification store).
 * The Modal component closes on Escape keypress.
 * Called after every page load to ensure a clean, unblocked state.
 */
async function dismissModals(page: Page): Promise<void> {
  await page.keyboard.press('Escape');
  // Wait briefly for the close animation to complete (~200ms)
  const backdrop = page.locator('[aria-hidden="true"].fixed.inset-0').first();
  try {
    await backdrop.waitFor({ state: 'detached', timeout: 1_500 });
  } catch {
    // No modal was blocking — that's fine, continue
  }
}

// ─── Navbar Tests (both viewports) ────────────────────────────────────────────

test.describe('Navbar', () => {
  test.beforeEach(async ({ page }) => {
    await mockLogin(page);
    await page.goto('/home');
    await page.waitForLoadState('networkidle', { timeout: 10_000 });
    await dismissModals(page);
  });

  test('logo link navigates to /home', async ({ page }) => {
    // Navigate away first, then click logo
    await page.goto('/review');
    await page.waitForLoadState('networkidle', { timeout: 10_000 });
    await dismissModals(page);

    const logo = page.locator('a[href="/home"]').first();
    await expect(logo).toBeVisible();
    await logo.click();
    await expect(page).toHaveURL(/\/home/);
  });

  test('search input is visible and accepts text', async ({ page }) => {
    const searchInput = page.locator('input[role="combobox"], input[placeholder*="搜尋"]').first();
    await expect(searchInput).toBeVisible();
    await searchInput.fill('心臟');
    await expect(searchInput).toHaveValue('心臟');
  });

  test('search dropdown appears after typing', async ({ page }) => {
    const searchInput = page.locator('input[role="combobox"], input[placeholder*="搜尋"]').first();
    await searchInput.fill('cardiac');
    // dropdown should appear (role=listbox)
    const dropdown = page.locator('[role="listbox"]');
    await expect(dropdown).toBeVisible({ timeout: 5_000 });
  });

  test('profile link navigates to /profile', async ({ page }) => {
    // Profile link is an <a href="/profile"> in the navbar right section
    const profileLink = page.locator('a[href="/profile"]').first();
    await expect(profileLink).toBeVisible();
    await profileLink.click();
    await expect(page).toHaveURL(/\/profile/);
  });

  test('notifications button is visible and toggles panel', async ({ page }) => {
    const notifBtn = page.getByRole('button', { name: '通知' });
    await expect(notifBtn).toBeVisible();
    await notifBtn.click();
    // Notification panel should appear. The panel always has title "最近動態" (strict match, 1 element).
    await expect(page.getByText('最近動態')).toBeVisible({ timeout: 3_000 });
  });
});

// ─── Sidebar Tests (desktop viewport only) ────────────────────────────────────

test.describe('Sidebar (desktop)', () => {
  // Skip on mobile viewports — sidebar is off-canvas on < 768px.
  // Both chromium and mobile projects use the Chromium engine,
  // so we must check viewport width rather than browserName.
  test.skip(({ viewport }) => !viewport || viewport.width < 768, 'Sidebar collapse is desktop-only (md+ viewport)');

  test.beforeEach(async ({ page }) => {
    await mockLogin(page);
    await page.goto('/home');
    await page.waitForLoadState('networkidle', { timeout: 10_000 });
    await dismissModals(page);
  });

  test('sidebar nav links are visible on desktop', async ({ page }) => {
    // On desktop (md+) sidebar is static and visible
    await expect(page.locator('aside a[href="/graph"]')).toBeVisible();
    await expect(page.locator('aside a[href="/review"]')).toBeVisible();
  });

  test('sidebar nav link navigates to /graph', async ({ page }) => {
    const graphLink = page.locator('aside a[href="/graph"]').first();
    await expect(graphLink).toBeVisible();
    await graphLink.click();
    await expect(page).toHaveURL(/\/graph/);
  });

  test('sidebar nav link navigates to /achievements', async ({ page }) => {
    const link = page.locator('aside a[href="/achievements"]').first();
    await expect(link).toBeVisible();
    await link.click();
    await expect(page).toHaveURL(/\/achievements/);
  });

  test('sidebar collapse button hides nav labels', async ({ page }) => {
    // The collapse button has aria-label "收合側邊欄"
    const collapseBtn = page.getByRole('button', { name: '收合側邊欄' });
    await expect(collapseBtn).toBeVisible();
    await collapseBtn.click();

    // After collapse, nav labels should be hidden (sidebar is 64px wide, labels removed)
    // The expand button should now appear
    const expandBtn = page.getByRole('button', { name: '展開側邊欄' });
    await expect(expandBtn).toBeVisible({ timeout: 3_000 });
  });

  test('sidebar expand button restores nav labels', async ({ page }) => {
    // Collapse first
    await page.getByRole('button', { name: '收合側邊欄' }).click();
    // Then expand
    const expandBtn = page.getByRole('button', { name: '展開側邊欄' });
    await expect(expandBtn).toBeVisible({ timeout: 3_000 });
    await expandBtn.click();

    // Labels should be visible again
    await expect(page.locator('aside').getByText('知識圖譜')).toBeVisible({ timeout: 3_000 });
  });
});

// ─── MobileBottomNav Tests (mobile viewport only) ─────────────────────────────

test.describe('MobileBottomNav', () => {
  test.skip(({ viewport }) => !viewport || viewport.width >= 768, 'Bottom nav is md:hidden (mobile-only viewport)');

  test.beforeEach(async ({ page }) => {
    await mockLogin(page);
    await page.goto('/home');
    await page.waitForLoadState('networkidle', { timeout: 10_000 });
    await dismissModals(page);
  });

  test('bottom nav is visible on mobile viewport (md:hidden breakpoint)', async ({ page }) => {
    const bottomNav = page.locator('nav.fixed.inset-x-0.bottom-0, nav[class*="bottom-0"]').first();
    await expect(bottomNav).toBeVisible();
  });

  test('bottom nav "知識圖譜" tab navigates to /graph', async ({ page }) => {
    const graphTab = page.locator('nav a[href="/graph"]').last(); // bottom nav is last <nav>
    await expect(graphTab).toBeVisible();
    await graphTab.click();
    await expect(page).toHaveURL(/\/graph/);
  });

  test('bottom nav "每日複習" tab navigates to /review', async ({ page }) => {
    const reviewTab = page.locator('nav a[href="/review"]').last();
    await expect(reviewTab).toBeVisible();
    await reviewTab.click();
    await expect(page).toHaveURL(/\/review/);
  });

  test('active tab has indigo color class', async ({ page }) => {
    // Navigate to /graph, then check that /graph tab has active class
    await page.goto('/graph');
    await page.waitForLoadState('networkidle', { timeout: 10_000 });
    await dismissModals(page);

    const graphTab = page.locator('nav.fixed a[href="/graph"]').first();
    await expect(graphTab).toHaveClass(/text-indigo/);
  });
});
