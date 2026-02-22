import Link from "next/link";

const modules = [
  { title: "Projects", href: "/dashboard/projects", note: "Launch and monitor active ventures" },
  { title: "Revenue", href: "/dashboard/revenue", note: "Track MRR, hunts, and pipeline pressure" },
  { title: "Settings", href: "/dashboard/settings", note: "Tune dashboards, defaults, and alerts" }
];

export default function DashboardOverviewPage() {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {modules.map((module) => (
        <Link key={module.title} href={module.href} className="hq-project-card block">
          <p className="text-xs uppercase tracking-[0.14em]">Module</p>
          <h2 className="mt-3 text-2xl">{module.title}</h2>
          <p className="mt-3 text-sm">{module.note}</p>
          <span className="mt-5 inline-flex border-[3px] border-[#1a1a1a] bg-[#ffd600] px-3 py-1 text-xs font-bold uppercase tracking-[0.12em]">
            Open
          </span>
        </Link>
      ))}
    </div>
  );
}
