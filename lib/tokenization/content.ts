export const SAMPLE_TEXT =
  "INC-1042: payments-api returned HTTP 502 during peak; escalate to Team Payments if persists after VPN reset.";

/** Rough mock: words split into subword tokens for teaching (not a real BPE table). */
export const MOCK_TOKENS = [
  "INC",
  "-",
  "1042",
  ":",
  " pay",
  "ments",
  "-",
  "api",
  " returned",
  " HTTP",
  " 502",
  " during",
  " peak",
  ";",
  " esc",
  "alate",
  " to",
  " Team",
  " Pay",
  "ments",
  " if",
  " pers",
  "ists",
  " after",
  " VPN",
  " reset",
  ".",
];

export const BPE_STEPS = [
  { pair: "e + s", merge: "es", note: "Common suffix merges early in training." },
  { pair: "pay + ments", merge: "payments", note: "Frequent words become single tokens over time." },
  { pair: "INC + -1042", merge: "INC-1042", note: "Often stays split — rare IDs may cost extra tokens." },
];

export const COST_RATES = { inputPer1M: 3, outputPer1M: 15 };
