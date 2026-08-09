import { NavLink } from 'react-router-dom'
import Container from '@/components/common/Container'
import { profile } from '@/data/profile'
import { navItems } from '@/data/nav'
import { Mail, MapPin, Phone } from 'lucide-react'

const stack = ['React', 'Angular', 'Next.js', 'React Native', 'TypeScript', 'JavaScript', 'Tailwind CSS']

export default function Footer() {
  const links = navItems.flatMap((item) => (item.children ? item.children : [{ label: item.label, path: item.path! }]))

  return (
    <footer className="border-t border-border mt-32">
      <Container className="py-8 lg:py-10">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
          <div>
            <p className="font-semibold">{profile.name}</p>
            <p className="text-sm text-muted mt-1">{profile.title}</p>

            <div className="mt-4 space-y-2 text-sm text-muted">
              {profile.phone && (
                <p className="flex items-center gap-1.5">
                  <Phone size={14} />
                  <a href={`tel:${profile.phone}`} className="hover:text-foreground transition-colors">
                    {profile.phone}
                  </a>
                </p>
              )}
              {profile.location && (
                <p className="flex items-center gap-1.5">
                  <MapPin size={14} />
                  {profile.location}
                </p>
              )}
              <p className="flex items-center gap-1.5">
                <Mail size={14} />
                <a href={`mailto:${profile.email}`} className="hover:text-foreground transition-colors">
                  {profile.email}
                </a>
              </p>
            </div>
          </div>
          <div>
            <p className="mono-label text-muted mb-4">Navigation</p>
            <ul className="space-y-2 text-sm">
              {links.map((l) => (
                <li key={l.path}>
                  <NavLink to={l.path} className="text-muted hover:text-foreground transition-colors">
                    {l.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mono-label text-muted mb-4">Resources</p>
            <ul className="space-y-2 text-sm">
              <li><a href={profile.github} target="_blank" rel="noreferrer" className="text-muted hover:text-foreground transition-colors">GitHub</a></li>
              <li><a href={profile.linkedin} target="_blank" rel="noreferrer" className="text-muted hover:text-foreground transition-colors">LinkedIn</a></li>
              <li><a href={`mailto:${profile.email}`} className="text-muted hover:text-foreground transition-colors">Email</a></li>
            </ul>
          </div>

          <div>
            <p className="mono-label text-muted mb-4">Stack</p>
            <div className="flex flex-wrap gap-1.5">
              {stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-border px-2.5 py-1 text-xs text-muted"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-14 flex gap-2 border-t border-border pt-6 text-xs text-muted justify-between">
          <p>© 2026 {profile.name}</p>
          <p>Built with React + TypeScript</p>
        </div>
      </Container>
    </footer>
  )
}