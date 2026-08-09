import { ExperienceEntry } from '@/types'

export const experience: ExperienceEntry[] = [
  {
    id: 'vertexplus',
    company: 'VertexPlus Technologies',
    role: 'Frontend Developer',
    period: 'TODO: start – present', // TODO: fill exact dates
    location: 'Jaipur, India',
    employmentType: 'Full-time',
    summary:
      'Built and maintained frontend modules for a large logistics/fleet-management platform, working across enterprise-scale Angular applications.',
    responsibilities: [
      {
        group: 'Fleet & Operations Modules',
        items: ['Trip', 'Sites', 'Routes', 'Device Inventory', 'Fuel & Maintenance', 'Driver'],
      },
      {
        group: 'Reporting & Compliance',
        items: ['Trip Reports', 'Safety Reports', 'Control Tower', 'Score Card', 'XCAN Reports'],
      },
      {
        group: 'Documents & Finance',
        items: ['Documents', 'Receipt & Invoice', 'Challan', 'ePOD'],
      },
      {
        group: 'Admin & Dashboards',
        items: ['Customer Admin', 'Dashboards', 'Workflow'],
      },
    ],
    technologies: ['Angular', 'TypeScript', 'RxJS', 'Angular Material', 'PrimeNG', 'REST APIs'],
  },
  {
    id: 'infoants',
    company: 'InfoAnts LLP',
    role: 'Frontend Developer',
    period: 'TODO: start – end', // TODO: fill exact dates
    location: 'Jaipur, India',
    employmentType: 'Full-time',
    summary:
      'Developed and contributed to two production-facing products, working across Angular and the React/Next.js ecosystem.',
    responsibilities: [
      {
        group: 'QGen — AI-based Question Generator',
        items: ['Built core UI flows', 'Integrated with backend AI services', 'Responsive layout implementation'],
      },
      {
        group: 'Backpacker Tour Booking CMS',
        items: ['Built booking and CMS interfaces', 'Integrated payment gateways (Stripe, Razorpay, PayPal)'],
      },
    ],
    technologies: ['Angular', 'React.js', 'Next.js', 'Tailwind CSS'],
    projects: ['QGen AI-based Question Generator', 'Backpacker Tour Booking CMS'],
  },
  {
    id: 'cynosure',
    company: 'Cynosure Technology',
    role: 'Junior Frontend Developer',
    period: 'TODO: start – end', // TODO: fill exact dates
    location: 'Jaipur, India',
    employmentType: 'Full-time',
    summary:
      'Started my professional frontend career here, contributing to HRMS and consulting-facing products across Angular and React.',
    responsibilities: [
      {
        group: 'Products',
        items: ['Timelabs HRMS', 'CTPL Console', 'Timelabs Website', 'Cynosure Website'],
      },
    ],
    technologies: ['Angular', 'React.js'],
    projects: ['Timelabs HRMS', 'CTPL Console', 'Timelabs Website', 'Cynosure Website'],
  },
]

export const award = {
  title: 'Emerging Talent Award',
  company: 'Cynosure Technology',
  // TODO: add exact date and short recognition story, and drop the image at src/assets/award/
  description: 'Recognized for early impact and growth as a junior frontend developer.',
}

export const lessonsLearned = [
  'Working directly on production modules taught me to think about maintainability, not just working code.',
  'Enterprise applications reward reusable, well-structured components over one-off solutions.',
  'Cross-team collaboration with backend and QA shapes how I approach API integration.',
  'Debugging real production issues sharpened my understanding of the full request-to-render lifecycle.',
]
