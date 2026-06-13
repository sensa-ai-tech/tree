import { describe, it, expect } from 'vitest';
import { parsePathNode, mapLearningPathRow } from '@/lib/utils/supabase-mappers';

/**
 * Regression coverage for the iter-4 HIGH bug: the live Supabase load path was
 * never exercised by the (mock-mode) suite, so double-serialized node_ids rendered
 * raw JSON as node links. These tests pin the parser's both-shapes contract.
 */
describe('parsePathNode', () => {
  it('parses a double-serialized PathNode JSON string back into an object', () => {
    const entry = JSON.stringify({
      node_id: 'CARDIO-L0-001',
      is_required: true,
      phase: '基礎概念',
      learning_note: '起點：了解心臟科全貌',
    });
    expect(parsePathNode(entry)).toEqual({
      node_id: 'CARDIO-L0-001',
      is_required: true,
      phase: '基礎概念',
      learning_note: '起點：了解心臟科全貌',
    });
  });

  it('treats a bare id string as the node_id with defaults', () => {
    expect(parsePathNode('CARDIO-L3-001')).toEqual({
      node_id: 'CARDIO-L3-001',
      is_required: false,
      phase: '',
      learning_note: null,
    });
  });

  it('coerces missing/typed fields safely (null learning_note, absent flags)', () => {
    const entry = JSON.stringify({ node_id: 'IM-L1-002', learning_note: null });
    expect(parsePathNode(entry)).toEqual({
      node_id: 'IM-L1-002',
      is_required: false,
      phase: '',
      learning_note: null,
    });
  });

  it('falls back to treating malformed JSON-looking text as a bare id', () => {
    // Starts with `{` but is not valid JSON → must not throw, treat as id.
    const result = parsePathNode('{not valid json');
    expect(result.node_id).toBe('{not valid json');
    expect(result.is_required).toBe(false);
  });

  it('drops a non-string phase/learning_note to safe defaults', () => {
    const entry = JSON.stringify({ node_id: 'X', phase: 123, learning_note: 5 });
    const r = parsePathNode(entry);
    expect(r.phase).toBe('');
    expect(r.learning_note).toBeNull();
  });

  it('accepts an already-parsed PathNode object (migration-002 path_nodes jsonb)', () => {
    expect(
      parsePathNode({ node_id: 'CARDIO-L2-001', is_required: true, phase: '病理機轉', learning_note: null })
    ).toEqual({ node_id: 'CARDIO-L2-001', is_required: true, phase: '病理機轉', learning_note: null });
  });
});

describe('mapLearningPathRow', () => {
  it('maps a DB row with double-serialized node_ids to a usable LearningPath', () => {
    const row: Record<string, unknown> = {
      id: 'PATH-CARDIO-FOUNDATION',
      title: '心臟科基礎入門路徑',
      description: '從心臟解剖到 MMVD',
      specialty: 'CARDIO',
      target_audience: '實習獸醫',
      estimated_hours: 8,
      node_ids: [
        JSON.stringify({ node_id: 'CARDIO-L0-001', is_required: true, phase: '基礎概念', learning_note: null }),
        JSON.stringify({ node_id: 'CARDIO-L1-001', is_required: false, phase: '基礎概念', learning_note: '選修' }),
      ],
    };
    const path = mapLearningPathRow(row);
    expect(path.id).toBe('PATH-CARDIO-FOUNDATION');
    expect(path.path_nodes).toHaveLength(2);
    // The critical assertion: node_id is the bare id, NOT the JSON blob that broke /nodes/{...} links.
    expect(path.path_nodes[0].node_id).toBe('CARDIO-L0-001');
    expect(path.path_nodes[0].is_required).toBe(true);
    expect(path.path_nodes[1].learning_note).toBe('選修');
    expect(path.status).toBe('published');
  });

  it('defaults estimated_hours/target_audience/milestones when columns are absent', () => {
    const path = mapLearningPathRow({
      id: 'P1',
      title: 'T',
      description: null,
      specialty: 'IM',
      node_ids: ['IM-L0-001'],
    });
    expect(path.estimated_hours).toBe(0);
    expect(path.target_audience).toBeNull();
    expect(path.milestones).toEqual([]);
    expect(path.has_certificate).toBe(false);
    expect(path.path_nodes[0].node_id).toBe('IM-L0-001');
  });

  it('handles a missing/non-array node_ids column as an empty path_nodes list', () => {
    const path = mapLearningPathRow({ id: 'P2', title: 'T', specialty: 'IM' });
    expect(path.path_nodes).toEqual([]);
  });

  it('reads migration-002 columns (path_nodes objects, milestones, has_certificate) when present', () => {
    const path = mapLearningPathRow({
      id: 'PATH-CARDIO-FOUNDATION',
      title: '心臟科基礎入門路徑',
      specialty: 'CARDIO',
      target_audience: '實習獸醫',
      has_certificate: true,
      node_ids: ['CARDIO-L0-001'], // bare ids present too
      path_nodes: [
        { node_id: 'CARDIO-L0-001', is_required: true, phase: '基礎概念', learning_note: '起點' },
      ],
      milestones: [
        { id: 'MS-CARDIO-01', title: '基礎過關', description: 'd', required_nodes: ['CARDIO-L0-001'], checkpoint_type: 'quiz', pass_criteria: '>=70%' },
      ],
    });
    // path_nodes column wins over node_ids, preserving per-node metadata
    expect(path.path_nodes[0]).toEqual({ node_id: 'CARDIO-L0-001', is_required: true, phase: '基礎概念', learning_note: '起點' });
    expect(path.milestones).toHaveLength(1);
    expect(path.milestones[0].title).toBe('基礎過關');
    expect(path.has_certificate).toBe(true);
    expect(path.target_audience).toBe('實習獸醫');
  });

  it('falls back to node_ids when path_nodes column is absent (legacy/pre-002 DB)', () => {
    const path = mapLearningPathRow({
      id: 'P3', title: 'T', specialty: 'IM',
      node_ids: [JSON.stringify({ node_id: 'IM-L0-001', is_required: true, phase: 'x', learning_note: null })],
    });
    expect(path.path_nodes[0].node_id).toBe('IM-L0-001');
    expect(path.milestones).toEqual([]);
    expect(path.has_certificate).toBe(false);
  });
});
