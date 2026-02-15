import type { KnowledgeNode, NodeType } from '@/types/knowledge';
import { buildConceptContentPrompt } from './prompts/content-concept';
import { buildDiseaseContentPrompt } from './prompts/content-disease';
import { buildDiagnosticContentPrompt } from './prompts/content-diagnostic';

type PromptBuilder = (node: KnowledgeNode, prerequisites: string[]) => string;

const PROMPT_MAP: Record<NodeType, PromptBuilder> = {
  concept: buildConceptContentPrompt,
  mechanism: buildConceptContentPrompt,
  disease: buildDiseaseContentPrompt,
  diagnostic: buildDiagnosticContentPrompt,
  therapeutic: buildDiseaseContentPrompt,
  procedure: buildDiagnosticContentPrompt,
  case_study: buildConceptContentPrompt,
  decision_tree: buildConceptContentPrompt,
};

export function getContentPrompt(
  node: KnowledgeNode,
  prerequisites: string[]
): string {
  const builder = PROMPT_MAP[node.node_type];
  return builder(node, prerequisites);
}

export function getPromptBuilderForType(nodeType: NodeType): PromptBuilder {
  return PROMPT_MAP[nodeType];
}
