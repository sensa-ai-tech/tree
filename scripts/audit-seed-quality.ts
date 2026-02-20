/**
 * VetKnowledgeTree 品質審計腳本
 *
 * 10 維度自動評分系統，用於迭代品質審核迴圈 (Phase A)。
 * 執行方式：npx tsx --tsconfig tsconfig.json scripts/audit-seed-quality.ts
 */

// ─── Seed Data Imports (直接 import 各專科，避免依賴 Zustand) ───
import { CARDIO_NODES } from '@/data/seed/cardio/nodes';
import { CARDIO_EDGES } from '@/data/seed/cardio/edges';
import { CARDIO_CONTENTS } from '@/data/seed/cardio/contents';
import { CARDIO_QUESTIONS } from '@/data/seed/cardio/questions';
import { CARDIO_CASES } from '@/data/seed/cardio/cases';
import { CARDIO_PATHS } from '@/data/seed/cardio/paths';

import { IM_NODES } from '@/data/seed/im/nodes';
import { IM_EDGES } from '@/data/seed/im/edges';
import { IM_CONTENTS } from '@/data/seed/im/contents';
import { IM_QUESTIONS } from '@/data/seed/im/questions';
import { IM_CASES } from '@/data/seed/im/cases';
import { IM_PATHS } from '@/data/seed/im/paths';

import { DERM_NODES } from '@/data/seed/derm/nodes';
import { DERM_EDGES } from '@/data/seed/derm/edges';
import { DERM_CONTENTS } from '@/data/seed/derm/contents';
import { DERM_QUESTIONS } from '@/data/seed/derm/questions';
import { DERM_CASES } from '@/data/seed/derm/cases';
import { DERM_PATHS } from '@/data/seed/derm/paths';

import { SURG_NODES } from '@/data/seed/surg/nodes';
import { SURG_EDGES } from '@/data/seed/surg/edges';
import { SURG_CONTENTS } from '@/data/seed/surg/contents';
import { SURG_QUESTIONS } from '@/data/seed/surg/questions';
import { SURG_CASES } from '@/data/seed/surg/cases';
import { SURG_PATHS } from '@/data/seed/surg/paths';

import { NEURO_NODES } from '@/data/seed/neuro/nodes';
import { NEURO_EDGES } from '@/data/seed/neuro/edges';
import { NEURO_CONTENTS } from '@/data/seed/neuro/contents';
import { NEURO_QUESTIONS } from '@/data/seed/neuro/questions';
import { NEURO_CASES } from '@/data/seed/neuro/cases';
import { NEURO_PATHS } from '@/data/seed/neuro/paths';

import { ONCO_NODES } from '@/data/seed/onco/nodes';
import { ONCO_EDGES } from '@/data/seed/onco/edges';
import { ONCO_CONTENTS } from '@/data/seed/onco/contents';
import { ONCO_QUESTIONS } from '@/data/seed/onco/questions';
import { ONCO_CASES } from '@/data/seed/onco/cases';
import { ONCO_PATHS } from '@/data/seed/onco/paths';

import { ECC_NODES } from '@/data/seed/ecc/nodes';
import { ECC_EDGES } from '@/data/seed/ecc/edges';
import { ECC_CONTENTS } from '@/data/seed/ecc/contents';
import { ECC_QUESTIONS } from '@/data/seed/ecc/questions';
import { ECC_CASES } from '@/data/seed/ecc/cases';
import { ECC_PATHS } from '@/data/seed/ecc/paths';

import { CPATH_NODES } from '@/data/seed/cpath/nodes';
import { CPATH_EDGES } from '@/data/seed/cpath/edges';
import { CPATH_CONTENTS } from '@/data/seed/cpath/contents';
import { CPATH_QUESTIONS } from '@/data/seed/cpath/questions';
import { CPATH_CASES } from '@/data/seed/cpath/cases';
import { CPATH_PATHS } from '@/data/seed/cpath/paths';

import { CROSS_SPECIALTY_EDGES } from '@/data/seed/cross-specialty-edges';

import type { KnowledgeNode, KnowledgeEdge, NodeContent, LearningPath } from '@/types/knowledge';
import type { ReviewQuestion } from '@/types/quiz';
import type { CaseChallenge } from '@/types/case';

import * as fs from 'fs';
import * as path from 'path';

// ═══════════════════════════════════════════
// 類型定義
// ═══════════════════════════════════════════

