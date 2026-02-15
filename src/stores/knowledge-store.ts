'use client';

import { create } from 'zustand';
import type {
  KnowledgeNode,
  KnowledgeEdge,
  LearningPath,
  NodeContent,
  Layer,
  NodeType,
} from '@/types/knowledge';

interface KnowledgeFilters {
  specialty: string | null;
  layer: Layer | null;
  nodeType: NodeType | null;
  search: string;
}

interface KnowledgeState {
  nodes: KnowledgeNode[];
  edges: KnowledgeEdge[];
  paths: LearningPath[];
  selectedNodeId: string | null;
  selectedNodeContent: NodeContent | null;
  filters: KnowledgeFilters;
  isLoading: boolean;
  error: string | null;

  setNodes: (nodes: KnowledgeNode[]) => void;
  setEdges: (edges: KnowledgeEdge[]) => void;
  setPaths: (paths: LearningPath[]) => void;
  selectNode: (nodeId: string | null) => void;
  setNodeContent: (content: NodeContent | null) => void;
  setFilters: (filters: Partial<KnowledgeFilters>) => void;
  resetFilters: () => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;

  getFilteredNodes: () => KnowledgeNode[];
  getNodeById: (id: string) => KnowledgeNode | undefined;
  getEdgesForNode: (nodeId: string) => KnowledgeEdge[];
  getPathsBySpecialty: (specialty: string) => LearningPath[];
}

const defaultFilters: KnowledgeFilters = {
  specialty: null,
  layer: null,
  nodeType: null,
  search: '',
};

export const useKnowledgeStore = create<KnowledgeState>((set, get) => ({
  nodes: [],
  edges: [],
  paths: [],
  selectedNodeId: null,
  selectedNodeContent: null,
  filters: defaultFilters,
  isLoading: false,
  error: null,

  setNodes: (nodes) => set({ nodes }),
  setEdges: (edges) => set({ edges }),
  setPaths: (paths) => set({ paths }),
  selectNode: (nodeId) => set({ selectedNodeId: nodeId }),
  setNodeContent: (content) => set({ selectedNodeContent: content }),
  setFilters: (filters) =>
    set((state) => ({ filters: { ...state.filters, ...filters } })),
  resetFilters: () => set({ filters: defaultFilters }),
  setLoading: (isLoading) => set({ isLoading }),
  setError: (error) => set({ error }),

  getFilteredNodes: () => {
    const { nodes, filters } = get();
    return nodes.filter((node) => {
      if (filters.specialty && node.specialty !== filters.specialty) return false;
      if (filters.layer !== null && node.layer !== filters.layer) return false;
      if (filters.nodeType && node.node_type !== filters.nodeType) return false;
      if (filters.search) {
        const search = filters.search.toLowerCase();
        return (
          node.title.toLowerCase().includes(search) ||
          (node.title_en?.toLowerCase().includes(search) ?? false) ||
          node.id.toLowerCase().includes(search)
        );
      }
      return true;
    });
  },

  getNodeById: (id) => get().nodes.find((n) => n.id === id),

  getEdgesForNode: (nodeId) =>
    get().edges.filter(
      (e) => e.source_node_id === nodeId || e.target_node_id === nodeId
    ),

  getPathsBySpecialty: (specialty) =>
    get().paths.filter((p) => p.specialty === specialty),
}));
