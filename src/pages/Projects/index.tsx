'use client'

import { useState } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import Container from '@/components/common/Container'
import Reveal from '@/components/common/Reveal'
import { projects, projectFilters } from '@/data/projects'
import { Link } from 'react-router-dom'

type Project = (typeof projects)[number]

function ArrowRightIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default function Projects() {
  const [filter, setFilter] = useState<(typeof projectFilters)[number]>('All')
  const filtered = filter === 'All' ? projects : projects.filter((p) => p.category === filter)

  return (
    <>
      <ProjectsHero />

      <section className="py-12 sm:py-16 border-t border-border">
        <Container>
          <FilterBar filter={filter} setFilter={setFilter} />

          <AnimatePresence mode="wait">
            <motion.div
              key={filter}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
            >
              {filtered.length === 0 ? (
                <p className="mt-16 text-center text-muted">No projects in this category yet.</p>
              ) : (
                <ProjectShowcase projects={filtered} />
              )}
            </motion.div>
          </AnimatePresence>
        </Container>
      </section>
    </>
  )
}

/* ------------------------------------------------------------------ */
/* 1. Hero                                                             */
/* ------------------------------------------------------------------ */

function ProjectsHero() {
  const reduceMotion = useReducedMotion()

  return (
    <section className="relative overflow-hidden border-b border-border">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.35] [background-image:linear-gradient(to_right,theme(colors.border)_1px,transparent_1px),linear-gradient(to_bottom,theme(colors.border)_1px,transparent_1px)] [background-size:44px_44px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,black_35%,transparent_85%)]"
      />
      <Container className="relative flex min-h-[64vh] flex-col justify-center py-20 sm:min-h-[70vh]">
        <div className="grid items-center gap-7 sm:gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <motion.p
              initial={reduceMotion ? false : { opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mono-label text-accent"
            >
              WORK / PROJECTS
            </motion.p>

            <motion.h1
              initial={reduceMotion ? false : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.08 }}
              className="mt-3 sm:mt-6 text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl lg:text-[3.4rem]"
            >
              Selected work, built for real users.
            </motion.h1>

            <motion.p
              initial={reduceMotion ? false : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.16 }}
              className="mt-3 sm:mt-6 max-w-lg text-lg leading-relaxed text-muted"
            >
              A collection of production-focused frontend work across enterprise
              platforms, dashboards and product experiences.
            </motion.p>
          </div>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto w-full max-w-md"
          >
            <ProductGraphic reduceMotion={!!reduceMotion} />
          </motion.div>
        </div>
      </Container>
    </section>
  )
}

