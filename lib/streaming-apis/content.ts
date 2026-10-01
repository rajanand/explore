export type StreamState = "idle" | "streaming" | "done" | "error" | "retry";

export const STREAM_STEPS: { state: StreamState; label: string; detail: string }[] = [
  { state: "idle", label: "Idle", detail: "User sends message; open SSE connection." },
  { state: "streaming", label: "Streaming", detail: "Append tokens; show partial markdown safely." },
  { state: "done", label: "Complete", detail: "Close stream; persist message id for feedback." },
  { state: "error", label: "Error", detail: "Show recoverable message; do not duplicate partial." },
  { state: "retry", label: "Retry", detail: "Resume with new request id; idempotency on server." },
];

export const TIMEOUT_CHOICES = [
  {
    id: "hang",
    situation: "No tokens for 30s mid-stream",
    best: "abort",
    options: [
      { id: "abort", label: "Abort client; offer retry" },
      { id: "wait", label: "Wait indefinitely" },
      { id: "dup", label: "Start second parallel stream" },
    ],
    why: "Parallel streams duplicate cost and confuse UI state.",
  },
  {
    id: "vpn",
    situation: "Connection drops after 80% of answer",
    best: "retry",
    options: [
      { id: "retry", label: "Retry full generation with same prompt" },
      { id: "partial", label: "Ship partial as final" },
      { id: "ignore", label: "Silent failure" },
    ],
    why: "Users on VPN need explicit retry — log request id for support.",
  },
];
