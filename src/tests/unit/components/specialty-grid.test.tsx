import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import { SpecialtyGrid } from '@/components/features/SpecialtyGrid';

const fullCounts = {
  CARDIO: 30,
  IM: 50,
  DERM: 20,
  SURG: 25,
  NEURO: 18,
  ONCO: 22,
  ECC: 15,
  CPATH: 17,
};

describe('SpecialtyGrid: rendering 8 specialties', () => {
  it('renders all 8 specialty buttons', () => {
    render(<SpecialtyGrid nodeCounts={fullCounts} onSelect={() => {}} />);
    // 8 個專科 + 可能的「綜覽全圖」按鈕（這個 test 沒給 onSelectAll，所以只有 8 個）
    const buttons = screen.getAllByRole('button');
    expect(buttons).toHaveLength(8);
  });

  it('shows both 中文 and 英文 labels', () => {
    render(<SpecialtyGrid nodeCounts={fullCounts} onSelect={() => {}} />);
    expect(screen.getByText('心臟科')).toBeInTheDocument();
    expect(screen.getByText('Cardiology')).toBeInTheDocument();
    expect(screen.getByText('內科')).toBeInTheDocument();
    expect(screen.getByText('Internal Medicine')).toBeInTheDocument();
    expect(screen.getByText('急診加護')).toBeInTheDocument();
    expect(screen.getByText('Emergency & Critical Care')).toBeInTheDocument();
  });

  it('shows per-specialty node count', () => {
    render(<SpecialtyGrid nodeCounts={fullCounts} onSelect={() => {}} />);
    expect(screen.getByText('30 節點')).toBeInTheDocument();
    expect(screen.getByText('50 節點')).toBeInTheDocument();
  });

  it('shows total count in header', () => {
    render(<SpecialtyGrid nodeCounts={fullCounts} onSelect={() => {}} />);
    const total = Object.values(fullCounts).reduce((a, b) => a + b, 0);
    expect(screen.getByText(new RegExp(`共 ${total} 個知識節點`))).toBeInTheDocument();
  });

  it('renders 0 nodes for missing specialty', () => {
    render(
      <SpecialtyGrid
        nodeCounts={{ CARDIO: 5 }}
        onSelect={() => {}}
      />
    );
    // 7 個其他專科應顯示 0 節點
    const zeros = screen.getAllByText('0 節點');
    expect(zeros).toHaveLength(7);
  });
});

describe('SpecialtyGrid: onSelect callback', () => {
  it('fires onSelect with specialty value when card clicked', async () => {
    const onSelect = vi.fn();
    const user = userEvent.setup();
    render(<SpecialtyGrid nodeCounts={fullCounts} onSelect={onSelect} />);

    await user.click(screen.getByText('心臟科').closest('button')!);
    expect(onSelect).toHaveBeenCalledWith('CARDIO');
  });

  it('passes correct specialty value for each card', async () => {
    const onSelect = vi.fn();
    const user = userEvent.setup();
    render(<SpecialtyGrid nodeCounts={fullCounts} onSelect={onSelect} />);

    await user.click(screen.getByText('神經科').closest('button')!);
    await user.click(screen.getByText('腫瘤科').closest('button')!);
    expect(onSelect).toHaveBeenNthCalledWith(1, 'NEURO');
    expect(onSelect).toHaveBeenNthCalledWith(2, 'ONCO');
  });
});

describe('SpecialtyGrid: onSelectAll opt-in', () => {
  it('does NOT render 綜覽全圖 button without onSelectAll prop', () => {
    render(<SpecialtyGrid nodeCounts={fullCounts} onSelect={() => {}} />);
    expect(screen.queryByText(/綜覽全圖/)).not.toBeInTheDocument();
  });

  it('renders 綜覽全圖 button when onSelectAll provided', () => {
    render(
      <SpecialtyGrid
        nodeCounts={fullCounts}
        onSelect={() => {}}
        onSelectAll={() => {}}
      />
    );
    expect(screen.getByRole('button', { name: /綜覽全圖/ })).toBeInTheDocument();
  });

  it('fires onSelectAll when 綜覽全圖 clicked', async () => {
    const onSelectAll = vi.fn();
    const user = userEvent.setup();
    render(
      <SpecialtyGrid
        nodeCounts={fullCounts}
        onSelect={() => {}}
        onSelectAll={onSelectAll}
      />
    );
    await user.click(screen.getByRole('button', { name: /綜覽全圖/ }));
    expect(onSelectAll).toHaveBeenCalledTimes(1);
  });
});
