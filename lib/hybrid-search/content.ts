export type RankedDoc = {
  id: string;
  title: string;
  bm25: number;
  vector: number;
};

export const CORPUS: RankedDoc[] = [
  { id: "a", title: "INC-1042 postmortem — payment API timeout", bm25: 0.92, vector: 0.55 },
  { id: "b", title: "Checkout FAQ — generic user errors", bm25: 0.2, vector: 0.78 },
  { id: "c", title: "Runbook: payment-api latency SLO", bm25: 0.35, vector: 0.81 },
  { id: "d", title: "VPN disconnect after sleep", bm25: 0.05, vector: 0.4 },
];

export const QUERIES = [
  {
    id: "inc",
    text: "INC-1042 root cause",
    best: "bm25" as const,
    note: "Exact ticket IDs and codes favor lexical (BM25) search.",
  },
  {
    id: "symptom",
    text: "users cannot complete checkout",
    best: "vector" as const,
    note: "Paraphrased symptoms favor semantic embeddings.",
  },
  {
    id: "both",
    text: "payment API timeout during checkout incident",
    best: "hybrid" as const,
    note: "Hybrid fusion surfaces both the postmortem and the runbook.",
  },
];

export function rrfScore(rank: number, k = 60) {
  return 1 / (k + rank);
}

export function fusedOrder(docs: RankedDoc[]) {
  const bm25Rank = [...docs].sort((a, b) => b.bm25 - a.bm25);
  const vecRank = [...docs].sort((a, b) => b.vector - a.vector);
  const scores = new Map<string, number>();
  docs.forEach((d) => scores.set(d.id, 0));
  bm25Rank.forEach((d, i) => scores.set(d.id, (scores.get(d.id) ?? 0) + rrfScore(i + 1)));
  vecRank.forEach((d, i) => scores.set(d.id, (scores.get(d.id) ?? 0) + rrfScore(i + 1)));
  return [...docs].sort((a, b) => (scores.get(b.id) ?? 0) - (scores.get(a.id) ?? 0));
}
