/* eslint-disable no-console */
/**
 * Open-Access Resource URL 體檢
 *
 * 對 `open-access-resources.ts` 每個 resource 的 url 做：
 *   - 連線存活（HTTP 狀態，跟隨重導向）
 *   - 內容相符（抓 <title>，與宣稱 title 做 token 重疊；揪「連結指向不相干論文」的捏造條目）
 *
 * 緣由：iter 1 發現 2 筆「ACVIM MUO 共識」的 PMC 連結實際指向 CBD 貼片 / 人類產科論文。
 *       光看連結會 200，要比對標題才抓得到。
 *
 * 執行：npx tsx --tsconfig tsconfig.json scripts/verify-resources.ts
 */

import { writeFileSync, mkdirSync } from 'node:fs';
import { resolve } from 'node:path';
import { OPEN_ACCESS_RESOURCES } from '@/data/seed/open-access-resources';

const UA = 'Mozilla/5.0 (vet-knowledge-tree resource-audit; mailto:ai@senbio.tech)';
const CONCURRENCY = 6;
const TIMEOUT_MS = 15000;
const TITLE_THRESHOLD = 0.3;

type Verdict = 'OK' | 'DEAD' | 'TITLE_MISMATCH' | 'BLOCKED' | 'ERROR';

const STOP = new Set(['the', 'and', 'for', 'with', 'from', 'dogs', 'cats', 'canine', 'feline', 'veterinary', '2023', '2024', '2022', '2021', '2020']);
function toks(s: string): string[] {
  return [...new Set(s.toLowerCase().replace(/[^a-z0-9\s]/g, ' ').split(/\s+/).filter((t) => t.length >= 4 && !STOP.has(t)))];
}
function overlap(claim: string, pageTitle: string): number {
  const ct = toks(claim);
  if (!ct.length) return 1;
  const pt = ` ${pageTitle.toLowerCase()} `;
  let hit = 0;
  for (const t of ct) if (pt.includes(t)) hit++;
  return hit / ct.length;
}

async function check(url: string, claimTitle: string): Promise<{ verdict: Verdict; status: number; finalUrl: string; pageTitle: string; score: number }> {
  const ctrl = new AbortController();
  const timer = setTimeout(() => ctrl.abort(), TIMEOUT_MS);
  try {
    const res = await fetch(url, { headers: { 'User-Agent': UA, Accept: 'text/html,*/*' }, redirect: 'follow', signal: ctrl.signal });
    const status = res.status;
    const finalUrl = res.url || url;
    if (status === 403 || status === 401 || status === 429) return { verdict: 'BLOCKED', status, finalUrl, pageTitle: '', score: 0 };
    if (status >= 400) return { verdict: 'DEAD', status, finalUrl, pageTitle: '', score: 0 };
    const html = await res.text();
    const m = html.match(/<title[^>]*>([\s\S]*?)<\/title>/i);
    const pageTitle = m ? m[1].replace(/\s+/g, ' ').trim().slice(0, 200) : '';
    if (!pageTitle) return { verdict: 'OK', status, finalUrl, pageTitle: '(no title)', score: 1 };
    const score = overlap(claimTitle, pageTitle);
    return { verdict: score >= TITLE_THRESHOLD ? 'OK' : 'TITLE_MISMATCH', status, finalUrl, pageTitle, score };
  } catch (e) {
    const msg = (e as Error).name === 'AbortError' ? 'timeout' : (e as Error).message;
    return { verdict: 'ERROR', status: 0, finalUrl: msg, pageTitle: '', score: 0 };
  } finally {
    clearTimeout(timer);
  }
}

async function pool<T, R>(items: T[], n: number, fn: (it: T, i: number) => Promise<R>): Promise<R[]> {
  const out: R[] = new Array(items.length);
  let cur = 0;
  await Promise.all(Array.from({ length: Math.min(n, items.length) }, async () => {
    while (cur < items.length) {
      const i = cur++;
      out[i] = await fn(items[i], i);
    }
  }));
  return out;
}

async function main() {
  const res = OPEN_ACCESS_RESOURCES;
  console.log(`[resource-audit] checking ${res.length} resource URLs ...`);
  const results = await pool(res, CONCURRENCY, async (r, i) => {
    const c = await check(r.url, r.title);
    if ((i + 1) % 10 === 0) console.log(`[resource-audit]   ...${i + 1}/${res.length}`);
    return { id: r.id, source: r.source, url: r.url, claim: r.title, ...c };
  });

  const tally: Record<string, number> = {};
  for (const r of results) tally[r.verdict] = (tally[r.verdict] || 0) + 1;

  console.log('\n========== RESOURCE URL AUDIT ==========');
  for (const [v, n] of Object.entries(tally)) console.log(`  ${v.padEnd(16)} ${n}`);

  const flagged = results.filter((r) => r.verdict === 'DEAD' || r.verdict === 'TITLE_MISMATCH' || r.verdict === 'ERROR');
  console.log(`\n--- FLAGGED (${flagged.length}) ---`);
  for (const r of flagged) {
    console.log(`\n[${r.verdict}] ${r.id} (status ${r.status})`);
    console.log(`  url   : ${r.url}`);
    console.log(`  claim : ${r.claim.slice(0, 90)}`);
    if (r.pageTitle) console.log(`  page  : ${r.pageTitle.slice(0, 90)} (overlap ${(r.score * 100).toFixed(0)}%)`);
    if (r.verdict === 'ERROR') console.log(`  note  : ${r.finalUrl}`);
  }

  const ts = new Date().toISOString().replace(/[:.]/g, '-');
  const dir = resolve(process.cwd(), 'reports');
  mkdirSync(dir, { recursive: true });
  writeFileSync(resolve(dir, `resource-audit-${ts}.json`), JSON.stringify({ generatedAt: new Date().toISOString(), tally, results }, null, 2));
  console.log(`\n[resource-audit] report: reports/resource-audit-${ts}.json`);
  console.log('[resource-audit] DONE');
}

main().catch((e) => { console.error('FATAL', e); process.exit(1); });
