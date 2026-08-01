import "@/styles/walkthrough.css";
import "@/styles/rag.css";

export default function RagLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="walkthrough-root">{children}</div>;
}
