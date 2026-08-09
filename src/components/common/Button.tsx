import { ReactNode } from 'react'
import { Link } from 'react-router-dom'

interface ButtonProps {
  children: ReactNode
  to?: string
  href?: string
  onClick?: () => void
  variant?: 'primary' | 'secondary' | 'ghost'
  className?: string
}

export default function Button({ children, to, href, onClick, variant = 'primary', className = '' }: ButtonProps) {
  const base =
    'inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent'
  const variants: Record<string, string> = {
    primary: 'bg-accent text-accent-foreground hover:opacity-90 active:scale-[0.98]',
    secondary: 'border border-border text-foreground hover:border-accent hover:text-accent',
    ghost: 'text-foreground hover:text-accent',
  }
  const cls = `${base} ${variants[variant]} ${className}`

  if (to) return <Link to={to} className={cls}>{children}</Link>
  if (href) return <a href={href} target="_blank" rel="noreferrer" className={cls}>{children}</a>
  return <button onClick={onClick} className={cls}>{children}</button>
}