interface SpecialtyData {
  key: string;
  label: string;
  nodes: KnowledgeNode[];
  edges: KnowledgeEdge[];
  contents: Map<string, NodeContent>;
  questions: ReviewQuestion[];
  cases: CaseChallenge[];
  paths: LearningPath[];
}

interface DimensionScore {
  score: number;
  maxScore: number;
  issues: string[];
}

interface SpecialtyReport {
  key: string;
  label: string;
  nodeCount: number;
  dimensions: {
    structure: DimensionScore;
    contentDepth: DimensionScore;
    edgeIntegrity: DimensionScore;
    references: DimensionScore;
    questionCoverage: DimensionScore;
    caseQuality: DimensionScore;
    pathCompleteness: DimensionScore;
    taiwanRelevance: DimensionScore;
    bodySections: DimensionScore;
    diseaseDataFields: DimensionScore;
  };
  totalScore: number;
}

interface AuditReport {
  timestamp: string;
  totalScore: number;
  specialties: SpecialtyReport[];
  allIssues: string[];
  summary: {
    totalNodes: number;
    totalEdges: number;
    totalQuestions: number;
    totalCases: number;
    totalPaths: number;
    crossSpecialtyEdges: number;
  };
}

// ═══════════════════════════════════════════
// 資料組裝
// ═══════════════════════════════════════════

const SPECIALTIES: SpecialtyData[] = [
  { key: 'CARDIO', label: '心臟科', nodes: CARDIO_NODES, edges: CARDIO_EDGES, contents: CARDIO_CONTENTS, questions: CARDIO_QUESTIONS, cases: CARDIO_CASES, paths: CARDIO_PATHS },
  { key: 'IM', label: '內科', nodes: IM_NODES, edges: IM_EDGES, contents: IM_CONTENTS, questions: IM_QUESTIONS, cases: IM_CASES, paths: IM_PATHS },
  { key: 'DERM', label: '皮膚科', nodes: DERM_NODES, edges: DERM_EDGES, contents: DERM_CONTENTS, questions: DERM_QUESTIONS, cases: DERM_CASES, paths: DERM_PATHS },
  { key: 'SURG', label: '外科', nodes: SURG_NODES, edges: SURG_EDGES, contents: SURG_CONTENTS, questions: SURG_QUESTIONS, cases: SURG_CASES, paths: SURG_PATHS },
  { key: 'NEURO', label: '神經科', nodes: NEURO_NODES, edges: NEURO_EDGES, contents: NEURO_CONTENTS, questions: NEURO_QUESTIONS, cases: NEURO_CASES, paths: NEURO_PATHS },
  { key: 'ONCO', label: '腫瘤科', nodes: ONCO_NODES, edges: ONCO_EDGES, contents: ONCO_CONTENTS, questions: ONCO_QUESTIONS, cases: ONCO_CASES, paths: ONCO_PATHS },
  { key: 'ECC', label: '急診加護', nodes: ECC_NODES, edges: ECC_EDGES, contents: ECC_CONTENTS, questions: ECC_QUESTIONS, cases: ECC_CASES, paths: ECC_PATHS },
  { key: 'CPATH', label: '臨床病理', nodes: CPATH_NODES, edges: CPATH_EDGES, contents: CPATH_CONTENTS, questions: CPATH_QUESTIONS, cases: CPATH_CASES, paths: CPATH_PATHS },
];

const ALL_EDGES: KnowledgeEdge[] = [
  ...SPECIALTIES.flatMap((s) => s.edges),
  ...CROSS_SPECIALTY_EDGES,
];

const ALL_NODES: KnowledgeNode[] = SPECIALTIES.flatMap((s) => s.nodes);

// ═══════════════════════════════════════════
// 審計函數
// ═══════════════════════════════════════════

