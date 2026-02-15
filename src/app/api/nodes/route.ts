import { NextRequest, NextResponse } from 'next/server';
import type { KnowledgeNode, NodeType, NodeStatus } from '@/types/knowledge';

interface NodeListResponse {
  data: KnowledgeNode[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const specialty = searchParams.get('specialty');
    const layer = searchParams.get('layer');
    const type = searchParams.get('type');
    const status = searchParams.get('status');
    const page = Math.max(1, parseInt(searchParams.get('page') ?? '1', 10));
    const limit = Math.min(100, Math.max(1, parseInt(searchParams.get('limit') ?? '20', 10)));

    // Validate optional enum params
    if (layer !== null) {
      const layerNum = parseInt(layer, 10);
      if (isNaN(layerNum) || layerNum < 0 || layerNum > 5) {
        return NextResponse.json(
          { error: 'Invalid layer parameter. Must be 0-5.' },
          { status: 400 }
        );
      }
    }

    const validNodeTypes: NodeType[] = [
      'concept', 'mechanism', 'disease', 'diagnostic',
      'therapeutic', 'procedure', 'case_study', 'decision_tree',
    ];
    if (type !== null && !validNodeTypes.includes(type as NodeType)) {
      return NextResponse.json(
        { error: `Invalid type parameter. Must be one of: ${validNodeTypes.join(', ')}` },
        { status: 400 }
      );
    }

    const validStatuses: NodeStatus[] = ['draft', 'review', 'published'];
    if (status !== null && !validStatuses.includes(status as NodeStatus)) {
      return NextResponse.json(
        { error: `Invalid status parameter. Must be one of: ${validStatuses.join(', ')}` },
        { status: 400 }
      );
    }

    // Mock mode: return empty data with pagination
    // In a real implementation, query Supabase with filters:
    // specialty, layer, type, status, and apply pagination.
    void specialty;
    void layer;
    void type;
    void status;

    const response: NodeListResponse = {
      data: [],
      pagination: {
        page,
        limit,
        total: 0,
        totalPages: 0,
      },
    };

    return NextResponse.json(response);
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
