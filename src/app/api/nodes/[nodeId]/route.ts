import { NextRequest, NextResponse } from 'next/server';
import { withRateLimit } from '@/lib/api/middleware';
import { reportError } from '@/lib/observability/error-reporter';
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

    if (!/^[a-zA-Z0-9_-]{1,64}$/.test(nodeId)) {
      return NextResponse.json(
        { data: null, error: 'Invalid Node ID format' },
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
    reportError(error, { scope: 'route:/api/nodes/[nodeId]' });
    return NextResponse.json({ data: null, error: 'Internal server error' }, { status: 500 });
  }
}

export const GET = withRateLimit(handleGet);
