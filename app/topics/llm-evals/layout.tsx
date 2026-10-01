import "@/styles/walkthrough.css";
import "@/styles/llm-evals.css";

export default function LlmEvalsLayout({ children }: { children: React.ReactNode }) {
  return <div className="walkthrough-root ev-walkthrough">{children}</div>;
}
