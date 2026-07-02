import { NextRequest, NextResponse } from 'next/server';
import { withRateLimit, enforceJsonBodyLimit } from '@/lib/api/middleware';
import type { UserNodeProgress, ProgressStatus } from '@/types/gamification';

interface ProgressUpdateInput {
  node_id: string;
  status: ProgressStatus;
  score?: number | null;
  time_spent_minutes?: number | null;
}

async function handleGet(_request: NextRequest) {
  try {
    // Mock mode: return empty progress list.
    // In a real implementation, read the authenticated user's ID from session,
    // then query Supabase for all UserNodeProgress records.
    const data: UserNodeProgress[] = [];

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
    const tooLarge = enforceJsonBodyLimit(request);
    if (tooLarge) return tooLarge;
    const input: ProgressUpdateInput = await request.json();

    if (!input.node_id || !input.status) {
      return NextResponse.json(
        { error: 'node_id and status are required' },
        { status: 400 }
      );
    }

    if (!/^[a-zA-Z0-9_-]{1,64}$/.test(input.node_id)) {
      return NextResponse.json(
        { error: 'node_id must be 1–64 alphanumeric, dash, or underscore characters' },
        { status: 400 }
      );
    }

    const validStatuses: ProgressStatus[] = ['locked', 'available', 'in_progress', 'completed'];
    if (!validStatuses.includes(input.status)) {
      return NextResponse.json(
        { error: `Invalid status. Must be one of: ${validStatuses.join(', ')}` },
        { status: 400 }
      );
    }

    if (input.score !== undefined && input.score !== null) {
      if (typeof input.score !== 'number' || input.score < 0 || input.score > 100) {
        return NextResponse.json(
          { error: 'Score must be a number between 0 and 100' },
          { status: 400 }
        );
      }
    }

    if (input.time_spent_minutes !== undefined && input.time_spent_minutes !== null) {
      if (typeof input.time_spent_minutes !== 'number' || input.time_spent_minutes < 0) {
        return NextResponse.json(
          { error: 'time_spent_minutes must be a non-negative number' },
          { status: 400 }
        );
      }
    }

    // Mock mode: return the updated progress record.
    // In a real implementation, upsert into Supabase with authenticated user's ID.
    const now = new Date().toISOString();
    const updatedProgress: UserNodeProgress = {
      user_id: 'mock_user',
      node_id: input.node_id,
      status: input.status,
      started_at: input.status === 'in_progress' || input.status === 'completed' ? now : null,
      completed_at: input.status === 'completed' ? now : null,
      score: input.score ?? null,
      time_spent_minutes: input.time_spent_minutes ?? null,
    };

    return NextResponse.json({ data: updatedProgress });
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

export const GET = withRateLimit(handleGet);
export const POST = withRateLimit(handlePost);
