/* eslint-disable no-console */
/**
 * v1→v2 升級優先佇列
 *
 * 列出所有 NodeContent.version === 1 的節點，依 (clinical_relevance + exam_relevance) 排序，
 * 作為 v2 教科書升級主線（task #6）的工作清單。避免重複選到已是 v2 的節點。
 *
 * 執行：npx tsx --tsconfig tsconfig.json scripts/uplift-queue.ts [--specialty im] [--top 30]
 */

import type { KnowledgeNode, NodeContent } from '@/types/knowledge';
import { CARDIO_NODES } from '@/data/seed/cardio/nodes';
import { CARDIO_CONTENTS } from '@/data/seed/cardio/contents';
import { IM_NODES } from '@/data/seed/im/nodes';
import { IM_CONTENTS } from '@/data/seed/im/contents';
import { DERM_NODES } from '@/data/seed/derm/nodes';
import { DERM_CONTENTS } from '@/data/seed/derm/contents';
import { SURG_NODES } from '@/data/seed/surg/nodes';
import { SURG_CONTENTS } from '@/data/seed/surg/contents';
import { NEURO_NODES } from '@/data/seed/neuro/nodes';
import { NEURO_CONTENTS } from '@/data/seed/neuro/contents';
import { ONCO_NODES } from '@/data/seed/onco/nodes';
import { ONCO_CONTENTS } from '@/data/seed/onco/contents';
import { ECC_NODES } from '@/data/seed/ecc/nodes';
import { ECC_CONTENTS } from '@/data/seed/ecc/contents';
import { CPATH_NODES } from '@/data/seed/cpath/nodes';
import { CPATH_CONTENTS } from '@/data/seed/cpath/contents';

const SPECS: Array<[string, KnowledgeNode[], Map<string, NodeContent>]> = [
  ['cardio', CARDIO_NODES, CARDIO_CONTENTS],
  ['im', IM_NODES, IM_CONTENTS],
  ['derm', DERM_NODES, DERM_CONTENTS],
  ['surg', SURG_NODES, SURG_CONTENTS],
  ['neuro', NEURO_NODES, NEURO_CONTENTS],
  ['onco', ONCO_NODES, ONCO_CONTENTS],
  ['ecc', ECC_NODES, ECC_CONTENTS],
  ['cpath', CPATH_NODES, CPATH_CONTENTS],
];

const args = process.argv.slice(2);
const specFilter = args.includes('--specialty') ? args[args.indexOf('--specialty') + 1] : null;
const top = args.includes('--top') ? Number(args[args.indexOf('--top') + 1]) : Infinity;

interface Row {
  id: string; spec: string; title: string; layer: number; type: string;
  clin: number; exam: number; prio: number;
}

const rows: Row[] = [];
const perSpec: Record<string, { v1: number; v2plus: number }> = {};

for (const [spec, nodes, contents] of SPECS) {
  if (specFilter && spec !== specFilter) continue;
  perSpec[spec] = { v1: 0, v2plus: 0 };
  for (const n of nodes) {
    const c = contents.get(n.id);
    if (!c) continue;
    if (c.version === 1) {
      perSpec[spec].v1 += 1;
      rows.push({ id: n.id, spec, title: n.title, layer: n.layer, type: n.node_type, clin: n.clinical_relevance, exam: n.exam_relevance, prio: n.clinical_relevance + n.exam_relevance });
    } else {
      perSpec[spec].v2plus += 1;
    }
  }
}

rows.sort((a, b) => b.prio - a.prio || a.layer - b.layer || a.id.localeCompare(b.id));

console.log('=== v1→v2 UPLIFT QUEUE (version===1, by clinical+exam relevance) ===\n');
console.log('per-specialty v1 remaining / v2+ done:');
for (const [s, v] of Object.entries(perSpec)) console.log(`  ${s.padEnd(7)} v1=${String(v.v1).padStart(3)}  v2+=${v.v2plus}`);
const totalV1 = rows.length;
console.log(`\nTOTAL v1 remaining: ${totalV1}\n`);

const shown = top === Infinity ? rows : rows.slice(0, top);
console.log(`rank  prio  id            L  type        title`);
shown.forEach((r, i) => {
  console.log(`${String(i + 1).padStart(3)}.  ${r.prio}/10  ${r.id.padEnd(13)} ${r.layer}  ${r.type.padEnd(11)} ${r.title}`);
});
