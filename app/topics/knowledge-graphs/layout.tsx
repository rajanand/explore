import "@/styles/walkthrough.css";
import "@/styles/pw-shared.css";
import "@/styles/knowledge-graphs.css";

export default function Layout({ children }: { children: React.ReactNode }) {
  return <div className="walkthrough-root kg-walkthrough">{children}</div>;
}
