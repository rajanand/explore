export const SCHEMA_FIELDS = [
  { id: "project", label: "project_key", required: true },
  { id: "summary", label: "summary", required: true },
  { id: "priority", label: "priority", required: false },
  { id: "body", label: "description", required: false },
];

export const ERROR_PAYLOADS = [
  {
    id: "vague",
    text: '{"error": "failed"}',
    good: false,
    note: "Agent cannot recover — no field-level hint.",
  },
  {
    id: "field",
    text: '{"error": "invalid_project", "field": "project_key", "allowed": ["PAY","CORP"]}',
    good: true,
    note: "Agent can retry with a valid project key.",
  },
  {
    id: "stack",
    text: "500 Internal Server Error stack trace...",
    good: false,
    note: "Leaks internals; still not actionable for the model.",
  },
];
