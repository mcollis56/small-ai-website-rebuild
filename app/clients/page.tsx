import HqShell from "@/app/components/hq-shell";

export default function ClientsPage() {
  return (
    <HqShell title="Clients" subtitle="Agency account management (placeholder)">
      <div className="hq-project-card">
        <p className="text-xs uppercase tracking-[0.15em]">Client CRM</p>
        <h2 className="mt-3 text-2xl">Coming next</h2>
        <p className="mt-3 text-sm">Add client records, engagement status, and account health notes.</p>
      </div>
    </HqShell>
  );
}
