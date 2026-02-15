import { NextRequest, NextResponse } from 'next/server';
import { calculateNextReview, createInitialState } from '@/lib/gamification/spaced-rep';
import type { UserSpacedRepetition, SpacedRepetitionState } from '@/types/gamification';

interface ReviewSubmitInput {
  node_id: string;
  quality: 0 | 1 | 2 | 3 | 4 | 5;
}

interface DueReviewItem {
  node_id: string;
  next_review: string;
  mastery_level: number;
  repetitions: number;
}

export async function GET(_request: NextRequest) {
  try {
    // Mock mode: return empty due-review list.
    // In a real implementation, query Supabase for the authenticated user's
    // UserSpacedRepetition records where next_review <= now.
    const data: DueReviewItem[] = [];

    return NextResponse.json({ data });
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const input: ReviewSubmitInput = await request.json();

    if (!input.node_id) {
      return NextResponse.json(
        { error: 'node_id is required' },
        { status: 400 }
      );
    }

    if (
      input.quality === undefined ||
      input.quality === null ||
      typeof input.quality !== 'number' ||
      input.quality < 0 ||
      input.quality > 5 ||
      !Number.isInteger(input.quality)
    ) {
      return NextResponse.json(
        { error: 'quality must be an integer between 0 and 5' },
        { status: 400 }
      );
    }

    // Mock mode: simulate SM-2 calculation.
    // In a real implementation, fetch existing SpacedRepetition state from Supabase,
    // or create initial state if first review.
    const currentState: SpacedRepetitionState = createInitialState();
    const nextState = calculateNextReview(
      input.quality as 0 | 1 | 2 | 3 | 4 | 5,
      currentState
    );

    const updatedRecord: UserSpacedRepetition = {
      user_id: 'mock_user',
      node_id: input.node_id,
      ease_factor: nextState.ease_factor,
      interval_days: nextState.interval_days,
      repetitions: nextState.repetitions,
      next_review: nextState.next_review,
      mastery_level: nextState.mastery_level,
      last_quality: nextState.last_quality,
    };

    return NextResponse.json({ data: updatedRecord });
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
