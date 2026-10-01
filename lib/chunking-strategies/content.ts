export const DOC =
  "Step 1: Verify VPN profile. Step 2: Reset token. Step 3: If INC persists, escalate to payments on-call.";

export function chunksForSize(size: number, overlap: number) {
  const words = DOC.split(/\s+/);
  const out: string[] = [];
  let i = 0;
  while (i < words.length) {
    const slice = words.slice(i, i + size).join(" ");
    out.push(slice);
    i += Math.max(1, size - overlap);
  }
  return out;
}

export const QUERY = "escalate payments on-call";
