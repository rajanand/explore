import "@/styles/walkthrough.css";
import "@/styles/pw-shared.css";
import "@/styles/tokenization.css";

export default function Layout({ children }: { children: React.ReactNode }) {
  return <div className="walkthrough-root tok-walkthrough">{children}</div>;
}
