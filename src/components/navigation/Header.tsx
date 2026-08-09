import { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown } from 'lucide-react'
import Container from '@/components/common/Container'
import ThemeToggle from './ThemeToggle'
import MobileMenu from './MobileMenu'
import Button from '@/components/common/Button'
import { navItems } from '@/data/nav'
import ResumeModal from '@/components/resume/ResumeModal'

const Header = () => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [resumeOpen, setResumeOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => setMobileOpen(false), [location.pathname])

  return (
    <>
      <header className="sticky top-0 z-50 w-full">
        <Container>
          <motion.div
            animate={{
              marginTop: scrolled ? 12 : 0,
              padding: scrolled ? '10px 16px' : '20px 0px',
              borderRadius: scrolled ? 999 : 0,
            }}
            transition={{
              duration: 0.5,
              ease: [0.22, 1, 0.36, 1],
            }}
            className={`flex items-center justify-between border ${scrolled
                ? 'border-border bg-background/70 backdrop-blur-xl shadow-sm'
                : 'border-transparent bg-transparent'
              }`}
          >
            {/* Logo */}
            <NavLink
              to="/"
              className="font-semibold tracking-tight"
            >
              Rohit Jangid
            </NavLink>

            {/* Desktop Navigation */}
            <nav className="hidden items-center gap-1 md:flex">
              {navItems.map((item) =>
                item.children ? (
                  <div key={item.label} className="group relative">
                    <button className="flex items-center gap-1 rounded-full px-3 py-2 text-sm text-muted transition-colors hover:text-foreground">
                      {item.label}
                      <ChevronDown size={14} />
                    </button>

                    <div className="invisible absolute left-0 top-full w-44 rounded-xl border border-border bg-card p-1.5 opacity-0 shadow-lg transition-all duration-150 group-hover:visible group-hover:opacity-100">
                      {item.children.map((child) => (
                        <NavLink
                          key={child.path}
                          to={child.path}
                          className={({ isActive }) =>
                            `block rounded-lg px-3 py-2 text-sm transition-colors ${isActive
                              ? 'text-accent'
                              : 'text-muted hover:text-foreground'
                            }`
                          }
                        >
                          {child.label}
                        </NavLink>
                      ))}
                    </div>
                  </div>
                ) : (
                  <NavLink
                    key={item.path}
                    to={item.path!}
                    className={({ isActive }) =>
                      `rounded-full px-3 py-2 text-sm transition-colors ${isActive
                        ? 'text-accent'
                        : 'text-muted hover:text-foreground'
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                )
              )}
            </nav>

            {/* Desktop Actions */}
            <div className="hidden items-center gap-3 md:flex">
              <ThemeToggle />

              <Button
                variant="secondary"
                onClick={() => setResumeOpen(true)}
              >
                Resume
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="grid h-9 w-9 place-items-center rounded-full border border-border md:hidden"
              onClick={() => setMobileOpen((o) => !o)}
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </motion.div>
        </Container>
      </header>

      <AnimatePresence>
        {mobileOpen && <MobileMenu onClose={() => setMobileOpen(false)} onResume={() => { setMobileOpen(false); setResumeOpen(true) }} />}
      </AnimatePresence>

      <ResumeModal open={resumeOpen} onClose={() => setResumeOpen(false)} />
    </>
  )
}

export default Header;