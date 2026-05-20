// @vitest-environment node
import { NextRequest } from 'next/server';
import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import { _resetRateLimitStore } from '@/lib/api/rate-limit-store';
import { GET as casesListGET } from '@/app/api/cases/route';
import { GET as caseDetailGET, POST as caseSubmitPOST } from '@/app/api/cases/[caseId]/route';
import type { CaseStepResult } from '@/types/case';

function ip(): string {
  return `198.51.100.${Math.floor(Math.random() * 254) + 1}`;
}

describe('GET /api/cases (list)', () => {
  beforeEach(() => {
    delete process.env.UPSTASH_REDIS_REST_URL;
    delete process.env.UPSTASH_REDIS_REST_TOKEN;
    _resetRateLimitStore();
  });
  afterEach(() => _resetRateLimitStore());

  it('returns 200 with empty data (mock mode)', async () => {
    const res = await casesListGET(
      new NextRequest(new URL('http://localhost/api/cases'), { headers: { 'x-real-ip': ip() } })
    );
    expect(res.status).toBe(200);
    const body = await res.json();
    expect(body.data).toEqual([]);
  });

  it('accepts specialty + difficulty params', async () => {
    const res = await casesListGET(
      new NextRequest(new URL('http://localhost/api/cases?specialty=IM&difficulty=3'), {
        headers: { 'x-real-ip': ip() },
      })
    );
    expect(res.status).toBe(200);
  });

  it('rejects difficulty < 1 with 400', async () => {
    const res = await casesListGET(
      new NextRequest(new URL('http://localhost/api/cases?difficulty=0'), {
        headers: { 'x-real-ip': ip() },
      })
    );
    expect(res.status).toBe(400);
    const body = await res.json();
    expect(body.error).toMatch(/difficulty/);
  });

  it('rejects difficulty > 5 with 400', async () => {
    const res = await casesListGET(
      new NextRequest(new URL('http://localhost/api/cases?difficulty=6'), {
        headers: { 'x-real-ip': ip() },
      })
    );
    expect(res.status).toBe(400);
  });

  it('rejects non-numeric difficulty with 400', async () => {
    const res = await casesListGET(
      new NextRequest(new URL('http://localhost/api/cases?difficulty=hard'), {
        headers: { 'x-real-ip': ip() },
      })
    );
    expect(res.status).toBe(400);
  });
});

describe('GET /api/cases/[caseId]', () => {
  beforeEach(() => _resetRateLimitStore());
  afterEach(() => _resetRateLimitStore());

  async function callDetail(caseId: string) {
    return caseDetailGET(
      new NextRequest(new URL(`http://localhost/api/cases/${caseId}`), {
        headers: { 'x-real-ip': ip() },
      }),
      { params: Promise.resolve({ caseId }) }
    );
  }

  it('returns 404 for unknown case (mock mode)', async () => {
    const res = await callDetail('CASE-XYZ');
    expect(res.status).toBe(404);
    const body = await res.json();
    expect(body.data).toBeNull();
    expect(body.error).toBe('Case not found');
  });

  it('returns 400 for empty caseId', async () => {
    const res = await callDetail('   ');
    expect(res.status).toBe(400);
  });
});

describe('POST /api/cases/[caseId] (submit)', () => {
  beforeEach(() => _resetRateLimitStore());
  afterEach(() => _resetRateLimitStore());

  let nextStep = 0;
  function makeStepResult(score: number, correct: boolean): CaseStepResult {
    nextStep += 1;
    return {
      step_number: nextStep,
      selected_actions: ['A'],
      is_correct: correct,
      score,
      time_spent_seconds: 30,
    };
  }

  async function callSubmit(caseId: string, body: unknown) {
    return caseSubmitPOST(
      new NextRequest(new URL(`http://localhost/api/cases/${caseId}`), {
        method: 'POST',
        headers: { 'x-real-ip': ip(), 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      }),
      { params: Promise.resolve({ caseId }) }
    );
  }

  it('calculates total_score, max_score, and accuracy correctly', async () => {
    const res = await callSubmit('CASE-1', {
      step_results: [
        makeStepResult(80, true),
        makeStepResult(70, true),
        makeStepResult(40, false),
      ],
      total_time_seconds: 300,
    });
    expect(res.status).toBe(200);
    const body = await res.json();
    expect(body.data.case_id).toBe('CASE-1');
    expect(body.data.total_score).toBe(190);
    expect(body.data.max_score).toBe(300);
    expect(body.data.accuracy).toBeCloseTo(2 / 3, 5);
    expect(body.data.total_time_seconds).toBe(300);
    expect(body.data.completed_at).toBeTruthy();
  });

  it('returns accuracy=1 when all steps correct', async () => {
    const res = await callSubmit('CASE-2', {
      step_results: [makeStepResult(100, true), makeStepResult(100, true)],
      total_time_seconds: 60,
    });
    const body = await res.json();
    expect(body.data.accuracy).toBe(1);
  });

  it('returns accuracy=0 when all steps wrong', async () => {
    const res = await callSubmit('CASE-3', {
      step_results: [makeStepResult(0, false), makeStepResult(0, false)],
      total_time_seconds: 60,
    });
    const body = await res.json();
    expect(body.data.accuracy).toBe(0);
  });

  it('rejects empty step_results with 400', async () => {
    const res = await callSubmit('CASE-4', {
      step_results: [],
      total_time_seconds: 60,
    });
    expect(res.status).toBe(400);
  });

  it('rejects missing step_results with 400', async () => {
    const res = await callSubmit('CASE-5', { total_time_seconds: 60 });
    expect(res.status).toBe(400);
  });

  it('rejects negative total_time_seconds with 400', async () => {
    const res = await callSubmit('CASE-6', {
      step_results: [makeStepResult(80, true)],
      total_time_seconds: -5,
    });
    expect(res.status).toBe(400);
  });

  it('rejects non-number total_time_seconds with 400', async () => {
    const res = await callSubmit('CASE-7', {
      step_results: [makeStepResult(80, true)],
      total_time_seconds: 'fast' as unknown as number,
    });
    expect(res.status).toBe(400);
  });

  it('rejects empty caseId with 400', async () => {
    const res = await callSubmit('   ', {
      step_results: [makeStepResult(80, true)],
      total_time_seconds: 60,
    });
    expect(res.status).toBe(400);
  });
});
