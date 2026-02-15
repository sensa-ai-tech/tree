import { describe, it, expect } from 'vitest';
import { safeParseJson, tryParseJson, JsonParseError } from '@/lib/ai/parsers/json-parser';

describe('safeParseJson', () => {
  it('should parse valid JSON', () => {
    const result = safeParseJson<{ name: string }>('{"name": "test"}');
    expect(result).toEqual({ name: 'test' });
  });

  it('should parse JSON wrapped in markdown code block', () => {
    const input = '```json\n{"name": "test"}\n```';
    const result = safeParseJson<{ name: string }>(input);
    expect(result).toEqual({ name: 'test' });
  });

  it('should parse JSON with leading text', () => {
    const input = 'Here is the result:\n{"name": "test"}';
    const result = safeParseJson<{ name: string }>(input);
    expect(result).toEqual({ name: 'test' });
  });

  it('should parse JSON array', () => {
    const input = '[1, 2, 3]';
    const result = safeParseJson<number[]>(input);
    expect(result).toEqual([1, 2, 3]);
  });

  it('should fix trailing commas', () => {
    const input = '{"name": "test", "items": [1, 2, 3,],}';
    const result = safeParseJson<{ name: string; items: number[] }>(input);
    expect(result.name).toBe('test');
    expect(result.items).toEqual([1, 2, 3]);
  });

  it('should fix truncated JSON by adding closing brackets', () => {
    const input = '{"nodes": [{"id": "1"}, {"id": "2"}';
    const result = safeParseJson<{ nodes: Array<{ id: string }> }>(input);
    expect(result.nodes).toHaveLength(2);
  });

  it('should throw JsonParseError for non-JSON input', () => {
    expect(() => safeParseJson('hello world')).toThrow(JsonParseError);
  });

  it('should throw JsonParseError with raw input preserved', () => {
    try {
      safeParseJson('no json here');
    } catch (error) {
      expect(error).toBeInstanceOf(JsonParseError);
      expect((error as JsonParseError).rawInput).toBe('no json here');
    }
  });
});

describe('tryParseJson', () => {
  it('should return parsed result for valid JSON', () => {
    const result = tryParseJson<{ a: number }>('{"a": 1}');
    expect(result).toEqual({ a: 1 });
  });

  it('should return null for invalid input', () => {
    const result = tryParseJson('not json');
    expect(result).toBeNull();
  });
});