/** 維度 1：結構完整性 */
function auditStructure(sp: SpecialtyData): DimensionScore {
  const issues: string[] = [];
  let deductions = 0;

  // 1a. 節點 ID 格式檢查
  const idPattern = new RegExp(`^${sp.key}-L[0-5]-\\d{3}$`);
  for (const node of sp.nodes) {
    if (!idPattern.test(node.id)) {
      issues.push(`[${sp.key}] ${node.id} — ID 格式不符 (期望 ${sp.key}-L{0-5}-{###})`);
      deductions += 2;
    }
  }

  // 1b. 層級分布檢查 (CPATH 豁免 L0/L3)
  const layerCounts = new Map<number, number>();
  for (const node of sp.nodes) {
    layerCounts.set(node.layer, (layerCounts.get(node.layer) ?? 0) + 1);
  }

  const requiredLayers = sp.key === 'CPATH'
    ? [{ layer: 1, min: 2 }, { layer: 2, min: 1 }, { layer: 4, min: 2 }]
    : [
        { layer: 0, min: 1 }, { layer: 1, min: 2 }, { layer: 2, min: 2 },
        { layer: 3, min: 3 }, { layer: 4, min: 2 }, { layer: 5, min: 2 },
      ];

  for (const { layer, min } of requiredLayers) {
    const count = layerCounts.get(layer) ?? 0;
    if (count < min) {
      issues.push(`[${sp.key}] L${layer} 節點不足: ${count}/${min}`);
      deductions += 5;
    }
  }

  // 1c. 難度分布檢查
  for (const node of sp.nodes) {
    const layer = node.layer;
    const diff = node.difficulty;
    const expectedRanges: Record<number, [number, number]> = {
      0: [1, 1], 1: [1, 2], 2: [2, 3], 3: [3, 4], 4: [3, 5], 5: [4, 5],
    };
    const [minD, maxD] = expectedRanges[layer] ?? [1, 5];
    if (diff < minD || diff > maxD) {
      issues.push(`[${sp.key}] ${node.id} — 難度 ${diff} 超出 L${layer} 預期範圍 [${minD}-${maxD}]`);
      deductions += 1;
    }
  }

  return { score: Math.max(0, 100 - deductions), maxScore: 100, issues };
}

/** 維度 2：內容深度 */
function auditContentDepth(sp: SpecialtyData): DimensionScore {
  const issues: string[] = [];
  let totalChecks = 0;
  let passedChecks = 0;

  for (const node of sp.nodes) {
    const content = sp.contents.get(node.id);
    totalChecks += 7; // 7-aspect check

    if (!content) {
      issues.push(`[${sp.key}] ${node.id} — 缺少 NodeContent`);
      continue;
    }

    // Aspect 1: summary
    if (content.summary && content.summary.length >= 20) passedChecks++;
    else issues.push(`[${sp.key}] ${node.id} — summary 過短或缺失 (${content.summary?.length ?? 0} chars)`);

    // Aspect 2: learning_objectives
    if (content.learning_objectives && content.learning_objectives.length >= 3) passedChecks++;
    else issues.push(`[${sp.key}] ${node.id} — learning_objectives < 3 (有 ${content.learning_objectives?.length ?? 0})`);

    // Aspect 3: key_points
    if (content.key_points && content.key_points.length >= 3) passedChecks++;
    else issues.push(`[${sp.key}] ${node.id} — key_points < 3 (有 ${content.key_points?.length ?? 0})`);

    // Aspect 4: body (字數)
    const bodyLen = content.body?.length ?? 0;
    if (bodyLen >= 500) passedChecks++;
    else issues.push(`[${sp.key}] ${node.id} — body 字數 ${bodyLen} < 500`);

    // Aspect 5: clinical_pearl
    if (content.clinical_pearl && content.clinical_pearl.length >= 10) passedChecks++;
    else issues.push(`[${sp.key}] ${node.id} — clinical_pearl 缺失或過短`);

    // Aspect 6: common_mistakes
    if (content.common_mistakes && content.common_mistakes.length >= 2) passedChecks++;
    else issues.push(`[${sp.key}] ${node.id} — common_mistakes < 2`);

    // Aspect 7: references
    if (content.references && content.references.length >= 3) passedChecks++;
    else issues.push(`[${sp.key}] ${node.id} — references < 3 (有 ${content.references?.length ?? 0})`);
  }

  const score = totalChecks > 0 ? Math.round((passedChecks / totalChecks) * 100) : 0;
  return { score, maxScore: 100, issues };
}

