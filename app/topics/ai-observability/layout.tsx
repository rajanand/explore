import "@/styles/walkthrough.css";
import "@/styles/pw-shared.css";
import "@/styles/ai-observability.css";

export default function Layout({ children }: { children: React.ReactNode }) {
  return <div className="walkthrough-root aobs-walkthrough">{children}</div>;
}
