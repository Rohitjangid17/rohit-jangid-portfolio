import { useState } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import Container from '@/components/common/Container'
import SectionHeading from '@/components/common/SectionHeading'
import Reveal from '@/components/common/Reveal'
import { experience, award, lessonsLearned } from '@/data/experience'

export default function Experience() {
  return (
    <>
      <ExperienceHero />
      <ExperienceTimeline />
      <LessonsLearned />
    </>
  )
}

/* ------------------------------------------------------------------ */
/* Hero                                                                */
/* ------------------------------------------------------------------ */

function ExperienceHero() {
  const reduceMotion = useReducedMotion()

  return (
    <section className="relative overflow-hidden border-b border-border">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.35] [background-image:linear-gradient(to_right,theme(colors.border)_1px,transparent_1px),linear-gradient(to_bottom,theme(colors.border)_1px,transparent_1px)] [background-size:44px_44px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,black_35%,transparent_85%)]"
      />
      <Container className="relative flex min-h-[64vh] flex-col justify-center py-20 sm:min-h-[70vh]">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <motion.p
              initial={reduceMotion ? false : { opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mono-label text-accent"
            >
              EXPERIENCE / 03
            </motion.p>

            <motion.h1
              initial={reduceMotion ? false : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.08 }}
              className="mt-5 text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl lg:text-[3.4rem]"
            >
              Where the work happened.
            </motion.h1>

            <motion.p
              initial={reduceMotion ? false : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.16 }}
              className="mt-6 max-w-lg text-lg leading-relaxed text-muted"
            >
              3+ years of building production experiences — across enterprise
              platforms, product teams and real shipping deadlines.
            </motion.p>
          </div>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto w-full max-w-md"
          >
            <CareerPathGraphic reduceMotion={!!reduceMotion} count={experience.length} />
          </motion.div>
        </div>
      </Container>
    </section>
  )
}

