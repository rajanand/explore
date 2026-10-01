import "@/styles/walkthrough.css";
import "@/styles/ai-agents.css";

export default function AiAgentsLayout({ children }: { children: React.ReactNode }) {
  return <div className="walkthrough-root aa-walkthrough">{children}</div>;
}
