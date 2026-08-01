import Sidebar from "@/components/Sidebar";

export default function HubLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-1 min-h-[calc(100vh-var(--navbar-height))]">
      <Sidebar />
      <main className="hub-main">{children}</main>
    </div>
  );
}
