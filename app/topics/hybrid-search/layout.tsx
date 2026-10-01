import "@/styles/walkthrough.css";
import "@/styles/hybrid-search.css";

export default function HybridSearchLayout({ children }: { children: React.ReactNode }) {
  return <div className="walkthrough-root hs-walkthrough">{children}</div>;
}
