import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const src = fs.readFileSync(path.join(root, "lib/ai-roadmap/modules.ts"), "utf8");
const blocks = [...src.matchAll(/slug:\s*"([^"]+)"[\s\S]*?category:\s*"([^"]+)"|slug:\s*"([^"]+)"[\s\S]*?description:\s*"([^"]+)"[\s\S]*?title:\s*"([^"]+)"/g)];

// Simpler: split by slug entries
const entries = [];
for (const m of src.matchAll(/slug:\s*"([^"]+)"[\s\S]*?title:\s*"([^"]+)"[\s\S]*?description:\s*"([^"]+)"/g)) {
  entries.push({
    slug: m[1],
    title: m[2],
    description: m[3],
  });
}

const sitePath = path.join(root, "site.config.ts");
let site = fs.readFileSync(sitePath, "utf8");
const existing = new Set([...site.matchAll(/slug:\s*"([^"]+)"/g)].map((m) => m[1]));

const toAdd = entries.filter((e) => !existing.has(e.slug));
if (!toAdd.length) {
  console.log("No new topics to add");
  process.exit(0);
}

const inserts = toAdd
  .map(
    (e) => `    {
      slug: "${e.slug}",
      title: "${e.title}",
      description: "${e.description}",
      category: "Artificial Intelligence",
    },`
  )
  .join("\n");

site = site.replace(/\s*\],\s*\};\s*$/, `\n${inserts}\n  ],\n};\n`);
fs.writeFileSync(sitePath, site);
console.log("Added", toAdd.length, "topics to site.config.ts");
