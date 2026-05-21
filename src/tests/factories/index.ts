/**
 * 集中匯出 test data factories。用法：
 *
 *   import { makeKnowledgeNode, makeMCQ, makeLearningPath } from '@/tests/factories';
 *
 * 為什麼用 factory pattern：
 * - 避免每個 test 自己 inline 70 行 mock object，noise 太大
 * - 預設值集中在這裡，未來 type 增欄位只要改一個地方
 * - 每個 factory 有 counter 自動遞增 id，避免 dedup bug 偽陰性
 */

export { makeKnowledgeNode, makeKnowledgeNodes } from './knowledge-node';
export { makeKnowledgeEdge } from './knowledge-edge';
export { makeLearningPath, makePathNode } from './learning-path';
export { makeMCQ, makeTrueFalse, makeFillBlank } from './review-question';
export {
  makeUserExperience,
  makeUserAchievement,
  makeUserNodeProgress,
  makeXPEvent,
} from './user-state';
