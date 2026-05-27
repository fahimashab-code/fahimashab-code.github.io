type SkillGroupProps = {
  title: string;
  skills: string[];
};

export function SkillGroup({ title, skills }: SkillGroupProps) {
  return (
    <article className="surface rounded-[1.75rem] p-6 sm:p-7">
      <h3 className="text-lg font-semibold text-stone-950">{title}</h3>
      <div className="mt-5 flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="rounded-full border border-stone-200 bg-white/85 px-3 py-2 text-sm text-stone-700"
          >
            {skill}
          </span>
        ))}
      </div>
    </article>
  );
}
