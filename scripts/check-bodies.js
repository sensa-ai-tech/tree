const fs = require('fs');
const path = require('path');

const SPECIALTIES = ['cardio', 'im', 'derm', 'surg', 'neuro', 'onco', 'ecc', 'cpath'];
const SEED_DIR = path.join(__dirname, '..', 'src', 'data', 'seed');

for (const sp of SPECIALTIES) {
  const fp = path.join(SEED_DIR, sp, 'contents.ts');
  if (!fs.existsSync(fp)) { console.log(sp, 'NOT FOUND'); continue; }

  const content = fs.readFileSync(fp, 'utf-8');

  // Count bodies
  const bodyRegex = /body: `([\s\S]*?)(?<!\\)`/g;
  let match;
  let total = 0;
  let upgraded = 0;

  while ((match = bodyRegex.exec(content)) !== null) {
    total++;
    const body = match[1];
    // Check for Chinese numbered sections
    if (body.includes('\u4e00\u3001') || body.includes('\u4eba\u91ab\u501f\u9452')) {
      // \u4e00\u3001 = 一、  \u4eba\u91ab\u501f\u9452 = 人醫借鑑
      upgraded++;
    }
  }

  console.log(`${sp.toUpperCase().padEnd(8)} total=${total} upgraded=${upgraded} missing=${total-upgraded}`);
}
