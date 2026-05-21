import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import { SpacedRepReview } from '@/components/features/SpacedRepReview';
import { createInitialState } from '@/lib/gamification/spaced-rep';
import type { SpacedRepetitionState } from '@/types/gamification';

describe('SpacedRepReview: empty state', () => {
  it('shows fallback when question is empty', () => {
    render(<SpacedRepReview nodeId="X" question="" onRate={() => {}} />);
    expect(screen.getByText('無複習題目')).toBeInTheDocument();
  });
});

describe('SpacedRepReview: question/answer flip', () => {
  it('shows question initially, hides answer', () => {
    render(
      <SpacedRepReview
        nodeId="IM-L3-001"
        question="貓 CKD 第幾期開始限磷？"
        answer="Stage 2 開始"
        onRate={() => {}}
      />
    );
    expect(screen.getByText('貓 CKD 第幾期開始限磷？')).toBeInTheDocument();
    expect(screen.queryByText('Stage 2 開始')).not.toBeInTheDocument();
  });

  it('clicking "顯示答案" reveals the answer', async () => {
    const user = userEvent.setup();
    render(
      <SpacedRepReview
        nodeId="N"
        question="Q"
        answer="A 解答"
        onRate={() => {}}
      />
    );
    await user.click(screen.getByRole('button', { name: /顯示答案/ }));
    expect(screen.getByText('A 解答')).toBeInTheDocument();
  });

  it('shows fallback text when answer is missing after flip', async () => {
    const user = userEvent.setup();
    render(<SpacedRepReview nodeId="N" question="Q" onRate={() => {}} />);
    await user.click(screen.getByRole('button', { name: /顯示答案/ }));
    expect(screen.getByText('（答案未提供）')).toBeInTheDocument();
  });

  it('renders nodeId for traceability', () => {
    render(<SpacedRepReview nodeId="ECC-L4-007" question="Q" onRate={() => {}} />);
    expect(screen.getByText(/ECC-L4-007/)).toBeInTheDocument();
  });
});

describe('SpacedRepReview: rating buttons', () => {
  it('reveals 4 rating buttons after flip', async () => {
    const user = userEvent.setup();
    render(<SpacedRepReview nodeId="N" question="Q" onRate={() => {}} />);
    await user.click(screen.getByRole('button', { name: /顯示答案/ }));

    expect(screen.getByText('忘記')).toBeInTheDocument();
    expect(screen.getByText('困難')).toBeInTheDocument();
    expect(screen.getByText('良好')).toBeInTheDocument();
    expect(screen.getByText('簡單')).toBeInTheDocument();
  });

  it('clicking 忘記 fires onRate(1)', async () => {
    const onRate = vi.fn();
    const user = userEvent.setup();
    render(<SpacedRepReview nodeId="N" question="Q" onRate={onRate} />);
    await user.click(screen.getByRole('button', { name: /顯示答案/ }));
    await user.click(screen.getByText('忘記').closest('button')!);
    expect(onRate).toHaveBeenCalledWith(1);
  });

  it('clicking 困難 fires onRate(2)', async () => {
    const onRate = vi.fn();
    const user = userEvent.setup();
    render(<SpacedRepReview nodeId="N" question="Q" onRate={onRate} />);
    await user.click(screen.getByRole('button', { name: /顯示答案/ }));
    await user.click(screen.getByText('困難').closest('button')!);
    expect(onRate).toHaveBeenCalledWith(2);
  });

  it('clicking 良好 fires onRate(3)', async () => {
    const onRate = vi.fn();
    const user = userEvent.setup();
    render(<SpacedRepReview nodeId="N" question="Q" onRate={onRate} />);
    await user.click(screen.getByRole('button', { name: /顯示答案/ }));
    await user.click(screen.getByText('良好').closest('button')!);
    expect(onRate).toHaveBeenCalledWith(3);
  });

  it('clicking 簡單 fires onRate(4)', async () => {
    const onRate = vi.fn();
    const user = userEvent.setup();
    render(<SpacedRepReview nodeId="N" question="Q" onRate={onRate} />);
    await user.click(screen.getByRole('button', { name: /顯示答案/ }));
    await user.click(screen.getByText('簡單').closest('button')!);
    expect(onRate).toHaveBeenCalledWith(4);
  });

  it('flips back to question side after rating (ready for next item)', async () => {
    const user = userEvent.setup();
    render(
      <SpacedRepReview
        nodeId="N"
        question="第一題"
        answer="A"
        onRate={() => {}}
      />
    );
    await user.click(screen.getByRole('button', { name: /顯示答案/ }));
    await user.click(screen.getByText('良好').closest('button')!);

    // 評分後應該回到 question side
    expect(screen.queryByText('A')).not.toBeInTheDocument();
    expect(screen.getByRole('button', { name: /顯示答案/ })).toBeInTheDocument();
  });
});

describe('SpacedRepReview: interval preview', () => {
  it('shows next-review interval per button when currentState provided', async () => {
    const state: SpacedRepetitionState = createInitialState();
    const user = userEvent.setup();
    render(
      <SpacedRepReview
        nodeId="N"
        question="Q"
        answer="A"
        currentState={state}
        onRate={() => {}}
      />
    );
    await user.click(screen.getByRole('button', { name: /顯示答案/ }));
    // 4 個 rating button 應該各帶一個時間字串（"x 天" / "x 個月" / "x 年" / "<1 天"）
    const buttons = screen.getAllByRole('button').filter(
      (b) => ['忘記', '困難', '良好', '簡單'].some((label) => b.textContent?.includes(label))
    );
    expect(buttons).toHaveLength(4);
    for (const btn of buttons) {
      expect(btn.textContent).toMatch(/天|個月|年/);
    }
  });

  it('omits interval text when currentState is absent', async () => {
    const user = userEvent.setup();
    render(
      <SpacedRepReview nodeId="N" question="Q" answer="A" onRate={() => {}} />
    );
    await user.click(screen.getByRole('button', { name: /顯示答案/ }));
    const goodBtn = screen.getByText('良好').closest('button')!;
    expect(goodBtn.textContent).not.toMatch(/個月|年/);
  });
});
