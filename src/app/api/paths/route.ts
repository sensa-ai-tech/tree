import { NextRequest, NextResponse } from 'next/server';
import type { LearningPath } from '@/types/knowledge';

export async function GET(request: NextRequest) {
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
    const message = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
