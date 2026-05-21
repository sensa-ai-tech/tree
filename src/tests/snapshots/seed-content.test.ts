import { describe, expect, it } from 'vitest';
import {
  ALL_NODES,
  ALL_EDGES,
  ALL_PATHS,
  SEED_NODE_CONTENTS,
  SEED_QUESTIONS,
} from '@/data/seed';

/**
 * Seed content snapshot tests
 *
 * 目的：當有人用 AI 自動生成 / 編輯 seed data 時，若不小心改到關鍵節點的核心欄位，
 * snapshot diff 會浮上來。比起人眼 review 跨檔 git diff 更穩。
 *
 * 鎖定的是「結構性指標」+「核心節點 contents 的關鍵欄位」，不是 raw 物件全文。
 * 全文 snapshot 會在每次微調 typo 都壞掉，反而沒人看 — 這裡只鎖 summary、
 * key_points、clinical_pearl 三項。
 *
 * 修改 seed data 後若 snapshot diff 是預期的，跑 `npx vitest run --update`。
 */

describe('seed-content snapshot: 結構性指標', () => {
  it('總節點數 + 邊數 + 路徑數 維持穩定', () => {
    // 寫成物件而不是 inline number 才能在 snapshot 一覽
    const stats = {
      nodes: ALL_NODES.length,
      edges: ALL_EDGES.length,
      paths: ALL_PATHS.length,
      contents: SEED_NODE_CONTENTS.size,
      questions: SEED_QUESTIONS.length,
    };
    expect(stats).toMatchSnapshot();
  });

  it('每個專科的節點數量分佈穩定', () => {
    const bySpecialty: Record<string, number> = {};
    for (const node of ALL_NODES) {
      bySpecialty[node.specialty] = (bySpecialty[node.specialty] ?? 0) + 1;
    }
    // 按 specialty 名排序確保 snapshot 穩定
    const sorted = Object.fromEntries(
      Object.entries(bySpecialty).sort(([a], [b]) => a.localeCompare(b))
    );
    expect(sorted).toMatchSnapshot();
  });

  it('node_type 分佈穩定', () => {
    const byType: Record<string, number> = {};
    for (const node of ALL_NODES) {
      byType[node.node_type] = (byType[node.node_type] ?? 0) + 1;
    }
    const sorted = Object.fromEntries(
      Object.entries(byType).sort(([a], [b]) => a.localeCompare(b))
    );
    expect(sorted).toMatchSnapshot();
  });

  it('relation_type 分佈穩定（邊類型）', () => {
    const byRelation: Record<string, number> = {};
    for (const edge of ALL_EDGES) {
      byRelation[edge.relation_type] = (byRelation[edge.relation_type] ?? 0) + 1;
    }
    const sorted = Object.fromEntries(
      Object.entries(byRelation).sort(([a], [b]) => a.localeCompare(b))
    );
    expect(sorted).toMatchSnapshot();
  });

  it('每 layer 節點數量穩定', () => {
    const byLayer: Record<string, number> = {};
    for (const node of ALL_NODES) {
      const key = `L${node.layer}`;
      byLayer[key] = (byLayer[key] ?? 0) + 1;
    }
    const sorted = Object.fromEntries(
      Object.entries(byLayer).sort()
    );
    expect(sorted).toMatchSnapshot();
  });
});

describe('seed-content snapshot: 核心節點 contents 鎖定', () => {
  // 列出要 snapshot 鎖死的「教學黃金節點」— 改到這幾個的 summary/key_points/clinical_pearl
  // 應該是有意識的決策，不是 AI re-gen 的副作用
  const GOLD_NODES = [
    'CARDIO-L3-001', // MMVD
    'CARDIO-L4-001', // 心臟聽診
    'IM-L3-001',     // 慢性腎臟病 CKD
    'IM-L3-028',     // FPV (Round 2 新增)
    'SURG-L5-006',   // Malignant Hyperthermia (Round 2 新增)
  ];

  for (const nodeId of GOLD_NODES) {
    it(`${nodeId} 的核心 content 欄位穩定`, () => {
      const content = SEED_NODE_CONTENTS.get(nodeId);
      if (!content) {
        // 節點不在 seed 裡的話直接 mark — 如果之後刪掉節點，這 test 會 fail
        // 提醒 reviewer 確認移除是預期的
        throw new Error(
          `Gold-list node ${nodeId} not in SEED_NODE_CONTENTS — ` +
            `如果是有意刪除，請從 tests/snapshots/seed-content.test.ts 的 GOLD_NODES 移除`
        );
      }

      // 只鎖核心教學欄位，忽略 timestamps / version 等 metadata
      const core = {
        node_id: content.node_id,
        summary: content.summary,
        key_points: content.key_points,
        clinical_pearl: content.clinical_pearl,
        common_mistakes: content.common_mistakes,
        learning_objectives_count: content.learning_objectives.length,
        references_count: content.references.length,
      };
      expect(core).toMatchSnapshot();
    });
  }
});

describe('seed-content snapshot: 不變式', () => {
  it('所有節點 id 唯一', () => {
    const ids = ALL_NODES.map((n) => n.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it('所有邊的 source / target 都存在於節點 id 集合', () => {
    const nodeIds = new Set(ALL_NODES.map((n) => n.id));
    const orphanEdges = ALL_EDGES.filter(
      (e) => !nodeIds.has(e.source_node_id) || !nodeIds.has(e.target_node_id)
    );
    if (orphanEdges.length > 0) {
      console.error('Orphan edges:', orphanEdges.slice(0, 5));
    }
    expect(orphanEdges).toHaveLength(0);
  });

  it('所有 content 的 node_id 都存在於節點 id 集合', () => {
    const nodeIds = new Set(ALL_NODES.map((n) => n.id));
    const orphans: string[] = [];
    for (const [contentNodeId] of SEED_NODE_CONTENTS) {
      if (!nodeIds.has(contentNodeId)) {
        orphans.push(contentNodeId);
      }
    }
    expect(orphans).toHaveLength(0);
  });

  it('所有題目的 node_id 都存在於節點 id 集合', () => {
    const nodeIds = new Set(ALL_NODES.map((n) => n.id));
    const orphans = SEED_QUESTIONS.filter((q) => !nodeIds.has(q.node_id));
    expect(orphans).toHaveLength(0);
  });
});
