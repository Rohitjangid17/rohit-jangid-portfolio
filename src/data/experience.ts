import { ExperienceEntry } from '@/types'

export const experience: ExperienceEntry[] = [
  {
    id: 'vertexplus',
    company: 'VertexPlus Technologies Limited',
    role: 'Software Developer',
    period: 'November 2025 – Present',
    location: 'Jaipur, Rajasthan, India',
    employmentType: 'Full-time · On-site',
    summary:
      'Working on XSwift, an enterprise logistics, shipment, and fleet management platform using Angular, TypeScript, Bootstrap, and SCSS.',
    responsibilities: [
      {
        group: 'XSwift — Logistics, Shipment & Fleet Management Platform',
        items: [
          'Developed frontend solutions using Angular, TypeScript, Bootstrap, and SCSS.',
          'Implemented 18+ business-critical logistics modules supporting trip planning, route management, fleet operations, customer management, ePOD, reporting, dashboards, and transportation workflows.',
          'Integrated REST APIs to support shipment tracking, fleet operations, and end-to-end business workflows across multiple application modules.',
          'Delivered new business features, enhanced existing modules, and resolved production issues across enterprise logistics applications.',
          'Wrote unit test cases using Jasmine and Karma to validate business logic and maintain application quality.',
        ],
      },
    ],
    technologies: [
      'Angular',
      'TypeScript',
      'Bootstrap',
      'SCSS',
      'REST APIs',
      'Jasmine',
      'Karma',
    ],
    projects: ['XSwift — Logistics, Shipment & Fleet Management Platform'],
  },

  {
    id: 'infoants',
    company: 'InfoAnts LLP',
    role: 'Frontend Developer',
    period: 'December 2024 – October 2025',
    location: 'Noida, Uttar Pradesh, India',
    employmentType: 'Full-time · Remote',
    summary:
      'Worked across Angular, React.js, and Next.js on production applications including an AI-powered educational CMS, multilingual tour booking platform, and real-time crypto-based P2P betting platform.',
    responsibilities: [
      {
        group: 'QGen — AI-based Question Generator',
        items: [
          'Developed a dynamic Content Management System (CMS) using Angular, TypeScript, and Tailwind CSS for an AI-powered educational platform.',
          'Designed and implemented CMS modules for managing question templates, subjects, chapters, topics, difficulty levels, and educational content.',
          'Integrated REST APIs to support end-to-end content management workflows across multiple CMS modules.',
        ],
      },
      {
        group: 'Backpacker — Tour Booking CMS',
        items: [
          'Developed frontend modules for a multilingual travel booking platform using React.js, Next.js, TypeScript, and Tailwind CSS.',
          'Implemented business modules for managing tours, destinations, travel packages, blogs, itineraries, and promotional content through a centralized administration portal.',
          'Performed frontend testing, debugging, and quality improvements by validating UI workflows, handling API integration issues, fixing defects, and ensuring cross-browser compatibility and application stability.',
        ],
      },
      {
        group: 'FireXch — Real-Time Crypto Trading & Betting Platform',
        items: [
          'Developed frontend modules for a real-time crypto trading and betting platform using React.js, TypeScript, and Tailwind CSS.',
          'Implemented 15+ business-critical modules supporting user management, KYC verification, wallet management, betting operations, transactions, reports, notifications, and platform administration.',
          'Integrated WebSocket-based real-time communication for live betting activities, wallet transactions, odds updates, and market data.',
          'Integrated REST APIs using React Query (TanStack Query) and Axios for efficient data fetching, caching, server-state management, and seamless synchronization across multiple application modules, along with frontend testing, debugging, and defect resolution to ensure application reliability and quality.',
        ],
      },
    ],
    technologies: [
      'Angular',
      'React.js',
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'React Query',
      'Axios',
      'WebSocket',
      'REST APIs',
    ],
    projects: [
      'QGen — AI-based Question Generator',
      'Backpacker — Tour Booking CMS',
      'FireXch — Real-Time Crypto Trading & Betting Platform',
    ],
  },

  {
    id: 'cynosure',
    company: 'Cynosure Technology Private Limited',
    role: 'Junior Frontend Developer',
    period: 'October 2023 – November 2024',
    location: 'Jaipur, Rajasthan, India',
    employmentType: 'Full-time · On-site',
    summary:
      'Worked on HRMS, employee self-service, administration, and product/company web applications using Angular, React.js, and React Native.',
    responsibilities: [
      {
        group: 'Timelabs HRMS — SaaS-Based Client HR Management Platform',
        items: [
          'Developed frontend modules for an enterprise SaaS-based HRMS platform using React.js and Angular, supporting employee lifecycle and workforce management workflows.',
          'Implemented 8+ business-critical HR modules covering onboarding, employee self-service (ESS), attendance, payroll, helpdesk, visitor management, and other HR operations.',
          'Integrated REST APIs to support end-to-end HR processes, real-time data synchronization, and business workflow automation across multiple application modules.',
          'Integrated WhatsApp chatbot functionality to automate HR operations, including attendance updates and leave request workflows.',
        ],
      },
      {
        group: 'Timelabs ESS Mobile Application — Employee Self-Service App',
        items: [
          'Developed a cross-platform Employee Self-Service (ESS) mobile application using React Native to enable employees to access HR services on Android and iOS platforms.',
          'Implemented 8+ employee-focused modules including attendance tracking, leave management, employee profile, notifications, holiday calendar, salary details, HR service requests, and self-service workflows.',
          'Integrated REST APIs for real-time data synchronization between the mobile application and HRMS backend services.',
        ],
      },
      {
        group: 'CTPL Console — Admin Management Dashboard',
        items: [
          'Built an admin dashboard using React.js to manage subscriptions, user roles, and client configurations.',
          'Designed reusable components and implemented secure authentication using token-based systems, ensuring reliable access control and smooth data handling across modules.',
        ],
      },
      {
        group: 'Timelabs Website — Product & Marketing Site',
        items: [
          'Developed responsive product and pricing pages using React.js.',
          'Focused on reusable UI components and structured layouts to deliver a consistent user experience across different devices.',
        ],
      },
      {
        group: 'Cynosure Website — Company Profile & Services',
        items: [
          'Designed and developed a responsive company website using React.js.',
          'Followed a mobile-first approach and ensured clear presentation of services, navigation, and overall user experience.',
        ],
      },
    ],
    technologies: [
      'Angular',
      'React.js',
      'React Native',
      'JavaScript',
      'REST APIs',
    ],
    projects: [
      'Timelabs HRMS',
      'Timelabs ESS Mobile Application',
      'CTPL Console',
      'Timelabs Website',
      'Cynosure Website',
    ],
  },
]

export const award = {
  title: 'Emerging Talent Award',
  company: 'Cynosure Technology',
  description:
    'Awarded at Cynosure Technology for excellence in frontend module delivery and collaboration on HRMS projects.',
}

export const lessonsLearned = [
  'Working directly on production modules taught me to think about maintainability, not just working code.',
  'Enterprise applications reward reusable, well-structured components over one-off solutions.',
  'Cross-team collaboration with backend and QA shapes how I approach API integration.',
  'Debugging real production issues sharpened my understanding of the full request-to-render lifecycle.',
]
