"use client";

import React from "react";
import Link from "next/link";

type LinkItem = { href: string; label: string };

export default function RelatedModules({ links }: { links: LinkItem[] }) {
  return (
    <div className="related-modules panel">
      <p className="related-modules-label">Related modules</p>
      <ul className="related-modules-list">
        {links.map((l) => (
          <li key={l.href}>
            <Link href={l.href}>{l.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
