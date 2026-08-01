export type HeadHighlight = {
  num: number;
  label: string;
  description: string;
  highlightIdxs: number[];
};

/** Heads shown in the walkthrough demo — illustrative, not from a trained model. */
export const DEMO_HEAD_COUNT = 8;

function idx(tokens: string[], word: string): number {
  return tokens.map((t) => t.toLowerCase()).indexOf(word.toLowerCase());
}

function pair(
  tokens: string[],
  a: string,
  b: string,
  fallbackA: number,
  fallbackB: number
): number[] {
  const i = idx(tokens, a);
  const j = idx(tokens, b);
  if (i >= 0 && j >= 0) return [i, j];
  return [fallbackA, fallbackB].filter((n) => n >= 0 && n < tokens.length);
}

export function getMultiHeadHighlights(tokens: string[]): HeadHighlight[] {
  const heads: Omit<HeadHighlight, "num">[] = [
    {
      label: "local grammar",
      description: "Neighboring words — article + noun",
      highlightIdxs: pair(tokens, "The", "trophy", 0, 1),
    },
    {
      label: "coreference",
      description: "Pronoun → antecedent (Step 04)",
      highlightIdxs: pair(tokens, "it", "trophy", 8, 1),
    },
    {
      label: "negation scope",
      description: "Negation reaching the verb",
      highlightIdxs: pair(tokens, "didn't", "fit", 2, 3),
    },
    {
      label: "preposition phrase",
      description: "Preposition + object",
      highlightIdxs: pair(tokens, "in", "suitcase", 4, 6),
    },
    {
      label: "article–noun",
      description: "Second article pairing",
      highlightIdxs: pair(tokens, "the", "suitcase", 5, 6),
    },
    {
      label: "clause bridge",
      description: "Subordinator → main clause",
      highlightIdxs: pair(tokens, "because", "it", 7, 8),
    },
    {
      label: "modifier scope",
      description: "Degree word + adjective",
      highlightIdxs: pair(tokens, "too", "big", 10, 11),
    },
    {
      label: "long-range syntax",
      description: "Subject linked across the sentence",
      highlightIdxs: pair(tokens, "trophy", "fit", 1, 3),
    },
  ];

  return heads.map((h, i) => ({ ...h, num: i + 1 }));
}
