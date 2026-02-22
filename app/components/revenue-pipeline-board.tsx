const topMetrics = [
  { label: "Safe Money", title: "MRR (Monthly Recurring)", value: "$12,500" },
  { label: "Hunts", title: "Project Revenue", value: "$45,000" },
  { label: "Potential", title: "Pipeline Value", value: "$80,000" }
];

const pipelineColumns = [
  {
    name: "Leads",
    deals: [
      { title: "Local Council Bot", value: "$18,000" },
      { title: "Dental Recall Engine", value: "$9,000" }
    ]
  },
  {
    name: "Meeting Booked",
    deals: [
      { title: "Euro Motors Expansion", value: "$24,000" },
      { title: "Boutique Hotel Concierge AI", value: "$15,000" }
    ]
  },
  {
    name: "Proposal Sent",
    deals: [
      { title: "Garden Center SaaS", value: "$22,000" },
      { title: "Trade Contractor Dispatch Bot", value: "$11,000" }
    ]
  },
  {
    name: "Signed",
    deals: [
      { title: "MechanicMonkey Pilot", value: "$30,000" },
      { title: "SiteSage Onboarding Wave 2", value: "$12,000" }
    ]
  }
];

export default function RevenuePipelineBoard() {
  return (
    <>
      <section className="grid gap-4 lg:grid-cols-3">
        {topMetrics.map((metric) => (
          <article key={metric.title} className="hq-project-card bg-[#fffdf5]">
            <p className="text-xs uppercase tracking-[0.16em]">{metric.label}</p>
            <p className="mt-2 text-sm font-semibold uppercase tracking-[0.08em]">{metric.title}</p>
            <p className="mt-5 text-5xl leading-none md:text-6xl" style={{ fontFamily: "Space Grotesk, Inter, sans-serif" }}>
              {metric.value}
            </p>
          </article>
        ))}
      </section>

      <section className="mt-8">
        <div className="mb-4 border-[3px] border-[#1a1a1a] bg-[#fffdf5] px-4 py-3 shadow-[6px_6px_0_#1a1a1a]">
          <h2 className="text-2xl md:text-3xl">Sales Pipeline (New Business)</h2>
        </div>

        <div className="overflow-x-auto pb-2">
          <div className="flex min-w-max gap-4">
            {pipelineColumns.map((column) => (
              <div key={column.name} className="w-[280px] border-[3px] border-[#1a1a1a] bg-[#fffdf5] shadow-[8px_8px_0_#1a1a1a]">
                <header className="border-b-[3px] border-[#1a1a1a] bg-[#ffd600] px-3 py-2">
                  <p className="text-xs font-bold uppercase tracking-[0.14em]">{column.name}</p>
                </header>
                <div className="space-y-3 p-3">
                  {column.deals.map((deal) => (
                    <article
                      key={deal.title}
                      className="rotate-[-1deg] border-[3px] border-[#1a1a1a] bg-white px-3 py-3 shadow-[5px_5px_0_#1a1a1a]"
                    >
                      <p className="text-sm font-semibold">{deal.title}</p>
                      <p className="mt-2 text-xs uppercase tracking-[0.12em] text-[#1a1a1a]/80">Estimated Value</p>
                      <p className="mt-1 text-lg" style={{ fontFamily: "Space Grotesk, Inter, sans-serif" }}>
                        {deal.value}
                      </p>
                    </article>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="mt-6 sticky-note inline-block rotate-[-1deg]">
        Keep pipeline over 6x MRR to protect growth velocity.
      </div>
    </>
  );
}
