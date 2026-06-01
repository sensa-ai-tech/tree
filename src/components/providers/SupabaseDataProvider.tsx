'use client';

import { useEffect, useRef } from 'react';
import { isMockMode } from '@/data/seed/mock-mode';
import { createBrowserClient } from '@/lib/supabase/client';
import { reportError } from '@/lib/observability/error-reporter';
import { useKnowledgeStore } from '@/stores/knowledge-store';
import type { KnowledgeNode, KnowledgeEdge, LearningPath } from '@/types/knowledge';

/**
 * 在非 mock 模式下，從 Supabase 載入知識圖譜資料到 Zustand store。
 * 與 DemoDataProvider 互補：mock mode 用 seed data，production 用 Supabase。
 */
export function SupabaseDataProvider({ children }: { children: React.ReactNode }) {
  const initialized = useRef(false);
  const { setNodes, setEdges, setPaths, setLoading, setError } = useKnowledgeStore();

  useEffect(() => {
    if (initialized.current || isMockMode()) return;
    initialized.current = true;

    const supabase = createBrowserClient();

    async function loadData() {
      setLoading(true);
      try {
        // Fetch nodes, edges, paths in parallel
        const [nodesRes, edgesRes, pathsRes] = await Promise.all([
          supabase
            .from('knowledge_nodes')
            .select('*')
            .eq('status', 'published')
            .order('specialty')
            .order('layer'),
          supabase
            .from('knowledge_edges')
            .select('*'),
          supabase
            .from('learning_paths')
            .select('*')
            .eq('is_published', true)
            .order('specialty'),
        ]);

        if (nodesRes.error) throw new Error(`Nodes: ${nodesRes.error.message}`);
        if (edgesRes.error) throw new Error(`Edges: ${edgesRes.error.message}`);
        if (pathsRes.error) throw new Error(`Paths: ${pathsRes.error.message}`);

        // Map DB rows to TypeScript types (add missing fields with defaults)
        const nodes: KnowledgeNode[] = (nodesRes.data || []).map((row: Record<string, unknown>) => ({
          ...row,
          version: (row.version as number) ?? 1,
          encyclopedia_link: (row.encyclopedia_link as string) ?? null,
          cross_specialty_notes: (row.cross_specialty_notes as string) ?? null,
        })) as KnowledgeNode[];

        const edges: KnowledgeEdge[] = (edgesRes.data || []) as KnowledgeEdge[];

        // Map learning_paths: DB stores node_ids as TEXT[] (string[]); the TS type expects
        // PathNode[] objects with node_id/is_required/phase/learning_note. Without this hydration
        // the path detail page renders /nodes/undefined links and zero progress (path_nodes are
        // raw strings at runtime). Defaults match the seed-data shape.
        const paths: LearningPath[] = (pathsRes.data || []).map((row: Record<string, unknown>) => {
          const nodeIds = Array.isArray(row.node_ids) ? (row.node_ids as string[]) : [];
          return {
            id: row.id as string,
            title: row.title as string,
            description: (row.description as string | null) ?? null,
            specialty: row.specialty as string,
            target_audience: (row.target_audience as string | null) ?? null,
            estimated_hours: (row.estimated_hours as number) ?? 0,
            path_nodes: nodeIds.map((id) => ({
              node_id: id,
              is_required: false,
              phase: '',
              learning_note: null,
            })),
            milestones: [],
            has_certificate: false,
            status: 'published',
          };
        });

        // 防呆：DB 有節點但邊或路徑為空時，從 seed 補上。
        // 常見於 seed-to-supabase 只匯入部分資料或 migration 中斷。
        if (nodes.length > 0 && (edges.length === 0 || paths.length === 0)) {
          const seed = await import('@/data/seed');
          if (edges.length === 0) {
            console.warn(
              '[SupabaseDataProvider] DB 有節點但無邊，從 seed 補上 ALL_EDGES（請重跑 seed-to-supabase）'
            );
          }
          setNodes(nodes);
          setEdges(edges.length > 0 ? edges : seed.ALL_EDGES);
          setPaths(paths.length > 0 ? paths : seed.ALL_PATHS);
          setError(null);
          return;
        }

        setNodes(nodes);
        setEdges(edges);
        setPaths(paths);
        setError(null);
      } catch (err) {
        const msg = err instanceof Error ? err.message : 'Failed to load data';
        reportError(err, { scope: 'SupabaseDataProvider:loadData' });
        setError(msg);
      } finally {
        setLoading(false);
      }
    }

    loadData();
  }, [setNodes, setEdges, setPaths, setLoading, setError]);

  return <>{children}</>;
}