/** 維度 3：邊完整性 */
function auditEdgeIntegrity(sp: SpecialtyData): DimensionScore {
  const issues: string[] = [];
  let deductions = 0;

  const nodeIds = new Set(sp.nodes.map((n) => n.id));
  const allNodeIds = new Set(ALL_NODES.map((n) => n.id));

  // 3a. 每個 L3 節點需 ≥1 條邊從 L1/L2 指向它 (prerequisite/builds_on/clinical_apply)
  const l3Nodes = sp.nodes.filter((n) => n.layer === 3);
  const incomingTypes = new Set(['prerequisite', 'builds_on', 'clinical_apply']);
  for (const node of l3Nodes) {
    const hasIncoming = ALL_EDGES.some(
      (e) =>
        e.target_node_id === node.id &&
        incomingTypes.has(e.relation_type) &&
        ALL_NODES.some((n) => n.id === e.source_node_id && n.layer < 3)
    );
    if (!hasIncoming) {
      issues.push(`[${sp.key}] ${node.id} — L3 缺少來自 L1/L2 的先修邊`);
      deductions += 5;
    }
  }

  // 3b. 每個 L3 節點需 ≥1 條邊連向 L4 (clinical_apply 或任意方向)
  for (const node of l3Nodes) {
    const hasL4Link = ALL_EDGES.some((e) => {
      const otherNodeId = e.source_node_id === node.id ? e.target_node_id
        : e.target_node_id === node.id ? e.source_node_id
        : null;
      if (!otherNodeId) return false;
      return ALL_NODES.some((n) => n.id === otherNodeId && n.layer === 4);
    });
    if (!hasL4Link) {
      issues.push(`[${sp.key}] ${node.id} — L3 缺少連向 L4 的邊`);
      deductions += 5;
    }
  }

  // 3c. 邊的端點必須存在
  for (const edge of sp.edges) {
    if (!allNodeIds.has(edge.source_node_id)) {
      issues.push(`[${sp.key}] Edge ${edge.id} — source ${edge.source_node_id} 不存在`);
      deductions += 3;
    }
    if (!allNodeIds.has(edge.target_node_id)) {
      issues.push(`[${sp.key}] Edge ${edge.id} — target ${edge.target_node_id} 不存在`);
      deductions += 3;
    }
  }

  // 3d. 孤兒節點檢查（無任何邊連接的節點）
  for (const node of sp.nodes) {
    const hasEdge = ALL_EDGES.some(
      (e) => e.source_node_id === node.id || e.target_node_id === node.id
    );
    if (!hasEdge && node.layer !== 0) {
      issues.push(`[${sp.key}] ${node.id} — 孤兒節點（無任何邊連接）`);
      deductions += 3;
    }
  }

  return { score: Math.max(0, 100 - deductions), maxScore: 100, issues };
}

/** 維度 4：參考文獻品質 */
function auditReferences(sp: SpecialtyData): DimensionScore {
  const issues: string[] = [];
  let nodesWithFullRefs = 0;
  const totalContentNodes = sp.nodes.length;

  for (const node of sp.nodes) {
    const content = sp.contents.get(node.id);
    if (!content) continue;

    const refs = content.references ?? [];
    if (refs.length < 3) {
      issues.push(`[${sp.key}] ${node.id} — references ${refs.length}/3`);
      continue;
    }

    const types = new Set(refs.map((r) => r.type));
    const hasTextbook = types.has('textbook');
    const hasGuideline = types.has('guideline') || types.has('consensus');
    const hasJournal = types.has('journal');

    if (!hasTextbook) issues.push(`[${sp.key}] ${node.id} — 缺少 textbook 類型 reference`);
    if (!hasGuideline) issues.push(`[${sp.key}] ${node.id} — 缺少 guideline/consensus 類型 reference`);
    if (!hasJournal) issues.push(`[${sp.key}] ${node.id} — 缺少 journal 類型 reference`);

    if (hasTextbook && hasGuideline && hasJournal && refs.length >= 3) {
      nodesWithFullRefs++;
    }
  }

  const score = totalContentNodes > 0
    ? Math.round((nodesWithFullRefs / totalContentNodes) * 100)
    : 0;
  return { score, maxScore: 100, issues };
}

/** 維度 5：題目覆蓋 */
function auditQuestionCoverage(sp: SpecialtyData): DimensionScore {
  const issues: string[] = [];
  let nodesWithEnoughQs = 0;

  for (const node of sp.nodes) {
    const nodeQuestions = sp.questions.filter((q) => q.node_id === node.id);
    if (nodeQuestions.length < 3) {
      issues.push(`[${sp.key}] ${node.id} — 題目 ${nodeQuestions.length}/3`);
    } else {
      nodesWithEnoughQs++;
    }
  }

  // 整體難度分布
  const difficulties = sp.questions.map((q) => q.difficulty);
  const diffSpread = new Set(difficulties);
  if (diffSpread.size < 3) {
    issues.push(`[${sp.key}] 題目難度分布不足：僅有 ${[...diffSpread].join(',')} 級`);
  }

  // case_based 題型
  const hasCaseBased = sp.questions.some((q) => q.question_type === 'case_based');
  if (!hasCaseBased) {
    issues.push(`[${sp.key}] 缺少 case_based 題型`);
  }

  const score = sp.nodes.length > 0
    ? Math.round((nodesWithEnoughQs / sp.nodes.length) * 100)
    : 0;
  return { score, maxScore: 100, issues };
}

