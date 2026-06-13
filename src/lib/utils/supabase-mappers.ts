import type { LearningPath, PathNode } from '@/types/knowledge';

/**
 * Supabase row → TypeScript domain mappers for the learning-path tables.
 *
 * Extracted from SupabaseDataProvider so the parsing logic — the exact spot where
 * the iter-4 HIGH bug lived — is unit-testable in isolation. The whole 817-test
 * suite ran in mock mode and never exercised the Supabase load path, which is why
 * a 100%-green suite coexisted with a 100%-broken /paths against the live DB.
 */

/**
 * Parse one `learning_paths.node_ids` element into a PathNode.
 *
 * The current seed-to-supabase import double-serialized this column: instead of a
 * bare id string ("CARDIO-L0-001") each TEXT[] element is a JSON string of a whole
 * PathNode ('{"node_id":"CARDIO-L0-001","is_required":true,"phase":"基礎概念",...}').
 * We accept BOTH shapes so node links / 必修 badges / phase labels / learning notes
 * survive regardless of how the DB was seeded. A bare id (or anything that fails to
 * parse as a `{`-prefixed object) is treated as the node_id with sensible defaults.
 *
 * Root-cause fix (re-import so node_ids holds bare ids) is tracked in
 * Obsidian BLOCKED-OPERATIONS.md #8 — this parser is the resilience layer.
 */
export function parsePathNode(entry: unknown): PathNode {
  const fromObject = (obj: Record<string, unknown>): PathNode => ({
    node_id: String(obj.node_id ?? ''),
    is_required: Boolean(obj.is_required),
    phase: typeof obj.phase === 'string' ? obj.phase : '',
    learning_note: typeof obj.learning_note === 'string' ? obj.learning_note : null,
  });

  // Already a PathNode object (migration-002 path_nodes jsonb column).
  if (entry !== null && typeof entry === 'object') {
    return fromObject(entry as Record<string, unknown>);
  }
  // Legacy double-serialized entry: a JSON string of a PathNode.
  if (typeof entry === 'string' && entry.trimStart().startsWith('{')) {
    try {
      return fromObject(JSON.parse(entry) as Record<string, unknown>);
    } catch {
      // Malformed JSON — fall through to treating the raw string as a bare id.
    }
  }
  // Bare id string.
  return { node_id: String(entry), is_required: false, phase: '', learning_note: null };
}

/**
 * Map one `learning_paths` DB row to a LearningPath.
 *
 * Backward-compatible across both DB shapes:
 * - After migration 002 (path_nodes / milestones / has_certificate jsonb columns + a corrected
 *   re-import): reads them directly, so per-node metadata + milestones + certificate survive.
 * - Before 002 (legacy): those columns are absent, so it falls back to parsing node_ids and
 *   defaulting milestones/certificate — exactly the prior behaviour. See BLOCKED-OPERATIONS.md #8/#9.
 */
export function mapLearningPathRow(row: Record<string, unknown>): LearningPath {
  // Prefer the rich path_nodes jsonb column (migration 002) when present and populated;
  // otherwise reconstruct PathNodes from the legacy node_ids TEXT[] (handles double-serialized entries).
  const pathNodesCol = Array.isArray(row.path_nodes) ? (row.path_nodes as unknown[]) : [];
  const nodeIds = Array.isArray(row.node_ids) ? (row.node_ids as unknown[]) : [];
  const path_nodes =
    pathNodesCol.length > 0 ? pathNodesCol.map(parsePathNode) : nodeIds.map(parsePathNode);

  return {
    id: row.id as string,
    title: row.title as string,
    description: (row.description as string | null) ?? null,
    specialty: row.specialty as string,
    target_audience: (row.target_audience as string | null) ?? null,
    estimated_hours: (row.estimated_hours as number) ?? 0,
    path_nodes,
    milestones: Array.isArray(row.milestones)
      ? (row.milestones as LearningPath['milestones'])
      : [],
    has_certificate: Boolean(row.has_certificate),
    status: 'published',
  };
}
