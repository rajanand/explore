import "@/styles/walkthrough.css";
import "@/styles/llm-intro.css";

export default function LlmIntroLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="walkthrough-root">{children}</div>;
}
