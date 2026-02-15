import { NextRequest, NextResponse } from 'next/server';
import type { CaseChallenge } from '@/types/case';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const specialty = searchParams.get('specialty');
    const difficulty = searchParams.get('difficulty');

    // Validate difficulty if provided
    if (difficulty !== null) {
      const diffNum = parseInt(difficulty, 10);
      if (isNaN(diffNum) || diffNum < 1 || diffNum > 5) {
        return NextResponse.json(
          { error: 'Invalid difficulty parameter. Must be 1-5.' },
          { status: 400 }
        );
      }
    }

    // Mock mode: return empty case list.
    // In a real implementation, query Supabase for CaseChallenge records,
    // optionally filtered by specialty and difficulty.
    void specialty;
    void difficulty;

    const data: CaseChallenge[] = [];

    return NextResponse.json({ data });
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
