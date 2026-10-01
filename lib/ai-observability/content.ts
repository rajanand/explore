export const TRACE_EVENTS = [
  { id: "req", label: "request.start", detail: "user_id, feature flag, model route" },
  { id: "ret", label: "retrieval", detail: "query, top_k ids, scores, filter" },
  { id: "gen", label: "generation", detail: "prompt tokens, completion tokens, latency" },
  { id: "guard", label: "guardrail", detail: "policy check, block reason" },
];

export const SIGNAL_QUIZ = [
  {
    id: "bad-cite",
    prompt: "User reports wrong policy number in answer",
    best: "ret",
    why: "You need chunk ids and scores from retrieval to see what was grounded.",
  },
  {
    id: "slow",
    prompt: "P95 latency doubled after deploy",
    best: "gen",
    why: "Token counts and model route explain most latency regressions.",
  },
  {
    id: "block",
    prompt: "Spike in blocked responses",
    best: "guard",
    why: "Guardrail spans show which rule fired and on what input pattern.",
  },
];
