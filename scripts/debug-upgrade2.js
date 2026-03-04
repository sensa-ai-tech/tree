const fs = require('fs');
const path = require('path');

const fp = path.join(__dirname, '..', 'src', 'data', 'seed', 'derm', 'contents.ts');
let content = fs.readFileSync(fp, 'utf-8');

function isUpgraded(bodyContent) {
  return bodyContent.includes('\u4e00\u3001') && bodyContent.includes('\u4eba\u91ab\u501f\u9452');
}

function getNodeType(fullContent, bodyStart) {
  const before = fullContent.substring(Math.max(0, bodyStart - 800), bodyStart);
  if (before.includes('-L0-')) return 'L0';
  if (before.includes('-L1-')) return 'L1';
  if (before.includes('-L2-')) return 'L2';
  if (before.includes('-L3-')) return 'L3';
  if (before.includes('-L4-')) return 'L4';
  if (before.includes('-L5-')) return 'L5';
  return 'unknown';
}

const bodyRegex = /body: `([\s\S]*?)(?<!\\)`/g;
let match;
let i = 0;

while ((match = bodyRegex.exec(content)) !== null) {
  i++;
  const bodyContent = match[1];
  const bodyStart = match.index;
  const upgraded = isUpgraded(bodyContent);
  const nodeType = getNodeType(content, bodyStart);
  const title = bodyContent.split('\n')[0].substring(0, 40);

  if (!upgraded) {
    console.log(`Body ${i}: type=${nodeType} "${title}"`);
    // Show what the function would do
    if (nodeType === 'L3' || nodeType === 'unknown') {
      console.log(`  → Would process as ${nodeType}`);
    }
  }
}
