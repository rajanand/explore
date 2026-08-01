"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig, Topic } from "@/site.config";

export default function Sidebar() {
  const pathname = usePathname();

  const categories = siteConfig.topics.reduce(
    (acc: Record<string, Topic[]>, topic) => {
      if (!acc[topic.category]) acc[topic.category] = [];
      acc[topic.category].push(topic);
      return acc;
    },
    {}
  );

  return (
    <aside className="hub-sidebar hidden md:block">
      <p className="sidebar-brand">Explore topics</p>
      <div className="sidebar-groups">
        {Object.entries(categories).map(([category, topics]) => (
          <div key={category}>
            <h4 className="sidebar-category">{category}</h4>
            <ul className="sidebar-nav">
              {topics.map((topic) => {
                const href = `/topics/${topic.slug}`;
                const isActive = pathname === href;
                return (
                  <li key={topic.slug}>
                    <Link
                      href={href}
                      className={`sidebar-link ${isActive ? "active" : ""}`}
                    >
                      {topic.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    </aside>
  );
}
