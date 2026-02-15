import { NextRequest, NextResponse } from 'next/server';
import { callClaude } from '@/lib/ai/claude-client';
import { buildSkeletonPrompt } from '@/lib/ai/prompts/skeleton';
import { safeParseJson } from '@/lib/ai/parsers/json-parser';
import { validate, skeletonOutputSchema } from '@/lib/ai/parsers/validators';
import type { SkeletonInput, SkeletonOutput } from '@/types/knowledge';

export async function POST(request: NextRequest) {
  try {
    const input: SkeletonInput = await request.json();
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
