import "@/styles/walkthrough.css";
import "@/styles/pw-shared.css";
import "@/styles/roadmap-workshops.css";

export default function Layout({ children }: { children: React.ReactNode }) {
  return <div className="walkthrough-root as-walkthrough ws-roadmap">{children}</div>;
}
