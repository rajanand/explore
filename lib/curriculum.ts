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
    id: "ai-basics",
    label: "AI basics",
    menuLabel: "Basics",
    description: "Tokens, decoding, and neural net intuition before depth.",
    topics: [
      { slug: "tokenization", shortTitle: "Tokenization", tier: "workshop" },
      { slug: "decoding-sampling", shortTitle: "Decoding", tier: "workshop" },
      { slug: "neural-networks-llm", shortTitle: "Neural nets", tier: "workshop" },
    ],
  },
  {
    id: "ai-core",
    label: "AI core",
    menuLabel: "Core ML",
    description: "Pretraining, alignment concepts, and model choice.",
    topics: [
      { slug: "pretraining-pipeline", shortTitle: "Pretraining", tier: "workshop" },
      { slug: "posttraining-sft", shortTitle: "SFT", tier: "workshop" },
      { slug: "in-context-learning", shortTitle: "ICL", tier: "workshop" },
      { slug: "hallucinations-why", shortTitle: "Hallucinations", tier: "workshop" },
      { slug: "choosing-llm-models", shortTitle: "Model choice", tier: "workshop" },
      { slug: "attention-in-depth", shortTitle: "Attention", tier: "workshop" },
      { slug: "scaling-laws-practical", shortTitle: "Scaling", tier: "workshop" },
      { slug: "multimodal-fundamentals", shortTitle: "Multimodal", tier: "workshop" },
      { slug: "embedding-model-choice", shortTitle: "Embed models", tier: "workshop" },
      { slug: "loss-and-objectives", shortTitle: "Loss & objectives", tier: "workshop" },
    ],
  },
  {
    id: "ai-retrieval",
    label: "Retrieval & quality",
    menuLabel: "Retrieval+",
    description: "Advanced RAG, evals, SQL, and multimodal retrieval.",
    topics: [
      { slug: "query-rewriting", shortTitle: "Query rewrite", tier: "workshop" },
      { slug: "hyde-multi-query", shortTitle: "HyDE", tier: "workshop" },
      { slug: "semantic-cache", shortTitle: "Semantic cache", tier: "workshop" },
      { slug: "multi-tenant-rag", shortTitle: "Multi-tenant RAG", tier: "workshop" },
      { slug: "rag-citations", shortTitle: "Citations", tier: "workshop" },
      { slug: "conversational-rag", shortTitle: "Conv. RAG", tier: "workshop" },
      { slug: "structured-rag", shortTitle: "Structured RAG", tier: "workshop" },
      { slug: "code-rag", shortTitle: "Code RAG", tier: "workshop" },
      { slug: "retrieval-metrics-lab", shortTitle: "Retrieval metrics", tier: "workshop" },
      { slug: "golden-set-design", shortTitle: "Golden sets", tier: "workshop" },
      { slug: "llm-as-judge", shortTitle: "LLM judge", tier: "workshop" },
      { slug: "synthetic-eval-data", shortTitle: "Synthetic evals", tier: "workshop" },
      { slug: "text-to-sql", shortTitle: "Text-to-SQL", tier: "workshop" },
      { slug: "multimodal-rag", shortTitle: "MM RAG", tier: "workshop" },
    ],
  },
  {
    id: "ai-agents",
    label: "Agents & safety",
    menuLabel: "Agents+",
    description: "Memory, planning, red team, and permissions.",
    topics: [
      { slug: "agent-memory", shortTitle: "Agent memory", tier: "workshop" },
      { slug: "agent-planning", shortTitle: "Planning", tier: "workshop" },
      { slug: "multi-agent-systems", shortTitle: "Multi-agent", tier: "workshop" },
      { slug: "human-in-the-loop-agents", shortTitle: "HITL agents", tier: "workshop" },
      { slug: "durable-agent-workflows", shortTitle: "Durable agents", tier: "workshop" },
      { slug: "agent-guardrails", shortTitle: "Agent guardrails", tier: "workshop" },
      { slug: "red-teaming", shortTitle: "Red teaming", tier: "workshop" },
      { slug: "pii-dlp-ai", shortTitle: "PII & DLP", tier: "workshop" },
      { slug: "rag-threat-model-lab", shortTitle: "RAG threats", tier: "workshop" },
      { slug: "tool-permissions-design", shortTitle: "Tool permissions", tier: "workshop" },
    ],
  },
  {
    id: "ai-platform",
    label: "AI platform",
    menuLabel: "Platform",
    description: "Routing, cost, SLOs, and incident copilot capstone.",
    topics: [
      { slug: "model-routing", shortTitle: "Routing", tier: "workshop" },
      { slug: "llm-cost-optimization", shortTitle: "Cost", tier: "workshop" },
      { slug: "ai-slos", shortTitle: "AI SLOs", tier: "workshop" },
      { slug: "quantization-inference", shortTitle: "Quantization", tier: "workshop" },
      { slug: "local-llms", shortTitle: "Local LLMs", tier: "workshop" },
      { slug: "inference-serving", shortTitle: "Serving", tier: "workshop" },
      { slug: "rlhf-alignment", shortTitle: "RLHF", tier: "workshop" },
      { slug: "dpo-preferences", shortTitle: "DPO", tier: "workshop" },
      { slug: "feature-flags-ai", shortTitle: "Flags", tier: "workshop" },
      { slug: "ai-product-metrics", shortTitle: "Product metrics", tier: "workshop" },
      { slug: "enterprise-copilot-patterns", shortTitle: "Copilot patterns", tier: "workshop" },
      { slug: "workflow-automation-ai", shortTitle: "Workflows", tier: "workshop" },
      { slug: "incident-copilot-capstone", shortTitle: "INC capstone", tier: "workshop" },
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
