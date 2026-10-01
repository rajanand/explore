import "@/styles/walkthrough.css";
import "@/styles/llm-security.css";

export default function LlmSecurityLayout({ children }: { children: React.ReactNode }) {
  return <div className="walkthrough-root sec-walkthrough">{children}</div>;
}
