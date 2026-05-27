import type { Project } from "@/data/portfolio";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="surface flex h-full flex-col rounded-[1.75rem] p-6 sm:p-7">
      <h3 className="text-xl font-semibold text-slate-950">{project.title}</h3>
      <p className="mt-4 flex-1 text-sm leading-7 text-slate-600">
        {project.description}
      </p>
      <div className="mt-6 flex flex-wrap gap-2">
        {project.tech.map((item) => (
          <span
            key={item}
            className="rounded-full border border-cyan-100 bg-gradient-to-r from-white to-cyan-50 px-3 py-2 text-xs font-medium tracking-wide text-slate-600"
          >
            {item}
          </span>
        ))}
      </div>
    </article>
  );
}
