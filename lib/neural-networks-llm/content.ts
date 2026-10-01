export const VOCAB = ["the", "payments", "api", "failed", "escalate", "team"];

export const LOGITS_MOCK = [0.2, 2.1, 1.4, 0.8, 1.9, 0.5];

export const LAYER_STEPS = [
  { id: "embed", label: "Embedding lookup", detail: "Token id → vector in hidden space." },
  { id: "attn", label: "Attention blocks", detail: "Mix context from prior tokens." },
  { id: "mlp", label: "Feed-forward", detail: "Nonlinear transform per position." },
  { id: "logits", label: "LM head", detail: "Hidden state → scores over vocabulary." },
];
