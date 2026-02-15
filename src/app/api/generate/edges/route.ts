import { NextRequest, NextResponse } from 'next/server';
import { callClaude, isAIMockMode } from '@/lib/ai/claude-client';
import { buildEdgesPrompt } from '@/lib/ai/prompts/edges';
import { safeParseJson } from '@/lib/ai/parsers/json-parser';
import { validate, edgeOutputSchema } from '@/lib/ai/parsers/validators';
import type { EdgeGenerationInput, EdgeOutput } from '@/types/knowledge';

export async function POST(request: NextRequest) {
  try {
    const input: EdgeGenerationInput = await request.json();

    if (isAIMockMode) {
      const emptyOutput: EdgeOutput = {
        edges: [],
        statistics: {
          total_edges: 0,
          edges_by_type: {},
          orphan_nodes: input.all_nodes.map((n) => n.id),
          high_connectivity_nodes: [],
        },
      };
      return NextResponse.json({ data: emptyOutput });
    }

    const prompt = buildEdgesPrompt(input.all_nodes, input.specialty_abbr);
    const rawResponse = await callClaude(prompt, { maxTokens: 8192 });
    const parsed = safeParseJson<EdgeOutput>(rawResponse);
    const validation = validate(edgeOutputSchema, parsed);

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
