import { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown, Download } from 'lucide-react'

import Container from '@/components/common/Container'
import ThemeToggle from './ThemeToggle'
import MobileMenu from './MobileMenu'
import Button from '@/components/common/Button'
import { navItems } from '@/data/nav'

const Header = () => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  const location = useLocation()

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24)
    }

    onScroll()

    window.addEventListener('scroll', onScroll, {
      passive: true,
    })

    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname])

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50">
        <Container>
          <motion.div
            animate={{
              marginTop: scrolled ? 12 : 0,
              paddingTop: scrolled ? 10 : 18,
              paddingBottom: scrolled ? 10 : 18,
              paddingLeft: scrolled ? 16 : 0,
              paddingRight: scrolled ? 16 : 0,
              borderRadius: scrolled ? 999 : 0,
            }}
            transition={{
              duration: 0.5,
              ease: [0.22, 1, 0.36, 1],
            }}
            className={`mx-auto flex w-full max-w-[1440px] items-center justify-between gap-4 border ${
              scrolled
                ? 'border-border bg-background/75 backdrop-blur-xl shadow-sm'
                : 'border-transparent bg-transparent'
            }`}
          >
            {/* Logo */}
            <NavLink
              to="/"
              className="shrink-0 text-base font-semibold tracking-tight transition-opacity hover:opacity-70 sm:text-lg"
              aria-label="Rohit Jangid Home"
            >
              Rohit Jangid
            </NavLink>

            {/* Desktop Navigation */}
            <nav
              className="hidden items-center gap-1 md:flex"
              aria-label="Main navigation"
            >
              {navItems.map((item) =>
                item.children ? (
                  <div
                    key={item.label}
                    className="group relative"
                  >
                    <button
                      type="button"
                      className="flex items-center gap-1 rounded-full px-3 py-2 text-sm font-medium text-muted transition-colors hover:bg-card/60 hover:text-foreground"
                    >
                      {item.label}

                      <ChevronDown
                        size={14}
                        strokeWidth={1.8}
                        className="transition-transform duration-200 group-hover:rotate-180"
                      />
                    </button>

                    {/* Work Dropdown */}
                    <div className="invisible absolute left-1/2 top-full mt-2 w-48 -translate-x-1/2 translate-y-1 opacity-0 transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                      <div className="rounded-2xl border border-border bg-card/95 p-1.5 shadow-xl backdrop-blur-xl">
                        {item.children.map((child) => (
                          <NavLink
                            key={child.path}
                            to={child.path}
                            className={({ isActive }) =>
                              `block rounded-xl px-3.5 py-2.5 text-sm transition-colors ${
                                isActive
                                  ? 'bg-accent/10 text-accent'
                                  : 'text-muted hover:bg-background/70 hover:text-foreground'
                              }`
                            }
                          >
                            {child.label}
                          </NavLink>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <NavLink
                    key={item.path}
                    to={item.path!}
                    className={({ isActive }) =>
                      `rounded-full px-3 py-2 text-sm font-medium transition-colors ${
                        isActive
                          ? 'bg-card text-foreground'
                          : 'text-muted hover:bg-card/60 hover:text-foreground'
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                )
              )}
            </nav>

            {/* Header Actions */}
            <div className="flex shrink-0 items-center gap-2 sm:gap-3">
              {/* Theme Toggle - Always Visible */}
              <ThemeToggle />

              {/* Desktop Resume */}
              <a
                href="/Rohit_Jangid_SDE_Resume.pdf"
                download="Rohit_Jangid_SDE_Resume.pdf"
                className="hidden md:inline-flex"
                aria-label="Download Resume"
              >
                <Button
                  variant="secondary"
                  className="group inline-flex items-center gap-2"
                >
                  Resume

                  <Download
                    size={15}
                    strokeWidth={1.8}
                    className="transition-transform duration-200 group-hover:translate-y-0.5"
                  />
                </Button>
              </a>

              {/* Mobile Resume Download */}
              <a
                href="/Rohit_Jangid_SDE_Resume.pdf"
                download="Rohit_Jangid_SDE_Resume.pdf"
                aria-label="Download Resume"
                title="Download Resume"
                className="grid h-9 w-9 place-items-center rounded-full border border-border text-foreground transition-all duration-200 hover:border-accent hover:text-accent sm:h-10 sm:w-10 md:hidden"
              >
                <Download
                  size={16}
                  strokeWidth={1.8}
                />
              </a>

              {/* Mobile Menu Button */}
              <button
                type="button"
                onClick={() => setMobileOpen((open) => !open)}
                aria-label={
                  mobileOpen
                    ? 'Close navigation menu'
                    : 'Open navigation menu'
                }
                aria-expanded={mobileOpen}
                className={`grid h-9 w-9 place-items-center rounded-full border transition-all duration-200 sm:h-10 sm:w-10 md:hidden ${
                  mobileOpen
                    ? 'border-accent bg-accent/10 text-accent'
                    : 'border-border text-foreground hover:border-accent hover:text-accent'
                }`}
              >
                <AnimatePresence mode="wait" initial={false}>
                  {mobileOpen ? (
                    <motion.span
                      key="close"
                      initial={{
                        opacity: 0,
                        rotate: -90,
                        scale: 0.7,
                      }}
                      animate={{
                        opacity: 1,
                        rotate: 0,
                        scale: 1,
                      }}
                      exit={{
                        opacity: 0,
                        rotate: 90,
                        scale: 0.7,
                      }}
                      transition={{ duration: 0.15 }}
                    >
                      <X size={18} />
                    </motion.span>
                  ) : (
                    <motion.span
                      key="menu"
                      initial={{
                        opacity: 0,
                        rotate: 90,
                        scale: 0.7,
                      }}
                      animate={{
                        opacity: 1,
                        rotate: 0,
                        scale: 1,
                      }}
                      exit={{
                        opacity: 0,
                        rotate: -90,
                        scale: 0.7,
                      }}
                      transition={{ duration: 0.15 }}
                    >
                      <Menu size={18} />
                    </motion.span>
                  )}
                </AnimatePresence>
              </button>
            </div>
          </motion.div>
        </Container>
      </header>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {mobileOpen && (
          <MobileMenu
            onClose={() => setMobileOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  )
}

export default Header