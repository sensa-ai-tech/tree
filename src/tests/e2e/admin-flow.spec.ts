import { test, expect } from '@playwright/test';

/**
 * Admin 流程 E2E
 *
 * 涵蓋：
 * 1. /admin/login 頁面正常渲染
 * 2. 錯誤密碼 → API 回傳 401 → 顯示「密碼錯誤」
 * 3. 未登入訪問 /admin/* 受保護路由 → 重導向至 /admin/login
 * 4. 重導向時保留 ?from= 查詢參數
 *
 * 注意：
 * - 登入 API 有 200ms 強制延遲（防 timing attack）+ InMemoryRateLimitStore
 *   限制每 IP 每 15 分鐘 5 次。本 spec 只使用 1 次錯誤嘗試，不影響限制。
 * - 不測試成功登入（需要實際密碼 + cookie 持久化，超出此 spec 範圍）。
 */

test.describe('Admin Flow', () => {
  test('admin login page renders with form and heading', async ({ page }) => {
    await page.goto('/admin/login');
    // h1 heading visible
    await expect(page.getByRole('heading', { name: '管理員登入' })).toBeVisible();
    // password field and submit button
    await expect(page.locator('input[type="password"]')).toBeVisible();
    await expect(page.locator('form button[type="submit"]')).toBeVisible();
    // hint text
    await expect(page.getByText('請輸入管理員密碼以存取後台')).toBeVisible();
  });

  test('wrong password shows 密碼錯誤 error from API', async ({ page }) => {
    // Login API has a 200 ms forced delay; allow 8 s total
    test.setTimeout(20_000);

    await page.goto('/admin/login');
    await page.fill('input[type="password"]', 'definitely-wrong-password-xyz-12345');
    await page.locator('form button[type="submit"]').click();

    // Error message appears after the server round-trip (≥ 200 ms)
    await expect(page.getByText('密碼錯誤')).toBeVisible({ timeout: 8_000 });
    // Still on the login page (no redirect)
    expect(page.url()).toContain('/admin/login');
  });

  test('unauthenticated access to /admin/generate redirects to /admin/login', async ({ page }) => {
    await page.goto('/admin/generate');
    // Middleware redirects to /admin/login
    await expect(page).toHaveURL(/\/admin\/login/, { timeout: 10_000 });
  });

  test('redirect preserves ?from= query param for post-login navigation', async ({ page }) => {
    await page.goto('/admin/analytics');
    await page.waitForURL(/\/admin\/login/);
    const url = new URL(page.url());
    expect(url.searchParams.get('from')).toBe('/admin/analytics');
  });

  test('admin login page accessible without authentication (not redirect-looped)', async ({ page }) => {
    // /admin/login is exempted from the admin auth middleware guard
    await page.goto('/admin/login');
    // Must stay on /admin/login, not bounce anywhere else
    await expect(page).toHaveURL(/\/admin\/login/);
    await expect(page.getByRole('heading', { name: '管理員登入' })).toBeVisible();
  });
});
