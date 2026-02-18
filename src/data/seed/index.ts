/**
 * Demo Seed Data Orchestrator — 多專科版
 *
 * 在 mock 模式下（無 Supabase URL）自動注入 8 個專科的範例資料，
 * 讓使用者無需外部服務即可體驗完整學習流程。
 *
 * 專科：CARDIO, IM, DERM, SURG, NEURO, ONCO, ECC, CPATH
 */

import { useAuthStore } from '@/stores/auth-store';
import { useKnowledgeStore } from '@/stores/knowledge-store';
import { useLearningStore } from '@/stores/learning-store';
import { useGamificationStore } from '@/stores/gamification-store';

import type { KnowledgeNode, KnowledgeEdge, NodeContent, LearningPath } from '@/types/knowledge';
import type { ReviewQuestion } from '@/types/quiz';
import type { CaseChallenge } from '@/types/case';

// ─── Demo Users ───
import { DEMO_STUDENT } from './demo-users';

// ─── CARDIO ───
import { CARDIO_NODES } from './cardio/nodes';
import { CARDIO_EDGES } from './cardio/edges';
import { CARDIO_CONTENTS } from './cardio/contents';
import { CARDIO_QUESTIONS } from './cardio/questions';
import { CARDIO_CASES } from './cardio/cases';
import { CARDIO_PATHS } from './cardio/paths';

// ─── CPATH (共用臨床病理) ───
import { CPATH_NODES } from './cpath/nodes';
import { CPATH_EDGES } from './cpath/edges';
import { CPATH_CONTENTS } from './cpath/contents';
import { CPATH_QUESTIONS } from './cpath/questions';
import { CPATH_CASES } from './cpath/cases';
import { CPATH_PATHS } from './cpath/paths';

// ─── IM (內科) ───
import { IM_NODES } from './im/nodes';
import { IM_EDGES } from './im/edges';
import { IM_CONTENTS } from './im/contents';
import { IM_QUESTIONS } from './im/questions';
import { IM_CASES } from './im/cases';
import { IM_PATHS } from './im/paths';

// ─── DERM (皮膚科) ───
import { DERM_NODES } from './derm/nodes';
import { DERM_EDGES } from './derm/edges';
import { DERM_CONTENTS } from './derm/contents';
import { DERM_QUESTIONS } from './derm/questions';
import { DERM_CASES } from './derm/cases';
import { DERM_PATHS } from './derm/paths';

// ─── SURG (外科) ───
import { SURG_NODES } from './surg/nodes';
import { SURG_EDGES } from './surg/edges';
import { SURG_CONTENTS } from './surg/contents';
import { SURG_QUESTIONS } from './surg/questions';
import { SURG_CASES } from './surg/cases';
import { SURG_PATHS } from './surg/paths';

// ─── NEURO (神經科) ───
import { NEURO_NODES } from './neuro/nodes';
import { NEURO_EDGES } from './neuro/edges';
import { NEURO_CONTENTS } from './neuro/contents';
import { NEURO_QUESTIONS } from './neuro/questions';
import { NEURO_CASES } from './neuro/cases';
import { NEURO_PATHS } from './neuro/paths';

// ─── ONCO (腫瘤科) ───
import { ONCO_NODES } from './onco/nodes';
import { ONCO_EDGES } from './onco/edges';
import { ONCO_CONTENTS } from './onco/contents';
import { ONCO_QUESTIONS } from './onco/questions';
import { ONCO_CASES } from './onco/cases';
import { ONCO_PATHS } from './onco/paths';

// ─── ECC (急診加護) ───
import { ECC_NODES } from './ecc/nodes';
import { ECC_EDGES } from './ecc/edges';
import { ECC_CONTENTS } from './ecc/contents';
import { ECC_QUESTIONS } from './ecc/questions';
import { ECC_CASES } from './ecc/cases';
import { ECC_PATHS } from './ecc/paths';

// ─── Cross-Specialty Edges ───
import { CROSS_SPECIALTY_EDGES } from './cross-specialty-edges';

// ─── Progress & Gamification ───
import { SEED_PROGRESS } from './seed-progress';
import { SEED_EXPERIENCE, SEED_ACHIEVEMENTS, SEED_XP_EVENTS } from './seed-gamification';

// ═══════════════════════════════════════════
// Merged Collections
// ═══════════════════════════════════════════

