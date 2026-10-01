import "@/styles/walkthrough.css";
import "@/styles/prompt-context.css";

export default function PromptContextLayout({ children }: { children: React.ReactNode }) {
  return <div className="walkthrough-root pc-walkthrough">{children}</div>;
}
