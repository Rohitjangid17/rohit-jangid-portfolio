import { useRef, useState, FormEvent } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import Container from '@/components/common/Container'
import Reveal from '@/components/common/Reveal'
import Button from '@/components/common/Button'
import { profile } from '@/data/profile'
import { Copy, Check, Linkedin, Github, ArrowUpRight, Loader2, CheckCircle2, AlertCircle, } from 'lucide-react'
import Seo from '@/components/common/Seo'

type Status = 'idle' | 'loading' | 'success' | 'error'

type FieldErrors = {
  name?: boolean
  email?: boolean
  message?: boolean
}

export default function Contact() {
  const [status, setStatus] = useState<Status>('idle')
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({})
  const [copied, setCopied] = useState(false)

  const formSectionRef = useRef<HTMLDivElement>(null)
  const reduceMotion = useReducedMotion()

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const formEl = e.currentTarget
    const form = new FormData(formEl)

    const name = String(form.get('name') || '').trim()
    const email = String(form.get('email') || '').trim()
    const message = String(form.get('message') || '').trim()

    const emailValid = /^\S+@\S+\.\S+$/.test(email)

    const errors: FieldErrors = {
      name: !name,
      email: !email || !emailValid,
      message: !message,
    }

    setFieldErrors(errors)

    if (errors.name || errors.email || errors.message) {
      setStatus('error')
      return
    }

    setStatus('loading')

    try {
      const serviceId = "service_hwiv4sw"
      const templateId = "template_hrp8zci"
      const publicKey = "tZuVTFqF7TfCRBVrl"

      if (!serviceId || !templateId || !publicKey) {
        throw new Error('EmailJS environment variables are missing')
      }

      await emailjs.sendForm(
        serviceId,
        templateId,
        formEl,
        publicKey
      )

      setStatus('success')
      setFieldErrors({})
      formEl.reset()
    } catch (error) {
      console.error('EmailJS error:', error)
      setStatus('error')
    }
  }

  const copyEmail = async () => {
    await navigator.clipboard.writeText(profile.email)
    setCopied(true)

    setTimeout(() => {
      setCopied(false)
    }, 2000)
  }

  const scrollToForm = () => {
    formSectionRef.current?.scrollIntoView({
      behavior: reduceMotion ? 'auto' : 'smooth',
      block: 'start',
    })
  }

  return (
    <>
      <Seo
        title="Contact Rohit Jangid | Frontend Developer"
        description="Get in touch with Rohit Jangid for frontend development opportunities, React and Angular projects, collaborations, and professional inquiries."
        canonical="/contact"
      />
      <ContactHero onStart={scrollToForm} />

      <section
        ref={formSectionRef}
        className="py-12 sm:py-16 border-t border-border scroll-mt-20"
      >
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
            <ContactPanel
              copied={copied}
              onCopy={copyEmail}
            />

            <ContactForm
              status={status}
              fieldErrors={fieldErrors}
              onSubmit={handleSubmit}
              onReset={() => setStatus('idle')}
            />
          </div>
        </Container>
      </section>
    </>
  )
}

/* ------------------------------------------------------------------ */
/* Hero                                                               */
/* ------------------------------------------------------------------ */

function ContactHero({
  onStart,
}: {
  onStart: () => void
}) {
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
              CONTACT
            </motion.p>

            <motion.h1
              initial={reduceMotion ? false : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.08 }}
              className="mt-3 sm:mt-6 text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl lg:text-[3.4rem]"
            >
              Let&rsquo;s build something meaningful.
            </motion.h1>

            <motion.p
              initial={reduceMotion ? false : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.16 }}
              className="mt-3 sm:mt-6 max-w-lg text-lg leading-relaxed text-muted"
            >
              Have a product, idea or frontend challenge in mind?
              Let&rsquo;s talk.
            </motion.p>

            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.24 }}
              className="mt-4 sm:mt-8"
            >
              <Button onClick={onStart}>
                Start a Conversation
              </Button>
            </motion.div>
          </div>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.7,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative mx-auto w-full max-w-md"
          >
            <SignalGraphic reduceMotion={!!reduceMotion} />
          </motion.div>
        </div>
      </Container>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/* Signal graphic                                                     */
/* ------------------------------------------------------------------ */

