import "@/styles/walkthrough.css";
import "@/styles/embeddings.css";

export default function EmbeddingsLayout({ children }: { children: React.ReactNode }) {
  return <div className="walkthrough-root emb-walkthrough">{children}</div>;
}
