const fs = require('fs');
const path = require('path');

const fp = path.join(__dirname, '..', 'src', 'data', 'seed', 'derm', 'contents.ts');
const content = fs.readFileSync(fp, 'utf-8');

const bodyRegex = /body: `([\s\S]*?)(?<!\\)`/g;
let match;
let i = 0;

while ((match = bodyRegex.exec(content)) !== null) {
  i++;
  const body = match[1];
  const hasStruct = body.includes('\u4e00\u3001');
  const title = body.split('\n')[0].substring(0, 50);
  console.log(`Body ${i}: struct=${hasStruct ? 'Y' : 'N'} len=${body.length} "${title}"`);
}

console.log(`\nTotal: ${i} bodies found by regex`);
