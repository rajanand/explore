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
      slug: "transformer",
      title: "Transformer Architecture",
      description: "Understand Self-Attention, Multi-Head Attention, and Encoder-Decoder blocks visually.",
      category: "Artificial Intelligence",
    }
  ]
};
