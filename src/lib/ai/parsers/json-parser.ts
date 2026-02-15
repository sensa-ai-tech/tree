/**
 * 安全 JSON 解析器
 * 處理 Claude API 回傳中常見的格式問題
 */

export class JsonParseError extends Error {
  constructor(
    message: string,
    public readonly rawInput: string
  ) {
    super(message);
    this.name = 'JsonParseError';
  }
}

/**
 * 從 Claude 回傳中提取並解析 JSON
 * 處理: markdown code block 包裹、多餘逗號、截斷修復
 */
export function safeParseJson<T>(raw: string): T {
  let cleaned = raw.trim();

  // 移除 markdown code block 包裹
  const codeBlockMatch = cleaned.match(/```(?:json)?\s*\n?([\s\S]*?)\n?```/);
  if (codeBlockMatch) {
    cleaned = codeBlockMatch[1].trim();
  }

  // 移除 JSON 前後的非 JSON 文字
  const jsonStart = cleaned.indexOf('{');
  const jsonArrayStart = cleaned.indexOf('[');
  let startIndex = -1;

  if (jsonStart === -1 && jsonArrayStart === -1) {
    throw new JsonParseError('No JSON object or array found', raw);
  }

  if (jsonStart === -1) startIndex = jsonArrayStart;
  else if (jsonArrayStart === -1) startIndex = jsonStart;
  else startIndex = Math.min(jsonStart, jsonArrayStart);

  cleaned = cleaned.substring(startIndex);

  // 嘗試直接解析
  try {
    return JSON.parse(cleaned) as T;
  } catch {
    // 繼續修復
  }

  // 修復常見問題
  cleaned = fixTrailingCommas(cleaned);
  cleaned = fixTruncatedJson(cleaned);

  try {
    return JSON.parse(cleaned) as T;
  } catch (error) {
    const message =
      error instanceof Error ? error.message : 'Unknown parse error';
    throw new JsonParseError(`Failed to parse JSON: ${message}`, raw);
  }
}

function fixTrailingCommas(json: string): string {
  return json.replace(/,\s*([}\]])/g, '$1');
}

function fixTruncatedJson(json: string): string {
  let result = json;

  // 計算未關閉的括號
  let braces = 0;
  let brackets = 0;
  let inString = false;
  let escape = false;

  for (const char of result) {
    if (escape) {
      escape = false;
      continue;
    }
    if (char === '\\') {
      escape = true;
      continue;
    }
    if (char === '"') {
      inString = !inString;
      continue;
    }
    if (inString) continue;

    if (char === '{') braces++;
    else if (char === '}') braces--;
    else if (char === '[') brackets++;
    else if (char === ']') brackets--;
  }

  // 如果在字串中截斷，關閉字串
  if (inString) {
    result += '"';
  }

  // 移除末尾未完成的鍵值對
  result = result.replace(/,\s*"[^"]*"?\s*:?\s*$/, '');
  result = result.replace(/,\s*$/, '');

  // 補上缺少的閉合括號
  while (brackets > 0) {
    result += ']';
    brackets--;
  }
  while (braces > 0) {
    result += '}';
    braces--;
  }

  return result;
}

/**
 * 嘗試解析 JSON，失敗時回傳 null
 */
export function tryParseJson<T>(raw: string): T | null {
  try {
    return safeParseJson<T>(raw);
  } catch {
    return null;
  }
}
