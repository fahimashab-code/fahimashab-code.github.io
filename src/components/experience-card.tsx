import type { Experience } from "@/data/portfolio";

type ExperienceCardProps = {
  experience: Experience;
};

export function ExperienceCard({ experience }: ExperienceCardProps) {
  return (
    <article className="surface rounded-[1.75rem] p-8">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h3 className="text-2xl font-semibold text-slate-950">
            {experience.title}
          </h3>
          <p className="mt-1 font-mono text-xs tracking-[0.24em] text-cyan-700 uppercase">
            {experience.location}
          </p>
        </div>
      </div>
      <p className="mt-6 max-w-3xl text-base leading-8 text-slate-600">
        {experience.description}
      </p>
      <ul className="mt-6 grid gap-3 text-sm leading-7 text-slate-600 sm:grid-cols-3">
        {experience.highlights.map((item) => (
          <li
            key={item}
            className="rounded-2xl border border-slate-200/80 bg-white/70 px-4 py-3"
          >
            {item}
          </li>
        ))}
      </ul>
    </article>
  );
}
