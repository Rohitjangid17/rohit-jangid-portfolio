import { NavItem } from '@/types'

export const navItems: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Tech Stack', path: '/tech-stack' },
  {
    label: 'Work',
    children: [
      { label: 'Experience', path: '/work/experience' },
      { label: 'Projects', path: '/work/projects' },
    ],
  },
  { label: 'Sketches', path: '/sketches' },
  { label: 'Blog', path: '/blog' },
  { label: 'Contact', path: '/contact' },
]
