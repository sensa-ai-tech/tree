const fs = require('fs');
const path = require('path');

const SPECIALTIES = ['cardio', 'im', 'derm', 'surg', 'neuro', 'onco', 'ecc', 'cpath'];
const SEED_DIR = path.join(__dirname, '..', 'src', 'data', 'seed');

for (const sp of SPECIALTIES) {
  const fp = path.join(SEED_DIR, sp, 'contents.ts');
  if (!fs.existsSync(fp)) { console.log(sp, 'NOT FOUND'); continue; }

  const content = fs.readFileSync(fp, 'utf-8');
  const bodyRegex = /body: `([\s\S]*?)(?<!\\)`/g;
  let match;
  let total = 0, hasStruct = 0, hasTranslational = 0, hasBoth = 0, hasPlaceholder = 0;

  while ((match = bodyRegex.exec(content)) !== null) {
    total++;
    const b = match[1];
    const s = b.includes('\u4e00\u3001'); // 一、
    const t = b.includes('\u4eba\u91ab\u501f\u9452') || b.includes('\u4eba\u91ab\u501f\u9451'); // 人醫借鑑 or 人醫借鑒
    const p = b.includes('\u5f85\u88dc\u5145'); // 待補充
    if (s) hasStruct++;
    if (t) hasTranslational++;
    if (s && t) hasBoth++;
    if (p) hasPlaceholder++;
  }

  console.log(
    sp.toUpperCase().padEnd(8),
    'total=' + total,
    'struct=' + hasStruct,
    'deep(both)=' + hasBoth,
    'placeholder=' + hasPlaceholder,
    'needWork=' + (total - hasBoth)
  );
}
