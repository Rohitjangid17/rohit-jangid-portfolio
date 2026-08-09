import { Technology } from '@/types'

export const technologies: Technology[] = [
  { name: 'JavaScript', category: 'Language', description: 'Core language for interactive, dynamic web interfaces.' },
  { name: 'TypeScript', category: 'Language', description: 'Typed superset of JavaScript used for safer, more maintainable code.' },
  { name: 'HTML', category: 'Language', description: 'Semantic structure for accessible web pages.' },
  { name: 'CSS', category: 'Language', description: 'Styling, layout and responsive design fundamentals.' },

  { name: 'Angular', category: 'Framework', description: 'Primary framework for enterprise-scale production applications.' },
  { name: 'React.js', category: 'Framework', description: 'Component-driven UI development for modern web apps.' },
  { name: 'Next.js', category: 'Framework', description: 'React framework for production-grade, SEO-friendly applications.' },

  { name: 'Tailwind CSS', category: 'Styling', description: 'Utility-first styling for fast, consistent UI development.' },
  { name: 'SCSS', category: 'Styling', description: 'Structured, maintainable stylesheets with variables and nesting.' },
  { name: 'Bootstrap', category: 'Styling', description: 'Component library for rapid, responsive layouts.' },
  { name: 'Material UI', category: 'Styling', description: 'React component library following Material Design.' },
  { name: 'Angular Material', category: 'Styling', description: 'Angular component library for consistent enterprise UI.' },
  { name: 'Ant Design', category: 'Styling', description: 'Enterprise-focused React UI component system.' },
  { name: 'PrimeNG', category: 'Styling', description: 'Rich Angular UI component suite for data-heavy interfaces.' },

  { name: 'Redux', category: 'State & Data', description: 'Predictable state management for complex React applications.' },
  { name: 'RxJS', category: 'State & Data', description: 'Reactive programming for Angular services and async streams.' },
  { name: 'React Query', category: 'State & Data', description: 'Server-state fetching, caching and synchronization.' },
  { name: 'REST APIs', category: 'State & Data', description: 'Integrating frontend applications with backend services.' },

  { name: 'Jasmine', category: 'Testing', description: 'Behavior-driven unit testing framework used with Angular.' },
  { name: 'Karma', category: 'Testing', description: 'Test runner for executing Angular unit tests in real browsers.' },

  { name: 'Git', category: 'Tools', description: 'Version control for collaborative development.' },
  { name: 'GitHub', category: 'Tools', description: 'Code hosting, collaboration and CI workflows.' },
  { name: 'GitLab', category: 'Tools', description: 'Source control and CI/CD in enterprise environments.' },
  { name: 'Postman', category: 'Tools', description: 'API testing and request debugging.' },
  { name: 'Swagger', category: 'Tools', description: 'API documentation and contract verification.' },
  { name: 'VS Code', category: 'Tools', description: 'Primary development environment.' },

  { name: 'ChatGPT', category: 'AI Toolkit', description: 'Used to accelerate research, debugging and documentation.' },
  { name: 'Claude AI', category: 'AI Toolkit', description: 'Used for code review, refactoring support and architecture discussion.' },
  { name: 'GitHub Copilot', category: 'AI Toolkit', description: 'In-editor pair-programming assistance.' },
  { name: 'Gemini', category: 'AI Toolkit', description: 'Supplementary AI assistance for research and problem-solving.' },
]

export const currentlyExploring = [
  // TODO: replace with what you're actually exploring right now
  'Advanced Next.js App Router patterns',
  'Web performance & Core Web Vitals',
]
