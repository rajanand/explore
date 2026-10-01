import "@/styles/walkthrough.css";
import "@/styles/pw-shared.css";
import "@/styles/ai-governance.css";

export default function Layout({ children }: { children: React.ReactNode }) {
  return <div className="walkthrough-root gov-walkthrough">{children}</div>;
}
