import { motion } from 'framer-motion'

export default function SectionHeading({
  label,
  title,
  subtitle,
}: {
  label?: string
  title?: string
  subtitle?: string
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="max-w-2xl"
    >
      {label && <p className="mono-label text-accent mb-3">{label}</p>}
      {title && <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">{title}</h2>}
      {subtitle && <p className="mt-3 text-muted leading-relaxed">{subtitle}</p>}
    </motion.div>
  )
}
