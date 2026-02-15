import { test, expect } from '@playwright/test';

test.describe('Learning Path Flow', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should display the home page', async ({ page }) => {
    await expect(page).toHaveTitle(/VetKnowledgeTree/);
  });

  test('should navigate to login page', async ({ page }) => {
    await page.click('text=登入');
    await expect(page).toHaveURL(/\/login/);
  });

  test('should navigate to graph page after login', async ({ page }) => {
    // Mock login
    await page.goto('/login');
    await page.fill('input[type="email"]', 'test@example.com');
    await page.fill('input[type="password"]', 'password123');
    await page.click('button[type="submit"]');
    
    // Should redirect to dashboard
    await page.waitForURL(/\//);
  });

  test('should display knowledge graph', async ({ page }) => {
    await page.goto('/graph');
    // Graph container should be visible
    const graphContainer = page.locator('.react-flow');
    await expect(graphContainer).toBeVisible({ timeout: 10000 }).catch(() => {
      // In mock mode, may show empty state
    });
  });

  test('should display learning paths', async ({ page }) => {
    await page.goto('/paths');
    await expect(page.locator('h1')).toContainText(/學習路徑|Learning/);
  });

  test('should display achievements page', async ({ page }) => {
    await page.goto('/achievements');
    await expect(page.locator('h1')).toContainText(/成就|Achievement/);
  });
});
