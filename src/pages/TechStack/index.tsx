import { useMemo, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import Container from '@/components/common/Container'
import SectionHeading from '@/components/common/SectionHeading'
import Reveal from '@/components/common/Reveal'
import { technologies, currentlyExploring } from '@/data/technologies'
import { Technology } from '@/types'
import Seo from '@/components/common/Seo'

const categories: Technology['category'][] = ['Language', 'Framework', 'Styling', 'State & Data', 'Testing', 'Tools', 'AI Toolkit']

const categoryNotes: Record<string, string> = {
  Language: 'The foundations everything else is built on.',
  Framework: 'What I use to turn ideas into shipped interfaces.',
  Styling: 'Systems for building consistent, responsive UI quickly.',
  'State & Data': 'How I manage client state and talk to backend services.',
  Testing: 'Frontend quality — used across Angular unit testing.',
  Tools: 'The daily toolkit for version control and API work.',
  'AI Toolkit': 'Used as productivity and engineering assistance — not a replacement for development knowledge.',
}

// Core stack shown in the ecosystem diagram. Names are matched against the
// existing `technologies` data (case-insensitive) so descriptions stay real.
const CORE_STACK = ['Angular', 'React.js', 'Next.js', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'Redux', 'RxJS']

export default function TechStack() {
  return (
    <>
      <Seo
        title="Tech Stack | Rohit Jangid"
        description="Explore the frontend technologies and tools Rohit Jangid uses, including Angular, React.js, Next.js, TypeScript, JavaScript, Tailwind CSS, Redux, and RxJS."
        canonical="/tech-stack"
      />
      <TechStackHero />
      <EcosystemDiagram />
      <CategorySections />
      <LearningRadar />
    </>
  )
}

/* ------------------------------------------------------------------ */
/* 1. Hero                                                             */
/* ------------------------------------------------------------------ */

function TechStackHero() {
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
              TECH STACK
            </motion.p>

            <motion.h1
              initial={reduceMotion ? false : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.08 }}
              className="mt-3 sm:mt-6 text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl lg:text-[3.4rem]"
            >
              The tools behind the interfaces.
            </motion.h1>

            <motion.p
              initial={reduceMotion ? false : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.16 }}
              className="mt-3 sm:mt-6 max-w-lg text-lg leading-relaxed text-muted"
            >
              A practical toolkit built around scalable frontend architecture,
              responsive UI and production-ready development.
            </motion.p>
          </div>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto w-full max-w-md"
          >
            <StackGraphic reduceMotion={!!reduceMotion} />
          </motion.div>
        </div>
      </Container>
    </section>
  )
}