function ProductGraphic({ reduceMotion }: { reduceMotion: boolean }) {
  return (
    <div className="relative aspect-square w-full">
      <div className="absolute inset-6 rounded-2xl border border-border bg-card/70 [transform:rotate(-2deg)]" />
      <div className="absolute inset-8 rounded-2xl border border-border bg-card shadow-sm">
        <div className="flex items-center gap-1.5 border-b border-border px-4 py-3">
          <span className="h-2 w-2 rounded-full bg-muted/40" />
          <span className="h-2 w-2 rounded-full bg-muted/40" />
          <span className="h-2 w-2 rounded-full bg-muted/40" />
          <span className="ml-auto mono-label text-[10px] text-muted">app.dashboard</span>
        </div>
        <div className="grid grid-cols-3 gap-2 p-4">
          <div className="col-span-1 space-y-2">
            <div className="h-3 w-full rounded bg-border/70" />
            <div className="h-3 w-2/3 rounded bg-border/70" />
            <div className="h-3 w-4/5 rounded bg-border/70" />
          </div>
          <div className="col-span-2 rounded-lg border border-border p-2">
            <svg viewBox="0 0 100 50" className="h-full w-full overflow-visible" aria-hidden>
              <motion.polyline
                points="0,40 15,32 30,36 45,18 60,24 75,10 100,16"
                fill="none"
                className="stroke-accent"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={reduceMotion ? false : { pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.2, delay: 0.4, ease: 'easeInOut' }}
              />
            </svg>
          </div>
          <div className="col-span-3 flex gap-2">
            <div className="h-10 flex-1 rounded-lg border border-border bg-background/40" />
            <div className="h-10 flex-1 rounded-lg border border-border bg-background/40" />
            <div className="h-10 flex-1 rounded-lg border border-accent/40 bg-accent/10" />
          </div>
        </div>
      </div>

      <svg viewBox="0 0 360 320" className="absolute inset-0 h-full w-full overflow-visible" aria-hidden>
        <motion.path
          d="M40,270 L40,80 L200,40"
          fill="none"
          className="stroke-accent/40"
          strokeWidth="1.25"
          strokeDasharray="4 5"
          initial={reduceMotion ? false : { pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.3, delay: 0.5, ease: 'easeInOut' }}
        />
        <circle cx="40" cy="270" r="4" className="fill-card stroke-accent" strokeWidth="1.5" />
        <circle cx="200" cy="40" r="5" className="fill-accent" />
      </svg>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/* 2. Filter bar                                                       */
/* ------------------------------------------------------------------ */

function FilterBar({
  filter,
  setFilter,
}: {
  filter: (typeof projectFilters)[number]
  setFilter: (f: (typeof projectFilters)[number]) => void
}) {
  return (
    <div className="flex flex-wrap gap-2 rounded-full border border-border bg-card p-1.5 sm:inline-flex">
      {projectFilters.map((f) => {
        const isActive = filter === f
        return (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`relative rounded-full px-4 py-1.5 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60 ${isActive ? 'text-accent' : 'text-muted hover:text-foreground'
              }`}
          >
            {isActive && (
              <motion.span
                layoutId="project-filter-pill"
                className="absolute inset-0 -z-10 rounded-full bg-accent/10 border border-accent/40"
                transition={{ type: 'spring', stiffness: 380, damping: 32 }}
              />
            )}
            {f}
          </button>
        )
      })}
    </div>
  )
}

/* ------------------------------------------------------------------ */
/* 3 & 4. Showcase + abstract previews                                 */
/* ------------------------------------------------------------------ */

const PREVIEW_VARIANTS = ['dashboard', 'browser', 'table', 'chart'] as const

function previewFor(index: number, slug: string): (typeof PREVIEW_VARIANTS)[number] {
  const hash = slug.split('').reduce((acc, c) => acc + c.charCodeAt(0), 0)
  return PREVIEW_VARIANTS[(hash + index) % PREVIEW_VARIANTS.length]
}

function ProjectShowcase({ projects: items }: { projects: Project[] }) {
  const [featured, ...rest] = items

  return (
    <div className="mt-10 grid gap-6">
      {featured && <ProjectCard project={featured} index={0} featured />}
      {rest.length > 0 && (
        <div className="grid gap-6 md:grid-cols-2">
          {rest.map((p, i) => (
            <ProjectCard key={p.slug} project={p} index={i + 1} />
          ))}
        </div>
      )}
    </div>
  )
}

function ProjectCard({ project: p, index, featured = false }: { project: Project; index: number; featured?: boolean }) {
  const variant = previewFor(index, p.slug)

  return (
    <Reveal delay={index * 0.06}>
      <Link to={`/work/projects/${p.slug}`} className={`group relative block overflow-hidden rounded-2xl border border-border bg-card transition-colors duration-300 hover:border-accent/60 ${featured ? 'grid gap-0 lg:grid-cols-[1.2fr_1fr]' : ''
        }`}>
        <div className={`overflow-hidden ${featured ? 'lg:order-2' : ''} border-b border-border lg:border-b-0 ${featured ? 'lg:border-l' : ''}`}>
          <div className="h-full w-full transition-transform duration-500 ease-out group-hover:scale-[1.04]">
            <ProjectPreview variant={variant} large={featured} />
          </div>
        </div>

        <div className={`p-6 sm:p-8 ${featured ? 'flex flex-col justify-center' : ''}`}>
          <p className="mono-label text-accent mb-2">
            {p.category} · {p.status}
          </p>
          <h3 className={`font-semibold ${featured ? 'text-2xl sm:text-3xl' : 'text-lg'}`}>{p.name}</h3>
          <p className="mt-2 text-sm text-muted leading-relaxed">{p.description}</p>
          <p className="mt-3 text-xs text-muted">Role: {p.role}</p>

          <div className="mt-4 flex flex-wrap gap-1.5">
            {p.technologies.map((t) => (
              <span key={t} className="rounded-full border border-border px-2.5 py-0.5 text-xs text-muted">
                {t}
              </span>
            ))}
          </div>

          <div className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-accent">
            View Case Study
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
              <ArrowRightIcon />
            </span>
          </div>
        </div>
      </Link>
    </Reveal>
  )
}

function ProjectPreview({ variant, large = false }: { variant: (typeof PREVIEW_VARIANTS)[number]; large?: boolean }) {
  const height = large ? 'min-h-[280px]' : 'min-h-[200px]'

  return (
    <div className={`relative flex ${height} w-full items-center justify-center bg-background/40 p-6`}>
      {variant === 'dashboard' && (
        <div className="w-full max-w-sm rounded-xl border border-border bg-card p-4 shadow-sm">
          <div className="mb-3 flex gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-muted/40" />
            <span className="h-1.5 w-1.5 rounded-full bg-muted/40" />
          </div>
          <div className="grid grid-cols-3 gap-2">
            <div className="col-span-1 h-16 rounded-lg border border-border bg-background/40" />
            <div className="col-span-2 h-16 rounded-lg border border-accent/40 bg-accent/10" />
            <div className="col-span-3 h-8 rounded-lg border border-border bg-background/40" />
          </div>
        </div>
      )}

      {variant === 'browser' && (
        <div className="w-full max-w-sm overflow-hidden rounded-xl border border-border bg-card shadow-sm">
          <div className="flex items-center gap-1.5 border-b border-border px-3 py-2">
            <span className="h-1.5 w-1.5 rounded-full bg-muted/40" />
            <span className="h-1.5 w-1.5 rounded-full bg-muted/40" />
            <span className="h-1.5 w-1.5 rounded-full bg-muted/40" />
            <div className="ml-2 h-3 flex-1 rounded-full bg-background/60" />
          </div>
          <div className="space-y-2 p-4">
            <div className="h-3 w-2/3 rounded bg-border/70" />
            <div className="h-14 rounded-lg border border-border" />
            <div className="flex gap-2">
              <div className="h-3 flex-1 rounded bg-border/70" />
              <div className="h-3 flex-1 rounded bg-border/70" />
            </div>
          </div>
        </div>
      )}

      {variant === 'table' && (
        <div className="w-full max-w-sm rounded-xl border border-border bg-card p-4 shadow-sm">
          {[0, 1, 2, 3].map((row) => (
            <div key={row} className="flex items-center gap-2 border-b border-border py-2 last:border-0">
              <div className="h-2 w-2 rounded-full bg-accent/50" />
              <div className="h-2.5 flex-1 rounded bg-border/70" />
              <div className="h-2.5 w-10 rounded bg-border/50" />
            </div>
          ))}
        </div>
      )}

      {variant === 'chart' && (
        <div className="w-full max-w-sm rounded-xl border border-border bg-card p-4 shadow-sm">
          <svg viewBox="0 0 200 90" className="h-24 w-full" aria-hidden>
            <polyline
              points="0,70 30,55 60,60 90,30 120,40 150,15 200,25"
              fill="none"
              className="stroke-accent"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <line x1="0" y1="80" x2="200" y2="80" className="stroke-border" strokeWidth="1" />
          </svg>
        </div>
      )}
    </div>
  )
}