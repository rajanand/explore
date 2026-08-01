import "@/styles/walkthrough.css";
import "@/styles/ontology.css";

export default function OntologyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="walkthrough-root">{children}</div>;
}
