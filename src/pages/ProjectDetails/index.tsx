import { motion, useReducedMotion } from 'framer-motion'
import Container from '@/components/common/Container'
import SectionHeading from '@/components/common/SectionHeading'
import Reveal from '@/components/common/Reveal'
import Button from '@/components/common/Button'
import { projects } from '@/data/projects'
import { Link, useParams } from 'react-router-dom'
import Seo from '@/components/common/Seo'

// Extends the inferred project shape with optional fields a case study may
// eventually carry. All are optional — sections only render when the data
// actually has them, so nothing here is invented.
function ArrowLeftIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M19 12H5M11 6l-6 6 6 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

type ProjectDetail = (typeof projects)[number] & {
  overview?: string
  challenges?: string | string[]
  solution?: string | string[]
  keyFeatures?: string[]
  results?: string | string[]
  impact?: string | string[]
  links?: { live?: string; repo?: string }
}

export default function ProjectDetails() {
  const params = useParams<{ slug: string }>()
  const project = (projects as ProjectDetail[]).find((p) => p.slug === params?.slug)
  console.log("project: ", project)
  console.log("params: ", params)

  if (!project) {
    return (
      <section className="py-24">
        <Container className="text-center">
          <p className="mono-label text-accent">Not found</p>
          <h1 className="mt-4 text-2xl font-semibold">This project doesn&rsquo;t exist.</h1>
          <p className="mt-3 text-muted">It may have been renamed or removed.</p>
          <div className="mt-8">
            <Button to="/work/projects">Back to Work</Button>
          </div>
        </Container>
      </section>
    )
  }

  return (
    <>
      <Seo
        title={`${project.name} | Rohit Jangid`}
        description={project.description}
        canonical={`/work/projects/${project.slug}`}
      />
      <DetailHero project={project} />
      <Overview project={project} />
      <RoleAndStack project={project} />
      {(project.challenges || project.solution) && <ChallengeSolution project={project} />}
      {project.keyFeatures && project.keyFeatures.length > 0 && <KeyFeatures features={project.keyFeatures} />}
      {(project.results || project.impact) && <ResultsImpact project={project} />}
      <DetailCta />
    </>
  )
}

/* ------------------------------------------------------------------ */
/* Hero                                                                */
/* ------------------------------------------------------------------ */

function DetailHero({ project }: { project: ProjectDetail }) {
  const reduceMotion = useReducedMotion()

  return (
    <section className="relative overflow-hidden border-b border-border">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.3] [background-image:linear-gradient(to_right,theme(colors.border)_1px,transparent_1px),linear-gradient(to_bottom,theme(colors.border)_1px,transparent_1px)] [background-size:44px_44px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,black_35%,transparent_85%)]"
      />
      <Container className="py-20 sm:py-24">
        <Link to="/work/projects" className="inline-flex items-center gap-1.5 mono-label text-muted hover:text-accent transition-colors">
          <ArrowLeftIcon />
          Back to Work
        </Link>

        <motion.p
          initial={reduceMotion ? false : { opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mono-label text-accent mt-3 sm:mt-6"
        >
          {project.category} · {project.status}
        </motion.p>

        <motion.h1
          initial={reduceMotion ? false : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.08 }}
          className="mt-3 sm:mt-6 text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl lg:text-[3.4rem]"
        >
          {project.name}
        </motion.h1>

        <motion.p
          initial={reduceMotion ? false : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.16 }}
          className="mt-3 sm:mt-6 max-w-lg text-lg leading-relaxed text-muted"
        >
          {project.description}
        </motion.p>

        <div className="mt-3 sm:mt-6 flex flex-wrap gap-1.5">
          {project.technologies.map((t) => (
            <span key={t} className="rounded-full border border-border px-2.5 py-1 text-xs text-muted">
              {t}
            </span>
          ))}
        </div>
      </Container>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/* Overview                                                            */
/* ------------------------------------------------------------------ */

