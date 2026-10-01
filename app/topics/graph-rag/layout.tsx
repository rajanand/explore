import "@/styles/walkthrough.css";
import "@/styles/graph-rag.css";

export default function GraphRagLayout({ children }: { children: React.ReactNode }) {
  return <div className="walkthrough-root gr-walkthrough">{children}</div>;
}
