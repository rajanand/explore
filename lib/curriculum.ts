/**
 * Single source for navigation and home — not every topic needs equal prominence.
 * workshop = multi-interactive walkthrough; guide = text + scenarios + quizzes (upgrade path to workshop).
 */

export type TopicTier = "workshop" | "guide";

export type CurriculumTopic = {
  slug: string;
  shortTitle: string;
  tier: TopicTier;
};

export type CurriculumTrack = {
  id: string;
  label: string;
  menuLabel: string;
  description: string;
  topics: CurriculumTopic[];
};

export const CURRICULUM_TRACKS: CurriculumTrack[] = [
  {
    id: "foundations",
    label: "Foundations",
    menuLabel: "Foundations",
    description: "How LLMs and transformers work, then RAG and ontologies for IT knowledge.",
    topics: [
      { slug: "llm-intro", shortTitle: "LLM intro", tier: "workshop" },
      { slug: "transformer", shortTitle: "Transformer", tier: "workshop" },
      { slug: "rag", shortTitle: "RAG", tier: "workshop" },
      { slug: "ontology", shortTitle: "Ontologies", tier: "workshop" },
    ],
  },
  {
    id: "production",
    label: "Ship AI features",
    menuLabel: "Production",
    description: "Retrieval, agents, evals, and context — what teams ship after the demo.",
    topics: [
      { slug: "embeddings", shortTitle: "Embeddings", tier: "workshop" },
      { slug: "chunking-strategies", shortTitle: "Chunking", tier: "workshop" },
      { slug: "document-parsing", shortTitle: "Doc parsing", tier: "workshop" },
      { slug: "hybrid-search", shortTitle: "Hybrid search", tier: "workshop" },
      { slug: "reranking", shortTitle: "Reranking", tier: "workshop" },
      { slug: "vector-databases", shortTitle: "Vector DBs", tier: "workshop" },
      { slug: "graph-rag", shortTitle: "Graph RAG", tier: "workshop" },
      { slug: "fine-tuning", shortTitle: "Fine-tuning", tier: "workshop" },
      { slug: "llm-security", shortTitle: "LLM security", tier: "workshop" },
      { slug: "prompt-context", shortTitle: "Prompt & context", tier: "workshop" },
      { slug: "context-windows", shortTitle: "Context & KV", tier: "workshop" },
      { slug: "ai-agents", shortTitle: "AI agents", tier: "workshop" },
      { slug: "tool-calling", shortTitle: "Tool calling", tier: "workshop" },
      { slug: "streaming-apis", shortTitle: "Streaming APIs", tier: "workshop" },
      { slug: "llm-evals", shortTitle: "Evals & guardrails", tier: "workshop" },
      { slug: "ai-observability", shortTitle: "Observability", tier: "workshop" },
      { slug: "knowledge-graphs", shortTitle: "Knowledge graphs", tier: "workshop" },
      { slug: "ai-governance", shortTitle: "Governance", tier: "workshop" },
    ],
  },
  {
    id: "engineering",
    label: "Software engineering",
    menuLabel: "Engineering",
    description: "Tools under the hood of how you build and ship code.",
    topics: [{ slug: "git-internals", shortTitle: "Git internals", tier: "workshop" }],
  },
  {
    id: "devtools",
    label: "Developer tools",
    menuLabel: "Dev tools",
    description: "Cursor agents, MCP, and how IDE agents extend your stack.",
    topics: [
      { slug: "cursor-agents", shortTitle: "Cursor agents", tier: "workshop" },
      { slug: "mcp-servers", shortTitle: "MCP servers", tier: "workshop" },
    ],
  },
];

export const ALL_CURRICULUM_SLUGS = CURRICULUM_TRACKS.flatMap((t) =>
  t.topics.map((x) => x.slug)
);

export function topicHref(slug: string) {
  return `/topics/${slug}`;
}

export function findTrackForSlug(slug: string) {
  return CURRICULUM_TRACKS.find((t) => t.topics.some((x) => x.slug === slug));
}
