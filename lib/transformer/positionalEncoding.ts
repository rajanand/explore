/** Sinusoidal positional encoding (first d dimensions), scaled for display. */
export function positionalEncoding(
  position: number,
  dims = 4
): number[] {
  const out: number[] = [];
  for (let i = 0; i < dims; i++) {
    const angle = position / Math.pow(10000, (2 * i) / dims);
    out.push(i % 2 === 0 ? Math.sin(angle) : Math.cos(angle));
  }
  return out;
}

export function formatPosVector(values: number[]): string {
  return values.map((v) => v.toFixed(2)).join(", ");
}

export function getAltPositionForToken(
  token: string,
  currentPos: number,
  tokens: string[]
): number | null {
  const lower = token.toLowerCase();
  if (lower !== "it") return null;
  return currentPos === 8 ? 1 : 8;
}

export function getPosEncodingExplainer(
  selectedIdx: number | null,
  tokens: string[],
  altPos: number | null
): string {
  if (selectedIdx === null) {
    return "Click a token to see its position encoding. Identical words at different positions get different vectors.";
  }

  const token = tokens[selectedIdx];
  const pos = altPos ?? selectedIdx;
  const vec = formatPosVector(positionalEncoding(pos));

  if (altPos !== null && altPos !== selectedIdx) {
    return `"${token}" at position ${selectedIdx} vs position ${altPos}: P(${altPos}) = [${vec}] — same embedding, different position pattern → different input to attention.`;
  }

  return `Position ${selectedIdx} for "${token}": P(${selectedIdx}) = [${vec}] added to its embedding before attention.`;
}
