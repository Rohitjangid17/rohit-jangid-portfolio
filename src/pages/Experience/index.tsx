import { motion, useReducedMotion } from 'framer-motion'
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
      </svg>
      <div className="absolute -bottom-3 left-4 rounded-full border border-border bg-card px-3 py-1.5 mono-label text-[10px] text-muted shadow-sm">
        {count} role{count === 1 ? '' : 's'} &middot; production shipped
      </div>
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
        <div className="mt-12 divide-y divide-border">
          {experience.map((e, i) => (
            <Reveal key={e.id} delay={i * 0.06} className="grid gap-6 py-10 first:pt-0 lg:grid-cols-[220px_1fr] lg:gap-12">
              {/* left: identity */}
              <div>
                <span className="mono-label text-[11px] text-accent">0{i + 1}</span>
                <p className="mt-3 text-xl font-semibold">{e.company}</p>
                <p className="mt-1 text-sm font-medium text-accent">{e.role}</p>
                <p className="mt-4 text-sm text-muted">{e.period}</p>
                <p className="text-sm text-muted">
                  {e.location} · {e.employmentType}
                </p>
                <div className="mt-5 flex flex-wrap gap-x-3 gap-y-1.5">
                  {e.technologies.map((t) => (
                    <span key={t} className="text-xs text-muted">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* right: detail */}
              <div>
                <p className="text-sm leading-relaxed text-muted max-w-xl">{e.summary}</p>

                <div className="mt-7 grid gap-6 sm:grid-cols-2">
                  {e.responsibilities.map((r) => (
                    <div key={r.group}>
                      <p className="mono-label text-[11px] text-muted mb-2.5">{r.group}</p>
                      <ul className="space-y-1.5">
                        {r.items.map((item) => (
                          <li key={item} className="text-sm text-muted leading-relaxed pl-3 relative before:absolute before:left-0 before:top-[0.6em] before:h-1 before:w-1 before:rounded-full before:bg-accent/50">
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                {e.id === 'cynosure' && <AwardCard />}
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}

function AwardCard() {
  return (
    <div className="mt-7 border-l-2 border-accent/40 pl-5">
      <p className="mono-label text-accent mb-2">Recognition</p>
      <p className="text-lg font-semibold">{award.title}</p>
      <p className="text-sm text-muted mt-1">{award.company}</p>
      <p className="mt-3 text-sm text-muted leading-relaxed max-w-md">{award.description}</p>
      {/* TODO: drop award photo at src/assets/award/ and render it here */}
    </div>
  )
}

/* ------------------------------------------------------------------ */
/* Lessons learned                                                     */
/* ------------------------------------------------------------------ */

function LessonsLearned() {
  return (
    <section className="py-16 border-t border-border">
      <Container>
        <SectionHeading label="Reflection" title="What these years taught me" />
        <div className="mt-10 max-w-2xl divide-y divide-border border-t border-border">
          {lessonsLearned.map((l, i) => (
            <Reveal key={l} delay={i * 0.06} className="grid grid-cols-[3rem_1fr] gap-4 py-5">
              <span className="mono-label text-muted">N&deg;{String(i + 1).padStart(2, '0')}</span>
              <p className="text-sm text-muted leading-relaxed">{l}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}