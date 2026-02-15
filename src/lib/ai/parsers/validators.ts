import { z } from 'zod/v4';

// --- 骨架驗證 ---

const knowledgeNodeSchema = z.object({
  id: z.string().min(1),
  specialty: z.string().min(1),
  title: z.string().min(1),
  title_en: z.string().nullable().optional(),
  layer: z.number().int().min(0).max(5),
  node_type: z.enum([
    'concept', 'mechanism', 'disease', 'diagnostic',
    'therapeutic', 'procedure', 'case_study', 'decision_tree',
  ]),
  difficulty: z.number().int().min(1).max(5),
  estimated_minutes: z.number().int().min(1),
  clinical_relevance: z.number().int().min(1).max(5),
  exam_relevance: z.number().int().min(1).max(5),
  tags: z.array(z.string()).optional(),
});

export const skeletonOutputSchema = z.object({
  specialty: z.string().min(1),
  total_nodes: z.number().int().min(1),
  estimated_total_hours: z.number().min(0),
  nodes: z.array(knowledgeNodeSchema).min(1),
  validation_report: z.object({
    completeness_score: z.number().min(0).max(1),
    issues_found: z.array(z.string()),
    taiwan_specific_additions: z.array(z.string()),
  }),
});

// --- 內容驗證 ---

export const nodeContentSchema = z.object({
  summary: z.string().min(10),
  learning_objectives: z.array(z.string()).min(1),
  key_points: z.array(z.string()).min(1),
  body: z.string().min(50),
  clinical_pearl: z.string().optional(),
  common_mistakes: z.array(z.string()).optional(),
  references: z.array(z.object({
    type: z.string(),
    citation: z.string(),
    relevance: z.string(),
  })).optional(),
});

export const diseaseDataSchema = z.object({
  signalment: z.string().min(1),
  etiology: z.string().min(1),
  pathogenesis: z.string().min(1),
  clinical_signs: z.array(z.object({
    sign: z.string(),
    category: z.enum(['primary', 'secondary']),
    description: z.string(),
  })),
  differential_diagnosis: z.array(z.object({
    condition: z.string(),
    key_differentiator: z.string(),
  })),
  diagnostic_workup: z.string(),
  treatment_protocol: z.string(),
  prognosis: z.string(),
  monitoring: z.string(),
  owner_communication: z.string(),
});

export const diagnosticDataSchema = z.object({
  indication: z.array(z.string()),
  contraindication: z.array(z.string()),
  technique: z.string(),
  normal_findings: z.array(z.object({
    finding: z.string(),
    description: z.string(),
    significance: z.string(),
  })),
  abnormal_findings: z.array(z.object({
    finding: z.string(),
    description: z.string(),
    significance: z.string(),
  })),
  interpretation_guide: z.string(),
  pitfalls: z.array(z.string()),
});

// --- 邊驗證 ---

export const edgeSchema = z.object({
  source_node_id: z.string().min(1),
  target_node_id: z.string().min(1),
  relation_type: z.enum([
    'prerequisite', 'builds_on', 'cross_specialty', 'differential',
    'clinical_apply', 'complication', 'same_system', 'drug_related',
  ]),
  weight: z.number().min(0).max(1),
  description: z.string().nullable().optional(),
  bidirectional: z.boolean().optional(),
});

export const edgeOutputSchema = z.object({
  edges: z.array(edgeSchema),
  statistics: z.object({
    total_edges: z.number().int(),
    edges_by_type: z.record(z.string(), z.number()),
    orphan_nodes: z.array(z.string()),
    high_connectivity_nodes: z.array(z.object({
      id: z.string(),
      count: z.number(),
    })),
  }),
});

// --- 題目驗證 ---

export const questionSchema = z.object({
  question_type: z.enum(['mcq', 'true_false', 'fill_blank', 'image_label', 'case_based']),
  question: z.string().min(5),
  options: z.array(z.string()).nullable().optional(),
  correct_answer: z.string().min(1),
  explanation: z.string().nullable().optional(),
  difficulty: z.number().int().min(1).max(5),
  spaced_rep: z.boolean().optional(),
  tags: z.array(z.string()).optional(),
});

export const questionsOutputSchema = z.object({
  questions: z.array(questionSchema),
});

// --- 病例驗證 ---

export const caseStepSchema = z.object({
  step_number: z.number().int().min(1).max(7),
  step_type: z.enum([
    'history_collection', 'physical_examination', 'differential_diagnosis',
    'diagnostic_plan', 'result_interpretation', 'treatment_plan', 'case_summary',
  ]),
  title: z.string(),
  prompt: z.string(),
  available_actions: z.array(z.string()),
  correct_actions: z.array(z.string()),
  feedback_correct: z.string(),
  feedback_incorrect: z.string(),
  key_learning_points: z.array(z.string()),
});

export const caseOutputSchema = z.object({
  title: z.string(),
  specialty: z.string(),
  difficulty: z.number().int().min(1).max(5),
  species: z.string(),
  scenario: z.object({
    signalment: z.string(),
    chief_complaint: z.string(),
    brief_history: z.string(),
  }),
  steps: z.array(caseStepSchema).min(1),
});

// --- 通用驗證函數 ---

export type ValidationResult<T> =
  | { success: true; data: T }
  | { success: false; errors: string[] };

export function validate<T>(
  schema: z.ZodType<T>,
  data: unknown
): ValidationResult<T> {
  const result = schema.safeParse(data);
  if (result.success) {
    return { success: true, data: result.data };
  }
  const errors = result.error.issues.map(
    (issue) => `${issue.path.join('.')}: ${issue.message}`
  );
  return { success: false, errors };
}
