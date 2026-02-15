import type { DifficultyLevel } from './knowledge';

export type QuestionType =
  | 'mcq'
  | 'true_false'
  | 'fill_blank'
  | 'image_label'
  | 'case_based';

export interface ReviewQuestion {
  id: string;
  node_id: string;
  question_type: QuestionType;
  question: string;
  options: string[] | null;
  correct_answer: string;
  explanation: string | null;
  difficulty: DifficultyLevel;
  spaced_rep: boolean;
  tags: string[];
  image_placeholder: string | null;
}

export interface AnswerRecord {
  question_id: string;
  selected_answer: string;
  is_correct: boolean;
  time_spent_seconds: number;
}

export interface QuizSession {
  id: string;
  node_id: string;
  questions: ReviewQuestion[];
  current_index: number;
  answers: AnswerRecord[];
  started_at: string;
  status: 'in_progress' | 'completed';
}

export interface QuizResult {
  session_id: string;
  node_id: string;
  total_questions: number;
  correct_count: number;
  accuracy: number;
  total_time_seconds: number;
  answers: AnswerRecord[];
  completed_at: string;
}
