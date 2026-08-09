import { motion } from 'framer-motion'
import { NavLink } from 'react-router-dom'
import { navItems } from '@/data/nav'
import ThemeToggle from './ThemeToggle'
import Button from '@/components/common/Button'

export default function MobileMenu({ onClose, onResume }: { onClose: () => void; onResume: () => void }) {
  const flat = navItems.flatMap((item) => (item.children ? item.children : [{ label: item.label, path: item.path! }]))

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-30 bg-background md:hidden"
    >
      <div className="flex h-full flex-col justify-between px-6 pb-10 pt-28">
        <nav className="flex flex-col gap-1">
          {flat.map((item, i) => (
            <motion.div
              key={item.path}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 * i }}
            >
              <NavLink
                to={item.path}
                onClick={onClose}
                className={({ isActive }) =>
                  `block border-b border-border py-4 text-2xl font-medium ${isActive ? 'text-accent' : 'text-foreground'}`
                }
              >
                {item.label}
              </NavLink>
            </motion.div>
          ))}
        </nav>

        <div className="flex items-center justify-between">
          <span className="mono-label flex items-center gap-1.5 text-muted">
            <span className="h-1.5 w-1.5 rounded-full bg-success animate-pulse" />
            Available
          </span>
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <Button onClick={onResume}>Resume</Button>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
