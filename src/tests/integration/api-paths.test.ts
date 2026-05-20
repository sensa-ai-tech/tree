// @vitest-environment node
import { NextRequest } from 'next/server';
import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import { _resetRateLimitStore } from '@/lib/api/rate-limit-store';
import { GET as pathsGET } from '@/app/api/paths/route';

function req(qs = ''): NextRequest {
  return new NextRequest(new URL(`http://localhost/api/paths${qs}`), {
    headers: { 'x-real-ip': `192.0.2.${Math.floor(Math.random() * 254) + 1}` },
  });
}

describe('GET /api/paths', () => {
  beforeEach(() => {
    delete process.env.UPSTASH_REDIS_REST_URL;
    delete process.env.UPSTASH_REDIS_REST_TOKEN;
    _resetRateLimitStore();
  });
  afterEach(() => _resetRateLimitStore());

  it('returns 200 with empty data array (mock mode)', async () => {
    const res = await pathsGET(req());
    expect(res.status).toBe(200);
    const body = await res.json();
    expect(body).toEqual({ data: [] });
  });

  it('accepts specialty query param without error', async () => {
    const res = await pathsGET(req('?specialty=IM'));
    expect(res.status).toBe(200);
  });

  it('ignores unknown query params gracefully', async () => {
    const res = await pathsGET(req('?foo=bar&baz=qux'));
    expect(res.status).toBe(200);
  });
});
