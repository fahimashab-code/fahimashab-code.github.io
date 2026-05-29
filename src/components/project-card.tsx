import type { Project } from "@/data/portfolio";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="surface flex h-full flex-col rounded-[1.75rem] p-6 sm:p-7">
      <h3 className="text-xl font-semibold text-[var(--text-primary)]">{project.title}</h3>
      <p className="mt-4 flex-1 text-sm leading-7 text-[var(--text-secondary)]">
        {project.description}
      </p>
      <div className="mt-6 flex flex-wrap gap-2">
        {project.tech.map((item) => (
          <span
            key={item}
            className="rounded-full border border-[var(--line-strong)] px-3 py-2 text-xs font-medium tracking-wide text-[var(--text-secondary)]"
            style={{ background: "var(--chip-gradient-project)" }}
          >
            {item}
          </span>
        ))}
      </div>
    </article>
  );
}
