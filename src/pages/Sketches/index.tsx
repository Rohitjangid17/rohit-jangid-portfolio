import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import Container from '@/components/common/Container'
import Reveal from '@/components/common/Reveal'
import Seo from '@/components/common/Seo'

// TODO: replace with real sketch filenames placed in src/assets/sketches/
const sketches = Array.from(
  { length: 8 },
  (_, i) => `/sketch_${i + 1}.jpeg`
)

function CloseIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M6 6L18 18M18 6L6 18" strokeLinecap="round" />
    </svg>
  )
}

function ChevronLeftIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M15 6l-6 6 6 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function ChevronRightIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function titleFromSrc(src: string) {
  const file = src.split('/').pop() ?? src
  const name = file.replace(/\.[a-zA-Z0-9]+$/, '')
  const spaced = name.replace(/[-_]+/g, ' ').trim()
  if (!spaced) return 'Untitled'
  return spaced.replace(/\b\w/g, (c) => c.toUpperCase())
}

export default function Sketches() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const items = sketches.map((src, i) => ({ src, title: titleFromSrc(src), index: i }))
  const featured = items[0]
  const rest = items.slice(1)

  return (
    <>
      <Seo
        title="Pencil Sketches | Rohit Jangid"
        description="Explore pencil sketches and artwork by Rohit Jangid, featuring a collection of creative hand-drawn artwork and personal sketches."
        canonical="/sketches"
      />
      <SketchesHero />

      <section className="py-12 sm:py-16 border-t border-border">
        <Container>
          {items.length === 0 ? (
            <EmptyState />
          ) : (
            <div>
              {featured && (
                <Reveal className="mb-4 sm:mb-6">
                  <SketchTile item={featured} onOpen={() => setActiveIndex(0)} large />
                </Reveal>
              )}
              {rest.length > 0 && (
                <div className="columns-2 gap-4 sm:columns-3 [column-fill:balance]">
                  {rest.map((item) => (
                    <Reveal key={item.src} delay={item.index * 0.04} className="mb-4 break-inside-avoid">
                      <SketchTile item={item} onOpen={() => setActiveIndex(item.index)} />
                    </Reveal>
                  ))}
                </div>
              )}
            </div>
          )}
        </Container>
      </section>

      <Lightbox
        items={items}
        activeIndex={activeIndex}
        onClose={() => setActiveIndex(null)}
        onNavigate={setActiveIndex}
      />
    </>
  )
}

/* ------------------------------------------------------------------ */
/* Hero                                                                */
/* ------------------------------------------------------------------ */

function SketchesHero() {
  const reduceMotion = useReducedMotion()

  return (
    <section className="relative overflow-hidden border-b border-border">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.3] [background-image:linear-gradient(to_right,theme(colors.border)_1px,transparent_1px),linear-gradient(to_bottom,theme(colors.border)_1px,transparent_1px)] [background-size:32px_32px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,black_35%,transparent_85%)]"
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
              SKETCHES
            </motion.p>

            <motion.h1
              initial={reduceMotion ? false : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.08 }}
              className="mt-3 sm:mt-6 text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl lg:text-[3.4rem]"
            >
              Where code meets creativity.
            </motion.h1>

            <motion.p
              initial={reduceMotion ? false : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.16 }}
              className="mt-3 sm:mt-6 max-w-lg text-lg leading-relaxed text-muted"
            >
              A collection of pencil sketches and visual experiments created
              outside the editor.
            </motion.p>
          </div>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto w-full max-w-md"
          >
            <GraphiteGraphic reduceMotion={!!reduceMotion} />
          </motion.div>
        </div>
      </Container>
    </section>
  )
}

