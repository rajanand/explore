import "@/styles/walkthrough.css";
import "@/styles/pw-shared.css";
import "@/styles/reranking.css";

export default function Layout({ children }: { children: React.ReactNode }) {
  return <div className="walkthrough-root rr-walkthrough">{children}</div>;
}
