import { AnimatePresence, motion } from 'framer-motion'
import { X, Printer, Download } from 'lucide-react'
import { profile } from '@/data/profile'
import { experience } from '@/data/experience'
import { technologies } from '@/data/technologies'
import { projects } from '@/data/projects'

export default function ResumeModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-black/50 backdrop-blur-sm p-4 sm:p-8"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
        >
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.98 }}
            transition={{ duration: 0.25 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-3xl rounded-2xl border border-border bg-card p-8 sm:p-10 print:border-0 print:shadow-none"
          >
            <div className="no-print flex justify-end gap-2 mb-4">
              <button onClick={() => window.print()} aria-label="Print resume" className="grid h-9 w-9 place-items-center rounded-full border border-border hover:text-accent hover:border-accent">
                <Printer size={16} />
              </button>
              {/* TODO: point this at a real generated/downloadable PDF, e.g. /resume.pdf */}
              <a href="/resume.pdf" download aria-label="Download resume PDF" className="grid h-9 w-9 place-items-center rounded-full border border-border hover:text-accent hover:border-accent">
                <Download size={16} />
              </a>
              <button onClick={onClose} aria-label="Close resume" className="grid h-9 w-9 place-items-center rounded-full border border-border hover:text-accent hover:border-accent">
                <X size={16} />
              </button>
            </div>

            <header className="border-b border-border pb-6">
              <h1 className="text-2xl font-semibold">{profile.name}</h1>
              <p className="text-muted mt-1">{profile.title} · {profile.experience}</p>
              <div className="mt-3 flex flex-wrap gap-2 text-xs">
                <span className="rounded-full border border-border px-3 py-1">{profile.coreStack.join(' • ')}</span>
                <span className="rounded-full border border-success/30 bg-success/10 text-success px-3 py-1">Open to Opportunities</span>
              </div>
              <p className="mt-3 text-sm text-muted">{profile.location} · {profile.joining}</p>
            </header>

            <section className="py-6 border-b border-border">
              <h2 className="mono-label text-muted mb-3">Profile Summary</h2>
              <p className="text-sm leading-relaxed text-foreground">
                Frontend Engineer with {profile.experience.toLowerCase()} of experience building production-ready,
                scalable web applications with Angular, React.js and Next.js. Comfortable owning features end-to-end,
                from component architecture through API integration.
              </p>
            </section>

            <section className="py-6 border-b border-border">
              <h2 className="mono-label text-muted mb-3">Technical Skills</h2>
              <p className="text-sm leading-relaxed text-foreground">
                {technologies.map((t) => t.name).join(' · ')}
              </p>
            </section>

            <section className="py-6 border-b border-border">
              <h2 className="mono-label text-muted mb-3">Experience</h2>
              <div className="space-y-4">
                {experience.map((e) => (
                  <div key={e.id}>
                    <p className="text-sm font-medium">{e.role} — {e.company}</p>
                    <p className="text-xs text-muted">{e.period} · {e.location}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="py-6">
              <h2 className="mono-label text-muted mb-3">Projects</h2>
              <div className="space-y-1">
                {projects.slice(0, 4).map((p) => (
                  <p key={p.slug} className="text-sm">{p.name}</p>
                ))}
              </div>
            </section>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