function GraphiteGraphic({ reduceMotion }: { reduceMotion: boolean }) {
  return (
    <div className="relative aspect-square w-full">
      <div className="absolute inset-6 rounded-2xl border border-border bg-card/60 [background-image:linear-gradient(theme(colors.border)_1px,transparent_1px),linear-gradient(to_right,theme(colors.border)_1px,transparent_1px)] [background-size:14px_14px] opacity-90" />
      <div className="absolute inset-6 rounded-2xl border border-border" />

      <svg viewBox="0 0 320 320" className="absolute inset-6 h-[calc(100%-3rem)] w-[calc(100%-3rem)]" aria-hidden>
        <motion.path
          d="M40 220 C 70 120, 140 90, 180 150 S 250 240, 280 100"
          fill="none"
          className="stroke-muted"
          strokeWidth="2"
          strokeLinecap="round"
          initial={reduceMotion ? false : { pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.7 }}
          transition={{ duration: 1.8, delay: 0.3, ease: 'easeInOut' }}
        />
        <motion.path
          d="M60 250 C 110 200, 150 210, 170 180"
          fill="none"
          className="stroke-accent"
          strokeWidth="2"
          strokeLinecap="round"
          initial={reduceMotion ? false : { pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.9 }}
          transition={{ duration: 1.4, delay: 0.9, ease: 'easeInOut' }}
        />
        <motion.g
          initial={reduceMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 1.3 }}
        >
          <rect x="150" y="165" width="10" height="10" transform="rotate(45 155 170)" className="fill-accent" />
        </motion.g>
      </svg>

      <div className="absolute -bottom-3 left-4 rounded-full border border-border bg-card px-3 py-1.5 mono-label text-[10px] text-muted shadow-sm">
        graphite &middot; ink &middot; digital
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/* Gallery tile                                                        */
/* ------------------------------------------------------------------ */

function SketchTile({
  item,
  onOpen,
  large = false,
}: {
  item: { src: string; title: string; index: number }
  onOpen: () => void
  large?: boolean
}) {
  return (
    <button
      type="button"
      onClick={onOpen}
      className={`group relative block w-full overflow-hidden rounded-xl border border-border bg-card text-left transition-colors duration-300 hover:border-accent/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60 ${large ? 'aspect-[16/9]' : ''
        }`}
    >
      <img
        src={item.src}
        alt={`Pencil sketch by Rohit Jangid - ${item.title}`}
        loading="lazy"
        className="w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 translate-y-2 p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
        <p className="mono-label text-[10px] text-white/70">{String(item.index + 1).padStart(2, '0')}</p>
        <p className="text-sm font-medium text-white">{item.title}</p>
      </div>
    </button>
  )
}

/* ------------------------------------------------------------------ */
/* Empty state                                                         */
/* ------------------------------------------------------------------ */

function EmptyState() {
  const reduceMotion = useReducedMotion()

  return (
    <Reveal className="relative overflow-hidden rounded-2xl border border-dashed border-border py-20 text-center">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-40 [background-image:linear-gradient(theme(colors.border)_1px,transparent_1px),linear-gradient(to_right,theme(colors.border)_1px,transparent_1px)] [background-size:20px_20px]"
      />
      <svg viewBox="0 0 200 120" className="mx-auto h-24 w-40" aria-hidden>
        <motion.path
          d="M20 100 C 60 40, 110 60, 130 30"
          fill="none"
          className="stroke-muted"
          strokeWidth="2"
          strokeLinecap="round"
          initial={reduceMotion ? false : { pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={reduceMotion ? { duration: 0 } : { duration: 2.2, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
        />
        <motion.g
          initial={reduceMotion ? false : { opacity: 0.9 }}
          animate={reduceMotion ? {} : { x: [0, 4, 0], y: [0, -3, 0] }}
          transition={reduceMotion ? {} : { duration: 2.2, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
        >
          <rect x="124" y="22" width="12" height="12" transform="rotate(45 130 28)" className="fill-accent" />
        </motion.g>
      </svg>
      <p className="mt-6 text-lg font-medium">The gallery is waiting for the first stroke.</p>
      <p className="mt-2 text-sm text-muted">New sketches will appear here soon.</p>
    </Reveal>
  )
}

/* ------------------------------------------------------------------ */
/* Lightbox                                                             */
/* ------------------------------------------------------------------ */

function Lightbox({
  items,
  activeIndex,
  onClose,
  onNavigate,
}: {
  items: { src: string; title: string; index: number }[]
  activeIndex: number | null
  onClose: () => void
  onNavigate: (i: number) => void
}) {
  const closeButtonRef = useRef<HTMLButtonElement>(null)
  const isOpen = activeIndex !== null

  useEffect(() => {
    if (!isOpen) return
    const previouslyFocused = document.activeElement as HTMLElement | null
    closeButtonRef.current?.focus()
    document.body.style.overflow = 'hidden'

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight' && activeIndex !== null) {
        onNavigate((activeIndex + 1) % items.length)
      }
      if (e.key === 'ArrowLeft' && activeIndex !== null) {
        onNavigate((activeIndex - 1 + items.length) % items.length)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
      previouslyFocused?.focus()
    }
  }, [isOpen, activeIndex, items.length, onClose, onNavigate])

  const active = activeIndex !== null ? items[activeIndex] : null

  return (
    <AnimatePresence>
      {isOpen && active && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label={`${active.title} — sketch viewer`}
          className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 backdrop-blur-sm p-4 sm:p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
        >
          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            aria-label="Close viewer"
            className="absolute right-4 top-4 sm:right-8 sm:top-8 flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60"
          >
            <CloseIcon />
          </button>

          <p className="absolute left-4 top-4 sm:left-8 sm:top-8 mono-label text-xs text-muted">
            {String(activeIndex! + 1).padStart(2, '0')} / {String(items.length).padStart(2, '0')}
          </p>

          {items.length > 1 && (
            <>
              <button
                type="button"
                aria-label="Previous sketch"
                onClick={(e) => {
                  e.stopPropagation()
                  onNavigate((activeIndex! - 1 + items.length) % items.length)
                }}
                className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60"
              >
                <ChevronLeftIcon />
              </button>
              <button
                type="button"
                aria-label="Next sketch"
                onClick={(e) => {
                  e.stopPropagation()
                  onNavigate((activeIndex! + 1) % items.length)
                }}
                className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60"
              >
                <ChevronRightIcon />
              </button>
            </>
          )}

          <motion.figure
            key={active.src}
            className="max-h-full max-w-3xl"
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          >
            <img
              src={active.src}
              alt={active.title}
              className="max-h-[75vh] w-auto rounded-lg border border-border object-contain"
            />
            <figcaption className="mt-4 text-center text-sm text-muted">{active.title}</figcaption>
          </motion.figure>
        </motion.div>
      )}
    </AnimatePresence>
  )
}