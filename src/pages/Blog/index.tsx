import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import Container from '@/components/common/Container'
import Reveal from '@/components/common/Reveal'
import { blogPosts } from '@/data/blog'
import { Search, ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'

type Post = (typeof blogPosts)[number]

// Derived from the existing `category` field on each post — not new data.
const categories = ['All', ...Array.from(new Set(blogPosts.map((p) => p.category)))]

export default function Blog() {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('All')

  const filtered = blogPosts.filter((p) => {
    const matchesQuery = [p.title, p.category, p.summary].some((f) =>
      f.toLowerCase().includes(query.toLowerCase())
    )
    const matchesCategory = category === 'All' || p.category === category
    return matchesQuery && matchesCategory
  })
  const [featured, ...rest] = filtered

  return (
    <>
      <BlogHero />

      <section className="py-12 border-t border-border">
        <Container>
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <SearchBar query={query} setQuery={setQuery} />
            {categories.length > 2 && <CategoryFilter category={category} setCategory={setCategory} />}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={`${query}-${category}`}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
            >
              {filtered.length === 0 ? (
                <p className="mt-16 text-center text-muted">No articles found.</p>
              ) : (
                <>
                  {featured && <FeaturedPost post={featured} />}
                  {rest.length > 0 && (
                    <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                      {rest.map((p, i) => (
                        <PostCard key={p.slug} post={p} index={i} />
                      ))}
                    </div>
                  )}
                </>
              )}
            </motion.div>
          </AnimatePresence>
        </Container>
      </section>
    </>
  )
}

/* ------------------------------------------------------------------ */
/* Hero                                                                */
/* ------------------------------------------------------------------ */

function BlogHero() {
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
              BLOG / 07
            </motion.p>

            <motion.h1
              initial={reduceMotion ? false : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.08 }}
              className="mt-5 text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl lg:text-[3.4rem]"
            >
              Thoughts from the frontend.
            </motion.h1>

            <motion.p
              initial={reduceMotion ? false : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.16 }}
              className="mt-6 max-w-lg text-lg leading-relaxed text-muted"
            >
              Practical notes, engineering lessons and things I learn while
              building real products.
            </motion.p>
          </div>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto w-full max-w-md"
          >
            <EditorialGraphic reduceMotion={!!reduceMotion} />
          </motion.div>
        </div>
      </Container>
    </section>
  )
}

