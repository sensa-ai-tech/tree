// @vitest-environment node
import { NextRequest } from 'next/server';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

/**
 * CSP report endpoint 用 module-scope Map 做 per-IP rate limit。
 * 每個 test 都 vi.resetModules() 確保拿到新的 Map。
 */

const originalEnv = { ...process.env };

function makeReport(ip: string, payload: unknown): NextRequest {
  return new NextRequest(new URL('http://localhost/api/csp-report'), {
    method: 'POST',
    headers: {
      'x-real-ip': ip,
      'Content-Type': 'application/csp-report',
    },
    body: JSON.stringify(payload),
  });
}

describe('POST /api/csp-report', () => {
  beforeEach(() => {
    vi.resetModules();
  });
  afterEach(() => {
    process.env = { ...originalEnv };
    vi.resetModules();
    vi.restoreAllMocks();
  });

  it('returns 204 on valid CSP report', async () => {
    const { POST } = await import('@/app/api/csp-report/route');
    // 抑制 console.warn 在測試輸出裡刷屏
    vi.spyOn(console, 'warn').mockImplementation(() => {});

    const res = await POST(
      makeReport('203.0.113.1', {
        'csp-report': {
          'document-uri': 'https://example.com/page',
          'violated-directive': 'script-src',
          'blocked-uri': 'inline',
          'source-file': 'https://example.com/page',
          'line-number': 42,
        },
      })
    );
    expect(res.status).toBe(204);
  });

  it('accepts both wrapped and unwrapped report shapes', async () => {
    const { POST } = await import('@/app/api/csp-report/route');
    vi.spyOn(console, 'warn').mockImplementation(() => {});

    // unwrapped form
    const res = await POST(
      makeReport('203.0.113.2', {
        'document-uri': 'https://example.com',
        'violated-directive': 'img-src',
      })
    );
    expect(res.status).toBe(204);
  });

  it('returns 400 on malformed JSON body', async () => {
    const { POST } = await import('@/app/api/csp-report/route');

    const req = new NextRequest(new URL('http://localhost/api/csp-report'), {
      method: 'POST',
      headers: { 'x-real-ip': '203.0.113.3' },
      body: 'not-json{{{',
    });
    const res = await POST(req);
    expect(res.status).toBe(400);
    const body = await res.json();
    expect(body.error).toBe('Invalid report');
  });

  it('returns 429 after 10 reports from same IP within window', async () => {
    const { POST } = await import('@/app/api/csp-report/route');
    vi.spyOn(console, 'warn').mockImplementation(() => {});

    const ip = '203.0.113.42';
    // 前 10 次應該都 204
    for (let i = 0; i < 10; i++) {
      const res = await POST(
        makeReport(ip, { 'csp-report': { 'violated-directive': `t${i}` } })
      );
      expect(res.status).toBe(204);
    }

    // 第 11 次應該被擋
    const blocked = await POST(
      makeReport(ip, { 'csp-report': { 'violated-directive': 'overflow' } })
    );
    expect(blocked.status).toBe(429);
  });

  it('does NOT block when same IP fires after window expires', async () => {
    vi.useFakeTimers();
    vi.setSystemTime(new Date('2026-05-20T00:00:00Z'));
    const { POST } = await import('@/app/api/csp-report/route');
    vi.spyOn(console, 'warn').mockImplementation(() => {});

    const ip = '203.0.113.50';
    for (let i = 0; i < 10; i++) {
      await POST(makeReport(ip, { 'csp-report': { v: i } }));
    }
    const blocked = await POST(
      makeReport(ip, { 'csp-report': { v: 'blocked' } })
    );
    expect(blocked.status).toBe(429);

    // 跳過 1 分鐘 window
    vi.setSystemTime(new Date('2026-05-20T00:01:30Z'));
    const allowed = await POST(
      makeReport(ip, { 'csp-report': { v: 'after-window' } })
    );
    expect(allowed.status).toBe(204);

    vi.useRealTimers();
  });

  it('keeps quotas separate per IP', async () => {
    const { POST } = await import('@/app/api/csp-report/route');
    vi.spyOn(console, 'warn').mockImplementation(() => {});

    // IP A fills the quota
    for (let i = 0; i < 10; i++) {
      await POST(makeReport('203.0.113.60', { 'csp-report': { v: i } }));
    }
    const blockedA = await POST(makeReport('203.0.113.60', { 'csp-report': { v: 11 } }));
    expect(blockedA.status).toBe(429);

    // IP B 應該不受影響
    const allowedB = await POST(makeReport('203.0.113.61', { 'csp-report': { v: 1 } }));
    expect(allowedB.status).toBe(204);
  });

  it('uses fallback IP when no headers present', async () => {
    const { POST } = await import('@/app/api/csp-report/route');
    vi.spyOn(console, 'warn').mockImplementation(() => {});

    const req = new NextRequest(new URL('http://localhost/api/csp-report'), {
      method: 'POST',
      body: JSON.stringify({ 'csp-report': { 'violated-directive': 'x' } }),
    });
    const res = await POST(req);
    expect(res.status).toBe(204);
  });
});
