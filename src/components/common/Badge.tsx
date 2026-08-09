import { ReactNode } from 'react'

export default function Badge({ children, tone = 'default' }: { children: ReactNode; tone?: 'default' | 'success' }) {
  const toneClasses =
    tone === 'success'
      ? 'border-success/30 text-success bg-success/10'
      : 'border-border text-muted bg-card'
  return (
    <span className={`mono-label inline-flex items-center gap-1.5 rounded-full border px-3 py-1 ${toneClasses}`}>
      {children}
    </span>
  )
}
