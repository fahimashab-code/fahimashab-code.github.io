import { Container } from "@/components/container";
import { ExperienceCard } from "@/components/experience-card";
import { ProjectCard } from "@/components/project-card";
import { SectionHeading } from "@/components/section-heading";
import { SkillGroup } from "@/components/skill-group";
import { portfolio } from "@/data/portfolio";

const primaryButtonClass =
  "inline-flex min-h-11 items-center justify-center rounded-full border border-stone-900 bg-stone-900 px-5 py-3 text-sm font-semibold text-stone-50 shadow-sm shadow-stone-900/10 hover:-translate-y-0.5 hover:bg-stone-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-900 focus-visible:ring-offset-2 focus-visible:ring-offset-stone-50";

const secondaryButtonClass =
  "inline-flex min-h-11 items-center justify-center rounded-full border border-stone-300 bg-white/85 px-5 py-3 text-sm font-semibold text-stone-700 hover:-translate-y-0.5 hover:border-stone-400 hover:text-stone-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-900 focus-visible:ring-offset-2 focus-visible:ring-offset-stone-50";

const inlineProfileLinkClass =
  "inline-flex items-center gap-2 text-sm text-stone-600 underline-offset-4 hover:text-stone-950 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-900 focus-visible:ring-offset-2 focus-visible:ring-offset-stone-50";

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 -z-10 h-[28rem] bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.08),_transparent_50%),linear-gradient(180deg,_rgba(255,255,255,0.92),_rgba(247,245,242,0))]" />

      <header className="sticky top-0 z-20 border-b border-stone-200/80 bg-stone-50/90 backdrop-blur">
        <Container className="flex min-h-16 flex-col gap-4 py-4 sm:flex-row sm:items-center sm:justify-between">
          <a
            href="#home"
            className="text-sm font-semibold tracking-[0.18em] text-stone-950 uppercase"
          >
            {portfolio.name}
          </a>

          <nav aria-label="Primary" className="w-full sm:w-auto">
            <ul className="flex flex-wrap items-center gap-4 text-sm text-stone-600 sm:justify-end sm:gap-6">
              {portfolio.navigation.map((item) => (
                <li key={item.href}>
                  <a className="hover:text-stone-950" href={item.href}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </Container>
      </header>

      <main id="home">
        <section className="py-16 sm:py-20 lg:py-24">
          <Container>
            <div className="surface rounded-[2rem] p-8 sm:p-10 lg:p-12">
              <div className="grid gap-10 lg:grid-cols-[minmax(0,1.5fr)_minmax(18rem,0.85fr)] lg:items-end">
                <div className="space-y-8">
                  <div className="space-y-4">
                    <p className="font-mono text-xs tracking-[0.24em] text-stone-500 uppercase">
                      {portfolio.role}
                    </p>
                    <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-stone-950 sm:text-5xl lg:text-6xl">
                      {portfolio.positioning}
                    </h1>
                    <p className="max-w-2xl text-base leading-8 text-stone-600 sm:text-lg">
                      {portfolio.intro}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    {portfolio.heroActions.map((action) => (
                      <a
                        key={action.label}
                        className={
                          action.label === "Download CV"
                            ? secondaryButtonClass
                            : primaryButtonClass
                        }
                        href={action.href}
                        target={action.external ? "_blank" : undefined}
                        rel={action.external ? "noopener noreferrer" : undefined}
                        download={action.download}
                        aria-label={action.ariaLabel}
                      >
                        {action.label}
                      </a>
                    ))}
                  </div>

                  <div className="flex flex-wrap items-center gap-x-5 gap-y-3 border-t border-stone-200/80 pt-1">
                    {portfolio.profileLinks.map((link) => (
                      <a
                        key={link.label}
                        className={inlineProfileLinkClass}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={link.ariaLabel}
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                </div>

                <aside className="surface rounded-[1.5rem] p-6">
                  <p className="font-mono text-xs tracking-[0.24em] text-stone-500 uppercase">
                    Current Focus
                  </p>
                  <ul className="mt-5 space-y-4 text-sm leading-7 text-stone-600">
                    {portfolio.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="border-b border-stone-200/80 pb-4 last:border-b-0 last:pb-0"
                      >
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </aside>
              </div>
            </div>
          </Container>
        </section>

        <section id="about" className="section-divider py-16 sm:py-20">
          <Container>
            <SectionHeading
              title="About"
              eyebrow="Profile"
              description="A concise overview of the engineering work, product context, and cloud architecture focus behind the portfolio."
            />

            <div className="grid gap-6 lg:grid-cols-[minmax(0,1.4fr)_minmax(18rem,0.8fr)]">
              <article className="surface rounded-[1.75rem] p-8">
                <p className="text-lg leading-8 text-stone-700">
                  {portfolio.about}
                </p>
              </article>

              <aside className="surface rounded-[1.75rem] p-8">
                <p className="font-mono text-xs tracking-[0.24em] text-stone-500 uppercase">
                  Core Areas
                </p>
                <ul className="mt-5 space-y-3 text-sm leading-7 text-stone-600">
                  {portfolio.coreAreas.map((area) => (
                    <li key={area}>{area}</li>
                  ))}
                </ul>
              </aside>
            </div>
          </Container>
        </section>

        <section id="skills" className="section-divider py-16 sm:py-20">
          <Container>
            <SectionHeading
              title="Skills"
              eyebrow="Toolkit"
              description="Frontend, serverless cloud, and day-to-day engineering tools used to ship production-ready web applications."
            />

            <div className="grid gap-6 lg:grid-cols-3">
              {portfolio.skillGroups.map((group) => (
                <SkillGroup key={group.title} title={group.title} skills={group.skills} />
              ))}
            </div>
          </Container>
        </section>

        <section id="experience" className="section-divider py-16 sm:py-20">
          <Container>
            <SectionHeading
              title="Experience"
              eyebrow="Work"
              description="Recent engineering work centered on production systems, feature delivery, and debugging within an AWS serverless stack."
            />

            <ExperienceCard experience={portfolio.experience} />
          </Container>
        </section>

        <section id="projects" className="section-divider py-16 sm:py-20">
          <Container>
            <SectionHeading
              title="Projects"
              eyebrow="Selected Work"
              description="Examples of product and platform work across cloud application flows, notification systems, and account management."
            />

            <div className="grid gap-6 lg:grid-cols-3">
              {portfolio.projects.map((project) => (
                <ProjectCard key={project.title} project={project} />
              ))}
            </div>
          </Container>
        </section>

        <section id="publications" className="section-divider py-16 sm:py-20">
          <Container>
            <SectionHeading
              title="Publications"
              eyebrow="Research"
              description="Selected publication work and research profile links presented in the same restrained visual language as the rest of the portfolio."
            />

            <div className="grid gap-6 lg:grid-cols-[minmax(0,1.35fr)_minmax(18rem,0.85fr)]">
              <div className="space-y-6">
                {portfolio.publications.map((publication) => (
                  <article
                    key={publication.href}
                    className="surface rounded-[1.75rem] p-8"
                  >
                    <p className="font-mono text-xs tracking-[0.24em] text-stone-500 uppercase">
                      {publication.publisher}
                    </p>
                    <h3 className="mt-3 text-2xl font-semibold text-stone-950">
                      {publication.title}
                    </h3>
                    <p className="mt-4 max-w-3xl text-base leading-8 text-stone-600">
                      {publication.description}
                    </p>
                    <a
                      className="mt-6 inline-flex items-center rounded-full border border-stone-300 bg-white/85 px-4 py-2 text-sm font-semibold text-stone-700 hover:border-stone-400 hover:text-stone-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-900 focus-visible:ring-offset-2 focus-visible:ring-offset-stone-50"
                      href={publication.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={publication.ariaLabel}
                    >
                      View on IEEE Xplore
                    </a>
                  </article>
                ))}
              </div>

              <aside className="surface rounded-[1.75rem] p-8">
                <p className="font-mono text-xs tracking-[0.24em] text-stone-500 uppercase">
                  Research Profiles
                </p>
                <div className="mt-5 space-y-4">
                  {portfolio.researchProfiles.map((profile) => (
                    <a
                      key={profile.label}
                      href={profile.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={profile.ariaLabel}
                      className="block rounded-2xl border border-stone-200 bg-white/80 px-5 py-4 text-sm text-stone-600 hover:border-stone-300 hover:text-stone-950"
                    >
                      <span className="block font-mono text-[0.7rem] tracking-[0.24em] text-stone-400 uppercase">
                        {profile.label}
                      </span>
                      <span className="mt-2 block text-base font-medium text-stone-900">
                        {profile.value}
                      </span>
                    </a>
                  ))}
                </div>
              </aside>
            </div>
          </Container>
        </section>

        <section id="contact" className="section-divider py-16 sm:py-20">
          <Container>
            <div className="surface rounded-[2rem] p-8 sm:p-10">
              <SectionHeading
                title="Contact"
                eyebrow="Get In Touch"
                description="The placeholder links below are centralized in the portfolio data file, so contact details and profile URLs stay easy to update."
              />

              <div className="grid gap-4 sm:grid-cols-2">
                {portfolio.contactLinks.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.external ? "_blank" : undefined}
                    rel={item.external ? "noopener noreferrer" : undefined}
                    aria-label={item.ariaLabel}
                    className="rounded-2xl border border-stone-200 bg-white/80 px-5 py-4 text-sm text-stone-600 hover:border-stone-300 hover:text-stone-950"
                  >
                    <span className="block font-mono text-[0.7rem] tracking-[0.24em] text-stone-400 uppercase">
                      {item.label}
                    </span>
                    <span className="mt-2 block text-base font-medium text-stone-900">
                      {item.value}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </Container>
        </section>
      </main>

      <footer className="section-divider py-8">
        <Container className="flex flex-col gap-4 text-sm text-stone-500 sm:flex-row sm:items-center sm:justify-between">
          <p>{portfolio.footer}</p>
          <div className="flex flex-wrap items-center gap-4 sm:justify-end">
            {portfolio.researchProfiles.map((profile) => (
              <a
                key={profile.label}
                className="hover:text-stone-900"
                href={profile.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={profile.ariaLabel}
              >
                {profile.label}
              </a>
            ))}
            <a className="hover:text-stone-900" href="#home">
              Back to top
            </a>
          </div>
        </Container>
      </footer>
    </div>
  );
}
