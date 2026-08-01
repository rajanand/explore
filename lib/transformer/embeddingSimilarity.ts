import type { TokenChipState } from "@/components/TokenChip";

/** Illustrative similarity clusters (not from a trained model). */
export const EMBEDDING_CLUSTER_LABELS: Record<string, string> = {
  objects: "physical objects",
  articles: "articles / determiners",
  verbs: "verbs",
  connectors: "connectors",
  pronouns: "pronouns",
  modifiers: "modifiers",
};

export function getEmbeddingClusters(tokens: string[]): Map<number, string> {
  const lower = tokens.map((t) => t.toLowerCase());
  const clusterByIdx = new Map<number, string>();

  const assign = (words: string[], cluster: string) => {
    words.forEach((w) => {
      const i = lower.indexOf(w);
      if (i >= 0) clusterByIdx.set(i, cluster);
    });
  };

  assign(["trophy", "suitcase"], "objects");
  assign(["the"], "articles");
  assign(["fit", "was"], "verbs");
  assign(["in", "because"], "connectors");
  assign(["it"], "pronouns");
  assign(["too", "big", "small"], "modifiers");
  assign(["didn't", "did", "n't"], "verbs");

  return clusterByIdx;
}

export function getEmbeddingStates(
  selectedIdx: number | null,
  tokens: string[]
): Record<number, TokenChipState> {
  const states: Record<number, TokenChipState> = {};
  const clusters = getEmbeddingClusters(tokens);

  for (let i = 0; i < tokens.length; i++) states[i] = "default";

  if (selectedIdx === null) return states;

  states[selectedIdx] = "focus";
  const selectedCluster = clusters.get(selectedIdx);

  if (!selectedCluster) return states;

  for (let i = 0; i < tokens.length; i++) {
    if (i === selectedIdx) continue;
    if (clusters.get(i) === selectedCluster) {
      states[i] = "target";
    } else {
      states[i] = "dim";
    }
  }

  return states;
}

function quoteToken(token: string): string {
  return `"${token}"`;
}

export function getEmbeddingExplainer(
  selectedIdx: number | null,
  tokens: string[]
): string | null {
  if (selectedIdx === null) {
    return "Click a token to see which others sit in a similar region of embedding space.";
  }

  const token = tokens[selectedIdx];
  const clusters = getEmbeddingClusters(tokens);
  const cluster = clusters.get(selectedIdx);

  if (!cluster) {
    return `${quoteToken(token)} - click another token to compare illustrative clusters.`;
  }

  const label = EMBEDDING_CLUSTER_LABELS[cluster] ?? cluster;
  const peers = tokens.filter(
    (_, i) => i !== selectedIdx && clusters.get(i) === cluster
  );

  if (peers.length === 0) {
    return `${quoteToken(token)} is alone in its cluster (${label}) in this sentence.`;
  }

  const peerList = peers.map(quoteToken).join(", ");
  return `${quoteToken(token)} groups with ${peerList} - illustrative ${label} cluster in embedding space.`;
}
