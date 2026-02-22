"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

const nav = [
  { label: "Overview", href: "/dashboard" },
  { label: "Projects", href: "/dashboard/projects" },
  { label: "Revenue", href: "/dashboard/revenue" },
  { label: "Settings", href: "/dashboard/settings" }
];

const titles: Record<string, { title: string; subtitle: string }> = {
  "/dashboard": {
    title: "Command Center",
    subtitle: "Status Board: 9 Active Builds"
  },
  "/dashboard/projects": {
    title: "Projects Command",
    subtitle: "Launch and manage active ventures"
  },
  "/dashboard/revenue": {
    title: "THE LEDGER: Financial Performance",
    subtitle: "Cash and pipeline war room"
  },
  "/dashboard/settings": {
    title: "Settings",
    subtitle: "System preferences and operating defaults"
  }
};

type DashboardShellProps = {
  children: ReactNode;
};

export default function DashboardShell({ children }: DashboardShellProps) {
  const pathname = usePathname();
  const current = titles[pathname] ?? titles["/dashboard"];

  return (
    <div className="hq-shell">
      <aside className="hq-sidebar">
        <div className="mb-6 border-[3px] border-[#1a1a1a] bg-[#fffdf5] px-3 py-2 shadow-[4px_4px_0_#1a1a1a]">
          <p className="text-xs font-extrabold uppercase tracking-[0.14em]">SMALL-AI HQ</p>
        </div>
        <nav className="space-y-3">
          {nav.map((item) => {
            const active = item.href === "/dashboard" ? pathname === item.href : pathname.startsWith(item.href);
            return (
              <Link key={item.label} href={item.href} className={`hq-link ${active ? "hq-link-active" : ""}`}>
                {item.label}
              </Link>
            );
          })}
        </nav>
      </aside>

      <section className="hq-main">
        <header className="mb-6 border-b-[3px] border-[#1a1a1a] pb-4">
          <h1 className="text-3xl md:text-4xl">{current.title}</h1>
          <p className="mt-1 text-sm text-[#1a1a1a]/80">{current.subtitle}</p>
        </header>
        {children}
      </section>
    </div>
  );
}
