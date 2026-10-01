export const AGENT_STEPS = [
  { id: "goal", label: "Goal", detail: "User asks for a multi-step outcome, not a single fact." },
  { id: "plan", label: "Plan", detail: "Model decides sequence: which tools, in what order." },
  { id: "act", label: "Act", detail: "Tool calls execute in the environment (read, search, API)." },
  { id: "observe", label: "Observe", detail: "Results return as messages; errors are first-class." },
  { id: "finish", label: "Finish or loop", detail: "Stop when goal met or ask human for approval." },
] as const;

export const TOOL_SCENARIOS = [
  {
    id: "file",
    task: "Find the line that sets JWT expiry in this repo",
    answer: "search",
    label: "Code search / grep",
  },
  {
    id: "api",
    task: "Create a ticket in Jira with this stack trace",
    answer: "api",
    label: "External API tool",
  },
  {
    id: "human",
    task: "Deploy hotfix to production payment service",
    answer: "human",
    label: "Human approval gate",
  },
] as const;

export const MEMORY_ITEMS = [
  { id: "sys", label: "System instructions", inContext: true, movable: false },
  { id: "rag", label: "RAG chunks (top 5)", inContext: true, movable: true },
  { id: "hist", label: "Last 20 chat turns", inContext: true, movable: true },
  { id: "vec", label: "Long-term user prefs (vector store)", inContext: false, movable: true },
  { id: "trace", label: "Full tool trace archive", inContext: false, movable: false },
] as const;
