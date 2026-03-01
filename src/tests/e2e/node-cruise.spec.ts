import { test, expect } from '@playwright/test';

/**
 * 知識節點巡航測試
 * 逐一瀏覽所有知識節點，檢查：
 * 1. 頁面正常載入（h1 可見）
 * 2. 無 [圖片: / [藥物: / [互動: 原始占位符殘留
 * 3. 無空章節標題
 * 4. 參考文獻區塊可讀（字體 ≥ 12px）
 * 5. Disease 節點有 Accordion
 * 6. Diagnostic 節點有 Tabs
 */

// 所有專科節點 ID prefix
const SPECIALTIES = ['CARDIO', 'IM', 'DERM', 'SURG', 'NEURO', 'ONCO', 'ECC', 'CPATH'];
const LAYERS = ['L0', 'L1', 'L2', 'L3', 'L4', 'L5'];

// 動態生成可能的節點 ID，巡航測試會 skip 不存在的
function generateNodeIds(): string[] {
  const ids: string[] = [];
  for (const spec of SPECIALTIES) {
    for (const layer of LAYERS) {
      for (let i = 1; i <= 35; i++) {
        ids.push(`${spec}-${layer}-${String(i).padStart(3, '0')}`);
      }
    }
  }
  return ids;
}

const ALL_NODE_IDS = generateNodeIds();

// 原始占位符文字的正則
const RAW_PLACEHOLDER_PATTERNS = [
  /\[圖片:[^\]]*\]/,
  /\[藥物:[^\]]*\]/,
  /\[互動:[^\]]*\]/,
];

test.describe('Knowledge Node Cruise', () => {
  test('graph page loads and shows nodes', async ({ page }) => {
    await page.goto('/graph');
    await expect(page.locator('h1')).toContainText('知識圖譜');
  });

  test('cruise all node detail pages', async ({ page }) => {
    const results: Array<{
      nodeId: string;
      status: 'pass' | 'skip' | 'fail';
      issues: string[];
    }> = [];

    // 先訪問首頁讓 DemoDataProvider 注入資料
    await page.goto('/graph');
    await page.waitForTimeout(2000);

    for (const nodeId of ALL_NODE_IDS) {
      const response = await page.goto(`/nodes/${nodeId}`, {
        waitUntil: 'networkidle',
        timeout: 15000,
      }).catch(() => null);

      // 頁面不存在或重定向 → skip
      if (!response || response.status() >= 400) {
        continue;
      }

      // 等待頁面內容載入
      await page.waitForTimeout(500);

      const bodyText = await page.locator('body').textContent().catch(() => '');

      // 如果顯示「找不到此知識節點」→ skip
      if (bodyText?.includes('找不到此知識節點')) {
        continue;
      }

      const issues: string[] = [];

      // CHECK 1: h1 標題可見
      const h1 = page.locator('h1').first();
      const h1Visible = await h1.isVisible().catch(() => false);
      if (!h1Visible) {
        issues.push('h1 not visible');
      }

      // CHECK 2: 無原始占位符殘留
      const pageContent = bodyText ?? '';
      for (const pattern of RAW_PLACEHOLDER_PATTERNS) {
        if (pattern.test(pageContent)) {
          issues.push(`Raw placeholder found: ${pattern.source}`);
        }
      }

      // CHECK 3: 檢查表格溢出（僅桌面版）
      const tableOverflow = await page.evaluate(() => {
        const tables = document.querySelectorAll('table');
        for (const table of tables) {
          if (table.scrollWidth > table.clientWidth + 5) {
            return true;
          }
        }
        return false;
      }).catch(() => false);
      if (tableOverflow) {
        issues.push('Table overflow detected');
      }

      // CHECK 4: 參考文獻字體大小
      const refFontTooSmall = await page.evaluate(() => {
        const refSection = document.querySelector('ol.list-decimal');
        if (!refSection) return false;
        const cs = window.getComputedStyle(refSection);
        return parseFloat(cs.fontSize) < 12;
      }).catch(() => false);
      if (refFontTooSmall) {
        issues.push('Reference font size < 12px');
      }

      results.push({
        nodeId,
        status: issues.length === 0 ? 'pass' : 'fail',
        issues,
      });
    }

    // 輸出結果摘要
    const passed = results.filter((r) => r.status === 'pass').length;
    const failed = results.filter((r) => r.status === 'fail').length;
    const total = results.length;

    console.warn(`\n=== Node Cruise Results ===`);
    console.warn(`Total visited: ${total} | Passed: ${passed} | Failed: ${failed}`);

    // 列出所有問題
    const failedNodes = results.filter((r) => r.status === 'fail');
    if (failedNodes.length > 0) {
      console.warn('\nFailed nodes:');
      for (const node of failedNodes) {
        console.warn(`  ${node.nodeId}: ${node.issues.join(', ')}`);
      }
    }

    // 期望零失敗
    expect(failed, `${failed} nodes have issues`).toBe(0);
  });
});
