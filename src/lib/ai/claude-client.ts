import Anthropic from '@anthropic-ai/sdk';

const MOCK_MODE = !process.env.ANTHROPIC_API_KEY;
const MODEL_ID = 'claude-sonnet-4-20250514';
// Quiet in vitest — tests assert return shape, not console output; CI noise crowds out real failures.
const LOG_ENABLED = process.env.NODE_ENV !== 'test';

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
  /** Caller identifier for log correlation (e.g. 'route:/api/generate/skeleton'). */
  scope?: string;
}

/**
 * Structured log record — JSON-shaped so Vercel / Datadog / CloudWatch can index fields.
 * No prompt text (may contain PII or large bodies that bloat log storage).
 */
interface CallLogRecord {
  event: 'claude.call.success' | 'claude.call.fail' | 'claude.call.retry' | 'claude.call.mock';
  scope: string;
  model: string;
  attempt: number;
  maxAttempts: number;
  latencyMs: number;
  promptChars: number;
  inputTokens?: number;
  outputTokens?: number;
  stopReason?: string;
  errorName?: string;
  errorMessage?: string;
}

function emit(record: CallLogRecord): void {
  if (!LOG_ENABLED) return;
  if (record.event === 'claude.call.fail' || record.event === 'claude.call.retry') {
    // eslint-disable-next-line no-console
    console.warn(JSON.stringify(record));
  } else {
    // eslint-disable-next-line no-console
    console.info(JSON.stringify(record));
  }
}

export async function callClaude(
  prompt: string,
  options: CallClaudeOptions = {}
): Promise<string> {
  const { maxTokens = 4096, temperature = 0.3, retries = 3, scope = 'unknown' } = options;
  const promptChars = prompt.length;

  if (MOCK_MODE) {
    const started = Date.now();
    const out = getMockResponse(prompt);
    emit({
      event: 'claude.call.mock',
      scope,
      model: 'mock',
      attempt: 1,
      maxAttempts: 1,
      latencyMs: Date.now() - started,
      promptChars,
    });
    return out;
  }

  for (let attempt = 1; attempt <= retries; attempt++) {
    const started = Date.now();
    try {
      const response = await getClient().messages.create({
        model: MODEL_ID,
        max_tokens: maxTokens,
        temperature,
        messages: [{ role: 'user', content: prompt }],
      });
      const textBlock = response.content.find((b) => b.type === 'text');
      if (!textBlock || textBlock.type !== 'text') {
        throw new Error('No text response from Claude');
      }
      emit({
        event: 'claude.call.success',
        scope,
        model: MODEL_ID,
        attempt,
        maxAttempts: retries,
        latencyMs: Date.now() - started,
        promptChars,
        inputTokens: response.usage?.input_tokens,
        outputTokens: response.usage?.output_tokens,
        stopReason: response.stop_reason ?? undefined,
      });
      return textBlock.text;
    } catch (error) {
      const err = error instanceof Error ? error : new Error(String(error));
      const latencyMs = Date.now() - started;
      if (attempt === retries) {
        emit({
          event: 'claude.call.fail',
          scope,
          model: MODEL_ID,
          attempt,
          maxAttempts: retries,
          latencyMs,
          promptChars,
          errorName: err.name,
          errorMessage: err.message,
        });
        throw error;
      }
      emit({
        event: 'claude.call.retry',
        scope,
        model: MODEL_ID,
        attempt,
        maxAttempts: retries,
        latencyMs,
        promptChars,
        errorName: err.name,
        errorMessage: err.message,
      });
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