/** 維度 6：病例品質 */
function auditCaseQuality(sp: SpecialtyData): DimensionScore {
  const issues: string[] = [];
  let deductions = 0;

  // 6a. 每專科 ≥2 cases
  if (sp.cases.length < 2) {
    issues.push(`[${sp.key}] 病例數 ${sp.cases.length}/2`);
    deductions += 20;
  }

  for (const c of sp.cases) {
    // 6b. 每 case ≥5 steps
    if (c.steps.length < 5) {
      issues.push(`[${sp.key}] Case ${c.id} — steps ${c.steps.length}/5`);
      deductions += 10;
    }

    // 6c. expert_pathway 存在
    if (!c.expert_pathway) {
      issues.push(`[${sp.key}] Case ${c.id} — 缺少 expert_pathway`);
      deductions += 5;
    }

    // 6d. required_nodes 指向有效節點
    for (const reqNodeId of c.required_nodes ?? []) {
      if (!ALL_NODES.some((n) => n.id === reqNodeId)) {
        issues.push(`[${sp.key}] Case ${c.id} — required_node ${reqNodeId} 不存在`);
        deductions += 2;
      }
    }
  }

  return { score: Math.max(0, 100 - deductions), maxScore: 100, issues };
}

/** 維度 7：學習路徑完整性 */
function auditPathCompleteness(sp: SpecialtyData): DimensionScore {
  const issues: string[] = [];
  let deductions = 0;

  // 7a. 每專科 ≥2 paths
  if (sp.paths.length < 2) {
    issues.push(`[${sp.key}] 學習路徑 ${sp.paths.length}/2`);
    deductions += 25;
  }

  for (const p of sp.paths) {
    // 7b. 有 milestones
    if (!p.milestones || p.milestones.length === 0) {
      issues.push(`[${sp.key}] Path ${p.id} — 缺少 milestones`);
      deductions += 10;
    }

    // 7c. path_nodes 指向有效節點
    for (const pn of p.path_nodes ?? []) {
      if (!ALL_NODES.some((n) => n.id === pn.node_id)) {
        issues.push(`[${sp.key}] Path ${p.id} — path_nodes 包含不存在的 ${pn.node_id}`);
        deductions += 2;
      }
    }
  }

  return { score: Math.max(0, 100 - deductions), maxScore: 100, issues };
}

/** 維度 8：台灣在地化 */
function auditTaiwanRelevance(sp: SpecialtyData): DimensionScore {
  const issues: string[] = [];
  const l3Nodes = sp.nodes.filter((n) => n.layer === 3);
  let localizedCount = 0;

  for (const node of l3Nodes) {
    const content = sp.contents.get(node.id);
    if (!content) continue;

    const fullText = [
      content.summary ?? '',
      content.body ?? '',
      content.clinical_pearl ?? '',
      ...(content.key_points ?? []),
    ].join(' ');

    const hasTaiwanRef = /台灣|亞熱帶|本土|在地|盛行率|流行病學|高溫多濕|taiwan/i.test(fullText);
    const hasSpecies = /犬|貓|canine|feline|犬貓|dog|cat/i.test(fullText);

    if (hasTaiwanRef && hasSpecies) {
      localizedCount++;
    } else {
      const missing: string[] = [];
      if (!hasTaiwanRef) missing.push('台灣在地化資料');
      if (!hasSpecies) missing.push('物種標註');
      issues.push(`[${sp.key}] ${node.id} — 缺少 ${missing.join(' + ')}`);
    }
  }

  const score = l3Nodes.length > 0
    ? Math.round((localizedCount / l3Nodes.length) * 100)
    : 100; // 無 L3 節點的專科（如 CPATH）給滿分
  return { score, maxScore: 100, issues };
}

