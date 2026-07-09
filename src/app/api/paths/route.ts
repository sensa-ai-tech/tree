import { NextRequest, NextResponse } from 'next/server';
import { withRateLimit } from '@/lib/api/middleware';
import { reportError } from '@/lib/observability/error-reporter';
import type { LearningPath } from '@/types/knowledge';

async function handleGet(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const specialty = searchParams.get('specialty');

    // Mock mode: return empty array.
    // In a real implementation, query Supabase for learning paths,
    // optionally filtered by specialty.
    void specialty;

    const data: LearningPath[] = [];

    return NextResponse.json({ data });
  } catch (error) {
    reportError(error, { scope: 'route:/api/paths' });
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export const GET = withRateLimit(handleGet);
