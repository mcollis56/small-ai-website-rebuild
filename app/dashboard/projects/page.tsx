const projectCards = [
  {
    name: "Lunar Almanac",
    status: "Dev",
    statusColor: "bg-[#ffd600]",
    description: "Seasonal intelligence platform for ritual, planning, and lifestyle cadence.",
    launchTargets: [
      { label: "Launch Local", href: "http://localhost:3000" },
      { label: "Launch Prod", href: "https://small-ai.com" }
    ]
  },
  {
    name: "SiteSage",
    status: "Live",
    statusColor: "bg-emerald-300",
    description: "Field operations intelligence for landscaping teams and client reporting.",
    launchTargets: [
      { label: "Launch Local", href: "http://localhost:5176" },
      { label: "Launch Prod", href: "https://sitesage.ai" }
    ]
  },
  {
    name: "Mechanic Monkey",
    status: "TRIAL READY",
    statusColor: "bg-amber-300",
    description: "Quit Monkeying Around with Paperwork",
    launchTargets: [
      { label: "Launch Local", href: "http://localhost:5173" },
      { label: "Launch Prod", href: "https://mechanicmonkey.com" }
    ]
  },
  {
    name: "Small AI",
    status: "Live",
    statusColor: "bg-[#2e5cff] text-[#fffdf5]",
    description: "Agency command layer for portfolio oversight and execution.",
    launchTargets: [
      { label: "Launch Local", href: "http://localhost:8081" },
      { label: "Launch Prod", href: "https://small-ai.com" }
    ]
  }
];

export default function DashboardProjectsPage() {
  return (
    <div className="grid gap-4 lg:grid-cols-3">
      {projectCards.map((project) => (
        <article key={project.name} className="hq-project-card">
          <div className="flex items-start justify-between gap-3">
            <h2 className="text-2xl">{project.name}</h2>
            <span className={`border-[3px] border-[#1a1a1a] px-2 py-1 text-xs font-bold uppercase tracking-[0.12em] ${project.statusColor}`}>
              {project.status}
            </span>
          </div>
          <p className="mt-3 text-sm">{project.description}</p>

          <div className="mt-5 grid gap-3">
            {project.launchTargets.map((target) => (
              <a
                key={target.label}
                href={target.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block border-[3px] border-[#1a1a1a] bg-[#ffd600] px-4 py-3 text-center text-lg font-bold uppercase tracking-[0.08em] shadow-[6px_6px_0_#1a1a1a] transition hover:translate-x-[-2px] hover:translate-y-[-2px]"
              >
                {target.label}
              </a>
            ))}
          </div>
        </article>
      ))}
    </div>
  );
}
