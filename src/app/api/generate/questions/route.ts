import { NextRequest, NextResponse } from 'next/server';
import { withAuth, withRateLimit } from '@/lib/api/middleware';
import { callClaude, isAIMockMode } from '@/lib/ai/claude-client';
import { buildQuestionsPrompt } from '@/lib/ai/prompts/questions';
import { safeParseJson } from '@/lib/ai/parsers/json-parser';
import { validate, questionsOutputSchema, questionsInputSchema } from '@/lib/ai/parsers/validators';
import { reportError } from '@/lib/observability/error-reporter';
import type { KnowledgeNode } from '@/types/knowledge';

async function handlePost(request: NextRequest) {
  try {
    const raw = await request.json();
    const inputValidation = validate(questionsInputSchema, raw);
    if (!inputValidation.success) {
      return NextResponse.json(
        { error: 'Invalid input', details: inputValidation.errors },
        { status: 400 }
      );
    }
    const input = inputValidation.data;

    if (isAIMockMode) {
      return NextResponse.json({ data: { questions: [] } });
    }

    // In a real implementation, we would fetch the node from DB.
    // For now, create a placeholder node for prompt building.
    const placeholderNode: KnowledgeNode = {
      id: input.node_id,
      specialty: '',
      title: '',
      title_en: null,
      layer: 0,
      node_type: 'concept',
      difficulty: 3,
      estimated_minutes: 30,
      clinical_relevance: 3,
      exam_relevance: 3,
      status: 'published',
      version: 1,
      tags: [],
      encyclopedia_link: null,
      cross_specialty_notes: null,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    };

    const prompt = buildQuestionsPrompt(placeholderNode, input.content_summary, input.key_points);
    const rawResponse = await callClaude(prompt, { maxTokens: 8192, scope: 'route:/api/generate/questions' });
    const parsed = safeParseJson<{ questions: unknown[] }>(rawResponse);
    const validation = validate(questionsOutputSchema, parsed);

    if (!validation.success) {
      reportError(new Error('Questions output validation failed'), {
        scope: 'route:/api/generate/questions',
        tags: { kind: 'validation', errorCount: validation.errors.length },
      });
      return NextResponse.json(
        { error: 'Validation failed', details: validation.errors },
        { status: 422 }
      );
    }

    return NextResponse.json({ data: validation.data });
  } catch (error) {
    reportError(error, { scope: 'route:/api/generate/questions' });
    return NextResponse.json({ error: 'Generation failed' }, { status: 500 });
  }
}

export const POST = withAuth(withRateLimit(handlePost, { maxRequests: 5, windowSeconds: 60 }));
