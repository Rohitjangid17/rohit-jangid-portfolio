import Container from '@/components/common/Container'
import Button from '@/components/common/Button'
import { motion } from 'framer-motion'

export default function NotFound() {
  return (
    <Container className="py-32 text-center">
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        className="mono-label text-accent"
      >
        404
      </motion.p>
      <motion.h1
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="mt-4 text-3xl sm:text-4xl font-semibold tracking-tight"
      >
        Looks like this route doesn't exist in production.
      </motion.h1>
      <div className="mt-8">
        <Button to="/">Back Home</Button>
      </div>
    </Container>
  )
}
