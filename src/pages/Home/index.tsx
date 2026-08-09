import { useState, type MouseEvent } from 'react'
import { motion } from 'framer-motion'
import Container from '@/components/common/Container'
import Button from '@/components/common/Button'
import SectionHeading from '@/components/common/SectionHeading'
import Reveal from '@/components/common/Reveal'
import { profile } from '@/data/profile'
import { experience } from '@/data/experience'
import { projects } from '@/data/projects'
import { technologies } from '@/data/technologies'
import { blogPosts } from '@/data/blog'
import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'

interface Profile {
  title: string
  experience: string
  coreStack: string[]
}

interface ExperienceItem {
  id: string | number
  company: string
  role?: string
  duration?: string
  period?: string
  year?: string
}

interface Project {
  slug: string
  name: string
  category: string
  description: string
  technologies: string[]
  featured: boolean
}

interface Technology {
  name: string
  category: string
  description: string
}

interface BlogPost {
  slug: string
  title: string
  category: string
  readingTime: string
  summary: string
}

interface Stat {
  value: string
  label: string
}

const stats: Stat[] = [
  { value: '2.10+', label: 'Years Experience' },
  { value: '3', label: 'Companies' },
  { value: '80+', label: 'Production Modules' },
  { value: '4', label: 'Frontend Ecosystems' },
]

const strengths: string[] = [
  'Production-focused frontend development',
  'Component-driven architecture',
  'Responsive, accessible UI',
  'REST API integration',
  'Reusable component systems',
  'Performance awareness',
  'Cross-team collaboration',
  'Continuous learning',
]

/* ---------------------------------------------------------
 * Small deterministic hash so per-project preview graphics
 * differ from one another without using Math.random()
 * (keeps SSR/CSR output stable).
 * ------------------------------------------------------- */
function hashStr(str: string): number {
  let h = 0
  for (let i = 0; i < str.length; i++) h = (h * 31 + str.charCodeAt(i)) >>> 0
  return h
}

/* Places n items evenly around a circle, returned as % coords */
function polarToPercent(index: number, total: number, radius = 40): { x: number; y: number } {
  const angle = (index / total) * Math.PI * 2 - Math.PI / 2
  return {
    x: 50 + radius * Math.cos(angle),
    y: 50 + radius * Math.sin(angle),
  }
}

interface ProjectPreviewProps {
  project: Pick<Project, 'name' | 'category'>
  large?: boolean
}

/* Abstract, code/browser-inspired preview for a project card —
 * no photography, purely CSS/SVG, seeded from the project name. */
function ProjectPreview({ project, large = false }: ProjectPreviewProps) {
  const h = hashStr(project.name)
  const barCount = large ? 5 : 4
  const bars = Array.from({ length: barCount }, (_, i) => 35 + ((h >> (i * 3)) % 55))

  return (
    <div className="relative overflow-hidden rounded-xl border border-border bg-background">
      <div className="flex items-center gap-1.5 border-b border-border px-3 py-2">
        <span className="h-2 w-2 rounded-full bg-destructive/50" />
        <span className="h-2 w-2 rounded-full bg-warning/50" />
        <span className="h-2 w-2 rounded-full bg-success/50" />
        <span className="mono-label ml-2 truncate text-[10px] text-muted">{project.category}</span>
      </div>
      <div className={`grid gap-1.5 p-4 ${large ? 'sm:grid-cols-[26%_1fr]' : ''}`}>
        {large && (
          <div className="hidden flex-col gap-1.5 sm:flex">
            <div className="h-4 rounded bg-accent/20" />
            <div className="h-3 rounded bg-border/60" />
            <div className="h-3 rounded bg-border/60" />
            <div className="h-3 w-2/3 rounded bg-border/60" />
          </div>
        )}
        <div className="flex flex-col gap-1.5">
          <div className="h-5 w-1/2 rounded bg-accent/20" />
          {bars.map((w, i) => (
            <div key={i} className="h-2.5 rounded-full bg-border/60" style={{ width: `${w}%` }} />
          ))}
        </div>
      </div>
    </div>
  )
}

interface GlowPosition {
  x: number
  y: number
}

