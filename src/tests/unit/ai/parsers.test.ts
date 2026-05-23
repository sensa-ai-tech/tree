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

describe('safeParseJson: second catch block (lines 59-60)', () => {
  it('throws JsonParseError when JSON cannot be fixed even after repair attempts', () => {
    // `{ not: valid }` contains `{` so it passes the "no JSON" guard.
    // fixTrailingCommas and fixTruncatedJson leave it unchanged (balanced braces,
    // no trailing commas, no escape issues).  Second JSON.parse still fails →
    // covers json-parser.ts lines 59-60.
    expect(() => safeParseJson('{ not: valid }')).toThrow(JsonParseError);
  });
});

describe('safeParseJson: fixTruncatedJson edge cases', () => {
  it('handles backslash escape sequences inside a truncated JSON string', () => {
    // covers fixTruncatedJson escape path (lines 78-84 of json-parser.ts)
    // JSON with a backslash-escaped char (\\ = literal backslash) in a string value,
    // followed by a truncated array — first JSON.parse fails, fixTruncatedJson runs.
    const input = '{"key": "val\\\\ end", "nums": [1, 2';
    const result = safeParseJson<{ key: string; nums: number[] }>(input);
    expect(result.key).toBe('val\\ end');
    expect(result.nums).toHaveLength(2);
  });

  it('closes an unclosed string value when input is truncated mid-string', () => {
    // covers fixTruncatedJson inString path (line 100 of json-parser.ts)
    const result = safeParseJson<{ key: string }>('{"key": "truncated');
    expect(result.key).toBe('truncated');
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
