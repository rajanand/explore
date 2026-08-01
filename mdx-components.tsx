import type { MDXComponents } from "mdx/types";
import React from "react";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    h1: ({ children, ...props }) => (
      <h1
        className="text-4xl md:text-5xl font-heading mt-8 mb-6 tracking-tight text-foreground"
        {...props}
      >
        {children}
      </h1>
    ),
    h2: ({ children, ...props }) => (
      <h2
        className="text-2xl md:text-3xl font-heading mt-10 mb-4 border-b border-card-border pb-2 text-foreground"
        {...props}
      >
        {children}
      </h2>
    ),
    h3: ({ children, ...props }) => (
      <h3
        className="text-xl md:text-2xl font-heading mt-6 mb-3 text-foreground"
        {...props}
      >
        {children}
      </h3>
    ),
    p: ({ children, ...props }) => (
      <p className="text-base leading-relaxed text-muted mb-6 max-w-[62ch]" {...props}>
        {children}
      </p>
    ),
    ul: ({ children, ...props }) => (
      <ul className="list-disc pl-6 mb-6 space-y-2 text-muted max-w-[62ch]" {...props}>
        {children}
      </ul>
    ),
    ol: ({ children, ...props }) => (
      <ol className="list-decimal pl-6 mb-6 space-y-2 text-muted max-w-[62ch]" {...props}>
        {children}
      </ol>
    ),
    blockquote: ({ children, ...props }) => (
      <blockquote
        className="border-l-2 border-primary pl-4 my-6 text-muted panel-card p-4 rounded-r-lg max-w-[62ch]"
        {...props}
      >
        {children}
      </blockquote>
    ),
    code: ({ children, ...props }) => (
      <code
        className="px-1.5 py-0.5 rounded bg-muted-light text-primary font-mono text-sm"
        {...props}
      >
        {children}
      </code>
    ),
    pre: ({ children, ...props }) => (
      <pre
        className="panel-card p-5 rounded-xl overflow-x-auto font-mono text-sm my-6"
        {...props}
      >
        {children}
      </pre>
    ),
  };
}
