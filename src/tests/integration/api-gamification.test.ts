// @vitest-environment node
import { NextRequest } from 'next/server';
import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import { _resetRateLimitStore } from '@/lib/api/rate-limit-store';
import { GET, POST } from '@/app/api/gamification/route';

function ip(): string {
  return `192.0.2.${Math.floor(Math.random() * 254) + 1}`;
}

function getReq() {
  return new NextRequest(new URL('http://localhost/api/gamification'), {
    headers: { 'x-real-ip': ip() },
  });
}

function postReq(body: unknown) {
  return new NextRequest(new URL('http://localhost/api/gamification'), {
    method: 'POST',
    headers: { 'x-real-ip': ip(), 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });
}

describe('GET /api/gamification', () => {
  beforeEach(() => {
    delete process.env.UPSTASH_REDIS_REST_URL;
    delete process.env.UPSTASH_REDIS_REST_TOKEN;
    _resetRateLimitStore();
  });
  afterEach(() => _resetRateLimitStore());

  it('returns 200 with default gamification shape (mock mode)', async () => {
    const res = await GET(getReq());
    expect(res.status).toBe(200);
    const body = await res.json();
    expect(body.data.experience).toMatchObject({
      user_id: 'mock_user',
      total_xp: 0,
      current_level: 1,
      streak_days: 0,
      last_active_date: null,
      specialties_explored: [],
    });
    expect(body.data.achievements).toEqual([]);
    expect(body.data.recent_events).toEqual([]);
  });
});

describe('POST /api/gamification', () => {
  beforeEach(() => _resetRateLimitStore());
  afterEach(() => _resetRateLimitStore());

  it('records XP event and returns updated experience', async () => {
    const res = await POST(
      postReq({
        source: 'complete_node',
        amount: 80,
        description: '完成 IM-L3-001',
      })
    );
    expect(res.status).toBe(200);
    const body = await res.json();
    expect(body.data.event.source).toBe('complete_node');
    expect(body.data.event.amount).toBe(80);
    expect(body.data.event.timestamp).toMatch(/^\d{4}-\d{2}-\d{2}T/);
    expect(body.data.experience.total_xp).toBe(80);
    expect(body.data.experience.streak_days).toBe(1);
    expect(body.data.new_achievements).toEqual([]);
  });

  it('accepts all valid XP sources', async () => {
    const sources = [
      'complete_node',
      'pass_checkpoint',
      'daily_review',
      'case_challenge',
      'streak_bonus',
      'first_attempt_bonus',
      'speed_bonus',
      'exploration_bonus',
    ] as const;
    for (const source of sources) {
      const res = await POST(postReq({ source, amount: 10, description: 'test' }));
      expect(res.status).toBe(200);
    }
  });

  it('rejects unknown XP source with 400 listing valid sources', async () => {
    const res = await POST(
      postReq({ source: 'cheat_engine', amount: 10, description: 'x' })
    );
    expect(res.status).toBe(400);
    const body = await res.json();
    expect(body.error).toMatch(/Invalid source/);
    expect(body.error).toMatch(/complete_node/);
  });

  it('returns 400 when source is missing', async () => {
    const res = await POST(postReq({ amount: 50, description: 'x' }));
    expect(res.status).toBe(400);
    const body = await res.json();
    expect(body.error).toMatch(/source/);
  });

  it('returns 400 when description is missing', async () => {
    const res = await POST(postReq({ source: 'complete_node', amount: 50 }));
    expect(res.status).toBe(400);
  });

  it('rejects amount <= 0', async () => {
    const r0 = await POST(
      postReq({ source: 'complete_node', amount: 0, description: 'x' })
    );
    expect(r0.status).toBe(400);
    const rNeg = await POST(
      postReq({ source: 'complete_node', amount: -5, description: 'x' })
    );
    expect(rNeg.status).toBe(400);
  });

  it('rejects non-numeric amount', async () => {
    const res = await POST(
      postReq({
        source: 'complete_node',
        amount: '50' as unknown as number,
        description: 'x',
      })
    );
    expect(res.status).toBe(400);
  });

  it('returns 415 on missing content-type header (SEC-034)', async () => {
    const req = new NextRequest(new URL('http://localhost/api/gamification'), {
      method: 'POST',
      headers: { 'x-real-ip': ip() },
      body: '{garbage',
    });
    const res = await POST(req);
    expect(res.status).toBe(415);
  });

  it('returns 500 on malformed JSON body with correct content-type', async () => {
    const req = new NextRequest(new URL('http://localhost/api/gamification'), {
      method: 'POST',
      headers: { 'x-real-ip': ip(), 'content-type': 'application/json' },
      body: '{garbage',
    });
    const res = await POST(req);
    expect(res.status).toBe(500);
  });
});
