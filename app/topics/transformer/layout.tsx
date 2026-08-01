import "@/styles/walkthrough.css";

export default function TransformerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="walkthrough-root">{children}</div>;
}
