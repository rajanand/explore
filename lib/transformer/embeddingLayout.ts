import { getEmbeddingClusters } from "./embeddingSimilarity";

/** Illustrative 2D projection centers (not from a trained model). */
const CLUSTER_CENTERS: Record<string, { x: number; y: number }> = {
  objects: { x: 0.68, y: 0.56 },
  articles: { x: 0.16, y: 0.38 },
  verbs: { x: 0.44, y: 0.76 },
  connectors: { x: 0.32, y: 0.48 },
  pronouns: { x: 0.52, y: 0.28 },
  modifiers: { x: 0.84, y: 0.74 },
};

const TOKEN_OFFSETS: Record<string, { dx: number; dy: number }> = {
  trophy: { dx: -0.04, dy: -0.03 },
  suitcase: { dx: 0.04, dy: 0.03 },
  the: { dx: -0.02, dy: 0.02 },
  fit: { dx: 0.03, dy: -0.02 },
  was: { dx: -0.03, dy: 0.02 },
  "didn't": { dx: -0.02, dy: -0.02 },
  in: { dx: 0.02, dy: 0.01 },
  because: { dx: -0.03, dy: 0.02 },
  it: { dx: 0.02, dy: -0.02 },
  too: { dx: -0.02, dy: 0.02 },
  big: { dx: 0.02, dy: -0.01 },
  small: { dx: 0.03, dy: 0.01 },
};

function jitter(seed: number): number {
  const s = Math.sin(seed * 12.9898) * 43758.5453;
  return (s - Math.floor(s)) * 0.06 - 0.03;
}

export type EmbeddingPoint = {
  idx: number;
  token: string;
  x: number;
  y: number;
  cluster: string | undefined;
};

export type EmbeddingClusterRegion = {
  id: string;
  label: string;
  cx: number;
  cy: number;
  rx: number;
  ry: number;
};

export const OBJECTS_CLUSTER_REGION: EmbeddingClusterRegion = {
  id: "objects",
  label: "physical objects",
  cx: 0.68,
  cy: 0.56,
  rx: 0.14,
  ry: 0.11,
};

export function getEmbedding2DLayout(tokens: string[]): EmbeddingPoint[] {
  const clusters = getEmbeddingClusters(tokens);

  return tokens.map((token, idx) => {
    const cluster = clusters.get(idx);
    const lower = token.toLowerCase();
    const center = cluster
      ? CLUSTER_CENTERS[cluster]
      : { x: 0.5 + jitter(idx), y: 0.5 + jitter(idx + 3) };
    const offset = TOKEN_OFFSETS[lower] ?? { dx: 0, dy: 0 };

    return {
      idx,
      token,
      x: Math.min(0.94, Math.max(0.06, center.x + offset.dx + jitter(idx * 2))),
      y: Math.min(0.92, Math.max(0.08, center.y + offset.dy + jitter(idx * 2 + 1))),
      cluster,
    };
  });
}

export function findTokenIdx(tokens: string[], word: string): number {
  return tokens.map((t) => t.toLowerCase()).indexOf(word.toLowerCase());
}
