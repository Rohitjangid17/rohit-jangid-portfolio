import { motion, useReducedMotion } from 'framer-motion'
import Container from '@/components/common/Container'
import Reveal from '@/components/common/Reveal'
import { blogPosts } from '@/data/blog'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { Link, useParams } from 'react-router-dom'
import Seo from '@/components/common/Seo'

// Extends the inferred post shape with an optional `content` field. If your
// data doesn't have one yet, the article body falls back to the summary —
// nothing here is invented.
type PostDetail = (typeof blogPosts)[number] & {
  content?: string
}

export default function BlogDetails() {
  const params = useParams<{ slug: string }>()
  const posts = blogPosts as PostDetail[]
  const index = posts.findIndex((p) => p.slug === params?.slug)
  const post = index >= 0 ? posts[index] : undefined

  if (!post) {
    return (
      <section className="py-24">
        <Container className="text-center">
          <p className="mono-label text-accent">Not found</p>
          <h1 className="mt-4 text-2xl font-semibold">This article doesn&rsquo;t exist.</h1>
          <p className="mt-3 text-muted">It may have been renamed or removed.</p>
          <div className="mt-8">
            <Link to="/blog" className="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:underline">
              <ArrowLeft size={15} />
              Back to Blog
            </Link>
          </div>
        </Container>
      </section>
    )
  }

  const prev = index > 0 ? posts[index - 1] : null
  const next = index < posts.length - 1 ? posts[index + 1] : null
  const related = posts.filter((p) => p.category === post.category && p.slug !== post.slug).slice(0, 3)

  return (
    <>
      <Seo
        title={`${post.title} | Rohit Jangid`}
        description={post.summary}
        canonical={`/blog/${post.slug}`}
      />
      <DetailHero post={post} />
      <ArticleBody post={post} />
      {related.length > 0 && <RelatedArticles posts={related} />}
      <PrevNextNav prev={prev} next={next} />
    </>
  )
}

/* ------------------------------------------------------------------ */
/* Hero                                                                */
/* ------------------------------------------------------------------ */

function DetailHero({ post }: { post: PostDetail }) {
  const reduceMotion = useReducedMotion()

  return (
    <section className="relative overflow-hidden border-b border-border">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.3] [background-image:linear-gradient(to_right,theme(colors.border)_1px,transparent_1px),linear-gradient(to_bottom,theme(colors.border)_1px,transparent_1px)] [background-size:44px_44px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,black_35%,transparent_85%)]"
      />
      <Container className="relative flex min-h-[64vh] flex-col justify-center py-20 sm:min-h-[70vh]">

        <div className="grid items-center gap-7 sm:gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <Link to="/blog" className="inline-flex items-center gap-1.5 mono-label text-muted hover:text-accent transition-colors">
              <ArrowLeft size={14} />
              Back to Blog
            </Link>

            <motion.p
              initial={reduceMotion ? false : { opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mono-label text-accent mt-3 sm:mt-6"
            >
              {post.category} · {post.readingTime} · {post.date}
            </motion.p>

            <motion.h1
              initial={reduceMotion ? false : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.08 }}
              className="mt-3 sm:mt-6 text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl lg:text-[3.4rem]"
            >
              {post.title}
            </motion.h1>

            <motion.p
              initial={reduceMotion ? false : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.16 }}
              className="mt-3 sm:mt-6 max-w-lg text-lg leading-relaxed text-muted"
            >
              {post.summary}
            </motion.p>
          </div>
          <div>
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.24 }}
              className="mt-10 max-w-md"
            >
              <TopicVisual category={post.category} large />
            </motion.div>
          </div>
        </div>

      </Container>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/* Topic visual — mirrors the one on the Blog listing page, kept local */
/* here so this file doesn't depend on a guessed import path.          */
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
/* Article body — lightweight renderer for post.content                */
/* ------------------------------------------------------------------ */

type Block = { type: 'heading' | 'code' | 'paragraph'; text: string }

