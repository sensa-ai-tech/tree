import { NextRequest, NextResponse } from 'next/server';
import { callClaude, isAIMockMode } from '@/lib/ai/claude-client';
import { getContentPrompt } from '@/lib/ai/prompt-registry';
import { safeParseJson } from '@/lib/ai/parsers/json-parser';
import { validate, nodeContentSchema } from '@/lib/ai/parsers/validators';
import type { ContentGenerationInput, ContentOutput, KnowledgeNode } from '@/types/knowledge';

export async function POST(request: NextRequest) {
  try {
    const input: ContentGenerationInput = await request.json();

    if (isAIMockMode) {
      return NextResponse.json({ data: [] as ContentOutput[] });
    }

    const results: ContentOutput[] = [];

    // In a real implementation, we would fetch nodes from DB by IDs.
    // For now, process each node_id with a placeholder node.
    for (const nodeId of input.node_ids.slice(0, input.batch_size)) {
      const placeholderNode: KnowledgeNode = {
        id: nodeId,
        specialty: '',
        title: '',
        title_en: null,
        layer: 0,
        node_type: 'concept',
        difficulty: 1,
        estimated_minutes: 30,
        clinical_relevance: 1,
        exam_relevance: 1,
        status: 'draft',
        version: 1,
        tags: [],
        encyclopedia_link: null,
        cross_specialty_notes: null,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      };

      const prompt = getContentPrompt(placeholderNode, []);
      const rawResponse = await callClaude(prompt, { maxTokens: 8192 });
      const parsed = safeParseJson<Record<string, unknown>>(rawResponse);
      const validation = validate(nodeContentSchema, parsed);

      if (validation.success) {
        results.push({
          node_id: nodeId,
          content: {
            id: `content_${nodeId}`,
            node_id: nodeId,
            version: 1,
            summary: (validation.data as Record<string, unknown>).summary as string,
            learning_objectives: (validation.data as Record<string, unknown>).learning_objectives as string[],
            key_points: (validation.data as Record<string, unknown>).key_points as string[],
            body: (validation.data as Record<string, unknown>).body as string,
            clinical_pearl: ((validation.data as Record<string, unknown>).clinical_pearl as string) ?? '',
            common_mistakes: ((validation.data as Record<string, unknown>).common_mistakes as string[]) ?? [],
            disease_data: null,
            diagnostic_data: null,
            procedure_data: null,
            visual_placeholders: [],
            interactive_placeholders: [],
            drug_api_links: [],
            references: ((validation.data as Record<string, unknown>).references as Array<{ type: string; citation: string; relevance: string }>) ?? [],
            is_current: true,
            created_at: new Date().toISOString(),
          },
        });
      }
    }

    return NextResponse.json({ data: results });
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