function EditorialGraphic({ reduceMotion }: { reduceMotion: boolean }) {
  return (
    <div className="relative aspect-square w-full">
      <div className="absolute inset-6 rounded-2xl border border-border bg-card/60 [transform:rotate(-2deg)]" />
      <div className="absolute inset-8 rounded-2xl border border-border bg-card shadow-sm">
        <div className="flex items-center gap-1.5 border-b border-border px-4 py-3">
          <span className="h-2 w-2 rounded-full bg-muted/40" />
          <span className="h-2 w-2 rounded-full bg-muted/40" />
          <span className="h-2 w-2 rounded-full bg-muted/40" />
          <span className="ml-auto mono-label text-[10px] text-muted">article.mdx</span>
        </div>
        <div className="space-y-3 px-5 pt-5">
          <span className="mono-label inline-block rounded-full border border-accent/40 bg-accent/10 px-2.5 py-1 text-[10px] text-accent">
            Frontend
          </span>
          {[100, 90, 95, 60].map((w, i) => (
            <motion.div
              key={i}
              className="h-2.5 rounded bg-border/70"
              style={{ width: `${w}%` }}
              initial={reduceMotion ? false : { scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.1, ease: 'easeOut' }}
            />
          ))}
          <div className="!mt-4 rounded-lg border border-border bg-background/50 p-3 font-mono text-[10px] leading-relaxed text-muted">
            <span className="text-accent">function</span> render() {'{'}
            <br />
            &nbsp;&nbsp;return ui
            <br />
            {'}'}
          </div>
        </div>
      </div>

      <svg viewBox="0 0 360 320" className="absolute inset-0 h-full w-full overflow-visible" aria-hidden>
        <motion.path
          d="M40,260 L110,180 L210,200 L300,90"
          fill="none"
          className="stroke-accent/40"
          strokeWidth="1.25"
          strokeDasharray="4 5"
          initial={reduceMotion ? false : { pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.3, delay: 0.5, ease: 'easeInOut' }}
        />
        {[
          [40, 260],
          [110, 180],
          [210, 200],
          [300, 90],
        ].map(([x, y], i) => (
          <motion.circle
            key={i}
            cx={x}
            cy={y}
            r={4}
            className="fill-card stroke-accent"
            strokeWidth="1.5"
            initial={reduceMotion ? false : { opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.7 + i * 0.08 }}
          />
        ))}
      </svg>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/* Search + category filter                                            */
/* ------------------------------------------------------------------ */

function SearchBar({ query, setQuery }: { query: string; setQuery: (v: string) => void }) {
  const inputRef = useRef<HTMLInputElement>(null)
  const [focused, setFocused] = useState(false)

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      const target = e.target as HTMLElement
      const isTyping = target.tagName === 'INPUT' || target.tagName === 'TEXTAREA'
      if (e.key === '/' && !isTyping) {
        e.preventDefault()
        inputRef.current?.focus()
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  return (
    <div className="relative w-full max-w-sm">
      <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted" />
      <input
        ref={inputRef}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        placeholder="Search articles..."
        className="w-full rounded-full border border-border bg-card py-2.5 pl-10 pr-12 text-sm outline-none transition-colors focus:border-accent"
      />
      {!query && (
        <kbd className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 rounded border border-border px-1.5 py-0.5 mono-label text-[10px] text-muted">
          /
        </kbd>
      )}
      <motion.span
        aria-hidden
        className="pointer-events-none absolute inset-x-4 -bottom-px h-px origin-left bg-accent"
        initial={false}
        animate={{ scaleX: focused ? 1 : 0, opacity: focused ? 1 : 0 }}
        transition={{ duration: 0.25, ease: 'easeOut' }}
      />
    </div>
  )
}

function CategoryFilter({ category, setCategory }: { category: string; setCategory: (c: string) => void }) {
  return (
    <div className="flex flex-wrap gap-2 rounded-full border border-border bg-card p-1.5">
      {categories.map((c) => {
        const isActive = category === c
        return (
          <button
            key={c}
            onClick={() => setCategory(c)}
            className={`relative rounded-full px-3.5 py-1.5 text-xs font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60 ${
              isActive ? 'text-accent' : 'text-muted hover:text-foreground'
            }`}
          >
            {isActive && (
              <motion.span
                layoutId="blog-category-pill"
                className="absolute inset-0 -z-10 rounded-full border border-accent/40 bg-accent/10"
                transition={{ type: 'spring', stiffness: 380, damping: 32 }}
              />
            )}
            {c}
          </button>
        )
      })}
    </div>
  )
}

/* ------------------------------------------------------------------ */
/* Topic visual — used on both the featured post and grid cards        */
/* ------------------------------------------------------------------ */

type Topic = 'angular' | 'react' | 'javascript' | 'architecture' | 'generic'

function topicFor(category: string): Topic {
  const c = category.toLowerCase()
  if (c.includes('angular')) return 'angular'
  if (c.includes('react')) return 'react'
  if (c.includes('javascript') || c.includes('typescript') || c === 'js') return 'javascript'
  if (c.includes('architecture') || c.includes('system')) return 'architecture'
  return 'generic'
}

function TopicVisual({ category, large = false }: { category: string; large?: boolean }) {
  const topic = topicFor(category)
  const height = large ? 'h-48 sm:h-56' : 'h-32'

  return (
    <div className={`relative flex w-full items-center justify-center overflow-hidden rounded-xl border border-border bg-background/40 ${height}`}>
      {topic === 'angular' && (
        <svg viewBox="0 0 160 100" className="h-2/3 w-2/3" fill="none" stroke="currentColor" strokeWidth="1.3">
          <rect x="60" y="10" width="40" height="20" rx="4" className="text-accent" />
          <rect x="20" y="60" width="40" height="20" rx="4" className="text-muted" />
          <rect x="100" y="60" width="40" height="20" rx="4" className="text-muted" />
          <path d="M75 30 L45 60 M85 30 L115 60" strokeLinecap="round" className="text-border" />
        </svg>
      )}
      {topic === 'react' && (
        <svg viewBox="0 0 160 100" className="h-2/3 w-2/3" fill="none" stroke="currentColor" strokeWidth="1.3">
          <circle cx="80" cy="50" r="6" className="text-accent" fill="currentColor" stroke="none" />
          <ellipse cx="80" cy="50" rx="55" ry="20" className="text-muted" />
          <ellipse cx="80" cy="50" rx="55" ry="20" className="text-muted" transform="rotate(60 80 50)" />
          <ellipse cx="80" cy="50" rx="55" ry="20" className="text-muted" transform="rotate(120 80 50)" />
        </svg>
      )}
      {topic === 'javascript' && (
        <svg viewBox="0 0 160 100" className="h-2/3 w-2/3" fill="none" stroke="currentColor" strokeWidth="1.3">
          <path d="M45 20 L20 50 L45 80" strokeLinecap="round" strokeLinejoin="round" className="text-border" />
          <path d="M115 20 L140 50 L115 80" strokeLinecap="round" strokeLinejoin="round" className="text-border" />
          <path d="M92 18 L68 82" strokeLinecap="round" className="text-accent" />
        </svg>
      )}
      {topic === 'architecture' && (
        <svg viewBox="0 0 160 100" className="h-2/3 w-2/3" fill="none" stroke="currentColor" strokeWidth="1.3">
          <rect x="65" y="10" width="30" height="18" rx="3" className="text-accent" />
          <rect x="20" y="70" width="30" height="18" rx="3" className="text-muted" />
          <rect x="65" y="70" width="30" height="18" rx="3" className="text-muted" />
          <rect x="110" y="70" width="30" height="18" rx="3" className="text-muted" />
          <path d="M80 28 L35 70 M80 28 L80 70 M80 28 L125 70" strokeDasharray="3 4" className="text-border" />
        </svg>
      )}
      {topic === 'generic' && (
        <svg viewBox="0 0 160 100" className="h-2/3 w-2/3" fill="none" stroke="currentColor" strokeWidth="1.3">
          <rect x="20" y="20" width="120" height="60" rx="6" className="text-border" />
          <path d="M35 40 h60 M35 52 h90 M35 64 h50" strokeLinecap="round" className="text-muted" />
          <circle cx="118" cy="40" r="3" className="text-accent" fill="currentColor" stroke="none" />
        </svg>
      )}
    </div>
  )
}

/* ------------------------------------------------------------------ */
/* Featured post + grid                                                */
/* ------------------------------------------------------------------ */

function FeaturedPost({ post }: { post: Post }) {
  return (
    <Reveal className="mt-10">
      <Link
        to={`/blog/${post.slug}`}
        className="group grid gap-0 overflow-hidden rounded-2xl border border-border bg-card transition-colors duration-300 hover:border-accent/60 lg:grid-cols-[1.1fr_1fr]"
      >
        <div className="border-b border-border p-6 sm:p-8 lg:border-b-0 lg:border-r lg:p-10">
          <div className="h-full transition-transform duration-500 ease-out group-hover:scale-[1.02]">
            <TopicVisual category={post.category} large />
          </div>
        </div>
        <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-10">
          <p className="mono-label text-accent mb-3">
            {post.category} · {post.readingTime}
          </p>
          <h2 className="text-2xl font-semibold transition-colors group-hover:text-accent sm:text-3xl">
            {post.title}
          </h2>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted">{post.summary}</p>
          <div className="mt-6 flex items-center justify-between">
            <p className="text-xs text-muted">{post.date}</p>
            <span className="inline-flex items-center gap-1.5 text-sm font-medium text-accent">
              Read Article
              <ArrowUpRight size={15} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
          </div>
        </div>
      </Link>
    </Reveal>
  )
}

function PostCard({ post, index }: { post: Post; index: number }) {
  const spanWide = index % 5 === 2

  return (
    <Reveal delay={index * 0.06} className={spanWide ? 'sm:col-span-2' : ''}>
      <Link
        to={`/blog/${post.slug}`}
        className="group block h-full overflow-hidden rounded-2xl border border-border bg-card transition-colors duration-300 hover:border-accent/60"
      >
        <div className={spanWide ? 'grid gap-0 sm:grid-cols-[1fr_1.2fr]' : ''}>
          <div className={`p-5 ${spanWide ? '' : 'pb-0'}`}>
            <div className="transition-transform duration-500 ease-out group-hover:scale-[1.03]">
              <TopicVisual category={post.category} />
            </div>
          </div>
          <div className="p-5 pt-4">
            <p className="mono-label text-accent mb-2">
              {post.category} · {post.readingTime}
            </p>
            <h3 className="text-lg font-semibold transition-colors group-hover:text-accent">{post.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">{post.summary}</p>
            <div className="mt-5 flex items-center justify-between">
              <p className="text-xs text-muted">{post.date}</p>
              <span className="inline-flex items-center gap-1 text-xs font-medium text-accent">
                Read
                <ArrowUpRight size={13} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </div>
          </div>
        </div>
      </Link>
    </Reveal>
  )
}