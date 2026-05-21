import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import { LearningPathCard } from '@/components/features/LearningPathCard';
import type { LearningPath } from '@/types/knowledge';
import { makeLearningPath } from '@/tests/factories';

// Test-specific overrides — 大部分欄位走 factory 預設
function makePath(overrides: Partial<LearningPath> = {}): LearningPath {
  return makeLearningPath({
    title: '小動物內科入門',
    description: '從常見內科疾病開始學習',
    ...overrides,
  });
}

describe('LearningPathCard: basic rendering', () => {
  it('renders title, description, and estimated hours', () => {
    render(<LearningPathCard path={makePath()} />);
    expect(screen.getByText('小動物內科入門')).toBeInTheDocument();
    expect(screen.getByText('從常見內科疾病開始學習')).toBeInTheDocument();
    expect(screen.getByText(/12 小時/)).toBeInTheDocument();
  });

  it('renders node count', () => {
    render(<LearningPathCard path={makePath()} />);
    expect(screen.getByText(/3 個節點/)).toBeInTheDocument();
  });

  it('shows target audience badge when provided', () => {
    render(<LearningPathCard path={makePath()} />);
    expect(screen.getByText('實習獸醫')).toBeInTheDocument();
  });

  it('omits target audience when null', () => {
    render(<LearningPathCard path={makePath({ target_audience: null })} />);
    expect(screen.queryByText('實習獸醫')).not.toBeInTheDocument();
  });

  it('omits description block when null', () => {
    const { container } = render(
      <LearningPathCard path={makePath({ description: null })} />
    );
    // description text 應該不存在
    expect(container.textContent).not.toContain('從常見內科');
  });
});

describe('LearningPathCard: certificate badge', () => {
  it('shows 證書 badge when has_certificate is true', () => {
    render(<LearningPathCard path={makePath({ has_certificate: true })} />);
    expect(screen.getByText('證書')).toBeInTheDocument();
  });

  it('hides 證書 badge when has_certificate is false', () => {
    render(<LearningPathCard path={makePath({ has_certificate: false })} />);
    expect(screen.queryByText('證書')).not.toBeInTheDocument();
  });
});

describe('LearningPathCard: progress + CTA states', () => {
  it('CTA shows "開始學習" when no progress', () => {
    render(<LearningPathCard path={makePath()} />);
    expect(screen.getByRole('button', { name: '開始學習' })).toBeInTheDocument();
  });

  it('CTA shows "開始學習" when progress is 0', () => {
    render(<LearningPathCard path={makePath()} progress={0} />);
    expect(screen.getByRole('button', { name: '開始學習' })).toBeInTheDocument();
  });

  it('CTA shows "繼續學習" when progress is partial', () => {
    render(<LearningPathCard path={makePath()} progress={50} />);
    expect(screen.getByRole('button', { name: '繼續學習' })).toBeInTheDocument();
  });

  it('CTA shows "已完成" + disabled when progress is 100', () => {
    render(<LearningPathCard path={makePath()} progress={100} />);
    const btn = screen.getByRole('button', { name: '已完成' });
    expect(btn).toBeDisabled();
  });

  it('progress bar is hidden when progress is undefined', () => {
    const { container } = render(<LearningPathCard path={makePath()} />);
    expect(container.querySelector('[role="progressbar"]')).toBeNull();
  });

  it('progress bar is shown when progress is provided', () => {
    const { container } = render(
      <LearningPathCard path={makePath()} progress={50} />
    );
    expect(container.querySelector('[role="progressbar"]')).toBeTruthy();
  });
});

describe('LearningPathCard: onStart callback', () => {
  it('calls onStart when CTA clicked', async () => {
    const onStart = vi.fn();
    const user = userEvent.setup();
    render(<LearningPathCard path={makePath()} onStart={onStart} />);
    await user.click(screen.getByRole('button', { name: '開始學習' }));
    expect(onStart).toHaveBeenCalledTimes(1);
  });

  it('does NOT call onStart when path is complete (button disabled)', async () => {
    const onStart = vi.fn();
    const user = userEvent.setup();
    render(<LearningPathCard path={makePath()} progress={100} onStart={onStart} />);
    await user.click(screen.getByRole('button', { name: '已完成' }));
    expect(onStart).not.toHaveBeenCalled();
  });

  it('does not throw when onStart is not provided and user clicks', async () => {
    const user = userEvent.setup();
    render(<LearningPathCard path={makePath()} />);
    await expect(
      user.click(screen.getByRole('button', { name: '開始學習' }))
    ).resolves.not.toThrow();
  });
});
