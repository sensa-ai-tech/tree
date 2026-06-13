-- 002_path_fidelity.sql
-- Fixes BLOCKED #8 (node_ids double-serialized) and #9 (milestones never imported)
-- for the learning_paths table, restoring full fidelity with the seed LearningPath shape.
--
-- Context: 001 created learning_paths with only `node_ids TEXT[]`. The seed-to-supabase
-- import wrote each path's `path_nodes` (an array of PathNode OBJECTS) straight into that
-- text[] column, so supabase-js JSON-stringified every element — node links rendered as raw
-- JSON. There was also nowhere to store milestones / per-node metadata / certificate flag.
--
-- This migration is idempotent (IF NOT EXISTS) and additive — it does not drop node_ids,
-- so the app keeps working during/after the re-import. Run it in the Supabase SQL Editor,
-- THEN re-run `npx tsx scripts/seed-to-supabase.ts` to repopulate with the corrected shape.

-- #9: milestones (jsonb array of { id, title, description, required_nodes, checkpoint_type, pass_criteria })
ALTER TABLE learning_paths ADD COLUMN IF NOT EXISTS milestones jsonb NOT NULL DEFAULT '[]'::jsonb;

-- #8 fidelity: full PathNode objects (node_id / is_required / phase / learning_note).
-- node_ids TEXT[] is kept as a bare-id list for backward-compat; path_nodes carries the metadata.
ALTER TABLE learning_paths ADD COLUMN IF NOT EXISTS path_nodes jsonb NOT NULL DEFAULT '[]'::jsonb;

-- Seed fields the original schema dropped:
ALTER TABLE learning_paths ADD COLUMN IF NOT EXISTS target_audience text;
ALTER TABLE learning_paths ADD COLUMN IF NOT EXISTS has_certificate boolean NOT NULL DEFAULT false;
