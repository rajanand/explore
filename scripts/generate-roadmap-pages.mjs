import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");

const src = fs.readFileSync(path.join(root, "lib/ai-roadmap/modules.ts"), "utf8");
const slugs = [...src.matchAll(/slug:\s*"([^"]+)"/g)].map((m) => m[1]);
const custom = new Set(["tokenization", "decoding-sampling", "neural-networks-llm"]);

for (const slug of slugs) {
  if (custom.has(slug)) continue;
  const block = src.match(new RegExp(`slug:\\s*"${slug}"[\\s\\S]*?accent:\\s*"([^"]+)"`));
  const accent = block ? block[1] : "#0f766e";
  const prefix = slug.split("-").map((s) => s[0]).join("").slice(0, 4).replace(/[^a-z]/gi, "") || "ws";

  const dir = path.join(root, "app/topics", slug);
  fs.mkdirSync(dir, { recursive: true });

  const layout = `import "@/styles/walkthrough.css";
import "@/styles/pw-shared.css";
import "@/styles/roadmap-workshops.css";

export default function Layout({ children }: { children: React.ReactNode }) {
  return <div className="walkthrough-root ${prefix}-walkthrough ws-roadmap">{children}</div>;
}
`;

  const page = `import WorkshopApp from "@/components/workshop/WorkshopApp";

export default function Page() {
  return <WorkshopApp slug="${slug}" />;
}
`;

  fs.writeFileSync(path.join(dir, "layout.tsx"), layout);
  fs.writeFileSync(path.join(dir, "page.tsx"), page);
}

// Per-slug accent variables in roadmap-workshops.css
const css = slugs
  .filter((s) => !custom.has(s))
  .map((slug) => {
    const block = src.match(new RegExp(`slug:\\s*"${slug}"[\\s\\S]*?accent:\\s*"([^"]+)"`));
    const accent = block ? block[1] : "#0f766e";
    const prefix = slug.split("-").map((s) => s[0]).join("").slice(0, 4).replace(/[^a-z]/gi, "") || "ws";
    return `.${prefix}-walkthrough { --walk-amber: ${accent}; }`;
  })
  .join("\n");

fs.writeFileSync(path.join(root, "styles/roadmap-workshops.css"), css + "\n");
console.log("Generated roadmap topic pages:", slugs.filter((s) => !custom.has(s)).length);
