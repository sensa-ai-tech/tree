/* eslint-disable no-console */
/**
 * 節點全覽（breadth inventory）：列出每個專科的所有節點，含 version（v1/v2）、layer、type、relevance。
 * 供 review-specialist 評估「廣度＋深度是否足以把菜鳥教到專科專精」。
 * 執行：npx tsx scripts/node-inventory.ts [--specialty im]
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

for (const [spec, nodes, contents] of SPECS) {
  if (specFilter && spec !== specFilter) continue;
  const rows = nodes.map((n) => {
    const c = contents.get(n.id);
    return { id: n.id, layer: n.layer, type: n.node_type, title: n.title, v: c ? c.version : 0, prio: n.clinical_relevance + n.exam_relevance };
  });
  rows.sort((a, b) => a.layer - b.layer || a.id.localeCompare(b.id));
  const v2 = rows.filter((r) => r.v >= 2).length;
  console.log(`\n##### ${spec.toUpperCase()}  (total ${rows.length} | v2 ${v2} | v1 ${rows.length - v2}) #####`);
  for (const r of rows) {
    const tag = r.v >= 2 ? 'v2' : (r.v === 1 ? 'v1' : 'v?');
    console.log(`[${tag}] L${r.layer} ${r.type.padEnd(11)} p${r.prio} ${r.id.padEnd(13)} ${r.title}`);
  }
}
