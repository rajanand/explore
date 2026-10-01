export const SAMPLE_GOLDEN = [
  { q: "What is our P1 response time?", expected: "15 minutes", actual: "15 minutes", pass: true },
  { q: "Who owns Payment API?", expected: "Platform team", actual: "Platform", pass: false },
] as const;

export function mockRetrievalMetrics(k: number) {
  const precision = Math.min(0.95, 0.35 + k * 0.08);
  const recall = Math.min(0.9, 0.2 + k * 0.12);
  return { precision, recall };
}

export const ATTACKS = [
  {
    id: "inject",
    title: "Prompt injection in ticket body",
    mitigations: [
      { id: "prompt", label: "Stronger system prompt only", ok: false },
      { id: "filter", label: "Input filter + tool allowlist", ok: true },
      { id: "human", label: "Human review before external send", ok: true },
    ],
  },
  {
    id: "jail",
    title: "Jailbreak via role-play",
    mitigations: [
      { id: "prompt", label: "System prompt only", ok: false },
      { id: "output", label: "Output policy classifier", ok: true },
      { id: "ignore", label: "Ignore and hope", ok: false },
    ],
  },
] as const;
