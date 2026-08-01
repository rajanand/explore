export const LLM_SECTION_IDS = [
  "hero",
  "basics",
  "training",
  "next-word",
  "finetune",
  "scaling",
  "llm-os",
  "system2",
  "security",
] as const;

export type LlmSectionId = (typeof LLM_SECTION_IDS)[number];

export const MODEL_SIZE_PRESETS = [
  {
    id: "small",
    label: "7B class",
    params: "7 billion",
    weights: "~14 GB",
    inference: "Laptop / single GPU",
    training: "Weeks on GPU cluster",
  },
  {
    id: "large",
    label: "70B class",
    params: "70 billion",
    weights: "~140 GB",
    inference: "Multi-GPU or cloud",
    training: "Months, millions $",
  },
  {
    id: "frontier",
    label: "Frontier",
    params: "400B+",
    weights: "800 GB+",
    inference: "Dedicated infra",
    training: "$100M+ scale",
  },
] as const;

export const NEXT_WORD_PROMPTS = [
  {
    id: "france",
    prefix: "The capital of France is",
    options: [
      { word: "Paris", pct: 78 },
      { word: "Lyon", pct: 8 },
      { word: "London", pct: 4 },
      { word: "Berlin", pct: 3 },
    ],
    note: "The model compresses world knowledge — geography emerges from next-word prediction.",
  },
  {
    id: "python",
    prefix: "def fibonacci(n):",
    options: [
      { word: "return", pct: 52 },
      { word: "if", pct: 28 },
      { word: "for", pct: 9 },
      { word: "pass", pct: 4 },
    ],
    note: "Code patterns are just text — the same objective learns syntax and APIs.",
  },
] as const;
