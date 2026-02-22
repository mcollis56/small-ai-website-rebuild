"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

const nav = [
  { label: "Active Builds", href: "/" },
  { label: "Revenue", href: "/revenue" },
  { label: "Clients", href: "/clients" },
  { label: "Lab/Experiments", href: "/lab-experiments" }
];

type HqShellProps = {
  title: string;
  subtitle?: string;
  children: ReactNode;
};

export default function HqShell({ title, subtitle, children }: HqShellProps) {
  const pathname = usePathname();

  return (
    <div className="hq-shell">
      <aside className="hq-sidebar">
        <div className="mb-6 border-[3px] border-[#1a1a1a] bg-[#fffdf5] px-3 py-2 shadow-[4px_4px_0_#1a1a1a]">
          <p className="text-xs font-extrabold uppercase tracking-[0.14em]">Small-AI HQ</p>
        </div>

        <nav className="space-y-3">
          {nav.map((item) => {
            const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            return (
              <Link
                key={item.label}
                href={item.href}
                className={`hq-link ${active ? "hq-link-active" : ""}`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </aside>

      <section className="hq-main">
        <header className="mb-6 border-b-[3px] border-[#1a1a1a] pb-4">
          <h1 className="text-3xl md:text-4xl">{title}</h1>
          {subtitle ? <p className="mt-1 text-sm text-[#1a1a1a]/80">{subtitle}</p> : null}
        </header>
        {children}
      </section>
    </div>
  );
}
