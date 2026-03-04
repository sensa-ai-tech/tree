const fs = require('fs');
const path = require('path');

const fp = path.join(__dirname, '..', 'src', 'data', 'seed', 'im', 'contents.ts');
const content = fs.readFileSync(fp, 'utf-8');

// Build node_id map
const nodeIdRegex = /node_id:\s*'([^']+)'/g;
const entries = [];
let nm;
while ((nm = nodeIdRegex.exec(content)) !== null) {
  entries.push({ nodeId: nm[1], pos: nm.index });
}

const bodyRegex = /body: `([\s\S]*?)(?<!\\)`/g;
let match;
let i = 0;

while ((match = bodyRegex.exec(content)) !== null) {
  i++;
  const body = match[1];
  if (body.includes('\u5f85\u88dc\u5145')) {
    // Find closest preceding node_id
    let nodeId = '???';
    for (const e of entries) {
      if (e.pos < match.index) nodeId = e.nodeId;
      else break;
    }
    const title = body.split('\n').find(l => l.startsWith('# ')) || body.split('\n')[0];
    console.log(`Body ${i}: ${nodeId} "${title.substring(0, 60)}"`);

    // Show context around placeholder
    const lines = body.split('\n');
    for (let j = 0; j < lines.length; j++) {
      if (lines[j].includes('\u5f85\u88dc\u5145')) {
        console.log(`  line ${j}: ${lines[j]}`);
      }
    }
  }
}
