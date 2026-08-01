import React from "react";
import Link from "next/link";
import { siteConfig } from "@/site.config";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="site-footer-inner">
        <div className="site-footer-brand">
          <p className="site-footer-title">{siteConfig.title}</p>
          <p className="site-footer-desc">{siteConfig.description}</p>
        </div>

        <div className="site-footer-links">
          <p className="site-footer-heading">Modules</p>
          <ul>
            {siteConfig.topics.map((topic) => (
              <li key={topic.slug}>
                <Link href={`/topics/${topic.slug}`}>{topic.title}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="site-footer-links">
          <p className="site-footer-heading">Explore</p>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <a href="#modules">All modules</a>
            </li>
            <li>
              <Link href="/topics/llm-intro">Start learning</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="site-footer-bottom">
        <p>© {year} {siteConfig.title}. Built for intuitive AI education.</p>
      </div>
    </footer>
  );
}
