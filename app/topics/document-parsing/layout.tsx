import "@/styles/walkthrough.css";
import "@/styles/pw-shared.css";
import "@/styles/document-parsing.css";

export default function Layout({ children }: { children: React.ReactNode }) {
  return <div className="walkthrough-root doc-walkthrough">{children}</div>;
}
