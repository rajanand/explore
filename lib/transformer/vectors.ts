export function randVec(seed: number, n = 4): string[] {
  const out: string[] = [];
  let s = seed;
  for (let i = 0; i < n; i++) {
    s = (s * 9301 + 49297) % 233280;
    out.push((((s / 233280) * 2) - 1).toFixed(2));
  }
  return out;
}
