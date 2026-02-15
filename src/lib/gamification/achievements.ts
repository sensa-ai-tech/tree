import type { AchievementDefinition, AchievementCategory } from '@/types/gamification';

export const ACHIEVEMENTS: AchievementDefinition[] = [
  // 學習進度
  { id: 'first_step', title: '踏出第一步', description: '完成第一個知識節點', category: 'learning_progress', icon: '🐾', condition: 'completed_nodes >= 1', hidden: false },
  { id: 'ten_nodes', title: '初窺門徑', description: '完成 10 個知識節點', category: 'learning_progress', icon: '📚', condition: 'completed_nodes >= 10', hidden: false },
  { id: 'fifty_nodes', title: '學識漸豐', description: '完成 50 個知識節點', category: 'learning_progress', icon: '🎓', condition: 'completed_nodes >= 50', hidden: false },
  { id: 'specialist_path', title: '專科之路', description: '完成一條完整學習路徑', category: 'learning_progress', icon: '🛤️', condition: 'completed_paths >= 1', hidden: false },

  // 知識精熟
  { id: 'perfect_quiz', title: '完美作答', description: '單次測驗全部正確', category: 'knowledge_mastery', icon: '💯', condition: 'quiz_perfect === true', hidden: false },
  { id: 'total_recall', title: '過目不忘', description: '所有學過的節點熟練度 > 80%', category: 'knowledge_mastery', icon: '🧠', condition: 'all_mastery > 80', hidden: false },
  { id: 'iron_memory', title: '鋼鐵記憶', description: '連續 30 天完成間隔重複', category: 'knowledge_mastery', icon: '⚡', condition: 'review_streak >= 30', hidden: false },

  // 診斷技能
  { id: 'sharp_ears', title: '靈敏之耳', description: '心臟聽診測驗滿分', category: 'diagnostic_skill', icon: '👂', condition: 'auscultation_perfect === true', hidden: false },
  { id: 'eagle_eyes', title: '鷹眼判讀', description: 'X 光判讀連續 10 題正確', category: 'diagnostic_skill', icon: '🦅', condition: 'xray_streak >= 10', hidden: false },
  { id: 'wave_rider', title: '波形騎士', description: 'ECG 判讀連續 10 題正確', category: 'diagnostic_skill', icon: '〰️', condition: 'ecg_streak >= 10', hidden: false },

  // 病例挑戰
  { id: 'lifesaver', title: '生命守護者', description: '完成 10 個病例挑戰', category: 'case_challenge', icon: '🏥', condition: 'completed_cases >= 10', hidden: false },
  { id: 'diagnostician', title: '診斷大師', description: '病例闖關正確率 > 90%', category: 'case_challenge', icon: '🔬', condition: 'case_accuracy > 90', hidden: false },
  { id: 'multidisciplinary', title: '跨科整合', description: '完成一個跨三科的整合病例', category: 'case_challenge', icon: '🌐', condition: 'cross_specialty_case === true', hidden: false },

  // 毅力
  { id: 'week_streak', title: '一週不間斷', description: '連續 7 天學習', category: 'perseverance', icon: '🔥', condition: 'streak >= 7', hidden: false },
  { id: 'month_streak', title: '月度達人', description: '連續 30 天學習', category: 'perseverance', icon: '🌟', condition: 'streak >= 30', hidden: false },
  { id: 'marathon', title: '學習馬拉松', description: '單日學習超過 3 小時', category: 'perseverance', icon: '🏃', condition: 'daily_minutes >= 180', hidden: false },
  { id: 'comeback', title: '王者歸來', description: '中斷 7 天後回歸學習', category: 'perseverance', icon: '🔄', condition: 'comeback_after_7_days === true', hidden: false },

  // 探索（含隱藏）
  { id: 'cross_pollinator', title: '跨界學習', description: '在三個不同專科各完成 5 個節點', category: 'exploration', icon: '🐝', condition: 'specialties_with_5_nodes >= 3', hidden: false },
  { id: 'deep_diver', title: '深潛專家', description: '在單一專科完成所有節點', category: 'exploration', icon: '🤿', condition: 'specialty_all_completed === true', hidden: false },
  { id: 'night_owl', title: '夜貓子', description: '在凌晨 12-5 點學習', category: 'exploration', icon: '🦉', condition: 'night_study === true', hidden: true },
];

export function getAchievementsByCategory(
  category: AchievementCategory
): AchievementDefinition[] {
  return ACHIEVEMENTS.filter((a) => a.category === category);
}

export function getAchievementById(
  id: string
): AchievementDefinition | undefined {
  return ACHIEVEMENTS.find((a) => a.id === id);
}

export function getVisibleAchievements(): AchievementDefinition[] {
  return ACHIEVEMENTS.filter((a) => !a.hidden);
}

export interface UserAchievementState {
  completedNodes: number;
  completedPaths: number;
  completedCases: number;
  streakDays: number;
  specialtiesExplored: number;
  caseAccuracy: number;
  allMasteryAbove80: boolean;
  reviewStreak: number;
}

export function checkNewAchievements(
  state: UserAchievementState,
  alreadyUnlocked: string[]
): string[] {
  const newAchievements: string[] = [];
  const unlocked = new Set(alreadyUnlocked);

  const checks: Array<{ id: string; condition: boolean }> = [
    { id: 'first_step', condition: state.completedNodes >= 1 },
    { id: 'ten_nodes', condition: state.completedNodes >= 10 },
    { id: 'fifty_nodes', condition: state.completedNodes >= 50 },
    { id: 'specialist_path', condition: state.completedPaths >= 1 },
    { id: 'lifesaver', condition: state.completedCases >= 10 },
    { id: 'diagnostician', condition: state.caseAccuracy > 90 },
    { id: 'total_recall', condition: state.allMasteryAbove80 },
    { id: 'iron_memory', condition: state.reviewStreak >= 30 },
    { id: 'week_streak', condition: state.streakDays >= 7 },
    { id: 'month_streak', condition: state.streakDays >= 30 },
    { id: 'cross_pollinator', condition: state.specialtiesExplored >= 3 },
  ];

  for (const check of checks) {
    if (check.condition && !unlocked.has(check.id)) {
      newAchievements.push(check.id);
    }
  }

  return newAchievements;
}
