import "@/styles/walkthrough.css";
import "@/styles/cursor-agents.css";

export default function CursorAgentsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="walkthrough-root ca-walkthrough">{children}</div>;
}
