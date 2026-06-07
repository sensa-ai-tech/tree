import { NextRequest, NextResponse } from 'next/server';
import { withAuth, withRateLimit } from '@/lib/api/middleware';
import { callClaude } from '@/lib/ai/claude-client';
import { buildSkeletonPrompt } from '@/lib/ai/prompts/skeleton';
import { safeParseJson } from '@/lib/ai/parsers/json-parser';
import { validate, skeletonOutputSchema, skeletonInputSchema } from '@/lib/ai/parsers/validators';
import { reportError } from '@/lib/observability/error-reporter';
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
      // Surface validation failures to ops — most common LLM-output failure mode
      reportError(new Error('Skeleton output validation failed'), {
        scope: 'route:/api/generate/skeleton',
        tags: { kind: 'validation', errorCount: validation.errors.length },
      });
      return NextResponse.json(
        { error: 'Validation failed', details: validation.errors },
        { status: 422 }
      );
    }
    return NextResponse.json({ data: validation.data });
  } catch (error) {
    // Don't leak raw upstream messages (Anthropic SDK errors can embed request IDs / partial headers)
    reportError(error, { scope: 'route:/api/generate/skeleton' });
    return NextResponse.json({ error: 'Generation failed' }, { status: 500 });
  }
}

export const POST = withAuth(withRateLimit(handlePost, { maxRequests: 5, windowSeconds: 60 }));
