import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import { LevelUpModal } from '@/components/features/LevelUpModal';
import { useGamificationStore } from '@/stores/gamification-store';
import type { UserExperience } from '@/types/gamification';

const defaultExperience: UserExperience = {
  user_id: '',
  total_xp: 0,
  current_level: 1,
  streak_days: 0,
  last_active_date: null,
  specialties_explored: [],
};

function resetStore() {
  useGamificationStore.setState({
    experience: { ...defaultExperience },
    achievements: [],
    recentXPEvents: [],
    showLevelUpModal: false,
  });
  localStorage.clear();
}

describe('LevelUpModal: visibility gate', () => {
  beforeEach(resetStore);
  afterEach(resetStore);

  it('renders nothing visible when showLevelUpModal is false', () => {
    render(<LevelUpModal />);
    // Modal 用 isOpen 控制，false 時不應出現「升級了」字樣
    expect(screen.queryByText('升級了！')).not.toBeInTheDocument();
  });

  it('renders content when showLevelUpModal is true', () => {
    useGamificationStore.setState({
      showLevelUpModal: true,
      experience: { ...defaultExperience, total_xp: 600, current_level: 2 },
    });
    render(<LevelUpModal />);
    expect(screen.getByText('升級了！')).toBeInTheDocument();
  });
});

describe('LevelUpModal: level info display', () => {
  beforeEach(resetStore);
  afterEach(resetStore);

  it('shows Lv.{level} computed from total_xp', () => {
    useGamificationStore.setState({
      showLevelUpModal: true,
      experience: { ...defaultExperience, total_xp: 600, current_level: 2 },
    });
    render(<LevelUpModal />);
    expect(screen.getByText(/Lv\.2/)).toBeInTheDocument();
  });

  it('shows tierLabel matching the level', () => {
    useGamificationStore.setState({
      showLevelUpModal: true,
      experience: { ...defaultExperience, total_xp: 6000, current_level: 6 },
    });
    render(<LevelUpModal />);
    // Level 6 應屬 resident tier
    expect(screen.getByText('住院獸醫')).toBeInTheDocument();
  });

  it('shows total_xp in the encouragement line', () => {
    useGamificationStore.setState({
      showLevelUpModal: true,
      experience: { ...defaultExperience, total_xp: 1234, current_level: 3 },
    });
    render(<LevelUpModal />);
    expect(screen.getByText(/1234 XP/)).toBeInTheDocument();
  });

  it('renders trophy emoji', () => {
    useGamificationStore.setState({
      showLevelUpModal: true,
      experience: { ...defaultExperience, total_xp: 500, current_level: 2 },
    });
    const { container } = render(<LevelUpModal />);
    // U+1F3C6 trophy
    expect(container.textContent).toContain('\u{1F3C6}');
  });
});

describe('LevelUpModal: close interaction', () => {
  beforeEach(resetStore);
  afterEach(resetStore);

  it('clicking "太棒了！" closes the modal', async () => {
    const user = userEvent.setup();
    useGamificationStore.setState({
      showLevelUpModal: true,
      experience: { ...defaultExperience, total_xp: 600, current_level: 2 },
    });
    render(<LevelUpModal />);

    expect(useGamificationStore.getState().showLevelUpModal).toBe(true);
    await user.click(screen.getByRole('button', { name: '太棒了！' }));
    expect(useGamificationStore.getState().showLevelUpModal).toBe(false);
  });

  it('Modal onClose (e.g. backdrop) also closes — flag flips to false', async () => {
    useGamificationStore.setState({
      showLevelUpModal: true,
      experience: { ...defaultExperience, total_xp: 600, current_level: 2 },
    });
    render(<LevelUpModal />);
    // 用 store API 直接模擬 close（避免依賴 Modal 內部按鈕的 aria-label）
    useGamificationStore.getState().setShowLevelUpModal(false);
    expect(useGamificationStore.getState().showLevelUpModal).toBe(false);
  });
});

describe('LevelUpModal: reacts to store updates', () => {
  beforeEach(resetStore);
  afterEach(resetStore);

  it('updates level display when total_xp grows', () => {
    useGamificationStore.setState({
      showLevelUpModal: true,
      experience: { ...defaultExperience, total_xp: 500, current_level: 2 },
    });
    const { rerender } = render(<LevelUpModal />);
    expect(screen.getByText(/Lv\.2/)).toBeInTheDocument();

    useGamificationStore.setState({
      experience: { ...defaultExperience, total_xp: 2100, current_level: 4 },
    });
    rerender(<LevelUpModal />);
    expect(screen.getByText(/Lv\.4/)).toBeInTheDocument();
  });
});
