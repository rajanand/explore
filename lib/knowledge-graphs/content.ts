export const GRAPH_NODES = [
  { id: "inc", label: "INC-1042" },
  { id: "svc", label: "payments-api" },
  { id: "owner", label: "Team Payments" },
  { id: "esc", label: "Escalation L2" },
];

export const GRAPH_EDGES = [
  { from: "inc", to: "svc", rel: "affects" },
  { from: "svc", to: "owner", rel: "owned_by" },
  { from: "owner", to: "esc", rel: "escalates_to" },
];

export const COMPARE = [
  {
    id: "owner",
    question: "Who owns the service behind this incident?",
    vector: "Returns a generic SRE handbook chunk.",
    graph: "Traverse incident → service → owner team.",
    winner: "graph" as const,
  },
  {
    id: "symptom",
    question: "What does 'connection reset' usually mean?",
    vector: "Strong paraphrase match on runbook prose.",
    graph: "No single edge answers vague symptoms.",
    winner: "vector" as const,
  },
];
