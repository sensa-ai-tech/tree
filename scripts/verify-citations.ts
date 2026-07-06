/* eslint-disable no-console */
/**
 * VetKnowledgeTree 引用驗證器 (Citation Verifier)
 *
 * 目標：對全專案所有 NodeContent.references[] 做「真實性」驗證，
 *       建立 100% 正確性的硬基線，揪出幻覺引用 / 錯誤 DOI / 標題不符。
 *
 * 方法（依引用是否帶 DOI 分流）：
 *   - 帶 DOI            → Crossref /works/{doi} 精確查詢，比對標題 token 重疊 + 年份
 *   - 無 DOI 但像期刊   → Crossref 書目查詢 (query.bibliographic)，找最佳標題匹配（可回填 DOI）
 *   - FDA 仿單 / 登錄處 → 標記 MANUAL_REGISTRY（需人工對登錄處核對）
 *   - 教科書           → 標記 MANUAL_TEXTBOOK（幻覺風險低，人工確認）
 *
 * 輸出：console 摘要（ASCII，避開 cp950）+ reports/citation-audit-<ts>.{md,json}
 *       SUSPECT_* 桶就是「疑似幻覺」的可行動清單。
 *
 * 執行：
 *   npx tsx --tsconfig tsconfig.json scripts/verify-citations.ts               # 全掃
 *   npx tsx --tsconfig tsconfig.json scripts/verify-citations.ts --specialty derm
 *   npx tsx --tsconfig tsconfig.json scripts/verify-citations.ts --limit 20    # 冒煙測試
 */

import { writeFileSync, mkdirSync } from 'node:fs';
import { resolve } from 'node:path';
import type { NodeContent } from '@/types/knowledge';

// ─── Seed CONTENTS imports（與 audit-seed-quality.ts 同模式）───
import { CARDIO_CONTENTS } from '@/data/seed/cardio/contents';
import { IM_CONTENTS } from '@/data/seed/im/contents';
import { DERM_CONTENTS } from '@/data/seed/derm/contents';
import { SURG_CONTENTS } from '@/data/seed/surg/contents';
import { NEURO_CONTENTS } from '@/data/seed/neuro/contents';
import { ONCO_CONTENTS } from '@/data/seed/onco/contents';
import { ECC_CONTENTS } from '@/data/seed/ecc/contents';
import { CPATH_CONTENTS } from '@/data/seed/cpath/contents';

const CONTENTS_BY_SPECIALTY: Record<string, Map<string, NodeContent>> = {
  cardio: CARDIO_CONTENTS,
  im: IM_CONTENTS,
  derm: DERM_CONTENTS,
  surg: SURG_CONTENTS,
  neuro: NEURO_CONTENTS,
  onco: ONCO_CONTENTS,
  ecc: ECC_CONTENTS,
  cpath: CPATH_CONTENTS,
};

const MAILTO = 'ai@senbio.tech';
const UA = `vet-knowledge-tree-citation-audit/1.0 (mailto:${MAILTO})`;
const CONCURRENCY = 5;
const TITLE_MATCH_THRESHOLD = 0.6; // 顯著 token 重疊比例

type Verdict =
  | 'VERIFIED_DOI'
  | 'VERIFIED_BIBLIO'
  | 'SUSPECT_TITLE_MISMATCH'
  | 'SUSPECT_DOI_UNRESOLVED'
  | 'SUSPECT_NOT_FOUND'
  | 'MANUAL_REGISTRY'
  | 'MANUAL_TEXTBOOK'
  | 'ERROR';

interface CitationRecord {
  specialty: string;
  nodeId: string;
  version: number;
  idx: number;
  type: string;
  citation: string;
  doi: string | null;
}

interface VerifyResult {
  key: string;
  verdict: Verdict;
  detail: string;
  crossrefTitle?: string;
  crossrefYear?: number;
  backfillDoi?: string;
  titleScore?: number;
  occurrences: CitationRecord[];
}

// ─── 引用字串解析 ───