/** 維度 9：Body 章節完整性（僅 L3 節點） */
function auditBodySections(sp: SpecialtyData): DimensionScore {
  const issues: string[] = [];
  const l3Nodes = sp.nodes.filter((n) => n.layer === 3);

  if (l3Nodes.length === 0) {
    return { score: 100, maxScore: 100, issues };
  }

  let totalDeductions = 0;
  let nodeCount = 0;

  for (const node of l3Nodes) {
    const content = sp.contents.get(node.id);
    if (!content || !content.body) {
      issues.push(`[${sp.key}] ${node.id} — L3 節點缺少 body 內容`);
      totalDeductions += 100; // full penalty for missing body
      nodeCount++;
      continue;
    }

    nodeCount++;
    let nodeDeductions = 0;

    // Split body by ## headers only (ignore ### sub-headers for section completeness)
    // A ## section's content = everything from that ## to the next ##, including any ### sub-headers
    const h2Pattern = /^##\s+[^#].+$/gm;
    const h2Headers: { title: string; index: number }[] = [];
    let match: RegExpExecArray | null;
    while ((match = h2Pattern.exec(content.body)) !== null) {
      h2Headers.push({ title: match[0].trim(), index: match.index });
    }

    // Check content between consecutive ## headers
    for (let i = 0; i < h2Headers.length - 1; i++) {
      const startIdx = h2Headers[i].index + h2Headers[i].title.length;
      const endIdx = h2Headers[i + 1].index;
      // Strip out any ### sub-header lines that are just repeats of the ## title
      const rawContent = content.body.slice(startIdx, endIdx);
      // Remove duplicate ### with same section number (e.g., ### 一、... when ## 一、... exists)
      const cleanedContent = rawContent
        .replace(/^###\s+.+$/gm, (line) => {
          // Keep the ### line's text in content calculation only if it adds info
          return line;
        })
        .trim();

      // Meaningful content = everything minus header-like lines, counting actual text
      const textOnly = cleanedContent
        .replace(/^#{1,3}\s+.+$/gm, '') // remove all header lines
        .replace(/\[圖片:[^\]]*\]/g, '') // remove image placeholders
        .trim();

      if (textOnly.length < 10) {
        issues.push(`[${sp.key}] ${node.id} — Body 空章節: "${h2Headers[i].title}" (僅 ${textOnly.length} chars 實質內容)`);
        nodeDeductions += 5;
      }
    }

    // Check last ## header section (from last header to end of body)
    if (h2Headers.length > 0) {
      const lastHeader = h2Headers[h2Headers.length - 1];
      const lastRaw = content.body.slice(lastHeader.index + lastHeader.title.length);
      const lastText = lastRaw
        .replace(/^#{1,3}\s+.+$/gm, '')
        .replace(/\[圖片:[^\]]*\]/g, '')
        .trim();
      if (lastText.length < 10) {
        issues.push(`[${sp.key}] ${node.id} — Body 空章節: "${lastHeader.title}" (僅 ${lastText.length} chars 實質內容)`);
        nodeDeductions += 5;
      }
    }

    totalDeductions += Math.min(nodeDeductions, 100); // cap per node at 100
  }

  const avgDeduction = nodeCount > 0 ? totalDeductions / nodeCount : 0;
  const score = Math.max(0, Math.round(100 - avgDeduction));
  return { score, maxScore: 100, issues };
}

