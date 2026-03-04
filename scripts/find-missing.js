const fs = require('fs');
const path = require('path');

const SPECIALTIES = ['cardio', 'im', 'derm', 'surg', 'neuro', 'onco', 'ecc', 'cpath'];
const SEED_DIR = path.join(__dirname, '..', 'src', 'data', 'seed');

for (const sp of SPECIALTIES) {
  const fp = path.join(SEED_DIR, sp, 'contents.ts');
  if (!fs.existsSync(fp)) continue;

  const content = fs.readFileSync(fp, 'utf-8');
  const bodyRegex = /body: `([\s\S]*?)(?<!\\)`/g;
  let match;
  let missing = [];

  while ((match = bodyRegex.exec(content)) !== null) {
    const b = match[1];
    const hasStruct = b.includes('\u4e00\u3001'); // 一、
    const hasTrans = b.includes('\u4eba\u91ab\u501f'); // 人醫借 (any variant)
    const title = b.split('\n')[0].substring(0, 50);

    // Get node_id from context
    const before = content.substring(Math.max(0, match.index - 500), match.index);
    const nodeIdMatch = before.match(/node_id:\s*'([^']+)'/);
    const nodeId = nodeIdMatch ? nodeIdMatch[1] : '???';

    if (!hasStruct || !hasTrans) {
      missing.push({ nodeId, title, hasStruct, hasTrans });
    }
  }

  if (missing.length > 0) {
    console.log(`\n[${sp.toUpperCase()}] ${missing.length} bodies need work:`);
    for (const m of missing) {
      console.log(`  ${m.nodeId.padEnd(16)} struct=${m.hasStruct ? 'Y' : 'N'} trans=${m.hasTrans ? 'Y' : 'N'}  ${m.title}`);
    }
  }
}
