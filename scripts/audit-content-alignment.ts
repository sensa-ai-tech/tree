/* eslint-disable no-console */
/**
 * VetKnowledgeTree Content-Node Alignment Audit
 *
 * 驗證所有節點的 NodeContent 是否與節點標題/主題匹配。
 * 檢查項目：
 *   a. SEED_NODE_CONTENTS map 中是否有該 node_id 的 content
 *   b. content 的 node_id 欄位是否與 map key 一致
 *   c. content 的 summary 和 body 是否包含與 node title 相關的關鍵詞
 *   d. content 的 learning_objectives 是否與 node 的 specialty 和 layer 一致
 *
 * 執行方式：
 *   npx tsx --tsconfig tsconfig.json scripts/audit-content-alignment.ts
 */

import type { KnowledgeNode, NodeContent } from '@/types/knowledge';

// ─── Seed Data Imports ───
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

// ─── 合併所有資料 ───
const ALL_NODES: KnowledgeNode[] = [
  ...CARDIO_NODES,
  ...CPATH_NODES,
  ...IM_NODES,
  ...DERM_NODES,
  ...SURG_NODES,
  ...NEURO_NODES,
  ...ONCO_NODES,
  ...ECC_NODES,
];

const ALL_CONTENTS = new Map<string, NodeContent>([
  ...CARDIO_CONTENTS,
  ...CPATH_CONTENTS,
  ...IM_CONTENTS,
  ...DERM_CONTENTS,
  ...SURG_CONTENTS,
  ...NEURO_CONTENTS,
  ...ONCO_CONTENTS,
  ...ECC_CONTENTS,
]);

// ─── 專科名稱對照（用於語義匹配） ───
const SPECIALTY_KEYWORDS: Record<string, string[]> = {
  CARDIO: ['心臟', '心血管', 'cardio', 'cardiac', 'heart', '瓣膜', 'valve', '心肌', 'myocardial', '心律', 'arrhythmia', '心包膜', 'pericardial', '心絲蟲', 'heartworm', '血栓', 'thrombo'],
  CPATH: ['臨床病理', '血液學', '生化', 'clinical pathology', '血液', 'hematology', '尿液', 'urinalysis', '細胞學', 'cytology', '凝血', 'coagulation', 'CBC', '檢驗'],
  IM: ['內科', 'internal medicine', '消化', '內分泌', '腎臟', '呼吸', '泌尿', '肝臟', '免疫', '感染', '血液', '胰臟'],
  DERM: ['皮膚', 'dermatology', 'skin', '過敏', 'allergy', '黴菌', 'fungal', '寄生蟲', '膿皮', 'pyoderma', '耳炎', 'otitis', '免疫', '自體免疫'],
  SURG: ['外科', 'surgery', 'surgical', '手術', '骨折', 'fracture', '骨科', 'orthopedic', '軟組織', '腫塊', '腹腔', '傷口', 'wound'],
  NEURO: ['神經', 'neurology', 'neurological', '脊髓', '腦', '癲癇', 'seizure', 'epilepsy', '椎間盤', 'disc', '前庭', 'vestibular', '肌肉', 'myasthenia'],
  ONCO: ['腫瘤', 'oncology', 'cancer', '化療', 'chemotherapy', '放射', '淋巴', 'lymphoma', '肉瘤', 'sarcoma', '癌', 'carcinoma', '轉移', 'metastasis'],
  ECC: ['急診', '加護', 'emergency', 'critical care', '休克', 'shock', '復甦', 'resuscitation', '中毒', 'toxicosis', '輸血', 'transfusion', 'DIC', 'SIRS', 'sepsis'],
};

const LAYER_KEYWORDS: Record<number, string[]> = {
  0: ['總覽', 'overview', '概述', '入門', '簡介', '範疇'],
  1: ['基礎', '解剖', '生理', '藥理', 'anatomy', 'physiology', 'pharmacology', '基本', '原理'],
  2: ['機轉', '病理', 'pathogenesis', 'mechanism', '病因', '發生', 'etiology'],
  3: ['疾病', 'disease', '臨床', '症候群', '症', '病', '炎', '感染'],
  4: ['診斷', 'diagnostic', '檢查', '判讀', 'interpretation', '影像', '分析', '評估'],
  5: ['治療', '管理', 'treatment', 'management', '藥物', 'therapy', '手術', '處置', '照護'],
};

// ─── 審計結果型別 ───
interface AuditResult {
  nodeId: string;
  nodeTitle: string;
  specialty: string;
  layer: number;
  passed: boolean;
  checks: CheckResult[];
}

interface CheckResult {
  name: string;
  passed: boolean;
  detail: string;
}