/** 維度 10：疾病資料欄位完整性（僅 disease 類型節點） */
function auditDiseaseDataFields(sp: SpecialtyData): DimensionScore {
  const issues: string[] = [];
  const diseaseNodes = sp.nodes.filter((n) => n.node_type === 'disease');

  if (diseaseNodes.length === 0) {
    return { score: 100, maxScore: 100, issues };
  }

  let totalPassed = 0;
  let totalChecked = 0;

  for (const node of diseaseNodes) {
    const content = sp.contents.get(node.id);
    if (!content || !content.disease_data) {
      issues.push(`[${sp.key}] ${node.id} — disease 節點缺少 disease_data`);
      totalChecked += 11;
      continue;
    }

    const dd = content.disease_data;

    // signalment: >=20 chars
    totalChecked++;
    if ((dd.signalment?.length ?? 0) >= 20) {
      totalPassed++;
    } else {
      issues.push(`[${sp.key}] ${node.id} — disease_data.signalment 過短 (${dd.signalment?.length ?? 0}/20 chars)`);
    }

    // etiology: >=30 chars
    totalChecked++;
    if ((dd.etiology?.length ?? 0) >= 30) {
      totalPassed++;
    } else {
      issues.push(`[${sp.key}] ${node.id} — disease_data.etiology 過短 (${dd.etiology?.length ?? 0}/30 chars)`);
    }

    // pathogenesis: >=30 chars
    totalChecked++;
    if ((dd.pathogenesis?.length ?? 0) >= 30) {
      totalPassed++;
    } else {
      issues.push(`[${sp.key}] ${node.id} — disease_data.pathogenesis 過短 (${dd.pathogenesis?.length ?? 0}/30 chars)`);
    }

    // clinical_signs: >=3 items
    totalChecked++;
    if ((dd.clinical_signs?.length ?? 0) >= 3) {
      totalPassed++;
    } else {
      issues.push(`[${sp.key}] ${node.id} — disease_data.clinical_signs < 3 (${dd.clinical_signs?.length ?? 0})`);
    }

    // staging: null is OK (skip)
    if (dd.staging !== null) {
      totalChecked++;
      totalPassed++; // If non-null, it exists — count as passed
    }
    // When null, skip entirely (not counted)

    // differential_diagnosis: >=2 items
    totalChecked++;
    if ((dd.differential_diagnosis?.length ?? 0) >= 2) {
      totalPassed++;
    } else {
      issues.push(`[${sp.key}] ${node.id} — disease_data.differential_diagnosis < 2 (${dd.differential_diagnosis?.length ?? 0})`);
    }

    // diagnostic_workup: >=50 chars
    totalChecked++;
    if ((dd.diagnostic_workup?.length ?? 0) >= 50) {
      totalPassed++;
    } else {
      issues.push(`[${sp.key}] ${node.id} — disease_data.diagnostic_workup 過短 (${dd.diagnostic_workup?.length ?? 0}/50 chars)`);
    }

    // treatment_protocol: >=50 chars
    totalChecked++;
    if ((dd.treatment_protocol?.length ?? 0) >= 50) {
      totalPassed++;
    } else {
      issues.push(`[${sp.key}] ${node.id} — disease_data.treatment_protocol 過短 (${dd.treatment_protocol?.length ?? 0}/50 chars)`);
    }

    // prognosis: >=20 chars
    totalChecked++;
    if ((dd.prognosis?.length ?? 0) >= 20) {
      totalPassed++;
    } else {
      issues.push(`[${sp.key}] ${node.id} — disease_data.prognosis 過短 (${dd.prognosis?.length ?? 0}/20 chars)`);
    }

    // monitoring: >=20 chars
    totalChecked++;
    if ((dd.monitoring?.length ?? 0) >= 20) {
      totalPassed++;
    } else {
      issues.push(`[${sp.key}] ${node.id} — disease_data.monitoring 過短 (${dd.monitoring?.length ?? 0}/20 chars)`);
    }

    // owner_communication: >=20 chars
    totalChecked++;
    if ((dd.owner_communication?.length ?? 0) >= 20) {
      totalPassed++;
    } else {
      issues.push(`[${sp.key}] ${node.id} — disease_data.owner_communication 過短 (${dd.owner_communication?.length ?? 0}/20 chars)`);
    }
  }

  const score = totalChecked > 0 ? Math.round((totalPassed / totalChecked) * 100) : 100;
  return { score, maxScore: 100, issues };
}

// ═══════════════════════════════════════════
// 主程式
// ═══════════════════════════════════════════

function auditSpecialty(sp: SpecialtyData): SpecialtyReport {
  const dimensions = {
    structure: auditStructure(sp),
    contentDepth: auditContentDepth(sp),
    edgeIntegrity: auditEdgeIntegrity(sp),
    references: auditReferences(sp),
    questionCoverage: auditQuestionCoverage(sp),
    caseQuality: auditCaseQuality(sp),
    pathCompleteness: auditPathCompleteness(sp),
    taiwanRelevance: auditTaiwanRelevance(sp),
    bodySections: auditBodySections(sp),
    diseaseDataFields: auditDiseaseDataFields(sp),
  };

  const scores = Object.values(dimensions).map((d) => d.score);
  const totalScore = Math.round(scores.reduce((a, b) => a + b, 0) / scores.length);

  return {
    key: sp.key,
    label: sp.label,
    nodeCount: sp.nodes.length,
    dimensions,
    totalScore,
  };
}

function makeBar(score: number, width: number = 20): string {
  const filled = Math.round((score / 100) * width);
  const empty = width - filled;
  return '█'.repeat(filled) + '░'.repeat(empty);
}

