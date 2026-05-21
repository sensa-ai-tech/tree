import { NextRequest, NextResponse } from 'next/server';
import { withRateLimit } from '@/lib/api/middleware';
import { calculateNextReview, createInitialState } from '@/lib/gamification/spaced-rep';
import type { UserSpacedRepetition } from '@/types/gamification';
import type { FSRSRating } from '@/types/gamification';

interface ReviewSubmitInput {
  node_id: string;
  rating: FSRSRating;
}

interface DueReviewItem {
  node_id: string;
  due: string;
  mastery_level: number;
  reps: number;
}

async function handleGet(_request: NextRequest) {
  try {
    // Mock mode: return empty due-review list.
    // In a real implementation, query Supabase for the authenticated user's
    // UserSpacedRepetition records where due <= now.
    const data: DueReviewItem[] = [];

    return NextResponse.json({ data });
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

async function handlePost(request: NextRequest) {
  try {
    if (!request.headers.get('content-type')?.includes('application/json')) {
      return NextResponse.json({ error: 'Unsupported Media Type' }, { status: 415 });
    }
    const input: ReviewSubmitInput = await request.json();

    if (!input.node_id) {
      return NextResponse.json(
        { error: 'node_id is required' },
        { status: 400 }
      );
    }

    if (!/^[a-zA-Z0-9_-]{1,64}$/.test(input.node_id)) {
      return NextResponse.json(
        { error: 'node_id must be 1–64 alphanumeric, dash, or underscore characters' },
        { status: 400 }
      );
    }

    if (
      input.rating === undefined ||
      input.rating === null ||
      typeof input.rating !== 'number' ||
      input.rating < 1 ||
      input.rating > 4 ||
      !Number.isInteger(input.rating)
    ) {
      return NextResponse.json(
        { error: 'rating must be an integer between 1 and 4 (1=Again, 2=Hard, 3=Good, 4=Easy)' },
        { status: 400 }
      );
    }

    // Mock mode: simulate FSRS calculation.
    const currentState = createInitialState();
    const nextState = calculateNextReview(
      input.rating as FSRSRating,
      currentState
    );

    const updatedRecord: UserSpacedRepetition = {
      user_id: 'mock_user',
      node_id: input.node_id,
      due: nextState.due,
      stability: nextState.stability,
      difficulty: nextState.difficulty,
      elapsed_days: nextState.elapsed_days,
      scheduled_days: nextState.scheduled_days,
      reps: nextState.reps,
      lapses: nextState.lapses,
      state: nextState.state,
      last_review: nextState.last_review,
      mastery_level: nextState.mastery_level,
      last_rating: nextState.last_rating,
    };

    return NextResponse.json({ data: updatedRecord });
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

export const GET = withRateLimit(handleGet);
export const POST = withRateLimit(handlePost);
