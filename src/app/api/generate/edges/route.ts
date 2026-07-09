import { NextRequest, NextResponse } from 'next/server';
import { withAuth, withRateLimit, enforceJsonBodyLimit } from '@/lib/api/middleware';
import { callClaude, isAIMockMode } from '@/lib/ai/claude-client';
import { buildEdgesPrompt } from '@/lib/ai/prompts/edges';
import { safeParseJson } from '@/lib/ai/parsers/json-parser';
import { validate, edgeOutputSchema, edgeGenerationInputSchema } from '@/lib/ai/parsers/validators';
import { reportError } from '@/lib/observability/error-reporter';
import type { EdgeOutput, KnowledgeNode } from '@/types/knowledge';

async function handlePost(request: NextRequest) {
  try {
    // edges 的 all_nodes 攜帶整個專科的完整節點物件，故上限放寬至 2MB（其餘 generate
    // 路由用預設 64KB）；all_nodes 陣列另有 .max(500) 限制元素數。
    const tooLarge = enforceJsonBodyLimit(request, 2_000_000);
    if (tooLarge) return tooLarge;
    const raw = await request.json();
    const inputValidation = validate(edgeGenerationInputSchema, raw);
    if (!inputValidation.success) {
      return NextResponse.json(
        { error: 'Invalid input', details: inputValidation.errors },
        { status: 400 }
      );
    }
    const input = inputValidation.data;

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

    // Cast after Zod validation — passthrough preserves extra KnowledgeNode fields
    const prompt = buildEdgesPrompt(input.all_nodes as unknown as KnowledgeNode[], input.specialty_abbr);
    const rawResponse = await callClaude(prompt, { maxTokens: 8192, scope: 'route:/api/generate/edges' });
    const parsed = safeParseJson<EdgeOutput>(rawResponse);
    const validation = validate(edgeOutputSchema, parsed);

    if (!validation.success) {
      reportError(new Error('Edge output validation failed'), {
        scope: 'route:/api/generate/edges',
        tags: { kind: 'validation', errorCount: validation.errors.length },
      });
      return NextResponse.json(
        { error: 'Validation failed', details: validation.errors },
        { status: 422 }
      );
    }

    return NextResponse.json({ data: validation.data });
  } catch (error) {
    reportError(error, { scope: 'route:/api/generate/edges' });
    return NextResponse.json({ error: 'Generation failed' }, { status: 500 });
  }
}

export const POST = withAuth(withRateLimit(handlePost, { maxRequests: 5, windowSeconds: 60 }));
