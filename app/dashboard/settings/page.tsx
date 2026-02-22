export default function DashboardSettingsPage() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      <section className="hq-project-card">
        <p className="text-xs uppercase tracking-[0.14em]">Environment</p>
        <h2 className="mt-3 text-2xl">Execution Defaults</h2>
        <p className="mt-3 text-sm">Configure local ports, production URLs, and project launch targets.</p>
      </section>

      <section className="hq-project-card">
        <p className="text-xs uppercase tracking-[0.14em]">Alerts</p>
        <h2 className="mt-3 text-2xl">Operating Signals</h2>
        <p className="mt-3 text-sm">Define warning thresholds for MRR dips, stuck deals, and build blockers.</p>
      </section>
    </div>
  );
}
