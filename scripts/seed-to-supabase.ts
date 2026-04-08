/**
 * Seed all tree data into Supabase
 * Run with: npx tsx scripts/seed-to-supabase.ts
 */
import { createClient } from '@supabase/supabase-js';
import * as fs from 'fs';
import * as path from 'path';

// Read env - try tree's .env.local first, fall back to hostrain's for service role key
const treeEnvPath = path.resolve(__dirname, '..', '.env.local');
const hostrainEnvPath = path.resolve(__dirname, '..', '..', 'hostrain', '.env.local');
const treeEnv = fs.readFileSync(treeEnvPath, 'utf8');
const hostrainEnv = fs.existsSync(hostrainEnvPath) ? fs.readFileSync(hostrainEnvPath, 'utf8') : '';

const getEnv = (key: string): string => {
  // Try tree env first
  let match = treeEnv.match(new RegExp(`${key}=(.+)`));
  if (match && !match[1].trim().startsWith('your_')) return match[1].trim();
  // Fall back to hostrain env
  match = hostrainEnv.match(new RegExp(`${key}=(.+)`));
  if (match && !match[1].trim().startsWith('your_')) return match[1].trim();
  throw new Error(`Missing ${key} in both .env.local files`);
};

const supabase = createClient(
  getEnv('NEXT_PUBLIC_SUPABASE_URL'),
  getEnv('SUPABASE_SERVICE_ROLE_KEY')  // service role bypasses RLS
);

// Import all seed data
import { CARDIO_NODES } from '../src/data/seed/cardio/nodes';
import { CARDIO_EDGES } from '../src/data/seed/cardio/edges';
import { CARDIO_QUESTIONS } from '../src/data/seed/cardio/questions';
import { CARDIO_CASES } from '../src/data/seed/cardio/cases';
import { CARDIO_PATHS } from '../src/data/seed/cardio/paths';

import { CPATH_NODES } from '../src/data/seed/cpath/nodes';
import { CPATH_EDGES } from '../src/data/seed/cpath/edges';
import { CPATH_QUESTIONS } from '../src/data/seed/cpath/questions';
import { CPATH_CASES } from '../src/data/seed/cpath/cases';
import { CPATH_PATHS } from '../src/data/seed/cpath/paths';

import { IM_NODES } from '../src/data/seed/im/nodes';
import { IM_EDGES } from '../src/data/seed/im/edges';
import { IM_QUESTIONS } from '../src/data/seed/im/questions';
import { IM_CASES } from '../src/data/seed/im/cases';
import { IM_PATHS } from '../src/data/seed/im/paths';

import { DERM_NODES } from '../src/data/seed/derm/nodes';
import { DERM_EDGES } from '../src/data/seed/derm/edges';
import { DERM_QUESTIONS } from '../src/data/seed/derm/questions';
import { DERM_CASES } from '../src/data/seed/derm/cases';
import { DERM_PATHS } from '../src/data/seed/derm/paths';

import { SURG_NODES } from '../src/data/seed/surg/nodes';
import { SURG_EDGES } from '../src/data/seed/surg/edges';
import { SURG_QUESTIONS } from '../src/data/seed/surg/questions';
import { SURG_CASES } from '../src/data/seed/surg/cases';
import { SURG_PATHS } from '../src/data/seed/surg/paths';

import { NEURO_NODES } from '../src/data/seed/neuro/nodes';
import { NEURO_EDGES } from '../src/data/seed/neuro/edges';
import { NEURO_QUESTIONS } from '../src/data/seed/neuro/questions';
import { NEURO_CASES } from '../src/data/seed/neuro/cases';
import { NEURO_PATHS } from '../src/data/seed/neuro/paths';

import { ONCO_NODES } from '../src/data/seed/onco/nodes';
import { ONCO_EDGES } from '../src/data/seed/onco/edges';
import { ONCO_QUESTIONS } from '../src/data/seed/onco/questions';
import { ONCO_CASES } from '../src/data/seed/onco/cases';
import { ONCO_PATHS } from '../src/data/seed/onco/paths';

import { ECC_NODES } from '../src/data/seed/ecc/nodes';
import { ECC_EDGES } from '../src/data/seed/ecc/edges';
import { ECC_QUESTIONS } from '../src/data/seed/ecc/questions';
import { ECC_CASES } from '../src/data/seed/ecc/cases';
import { ECC_PATHS } from '../src/data/seed/ecc/paths';

import { CROSS_SPECIALTY_EDGES } from '../src/data/seed/cross-specialty-edges';
import { CROSS_SPECIALTY_PATHS } from '../src/data/seed/cross-specialty-paths';

// Combine all data
const allNodes = [
  ...CARDIO_NODES, ...CPATH_NODES, ...IM_NODES, ...DERM_NODES,
  ...SURG_NODES, ...NEURO_NODES, ...ONCO_NODES, ...ECC_NODES,
];

const allEdges = [
  ...CARDIO_EDGES, ...CPATH_EDGES, ...IM_EDGES, ...DERM_EDGES,
  ...SURG_EDGES, ...NEURO_EDGES, ...ONCO_EDGES, ...ECC_EDGES,
  ...CROSS_SPECIALTY_EDGES,
];

const allQuestions = [
  ...CARDIO_QUESTIONS, ...CPATH_QUESTIONS, ...IM_QUESTIONS, ...DERM_QUESTIONS,
  ...SURG_QUESTIONS, ...NEURO_QUESTIONS, ...ONCO_QUESTIONS, ...ECC_QUESTIONS,
];

