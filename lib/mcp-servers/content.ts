export const MCP_ROLES = [
  {
    id: "host",
    title: "Host",
    body: "The app you use (Cursor, Claude Desktop, custom agent). It runs one or more MCP clients and shows results to you.",
  },
  {
    id: "client",
    title: "Client",
    body: "Inside the host: maintains a connection to a server, discovers capabilities, and routes tool calls.",
  },
  {
    id: "server",
    title: "MCP server",
    body: "A separate process or remote service that exposes tools, resources, and optional prompts over the protocol.",
  },
  {
    id: "transport",
    title: "Transport",
    body: "How messages move: often stdio (local subprocess) or HTTP with streaming (remote server).",
  },
] as const;

export const TOOL_CALL_STEPS = [
  { id: "intent", label: "Agent decides", detail: "The model chooses a tool name and JSON arguments." },
  { id: "client", label: "Client sends", detail: "The MCP client issues a tools/call (or equivalent) to the server." },
  { id: "server", label: "Server runs", detail: "Your server code hits an API, database, or local command." },
  { id: "result", label: "Result returns", detail: "Structured content goes back to the client → host → model context." },
  { id: "reply", label: "User sees answer", detail: "The agent summarizes or continues with another tool call." },
] as const;

export const CONFIG_EXAMPLES = [
  {
    id: "stdio",
    label: "Local (stdio)",
    config: `{
  "mcpServers": {
    "postgres": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-postgres", "postgresql://localhost/mydb"]
    }
  }
}`,
    note: "Spawns a child process; stdin/stdout carry JSON-RPC messages.",
  },
  {
    id: "remote",
    label: "Remote (HTTP)",
    config: `{
  "mcpServers": {
    "team-api": {
      "url": "https://mcp.example.com/sse"
    }
  }
}`,
    note: "Server runs elsewhere; host connects over the network (often SSE).",
  },
] as const;

export const MCP_VS_BUILTIN = [
  {
    id: "builtin",
    prompt: "Read a file in the open workspace",
    answer: "builtin",
    why: "Built-in file tools are always available; no server needed.",
  },
  {
    id: "mcp",
    prompt: "Create a Linear issue from this bug report",
    answer: "mcp",
    why: "Third-party systems need a server that speaks MCP and holds API credentials.",
  },
  {
    id: "mcp2",
    prompt: "Query production Postgres with read-only SQL",
    answer: "mcp",
    why: "Databases and internal APIs are classic MCP server use cases.",
  },
  {
    id: "builtin2",
    prompt: "Run npm test in the project terminal",
    answer: "builtin",
    why: "Shell is a host capability; MCP is for extending beyond what ships in the IDE.",
  },
] as const;

export const AUTH_STATES = [
  { id: "ok", label: "Connected", detail: "Tools listed; calls succeed." },
  { id: "needsAuth", label: "needsAuth", detail: "Server is configured but user must sign in or approve OAuth." },
  { id: "error", label: "error", detail: "Server failed to start or transport broke; tools unavailable." },
] as const;