// ─── 關鍵詞提取（從 title 拆出有意義的片段） ───
function extractKeywords(title: string, titleEn: string | null): string[] {
  const keywords: string[] = [];

  // 中文：去除括號內容後按字元拆分，取 2 字以上有意義的片段
  const zhClean = title
    .replace(/\(.*?\)/g, '')
    .replace(/（.*?）/g, '')
    .trim();

  // 直接用中文標題作為關鍵詞（多字詞匹配更精確）
  if (zhClean.length >= 2) {
    keywords.push(zhClean);
  }

  // 抓括號內的縮寫（如 MMVD, DCM, HCM）
  const abbrevMatches = title.match(/\(([A-Z/]+(?:\s*[A-Z/]+)*)\)/g);
  if (abbrevMatches) {
    for (const m of abbrevMatches) {
      const inner = m.replace(/[()]/g, '').trim();
      // 分割多個縮寫（如 PDA/PS/SAS 或 SVT/VT/AF/SSS）
      for (const abbr of inner.split('/')) {
        if (abbr.length >= 2) {
          keywords.push(abbr.trim());
        }
      }
    }
  }

  // 英文標題：拆成單字，過濾 stop words
  if (titleEn) {
    const stopWords = new Set(['the', 'a', 'an', 'and', 'or', 'of', 'in', 'for', 'to', 'with', 'its', '&', 'vs']);
    const enWords = titleEn
      .replace(/\(.*?\)/g, ' ')
      .split(/[\s/,]+/)
      .filter((w) => w.length >= 3 && !stopWords.has(w.toLowerCase()));
    keywords.push(...enWords);
  }

  return keywords;
}

// ─── 語義匹配：檢查文本是否包含任一關鍵詞 ───
function textContainsAnyKeyword(text: string, keywords: string[]): { matched: boolean; matchedKeywords: string[]; totalKeywords: number } {
  const textLower = text.toLowerCase();
  const matched: string[] = [];
  for (const kw of keywords) {
    if (textLower.includes(kw.toLowerCase())) {
      matched.push(kw);
    }
  }
  return { matched: matched.length > 0, matchedKeywords: matched, totalKeywords: keywords.length };
}

// ─── 主審計邏輯 ───
function auditNode(node: KnowledgeNode): AuditResult {
  const checks: CheckResult[] = [];
  const content = ALL_CONTENTS.get(node.id);

  // Check a: content 存在性
  if (!content) {
    checks.push({
      name: 'content-exists',
      passed: false,
      detail: `SEED_NODE_CONTENTS 中找不到 node_id="${node.id}" 的 content`,
    });
    return { nodeId: node.id, nodeTitle: node.title, specialty: node.specialty, layer: node.layer, passed: false, checks };
  }

  checks.push({
    name: 'content-exists',
    passed: true,
    detail: `content 存在 (content.id="${content.id}")`,
  });

  // Check b: node_id 一致性
  const nodeIdMatch = content.node_id === node.id;
  checks.push({
    name: 'node-id-consistency',
    passed: nodeIdMatch,
    detail: nodeIdMatch
      ? `content.node_id="${content.node_id}" 與 map key 一致`
      : `content.node_id="${content.node_id}" 與 map key "${node.id}" 不一致`,
  });

  // Check c: summary + body 語義匹配
  const keywords = extractKeywords(node.title, node.title_en);
  const combinedText = `${content.summary} ${content.body}`;

  const summaryResult = textContainsAnyKeyword(content.summary, keywords);
  const bodyResult = textContainsAnyKeyword(content.body, keywords);
  const overallSemanticMatch = summaryResult.matched || bodyResult.matched;

  checks.push({
    name: 'semantic-match',
    passed: overallSemanticMatch,
    detail: overallSemanticMatch
      ? `summary/body 包含 ${[...new Set([...summaryResult.matchedKeywords, ...bodyResult.matchedKeywords])].length}/${keywords.length} 個關鍵詞: [${[...new Set([...summaryResult.matchedKeywords, ...bodyResult.matchedKeywords])].join(', ')}]`
      : `summary/body 未包含任何 title 相關關鍵詞。title="${node.title}", 檢查的關鍵詞: [${keywords.join(', ')}]`,
  });

  // Check d: learning_objectives 與 specialty/layer 一致性
  const specialtyKws = SPECIALTY_KEYWORDS[node.specialty] ?? [];
  const layerKws = LAYER_KEYWORDS[node.layer] ?? [];

  const objectivesText = content.learning_objectives.join(' ');

  // 專科匹配：learning_objectives 或 summary+body 中是否包含專科關鍵詞
  const specResult = textContainsAnyKeyword(`${objectivesText} ${combinedText}`, specialtyKws);
  const specPassed = specResult.matched;

  checks.push({
    name: 'specialty-alignment',
    passed: specPassed,
    detail: specPassed
      ? `內容與 ${node.specialty} 專科相符（匹配: ${specResult.matchedKeywords.slice(0, 5).join(', ')}）`
      : `內容與 ${node.specialty} 專科不相符，未找到任何專科關鍵詞`,
  });

  // 層級匹配：learning_objectives 或 summary+body 中是否包含層級關鍵詞
  const layerResult = textContainsAnyKeyword(`${objectivesText} ${combinedText}`, layerKws);
  const layerPassed = layerResult.matched;

  checks.push({
    name: 'layer-alignment',
    passed: layerPassed,
    detail: layerPassed
      ? `內容與 L${node.layer} 層級相符（匹配: ${layerResult.matchedKeywords.slice(0, 5).join(', ')}）`
      : `內容與 L${node.layer} 層級不相符，未找到任何層級關鍵詞（期望: ${layerKws.join('/')}）`,
  });

  const allPassed = checks.every((c) => c.passed);
  return { nodeId: node.id, nodeTitle: node.title, specialty: node.specialty, layer: node.layer, passed: allPassed, checks };
}

