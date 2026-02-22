import HqShell from "@/app/components/hq-shell";

export default function LabExperimentsPage() {
  return (
    <HqShell title="Lab / Experiments" subtitle="R&D test bench (placeholder)">
      <div className="hq-project-card">
        <p className="text-xs uppercase tracking-[0.15em]">Experiment Queue</p>
        <h2 className="mt-3 text-2xl">Coming next</h2>
        <p className="mt-3 text-sm">Track prototype bets, confidence level, and go/no-go decisions.</p>
      </div>
    </HqShell>
  );
}
