/**
 * Script to add 7-aspect section headers to body fields in contents.ts files.
 * Restructures existing content under new numbered Chinese section headers.
 */
const fs = require('fs');
const path = require('path');

const SPECIALTIES = ['cardio', 'derm', 'surg', 'neuro', 'onco', 'ecc', 'cpath'];
const SEED_DIR = path.join(__dirname, '..', 'src', 'data', 'seed');

function isUpgraded(bodyContent) {
  // Check for Chinese numbered section AND translational section
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

function getNodeTitle(bodyContent) {
  const lines = bodyContent.split('\n');
  for (const line of lines) {
    if (line.startsWith('# ')) return line;
  }
  return lines[0] || '# Unknown';
}

function extractSections(bodyContent) {
  const lines = bodyContent.split('\n');
  const sections = [];
  let currentHeading = '';
  let currentContent = [];
  let titleLine = '';

  for (const line of lines) {
    if (line.startsWith('# ') && !line.startsWith('## ')) {
      titleLine = line;
      continue;
    }
    if (line.startsWith('## ')) {
      if (currentHeading || currentContent.length > 0) {
        sections.push({ heading: currentHeading, content: currentContent.join('\n') });
      }
      currentHeading = line;
      currentContent = [];
    } else {
      currentContent.push(line);
    }
  }
  if (currentHeading || currentContent.length > 0) {
    sections.push({ heading: currentHeading, content: currentContent.join('\n') });
  }

  return { titleLine, sections };
}

function categorizeSection(heading, nodeType) {
  const h = heading.toLowerCase();

  if (nodeType === 'L0' || nodeType === 'L1' || nodeType === 'L2') {
    if (h.includes('\u722d\u8b70') || h.includes('\u7a7a\u7f3a') || h.includes('controversy') || h.includes('gap') || h.includes('limitation')) return 3;
    if (h.includes('\u4eba\u91ab') || h.includes('translational') || h.includes('human')) return 2;
    if (h.includes('\u81e8\u5e8a\u610f\u7fa9') || h.includes('\u61c9\u7528') || h.includes('clinical significance') || h.includes('\u5dee\u7570') || h.includes('difference')) return 1;
    return 0;
  }

  if (nodeType === 'L4') {
    if (h.includes('\u722d\u8b70') || h.includes('\u7a7a\u7f3a') || h.includes('controversy') || h.includes('gap')) return 4;
    if (h.includes('\u4eba\u91ab') || h.includes('translational')) return 3;
    if (h.includes('\u9677\u9631') || h.includes('pitfall') || h.includes('\u6ce8\u610f') || h.includes('\u9650\u5236') || h.includes('limitation') || h.includes('caution')) return 2;
    if (h.includes('\u5224\u8b80') || h.includes('\u89e3\u8b80') || h.includes('interpretation') || h.includes('\u6b63\u5e38') || h.includes('\u7570\u5e38') || h.includes('\u6e2c\u91cf') || h.includes('\u5206\u6790') || h.includes('finding') || h.includes('reading')) return 1;
    return 0;
  }

  if (nodeType === 'L5') {
    if (h.includes('\u722d\u8b70') || h.includes('\u7a7a\u7f3a') || h.includes('controversy') || h.includes('gap')) return 5;
    if (h.includes('\u4eba\u91ab') || h.includes('translational')) return 4;
    if (h.includes('\u9810\u5f8c') || h.includes('prognos')) return 3;
    if (h.includes('\u4f75\u767c') || h.includes('\u76e3\u63a7') || h.includes('\u526f\u4f5c\u7528') || h.includes('\u6bd2\u6027') || h.includes('complication') || h.includes('monitoring') || h.includes('adverse') || h.includes('toxicity')) return 2;
    if (h.includes('\u6bd4\u8f03') || h.includes('\u85e5\u7269') || h.includes('\u65b9\u6cd5') || h.includes('\u5206\u985e') || h.includes('\u9078\u64c7') || h.includes('comparison') || h.includes('class') || h.includes('selection') || h.includes('protocol')) return 1;
    return 0;
  }

  return 0;
}

function buildUpgradedBody(titleLine, sections, nodeType) {
  let result = titleLine + '\n\n';

  let headers, bucketCount;

  if (nodeType === 'L0' || nodeType === 'L1' || nodeType === 'L2') {
    headers = [
      '## \u4e00\u3001\u6838\u5fc3\u6982\u5ff5\u8207\u6a5f\u8f49 (Core Concept & Mechanism)',
      '## \u4e8c\u3001\u81e8\u5e8a\u610f\u7fa9 (Clinical Significance)',
      '## \u4e09\u3001\u4eba\u91ab\u501f\u9452 (Translational Insights)',
      '## \u56db\u3001\u81e8\u5e8a\u722d\u8b70\u8207\u77e5\u8b58\u7a7a\u7f3a (Controversies & Knowledge Gaps)'
    ];
    bucketCount = 4;
  } else if (nodeType === 'L4') {
    headers = [
      '## \u4e00\u3001\u6aa2\u67e5\u539f\u7406\u8207\u9069\u61c9\u75c7 (Principles & Indications)',
      '## \u4e8c\u3001\u5224\u8b80\u8981\u9ede (Interpretation)',
      '## \u4e09\u3001\u5e38\u898b\u9677\u9631 (Pitfalls)',
      '## \u56db\u3001\u4eba\u91ab\u501f\u9452 (Translational Insights)',
      '## \u4e94\u3001\u81e8\u5e8a\u722d\u8b70\u8207\u77e5\u8b58\u7a7a\u7f3a (Controversies & Knowledge Gaps)'
    ];
    bucketCount = 5;
  } else if (nodeType === 'L5') {
    headers = [
      '## \u4e00\u3001\u6cbb\u7642\u539f\u7406 (Treatment Principles)',
      '## \u4e8c\u3001\u85e5\u7269/\u65b9\u6cd5\u6bd4\u8f03 (Comparison)',
      '## \u4e09\u3001\u4f75\u767c\u75c7\u8207\u76e3\u63a7 (Complications & Monitoring)',
      '## \u56db\u3001\u9810\u5f8c\u5f71\u97ff (Prognostic Impact)',
      '## \u4e94\u3001\u4eba\u91ab\u501f\u9452 (Translational Insights)',
      '## \u516d\u3001\u81e8\u5e8a\u722d\u8b70\u8207\u77e5\u8b58\u7a7a\u7f3a (Controversies & Knowledge Gaps)'
    ];
    bucketCount = 6;
  } else {
    // L3 or unknown - return as-is
    return titleLine + '\n\n' + sections.map(s => s.heading + '\n' + s.content).join('\n');
  }

  // Distribute sections into buckets
  const buckets = Array.from({ length: bucketCount }, () => []);
  for (const sec of sections) {
    const cat = categorizeSection(sec.heading, nodeType);
    buckets[Math.min(cat, bucketCount - 1)].push(sec);
  }

  // If all sections ended up in bucket 0, distribute more evenly
  const nonEmpty = buckets.filter(b => b.length > 0).length;
  if (nonEmpty <= 1 && sections.length > 2) {
    // Put all content into bucket 0 as subsections
    buckets[0] = sections;
  }

  for (let i = 0; i < bucketCount; i++) {
    result += headers[i] + '\n\n';
    if (buckets[i].length > 0) {
      for (const sec of buckets[i]) {
        if (sec.heading) {
          // Demote ## to ### for subsections
          result += sec.heading.replace(/^## /, '### ') + '\n';
        }
        result += sec.content.trim() + '\n\n';
      }
    } else {
      // Add placeholder tables for translational/controversy sections
      const headerText = headers[i];
      if (headerText.includes('\u4eba\u91ab\u501f\u9452')) {
        result += '| \u4eba\u91ab\u5de5\u5177/\u6982\u5ff5 | \u7378\u91ab\u61c9\u7528\u6f5b\u529b | \u73fe\u6cc1 |\n';
        result += '|-------------|-------------|------|\n';
        result += '| \uff08\u5f85\u88dc\u5145\uff09 | \u2014 | \u2014 |\n\n';
      } else if (headerText.includes('\u722d\u8b70')) {
        result += '| \u722d\u8b70\u8b70\u984c | \u73fe\u6cc1 | Evidence Level |\n';
        result += '|---------|------|---------------|\n';
        result += '| \uff08\u5f85\u88dc\u5145\uff09 | \u2014 | \u2014 |\n\n';
      }
    }
  }

  return result.trimEnd();
}

function processFile(specialty) {
  const filePath = path.join(SEED_DIR, specialty, 'contents.ts');
  if (!fs.existsSync(filePath)) {
    console.log(`[SKIP] ${specialty}/contents.ts not found`);
    return { processed: 0, skipped: 0 };
  }

  let content = fs.readFileSync(filePath, 'utf-8');
  let processed = 0;
  let skipped = 0;

  const bodyRegex = /body: `([\s\S]*?)(?<!\\)`/g;
  let match;
  const replacements = [];

  while ((match = bodyRegex.exec(content)) !== null) {
    const bodyContent = match[1];
    const bodyStart = match.index;

    if (isUpgraded(bodyContent)) {
      skipped++;
      continue;
    }

    const nodeType = getNodeType(content, bodyStart);

    // Skip L3 disease nodes — these need manual detailed upgrade
    if (nodeType === 'L3') {
      // Still add section headers to L3 nodes that don't have them
      const { titleLine, sections } = extractSections(bodyContent);

      // For L3, just add section wrappers
      let upgraded = titleLine + '\n\n';
      const l3Headers = [
        '## \u4e00\u3001\u75c5\u7406\u6a5f\u5236 (Pathophysiology)',
        '## \u4e8c\u3001\u81e8\u5e8a\u8868\u73fe\u8207\u8a3a\u65b7 (Clinical Signs & Diagnosis)',
        '## \u4e09\u3001\u6cbb\u7642\u7b56\u7565 (Treatment)',
        '## \u56db\u3001\u4f75\u767c\u75c7\u8207\u76e3\u63a7 (Complications & Monitoring)',
        '## \u4e94\u3001\u9810\u5f8c\u8207\u9810\u5f8c\u56e0\u5b50 (Prognosis)',
        '## \u516d\u3001\u4eba\u91ab\u501f\u9452 (Translational Insights)',
        '## \u4e03\u3001\u81e8\u5e8a\u722d\u8b70\u8207\u77e5\u8b58\u7a7a\u7f3a (Controversies & Knowledge Gaps)'
      ];

      // Categorize L3 sections
      const buckets = [[], [], [], [], [], [], []];
      for (const sec of sections) {
        const h = sec.heading.toLowerCase();
        if (h.includes('\u722d\u8b70') || h.includes('\u7a7a\u7f3a') || h.includes('controversy')) { buckets[6].push(sec); }
        else if (h.includes('\u4eba\u91ab') || h.includes('translational')) { buckets[5].push(sec); }
        else if (h.includes('\u9810\u5f8c') || h.includes('prognos')) { buckets[4].push(sec); }
        else if (h.includes('\u4f75\u767c') || h.includes('\u76e3\u63a7') || h.includes('complication') || h.includes('monitoring')) { buckets[3].push(sec); }
        else if (h.includes('\u6cbb\u7642') || h.includes('treatment') || h.includes('therapy') || h.includes('primary care') || h.includes('specialty care') || h.includes('\u85e5\u7269')) { buckets[2].push(sec); }
        else if (h.includes('\u8a3a\u65b7') || h.includes('\u81e8\u5e8a') || h.includes('\u5206\u5316') || h.includes('\u5206\u7d1a') || h.includes('\u8868\u73fe') || h.includes('clinical') || h.includes('diagnosis') || h.includes('staging') || h.includes('classification')) { buckets[1].push(sec); }
        else { buckets[0].push(sec); }
      }

      for (let i = 0; i < 7; i++) {
        upgraded += l3Headers[i] + '\n\n';
        if (buckets[i].length > 0) {
          for (const sec of buckets[i]) {
            if (sec.heading) upgraded += sec.heading.replace(/^## /, '### ') + '\n';
            upgraded += sec.content.trim() + '\n\n';
          }
        } else {
          if (i === 5) {
            upgraded += '| \u4eba\u91ab\u5de5\u5177/\u6982\u5ff5 | \u7378\u91ab\u61c9\u7528\u6f5b\u529b | \u73fe\u6cc1 |\n|-------------|-------------|------|\n| \uff08\u5f85\u88dc\u5145\uff09 | \u2014 | \u2014 |\n\n';
          } else if (i === 6) {
            upgraded += '| \u722d\u8b70\u8b70\u984c | \u73fe\u6cc1 | Evidence Level |\n|---------|------|---------------|\n| \uff08\u5f85\u88dc\u5145\uff09 | \u2014 | \u2014 |\n\n';
          }
        }
      }

      replacements.push({
        original: match[0],
        replacement: `body: \`${upgraded.trimEnd()}\``,
        index: match.index
      });
      processed++;
      continue;
    }

    const { titleLine, sections } = extractSections(bodyContent);
    const upgraded = buildUpgradedBody(titleLine, sections, nodeType);

    replacements.push({
      original: match[0],
      replacement: `body: \`${upgraded}\``,
      index: match.index
    });
    processed++;
  }

  // Apply replacements in reverse order
  for (let i = replacements.length - 1; i >= 0; i--) {
    const r = replacements[i];
    content = content.substring(0, r.index) + r.replacement + content.substring(r.index + r.original.length);
  }

  fs.writeFileSync(filePath, content, 'utf-8');
  return { processed, skipped };
}

console.log('=== Upgrading body fields to 7-aspect format ===\n');
let totalProcessed = 0;
let totalSkipped = 0;

for (const specialty of SPECIALTIES) {
  const result = processFile(specialty);
  console.log(`[${specialty.toUpperCase()}] Upgraded: ${result.processed}, Already done: ${result.skipped}`);
  totalProcessed += result.processed;
  totalSkipped += result.skipped;
}

console.log(`\n=== Total: ${totalProcessed} upgraded, ${totalSkipped} already had 7-aspect format ===`);
