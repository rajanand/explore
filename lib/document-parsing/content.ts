export const RAW_TABLE = `Incident SLA matrix
Tier|P1 response|Owner
Gold|15m|SOC
Silver|1h|App team`;

export const PARSED_TABLE = `## Incident SLA matrix
| Tier | P1 response | Owner |
| Gold | 15m | SOC |
| Silver | 1h | App team |`;

export const NAIVE_CHUNK =
  "Tier|P1 response|Owner Gold|15m|SOC Silver|1h|App team — columns merged, retrieval misses Gold row.";

export const CLEAN_CHUNK = "Gold tier P1 response 15m owner SOC — row preserved for embedding.";
