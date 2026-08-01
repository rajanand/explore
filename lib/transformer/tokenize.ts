export function tokenizeSentence(text: string): string[] {
  const trimmed = text.trim();
  if (!trimmed) return [];

  const parts = trimmed.split(/\s+/);
  const tokens: string[] = [];

  for (const part of parts) {
    const match = part.match(/^(.+?)([.,!?;:]+)$/);
    if (match) {
      tokens.push(match[1]);
      if (match[2]) tokens.push(match[2]);
    } else {
      tokens.push(part);
    }
  }

  return tokens;
}