function CareerPathGraphic({ reduceMotion, count }: { reduceMotion: boolean; count: number }) {
  const stops = Math.max(count, 3)
  const points = Array.from({ length: stops }, (_, i) => {
    const x = 40 + (i * 280) / (stops - 1 || 1)
    const y = 200 - (i % 2 === 0 ? 60 : 0) - (i === stops - 1 ? 100 : 0)
    return { x, y }
  })
  const path = points.map((p, i) => `${i === 0 ? 'M' : 'L'}${p.x},${p.y}`).join(' ')

  return (
    <div className="relative aspect-square w-full">
      <div className="absolute inset-8 rounded-2xl border border-border bg-card shadow-sm">
        <div className="flex items-center gap-1.5 border-b border-border px-4 py-3">
          <span className="h-2 w-2 rounded-full bg-muted/40" />
          <span className="h-2 w-2 rounded-full bg-muted/40" />
          <span className="h-2 w-2 rounded-full bg-muted/40" />
          <span className="ml-auto mono-label text-[10px] text-muted">experience.tsx</span>
        </div>
        <div className="space-y-3 px-4 pt-4">
          <div className="ml-auto max-w-[70%] rounded-lg rounded-br-sm border border-accent/40 bg-accent/10 px-3 py-2 text-xs text-accent">
            From first role to production.
          </div>
          <div className="max-w-[70%] rounded-lg rounded-bl-sm border border-border bg-background/50 px-3 py-2 text-xs text-muted">
            A journey built through real projects.
            <motion.span
              aria-hidden
              className="ml-0.5 inline-block h-3 w-[1.5px] translate-y-[2px] bg-muted align-middle"
              animate={reduceMotion ? { opacity: 1 } : { opacity: [1, 0, 1] }}
              transition={reduceMotion ? {} : { duration: 1, repeat: Infinity, ease: 'steps(1)' }}
            />
          </div>
        </div>
      </div>

      <svg viewBox="0 0 360 280" className="absolute inset-8 h-[calc(100%-4rem)] w-[calc(100%-4rem)] overflow-visible" aria-hidden>
        <motion.path
          d={path}
          fill="none"
          className="stroke-accent/40"
          strokeWidth="1.5"
          strokeDasharray="4 5"
          initial={reduceMotion ? false : { pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.4, ease: 'easeInOut', delay: 0.3 }}
        />
        {points.map((p, i) => (
          <motion.circle
            key={i}
            cx={p.x}
            cy={p.y}
            r={i === points.length - 1 ? 6 : 4}
            className={i === points.length - 1 ? 'fill-accent' : 'fill-card stroke-accent'}
            strokeWidth="1.5"
            initial={reduceMotion ? false : { opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.5 + i * 0.1 }}
          />
        ))}
        <div className="absolute -bottom-3 left-4 rounded-full border border-border bg-card px-3 py-1.5 mono-label text-[10px] text-muted shadow-sm">
          {count} role{count === 1 ? '' : 's'} &middot; production shipped
        </div>
      </svg>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/* Timeline                                                            */
/* ------------------------------------------------------------------ */

function ExperienceTimeline() {
  return (
    <section className="py-16 border-t border-border">
      <Container>
        <SectionHeading label="Journey" title="Career timeline" />
        <div className="relative mt-14">
          <div aria-hidden className="absolute left-4 top-2 bottom-2 hidden w-px bg-border lg:block" />
          <div className="space-y-20">
            {experience.map((e, i) => (
              <Reveal key={e.id} delay={i * 0.06} className="relative lg:pl-16">
                <TimelineNode index={i} />

                <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
                  <div>
                    <p className="text-xl font-semibold">{e.company}</p>
                    <p className="mt-1 text-sm font-medium text-accent">{e.role}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-muted">{e.period}</p>
                    <p className="text-sm text-muted">
                      {e.location} · {e.employmentType}
                    </p>
                  </div>
                </div>

                <p className="mt-5 max-w-2xl text-sm leading-relaxed text-muted">{e.summary}</p>

                <RoleTechWork role={e.role} technologies={e.technologies} responsibilities={e.responsibilities} />

                <ResponsibilityAccordion responsibilities={e.responsibilities} />

                {e.id === 'cynosure' && <AwardCard />}
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}

function TimelineNode({ index }: { index: number }) {
  return (
    <motion.span
      aria-hidden
      className="absolute left-4 top-1 hidden h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full border border-border bg-background mono-label text-[11px] lg:flex"
      initial={{ scale: 0.6, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35, delay: index * 0.06 }}
    >
      0{index + 1}
    </motion.span>
  )
}

/* ------------------------------------------------------------------ */
/* Role → Technologies → Engineering Work                              */
/* ------------------------------------------------------------------ */

function RoleTechWork({
  role,
  technologies,
  responsibilities,
}: {
  role: string
  technologies: string[]
  responsibilities: { group: string; items: string[] }[]
}) {
  const workStages = responsibilities.map((r) => r.group)

  return (
    <div className="mt-8 overflow-x-auto">
      <div className="flex min-w-max items-stretch gap-6">
        <FlowStage label="Role" value={role} />
        <FlowArrow />
        <FlowStage label="Technologies" chips={technologies} />
        <FlowArrow />
        <FlowStage label="Engineering Work" chips={workStages} />
      </div>
    </div>
  )
}

function FlowStage({ label, value, chips }: { label: string; value?: string; chips?: string[] }) {
  return (
    <div className="flex w-48 shrink-0 flex-col gap-2 border-l-2 border-accent/30 pl-4">
      <p className="mono-label text-[10px] text-muted">{label}</p>
      {value && <p className="text-sm font-medium text-accent">{value}</p>}
      {chips && (
        <p className="text-xs leading-relaxed text-muted">{chips.join(' · ')}</p>
      )}
    </div>
  )
}

function FlowArrow() {
  return (
    <div className="flex w-6 shrink-0 items-center justify-center text-border">
      <svg viewBox="0 0 24 16" className="h-3.5 w-6" fill="none" stroke="currentColor" strokeWidth="1.3">
        <path d="M1 8 H20 M15 3 L20 8 L15 13" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/* Expandable responsibilities                                         */
/* ------------------------------------------------------------------ */

function ResponsibilityAccordion({ responsibilities }: { responsibilities: { group: string; items: string[] }[] }) {
  const [open, setOpen] = useState<number | null>(0)
  const reduceMotion = useReducedMotion()

  return (
    <div className="mt-8 divide-y divide-border border-t border-border">
      {responsibilities.map((r, i) => {
        const isOpen = open === i
        const panelId = `resp-panel-${r.group.replace(/\s+/g, '-')}-${i}`
        return (
          <div key={r.group}>
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              aria-controls={panelId}
              className="flex w-full items-center justify-between gap-4 py-4 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60 rounded-sm"
            >
              <span className="flex items-center gap-3">
                <span className="mono-label text-[11px] text-accent">0{i + 1}</span>
                <span className="text-sm font-medium">{r.group}</span>
              </span>
              <span className="flex items-center gap-2.5 text-xs text-muted">
                {r.items.length} item{r.items.length === 1 ? '' : 's'}
                <motion.span
                  animate={{ rotate: isOpen ? 45 : 0 }}
                  transition={{ duration: 0.25 }}
                  className="text-base leading-none text-accent"
                >
                  +
                </motion.span>
              </span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={panelId}
                  initial={reduceMotion ? false : { height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={reduceMotion ? {} : { height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: 'easeInOut' }}
                  className="overflow-hidden"
                >
                  <ul className="space-y-1.5 pb-5 pl-6">
                    {r.items.map((item) => (
                      <li
                        key={item}
                        className="relative pl-3 text-sm leading-relaxed text-muted before:absolute before:left-0 before:top-[0.6em] before:h-1 before:w-1 before:rounded-full before:bg-accent/50"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )
      })}
    </div>
  )
}

/* ------------------------------------------------------------------ */
/* Cynosure recognition                                                */
/* ------------------------------------------------------------------ */

function TrophyIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M8 21h8M12 17v4M6 3h12v4a6 6 0 0 1-12 0V3Z" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M6 5H3v2a3 3 0 0 0 3 3M18 5h3v2a3 3 0 0 1-3 3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function AwardCard() {
  const [imgFailed, setImgFailed] = useState(false)
  // Optional — only used if your `award` data includes an image path.
  const awardImage = (award as { image?: string }).image

  return (
    <Reveal className="mt-10 border-l-2 border-accent/40 pl-5 sm:pl-6">
      <p className="mono-label text-accent mb-3">Recognition</p>
      <div className="flex items-start gap-4">
        {awardImage && !imgFailed ? (
          <img
            src={awardImage}
            alt={award.title}
            className="h-14 w-14 shrink-0 rounded-lg border border-border object-cover"
            onError={() => setImgFailed(true)}
          />
        ) : (
          <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg border border-accent/30 bg-accent/5 text-accent">
            <TrophyIcon />
          </span>
        )}
        <div>
          <p className="text-lg font-semibold">{award.title}</p>
          <p className="text-sm text-muted mt-1">{award.company}</p>
        </div>
      </div>
      <p className="mt-4 max-w-md text-sm leading-relaxed text-muted">{award.description}</p>
      {/* TODO: add an `image` field to the award data (or drop a photo at
          src/assets/award/ and point `awardImage` at it) to show it here. */}
    </Reveal>
  )
}

/* ------------------------------------------------------------------ */
/* Lessons learned — field notes                                       */
/* ------------------------------------------------------------------ */

function LessonsLearned() {
  return (
    <section className="py-16 border-t border-border">
      <Container>
        <SectionHeading label="Field Notes" title="What these years taught me" />
        <div className="mt-10 max-w-2xl">
          {lessonsLearned.map((l, i) => (
            <Reveal
              key={l}
              delay={i * 0.06}
              className="group flex gap-5 border-l-2 border-border py-5 pl-6 transition-colors duration-300 hover:border-accent/50"
            >
              <span className="mono-label shrink-0 text-muted">N&deg;{String(i + 1).padStart(2, '0')}</span>
              <p className="text-sm leading-relaxed text-muted">{l}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}