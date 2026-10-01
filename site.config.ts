export interface Topic {
  slug: string;
  title: string;
  description: string;
  category: string;
}

export interface SiteConfig {
  title: string;
  description: string;
  googleAnalyticsId: string;
  topics: Topic[];
}

export const siteConfig: SiteConfig = {
  title: "Explore: AI",
  description: "Learn complex topics intuitively through interactive visualizers and experiments.",
  googleAnalyticsId: process.env.NEXT_PUBLIC_GA_ID || "",
  topics: [
    {
      slug: "llm-intro",
      title: "Introduction to LLMs",
      description:
        "Karpathy-style overview: weights, training, fine-tuning, scaling, LLM OS, and security for engineers.",
      category: "Artificial Intelligence",
    },
    {
      slug: "rag",
      title: "RAG",
      description:
        "Retrieve, augment, generate: interactive pipeline from indexing to grounded answers on internal docs.",
      category: "Artificial Intelligence",
    },
    {
      slug: "ontology",
      title: "Ontologies",
      description:
        "Build IT ontologies step by step — incidents, services, policies — for RAG and knowledge graphs.",
      category: "Artificial Intelligence",
    },
    {
      slug: "transformer",
      title: "Transformer Architecture",
      description: "Understand Self-Attention, Multi-Head Attention, and Encoder-Decoder blocks visually.",
      category: "Artificial Intelligence",
    },
    {
      slug: "git-internals",
      title: "Git Internals",
      description:
        "Blobs, trees, commits, and refs — a hands-on tour of what Git stores under the hood.",
      category: "Software Engineering",
    },
    {
      slug: "cursor-agents",
      title: "Cursor Agents",
      description:
        "Skills, hooks, the agent loop, and subagents — how to extend and delegate AI coding workflows.",
      category: "Developer Tools",
    },
    {
      slug: "mcp-servers",
      title: "MCP Servers",
      description:
        "Model Context Protocol: hosts, tool discovery, configuration, auth, and when to use MCP vs built-in tools.",
      category: "Developer Tools",
    },
    {
      slug: "embeddings",
      title: "Embeddings & Vector Search",
      description:
        "Similarity geometry, metrics, chunking, and indexing intuition for production retrieval.",
      category: "Artificial Intelligence",
    },
    {
      slug: "chunking-strategies",
      title: "Advanced Chunking",
      description:
        "Size, overlap, and parent-child patterns for procedural IT docs and retrieval quality.",
      category: "Artificial Intelligence",
    },
    {
      slug: "document-parsing",
      title: "Document Parsing for RAG",
      description:
        "Tables, PDF noise, and structured extraction before chunking and embedding.",
      category: "Artificial Intelligence",
    },
    {
      slug: "reranking",
      title: "Reranking & Cross-Encoders",
      description:
        "Bi-encoder top-k vs cross-encoder rerank — when the extra latency pays off.",
      category: "Artificial Intelligence",
    },
    {
      slug: "graph-rag",
      title: "Graph RAG & Hybrid Retrieval",
      description:
        "When vector search is not enough — traverse IT knowledge graphs and fuse retrievers.",
      category: "Artificial Intelligence",
    },
    {
      slug: "ai-agents",
      title: "AI Agents in Production",
      description:
        "ReAct loops, tools, memory, and safety patterns for agentic features — vendor-neutral.",
      category: "Artificial Intelligence",
    },
    {
      slug: "llm-evals",
      title: "Evals, Tests & Guardrails",
      description:
        "Golden sets, retrieval metrics, attack mitigations, and CI habits for LLM features.",
      category: "Artificial Intelligence",
    },
    {
      slug: "prompt-context",
      title: "Prompt & Context Engineering",
      description:
        "System prompts, context budgets, structured outputs, and RAG vs fine-tune decisions.",
      category: "Artificial Intelligence",
    },
    {
      slug: "fine-tuning",
      title: "Fine-Tuning Fundamentals",
      description: "When to adapt weights vs use RAG, dataset quality, and LoRA-style tradeoffs.",
      category: "Artificial Intelligence",
    },
    {
      slug: "vector-databases",
      title: "Vector Databases",
      description: "ANN indexes, metadata filters, and choosing pgvector vs dedicated vector stores.",
      category: "Artificial Intelligence",
    },
    {
      slug: "llm-security",
      title: "LLM Security Deep Dive",
      description: "Threat models for RAG and agents, injection, ACLs on chunks, and tool blast radius.",
      category: "Artificial Intelligence",
    },
    {
      slug: "ai-observability",
      title: "AI Observability",
      description: "Traces, token/cost attribution, and debugging retrieval with production signals.",
      category: "Artificial Intelligence",
    },
    {
      slug: "streaming-apis",
      title: "Streaming Chat APIs",
      description: "SSE streaming, partial failures, timeouts, auth, and client state machines.",
      category: "Artificial Intelligence",
    },
    {
      slug: "knowledge-graphs",
      title: "Knowledge Graphs",
      description: "Instances and edges beyond ontology schema — traversals for multi-hop IT questions.",
      category: "Artificial Intelligence",
    },
    {
      slug: "tool-calling",
      title: "Tool & Function Calling",
      description: "JSON schemas as contracts, error payloads, and parallels to MCP/OpenAPI.",
      category: "Artificial Intelligence",
    },
    {
      slug: "hybrid-search",
      title: "Hybrid Search",
      description: "BM25 plus vectors, fusion strategies, and when lexical match matters.",
      category: "Artificial Intelligence",
    },
    {
      slug: "ai-governance",
      title: "AI Governance",
      description: "Data classification, model approval, regions, and audit trails for enterprise IT.",
      category: "Artificial Intelligence",
    },
    {
      slug: "context-windows",
      title: "Context Windows & KV Cache",
      description: "What fills the window, cache-friendly prompts, and overflow strategies.",
      category: "Artificial Intelligence",
    },
  ],
};
