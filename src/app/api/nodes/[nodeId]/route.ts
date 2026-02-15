import { NextRequest, NextResponse } from 'next/server';
import type { KnowledgeNode } from '@/types/knowledge';

interface NodeDetailResponse {
  data: KnowledgeNode | null;
  error?: string;
}

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ nodeId: string }> }
) {
  try {
    const { nodeId } = await params;

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
