import "@/styles/walkthrough.css";
import "@/styles/mcp-servers.css";

export default function McpServersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="walkthrough-root mcp-walkthrough">{children}</div>;
}
