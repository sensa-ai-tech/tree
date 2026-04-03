import { NextRequest, NextResponse } from 'next/server';
import { withAuth, withRateLimit } from '@/lib/api/middleware';
import { callClaude } from '@/lib/ai/claude-client';
import { buildSkeletonPrompt } from '@/lib/ai/prompts/skeleton';
import { safeParseJson } from '@/lib/ai/parsers/json-parser';
import { validate, skeletonOutputSchema, skeletonInputSchema } from '@/lib/ai/parsers/validators';
import type { SkeletonOutput } from '@/types/knowledge';

async function handlePost(request: NextRequest) {
  try {
    const raw = await request.json();
    const inputValidation = validate(skeletonInputSchema, raw);
    if (!inputValidation.success) {
      return NextResponse.json(
        { error: 'Invalid input', details: inputValidation.errors },
        { status: 400 }
      );
    }
    const input = inputValidation.data;
    const prompt = buildSkeletonPrompt(input);
    const rawResponse = await callClaude(prompt, { maxTokens: 8192 });
    const parsed = safeParseJson<SkeletonOutput>(rawResponse);
    const validation = validate(skeletonOutputSchema, parsed);
    if (!validation.success) {
      return NextResponse.json(
        { error: 'Validation failed', details: validation.errors },
        { status: 422 }
      );
    }
    return NextResponse.json({ data: validation.data });
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

export const POST = withAuth(withRateLimit(handlePost, { maxRequests: 5, windowSeconds: 60 }));
