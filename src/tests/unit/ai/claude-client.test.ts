/**
 * Tests for lib/ai/claude-client.ts
 *
 * In the test environment, ANTHROPIC_API_KEY is absent → MOCK_MODE = true.
 * callClaude() routes to getMockResponse() which returns deterministic JSON
 * based on keyword detection in the prompt.
 */
import { describe, it, expect } from 'vitest';

describe('lib/ai/claude-client — mock mode', () => {
  it('isAIMockMode is true when ANTHROPIC_API_KEY is absent', async () => {
    const { isAIMockMode } = await import('@/lib/ai/claude-client');
    expect(isAIMockMode).toBe(true);
  });

  it('callClaude() with "skeleton" keyword returns valid JSON with specialty key', async () => {
    const { callClaude } = await import('@/lib/ai/claude-client');
    const raw = await callClaude('請生成一個 skeleton for this specialty');
    const parsed = JSON.parse(raw);
    expect(parsed).toHaveProperty('specialty');
    expect(parsed).toHaveProperty('nodes');
    expect(parsed).toHaveProperty('validation_report');
  });

  it('callClaude() with "骨架" keyword returns skeleton JSON', async () => {
    const { callClaude } = await import('@/lib/ai/claude-client');
    const raw = await callClaude('產生骨架結構');
    const parsed = JSON.parse(raw);
    expect(parsed).toHaveProperty('specialty');
  });

  it('callClaude() with "edge" keyword returns JSON with edges array', async () => {
    const { callClaude } = await import('@/lib/ai/claude-client');
    const raw = await callClaude('Please generate edges between nodes');
    const parsed = JSON.parse(raw);
    expect(parsed).toHaveProperty('edges');
    expect(Array.isArray(parsed.edges)).toBe(true);
  });

  it('callClaude() with "關聯" keyword returns edge JSON', async () => {
    const { callClaude } = await import('@/lib/ai/claude-client');
    const raw = await callClaude('找出節點間關聯');
    const parsed = JSON.parse(raw);
    expect(parsed).toHaveProperty('edges');
  });

  it('callClaude() with "question" keyword returns JSON with questions array', async () => {
    const { callClaude } = await import('@/lib/ai/claude-client');
    const raw = await callClaude('Generate questions for this topic');
    const parsed = JSON.parse(raw);
    expect(parsed).toHaveProperty('questions');
    expect(Array.isArray(parsed.questions)).toBe(true);
  });

  it('callClaude() with "題" keyword returns question JSON', async () => {
    const { callClaude } = await import('@/lib/ai/claude-client');
    const raw = await callClaude('請出 5 題 MCQ 題目');
    const parsed = JSON.parse(raw);
    expect(parsed).toHaveProperty('questions');
  });

  it('callClaude() with "case" keyword returns JSON with cases array', async () => {
    const { callClaude } = await import('@/lib/ai/claude-client');
    const raw = await callClaude('Generate a clinical case for learning');
    const parsed = JSON.parse(raw);
    expect(parsed).toHaveProperty('cases');
    expect(Array.isArray(parsed.cases)).toBe(true);
  });

  it('callClaude() with "病例" keyword returns case JSON', async () => {
    const { callClaude } = await import('@/lib/ai/claude-client');
    const raw = await callClaude('設計一個病例挑戰');
    const parsed = JSON.parse(raw);
    expect(parsed).toHaveProperty('cases');
  });

  it('callClaude() with "path" keyword returns JSON with paths array', async () => {
    const { callClaude } = await import('@/lib/ai/claude-client');
    const raw = await callClaude('Suggest a learning path for the specialty');
    const parsed = JSON.parse(raw);
    expect(parsed).toHaveProperty('paths');
    expect(Array.isArray(parsed.paths)).toBe(true);
  });

  it('callClaude() with "路徑" keyword returns path JSON', async () => {
    const { callClaude } = await import('@/lib/ai/claude-client');
    const raw = await callClaude('規劃學習路徑');
    const parsed = JSON.parse(raw);
    expect(parsed).toHaveProperty('paths');
  });

  it('callClaude() with unknown prompt returns JSON with content key', async () => {
    const { callClaude } = await import('@/lib/ai/claude-client');
    const raw = await callClaude('something completely unrelated');
    const parsed = JSON.parse(raw);
    expect(parsed).toHaveProperty('content');
  });

  it('callClaude() accepts maxTokens and temperature options without error', async () => {
    const { callClaude } = await import('@/lib/ai/claude-client');
    await expect(
      callClaude('generate questions', { maxTokens: 1024, temperature: 0.5, retries: 1 })
    ).resolves.toBeDefined();
  });
});
