import { useState } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import Container from '@/components/common/Container'
import SectionHeading from '@/components/common/SectionHeading'
import Reveal from '@/components/common/Reveal'
import Button from '@/components/common/Button'
import { experience, lessonsLearned } from '@/data/experience'
import { currentlyExploring } from '@/data/technologies'

const philosophy = [
  'Build for people, not screenshots.',
  'Make complexity feel simple.',
  'Reusable components beat repetitive code.',
  'Performance is part of UX.',
  'Good interfaces disappear into the experience.',
]

const workflow = [
  ['Understand', 'Clarify the problem and constraints before touching code.'],
  ['Plan', 'Break the feature into components, states and data flow.'],
  ['Design', 'Align on layout, hierarchy and interaction details.'],
  ['Build', 'Implement with reusable, typed components.'],
  ['Test', 'Verify behavior with unit tests and manual QA.'],
  ['Optimize', 'Check performance, accessibility and edge cases.'],
  ['Ship', 'Deploy, monitor and iterate.'],
]

const faqs = [
  ['What frontend technologies do you work with?', 'Primarily Angular, React.js and Next.js with TypeScript — plus supporting tools like Redux, RxJS, React Query and Tailwind CSS.'],
  ['Are you open to new opportunities?', 'Yes — currently open to Frontend Engineer roles.'],
  ['What kind of roles are you looking for?', 'Frontend Engineer, React/Angular Developer, or UI-focused engineering roles on product teams.'],
  ['Are you available immediately?', 'Yes, I can join immediately.'],
  ['Do you work with React and Angular?', 'Yes — I have hands-on production experience with both.'],
  ['Can you work on enterprise applications?', "Yes, I've built and maintained modules on a large enterprise fleet-management platform."],
]

type Experience = {
  id: string
  company: string
  role: string
  period: string
  summary: string
}

const isCynosure = (e: Experience): boolean =>
  /cynosure/i.test(`${e.company} ${e.role}`)
const AWARD_IMAGE_SRC = '/images/awards/emerging-talent.png'

export default function About() {
  return (
    <>
      <AboutHero />
      <Introduction />
      <CareerJourney />
      <Philosophy />
      <HowIWork />
      <BeyondCoding />
      <CurrentlyExploring />
      <Faq />
      <LessonsLearned />
      <FinalCta />
    </>
  )
}

/* ------------------------------------------------------------------ */
/* 1. Hero                                                             */
/* ------------------------------------------------------------------ */

function AboutHero() {
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
              ABOUT / 01
            </motion.p>

            <motion.h1
              initial={reduceMotion ? false : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.08 }}
              className="mt-5 text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl lg:text-[3.4rem]"
            >
              The developer behind the interface.
            </motion.h1>

            <motion.p
              initial={reduceMotion ? false : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.16 }}
              className="mt-6 max-w-lg text-lg leading-relaxed text-muted"
            >
              Frontend Engineer focused on turning complex product requirements into
              clean, scalable and intuitive digital experiences.
            </motion.p>

            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.24 }}
              className="mt-9 flex flex-wrap items-center gap-4"
            >
              <Button to="/work" variant="primary">View My Work</Button>
              <Button to="/contact" variant="secondary">Let&rsquo;s Talk</Button>
            </motion.div>
          </div>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto w-full max-w-md"
          >
            <EngineeringGraphic reduceMotion={reduceMotion} />
          </motion.div>
        </div>
      </Container>
    </section>
  )
}

