import type { LevelTier } from '@/types/gamification';

interface LevelInfo {
  level: number;
  tier: LevelTier;
  tierLabel: string;
  tierLabelEn: string;
  currentXP: number;
  xpForCurrentLevel: number;
  xpForNextLevel: number;
  progressToNext: number;
}

// XP 門檻表：level -> 累計 XP
function getXPThreshold(level: number): number {
  if (level <= 1) return 0;
  // 遞增公式：每級需要的 XP 遞增
  // Level 2: 500, Level 3: 1200, Level 4: 2100 ...
  let total = 0;
  for (let i = 2; i <= level; i++) {
    total += 300 + (i - 1) * 200;
  }
  return total;
}

export function getLevelFromXP(totalXP: number): number {
  let level = 1;
  while (getXPThreshold(level + 1) <= totalXP && level < 25) {
    level++;
  }
  return level;
}

export function getTierFromLevel(level: number): {
  tier: LevelTier;
  label: string;
  labelEn: string;
} {
  if (level <= 5) return { tier: 'intern', label: '見習獸醫', labelEn: 'Intern' };
  if (level <= 10) return { tier: 'resident', label: '住院獸醫', labelEn: 'Resident' };
  if (level <= 15) return { tier: 'specialist', label: '專科醫師', labelEn: 'Specialist' };
  if (level <= 20) return { tier: 'diplomate', label: '學科專家', labelEn: 'Diplomate' };
  return { tier: 'mentor', label: '導師', labelEn: 'Mentor' };
}

export function getLevelInfo(totalXP: number): LevelInfo {
  const level = getLevelFromXP(totalXP);
  const tierInfo = getTierFromLevel(level);
  const xpForCurrentLevel = getXPThreshold(level);
  const xpForNextLevel = level < 25 ? getXPThreshold(level + 1) : xpForCurrentLevel;
  const xpInLevel = totalXP - xpForCurrentLevel;
  const xpNeeded = xpForNextLevel - xpForCurrentLevel;
  const progressToNext = xpNeeded > 0 ? xpInLevel / xpNeeded : 1;

  return {
    level,
    tier: tierInfo.tier,
    tierLabel: tierInfo.label,
    tierLabelEn: tierInfo.labelEn,
    currentXP: totalXP,
    xpForCurrentLevel,
    xpForNextLevel,
    progressToNext: Math.min(1, Math.max(0, progressToNext)),
  };
}

export function getXPForLevel(level: number): number {
  return getXPThreshold(level);
}
