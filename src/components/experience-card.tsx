import type { Experience } from "@/data/portfolio";

type ExperienceCardProps = {
  experience: Experience;
};

export function ExperienceCard({ experience }: ExperienceCardProps) {
  return (
    <article className="surface rounded-[1.75rem] p-8">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h3 className="text-2xl font-semibold text-stone-950">
            {experience.title}
          </h3>
          <p className="mt-1 font-mono text-xs tracking-[0.24em] text-stone-500 uppercase">
            {experience.location}
          </p>
        </div>
      </div>
      <p className="mt-6 max-w-3xl text-base leading-8 text-stone-600">
        {experience.description}
      </p>
    </article>
  );
}