function EngineeringGraphic({ reduceMotion }: { reduceMotion: boolean | null }) {
  const nodes = [
    { x: 60, y: 70 },
    { x: 240, y: 40 },
    { x: 320, y: 150 },
    { x: 90, y: 210 },
    { x: 260, y: 250 },
  ]

  return (
    <div className="relative aspect-square w-full">
      {/* stacked UI layer panels */}
      <div className="absolute inset-6 rounded-2xl border border-border bg-card/60 [transform:rotate(-3deg)]" />
      <div className="absolute inset-8 rounded-2xl border border-border bg-card/80 [transform:rotate(2deg)]" />
      <div className="absolute inset-10 rounded-2xl border border-border bg-card shadow-sm">
        <div className="flex items-center gap-1.5 border-b border-border px-4 py-3">
          <span className="h-2 w-2 rounded-full bg-muted/40" />
          <span className="h-2 w-2 rounded-full bg-muted/40" />
          <span className="h-2 w-2 rounded-full bg-muted/40" />
          <span className="ml-auto mono-label text-[10px] text-muted">component.tsx</span>
        </div>
        <div className="space-y-2 px-4 pt-4 font-mono text-[11px] leading-relaxed text-muted">
          <p><span className="text-accent">const</span> Interface = () =&gt; {'{'}</p>
          <p className="pl-4">return &lt;<span className="text-accent">System</span> /&gt;</p>
          <p>{'}'}</p>
        </div>
      </div>

      {/* connective node graph */}
      <svg
        viewBox="0 0 360 320"
        className="absolute inset-0 h-full w-full overflow-visible"
        aria-hidden
      >
        <g className="stroke-accent/40" strokeWidth="1.25" fill="none">
          <motion.path
            d={`M${nodes[0].x},${nodes[0].y} L${nodes[1].x},${nodes[1].y} L${nodes[2].x},${nodes[2].y} L${nodes[4].x},${nodes[4].y} L${nodes[3].x},${nodes[3].y} L${nodes[0].x},${nodes[0].y}`}
            strokeDasharray="4 5"
            initial={reduceMotion ? false : { pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.4, ease: 'easeInOut', delay: 0.3 }}
          />
        </g>
        {nodes.map((n, i) => (
          <motion.circle
            key={i}
            cx={n.x}
            cy={n.y}
            r={i === 2 ? 6 : 4}
            className={i === 2 ? 'fill-accent' : 'fill-card stroke-accent'}
            strokeWidth="1.5"
            initial={reduceMotion ? false : { opacity: 0, scale: 0 }}
            animate={
              reduceMotion
                ? { opacity: 1, scale: 1 }
                : { opacity: 1, scale: 1 }
            }
            transition={{ duration: 0.4, delay: 0.5 + i * 0.08 }}
          />
        ))}
        {!reduceMotion && (
          <motion.circle
            cx={nodes[2].x}
            cy={nodes[2].y}
            r={6}
            className="fill-none stroke-accent/50"
            strokeWidth="1"
            animate={{ r: [6, 16, 6], opacity: [0.6, 0, 0.6] }}
            transition={{ duration: 2.6, repeat: Infinity, ease: 'easeOut' }}
          />
        )}
      </svg>

      {/* floating tag */}
      <div className="absolute -bottom-3 left-4 rounded-full border border-border bg-card px-3 py-1.5 mono-label text-[10px] text-muted shadow-sm">
        TypeScript &middot; React &middot; Angular
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/* 2. Introduction                                                     */
/* ------------------------------------------------------------------ */

function Introduction() {
  const meta = [
    ['Location', 'Jaipur, India'],
    ['Focus', 'Angular / React / Next.js'],
    ['Experience', '3+ years'],
    ['Status', 'Open to Frontend Engineer roles'],
  ]

  return (
    <section className="py-16">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1fr_260px] lg:gap-16">
          <Reveal className="max-w-2xl">
            <p className="mono-label text-accent">02 / Introduction</p>
            <p className="mt-5 text-2xl font-medium leading-relaxed sm:text-[1.7rem]">
              I&rsquo;m a Frontend Engineer based in Jaipur with 3+ years of experience
              building production web applications with Angular, React.js and Next.js.
            </p>
            <p className="mt-5 text-lg leading-relaxed text-muted">
              My work spans enterprise-scale platforms and product-focused builds — from
              reusable component systems to API-integrated dashboards. I care about
              interfaces that are fast, accessible and genuinely easy to use.
            </p>
          </Reveal>

          <Reveal delay={0.1} className="lg:border-l lg:border-border lg:pl-10">
            <dl className="space-y-5">
              {meta.map(([label, value]) => (
                <div key={label} className="border-b border-border pb-4 last:border-0 last:pb-0">
                  <dt className="mono-label text-[11px] text-muted">{label}</dt>
                  <dd className="mt-1.5 text-sm font-medium">{value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/* 3. Career journey                                                   */
/* ------------------------------------------------------------------ */

function CareerJourney() {
  const timeline = [...experience].reverse()

  return (
    <section className="py-16 border-t border-border">
      <Container>
        <SectionHeading label="Journey" title="Career timeline" />
        <div className="relative mt-12">
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-border sm:left-[199px]" />
          <div className="space-y-10">
            {timeline.map((e, i) => (
              <Reveal
                key={e.id}
                delay={i * 0.08}
                className="group relative grid gap-2 pl-6 sm:grid-cols-[200px_1fr] sm:pl-0"
              >
                <span className="absolute left-0 top-1.5 h-3.5 w-3.5 -translate-x-1/2 rounded-full border-2 border-accent bg-background transition-transform duration-300 group-hover:scale-125 sm:left-[199px]" />
                <div className="sm:pr-10">
                  <p className="font-medium">{e.company}</p>
                  <p className="text-sm text-muted">{e.period}</p>
                </div>
                <div className="sm:pl-10">
                  <div className="flex flex-wrap items-center gap-2">
                    <p className="text-sm font-medium text-accent">{e.role}</p>
                    {isCynosure(e) && <AwardBadge />}
                  </div>
                  <p className="mt-1 text-sm text-muted leading-relaxed">{e.summary}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}

function AwardBadge() {
  const [imgFailed, setImgFailed] = useState(false)

  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-accent/40 bg-accent/5 py-1 pl-1 pr-2.5 mono-label text-[10px] text-accent">
      {imgFailed ? (
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.6">
          <path d="M8 21h8M12 17v4M6 3h12v4a6 6 0 0 1-12 0V3Z" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M6 5H3v2a3 3 0 0 0 3 3M18 5h3v2a3 3 0 0 1-3 3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ) : (
        <img
          src={AWARD_IMAGE_SRC}
          alt=""
          className="h-4 w-4 rounded-full object-cover"
          onError={() => setImgFailed(true)}
        />
      )}
      Emerging Talent Award
    </span>
  )
}

/* ------------------------------------------------------------------ */
/* 4. Development philosophy                                           */
/* ------------------------------------------------------------------ */

function Philosophy() {
  return (
    <section className="py-16 border-t border-border">
      <Container>
        <SectionHeading label="Principles" title="Development philosophy" />
        <div className="relative mt-12">
          <div className="absolute left-3 top-3 bottom-3 w-px bg-border sm:hidden" />
          <div className="hidden sm:block absolute left-0 right-0 top-3 h-px bg-border" />
          <div className="grid gap-8 sm:grid-cols-5">
            {philosophy.map((p, i) => (
              <Reveal key={p} delay={i * 0.07} className="relative pl-9 sm:pl-0">
                <span className="absolute left-0 top-1 h-6 w-6 -translate-x-1/2 rounded-full border border-accent/50 bg-background sm:static sm:mb-4 sm:translate-x-0 sm:flex sm:items-center sm:justify-center">
                  <span className="absolute left-1/2 top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent" />
                </span>
                <p className="mono-label text-[10px] text-muted">0{i + 1}</p>
                <p className="mt-2 text-sm font-medium leading-relaxed">{p}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/* 5. How I work                                                       */
/* ------------------------------------------------------------------ */

function HowIWork() {
  const reduceMotion = useReducedMotion()

  return (
    <section className="py-16 border-t border-border">
      <Container>
        <SectionHeading label="Process" title="How I work" />
        <div className="relative mt-12">
          <div className="absolute left-4 top-0 bottom-0 w-px bg-border lg:hidden" />
          <div className="hidden lg:block absolute left-0 right-0 top-4 h-px bg-border" />
          <motion.div
            className="hidden lg:block absolute left-0 top-4 h-px origin-left bg-accent"
            initial={reduceMotion ? false : { scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 1, ease: 'easeInOut' }}
            style={{ width: '100%' }}
          />

          <div className="grid gap-8 lg:grid-cols-7">
            {workflow.map(([step, desc], i) => (
              <Reveal
                key={step}
                delay={i * 0.06}
                className="relative pl-11 lg:pl-0"
              >
                <span className="absolute left-0 top-0.5 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full border border-border bg-card mono-label text-[11px] lg:static lg:mb-4 lg:translate-x-0">
                  0{i + 1}
                </span>
                <p className="font-medium">{step}</p>
                <p className="mt-1 text-sm text-muted leading-relaxed">{desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/* 6. Beyond coding                                                    */
/* ------------------------------------------------------------------ */

function BeyondCoding() {
  return (
    <section className="py-16 border-t border-border">
      <Container>
        <Reveal className="relative overflow-hidden rounded-2xl border border-border bg-card p-8 sm:p-10">
          <svg
            aria-hidden
            viewBox="0 0 240 160"
            className="pointer-events-none absolute -right-6 -top-6 h-40 w-60 stroke-muted/30"
            fill="none"
            strokeWidth="1.4"
          >
            <path
              d="M10 120 C 40 40, 90 20, 120 70 S 190 130, 230 40"
              strokeLinecap="round"
              strokeDasharray="2 6"
            />
          </svg>
          <p className="mono-label text-accent mb-3">Beyond Coding</p>
          <p className="text-lg leading-relaxed max-w-xl">
            When I&rsquo;m away from the editor, I still create — just with graphite
            instead of TypeScript.
          </p>
          <div className="mt-6">
            <Button to="/sketches" variant="secondary">Explore My Sketches</Button>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/* 7. Currently exploring                                              */
/* ------------------------------------------------------------------ */

function CurrentlyExploring() {
  const reduceMotion = useReducedMotion()
  const radius = 110
  const center = 140

  return (
    <section className="py-16 border-t border-border">
      <Container>
        <SectionHeading label="Growth" title="Currently exploring" />

        {/* radar — sm and up */}
        <div className="mt-10 hidden justify-center sm:flex">
          <div className="relative h-[280px] w-[280px]">
            <svg viewBox="0 0 280 280" className="absolute inset-0 h-full w-full" aria-hidden>
              {[110, 75, 40].map((r) => (
                <circle key={r} cx={center} cy={center} r={r} className="fill-none stroke-border" strokeWidth="1" />
              ))}
              <line x1={center} y1={center - radius} x2={center} y2={center + radius} className="stroke-border" strokeWidth="1" />
              <line x1={center - radius} y1={center} x2={center + radius} y2={center} className="stroke-border" strokeWidth="1" />
            </svg>

            <motion.div
              className="absolute inset-0"
              animate={reduceMotion ? {} : { rotate: 360 }}
              transition={reduceMotion ? {} : { duration: 40, repeat: Infinity, ease: 'linear' }}
            >
              <svg viewBox="0 0 280 280" className="absolute inset-0 h-full w-full" aria-hidden>
                <path
                  d={`M${center},${center} L${center},${center - radius} A${radius},${radius} 0 0 1 ${center + radius * Math.sin((Math.PI * 2) / 6)
                    },${center - radius * Math.cos((Math.PI * 2) / 6)} Z`}
                  className="fill-accent/10"
                />
              </svg>
            </motion.div>

            <div className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent" />

            {currentlyExploring.map((t, i) => {
              const angle = (i / currentlyExploring.length) * Math.PI * 2 - Math.PI / 2
              const r = 55 + ((i % 3) * 20)
              const x = center + r * Math.cos(angle)
              const y = center + r * Math.sin(angle)
              return (
                <Reveal
                  key={t}
                  delay={i * 0.05}
                  className="absolute -translate-x-1/2 -translate-y-1/2 whitespace-nowrap rounded-full border border-border bg-card px-2.5 py-1 text-xs font-medium shadow-sm"
                  style={{ left: x, top: y }}
                >
                  {t}
                </Reveal>
              )
            })}
          </div>
        </div>

        {/* clean grid fallback — mobile */}
        <div className="mt-6 flex flex-wrap gap-2 sm:hidden">
          {currentlyExploring.map((t) => (
            <span key={t} className="rounded-full border border-border px-3 py-1.5 text-sm text-muted">{t}</span>
          ))}
        </div>
      </Container>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/* 8. FAQ                                                              */
/* ------------------------------------------------------------------ */

function Faq() {
  const [open, setOpen] = useState(0)
  const reduceMotion = useReducedMotion()

  return (
    <section className="py-16 border-t border-border">
      <Container>
        <SectionHeading label="FAQ" title="Common questions" />
        <div className="mt-10 divide-y divide-border border-t border-b border-border">
          {faqs.map(([q, a], i) => {
            const isOpen = open === i
            const panelId = `about-faq-panel-${i}`
            const buttonId = `about-faq-trigger-${i}`
            return (
              <div key={q}>
                <h3>
                  <button
                    id={buttonId}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    className="flex w-full items-center justify-between gap-4 py-5 text-left font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60 rounded-sm"
                  >
                    <span>{q}</span>
                    <motion.span
                      aria-hidden
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.25 }}
                      className="shrink-0 text-accent text-lg leading-none"
                    >
                      +
                    </motion.span>
                  </button>
                </h3>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={panelId}
                      role="region"
                      aria-labelledby={buttonId}
                      initial={reduceMotion ? false : { height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={reduceMotion ? {} : { height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <p className="pb-5 text-sm text-muted leading-relaxed max-w-2xl">{a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>
      </Container>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/* 9. Lessons learned                                                  */
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

/* ------------------------------------------------------------------ */
/* 10. Final CTA                                                       */
/* ------------------------------------------------------------------ */

function FinalCta() {
  return (
    <section className="relative overflow-hidden border-t border-border py-20">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.3] [background-image:linear-gradient(to_right,theme(colors.border)_1px,transparent_1px),linear-gradient(to_bottom,theme(colors.border)_1px,transparent_1px)] [background-size:40px_40px] [mask-image:radial-gradient(ellipse_60%_100%_at_50%_50%,black_30%,transparent_85%)]"
      />
      <Container>
        <Reveal className="mx-auto max-w-xl text-center">
          <p className="mono-label text-accent">Let&rsquo;s build</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
            Want to build something meaningful?
          </h2>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Button to="/work" variant="primary">View My Work</Button>
            <Button to="/contact" variant="secondary">Let&rsquo;s Talk</Button>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}