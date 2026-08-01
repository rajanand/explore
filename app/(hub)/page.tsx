import React from "react";
import Link from "next/link";
import { siteConfig } from "@/site.config";

export default function Home() {
  return (
    <div className="hub-content">
      <section className="hub-hero">
        <p className="eyebrow">Interactive learning</p>
        <h1>
          Welcome to the <em className="accent-text">{siteConfig.title}</em>
        </h1>
        <p className="hub-lede">{siteConfig.description}</p>
      </section>

      <section className="hub-section">
        <div className="hub-section-header">
          <h2>Available modules</h2>
          <span className="font-mono text-xs text-muted border border-card-border px-2.5 py-1 rounded-md">
            {siteConfig.topics.length}{" "}
            {siteConfig.topics.length === 1 ? "module" : "modules"}
          </span>
        </div>

        <div className="hub-module-grid">
          {siteConfig.topics.map((topic) => (
            <Link
              key={topic.slug}
              href={`/topics/${topic.slug}`}
              className="hub-module-card panel-card block transition-colors duration-200 hover:border-[var(--walk-amber)]"
            >
              <span className="hub-module-category">{topic.category}</span>
              <h3>{topic.title}</h3>
              <p>{topic.description}</p>
              <span className="hub-module-cta">
                Start walkthrough
                <svg
                  className="w-3.5 h-3.5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  viewBox="0 0 24 24"
                  aria-hidden
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