function extractDoi(citation: string): string | null {
  // 允許 DOI 內含括號（Elsevier S-DOI，如 10.1016/S0195-5616(03)00057-3）；
  // 中段的 ) 保留、尾端包裹用的 ) 由下方尾綴清除處理。
  const m = citation.match(/\b10\.\d{4,9}\/[^\s"'<>\]]+/i);
  if (!m) return null;
  // 去掉常見尾綴標點（含尾端包裹用的 )）
  return m[0].replace(/[.,;)\]]+$/, '').toLowerCase();
}

function citationYear(citation: string): number | null {
  // 抓 19xx/20xx（出版年）。DOI 內含「指派年」樣數字（如 j.tvjl.2007.08.022）會誤判，先剝除。
  const noDoi = citation
    .replace(/\b10\.\d{4,9}\/\S+/g, ' ')
    .replace(/doi:\s*/gi, ' ');
  const nowYear = new Date().getFullYear();
  const inRange = (y: number) => y >= 1900 && y <= nowYear;
  // 優先：Vancouver 樣式「年;卷」的出版年（緊接分號）。
  // 避開 4 位頁碼（如 37(6):1966-1982）落在年份範圍時被誤當成出版年 → 假性年份不符。
  const semi = noDoi.match(/\b(19|20)\d{2}\b(?=\s*;)/g);
  if (semi) {
    const ys = semi.map(Number).filter(inRange);
    if (ys.length) return ys[ys.length - 1];
  }
  // fallback：取最後一個合理年份（排除 >今年 的 4 位頁碼如 2084-2092 被誤判）
  const matches = noDoi.match(/\b(19|20)\d{2}\b/g);
  if (!matches) return null;
  const years = matches.map(Number).filter(inRange);
  if (!years.length) return null;
  return years[years.length - 1];
}

function isRegistryRef(citation: string, type: string): boolean {
  return (
    /\bFDA\b|Freedom of Information|\bFOI\b|package insert|EMA|EPAR|animaldrugsatfda|drugs?@fda|product label|仿單/i.test(
      citation,
    ) || type === 'label'
  );
}

function isTextbookRef(citation: string, type: string): boolean {
  if (type === 'textbook') return true;
  return /\bed(ition)?\b|\bElsevier\b|\bSaunders\b|\bWiley\b|\bBlackwell\b|\bMosby\b|\bThieme\b/i.test(
    citation,
  );
}

function looksLikeJournal(citation: string): boolean {
  // 期刊型樣式：年份;卷(期):頁  或  年份;卷:頁
  return /\b(19|20)\d{2}\b\s*;\s*\d+/.test(citation) || /;\s*\d+\s*[:(]/.test(citation);
}

// ─── 標題 token 重疊比對 ───

const STOPWORDS = new Set([
  'the', 'and', 'for', 'with', 'from', 'into', 'using', 'use', 'study', 'studies',
  'case', 'report', 'review', 'analysis', 'effect', 'effects', 'clinical', 'their',
  'this', 'that', 'these', 'those', 'have', 'after', 'between', 'among', 'versus',
]);

function significantTokens(text: string): string[] {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, ' ')
    .split(/\s+/)
    .filter((t) => t.length >= 4 && !STOPWORDS.has(t));
}

/** Crossref 標題的顯著 token 有多少比例出現在 citation 字串中（0–1）。 */
function titleOverlapScore(crossrefTitle: string, citation: string): number {
  const titleTokens = significantTokens(crossrefTitle);
  if (titleTokens.length === 0) return 0;
  const citLower = ` ${citation.toLowerCase()} `;
  let hit = 0;
  for (const tok of new Set(titleTokens)) {
    if (citLower.includes(tok)) hit += 1;
  }
  return hit / new Set(titleTokens).size;
}

/**
 * 反向比對：citation 的「標題片段」有多少比例出現在 Crossref 標題裡。
 * 抗「Crossref 標題帶超長副標 / 把縮寫拼全」造成的假性不符
 * （例：citation 寫 ISCAID，Crossref 拼成 International Society for...）。
 * 取 citation 前 3 段（通常為 [作者, 標題, 期刊]）各自計分取最高。
 */
function bestCitedTitleScore(crossrefTitle: string, citation: string): number {
  const crLower = ` ${crossrefTitle.toLowerCase()} `;
  const segments = citation.split(/\.\s+/).slice(0, 3);
  let best = 0;
  for (const seg of segments) {
    const toks = [...new Set(significantTokens(seg))];
    if (toks.length < 2) continue;
    let hit = 0;
    for (const t of toks) if (crLower.includes(t)) hit += 1;
    best = Math.max(best, hit / toks.length);
  }
  return best;
}

