import type { KnowledgeEdge } from '@/types/knowledge';

const DEPENDENCY_TYPES = ['prerequisite', 'builds_on'] as const;

function filterDependencyEdges(edges: KnowledgeEdge[]): KnowledgeEdge[] {
  return edges.filter((e) => {
    if (!(DEPENDENCY_TYPES as readonly string[]).includes(e.relation_type)) {
      return false;
    }
    // Self-loops (A->A) are never a legitimate prerequisite relationship.
    // Silently dropping is dangerous: topologicalSort would skip A entirely
    // (A's in-degree never reaches 0); detectCycles would emit degenerate [A, A].
    // Filter at the source + warn in dev so authoring CI surfaces the bad data.
    if (e.source_node_id === e.target_node_id) {
      if (process.env.NODE_ENV !== 'production') {
        // eslint-disable-next-line no-console
        console.warn(
          `[graph-algorithms] Dropped self-loop edge ${e.id} on node ${e.source_node_id}`
        );
      }
      return false;
    }
    return true;
  });
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

  // Iterative DFS with phase-marker stack avoids V8 stack overflow on deep
  // dependency chains (>10K frames). Each frame tracks {node, iter} so we
  // can pause/resume mid-neighbor-loop — preserving GRAY-on-enter /
  // BLACK-on-exit ordering that back-edge cycle detection depends on.
  type Frame = { node: string; iter: number };
  for (const root of allNodes) {
    if (color.get(root) !== WHITE) continue;
    const stack: Frame[] = [{ node: root, iter: 0 }];
    color.set(root, GRAY);
    while (stack.length > 0) {
      const frame = stack[stack.length - 1];
      const neighbors = adjacency.get(frame.node) ?? [];
      if (frame.iter >= neighbors.length) {
        color.set(frame.node, BLACK);
        stack.pop();
        continue;
      }
      const neighbor = neighbors[frame.iter];
      frame.iter += 1;
      const c = color.get(neighbor);
      if (c === GRAY) {
        // Back edge → cycle. Reconstruct via parent chain from frame.node
        // back until we reach neighbor's predecessor in the cycle.
        const cycle: string[] = [neighbor, frame.node];
        let current: string = frame.node;
        while (parent.get(current) && parent.get(current) !== neighbor) {
          current = parent.get(current)!;
          cycle.push(current);
        }
        cycles.push(cycle.reverse());
      } else if (c === WHITE) {
        parent.set(neighbor, frame.node);
        color.set(neighbor, GRAY);
        stack.push({ node: neighbor, iter: 0 });
      }
    }
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
  // CODE-R3-001 iter 4: weighted Dijkstra honours KnowledgeEdge.weight.
  // Self-path: trivially the single-node path, no traversal needed.
  if (startNodeId === endNodeId) return [startNodeId];

  // Weighted adjacency: stronger edges (higher weight) preferred.
  // cost = 1 / max(0.01, weight) is monotone-decreasing in weight and
  // BFS-equivalent when every weight = 1 (preserves the existing test contract).
  const adjacency = new Map<string, Array<{ node: string; cost: number }>>();
  for (const edge of edges) {
    const cost = 1 / Math.max(0.01, edge.weight);
    if (!adjacency.has(edge.source_node_id))
      adjacency.set(edge.source_node_id, []);
    adjacency.get(edge.source_node_id)!.push({ node: edge.target_node_id, cost });
    if (edge.bidirectional) {
      if (!adjacency.has(edge.target_node_id))
        adjacency.set(edge.target_node_id, []);
      adjacency.get(edge.target_node_id)!.push({ node: edge.source_node_id, cost });
    }
  }

  const distance = new Map<string, number>();
  const parentMap = new Map<string, string | null>();
  distance.set(startNodeId, 0);
  parentMap.set(startNodeId, null);

  // Sorted-insert priority queue. Graph is bounded (<500 nodes); O(n) insert
  // beats pulling in a heap dep. Upgrade to binary heap past ~10K nodes.
  type Entry = { node: string; dist: number };
  const queue: Entry[] = [{ node: startNodeId, dist: 0 }];

  const insertSorted = (entry: Entry): void => {
    let i = 0;
    while (i < queue.length && queue[i].dist <= entry.dist) i += 1;
    queue.splice(i, 0, entry);
  };

  while (queue.length > 0) {
    const current = queue.shift()!;
    // Stale entry: a shorter path was already finalised.
    if (current.dist > (distance.get(current.node) ?? Infinity)) continue;

    if (current.node === endNodeId) {
      const path: string[] = [];
      let node: string | null = endNodeId;
      while (node !== null) {
        path.unshift(node);
        node = parentMap.get(node) ?? null;
      }
      return path;
    }

    for (const { node: neighbor, cost } of adjacency.get(current.node) ?? []) {
      const nextDist = current.dist + cost;
      const prevDist = distance.get(neighbor) ?? Infinity;
      if (nextDist < prevDist) {
        distance.set(neighbor, nextDist);
        parentMap.set(neighbor, current.node);
        insertSorted({ node: neighbor, dist: nextDist });
      }
    }
  }

  return null;
}

export function getConnectedComponents(
  nodeIds: string[],
  edges: KnowledgeEdge[]
): string[][] {
  const nodeIdSet = new Set(nodeIds);
  const adjacency = new Map<string, Set<string>>();
  for (const id of nodeIds) {
    adjacency.set(id, new Set());
  }
  for (const edge of edges) {
    // Skip edges that reference nodes not in the input set; mirrors
    // topologicalSort's `continue` guard — keeps components ⊆ nodeIds
    // even when AI-generated edges reference missing/ghost nodes.
    if (!nodeIdSet.has(edge.source_node_id) || !nodeIdSet.has(edge.target_node_id))
      continue;
    adjacency.get(edge.source_node_id)!.add(edge.target_node_id);
    adjacency.get(edge.target_node_id)!.add(edge.source_node_id);
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
