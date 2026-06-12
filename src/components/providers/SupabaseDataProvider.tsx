'use client';

import { useEffect, useRef } from 'react';
import { useShallow } from 'zustand/react/shallow';
import { isMockMode } from '@/data/seed/mock-mode';
import { createBrowserClient } from '@/lib/supabase/client';
import { reportError } from '@/lib/observability/error-reporter';
import { useKnowledgeStore } from '@/stores/knowledge-store';
import { mapLearningPathRow } from '@/lib/utils/supabase-mappers';
import type { KnowledgeNode, KnowledgeEdge, LearningPath } from '@/types/knowledge';

/**
 * 在非 mock 模式下，從 Supabase 載入知識圖譜資料到 Zustand store。
 * 與 DemoDataProvider 互補：mock mode 用 seed data，production 用 Supabase。
 */
export function SupabaseDataProvider({ children }: { children: React.ReactNode }) {
  const initialized = useRef(false);
  // ENG-R3-001 useShallow: wraps entire dashboard tree. Per-key shallow comparison
  // keeps re-renders limited to setter identity changes (effectively zero in zustand).
  const { setNodes, setEdges, setPaths, setLoading, setError } = useKnowledgeStore(
    useShallow((s) => ({
      setNodes: s.setNodes,
      setEdges: s.setEdges,
      setPaths: s.setPaths,
      setLoading: s.setLoading,
      setError: s.setError,
    }))
  );

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

        // Map learning_paths via the extracted, unit-tested mapper (see
        // src/lib/utils/supabase-mappers.ts). The DB's node_ids column was
        // double-serialized by the seed import; mapLearningPathRow/parsePathNode
        // handle both the JSON-string and bare-id shapes so node navigation works.
        const paths: LearningPath[] = (pathsRes.data || []).map(mapLearningPathRow);

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
