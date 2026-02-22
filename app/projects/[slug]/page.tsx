import { notFound } from "next/navigation";
import HqShell from "@/app/components/hq-shell";
import { projects } from "@/app/lib/hq-data";

type Params = {
  params: Promise<{ slug: string }>;
};

export default async function ProjectRoadmapPage({ params }: Params) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <HqShell
      title={`${project.name} Roadmap`}
      subtitle={`Status: ${project.status} | Next: ${project.next}`}
    >
      <div className="space-y-3">
        {project.roadmap.map((step, index) => (
          <article key={step} className="hq-project-card">
            <p className="text-xs uppercase tracking-[0.14em]">Step {index + 1}</p>
            <p className="mt-2 text-sm">{step}</p>
          </article>
        ))}
      </div>
    </HqShell>
  );
}
