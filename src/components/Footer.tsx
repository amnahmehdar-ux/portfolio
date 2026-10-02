import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';
import { profile } from '@/data/profile';

const isPlaceholder = (v: string) =>
  v.includes('_URL') || v.includes('EMAIL');

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-ink-200 bg-ink-50">
      <div className="max-w-content mx-auto px-5 sm:px-8 py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2.5">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-ink-900 text-accent-400 font-display font-bold text-sm">
              A
            </span>
            <div className="text-left">
              <p className="text-sm font-semibold text-ink-900">{profile.name}</p>
              <p className="text-xs text-ink-500">
                {profile.role} · {profile.location}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {(
              [
                { href: `mailto:${profile.email}`, icon: Mail, label: 'Email' },
                { href: profile.linkedin, icon: Linkedin, label: 'LinkedIn' },
                { href: profile.github, icon: Github, label: 'GitHub' },
              ] as const
            ).map(({ href, icon: Icon, label }) => {
              const placeholder = isPlaceholder(href);
              return (
                <a
                  key={label}
                  href={placeholder ? undefined : href}
                  target={placeholder ? undefined : '_blank'}
                  rel={placeholder ? undefined : 'noopener noreferrer'}
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-ink-200 bg-white text-ink-500 hover:text-accent-600 hover:border-accent-300 transition-all"
                >
                  <Icon size={16} />
                </a>
              );
            })}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              aria-label="Back to top"
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-ink-200 bg-white text-ink-500 hover:text-accent-600 hover:border-accent-300 transition-all"
            >
              <ArrowUp size={16} />
            </button>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-ink-200 text-center text-xs text-ink-400">
          © {year} {profile.name}. Built with React, Vite & Tailwind CSS.
        </div>
      </div>
    </footer>
  );
}
