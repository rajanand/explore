import "@/styles/walkthrough.css";
import "@/styles/fine-tuning.css";

export default function FineTuningLayout({ children }: { children: React.ReactNode }) {
  return <div className="walkthrough-root ft-walkthrough">{children}</div>;
}
