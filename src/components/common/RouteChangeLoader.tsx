import { useEffect, useRef, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'

/**
 * RouteChangeLoader
 *
 * A premium, minimal top-loading bar for route transitions.
 * Gradient fill + soft glow at the leading edge, inspired by
 * Vercel / Linear / Stripe / Raycast-style progress bars.
 */

const SHOW_DURATION_MS = 420
const FADE_DURATION_S = 0.3

export default function RouteChangeLoader() {
  const { pathname } = useLocation()
  const [visible, setVisible] = useState(false)
  const [progress, setProgress] = useState(0)

  const isFirstRender = useRef(true)
  const timers = useRef<ReturnType<typeof setTimeout>[]>([])

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false
      return
    }

    timers.current.forEach(clearTimeout)
    timers.current = []

    setProgress(0)
    setVisible(true)

    const t1 = setTimeout(() => setProgress(0.35), 10)
    const t2 = setTimeout(() => setProgress(0.75), 120)
    const t3 = setTimeout(() => setProgress(1), SHOW_DURATION_MS * 0.75)
    const t4 = setTimeout(() => setVisible(false), SHOW_DURATION_MS)

    timers.current.push(t1, t2, t3, t4)

    return () => {
      timers.current.forEach(clearTimeout)
    }
  }, [pathname])

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[9999] h-[3px] w-full overflow-visible"
    >
      <AnimatePresence>
        {visible && (
          <motion.div
            key="route-loader-bar"
            className="relative h-full w-full origin-left"
            initial={{ scaleX: 0, opacity: 1 }}
            animate={{
              scaleX: progress,
              opacity: 1,
              transition: {
                scaleX: {
                  duration: progress === 1 ? 0.2 : 0.5,
                  ease: [0.22, 1, 0.36, 1], // smooth "expo-out" curve
                },
              },
            }}
            exit={{
              opacity: 0,
              transition: { duration: FADE_DURATION_S, ease: 'easeInOut' },
            }}
            style={{ transformOrigin: '0% 50%' }}
          >
            {/* Gradient fill */}
            <div className="h-full w-full bg-gradient-to-r from-accent/40 via-accent to-accent" />

            {/* Glowing leading edge */}
            <div
              className="absolute right-0 top-1/2 h-[10px] w-[60px] -translate-y-1/2 rounded-full bg-accent opacity-70 blur-[6px]"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}