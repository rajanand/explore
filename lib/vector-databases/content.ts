export type IndexChoice = "flat" | "hnsw" | "ivf";

export const SCALE_SCENARIOS = [
  {
    id: "small",
    label: "8k chunks",
    qps: "Low QPS",
    team: "Postgres already in stack",
    best: "flat" as IndexChoice,
    note: "Exact search or pgvector with modest N — simplest ops story.",
  },
  {
    id: "medium",
    label: "400k chunks",
    qps: "Moderate QPS",
    team: "Dedicated search service",
    best: "hnsw" as IndexChoice,
    note: "HNSW balances recall and latency; tune ef_search on evals.",
  },
  {
    id: "large",
    label: "5M+ chunks",
    qps: "High QPS",
    team: "Vector DB vendor",
    best: "ivf" as IndexChoice,
    note: "IVF/PQ-style indexes trade recall for throughput — validate on golden queries.",
  },
];

export const FILTER_DOCS = [
  { id: "a", title: "INC-1042 postmortem", tenant: "payments", role: "eng" },
  { id: "b", title: "SOC runbook — phishing", tenant: "corp", role: "soc" },
  { id: "c", title: "HR policy — PTO", tenant: "corp", role: "hr" },
  { id: "d", title: "Payments on-call guide", tenant: "payments", role: "eng" },
];
