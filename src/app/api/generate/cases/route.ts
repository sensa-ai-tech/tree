import { NextRequest, NextResponse } from 'next/server';
import { callClaude, isAIMockMode } from '@/lib/ai/claude-client';
import { buildCasePrompt } from '@/lib/ai/prompts/cases';
import { safeParseJson } from '@/lib/ai/parsers/json-parser';
import { validate, caseOutputSchema } from '@/lib/ai/parsers/validators';
import type { KnowledgeNode } from '@/types/knowledge';

interface CaseGenerationInput {
  specialty: string;
  difficulty: number;
  species: string;
  related_node_ids: string[];
}

export async function POST(request: NextRequest) {
  try {
    const input: CaseGenerationInput = await request.json();

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
    const rawResponse = await callClaude(prompt, { maxTokens: 8192 });
    const parsed = safeParseJson<Record<string, unknown>>(rawResponse);
    const validation = validate(caseOutputSchema, parsed);

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
