import { NextRequest, NextResponse } from 'next/server';
import { timingSafeEqual } from 'crypto';
import { getRateLimitStore } from './rate-limit-store';

// ─── Types ───

type RouteHandler = (
  request: NextRequest,
  context?: { params: Promise<Record<string, string>> }
) => Promise<NextResponse>;

// ─── Auth: API Key Check ───

/**
 * 要求 Authorization: Bearer {ADMIN_API_KEY} 才能存取。
 * 用於 /api/generate/* 等管理員專用路由。
 */
export function withAuth(handler: RouteHandler): RouteHandler {
  return async (request, context) => {
    const adminApiKey = process.env.ADMIN_API_KEY;
    if (!adminApiKey) {
      console.error('[withAuth] ADMIN_API_KEY environment variable is not set');
      return NextResponse.json(
        { error: 'Service temporarily unavailable' },
        { status: 503 }
      );
    }

    const authHeader = request.headers.get('authorization');
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return NextResponse.json(
        { error: 'Missing or invalid Authorization header' },
        { status: 401 }
      );
    }

    const token = authHeader.slice(7);
    // SEC-001 fix: timing-safe comparison to prevent key brute-force via timing
    const tokenBuf = Buffer.from(token);
    const keyBuf = Buffer.from(adminApiKey);
    if (tokenBuf.length !== keyBuf.length || !timingSafeEqual(tokenBuf, keyBuf)) {
      return NextResponse.json({ error: 'Invalid API key' }, { status: 403 });
    }

    return handler(request, context);
  };
}

// ─── Rate Limiting ───

interface RateLimitOptions {
  /** 每個時間窗口最大請求數（預設 30） */
  maxRequests?: number;
  /** 時間窗口秒數（預設 60） */
  windowSeconds?: number;
}

/**
 * 從請求 headers 推算來源 IP。
 *
 * 部署在 Vercel 時，proxy 會把真實 client IP 寫進 x-forwarded-for 的左側第一個位置，
 * 並同步寫進 x-real-ip。我們優先讀 x-real-ip（單一值，不可堆疊），
 * 退而求其次取 x-forwarded-for 的最左值。
 *
 * ⚠️ 安全提醒：在非 Vercel 部署（自架 reverse proxy）時，務必確認 proxy
 * 會「覆寫」這兩個 header 而非「追加」。否則 client 可任意偽造繞過 rate limit。
 */
function extractClientIp(request: NextRequest): string {
  const realIp = request.headers.get('x-real-ip');
  if (realIp && realIp.length < 64) return realIp;

  const forwardedFor = request.headers.get('x-forwarded-for');
  if (forwardedFor) {
    const first = forwardedFor.split(',')[0]?.trim();
    if (first && first.length < 64) return first;
  }
  return 'unknown';
}

/**
 * IP-based rate limiting。
 *
 * Store 由 `getRateLimitStore()` 決定：
 * - 有 UPSTASH_REDIS_REST_URL/TOKEN → Upstash REST（多 instance 共享）
 * - 否則退回 in-memory（單 instance 有效，serverless cold start 會 reset）
 *
 * 為了避免 store 失靈整個 endpoint 掛掉，store 拋例外時 fail-open（放行請求），
 * 並把錯誤印到 stderr 給監控撈。
 */
export function withRateLimit(
  handler: RouteHandler,
  options: RateLimitOptions = {}
): RouteHandler {
  const { maxRequests = 30, windowSeconds = 60 } = options;

  return async (request, context) => {
    const ip = extractClientIp(request);
    const key = `ratelimit:${ip}:${request.nextUrl.pathname}`;

    let count: number;
    let resetTime: number;
    try {
      const hit = await getRateLimitStore().hit(key, windowSeconds);
      count = hit.count;
      resetTime = hit.resetTime;
    } catch (err) {
      console.error('[rate-limit] store hit failed, fail-open:', err);
      return handler(request, context);
    }

    if (count > maxRequests) {
      const retryAfter = Math.max(1, Math.ceil((resetTime - Date.now()) / 1000));
      return NextResponse.json(
        { error: 'Too many requests' },
        {
          status: 429,
          headers: {
            'Retry-After': String(retryAfter),
            'X-RateLimit-Limit': String(maxRequests),
            'X-RateLimit-Remaining': '0',
            'X-RateLimit-Reset': String(Math.ceil(resetTime / 1000)),
          },
        }
      );
    }

    return handler(request, context);
  };
}