function parseContent(content: string): Block[] {
  const lines = content.split('\n')
  const blocks: Block[] = []
  let buffer: string[] = []
  let inCode = false
  let codeBuffer: string[] = []

  const flushParagraph = () => {
    const text = buffer.join(' ').trim()
    if (text) blocks.push({ type: 'paragraph', text })
    buffer = []
  }

  for (const line of lines) {
    if (line.trim().startsWith('```')) {
      if (inCode) {
        blocks.push({ type: 'code', text: codeBuffer.join('\n') })
        codeBuffer = []
        inCode = false
      } else {
        flushParagraph()
        inCode = true
      }
      continue
    }
    if (inCode) {
      codeBuffer.push(line)
      continue
    }
    if (line.trim().startsWith('## ')) {
      flushParagraph()
      blocks.push({ type: 'heading', text: line.trim().replace(/^##\s+/, '') })
      continue
    }
    if (line.trim() === '') {
      flushParagraph()
      continue
    }
    buffer.push(line.trim())
  }
  flushParagraph()
  return blocks
}

function ArticleBody({ post }: { post: PostDetail }) {
  const blocks = post.content ? parseContent(post.content) : [{ type: 'paragraph' as const, text: post.summary }]

  return (
    <section className="py-12 sm:py-16">
      <Container>
        <Reveal className="mx-auto max-w-2xl space-y-3 sm:space-y-6">
          {blocks.map((block, i) => {
            if (block.type === 'heading') {
              return (
                <h2 key={i} className="text-xl font-semibold">
                  {block.text}
                </h2>
              )
            }
            if (block.type === 'code') {
              return (
                <pre key={i} className="overflow-x-auto rounded-xl border border-border bg-card p-4 font-mono text-xs leading-relaxed text-muted">
                  <code>{block.text}</code>
                </pre>
              )
            }
            return (
              <p key={i} className="text-base leading-relaxed text-muted">
                {block.text}
              </p>
            )
          })}
          {!post.content && (
            <p className="text-sm text-muted/70 border-t border-border pt-6">
              Full article content coming soon — this page currently shows the article summary.
            </p>
          )}
        </Reveal>
      </Container>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/* Related articles                                                    */
/* ------------------------------------------------------------------ */

function RelatedArticles({ posts }: { posts: PostDetail[] }) {
  return (
    <section className="py-12 sm:py-16 border-t border-border">
      <Container>
        <p className="mono-label text-accent mb-8">Related articles</p>
        <div className="grid gap-5 sm:grid-cols-3">
          {posts.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.06}>
              <Link
                to={`/blog/blog-details/${p.slug}`}
                className="group block h-full rounded-2xl border border-border bg-card p-5 transition-colors duration-300 hover:border-accent/60"
              >
                <TopicVisual category={p.category} />
                <p className="mono-label text-accent mt-4 mb-2">{p.readingTime}</p>
                <h3 className="text-sm font-semibold transition-colors group-hover:text-accent">{p.title}</h3>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/* Prev / next                                                         */
/* ------------------------------------------------------------------ */

function PrevNextNav({ prev, next }: { prev: PostDetail | null; next: PostDetail | null }) {
  if (!prev && !next) return null

  return (
    <section className="py-12 sm:py-16 border-t border-border">
      <Container>
        <div className="grid gap-4 sm:grid-cols-2">
          {prev ? (
            <Link
              to={`/blog/blog-details/${prev.slug}`}
              className="group rounded-2xl border border-border bg-card p-6 transition-colors duration-300 hover:border-accent/60"
            >
              <p className="inline-flex items-center gap-1.5 mono-label text-muted">
                <ArrowLeft size={13} />
                Previous
              </p>
              <p className="mt-2 font-medium transition-colors group-hover:text-accent">{prev.title}</p>
            </Link>
          ) : (
            <div />
          )}
          {next ? (
            <Link
              to={`/blog/blog-details/${next.slug}`}
              className="group rounded-2xl border border-border bg-card p-6 text-right transition-colors duration-300 hover:border-accent/60"
            >
              <p className="inline-flex items-center gap-1.5 mono-label text-muted justify-end">
                Next
                <ArrowRight size={13} />
              </p>
              <p className="mt-2 font-medium transition-colors group-hover:text-accent">{next.title}</p>
            </Link>
          ) : (
            <div />
          )}
        </div>
      </Container>
    </section>
  )
}