/* Mouse-reactive glow + dot grid for the final CTA */
function CtaField() {
  const [pos, setPos] = useState<GlowPosition>({ x: 50, y: 50 })

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setPos({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    })
  }

  return (
    <div aria-hidden className="absolute inset-0" onMouseMove={handleMouseMove}>
      <div className="absolute inset-0 opacity-[0.3] [background-image:radial-gradient(rgb(var(--border))_1px,transparent_1px)] [background-size:20px_20px]" />
      <div
        className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(380px circle at ${pos.x}% ${pos.y}%, rgb(var(--accent)/0.18), transparent 70%)`,
        }}
      />
    </div>
  )
}

export default function Home() {
  const featured: Project[] = (projects as Project[]).filter((p) => p.featured).slice(0, 3)
  const coreTechNames = ['React.js', 'Angular', 'Next.js', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'Redux', 'RxJS']
  const coreTech: Technology[] = (technologies as Technology[]).filter((t) => coreTechNames.includes(t.name))
  const [hoveredTech, setHoveredTech] = useState<number | null>(null)

  const typedProfile = profile as Profile
  const typedExperience = experience as ExperienceItem[]
  const typedBlogPosts = blogPosts as BlogPost[]

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 [background:radial-gradient(900px_circle_at_top,_rgb(var(--accent)/0.14),transparent_60%)]" />
        <Container className="pt-[7rem] pb-16 sm:py-24">
          <div className="mx-auto max-w-2xl text-center">
            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <span className="mono-label inline-flex items-center gap-1.5 rounded-full border border-success/30 bg-success/10 px-3 py-1">
                <span className="h-1.5 w-1.5 rounded-full bg-success animate-pulse" />
                <span className='text-success'>Available for Frontend Engineer Opportunities</span>
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-6 text-4xl sm:text-6xl font-semibold tracking-tight leading-[1.05]"
            >
              Building thoughtful digital experiences with code.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mx-auto mt-6 max-w-xl text-lg text-muted leading-relaxed"
            >
              Frontend Engineer with 2.10+ years of experience building scalable, responsive and
              production-ready web applications using Angular, React.js and Next.js.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 flex flex-wrap justify-center gap-3"
            >
              <Button to="/work/projects">Explore My Work</Button>
              <Button variant="secondary" to="/contact">Let's Talk</Button>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Recruiter Snapshot — split "profile.json" terminal + stat rail */}
      <section className="py-12 sm:py-16">
        <Container>
          <SectionHeading label="Snapshot" title="The short version" />
          <div className="mt-5 sm:mt-10 grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-stretch">
            <Reveal>
              <div className="relative h-full rounded-2xl border border-border bg-background overflow-hidden">
                <div className="flex items-center gap-1.5 border-b border-border px-4 py-3">
                  <span className="h-2.5 w-2.5 rounded-full bg-destructive/60" />
                  <span className="h-2.5 w-2.5 rounded-full bg-warning/60" />
                  <span className="h-2.5 w-2.5 rounded-full bg-success/60" />
                  <span className="mono-label ml-3 text-muted">profile.json</span>
                </div>
                <div className="p-5 font-mono text-xs sm:text-sm leading-relaxed">
                  <p className="text-muted">{'{'}</p>
                  <p className="pl-4">
                    <span className="text-accent">&quot;role&quot;</span>: <span className="text-muted">&quot;{typedProfile.title}&quot;</span>,
                  </p>
                  <p className="pl-4">
                    <span className="text-accent">&quot;experience&quot;</span>: <span className="text-muted">&quot;{typedProfile.experience}&quot;</span>,
                  </p>
                  <p className="pl-4">
                    <span className="text-accent">&quot;location&quot;</span>: <span className="text-muted">&quot;Jaipur, India&quot;</span>,
                  </p>
                  <p className="pl-4">
                    <span className="text-accent">&quot;status&quot;</span>: <span className="text-success">&quot;open_to_work&quot;</span>
                    <span className="ml-1 inline-block h-3 w-1.5 align-middle bg-success/70 animate-pulse" />
                  </p>
                  <p className="text-muted">{'}'}</p>
                </div>
              </div>
            </Reveal>

            <div className="relative pl-6 sm:pl-8">
              <div aria-hidden className="absolute left-0 top-1 bottom-1 w-px bg-border" />
              {(
                [
                  ['Core Stack', typedProfile.coreStack.join(' · ')],
                  ['Joining', 'Immediate'],
                  ['Status', 'Open to new opportunities'],
                ] as [string, string][]
              ).map(([label, value], i) => (
                <Reveal key={label} delay={i * 0.08} className="relative pb-4 sm:pb-8 last:pb-0">
                  <span aria-hidden className="absolute -left-6 top-1.5 h-2 w-2 rounded-full border-2 border-accent bg-background sm:-left-8" />
                  <p className="mono-label text-muted">{label}</p>
                  <p className="mt-1.5 text-base sm:text-lg font-medium">{value}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Stats — asymmetric metrics rail */}
      <section className="py-12 sm:py-16 border-t border-border">
        <Container>
          <SectionHeading label="Stats" title="By the numbers" />
          <div className="relative mt-8 sm:mt-14">
            <div aria-hidden className="absolute left-0 right-0 top-2 hidden h-px bg-border sm:block" />
            <div className="grid grid-cols-2 gap-x-6 gap-y-12 sm:grid-cols-4">
              {stats.map((s, i) => (
                <Reveal key={s.label} delay={i * 0.1} className="relative">
                  <span aria-hidden className="relative z-10 hidden h-2 w-2 rounded-full bg-accent sm:block" />
                  <p className={`font-semibold tracking-tight ${i === 0 ? 'text-3xl sm:text-5xl text-accent' : 'text-2xl sm:text-4xl'}`}>
                    {s.value}
                  </p>
                  <p className="mt-2 mono-label text-muted">{s.label}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Tech Stack — interactive radial connection graph */}
      <section className="relative overflow-hidden border-t border-border py-12 sm:py-16">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">

            {/* Tech List */}
            <div className="min-w-0">
              <SectionHeading label="Tech Stack" title="Tools I build with" subtitle="A focused toolkit centered on React and Angular, extended with the ecosystem needed to design, build and ship production interfaces." />
              <div className="mt-4 sm:mt-8">
                {coreTech.map((t, i) => (
                  <Reveal key={t.name} delay={i * 0.04}>
                    <button
                      type="button"
                      onMouseEnter={() => setHoveredTech(i)}
                      onMouseLeave={() => setHoveredTech(null)}
                      className={`group flex w-full items-center justify-between border-b border-border py-3 text-left text-sm transition-colors ${hoveredTech === i
                          ? 'text-accent'
                          : 'text-foreground'
                        }`}
                    >
                      <span>{t.name}</span>

                      <span className="text-xs text-muted">
                        {t.category}
                      </span>
                    </button>
                  </Reveal>
                ))}
              </div>
            </div>

            {/* Radial Graph */}
            <Reveal delay={0.1}>
              <div className="relative mx-auto w-full max-w-[420px]">
                <div className="relative aspect-square w-full rounded-3xl border border-border bg-card/30">

                  {/* Decorative grid */}
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 opacity-40"
                    style={{
                      backgroundImage: `
                  linear-gradient(to right, rgb(var(--border) / 0.35) 1px, transparent 1px),
                  linear-gradient(to bottom, rgb(var(--border) / 0.35) 1px, transparent 1px)
                `,
                      backgroundSize: '32px 32px',
                    }}
                  />

                  {/* SVG Connections */}
                  <svg
                    viewBox="0 0 100 100"
                    preserveAspectRatio="xMidYMid meet"
                    className="pointer-events-none absolute inset-0 h-full w-full"
                  >
                    {coreTech.map((t, i) => {
                      const { x, y } = polarToPercent(
                        i,
                        coreTech.length
                      )

                      const active = hoveredTech === i

                      return (
                        <motion.line
                          key={t.name}
                          x1="50"
                          y1="50"
                          x2={x}
                          y2={y}
                          initial={{ pathLength: 0 }}
                          whileInView={{ pathLength: 1 }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 0.6,
                            delay: i * 0.05,
                          }}
                          className={
                            active
                              ? 'stroke-accent'
                              : 'stroke-border'
                          }
                          strokeWidth={active ? 0.8 : 0.4}
                        />
                      )
                    })}
                  </svg>

                  {/* Center Core */}
                  <div className="absolute left-1/2 top-1/2 z-10 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-accent/40 bg-background text-center shadow-lg sm:h-16 sm:w-16">
                    <span className="mono-label text-accent">
                      Core
                    </span>
                  </div>

                  {/* Tech Nodes */}
                  {coreTech.map((t, i) => {
                    const { x, y } = polarToPercent(
                      i,
                      coreTech.length
                    )

                    const active = hoveredTech === i

                    return (
                      <div
                        key={t.name}
                        className="group absolute z-20 -translate-x-1/2 -translate-y-1/2"
                        style={{
                          left: `${x}%`,
                          top: `${y}%`,
                        }}
                        onMouseEnter={() => setHoveredTech(i)}
                        onMouseLeave={() => setHoveredTech(null)}
                      >
                        <div
                          className={`flex h-14 w-14 cursor-default items-center justify-center rounded-full border bg-background p-1 text-center text-[9px] font-medium transition-all duration-200 sm:h-16 sm:w-16 sm:text-[11px] ${active
                              ? '-translate-y-0.5 border-accent text-accent shadow-lg'
                              : 'border-border text-foreground'
                            }`}
                        >
                          {t.name}
                        </div>

                        {/* Tooltip */}
                        <div className="pointer-events-none absolute left-1/2 top-full z-50 mt-2 w-40 -translate-x-1/2 rounded-xl border border-border bg-card p-3 text-[11px] leading-relaxed text-muted opacity-0 shadow-xl transition-opacity duration-200 group-hover:opacity-100 sm:w-44 sm:text-xs">
                          {t.description}
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Featured Projects — editorial, browser-chrome style previews */}
      <section className="py-12 sm:py-16 border-t border-border">
        <Container>
          <div className="flex items-end justify-between flex-wrap gap-4">
            <SectionHeading label="Work" title="Featured projects" />
            <Link to="/work/projects" className="mono-label text-accent flex items-center gap-1 hover:gap-2 transition-all">
              View All Projects <ArrowUpRight size={14} />
            </Link>
          </div>

          <div className="mt-6 sm:mt-12 grid gap-6 lg:grid-cols-2">
            {featured.map((p, i) => (
              <Reveal key={p.slug} delay={i * 0.08} className={i === 0 ? 'lg:col-span-2' : ''}>
                <Link
                  to={`/work/projects/${p.slug}`}
                  className="group grid gap-6 rounded-2xl border border-border bg-card p-6 transition-all hover:border-accent hover:-translate-y-0.5 sm:p-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center"
                >
                  <div className={i === 0 ? 'lg:order-2' : ''}>
                    <p className="mono-label text-accent mb-3">{p.category}</p>
                    <h3 className="text-xl sm:text-2xl font-semibold tracking-tight">{p.name}</h3>
                    <p className="mt-3 text-sm text-muted leading-relaxed">{p.description}</p>
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {p.technologies.map((t) => (
                        <span key={t} className="rounded-full border border-border px-2.5 py-0.5 text-xs text-muted">{t}</span>
                      ))}
                    </div>
                    <span className="mt-5 inline-flex -translate-x-1 items-center gap-1 mono-label text-accent opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100">
                      View Project <ArrowUpRight size={14} />
                    </span>
                  </div>
                  <div className={i === 0 ? 'lg:order-1' : ''}>
                    <ProjectPreview project={p} large={i === 0} />
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Career — interactive timeline */}
      <section className="py-12 sm:py-16 border-t border-border">
        <Container>
          <SectionHeading label="05 / Career" title="Where I've built" />
          <div className="relative mt-8 sm:mt-16">
            <div aria-hidden className="absolute left-0 right-0 top-4 hidden h-px bg-border sm:block" />
            <div className="grid gap-4 sm:gap-8 sm:grid-cols-[repeat(auto-fit,minmax(160px,1fr))]">
              {typedExperience.map((e, i) => (
                <Reveal key={e.id} delay={i * 0.08} className="group relative">
                  <div className="flex items-center gap-3 sm:block">
                    <span className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-border bg-background mono-label transition-colors group-hover:border-accent group-hover:text-accent sm:mb-4">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <div>
                      <p className="text-base sm:text-lg font-medium transition-colors group-hover:text-accent">{e.company}</p>
                      {e.role && <p className="mt-1 text-sm text-muted">{e.role}</p>}
                      {(e.duration || e.period || e.year) && (
                        <p className="mono-label mt-1 text-muted">{e.duration || e.period || e.year}</p>
                      )}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Why Work With Me — circuit-style schematic */}
      <section className="py-12 sm:py-16 border-t border-border">
        <Container>
          <SectionHeading label="Approach" title="Why work with me" />
          <div className="relative mx-auto mt-6 sm:mt-12 max-w-3xl">
            <div aria-hidden className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 bg-border" />
            <div className="flex flex-col gap-1">
              {strengths.map((s, i) => {
                const left = i % 2 === 0
                return (
                  <Reveal key={s} delay={i * 0.05} className="relative flex items-center">
                    <div className="w-1/2 pr-3 text-right sm:pr-10">
                      {left && (
                        <div className="inline-flex flex-row-reverse items-center gap-2 rounded-lg border border-border bg-card px-3 py-2.5 text-xs transition-colors hover:border-accent sm:px-4 sm:py-3 sm:text-sm">
                          <span aria-hidden className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                          <span>{s}</span>
                        </div>
                      )}
                    </div>
                    <div className="w-1/2 pl-3 sm:pl-10">
                      {!left && (
                        <div className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-3 py-2.5 text-xs transition-colors hover:border-accent sm:px-4 sm:py-3 sm:text-sm">
                          <span aria-hidden className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                          <span>{s}</span>
                        </div>
                      )}
                    </div>
                    <span aria-hidden className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-accent bg-background" />
                  </Reveal>
                )
              })}
            </div>
          </div>
        </Container>
      </section>

      {/* Blog Preview — editorial numbered list */}
      <section className="py-12 sm:py-16 border-t border-border">
        <Container>
          <div className="flex items-end justify-between flex-wrap gap-4">
            <SectionHeading label="Writing" title="From the blog" />
            <Link to="/blog" className="mono-label text-accent flex items-center gap-1 hover:gap-2 transition-all">
              Read All Articles <ArrowUpRight size={14} />
            </Link>
          </div>
          <div className="mt-6 sm:mt-12 divide-y divide-border">
            {typedBlogPosts.slice(0, 2).map((post, i) => (
              <Reveal key={post.slug} delay={i * 0.08}>
                <Link
                  to={`/blog/${post.slug}`}
                  className="group grid gap-4 py-8 sm:grid-cols-[80px_1fr_auto] sm:items-center sm:gap-8"
                >
                  <span className="text-3xl font-semibold text-border transition-colors group-hover:text-accent">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <p className="mono-label text-accent mb-2">{post.category} · {post.readingTime}</p>
                    <h3 className="text-lg sm:text-xl font-semibold transition-colors group-hover:text-accent">{post.title}</h3>
                    <p className="mt-2 max-w-lg text-sm text-muted leading-relaxed">{post.summary}</p>
                  </div>
                  <ArrowUpRight
                    size={20}
                    className="hidden shrink-0 text-muted transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-accent sm:block"
                  />
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Final CTA — minimal, mouse-reactive graphic */}
      <section className="py-12 sm:py-16 border-t border-border">
        <Container>
          <Reveal className="group relative overflow-hidden rounded-3xl border border-border bg-card p-6 text-center">
            <CtaField />
            <div className="relative">
              <p className="mono-label text-accent">Contact</p>
              <h2 className="mt-2 sm:mt-4 text-3xl sm:text-4xl font-semibold tracking-tight max-w-2xl mx-auto">
                Have a product that deserves a great frontend?
              </h2>
              <p className="mt-2 sm:mt-4 text-muted max-w-md mx-auto">
                Let's build something fast, useful and memorable.
              </p>
              <div className="mt-4 sm:mt-8 flex flex-wrap justify-center gap-3">
                <Button to="/contact">Start a Conversation</Button>
                <Button variant="secondary" to="/contact">View Resume</Button>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  )
}