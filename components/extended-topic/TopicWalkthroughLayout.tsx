import "@/styles/walkthrough.css";
import "@/styles/extended-topic.css";

export default function TopicWalkthroughLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="walkthrough-root ext-walkthrough">{children}</div>;
}