function SignalGraphic({
  reduceMotion,
}: {
  reduceMotion: boolean
}) {
  const nodes = [
    { x: 55, y: 60 },
    { x: 260, y: 40 },
    { x: 300, y: 180 },
    { x: 100, y: 230 },
  ]

  return (
    <div className="relative aspect-square w-full">
      <div className="absolute inset-8 rounded-2xl border border-border bg-card shadow-sm">
        <div className="flex items-center gap-1.5 border-b border-border px-4 py-3">
          <span className="h-2 w-2 rounded-full bg-muted/40" />
          <span className="h-2 w-2 rounded-full bg-muted/40" />
          <span className="h-2 w-2 rounded-full bg-muted/40" />

          <span className="ml-auto mono-label text-[10px] text-muted">
            message.tsx
          </span>
        </div>

        <div className="space-y-3 px-4 pt-4">
          <div className="ml-auto max-w-[70%] rounded-lg rounded-br-sm border border-accent/40 bg-accent/10 px-3 py-2 text-xs text-accent">
            Have an idea in mind?
          </div>

          <div className="max-w-[70%] rounded-lg rounded-bl-sm border border-border bg-background/50 px-3 py-2 text-xs text-muted">
            Let&rsquo;s talk it through.

            <motion.span
              aria-hidden
              className="ml-0.5 inline-block h-3 w-[1.5px] translate-y-[2px] bg-muted align-middle"
              animate={
                reduceMotion
                  ? { opacity: 1 }
                  : { opacity: [1, 0, 1] }
              }
              transition={
                reduceMotion
                  ? {}
                  : {
                    duration: 1,
                    repeat: Infinity,
                    ease: [1, 0, 1, 0],
                  }
              }
            />
          </div>
        </div>
      </div>

      <svg
        viewBox="0 0 360 320"
        className="absolute inset-0 h-full w-full overflow-visible"
        aria-hidden
      >
        <g
          className="stroke-accent/40"
          strokeWidth="1.25"
          fill="none"
        >
          {nodes.map((n, i) => {
            const next = nodes[(i + 1) % nodes.length]

            return (
              <motion.line
                key={i}
                x1={n.x}
                y1={n.y}
                x2={next.x}
                y2={next.y}
                viewport={{ once: true }}
                strokeDasharray="4 5"
                initial={
                  reduceMotion
                    ? false
                    : {
                      pathLength: 0,
                      opacity: 0,
                    }
                }
                animate={{
                  pathLength: 1,
                  opacity: 1,
                }}
                transition={{
                  duration: 1,
                  ease: 'easeInOut',
                  delay: 0.25 + i * 0.08,
                }}
              />
            )
          })}
        </g>

        {nodes.map((n, i) => (
          <motion.circle
            key={i}
            cx={n.x}
            cy={n.y}
            r={4.5}
            className="fill-card stroke-accent"
            strokeWidth="1.5"
            initial={
              reduceMotion
                ? false
                : {
                  opacity: 0,
                  scale: 0,
                }
            }
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 0.4,
              delay: 0.5 + i * 0.08,
            }}
          />
        ))}
      </svg>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/* Contact panel                                                      */
/* ------------------------------------------------------------------ */

function ContactPanel({
  copied,
  onCopy,
}: {
  copied: boolean
  onCopy: () => void
}) {
  return (
    <Reveal className="space-y-5">
      <div className="rounded-2xl border border-border bg-card p-6">
        <p className="mono-label text-muted mb-2">
          Email
        </p>

        <div className="flex items-center justify-between gap-2">
          <p className="text-sm">
            {profile.email}
          </p>

          <button
            type="button"
            onClick={onCopy}
            className="flex h-8 w-8 items-center justify-center rounded-full text-muted transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60"
            aria-label="Copy email"
          >
            {copied ? (
              <Check size={16} />
            ) : (
              <Copy size={16} />
            )}
          </button>
        </div>
      </div>

      <div className="divide-y divide-border rounded-2xl border border-border bg-card">
        <a
          href={profile.linkedin}
          target="_blank"
          rel="noreferrer"
          className="group flex items-center justify-between gap-2 px-6 py-4 text-sm transition-colors hover:text-accent"
        >
          <span className="flex items-center gap-2.5">
            <Linkedin
              size={16}
              className="text-muted transition-colors group-hover:text-accent"
            />
            LinkedIn
          </span>

          <ArrowUpRight
            size={15}
            className="text-muted transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent"
          />
        </a>

        <a
          href={profile.github}
          target="_blank"
          rel="noreferrer"
          className="group flex items-center justify-between gap-2 px-6 py-4 text-sm transition-colors hover:text-accent"
        >
          <span className="flex items-center gap-2.5">
            <Github
              size={16}
              className="text-muted transition-colors group-hover:text-accent"
            />
            GitHub
          </span>

          <ArrowUpRight
            size={15}
            className="text-muted transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent"
          />
        </a>
      </div>

      <div className="rounded-2xl border border-success/30 bg-success/10 p-6">
        <p className="flex items-center gap-1.5 text-sm text-success">
          <span className="h-1.5 w-1.5 rounded-full bg-success animate-pulse" />
          Open to Work &middot; Immediate Joining
        </p>
      </div>

      <ProcessGraphic />
    </Reveal>
  )
}

/* ------------------------------------------------------------------ */
/* Process graphic                                                    */
/* ------------------------------------------------------------------ */

