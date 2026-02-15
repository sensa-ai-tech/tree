import { NextRequest, NextResponse } from 'next/server';
import { callClaude, isAIMockMode } from '@/lib/ai/claude-client';
import { buildQuestionsPrompt } from '@/lib/ai/prompts/questions';
import { safeParseJson } from '@/lib/ai/parsers/json-parser';
import { validate, questionsOutputSchema } from '@/lib/ai/parsers/validators';
import type { KnowledgeNode } from '@/types/knowledge';

interface QuestionsInput {
  node_id: string;
  content_summary: string;
  key_points: string[];
}

export async function POST(request: NextRequest) {
  try {
    const input: QuestionsInput = await request.json();

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
    const rawResponse = await callClaude(prompt, { maxTokens: 8192 });
    const parsed = safeParseJson<{ questions: unknown[] }>(rawResponse);
    const validation = validate(questionsOutputSchema, parsed);

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
