import "@/styles/walkthrough.css";
import "@/styles/pw-shared.css";
import "@/styles/neural-networks-llm.css";

export default function Layout({ children }: { children: React.ReactNode }) {
  return <div className="walkthrough-root nn-walkthrough">{children}</div>;
}