function run(): void {
  console.log('\n═══════════════════════════════════════════════════');
  console.log('  VetKnowledgeTree 品質審計報告');
  console.log('  Timestamp:', new Date().toISOString());
  console.log('═══════════════════════════════════════════════════\n');

  const reports: SpecialtyReport[] = SPECIALTIES.map(auditSpecialty);
  const allIssues: string[] = [];

  const totalNodes = SPECIALTIES.reduce((sum, sp) => sum + sp.nodes.length, 0);
  const totalEdges = ALL_EDGES.length;
  const totalQuestions = SPECIALTIES.reduce((sum, sp) => sum + sp.questions.length, 0);
  const totalCases = SPECIALTIES.reduce((sum, sp) => sum + sp.cases.length, 0);
  const totalPaths = SPECIALTIES.reduce((sum, sp) => sum + sp.paths.length, 0);

  console.log(`📊 總覽：${totalNodes} nodes | ${totalEdges} edges | ${totalQuestions} questions | ${totalCases} cases | ${totalPaths} paths | ${CROSS_SPECIALTY_EDGES.length} cross-edges\n`);

  for (const report of reports) {
    const icon = report.totalScore >= 95 ? '✅' : report.totalScore >= 80 ? '⚠️' : '❌';
    console.log(`${icon} [${report.key}] ${report.label} (${report.nodeCount} nodes) — ${report.totalScore}/100 ${makeBar(report.totalScore)}`);

    const dimNames: Record<string, string> = {
      structure: '結構完整性',
      contentDepth: '內容深度  ',
      edgeIntegrity: '邊完整性  ',
      references: '參考文獻  ',
      questionCoverage: '題目覆蓋  ',
      caseQuality: '病例品質  ',
      pathCompleteness: '學習路徑  ',
      taiwanRelevance: '台灣在地化',
      bodySections: 'Body章節完整',
      diseaseDataFields: '疾病資料完整',
    };

    for (const [dimKey, dimScore] of Object.entries(report.dimensions)) {
      const dimIcon = dimScore.score >= 95 ? '  ✅' : dimScore.score >= 80 ? '  ⚠️' : '  ❌';
      console.log(`${dimIcon} ${dimNames[dimKey] ?? dimKey}: ${dimScore.score}`);
      allIssues.push(...dimScore.issues);
    }
    console.log('');
  }

  // 總分
  const grandTotal = Math.round(reports.reduce((sum, r) => sum + r.totalScore, 0) / reports.length);
  const grandIcon = grandTotal >= 95 ? '🏆' : grandTotal >= 80 ? '📈' : '🔧';
  console.log('═══════════════════════════════════════════════════');
  console.log(`${grandIcon} 總分：${grandTotal}/100`);
  console.log('═══════════════════════════════════════════════════\n');

  // 待修項目清單 (最多顯示 50 項)
  if (allIssues.length > 0) {
    console.log(`\n📝 待修項目清單 (共 ${allIssues.length} 項，顯示前 50 項)：`);
    console.log('───────────────────────────────────────────────────');
    for (const issue of allIssues.slice(0, 50)) {
      console.log(`  • ${issue}`);
    }
    if (allIssues.length > 50) {
      console.log(`  ... 還有 ${allIssues.length - 50} 項（見 JSON 報告）`);
    }
  }

  // 寫入 JSON 報告
  const auditReport: AuditReport = {
    timestamp: new Date().toISOString(),
    totalScore: grandTotal,
    specialties: reports,
    allIssues,
    summary: {
      totalNodes,
      totalEdges,
      totalQuestions,
      totalCases,
      totalPaths,
      crossSpecialtyEdges: CROSS_SPECIALTY_EDGES.length,
    },
  };

  const logDir = path.join(process.cwd(), 'scripts', 'audit-logs');
  if (!fs.existsSync(logDir)) {
    fs.mkdirSync(logDir, { recursive: true });
  }

  const logFile = path.join(logDir, `audit-${new Date().toISOString().slice(0, 10)}.json`);
  fs.writeFileSync(logFile, JSON.stringify(auditReport, null, 2), 'utf-8');
  console.log(`\n💾 JSON 報告已寫入: ${logFile}`);

  // Exit code: 0 if ≥95, 1 otherwise
  process.exit(grandTotal >= 95 ? 0 : 1);
}

run();
