import "@/styles/walkthrough.css";
import "@/styles/pw-shared.css";
import "@/styles/chunking-strategies.css";

export default function Layout({ children }: { children: React.ReactNode }) {
  return <div className="walkthrough-root chunk-walkthrough">{children}</div>;
}
