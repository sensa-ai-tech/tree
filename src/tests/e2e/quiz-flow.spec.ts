import { test, expect } from '@playwright/test';

/**
 * E2E 測試：複習/測驗與病例流程
 */
test.describe('Quiz and Cases Flow', () => {
  test('should load the review page', async ({ page }) => {
    await page.goto('/review');
    await page.waitForTimeout(2000);

    const heading = page.locator('h1').first();
    await expect(heading).toBeVisible({ timeout: 10000 });
  });

  test('should load the cases page', async ({ page }) => {
    await page.goto('/cases');
    await page.waitForTimeout(2000);

    const heading = page.locator('h1').first();
    await expect(heading).toBeVisible({ timeout: 10000 });
  });

  test('should load the profile page', async ({ page }) => {
    await page.goto('/profile');
    await page.waitForTimeout(2000);

    const heading = page.locator('h1').first();
    await expect(heading).toBeVisible({ timeout: 10000 });
  });
});