/** 所有專科節點合併 */
const ALL_NODES: KnowledgeNode[] = [
  ...CARDIO_NODES,
  ...CPATH_NODES,
  ...IM_NODES,
  ...DERM_NODES,
  ...SURG_NODES,
  ...NEURO_NODES,
  ...ONCO_NODES,
  ...ECC_NODES,
];

/** 所有邊合併（科內 + 跨科） */
const ALL_EDGES: KnowledgeEdge[] = [
  ...CARDIO_EDGES,
  ...CPATH_EDGES,
  ...IM_EDGES,
  ...DERM_EDGES,
  ...SURG_EDGES,
  ...NEURO_EDGES,
  ...ONCO_EDGES,
  ...ECC_EDGES,
  ...CROSS_SPECIALTY_EDGES,
];

/** 所有 NodeContent 合併 */
export const SEED_NODE_CONTENTS: Map<string, NodeContent> = new Map<string, NodeContent>([
  ...CARDIO_CONTENTS,
  ...CPATH_CONTENTS,
  ...IM_CONTENTS,
  ...DERM_CONTENTS,
  ...SURG_CONTENTS,
  ...NEURO_CONTENTS,
  ...ONCO_CONTENTS,
  ...ECC_CONTENTS,
]);

/** 所有複習題合併 */
export const SEED_QUESTIONS: ReviewQuestion[] = [
  ...CARDIO_QUESTIONS,
  ...CPATH_QUESTIONS,
  ...IM_QUESTIONS,
  ...DERM_QUESTIONS,
  ...SURG_QUESTIONS,
  ...NEURO_QUESTIONS,
  ...ONCO_QUESTIONS,
  ...ECC_QUESTIONS,
];

/** 所有病例合併 */
const ALL_CASES: CaseChallenge[] = [
  ...CARDIO_CASES,
  ...CPATH_CASES,
  ...IM_CASES,
  ...DERM_CASES,
  ...SURG_CASES,
  ...NEURO_CASES,
  ...ONCO_CASES,
  ...ECC_CASES,
];

/** 所有學習路徑合併 */
const ALL_PATHS: LearningPath[] = [
  ...CARDIO_PATHS,
  ...CPATH_PATHS,
  ...IM_PATHS,
  ...DERM_PATHS,
  ...SURG_PATHS,
  ...NEURO_PATHS,
  ...ONCO_PATHS,
  ...ECC_PATHS,
];

// ─── 向後相容：舊版匯出 ───
/** @deprecated Use ALL_CASES instead */
export const SEED_CASE = ALL_CASES[0];

// ═══════════════════════════════════════════
// Mock Mode & Initialization
// ═══════════════════════════════════════════

/** 檢查是否為 mock 模式（無 Supabase 連線） */
export function isMockMode(): boolean {
  return !process.env.NEXT_PUBLIC_SUPABASE_URL;
}

/** 一次性注入所有 seed 資料至各 store */
export function initializeDemoData(): void {
  // 1. Auth — 自動登入學生身分
  const authStore = useAuthStore.getState();
  if (!authStore.user) {
    authStore.setUser({
      id: DEMO_STUDENT.id,
      email: DEMO_STUDENT.email,
      role: DEMO_STUDENT.role,
    });
  }

  // 2. Knowledge — 節點、邊、路徑
  const knowledgeStore = useKnowledgeStore.getState();
  if (knowledgeStore.nodes.length === 0) {
    knowledgeStore.setNodes(ALL_NODES);
    knowledgeStore.setEdges(ALL_EDGES);
    knowledgeStore.setPaths(ALL_PATHS);
  }

  // 3. Learning — 學習進度
  const learningStore = useLearningStore.getState();
  const hasProgress = learningStore.progress.size > 0;
  if (!hasProgress) {
    for (const p of SEED_PROGRESS) {
      learningStore.setProgress(p.node_id, p);
    }
  }

  // 4. Gamification — XP、成就、事件
  const gamStore = useGamificationStore.getState();
  if (gamStore.experience.total_xp === 0) {
    gamStore.setExperience(SEED_EXPERIENCE);
    gamStore.setAchievements(SEED_ACHIEVEMENTS);
    gamStore.setRecentXPEvents(SEED_XP_EVENTS);
  }
}
