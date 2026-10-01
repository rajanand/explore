import "@/styles/walkthrough.css";
import "@/styles/pw-shared.css";
import "@/styles/tool-calling.css";

export default function Layout({ children }: { children: React.ReactNode }) {
  return <div className="walkthrough-root tc-walkthrough">{children}</div>;
}
