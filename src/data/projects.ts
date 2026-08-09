import { Project } from '@/types'

export const projects: Project[] = [
  {
    slug: 'qgen',
    name: 'QGen — AI Question Generator',
    category: 'Next.js',
    description: 'An AI-assisted platform for generating structured questions, built with a focus on clean input flows and fast iteration.',
    role: 'Frontend Developer',
    technologies: ['Next.js', 'React.js', 'Tailwind CSS'],
    status: 'Production',
    featured: true,
  },
  {
    slug: 'backpacker-cms',
    name: 'Backpacker Tour Booking CMS',
    category: 'Frontend',
    description: 'A booking and content management interface for a tour operator, including multi-gateway payment integration.',
    role: 'Frontend Developer',
    technologies: ['Angular', 'React.js', 'Tailwind CSS', 'Stripe', 'Razorpay', 'PayPal'],
    status: 'Production',
    featured: true,
  },
  {
    slug: 'fleet-ops-suite',
    name: 'Fleet Operations Suite',
    category: 'Enterprise',
    description: 'Enterprise fleet-management modules covering trips, routes, safety reporting and device inventory. UI shown here is an abstract recreation — no confidential data or screenshots.',
    role: 'Frontend Developer',
    technologies: ['Angular', 'RxJS', 'PrimeNG', 'Angular Material'],
    status: 'Production',
    featured: true,
  },
  {
    slug: 'timelabs-hrms',
    name: 'Timelabs HRMS',
    category: 'Angular',
    description: 'HR management system covering attendance, workforce and console-style admin views.',
    role: 'Junior Frontend Developer',
    technologies: ['Angular', 'React.js'],
    status: 'Production',
  },
]

export const projectFilters = ['All', 'Enterprise', 'Frontend', 'Angular', 'React', 'Next.js', 'Personal'] as const
