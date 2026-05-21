import { test, expect } from '@playwright/test';

/**
 * 學習路徑流程 e2e
 *
 * 設計原則：
 * - 不依賴語言相依的 `text=登入`，改用 role + accessible name 或 href
 * - 經過 dashboard layout 的頁面需先登入（mock-mode 任何 email/password 都會通）
 * - 在 mock-mode 下 SupabaseDataProvider 不會觸發，由 DemoDataProvider 注入 seed
 */

async function mockLogin(page: import('@playwright/test').Page): Promise<void> {
  await page.goto('/login');
  await page.fill('input[type="email"]', 'student@example.com');
  await page.fill('input[type="password"]', 'demo123');
  // 同一個 form 內的 submit 按鈕
  await page.locator('form button[type="submit"]').click();
  // 等到不再是 /login（dashboard 會 router.replace 到 /home）
  await page.waitForURL((url) => !url.pathname.startsWith('/login'), { timeout: 15_000 });
}

test.describe('Learning Path Flow', () => {
  test('should display the landing page', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/VetKnowledgeTree/);
    await expect(page.getByRole('heading', { name: /獸醫專科知識樹/ })).toBeVisible();
  });

  test('should navigate from landing CTA to login page', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('link', { name: '開始學習' }).click();
    await expect(page).toHaveURL(/\/login/);
  });

  test('should login and reach dashboard', async ({ page }) => {
    await mockLogin(page);
    await expect(page).toHaveURL(/\/home|\/dashboard|\/graph|\/$/);
  });

  test('should display knowledge graph after login', async ({ page }) => {
    await mockLogin(page);
    await page.goto('/graph');
    await expect(page.getByRole('heading', { name: /知識圖譜/ })).toBeVisible();
    // 應該看到專科卡片或綜覽全圖按鈕
    const overview = page.getByRole('button', { name: /綜覽全圖/ });
    await expect(overview).toBeVisible({ timeout: 10_000 });
  });

  test('should display learning paths', async ({ page }) => {
    await mockLogin(page);
    await page.goto('/paths');
    await expect(page.getByRole('heading', { level: 1 })).toContainText(/學習路徑|Learning/);
  });

  test('should display achievements page', async ({ page }) => {
    await mockLogin(page);
    await page.goto('/achievements');
    await expect(page.getByRole('heading', { level: 1 })).toContainText(/成就|Achievement/);
  });
});
