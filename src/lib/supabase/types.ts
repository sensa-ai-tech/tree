export interface Database {
  public: {
    Tables: {
      knowledge_nodes: {
        Row: {
          id: string;
          specialty: string;
          title: string;
          title_en: string | null;
          layer: number;
          node_type: string;
          difficulty: number;
          estimated_minutes: number | null;
          clinical_relevance: number | null;
          exam_relevance: number | null;
          status: string;
          version: number;
          tags: string[] | null;
          encyclopedia_link: string | null;
          cross_specialty_notes: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id: string;
          specialty: string;
          title: string;
          title_en?: string | null;
          layer: number;
          node_type: string;
          difficulty?: number;
          estimated_minutes?: number | null;
          clinical_relevance?: number | null;
          exam_relevance?: number | null;
          status?: string;
          version?: number;
          tags?: string[] | null;
          encyclopedia_link?: string | null;
          cross_specialty_notes?: string | null;
        };
        Update: {
          specialty?: string;
          title?: string;
          title_en?: string | null;
          layer?: number;
          node_type?: string;
          difficulty?: number;
          estimated_minutes?: number | null;
          clinical_relevance?: number | null;
          exam_relevance?: number | null;
          status?: string;
          version?: number;
          tags?: string[] | null;
          encyclopedia_link?: string | null;
          cross_specialty_notes?: string | null;
        };
      };
      node_contents: {
        Row: {
          id: string;
          node_id: string;
          version: number;
          summary: string | null;
          learning_objectives: unknown | null;
          key_points: unknown | null;
          body: string | null;
          clinical_pearl: string | null;
          common_mistakes: unknown | null;
          disease_data: unknown | null;
          diagnostic_data: unknown | null;
          procedure_data: unknown | null;
          visual_placeholders: unknown | null;
          interactive_placeholders: unknown | null;
          drug_api_links: string[] | null;
          references: unknown | null;
          is_current: boolean;
          created_at: string;
        };
        Insert: {
          node_id: string;
          version: number;
          summary?: string | null;
          learning_objectives?: unknown | null;
          key_points?: unknown | null;
          body?: string | null;
          clinical_pearl?: string | null;
          common_mistakes?: unknown | null;
          disease_data?: unknown | null;
          diagnostic_data?: unknown | null;
          procedure_data?: unknown | null;
          visual_placeholders?: unknown | null;
          interactive_placeholders?: unknown | null;
          drug_api_links?: string[] | null;
          references?: unknown | null;
          is_current?: boolean;
        };
        Update: {
          summary?: string | null;
          learning_objectives?: unknown | null;
          key_points?: unknown | null;
          body?: string | null;
          clinical_pearl?: string | null;
          common_mistakes?: unknown | null;
          disease_data?: unknown | null;
          diagnostic_data?: unknown | null;
          procedure_data?: unknown | null;
          is_current?: boolean;
        };
      };
      knowledge_edges: {
        Row: {
          id: string;
          source_node_id: string;
          target_node_id: string;
          relation_type: string;
          weight: number;
          description: string | null;
          bidirectional: boolean;
          unlock_condition: string | null;
        };
        Insert: {
          source_node_id: string;
          target_node_id: string;
          relation_type: string;
          weight?: number;
          description?: string | null;
          bidirectional?: boolean;
          unlock_condition?: string | null;
        };
        Update: {
          weight?: number;
          description?: string | null;
          bidirectional?: boolean;
          unlock_condition?: string | null;
        };
      };
      visual_aids: {
        Row: {
          id: string;
          node_id: string;
          type: string;
          data: unknown;
          caption: string | null;
          alt_text: string | null;
          source: string | null;
          sort_order: number;
        };
        Insert: {
          node_id: string;
          type: string;
          data: unknown;
          caption?: string | null;
          alt_text?: string | null;
          source?: string | null;
          sort_order?: number;
        };
        Update: {
          data?: unknown;
          caption?: string | null;
          alt_text?: string | null;
          sort_order?: number;
        };
      };
      review_questions: {
        Row: {
          id: string;
          node_id: string;
          question_type: string;
          question: string;
          options: unknown | null;
          correct_answer: string;
          explanation: string | null;
          difficulty: number;
          spaced_rep: boolean;
          tags: string[] | null;
          image_placeholder: string | null;
        };
        Insert: {
          node_id: string;
          question_type: string;
          question: string;
          correct_answer: string;
          options?: unknown | null;
          explanation?: string | null;
          difficulty?: number;
          spaced_rep?: boolean;
          tags?: string[] | null;
          image_placeholder?: string | null;
        };
        Update: {
          question?: string;
          options?: unknown | null;
          correct_answer?: string;
          explanation?: string | null;
          difficulty?: number;
        };
      };
      learning_paths: {
        Row: {
          id: string;
          title: string;
          description: string | null;
          specialty: string;
          target_audience: string | null;
          estimated_hours: number | null;
          path_nodes: unknown;
          milestones: unknown | null;
          has_certificate: boolean;
          status: string;
        };
        Insert: {
          id: string;
          title: string;
          specialty: string;
          path_nodes: unknown;
          description?: string | null;
          target_audience?: string | null;
          estimated_hours?: number | null;
          milestones?: unknown | null;
          has_certificate?: boolean;
          status?: string;
        };
        Update: {
          title?: string;
          description?: string | null;
          path_nodes?: unknown;
          milestones?: unknown | null;
          status?: string;
        };
      };
      case_challenges: {
        Row: {
          id: string;
          title: string;
          specialty: string;
          cross_specialties: string[] | null;
          required_nodes: string[] | null;
          difficulty: number;
          species: string;
          scenario: unknown;
          steps: unknown;
          expert_pathway: unknown | null;
          related_nodes_for_review: string[] | null;
          tags: string[] | null;
        };
        Insert: {
          title: string;
          specialty: string;
          species: string;
          scenario: unknown;
          steps: unknown;
          cross_specialties?: string[] | null;
          required_nodes?: string[] | null;
          difficulty?: number;
          expert_pathway?: unknown | null;
          related_nodes_for_review?: string[] | null;
          tags?: string[] | null;
        };
        Update: {
          title?: string;
          scenario?: unknown;
          steps?: unknown;
          difficulty?: number;
        };
      };
      user_node_progress: {
        Row: {
          user_id: string;
          node_id: string;
          status: string;
          started_at: string | null;
          completed_at: string | null;
          score: number | null;
          time_spent_minutes: number | null;
        };
        Insert: {
          user_id: string;
          node_id: string;
          status?: string;
          started_at?: string | null;
          completed_at?: string | null;
          score?: number | null;
          time_spent_minutes?: number | null;
        };
        Update: {
          status?: string;
          started_at?: string | null;
          completed_at?: string | null;
          score?: number | null;
          time_spent_minutes?: number | null;
        };
      };
      user_spaced_repetition: {
        Row: {
          user_id: string;
          node_id: string;
          ease_factor: number;
          interval_days: number;
          repetitions: number;
          next_review: string | null;
          mastery_level: number;
          last_quality: number | null;
        };
        Insert: {
          user_id: string;
          node_id: string;
          ease_factor?: number;
          interval_days?: number;
          repetitions?: number;
          next_review?: string | null;
          mastery_level?: number;
          last_quality?: number | null;
        };
        Update: {
          ease_factor?: number;
          interval_days?: number;
          repetitions?: number;
          next_review?: string | null;
          mastery_level?: number;
          last_quality?: number | null;
        };
      };
      user_achievements: {
        Row: {
          user_id: string;
          achievement_id: string;
          unlocked_at: string;
        };
        Insert: {
          user_id: string;
          achievement_id: string;
          unlocked_at?: string;
        };
        Update: {
          unlocked_at?: string;
        };
      };
      user_experience: {
        Row: {
          user_id: string;
          total_xp: number;
          current_level: number;
          streak_days: number;
          last_active_date: string | null;
          specialties_explored: string[] | null;
        };
        Insert: {
          user_id: string;
          total_xp?: number;
          current_level?: number;
          streak_days?: number;
          last_active_date?: string | null;
          specialties_explored?: string[] | null;
        };
        Update: {
          total_xp?: number;
          current_level?: number;
          streak_days?: number;
          last_active_date?: string | null;
          specialties_explored?: string[] | null;
        };
      };
    };
    Views: Record<string, never>;
    Functions: Record<string, never>;
    Enums: Record<string, never>;
  };
}
