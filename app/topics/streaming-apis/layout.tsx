import "@/styles/walkthrough.css";
import "@/styles/pw-shared.css";
import "@/styles/streaming-apis.css";

export default function Layout({ children }: { children: React.ReactNode }) {
  return <div className="walkthrough-root strm-walkthrough">{children}</div>;
}
