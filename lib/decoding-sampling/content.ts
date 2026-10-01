export const PROMPT = "Summarize INC-1042 impact for leadership in two sentences.";

export const PROFILES = [
  {
    id: "support",
    label: "Support (low temp)",
    temperature: 0.1,
    topP: 1,
    sample:
      "INC-1042 caused payments-api 502 errors during peak. Service restored after rollback; customer impact limited to EU window.",
  },
  {
    id: "balanced",
    label: "Balanced",
    temperature: 0.7,
    topP: 0.9,
    sample:
      "During peak traffic, payments-api returned 502s tied to INC-1042. Teams rolled back the deploy and monitored error rates through the evening.",
  },
  {
    id: "creative",
    label: "Creative (high temp)",
    temperature: 1.2,
    topP: 0.95,
    sample:
      "INC-1042 shook the payments stack at peak — imagine checkout lines stalling while engineers chase ghosts in the load balancer logs.",
  },
];

export const STOP_SCENARIOS = [
  {
    id: "json",
    need: "Force valid JSON only",
    best: "stop-json",
    options: [
      { id: "stop-json", label: 'Stop sequences: "\\n\\n", "}" + schema prompt' },
      { id: "high-t", label: "Temperature 1.5" },
      { id: "long", label: "Max tokens 4000" },
    ],
    why: "Structured output needs low randomness plus stop/grammar constraints.",
  },
];
