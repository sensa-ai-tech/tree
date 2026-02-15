import Anthropic from '@anthropic-ai/sdk';

const MOCK_MODE = !process.env.ANTHROPIC_API_KEY;

let client: Anthropic | null = null;

function getClient(): Anthropic {
  if (!client) {
    if (MOCK_MODE) {
      throw new Error('Anthropic API key not configured');
    }
    client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });
  }
  return client;
}

export interface CallClaudeOptions {
  maxTokens?: number;
  temperature?: number;
  retries?: number;
}

export async function callClaude(
  prompt: string,
  options: CallClaudeOptions = {}
): Promise<string> {
  const { maxTokens = 4096, temperature = 0.3, retries = 3 } = options;

  if (MOCK_MODE) {
    return getMockResponse(prompt);
  }

  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      const response = await getClient().messages.create({
        model: 'claude-sonnet-4-20250514',
        max_tokens: maxTokens,
        temperature,
        messages: [{ role: 'user', content: prompt }],
      });
      const textBlock = response.content.find((b) => b.type === 'text');
      if (!textBlock || textBlock.type !== 'text') {
        throw new Error('No text response from Claude');
      }
      return textBlock.text;
    } catch (error) {
      if (attempt === retries) throw error;
      await new Promise((r) => setTimeout(r, 1000 * attempt));
    }
  }
  throw new Error('Unreachable');
}

function getMockResponse(prompt: string): string {
  const lower = prompt.toLowerCase();
  if (lower.includes('skeleton') || lower.includes('骨架')) {
    return JSON.stringify({
      specialty: 'mock_specialty',
      total_nodes: 5,
      estimated_total_hours: 10,
      nodes: [],
      validation_report: {
        completeness_score: 0.8,
        issues_found: [],
        taiwan_specific_additions: [],
      },
    });
  }
  if (lower.includes('edge') || lower.includes('關聯')) {
    return JSON.stringify({ edges: [], statistics: { total_edges: 0, edges_by_type: {}, orphan_nodes: [], high_connectivity_nodes: [] } });
  }
  if (lower.includes('question') || lower.includes('題')) {
    return JSON.stringify({ questions: [] });
  }
  if (lower.includes('case') || lower.includes('病例')) {
    return JSON.stringify({ cases: [] });
  }
  if (lower.includes('path') || lower.includes('路徑')) {
    return JSON.stringify({ paths: [] });
  }
  return JSON.stringify({ content: {} });
}

export { MOCK_MODE as isAIMockMode };
