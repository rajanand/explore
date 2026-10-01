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
    {
      slug: "tokenization",
      title: "Tokenization Deep Dive",
      description: "BPE intuition, token counting, and why strings split oddly for cost and context.",
      category: "Artificial Intelligence",
    },
    {
      slug: "decoding-sampling",
      title: "Decoding & Sampling",
      description: "Temperature, top-p, and stop sequences for support vs creative tasks.",
      category: "Artificial Intelligence",
    },
    {
      slug: "neural-networks-llm",
      title: "Neural Networks for LLM Users",
      description: "Layers, logits, and forward pass — enough to read architecture diagrams.",
      category: "Artificial Intelligence",
    },
    {
      slug: "pretraining-pipeline",
      title: "The Pretraining Pipeline",
      description: "Data mix, objectives, and what pretraining actually teaches.",
      category: "Artificial Intelligence",
    },
    {
      slug: "posttraining-sft",
      title: "Post-training & SFT",
      description: "Chat templates, instruction tuning, and format compliance.",
      category: "Artificial Intelligence",
    },
    {
      slug: "in-context-learning",
      title: "In-Context Learning",
      description: "Few-shot design, position effects, and distraction.",
      category: "Artificial Intelligence",
    },
    {
      slug: "hallucinations-why",
      title: "Why Models Hallucinate",
      description: "Fluent fabrication, calibration, and grounding limits.",
      category: "Artificial Intelligence",
    },
    {
      slug: "choosing-llm-models",
      title: "Choosing an LLM",
      description: "Latency, context, cost, and risk tradeoffs for internal features.",
      category: "Artificial Intelligence",
    },
    {
      slug: "attention-in-depth",
      title: "Attention in Depth",
      description: "What attends across long tickets, runbooks, and prompts.",
      category: "Artificial Intelligence",
    },
    {
      slug: "scaling-laws-practical",
      title: "Scaling Laws (Practical)",
      description: "Size vs distill vs RAG — engineering tradeoffs not papers.",
      category: "Artificial Intelligence",
    },
    {
      slug: "multimodal-fundamentals",
      title: "Multimodal Fundamentals",
      description: "When images and diagrams belong in the LLM input.",
      category: "Artificial Intelligence",
    },
    {
      slug: "embedding-model-choice",
      title: "Embedding Model Choice",
      description: "Dimensions, domains, and reindex cost.",
      category: "Artificial Intelligence",
    },
    {
      slug: "loss-and-objectives",
      title: "Loss & Training Objectives",
      description: "How objective shapes fluent but ungrounded behavior.",
      category: "Artificial Intelligence",
    },
    {
      slug: "query-rewriting",
      title: "Query Rewriting",
      description: "Rewrite, expand, and decompose for better retrieval.",
      category: "Artificial Intelligence",
    },
    {
      slug: "hyde-multi-query",
      title: "HyDE & Multi-Query",
      description: "Hypothetical documents and multi-query fusion.",
      category: "Artificial Intelligence",
    },
    {
      slug: "semantic-cache",
      title: "Semantic Caching",
      description: "Cache hits on paraphrase for latency and cost.",
      category: "Artificial Intelligence",
    },
    {
      slug: "multi-tenant-rag",
      title: "Multi-Tenant RAG & ACLs",
      description: "Tenant and role enforcement across shared indexes.",
      category: "Artificial Intelligence",
    },
    {
      slug: "rag-citations",
      title: "Citations & Grounding UI",
      description: "Chunk pins, highlights, and trust in copilot answers.",
      category: "Artificial Intelligence",
    },
    {
      slug: "conversational-rag",
      title: "Conversational RAG",
      description: "When to re-retrieve across chat turns.",
      category: "Artificial Intelligence",
    },
    {
      slug: "structured-rag",
      title: "Structured RAG",
      description: "OpenAPI, JSON, and schema-aware chunking.",
      category: "Artificial Intelligence",
    },
    {
      slug: "code-rag",
      title: "Code RAG",
      description: "Repo chunking, symbols, and internal library search.",
      category: "Artificial Intelligence",
    },
    {
      slug: "retrieval-metrics-lab",
      title: "Retrieval Metrics Lab",
      description: "MRR, nDCG, recall@k on golden queries.",
      category: "Artificial Intelligence",
    },
    {
      slug: "golden-set-design",
      title: "Golden Set Design",
      description: "Coverage by intent and regression-catching sets.",
      category: "Artificial Intelligence",
    },
    {
      slug: "llm-as-judge",
      title: "LLM-as-Judge",
      description: "Automated grading with bias and spot-check habits.",
      category: "Artificial Intelligence",
    },
    {
      slug: "synthetic-eval-data",
      title: "Synthetic Eval Data",
      description: "Generate Q/A pairs with filters and poison checks.",
      category: "Artificial Intelligence",
    },
    {
      slug: "text-to-sql",
      title: "Text-to-SQL & Analytics",
      description: "Schema grounding, row limits, and deny dangerous SQL.",
      category: "Artificial Intelligence",
    },
    {
      slug: "multimodal-rag",
      title: "Multimodal RAG",
      description: "Diagrams and screenshots in retrieval pipelines.",
      category: "Artificial Intelligence",
    },
    {
      slug: "agent-memory",
      title: "Agent Memory",
      description: "Working, episodic, and semantic memory for copilots.",
      category: "Artificial Intelligence",
    },
    {
      slug: "agent-planning",
      title: "Agent Planning Patterns",
      description: "ReAct vs plan-and-execute vs fixed workflows.",
      category: "Artificial Intelligence",
    },
    {
      slug: "multi-agent-systems",
      title: "Multi-Agent Systems",
      description: "Routers, specialists, and handoff without loops.",
      category: "Artificial Intelligence",
    },
    {
      slug: "human-in-the-loop-agents",
      title: "Human-in-the-Loop Agents",
      description: "Approvals before irreversible tool actions.",
      category: "Artificial Intelligence",
    },
    {
      slug: "durable-agent-workflows",
      title: "Durable Agent Workflows",
      description: "Journals, retries, and resume after failure.",
      category: "Artificial Intelligence",
    },
    {
      slug: "agent-guardrails",
      title: "Agent Guardrails",
      description: "Input, output, and tool policy layers.",
      category: "Artificial Intelligence",
    },
    {
      slug: "red-teaming",
      title: "Red Teaming LLM Apps",
      description: "Attack decks and control mapping for culture + CI.",
      category: "Artificial Intelligence",
    },
    {
      slug: "pii-dlp-ai",
      title: "PII & DLP for AI",
      description: "Detect, mask, and audit before model and logs.",
      category: "Artificial Intelligence",
    },
    {
      slug: "rag-threat-model-lab",
      title: "RAG Threat Model Lab",
      description: "STRIDE on ingestion, index, retrieval, generation.",
      category: "Artificial Intelligence",
    },
    {
      slug: "tool-permissions-design",
      title: "Tool Permissions Design",
      description: "Scopes, allowlists, and blast radius per tool.",
      category: "Artificial Intelligence",
    },
    {
      slug: "model-routing",
      title: "Model Routing & Cascades",
      description: "Small-first routing with escalation on uncertainty.",
      category: "Artificial Intelligence",
    },
    {
      slug: "llm-cost-optimization",
      title: "LLM Cost Optimization",
      description: "Cache, routing, context trim, and batching levers.",
      category: "Artificial Intelligence",
    },
    {
      slug: "ai-slos",
      title: "SLOs for AI Features",
      description: "Latency budgets paired with quality regression alerts.",
      category: "Artificial Intelligence",
    },
    {
      slug: "quantization-inference",
      title: "Quantization & Inference",
      description: "INT4/8 quality tradeoffs for self-hosted models.",
      category: "Artificial Intelligence",
    },
    {
      slug: "local-llms",
      title: "Running LLMs Locally",
      description: "Dev laptops, Ollama, and when not to self-host.",
      category: "Artificial Intelligence",
    },
    {
      slug: "inference-serving",
      title: "Inference Serving",
      description: "Batching, concurrency, and KV cache at the server.",
      category: "Artificial Intelligence",
    },
    {
      slug: "rlhf-alignment",
      title: "RLHF & Alignment (Intuition)",
      description: "Reward models and policy loops without math depth.",
      category: "Artificial Intelligence",
    },
    {
      slug: "dpo-preferences",
      title: "DPO & Preference Tuning",
      description: "A/B preferences as a modern alignment alternative.",
      category: "Artificial Intelligence",
    },
    {
      slug: "feature-flags-ai",
      title: "Feature Flags for AI",
      description: "Cohort rollouts for prompts, models, and retrievers.",
      category: "Artificial Intelligence",
    },
    {
      slug: "ai-product-metrics",
      title: "AI Product Metrics",
      description: "Beyond thumbs-down: action and resolution funnels.",
      category: "Artificial Intelligence",
    },
    {
      slug: "enterprise-copilot-patterns",
      title: "Enterprise Copilot Patterns",
      description: "Search, draft, and act patterns for IT workflows.",
      category: "Artificial Intelligence",
    },
    {
      slug: "workflow-automation-ai",
      title: "Workflow Automation with AI",
      description: "When BPMN-style beats free-form agents.",
      category: "Artificial Intelligence",
    },
    {
      slug: "incident-copilot-capstone",
      title: "Incident Copilot Capstone",
      description: "End-to-end INC → graph → RAG → agent → eval checklist.",
      category: "Artificial Intelligence",
    },
  ],
};
