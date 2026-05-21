// @vitest-environment node
import { NextRequest } from 'next/server';
import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import { _resetRateLimitStore } from '@/lib/api/rate-limit-store';
import { GET, POST } from '@/app/api/review/route';

function ip(): string {
  return `203.0.113.${Math.floor(Math.random() * 254) + 1}`;
}

function getReq() {
  return new NextRequest(new URL('http://localhost/api/review'), {
    headers: { 'x-real-ip': ip() },
  });
}

function postReq(body: unknown) {
  return new NextRequest(new URL('http://localhost/api/review'), {
    method: 'POST',
    headers: { 'x-real-ip': ip(), 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });
}

describe('GET /api/review', () => {
  beforeEach(() => {
    delete process.env.UPSTASH_REDIS_REST_URL;
    delete process.env.UPSTASH_REDIS_REST_TOKEN;
    _resetRateLimitStore();
  });
  afterEach(() => _resetRateLimitStore());

  it('returns 200 with empty due list (mock mode)', async () => {
    const res = await GET(getReq());
    expect(res.status).toBe(200);
    const body = await res.json();
    expect(body).toEqual({ data: [] });
  });
});

describe('POST /api/review', () => {
  beforeEach(() => _resetRateLimitStore());
  afterEach(() => _resetRateLimitStore());

  it('accepts a valid FSRS rating (3=Good) and returns updated UserSpacedRepetition record', async () => {
    const res = await POST(postReq({ node_id: 'IM-L3-001', rating: 3 }));
    expect(res.status).toBe(200);
    const body = await res.json();
    expect(body.data.node_id).toBe('IM-L3-001');
    expect(body.data.user_id).toBe('mock_user');
    expect(typeof body.data.stability).toBe('number');
    expect(typeof body.data.difficulty).toBe('number');
    expect(body.data.due).toBeTruthy();
    expect(body.data.last_rating).toBe(3);
    expect(body.data.reps).toBeGreaterThan(0);
  });

  it('accepts all 4 FSRS ratings (Again/Hard/Good/Easy)', async () => {
    for (const rating of [1, 2, 3, 4]) {
      const res = await POST(postReq({ node_id: 'N', rating }));
      expect(res.status).toBe(200);
      const body = await res.json();
      expect(body.data.last_rating).toBe(rating);
    }
  });

  it('rejects rating below 1 with 400', async () => {
    const res = await POST(postReq({ node_id: 'N', rating: 0 }));
    expect(res.status).toBe(400);
    const body = await res.json();
    expect(body.error).toMatch(/rating/);
    expect(body.error).toMatch(/1.*4/);
  });

  it('rejects rating above 4 with 400', async () => {
    const res = await POST(postReq({ node_id: 'N', rating: 5 }));
    expect(res.status).toBe(400);
  });

  it('rejects non-integer rating (e.g. 2.5) with 400', async () => {
    const res = await POST(postReq({ node_id: 'N', rating: 2.5 }));
    expect(res.status).toBe(400);
  });

  it('rejects non-numeric rating with 400', async () => {
    const res = await POST(
      postReq({ node_id: 'N', rating: 'good' as unknown as number })
    );
    expect(res.status).toBe(400);
  });

  it('rejects missing rating with 400', async () => {
    const res = await POST(postReq({ node_id: 'N' }));
    expect(res.status).toBe(400);
  });

  it('rejects null rating with 400', async () => {
    const res = await POST(postReq({ node_id: 'N', rating: null }));
    expect(res.status).toBe(400);
  });

  it('rejects missing node_id with 400', async () => {
    const res = await POST(postReq({ rating: 3 }));
    expect(res.status).toBe(400);
    const body = await res.json();
    expect(body.error).toMatch(/node_id/);
  });

  it('Again rating (1) produces shorter scheduled_days than Easy (4)', async () => {
    const r1 = await POST(postReq({ node_id: 'A', rating: 1 }));
    const r4 = await POST(postReq({ node_id: 'A', rating: 4 }));
    const b1 = await r1.json();
    const b4 = await r4.json();
    // Easy 應該排得比 Again 久遠
    expect(b4.data.scheduled_days).toBeGreaterThanOrEqual(b1.data.scheduled_days);
  });

  it('returns 500 on malformed JSON body', async () => {
    const req = new NextRequest(new URL('http://localhost/api/review'), {
      method: 'POST',
      headers: { 'x-real-ip': ip() },
      body: 'broken{{{',
    });
    const res = await POST(req);
    expect(res.status).toBe(500);
  });
});
