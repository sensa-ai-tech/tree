/**
 * claude-client.ts — live API mode tests
 *
 * Uses vi.hoisted() + vi.resetModules() + vi.stubEnv() so MOCK_MODE evaluates to false,
 * covering the non-mock code paths (lines 8-14, 33-51 of claude-client.ts).
 */
// @vitest-environment node
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';

// vi.hoisted() runs before the vi.mock() factory, so mockCreate is available inside the factory.
const mockCreate = vi.hoisted(() => vi.fn());

vi.mock('@anthropic-ai/sdk', () => ({
  // Use a regular function (not arrow) so `new Anthropic()` works correctly.
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  default: vi.fn().mockImplementation(function (this: any) {
    this.messages = { create: mockCreate };
  }),
}));

describe('callClaude: live API mode (ANTHROPIC_API_KEY is set)', () => {
  beforeEach(() => {
    mockCreate.mockReset();
    vi.resetModules(); // clear module cache so MOCK_MODE is re-evaluated on fresh import
    vi.stubEnv('ANTHROPIC_API_KEY', 'sk-ant-test-key');
  });

  afterEach(() => {
    vi.unstubAllEnvs();
  });

  it('returns text content from a successful API response', async () => {
    mockCreate.mockResolvedValueOnce({
      content: [{ type: 'text', text: 'Generated content' }],
    });

    const { callClaude } = await import('@/lib/ai/claude-client');
    const result = await callClaude('write me something');

    expect(result).toBe('Generated content');
    expect(mockCreate).toHaveBeenCalledWith(
      expect.objectContaining({
        model: expect.stringContaining('claude'),
        messages: [{ role: 'user', content: 'write me something' }],
      })
    );
  });

  it('passes maxTokens and temperature options to the SDK', async () => {
    mockCreate.mockResolvedValueOnce({
      content: [{ type: 'text', text: 'ok' }],
    });

    const { callClaude } = await import('@/lib/ai/claude-client');
    await callClaude('prompt', { maxTokens: 512, temperature: 0.7 });

    expect(mockCreate).toHaveBeenCalledWith(
      expect.objectContaining({ max_tokens: 512, temperature: 0.7 })
    );
  });

  it('throws when the API response contains no text block', async () => {
    // covers lines 42-44: `if (!textBlock || textBlock.type !== 'text') throw`
    mockCreate.mockResolvedValueOnce({
      content: [{ type: 'image_url', url: 'http://example.com/img.png' }],
    });

    const { callClaude } = await import('@/lib/ai/claude-client');
    await expect(callClaude('prompt', { retries: 1 })).rejects.toThrow(
      'No text response from Claude'
    );
  });

  it('succeeds on second attempt after initial failure (covers setTimeout retry delay)', async () => {
    // covers line 48: `await new Promise(r => setTimeout(r, 1000 * attempt))`
    vi.useFakeTimers();
    mockCreate
      .mockRejectedValueOnce(new Error('Temporary error'))
      .mockResolvedValueOnce({ content: [{ type: 'text', text: 'retry success' }] });

    const { callClaude } = await import('@/lib/ai/claude-client');
    const promise = callClaude('prompt', { retries: 2 });

    // Advance the 1000ms retry delay so the second attempt runs
    await vi.runAllTimersAsync();

    const result = await promise;
    expect(result).toBe('retry success');
    expect(mockCreate).toHaveBeenCalledTimes(2);
    vi.useRealTimers();
  });

  it('throws after all retries exhausted (covers catch + throw on last attempt)', async () => {
    // covers lines 46-47: catch block + `if (attempt === retries) throw error`
    mockCreate.mockRejectedValueOnce(new Error('API error'));

    const { callClaude } = await import('@/lib/ai/claude-client');
    await expect(callClaude('prompt', { retries: 1 })).rejects.toThrow('API error');
    expect(mockCreate).toHaveBeenCalledTimes(1);
  });
});
