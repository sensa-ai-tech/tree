import type { DifficultyLevel } from './knowledge';

export interface CaseScenario {
  signalment: string;
  chief_complaint: string;
  brief_history: string;
}

export interface CaseStepData {
  step_number: number;
  step_type:
    | 'history_collection'
    | 'physical_examination'
    | 'differential_diagnosis'
    | 'diagnostic_plan'
    | 'result_interpretation'
    | 'treatment_plan'
    | 'case_summary';
  title: string;
  prompt: string;
  available_actions: string[];
  correct_actions: string[];
  feedback_correct: string;
  feedback_incorrect: string;
  key_learning_points: string[];
}

export interface ExpertPathway {
  reasoning: string;
  key_decisions: string[];
  common_pitfalls: string[];
}

export interface CaseChallenge {
  id: string;
  title: string;
  specialty: string;
  cross_specialties: string[];
  required_nodes: string[];
  difficulty: DifficultyLevel;
  species: string;
  scenario: CaseScenario;
  steps: CaseStepData[];
  expert_pathway: ExpertPathway | null;
  related_nodes_for_review: string[];
  tags: string[];
}

export interface CaseStepResult {
  step_number: number;
  selected_actions: string[];
  is_correct: boolean;
  score: number;
  time_spent_seconds: number;
}

export interface CaseResult {
  case_id: string;
  total_score: number;
  max_score: number;
  accuracy: number;
  step_results: CaseStepResult[];
  total_time_seconds: number;
  completed_at: string;
}
