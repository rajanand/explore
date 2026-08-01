import "@/styles/walkthrough.css";
import "@/styles/git-internals.css";

export default function GitInternalsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="walkthrough-root git-walkthrough">{children}</div>;
}
