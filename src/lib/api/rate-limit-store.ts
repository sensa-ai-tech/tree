/**
 * Rate-limit store 抽象層。
 *
 * 兩種實作：
 * - `InMemoryRateLimitStore`：單一 Node process 內的 Map。在 Vercel serverless
 *   多 instance 環境不共享計數，cold start 會重置。只適合 dev / 單 instance 場景。
 * - `UpstashRateLimitStore`：Upstash Redis REST API。透過 fetch 呼叫，
 *   不必引入 redis client。所有 instance 共享狀態。
 *
 * `getRateLimitStore()` 會依環境變數自動挑：有 UPSTASH_REDIS_REST_URL 就用 Upstash，
 * 否則退回 in-memory（並在 production 印一行警告）。
 */

export interface RateLimitHit {
  count: number;
  /** Epoch ms — window 何時重置 */
  resetTime: number;
}

export interface RateLimitStore {
  /**
   * 對指定 key 做一次計數遞增。第一次呼叫應同時設定 TTL。
   * 回傳遞增後的 count 與該 window 的 resetTime。
   */
  hit(key: string, windowSeconds: number): Promise<RateLimitHit>;
}

// ─── In-memory store ───

interface InMemoryEntry {
  count: number;
  resetTime: number;
}

const CLEANUP_INTERVAL_MS = 5 * 60 * 1000;

export class InMemoryRateLimitStore implements RateLimitStore {
  private map = new Map<string, InMemoryEntry>();
  private lastCleanup = Date.now();

  private cleanup(): void {
    const now = Date.now();
    if (now - this.lastCleanup < CLEANUP_INTERVAL_MS) return;
    this.lastCleanup = now;
    for (const [k, v] of this.map) {
      if (now > v.resetTime) this.map.delete(k);
    }
  }

  async hit(key: string, windowSeconds: number): Promise<RateLimitHit> {
    this.cleanup();
    const now = Date.now();
    const entry = this.map.get(key);

    if (!entry || now > entry.resetTime) {
      const fresh: InMemoryEntry = { count: 1, resetTime: now + windowSeconds * 1000 };
      this.map.set(key, fresh);
      return { count: 1, resetTime: fresh.resetTime };
    }

    entry.count += 1;
    return { count: entry.count, resetTime: entry.resetTime };
  }

  /** Test-only — reset entire store. */
  _reset(): void {
    this.map.clear();
    this.lastCleanup = Date.now();
  }
}

// ─── Upstash REST store ───

interface UpstashConfig {
  url: string;
  token: string;
}

/**
 * Upstash REST 客戶端，用 pipeline 一次送出 INCR + EXPIRE(NX) + PTTL。
 *
 * 為什麼是 PTTL 不是 TTL：我們希望算 resetTime 時用 ms 級精度，避免每秒邊界
 * 跳動造成 race condition。EXPIRE 的 NX flag 保證只有第一次設定 TTL，
 * 後續同一個 window 內 INCR 不會 reset TTL。
 */
export class UpstashRateLimitStore implements RateLimitStore {
  constructor(private readonly config: UpstashConfig) {}

  async hit(key: string, windowSeconds: number): Promise<RateLimitHit> {
    const response = await fetch(`${this.config.url}/pipeline`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${this.config.token}`,
        'Content-Type': 'application/json',
      },
      // Cache off — 計數必須即時
      cache: 'no-store',
      body: JSON.stringify([
        ['INCR', key],
        ['EXPIRE', key, String(windowSeconds), 'NX'],
        ['PTTL', key],
      ]),
    });

    if (!response.ok) {
      throw new Error(`Upstash REST error: ${response.status} ${response.statusText}`);
    }

    // pipeline 回傳格式：[{ result: 1 }, { result: 1 }, { result: 59000 }]
    const body = (await response.json()) as Array<{ result?: number; error?: string }>;
    if (!Array.isArray(body) || body.length < 3) {
      throw new Error('Upstash REST returned malformed pipeline response');
    }

    const incrResult = body[0]?.result;
    const pttlResult = body[2]?.result;

    if (typeof incrResult !== 'number') {
      throw new Error('Upstash INCR did not return a number');
    }

    // PTTL 可能是 -1（key 沒 TTL）或 -2（key 不存在），都當作 fallback
    const ttlMs = typeof pttlResult === 'number' && pttlResult > 0
      ? pttlResult
      : windowSeconds * 1000;

    return {
      count: incrResult,
      resetTime: Date.now() + ttlMs,
    };
  }
}

// ─── Factory ───

let singleton: RateLimitStore | null = null;

/**
 * 依環境變數挑選 store：
 * - `UPSTASH_REDIS_REST_URL` + `UPSTASH_REDIS_REST_TOKEN` 都有 → Upstash
 * - 否則 → in-memory
 *
 * 為了 testability，傳入 `force` 可強制換掉 singleton。
 */
export function getRateLimitStore(force?: RateLimitStore): RateLimitStore {
  if (force) {
    singleton = force;
    return singleton;
  }
  if (singleton) return singleton;

  const url = process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.UPSTASH_REDIS_REST_TOKEN;

  if (url && token) {
    singleton = new UpstashRateLimitStore({ url, token });
  } else {
    if (process.env.NODE_ENV === 'production') {
      // 上線環境如果沒設 Upstash，rate-limit 在 multi-instance 不會生效。
      // 印一行警告但不擋啟動（單 instance/edge 仍有效）。
      console.warn(
        '[rate-limit] UPSTASH_REDIS_REST_URL/TOKEN 未設定，退回 in-memory store；' +
          'Vercel multi-instance 不共享計數'
      );
    }
    singleton = new InMemoryRateLimitStore();
  }

  return singleton;
}

/** Test-only — 重設 singleton，下次 getRateLimitStore 會重新挑 store。 */
export function _resetRateLimitStore(): void {
  singleton = null;
}
