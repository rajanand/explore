export const CHECKLIST = [
  { id: "data", label: "Data classification for prompts and logs" },
  { id: "model", label: "Approved model list + region" },
  { id: "human", label: "Human review for high-risk actions" },
  { id: "audit", label: "Audit trail for tool calls" },
  { id: "retain", label: "Retention policy for chat + traces" },
];

export const REGION_SCENARIOS = [
  {
    id: "eu",
    title: "EU employees, US-hosted model",
    best: "review",
    options: [
      { id: "ship", label: "Ship pilot immediately" },
      { id: "review", label: "Legal review + DPA / residency plan" },
      { id: "block", label: "Block all AI features" },
    ],
    why: "Governance is risk-based — document transfers and subprocessors before scale.",
  },
];
