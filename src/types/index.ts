export interface NavItem {
  label: string
  path?: string
  children?: { label: string; path: string }[]
}

export interface Technology {
  name: string
  category: 'Language' | 'Framework' | 'Library' |  'Styling' | 'State & Data' | 'Testing' | 'Tools' | 'AI Toolkit'
  description: string
}

export interface Responsibility {
  group: string
  items: string[]
}

export interface ExperienceEntry {
  id: string
  company: string
  role: string
  period: string
  location: string
  employmentType: string
  summary: string
  responsibilities: Responsibility[]
  technologies: string[]
  projects?: string[]
}

export interface Project {
  slug: string
  name: string
  category:   | 'Enterprise' | 'Angular' | 'React.js' | 'Next.js' | 'React Native'
  description: string
  role: string
  technologies: string[]
  status: 'Production' | 'Completed' | 'In Progress'
  featured?: boolean
  overview?: string
  links?: { label: string; url: string }[]
  challenges: string[]
  solution: string[]
  keyFeatures: string[]
  results: string[]
}

export interface BlogPost {
  slug: string
  title: string
  category: string
  date: string
  readingTime: string
  summary: string,
  content: string
}
