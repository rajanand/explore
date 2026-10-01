/**
 * Scaffold a workshop from lib/ai-roadmap/modules.ts entry.
 * Usage: node scripts/scaffold-workshop.mjs tokenization
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");

const slug = process.argv[2];
if (!slug) {
  console.error("Usage: node scripts/scaffold-workshop.mjs <slug>");
  process.exit(1);
}

// Minimal inline parse — read modules.ts for slug block (avoid TS compile)
const modulesPath = path.join(root, "lib/ai-roadmap/modules.ts");
const src = fs.readFileSync(modulesPath, "utf8");
const blockRe = new RegExp(
  `\\{[\\s\\S]*?slug:\\s*"${slug}"[\\s\\S]*?accent:\\s*"([^"]+)"[\\s\\S]*?\\},`,
  "m"
);
const block = src.match(blockRe);
if (!block) {
  console.error(`Slug not found in modules.ts: ${slug}`);
  process.exit(1);
}
const b = block[0];
const pick = (key) => {
  const m = b.match(new RegExp(`${key}:\\s*"([^"]*)"`));
  return m ? m[1] : "";
};
const meta = {
  slug,
  shortTitle: pick("shortTitle"),
  title: pick("title"),
  description: pick("description"),
  outcome: pick("outcome"),
  accent: pick("accent"),
};
const prefix = slug.split("-").map((s) => s[0]).join("").slice(0, 4) || slug.slice(0, 4);
const classPrefix = prefix.replace(/[^a-z]/gi, "").toLowerCase() || "ws";
const Pascal = slug
  .split("-")
  .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
  .join("");

const dirs = [
  `components/${slug}`,
  `lib/${slug}`,
  `app/topics/${slug}`,
];

for (const d of dirs) {
  fs.mkdirSync(path.join(root, d), { recursive: true });
}

const sidebar = `"use client";

const STEPS = [
  { id: "hero", num: "·", label: "Start" },
  { id: "concept", num: "01", label: "Core idea" },
  { id: "lab1", num: "02", label: "Lab 1" },
  { id: "lab2", num: "03", label: "Lab 2" },
  { id: "recap", num: "04", label: "Recap" },
] as const;

export const ${Pascal.replace(/-/g, "")}_SECTION_IDS = STEPS.map((s) => s.id);

export default function ${Pascal}Sidebar({ activeId }: { activeId: string }) {
  return (
    <aside className="sidebar ${classPrefix}-sidebar">
      <p className="brand">${meta.shortTitle}</p>
      <nav>
        {STEPS.map((step) => (
          <a
            key={step.id}
            className={\`step-link \${activeId === step.id ? "active" : ""}\`}
            href={\`#\${step.id}\`}
          >
            <span className="num">{step.num}</span>
            {step.label}
          </a>
        ))}
      </nav>
    </aside>
  );
}
`;

const lab1 = `"use client";

import React, { useState } from "react";

export default function ${Pascal}Lab1Interactive() {
  const [on, setOn] = useState(false);
  return (
    <>
      <p className="lede">TODO: replace with domain-specific simulation for ${slug}.</p>
      <button type="button" className={\`btn \${on ? "active" : ""}\`} onClick={() => setOn((v) => !v)}>
        Toggle scenario
      </button>
      {on && <p className="pw-verdict">Scenario active — implement real logic in this component.</p>}
    </>
  );
}
`;

const walkthrough = `"use client";

import React from "react";
import ${Pascal}Sidebar, { ${Pascal.replace(/-/g, "")}_SECTION_IDS } from "@/components/${slug}/${Pascal}Sidebar";
import ${Pascal}Lab1Interactive from "@/components/${slug}/${Pascal}Lab1Interactive";
import ${Pascal}Lab2Interactive from "@/components/${slug}/${Pascal}Lab2Interactive";
import RelatedModules from "@/components/shared/RelatedModules";
import { useScrollSpy } from "@/hooks/useScrollSpy";

export default function ${Pascal}WalkthroughApp() {
  const activeId = useScrollSpy(${Pascal.replace(/-/g, "")}_SECTION_IDS);

  return (
    <div className="app">
      <${Pascal}Sidebar activeId={activeId} />
      <main>
        <section className="hero" id="hero">
          <p className="eyebrow">AI · ${meta.shortTitle}</p>
          <h1>${meta.title.replace(/ & /g, " ")}</h1>
          <p className="lede">${meta.description}</p>
          <div className="panel mono pw-outcome">After this module: ${meta.outcome}</div>
        </section>

        <section className="step" id="concept">
          <p className="eyebrow">Part 1 · Step 01</p>
          <h2 className="title">Core idea</h2>
          <p className="lede">Expand with accurate, IT-flavored narrative.</p>
        </section>

        <section className="step" id="lab1">
          <p className="eyebrow">Part 1 · Step 02</p>
          <h2 className="title">Lab 1</h2>
          <${Pascal}Lab1Interactive />
        </section>

        <section className="step" id="lab2">
          <p className="eyebrow">Part 2 · Step 03</p>
          <h2 className="title">Lab 2</h2>
          <${Pascal}Lab2Interactive />
        </section>

        <section className="step" id="recap">
          <p className="eyebrow">Part 2 · Step 04</p>
          <h2 className="title">Recap</h2>
          <RelatedModules links={[]} />
        </section>
      </main>
    </div>
  );
}
`;

const css = `.${classPrefix}-walkthrough {
  --${classPrefix}-accent: ${meta.accent};
  --walk-amber: var(--${classPrefix}-accent);
}
`;

const layout = `import "@/styles/walkthrough.css";
import "@/styles/pw-shared.css";
import "@/styles/${slug}.css";

export default function Layout({ children }: { children: React.ReactNode }) {
  return <div className="walkthrough-root ${classPrefix}-walkthrough">{children}</div>;
}
`;

const page = `import ${Pascal}WalkthroughApp from "@/components/${slug}/${Pascal}WalkthroughApp";

export default function Page() {
  return <${Pascal}WalkthroughApp />;
}
`;

const content = `export const MODULE_SLUG = "${slug}";
`;

function write(rel, body) {
  const p = path.join(root, rel);
  if (fs.existsSync(p)) {
    console.log("skip exists", rel);
    return;
  }
  fs.writeFileSync(p, body);
  console.log("wrote", rel);
}

write(`components/${slug}/${Pascal}Sidebar.tsx`, sidebar);
write(`components/${slug}/${Pascal}Lab1Interactive.tsx`, lab1);
write(`components/${slug}/${Pascal}Lab2Interactive.tsx`, lab1.replace("Lab1", "Lab2"));
write(`components/${slug}/${Pascal}WalkthroughApp.tsx`, walkthrough);
write(`styles/${slug}.css`, css);
write(`app/topics/${slug}/layout.tsx`, layout);
write(`app/topics/${slug}/page.tsx`, page);
write(`lib/${slug}/content.ts`, content);

console.log("Done. Implement labs + register site.config + curriculum.");
