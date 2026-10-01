import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const src = fs.readFileSync(path.join(root, "lib/ai-roadmap/modules.ts"), "utf8");

const byTrack = {
  "ai-basics": [],
  "ai-core": [],
  "ai-retrieval": [],
  "ai-agents": [],
  "ai-platform": [],
};

for (const m of src.matchAll(
  /slug:\s*"([^"]+)"[\s\S]*?shortTitle:\s*"([^"]+)"[\s\S]*?trackId:\s*"([^"]+)"/g
)) {
  const trackId = m[3];
  if (byTrack[trackId]) byTrack[trackId].push({ slug: m[1], shortTitle: m[2] });
}

const trackMeta = [
  { id: "ai-basics", label: "AI basics", menuLabel: "Basics", description: "Tokens, decoding, and neural net intuition before depth." },
  { id: "ai-core", label: "AI core", menuLabel: "Core ML", description: "Pretraining, alignment concepts, and model choice." },
  { id: "ai-retrieval", label: "Retrieval & quality", menuLabel: "Retrieval+", description: "Advanced RAG, evals, SQL, and multimodal retrieval." },
  { id: "ai-agents", label: "Agents & safety", menuLabel: "Agents+", description: "Memory, planning, red team, and permissions." },
  { id: "ai-platform", label: "AI platform", menuLabel: "Platform", description: "Routing, cost, SLOs, and incident copilot capstone." },
];

const newTracks = trackMeta
  .map((t) => ({
    id: t.id,
    label: t.label,
    menuLabel: t.menuLabel,
    description: t.description,
    topics: byTrack[t.id].map((x) => ({ slug: x.slug, shortTitle: x.shortTitle, tier: "workshop" })),
  }))
  .filter((t) => t.topics.length);

const curPath = path.join(root, "lib/curriculum.ts");
let cur = fs.readFileSync(curPath, "utf8");

// Insert new tracks after foundations block (before production)
const insert = newTracks
  .map(
    (t) => `  {
    id: "${t.id}",
    label: "${t.label}",
    menuLabel: "${t.menuLabel}",
    description: "${t.description}",
    topics: [
${t.topics.map((x) => `      { slug: "${x.slug}", shortTitle: "${x.shortTitle}", tier: "workshop" },`).join("\n")}
    ],
  },`
  )
  .join("\n");

if (cur.includes('id: "ai-basics"')) {
  console.log("Curriculum already has ai-basics track");
  process.exit(0);
}

cur = cur.replace(
  /(\{\s*id: "foundations",[\s\S]*?\},\s*)\n(\s*\{\s*id: "production")/,
  `$1\n${insert}\n$2`
);

fs.writeFileSync(curPath, cur);
console.log("Inserted", newTracks.length, "curriculum tracks");
