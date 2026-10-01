import type { WorkshopDefinition } from "@/lib/workshop/types";

/** Hand-tuned workshops — override generated bundle entries for more specific labs. */
export const WORKSHOP_OVERRIDES: Partial<Record<string, WorkshopDefinition>> = {
  "query-rewriting": {
    slug: "query-rewriting",
    brand: "Query rewrite",
    eyebrow: "AI · retrieval",
    titleLine1: "Query",
    titleEm: "rewriting",
    lede: "Users type messy queries. Rewriting, expansion, and decomposition happen before retrieval — not instead of evals.",
    outcome: "Pick rewrite strategy per messy user query type.",
    cssPrefix: "qr",
    accent: "#0369a1",
    sections: [
      {
        id: "concept",
        num: "01",
        navLabel: "Strategies",
        eyebrow: "Part 1 · Step 01",
        title: "Three rewrite moves",
        prose: "Lexical fixes help INC IDs; semantic expansion helps symptoms; decomposition helps multi-part questions.",
        lab: {
          kind: "profiles",
          prompt: 'User query: "payments broken yesterday who fixes"',
          profiles: [
            {
              id: "expand",
              label: "Expand",
              body: "payments-api outage 2024-09-30 on-call escalation Team Payments",
              verdict: "Good when user omits service names — watch for drift away from ACL scope.",
            },
            {
              id: "decompose",
              label: "Decompose",
              body: "(1) payments-api incident timeline (2) ownership / escalation path",
              verdict: "Use for multi-hop questions — run retrieval per sub-query.",
            },
            {
              id: "none",
              label: "No rewrite",
              body: "Literal embedding of messy phrase — often misses runbook vocabulary.",
              verdict: "Keep for power users with exact error codes; default rewrite for chat.",
            },
          ],
        },
      },
      {
        id: "lab2",
        num: "02",
        navLabel: "Quiz",
        eyebrow: "Part 2 · Step 02",
        title: "Pick a strategy",
        lab: {
          kind: "quiz",
          prompt: 'Query: "INC-1042" — what rewrite do you apply?',
          options: [
            { id: "a", label: "None — hybrid search already handles IDs" },
            { id: "b", label: "Expand into a paragraph of fiction" },
            { id: "c", label: "Translate to another language" },
          ],
          correctId: "a",
          ok: "Exact ticket IDs should hit BM25/hybrid — avoid hallucinated expansions.",
          bad: "Rewriting can erase the strongest lexical signal.",
        },
      },
    ],
    related: [
      { href: "/topics/hybrid-search", label: "Hybrid search" },
      { href: "/topics/reranking", label: "Reranking" },
      { href: "/topics/rag", label: "RAG" },
    ],
  },
};
