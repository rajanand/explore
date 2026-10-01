export const APPROACH_SCENARIOS = [
  {
    id: "policy",
    story: "500 policy PDFs update every week; answers must cite latest version.",
    answer: "rag",
    why: "Facts change often — index and refresh, do not bake into weights.",
  },
  {
    id: "tone",
    story: "Support replies must always use formal tone and a fixed JSON envelope.",
    answer: "finetune",
    why: "Stable format and style — fine-tune or strict schema + evals.",
  },
  {
    id: "once",
    story: "One-off demo for a conference next Tuesday.",
    answer: "prompt",
    why: "Prompt + few-shot until value is proven.",
  },
] as const;

export const DATASET_CHECKS = [
  { id: "edge", label: "Includes refusals and edge cases", good: true },
  { id: "dupe", label: "Mostly duplicate paraphrases", good: false },
  { id: "pii", label: "Scrubbed PII / secrets", good: true },
  { id: "stale", label: "Labels from outdated policies", good: false },
  { id: "human", label: "Human-reviewed golden answers", good: true },
];
