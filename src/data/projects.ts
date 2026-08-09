import { Project } from '@/types'

export const projects: Project[] = [
  {
    slug: 'xswift-logistics',
    name: 'XSwift — Logistics & Fleet Management Platform',
    category: 'Enterprise',
    description:
      'Enterprise logistics and fleet management platform with 18+ business-critical modules covering trip planning, route management, fleet operations, customer management, ePOD, reporting, dashboards, and transportation workflows.',
    role: 'Software Developer',
    technologies: ['Angular', 'TypeScript', 'Bootstrap', 'SCSS', 'Jasmine', 'Karma'],
    status: 'Production',
    featured: true,
    overview:
      'XSwift is an enterprise logistics and fleet management platform designed to manage transportation operations, fleet workflows, trip execution, route management, reporting, and customer operations through a centralized web application.',
    challenges: [
      'Managing multiple business-critical logistics workflows across a large enterprise application.',
      'Maintaining consistent UI and reusable components across different operational modules.',
      'Handling complex API-driven workflows and data-heavy enterprise interfaces.'
    ],
    solution: [
      'Built and maintained reusable Angular components for multiple business modules.',
      'Integrated REST APIs and implemented structured frontend workflows for operational data.',
      'Developed responsive enterprise interfaces using Bootstrap and SCSS.',
      'Added unit test coverage using Jasmine and Karma for frontend functionality.'
    ],
    keyFeatures: [
      'Trip Management',
      'Route Management',
      'Sites Management',
      'Workflow Management',
      'Device Inventory',
      'Fuel & Maintenance',
      'Receipt & Invoice',
      'Customer Administration',
      'Dashboards & Reports',
      'ePOD & Challan',
      'Driver Management',
      'Safety Reports'
    ],
    results: [
      'Contributed to 18+ production modules across the logistics and fleet management platform.',
      'Delivered reusable and maintainable Angular UI components for enterprise workflows.',
      'Supported production-ready API-driven features and reporting interfaces.'
    ]
  },

  {
    slug: 'firexch',
    name: 'FireXch — Real-Time Crypto Trading & Betting Platform',
    category: 'React.js',
    description:
      'Real-time crypto trading and betting platform with 15+ modules covering user management, KYC, wallet management, betting, transactions, reports, notifications, and administration.',
    role: 'Frontend Developer',
    technologies: [
      'React.js',
      'TypeScript',
      'Tailwind CSS',
      'React Query',
      'Axios',
      'WebSocket'
    ],
    status: 'Production',
    featured: true,
    overview:
      'FireXch is a real-time web platform combining crypto-related workflows and betting operations with user, wallet, transaction, reporting, and administrative functionality.',
    challenges: [
      'Handling real-time application data and frequently changing platform states.',
      'Building consistent interfaces across multiple user and administration workflows.',
      'Managing API data efficiently across a large React.js application.'
    ],
    solution: [
      'Built reusable React.js components using TypeScript and Tailwind CSS.',
      'Integrated REST APIs using Axios and managed server state with React Query.',
      'Implemented WebSocket-based real-time data updates.',
      'Developed responsive interfaces for user and administrative workflows.'
    ],
    keyFeatures: [
      'User Management',
      'KYC Management',
      'Wallet Management',
      'Betting Workflows',
      'Transactions',
      'Reports',
      'Notifications',
      'Administration'
    ],
    results: [
      'Contributed to 15+ production modules.',
      'Implemented real-time frontend workflows using WebSocket.',
      'Improved maintainability through reusable React components and centralized API state management.'
    ]
  },

  {
    slug: 'backpacker-cms',
    name: 'Backpacker — Tour Booking CMS',
    category: 'Next.js',
    description:
      'Multilingual tour booking and content management platform for managing tours, destinations, travel packages, blogs, itineraries, and promotional content.',
    role: 'Frontend Developer',
    technologies: [
      'React.js',
      'Next.js',
      'TypeScript',
      'Tailwind CSS'
    ],
    status: 'Production',
    featured: true,
    overview:
      'Backpacker is a multilingual tour booking and content management platform used to manage travel content, tour packages, destinations, itineraries, blogs, and promotional information.',
    challenges: [
      'Managing multiple content types through a structured CMS interface.',
      'Creating reusable UI components for different tourism and content workflows.',
      'Maintaining responsive layouts across different screen sizes.'
    ],
    solution: [
      'Developed reusable React.js and Next.js components using TypeScript.',
      'Built responsive CMS interfaces using Tailwind CSS.',
      'Implemented structured content management workflows for tours, destinations, blogs, and itineraries.'
    ],
    keyFeatures: [
      'Tour Management',
      'Destination Management',
      'Travel Packages',
      'Itinerary Management',
      'Blog Management',
      'Promotional Content',
      'Multilingual Content'
    ],
    results: [
      'Delivered production-ready frontend workflows for tour and content management.',
      'Created reusable responsive components across multiple CMS sections.'
    ]
  },

  {
    slug: 'qgen',
    name: 'QGen — AI-Based Question Generator',
    category: 'Angular',
    description:
      'AI-powered educational CMS for managing question templates, subjects, chapters, topics, difficulty levels, and structured educational content through API-driven workflows.',
    role: 'Frontend Developer',
    technologies: [
      'Angular',
      'TypeScript',
      'Tailwind CSS',
      'REST APIs'
    ],
    status: 'Production',
    featured: true,
    overview:
      'QGen is an AI-assisted educational platform focused on structured question generation and management across subjects, chapters, topics, templates, and difficulty levels.',
    challenges: [
      'Creating structured workflows for complex educational content.',
      'Managing dynamic form-based interfaces and API-driven data.',
      'Keeping the interface simple while supporting multiple question-generation workflows.'
    ],
    solution: [
      'Developed Angular components for question and educational content management.',
      'Integrated REST APIs for dynamic data and content workflows.',
      'Created responsive interfaces using Tailwind CSS.',
      'Built reusable form and UI components for different content-management scenarios.'
    ],
    keyFeatures: [
      'Question Generation',
      'Question Templates',
      'Subject Management',
      'Chapter Management',
      'Topic Management',
      'Difficulty Levels',
      'Educational Content Management'
    ],
    results: [
      'Delivered production-ready Angular workflows for AI-assisted question management.',
      'Implemented reusable UI components and API-driven content flows.'
    ]
  },

  {
    slug: 'timelabs-hrms',
    name: 'Timelabs HRMS — SaaS HR Management Platform',
    category: 'Angular',
    description:
      'Enterprise SaaS HRMS platform with 8+ modules covering onboarding, employee self-service, attendance, payroll, helpdesk, visitor management, and HR operations.',
    role: 'Junior Frontend Developer',
    technologies: ['Angular', 'React.js', 'REST APIs'],
    status: 'Production',
    featured: true,
    overview:
      'Timelabs HRMS is a SaaS-based human resource management platform supporting employee and HR operations through multiple enterprise modules.',
    challenges: [
      'Supporting multiple HR workflows within a shared enterprise application.',
      'Maintaining reusable UI patterns across different HR modules.',
      'Integrating API-driven employee and HR data.'
    ],
    solution: [
      'Developed Angular-based HR management interfaces and reusable components.',
      'Integrated REST APIs for employee and HR workflows.',
      'Contributed to responsive administration and employee-facing interfaces.'
    ],
    keyFeatures: [
      'Employee Onboarding',
      'Employee Self-Service',
      'Attendance',
      'Payroll',
      'Helpdesk',
      'Visitor Management',
      'HR Operations',
      'Administration'
    ],
    results: [
      'Contributed to 8+ production modules.',
      'Delivered reusable frontend components for HR workflows.',
      'Supported API-driven enterprise HR management features.'
    ]
  },

  {
    slug: 'timelabs-ess',
    name: 'Timelabs ESS — Employee Self-Service App',
    category: 'React Native',
    description:
      'Cross-platform employee self-service mobile application with 8+ modules including attendance, leave management, employee profile, notifications, salary details, and HR service requests.',
    role: 'Junior Frontend Developer',
    technologies: ['React Native', 'JavaScript', 'REST APIs'],
    status: 'Production',
    featured: false,
    overview:
      'Timelabs ESS is a cross-platform employee self-service mobile application providing employees with access to common HR services and information.',
    challenges: [
      'Building reusable mobile interfaces for multiple employee workflows.',
      'Handling API-driven HR information across different mobile screens.'
    ],
    solution: [
      'Developed React Native screens and reusable components.',
      'Integrated REST APIs for employee and HR service workflows.',
      'Implemented responsive mobile layouts for different device sizes.'
    ],
    keyFeatures: [
      'Attendance',
      'Leave Management',
      'Employee Profile',
      'Notifications',
      'Salary Details',
      'HR Service Requests'
    ],
    results: [
      'Contributed to 8+ employee self-service modules.',
      'Delivered reusable React Native components for mobile HR workflows.'
    ]
  },

  {
    slug: 'vizitrac',
    name: 'Vizitrac — Visitor Management App',
    category: 'React Native',
    description:
      'Cross-platform visitor management application with 5+ modules for visitor registration, check-in/check-out, approvals, tracking, and notifications.',
    role: 'Junior Frontend Developer',
    technologies: ['React Native', 'REST APIs'],
    status: 'Production',
    featured: false,
    overview:
      'Vizitrac is a visitor management application designed to streamline visitor registration, approvals, tracking, and check-in/check-out workflows.',
    challenges: [
      'Creating a simple mobile workflow for visitor registration and approvals.',
      'Managing visitor information through API-driven screens.'
    ],
    solution: [
      'Developed React Native interfaces for visitor management workflows.',
      'Integrated REST APIs for visitor registration and tracking.',
      'Created reusable mobile UI components.'
    ],
    keyFeatures: [
      'Visitor Registration',
      'Check-in / Check-out',
      'Visitor Approvals',
      'Visitor Tracking',
      'Notifications'
    ],
    results: [
      'Contributed to 5+ production modules.',
      'Implemented mobile visitor-management workflows using React Native.'
    ]
  },

  {
    slug: 'ctpl-console',
    name: 'CTPL Console — Enterprise Admin Dashboard',
    category: 'React.js',
    description:
      'Enterprise administration platform with 10+ modules for client onboarding, subscription management, user administration, access management, and system configuration.',
    role: 'Junior Frontend Developer',
    technologies: ['React.js', 'REST APIs'],
    status: 'Production',
    featured: false,
    overview:
      'CTPL Console is an enterprise administration dashboard used for managing clients, subscriptions, users, access, and system configuration.',
    challenges: [
      'Managing multiple administrative workflows within a centralized dashboard.',
      'Maintaining consistent UI patterns across different administration modules.'
    ],
    solution: [
      'Developed reusable React.js components for administration workflows.',
      'Integrated REST APIs for client, user, and subscription management.',
      'Built responsive dashboard interfaces for enterprise users.'
    ],
    keyFeatures: [
      'Client Onboarding',
      'Subscription Management',
      'User Administration',
      'Access Management',
      'System Configuration'
    ],
    results: [
      'Contributed to 10+ production modules.',
      'Delivered reusable React.js components for enterprise administration workflows.'
    ]
  },
  {
    slug: 'timelabs-website',
    name: 'Timelabs Website — Product & Marketing Site',
    category: 'React.js',
    description:
      'Product and marketing website for Timelabs, showcasing its HRMS solutions, features, modules, and business capabilities.',
    role: 'Junior Frontend Developer',
    technologies: ['React.js', 'JavaScript', 'REST APIs'],
    status: 'Production',
    featured: false,
    overview:
      'Timelabs Website is the product and marketing website for the Timelabs HRMS platform, presenting its HR management solutions, product features, modules, and business information.',
    challenges: [
      'Building responsive product and marketing interfaces using React.js.',
      'Maintaining consistent layouts and reusable UI components across website sections.',
      'Presenting HRMS product information through structured and user-friendly interfaces.'
    ],
    solution: [
      'Developed responsive website interfaces using React.js.',
      'Created reusable React components for different website sections.',
      'Implemented structured product and marketing content layouts.',
      'Integrated REST APIs where required for dynamic website functionality.'
    ],
    keyFeatures: [
      'Product Information',
      'HRMS Features',
      'Product Modules',
      'Marketing Sections',
      'Responsive UI',
      'Reusable Components'
    ],
    results: [
      'Contributed to the development of the Timelabs product and marketing website.',
      'Built reusable React.js components for multiple website sections.',
      'Delivered responsive frontend interfaces for product presentation.'
    ]
  },

  {
    slug: 'cynosure-website',
    name: 'Cynosure Website — Company Profile & Services',
    category: 'React.js',
    description:
      'Company profile and services website for Cynosure Technology showcasing its services, solutions, capabilities, and company information.',
    role: 'Junior Frontend Developer',
    technologies: ['React.js', 'JavaScript', 'REST APIs'],
    status: 'Production',
    featured: false,
    overview:
      'Cynosure Website is the company profile and services website for Cynosure Technology, presenting the company, its services, solutions, capabilities, and business information.',
    challenges: [
      'Building a responsive company website using React.js.',
      'Maintaining consistent UI and reusable components across different website sections.',
      'Structuring company and service information into clear user-facing layouts.'
    ],
    solution: [
      'Developed responsive website interfaces using React.js.',
      'Created reusable React components for company and service sections.',
      'Implemented structured layouts for presenting services and company information.',
      'Integrated REST APIs where required for dynamic website functionality.'
    ],
    keyFeatures: [
      'Company Profile',
      'Services',
      'Solutions',
      'Business Information',
      'Responsive UI',
      'Reusable Components'
    ],
    results: [
      'Contributed to the development of the Cynosure Technology company website.',
      'Built reusable React.js components across multiple website sections.',
      'Delivered responsive frontend interfaces for company and service presentation.'
    ]
  },
]

export const projectFilters = [
  'All',
  'Enterprise',
  'React.js',
  'Angular',
  'Next.js',
  'React Native',
] as const