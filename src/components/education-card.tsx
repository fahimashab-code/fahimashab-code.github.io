import type { Education } from "@/data/portfolio";

type EducationCardProps = {
  education: Education;
};

export function EducationCard({ education }: EducationCardProps) {
  return (
    <article className="surface rounded-[1.75rem] p-8">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h3 className="text-xl font-semibold text-[var(--text-primary)]">
            {education.degree}
          </h3>
          <p className="mt-2 text-base font-medium text-[var(--text-secondary)]">
            {education.institution}
          </p>
          <p className="mt-1 font-mono text-xs tracking-[0.24em] text-cyan-700 uppercase">
            {education.location}
          </p>
        </div>
        <p className="font-mono text-xs tracking-[0.24em] text-[var(--text-muted)] uppercase">
          {education.period}
        </p>
      </div>

      <div className="mt-6 space-y-3 text-sm leading-7 text-[var(--text-secondary)]">
        <p>{education.result}</p>
        <p>{education.focus}</p>
      </div>
    </article>
  );
}
