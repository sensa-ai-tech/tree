import { NextRequest, NextResponse } from 'next/server';
import { withRateLimit } from '@/lib/api/middleware';
import type { CaseChallenge, CaseResult, CaseStepResult } from '@/types/case';

interface CaseSubmitInput {
  step_results: CaseStepResult[];
  total_time_seconds: number;
}

async function handleGet(
  _request: NextRequest,
  context?: { params: Promise<Record<string, string>> }
) {
  try {
    const { caseId } = (await context!.params) as { caseId: string };

    if (!caseId || caseId.trim() === '') {
      return NextResponse.json(
        { data: null, error: 'Case ID is required' },
        { status: 400 }
      );
    }

    if (!/^[a-zA-Z0-9_-]{1,64}$/.test(caseId)) {
      return NextResponse.json(
        { data: null, error: 'Invalid Case ID format' },
        { status: 400 }
      );
    }

    // Mock mode: return not found.
    // In a real implementation, query Supabase for the CaseChallenge by ID,
    // including all steps and expert pathway.
    const data: CaseChallenge | null = null;

    if (!data) {
      return NextResponse.json(
        { data: null, error: 'Case not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({ data });
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json({ data: null, error: message }, { status: 500 });
  }
}

async function handlePost(
  request: NextRequest,
  context?: { params: Promise<Record<string, string>> }
) {
  try {
    if (!request.headers.get('content-type')?.includes('application/json')) {
      return NextResponse.json({ error: 'Unsupported Media Type' }, { status: 415 });
    }
    const { caseId } = (await context!.params) as { caseId: string };
    const input: CaseSubmitInput = await request.json();

    if (!caseId || caseId.trim() === '') {
      return NextResponse.json(
        { error: 'Case ID is required' },
        { status: 400 }
      );
    }

    if (!/^[a-zA-Z0-9_-]{1,64}$/.test(caseId)) {
      return NextResponse.json(
        { error: 'Invalid Case ID format' },
        { status: 400 }
      );
    }

    if (!input.step_results || !Array.isArray(input.step_results) || input.step_results.length === 0) {
      return NextResponse.json(
        { error: 'step_results array is required and must not be empty' },
        { status: 400 }
      );
    }

    if (input.step_results.length > 100) {
      return NextResponse.json(
        { error: 'step_results must not exceed 100 steps' },
        { status: 400 }
      );
    }

    for (const step of input.step_results) {
      if (typeof step.score !== 'number' || step.score < 0 || step.score > 100) {
        return NextResponse.json(
          { error: 'each step.score must be a number between 0 and 100' },
          { status: 400 }
        );
      }
    }

    if (typeof input.total_time_seconds !== 'number' || input.total_time_seconds < 0 || input.total_time_seconds > 86400) {
      return NextResponse.json(
        { error: 'total_time_seconds must be between 0 and 86400 (24 hours)' },
        { status: 400 }
      );
    }

    // Mock mode: calculate result from submitted step results.
    // In a real implementation, verify the case exists, validate step_results
    // against the case steps, calculate scores, and save to Supabase.
    const totalScore = input.step_results.reduce((sum, step) => sum + step.score, 0);
    const maxScore = input.step_results.length * 100;
    const correctSteps = input.step_results.filter((s) => s.is_correct).length;

    const result: CaseResult = {
      case_id: caseId,
      total_score: totalScore,
      max_score: maxScore,
      accuracy: input.step_results.length > 0 ? correctSteps / input.step_results.length : 0,
      step_results: input.step_results,
      total_time_seconds: input.total_time_seconds,
      completed_at: new Date().toISOString(),
    };

    return NextResponse.json({ data: result });
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

export const GET = withRateLimit(handleGet);
export const POST = withRateLimit(handlePost);
