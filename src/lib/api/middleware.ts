import { NextRequest, NextResponse } from 'next/server';

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
      return NextResponse.json(
        { error: 'Server misconfigured: ADMIN_API_KEY not set' },
        { status: 500 }
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
    if (token !== adminApiKey) {
      return NextResponse.json({ error: 'Invalid API key' }, { status: 403 });
    }

    return handler(request, context);
  };
}

// ─── Rate Limiting: In-memory sliding window ───

interface RateLimitEntry {
  count: number;
  resetTime: number;
}

const rateLimitMap = new Map<string, RateLimitEntry>();

const CLEANUP_INTERVAL_MS = 5 * 60 * 1000;
let lastCleanup = Date.now();

function cleanupStaleEntries(): void {
  const now = Date.now();
  if (now - lastCleanup < CLEANUP_INTERVAL_MS) return;
  lastCleanup = now;
  for (const [key, entry] of rateLimitMap) {
    if (now > entry.resetTime) {
      rateLimitMap.delete(key);
    }
  }
}

interface RateLimitOptions {
  /** 每個時間窗口最大請求數（預設 30） */
  maxRequests?: number;
  /** 時間窗口秒數（預設 60） */
  windowSeconds?: number;
}

/**
 * IP-based rate limiting（in-memory sliding window）。
 * 適用於 demo/VPS 部署，高流量環境應改用 Redis。
 */
export function withRateLimit(
  handler: RouteHandler,
  options: RateLimitOptions = {}
): RouteHandler {
  const { maxRequests = 30, windowSeconds = 60 } = options;

  return async (request, context) => {
    cleanupStaleEntries();

    const ip =
      request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ??
      request.headers.get('x-real-ip') ??
      'unknown';
    const key = `${ip}:${request.nextUrl.pathname}`;
    const now = Date.now();

    const entry = rateLimitMap.get(key);

    if (!entry || now > entry.resetTime) {
      rateLimitMap.set(key, { count: 1, resetTime: now + windowSeconds * 1000 });
      return handler(request, context);
    }

    if (entry.count >= maxRequests) {
      const retryAfter = Math.ceil((entry.resetTime - now) / 1000);
      return NextResponse.json(
        { error: 'Too many requests' },
        {
          status: 429,
          headers: { 'Retry-After': String(retryAfter) },
        }
      );
    }

    entry.count += 1;
    return handler(request, context);
  };
}