function Overview({ project }: { project: ProjectDetail }) {
  const text = project.overview ?? project.description

  return (
    <section className="py-12 sm:py-16">
      <Container>
        <div className="grid gap-5 sm:gap-10 lg:grid-cols-[1fr_260px] lg:gap-16">
          <Reveal className="max-w-2xl">
            <SectionHeading label="Overview" subtitle={text} />
          </Reveal>

          <Reveal delay={0.1} className="lg:border-l lg:border-border lg:pl-10">
            <dl className="space-y-5">
              <div className="border-b border-border pb-4">
                <dt className="mono-label text-[11px] text-muted">Category</dt>
                <dd className="mt-1.5 text-sm font-medium">{project.category}</dd>
              </div>
              <div className="border-b border-border pb-4">
                <dt className="mono-label text-[11px] text-muted">Status</dt>
                <dd className="mt-1.5 text-sm font-medium">{project.status}</dd>
              </div>
              <div>
                <dt className="mono-label text-[11px] text-muted">Role</dt>
                <dd className="mt-1.5 text-sm font-medium">{project.role}</dd>
              </div>
            </dl>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/* Role + tech stack                                                   */
/* ------------------------------------------------------------------ */

function RoleAndStack({ project }: { project: ProjectDetail }) {
  return (
    <section className="py-12 sm:py-16 border-t border-border">
      <Container>
        <SectionHeading label="My Role" title={project.role} />
        <div className="mt-8 flex flex-wrap gap-2">
          {project.technologies.map((t, i) => (
            <Reveal key={t} delay={i * 0.04} className="rounded-full border border-border bg-card px-3 py-1.5 text-sm">
              {t}
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/* Challenges + solution                                               */
/* ------------------------------------------------------------------ */

function asList(value?: string | string[]) {
  if (!value) return []
  return Array.isArray(value) ? value : [value]
}

function ChallengeSolution({ project }: { project: ProjectDetail }) {
  const challenges = asList(project.challenges)
  const solutions = asList(project.solution)

  return (
    <section className="py-12 sm:py-16 border-t border-border">
      <Container>
        <div className="grid gap-5 sm:gap-10 sm:grid-cols-2">
          {challenges.length > 0 && (
            <Reveal>
              <p className="mono-label text-accent">Challenges</p>
              <div className="mt-4 space-y-3">
                {challenges.map((c, i) => (
                  <p key={i} className="text-sm text-muted leading-relaxed border-l-2 border-border pl-4">{c}</p>
                ))}
              </div>
            </Reveal>
          )}
          {solutions.length > 0 && (
            <Reveal delay={0.08}>
              <p className="mono-label text-accent">Solution</p>
              <div className="mt-4 space-y-3">
                {solutions.map((s, i) => (
                  <p key={i} className="text-sm text-muted leading-relaxed border-l-2 border-accent/40 pl-4">{s}</p>
                ))}
              </div>
            </Reveal>
          )}
        </div>
      </Container>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/* Key features                                                        */
/* ------------------------------------------------------------------ */

function KeyFeatures({ features }: { features: string[] }) {
  return (
    <section className="py-12 sm:py-16 border-t border-border">
      <Container>
        <SectionHeading label="Highlights" title="Key features" />
        <div className="mt-5 sm:mt-10 grid gap-4 sm:grid-cols-2">
          {features.map((f, i) => (
            <Reveal key={f} delay={i * 0.06} className="rounded-xl border border-border bg-card p-5">
              <p className="mono-label text-accent mb-2">0{i + 1}</p>
              <p className="text-sm font-medium leading-relaxed">{f}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/* Results / impact                                                    */
/* ------------------------------------------------------------------ */

function ResultsImpact({ project }: { project: ProjectDetail }) {
  const results = asList(project.results).concat(asList(project.impact))

  return (
    <section className="py-12 sm:py-16 border-t border-border">
      <Container>
        <SectionHeading label="Impact" title="Results" />
        <div className="mt-4 sm:mt-8 max-w-2xl space-y-3">
          {results.map((r, i) => (
            <Reveal key={i} delay={i * 0.06} className="text-sm text-muted leading-relaxed border-l-2 border-accent/40 pl-4">
              {r}
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/* Final CTA                                                           */
/* ------------------------------------------------------------------ */

function DetailCta() {
  return (
    <section className="py-12 sm:py-16 border-t border-border">
      <Container>
        <Reveal className="mx-auto max-w-xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Want to build something meaningful?
          </h2>
          <div className="mt-4 sm:mt-8 flex flex-wrap items-center justify-center gap-4">
            <Button to="/work/projects" variant="secondary">See More Work</Button>
            <Button to="/contact" variant="primary">Let&rsquo;s Talk</Button>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}