const allCases = [
  ...CARDIO_CASES, ...CPATH_CASES, ...IM_CASES, ...DERM_CASES,
  ...SURG_CASES, ...NEURO_CASES, ...ONCO_CASES, ...ECC_CASES,
];

const allPaths = [
  ...CARDIO_PATHS, ...CPATH_PATHS, ...IM_PATHS, ...DERM_PATHS,
  ...SURG_PATHS, ...NEURO_PATHS, ...ONCO_PATHS, ...ECC_PATHS,
  ...CROSS_SPECIALTY_PATHS,
];

// Strip fields not in DB schema
function toDbNode(node: Record<string, unknown>) {
  return {
    id: node.id,
    specialty: node.specialty,
    title: node.title,
    title_en: node.title_en ?? null,
    layer: node.layer,
    node_type: node.node_type,
    difficulty: node.difficulty,
    estimated_minutes: node.estimated_minutes,
    clinical_relevance: node.clinical_relevance,
    exam_relevance: node.exam_relevance,
    status: node.status,
    tags: node.tags ?? [],
    content: null,  // content is stored separately in seed
  };
}

function toDbEdge(edge: Record<string, unknown>) {
  return {
    id: edge.id,
    source_node_id: edge.source_node_id,
    target_node_id: edge.target_node_id,
    relation_type: edge.relation_type,
    weight: edge.weight ?? 1,
    description: edge.description ?? null,
    bidirectional: edge.bidirectional ?? false,
  };
}

function toDbQuestion(q: Record<string, unknown>) {
  return {
    id: q.id,
    node_id: q.node_id,
    question_type: q.question_type,
    question: q.question,
    options: q.options ?? null,
    correct_answer: q.correct_answer,
    explanation: q.explanation ?? null,
    difficulty: q.difficulty ?? 3,
    spaced_rep: q.spaced_rep ?? true,
    tags: q.tags ?? [],
  };
}

function toDbCase(c: Record<string, unknown>) {
  return {
    id: c.id,
    title: c.title,
    specialty: c.specialty,
    difficulty: c.difficulty ?? 3,
    species: c.species ?? 'canine',
    scenario: c.scenario,
    steps: c.steps,
    related_node_ids: c.related_node_ids ?? [],
    is_published: c.is_published ?? true,
  };
}

function toDbPath(p: Record<string, unknown>) {
  // learning_paths schema: id, title, description, specialty, path_type, difficulty, estimated_hours, node_ids, is_published
  return {
    id: p.id,
    title: p.title,
    description: p.description ?? null,
    specialty: p.specialty,
    path_type: p.path_type ?? 'beginner',
    difficulty: p.difficulty ?? 3,
    estimated_hours: p.estimated_hours ?? 0,
    node_ids: p.node_ids ?? (p as Record<string, unknown>).path_nodes ?? [],
    is_published: p.is_published ?? true,
  };
}

async function upsertBatch<T extends Record<string, unknown>>(
  table: string,
  data: T[],
  label: string
): Promise<void> {
  if (data.length === 0) {
    console.log(`  ${label}: 0 items, skipping`);
    return;
  }

  // Insert in chunks of 100
  const CHUNK = 100;
  let inserted = 0;
  for (let i = 0; i < data.length; i += CHUNK) {
    const chunk = data.slice(i, i + CHUNK);
    const { error } = await supabase.from(table).upsert(chunk, { onConflict: 'id' });
    if (error) {
      console.error(`  ERROR in ${label} chunk ${i}-${i + chunk.length}:`, error.message);
      // Try one by one to find the problematic record
      for (const item of chunk) {
        const { error: singleErr } = await supabase.from(table).upsert(item, { onConflict: 'id' });
        if (singleErr) {
          console.error(`    Failed record:`, (item as Record<string, unknown>).id, singleErr.message);
        } else {
          inserted++;
        }
      }
    } else {
      inserted += chunk.length;
    }
  }
  console.log(`  ${label}: ${inserted}/${data.length} inserted`);
}

async function main() {
  console.log('=== VetKnowledgeTree Seed to Supabase ===\n');
  console.log(`Nodes: ${allNodes.length}`);
  console.log(`Edges: ${allEdges.length}`);
  console.log(`Questions: ${allQuestions.length}`);
  console.log(`Cases: ${allCases.length}`);
  console.log(`Paths: ${allPaths.length}`);
  console.log('');

  // 1. Nodes first (edges depend on them)
  console.log('[1/5] Inserting knowledge_nodes...');
  await upsertBatch('knowledge_nodes', allNodes.map(n => toDbNode(n as unknown as Record<string, unknown>)), 'nodes');

  // 2. Edges (depend on nodes)
  console.log('[2/5] Inserting knowledge_edges...');
  await upsertBatch('knowledge_edges', allEdges.map(e => toDbEdge(e as unknown as Record<string, unknown>)), 'edges');

  // 3. Questions (depend on nodes)
  console.log('[3/5] Inserting review_questions...');
  await upsertBatch('review_questions', allQuestions.map(q => toDbQuestion(q as unknown as Record<string, unknown>)), 'questions');

  // 4. Cases
  console.log('[4/5] Inserting case_challenges...');
  await upsertBatch('case_challenges', allCases.map(c => toDbCase(c as unknown as Record<string, unknown>)), 'cases');

  // 5. Paths
  console.log('[5/5] Inserting learning_paths...');
  await upsertBatch('learning_paths', allPaths.map(p => toDbPath(p as unknown as Record<string, unknown>)), 'paths');

  console.log('\n=== Seed complete ===');
}

main().catch(console.error);