function StackGraphic({ reduceMotion }: { reduceMotion: boolean }) {
  const nodes = [
    { x: 60, y: 60, label: 'UI' },
    { x: 250, y: 45, label: 'API' },
    { x: 300, y: 170, label: 'STATE' },
    { x: 110, y: 230, label: 'DOM' },
    { x: 180, y: 130, label: 'CORE' },
  ]
  const edges: [number, number][] = [[0, 4], [1, 4], [2, 4], [3, 4], [0, 3]]

  return (
    <div className="relative aspect-square w-full">
      <div className="absolute inset-8 rounded-2xl border border-border bg-card shadow-sm">
        <div className="flex items-center gap-1.5 border-b border-border px-4 py-3">
          <span className="h-2 w-2 rounded-full bg-muted/40" />
          <span className="h-2 w-2 rounded-full bg-muted/40" />
          <span className="h-2 w-2 rounded-full bg-muted/40" />
          <span className="ml-auto mono-label text-[10px] text-muted">stack.config.ts</span>
        </div>
        <div className="space-y-2 px-4 pt-4 font-mono text-[11px] leading-relaxed text-muted">
          <p><span className="text-accent">export const</span> stack = {'{'}</p>
          <p className="pl-4">ui: <span className="text-accent">[&apos;React&apos;, &apos;Angular&apos;, &apos;Next.js&apos;, &apos;React Native&apos;]</span>,</p>
          <p className="pl-4">lang: <span className="text-accent">[&apos;JavaScript&apos;, &apos;TypeScript&apos;]&apos;</span></p>
          <p>{'}'}</p>
        </div>
      </div>

      <svg viewBox="0 0 360 320" className="absolute inset-0 h-full w-full overflow-visible" aria-hidden>
        <g className="stroke-accent/40" strokeWidth="1.25" fill="none">
          {edges.map(([a, b], i) => (
            <motion.line
              key={i}
              x1={nodes[a].x}
              y1={nodes[a].y}
              x2={nodes[b].x}
              y2={nodes[b].y}
              viewport={{ once: true }}
              strokeDasharray="4 5"
              initial={reduceMotion ? false : { pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1, ease: 'easeInOut', delay: 0.25 + i * 0.08 }}
            />
          ))}
        </g>
        {nodes.map((n, i) => (
          <g key={i}>
            <motion.circle
              cx={n.x}
              cy={n.y}
              r={n.label === 'CORE' ? 7 : 4.5}
              className={n.label === 'CORE' ? 'fill-accent' : 'fill-card stroke-accent'}
              strokeWidth="1.5"
              initial={reduceMotion ? false : { opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.5 + i * 0.08 }}
            />
            <text
              x={n.x}
              y={n.y - 12}
              textAnchor="middle"
              className="fill-muted"
              style={{ fontSize: 8, fontFamily: 'monospace', letterSpacing: '0.05em' }}
            >
              {n.label}
            </text>
          </g>
        ))}
        {!reduceMotion && (
          <motion.circle
            cx={nodes[4].x}
            cy={nodes[4].y}
            r={7}
            className="fill-none stroke-accent/50"
            strokeWidth="1"
            animate={{ r: [7, 18, 7], opacity: [0.6, 0, 0.6] }}
            transition={{ duration: 2.6, repeat: Infinity, ease: 'easeOut' }}
          />
        )}
      </svg>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/* 2. Technology ecosystem                                             */
/* ------------------------------------------------------------------ */

function EcosystemDiagram() {
  const [active, setActive] = useState<number | null>(null)
  const reduceMotion = useReducedMotion()
  const center = 180
  const radius = 150

  const items = useMemo(
    () =>
      CORE_STACK.map((name) => {
        const match = technologies.find((t) => t.name.toLowerCase() === name.toLowerCase())
        return { name, description: match?.description ?? '' }
      }),
    []
  )

  return (
    <section className="py-12 sm:py-16 border-t border-border">
      <Container>
        <SectionHeading label="Overview" title="The technology ecosystem" />

        {/* diagram — sm and up */}
        {/* diagram — sm and up */}
        <div className="mt-8 hidden sm:block">
          <div className="mx-auto w-full max-w-[560px]">
            <div className="relative mx-auto aspect-square w-full">

              {/* SVG connection lines */}
              <svg
                viewBox="0 0 360 360"
                preserveAspectRatio="xMidYMid meet"
                className="pointer-events-none absolute inset-0 h-full w-full"
                aria-hidden
              >
                {items.map((item, i) => {
                  const angle =
                    (i / items.length) * Math.PI * 2 - Math.PI / 2

                  const x = center + radius * Math.cos(angle)
                  const y = center + radius * Math.sin(angle)
                  const isActive = active === i

                  return (
                    <motion.line
                      key={item.name}
                      x1={center}
                      y1={center}
                      x2={x}
                      y2={y}
                      strokeWidth={isActive ? 1.75 : 1}
                      className={
                        isActive
                          ? 'stroke-accent'
                          : 'stroke-border'
                      }
                      initial={
                        reduceMotion
                          ? false
                          : { pathLength: 0 }
                      }
                      whileInView={{ pathLength: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.8,
                        delay: i * 0.06,
                      }}
                    />
                  )
                })}
              </svg>

              {/* Center */}
              <div
                className="
          absolute left-1/2 top-1/2 z-10
          flex h-24 w-24
          -translate-x-1/2 -translate-y-1/2
          flex-col items-center justify-center
          rounded-full
          border border-accent/40
          bg-card
          text-center
          shadow-sm
        "
              >
                <p className="mono-label text-[9px] leading-tight text-accent">
                  FRONTEND
                </p>
                <p className="mono-label text-[9px] leading-tight text-accent">
                  ENGINEERING
                </p>
              </div>

              {/* Technology nodes */}
              {items.map((item, i) => {
                const angle =
                  (i / items.length) * Math.PI * 2 - Math.PI / 2

                const x = center + radius * Math.cos(angle)
                const y = center + radius * Math.sin(angle)
                const isActive = active === i

                return (
                  <button
                    key={item.name}
                    type="button"
                    onMouseEnter={() => setActive(i)}
                    onFocus={() => setActive(i)}
                    onMouseLeave={() => setActive(null)}
                    onBlur={() => setActive(null)}
                    className={`
              absolute z-20
              -translate-x-1/2
              -translate-y-1/2
              whitespace-nowrap
              rounded-full
              border
              px-3.5 py-2
              text-xs
              font-medium
              shadow-sm
              transition-all
              duration-200
              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-accent/60
              ${isActive
                        ? 'border-accent bg-accent/10 text-accent shadow-md'
                        : 'border-border bg-card text-foreground hover:border-accent/50'
                      }
            `}
                    style={{
                      left: `${(x / 360) * 100}%`,
                      top: `${(y / 360) * 100}%`,
                    }}
                  >
                    {item.name}
                  </button>
                )
              })}
            </div>

            {/* Description */}
            <div className="mx-auto mt-4 sm:mt-6 min-h-[48px] max-w-md px-4 text-center">
              <motion.p
                key={active ?? 'default'}
                initial={
                  reduceMotion
                    ? false
                    : { opacity: 0, y: 4 }
                }
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
                className="text-sm leading-relaxed text-muted"
              >
                {active !== null
                  ? items[active].description
                  : 'Hover a technology to see how it fits in.'}
              </motion.p>
            </div>
          </div>
        </div>

        {/* fallback — mobile */}
        <div className="mt-4 sm:mt-6 divide-y divide-border border-t border-border sm:hidden">
          {items.map((item) => (
            <div key={item.name} className="py-4">
              <p className="text-sm font-medium">
                {item.name}
              </p>

              {item.description && (
                <p className="mt-1 text-xs leading-relaxed text-muted">
                  {item.description}
                </p>
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/* 3. Category sections                                                */
/* ------------------------------------------------------------------ */

function CategoryGraphic({ category }: { category: Technology['category'] }) {
  const common = { viewBox: '0 0 120 80', className: 'h-full w-full', 'aria-hidden': true as const }

  switch (category) {
    case 'Language':
      return (
        <svg {...common} fill="none" stroke="currentColor" strokeWidth="1.4">
          <path d="M30 20 L14 40 L30 60" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M90 20 L106 40 L90 60" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M68 14 L52 66" strokeLinecap="round" />
        </svg>
      )
    case 'Framework':
      return (
        <svg {...common} fill="none" stroke="currentColor" strokeWidth="1.2">
          <rect x="14" y="12" width="70" height="46" rx="6" opacity="0.35" />
          <rect x="26" y="22" width="70" height="46" rx="6" opacity="0.6" />
          <rect x="38" y="32" width="70" height="46" rx="6" />
        </svg>
      )
    case 'Styling':
      return (
        <svg {...common} fill="none" stroke="currentColor" strokeWidth="1.2">
          <circle cx="34" cy="40" r="18" />
          <circle cx="62" cy="26" r="18" opacity="0.6" />
          <circle cx="62" cy="54" r="18" opacity="0.35" />
        </svg>
      )
    case 'State & Data':
      return (
        <svg {...common} fill="none" stroke="currentColor" strokeWidth="1.3">
          <circle cx="20" cy="40" r="6" />
          <circle cx="100" cy="18" r="6" />
          <circle cx="100" cy="62" r="6" />
          <path d="M26 40 L94 18M26 40 L94 62" strokeLinecap="round" strokeDasharray="3 5" />
        </svg>
      )
    case 'Testing':
      return (
        <svg {...common} fill="none" stroke="currentColor" strokeWidth="1.4">
          <rect x="16" y="14" width="88" height="52" rx="8" />
          <path d="M34 40 L52 56 L88 24" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    case 'Tools':
      return (
        <svg {...common} fill="none" stroke="currentColor" strokeWidth="1.3">
          <path d="M20 60 L48 32" strokeLinecap="round" />
          <path d="M40 20 a12 12 0 1 0 17 17 l-6-6-3-8-8-3Z" strokeLinejoin="round" />
          <path d="M64 46 L100 46 M64 58 L88 58" strokeLinecap="round" opacity="0.6" />
        </svg>
      )
    case 'AI Toolkit':
      return (
        <svg {...common} fill="none" stroke="currentColor" strokeWidth="1.2">
          <path d="M60 12 L66 30 L84 36 L66 42 L60 60 L54 42 L36 36 L54 30 Z" strokeLinejoin="round" />
          <circle cx="98" cy="18" r="3" />
          <circle cx="18" cy="60" r="3" />
        </svg>
      )
    default:
      return null
  }
}

function CategorySections() {
  return (
    <>
      {categories.map((cat, ci) => {
        const items = technologies.filter((t) => t.category === cat)
        return (
          <section key={cat} className={`py-12 sm:py-16 ${ci === 0 ? 'border-t border-border' : 'border-t border-border'}`}>
            <Container>
              <div className="grid gap-7 lg:grid-cols-[220px_1fr] lg:gap-14">
                <Reveal className="flex items-start gap-4 lg:flex-col lg:items-stretch">
                  <div className="flex-1">
                    <p className="mono-label text-[11px] text-muted">0{ci + 1}</p>
                    <h3 className="mt-2 text-xl font-medium">{cat}</h3>
                    <p className="mt-2 text-sm text-muted leading-relaxed">{categoryNotes[cat]}</p>
                  </div>
                  <div className="h-16 w-16 shrink-0 text-accent/50 lg:mt-6 lg:h-24 lg:w-24">
                    <CategoryGraphic category={cat} />
                  </div>
                </Reveal>

                <div className="divide-y divide-border border-t border-border">
                  {items.map((t, i) => (
                    <Reveal
                      key={t.name}
                      delay={i * 0.05}
                      className="group flex flex-col gap-1 py-4 transition-colors duration-200 sm:flex-row sm:items-baseline sm:gap-6"
                    >
                      <p className="w-40 shrink-0 font-medium transition-colors group-hover:text-accent">{t.name}</p>
                      <p className="text-sm text-muted leading-relaxed">{t.description}</p>
                    </Reveal>
                  ))}
                </div>
              </div>
            </Container>
          </section>
        )
      })}
    </>
  )
}

/* ------------------------------------------------------------------ */
/* 4. Learning radar                                                   */
/* ------------------------------------------------------------------ */

function LearningRadar() {
  const reduceMotion = useReducedMotion()
  const radius = 110
  const center = 140

  return (
    <section className="py-12 sm:py-16 border-t border-border">
      <Container>
        <SectionHeading label="Growth" title="Learning radar" />

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
              transition={reduceMotion ? {} : { duration: 46, repeat: Infinity, ease: 'linear' }}
            >
              <svg viewBox="0 0 280 280" className="absolute inset-0 h-full w-full" aria-hidden>
                <path
                  d={`M${center},${center} L${center},${center - radius} A${radius},${radius} 0 0 1 ${center + radius * Math.sin((Math.PI * 2) / 6)
                    },${center - radius * Math.cos((Math.PI * 2) / 6)} Z`}
                  className="fill-accent/10"
                />
              </svg>
            </motion.div>

            <div className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border border-accent/40 bg-card text-center shadow-sm">
              <p className="mono-label text-[8px] leading-tight text-accent">CURRENTLY</p>
              <p className="mono-label text-[8px] leading-tight text-accent">EXPLORING</p>
            </div>

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

        <div className="mt-6 flex flex-wrap gap-2 sm:hidden">
          {currentlyExploring.map((t) => (
            <span key={t} className="rounded-full border border-border px-3 py-1.5 text-sm text-muted">{t}</span>
          ))}
        </div>
      </Container>
    </section>
  )
}