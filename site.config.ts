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
      slug: "transformer",
      title: "Transformer Architecture",
      description: "Understand Self-Attention, Multi-Head Attention, and Encoder-Decoder blocks visually.",
      category: "Artificial Intelligence",
    },
  ],
};
