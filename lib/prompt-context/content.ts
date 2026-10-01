export const CONTEXT_ITEMS = [
  { id: "rules", label: "System + rules", tokens: 800, required: true },
  { id: "rag", label: "RAG chunks", tokens: 2400, required: false },
  { id: "files", label: "Open files", tokens: 3200, required: false },
  { id: "hist", label: "Chat history", tokens: 1800, required: false },
  { id: "tools", label: "Tool schemas", tokens: 600, required: false },
] as const;

export const BUDGET = 8000;

export const DECISION_TREE = [
  {
    id: "faq",
    q: "Stable FAQ on 50 pages, rare updates?",
    answer: "RAG",
    detail: "Index docs; change content without retraining.",
  },
  {
    id: "style",
    q: "Must always match company tone in every sentence?",
    answer: "Fine-tune or strong system prompt",
    detail: "Consider fine-tune if prompts alone drift.",
  },
  {
    id: "multi",
    q: "Multi-step workflow across tools?",
    answer: "Agent",
    detail: "Plan + tools; eval each release.",
  },
  {
    id: "fact",
    q: "Single-shot classification with fixed labels?",
    answer: "Prompt + structured output",
    detail: "JSON schema validation on responses.",
  },
] as const;

export const STRUCTURED_DEMO = {
  free: "The outage was probably networking I think.",
  json: '{"severity":"P1","service":"payment-api","confidence":0.92}',
  schemaOk: true,
};
