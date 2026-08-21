import { ReactNode } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import Header from '@/components/navigation/Header'
import Footer from '@/components/Footer'
import Home from '@/pages/Home'
import About from '@/pages/About'
import TechStack from '@/pages/TechStack'
import Experience from '@/pages/Experience'
import Projects from '@/pages/Projects'
import Sketches from '@/pages/Sketches'
import Blog from '@/pages/Blog'
import Contact from '@/pages/Contact'
import NotFound from '@/pages/NotFound'
import ProjectDetails from './pages/ProjectDetails'
import BlogDetails from './pages/BlogDetails'
import RouteChangeLoader from './components/common/RouteChangeLoader'

function PageTransition({ children }: { children: ReactNode }) {
  return (
    <motion.main
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      viewport={{ once: true }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
    >
      {children}
    </motion.main>
  )
}

export default function App() {
  const location = useLocation()

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <RouteChangeLoader />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<PageTransition><Home /></PageTransition>} />
          <Route path="/about" element={<PageTransition><About /></PageTransition>} />
          <Route path="/tech-stack" element={<PageTransition><TechStack /></PageTransition>} />
          <Route path="/work/experience" element={<PageTransition><Experience /></PageTransition>} />
          <Route path="/work/projects" element={<PageTransition><Projects /></PageTransition>} />
          <Route path="/work/projects/:slug" element={<PageTransition><ProjectDetails /></PageTransition>} />
          <Route path="/sketches" element={<PageTransition><Sketches /></PageTransition>} />
          <Route path="/blog" element={<PageTransition><Blog /></PageTransition>} />
          <Route path="/blog/blog-details/:slug" element={<PageTransition><BlogDetails /></PageTransition>} />
          <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
          <Route path="*" element={<PageTransition><NotFound /></PageTransition>} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </div>
  )
}
