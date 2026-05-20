/**
 * Error reporter — DSN-gated 錯誤上報。
 *
 * 設計：
 * - 沒 SENTRY_DSN 時 fallback 到 console.error（dev/preview 預設）
 * - 有 SENTRY_DSN 時用 Sentry Envelope HTTP API 上報（不引入 @sentry/nextjs 套件）
 *
 * 為什麼不直接 `npm install @sentry/nextjs`：
 * - 套件 30MB+，且要求設定 instrumentation hook 全套
 * - 目前需求只是有個能上報的洞，未來可以一行替換成 official SDK
 * - HTTP API 本身穩定，文件齊全
 *
 * 上線前 checklist：
 * - [ ] 設定 NEXT_PUBLIC_SENTRY_DSN（browser）+ SENTRY_DSN（server）
 * - [ ] 確認 DSN 與 release tag 對應
 * - [ ] 如果規模到要 source map、performance trace、replay，再升級到 @sentry/nextjs
 */

export interface ErrorContext {
  /** 用來分類事件，例如 'route:/api/admin/login'、'component:KnowledgeGraph' */
  scope?: string;
  /** 額外結構化資訊。值會 JSON.stringify，注意不要塞 secret */
  tags?: Record<string, string | number | boolean>;
  /** 使用者識別碼（hash 過）。不可塞 email、name 等 PII */
  userId?: string;
}

interface SentryDsn {
  protocol: string;
  publicKey: string;
  host: string;
  projectId: string;
}

/**
 * 解析 Sentry DSN：`https://<key>@<host>/<projectId>`
 * 回 null 代表 DSN 格式無效（例如手誤、空字串）。
 */
function parseDsn(dsn: string): SentryDsn | null {
  try {
    const url = new URL(dsn);
    const projectId = url.pathname.replace(/^\//, '');
    if (!url.username || !projectId) return null;
    return {
      protocol: url.protocol.replace(':', ''),
      publicKey: url.username,
      host: url.host,
      projectId,
    };
  } catch {
    return null;
  }
}

function getEnv(): { dsn: string | undefined; release: string | undefined; environment: string } {
  return {
    dsn: process.env.SENTRY_DSN ?? process.env.NEXT_PUBLIC_SENTRY_DSN,
    release: process.env.SENTRY_RELEASE ?? process.env.NEXT_PUBLIC_SENTRY_RELEASE,
    environment: process.env.NODE_ENV ?? 'development',
  };
}

interface SentryEvent {
  event_id: string;
  timestamp: number;
  platform: 'javascript' | 'node';
  level: 'error' | 'fatal';
  environment: string;
  release?: string;
  exception: {
    values: Array<{
      type: string;
      value: string;
      stacktrace?: { frames: Array<{ filename?: string; function?: string; lineno?: number; colno?: number }> };
    }>;
  };
  tags?: Record<string, string>;
  user?: { id: string };
  transaction?: string;
}

function buildEvent(error: unknown, context: ErrorContext, env: ReturnType<typeof getEnv>): SentryEvent {
  const err = error instanceof Error ? error : new Error(String(error));
  const eventId = crypto.randomUUID().replace(/-/g, '');

  // 把 tags 全部轉成字串（Sentry 要求 string 值）
  const tags: Record<string, string> = {};
  if (context.tags) {
    for (const [k, v] of Object.entries(context.tags)) {
      tags[k] = String(v);
    }
  }

  return {
    event_id: eventId,
    timestamp: Math.floor(Date.now() / 1000),
    platform: typeof window === 'undefined' ? 'node' : 'javascript',
    level: 'error',
    environment: env.environment,
    ...(env.release && { release: env.release }),
    exception: {
      values: [
        {
          type: err.name || 'Error',
          value: err.message,
          ...(err.stack && { stacktrace: { frames: [] } }),
        },
      ],
    },
    ...(Object.keys(tags).length > 0 && { tags }),
    ...(context.userId && { user: { id: context.userId } }),
    ...(context.scope && { transaction: context.scope }),
  };
}

/**
 * 用 Sentry Envelope API 送一個 event。任何錯誤 swallow，
 * 不能讓 error reporter 自己 throw 把呼叫端搞掛。
 */
async function sendToSentry(error: unknown, context: ErrorContext, dsnString: string): Promise<void> {
  const dsn = parseDsn(dsnString);
  if (!dsn) return;

  const env = getEnv();
  const event = buildEvent(error, context, env);

  const envelopeUrl = `${dsn.protocol}://${dsn.host}/api/${dsn.projectId}/envelope/`;
  const auth = [
    `Sentry sentry_version=7`,
    `sentry_client=vet-knowledge-tree/0.6.1`,
    `sentry_key=${dsn.publicKey}`,
  ].join(', ');

  const envelopeHeader = JSON.stringify({
    event_id: event.event_id,
    sent_at: new Date().toISOString(),
    dsn: dsnString,
  });
  const itemHeader = JSON.stringify({ type: 'event' });
  const body = `${envelopeHeader}\n${itemHeader}\n${JSON.stringify(event)}\n`;

  try {
    await fetch(envelopeUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-sentry-envelope',
        'X-Sentry-Auth': auth,
      },
      body,
      // 不阻塞主流程，但仍要 await 以確認失敗時印出來
      cache: 'no-store',
    });
  } catch (err) {
    console.error('[error-reporter] Failed to send to Sentry:', err);
  }
}

/**
 * 上報錯誤。沒設 DSN 就 fallback console.error。
 *
 * 用法：
 *   try { ... } catch (err) {
 *     reportError(err, { scope: 'route:/api/admin/login', tags: { status: 500 } });
 *   }
 *
 * 注意 — 這個函式回 void（fire and forget）。Sentry 的網路請求是 best-effort，
 * 失敗會走 console.error 補一行，不會阻塞主流程也不會 throw。
 */
export function reportError(error: unknown, context: ErrorContext = {}): void {
  const env = getEnv();
  // 永遠先印一行 console.error 給本地觀察，再嘗試送 Sentry
  // 帶上 scope 方便日後 grep
  const prefix = context.scope ? `[${context.scope}]` : '[error]';
  console.error(prefix, error);

  if (env.dsn) {
    // fire-and-forget — 不能 await，否則 React useEffect / route handler 會被卡住
    void sendToSentry(error, context, env.dsn);
  }
}

/** Test-only — 確認 DSN 解析邏輯正確。 */
export const _internal = { parseDsn, buildEvent };
