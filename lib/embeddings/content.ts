export type Point2D = { id: string; label: string; x: number; y: number };

export const SCATTER_POINTS: Point2D[] = [
  { id: "a", label: "VPN outage runbook", x: 0.15, y: 0.72 },
  { id: "b", label: "Password reset FAQ", x: 0.22, y: 0.68 },
  { id: "c", label: "INC-1042 postmortem", x: 0.78, y: 0.25 },
  { id: "d", label: "API rate limits", x: 0.82, y: 0.3 },
  { id: "e", label: "On-call handbook", x: 0.18, y: 0.55 },
  { id: "f", label: "SSO SAML config", x: 0.7, y: 0.4 },
];

export const DEFAULT_QUERY = { x: 0.2, y: 0.65 };

export function dist2(a: { x: number; y: number }, b: { x: number; y: number }) {
  return (a.x - b.x) ** 2 + (a.y - b.y) ** 2;
}

export function cosineSim2(a: { x: number; y: number }, b: { x: number; y: number }) {
  const dot = a.x * b.x + a.y * b.y;
  const na = Math.hypot(a.x, a.y) || 1;
  const nb = Math.hypot(b.x, b.y) || 1;
  return dot / (na * nb);
}

export const METRIC_PAIRS = [
  { id: "p1", a: "reset password", b: "account lockout", dot: 0.82, cosine: 0.91 },
  { id: "p2", a: "VPN down", b: "wifi guest network", dot: 0.45, cosine: 0.52 },
  { id: "p3", a: "INC-1042", b: "payment API SLO", dot: 0.71, cosine: 0.88 },
] as const;

export const CHUNK_PRESETS = [
  {
    id: 0,
    label: "Small chunks (256 tokens)",
    chunks: [
      "…users report VPN disconnects after sleep.",
      "Check certificate expiry on gateway…",
    ],
    retrieved: 0,
  },
  {
    id: 1,
    label: "Medium chunks (512 tokens)",
    chunks: [
      "VPN outage: users report disconnects after sleep. Check certificate expiry on gateway and pool capacity.",
    ],
    retrieved: 0,
  },
  {
    id: 2,
    label: "Bad split",
    chunks: [
      "VPN outage: users report",
      "disconnects after sleep. Check cert…",
    ],
    retrieved: 1,
  },
] as const;