/** 雙向標題比對取最高分（抗長副標/縮寫展開）。 */
function bidirectionalTitleScore(crossrefTitle: string, citation: string): number {
  return Math.max(titleOverlapScore(crossrefTitle, citation), bestCitedTitleScore(crossrefTitle, citation));
}

// ─── Crossref API ───

interface CrossrefWork {
  title?: string[];
  author?: Array<{ family?: string; given?: string }>;
  published?: { 'date-parts'?: number[][] };
  'published-print'?: { 'date-parts'?: number[][] };
  'published-online'?: { 'date-parts'?: number[][] };
  DOI?: string;
}

function workYear(w: CrossrefWork): number | null {
  const dp =
    w.published?.['date-parts'] ??
    w['published-print']?.['date-parts'] ??
    w['published-online']?.['date-parts'];
  const y = dp?.[0]?.[0];
  return typeof y === 'number' ? y : null;
}

async function fetchJson(url: string, tries = 3): Promise<unknown> {
  for (let attempt = 1; attempt <= tries; attempt++) {
    try {
      const res = await fetch(url, { headers: { 'User-Agent': UA } });
      if (res.status === 200) return await res.json();
      if (res.status === 404) return { __status: 404 };
      if ((res.status === 429 || res.status >= 500) && attempt < tries) {
        await sleep(1000 * attempt);
        continue;
      }
      return { __status: res.status };
    } catch (err) {
      if (attempt < tries) {
        await sleep(800 * attempt);
        continue;
      }
      return { __error: (err as Error).message };
    }
  }
  return { __error: 'exhausted' };
}

async function verifyByDoi(doi: string, citation: string): Promise<Partial<VerifyResult>> {
  const data = (await fetchJson(`https://api.crossref.org/works/${encodeURIComponent(doi)}`)) as {
    message?: CrossrefWork;
    __status?: number;
    __error?: string;
  };
  if (data.__error) return { verdict: 'ERROR', detail: `crossref error: ${data.__error}` };
  if (data.__status === 404)
    return { verdict: 'SUSPECT_DOI_UNRESOLVED', detail: `DOI ${doi} 404 — Crossref 查無此 DOI` };
  if (!data.message)
    return { verdict: 'ERROR', detail: `crossref status ${data.__status ?? '?'}` };

  const title = data.message.title?.[0] ?? '';
  const year = workYear(data.message);
  const score = bidirectionalTitleScore(title, citation);
  const citeYear = citationYear(citation);
  const yearOk = !citeYear || !year || Math.abs(citeYear - year) <= 1;

  if (score >= TITLE_MATCH_THRESHOLD && yearOk) {
    return { verdict: 'VERIFIED_DOI', detail: 'DOI 解析成功且標題/年份相符', crossrefTitle: title, crossrefYear: year ?? undefined, titleScore: score };
  }
  return {
    verdict: 'SUSPECT_TITLE_MISMATCH',
    detail: `DOI 解得開但標題重疊僅 ${(score * 100).toFixed(0)}%${yearOk ? '' : `、年份不符(引用${citeYear} vs Crossref${year})`}`,
    crossrefTitle: title,
    crossrefYear: year ?? undefined,
    titleScore: score,
  };
}

async function verifyByBiblio(citation: string): Promise<Partial<VerifyResult>> {
  const q = encodeURIComponent(citation.slice(0, 400));
  const data = (await fetchJson(
    `https://api.crossref.org/works?query.bibliographic=${q}&rows=5&select=title,author,published,DOI`,
  )) as { message?: { items?: CrossrefWork[] }; __error?: string; __status?: number };
  if (data.__error) return { verdict: 'ERROR', detail: `crossref error: ${data.__error}` };
  const items = data.message?.items ?? [];
  let best: { score: number; w: CrossrefWork } | null = null;
  for (const w of items) {
    const score = bidirectionalTitleScore(w.title?.[0] ?? '', citation);
    if (!best || score > best.score) best = { score, w };
  }
  if (best && best.score >= TITLE_MATCH_THRESHOLD) {
    return {
      verdict: 'VERIFIED_BIBLIO',
      detail: `書目查詢命中（標題重疊 ${(best.score * 100).toFixed(0)}%）`,
      crossrefTitle: best.w.title?.[0],
      crossrefYear: workYear(best.w) ?? undefined,
      backfillDoi: best.w.DOI?.toLowerCase(),
      titleScore: best.score,
    };
  }
  return {
    verdict: 'SUSPECT_NOT_FOUND',
    detail: `書目查詢無足夠匹配（最佳重疊 ${best ? (best.score * 100).toFixed(0) : '0'}%）`,
    titleScore: best?.score,
  };
}

