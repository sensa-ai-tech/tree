import { http, HttpResponse } from 'msw';

/**
 * MSW handlers — 集中 mock 外部 HTTP API。
 *
 * 為什麼用 MSW 而不是 vi.doMock：
 * - 同一份 handler 可重用於 unit/integration/e2e test
 * - 攔 network 層而非模組層，更貼近 production 行為
 * - 不必每個 test 重複寫 mock 物件
 *
 * 用法：在 src/tests/msw/server.ts 啟動 server，在 setup.ts beforeAll 引入。
 * 個別 test 用 server.use(http.get(...)) 覆寫單次回應。
 */

// ─── Sentry envelope endpoint ───
export const sentryEnvelopeHandler = http.post(
  '*/api/*/envelope/',
  () => new HttpResponse(null, { status: 200 })
);

// ─── Upstash Redis REST pipeline ───
export const upstashPipelineHandler = http.post(
  '*/pipeline',
  async ({ request }) => {
    const body = (await request.json()) as unknown[];
    // 簡單模擬 INCR + EXPIRE NX + PTTL pipeline
    if (Array.isArray(body) && body.length === 3) {
      return HttpResponse.json([
        { result: 1 },        // INCR → 1
        { result: 1 },        // EXPIRE → 1
        { result: 60_000 },   // PTTL → 60s
      ]);
    }
    return new HttpResponse(null, { status: 400 });
  }
);

// ─── Supabase REST (knowledge_nodes minimal) ───
export const supabaseHandler = http.get(
  '*/rest/v1/knowledge_nodes',
  () => HttpResponse.json([{ id: 'IM-L3-001' }])
);

/**
 * 預設 handler 集 — 一般 test 用這組就夠。
 * 想自訂單次回應，在 test 內呼叫 `server.use(...)` 覆寫。
 */
export const defaultHandlers = [
  sentryEnvelopeHandler,
  upstashPipelineHandler,
  supabaseHandler,
];
