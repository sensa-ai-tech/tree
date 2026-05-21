import { setupServer } from 'msw/node';
import { defaultHandlers } from './handlers';

/**
 * Node test environment 用的 MSW server。
 *
 * 提供方式：個別 test 自行 import + setupServer.listen()，避免把全域 setup 弄亂。
 * 不放進 src/tests/setup.ts 是因為 jsdom 跟 node 環境並存時 fetch 行為不一，
 * 還是把 MSW 限縮在明確 import 的 test 比較安全。
 *
 * 用法：
 *
 *   import { server } from '@/tests/msw/server';
 *   import { http, HttpResponse } from 'msw';
 *
 *   beforeAll(() => server.listen({ onUnhandledRequest: 'bypass' }));
 *   afterEach(() => server.resetHandlers());
 *   afterAll(() => server.close());
 *
 *   // 個別 test 覆寫
 *   server.use(http.post('*\/api\/foo', () => HttpResponse.json({ ok: true })));
 */
export const server = setupServer(...defaultHandlers);
