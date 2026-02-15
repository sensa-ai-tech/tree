// 六層知識層級
export const LAYERS = [0, 1, 2, 3, 4, 5] as const;
export type Layer = (typeof LAYERS)[number];

export const LAYER_LABELS: Record<Layer, string> = {
  0: '學科總覽',
  1: '基礎科學',
  2: '病理機轉',
  3: '臨床疾病各論',
  4: '診斷方法論',
  5: '治療與管理',
};

export const LAYER_COLORS: Record<Layer, string> = {
  0: '#6366f1',
  1: '#3b82f6',
  2: '#f59e0b',
  3: '#ef4444',
  4: '#10b981',
  5: '#8b5cf6',
};

// 八種節點類型
export type NodeType =
  | 'concept'
  | 'mechanism'
  | 'disease'
  | 'diagnostic'
  | 'therapeutic'
  | 'procedure'
  | 'case_study'
  | 'decision_tree';

export const NODE_TYPE_LABELS: Record<NodeType, string> = {
  concept: '概念',
  mechanism: '機轉',
  disease: '疾病',
  diagnostic: '診斷',
  therapeutic: '治療',
  procedure: '操作',
  case_study: '病例',
  decision_tree: '決策',
};

// 八種邊關聯類型
export type EdgeRelationType =
  | 'prerequisite'
  | 'builds_on'
  | 'cross_specialty'
  | 'differential'
  | 'clinical_apply'
  | 'complication'
  | 'same_system'
  | 'drug_related';

export const EDGE_TYPE_LABELS: Record<EdgeRelationType, string> = {
  prerequisite: '前置依賴',
  builds_on: '延伸進階',
  cross_specialty: '跨科相關',
  differential: '鑑別比較',
  clinical_apply: '臨床應用',
  complication: '併發關聯',
  same_system: '同系統',
  drug_related: '藥物相關',
};

export type NodeStatus = 'draft' | 'review' | 'published';
export type DifficultyLevel = 1 | 2 | 3 | 4 | 5;

// --- 主要介面 ---

export interface KnowledgeNode {
  id: string;
  specialty: string;
  title: string;
  title_en: string | null;
  layer: Layer;
  node_type: NodeType;
  difficulty: DifficultyLevel;
  estimated_minutes: number;
  clinical_relevance: DifficultyLevel;
  exam_relevance: DifficultyLevel;
  status: NodeStatus;
  version: number;
  tags: string[];
  encyclopedia_link: string | null;
  cross_specialty_notes: string | null;
  created_at: string;
  updated_at: string;
}

export interface VisualPlaceholder {
  position: string;
  type: string;
  description: string;
}

export interface InteractivePlaceholder {
  position: string;
  type: string;
  description: string;
}

export interface Reference {
  type: string;
  citation: string;
  relevance: string;
}

// 疾病型資料
export interface ClinicalSign {
  sign: string;
  category: 'primary' | 'secondary';
  description: string;
}

export interface DifferentialDiagnosis {
  condition: string;
  key_differentiator: string;
}

export interface DiseaseData {
  signalment: string;
  etiology: string;
  pathogenesis: string;
  clinical_signs: ClinicalSign[];
  staging: { system: string; stages: string[] } | null;
  differential_diagnosis: DifferentialDiagnosis[];
  diagnostic_workup: string;
  treatment_protocol: string;
  prognosis: string;
  monitoring: string;
  owner_communication: string;
}

// 診斷型資料
export interface Finding {
  finding: string;
  description: string;
  significance: string;
}

export interface DiagnosticData {
  indication: string[];
  contraindication: string[];
  technique: string;
  normal_findings: Finding[];
  abnormal_findings: Finding[];
  interpretation_guide: string;
  pitfalls: string[];
  sensitivity_specificity: string;
  cost_benefit: string;
}

// 操作型資料
export interface Equipment {
  name: string;
  description: string;
  required: boolean;
}

export interface ProcedureStep {
  step_number: number;
  title: string;
  description: string;
  tips: string[];
  image_placeholder: string | null;
}

export interface Complication {
  complication: string;
  frequency: string;
  management: string;
}

export interface ProcedureData {
  equipment: Equipment[];
  patient_preparation: string;
  step_by_step: ProcedureStep[];
  complications: Complication[];
  post_procedure: string;
  tips_and_tricks: string[];
}

// 節點內容（版本控制）
export interface NodeContent {
  id: string;
  node_id: string;
  version: number;
  summary: string;
  learning_objectives: string[];
  key_points: string[];
  body: string;
  clinical_pearl: string;
  common_mistakes: string[];
  disease_data: DiseaseData | null;
  diagnostic_data: DiagnosticData | null;
  procedure_data: ProcedureData | null;
  visual_placeholders: VisualPlaceholder[];
  interactive_placeholders: InteractivePlaceholder[];
  drug_api_links: string[];
  references: Reference[];
  is_current: boolean;
  created_at: string;
}

// 知識邊
export interface KnowledgeEdge {
  id: string;
  source_node_id: string;
  target_node_id: string;
  relation_type: EdgeRelationType;
  weight: number;
  description: string | null;
  bidirectional: boolean;
  unlock_condition: string | null;
}

// 視覺輔助
export type VisualAidType =
  | 'annotated_image'
  | 'flowchart'
  | 'comparison_table'
  | 'timeline'
  | 'animated_diagram'
  | 'interactive_overlay'
  | '3d_model'
  | 'waveform'
  | 'histogram'
  | 'mind_map';

export interface VisualAid {
  id: string;
  node_id: string;
  type: VisualAidType;
  data: Record<string, unknown>;
  caption: string | null;
  alt_text: string | null;
  source: string | null;
  sort_order: number;
}

// 學習路徑
export interface PathNode {
  node_id: string;
  is_required: boolean;
  phase: string;
  learning_note: string | null;
}

export interface Milestone {
  id: string;
  title: string;
  description: string;
  required_nodes: string[];
  checkpoint_type: string;
  pass_criteria: string;
}

export interface LearningPath {
  id: string;
  title: string;
  description: string | null;
  specialty: string;
  target_audience: string | null;
  estimated_hours: number;
  path_nodes: PathNode[];
  milestones: Milestone[];
  has_certificate: boolean;
  status: NodeStatus;
}

// 骨架生成 input/output
export interface SkeletonInput {
  specialty_name: string;
  specialty_name_en: string;
  specialty_abbr: string;
}

export interface SkeletonOutput {
  specialty: string;
  total_nodes: number;
  estimated_total_hours: number;
  nodes: KnowledgeNode[];
  validation_report: {
    completeness_score: number;
    issues_found: string[];
    taiwan_specific_additions: string[];
  };
}

// 內容生成 input/output
export interface ContentGenerationInput {
  node_ids: string[];
  batch_size: number;
  priority: 'learning_path' | 'clinical_relevance' | 'sequential';
}

export interface ContentOutput {
  node_id: string;
  content: NodeContent;
}

// 邊生成 input/output
export interface EdgeGenerationInput {
  specialty_abbr: string;
  all_nodes: KnowledgeNode[];
  existing_edges?: KnowledgeEdge[];
}

export interface EdgeOutput {
  edges: KnowledgeEdge[];
  statistics: {
    total_edges: number;
    edges_by_type: Record<string, number>;
    orphan_nodes: string[];
    high_connectivity_nodes: Array<{ id: string; count: number }>;
  };
}
