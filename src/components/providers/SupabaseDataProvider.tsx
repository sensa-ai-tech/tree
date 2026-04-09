'use client';

import { useEffect, useRef } from 'react';
import { isMockMode } from '@/data/seed/mock-mode';
import { createBrowserClient } from '@/lib/supabase/client';
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

        // Map learning_paths: DB has node_ids array, TypeScript type expects path_nodes
        const paths: LearningPath[] = (pathsRes.data || []).map((row: Record<string, unknown>) => ({
          ...row,
          path_nodes: (row.node_ids as string[]) || [],
          milestones: [],
          has_certificate: false,
        })) as unknown as LearningPath[];

        setNodes(nodes);
        setEdges(edges);
        setPaths(paths);
        setError(null);
      } catch (err) {
        const msg = err instanceof Error ? err.message : 'Failed to load data';
        console.error('SupabaseDataProvider:', msg);
        setError(msg);
      } finally {
        setLoading(false);
      }
    }

    loadData();
  }, [setNodes, setEdges, setPaths, setLoading, setError]);

  return <>{children}</>;
}