// ─── 執行審計 ───
function runAudit(): void {
  console.log('═══════════════════════════════════════════════════════════════');
  console.log(' VetKnowledgeTree — Content-Node Alignment Audit');
  console.log('═══════════════════════════════════════════════════════════════');
  console.log(`Total nodes: ${ALL_NODES.length}`);
  console.log(`Total contents: ${ALL_CONTENTS.size}`);
  console.log('');

  const results: AuditResult[] = [];

  for (const node of ALL_NODES) {
    results.push(auditNode(node));
  }

  // ─── 輸出 PASS 項目 ───
  const passed = results.filter((r) => r.passed);
  const failed = results.filter((r) => !r.passed);

  console.log(`───────────────────────────────────────────────────────────────`);
  console.log(` PASS: ${passed.length} nodes`);
  console.log(`───────────────────────────────────────────────────────────────`);
  for (const r of passed) {
    console.log(`  ✓ [${r.nodeId}] ${r.nodeTitle}`);
  }

  console.log('');
  console.log(`───────────────────────────────────────────────────────────────`);
  console.log(` FAIL: ${failed.length} nodes`);
  console.log(`───────────────────────────────────────────────────────────────`);
  for (const r of failed) {
    console.log(`  ✗ [${r.nodeId}] ${r.nodeTitle}`);
    for (const c of r.checks) {
      if (!c.passed) {
        console.log(`      ↳ [${c.name}] ${c.detail}`);
      }
    }
  }

  // ─── 按專科統計 ───
  console.log('');
  console.log(`───────────────────────────────────────────────────────────────`);
  console.log(` Summary by Specialty`);
  console.log(`───────────────────────────────────────────────────────────────`);

  const specialties = [...new Set(ALL_NODES.map((n) => n.specialty))];
  for (const spec of specialties) {
    const specResults = results.filter((r) => r.specialty === spec);
    const specPassed = specResults.filter((r) => r.passed).length;
    const specTotal = specResults.length;
    const status = specPassed === specTotal ? 'ALL PASS' : `${specTotal - specPassed} FAIL`;
    console.log(`  ${spec.padEnd(8)} ${specPassed}/${specTotal} (${status})`);
  }

  // ─── 按檢查維度統計 ───
  console.log('');
  console.log(`───────────────────────────────────────────────────────────────`);
  console.log(` Summary by Check Dimension`);
  console.log(`───────────────────────────────────────────────────────────────`);

  const checkNames = ['content-exists', 'node-id-consistency', 'semantic-match', 'specialty-alignment', 'layer-alignment'];
  for (const checkName of checkNames) {
    let passCount = 0;
    let totalCount = 0;
    for (const r of results) {
      const check = r.checks.find((c) => c.name === checkName);
      if (check) {
        totalCount++;
        if (check.passed) passCount++;
      }
    }
    const status = passCount === totalCount ? 'ALL PASS' : `${totalCount - passCount} FAIL`;
    console.log(`  ${checkName.padEnd(24)} ${passCount}/${totalCount} (${status})`);
  }

  // ─── 總結 ───
  console.log('');
  console.log('═══════════════════════════════════════════════════════════════');
  console.log(` TOTAL: ${passed.length} PASS / ${failed.length} FAIL / ${results.length} NODES`);
  console.log(` RESULT: ${failed.length === 0 ? 'ALL PASS ✓' : `${failed.length} ISSUES FOUND ✗`}`);
  console.log('═══════════════════════════════════════════════════════════════');

  // 若有 FAIL 則以非零退出碼結束
  if (failed.length > 0) {
    process.exit(1);
  }
}

runAudit();