// ─── 工具 ───

function sleep(ms: number): Promise<void> {
  return new Promise((r) => setTimeout(r, ms));
}

function normKey(rec: CitationRecord): string {
  if (rec.doi) return `doi:${rec.doi}`;
  return `cit:${rec.citation.toLowerCase().replace(/\s+/g, ' ').replace(/[^a-z0-9 ]/g, '').trim()}`;
}

async function pool<T, R>(items: T[], n: number, fn: (item: T, i: number) => Promise<R>): Promise<R[]> {
  const out: R[] = new Array(items.length);
  let cursor = 0;
  async function worker() {
    while (cursor < items.length) {
      const i = cursor++;
      out[i] = await fn(items[i], i);
    }
  }
  await Promise.all(Array.from({ length: Math.min(n, items.length) }, worker));
  return out;
}

// ─── 主流程 ───

async function main() {
  const args = process.argv.slice(2);
  const specialtyFilter = args.includes('--specialty')
    ? args[args.indexOf('--specialty') + 1]
    : null;
  const limit = args.includes('--limit') ? Number(args[args.indexOf('--limit') + 1]) : Infinity;

  // 1) 收集所有引用
  const all: CitationRecord[] = [];
  for (const [specialty, map] of Object.entries(CONTENTS_BY_SPECIALTY)) {
    if (specialtyFilter && specialty !== specialtyFilter) continue;
    for (const [nodeId, content] of map.entries()) {
      (content.references ?? []).forEach((ref, idx) => {
        all.push({
          specialty,
          nodeId,
          version: content.version,
          idx,
          type: ref.type,
          citation: ref.citation,
          doi: extractDoi(ref.citation),
        });
      });
    }
  }

  // 2) 去重（DOI 或正規化字串）
  const byKey = new Map<string, CitationRecord[]>();
  for (const rec of all) {
    const k = normKey(rec);
    if (!byKey.has(k)) byKey.set(k, []);
    byKey.get(k)!.push(rec);
  }
  let uniqueKeys = [...byKey.keys()];
  if (limit !== Infinity) uniqueKeys = uniqueKeys.slice(0, limit);

  console.log('[citation-audit] total citations:', all.length);
  console.log('[citation-audit] unique citations:', byKey.size, limit !== Infinity ? `(limited to ${uniqueKeys.length})` : '');
  console.log('[citation-audit] verifying via Crossref ...');

  // 3) 驗證每個 unique key
  const results = await pool(uniqueKeys, CONCURRENCY, async (key, i) => {
    const occ = byKey.get(key)!;
    const rep = occ[0];
    let partial: Partial<VerifyResult>;

    if (rep.doi) {
      partial = await verifyByDoi(rep.doi, rep.citation);
    } else if (isRegistryRef(rep.citation, rep.type)) {
      partial = { verdict: 'MANUAL_REGISTRY', detail: 'FDA/EMA/登錄處文件 — 需人工對官方登錄處核對' };
    } else if (isTextbookRef(rep.citation, rep.type)) {
      partial = { verdict: 'MANUAL_TEXTBOOK', detail: '教科書 — 幻覺風險低，人工確認版次/出版社' };
    } else if (looksLikeJournal(rep.citation)) {
      partial = await verifyByBiblio(rep.citation);
    } else {
      partial = { verdict: 'MANUAL_REGISTRY', detail: '非期刊/無 DOI — 需人工判斷來源類型' };
    }

    if ((i + 1) % 25 === 0) console.log(`[citation-audit]   ...${i + 1}/${uniqueKeys.length}`);
    // 禮貌延遲（polite pool）
    await sleep(120);
    return { key, occurrences: occ, ...partial } as VerifyResult;
  });

  // 4) 統計
  const tally: Record<Verdict, number> = {
    VERIFIED_DOI: 0, VERIFIED_BIBLIO: 0, SUSPECT_TITLE_MISMATCH: 0,
    SUSPECT_DOI_UNRESOLVED: 0, SUSPECT_NOT_FOUND: 0, MANUAL_REGISTRY: 0,
    MANUAL_TEXTBOOK: 0, ERROR: 0,
  };
  let occVerified = 0, occSuspect = 0, occManual = 0;
  for (const r of results) {
    tally[r.verdict] += 1;
    const n = r.occurrences.length;
    if (r.verdict.startsWith('VERIFIED')) occVerified += n;
    else if (r.verdict.startsWith('SUSPECT')) occSuspect += n;
    else if (r.verdict.startsWith('MANUAL')) occManual += n;
  }

  // 5) console 摘要（ASCII）
  console.log('\n========== CITATION AUDIT SUMMARY ==========');
  console.log(`unique citations checked : ${results.length}`);
  console.log(`total occurrences        : ${all.length}`);
  console.log('--- by verdict (unique) ---');
  for (const v of Object.keys(tally) as Verdict[]) {
    console.log(`  ${v.padEnd(24)} ${tally[v]}`);
  }
  console.log('--- occurrence rollup ---');
  console.log(`  VERIFIED (auto)  occurrences: ${occVerified}`);
  console.log(`  SUSPECT (review) occurrences: ${occSuspect}`);
  console.log(`  MANUAL (human)   occurrences: ${occManual}`);
  const autoPct = ((occVerified / all.length) * 100).toFixed(1);
  console.log(`  auto-verified coverage      : ${autoPct}% of all citations`);

  // 6) 寫報告
  const ts = new Date().toISOString().replace(/[:.]/g, '-');
  const reportsDir = resolve(process.cwd(), 'reports');
  mkdirSync(reportsDir, { recursive: true });

  const jsonPath = resolve(reportsDir, `citation-audit-${ts}.json`);
  writeFileSync(
    jsonPath,
    JSON.stringify(
      { generatedAt: new Date().toISOString(), totals: { all: all.length, unique: results.length }, tally, results },
      null,
      2,
    ),
  );

  const suspects = results
    .filter((r) => r.verdict.startsWith('SUSPECT') || r.verdict === 'ERROR')
    .sort((a, b) => a.verdict.localeCompare(b.verdict));
  const mdLines: string[] = [];
  mdLines.push(`# Citation Audit — ${new Date().toISOString()}`);
  mdLines.push('');
  mdLines.push(`- Total citations: **${all.length}**  | Unique: **${results.length}**`);
  mdLines.push(`- Auto-verified coverage: **${autoPct}%** of all citations`);
  mdLines.push('');
  mdLines.push('| Verdict | Unique |');
  mdLines.push('|---|---|');
  for (const v of Object.keys(tally) as Verdict[]) mdLines.push(`| ${v} | ${tally[v]} |`);
  mdLines.push('');
  mdLines.push(`## SUSPECT / ERROR 清單（${suspects.length}）— 優先人工覆核`);
  mdLines.push('');
  for (const r of suspects) {
    const nodes = [...new Set(r.occurrences.map((o) => o.nodeId))].join(', ');
    mdLines.push(`### [${r.verdict}] ${nodes}`);
    mdLines.push(`- 引用：${r.occurrences[0].citation}`);
    mdLines.push(`- 判定：${r.detail}`);
    if (r.crossrefTitle) mdLines.push(`- Crossref 標題：${r.crossrefTitle}${r.crossrefYear ? ` (${r.crossrefYear})` : ''}`);
    mdLines.push('');
  }
  const mdPath = resolve(reportsDir, `citation-audit-${ts}.md`);
  writeFileSync(mdPath, mdLines.join('\n'));

  console.log(`\n[citation-audit] report written:`);
  console.log(`  ${mdPath}`);
  console.log(`  ${jsonPath}`);
  console.log('[citation-audit] DONE');
}

main().catch((e) => {
  console.error('[citation-audit] FATAL', e);
  process.exit(1);
});
