import { Container } from "@/components/container";
import { ExperienceCard } from "@/components/experience-card";
import { ProjectCard } from "@/components/project-card";
import { SectionHeading } from "@/components/section-heading";
import { SkillGroup } from "@/components/skill-group";
import { ThemeToggle } from "@/components/theme-toggle";
import { portfolio } from "@/data/portfolio";

const primaryButtonClass =
  "inline-flex min-h-11 items-center justify-center rounded-full border border-indigo-500/30 bg-gradient-to-r from-indigo-600 via-sky-500 to-cyan-500 px-5 py-3 text-sm font-semibold text-[var(--text-inverse)] shadow-[0_12px_30px_rgba(79,70,229,0.22)] hover:-translate-y-0.5 hover:shadow-[0_16px_36px_rgba(8,145,178,0.24)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--surface-base)]";

const secondaryButtonClass =
  "inline-flex min-h-11 items-center justify-center rounded-full border border-[var(--line-strong)] bg-[var(--button-secondary-bg)] px-5 py-3 text-sm font-semibold text-[var(--text-primary)] shadow-[var(--button-secondary-shadow)] hover:-translate-y-0.5 hover:border-[var(--accent-soft)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--surface-base)]";

const inlineProfileLinkClass =
  "inline-flex items-center gap-2 text-sm font-medium text-[var(--text-secondary)] underline-offset-4 hover:text-[var(--accent)] hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--surface-base)]";

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      <div
        className="absolute inset-x-0 top-0 -z-10 h-[28rem]"
        style={{ background: "var(--hero-backdrop)" }}
      />

      <header className="sticky top-0 z-20 px-4 pt-4 sm:px-6 lg:px-8">
        <Container className="px-0">
          <div className="surface soft-ring flex min-h-[4.5rem] flex-col gap-5 rounded-[1.5rem] px-6 py-5 sm:min-h-[5.5rem] sm:flex-row sm:items-center sm:justify-between sm:px-8">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:gap-8">
              <a
                href="#home"
                className="text-base font-semibold tracking-[0.22em] text-[var(--text-primary)] uppercase sm:text-lg"
              >
                {portfolio.name}
              </a>

              <nav aria-label="Primary" className="w-full sm:w-auto">
                <ul className="flex flex-wrap items-center gap-4 text-[0.95rem] font-medium text-[var(--text-secondary)] sm:justify-end sm:gap-7">
                  {portfolio.navigation.map((item) => (
                    <li key={item.href}>
                      <a className="hover:text-[var(--accent)]" href={item.href}>
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            <ThemeToggle />
          </div>
        </Container>
      </header>

      <main id="home">
        <section className="py-14 sm:py-20 lg:py-24">
          <Container>
            <div className="surface soft-ring relative overflow-hidden rounded-[2rem] p-8 sm:p-10 lg:p-12">
              <div
                className="absolute inset-0"
                style={{ background: "var(--hero-overlay)" }}
              />
              <div className="grid gap-8 lg:grid-cols-[minmax(0,1.45fr)_minmax(18rem,0.85fr)] lg:items-start">
                <div className="relative space-y-8">
                  <div className="space-y-4">
                    <p className="font-mono text-xs tracking-[0.24em] text-indigo-700 uppercase">
                      {portfolio.role}
                    </p>
                    <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-[var(--text-primary)] sm:text-5xl lg:text-6xl">
                      {portfolio.positioning}
                    </h1>
                    <p className="max-w-2xl text-base leading-8 text-[var(--text-secondary)] sm:text-lg">
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

                  <div className="flex flex-wrap items-center gap-x-5 gap-y-3 border-t border-[var(--line-soft)] pt-3">
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
                  <p className="font-mono text-xs tracking-[0.24em] text-cyan-700 uppercase">
                    Core Stack
                  </p>
                  <ul className="mt-5 space-y-3 text-sm leading-7 text-[var(--text-secondary)]">
                    {portfolio.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="rounded-2xl border border-[var(--line-strong)] bg-[var(--chip-background)] px-4 py-3"
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
              description="A simple overview of the kind of software work I do."
            />

            <div className="grid gap-6 lg:grid-cols-[minmax(0,1.4fr)_minmax(18rem,0.8fr)]">
              <article className="surface rounded-[1.75rem] p-8">
                <p className="text-lg leading-8 text-[var(--text-secondary)]">
                  {portfolio.about}
                </p>
              </article>

              <aside className="surface rounded-[1.75rem] p-8">
                <p className="font-mono text-xs tracking-[0.24em] text-indigo-700 uppercase">
                  What I Work On
                </p>
                <ul className="mt-5 space-y-3 text-sm leading-7 text-[var(--text-secondary)]">
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
              description="Tools and technologies I use most often."
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
              title="Work"
              eyebrow="Work"
              description="Recent product work across frontend delivery and AWS-backed systems."
            />

            <ExperienceCard experience={portfolio.experience} />
          </Container>
        </section>

        <section id="projects" className="section-divider py-16 sm:py-20">
          <Container>
            <SectionHeading
              title="Projects"
              eyebrow="Selected Work"
              description="A few examples of the kinds of systems and features I have worked on."
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
              title="Research"
              eyebrow="Research"
              description="Selected publication work and research profiles."
            />

            <div className="grid gap-6 lg:grid-cols-[minmax(0,1.35fr)_minmax(18rem,0.85fr)]">
              <div className="space-y-6">
                {portfolio.publications.map((publication) => (
                  <article
                    key={publication.href}
                    className="surface rounded-[1.75rem] p-8"
                  >
                    <p className="font-mono text-xs tracking-[0.24em] text-indigo-700 uppercase">
                      {publication.publisher}
                    </p>
                    <h3 className="mt-3 text-2xl font-semibold text-[var(--text-primary)]">
                      {publication.title}
                    </h3>
                    <p className="mt-4 max-w-3xl text-base leading-8 text-[var(--text-secondary)]">
                      {publication.description}
                    </p>
                    <a
                      className="mt-6 inline-flex items-center rounded-full border border-[var(--line-strong)] bg-[var(--button-secondary-bg)] px-4 py-2 text-sm font-semibold text-[var(--text-primary)] hover:border-[var(--accent-soft)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--surface-base)]"
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
                <p className="font-mono text-xs tracking-[0.24em] text-indigo-700 uppercase">
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
                      className="block rounded-2xl border border-[var(--line-strong)] bg-[var(--chip-background)] px-5 py-4 text-sm text-[var(--text-secondary)] hover:border-[var(--accent-soft)] hover:text-[var(--text-primary)]"
                    >
                      <span className="block font-mono text-[0.7rem] tracking-[0.24em] text-[var(--text-muted)] uppercase">
                        {profile.label}
                      </span>
                      <span className="mt-2 block text-base font-medium text-[var(--text-primary)]">
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
                description="The main ways to reach me and view my work."
              />

              <div className="grid gap-4 sm:grid-cols-2">
                {portfolio.contactLinks.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.external ? "_blank" : undefined}
                    rel={item.external ? "noopener noreferrer" : undefined}
                    aria-label={item.ariaLabel}
                    className="rounded-2xl border border-[var(--line-strong)] bg-[var(--chip-background)] px-5 py-4 text-sm text-[var(--text-secondary)] hover:border-[var(--accent-soft)] hover:text-[var(--text-primary)]"
                  >
                    <span className="block font-mono text-[0.7rem] tracking-[0.24em] text-[var(--text-muted)] uppercase">
                      {item.label}
                    </span>
                    <span className="mt-2 block text-base font-medium text-[var(--text-primary)]">
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
        <Container className="flex flex-col gap-4 text-sm text-[var(--text-muted)] sm:flex-row sm:items-center sm:justify-between">
          <p>{portfolio.footer}</p>
          <div className="flex flex-wrap items-center gap-4 sm:justify-end">
            {portfolio.profileLinks.map((profile) => (
              <a
                key={profile.label}
                className="hover:text-[var(--accent)]"
                href={profile.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={profile.ariaLabel}
              >
                {profile.label}
              </a>
            ))}
            <a className="hover:text-[var(--accent)]" href="#home">
              Back to top
            </a>
          </div>
        </Container>
      </footer>
    </div>
  );
}
