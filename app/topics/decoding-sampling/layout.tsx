import "@/styles/walkthrough.css";
import "@/styles/pw-shared.css";
import "@/styles/decoding-sampling.css";

export default function Layout({ children }: { children: React.ReactNode }) {
  return <div className="walkthrough-root dec-walkthrough">{children}</div>;
}
