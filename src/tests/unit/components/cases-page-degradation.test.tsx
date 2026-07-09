import { render, screen, waitFor } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

/**
 * 回歸守衛（eng-iter2 / 安全審查 F1）：cases 頁的動態 import 原本無 .catch，
 * chunk 載入失敗（弱網／部署換版 ChunkLoadError）會讓頁面永久停在骨架、
 * error boundary 也接不到未處理的 promise rejection。修法加 .catch/.finally 後，
 * 失敗時必須顯示可辨識的 error UI 而非無限 loading。
 *
 * 這裡讓 dynamic import 的目標模組在載入時 throw，模擬 ChunkLoadError。
 */
vi.mock('@/data/seed/case-lookup', () => {
  throw new Error('ChunkLoadError: failed to load /_next/static/chunks/case-lookup.js');
});

import CasesPage from '@/app/(dashboard)/cases/page';

describe('CasesPage — chunk 載入失敗降級', () => {
  it('import 失敗時顯示 error UI，不卡在無限骨架', async () => {
    render(<CasesPage />);
    await waitFor(() => {
      expect(screen.getByText('病例載入失敗')).toBeTruthy();
    });
    // 不應仍停在載入骨架的「病例將在管理員建立後顯示」空狀態或骨架
    expect(screen.queryByText('尚無病例挑戰')).toBeNull();
  });
});
