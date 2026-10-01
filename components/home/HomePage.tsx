"use client";

import React from "react";
import Link from "next/link";
import {
  CURRICULUM_TRACKS,
  topicHref,
  type TopicTier,
} from "@/lib/curriculum";
import HomePagePlates from "@/components/home/HomePagePlates";

const FEATURED_START = { href: "/topics/llm-intro", label: "Start with LLMs" };

export default function HomePage() {
  const workshopCount = CURRICULUM_TRACKS.flatMap((t) => t.topics).filter(
    (x) => x.tier === "workshop"
  ).length;

  return (
    <div className="home-page">
      <HomePagePlates />

      <section className="home-hero">
        <div className="home-hero-content">
          <div className="home-hero-inner">
            <p className="home-eyebrow">
              <span className="home-eyebrow-dot" />
              Interactive AI learning
            </p>

            <h1 className="home-title">
              Understand AI
              <br />
              <em>by exploring it</em>
            </h1>

            <p className="home-lede">
              Depth-first walkthroughs for engineers and IT teams — not a flat
              catalog of shallow pages. Use <strong>Learn</strong> in the menu for
              every module; start from a path below.
            </p>

            <div className="home-hero-actions">
              <Link href={FEATURED_START.href} className="home-btn home-btn-primary">
                {FEATURED_START.label}
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  aria-hidden
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                  />
                </svg>
              </Link>
              <a href="#paths" className="home-btn home-btn-ghost">
                Choose a path
              </a>
            </div>

            <div className="home-hero-stats">
              <div className="home-stat">
                <span className="home-stat-value">{workshopCount}</span>
                <span className="home-stat-label">deep workshops</span>
              </div>
              <div className="home-stat-divider" />
              <div className="home-stat">
                <span className="home-stat-value">{CURRICULUM_TRACKS.length}</span>
                <span className="home-stat-label">learning paths</span>
              </div>
              <div className="home-stat-divider" />
              <div className="home-stat">
                <span className="home-stat-value">Free</span>
                <span className="home-stat-label">open learning</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="home-paths" id="paths" aria-label="Learning paths">
        <div className="home-paths-header">
          <h2>Pick a path</h2>
          <p>
            Each path orders modules by what you need first. Workshops include
            multiple interactives and IT-shaped scenarios.
          </p>
        </div>
        <div className="home-path-grid">
          {CURRICULUM_TRACKS.map((track) => (
            <article key={track.id} className="home-path-card">
              <h3>{track.label}</h3>
              <p>{track.description}</p>
              <ol className="home-path-card-list">
                {track.topics.map((t, i) => (
                  <li key={t.slug}>
                    <Link href={topicHref(t.slug)}>
                      <span className="home-path-card-num">{i + 1}</span>
                      {t.shortTitle}
                      <TierPill tier={t.tier} />
                    </Link>
                  </li>
                ))}
              </ol>
            </article>
          ))}
        </div>
      </section>

      <section className="home-quality panel">
        <h2>What makes a module useful here</h2>
        <ul className="home-quality-list">
          <li>
            <strong>Do something</strong> — toggle, simulate, or decide; not walls of text.
          </li>
          <li>
            <strong>IT-shaped examples</strong> — incidents, runbooks, internal docs, copilots.
          </li>
          <li>
            <strong>Clear outcome</strong> — you know what to do differently on Monday.
          </li>
        </ul>
        <p className="home-quality-note">
          Production track modules are full workshops — retrieval, agents, evals, and
          governance with hands-on steps.
        </p>
      </section>
    </div>
  );
}

function TierPill({ tier }: { tier: TopicTier }) {
  if (tier === "workshop") {
    return <span className="home-tier home-tier--workshop">workshop</span>;
  }
  return <span className="home-tier home-tier--guide">guide</span>;
}
