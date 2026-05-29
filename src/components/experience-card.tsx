import type { Experience } from "@/data/portfolio";

type ExperienceCardProps = {
  experience: Experience;
};

export function ExperienceCard({ experience }: ExperienceCardProps) {
  return (
    <article className="surface rounded-[1.75rem] p-8">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h3 className="text-2xl font-semibold text-[var(--text-primary)]">
            {experience.title}
          </h3>
          <p className="mt-2 text-base font-medium text-[var(--text-secondary)]">
            {experience.organization}
          </p>
          <p className="mt-1 font-mono text-xs tracking-[0.24em] text-cyan-700 uppercase">
            {experience.location}
          </p>
        </div>
        <p className="font-mono text-xs tracking-[0.24em] text-[var(--text-muted)] uppercase">
          {experience.period}
        </p>
      </div>
      <p className="mt-6 max-w-3xl text-base leading-8 text-[var(--text-secondary)]">
        {experience.description}
      </p>
      <ul className="mt-6 grid gap-3 text-sm leading-7 text-[var(--text-secondary)] sm:grid-cols-2">
        {experience.highlights.map((item) => (
          <li
            key={item}
            className="rounded-2xl border border-[var(--line-strong)] bg-[var(--chip-background)] px-4 py-3"
          >
            {item}
          </li>
        ))}
      </ul>
    </article>
  );
}
