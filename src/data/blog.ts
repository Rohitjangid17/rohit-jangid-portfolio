import { BlogPost } from '@/types'

// TODO: replace with real articles once written. Kept intentionally small
// rather than filled with placeholder filler content.
export const blogPosts: BlogPost[] = [
  {
    slug: 'thinking-in-reusable-components',
    title: 'Thinking in Reusable Components',
    category: 'Frontend Engineering',
    date: '2026-06-01',
    readingTime: '5 min read',
    summary: 'Notes on designing component APIs that hold up across an enterprise Angular codebase.',
  },
  {
    slug: 'state-vs-server-state',
    title: 'State vs. Server State: What React Query Fixed for Me',
    category: 'React',
    date: '2026-05-12',
    readingTime: '4 min read',
    summary: 'Why separating client UI state from server-cache state changed how I structure React apps.',
  },
]