function ProcessGraphic() {
  const steps = ['Idea', 'Message', 'Build', 'Ship']
  const reduceMotion = useReducedMotion()

  return (
    <div className="rounded-2xl border border-border bg-card p-6">
      <p className="mono-label text-muted mb-5">
        How it starts
      </p>

      <div className="flex items-center justify-between">
        {steps.map((step, i) => (
          <div key={step} className="flex items-center">
            <div className="flex flex-col items-center gap-2">
              <motion.span
                className="flex h-8 w-8 items-center justify-center rounded-full border border-accent/40 bg-accent/5 text-accent"
                initial={
                  reduceMotion
                    ? false
                    : {
                      scale: 0,
                      opacity: 0,
                    }
                }
                whileInView={{
                  scale: 1,
                  opacity: 1,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.35,
                  delay: i * 0.1,
                }}
              >
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              </motion.span>

              <span className="mono-label text-[9px] text-muted">
                {step}
              </span>
            </div>

            {i < steps.length - 1 && (
              <motion.span
                className="mx-1.5 h-px w-6 origin-left bg-border sm:w-10"
                initial={
                  reduceMotion
                    ? false
                    : {
                      scaleX: 0,
                    }
                }
                whileInView={{
                  scaleX: 1,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: i * 0.1 + 0.15,
                }}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/* Form field                                                         */
/* ------------------------------------------------------------------ */

function FormField({
  id,
  label,
  type = 'text',
  required = false,
  maxLength,
  rows,
  hasError,
}: {
  id: string
  label: string
  type?: string
  required?: boolean
  maxLength?: number
  rows?: number
  hasError?: boolean
}) {
  const baseClasses =
    'mt-2 w-full rounded-lg border bg-background px-4 py-2.5 text-sm outline-none transition-colors focus:border-accent'

  const borderClass = hasError
    ? 'border-destructive'
    : 'border-border'

  return (
    <div>
      <label
        htmlFor={id}
        className="mono-label text-muted"
      >
        {label}
        {required && (
          <span className="text-accent"> *</span>
        )}
      </label>

      {rows ? (
        <textarea
          id={id}
          name={id}
          required={required}
          maxLength={maxLength}
          rows={rows}
          aria-invalid={hasError || undefined}
          className={`${baseClasses} ${borderClass}`}
        />
      ) : (
        <input
          id={id}
          name={id}
          type={type}
          required={required}
          maxLength={maxLength}
          aria-invalid={hasError || undefined}
          className={`${baseClasses} ${borderClass}`}
        />
      )}
    </div>
  )
}

/* ------------------------------------------------------------------ */
/* Contact form                                                       */
/* ------------------------------------------------------------------ */

function ContactForm({
  status,
  fieldErrors,
  onSubmit,
  onReset,
}: {
  status: Status
  fieldErrors: FieldErrors
  onSubmit: (e: FormEvent<HTMLFormElement>) => void
  onReset: () => void
}) {
  const reduceMotion = useReducedMotion()

  return (
    <Reveal delay={0.1}>
      <div className="relative overflow-hidden rounded-2xl border border-border bg-card p-6 sm:p-8">
        <AnimatePresence mode="wait">
          {status === 'success' ? (
            <motion.div
              key="success"
              initial={
                reduceMotion
                  ? false
                  : { opacity: 0 }
              }
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="flex flex-col items-center justify-center py-14 text-center"
            >
              <motion.div
                initial={
                  reduceMotion
                    ? false
                    : {
                      scale: 0.4,
                      opacity: 0,
                    }
                }
                animate={{
                  scale: 1,
                  opacity: 1,
                }}
                transition={{
                  type: 'spring',
                  stiffness: 260,
                  damping: 18,
                  delay: 0.05,
                }}
                className="flex h-14 w-14 items-center justify-center rounded-full border border-success/40 bg-success/10 text-success"
              >
                <CheckCircle2 size={26} />
              </motion.div>

              <p className="mt-6 text-xl font-medium">
                Message sent successfully.
              </p>

              <p className="mt-2 text-sm text-muted">
                Thanks for reaching out. I&rsquo;ll get back to you soon.
              </p>

              <button
                type="button"
                onClick={onReset}
                className="mt-6 rounded-sm text-sm font-medium text-accent hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60"
              >
                Send another message
              </button>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              onSubmit={onSubmit}
              noValidate
              initial={
                reduceMotion
                  ? false
                  : { opacity: 0 }
              }
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="space-y-5"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <FormField
                  id="name"
                  label="Name"
                  required
                  maxLength={100}
                  hasError={fieldErrors.name}
                />

                <FormField
                  id="email"
                  label="Email"
                  type="email"
                  required
                  maxLength={150}
                  hasError={fieldErrors.email}
                />
              </div>

              <FormField
                id="subject"
                label="Subject"
                maxLength={150}
              />

              <FormField
                id="message"
                label="Message"
                required
                maxLength={2000}
                rows={5}
                hasError={fieldErrors.message}
              />

              <Button
                className="w-full"
              >
                <span className="flex items-center justify-center gap-2">
                  {status === 'loading' ? (
                    <>
                      <Loader2
                        size={16}
                        className="animate-spin"
                      />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <ArrowUpRight size={16} />
                    </>
                  )}
                </span>
              </Button>

              <AnimatePresence>
                {status === 'error' && (
                  <motion.p
                    initial={
                      reduceMotion
                        ? false
                        : {
                          opacity: 0,
                          y: -4,
                        }
                    }
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex items-center gap-1.5 text-sm text-destructive"
                  >
                    <AlertCircle size={14} />

                    Something went wrong. Please check the form and try again.
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </Reveal>
  )
}
