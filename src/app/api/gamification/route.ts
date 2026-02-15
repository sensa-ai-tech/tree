import { NextRequest, NextResponse } from 'next/server';
import type {
  UserExperience,
  UserAchievement,
  XPEvent,
  XPSource,
} from '@/types/gamification';

interface GamificationResponse {
  experience: UserExperience;
  achievements: UserAchievement[];
  recent_events: XPEvent[];
}

interface XPEventInput {
  source: XPSource;
  amount: number;
  description: string;
}

const VALID_XP_SOURCES: XPSource[] = [
  'complete_node',
  'pass_checkpoint',
  'daily_review',
  'case_challenge',
  'streak_bonus',
  'first_attempt_bonus',
  'speed_bonus',
  'exploration_bonus',
];

export async function GET(_request: NextRequest) {
  try {
    // Mock mode: return default gamification state.
    // In a real implementation, query Supabase for the authenticated user's
    // experience, achievements, and recent XP events.
    const response: GamificationResponse = {
      experience: {
        user_id: 'mock_user',
        total_xp: 0,
        current_level: 1,
        streak_days: 0,
        last_active_date: null,
        specialties_explored: [],
      },
      achievements: [],
      recent_events: [],
    };

    return NextResponse.json({ data: response });
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const input: XPEventInput = await request.json();

    if (!input.source || !input.description) {
      return NextResponse.json(
        { error: 'source and description are required' },
        { status: 400 }
      );
    }

    if (!VALID_XP_SOURCES.includes(input.source)) {
      return NextResponse.json(
        { error: `Invalid source. Must be one of: ${VALID_XP_SOURCES.join(', ')}` },
        { status: 400 }
      );
    }

    if (typeof input.amount !== 'number' || input.amount <= 0) {
      return NextResponse.json(
        { error: 'amount must be a positive number' },
        { status: 400 }
      );
    }

    // Mock mode: record XP event and return updated state.
    // In a real implementation, insert XP event into Supabase,
    // update total_xp, recalculate level, check achievements, update streak.
    const event: XPEvent = {
      source: input.source,
      amount: input.amount,
      description: input.description,
      timestamp: new Date().toISOString(),
    };

    const updatedExperience: UserExperience = {
      user_id: 'mock_user',
      total_xp: input.amount,
      current_level: 1,
      streak_days: 1,
      last_active_date: new Date().toISOString().split('T')[0],
      specialties_explored: [],
    };

    return NextResponse.json({
      data: {
        event,
        experience: updatedExperience,
        new_achievements: [],
      },
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
