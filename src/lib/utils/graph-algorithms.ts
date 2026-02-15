import type { KnowledgeEdge } from '@/types/knowledge';

const DEPENDENCY_TYPES = ['prerequisite', 'builds_on'] as const;

function filterDependencyEdges(edges: KnowledgeEdge[]): KnowledgeEdge[] {
  return edges.filter((e) =>
    (DEPENDENCY_TYPES as readonly string[]).includes(e.relation_type)
  );
}

export function topologicalSort(
  nodeIds: string[],
  edges: KnowledgeEdge[]
): string[] {
  const depEdges = filterDependencyEdges(edges);
  const inDegree = new Map<string, number>();
  const adjacency = new Map<string, string[]>();

  for (const id of nodeIds) {
    inDegree.set(id, 0);
    adjacency.set(id, []);
  }

  for (const edge of depEdges) {
    if (!inDegree.has(edge.source_node_id) || !inDegree.has(edge.target_node_id))
      continue;
    adjacency.get(edge.source_node_id)!.push(edge.target_node_id);
    inDegree.set(
      edge.target_node_id,
      (inDegree.get(edge.target_node_id) ?? 0) + 1
    );
  }

  const queue: string[] = [];
  for (const [id, degree] of inDegree) {
    if (degree === 0) queue.push(id);
  }

  const sorted: string[] = [];
  while (queue.length > 0) {
    const current = queue.shift()!;
    sorted.push(current);
    for (const neighbor of adjacency.get(current) ?? []) {
      const newDegree = (inDegree.get(neighbor) ?? 1) - 1;
      inDegree.set(neighbor, newDegree);
      if (newDegree === 0) queue.push(neighbor);
    }
  }

  return sorted;
}

export function detectCycles(edges: KnowledgeEdge[]): string[][] {
  const depEdges = filterDependencyEdges(edges);
  const allNodes = new Set<string>();
  const adjacency = new Map<string, string[]>();

  for (const edge of depEdges) {
    allNodes.add(edge.source_node_id);
    allNodes.add(edge.target_node_id);
    if (!adjacency.has(edge.source_node_id))
      adjacency.set(edge.source_node_id, []);
    adjacency.get(edge.source_node_id)!.push(edge.target_node_id);
  }

  const WHITE = 0;
  const GRAY = 1;
  const BLACK = 2;
  const color = new Map<string, number>();
  const parent = new Map<string, string | null>();
  const cycles: string[][] = [];

  for (const node of allNodes) {
    color.set(node, WHITE);
    parent.set(node, null);
  }

  function dfs(node: string): void {
    color.set(node, GRAY);
    for (const neighbor of adjacency.get(node) ?? []) {
      if (color.get(neighbor) === GRAY) {
        const cycle: string[] = [neighbor, node];
        let current = node;
        while (parent.get(current) && parent.get(current) !== neighbor) {
          current = parent.get(current)!;
          cycle.push(current);
        }
        cycles.push(cycle.reverse());
      } else if (color.get(neighbor) === WHITE) {
        parent.set(neighbor, node);
        dfs(neighbor);
      }
    }
    color.set(node, BLACK);
  }

  for (const node of allNodes) {
    if (color.get(node) === WHITE) dfs(node);
  }

  return cycles;
}

export function findOrphanNodes(
  nodeIds: string[],
  edges: KnowledgeEdge[]
): string[] {
  const connected = new Set<string>();
  for (const edge of edges) {
    connected.add(edge.source_node_id);
    connected.add(edge.target_node_id);
  }
  return nodeIds.filter((id) => !connected.has(id));
}

export function findShortestPath(
  startNodeId: string,
  endNodeId: string,
  edges: KnowledgeEdge[]
): string[] | null {
  const adjacency = new Map<string, string[]>();
  for (const edge of edges) {
    if (!adjacency.has(edge.source_node_id))
      adjacency.set(edge.source_node_id, []);
    adjacency.get(edge.source_node_id)!.push(edge.target_node_id);
    if (edge.bidirectional) {
      if (!adjacency.has(edge.target_node_id))
        adjacency.set(edge.target_node_id, []);
      adjacency.get(edge.target_node_id)!.push(edge.source_node_id);
    }
  }

  const visited = new Set<string>();
  const parentMap = new Map<string, string | null>();
  const queue: string[] = [startNodeId];
  visited.add(startNodeId);
  parentMap.set(startNodeId, null);

  while (queue.length > 0) {
    const current = queue.shift()!;
    if (current === endNodeId) {
      const path: string[] = [];
      let node: string | null = endNodeId;
      while (node !== null) {
        path.unshift(node);
        node = parentMap.get(node) ?? null;
      }
      return path;
    }
    for (const neighbor of adjacency.get(current) ?? []) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        parentMap.set(neighbor, current);
        queue.push(neighbor);
      }
    }
  }

  return null;
}

export function getConnectedComponents(
  nodeIds: string[],
  edges: KnowledgeEdge[]
): string[][] {
  const adjacency = new Map<string, Set<string>>();
  for (const id of nodeIds) {
    adjacency.set(id, new Set());
  }
  for (const edge of edges) {
    adjacency.get(edge.source_node_id)?.add(edge.target_node_id);
    adjacency.get(edge.target_node_id)?.add(edge.source_node_id);
  }

  const visited = new Set<string>();
  const components: string[][] = [];

  for (const id of nodeIds) {
    if (visited.has(id)) continue;
    const component: string[] = [];
    const stack: string[] = [id];
    while (stack.length > 0) {
      const current = stack.pop()!;
      if (visited.has(current)) continue;
      visited.add(current);
      component.push(current);
      for (const neighbor of adjacency.get(current) ?? []) {
        if (!visited.has(neighbor)) stack.push(neighbor);
      }
    }
    components.push(component);
  }

  return components;
}

export function getPrerequisiteChain(
  nodeId: string,
  edges: KnowledgeEdge[]
): string[] {
  const depEdges = filterDependencyEdges(edges);
  const prerequisites = new Map<string, string[]>();
  for (const edge of depEdges) {
    if (!prerequisites.has(edge.target_node_id)) {
      prerequisites.set(edge.target_node_id, []);
    }
    prerequisites.get(edge.target_node_id)!.push(edge.source_node_id);
  }

  const chain: string[] = [];
  const visited = new Set<string>();
  const stack: string[] = [nodeId];

  while (stack.length > 0) {
    const current = stack.pop()!;
    if (visited.has(current)) continue;
    visited.add(current);
    if (current !== nodeId) chain.push(current);
    for (const prereq of prerequisites.get(current) ?? []) {
      if (!visited.has(prereq)) stack.push(prereq);
    }
  }

  return chain;
}

export function validatePathOrder(
  pathNodeIds: string[],
  edges: KnowledgeEdge[]
): {
  valid: boolean;
  violations: Array<{ node: string; missing_prerequisite: string }>;
} {
  const depEdges = filterDependencyEdges(edges);
  const violations: Array<{ node: string; missing_prerequisite: string }> = [];
  const seen = new Set<string>();

  for (const nodeId of pathNodeIds) {
    for (const edge of depEdges) {
      if (
        edge.target_node_id === nodeId &&
        pathNodeIds.includes(edge.source_node_id)
      ) {
        if (!seen.has(edge.source_node_id)) {
          violations.push({
            node: nodeId,
            missing_prerequisite: edge.source_node_id,
          });
        }
      }
    }
    seen.add(nodeId);
  }

  return { valid: violations.length === 0, violations };
}
