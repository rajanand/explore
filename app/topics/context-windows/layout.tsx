import "@/styles/walkthrough.css";
import "@/styles/pw-shared.css";
import "@/styles/context-windows.css";

export default function Layout({ children }: { children: React.ReactNode }) {
  return <div className="walkthrough-root ctx-walkthrough">{children}</div>;
}
