import "@/styles/walkthrough.css";
import "@/styles/pw-shared.css";
import "@/styles/vector-databases.css";

export default function VectorDatabasesLayout({ children }: { children: React.ReactNode }) {
  return <div className="walkthrough-root vdb-walkthrough">{children}</div>;
}
