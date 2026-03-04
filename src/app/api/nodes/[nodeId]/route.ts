import { NextRequest, NextResponse } from 'next/server';
import { withRateLimit } from '@/lib/api/middleware';
import type { KnowledgeNode } from '@/types/knowledge';

interface NodeDetailResponse {
  data: KnowledgeNode | null;
  error?: string;
}

async function handleGet(
  _request: NextRequest,
  context?: { params: Promise<Record<string, string>> }
) {
  try {
    const { nodeId } = (await context!.params) as { nodeId: string };

    if (!nodeId || nodeId.trim() === '') {
      return NextResponse.json(
        { data: null, error: 'Node ID is required' },
        { status: 400 }
      );
    }

    // Mock mode: return not found.
    // In a real implementation, query Supabase for the node by ID,
    // including its content, edges, and visual aids.
    const response: NodeDetailResponse = {
      data: null,
      error: 'Node not found',
    };

    return NextResponse.json(response, { status: 404 });
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json({ data: null, error: message }, { status: 500 });
  }
}

export const GET = withRateLimit(handleGet);
