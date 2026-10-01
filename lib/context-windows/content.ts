export const BUDGET_ITEMS = [
  { id: "sys", label: "System prompt", tokens: 800, cacheable: true },
  { id: "tools", label: "Tool definitions", tokens: 1200, cacheable: true },
  { id: "rag", label: "Retrieved chunks", tokens: 6000, cacheable: false },
  { id: "thread", label: "User thread", tokens: 9000, cacheable: false },
];

export const WINDOW = 128000;
