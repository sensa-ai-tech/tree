// @vitest-environment node
import { NextRequest } from 'next/server';
import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import { _resetRateLimitStore } from '@/lib/api/rate-limit-store';
import { GET, POST } from '@/app/api/progress/route';

function ip(): string {
  return `198.51.100.${Math.floor(Math.random() * 254) + 1}`;
}

function getReq(): NextRequest {
  return new NextRequest(new URL('http://localhost/api/progress'), {
    headers: { 'x-real-ip': ip() },
  });
}

function postReq(body: unknown): NextRequest {
  return new NextRequest(new URL('http://localhost/api/progress'), {
    method: 'POST',
    headers: { 'x-real-ip': ip(), 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });
}

describe('GET /api/progress', () => {
  beforeEach(() => {
    delete process.env.UPSTASH_REDIS_REST_URL;
    delete process.env.UPSTASH_REDIS_REST_TOKEN;
    _resetRateLimitStore();
  });
  afterEach(() => _resetRateLimitStore());

  it('returns 200 with empty data array (mock mode)', async () => {
    const res = await GET(getReq());
    expect(res.status).toBe(200);
    const body = await res.json();
    expect(body).toEqual({ data: [] });
  });
});

describe('POST /api/progress', () => {
  beforeEach(() => _resetRateLimitStore());
  afterEach(() => _resetRateLimitStore());

  it('accepts a valid in_progress payload and echoes back with timestamps', async () => {
    const res = await POST(
      postReq({ node_id: 'IM-L3-001', status: 'in_progress' })
    );
    expect(res.status).toBe(200);
    const body = await res.json();
    expect(body.data.node_id).toBe('IM-L3-001');
    expect(body.data.status).toBe('in_progress');
    expect(body.data.started_at).toBeTruthy();
    expect(body.data.completed_at).toBeNull();
    expect(body.data.user_id).toBe('mock_user');
  });

  it('sets completed_at when status is completed', async () => {
    const res = await POST(
      postReq({
        node_id: 'IM-L3-002',
        status: 'completed',
        score: 92,
        time_spent_minutes: 18,
      })
    );
    const body = await res.json();
    expect(body.data.completed_at).toBeTruthy();
    expect(body.data.started_at).toBeTruthy();
    expect(body.data.score).toBe(92);
    expect(body.data.time_spent_minutes).toBe(18);
  });

  it('leaves started_at and completed_at null for locked status', async () => {
    const res = await POST(postReq({ node_id: 'N', status: 'locked' }));
    const body = await res.json();
    expect(body.data.started_at).toBeNull();
    expect(body.data.completed_at).toBeNull();
  });

  it('leaves completed_at null but sets started_at for available status', async () => {
    const res = await POST(postReq({ node_id: 'N', status: 'available' }));
    const body = await res.json();
    expect(body.data.started_at).toBeNull();
    expect(body.data.completed_at).toBeNull();
  });

  it('returns 400 when node_id is missing', async () => {
    const res = await POST(postReq({ status: 'completed' }));
    expect(res.status).toBe(400);
    const body = await res.json();
    expect(body.error).toMatch(/node_id/);
  });

  it('returns 400 when status is missing', async () => {
    const res = await POST(postReq({ node_id: 'N' }));
    expect(res.status).toBe(400);
  });

  it('returns 400 on unknown status enum', async () => {
    const res = await POST(postReq({ node_id: 'N', status: 'frozen' }));
    expect(res.status).toBe(400);
    const body = await res.json();
    expect(body.error).toMatch(/Invalid status/);
    expect(body.error).toMatch(/locked|available|in_progress|completed/);
  });

  it('rejects score < 0 with 400', async () => {
    const res = await POST(
      postReq({ node_id: 'N', status: 'completed', score: -1 })
    );
    expect(res.status).toBe(400);
  });

  it('rejects score > 100 with 400', async () => {
    const res = await POST(
      postReq({ node_id: 'N', status: 'completed', score: 101 })
    );
    expect(res.status).toBe(400);
  });

  it('rejects non-numeric score with 400', async () => {
    const res = await POST(
      postReq({ node_id: 'N', status: 'completed', score: 'A+' as unknown as number })
    );
    expect(res.status).toBe(400);
  });

  it('accepts null score explicitly', async () => {
    const res = await POST(
      postReq({ node_id: 'N', status: 'completed', score: null })
    );
    expect(res.status).toBe(200);
    const body = await res.json();
    expect(body.data.score).toBeNull();
  });

  it('rejects negative time_spent_minutes with 400', async () => {
    const res = await POST(
      postReq({ node_id: 'N', status: 'completed', time_spent_minutes: -1 })
    );
    expect(res.status).toBe(400);
  });

  it('rejects non-numeric time_spent_minutes with 400', async () => {
    const res = await POST(
      postReq({ node_id: 'N', status: 'completed', time_spent_minutes: '5m' as unknown as number })
    );
    expect(res.status).toBe(400);
  });

  it('returns 500 with structured error on malformed JSON body', async () => {
    const req = new NextRequest(new URL('http://localhost/api/progress'), {
      method: 'POST',
      headers: { 'x-real-ip': ip() },
      body: '{{not-json',
    });
    const res = await POST(req);
    expect(res.status).toBe(500);
  });
});
