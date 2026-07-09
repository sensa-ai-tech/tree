import { NextRequest, NextResponse } from 'next/server';
import { withAuth, withRateLimit, enforceJsonBodyLimit } from '@/lib/api/middleware';
import { callClaude, isAIMockMode } from '@/lib/ai/claude-client';
import { buildCasePrompt } from '@/lib/ai/prompts/cases';
import { safeParseJson } from '@/lib/ai/parsers/json-parser';
import { validate, caseOutputSchema, caseGenerationInputSchema } from '@/lib/ai/parsers/validators';
import { reportError } from '@/lib/observability/error-reporter';
import type { KnowledgeNode } from '@/types/knowledge';

async function handlePost(request: NextRequest) {
  try {
    const tooLarge = enforceJsonBodyLimit(request);
    if (tooLarge) return tooLarge;
    const raw = await request.json();
    const inputValidation = validate(caseGenerationInputSchema, raw);
    if (!inputValidation.success) {
      return NextResponse.json(
        { error: 'Invalid input', details: inputValidation.errors },
        { status: 400 }
      );
    }
    const input = inputValidation.data;

    if (isAIMockMode) {
      return NextResponse.json({ data: { cases: [] } });
    }

    // In a real implementation, we would fetch nodes from DB by related_node_ids.
    // For now, create placeholder nodes for prompt building.
    const placeholderNodes: KnowledgeNode[] = input.related_node_ids.map((id) => ({
      id,
      specialty: input.specialty,
      title: '',
      title_en: null,
      layer: 3 as const,
      node_type: 'disease' as const,
      difficulty: input.difficulty as 1 | 2 | 3 | 4 | 5,
      estimated_minutes: 30,
      clinical_relevance: 3 as const,
      exam_relevance: 3 as const,
      status: 'published' as const,
      version: 1,
      tags: [],
      encyclopedia_link: null,
      cross_specialty_notes: null,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    }));

    const prompt = buildCasePrompt(placeholderNodes, input.specialty, input.difficulty, input.species);
    const rawResponse = await callClaude(prompt, { maxTokens: 8192, scope: 'route:/api/generate/cases' });
    const parsed = safeParseJson<Record<string, unknown>>(rawResponse);
    const validation = validate(caseOutputSchema, parsed);

    if (!validation.success) {
      reportError(new Error('Case output validation failed'), {
        scope: 'route:/api/generate/cases',
        tags: { kind: 'validation', errorCount: validation.errors.length },
      });
      return NextResponse.json(
        { error: 'Validation failed', details: validation.errors },
        { status: 422 }
      );
    }

    return NextResponse.json({ data: validation.data });
  } catch (error) {
    reportError(error, { scope: 'route:/api/generate/cases' });
    return NextResponse.json({ error: 'Generation failed' }, { status: 500 });
  }
}

export const POST = withAuth(withRateLimit(handlePost, { maxRequests: 5, windowSeconds: 60 }));
