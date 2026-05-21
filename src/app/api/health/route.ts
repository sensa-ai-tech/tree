import { NextResponse } from 'next/server';
import { createServerClient } from '@/lib/supabase/server';

/**
 * Health check endpoint，給 uptime 監控與 Vercel deployment 自動偵測用。
 * GET /api/health 回傳整體狀態 + 子系統檢測。
 *
 * 200 = 全綠
 * 503 = 任一子系統 down（Supabase 連不到、env 缺失）
 */
export async function GET() {
  const startedAt = Date.now();
  const checks: Record<string, { ok: boolean; latencyMs?: number; reason?: string }> = {
    app: { ok: true },
    supabase: { ok: true },
    env: { ok: true },
  };

  // env 健康度
  const requiredEnv = ['VKT_JWT_SECRET'];
  const missing = requiredEnv.filter((k) => !process.env[k]);
  if (missing.length > 0) {
    // SEC-011 fix: do not expose env var names to unauthenticated callers
    checks.env = { ok: false, reason: 'required environment variables not configured' };
  }

  // Supabase 連線檢查（如果是 mock 模式則略過）
  const hasSupabase = !!process.env.NEXT_PUBLIC_SUPABASE_URL && !!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (hasSupabase) {
    const t0 = Date.now();
    try {
      const client = createServerClient();
      const { error } = await client.from('knowledge_nodes').select('id').limit(1);
      const latencyMs = Date.now() - t0;
      if (error) {
        checks.supabase = { ok: false, latencyMs, reason: error.message };
      } else {
        checks.supabase = { ok: true, latencyMs };
      }
    } catch (err) {
      checks.supabase = {
        ok: false,
        latencyMs: Date.now() - t0,
        reason: err instanceof Error ? err.message : 'unknown',
      };
    }
  } else {
    checks.supabase = { ok: true, reason: 'mock-mode' };
  }

  const allOk = Object.values(checks).every((c) => c.ok);
  const status = allOk ? 200 : 503;

  return NextResponse.json(
    {
      status: allOk ? 'ok' : 'degraded',
      timestamp: new Date().toISOString(),
      version: process.env.npm_package_version ?? '0.1.0',
      uptimeMs: process.uptime ? Math.round(process.uptime() * 1000) : null,
      durationMs: Date.now() - startedAt,
      checks,
    },
    { status }
  );
}
