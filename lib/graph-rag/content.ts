export const GRAPH_NODES = [
  { id: "inc", label: "INC-1042", type: "Incident" },
  { id: "svc", label: "Payment API", type: "Service" },
  { id: "pol", label: "P1 escalation", type: "Policy" },
  { id: "team", label: "Platform team", type: "Team" },
] as const;

export const GRAPH_EDGES = [
  { from: "inc", to: "svc", label: "affects" },
  { from: "inc", to: "team", label: "owned_by" },
  { from: "svc", to: "pol", label: "governed_by" },
] as const;

export const HYBRID_QUESTIONS = [
  {
    id: "symptom",
    q: "Users cannot complete checkout — similar past incidents?",
    vector: true,
    graph: false,
    note: "Semantic search over postmortems and tickets fits vector RAG.",
  },
  {
    id: "policy",
    q: "Which escalation policy applies to INC-1042?",
    vector: false,
    graph: true,
    note: "Follow incident → service → policy edges; pure similarity may miss the link.",
  },
  {
    id: "both",
    q: "Summarize INC-1042 and cite the governing policy.",
    vector: true,
    graph: true,
    note: "Hybrid: graph for structure, vectors for narrative chunks.",
  },
] as const;

export const VECTOR_ONLY_MISS =
  "Vector search returns a generic checkout FAQ — it never traverses to the P1 escalation policy node.";

export const GRAPH_PATH =
  "INC-1042 → affects → Payment API → governed_by → P1 escalation policy";
