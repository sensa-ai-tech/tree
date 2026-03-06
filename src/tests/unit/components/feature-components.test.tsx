import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, beforeEach } from 'vitest';
import { WelcomeOnboarding } from '@/components/features/WelcomeOnboarding';
import { ReferenceList } from '@/components/features/ReferenceList';
import { XPProgressBar } from '@/components/features/XPProgressBar';
import { AchievementBadge } from '@/components/features/AchievementBadge';

// ═══════════════════════════════════════════
// WelcomeOnboarding
// ═══════════════════════════════════════════
describe('WelcomeOnboarding', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('shows modal on first visit', () => {
    render(<WelcomeOnboarding />);
    expect(screen.getByText('Welcome to VetKnowledgeTree')).toBeInTheDocument();
  });

  it('does not show modal when already completed', () => {
    localStorage.setItem('vet-onboarding-completed', 'true');
    render(<WelcomeOnboarding />);
    expect(screen.queryByText('Welcome to VetKnowledgeTree')).not.toBeInTheDocument();
  });

  it('advances to step 2 on next button click', async () => {
    const user = userEvent.setup();
    render(<WelcomeOnboarding />);
    await user.click(screen.getByRole('button', { name: /下一步/i }));
    expect(screen.getByText('建議的學習路徑')).toBeInTheDocument();
  });

  it('sets localStorage and closes on complete', async () => {
    const user = userEvent.setup();
    render(<WelcomeOnboarding />);
    // Go to step 2
    await user.click(screen.getByRole('button', { name: /下一步/i }));
    // Click "稍後再看"
    await user.click(screen.getByRole('button', { name: /稍後再看/i }));
    expect(localStorage.getItem('vet-onboarding-completed')).toBe('true');
    expect(screen.queryByText('建議的學習路徑')).not.toBeInTheDocument();
  });

  it('lists 4 features in step 1', () => {
    render(<WelcomeOnboarding />);
    expect(screen.getByText('知識圖譜')).toBeInTheDocument();
    expect(screen.getByText('臨床病例')).toBeInTheDocument();
    expect(screen.getByText('間隔複習')).toBeInTheDocument();
    expect(screen.getByText('遊戲化學習')).toBeInTheDocument();
  });
});

// ═══════════════════════════════════════════
// ReferenceList
// ═══════════════════════════════════════════
describe('ReferenceList', () => {
  const mockRefs = [
    { type: 'textbook', citation: 'Nelson & Couto, Small Animal Internal Medicine, 6th ed.', relevance: '基礎教材' },
    { type: 'journal', citation: 'Smith et al. (2021) J Vet Intern Med. PMID: 12345678', relevance: '臨床研究' },
    { type: 'guideline', citation: 'IRIS Staging Guidelines 2023', relevance: '分級標準' },
  ];

  it('renders all references', () => {
    render(<ReferenceList references={mockRefs} />);
    expect(screen.getByText(/Nelson & Couto/)).toBeInTheDocument();
    expect(screen.getByText(/PMID: 12345678/)).toBeInTheDocument();
    expect(screen.getByText(/IRIS Staging/)).toBeInTheDocument();
  });

  it('auto-detects PMID and renders as PubMed link', () => {
    render(<ReferenceList references={mockRefs} />);
    const link = screen.getByRole('link', { name: /查看/ });
    expect(link).toHaveAttribute('href', 'https://pubmed.ncbi.nlm.nih.gov/12345678/');
  });
});

// ═══════════════════════════════════════════
// XPProgressBar
// ═══════════════════════════════════════════
describe('XPProgressBar', () => {
  const mockExperience = {
    user_id: 'test-user',
    total_xp: 150,
    current_level: 1,
    streak_days: 3,
    last_active_date: '2026-03-01',
    specialties_explored: ['IM', 'CARDIO'],
  };

  it('renders total XP and streak days', () => {
    render(<XPProgressBar experience={mockExperience} />);
    expect(screen.getByText(/150 XP/)).toBeInTheDocument();
    expect(screen.getByText(/3 天/)).toBeInTheDocument();
  });

  it('renders level badge', () => {
    render(<XPProgressBar experience={mockExperience} />);
    expect(screen.getByText(/Lv\.1/)).toBeInTheDocument();
  });

  it('has progressbar role', () => {
    render(<XPProgressBar experience={mockExperience} />);
    expect(screen.getByRole('progressbar')).toBeInTheDocument();
  });
});

// ═══════════════════════════════════════════
// AchievementBadge
// ═══════════════════════════════════════════
describe('AchievementBadge', () => {
  const mockAchievement = {
    id: 'ach-1',
    title: '知識新手',
    description: '完成第一個知識節點',
    category: 'learning_progress' as const,
    icon: 'star',
    condition: 'nodes_completed >= 1',
    hidden: false,
  };

  it('renders achievement title', () => {
    render(<AchievementBadge achievement={mockAchievement} isUnlocked />);
    expect(screen.getByText('知識新手')).toBeInTheDocument();
  });

  it('renders description', () => {
    render(<AchievementBadge achievement={mockAchievement} isUnlocked />);
    expect(screen.getByText('完成第一個知識節點')).toBeInTheDocument();
  });

  it('shows locked state for unearned achievements', () => {
    render(<AchievementBadge achievement={mockAchievement} isUnlocked={false} />);
    const container = screen.getByText('知識新手').closest('div')?.parentElement;
    expect(container).toHaveClass('opacity-60');
  });
});
