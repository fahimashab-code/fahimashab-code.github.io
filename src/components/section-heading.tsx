type SectionHeadingProps = {
  title: string;
  eyebrow: string;
  description: string;
};

export function SectionHeading({
  title,
  eyebrow,
  description,
}: SectionHeadingProps) {
  return (
    <div className="mb-8 max-w-3xl sm:mb-10">
      <p className="font-mono text-xs tracking-[0.24em] text-indigo-700 uppercase">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
        {title}
      </h2>
      <p className="mt-4 text-base leading-8 text-slate-600">{description}</p>
    </div>
  );
}
