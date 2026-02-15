-- =====================================
-- VetKnowledgeTree 初始資料庫 Schema
-- 完整 10 弴表 + 索引 + RLS
-- ====================================

-- 1. 使用者 Profile（擴展 Supabase Auth）
CREATE TABLE IF NOT EXISTS user_profiles (
    id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
    display_name TEXT NOT NULL DEFAULT '',
    avatar_url TEXT,
    role TEXT NOT NULL DEFAULT 'student' CHECK (role IN ('student', 'admin', 'reviewer')),
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 2. 知譀節點
CREATE TABLE IF NOT EXISTS knowledge_nodes (
    id TEXT PRIMARY KEY,
    specialty TEXT NOT NULL,
    title TEXT NOT NULL,
    title_en TEXT,
    layer INTEGER NOT NULL CHECK (layer BETWEEN 0 AND 5),
    node_type TEXT NOT NULL CHECK (node_type IN (
        'concept', 'mechanism', 'disease', 'diagnostic',
        'therapeutic', 'procedure', 'case_study', 'decision_tree'
    )),
    difficulty INTEGER NOT NULL CHECK (difficulty BETWEEN 1 AND 5),
    estimated_minutes INTEGER NOT NULL DEFAULT 30,
    clinical_relevance INTEGER NOT NULL DEFAULT 3 CHECK (clinical_relevance BETWEEN 1 AND 5),
    exam_relevance INTEGER NOT NULL DEFAULT 3 CHECK (exam_relevance BETWEEN 1 AND 5),
    status TEXT NOT NULL DEFAULT 'draft' CHECK (status IN ('draft', 'review', 'published', 'archived')),
    tags TEXT[] DEFAULT '{}',
    content JSONB,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX idx_knowledge_nodes_specialty ON knowledge_nodes(specialty);
CREATE INDEX idx_knowledge_nodes_layer ON knowledge_nodes(layer);
CREATE INDEX idx_knowledge_nodes_node_type ON knowledge_nodes(node_type);
CREATE INDEX idx_knowledge_nodes_status ON knowledge_nodes(status);
CREATE INDEX idx_knowledge_nodes_tags ON knowledge_nodes USING GIN(tags);

-- 3. 知讘邊(節點間關係)
CREATE TABLE IF NOT EXISTS knowledge_edges (
    id TEXT PRIMARY KEY DEFAULT gen_random_uuid()::TEXT,
    source_node_id TEXT NOT NULL REFERENCES knowledge_nodes(id) ON DELETE CASCADE,
    target_node_id TEXT NOT NULL REFERENCES knowledge_nodes(id) ON DELETE CASCADE,
    relation_type TEXT NOT NULL CHECK (relation_type IN (
        'prerequisite', 'builds_on', 'cross_specialty', 'differential',
        'clinical_apply', 'complication', 'same_system', 'drug_related'
    )),
    weight NUMERIC NOT NULL DEFAULT 1 CHECK (weight BETWEEN 0 AND 1),
    description TEXT,
    bidirectional BOOLEAN NOT NULL DEFAULT FALSE,
    created_at TIMESTAMPTz NOT NULL DEFAULT NOW(),
    CONSTRAINT unique_edge UNIQUE (source_node_id, target_node_id, relation_type)
);

CREATE INDEX idx_knowledge_edges_source ON knowledge_edges(source_node_id);
CREATE INDEX idx_knowledge_edges_target ON knowledge_edges(target_node_id);
CREATE INDEX idx_knowledge_edges_type ON knowledge_edges(relation_type);

-- 4. 學習路徑
CREATE TABLE IF NOT EXISTS learning_paths (
    id TEXT PRIMARY KEY DEFAULT gen_random_uuid()::TEXT,
    title TEXT NOT NULL,
    description TEXT,
    specialty TEXT NOT NULL,
    path_type TEXT NOT NULL DEFAULT 'beginner' CHECK (path_type IN ('beginner', 'clinical', 'advanced', 'custom')),
    difficulty INTEGER NOT NULL DEFAULT 3 CHECK (difficulty BETWEEN 1 AND 5),
    estimated_hours NUMERIC NOT NULL DEFAULT 0,
    node_ids TEXT[] NOT NULL DEFAULT '{}',
    is_published BOOLEAN NOT NULL DEFAULT FALSE,
    created_at TIMESTAMPTz NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTz NOT NULL DEFAULT NOW()
);

CREATE INDEX idx_learning_paths_specialty ON learning_paths(specialty);
CREATE INDEX idx_learning_paths_type ON learning_paths(path_type);

-- 5. 複習題目
CREATE TABLE IF NOT EXISTS review_questions (
    id TEXT PRIMARY KEY DEFAULT gen_random_uuid()::TEXT,
    node_id TEXT NOT NULL REFERENCES knowledge_nodes(id) ON DELETE CASCADE,
    question_type TEXT NOT NULL CHECK (question_type IN (
        'mcq', 'true_false', 'fill_blank', 'image_label', 'case_based'
    )),
    question TEXT NOT NULL,
    options JSONB,
    correct_answer TEXT NOT NULL,
    explanation TEXT,
    difficulty INTEGER NOT NULL DEFAULT 3 CHECK (difficulty BETWEEN 1 AND 5),
    spaced_rep BOOLEAN NOT NULL DEFAULT TRUE,
    tags TEXT[] DEFAULT '{}',
    created_at TIMESTAMPTz NOT NULL DEFAULT NOW()
);

CREATE INDEX idx_review_questions_node ON review_questions(node_id);
CREATE INDEX idx_review_questions_type ON review_questions(question_type);
CREATE INDEX idx_review_questions_difficulty ON review_questions(difficulty);

-- 6. 病例挑戰
CREATE TABLE IF NOT EXISTS case_challenges (
    id TEXT PRIMARY KEY DEFAULT gen_random_uuid()::TEXT,
    title TEXT NOT NULL,
    specialty TEXT NOT NULL,
    difficulty INTEGER NOT NULL DEFAULT 3 CHECK (difficulty BETWEEN 1 AND 5),
    species TEXT NOT NULL DEFAULT 'canine',
    scenario JSONB NOT NULL,
    steps JSONB NOT NULL,
    related_node_ids TEXT[] DEFAULT '{}',
    is_published BOOLEAN NOT NULL DEFAULT FALSE,
    created_at TIMESTAMPTz NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTz NOT NULL DEFAULT NOW()
);

CREATE INDEX idx_case_challenges_specialty ON case_challenges(specialty);
CREATE INDEX idx_case_challenges_difficulty ON case_challenges(difficulty);

-- 7. 使用者學習進度
CREATE TABLE IF NOT EXISTS user_progress (
    user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    node_id TEXT NOT NULL REFERENCES knowledge_nodes(id) ON DELETE CASCADE,
    status TEXT NOT NULL DEFAULT 'locked' CHECK (status IN ('locked', 'available', 'in_progress', 'completed')),
    started_at TIMESTAMPTZ,
    completed_at TIMESTAMPTZ,
    score NUMERIC,
    time_spent_minutes INTEGER DEFAULT 0,
    PRIMARY KEY (user_id, node_id)
);

CREATE INDEX idx_user_progress_user ON user_progress(user_id);
CREATE INDEX idx_user_progress_status ON user_progress(status);

-- 8. 間隔重複排程
CREATE TABLE IF NOT EXISTS user_spaced_repetition (
    user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    node_id TEXT NOT NULL REFERENCES knowledge_nodes(id) ON DELETE CASCADE,
    ease_factor NUMERIC NOT NULL DEFAULT 2.5,
    interval_days INTEGER NOT NULL DEFAULT 1,
    repetitions INTEGER NOT NULL DEFAULT 0,
    next_review TIMESTAMPTZ,
    mastery_level INTEGER NOT NULL DEFAULT 0 CHECK (mastery_level BETWEEN 0 AND 100),
    last_quality INTEGER CHECK (last_quality BETWEEN 0 AND 5),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    PRIMARY KEY (user_id, node_id)
);

CREATE INDEX idx_spaced_rep_next_review ON user_spaced_repetition(next_review);
CREATE INDEX idx_spaced_rep_user ON user_spaced_repetition(user_id);

-- 9. 使用者經驗值 / 等級
CREATE TABLE IF NOT EXISTS user_experience (
    user_id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
    total_xp INTEGER NOT NULL DEFAULT 0,
    current_level INTEGER NOT NULL DEFAULT 1,
    streak_days INTEGER NOT NULL DEFAULT 0,
    last_active_date DATE,
    specialties_explored TEXT[] DEFAULT '{}',
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 10. 使用者成就
CREATE TABLE IF NOT EXISTS user_achievements (
    user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    achievement_id TEXT NOT NULL,
    unlocked_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    PRIMARY KEY (user_id, achievement_id)
);

CREATE INDEX idx_user_achievements_user ON user_achievements(user_id);

-- ====================================
-- Row Level Security (RLS) Policies
-- ====================================

-- 啟用 RLS
ALTER TABLE user_profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE knowledge_nodes ENABLE ROW LEVEL SECURITY;
ALTER TABLE knowledge_edges ENABLE ROW LEVEL SECURITY;
ALTER TABLE learning_paths ENABLE ROW LEVEL SECURITY;
ALTER TABLE review_questions ENABLE ROW LEVEL SECURITY;
ALTER TABLE case_challenges ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_progress ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_spaced_repetition ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_experience ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_achievements ENABLE ROW LEVEL SECURITY;

-- user_profiles: 自己可以讀寫
CREATE POLICY "Users can view own profile" ON user_profiles
    FOR SELECT USING (auth.uid() = id);
CREATE POLICY "Users can update own profile" ON user_profiles
    FOR UPDATE USING (auth.uid() = id);
CREATE POLICY "Users can insert own profile" ON user_profiles
    FOR INSERT WITH CHECK (auth.uid() = id);

-- knowledge_nodes:  已發佈的所有人可議，admin 可寫
CREATE POLICY "Published nodes are viewable by all" ON knowledge_nodes
    FOR SELECT USING (status = 'published' OR EXISTS (
        SELECT 1 FROM user_profiles WHERE id = auth.uid() AND role IN ('admin', 'reviewer')
    ));
CREATE POLICY "Admins can manage nodes" ON knowledge_nodes
    FOR ALL USING (EXISTS (
        SELECT 1 FROM user_profiles WHERE id = auth.uid() AND role = 'admin'
    ));

-- knowledge_edges: 所有人可議
CREATE POLICY "Edges are viewable by all authenticated" ON knowledge_edges
    FOR SELECT USING (auth.uid() IS NOT NULL);
CREATE POLICY "Admins can manage edges" ON knowledge_edges
    FOR ALL USING (EXISTS (
        SELECT 1 FROM user_profiles WHERE id = auth.uid() AND role = 'admin'
    ));

-- learning_paths: 已發佈的所有人可讀
CREATE POLICY "Published paths are viewable" ON learning_paths
    FOR SELECT USING (is_published = TRUE OR EXISTS (
        SELECT 1 FROM user_profiles WHERE id = auth.uid() AND role = 'admin'
    ));
CREATE POLICY "Admins can manage paths" ON learning_paths
    FOR ALL USING (EXISTS (
        SELECT 1 FROM user_profiles WHERE id = auth.uid() AND role = 'admin'
    ));

-- review_questions: 所有人可讀
CREATE POLICY "Questions are viewable by authenticated" ON review_questions
    FOR SELECT USING (auth.uid() IS NOT NULL);
CREATE POLICY "Admins can manage questions" ON review_questions
    FOR ALL USING (EXISTS (
        SELECT 1 FROM user_profiles WHERE id = auth.uid() AND role = 'admin'
    ));

-- case_challenges: 已發佈的所有人可議
CREATE POLICY "Published cases are viewable" ON case_challenges
    FOR SELECT USING (is_published = TRUE OR EXISTS (
        SELECT 1 FROM user_profiles WHERE id = auth.uid() AND role = 'admin'
    ));
CREATE POLICY "Admins can manage cases" ON case_challenges
    FOR ALL USING (EXISTS (
        SELECT 1 FROM user_profiles WHERE id = auth.uid() AND role = 'admin'
    ));

-- user_progress: 只能存取自己的進度
CREATE POLICY "Users can manage own progress" ON user_progress
    FOR ALL USING (auth.uid() = user_id);

-- user_spaced_repetition: 只能存取自己的
CREATE POLICY "Users can manage own spaced rep" ON user_spaced_repetition
    FOR ALL USING (auth.uid() = user_id);

-- user_experience: 只能存取自己的
CREATE POLICY "Users can manage own experience" ON user_experience
    FOR ALL USING (auth.uid() = user_id);

-- user_achievements: 只能存取自己的
CREATE POLICY "Users can manage own achievements" ON user_achievements
    FOR ALL USING (auth.uid() = user_id);

-- ====================================
-- 觸穼器：自動更新 updated_at
-- ====================================

CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER tr_user_profiles_updated_at
    BEFORE UPDATE ON user_profiles
    FOR EACH ROW EXECUTE FUNCTION update_updated_at();

CREATE TRIGGER tr_knowledge_nodes_updated_at
    BEFORE UPDATE ON knowledge_nodes
    FOR EACH ROW EXECUTE FUNCTION update_updated_at();

CREATE TRIGGER tr_learning_paths_updated_at
    BEFORE UPDATE ON learning_paths
    FOR EACH ROW EXECUTE FUNCTION update_updated_at();

CREATE TRIGGER tr_case_challenges_updated_at
    BEFORE UPDATE ON case_challenges
    FOR EACH ROW EXECUTE FUNCTION update_updated_at();

CREATE TRIGGER tr_user_spaced_rep_updated_at
    BEFORE UPDATE ON user_spaced_repetition
    FOR EACH ROW EXECUTE FUNCTION update_updated_at();

CREATE TRIGGER tr_user_experience_updated_at
    BEFORE UPDATE ON user_experience
    FOR EACH ROW EXECUTE FUNCTION update_updated_at();
