// @vitest-environment node
import { NextRequest } from 'next/server';
import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import { _resetRateLimitStore } from '@/lib/api/rate-limit-store';

// Import the route handlers — these are wrapped by withRateLimit so they're
// just plain async (NextRequest) => Promise<NextResponse>
import { GET as nodesListGET } from '@/app/api/nodes/route';
import { GET as nodeDetailGET } from '@/app/api/nodes/[nodeId]/route';

function makeRequest(url: string): NextRequest {
  return new NextRequest(new URL(url), {
    headers: { 'x-real-ip': `203.0.113.${Math.floor(Math.random() * 254) + 1}` },
  });
}

describe('GET /api/nodes (list)', () => {
  beforeEach(() => {
    delete process.env.UPSTASH_REDIS_REST_URL;
    delete process.env.UPSTASH_REDIS_REST_TOKEN;
    _resetRateLimitStore();
  });

  afterEach(() => _resetRateLimitStore());

  it('returns 200 with paginated shape (mock mode)', async () => {
    const res = await nodesListGET(makeRequest('http://localhost/api/nodes'));
    expect(res.status).toBe(200);
    const body = await res.json();
    expect(body).toMatchObject({
      data: expect.any(Array),
      pagination: {
        page: 1,
        limit: 20,
        total: 0,
        totalPages: 0,
      },
    });
  });

  it('honours page and limit query params', async () => {
    const res = await nodesListGET(makeRequest('http://localhost/api/nodes?page=3&limit=10'));
    expect(res.status).toBe(200);
    const body = await res.json();
    expect(body.pagination.page).toBe(3);
    expect(body.pagination.limit).toBe(10);
  });

  it('caps limit at 100 (sanity guard)', async () => {
    const res = await nodesListGET(makeRequest('http://localhost/api/nodes?limit=9999'));
    const body = await res.json();
    expect(body.pagination.limit).toBe(100);
  });

  it('clamps page to 1 minimum', async () => {
    const res = await nodesListGET(makeRequest('http://localhost/api/nodes?page=-5'));
    const body = await res.json();
    expect(body.pagination.page).toBe(1);
  });

  it('rejects layer < 0 or > 5 with 400', async () => {
    const r1 = await nodesListGET(makeRequest('http://localhost/api/nodes?layer=-1'));
    expect(r1.status).toBe(400);
    const r2 = await nodesListGET(makeRequest('http://localhost/api/nodes?layer=99'));
    expect(r2.status).toBe(400);
  });

  it('rejects non-numeric layer with 400', async () => {
    const res = await nodesListGET(makeRequest('http://localhost/api/nodes?layer=abc'));
    expect(res.status).toBe(400);
    const body = await res.json();
    expect(body.error).toMatch(/layer/);
  });

  it('accepts valid layer values 0..5', async () => {
    for (const layer of [0, 1, 2, 3, 4, 5]) {
      const res = await nodesListGET(
        makeRequest(`http://localhost/api/nodes?layer=${layer}`)
      );
      expect(res.status).toBe(200);
    }
  });

  it('rejects unknown node type with 400 and lists allowed values', async () => {
    const res = await nodesListGET(makeRequest('http://localhost/api/nodes?type=invalid'));
    expect(res.status).toBe(400);
    const body = await res.json();
    expect(body.error).toMatch(/concept/);
    expect(body.error).toMatch(/disease/);
  });

  it('accepts valid node type', async () => {
    const res = await nodesListGET(makeRequest('http://localhost/api/nodes?type=disease'));
    expect(res.status).toBe(200);
  });

  it('rejects unknown status with 400', async () => {
    const res = await nodesListGET(makeRequest('http://localhost/api/nodes?status=foo'));
    expect(res.status).toBe(400);
  });

  it('accepts valid status', async () => {
    const res = await nodesListGET(makeRequest('http://localhost/api/nodes?status=published'));
    expect(res.status).toBe(200);
  });
});

describe('GET /api/nodes/[nodeId]', () => {
  beforeEach(() => _resetRateLimitStore());
  afterEach(() => _resetRateLimitStore());

  async function callDetail(nodeId: string) {
    return nodeDetailGET(
      new NextRequest(new URL(`http://localhost/api/nodes/${nodeId}`), {
        headers: { 'x-real-ip': '203.0.113.99' },
      }),
      { params: Promise.resolve({ nodeId }) }
    );
  }

  it('returns 404 with structured error for unknown node in mock mode', async () => {
    const res = await callDetail('IM-L3-999');
    expect(res.status).toBe(404);
    const body = await res.json();
    expect(body.data).toBeNull();
    expect(body.error).toBe('Node not found');
  });

  it('returns 400 when nodeId is empty/whitespace', async () => {
    const res = await callDetail('   ');
    expect(res.status).toBe(400);
    const body = await res.json();
    expect(body.error).toMatch(/required/i);
  });
});
