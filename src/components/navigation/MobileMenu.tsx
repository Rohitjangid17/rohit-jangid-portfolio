import { motion } from 'framer-motion'
import { NavLink } from 'react-router-dom'
import { navItems } from '@/data/nav'

interface MobileMenuProps {
  onClose: () => void
}

export default function MobileMenu({
  onClose,
}: MobileMenuProps) {
  const flatNavItems = navItems.flatMap((item) =>
    item.children
      ? item.children
      : [
        {
          label: item.label,
          path: item.path!,
        },
      ]
  )

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: -16,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      exit={{
        opacity: 0,
        y: -16,
      }}
      transition={{
        duration: 0.25,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="fixed inset-x-0 h-full top-[70px] z-40 border-b border-border bg-background/95 px-5 pb-8 pt-4 shadow-lg backdrop-blur-xl md:hidden"
    >
      <nav className="mx-auto max-w-xl" aria-label="Mobile navigation" >
        {flatNavItems.map((item, index) => (
          <motion.div
            key={item.path}
            initial={{
              opacity: 0,
              y: 12,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.04 * index,
              duration: 0.25,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <NavLink to={item.path} onClick={onClose} className={({ isActive }) => `flex items-center justify-between border-b border-border py-4 text-base font-medium transition-colors ${isActive ? 'text-accent' : 'text-foreground hover:text-accent'}`}>
              {item.label}
            </NavLink>
          </motion.div>
        ))}
      </nav>
    </motion.div>
  )
}