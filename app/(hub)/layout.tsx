import Footer from "@/components/Footer";
import "@/styles/home.css";

export default function HubLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="hub-shell">
      <main className="hub-main">{children}</main>
      <Footer />
    </div>
  );
}
